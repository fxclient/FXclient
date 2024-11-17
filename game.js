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
	b1, p, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, i, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, bU, bV, bW, m, bX, bY, bZ, g, ba, bb, dU, dV, dW, x, dX, y, f8, f9, fA, fB, fC, fD, fE, fF, fG, fH, fI, fJ, fK, hl, hk, hm,
	a2i, kk, jD, wt, qw, ta, a6Q, zp, zq;

function bc(bd) {
	e && !bd || (bf(), bA = new bg, b9 = new bh, b1 = new bi, p = new bj, a1 = new bk, ay = new bl, b4 = new bm, b5 = new bn, a2 = new bo, a3 = new bp, a4 = new bq, a5 = new br, a6 = new bs, a7 = new bt, a8 = new bu, a9 = new bv, aA = new bw, aB =
		new bx, aC = new by, aD = new bz, aE = new c0, aF = new c1, aG = new c2, aH = new c3, aI = new c4, aJ = new c5, aK = new c6, aL = new c7, aM = new c8, aN = new c9, aO = new cA, aP = new cB, aQ = new cC, aY = new cD, aZ = new cE, aa =
		new cF, aR = new cG, aS = new cH, aV = new cI, aT = new cJ, aU = new cK, aW = new cL, ao = new cM, aX = new cN, ac = new cO, ad = new cP, ae = new cQ, ap = new cR, an = new cS, ab = new cT, af = new cU, ag = new cV, ah = new cW, am =
		new cX, ai = new cY, aj = new cZ, ak = new ca, al = new cb, aq = new cc, ar = new cd, at = new ce, au = new cf, av = new cg, aw = new ch, ax = new ci, az = new cj, b0 = new ck, b2 = new cl, b3 = new u, b6 = new cm, b7 = new cn, b8 =
		new co, bB = new cp, bC = new cq, bD = new cr, bE = new cs, bF = new ct, bG = new cu, bH = new cv, bI = new cw, i = new cx, bJ = new cy, m = new cz, e = new d0, bX = new d1, bY = new d2, bV = new d3, bW = new d4, bP = new d5, bQ = new d6,
		bK = new d7, bL = new d8, bS = new d9, bT = new dA, bU = new dB, bZ = new dC, bR = new dD, g = new dE, ba = new dF, bb = new dG, e.dI(), m.dI(), am.dJ(), bY.dI(), ay.dI(), ay.dK(), (bM = new dL).dI(), ba.dI(), b1.dI(), bK.dI(), ap.dI(),
		b4.dI(), b5.dI(), bH.dI(), i.dI(), bN = new dM, am.dI(), m.n.dN(), bU.dI(), bR.dI(), bL.dI(), bO = new dO, an.dI(), aS.dP(), bJ.dI(), ac.dI(), aN.dI(), aw.dI(), aG.dI(), aW.dI(), b8.dI(), aP.dI(), bU.dQ = !0, setTimeout(function() {
			bH.v(2, 14071)
		}, 0), i.j(5, 5), b7.dR() || m.n.dS(), am.dT(), e.f = 1)
}

function d0() {
	this.dY = 1068, this.dI = function() {
		dU = 2, dW = 35, dV = "17 Nov 2024 [1.99.8.3]", x = true, y = function() {
			try {
				return window.self !== window.top
			} catch (d) {
				return !0
			}
		}(), dX = (new Date).getTime() % 1024
	}, this.f = 0
}

function dF() {
	this.id = new da, this.dI = function() {
		this.id.dI()
	}
}

function da() {
	this.dI = function() {
		0 === bY.db.data[181].value && (bY.db.dc(180, Math.floor(Math.random() * bA.pow(30))), bY.db.dc(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function cy() {
	this.dd = new de, this.df = new dg, this.dI = function() {
		m.n.dh()
	}
}

function de() {
	function ds() {}
	this.dI = function() {}, this.dr = function() {
		return !!ds() && (aiptag.cmd.player.push(function() {
			aiptag.adplayer.startVideoAd()
		}), !0)
	}, this.hideCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.hideCMPButton && aipAPItag.hideCMPButton()
	}, this.showCMPButton = function() {
		"undefined" != typeof aipAPItag && aipAPItag.showCMPButton && aipAPItag.showCMPButton()
	}, this.showCMPScreen = function() {
		ds() && aipAPItag.showCMPScreen()
	}
}

function dg() {
	this.show = function() {
		return !1
	}
}

function cF() {
	this.dx = new dy
}

function dy() {
	this.dz = function(e0) {
		var e1 = aQ.e2(e0);
		return (this.e3(a1.e4, e1) || this.e5(a1.e4, e1)) && 0 !== (e1 = function(eQ) {
			for (var eR = bB.eS(eQ), eT = bB.eU(eQ), max = Math.max(bH.eV, bH.eW) - 2, eX = max * max, eY = !1, eZ = 0, ea = 0; ea < max; ea++) {
				var eb, e6 = function(eR, eT, ea) {
					for (var z = 0; z <= ea; z++)
						for (var ed = -1; ed < 2; ed += 2)
							for (var ee = -1; ee < 2; ee += 2)
								for (var ef = 0; ef < 2; ef++) {
									var e0 = function(eR, eT) {
										if (bB.eh(eR, eT)) {
											eR = bB.ei(eR, eT), eT = bB.eA(eR);
											if (aQ.eF(eT) && aQ.ej(eT)) return eR
										}
										return 0
									}(eR + ef * ed * z + (1 - ef) * ee * ea, eT + ef * ee * ea + (1 - ef) * ed * z);
									if (e0) return e0
								}
					return 0
				}(eR, eT, ea);
				e6 && (eb = bB.ec(eR, eT, e6)) < eX && (eZ = e6, eX = eb, eY || (eY = !0, max = Math.floor(Math.sqrt(eb)) + 1))
			}
			return eZ
		}(bB.e8(e0))) && (e0 = bB.eA(e1), aQ.eB(e0) || (e0 = aQ.eC(e0)) !== a1.e4 && eD(e0, a1.e4)) ? e1 : 0
	}, this.eE = function(player, e6) {
		e6 = bB.eA(e6);
		if (aQ.eF(e6)) {
			if (aQ.eB(e6)) bD.eG[0] = a1.eH;
			else if (aQ.eC(e6) !== bD.eG[0]) return !1;
			for (var eI = function(e0) {
					var eM = aQ.eM,
						eI = [];
					loop: for (var eN = 3; 0 <= eN; eN--) {
						var eO = e0 + eM[eN];
						if (aQ.eP(eO)) {
							for (var id = aQ.e2(eO), z = 0; z < eI.length; z++)
								if (id === eI[z]) continue loop;
							bD.eL[eI.length] = eO, eI.push(id)
						}
					}
					return eI
				}(e6), eK = eI.length, z = 0; z < eK; z++)
				if (this.e3(player, eI[z]) || this.e5(player, eI[z])) return bD.eL[0] = bD.eL[z], !0
		}
		return !1
	}, this.e3 = function(player, e1) {
		for (var ek = aU.ek[player], eK = ek.length, el = Math.max(bA.em(eK, 12), 1), eM = aQ.eM, z = 0; z < eK; z += el)
			for (var e9 = ek[z], eN = 3; 0 <= eN; eN--) {
				var eO = e9 + eM[eN];
				if (aQ.eP(eO) && e1 === aQ.e2(eO)) return !0
			}
		return !1
	}, this.e5 = function(player, e1) {
		for (var ek = aU.ek[player], eK = ek.length, eM = aQ.eM, z = 0; z < eK; z++)
			for (var e9 = ek[z], eN = 3; 0 <= eN; eN--) {
				var eO = e9 + eM[eN];
				if (aQ.eP(eO) && e1 === aQ.e2(eO)) return !0
			}
		return !1
	}
}

function cr() {
	this.eq = new Uint16Array(2), this.er = new Uint16Array(2), this.es = new Uint32Array(2), this.et = new Uint32Array(2), this.eu = new Uint8Array(4), this.ev = new Uint8Array(4), this.eL = new Uint32Array(4), this.ew = new Uint32Array(5), this
		.eG = new Uint32Array(8), this.ex = new Uint16Array(16), this.ey = new Uint16Array(512), this.ez = function(f0, f1) {
			return f0[0] = f1, f0
		}, this.f2 = function(f0, f1, f3) {
			return f0[0] = f1, f0[1] = f3, f0
		}, this.f4 = function(f0, f1, f3, f5) {
			return f0[0] = f1, f0[1] = f3, f0[2] = f5, f0
		}, this.f6 = function(f0, f1, f3, f5, f7) {
			return f0[0] = f1, f0[1] = f3, f0[2] = f5, f0[3] = f7, f0
		}
}

function fL() {
	fE = 0, fF = 2048, fG = new Uint32Array(4 * fF), fH = 0, fI = new Uint32Array(fF), fJ = new Uint8Array(bH.eV * bH.eW)
}

function fM(player) {
	f9 = player, fK = !1, fN(), fO();
	for (var z = aR.fP(f9) - 1; 0 <= z; z--) 0 === aR.fQ(f9, z) && (f8 = z, fR());
	fK && fS()
}

function fS() {
	fT(), fU()
}

function fR() {
	fD = aR.fV(f9, f8), fA = aR.fW(f9, f8), fB = aR.fX(f9, f8), fY(), (0 !== fE && (fa(), fb()) ? fc : fZ)()
}

function fb() {
	if (!((fC = bA.em(fA, fE)) > a1.fd)) {
		if (!fB) return !1;
		var fe = fE * (1 + a1.fd);
		fA += b1.ff.fg(f9, fe - fA), fC = bA.em(fA, fE)
	}
	return !0
}

function fa() {
	for (var z = fE - 1; 0 <= z; z--) fJ[bA.em(fG[z], 4)] = 0
}

function fZ() {
	1 === aR.fP(f9) && a3.fh(f9);
	var dv = b1.ff.fi(f9, fA);
	bS.fj(f9, fA - dv, 12), aR.fk(f9, f8)
}

function fN() {
	for (var player = f9, fl = aU.fl, eK = Math.min(fl[player].length, fF), fm = 0, fn = fI, z = eK - 1; 0 <= z; z--) fn[fm++] = fl[player][z];
	fH = fm
}

function fO() {
	for (var z = aU.fl[f9].length - 1; 0 <= z; z--) aQ.eF(aU.fl[f9][z]) && aQ.fo(aU.fl[f9][z], f9);
	aU.fl[f9] = []
}

function fY() {
	fE = 0, (fD === a1.eH ? fp : fq)()
}

function fq() {
	for (var fr, fs, z, eM = aQ.eM, eN = 3; 0 <= eN; eN--)
		for (z = fH - 1; 0 <= z; z--) fr = fI[z] + eM[eN], fs = bA.em(fr, 4), 0 === fJ[fs] && aQ.ft(fr) && aQ.eC(fr) === fD && (fJ[fs] = 1, fG[fE++] = fr)
}

function fp() {
	for (var fr, fs, z, eM = aQ.eM, eN = 3; 0 <= eN; eN--)
		for (z = fH - 1; 0 <= z; z--) fr = fI[z] + eM[eN], fs = bA.em(fr, 4), 0 === fJ[fs] && aQ.eB(fr) && (fJ[fs] = 1, fG[fE++] = fr)
}

function fc() {
	fu() ? (fv(), fD !== a1.eH && fw()) : fZ()
}

function fw() {
	fx(), fy(aU.fz[fD]), fy(aU.g0[fD]), bH.g1(bH.g2) && fy(aU.ek[fD]), g3(aU.fl[fD]), g4(aU.g0[fD]), g4(aU.ek[fD]), g5(), g6()
}

function fv() {
	fK = !0, aR.g7(f9, f8, fA), aR.g8(f9, f8), aU.g9[f9] += fE, gA(), gB()
}

function fu() {
	return (fD === a1.eH ? gC : gD)()
}

function gD() {
	var gE = fE * a1.fd,
		gF = gG(),
		gH = gI(),
		gF = gE + 2 * gF + gH,
		gK = fC * fE;
	return gF < gK ? (fA -= gF, bS.fj(f9, gF, 13), gL(gF - gE, gH), !0) : fB && 0 === gH ? (fA -= gK, gK += b1.ff.fg(f9, gF - gK + 1), bS.fj(f9, gK, 13), gL(gK - gE, 0), !0) : (fA -= gK, bS.fj(f9, gK, 13), gL(gK - gE, gH), !1)
}

function gL(gK, gH) {
	if (0 < gH) {
		if (gK <= gH) return bS.fj(fD, gK, 13), void aR.gM(fD, f9, gH - gK);
		aR.gM(fD, f9, 0), gK -= gH
	}
	gK = bA.em(gK, 2), gK = Math.min(aU.gN[fD], gK), bS.fj(fD, gK, 13), aU.gN[fD] -= gK
}

function gI() {
	return aR.gO(fD, f9)
}

function gG() {
	return bA.em(fE * aU.gN[fD], 1 + bA.em(10 * aU.g9[fD], 16))
}

function gC() {
	var gP = fE * a1.fd;
	return fA -= gP, bS.fj(f9, gP, 13), !0
}

function gB() {
	for (var z = fE - 1; 0 <= z; z--) aU.fl[f9].push(fG[z]), aU.fz[f9].push(fG[z]), aQ.fo(fG[z], f9)
}

function cw() {
	var gQ = 0,
		gR = 0;
	this.gS = function(eR, eT) {
		gQ = eR, gR = eT
	}, this.gT = function(gU) {
		a1.gV || a9.gW || (b1.ff.gX(0) || b1.ff.gX(1)) && b1.ff.gY(a1.e4) && (aE.gZ(gQ, gR) ? aE.ga = !1 : function(gU) {
			var gc = bB.gd(gQ),
				ge = bB.gf(gR),
				e6 = bB.ei(gc, ge),
				e0 = bB.eA(e6);
			bB.gg(gc, ge) && (a1.gh ? aQ.eF(e0) && az.gi.gj(e6) : aQ.eP(e0) ? gU || (gc = aa.dx.dz(e0)) && (ge = bB.eA(gc), ge = aQ.eB(ge) ? a1.eH : aQ.eC(ge), az.gi.gm(aE.gn(), gc, ge)) : aQ.go(e0) || gU ? bC.gp.gq(a1.e4, e6) && az.gi
				.gr(aE.gn(), e6) : aQ.eB(e0) ? gs(a1.e4) ? az.gi.gt(aE.gn(), a1.eH) : gu(a1.e4, a1.eH) ? aq.gv(a1.eH, aE.gn()) : bC.gp.gq(a1.e4, e6) && az.gi.gr(aE.gn(), e6) : (gc = aQ.eC(e0)) !== a1.e4 && (eD(gc, a1.e4) ? gw(a1.e4,
					gc) ? az.gi.gt(aE.gn(), gc) : gu(a1.e4, gc) ? aq.gv(gc, aE.gn()) : bC.gp.gq(a1.e4, e6) && az.gi.gr(aE.gn(), e6) : bC.gp.gq(a1.e4, e6) && az.gi.gr(aE.gn(), e6)))
		}(gU))
	}
}

function gx(gy, size, gz, h0, font) {
	var z, h3 = .2,
		h4 = document.createElement("canvas"),
		h5 = h4.getContext("2d", {
			alpha: !1
		});
	for (h4.width = gy, h4.height = gy, h5.font = size + font, h5.textAlign = "center", h5.textBaseline = "middle", h5.fillStyle = "red", z = 0; z < gz.length; z++) h5.fillText(gz[z], .5 * gy, .5 * gy);
	return -1 < (h4 = function(h1) {
		var z, h7, eN = h1.data;
		for (z = eN.length - 4; 0 <= z; z -= 4)
			if (h7 = eN[z], h0 <= h7) return Math.floor(z / (4 * gy));
		return -1
	}(h5.getImageData(0, 0, gy, gy))) && (h3 = (h4 - .5 * gy + .1 * size) / size), Math.max(h3, 0)
}

function cp() {
	this.h8 = new Int16Array(4), this.h9 = new Int16Array(4), this.dI = function() {
		var z;
		for (this.h8[0] = -bH.eV, this.h8[1] = 1, this.h8[2] = bH.eV, this.h8[3] = -1, z = 0; z < 4; z++) this.h9[z] = 4 * this.h8[z]
	}, this.hA = function(gk, hB) {
		var hC = this.eS(hB) - this.eS(gk),
			hB = this.eU(hB) - this.eU(gk),
			gk = hC >>> 31 << 1;
		return 5 + gk + (1 - gk) * (1 - (hB >>> 31 << 1)) * (Math.abs(hC) - Math.abs(hB) >>> 31) & 3
	}, this.hH = function(gk, hB, hI) {
		return hI % 2 == 0 ? hI + (1 - hI) * (1 - (this.eS(hB) - this.eS(gk) >>> 31 << 1)) + 4 & 3 : hI + (2 - hI) * (1 - (this.eU(hB) - this.eU(gk) >>> 31 << 1)) + 4 & 3
	}, this.hK = function(fr, e6) {
		for (var hB, hL, hN = aU.g0[fr], eK = hN.length, t = bH.eV, hO = this.eS(e6), hP = this.eU(e6), eQ = hN[0] >> 2, min = this.ec(hO, hP, eQ), z = 1; z < eK; z++)(hL = (hL = hO - (hB = hN[z] >> 2) % t) * hL + (hL = hP - ~~((.5 + hB) / t)) *
			hL) < min && (min = hL, eQ = hB);
		return eQ
	}, this.hQ = function(player, e0) {
		return !aQ.eB(e0) && player === aQ.eC(e0)
	}, this.ec = function(gc, ge, e6) {
		return (gc -= this.eS(e6)) * gc + (ge -= this.eU(e6)) * ge
	}, this.hR = function(hS, hT, hU) {
		hS = this.hW(hS) - this.hX(hU), hT = this.hZ(hT) - this.ha(hU);
		return Math.sqrt(hS * hS + hT * hT)
	}, this.hb = function(gk, hB) {
		var hV = this.eS(gk) - this.eS(hB),
			gk = this.eU(gk) - this.eU(hB);
		return Math.sqrt(hV * hV + gk * gk)
	}, this.hc = function(gk, hB) {
		var hV = this.eS(gk) - this.eS(hB),
			gk = this.eU(gk) - this.eU(hB);
		return hV * hV + gk * gk
	}, this.hd = function(he, hf, hg, hh) {
		return (he -= hg) * he + (hf -= hh) * hf
	}, this.hi = function(fr, hj) {
		return bA.em(hj * aU.gN[fr], 1e3)
	}, this.hW = function(hS) {
		return 16 * (hS + hk) / hl
	}, this.hZ = function(hT) {
		return 16 * (hT + hm) / hl
	}, this.hn = function(eN) {
		return 16 * eN / hl
	}, this.gd = function(hS) {
		return Math.floor((hS + hk) / hl)
	}, this.gf = function(hT) {
		return Math.floor((hT + hm) / hl)
	}, this.gg = function(gc, ge) {
		return 1 <= gc && 1 <= ge && gc < bH.eV - 1 && ge < bH.eW - 1
	}, this.eS = function(e6) {
		return e6 % bH.eV
	}, this.eU = function(e6) {
		return bA.em(e6, bH.eV)
	}, this.ei = function(gc, ge) {
		return ge * bH.eV + gc
	}, this.ho = function(e6) {
		return this.eh(this.eS(e6), this.eU(e6))
	}, this.eh = function(gc, ge) {
		return 0 < gc && gc < bH.eV - 1 && 0 < ge && ge < bH.eW - 1
	}, this.eA = function(e6) {
		return e6 << 2
	}, this.e8 = function(e0) {
		return e0 >> 2
	}, this.hp = function(e6) {
		return bH.eV * this.eU(e6) * 256 + (this.eS(e6) << 4)
	}, this.hq = function(e6) {
		return this.hp(e6) + 8 + (bH.eV << 7)
	}, this.hr = function(hU) {
		return bH.eV * (this.ha(hU) >> 4) + (this.hX(hU) >> 4)
	}, this.hs = function(hU) {
		hU = this.hr(hU);
		return (this.eS(hU) >> 5) + bC.ht.hu * (this.eU(hU) >> 5)
	}, this.hX = function(hU) {
		return hU % (bH.eV << 4)
	}, this.ha = function(hU) {
		return bA.em(hU, bH.eV << 4)
	}, this.hv = function(e6, hI) {
		return e6 + this.h8[hI]
	}, this.hw = function(e0, hI) {
		return e0 + this.h9[hI]
	}, this.hx = function(player) {
		return this.ei(aU.hy[player] + aU.hz[player] >> 1, aU.i0[player] + aU.i1[player] >> 1)
	}, this.i2 = function(player) {
		return this.ei(an.i3(aU.hy[player], aU.hz[player]), an.i3(aU.i0[player], aU.i1[player]))
	}
}

function cT() {
	this.i4 = new i5, this.i6 = new i7, this.i8 = new i9, this.performance = new iA, this.iB = new iC, this.iD = new iE, this.iF = new iG, this.dI = function() {
		this.i4.dI(), this.i8.dI(), this.performance.dI(), this.iB.dI(), this.iD.dI()
	}, this.iH = function() {
		this.performance.iH(), this.i4.iH()
	}
}

function iC() {
	var iI, iK = new Uint16Array(8);

	function iU(size, player) {
		for (var z = aU.fl[player].length - 1; size <= z; z--) aQ.ic(aU.fl[player][z], player)
	}
	this.dI = function() {
		iI = 0
	}, this.iL = function(player, iM) {
		return bD.eG[1] = aU.fl[player].length, bD.eG[0] === a1.eH ? ab.iB.iN(player) : this.iO(player, bD.eG[0]), (0 !== bD.eG[1] || 0 !== aU.fl[player].length) && !(!iM && bD.eG[1] === aU.fl[player].length || (bD.eG[0] === a1.eH ? aU.iP[
			player]++ : aU.iQ[player]++, 0))
	}, this.iR = function(player) {
		a1.iS && (ab.iD.iT[player] = 1), iU(bD.eG[1], player), aR.iV(player, bD.es[0], bD.eG[0]), a3.iW(player, !1)
	}, this.iX = function(player, iY, eK, iZ) {
		var ia = bA.em(12 * aU.gN[player], 1024);
		iZ -= iZ >= bA.em(aU.gN[player], 2) ? ia : 0, iU(eK, player), aR.iV(player, iZ, iY), aU.gN[player] -= iZ + ia, a3.iW(player, !1)
	}, this.iO = function(player, iY) {
		for (var hI, eM = aQ.eM, z = aU.fz[player].length - 1; 0 <= z; z--)
			if (aQ.ib(aU.fz[player][z]))
				for (hI = 3; 0 <= hI; hI--)
					if (aQ.ft(aU.fz[player][z] + eM[hI]) && aQ.eC(aU.fz[player][z] + eM[hI]) === iY) {
						aU.fl[player].push(aU.fz[player][z]);
						break
					}
	}, this.iN = function(player) {
		for (var eM = aQ.eM, z = aU.fz[player].length - 1; 0 <= z; z--)
			if (aQ.ib(aU.fz[player][z]))
				for (var hI = 3; 0 <= hI; hI--)
					if (aQ.eB(aU.fz[player][z] + eM[hI])) {
						aU.fl[player].push(aU.fz[player][z]);
						break
					}
	}, this.ie = function(player, ig) {
		var z, ed, hI, ih, eK = aU.fz[player].length,
			hJ = 256 <= eK ? 12 : 32 <= eK ? 6 : 1,
			ii = eK - 1 - an.ij(hJ),
			eM = aQ.eM;
		iI = 0;
		loop: for (z = ii; 0 <= z; z -= hJ)
			for (hI = 3; 0 <= hI; hI--)
				if ((ih = aQ.eB(aU.fz[player][z] + eM[hI]) ? a1.eH : aQ.eC(aU.fz[player][z] + eM[hI])) === a1.eH || aQ.ft(aU.fz[player][z] + eM[hI]) && ih !== player && (ig || eD(player, ih))) {
					for (ed = iI - 1; 0 <= ed; ed--)
						if (iK[ed] === ih) continue loop;
					if (iK[iI] = ih, 8 <= ++iI) return !0
				}
		return 0 < iI
	}, this.ik = function(player, ig) {
		var z, hI, ih, eM = aQ.eM;
		for (iI = 0, z = aU.fz[player].length - 1; 0 <= z; z--)
			for (hI = 3; 0 <= hI; hI--)
				if ((ih = aQ.eB(aU.fz[player][z] + eM[hI]) ? a1.eH : aQ.eC(aU.fz[player][z] + eM[hI])) === a1.eH || aQ.ft(aU.fz[player][z] + eM[hI]) && ih !== player && (ig || eD(player, ih))) return iK[iI++] = ih, !0;
		return !1
	}, this.il = function() {
		for (var ee, z = iI - 1; 0 <= z; z--)
			if (iK[z] === a1.eH) {
				for (iI--, ee = z; ee < iI; ee++) iK[ee] = iK[ee + 1];
				return !0
			} return !1
	}, this.im = function(player) {
		for (var ee, z = iI - 1; 0 <= z; z--)
			if (aR.io(player, iK[z]))
				for (iI--, ee = z; ee < iI; ee++) iK[ee] = iK[ee + 1];
		return 0 === iI
	}, this.ip = function() {
		for (var z = iI - 1; 0 <= z; z--)
			if (b1.ff.iq(iK[z])) return !0;
		return !1
	}, this.ir = function() {
		for (var z = iI - 1; 0 <= z; z--) b1.ff.iq(iK[z]) || (iK[z] = iK[--iI]);
		return 0 < iI
	}, this.is = function(player) {
		for (var ee, it = iK[0], iu = aU.gN[it] + aR.gO(it, player), z = iI - 1; 1 <= z; z--)(ee = aU.gN[iK[z]] + aR.gO(iK[z], player)) < iu && (it = iK[z], iu = ee);
		return it
	}, this.iv = function(player) {
		var iw, ix = iK[0];
		if (1 !== iI)
			for (var iy = bA.em(aU.hz[player] + aU.hy[player], 2), iz = bA.em(aU.i1[player] + aU.i0[player], 2), ea = j0(iy - bA.em(aU.hz[ix] + aU.hy[ix], 2)) + j0(iz - bA.em(aU.i1[ix] + aU.i0[ix], 2)), z = iI - 1; 1 <= z; z--)(iw = j0(iy - bA
				.em(aU.hz[iK[z]] + aU.hy[iK[z]], 2)) + j0(iz - bA.em(aU.i1[iK[z]] + aU.i0[iK[z]], 2))) < ea && (ea = iw, ix = iK[z]);
		return ix
	}, this.j1 = function() {
		for (var j2 = iK, j3 = j2[0], gN = aU.gN, j4 = gN[j3], z = iI - 1; 1 <= z; z--) {
			var fr = j2[z],
				ee = gN[fr];
			j4 < ee && (j3 = fr, j4 = ee)
		}
		return j3
	}
}

function iE() {
	function jJ(player, iY, j9) {
		3 <= j9 && 2142 < bU.jP() && (iY === a1.eH || aU.gN[iY] < bA.em(aU.gN[player], 20)) && a2.jE(player, 20)
	}

	function jM(player, iZ, iY, j9) {
		3 <= j9 && j9 < 6 && bA.em(aU.gN[player], 8) > aU.gN[iY] && (iZ = Math.max(bA.em(11 * aU.gN[iY], 5), bA.em(aU.gN[player], 10)));
		j9 = aU.fl[player].length;
		ab.iB.iO(player, iY), ab.iB.iX(player, iY, j9, iZ)
	}

	function jI(player, iZ) {
		var iY = a1.eH,
			eK = aU.fl[player].length;
		ab.iB.iN(player), aU.fl[player].length !== eK && ab.iB.iX(player, iY, eK, iZ)
	}
	this.iT = new Uint8Array(a1.eH), this.dI = function() {
		this.iT.fill(0)
	}, this.j5 = function(player, iZ) {
		var j7, j9, jA, jB;
		a1.iS && (this.iT[player] = 0), aR.j6(player) && (j7 = aS.j8(player), 3 <= (j9 = a2.iZ[player]) && j9 < 6 && (iZ = Math.max(aU.gN[player] - j7, iZ)), jA = aU.g0[player].length, jB = aU.fz[player].length, 30 * aU.g9[player] > a1.jC && jD[
			player] < 10 && 100 * jB <= jA && a2.jE(player, 10), a1.iS ? function(player, iZ, j9, j7) {
			var iY;
			if (ab.iB.ie(player, !1) || ab.iB.ik(player, !1)) {
				if (ab.iD.iT[player] = 1, !ab.iB.im(player))
					if (ab.iB.il()) jI(player, iZ), jJ(player, a1.eH, j9);
					else {
						if (an.jK(a2.jL[j9])) iY = ab.iB.is(player);
						else {
							if (ab.iB.ip() && an.jK(a2.jN[j9]) && ab.iB.ir(), 6 === j9) return jM(player, iZ, ab.iB.j1(), j9);
							iY = ab.iB.iv(player)
						}
						jM(player, iZ, iY, j9), jJ(player, iY, j9)
					}
			} else bC.jG.iH(player) || ab.iF.iH(player) || ! function(player, iZ, j9, j7) {
				var z, ee, ef, eI = bV.eI,
					jQ = eI[player];
				if (0 !== jQ) {
					var gN = aU.gN,
						jR = gN[player],
						g9 = aU.g9;
					if (player < a1.jS && (iZ = jR), !(jR < g9[player] || 5 === j9 && jR < j7 || 4 === j9 && jR < bA.em(j7, 2))) {
						var eK = aZ.jT,
							jU = aZ.jV,
							jW = (z = an.ij(eK), ab.iD.iT);
						for (ee = 0; ee < eK; ee++)
							if (ef = jU[(ee + z) % eK], 1 === jW[ef] && eI[ef] === jQ) return az.jX.jY(player, ef, iZ);
						var jZ = a1.jZ,
							g0 = aU.g0;
						for (ee = 0; ee < eK; ee++)
							if (ef = jU[(ee + z) % eK], gN[ef] < jZ * g9[ef] && g0[ef].length && eI[ef] === jQ && ef !== player) return az.jX.jY(player, ef, iZ)
					}
				}
			}(player, iZ, j9, j7)
		}(player, iZ, j9, j7) : (!jB || jA && (jA < jB && !an.ij(10) || 100 * jB <= jA && an.ij(3) || !an.ij(8))) && bC.jG.iH(player) || function(player, iZ, j9) {
			ab.iB.ie(player, !0) || ab.iB.ik(player, !0) ? ab.iB.im(player) || (ab.iB.il() ? jI(player, iZ) : an.jK(a2.jL[j9]) ? jM(player, iZ, ab.iB.is(player), j9) : 5 === j9 ? jM(player, iZ, ab.iB.j1(), j9) : (ab.iB.ip() && an.jK(a2
				.jN[j9]) && ab.iB.ir(), jM(player, iZ, 6 === j9 ? ab.iB.j1() : ab.iB.iv(player), j9))) : ab.iF.iH(player)
		}(player, iZ, j9))
	}
}

function bo() {
	var ja = new Uint8Array(a1.eH),
		jb = new Uint16Array(a1.eH),
		jc = new Uint16Array(a1.eH),
		jd = new Uint8Array(a1.eH),
		je = (this.iZ = new Uint8Array(a1.eH), new Uint16Array(a1.eH)),
		jf = new Uint16Array(a1.eH);

	function jv(z) {
		ja[z] = 1 + bA.em(je[z] * an.random(), 10 * an.value(100))
	}
	this.jg = null, this.jN = [97, 94, 70, 40, 20, 0, 100], this.jh = [500, 450, 400, 300, 80, 50, 100], this.jL = [0, 0, 5, 25, 50, 100, 0], this.ji = [60, 74, 112, 200, 256, 512, 512], this.jj = [1, 2, 3, 4, 6, 8, 1], this.jk = [500, 450, 400, 300,
		80, 50, 100
	], this.dJ = function() {
		this.jg = [L(0), L(1), L(2), L(3), L(4), L(5), ""]
	}, this.dI = function() {
		ja.fill(0), jb.fill(0), jc.fill(0), jd.fill(0), this.iZ.fill(0), je.fill(0), jf.fill(0);
		var jl = a1.jS;
		if (ax.jm) {
			if (ax.jn.jo)
				for (z = a1.jp - 1; 0 <= z; z--) this.iZ[z + jl] = ax.jn.jo[z + 1]
		} else if (9 === a1.jq) this.jr();
		else if (a1.js)
			if (a1.iS)
				for (z = a1.jp - 1; 0 <= z; z--) this.iZ[z + jl] = aO.ju[bV.eI[z + jl] - 1].eN;
			else
				for (z = a1.jp - 1; 0 <= z; z--) this.iZ[z + jl] = aO.ju[0].eN;
		else
			for (var jt = 8 === a1.jq ? 1 : 0, z = a1.jp - 1; 0 <= z; z--) this.iZ[z + jl] = jt;
		for (z = 0; z < jl; z++) this.iZ[z] = 6;
		var eK = a1.eH;
		for (z = 0; z < eK; z++) this.iZ[z] <= 2 ? (jd[z] = 5, je[z] = jf[z] = 1040, 0 === this.iZ[z] ? (jb[z] = 980, jc[z] = 980) : 1 === this.iZ[z] ? (jb[z] = 980, jc[z] = 920, je[z] = jf[z] = 1100) : (jb[z] = 825, jc[z] = 750)) : this.iZ[z] <=
			4 ? (jd[z] = 1 + an.ij(20), 3 === this.iZ[z] ? (jb[z] = jc[z] = 500, je[z] = jf[z] = 1e3) : (jf[z] = 250 + an.ij(1501), je[z] = 500 + an.ij(501), jb[z] = 300 + an.ij(201), jc[z] = 100 + an.ij(201))) : this.iZ[z] <= 5 ? (je[z] = 1e3,
				jf[z] = 1e3, jd[z] = 35 + an.ij(16), jb[z] = 300 + an.ij(201), jc[z] = 50 + an.ij(101)) : (je[z] = jf[z] = 800, jd[z] = 5, jb[z] = 10, jc[z] = 250), jv(z)
	}, this.jr = function() {
		for (var z, e0 = 0, jl = a1.jS, ee = 0; ee < 6; ee++) {
			for (z = e0 + ao.jw[ee] - 1; e0 <= z; z--) this.iZ[z + jl] = ee;
			e0 += ao.jw[ee]
		}
	}, this.jE = function(fr, value) {
		ja[fr] = Math.min(value, ja[fr])
	}, this.iH = function(fr) {
		0 == --ja[fr] && ! function(fr) {
			(function(fr) {
				je[fr] !== jf[fr] && (je[fr] += je[fr] < jf[fr] ? 3 : -3);
				jb[fr] !== jc[fr] && (jb[fr] += jb[fr] < jc[fr] ? jd[fr] : -jd[fr], jb[fr] = (Math.abs(jb[fr] - jc[fr]) <= jd[fr] ? jc : jb)[fr]);
				ja[fr] = bA.em(je[fr], 10)
			})(fr), ab.iD.j5(fr, bA.em(jb[fr] * aU.gN[fr], 1e3))
		}(fr)
	}, this.jz = function(fr, fm) {
		je[fr] = jf[fr] = fm
	}
}

function i9() {
	var k0 = new Uint16Array(a1.eH);

	function k5(player, k3) {
		for (var eK = bD.er[0], ex = bD.ex, kE = -1, kF = a1.eH, z = 0; z < eK; z++) {
			var ea, fr = ex[z];
			eD(player, fr) && (ea = bB.hc(k3, bB.hx(fr)), -1 === kE || ea < kE) && (kE = ea, kF = fr)
		}
		return kF
	}

	function k7(k4, k3) {
		if (k4 === a1.eH) return 0;
		for (var g0 = aU.g0[k4], kD = g0.length, eK = Math.min(kD, 10), kF = 0, kE = bB.hc(g0[kF] >> 2, k3), z = 0; z < eK; z++) {
			var kG = an.ij(kD),
				ea = bB.hc(g0[kG] >> 2, k3);
			ea < kE && (kE = ea, kF = kG)
		}
		return g0[kF] >> 2
	}

	function kA(player, k3, iY, kJ) {
		var kK;
		(kJ === a1.eH || (kK = bB.hx(iY), kJ = bB.hx(kJ), bB.hc(k3, kK) < bB.hc(k3, kJ))) && (k0[player] = iY)
	}
	this.dI = function() {
		k0.fill(a1.eH)
	}, this.iH = function(player) {
		var k3, k6, k4, iY = function(player) {
			var iY = k0[player];
			if (iY !== a1.eH) {
				if (b1.ff.kI(iY)) return iY;
				k0[player] = a1.eH
			}
			return a1.eH
		}(player);
		return function(player) {
			for (var jU = aZ.jV, kD = aZ.jT, eK = Math.min(kD, kD < 17 && 5 === an.ij(20) ? 1 : 16), fs = an.ij(kD), ex = bD.ex, g0 = aU.g0, fm = 0, z = 0; z < eK; z++) {
				var fr = jU[(z + fs) % kD];
				fr !== player && g0[fr].length && (ex[fm++] = fr)
			}
			bD.er[0] = fm
		}(player), 0 !== bD.er[0] && (0 < (k6 = k7(k4 = k5(player, k3 = bB.i2(player)), k3)) && bC.k8.k9(player, k6) ? (kA(player, k3, k4, iY), !0) : 0 < (k4 = function(player, k3) {
			for (var eK = bD.er[0], ex = bD.ex, kH = k0, fs = 0, z = 0; z < eK; z++) {
				var fr = ex[z],
					fr = kH[fr];
				fr !== a1.eH && b1.ff.kI(fr) && player !== fr && eD(player, fr) && (ex[fs++] = fr)
			}
			return 0 !== (bD.er[0] = fs) ? k7(k5(player, k3), k3) : 0
		}(player, k3)) && bC.k8.k9(player, k4) ? (kA(player, k3, aQ.eC(k4 << 2), iY), !0) : !!(0 < (k6 = k7(iY, k3)) && bC.k8.k9(player, k6)))
	}
}

function iG() {
	function kO(player) {
		for (var ek = aU.ek[player], eK = ek.length, el = Math.max(bA.em(eK, 12), 1), eM = aQ.eM, h7 = an.ij(eK), z = 0; z < eK; z += el)
			for (var e9 = ek[(z + h7) % eK], eN = 3; 0 <= eN; eN--) {
				var eO = e9 + eM[eN];
				if (aQ.eP(eO)) return {
					e0: eO,
					id: aQ.e2(eO),
					fr: player
				}
			}
		return null
	}

	function kT(player, kV) {
		var iZ = b1.ff.kW(player, a2.jk[a2.iZ[player]]);
		aU.fl[player].push(kV.e0), aR.iV(player, iZ, kV.fr), a3.iW(player, !0)
	}
	this.iH = function(player) {
		return !!bH.g1(bH.g2) && 0 !== aU.ek[player].length && function(player) {
			var kN = kO(player);
			if (null === kN) return !1;
			! function(player) {
				for (var jV = aZ.jV, jT = aZ.jT, eK = Math.min(jT, 12), fs = an.ij(jT), ex = bD.ex, ek = aU.ek, fm = 0, z = 0; z < eK; z++) {
					var fr = jV[(z + fs) % jT];
					fr !== player && ek[fr].length && eD(player, fr) && (ex[fm++] = fr)
				}
				bD.er[0] = fm
			}(player);
			var kQ = function(e1) {
				for (var eK = bD.er[0], ex = bD.ex, z = 0; z < eK; z++) {
					var kV = kO(ex[z]);
					if (null !== kV && kV.id === e1) return kV
				}
				return null
			}(kN.id);
			return null !== kQ ? (kT(player, kQ), !0) : function(player, e1) {
				var eK = ab.i4.kU;
				if (0 !== eK)
					for (var e0 = ab.i4.db[an.ij(eK)] << 2, eM = aQ.eM, eN = an.ij(4);;) {
						if (e0 += eM[eN], aQ.eP(e0)) {
							if (aQ.e2(e0) === e1) return kT(player, {
								e0: e0,
								fr: a1.eH
							}), !0;
							break
						}
						if (!aQ.eB(e0)) break
					}
				return !1
			}(player, kN.id)
		}(player)
	}
}

function i7() {
	this.iH = function(player) {
		var e6 = function(player) {
			var eK = ab.i4.kU;
			if (0 === eK) return -1;
			for (var kD = Math.min(eK, ab.performance.kY ? eK : 10), db = ab.i4.db, ii = bA.em(an.random() * eK, an.value(100)), d = ii + kD, kZ = an.i3(aU.hy[player], aU.hz[player]), ka = an.i3(aU.i0[player], aU.i1[player]), kF = -1, ea = bB
					.hd(0, 0, bH.eV, bH.eW), z = ii; z < d; z++) {
				var fs = z % eK,
					kb = bB.ec(kZ, ka, db[fs]);
				kb < ea && (ea = kb, kF = fs)
			}
			return -1 !== kF ? db[kF] : -1
		}(player);
		return -1 !== e6 && bC.k8.k9(player, e6)
	}
}

function iA() {
	this.kY = 0, this.dI = function() {
		this.kY = 0
	}, this.iH = function() {
		if (!this.kY && bU.jP() % 30 == 7 && b1.ff.ke(75) && (ab.performance.kY = 1))
			if (a1.iS) {
				bW.kh(bW.ki());
				var f0 = bD.ey,
					eK = bD.er[0];
				if (0 !== eK)
					for (var kj = Math.min(100 + 10 * (eK - 1), 400), z = 0; z < eK; z++) a2.jz(f0[z], kj)
			} else a2.jz(kk[0], 100)
	}
}

function i5() {
	var kl, km, kn = 300,
		ko = 300,
		kp = (this.kU = 0, this.db = new Uint32Array(512), !1);
	this.dI = function() {
		kp = !1, km = kl = 0, this.kU = 0
	}, this.iH = function() {
		if (function() {
				var eK = ab.i4.kU;
				if (0 === eK) return 1;
				var db = ab.i4.db;
				if (bU.jP() % 35 == 6) {
					for (var z = eK - 1; 0 <= z; z--) aQ.eB(db[z] << 2) || (eK--, db[z] = db[eK]);
					ab.i4.kU = eK
				}
				return eK < db.length
			}() && !(kn <= kl)) {
			var z, t = bH.eV,
				kt = t - 2,
				eK = kt * (bH.eW - 2),
				ku = kn,
				db = ab.i4.db,
				kD = ab.i4.kU,
				kv = db.length,
				fs = Math.min(km + ku * ((1 + 19 * ab.performance.kY) * ko), eK);
			for (z = km; z < fs; z += ku) {
				var e0 = 4 * (z % kt + (bA.em(z, kt) + 1) * t + 1);
				if (aQ.eB(e0) && (db[kD] = e0 >> 2, ++kD === kv)) {
					z += ku;
					break
				}
			}(km = z) >= eK && (km = ++kl), ab.i4.kU = kD
		}
	}, this.ks = function() {
		kp || (this.dI(), kp = !0)
	}
}

function kw() {
	aA.iH(), aT.iH(), aJ.kx(), ap.ky.iH()
}

function kz() {
	aq.iH(), a4.iH(), aS.iH(), au.iH(), a3.iH(), ab.iH(), bC.ky.iH(), aZ.l0(), aI.iH(), ao.iH(), bG.iH(), bK.iH(), aT.iH(), aT.l1(), aJ.iH(), bE.iH(), aH.iH(), aC.iH(), aA.iH(), av.iH(), aE.iH(), ak.iH(), bS.iH(), bW.iH(), ap.ky.iH(), ap.l2.iH(), i
		.iH(), b0.iH(), bU.iH()
}

function l3() {
	a5.iH(), aK.iH(), aD.iH(), ah.iH(), b2.iH(), al.l4()
}

function l5() {
	aI.l6(!1), aC.l6(), aJ.l6(!1), aH.l6(), aE.l6(), ak.l6(), aT.l6(!1), bW.l7()
}

function l8() {
	aT.l6(!1) && (bU.dQ = !0), ap.ky.iH()
}

function bp() {
	var l9, lA, lB;

	function lD(lF) {
		for (var z = l9 - 1; 0 <= z; z--) 0 === lB[lA[z]] && aU.g9[lA[z]] >= lF && fM(lA[z])
	}

	function lC(player) {
		var dv;
		64 === lB[player] ? lB[player] = 6 : (dv = aU.g9[player], lB[player] = dv < 1e3 ? 3 : dv < 1e4 ? 2 : dv < 6e4 ? 1 : 0)
	}
	this.dI = function() {
		l9 = 0, lA = new Uint16Array(a1.eH), lB = new Uint8Array(a1.eH)
	}, this.iH = function() {
		for (var z = l9 - 1; 0 <= z; z--) 64 === lB[lA[z]] ? lC(lA[z]) : 0 == lB[lA[z]]-- && (lC(lA[z]), fM(lA[z]));
		16e4 <= aU.g9[kk[0]] && (lD(16e4), 3e5 <= aU.g9[kk[0]]) && lD(3e5), b1.ff.kI(a1.e4) && (bS.lG[7] = Math.max(aU.g9[a1.e4], bS.lG[7]))
	}, this.fh = function(player) {
		for (var ed, z = l9 - 1; 0 <= z; z--)
			if (player === lA[z]) {
				for (l9--, ed = z; ed < l9; ed++) lA[ed] = lA[ed + 1];
				return
			}
	}, this.iW = function(player, lH) {
		for (var z = l9 - 1; 0 <= z; z--)
			if (player === lA[z]) return;
		lA[l9++] = player, lB[player] = lH ? 2 : 64
	}
}

function bq() {
	var size, jG;
	this.dI = function() {
		size = a1.jp, jG = new Uint16Array(a1.eH);
		for (var jS = a1.jS, z = a1.jp - 1; 0 <= z; z--) jG[z] = jS + z
	}, this.iH = function() {
		for (var z = size - 1; 0 <= z; z--)
			if (0 === aU.lK[jG[z]]) {
				ed = void 0;
				var ed = z;
				size--, jG[ed] = jG[size]
			} else a2.iH(jG[z])
	}, this.lJ = function(fr) {
		jG[size++] = fr
	}
}

function br() {
	var lM, lN, lO, lP, lQ, lR, lS, lT, lU, lV, lW, lX, lY, lZ = !1,
		la = !1;

	function lb(lc) {
		lX = bU.du, lO = lP = lN = 0, lQ = (lY = 33) / lc, lM = 1 / (lc / lY / 4), lR = (am.t / 2 + hk) / hl, lS = (am.iw / 2 + hm) / hl, lT = hl
	}

	function lj(z) {
		var lm; - 1 !== z && (z = bB.hr(bC.ky.ll[z]), lm = bB.eS(z) - 10, z = bB.eU(z) - 10, a5.lf(lm, z, 19 + lm, 19 + z))
	}

	function lx(lz) {
		Math.abs(Math.log(lW / lT)) < .125 && (lW = lz * lT)
	}

	function lw(lm, ln, m0, m1) {
		lU = (lm + m0 + 1) / 2, lV = (ln + m1 + 1) / 2;
		m0 = am.t / (m0 - lm + 1), lm = am.iw / (m1 - ln + 1);
		lW = .9 * (m0 < lm ? m0 : lm)
	}
	this.ld = function() {
		return lZ
	}, this.le = function() {
		lb(1), this.lf(0, 0, bH.eV - 1, bH.eW - 1), a1.gh || a1.gV || this.lg(a1.e4, 3e3, !0, .3)
	}, this.lh = function(player, li) {
		lj(bC.gp.lk(player, li))
	}, this.lg = function(player, lc, lo, zoom) {
		a1.lp || lZ && !lo && la || (0 === aU.g9[player] ? lj(bC.gp.lq(player)) : (aF.lr = !1, la = lo, lb(lc), function(player) {
			lU = (aU.hy[player] + aU.hz[player] + 1) / 2, lV = (aU.i0[player] + aU.i1[player] + 1) / 2
		}(player), function(zoom, player) {
			var hV = aU.hz[player] - aU.hy[player] + 1,
				player = aU.i1[player] - aU.i0[player] + 1,
				ed = am.t / hV,
				ee = am.iw / player,
				ed = (lW = ed < ee ? ed : ee, 0 !== zoom ? zoom : hV < 20 && player < 20 ? .5 : .9);
			lW *= ed, lx(7 / 8)
		}(zoom, player), lZ = !0, ae.lu()))
	}, this.lv = function(lc) {
		a1.gV || a1.lp || (aF.lr = !1, la = !1, lb(lc), lw(0, 0, bH.eV - 1, bH.eW - 1), lx(7 / 8), lZ = !0, ae.lu())
	}, this.lf = function(lm, ln, m0, m1) {
		lw(lm, ln, m0, m1), hl = lW, aF.m2(lU, am.t / 2), aF.m3(lV, am.iw / 2), bP.m4(), bU.dQ = !0
	}, this.m5 = function() {
		return !(lZ && la || (lZ = !1))
	}, this.iH = function() {
		var m8, m9, eN, mC;
		lZ && (lN < .5 ? lP < lQ && (lP += lQ * lM, lO = lN) : 1 - lO < lN && (lP = (lP -= lQ * lM) < lQ * lM ? lQ * lM : lP), lX = lX >= bU.du ? bU.du - 1 : lX, eN = bU.du - lX, lN = 1e3 < eN || 1 < (lN += lP * eN / lY) ? 1 : lN, lX = bU.du,
			eN = hl, m8 = hk, m9 = hm, eN = (hl = lT * Math.pow(lW / lT, lN)) / eN, mC = 1 - (lT * Math.pow(lW / lT, 1 - lN) - lT) / (lW - lT), aF.m2(lR + mC * (lU - lR), am.t / 2), aF.m3(lS + mC * (lV - lS), am.iw / 2), aT.zoom(eN, (m8 *
				eN - hk) / (1 - eN), (m9 * eN - hm) / (1 - eN)), bP.m4(), 1 <= lN && (lZ = !1, bQ.mD = !0), bU.dQ = !0)
	}
}

function bj() {
	var ef = b1.color;
	this.mE = ef.mF(0, 0, 0), this.mG = ef.mH(0, 0, 0, .7), this.mI = ef.mH(0, 0, 0, .5), this.mJ = ef.mH(0, 0, 0, .85), this.mK = ef.mH(0, 0, 0, .75), this.mL = ef.mH(0, 0, 0, .6), this.mM = ef.mH(0, 0, 0, .35), this.mN = ef.mF(255, 255, 255), this
		.mO = ef.mH(255, 255, 255, .3), this.mP = ef.mH(255, 255, 255, .6), this.mQ = ef.mH(255, 255, 255, .4), this.mR = ef.mH(255, 255, 255, .25), this.mS = ef.mH(255, 255, 255, .85), this.mT = ef.mH(255, 255, 255, .75), this.mU = ef.mH(255, 255,
			255, .15), this.mV = ef.mF(128, 128, 128), this.mW = ef.mH(64, 64, 64, .75), this.mX = ef.mH(88, 88, 88, .83), this.mY = ef.mH(60, 60, 60, .85), this.mZ = ef.mH(80, 60, 60, .85), this.ma = ef.mF(30, 255, 30), this.mb = ef.mF(0, 200, 0),
		this.mc = ef.mF(128, 255, 128), this.md = ef.mH(10, 65, 10, .75), this.me = ef.mH(0, 255, 0, .6), this.mf = ef.mH(0, 255, 0, .5), this.mg = ef.mH(0, 200, 0, .5), this.q = ef.mH(0, 100, 0, .75), this.mh = ef.mH(0, 60, 0, .8), this.mi = ef.mH(
			0, 255, 0, .3), this.mj = ef.mH(0, 180, 0, .6), this.mk = ef.mH(0, 120, 0, .85), this.ml = ef.mF(0, 120, 0), this.mm = ef.mH(0, 70, 0, .85), this.mn = ef.mF(255, 120, 120), this.mo = ef.mF(255, 160, 160), this.mp = ef.mF(255, 70, 70),
		this.mq = ef.mF(230, 0, 0), this.mr = ef.mH(220, 0, 0, .6), this.ms = ef.mH(255, 100, 100, .8), this.mt = ef.mH(100, 0, 0, .85), this.mu = ef.mH(60, 0, 0, .85), this.mv = ef.mH(200, 0, 0, .6), this.mw = ef.mH(120, 0, 0, .85), this.mx = ef.mF(
			255, 70, 10), this.my = ef.mH(0, 60, 60, .85), this.mz = ef.mH(10, 60, 60, .9), this.n0 = ef.mH(0, 96, 96, .75), this.n1 = ef.mF(160, 160, 255), this.n2 = ef.mH(0, 40, 90, .75), this.n3 = ef.mH(0, 0, 255, .6), this.n4 = ef.mF(200, 200,
			255), this.n5 = ef.mF(255, 120, 100), this.n6 = ef.mH(255, 255, 0, .5), this.n7 = ef.mH(255, 255, 150, .2), this.n8 = ef.mF(255, 255, 0), this.n9 = ef.mF(255, 255, 200), this.nA = ef.mH(200, 200, 0, .6), this.nB = ef.mH(140, 120, 0, .75),
		this.nC = ef.mH(180, 160, 40, .75), this.nD = ef.mH(70, 50, 20, .85), this.nE = ef.mH(30, 30, 0, .85), this.nF = ef.mH(255, 140, 0, .75), this.nG = ef.mH(0, 0, 0, 0)
}

function cj() {
	this.gi = new nH, this.ff = new nI, this.nJ = new nK, this.nL = new nM, this.jX = new nN
}

function nH() {
	this.gj = function(e6) {
		a1.js ? az.nJ.gj(a1.e4, e6) : ap.nO.nP(e6)
	}, this.gt = function(hj, iY) {
		a1.js ? az.nJ.gt(a1.e4, hj, iY) : ap.nO.nQ(hj, iY)
	}, this.nR = function(hj, nS) {
		a1.js ? az.nJ.nT(a1.e4, hj, nS) : ap.nO.nU(hj, nS)
	}, this.gr = function(hj, e6) {
		a1.js ? az.nJ.gr(a1.e4, hj, e6) : bC.gp.gq(a1.e4, e6) && ap.nO.nV(hj, e6)
	}, this.nW = function(li, e6) {
		a1.js ? az.nJ.nW(a1.e4, li, e6) : bC.gp.nX(a1.e4, li, e6) && ap.nO.nY(li, e6)
	}, this.nZ = function(iY) {
		a1.js ? az.nJ.nZ(a1.e4, iY) : ap.nO.na(iY)
	}, this.nb = function(nc) {
		a1.js ? az.nJ.nd(a1.e4, nc) : ap.nO.ne(nc)
	}, this.nf = function(ng) {
		a1.js ? az.nJ.nf(a1.e4, ng) : ap.nO.nh(ng)
	}, this.ni = function() {
		a1.js ? az.nJ.ni(a1.e4) : ap.nO.nj()
	}, this.nk = function() {
		a1.js ? az.nJ.nk(a1.e4) : ap.nO.nV(1, 0)
	}, this.gm = function(hj, e6, iY) {
		a1.js ? az.nJ.gm(a1.e4, hj, e6, iY) : ap.nO.nl(hj, e6, iY)
	}
}

function nN() {
	this.jY = function(player, nS, iZ) {
		b1.ff.nm(player, iZ, nS) && (aS.nR(player, nS), nS < a1.jS) && an.random() < an.value(10) && (ab.iD.iT[nS] = 0)
	}, this.nn = function(player, nS, iZ) {
		b1.ff.no(iZ, nS) ? (b1.ff.fi(nS, bD.es[0]), bS.np(player, nS), aT.nq(nS, bD.es[0])) : bS.fj(player, iZ, 12)
	}
}

function nI() {
	this.nr = function(nc, player) {
		aA.nb(a1.e4, player, nc), ap.nO.ns(nc, player)
	}, this.nt = function(player) {
		aA.nu(player, 0), ap.nO.nv(player)
	}, this.nw = function(nx, player) {
		aA.ny(nx, player), ap.nO.nz(nx, player)
	}, this.o0 = function() {
		a1.js || a1.gV || ap.o1.o0()
	}
}

function nM() {
	this.iH = function(a0) {
		var id, f1, m5;
		for (b6.dI(a0), b6.o2 += 2, m5 = 8 * b6.size; b6.o2 + 8 <= m5;) id = b6.o3(4), f1 = b6.o3(9), 0 === id ? this.o4(id, f1, b6.o3(22)) : 1 === id ? this.o4(id, f1, b6.o3(10), b6.o3(10)) : 2 === id ? this.o4(id, f1, b6.o3(10), b6.o3(9)) :
			3 === id || 4 === id ? this.o4(id, f1, b6.o3(10), b6.o3(22)) : 5 === id || 6 === id ? this.o4(id, f1, b6.o3(10)) : 7 === id ? this.o4(id, f1, b6.o3(1)) : 10 === id ? this.o4(id, f1, b6.o3(20), b6.o3(22)) : this.o4(id, f1)
	}, this.o5 = [], this.o6 = function() {
		for (var o8 = 0, o9 = 0, oA = 0, oB = 0, oC = 0, oD = 0, z = 0; z < 512; z++) o8 += aU.lK[z], o9 += aU.g9[z], oA += aU.gN[z], oB += bC.ky.oE[z];
		oC += bC.ky.oF, oD += aZ.jT, this.o5.push(oA % 1073741824 * 4 + (o8 + o9 + oB + oC + oD) % 4)
	}, this.o4 = function(id, f1, f3, f5) {
		0 === id ? az.nJ.gj(f1, f3) : 1 === id ? az.nJ.gt(f1, f3, f5) : 2 === id ? az.nJ.nT(f1, f3, f5) : 3 === id ? az.nJ.gr(f1, f3, f5) : 4 === id ? az.nJ.nW(f1, f3, f5) : 5 === id ? az.nJ.nZ(f1, f3) : 6 === id ? az.nJ.nd(f1, f3) : 7 === id ?
			az.nJ.nf(f1, f3) : 8 === id ? az.nJ.ni(f1) : 9 === id ? az.nJ.oG(f1) : 10 === id && az.nJ.gm(f1, f3 >> 10, f5, f3 % 1024)
	}
}

function nK() {
	this.gj = function(player, e6) {
		b1.ff.gX(0) && b1.ff.gY(player) && bB.ho(e6) && (b0.oH.oI(0, player, e6), a1.oJ.iV(player, e6))
	}, this.gt = function(player, hj, iY) {
		b1.ff.gX(1) && b1.ff.gY(player) && b1.ff.oK(player, iY) && b1.ff.oL(player, hj, 12, 0) && b1.ff.oM(player, iY) && ((iY = aR.io(player, bD.eG[0])) || aR.j6(player)) && (aU.oN[player]++, b0.oH.oI(1, player, hj, bD.eG[0]), ab.iB.iL(player,
			iY)) && (b1.ff.oO(player), bS.oP(player, hj), ab.iB.iR(player))
	}, this.nT = function(player, hj, nS) {
		b1.ff.gX(1) && b1.ff.gY(player) && a1.iS && b1.ff.oK(player, nS) && b1.ff.oQ(player, nS) && b1.ff.nm(player, b1.ff.hi(player, hj), nS) && (b0.oH.oI(2, player, hj, nS), aS.nR(player, nS))
	}, this.gr = function(player, hj, e6) {
		b1.ff.gX(1) && b1.ff.gY(player) && (0 === e6 && 1 === hj ? this.nk(player) : bB.ho(e6) && bC.ky.oF !== bC.ky.jj && bC.ky.oE[player] !== bC.ky.oR && 0 !== aU.g0[player].length && b1.ff.oL(player, hj, 32, 0) && bC.k8.k9(player, e6) && (bS
			.oS(player), b0.oH.oI(3, player, hj, e6), b1.ff.oO(player), bb.oT.gr(player), bC.ky.oU(player)))
	}, this.nW = function(player, li, e6) {
		b1.ff.gX(1) && b1.ff.gY(player) && bB.ho(e6) && bC.gp.oV(player, li) && bC.k8.oW(e6) && (b0.oH.oI(4, player, li, e6), b1.ff.oX(player, 8), bS.fj(player, bD.es[1], 12), bb.oT.nW(player), bC.ky.nW())
	}, this.nZ = function(player, iY) {
		b1.ff.gX(1) && b1.ff.gY(player) && (iY = Math.min(iY, a1.eH), aR.io(player, iY)) && (b0.oH.oI(5, player, iY), aR.oY(player, iY))
	}, this.nd = function(player, nc) {
		(b1.ff.gX(1) || b1.ff.gX(2)) && b1.ff.gY(player) && (nc = bA.oZ(nc, 0, 1023), b0.oH.oI(6, player, nc), aT.oa(player, 0, nc))
	}, this.nf = function(player, ng) {
		b1.ff.gX(1) && b1.ff.gY(player) && (b0.oH.oI(7, player, ng), ak.ob(player, ng))
	}, this.ni = function(player) {
		(b1.ff.gX(0) || b1.ff.gX(1)) && b1.ff.gY(player) && bF.ni(player) && b0.oH.oI(8, player)
	}, this.oG = function(player) {
		bF.oG(player), b0.oH.oI(9, player)
	}, this.nk = function(player) {
		ak.oc(player) && (b0.oH.oI(3, player, 1, 0), ak.nk(player))
	}, this.gm = function(player, hj, e6, iY) {
		b1.ff.gX(1) && b1.ff.gY(player) && b1.ff.oK(player, iY) && b1.ff.oM(player, iY) && bB.ho(e6) && aa.dx.eE(player, e6) && (aR.io(player, bD.eG[0]) || aR.j6(player)) && (b0.oH.oI(10, player, (hj << 10) + bD.eG[0], e6), iY = b1.ff.kW(player,
			hj), aU.fl[player].push(bD.eL[0]), aR.iV(player, iY, bD.eG[0]), a3.iW(player, !0), bS.od(player))
	}
}

function oe() {
	var oh;
	this.og = [], this.oh = document.createElement("div"), this.oi = function(oj, marginTop) {
		var title = document.createElement("h2");
		title.textContent = oj, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.oh.appendChild(title)
	}, this.ok = function(oj, marginBottom) {
		var ol = document.createElement("p");
		return ol.textContent = oj, ol.style.fontSize = "0.75em", ol.style.lineHeight = "1.2em", ol.style.marginBottom = marginBottom || "0", this.oh.appendChild(ol), ol
	}, this.om = function(oj) {
		var on = document.createElement("p");
		return on.textContent = oj, on.style.fontSize = "1em", on.style.marginBottom = "0", on.style.whiteSpace = "pre-wrap", on.style.overflowWrap = "break-word", this.oh.appendChild(on), on
	}, this.oo = function(op, fontSize) {
		var oh = document.createElement("div");
		oh.innerHTML = op, oh.style.fontSize = fontSize || "1em", oh.style.lineHeight = "1.2em", this.oh.appendChild(oh)
	}, this.oq = function(or) {
		for (var os = or.os, eK = os.length, z = 0; z < eK; z++) this.oh.appendChild(os[z])
	}, this.ot = function(ou) {
		this.og.push(ou), this.oh.appendChild(ou.d)
	}, this.resize = function() {
		for (var eK = this.og.length, z = 0; z < eK; z++) this.og[z].resize && this.og[z].resize()
	}, (oh = this.oh).style.position = "absolute", oh.style.height = "auto", oh.style.padding = "0.5em"
}

function ov(ow, ox) {
	var z, oh = document.createElement("div");

	function p5() {
		var z, p6, iw, fs, eN, p0 = am.p7 * oh.offsetWidth,
			p8 = new Float64Array(function(p0) {
				var t = .25 * b1.p1.p2(.6) * am.p3;
				return Math.max(Math.floor(p0 / t), 1)
			}(p0)),
			p9 = bR.p9,
			pA = (p0 - (p8.length + 1) * bR.gap) / (p8.length * am.p7);
		for (p8.fill(p9), z = 0; z < ox.length; z++) p6 = (eN = ox[z].oh).style, iw = b1.pB.min(p8), fs = p8.indexOf(iw), p6.top = b1.p1.pC(iw), p6.left = b1.p1.pC(p9 + fs * (pA + p9)), p6.width = b1.p1.pC(pA), b1.p1.pD(eN, 5), p8[fs] += eN
			.offsetHeight + 3 * p9;
		oh.style.height = b1.p1.pC(b1.pB.max(p8) - 2 * p9)
	}
	for (this.oy = ox, this.resize = function() {
			var z;
			for (z = 0; z < ox.length; z++) ox[z].resize();
			p5(), p5()
		}, oh.style.width = "100%", oh.style.maxWidth = "100%", ow.style.lineHeight = "1.5em", ow.style.overflowX = "hidden", ow.style.overflowY = "auto", z = 0; z < ox.length; z++) oh.appendChild(ox[z].oh);
	ow.appendChild(oh)
}

function l(title, pE, backgroundColor, pF, pG) {
	var self, pH = document.createElement("button");

	function pN() {
		if (!b8.pS()) {
			if (!1 !== pF) {
				var pT = b1.color.pU(backgroundColor);
				if (0 < pT[0] && pT[0] < 255 && pT[0] === pT[1] && pT[0] === pT[2]) return
			}
			this.style.backgroundColor = b1.color.pN(backgroundColor, 50)
		}
	}

	function pM() {
		pE(this) || pV(this)
	}

	function pP() {
		this.style.backgroundColor = backgroundColor
	}

	function pO() {
		pV(this)
	}

	function pV(eN) {
		eN.style.backgroundColor = backgroundColor, eN.blur()
	}
	this.button = pH, this.pI = pE, this.pJ = backgroundColor, this.pL = function(pQ) {
			pQ = 1.1 - Math.min(.01 * title.length, .6) + .2 * pQ;
			pH.style.fontSize = pQ.toFixed(1) + "em"
		}, this.pK = function(ef) {
			ef ? 1 === ef && (ef = p.mY) : ef = p.mJ, this.pJ = backgroundColor = ef, pH.style.backgroundColor = ef
		}, self = this, pH.innerHTML = title, pH.style.color = pG ? p.n8 : p.mN, pH.style.userSelect = "none", pH.style.outline = "none", pH.style.overflowWrap = "break-word", self.pK(backgroundColor), pH.style.border = "none", pH.style.font =
		"inherit", self.pL(0), pH.style.padding = "0em 0.3em", pH.onclick = pM, pH.addEventListener("mouseover", pN), pH.addEventListener("mouseout", pO), pH.addEventListener("focus", pN), pH.addEventListener("blur", pP)
}

function pW(pX, ow) {
	var oh;
	this.resize = function() {
		for (var z = 0; z < pX.length; z++) b1.p1.pD(pX[z].button);
		oh.style.gap = oh.style.padding = b1.p1.pC(bR.p9)
	}, (oh = document.createElement("div")).style.display = "grid", oh.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", oh.style.overflowY = "auto", oh.style.gridAutoRows = "5.3em", oh.style.maxHeight = "100%";
	for (var z = 0; z < pX.length; z++) pX[z].pL(1), oh.appendChild(pX[z].button);
	ow.appendChild(oh)
}

function pZ(pa, pb, pc) {
	this.eR = 0, this.eT = 0, this.t = 0, this.iw = 0, this.resize = function() {
		this.iw = Math.min(b1.p1.p2(pc || .5) * pa[1] * am.p3, am.iw - 2 * bR.gap), this.t = Math.min(this.iw * (pa[0] / pa[1]), am.t - 2 * bR.gap), this.iw = pa[1] * this.t / pa[0], this.eR = bR.gap + pb[0] * (am.t - this.t - 2 * bR.gap), this
			.eT = bR.gap + pb[1] * (am.iw - this.iw - 2 * bR.gap)
	}, this.pd = function() {
		return this.eR + .5 * this.t
	}
}

function pe(pf, title, pI) {
	function click() {
		var value = 1 - pf.value;
		this.textContent = (value ? "🟢 " : "⚪ ") + title, void 0 !== pf.o2 && bY.pg.ph(pf.o2, value), pI(value)
	}
	var d;
	title = title || L(6), pI = pI || function() {}, this.d = document.createElement("p"), (d = this.d).textContent = (pf.value ? "🟢 " : "⚪ ") + title, d.style.margin = "0", d.style.marginBottom = "0.5em", d.style.cursor = "pointer", d
		.addEventListener("click", click)
}

function pi(ow, op) {
	var oh = document.createElement("div");
	this.pj = oh, this.resize = function() {
		oh.style.padding = b1.p1.pC(bR.p9), oh.style.lineHeight = b1.p1.pC(b1.p1.pk(.035))
	}, ow.style.overflowX = "hidden", ow.style.overflowY = "auto", oh.innerHTML = op, ow.appendChild(oh)
}

function pl(pm) {
	var oh = document.createElement("div");
	this.d = oh, this.pn = pm, this.resize = function() {
		for (var eK = pm.length, z = 1; z < eK; z++) b1.p1.pD(pm[z], 4)
	};
	var z, eK = pm.length;
	for (oh.style.width = "100%", oh.style.height = "2.7em", oh.style.marginTop = "0.6em", oh.style.border = "inherit", z = 0; z < eK; z++) pm[z].style.verticalAlign = "top", pm[z].style.width = (100 / eK).toFixed(2) + "%", pm[z].style.height =
		"100%", pm[z].style.fontSize = "0.75em", oh.appendChild(pm[z])
}

function po(pf, type, pp, pq) {
	var d;
	this.d = document.createElement("input"), (d = this.d).type = type ? "number" : "text", d.id = "input" + (pf.title || pf.o2), d.value = pf.value, d.style.width = "100%", d.style.userSelect = "none", d.style.outline = "none", d.style.resize =
		"none", d.style.border = "inherit", d.style.font = "inherit", d.style.color = p.mN, d.style.backgroundColor = p.mG, d.style.fontSize = "1em", d.style.padding = "0.1em 0.2em", d.addEventListener("focus", function() {
			am.pr++
		}), d.addEventListener("blur", function() {
			am.pr--, -1 !== pf.o2 && bY.pg.ph(pf.o2, d.value)
		}), d.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== pf.o2 && bY.pg.ph(pf.o2, d.value), pp ? pp() : d.blur())
		}), pq && d.addEventListener("input", function(d) {
			pq(d)
		})
}

function ps(ow, data) {
	var eK = data.pt.length,
		pu = document.createElement("div"),
		pv = document.createElement("div"),
		pw = document.createElement("div"),
		px = new Array(eK),
		ox = new Array(eK),
		py = new Array(data.pz.length),
		q0 = b1.color.mH(70, 70, 0, .35);

	function pN() {
		this.style.backgroundColor = b1.color.pN(q0, 160)
	}

	function pO() {
		this.style.backgroundColor = q0
	}

	function p5() {
		var ed;
		for (ow.style.font = b1.p1.qD(0, b1.p1.qE(.026, .5, .03)), z = 1; z < py.length; z++) b1.p1.pD(py[z], 4);
		if (b1.p1.pD(pu, 2), eK) {
			for (var gl, qF = pu.offsetWidth, qG = pw.offsetWidth, z = 0; z < py.length; z++) gl = .01 * data.q3[z] * qG, py[z].style.width = (100 * gl / qF).toFixed(2) + "%";
			var kD = data.pt[0].length;
			for (z = 0; z < eK; z++)
				for (b1.p1.pD(px[z], 2), ed = 1; ed < kD; ed++) b1.p1.pD(ox[z][ed], 4)
		}
	}
	this.resize = function() {
			p5(), p5()
		}, ow.style.display = "flex", ow.style.flexDirection = "column", pv.style.overflowX = "hidden", pv.style.overflowY = "auto",
		function() {
			var eN, z, pt = data.pt,
				kD = eK ? pt[0].length : 0;
			for (z = 0; z < eK; z++) {
				px[z] = document.createElement("div"), px[z].style.backgroundColor = function(z) {
					return z % 2 == 1 ? b1.color.mH(130, 130, 130, .35) : p.mM
				}(z), px[z].style.width = "100%", px[z].style.display = "flex", ox[z] = new Array(kD);
				for (var ed = 0; ed < kD; ed++) ox[z][ed] = eN = document.createElement("div"), eN.style.display = "flex", eN.style.justifyContent = "center", eN.style.wordBreak = "break-all", eN.style.padding = "0.4em 0em", eN.style.width = data.q3[
					ed] + "%", eN.innerHTML = pt[z][ed].en, 1 === pt[z][ed].dv && (eN.name = "" + z, eN.style.color = p.n8, eN.style.backgroundColor = q0, eN.addEventListener("mouseover", pN), eN.addEventListener("mouseout", pO), function(eN, q5,
					q6) {
					2147483647 !== q6 && eN.addEventListener("click", function() {
						b3.v(30), b3.w(30, q5), b6.dI(b3.a0), this.style.backgroundColor = q0, i.j(8, i.q7, new q8(25, {
							q9: 0,
							q5: b4.qA.qB(b4.qA.qC(5)),
							q6: q6
						}))
					})
				}(eN, pt[z][ed].q5, pt[z][ed].q6)), px[z].appendChild(eN)
			}
			for (pu.style.display = "flex", pu.style.backgroundColor = b1.color.mH(0, 120, 0, .35), z = 0; z < py.length; z++) py[z] = eN = document.createElement("div"), eN.style.display = "flex", eN.style.justifyContent = "center", eN.style
				.wordBreak = "break-all", eN.style.padding = "0.4em 0em", eN.style.width = data.q3[z] + "%", eN.innerHTML = data.pz[z], pu.appendChild(eN)
		}();
	for (var z = 0; z < eK; z++) pw.appendChild(px[z]);
	pv.appendChild(pw), ow.appendChild(pu), ow.appendChild(pv)
}

function qH() {
	var qL, z, qI = document.createElement("div"),
		qJ = document.createElement("div"),
		qK = document.createElement("div"),
		pw = document.createElement("div"),
		pX = [],
		pz = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		qM = [1, 0, 2];

	function qN(z) {
		i.j(8, 0, new q8(21, {
			qO: qM[z],
			qP: 0,
			qQ: 10
		}))
	}
	for (this.show = function() {
			this.ph(i.ky.qR), document.body.appendChild(qI)
		}, this.qS = function() {
			document.body.removeChild(qI)
		}, this.ph = function(qR) {
			for (var z = 0; z < pX.length; z++) pX[qM[z]].button.innerHTML = pz[z] + "<br>" + qR[z]
		}, this.resize = function() {
			var z, qT = bR.gap,
				iw = b1.p1.qU(.085),
				t = Math.min(4 * iw, am.t - 2 * qT),
				eK = pX.length;
			for (b1.p1.qV(qI, qT, am.iw - qT - iw, t, iw), b1.p1.pD(qI), b1.p1.pD(qJ, 6), z = 0; z < eK - 1; z++) b1.p1.pD(pX[z].button, 6);
			for (z = 0; z < eK; z++) pX[z].button.style.fontSize = b1.p1.qW(.22 * iw);
			if (!qL) {
				if (!aP.qX()) return;
				(qL = aP.get(14)).style.width = "24%", qL.style.position = "absolute", qJ.appendChild(qL)
			}
			qL.style.left = b1.p1.pC(0), qL.style.top = "7%"
		}, qI.style.position = "absolute", qJ.style.width = "25%", qJ.style.height = "100%", qJ.style.backgroundColor = p.mJ, qK.style.position = "absolute", qK.style.width = "75%", qK.style.height = "100%", qK.style.backgroundColor = p.mJ, qK.style
		.top = qK.style.right = b1.p1.pC(0), qK.style.overflowX = "auto", qK.style.overflowY = "hidden", qK.style.whiteSpace = "nowrap", pw.style.height = pw.style.maxHeight = "100%", pX.push(new l("", function() {
			qN(0)
		}, p.mu)), pX.push(new l("", function() {
			qN(1)
		}, p.mh)), pX.push(new l("", function() {
			qN(2)
		}, p.my)), z = 0; z < pX.length; z++) pX[z].button.style.height = "100%", pw.appendChild(pX[z].button);
	qK.appendChild(pw), qI.appendChild(qJ), qI.appendChild(qK)
}

function qY(pf, pM) {
	this.os = [];
	var qZ = this.os;

	function click() {
		for (var z = 0; z < qZ.length; z++) qZ[z].textContent = qZ[z].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var o2 = parseInt(this.name);
		void 0 !== pf.o2 && bY.pg.ph(pf.o2, o2), pM && pM(o2)
	}
	for (var qa, eK = pf.qb.length, z = 0; z < eK; z++)(qa = document.createElement("p")).textContent = "⚪ " + pf.qb[z], qa.style.margin = "0", qa.name = "" + z, qa.style.cursor = "pointer", qa.style.fontSize = "1em", qa.addEventListener("click",
		click), qZ.push(qa);
	qZ[pf.value].textContent = qZ[pf.value].textContent.replace("⚪", "🟢")
}

function qc(title, qd, qe) {
	var qI = document.createElement("div"),
		qf = document.createElement("div"),
		pw = document.createElement("div"),
		qg = document.createElement("div"),
		qh = document.createElement("div");
	this.qi = pw, this.qj = qd, this.show = function() {
			!1 !== qe ? document.body.appendChild(qI) : (document.body.appendChild(qf), document.body.appendChild(qg))
		}, this.qS = function() {
			!1 !== qe ? document.body.removeChild(qI) : (document.body.removeChild(qf), document.body.removeChild(qg))
		}, this.qn = function() {
			var qo = b1.p1.pk(.1),
				qp = b1.p1.pk(.08 + .04 * (am.qq < 1));
			return {
				qo: qo,
				qp: qp,
				qr: am.iw / am.p7 - qo - qp
			}
		}, this.resize = function(qs) {
			var eK = qd.length,
				qt = this.qn(),
				qo = qt.qo,
				qp = qt.qp;
			for (qf.style.height = b1.p1.pC(qo), b1.p1.pD(qf, 2), qg.style.top = b1.p1.pC(am.iw / am.p7 - qp), qg.style.height = b1.p1.pC(qp), b1.p1.pD(qg, 8), pw.style.top = b1.p1.pC(qo), pw.style.height = pw.style.maxHeight = b1.p1.pC(qt.qr), qf
				.style.font = b1.p1.qD(0, b1.p1.pk(.02, .3)), qg.style.font = b1.p1.qD(0, b1.p1.pk(.02, .7)), pw.style.font = b1.p1.qD(0, b1.p1.pk(.02, .7)), z = 1; z < eK; z++) b1.p1.pD(qd[z].button, 4);
			for (var qu = 0, z = 0; z < eK; z++) qu += qd[z].button.offsetWidth;
			if (qs && qu < qg.offsetWidth)
				for (z = 0; z < eK; z++) qd[z].button.style.width = (100 * qd[z].button.offsetWidth / qu).toFixed(2) + "%";
			else
				for (z = 0; z < eK; z++) qd[z].button.style.width = "auto";
			qs || this.resize(!0)
		}, this.qv = function() {
			var qt = this.qn(),
				ef = am.p7;
			qw.fillStyle = p.mJ, qw.fillRect(0, ef * qt.qo, am.t, ef * qt.qr)
		}, qI.style.position = "absolute", qI.style.top = "0", qI.style.left = "0", qI.style.width = "100%", qI.style.height = "100%", qf.style.position = "absolute", qf.style.top = "0", qf.style.left = "0", qf.style.width = "100%", qf.style
		.display = "flex", qf.style.backgroundColor = p.mJ, qg.style.position = "absolute", qg.style.left = "0", qg.style.width = "100%", qg.style.overflowX = "auto", qg.style.overflowY = "hidden", qg.style.whiteSpace = "nowrap", qh.style.height = qh
		.style.maxHeight = "100%", pw.style.position = "absolute", pw.style.width = "100%", pw.style.backgroundColor = p.mJ,
		function() {
			for (var z = 0; z < qd.length; z++) qd[z].button.style.height = "100%", qd[z].button.style.padding = "0.0em 0.9em"
		}();
	for (var z = 0; z < qd.length; z++) qh.appendChild(qd[z].button);
	qf.appendChild(function() {
		var qm = document.createElement("h1");
		return qm.textContent = title, qm.style.margin = "auto", qm.style.fontSize = 20 < title.length && am.iw > am.t ? "1.8em" : "2.3em", qm
	}()), qg.appendChild(qh), !1 !== qe && (qI.appendChild(pw), qI.appendChild(qf), qI.appendChild(qg))
}

function qx(name, placeholder, qy, pq) {
	var qz = document.createElement("textarea"),
		r0 = (this.d = qz, !0);

	function r6() {
		qz.select(), document.execCommand("copy")
	}
	this.resize = function() {
			qz.style.padding = b1.p1.pC(bR.p9), qy && b1.p1.pD(qz, 5)
		}, this.r1 = function(r2) {
			qz.value = r2
		}, this.r3 = function() {
			return qz.value
		}, this.r4 = function() {
			qz.select()
		}, this.clear = function() {
			qz.value = ""
		}, this.r5 = function() {
			r0 && navigator.clipboard ? (qz.select(), navigator.clipboard.writeText(qz.value).catch(function() {
				r0 = !1, r6()
			})) : r6()
		}, qz.setAttribute("name", name), qz.setAttribute("id", name + "Field"), qz.setAttribute("autocomplete", "off"), placeholder && qz.setAttribute("placeholder", placeholder), qz.style.top = "0", qz.style.left = "0", qz.style.width = "100%", qz
		.style.height = "100%", qz.style.userSelect = "none", qz.style.outline = "none", qz.style.resize = "none", qz.style.border = "none", qz.style.color = p.mN, qz.style.backgroundColor = p.mG, qz.style.fontSize = "1.2em", pq && qz
		.addEventListener("input", function(d) {
			pq(d)
		}), qz.addEventListener("focus", function() {
			am.pr++
		}), qz.addEventListener("blur", function() {
			am.pr--
		})
}

function d2() {
	this.pI = new r7, this.db = new r8, this.pg = new r9, this.ky = new rA, this.dI = function() {
		this.db.dI(), (new rB).dI()
	}
}

function r8() {
	function rC(z, type, rI, eo) {
		bY.db.data.push({
			o2: z,
			type: type || 0,
			value: rI || 0,
			rI: rI || 0,
			eo: eo || 0
		})
	}

	function rD(z, type, rI, eo) {
		bY.db.data.push({
			o2: z,
			type: type,
			value: rI || "",
			rI: rI || "",
			eo: eo || 0
		})
	}

	function rE(m5) {
		for (var z = bY.db.data.length; z < m5; z++) bY.db.data.push(null)
	}
	this.data = [], this.dI = function() {
		rC(0, 1, 0, 5), rC(1, 1, 1), rC(2, 0), rD(3, 2), rC(4, 1), rD(5, 2, "Trebuchet MS", 1), rC(6, 0), rC(7, 0, 0), rC(8, 0), rC(9, 1, 1), rC(10, 1), rC(11, 1, 1), rD(12, 2, navigator.language), rE(100), rD(100, 2), rD(101, 2), rD(102, 2), rD(
			103, 2), rD(104, 2), rD(105, 2), rD(106, 2), rC(107), rC(108), rC(109), rD(110, 2), rC(111), rC(112), rC(113), rD(114, 2), rC(115), rD(116, 2), rC(117, 1), rD(118, 2, "", 2), rC(119, 1, 0, 1), rD(120, 2), rC(121, 1, ~~(262144 *
			Math.random())), rD(122, 2, "Player " + Math.floor(1e3 * Math.random())), rC(123), rD(124), rC(125, 1), rD(126, 2), rC(127, 0, 1), rC(128), rC(129), rC(130), rC(131), rC(132), rD(133, 2), rC(134, 0, 5), rD(135, 2), rD(136, 2), rC(
			137), rC(138), rC(139), rC(140), rC(141), rC(142), rC(143), rC(144), rD(145, 2), rC(146), rC(147), rD(148, 2), rC(149), rC(150, 0, 1), rD(151, 2), rC(152, 0, 5), rC(153, 1), rC(154, 1), rD(155, 2), rE(180), rC(180, 0), rC(181, 0)
	}, this.ph = function(o2, value) {
		this.data[o2].value = value
	}, this.dc = function(o2, value) {
		this.ph(o2, value), bY.pI.save(o2, String(value)), bY.pI.save(o2, String(this.data[o2].eo), !0)
	}, this.rF = function() {
		for (var z = 0; z < this.data.length; z++) this.data[z] && (bY.pI.save(z, String(this.data[z].value)), bY.pI.save(z, String(this.data[z].eo), !0))
	}, this.rG = function(o2) {
		return Number(this.data[o2].value)
	}, this.rH = function(o2) {
		return String(this.data[o2].value)
	}
}

function r7() {
	this.rJ = function(o2, eo) {
		return Number(this.rK(o2, eo))
	}, this.rK = function(o2, eo) {
		var en = null;
		return 0 === m.id ? m.rL && (en = m.rL.getItem((eo ? "v" : "d") + o2)) : 1 === m.id ? en = m.rM.loadString((eo ? 1e3 : 2e3) + o2) : 2 === m.id && (en = m.rN[(eo ? "v" : "d") + o2]), en && 0 !== en.length ? en : null
	}, this.rO = function(eK, rP) {
		var f0 = [],
			rQ = rP ? "e" : "l";
		if (0 === m.id) {
			if (m.rL)
				for (z = 0; z < eK; z++) f0.push(m.rL.getItem(rQ + z))
		} else if (1 === m.id)
			for (var rR = rP ? 5e3 : 3e3, z = 0; z < eK; z++) f0.push(m.rM.loadString(rR + z));
		else if (2 === m.id)
			for (z = 0; z < eK; z++) f0.push(m.rN[rQ + z]);
		return f0
	}, this.save = function(o2, value, eo) {
		var rS = (eo ? "v" : "d") + o2;
		0 === m.id ? m.rL && bY.db.data[140].value && m.rL.setItem(rS, value) : 1 === m.id ? m.rM.saveString((eo ? 1e3 : 2e3) + o2, value) : 2 === m.id && (m.rN[rS] = value, m.rT.postMessage(rS + " " + value))
	}, this.rU = function(f0, rP) {
		var eK = f0.length,
			rQ = rP ? "e" : "l";
		if (0 === m.id) {
			if (m.rL && bY.db.data[140].value)
				for (z = 0; z < eK; z++) m.rL.setItem(rQ + z, f0[z])
		} else if (1 === m.id)
			for (var rR = rP ? 5e3 : 3e3, z = 0; z < eK; z++) m.rM.saveString(rR + z, f0[z]);
		else if (2 === m.id)
			for (z = 0; z < eK; z++) m.rN[rQ + z] = f0[z], m.rT.postMessage(rQ + z + " " + f0[z])
	}
}

function rB() {
	this.dI = function() {
		! function() {
			var data = bY.db.data;
			0 === data[2].eo && (am.iw > am.t || 0 !== m.id) && (data[2].value = data[2].rI = 1);
			0 === data[100].eo && (data[100].value = data[100].rI = (0 === m.id ? "Player " : 1 === m.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var z, en, data = bY.db.data,
			eK = data.length;
		for (z = 0; z < eK; z++) data[z] && data[z].eo === bY.pI.rJ(z, !0) && (en = bY.pI.rK(z), data[z].value = null === en ? data[z].rI : 2 === data[z].type ? en : Number(en));
		bY.db.data[10].value = bY.db.data[10].rI
	}
}

function rA() {
	function ra(f0) {
		if (0 === f0.length) bY.pg.ph(116, "");
		else {
			for (var rd = f0[0], z = 1; z < f0.length; z++) rd += ";" + f0[z];
			bY.pg.ph(116, rd)
		}
	}
	this.rX = function() {
		bY.db.data[110].value.length && (bY.db.data[106].value = bY.db.data[110], bY.pg.ph(110, ""), this.rY())
	}, this.rY = function() {
		var f0 = bY.db.data[116].value.split(";");
		for (f0.length % 2 == 1 && f0.pop(), f0.unshift(bY.db.data[106].value), f0.unshift(bY.db.data[105].value), z = 2; z < f0.length; z += 2)
			if (f0[z] === f0[0]) {
				f0.splice(z, 2);
				break
			} for (var rZ = [], z = 0; z < f0.length; z += 2) rZ.push(f0[z]);
		ra(f0), bY.db.data[117].value = 0, bY.db.data[117].qb = rZ
	}, this.rb = function(o2) {
		bY.db.data[117].qb.splice(o2, 1), bY.db.data[117].value = Math.min(o2, bY.db.data[117].qb.length - 1);
		var f0 = bY.db.data[116].value.split(";");
		f0.splice(2 * o2, 2), ra(f0)
	}, this.rc = function(o2) {
		var f0 = bY.db.data[116].value.split(";");
		return {
			q5: f0[2 * o2],
			password: f0[2 * o2 + 1]
		}
	}, this.re = function() {
		var en = bA.oZ(bY.db.data[121].value, -1, 262143);
		return en = -1 === en ? ~~(262144 * Math.random()) : en
	}
}

function r9() {
	this.ph = function(o2, value) {
		bY.db.data[o2].value !== value && (bY.db.dc(o2, value), 0 === o2 ? (i.rf(), ay.dI(), i.j(2)) : 1 === o2 ? am.dT(1) : 2 === o2 ? am.dT(0) : 5 === o2 && (b1.p1.rg(), am.dT(0)))
	}, this.rh = function() {
		for (var data = bY.db.data, z = 0; z < 100; z++) data[z] && bY.db.dc(z, data[z].rI);
		b1.p1.rg(), am.dT(1), ay.dI()
	}, this.ri = function() {
		for (var data = bY.db.data, z = 0; z < data.length; z++) data[z] && bY.db.ph(z, data[z].rI)
	}, this.rj = function() {
		for (var ee = bY.db, z = 128; z < 135; z++) ee.dc(z, ee.data[z].rI)
	}, this.rk = function(data) {
		bY.pg.ph(109, data.q6), bY.pg.ph(107, data.rl), bY.pg.ph(108, data.rm), bY.pg.ph(112, data.rn), bY.pg.ph(111, data.ro), bY.pg.ph(113, data.rp), bY.pg.ph(122, data.username), bY.pg.ph(135, data.rq), bY.pg.ph(136, data.rr), bY.pg.ph(137,
			data.rs), bY.pg.ph(138, data.rt), bY.pg.ph(139, data.ru), bY.pg.ph(141, data.rv), bY.pg.ph(142, data.rw), bY.pg.ph(143, data.rx), bY.pg.ph(144, data.ry)
	}
}

function bn() {
	this.qA = new rz, this.s0 = new s1, this.dI = function() {
		this.qA.dI()
	}
}

function s1() {
	this.s2 = function(size) {
		for (var s3 = b6, f0 = [], z = 0; z < size; z++) f0.push(String.fromCharCode(s3.o3(16)));
		return f0.join("")
	}, this.s4 = function(oj) {
		return 20 < (oj = oj.trim()).length ? oj.substring(0, 20) : oj
	}
}

function rz() {
	var s5 = new Uint8Array(78);
	this.dI = function() {
		var z;
		for (s5[50] = 37, z = 0; z < 10; z++) s5[z + 3] = z + 1;
		for (z = 0; z < 26; z++) s5[z + 20] = z + 11, s5[z + 52] = z + 38
	}, this.s6 = function(oj) {
		return oj.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.s7 = function(oj, size) {
		if ((oj = this.s6(oj)).length > size) return oj.substring(0, size);
		for (; oj.length < size;) oj = "-" + oj;
		return oj
	}, this.s8 = function(oj) {
		for (var s9 = s5, eK = oj.length, f0 = new Uint8Array(eK), z = 0; z < eK; z++) f0[z] = s9[oj.charCodeAt(z) - 45];
		return f0
	}, this.sA = function(sB) {
		b3.v(6 * sB.length), this.sC(sB), b6.dI(b3.a0)
	}, this.sC = function(sB) {
		for (var eK = sB.length, t = b3, z = 0; z < eK; z++) t.w(6, sB[z])
	}, this.sD = function(oj) {
		this.sC(this.s8(oj))
	}, this.sE = function(oj, size) {
		this.sC(this.s8(this.s7(oj, size)))
	}, this.sF = function(oj, size) {
		for (var f0 = this.s8(this.s7(oj, size)), en = 0, ly = 1, z = f0.length - 1; 0 <= z; z--) en += ly * f0[z], ly *= 64;
		return en
	}
}

function sG() {
	var t, iw, sH;

	function sf(gl, eN, sd, sM, sY) {
		eN = se(gl, eN + 1 + 2 * sM & 3);
		! function(gl, sg) {
			return 1 < Math.abs(gl % t - sg % t) || 1 < Math.abs(sj(gl) - sj(sg))
		}(gl, eN) && 0 === sY[eN << 2] && (sY[eN << 2] = sd)
	}

	function sj(fr) {
		return Math.floor((fr + .5) / t) % iw
	}

	function se(fr, eN) {
		return fr + sH[eN]
	}
	this.sI = function(oj) {
		var z, sJ, eK, sK, s3 = b6;
		for (b5.qA.sA(b5.qA.s8(oj)), bH.eV = t = s3.o3(12), bH.eW = iw = s3.o3(12), sH = [-t, -1, t, 1], bH.sV = document.createElement("canvas"), bH.sV.width = bH.eV, bH.sV.height = bH.eW, bH.sR = bH.sV.getContext("2d", {
				alpha: !1
			}), bH.sS = bH.sR.getImageData(0, 0, bH.eV, bH.eW), bH.sW = bH.sS.data, b1.pB.sX(bH.sW), eK = s3.o3(12), sJ = s3.o3(5), sK = sO(t * iw - 1), z = 0; z < eK; z++) ! function(kD, fr, sL, sM) {
			var z, eN, s3 = b6,
				sY = bH.sW,
				sZ = fr,
				sa = fr,
				sb = 0,
				sc = 1 + sL,
				sd = 2 - sL;
			for (sY[fr << 2] = sc, z = 0; z < kD; z++) eN = s3.o3(2), fr = se(fr, eN), sY[fr << 2] === sc ? sb % 2 == 1 && sf(sa, sb + 2 * sM + 3, sd, sM, sY) : sY[fr << 2] = sc, sf(fr, eN, sd, sM, sY), sf(sa, eN, sd, sM, sY), sa = fr, sb =
				eN;
			se(fr, 0) === sZ ? (sf(fr, 0, sd, sM, sY), sf(sZ, 0, sd, sM, sY)) : se(fr, 1) === sZ && (sf(fr, 0, sd, sM, sY), sf(sZ, 2, sd, sM, sY));
			0 === kD && (sf(sZ, 0, sd, sM, sY), sf(sZ, 2, sd, sM, sY))
		}(s3.o3(sJ), s3.o3(sK), 1 === s3.o3(1), 1 === s3.o3(1));
		var eR, eT, kG, sk, sl, sm, sY = bH.sW,
			sn = !0,
			so = bH.jn.sp[bH.g2].so,
			sq = bH.jn.sp[bH.g2].sq;
		for (eT = 0; eT < iw; eT++)
			for (sk = !0, sl = sn, eR = sm = 0; eR < t; eR++) kG = 4 * eT * t + 4 * eR, sm <= eR && 0 < sY[kG] && (sl = 2 === sY[kG], sk) && (sk = !1, sl !== sn) ? (sn = sl, sm = eR + 1, eR = -1) : (sl ? (sY[kG] = sq[0], sY[1 + kG] = sq[1], sY[
				2 + kG] = sq[2]) : (sY[kG] = so[0], sY[1 + kG] = so[1], sY[2 + kG] = so[2]), sY[3 + kG] = 255);
		bH.sR.putImageData(bH.sS, 0, 0), bH.sT = !0, bH.sU.dI(), bU.dQ = !0
	}
}

function bs() {
	var eR, eT, t, iw, sr, ss, st, su, player, f0;

	function t2() {
		return function() {
			var z;
			for (z = 0; z < 8; z++)
				if (eR = bA.em(t * an.random(), an.value(100)), eT = bA.em(iw * an.random(), an.value(100)), tA()) return 1;
			return
		}() || function() {
			var hV, hY, ed, t0, ee, sz;
			for (hV = bA.em(t * an.random(), an.value(100)), hY = bA.em(iw * an.random(), an.value(100)), ed = 40; 1 <= ed; ed--)
				for (t0 = iw - ed; 0 <= t0; t0 -= 40)
					for (eT = (t0 + hY) % iw, ee = 40; 1 <= ee; ee--)
						for (sz = t - ee; 0 <= sz; sz -= 40)
							if (eR = (sz + hV) % t, tA()) return 1;
			return
		}()
	}

	function tA() {
		for (var fr, tC, gap = bA.em(sr - su, 2), tD = st + eT * sr + gap, tE = ss + eR * sr + gap, tB = tD + su - 1; tD <= tB; tB--)
			for (tC = tE + su - 1; tE <= tC; tC--)
				if (fr = aQ.t8(tC, tB), !aQ.eF(fr) || aQ.ib(fr)) return;
		return 1
	}

	function t3(sz, t0) {
		sv(), tF(sz - 2, t0 - 2)
	}

	function sv() {
		aU.lK[player] = 0, aU.gN[player] = 0, aU.g9[player] = aU.tG[player] = 0, aU.fl[player] = [], aU.fz[player] = [], aU.g0[player] = [], aU.ek[player] = [], aU.hy[player] = aU.i0[player] = aU.hz[player] = aU.i1[player] = 0
	}

	function tF(sz, t0) {
		var fr, z, tI, tJ;
		for (aU.lK[player] = 1, player < a1.jS ? aU.gN[player] = a1.tH : aU.gN[player] = a2.ji[a2.iZ[player]], aU.hy[player] = sz + 10, aU.i0[player] = t0 + 10, aU.i1[player] = aU.hz[player] = 0, tI = sz; tI < sz + 4; tI++)
			for (tJ = t0; tJ < t0 + 4; tJ++)(sz < tI && tI < sz + 3 || t0 < tJ && tJ < t0 + 3) && (fr = aQ.t8(tI, tJ), aQ.eF(fr)) && (aU.hy[player] = tI < aU.hy[player] ? tI : aU.hy[player], aU.hz[player] = tI > aU.hz[player] ? tI : aU.hz[player], aU
				.i0[player] = tJ < aU.i0[player] ? tJ : aU.i0[player], aU.i1[player] = tJ > aU.i1[player] ? tJ : aU.i1[player], f0[aU.g9[player]] = fr, aU.g9[player]++, aQ.tK(fr, player));
		for (aU.tG[player] = aU.g9[player], z = aU.g9[player] - 1; 0 <= z; z--) aQ.tL(f0[z], player) ? (aQ.fo(f0[z], player), aU.fz[player].push(f0[z])) : aQ.tM(f0[z]) ? (aQ.fo(f0[z], player), aU.g0[player].push(f0[z])) : aQ.tN(f0[z]) && (aQ.fo(f0[
			z], player), aU.ek[player].push(f0[z]))
	}

	function t9(sz, t0) {
		for (var fr, tC, tB = t0; t0 - 6 < tB; tB--)
			for (tC = sz; sz - 6 < tC; tC--)
				if (fr = aQ.t8(tC, tB), aQ.ib(fr)) return;
		return 1
	}
	this.dI = function() {
		var z, sz, t0;
		if (f0 = new Array(12), su = 6, sr = 10, t = bA.em(bH.eV, sr), iw = bA.em(bH.eW, sr), ss = bA.em(bH.eV - sr * t, 2), st = bA.em(bH.eW - sr * iw, 2), a1.gh)
			for (z = 0; z < a1.jS; z++) player = z, sv(), aU.lK[player] = 1;
		if (ax.jm && ax.jn.sw) {
			for (player = 0; player < a1.eH; player++)
				if (1 !== aU.lK[player]) {
					if (player < a1.t1) {
						if (function() {
								var sz = ax.jn.sw[player] + 1,
									t0 = ax.jn.t7[player] + 1;
								if (3 < sz && sz < bH.eV - 5 && 3 < t0 && t0 < bH.eW - 5 && aQ.eF(aQ.t8(sz, t0)) && t9(sz + 3, t0 + 3)) return t3(sz + 1, t0 + 1), 1;
								return
							}()) continue;
						if (t2()) {
							sz = ss + eR * sr + bA.em(sr, 2), t0 = st + eT * sr + bA.em(sr, 2), t3(sz, t0);
							continue
						}
					}
					sv()
				}
		} else ! function() {
			var sz, t0;
			for (player = 0; player < a1.eH; player++) 1 !== aU.lK[player] && (player < a1.t1 && t2() ? (sz = ss + eR * sr + bA.em(sr, 2), t0 = st + eT * sr + bA.em(sr, 2), t3(sz, t0)) : sv())
		}();
		bS.lG[7] = aU.g9[a1.e4], bS.lG[8] = aU.gN[a1.e4]
	}, this.tO = function(iY, tP, tQ) {
		var z, sz, t0, fr, eR, eT;
		for (player = iY, z = 0; z < 20; z++)
			for (sz = tP + z; tP - z <= sz; sz--)
				for (t0 = tQ + z; tQ - z <= t0; t0--)
					if ((sz === tP + z || sz === tP - z || t0 === tQ + z || t0 === tQ - z) && 3 < sz && sz < bH.eV - 5 && 3 < t0 && t0 < bH.eW - 5 && aQ.eF(aQ.t8(sz, t0)) && t9(sz + 3, t0 + 3)) {
						if (0 < aU.g9[player]) {
							for (eT = eR = fr = void 0, eR = aU.hz[player]; eR >= aU.hy[player]; eR--)
								for (eT = aU.i1[player]; eT >= aU.i0[player]; eT--) fr = 4 * (eT * bH.eV + eR), aQ.tS(player, fr) && (aQ.tT(fr), aU.g9[player]--);
							sv()
						}
						return tF(sz - 1, t0 - 1), !0
					} return !1
	}, this.tU = function(iY) {
		player = iY, t2() ? t3(ss + eR * sr + bA.em(sr, 2), st + eT * sr + bA.em(sr, 2)) : sv()
	}
}

function tV() {
	af.tW(), qw.setTransform(hl, 0, 0, hl, 0, 0), qw.imageSmoothingEnabled = hl < 3, qw.drawImage(bH.sV, aF.tX(), aF.tY()), bE.tZ.qv(), qw.drawImage(ta, aF.tX(), aF.tY()), af.qv(), bC.qv(), aT.qv(), (a1.lp ? (bW.qv(), b2) : (aA.qv(), aI.qv(), aE
	.qv(), b2.qv(), ak.qv(), aJ.qv(), aF.qv(), aD.qv(), bW.qv(), aH.qv(), aC.qv(), a9.qv(), a8.qv(), aK.qv(), bT.qv(), ah)).qv(), i.qv()
}

function tb(tc, t, iw) {
	tc.clearRect(0, 0, t, iw), tc.fillStyle = p.mK, tc.fillRect(0, 0, t, iw)
}

function td(tc, t, iw, te) {
	tc.fillStyle = p.mN, tc.fillRect(0, 0, t, te), tc.fillRect(0, 0, te, iw), tc.fillRect(t - te, 0, te, iw), tc.fillRect(0, iw - te, t, te)
}

function tf(tc, eR, eT, gy, te, fr, tg) {
	tc.fillStyle = p.mN;
	var fr = Math.floor(gy * fr),
		qG = (fr += (fr - te) % 2, Math.floor((fr - te) / 2)),
		gy = Math.floor((gy - fr) / 2);
	tc.fillRect(eR + gy, eT + gy + qG, fr, te), tg && tc.fillRect(eR + gy + qG, eT + gy, te, fr)
}

function ti() {
	this.tj = null, this.dI = function(tj) {
		this.tj = tj, aA.tk(this.tj)
	}, this.tl = function(tm) {
		var hJ = (this.tj[tm].tn - this.tj[1 - tm].tn) / 10,
			hJ = 8 / (1 + Math.pow(2, hJ / 32)),
			hJ = Math.floor(10 * hJ + .5),
			tp = this.tq(this.tj[tm].tn + hJ + 1),
			hJ = this.tq(this.tj[1 - tm].tn - hJ);
		0 === tm ? aA.ts(this.tj, tp, hJ, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aA.ts(this.tj, hJ, tp, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.tq = function(tn) {
		return 16e3 <= (tn = tn < 0 ? 0 : 16e3 < tn ? 16e3 : tn) ? "Unknown" : (tn / 10).toFixed(1)
	}
}

function cN() {
	this.tt = new tu, this.sY = new tv
}

function tv() {
	this.tw = !1;
	this.u0 = [], this.u1 = 100;
	var lm, ln, gap, gy, tx, tz, u2 = 0,
		u3 = new Array(9),
		u4 = [],
		u5 = [],
		u6 = 0,
		u7 = 0,
		u8 = 0,
		u9 = 0;

	function uK() {
		u3.sort(function(ed, ee) {
			return ee.ja - ed.ja
		});
		for (var oj = "" + u3[0].nc, z = 1; z < 9; z++) oj += "," + u3[z].nc;
		for (z = 0; z < 9; z++) oj += "," + u3[z].ja;
		bY.db.dc(120, oj)
	}
	this.dI = function() {
		for (var qM = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], z = 0; z < qM.length; z++) {
			var color = 6 === qM[z] ? p.mj : p.mL;
			this.u0.push(b1.h4.uA(aP.get(3), qM[z], color))
		}
		for (z = 0; z < aX.tt.uB; z++) u5.push(aX.tt.uC - aX.tt.uB + z);
		for (z = 0; z < aX.tt.uD; z++) u5.push(aX.tt.uE + z);
		var uF = aX.tt.uG(b9.uF);
		for (z = 0; z < uF.length; z++) u5.push(uF[z]);
		! function() {
			var z, f0 = bY.db.data[120].value.split(",");
			if (18 !== f0.length)
				for (z = 0; z < 9; z++) u3[z] = {
					nc: 1015 + z,
					ja: 0
				};
			else
				for (z = 0; z < 9; z++) {
					var en = parseInt(f0[z]),
						ef = (en = 0 <= en && en < aX.tt.uC ? en : 0, parseInt(f0[z + 9]));
					ef = 0 <= ef && ef < 1e3 ? ef : 0, u3[z] = {
						nc: en,
						ja: ef
					}
				}
		}()
	}, this.show = function(kZ, ka, uL) {
		var z;
		if (u6 = kZ, u7 = ka, u2 = uL || 0, this.tw = !0, u4 = [], 0 === u2)
			for (z = 0; z < 9; z++) u4.push(u3[z].nc);
		else {
			var ee = 49 * u2,
				uL = ee - 49;
			for (uL >= u5.length && (u2 = 1, uL = 0, ee = 49), z = uL = (ee = Math.min(ee, u5.length)) - 49; z < ee; z++) u4.push(u5[z])
		}
		u4.push(1024);
		uL = u4.length, gy = Math.floor((m.n.uM() ? .075 : .0468) * am.p3), gap = Math.floor(gy / 3), (u8 = 10 * (tx = gy + gap)) > am.t && (u8 = am.t, gap = (tx = u8 / 10) - (gy = 3 * tx / 4)), tz = bA.em(uL, 10) + !!(uL % 10), (u9 = tz * tx) >
			am.iw && (u9 = am.iw, gap = (tx = u9 / tz) - (gy = 3 * tx / 4)), uL = .5 * gap;
		lm = Math.min(Math.max(kZ - .5 * u8 + uL, uL), am.t - u8 + uL), ln = Math.min(Math.max(ka - .5 * u9 + uL, uL), am.iw - u9 + uL)
	}, this.gZ = function(kZ, ka, player) {
		if (!this.tw) return !1;
		if (this.uO(kZ, ka)) {
			kZ = bA.oZ(bA.em(kZ - lm + .5 * gap, tx), 0, 9);
			if ((kZ += 10 * bA.oZ(bA.em(ka - ln + .5 * gap, tx), 0, 9)) >= u4.length) return a8.qS(), !0;
			ka = u4[kZ];
			if (1024 === ka) return this.show(u6, u7, u2 + 1), !0;
			! function(nc) {
				for (var z = 0; z < 9; z++) u3[z].ja = Math.floor(.99 * u3[z].ja);
				for (z = 0; z < 9; z++)
					if (nc === u3[z].nc) return u3[z].ja = Math.min(u3[z].ja + 30, 999), uK();
				u3.splice(5, 0, {
					nc: nc,
					ja: Math.max(u3[4].ja, 30)
				}), u3.pop(), uK()
			}(ka), player === a1.e4 ? az.gi.nb(ka) : az.ff.nr(ka, player)
		}
		return a8.qS(), !0
	}, this.uO = function(kZ, ka) {
		return !(kZ < lm - .5 * gap || ka < ln - .5 * gap || lm + u8 - .5 * gap <= kZ || ln + u9 - .5 * gap <= ka)
	}, this.qv = function() {
		qw.fillStyle = p.mK, qw.fillRect(lm - .5 * gap, ln - .5 * gap, u8, u9);
		for (var kG = .5 * bR.uP, eK = (qw.lineWidth = bR.uP, qw.strokeStyle = qw.fillStyle = p.mN, qw.strokeRect(lm - .5 * gap + kG, ln - .5 * gap + kG, u8 - 2 * kG, u9 - 2 * kG), qw.imageSmoothingEnabled = !0, u4.length), z = 0; z < eK; z++)
			this.uQ(u4[z], qw, lm + z % 10 * tx, ln + bA.em(z, 10) * tx, gy);
		qw.imageSmoothingEnabled = !1
	}, this.uQ = function(nc, h5, eR, eT, gy) {
		var e0;
		nc >= 1024 - aX.tt.uB ? (e0 = gy / this.u1, h5.setTransform(e0, 0, 0, e0, eR, eT), h5.drawImage(this.u0[nc - 1024 + aX.tt.uB], 0, 0), h5.setTransform(1, 0, 0, 1, 0, 0)) : (b1.p1.textAlign(h5, 1), b1.p1.textBaseline(h5, 1), h5.font = b1.p1
			.qD(0, .89 * gy), h5.fillText(aX.tt.uR(nc), eR + .5 * gy, eT + (.35 - b1.p1.uS + .56) * gy))
	}
}

function tu() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.uB = 13, this.uD = this.emojis.length, this.uE = 676, this.uC = 1024, this.uT = this.emojis.indexOf("💀"), this.uU = this.uT + 1, this.uV = this.emojis.indexOf("🥇"), this.uW = this.emojis.indexOf("😊"), this.uR = function(en) {
		return en < this.uE ? String.fromCharCode(55356, 56806 + bA.em(en, 26), 55356, 56806 + en % 26) : this.emojis[Math.min(en - this.uE, this.uD - 1)]
	}, this.uG = function(oj) {
		for (var eK = oj.length - 2, f0 = [], z = 0; z < eK; z++) {
			var hE = oj.charCodeAt(z) - 56806,
				hF = oj.charCodeAt(z + 2) - 56806;
			0 <= hE && hE < 26 && 0 <= hF && hF < 26 && (f0.push(26 * hE + hF), z += 3)
		}
		return f0
	}, this.uX = function(en) {
		return en < this.uE
	}, this.uY = function(en) {
		return en >= 1024 - this.uB
	}, this.uZ = function(en) {
		return en >= this.uE && en < this.uE + this.uU
	}
}

function bm() {
	this.qA = new ua, this.s0 = new ub, this.dI = function() {
		this.qA.dI()
	}
}

function ub() {
	this.sD = function(oj) {
		for (var eK = oj.length, t = b3, z = 0; z < eK; z++) t.w(16, oj.charCodeAt(z))
	}
}

function ua() {
	var uc = new Uint8Array(64);
	this.dI = function() {
		var z;
		for (uc[0] = 45, uc[37] = 95, z = 0; z < 10; z++) uc[z + 1] = 48 + z;
		for (z = 0; z < 26; z++) uc[z + 11] = 65 + z, uc[z + 38] = 97 + z
	}, this.qC = function(ud) {
		for (var s3 = b6, sB = new Uint8Array(ud), z = 0; z < ud; z++) sB[z] = s3.o3(6);
		return sB
	}, this.qB = function(sB) {
		for (var eK = sB.length, ue = uc, f0 = [], z = 0; z < eK; z++) f0.push(String.fromCharCode(ue[sB[z]]));
		return f0.join("")
	}
}

function bt() {
	var uf, ug, uh;
	uf = [32, 65, 191, 913, 931], ug = [64, 127, 688, 930, 1155], uh = new Array(uf.length + 1);
	for (var z = 0; z < uh.length; z++) {
		uh[z] = 0;
		for (var ed = z - 1; 0 <= ed; ed--) uh[z] += ug[ed] - uf[ed]
	}

	function un(ef) {
		for (var z = uf.length - 1; 0 <= z; z--)
			if (ef >= uf[z] && ef < ug[z]) return z;
		return -1
	}
	this.s4 = function(oj) {
		return 0 !== (oj = oj.trim()).indexOf("Bot ") && 0 !== oj.indexOf("[Bot] ") && function(oj, uk, ul) {
			var eK = (oj = oj.trim()).length;
			if (eK < uk || ul < eK) return !1;
			for (var ef, um = 0, z = 0; z < eK; z++)
				if (ef = oj.charCodeAt(z), um += 65 <= ef && ef <= 90 || 1040 <= ef && ef <= 1071 ? 1 : 0, -1 === un(ef)) return !1;
			if (3 < um && um > Math.floor(eK / 2)) return !1;
			return !0
		}(oj, 3, 20)
	}, this.uo = function(oj) {
		for (var eK = (oj = oj.trim()).length, f0 = [], z = 0; z < eK; z++) {
			var ef, fr = un(ef = oj.charCodeAt(z));
			f0.push(uh[fr] + ef - uf[fr])
		}
		return f0
	}, this.sI = function(f0) {
		for (var ef, ee, oj = "", eK = f0.length, z = 0; z < eK; z++)
			for (ee = 1; ee < uh.length; ee++)
				if (f0[z] < uh[ee]) {
					ef = uf[ee - 1] + f0[z] - uh[ee - 1], oj += String.fromCharCode(ef);
					break
				} return oj
	}, this.up = function(oj) {
		for (var f0 = this.uo(oj), result = "", z = 0; z < f0.length; z++) result = (result += f0[z] < 10 ? "00" : f0[z] < 100 ? "0" : "") + f0[z].toString(10);
		return result
	}, this.uq = function(oj) {
		for (var f0 = new Array(Math.floor(oj.length / 3)), z = 0; z < oj.length; z += 3) f0[Math.floor(z / 3)] = parseInt(oj.substring(z, z + 3));
		return this.sI(f0)
	}, this.ur = function(oj) {
		for (var en, f0 = [oj.length], z = 0; z < oj.length; z++) f0[z] = oj.charCodeAt(z) - 48;
		var result = "";
		for (z = 0; z < oj.length; z++) z === oj.length - 1 || 51 < 10 * f0[z] + f0[z + 1] ? result += f0[z].toString() : (en = 10 * f0[z] + f0[z + 1], result += String.fromCharCode(en + (en < 26 ? 65 : 71)), z++);
		return result
	}, this.us = function(oj) {
		for (var ef, result = "", z = 0; z < oj.length; z++) 48 <= (ef = oj.charCodeAt(z)) && ef < 58 ? result += String.fromCharCode(ef) : 65 <= ef && ef < 75 ? result += "0" + (ef - 65).toString() : 75 <= ef && ef < 91 ? result += (ef - 65)
			.toString() : 97 <= ef && ef < 123 && (result += (ef - 71).toString());
		return result
	}, this.ut = function(oj) {
		for (var eK = oj.length, f0 = [], z = 0; z < eK; z++)(ef = oj.charCodeAt(z)) < 58 ? f0.push(oj[z]) : (ef -= ef < 91 ? 65 : 71, f0.push(String(bA.em(ef, 10))), f0.push(String(ef - 10 * bA.em(ef, 10))));
		var eK = f0.length - 2,
			ef = 0,
			sB = [];
		for (z = 0; z < eK; z += 3) sB[ef++] = parseInt(f0[z] + f0[z + 1] + f0[z + 2]);
		return sB
	}, this.uu = function() {
		for (var h7, uv = "", z = 0; z < 6; z++) h7 = 48 + an.random() % 36, h7 += 58 <= h7 ? 39 : 0, uv += String.fromCharCode(h7);
		return uv
	}
}

function cu() {
	this.uw = new ux, this.uy = new uz, this.result = new v0, this.gp = new v1, this.v2 = new v3, this.v4 = new v5, this.v6 = new v7, this.dI = function() {
		this.v2.dI()
	}, this.iH = function() {
		this.v2.iH()
	}
}

function v1() {
	this.v8 = function() {
		for (var eK = aZ.jT, tj = aZ.jV, v9 = [], z = 0; z < eK; z++) {
			var fr = tj[z];
			aQ.vA(fr) && v9.push(fr)
		}
		return v9
	}, this.vB = function() {
		for (var eK = aZ.jT, tj = aZ.jV, dv = 0, g9 = aU.g9, z = 0; z < eK; z++) dv += g9[tj[z]];
		return dv
	}
}

function ux() {
	function vD() {
		if (2 === a1.vH) return 1;
		ak.vI(), a1.vH = 2, a1.vJ = a1.vK
	}

	function vF() {
		bG.v6.vL(), aK.show(1 === a1.vM, !1, 2 === a1.vM), bG.result.vL(), bG.v4.iH(), aA.vN(!0), aA.vO(247, 0), aA.vO(956, 0), aA.vO(957, 0), aI.l6(!0), aJ.l6(!0), ak.l6(), b2.vP(), a1.gV && bU.vQ.vR(), bU.dQ = !0, bQ.vS(), m.n.setState(0)
	}
	this.vC = function() {
		vD() || (a1.vE = 2, vF())
	}, this.vG = function() {
		vD() || (a1.vE = 1, vF())
	}
}

function v5() {
	this.iH = function() {
		var vb;
		2 === a1.vE ? (aA.vT(0, 59), a5.lv(2700)) : a1.jq < 7 ? (vb = bV.vc[bW.ki()], vb = bV.ve[vb], aD.vf(L(7, [vb]), 2, 1, 12), aA.vg(0, L(8, [vb]), 40, 0, p.mN, p.mK, -1, !1), a5.lv(2700)) : 8 === a1.jq ? (a1.vM ? aA.vT(a1.vY, 2) : aA.vT(1 -
			a1.e4, 3), a1.vZ.tl(a1.vY), aA.va(a1.vY), a5.lg(a1.vY, 2700, !1, 0)) : 9 === a1.jq ? (aA.vh(), a5.lv(2700)) : (aA.va(a1.vY), a5.lg(a1.vY, 2700, !1, 0))
	}
}

function v0() {
	this.vi = 0, this.v9 = null;
	var vk = this.vj = 0;
	this.vl = 0, this.vL = function() {
		var vp, fs, dv;
		bG.v2.vm || (bG.v2.vm = !0, a1.js) || ((vp = this).v9 = bG.gp.v8(), vp.vi = bX.vq.vr(), a1.jq < 7 && 2 !== a1.vE ? vp.vj = bW.vs() : vp.vj = bG.gp.vB(), 8 === a1.jq && 1 === a1.vE ? (fs = 1 - a1.vY, dv = aU.g9[fs], aU.g9[fs] = 0, az.ff
			.o0(), aU.g9[fs] = dv) : az.ff.o0(), vk = .01 * aU.vw[a1.e4] / 50, vp.vl = 0, a1.jq < 7 ? bG.uy.vL(vp.v9) : 7 === a1.jq || 10 === a1.jq ? b1.ff.gY(a1.e4) && (fs = bG.result.vi * (1 + a1.vz), 2 === a1.vE ? bG.result.vl += fs *
			aU.g9[a1.e4] / bG.result.vj : kk[0] === a1.e4 && (bG.result.vl += fs)) : 8 !== a1.jq || 1 !== a1.vM || 0 === bY.db.data[107].value || 100 <= (dv = bY.db.data[108].value) || (bG.result.vl += .01 * (100 - dv) * 10), this.vo())
	}, this.vo = function() {
		b1.ff.gY(a1.e4) && (.01 <= vk && aA.vg(0, L(9, [vk.toFixed(2)]), 40, 0, p.mc, p.mK, -1, !1), .01 <= bG.result.vl) && aA.vg(0, L(10, [bG.result.vl.toFixed(2)]), 40, 0, p.mc, p.mK, -1, !1)
	}, this.w0 = function() {
		var sZ, w1;
		a1.js || bG.v2.vm || (w1 = aU, sZ = a1.e4, 0 === w1.w2[sZ]) || w1.iQ[sZ] < 1 || 2 * w1.oN[sZ] > 3 * (w1.iP[sZ] + w1.iQ[sZ]) || (w1 = .01 * w1.vw[sZ] / 50) < .01 || aA.vg(0, L(9, [w1.toFixed(2)]), 40, 0, p.mc, p.mK, -1, !1)
	}
}

function v3() {
	this.vm = !1, this.dI = function() {
		this.vm = !1
	}, this.iH = function() {
		7 <= a1.jq || this.vm || bU.jP() % 20 == 11 && b1.ff.ke(90) && (a1.vE = 1, bG.v6.vL(), bG.result.vL())
	}
}

function uz() {
	function w6(w4) {
		for (var hJ = (1 + a1.vz) * bG.result.vi / (1e5 * bG.result.vj), wB = "", z = 0; z < w4.length; z++) {
			var wC = w4[z].wD * hJ;
			wB += "  " + w4[z].name + ": " + b1.w8.wE(1e5 * wC)
		}
		wB.length && (aA.vg(0, L(11), 45, 0, b1.color.mF(225, 240, 255), p.mK, -1, !1), aA.vg(0, wB.trim(), 45, 0, b1.color.mF(225, 240, 255), p.mK, -1, !1), a1.gV || aA.vg(700, L(12) + b9.wF, 736, 0, p.mN, p.mh, -1, !1))
	}
	this.vL = function(v9) {
		var vb = bV.vc[bW.ki()],
			v9 = (a1.vM && b1.ff.gY(a1.e4) && (bG.result.vl += (b1.w8.w9(aU.wA[a1.e4]) ? 2 : 1) * bG.result.vi * (1 + a1.vz) * aU.g9[a1.e4] / bG.result.vj), function(tj) {
				var w4 = [],
					username = aU.wA,
					eK = tj.length;
				loop: for (var z = 0; z < eK; z++) {
					var fr = tj[z],
						wG = b1.w8.w9(username[fr]);
					if (wG) {
						for (var ed = w4.length - 1; 0 <= ed; ed--)
							if (w4[ed].name === wG) {
								w4[ed].wD += aU.g9[fr];
								continue loop
							} w4.push({
							name: wG,
							wD: aU.g9[fr],
							wH: bV.eI[fr]
						})
					}
				}
				return w4.sort(function(ed, ee) {
					return ee.wD - ed.wD
				}), w4
			}(v9));
		v9.length && (2 === a1.vE ? w6(v9) : w6(function(w4, vb) {
			for (var z = w4.length - 1; 0 <= z; z--) bV.vc[w4[z].wH] !== vb && w4.splice(z, 1);
			return w4
		}(v9, vb)))
	}
}

function v7() {
	this.vL = function() {
		2 === a1.vE ? a1.vM = 2 : 8 === a1.jq ? (aQ.vA(0) ? aQ.vA(1) ? a1.vY = +(aU.g9[1] > aU.g9[0]) : a1.vY = 0 : a1.vY = 1, a1.vM = +(a1.vY === a1.e4)) : a1.iS ? a1.vM = +(bV.eI[a1.e4] === bW.wJ()) : (a1.vY = kk[0], a1.vM = +(a1.vY === a1.e4))
	}
}

function cz() {
	this.id = 0, this.eo = 0, this.rL = null, this.rM = null, this.rN = null, this.rT = null, this.n = new wK, this.dI = function() {
		var self, eo;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (eo = Android.getVersion()) < 12 || (self.eo = eo, self.id = 1, self.rM = Android),
			function(self) {
				var eo;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.rN = mwIOSdataX, self.rT = window.webkit.messageHandlers.iosCommandA, eo = self
					.rN.version, self.eo = eo ? Number(eo) : 0)
			}(this),
			function(self) {
				var rL;
				if (0 === self.id) {
					try {
						if (!(rL = window.localStorage)) return;
						rL.setItem("tls7", "1"), rL.removeItem("tls7")
					} catch (error) {
						return
					}
					self.rL = rL
				}
			}(this)
	}
}

function wK() {
	this.wO = function() {
		bY.pg.rh(), bY.pg.ri(), ap.ky.close(0, 3255), 0 === m.id ? m.rL && m.rL.clear() : 1 === m.id ? m.rM.saveString(199, "") : 2 === m.id && m.rT.postMessage("clear")
	}, this.wP = function() {
		2 === m.id ? m.rT.postMessage("showConsentForm") : 1 === m.id ? m.rM.setState(7) : bJ.dd.showCMPScreen()
	}, this.wQ = function() {
		this.setState(14)
	}, this.uM = function() {
		return 1 === bY.db.rG(2)
	}, this.wR = function() {
		bY.db.dc(102, "")
	}, this.setState = function(dt) {
		1 === m.id && 5 <= m.eo && m.rM.setState(dt)
	}, this.o = function() {
		var wS;
		1 === m.id && 7 <= m.eo ? m.rM.setState(5) : ((wS = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = wS.toString())
	}, this.dN = function() {
		1 !== m.id || m.eo < 17 || m.rM.saveString(23, document.documentElement.outerHTML)
	}, this.dh = function() {
		0 === m.id ? bJ.dd.dI() : 1 === m.id ? m.rM.prepareAd("1688441405") : 2 === m.id && (0 === m.eo ? m.rT.postMessage("prepare ad 4500876070") : m.rT.postMessage("loadAds 4500876070"))
	}, this.dw = function(dv) {
		return 0 === m.id ? !!bJ.dd.dr() : 1 === m.id ? 12 <= m.eo && (m.rM.presentAd(dv), !0) : 2 === m.id && (0 === m.eo ? m.rT.postMessage("show ad " + dv) : m.rT.postMessage("showAd"), !0)
	}, this.dS = function() {
		2 === m.id && m.eo < 23 && i.j(4, 1, new k("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + b9.wT + "' target='_blank'>" + b9
			.wT + "</a>", !0, [new l(L(13), function() {
				i.j(0)
			}, p.mw)]))
	}
}

function dE() {
	function wW(d) {
		we(d), i.j(4, 5, new k("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new l(L(13), function() {
				i.wf()
			}), new l("🔄 Reload", function() {
				m.n.o()
			}, p.q)]))
	}

	function wd(title, wB, d) {
		we(d), i.j(4, 5, new k("⚠️ " + title, {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [wB] || wB, !0))
	}

	function we(d) {
		! function(d) {
			var dt = aN.wY();
			0 !== dt && (6 === dt ? ap.ky.wj(d) : 7 === dt ? (ai.wk(), ap.ky.close(ap.ky.wa, 3256)) : 8 === dt && a1.wl(!0))
		}(d), i.ky.wi()
	}
	this.wU = function(wV, d) {
		wV === 1 && __fx.customLobby.isActive() && __fx.customLobby.setActive(false);
		if (8 === i.q7 && 0 === wV)
			if (4211 === d) wW(d);
			else {
				if (4480 === d) return bY.pg.rj(), void i.j(4, 0, new k(L(16), L(17), !0));
				i.j(4, 0, new k(L(14), L(15, [d]), !0))
			}
		else {
			var dt = aN.wY();
			if (6 === dt) {
				if (4211 === d) return void wW(d);
				if (4214 !== d) return void aM.wZ(wV)
			} else {
				if (7 !== dt) return 8 === dt ? void(wV !== ap.ky.wb || a1.js || 1 !== a1.vH || a1.gV || aA.wc(L(15, [d]))) : void 0;
				if (wV !== ap.ky.wa) return
			}
			wd("Error", d, d)
		}
	}, this.wg = function(d) {
		8 === aN.wY() ? a1.js || 1 !== a1.vH || aA.wc(L(15, [d])) : wd("Error", d, d)
	}, this.h = function() {
		we(3268)
	}
}

function co() {
	var wm, wn, wo = -15e3,
		wp = !1;

	function gZ(d) {
		x9() || (wp = !0, xA(d, 1), ap.ky.xB(ap.ky.wb), xC(Math.floor(am.p7 * d.clientX), Math.floor(am.p7 * d.clientY)))
	}

	function wy(d) {
		wo = bU.du, xA(d, 1), ap.ky.xB(ap.ky.wb), 0 < d.touches.length && (wm = Math.floor(am.p7 * d.touches[0].clientX), wn = Math.floor(am.p7 * d.touches[0].clientY), ag.wy(d) || xC(wm, wn))
	}

	function xC(eR, eT) {
		i.gZ(eR, eT), 0 === a1.vH ? aN.gZ(eR, eT) : b2.xD(eR, eT) || bT.gZ(eR, eT) || aK.gZ(eR, eT) || a8.xE(eR, eT) || aC.gZ(eR, eT) || 0 <= a9.gZ(eR, eT) || b8.xF(eR, eT) || ak.gZ(eR, eT) || a8.xG(eR, eT)
	}

	function wu(d) {
		x9() || (wp = !0, xA(d, 1), xH(Math.floor(am.p7 * d.clientX), Math.floor(am.p7 * d.clientY)))
	}

	function wz(d) {
		wo = bU.du, xA(d, 1), 0 < d.touches.length && (wm = Math.floor(am.p7 * d.touches[0].clientX), wn = Math.floor(am.p7 * d.touches[0].clientY), ag.wz(d) || xH(wm, wn))
	}

	function xH(eR, eT) {
		i.wu(eR, eT), 0 === a1.vH ? aN.wu(eR, eT) : (bI.gS(eR, eT), bT.wu(eR, eT) || (a9.wu(eR, eT), a8.tw() ? a8.wu(eR, eT) : aE.ga ? aE.wu(eR) && (bU.dQ = !0) : (aI.wu(eR, eT), aF.lr && aF.wu(eR, eT) && (bU.dQ = !0))))
	}

	function ww(d) {
		x9() || (xA(d, 1), xI(), 0 === a1.vH ? (aN.click(-1024, -1024), aG.xJ()) : (aI.xK(-1024, -1024), a9.wu(-1024, -1024), aE.xL(), aF.lr = !1))
	}

	function wv(d) {
		x9() || (xA(d, 1), xM(Math.floor(am.p7 * d.clientX), Math.floor(am.p7 * d.clientY), 2 === d.button), b8.ws && (b8.ws = !1, d.preventDefault()))
	}

	function click(d) {
		x9() || xA(d, 1)
	}

	function x0(d) {
		wo = bU.du, xA(d, 1), d && d.touches && 0 < d.touches.length && 0 !== a1.vH ? aF.lr = !1 : ag.xN() || (xM(wm, wn, !1), b8.ws && (b8.ws = !1, d.preventDefault()))
	}

	function x1(d) {
		wo = bU.du, xA(d, 1), xM(wm, wn, !1), b8.ws && (b8.ws = !1, d.preventDefault())
	}

	function x2(d) {
		aw.x2(d)
	}

	function x3(d) {
		aw.x3(d)
	}

	function x4(d) {
		x9() || xA(d, 0)
	}

	function xM(eR, eT, xO) {
		xI(), 0 === a1.vH ? aN.click(eR, eT) : (aI.xK(eR, eT), bT.xK(), aE.xL(), aF.lr = !1, a8.click(eR, eT, xO) ? bU.dQ = !0 : a9.wv(eR, eT))
	}

	function xI() {
		i.xI()
	}

	function wx(d) {
		var eR, eT, deltaY;
		x9() || (xA(d, 1), ap.ky.xB(ap.ky.wb), eR = Math.floor(am.p7 * d.clientX), eT = Math.floor(am.p7 * d.clientY), deltaY = d.deltaY, 1 === d.deltaMode && (deltaY *= 16), i.wx(eR, eT, deltaY), 0 === a1.vH ? aN.wx(eR, eT, deltaY) : aI.wx(eR, eT,
			deltaY) || (aE.xP(eR, eT) ? aE.wx(deltaY) && (bU.dQ = !0) : aF.wx(eR, eT, deltaY)))
	}

	function x5(d) {
		xA(d, 0)
	}

	function xA(d, id) {
		0 === id && i.tw() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aN.wY() && d.preventDefault()
	}

	function x6(d) {
		if (__fx.keybindHandler(d.key)) return;
		x9() || (d = d.code) && d.length && (bM.ef(d, 18) ? ae.xR(3) : bM.ef(d, 22) ? ae.xR(0) : bM.ef(d, 20) ? ae.xR(1) : bM.ef(d, 24) ? ae.xR(2) : bM.ef(d, 10) ? aE.xS(.9375) : bM.ef(d, 8) ? aE.xS(16 / 15) : bM.ef(d, 6) ? aE.xS(7 / 8) : bM.ef(d,
			4) ? aE.xS(8 / 7) : bM.ef(d, 14) ? 0 !== a1.vH && aF.wx(Math.floor(am.t / 2), Math.floor(am.iw / 2), -200) : bM.ef(d, 16) ? 0 !== a1.vH && aF.wx(Math.floor(am.t / 2), Math.floor(am.iw / 2), 200) : bM.ef(d, 0) ? a1.vH && bI.gT(!1) : bM
			.ef(d, 2) && a1.vH && bI.gT(!0))
	}

	function x7(d) {
		var code;
		x9() || bU.du < 400 || (code = d.code) && code.length && ("Enter" === code && i.xT(1) || (8 !== aN.wY() && aN.xT(d) ? bU.dQ = !0 : "Escape" === code ? b8.ep() : bM.ef(code, 18) ? ae.xU(3) : bM.ef(code, 22) ? ae.xU(0) : bM.ef(code, 20) ? ae
			.xU(1) : bM.ef(code, 24) ? ae.xU(2) : bM.ef(code, 12) ? b2.xV(!a1.lp) : "Space" === code && a1.vH && (a9.gW && a9.xW(), a1.gV) && b2.xX(!1)))
	}

	function x8() {
		"hidden" === document.visibilityState ? 1 === a1.vH && (a1.gV ? b2.xY() : !a1.js || a9.gW || a1.gh || a9.xW()) : bU.dQ = !0
	}

	function x9() {
		return wo + 15e3 > bU.du
	}

	function resize() {
		am.xa()
	}
	this.wq = 0, this.wr = "", this.ws = !1, this.dI = function() {
		wt.addEventListener("mousedown", gZ, {
			passive: !1
		}), wt.addEventListener("mousemove", wu, {
			passive: !1
		}), wt.addEventListener("mouseup", wv, {
			passive: !1
		}), wt.addEventListener("click", click, {
			passive: !1
		}), wt.addEventListener("mouseleave", ww, {
			passive: !1
		}), wt.addEventListener("wheel", wx, {
			passive: !1
		}), wt.addEventListener("touchstart", wy, {
			passive: !1
		}), wt.addEventListener("touchmove", wz, {
			passive: !1
		}), wt.addEventListener("touchend", x0, {
			passive: !1
		}), wt.addEventListener("touchcancel", x1, {
			passive: !1
		}), wt.addEventListener("dragover", x2), wt.addEventListener("drop", x3), wt.addEventListener("dblclick", x4), document.addEventListener("contextmenu", x5), document.addEventListener("keydown", x6), document.addEventListener("keyup",
			x7), document.addEventListener("visibilitychange", x8), window.addEventListener("resize", resize)
	}, this.xF = function(eR, eT) {
		return !!b2.gZ(eR, eT) || !!(aI.gZ(eR, eT) || aF.gZ(eR, eT) || aE.gZ(eR, eT) || aA.gZ(eR, eT))
	}, this.xZ = x9, this.pS = function() {
		return !wp || 0 < wo
	}, this.ep = function() {
		if (!i.tw()) return 8 === aN.wY() ? a1.lp ? void b2.xV(!1) : bT.tw ? void bT.xW() : void a9.xW() : void(7 === aN.wY() ? ai.xb() : 6 === aN.wY() ? aM.xc() : 2 === aN.wY() && aO.xd());
		i.xT(2)
	}
}

function bi() {
	this.p1 = new xe, this.pB = new xf, this.ff = new xg, this.w8 = new xh, this.tc = new xi, this.xj = new xk, this.h4 = new xl, this.color = new xm, this.xn = new xo, this.dI = function() {
		this.p1.rg()
	}
}

function xf() {
	this.sX = function(f0) {
		f0.fill(0)
	}, this.xp = function(f0) {
		for (var eK = f0.length, z = 0; z < eK; z++) f0[z] = []
	}, this.xq = function(hE, xr) {
		for (var hF = bD.ev, z = 0; z < 3; z++) hF[z] = xr * hE[z];
		return hF
	}, this.xs = function(hE, hF, xt) {
		for (var hJ = 0, z = 0; z < 3; z++) hJ += Math.abs(hE[z] - hF[z]);
		return xt <= hJ
	}, this.xu = function(hE, xv) {
		for (var z = 0; z < 3; z++) hE[z] = bA.oZ(hE[z] + xv, 0, 255);
		return hE
	}, this.xw = function(f0, qP, qQ) {
		var z, xx = 0;
		for (qQ = qQ || f0.length - 1, z = qP = qP || 0; z <= qQ; z++) xx += f0[z];
		return xx
	}, this.xy = function(f0, xz) {
		for (var z, y0, eK = f0.length, y1 = [], ed = eK - 1; 0 <= ed; ed--) {
			for (z = y0 = 0; z < eK; z++) xz(f0[z]) < xz(f0[y0]) && (y0 = z);
			eK--, y1.push(f0[y0]), f0[y0] = f0[eK], f0.pop()
		}
		return y1
	}, this.min = function(f0) {
		var z, en, eK = f0.length;
		if (0 === eK) return 0;
		for (en = f0[0], z = 1; z < eK; z++) en = Math.min(en, f0[z]);
		return en
	}, this.max = function(f0) {
		var z, en, eK = f0.length;
		if (0 === eK) return 0;
		for (en = f0[0], z = 1; z < eK; z++) en = Math.max(en, f0[z]);
		return en
	}, this.y2 = function(y3, y4, min) {
		for (var eK = y4[0], z = eK - 1; 0 <= z; z--) y3[z] < min && (y3[z] = y3[--eK]);
		y4[0] = eK
	}, this.y5 = function(f0, eK, value) {
		for (var z = 0; z < eK; z++) f0[z] -= value
	}, this.y6 = function(f0) {
		for (var eK = f0.length, z = 0; z < eK; z++)
			if ("string" != typeof f0[z]) return !1;
		return !0
	}
}

function xl() {
	this.uA = function(y7, o2, y8) {
		var gy = y7.height,
			y9 = b1.p1.sN(gy, gy),
			h5 = b1.p1.getContext(y9);
		return function(t, h5, y8) {
			h5.fillStyle = y8, h5.beginPath(), h5.arc(t / 2, t / 2, .47 * t, 0, 2 * Math.PI), h5.fill()
		}(gy, h5, y8), h5.drawImage(y7, -o2 * gy, 0), y9
	}, this.yB = function(yC) {
		var h5, h1, gy = yC.height;
		return yC.width === gy && (h1 = (h5 = b1.p1.getContext(yC, !0)).getImageData(0, 0, gy, gy), b1.xj.yD(h1.data, gy, gy, .9), h5.putImageData(h1, 0, 0)), yC
	}
}

function xm() {
	this.yE = function(en) {
		return [en >> 12 & 63, en >> 6 & 63, 63 & en]
	}, this.yF = function(en) {
		for (var f0 = this.yE(en), z = 0; z < 3; z++) f0[z] = ~~(4.05 * f0[z]);
		return f0
	}, this.yG = function(en) {
		en = this.yF(en);
		return b1.color.mF(en[0], en[1], en[2])
	}, this.yH = function(f0) {
		for (var z = 0; z < 3; z++) f0[z] = ~~(f0[z] / 4.04);
		return (f0[0] << 12) + (f0[1] << 6) + f0[2]
	}, this.mF = function(h7, qT, ee) {
		return "rgb(" + h7 + "," + qT + "," + ee + ")"
	}, this.mH = function(h7, qT, ee, ed) {
		return "rgba(" + h7 + "," + qT + "," + ee + "," + ed.toFixed(3) + ")"
	}, this.pU = function(ef) {
		for (var f0 = ef.split("(")[1].split(","), eu = (f0.length, bD.eu), z = 0; z < 3; z++) eu[z] = parseInt(f0[z]);
		return eu
	}, this.pN = function(yI, eN) {
		for (var f0 = yI.slice(yI.indexOf("(") + 1, yI.indexOf(")")).split(","), eu = bD.eu, z = 0; z < 3; z++) eu[z] = bA.oZ(parseInt(f0[z].trim(), 10) + eN, 0, 255);
		return 3 === f0.length ? this.mF(eu[0], eu[1], eu[2]) : this.mH(eu[0], eu[1], eu[2], parseFloat(f0[3].trim()))
	}, this.yJ = function(f0) {
		for (var oj = "#", z = 0; z < 3; z++) {
			var h7 = f0[z].toString(16);
			oj += 1 === h7.length ? "0" + h7 : h7
		}
		return oj
	}, this.yK = function(oj) {
		var h7, qT;
		return oj.length < 7 ? p.mE : (h7 = parseInt(oj.slice(1, 3), 16), qT = parseInt(oj.slice(3, 5), 16), oj = parseInt(oj.slice(5, 7), 16), this.mF(h7, qT, oj))
	}
}

function xi() {
	this.yL = function(oj, font, maxWidth) {
		if (font && (qw.font = font), qw.measureText(oj).width <= maxWidth) return oj;
		for (var z = oj.length - 1; 1 <= z; z--)
			if (oj = oj.substring(0, z), qw.measureText(oj + "...").width <= maxWidth) return oj + "...";
		return "..."
	}
}

function xo() {
	var yN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.yO = function(du) {
		var yQ, oj = new Date(du.getTime() - 6e4 * du.getTimezoneOffset()).toUTCString();
		return oj.length < 12 || (oj = oj.substring(5, oj.length), 0 === (du = du.getTimezoneOffset())) ? oj : (yQ = (du < 0 ? "+" : "-") + bA.em(Math.abs(du), 60), 0 == (du = Math.abs(du) % 60) ? oj + yQ : oj + yQ + ":" + (du < 10 ? "0" : "") +
			du)
	}, this.yR = function(du) {
		var oj = du.toUTCString();
		return oj.length < 12 ? oj : function(du) {
			return yN[du.getUTCDay()]
		}(du) + ", " + oj.substring(5, oj.length - 4)
	}
}

function xe() {
	var yT = null;
	this.uS = 0, this.rg = function() {
		var en = bY.db.data[5].value;
		yT = "px " + en, "Trebuchet MS" !== en && (yT += ", Trebuchet MS"), this.uS = gx(32, 32, ["a", "b", "m"], 200, yT)
	}, this.sN = function(t, iw) {
		var ef = document.createElement("canvas");
		return ef.width = t, ef.height = iw, ef
	}, this.getContext = function(h4, alpha) {
		return h4.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(tc, t, iw) {
		return tc.getImageData(0, 0, t, iw)
	}, this.qD = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + yT : 1 === type ? "bold " + size + yT : 2 === type ? "lighter " + size + yT : 3 === type ? "italic " + size + yT : 4 === type ? "oblique " + size + yT : 5 === type ? "small-caps " +
			size + yT : "small-caps bold " + size + yT
	}, this.textAlign = function(h5, id) {
		h5.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(h5, id) {
		h5.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pD = function(d, code, color) {
		color = this.pC(bR.yU) + " solid " + (color || p.mN);
		5 === (code = code || 5) ? d.style.border = color : 4 === code ? d.style.borderLeft = color : 2 === code ? d.style.borderBottom = color : 6 === code ? d.style.borderRight = color : d.style.borderTop = color
	}, this.qV = function(d, eR, eT, t, iw) {
		d = d.style;
		d.left = this.qW(eR), d.top = this.qW(eT), d.width = this.qW(t), d.height = this.qW(iw)
	}, this.p2 = function(en) {
		return 1 + en * m.n.uM()
	}, this.pk = function(ly, fs) {
		return ly * this.p2(void 0 === fs ? .5 : fs) * am.p3 / am.p7
	}, this.qU = function(ly, fs) {
		return ly * this.p2(void 0 === fs ? .5 : fs) * am.p3
	}, this.qE = function(ly, fs, yV) {
		return this.p2(fs) * Math.min(ly * am.p3, yV * am.t) / am.p7
	}, this.pC = function(en) {
		return en.toFixed(1) + "px"
	}, this.qW = function(en) {
		return this.yX(en).toFixed(1) + "px"
	}, this.yX = function(en) {
		return en / am.p7
	}, this.yY = function(pz, yZ) {
		for (var oj = "<ul>", eK = pz.length, z = 0; z < eK; z++) oj += "<li>" + pz[z] + ": <a href='" + yZ[z] + "' target='_blank'>" + yZ[z] + "</a></li>";
		return oj += "</ul>"
	}, this.ya = function(yb) {
		return "<a href='" + yb + "' target='_blank'>" + yb + "</a>"
	}, this.yc = function(d) {
		navigator.clipboard && navigator.clipboard.writeText(d.value)
	}, this.yd = function(d) {
		var dv = d.textContent;
		b1.w8.ye(dv, "✔") || (1 === dv.length ? d.textContent = "✔" : d.textContent = dv + " ✔", setTimeout(function() {
			d.textContent = dv
		}, 500))
	}, this.measureText = function(oj) {
		return qw.measureText(oj).width
	}
}

function xg() {
	this.gX = function(dt) {
		return 0 === dt ? 1 === a1.vH && a1.gh : 1 === dt ? 1 === a1.vH && !a1.gh : 2 === a1.vH
	}, this.gY = function(player) {
		return 0 !== aU.lK[player] && 2 !== aU.yf[player]
	}, this.yg = function(player) {
		return player === a1.e4 && 2 !== aU.yf[player]
	}, this.yh = function(player) {
		return player === a1.e4
	}, this.iq = function(player) {
		return player >= a1.jS || 2 === aU.yf[player]
	}, this.kI = function(player) {
		return 0 !== aU.lK[player]
	}, this.oK = function(yi, yj) {
		return yi !== yj
	}, this.fi = function(player, en) {
		var min;
		return en = this.yk(player, en), aU.gN[player] += en, aU.yl[player] && (min = Math.min(aU.yl[player], aU.gN[player]), aU.yl[player] -= min, aU.gN[player] -= min), en
	}, this.yk = function(player, en) {
		var ym = aU.gN[player];
		return en = Math.min(en, aU.g9[player] * a1.jZ - ym), en = Math.min(en, a1.yn - ym), Math.max(en, 0)
	}, this.oL = function(player, hj, yo, yp) {
		var ym = aU.gN[player],
			hj = bA.em(ym * (hj + 1), 1024),
			yo = bA.em(yo * ym, 1024),
			hj = Math.min(hj, ym - yo);
		return 10 === a1.jq && (hj = au.yr(player, hj)), bD.es[0] = hj, bD.es[1] = yo, yp <= hj
	}, this.nm = function(player, nT, nS) {
		var player = aU.gN[player],
			yq = bA.em(64 * player, 1024),
			player = (nT = Math.min(nT, player - yq), this.yt(nT));
		return yq += player, nT = this.yk(nS, nT -= player), bD.es[0] = nT, bD.es[1] = yq, 1 <= nT
	}, this.no = function(nT, nS) {
		var ys = this.yt(nT);
		return nT = this.yk(nS, nT -= ys), bD.es[0] = nT, bD.es[1] = ys, 1 <= nT
	}, this.hi = function(player, yu) {
		return bA.em(aU.gN[player] * (yu + 1), 1024)
	}, this.yt = function(yv) {
		return bA.em(Math.max(2142 - bU.jP(), 0) * yv, 2142)
	}, this.oX = function(player, yo) {
		yo = bA.em(yo * aU.gN[player], 1024);
		bD.es[1] = yo, aU.gN[player] -= yo
	}, this.fg = function(player, yw) {
		var f3, f5, ee = aU.gN[player];
		return yw <= ee ? aU.gN[player] -= yw : (aU.gN[player] = 0, f5 = aU.yl[player] + (f3 = 5 * ((ee = yw - ee) >> 2)), bS.fj(player, f3 - ee, 12), f5 <= a1.yx ? aU.yl[player] = f5 : (aU.yl[player] = a1.yx, bS.fj(player, f5 - a1.yx, 18))), yw
	}, this.kW = function(player, hj) {
		var gN = aU.gN,
			ym = gN[player],
			hj = bA.em(ym * (hj + 1), 1024),
			yq = Math.max(bA.em(ym, 10), 1e3);
		return (hj = Math.min(hj, ym - yq)) < 0 ? (gN[player] = 0, yq = Math.min(1e3, ym + a1.yx - aU.yl[player]), bD.es[1] = yq, aU.yl[player] += yq - ym, 0) : (bD.es[1] = yq, 10 === a1.jq && (hj = au.yr(player, hj)), gN[player] -= yq + hj, hj)
	}, this.oO = function(player) {
		aU.gN[player] -= bD.es[0] + bD.es[1]
	}, this.oM = function(player, iY) {
		return (iY = Math.min(iY, a1.eH)) < a1.eH && 0 === aU.lK[iY] && (iY = a1.eH), (bD.eG[0] = iY) === a1.eH || eD(player, iY)
	}, this.oQ = function(player, nS) {
		return 0 !== aU.lK[nS] && !eD(player, nS)
	}, this.yy = function(player, yz) {
		for (var fr, eK = aZ.jT, vx = 0, z0 = kk, z = 0; z < eK; z++)
			if (fr = z0[z], aQ.vA(fr)) {
				if (player === fr) return !0;
				if (++vx > yz) return !1
			} return !1
	}, this.ke = function(fr) {
		var z1 = a1.iS ? bW.vs() : aU.g9[kk[0]];
		return z1 >= bA.em(fr * a1.jC, 100)
	}
}

function xk() {
	this.z2 = function(h4, z3, z4) {
		var t = h4.width,
			iw = h4.height,
			ef = b1.p1.sN(t, iw),
			h5 = b1.p1.getContext(ef, !0),
			h4 = (h5.drawImage(h4, 0, 0), h5.getImageData(0, 0, t, iw));
		return z3(h4.data, t, iw, z4), h5.putImageData(h4, 0, 0), ef
	}, this.z5 = function(sY, t, iw) {
		for (var eR = t - 1; 0 <= eR; eR--)
			for (var eT = iw - 1; 0 <= eT; eT--) {
				var z = 4 * (eR + eT * t);
				sY[3 + z] = sY[z], sY[z] = sY[1 + z] = sY[2 + z] = 255
			}
	}, this.z6 = function(sY, t, iw) {
		for (var eR = t - 1; 0 <= eR; eR--)
			for (var eT = iw - 1; 0 <= eT; eT--) {
				var z = 4 * (eR + eT * t);
				sY[1 + z] > sY[2 + z] + 10 && (sY[3 + z] = sY[z], sY[1 + z] = sY[2 + z])
			}
	}, this.z7 = function(sY, t, iw, z4) {
		for (var gap = Math.floor(Math.min(t, iw) * z4), eR = 0; eR < t; eR++)
			for (var z, eT = 0; eT < iw; eT++)(eR < gap || eT < gap || t - gap <= eR || iw - gap <= eT) && (sY[3 + (z = 4 * (eR + eT * t))] = 255 - 255 * (sY[1 + z] - sY[z]) / (255 - sY[z]))
	}, this.z8 = function(sY, t, iw, z4) {
		for (var eR = t - 1; 0 <= eR; eR--)
			for (var eT = iw - 1; 0 <= eT; eT--) {
				var z = 4 * (eR + eT * t);
				sY[z] = z4[0], sY[1 + z] = z4[1], sY[2 + z] = z4[2]
			}
	}, this.z9 = function(sY, t, iw, z4) {
		for (var gap = Math.floor(t * z4), eR = 0; eR < t; eR++)
			for (var z, eT = 0; eT < iw; eT++)(eR < gap || eT < gap || t - gap <= eR || iw - gap <= eT) && (sY[z = 4 * (eR + eT * t)] = sY[1 + z] = sY[2 + z] = 0)
	}, this.zA = function(sY, t, iw) {
		for (var eT, z, eR = t - 1; 0 <= eR; eR--)
			for (eT = iw - 1; 0 <= eT; eT--) 200 < sY[1 + (z = 4 * (eR + eT * t))] && sY[1 + z] - 20 > sY[z] && sY[1 + z] - 20 > sY[2 + z] ? sY[z] + sY[2 + z] < 40 ? sY[3 + z] = 0 : (sY[3 + z] = sY[z], sY[z] = 255, sY[1 + z] = 255, sY[2 + z] =
				255) : sY[z] < 50 && sY[1 + z] < 50 && sY[2 + z] < 50 && (sY[z] + sY[1 + z] + sY[2 + z] < 50 ? sY[3 + z] = 180 : sY[3 + z] = 180 + Math.floor(75 * (sY[z] + sY[1 + z] + sY[2 + z] - 50) / 100))
	}, this.zB = function(sY, t, iw) {
		for (var eT, z, eR = t - 1; 0 <= eR; eR--)
			for (eT = iw - 1; 0 <= eT; eT--) sY[1 + (z = 4 * (eR + eT * t))] > sY[z] + 20 && sY[1 + z] > sY[2 + z] + 20 && sY[z] + sY[2] < 40 && (sY[3 + z] = 255 - sY[1 + z], sY[z] = sY[1 + z] = sY[2 + z] = sY[z])
	}, this.yD = function(sY, t, iw, z4) {
		for (var h7 = t >> 1, eR = 0; eR < t; eR++)
			for (var eT = 0; eT < iw; eT++) Math.sqrt((eR - h7) * (eR - h7) + (eT - h7) * (eT - h7)) > z4 * h7 && (sY[4 * (eR + eT * t) + 3] = 0)
	}
}

function xh() {
	this.zC = function(en) {
		var z, zD, zE, zF, zG;
		if (en < 0) return "-" + this.zC(Math.abs(en));
		if (en < 1e3) return en.toString();
		for (zD = Math.floor(Math.log(en + .5) / Math.log(10)) + 1, zE = Math.floor((zD - 1) / 3), zG = (zF = en.toString()).substring(zD - 3, zD), z = 1; z < zE; z++) zG = zF.substring(zD - 3 * (z + 1), zD - 3 * z) + " " + zG;
		return zF.substring(0, zD - 3 * zE) + " " + zG
	}, this.zH = function(fr, zD) {
		return fr.toFixed(zD) + "%"
	}, this.wE = function(en, zI) {
		return en.toFixed(bA.oZ(Math.floor((void 0 === zI ? 3 : zI) - Math.log10(Math.max(en, 1))), 0, 8))
	}, this.zJ = function(en, ly, zD) {
		return (en * ly).toFixed(zD)
	}, this.w9 = function(username) {
		var eO, e9 = username.indexOf("[");
		return !(e9 < 0) && 1 < (eO = username.indexOf("]")) - e9 && eO - e9 <= 8 ? username.substring(e9 + 1, eO).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.w9;
	this.zK = function(oj) {
		for (var ed = Math.floor(.5 * oj.length + .5), m5 = Math.floor(.5 * (ed - 1)), z = 0; z < m5; z++)
			for (var ee = -1; ee < 2; ee += 2) {
				var ef = ed + ee * z;
				if (" " === oj[ef]) return [this.zL(oj.substring(0, ef)), this.zM(oj.substring(ef))]
			}
		return [oj.substring(0, ed), oj.substring(ed)]
	}, this.zM = function(oj) {
		for (var eK = oj.length, z = 0; z < eK; z++)
			if (" " !== oj[z]) return oj.substring(z);
		return oj
	}, this.zL = function(oj) {
		for (var z = oj.length - 1; 0 <= z; z--)
			if (" " !== oj[z]) return oj.substring(0, z + 1);
		return oj
	}, this.zN = function(oj, zO) {
		return oj.split("(")[0] + "(🧈 " + zO.toFixed(2) + ")"
	}, this.startsWith = function(oj, zP) {
		return oj.substring(0, zP.length) === zP
	}, this.ye = function(oj, zP) {
		var eK = oj.length;
		return oj.substring(eK - zP.length, eK) === zP
	}
}

function zQ() {
	this.iV = function(player, e6) {
		a6.tO(player, bB.eS(e6), bB.eU(e6)) && (bU.dQ = !0), a1.js && this.iH()
	}, this.iH = function() {
		a1.gh = !1;
		for (var z = 0; z < a1.jS; z++) 0 !== aU.lK[z] && 0 === aU.g9[z] && a6.tU(z);
		0 !== aU.lK[a1.e4] ? (bS.lG[7] = aU.g9[a1.e4], bS.lG[8] = aU.gN[a1.e4], aE.zR(), aJ.zS(), a1.gV || a5.lf(aU.hy[a1.e4] - 5, aU.i0[a1.e4] - 5, aU.hz[a1.e4] + 5, aU.i1[a1.e4] + 5), ah.dI()) : aK.show(!1, !1, !1, !0), aA.zT(18), aT.zU(), aT
			.l6(!0), bE.ky.zV(), a8.qS(), a1.oJ = null, bQ.zW = !0, bQ.zX(), a1.js && m.n.setState(1)
	}
}

function bk() {
	this.eH = 512, this.yn = 15e8, this.zY = 1e9, this.yx = 5e4, this.tH = 512, this.fd = 2, this.e4 = 0, this.jS = 0, this.vK = 0, this.jp = 0, this.vJ = 0, this.t1 = 512, this.jZ = 150, this.js = !0, this.gV = !1, this.vH = 0, this.jC = 0, this
		.lp = !1, this.gh = !1, this.zZ = !1, this.iS = !1, this.za = 0, this.jq = 0, this.vz = !1, this.oJ = null, this.vZ = null, this.zb = 30, this.vE = 0, this.vM = 0, this.vY = 0, this.zc = function(zd, ze, tj, zf, zg, zh) {
			this.lp = !1, this.gV = zh, this.jq = zf, this.vz = zg, this.iS = this.jq < 7 || 9 === this.jq, this.vK = this.jS = tj.length, this.js = 1 === this.vK, this.jq = 10 === this.jq && this.js ? 7 : this.jq, this.jq = 8 === this.jq && 2 !==
				this.jS ? 7 : this.jq, this.za = 9 === this.jq ? 2 : this.jq + 2, this.zb = this.jS <= 2 ? 30 : this.jS <= 50 ? 40 : 50, ax.jm && !ax.jn.zi ? this.zZ = this.gh = !1 : this.zZ = this.gh = this.iS || this.jS < 100, this.oJ = this.gh ?
				new zQ : null, this.js ? this.t1 = aO.zj() : this.t1 = this.eH, this.jp = this.t1 - this.jS, this.vJ = 0, this.e4 = ze, this.vE = 0, this.vM = 0, this.vY = 0, an.zk(zd), ao.dI(), aU.dI(tj), az.nL.o5 = [], bV.dI(tj), this.vH = 1, bS
				.dI(), zl(), aQ.dJ(), ac.zm(), bQ.dI(), aQ.dI(tj), af.dI(), bB.dI(), bC.dI(), ab.dI(), bG.dI(), bK.zn(), a2.dI(), aW.v(), a6.dI(), aZ.zo(), b0.dI(zd, tj, zf, zg), bW.dI(), bE.dI(), bT.dI(), zp.putImageData(zq, 0, 0), aI.dI(), aF.dI(),
				aE.dI(), b2.dI(), ak.dI(), aH.dI(), aJ.dI(), a9.dI(), aD.dI(), aA.dI(), aC.dI(), a8.dI(), aK.dI(), a3.dI(), a4.dI(), fL(), aR.dI(), aT.dI(), au.dI(), av.dI(), aq.dI(), 8 === this.jq ? (this.vZ = new ti, this.vZ.dI(tj)) : this.vZ =
				null, bU.zn(), a5.le(), 0 === aU.lK[a1.e4] && aK.show(!1, !0), aT.l6(!0), ah.dI(), bU.dQ = !0, this.gV || this.js && this.gh || m.n.setState(1)
		}, this.wl = function(zs) {
			ap.ky.zt(), this.vH = 0, bU.zu(), m.n.setState(0), zs || bJ.df.show(), aN.setState(0), i.j(5, 5)
		}, this.zv = function() {
			return this.gV ? a9.gW || !b2.zw : this.js && (a9.gW || this.gh)
		}, this.zx = function() {
			return 1 === this.vH && !this.gh
		}
}

function dD() {
	this.uP = 0, this.gap = 0, this.yU = 0, this.p9 = 0, this.dI = function() {
		this.resize()
	}, this.resize = function() {
		this.uP = .0022 * b1.p1.p2(.5) * am.p3, this.yU = this.uP / am.p7, this.gap = Math.max(Math.floor((m.n.uM() ? .0114 : .01296) * am.p3), 2), this.p9 = this.gap / am.p7
	}
}

function dC() {
	this.zy = function() {
		return m.n.uM() ? 2 : 1
	}
}

function bu() {
	var pX, eR, eT, zz, a00, a01, du, player, a02, gap, zoom, nx, a03;

	function a0D(player) {
		for (var z = nx.length - 1; 0 <= z; z--)
			if (nx[z] === player) return 1
	}

	function a0B(a08) {
		var z, eK;
		if (-1 !== a08)
			for (eK = pX.length, z = 0; z < eK; z++)
				if (pX[z].tw && pX[z].eR + 1 === a08 % 4 && pX[z].eT + 1 === a08 >> 2) return z;
		return -1
	}

	function a09(kZ, ka) {
		var qT = gap / 2;
		return kZ < eR - zz - 3 * qT || eR + 3 * zz + 5 * qT < kZ || ka < eT - zz - 3 * qT || eT + 2 * zz + 3 * qT < ka ? -1 : 4 * (ka < eT - qT ? 0 : ka < eT + zz + qT ? 1 : 2) + (kZ < eR - qT ? 0 : kZ < eR + zz + qT ? 1 : kZ < eR + 2 * zz + 3 *
			qT ? 2 : 3)
	}
	this.a04 = function() {
		var z, ee, a07 = [p.mj, p.mv, p.mL, p.nA, p.n3];
		for (pX = new Array(9), z = 0; z < 9; z++) pX[z] = {
			id: z,
			tw: !1,
			kF: 0,
			h4: [],
			eR: 0,
			eT: 0
		};
		for (pX[0].colors = [0, 1, 2, 3], pX[0].eR = 0, pX[0].eT = 0, pX[1].colors = [0, 1, 4], pX[1].eR = 1, pX[1].eT = 0, pX[2].colors = [0, 2], pX[2].eR = -1, pX[2].eT = 0, pX[3].colors = [0], pX[3].eR = 0, pX[3].eT = 0, pX[4].colors = [0, 2],
			pX[4].eR = 1, pX[4].eT = 1, pX[5].colors = [3], pX[5].eR = 0, pX[5].eT = -1, pX[6].id = 20, pX[6].colors = [0], pX[6].eR = 1, pX[6].eT = -1, pX[7].id = 21, pX[7].colors = [0], pX[7].eR = 0, pX[7].eT = 1, pX[8].id = 16, pX[8]
			.colors = [0], pX[8].eR = 0, pX[8].eT = 0, z = 0; z < 9; z++)
			for (ee = 0; ee < pX[z].colors.length; ee++) pX[z].h4.push(function(id, y8) {
				if (id < 20) return b1.h4.uA(aP.get(3), id, y8);
				var y8 = aP.get(3).height,
					y9 = b1.p1.sN(y8, y8),
					h5 = b1.p1.getContext(y9);
				20 === id ? h5.drawImage(aP.get(18), 0, 0) : 21 === id && aX.sY.uQ(aX.tt.uE + aX.tt.uW, h5, 0, 0, y8);
				return y9
			}(pX[z].id, a07[pX[z].colors[ee]]))
	}, this.a06 = function() {
		return pX
	}, this.dI = function() {
		nx = [], eR = eT = du = 0, a00 = a01 = -1e3, this.resize()
	}, this.resize = function() {
		zz = Math.floor((m.n.uM() ? .075 : .0468) * am.p3), zoom = zz / aP.get(3).height, gap = Math.floor(zz / 3)
	}, this.xE = function(kZ, ka) {
		return !!this.tw() && (bU.dQ = !0, !!aX.sY.gZ(kZ, ka, player) || (kZ = function(kZ, ka) {
			a01 = a00 = -1e3;
			var a0A = a0B(a09(kZ, ka));
			if (-1 === a0A) return 0;
			if (1 !== pX[a0A].colors[pX[a0A].kF])
				if (5 === a0A) {
					if (! function() {
							var dv = performance.now();
							a03 + 4e3 < dv && (nx = []);
							a03 = dv
						}(), a0D(player)) return 1;
					nx.push(player), 16 < nx.length && nx.shift()
				} else if (6 === a0A) {
				for (var z = nx.length - 1; 0 <= z; z--) 0 === aU.lK[nx[z]] && nx.splice(z, 1);
				0 < nx.length && (av.a0E(1, nx, !0) && az.ff.nw(nx, player), nx = [])
			} else if (2 === a0A) az.gi.nR(aE.gn(), player);
			else if (3 === a0A) a1.gh && az.gi.gj(a02);
			else if (0 === a0A)
				if (0 === pX[0].kF) {
					if (a1.zZ && aJ.a0F() < 350) return 1;
					az.gi.gt(aE.gn(), player)
				} else aq.gv(player, aE.gn());
			else if (1 === a0A) bK.a0G(), az.gi.gr(aE.gn(), a02);
			else {
				if (7 === a0A) return bK.a0H(), aX.sY.show(kZ, ka), 2;
				if (4 === a0A) av.a0E(0, [player], !0) && az.ff.nt(player);
				else {
					if (8 !== a0A) return 0;
					az.gi.gm(aE.gn(), a02, player)
				}
			}
			return 1
		}(kZ, ka), this.qS(), 2 === kZ && (aX.sY.tw = !0), 0 < kZ))
	}, this.xG = function(kZ, ka) {
		this.tw() || (a00 = kZ, a01 = ka, du = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bB.gd(mouseX),
			coordY = bB.gf(mouseY),
			coord = bB.ei(coordX, coordY),
			point = bB.eA(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kZ, ka, e0) {
			aQ.eF(e0) || -1 === (kZ = bC.gp.a0V(kZ, ka)) ? aA.a0U(e0) : aA.a0W(kZ)
		}(mouseX, mouseY, point))
	}
	this.click = function(kZ, ka, xO) {
		var gc = bB.gd(kZ),
			ge = bB.gf(ka),
			e6 = bB.ei(gc, ge),
			e0 = bB.eA(e6);
		if (!bB.gg(gc, ge)) return !1;
		gc = (m.n.uM() ? .025 : .0144) * am.p3, ge = performance.now();
		if (Math.abs(kZ - a00) > gc || Math.abs(ka - a01) > gc || du + 500 < ge) return !1;
		if (du = ge, xO && ! function(kZ, ka, e0) {
				aQ.eF(e0) || -1 === (kZ = bC.gp.a0V(kZ, ka)) ? aA.a0U(e0) : aA.a0W(kZ)
			}(kZ, ka, e0), a9.gW || this.tw() || !b1.ff.gY(a1.e4) || a1.gV) return this.qS(), !1;
		if (a1.gh) {
			if (!xO) {
				if (!aQ.eF(e0)) return !1;
				a02 = e6, pX[3].tw = !0
			}
		} else if (bC.gp.nW(e6)) xO ? aA.a0N(55, 0) : bC.a0L.a0M = -1;
		else {
			if (xO) return !1;
			bC.gp.a0O(kZ, ka) || (2 === a1.vH ? aQ.ft(e0) && (player = aQ.eC(e0), aQ.vA(player)) && (pX[0].tw = !0, pX[0].kF = 1, pX[7].tw = !0) : aQ.eP(e0) ? (a02 = aa.dx.dz(e0)) && (gc = bB.eA(a02), pX[8].tw = !0, player = aQ.eB(gc) ? a1.eH :
				aQ.eC(gc)) : (a02 = e6, bC.gp.gq(a1.e4, e6) && (pX[0].tw = !0, pX[0].kF = 1, pX[1].tw = !0, pX[1].kF = bD.ew[2] ? 0 : 2), aQ.go(e0) || (aQ.eB(e0) ? (player = a1.eH, gs(a1.e4) ? (pX[0].tw = !0, pX[0].kF = 0) : gu(a1.e4,
				player) && (pX[0].tw = !0, pX[0].kF = 3)) : (player = aQ.eC(e0)) === a1.e4 ? (pX[0].tw = !0, pX[0].kF = 1, pX[7].tw = !0) : (pX[0].kF = 1, pX[5].tw = function(player) {
				return aQ.vA(player) && !a0D(player) && av.a0E(1, [player], !1)
			}(player), pX[7].tw = aQ.vA(player), eD(player, a1.e4) ? (pX[4].tw = aQ.vA(player) && !aT.a0Q(player) && av.a0E(0, [player], !1), pX[6].tw = function(player) {
				if (0 === nx.length) return !1;
				if (performance.now() > a03 + 4e3) return !(nx = []);
				return !a0D(player) && ! function(player) {
					var z;
					if (a1.iS)
						for (z = nx.length - 1; 0 <= z; z--)
							if (!eD(player, nx[z])) return 1;
					return
				}(player)
			}(player), gw(a1.e4, player) ? (pX[0].kF = 0, pX[0].tw = !0) : gu(a1.e4, player) && (pX[0].kF = 3, pX[0].tw = !0), pX[0].tw = this.a0S()) : (pX[2].tw = !0, pX[0].tw = !0)))))
		}
		return this.a0K(kZ, ka)
	}, this.a0K = function(kZ, ka) {
		return eR = kZ - Math.floor(zz / 2), eT = ka - Math.floor(zz / 2), !!this.tw()
	}, this.wu = function(kZ, ka) {
		return !!this.tw() && (aX.sY.tw ? !aX.sY.uO(kZ, ka) && (aX.sY.tw = !1, bU.dQ = !0) : function(vp, kZ, ka) {
			kZ = a09(kZ, ka);
			if (0 <= a0B(kZ)) return !1;
			if ((1 === kZ || 6 === kZ) && 0 <= a0B(2)) return !1;
			if ((6 === kZ || 9 === kZ) && 0 <= a0B(10)) return !1;
			return vp.qS(), bU.dQ = !0
		}(this, kZ, ka))
	}, this.qS = function() {
		for (var z = pX.length - 1; 0 <= z; z--) pX[z].tw = !1, pX[z].kF = 0;
		aX.sY.tw = !1
	}, this.tw = function() {
		return this.a0S() || aX.sY.tw
	}, this.a0S = function() {
		for (var eK = pX.length, z = 0; z < eK; z++)
			if (pX[z].tw) return !0;
		return !1
	}, this.qv = function() {
		if (this.tw())
			if (aX.sY.tw) aX.sY.qv();
			else {
				var z, h5 = qw,
					ee = pX,
					eK = ee.length,
					a0a = (zz + gap) / zoom;
				for (h5.imageSmoothingEnabled = !0, h5.setTransform(zoom, 0, 0, zoom, eR, eT), z = 0; z < eK; z++) ee[z].tw && qw.drawImage(ee[z].h4[ee[z].kF], ee[z].eR * a0a, ee[z].eT * a0a);
				h5.imageSmoothingEnabled = !1, h5.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function bv() {
	var iw, h4, a0b, a0c, a0d, a0e = -1;

	function a0f() {
		var a0g, tc = h4.getContext("2d", {
			alpha: !0
		});
		tc.clearRect(0, 0, iw, iw), tc.fillStyle = p.mJ, tc.fillRect(0, 0, iw, iw), 0 === a0c && (tc.fillStyle = p.mO, tc.fillRect(0, 0, iw, iw)), tc.fillStyle = p.mN, tc.fillRect(0, 0, iw, 1), tc.fillRect(0, 0, 1, iw), tc.fillRect(0, iw - 1, iw, 1),
			tc.fillRect(iw - 1, 0, 1, iw), a0g = .9 * iw / aP.get(0).width, tc.imageSmoothingEnabled = !0, tc.setTransform(a0g, 0, 0, a0g, Math.floor((iw - a0g * aP.get(0).width) / 2), Math.floor((iw - a0g * aP.get(0).height) / 2)), tc.drawImage(aP
				.get(0), 0, 0), tc.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a0i(kZ, ka) {
		if (!a9.gW) return kZ <= iw + bR.gap && ka >= aE.eT ? 9 : -1;
		if (kZ <= 4 * iw + bR.gap) {
			if (ka >= aE.eT) return 0;
			if (ka >= aE.eT - iw - a0d * bR.gap) return 2
		} else if (kZ <= 7 * iw + bR.gap && ka >= aE.eT - iw - a0d * bR.gap) return 1;
		return -1
	}
	this.gW = !1, this.dI = function() {
		a0c = -1, this.gW = !1, a0d = m.n.uM() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		iw = aE.iw, (h4 = document.createElement("canvas")).width = iw, h4.height = iw, a0b = b1.p1.qD(1, (m.n.uM() ? .5 : .45) * iw), a0f()
	}, this.xW = function() {
		this.gW = !this.gW, this.gW ? (bJ.dd.hideCMPButton(), b2.xV(!1), a1.gV && b2.zw && b2.xX(!0), this.a0h()) : (a0c = -1, a0f(), !a1.js || 1 !== a1.vH || a1.gh || a1.gV || m.n.setState(1)), bU.dQ = !0
	}, this.a0h = function() {
		(a1.js || a1.gV) && 1 === a1.vH && (aI.l6(!0), a1.gh || setTimeout(function() {
			bQ.vS()
		}, 0), m.n.setState(0))
	}, this.gZ = function(kZ, ka) {
		return 0 <= (a0e = a0i(kZ, ka)) || !a9.gW || a1.js || a1.gV || bT.tw || a9.xW(), a0e
	}, this.wu = function(kZ, ka) {
		kZ = a0i(kZ, ka);
		kZ !== a0c && (a0c = kZ, this.gW || a0f(), bU.dQ = !0)
	}, this.wv = function(kZ, ka) {
		kZ = a0i(kZ, ka);
		return -1 !== kZ && a0e === kZ && (this.gW ? a1.lp ? (0 <= kZ && b2.xV(!1), !a1.gV) : (0 === kZ ? a1.wl() : 1 === kZ ? this.xW() : 2 === kZ && i.j(1, 0), !0) : 9 === kZ && (this.xW(), !0))
	}, this.qv = function() {
		var t;
		this.gW ? (t = Math.floor(5.5 * iw), qw.setTransform(1, 0, 0, 1, bR.gap, aE.eT), qw.fillStyle = p.mJ, qw.fillRect(0, 0, t, iw), 0 === a0c ? (qw.fillStyle = p.mO, qw.fillRect(0, 0, 4 * iw, iw)) : 1 === a0c && (qw.fillStyle = p.mO, qw
				.fillRect(4 * iw, 0, Math.floor(1.5 * iw), iw)), qw.fillStyle = p.mN, qw.fillRect(0, 0, t, 1), qw.fillRect(0, 0, 1, iw), qw.fillRect(4 * iw, 0, 1, iw), qw.fillRect(0, iw - 1, t, 1), qw.fillRect(t - 1, 0, 1, iw), qw.font = a0b,
			b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 1), qw.fillText(L(18), 2 * iw, .54 * iw), t = .4 * iw, a9.a0n(bR.gap + 4 * iw + (1.5 * iw - t) / 2, aE.eT + .3 * iw, t), t = 1, qw.setTransform(1, 0, 0, 1, bR.gap, aE.eT - t * a0d *
				bR.gap - t * iw), qw.fillStyle = p.mJ, qw.fillRect(0, 0, 4 * iw, iw), a0c === t + 1 && (qw.fillStyle = p.mO, qw.fillRect(0, 0, 4 * iw, iw)), qw.fillStyle = p.mN, qw.fillRect(0, 0, 4 * iw, 1), qw.fillRect(0, 0, 1, iw), qw
			.fillRect(4 * iw, 0, 1, iw), qw.fillRect(0, iw - 1, 4 * iw, 1), qw.fillText(L(0 === t ? 18 : 19), 2 * iw, .54 * iw), qw.setTransform(1, 0, 0, 1, 0, 0)) : qw.drawImage(h4, bR.gap, aE.eT)
	}, this.a0m = function(player) {
		return 0 !== aU.lK[player] && 2 !== a1.vH && aQ.vA(player)
	}, this.a0n = function(eR, eT, eK) {
		qw.setTransform(1, 0, 0, 1, eR, eT), qw.lineWidth = bR.uP, qw.strokeStyle = p.mN, qw.beginPath(), qw.moveTo(0, 0), qw.lineTo(eK, eK), qw.moveTo(0, eK), qw.lineTo(eK, 0), qw.stroke()
	}
}

function bw() {
	var a0p, iw, a0q, a0r, a0s, a0t, a0u, a0v, a0w;

	function tY() {
		return aE.a1G(aA.a1C()) ? ak.tw ? aE.eT - aE.iw - 2 * a0q : aE.eT - a0q : b2.a1G(aA.a1F()) ? ak.tw ? b2.tY() - aE.iw - 2 * a0q : b2.tY() - a0q : ak.tw ? am.iw - aE.iw - (bZ.zy() + 1) * a0q : am.iw - bZ.zy() * bR.gap
	}

	function a12(dv, oj, id, fr, a16, a17, sg, a18, a19, a1A) {
		var z, tc, y9, ou, f0, a1L = void 0 !== a19,
			t = Math.floor(aD.measureText(oj, aA.a0b) + 1.5 * a0r + (a1L ? iw : 1.5 * a0r));
		if (bU.dQ = !0, t + a0q > am.t && !a1L && 50 !== id && 20 < oj.length) a12(dv, (f0 = b1.w8.zK(oj))[0], id, fr, a16, a17, sg, a18, a19, a1A), a12(dv, f0[1], id, fr, a16, a17, sg, a18, a19, a1A);
		else if (f0 = t + (50 === id ? a0s : 0), (y9 = document.createElement("canvas")).width = t, y9.height = iw, (tc = y9.getContext("2d", {
				alpha: !0
			})).font = aA.a0b, b1.p1.textBaseline(tc, 1), b1.p1.textAlign(tc, 0), tc.clearRect(0, 0, t, iw), tc.fillStyle = a17, tc.fillRect(0, 0, t, iw), tc.fillStyle = a16, tc.fillText(oj, Math.floor(1.5 * a0r), Math.floor(iw / 2)), a1L && (tc
				.imageSmoothingEnabled = !0, aX.sY.uQ(a19, tc, t - iw, 0, iw)), 0 === (ou = {
				du: dv,
				oj: oj,
				id: id,
				player: fr,
				h4: y9,
				a16: a16,
				a17: a17,
				t: t,
				a1D: f0,
				sg: sg,
				a18: a18,
				a19: a19,
				a1A: a1A
			}).du || 0 < a0p.length && 0 < a0p[0].du) a0p.unshift(ou);
		else {
			for (z = 1; z < a0p.length; z++)
				if (0 < a0p[z].du) return void a0p.splice(z, 0, ou);
			a0p.push(ou)
		}
	}

	function a14(h7, qT, ee) {
		return "rgb(" + h7 + "," + qT + "," + ee + ")"
	}

	function a1M(id, fm) {
		for (var eK = a0p.length, z = 0; z < eK; z++) a0p[z].id === id && fm-- <= 0 && (a0p.splice(z, 1), z--, eK--)
	}

	function a1O(id, player) {
		for (var eY = !1, z = a0p.length - 1; 0 <= z; z--) a0p[z].id !== id || player !== a1.eH && a0p[z].player !== player || (a0p.splice(z, 1), eY = !0);
		return eY
	}

	function a1k(oj) {
		a12(340, oj, 6, 0, a14(215, 245, 255), p.mK, -1, !1)
	}
	this.a0x = "", this.dI = function() {
		var self;
		a0v = 0, a0u = m.n.uM() ? 7 : 12, a0t = {
			tj: [0, 0, 0],
			a0y: [0, 0, 0],
			lc: [220, 180, 180],
			qt: [0, 0, 0],
			ef: [0, 0, 0]
		}, a0p = [], this.resize(), a1.gh && this.vT(0, 18), a1k(L(63, [bH.jn.sp[bH.g2].name])), a1k(L(64, [bH.eV - 2 + "x" + (bH.eW - 2)])), a1k(L(65, [ac.a1l])), ac.a1l !== ac.a1m && a1k(L(66, [ac.a1m + " (" + b1.w8.zH(100 * ac.a1m / ac
			.a1l, 1) + ")"])), 0 < ac.a1n && a1k(L(39, [ac.a1n + " (" + b1.w8.zH(100 * ac.a1n / ac.a1l, 1) + ")"])), 0 < ac.a1o && a1k(L(67, [ac.a1o + " (" + b1.w8.zH(100 * ac.a1o / ac.a1l, 1) + ")"])), 10 === a1.jq && a12(120, L(68), 6, 0,
			a14(235, 255, 120), p.mK, -1, !1), 0 !== (self = this).a0x.length && (a12(200, self.a0x, 0, 0, p.mN, p.mK, -1, !1), self.a0x = ""), this.a11()
	}, this.a11 = function() {
		var z, eK;
		if (ax.jm)
			for (eK = ax.jn.a13.length, z = 0; z < eK; z++) a12(400, ax.jn.a13[z], 6, 0, a14(255, 255, 255), p.mK, -1, !1)
	}, this.resize = function() {
		var a15, z;
		if (iw = (iw = Math.floor((m.n.uM() ? .031 : .0249) * am.p3)) < 10 ? 10 : iw, this.fontSize = Math.floor(2 * iw / 3), this.a0b = b1.p1.qD(1, this.fontSize), a0q = bR.gap, a0r = Math.floor(iw / 5), 0 < a0p.length)
			for (a15 = a0p, a0p = [], z = a15.length - 1; 0 <= z; z--) a12(a15[z].du, a15[z].oj, a15[z].id, a15[z].player, a15[z].a16, a15[z].a17, a15[z].sg, a15[z].a18, a15[z].a19, a15[z].a1A);
		this.a1B()
	}, this.a1B = function() {
		a0w = document.createElement("canvas");
		var oj = L(20),
			tc = (a0s = aD.measureText(oj, this.a0b) + 5 * a0r, a0w.height = iw, a0w.width = a0s, a0w.getContext("2d", {
				alpha: !0
			}));
		tc.font = this.a0b, b1.p1.textBaseline(tc, 1), b1.p1.textAlign(tc, 1), tc.clearRect(0, 0, a0s, iw), tc.fillStyle = p.q, tc.fillRect(0, 0, a0s, iw), tc.fillStyle = p.mN, tc.fillText(oj, Math.floor(a0s / 2), Math.floor(iw / 2))
	}, this.a1C = function() {
		var eK;
		return ak.tw ? ak.t : 0 === (eK = a0p.length) ? 0 : 1 === eK ? a0p[0].a1D : a1E(a0p[0].a1D, a0p[1].a1D)
	}, this.a1F = function() {
		var eK = a0p.length;
		return ak.tw ? eK ? a1E(ak.t, a0p[0].a1D) : ak.t : 0 === eK ? 0 : 1 === eK ? a0p[0].a1D : 2 === eK ? a1E(a0p[0].a1D, a0p[1].a1D) : a1E(a1E(a0p[0].a1D, a0p[1].a1D), a0p[2].a1D)
	}, this.gZ = function(eR, eT) {
		for (var lm, a1H, a1I = tY(), z = a0p.length - 1; 0 <= z; z--)
			if ((a1H = a1I - (z + 1) * iw) <= eT && eT < a1H + iw) return 50 === a0p[z].id ? eR >= am.t - a0s - a0q - a0p[z].t && (eR >= am.t - a0s - a0q ? az.ff.nt(a0p[z].player) : a5.lg(a0p[z].player, 800, !1, 0), !0) : eR >= am.t - a0p[z].t -
				a0q && (736 === a0p[z].id ? (a1H = a0p[z].oj.split(" "), window.open(a1H[a1H.length - 1], "_blank")) : a0p[z].a18 && (a0p[z].a1A && a0p[z].a1A.ed ? (a1H = a0p[z].a1A.e6, lm = bB.eS(a1H) - 10, a1H = bB.eU(a1H) - 10, a5.lf(lm,
					a1H, 19 + lm, 19 + a1H)) : a0p[z].a1A && a0p[z].a1A.ee ? a5.lh(a0p[z].player, a0p[z].a1A.li) : (a5.lg(a0p[z].player, 800, !1, 0), 0 <= a0p[z].sg && (lm = a0p[z].sg, a0p[z].sg = a0p[z].player, a0p[z].player = lm))), !0);
		return !1
	}, this.vg = function(dv, oj, id, fr, a16, a17, sg, a18, a19, a1A) {
		a12(dv, oj, id, fr, a16, a17, sg, a18, a19, a1A)
	}, this.a1K = function(wB) {
		a12(300, wB, 252, 0, p.mN, p.mK, -1, !1)
	}, this.zT = function(id) {
		for (var z = a0p.length - 1; 0 <= z; z--) a0p[z].id === id && (a0p[z].du = 1)
	}, this.vT = function(player, id) {
		0 === id ? (aD.iV(player, 0), a1M(423, 0), a12(160, L(21, [aU.a1N[player]]), 423, player, "rgb(10,220,10)", p.mK, -1, !1)) : 1 === id ? (a1O(50, a1.eH), aD.iV(player, 1), a12(360, L(22, [aU.a1N[player]]), 0, player, p.mx, p.mK, -1, !0),
			a5.lg(player, 2700, !1, 0)) : 2 === id ? (aD.iV(player, 2), a12(0, L(23), 0, player, "rgb(10,255,255)", p.mK, -1, !0), a5.lg(player, 2700, !1, 0)) : 3 === id ? (aD.iV(player, 2), a12(0, L(24, [aU.a1N[player]]), 0, player, p.mN, p
			.mK, -1, !0), a5.lg(player, 2700, !1, 0)) : 4 === id ? this.a1P(1, player, player) : 5 === id ? 2 !== aU.yf[player] && aQ.vA(a1.e4) && (function(id, lF) {
			var z, a1Z = 0,
				eK = a0p.length;
			for (z = 0; z < eK; z++)
				if (a0p[z].id === id && lF <= ++a1Z) return a0p.splice(z, 1)
		}(1, 5), aT.a1R(player) ? a12(180, L(25, [aU.a1N[player]]), 1, player, a14(255, 200, 180), p.mK, -1, !0) : (a1M(573, 0), a12(180, L(26, [aU.a1N[player]]), 573, player, p.mx, p.mK, -1, !0))) : 18 === id ? a12(255, L(27), 18, 0, p.mN, p
			.mK, -1, !1) : 21 === id ? a12(220, L(28), id, 0, p.mN, p.mK, -1, !1) : 22 === id ? this.a1P(2, player, player) : 59 === id && a12(0, L(29), id, 0, p.n9, p.mK, 0, !1)
	}, this.wc = function(wB) {
		a12(200, L(30, [wB]), 94, 0, p.mN, p.mt, -1, !1)
	}, this.va = function(a1S) {
		if (a1.e4 === a1S && !a1.js)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a12(0, "Your Win Count is now " + __fx.wins.count, 3, a1S, p.mN, p.mK, -1, !0);
		aD.iV(a1S, 2), a1.jS < 100 ? a12(0, L(24, [aU.a1N[a1S]]), 3, a1S, p.mN, p.mK, -1, !0) : a12(0, L(31, [aU.a1N[a1S]]), 3, a1S, p.mN, p.mK, -1, !0)
	}, this.a0U = function(e0) {
		var oj, a1T = "(" + bB.eS(e0 >> 2) + ", " + bB.eU(e0 >> 2) + ")",
			a18 = !1,
			player = 0;
		aQ.eF(e0) ? aQ.eB(e0) ? a1T = L(32, [a1T]) : (player = aQ.eC(e0), oj = L(33, [b1.tc.yL(aU.wA[player], b1.p1.qD(0, 10), 150)]) + "   ", a1T = (oj += L(34, [b1.w8.zC(aU.gN[player])]) + "   ") + (L(35, [b1.w8.zC(aU.g9[player])]) + "   ") + (
			L(36, [a1T]) + "   ") + L(37, [player]), a18 = !0) : a1T = aQ.eP(e0) ? L(38, [a1T]) + "   #" + aQ.e2(e0) : L(39, [a1T]), bU.dQ = !0, a1M(55, 0), a12(220, a1T, 55, player, p.mN, p.mK, -1, a18)
	}, this.a0W = function(a1U) {
		var kD = bC.ky,
			player = kD.a1V[a1U] >> 3,
			oj = (bU.dQ = !0, a1M(55, 0), L(40, [aU.a1N[player]]) + "   ");
		a12(220, oj += L(34, [kD.a1W[a1U]]), 55, player, p.mN, p.mK, -1, !0)
	}, this.nb = function(nO, a1X, nc) {
		nO === a1.e4 ? a12(175, " " + L(41, [aU.a1N[a1X]]) + ": ", 1001, a1X, a14(200, 255, 210), p.mK, -1, !0, nc) : this.a1Y(nO, nc)
	}, this.a1Y = function(nO, nc) {
		a1M(1e3, 0), a12(175, aU.a1N[nO] + ": ", 1e3, nO, p.mN, "rgba(5,60,25,0.9)", -1, !0, nc)
	}, this.vh = function() {
		var wB;
		a1.vM ? (wB = L(42), aD.vf(L(43), 2, 1, 12), a12(0, wB, 40, 0, "rgb(10,220,10)", p.mK, -1, !1)) : (wB = L(44), aD.vf(L(45), 2, 0, 16), a12(0, wB, 41, 0, p.mN, p.mK, -1, !1))
	}, this.tk = function(tj) {
		a12(300, tj[0].name + " [" + a1.vZ.tq(tj[0].tn) + "] vs " + tj[1].name + " [" + a1.vZ.tq(tj[1].tn) + "]", 65, 0, p.mE, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a1a = function(wB) {
		a12(200, wB, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a1b = function(a1c) {
		a12(0, L(a1c ? 46 : 47), 247, 0, p.n8, p.mK, -1, !1)
	}, this.ts = function(tj, tp, tr, a1d) {
		a12(0, tj[0].name + ": " + a1.vZ.tq(tj[0].tn) + " -> " + tp, 66, 0, p.mN, a1d[0], -1, !1), a12(0, tj[1].name + ": " + a1.vZ.tq(tj[1].tn) + " -> " + tr, 66, 1, p.mN, a1d[1], -1, !1)
	}, this.nu = function(player, id) {
		0 === id ? a1O(50, player) ? (a12(128, L(48, [aU.a1N[player]]), 52, player, a14(180, 255, 180), p.mK, -1, !0), aT.oa(player, 2, 255)) : a12(384, L(49, [aU.a1N[player]]), 51, player, a14(210, 210, 255), p.mK, -1, !0) : a1O(51, player) ? (
			a12(128, L(50, [aU.a1N[player]]), 52, player, p.mN, "rgba(60,120,10,0.9)", -1, !0), aT.oa(player, 2, 255)) : (a12(384, L(51, [aU.a1N[player]]), 50, player, p.mN, "rgba(90,90,90,0.9)", -1, !0), aT.oa(player, 2, 96))
	}, this.ny = function(tj, target) {
		var color = a14(210, 255, 210);
		1 < tj.length ? a12(230, L(52, [tj.length, aU.a1N[target]]), 66, target, color, p.mK, -1, !0) : a12(230, L(53, [aU.a1N[tj[0]], aU.a1N[target]]), 66, tj[0], color, p.mK, target, !0)
	}, this.a1e = function(player, target) {
		a12(230, L(54, [aU.a1N[player], aU.a1N[target]]), 66, player, p.mN, "rgba(75,65,5,0.9)", target, !0)
	}, this.a0N = function(id, fm) {
		a1M(id, fm)
	}, this.a1f = function(id) {
		for (var z = a0p.length - 1; 0 <= z; z--)
			if (a0p[z].id === id) return a0p[z];
		return null
	}, this.vO = function(id, player) {
		a1O(id, player)
	}, this.np = function(a1g, a1h, player) {
		2 !== aU.yf[a1.e4] && (a12(200, 1 === a1g ? L(55, [aU.a1N[player]]) : L(56, [a1g, aU.a1N[player]]), 30, player, "rgb(190,255,190)", p.mK, -1, !0), a1h) && a12(30, 1 === a1h ? L(57) : L(58, [a1h]), 30, 0, p.mN, p.mK, -1, !1)
	}, this.a1j = function(a1g, player) {
		2 !== aU.yf[a1.e4] && (a1M(31, 0), 2 === aU.yf[player] || player >= a1.jS ? a12(150, 1 === a1g ? L(59, [aU.a1N[player]]) : L(60, [aU.a1N[player], a1g]), 31, player, p.mE, "rgba(205,205,205,0.9)", -1, !0) : a12(150, 1 === a1g ? L(61, [aU
			.a1N[player]
		]) : L(62, [aU.a1N[player], a1g]), 31, player, p.mE, "rgba(205,255,205,0.9)", -1, !0))
	}, this.vN = function(bd) {
		for (var ef = bU.jP(), z = 2; 0 <= z; z--) 0 < a0t.qt[z] && (bd || a0t.ef[z] < ef - 220) && this.a1p(z)
	}, this.a1p = function(id) {
		var oj, eK = a0t.qt[id],
			player = a0t.tj[id];
		a0t.qt[id] = 0, 1 === eK ? (0 === id ? oj = L(69, [aU.a1N[player], aU.a1N[a0t.a0y[0]]]) : 1 === id ? oj = L(70, [aU.a1N[player]]) : 2 === id ? oj = L(71, [aU.a1N[player]]) : 3 === id && (oj = L(72, [aU.a1N[player]])), a1M(7, 0), a12(a0t
			.lc[id], oj, 7, a0t.a0y[id], p.mN, p.mK, -1, !0)) : (oj = L(0 === id ? 73 : 1 === id ? 74 : 75, [eK]), a1M(7, 0), a12(a0t.lc[id], oj, 7, player, p.mN, p.mK, -1, !1))
	}, this.a1P = function(id, gl, sg) {
		var ef = bU.jP(),
			eK = a0t.qt[id] + 1;
		a0t.qt[id]++, a0t.tj[id] = gl, a0t.a0y[id] = sg, 1 === eK && (a0t.ef[id] = ef), (1 === eK && (a1.vK < 32 || 2 === a1.vH) || 1 < eK && (a0t.ef[id] < ef - 140 || 2 === a1.vH)) && this.a1p(id)
	}, this.iH = function() {
		for (var hJ = (hJ = a0p.length - a0u) <= 1 ? 1 : hJ * hJ, z = a0p.length - 1; 0 <= z; z--) 0 < a0p[z].du && (a0p[z].du -= hJ, a0p[z].du <= 0) && (bU.dQ = !0, a0p.splice(z, 1));
		! function() {
			var fm, z;
			if (128 !== a0v && !(++a0v < 128))
				for (fm = 5, z = aZ.jT - 1; 0 <= z; z--) 1 === aU.yf[aZ.jV[z]] && 0 < fm-- && a12(240, L(72, [aU.a1N[aZ.jV[z]]]), 1, aZ.jV[z], p.mE, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.vN(!1)
	}, this.qv = function() {
		for (var t0, eT = tY(), z = a0p.length - 1; 0 <= z; z--) t0 = eT - (z + 1) * iw, 50 === a0p[z].id ? (qw.drawImage(a0p[z].h4, am.t - a0p[z].t - a0s - a0q, t0), qw.drawImage(a0w, am.t - a0s - a0q, t0)) : qw.drawImage(a0p[z].h4, am.t - a0p[
			z].t - a0q, t0)
	}
}

function bx() {
	var a1r, a1s, a1t, t, iw, font, oj;

	function a1x(a1y) {
		return a1y < 10 ? "0" + a1y : String(a1y)
	}
	this.dI = function() {
		oj = L(76)
	}, this.resize = function() {
		t = Math.floor((m.n.uM() ? .53 : .36) * am.p3), iw = Math.floor(.065 * t), font = b1.p1.qD(1, Math.floor(.9 * iw)), a1t--, this.setTime()
	}, this.iH = function() {
		this.setTime() && (bU.dQ = !0)
	}, this.setTime = function() {
		var dv = new Date,
			a1v = dv.getUTCMinutes(),
			dv = dv.getUTCSeconds();
		return a1s = 3600 - 60 * a1v - dv, a1s %= 900, a1r = oj + a1x(Math.floor(a1s / 60)) + ":" + a1x(a1s % 60), a1t !== (a1t = 60 * a1v + dv) && (t = aD.measureText(a1r, font), t += Math.floor(.4 * iw), !0)
	}, this.qv = function() {
		qw.lineWidth = 1 + Math.floor(iw / 15), 7 === aN.wY() && ai.a1z() + 2 * bR.gap > .5 * (am.iw - t) ? qw.translate(am.t - iw, Math.floor(ai.a1z() + 2 * bR.gap + t)) : qw.translate(am.t - iw, Math.floor(.5 * (am.iw + t))), qw.rotate(-Math
			.PI / 2), qw.fillStyle = p.mN, qw.fillRect(0, 0, t, iw), qw.strokeStyle = p.mE, qw.strokeRect(0, 0, t, iw + 10), qw.fillStyle = p.mE, qw.font = font, b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 1), qw.fillText(a1r, Math.floor(
			t / 2), Math.floor(.59 * iw)), qw.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function by() {
	var a0p, a20, a0b, iw, a21;

	function a23(z) {
		var a25 = !0,
			hE = p.mN,
			t = (a0p[z].iY === a1.eH ? a0p[z].tc.fillStyle = p.mX : (aQ.a26(a0p[z].iY), a0p[z].tc.fillStyle = b1.color.mH(bD.eu[0], bD.eu[1], bD.eu[2], .87), 400 < b1.pB.xw(bD.eu, 0, 2) && (a25 = !1, hE = p.mE)), a0p[z].h4.width),
			qF = (a0p[z].tc.clearRect(0, 0, t, iw), a0p[z].tc.fillRect(0, 0, t, iw), a0p[z].tc.fillStyle = hE, ! function(tc, t, iw) {
				tc.fillRect(0, 0, t, 1), tc.fillRect(0, iw - 1, t, 1), tc.fillRect(0, 0, 1, iw), tc.fillRect(t - 1, 0, 1, iw)
			}(a0p[z].tc, t, iw), a20 + 2 * iw < t && (a0p[z].tc.fillRect(t - a20 - iw, 0, 1, iw), a0p[z].tc.fillText(aU.a1N[a0p[z].iY], Math.floor((t - a20) / 2), Math.floor(.57 * iw))), 0 !== a0p[z].id ? 0 : iw);
		a0p[z].tc.fillText(b1.w8.zC(a0p[z].iZ), Math.floor(t - a20 / 2 - qF), Math.floor(.57 * iw)),
			function(z, t, qF, a25) {
				a0p[z].tc.fillStyle = a25 ? p.mP : p.mL;
				a25 = Math.floor(a20 * a0p[z].iZ / a0p[z].a2C);
				a0p[z].tc.fillRect(Math.floor(t - a20 - qF), iw - a21, a25, a21)
			}(z, t, qF, a25), 0 === a0p[z].id ? (a29(z, t, a25, hE), function(z, t, a25) {
				a0p[z].tc.strokeStyle = a25 ? p.mc : p.ml, a0p[z].tc.fillRect(iw, 0, 1, iw);
				a25 = t - iw;
				a0p[z].tc.beginPath(), a0p[z].tc.moveTo(Math.floor(.3 * iw + a25), Math.floor(iw / 2)), a0p[z].tc.lineTo(Math.floor(iw - .3 * iw + 0 + a25), Math.floor(iw / 2)), a0p[z].tc.stroke(), a0p[z].tc.beginPath(), a0p[z].tc.moveTo(Math
					.floor(iw / 2 + a25), Math.floor(.3 * iw)), a0p[z].tc.lineTo(Math.floor(iw / 2 + a25), Math.floor(iw - .3 * iw + 0)), a0p[z].tc.stroke()
			}(z, t, a25)) : a29(z, 2 * iw, a25, hE)
	}

	function a29(z, t, a25, hE) {
		a0p[z].tc.strokeStyle = a0p[z].a2D ? p.mV : a25 ? p.mp : p.mq, a0p[z].tc.fillStyle = hE, a0p[z].tc.fillRect(t - iw, 0, 1, iw), a0p[z].tc.lineWidth = Math.max(Math.floor(iw / 12), 3), a0p[z].tc.lineCap = "round";
		a25 = .35;
		t = iw + 1, a0p[z].tc.beginPath(), a0p[z].tc.moveTo(Math.floor(t - a25 * iw + 0), Math.floor(a25 * iw)), a0p[z].tc.lineTo(Math.floor(t - iw + a25 * iw), Math.floor(iw - a25 * iw + 0)), a0p[z].tc.stroke(), a0p[z].tc.beginPath(), a0p[z].tc
			.moveTo(Math.floor(t - iw + a25 * iw), Math.floor(a25 * iw)), a0p[z].tc.lineTo(Math.floor(t - a25 * iw + 0), Math.floor(iw - a25 * iw + 0)), a0p[z].tc.stroke()
	}

	function a2O(eK) {
		for (var iZ, z = eK - 1; 0 <= z; z--) iZ = aR.fW(a1.e4, z), a0p[z].iZ !== iZ && (a0p[z].iZ = iZ, a0p[z].a2C = iZ > a0p[z].a2C ? iZ : a0p[z].a2C, a0p[z].a24 = !0)
	}

	function a22(a2Q) {
		a2Q.h4 = document.createElement("canvas"), bH.sR.font = a0b;
		var t = a20;
		a2Q.iY < a1.eH && 0 === a2Q.id && (t += Math.floor(bH.sR.measureText(aU.a1N[a2Q.iY] + "000").width)), t += iw, 0 === a2Q.id && (t += iw), a2Q.h4.width = t, a2Q.h4.height = iw, a2Q.tc = a2Q.h4.getContext("2d", {
			alpha: !0
		}), a2Q.tc.font = a0b, b1.p1.textBaseline(a2Q.tc, 1), b1.p1.textAlign(a2Q.tc, 1)
	}

	function a2K(z) {
		return aH.a2S() ? am.t - a0p[z].h4.width - bR.gap : aH.eR
	}

	function a2L(z) {
		return Math.floor(2 * bR.gap + (aH.a2S() ? aJ.iw + bR.gap : 0) + aH.iw + z * (1.3 * iw))
	}
	this.dI = function() {
		a0p = [], this.resize()
	}, this.resize = function() {
		a0b = aA.a0b, iw = aA.fontSize + 5, iw = Math.floor(1.25 * iw), m.n.uM() && (iw = Math.floor(1.25 * iw)), a21 = Math.floor(.15 * iw), bH.sR.font = a0b, a20 = Math.floor(bH.sR.measureText("02 000 000 0000").width);
		for (var z = a0p.length - 1; 0 <= z; z--) a22(a0p[z]), a23(z)
	}, this.l6 = function() {
		for (var z = a0p.length - 1; 0 <= z; z--) a0p[z].a24 && (a0p[z].a24 = !1, a23(z))
	}, this.gZ = function(kZ, eT) {
		if (2 !== a1.vH && 0 !== aU.lK[a1.e4] && !a1.gV && aQ.vA(a1.e4))
			for (var a2F, a2G, a2H, a2I = m.n.uM() ? iw : 0, a2J = m.n.uM() ? Math.floor(.15 * iw) : 0, z = a0p.length - 1; 0 <= z; z--)
				if (a2F = a2K(z), a2G = a2L(z), a2H = a0p[z].h4.width, a2G - a2J <= eT && eT <= a2G + iw + a2J) {
					if (a2F - a2I <= kZ && kZ <= a2F + iw + a2I) return a0p[z].a2D || (a0p[z].a24 = !0, a0p[z].a2D = !0, 0 === a0p[z].id && az.gi.nZ(a0p[z].iY)), !0;
					if (0 === a0p[z].id && a2F + a2H - iw - a2I <= kZ && kZ <= a2F + a2H + a2I) return az.gi.gt(aE.gn(), a0p[z].iY), !0
				} return !1
	}, this.iH = function() {
		var eK;
		0 !== aU.lK[a1.e4] && (aQ.vA(a1.e4) || a1.gV) && (function(eK) {
			if (a0p.length !== eK) return 1;
			for (var z = eK - 1; 0 <= z; z--)
				if (a0p[z].id !== aR.fQ(a1.e4, z) || a0p[z].iY !== aR.fV(a1.e4, z)) return 1;
			return
		}(eK = aR.fP(a1.e4)) && function(eK) {
			var z, id, iY, ee, iZ, a15 = [];
			loop: for (z = 0; z < eK; z++) {
				for (id = aR.fQ(a1.e4, z), iY = aR.fV(a1.e4, z), ee = 0; ee < a0p.length; ee++)
					if (a0p[ee].id === id && a0p[ee].iY === iY) {
						a15.push(a0p.splice(ee, 1)[0]);
						continue loop
					} iZ = aR.fW(a1.e4, z), a22(iZ = {
					iY: iY,
					iZ: iZ,
					a2C: iZ,
					id: id,
					a24: !0,
					a2D: !1,
					h4: null,
					tc: null
				}), a15.push(iZ)
			}
			a0p = a15
		}(eK), a2O(eK))
	}, this.a2R = function(fr) {
		for (var eK = Math.min(a0p.length, aR.fP(a1.e4)), z = 0; z < eK; z++)
			if (a0p[z].iY === fr) return void(a0p = [])
	}, this.qv = function() {
		if (0 !== aU.lK[a1.e4] && (aQ.vA(a1.e4) || a1.gV))
			for (var z = a0p.length - 1; 0 <= z; z--) qw.drawImage(a0p[z].h4, a2K(z), a2L(z))
	}
}

function bz() {
	var a0p, ja, a2T, a2U, iw, a0b, fontSize, a2V, a2W, a2X, a2Y, h4, tc, lX, a2Z;

	function r3(z) {
		return L(0 === z ? 77 : 1 === z ? 78 : 2 === z ? 79 : 80)
	}

	function a2g() {
		qw.drawImage(h4, bR.gap + (a1.iS ? bR.gap + bW.a2h() : 0), a2i + 2 * bR.gap)
	}

	function a2a() {
		h4.width = a0p[0].width + a2X, h4.height = iw + a2X, (tc = h4.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a0p[0].width + a2X, iw + a2X), tc.translate(Math.floor(a2X / 2), Math.floor(a2X / 2)), tc.lineWidth = a2X, tc.fillStyle = 1 === a0p[0].a2f ? p.mS : p.mK, a2j(), tc.fill(), tc.strokeStyle = 1 === a0p[0].a2f ? p.mE : p
			.mN, a2j(), tc.stroke(), b1.p1.textAlign(tc, 1), b1.p1.textBaseline(tc, 1), tc.fillStyle = 1 === a0p[0].a2f ? p.mE : p.mN, tc.font = a0b[0], tc.fillText(r3(a0p[0].a2e), Math.floor(a0p[0].width / 2), Math.floor(.72 * a2V[0] * iw)), tc
			.font = a0b[1], tc.fillText(a0p[0].oj, Math.floor(a0p[0].width / 2), Math.floor((a2V[0] + .48 * a2V[1]) * iw))
	}

	function a2j() {
		tc.beginPath(), tc.moveTo(a2Y, 0), tc.lineTo(a0p[0].width - a2Y, 0), tc.lineTo(a0p[0].width, a2Y), tc.lineTo(a0p[0].width, iw - a2Y), tc.lineTo(a0p[0].width - a2Y, iw), tc.lineTo(a2Y, iw), tc.lineTo(0, iw - a2Y), tc.lineTo(0, a2Y), tc
			.closePath()
	}
	this.dI = function() {
		ja = 4, a2T = a2U = lX = 0, a0p = [], a0b = new Array(2), fontSize = new Array(2), (a2V = new Array(2))[0] = .3, a2V[1] = .7, a2W = new Array(4), h4 = document.createElement("canvas"), a2Z = bU.du + 2e3, this.resize()
	}, this.resize = function() {
		var z, t;
		for (iw = Math.floor((m.n.uM() ? .0725 : .058) * am.p3), fontSize[0] = Math.floor(.85 * a2V[0] * iw), fontSize[1] = Math.floor(.85 * a2V[1] * iw), a0b[0] = b1.p1.qD(1, fontSize[0]), a0b[1] = b1.p1.qD(1, fontSize[1]), z = a2W.length -
			1; 0 <= z; z--) a2W[z] = this.measureText(r3(z) + "000", a0b[0]);
		if (a2X = Math.floor(1 + .05 * iw), a2Y = Math.floor(.2 * iw), 0 < a0p.length) {
			for (z = a0p.length - 1; 0 <= z; z--) t = this.measureText(a0p[z].oj + "00", a0b[1]), a0p[z].width = t < a2W[z] ? a2W[z] : t;
			a2a()
		}
	}, this.iH = function() {
		0 !== ja && (4 === ja ? bU.du > a2Z && (ja = 0, 1 === a1.vH) && aD.vf(bH.jn.sp[bH.g2].name, 3, 1, 9) : (1 === ja ? (0 === a2T && (a2a(), a2T = 1e-4), 1 <= (a2T += .002 * (bU.du - lX)) && (a2U = 0, ja = 2, a2T = 1), bU.dQ = !0) : 2 ===
			ja ? ((a2U += (bU.du - lX) / 1e3) > a0p[0].lc || 1 < a2U && 1 < a0p.length) && (ja = 3) : 3 === ja && ((a2T -= .002 * (bU.du - lX)) <= 0 && (a2T = 0, a0p.shift(), ja = 0 < a0p.length ? 1 : 0), bU.dQ = !0), lX = bU.du))
	}, this.measureText = function(oj, a0b) {
		return qw.font = a0b, Math.floor(qw.measureText(oj).width)
	}, this.iV = function(a2d, z) {
		this.vf(aU.a1N[a2d], z, 1, 0 === z ? 3 : 7)
	}, this.vf = function(oj, a2e, a2f, lc) {
		var t = (t = this.measureText(oj + "00", a0b[1])) < a2W[a2e] ? a2W[a2e] : t;
		a0p.push({
			oj: oj,
			width: t,
			a2e: a2e,
			a2f: a2f,
			lc: lc
		}), 0 === ja && (a2T = 0, ja = 1, lX = bU.du)
	}, this.qv = function() {
		0 !== ja && 0 !== a2T && (a2T < 1 ? (qw.globalAlpha = a2T, a2g(), qw.globalAlpha = 1) : a2g())
	}
}

function ca() {
	var iw, h4, tc, a2k, a2l, a2m, a2n, a24, a2o, a2p, a2q, a2r, a1c = !1,
		y9 = (this.tw = !1, this.t = 0, new Array(2));

	function l7() {
		var t = ak.t,
			kD = (a24 = !1, tb(tc, t, iw), Math.floor(t / 2));
		1 === a2k ? (tc.fillStyle = p.me, tc.fillRect(kD, 0, kD, iw)) : -1 === a2k && (tc.fillStyle = p.mr, tc.fillRect(0, 0, kD, iw)), td(tc, t, iw, 2);
		var kD = (kD = Math.floor(.25 * iw)) < 2 ? 2 : kD,
			a1l = (tc.fillStyle = p.mT, Math.floor((iw - 4) * a2l[1] / a2m[1]));
		0 < a1l && tc.fillRect(2, iw - 2 - a1l, kD, a1l), 0 < (a1l = Math.floor((iw - 4) * a2l[0] / a2m[0])) && tc.fillRect(t - 2 - kD, iw - 2 - a1l, kD, a1l);
		kD = (kD = Math.floor(iw / 8)) < 2 ? 2 : kD, tf(tc, Math.floor(.4 * iw), 0, iw, kD, .5, !1), tf(tc, Math.floor(t - 1.4 * iw), 0, iw, kD, .5, !0), a1l = 1.1 * iw / y9[0].width;
		tc.imageSmoothingEnabled = !0, tc.setTransform(a1l, 0, 0, a1l, (t - a1l * y9[0].width) / 2, -.05 * iw), tc.drawImage(y9[+a1c], 0, 0), tc.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a2s() {
		a2q = bU.jP(), a24 = !0, a2o = a2k = 0, a2n = [], ak.tw = !1, aA.vO(247, 0), a2l[0] = a2l[1] = 0, aA.zT(673)
	}

	function tY() {
		return aE.a1G(aA.a1C()) ? aE.eT - iw - bR.gap : b2.a1G(aA.a1F()) ? b2.tY() - iw - bR.gap : am.iw - iw - bZ.zy() * bR.gap
	}
	this.dJ = function() {
		for (var z = 0; z < 2; z++) y9[z] = b1.h4.uA(aP.get(3), 8 - z, p.nG), y9[z] = b1.h4.yB(y9[z])
	}, this.dI = function() {
		a2q = -140, a2p = 0, a2r = -1, this.tw = !1, a24 = a1c = !1, a2l = [a2k = a2o = 0, 0], a2m = [1, 1], a2n = [], this.resize()
	}, this.resize = function() {
		iw = aE.iw, this.t = 4 * iw, (h4 = document.createElement("canvas")).width = this.t, h4.height = iw, tc = h4.getContext("2d", {
			alpha: !0
		}), l7()
	}, this.l6 = function() {
		a24 && l7()
	}, this.gZ = function(eR, eT) {
		var ln;
		return !!this.tw && !(eR < am.t - this.t - bR.gap || eT < (ln = tY()) || ln + iw < eT || (a1.gV || az.gi.nf(eR > am.t - bR.gap - this.t / 2 ? 1 : 0), 0))
	}, this.iH = function() {
		if (0 < a2p) 0 === --a2p && a2s();
		else if (this.tw) 180 == --a2o && 3 * a2l[0] < a2m[0] ? a2s() : a2l[0] >= a2m[0] ? a1c ? bG.uw.vC() : bG.uw.vG() : a2l[1] >= a2m[1] ? a2p = 4 : a2o <= 0 && a2s();
		else if (function() {
				if (0 <= a2r) return 1;
				return
			}()) {
			a1c = aV.a2v(), aA.vg(250, L(81, [aU.a1N[a2r]]), 673, a2r, p.mN, p.mK, -1, !0), a2r = -1, aA.zT(257), aA.a1b(a1c), this.tw = !0, a24 = !0, a2o = 360;
			for (var en, dv = 0, z = aZ.jT - 1; 0 <= z; z--) aQ.vA(aZ.jV[z]) && (dv += aU.g9[aZ.jV[z]]);
			a1c ? a2m[0] = Math.max(bA.em(3 * dv, 4), 1) : a1.iS ? 9 === a1.jq && 8 === bV.vc[bW.ki()] ? a2m[0] = Math.max(dv, 1) : (en = bA.em(100 * bW.vs(), a1.jC), en = bA.oZ(200 - 2 * en, 50, 100), en = bA.em(en * dv, 100), a2m[0] = Math.max(
				en, 1)) : a2m[0] = Math.max(bA.em(3 * dv, 5), 1), a2m[1] = Math.max(dv - a2m[0], 1)
		}
	}, this.vI = function() {
		this.tw && a2l[0] < a2m[0] && a2s()
	}, this.ob = function(player, a2y) {
		var z;
		if (this.tw) {
			for (z = a2n.length - 1; 0 <= z; z--)
				if (a2n[z] === player) return;
			var a2z = L(a2y ? 82 : 83, [aU.a1N[player]]);
			aA.vg(450, a2z, 257, player, a2y ? p.mc : p.mo, p.mK, -1, !0), a2n.push(player), a24 = !0, a2z = a1.js ? a2m[0] : aU.g9[player], a2y ? a2l[0] += a2z : a2l[1] += a2z, player === a1.e4 && (a2k = a2y ? 1 : -1)
		}
	}, this.qv = function() {
		var eT;
		this.tw && (eT = tY(), qw.drawImage(h4, am.t - this.t - bR.gap, eT))
	}, this.oc = function(player) {
		if (!a1.js) {
			if (bU.jP() < a2q + 140) return !1;
			if (bU.jP() < 535) return !1
		}
		return 0 === a2o && !!b1.ff.gX(1) && !(!b1.ff.gY(player) || 10 <= jD[player] && !b1.ff.yy(player, 9))
	}, this.nk = function(player) {
		a2r = player
	}
}

function c0() {
	var t, eR, a30, h4, tc, tw, hj, zO, a0b, a24, a31 = 11 / 12;

	function a33() {
		var a2B = Math.floor(hj * (t - 2 * a30)),
			a36 = 1 + Math.floor(.0625 * aE.iw),
			a37 = 1 + Math.floor(.3 * aE.iw),
			a38 = Math.floor(.55 * aE.iw);
		tc.clearRect(0, 0, t, aE.iw), tc.fillStyle = p.mJ, tc.fillRect(0, 0, a30, aE.iw), tc.fillRect(a30 + a2B, 0, t - a30 - a2B, aE.iw), tc.fillStyle = hj < 1 / 3 ? "rgba(" + Math.floor(3 * hj * 130) + ",130,0,0.85)" : hj < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (hj - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hj - 2 / 3) * 130) + ",0.85)", tc.fillRect(a30, 0, a2B, aE.iw), tc.fillStyle = p.mN, tc.fillRect(0, 0, t, 1), tc.fillRect(0, aE.iw - 1, t, 1), tc
			.fillRect(0, 0, 1, aE.iw), tc.fillRect(a30, 0, 1, aE.iw), tc.fillRect(a30 + a2B, 0, 1, aE.iw), tc.fillRect(t - a30, 0, 1, aE.iw), tc.fillRect(t - 1, 0, 1, aE.iw), tc.fillRect(Math.floor(.25 * aE.iw) + a37, Math.floor((aE.iw - a36) / 2),
				aE.iw - 2 * a37, a36), tc.fillRect(Math.floor(t - 1.25 * aE.iw) + a37, Math.floor((aE.iw - a36) / 2), aE.iw - 2 * a37 - a37 % 2, a36), tc.fillRect(Math.floor(t - 1.25 * aE.iw) + Math.floor((aE.iw - a36) / 2), a37, a36, aE.iw - 2 *
				a37 - a37 % 2), zO = b1.ff.hi(a1.e4, aE.gn()), tc.fillText(b1.w8.zC(zO) + " (" + b1.w8.zH(100 * hj, +(hj < .1)) + ")", Math.floor(.5 * t), a38)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hj = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aE.xS(arg1);

	function a3D(xr) {
		return !(1 < xr && 1 === hj || (1 < xr && xr * hj - hj < 1 / 1024 ? xr = (hj + 1 / 1024) / hj : xr < 1 && hj - xr * hj < 1 / 1024 && (xr = (hj - 1 / 1024) / hj), hj = bA.oZ(hj * xr, 1 / 1024, 1), a33(), 0))
	}

	function a3E(kZ) {
		return hj !== (hj = bA.oZ((kZ - eR - a30) / (t - 2 * a30), 1 / 1024, 1)) && (a33(), !0)
	}
	this.eT = 0, this.ga = !1, this.dI = function() {
		tw = !a1.gh && !a1.gV, a24 = !1, hj = .5, zO = 0, this.ga = !1, this.resize()
	}, this.resize = function() {
		m.n.uM() && am.t < .8 * am.iw ? (this.iw = Math.floor(.066 * am.p3), t = am.t - 4 * bR.gap - this.iw) : (t = Math.floor((m.n.uM() ? .65 : .389) * am.p3), t += 12 - t % 12, this.iw = Math.floor(t / 12)), a30 = Math.floor(3 * this.iw / 2),
			a0b = b1.p1.qD(1, Math.floor(.5 * this.iw)), (h4 = document.createElement("canvas")).width = t, h4.height = this.iw, (tc = h4.getContext("2d", {
				alpha: !0
			})).font = a0b, b1.p1.textBaseline(tc, 1), b1.p1.textAlign(tc, 1), this.a32(), a33()
	}, this.a32 = function() {
		eR = m.n.uM() && am.t < .8 * am.iw ? this.iw + 3 * bR.gap : Math.floor((am.t - t) / 2), this.eT = am.iw - this.iw - bZ.zy() * bR.gap
	}, this.l6 = function() {
		a24 && (a24 = !1, a33())
	}, this.tw = function() {
		return !(!tw || a9.gW && eR < Math.floor(bR.gap + 5.5 * this.iw))
	}, this.a1G = function(a39) {
		return !!this.tw() && eR + t > am.t - a39 - bR.gap
	}, this.zR = function() {
		tw = !a1.gV
	}, this.a2s = function() {
		tw = !1
	}, this.gn = function() {
		return bA.oZ(Math.floor(1024 * hj + .5) - 1, 0, 1023)
	}, this.xP = function(kZ, ka) {
		return this.tw() && eR < kZ && kZ < eR + t && ka > this.eT
	}, this.gZ = function(kZ, ka) {
		return !!this.tw() && !!aE.xP(kZ, ka) && (aF.lr = !1, function(vp, kZ, ka) {
			if (function(kZ, ka) {
					return eR < kZ && kZ < eR + a30 && ka > aE.eT
				}(kZ, ka)) return a3D(a31);
			if (function(kZ, ka) {
					return eR + t - a30 < kZ && kZ < eR + t && ka > aE.eT
				}(kZ, ka)) return a3D(1 / a31);
			return vp.ga = !0, a3E(kZ)
		}(this, kZ, ka) && (bU.dQ = !0), !0)
	}, this.xS = function(ly) {
		0 !== a1.vH && this.tw() && a3D(ly) && (bU.dQ = !0)
	}, this.wx = function(deltaY) {
		var ly;
		return !(0 === deltaY || !this.tw()) && a3D(ly = 0 < deltaY ? (ly = 400 / (400 + deltaY)) < a31 ? a31 : ly : 1 / a31 < (ly = (400 - deltaY) / 400) ? 1 / a31 : ly)
	}, this.wu = function(kZ) {
		return !!this.ga && a3E(kZ)
	}, this.xL = function() {
		this.ga = !1
	}, this.iH = function() {
		this.tw() && zO !== b1.ff.hi(a1.e4, this.gn()) && (a24 = !0)
	}, this.qv = function() {
		this.tw() && qw.drawImage(h4, eR, this.eT)
	}
}

function cl() {
	var h4, tc, a3F, font, a3G = 0,
		a3H = !1,
		a3I = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a3J = 5;

	function a3P() {
		if (a3H) {
			var z, eK = a3I.length,
				a38 = Math.floor(.5 * a3F.iw),
				iw = eK * a38,
				eR = Math.floor(Math.floor(a3F.eR) + .3 * a3F.t - .5),
				eT = Math.floor(Math.floor(a3F.eT) - iw),
				t = Math.floor(.4 * a3F.t + 2.5);
			for (qw.fillStyle = p.mJ, qw.fillRect(eR, eT, t, iw), qw.fillStyle = p.mi, qw.fillRect(eR, eT + a3J * a38, t, a38), qw.fillStyle = p.mN, qw.fillRect(eR, eT, 2, iw), qw.fillRect(eR, eT, t, 2), qw.fillRect(eR + t - 2, eT, 2, iw), z = 1; z <
				eK; z++) qw.fillRect(eR, eT + z * a38, t, 2);
			for (qw.fillStyle = p.mN, b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.font = b1.p1.qD(0, .6 * a38), eR += .5 * t, z = 0; z < eK; z++) qw.fillText(a3X(z), eR, eT + (z + .6) * a38)
		}
		qw.drawImage(h4, Math.floor(a3F.eR), Math.floor(a3F.eT))
	}

	function l7(vp) {
		var eR, lm, ln, a38;
		tc.clearRect(0, 0, Math.floor(a3F.t), Math.floor(a3F.iw)), tc.fillStyle = p.mJ, tc.fillRect(0, 0, Math.floor(a3F.t), Math.floor(a3F.iw)), a1.lp && (tc.fillStyle = p.mi, tc.fillRect(0, 0, Math.floor(.3 * a3F.t), Math.floor(a3F.iw))), tc
			.fillStyle = p.mN, tc.fillText("Hide UI", .15 * a3F.t, .5 * a3F.iw), tc.fillRect(Math.floor(.3 * a3F.t - .5), 0, 2, Math.floor(a3F.iw)), eR = .5 * a3F.t, tc.fillText("Replay Speed", eR, .31 * a3F.iw), tc.fillText(a3X(a3J), eR, .69 * a3F
				.iw), tc.fillRect(Math.floor(.7 * a3F.t - .5), 0, 2, Math.floor(a3F.iw)), vp.zw ? (eR = Math.floor(.02 * a3F.t), vp = Math.floor(.025 * a3F.t), lm = Math.floor(.85 * a3F.t - eR - .5 * vp), ln = Math.floor(.25 * a3F.iw), a38 = Math
				.floor(a3F.iw) - 2 * ln, tc.fillRect(lm, ln, eR, a38), tc.fillRect(lm + eR + vp, ln, eR, a38)) : function() {
				var t = Math.floor(.46 * a3F.iw),
					iw = Math.floor(.23 * a3F.iw),
					eR = Math.floor(.85 * a3F.t - .5 * t + t / 12),
					eT = Math.floor(.5 * a3F.iw - iw);
				tc.beginPath(), tc.moveTo(eR, eT), tc.lineTo(eR + t, eT + iw), tc.lineTo(eR, eT + (iw << 1)), tc.fill()
			}(), tc.fillRect(0, 0, Math.floor(a3F.t), 2), tc.fillRect(0, 0, 2, Math.floor(a3F.iw)), tc.fillRect(0, Math.floor(a3F.iw) - 2, Math.floor(a3F.t), 2), tc.fillRect(Math.floor(a3F.t - 2), 0, 2, Math.floor(a3F.iw))
	}

	function a3X(z) {
		return 5 === z ? "Normal" : "" + a3I[z]
	}
	this.zw = !1, this.dI = function() {
		a1.gV && (a3J = 5, this.zw = !1, a3H = !1, a3F = new pZ([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a3K = function() {
		return a3I[a3J]
	}, this.tY = function() {
		return a3F.eT
	}, this.a1G = function(a39) {
		return !!a1.gV && a3F.eR + a3F.t > am.t - a39 - bR.gap
	}, this.resize = function() {
		a1.gV && (a3F.resize(), a3F.eT -= (bZ.zy() - 1) * bR.gap, font = b1.p1.qD(0, .3 * a3F.iw), (h4 = document.createElement("canvas")).width = Math.floor(a3F.t), h4.height = Math.floor(a3F.iw), (tc = h4.getContext("2d", {
			alpha: !0
		})).font = font, b1.p1.textAlign(tc, 1), b1.p1.textBaseline(tc, 1), l7(this))
	}, this.xV = function(a3L) {
		0 === a1.vH || i.tw() || a3L !== a1.lp && (a1.lp = a3L, bW.resize(), bU.dQ = !0, a1.gV) && (a3G = bU.du + 2e3, l7(this))
	}, this.gZ = function(eR, eT) {
		if (!a1.gV) return !1;
		if (eR < a3F.eR || eT < a3F.eT || eR > a3F.eR + a3F.t) return a3H && function(vp, eR, eT) {
			var eK = a3I.length,
				a38 = Math.floor(.5 * a3F.iw),
				iw = eK * a38,
				lm = Math.floor(Math.floor(a3F.eR) + .3 * a3F.t - .5),
				iw = Math.floor(Math.floor(a3F.eT) - iw),
				t = Math.floor(.4 * a3F.t + 2.5);
			return a3H = !1, bU.dQ = !0, eR < lm || lm + t < eR || eT < iw || (a3J = a3O(0, Math.floor((eT - iw) / a38), eK - 1), l7(vp)), !0
		}(this, eR, eT);
		if ((eR -= a3F.eR) < .3 * a3F.t) a3H = !1, this.xV(!a1.lp);
		else {
			if (eR < .7 * a3F.t) return a3H = !a3H, bU.dQ = !0;
			this.xX(!1)
		}
		return !0
	}, this.xX = function(a3N) {
		2 === a1.vH ? (this.xV(!1), i.j(3)) : (a3H = !1, this.zw = !this.zw, this.zw ? (a9.gW && a9.xW(), m.n.setState(1)) : a3N || a9.a0h(), bU.dQ = !0, l7(this))
	}, this.xY = function() {
		this.zw = !1, a9.a0h(), bU.dQ = !0, l7(this)
	}, this.xD = function(eR, eT) {
		return !!a1.lp && (0 <= a9.gZ(eR, eT) || (a1.gV ? ((bU.du > a3G || !this.gZ(eR, eT)) && aF.gZ(eR, eT), bU.dQ = !0, a3G = bU.du + 2e3) : aF.gZ(eR, eT)), !0)
	}, this.iH = function() {
		a1.gV && a1.lp && bU.du > a3G - 1e3 && bU.du < a3G && (bU.dQ = !0)
	}, this.vP = function() {
		a1.gV && (this.zw = !1, bU.dQ = !0, l7(this))
	}, this.qv = function() {
		if (a1.gV) {
			if (a1.lp) {
				if (bU.du > a3G) return;
				if (bU.du > a3G - 1e3) return qw.globalAlpha = a3O(0, (1e3 - (bU.du - (a3G - 1e3))) / 1e3, 1), a3P(), void(qw.globalAlpha = 1)
			}
			a3P()
		}
	}
}

function c1() {
	var a3Y, a3Z, t, eR, eT, a3a, a3b;
	this.dI = function() {
		a3Y = new Array(2), a3Z = new Array(2), this.lr = !1, a3b = a3a = hm = hk = 0, hl = 1, this.resize()
	}, this.resize = function() {
		t = (t = Math.floor((m.n.uM() ? .072 : .0502) * am.p3)) < 8 ? 8 : t;
		for (var z = 1; 0 <= z; z--) a3Y[z] = document.createElement("canvas"), a3Y[z].width = t, a3Y[z].height = t, a3Z[z] = a3Y[z].getContext("2d", {
			alpha: !0
		});
		this.a32(),
			function() {
				for (var a3q = Math.floor(1 + t / 20), z = 1; 0 <= z; z--) a3Z[z].clearRect(0, 0, t, t), a3Z[z].fillStyle = p.mG, a3Z[z].beginPath(), a3Z[z].arc(t / 2, t / 2, t / 2 - a3q, 0, 2 * Math.PI), a3Z[z].fill(), a3Z[z].lineWidth = a3q,
					a3Z[z].fillStyle = p.mN, a3Z[z].strokeStyle = p.mN, a3Z[z].beginPath(), a3Z[z].arc(t / 2, t / 2, t / 2 - a3q, 0, 2 * Math.PI), a3Z[z].stroke(), tf(a3Z[z], 0, 0, t, a3q, .3, 0 === z)
			}()
	}, this.tX = function() {
		return -hk / hl
	}, this.tY = function() {
		return -hm / hl
	}, this.m2 = function(a3f, hS) {
		hk = hl * a3f - hS
	}, this.m3 = function(a3g, hT) {
		hm = hl * a3g - hT
	}, this.gZ = function(a3e, a1H) {
		return a1.lp || ! function(a3e, a1H) {
			return Math.pow(a3e - (eR + t / 2), 2) + Math.pow(a1H - (eT + t / 2), 2) < t * t / 4 || Math.pow(a3e - (eR + t / 2), 2) + Math.pow(a1H - (eT + 2 * t), 2) < t * t / 4
		}(a3e, a1H) || bY.db.data[8].value ? (a5.m5() && (this.lr = !0, a3a = a3e, a3b = a1H), !1) : a1H < eT + 1.25 * t ? this.wx(Math.floor(am.t / 2), Math.floor(am.iw / 2), -200) : this.wx(Math.floor(am.t / 2), Math.floor(am.iw / 2), 200)
	}, this.wu = function(a3e, a1H) {
		var a3h, a3i, hV, hY;
		return !a5.m5() || (a3h = hk, a3i = hm, hk += hV = a3a - a3e, hm += hY = a3b - a1H, aT.wu(hV, hY), this.a3j(), a3a = a3e, a3b = a1H, a3h !== hk) || a3i !== hm
	}, this.wx = function(kZ, ka, deltaY) {
		var ly;
		if (a5.m5()) {
			if (0 < deltaY) ly = (ly = 500 / (500 + deltaY)) < .5 ? .5 : ly;
			else {
				if (!(deltaY < 0)) return !1;
				ly = 2 < (ly = (500 - deltaY) / 500) ? 2 : ly
			}
			this.a3k(kZ, ka, ly), bU.dQ = !0
		}
		return !0
	}, this.a3k = function(eR, eT, e0) {
		var xr;
		e0 = xr = (xr = 1024 < (xr = e0) * hl ? 1024 / hl : xr) * hl < .125 ? .125 / hl : xr, aT.zoom(e0, eR, eT),
			function(xr, kZ, ka) {
				hl *= xr, hk = (hk + kZ) * xr - kZ, hm = (hm + ka) * xr - ka, aF.a3j()
			}(e0, eR, eT)
	}, this.a3j = function() {
		var a3n = am.t / 16,
			hC = 0,
			a3o = am.iw / 16,
			hD = 0;
		hk < -am.t + a3n && (hC = -am.t + a3n - hk), hk > hl * bH.eV - a3n && (hC = hl * bH.eV - a3n - hk), hm < -am.iw + a3o && (hD = -am.iw + a3o - hm), hm > hl * bH.eW - a3o && (hD = hl * bH.eW - a3o - hm), hk += hC, hm += hD, bP.m4(), aT.a3p(
			hC, hD)
	}, this.a32 = function() {
		eR = am.t - t - bR.gap, eT = Math.floor(am.iw / 2 - 1.25 * t)
	}, this.qv = function() {
		bY.db.data[8].value || (qw.drawImage(a3Y[0], eR, eT), qw.drawImage(a3Y[1], eR, Math.floor(eT + 3 * t / 2)))
	}
}

function c2() {
	var f0, ss, a3r, a3s, gap, a3t, a3u, a3v, a3w, a3x, a0b, a3y, gQ, a3z, a2B, a40, a41, a42;

	function a46() {
		a3s = Math.floor(.2 * (m.n.uM() ? .07 : .035) * am.p3), a3s = a1E(m.n.uM() ? 3 : 1, a3s);
		var a49 = am.t / (f0.length + gap);
		a3s = a3s < a49 ? a49 : a3s, a2B = Math.floor((1 - gap) * a3s), ss = 0, a4A()
	}

	function a4A() {
		ss = (ss = ss < -20 ? -20 : ss) > (f0.length - 15) * a3s ? (f0.length - 15) * a3s : ss, a3u = Math.floor(ss / a3s), a3v = (a3v = a3u + Math.floor(am.t / a3s)) > f0.length - 1 ? f0.length - 1 : a3v, a3u = (a3u = a3v < a3u ? a3v : a3u) < 0 ?
			0 : a3u;
		var kD = a3v;
		a3t = a3r / f0[kD];
		for (var z = a3v - 1; a3u <= z; z--) f0[z] > f0[kD] && (kD = z, a3t = a3r / Math.pow(f0[z], a3z))
	}

	function a4D(eR) {
		eR = Math.floor((ss + am.t - eR - gap * a3s) / a3s);
		return (eR = eR < -1 ? -1 : -1 === eR ? 0 : eR > f0.length - 1 ? -1 : eR) !== a3w && (a3w = eR, -1 === a40 && 0 === a3w && aG.a43 && (a40 = setInterval(a4E, 100)), 1)
	}

	function a4F(z) {
		var a21 = Math.floor(a3t * Math.pow(f0[z], a3z));
		qw.fillRect(ss + am.t - (z + 1) * a3s, am.iw - a21, a2B, a21)
	}

	function a4E() {
		var fr;
		0 !== (a3w = 8 === aN.wY() ? -1 : a3w) ? (a41 = (new Date).getTime(), clearInterval(a40), a40 = -1) : (fr = f0[1] / 864e3, -1 !== a41 && (fr += ((new Date).getTime() - a41) * f0[1] / 864e5, a41 = -1), 0 < fr && (f0[0] += Math.floor(fr), bU
			.dQ = !0))
	}
	this.a43 = !1, this.dI = function() {
		a41 = a40 = -1, a3w = -(a3z = 1), this.a44 = !1, gQ = 0, a3y = new Date, ss = 0, gap = .3, (a42 = []).push({
			fm: "Plateau A",
			eK: 0,
			d: 57
		}), a42.push({
			fm: "Max A",
			eK: 1,
			d: 1
		}), a42.push({
			fm: "Black Friday",
			eK: 15,
			d: 15
		}), a42.push({
			fm: "Max B",
			eK: 19,
			d: 19
		}), a42.push({
			fm: "Max C",
			eK: 44,
			d: 44
		}), a42.push({
			fm: "First Android Version",
			eK: 58,
			d: 58
		}), a42.push({
			fm: "Max D",
			eK: 67,
			d: 67
		}), a42.push({
			fm: "The iFrame Explosion",
			eK: 98,
			d: 99
		}), a42.push({
			fm: "The 155-Day Uptrend",
			eK: 58,
			d: 213
		}), a42.push({
			fm: "Max E",
			eK: 213,
			d: 213
		}), a42.push({
			fm: "Plateau B",
			eK: 214,
			d: 259
		}), a42.push({
			fm: "Turbulent Times",
			eK: 260,
			d: 344
		}), a42.push({
			fm: "Max F",
			eK: 262,
			d: 262
		}), a42.push({
			fm: "Max G",
			eK: 282,
			d: 282
		}), a42.push({
			fm: "Max H",
			eK: 333,
			d: 333
		}), a42.push({
			fm: "The 19-Day Downtrend",
			eK: 283,
			d: 301
		}), a42.push({
			fm: "Plateau C",
			eK: 345,
			d: 385
		}), a42.push({
			fm: "The Alliance Ascent",
			eK: 386,
			d: 395
		}), a42.push({
			fm: "Max I",
			eK: 395,
			d: 395
		}), a42.push({
			fm: "First iOS Version",
			eK: 411,
			d: 411
		}), a42.push({
			fm: "Plateau D",
			eK: 396,
			d: 453
		}), a42.push({
			fm: "The TikTok Revolution",
			eK: 454,
			d: 470
		}), a42.push({
			fm: "Max J",
			eK: 456,
			d: 456
		}), a42.push({
			fm: "Max K",
			eK: 472,
			d: 472
		}), a42.push({
			fm: "Max L",
			eK: 478,
			d: 478
		}), a42.push({
			fm: "YT Drew",
			eK: 471,
			d: 485
		}), a42.push({
			fm: "Plateau E",
			eK: 485,
			d: 600
		}), a42.push({
			fm: "Uptrend A",
			eK: 600,
			d: 613
		}), a42.push({
			fm: "Max M",
			eK: 613,
			d: 613
		}), a42.push({
			fm: "Downtrend A",
			eK: 614,
			d: 635
		}), a42.push({
			fm: "Plateau F",
			eK: 636,
			d: 737
		}), a42.push({
			fm: "End of Record",
			eK: 738,
			d: 738
		}), f0 = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
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
		a3r = Math.floor(.15 * am.iw), a3x = (a3x = Math.floor((m.n.uM() ? .018 : .0137) * am.p3)) < 2 ? 2 : a3x, a0b = b1.p1.qD(1, a3x), a46()
	}, this.a47 = function(a48) {
		var z;
		for (this.a43 = !0, z = 0; z < a48.length; z++) f0.unshift(a48[z]);
		a46(), bU.dQ = !0
	}, this.a4B = function() {
		a4A()
	}, this.wu = function(eR, eT) {
		eT > am.iw - .6 * a3r ? this.a44 ? eR !== gQ && (ss += eR - gQ, gQ = eR, a4A(), a4D(eR), this.a44 = -1 !== a3w, bU.dQ = !0) : a4D(eR) && (bU.dQ = !0) : this.xJ()
	}, this.xJ = function() {
		-1 !== a3w && (this.a44 = !1, a3w = -1, bU.dQ = !0)
	}, this.wx = function(eR, deltaY) {
		-1 !== a3w && (ss += Math.floor(deltaY), a4A(), a4D(eR), bU.dQ = !0)
	}, this.gZ = function(eR, eT) {
		this.wu(eR, eT), -1 !== a3w && (gQ = eR, this.a44 = !0)
	}, this.xK = function() {
		-1 !== a3w && (this.a44 = !1)
	}, this.qv = function() {
		qw.fillStyle = p.mQ;
		for (var a4H, month, dv, qG, a4K, a4L, ln, a4M, a4N, z = a3v; a3u <= z; z--) a4F(z);
		this.a43 && 0 === a3u && (qw.fillStyle = p.mr, a4F(0)), -1 !== a3w && (qw.fillStyle = p.mP, a4F(a3w)), -1 !== a3w && (qw.font = a0b, b1.p1.textBaseline(qw, 2), (dv = new Date).setTime(a3y.getTime() - 1e3 * a3w * 60 * 60 * 24), month =
			"month", a4H = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dv), a4H = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dv)), a4H = a4H + ", " + dv.getUTCDate() + " " + month + " " + dv.getFullYear(), month = 1 === f0[a3w] ? L(84) : L(85), month = b1.w8.zC(f0[a3w]) + " " + month, dv = Math.floor(qw.measureText(a4H).width), qG = Math
			.floor(qw.measureText(month).width), a4K = Math.floor(.5 * (dv + a3x)), a4L = (a4L = ss + am.t - (a3w + 1) * a3s) < a4K ? a4K : a4L > am.t - a4K ? am.t - a4K : a4L, ln = am.iw - Math.floor(a3t * Math.pow(f0[a3w], a3z)), a4M = Math
			.floor(1.1 * a3x), a4N = ln > am.iw - a4M ? am.iw - a4M : ln, qw.fillStyle = p.mK, qw.fillRect(am.t - qG - a3x, a4N - a4M, qG + a3x, a4M), qw.fillRect(a4L - a4K, am.iw - a4M, dv + a3x, a4M), qw.fillStyle = p.mN, b1.p1.textAlign(
				qw, 2), qw.fillText(month, Math.floor(am.t - .5 * a3x), a4N),
			function(ln, a4M) {
				for (var qF, kF = -1, o2 = f0.length - a3w - 1, z = a42.length - 1; 0 <= z; z--) o2 >= a42[z].eK && o2 <= a42[z].d && (-1 === kF || a42[z].d - a42[z].eK < a42[kF].d - a42[kF].eK) && (kF = z); - 1 !== kF && (qF = Math.floor(qw
					.measureText(a42[kF].fm).width), qw.fillStyle = p.mK, qw.fillRect(am.t - qF - a3x, ln, qF + a3x, a4M), qw.fillStyle = p.mN, qw.fillText(a42[kF].fm, Math.floor(am.t - .5 * a3x), ln + a4M))
			}(a4N - 2 * a4M, a4M), b1.p1.textAlign(qw, 1), qw.fillText(a4H, a4L, am.iw), qw.strokeStyle = p.mR, qw.lineWidth = 1, qw.beginPath(), qw.moveTo(0, ln), qw.lineTo(am.t, ln), qw.closePath(), qw.stroke())
	}
}

function c3() {
	var a0b, t, eT, a4P, a4Q, h4, tc, a24, ym, a4R, a4S, a4T, a4U;
	this.eR = 0, this.iw = 0, this.dI = function() {
		a4Q = a1.tH, a4S = "rgba(0,100,0,0.8)", a4T = "rgba(150,0,0,0.8)", a24 = !(a4R = !0), ym = aU.gN[a1.e4], this.resize()
	}, this.resize = function() {
		t = Math.floor((m.n.uM() ? .305 : .24) * am.p3), this.iw = Math.floor(.5 + .13 * t), t = Math.floor(6 * this.iw), a0b = b1.p1.qD(1, Math.floor(.8 * this.iw)), a4U = Math.floor(.5 * this.iw), bH.sR.font = a0b, eT = bR.gap, a4P = Math
			.floor(1 + .13 * this.iw), (h4 = document.createElement("canvas")).width = t, h4.height = this.iw, (tc = h4.getContext("2d", {
				alpha: !0
			})).font = a0b, b1.p1.textBaseline(tc, 1), b1.p1.textAlign(tc, 1), this.a4V()
	}, this.a2S = function() {
		return m.n.uM() && am.t < 1.2 * am.iw
	}, this.a32 = function() {
		this.a2S() ? this.eR = am.t - t - bR.gap : this.eR = Math.floor(aI.a4W() + (am.t - aI.a4W() - aJ.t - t) / 2 - .5 * bR.gap)
	}, this.l6 = function() {
		a24 && (a24 = !1, this.a4V())
	}, this.a4V = function() {
		tc.clearRect(0, 0, t, this.iw), tc.fillStyle = a4R ? a4S : a4T, tc.fillRect(0, 0, t, this.iw), tc.fillStyle = p.mP, this.a4X(), this.a4Y(), tc.fillStyle = aU.gN[a1.e4] >= aS.j8(a1.e4) ? p.mo : p.mN, tc.fillText(b1.w8.zC(ym), Math.floor(
			t / 2), a4U), tc.fillStyle = p.mN, tc.fillRect(0, 0, t, 1), tc.fillRect(0, 0, 1, this.iw), tc.fillRect(0, this.iw - 1, t, 1), tc.fillRect(t - 1, 0, 1, this.iw)
	}, this.a4X = function() {
		var ef = bU.jP() % 100,
			ef = (ef = 9 - bA.em(ef -= ef % 10, 10), Math.floor(ef * (this.iw - a4P) / 9));
		tc.fillRect(0, ef, a4P, this.iw - ef), tc.fillRect(t - a4P, ef, a4P, this.iw - ef)
	}, this.a4Y = function() {
		tc.fillRect(a4P, this.iw - a4P, Math.floor((t - 2 * a4P) * aU.gN[a1.e4] / a4Q), a4P)
	}, this.iH = function() {
		var fr = a1.e4;
		b1.ff.gY(fr) && (fr = aU.gN[fr] - aU.yl[fr], ym !== fr ? (a4Q = a1E(fr, a4Q), a4R = ym < fr && 10 <= fr, ym = fr, a24 = !0) : bU.jP() % 10 == 9 && (a24 = !0))
	}, this.qv = function() {
		0 === aU.lK[a1.e4] || a1.gh || 2 === aU.yf[a1.e4] || qw.drawImage(h4, this.eR, eT)
	}
}

function c4() {
	var a4Z, a4a, a4b, a4c, a4d, a4e, a4f, a4g, a4h, a4i, a4j, a4k, a4l, a4m, a4n, a4o, a4p, a4q, a4r, a4s, a4t, a4u, position, a4v, a4w, a4x, a4y, a4z = 1,
		a50 = 1,
		a51 = "";
	var leaderboardHasChanged = true;
	this.playerPos = a1.e4;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jD[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jD[a1.e4]);
	}

	function a53() {
		a4f.clearRect(0, 0, a4Z, a2i),
			a4f.fillStyle = p.n2,
			a4f.fillRect(0, 0, a4Z, a4k),
			a4f.fillStyle = p.mJ,
			a4f.fillRect(0, a4k, a4Z, a2i - a4k);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jD[a1.e4]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a4u = -1;
		if (__fx.leaderboardFilter.enabled && a4u >= __fx.leaderboardFilter.filteredLeaderboard.length) a4u = -1;
		playerPos >= position && a55(playerPos - position, p.mi),
			0 !== jD[a1.e4] && 0 === position && a55(0, p.n7),
			-1 !== a4u && a55(a4u, p.mO),
			a4f.fillStyle = p.mJ,
			//console.log("drawing", a4u),
			a4f.clearRect(0, a2i - __fx.leaderboardFilter.tabBarOffset, a4Z, __fx.leaderboardFilter.tabBarOffset);
		a4f.fillRect(0, a2i - __fx.leaderboardFilter.tabBarOffset, a4Z, __fx.leaderboardFilter.tabBarOffset);
		a4f.fillStyle = p.mN,
			a4f.fillRect(0, a4k, a4Z, 1),
			a4f.fillRect(0, a2i - __fx.leaderboardFilter.tabBarOffset, a4Z, 1),
			__fx.leaderboardFilter.drawTabs(a4f, a4Z, a2i - __fx.leaderboardFilter.tabBarOffset, p.mi),
			a4f.fillRect(0, 0, a4Z, bR.uP),
			a4f.fillRect(0, 0, bR.uP, a2i),
			a4f.fillRect(a4Z - bR.uP, 0, bR.uP, a2i),
			a4f.fillRect(0, a2i - bR.uP, a4Z, bR.uP), a4f.font = a4a, b1.p1.textBaseline(a4f, 1), b1.p1.textAlign(a4f, 1), a4f.fillText(a51, Math.floor((a4Z + a4k - 22) / 2), Math.floor(a4i + a4b / 2));
		__fx.playerList.drawButton(a4f, 12, 12, a4k - 22);
		var ed, fs = playerPos < position + a4d - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a4d)
				position = (result.length > a4d ? result.length : a4d) - a4d;
			//if (position >= result.length) position = result.length - 1;
			for (a4f.font = a4c, b1.p1.textAlign(a4f, 0), ed = a4d - fs; 0 <= ed; ed--) {
				const pos = result[ed + position];
				if (pos !== undefined)
					a56(kk[pos]), a57(ed, pos, kk[pos]);
			}
			for (b1.p1.textAlign(a4f, 2), ed = a4d - fs; 0 <= ed; ed--) {
				const pos = result[ed + position];
				if (pos !== undefined)
					a56(kk[pos]), a58(ed, kk[pos]);
			}
		} else {
			for (a4f.font = a4c, b1.p1.textAlign(a4f, 0), ed = a4d - fs; 0 <= ed; ed--)
				a56(kk[ed + position]), a57(ed, ed + position, kk[ed + position]);
			for (b1.p1.textAlign(a4f, 2), ed = a4d - fs; 0 <= ed; ed--)
				a56(kk[ed + position]), a58(ed, kk[ed + position]);
		}
		2 == fs && (a56(a1.e4), b1.p1.textAlign(a4f, 0), a57(a4d - 1, jD[a1.e4], a1.e4), b1.p1.textAlign(a4f, 2), a58(a4d - 1, a1.e4)), 0 === position && (fs = .7 * a4l / aP.get(4).height, a4f.setTransform(fs, 0, 0, fs, Math.floor(a4m + .58 * a4l +
			.5 * fs * aP.get(4).width), Math.floor(a4i + a4b + .4 * a4l)), a4f.imageSmoothingEnabled = !0, a4f.drawImage(aP.get(4), -Math.floor(aP.get(4).width / 2), -Math.floor(aP.get(4).height / 2)), a4f.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a56(player) {
		a1.iS && (a4f.fillStyle = bV.a5A[bV.vc[bV.eI[player]]])
	}

	function a55(z, a5B) {
		a4f.fillStyle = a5B, z = a4d - 1 < z ? a4d - 1 : z;
		a5B = Math.floor((z === a4d - 1 ? 2 : 0 === z ? 1.15 : 1) * a4l), a5B = z === a4d - 2 ? Math.floor(a4k + 9.15 * a4l) - Math.floor(a4k + 8.15 * a4l) : a5B;
		a4f.fillRect(0, Math.floor(a4k + (z + (0 === z ? 0 : .15)) * a4l), a4Z, a5B)
	}

	function a57(a5D, vx, z) {
		a4f.fillText(a4q[vx], a4m, Math.floor(a4i + a4b + (a5D + .5) * a4l)), 1 === aU.yf[z] && (a4f.font = "italic " + a4c);
		vx = Math.floor(a4i + a4b + (a5D + .5) * a4l);
		a4f.fillText(aU.a1N[z], a4n, vx), 0 !== aU.yf[z] && (a4f.font = a4c), z < a1.jS && 2 !== aU.yf[z] || a4f.fillRect(a4n, vx + .35 * a4z, a4p[z], Math.max(1, .1 * a4z))
	}

	function a58(a5D, z) {
		a4f.fillText(aU.g9[z], a4o, Math.floor(a4i + a4b + (a5D + .5) * a4l))
	}

	function a5M(eT) {
		return (eT -= bR.gap + a4k) < 0 ? Math.floor(eT / a4l) - 1 : eT < (a4d - 1) * a4l ? Math.floor(eT / a4l) : eT < a2i - a4k ? a4d - 1 : (eT -= a2i - a4k, a4d + Math.floor(eT / a4l))
	}

	function uO(eR, eT) {
		return eR >= bR.gap && eR < bR.gap + a4Z && eT >= bR.gap && eT < bR.gap + a2i
	}
	this.dI = function() {
			var z;
			for (a4w = !1, a4y = a4x = a4v = 0, a4u = -1, a4d = m.n.uM() ? 6 : 10, a50 = (position = 0) === (a50 = bY.db.data[11].value) ? 10 : 1 === a50 ? 5 : 1, a4t = !1, a4r = new Uint16Array(a4d + 1), a4s = new Uint32Array(a4d + 1), a4h = a1.eH,
				kk = new Uint16Array(a4h), jD = new Uint16Array(a4h), z = a4h - 1; 0 <= z; z--) kk[z] = z, jD[z] = z;
			this.resize(!0), a4p = new Uint16Array(a1.eH);
			var a52 = Math.floor(a4Z - a4n - a4m - a4g);
			for (a4q = new Array(a1.eH), a4f.font = a4c, z = a1.eH - 1; 0 <= z; z--) a4q[z] = z + 1 + ".", aU.a1N[z] = b1.tc.yL(aU.wA[z], a4c, a52), a4p[z] = Math.floor(a4f.measureText(aU.a1N[z]).width);
			a53()
		}, this.resize = function(dI) {
			if (a2i = m.n.uM() ? (a4Z = Math.floor(.335 * am.p3), Math.floor(a4d * a4Z / 8)) : (a4Z = Math.floor(.27 * am.p3), Math.floor(a4d * a4Z / 10)), a4Z = Math.floor(.97 * a4Z), (a4e = document.createElement("canvas")).width = a4Z, a4e
				.height = a2i, a4f = a4e.getContext("2d", {
					alpha: !0
				}), a4i = .025 * a4Z, a4b = .16 * a4Z, a4j = 0 * a4Z, a4k = Math.floor(.45 * a4i + a4b), a4l = (a2i - a4b - 2 * a4i - a4j) / a4d,
				a4e.height = a2i += a4l, __fx.leaderboardFilter.tabBarOffset = Math.floor(a4l * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a2i - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a4Z,
				a4a = b1.p1.qD(1, Math.floor(.55 * a4b)), a4z = Math.floor((m.n.uM() ? .67 : .72) * a4l), a4c = b1.p1.qD(0, a4z), a4f.font = a4c, a4m = Math.floor(.04 * a4Z), a4n = Math.floor((m.n.uM() ? .195 : .18) * a4Z), a4g = Math.floor(a4f
					.measureText("00920600").width), a4f.font = a4a, a4o = a4Z - a4m, !dI) {
				a4f.font = a4c;
				for (var z = a1.eH - 1; 0 <= z; z--) a4p[z] = Math.floor(a4f.measureText(aU.a1N[z]).width);
				a53()
			}
			a51 = b1.tc.yL(L(86), a4a, .96 * a4Z)
		}, this.a4W = function() {
			return a4Z
		}, this.l6 = function(bd, a54) {
			(a54 || a4t && (bd || bU.jP() % a50 == 0)) && (a4t = !1, a53())
		}, this.iH = function() {
			! function() {
				for (var ed = a4h - 1; 0 <= ed; ed--) 0 === aU.lK[kk[ed]] && ! function(ed) {
					var a5K = kk[ed];
					a4h--;
					for (var z = ed; z < a4h; z++) kk[z] = kk[z + 1], jD[kk[z]] = z;
					kk[a4h] = a5K, jD[kk[a4h]] = a4h
				}(ed)
			}();
			for (var a5I, m5 = a4h - 1, ed = 0; ed < m5; ed++) aU.g9[kk[ed]] < aU.g9[kk[ed + 1]] && (a5I = kk[ed], kk[ed] = kk[ed + 1], kk[ed + 1] = a5I, jD[kk[ed]] = ed, jD[kk[ed + 1]] = ed + 1);
			! function() {
				for (var dv = a4t, fs = (a4t = !0, jD[a1.e4] >= a4d - 1 ? a4d - 2 : a4d - 1), z = fs; 0 <= z; z--)
					if (a4r[z] !== kk[z] || a4s[z] !== aU.g9[kk[z]]) return;
				(fs != a4d - 2 || a4r[a4d] === jD[a1.e4] && a4s[a4d] === aU.g9[a1.e4]) && (a4t = dv)
			}();
			for (var z = a4d - 1; 0 <= z; z--) a4r[z] = kk[z], a4s[z] = aU.g9[kk[z]];
			a4r[a4d] = jD[a1.e4], a4s[a4d] = aU.g9[a1.e4];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gZ = function(eR, eT) {
			return !!uO(eR, eT) && ((__fx.utils.isPointInRectangle(eR, eT, bR.gap + 12, bR.gap + 12, a4k - 22, a4k - 22) && __fx.playerList.display(aU.wA), true) &&
				!(eT - bR.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eR - bR.gap)) && (a4v = bU.du, a4w = !0, a4x = a4y = a5M(eT), b8.xZ() && (eR = a3O(-1, a4y, a4d), a4u !== (eR = eR === a4d ? -
					1 : eR)) && (a4u = eR, a53(), bU.dQ = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a53(), bU.dQ = !0;
		},
		this.wu = function(eR, eT) {
			if (__fx.utils.isPointInRectangle(eR, eT, bR.gap + 12, bR.gap + 12, a4k - 22, a4k - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a53(), bU.dQ = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a53(), bU.dQ = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eR, eT, bR.gap, bR.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eR - bR.gap
				)) return;
			var dv, a5L = a5M(eT);
			return a4w ? (dv = position, (position = a3O(0, position += a4x - a5L, a1.eH - a4d)) !== dv && (a5L = (a5L = a3O(-1, a4x = a5L, a4d)) !== a4d && uO(eR, eT) ? a5L : -1, a4u = a5L, a53(), bU.dQ = !0), !0) : (a5L = (a5L = a3O(-1, a5L,
				a4d)) === a4d || !uO(eR, eT) || b8.xZ() ? -1 : a5L, a4u !== a5L && (a4u = a5L, a53(), bU.dQ = !0))
		}, this.xK = function(eR, eT) {
			if (!a4w) return !1;
			a4w = !1;
			var a5L = a5M(eT);
			var isEmptySpace = false;
			return b8.xZ() && -1 !== a4u && (a4u = -1, a53(), bU.dQ = !0), bU.du - a4v < 350 && a4y === a5L && -1 !== (a5L = (a5L = a3O(-1, a5L, a4d)) !== a4d && uO(eR, eT) ? a5L : -1) && (eR = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kk[__fx.leaderboardFilter.filteredLeaderboard[a5L + position] ?? (isEmptySpace = true, jD[a1.e4])]) : kk[a5L + position]), a5L === a4d - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jD[a1.e4]) >=
				position + a4d - 1 && (eR = a1.e4), !isEmptySpace && a1.iS && __fx.donationsTracker.displayHistory(eR, aU.wA, a1.js), 0 !== aU.lK[eR] && !isEmptySpace) && a5.lg(eR, 800, !1, 0), !0
		}, this.wx = function(eR, eT, deltaY) {
			var a5N;
			return !(a4w || a1.lp || (a5N = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !uO(eR, eT)) || (eR = (eR = a3O(-1, a5M(eT), a4d)) === a4d || b8.xZ() ? -1 : eR, 0 < deltaY ? position < a1.eH - a4d && (position += Math.min(a1.eH - a4d -
				position, a5N), a4u = eR, a53(), bU.dQ = !0) : 0 < position && (position -= Math.min(position, a5N), a4u = eR, a53(), bU.dQ = !0), 0))
		}, this.qv = function() {
			qw.drawImage(a4e, bR.gap, bR.gap)
		}
}

function c5() {
	var h4, tc, eR, eT, a21, a5O, gap, a5P, fontSize, a5Q, a5R, a5S, a5T, a5U, a5V, a5W, a5X, a5Y;

	function a5c() {
		tc.clearRect(0, 0, aJ.t, aJ.iw), tc.fillStyle = p.mK, tc.fillRect(0, 0, aJ.t, aJ.iw), tc.fillStyle = p.me, e0 = 0 < a5W ? a5W : Math.sqrt(a5T[4] / 1e4), tc.fillRect(0, aJ.iw - a21 - 1, Math.floor(e0 * aJ.t), a21), tc.fillStyle = p.mN, tc
			.fillRect(0, 0, aJ.t, 1), tc.fillRect(0, 0, 1, aJ.iw), tc.fillRect(aJ.t - 1, 0, 1, aJ.iw), tc.fillRect(0, aJ.iw - 1, aJ.t, 1), tc.fillRect(0, aJ.iw - a21 - 1, aJ.t, 1);
		for (var e0, a5e, dv = 0, z = 0; z < a5S.length; z++) a5U[z] ? (b1.p1.textAlign(tc, 0), a5e = Math.floor((a5O - a21 + 2 * a5P) * (z - dv + 1) / (a5S.length + 1) - .7 * a5P), tc.fillText(a5S[z], gap, a5e), b1.p1.textAlign(tc, 2), 5 === z &&
			0 !== aU.lK[a1.e4] && aU.gN[a1.e4] >= aS.j8(a1.e4) ? (tc.fillStyle = p.n5, tc.fillText(a5a(z), aJ.t - gap, a5e), tc.fillStyle = p.mN) : tc.fillText(a5a(z), aJ.t - gap, a5e)) : dv++
	}

	function a5a(z) {
		return z < 3 ? a5T[z].toString() : 3 === z || 4 === z || 5 === z ? b1.w8.zH(a5T[z] / 100, 2) : z < 7 ? b1.w8.zC(a5T[z]) : z === 7 ? aJ.a5f(a5T[7]) : z === 8 ? __fx.utils.getMaxTroops(aU.g9, a1.e4) : __fx.utils.getDensity(a1.e4)
	}

	function a5Z() {
		aU.g9[a1.e4] !== a5T[6] && (a5T[6] = aU.g9[a1.e4], a5Q++)
	}
	this.dI = function() {
		a5W = a5X = 0, (a5R = new Array(8))[0] = L(87), a5R[1] = a1.js ? L(88) : L(89), a5R[2] = L(90), a5R[3] = L(91), a5R[4] = L(92), a5R[5] = L(93, 0, "Interest"), a5R[6] = L(94), a5R[7] = L(95),
			a5R.push("Max Troops", "Density"), // add a5R
			(a5S = new Array(a5R.length)).fill(""), (a5T = new Array(a5R.length))[0] = a1.js ? 0 : a1.jS, a5T[1] = a1.js ? aZ.jT : a1.jp, a5T[2] = a1.vJ, a5T[3] = 0, a5T[4] = bA.em(1e4 * aU.g9[0], a1.jC), a5T[5] = 700, a5T[6] = 0, a5Z(), a5T[7] =
			0, a5V = a5a(6), a5U = new Array(a5R.length);
		for (var z = a5R.length - 1; 0 <= z; z--) a5U[z] = !0;
		a5Y = 0, a5Y = a1.js ? (a5U[0] = !1, a5U[2] = !1, a5U[3] = !1, 3) : (a5U[3] = !1, 1), a5Q = 0, this.resize()
	}, this.resize = function() {
		this.t = Math.floor((m.n.uM() ? .1646 : .126) * 1.25 * am.p3), this.iw = Math.floor(1.18 * this.t), a21 = Math.floor(.04 * this.t), gap = Math.floor(.035 * this.t), a5P = .04 * this.t, a5O = this.iw, this.iw -= Math.floor(a5Y * (this.iw -
			2 * a21) / a5R.length), fontSize = Math.floor(.7 * (a5O - a21) / a5R.length);
		var a0b = b1.p1.qD(1, fontSize);
		(h4 = document.createElement("canvas")).width = this.t, h4.height = this.iw,
			function(a0b, t) {
				for (var z = 0; z < a5S.length; z++) a5S[z] = b1.tc.yL(a5R[z], a0b, t)
			}((tc = h4.getContext("2d", {
				alpha: !0
			})).font = a0b, .575 * this.t), b1.p1.textBaseline(tc, 1), tc.lineWidth = 1, this.zS(), this.a32(), aH.a32(), a5c()
	}, this.a32 = function() {
		eR = am.t - this.t - bR.gap
	}, this.a5d = function() {
		eT = bR.gap
	}, this.zS = function() {
		eT = bR.gap + (aH.a2S() && 0 !== aU.lK[a1.e4] && !a1.gh ? aH.iw + bR.gap : 0)
	}, this.l6 = function(bd) {
		(bd || 100 <= a5Q) && (a5Q = 0, a5c())
	}, this.a0F = function() {
		return a5T[7]
	}, this.a5f = function(value) {
		var kD = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kD) / 1e3);
		return value < 10 ? kD + ":0" + value : kD + ":" + value
	}, this.iH = function() {
		var a5o, per;
		a5U[0] && a1.vK - a1.vJ !== a5T[0] && (a5T[0] = a1.vK - a1.vJ, a5Q++), aZ.jT - a5T[0] !== a5T[1] && (a5T[1] = aZ.jT - a5T[0], a5Q++), this.kx(), (a5o = aS.a5p(a1.e4)) !== a5T[5] && (a5T[5] = a5o, a5Q++), a5Z(), a5T[7] += bU.a5q, a5o =
			a5a(7), a5V !== a5o && (a5V = a5o, a5Q += 100), a5o = a1.iS ? bW.vs() : aU.g9[kk[0]], per = bA.em(1e4 * a5o, a1.jC), a5T[3] = a5o, a5T[4] !== per && (a5Q++, a5T[4] = per), 8 === a1.jq && function() {
				for (var z = 0; z < 2; z++)
					if (!b1.ff.gY(z)) return bG.uw.vG(), 1;
				return
			}() || a5T[3] < a1.jC || ! function() {
				for (var z = aZ.jT - 1; 0 <= z; z--)
					if (0 < aU.fl[aZ.jV[z]].length) return;
				return 1
			}() || bG.uw.vG()
	}, this.kx = function() {
		a5U[2] && a1.vJ !== a5T[2] && (a5T[2] = a1.vJ, a5Q++)
	}, this.a5r = function(z) {
		var qT, a5s, dv;
		return 2 !== a1.vH && (z % 2 == 1 && (aI.l6(1, 1), bU.dQ = !0), z === a1.zb ? (a5W = 0, a5c(), !1) : (-1 !== z || 0 !== a5X) && (a5s = a5W, a5W = a1.gV ? z / a1.zb : (dv = performance.now(), 0 <= z && (qT = dv - 392 * z, a5X = 0 === z ||
			qT < a5X ? qT : a5X), 1 < (a5W = (dv - a5X) / (392 * a1.zb)) ? 1 : a5W), a5c(), a5W !== a5s))
	}, this.qv = function() {
		qw.drawImage(h4, eR, eT)
	}
}

function c6() {
	var tw, a5t, t, iw, a38, a5u, a5v, a2T, h4, lX, a5w;

	function tY() {
		return Math.floor((am.t - t) / 2) < aE.iw + 2 * bR.gap ? am.iw - iw - 4 * bR.gap - aE.iw : am.iw - iw - 2 * bR.gap
	}
	this.dI = function() {
		a5w = tw = !1, a38 = .61, a5u = .07, a5v = .09, lX = a2T = iw = 0
	}, this.resize = function() {
		var tc, lm, ef, a61, a62, a0g;
		tw && (t = a5x(t = m.n.uM() ? Math.floor(.69 * am.p3) : Math.floor(.5 * am.p3), a1E(am.t - 2 * bR.gap, 10)), t = a5x(t, Math.floor(3.57 * a1E(am.iw - 2 * bR.gap, 3))), iw = Math.floor(.28 * t), (h4 = document.createElement("canvas"))
			.width = t, h4.height = iw, tc = h4.getContext("2d", {
				alpha: !0
			}), lm = Math.floor(1 + iw / 40), tc.clearRect(0, 0, t, iw), tc.fillStyle = p.mK, tc.fillRect(lm, lm, t - 2 * lm, iw - 2 * lm), tc.lineJoin = "bevel", tc.lineWidth = 2 * lm, tc.strokeStyle = p.mN, tc.strokeRect(lm, lm, t - 2 * lm,
				iw - 2 * lm), tc.imageSmoothingEnabled = !1, ef = aP.get(a5t), a61 = ef.width, a0g = (1 === a5t ? .85 : 21 === a5t ? .666 : .9) * a38 * iw / (a62 = ef.height), tc.setTransform(a0g, 0, 0, a0g, Math.floor((t - a0g * a61) / 2),
				Math.floor((iw - a0g * a62) / 2)), tc.drawImage(ef, 0, 0), tc.setTransform(1, 0, 0, 1, Math.floor(t - a5v * iw - a5u * iw - lm), Math.floor(lm + a5u * iw)),
			function(tc, eK) {
				tc.lineWidth = Math.floor(1 + iw / 80), tc.strokeStyle = p.mN, tc.beginPath(), tc.moveTo(0, 0), tc.lineTo(eK, eK), tc.moveTo(0, eK), tc.lineTo(eK, 0), tc.stroke()
			}(tc, Math.floor(a5v * iw)), tc.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(en, a5z, a2v, a60) {
		tw || a60 && a5w || (a5t = a2v ? 21 : en ? 1 : 2, tw = a5w = !0, this.resize(), a8.qS(), aE.a2s(), lX = bU.du, a2T = a5z ? 1 : 0)
	}, this.iH = function() {
		!tw || 1 <= a2T || (a2T = 1 < (a2T += 5e-4 * (bU.du - lX)) ? 1 : a2T, lX = bU.du, bU.dQ = !0)
	}, this.gZ = function(eR, eT) {
		return !(!tw || a2T <= 0 || (eR -= Math.floor((am.t - t) / 2), eT -= tY(), eR < 0) || eT < 0 || t < eR || iw < eT || (t - iw / 3 < eR && eT < iw / 3 && (tw = !1, bU.dQ = !0), 0))
	}, this.qv = function() {
		!tw || a2T <= 0 || (qw.globalAlpha = a2T, qw.drawImage(h4, Math.floor((am.t - t) / 2), tY()), qw.globalAlpha = 1)
	}
}

function d7() {
	var a64 = [0, 0],
		a65 = [0, 0];

	function a68(o2) {
		return 3 !== a64[o2] && 1 !== a65[o2] && (a65[o2] = 1, a64[o2]++, bY.pg.ph(119, (a64[0] << 2) + a64[1]), 1)
	}
	this.a66 = new a67, this.dI = function() {
		var en = bY.db.data[119].value;
		a64[0] = en >> 2, a64[1] = 3 & en
	}, this.zn = function() {
		this.a66.dI()
	}, this.iH = function() {
		this.a66.iH()
	}, this.a0G = function() {
		a68(0) && aA.a1K(L(96))
	}, this.a0H = function() {
		a68(1) && aA.a1K(L(97))
	}
}

function a67() {
	var a69;
	this.dI = function() {
		a69 = !1
	}, this.iH = function() {
		var fr;
		if (function() {
				if (!a69) {
					if (bU.jP() % 30 != 9) return;
					if (!b1.ff.ke(90)) return;
					a69 = !0
				}
				return 1
			}() && (! function() {
				var ou = aA.a1f(956);
				if (ou) {
					if (b1.ff.kI(ou.player)) return 1;
					aA.a0N(956, 0)
				}
				return
			}() && (-1 === (fr = (a1.iS ? function() {
				for (var id = bW.ki(), eK = aZ.jT, tj = aZ.jV, eI = bV.eI, z = 0; z < eK; z++) {
					var fr = tj[z];
					if (eI[fr] !== id) return fr
				}
				return -1
			} : function() {
				for (var a6G = aZ.jT, jU = aZ.jV, a6H = jD, z = 0; z < a6G; z++) {
					var fr = jU[z];
					if (0 !== a6H[fr]) return fr
				}
				return -1
			})()) ? ! function() {
				var ou = aA.a1f(957);
				if (ou && ou.a1A) {
					if (aQ.eB(ou.a1A.e6 << 2)) return 1;
					aA.a0N(957, 0)
				}
				return
			}() : (aA.vg(0, L(98, [aU.a1N[fr]]), 956, fr, p.mN, p.mK, -1, !0), 0)))) {
			var eK = ab.i4.kU;
			if (0 === eK) ab.i4.ks();
			else
				for (var db = ab.i4.db, z = 0; z < eK; z++) {
					var e6 = db[z];
					if (aQ.eB(e6 << 2)) return void aA.vg(0, L(99, [bB.eS(e6), bB.eU(e6)]), 957, 0, p.mN, p.mK, -1, !0, void 0, {
						ed: 1,
						e6: e6
					})
				}
		}
	}
}

function d8() {
	this.a6I = new a6J, this.dI = function() {
		this.a6I.resize()
	}
}

function a6J() {
	this.resize = function() {
		var z, a6K = document.head.querySelector("style#ss");
		if (a6K)
			for (z = a6K.sheet.cssRules.length - 1; 0 <= z; z--) a6K.sheet.deleteRule(0);
		else(a6K = document.createElement("style")).id = "ss", document.head.appendChild(a6K);
		var a3G = "::-webkit-scrollbar",
			a6L = b1.p1.pC(bR.yU),
			gy = b1.p1.pC(Math.max(b1.p1.pk(.012), 8));
		try {
			a6K.sheet.insertRule(a3G + "{width:" + gy + ";height:" + gy + ";}", a6K.sheet.cssRules.length), a6K.sheet.insertRule(a3G + "-thumb{background-color:white;}", a6K.sheet.cssRules.length), a6K.sheet.insertRule(a3G +
				"-track{background:" + p.mJ + ";}", a6K.sheet.cssRules.length), a6K.sheet.insertRule(a3G + "-track:horizontal{border-top:" + a6L + " solid white;}", a6K.sheet.cssRules.length), a6K.sheet.insertRule(a3G +
				"-track:vertical{border-left:" + a6L + " solid white;}", a6K.sheet.cssRules.length), a6K.sheet.insertRule(a3G + "-button{display:none;}", a6K.sheet.cssRules.length)
		} catch (d) {
			for (console.log("error 3425: " + d), z = a6K.sheet.cssRules.length - 1; 0 <= z; z--) a6K.sheet.deleteRule(0)
		}
	}
}

function d6() {
	this.a6M = !1, this.mD = !1, this.zW = !1, this.a6N = [0, 0, 0, 0], this.a6O = function() {
		var lm, ln, m0, m1;
		this.zW = this.zW || this.mD, (this.mD || this.a6M && this.zW) && (lm = bP.a6P[0], ln = bP.a6P[1], m0 = bP.a6P[2], m1 = bP.a6P[3], lm = lm < this.a6N[0] ? this.a6N[0] : lm, ln = ln < this.a6N[1] ? this.a6N[1] : ln, m0 = m0 > this.a6N[2] ?
			this.a6N[2] : m0, m1 = m1 > this.a6N[3] ? this.a6N[3] : m1, this.mD = !1, this.a6M = !1, lm === this.a6N[0] && ln === this.a6N[1] && m0 === this.a6N[2] && m1 === this.a6N[3] ? this.zX() : lm <= m0 && ln <= m1 && zp.putImageData(
				zq, 0, 0, lm, ln, m0 - lm + 1, m1 - ln + 1))
	}, this.zX = function() {
		this.zW && this.a6N[2] >= this.a6N[0] && this.a6N[3] >= this.a6N[1] && zp.putImageData(zq, 0, 0, this.a6N[0], this.a6N[1], this.a6N[2] - this.a6N[0] + 1, this.a6N[3] - this.a6N[1] + 1), this.zW = !1
	}, this.vS = function() {
		this.a6N[2] >= this.a6N[0] && this.a6N[3] >= this.a6N[1] && zp.putImageData(zq, 0, 0, this.a6N[0], this.a6N[1], this.a6N[2] - this.a6N[0] + 1, this.a6N[3] - this.a6N[1] + 1), this.zW = !1
	}, this.dI = function() {
		var eR, eT;
		this.a6M = !1, this.mD = !1, this.zW = !1, this.a6N[0] = bH.eV, this.a6N[1] = bH.eW, this.a6N[2] = this.a6N[3] = 0;
		loop: for (eR = 1; eR < bH.eV - 1; eR++)
			for (eT = bH.eW - 2; 1 < eT; eT--)
				if (1 === a6Q[aQ.t8(eR, eT) + 2]) {
					this.a6N[0] = eR;
					break loop
				} loop: for (eT = 1; eT < bH.eW - 1; eT++)
			for (eR = bH.eV - 2; 1 < eR; eR--)
				if (1 === a6Q[aQ.t8(eR, eT) + 2]) {
					this.a6N[1] = eT;
					break loop
				} loop: for (eR = bH.eV - 2; 0 < eR; eR--)
			for (eT = bH.eW - 2; 1 < eT; eT--)
				if (1 === a6Q[aQ.t8(eR, eT) + 2]) {
					this.a6N[2] = eR;
					break loop
				} loop: for (eT = bH.eW - 2; 0 < eT; eT--)
			for (eR = bH.eV - 2; 1 < eR; eR--)
				if (1 === a6Q[aQ.t8(eR, eT) + 2]) {
					this.a6N[3] = eT;
					break loop
				}
	}
}

function L(value, a6R, rI) {
	var oj = "number" == typeof value ? ay.a6S[value] : value;
	if (rI && ay.a6T() && (oj = rI), a6R)
		for (var eK = a6R.length, z = 0; z < eK; z++)
			for (var ed = 0; ed < 3; ed++) oj = oj.replace("{" + (10 * ed + z) + "}", a6R[z]);
	return oj
}

function bl() {
	this.data = new a6U;
	var a6V = (new a6W).L84,
		a6X = (this.a6S = a6V, !1);
	this.dI = function() {
		var eK, f0;
		a6X = !1, "en" !== bY.db.data[12].value.split("-")[0].toLowerCase() ? bY.db.data[12].value === bY.db.data[145].value && 0 < bY.db.data[146].value && (eK = bY.db.data[146].value, (f0 = bY.pI.rO(eK, !1)).length === eK) && !!b1.pB.y6(f0) &&
			function(f0) {
				var eK = f0.length,
					a6d = bY.pI.rO(eK, !0);
				if (eK !== a6d.length) return !1;
				if (!b1.pB.y6(a6d)) return !1;
				for (var kD = a6V.length, a48 = new Array(kD), a6e = kD === eK, fm = Math.min(eK, kD), z = 0; z < kD; z++)
					if (a48[z] = a6V[z], z < eK && a6d[z] === a48[z]) a48[z] = f0[z];
					else {
						a6e = !1;
						for (var ee = 0; ee < fm; ee++)
							if (a6d[ee] === a48[z]) {
								a48[z] = f0[ee];
								break
							}
					} return ay.a6S = a48, a6e
			}(f0) || (a6X = !0) : ay.a6S = a6V
	}, this.dK = function() {
		bV.dJ(), a2.dJ(), bT.dJ(), bS.dJ(), aB.dI(), ai.dJ()
	}, this.a6T = function() {
		return this.a6S === a6V || !a6V.length
	}, this.a6f = function() {
		var a6g;
		a6X && (a6X = !1, 0 !== a6V.length) && (a6g = bY.db.data[12].value, ap.a6h.a6i(0, a6g.slice(0, 20)))
	}, this.a6j = function(f0) {
		f0.length === a6V.length && (this.a6S = f0, bY.pg.ph(145, bY.db.data[12].value), bY.pg.ph(146, f0.length), bY.pI.rU(f0, !1), bY.pI.rU(a6V, !0), 0 === aN.wY()) && 5 === i.q7 && i.ky.a6k()
	}
}

function a6U() {
	var f0 = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a6l = function() {
		for (var a6m = [], eK = f0.length, z = 0; z < eK; z++) a6m.push(f0[z]);
		for (eK++, a6m.unshift(bY.db.data[12].rI), z = 1; z < eK; z++)
			if (a6m[z] === a6m[0]) {
				a6m.splice(z, 1), eK--;
				break
			} try {
			if ("undefined" == typeof Intl) return a6m;
			for (z = 0; z < eK; z++) {
				var oj = new Intl.DisplayNames([a6m[z]], {
					type: "language"
				}).of(a6m[z]);
				oj !== a6m[z] && (a6m[z] = a6m[z] + ": " + oj)
			}
		} catch (d) {
			console.log("error 3646: " + d)
		}
		return a6m
	}, this.a6o = function(a6p) {
		for (var oj = bY.db.data[12].value, eK = a6p.length, z = 0; z < eK; z++)
			if (oj === a6p[z].split(":")[0]) return z;
		return 0
	}
}

function a6W() {
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
		"Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Language", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links",
		"ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms",
		"Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy",
		"Check out our Privacy Policy at:", "Source Account", "Target Account", "Replay Error", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer",
		"Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Territorial Income", "Interest Income", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Additional Income", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "White", "Red", "Green", "Blue", "Yellow",
		"Magenta", "Cyan", "Black", "Ship launched!", "Ship selected!", "Ship on the way!"
	]
}

function dO() {
	var eR, eT, iw, a6q, a6r, a6s, a6t, a6u, a6v, t, yb, a6w;
	this.tw = !1, this.dI = function(oj, a6x) {
		if (1 === m.id && 13 <= m.eo && m.eo < 18) return a6x ? void(yb = oj) : yb !== oj ? void 0 : void m.rM.saveString(200, oj);
		a6x && (yb = oj, (a6w = document.createElement("a")).appendChild(document.createTextNode(yb)), this.tw = !0, a6w.title = yb, a6w.target = "_blank", a6w.href = yb, a6w.style.textAlign = "center", a6w.style.color = p.mN, a6w.style
			.position = "absolute", a6w.style.padding = "0px", a6w.style.margin = "0px", this.resize(), document.body.appendChild(a6w), bU.dQ = !0)
	}, this.qS = function() {
		return !(!this.tw || (document.body.removeChild(a6w), this.tw = !1))
	}, this.gZ = function(hS, hT) {
		return !!this.tw && ((hS < eR || hT < eT || eR + t < hS || eT + iw < hT || eR + t - a6q < hS && hT < eT + a6q) && (bU.dQ = !0, this.tw = !1, document.body.removeChild(a6w)), !0)
	}, this.resize = function() {
		var a0b, a6y;
		this.tw && (a6u = Math.floor(.8 * (m.n.uM() ? am.t > am.iw ? .6 : .55 : .4) * am.p3), a6q = Math.floor(.15 * a6u), a6r = Math.floor(.35 * a6q), a6s = Math.floor(.5 * a6q), a6t = Math.floor(2.5 * a6s), iw = a6q + a6r + 3 * a6s, a0b = b1.p1
			.qD(1, a6r / am.p7), a6v = Math.floor(am.p7 * aD.measureText(yb, a0b)), a6y = t = (a6u < a6v ? a6v : a6u) + 2 * a6t, t = Math.min(t, am.t - 2 * (m.n.uM() ? 2 : 1) * bR.gap), a0b = b1.p1.qD(1, t / a6y * a6r / am.p7), a6v = Math
			.floor(am.p7 * aD.measureText(yb, a0b)), eR = Math.floor((am.t - t) / 2), eT = Math.floor((am.iw - iw) / 2), a6w.style.font = a0b, a6w.style.top = Math.floor((eT + 1.4 * a6s + a6q) / am.p7) + "px", a6w.style.left = Math.floor((
				eR + (t - a6v) / 2) / am.p7) + "px")
	}, this.qv = function() {
		this.tw && (qw.fillStyle = p.mK, qw.fillRect(eR, eT + a6q, t, iw - a6q), qw.fillStyle = p.nF, qw.fillRect(eR, eT, t, a6q), qw.fillStyle = p.mN, qw.lineWidth = bR.uP, qw.strokeStyle = p.mN, qw.strokeRect(eR, eT, t, iw), qw.fillRect(eR,
			eT + a6q, t, bR.uP), qw.font = b1.p1.qD(1, .48 * a6q), b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.fillText("You are leaving Territorial.io!", Math.floor(eR + (t - .5 * a6q) / 2), Math.floor(eT + .55 * a6q)), a9.a0n(
			Math.floor(eR + t - .8 * a6q), Math.floor(eT + .25 * a6q), Math.floor(.5 * a6q)), qw.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dM() {
	var gap, a5R, eR = [0, 0, 0, 0, 0],
		eT = [0, 0, 0, 0, 0],
		ly = [1, 1, 1, 1, 1],
		en = [!0, !0, !0, !1, !1],
		ef = (this.f5 = [!0, !0, !0, !1, !1], null);
	this.a6z = function(y9, a70) {
		ef = y9, en = a70, a5R = [b9.a71, b9.wT, b9.a72, b9.a72, b9.a73], this.dI()
	}, this.dI = function() {
		if (aP.qX()) {
			var z, qF = Math.floor((m.n.uM() ? .261 : .195) * am.p3),
				qG = Math.floor(.9 * qF),
				a38 = Math.floor(.17 * qG);
			if (gap = m.n.uM() ? 2 * bR.gap : bR.gap, ly[0] = qF / ef[0].width, ly[1] = qG / ef[1].width, ly[2] = a38 / ef[2].height, ly[3] = a38 / ef[3].height, ly[4] = a38 / ef[4].height, ly[2] *= 1.7, ly[3] *= 1.07, eR[0] = gap, eR[1] = gap,
				eR[2] = gap, eR[3] = gap, eR[4] = Math.floor(2 * gap + ly[3] * ef[3].width), eT[0] = gap, eT[1] = eT[0] + gap + ly[0] * ef[0].height, eT[2] = eT[1] + gap + ly[1] * ef[1].height, eT[3] = eT[2] + gap + ly[2] * ef[2].height, eT[4] =
				eT[3], !en[0])
				for (z = 0; z < 5; z++) eT[z] -= ly[0] * ef[0].height + gap;
			if (!en[1])
				for (z = 2; z < 5; z++) eT[z] -= ly[1] * ef[1].height + gap
		}
	}, this.tw = function() {
		return !(7 === aN.wY() && m.n.uM())
	}, this.gZ = function(hS, hT) {
		if (ef && this.tw())
			for (var z = en.length - 1; 0 <= z; z--)
				if (en[z] && this.f5[z] && eR[z] < hS && eT[z] < hT && hS < eR[z] + ly[z] * ef[z].width && hT < eT[z] + ly[z] * ef[z].height) return i.j(9, i.q7, new a74("You are leaving Territorial.io.", b1.p1.ya(a5R[z]))), !0;
		return !1
	}, this.qv = function() {
		if (ef && this.tw()) {
			var z;
			for (qw.imageSmoothingEnabled = !0, z = 0; z < 5; z++) en[z] && this.f5[z] && (qw.setTransform(ly[z], 0, 0, ly[z], eR[z], eT[z]), qw.drawImage(ef[z], 0, 0));
			qw.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function c7() {
	var a75, a76, a77;

	function a7C(z) {
		var button = aL.pX[z],
			eR = button.eR,
			eT = button.eT,
			t = button.t,
			iw = button.iw;
		qw.fillStyle = button.a7A, qw.fillRect(eR, eT, t, iw), z === a75 && (qw.fillStyle = a77, qw.fillRect(eR, eT, t, iw)), qw.lineWidth = bR.uP, qw.strokeStyle = a76, qw.strokeRect(eR, eT, t, iw),
			function(button) {
				var eR = button.eR,
					eT = button.eT,
					t = button.t,
					iw = button.iw;
				b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.font = button.font, qw.fillStyle = a76, qw.fillText(button.a1r, Math.floor(eR + t / 2), Math.floor(eT + iw / 2 + .1 * button.fontSize))
			}(button)
	}
	this.t = 0, this.iw = 0, this.eT = 0, this.gap = 0, this.dI = function() {
		a75 = -1, a76 = p.mN, a77 = "rgba(255,255,255,0.16)", this.pX = new Array(7), this.iw = Math.floor((m.n.uM() ? .123 : .093) * am.p3), this.t = Math.floor((m.n.uM() ? 3.96 : 4.2) * this.iw), this.gap = Math.floor(.025 * this.t);
		var a78 = Math.floor(.26 * this.iw),
			a79 = b1.p1.qD(1, a78);
		this.pX[0] = {
			eR: 0,
			eT: 0,
			t: Math.floor(.6 * this.t - this.gap / 2),
			iw: this.iw,
			a1r: "Multiplayer",
			font: a79,
			a7A: "rgba(22,88,22,0.8)",
			fontSize: a78
		}, a78 = Math.floor(.18 * this.iw), a79 = b1.p1.qD(1, a78), this.pX[1] = {
			eR: 0,
			eT: 0,
			t: this.t - this.pX[0].t - this.gap,
			iw: this.iw,
			a1r: "Single Player",
			font: a79,
			a7A: "rgba(22,88,88,0.8)",
			fontSize: a78
		}, this.pX[2] = {
			eR: 0,
			eT: 0,
			t: this.t,
			iw: Math.floor(.3 * this.iw),
			a1r: "",
			font: this.pX[1].font,
			a7A: "rgba(100,0,0,0.8)",
			fontSize: this.pX[1].fontSize
		}, this.pX[3] = {
			eR: 0,
			eT: 0,
			t: this.t,
			iw: this.iw,
			a1r: "Back",
			font: this.pX[0].font,
			a7A: "rgba(0,0,0,0.8)",
			fontSize: this.pX[0].fontSize
		}, this.pX[4] = {
			eR: 0,
			eT: 0,
			t: this.t,
			iw: Math.floor(.3 * this.iw),
			a1r: "The game was updated!",
			font: this.pX[1].font,
			a7A: "rgba(100,0,0,0.8)",
			fontSize: this.pX[1].fontSize
		}, this.pX[5] = {
			eR: 0,
			eT: 0,
			t: this.pX[0].t,
			iw: Math.floor(.8 * this.iw),
			a1r: "Reload",
			font: this.pX[0].font,
			a7A: "rgba(0,100,0,0.8)",
			fontSize: this.pX[0].fontSize
		}, this.pX[6] = {
			eR: 0,
			eT: 0,
			t: this.pX[1].t,
			iw: this.pX[5].iw,
			a1r: "Back",
			font: this.pX[0].font,
			a7A: "rgba(0,0,0,0.8)",
			fontSize: this.pX[0].fontSize
		}, this.a4B()
	}, this.a4B = function() {
		this.eT = Math.floor(.54 * am.iw), this.pX[0].eR = Math.floor(.5 * am.t - .5 * this.t), this.pX[1].eR = this.pX[0].eR + this.pX[0].t + this.gap, this.pX[2].eR = this.pX[3].eR = this.pX[0].eR, this.pX[4].eR = this.pX[5].eR = this.pX[0].eR,
			this.pX[6].eR = this.pX[1].eR, this.pX[0].eT = Math.floor(.54 * am.iw), this.pX[1].eT = this.pX[0].eT, this.pX[2].eT = Math.floor((am.iw - this.pX[2].iw - this.pX[3].iw - this.gap) / 2), this.pX[3].eT = this.pX[2].eT + this.pX[2].iw +
			this.gap, this.pX[4].eT = Math.floor((am.iw - this.pX[4].iw - this.pX[5].iw - this.gap) / 2), this.pX[5].eT = this.pX[6].eT = this.pX[4].eT + this.pX[4].iw + this.gap
	}, this.a7B = function() {
		a7C(0), a7C(1)
	}, this.a7D = function() {
		a7C(2), a7C(3)
	}, this.a7E = function() {
		a7C(4), a7C(5), a7C(6)
	}, this.wu = function(eR, eT, l6) {
		var z = -1;
		return 0 === aN.wY() ? z = this.xP(eR, eT, 0, 2) : 3 === aN.wY() ? z = this.xP(eR, eT, 3, 1) : 5 === aN.wY() && (z = this.xP(eR, eT, 5, 2)), a75 !== z && (a75 = z, l6) && (bU.dQ = !0), -1 !== z && (aG.xJ(), !0)
	}, this.xP = function(eR, eT, a7F, size) {
		for (var z = a7F; z < a7F + size; z++)
			if (eR >= this.pX[z].eR && eT >= this.pX[z].eT && eR <= this.pX[z].eR + this.pX[z].t && eT <= this.pX[z].eT + this.pX[z].iw) return z;
		return -1
	}
}

function a7H() {
	function a7O(a5B) {
		return a5B < 0 ? 0 : 255 < a5B ? 255 : Math.floor(a5B)
	}
	this.t = 0, this.iw = 0, this.tw = !1, this.a7I = 0, this.gap = 0, this.a7J = 0, this.a6q = 0, this.a7K = 0, this.a7L = 0, this.a7M = 0, this.colors = null, this.dI = function() {
		this.tw = !0, this.a7I = 0, this.resize()
	}, this.resize = function() {
		this.tw && (am.t < 1.4 * am.iw ? this.t = Math.floor((m.n.uM() ? .94 : .43) * am.t) : (this.iw = Math.floor((m.n.uM() ? .88 : .43) * am.iw), this.t = Math.floor(1.4 * this.iw)), this.iw = this.t / 1.4, this.gap = this.t / 32, this.a6q =
			Math.floor(.25 * this.iw), this.a7K = (this.iw - this.a6q - 3 * this.gap) / 2, this.a7L = this.t - 3 * this.gap - this.a7K, this.a7M = (this.iw - this.a6q - 4 * this.gap) / 3)
	}, this.a7N = function() {
		this.colors = [
			[0, 0, 0],
			[0, 0, 0]
		];
		var oj = bY.db.data[103].value.split("");
		if (oj.length < 6)
			for (var ee = 2; 0 <= ee; ee--) this.colors[0][ee] = a7O(256 * Math.random());
		else
			for (var z = 2; 0 <= z; z--) this.colors[0][z] = a7O(4 * (10 * parseInt(oj[2 * z]) + parseInt(oj[2 * z + 1])));
		this.a7P()
	}, this.a7Q = function() {
		return [bA.em(this.colors[0][0], 4), bA.em(this.colors[0][1], 4), bA.em(this.colors[0][2], 4)]
	}, this.wx = function(kZ, ka, deltaY) {
		var lm = (am.t - this.t) / 2;
		ka -= (am.iw - this.iw) / 2 + this.a6q, (kZ -= lm) < 0 || ka < 0 || kZ >= this.t || ka >= this.iw - this.a6q || (lm = Math.floor(3 * ka / (this.iw - this.a6q)), this.colors[this.a7J][lm] = a7O(this.colors[this.a7J][lm] + (deltaY < 0 ? 1 :
			-1) * Math.max(Math.abs(.05 * deltaY), 1)), bU.dQ = !0)
	}, this.gZ = function(kZ, ka) {
		this.a7I = 0;
		var lm = (am.t - this.t) / 2;
		return ka -= (am.iw - this.iw) / 2, (kZ -= lm) < 0 || ka < 0 || kZ >= this.t - 1 || ka >= this.iw - 1 || kZ > this.t - (.4 * this.a6q + 3 * this.gap) && ka < this.a6q ? (this.tw = !1, !(bU.dQ = !0)) : kZ < this.gap || ka < this.gap + this
			.a6q || kZ >= this.t || ka >= this.iw - this.gap || (kZ < this.gap + this.a7K ? (ka < this.gap + this.a6q + this.a7K && 0 !== this.a7J && (this.a7J = 0, bU.dQ = !0), !0) : kZ < this.gap + this.a7K || (kZ -= 2 * this.gap + this.a7K,
				ka < this.gap + this.a6q + this.a7M ? (this.a7I = 1, this.colors[this.a7J][0] = a7O(256 * kZ / this.a7L), bU.dQ = !0) : ka < 2 * this.gap + this.a6q + this.a7M || (ka < 2 * this.gap + this.a6q + 2 * this.a7M ? (this.a7I = 2,
					this.colors[this.a7J][1] = a7O(256 * kZ / this.a7L), bU.dQ = !0) : !(ka >= 3 * this.gap + this.a6q + 2 * this.a7M) || (this.a7I = 3, this.colors[this.a7J][2] = a7O(256 * kZ / this.a7L), bU.dQ = !0))))
	}, this.a7P = function() {
		for (var ee = 2; 0 <= ee; ee--) this.colors[0][ee] = a7O(this.colors[0][ee])
	}, this.a7R = function() {
		for (var en, oj = "", z = 0; z < 3; z++)(en = bA.em(this.colors[0][z], 4)) < 10 && (oj += "0"), oj += en.toString();
		return oj
	}, this.wu = function(kZ) {
		0 !== this.a7I && (kZ -= 2 * this.gap + this.a7K + (am.t - this.t) / 2, this.colors[this.a7J][this.a7I - 1] = a7O(256 * kZ / this.a7L), bU.dQ = !0)
	}, this.xI = function() {
		0 < this.a7I && (this.a7I = 0, this.a7P(), bY.pg.ph(103, this.a7R()), bU.dQ = !0)
	}, this.qv = function() {
		var lm = (am.t - this.t) / 2,
			ln = (am.iw - this.iw) / 2;
		qw.setTransform(1, 0, 0, 1, lm, ln), qw.fillStyle = p.mK, qw.fillRect(0, this.a6q, this.t, this.iw - this.a6q), qw.fillStyle = p.mW, qw.fillRect(0, 0, this.t, this.a6q), qw.fillStyle = p.mN, qw.lineWidth = bR.uP, qw.strokeStyle = p.mN, qw
			.strokeRect(-1, -1, this.t + 2, this.iw + 2), qw.fillRect(0, this.a6q, this.t, bR.uP), qw.font = b1.p1.qD(1, .31 * this.a6q), b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 1), qw.fillText("Choose Your Nation's Color!", Math.floor((
				this.t - this.gap - .4 * this.a6q) / 2), Math.floor(.55 * this.a6q)), this.a7S(0), qw.lineWidth = bR.uP, this.a7T(0), this.a7T(1), this.a7T(2), a9.a0n(Math.floor(lm + this.t - .4 * this.a6q - this.gap), Math.floor(ln + .3 * this
				.a6q), Math.floor(.4 * this.a6q)), qw.setTransform(1, 0, 0, 1, 0, 0)
	}, this.a7S = function(z) {
		var h7 = this.colors[z][0],
			qT = this.colors[z][1],
			z = this.colors[z][2];
		qw.fillStyle = "rgb(" + h7 + "," + qT + "," + z + ")", qw.fillRect(this.gap, this.a6q + this.gap, this.a7K, 2 * this.a7K + this.gap), qw.lineWidth = bR.uP, qw.strokeStyle = p.mN, qw.strokeRect(this.gap, this.a6q + this.gap, this.a7K, 2 *
			this.a7K + this.gap), qw.fillStyle = h7 + qT + z < 306 && qT < 150 ? p.mN : p.mE, qw.font = b1.p1.qD(1, .32 * this.a7M), b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.rotate(-Math.PI / 2), qw.fillText("National Color",
			Math.floor(-1.5 * this.gap - this.a6q - this.a7K), Math.floor(this.gap + .5 * this.a7K)), qw.rotate(Math.PI / 2)
	}, this.a7T = function(z) {
		qw.fillStyle = "rgb(" + (0 === z ? 150 : 2 === z ? 30 : 0) + "," + (1 === z ? 130 : 2 === z ? 30 : 0) + "," + (2 === z ? 220 : 0) + ")", qw.fillRect(2 * this.gap + this.a7K, this.a6q + this.gap + z * (this.gap + this.a7M), Math.floor(this
			.colors[this.a7J][z] * this.a7L / 255), this.a7M), qw.strokeStyle = p.mN, qw.strokeRect(2 * this.gap + this.a7K, this.a6q + this.gap + z * (this.gap + this.a7M), this.a7L, this.a7M), qw.fillStyle = p.mN, qw.font = b1.p1.qD(1,
			.32 * this.a7M), b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 0), qw.fillText((0 === z ? "Red: " : 1 === z ? "Green: " : "Blue: ") + this.colors[0][z].toString(), 3 * this.gap + this.a7K, Math.floor(this.a6q + this.gap + z * (
			this.gap + this.a7M) + .53 * this.a7M))
	}
}

function c8() {
	var a7U, a7V, a21, a2B, a30, a7W, a7X, a7Y, a7Z, a0b, fontSize, lX, a7a, a7c, a7b = 0;

	function a7f() {
		return ap.ky.a7g[(a7a + a7b) % ap.ky.a7h]
	}

	function a7d() {
		a7a++, lX = bU.du, ap.ky.a7i(a7f(), 4) && (a7c = !0, ap.a7j.a7k(a7f()))
	}

	function a7l() {
		0 === a7a ? g.wg(3249) : 1 === a7a && __fx.customLobby.isActive() ? (g.wg(3249), __fx.customLobby.setActive(false)) : (a7a === ap.ky.a7h - 1 && (a7a = -1), a7d())
	}

	function a7s(eT, a3s, a7r) {
		var lm = Math.floor((am.t - a2B) / 2) + a7X,
			m0 = lm + Math.floor(a7r * (a2B - 2 * a7X));
		qw.lineWidth = a3s, qw.beginPath(), qw.moveTo(lm, eT), qw.lineTo(m0, eT), qw.lineTo(Math.floor(lm - a7X + a7r * a2B), eT + a21), qw.lineTo(lm - a7X, eT + a21), qw.closePath()
	}
	this.dI = function() {
		aN.setState(6), a7U = 0, a7V = 1, a7Y = "rgba(0,220,120,0.4)", a7Z = "rgba(0,0,0,0.8)", this.resize(), bU.dQ = !0, a7a = 0, a7c = !1, a7d()
	}, this.resize = function() {
		a2B = Math.floor((m.n.uM() ? .5 : .25) * am.p3), a30 = a2B + 12, a21 = Math.floor(.125 * a2B), a7X = 3 * a21, a7W = Math.floor(.225 * a2B), fontSize = Math.floor(.3 * a21), a0b = b1.p1.qD(0, fontSize)
	}, this.a7e = function(ed) {
		a7b = ed
	}, this.wZ = function(wV) {
		wV === a7f() && (a7c = !1, a7l())
	}, this.a7m = function(wV) {
		6 !== aN.wY() || a7c || (lX = bU.du, a7c = !0)
	}, this.gZ = function(eR, eT) {
		var lm = Math.floor((am.t - a30) / 2),
			ln = Math.floor(.5 * (am.iw - bR.gap - a21 - a7W)) + a21 + bR.gap;
		return lm < eR && eR < lm + a30 && ln < eT && eT < ln + a7W && (this.xc(), aL.wu(eR, eT, !1), !0)
	}, this.xc = function() {
		ap.ky.wj(3260), __fx.customLobby.setActive(false), i.ky.wi()
	}, this.iH = function() {
		6 === aN.wY() && (a7c ? bU.du > lX + 12e3 && g.wg(3250) : bU.du > lX + 12e3 && a7l(), 100 < (a7U += .07 * a7V * (a7U < 16 ? 5 + a7U : 84 < a7U ? 105 - a7U : 17)) ? (a7U = 100, a7V = -1) : a7U < 0 && (a7U = 0, a7V = 1), a7Y = "rgba(0," +
			Math.floor(190 - 1.9 * a7U) + "," + Math.floor(120 - 1.2 * a7U) + "," + (.4 + .004 * a7U) + ")", a7Z = "rgba(0," + Math.floor(1.9 * a7U) + "," + Math.floor(1.2 * a7U) + "," + (.8 - .004 * a7U) + ")", bU.dQ = !0)
	}, this.qv = function() {
		var eR = Math.floor((am.t - a30) / 2),
			eT = Math.floor(.5 * (am.iw - bR.gap - a21 - a7W));
		! function(title, eT, a3s, a7r) {
			qw.fillStyle = a7Z, a7s(eT, a3s, 1), qw.fill(), qw.fillStyle = a7Y, a7s(eT, a3s, a7r), qw.fill(), qw.strokeStyle = p.mN, a7s(eT, a3s, 1), qw.stroke(),
				function(a7u, eT) {
					b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.font = a0b, qw.fillStyle = p.mN, qw.fillText(a7u, Math.floor(.5 * am.t), Math.floor(eT + .58 * a21))
				}(title, eT)
		}(L(100), eT, 3, a7U / 100),
		function(eR, eT, t, iw, a1r) {
			qw.fillStyle = p.mI, qw.fillRect(eR, eT, t, iw), qw.lineWidth = 3, qw.strokeStyle = p.mN, qw.strokeRect(eR, eT, t, iw);
			var eK = Math.floor(.3 * iw);
			b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.font = b1.p1.qD(0, eK), qw.fillStyle = p.mN, qw.fillText(a1r, Math.floor(eR + t / 2), Math.floor(eT + iw / 2 + .1 * eK))
		}(eR, eT + a21 + bR.gap, a30, a7W, L(101))
	}
}

function c9() {
	var dt = 0;
	this.dI = function() {
		aL.dI(), dt = 0
	}, this.setState = function(a7v) {
		dt = a7v
	}, this.wY = function() {
		return dt
	}, this.a7w = function() {
		this.setState(8), ai.wk(), i.rf()
	}, this.xT = function(d) {
		if (!bH.sT) return !1;
		if (!(bU.du < 400)) {
			if ("Enter" === d.key || "Escape" === d.key) {
				if (this.a7x()) return !0;
				if ("Enter" === d.key) {
					if (0 === dt) return !0;
					if (7 === dt) return !0
				}
			}
			return !1
		}
	}, this.a7y = function() {
		bO.resize()
	}, this.a7x = function() {
		return !!bO.qS()
	}, this.gZ = function(eR, eT) {
		!bH.sT || bO.gZ(eR, eT) || 6 === dt && aM.gZ(eR, eT) || 2 === dt && aO.gZ(eR, eT) || bN.gZ(eR, eT) || (aG.gZ(eR, eT), 0 !== dt && 7 === dt && ai.gZ(eR, eT))
	}, this.wu = function(eR, eT) {
		if (!aG.a44) {
			if (2 === dt && aO.wu(eR, eT)) return void aG.xJ();
			if (aL.wu(eR, eT, !0)) return
		}
		aG.wu(eR, eT)
	}, this.click = function(eR, eT) {
		aG.xK()
	}, this.wx = function(eR, eT, deltaY) {}, this.a7z = function() {
		aL.a4B(), 0 !== dt && 7 === dt && ai.resize(), bU.dQ = !0
	}, this.qv = function() {
		8 !== dt && 10 !== dt && (qw.imageSmoothingEnabled = !0, this.tW(), 0 !== dt && (aG.qv(), aB.qv(), this.a80(), bN.qv()), 0 !== dt && (2 === dt ? aO.qv() : 6 === dt ? aM.qv() : 7 === dt && ai.qv()), bO.qv(), i.qv())
	}, this.tW = function() {
		var a82, a81;
		if (__fx.makeMainMenuTransparent) qw.clearRect(0, 0, am.t, am.iw);
		else bH.sT ? (a81 = am.t / bH.eV, a82 = am.iw / bH.eW, qw.setTransform(a81 = a82 < a81 ? a81 : a82, 0, 0, a81, Math.floor((am.t - a81 * bH.eV) / 2), Math.floor((am.iw - a81 * bH.eW) / 2)), qw.drawImage(bH.sV, 0, 0), qw.setTransform(1, 0,
			0, 1, 0, 0), qw.fillStyle = p.mI) : qw.fillStyle = p.mE, qw.fillRect(0, 0, am.t, am.iw)
	}, this.a80 = function() {
		var eT = Math.floor(.3 * am.iw),
			h4 = aP.a83("territorial.io"),
			h3 = (h3 = 1.75 * am.iw / h4.width) * h4.width < .98 * am.t ? .98 * am.t / h4.width : h3,
			eR = (qw.globalAlpha = .15, qw.imageSmoothingEnabled = !1, Math.floor(.5 * (am.t - h3 * h4.width))),
			eR = Math.floor(eR / h3),
			eT = Math.floor(eT - .5 * h4.height * h3),
			eT = Math.floor(eT / h3);
		qw.setTransform(h3, 0, 0, h3, eR, eT), qw.drawImage(h4, eR, eT), qw.setTransform(1, 0, 0, 1, 0, 0), qw.globalAlpha = 1, qw.imageSmoothingEnabled = !0
	}
}

function cb() {
	var a0, a86, a87, a88;
	this.a84 = 0, this.a85 = 0, this.dI = function() {
		var h4, ly;
		7 === aN.wY() && (a0 = b6.a0, a86 = 0, a87 = bU.du + 4500, a88 = ap.a1X.a89() ? 2 : 0, aN.setState(10), qw.imageSmoothingEnabled = !0, aN.tW(), h4 = aP.a83("loading"), ly = (m.n.uM() ? .396 : .25) * am.p3 / h4.width, qw.setTransform(ly,
			0, 0, ly, Math.floor((am.t - ly * h4.width) / 2), Math.floor((am.iw - ly * h4.height) / 2)), qw.imageSmoothingEnabled = !1, qw.drawImage(h4, 0, 0), qw.setTransform(1, 0, 0, 1, 0, 0))
	}, this.l4 = function() {
		0 < a88 && bU.du > a87 && (a88--, a87 += 4500, 0 === bU.a8A) && 0 === bU.jP() && (0 === a88 && ap.ky.wb < ap.ky.a8B && (ap.ky.wb += ap.ky.a8C), ap.ky.a7i(ap.ky.wb, 5))
	}, this.a8D = function() {
		var fr, z;
		return 10 === aN.wY() && (fr = b6.a0, z = b6.o2, ap.a1X.a8E(a0), a0 = null, b6.dI(fr), b6.o2 = z, !0)
	}, this.a8F = function() {
		10 === aN.wY() && 2 <= ++a86 && (ap.a1X.a8E(a0), a0 = null)
	}
}

function cY() {
	var a8H, a8I, a8J, a8K, a8L, a8M, a8N, ox, a8P, a8R, a8S, a8T, a8U, a8W, a8X, a8Y, a8Z, a8a, a8O = 48,
		a8V = [0, 0, 0, 0];

	function a8e(z, nc) {
		z = a8N[z].getContext("2d", {
			alpha: !0
		});
		z.clearRect(0, 0, a8O, a8O), aX.sY.uQ(nc, z, 0, 0, a8O)
	}

	function a8d(z, y9) {
		var z = a8N[z].getContext("2d", {
				alpha: !0
			}),
			zoom = (z.clearRect(0, 0, a8O, a8O), a8O / y9.width),
			dv = a8O / y9.height,
			zoom = dv < zoom ? dv : zoom;
		z.imageSmoothingEnabled = !0, z.setTransform(zoom, 0, 0, zoom, Math.floor((a8O - zoom * y9.width) / 2), Math.floor((a8O - zoom * y9.height) / 2)), z.drawImage(y9, 0, 0), z.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8i(ef, h7, a8l, h5) {
		h5.beginPath(), h5.moveTo(ef, ef), h5.lineTo(ef + Math.cos(a8l) * h7, ef + Math.cos(a8l + 1.5 * Math.PI) * h7), h5.stroke()
	}

	function a91() {
		if (7 === aN.wY()) {
			for (var hE, y9, h5, zoom, dv, ed = -1, z = ox.length - 1; 0 <= z; z--)
				if (null === ox[z].h4) {
					ed = z;
					break
				} - 1 !== ed && (null !== (hE = a8p(ox[ed].a8t, ox[ed].a8u)) ? ox[ed].h4 = hE : (hE = {
					eV: bH.eV,
					eW: bH.eW,
					sV: bH.sV,
					sR: bH.sR,
					sS: bH.sS,
					sW: bH.sW,
					g2: bH.g2,
					a8q: bH.a8q
				}, bH.v(ox[ed].a8t, ox[ed].a8u), bH.sU.a92(), (y9 = document.createElement("canvas")).width = 128, y9.height = 128, h5 = y9.getContext("2d", {
					alpha: !1
				}), (zoom = 128 / bH.eV) < (dv = 128 / bH.eW) && (zoom = dv), h5.imageSmoothingEnabled = !0, h5.setTransform(zoom, 0, 0, zoom, (128 - zoom * bH.eV) / 2, (128 - zoom * bH.eW) / 2), h5.drawImage(bH.sV, 0, 0), bH.eV = hE.eV, bH
				.eW = hE.eW, bH.sV = hE.sV, bH.sR = hE.sR, bH.sS = hE.sS, bH.sW = hE.sW, bH.g2 = hE.g2, bH.a8q = hE.a8q, ox[ed].h4 = y9), bU.dQ = !0)
		}
	}

	function a8p(a8t, a8u) {
		for (var z = ox.length - 1; 0 <= z; z--)
			if (null !== ox[z].h4 && ox[z].a8t === a8t && ox[z].a8u === a8u) return ox[z].h4;
		return null
	}
	this.dJ = function() {
			a8U = [L(102), L(103), L(104), L(105)]
		}, this.dI = function() {
			var z;
			for (a8a = 0, a8R = -1, aN.setState(7), ox = [], this.resize(), a8N = new Array(13), z = a8N.length; 0 <= z; z--) a8N[z] = document.createElement("canvas"), a8N[z].width = a8O, a8N[z].height = a8O;
			for (z = 0; z < 7; z++) ! function(fm) {
				var a8g, h5 = a8N[fm - 2].getContext("2d", {
						alpha: !0
					}),
					a8f = 1.5 * Math.PI,
					ef = Math.floor(.5 * a8O),
					h7 = Math.floor(.48 * a8O);
				h5.lineWidth = 2, h5.strokeStyle = p.mN, h5.clearRect(0, 0, a8O, a8O);
				for (var z = 0; z < fm; z++) a8g = a8f + 2 * Math.PI / fm,
					function(z, ef, h7, a8f, a8g, h5) {
						h5.fillStyle = bV.a8k[z], h5.beginPath(), h5.arc(ef, ef, h7, a8f, a8g), h5.lineTo(ef, ef), h5.fill()
					}(z + 1, ef, h7, a8f, a8g, h5), 0 !== z && a8i(ef, h7, a8f, h5), a8f = a8g;
				a8i(ef, h7, 1.5 * Math.PI, h5),
					function(ef, h7, h5) {
						h5.beginPath(), h5.arc(ef, ef, h7, 0, 2 * Math.PI), h5.stroke()
					}(ef, h7, h5)
			}(z + 2);
			a8d(7, aP.get(4)), a8e(8, aX.tt.uE + aX.tt.uV), a8e(9, aX.tt.uE + aX.tt.uT), a8e(10, 1024 - aX.tt.uB), a8d(11, aP.get(19)), a8d(12, aP.get(20)), bU.dQ = !0
		}, this.xb = function() {
			this.wk(), ap.ky.wj(3240), __fx.customLobby.setActive(false), aN.setState(0), i.j(5, 5)
		},
		__fx.customLobby.setLeaveFunction(() => this.xb()), this.wk = function() {
			ox = [], a8N = []
		}, this.a1z = function() {
			return a8T
		}, this.resize = function() {
			var a8m, sJ, a3G, a8n;
			for (a8J = [0, 0], a8P = [0, 0, 0, 0], a8Z = m.n.uM() ? (a8S = Math.floor(.8 * .4 * am.p3), a8T = Math.floor(.56 * a8S), a8P[0] = bR.gap, am.t < am.iw ? (a8P[1] = a8T + 2 * bR.gap, a8P[2] = am.t - 3 * a8P[0], a8P[3] = am.iw - 3 * bR.gap -
					a8T, a8X = Math.floor(.95 * a8T), a8Y = Math.floor((am.t - a8S - bR.gap) / 2), Math.floor(bR.gap + a8T / 2)) : (a8P[1] = bR.gap, a8P[2] = am.t - 3 * bR.gap - a8S, a8P[3] = am.iw - 2 * bR.gap, a8X = Math.floor(.8 * a8S), a8P[
					3] - a8T < a8S && (a8X = Math.floor(.8 * (a8P[3] - a8T)), a8X = a1E(a8T, a8X)), a8Y = Math.floor(am.t - a8S / 2 - bR.gap), a1E(a8Z = Math.floor(bR.gap + a8T + (a8P[3] - a8T) / 2), Math.floor(a8T + 2 * bR.gap + a8X / 2)))) : (a8S =
					Math.floor(.2016 * am.p3), a8T = Math.floor(.56 * a8S), a8P[2] = Math.floor(.5 * am.t), a8P[3] = Math.floor(.5 * am.iw), a8P[1] = Math.floor(.45 * (am.iw - a8P[3])), a8P[0] = Math.floor((am.t - a8P[2]) / 2), a8X = Math.floor(.75 *
						a8T), a8Y = Math.floor(am.t / 2), Math.floor(a8P[1] + a8P[3] + (am.iw - a8P[3] - a8P[1]) / 2)), a8W = b1.p1.qD(1, .65 * a8T / 4), a8m = sJ = 1; a8m * sJ < ox.length;) a8P[3] / (sJ + 1) < a8P[2] / (a8m + 1) ? a8m++ : sJ++;
			a3G = (a8P[2] - (a8m - 1) * bR.gap) / a8m, a8n = (a8P[3] - (sJ - 1) * bR.gap) / sJ, a8H = a3G < a8n ? a3G : a8n, a8I = Math.floor(a8H), a8M = b1.p1.qD(1, .5 * a8H / 5), a8J[0] = a8m, a8J[1] = sJ, a8K = a8P[0] + Math.floor((a8P[2] - a8J[
				0] * a8H - (a8J[0] - 1) * bR.gap) / 2), a8L = a8P[1] + Math.floor((a8P[3] - a8J[1] * a8H - (a8J[1] - 1) * bR.gap) / 2)
		}, this.ph = function(a8o, fr) {
			var z, dv, h4, eK = ox.length;
			for (a8V = a8o, z = 0; z < fr.length; z++) h4 = a8p(fr[z].g2, fr[z].a8q), ox.push({
				a8r: fr[z].id,
				zf: fr[z].zf,
				zg: fr[z].a8s,
				a8t: fr[z].g2,
				a8u: fr[z].a8q,
				joined: fr[z].a8v,
				a1w: fr[z].a7r,
				a8w: fr[z].a8w,
				h4: h4,
				a8x: fr[z].a8x,
				a8y: fr[z].a8y,
				a8z: fr[z].a8z
			});
			for (z = eK - 1; 0 <= z; z--) ox.shift();
			if (-1 !== a8R)
				for (dv = a8R, a8R = -1, z = ox.length - 1; 0 <= z; z--)
					if (ox[z].a8r === dv) {
						a8R = dv;
						break
					}(ox.length > a8a || ox.length < a8a) && (a8a = ox.length, this.resize()), this.a90(), bU.dQ = !0
		}, this.a90 = function() {
			for (var z = ox.length - 1; 0 <= z; z--) null === ox[z].h4 && setTimeout(a91, 0)
		}, this.gZ = function(eR, eT) {
			return 4 * ((eR - a8Y) * (eR - a8Y) + (eT - a8Z) * (eT - a8Z)) <= a8X * a8X ? (this.xb(), aL.wu(eR, eT, !1), !0) : function(eR, eT) {
				var ed, ee, lm, ln;
				if (0 !== ox.length) {
					var z = 0;
					for (ln = a8L, ee = 0; ee < a8J[1]; ee++) {
						for (lm = a8K, ed = 0; ed < a8J[0]; ed++) {
							if (lm < eR && eR < lm + a8H && ln < eT && eT < ln + a8H) return ap.a7j.a94(ox[z].a8r), a8R = ox[z].a8r !== a8R ? ox[z].a8r : -1, bU.dQ = !0;
							if (++z >= ox.length) return !1;
							lm += a8H + bR.gap
						}
						ln += a8H + bR.gap
					}
				}
				return !1
			}(eR, eT)
		}, this.qv = function() {
			var ed, ee, eR, h7, zoom, z = 0,
				eT = a8L;
			if (qw.imageSmoothingEnabled = !0, qw.lineWidth = 3, h7 = Math.floor(.5 * a8X), qw.fillStyle = p.mI, qw.beginPath(), qw.arc(a8Y, a8Z, h7, 0, 2 * Math.PI), qw.fill(), qw.strokeStyle = p.mN, qw.beginPath(), qw.arc(a8Y, a8Z, h7, 0, 2 * Math
					.PI), qw.stroke(), h7 = aP.get(0).height, zoom = .6 * a8X / h7, qw.setTransform(zoom, 0, 0, zoom, Math.floor(a8Y - .56 * zoom * aP.get(0).width), Math.floor(a8Z - .5 * zoom * h7)), qw.drawImage(aP.get(0), 0, 0), qw.setTransform(1,
					0, 0, 1, 0, 0), function() {
					qw.fillStyle = p.mI, qw.fillRect(am.t - a8S - bR.gap, bR.gap, a8S, a8T), 0 <= a8R ? (qw.fillStyle = p.mf, qw.fillRect(am.t - a8S - bR.gap, bR.gap, a8S, Math.floor(.25 * a8T))) : (qw.fillStyle = p.n6, qw.fillRect(am.t - a8S - bR
						.gap, bR.gap + Math.floor(.25 * a8T), a8S, Math.floor(.25 * a8T)));
					qw.strokeStyle = p.mN, qw.strokeRect(am.t - a8S - bR.gap, bR.gap, a8S, a8T), qw.fillStyle = p.mN, qw.font = a8W, b1.p1.textBaseline(qw, 1);
					for (var eT, a98 = Math.floor(.04 * a8S), a0q = Math.floor(.08 * a8T), z = 3; 0 <= z; z--) eT = Math.floor(bR.gap + (z + 1) * (a8T + 2 * a0q) / 5 - a0q), b1.p1.textAlign(qw, 0), qw.fillText(a8U[z], am.t - a8S - bR.gap + a98, eT),
						b1.p1.textAlign(qw, 2), qw.fillText(b1.w8.zC(a8V[z]), am.t - bR.gap - a98, eT)
				}(), 0 !== ox.length)
				for (ee = 0; ee < a8J[1]; ee++) {
					for (eR = a8K, ed = 0; ed < a8J[0]; ed++) {
						if (! function(z, eR, eT) {
								var zoom, ee, a99, a9B, a9C;
								null === ox[z].h4 ? (qw.fillStyle = p.mI, qw.fillRect(eR, eT, a8I, a8I)) : (zoom = a8I / 128, qw.setTransform(zoom, 0, 0, zoom, eR, eT), qw.drawImage(ox[z].h4, 0, 0), qw.setTransform(1, 0, 0, 1, 0, 0));
								a8R === ox[z].a8r ? (function(eR, eT) {
									var qF = Math.floor(.2 * a8I),
										qG = Math.floor(.3 * qF);
									qw.fillStyle = p.mh, qw.fillRect(eR + a8I - qF, eT, qF, qF), qw.fillStyle = p.mE, qw.fillRect(eR + a8I - qF, eT, 2, qF), qw.fillRect(eR + a8I - qF, eT + qF - 2, qF, 2), a9.a0n(eR + a8I - qF + qG, eT + qG,
										qF - 2 * qG), qw.setTransform(1, 0, 0, 1, 0, 0)
								}(eR, eT), qw.lineWidth = 3, qw.fillStyle = p.mh) : qw.fillStyle = p.mG;
								a9B = Math.floor(a8H / 4), qw.fillRect(eR, eT, a9B, a9B), a9C = Math.floor(eT + .8 * a8H), qw.fillRect(eR, a9C, a8I, Math.floor(a8H / 5)),
									function(z, eR, eT) {
										var zoom;
										ox[z].zg && (z = aP.get(4), zoom = .5 * a8H / z.width, qw.setTransform(zoom, 0, 0, zoom, Math.floor(eR + (a8H - zoom * z.width) / 2), Math.floor(eT + (a8H - zoom * z.height) / 2)), qw.globalAlpha = .6, qw
											.drawImage(z, 0, 0), qw.globalAlpha = 1, qw.setTransform(1, 0, 0, 1, 0, 0))
									}(z, eR, eT);
								var a9E = new Array(ox[z].a8x);
								if (ox[z].a8x) {
									for (ee = a99 = 0; ee < ox[z].a8x; ee++) ox[z].a8y[ee] = b1.tc.yL(ox[z].a8y[ee], a8M, .4 * a8H), a9E[ee] = ("" === ox[z].a8y[ee] ? L(106) : "[" + ox[z].a8y[ee] + "]: ") + ox[z].a8z[ee];
									for (ee = 0; ee < ox[z].a8x; ee++) a99 = Math.max(a99, aD.measureText(a9E[ee], a8M));
									a99 += .05 * a8H, ee = 5 === ox[z].a8x, a9B = ee ? eT + a9B : Math.max(eT + .8 * a8H - .11 * ox[z].a8x * a8H, eT + a9B), a9C = ee ? a9C : Math.min(a9B + .11 * ox[z].a8x * a8H + .05 * a8H, a9C), qw.fillRect(eR, a9B,
										a99, a9C - a9B)
								}
								for (qw.font = a8M, b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 0), qw.fillStyle = p.n1, qw.fillText(ox[z].joined.toString(), Math.floor(eR + .22 * a8H), Math.floor(eT + .9 * a8H)), qw.fillStyle = p.mN, ee = 0; ee <
									ox[z].a8x; ee++) qw.fillText(a9E[ox[z].a8x - ee - 1], Math.floor(eR + .03 * a8H), Math.floor(eT + .77 * a8H - .11 * ee * a8H));
								b1.p1.textAlign(qw, 2), qw.fillStyle = p.mn, qw.fillText(ox[z].a1w.toString(), Math.floor(eR + .81 * a8H), Math.floor(eT + .9 * a8H)), qw.strokeStyle = a8R === ox[z].a8r ? p.mg : p.mP, qw.strokeRect(eR, eT, a8I, a8I),
									a9C = Math.floor(.16 * a8H), zoom = a9C / a8O, qw.setTransform(zoom, 0, 0, zoom, Math.floor(eR + .33 * a9C), Math.floor(eT + .33 * a9C)), a8N.length > ox[z].zf && qw.drawImage(a8N[ox[z].zf], 0, 0);
								qw.setTransform(zoom, 0, 0, zoom, Math.floor(eR + .15 * a9C), Math.floor(eT + a8H - 1.08 * a9C)), qw.drawImage(a8N[11], 0, 0), qw.setTransform(zoom, 0, 0, zoom, Math.floor(eR + a8H - 1.05 * a9C), Math.floor(eT + a8H -
									1.15 * a9C)), qw.drawImage(a8N[12], 0, 0), qw.setTransform(1, 0, 0, 1, 0, 0)
							}(z, Math.floor(eR), Math.floor(eT)), ++z >= ox.length) return;
						eR += a8H + bR.gap
					}
					eT += a8H + bR.gap
				}
		}
}

function cA() {
	var a9G = [0, 0, 0, 0];

	function a9V(eR, eT, gy, a9Y) {
		qw.fillStyle = p.mN;
		var qF = a1E(2, Math.floor((a9Y ? .5 : .35) * gy)),
			a38 = (qF -= qF % 2, a1E(2, Math.floor(.1 * gy))),
			gy = (a38 -= a38 % 2, Math.floor((gy - qF) / 2)),
			m0 = Math.floor(gy + (qF - a38) / 2);
		qw.fillRect(eR + gy, eT + m0, qF, a38), a9Y && qw.fillRect(eR + m0, eT + gy, a38, qF)
	}

	function a7q(eR, eT, t, iw, a5B, xr, a1r, iZ, fm) {
		qw.fillStyle = a5B, qw.fillRect(eR, eT, t, iw), 0 <= iZ && function(eR, eT, t, iw, iZ) {
			qw.fillStyle = "rgba(" + 22 * iZ + "," + (110 - 22 * iZ) + ",0,0.75)", qw.fillRect(eR, eT, (1 + iZ) * t / 6, iw)
		}(eR, eT, t, iw, iZ), 0 < fm && function(eR, eT, t, iw, fm) {
			qw.fillStyle = "rgba(255,255,255,0.3)", qw.fillRect(eR, eT, fm * t / a1.eH, iw)
		}(eR, eT, t, iw, fm), qw.strokeStyle = p.mN, qw.strokeRect(eR, eT, t, iw), 0 !== xr && (qw.fillStyle = p.mN, qw.font = b1.p1.qD(1, xr * iw), qw.fillText(b1.tc.yL(a1r, 0, .9 * t), Math.floor(eR + t / 2), Math.floor(eT + .52 * iw)))
	}
	this.ju = [{
		eN: 0,
		fm: 512
	}], this.dI = function() {
		aj.tw = !1, aN.setState(2), this.resize(), bU.dQ = !0
	}, this.wk = function() {}, this.resize = function() {
		a9G[2] = Math.floor((m.n.uM() ? .49 : .4) * am.p3), a9G[1] = Math.floor((am.iw - a9G[2] / 6 - this.ju.length * (bR.gap + a9G[2] / 10)) / 2), a9G[0] = Math.floor((am.t - a9G[2]) / 2), aj.tw && aj.resize()
	}, this.a9H = function(zf) {
		var z;
		if (6 < zf) this.ju = [{
			eN: 0,
			fm: 512
		}];
		else {
			for (this.ju = [], z = 0; z < zf + 2; z++) this.ju.push({
				eN: 0,
				fm: 0
			});
			this.a9I()
		}
		ap.ky.wb = 0
	}, this.a9J = function(a9K, a9L) {
		for (var eK = a9K.length, z = 0; z < eK; z++) this.ju[z].eN = a9K[z], this.ju[z].fm = a9L[z]
	}, this.a9M = function(qT) {
		var z, eK;
		if (1 === qT.tj.length)
			for (eK = this.ju.length, qT.a9K = new Array(eK), qT.a9L = new Array(eK), z = 0; z < eK; z++) qT.a9K[z] = this.ju[z].eN, qT.a9L[z] = this.ju[z].fm
	}, this.xd = function() {
		bU.dQ = !0, aj.tw ? aj.tw = !1 : (this.wk(), aN.setState(0), i.j(5, 5))
	}, this.zj = function() {
		var z, fm;
		if (ax.jm) return ax.jn.a9N;
		for (fm = 0, z = this.ju.length - 1; 0 <= z; z--) fm += this.ju[z].fm;
		return fm
	}, this.wu = function(eR, eT) {
		return !(!aj.tw || !aj.wu(eR, eT)) || -1 !== this.xP(eR, eT)
	}, this.a9O = function() {
		var ed;
		ap.ky.wb = 0, aN.a7w(), ax.jm ? ax.a9P() : (ed = (ed = this.ju.length - 2) < 0 ? 7 : ed, a1.zc(Math.floor(16384 * Math.random()), 0, [{
			name: bY.db.data[122].value,
			a9Q: b1.color.yE(bY.ky.re()),
			a9R: 0
		}], ed, !1, !1))
	}, this.gZ = function(eR, eT) {
		if (aj.tw && !ax.jm) return aj.gZ(eR, eT);
		var z, ed, max, qF, eT = this.xP(eR, eT);
		if (-1 === eT) return !1;
		if (0 === eT) this.xd();
		else if (1 === eT) ax.jm ? (ax.xJ(), bU.dQ = !0) : aj.show();
		else if (100 === eT) aw.a9S();
		else if (2 === eT) this.wk(), this.a9O();
		else {
			if (ax.jm) return !1;
			if (27 === eT) this.ju.length < 8 && (this.ju.push({
				eN: 0,
				fm: a1.eH
			}), this.a9I(), this.resize(), bU.dQ = !0);
			else if (z = Math.floor((eT - 3) / 3), eT % 3 == 0) 1 < this.ju.length && (this.ju.splice(z, 1), this.resize(), bU.dQ = !0);
			else if (qF = (a9G[2] - a9G[2] / 10 - 2 * bR.gap) / 2, eT % 3 == 1) 0 === z && 1 === this.ju[z].fm || (eR < a9G[0] + a9G[2] - 1.5 * qF - bR.gap ? this.ju[z].eN-- : this.ju[z].eN++, this.ju[z].eN < 0 ? this.ju[z].eN = 5 : 5 < this.ju[
				z].eN && (this.ju[z].eN = 0), bU.dQ = !0);
			else {
				for (bU.dQ = !0, eT = (eR - (a9G[0] + a9G[2] - qF)) / qF - .5, eT *= eT < 0 ? -eT : eT, eT = 0 === (eT = Math.floor(eT * a1.eH)) ? 1 : eT, max = a1.eH, ed = this.ju.length - 1; 0 <= ed; ed--) z !== ed && (max -= this.ju[ed].fm);
				if (eT < 0) {
					if (1 === this.ju[z].fm) return this.ju[z].fm = max, !0
				} else if (this.ju[z].fm === max) return this.ju[z].fm = 1, !0;
				this.ju[z].fm += eT, this.ju[z].fm < 1 ? this.ju[z].fm = 1 : this.ju[z].fm > max && (this.ju[z].fm = max)
			}
		}
		return !0
	}, this.a9I = function() {
		for (var fm = Math.floor(a1.eH / this.ju.length), a9T = a1.eH % this.ju.length, z = this.ju.length - 1; 0 <= z; z--) this.ju[z].fm = fm;
		this.ju[0].fm += a9T
	}, this.xP = function(eR, eT) {
		var qF = (a9G[2] - 3 * bR.gap) / 4,
			a38 = a9G[2] / 6;
		if (eR < a9G[0] || eT < a9G[1] || a9G[0] + a9G[2] <= eR) return -1;
		if (eT < a9G[1] + a38) return eR < a9G[0] + qF ? 0 : eR < a9G[0] + qF + bR.gap ? -1 : eR < a9G[0] + 2 * qF + bR.gap ? 100 : eR < a9G[0] + 2 * (qF + bR.gap) ? -1 : eR < a9G[0] + 3 * qF + 2 * bR.gap ? 1 : eR < a9G[0] + 3 * (qF + bR.gap) ? -
			1 : 2;
		for (var ln, a9U = a9G[2] / 10, qF = (a9G[2] - a9U - 2 * bR.gap) / 2, z = 0; z < this.ju.length; z++) {
			if (eT < (ln = a9G[1] + a38 + bR.gap + z * (a9U + bR.gap))) return -1;
			if (!(ln + a9U < eT)) return eR < a9G[0] + a9U ? 3 + 3 * z : eR < a9G[0] + a9U + bR.gap ? -1 : eR < a9G[0] + a9G[2] - qF - bR.gap ? 4 + 3 * z : eR < a9G[0] + a9G[2] - qF ? -1 : 5 + 3 * z
		}
		return !(this.ju.length < 8) || eT < (ln = a9G[1] + a38 + bR.gap + this.ju.length * (a9U + bR.gap)) || ln + a9U < eT || a9G[0] + a9U < eR ? -1 : 27
	}, this.qv = function() {
		qw.lineWidth = bR.uP, b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1);
		var qF = (a9G[2] - 3 * bR.gap) / 4,
			a38 = a9G[2] / 6;
		if (a7q(a9G[0], a9G[1], qF, a38, "rgba(128,0,0,0.75)", .25, L(101), -1, -1), a7q(a9G[0] + qF + bR.gap, a9G[1], qF, a38, "rgba(128,0,128,0.75)", .25, L(107), -1, -1), a7q(a9G[0] + 2 * (qF + bR.gap), a9G[1], qF, a38, "rgba(" + (ax.jm ?
				128 : 0) + ",128,128,0.75)", .25, ax.jm ? L(108) : L(109), -1, -1), a7q(a9G[0] + a9G[2] - qF, a9G[1], qF, a38, "rgba(0,128,0,0.75)", .25, L(110), -1, -1), !ax.jm) {
			for (var ln, a9U = a9G[2] / 10, qF = (a9G[2] - a9U - 2 * bR.gap) / 2, z = 0; z < this.ju.length; z++) ln = a9G[1] + a38 + bR.gap + z * (a9U + bR.gap), a7q(a9G[0], ln, a9U, a9U, 1 < this.ju.length ? "rgba(128,0,0,0.75)" :
				"rgba(90,90,90,0.75)", 0, null, -1), 1 < this.ju.length && a9V(a9G[0], ln, a9U, !1), a7q(a9G[0] + a9U + bR.gap, ln, qF, a9U, p.mK, .4, this.a9W(z), this.ju[z].eN, -1), a7q(a9G[0] + a9G[2] - qF, ln, qF, a9U, p.mK, .4, this.a9X(
				z), -1, this.ju[z].fm);
			this.ju.length < 8 && (ln = a9G[1] + a38 + bR.gap + this.ju.length * (a9U + bR.gap), a7q(a9G[0], ln, a9U, a9U, "rgba(0,128,20,0.75)", 0, null, -1, -1), a9V(a9G[0], ln, a9U, !0)), aj.tw && aj.qv()
		}
	}, this.a9W = function(z) {
		return 0 === z && 1 === this.ju[z].fm ? L(111) : a2.jg[this.ju[z].eN]
	}, this.a9X = function(z) {
		return 1 === this.ju[z].fm ? L(112) : L(113, [this.ju[z].fm])
	}
}

function cB() {
	var a9b, h4, ve, a9c;

	function a9i(o2, name, a9j, oj) {
		ve[o2] = name, h4[o2] = new Image, h4[o2].onload = function() {
			! function(o2, a9j) {
				var z3, z4 = null;
				7 === a9j ? z3 = b1.xj.z6 : 8 === a9j ? (z3 = b1.xj.z9, z4 = .1) : 3 === a9j ? (z3 = b1.xj.z7, z4 = .06) : 5 === a9j ? z3 = b1.xj.zA : 6 === a9j ? z3 = b1.xj.z5 : 4 === a9j && (z3 = b1.xj.zB);
				h4[o2] = b1.xj.z2(h4[o2], z3, z4)
			}(o2, a9j), a9l()
		}, h4[o2].onerror = function(d) {
			console.error("Error loading image at index", o2, "Error:", d), a9l()
		}, h4[o2].src = "data:image/png;base64," + oj
	}

	function a9l() {
		a9b--, a9f()
	}

	function a9f() {
		0 === a9b && (a9b = -1, a9h(), bU.dQ = !0, h4[7] = a9c, h4[8] = a9c, h4[9] = a9c, h4[10] = a9c, 5 === i.q7) && i.a9n().a9o.resize()
	}

	function a9h() {
		a8.a04(), bN.a6z([h4[8], h4[16], h4[9], h4[9], h4[10]], [2 !== m.id, 1 !== m.id, !0, !0, !0]), aX.sY = new tv, aX.sY.dI(), ak.dJ()
	}
	this.dI = function() {
		if (void 0 === h4) {
			a9b = 23, h4 = new Array(a9b), ve = new Array(a9b), (a9c = document.createElement("canvas")).width = 1;
			for (var z = a9b - (a9c.height = 1); 0 <= z; z--) h4[z] = a9c;
			a9h(), a9i(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), a9i(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), a9i(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9i(3, "orders", 6,
					"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"
					), a9i(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), a9i(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				a9i(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), a9i(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9i(8,
					"googleplay", 3,
					"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"
					), a9i(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), a9i(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9i(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9i(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9i(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), a9i(14, "bestPlayer", 5,
					"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"
					), a9i(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), a9i(16, "apple", 3,
					"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"
					), a9i(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), a9i(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), a9i(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), a9i(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), a9i(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), a9i(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(o2) {
		return h4[o2]
	}, this.a83 = function(name) {
		for (var z = ve.length - 1; 0 <= z; z--)
			if (ve[z] === name) return h4[z];
		return a9c
	}, this.qX = function() {
		return a9b <= 0
	}, this.a9e = function() {
		a9b = 0, a9f()
	}
}

function cC() {
	var a9r, a9s, a9t, a9u, a9v, a9w, a9x, a9y, a9z, aA0, a9p = [
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
		a9q = [
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

	function aAJ(e0, aAL) {
		a6Q[e0] = 0, a6Q[e0 + 1] = 0, a6Q[e0 + 2] = aAL, a6Q[e0 + 3] = 0, aAM(e0)
	}

	function aAM(e0) {
		var eR;
		bQ.mD || (eR = aQ.tX(e0), e0 = aQ.tY(e0), bQ.mD = eR >= bP.a6P[0] && eR <= bP.a6P[2] && e0 >= bP.a6P[1] && e0 <= bP.a6P[3])
	}
	this.eM = new Int32Array(4), this.dJ = function() {
		var eM = this.eM;
		eM[0] = -4 * bH.eV, eM[1] = 4, eM[2] = -eM[0], eM[3] = -eM[1]
	}, this.dI = function(tj) {
		if (a9r = new Uint8Array(a1.eH), a9s = new Uint8Array(a1.eH), a9t = new Uint8Array(a1.eH), a9u = new Uint8Array(a1.eH), a9v = new Uint8Array(a1.eH), a9w = new Uint8Array(a1.eH), a9x = new Uint8Array(a1.eH), a9y = new Uint8Array(a1.eH),
			a9z = new Uint8Array(a1.eH), aA0 = new Uint8Array(a1.eH), this.a35 = new Uint8Array(a1.eH), a1.iS)
			for (var kD, ef, z = a1.eH - 1; 0 <= z; z--) ef = bV.vc[bV.eI[z]], kD = bA.em((a9q[ef][3] + 1) * an.random(), an.value(100)), a9r[z] = a9p[ef][0] + kD * a9q[ef][0], a9s[z] = a9p[ef][1] + kD * a9q[ef][1], a9t[z] = a9p[ef][2] + kD *
				a9q[ef][2];
		else ax.jm && ax.jn.aA5 ? function(f0) {
			var z;
			for (z = a1.t1 - 1; 0 <= z; z--) a9r[z] = 4 * f0[z][0], a9s[z] = 4 * f0[z][1], a9t[z] = 4 * f0[z][2]
		}(ax.jn.aA5) : (function() {
			for (var z = a1.eH - 1; z >= a1.jS; z--) a9r[z] = 4 * bA.em(64 * an.random(), an.value(100)), a9s[z] = 4 * bA.em(64 * an.random(), an.value(100)), a9t[z] = 4 * bA.em(64 * an.random(), an.value(100))
		}(), function(tj) {
			for (var z = a1.jS - 1; 0 <= z; z--) a9r[z] = 4 * tj[z].a9Q[0], a9s[z] = 4 * tj[z].a9Q[1], a9t[z] = 4 * tj[z].a9Q[2]
		}(tj));
		! function() {
			var z, eN;
			for (z = a1.eH - 1; 0 <= z; z--) eN = bA.em(a9r[z] + a9s[z] + a9t[z], 3), a9r[z] += aAE(eN - a9r[z], 2), a9s[z] += aAE(eN - a9s[z], 2), a9t[z] += aAE(eN - a9t[z], 2), a9r[z] -= a9r[z] % 4, a9s[z] -= a9s[z] % 4, a9t[z] -= a9t[z] % 4
		}(),
		function() {
			for (var z = a1.eH - 1; 0 <= z; z--) a9r[z] += bA.em(z, 128), a9s[z] += bA.em(z % 128, 32), a9t[z] += bA.em(z % 32, 8), a9u[z] = z % 8
		}(), this.aAB(),
			function() {
				for (var z = a1.eH - 1; 0 <= z; z--) a9v[z] = a9r[z] < 32 ? a9r[z] + 32 : a9r[z] - 32, a9w[z] = a9s[z] < 32 ? a9s[z] + 32 : a9s[z] - 32, a9x[z] = a9t[z] < 32 ? a9t[z] + 32 : a9t[z] - 32
			}(),
			function() {
				for (var z = a1.eH - 1; 0 <= z; z--) a9y[z] = 235 < a9r[z] ? a9r[z] - 20 : a9r[z] + 20, a9z[z] = 235 < a9s[z] ? a9s[z] - 20 : a9s[z] + 20, aA0[z] = 235 < a9t[z] ? a9t[z] - 20 : a9t[z] + 20
			}()
	}, this.a26 = function(player) {
		var f0 = bD.eu;
		return f0[0] = a9r[player], f0[1] = a9s[player], f0[2] = a9t[player], f0
	}, this.aAB = function() {
		for (var z = a1.eH - 1; 0 <= z; z--) this.a35[z] = a9r[z] + a9s[z] + a9t[z] < 280 ? 0 : 1
	}, this.tX = function(e0) {
		return bA.em(e0, 4) % bH.eV
	}, this.tY = function(e0) {
		return bA.em(e0, 4 * bH.eV)
	}, this.t8 = function(eR, eT) {
		return Math.floor(4 * (eT * bH.eV + eR))
	}, this.tN = function(e0) {
		var eM = this.eM;
		return this.aAF(e0 + eM[0]) || this.aAF(e0 + eM[1]) || this.aAF(e0 + eM[2]) || this.aAF(e0 + eM[3])
	}, this.ej = function(e0) {
		var eM = this.eM;
		return this.eP(e0 + eM[0]) || this.eP(e0 + eM[1]) || this.eP(e0 + eM[2]) || this.eP(e0 + eM[3])
	}, this.tL = function(e0, player) {
		var eM = this.eM;
		return this.aAG(e0 + eM[0], player) || this.aAG(e0 + eM[1], player) || this.aAG(e0 + eM[2], player) || this.aAG(e0 + eM[3], player)
	}, this.vA = function(player) {
		return player < a1.jS && 2 !== aU.yf[player]
	}, this.ft = function(e0) {
		return 208 <= a6Q[e0 + 3]
	}, this.tS = function(player, e0) {
		return this.ft(e0) && this.aAH(player, e0)
	}, this.aAH = function(player, e0) {
		return player === this.eC(e0)
	}, this.aAI = function(e0) {
		return 208 <= a6Q[e0 + 3] && a6Q[e0 + 3] < 224
	}, this.ib = function(e0) {
		return 224 <= a6Q[e0 + 3] && a6Q[e0 + 3] < 248
	}, this.tM = function(e0) {
		for (var eM = this.eM, z = 3; 0 <= z; z--)
			if (this.go(e0 + eM[z])) return !0;
		return !1
	}, this.eF = function(e0) {
		return this.ft(e0) || this.eB(e0)
	}, this.go = function(e0) {
		return 0 === a6Q[e0 + 3] && 2 === a6Q[e0 + 2]
	}, this.eB = function(e0) {
		return 0 === a6Q[e0 + 3] && 1 === a6Q[e0 + 2]
	}, this.sh = function(e0) {
		return 0 === a6Q[e0 + 3] && 3 === a6Q[e0 + 2]
	}, this.eP = function(e0) {
		return 0 === a6Q[e0 + 3] && 5 <= a6Q[e0 + 2]
	}, this.aAF = function(e0) {
		return 0 === a6Q[e0 + 3] && 3 <= a6Q[e0 + 2]
	}, this.e2 = function(e0) {
		return a6Q[e0 + 2] - 5
	}, this.aAG = function(e0, player) {
		return this.eB(e0) || this.ft(e0) && player !== this.eC(e0)
	}, this.eC = function(e0) {
		return a6Q[e0] % 4 * 128 + a6Q[e0 + 1] % 4 * 32 + a6Q[e0 + 2] % 4 * 8 + a6Q[e0 + 3] % 8
	}, this.tT = function(e0) {
		aAJ(e0, 1)
	}, this.aAK = function(e0) {
		aAJ(e0, 2)
	}, this.tK = function(e0, player) {
		a6Q[e0] = a9r[player], a6Q[e0 + 1] = a9s[player], a6Q[e0 + 2] = a9t[player], a6Q[e0 + 3] = 208 + a9u[player], aAM(e0)
	}, this.fo = function(e0, player) {
		a6Q[e0] = a9v[player], a6Q[e0 + 1] = a9w[player], a6Q[e0 + 2] = a9x[player], a6Q[e0 + 3] = 224 + a9u[player], aAM(e0)
	}, this.ic = function(e0, player) {
		a6Q[e0] = a9y[player], a6Q[e0 + 1] = a9z[player], a6Q[e0 + 2] = aA0[player], a6Q[e0 + 3] = 248 + a9u[player], aAM(e0)
	}
}

function cc() {
	var o2 = 0,
		aAN = new Uint16Array(32);

	function remove(a08) {
		var z;
		for (o2 -= 2, z = a08; z < o2; z += 2) aAN[z] = aAN[z + 2], aAN[z + 1] = aAN[z + 3]
	}
	this.dI = function() {
		o2 = 0
	}, this.iH = function() {
		var z, iY, hj;
		if (0 !== o2)
			if (0 === aU.lK[a1.e4] || aR.aAO(a1.e4) === aR.fP(a1.e4)) o2 = 0;
			else
				for (z = o2 - 2; 0 <= z; z -= 2)(iY = aAN[z]) < a1.eH && 0 === aU.lK[iY] ? remove(z) : (hj = aAN[z + 1], (iY >= a1.eH && aAP(a1.e4) || iY < a1.eH && aAQ(a1.e4, iY)) && (az.gi.gt(hj, iY), remove(z)))
	}, this.gv = function(iY, hj) {
		! function(iY, hj) {
			var z;
			for (z = 0; z < o2; z += 2)
				if (aAN[z] === iY) return aAN[z + 1] = Math.min(aAN[z + 1] + hj, 1023), 1;
			return
		}(iY, hj) && 32 !== o2 && (aAN[o2] = iY, aAN[o2 + 1] = hj, o2 += 2)
	}
}

function cD() {
	function aAX(player) {
		var dv;
		b1.ff.yh(player) && (dv = aU.gN[player] - aU.yl[player] + aR.aAZ(player), bS.fj(player, Math.abs(dv), dv < 0 ? 18 : 12)), aU.gN[player] = 0, aU.yl[player] = 0
	}

	function aAg() {
		aK.show(!1, !1, !1, !0), aJ.a5d(), bG.result.w0()
	}

	function aAU(player, aAf) {
		for (var z = aAf.length - 1; 0 <= z; z--) aR.aAi(aAf[z], player)
	}

	function aAW(player) {
		for (var hy = aU.hy, hz = aU.hz, i0 = aU.i0, i1 = aU.i1, lm = hy[player], ln = i0[player], eV = bH.eV, g9 = aU.g9, eR = hz[player]; lm <= eR; eR--)
			for (var eT = i1[player]; ln <= eT; eT--) {
				var fr = 4 * (eT * eV + eR);
				aQ.tS(player, fr) && (aQ.tT(fr), g9[player]--)
			}
		hy[player] = hz[player] = 0, i0[player] = i1[player] = 0
	}
	this.dR = function(fr) {
		var player, dv = aU.g9[fr];
		bC.ky.oE[fr] ? dv && (aAU(player = fr, aR.aAV(player)), aAW(player), a3.fh(player), aR.clear(player), aAX(player), function(player) {
			aU.tG[player] = 0, aU.fl[player] = [], aU.fz[player] = [], aU.g0[player] = [], aU.ek[player] = []
		}(player)) : !dv && aU.fl[fr].length || this.aAT(fr)
	}, this.aAT = function(player) {
		! function(player) {
			aQ.vA(player) && (aU.vw[player] = bX.vq.aAe(), a1.vJ++);
			var aAf = aR.aAV(player);
			0 === aAf.length ? b1.ff.yg(player) && aAg() : (aAU(player, aAf), function(player, aAf) {
				var aAk = aAf[function(aAf) {
					var z, o2 = 0;
					for (z = aAf.length - 1; 1 <= z; z--) aU.g9[aAf[z]] > aU.g9[aAf[o2]] && (o2 = z);
					return o2
				}(aAf)];
				9 === a1.jq && 1 === bV.eI[player] && an.jK(8) && ao.aAl(aAk);
				if (b1.ff.yg(player)) aAg(), aA.vT(aAk, 1);
				else {
					for (var z = aAf.length - 1; 0 <= z; z--)
						if (b1.ff.yh(aAf[z]) && (bS.lG[4 - b1.ff.iq(player)]++, b1.ff.yg(aAf[z]))) return aA.vT(player, 0);
					b1.ff.iq(player) || aA.a1P(0, player, aAk)
				}
			}(player, aAf))
		}(player), aAW(player), aAX(player),
			function(player) {
				aU.lK[player] = 0, aU.fl[player] = null, aU.fz[player] = null, aU.g0[player] = null, aU.ek[player] = null
			}(player), a3.fh(player), aR.clear(player), bC.aAc.aAd(player)
	}
}

function ch() {
	var input;

	function aAm(d) {
		aAo(d.target.files)
	}

	function aAo(files) {
		files && 0 < files.length && aw.aAp(files[0])
	}

	function aAu(d) {
		var ef = new Image;
		ef.onload = aAv, ef.src = d.target.result
	}

	function aAv(d) {
		var aAw, d = d.target,
			t = d.width,
			iw = d.height;
		4096 < t || 4096 < iw || t < 10 || iw < 10 ? (aAw = "Image w & h must be between 10 and 4096.", m.rM ? m.rM.showToast(aAw) : alert(aAw)) : (ax.xJ(), bH.g2 = bH.aAt(), bH.a8q = 0, bH.eV = t, bH.eW = iw, bH.sV.width = bH.eV, bH.sV.height = bH
			.eW, bH.sR.drawImage(d, 0, 0), aAw = bH.sR.getImageData(0, 0, bH.eV, bH.eW), bH.sW = aAw.data)
	}

	function aAx(d) {
		d.stopPropagation(), d.preventDefault()
	}

	function aAy() {
		return 0 === aN.wY() || 2 === aN.wY()
	}
	this.dI = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".json, .png, .jpg, .gif, .jpeg"), input.onchange = aAm
	}, this.a9S = function() {
		input.click()
	}, this.aAn = function(d) {
		aAm(d)
	}, this.aAp = function(aAq) {
		var f0 = aAq.name.split("."),
			aAr = f0[f0.length - 1].toLowerCase();
		"json" === aAr ? ax.rK(aAq) : "gif" !== aAr && "jpg" !== aAr && "jpeg" !== aAr && "png" !== aAr || (bH.jn.sp[bH.aAt()].name = f0[0], (aAr = new FileReader).onload = aAu, aAr.readAsDataURL(aAq))
	}, this.x2 = function(d) {
		aAy() && (aAx(d), d.dataTransfer.dropEffect = "copy")
	}, this.x3 = function(d) {
		aAy() && (aAx(d), aAo(d.dataTransfer.files))
	}
}

function cf() {
	this.aAz = null, this.dI = function() {
		10 !== a1.jq ? this.aAz = null : this.aAz = new Uint32Array(a1.eH)
	}, this.iH = function() {
		10 === a1.jq && this.we()
	}, this.we = function() {
		for (var fr, target, a5o, aAz = this.aAz, tj = aZ.jV, ym = aU.gN, z = aZ.jT - 1; 0 <= z; z--)(fr = tj[z]) >= a1.jS || (target = Math.max(bA.em(ym[fr], 4), 2048), a5o = Math.max(aS.a5p(fr), 100), aAz[fr] += bA.em(a5o * target, 1e4), aAz[
			fr] > target && (aAz[fr] = target))
	}, this.yr = function(player, iZ) {
		return iZ > this.aAz[player] ? (iZ = this.aAz[player], this.aAz[player] = 0) : this.aAz[player] -= iZ, iZ
	}
}

function ci() {
	function aAu(d) {
		ax.jm = !0, ax.aB5(JSON.parse(d.target.result)), ax.vL()
	}

	function aBB(oj, min, max, aBK) {
		return "string" != typeof oj || oj.length < min ? aBK : oj.length > max ? oj.substring(0, max) : oj
	}

	function aB6(en, min, max) {
		return en = "number" == typeof en ? Math.floor(en) : min, Math.min(Math.max(en, min), max)
	}

	function aB9(en, rI) {
		return "boolean" == typeof en ? en : rI
	}

	function aBD(en, eK, max, aBM) {
		var z, f0, kD;
		if (!Array.isArray(en) || en.length < 1) return null;
		for (f0 = new(8 === aBM ? Uint8Array : Uint16Array)(eK), kD = en.length, z = 0; z < eK; z++) f0[z] = aB6(en[z % kD], 0, max);
		return f0
	}
	this.jm = !1, this.jn = null, this.xJ = function() {
		this.jm = !1, this.jn = null
	}, this.a9P = function() {
		this.jn.aA5 && this.jn.aB0 && (this.jn.aA5[0] = b1.color.yE(bY.ky.re())), a1.zc(this.jn.aB1, 0, this.aB2(), this.jn.zf, !1, !1)
	}, this.aB2 = function() {
		return [{
			name: this.jn.aB3 ? bY.db.data[122].value : this.jn.aB4[0],
			a9Q: [0, 0, 0],
			a9R: 0
		}]
	}, this.rK = function(aAq) {
		var aAs = new FileReader;
		aAs.onload = aAu, aAs.readAsText(aAq)
	}, this.aB5 = function(ou) {
		this.jn = {}, this.jn.a9N = aB6(ou.numberPlayers, 1, 512), this.jn.aB7 = aB6(ou.modeID, 0, 1), this.jn.g2 = aB6(ou["gMap.mapID"], 0, bH.aB8 - 1), this.jn.a8u = aB6(ou.seedMap, 0, 16383), this.jn.aB1 = aB6(ou.seedSpawn, 0, 16383), this.jn
			.zi = aB9(ou.selectableSpawn, !1), this.jn.aB3 = aB9(ou.selectableName, !1), this.jn.aB0 = aB9(ou.selectableColor, !1), bH.jn.sp[bH.aAt()].name = this.jn.aBA = aBB(ou.mapName, 1, 25, "Custom Map"), this.jn.a13 = function(en) {
				var z, eK;
				if (!Array.isArray(en) || en.length < 1) return [];
				for (eK = en.length, z = 0; z < eK; z++) en[z] = aBB(en[z], 0, 100, "");
				return en
			}(ou.description), this.jn.sw = aBD(ou.playerX, this.jn.a9N, 4096, 16), this.jn.t7 = aBD(ou.playerY, this.jn.a9N, 4096, 16), this.jn.aBE = aBD(ou.playerTeam, this.jn.a9N, 8, 8), this.jn.jo = aBD(ou.playerStrength, this.jn.a9N, 5, 8),
			this.jn.aA5 = function(en, eK) {
				var z, f0, kD;
				if (!Array.isArray(en) || en.length < 1) return null;
				for (f0 = new Array(eK), kD = en.length, z = 0; z < eK; z++) f0[z] = aBD(en[z % kD], 3, 63, 8);
				return f0
			}(ou.playerColor, this.jn.a9N), this.jn.aB4 = function(en, eK) {
				var z, f0, kD;
				if (!Array.isArray(en) || en.length < 1) return null;
				for (f0 = new Array(eK), kD = en.length, z = 0; z < eK; z++) f0[z] = aBB(en[z % kD], 3, 26, "Bot");
				return f0
			}(ou.playerName, this.jn.a9N), this.jn.aBH = "string" == typeof ou.mapBase64 ? ou.mapBase64 : "", this.jn.aB3 = this.jn.aB3 || !this.jn.aB4, this.jn.zf = 0 === this.jn.aB7 ? 7 : 2 === this.jn.aB7 ? 9 : 6, this.jn.sw = this.jn.t7 ?
			this.jn.sw : null
	}, this.vL = function() {
		! function(oj) {
			var h4, h1, aBJ = "data:image/png;base64,";
			if (oj.length <= aBJ.length) return;
			ax.jn.g2 = 0, ax.jn.a8u = 0, bH.v(0, 0), oj.substring(0, aBJ.length) !== aBJ && (oj = aBJ + oj);
			return (h4 = new Image).onload = function() {
				bH.eV = h4.width, bH.eW = h4.height, 4096 < bH.eV || 4096 < bH.eW || bH.eV < 10 || bH.eW < 10 ? (bH.v(0, 0), alert("Image w & h must be between 10 and 4096.")) : (bH.g2 = bH.aAt(), bH.a8q = 0, bH.sV.width = bH.eV, bH.sV
					.height = bH.eW, bH.sR.drawImage(h4, 0, 0), h1 = bH.sR.getImageData(0, 0, bH.eV, bH.eW), bH.sW = h1.data)
			}, h4.src = oj, ax.jn.aBH = "", 1
		}(this.jn.aBH) && bH.v(this.jn.g2, this.jn.a8u)
	}, this.aBN = function() {
		for (var max = 0, eK = this.jn.a9N, z = 0; z < eK; z++) this.jn.aBE[z] > max && (max = this.jn.aBE[z]);
		return Math.max(0, max - 1)
	}
}

function cG() {
	var aBO, aBP, size, iY, iZ, id, aBQ;

	function aBR(player) {
		return player < a1.jS ? aBO * player : aBO * a1.jS + aBP * (player - a1.jS)
	}
	this.dI = function() {
		aBO = a1.jS < 16 ? 12 : 8, aBP = 4;
		var eK = aBR(a1.eH);
		size = new Uint8Array(a1.eH), iY = new Uint16Array(eK), iZ = new Uint32Array(eK), id = new Uint16Array(eK), aBQ = new Uint8Array(eK)
	}, this.oY = function(a2d, aBS) {
		var aBT = this.gO(a2d, aBS),
			aBS = (this.gM(a2d, aBS, 0), b1.ff.fi(a2d, aBT));
		bS.fj(a2d, aBT - aBS, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aAi = function(player, aBS) {
		var aBW, aBS = function(player, aBS) {
			var z, kD = aBR(player);
			for (z = size[player] - 1; 0 <= z; z--)
				if (0 === id[kD + z] && iY[kD + z] === aBS) return z;
			return size[player]
		}(player, aBS);
		aBS !== size[player] && (aBW = iZ[aBR(player) + aBS], this.fk(player, aBS), this.iV(player, aBW, a1.eH))
	}, this.io = function(player, aBS) {
		for (var kD = aBR(player), z = size[player] - 1; 0 <= z; z--)
			if (0 === id[kD + z] && iY[kD + z] === aBS) return !0;
		return !1
	}, this.j6 = function(player) {
		return player < a1.jS ? size[player] < aBO : size[player] < aBP
	}, this.fP = function(player) {
		return size[player]
	}, this.fV = function(player, z) {
		return iY[aBR(player) + z]
	}, this.fQ = function(player, z) {
		return id[aBR(player) + z]
	}, this.aBX = function(player, aBY) {
		for (var kD = aBR(player), z = size[player] - 1; 0 <= z; z--)
			if (id[kD + z] === aBY) return z;
		return -1
	}, this.fW = function(player, z) {
		return iZ[aBR(player) + z]
	}, this.gO = function(player, aBS) {
		for (var kD = aBR(player), z = size[player] - 1; 0 <= z; z--)
			if (0 === id[kD + z] && iY[kD + z] === aBS) return iZ[kD + z];
		return 0
	}, this.aAZ = function(player) {
		for (var kD = aBR(player), en = 0, z = size[player] - 1; 0 <= z; z--) en += iZ[kD + z];
		return en
	}, this.aBZ = function(player) {
		for (var kD = aBR(player), en = 0, z = size[player] - 1; 0 <= z; z--) 0 === id[kD + z] && (en += iZ[kD + z]);
		return en
	}, this.aAO = function(player) {
		for (var kD = aBR(player), fm = 0, z = size[player] - 1; 0 <= z; z--) 0 < id[kD + z] && fm++;
		return fm
	}, this.gM = function(player, aBS, aBW) {
		for (var kD = aBR(player), z = size[player] - 1; 0 <= z; z--) 0 === id[kD + z] && iY[kD + z] === aBS && (iZ[kD + z] = aBW)
	}, this.g7 = function(player, z, aBW) {
		iZ[aBR(player) + z] = Math.max(aBW, 0)
	}, this.g8 = function(player, z) {
		aBQ[aBR(player) + z] = 0
	}, this.fX = function(player, z) {
		return aBQ[aBR(player) + z]
	}, this.iV = function(player, aBW, aBS) {
		b1.ff.yh(aBS) && bS.lG[6 - b1.ff.iq(player)]++;
		for (var kD = aBR(player), z = size[player] - 1; 0 <= z; z--)
			if (0 === id[kD + z] && iY[kD + z] === aBS) return iZ[kD + z] += aBW, void(iZ[kD + z] = iZ[kD + z] > a1.yn ? a1.yn : iZ[kD + z]);
		iY[kD + size[player]] = aBS, iZ[kD + size[player]] = aBW, id[kD + size[player]] = 0, aBQ[kD + size[player]] = 1, size[player]++, player < a1.jS && (aBS === a1.e4 ? aA.vT(player, 5) : player === a1.e4 && aT.a1R(aBS))
	}, this.aBa = function(player, aBW, aBY) {
		var kD = aBR(player);
		iY[kD + size[player]] = 0, iZ[kD + size[player]] = aBW, id[kD + size[player]] = aBY, aBQ[kD + size[player]] = 0, size[player]++
	}, this.fk = function(player, o2) {
		var ed, kD;
		if (0 !== size[player])
			for (kD = aBR(player), size[player]--, ed = o2; ed < size[player]; ed++) iY[kD + ed] = iY[kD + ed + 1], iZ[kD + ed] = iZ[kD + ed + 1], id[kD + ed] = id[kD + ed + 1], aBQ[kD + ed] = aBQ[kD + ed + 1]
	}, this.aAV = function(player) {
		for (var ed, kD, aAf = [], z = aZ.jT - 1; 0 <= z; z--)
			for (kD = aBR(aZ.jV[z]), ed = size[aZ.jV[z]] - 1; 0 <= ed; ed--)
				if (0 === id[kD + ed] && iY[kD + ed] === player) {
					aAf.push(aZ.jV[z]);
					break
				} return aAf
	}
}

function cH() {
	var aBb, aBc;
	this.dP = function() {
		aBc = 512, aBb = new Uint16Array(aBc);
		for (var z = 0; z < aBc; z++) aBb[z] = 100 + aBd(bA.em(25600 * z, aBc - 4), 9)
	}, this.iH = function() {
		if (bU.jP() % 10 == 9 && (function() {
				for (var jV = aZ.jV, gN = aU.gN, yl = aU.yl, sZ = a1.e4, dv = gN[sZ] - yl[sZ], z = aZ.jT - 1; 0 <= z; z--) {
					var fr = jV[z],
						aBi = bA.em(aS.a5p(fr) * gN[fr], 1e4);
					b1.ff.fi(fr, Math.max(aBi, 1))
				}
				bS.lG[9] += gN[sZ] - yl[sZ] - dv
			}(), function() {
				var dv, fr = a1.e4;
				a1.js && !a1.iS && 0 !== aU.lK[fr] && 0 === aO.ju[0].eN && (dv = aU.gN[fr], b1.ff.fi(fr, bA.em(aU.g9[fr], 6)), bS.lG[18] += aU.gN[fr] - dv)
			}(), bU.jP() % 100 == 99)) {
			for (var gN = aU.gN, g9 = aU.g9, jV = aZ.jV, yl = aU.yl, sZ = a1.e4, dv = gN[sZ] - yl[sZ], z = aZ.jT - 1; 0 <= z; z--) {
				var fr = jV[z];
				b1.ff.fi(fr, g9[fr])
			}
			bS.lG[8] += gN[sZ] - yl[sZ] - dv
		}
	}, this.a5p = function(player) {
		var h7 = aBb[bA.em((aBc - 1) * aU.g9[player], a1.jC)],
			j7 = (bU.jP() < 1920 && (h7 = Math.max(bA.em(100 * (13440 - 6 * bU.jP()), 1920), h7)), this.j8(player));
		return aU.gN[player] > j7 && (h7 -= bA.em(2 * h7 * (aU.gN[player] - j7), j7)), Math.min(Math.max(h7, 0), 700)
	}, this.j8 = function(player) {
		return Math.min(100 * aU.g9[player], a1.zY)
	}, this.nR = function(player, nS) {
		b1.ff.fi(nS, bD.es[0]), bS.np(player, nS), aT.aBj(player, bD.es[0] + bD.es[1]), aT.nq(nS, bD.es[0]), b1.ff.oO(player)
	}, this.aBk = function() {
		for (var eK = aZ.jT, tj = aZ.jV, kD = 0, ym = aU.gN, z = 0; z < eK; z++) kD += ym[tj[z]];
		return kD
	}, this.aBl = function(wH) {
		for (var fr, eK = aZ.jT, tj = aZ.jV, kD = 0, ym = aU.gN, eI = bV.eI, z = 0; z < eK; z++) eI[fr = tj[z]] === wH && (kD += ym[fr]);
		return kD
	}
}

function cJ() {
	var aBm, aBn, aBo, aBp, aBq, aBr, aBs, aBt, aBu, aBv, aBw, aBx, aBy, aBz, aC0, aC1, aC2, aC3, aC5, aC6, a6p, aC7, aC8, aCF, aCG, aC4 = null,
		aCA = 0,
		aCB = !1,
		aCC = new Float32Array(4),
		aCD = 0,
		aCE = !0,
		a50 = 400;

	function p5() {
		aBu = Math.floor(+am.p3), aBv = Math.floor(.5 * aBu)
	}

	function aCH() {
		var z, aCM;
		for (qw.font = b1.p1.qD(1, 100 * aBw), aCM = 80 / Math.floor(qw.measureText(b1.w8.zC(a1.yn)).width), qw.font = b1.p1.qD(1, 100), z = a1.eH - 1; 0 <= z; z--) aBt[z] = 100 / Math.floor(qw.measureText(aU.a1N[z]).width), aBs[z] = Math.min(aCM,
			aBt[z])
	}

	function aCN(z) {
		return !bY.db.data[7].value || (z = aU.gN[z]) < 1e6 ? 1 : z < 1e7 ? aCC[0] : aCC[Math.min(Math.floor(Math.log10(z)) - 6, 3)]
	}

	function aCL(h5) {
		aC3 = !1, aC2 = 1, aC0 = aC1 = 0, aCE && (b1.p1.textAlign(h5, 1), b1.p1.textBaseline(h5, 1));
		for (var aCT, aCU, z, aCV, fontSize, aCW, lm = hk / hl, ln = hm / hl, m0 = (am.t + hk) / hl, m1 = (am.iw + hm) / hl, aCX = 0 !== aU.lK[a1.e4] && aQ.vA(a1.e4), ed = aZ.jT - 1; 0 <= ed; ed--) z = aZ.jV[ed], (fontSize = Math.floor(aBz * hl *
			aCN(z) * aBs[z] * aBq[z])) < aBy || aBu <= fontSize || aBo[z] + aBq[z] > lm && aBo[z] < m0 && aBp[z] + aBr[z] > ln && aBp[z] < m1 && (aCT = Math.floor(am.t * (aBo[z] + aBq[z] / 2 - lm) / (m0 - lm)), aCU = Math.floor(am.iw * (aBp[z] +
			aBr[z] / 2 - ln) / (m1 - ln) - .1 * fontSize), aCV = aQ.a35[z], h5.font = b1.p1.qD(1 === aU.yf[z] ? 4 : 1, fontSize), h5.fillStyle = aCY(fontSize, aCV % 2), bY.db.data[7].value ? aCZ(h5, z, fontSize, aCT, aCU, aCV) : aCa(z,
			fontSize, aCT, aCU, h5), aC3 = !0, 0 < a6p[z] ? function(aCT, aCU, fontSize, z, h5) {
			0 === jD[z] ? aX.tt.uX(aC6[z]) ? (function(aCT, aCU, fontSize, player, nc, h5) {
				for (var t0 = aCU, h3 = (h5.globalAlpha = aCi(fontSize), aCN(player) * (bY.db.data[7].value ? aCD : aBt[player])), sz = aCT - .5 * fontSize / h3 - .9 * fontSize, ee = 0; ee < 2; ee++) h5.fillText(aX.tt.uR(nc), sz, t0),
					sz = aCT + .5 * fontSize / h3 + .9 * fontSize;
				h5.globalAlpha = 1
			}(aCT, aCU, fontSize, z, aC6[z], h5), aCc(aCT, aCU, fontSize, 0, 0, h5)) : aX.tt.uZ(aC6[z]) ? (aCl(aCT, aCU, fontSize, aC6[z], 0, h5), aCc(aCT, aCU, fontSize, 0, 1, h5)) : (aCl(aCT, aCU, fontSize, aC6[z], 1, h5), aCc(aCT, aCU,
				fontSize, 1, 0, h5)) : aCl(aCT, aCU, fontSize, aC6[z], 0, h5)
		}(aCT, aCU, fontSize, z, h5) : 0 === jD[z] && aCc(aCT, aCU, fontSize, 0, 0, h5), aCX && (0 < a6p[z + a1.eH] || 0 < a6p[z + 2 * a1.eH] || 0 < a6p[z + 3 * a1.eH] || 0 < a6p[z + 4 * a1.eH]) && function(aCT, aCU, fontSize, z, h5) {
			var ef, fm = -1;
			for (ef = 4; 1 <= ef; ef--) 0 < a6p[z + ef * a1.eH] && fm++;
			for (ef = 1; ef < 5; ef++) 0 < a6p[z + ef * a1.eH] && (! function(aCT, aCU, fontSize, ef, z, aCg, dv, h5) {
				var y9;
				if (1 === ef) {
					z = aC6[z + a1.eH];
					if (!aX.tt.uY(z)) return function(aCT, aCU, fontSize, nc, aCg, h5) {
						h5.globalAlpha = aCi(fontSize);
						aCT -= .534 * aCg * fontSize, aCg = aCU + 1.59 * fontSize;
						h5.font = b1.p1.qD(0, .785 * fontSize), h5.fillText(aX.tt.uR(nc), aCT, aCg), h5.globalAlpha = 1
					}(aCT, aCU, fontSize, z, aCg, h5);
					y9 = aX.sY.u0[z - 1024 + aX.tt.uB]
				} else y9 = 2 === ef ? a8.a06()[4].h4[+(dv < 255)] : (3 === ef ? a8.a06()[5] : a8.a06()[6]).h4[0];
				z = aX.sY.u1, dv = .8 * fontSize / z, ef = aCT - .5 * dv * z - .534 * aCg * fontSize, aCT = aCU + 1.4 * dv * z;
				h5.setTransform(dv, 0, 0, dv, ef, aCT), h5.globalAlpha = aCi(fontSize), h5.drawImage(y9, 0, 0), h5.globalAlpha = 1, h5.setTransform(1, 0, 0, 1, 0, 0)
			}(aCT, aCU, fontSize, ef, z, fm, a6p[z + ef * a1.eH], h5), fm -= 2)
		}(aCT, aCU, fontSize, z, h5), (aCW = aBw * fontSize) < aBy || (h5.font = b1.p1.qD(1, aCW), aCU += Math.floor(.78 * fontSize), bY.db.data[7].value ? aCa(z, aCW, aCT, aCU, h5) : aCZ(h5, z, aCW, aCT, aCU, aCV)))
	}

	function aCa(z, fontSize, eR, eT, h5) {
		var ___id = z;
		h5.fillText(aU.a1N[z], eR, eT), z < a1.jS && 2 !== aU.yf[z] || (z = fontSize / aBt[z], h5.fillRect(eR - .5 * z, eT + b1.p1.uS * fontSize, z, Math.max(1, .1 * fontSize)));
		bY.db.data[7].value && __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (h5.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), h5.fillText(__fx.utils.getDensity(___id), eR, eT + fontSize));
	}

	function aCZ(h5, z, fontSize, aCT, aCU, aCV) {
		var ___id = z;
		z = b1.w8.zC(aU.gN[z]);
		aCV >> 1 & 1 ? (h5.lineWidth = .05 * fontSize, h5.strokeStyle = aCY(fontSize, aCV % 2), h5.strokeText(z, aCT, aCU)) : (1 < aCV && (h5.lineWidth = .12 * fontSize, h5.strokeStyle = aCY(fontSize, aCV), h5.strokeText(z, aCT, aCU)), h5.fillText(z,
			aCT, aCU));
		bY.db.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (h5.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), h5.fillText(__fx.utils.getDensity(___id), aCT, aCU + fontSize))
	}

	function aCc(aCT, aCU, fontSize, aCg, aCh, h5) {
		var a0g = .95 * fontSize / aC8,
			aCT = aCT - .5 * a0g * aC7 + .8 * aCg * fontSize,
			aCg = aCU - 1.76 * a0g * aC8 - (.35 - b1.p1.uS + .7) * aCh * fontSize;
		h5.setTransform(a0g, 0, 0, a0g, aCT, aCg), h5.globalAlpha = aCi(fontSize), h5.drawImage(aP.get(4), 0, 0), h5.globalAlpha = 1, h5.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aCl(aCT, aCU, fontSize, nc, aCg, h5) {
		var gy, sz, a0g;
		h5.globalAlpha = aCi(fontSize), aX.tt.uY(nc) ? (gy = aX.sY.u1, h5.setTransform(a0g = 1.1 * fontSize / gy, 0, 0, a0g, sz = aCT - .5 * a0g * gy - .8 * aCg * fontSize, a0g = aCU - 1.55 * a0g * gy), h5.drawImage(aX.sY.u0[nc - 1024 + aX.tt.uB], 0,
			0), h5.setTransform(1, 0, 0, 1, 0, 0)) : (sz = aCT - .8 * aCg * fontSize, a0g = aCU - (.35 - b1.p1.uS + 1) * fontSize, h5.fillText(aX.tt.uR(nc), sz, a0g)), h5.globalAlpha = 1
	}

	function aCY(fontSize, aCV) {
		return aBv <= fontSize && fontSize < aBu ? bV.aCn[aCV] + aCi(fontSize).toFixed(3) + ")" : bV.aCo[aCV]
	}

	function aCi(fontSize) {
		return aBv <= fontSize && fontSize < aBu ? 1 - (fontSize - aBv) / (aBu - aBv) : 1
	}

	function aCx(h3, t) {
		return 1 + Math.floor(aBx * h3 * t)
	}

	function aCu(z) {
		for (var left = aBo[z], ed = aBo[z] - aU.hy[z] - 1; 0 <= ed; ed--)
			if (!aCy(z, --left, aBp[z], aBr[z])) {
				left++;
				break
			} var right = aBo[z];
		for (ed = aU.hz[z] - aBo[z] - aBq[z]; 0 <= ed; ed--)
			if (!aCy(z, ++right + aBq[z] - 1, aBp[z], aBr[z])) {
				right--;
				break
			} var eR = Math.floor((left + right) / 2),
			top = aBp[z];
		for (ed = aBp[z] - aU.i0[z] - 1; 0 <= ed; ed--)
			if (!aCz(z, eR, --top, aBq[z])) {
				top++;
				break
			} var bottom = aBp[z];
		for (ed = aU.i1[z] - aBp[z] - aBr[z]; 0 <= ed; ed--)
			if (!aCz(z, eR, ++bottom + aBr[z] - 1, aBq[z])) {
				bottom--;
				break
			} var eT = Math.floor((top + bottom) / 2);
		aCr(z, eR, eT, aBq[z], aBr[z]) && (aBo[z] = eR, aBp[z] = eT)
	}

	function aCr(player, eR, eT, t, iw) {
		eN = Math.floor(.2 * t);
		for (var eN, ef = eR + t - 1; eR <= ef; ef--)
			if (!aCy(player, ef, eT, iw)) return;
		for (ef = eT + iw - 1 - (eN = (eN = Math.floor(.25 * iw)) < 1 ? 1 : eN); eT + eN <= ef; ef--)
			if (!aCz(player, eR, ef, t)) return;
		return 1
	}

	function aCy(player, eR, eT, iw) {
		return aQ.tS(player, 4 * (eT * bH.eV + eR)) && aQ.tS(player, 4 * ((eT + iw - 1) * bH.eV + eR))
	}

	function aCz(player, eR, eT, t) {
		return aQ.tS(player, 4 * (eT * bH.eV + eR)) && aQ.tS(player, 4 * (eT * bH.eV + eR + t - 1))
	}
	this.dI = function() {
		if (a50 = 0 === (a50 = bY.db.data[11].value) ? 280 : 1 === a50 ? 187 : 112, aC3 = !1, aBz = .88, aBw = .5, aBx = 1.8, aBy = 12 - 3 * bY.db.data[9].value, aBn = aBm = 0, aBo = new Uint16Array(a1.eH), aBp = new Uint16Array(a1.eH), aBq =
			new Uint16Array(a1.eH), aBr = new Uint16Array(a1.eH), aBs = new Float32Array(a1.eH), aBt = new Float32Array(a1.eH), aC6 = new Uint16Array(2 * a1.eH), a6p = new Uint8Array(5 * a1.eH), aCF = new Uint8Array(a1.eH), aCG = new Uint8Array(
				a1.eH), aCE || (aC4 = aC4 || document.createElement("canvas")), p5(), aC1 = aC0 = 0, aC2 = 1, bY.db.data[7].value) {
			var z, aCM;
			for (aCH(), qw.font = b1.p1.qD(1, 100), aCM = 100 / Math.floor(qw.measureText("900 000").width), z = a1.eH - 1; 0 <= z; z--) aBs[z] = Math.min(aCM, 2 * aBt[z]);
			aCD = aCM, aCC[0] = 100 / (aCM * Math.floor(qw.measureText("5 000 000").width)), aCC[1] = 100 / (aCM * Math.floor(qw.measureText("50 000 000").width)), aCC[2] = 100 / (aCM * Math.floor(qw.measureText("500 000 000").width)), aCC[3] =
				100 / (aCM * Math.floor(qw.measureText("1 000 000 000").width))
		} else aCH();
		! function() {
			var z;
			for (z = a1.eH - 1; 0 <= z; z--) aU.g9[z] < 12 ? (aBo[z] = aU.hy[z] + 1, aBp[z] = aU.i0[z] + 1, aBq[z] = 1, aBr[z] = 1) : (aBo[z] = aU.hy[z], aBp[z] = aU.i0[z] + 1, aBq[z] = 4, aBr[z] = 2);
			if (a1.gh)
				for (z = 0; z < a1.jS; z++) aBq[z] = 0;
			aC7 = aP.get(4).width, aC8 = aP.get(4).height
		}()
	}, this.aBj = function(fr, a1g) {
		a1g > 18 * aU.g9[fr] ? (aCG[fr] = 6, aQ.a35[fr] = 2 + aQ.a35[fr] % 2) : (aCF[fr] = 4, (aQ.a35[fr] < 2 || 3 < aQ.a35[fr]) && (aQ.a35[fr] = 6 + aQ.a35[fr] % 2))
	}, this.nq = function(fr, a1g) {
		a1g > 6 * aU.g9[fr] ? (aCG[fr] = 6, aQ.a35[fr] = 4 + aQ.a35[fr] % 2) : (aCF[fr] = 4, (aQ.a35[fr] < 4 || 5 < aQ.a35[fr]) && (aQ.a35[fr] = 8 + aQ.a35[fr] % 2))
	}, this.resize = function() {
		p5(), aCE || aCL(aC5)
	}, this.zU = function() {
		for (var z = 0; z < a1.jS; z++) aU.hz[z] - aU.hy[z] != 3 || aU.i1[z] - aU.i0[z] != 3 ? (aBo[z] = aU.hy[z] + (aU.hz[z] !== aU.hy[z] ? 1 : 0), aBp[z] = aU.i0[z], aBq[z] = 1, aBr[z] = 1) : (aBo[z] = aU.hy[z], aBp[z] = aU.i0[z] + 1, aBq[z] =
			4, aBr[z] = 2)
	}, this.oa = function(player, o2, aCO) {
		! function(player, o2, aCO) {
			player += o2 * a1.eH;
			0 === o2 ? aC6[player] === aCO && 0 < a6p[player] ? a6p[player] = 0 : (aC6[player] = aCO, a6p[player] = aX.tt.uX(aCO) ? 255 : 64) : 1 === o2 ? (a6p[player] = 64, aC6[player] = aCO) : a6p[player] = aCO
		}(player, o2, aCO), 2 === a1.vH && this.l6(!0)
	}, this.qv = function() {
		aCE ? aCL(qw) : aC3 && (1 !== aC2 ? (qw.imageSmoothingEnabled = !0, qw.setTransform(aC2, 0, 0, aC2, 0, 0), qw.drawImage(aC4, -aC0 / aC2, -aC1 / aC2), qw.setTransform(1, 0, 0, 1, 0, 0), qw.imageSmoothingEnabled = !1) : qw.drawImage(aC4, -
			aC0, -aC1))
	}, this.a3p = function(hV, hY) {
		aC0 += hV, aC1 += hY
	}, this.wu = function(hV, hY) {
		aT.a3p(hV, hY)
	}, this.zoom = function(xr, kZ, ka) {
		aC2 *= xr, aC0 = (aC0 + kZ) * xr - kZ, aC1 = (aC1 + ka) * xr - ka
	}, this.l6 = function(bd) {
		return !aCE && !(!aCB && !bd && bU.du < aCA + (1 === aC2 && 0 === aC0 && 0 === aC1 && (a1.zv() || a1.gh || 2 === a1.vH) ? 1e3 : a50) || (aCB = !1, aCA = bU.du, aCL(aC5), 0))
	}, this.aCR = function(z) {
		return aCN(z) * aBs[z]
	}, this.aCS = function(player) {
		return aBs[player]
	}, this.iH = function() {
		bU.jP() % 10 == 9 && (aCB = a1.zx() && !a1.zv()), !a1.zv() && 4 <= ++aBn && function() {
			var z, ed, ee;
			for (aBn = 0, ee = 4; 1 <= ee; ee--)
				for (ed = aZ.jT - 1; 0 <= ed; ed--) z = aZ.jV[ed] + ee * a1.eH, 0 < a6p[z] && a6p[z] < 255 && a6p[z]--;
			if (2 !== a1.vH)
				for (ed = aZ.jT - 1; 0 <= ed; ed--) z = aZ.jV[ed], 0 < a6p[z] && a6p[z] < 255 && a6p[z]--
		}();
		var z, ed, eK = Math.floor(.1 * aZ.jT);
		for (eK = (eK = eK < 8 ? 8 : eK) > aZ.jT ? aZ.jT : eK, z = aBm + eK - 1; aBm <= z; z--) ed = z % aZ.jT, ! function(z) {
			var h3 = aCN(z) * aBs[z];
			0 < aBq[z] && aCr(z, aBo[z], aBp[z], aBq[z], aBr[z]) ? ! function(z) {
				for (var eR, eT, t, iw, e0 = !1, ee = 0; ee < 8; ee++) {
					if (t = aBq[z] + 2, iw = aBr[z] + 2, t > aU.hz[z] - aU.hy[z] + 1 || iw > aU.i1[z] - aU.i0[z] + 1) return e0;
					if (eR = aBo[z] - 1, eT = aBp[z] - 1, !aCr(z, eR, eT, t, iw)) return e0;
					aBo[z] = eR, aBp[z] = eT, aBq[z] = t, aBr[z] = iw, e0 = !0
				}
				return e0
			}(z) && function(z, h3) {
				for (var eR, eT, t, iw, e0 = !1, a6y = aBq[z], ly = 1 + Math.floor(.02 * a6y), ee = 1; ee < 5; ee++) {
					if ((t = a6y + ee * ly) > aU.hz[z] - aU.hy[z] + 1) return e0;
					if ((iw = aCx(h3, t)) > aU.i1[z] - aU.i0[z] + 1) return e0;
					eR = aU.hy[z] + Math.floor(Math.random() * (aU.hz[z] - aU.hy[z] + 2 - t)), eT = aU.i0[z] + Math.floor(Math.random() * (aU.i1[z] - aU.i0[z] + 2 - iw)), aCr(z, eR, eT, t, iw) && (aBo[z] = eR, aBp[z] = eT, aBq[z] = t,
						aBr[z] = iw, e0 = !0)
				}
				return e0
			}(z, h3) && aCu(z) : ! function(z, h3) {
				var iw, eR = aBo[z] + 1,
					eT = aBp[z] + 1,
					t = aBq[z] - 2;
				for (;;) {
					if (t < 1) {
						aBq[z] = 0;
						break
					}
					if (iw = aCx(h3, t), aCr(z, eR, eT, t, iw)) return aBo[z] = eR, aBp[z] = eT, aBq[z] = t, aBr[z] = iw, 1;
					eR++, eT++, t -= 2
				}
				return
			}(z, h3) ? function(z, h3) {
				var eR, eT, t, iw, ee, m5, ii = aU.hz[z] - aU.hy[z] + 1,
					kn = Math.floor(.02 * ii);
				for (m5 = -6 * (kn = kn < 1 ? 1 : kn), ee = ii; m5 <= ee; ee -= kn)
					if (iw = aCx(h3, t = 0 < ee ? ee : 1), eR = aU.hy[z] + Math.floor(Math.random() * (aU.hz[z] - aU.hy[z] + 2 - t)), eT = aU.i0[z] + Math.floor(Math.random() * (aU.i1[z] - aU.i0[z] + 2 - iw)), aCr(z, eR, eT, t, iw))
						return aBo[z] = eR, aBp[z] = eT, aBq[z] = t, aBr[z] = iw
			}(z, h3) : aCu(z)
		}(aZ.jV[ed]);
		aBm = (aBm += eK) % aZ.jT
	}, this.l1 = function() {
		var z, fr, hE, hF;
		if (bU.jP() % 4 == 1)
			for (z = aZ.jT - 1; 0 <= z; z--) fr = aZ.jV[z], aQ.a35[fr] < 2 || ((hE = Math.max(aCF[fr] - 1, 0)) === (hF = Math.max(aCG[fr] - 1, 0)) ? 0 === hE && (aQ.a35[fr] %= 2) : 0 === hF && aQ.a35[fr] < 6 && (aQ.a35[fr] += 4), aCF[fr] = hE,
				aCG[fr] = hF)
	}, this.a1R = function(player) {
		var z = player + 2 * a1.eH,
			dv = a6p[z];
		return 0 < dv && (aA.vO(50, player), a6p[z] = 0, 255 === dv)
	}, this.a0Q = function(player) {
		return 255 === a6p[player + 2 * a1.eH]
	}
}

function cL() {
	var ve, aD0;
	this.dI = function() {
		ve = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";");
		var z, ed, a1i = ["K ", " Y", "E ", " Z", " z", " s", "S "],
			aD1 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "];
		for (aD0 =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";"), z = ve.length - 1; 0 <= z; z--)
			for (ed = a1i.length - 1; 0 <= ed; ed--) ve[z] = ve[z].replace(a1i[ed], aD1[ed]);
		if (__fx.settings.realisticNames) ve = realisticNames;
	}, this.v = function() {
		var z;
		if (ax.jm && ax.jn.aB4)
			for (z = a1.jS; z < a1.eH; z++) aU.a1N[z] = aU.wA[z] = ax.jn.aB4[z % a1.t1];
		else(9 === a1.jq ? function() {
			var z, h7 = an.random(),
				eK = ve.length,
				kD = a1.jS + ao.aD6;
			for (z = kD - 1; z >= a1.jS; z--) aU.a1N[z] = aU.wA[z] = ve[(z + h7) % eK];
			for (eK = aD0.length, z = kD; z < a1.eH; z++) aU.a1N[z] = aU.wA[z] = aD0[z % eK]
		} : a1.js ? function() {
			var z, h7 = an.random();
			for (z = a1.jS; z < a1.eH; z++) aU.a1N[z] = aU.wA[z] = ve[(z + h7) % a1.eH]
		} : function() {
			var z, eK = ve.length,
				h7 = an.random();
			for (z = a1.jS; z < a1.eH; z++) aU.a1N[z] = aU.wA[z] = ve[(z + h7) % eK]
		})()
	}
}

function cg() {
	this.aD7 = [], this.aD8 = [], this.dI = function() {
		this.aD7 = [], this.aD8 = []
	}, this.iH = function() {
		0 <= this.aD7.length && this.aD9(this.aD7), 0 <= this.aD8.length && this.aD9(this.aD8)
	}, this.aD9 = function(f0) {
		for (var ee = -1, z = f0.length - 1; 0 <= z; z--)
			if (f0[z].du--, f0[z].du <= 0) {
				ee = z;
				break
			} for (z = ee; 0 <= z; z--) f0.shift()
	}, this.a0E = function(id, tj, aDA) {
		return this.eg(this.aD7, id, tj, aDA)
	}, this.aDB = function(id, tj, aDA) {
		return this.eg(this.aD8, id, tj, aDA)
	}, this.eg = function(f0, id, tj, aDA) {
		return ! function(f0, id, tj) {
			var z, kG;
			for (z = tj.length - 1; 0 <= z; z--)
				for (kG = f0.length - 1; 0 <= kG; kG--)
					if (f0[kG].player === tj[z] && id === f0[kG].id) return 1;
			return
		}(f0, id, tj) && (aDA && function(f0, id, tj) {
			var z;
			for (z = tj.length - 1; 0 <= z; z--) f0.push({
				player: tj[z],
				id: id,
				du: 384
			})
		}(f0, id, tj), !0)
	}
}

function cK() {
	this.wA = new Array(a1.eH), this.a1N = new Array(a1.eH), this.yf = new Uint8Array(a1.eH), this.lK = new Uint8Array(a1.eH), this.hy = new Uint16Array(a1.eH), this.i0 = new Uint16Array(a1.eH), this.hz = new Uint16Array(a1.eH), this.i1 =
		new Uint16Array(a1.eH), this.g9 = new Uint32Array(a1.eH), this.tG = new Uint32Array(a1.eH), this.gN = new Uint32Array(a1.eH), this.fl = null, this.fz = null, this.g0 = null, this.ek = null, this.oN = new Uint16Array(a1.eH), this.iP =
		new Uint16Array(a1.eH), this.iQ = new Uint16Array(a1.eH), this.vw = new Uint16Array(a1.eH), this.w2 = new Uint8Array(a1.eH), this.yl = new Uint16Array(a1.eH), this.dI = function(tj) {
			for (var z = tj.length - 1; 0 <= z; z--) this.a1N[z] = this.wA[z] = tj[z].name, this.yf[z] = tj[z].a9R;
			this.lK.fill(0), this.hy.fill(0), this.i0.fill(0), this.hz.fill(0), this.i1.fill(0), this.g9.fill(0), this.tG.fill(0), this.gN.fill(0), __fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx
				.customLobby.setActive(false), this.fl = new Array(a1.eH), this.fz = new Array(a1.eH), this.g0 = new Array(a1.eH), this.ek = new Array(a1.eH), this.oN.fill(0), this.iP.fill(0), this.iQ.fill(0), this.vw.fill(0), this.w2.fill(0), this
				.yl.fill(0)
		}
}

function ce() {
	this.aDE = function(player) {
		a4.lJ(player), a1.vJ++, aU.yf[player] = 2, aU.vw[player] = bX.vq.aAe(), player === a1.e4 && (aK.show(!1, !1), aJ.a5d(), bG.result.w0()), aT.a1R(player)
	}
}

function cE() {
	this.jV = null, this.jT = 0, this.zo = function() {
		for (this.jT = 0, z = a1.eH - 1; 0 <= z; z--) 0 !== aU.lK[z] && this.jT++;
		this.jV = new Uint16Array(this.jT);
		for (var eK = 0, z = 0; z < a1.eH; z++) 0 !== aU.lK[z] && (this.jV[eK++] = z)
	}, this.l0 = function() {
		for (var g9 = aU.g9, tG = aU.tG, w2 = aU.w2, jV = aZ.jV, z = aZ.jT - 1; 0 <= z; z--) {
			var dv, fr = jV[z];
			g9[fr] <= bA.em(tG[fr], 4) ? aY.dR(fr) : g9[fr] >= tG[fr] ? (dv = g9[fr], 250 <= (tG[fr] = dv) && (w2[fr] = 1)) : tG[fr] -= Math.max(1, bA.em(tG[fr] - g9[fr], 1e3))
		}
		this.aDG()
	}, this.aDG = function() {
		for (var lK = aU.lK, jU = this.jV, a6G = this.jT, z = a6G - 1; 0 <= z; z--) 0 === lK[jU[z]] && (jU[z] = jU[--a6G]);
		this.jT = a6G
	}
}

function cM() {
	var aDH;
	this.jw = null, this.dI = function() {
		aDH = [], 9 === a1.jq && this.aDI()
	}, this.aDI = function() {
		var z, aDJ = [57, 85, 105, 150, 190, 333];
		if (this.aD6 = 0, this.jw = [0, 0, 0, 0, 0, 0], a1.jS <= aDJ[0]) this.jw[0] = Math.max(bA.em(a1.jS * (512 - a1.jS), aDJ[0]), 13), a1.jp = this.jw[0];
		else
			for (a1.jp = a1.eH - a1.jS, z = 1; z < 6; z++)
				if (a1.jS <= aDJ[z]) {
					this.jw[z - 1] = 512 - aDJ[z - 1] - bA.em((512 - aDJ[z - 1]) * (a1.jS - aDJ[z - 1]), aDJ[z] - aDJ[z - 1]), this.jw[z] = 512 - a1.jS - this.jw[z - 1];
					break
				} a1.t1 = a1.jS + a1.jp
	}, this.aAl = function(player) {
		aDH.push({
			player: player,
			fm: 14 + an.ij(20)
		})
	}, this.iH = function() {
		var z;
		if (9 === a1.jq)
			for (z = aDH.length - 1; 0 <= z; z--) --aDH[z].fm <= 0 && (aT.oa(aDH[z].player, 0, aX.tt.uE + aX.tt.uT), aDH.splice(z))
	}
}

function cv() {
	function aDQ(z) {
		return void 0 !== bH.jn.sp[z].aDX
	}

	function aDO(z) {
		return 1 !== z && !aDQ(z) && z !== bH.aAt()
	}
	this.aB8 = 22, this.eV = 0, this.eW = 0, this.sV = null, this.sR = null, this.sS = null, this.sW = null, this.g2 = 0, this.a8q = 0, this.sT = !1, this.sU = new aDL, this.jn = new aDM, this.a1o = new aDN, this.dI = function() {
		this.jn.dI()
	}, this.v = function(map, a8u) {
		((map %= this.aB8) !== this.g2 || aDO(this.g2) && a8u !== this.a8q) && (this.sT = !1, this.sU.a92(), an.zk(map), this.g2 = map, this.a8q = a8u, aDO(map) && (bH.jn.sp[map].aDP = a8u), aDQ(this.g2) ? aDR() : (map = bH.jn.sp[this.g2], this
			.eV = map.t, this.eW = map.iw, an.zk(map.aDP), ad.v([this.eV, this.eW, map.lP, map.lM]), aDS(), ac.aDT(), ad.aDU()))
	}, this.g1 = function(z) {
		return 3 === z || 7 === z || 9 === z || 21 === z || z === this.aAt()
	}, this.aDV = function(z) {
		return 2 === z || 7 === z || 9 === z || 20 === z
	}, this.aDW = function(z) {
		return 1 === z
	}, this.aAt = function() {
		return this.aB8
	}
}

function aDL() {
	function aDg() {
		bH.sU.iH()
	}

	function aDm(fr, aDl) {
		0 < aDl && (bH.sW[fr] += aDl, bH.sW[fr + 1] += aDl, bH.sW[fr + 2] += aDl)
	}

	function go(fr) {
		return bH.sW[fr + 2] > bH.sW[fr] && bH.sW[fr + 2] > bH.sW[fr + 1]
	}
	this.a40 = -1, this.dt = 0, this.aDY = 0, this.aDZ = 8, this.aDa = 32, this.aDb = 8, this.aDc = 32, this.aDd = [0, 0], this.a35 = [0, 0, 0, 0], this.ht = null, this.aDe = !0, this.aDf = !1, this.a92 = function() {
		-1 !== this.a40 && clearTimeout(this.a40), this.a40 = -1, this.ht = null, ad.aDU()
	}, this.dI = function() {
		7 === aN.wY() || this.aDf || (this.aDe = !0, this.dt = 0, this.aDY = 1, this.aDd = [bH.jn.sp[bH.g2].so[0], bH.jn.sp[bH.g2].sq[0]], this.a35 = [bH.jn.sp[bH.g2].aDX[3], bH.jn.sp[bH.g2].aDX[4], bH.jn.sp[bH.g2].aDX[5], bH.jn.sp[bH.g2].aDX[
			6]], this.aDZ = bH.jn.sp[bH.g2].aDX[7], this.aDa = bH.jn.sp[bH.g2].aDX[8], this.aDb = bH.jn.sp[bH.g2].aDX[9], this.aDc = bH.jn.sp[bH.g2].aDX[10], this.aDe ? this.a40 = setTimeout(aDg, 16) : this.iH())
	}, this.iH = function() {
		if (8 === aN.wY() && a5.ld()) this.a40 = setTimeout(aDg, 16);
		else {
			if (0 === this.dt) {
				var aDP = an.aDh();
				if (an.zk(bH.jn.sp[bH.g2].aDX[2]), ad.v([bH.eV, bH.eW, bH.jn.sp[bH.g2].aDX[0], bH.jn.sp[bH.g2].aDX[1]]), an.zk(aDP), this.ht = ad.aDi(), this.dt++, this.aDe) return void(this.a40 = setTimeout(aDg, 16))
			}
			for (var fr, e6, aDP = this.aDe ? 10 : 1e6, aDP = bH.eW - this.aDY - 1 < aDP ? bH.eW - this.aDY - 1 : aDP, tD = this.aDY + aDP, eT = this.aDY; eT < tD; eT++)
				for (var eR = 1; eR < bH.eV - 1; eR++) go(fr = 4 * (e6 = eR + eT * bH.eV)) ? this.aDj(fr, e6, 1) : (this.aDj(fr, e6, 0), function(eR, eT, fr) {
					return 1 < eR && go(fr - 4) || eR < bH.eV - 2 && go(fr + 4) || 1 < eT && go(fr - 4 * bH.eV) || eT < bH.eW - 2 && go(fr + 4 * bH.eV)
				}(eR, eT, fr) && this.aDk(eR, eT));
			this.aDY = tD, this.aDY >= bH.eW - 1 ? (bH.sR.putImageData(bH.sS, 0, 0, 1, 1, bH.eV - 2, bH.eW - 2), bU.dQ = !0, this.a92()) : this.aDe && (this.a40 = setTimeout(aDg, 16))
		}
	}, this.aDj = function(fr, e6, o2) {
		aDm(fr, Math.floor(this.aDd[o2] + this.a35[o2] * this.ht[e6] / 1e4) - bH.sW[fr])
	}, this.aDn = function(fr, h7, aDo, o2, a35) {
		aDm(fr, Math.floor(this.aDd[o2] + (1 - h7 / aDo) * a35) - bH.sW[fr])
	}, this.aDk = function(kZ, ka) {
		for (var fr, h7, aDo, ss = kZ - this.aDa, st = ka - this.aDa, tE = kZ + this.aDa, tD = ka + this.aDa, ss = ss < 1 ? 1 : ss, tE = tE > bH.eV - 2 ? bH.eV - 2 : tE, tD = tD > bH.eW - 2 ? bH.eW - 2 : tD, eT = st < 1 ? 1 : st; eT <= tD; eT++)
			for (var eR = ss; eR <= tE; eR++) go(fr = 4 * (eR + eT * bH.eV)) ? (aDo = this.aDZ + (this.aDa - this.aDZ) * this.ht[eR + bH.eV * eT] / 1e4, Math.abs(kZ - eR) > aDo || Math.abs(ka - eT) > aDo || aDo <= (h7 = Math.sqrt((kZ - eR) * (
				kZ - eR) + (ka - eT) * (ka - eT))) || this.aDn(fr, h7, aDo, 1, this.a35[3])) : (aDo = this.aDb + (this.aDc - this.aDb) * this.ht[eR + bH.eV * eT] / 1e4, Math.abs(kZ - eR) > aDo || Math.abs(ka - eT) > aDo || aDo <= (h7 = Math
				.sqrt((kZ - eR) * (kZ - eR) + (ka - eT) * (ka - eT))) || this.aDn(fr, h7, aDo, 0, this.a35[2]))
	}
}

function aDS() {
	2 === bH.g2 ? aDp([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bH.g2 ? aDp([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bH.g2 ? aDp([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bH.g2 ? aDp([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bH.g2 && aDp([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aDp(aDq, aDr, aDs, aDt, aDu) {
	for (var eR, eT, aDw, aDx, xr, aDy, hU = aDq.length - 1, aDv = bH.eV + bH.eW, eK = (aDv *= aDv, aDs.length), z = eK - 1; 0 <= z; z--) aDs[z] *= aDs[z];
	var aDz = new Array(eK),
		aE0 = new Array(eK),
		aE1 = new Array(eK),
		en = ad.aDi();
	if (void 0 === aDu)
		for (aDu = new Array(eK), z = eK - 1; 0 <= z; z--) aDu[z] = 0;
	for (z = 1; z < eK; z++) aDz[z] = aDs[z] - aDs[z - 1], aE0[z] = aDt[z] - aDt[z - 1], aE1[z] = aDu[z] - aDu[z - 1];
	for (eR = bH.eV - 1; 0 <= eR; eR--)
		for (eT = bH.eW - 1; 0 <= eT; eT--) {
			for (aDw = aDv, z = hU; 0 <= z; z--) aDw = (aDx = (eR - aDq[z]) * (eR - aDq[z]) + (eT - aDr[z]) * (eT - aDr[z])) < aDw ? aDx : aDw;
			for (xr = aDt[eK - 1], aDy = aDu[eK - 1], z = 1; z < eK; z++)
				if (aDw < aDs[z]) {
					xr = aDt[z - 1] + aAE((aDw - aDs[z - 1]) * aE0[z], aDz[z]), aDy = aDu[z - 1] + aAE((aDw - aDs[z - 1]) * aE1[z], aDz[z]);
					break
				} aE2(bH.eV * eT + eR, xr, aDy, en)
		}
}

function aE2(o2, xr, aDy, en) {
	xr < 500 ? en[o2] = bA.em(en[o2] * xr * 2, 1e3) : 500 < xr && (en[o2] += bA.em(2 * (1e4 - en[o2]) * (xr - 500), 1e3)), en[o2] += bA.em(aDy * (10 * xr - en[o2]), 1e3)
}

function cO() {
	var aE3;

	function aED(y9, h3, eR, eT, globalAlpha) {
		bH.sR.save(), bH.sR.globalAlpha = globalAlpha, bH.sR.imageSmoothingEnabled = !1, bH.sR.scale(h3, h3), bH.sR.drawImage(y9, Math.floor(eR * (bH.eV / h3 - y9.width)), Math.floor(eT * (bH.eW / h3 - y9.height))), bH.sR.restore()
	}
	this.a1l = 0, this.a1m = 0, this.a1n = 0, this.a1o = 0, this.dI = function() {
		(aE3 = new Array(bH.aB8))[0] = {
			t: [0, 5e3, 8e3, 1e4],
			h7: [220, 250, 255, 220],
			qT: [190, 220, 0, 0],
			ee: [170, 200, 0, 0]
		}, aE3[1] = {
			t: [0, 4e3, 5e3, 6e3, 1e4],
			h7: [25, 0, 100, 0, 25],
			qT: [25, 0, 0, 0, 25],
			ee: [25, 0, 0, 0, 25]
		}, aE3[2] = {
			t: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			h7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			qT: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ee: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aE3[3] = {
			t: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			h7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			qT: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ee: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aE3[4] = {
			t: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			h7: [10, 10, 20, 10, 10, 170, 212],
			qT: [20, 20, 60, 100, 100, 110, 170],
			ee: [70, 70, 160, 30, 30, 60, 120]
		}, aE3[5] = {
			t: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			h7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			qT: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ee: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aE3[6] = {
			t: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			h7: [10, 10, 60, 255, 255, 200, 200],
			qT: [10, 10, 60, 255, 255, 200, 200],
			ee: [80, 80, 255, 255, 255, 200, 200]
		}, aE3[7] = {
			t: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			h7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			qT: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ee: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aE3[8] = {
			t: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			h7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			qT: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ee: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aE3[9] = {
			t: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			h7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			qT: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ee: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aE3[20] = {
			t: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			h7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			qT: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ee: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aE3[21] = {
			t: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			h7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			qT: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ee: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aDT = function() {
		var aEC, z, ed, f1, h1 = function() {
				var h1;
				return bH.sV = document.createElement("canvas"), bH.sV.width = bH.eV, bH.sV.height = bH.eW, bH.sR = bH.sV.getContext("2d", {
					alpha: !1
				}), h1 = bH.sR.getImageData(0, 0, bH.eV, bH.eW), bH.sW = h1.data, h1
			}(),
			t = aE3[bH.g2].t,
			h7 = aE3[bH.g2].h7,
			qT = aE3[bH.g2].qT,
			ee = aE3[bH.g2].ee,
			en = ad.aDi(),
			eK = t.length - 2,
			aE7 = new Array(1 + eK),
			aE8 = new Array(1 + eK),
			aE9 = new Array(1 + eK),
			aEA = new Array(1 + eK);
		for (ed = eK; 0 <= ed; ed--) aE7[ed] = t[ed + 1] - t[ed], aE8[ed] = h7[ed + 1] - h7[ed], aE9[ed] = qT[ed + 1] - qT[ed], aEA[ed] = ee[ed + 1] - ee[ed];
		for (z = bH.eV * bH.eW - 1; 0 <= z; z--)
			for (ed = eK; 0 <= ed; ed--)
				if (en[z] >= t[ed]) {
					f1 = en[z] - t[ed], bH.sW[4 * z] = h7[ed] + aAE(aE8[ed] * f1, aE7[ed]), bH.sW[4 * z + 1] = qT[ed] + aAE(aE9[ed] * f1, aE7[ed]), bH.sW[4 * z + 2] = ee[ed] + aAE(aEA[ed] * f1, aE7[ed]), bH.sW[4 * z + 3] = 255;
					break
				} bH.sR.putImageData(h1, 0, 0), bH.aDW(bH.g2) && aP.qX() && bH.aDW(bH.g2) && (h1 = aP.a83("arena"), aEC = aP.a83("territorial.io"), aED(h1, 5, .5, .5, .1), aED(aEC, 2, .5, .45, .1)), bH.sT = !0, bU.dQ = !0
	}, this.zm = function() {
		for (var fr, eR, eT, aEE, aEF, f3, a1m = 0, t = bH.eV, iw = bH.eW, f1 = t * iw * 4, aEG = a6Q, aEH = bH.sW, z = t - 1; 0 <= z; z--) aEG[(fr = z << 2) + 2] = aEG[f1 - fr - 2] = 3;
		for (f1 = 4 * t, z = iw - 1; 0 <= z; z--) aEG[(fr = z * f1) + 2] = aEG[fr + f1 - 2] = 3;
		for (aEE = t - 1, aEF = iw - 1, eT = 1; eT < aEF; eT++)
			for (f1 = eT * t, eR = 1; eR < aEE; eR++) f3 = 1 - (aEH[(fr = f1 + eR << 2) + 2] > aEH[fr + 1] && aEH[fr + 2] > aEH[fr]), aEG[fr + 2] = 2 - f3, a1m += f3;
		this.a1l = (t - 2) * (iw - 2), this.a1o = 0, bH.g1(bH.g2) && (bH.a1o.aEI(), bH.a1o.aEJ()), this.a1m = a1.jC = a1m - this.a1o, this.a1n = this.a1l - this.a1m - this.a1o
	}
}

function aDR() {
	var oj;
	10 === bH.g2 ? oj =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bH.g2 ? oj =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bH.g2 ? oj =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bH.g2 ? oj =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bH.g2 ? oj =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bH.g2 ? oj =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bH.g2 ? oj =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bH.g2 ? oj =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bH.g2 ? oj =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bH.g2 && (oj =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new sG).sI(oj)
}

function aDM() {
	this.sp = null, this.dI = function() {
		var aEK = [120, 105, 92],
			cos = [12, 12, 60],
			aEL = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aEM = [140, 130, 120],
			aEN = [12, 12, 76],
			aEO = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aEP = [130, 117, 106],
			aEQ = [12, 12, 68],
			aER = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.sp = new Array(bH.aB8 + 1), __fx.customLobby.setMapInfo(this.sp), this.sp[0] = {
			name: L(114),
			t: 230,
			iw: 230,
			lP: 1e3,
			lM: 2e3,
			aDP: 173
		}, this.sp[1] = {
			name: L(115),
			t: 800,
			iw: 800,
			lP: 100,
			lM: 50,
			aDP: 43
		}, this.sp[2] = {
			name: L(116),
			t: 512,
			iw: 512,
			lP: 128,
			lM: 32,
			aDP: 0
		}, this.sp[3] = {
			name: L(117) + " 1",
			t: 960,
			iw: 960,
			lP: 60,
			lM: 8,
			aDP: 0
		}, this.sp[4] = {
			name: L(118),
			t: 900,
			iw: 900,
			lP: 100,
			lM: 5,
			aDP: 0
		}, this.sp[5] = {
			name: L(119),
			t: 1e3,
			iw: 1e3,
			lP: 100,
			lM: 40,
			aDP: 0
		}, this.sp[6] = {
			name: L(120),
			t: 1e3,
			iw: 1e3,
			lP: 100,
			lM: 20,
			aDP: 0
		}, this.sp[7] = {
			name: L(121),
			t: 1024,
			iw: 1024,
			lP: 128,
			lM: 32,
			aDP: 0
		}, this.sp[8] = {
			name: L(122),
			t: 820,
			iw: 820,
			lP: 200,
			lM: 100,
			aDP: 0
		}, this.sp[9] = {
			name: L(123),
			t: 1024,
			iw: 1024,
			lP: 128,
			lM: 32,
			aDP: 0
		}, this.sp[10] = {
			name: L(124),
			so: aEM,
			sq: aEN,
			aDX: aEO
		}, this.sp[11] = {
			name: L(125),
			so: aEP,
			sq: aEQ,
			aDX: aER
		}, this.sp[12] = {
			name: L(126),
			so: aEP,
			sq: aEQ,
			aDX: aER
		}, this.sp[13] = {
			name: L(127),
			so: aEK,
			sq: cos,
			aDX: aEL
		}, this.sp[14] = {
			name: L(128),
			so: aEK,
			sq: cos,
			aDX: aEL
		}, this.sp[15] = {
			name: L(129),
			so: aEM,
			sq: aEN,
			aDX: aEO
		}, this.sp[16] = {
			name: L(130),
			so: aEM,
			sq: aEN,
			aDX: aEO
		}, this.sp[17] = {
			name: L(131),
			so: aEK,
			sq: cos,
			aDX: aEL
		}, this.sp[18] = {
			name: L(132),
			so: aEP,
			sq: aEQ,
			aDX: aER
		}, this.sp[19] = {
			name: L(133),
			so: aEK,
			sq: cos,
			aDX: aEL
		}, this.sp[20] = {
			name: L(134),
			t: 1024,
			iw: 1024,
			lP: 128,
			lM: 32,
			aDP: 0
		}, this.sp[21] = {
			name: L(117) + " 2",
			t: 940,
			iw: 940,
			lP: 80,
			lM: 8,
			aDP: 0
		}, this.sp[bH.aB8] = {}
	}
}

function aDN() {
	this.aEI = function() {
		for (var fr, eR, f1, aEG = a6Q, aEH = bH.sW, t = bH.eV, aEE = t - 1, aEF = bH.eW - 1, fm = 0, eT = 1; eT < aEF; eT++)
			for (f1 = eT * t, eR = 1; eR < aEE; eR++) aEH[fr = f1 + eR << 2] === aEH[1 + fr] && aEH[fr] === aEH[2 + fr] && (fm++, aEG[2 + fr] = 4);
		ac.a1o = fm
	}, this.aEJ = function() {
		for (var aEG = a6Q, t = bH.eV, aEE = t - 1, aEF = bH.eW - 1, id = 5, eT = 1; eT < aEF; eT++)
			for (var f1 = eT * t, eR = 1; eR < aEE; eR++) {
				var e0 = 2 + (f1 + eR << 2);
				4 === aEG[e0] && (! function(e0, id) {
					var eK = 1,
						aEG = a6Q,
						eM = aQ.eM,
						y3 = [e0];
					aEG[e0] = id;
					for (; eK;) {
						for (var y4 = [], z = 0; z < eK; z++)
							for (var e9 = y3[z], eN = 3; 0 <= eN; eN--) {
								var eO = e9 + eM[eN];
								4 === aEG[eO] && (aEG[eO] = id, y4.push(eO))
							}
						eK = (y3 = y4).length
					}
				}(e0, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function zl() {
	(ta = void 0 === ta ? document.createElement("canvas") : ta).width = bH.eV, ta.height = bH.eW, zp = ta.getContext("2d", {
		alpha: !0
	}), zq = zp.getImageData(0, 0, bH.eV, bH.eW), a6Q = zq.data, b1.pB.sX(a6Q)
}

function cP() {
	var en, t, iw, max, aET, lM, aEV, aEW, aEX, aEY, aEZ, aEa, aEb, aEc, aEU = 1e4;

	function aEj(aEi, lP, eK) {
		var z;
		for (aEV[0] = aEi, z = 1; z < eK; z++) aEV[z] = aEV[z - 1] + lP, lP = aEV[z] >= aEU ? (aEV[z] = aEU - 1, -lP) : aEV[z] < 0 ? (aEV[z] = 0, -lP) : (lP += 16384 <= an.random() ? lM : -lM) < -aET ? -aET : aET < lP ? aET : lP
	}

	function aEl(eR, eT, aEm, eK) {
		(aEm ? function(eR, eT, eK) {
			var z;
			for (z = 0; z < eK; z++) en[eT * t + eR + z] = aEV[z]
		} : function(eR, eT, eK) {
			var z;
			for (z = 0; z < eK; z++) en[eT * t + eR + z * t] = aEV[z]
		})(eR, eT, eK)
	}

	function aEp(value, eK) {
		var z, kn, e0, hJ = value - aEV[eK - 1];
		if (0 != hJ) {
			for (kn = 1 + bA.em(Math.abs(hJ), eK - 1), kn = hJ < 0 ? -kn : kn, aEV[eK - 1] = value, e0 = (e0 = eK - 1 - bA.em(Math.abs(hJ), Math.abs(kn))) < 1 ? 1 : eK - 2 < e0 ? eK - 2 : e0, z = eK - 2; e0 <= z; z--) aEV[z] += hJ - (eK - 1 - z) *
			kn;
			(hJ < 0 ? function(eK) {
				var z;
				for (z = eK - 2; 1 <= z; z--) aEV[z] < 0 && (aEV[z] = -aEV[z] - 1)
			} : function(eK) {
				var z;
				for (z = eK - 2; 1 <= z; z--) aEV[z] >= aEU && (aEV[z] = 2 * aEU - aEV[z] - 1)
			})(eK)
		}
	}

	function aEs(y3, y4, eK) {
		for (var z = 0; z < eK; z++) y3[z] = y4[z]
	}

	function aEt(f0) {
		for (var z = 0; z < f0.length - 1; z++) f0[z] = f0[z + 1] - f0[z];
		f0[f0.length - 1] = f0[f0.length - 3]
	}

	function aEu(a08, gap, hI) {
		aEW.push(a08), aEX.push(gap), aEY.push(hI)
	}
	this.v = function(z4) {
		! function(z4) {
			var z;
			for (t = z4[0], iw = z4[1], aET = z4[2], lM = z4[3], en = new Int16Array(t * iw), max = iw < t ? t : iw, aEV = new Int16Array(max), aEW = [], aEX = [], aEY = [], aEZ = new Array(t), aEa = new Array(iw), z = t - 1; 0 <= z; z--) aEZ[
				z] = !1;
			for (z = iw - 1; 0 <= z; z--) aEa[z] = !1;
			aEb = new Int16Array(t), aEc = new Int16Array(iw)
		}(z4),
		function(eK) {
			var aEi = an.random() % aEU,
				lP = an.random() % (2 * aET + 1) - aET;
			aEj(aEi, lP, eK)
		}(max), aEs(aEc, aEV, iw), aEl(0, 0, !0, t);
		var eR, eT, z4 = en[0],
			eK = max,
			lP = an.random() % (2 * aET + 1) - aET;
		for (aEj(z4, lP, eK), aEs(aEb, aEV, t), aEl(0, 0, !1, iw), aEt(aEb), aEt(aEc), aEj(en[t - 1], aEb[t - 1], iw), aEl(t - 1, 0, !1, iw), aEj(en[t * (iw - 1)], aEc[iw - 1], t), aEp(en[t * iw - 1], t), aEl(0, iw - 1, !0, t), aEZ[t - 1] = aEZ[
				0] = !0, aEa[iw - 1] = aEa[0] = !0, aEu(0, t, !0), aEu(0, iw, !1), ! function() {
				var aEw, a08;
				for (;;) {
					if (aEw = function() {
							var z, aEw = aEW.length - 1;
							for (z = aEw - 1; 0 <= z; z--) aEX[z] > aEX[aEw] && (aEw = z);
							return aEw
						}(), aEX[aEw] < 5) return;
					a08 = aEW[aEw] + bA.em(aEX[aEw], 2), (aEY[aEw] ? function(eR) {
						var eK, aEz, z, a7F = 0,
							aF0 = 0;
						for (; aF0 < iw - 1;) {
							for (z = a7F + 1; z < iw; z++)
								if (aEa[z]) {
									aF0 = z;
									break
								} eK = aF0 - a7F + 1, aEj(en[eR + t * a7F], 0 === a7F ? aEb[eR] : aEV[aEz - 1] - aEV[aEz - 2], eK), aEp(en[aF0 * t + eR], eK), aEl(eR, a7F, !1, eK), aEz = eK, a7F = aF0
						}
						aEZ[eR] = !0
					} : function(eT) {
						var eK, aEz, z, a7F = 0,
							aF0 = 0;
						for (; aF0 < t - 1;) {
							for (z = a7F + 1; z < t; z++)
								if (aEZ[z]) {
									aF0 = z;
									break
								} eK = aF0 - a7F + 1, aEj(en[eT * t + a7F], 0 === a7F ? aEc[eT] : aEV[aEz - 1] - aEV[aEz - 2], eK), aEp(en[eT * t + aF0], eK), aEl(a7F, eT, !0, eK), aEz = eK, a7F = aF0
						}
						aEa[eT] = !0
					})(a08), aEu(a08, aEW[aEw] + aEX[aEw] - a08, aEY[aEw]), aEX[aEw] = a08 - aEW[aEw] + 1
				}
			}(), eR = 0; eR < t; eR++)
			if (!aEZ[eR])
				for (eT = 0; eT < iw; eT++) aEa[eT] || ! function(eR, eT) {
					var value = en[eT * t + eR - 1] + en[(eT - 1) * t + eR],
						a1y = 2;
					aEZ[eR + 1] && (a1y++, value += en[eT * t + eR + 1]);
					aEa[eT + 1] && (a1y++, value += en[(eT + 1) * t + eR]);
					en[eT * t + eR] = bA.em(value, a1y)
				}(eR, eT)
	}, this.aDi = function() {
		return en
	}, this.aDU = function() {
		en = null
	}
}

function aAE(ed, ee) {
	return 0 <= ed ? bA.em(ed, ee) : -bA.em(-ed, ee)
}

function j0(en) {
	return en * en
}

function a1E(ed, ee) {
	return ee < ed ? ed : ee
}

function a5x(ed, ee) {
	return ed < ee ? ed : ee
}

function a3O(ed, en, ee) {
	return en < ed ? ed : ee < en ? ee : en
}

function aF2(en, eK) {
	for (var ef = bA.em(en + 1, 2), z = 0; z < eK; z++) ef = bA.em(ef + bA.em(en, ef), 2);
	return ef
}

function aBd(en, eK) {
	return en < 1 ? 0 : aF2(en, eK)
}

function aF3(lm, ln, qF, a38, m0, m1, qG, a9U) {
	return !(lm + qF <= m0 || ln + a38 <= m1 || m0 + qG <= lm || m1 + a9U <= ln)
}

function aF4(lm, ln, qF, a38, m0, m1, qG, a9U) {
	return lm <= m0 && ln <= m1 && m0 + qG <= lm + qF && m1 + a9U <= ln + a38
}

function sO(en) {
	return Math.floor(!!en * (1 + Math.log2(en + .5)))
}

function bg() {
	this.em = function(ed, ee) {
		return Math.floor((ed + .5) / ee)
	}, this.aF5 = function(ed, ee) {
		return Math.floor(ed * (ee + .5))
	}, this.sqrt = function(en) {
		return ~~Math.sqrt(en + .5)
	}, this.pow = function(d) {
		return Math.floor(Math.pow(2, d) + .5)
	}, this.oZ = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aF6 = function(f1, f3, f5) {
		return Math.max(Math.min(f1, f3), f5)
	}, this.aF7 = function(aF8, aF9, eR, eT) {
		eR -= aF8, aF8 = eT - aF9, eT = 0;
		return 0 == eR ? eT = 0 <= aF8 ? Math.PI : 0 : (eT = Math.atan(aF8 / eR), eT += 0 < eR ? .5 * Math.PI : 1.5 * Math.PI), eT
	}, this.log2 = function(en) {
		return Math.floor(!!en * (1 + Math.log2(en + .5)))
	}, this.log10 = function(en) {
		return Math.floor(Math.log10(en + .5))
	}, this.aFB = function(aFC, aFD, aFE, aFF, aFG) {
		return aFE - aFG < aFC && aFC < aFE + aFG && aFF - aFG < aFD && aFD < aFF + aFG
	}
}

function cx() {
	this.ky = new aFH, this.q7 = 0;
	var aFI = new Array(19);

	function aFM() {
		for (var eK = aFI.length, z = 0; z < eK; z++) aFI[z] = null
	}
	this.dI = function() {
		for (var aFJ, aFK = document.body.firstChild; aFK;) aFJ = aFK.nextSibling, !document.body.contains(aFK) || "DIV" !== aFK.tagName && "INPUT" !== aFK.tagName && "BUTTON" !== aFK.tagName || document.body.removeChild(aFK), aFK = aFJ
	}, this.j = function(o2, aFL, z4) {
		void 0 === aFL && (aFL = this.q7), bU.dQ = !0, 0 === o2 && (0 === aN.wY() ? o2 = 5 : m.n.setState(13)), this.qS(), this.q7 = o2;
		var kD = aFI[o2];
		if (!kD || 4 === o2 || 7 === o2 || 8 === o2 || 9 === o2 || 10 === o2 || 11 === o2 || 13 === o2 || 15 === o2 || 18 === o2) {
			if (0 === o2) return void aFM();
			1 === o2 ? kD = new aFN : 2 === o2 ? kD = new aFO : 3 === o2 ? kD = new aFP : 4 === o2 || 9 === o2 || 10 === o2 || 11 === o2 || 13 === o2 ? kD = z4 : 5 === o2 ? kD = new aFQ : 6 === o2 ? kD = new aFR : 7 === o2 ? kD = new aFS(i.ky
					.aFT) : 8 === o2 ? kD = z4 : 12 === o2 ? kD = new aFU : 14 === o2 ? kD = new aFV : 15 === o2 ? kD = new aFS(i.ky.aFW) : 16 === o2 ? kD = new aFX : 17 === o2 ? kD = new aFY : 18 === o2 && (kD = new aFZ), kD.aFL = aFL, aFI[o2] =
				kD
		}
		kD.show(z4)
	}, this.wf = function() {
		this.tw() && this.aFa(this.a9n().aFL)
	}, this.aFa = function(o2) {
		this.tw() && (aFI[o2] ? (this.qS(), bU.dQ = !0, this.q7 = o2, aFI[o2].show()) : this.j(o2))
	}, this.qS = function() {
		this.tw() && aFI[this.q7].qS()
	}, this.rf = function() {
		this.tw() && (aFI[this.q7].qS(), aFM(), this.q7 = 0, m.n.setState(13))
	}, this.qv = function() {
		var kD;
		this.tw() && (kD = aFI[this.q7]).qv && kD.qv()
	}, this.resize = function() {
		if (!this.tw()) return !1;
		aFI[this.q7].resize()
	}, this.gZ = function(eR, eT) {
		var kD;
		this.tw() && (kD = aFI[this.q7]).gZ && kD.gZ(eR, eT)
	}, this.wu = function(eR, eT) {
		var kD;
		this.tw() && (kD = aFI[this.q7]).wu && kD.wu(eR, eT)
	}, this.xI = function() {
		var kD;
		this.tw() && (kD = aFI[this.q7]).xI && kD.xI()
	}, this.wx = function(kZ, ka, deltaY) {
		var kD;
		this.tw() && (kD = aFI[this.q7]).wx && kD.wx(kZ, ka, deltaY)
	}, this.xT = function(code) {
		var kD;
		return !!this.tw() && ((kD = aFI[this.q7]).xT && kD.xT(code), !0)
	}, this.iH = function() {
		var kD;
		this.tw() && (kD = aFI[this.q7]) && kD.iH && kD.iH()
	}, this.tw = function() {
		return 0 < this.q7
	}, this.a9n = function() {
		return aFI[this.q7]
	}, this.aFb = function(o2) {
		return aFI[o2]
	}
}

function aFS(data) {
	var aFc, aFd;
	this.show = function() {
		data.aFe && b7.aGJ("account", data.q5), aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aFd.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(data.username, [new l(L(13), function() {
		b7.clear(), i.wf()
	}), new l(data.aFe ? "🔄 " + L(135) : L(136), function() {
		i.j(8, i.a9n().aFL, new q8(25, {
			q9: 0,
			q5: data.q5,
			q6: data.q6
		}))
	}, 0, 0, 1)]), aFd = new ov(aFc.qi, function() {
		var ox = [];
		ox.push(function() {
				var aFt = new oe,
					aFu = (aFt.oi(L(182)), new po({
						title: data.username,
						value: data.username,
						o2: -1
					}));
				aFu.d.readOnly = !0, aFt.ot(aFu), aFt.ot(new pl([new l(L(148), function(d) {
					return b1.p1.yc(aFu.d), b1.p1.yd(d), !0
				}).button])), data.aFe || aFt.ok(L(183));
				return aFt
			}()),
			function(ox) {
				var aFt, ol, a6e, aGB, aG0;
				data.aFe || ((aFt = new oe).oi(L(184)), (ol = aFt.ok(data.aGA.length + " / 160")).style.textAlign = "center", a6e = !0, (aGB = new qx("bio", 0, 1, function(d) {
					d = d.target.value.length;
					ol.textContent = d + " / 160", 160 < d ? a6e && (a6e = !1, aG0.pK(1), aG0.button.style.color = p.mN) : a6e || (a6e = !0, aG0.pK(0), aG0.button.style.color = p.n8)
				})).d.rows = 6, aGB.d.style.fontSize = "1em", aGB.r1(data.aGA), aFt.ot(aGB), aG0 = new l(L(185), function() {
					if (!a6e) return !0;
					i.j(8, i.a9n().aFL, new q8(29, {
						q9: 1,
						oj: aGB.r3().substring(0, 160)
					}))
				}, 0, 0, 1), aFt.ot(new pl([aG0.button])), 0 !== data.aGC && (aFt.ot(new pl([new l(L(1 === data.aGC ? 187 : 188), function() {
					i.j(8, i.a9n().aFL, new q8(29, {
						q9: 0,
						oj: ""
					}))
				}, 0, 0, 1).button])), aFt.ok(1 === data.aGC ? L(189, [data.aGE - 1]) : L(190, [data.aGE - 1]))), aFt.ok(L(186, [data.aGD])), ox.push(aFt))
			}(ox),
			function(ox) {
				var aFt;
				data.aFe && 0 !== data.aGC && ((aFt = new oe).oi(L(184)), aFt.om(data.aGA), aFt.ot(new pl([new l(L(171), function(d) {
					return ap.ky.a7c(0) && (b1.p1.yd(d), ap.aFy.aG6({
						q9: 5,
						q5: data.q5,
						q6: data.q6
					})), !0
				}, 0, 0, 1).button])), ox.push(aFt))
			}(ox), ox.push(function() {
				var aFt = new oe;
				aFt.oi(L(137)), aFt.oo(L(138) + b1.w8.zJ(data.rp, .01, 2)), data.aFe || (aFt.ok(L(139)), aFt.ok(L(140)), aFt.ok(L(141)));
				return aFt
			}()), data.aFe && ox.push(function() {
				var aFt = new oe,
					aFu = (aFt.oi(L(142)), new po(bY.db.data[147], 1, void 0, function(d) {
						aFv(d.target.value)
					})),
					aFw = (aFt.ot(aFu), new l(L(143), function(d) {
						return aFu.d.readOnly && ap.ky.a7c(0) && (b1.p1.yd(d), aFx(), ap.aFy.aFz({
							q9: 0,
							q5: data.q5,
							q6: data.q6,
							value: bA.oZ(Math.floor(100 * bY.db.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aG0 = new l(L(144), function(d) {
						return d.textContent === L(144) ? (d.textContent = L(145), aFu.d.readOnly = !0, aFw.pK(0), aFw.button.style.color = p.n8, bY.pg.ph(147, aFu.d.value), aFv(bY.db.data[147].value)) : aFx(), !0
					}),
					ol = (aFt.ot(new pl([aG0.button])), aFt.ok()),
					aFv = function(en) {
						en = isNaN(en) ? 0 : Number(en);
						var en = Math.max(en, (data.aG1 + 1) / 100),
							aG2 = Math.floor(100 * Math.max(1e-4 * en, data.aG1 / 100)) / 100;
						ol.textContent = L(146, [en.toFixed(2), bY.db.data[105].value, aG2.toFixed(2), data.q5, (en - aG2).toFixed(2)])
					},
					aFx = function() {
						aG0.button.textContent = L(144), aFu.d.readOnly = !1, aFw.pK(1), aFw.button.style.color = p.mN
					};
				return aFv(bY.db.data[147].value), aFt.ot(new pl([aFw.button])), aFt
			}());
		ox.push(function() {
			var aFt = new oe,
				aFu = (aFt.oi(L(147)), new po({
					title: data.q5,
					value: data.q5,
					o2: -1
				}));
			return aFu.d.readOnly = !0, aFt.ot(aFu), aFt.ot(new pl([new l(L(148), function(d) {
				return b1.p1.yc(aFu.d), b1.p1.yd(d), !0
			}).button])), aFt
		}()), data.aFe || (ox.push(function() {
			var aFt = new oe,
				aG3 = (aFt.oi(L(149)), new po(bY.db.data[106]));
			return aG3.d.readOnly = !0, aG3.d.type = "password", aFt.ot(aG3), aFt.ot(new pl([new l(L(150), function(d) {
				return d.textContent === L(150) ? (d.textContent = L(151), aG3.d.type = "text") : (d.textContent = L(150), aG3.d.type = "password"), !0
			}).button, new l(L(148), function(d) {
				return b1.p1.yc(aG3.d), b1.p1.yd(d), !0
			}).button])), aFt.ot(new pl([new l(L(152), function() {
				i.j(8, i.a9n().aFL, new q8(15))
			}).button])), aFt.oi(L(153), "0.8em"), aFt.ok(L(154)), aFt.ok(L(155)), aFt.ok(L(156)), aFt
		}()), ox.push(function() {
			var aFt = new oe;
			return aFt.oi(L(157)), aFt.ot(new pl([new l(L(158), function() {
				i.j(6, i.a9n().aFL)
			}).button])), aFt.ot(new pl([new l(L(159), function() {
				bY.pg.ph(105, ""), i.j(8, i.a9n().aFL, new q8(18))
			}).button])), aFt.ot(new pl([new l(L(160) + bY.db.data[105].value, function() {
				i.j(4, 0, new k(L(161), L(162), !0, [new l(L(13), function() {
					i.j(7, i.aFb(7).aFL)
				})]))
			}, p.mw).button])), aFt
		}()), ox.push(function() {
			function aG5(o2) {
				for (var z = 0; z < 2; z++) aG4[z].pK(0 === o2 ? p.mY : 0 === z ? p.mw : p.q)
			}
			var or, aG4, aFt = new oe;
			aFt.oi(L(163)), aFt.ok(L(164)), bY.ky.rY();
			return aG4 = [new l(L(165), function() {
				var o2 = Math.min(bY.db.data[117].value, or.os.length - 1);
				if (!(o2 < 1)) {
					or.os[o2].remove(), or.os.splice(o2, 1);
					for (var z = o2; z < or.os.length; z++) or.os[z].name = "" + z;
					bY.ky.rb(o2), o2 = bY.db.data[117].value, or.os[o2].textContent = or.os[o2].textContent.replace("⚪", "🟢"), aG5(o2)
				}
			}, p.mY), new l(L(166), function() {
				var o2 = Math.min(bY.db.data[117].value, or.os.length - 1);
				o2 < 1 || (o2 = bY.ky.rc(o2), bY.pg.ph(105, o2.q5), bY.pg.ph(106, o2.password), i.j(8, i.a9n().aFL, new q8(18)))
			}, p.mY)], (or = new qY(bY.db.data[117], aG5)).os[0].style.marginTop = "0.5em", aFt.oq(or), aFt.ot(new pl([aG4[1].button])), aFt.ot(new pl([aG4[0].button])), aFt
		}()));
		return ox.push(function() {
				var aFt = new oe;
				aFt.oi(L(167)), aFt.oo(L(168) + b1.w8.zJ(data.rl, .1, 1) + "<br>" + L(169) + (data.rm + 1) + " / " + data.ro + "<br>" + L(170) + data.rn), data.aFe && (aFt.ot(new pl([new l(L(171), function(d) {
					return ap.ky.a7c(0) && (b1.p1.yd(d), ap.aFy.aG6({
						q9: 1,
						q5: data.q5,
						q6: data.q6
					})), !0
				}, 0, 0, 1).button])), aFt.ok(L(172)));
				return aFt
			}()),
			function(ox) {
				var aFt = new oe,
					wC = data.rs,
					aGF = (aFt.oi(L(191)), aFt.oo(L(192) + (wC ? "[" + data.rq + "]" : "-")), aFt.oo(L(193) + b1.w8.zJ(wC, .001, 2)), aFt.oo(L(169) + (data.ru + 1) + " / " + data.ro), data.rv),
					aGG = (aFt.oo(L(194) + b1.w8.zJ(aGF, .01, 2)), data.rx);
				aFt.oo(L(195) + aGG), aFt.oo(L(196) + b1.w8.zJ(aGF / Math.max(aGG, 1), .01, 2)), wC = data.rt, aFt.oi(L(197), "0.8em"), aFt.oo("Clan: " + (wC ? "[" + data.rr + "]" : "-")), aFt.oo(L(193) + b1.w8.zJ(wC, .001, 2)), aGF = data
					.rw, aFt.oo(L(194) + b1.w8.zJ(aGF, .01, 2)), aGG = data.ry, aFt.oo(L(195) + aGG), aFt.oo(L(196) + b1.w8.zJ(aGF / Math.max(aGG, 1), .01, 2)), ox.push(aFt)
			}(ox),
			function(ox) {
				var aFt = new oe;
				aFt.oi(L(198)), aFt.oo(L(179) + data.aGH + "<br>" + L(180) + (data.aGI.length ? L(199, [data.aGI]) : L(200))), data.aFe && (aFt.ot(new pl([new l(L(201), function(d) {
					return ap.ky.a7c(0) && (b1.p1.yd(d), ap.aFy.aG6({
						q9: 4,
						q5: data.q5,
						q6: data.q6
					})), !0
				}, 0, 0, 1).button])), aFt.ok(L(202)), aFt.ok(L(203)));
				ox.push(aFt)
			}(ox), ox.push(function() {
				var aFt = new oe;
				if (aFt.oi(L(178)), aFt.oo(L(179) + data.aG8 + "<br>" + L(169) + (data.aG9 + 1) + " / " + data.ro + "<br>" + L(180) + function(h7) {
						if (40 <= h7) return L(173);
						if (16 <= h7) return L(174);
						if (4 <= h7) return L(175);
						if (1 <= h7) return L(176);
						return L(177)
					}(data.aG9)), data.aFe) {
					aFt.ot(new pl([new l("−", function(d) {
						return ap.ky.a7c(0) && (b1.p1.yd(d), ap.aFy.aG6({
							q9: 3,
							q5: data.q5,
							q6: data.q6
						})), !0
					}, 0, 0, 1).button, new l("+", function(d) {
						return ap.ky.a7c(0) && (b1.p1.yd(d), ap.aFy.aG6({
							q9: 2,
							q5: data.q5,
							q6: data.q6
						})), !0
					}, 0, 0, 1).button]));
					for (var z = 0; z < 2; z++) aFt.og[0].pn[z].style.fontSize = "1.6em";
					aFt.ok(L(181))
				}
				return aFt
			}()), ox
	}())
}

function aGK(data) {
	var aFc, aGL, aGM, a7K, aGN, aGO, aGP, colors, aGQ, aGR, aGS = 0,
		aGT = 0,
		aGU = !1,
		aGV = !1,
		aGW = [1, 5, 60, 240, 1440, 10080, 43200];

	function aGx(kZ, ka) {
		! function(kZ, ka) {
			return aGL < kZ && kZ < aGL + a7K && aGM < ka && ka < aGM + aGN
		}(aGS = kZ, aGT = ka) ? (aGU && (bU.dQ = !0), aGU = !1) : (aGU = !0, bU.dQ = !0)
	}
	this.show = function() {
		aGV = bY.db.data[127].value, aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize();
		var ef = am.p7,
			qt = aFc.qn(),
			aGf = ef * qt.qr,
			ef = ef * qt.qo;
		aGO = b1.p1.qU(.06), aGP = b1.p1.qU(.04), aGL = b1.p1.qU(.06), aGM = ef + aGO, a7K = am.t - aGL - aGP, aGN = aGf + ef - aGM - aGP
	}, this.qv = function() {
		aFc.qv(),
			function() {
				var z, aGc, fm, eR, ed, f0 = data.data,
					aGi = 1,
					aGj = .125,
					aGk = aGV ? 65536 : 0;
				for (z = 0; z < f0.length; z++)
					for (aGc = f0[z].aGc, fm = aGc.length, aGi = Math.max(fm, aGi), ed = 0; ed < fm; ed++) aGj = Math.max(aGc[ed], aGj), aGk = Math.min(aGc[ed], aGk);
				var ln = aGM + aGN,
					tQ = aGN / (aGj - aGk),
					tP = 1 / (aGi - 1);
				for (qw.lineWidth = bR.uP, z = 0; z < f0.length; z++) {
					for (aGc = f0[z].aGc, fm = aGc.length, eR = aGL, qw.beginPath(), qw.moveTo(eR + a7K, ln - tQ * (aGc[fm - 1] - aGk)), ed = fm - 2; 0 <= ed; ed--) qw.lineTo(eR + tP * ed * a7K, ln - tQ * (aGc[ed] - aGk));
					qw.strokeStyle = colors[z], qw.stroke()
				}(function(aGk, aGj, ln, tQ) {
					qw.font = b1.p1.qD(0, .25 * aGL), b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 2), qw.fillStyle = colors[0];
					for (var eR = .92 * aGL, z = 0; z < 3; z++) {
						var en = aGk + z * (aGj - aGk) / 2;
						qw.fillText((en / 1e3).toFixed(3), eR, ln - tQ * (en - aGk))
					}
				})(aGk, aGj, ln, tQ),
				function(aGi) {
					var eT = aGM + aGN + .15 * aGP;
					qw.font = b1.p1.qD(0, Math.min(.4 * aGP, .028 * am.t)), b1.p1.textBaseline(qw, 0), b1.p1.textAlign(qw, 2), qw.fillStyle = colors[0], qw.fillText(b1.xn.yR(aGQ), aGL + a7K, eT), b1.p1.textAlign(qw, 0), qw.fillText(b1.xn.yR(
						new Date(aGR.getTime() - 6e4 * (aGi - 1) * aGW[data.aGb])), aGL, eT)
				}(aGi),
				function(aGi, aGk, aGj) {
					if (aGU && !(aGi < 2)) {
						for (var a3G, o2 = (aGS - aGL) / a7K * (aGi - 1), kl = Math.floor(o2), km = Math.floor(1 + o2), aGn = o2 - kl, aGo = 1e5, aGp = -1, aGq = -1, aGr = aGj - (aGj - aGk) * (aGT - aGM) / aGN, f0 = data.data, z = 0; z < f0
							.length; z++) {
							var aE0, aGc = f0[z].aGc;
							aGc.length <= km || (aGc = aGc[kl] + aGn * (aGc[km] - aGc[kl]), (aE0 = Math.abs(aGr - aGc)) < aGo && (aGo = aE0, aGp = z, aGq = aGc))
						} - 1 !== aGp && (aGj = aGM + aGN - (aGq - aGk) / (aGj - aGk) * aGN, qw.lineWidth = .5 * bR.uP, qw.strokeStyle = colors[aGp], qw.beginPath(), qw.moveTo(aGL, aGj), qw.lineTo(aGS, aGj), qw.lineTo(aGS, aGM + aGN), qw
						.stroke(), qw.beginPath(), qw.arc(aGS, aGj, .1 * aGL, 0, 2 * Math.PI), qw.fillStyle = colors[aGp], qw.fill(), aGk = aGM + aGN + .15 * aGP, b1.p1.textAlign(qw, 1), a3G = aGi - 2 < o2 ? (a3G = aGR.getTime() - 6e4 * aGW[
								data.aGb], new Date(a3G + (o2 - (aGi - 2)) * (aGQ.getTime() - a3G))) : new Date(aGR.getTime() - 6e4 * (aGi - o2 - 1) * aGW[data.aGb]), aGi = b1.xn.yR(a3G), o2 = b1.p1.measureText(aGi), a3G = bA.oZ(aGS, aGL +
								.5 * o2, aGL + a7K - .5 * o2), qw.fillStyle = b1.color.mF(70, 50, 20), qw.fillRect(a3G - .52 * o2, aGM + aGN, 1.04 * o2, .55 * aGP), qw.fillStyle = colors[0], qw.fillText(aGi, a3G, aGk), qw.font = b1.p1.qD(0,
								.25 * aGL), b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 2), a3G = .92 * aGL, aGi = (aGq / 1e3).toFixed(3), o2 = b1.p1.measureText(aGi), aGk = a3G - 1.04 * o2, qw.fillStyle = b1.color.mF(70, 50, 20), qw
							.fillRect(aGk, aGj - .1625 * aGL, aGL - aGk, .275 * aGL), qw.fillStyle = colors[aGp], qw.fillText(aGi, a3G, aGj))
					}
				}(aGi, aGk, aGj)
			}(), qw.lineWidth = bR.uP, qw.strokeStyle = p.mN, qw.beginPath(), qw.moveTo(aGL, aGM), qw.lineTo(aGL, aGM + aGN), qw.lineTo(aGL + a7K, aGM + aGN), qw.stroke();
		var z, fontSize = .5 * aGO,
			f0 = (qw.font = b1.p1.qD(0, fontSize), b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 0), data.data),
			eK = f0.length,
			eT = aGM - .5 * aGO,
			oj = "";
		for (z = 0; z < eK; z++) oj += f0[z].name + "  ";
		oj = oj.trim();
		var aGu = b1.p1.measureText(oj),
			eR = .5 * (am.t - aGu);
		for (aGu > am.t && (eR = 0, qw.font = b1.p1.qD(0, am.t / aGu * fontSize)), z = 0; z < eK; z++) qw.fillStyle = colors[z], qw.fillText(f0[z].name, eR, eT), eR += b1.p1.measureText(f0[z].name + "  ")
	}, this.gZ = function(kZ, ka) {
		aGx(kZ, ka)
	}, this.wu = function(kZ, ka) {
		aGx(kZ, ka)
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	};
	var z, dv, yP, kG, eN = data.data,
		eK = eN.length,
		max = 1;
	for (z = 0; z < eK; z++) max = Math.max(max, eN[z].aGc.length);
	for (z = 0; z < eK; z++)
		for (; eN[z].aGc.length < max;) eN[z].aGc.unshift(0);
	dv = new Date, yP = 6e4 * dv.getTimezoneOffset(), kG = dv.getTime() - yP, aGQ = new Date(kG), 6 === data.aGb ? function(dv, yP) {
		var aGe = dv.getUTCFullYear(),
			dv = dv.getUTCMonth() + 1;
		aGR = dv < 12 ? new Date(Date.UTC(aGe, dv) - yP) : new Date(Date.UTC(aGe + 1, 0) - yP)
	}(dv, yP) : (yP = 6e4 * aGW[data.aGb], aGR = data.aGb <= 4 ? new Date(kG + yP - dv.getTime() % yP) : new Date(kG + yP - (dv.getTime() + 2592e5) % yP)), kG = b1.color, colors = [p.mN, kG.mF(255, 0, 0), kG.mF(0, 200, 0), kG.mF(80, 80, 255), kG
		.mF(255, 255, 0), kG.mF(255, 0, 255), kG.mF(0, 255, 255), kG.mF(255, 140, 0), kG.mF(128, 128, 128), kG.mF(0, 255, 140)
	], aFc = new qc(L(204) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aGb] + ", " + b1.xn.yO(aGQ), [new l(L(13), function() {
		i.ky.a6k()
	}), new l(L(205), function() {
		i.j(14)
	})], !1)
}

function aFV() {
	var aFc, aFd, ox;
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aFd.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(L(206), [new l(L(13), function() {
		i.aFa(13)
	})]), aFd = new ov(aFc.qi, ((ox = []).push(function() {
		var aFt = new oe,
			aG0 = (aFt.oi(L(207)), aFt.ok(L(208)), new l(L(209), function() {
				bY.pg.ph(130, 0), i.ky.aH2()
			}, 0, 0, 1)),
			aFu = new po(bY.db.data[126], 0, function() {
				aG0.button.click()
			});
		return aFt.ot(aFu), aFu.d.placeholder = "a,b,c", aFu.d.style.marginTop = "0.5em", aFt.ot(new pl([aG0.button])), aFt
	}()), ox.push(function() {
		var aFt = new oe,
			aG0 = new l(L(209), function() {
				bY.pg.ph(130, 1), i.ky.aH2()
			}, 0, 0, 1),
			aH3 = new po(bY.db.data[129], 1, function() {
				aH3.d.focus()
			}),
			aH4 = new po(bY.db.data[128], 1, function() {
				aG0.button.click()
			});
		return aFt.oi(L(210)), aFt.ot(aH4), aH4.d.style.marginBottom = "0.5em", aFt.oi(L(211)), aFt.ot(aH3), aFt.ot(new pl([aG0.button])), aFt
	}()), ox.push(function() {
		var aFt = new oe;
		return aFt.oi(L(212)), bY.db.data[125].qb = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aFt.oq(new qY(bY.db.data[125])), aFt
	}()), ox.push(function() {
		var aFt = new oe;
		return aFt.oi(L(213)), aFt.ot(new pe(bY.db.data[127], L(214))), aFt
	}()), ox))
}

function aFU() {
	var aFc, aH5, a7K, aH6, a7L, a7M, colors = [0, 0, 0],
		aH7 = -1;

	function a7T(z) {
		var aHA = aH5.eT + z * (bR.gap + a7M);
		qw.fillStyle = "rgb(" + (0 === z ? 150 : 2 === z ? 30 : 0) + "," + (1 === z ? 130 : 2 === z ? 30 : 0) + "," + (2 === z ? 220 : 0) + ")", qw.fillRect(aH6, aHA, colors[z] * a7L, a7M), qw.strokeStyle = p.mN, qw.strokeRect(aH6, aHA, a7L, a7M), qw
			.fillStyle = p.mN, qw.font = b1.p1.qD(0, .32 * a7M), b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 0), qw.fillText(L(0 === z ? 217 : 1 === z ? 218 : 219) + aH8(z), aH6 + bR.gap, aHA + .53 * a7M)
	}

	function aH8(z, aHB) {
		return aHB = aHB || 256, bA.oZ(Math.floor(aHB * colors[z]), 0, aHB - 1)
	}

	function xP(kZ, ka) {
		return !(kZ < aH6 || ka < aH5.eT || kZ > aH5.eR + aH5.t || ka > aH5.eT + aH5.iw)
	}
	this.show = function() {
		var en = bY.db.data[121].value;
		colors[0] = (en >> 12) / 63, colors[1] = (en >> 6 & 63) / 63, colors[2] = (63 & en) / 63, aFc.show(), this.resize()
	}, this.qS = function() {
		bY.pg.ph(121, (aH8(0, 64) << 12) + (aH8(1, 64) << 6) + aH8(2, 64)), aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aH5.resize();
		var ef = am.p7,
			qt = aFc.qn(),
			aH9 = (aH5.eT = Math.max(aH5.eT, ef * qt.qo + bR.gap), ef * qt.qr - 2 * bR.gap);
		aH5.iw = Math.min(aH5.iw, aH9), aH5.t = 2 * aH5.iw, aH5.eT = ef * qt.qo + .5 * (ef * qt.qr - aH5.iw), aH5.eR = .5 * (am.t - aH5.t), a7K = .25 * aH5.t, aH6 = aH5.eR + a7K + bR.gap, a7L = aH5.t - a7K - bR.gap, a7M = (aH5.iw - 2 * bR.gap) /
			3
	}, this.qv = function() {
		var h7, qT, ee;
		aFc.qv(), qw.lineWidth = bR.uP, h7 = aH8(0), qT = aH8(1), ee = aH8(2), qw.fillStyle = "rgb(" + h7 + "," + qT + "," + ee + ")", qw.fillRect(aH5.eR, aH5.eT, a7K, aH5.iw), qw.strokeStyle = p.mN, qw.strokeRect(aH5.eR, aH5.eT, a7K, aH5.iw), qw
			.fillStyle = h7 + qT + ee < 306 && qT < 150 ? p.mN : p.mE, b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 1), qw.font = b1.p1.qD(0, .1 * aH5.iw), qw.rotate(-Math.PI / 2), qw.fillText(L(216), -aH5.eT - .5 * aH5.iw, aH5.eR + .5 * a7K),
			qw.setTransform(1, 0, 0, 1, 0, 0), a7T(0), a7T(1), a7T(2)
	}, this.gZ = function(kZ, ka) {
		xP(kZ, ka) && (aH7 = bA.oZ(Math.floor((ka - aH5.eT) / (a7M + .75 * bR.gap)), 0, 2), colors[aH7] = bA.oZ((kZ - aH6) / a7L, 0, 1), bU.dQ = !0)
	}, this.wu = function(kZ) {
		-1 !== aH7 && (colors[aH7] = bA.oZ((kZ - aH6) / a7L, 0, 1), bU.dQ = !0)
	}, this.wx = function(kZ, ka, deltaY) {
		xP(kZ, ka) && (kZ = bA.oZ(Math.floor((ka - aH5.eT) / (a7M + .75 * bR.gap)), 0, 2), colors[kZ] = bA.oZ(colors[kZ] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bU.dQ = !0)
	}, this.xI = function() {
		0 <= aH7 && (aH7 = -1, bU.dQ = !0)
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(L(215), [new l(L(13), function() {
		i.ky.a6k()
	})], !1), aH5 = new pZ([.5, .25], [.5, .5], 1)
}

function q8(id, z4) {
	var aFc, aHC;

	function aHG() {
		aHC.pj.innerHTML += "<br>" + L(222)
	}

	function aHF() {
		b3.v(48), b3.w(24, Math.floor(bA.pow(24) * Math.random())), b3.w(24, Math.floor(bA.pow(24) * Math.random())), b6.dI(b3.a0), bY.pg.ph(110, b4.qA.qB(b4.qA.qC(8))), ap.aFy.aHV()
	}
	this.aHD = !0, this.aHE = id, this.show = function() {
		aFc.show(), this.resize(), 15 === id ? (ap.ky.a7i(0, id) ? aHF : aHG)() : 16 === id ? ap.ky.a7i(0, id) ? ap.a6h.aHH(2) : aHG() : 17 === id ? ap.ky.a7i(0, id) ? ap.a6h.aHH(3) : aHG() : 18 === id ? (ap.ky.close(0, 3253), ap.ky.a7i(0, id),
				aHG()) : 20 === id ? ap.ky.a7i(0, id) ? ap.aFy.aHI(z4) : aHG() : 21 === id ? ap.ky.a7i(0, id) ? ap.aHJ.aHK(z4.qO, z4.qP, z4.qQ) : aHG() : 22 === id ? ap.ky.a7i(0, id) ? ap.aHJ.aHL(z4.qO, z4.aHM, z4.aHN) : aHG() : 23 === id ? ap.ky
			.a7i(0, id) ? ap.aHJ.aHO(z4.aGb, z4.w4) : aHG() : 24 === id ? ap.ky.a7i(0, id) ? ap.aHJ.aHP(z4.aGb, z4.qP, z4.qQ) : aHG() : 25 === id ? ap.ky.a7i(0, id) ? ap.aFy.aG6(z4) : aHG() : 28 === id ? ap.ky.a7i(0, id) ? ap.aHJ.aHQ(z4.qO, z4
				.aHM, z4.aHN) : aHG() : 29 === id && (ap.ky.a7i(0, id) ? ap.aFy.aHR(z4) : aHG())
	}, this.aHS = function() {
		15 === id ? aHF() : 16 === id ? ap.a6h.aHH(2) : 17 === id ? ap.a6h.aHH(3) : 18 === id ? i.j(8, this.aFL, new q8(16)) : 20 === id ? ap.aFy.aHI(z4) : 21 === id ? ap.aHJ.aHK(z4.qO, z4.qP, z4.qQ) : 22 === id ? ap.aHJ.aHL(z4.qO, z4.aHM, z4
			.aHN) : 23 === id ? ap.aHJ.aHO(z4.aGb, z4.w4) : 24 === id ? ap.aHJ.aHP(z4.aGb, z4.qP, z4.qQ) : 25 === id ? ap.aFy.aG6(z4) : 28 === id ? ap.aHJ.aHQ(z4.qO, z4.aHM, z4.aHN) : 29 === id ? ap.aFy.aHR(z4) : 1e3 === id && (this.aHE =
			id = 25, ap.aFy.aG6(z4))
	}, this.aHT = function(code, bd, data) {
		!bd && code !== id || (16 === code ? i.j(7, this.aFL) : 17 === code ? (ap.ky.close(0, 3252), bY.ky.rb(0), bY.db.data[117].qb && 0 < bY.db.data[117].qb.length ? (bd = bY.ky.rc(0), bY.pg.ph(105, bd.q5), bY.pg.ph(106, bd.password), i.j(8,
			this.aFL, new q8(16))) : (bY.pg.ph(105, ""), i.ky.a6k())) : 21 === code ? i.j(10, this.aFL, new aHU(data)) : 23 === code ? i.j(13, 0, new aGK({
			data: data,
			aGb: z4.aGb
		})) : 25 === code && (i.ky.aFW.q5 = z4.q5, i.j(15, this.aFL)))
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aHC.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(L(220), [new l(L(13), function() {
		i.ky.a6k()
	})]), aHC = new pi(aFc.qi, L(221))
}

function aFQ() {
	var aHW, aHX, aH5, aFu, aHY;
	this.a9o = new qH, aH5 = new pZ([.45, .27], [.5, .5], 2 / 3), aHX = [new l("⚔️<br>" + L(104), function() {
			aHZ(0)
		}, p.mm), new l("🗡️<br>" + L(105), function() {
			aHZ(1)
		}, p.my), new l("🔑<br>" + L(223), function() {
			aHZ(2)
		}, p.nD), new l("☰<br>" + L(224), function() {
			aHZ(3)
		}, p.mZ), new l("", function() {
			i.j(12)
		}, p.mJ, !1),
		new l("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new l("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], aFu = new po(bY.db.data[122]);
	for (var z = 0; z < aHX.length; z++) aHX[z].button.style.position = "absolute";

	function aHZ(o2) {
		m.n.setState(10), ax.xJ(), aP.qX() || aP.a9e(), 0 === o2 ? i.ky.aHa() : 1 === o2 ? i.ky.aHb() : 2 === o2 ? 0 !== m.id || bY.db.data[140].value ? i.j(8, i.q7, new q8(16)) : i.ky.aHc(i.q7, 16) : 3 === o2 && i.j(1, i.q7)
	}
	aFu.d.style.position = "absolute", aFu.d.style.textAlign = "center", aFu.d.placeholder = L(225), this.show = function() {
		aN.setState(0), m.n.setState(12), this.a9o.show(), aHX[4].pK(b1.color.yG(bY.db.data[121].value)), this.resize(), document.body.appendChild(aFu.d);
		for (var z = 0; z < aHX.length; z++) document.body.appendChild(aHX[z].button);
		1 !== m.id || m.eo < 5 || (aHY && bU.du > aHY + 144e5 ? m.rM.setState(14) : aHY = bU.du)
	}, this.qS = function() {
		this.a9o.qS(), document.body.removeChild(aFu.d);
		for (var z = 0; z < aHX.length; z++) document.body.removeChild(aHX[z].button)
	}, this.resize = function() {
		this.a9o.resize(), aH5.resize();
		var gap = .5 * bR.gap,
			a6q = 10 / 99 * .84 * aH5.t,
			aHf = .16 * aH5.iw,
			a3n = .19 * aH5.t,
			eR = aH5.eR + a3n,
			a6q = aH5.eT + a6q + 3 * gap,
			t = .5 * (aH5.t - gap) - a3n,
			a3n = aH5.t - 2 * a3n - aHf - gap,
			a3n = (b1.p1.qV(aFu.d, eR, a6q, a3n, aHf), b1.p1.qV(aHX[4].button, eR + a3n + gap, a6q, aHf, aHf), .5 * (aH5.eT + aH5.iw - (a6q += aHf + gap) - gap));
		b1.p1.qV(aHX[0].button, eR, a6q, t, a3n), b1.p1.qV(aHX[1].button, eR + t + gap, a6q, t, a3n), b1.p1.qV(aHX[2].button, eR, a6q + a3n + gap, t, a3n), b1.p1.qV(aHX[3].button, eR + t + gap, a6q + a3n + gap, t, a3n);
		b1.p1.qV(aHX[5].button, eR, a6q + a3n * 2 + gap * 2, t * 2 + gap, a3n / 3);
		b1.p1.qV(aHX[6].button, eR, a6q + a3n * 2.33 + gap * 3, t * 2 + gap, a3n / 3);
		for (var z = 0; z < aHX.length; z++) aHX[z].button.style.font = b1.p1.qD(0, b1.p1.yX(.065 * aH5.iw)), b1.p1.pD(aHX[z].button, 5);
		aFu.d.style.font = b1.p1.qD(0, b1.p1.yX(.08 * aH5.iw)), b1.p1.pD(aFu.d, 5)
	}, this.qv = function() {
		if (aN.a80(), aG.qv(), aB.qv(), bN.qv(), aP.qX()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aH5.t * 0.03);
				qw.font = b1.p1.qD(1, size);
				qw.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = qw.measureText(text).width;
				qw.textAlign = "left";
				qw.textBaseline = "middle";
				qw.fillText(text, qw.canvas.width - textLength - size / 2, size);
			};
			qw.imageSmoothingEnabled = !1;
			var ef = aP.a83("territorial.io"),
				ly = .84 * aH5.t / ef.width;
			qw.setTransform(ly, 0, 0, ly, aH5.eR + .08 * aH5.t, aH5.eT), aHW = aHW || b1.xj.z2(ef, b1.xj.z8, [0, 0, 0]);
			for (var eR = -1; eR <= 1; eR += 2)
				for (var eT = -1; eT <= 1; eT += 2) qw.drawImage(aHW, eR, eT);
			qw.drawImage(ef, 0, 0), qw.imageSmoothingEnabled = !0;
			var hF = aP.a83("logo"),
				aHi = .6666 * ly * ef.height / hF.height,
				m0 = .5 * am.t,
				m1 = aH5.eT + .5 * ly * ef.height - .5 * aHi * hF.height;
			qw.setTransform(aHi, 0, 0, aHi, m0 - .6 * ly * ef.width, m1), qw.drawImage(hF, 0, 0), qw.setTransform(aHi, 0, 0, aHi, m0 + .6 * ly * ef.width - aHi * hF.width, m1), qw.drawImage(hF, 0, 0), qw.setTransform(1, 0, 0, 1, 0, 0), qw
				.imageSmoothingEnabled = !0
		}
	}
}

function aFX() {
	var aFc, aHj, aHk, qd;

	function qN(z) {
		i.j(8, i.q7, new q8(21, {
			qO: z,
			qP: 0,
			qQ: 10
		}))
	}
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aHj.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aHk = [new l(L(226), function() {
		qN(1)
	}, 0, 0, 1), new l(L(227), function() {
		qN(2)
	}, 0, 0, 1), new l(L(228), function() {
		qN(0)
	}, 0, 0, 1), new l(L(229), function() {
		qN(3)
	}, 0, 0, 1)], qd = [new l(L(13), function() {
		i.wf()
	})], aFc = new qc(L(230), qd), aHj = new pW(aHk, aFc.qi)
}

function a74(title, op, aHl) {
	var aFc, aHC;
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aHC.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aHl = aHl || [new l(L(13), function() {
		i.wf()
	}, p.mw)], aFc = new qc(title, aHl), aHC = new pi(aFc.qi, op), b1.p1.textAlign(aFc.qi.style, 1)
}

function aHU(data) {
	var aFc, aHm, ef, pz;

	function aHn(hJ) {
		var eK = data.data.length;
		if (eK) {
			for (var qP, max = min = parseInt(data.data[0][0]), z = 1; z < eK; z++) var aHu = parseInt(data.data[z][0]),
				min = Math.min(aHu, min),
				max = Math.max(aHu, max);
			qP = hJ < 0 ? min + hJ : max + 1, console.log(i.a9n().aFL), i.j(8, i.a9n().aFL, new q8(21, {
				qO: data.qO,
				qP: qP,
				qQ: qP + Math.abs(hJ)
			}))
		}
	}
	this.show = function() {
			aFc.show(), this.resize()
		}, this.qS = function() {
			aFc.qS()
		}, this.resize = function() {
			aFc.resize(), aHm.resize()
		}, this.xT = function(ef) {
			2 === ef && aFc.qj[0].pI()
		}, ef = data.data.length ? 0 : 1, ef = [new l(L(13), function() {
			i.wf()
		}), new l(L(231), function() {
			aHn(-10)
		}, ef, 0, 1), new l(L(232), function() {
			aHn(10)
		}, ef, 0, 1), new l(L(205), function() {
			i.j(11, 10, new aHo({
				qO: data.qO
			}))
		})], pz = [L(233), L(234), L(235), L(236), L(237), L(238), L(239), L(240), L(241)], aFc = new qc(pz[data.qO], ef),
		function() {
			var z, eN = {
					pt: []
				},
				pt = eN.pt,
				aHq = data.data,
				eK = aHq.length,
				ly = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.qO],
				zD = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.qO],
				pz = [
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
			if (eN.pz = pz[data.qO], eN.q3 = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.qO], 0 === data.qO)
				for (z = 0; z < eK; z++) pt.push([{
					en: aHq[z][0] + 1 + ".",
					dv: 0
				}, {
					en: aHq[z][1],
					dv: 1,
					q5: aHq[z][4],
					q6: aHq[z][3]
				}, {
					en: (ly * aHq[z][2]).toFixed(zD),
					dv: 0
				}]);
			else if (1 === data.qO)
				for (z = 0; z < eK; z++) pt.push([{
					en: aHq[z][0] + 1 + ".",
					dv: 0
				}, {
					en: aHq[z][1],
					dv: 0
				}, {
					en: (ly * aHq[z][2]).toFixed(zD),
					dv: 0
				}, {
					en: aHq[z][3],
					dv: 1,
					q5: aHq[z][5],
					q6: aHq[z][4]
				}]);
			else if (2 === data.qO || 3 === data.qO)
				for (z = 0; z < eK; z++) pt.push([{
					en: aHq[z][0] + 1 + ".",
					dv: 0
				}, {
					en: aHq[z][1],
					dv: 1,
					q5: aHq[z][4],
					q6: aHq[z][3]
				}, {
					en: (ly * aHq[z][2]).toFixed(zD),
					dv: 0
				}]);
			else if (4 === data.qO || 5 === data.qO || 6 === data.qO || 7 === data.qO || 8 === data.qO)
				for (z = 0; z < eK; z++) {
					var aHt = aHq[z][5];
					4 === data.qO || 8 === data.qO ? "100%" === (aHt = (aHt % 64 * 100 / (aHt >> 6)).toFixed(0) + "%") && (4 === data.qO ? aHt += " (" + L(257) + ")" : aHt += " (" + L(258) + ")") : 5 === data.qO ? 32768 <= aHt && (aHt = -(aHt -
						32768)) : aHt = (ly * aHt).toFixed(zD), pt.push([{
						en: "" + aHq[z][0],
						dv: 0
					}, {
						en: "" + aHq[z][6],
						dv: 0
					}, {
						en: aHq[z][7],
						dv: 1,
						q5: aHq[z][1],
						q6: aHq[z][2]
					}, {
						en: aHq[z][8],
						dv: 1,
						q5: aHq[z][3],
						q6: aHq[z][4]
					}, {
						en: "" + aHt,
						dv: 0
					}])
				}
			aHm = new ps(aFc.qi, eN)
		}()
}

function aHo(z4) {
	var aFc, aFd, ox;
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aFd.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(L(259), [new l(L(13), function() {
		i.aFa(10)
	})]), aFd = new ov(aFc.qi, ((ox = []).push(function() {
		var aG0, aFt = new oe,
			aH3 = new po(bY.db.data[132], 1, function() {
				aG0.button.click()
			}),
			aH4 = new po(bY.db.data[131], 1, function() {
				aH3.d.focus()
			});
		aFt.oi(L(210)), aFt.ot(aH4), aH4.d.style.marginBottom = "0.8em", aFt.oi(L(211)), aFt.ot(aH3);
		return aG0 = new l(L(209), function() {
			qP = Math.floor(aH4.d.value), qQ = Math.floor(aH3.d.value);
			var qQ, qP = {
				y0: Math.min(qP, qQ),
				aEw: Math.max(qP, qQ)
			};
			i.j(8, i.aFb(10).aFL, new q8(21, {
				qO: z4.qO,
				qP: qP.y0,
				qQ: qP.aEw
			}))
		}, 0, 0, 1), aFt.ot(new pl([aG0.button])), aFt
	}()), ox.push(function() {
		var aG0, aFt = new oe,
			aH3 = new po(bY.db.data[134], 1, function() {
				aG0.button.click()
			}),
			aH4 = new po(bY.db.data[133], 0, function() {
				aH3.d.focus()
			});
		return aFt.oi(1 === z4.qO ? L(260) : L(261)), aFt.ot(aH4), aH4.d.style.marginBottom = "0.8em", aFt.oi(L(262)), aFt.ot(aH3), aG0 = new l(L(209), function() {
			var aHM = aH4.d.value.slice(0, 20),
				aHN = Math.abs(Math.floor(aH3.d.value));
			i.j(8, i.aFb(10).aFL, new q8(22, {
				qO: z4.qO,
				aHM: aHM,
				aHN: aHN
			}))
		}, 0, 0, 1), aFt.ot(new pl([aG0.button])), aFt
	}()), ox.push(function() {
		var aG0, aFt = new oe,
			aH3 = new po(bY.db.data[152], 1, function() {
				aG0.button.click()
			}),
			aH4 = new po(bY.db.data[151], 0, function() {
				aH3.d.focus()
			});
		return aFt.oi(L(263)), aFt.ot(aH4), aH4.d.style.marginBottom = "0.8em", aFt.oi(L(262)), aFt.ot(aH3), aG0 = new l(L(209), function() {
			var aHM = aH4.d.value.slice(0, 5),
				aHN = Math.abs(Math.floor(aH3.d.value));
			i.j(8, i.aFb(10).aFL, new q8(28, {
				qO: z4.qO,
				aHM: aHM,
				aHN: aHN
			}))
		}, 0, 0, 1), aFt.ot(new pl([aG0.button])), aFt
	}()), ox))
}

function aFR() {
	var aFc, aFd, ox;
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aFd.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(L(264), [new l(L(13), function() {
		i.j(7, i.aFb(7).aFL)
	}), new l(L(166), function() {
		bY.pg.ph(105, b5.qA.s7(aFd.oy[0].og[0].d.value, 5)), bY.pg.ph(106, b5.qA.s7(aFd.oy[1].og[0].d.value, 8)), i.j(8, i.aFb(7).aFL, new q8(18))
	})]), aFd = new ov(aFc.qi, ((ox = []).push(function() {
		var aFt = new oe;
		return aFt.oi(L(147)), aFt.ot(new po({
			title: "AccountName",
			value: "",
			o2: -1
		})), aFt
	}()), ox.push(function() {
		var aFt = new oe,
			aG3 = (aFt.oi(L(149)), new po({
				title: "Password",
				value: "",
				o2: -1
			}));
		return aG3.d.type = "password", aFt.ot(aG3), aFt.ot(new pl([new l(L(150), function(d) {
			return d.textContent === L(150) ? (d.textContent = L(151), aG3.d.type = "text") : (d.textContent = L(150), aG3.d.type = "password"), !0
		}).button])), aFt
	}()), ox))
}

function aFY() {
	var aFc, aHj, aHk, qd;

	function qN(z) {
		i.j(8, i.q7, new q8(21, {
			qO: z,
			qP: 0,
			qQ: 10
		}))
	}
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aHj.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aHk = [new l(L(237), function() {
		qN(4)
	}, 0, 0, 1), new l(L(238), function() {
		qN(5)
	}, 0, 0, 1), new l(L(239), function() {
		qN(6)
	}, 0, 0, 1), new l(L(240), function() {
		qN(7)
	}, 0, 0, 1), new l(L(241), function() {
		qN(8)
	}, 0, 0, 1)], qd = [new l(L(13), function() {
		i.wf()
	})], aFc = new qc(L(265), qd), aHj = new pW(aHk, aFc.qi)
}

function aFH() {
	this.db = {}, this.qR = ["", "", ""], this.aFW = null, this.aFT = null, this.wi = function() {
			i.j(5, 5)
		}, this.aHb = function() {
			i.rf(), aO.dI()
		}, this.aHa = function() {
			i.rf(), aM.a7e(bY.db.data[10].value), aM.dI()
		},
		__fx.customLobby.setJoinFunction(() => {
			i.rf();
			aM.a7e(0);
			aM.dI();
		}), this.a6k = function() {
			i.j(0 === aN.wY() ? 5 : 0)
		}, this.aH2 = function() {
			if (1 === bY.db.data[130].value) i.j(8, i.a9n().aFL, new q8(24, {
				aGb: bY.db.data[125].value,
				qP: bY.db.data[128].value,
				qQ: bY.db.data[129].value
			}));
			else {
				for (var f0 = (f0 = bY.db.data[126].value.split(",")).slice(0, 10), z = 0; z < f0.length; z++) f0[z] = f0[z].trim().slice(0, 7).toUpperCase();
				1 === f0.length && 0 === f0[0].length && (f0 = []), i.j(8, i.a9n().aFL, new q8(23, {
					aGb: bY.db.data[125].value,
					w4: f0
				}))
			}
		}, this.aHc = function(aFL, target) {
			i.j(4, aFL, new k("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + b9.aHz +
				"' target='_blank'>" + b9.aHz + "</a>", !1, [new l(L(13), function() {
					i.j(aFL)
				}), new l("✅ Accept", function() {
					bY.pg.ph(140, 1), 0 === target ? i.j(2, aFL) : i.j(8, aFL, new q8(target))
				})]))
		}, this.aI0 = function() {
			for (var z = 0; z < 3; z++) this.qR[z] = b5.s0.s2(b6.o3(5));
			this.qR[1] = "[" + this.qR[1] + "]", 5 === i.q7 && i.a9n().a9o.ph(this.qR)
		}
}

function k(title, op, aI1, aHl) {
	var aFc, aHC;
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aHC.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aHl = aHl || [new l(L(13), function() {
		i.wf()
	}, p.mw)], aFc = new qc(title, aHl), aHC = new pi(aFc.qi, op), aI1 && b1.p1.textAlign(aFc.qi.style, 1)
}

function aFP() {
	var aFc, qz;

	function aI2() {
		bJ.dd.hideCMPButton(), i.j(0);
		var oj = b0.aI8(qz.r3());
		(0 < oj.length && oj === b0.oH.aI5 || b0.aIA.sI(oj)) && b0.aI9()
	}
	this.show = function(aI3) {
		this.aI4(aI3), aFc.show(), this.resize()
	}, this.aI4 = function(aI3) {
		0 === a1.vH ? (aI3 = aI3 || qz.r3(), qz.r1(aI3)) : (a1.gV || (b0.oH.aI5 = b0.aI6.uo()), qz.r1(b0.aI7(b0.oH.aI5)))
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), qz.resize()
	}, this.xT = function(ef) {
		2 === ef ? aFc.qj[0].pI() : aI2()
	}, aFc = new qc(L(266), [new l(L(13), function() {
		i.aFa(1)
	}), new l(L(267), function() {
		qz.r4()
	}), new l(L(268), function() {
		qz.r5()
	}), new l(L(269), function() {
		qz.clear()
	}), new l(L(270), function() {
		aI2()
	})]), qz = new qx("replayData", L(271)), aFc.qi.appendChild(qz.d)
}

function aFO() {
	var aFc, aFd, ox, a6g, aFt;

	function aIB() {
		var du;
		a6g !== bY.db.data[12].value ? (ay.dI(), ay.a6f(), du = bU.du, i.j(4, 1, new k(L(274), L(275), !1, [new l(L(276), function() {
			i.j(1)
		}), new l("🔄 Reload", function() {
			bU.du < du + 1500 || m.n.o()
		}, p.q)]))) : i.j(1)
	}
	this.show = function() {
			a6g = bY.db.data[12].value, aFc.show(), this.resize()
		}, this.qS = function() {
			aFc.qS()
		}, this.resize = function() {
			aFc.resize(), aFd.resize()
		}, this.xT = function(ef) {
			2 === ef && aFc.qj[0].pI()
		}, aFc = new qc(L(272), [new l(L(13), aIB), new l(L(273), function() {
			i.rf(), bY.pg.rh(), i.j(2)
		})]), ox = [], (aFt = new oe).oi(L(277)), aFt.ok(L(278)), ox.push(aFt),
		function(ox) {
			var aFt = new oe,
				f0 = (aFt.oi(L(297)), ay.data.a6l());
			aFt.oq(new qY({
				qb: f0,
				value: ay.data.a6o(f0)
			}, function(o2) {
				return bY.pg.ph(12, f0[o2].split(":")[0]), !0
			})), ox.push(aFt)
		}(ox),
		function(ox) {
			var aFt = new oe,
				aIE = (aFt.oi(L(296)), []);
			aFt.ot(new pl([new l(L(108), function(d) {
				bM.aIF();
				for (var z = 0; z < aIE.length; z++) aIE[z].d.value = bM.aIG[z];
				return b1.p1.yd(d), !0
			}).button]));
			for (var z = 0; z < bM.aIH.length; z++) {
				aFt.ok(bM.aIH[z]);
				for (var ed = 0; ed < 2; ed++) {
					var o2 = 2 * z + ed,
						aFu = new po({
							title: "sk" + ed + "_" + z,
							value: bM.aIG[o2],
							o2: -1
						});
					aFu.d.aII = o2, aIE.push(aFu), aFu.d.addEventListener("keydown", function(d) {
						d.preventDefault();
						var code = d.code;
						d.target.value = code, bM.aIJ(d.target.aII, code)
					}), ed && (aFu.d.style.marginLeft = "4%"), aFu.d.style.width = "48%", aFt.ot(aFu)
				}
			}
			ox.push(aFt)
		}(ox), (aFt = new oe).oi(L(279)), bY.db.data[10].qb = [L(279) + " 1", L(280) + " 1", L(279) + " 2", L(280) + " 2"], aFt.oq(new qY(bY.db.data[10])), ox.push(aFt), (aFt = new oe).oi(L(281)), bY.db.data[1].qb = [L(282), L(283), L(284), L(285)],
		aFt.oq(new qY(bY.db.data[1])), ox.push(aFt), (aFt = new oe).oi(L(286)), bY.db.data[9].qb = [L(283), L(287), L(288)], aFt.oq(new qY(bY.db.data[9])), ox.push(aFt), (aFt = new oe).oi(L(289)), bY.db.data[11].qb = [L(290), L(2), L(291)], aFt.oq(
			new qY(bY.db.data[11])), ox.push(aFt), (aFt = new oe).oi(L(292)), aFt.ot(new pe(bY.db.data[2])), ox.push(aFt), (aFt = new oe).oi(L(293)), aFt.ot(new pe(bY.db.data[7])), ox.push(aFt), (aFt = new oe).oi(L(294)), aFt.ot(new pe(bY.db.data[
			8])), ox.push(aFt), (aFt = new oe).oi(L(295)), aFt.ot(new po(bY.db.data[5])), ox.push(aFt), aFd = new ov(aFc.qi, ox)
}

function aFN() {
	var aFc, aHj, aHk, qd;

	function aIK(id) {
		0 !== m.id || bY.db.data[140].value ? 0 === id ? i.j(8, 1, new q8(16)) : i.j(2) : i.ky.aHc(i.q7, 0 === id ? 16 : 0)
	}
	this.show = function() {
		m.n.setState(12), aFc.show(), this.resize(), this.iH()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aHj.resize()
	}, this.iH = function() {
		8 === aN.wY() && (2 <= bS.aIP ? aHk[2].pJ === p.mY && aHk[2].pK(0) : aHk[2].pJ !== p.mY && aHk[2].pK(p.mY), !a1.gV && a9.a0m(a1.e4) ? aHk[1].pJ === p.mY && aHk[1].pK(0) : aHk[1].pJ !== p.mY && aHk[1].pK(p.mY), !a1.gV && ak.oc(a1.e4) ?
			aHk[0].pJ === p.mY && aHk[0].pK(0) : aHk[0].pJ !== p.mY && aHk[0].pK(p.mY))
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aHk = [new l(L(298), function() {
		aIK(0)
	}), new l(L(230), function() {
		i.j(16)
	}), new l(L(265), function() {
		i.j(17)
	}), new l(L(299), function() {
		i.ky.aH2()
	}, 0, 0, 1), new l(L(266), function() {
		i.j(3, 1, "")
	}), new l(L(300), function() {
		i.j(18)
	}), new l(L(272), function() {
		aIK(1)
	}), new l(L(301), function() {
		i.j(4, 1, new k(L(301), b1.p1.yY([L(310), L(311), "Discord", L(312), L(226), L(313), L(88), L(314), L(315), L(316)], [b9.a71, b9.wT, b9.a72, b9.aIQ, b9.aIR, b9.wF, b9.aIS, b9.aIT, b9.aIU, b9.aHz]), !1, [new l(L(13), function() {
			i.j(1)
		}, p.mw)]))
	}), new l(L(302), function() {
		i.j(4, 1, new k(L(302), dV + "<br><a href='" + b9.aIQ + "' target='_blank'>" + b9.aIQ + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new l(L(13), function() {
				i.j(1)
			}, p.mw)]))
	}), new l(L(303), function() {
		i.j(4, 1, new k(L(303), L(317) + "<br>" + L(318), !1, [new l(L(13), function() {
			i.j(1)
		}), new l(L(319), function() {
			m.n.wO(), i.j(1)
		})]))
	}), new l(L(304), function() {
		m.n.wP(), i.j(4, 1, new k(L(320), L(321) + "<a href='" + b9.aHz + "' target='_blank'>" + b9.aHz + "</a>", !1, [new l(L(13), function() {
			i.j(1)
		}, p.mw)]))
	})], qd = [new l(L(276), function() {
		i.ky.a6k()
	})], 8 === aN.wY() && (aHk.unshift(new l(L(307), function() {
		2 <= bS.aIP && (i.rf(), bT.xW(), bU.dQ = !0)
	}, 0, 1)), aHk.unshift(new l(L(308), function() {
		!a1.gV && a9.a0m(a1.e4) && (az.gi.ni(), i.rf(), a9.gW) && a9.xW()
	}, 0, 1)), aHk.unshift(new l(L(309), function() {
		!a1.gV && ak.oc(a1.e4) && (az.gi.nk(), i.rf(), a9.gW) && a9.xW()
	}, 0, 1))), 1 === m.id && 5 <= m.eo && aHk.push(new l(L(305), function() {
		m.n.wQ()
	})), aFc = new qc(L(306), qd), aHj = new pW(aHk, aFc.qi)
}

function aFZ() {
	var aFc, aFd, ox;
	this.show = function() {
		aFc.show(), this.resize()
	}, this.qS = function() {
		aFc.qS()
	}, this.resize = function() {
		aFc.resize(), aFd.resize()
	}, this.xT = function(ef) {
		2 === ef && aFc.qj[0].pI()
	}, aFc = new qc(L(300), [new l(L(13), function() {
		i.wf()
	})]), aFd = new ov(aFc.qi, ((ox = []).push(function() {
		function aFx() {
			aIZ.button.textContent = L(144), aIX.d.readOnly = !1, aIY.d.readOnly = !1, aFw.pK(1), aFw.button.style.color = p.mN
		}
		var aFt = new oe,
			aIW = (aFt.oi(L(322)), new po({
				title: bY.db.data[105].value,
				value: bY.db.data[105].value,
				o2: -1
			})),
			aIX = (aIW.d.readOnly = !0, aFt.ot(aIW), aFt.oi(L(323), "0.8em"), new po(bY.db.data[148])),
			aIX = new po(bY.db.data[148], 0, void 0, function(d) {
				aFv(bY.db.data[149].value, d.target.value)
			}),
			aIY = (aFt.ot(aIX), aFt.oi(L(256), "0.8em"), new po(bY.db.data[149], 1, void 0, function(d) {
				aFv(d.target.value, bY.db.data[148].value)
			})),
			aIZ = (aFt.ot(aIY), new l(L(144), function(d) {
				return d.textContent === L(144) ? (d.textContent = L(145), aIX.d.readOnly = !0, aIY.d.readOnly = !0, aFw.pK(0), aFw.button.style.color = p.n8, bY.pg.ph(149, aIY.d.value), aFv(bY.db.data[149].value, bY.db.data[
					148].value)) : aFx(), !0
			})),
			aFw = (aFt.ot(new pl([aIZ.button])), new l(L(143), function(d) {
				return aIX.d.readOnly && ap.ky.a7c(0) && (b1.p1.yd(d), aFx(), ap.aFy.aFz({
					q9: 0,
					q5: bY.db.data[148].value,
					q6: 0,
					value: bA.oZ(Math.floor(100 * bY.db.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			ol = (aFt.ot(new pl([aFw.button])), aFt.ok()),
			aFv = function(en, oj) {
				en = isNaN(en) ? 0 : Number(en);
				var en = Math.max(en, (bY.db.data[150].value + 1) / 100),
					aG2 = Math.floor(100 * Math.max(1e-4 * en, bY.db.data[150].value / 100)) / 100;
				ol.textContent = L(146, [en.toFixed(2), bY.db.data[105].value, aG2.toFixed(2), oj, (en - aG2).toFixed(2)])
			};
		return aFv(bY.db.data[149].value, bY.db.data[148].value), aFt
	}()), ox))
}

function bf() {
	"function" != typeof Math.log2 && (Math.log2 = function(eR) {
		return Math.log(eR) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eR) {
		return Math.log(eR) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eR) {
		return 0 < eR ? 1 : eR < 0 ? -1 : 0
	})
}

function cQ() {
	var a40, aIb, aIc, aId, aIa = !1;

	function aIe() {
		aIa = !0, a40 = -1, aIb = new Array(4);
		for (var z = 3; 0 <= z; z--) aIb[z] = !1;
		var aIf = Math.floor(1 + .02 * am.min);
		aIc = new Array(4), (aId = new Array(4))[1] = aId[3] = aIc[0] = aIc[2] = 0, aId[0] = aIc[3] = -aIf, aIc[1] = aId[2] = aIf
	}

	function aIg() {
		if (-1 !== a40)
			if (0 !== a1.vH && a5.m5()) {
				for (var aIh = !1, z = 3; 0 <= z; z--) aIb[z] && (aIh = !0, hk += aIc[z], hm += aId[z], aT.wu(aIc[z], aId[z]), aF.a3j());
				aIh ? bU.dQ = !0 : ae.lu()
			} else ae.lu()
	}
	this.xR = function(o2) {
		0 !== a1.vH && a5.m5() && (aIa || aIe(), aIb[o2] = !0, -1 === a40) && (a40 = setInterval(aIg, 20), aIg())
	}, this.xU = function(o2) {
		if (0 !== a1.vH && (aIa || aIe(), aIb[o2] = !1, -1 !== a40)) {
			for (var aIh = !1, z = 3; 0 <= z; z--) aIh = aIh || aIb[z];
			aIh || this.lu()
		}
	}, this.lu = function() {
		if (aIa && -1 !== a40) {
			for (var z = 3; 0 <= z; z--) aIb[z] = !1;
			clearInterval(a40), a40 = -1
		}
	}
}

function cR() {
	this.ky = new aIi, this.l2 = new aIj, this.nO = new aIk, this.a7j = new aIl, this.a6h = new aIm, this.aFy = new aIn, this.o1 = new aIo, this.aHJ = new aIp, this.a1X = new aIq, this.aIr = new aIs, this.aIt = new aIu, this.aIv = new aIw, this.aIx =
		new aIy, this.dI = function() {
			this.ky.dI()
		}
}

function aIi() {
	var aIz, aJ1;
	this.a8B = 5, this.a8C = this.a8B - 1, this.a7h = this.a8B + this.a8C, this.a7g = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aJ0 = null;

	function dk(z) {
		return aJ1[z].aIa && aIz[z].dk()
	}

	function aJ9(wV) {
		aJ1[wV].du = bU.du, aJ1[wV].aJ3 = !1
	}
	this.wb = 0, this.wa = 0, this.dI = function() {
		this.aJ0 = new Array(this.a8B);
		this.aJ0[0] = "territorial.io";
		var z, aDP = an.aDh(0);
		for (an.zk(0), z = 1; z < this.a8B; z++) this.aJ0[z] = a7.uu() + ".territorial.io";
		for (an.zk(aDP), aIz = new Array(this.a7h), aJ1 = new Array(this.a7h), z = this.a7h - 1; 0 <= z; z--) aJ1[z] = {
			aIa: !1,
			du: 0,
			aJ3: !1
		};
		this.a7i(0, 0)
	}, this.aJ4 = function(z) {
		return aIz[z]
	}, this.aJ5 = function() {
		return this.wa < this.a8B ? this.wa : this.wa - this.a8C
	}, this.iH = function() {
		for (var z = this.a7h - 1; 0 <= z; z--) this.a7c(z) && bU.du > aJ1[z].du + 15e3 && ap.nO.aJ6(z, aJ1[z].aJ3);
		!this.a7c(0) && bU.du > aJ1[0].du + 8e3 && (aJ1[0].du = bU.du, this.a7i(0, 0))
	}, this.a7i = function(wV, aFL) {
		if (aJ1[wV].aIa) {
			if (aIz[wV].dk()) return aIz[wV].aJ8(aFL), aIz[wV].a7c();
			aIz[wV].qS()
		}
		return this.aJ7(wV, aFL), !1
	}, this.aJ7 = function(wV, aFL) {
		aJ1[wV].aIa = !0, aJ9(wV), aIz[wV] = new aJA, aIz[wV].dI(wV, aFL)
	}, this.aJ8 = function(wV, aFL) {
		dk(wV) && aIz[wV].aJ8(aFL)
	}, this.aJB = function(wV, aFL) {
		ap.a6h.aJC(wV)
	}, this.a7c = function(z) {
		return aJ1[z].aIa && aIz[z].a7c()
	}, this.send = function(wV, a0) {
		aJ9(wV), aIz[wV].send(a0)
	}, __fx.customLobby.setSendFunction(this.send), this.xB = function(wV) {
		8 === aN.wY() && (aJ1[wV].aJ3 = !0, ap.l2.jm = !0)
	}, this.close = function(wV, aJD) {
		dk(wV) && aIz[wV].close(aJD)
	}, this.aJE = function(wV, aJD) {
		g.wg(aJD), dk(wV) && aIz[wV].close(aJD)
	}, this.wj = function(aJD) {
		for (var z = this.a7h - 1; 0 <= z; z--) this.close(z, aJD)
	}, this.aJF = function(wV, aJD) {
		for (var z = this.a7h - 1; 0 <= z; z--) z !== wV && this.close(z, aJD)
	}, this.zt = function() {
		this.close(this.wb, 3246)
	}, this.aJG = function(wV, d) {
		aIz[wV].qS(), g.wU(wV, d.code)
	}
}

function aIj() {
	this.jm = !1, this.iH = function() {
		bU.jP() % 250 != 249 || a1.gV || (ap.a6h.aJH(+(this.jm && aU.lK[a1.e4]), aZ.jT + bC.ky.oF), this.jm = !1)
	}
}

function aIq() {
	this.aJJ = function(wV, a0) {
		b6.dI(a0), 0 === b6.size ? ap.ky.aJE(wV, 3205) : __fx.customLobby.isCustomMessage(a0) || ((0 === b6.o3(1) ? function(wV) {
			var aJN = b6.o3(6);
			0 === aJN ? function(wV) {
					if (0 === wV && 8 !== aN.wY()) {
						i.ky.aI0();
						for (var aJX = b6.o3(12), aJY = b6.o3(6), f0 = new Array(aJX), z = 0; z < aJX; z++) f0[z] = b6.o3(aJY);
						aG.a47(f0)
					}
				}(wV) : 2 === aJN ? ap.aIr.aJP(wV) : 3 === aJN || 4 === aJN ? al.dI() : 9 === aJN ? ap.aIt.aJQ(wV) : 10 === aJN ? ap.aIv.aJR() : 11 === aJN ? ap.aIt.aJS() : 12 === aJN ? ap.aIv.aJT() : 13 === aJN ? ap.aIx.aJU() :
				14 === aJN ? ap.aIx.aJV() : 15 === aJN && ap.aIt.aJW()
		} : function(wV) {
			if (8 !== aN.wY() && !al.a8D()) return;
			if (wV !== ap.ky.wb) ap.ky.aJE(wV, 3244);
			else if (0 === b6.o3(1)) bU.vQ.aJe(b6.a0);
			else {
				var z, wV = b6.o3(2);
				if (0 === wV) {
					var nc, nO = b6.o3(9);
					0 !== aU.lK[nO] && 0 !== aU.lK[a1.e4] && (nc = b6.o3(10), aA.nb(nO, a1.e4, nc), aT.oa(nO, 1, nc))
				} else if (1 === wV) ! function() {
					var nO = b6.o3(9);
					0 !== aU.lK[nO] && 0 !== aU.lK[a1.e4] && av.aDB(0, [nO], !0) && aA.nu(nO, 1)
				}();
				else if (2 === wV) ! function() {
					var nO = b6.o3(9),
						target = b6.o3(9);
					0 !== aU.lK[nO] && 0 !== aU.lK[target] && 0 !== aU.lK[a1.e4] && av.aDB(1, [nO], !0) && (aT.oa(nO, 3, 96), aT.oa(target, 4, 96), aA.a1e(nO, target))
				}();
				else if (x && !y) {
					var eK = 540;
					for (b3.v(17287), b3.w(1, 0), b3.w(6, 10), eK = Math.min(az.nL.o5.length, 540), z = 0; z < eK; z++) b3.aJk(32, az.nL.o5[z]);
					ap.ky.send(ap.ky.wb, b3.a0)
				}
			}
		})(wV), bU.aJM())
	}, this.a8E = function(a0) {
		if (b6.dI(a0), b6.o2 = 1, 3 === b6.o3(6)) {
			b6.o2 += 20;
			for (var a9R, a9Q, name, a0 = b6.o3(9), zd = b6.o3(14), zf = b6.o3(4), a8s = 1 === b6.o3(1), a8t = b6.o3(6), a8u = b6.o3(14), aJd = b6.o3(9) + 1, tj = [], z = 0; z < aJd; z++) a9R = b6.o3(1), a9Q = [b6.o3(6), b6.o3(6), b6.o3(6)],
				name = b5.s0.s2(b6.o3(5)), tj.push({
					name: name,
					a9Q: a9Q,
					a9R: a9R
				});
			aN.a7w(), bH.v(a8t, a8u), 1 === tj.length && aO.a9H(zf), a1.zc(zd, a0, tj, zf, a8s, !1)
		} else ! function() {
			b6.o2 += 20;
			for (var a9R, a9Q, tn, name, a85 = b6.o3(1), zd = b6.o3(14), zf = b6.o3(4), a8s = 1 === b6.o3(1), a8t = b6.o3(6), a8u = b6.o3(14), tj = [], z = 0; z < 2; z++) a9R = b6.o3(1), a9Q = [b6.o3(6), b6.o3(6), b6.o3(6)], tn = b6.o3(14),
				name = b5.s0.s2(b6.o3(5)), tj.push({
					name: name,
					a9Q: a9Q,
					tn: tn,
					a9R: a9R
				});
			aN.a7w(), bH.v(a8t, a8u), a1.zc(zd, a85, tj, zf, a8s, !1)
		}()
	}, this.a89 = function() {
		b6.o2 = 1;
		var aJN = b6.o3(6),
			aJb = b6.o3(10);
		return ap.ky.wa > ap.ky.a8C && (aJb += ap.ky.a8C), ap.ky.wa === aJb ? (ap.ky.wb = aJb, !1) : (ap.ky.close(ap.ky.wa, 3247), ap.ky.wb = aJb, al.a84 = b6.o3(10), al.a85 = b6.o3(3 === aJN ? 9 : 1), ap.ky.a7i(aJb, 5) && ap.nO.aJc(), !0)
	}
}

function aIw() {
	this.aJR = function() {
		bY.ky.rX(), bY.pg.ph(105, b4.qA.qB(b4.qA.qC(5))), bY.pg.ph(106, b4.qA.qB(b4.qA.qC(8))), bY.pg.ph(109, b6.o3(30)), bY.pg.ph(108, bY.db.data[109].value), bY.pg.ph(111, bY.db.data[109].value + 1), bY.pg.ph(107, 0), bY.pg.ph(110, "")
	}, this.aJT = function() {
		var aJn, aJo, aJp, aJq, aJm;
		b6.size < b3.aJl(29) ? ap.ky.aJE(0, 3254) : (aJm = b6.o3(5), aJn = b6.o3(3), aJo = b6.o3(3), aJp = b6.o3(3), aJq = b6.o3(8), b6.aJr(197 + 16 * (aJm + aJn + aJo + aJp + aJq) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aJm = {
			q6: b6.o3(30),
			rl: b6.o3(16),
			rm: b6.o3(30),
			rn: b6.o3(30),
			ro: b6.o3(30),
			rp: b6.aJs(32),
			username: b5.s0.s2(aJm),
			rq: b5.s0.s2(aJn),
			rr: b5.s0.s2(aJo),
			rs: b6.aJs(32),
			rt: b6.aJs(32),
			ru: b6.o3(30),
			rv: b6.aJs(32),
			rw: b6.aJs(32),
			rx: b6.aJs(32),
			ry: b6.aJs(32),
			aG8: b6.aJs(32),
			aG9: b6.aJs(30),
			aG1: b6.aJs(10),
			aGH: b6.aJs(32),
			aGI: b5.s0.s2(aJp),
			aGC: b6.aJs(2),
			aGD: b6.aJs(10),
			aGA: b5.s0.s2(aJq),
			aGE: b6.aJs(5)
		}, bY.pg.ph(150, aJm.aG1), 8 === i.q7 && (25 === i.a9n().aHE ? (aJm.aFe = !0, i.ky.aFW = aJm, i.a9n().aHT(25, !1)) : (aJm.aFe = !1, aJm.q5 = bY.db.data[105].value, i.ky.aFT = aJm, bY.pg.rk(aJm), i.a9n().aHT(16, !0)))) : ap.ky.aJE(
			0, 3267))
	}
}

function aIy() {
	this.aJU = function() {
		var z;
		if (b6.size < b3.aJl(39)) ap.ky.aJE(0, 3259);
		else {
			var qO = b6.o3(6),
				eK = b6.o3(10),
				gz = b6.o3(16);
			if (b6.aJr(39 + 16 * gz + eK * (0 === qO ? 111 : 1 === qO ? 101 : 2 === qO || 3 === qO ? 127 : 212))) {
				var data = [];
				if (0 === qO)
					for (z = 0; z < eK; z++) data.push([b6.o3(30), b5.s0.s2(b6.o3(5)), b6.o3(16), b6.o3(30), b6.o3(30)]);
				else if (1 === qO)
					for (z = 0; z < eK; z++) data.push([b6.o3(16), b5.s0.s2(b6.o3(3)), b6.o3(16), b5.s0.s2(b6.o3(5)), b6.o3(31), b6.o3(30)]);
				else if (2 === qO || 3 === qO)
					for (z = 0; z < eK; z++) data.push([b6.o3(30), b5.s0.s2(b6.o3(5)), b6.aJs(32), b6.o3(30), b6.o3(30)]);
				else
					for (z = 0; z < eK; z++) data.push([b6.o3(20), b6.o3(30), b6.o3(30), b6.o3(30), b6.o3(30), b6.aJs(32), b6.o3(30), b5.s0.s2(b6.o3(5)), b5.s0.s2(b6.o3(5))]);
				8 === i.q7 && i.a9n().aHT(21, !0, {
					qO: qO,
					data: data
				})
			} else ap.ky.aJE(0, 3260)
		}
	}, this.aJV = function() {
		if (b6.size < b3.aJl(29)) ap.ky.aJE(0, 3265);
		else {
			var aJt = b6.o3(4),
				aJu = b6.o3(7),
				aJv = b6.o3(11);
			if (b6.aJr(29 + 16 * aJu + 16 * aJv + 11 * aJt)) {
				for (var data = [], z = 0; z < aJt; z++) {
					for (var aJw = b5.s0.s2(b6.o3(3)), aJx = b6.o3(8), aGc = [], ed = 0; ed < aJx; ed++) aGc.push(b6.o3(16));
					data.push({
						name: "[" + aJw + "]",
						aGc: aGc
					})
				}
				8 === i.q7 && i.a9n().aHT(23, !0, data)
			} else ap.ky.aJE(0, 3266)
		}
	}
}

function aIs() {
	this.aJP = function(wV) {
		var z, a8V, aJy, aJz, aK0;
		if (wV !== ap.ky.wa) ap.ky.close(wV, 3239);
		else if (6 === aN.wY() && ai.dI(), 7 !== aN.wY()) ap.ky.close(wV, 3251);
		else {
			for (a8V = [0, 0, 0, 0], aJy = b6.o3(6), z = 0; z < 4; z++) a8V[z] = b6.o3(aJy);
			for (aJz = b6.o3(4), aK0 = [], z = 0; z < aJz; z++) {
				aK0.push({
					id: b6.o3(5),
					zf: b6.o3(4),
					a8s: 1 === b6.o3(1),
					g2: b6.o3(6),
					a8q: b6.o3(14),
					a8v: b6.o3(aJy),
					a8w: b6.o3(9) + 1,
					a7r: b6.o3(10)
				});
				for (var a8x = b6.o3(3), a8y = new Array(a8x), a8z = new Array(a8x), ed = 0; ed < a8x; ed++) a8z[ed] = b6.o3(9) + 1, a8y[ed] = b5.s0.s2(b6.o3(3));
				aK0[z].a8x = a8x, aK0[z].a8y = a8y, aK0[z].a8z = a8z
			}
			ai.ph(a8V, aK0)
		}
	}
}

function aIu() {
	this.aJQ = function(wV) {
		var aJg, aK1;
		b6.aJr(70) ? (aJg = b6.o3(3), aK1 = bX.aK2.iH(b6.o3(30), b6.o3(30)), ap.a6h.aK3(wV, aK1, aJg), 0 < aJg || (0 === wV && 0 === bY.db.data[105].value.length ? ap.a6h.aHH(0) : ap.aFy.aK4(wV), 4 === ap.ky.aJ4(wV).aK5() ? 6 === aN.wY() && ap
			.a7j.a7k(wV) : 5 !== ap.ky.aJ4(wV).aK5() || 8 !== aN.wY() && 10 !== aN.wY() || ap.nO.aJc())) : ap.ky.aJE(wV, 3269)
	}, this.aJS = function() {
		var id = b6.o3(6);
		0 === id ? (aG.a43 || ap.a6h.aHH(1), ay.a6f(), 8 === i.q7 && i.a9n().aHS()) : 21 === id ? 8 === i.q7 && i.a9n().aHT(17) : 22 === id && (bY.pg.ph(106, bY.db.data[110].value), bY.pg.ph(110, ""), 8 === i.q7) && i.a9n().aHT(16)
	}, this.aJW = function() {
		var eK = b6.o3(16),
			aK6 = b6.o3(16);
		if (b6.aJr(55 + 10 * eK + 16 * aK6)) {
			for (var f0 = [], z = 0; z < eK; z++) f0.push(b5.s0.s2(b6.o3(10)));
			ay.a6j(f0)
		} else ap.ky.aJE(wV, 3270)
	}
}

function aIk() {
	this.aJ6 = function(wV, aJ3) {
		b3.v(8), b3.w(1, 0), b3.w(6, 4), b3.w(1, aJ3 ? 1 : 0), ap.ky.send(wV, b3.a0)
	}, this.aJc = function() {
		b3.v(58), b3.w(1, 0), b3.w(6, 5), b3.w(8, ap.ky.aJ5()), b3.w(10, al.a84), b3.w(9, al.a85), b3.w(10, dX), b3.w(14, e.dY), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nP = function(e6) {
		b3.v(27), b3.w(1, 1), b3.w(4, 0), b3.w(22, e6), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nQ = function(hj, iY) {
		b3.v(25), b3.w(1, 1), b3.w(4, 1), b3.w(10, hj), b3.w(10, iY), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nU = function(hj, nS) {
		b3.v(24), b3.w(1, 1), b3.w(4, 2), b3.w(10, hj), b3.w(9, nS), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nV = function(hj, e6) {
		b3.v(37), b3.w(1, 1), b3.w(4, 3), b3.w(10, hj), b3.w(22, e6), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nY = function(li, e6) {
		b3.v(37), b3.w(1, 1), b3.w(4, 4), b3.w(10, li), b3.w(22, e6), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.na = function(iY) {
		b3.v(15), b3.w(1, 1), b3.w(4, 5), b3.w(10, iY), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.ne = function(o2) {
		b3.v(15), b3.w(1, 1), b3.w(4, 6), b3.w(10, o2), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nh = function(ng) {
		b3.v(6), b3.w(1, 1), b3.w(4, 7), b3.w(1, ng), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nj = function() {
		b3.v(5), b3.w(1, 1), b3.w(4, 8), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nl = function(hj, e6, iY) {
		b3.v(47), b3.w(1, 1), b3.w(4, 10), b3.w(10, hj), b3.w(10, iY), b3.w(22, e6), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.ns = function(aK7, aK8) {
		b3.v(24), b3.w(1, 1), b3.w(4, 15), b3.w(9, aK8), b3.w(10, aK7), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nv = function(a1X) {
		b3.v(14), b3.w(1, 1), b3.w(4, 14), b3.w(9, a1X), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.nz = function(aK9, target) {
		var z, eK = aK9.length;
		for (b3.v(14 + 9 * eK), b3.w(1, 1), b3.w(4, 13), b3.w(9, target), z = 0; z < eK; z++) b3.w(9, aK9[z]);
		ap.ky.send(ap.ky.wb, b3.a0)
	}
}

function aIn() {
	this.aKA = function() {
		b3.v(39), b3.w(1, 0), b3.w(6, 16), ap.a6h.aKB(), ap.ky.send(0, b3.a0)
	}, this.aK4 = function(wV) {
		b3.v(115), b3.w(1, 0), b3.w(6, 17), b5.qA.sE(bY.db.data[105].value, 5), b5.qA.sE(bY.db.data[106].value, 8), b3.w(30, bY.db.data[109].value), ap.ky.send(wV, b3.a0)
	}, this.aHV = function() {
		b3.v(55), b3.w(1, 0), b3.w(6, 18), b5.qA.sD(bY.db.data[110].value), ap.ky.send(0, b3.a0)
	}, this.aHI = function(username) {
		b3.v(12 + 16 * username.length), b3.w(1, 0), b3.w(6, 20), ap.a6h.aKD(username), ap.ky.send(0, b3.a0)
	}, this.aHR = function(z4) {
		var eK = z4.oj.length;
		b3.v(21 + 16 * eK), b3.w(1, 0), b3.w(6, 29), b3.w(6, z4.q9), b3.w(8, eK), b4.s0.sD(z4.oj), ap.ky.send(0, b3.a0)
	}, this.aG6 = function(data) {
		b3.v(73), b3.w(1, 0), b3.w(6, 25), b3.w(6, data.q9), b5.qA.sE(data.q5, 5), b3.w(30, data.q6), ap.ky.send(0, b3.a0)
	}, this.aFz = function(data) {
		b3.v(105), b3.w(1, 0), b3.w(6, 27), b3.w(6, data.q9), b5.qA.sE(data.q5, 5), b3.w(30, data.q6), b3.aJk(32, data.value), ap.ky.send(0, b3.a0)
	}
}

function aIo() {
	this.o0 = function() {
		var fr, eK = a1.jS,
			v9 = bG.result.v9,
			aKE = v9.length,
			vw = (b3.v(40 + 16 * eK + aKE * (33 + 3 * (a1.jq < 7))), b3.w(1, 1), b3.w(4, 12), b3.w(10, aKE), b3.w(1, +(2 === a1.vE)), b3.w(24, bG.result.vj), aU.vw);
		for (z = 0; z < eK; z++) b3.w(16, vw[z]);
		var g9 = aU.g9;
		for (z = 0; z < aKE; z++) fr = v9[z], b3.w(9, fr), b3.w(24, g9[fr]);
		if (a1.jq < 7)
			for (var eI = bV.eI, vc = bV.vc, z = 0; z < aKE; z++) b3.w(3, 7 & vc[eI[v9[z]]]);
		ap.ky.send(ap.ky.wb, b3.a0)
	}
}

function aIp() {
	this.aHK = function(qO, qP, qQ) {
		b3.v(75), b3.w(1, 0), b3.w(6, 21), b3.w(6, qO), b3.w(1, +(qP < 0)), b3.w(1, +(qQ < 0)), b3.w(30, Math.abs(qP)), b3.w(30, Math.abs(qQ)), ap.ky.send(0, b3.a0)
	}, this.aHL = function(qO, aHM, aHN) {
		b3.v(18 + 16 * aHM.length + 30), b3.w(1, 0), b3.w(6, 22), b3.w(6, qO), ap.a6h.aKD(aHM), b3.w(30, aHN), ap.ky.send(0, b3.a0)
	}, this.aHQ = function(qO, aHM, aHN) {
		b3.v(73), b3.w(1, 0), b3.w(6, 28), b3.w(6, qO), b5.qA.sE(aHM, 5), b3.w(30, aHN), ap.ky.send(0, b3.a0)
	}, this.aHO = function(aGb, w4) {
		for (var eK = w4.length, gz = 0, z = 0; z < eK; z++) gz += w4[z].length;
		for (b3.v(21 + 3 * eK + 16 * gz), b3.w(1, 0), b3.w(6, 23), b3.w(3, aGb), b3.w(4, eK), b3.w(7, gz), z = 0; z < eK; z++) b3.w(3, w4[z].length), b4.s0.sD(w4[z]);
		ap.ky.send(0, b3.a0)
	}, this.aHP = function(aGb, qP, qQ) {
		b3.v(52), b3.w(1, 0), b3.w(6, 24), b3.w(3, aGb), b3.w(1, +(qP < 0)), b3.w(1, +(qQ < 0)), b3.w(20, Math.abs(qP)), b3.w(20, Math.abs(qQ)), ap.ky.send(0, b3.a0)
	}
}

function aIl() {
	this.a7k = function(wV) {
		var username = bY.db.data[122].value.slice(0, 20),
			username = (b3.v(22 + 16 * username.length + 18), b3.w(1, 0), b3.w(6, 1), b3.w(10, dX), ap.a6h.aKD(username), b1.color.yE(bY.ky.re()));
		b3.w(6, username[0]), b3.w(6, username[1]), b3.w(6, username[2]), ap.ky.wa = wV, ap.ky.send(wV, b3.a0)
	}, this.a94 = function(a8r) {
		return b3.v(11), b3.w(1, 0), b3.w(6, 2), b3.w(4, a8r), ap.ky.send(ap.ky.wa, b3.a0), !0
	}
}

function aIm() {
	this.aJC = function(wV) {
		b3.v(39), b3.w(1, 0), b3.w(6, 13), b3.w(14, e.dY), b3.w(4, m.id), b3.w(7, m.eo), b3.w(1, +x), b3.w(1, +y), b3.w(5, (new Date).getHours() % 24), ap.ky.send(wV, b3.a0)
	}, this.aK3 = function(wV, aK1, aJg) {
		b3.v(70), b3.w(1, 0), b3.w(6, 14), b3.w(3, aJg), b3.w(30, aK1[0]), b3.w(30, aK1[1]), ap.ky.send(wV, b3.a0)
	}, this.aHH = function(id) {
		b3.v(13), b3.w(1, 0), b3.w(6, 15), b3.w(6, id), ap.ky.send(0, b3.a0)
	}, this.a6i = function(id, oj) {
		var eK = Math.min(oj.length, 63);
		b3.v(19 + 16 * eK), b3.w(1, 0), b3.w(6, 26), b3.w(6, id), b3.w(6, eK), b4.s0.sD(oj), ap.ky.send(0, b3.a0)
	}, this.aKF = function(aJb, ou) {
		b3.v(7 + 26 * ou.length), b3.w(1, 0), b3.w(6, 9);
		for (var z = 0; z < ou.length; z++) b3.w(16, ou[z][0]), b3.w(10, ou[z][1]);
		ap.ky.send(aJb, b3.a0)
	}, this.aJH = function(aKG, aKH) {
		b3.v(20), b3.w(1, 0), b3.w(6, 19), b3.w(1, aKG), b3.w(12, aKH), ap.ky.send(ap.ky.wb, b3.a0)
	}, this.aKD = function(username) {
		b3.w(5, username.length), b4.s0.sD(username)
	}
}

function aJA() {
	var wV, aFL, b, aKI = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aJB() {
		ap.ky.aJB(wV, aFL)
	}

	function aKN(d) {
		ap.a1X.aJJ(wV, new Uint8Array(d.data))
	}

	function aKO() {}

	function aJG(d) {
		ap.ky.aJG(wV, d)
	}
	this.dI = function(o2, aKJ) {
		wV = o2, aFL = aKJ;
		o2 = aKI[0];
		wV < ap.ky.a8B ? o2 += ap.ky.aJ0[wV] + aKI[1 + dU] : o2 += ap.ky.aJ0[0] + "/i" + (1 + dU) + (wV - ap.ky.a8C) + "/", (b = new WebSocket(__fx.customLobby.isActive() && wV === 1 ? __fx.customLobby.getSocketURL() : o2)).binaryType =
			"arraybuffer", b.onopen = aJB, b.onmessage = aKN, b.onclose = aJG, b.onerror = aKO
	}, this.aKL = function() {
		return b.readyState === b.CONNECTING
	}, this.a7c = function() {
		return b.readyState === b.OPEN
	}, this.dk = function() {
		return this.aKL() || this.a7c()
	}, this.aJ8 = function(aKJ) {
		aFL = aKJ
	}, this.aK5 = function() {
		return aFL
	}, this.send = function(a0) {
		this.a7c() && b.send(a0)
	}, this.close = function(aJD) {
		this.dk() && (b.close(aJD), this.qS())
	}, this.qS = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function d4() {
	var aKP = !1,
		a1s = 0,
		t = 0,
		qF = 0,
		gap = 0,
		h4 = null,
		tc = null,
		xx = null;

	function aKR() {
		for (var a8g, aKW = 0, eK = 0, ef = Math.floor(t / 2), h7 = Math.floor(qF / 2), a8f = 1.5 * Math.PI, z = a1.za; 0 <= z; z--) eK += xx[z], 0 === xx[z] && aKW++;
		if (aKP = !1, tc.clearRect(0, 0, t, t), tc.fillStyle = p.mK, tc.fillRect(0, 0, t, t), tc.fillStyle = p.mN, tc.fillRect(0, 0, t, gap), tc.fillRect(0, 0, gap, t), tc.fillRect(t - gap, 0, gap, t), tc.fillRect(0, t - gap, t, gap), 0 < eK)
			if (aKW === a1.za) {
				for (z = a1.za; 0 <= z; z--)
					if (0 < xx[z]) {
						! function(z, ef, h7) {
							tc.fillStyle = bV.a8k[bV.vc[z]], tc.beginPath(), tc.arc(ef, ef, h7, 0, 2 * Math.PI), tc.fill()
						}(z, ef, h7);
						break
					}!
				function(ef) {
					var fontSize = ef / 3;
					tc.font = b1.p1.qD(1, fontSize), tc.fillStyle = p.mN, tc.fillText("100%", ef, ef + .1 * fontSize)
				}(ef)
			} else {
				for (z = 0; z <= a1.za; z++) 0 < xx[z] && (! function(z, ef, h7, a8f, a8g) {
					tc.fillStyle = bV.a8k[bV.vc[z]], tc.beginPath(), tc.arc(ef, ef, h7, a8f, a8g), tc.lineTo(ef, ef), tc.fill()
				}(z, ef, h7, a8f, a8g = a8f + 2 * Math.PI * xx[z] / eK), function(ef, h7, a8f, a8g) {
					var en = (a8g - a8f) / (2 * Math.PI),
						fontSize = +h7 * Math.min(en, .37);
					fontSize < 8 || (a8f = (a8f + a8g) / 2, a8g = Math.floor(100 * en + .5) + "%", h7 *= .525 - Math.max(.6 * (en - .7), 0), tc.font = b1.p1.qD(1, fontSize), tc.fillStyle = p.mN, tc.fillText(a8g, ef + Math.cos(a8f) * h7, ef +
						Math.cos(a8f + 1.5 * Math.PI) * h7))
				}(ef, h7, a8f, a8g), 0 !== z && a8i(ef, h7, a8f), a8f = a8g);
				a8i(ef, h7, 1.5 * Math.PI)
			}!
		function(ef, h7) {
			tc.beginPath(), tc.arc(ef, ef, h7, 0, 2 * Math.PI), tc.stroke()
		}(ef, h7)
	}

	function a8i(ef, h7, a8l) {
		tc.beginPath(), tc.moveTo(ef, ef), tc.lineTo(ef + Math.cos(a8l) * h7, ef + Math.cos(a8l + 1.5 * Math.PI) * h7), tc.stroke()
	}
	this.dI = function() {
		if (a1.iS) {
			var z;
			for (a1s = 0, xx = new Uint32Array(a1.za + 1), z = a1.za; 0 <= z; z--) xx[z] = 0;
			for (z = aZ.jT - 1; 0 <= z; z--) xx[bV.eI[aZ.jV[z]]] += 1;
			this.resize()
		} else xx = tc = h4 = null
	}, this.a2h = function() {
		return t
	}, this.resize = function() {
		a1.iS && (t = Math.floor(m.n.uM() && !a1.lp ? .18 * am.min : .13 * am.p3), t = (t *= 1 + (.5 + .2 * m.n.uM()) * a1.lp) + t % 2, qF = Math.floor(7 * t / 8), (h4 = h4 || document.createElement("canvas")).width = t, h4.height = t, tc = h4
			.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * t), tc.lineWidth = gap, tc.strokeStyle = p.mN, b1.p1.textAlign(tc, 1), b1.p1.textBaseline(tc, 1), aKR())
	}, this.vs = function() {
		return xx[this.ki()]
	}, this.wJ = function() {
		return a1s = 31, this.iH(), this.ki()
	}, this.ki = function() {
		for (var aKS = 0, z = a1.za; 0 < z; z--) xx[z] > xx[aKS] && (aKS = z);
		return aKS
	}, this.kh = function(aKT) {
		for (var fm = 0, jU = aZ.jV, eI = bV.eI, eK = aZ.jT, ey = bD.ey, z = 0; z < eK; z++) {
			var fr = jU[z];
			eI[fr] === aKT && (ey[fm++] = fr)
		}
		bD.er[0] = fm
	}, this.aKU = function() {
		for (var fm = 0, z = a1.za; 0 < z; z--) 0 < xx[z] && fm++;
		return fm
	}, this.iH = function() {
		if (a1.iS && 32 <= ++a1s) {
			var z;
			for (a1s = 0, z = a1.za; 0 <= z; z--) xx[z] = 0;
			for (z = aZ.jT - 1; 0 <= z; z--) xx[bV.eI[aZ.jV[z]]] += aU.g9[aZ.jV[z]];
			aKP = !0
		}
	}, this.l7 = function() {
		a1.iS && aKP && aKR()
	}, this.qv = function() {
		a1.iS && (a1.lp ? qw.drawImage(h4, bR.gap, bR.gap) : qw.drawImage(h4, bR.gap, a2i + 2 * bR.gap))
	}
}

function cn() {
	function aKb(key) {
		var aI3;
		return "undefined" == typeof URLSearchParams || (aI3 = window.location.search, "string" != typeof(aI3 = new URLSearchParams(aI3).get(key))) || aI3.length < 1 ? null : aI3
	}
	this.dR = function() {
		if (0 !== m.id) return !1;
		if (! function() {
				var value = aKb("account");
				if (!value && !(value = aKb("a"))) return void b7.clear();
				return b7.clear(), i.j(8, i.q7, new q8(1e3, {
					q9: 0,
					q5: value,
					q6: 0
				})), 1
			}()) {
			var value = aKb("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			i.j(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var wS = new URL(window.location.href);
		wS.search = "";
		try {
			return history.replaceState(null, "", wS.toString()), !0
		} catch (d) {
			console.log("error 352: " + d)
		}
		return !1
	}, this.aGJ = function(key, value) {
		if (0 === m.id) try {
			var wS = new URL(window.location.href),
				fr = wS.searchParams;
			fr.set(key, value), wS.search = fr.toString(), history.replaceState(null, "", wS.toString())
		} catch (d) {
			console.log("error 358: " + d)
		}
	}
}

function cS() {
	var aKd, f0;
	this.dI = function() {
		for (var z = (f0 = new Uint16Array(101)).length - 1; 0 <= z; z--) f0[z] = bA.em(32768 * z, 100);
		this.zk(0)
	}, this.value = function(fr) {
		return f0[fr]
	}, this.aDh = function() {
		return bA.em(aKd - 1, 2)
	}, this.zk = function(aDP) {
		aKd = 2 * aDP % 32768 + 1
	}, this.random = function() {
		return aKd = 167 * aKd % 32768
	}, this.ij = function(lF) {
		return bA.em(lF * this.random(), 32768)
	}, this.jK = function(fr) {
		return 0 !== fr && this.random() < this.value(fr)
	}, this.i3 = function(ed, ee) {
		return ed + this.ij(ee - ed)
	}
}

function ck() {
	this.oH = new aKe, this.aI6 = new aKf, this.aIA = new aKg, this.dI = function(zd, tj, zf, zg) {
		var aKh;
		a1.gV || ((aKh = {}).ze = a1.e4, aKh.zd = zd, aKh.tj = tj, aKh.zf = zf, aKh.zg = zg, aKh.a8t = bH.g2, aKh.a8u = bH.a8q, aO.a9M(aKh), this.oH.dI(aKh))
	}, this.iH = function() {
		a1.gV || (this.oH.iH(), 3 !== i.q7) || bU.jP() % 15 != 5 && 2 !== a1.vH || i.a9n().aI4()
	}, this.aI9 = function() {
		var qT = this.oH.aKh;
		0 === a1.vH && aN.a7w(), bH.v(qT.a8t, qT.a8u), 1 === qT.tj.length && (aO.a9H(qT.zf), aO.a9J(qT.a9K, qT.a9L)), ap.ky.close(ap.ky.wb, 3257), ap.ky.wb = 0, a1.zc(qT.zd, qT.ze, qT.tj, qT.zf, qT.zg, !0)
	}, this.aI8 = function(oj) {
		var z = oj.indexOf("=");
		return 0 <= z ? oj.substring(z + 1) : oj
	}, this.aI7 = function(oj) {
		return "https://territorial.io/?replay=" + oj
	}
}

function aKe() {
	this.aKj = null, this.aKk = null, this.aKl = null, this.aKm = null, this.aKn = null, this.aKo = null;
	var aKp = 0;
	this.aKh = null, this.aI5 = "", this.dI = function(aKh) {
		this.aKj = [], this.aKk = [], this.aKl = [], this.aKm = [], this.aKn = [0], this.aKo = [0], aKp = 0, this.aKh = aKh, this.aI5 = ""
	}, this.oI = function(id, f1, f3, f5) {
		a1.gV || 2 === a1.vH || (0 === this.aKn[aKp] && (this.aKo[aKp] ? (this.aKn.push(1), this.aKo.push(0), aKp++) : this.aKn[aKp] = 1), this.aKj.push(id), this.aKk.push(f1), this.aKl.push(void 0 === f3 ? 0 : f3), this.aKm.push(void 0 === f5 ?
			0 : f5), this.aKo[aKp]++)
	}, this.iH = function() {
		0 === this.aKn[aKp] ? this.aKo[aKp]++ : (this.aKn.push(0), this.aKo.push(0), aKp++)
	}
}

function aKg() {
	function aKv(oj, aKx) {
		aKx ? aA.a0x = L(324) + ": " + oj : i.j(4, 3, new k("⚠️ " + L(324), oj, !0))
	}
	this.sI = function(oj) {
		if (b5.qA.sA(b5.qA.s8(b5.qA.s6(oj))), aA.a0x = "", ! function() {
				if (b6.size < 10) aKv("File Too Small");
				else if (b6.o3(9) !== dW && aKv("Incompatible Version Error", !0), b6.o3(31) !== b6.size) aKv("Size Error");
				else {
					if (function(iw) {
							var z, fr = b6.a0,
								eK = b6.size,
								aKH = 0;
							for (z = 7; z < eK; z++) aKH = aKH + fr[z] & 65535;
							return aKH === iw
						}(b6.o3(16))) return 1;
					aKv("Hash Error")
				}
				return
			}()) return !1;
		var aKh;
		(aKh = {}).ze = b6.o3(9), aKh.zd = b6.o3(14), aKh.zf = b6.o3(4), aKh.zg = 1 === b6.o3(1), aKh.a8t = b6.o3(6), aKh.a8u = b6.o3(14), aKh.aKy = b6.o3(10), b0.oH.aKh = aKh,
			function() {
				var z, a9R, a9Q, name, eK = b0.oH.aKh.aKy,
					tj = [];
				for (z = 0; z < eK; z++) a9R = b6.o3(1), a9Q = [b6.o3(6), b6.o3(6), b6.o3(6)], name = b5.s0.s2(b6.o3(5)), tj.push({
					name: name,
					a9Q: a9Q,
					a9R: a9R
				});
				if (b0.oH.aKh.tj = tj, 8 === b0.oH.aKh.zf)
					for (z = 0; z < eK; z++) tj[z].tn = b6.o3(14)
			}();
		var z, eK, aKz = b0.oH.aKh;
		if (1 === aKz.tj.length)
			for (eK = 6 < aKz.zf ? 1 : aKz.zf + 2, aKz.a9K = new Array(eK), aKz.a9L = new Array(eK), z = 0; z < eK; z++) aKz.a9K[z] = b6.o3(3), aKz.a9L[z] = b6.o3(9) + 1;
		return !! function() {
			var sJ = b6.o3(5),
				aL0 = b6.o3(30),
				aL1 = b6.o3(30);
			if (aL0 + aL1 > 8 * b6.size) return void aKv("Corrupted File");
			return function(eK) {
					var z, id, aL4 = new Uint8Array(eK),
						aL5 = new Uint16Array(eK),
						aL6 = new Uint32Array(eK),
						aL7 = new Uint32Array(eK);
					for (b0.oH.aKj = aL4, b0.oH.aKk = aL5, b0.oH.aKl = aL6, b0.oH.aKm = aL7, z = 0; z < eK; z++) aL4[z] = id = b6.o3(4), aL5[z] = b6.o3(9), 0 === id ? aL6[z] = b6.o3(22) : 1 === id ? (aL6[z] = b6.o3(10), aL7[z] = b6.o3(10)) :
						2 === id ? (aL6[z] = b6.o3(10), aL7[z] = b6.o3(9)) : 3 === id || 4 === id ? (aL6[z] = b6.o3(10), aL7[z] = b6.o3(22)) : 5 === id || 6 === id ? aL6[z] = b6.o3(10) : 7 === id ? aL6[z] = b6.o3(1) : 10 === id && (aL6[z] =
							b6.o3(20), aL7[z] = b6.o3(22))
				}(aL0),
				function(eK, sJ) {
					var z, aKn = new Uint8Array(eK),
						aKo = new Array(eK);
					for (aKo.fill(0), b0.oH.aKn = aKn, b0.oH.aKo = aKo, z = 0; z < eK; z++) aKn[z] = b6.o3(1), aKo[z] = b6.o3(sJ)
				}(aL1, sJ), 1
		}() && (b6.o2 < 8 * b6.size - 13 || b6.o2 > 8 * b6.size ? (aKv("Out Of Bounds Error: " + b6.o2 + " " + 8 * b6.size), !1) : (b0.oH.aI5 = oj, !0))
	}
}

function aKf() {
	this.uo = function() {
		var aKz, sJ = function() {
				var z, aKo = b0.oH.aKo,
					eK = aKo.length,
					max = 0;
				for (z = 0; z < eK; z++) max = Math.max(max, aKo[z]);
				return sO(Math.max(max, 1))
			}(),
			aL9 = function(sJ) {
				return 179 + function() {
					var z, tj = b0.oH.aKh.tj,
						eK = tj.length,
						aL9 = 24 * eK;
					for (z = 0; z < eK; z++) aL9 += 16 * tj[z].name.length;
					8 === b0.oH.aKh.zf && (aL9 += 14 * eK);
					return aL9
				}() + (1 === b0.oH.aKh.tj.length ? 12 * b0.oH.aKh.a9K.length : 0) + function() {
					var z, aKj = b0.oH.aKj,
						eK = aKj.length,
						aL9 = 13 * eK,
						aLK = [22, 20, 19, 32, 32, 10, 10, 1, 0, 0, 42];
					for (z = 0; z < eK; z++) aL9 += aLK[aKj[z]];
					return aL9
				}() + function(sJ) {
					return b0.oH.aKo.length * (1 + sJ)
				}(sJ)
			}(sJ);
		b3.v(aL9 + (6 - aL9 % 6) % 6), aKz = b0.oH.aKh, b3.w(9, dW), b3.w(31, b3.size), b3.o2 += 16, b3.w(9, aKz.ze), b3.w(14, aKz.zd), b3.w(4, aKz.zf), b3.w(1, aKz.zg), b3.w(6, aKz.a8t), b3.w(14, aKz.a8u), b3.w(10, aKz.tj.length);
		var z, tj = b0.oH.aKh.tj,
			eK = tj.length;
		for (z = 0; z < eK; z++) b3.w(1, tj[z].a9R), b3.w(18, (tj[z].a9Q[0] << 12) + (tj[z].a9Q[1] << 6) + tj[z].a9Q[2]), b3.w(5, tj[z].name.length), b4.s0.sD(tj[z].name);
		if (8 === b0.oH.aKh.zf)
			for (z = 0; z < eK; z++) b3.w(14, tj[z].tn);
		return function() {
				var z, aKz = b0.oH.aKh;
				if (1 === aKz.tj.length)
					for (z = 0; z < aKz.a9K.length; z++) b3.w(3, aKz.a9K[z]), b3.w(9, aKz.a9L[z] - 1)
			}(),
			function(sJ) {
				var z, aKj = b0.oH.aKj,
					f1 = b0.oH.aKk,
					f3 = b0.oH.aKl,
					f5 = b0.oH.aKm,
					eK = aKj.length;
				for (b3.w(5, sJ), b3.w(30, eK), b3.w(30, b0.oH.aKo.length), z = 0; z < eK; z++) b3.w(4, aKj[z]), b3.w(9, f1[z]), 0 === aKj[z] ? b3.w(22, f3[z]) : 1 === aKj[z] ? (b3.w(10, f3[z]), b3.w(10, f5[z])) : 2 === aKj[z] ? (b3.w(10, f3[z]),
					b3.w(9, f5[z])) : 3 === aKj[z] || 4 === aKj[z] ? (b3.w(10, f3[z]), b3.w(22, f5[z])) : 5 === aKj[z] || 6 === aKj[z] ? b3.w(10, f3[z]) : 7 === aKj[z] ? b3.w(1, f3[z]) : 10 === aKj[z] && (b3.w(20, f3[z]), b3.w(22, f5[z]))
			}(sJ),
			function(sJ) {
				var z, aKn = b0.oH.aKn,
					aKo = b0.oH.aKo,
					eK = aKn.length;
				for (z = 0; z < eK; z++) b3.w(1, aKn[z]), b3.w(sJ, aKo[z])
			}(sJ), b3.o2 !== aL9 && aA.wc("Encoder Index Error: " + b3.o2 + " " + aL9), b3.o2 = 40, b3.w(16, function() {
				var z, fr = b3.a0,
					eK = b3.size,
					aKH = 0;
				for (z = 7; z < eK; z++) aKH = aKH + fr[z] & 65535;
				return aKH
			}()), b6.dI(b3.a0), b4.qA.qB(b4.qA.qC(bA.em(aL9 - 1, 6) + 1))
	}
}

function cX() {
	var ef, bd = !1,
		aLL = !1,
		aLM = -1e4,
		aLN = -1,
		aLO = 0;

	function resize(aLS) {
		ef = 0, aP.qX() && (aLQ(aLS) || bd) && (bd = !1, bR.resize(), bL.a6I.resize(), aL.dI(), bN.dI(), aM.resize(), aG.resize(), aB.resize(), i.resize(), 1 <= a1.vH ? (aI.resize(!1), aH.resize(), aJ.resize(), aF.resize(), aE.resize(), aA.resize(),
			a9.resize(), b2.resize(), ak.resize(), aC.resize(), aD.resize(), a8.resize(), bT.resize(), aT.resize(), aK.resize(), bW.resize(), aF.a3j()) : (2 === aN.wY() && aO.resize(), aN.a7y(), aN.a7z()), bU.dQ = !0)
	}

	function aLP(en) {
		return en && 128 < en ? Math.floor(en) : 128
	}

	function aLQ(aLS) {
		var t, iw, aLU, qF, a38;
		if (!(0 < am.pr)) return qF = aLP(document.documentElement.clientWidth), a38 = aLP(window.visualViewport && 2 !== m.id ? window.visualViewport.height : document.documentElement.clientHeight), t = qF, iw = a38, aLU = 0 !== m.id || t < iw ?
			700 : 1200, aLU = Math.min(aLU / ((t + iw) / 2), 1), aLU = 0 === bY.db.data[1].value ? 2 * aLU / 3 : Math.min(aLU + (bY.db.data[1].value - 1) * (1 - aLU) / 2, 1), am.p7 = (window.devicePixelRatio || 1) * aLU, __fx.hoveringTooltip
			.canvasPixelScale = am.p7, aLS && !aLL ? (aLL = !0, document.body.removeChild(wt)) : aLL && (aLL = !1, document.body.appendChild(wt)), t = Math.floor(.5 + qF * am.p7), iw = Math.floor(.5 + a38 * am.p7), t !== am.t || iw !== am.iw ? (
				am.t = t, am.iw = iw, am.min = a5x(t, iw), am.max = a1E(t, iw), am.p3 = bA.em(t + iw, 2), am.qq = t / iw, wt.width = t, wt.height = iw, wt.style.width = qF + "px", wt.style.height = a38 + "px", aLN = bU.du + 1e3, 1) : void 0
	}
	this.t = 0, this.iw = 0, this.min = 0, this.max = 0, this.p3 = 0, this.qq = 1, this.p7 = 1, this.pr = 0, this.dJ = function() {
		this.t = aLP(document.documentElement.clientWidth) + 2, this.iw = aLP(document.documentElement.clientHeight) + 2
	}, this.dI = function() {
		ef = 1, wt = document.getElementById("canvasA"), (qw = wt.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aLQ(0)
	}, this.iH = function() {
		ar.iH(), 50 <= ++ef && resize(0), -1 === aLN || bU.du < aLN || (aLN = -1, 2e3 * ++aLO >= bU.du + 8e3 ? console.log("error 3748") : m.n.setState(15))
	}, this.dT = function(hJ) {
		bd = !0, resize(hJ)
	}, this.xa = function() {
		aLM + 1e3 > bU.du || (aLM = bU.du, resize(0))
	}
}

function d1() {
	this.aK2 = new aLW, this.vq = new aLX
}

function aLX() {
	this.vr = function() {
		for (var fr, eK = aZ.jT, tj = aZ.jV, vw = aU.vw, a86 = this.aAe(), z = 0; z < eK; z++) fr = tj[z], aQ.vA(fr) && (vw[fr] = a86);
		var oN = aU.oN,
			iP = aU.iP,
			iQ = aU.iQ,
			w2 = aU.w2,
			eK = a1.jS;
		for (z = 0; z < eK; z++)(0 === w2[z] || iQ[z] < 1 || 2 * oN[z] > 3 * (iP[z] + iQ[z])) && (vw[z] = 0);
		var vi = 0;
		for (z = 0; z < eK; z++) vi += 0 < vw[z];
		return vi
	}, this.aAe = function() {
		return Math.min(65535, bU.jP())
	}
}

function aLW() {
	function aLb(f0, en, kG) {
		for (var z = 0; z < 256; z++) f0[z] = (f0[z] + (en >> (z + kG) % 30 & 1)) % 256
	}
	this.iH = function(aLY, aLZ) {
		var f0 = new Uint8Array(256);
		return function(f0, aLY, aLZ) {
				var z, aLd = 3 + (4 + aLY) % 32768,
					aLe = 12 + aLZ % 32768,
					aLf = 17 + ((aLY & aLZ) + (aLY | aLZ) + aLY) % 32768;
				for (z = 0; z < 256; z++) aLd = 1 + aLd * aLe % aLf, f0[z] = aLd % 256
			}(f0, aLY, aLZ), aLb(f0, aLY, 2), aLb(f0, aLZ, 7),
			function(f0) {
				var z, en, o2 = 0;
				for (z = 0; z < 3e4; z++) en = f0[o2], f0[o2] = (en + z + f0[(o2 + z) % 256]) % 256, o2 = (en + z + o2 + (en & o2)) % 256
			}(f0),
			function(f0) {
				var z, a38 = 1,
					a9U = 1;
				for (z = 0; z < 256; z += 2) a38 = (1 + a38) * (f0[z] + 1) % 1073741824, a9U = (1 + a9U) * (f0[z + 1] + 1) % 1073741824;
				return [a38, a9U]
			}(f0)
	}
}

function cU() {
	var aLg, aLh, go, aLi;
	this.dI = function() {
		var z, eR, eT, a9Q, aLj, t, iw, tc, h1, sY, en, fr, ea, ed, a0L;
		if (function() {
				if (go = !0, aLi = "rgb(" + bH.sW[0] + "," + bH.sW[1] + "," + bH.sW[2] + ")", bH.aDV(bH.g2)) return 1;
				return go = !1, 0
			}()) aLh = null;
		else {
			for (aLg = bA.em(96, 4), aLj = 1 === bH.g2 ? (a9Q = 0, 160) : (a9Q = 128, 32), aLi = "rgb(" + a9Q + "," + a9Q + "," + a9Q + ")", aLh = new Array(4), z = 3; 0 <= z; z--) {
				if (aLh[z] = document.createElement("canvas"), t = z % 2 == 0 ? bH.eV : aLg, iw = z % 2 == 0 ? aLg : bH.eW + 2 * aLg, aLh[z].width = t, aLh[z].height = iw, sY = (h1 = (tc = aLh[z].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, t, iw)).data, z % 2 == 0)
					for (eT = aLg - 1; 0 <= eT; eT--)
						for (en = aLj + Math.floor((eT + 1) * (a9Q - aLj) / (aLg + 1)), eR = t - 1; 0 <= eR; eR--) sY[fr = 4 * ((0 === z ? aLg - eT - 1 : eT) * t + eR)] = en, sY[fr + 1] = en, sY[fr + 2] = en, sY[fr + 3] = 255;
				else {
					for (eR = aLg - 1; 0 <= eR; eR--)
						for (en = aLj + Math.floor((eR + 1) * (a9Q - aLj) / (aLg + 1)), eT = iw - 1 - aLg; aLg <= eT; eT--) sY[fr = 4 * (eT * t + (3 === z ? aLg - eR - 1 : eR))] = en, sY[fr + 1] = en, sY[fr + 2] = en, sY[fr + 3] = 255;
					for (ed = 1; 0 <= ed; ed--)
						for (eR = aLg - 1; 0 <= eR; eR--)
							for (eT = aLg - 1; 0 <= eT; eT--) ea = (Math.pow(eR * eR + eT * eT, .5) + 1) / (aLg + 1), en = aLj + Math.floor((1 < ea ? 1 : ea) * (a9Q - aLj)), sY[fr = 4 * ((0 === ed ? aLg - eT - 1 : eT + ed * (iw - aLg)) * t + (
								1 === z ? eR : aLg - eR - 1))] = en, sY[fr + 1] = en, sY[fr + 2] = en, sY[fr + 3] = 255
				}
				tc.putImageData(h1, 0, 0)
			}
			a0L = aLj, bH.sR.fillStyle = "rgb(" + a0L + "," + a0L + "," + a0L + ")", bH.sR.fillRect(0, 0, bH.eV, 1), bH.sR.fillRect(0, bH.eW - 1, bH.eV, 1), bH.sR.fillRect(0, 0, 1, bH.eW), bH.sR.fillRect(bH.eV - 1, 0, 1, bH.eW)
		}
	}, this.tW = function() {
		var ed = go ? 0 : -aLg;
		aF4(ed, ed, bH.eV - 2 * ed, bH.eW - 2 * ed, bP.aLm, bP.aLn, bP.aLo, bP.aLp) || (qw.fillStyle = aLi, qw.fillRect(0, 0, am.t, am.iw))
	}, this.qv = function() {
		go || (aF3(0, -aLg, bH.eV, aLg, bP.aLm, bP.aLn, bP.aLo, bP.aLp) && qw.drawImage(aLh[0], bP.aLq, bP.aLr - aLg), aF3(bH.eV, -aLg, aLg, bH.eW + 2 * aLg, bP.aLm, bP.aLn, bP.aLo, bP.aLp) && qw.drawImage(aLh[1], bP.aLq + bH.eV, bP.aLr - aLg),
			aF3(0, bH.eW, bH.eV, aLg, bP.aLm, bP.aLn, bP.aLo, bP.aLp) && qw.drawImage(aLh[2], bP.aLq, bP.aLr + bH.eW), aF3(-aLg, -aLg, aLg, bH.eW + 2 * aLg, bP.aLm, bP.aLn, bP.aLo, bP.aLp) && qw.drawImage(aLh[3], bP.aLq - aLg, bP.aLr - aLg))
	}
}

function cq() {
	this.gp = new aLs, this.aAc = new aLt, this.tZ = new aLu, this.ky = new aLv, this.ht = new aLw, this.a0L = new aLx, this.aLy = new aLz, this.jG = new aM0, this.k8 = new aM1, this.aM2 = new aM3, this.dI = function() {
		this.tZ.dI(), this.ky.dI(), this.ht.dI(), this.a0L.dI(), this.aM2.dI()
	}, this.qv = function() {
		this.aM2.qv(), this.tZ.qv()
	}
}

function aM0() {
	this.iH = function(player) {
		var oE;
		return 0 !== aU.g0[player].length && bC.ky.oF !== bC.ky.jj && !((oE = bC.ky.oE[player]) >= a2.jj[a2.iZ[player]] || oE === bC.ky.oR || !b1.ff.oL(player, a2.jh[a2.iZ[player]], 32, 0) || !ab.i6.iH(player) && !ab.i8.iH(player) || ! function(
			yi) {
			var aM6 = bD.ew[1] + bB.h8[bD.ew[2] - 1] << 2;
			if (aQ.eB(aM6)) return 1;
			return aM6 = aQ.eC(aM6), yi !== aM6 && !!eD(yi, aM6)
		}(player)) && function(player) {
			return b1.ff.oO(player), bC.ky.oU(player), !0
		}(player)
	}
}

function aLs() {
	function aML(z, kZ, ka) {
		var aMN, aMM;
		if (!(z < 0)) return aMM = bC.ky.ll[z], aMN = bB.hX(aMM), aMM = bB.ha(aMM), z = 20 * (.9 + .1 * Math.log10(bC.ky.a1W[z])), z = Math.max(z, bB.hn(b1.p1.qU(.02, 1.7))), bA.aFB(bB.hW(kZ), bB.hZ(ka), aMN, aMM, z)
	}

	function aMF(aME) {
		var aMQ = 4 + .03 * (1 + 1.5 * m.n.uM()) * am.p3 / hl;
		return bB.hb(aME, bD.ew[1]) < aMQ
	}
	this.gq = function(player, aME) {
		return !!bB.ho(aME) && bC.ky.oF !== bC.ky.jj && bC.ky.oE[player] !== bC.ky.oR && 0 !== aU.g0[player].length && !!bC.k8.k9(player, aME) && !!aMF(aME)
	}, this.nX = function(player, li, aME) {
		return !!(bB.ho(aME) && this.oV(player, li) && bC.k8.oW(aME) && aMF(aME))
	}, this.oV = function(player, id) {
		for (var aMG, qP = player << 3, qQ = qP + bC.ky.oE[player], aMH = bC.ky.aMH, aMI = bC.ky.aMI, z = qP; z < qQ; z++)
			if (id === aMI[aMG = aMH[z]]) return bD.ew[3] = aMG, !0;
		return !1
	}, this.nW = function(e6) {
		var a0M = bC.a0L.a0M;
		return !!this.oV(a1.e4, a0M) && (az.gi.nW(a0M, e6), !0)
	}, this.a0O = function(kZ, ka) {
		var player = a1.e4,
			eK = bC.ky.oE[player];
		if (0 === eK) return !1;
		for (var aMH = bC.ky.aMH, ll = bC.ky.ll, qP = player << 3, aMJ = 80, aGp = -1, z = qP + eK - 1; qP <= z; z--) {
			var aMK = aMH[z],
				ea = bB.hR(kZ, ka, ll[aMK]);
			ea < aMJ && (aMJ = ea, aGp = aMK)
		}
		return !!aML(aGp, kZ, ka) && (bC.a0L.a0M = bC.ky.aMI[aGp], bb.oT.a0O(), !0)
	}, this.a0V = function(kZ, ka) {
		var eK = bC.ky.oF;
		if (eK < 1) return -1;
		for (var ll = bC.ky.ll, aMJ = 80, aGp = -1, z = 0; z < eK; z++) {
			var ea = bB.hR(kZ, ka, ll[z]);
			ea < aMJ && (aMJ = ea, aGp = z)
		}
		return aML(aGp, kZ, ka) ? aGp : -1
	}, this.lk = function(player, id) {
		for (var qP = player << 3, qQ = qP + bC.ky.oE[player], aMI = bC.ky.aMI, aMH = bC.ky.aMH, z = qP; z < qQ; z++) {
			var aMK = aMH[z];
			if (aMI[aMK] === id) return aMK
		}
		return -1
	}, this.aAZ = function(player) {
		for (var qP = player << 3, qQ = qP + bC.ky.oE[player], aMH = bC.ky.aMH, a1W = bC.ky.a1W, iZ = 0, z = qP; z < qQ; z++) iZ += a1W[aMH[z]];
		return iZ
	}, this.lq = function(player) {
		return 0 === bC.ky.oE[player] ? -1 : bC.ky.aMH[player << 3]
	}
}

function aLt() {
	this.aAd = function(player) {
		for (var aMH = bC.ky.aMH, qP = player << 3, z = qP + bC.ky.oE[player] - 1; qP <= z; z--) this.aMR(aMH[z])
	}, this.aMR = function(aMS) {
		var ky = bC.ky,
			aMT = ky.oF - 1,
			aMU = ky.a1V[aMS],
			aMV = ky.aMW[aMS],
			aMX = ky.ll[aMS];
		ky.oF = aMT, ky.a1V[aMS] = ky.a1V[aMT], ky.aMY[aMS] = ky.aMY[aMT], ky.aMZ[aMS] = ky.aMZ[aMT], ky.ll[aMS] = ky.ll[aMT], ky.aMa[aMS] = ky.aMa[aMT], ky.a1W[aMS] = ky.a1W[aMT], ky.aMW[aMS] = ky.aMW[aMT], ky.aMI[aMS] = ky.aMI[aMT], ky.aMb[
			aMS] = ky.aMb[aMT], ky.aMc[aMS] = ky.aMc[aMT], ky.aMd[aMS] = ky.aMd[aMT], ky.aMH[ky.a1V[aMS]] = aMS,
			function(a8l) {
				var player = a8l >> 3,
					ky = bC.ky,
					eK = ky.oE[player] - 1,
					aMg = (player << 3) + eK;
				ky.oE[player] = eK, aMg !== a8l && (ky.aMH[a8l] = ky.aMH[aMg], ky.a1V[ky.aMH[a8l]] = a8l)
			}(aMU), bC.ht.ht[bB.hs(ky.ll[aMS])][ky.aMW[aMS]] = aMS, aMT = bB.hs(aMX), aMU = aMV, aMT = bC.ht.ht[aMT], ky = aMT.pop(), aMU !== aMT.length && (aMT[aMU] = ky, bC.ky.aMW[ky] = aMU)
	}
}

function aLu() {
	var aMi, u1 = 8,
		aMj = new Array(2);

	function aMk(o2) {
		var gy = u1 + 4,
			y9 = b1.p1.sN(gy, gy),
			h5 = b1.p1.getContext(y9, !0),
			h1 = b1.p1.getImageData(h5, gy, gy),
			sY = h1.data;
		return aMl(sY, gy + 1, o2), aMl(sY, gy + 2, o2), aMl(sY, 2 * gy + 1, o2), aMl(sY, 2 * gy - 3, o2), aMl(sY, 2 * gy - 2, o2), aMl(sY, 3 * gy - 2, o2), aMl(sY, gy * (gy - 3) + 1, o2), aMl(sY, gy * (gy - 2) + 1, o2), aMl(sY, gy * (gy - 2) + 2,
			o2), aMl(sY, gy * (gy - 2) - 2, o2), aMl(sY, gy * (gy - 1) - 3, o2), aMl(sY, gy * (gy - 1) - 2, o2), h5.putImageData(h1, 0, 0), y9
	}

	function aMl(sY, e6, o2) {
		e6 *= 4;
		sY[e6] = 255, sY[1 + e6] = 255, sY[2 + e6] = o2, sY[3 + e6] = 255
	}

	function sN(player) {
		var y9 = b1.p1.sN(u1, u1);
		return function(h5, player) {
			var eR, eT, hV, e6, aMn, a8m, gy = u1,
				h1 = b1.p1.getImageData(h5, gy, gy),
				sY = h1.data,
				kD = (gy >> 1) - .5,
				aLi = aQ.a26(player),
				aMp = b1.pB.xq(aLi, .5);
			b1.pB.xs(aLi, aMp, 300) || b1.pB.xu(aLi, 100);
			for (eT = 0; eT < gy; eT++)
				for (eR = 0; eR < gy; eR++) a8m = (gy - 1.5) * (gy - 1.5) / 4, aMn = (hV = (hV = eR - kD) * hV + (hV = eT - kD) * hV) <= (gy - 4.5) * (gy - 4.5) / 4 ? aMp : aLi, sY[e6 = 4 * (eT * gy + eR)] = aMn[0], sY[1 + e6] = aMn[1], sY[2 +
					e6] = aMn[2], sY[3 + e6] = a8m < hV ? 0 : 255;
			h5.putImageData(h1, 0, 0)
		}(b1.p1.getContext(y9, !0), player), y9
	}
	this.dI = function() {
		aMi = new Array(a1.eH), aMj[0] = aMk(255), aMj[1] = aMk(0)
	}, this.qv = function() {
		var z, player, aMq, aFC, iZ, hU, aMs, aMu, aMv, ll = bC.ky.ll,
			a1V = bC.ky.a1V,
			a1W = bC.ky.a1W,
			aMc = bC.ky.aMc,
			aMw = aMi,
			aMx = a1.e4,
			aMy = -1,
			eK = bC.ky.oF,
			aMz = am.t,
			aN0 = am.iw,
			aN1 = bH.eV << 4,
			e9 = hl,
			e0 = e9 / u1,
			lm = hk / e9,
			ln = hm / e9,
			hV = (aMz + hk) / e9 - lm,
			hY = (aN0 + hm) / e9 - ln,
			h5 = qw;
		for (bC.gp.oV(a1.e4, bC.a0L.a0M) && (aMy = bD.ew[3]), h5.imageSmoothingEnabled = e9 < 9, b1.p1.textAlign(h5, 1), b1.p1.textBaseline(h5, 1), z = 0; z < eK; z++) player = a1V[z] >> 3, iZ = a1W[z], aMq = .9 + .1 * Math.log10(iZ), aFC = (hU =
				ll[z]) % aN1 / 16 - aMq, hU = aN0 * (Math.floor(hU / aN1) / 16 - aMq - ln) / hY, aMs = -2 * (aMv = e9 * aMq) * (1 + (aMu = +(player === aMx)) / 8), aMu = aMu * aMv / 4, (aMv = aMz * (aFC - lm) / hV) < aMs || hU < aMs || aMz +
			aMu < aMv || aN0 + aMu < hU || (aFC = 2 * aMq * e0, aMs = aMq * e9, void 0 === (aMu = aMw[player]) && (aMw[player] = aMu = sN(player)), player === aMx && (h5.setTransform(aFC, 0, 0, aFC, aMv - 2 * aFC, hU - 2 * aFC), h5.drawImage(aMj[
				+(z === aMy)], 0, 0)), h5.setTransform(aFC, 0, 0, aFC, aMv, hU), h5.drawImage(aMu, 0, 0), (aMq = Math.floor(function(iZ) {
				if (iZ < 1e3) return .42;
				if (iZ < 1e4) return .34;
				if (iZ < 1e6) return .26;
				if (iZ < 1e8) return .19;
				return .15
			}(iZ) * aMs)) < 6) || (h5.setTransform(1, 0, 0, 1, 0, 0), h5.fillStyle = aMc[z] ? p.mp : p.mN, h5.font = b1.p1.qD(1, aMq), h5.fillText(b1.w8.zC(iZ), aMv + aMs, hU + aMs + .1 * aMq));
		h5.imageSmoothingEnabled = !1, h5.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aM3() {
	var y9;
	this.dI = function() {
		y9 = y9 || bE.ky.aN4(20, bV.aN5[0])
	}, this.qv = function() {
		var m7 = hl;
		if (!(5 <= m7)) {
			var aMz = am.t,
				aN0 = am.iw,
				lm = hk / m7,
				ln = hm / m7,
				m0 = (aMz + hk) / m7,
				m1 = (aN0 + hm) / m7,
				fs = -20 * m7,
				aN6 = .5 * fs,
				aN1 = bH.eV << 4,
				eK = bC.ky.oF,
				ll = bC.ky.ll,
				aN7 = y9,
				h5 = qw;
			3 < m7 && (h5.globalAlpha = .5 * (5 - m7));
			for (var z = 0; z < eK; z++) {
				var hU = ll[z],
					eR = aMz * (hU % aN1 / 16 - lm) / (m0 - lm) + aN6,
					hU = aN0 * (Math.floor(hU / aN1) / 16 - ln) / (m1 - ln) + aN6;
				aMz < eR || aN0 < hU || eR < fs || hU < fs || (h5.setTransform(m7, 0, 0, m7, eR, hU), h5.drawImage(aN7, 0, 0))
			}
			h5.globalAlpha = 1, h5.setTransform(m7, 0, 0, m7, 0, 0)
		}
	}
}

function aLz() {
	this.iH = function() {
		for (var aMM, aLy, aMb = bC.ky.aMb, ll = bC.ky.ll, aMZ = bC.ky.aMZ, z = bC.ky.oF - 1; 0 <= z; z--) aMM = ll[z], 0 !== (aLy = aMb[z]) && aMM === aMZ[z] && (! function(z, aNA, hI) {
			var iY, player = bC.ky.a1V[z] >> 3,
				hI = aNA + bB.h8[hI] << 2,
				z = bC.ky.a1W[z];
			if (bS.aNB(player), aQ.eB(hI)) iY = a1.eH;
			else {
				if ((iY = aQ.eC(hI)) === player) return hI = b1.ff.fi(player, z), bS.fj(player, z - hI, 12);
				if (!eD(player, iY)) return az.jX.nn(player, iY, z)
			}
			aR.io(player, iY) || aR.j6(player) ? (aU.fl[player].push(aNA << 2), aR.iV(player, z, iY), a3.iW(player, !0)) : bS.fj(player, z, 12)
		}(z, bB.hr(aMM), aLy - 1), bC.aAc.aMR(z))
	}, this.aNC = function(player, e6, hI, li) {
		if (0 !== hI) {
			var aMx = a1.e4;
			if (b1.ff.gY(aMx) && eD(player, aMx) && player !== aMx && 0 !== aU.g0[aMx].length) {
				var aM6 = e6 + bB.h8[--hI] << 2;
				if (aQ.eB(aM6) || eD(player, aQ.eC(aM6))) {
					for (var eY = !1, z = 0; z < 4; z++)
						if (aM6 = e6 + bB.h8[z] << 2, aQ.eF(aM6) && !aQ.eB(aM6) && aQ.eC(aM6) === aMx) {
							eY = !0;
							break
						} eY && (aA.a0N(719, 0), aA.vg(180, L(325, [aU.a1N[player]]), 719, player, p.mo, p.mK, -1, !0, void 0, {
						ee: 1,
						li: li
					}))
				}
			}
		}
	}
}

function aLv() {
	this.aND = null, this.jj = 512, this.oR = 8, this.oF = 0, this.aNE = 0, this.a1V = new Uint16Array(this.jj), this.aMY = new Uint32Array(this.jj), this.aMZ = new Uint32Array(this.jj), this.ll = new Uint32Array(this.jj), this.aMa = new Uint16Array(
			this.jj), this.a1W = new Uint32Array(this.jj), this.aMW = new Uint16Array(this.jj), this.aMI = new Uint16Array(this.jj), this.aMb = new Uint8Array(this.jj), this.aMc = new Uint8Array(this.jj), this.aMd = new Uint32Array(this.jj), this
		.oE = new Uint8Array(a1.eH), this.aMH = new Uint16Array(this.oR * a1.eH), this.dI = function() {
			this.aNE = 0, this.oF = 0, this.aND = new Uint8Array(bH.eV + bH.eW), this.oE.fill(0)
		}, this.oU = function(player) {
			var eK = this.oF,
				aNF = bB.hq(bD.ew[0]),
				aNG = this.oE[player],
				aNH = (player << 3) + aNG,
				iZ = (this.a1V[eK] = aNH, this.aMY[eK] = aNF, this.ll[eK] = aNF, this.aMZ[eK] = bB.hq(bD.ew[1]), this.aMa[eK] = 0, bD.es[0]);
			iZ < 60 ? (b1.ff.fg(player, 60 - iZ), this.a1W[eK] = 60) : this.a1W[eK] = iZ, this.aMW[eK] = bC.ht.oU(eK, bB.hs(aNF)), this.aMI[eK] = this.aNE, this.aMb[eK] = bD.ew[2], this.aMc[eK] = 0, this.aMd[eK] = 0, this.aNE = this.aNE + 1 & 1023,
				this.aMH[aNH] = eK, this.oE[player] = aNG + 1, this.oF++, bC.aLy.aNC(player, bD.ew[1], bD.ew[2], this.aMI[eK])
		}, this.nW = function() {
			var aMG = bD.ew[3];
			this.aMY[aMG] = this.ll[aMG], this.aMZ[aMG] = bB.hq(bD.ew[1]), this.aMa[aMG] = 0, this.aMb[aMG] = bD.ew[2], bC.aLy.aNC(this.a1V[aMG] >> 3, bD.ew[1], bD.ew[2], this.aMI[aMG])
		}, this.iH = function() {
			bC.aLy.iH();
			var z, fr = a1.e4,
				dv = bC.gp.aAZ(fr),
				vp = (! function(vp) {
					var z, aNM, aNN, aNO, aNP, aNF, aNT, aNU, eN, fs, aMY = vp.aMY,
						aMZ = vp.aMZ,
						ll = vp.ll,
						a1W = vp.a1W,
						aMc = vp.aMc,
						aMa = vp.aMa,
						aMW = vp.aMW,
						g9 = aU.g9,
						a1V = vp.a1V,
						vp = vp.oF,
						aN1 = bH.eV << 4;
					for (z = vp - 1; 0 <= z; z--) aNN = ll[z], aNM = aMZ[z], aNN !== aNM && (aNF = aMY[z], aNT = aNM % aN1 - (aNP = aNF % aN1), aNU = ~~((aNM + .5) / aN1) - (aNF = ~~((aNF + .5) / aN1)), eN = ~~Math.sqrt(aNT * aNT + aNU * aNU +
						.5), fs = 15e4 + 25e3 * bA.log10(a1W[z]), fs += 5e4 * !g9[a1V[z] >> 3], aMc[z] && (fs = bA.em(fs, 5)), 65535 <= (fs = aMa[z] + Math.max(~~((fs + .5) / eN), 1)) ? ll[z] = aNO = aNM : (aMa[z] = fs, ll[z] = aNO =
						aNP + bA.em(fs * aNT, 65536) + aN1 * (aNF + bA.em(fs * aNU, 65536))), aMW[z] = bC.ht.aNW(aMW[z], aNN, aNO))
				}(this), ! function(vp) {
					if (bU.jP() % 2 == 1) {
						var z, kG, kD, ee, ef, aNX, uL, aNY, gl, hC, lm, ln, aNF, aNZ, aNa, aNb, sg, eK = vp.oF,
							ll = vp.ll,
							a1V = vp.a1V,
							a1W = vp.a1W,
							aMd = vp.aMd,
							aMc = vp.aMc,
							ht = bC.ht.ht,
							aNd = ht.length,
							aNe = bC.ht.aNe,
							aN1 = bH.eV << 4,
							aNf = a1.iS,
							aKT = bV.eI,
							fs = (eK - 1) * (bA.em(bU.jP(), 2) % 2);
						for (z = 0; z < eK; z++)
							for (kG = Math.abs(z - fs), aNF = ll[kG], kD = bB.hs(aNF), gl = a1V[kG] >> 3, lm = aNF % aN1, ln = ~~((aNF + .5) / aN1), aNb = a1W[kG], ee = 0; ee < 9; ee++)
								if (!((aNX = kD + aNe[ee]) < 0 || aNd <= aNX))
									for (aNY = ht[aNX], uL = aNY.length, ef = 0; ef < uL; ef++) aNZ = aNY[ef], sg = a1V[aNZ] >> 3, gl == sg || aNf && aKT[gl] === aKT[sg] || (sg = ll[aNZ], (hC = lm - sg % aN1) * hC + (hC = ln - ~~((sg + .5) /
										aN1)) * hC < 14400 && ((sg = a1W[aNZ]) <= aNb ? aNa = Math.max(1, bA.em(sg + bA.em(aNb - sg, 10), 10)) : (aNa = Math.max(1, bA.em(aNb, 10)), aMd[aNZ] = Math.min(aMd[aNZ] + aNa, 4294967295)), a1W[
										aNZ] = Math.max(sg - aNa, 0), aMc[aNZ] = 4))
					}
				}(this), ! function(vp) {
					if (bU.jP() % 5 == 3) {
						var z, iZ, a1W = vp.a1W,
							g9 = aU.g9,
							a1V = vp.a1V,
							aMd = vp.aMd,
							aMc = vp.aMc,
							eK = vp.oF;
						for (z = 0; z < eK; z++) iZ = a1W[z], g9[a1V[z] >> 3] ? a1W[z] = Math.max(iZ - Math.max(1, iZ >> 7), 0) : (a1W[z] = Math.max(iZ - Math.max(1, iZ >> 11), 0), aMc[z] || (iZ = aMd[z]) && (iZ = Math.max(iZ >> 3, 1), a1W[z] =
							Math.min(a1W[z] + (iZ << 1), 4294967295), aMd[z] -= iZ))
					}
				}(this), this),
				a1W = vp.a1W,
				aMc = vp.aMc;
			for (z = vp.oF - 1; 0 <= z; z--) aMc[z] = aMc[z] >> 1, 0 === a1W[z] && bC.aAc.aMR(z);
			bS.fj(fr, dv - bC.gp.aAZ(fr), 15)
		}
}

function aLw() {
	this.aNg = 32, this.eR = 0, this.eT = 0, this.hu = 0, this.aNh = 0, this.aNi = 4, this.ht = null, this.aNe = new Int16Array(9), this.dI = function() {
		this.hu = 1 + bA.em(bH.eV - 1, this.aNg), this.aNh = 1 + bA.em(bH.eW - 1, this.aNg), this.ht = new Array(this.hu * this.aNh), b1.pB.xp(this.ht);
		var eR, eT, aNe = this.aNe,
			t = this.hu;
		for (eR = -1; eR <= 1; eR++)
			for (eT = -1; eT <= 1; eT++) aNe[3 * (1 + eT) + 1 + eR] = eT * t + eR
	}, this.oU = function(aNk, z) {
		return this.ht[z].push(aNk), this.ht[z].length - 1
	}, this.aNW = function(aNl, aNF, aNM) {
		var aNm, aNn, aNF = bB.hs(aNF),
			aNM = bB.hs(aNM);
		return aNF === aNM ? aNl : (aNm = this.ht[aNF].pop(), this.ht[aNF].length === aNl ? this.oU(aNm, aNM) : (aNn = this.ht[aNF][aNl], this.ht[aNF][aNl] = aNm, bC.ky.aMW[aNm] = aNl, this.oU(aNn, aNM)))
	}
}

function aM1() {
	function we(aNM, aNo) {
		if (function(aNM, aME) {
				var hB = bB.hr(aNM),
					aNr = Math.abs(bB.eS(aME) - bB.eS(hB)),
					hB = Math.abs(bB.eU(aME) - bB.eU(hB));
				return 0 !== Math.max(aNr, hB) && (function(aNF, aNM, aNr, aNs) {
					var aNu = bB.hX(aNF),
						aNF = bB.ha(aNF),
						aNw = bB.hX(aNM),
						aNM = bB.ha(aNM),
						aNw = aNw - aNu,
						aNM = aNM - aNF,
						aO0 = Math.abs(aNw),
						aO1 = Math.abs(aNM),
						aNw = 0 < aNw ? 1 : 3,
						aNM = 0 < aNM ? 2 : 0;
					aO1 < aO0 ? aO4(aNu, aNF, aNu + aO0, aNF + aO1, aNw, aNM, aNr) : aO4(aNF, aNu, aNF + aO1, aNu + aO0, aNM, aNw, aNs)
				}(aNM, bB.hq(aME), aNr, hB), !0)
			}(aNM, aNo)) {
			if (0 === bD.eq[0]) return !!aQ.go(aNo << 2);
			if (function(aME) {
					if (aQ.go(aME << 2)) return 1;
					return function(aME) {
						var z, hI, aND = bC.ky.aND,
							aO8 = bB,
							eK = bD.eq[0],
							aO9 = 4 * aME;
						for (z = eK - 1; 0 <= z; z--)
							if (hI = aND[z], aO9 = aO8.hw(aO9, hI + 2 & 3), aQ.go(aO9)) return bD.eq[0] = z, bD.ew[1] = aO9 >> 2, bD.ew[2] = 1 + hI, 1;
						return
					}(aME)
				}(aNo)) {
				var z, aNo = bB.hr(aNM),
					sY = a6Q,
					aND = bC.ky.aND,
					eK = bD.eq[0] - 1,
					aO9 = 4 * aNo,
					h9 = bB.h9;
				for (z = 0; z < eK; z++)
					if (aO9 += h9[aND[z]], 0 !== sY[aO9 + 3] || 2 !== sY[aO9 + 2]) return !!void 0;
				return !!1
			}
		}
		return !1
	}

	function aO4(aNu, aNv, aNw, aNx, aO2, aO3, aNr) {
		for (var eT, aND = bC.ky.aND, fs = 0, aO5 = 0, iw = aNx - aNv, t = aNw - aNu, aO6 = aNu % 16, z = 1; z <= aNr; z++) aND[fs++] = aO2, aND[fs] = aO3, fs += (eT = (iw * (aO6 + (z << 4)) + .5) / t >> 4) - aO5, aO5 = eT;
		bD.ez(bD.eq, fs)
	}
	this.k9 = function(player, aNo) {
		var hI, hB, gk = bB.hK(player, aNo);
		return gk !== aNo && (hI = bB.hA(gk, aNo), hB = bB.hv(gk, hI), !(!aQ.go(hB << 2) && (hI = bB.hH(gk, aNo, hI), hB = bB.hv(gk, hI), !aQ.go(hB << 2)) || (bD.ew[0] = hB, bD.ew[1] = aNo, bD.ew[2] = 0, !we(bB.hq(hB), aNo)) || 0 !== bD.ew[2] &&
			bB.hQ(player, bD.ew[1] + bB.h8[bD.ew[2] - 1] << 2)))
	}, this.oW = function(aNo) {
		var aNF = bC.ky.ll[bD.ew[3]];
		return bD.ew[1] = aNo, bD.ew[2] = 0, we(aNF, aNo)
	}
}

function aLx() {
	var u1 = 32,
		u0 = new Array(2);

	function sN(ef) {
		var eR, eT, e6, hY, hV, gy = u1,
			y9 = b1.p1.sN(gy, gy),
			h5 = b1.p1.getContext(y9, !0),
			h1 = b1.p1.getImageData(h5, gy, gy),
			sY = h1.data,
			kD = (gy >> 1) - .5,
			kE = Math.sqrt(kD * kD);
		for (sY.fill(255), eT = 0; eT < gy; eT++)
			for (eR = 0; eR < gy; eR++) hV = eR - kD, hY = eT - kD, e6 = 4 * (eT * gy + eR), hV = 714 * (kE - Math.sqrt(hV * hV + hY * hY)) / kE, sY[2 + e6] = ef, sY[3 + e6] = 255 < hV ? 0 : hV;
		return h5.putImageData(h1, 0, 0), y9
	}
	this.a0M = -1, this.dI = function() {
		this.a0M = -1, u0[0] || (u0[0] = sN(255), u0[1] = sN(0))
	}, this.aOB = function(h5, e0, eR, eT, h7, z) {
		b1.ff.gY(a1.e4) && (h5.setTransform(e0 *= 4 / 3 * .625, 0, 0, e0, eR - (h7 *= 4 / 3), eT - h7), h5.drawImage(u0[+(bC.ky.aMI[z] === this.a0M)], 0, 0))
	}
}

function dL() {
	this.aIH = [L(326), L(327), L(328), L(329), L(330), L(331), L(332), L(333), L(334), L(335), L(336), L(337), L(338)];
	var aOC = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aIG = new Array(aOC.length), this.dI = function() {
		var f0 = bY.db.data[155].value.split(";"),
			kD = f0.length;
		if (function() {
				for (var eK = aOC.length, z = 0; z < eK; z++) bM.aIG[z] = aOC[z]
			}(), !(kD > aOC.length))
			for (var z = 0; z < kD; z++) f0[z].length && (this.aIG[z] = f0[z])
	}, this.aIJ = function(o2, code) {
		for (var aIG = this.aIG, aOE = aOC, oj = (aIG[o2] = code, ""), eK = aIG.length, aOF = [], z = 0; z < eK; z++) aOF.push(aIG[z] === aOE[z] ? "" : aIG[z]);
		eK--;
		for (z = 0; z < eK; z++) oj += aOF[z] + ";";
		bY.pg.ph(155, oj += aOF[eK])
	}, this.aIF = function() {
		bY.pg.ph(155, ""), this.dI()
	}, this.ef = function(code, o2) {
		return code === this.aIG[o2] || code === this.aIG[o2 + 1]
	}
}

function cI() {
	this.a2v = function() {
		var aOI;
		return !(aZ.jT < 3 || aU.g9[kk[0]] >= a1.jC >> 1) && (a1.iS ? (aOI = aS.aBk(), !(2 * aS.aBl(bW.ki()) >= aOI)) : function() {
			var aOI = aS.aBk();
			if (2 * aU.gN[kk[0]] >= aOI) return !1;
			return !0
		}())
	}
}

function d9() {
	var aOK = 501,
		aOL = (this.wD = new Uint32Array(aOK), this.ym = new Uint32Array(aOK), this.a5o = new Uint16Array(aOK), this.aIP = 0, 1),
		aOM = 0;

	function aOP(self) {
		self.max.fill(0)
	}

	function aOR(self, z) {
		self.max[0] = Math.max(self.wD[z], self.max[0]), self.max[1] = Math.max(self.ym[z], self.max[1]), self.max[2] = Math.max(self.a5o[z], self.max[2])
	}
	this.max = [0, 0, 0], this.aON = 0, this.lG = new Array(21), this.aOO = null, this.dJ = function() {
		this.aOO = [L(339), L(340), L(341), L(342), L(343), L(344), L(345), L(346), L(347), L(348), L(349), L(350), L(351), L(352), "", L(353), L(354), L(355), L(356), L(357), L(358)]
	}, this.dI = function() {
		this.aIP = 0, aOL = 1, this.aON = 0, aOM = 0, aOP(this), this.lG.fill(0)
	}, this.oP = function(player, hj) {
		b1.ff.yh(player) && (this.lG[0] += hj + 1, this.lG[1]++, this.lG[12] += bD.es[1])
	}, this.np = function(player, nS) {
		__fx.donationsTracker.logDonation(player, nS, bD.es[0]);
		player === a1.e4 && (aA.np(bD.es[0], bD.es[1], nS), this.lG[12] += bD.es[1], this.lG[16] += bD.es[0]), nS === a1.e4 && (aA.a1j(bD.es[0], player), this.lG[10] += bD.es[0])
	}, this.oS = function(player) {
		b1.ff.yh(player) && (this.lG[2]++, this.lG[12] += bD.es[1])
	}, this.od = function(player) {
		b1.ff.yh(player) && (this.lG[19]++, this.lG[12] += bD.es[1])
	}, this.aNB = function(player) {
		b1.ff.yh(player) && this.lG[20]++
	}, this.fj = function(player, zO, o2) {
		b1.ff.yh(player) && (this.lG[o2] += zO)
	}, this.iH = function() {
		var self;
		this.aON || 0 < aOM-- || ((self = this).wD[self.aIP] = aU.g9[a1.e4], self.ym[self.aIP] = aU.gN[a1.e4], self.a5o[self.aIP] = aS.a5p(a1.e4), aOR(self, self.aIP), self.aIP++, self.aIP === aOK && function(self) {
			aOP(self), aOR(self, 0), self.aIP = 1 + bA.em(aOK, 2);
			for (var z = 1; z < self.aIP; z++) self.wD[z] = self.wD[2 * z], self.ym[z] = self.ym[2 * z], self.a5o[z] = self.a5o[2 * z], aOR(self, z);
			aOL *= 2
		}(self), aOM = aOL - 1, bT.l7(), 0 === aU.lK[a1.e4] && (self.aON = bU.jP()))
	}
}

function dA() {
	this.t = 0, this.iw = 0, this.qF = 0, this.qG = 0, this.aOT = 0, this.aOU = 0, this.a38 = 0, this.a9U = 0;
	var aOV = this.a9F = 0;
	this.aOW = 0, this.aOX = 0, this.aOY = 0, this.a2X = 0, this.o2 = 0, this.a5R = null, this.tw = !1, this.aOZ = -1, this.aOa = !1, this.aOb = [0, 0], this.dJ = function() {
		this.a5R = [L(359), L(94, 0, "Balance"), L(93, 0, "Interest"), L(360)]
	}, this.dI = function() {
		this.tw = !1, this.aOZ = -1, this.aOa = !1, this.resize()
	}, this.resize = function() {
		this.t = am.t < 1.369 * am.iw ? am.t : 1.369 * am.iw;
		var eN = m.n.uM() && am.t < am.iw ? 1 : m.n.uM() ? .8 : am.t < am.iw ? .65 : .59;
		this.t = Math.floor(eN * this.t), this.t -= m.n.uM() && am.t < am.iw ? 2 * bR.gap + 2 : 0, this.iw = Math.floor(this.t / 1.369), this.a2X = Math.floor(this.iw / 150), this.a2X = Math.max(this.a2X, 1.5), this.qF = Math.floor(1 + .02 * this
			.t), this.qG = Math.floor(1 + .04 * this.t), this.a38 = this.qG, aOV = Math.floor(.75 * this.a38), this.a9U = Math.floor(1 + .075 * this.t), this.aOW = Math.floor(1 + .1125 * this.t), this.aOX = Math.floor(this.t * (m.n.uM() ?
			.03 : .029)), this.aOX = Math.max(this.aOX, 4), this.aOY = Math.floor(.035 * this.t), this.aOY = Math.max(this.aOY, 4), this.a9F = this.iw - 2 * this.a38 - this.a9U - this.aOW, this.tw && this.aOc()
	}, this.gZ = function(kZ, ka) {
		var t0, sz;
		return !!this.tw && (sz = kZ, t0 = ka, kZ -= bA.em(am.t - this.t, 2), ka -= bA.em(am.iw - this.iw, 2), kZ < 0 || ka < 0 || kZ >= this.t || ka >= this.iw || kZ >= this.t - this.aOW && ka < this.aOW ? -1 !== a9.gZ(sz, t0) || b2.gZ(sz,
			t0) || this.qS() : ka < this.aOW || (ka < this.iw - this.a9U ? (this.aOa = !0, this.aOZ = (kZ - 2 * this.qF - this.aOT) / this.aOU, 3 !== this.o2 && (bU.dQ = !0)) : (sz = (sz = Math.floor(kZ / (this.t / this.a5R.length))) < 0 ?
				0 : sz >= this.a5R.length ? this.a5R.length - 1 : sz) !== this.o2 && (this.o2 = sz, this.aOc(), bU.dQ = !0)), !0)
	}, this.wu = function(kZ, ka) {
		return this.aOb[0] = kZ, this.aOb[1] = ka, !(!this.tw || !this.aOa || (kZ -= bA.em(am.t - this.t, 2), ka = this.aOZ, this.aOZ = (kZ - 2 * this.qF - this.aOT) / this.aOU, (0 <= this.aOZ && this.aOZ <= 1 || 0 <= ka && ka <= 1) && (bU.dQ = !
			0), 0))
	}, this.xK = function() {
		this.aOa && (this.aOa = !1)
	}, this.xW = function() {
		this.tw ? this.qS() : this.show()
	}, this.show = function() {
		bS.aIP < 2 || (this.tw = !0, this.aOc())
	}, this.qS = function() {
		this.tw = !1, this.aOZ = -1, bU.dQ = !0
	}, this.aOc = function() {
		this.o2 < 2 ? this.aOT = aD.measureText(b1.w8.zC(bS.max[this.o2]), b1.p1.qD(0, this.aOX)) : 2 === this.o2 && (this.aOT = aD.measureText(b1.w8.zH(6, 2), b1.p1.qD(0, this.aOX))), this.aOU = this.t - 2 * this.qF - this.aOT - this.qG
	}, this.l7 = function() {
		this.tw && this.aOc()
	}, this.qv = function() {
		this.tw && this.a3P()
	}, this.a3P = function() {
		var eR = bA.em(am.t - this.t, 2),
			eT = bA.em(am.iw - this.iw, 2);
		qw.setTransform(1, 0, 0, 1, eR, eT), qw.fillStyle = p.mK, qw.fillRect(0, this.aOW, this.t, this.iw - this.aOW), this.aOd(), this.aHh(), qw.strokeRect(0, 0, this.t, this.iw), b1.p1.textAlign(qw, 2), qw.font = b1.p1.qD(0, this.aOX), 0 ===
			this.o2 ? this.aOe(bS.wD, eR, eT) : 1 === this.o2 ? this.aOe(bS.ym, eR, eT) : 2 === this.o2 ? this.aOf(eR, eT) : 3 === this.o2 && (this.aOg(eR, eT), this.aOh(eR, eT)), a9.a0n(Math.floor(eR + this.t - .725 * this.aOW), Math.floor(eT +
				.275 * this.aOW), Math.floor(.45 * this.aOW)), qw.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aOd = function() {
		var z, dv;
		for (qw.lineWidth = this.a2X, b1.p1.textBaseline(qw, 1), b1.p1.textAlign(qw, 1), qw.strokeStyle = p.mN, qw.font = b1.p1.qD(1, this.aOY), dv = this.t / this.a5R.length, qw.fillStyle = p.mg, qw.fillRect(this.o2 * dv, this.iw - this.a9U, dv,
				this.a9U), qw.fillStyle = p.mN, qw.fillRect(0, this.iw - this.a9U - .5 * this.a2X, this.t, this.a2X), z = 1; z <= 3; z++) qw.fillRect(z * dv, this.iw - this.a9U, this.a2X, this.a9U);
		for (z = this.a5R.length - 1; 0 <= z; z--) qw.fillText(b1.tc.yL(this.a5R[z], 0, .9 * dv), (z + .5) * dv, this.iw - .46 * this.a9U)
	}, this.aHh = function() {
		qw.fillStyle = p.mz, qw.fillRect(0, 0, this.t, this.aOW), qw.fillStyle = p.mN, qw.fillRect(0, this.aOW - .5 * this.a2X, this.t, this.a2X), qw.font = b1.p1.qD(1, .39 * this.aOW), qw.fillText(b1.tc.yL(L(361), 0, .8 * this.t), Math.floor(
			this.t / 2), Math.floor(.55 * this.aOW))
	}, this.aOe = function(f0, eR, eT) {
		var kD = bS.max[this.o2],
			xr = (qw.setTransform(1, 0, 0, 1, eR + 2 * this.qF + this.aOT, eT + this.a38 + this.aOW), qw.lineWidth = 2, this.a9F / Math.sqrt(kD));
		qw.beginPath(), qw.moveTo(this.aOU, this.a9F - xr * Math.sqrt(f0[bS.aIP - 1]));
		for (var z = bS.aIP - 2; 0 <= z; z--) qw.lineTo(z * this.aOU / (bS.aIP - 1), this.a9F - xr * Math.sqrt(f0[z]));
		qw.stroke();
		eR = this.a0n(f0, xr, .5);
		eR < .95 && qw.fillText(b1.w8.zC(kD), -this.qF, 0), .05 < Math.abs(eR - .5) && qw.fillText(b1.w8.zC(Math.floor(kD / 4)), -this.qF, Math.floor(this.a9F / 2)), .05 < eR && qw.fillText("0", -this.qF, this.a9F)
	}, this.aOf = function(eR, eT) {
		qw.setTransform(1, 0, 0, 1, eR + 2 * this.qF + this.aOT, eT + this.a38 + this.aOW), qw.lineWidth = 2;
		var xr = this.a9F / Math.max(bS.max[this.o2], 1);
		qw.beginPath(), qw.moveTo(this.aOU, this.a9F - xr * bS.a5o[bS.aIP - 1]);
		for (var z = bS.aIP - 2; 0 <= z; z--) qw.lineTo(z * this.aOU / (bS.aIP - 1), this.a9F - xr * bS.a5o[z]);
		qw.stroke();
		eR = this.a0n(bS.a5o, xr, 1), eT = bS.max[this.o2] / 100;
		eR < .95 && qw.fillText(b1.w8.zH(eT, 2), -this.qF, 0), .05 < Math.abs(eR - .5) && qw.fillText(b1.w8.zH(eT / 2, 2), -this.qF, Math.floor(this.a9F / 2)), .05 < eR && qw.fillText(b1.w8.zH(0, 2), -this.qF, this.a9F)
	}, this.aOg = function(eR, eT) {
		qw.setTransform(1, 0, 0, 1, eR + .34 * this.t, eT + 2 * aOV + this.aOW), b1.p1.textAlign(qw, 2);
		for (var a5C = this.iw - 4 * aOV - this.a9U - this.aOW, f0 = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], z = 9; 0 <= z; z--) qw.fillText(b1.tc.yL(bS.aOO[f0[z]], 0, .31 * this.t), 0, z * a5C / 9);
		var en = bS.lG;
		for (qw.setTransform(1, 0, 0, 1, eR + .39 * this.t, eT + 2 * aOV + this.aOW), b1.p1.textAlign(qw, 0), qw.fillText(b1.w8.zH(100 * en[0] / (1024 * Math.max(en[1], 1)), 1), 0, 0), z = 8; 1 <= z; z--) qw.fillText(en[f0[z]].toString(), 0, z *
			a5C / 9);
		qw.fillText(b1.w8.zH(100 * (1 - aU.g9[a1.e4] / en[7]), 0), 0, a5C)
	}, this.aOh = function(eR, eT) {
		qw.setTransform(1, 0, 0, 1, eR + .79 * this.t, eT + 2 * aOV + this.aOW), b1.p1.textAlign(qw, 2);
		var z, a5C = this.iw - 4 * aOV - this.a9U - this.aOW;
		for (qw.fillStyle = p.mb, z = 2; 0 <= z; z--) qw.fillText(b1.tc.yL(bS.aOO[z + 8], 0, .31 * this.t), 0, z * a5C / 9);
		qw.fillText(b1.tc.yL(bS.aOO[18], 0, .31 * this.t), 0, 3 * a5C / 9), qw.fillStyle = p.ma, qw.fillText(b1.tc.yL(bS.aOO[11], 0, .31 * this.t), 0, 4 * a5C / 9), qw.fillStyle = p.mq, qw.fillText(b1.tc.yL(bS.aOO[13], 0, .31 * this.t), 0, 5 *
				a5C / 9), qw.fillText(b1.tc.yL(bS.aOO[15], 0, .31 * this.t), 0, 6 * a5C / 9), qw.fillText(b1.tc.yL(bS.aOO[16], 0, .31 * this.t), 0, 7 * a5C / 9), qw.fillText(b1.tc.yL(bS.aOO[12], 0, .31 * this.t), 0, 8 * a5C / 9), qw.fillStyle = p
			.mp, qw.fillText(b1.tc.yL(bS.aOO[17], 0, .31 * this.t), 0, a5C), qw.fillStyle = p.mb;
		var en = bS.lG,
			aHu = en[8] + en[9] + en[10] + en[18],
			aHu = b1.w8.zC(aHu),
			aGu = qw.measureText(aHu).width,
			eR = (qw.setTransform(1, 0, 0, 1, eR + .83 * this.t + aGu, eT + 2 * aOV + this.aOW), qw.fillText(b1.w8.zC(en[8]), 0, 0), qw.fillText(b1.w8.zC(en[9]), 0, a5C / 9), qw.fillText(b1.w8.zC(en[10]), 0, 2 * a5C / 9), qw.fillText(b1.w8.zC(en[
				18]), 0, 3 * a5C / 9), qw.fillStyle = p.ma, qw.fillText(aHu, 0, 4 * a5C / 9), qw.fillStyle = p.mq, qw.fillText(b1.w8.zC(en[13]), 0, 5 * a5C / 9), qw.fillText(b1.w8.zC(en[15]), 0, 6 * a5C / 9), qw.fillText(b1.w8.zC(en[16]), 0,
				7 * a5C / 9), qw.fillText(b1.w8.zC(en[12]), 0, 8 * a5C / 9), en[12] + en[13] + en[15] + en[16]);
		qw.fillStyle = p.mp, qw.fillText(b1.w8.zC(eR), 0, a5C), qw.fillStyle = p.mN
	}, this.a0n = function(f0, xr, a3z) {
		var z, d, f1;
		return this.aOZ < 0 || 1 < this.aOZ ? .25 : (z = this.aOZ * (bS.aIP - 1), f1 = f0[d = Math.floor(z)], f1 += (z - d) * (f0[d < bS.aIP - 1 ? d + 1 : d] - f1), qw.strokeStyle = p.mQ, .04 < this.aOZ && this.aOj(0, this.a9F - xr * Math.pow(f1,
				a3z), z * this.aOU / (bS.aIP - 1), this.a9F - xr * Math.pow(f1, a3z)), .04 < f1 / bS.max[this.o2] && this.aOj(z * this.aOU / (bS.aIP - 1), this.a9F, z * this.aOU / (bS.aIP - 1), this.a9F - xr * Math.pow(f1, a3z)), qw
			.fillStyle = p.ms, qw.beginPath(), qw.arc(z * this.aOU / (bS.aIP - 1), this.a9F - xr * Math.pow(f1, a3z), Math.max(2, .014 * this.iw), 0, 2 * Math.PI), qw.fill(), f0 = this.aOZ * bU.a5q, f0 = 0 === aU.lK[a1.e4] ? Math.floor(f0 *
				bS.aON) : Math.floor(f0 * bU.jP()), qw.fillStyle = p.mN, qw.fillText(1 === a3z ? b1.w8.zH(f1 / 100, 2) : b1.w8.zC(Math.floor(f1)), -this.qF, this.a9F - xr * Math.pow(f1, a3z)), b1.p1.textAlign(qw, 1), qw.fillText(aJ.a5f(f0),
				z * this.aOU / (bS.aIP - 1), this.a9F + this.aOX - (m.n.uM() ? 2 : 0) - this.a2X), b1.p1.textAlign(qw, 2), xr * Math.pow(f1, a3z) / this.a9F)
	}, this.aOj = function(lm, ln, m0, m1) {
		qw.beginPath(), qw.moveTo(lm, ln), qw.lineTo(m0, m1), qw.stroke()
	}
}

function bh() {
	this.aOk = "https://", this.aOl = this.aOk + "territorial.io/", this.aIQ = this.aOl + "changelog", this.aIU = this.aOl + "terms", this.aOm = this.aOl + "cookie_policy", this.aHz = this.aOl + "privacy", this.aIT = this.aOl + "tutorial", this.aIS =
		this.aOl + "players", this.aIR = this.aOl + "clans", this.wF = this.aOl + "clan-results", this.a71 = this.aOk + "play.google.com/store/apps/details?id=territorial.io", this.wT = this.aOk + "apps.apple.com/app/id1581110913", this.aOn = this
		.aOk + "www.youtube.com/watch?v=toZTQ8aRdFc", this.a72 = this.aOk + "discord.gg/pthqvpTXmh", this.a73 = this.aOk + "www.instagram.com/davidtschacher/", this.uF =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function cs() {
	this.ky = new aOo, this.tZ = new aOp, this.dI = function() {
		this.ky.dI()
	}, this.iH = function() {
		0 !== this.ky.a1s && this.ky.a1s--
	}
}

function aOp() {
	this.qv = function() {
		if (0 !== bE.ky.a1s && (qw.globalAlpha = Math.min(bE.ky.a1s / 580, 1), qw.drawImage(bE.ky.aOs, 1 + aF.tX(), 1 + aF.tY()), qw.globalAlpha = 1, a1.gh)) {
			for (var lm = hk / hl, ln = hm / hl, m0 = (am.t + hk) / hl, m1 = (am.iw + hm) / hl, fs = bE.ky.aOt * hl, aOu = bE.ky.aOu, z = a1.jS - 1; 0 <= z; z--) ! function(z, fs, lm, ln, m0, m1, aOu) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[z];
				if (highlight) fs *= 2;
				0 === aU.lK[z] || 0 === aU.g9[z] || (m0 = am.t * ((aU.hy[z] + aU.hz[z] + 1) / 2 - lm) / (m0 - lm) - .5 * fs, lm = am.iw * ((aU.i0[z] + aU.i1[z] + 1) / 2 - ln) / (m1 - ln) - .5 * fs, m0 > am.t) || lm > am.iw || m0 < -fs || lm <
					-fs || (qw.setTransform(highlight ? hl * 2 : hl, 0, 0, highlight ? hl * 2 : hl, m0, lm), qw.drawImage(aOu[a1.iS ? bV.eI[z] : 1], 0, 0))
			}(z, fs, lm, ln, m0, m1, aOu);
			qw.setTransform(hl, 0, 0, hl, 0, 0)
		}
	}
}

function aOo() {
	this.aOt = 28, this.a1s = 0, this.aOs = null;
	var aOw = this.aOu = null;

	function aOz(gy, aP0) {
		var eR, eT, e6, hV, y9 = b1.p1.sN(gy, gy),
			h5 = b1.p1.getContext(y9, !0),
			h1 = b1.p1.getImageData(h5, gy, gy),
			sY = h1.data,
			kD = (gy >> 1) - .5,
			aP1 = .5 + kD;
		for (aP1 *= aP1, eT = 0; eT < gy; eT++)
			for (eR = 0; eR < gy; eR++) hV = (hV = eR - kD) * hV + (hV = eT - kD) * hV, sY[e6 = 4 * (eT * gy + eR)] = aP0[0], sY[1 + e6] = aP0[1], sY[2 + e6] = aP0[2], sY[3 + e6] = (aP1 - hV) * aP0[3] / aP1;
		return h5.putImageData(h1, 0, 0), y9
	}

	function aOB(z, h5, y9, gy) {
		var eR, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[z];
		if (highlight) gy *= 2;
		0 !== aU.lK[z] && 0 !== aU.g9[z] && (eR = aU.hy[z] + aU.hz[z] + 1 - gy - 2 >> 1, y = aU.i0[z] + aU.i1[z] + 1 - gy - 2 >> 1,
			highlight ? h5.drawImage(y9[a1.iS ? bV.eI[z] : z < a1.jS ? 1 : 0], eR, y, gy, gy) :
			h5.drawImage(y9[a1.iS ? bV.eI[z] : z < a1.jS ? 1 : 0], eR, y))
	}
	this.dI = function() {
		var vp;
		this.a1s = 700,
			function(vp) {
				var gy = vp.aOt;
				if (vp.aOu = [], aOw = [], a1.iS)
					for (var z = 0; z <= a1.za; z++) vp.aOu.push(aOz(gy, bV.aN5[bV.vc[z]])), aOw.push(aOz(gy >> 1, bV.aN5[bV.vc[z]]));
				else vp.aOu.push(aOz(gy, bV.aN5[0])), vp.aOu.push(aOz(gy, bV.aN5[4])), aOw.push(aOz(gy >> 1, bV.aN5[0]))
			}(this),
			function(vp, aP2) {
				var z, aOs = vp.aOs,
					h5 = b1.p1.getContext(aOs, !0),
					eK = a1.eH,
					gy = vp.aOt >> 1;
				h5.imageSmoothingEnabled = !1, h5.setTransform(1, 0, 0, 1, 0, 0), aP2 && h5.clearRect(0, 0, aOs.width, aOs.height);
				for (z = a1.jS; z < eK; z++) aOB(z, h5, aOw, gy)
			}(this, null !== (vp = this).aOs && vp.aOs.width === bH.eV - 2 && vp.aOs.height === bH.eW - 2 || (vp.aOs = b1.p1.sN(bH.eV - 2, bH.eW - 2), !1)), a1.gh || this.zV()
	}, this.aN4 = aOz, this.zV = function() {
		for (var eK = a1.jS, gy = this.aOt, aOu = this.aOu, h5 = b1.p1.getContext(this.aOs, !0), z = 0; z < eK; z++) aOB(z, h5, aOu, gy)
	}
}

function ct() {
	function aP3(player) {
		a1.gh ? (aY.aAT(player), aZ.aDG(), a1.js && a1.oJ.iH()) : at.aDE(player)
	}
	this.ni = function(player) {
		return !!a9.a0m(player) && (aA.vT(player, player === a1.e4 ? 21 : 22), aP3(player), !0)
	}, this.oG = function(player) {
		1 === a1.vH && 0 !== aU.lK[player] && 2 !== aU.yf[player] && aP3(player), a1.vK--, a1.vJ--, aA.vT(player, 4), b1.ff.gX(2) && aJ.l6(!0)
	}
}

function d3() {
	this.a8k = ["rgba(130,130,130,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a5A = [p
		.mN, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", p.mN, "rgb(170,170,170)"
	], this.aP4 = [p.mN, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", p.mN, p.mE], this.aP5 = [p.mE, p.mN, p.mN, p.mN, p.mE, p.mE, p.mE, p.mE, p.mN];
	var aP6 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aP7 = (this.aCn = ["rgba(" + aP6[0] + ",", "rgba(" + aP6[1] + ",", "rgba(" + aP6[2] + ",", "rgba(" + aP6[3] + ",", "rgba(" + aP6[4] + ",", "rgba(" + aP6[5] + ",", "rgba(" + aP6[6] + ",", "rgba(" + aP6[7] + ",", "rgba(" + aP6[8] + ",",
			"rgba(" + aP6[9] + ","
		], this.aCo = ["rgb(" + aP6[0] + ")", "rgb(" + aP6[1] + ")", "rgb(" + aP6[2] + ")", "rgb(" + aP6[3] + ")", "rgb(" + aP6[4] + ")", "rgb(" + aP6[5] + ")", "rgb(" + aP6[6] + ")", "rgb(" + aP6[7] + ")", "rgb(" + aP6[8] + ")", "rgb(" + aP6[
			9] + ")"
		], this.ve = null, this.aN5 = [
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
	this.vc = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eI = new Uint8Array(a1.eH), this.w4 = null, this.aP8 = null, this.dJ = function() {
		this.ve = [L(362), L(363), L(364), L(365), L(366), L(367), L(368), L(362), L(369)]
	}, this.dI = function(tj) {
		this.eI.fill(0), this.aP9(), a1.iS && (ax.jm && ax.jn.aBE ? this.aA6() : 9 === a1.jq ? this.aPA() : this.iH(tj))
	}, this.aA6 = function() {
		var z, eK = a1.t1;
		for (this.vc = [0, 1, 2, 3, 4, 5, 6, 7, 8], z = 0; z < eK; z++) this.eI[z] = ax.jn.aBE[z]
	}, this.aP9 = function() {
		for (var z = this.vc.length - 1; 0 <= z; z--) this.vc[z] = z;
		this.w4 = [], this.aP8 = []
	}, this.aPA = function() {
		for (var z = a1.jS + ao.aD6 - 1; 0 <= z; z--) this.eI[z] = 1;
		for (z = a1.jS + ao.aD6; z < a1.eH; z++) this.eI[z] = 2;
		this.vc[1] = 7, this.vc[2] = 8
	}, this.iH = function(tj) {
		var hE = new Uint8Array(a1.jS),
			hF = new Uint8Array(a1.jS),
			aPB = new Uint16Array(8),
			aPC = new Uint16Array(this.vc.length);
		this.aPD(tj, hE, hF, aPB), this.aA4(aPB), a1.js || this.aPE(aPC, hE, hF), this.aPF(hE, hF, aPC), a1.js ? this.aPG() : this.aPH()
	}, this.aPD = function(tj, hE, hF, aPI) {
		for (var ee, d, aPJ, eK = this.vc.length - 1, f0 = new Uint16Array(eK), z = a1.jS - 1; 0 <= z; z--) {
			for (ee = eK; 1 <= ee; ee--) f0[ee - 1] = Math.abs(4 * tj[z].a9Q[0] - aP7[ee][0]) + Math.abs(4 * tj[z].a9Q[1] - aP7[ee][1]) + Math.abs(4 * tj[z].a9Q[2] - aP7[ee][2]);
			for (aPJ = 768, ee = eK - 1; 0 <= ee; ee--) f0[d = (ee + z) % eK] < aPJ && (aPJ = f0[d], hE[z] = d);
			for (aPI[hE[z]] += 4, aPJ = 768, ee = eK - 1; 0 <= ee; ee--) f0[d = (ee + z) % eK] < aPJ && d !== hE[z] && (aPJ = f0[d], hF[z] = d);
			aPI[hF[z]]++
		}
	}, this.aA4 = function(aPI) {
		for (var ee, kF, eK = this.vc.length - 1, z = eK; 0 <= z; z--) this.vc[z] = z;
		for (z = eK - 1; 0 <= z; z--) aPI[z]++;
		for (z = 1; z <= eK; z++) {
			for (kF = 0, ee = 1; ee < eK; ee++) aPI[ee] > aPI[kF] && (kF = ee);
			aPI[kF] = 0, this.vc[z] = kF + 1
		}
	}, this.aPE = function(aPC, hE, hF) {
		var z, ee, aJw, ef, eN, d, ly, qT, aPK = this.vc.length - 1,
			pT = new Uint16Array(aPK),
			aPL = [],
			a38 = Math.max(a1.jS + 1 >> 1, 6);
		loop: for (z = 0; z < a1.jS; z++)
			if (null !== (aJw = b1.w8.w9(aU.wA[z]))) {
				for (ee = this.w4.length - 1; 0 <= ee; ee--)
					if (aJw === this.w4[ee] && this.aP8[ee].length < a38) {
						this.aP8[ee].push(z);
						continue loop
					} this.w4.push(aJw), aPL.push(!1), this.aP8.push([z])
			}
		for (ee = this.w4.length - 1; 0 <= ee; ee--) {
			for (eN = -1, ef = this.w4.length - 1; 0 <= ef; ef--) !aPL[ef] && (-1 === eN || this.aP8[ef].length > this.aP8[eN].length) && (eN = ef);
			for (ef = aPK - 1; 0 <= ef; ef--) pT[ef] = 1;
			for (ef = this.aP8[eN].length - 1; 0 <= ef; ef--) pT[hE[this.aP8[eN][ef]]] += 3, pT[hF[this.aP8[eN][ef]]]++;
			for (z = aPK - 1; 0 <= z; z--) {
				for (d = eN % aPK, ef = aPK - 1; 0 <= ef; ef--) pT[ef] > pT[d] && (d = ef);
				for (ly = -1, ef = a1.za; 0 < ef; ef--)
					if (this.vc[ef] === d + 1) {
						ly = ef;
						break
					} if (pT[d] = 0, -1 !== ly) {
					for (qT = 0, ef = a1.za; 0 < ef; ef--) aPC[ly] > aPC[ef] && qT++;
					if (qT !== a1.za - 1) {
						for (ef = this.aP8[eN].length - 1; 0 <= ef; ef--) aPC[ly]++, this.eI[this.aP8[eN][ef]] = ly;
						break
					}
				}
			}
			aPL[eN] = !0
		}
	}, this.aPF = function(hE, hF, aPC) {
		for (var z, hU, eK = this.vc.length - 1, border = bA.em(a1.jS, a1.za), aPM = (0 < a1.jS % a1.za && border++, new Uint8Array(1 + eK)), ee = eK; 1 <= ee; ee--) aPM[this.vc[ee]] = ee;
		for (z = 0; z < a1.jS; z++) hU = aPM[hE[z] + 1], 0 === this.eI[z] && hU <= a1.za && aPC[hU] < border && (aPC[hU]++, this.eI[z] = hU);
		for (z = 0; z < a1.jS; z++) hU = aPM[hF[z] + 1], 0 === this.eI[z] && hU <= a1.za && aPC[hU] < border && (aPC[hU]++, this.eI[z] = hU);
		for (ee = a1.za; 1 <= ee; ee--)
			for (z = a1.jS - 1; 0 <= z && !(aPC[ee] >= border); z--) 0 === this.eI[z] && (aPC[ee]++, this.eI[z] = ee)
	}, this.aPG = function() {
		var z, ed, aPI = new Uint16Array(a1.za);
		for (aPI[a1.za - 1] = a1.eH, z = a1.za - 2; 0 <= z; z--) aPI[z] = aO.ju[z].fm;
		for (aPI[0]--, ed = 0 === aPI[0] ? 1 : 0, z = a1.jS; z < a1.eH; z++) this.eI[z] = ed + 1, aPI[ed]--, aPI[ed] <= 0 && ed++
	}, this.aPH = function() {
		for (var z = a1.jS; z < a1.eH; z++) this.eI[z] = 1 + z % a1.za
	}
}

function gA() {
	for (var eR, eT, z = fE - 1; 0 <= z; z--) eR = bA.em(fG[z], 4) % bH.eV, eT = bA.em(fG[z], 4 * bH.eV), aU.hy[f9] = aU.hy[f9] > eR ? eR : aU.hy[f9], aU.i0[f9] = aU.i0[f9] > eT ? eT : aU.i0[f9], aU.hz[f9] = aU.hz[f9] < eR ? eR : aU.hz[f9], aU.i1[
		f9] = aU.i1[f9] < eT ? eT : aU.i1[f9]
}

function fT() {
	var eN, fr, z, eK = aU.fl[f9].length,
		eM = aQ.eM;
	loop: for (z = eK - 1; 0 <= z; z--) {
		for (eN = 3; 0 <= eN; eN--)
			if (fr = aU.fl[f9][z] + eM[eN], aQ.eB(fr) || aQ.ft(fr) && aQ.eC(fr) !== f9) {
				aQ.ic(aU.fl[f9][z], f9);
				continue loop
			} aU.fl[f9][z] = aU.fl[f9][eK - 1], aU.fl[f9].pop(), eK--
	}
}

function fU() {
	var player = f9,
		fz = aU.fz,
		g0 = aU.g0,
		ek = aU.ek,
		eK = fz[player].length,
		eM = aQ.eM;
	loop: for (var z = eK - 1; 0 <= z; z--) {
		for (var aPN = !1, aPO = !1, eN = 3; 0 <= eN; eN--) {
			var fr = fz[player][z] + eM[eN];
			if (aQ.aAG(fr, player)) continue loop;
			aPN = aPN || aQ.go(fr), aPO = aPO || aQ.aAF(fr)
		}
		aPN ? g0[player].push(fz[player][z]) : aPO ? ek[player].push(fz[player][z]) : aQ.tK(fz[player][z], player), fz[player][z] = fz[player][eK - 1], fz[player].pop(), eK--
	}
}

function fx() {
	aU.g9[fD] -= fE
}

function fy(border) {
	for (var eK = border.length, z = eK - 1; 0 <= z; z--) aQ.tS(fD, border[z]) || (border[z] = border[eK - 1], border.pop(), eK--)
}

function g3(border) {
	for (var eK = border.length, z = eK - 1; 0 <= z; z--) !aQ.tS(fD, border[z]) && aQ.eF(border[z]) && (border[z] = border[eK - 1], border.pop(), eK--)
}

function g4(border) {
	for (var eN, fr, eK = border.length, eM = aQ.eM, z = eK - 1; 0 <= z; z--)
		for (eN = 3; 0 <= eN; eN--)
			if (fr = border[z] + eM[eN], aQ.aAG(fr, fD)) {
				aU.fz[fD].push(border[z]), border[z] = border[eK - 1], border.pop(), eK--;
				break
			}
}

function g5() {
	for (var eN, fr, eM = aQ.eM, z = fE - 1; 0 <= z; z--)
		for (eN = 3; 0 <= eN; eN--) fr = fG[z] + eM[eN], aQ.aAH(fD, fr) && aQ.aAI(fr) && (aU.fz[fD].push(fr), aQ.fo(fr, fD))
}

function g6() {
	var eR, eT;
	loop: for (; aU.i0[fD] < aU.i1[fD];) {
		for (eR = aU.hz[fD]; eR >= aU.hy[fD]; eR--)
			if (aQ.tS(fD, 4 * (aU.i0[fD] * bH.eV + eR))) break loop;
		aU.i0[fD]++
	}
	loop: for (; aU.i0[fD] < aU.i1[fD];) {
		for (eR = aU.hz[fD]; eR >= aU.hy[fD]; eR--)
			if (aQ.tS(fD, 4 * (aU.i1[fD] * bH.eV + eR))) break loop;
		aU.i1[fD]--
	}
	loop: for (; aU.hy[fD] < aU.hz[fD];) {
		for (eT = aU.i1[fD]; eT >= aU.i0[fD]; eT--)
			if (aQ.tS(fD, 4 * (eT * bH.eV + aU.hy[fD]))) break loop;
		aU.hy[fD]++
	}
	loop: for (; aU.hy[fD] < aU.hz[fD];) {
		for (eT = aU.i1[fD]; eT >= aU.i0[fD]; eT--)
			if (aQ.tS(fD, 4 * (eT * bH.eV + aU.hz[fD]))) break loop;
		aU.hz[fD]--
	}
}

function eD(player, iY) {
	return 0 === bV.eI[player] || bV.eI[player] !== bV.eI[iY]
}

function gu(player, iY) {
	for (var d, aPP = aR.fP(player), z = 0; z < aPP; z++)
		if (0 === aR.fQ(player, z))
			if ((d = aR.fV(player, z)) === a1.eH) {
				if (iY === a1.eH) return !1;
				if (gs(iY)) return !0
			} else if (b1.ff.kI(d))
		if (iY === a1.eH) {
			if (gs(d)) return !0
		} else if (gw(iY, d)) return !0;
	return !1
}

function gs(player) {
	for (var z, fs, eK = aU.fz[player].length, eM = aQ.eM, eN = 3; 0 <= eN; eN--)
		for (fs = eM[eN], z = 0; z < eK; z++)
			if (aQ.eB(aU.fz[player][z] + fs)) return !0;
	return !1
}

function aAP(player) {
	for (var z, fs, eK = aU.fz[player].length, eM = aQ.eM, eN = 3; 0 <= eN; eN--)
		for (fs = eM[eN], z = 0; z < eK; z++)
			if (aQ.ib(aU.fz[player][z]) && aQ.eB(aU.fz[player][z] + fs)) return !0;
	return !1
}

function gw(yi, yj) {
	for (var z, dv, fs, fr, aNG = aU.fz[yi].length, aNH = aU.fz[yj].length, eM = (aNH < aNG && (dv = yi, yi = yj, yj = dv, dv = aNG, aNG = aNH, 0), aQ.eM), eN = 3; 0 <= eN; eN--)
		for (fs = eM[eN], z = 0; z < aNG; z++)
			if (fr = aU.fz[yi][z] + fs, aQ.ft(fr) && aQ.eC(fr) === yj) return !0;
	return !1
}

function aAQ(yi, yj) {
	for (var z, fs, fr, aNG = aU.fz[yi].length, eM = aQ.eM, eN = 3; 0 <= eN; eN--)
		for (fs = eM[eN], z = 0; z < aNG; z++)
			if (aQ.ib(aU.fz[yi][z]) && (fr = aU.fz[yi][z] + fs, aQ.ft(fr)) && aQ.eC(fr) === yj) return !0;
	return !1
}

function dG() {
	this.oT = new aPQ
}

function aPQ() {
	this.gr = function(player) {
		b1.ff.yg(player) && aA.vg(80, L(370), 637, 0, p.n1, p.mK, -1, !1)
	}, this.a0O = function() {
		aA.vg(80, L(371), 637, 0, p.n1, p.mK, -1, !1)
	}, this.nW = function(player) {
		b1.ff.yg(player) && aA.vg(80, L(372), 637, 0, p.n1, p.mK, -1, !1)
	}
}

function aPR() {
	this.aPS = 0, this.iH = function() {
		aB.iH(), aM.iH(), am.iH(), ap.ky.iH(), al.a8F(), bU.dQ && (bU.dQ = !1, aN.qv())
	}
}

function aPT() {
	this.du = bU.du, this.o2 = 0, this.aPS = 0, this.a8A = 0, this.aPU = null, this.aPV = 7, this.a1t = 0, this.dI = function() {
		this.a8A = 0, this.aPU = [], this.o2 = 0, this.aPS = 0
	}, this.aJe = function(a0) {
		var z;
		if (a1.gh) this.a5r(a0);
		else if (this.aPU.push(a0), 2 === a1.vH) {
			for (z = 0; z < this.aPU.length; z++) az.nL.iH(this.aPU[z]);
			this.aPU = []
		}
	}, this.a5r = function(a0) {
		az.nL.iH(a0), b0.iH(), aJ.a5r(this.a8A), this.a8A === a1.zb ? (a1.oJ.iH(), this.a8A = 0, this.o2 = 0, this.aPS = 0, this.du = bU.du) : (this.a8A++, aT.zU(), aT.l6(!0), bQ.a6O())
	}, this.iH = function() {
		am.iH(), a1.gh ? (bU.dQ = aJ.a5r(-1) || bU.dQ, l8()) : (0 !== this.o2 || bU.du >= this.du && (this.du += bU.a5q * Math.floor(1 + (bU.du - this.du) / bU.a5q), 2 === a1.vH ? kw() : this.aPW(), this.o2++, 27 < bU.du - this.a1t)) && this
		.aPX(), l3(), bU.dQ && (bU.dQ = !1, tV()), this.a1t = bU.du
	}, this.aPX = function() {
		bU.dQ = !0, l5(), this.o2 = 0
	}, this.aPW = function() {
		var rS, z;
		if (this.aPS !== 7 * this.a8A) kz(), bQ.a6O();
		else {
			rS = !1;
			loop: for (; this.aPY() && (rS = !0, kz(), 2 !== a1.vH) && 0 < this.aPU.length;)
				for (z = this.aPV - 2; 0 <= z; z--)
					if (kz(), 2 === a1.vH) break loop;
			rS ? bQ.a6O() : (kw(), bQ.zX())
		}
	}, this.aPY = function() {
		return 0 < this.aPU.length && (this.a8A++, az.nL.iH(this.aPU[0]), this.aPU.shift(), !0)
	}
}

function aPZ() {
	var aPa, aPb, aPc, a8A, aPd, o2 = 0,
		du = bU.du;

	function aPg() {
		! function() {
			if (!a1.gh) return;
			if (a1.js) return;
			if (aPd % 7 != 0) aPd++;
			else if (a8A === a1.zb) {
				if (!aPj()) return;
				aJ.a5r(a8A), a1.oJ.iH()
			} else {
				if (!aPj()) return;
				aPd++, a8A++, aT.zU(), aT.l6(!0)
			}
			return 1
		}() && aPj() && kz()
	}

	function aPh() {
		o2 = 0, (a1.gh ? (bU.dQ = aJ.a5r(a8A - (aPd % 7 == 0 ? 0 : 1) + aPd % 7 / 7) || bU.dQ, l8) : a9.gW || !b2.zw ? l8 : (bU.dQ = !0, l5))()
	}

	function aPj() {
		var z, eK, aPk = b0.oH.aKj,
			f1 = b0.oH.aKk,
			f3 = b0.oH.aKl,
			f5 = b0.oH.aKm,
			aPl = b0.oH.aKn,
			aPm = b0.oH.aKo;
		if (!(aPa >= aPm.length)) {
			if (aPm = aPm[aPa], aPl[aPa]) {
				for (eK = aPb + aPm, z = aPb; z < eK; z++) az.nL.o4(aPk[z], f1[z], f3[z], f5[z]);
				aPb += aPm, aPa++
			} else ++aPc >= aPm && (aPa++, aPc = 0);
			return 1
		}
		aA.wc("Replay file smaller than expected."), b2.xX(!1), a1.vH = 2
	}
	this.aPS = 0, this.dI = function() {
		aPd = a8A = aPc = aPb = aPa = 0
	}, this.iH = function() {
		var aNd;
		am.iH(), b2.a3K() < 1.7 ? 0 === o2 ? bU.du >= du && (aNd = bU.a5q / b2.a3K(), du += aNd * Math.floor(1 + (bU.du - du) / aNd), 2 === a1.vH || a9.gW || !b2.zw ? kw() : (aPg(), bQ.a6O()), o2++) : aPh() : function() {
			var aNd;
			if (bU.du >= du)
				if (2 === a1.vH || a9.gW || !b2.zw) kw(), du = bU.du;
				else {
					for (aNd = bU.a5q / b2.a3K(), 16 < (bU.du - du) / aNd && (du = bU.du - 16 * aNd); bU.du >= du && 2 !== a1.vH;) du += aNd, aPg();
					bQ.a6O()
				} aPh()
		}(), l3(), bU.dQ && (bU.dQ = !1, tV())
	}, this.vR = function() {
		aPa !== b0.oH.aKo.length && aPa + 1 !== b0.oH.aKo.length && aA.wc("Replay file larger than expected.")
	}
}

function aPn() {
	var o2 = 0,
		du = bU.du;
	this.aPS = 0, this.iH = function() {
		am.iH(), a1.gh ? l8() : 0 === o2 ? bU.du >= du && (du += bU.a5q * Math.floor(1 + (bU.du - du) / bU.a5q), 2 === a1.vH || a9.gW ? kw() : (kz(), bQ.a6O()), o2++) : ((a9.gW ? l8 : (bU.dQ = !0, l5))(), o2 = 0), l3(), bU.dQ && (bU.dQ = !1,
		tV())
	}
}

function dB() {
	this.vQ = null, this.dQ = !1, this.du = 0, this.a5q = 56;
	var aPo = 0;

	function aPp() {
		bU.du = aPo = performance.now(), bU.vQ.iH(), window.requestAnimationFrame(aPp)
	}
	this.dI = function() {
		this.zu(), window.requestAnimationFrame(aPp), this.du = performance.now()
	}, this.zn = function() {
		a1.gV ? (this.vQ = new aPZ, this.vQ.dI()) : a1.js ? this.vQ = new aPn : (this.vQ = new aPT, this.vQ.dI())
	}, this.zu = function() {
		this.vQ = new aPR, this.dQ = !0
	}, this.iH = function() {
		this.vQ.aPS++
	}, this.jP = function() {
		return this.vQ.aPS
	}, this.aJM = function() {
		var dv = performance.now();
		dv < aPo + 1e3 || (this.du = dv, this.vQ.iH())
	}
}

function cd() {
	var lX = 0,
		aPq = !0;

	function aPs(oj) {
		8 !== aN.wY() || 2 !== aU.yf[a1.e4] && (0 !== aU.lK[a1.e4] || a1.gh) || aA.a1a(oj)
	}
	this.iH = function() {
		var dv, a1w;
		bU.du > lX && (lX = bU.du + 2500, dv = new Date, a1w = dv.getUTCSeconds(), aPq ? a1w < 45 && (aPq = !1) : a1w < 45 || (aPq = !0, (a1w = dv.getUTCMinutes() + 1) % 15 == 0 && aPs(30 === a1w ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cV() {
	var lm, ln, m0, m1, aPt = 0,
		aPu = 0;

	function aPw() {
		return Math.pow(Math.pow(m0 - lm, 2) + Math.pow(m1 - ln, 2), .5)
	}

	function aPv(d) {
		lm = am.p7 * d.touches[0].clientX, ln = am.p7 * d.touches[0].clientY, m0 = am.p7 * d.touches[1].clientX, m1 = am.p7 * d.touches[1].clientY
	}
	this.wy = function(d) {
		return 1 < d.touches.length ? (aPu = bU.du, aPt = 3, aPv(d), a8.qS(), !0) : (aPt = 0, !1)
	}, this.wz = function(d) {
		var aDw, hS, hT;
		return 0 !== a1.vH && 1 < d.touches.length && (aPt = Math.max(aPt - 1, 0), a5.m5() && (aDw = aPw(), aPv(d), d = aPw(), hS = Math.floor((lm + m0) / 2), hT = Math.floor((ln + m1) / 2), aF.a3k(hS, hT, Math.max(.125, d) / Math.max(.125,
			aDw)), bU.dQ = !0), !0)
	}, this.xN = function() {
		var eR, eT;
		return !!(aPt && (aPt = 0, bU.du < aPu + 500)) && (eR = (lm + m0) / 2, eT = (ln + m1) / 2, a8.xG(eR, eT), a8.click(eR, eT, !0) && (bU.dQ = !0), !0)
	}
}

function cm() {
	this.size = 0, this.o2 = 0, this.a0 = null, this.dI = function(a0) {
		this.o2 = 0, this.a0 = a0, this.size = a0.length
	}, this.wk = function() {
		this.a0 = null
	}, this.o3 = function(size) {
		for (var en = 0, a0 = this.a0, m5 = this.o2 + size - 1, z = this.o2; z <= m5; z++) en |= (a0[z >> 3] >> 7 - (7 & z) & 1) << m5 - z;
		return this.o2 += size, this.o2 > 8 * this.size && console.log("error unwrapper"), en
	}, this.aJs = function(size) {
		var ee = size >> 1;
		return (1 << ee) * this.o3(size - ee) + this.o3(ee)
	}, this.aPx = function(size) {
		for (var f0 = new Array(size), z = 0; z < size; z++) f0[z] = this.o3(10);
		return a7.sI(f0)
	}, this.aJr = function(aL9) {
		return this.size === b3.aJl(aL9)
	}
}

function d5() {
	this.aLq = 0, this.aLr = 0, this.aLm = 0, this.aLn = 0, this.aLo = 0, this.aLp = 0, this.a6P = [0, 0, 0, 0], this.m4 = function() {
		this.aLq = aF.tX(), this.aLr = aF.tY(), this.aLm = -this.aLq, this.aLn = -this.aLr, this.aLo = am.t / hl, this.aLp = am.iw / hl, this.a6P[0] = Math.floor(this.aLm), this.a6P[1] = Math.floor(this.aLn), this.a6P[2] = Math.floor(this.a6P[
			0] + this.aLo + 1), this.a6P[3] = Math.floor(this.a6P[1] + this.aLp + 1), bQ.a6M = !0
	}
}

function cW() {
	var a2T, lX;
	this.dI = function() {
		a2T = 1, lX = 0
	}, this.iH = function() {
		0 < a2T && (lX = 0 === lX ? bU.du + 16 : lX, a2T = (a2T -= .001 * (bU.du - lX)) < 0 ? 0 : a2T, lX = bU.du, bU.dQ = !0)
	}, this.qv = function() {
		0 < a2T && (qw.fillStyle = "rgba(0,0,0," + a2T + ")", qw.fillRect(0, 0, am.t, am.iw))
	}
}

function cZ() {
	function aQ0(map, eR, eT, t, iw) {
		map >= bH.aB8 || (bH.g2 === map && (qw.fillStyle = p.n0, qw.fillRect(eR, eT, t, iw), qw.fillStyle = p.mN), qw.strokeRect(eR, eT, t, iw), qw.fillText(b1.tc.yL(bH.jn.sp[map].name, 0, .9 * t), Math.floor(eR + .5 * t), Math.floor(eT + .55 * iw)))
	}
	this.tw = !1, this.a9G = [0, 0, 0, 0], this.show = function() {
		this.tw = !0, this.resize(), bU.dQ = !0
	}, this.resize = function() {
		var aNG = bA.em(bH.aB8 + bH.aB8 % 2, 2),
			aNG = am.iw - aNG * bR.gap;
		m.n.uM() ? this.a9G[2] = Math.floor(.75 * am.min) : this.a9G[2] = Math.floor(.5 * am.min), this.a9G[3] = Math.floor(1.25 * this.a9G[2]), this.a9G[3] > aNG && (this.a9G[3] = aNG, this.a9G[2] = Math.floor(aNG / 1.2)), this.a9G[0] = Math
			.floor((am.t - this.a9G[2]) / 2), this.a9G[1] = Math.floor((am.iw - this.a9G[3]) / 2)
	}, this.wu = function(eR, eT) {
		return !(eR < this.a9G[0] || eT < this.a9G[1] || eR > this.a9G[0] + this.a9G[2] || eT > this.a9G[1] + this.a9G[3])
	}, this.gZ = function(eR, eT) {
		var a38, aNG = bA.em(bH.aB8 + bH.aB8 % 2, 2);
		return bU.dQ = !0, eR < this.a9G[0] || eT < this.a9G[1] || eR > this.a9G[0] + this.a9G[2] || eT > this.a9G[1] + this.a9G[3] ? !(this.tw = !1) : (a38 = Math.floor(.17 * this.a9G[3]), eT < this.a9G[1] + a38 ? eR > this.a9G[0] + this.a9G[
			2] - a38 && (this.tw = !1) : (eT = (eT = Math.floor(aNG * (eT - this.a9G[1] - a38 - .00576 * am.p3) / (this.a9G[3] - a38 - .01152 * am.p3))) < 0 ? 0 : aNG - 1 < eT ? aNG - 1 : eT, eR > this.a9G[0] + this.a9G[2] / 2 && (eT += aNG),
				eT >= bH.aB8 || bH.v(eT, Math.floor(16384 * Math.random()))), !0)
	}, this.qv = function() {
		var z, ln, a38 = Math.floor(.17 * this.a9G[3]),
			aNG = bA.em(bH.aB8 + bH.aB8 % 2, 2),
			gap = .6 * .01152 * am.p3,
			a9U = (this.a9G[3] - a38 - (aNG + 1) * gap) / aNG,
			qF = Math.floor((this.a9G[2] - 3 * gap) / 2);
		for (qw.lineWidth = bR.uP, b1.p1.textAlign(qw, 1), b1.p1.textBaseline(qw, 1), qw.fillStyle = p.mK, qw.fillRect(this.a9G[0], this.a9G[1] + a38, this.a9G[2], this.a9G[3] - a38), qw.fillStyle = p.n0, qw.fillRect(this.a9G[0], this.a9G[1],
				this.a9G[2], a38), qw.strokeStyle = p.mN, qw.strokeRect(this.a9G[0], this.a9G[1], this.a9G[2], this.a9G[3]), qw.fillStyle = p.mN, qw.fillRect(this.a9G[0], this.a9G[1] + a38, this.a9G[2], 2), qw.font = b1.p1.qD(1, .48 * a38), qw
			.fillText(L(109), Math.floor(this.a9G[0] + this.a9G[2] / 2), Math.floor(this.a9G[1] + .55 * a38)), qw.font = b1.p1.qD(1, .48 * a9U), z = aNG - 1; 0 <= z; z--) ln = Math.floor(this.a9G[1] + a38 + gap + z * (a9U + gap)), aQ0(z, this
			.a9G[0] + gap, ln, qF, a9U), aQ0(z + aNG, this.a9G[0] + qF + 2 * gap, ln, qF, a9U);
		a9.a0n(Math.floor(this.a9G[0] + this.a9G[2] - .7 * a38), Math.floor(this.a9G[1] + .3 * a38), Math.floor(.4 * a38)), qw.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function u() {
	this.size = 0, this.o2 = 0, this.a0 = null, this.dI = function(a0) {
		this.o2 = 0, this.a0 = a0, this.size = a0.length
	}, this.v = function(aL9) {
		return this.dI(new Uint8Array(this.aJl(aL9))), this.a0
	}, this.wk = function() {
		this.a0 = null
	}, this.w = function(size, a1y) {
		for (var a0 = this.a0, m5 = this.o2 + size - 1, z = this.o2; z <= m5; z++) a0[z >> 3] |= (a1y >> m5 - z & 1) << 7 - (7 & z);
		this.o2 += size, this.o2 > 8 * this.size && console.log("error wrapper")
	}, this.aJk = function(size, a1y) {
		var ee = size >> 1,
			eN = 1 << ee;
		this.w(size - ee, bA.em(a1y, eN)), this.w(ee, a1y % eN)
	}, this.aQ1 = function(size) {
		for (var a0 = this.a0, m5 = this.o2 + size, z = this.o2; z < m5; z++) a0[z >> 3] &= 255 ^ 128 >>> (7 & z)
	}, this.aJl = function(aL9) {
		return aL9 + 7 >> 3
	}, this.aQ2 = function(f0, ii, m5, aQ3) {
		for (var z = ii; z < m5; z++) this.w(aQ3, f0[z])
	}
}
a(), self.aiCommand746 = function(en) {
	0 === en ? bc() : 1 !== en || !m || 1 !== m.id || m.eo < 14 || b8.ep()
}, setTimeout(bc, 1e4), window.onload = function() {
	bc()
};