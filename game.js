var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, hy, iO, iP,
	a7o, lk, jv, a1P, ug, y4, aBi, a4c, a4d, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io",
		"input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>",
		"undefined", "pre", "</a>", "scroll", "qix3", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "top", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel",
		"underline", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	var b, c;

	function q() {
		(b = new WebSocket("wss://territorial.io/s52/")).onopen = a3, b.onclose = function() {
			a4()
		}
	}

	function a3() {
		if (b && b.readyState === b.OPEN) {
			var i = new a6;
			i.a7(1608), i.a8(1, 0), i.a8(6, 7), i.a8(2, a0 ? a0.id : 3), i.a8(1, l.a9 ? 1 : 0), i.a8(1, l.aA ? 1 : 0), i.a8(1, l ? l.m : 0);
			for (var aB = 0; aB < c.length && aB < 228; aB++) i.a8(7, c.charCodeAt(aB) % 128);
			b.send(i.aC), a4()
		}
	}

	function a4() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		c = "";
		try {
			return window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + function(e) {
				if (!e.error) return "NoStack";
				var stack = e.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var match, a5 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a5.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(e), __fx.reportError(e, c), alert("Error:\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message)
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		q()
	})
}

function bt(bu) {
	l && !bu || (bw(), bL = new bx, bK = new by, bA = new bz, bB = new c0, aD = new c1, b7 = new c2, bF = new c3, bG = new c4, aE = new c5, aF = new c6, aG = new c7, aH = new c8, aI = new c9, aJ = new cA, aK = new cB, aL = new cC, aM = new cD, aN =
		new cE, aO = new cF, aP = new cG, aQ = new cH, aR = new cI, aS = new cJ, aT = new cK, aU = new cL, aV = new cM, aW = new cN, aX = new cO, aY = new cP, aZ = new cQ, aa = new cR, ab = new cS, ac = new cT, ak = new cU, al = new cV, an =
		new cW, am = new cX, ad = new cY, ae = new cZ, ah = new ca, af = new cb, ag = new cc, ai = new cd, az = new ce, aj = new cf, ap = new cg, aq = new ch, ar = new ci, b0 = new cj, ay = new ck, ao = new cl, at = new cm, au = new cn, av =
		new co, h = new cp, aw = new cq, ax = new cr, b1 = new cs, b2 = new ct, b3 = new cu, b4 = new cv, b5 = new cw, b6 = new cx, b8 = new cy, b9 = new cz, bC = new d0, bD = new a6, bE = new d1, bH = new d2, bI = new d3, bJ = new d4, bM =
		new d5, bN = new d6, bO = new d7, bP = new d8, bQ = new d9, bR = new dA, bS = new dB, bT = new dC, t = new dD, bU = new dE, a0 = new dF, l = new dG, bi = new dH, bj = new dI, bg = new dJ, bh = new dK, ba = new dL, bb = new dM, bV =
		new dN, bW = new dO, bd = new dP, be = new dQ, bf = new dR, bk = new dS, bc = new dT, o = new dU, bl = new dV, bm = new dW, bn = new dX, bp = new dY, bq = new dZ, br = new da, bs = new db, l.dd(), a0.dd(), h.de(), bj.dd(), b7.dd(), b7
		.df(), (bX = new dg).dd(), bA.dd(), bV.dd(), b0.dd(), bF.dd(), bG.dd(), bS.dd(), t.dd(), bY = new dh, h.dd(), a0.a1.di(), bf.dd(), bc.dd(), bW.dd(), bZ = new dj, ay.dd(), ae.dk(), bU.dd(), ap.dd(), aa.dd(), aT.dd(), ai.dd(), bJ.dd(), ab
		.dd(), bi.dd(), bf.dl = !0, setTimeout(function() {
			bS.a7(2, 14071)
		}, 0), t.u(5, 5), bI.dm() || a0.a1.dn(), h.dp(), l.m = 1)
}

function dG() {
	this.dq = 1104, this.n = 2097, this.rVersion = 12, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dv = "21 Jul 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dx = (new Date).getTime() % 1048576
	}, this.m = 0
}

function dy() {
	var dz = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e0 = [100, 60, 30, 15, 6, 1],
		e1 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e2 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		e3 = ["👢", "🔇", "✂️", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		e4 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e5 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.e6 = function(id, e7, e8) {
		e7 = this.e9(e7);
		return +(e1[e7][id] > e8)
	}, this.e9 = function(e7) {
		for (var aB = 0; aB < e0.length; aB++)
			if (e0[aB] <= e7) return aB;
		return e0.length
	}, this.eA = function(e7) {
		return dz[this.e9(e7)]
	}, this.eB = function(id, eC) {
		return e2[id].replace(new RegExp("x", "g"), eC)
	}, this.eD = function(id, eC) {
		return e4[id].replace(new RegExp("x", "g"), eC)
	}, this.eE = function(id, eF) {
		return e3[id] + (this.e5[id][eF].length ? " (" + this.e5[id][eF] + ")" : "")
	}
}

function dE() {
	this.eG = new eH, this.dd = function() {
		a0.a1.eI()
	}, this.eJ = function() {
		return bj.eK.data[160].value
	}
}

function eH() {
	var eL = 2e4;
	this.show = function() {
		if (bf.eM < eL) return !1;
		eL = bf.eM + 135e4, 2 === l.ds && a0.a1.eN(Math.floor(135e4))
	}
}

function cX() {
	this.eO = new eP
}

function eP() {
	this.eQ = function(eR) {
		var eU;
		return bS.eS(bS.eT) && aD.data.passableMountains && (eU = ac.eV(eR), this.eW(aD.eX, eU) || this.eY(aD.eX, eU)) && 0 !== (eU = function(et) {
			for (var eu = bM.ev(et), ew = bM.ex(et), max = Math.max(bS.ey, bS.ez) - 2, f0 = max * max, f1 = !1, f2 = 0, f3 = 0; f3 < max; f3++) {
				var f4, eZ = function(eu, ew, f3) {
					for (var aB = 0; aB <= f3; aB++)
						for (var f6 = -1; f6 < 2; f6 += 2)
							for (var f7 = -1; f7 < 2; f7 += 2)
								for (var f8 = 0; f8 < 2; f8++) {
									var eR = function(eu, ew) {
										if (bM.fA(eu, ew)) {
											eu = bM.fB(eu, ew), ew = bM.ed(eu);
											if (ac.ei(ew) && ac.fC(ew)) return eu
										}
										return 0
									}(eu + f8 * f6 * aB + (1 - f8) * f7 * f3, ew + f8 * f7 * f3 + (1 - f8) * f6 * aB);
									if (eR) return eR
								}
					return 0
				}(eu, ew, f3);
				eZ && (f4 = bM.f5(eu, ew, eZ)) < f0 && (f2 = eZ, f0 = f4, f1 || (f1 = !0, max = Math.floor(Math.sqrt(f4)) + 1))
			}
			return f2
		}(bM.eb(eR))) && (eR = bM.ed(eU), ac.ee(eR) || (eR = ac.ef(eR)) !== aD.eX && bs.eg(eR, aD.eX)) ? eU : 0
	}, this.eh = function(player, eZ) {
		eZ = bM.ed(eZ);
		if (ac.ei(eZ)) {
			if (ac.ee(eZ)) bO.ej[0] = aD.ek;
			else if (ac.ef(eZ) !== bO.ej[0]) return !1;
			for (var el = function(eR) {
					var ep = ac.ep,
						el = [];
					loop: for (var eq = 3; 0 <= eq; eq--) {
						var er = eR + ep[eq];
						if (ac.es(er)) {
							for (var id = ac.eV(er), aB = 0; aB < el.length; aB++)
								if (id === el[aB]) continue loop;
							bO.eo[el.length] = er, el.push(id)
						}
					}
					return el
				}(eZ), en = el.length, aB = 0; aB < en; aB++)
				if (this.eW(player, el[aB]) || this.eY(player, el[aB])) return bO.eo[0] = bO.eo[aB], !0
		}
		return !1
	}, this.eW = function(player, eU) {
		for (var fD = ag.fD[player], en = fD.length, fE = Math.max(bL.du(en, 12), 1), ep = ac.ep, aB = 0; aB < en; aB += fE)
			for (var ec = fD[aB], eq = 3; 0 <= eq; eq--) {
				var er = ec + ep[eq];
				if (ac.es(er) && eU === ac.eV(er)) return !0
			}
		return !1
	}, this.eY = function(player, eU) {
		for (var fD = ag.fD[player], en = fD.length, ep = ac.ep, aB = 0; aB < en; aB++)
			for (var ec = fD[aB], eq = 3; 0 <= eq; eq--) {
				var er = ec + ep[eq];
				if (ac.es(er) && eU === ac.eV(er)) return !0
			}
		return !1
	}
}

function d7() {
	this.g = new Array(4), this.fH = new Uint16Array(2), this.fI = new Uint16Array(2), this.fJ = new Int32Array(2), this.fK = new Uint32Array(2), this.fL = new Uint32Array(2), this.fM = new Uint8Array(4), this.fN = new Uint8Array(4), this.eo =
		new Uint32Array(4), this.fO = new Uint32Array(5), this.ej = new Uint32Array(8), this.fP = new Uint32Array(8), this.fQ = new Uint16Array(16), this.fR = new Uint16Array(512), this.fS = new Uint16Array(512), this.fT = new Uint16Array(512), this
		.fU = new Uint16Array(0), this.dd = function() {
			var en = bS.ey * bS.ez;
			this.fU.length !== en && (this.fU = new Uint16Array(en))
		}, this.fV = function(g, fW) {
			return g[0] = fW, g
		}, this.fX = function(g, fW, fY) {
			return g[0] = fW, g[1] = fY, g
		}, this.fZ = function(g, fW, fY, fa) {
			return g[0] = fW, g[1] = fY, g[2] = fa, g
		}, this.fb = function(g, fW, fY, fa, fc) {
			return g[0] = fW, g[1] = fY, g[2] = fa, g[3] = fc, g
		}
}

function fq() {
	fj = 0, fk = 2048, fl = new Uint32Array(4 * fk), fm = 0, fn = new Uint32Array(fk), fo = new Uint8Array(bS.ey * bS.ez)
}

function fr(player) {
	fe = player, fp = !1, fs(), ft();
	for (var aB = ad.fu(fe) - 1; 0 <= aB; aB--) fd = aB, fv();
	fp && fw()
}

function fw() {
	bs.fx(), bs.fy()
}

function fv() {
	fi = ad.fz(fe, fd), ff = ad.g0(fe, fd), fg = ad.g1(fe, fd), g2(), (0 !== fj && (g4(), g5()) ? g6 : g3)()
}

function g5() {
	if (!((fh = bL.du(ff, fj)) > aD.g7)) {
		if (!fg) return !1;
		var g8 = fj * (1 + aD.g7);
		ff += bA.g9.gA(fe, g8 - ff), fh = bL.du(ff, fj)
	}
	return !0
}

function g4() {
	for (var aB = fj - 1; 0 <= aB; aB--) fo[bL.du(fl[aB], 4)] = 0
}

function g3() {
	1 === ad.fu(fe) && aF.gB(fe);
	var dt = bA.g9.gC(fe, ff);
	bd.gD(fe, ff - dt, 12), ad.gE(fe, fd)
}

function fs() {
	for (var player = fe, gF = ag.gF, en = Math.min(gF[player].length, fk), gG = 0, gH = fn, aB = en - 1; 0 <= aB; aB--) gH[gG++] = gF[player][aB];
	fm = gG
}

function ft() {
	for (var aB = ag.gF[fe].length - 1; 0 <= aB; aB--) ac.ei(ag.gF[fe][aB]) && ac.gI(ag.gF[fe][aB], fe);
	ag.gF[fe] = []
}

function g2() {
	fj = 0, (fi === aD.ek ? gJ : gK)()
}

function gK() {
	for (var gL, gM, aB, ep = ac.ep, eq = 3; 0 <= eq; eq--)
		for (aB = fm - 1; 0 <= aB; aB--) gL = fn[aB] + ep[eq], gM = bL.du(gL, 4), 0 === fo[gM] && ac.gN(gL) && ac.ef(gL) === fi && (fo[gM] = 1, fl[fj++] = gL)
}

function gJ() {
	for (var gL, gM, aB, ep = ac.ep, eq = 3; 0 <= eq; eq--)
		for (aB = fm - 1; 0 <= aB; aB--) gL = fn[aB] + ep[eq], gM = bL.du(gL, 4), 0 === fo[gM] && ac.ee(gL) && (fo[gM] = 1, fl[fj++] = gL)
}

function g6() {
	gO() ? (gP(), fi !== aD.ek && gQ()) : g3()
}

function gQ() {
	bs.gR(), bs.gS(ag.gT[fi]), bs.gS(ag.gU[fi]), bS.eS(bS.eT) && bs.gS(ag.fD[fi]), bs.gV(ag.gF[fi]), bs.gW(ag.gU[fi]), bs.gW(ag.fD[fi]), bs.gX(), bs.gY()
}

function gP() {
	fp = !0, ad.gZ(fe, fd, ff), ad.ga(fe, fd), ag.gb[fe] += fj, bs.gc(), gd()
}

function gO() {
	return (fi === aD.ek ? ge : gf)()
}

function gf() {
	var gg = fj * aD.g7,
		gh = gi(),
		gj = gk(),
		gh = gg + 2 * gh + gj,
		gm = fh * fj;
	return gh < gm ? (ff -= gh, bd.gD(fe, gh, 13), gn(gh - gg, gj), !0) : fg && 0 === gj ? (ff -= gm, gm += bA.g9.gA(fe, gh - gm + 1), bd.gD(fe, gm, 13), gn(gm - gg, 0), !0) : (ff -= gm, bd.gD(fe, gm, 13), gn(gm - gg, gj), !1)
}

function gn(gm, gj) {
	if (0 < gj) {
		if (gm <= gj) return bd.gD(fi, gm, 13), void ad.go(fi, fe, gj - gm);
		ad.go(fi, fe, 0), gm -= gj
	}
	gm = bL.du(gm, 2), gm = Math.min(ag.gp[fi], gm), bd.gD(fi, gm, 13), ag.gp[fi] -= gm
}

function gk() {
	return ad.gq(fi, fe)
}

function gi() {
	return bL.du(fj * ag.gp[fi], 1 + bL.du(10 * ag.gb[fi], 16))
}

function ge() {
	var gr = fj * aD.g7;
	return ff -= gr, bd.gD(fe, gr, 13), !0
}

function gd() {
	for (var aB = fj - 1; 0 <= aB; aB--) ag.gF[fe].push(fl[aB]), ag.gT[fe].push(fl[aB]), ac.gI(fl[aB], fe)
}

function dC() {
	var gs = 0,
		gt = 0;
	this.gu = function(eu, ew) {
		gs = eu, gt = ew
	}, this.gv = function(code) {
		var h2, h4, eZ;
		aD.gw || aM.gx || (bA.g9.gy(0) || bA.g9.gy(1)) && bA.g9.gz(aD.eX) && (aR.h0(gs, gt) ? aR.h1 = !1 : aP.h0(gs, gt) || (h2 = bM.h3(gs), h4 = bM.h5(gt), eZ = bM.fB(h2, h4), bM.h6(h2, h4) && (0 === code ? function(eZ) {
			var hA, eR, ec;
			aD.hB ? -1 !== (hA = br.hC(eZ)) && b8.hD.hE(eZ) : (eR = bM.ed(eZ), ac.es(eR) ? (hA = am.eO.eQ(eR)) && (ec = bM.ed(hA), ec = ac.ee(ec) ? aD.ek : ac.ef(ec), b8.hD.hG(aR.hH(), hA, ec)) : (hA = br.hI(eZ)) < 0 || (eR = bM
				.ed(hA), ac.ee(eR) ? bs.hJ(aD.eX) ? b8.hD.hK(aR.hH(), aD.ek) : ad.fu(aD.eX) && b1.hL(aD.ek, aR.hH()) : (ec = ac.ef(eR), bs.eg(ec, aD.eX) && (bs.hM(aD.eX, ec) ? b8.hD.hK(aR.hH(), ec) : ad.fu(aD.eX) && b1.hL(
					ec, aR.hH())))))
		}(eZ) : 1 === code ? function(eZ) {
			bN.hN.hO(aD.eX, eZ) && b8.hD.hP(aR.hH(), bO.fP[7])
		}(eZ) : 2 === code && function(eZ) {
			bN.hQ.hR(aD.eX, eZ) && b8.hD.hS(aR.hH())
		}(eZ))))
	}, this.hT = function() {
		if (!aD.gw && !aM.gx && bA.g9.gy(1)) {
			var gL = aD.eX;
			if (bA.g9.gz(gL)) {
				var en = ad.fu(gL);
				if (en < 1) ! function() {
					var gL = aD.eX;
					if (bs.hJ(gL)) b8.hD.hK(aR.hH(), aD.ek);
					else
						for (var ep = ac.ep, gT = ag.gT, en = gT[gL].length, hd = Math.floor(Math.random() * en), aB = 0; aB < en; aB++)
							for (var he = 3; 0 <= he; he--) {
								var hf = gT[gL][(aB + hd) % en] + ep[he];
								if (ac.gN(hf)) {
									hf = ac.ef(hf);
									if (hf !== gL && (!aD.hh || bs.eg(gL, hf))) return b8.hD.hK(aR.hH(), hf)
								}
							}
				}();
				else {
					for (var hV = 0, hW = ad.g0(gL, 0), aB = 1; aB < en; aB++) {
						var hX = ad.g0(gL, aB);
						hX < hW && (hW = hX, hV = aB)
					}
					b8.hD.hK(aR.hH(), ad.fz(gL, hV))
				}
			}
		}
	}, this.hY = function() {
		if (!aD.gw && !aM.gx && bA.g9.gz(aD.eX) && bA.g9.gy(1)) return aw.hZ ? aw.ha(aD.eX) ? void b8.hD.hb(1) : void 0 : void(aw.hc(aD.eX) && b8.hD.hY())
	}
}

function hi(hj, size, hk, hl, font) {
	var aB, ho = .2,
		canvas = document.createElement("canvas"),
		hp = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hj, canvas.height = hj, hp.font = size + font, hp.textAlign = "center", hp.textBaseline = "middle", hp.fillStyle = "red", aB = 0; aB < hk.length; aB++) hp.fillText(hk[aB], .5 * hj, .5 * hj);
	return -1 < (canvas = function(hm) {
		var aB, e7, eq = hm.data;
		for (aB = eq.length - 4; 0 <= aB; aB -= 4)
			if (e7 = eq[aB], hl <= e7) return Math.floor(aB / (4 * hj));
		return -1
	}(hp.getImageData(0, 0, hj, hj))) && (ho = (canvas - .5 * hj + .1 * size) / size), Math.max(ho, 0)
}

function d5() {
	this.hr = new Int16Array(4), this.hs = new Int16Array(4), this.ht = null, this.dd = function() {
		var aB;
		for (this.hr[0] = -bS.ey, this.hr[1] = 1, this.hr[2] = bS.ey, this.hr[3] = -1, this.ht = new Int16Array([-bS.ey, 1 - bS.ey, 1, bS.ey + 1, bS.ey, bS.ey - 1, -1, -bS.ey - 1]), aB = 0; aB < 4; aB++) this.hs[aB] = 4 * this.hr[aB]
	}, this.hu = function() {
		return bL.hv(Math.floor(.15 * (1 + .25 * a0.a1.hw()) * h.hx / hy), 4, 128)
	}, this.hz = function(eR, id) {
		for (var i0 = this.hs, aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.i1(ec) && ac.eV(ec) === id) return !0
		}
		return !1
	}, this.i2 = function(player, eR) {
		return !ac.ee(eR) && player === ac.ef(eR)
	}, this.f5 = function(h2, h4, eZ) {
		return (h2 -= this.ev(eZ)) * h2 + (h4 -= this.ex(eZ)) * h4
	}, this.i3 = function(i4, i5, i6) {
		i4 = this.i8(i4) - this.i9(i6), i5 = this.iB(i5) - this.iC(i6);
		return Math.sqrt(i4 * i4 + i5 * i5)
	}, this.iD = function(iE, iF) {
		var i7 = this.ev(iE) - this.ev(iF),
			iE = this.ex(iE) - this.ex(iF);
		return ~~Math.sqrt(i7 * i7 + iE * iE + .5)
	}, this.iG = function(iE, iF) {
		var i7 = this.ev(iE) - this.ev(iF),
			iE = this.ex(iE) - this.ex(iF);
		return i7 * i7 + iE * iE
	}, this.iH = function(iI, iJ, iK, iL) {
		return (iI -= iK) * iI + (iJ -= iL) * iJ
	}, this.iM = function(gL, iN) {
		return bL.du(iN * ag.gp[gL], 1e3)
	}, this.i8 = function(i4) {
		return 16 * (i4 + iO) / hy
	}, this.iB = function(i5) {
		return 16 * (i5 + iP) / hy
	}, this.iQ = function(eq) {
		return 16 * eq / hy
	}, this.h3 = function(i4) {
		return Math.floor((i4 + iO) / hy)
	}, this.h5 = function(i5) {
		return Math.floor((i5 + iP) / hy)
	}, this.h6 = function(h2, h4) {
		return 1 <= h2 && 1 <= h4 && h2 < bS.ey - 1 && h4 < bS.ez - 1
	}, this.ev = function(eZ) {
		return eZ % bS.ey
	}, this.ex = function(eZ) {
		return bL.du(eZ, bS.ey)
	}, this.fB = function(h2, h4) {
		return h4 * bS.ey + h2
	}, this.iR = function(h2, h4) {
		return 4 * this.fB(h2, h4)
	}, this.iS = function(eZ) {
		return this.fA(this.ev(eZ), this.ex(eZ))
	}, this.fA = function(h2, h4) {
		return 0 < h2 && h2 < bS.ey - 1 && 0 < h4 && h4 < bS.ez - 1
	}, this.ed = function(eZ) {
		return eZ << 2
	}, this.eb = function(eR) {
		return eR >> 2
	}, this.iT = function(eZ) {
		return bS.ey * this.ex(eZ) * 256 + (this.ev(eZ) << 4)
	}, this.iU = function(eZ) {
		return this.iT(eZ) + 8 + (bS.ey << 7)
	}, this.iV = function(i6) {
		return bS.ey * (this.iC(i6) >> 4) + (this.i9(i6) >> 4)
	}, this.iW = function(i6) {
		i6 = this.iV(i6);
		return (this.ev(i6) >> 5) + bN.iX.iY * (this.ex(i6) >> 5)
	}, this.i9 = function(i6) {
		return i6 % (bS.ey << 4)
	}, this.iC = function(i6) {
		return bL.du(i6, bS.ey << 4)
	}, this.iZ = function(eZ, he) {
		return eZ + this.hr[he]
	}, this.ia = function(eR, he) {
		return eR + this.hs[he]
	}, this.ib = function(iE, iF) {
		var i7 = this.ev(iF) - this.ev(iE),
			iF = this.ex(iF) - this.ex(iE);
		return Math.abs(i7) >= Math.abs(iF) ? 1 + 2 * (i7 < 0) : 2 * (0 < iF)
	}, this.ic = function(player) {
		return this.fB(ag.ie[player] + ag.ig[player] >> 1, ag.ih[player] + ag.ii[player] >> 1)
	}, this.ij = function(player) {
		return this.fB(ay.ik(ag.ie[player], ag.ig[player]), ay.ik(ag.ih[player], ag.ii[player]))
	}
}

function cl() {
	this.il = new im, this.io = new ip, this.iq = new ir, this.performance = new is, this.it = new iu, this.iv = new iw, this.ix = new iy, this.iz = new j0, this.j1 = new j2, this.dd = function() {
		this.il.dd(), this.iq.dd(), this.performance.dd(), this.it.dd(), this.iv.dd()
	}, this.j3 = function() {
		this.performance.j3(), this.il.j3(), this.iq.j4()
	}
}

function iu() {
	var j5, j7 = new Uint16Array(8);

	function jF(size, player) {
		for (var aB = ag.gF[player].length - 1; size <= aB; aB--) ac.jN(ag.gF[player][aB], player)
	}
	this.dd = function() {
		j5 = 0
	}, this.j8 = function(player, j9) {
		return bO.ej[1] = ag.gF[player].length, bO.ej[0] === aD.ek ? ao.it.jA(player) : this.jB(player, bO.ej[0]), (0 !== bO.ej[1] || 0 !== ag.gF[player].length) && !(!j9 && bO.ej[1] === ag.gF[player].length || (bO.ej[0] === aD.ek ? ag.jC[
			player]++ : ag.jD[player]++, 0))
	}, this.jE = function(player) {
		jF(bO.ej[1], player), ad.jG(player, bO.fK[0], bO.ej[0]), aF.jH(player, !1)
	}, this.jI = function(player, jJ, en, hW) {
		ao.iv.jK[player] = 1;
		var jL = bL.du(12 * ag.gp[player], 1024);
		hW -= hW >= bL.du(ag.gp[player], 2) ? jL : 0, jF(en, player), ad.jG(player, hW, jJ), ag.gp[player] -= hW + jL, aF.jH(player, !1)
	}, this.jB = function(player, jJ) {
		for (var he, ep = ac.ep, aB = ag.gT[player].length - 1; 0 <= aB; aB--)
			if (ac.jM(ag.gT[player][aB]))
				for (he = 3; 0 <= he; he--)
					if (ac.gN(ag.gT[player][aB] + ep[he]) && ac.ef(ag.gT[player][aB] + ep[he]) === jJ) {
						ag.gF[player].push(ag.gT[player][aB]);
						break
					}
	}, this.jA = function(player) {
		for (var ep = ac.ep, aB = ag.gT[player].length - 1; 0 <= aB; aB--)
			if (ac.jM(ag.gT[player][aB]))
				for (var he = 3; 0 <= he; he--)
					if (ac.ee(ag.gT[player][aB] + ep[he])) {
						ag.gF[player].push(ag.gT[player][aB]);
						break
					}
	}, this.jO = function(player, jP) {
		var aB, f6, he, hg, en = ag.gT[player].length,
			jQ = 256 <= en ? 12 : 32 <= en ? 6 : 1,
			jR = en - 1 - ay.jS(jQ),
			ep = ac.ep;
		j5 = 0;
		loop: for (aB = jR; 0 <= aB; aB -= jQ)
			for (he = 3; 0 <= he; he--)
				if ((hg = ac.ee(ag.gT[player][aB] + ep[he]) ? aD.ek : ac.ef(ag.gT[player][aB] + ep[he])) === aD.ek || ac.gN(ag.gT[player][aB] + ep[he]) && hg !== player && (jP || bs.eg(player, hg))) {
					for (f6 = j5 - 1; 0 <= f6; f6--)
						if (j7[f6] === hg) continue loop;
					if (j7[j5] = hg, 8 <= ++j5) return !0
				}
		return 0 < j5
	}, this.jT = function(player, jP) {
		var aB, he, hg, ep = ac.ep;
		for (j5 = 0, aB = ag.gT[player].length - 1; 0 <= aB; aB--)
			for (he = 3; 0 <= he; he--)
				if ((hg = ac.ee(ag.gT[player][aB] + ep[he]) ? aD.ek : ac.ef(ag.gT[player][aB] + ep[he])) === aD.ek || ac.gN(ag.gT[player][aB] + ep[he]) && hg !== player && (jP || bs.eg(player, hg))) return j7[j5++] = hg, !0;
		return !1
	}, this.jU = function() {
		for (var f7, aB = j5 - 1; 0 <= aB; aB--)
			if (j7[aB] === aD.ek) {
				for (j5--, f7 = aB; f7 < j5; f7++) j7[f7] = j7[f7 + 1];
				return !0
			} return !1
	}, this.jV = function(player) {
		for (var f7, aB = j5 - 1; 0 <= aB; aB--)
			if (ad.jW(player, j7[aB]))
				for (j5--, f7 = aB; f7 < j5; f7++) j7[f7] = j7[f7 + 1];
		return 0 === j5
	}, this.jX = function() {
		for (var aB = j5 - 1; 0 <= aB; aB--)
			if (bA.g9.jY(j7[aB])) return !0;
		return !1
	}, this.jZ = function() {
		for (var aB = j5 - 1; 0 <= aB; aB--) bA.g9.jY(j7[aB]) || (j7[aB] = j7[--j5]);
		return 0 < j5
	}, this.ja = function(player) {
		for (var f7, jb = j7[0], jc = ag.gp[jb] + ad.gq(jb, player), aB = j5 - 1; 1 <= aB; aB--)(f7 = ag.gp[j7[aB]] + ad.gq(j7[aB], player)) < jc && (jb = j7[aB], jc = f7);
		return jb
	}, this.jd = function(player) {
		var j, je = j7[0];
		if (1 !== j5)
			for (var jf = bL.du(ag.ig[player] + ag.ie[player], 2), jg = bL.du(ag.ii[player] + ag.ih[player], 2), f3 = jh(jf - bL.du(ag.ig[je] + ag.ie[je], 2)) + jh(jg - bL.du(ag.ii[je] + ag.ih[je], 2)), aB = j5 - 1; 1 <= aB; aB--)(j = jh(jf - bL
				.du(ag.ig[j7[aB]] + ag.ie[j7[aB]], 2)) + jh(jg - bL.du(ag.ii[j7[aB]] + ag.ih[j7[aB]], 2))) < f3 && (f3 = j, je = j7[aB]);
		return je
	}, this.ji = function() {
		for (var jj = j7, jk = jj[0], gp = ag.gp, jl = gp[jk], aB = j5 - 1; 1 <= aB; aB--) {
			var gL = jj[aB],
				f7 = gp[gL];
			jl < f7 && (jk = gL, jl = f7)
		}
		return jk
	}, this.jm = function() {
		return j7[ay.jS(j5)]
	}
}

function iw() {
	function k1(player, jJ, jr) {
		3 <= jr && 2142 < bf.k7() && (jJ === aD.ek || ag.gp[jJ] < bL.du(ag.gp[player], 20)) && aE.jw(player, 20)
	}

	function k4(player, hW, jJ, jr) {
		3 <= jr && jr < 6 && bL.du(ag.gp[player], 8) > ag.gp[jJ] && (hW = Math.max(bL.du(11 * ag.gp[jJ], 5), bL.du(ag.gp[player], 10)));
		jr = ag.gF[player].length;
		ao.it.jB(player, jJ), ao.it.jI(player, jJ, jr, hW)
	}

	function k0(player, hW) {
		var jJ = aD.ek,
			en = ag.gF[player].length;
		ao.it.jA(player), ag.gF[player].length !== en && ao.it.jI(player, jJ, en, hW)
	}
	this.jK = new Uint8Array(aD.ek), this.dd = function() {
		this.jK.fill(0)
	}, this.jn = function(player, hW) {
		var jp, jr, js, jt;
		ad.jo(player) && (jp = ae.jq(player), 3 <= (jr = aE.hW[player]) && jr < 6 && (hW = Math.max(ag.gp[player] - jp, hW)), js = ag.gU[player].length, jt = ag.gT[player].length, 30 * ag.gb[player] > aD.ju && jv[player] < 10 && 100 * jt <= js &&
			aE.jw(player, 10), aD.hh ? function(player, hW, jr, jp) {
				var jJ;
				if (ao.it.jO(player, !1) || ao.it.jT(player, !1)) {
					if (!ao.it.jV(player))
						if (ao.it.jU()) k0(player, hW), k1(player, aD.ek, jr);
						else {
							if (ay.k2(aE.k3[jr])) jJ = ao.it.ja(player);
							else {
								if (ao.it.jX() && ay.k2(aE.k5[jr]) && ao.it.jZ(), 6 === jr) return k4(player, hW, ao.it.jm(), jr);
								jJ = ao.it.jd(player)
							}
							k4(player, hW, jJ, jr), k1(player, jJ, jr)
						}
				} else bN.jy.j3(player) || ao.ix.j3(player) ? ao.iv.jK[player] = 1 : function(player, hW, jr, jp) {
					var aB, f7, f8, el = bg.el,
						k8 = el[player];
					if (0 !== k8) {
						var k9 = ag.gp[player],
							gb = ag.gb;
						if (player < aD.kA && (hW = k9), !(k9 < gb[player] || 5 === jr && k9 < jp || 4 === jr && k9 < bL.du(jp, 2))) {
							var en = al.kB,
								kC = al.kC,
								jK = (aB = ay.jS(en), ao.iv.jK);
							for (f7 = 0; f7 < en; f7++)
								if (f8 = kC[(f7 + aB) % en], 1 === jK[f8] && el[f8] === k8) return b8.kD.kE(player, f8, hW)
						}
					}
				}(player, hW, jr, jp)
			}(player, hW, jr, jp) : (!jt || js && (js < jt && !ay.jS(10) || 100 * jt <= js && ay.jS(3) || !ay.jS(8))) && bN.jy.j3(player) || function(player, hW, jr) {
				ao.it.jO(player, !0) || ao.it.jT(player, !0) ? ao.it.jV(player) || (ao.it.jU() ? k0(player, hW) : ay.k2(aE.k3[jr]) ? k4(player, hW, ao.it.ja(player), jr) : 5 === jr ? k4(player, hW, ao.it.ji(), jr) : (ao.it.jX() && ay.k2(aE
					.k5[jr]) && ao.it.jZ(), k4(player, hW, 6 === jr ? ao.it.jm() : ao.it.jd(player), jr))) : ao.ix.j3(player)
			}(player, hW, jr))
	}
}

function c5() {
	var kF = new Uint8Array(aD.ek),
		kG = new Uint16Array(aD.ek),
		kH = new Uint16Array(aD.ek),
		kI = new Uint8Array(aD.ek),
		kJ = (this.hW = new Uint8Array(aD.ek), new Uint16Array(aD.ek)),
		kK = new Uint16Array(aD.ek);

	function kZ(aB) {
		kF[aB] = 1 + bL.du(kJ[aB] * ay.random(), 10 * ay.value(100))
	}
	this.kL = null, this.k5 = [97, 94, 70, 40, 20, 0, 100], this.kM = [500, 450, 400, 300, 80, 50, 100], this.k3 = [0, 0, 5, 25, 50, 100, 0], this.kN = [60, 74, 112, 200, 256, 512, 512], this.kO = [1, 2, 3, 4, 6, 8, 1], this.kP = [500, 450, 400, 300,
		80, 50, 100
	], this.kQ = [100, 150, 250, 400, 600, 1e3, 100], this.de = function() {
		this.kL = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dd = function() {
		kF.fill(0), kG.fill(0), kH.fill(0), kI.fill(0), this.hW.fill(0), kJ.fill(0), kK.fill(0);
		var kR = aD.kA;
		if (9 === aD.kS) this.kT();
		else if (aD.kU)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kW - 1; 0 <= aB; aB--) {
					var hf = aB + kR;
					this.hW[hf] = aD.data.botDifficultyData[hf]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kW - 1; 0 <= aB; aB--) this.hW[hf = aB + kR] = aD.data.botDifficultyTeam[bg.kX[bg.el[hf]]];
				else if (1 === aD.data.botDifficultyType) {
			var kY = this.kL.length;
			for (aB = aD.kW - 1; 0 <= aB; aB--) this.hW[aB + kR] = aB % kY
		} else
			for (kY = aD.data.botDifficultyValue, aB = aD.kW - 1; 0 <= aB; aB--) this.hW[aB + kR] = kY;
		else
			for (var kV = 8 === aD.kS ? 1 : 0, aB = aD.kW - 1; 0 <= aB; aB--) this.hW[aB + kR] = kV;
		for (aB = 0; aB < kR; aB++) this.hW[aB] = 6;
		var en = aD.ek;
		for (aB = 0; aB < en; aB++) this.hW[aB] <= 2 ? (kI[aB] = 5, kJ[aB] = kK[aB] = 1040, 0 === this.hW[aB] ? (kG[aB] = 980, kH[aB] = 980) : 1 === this.hW[aB] ? (kG[aB] = 980, kH[aB] = 920, kJ[aB] = kK[aB] = 1100) : (kG[aB] = 825, kH[aB] =
			750)) : this.hW[aB] <= 4 ? (kI[aB] = 1 + ay.jS(20), 3 === this.hW[aB] ? (kG[aB] = kH[aB] = 500, kJ[aB] = kK[aB] = 1e3) : (kK[aB] = 250 + ay.jS(1501), kJ[aB] = 500 + ay.jS(501), kG[aB] = 300 + ay.jS(201), kH[aB] = 100 + ay.jS(
			201))) : this.hW[aB] <= 5 ? (kJ[aB] = 1e3, kK[aB] = 1e3, kI[aB] = 35 + ay.jS(16), kG[aB] = 300 + ay.jS(201), kH[aB] = 50 + ay.jS(101)) : (kJ[aB] = kK[aB] = 800, kI[aB] = 5, kG[aB] = 10, kH[aB] = 250), kZ(aB)
	}, this.kT = function() {
		for (var eR = az.ka, kR = aD.kA, aB = eR - 1; 0 <= aB; aB--) this.hW[aB + kR] = 0;
		for (var f7 = 0; f7 < 6; f7++) {
			for (aB = eR + az.kb[f7] - 1; eR <= aB; aB--) this.hW[aB + kR] = f7;
			eR += az.kb[f7]
		}
	}, this.jw = function(gL, value) {
		kF[gL] = Math.min(value, kF[gL])
	}, this.j3 = function(gL) {
		0 == --kF[gL] && ! function(gL) {
			(function(gL) {
				kJ[gL] !== kK[gL] && (kJ[gL] += kJ[gL] < kK[gL] ? 3 : -3);
				kG[gL] !== kH[gL] && (kG[gL] += kG[gL] < kH[gL] ? kI[gL] : -kI[gL], kG[gL] = (Math.abs(kG[gL] - kH[gL]) <= kI[gL] ? kH : kG)[gL]);
				kF[gL] = bL.du(kJ[gL], 10)
			})(gL), ao.iv.jn(gL, bL.du(kG[gL] * ag.gp[gL], 1e3))
		}(gL)
	}, this.ke = function(gL, gG) {
		kJ[gL] = kK[gL] = gG
	}
}

function ir() {
	var kf = new Uint16Array(aD.ek);

	function ks(player, kq) {
		for (var en = bO.fI[0], fQ = bO.fQ, l4 = -1, l5 = aD.ek, aB = 0; aB < en; aB++) {
			var f3, gL = fQ[aB];
			bs.eg(player, gL) && (f3 = bM.iG(kq, bM.ic(gL)), -1 === l4 || f3 < l4) && (l4 = f3, l5 = gL)
		}
		return l5
	}

	function ku(kr, kq) {
		if (kr === aD.ek) return 0;
		var gU = ag.gU[kr],
			l3 = gU.length;
		if (0 === l3) return 0;
		for (var en = Math.min(l3, 10), l5 = 0, l4 = bM.iG(gU[l5] >> 2, kq), aB = 0; aB < en; aB++) {
			var hf = ay.jS(l3),
				f3 = bM.iG(gU[hf] >> 2, kq);
			f3 < l4 && (l4 = f3, l5 = hf)
		}
		return gU[l5] >> 2
	}

	function kz(player, kq, jJ, l7) {
		var l8;
		(l7 === aD.ek || (l8 = bM.ic(jJ), l7 = bM.ic(l7), bM.iG(kq, l8) < bM.iG(kq, l7))) && (kf[player] = jJ)
	}
	this.dd = function() {
		kf.fill(aD.ek)
	}, this.j4 = function() {
		if (bf.k7() % 109 == 9 && !(al.kB < 20) && aD.hh && !(bh.kg() < bL.du(8 * aD.ju, 10))) {
			var kh = bh.ki();
			if (bg.kX[kh]) {
				bh.kj(kh);
				var en = bO.fI[0];
				if (0 !== en)
					for (var g = bO.fR, kC = al.kC, kB = al.kB, kk = kf, hf = ay.jS(en), aB = 0; aB < kB; aB++) {
						var hF = kC[aB],
							kl = g[hf];
						bA.g9.km(hF, kl) && 512 === kk[hF] && (kk[hF] = kl, hf = (hf + 1) % en)
					}
			}
		}
	}, this.j3 = function(player) {
		var kq, kt, kr, kn = function(player) {
			var jJ = kf[player];
			if (jJ !== aD.ek) {
				if (bA.g9.l6(jJ) && ag.gU[jJ]) return jJ;
				kf[player] = aD.ek
			}
			return aD.ek
		}(player);
		return function(player) {
			for (var l2 = al.kC, l3 = al.kB, en = Math.min(l3, l3 < 17 && 5 === ay.jS(20) ? 1 : 16), gM = ay.jS(l3), fQ = bO.fQ, gU = ag.gU, gG = 0, aB = 0; aB < en; aB++) {
				var gL = l2[(aB + gM) % l3];
				gL !== player && gU[gL].length && (fQ[gG++] = gL)
			}
			bO.fI[0] = gG
		}(player), 0 !== bO.fI[0] && (0 < (kt = ku(kr = ks(player, kq = bM.ij(player)), kq)) && bN.kv.kw(player, bN.kx.ky(kt, kq)) ? (kz(player, kq, kr, kn), !0) : 0 < (kr = function(player, kq) {
			for (var en = bO.fI[0], fQ = bO.fQ, kk = kf, gM = 0, aB = 0; aB < en; aB++) {
				var gL = fQ[aB],
					gL = kk[gL];
				gL !== aD.ek && bA.g9.l6(gL) && player !== gL && bs.eg(player, gL) && (fQ[gM++] = gL)
			}
			return 0 !== (bO.fI[0] = gM) ? ku(ks(player, kq), kq) : 0
		}(player, kq)) && bN.kv.kw(player, bN.kx.ky(kr, kq)) ? (kz(player, kq, ac.ef(kr << 2), kn), !0) : !!(0 < (kt = ku(kn, kq)) && bN.kv.kw(player, bN.kx.ky(kt, kq))))
	}
}

function iy() {
	function lC(player) {
		for (var fD = ag.fD[player], en = fD.length, fE = Math.max(bL.du(en, 12), 1), ep = ac.ep, e7 = ay.jS(en), aB = 0; aB < en; aB += fE)
			for (var ec = fD[(aB + e7) % en], eq = 3; 0 <= eq; eq--) {
				var er = ec + ep[eq];
				if (ac.es(er)) return {
					eR: er,
					id: ac.eV(er),
					gL: player
				}
			}
		return null
	}

	function lH(player, lJ) {
		var hW = bA.g9.lK(player, aE.kP[aE.hW[player]]);
		ag.gF[player].push(lJ.eR), ad.jG(player, hW, lJ.gL), aF.jH(player, !0)
	}
	this.j3 = function(player) {
		return !!bS.eS(bS.eT) && !!aD.data.passableMountains && 0 !== ag.fD[player].length && function(player) {
			var lB = lC(player);
			if (null === lB) return !1;
			! function(player) {
				for (var kC = al.kC, kB = al.kB, en = Math.min(kB, 12), gM = ay.jS(kB), fQ = bO.fQ, fD = ag.fD, gG = 0, aB = 0; aB < en; aB++) {
					var gL = kC[(aB + gM) % kB];
					gL !== player && fD[gL].length && bs.eg(player, gL) && (fQ[gG++] = gL)
				}
				bO.fI[0] = gG
			}(player);
			var lE = function(eU) {
				for (var en = bO.fI[0], fQ = bO.fQ, aB = 0; aB < en; aB++) {
					var lJ = lC(fQ[aB]);
					if (null !== lJ && lJ.id === eU) return lJ
				}
				return null
			}(lB.id);
			return null !== lE ? (lH(player, lE), !0) : function(player, eU) {
				var en = ao.il.lI;
				if (0 !== en)
					for (var eR = ao.il.eK[ay.jS(en)] << 2, ep = ac.ep, eq = ay.jS(4);;) {
						if (eR += ep[eq], ac.es(eR)) {
							if (ac.eV(eR) === eU) return lH(player, {
								eR: eR,
								gL: aD.ek
							}), !0;
							break
						}
						if (!ac.ee(eR)) break
					}
				return !1
			}(player, lB.id)
		}(player)
	}
}

function ip() {
	this.j3 = function(player) {
		return bN.kv.kw(player, function(player) {
			var en = ao.il.lI;
			if (0 === en) return -1;
			for (var l3 = Math.min(en, ao.performance.lM ? en : 10), eK = ao.il.eK, jR = bL.du(ay.random() * en, ay.value(100)), e = jR + l3, lN = ay.ik(ag.ie[player], ag.ig[player]), lO = ay.ik(ag.ih[player], ag.ii[player]), l5 = -1,
					f3 = bM.iH(0, 0, bS.ey, bS.ez), aB = jR; aB < e; aB++) {
				var gM = aB % en,
					lP = bM.f5(lN, lO, eK[gM]);
				lP < f3 && (f3 = lP, l5 = gM)
			}
			return -1 !== l5 ? function(eZ, lN, lO) {
				var h2 = bM.ev(eZ),
					h4 = bM.ex(eZ),
					i7 = lN - h2,
					iA = lO - h4;
				Math.abs(i7) >= Math.abs(iA) ? (iA = 0, i7 = Math.sign(i7)) : (i7 = 0, iA = Math.sign(iA));
				i7 === iA && (i7 = 1);
				for (;;) {
					if (h2 += i7, h4 += iA, !bM.fA(h2, h4)) break;
					if (eZ = bM.fB(h2, h4), ac.i1(bM.ed(eZ))) return eZ
				}
				return -1
			}(eK[l5], lN, lO) : -1
		}(player))
	}
}

function j0() {
	this.j3 = function(player) {
		var lR = function(player) {
			for (var lU = bN.lU.lW(), en = lU.length, l3 = Math.min(en, 32), hf = ay.jS(en), aB = 0; aB < l3; aB++) {
				var lR = (aB + hf) % en,
					lT = lU[lR],
					iE = lT[0],
					iF = lT[lT.length - 1];
				if (bN.kx.lX(player, iE) && bN.kx.lY(player, iF)) return lR;
				if (bN.kx.lX(player, iF) && bN.kx.lY(player, iE)) return 0 <= (lR = bN.lU.lZ(iF, iE)) ? lR : bN.lU.la() ? -1 : bN.lU.lb(bN.lU.lc(lT))
			}
			return -1
		}(player);
		return -1 !== lR && (lR = bN.lU.get(lR), !bN.kx.lV(player, lR)) && (bO.g[0] = lR, !0)
	}
}

function is() {
	this.lM = 0, this.dd = function() {
		this.lM = 0
	}, this.j3 = function() {
		if (!this.lM && bf.k7() % 30 == 7 && bA.g9.lf(80) && (ao.performance.lM = 1)) {
			if (aD.hh) {
				var kh = bh.ki();
				if (bg.kX[kh]) {
					bh.li(kh);
					var g = bO.fR,
						en = bO.fI[0];
					if (0 !== en)
						for (var lj = Math.min(100 + 10 * (en - 1), 400), aB = 0; aB < en; aB++) aE.ke(g[aB], lj)
				}
			}
			aE.ke(lk[0], 100)
		}
	}
}

function im() {
	var ll = 0,
		lm = 0,
		ln = 300,
		lo = 300,
		lp = 0;
	this.lI = 0, this.eK = new Uint32Array(512), this.dd = function() {
		lm = ll = 0, this.lI = 0, lp = 0
	}, this.j3 = function() {
		if (function() {
				var en = ao.il.lI;
				if (0 === en) return 1;
				var eK = ao.il.eK;
				if (bf.k7() % 35 == 6) {
					for (var aB = en - 1; 0 <= aB; aB--) ac.ee(eK[aB] << 2) || (en--, eK[aB] = eK[en]);
					ao.il.lI = en
				}
				return en < eK.length
			}())
			if (ln <= ll) {
				var lt = ao.il.lI;
				if (lt) {
					if (bf.k7() % 350 != 1) return;
					if (lp !== lt) return void(lp = lt);
					if (!bA.g9.jY(lk[0])) return
				} else if (bf.k7() % 12 != 8) return;
				bA.g9.lu() || ao.il.dd()
			} else {
				var aB, i = bS.ey,
					lv = i - 2,
					lt = lv * (bS.ez - 2),
					lw = ln,
					eK = ao.il.eK,
					l3 = ao.il.lI,
					lx = eK.length,
					gM = Math.min(lm + lw * ((1 + 19 * ao.performance.lM) * lo), lt);
				for (aB = lm; aB < gM; aB += lw) {
					var eR = 4 * (aB % lv + (bL.du(aB, lv) + 1) * i + 1);
					if (ac.ee(eR) && (eK[l3] = eR >> 2, ++l3 === lx)) {
						aB += lw;
						break
					}
				}(lm = aB) >= lt && (lm = ++ll), ao.il.lI = l3
			}
	}
}

function j2() {
	this.j3 = function() {
		if (bf.k7() % 51 == 45)
			for (var en = bN.y.lz, m0 = bN.y.m0, m1 = bN.y.m1, m2 = bN.y.m2, m3 = bN.y.m3, kQ = aE.kQ, hW = aE.hW, aB = 0; aB < en; aB++) {
				var lT, player, m7, m4 = m0[aB];
				m4 % 64 == 6 || (lT = m1[aB], (player = bN.kx.m5(lT[lT.length - 1])) < 0) || !bA.g9.km(player, m3[aB] >> 3) || ay.jS(1e3) >= kQ[hW[player]] || ! function(mB, lT) {
					for (var en = lT.length - 1, mC = bN.y.mD[mB], f3 = 0, aB = mC + 1; aB < en; aB++) f3 += bM.iD(lT[aB], lT[aB + 1]);
					return (f3 += bM.iD(bM.iV(bN.y.mE[mB]), lT[mC + 1])) <= 60
				}(aB, lT) || (m7 = m2[aB], 64 <= m4 && bN.m8.m9(player, m7)) || function(player, lT, m7, mB, m4) {
					bN.mF.mG(player) && bA.g9.mH(player, aE.kM[aE.hW[player]], 32, 0) && (bN.y.m0[mB] = 64 + m4 % 64, bN.m8.jG(m7, bN.y.mI), bO.g[0] = bN.lU.lc(lT), bO.fP[1] = 6, bA.g9.mJ(player), bN.y.mK(player))
				}(player, lT, m7, aB, m4)
			}
	}
}

function mL() {
	aN.j3(), af.j3(), aW.mM(), b0.y.j3()
}

function mN() {
	b1.j3(), aG.j3(), an.j3(), ae.j3(), b4.j3(), aF.j3(), ao.j3(), bN.y.j3(), al.mO(), aV.j3(), az.j3(), bV.j3(), af.j3(), af.mP(), aW.j3(), bP.j3(), aU.j3(), aP.j3(), aN.j3(), b5.j3(), aR.j3(), aw.j3(), bd.j3(), bh.j3(), b0.y.j3(), b0.mQ.j3(), t
	.j3(), b9.j3(), bf.j3()
}

function mR() {
	aH.j3(), aX.j3(), aQ.j3(), av.j3(), bC.j3(), ax.mS()
}

function mT() {
	aV.mU(!1), aP.mU(), aW.mU(!1), aU.mU(), aR.mU(), aw.mU(), af.mU(!1), bh.mV()
}

function mW() {
	af.mU(!1) && (bf.dl = !0), b0.y.j3()
}

function c6() {
	var mX, mY, mZ;

	function mb(md) {
		for (var aB = mX - 1; 0 <= aB; aB--) 0 === mZ[mY[aB]] && ag.gb[mY[aB]] >= md && fr(mY[aB])
	}

	function ma(player) {
		var dt;
		64 === mZ[player] ? mZ[player] = 6 : (dt = ag.gb[player], mZ[player] = dt < 1e3 ? 3 : dt < 1e4 ? 2 : dt < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		mX = 0, mY = new Uint16Array(aD.ek), mZ = new Uint8Array(aD.ek)
	}, this.j3 = function() {
		for (var aB = mX - 1; 0 <= aB; aB--) 64 === mZ[mY[aB]] ? ma(mY[aB]) : 0 == mZ[mY[aB]]-- && (ma(mY[aB]), fr(mY[aB]));
		16e4 <= ag.gb[lk[0]] && (mb(16e4), 3e5 <= ag.gb[lk[0]]) && mb(3e5), bA.g9.l6(aD.eX) && (bd.me[7] = Math.max(ag.gb[aD.eX], bd.me[7]))
	}, this.gB = function(player) {
		for (var f6, aB = mX - 1; 0 <= aB; aB--)
			if (player === mY[aB]) {
				for (mX--, f6 = aB; f6 < mX; f6++) mY[f6] = mY[f6 + 1];
				return
			}
	}, this.jH = function(player, mf) {
		for (var aB = mX - 1; 0 <= aB; aB--)
			if (player === mY[aB]) return;
		mY[mX++] = player, mZ[player] = mf ? 2 : 64
	}
}

function c7() {
	var size, jy;
	this.dd = function() {
		size = aD.kW, jy = new Uint16Array(aD.ek);
		for (var kA = aD.kA, aB = aD.kW - 1; 0 <= aB; aB--) jy[aB] = kA + aB
	}, this.j3 = function() {
		ao.j1.j3();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.mi[jy[aB]]) {
				f6 = void 0;
				var f6 = aB;
				size--, jy[f6] = jy[size]
			} else aE.j3(jy[aB])
	}, this.mh = function(gL) {
		jy[size++] = gL
	}
}

function c8() {
	var mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx = !1,
		my = !1;

	function mz(eF) {
		mv = bf.eM, mm = mn = ml = 0, mo = (mw = 33) / eF, mk = 1 / (eF / mw / 4), mp = (h.i / 2 + iO) / hy, mq = (h.j / 2 + iP) / hy, mr = hy
	}

	function n6(aB) {
		var n8; - 1 !== aB && (aB = bM.iV(bN.y.mE[aB]), n8 = bM.ev(aB) - 15, aB = bM.ex(aB) - 15, aH.n2(n8, aB, 29 + n8, 29 + aB))
	}

	function nJ(eC) {
		Math.abs(Math.log(mu / mr)) < .125 && (mu = eC * mr)
	}

	function nI(n8, n9, nL, nM) {
		ms = (n8 + nL + 1) / 2, mt = (n9 + nM + 1) / 2;
		nL = h.i / (nL - n8 + 1), n8 = h.j / (nM - n9 + 1);
		mu = .9 * (nL < n8 ? nL : n8)
	}
	this.n0 = function() {
		return mx
	}, this.n1 = function() {
		mz(1), this.n2(0, 0, bS.ey - 1, bS.ez - 1), aD.hB || aD.gw || this.n3(aD.eX, 3e3, !0, .3)
	}, this.n4 = function(player, n5) {
		n6(bN.kx.n7(player, n5))
	}, this.n3 = function(player, eF, nA, zoom) {
		aD.nB || mx && !nA && my || (0 === ag.gb[player] ? n6(bN.kx.nC(player)) : (aS.nD = !1, my = nA, mz(eF), function(player) {
			ms = (ag.ie[player] + ag.ig[player] + 1) / 2, mt = (ag.ih[player] + ag.ii[player] + 1) / 2
		}(player), function(zoom, player) {
			var i7 = ag.ig[player] - ag.ie[player] + 1,
				player = ag.ii[player] - ag.ih[player] + 1,
				f6 = h.i / i7,
				f7 = h.j / player,
				f6 = (mu = f6 < f7 ? f6 : f7, 0 !== zoom ? zoom : i7 < 20 && player < 20 ? .5 : .9);
			mu *= f6, nJ(7 / 8)
		}(zoom, player), mx = !0, ar.nG()))
	}, this.nH = function(eF) {
		aD.gw || aD.nB || (aS.nD = !1, my = !1, mz(eF), nI(0, 0, bS.ey - 1, bS.ez - 1), nJ(7 / 8), mx = !0, ar.nG())
	}, this.n2 = function(n8, n9, nL, nM) {
		mx = !1, nI(n8, n9, nL, nM), hy = mu, aS.nN(ms, h.i / 2), aS.nO(mt, h.j / 2), ba.nP(), bf.dl = !0
	}, this.nQ = function() {
		return !(mx && my || (mx = !1))
	}, this.j3 = function() {
		var nT, nU, eq, nX;
		mx && (ml < .5 ? mn < mo && (mn += mo * mk, mm = ml) : 1 - mm < ml && (mn = (mn -= mo * mk) < mo * mk ? mo * mk : mn), mv = mv >= bf.eM ? bf.eM - 1 : mv, eq = bf.eM - mv, ml = 1e3 < eq || 1 < (ml += mn * eq / mw) ? 1 : ml, mv = bf.eM,
			eq = hy, nT = iO, nU = iP, eq = (hy = mr * Math.pow(mu / mr, ml)) / eq, nX = 1 - (mr * Math.pow(mu / mr, 1 - ml) - mr) / (mu - mr), aS.nN(mp + nX * (ms - mp), h.i / 2), aS.nO(mq + nX * (mt - mq), h.j / 2), af.zoom(eq, (nT * eq -
				iO) / (1 - eq), (nU * eq - iP) / (1 - eq)), ba.nP(), 1 <= ml && (mx = !1, bb.nY = !0), bf.dl = !0)
	}
}

function c0() {
	var f8 = bA.color;
	this.nZ = f8.na(0, 0, 0), this.nb = f8.nc(0, 0, 0, .7), this.nd = f8.nc(0, 0, 0, .5), this.ne = f8.nc(0, 0, 0, .85), this.nf = f8.nc(0, 0, 0, .75), this.ng = f8.nc(0, 0, 0, .6), this.nh = f8.nc(0, 0, 0, .35), this.ni = f8.na(255, 255, 255), this
		.nj = f8.nc(255, 255, 255, .3), this.nk = f8.nc(255, 255, 255, .6), this.nl = f8.nc(255, 255, 255, .4), this.nm = f8.nc(255, 255, 255, .25), this.nn = f8.nc(255, 255, 255, .85), this.no = f8.nc(255, 255, 255, .75), this.np = f8.nc(255, 255,
			255, .15), this.nq = f8.nc(255, 255, 255, .11), this.nr = f8.na(128, 128, 128), this.ns = f8.nc(64, 64, 64, .75), this.nt = f8.nc(88, 88, 88, .83), this.nu = f8.nc(60, 60, 60, .85), this.nv = f8.nc(80, 60, 60, .85), this.nw = f8.na(170,
			170, 170), this.nx = f8.na(200, 235, 245), this.ny = f8.na(30, 255, 30), this.nz = f8.na(0, 200, 0), this.o0 = f8.na(128, 255, 128), this.o1 = f8.nc(10, 65, 10, .75), this.o2 = f8.nc(0, 255, 0, .6), this.o3 = f8.nc(0, 255, 0, .5), this
		.o4 = f8.nc(0, 200, 0, .5), this.o5 = f8.nc(0, 100, 0, .75), this.o6 = f8.nc(0, 60, 0, .8), this.o7 = f8.nc(0, 255, 0, .3), this.o8 = f8.nc(0, 180, 0, .6), this.o9 = f8.nc(0, 120, 0, .85), this.oA = f8.na(0, 120, 0), this.oB = f8.nc(0, 70, 0,
			.85), this.oC = f8.na(190, 230, 190), this.oD = f8.na(0, 255, 0), this.oE = f8.na(255, 120, 120), this.oF = f8.na(255, 160, 160), this.oG = f8.na(255, 70, 70), this.oH = f8.na(230, 0, 0), this.oI = f8.nc(220, 0, 0, .6), this.oJ = f8.nc(
			255, 100, 100, .8), this.oK = f8.nc(100, 0, 0, .85), this.oL = f8.nc(60, 0, 0, .85), this.oM = f8.nc(200, 0, 0, .6), this.oN = f8.nc(120, 0, 0, .85), this.oO = f8.na(255, 70, 10), this.oP = f8.na(230, 190, 190), this.oQ = f8.na(255, 0,
		0), this.oR = f8.na(255, 0, 255), this.oS = f8.nc(60, 0, 60, .85), this.oT = f8.nc(0, 60, 60, .85), this.oU = f8.nc(10, 60, 60, .9), this.oV = f8.nc(0, 96, 96, .75), this.oW = f8.na(0, 255, 255), this.oX = f8.na(160, 160, 255), this.oY = f8
		.nc(0, 40, 90, .75), this.oZ = f8.nc(0, 0, 255, .6), this.oa = f8.na(200, 200, 255), this.ob = f8.nc(50, 50, 255, .83), this.oc = f8.na(255, 120, 100), this.od = f8.nc(255, 255, 0, .5), this.oe = f8.nc(255, 255, 150, .2), this.og = f8.na(255,
			255, 0), this.oh = f8.na(255, 255, 200), this.oi = f8.nc(200, 200, 0, .6), this.oj = f8.nc(140, 120, 0, .75), this.ok = f8.nc(180, 160, 40, .75), this.ol = f8.nc(70, 50, 20, .85), this.om = f8.nc(30, 30, 0, .85), this.on = f8.nc(60, 60,
			0, .85), this.oo = f8.nc(255, 140, 0, .75), this.op = f8.nc(70, 40, 0, .85), this.oq = f8.na(220, 120, 0), this.or = f8.nc(255, 200, 80, .85), this.os = f8.na(255, 150, 120), this.ot = f8.nc(0, 0, 0, 0), this.ou = f8.nc(255, 255, 255, 0),
		this.ov = f8.nc(254, 254, 254, 0)
}

function cy() {
	this.hD = new ow, this.g9 = new ox, this.oy = new oz, this.p0 = new p1, this.kD = new p2
}

function ow() {
	this.hE = function(eZ) {
		aD.kU ? b8.oy.hE(aD.eX, eZ) : b0.p3.p4(eZ)
	}, this.hK = function(iN, jJ) {
		aD.kU ? b8.oy.hK(aD.eX, iN, jJ) : b0.p3.p5(iN, jJ)
	}, this.p6 = function(iN, p7) {
		aD.kU ? b8.oy.p8(aD.eX, iN, p7) : b0.p3.p9(iN, p7)
	}, this.hP = function(iN, eZ) {
		eZ = (eZ << 3) + bO.fP[6];
		aD.kU ? b8.oy.hP(aD.eX, iN, eZ) : bN.mF.mG(aD.eX) && b0.p3.pB(iN, eZ)
	}, this.hS = function(iN) {
		849 === iN && (iN = 850);
		var n5 = bO.fP[3];
		aD.kU ? b8.oy.hS(aD.eX, iN, n5) : bN.hQ.pC(aD.eX, n5) && b0.p3.pD(iN, n5)
	}, this.pE = function(n5) {
		aD.kU ? b8.oy.pE(aD.eX, n5) : b0.p3.pD(849, n5)
	}, this.pF = function(jJ) {
		aD.kU ? b8.oy.pF(aD.eX, jJ) : b0.p3.pG(jJ)
	}, this.pH = function(pI) {
		aD.kU ? b8.oy.pJ(aD.eX, pI) : b0.p3.pK(pI)
	}, this.hb = function(pL) {
		aD.kU ? b8.oy.hb(aD.eX, pL) : b0.p3.pM(pL)
	}, this.pN = function() {
		aD.kU ? b8.oy.pN(aD.eX) : b0.p3.pO()
	}, this.hY = function() {
		aD.kU ? b8.oy.hY(aD.eX) : b0.p3.pG(513)
	}, this.hG = function(iN, eZ, jJ) {
		aD.kU ? b8.oy.hG(aD.eX, iN, eZ, jJ) : b0.p3.pP(iN, eZ, jJ)
	}
}

function p2() {
	this.kE = function(player, p7, hW) {
		bA.g9.pQ(player, hW, p7) && (ae.p6(player, p7), ay.random() < ay.value(6)) && (ao.iv.jK[p7] = 0)
	}, this.pR = function(player, p7, hW) {
		bA.g9.pS(hW, p7) ? (bA.g9.gC(p7, bO.fK[0]), bd.pT(player, p7), af.pU(p7, bO.fK[0])) : bd.gD(player, hW, 12)
	}
}

function ox() {
	this.pV = function(pI, player) {
		aN.pH(aD.eX, player, pI), b0.p3.pW(pI, player)
	}, this.pX = function(player) {
		aN.pY(player, 0), b0.p3.pZ(player)
	}, this.pa = function(pb, player) {
		aN.pc(pb, player), b0.p3.pd(pb, player)
	}, this.pe = function() {
		aD.kU || aD.gw || b0.pf.pe()
	}
}

function p1() {
	this.j3 = function(aC) {
		var id, fW, nQ;
		for (bH.dd(aC), bH.e8 += 2, nQ = 8 * bH.size; bH.e8 + 8 <= nQ;) id = bH.pg(4), fW = bH.pg(9), 0 === id ? this.ph(id, fW, bH.pg(22)) : 1 === id ? this.ph(id, fW, bH.pg(10), bH.pg(10)) : 2 === id ? this.ph(id, fW, bH.pg(10), bH.pg(9)) :
			3 === id ? this.ph(id, fW, bH.pg(10), bH.pg(27)) : 4 === id ? this.ph(id, fW, bH.pg(10), bH.pg(16)) : 5 === id || 6 === id ? this.ph(id, fW, bH.pg(10)) : 7 === id ? this.ph(id, fW, bH.pg(1)) : 10 === id ? this.ph(id, fW, bH.pg(20), bH
				.pg(22)) : this.ph(id, fW)
	}, this.pi = [], this.pj = function() {
		for (var pl = 0, pm = 0, pn = 0, po = 0, pp = 0, pq = 0, aB = 0; aB < 512; aB++) pl += ag.mi[aB], pm += ag.gb[aB], pn += ag.gp[aB], po += bN.y.pr[aB];
		pp += bN.y.lz, pq += al.kB, this.pi.push(pn % 1073741824 * 4 + (pl + pm + po + pp + pq) % 4)
	}, this.ph = function(id, fW, fY, fa) {
		0 === id ? b8.oy.hE(fW, fY) : 1 === id ? b8.oy.hK(fW, fY, fa) : 2 === id ? b8.oy.p8(fW, fY, fa) : 3 === id ? b8.oy.hP(fW, fY, fa) : 4 === id ? b8.oy.hS(fW, fY, fa) : 5 === id ? b8.oy.pF(fW, fY) : 6 === id ? b8.oy.pJ(fW, fY) : 7 === id ?
			b8.oy.hb(fW, fY) : 8 === id ? b8.oy.pN(fW) : 9 === id ? b8.oy.ps(fW) : 10 === id && b8.oy.hG(fW, fY >> 10, fa, fY % 1024)
	}
}

function oz() {
	this.hE = function(player, eZ) {
		bA.g9.gy(0) && bA.g9.gz(player) && bM.iS(eZ) && (b9.pt.pu(0, player, eZ), aD.pv.jG(player, eZ))
	}, this.hK = function(player, iN, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.pw(player, jJ) && bA.g9.mH(player, iN, 12, 0) && bA.g9.px(player, jJ) && ((jJ = ad.jW(player, bO.ej[0])) || ad.jo(player)) && (ag.py[player]++, b9.pt.pu(1, player, iN, bO.ej[0]), ao.it.j8(player,
			jJ)) && (ao.iv.jK[player] = 1, bA.g9.mJ(player), bd.pz(player, iN), ao.it.jE(player))
	}, this.p8 = function(player, iN, p7) {
		bA.g9.gy(1) && bA.g9.gz(player) && aD.hh && bA.g9.pw(player, p7) && bA.g9.q0(player, p7) && bA.g9.pQ(player, bA.g9.iM(player, iN), p7) && an.jG(p7, bO.fK[0]) && (b9.pt.pu(2, player, iN, p7), ae.p6(player, p7))
	}, this.hP = function(player, iN, pA) {
		bO.fP[1] = 7 & pA;
		var eZ = pA >> 3;
		bA.g9.gy(1) && bA.g9.gz(player) && bM.iS(eZ) && bN.mF.mG(player) && bN.mF.q1(eZ) && bA.g9.mH(player, iN, 32, 0) && bN.kv.q2(player, eZ, 1) && (ao.iv.jK[player] = 1, bd.q3(player), b9.pt.pu(3, player, iN, pA), bA.g9.mJ(player), bl.q4.hP(
			player), bN.y.mK(player))
	}, this.hS = function(player, iN, n5) {
		849 === iN ? this.pE(player, n5) : bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.mH(player, iN, 32, 0) && bN.hQ.q5(player, n5) && (bd.q3(player), b9.pt.pu(4, player, iN, n5), bA.g9.mJ(player), bl.q4.hS(player), bN.y.mK(player))
	}, this.pE = function(player, n5) {
		bA.g9.gy(1) && bA.g9.gz(player) && bN.q6.j3(player, n5) && b9.pt.pu(4, player, 849, n5)
	}, this.pF = function(player, jJ) {
		513 === jJ ? this.hY(player) : bA.g9.gy(1) && bA.g9.gz(player) && (jJ = Math.min(jJ, aD.ek), ad.jW(player, jJ)) && (b9.pt.pu(5, player, jJ), ad.q7(player, jJ))
	}, this.pJ = function(player, pI) {
		(bA.g9.gy(1) || bA.g9.gy(2)) && bA.g9.gz(player) && (pI = bL.hv(pI, 0, 1023), b9.pt.pu(6, player, pI), af.q8(player, 0, pI))
	}, this.hb = function(player, pL) {
		aw.ha(player) && (b9.pt.pu(7, player, pL), aw.q9(player, pL))
	}, this.pN = function(player) {
		(bA.g9.gy(0) || bA.g9.gy(1)) && bA.g9.gz(player) && aM.qA(player) && (b9.pt.pu(8, player), bQ.pN(player))
	}, this.ps = function(player) {
		b9.pt.pu(9, player), bQ.ps(player)
	}, this.hY = function(player) {
		aw.hc(player) && (b9.pt.pu(5, player, 513), aw.hY(player))
	}, this.hG = function(player, iN, eZ, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.pw(player, jJ) && bA.g9.px(player, jJ) && bM.iS(eZ) && am.eO.eh(player, eZ) && (ad.jW(player, bO.ej[0]) || ad.jo(player)) && (ao.iv.jK[player] = 1, b9.pt.pu(10, player, (iN << 10) + bO.ej[0], eZ),
			jJ = bA.g9.lK(player, iN), ag.gF[player].push(bO.eo[0]), ad.jG(player, jJ, bO.ej[0]), aF.jH(player, !0), bd.qB(player))
	}
}

function qC() {
	var qE;
	this.qD = [], this.qE = document.createElement("div"), this.qF = function(qG, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qG, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.qE.appendChild(
			title), title
	}, this.qH = function(qG, marginBottom) {
		var qI = document.createElement("p");
		return qI.textContent = qG, qI.style.fontSize = "0.75em", qI.style.lineHeight = "1.2em", qI.style.marginBottom = marginBottom || "0", this.qE.appendChild(qI), qI
	}, this.qJ = function(qG) {
		var qK = document.createElement("p");
		return qK.textContent = qG, qK.style.fontSize = "1em", qK.style.marginBottom = "0", qK.style.whiteSpace = "pre-wrap", qK.style.overflowWrap = "break-word", this.qE.appendChild(qK), qK
	}, this.qL = function(qM, fontSize) {
		var qE = document.createElement("div");
		return qE.innerHTML = qM, qE.style.fontSize = fontSize || "1em", qE.style.lineHeight = "1.2em", this.qE.appendChild(qE), qE
	}, this.qN = function(qO) {
		for (var qP = qO.qP, en = qP.length, aB = 0; aB < en; aB++) this.qE.appendChild(qP[aB])
	}, this.qQ = function(qR) {
		return this.qD.push(qR), this.qE.appendChild(qR.e), qR
	}, this.resize = function() {
		for (var en = this.qD.length, aB = 0; aB < en; aB++) this.qD[aB].resize && this.qD[aB].resize()
	}, (qE = this.qE).style.position = "absolute", qE.style.height = "auto", qE.style.padding = "0.5em"
}

function qS(qT, qU) {
	var qE = document.createElement("div");

	function qc() {
		var aB, qd, j, gM, eq, qY = h.k * qE.offsetWidth,
			qe = new Float64Array(function(qY) {
				var i = .25 * bA.qZ.qa(.6) * h.hx;
				return Math.max(Math.floor(qY / i), 1)
			}(qY)),
			qf = bc.qf,
			qg = (qY - (qe.length + 1) * bc.gap) / (qe.length * h.k);
		for (qe.fill(qf), aB = 0; aB < qU.length; aB++) qd = (eq = qU[aB].qE).style, j = bA.qh.min(qe), gM = qe.indexOf(j), qd.top = bA.qZ.qi(j), qd.left = bA.qZ.qi(qf + gM * (qg + qf)), qd.width = bA.qZ.qi(qg), bA.qZ.qj(eq, 5), qe[gM] += eq
			.offsetHeight + 3 * qf;
		qE.style.height = bA.qZ.qi(bA.qh.max(qe) - 2 * qf)
	}
	this.qV = qE, this.qW = qU, this.resize = function() {
		var aB;
		for (aB = 0; aB < qU.length; aB++) qU[aB].resize();
		qc(), qc()
	}, qE.style.width = "100%", qE.style.maxWidth = "100%", qT.style.lineHeight = "1.5em", qT.style.overflowX = "hidden", qT.style.overflowY = "auto";
	for (var aB = 0; aB < qU.length; aB++) qE.appendChild(qU[aB].qE);
	qT.appendChild(qE)
}

function w(qk, ql, qm, qn, qo) {
	var self, qp = document.createElement("button");

	function qw() {
		var r2;
		bJ.r1() || (r2 = bA.color.r3(qm), !1 !== qn && 0 < r2[0] && r2[0] < 255 && r2[0] === r2[1] && r2[0] === r2[2]) || (qp.style.backgroundColor = bA.color.r4(qm, r2[3] && r2[3] < 120 ? 150 : 50))
	}

	function qv() {
		if (qn) {
			var r2 = bA.color.r3(qm);
			if (r2[0] === r2[1] && r2[0] === r2[2]) return
		}
		ql && ((r2 = ql(this)) ? 2 === r2 && qw() : r6(this))
	}

	function qy() {
		this.style.backgroundColor = qm
	}

	function qx() {
		r6(this)
	}

	function r6(eq) {
		eq.style.backgroundColor = qm, eq.blur()
	}
	this.button = qp, this.qq = ql, this.qr = qm, this.qu = function(qz) {
		qz = 1.1 - Math.min(.01 * qk.length, .6) + .2 * qz;
		qp.style.fontSize = qz.toFixed(1) + "em"
	}, this.qt = function(f8) {
		f8 ? 1 === f8 ? f8 = bB.nu : 2 === f8 && (qn = 1, f8 = bB.nu) : (qn = 0, f8 = bB.ne), this.qr = qm = f8, qp.style.backgroundColor = f8
	}, self = this, qp.innerHTML = qk, qp.style.color = qo ? bB.og : bB.ni, qp.style.userSelect = "none", qp.style.outline = "none", qp.style.overflowWrap = "break-word", self.qt(qm), qp.style.border = "none", qp.style.font = "inherit", self.qu(
		0), qp.style.padding = "0em 0.3em", qp.onclick = qv, qp.addEventListener("mouseover", qw), qp.addEventListener("mouseout", qx), qp.addEventListener("focus", qw), qp.addEventListener("blur", qy)
}

function r7(r8, qT) {
	var qE;
	this.resize = function() {
		for (var aB = 0; aB < r8.length; aB++) bA.qZ.qj(r8[aB].button);
		qE.style.gap = qE.style.padding = bA.qZ.qi(bc.qf)
	}, (qE = document.createElement("div")).style.display = "grid", qE.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qE.style.overflowY = "auto", qE.style.gridAutoRows = "5.3em", qE.style.maxHeight = "100%";
	for (var aB = 0; aB < r8.length; aB++) r8[aB].qu(1), qE.appendChild(r8[aB].button);
	qT.appendChild(qE)
}

function rA(rB, rC, rD) {
	this.eu = 0, this.ew = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qZ.qa(rD || .5) * rB[1] * h.hx, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rB[0] / rB[1]), h.i - 2 * bc.gap), this.j = rB[1] * this.i / rB[0], this.eu = bc.gap + rC[0] * (h.i - this.i - 2 * bc.gap), this.ew = bc
			.gap + rC[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rE = function() {
		return this.eu + .5 * this.i
	}
}

function rF(rG, rH) {
	var rQ, self, rI = document.createElement("div"),
		rJ = document.createElement("div"),
		rK = document.createElement("div"),
		rL = null,
		rR = (this.rM = new rN({
			value: "",
			e8: -1
		}, 0, rO, function(e) {
			e.target.value = bA.rY.rZ(e.target.value), rL.rX.textContent = 127 - e.target.value.length
		}), 0),
		rS = 1,
		rT = 0,
		rU = 1048575;

	function rO() {
		rG(), rL.rX.textContent = 127
	}

	function rj(ri, qR) {
		qR && (qR.ro = 1, ri.appendChild(bn.rp.transform(qR)))
	}

	function rm(bu) {
		rS ? rI.scrollTop = rI.scrollHeight : bu && (rI.scrollTop = rT)
	}
	this.ra = function(rb) {
			rU = 1048575, rJ.textContent = "", rb || this.mV()
		}, this.mV = function() {
			var rc = bn.y.rd[0],
				rc = bn.y.rf[rc],
				rg = rc.rg,
				en = rg.length,
				jR = 1048575 === rU ? 0 : en - (rc.rh - rU + 1048575) % 1048575;
			if (rU = rc.rh, !(en <= (jR = Math.max(jR, 0)))) {
				for (var ri = document.createDocumentFragment(), aB = jR; aB < en; aB++) rj(ri, bn.kx.rk(rg[aB], bn.kx.rl(rg[aB])));
				rJ.appendChild(ri), rm()
			}
		}, this.rn = function(r) {
			var ri = document.createDocumentFragment();
			rj(ri, r), rJ.appendChild(ri), rm()
		}, this.show = function(qT) {
			qT.appendChild(rI), qT.appendChild(rK), this.resize(qT)
		}, this.rq = function(qT) {
			qT.removeChild(rI), qT.removeChild(rK)
		}, this.resize = function(qT) {
			rR = qT ? qT.offsetHeight : rR;
			var qT = bA.qZ.rs(.04, .75),
				rt = Math.max(qT, rR - qT),
				ru = h.i / h.k,
				rv = .7 * ru,
				rt = (rK.style.top = bA.qZ.qi(rR - qT), rK.style.height = bA.qZ.qi(qT), rI.style.top = bA.qZ.qi(rR - qT - rt), rI.style.height = bA.qZ.qi(rt), bA.qZ.qj(rI, 2), this.rM.e.style.width = bA.qZ.qi(rv), this.rM.e.style.fontSize = rQ.button
					.style.fontSize = bA.qZ.qi(.5 * qT), bA.qZ.qj(this.rM.e, 6), rQ.button.style.left = bA.qZ.qi(rv), rQ.button.style.width = bA.qZ.qi(ru - rv), .385 * qT);
			a0.a1.hw() && (rt *= .8 - .12 * (h.i > h.j)), rJ.style.marginLeft = rJ.style.marginRight = bA.qZ.qi(.5 * rt), rJ.style.fontSize = bA.qZ.qi(rt), rm(1)
		}, (self = this).rM.e.rV = 127, rI.style.position = "absolute", rI.style.top = "0", rI.style.left = "0", rI.style.width = "100%", rI.style.overflowX = "hidden", rI.style.overflowY = "auto", rI.style.font = "inherit", rI.style
		.backgroundColor = bB.ng, rI.addEventListener("scroll", function() {
			rT = rI.scrollTop, rS = rT < rI.scrollHeight - rI.clientHeight - 2 ? 0 : 1
		}), rJ.style.font = "inherit", rK.style.position = "absolute", rK.style.left = "0", rK.style.width = "100%", self.rM.e.setAttribute("placeholder", L(13)), self.rM.e.style.position = "absolute", self.rM.e.style.top = "0", self.rM.e.style
		.left = "0", self.rM.e.style.height = "100%", self.rM.e.style.backgroundColor = bB.nd, self.rM.e.style.textAlign = "center", (rQ = new w(L(14), rO)).button.top = "0", rQ.button.style.position = "absolute", rQ.button.style.height = "100%", rQ
		.qt(bB.ou), rL = new rW("127", rQ.button, 1, 1), rI.appendChild(rJ), rK.appendChild(self.rM.e), rK.appendChild(rQ.button)
}

function rx(ry, qk, rz) {
	function click() {
		var value = 1 - ry.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qk, void 0 !== ry.e8 ? bj.s0.s1(ry.e8, value) : ry.value = value, rz && rz(value)
	}
	var e;
	qk = qk || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (ry.value ? "🟩 " : "⬜ ") + qk, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function s2(qT, qM) {
	var qE = document.createElement("div");
	this.qV = qE, this.resize = function() {
		qE.style.padding = bA.qZ.qi(bc.qf), qE.style.lineHeight = bA.qZ.qi(bA.qZ.rs(.035))
	}, qT.style.overflowX = "hidden", qT.style.overflowY = "auto", qE.innerHTML = qM, qT.appendChild(qE)
}

function s3(s4) {
	var qE = document.createElement("div");
	this.e = qE, this.s5 = s4, this.resize = function() {
		for (var en = s4.length, aB = 1; aB < en; aB++) bA.qZ.qj(s4[aB], 4)
	};
	var aB, en = s4.length;
	for (qE.style.width = "100%", qE.style.height = "2.7em", qE.style.marginTop = "0.6em", qE.style.border = "inherit", aB = 0; aB < en; aB++) s4[aB].style.verticalAlign = "top", s4[aB].style.width = (100 / en).toFixed(2) + "%", s4[aB].style.height =
		"100%", s4[aB].style.fontSize = "0.75em", qE.appendChild(s4[aB])
}

function s6(s7, qm, s8) {
	this.qE = document.createElement("div"), this.r8 = s7;
	var s9 = 0;
	this.resize = function(qT, sB) {
		var en = s7.length;
		if (!s8)
			for (var aB = 1; aB < en; aB++) bA.qZ.qj(s7[aB].button, 4);
		for (var sC = 0, aB = 0; aB < en; aB++) sC += s7[aB].button.offsetWidth;
		if (qT && (s9 = qT.offsetWidth), sB && sC < s9)
			for (aB = 0; aB < en; aB++) s7[aB].button.style.width = (100 * s7[aB].button.offsetWidth / sC).toFixed(2) + "%";
		else
			for (aB = 0; aB < en; aB++) s7[aB].button.style.width = "auto";
		sB || this.resize(qT, 1)
	};
	var sA = this;
	sA.qE.style.height = sA.qE.style.maxHeight = "100%";
	for (var aB = 0; aB < s7.length; aB++) s7[aB].qt(qm), s7[aB].button.style.height = "100%", s7[aB].button.style.padding = "0.0em 0.9em", sA.qE.appendChild(s7[aB].button)
}

function sD() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qZ.qj(this.e, 8, bB.nr)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sE() {
	var sI, sJ, sF = document.createElement("div"),
		sG = 0,
		sH = 0;
	this.show = function(eu, ew, qG, sK, sL) {
		if (sG) {
			if (!sK) return;
			this.rq()
		}
		eu === ew && -1 === eu ? (eu = sI, ew = sJ) : (sI = eu, sJ = ew), sL || (sH = sK), sG = 1;
		sL = h.i / h.k, sF.style.whiteSpace = "pre", sF.textContent = qG, bA.qZ.qj(sF, 5), sF.style.font = bA.qZ.sN(0, bA.qZ.rs(.015)), sF.style.padding = "0.3em 0.6em", sF.style.left = eu + "px", sF.style.top = "0px", document.body.appendChild(
			sF), sK = eu + sF.offsetWidth - sL;
		0 < sK && (sF.style.left = (qG = eu - sK) + "px", qG < 5) && (sF.style.whiteSpace = "pre-wrap"), sF.style.top = ew - sF.offsetHeight + sH * bc.sP + "px"
	}, this.rq = function(sQ) {
		if (sG) {
			if (sQ && sH) return 0;
			sG = 0, document.body.removeChild(sF)
		}
		return 1
	}, sF.style.position = "absolute", sF.style.backgroundColor = bB.ne, sF.style.color = bB.ni, sF.style.pointerEvents = "none", sF.style.zIndex = "5", sF.style.maxWidth = "100%"
}

function rN(sR, type, sS, sT) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sU++, e.value = sR.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.ni, e.style.backgroundColor = bB.nb, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sV++
		}), e.addEventListener("blur", function() {
			h.sV--, -1 !== sR.e8 && bj.s0.s1(sR.e8, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sR.e8 && bj.s0.s1(sR.e8, e.value), sS ? sS() : e.blur())
		}), sT && e.addEventListener("input", function(qR) {
			sT(qR)
		})
}

function sW(qT, data) {
	var en = data.sX.length,
		sY = document.createElement("div"),
		sZ = document.createElement("div"),
		sa = document.createElement("div"),
		sb = new Array(en),
		qU = new Array(en),
		sc = new Array(data.sd.length),
		se = bA.color.nc(70, 70, 0, .35);

	function r4() {
		this.style.backgroundColor = bA.color.r4(se, 160)
	}

	function sj() {
		this.style.backgroundColor = se
	}

	function qc() {
		var f6;
		for (qT.style.font = bA.qZ.sN(0, bA.qZ.st(.026, .5, .03)), aB = 1; aB < sc.length; aB++) bA.qZ.qj(sc[aB], 4);
		if (bA.qZ.qj(sY, 2), en) {
			for (var hF, su = sY.offsetWidth, sv = sa.offsetWidth, aB = 0; aB < sc.length; aB++) hF = .01 * data.si[aB] * sv, sc[aB].style.width = (100 * hF / su).toFixed(2) + "%";
			var l3 = data.sX[0].length;
			for (aB = 0; aB < en; aB++)
				for (bA.qZ.qj(sb[aB], 2), f6 = 1; f6 < l3; f6++) bA.qZ.qj(qU[aB][f6], 4);
			sZ.sf && (sZ.scrollTop = sZ.sf)
		}
	}
	this.resize = function() {
			qc(), qc()
		}, qT.style.display = "flex", qT.style.flexDirection = "column", sZ.style.overflowX = "hidden", sZ.style.overflowY = "auto", sZ.addEventListener("scroll", function() {
			this.sf = this.scrollTop
		}),
		function() {
			var eq, aB, sX = data.sX,
				l3 = en ? sX[0].length : 0;
			for (aB = 0; aB < en; aB++) {
				sb[aB] = document.createElement("div"), sb[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nc(130, 130, 130, .35) : bB.nh
				}(aB), sb[aB].style.width = "100%", sb[aB].style.display = "flex", qU[aB] = new Array(l3);
				for (var f6 = 0; f6 < l3; f6++) qU[aB][f6] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data
					.si[f6] + "%", eq.innerHTML = sX[aB][f6].fF, 1 === sX[aB][f6].dt && (eq.name = "" + aB, eq.style.color = bB.og, eq.style.backgroundColor = se, eq.addEventListener("mouseover", r4), eq.addEventListener("mouseout", sj), function(eq,
						sl, sm) {
						2147483647 !== sm && eq.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, sl), bH.dd(bD.aC), this.style.backgroundColor = se, t.u(8, t.sn, new so(25, {
								sp: 0,
								sl: bF.sq.sr(bF.sq.ss(5)),
								sm: sm
							}))
						})
					}(eq, sX[aB][f6].sl, sX[aB][f6].sm)), sb[aB].appendChild(eq)
			}
			for (sY.style.display = "flex", sY.style.backgroundColor = bA.color.nc(0, 120, 0, .35), aB = 0; aB < sc.length; aB++) sc[aB] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style
				.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data.si[aB] + "%", eq.innerHTML = data.sd[aB], sY.appendChild(eq)
		}();
	for (var aB = 0; aB < en; aB++) sa.appendChild(sb[aB]);
	sZ.appendChild(sa), qT.appendChild(sY), qT.appendChild(sZ)
}

function sw() {
	var t0, t1, sx = document.createElement("div"),
		sy = document.createElement("div"),
		sz = document.createElement("div"),
		sa = document.createElement("div"),
		r8 = [],
		e3 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		t2 = [1, 2, 3, 0, 9, 10, 11];

	function t4(aB) {
		t.u(8, 0, new so(21, {
			t6: t2[aB],
			t7: 0,
			t8: 10
		}))
	}
	this.show = function() {
			this.s1(t.y.t9), document.body.appendChild(sx)
		}, this.rq = function() {
			document.body.removeChild(sx)
		}, this.s1 = function(t9) {
			for (var tA = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < r8.length; aB++) {
				var i = t9[aB];
				t0[tA[aB]][1].rX.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tB = bc.gap,
				j = bA.qZ.tC(.085),
				i = Math.min(4 * j, h.i - 2 * tB),
				en = r8.length;
			for (bA.qZ.tD(sx, tB, h.j - tB - j, i, j), bA.qZ.qj(sx), bA.qZ.qj(sy, 6), aB = 0; aB < en - 1; aB++) bA.qZ.qj(r8[aB].button, 6);
			for (aB = 0; aB < en; aB++) t0[aB][0].resize(), t0[aB][1].resize();
			for (r8[0].eu = 0, r8[0].button.style.left = bA.qZ.qi(r8[0].eu), r8[0].button.style.width = bA.qZ.tE(1.7 * j), aB = 1; aB < en; aB++) r8[aB].eu = r8[aB - 1].eu + r8[aB - 1].button.offsetWidth, r8[aB].button.style.left = bA.qZ.qi(r8[aB]
				.eu);
			if (!t1) {
				if (!ab.tF()) return;
				(t1 = ab.get(14)).style.width = "24%", t1.style.position = "absolute", sy.appendChild(t1)
			}
			t1.style.left = bA.qZ.qi(0), t1.style.top = "7%", sz.tG && (sz.scrollLeft = sz.tG)
		}, sx.style.position = "absolute", sy.style.width = "25%", sy.style.height = "100%", sy.style.backgroundColor = bB.ne, sz.style.position = "absolute", sz.style.width = "75%", sz.style.height = "100%", sz.style.backgroundColor = bB.ne, sz
		.style.top = sz.style.right = bA.qZ.qi(0), bA.qZ.t3(sz), sa.style.height = sa.style.maxHeight = "100%", r8.push(new w("", function() {
			t4(0)
		}, bB.oS)), r8.push(new w("", function() {
			t4(1)
		}, bB.oT)), r8.push(new w("", function() {
			t4(2)
		}, bB.oL)), r8.push(new w("", function() {
			t4(3)
		}, bB.o6)), r8.push(new w("", function() {
			t4(4)
		}, bB.op)), r8.push(new w("", function() {
			t4(5)
		}, bB.on)), r8.push(new w("", function() {
			t4(6)
		}, bB.op)), t0 = new Array(r8.length);
	for (var aB = 0; aB < r8.length; aB++) r8[aB].button.style.position = "absolute", t0[aB] = [new t5(e3[aB], r8[aB].button, .25, .45), new t5("", r8[aB].button, .53, .84, 1)], r8[aB].button.style.height = r8[aB].button.style.maxHeight = "100%", r8[
		aB].button.top = bA.qZ.qi(0), sa.appendChild(r8[aB].button);
	sz.appendChild(sa), sx.appendChild(sy), sx.appendChild(sz)
}

function tH(tI, tJ, tK, tL, rG, rH) {
	var tM = document.createElement("div"),
		tN = document.createElement("div"),
		tO = document.createElement("div"),
		tP = document.createElement("div"),
		tQ = document.createElement("div"),
		tR = document.createElement("div"),
		tS = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("span"),
		tV = document.createElement("div");
	this.tW = new rF(rG, rH), this.tX = new tY(rH), this.tZ = [tI, tJ, tK, tL], this.td = function(te) {
		te = (te / 10).toFixed(1) + "%";
		tT.style.width = te, tU.innerHTML = te
	}, this.tf = function() {
		this.tX.rq(tR), this.tW.show(tR)
	}, this.tg = function() {
		this.tW.rq(tR), this.tX.show(tR)
	}, this.th = function() {
		return tN
	}, this.show = function() {
		document.body.appendChild(tM)
	}, this.rq = function() {
		document.body.removeChild(tM)
	}, this.resize = function(ti) {
		var tj = 1 - .4 * a0.a1.hw() * (h.i > 1.6 * h.j),
			tk = bA.qZ.rs(.05 * tj),
			tl = h.j > h.i,
			tm = bA.qZ.rs(.07 * tj + .03 * tl),
			tn = bA.qZ.rs(.04 + .02 * tl),
			tl = bA.qZ.rs(.02 * tj + .01 * tl),
			tp = bA.qZ.rs(.025);
		tM.style.font = bA.qZ.sN(0, tp), tj < 1 && (tp = bA.qZ.sN(0, tj * tp), tO.style.font = tp, tQ.style.font = tp, tV.style.font = tp, tS.style.font = tp, tP.style.font = tp), tN.style.height = bA.qZ.qi(tk), tN.style.font = bA.qZ.sN(0, .72 *
				tk), bA.qZ.qj(tN, 2), tO.style.top = bA.qZ.qi(tk), tO.style.height = bA.qZ.qi(tm), bA.qZ.qj(tO, 2), tP.style.font = bA.qZ.sN(0, tj * bA.qZ.rs(.02)), tP.style.top = bA.qZ.qi(tk + tm), tP.style.height = bA.qZ.qi(tn), bA.qZ.qj(tP,
			2), tQ.style.top = bA.qZ.qi(tk + tm + tn), tQ.style.height = bA.qZ.qi(tm), bA.qZ.qj(tQ, 2), tR.style.top = bA.qZ.qi(tk + tm + tn + tm), tR.style.height = bA.qZ.qi(h.j / h.k - tk - 3 * tm - tn - tl), tS.style.top = bA.qZ.qi(h.j / h.k -
				tm - tl), tS.style.height = bA.qZ.qi(tl), bA.qZ.qj(tS, 8), tU.style.font = bA.qZ.sN(0, .8 * tl), tV.style.top = bA.qZ.qi(h.j / h.k - tm), tV.style.height = bA.qZ.qi(tm), bA.qZ.qj(tV, 8), tI.resize(tO), tJ.resize(tO), tK.resize(
			tO), tL.resize(tO), ti ? this.tW.resize(tR) : this.tX.resize()
	};
	rG = this;
	tM.style.position = "absolute", tM.style.top = "0", tM.style.left = "0", tM.style.width = "100%", tM.style.height = "100%", tM.style.backgroundColor = bB.nh, bJ.r1() || (tM.style.backdropFilter = "blur(4px)", tM.style.webkitBackdropFilter =
		"blur(4px)"), tN.style.position = "absolute", tN.style.top = "0", tN.style.left = "0", tN.style.width = "100%", tN.style.display = "flex", tN.style.alignItems = "center";
	for (var g = [tO, tP, tQ, tV], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qZ.t3(g[aB]);
	tR.style.position = "absolute", tR.style.left = "0", tR.style.width = "100%", tR.style.font = "inherit", tS.style.position = "absolute", tS.style.left = "0", tS.style.width = "100%", tT.style.position = "absolute", tT.style.top = "0", tT.style
		.left = "0", tT.style.height = "100%", tT.style.width = "50%", tT.style.backgroundColor = bB.o4, tU.innerHTML = "", tU.style.position = "absolute", tU.style.top = "50%", tU.style.left = "50%", tU.style.transform = "translate(-50%, -50%)", tN
		.appendChild(function() {
			var tc = document.createElement("h1");
			return tc.textContent = L(23), tc.style.margin = "0 auto 0.15em auto", tc.style.webkitTextStroke = "0.02em brown", tc.style.fontFamily = "Arial Black, Trebuchet MS", tc.style.fontSize = "inherit", tc.style.fontWeight = "inherit", tc
		}()), tO.appendChild(tI.qE), tP.appendChild(tJ.qE), tQ.appendChild(tK.qE), tS.appendChild(tT), tS.appendChild(tU), tV.appendChild(tL.qE), tM.appendChild(tN), tM.appendChild(tO), tM.appendChild(tP), tM.appendChild(tQ), tM.appendChild(tR), tM
		.appendChild(tS), tM.appendChild(tV), rG.tX.show(tR)
}

function tY(rH) {
	var tM = document.createElement("div"),
		tR = document.createElement("div");
	this.mV = function() {
			tR.textContent = "", bn.tr.rq(1);
			for (var ri = document.createDocumentFragment(), ts = bn.y.rd[0], tt = bn.tt.tu[ts], tv = bn.tt.tv[ts], aB = 0; aB < tt.length; aB++) ! function(ri, qR, tx, ts) {
				var rX = document.createElement("span");
				rX.textContent = (tx ? "🟢 " : "⚪ ") + bn.kx.ty(qR, ts), rX.style.color = bn.kx.tz(qR.u0), rX.style.cursor = "pointer", rX.style.margin = "0.2em 0.2em 0.2em 0.2em", rX.style.width = rX.style.maxWidth = 2 === ts ? "10em" : "9em",
					rX.style.height = rX.style.maxHeight = "1.4em", rX.style.whiteSpace = "nowrap", rX.style.overflow = "hidden", rX.style.textOverflow = "ellipsis", rX.style.font = "inherit", rX.style.display = "inline-block", bn.kx.u1(qR) && (
						rX.style.textDecoration = "underline"), rX.onclick = function(e) {
						rH(e, qR)
					}, bJ.r1() || (rX.onmouseover = function(e) {
						bn.tr.u2(e, qR, 1)
					}), ri.appendChild(rX)
			}(ri, tt[aB], aB < tv, ts);
			tR.appendChild(ri)
		}, this.show = function(qT) {
			qT.appendChild(tM)
		}, this.rq = function(qT) {
			qT.removeChild(tM)
		}, this.resize = function() {
			tR.style.fontSize = bA.qZ.qi(bA.qZ.rs(.02, .3))
		}, tM.style.top = "0", tM.style.left = "0", tM.style.width = tM.style.height = "100%", tM.style.overflowX = "hidden", tM.style.overflowY = "auto", tM.style.font = "inherit", tR.style.font = "inherit", tR.style.margin = "0.4em", tM
		.appendChild(tR)
}

function u3(u4) {
	var tM = document.createElement("div"),
		rK = document.createElement("div"),
		u5 = [];

	function qw() {
		bJ.r1() || (this.style.backgroundColor = bA.color.r4(bB.ne, 50))
	}

	function qx() {
		this.style.backgroundColor = bB.ne
	}
	this.s1 = function(u7, u8) {
			u5[2].textContent = u7 + 1 + " / " + u8
		}, this.show = function(qR) {
			rK.appendChild(bn.rp.transform(bn.kx.rk(qR, bn.kx.rl(qR)))), document.body.appendChild(tM)
		}, this.resize = function() {
			var j = bA.qZ.rs(.03, .5);
			tM.style.width = 10 * j + "px", tM.style.font = bA.qZ.sN(1, .75 * j), bA.qZ.qj(tM, 4), rK.style.top = j + "px", rK.style.font = bA.qZ.sN(0, .55 * j), bA.qZ.qj(rK, 2), tM.style.height = j + rK.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qZ.qj(u5[aB], 6), u5[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u5[aB].style.height = j + "px", bA.qZ.qj(u5[aB], 2);
			u5[2].style.width = 4 * j + "px", u5[1].style.left = 2 * j + "px", u5[2].style.left = 4 * j + "px", u5[3].style.left = 8 * j + "px"
		}, this.u9 = function() {
			for (var aB = 0; aB < 4; aB++) u5[aB].onclick = null, u5[aB].onmouseover = null, u5[aB].onmouseout = null;
			document.body.removeChild(tM), tM = rK = u5 = null
		}, tM.style.position = "absolute", tM.style.color = bB.ni, tM.style.zIndex = "3", tM.style.right = "0", tM.style.top = "0", rK.style.position = "absolute", rK.style.height = "auto", rK.style.color = bB.ni, rK.style.backgroundColor = bB.ne, rK
		.style.left = "0", rK.style.width = "100%", rK.style.overflowWrap = "break-word", tM.appendChild(rK);
	for (var aB = 0; aB < 4; aB++) u5[aB] = document.createElement("div"), u5[aB].style.position = "absolute", u5[aB].style.backgroundColor = bB.ne, u5[aB].style.color = bB.ni, u5[aB].style.top = "0", u5[aB].style.display = "flex", u5[aB].style
		.justifyContent = "center", u5[aB].style.alignItems = "center", u5[aB].style.userSelect = "none", u5[aB].style.outline = "none", u5[aB].style.font = "inherit", 2 !== (u5[aB].u6 = aB) && (u5[aB].onclick = u4, u5[aB].onmouseover = qw, u5[aB]
			.onmouseout = qx), tM.appendChild(u5[aB]);
	u5[0].textContent = "◀", u5[1].textContent = "▶", u5[3].textContent = "✖"
}

function uA(u4) {
	var sF = document.createElement("div");

	function qw() {
		bJ.r1() || (sF.style.backgroundColor = bA.color.r4(bB.ne, 50))
	}

	function qx() {
		sF.style.backgroundColor = bB.ne
	}
	this.s1 = function(u8) {
			sF.textContent = u8
		}, this.show = function() {
			document.body.appendChild(sF)
		}, this.resize = function() {
			var j = bA.qZ.rs(.03, .5);
			sF.style.width = 2 * j + "px", sF.style.height = j + "px", sF.style.font = bA.qZ.sN(1, .75 * j), bA.qZ.qj(sF, 4), bA.qZ.qj(sF, 2)
		}, this.u9 = function() {
			sF.onclick = null, sF.onmouseover = null, sF.onmouseout = null, document.body.removeChild(sF), sF = null
		}, sF.style.position = "absolute", qx(), sF.style.color = bB.ni, sF.style.zIndex = "3", sF.style.right = "0", sF.style.top = "0", sF.style.display = "flex", sF.style.justifyContent = "center", sF.style.alignItems = "center", sF.style
		.userSelect = "none", sF.style.outline = "none", sF.onclick = u4, sF.onmouseover = qw, sF.onmouseout = qx
}

function uB(s7) {
	var tM = document.createElement("div"),
		uC = document.createElement("div"),
		sG = (this.eu = 0, this.ew = 0);

	function uE() {
		bn.uF.rq()
	}
	this.r8 = s7, this.show = function(eu, ew, uH) {
		if (sG) return [0, 0];
		sG = 1, this.eu = eu, this.ew = ew,
			function(self, uH) {
				var i = bA.qZ.rs(.16, .7),
					j = s7.length * i / 3,
					uJ = h.i / h.k,
					uK = h.j / h.k,
					nK = Math.min(1, Math.min(uJ / i, uK / j));
				i *= nK, j *= nK, uH && (self.eu += bA.qZ.rs(.03, .5)), self.eu = bL.hv(self.eu, 0, uJ - i), self.ew = bL.hv(self.ew, 0, uK - j), uC.style.left = self.eu + "px", uC.style.top = self.ew + "px", uC.style.width = i + "px", uC.style
					.height = j + "px", uC.style.font = bA.qZ.sN(0, .34 * j / s7.length), bA.qZ.qj(uC, 5);
				for (var aB = 1; aB < s7.length; aB++) bA.qZ.qj(s7[aB].button, 8)
			}(this, uH), document.body.appendChild(tM)
	}, this.rq = function() {
		sG && (sG = 0, tM.removeEventListener("click", uE), document.body.removeChild(tM))
	};
	for (var aB = 0; aB < s7.length; aB++) new rW("" + (1 + aB), s7[aB].button, 0, 1);
	tM.style.position = "fixed", tM.style.top = "0", tM.style.left = "0", tM.style.width = "100%", tM.style.height = "100%", tM.style.zIndex = "5", uC.style.position = "absolute",
		function() {
			for (var uG = (100 / s7.length).toFixed(2) + "%", aB = 0; aB < s7.length; aB++) s7[aB].button.style.width = "100%", s7[aB].button.style.height = s7[aB].button.style.maxHeight = uG, s7[aB].button.style.padding = "0.0em 0.9em", uC
				.appendChild(s7[aB].button)
		}(), tM.appendChild(uC), tM.addEventListener("click", uE)
}

function uL(sR, uM) {
	this.qP = [];
	var uN = this.qP;

	function click() {
		for (var aB = 0; aB < uN.length; aB++) uN[aB].textContent = uN[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e8 = parseInt(this.name);
		void 0 !== sR.e8 && bj.s0.s1(sR.e8, e8), uM && uM(e8)
	}
	for (var uO, en = sR.uP.length, aB = 0; aB < en; aB++)(uO = document.createElement("p")).textContent = "⚪ " + sR.uP[aB], uO.style.margin = "0", uO.name = "" + aB, uO.style.cursor = "pointer", uO.style.fontSize = "1em", uO.addEventListener(
		"click", click), uN.push(uO);
	uN[sR.value].textContent = uN[sR.value].textContent.replace("⚪", "🟢")
}

function uQ(title, uR, uS) {
	var sx = document.createElement("div"),
		uT = document.createElement("div"),
		sa = document.createElement("div"),
		uU = document.createElement("div"),
		uV = document.createElement("div");
	this.uW = sa, this.uX = uR, this.show = function() {
			!1 !== uS ? document.body.appendChild(sx) : (document.body.appendChild(uT), document.body.appendChild(uU))
		}, this.rq = function() {
			!1 !== uS ? document.body.removeChild(sx) : (document.body.removeChild(uT), document.body.removeChild(uU))
		}, this.ub = function() {
			var rt = bA.qZ.rs(.1),
				rr = bA.qZ.rs(.08 + .04 * (h.uc < 1));
			return {
				rt: rt,
				rr: rr,
				ud: h.j / h.k - rt - rr
			}
		}, this.resize = function(sB) {
			var en = uR.length,
				ue = this.ub(),
				rt = ue.rt,
				rr = ue.rr;
			for (uT.style.height = bA.qZ.qi(rt), bA.qZ.qj(uT, 2), uU.style.top = bA.qZ.qi(h.j / h.k - rr), uU.style.height = bA.qZ.qi(rr), bA.qZ.qj(uU, 8), sa.style.top = bA.qZ.qi(rt), sa.style.height = sa.style.maxHeight = bA.qZ.qi(ue.ud), uT.style
				.font = bA.qZ.sN(0, bA.qZ.rs(.02, .3)), uU.style.font = bA.qZ.sN(0, bA.qZ.rs(.02, .7)), sa.style.font = bA.qZ.sN(0, bA.qZ.rs(.02, .7)), aB = 1; aB < en; aB++) bA.qZ.qj(uR[aB].button, 4);
			for (var sC = 0, aB = 0; aB < en; aB++) sC += uR[aB].button.offsetWidth;
			if (sB && sC < uU.offsetWidth)
				for (aB = 0; aB < en; aB++) uR[aB].button.style.width = (100 * uR[aB].button.offsetWidth / sC).toFixed(2) + "%";
			else
				for (aB = 0; aB < en; aB++) uR[aB].button.style.width = "auto";
			uU.tG && (uU.scrollLeft = uU.tG), sB || this.resize(!0)
		}, this.uf = function() {
			var ue = this.ub(),
				f8 = h.k;
			ug.fillStyle = bB.ne, ug.fillRect(0, f8 * ue.rt, h.i, f8 * ue.ud)
		}, sx.style.position = "absolute", sx.style.top = "0", sx.style.left = "0", sx.style.width = "100%", sx.style.height = "100%", uT.style.position = "absolute", uT.style.top = "0", uT.style.left = "0", uT.style.width = "100%", uT.style
		.display = "flex", uT.style.backgroundColor = bB.ne, uU.style.position = "absolute", uU.style.left = "0", uU.style.width = "100%", bA.qZ.t3(uU), uV.style.height = uV.style.maxHeight = "100%", sa.style.position = "absolute", sa.style.width =
		"100%", sa.style.backgroundColor = bB.ne,
		function() {
			for (var aB = 0; aB < uR.length; aB++) uR[aB].button.style.height = "100%", uR[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uR.length; aB++) uV.appendChild(uR[aB].button);
	uT.appendChild(function() {
		var ua = document.createElement("h1");
		return ua.textContent = title, ua.style.margin = "auto", ua.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", ua.style.webkitTextStroke = "0.02em brown", ua.style.fontFamily = "Arial Black, Trebuchet MS", ua
	}()), uU.appendChild(uV), !1 !== uS && (sx.appendChild(sa), sx.appendChild(uT), sx.appendChild(uU))
}

function rW(uh, ui, uj, uk) {
	var self;
	this.rX = document.createElement("span"), (self = this).rX.textContent = uh, self.rX.style.color = bB.ni, self.rX.style.position = "absolute", self.rX.style.font = "inherit", uk ? self.rX.style.bottom = "0.06em" : self.rX.style.top = "0.12em",
		uj ? self.rX.style.left = "0.2em" : self.rX.style.right = "0.2em", self.rX.style.fontSize = "0.6em", self.rX.style.pointerEvents = "none", self.rX.style.whiteSpace = "pre", ui.style.position = "relative", ui.style.overflow = "hidden", ui
		.appendChild(self.rX)
}

function t5(uh, ui, ul, um, un) {
	var self;
	this.rX = document.createElement("span"), this.resize = function() {
			this.rX.style.fontSize = ((um - ul) * ui.offsetHeight).toFixed(1) + "px"
		}, (self = this).rX.textContent = uh, self.rX.style.color = bB.ni, self.rX.style.font = "inherit", self.rX.style.margin = "0.1em 0.6em", self.rX.style.pointerEvents = "none", un && (self.rX.style.fontWeight = "bold"), self.rX.style
		.whiteSpace = "nowrap", self.rX.style.display = "block", ui.appendChild(self.rX)
}

function uo(up, uq, ur, us) {
	var ut = document.createElement("textarea"),
		uu = (this.e = ut, !0);

	function v0() {
		ut.select(), document.execCommand("copy")
	}
	this.resize = function() {
			uq && bA.qZ.qj(ut, 5)
		}, this.uv = function(uw) {
			ut.value = uw
		}, this.ux = function() {
			return ut.value
		}, this.uy = function() {
			ut.select()
		}, this.clear = function() {
			ut.value = ""
		}, this.uz = function() {
			uu && navigator.clipboard ? (ut.select(), navigator.clipboard.writeText(ut.value).catch(function() {
				uu = !1, v0()
			})) : v0()
		}, ut.setAttribute("id", "textArea" + t.y.sU++), ut.setAttribute("autocomplete", "off"), up && ut.setAttribute("placeholder", up), ut.style.top = "0", ut.style.left = "0", ut.style.width = "100%", ut.style.height = "100%", ut.style
		.userSelect = "none", ut.style.outline = "none", ut.style.resize = "none", ut.style.border = "none", ut.style.color = bB.ni, ut.style.backgroundColor = bB.nb, us ? (ut.style.fontSize = "1em", ut.rows = 6, ut.style.padding = "0.25em") : (ut
			.style.padding = "0.45em", ut.style.fontSize = "1.2em"), ur && ut.addEventListener("input", function(e) {
			ur(e)
		}), ut.addEventListener("focus", function() {
			h.sV++
		}), ut.addEventListener("blur", function() {
			h.sV--
		})
}

function dI() {
	this.qq = new v1, this.eK = new v2, this.s0 = new v3, this.y = new v4, this.dd = function() {
		this.eK.dd(), (new v5).dd()
	}
}

function v2() {
	function v6(aB, type, vD, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type || 0,
			value: vD || 0,
			vD: vD || 0,
			dv: dv || 0
		})
	}

	function v7(aB, type, vD, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type,
			value: vD || "",
			vD: vD || "",
			dv: dv || 0
		})
	}

	function v8(nQ) {
		for (var aB = bj.eK.data.length; aB < nQ; aB++) bj.eK.data.push(null)
	}
	this.data = [], this.dd = function() {
		v6(0, 1, 0, 5), v6(1, 1, 1), v6(2, 0), v7(3, 2), v6(4, 1), v7(5, 2, "Trebuchet MS", 1), v6(6, 0), v6(7, 0, 0), v6(8, 0), v6(9, 1, 1), v6(10, 1), v6(11, 1, 1), v7(12, 2, navigator.language), v6(13), v6(14), v8(100), v7(100, 2), v7(101, 2),
			v7(102, 2), v7(103, 2), v7(104, 2), v7(105, 2), v7(106, 2), v6(107), v6(108), v6(109), v7(110, 2), v6(111), v6(112), v6(113), v7(114, 2), v6(115), v7(116, 2), v6(117, 1), v7(118, 2, "", 2), v6(119, 1, 0, 1), v7(120, 2), v6(121, 1, ~~(
				262144 * Math.random())), v7(122, 2, "Player " + Math.floor(1e3 * Math.random())), v6(123), v7(124), v6(125, 1), v7(126, 2), v6(127, 0, 1), v6(128), v6(129), v6(130), v6(131), v6(132), v7(133, 2), v6(134, 0, 5), v7(135, 2), v7(
				136, 2), v6(137), v6(138), v6(139), v6(140), v6(141), v6(142), v6(143), v6(144), v7(145, 2), v6(146), v6(147), v7(148, 2), v6(149), v6(150, 0, 1), v7(151, 2), v6(152, 0, 5), v6(153, 1), v6(154, 1), v7(155, 2), v7(156, 2), v6(157),
			v6(158), v6(159), v6(160), v8(180), v6(180, 0), v6(181, 0)
	}, this.s1 = function(e8, value) {
		this.data[e8].value = value
	}, this.v9 = function(e8, value) {
		this.s1(e8, value), bj.qq.save(e8, String(value)), bj.qq.save(e8, String(this.data[e8].dv), !0)
	}, this.vA = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bj.qq.save(aB, String(this.data[aB].value)), bj.qq.save(aB, String(this.data[aB].dv), !0))
	}, this.vB = function(e8) {
		return Number(this.data[e8].value)
	}, this.vC = function(e8) {
		return String(this.data[e8].value)
	}
}

function v1() {
	this.vE = function(e8, dv) {
		return Number(this.vF(e8, dv))
	}, this.vF = function(e8, dv) {
		var fF = null;
		return 0 === a0.id ? a0.vG && (fF = a0.vG.getItem((dv ? "v" : "d") + e8)) : 1 === a0.id ? fF = a0.vH.loadString((dv ? 1e3 : 2e3) + e8) : 2 === a0.id && (fF = a0.vI[(dv ? "v" : "d") + e8]), fF && 0 !== fF.length ? fF : null
	}, this.vJ = function(en, vK) {
		var g = [],
			vL = vK ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vG)
				for (aB = 0; aB < en; aB++) g.push(a0.vG.getItem(vL + aB))
		} else if (1 === a0.id)
			for (var vM = vK ? 5e3 : 3e3, aB = 0; aB < en; aB++) g.push(a0.vH.loadString(vM + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) g.push(a0.vI[vL + aB]);
		return g
	}, this.save = function(e8, value, dv) {
		var vN = (dv ? "v" : "d") + e8;
		if (0 === a0.id) {
			if (a0.vG && bj.eK.data[140].value) try {
				a0.vG.setItem(vN, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vH.saveString((dv ? 1e3 : 2e3) + e8, value) : 2 === a0.id && (a0.vI[vN] = value, a0.vO.postMessage(vN + " " + value))
	}, this.vP = function(g, vK) {
		var en = g.length,
			vL = vK ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vG && bj.eK.data[140].value) try {
				for (aB = 0; aB < en; aB++) a0.vG.setItem(vL + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vM = vK ? 5e3 : 3e3, aB = 0; aB < en; aB++) a0.vH.saveString(vM + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) a0.vI[vL + aB] = g[aB], a0.vO.postMessage(vL + aB + " " + g[aB])
	}
}

function v5() {
	this.dd = function() {
		! function() {
			var data = bj.eK.data;
			0 === data[2].dv && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vD = 1);
			0 === data[100].dv && (data[100].value = data[100].vD = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fF, data = bj.eK.data,
			en = data.length;
		for (aB = 0; aB < en; aB++) data[aB] && data[aB].dv === bj.qq.vE(aB, !0) && (fF = bj.qq.vF(aB), data[aB].value = null === fF ? data[aB].vD : 2 === data[aB].type ? fF : Number(fF))
	}
}

function v4() {
	function vV(g) {
		if (0 === g.length) bj.s0.s1(116, "");
		else {
			for (var vY = g[0], aB = 1; aB < g.length; aB++) vY += ";" + g[aB];
			bj.s0.s1(116, vY)
		}
	}
	this.vS = function() {
		bj.eK.data[110].value.length && (bj.eK.data[106].value = bj.eK.data[110], bj.s0.s1(110, ""), this.vT())
	}, this.vT = function() {
		var g = bj.eK.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eK.data[106].value), g.unshift(bj.eK.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vU = [], aB = 0; aB < g.length; aB += 2) vU.push(g[aB]);
		vV(g), bj.eK.data[117].value = 0, bj.eK.data[117].uP = vU
	}, this.vW = function(e8) {
		bj.eK.data[117].uP.splice(e8, 1), bj.eK.data[117].value = Math.min(e8, bj.eK.data[117].uP.length - 1);
		var g = bj.eK.data[116].value.split(";");
		g.splice(2 * e8, 2), vV(g)
	}, this.vX = function(e8) {
		var g = bj.eK.data[116].value.split(";");
		return {
			sl: g[2 * e8],
			password: g[2 * e8 + 1]
		}
	}, this.vZ = function() {
		var fF = bL.hv(bj.eK.data[121].value, -1, 262143);
		return fF = -1 === fF ? ~~(262144 * Math.random()) : fF
	}
}

function v3() {
	this.s1 = function(e8, value) {
		bj.eK.data[e8].value !== value && (bj.eK.v9(e8, value), 0 === e8 ? (t.x(), b7.dd(), t.u(2)) : 1 === e8 ? h.dp(1) : 2 === e8 ? h.dp(0) : 5 === e8 && (bA.qZ.va(), h.dp(0)))
	}, this.vb = function() {
		for (var data = bj.eK.data, aB = 0; aB < 100; aB++) data[aB] && bj.eK.v9(aB, data[aB].vD);
		bA.qZ.va(), h.dp(1), b7.dd()
	}, this.vc = function() {
		for (var data = bj.eK.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eK.s1(aB, data[aB].vD)
	}, this.vd = function() {
		for (var f7 = bj.eK, aB = 128; aB < 135; aB++) f7.v9(aB, f7.data[aB].vD)
	}, this.ve = function(data) {
		bj.s0.s1(109, data.sm), bj.s0.s1(107, data.vf), bj.s0.s1(108, data.vg), bj.s0.s1(112, data.vh), bj.s0.s1(111, data.vi), bj.s0.s1(113, data.vj), bj.s0.s1(135, data.vk), bj.s0.s1(136, data.vl), bj.s0.s1(137, data.vm), bj.s0.s1(138, data
			.vn), bj.s0.s1(139, data.vo), bj.s0.s1(141, data.vp), bj.s0.s1(142, data.vq), bj.s0.s1(143, data.vr), bj.s0.s1(144, data.vs)
	}
}

function c4() {
	this.sq = new vt, this.vu = new vv, this.vw = new vx, this.dd = function() {
		this.sq.dd()
	}
}

function vv() {
	this.vy = function(size) {
		for (var vz = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vz.pg(16)));
		return g.join("")
	}, this.w0 = function(qG) {
		return 20 < (qG = qG.trim()).length ? qG.substring(0, 20) : qG
	}
}

function vt() {
	var w1 = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (w1[50] = 37, aB = 0; aB < 10; aB++) w1[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) w1[aB + 20] = aB + 11, w1[aB + 52] = aB + 38
	}, this.w2 = function(qG) {
		return qG.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.w3 = function(qG, size) {
		if ((qG = this.w2(qG)).length > size) return qG.substring(0, size);
		for (; qG.length < size;) qG = "-" + qG;
		return qG
	}, this.w4 = function(qG) {
		for (var w5 = w1, en = qG.length, g = new Uint8Array(en), aB = 0; aB < en; aB++) g[aB] = w5[qG.charCodeAt(aB) - 45];
		return g
	}, this.w6 = function(w7) {
		bD.a7(6 * w7.length), this.w8(w7), bH.dd(bD.aC)
	}, this.w8 = function(w7) {
		for (var en = w7.length, i = bD, aB = 0; aB < en; aB++) i.a8(6, w7[aB])
	}, this.w9 = function(qG) {
		this.w8(this.w4(qG))
	}, this.wA = function(qG, size) {
		this.w8(this.w4(this.w3(qG, size)))
	}, this.wB = function(qG, size) {
		for (var g = this.w4(this.w3(qG, size)), fF = 0, nK = 1, aB = g.length - 1; 0 <= aB; aB--) fF += nK * g[aB], nK *= 64;
		return fF
	}
}

function wC() {
	var i, j, wD;

	function wd(hF, eq, wb, wI, wW) {
		eq = wc(hF, eq + 1 + 2 * wI & 3);
		! function(hF, kl) {
			return 1 < Math.abs(hF % i - kl % i) || 1 < Math.abs(wg(hF) - wg(kl))
		}(hF, eq) && 0 === wW[eq << 2] && (wW[eq << 2] = wb)
	}

	function wg(gL) {
		return Math.floor((gL + .5) / i) % j
	}

	function wc(gL, eq) {
		return gL + wD[eq]
	}
	this.wE = function(qG) {
		var aB, wF, en, wG, vz = bH;
		for (bG.sq.w6(bG.sq.w4(qG)), bS.wJ.wK[bS.eT].i = bS.ey = i = vz.pg(12), bS.wJ.wK[bS.eT].j = bS.ez = j = vz.pg(12), wD = [-i, -1, i, 1], bS.wT = document.createElement("canvas"), bS.wT.width = bS.ey, bS.wT.height = bS.ez, bS.wP = bS.wT
			.getContext("2d", {
				alpha: !1
			}), bS.wQ = bS.wU = null, bS.wQ = bS.wP.getImageData(0, 0, bS.ey, bS.ez), bS.wU = bS.wQ.data, bA.qh.wV(bS.wU), en = vz.pg(12), wF = vz.pg(5), wG = wM(i * j - 1), aB = 0; aB < en; aB++) ! function(l3, gL, wH, wI) {
			var aB, eq, vz = bH,
				wW = bS.wU,
				wX = gL,
				wY = gL,
				wZ = 0,
				wa = 1 + wH,
				wb = 2 - wH;
			for (wW[gL << 2] = wa, aB = 0; aB < l3; aB++) eq = vz.pg(2), gL = wc(gL, eq), wW[gL << 2] === wa ? wZ % 2 == 1 && wd(wY, wZ + 2 * wI + 3, wb, wI, wW) : wW[gL << 2] = wa, wd(gL, eq, wb, wI, wW), wd(wY, eq, wb, wI, wW), wY = gL,
				wZ = eq;
			wc(gL, 0) === wX ? (wd(gL, 0, wb, wI, wW), wd(wX, 0, wb, wI, wW)) : wc(gL, 1) === wX && (wd(gL, 0, wb, wI, wW), wd(wX, 2, wb, wI, wW));
			0 === l3 && (wd(wX, 0, wb, wI, wW), wd(wX, 2, wb, wI, wW))
		}(vz.pg(wF), vz.pg(wG), 1 === vz.pg(1), 1 === vz.pg(1));
		var eu, ew, hf, wh, wi, wj, wW = bS.wU,
			wk = !0,
			wl = bS.wJ.wK[bS.eT].wl,
			wm = bS.wJ.wK[bS.eT].wm;
		for (ew = 0; ew < j; ew++)
			for (wh = !0, wi = wk, eu = wj = 0; eu < i; eu++) hf = 4 * ew * i + 4 * eu, wj <= eu && 0 < wW[hf] && (wi = 2 === wW[hf], wh) && (wh = !1, wi !== wk) ? (wk = wi, wj = eu + 1, eu = -1) : (wi ? (wW[hf] = wm[0], wW[1 + hf] = wm[1], wW[
				2 + hf] = wm[2]) : (wW[hf] = wl[0], wW[1 + hf] = wl[1], wW[2 + hf] = wl[2]), wW[3 + hf] = 255);
		bS.wP.putImageData(bS.wQ, 0, 0), bS.wR = !0, bS.wS.dd(), bf.dl = !0
	}
}

function vx() {
	this.wE = function(wn) {
		for (var vz = bH, size = vz.pg(wn), wo = 7 + 9 * vz.pg(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vz.pg(wo)));
		return g.join("")
	}
}

function c9() {
	var sI, sJ, wp, wq, wr, ws, wt, wu, wv, ww;

	function wy() {
		var x1 = aD.x1;
		for (wv = x1; wv < aD.ek; wv++) wx();
		for (wv = aD.hB ? aD.kA : 0; wv < x1; wv++) {
			if (!x2()) {
				for (var f7 = aD.x6 = wv; f7 < x1; f7++) wv = f7, wx();
				return
			}
			x5(ws + sI * wr + bL.du(wr, 2), wt + sJ * wr + bL.du(wr, 2))
		}
	}

	function xY(player) {
		for (var ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, ew = ih[player]; ew <= ii[player]; ew++)
			for (var eu = ie[player]; eu <= ig[player]; eu++) {
				var eR = ac.xZ(eu, ew);
				ac.gN(eR) && (ac.jM(eR) ? ac.gI(eR, player) : ac.xa(eR, player))
			}
	}

	function xX(g, t7, t8) {
		var dt = g[t7];
		g[t7] = g[t8], g[t8] = dt
	}

	function x2() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sI = bL.du(wp * ay.random(), ay.value(100)), sJ = bL.du(wq * ay.random(), ay.value(100)), xf()) return 1;
			return
		}() || function() {
			var i7, iA, f6, x4, f7, x3;
			for (i7 = bL.du(wp * ay.random(), ay.value(100)), iA = bL.du(wq * ay.random(), ay.value(100)), f6 = 40; 1 <= f6; f6--)
				for (x4 = wq - f6; 0 <= x4; x4 -= 40)
					for (sJ = (x4 + iA) % wq, f7 = 40; 1 <= f7; f7--)
						for (x3 = wp - f7; 0 <= x3; x3 -= 40)
							if (sI = (x3 + i7) % wp, xf()) return 1;
			return
		}()
	}

	function xf() {
		for (var gL, xh, gap = bL.du(wr - wu, 2), xi = wt + sJ * wr + gap, xj = ws + sI * wr + gap, xg = xi + wu - 1; xi <= xg; xg--)
			for (xh = xj + wu - 1; xj <= xh; xh--)
				if (gL = ac.xZ(xh, xg), !ac.ei(gL) || ac.jM(gL)) return;
		return 1
	}

	function x5(x3, x4) {
		wx(), xk(x3 - 2, x4 - 2)
	}

	function wx() {
		ag.mi[wv] = 0, ag.gb[wv] = ag.xV[wv] = 0, ag.gF[wv] = [], ag.gT[wv] = [], ag.gU[wv] = [], ag.fD[wv] = [], ag.ie[wv] = ag.ih[wv] = ag.ig[wv] = ag.ii[wv] = 0
	}

	function xk(x3, x4) {
		var gL, aB, xl, xm;
		for (ag.mi[wv] = 1, ag.ie[wv] = x3 + 10, ag.ih[wv] = x4 + 10, ag.ii[wv] = ag.ig[wv] = 0, xl = x3; xl < x3 + 4; xl++)
			for (xm = x4; xm < x4 + 4; xm++)(x3 < xl && xl < x3 + 3 || x4 < xm && xm < x4 + 3) && (gL = ac.xZ(xl, xm), ac.ei(gL)) && (ag.ie[wv] = Math.min(xl, ag.ie[wv]), ag.ig[wv] = Math.max(xl, ag.ig[wv]), ag.ih[wv] = Math.min(xm, ag.ih[wv]), ag
				.ii[wv] = Math.max(xm, ag.ii[wv]), ww[ag.gb[wv]] = gL, ag.gb[wv]++, ac.xa(gL, wv));
		for (ag.xV[wv] = ag.gb[wv], aB = ag.gb[wv] - 1; 0 <= aB; aB--) ac.xn(ww[aB], wv) ? (ac.gI(ww[aB], wv), ag.gT[wv].push(ww[aB])) : ac.xo(ww[aB]) ? (ac.gI(ww[aB], wv), ag.gU[wv].push(ww[aB])) : ac.xp(ww[aB]) && (ac.gI(ww[aB], wv), ag.fD[wv]
			.push(ww[aB]))
	}
	this.dd = function() {
		if (ww = new Array(12), wu = 6, wr = 10, wp = bL.du(bS.ey, wr), wq = bL.du(bS.ez, wr), ws = bL.du(bS.ey - wr * wp, 2), wt = bL.du(bS.ez - wr * wq, 2), aD.hB)
			for (var aB = 0; aB < aD.kA; aB++) wv = aB, wx(), ag.mi[wv] = 1;
		(0 === aD.data.spawningType ? wy : 1 === aD.data.spawningType ? (wy(), function() {
			var x7 = aD.x8;
			aD.x9 || x7++;
			if (!(x7 < 3)) {
				for (var data = aD.data, jR = (aD.hB ? aD.kA : 0) + data.teamPlayerCount[0], nQ = aD.x6, xA = new Uint32Array(x7), xB = new Uint32Array(x7), xC = new Uint16Array(x7), xD = new Uint16Array(x7), el = bg.el, ie = ag.ie, ih =
						ag.ih, ig = ag.ig, ii = ag.ii, fS = bO.fS, fT = bO.fT, aB = jR; aB < nQ; aB++) fS[aB] = ie[aB] + ig[aB] >> 1, fT[aB] = ih[aB] + ii[aB] >> 1;
				for (aB = jR; aB < nQ; aB++) {
					var id = el[aB];
					xA[id] += fS[aB], xB[id] += fT[aB]
				}
				var kX = bg.kX;
				for (aB = 1; aB < x7; aB++) {
					var gG = Math.max(data.teamPlayerCount[kX[aB]], 1);
					xC[aB] = bL.du(xA[aB], gG), xD[aB] = bL.du(xB[aB], gG)
				}
				var xE = bg.xE,
					xF = bg.xF,
					xG = bg.xG,
					fR = bO.fR;
				for (aB = 0; aB < 512; aB++) fR[aB] = aB;
				for (var e7 = 0; e7 < 2 + (4 <= x7); e7++)
					for (aB = jR; aB < nQ; aB++) {
						for (var hF = aB, xH = fR[hF], xI = 1, f3 = bL.xJ(fS[xH] - xC[1], fT[xH] - xD[1]), f6 = 2; f6 < x7; f6++) {
							var xK = bL.xJ(fS[xH] - xC[f6], fT[xH] - xD[f6]);
							xK < f3 && (f3 = xK, xI = f6)
						}
						var xL = el[hF];
						if (xI !== xL) {
							if (2 === e7 && 4 <= x7) {
								var xM = Math.max((xI + 1) % x7, 1),
									xN = bL.xJ(fS[xH] - xC[xM], fT[xH] - xD[xM]);
								for (f6 = 1; f6 < x7; f6++) xK = bL.xJ(fS[xH] - xC[f6], fT[xH] - xD[f6]), f3 < xK && xK < xN && (xN = xK, xM = f6);
								xM !== xL && bL.xJ(xC[xL] - xC[xM], xD[xL] - xD[xM]) < bL.xJ(xC[xL] - xC[xI], xD[xL] - xD[xI]) && (xI = xM)
							}
							var xO = kX[xI],
								xP = xF[xO] + (aD.hB ? 0 : xG[xO]),
								kl = xE[xP],
								xQ = fR[kl],
								xR = xF[xO + 1];
							f3 = bL.xJ(fS[xQ] - xC[xL], fT[xQ] - xD[xL]);
							for (var f8 = xP + 1; f8 < xR; f8++) {
								var xS = xE[f8],
									xT = fR[xS];
								(xK = bL.xJ(fS[xT] - xC[xL], fT[xT] - xD[xL])) < f3 && (f3 = xK, kl = xS)
							}
							kl < jR || nQ <= kl || (xQ = fR[kl], xA[xL] += fS[xQ] - fS[xH], xB[xL] += fT[xQ] - fT[xH], xA[xI] += fS[xH] - fS[xQ], xB[xI] += fT[xH] - fT[xQ], gG = data.teamPlayerCount[kX[xL]], xC[xL] = bL.du(xA[xL], gG),
								xD[xL] = bL.du(xB[xL], gG), gG = data.teamPlayerCount[xO], xC[xI] = bL.du(xA[xI], gG), xD[xI] = bL.du(xB[xI], gG), fR[hF] = xQ, fR[kl] = xH)
						}
					}! function() {
						for (var fR = bO.fR, ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, gb = ag.gb, xV = ag.xV, gT = ag.gT, gU = ag.gU, fD = ag.fD, aB = 0; aB < 512; aB++) {
							var xW = fR[aB];
							if (xW !== aB) {
								xX(ie, aB, xW), xX(ih, aB, xW), xX(ig, aB, xW), xX(ii, aB, xW), xX(gb, aB, xW), xX(xV, aB, xW), xX(gT, aB, xW), xX(gU, aB, xW), xX(fD, aB, xW), xY(aB), xY(xW), fR[aB] = aB;
								for (var j = xW, gM = fR[j]; gM !== aB;) gM = fR[j = gM];
								fR[j] = xW
							}
						}
					}()
			}
		}) : function() {
			var x1 = aD.x1;
			for (wv = x1; wv < aD.ek; wv++) wx();
			for (wv = aD.hB ? aD.kA : 0; wv < x1; wv++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							x3 = spawningData[2 * wv] + 1,
							spawningData = spawningData[2 * wv + 1] + 1;
						if (3 < x3 && x3 < bS.ey - 5 && 3 < spawningData && spawningData < bS.ez - 5 && ac.ei(ac.xZ(x3, spawningData)) && function(x3, x4) {
								var gL, xh, xg;
								for (xg = x4; x4 - 6 < xg; xg--)
									for (xh = x3; x3 - 6 < xh; xh--)
										if (gL = ac.xZ(xh, xg), ac.jM(gL)) return;
								return 1
							}(x3 + 3, spawningData + 3)) return x5(x3 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!x2()) {
						for (var f7 = aD.x6 = wv; f7 < x1; f7++) wv = f7, wx();
						return
					}
					var x3 = ws + sI * wr + bL.du(wr, 2),
						x4 = wt + sJ * wr + bL.du(wr, 2);
					x5(x3, x4)
				}
		})(), bd.me[7] = ag.gb[aD.eX]
	}, this.xq = function(jJ, xr, xs) {
		var aB, x3, x4, gL, sI, sJ;
		for (wv = jJ, aB = 0; aB < 20; aB++)
			for (x3 = xr + aB; xr - aB <= x3; x3--)
				for (x4 = xs + aB; xs - aB <= x4; x4--)
					if ((x3 === xr + aB || x3 === xr - aB || x4 === xs + aB || x4 === xs - aB) && 3 < x3 && x3 < bS.ey - 5 && 3 < x4 && x4 < bS.ez - 5 && ac.ei(ac.xZ(x3, x4)) && function(x3, x4) {
							var gL, xh, xg;
							for (xg = x4; x4 - 6 < xg; xg--)
								for (xh = x3; x3 - 6 < xh; xh--)
									if (gL = ac.xZ(xh, xg), ac.jM(gL) && !ac.xy(wv, gL)) return;
							return 1
						}(x3 + 3, x4 + 3)) {
						if (0 < ag.gb[wv]) {
							for (sJ = sI = gL = void 0, sI = ag.ig[wv]; sI >= ag.ie[wv]; sI--)
								for (sJ = ag.ii[wv]; sJ >= ag.ih[wv]; sJ--) gL = 4 * (sJ * bS.ey + sI), ac.xv(wv, gL) && (ac.xw(gL), ag.gb[wv]--);
							wx()
						}
						return xk(x3 - 1, x4 - 1), !0
					} return !1
	}, this.xx = function(jJ) {
		wv = jJ, x2() ? x5(ws + sI * wr + bL.du(wr, 2), wt + sJ * wr + bL.du(wr, 2)) : wx()
	}
}

function xz() {
	at.y0(), ug.setTransform(hy, 0, 0, hy, 0, 0), ug.imageSmoothingEnabled = hy < 3, ug.drawImage(bS.wT, aS.y1(), aS.y2()), bP.y3.uf(), ug.drawImage(y4, aS.y1(), aS.y2()), at.uf(), bN.uf(), af.uf(), (aD.nB ? (bh.uf(), bC) : (aN.uf(), aV.uf(), aR
	.uf(), bC.uf(), aw.uf(), aW.uf(), aS.uf(), aQ.uf(), bh.uf(), aU.uf(), aP.uf(), aM.uf(), aL.uf(), aX.uf(), be.uf(), av)).uf(), t.uf()
}

function y5(y6, i, j) {
	y6.clearRect(0, 0, i, j), y6.fillStyle = bB.nf, y6.fillRect(0, 0, i, j)
}

function y7(y6, i, j, y8) {
	y6.fillStyle = bB.ni, y6.fillRect(0, 0, i, y8), y6.fillRect(0, 0, y8, j), y6.fillRect(i - y8, 0, y8, j), y6.fillRect(0, j - y8, i, y8)
}

function y9(y6, eu, ew, hj, y8, gL, yA) {
	y6.fillStyle = bB.ni;
	var gL = Math.floor(hj * gL),
		sv = (gL += (gL - y8) % 2, Math.floor((gL - y8) / 2)),
		hj = Math.floor((hj - gL) / 2);
	y6.fillRect(eu + hj, ew + hj + sv, gL, y8), yA && y6.fillRect(eu + hj + sv, ew + hj, y8, gL)
}

function yC() {
	this.dd = function() {
		8 === aD.kS && aN.yD()
	}, this.yE = function(yF) {
		var elo = aD.data.elo,
			jQ = (elo[yF] - elo[1 - yF]) / 10,
			jQ = 8 / (1 + Math.pow(2, jQ / 32)),
			jQ = Math.floor(10 * jQ + .5),
			yH = elo[yF] + jQ,
			yI = this.yJ(yH),
			elo = this.yJ(elo[1 - yF] - jQ),
			jQ = (0 === yF ? aN.yL(yI, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yL(elo, yI, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.yN) * (2e3 + yH) / 1e3).toFixed(2));
		yF === aD.eX ? aN.yO(640, L(24, [jQ]), 40, 0, bB.ni, bB.nf, -1, !1) : aN.yO(640, L(25, [ag.yP[yF], jQ]), 40, 0, bB.ni, bB.nf, -1, !1)
	}, this.yJ = function(elo) {
		return 16e3 === (elo = bL.hv(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.rp = new yQ, this.wW = new yR
}

function yR() {
	this.hZ = !1;
	this.yV = [], this.yW = 100;
	var n8, n9, gap, hj, yS, yU, yX = 0,
		yY = new Array(9),
		yZ = [],
		ya = [],
		yb = 0,
		yc = 0,
		yd = 0,
		ye = 0;

	function yq() {
		yY.sort(function(f6, f7) {
			return f7.kF - f6.kF
		});
		for (var qG = "" + yY[0].pI, aB = 1; aB < 9; aB++) qG += "," + yY[aB].pI;
		for (aB = 0; aB < 9; aB++) qG += "," + yY[aB].kF;
		bj.eK.v9(120, qG)
	}
	this.dd = function() {
		for (var yf = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yf.length; aB++) {
			var color = 6 === yf[aB] ? bB.o8 : bB.ng;
			this.yV.push(bA.canvas.yg(ab.get(3), yf[aB], color))
		}
		for (aB = 0; aB < aj.rp.yh; aB++) ya.push(aj.rp.yi - aj.rp.yh + aB);
		for (aB = 0; aB < aj.rp.yj; aB++) ya.push(aj.rp.yk + aB);
		var yl = aj.rp.ym(bK.yl);
		for (aB = 0; aB < yl.length; aB++) ya.push(yl[aB]);
		! function() {
			var aB, g = bj.eK.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) yY[aB] = {
					pI: 1015 + aB,
					kF: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fF = parseInt(g[aB]),
						f8 = (fF = 0 <= fF && fF < aj.rp.yi ? fF : 0, parseInt(g[aB + 9]));
					f8 = 0 <= f8 && f8 < 1e3 ? f8 : 0, yY[aB] = {
						pI: fF,
						kF: f8
					}
				}
		}()
	}, this.show = function(lN, lO, yr) {
		var aB;
		if (yb = lN, yc = lO, yX = yr || 0, this.hZ = !0, yZ = [], 0 === yX)
			for (aB = 0; aB < 9; aB++) yZ.push(yY[aB].pI);
		else {
			var f7 = 49 * yX,
				yr = f7 - 49;
			for (yr >= ya.length && (yX = 1, yr = 0, f7 = 49), aB = yr = (f7 = Math.min(f7, ya.length)) - 49; aB < f7; aB++) yZ.push(ya[aB])
		}
		yZ.push(1024);
		yr = yZ.length, hj = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), gap = Math.floor(hj / 3), (yd = 10 * (yS = hj + gap)) > h.i && (yd = h.i, gap = (yS = yd / 10) - (hj = 3 * yS / 4)), yU = bL.du(yr, 10) + !!(yr % 10), (ye = yU * yS) > h
			.j && (ye = h.j, gap = (yS = ye / yU) - (hj = 3 * yS / 4)), yr = .5 * gap;
		n8 = Math.min(Math.max(lN - .5 * yd + yr, yr), h.i - yd + yr), n9 = Math.min(Math.max(lO - .5 * ye + yr, yr), h.j - ye + yr)
	}, this.h0 = function(lN, lO, player) {
		if (!this.hZ) return !1;
		if (this.yt(lN, lO)) {
			lN = bL.hv(bL.du(lN - n8 + .5 * gap, yS), 0, 9);
			if ((lN += 10 * bL.hv(bL.du(lO - n9 + .5 * gap, yS), 0, 9)) >= yZ.length) return aL.rq(), !0;
			lO = yZ[lN];
			if (1024 === lO) return this.show(yb, yc, yX + 1), !0;
			! function(pI) {
				for (var aB = 0; aB < 9; aB++) yY[aB].kF = Math.floor(.99 * yY[aB].kF);
				for (aB = 0; aB < 9; aB++)
					if (pI === yY[aB].pI) return yY[aB].kF = Math.min(yY[aB].kF + 30, 999), yq();
				yY.splice(5, 0, {
					pI: pI,
					kF: Math.max(yY[4].kF, 30)
				}), yY.pop(), yq()
			}(lO), player === aD.eX ? b8.hD.pH(lO) : b8.g9.pV(lO, player)
		}
		return aL.rq(), !0
	}, this.yt = function(lN, lO) {
		return !(lN < n8 - .5 * gap || lO < n9 - .5 * gap || n8 + yd - .5 * gap <= lN || n9 + ye - .5 * gap <= lO)
	}, this.uf = function() {
		ug.fillStyle = bB.nf, ug.fillRect(n8 - .5 * gap, n9 - .5 * gap, yd, ye);
		for (var hf = .5 * bc.yu, en = (ug.lineWidth = bc.yu, ug.strokeStyle = ug.fillStyle = bB.ni, ug.strokeRect(n8 - .5 * gap + hf, n9 - .5 * gap + hf, yd - 2 * hf, ye - 2 * hf), ug.imageSmoothingEnabled = !0, yZ.length), aB = 0; aB <
			en; aB++) this.yv(yZ[aB], ug, n8 + aB % 10 * yS, n9 + bL.du(aB, 10) * yS, hj);
		ug.imageSmoothingEnabled = !1
	}, this.yv = function(pI, hp, eu, ew, hj) {
		var eR;
		pI >= 1024 - aj.rp.yh ? (eR = hj / this.yW, hp.setTransform(eR, 0, 0, eR, eu, ew), hp.drawImage(this.yV[pI - 1024 + aj.rp.yh], 0, 0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qZ.textAlign(hp, 1), bA.qZ.textBaseline(hp, 1), hp.font = bA.qZ
			.sN(0, .89 * hj), hp.fillText(aj.rp.yw(pI), eu + .5 * hj, ew + (.35 - bA.qZ.yx + .56) * hj))
	}
}

function yQ() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yh = 13, this.yj = this.emojis.length, this.yk = 676, this.yi = 1024, this.yy = this.emojis.indexOf("💀"), this.yz = this.yy + 1, this.z0 = this.emojis.indexOf("🥇"), this.z1 = this.emojis.indexOf("😊"), this.yw = function(fF) {
		return fF < this.yk ? String.fromCharCode(55356, 56806 + bL.du(fF, 26), 55356, 56806 + fF % 26) : this.emojis[Math.min(fF - this.yk, this.yj - 1)]
	}, this.ym = function(qG) {
		for (var en = qG.length - 2, g = [], aB = 0; aB < en; aB++) {
			var z2 = qG.charCodeAt(aB) - 56806,
				z3 = qG.charCodeAt(aB + 2) - 56806;
			0 <= z2 && z2 < 26 && 0 <= z3 && z3 < 26 && (g.push(26 * z2 + z3), aB += 3)
		}
		return g
	}, this.z4 = function(fF) {
		return fF < this.yk
	}, this.z5 = function(fF) {
		return fF >= 1024 - this.yh
	}, this.z6 = function(fF) {
		return fF >= this.yk && fF < this.yk + this.yz
	}
}

function c3() {
	this.sq = new z7, this.vu = new z8, this.vw = new z9, this.dd = function() {
		this.sq.dd()
	}
}

function z8() {
	this.w9 = function(qG) {
		for (var en = qG.length, i = bD, aB = 0; aB < en; aB++) i.a8(16, qG.charCodeAt(aB))
	}
}

function z7() {
	var zA = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zA[0] = 45, zA[37] = 95, aB = 0; aB < 10; aB++) zA[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zA[aB + 11] = 65 + aB, zA[aB + 38] = 97 + aB
	}, this.ss = function(zB) {
		for (var vz = bH, w7 = new Uint8Array(zB), aB = 0; aB < zB; aB++) w7[aB] = vz.pg(6);
		return w7
	}, this.sr = function(w7) {
		for (var en = w7.length, zC = zA, g = [], aB = 0; aB < en; aB++) g.push(String.fromCharCode(zC[w7[aB]]));
		return g.join("")
	}, this.zD = function(value, zE) {
		for (var zC = zA, g = [], aB = 0; aB < zE; aB++) g.push(String.fromCharCode(zC[value >> 6 * (zE - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var zF, zG, zH;
	zF = [32, 65, 191, 913, 931], zG = [64, 127, 688, 930, 1155], zH = new Array(zF.length + 1);
	for (var aB = 0; aB < zH.length; aB++) {
		zH[aB] = 0;
		for (var f6 = aB - 1; 0 <= f6; f6--) zH[aB] += zG[f6] - zF[f6]
	}

	function zN(f8) {
		for (var aB = zF.length - 1; 0 <= aB; aB--)
			if (f8 >= zF[aB] && f8 < zG[aB]) return aB;
		return -1
	}
	this.w0 = function(qG) {
		return 0 !== (qG = qG.trim()).indexOf("Bot ") && 0 !== qG.indexOf("[Bot] ") && function(qG, zK, zL) {
			var en = (qG = qG.trim()).length;
			if (en < zK || zL < en) return !1;
			for (var f8, zM = 0, aB = 0; aB < en; aB++)
				if (f8 = qG.charCodeAt(aB), zM += 65 <= f8 && f8 <= 90 || 1040 <= f8 && f8 <= 1071 ? 1 : 0, -1 === zN(f8)) return !1;
			if (3 < zM && zM > Math.floor(en / 2)) return !1;
			return !0
		}(qG, 3, 20)
	}, this.zO = function(qG) {
		for (var en = (qG = qG.trim()).length, g = [], aB = 0; aB < en; aB++) {
			var f8, gL = zN(f8 = qG.charCodeAt(aB));
			g.push(zH[gL] + f8 - zF[gL])
		}
		return g
	}, this.wE = function(g) {
		for (var f8, f7, qG = "", en = g.length, aB = 0; aB < en; aB++)
			for (f7 = 1; f7 < zH.length; f7++)
				if (g[aB] < zH[f7]) {
					f8 = zF[f7 - 1] + g[aB] - zH[f7 - 1], qG += String.fromCharCode(f8);
					break
				} return qG
	}, this.zP = function(qG) {
		for (var g = this.zO(qG), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zQ = function(qG) {
		for (var g = new Array(Math.floor(qG.length / 3)), aB = 0; aB < qG.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qG.substring(aB, aB + 3));
		return this.wE(g)
	}, this.zR = function(qG) {
		for (var fF, g = [qG.length], aB = 0; aB < qG.length; aB++) g[aB] = qG.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qG.length; aB++) aB === qG.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fF = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fF + (fF < 26 ? 65 : 71)), aB++);
		return result
	}, this.zS = function(qG) {
		for (var f8, result = "", aB = 0; aB < qG.length; aB++) 48 <= (f8 = qG.charCodeAt(aB)) && f8 < 58 ? result += String.fromCharCode(f8) : 65 <= f8 && f8 < 75 ? result += "0" + (f8 - 65).toString() : 75 <= f8 && f8 < 91 ? result += (f8 - 65)
			.toString() : 97 <= f8 && f8 < 123 && (result += (f8 - 71).toString());
		return result
	}, this.zT = function(qG) {
		for (var en = qG.length, g = [], aB = 0; aB < en; aB++)(f8 = qG.charCodeAt(aB)) < 58 ? g.push(qG[aB]) : (f8 -= f8 < 91 ? 65 : 71, g.push(String(bL.du(f8, 10))), g.push(String(f8 - 10 * bL.du(f8, 10))));
		var en = g.length - 2,
			f8 = 0,
			w7 = [];
		for (aB = 0; aB < en; aB += 3) w7[f8++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return w7
	}, this.zU = function() {
		for (var e7, zV = "", aB = 0; aB < 6; aB++) e7 = 48 + ay.random() % 36, e7 += 58 <= e7 ? 39 : 0, zV += String.fromCharCode(e7);
		return zV
	}
}

function z9() {
	this.zO = function(qG, wn, zW) {
		for (var zX = [], en = qG.length, max = 0, aB = 0; aB < en; aB++) {
			var fF = qG.charCodeAt(aB);
			zX.push(fF), max = Math.max(max, fF)
		}
		var wo = max < 128 ? 7 : 16;
		for (zW.a8(wn, en), zW.a8(1, +(16 == wo)), aB = 0; aB < en; aB++) zW.a8(wo, zX[aB])
	}
}

function dA() {
	this.zY = new zZ, this.result = new za, this.zb = new zc, this.zd = new ze, this.zf = new zg, this.zh = new zi, this.dd = function() {
		this.result.dd()
	}
}

function zc() {
	this.zj = function() {
		for (var en = al.kB, zk = al.kC, zl = [], aB = 0; aB < en; aB++) {
			var gL = zk[aB];
			bA.g9.zm(gL) && zl.push(gL)
		}
		return zl
	}, this.zn = function() {
		if (0 === bg.kX[aD.zo]) return this.zp();
		bh.li(aD.zo);
		for (var zl = [], en = bO.fI[0], fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = fR[aB];
			bA.g9.zm(gL) && zl.push(gL)
		}
		return zl
	}, this.zp = function() {
		var gL = lk[0];
		return bA.g9.zm(gL) ? [gL] : []
	}, this.zq = function(zl) {
		for (var en = zl.length, dt = 0, gb = ag.gb, aB = 0; aB < en; aB++) dt += gb[zl[aB]];
		return dt
	}
}

function zZ() {
	function zs() {
		if (2 === aD.zw) return 1;
		aw.zx(), aD.zw = 2, aD.zy = aD.zz
	}

	function zu() {
		bR.zf.a00(), aX.show(1 === aD.a01, !1, 2 === aD.a01), bR.result.a00(), bR.zh.j3(), bR.zd.j3(), aN.a02(!0), aN.a03(247), aN.a03(956), aN.a03(957), aV.mU(!0), aW.mU(!0), aw.mU(), bC.a04(), aD.gw && bf.a05.a06(), bf.dl = !0, bb.a07(), a0.a1
			.setState(0)
	}
	this.zr = function() {
		zs() || (aD.zt = 2, zu())
	}, this.zv = function() {
		zs() || (aD.zt = 1, zu())
	}
}

function ze() {
	this.j3 = function() {
		var a0F;
		2 === aD.zt ? (aN.a08(0, 59), aH.nH(2700)) : aD.kS < 7 ? (a0F = bg.kX[aD.zo], a0F = bg.a0H[a0F], aQ.a0I(L(26, [a0F]), 2, 1, 12), aN.yO(0, L(27, [a0F]), 40, 0, bB.ni, bB.nf, -1, !1), aH.nH(2700)) : 8 === aD.kS ? (aD.a01 ? aN.a08(aD.a0D,
			2) : aN.a08(1 - aD.eX, 3), aD.a0E.yE(aD.a0D), aH.n3(aD.a0D, 2700, !1, 0)) : 9 === aD.kS ? (aN.a0J(), aH.nH(2700)) : (aN.a0K(aD.a0D), aH.n3(aD.a0D, 2700, !1, 0))
	}
}

function zi() {
	function a0U() {
		var tB;
		return 8 === aD.kS ? 0 : (tB = Math.floor(ag.a0V[aD.eX] / 50), (tB = Math.min(tB, 400)) / 100)
	}

	function a0M() {
		var tB = a0U();
		0 !== tB && aN.yO(440, L(28, [tB.toFixed(2)]), 40, 0, bB.o0, bB.nf, -1, !1)
	}
	this.j3 = function() {
		var a0N;
		0 === bR.result.a0L || 0 === bR.result.zl.length || 8 === aD.kS ? bA.g9.gz(aD.eX) && a0M() : (function(a0N) {
			7 !== aD.kS && 10 !== aD.kS || 0 !== aD.a01 && a0N && aN.yO(600, L(32, [a0N.toFixed(2)]), 40, 0, bB.ni, bB.nf, -1, !1)
		}(a0N = function() {
			aN.yO(520, L(29), 40, 0, bB.ni, bB.nf, -1, !1);
			for (var zl = bR.result.zl, en = zl.length, gb = ag.gb, g = [], aB = 0; aB < en; aB++) {
				var gL = zl[aB];
				g.push({
					gL: gL,
					dt: gb[gL]
				})
			}
			g.sort((f6, f7) => f7.dt - f6.dt);
			var a0H = ag.yP,
				dt = bR.result.a0W,
				tB = bR.result.a0L,
				qG = "",
				a0N = 0;
			for (aB = 0; aB < en; aB++) {
				var hX = g[aB].dt * tB / (100 * dt),
					a0Y = a0H[g[aB].gL] + ": " + hX.toFixed(2) + "   ";
				g[aB].gL === aD.eX && (a0N = hX), 2 < aB && 4 !== en ? 3 === aB && (qG += "(" + L(30, [en - 3]) + ")") : qG += a0Y
			}
			aN.yO(560, bA.rY.a0Z(qG), 40, 0, bB.o0, bB.nf, -1, !1), a0N ? aN.yO(580, L(31, [a0N.toFixed(2) + " + " + a0U().toFixed(2)]), 40, 0, bB.o0, bB.nf, -1, !1) : bA.g9.gz(aD.eX) && a0M();
			return a0N
		}()), 2 === aD.zt || 7 <= aD.kS || function(a0N) {
			var zl = bR.result.zl,
				en = zl.length,
				a0a = ag.a0a,
				gb = ag.gb,
				a0b = [];
			loop: for (var aB = 0; aB < en; aB++) {
				var gL = zl[aB],
					a0c = bA.rY.a0d(a0a[gL]);
				if (null !== a0c) {
					for (var a0e = gb[gL], f7 = a0b.length - 1; 0 <= f7; f7--)
						if (a0c === a0b[f7].name) {
							a0b[f7].dt += a0e, a0b[f7].g.push({
								gL: gL,
								dt: a0e
							});
							continue loop
						} a0b.push({
						name: a0c,
						dt: a0e,
						g: [{
							gL: gL,
							dt: a0e
						}]
					})
				}
			}
			if (0 !== a0b.length) {
				a0b.sort((f6, f7) => f7.dt - f6.dt);
				var g = a0b[0].g,
					a0f = (g.sort((f6, f7) => f7.dt - f6.dt), "[" + a0b[0].name + "]"),
					a0g = 512 * bR.result.a0L / 26214400,
					l3 = (aN.yO(0, L(33, [a0f, a0g.toFixed(4)]), 40, 0, bB.ni, bB.nf, -1, !1), g.length),
					w5 = a0b[0].dt,
					a0h = 1e4 * a0g;
				for (aB = 0; aB < l3; aB++)
					if (g[aB].gL === aD.eX) {
						aN.yO(600, L(34, [(a0h * g[aB].dt / (10 * w5)).toFixed(2)]), 40, 0, bB.ni, bB.nf, -1, !1), aN.yO(640, L(35, [(.2 * a0N).toFixed(2), a0f]), 40, 0, bB.ni, bB.nf, -1, !1);
						break
					} aD.gw || aN.yO(720, L(36) + bK.a0i, 736, 0, bB.ni, bB.o6, -1, !1)
			}
		}(a0N))
	}, this.a0R = function() {
		var a0S, wX;
		aD.kU || (a0S = ag, wX = aD.eX, 0 === a0S.a0T[wX]) || a0S.jD[wX] < 1 || 2 * a0S.py[wX] > 3 * (a0S.jC[wX] + a0S.jD[wX]) || a0M()
	}
}

function za() {
	this.dd = function() {
		this.a0j = 0, this.zl = [], this.a0W = 0, this.a0L = 0
	}, this.a00 = function() {
		var sA;
		aD.kU || (sA = this, 2 === aD.zt ? sA.zl = bR.zb.zj() : aD.hh ? sA.zl = bR.zb.zn() : sA.zl = bR.zb.zp(), sA.a0j = bi.a0l.a0m(), sA.a0W = Math.max(1, bR.zb.zq(sA.zl)), b8.g9.pe(), 8 === aD.kS ? bR.result.a0L = 0 : sA.a0L = 100 * bR.result
			.a0j * (1 + aD.yN))
	}
}

function zg() {
	this.a00 = function() {
		if (2 === aD.zt) aD.a01 = 2;
		else {
			if (8 === aD.kS) bA.g9.jY(0) || 0 === ag.mi[0] ? aD.a0D = 1 : bA.g9.jY(1) || 0 === ag.mi[1] ? aD.a0D = 0 : aD.a0D = +(ag.gb[1] > ag.gb[0]);
			else {
				if (aD.hh) {
					var kh = bh.a0p();
					if (aD.zo = kh, bg.kX[kh]) return void(aD.a01 = +(bg.el[aD.eX] === kh))
				}
				aD.a0D = lk[0]
			}
			aD.a01 = +(aD.a0D === aD.eX)
		}
	}
}

function dF() {
	this.id = 0, this.dv = 0, this.vG = null, this.vH = null, this.vI = null, this.vO = null, this.a1 = new a0q, this.dd = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.vH = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vI = mwIOSdataX, self.vO = window.webkit.messageHandlers.iosCommandA, dv = self
					.vI.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var vG;
				try {
					if (!(vG = window.localStorage)) return;
					vG.setItem("tls7", "1"), vG.removeItem("tls7")
				} catch (error) {
					return
				}
				self.vG = vG
			}(this)
	}
}

function a0q() {
	this.a0u = function() {
		bj.s0.vb(), bj.s0.vc(), b0.y.close(0, 3255), 0 === a0.id ? a0.vG && a0.vG.clear() : 1 === a0.id ? a0.vH.saveString(199, "") : 2 === a0.id && a0.vO.postMessage("clear")
	}, this.a0v = function() {
		2 === a0.id ? a0.vO.postMessage("showConsentForm") : 1 === a0.id && a0.vH.setState(7)
	}, this.a0w = function() {
		this.setState(14)
	}, this.hw = function() {
		return 1 === bj.eK.vB(2)
	}, this.a0x = function() {
		bj.eK.v9(102, "")
	}, this.setState = function(a0y) {
		1 === a0.id && 5 <= a0.dv && a0.vH.setState(a0y)
	}, this.a2 = function() {
		var a0z;
		1 === a0.id && 7 <= a0.dv ? a0.vH.setState(5) : ((a0z = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a0z.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dv < 17 || a0.vH.saveString(23, document.documentElement.outerHTML)
	}, this.eI = function() {
		0 !== a0.id && (1 === a0.id ? a0.vH.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dv ? a0.vO.postMessage("prepare ad 1770251391") : a0.vO.postMessage("loadAds 1770251391")))
	}, this.eN = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dv ? a0.vO.postMessage("show ad " + dt) : a0.vO.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dv < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a10 + "' target='_blank'>" +
			bK.a10 + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oN)]))
	}
}

function dU() {
	function a13(e) {
		lS(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a16()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.o5)]))
	}

	function a1E(e) {
		lS(e), t.u(4, 5, new v(L(38), a1A(e), !0))
	}

	function a1A(e) {
		var qG = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qG : 4527 === e ? "Player already in lobby" + qG : 4530 === e ? "Lobby Timeout" + qG : 4528 === e ? "Lobby Kick: Another login detected." + qG : 4540 === e ?
			"You have been kicked." + qG : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qG : "Unknown error" + qG
	}

	function lS(e) {
		a18(e), t.y.z()
	}

	function a18(e) {
		var a0y = aa.a17();
		6 === a0y ? b0.y.a1G(e) : bn.a14 ? (t.x(), bn.u9(), b0.y.close(b0.y.a15, 3256)) : 8 === a0y && aD.a1H(!0)
	}
	this.p = [], this.a11 = function(a12, e) {
		if (this.p.push(e), 8 === t.sn && 0 === a12)
			if (4211 === e) a13(e);
			else {
				if (bn.a14 && (4495 === e || 4480 === e) && b0.y.a15 !== a12) return void t.a16();
				if (8 !== aa.a17() && a18(), 4480 === e) return bj.s0.vd(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a1A(e), !0))
			}
		else {
			var a0y = aa.a17();
			if (6 === a0y) {
				if (4211 === e) return void a13(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a1B(a12)
			} else {
				if (!bn.a14) return 8 === a0y ? void(a12 !== b0.y.a1C || aD.kU || 1 !== aD.zw || aD.gw || aN.a1D(L(39, [e]))) : void 0;
				if (a12 !== b0.y.a15) return
			}
			a1E(e)
		}
	}, this.a1F = function(e) {
		this.p.push(e), 8 === aa.a17() ? aD.kU || 1 !== aD.zw || aN.a1D(L(39, [e])) : a1E(e)
	}, this.s = function() {
		this.p.push(3268), lS(3268)
	}
}

function d4() {
	var a1I, a1J, a1K = -15e3,
		a1L = !1;

	function h0(e) {
		bi.a1g.a1h[0] = 1, a1i() || (a1L = !0, a1j(e, 1), b0.y.a1k(b0.y.a1C), a1l(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1U(e) {
		bi.a1g.a1h[6] = 1, a1K = bf.eM, a1j(e, 1), b0.y.a1k(b0.y.a1C), 0 < e.touches.length && (a1I = Math.floor(h.k * e.touches[0].clientX), a1J = Math.floor(h.k * e.touches[0].clientY), au.a1U(e) || a1l(a1I, a1J))
	}

	function a1l(eu, ew) {
		t.h0(eu, ew), 0 === aD.zw ? aa.h0(eu, ew) : bC.a1m(eu, ew) || be.h0(eu, ew) || aX.h0(eu, ew) || aL.a1n(eu, ew) || aP.h0(eu, ew) || 0 <= aM.h0(eu, ew) || aw.h0(eu, ew) || bJ.a1o(eu, ew) || aL.a1p(eu, ew)
	}

	function a1Q(e) {
		bi.a1g.a1h[1] = 1, a1i() || (a1L = !0, a1j(e, 1), a1q(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1V(e) {
		bi.a1g.a1h[7] = 1, a1K = bf.eM, a1j(e, 1), 0 < e.touches.length && (a1I = Math.floor(h.k * e.touches[0].clientX), a1J = Math.floor(h.k * e.touches[0].clientY), au.a1V(e) || a1q(a1I, a1J))
	}

	function a1q(eu, ew) {
		t.a1Q(eu, ew), 0 === aD.zw ? aa.a1Q(eu, ew) : (bT.gu(eu, ew), be.a1Q(eu, ew) || (aM.a1Q(eu, ew), aL.hZ() ? aL.a1Q(eu, ew) : aR.h1 ? aR.a1Q(eu) && (bf.dl = !0) : (aV.a1Q(eu, ew), aS.nD && aS.a1Q(eu, ew) && (bf.dl = !0))))
	}

	function a1S(e) {
		bi.a1g.a1h[4] = 1, a1i() || (a1j(e, 1), a1r(), 0 === aD.zw ? (aa.click(-1024, -1024), aT.ra()) : (aV.a1s(-1024, -1024), aM.a1Q(-1024, -1024), aR.a1t(), aS.nD = !1))
	}

	function a1R(e) {
		bi.a1g.a1h[2] = 1, a1i() || (a1j(e, 1), a1u(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a1O && (bJ.a1O = !1, e.preventDefault()))
	}

	function click(e) {
		bi.a1g.a1h[3] = 1, a1i() || a1j(e, 1)
	}

	function a1W(e) {
		bi.a1g.a1h[8] = 1, a1K = bf.eM, a1j(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.zw ? aS.nD = !1 : au.a1v() || (a1u(a1I, a1J, !1), bJ.a1O && (bJ.a1O = !1, e.preventDefault()))
	}

	function a1X(e) {
		bi.a1g.a1h[9] = 1, a1K = bf.eM, a1j(e, 1), a1u(a1I, a1J, !1), bJ.a1O && (bJ.a1O = !1, e.preventDefault())
	}

	function a1Y(e) {}

	function a1Z(e) {}

	function a1a(e) {
		a1i() || a1j(e, 0)
	}

	function a1u(eu, ew, a1w) {
		a1r(), 0 === aD.zw ? aa.click(eu, ew) : (aV.a1s(eu, ew), be.a1s(), aR.a1t(), aS.nD = !1, aL.click(eu, ew, a1w) ? bf.dl = !0 : aM.a1R(eu, ew))
	}

	function a1r() {
		t.a1r()
	}

	function a1T(e) {
		var eu, ew, deltaY;
		bi.a1g.a1h[5] = 1, a1i() || (a1j(e, 1), b0.y.a1k(b0.y.a1C), eu = Math.floor(h.k * e.clientX), ew = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1T(eu, ew, deltaY), 0 === aD.zw ? aa.a1T(eu, ew,
			deltaY) : aV.a1T(eu, ew, deltaY) || (aR.a1x(eu, ew) ? aR.a1T(deltaY) && (bf.dl = !0) : aS.a1T(eu, ew, deltaY)))
	}

	function a1b(e) {
		a1j(e, 0)
	}

	function a1j(e, id) {
		0 === id && t.hZ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a17() && e.preventDefault()
	}

	function a1c(e) {
		if (__fx.keybindHandler(e.key)) return;
		bi.a1g.a1h[10] = 1, a1i() || 0 < h.sV || (e = e.code) && e.length && (bX.f8(e, 18) ? ar.a1z(3) : bX.f8(e, 22) ? ar.a1z(0) : bX.f8(e, 20) ? ar.a1z(1) : bX.f8(e, 24) ? ar.a1z(2) : bX.f8(e, 10) ? aR.a20(31 / 32) : bX.f8(e, 8) ? aR.a20(32 / 31) :
			bX.f8(e, 6) ? aR.a20(7 / 8) : bX.f8(e, 4) ? aR.a20(8 / 7) : bX.f8(e, 14) ? 0 !== aD.zw && aS.a1T(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.f8(e, 16) ? 0 !== aD.zw && aS.a1T(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) :
			bX.f8(e, 0) ? aD.zw && bT.gv(0) : bX.f8(e, 2) ? aD.zw && bT.gv(1) : bX.f8(e, 30) ? aD.zw && bT.gv(2) : bX.f8(e, 26) ? aD.zw && bT.hT() : bX.f8(e, 28) && aD.zw && bT.hY())
	}

	function a1d(e) {
		if (bi.a1g.a1h[11] = 1, !a1i() && !(0 < h.sV || bf.eM < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a21(1) || "Space" === code && t.a21(0))) return bn.a14 ? bn.uF.a21(code) ? void 0 : void("Escape" === code && bJ.fG()) : void(8 !== aa.a17() && aa.a21(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fG() : bX.f8(code, 18) ? ar.a22(3) : bX.f8(code, 22) ? ar.a22(0) : bX.f8(code, 20) ? ar.a22(1) : bX.f8(code, 24) ? ar.a22(2) : bX.f8(code, 12) ? bC.a23(!aD.nB) : "Space" === code && aD.zw && (aM.gx && aM.a24(), aD
					.gw) && bC.a25(!1))
		}
	}

	function a1e() {
		bi.a1g.a1h[12] = 1, "hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a1i() {
		return a1K + 15e3 > bf.eM
	}

	function resize() {
		bi.a1g.a1h[13] = 1, h.a27()
	}

	function a1f() {
		a0.vG && a0.vG.setItem("qix3", "0")
	}
	this.a1M = 0, this.a1N = "", this.a1O = !1, this.dd = function() {
		a1P.addEventListener("mousedown", h0, {
			passive: !1
		}), a1P.addEventListener("mousemove", a1Q, {
			passive: !1
		}), a1P.addEventListener("mouseup", a1R, {
			passive: !1
		}), a1P.addEventListener("click", click, {
			passive: !1
		}), a1P.addEventListener("mouseleave", a1S, {
			passive: !1
		}), a1P.addEventListener("wheel", a1T, {
			passive: !1
		}), a1P.addEventListener("touchstart", a1U, {
			passive: !1
		}), a1P.addEventListener("touchmove", a1V, {
			passive: !1
		}), a1P.addEventListener("touchend", a1W, {
			passive: !1
		}), a1P.addEventListener("touchcancel", a1X, {
			passive: !1
		}), a1P.addEventListener("dragover", a1Y), a1P.addEventListener("drop", a1Z), a1P.addEventListener("dblclick", a1a), document.addEventListener("contextmenu", a1b), document.addEventListener("keydown", a1c), document.addEventListener(
			"keyup", a1d), document.addEventListener("visibilitychange", a1e), window.addEventListener("resize", resize), window.addEventListener("beforeunload", a1f)
	}, this.a1o = function(eu, ew) {
		return !!bC.h0(eu, ew) || !!(aV.h0(eu, ew) || aS.h0(eu, ew) || aR.h0(eu, ew) || aN.h0(eu, ew))
	}, this.a26 = a1i, this.r1 = function() {
		return !a1L || 0 < a1K
	}, this.fG = function() {
		if (!t.hZ()) return 8 === aa.a17() ? aD.nB ? void bC.a23(!1) : be.hZ ? void be.a24() : void aM.a24() : void(7 !== aa.a17() && 6 === aa.a17() && aZ.a28());
		t.a21(2)
	}
}

function bz() {
	this.qZ = new a29, this.qh = new a2A, this.g9 = new a2B, this.rY = new a2C, this.y6 = new a2D, this.a2E = new a2F, this.canvas = new a2G, this.color = new a2H, this.a2I = new a2J, this.dd = function() {
		this.qZ.va()
	}
}

function a2A() {
	this.wV = function(g) {
		g.fill(0)
	}, this.a2K = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++) g[aB] = []
	}, this.a2L = function(z2, a2M) {
		for (var z3 = bO.fN, aB = 0; aB < 3; aB++) z3[aB] = a2M * z2[aB];
		return z3
	}, this.a2N = function(z2, z3, a2O) {
		for (var jQ = 0, aB = 0; aB < 3; aB++) jQ += Math.abs(z2[aB] - z3[aB]);
		return a2O <= jQ
	}, this.a2P = function(z2, a2Q) {
		for (var aB = 0; aB < 3; aB++) z2[aB] = bL.hv(z2[aB] + a2Q, 0, 255);
		return z2
	}, this.a2R = function(g, t7, t8) {
		t8 = t8 || g.length - 1;
		for (var a2S = 0, aB = t7 = t7 || 0; aB <= t8; aB++) a2S += g[aB];
		return a2S
	}, this.a2T = function(g, a2U) {
		for (var aB, a2V, en = g.length, a2W = [], f6 = en - 1; 0 <= f6; f6--) {
			for (aB = a2V = 0; aB < en; aB++) a2U(g[aB]) < a2U(g[a2V]) && (a2V = aB);
			en--, a2W.push(g[a2V]), g[a2V] = g[en], g.pop()
		}
		return a2W
	}, this.min = function(g) {
		var aB, fF, en = g.length;
		if (0 === en) return 0;
		for (fF = g[0], aB = 1; aB < en; aB++) fF = Math.min(fF, g[aB]);
		return fF
	}, this.max = function(g) {
		var en = g.length;
		if (0 === en) return 0;
		for (var fF = g[0], aB = 1; aB < en; aB++) fF = Math.max(fF, g[aB]);
		return fF
	}, this.a2X = function(g, fF) {
		for (var en = g.length, gG = 0, aB = 0; aB < en; aB++) gG += g[aB] > fF;
		return gG
	}, this.a2Y = function(a2Z, a2a, min) {
		for (var en = a2a[0], aB = en - 1; 0 <= aB; aB--) a2Z[aB] < min && (a2Z[aB] = a2Z[--en]);
		a2a[0] = en
	}, this.a2b = function(g, en, value) {
		for (var aB = 0; aB < en; aB++) g[aB] -= value
	}, this.a2c = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2d = function(qG, g, a2e) {
		g.fill(0);
		for (var tB = qG.split(","), en = Math.min(tB.length, g.length), aB = 0; aB < en; aB++) g[aB] = Math.min(parseInt(tB[aB]), a2e)
	}, this.a2f = function(qG, g, rV) {
		g.fill("");
		for (var tB = qG.split('"'), en = Math.min(tB.length, 2 * g.length), hf = 0, aB = 1; aB < en; aB += 2) g[hf++] = tB[aB].slice(0, rV)
	}, this.a2g = function(g, gG) {
		if (0 === gG) g.fill(0);
		else {
			var a2S = this.a2R(g),
				en = g.length;
			if (0 === a2S) g.fill(bL.du(gG, en));
			else
				for (var aB = 0; aB < en; aB++) g[aB] = bL.du(gG * g[aB], a2S);
			if (0 === (a2S = this.a2R(g))) g[1] = gG;
			else
				for (var hf = 0; a2S++ < gG;) g[hf = (hf + 1) % en] && g[hf]++
		}
	}, this.a2h = function(g) {
		if (!g) return 0;
		var en = g.length;
		if (0 === en) return 0;
		for (var fF = g[en - 1], aB = en - 2; 0 <= aB; aB--)
			if (g[aB] !== fF) return aB + 2;
		return 1
	}, this.a2i = function(g) {
		for (var a2S = 0, aB = 0; aB < g.length; aB++) a2S += g[aB].length;
		return a2S
	}, this.a2j = function(a2k) {
		for (var g = [], aB = 0; aB < a2k.length; aB++) g = g.concat(a2k[aB]);
		return g
	}, this.has = function(g, fF) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if (g[aB] === fF) return !0;
		return !1
	}
}

function a2G() {
	this.yg = function(a2l, e8, a2m) {
		var hj = a2l.height,
			a2n = bA.qZ.wL(hj, hj),
			hp = bA.qZ.getContext(a2n);
		return function(i, hp, a2m) {
			hp.fillStyle = a2m, hp.beginPath(), hp.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hp.fill()
		}(hj, hp, a2m), hp.drawImage(a2l, -e8 * hj, 0), a2n
	}, this.a2p = function(a2q) {
		var hp, hm, hj = a2q.height;
		return a2q.width === hj && (hm = (hp = bA.qZ.getContext(a2q, !0)).getImageData(0, 0, hj, hj), bA.a2E.a2r(hm.data, hj, hj, .9), hp.putImageData(hm, 0, 0)), a2q
	}
}

function a2H() {
	this.a2s = function(fF) {
		return [fF >> 12 & 63, fF >> 6 & 63, 63 & fF]
	}, this.a2t = function(fF) {
		for (var g = this.a2s(fF), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a2u = function(fF) {
		fF = this.a2t(fF);
		return bA.color.na(fF[0], fF[1], fF[2])
	}, this.a2v = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.na = function(e7, tB, f7) {
		return "rgb(" + e7 + "," + tB + "," + f7 + ")"
	}, this.nc = function(e7, tB, f7, f6) {
		return "rgba(" + e7 + "," + tB + "," + f7 + "," + f6.toFixed(3) + ")"
	}, this.r3 = function(f8) {
		for (var g = f8.split("(")[1].split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = parseInt(g[aB]);
		return 4 === g.length ? fM[3] = 255 * parseFloat(g[3].slice(0, -1)) : fM[3] = 255, fM
	}, this.r4 = function(a2w, eq) {
		for (var g = a2w.slice(a2w.indexOf("(") + 1, a2w.indexOf(")")).split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = bL.hv(parseInt(g[aB].trim(), 10) + eq, 0, 255);
		return 3 === g.length ? this.na(fM[0], fM[1], fM[2]) : (a2w = parseFloat(g[3].trim()), this.nc(fM[0], fM[1], fM[2], a2w = 0 === a2w ? .3 : a2w))
	}, this.a2x = function(g) {
		for (var qG = "#", aB = 0; aB < 3; aB++) {
			var e7 = g[aB].toString(16);
			qG += 1 === e7.length ? "0" + e7 : e7
		}
		return qG
	}, this.a2y = function(qG) {
		var e7, tB;
		return qG.length < 7 ? bB.nZ : (e7 = parseInt(qG.slice(1, 3), 16), tB = parseInt(qG.slice(3, 5), 16), qG = parseInt(qG.slice(5, 7), 16), this.na(e7, tB, qG))
	}
}

function a2D() {
	this.a2z = function(qG, font, maxWidth) {
		if (font && (ug.font = font), ug.measureText(qG).width <= maxWidth) return qG;
		for (var aB = qG.length - 1; 1 <= aB; aB--)
			if (qG = qG.substring(0, aB), ug.measureText(qG + "...").width <= maxWidth) return qG + "...";
		return "..."
	}
}

function a2J() {
	var a31 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a32 = function(eM) {
		var a34, qG = new Date(eM.getTime() - 6e4 * eM.getTimezoneOffset()).toUTCString();
		return qG.length < 12 || (qG = qG.substring(5, qG.length), 0 === (eM = eM.getTimezoneOffset())) ? qG : (a34 = (eM < 0 ? "+" : "-") + bL.du(Math.abs(eM), 60), 0 == (eM = Math.abs(eM) % 60) ? qG + a34 : qG + a34 + ":" + (eM < 10 ? "0" :
			"") + eM)
	}, this.a35 = function(eM) {
		var qG = eM.toUTCString();
		return qG.length < 12 ? qG : function(eM) {
			return a31[eM.getUTCDay()]
		}(eM) + ", " + qG.substring(5, qG.length - 4)
	}
}

function a29() {
	var a37 = null;
	this.yx = 0, this.va = function() {
		var fF = bj.eK.data[5].value;
		a37 = "px " + fF, "Trebuchet MS" !== fF && (a37 += ", Trebuchet MS"), this.yx = hi(32, 32, ["a", "b", "m"], 200, a37)
	}, this.wL = function(i, j) {
		var f8 = document.createElement("canvas");
		return f8.width = i, f8.height = j, f8
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(y6, i, j) {
		return y6.getImageData(0, 0, i, j)
	}, this.sN = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a37 : 1 === type ? "bold " + size + a37 : 2 === type ? "lighter " + size + a37 : 3 === type ? "italic " + size + a37 : 4 === type ? "oblique " + size + a37 : 5 === type ? "small-caps " +
			size + a37 : "small-caps bold " + size + a37
	}, this.textAlign = function(hp, id) {
		hp.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hp, id) {
		hp.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qj = function(e, code, color) {
		color = this.qi(bc.sP) + " solid " + (color || bB.ni);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tD = function(e, eu, ew, i, j) {
		e = e.style;
		e.left = this.tE(eu), e.top = this.tE(ew), e.width = this.tE(i), e.height = this.tE(j)
	}, this.qa = function(fF) {
		return 1 + fF * a0.a1.hw()
	}, this.rs = function(nK, gM) {
		return nK * this.qa(void 0 === gM ? .5 : gM) * h.hx / h.k
	}, this.tC = function(nK, gM) {
		return nK * this.qa(void 0 === gM ? .5 : gM) * h.hx
	}, this.st = function(nK, gM, a38) {
		return this.qa(gM) * Math.min(nK * h.hx, a38 * h.i) / h.k
	}, this.qi = function(fF) {
		return fF.toFixed(1) + "px"
	}, this.tE = function(fF) {
		return this.a3A(fF).toFixed(1) + "px"
	}, this.a3A = function(fF) {
		return fF / h.k
	}, this.a3B = function(sd, a3C) {
		for (var qG = "<ul>", en = sd.length, aB = 0; aB < en; aB++) qG += "<li>" + sd[aB] + ": <a href='" + a3C[aB] + "' target='_blank'>" + a3C[aB] + "</a></li>";
		return qG += "</ul>"
	}, this.a3D = function(a3E) {
		return "<a href='" + a3E + "' target='_blank'>" + a3E + "</a>"
	}, this.a3F = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3G = function(e) {
		var dt = e.textContent;
		bA.rY.a3H(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qG) {
		return ug.measureText(qG).width
	}, this.t3 = function(a3I) {
		a3I.style.overflowX = "auto", a3I.style.overflowY = "hidden", a3I.style.whiteSpace = "nowrap", a3I.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tG = this.scrollLeft, e.preventDefault())
		}), a3I.addEventListener("scroll", function() {
			this.tG = this.scrollLeft
		})
	}
}

function a2B() {
	this.gy = function(a0y) {
		return 0 === a0y ? 1 === aD.zw && aD.hB : 1 === a0y ? 1 === aD.zw && !aD.hB : 2 === aD.zw
	}, this.gz = function(player) {
		return 0 !== ag.mi[player] && 2 !== ag.a3J[player]
	}, this.a3K = function(player) {
		return player === aD.eX && 2 !== ag.a3J[player]
	}, this.km = function(player, jJ) {
		return player !== jJ && (0 === bg.el[player] || bg.el[player] !== bg.el[jJ])
	}, this.lu = function() {
		return al.kB < 2 ? 0 : aD.hh ? 1 < bh.a3L() : ag.gb[lk[1]]
	}, this.a3M = function() {
		var kB = al.kB;
		if (0 !== kB) {
			if (!aD.hh) return !this.jY(lk[0]);
			for (var el = bg.el, kh = bh.ki(), kC = al.kC, aB = kB - 1; 0 <= aB; aB--) {
				var gL = kC[aB];
				if (el[gL] === kh && !this.jY(gL)) return 1
			}
		}
		return 0
	}, this.a3N = function(player) {
		return player === aD.eX
	}, this.jY = function(player) {
		return player >= aD.kA || 2 === ag.a3J[player]
	}, this.l6 = function(player) {
		return 0 !== ag.mi[player]
	}, this.zm = function(player) {
		return player < aD.kA
	}, this.pw = function(a3O, a3P) {
		return a3O !== a3P
	}, this.gC = function(player, fF) {
		var min;
		return fF = this.a3Q(player, fF), ag.gp[player] += fF, ag.a3R[player] && (min = Math.min(ag.a3R[player], ag.gp[player]), ag.a3R[player] -= min, ag.gp[player] -= min), fF
	}, this.a3Q = function(player, fF) {
		var a3S = ag.gp[player];
		return fF = Math.min(fF, ag.gb[player] * aD.a3T - a3S), fF = Math.min(fF, aD.a3U - a3S), Math.max(fF, 0)
	}, this.mH = function(player, iN, a3V, a3W) {
		var a3S = ag.gp[player],
			iN = bL.du(a3S * (iN + 1), 1024),
			a3V = bL.du(a3V * a3S, 1024),
			iN = Math.min(iN, a3S - a3V);
		return 10 === aD.kS && (iN = b4.a3Y(player, iN)), bO.fK[0] = iN, bO.fK[1] = a3V, a3W <= iN
	}, this.pQ = function(player, p8, p7) {
		var player = ag.gp[player],
			a3X = bL.du(64 * player, 1024);
		return p8 = Math.min(p8, player - a3X), p8 = this.a3Q(p7, p8), bO.fK[0] = p8, bO.fK[1] = a3X, 1 <= p8
	}, this.a3Z = function(player, p8, p7) {
		var player = ag.gp[player],
			a3X = bL.du(64 * player, 1024);
		return p8 = Math.min(p8, player - a3X), this.a3Q(p7, p8)
	}, this.pS = function(p8, p7) {
		return p8 = this.a3Q(p7, p8), bO.fK[0] = p8, bO.fK[1] = 0, 1 <= p8
	}, this.iM = function(player, a3a) {
		return bL.du(ag.gp[player] * (a3a + 1), 1024)
	}, this.a3b = function(player, a3V) {
		a3V = bL.du(a3V * ag.gp[player], 1024);
		bO.fK[1] = a3V, ag.gp[player] -= a3V
	}, this.gA = function(player, a3c) {
		var fY, fa, f7 = ag.gp[player];
		return a3c <= f7 ? ag.gp[player] -= a3c : (ag.gp[player] = 0, fa = ag.a3R[player] + (fY = 5 * ((f7 = a3c - f7) >> 2)), bd.gD(player, fY - f7, 12), fa <= aD.a3d ? ag.a3R[player] = fa : (ag.a3R[player] = aD.a3d, bd.gD(player, fa - aD.a3d,
			18))), a3c
	}, this.lK = function(player, iN) {
		var gp = ag.gp,
			a3S = gp[player],
			iN = bL.du(a3S * (iN + 1), 1024),
			a3X = Math.max(bL.du(a3S, 10), 1e3);
		return (iN = Math.min(iN, a3S - a3X)) < 0 ? (gp[player] = 0, a3X = Math.min(1e3, a3S + aD.a3d - ag.a3R[player]), bO.fK[1] = a3X, ag.a3R[player] += a3X - a3S, 0) : (bO.fK[1] = a3X, 10 === aD.kS && (iN = b4.a3Y(player, iN)), gp[player] -=
			a3X + iN, iN)
	}, this.mJ = function(player) {
		ag.gp[player] -= bO.fK[0] + bO.fK[1]
	}, this.px = function(player, jJ) {
		return (jJ = Math.min(jJ, aD.ek)) < aD.ek && 0 === ag.mi[jJ] && (jJ = aD.ek), (bO.ej[0] = jJ) === aD.ek || bs.eg(player, jJ)
	}, this.q0 = function(player, p7) {
		return 0 !== ag.mi[p7] && !bs.eg(player, p7)
	}, this.a3e = function(player, a3f) {
		for (var gL, en = al.kB, a3g = 0, a3h = lk, aB = 0; aB < en; aB++)
			if (gL = a3h[aB], !this.jY(gL)) {
				if (player === gL) return !0;
				if (++a3g > a3f) return !1
			} return !1
	}, this.lf = function(gL) {
		var a3i = aD.hh ? bh.kg() : ag.gb[lk[0]];
		return a3i >= bL.du(gL * aD.ju, 100)
	}, this.a3j = function(fF, min, max) {
		return Math.floor(bL.hv(isNaN(fF) ? 0 : Number(fF), min, max))
	}
}

function a2F() {
	this.a3k = function(canvas, a3l, a3m) {
		var i = canvas.width,
			j = canvas.height,
			f8 = bA.qZ.wL(i, j),
			hp = bA.qZ.getContext(f8, !0),
			canvas = (hp.drawImage(canvas, 0, 0), hp.getImageData(0, 0, i, j));
		return a3l(canvas.data, i, j, a3m), hp.putImageData(canvas, 0, 0), f8
	}, this.a3n = function(wW, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wW[3 + aB] = wW[aB], wW[aB] = wW[1 + aB] = wW[2 + aB] = 255
			}
	}, this.a3o = function(wW, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wW[1 + aB] > wW[2 + aB] + 10 && (wW[3 + aB] = wW[aB], wW[1 + aB] = wW[2 + aB])
			}
	}, this.a3p = function(wW, i, j, a3m) {
		for (var gap = Math.floor(Math.min(i, j) * a3m), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wW[3 + (aB = 4 * (eu + ew * i))] = 255 - 255 * (wW[1 + aB] - wW[aB]) / (255 - wW[aB]))
	}, this.a3q = function(wW, i, j, a3m) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wW[aB] = a3m[0], wW[1 + aB] = a3m[1], wW[2 + aB] = a3m[2]
			}
	}, this.a3r = function(wW, i, j, a3m) {
		for (var gap = Math.floor(i * a3m), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wW[aB = 4 * (eu + ew * i)] = wW[1 + aB] = wW[2 + aB] = 0)
	}, this.a3s = function(wW, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) 200 < wW[1 + (aB = 4 * (eu + ew * i))] && wW[1 + aB] - 20 > wW[aB] && wW[1 + aB] - 20 > wW[2 + aB] ? wW[aB] + wW[2 + aB] < 40 ? wW[3 + aB] = 0 : (wW[3 + aB] = wW[aB], wW[aB] = 255, wW[1 + aB] = 255, wW[
				2 + aB] = 255) : wW[aB] < 50 && wW[1 + aB] < 50 && wW[2 + aB] < 50 && (wW[aB] + wW[1 + aB] + wW[2 + aB] < 50 ? wW[3 + aB] = 180 : wW[3 + aB] = 180 + Math.floor(75 * (wW[aB] + wW[1 + aB] + wW[2 + aB] - 50) / 100))
	}, this.a3t = function(wW, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) wW[1 + (aB = 4 * (eu + ew * i))] > wW[aB] + 20 && wW[1 + aB] > wW[2 + aB] + 20 && wW[aB] + wW[2] < 40 && (wW[3 + aB] = 255 - wW[1 + aB], wW[aB] = wW[1 + aB] = wW[2 + aB] = wW[aB])
	}, this.a2r = function(wW, i, j, a3m) {
		for (var e7 = i >> 1, eu = 0; eu < i; eu++)
			for (var ew = 0; ew < j; ew++) Math.sqrt((eu - e7) * (eu - e7) + (ew - e7) * (ew - e7)) > a3m * e7 && (wW[4 * (eu + ew * i) + 3] = 0)
	}
}

function a2C() {
	var a3u = {
			":joy:": "😂",
			":rofl:": "🤣",
			":sob:": "😭",
			":sad": "😔",
			":eyes:": "👀",
			":skull:": "💀",
			":fire:": "🔥",
			":100:": "💯",
			":clown:": "🤡",
			":sunglasses:": "😎",
			":thinking:": "🤔",
			":zzz:": "😴",
			":rage:": "😡",
			":poop:": "💩",
			":thumbsup:": "👍",
			":thumbsdown:": "👎",
			":pray:": "🙏",
			":clap:": "👏",
			":trophy:": "🏆",
			":sparkles:": "✨",
			":heart:": "❤️",
			":brokenheart:": "💔",
			":laughing:": "😆",
			":grimacing:": "😬",
			":grinning:": "😀",
			":ok:": "👌",
			":pepehands:": "🙌",
			":gold:": "🧈"
		},
		a3v = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rZ = function(uw) {
		return uw.replace(a3v, function(match) {
			return a3u[match] || match
		})
	}, this.zD = function(fF) {
		var aB, a3w, a3x, a3y, a3z;
		if (fF < 0) return "-" + this.zD(Math.abs(fF));
		if (fF < 1e3) return fF.toString();
		for (a3w = Math.floor(Math.log(fF + .5) / Math.log(10)) + 1, a3x = Math.floor((a3w - 1) / 3), a3z = (a3y = fF.toString()).substring(a3w - 3, a3w), aB = 1; aB < a3x; aB++) a3z = a3y.substring(a3w - 3 * (aB + 1), a3w - 3 * aB) + " " + a3z;
		return a3y.substring(0, a3w - 3 * a3x) + " " + a3z
	}, this.a40 = function(gL, a3w) {
		return gL.toFixed(a3w) + "%"
	}, this.a41 = function(fF, a42) {
		return fF.toFixed(bL.hv(Math.floor((void 0 === a42 ? 3 : a42) - Math.log10(Math.max(fF, 1))), 0, 8))
	}, this.a43 = function(fF, nK, a3w) {
		return (fF * nK).toFixed(a3w)
	}, this.a0d = function(username) {
		var er, ec = username.indexOf("[");
		return !(ec < 0) && 1 < (er = username.indexOf("]")) - ec && er - ec <= 8 ? username.substring(ec + 1, er).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0d;
	this.a44 = function(qG) {
		for (var f6 = Math.floor(.5 * qG.length + .5), nQ = Math.floor(.5 * (f6 - 1)), aB = 0; aB < nQ; aB++)
			for (var f7 = -1; f7 < 2; f7 += 2) {
				var f8 = f6 + f7 * aB;
				if (" " === qG[f8]) return [this.a0Z(qG.substring(0, f8)), this.a45(qG.substring(f8))]
			}
		return [qG.substring(0, f6), qG.substring(f6)]
	}, this.a45 = function(qG) {
		for (var en = qG.length, aB = 0; aB < en; aB++)
			if (" " !== qG[aB]) return qG.substring(aB);
		return qG
	}, this.a0Z = function(qG) {
		for (var aB = qG.length - 1; 0 <= aB; aB--)
			if (" " !== qG[aB]) return qG.substring(0, aB + 1);
		return qG
	}, this.a46 = function(qG, a47) {
		return qG.split("(")[0] + "(🧈 " + a47.toFixed(2) + ")"
	}, this.startsWith = function(qG, a48) {
		return qG.substring(0, a48.length) === a48
	}, this.a3H = function(qG, a48) {
		var en = qG.length;
		return qG.substring(en - a48.length, en) === a48
	}, this.a49 = function(g, a4A, a4B) {
		var qG = "",
			en = g.length - 1;
		a4B = a4B || "";
		for (var aB = 0; aB < en; aB++) qG += a4B + g[aB] + a4B + ",", (aB + 1) % a4A == 0 && (qG += "\n");
		return qG += a4B + g[en] + a4B
	}, this.a4C = function(qG, z2, z3) {
		return qG.replace(new RegExp(z2, "g"), z3)
	}
}

function a4D() {
	this.jG = function(player, eZ) {
		aI.xq(player, bM.ev(eZ), bM.ex(eZ)) && (bf.dl = !0), aD.kU && this.j3()
	}, this.j3 = function() {
		aD.hB = !1;
		for (var aB = 0; aB < aD.kA; aB++) 0 !== ag.mi[aB] && 0 === ag.gb[aB] && aI.xx(aB);
		0 !== ag.mi[aD.eX] ? (bd.me[7] = ag.gb[aD.eX], bd.me[8] = ag.gp[aD.eX], aR.a4E(), aW.a4F(), aD.gw || aH.n2(ag.ie[aD.eX] - 5, ag.ih[aD.eX] - 5, ag.ig[aD.eX] + 5, ag.ii[aD.eX] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a4G(18), af.a4H(),
			af.mU(!0), bP.y.a4I(), aL.rq(), aD.pv = null, bb.a4J = !0, bb.a4K(), aD.kU && a0.a1.setState(1)
	}
}

function c1() {
	this.ek = 512, this.a3U = 15e8, this.a4L = 1e9, this.a3d = 5e4, this.a4M = 512, this.g7 = 2, this.eX = 0, this.kA = 0, this.zz = 0, this.kW = 0, this.zy = 0, this.x1 = 512, this.x6 = 512, this.a3T = 150, this.kU = !0, this.gw = 0, this.zw = 0,
		this.ju = 0, this.nB = !1, this.hB = 0, this.a4N = 0, this.hh = !1, this.x8 = 0, this.x9 = 0, this.kS = 0, this.yN = 0, this.pv = null, this.a0E = new yC, this.a4O = 30, this.zt = 0, this.a01 = 0, this.a0D = 0, this.zo = 0, this.data =
		new a4P, this.a4Q = new a4R, this.a4S = 0, this.a4T = "", this.a4U = function() {
			bO.dd(), bR.dd(), this.zz = this.kA = this.data.humanCount, this.kU = 1 === this.zz, this.nB = !1, this.gw = this.data.isReplay, this.kS = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 :
				this.data.numberTeams - 2, this.yN = this.data.isContest, this.hh = this.kS < 7 || 9 === this.kS, this.kS = 10 === this.kS && this.kU ? 7 : this.kS, this.kS = 8 === this.kS && 2 !== this.kA ? 7 : this.kS, az.dd(), this.x8 = this.data
				.numberTeams, this.data.teamPlayerCount ? this.x9 = +(0 < this.data.teamPlayerCount[0]) : (this.x9 = 0, this.hh && this.kU && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.x8 + 1), aD.a4Q
					.a4V())), this.a4O = this.kA <= 2 ? 30 : this.kA <= 50 ? 40 : 50, this.a4N = this.hB = this.data.selectableSpawn, this.pv = this.hB ? new a4D : null, 1 === l.ds ? this.x1 = this.kA : this.x1 = this.data.playerCount, this.x6 = this
				.x1, this.kW = this.x1 - this.kA, this.zy = 0, this.eX = this.data.selectedPlayer, this.zt = 0, this.a01 = 0, this.a0D = 0, this.zo = 0, ay.a4W(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai.a4X(), b8.p0.pi = [], bg.dd(), this
				.zw = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a4Y(), ac.de(), ap.a4Z(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a4a(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a4b(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a4c.putImageData(a4d, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), fq(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a0E.dd(), bf.a4a(), aH.n1(), 0 === ag.mi[aD.eX] && aX.show(!1, !0), af.mU(!0), av.dd(), bf.dl = !0, this.gw || this.kU && this.hB || a0.a1.setState(1), this.a4S = 0
		}, this.a1H = function(a4f) {
			b9.pt.a4g.length ? this.a4T = b9.pt.a4g : this.a4T = b9.a4h.zO(), b0.y.a4i(), bq.clear(), this.zw = 0, bf.a4j(), a0.a1.setState(0), aa.setState(0), a4f || bU.eG.show(), 2 === this.a4S ? t.y.a4k() : 1 === this.a4S ? t.u(19) : t.u(5, 5)
		}, this.a4l = function() {
			return this.gw ? aM.gx || !bC.a4m : this.kU && (aM.gx || this.hB)
		}, this.a4n = function() {
			return 1 === this.zw && !this.hB
		}
}

function a4P() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4R() {
	this.a4V = function() {
		var a4o = aD.data;
		bA.qh.a2g(a4o.teamPlayerCount, a4o.playerCount), a4o.numberTeams = bA.qh.a2X(a4o.teamPlayerCount, 0), a4o.teamPlayerCount[0] && a4o.teamPlayerCount[7] && (a4o.teamPlayerCount[7] = 0, this.a4V())
	}, this.a4p = function() {
		var a4o = aD.data;
		a4o.mapType < 2 ? bS.a7(bS.a4q(a4o), a4o.mapSeed) : bS.a4r(a4o.canvas)
	}, this.a4s = function() {
		var a4o = aD.data;
		a4o.colorsData || (a4o.colorsData = new Uint32Array(1)), a4o.selectableColor && (a4o.colorsData[0] = bj.y.vZ()), a4o.selectableName && (a4o.playerNamesData || (a4o.playerNamesData = new Array(1)), a4o.playerNamesData[0] = bj.eK.data[122]
			.value)
	}, this.a4t = function() {
		aD.data = new a4P, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ek), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a4u = [];
	this.yO = function(qG, pI) {
		qG = {
			eM: aW.a4w(),
			qG: qG,
			pI: pI
		};
		a4u.push(qG), 30 === t.sn && t.a4x().yO(qG)
	}, this.clear = function() {
		a4u = [], t.a4y(30) && t.a4y(30).clear()
	}, this.a4z = function() {
		return a4u
	}
}

function dT() {
	this.yu = 0, this.gap = 0, this.sP = 0, this.qf = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.yu = .0022 * bA.qZ.qa(.5) * h.hx, this.sP = this.yu / h.k, this.gap = Math.max(Math.floor((a0.a1.hw() ? .0114 : .01296) * h.hx), 2), this.qf = this.gap / h.k
	}
}

function dS() {
	this.a50 = function() {
		return a0.a1.hw() ? 2 : 1
	}
}

function cC() {
	var r8, eu, ew, a51, a52, a53, eM, a54, a55, a56, a57, gap, zoom, pb, a58;

	function a5M(lN, lO, eR) {
		ac.ei(eR) || -1 === (lN = bN.kx.a5V(lN, lO)) ? aN.a5U(eR) : aN.a5W(lN)
	}

	function a5I(a54) {
		for (var aB = pb.length - 1; 0 <= aB; aB--)
			if (pb[aB] === a54) return 1
	}

	function a5G(a5D) {
		var aB, en;
		if (-1 !== a5D)
			for (en = r8.length, aB = 0; aB < en; aB++)
				if (r8[aB].hZ && r8[aB].eu + 1 === a5D % 4 && r8[aB].ew + 1 === a5D >> 2) return aB;
		return -1
	}

	function a5E(lN, lO) {
		var tB = gap / 2;
		return lN < eu - a51 - 3 * tB || eu + 3 * a51 + 5 * tB < lN || lO < ew - a51 - 3 * tB || ew + 2 * a51 + 3 * tB < lO ? -1 : 4 * (lO < ew - tB ? 0 : lO < ew + a51 + tB ? 1 : 2) + (lN < eu - tB ? 0 : lN < eu + a51 + tB ? 1 : lN < eu + 2 * a51 +
			3 * tB ? 2 : 3)
	}
	this.a59 = function() {
		var aB, f7, a5C = [bB.o8, bB.oM, bB.ng, bB.oi, bB.oZ];
		for (r8 = new Array(10), aB = 0; aB < 10; aB++) r8[aB] = {
			id: aB,
			hZ: !1,
			l5: 0,
			canvas: [],
			eu: 0,
			ew: 0
		};
		for (r8[0].colors = [0, 1, 2, 3], r8[0].eu = 0, r8[0].ew = 0, r8[1].colors = [1, 4], r8[1].eu = 1, r8[1].ew = 0, r8[2].colors = [0, 1], r8[2].eu = -1, r8[2].ew = 0, r8[3].colors = [0], r8[3].eu = 0, r8[3].ew = 0, r8[4].colors = [0, 2],
			r8[4].eu = 1, r8[4].ew = 1, r8[5].colors = [3], r8[5].eu = 0, r8[5].ew = -1, r8[6].id = 20, r8[6].colors = [0], r8[6].eu = 1, r8[6].ew = -1, r8[7].id = 21, r8[7].colors = [0], r8[7].eu = 0, r8[7].ew = 1, r8[8].id = 16, r8[8]
			.colors = [0], r8[8].eu = 0, r8[8].ew = 0, r8[9].id = 10, r8[9].colors = [4], r8[9].eu = 2, r8[9].ew = 0, aB = 0; aB < 10; aB++)
			for (f7 = 0; f7 < r8[aB].colors.length; f7++) r8[aB].canvas.push(function(id, a2m) {
				if (id < 20) return bA.canvas.yg(ab.get(3), id, a2m);
				var a2m = ab.get(3).height,
					a2n = bA.qZ.wL(a2m, a2m),
					hp = bA.qZ.getContext(a2n);
				20 === id ? hp.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wW.yv(aj.rp.yk + aj.rp.z1, hp, 0, 0, a2m);
				return a2n
			}(r8[aB].id, a5C[r8[aB].colors[f7]]))
	}, this.a5B = function() {
		return r8
	}, this.dd = function() {
		pb = [], eu = ew = eM = 0, a52 = a53 = -1e3, this.resize()
	}, this.resize = function() {
		a51 = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), zoom = a51 / ab.get(3).height, gap = Math.floor(a51 / 3)
	}, this.a1n = function(lN, lO) {
		return !!this.hZ() && (bf.dl = !0, !!aj.wW.h0(lN, lO, a55) || (lN = function(lN, lO) {
			a53 = a52 = -1e3;
			var a5F = a5G(a5E(lN, lO));
			if (-1 === a5F) return 0;
			if (1 !== r8[a5F].colors[r8[a5F].l5])
				if (5 === a5F) {
					if (! function() {
							var dt = performance.now();
							a58 + 4e3 < dt && (pb = []);
							a58 = dt
						}(), a5I(a54)) return 1;
					pb.push(a54), 16 < pb.length && pb.shift()
				} else if (6 === a5F) {
				for (var aB = pb.length - 1; 0 <= aB; aB--) 0 === ag.mi[pb[aB]] && pb.splice(aB, 1);
				0 < pb.length && (b5.a5J(1, pb, !0) && b8.g9.pa(pb, a54), pb = [])
			} else if (2 === a5F) an.hR(a54) && b8.hD.p6(aR.hH(), a54);
			else if (3 === a5F) aD.hB && b8.hD.hE(a56);
			else if (0 === a5F)
				if (0 === r8[0].l5) {
					if (aD.a4N && aW.a4w() < 350) return 1;
					bV.a5K(4), b8.hD.hK(aR.hH(), a54)
				} else b1.hL(a54, aR.hH());
			else if (1 === a5F) b8.hD.hP(aR.hH(), a56);
			else if (9 === a5F) b8.hD.hS(aR.hH());
			else {
				if (7 === a5F) return bV.a5K(0), aj.wW.show(lN, lO), 2;
				if (4 === a5F) b5.a5J(0, [a54], !0) && b8.g9.pX(a54);
				else {
					if (8 !== a5F) return 0;
					b8.hD.hG(aR.hH(), a57, a54)
				}
			}
			return 1
		}(lN, lO), this.rq(), 2 === lN && (aj.wW.hZ = !0), 0 < lN))
	}, this.a1p = function(lN, lO) {
		this.hZ() || (a52 = lN, a53 = lO, eM = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.h3(mouseX),
			coordY = bM.h5(mouseY),
			coord = bM.fB(coordX, coordY),
			coord = bM.ed(coord);
		bM.h6(coordX, coordY) && a5M(mouseX, mouseY, coord)
	}, this.click = function(lN, lO, a1w) {
		var h2 = bM.h3(lN),
			h4 = bM.h5(lO),
			eZ = bM.fB(h2, h4),
			eR = bM.ed(eZ);
		return !(!bM.h6(h2, h4) || (h2 = (a0.a1.hw() ? .025 : .0144) * h.hx, h4 = performance.now(), Math.abs(lN - a52) > h2) || Math.abs(lO - a53) > h2 || eM + 500 < h4) && (eM = h4, a1w ? (a5M(lN, lO, eR), !1) : aM.gx || this.hZ() || !bA.g9.gz(
			aD.eX) || aD.gw ? (this.rq(), !1) : (aD.hB ? 0 <= (a56 = br.hC(eZ)) && (r8[3].hZ = !0) : 2 === aD.zw ? ac.gN(eR) && (a54 = ac.ef(eR), bA.g9.jY(a54) || (r8[0].hZ = !0, r8[0].l5 = 1, r8[7].hZ = !0)) : (bN.hQ.hR(aD.eX, eZ) && (
			r8[0].hZ = !0, r8[0].l5 = 1, r8[1].hZ = !0, r8[1].l5 = 0, r8[9].hZ = !0, r8[9].l5 = 0), bN.hN.hO(aD.eX, eZ) && (r8[0].hZ = !0, r8[0].l5 = 1, r8[1].hZ = !0, r8[1].l5 = 1, a56 = bO.fP[7]), ac.es(eR) ? (a57 = am.eO.eQ(
			eR)) && (h2 = bM.ed(a57), r8[8].hZ = !0, a54 = ac.ee(h2) ? aD.ek : ac.ef(h2)) : (ac.xv(aD.eX, eR) && (a55 = aD.eX, r8[0].hZ = !0, r8[0].l5 = 1, r8[7].hZ = !0), -1 !== (h4 = br.hI(eZ)) && (ac.ee(h4 << 2) ? (a54 = aD.ek,
			bs.hJ(aD.eX) ? (r8[0].hZ = !0, r8[0].l5 = 0) : ad.fu(aD.eX) && (r8[0].hZ = !0, r8[0].l5 = 3)) : (a54 = ac.ef(h4 << 2), r8[0].l5 = 1, r8[5].hZ = function(a54) {
			return !bA.g9.jY(a54) && !a5I(a54) && b5.a5J(1, [a54], !1)
		}(a54), r8[7].hZ || bA.g9.jY(a54) || (a55 = a54, r8[7].hZ = !0), r8[4].hZ = !bA.g9.jY(a54) && !af.a5Q(a54) && b5.a5J(0, [a54], !1), r8[6].hZ = function(a54) {
			if (0 === pb.length) return !1;
			if (performance.now() > a58 + 4e3) return !(pb = []);
			return !a5I(a54) && ! function(a54) {
				var aB;
				if (aD.hh)
					for (aB = pb.length - 1; 0 <= aB; aB--)
						if (!bs.eg(a54, pb[aB])) return 1;
				return
			}(a54)
		}(a54), bs.eg(a54, aD.eX) ? (bs.hM(aD.eX, a54) ? (r8[0].l5 = 0, r8[0].hZ = !0) : ad.fu(aD.eX) && (r8[0].l5 = 3, r8[0].hZ = !0), r8[0].hZ = this.a5S()) : (r8[2].hZ = !0, an.hR(a54) ? r8[2].l5 = 0 : r8[2].l5 = 1,
			r8[0].hZ = !0))))), this.a5N(lN, lO)))
	}, this.a5N = function(lN, lO) {
		return eu = lN - Math.floor(a51 / 2), ew = lO - Math.floor(a51 / 2), !!this.hZ()
	}, this.a1Q = function(lN, lO) {
		return !!this.hZ() && (aj.wW.hZ ? !aj.wW.yt(lN, lO) && (aj.wW.hZ = !1, bf.dl = !0) : function(sA, lN, lO) {
			lN = a5E(lN, lO);
			if (0 <= a5G(lN)) return !1;
			if ((1 === lN || 6 === lN) && 0 <= a5G(2)) return !1;
			if ((6 === lN || 9 === lN) && 0 <= a5G(10)) return !1;
			return sA.rq(), bf.dl = !0
		}(this, lN, lO))
	}, this.rq = function() {
		for (var aB = r8.length - 1; 0 <= aB; aB--) r8[aB].hZ = !1, r8[aB].l5 = 0;
		aj.wW.hZ = !1
	}, this.hZ = function() {
		return this.a5S() || aj.wW.hZ
	}, this.a5S = function() {
		for (var en = r8.length, aB = 0; aB < en; aB++)
			if (r8[aB].hZ) return !0;
		return !1
	}, this.uf = function() {
		if (this.hZ())
			if (aj.wW.hZ) aj.wW.uf();
			else {
				var aB, hp = ug,
					f7 = r8,
					en = f7.length,
					a5a = (a51 + gap) / zoom;
				for (hp.imageSmoothingEnabled = !0, hp.setTransform(zoom, 0, 0, zoom, eu, ew), aB = 0; aB < en; aB++) f7[aB].hZ && ug.drawImage(f7[aB].canvas[f7[aB].l5], f7[aB].eu * a5a, f7[aB].ew * a5a);
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a5b, a5c, a5d, a5e = -1;

	function a5f() {
		var a5g, y6 = canvas.getContext("2d", {
			alpha: !0
		});
		y6.clearRect(0, 0, j, j), y6.fillStyle = bB.ne, y6.fillRect(0, 0, j, j), 0 === a5c && (y6.fillStyle = bB.nj, y6.fillRect(0, 0, j, j)), y6.fillStyle = bB.ni, y6.fillRect(0, 0, j, 1), y6.fillRect(0, 0, 1, j), y6.fillRect(0, j - 1, j, 1), y6
			.fillRect(j - 1, 0, 1, j), a5g = .9 * j / ab.get(0).width, y6.imageSmoothingEnabled = !0, y6.setTransform(a5g, 0, 0, a5g, Math.floor((j - a5g * ab.get(0).width) / 2), Math.floor((j - a5g * ab.get(0).height) / 2)), y6.drawImage(ab.get(0),
				0, 0), y6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5i(lN, lO) {
		if (!aM.gx) return lN <= j + bc.gap && lO >= aR.ew ? 9 : -1;
		if (lN <= 4 * j + bc.gap) {
			if (lO >= aR.ew) return 0;
			if (lO >= aR.ew - j - a5d * bc.gap) return 2
		} else if (lN <= 7 * j + bc.gap && lO >= aR.ew - j - a5d * bc.gap) return 1;
		return -1
	}
	this.gx = !1, this.dd = function() {
		a5c = -1, this.gx = !1, a5d = a0.a1.hw() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5b = bA.qZ.sN(1, (a0.a1.hw() ? .5 : .45) * j), a5f()
	}, this.a24 = function() {
		this.gx = !this.gx, this.gx ? (bC.a23(!1), aD.gw && bC.a4m && bC.a25(!0), this.a5h()) : (a5c = -1, a5f(), !aD.kU || 1 !== aD.zw || aD.hB || aD.gw || a0.a1.setState(1)), bf.dl = !0
	}, this.a5h = function() {
		(aD.kU || aD.gw) && 1 === aD.zw && (aV.mU(!0), aD.hB || setTimeout(function() {
			bb.a07()
		}, 0), a0.a1.setState(0))
	}, this.h0 = function(lN, lO) {
		return 0 <= (a5e = a5i(lN, lO)) || !aM.gx || aD.kU || aD.gw || be.hZ || aM.a24(), a5e
	}, this.a1Q = function(lN, lO) {
		lN = a5i(lN, lO);
		lN !== a5c && (a5c = lN, this.gx || a5f(), bf.dl = !0)
	}, this.a1R = function(lN, lO) {
		lN = a5i(lN, lO);
		return -1 !== lN && a5e === lN && (this.gx ? aD.nB ? (0 <= lN && bC.a23(!1), !aD.gw) : (0 === lN ? aD.a1H() : 1 === lN ? this.a24() : 2 === lN && t.u(1, 0), !0) : 9 === lN && (this.a24(), !0))
	}, this.uf = function() {
		var i;
		this.gx ? (i = Math.floor(5.5 * j), ug.setTransform(1, 0, 0, 1, bc.gap, aR.ew), ug.fillStyle = bB.ne, ug.fillRect(0, 0, i, j), 0 === a5c ? (ug.fillStyle = bB.nj, ug.fillRect(0, 0, 4 * j, j)) : 1 === a5c && (ug.fillStyle = bB.nj, ug
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), ug.fillStyle = bB.ni, ug.fillRect(0, 0, i, 1), ug.fillRect(0, 0, 1, j), ug.fillRect(4 * j, 0, 1, j), ug.fillRect(0, j - 1, i, 1), ug.fillRect(i - 1, 0, 1, j), ug.font = a5b, bA.qZ
			.textBaseline(ug, 1), bA.qZ.textAlign(ug, 1), ug.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a5m(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.ew + .3 * j, i), i = 1, ug.setTransform(1, 0, 0, 1, bc.gap, aR.ew - i * a5d * bc.gap - i *
				j), ug.fillStyle = bB.ne, ug.fillRect(0, 0, 4 * j, j), a5c === i + 1 && (ug.fillStyle = bB.nj, ug.fillRect(0, 0, 4 * j, j)), ug.fillStyle = bB.ni, ug.fillRect(0, 0, 4 * j, 1), ug.fillRect(0, 0, 1, j), ug.fillRect(4 * j, 0, 1,
				j), ug.fillRect(0, j - 1, 4 * j, 1), ug.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), ug.setTransform(1, 0, 0, 1, 0, 0)) : ug.drawImage(canvas, bc.gap, aR.ew)
	}, this.qA = function(player) {
		return 0 !== ag.mi[player] && 2 !== aD.zw && !bA.g9.jY(player)
	}, this.a5m = function(eu, ew, en) {
		ug.setTransform(1, 0, 0, 1, eu, ew), ug.lineWidth = bc.yu, ug.strokeStyle = bB.ni, ug.beginPath(), ug.moveTo(0, 0), ug.lineTo(en, en), ug.moveTo(0, en), ug.lineTo(en, 0), ug.stroke()
	}
}

function cE() {
	var a5o, j, a5p, a5q, a5r, a5s, a5t, a5u, a5v;

	function y2() {
		return aR.a6D(aN.a69()) ? aw.hZ ? __fx.settings.keybindButtons ? aR.ew - 2 * aR.j - 3 * a5p : aR.ew - aR.j - 2 * a5p : __fx.settings.keybindButtons ? aR.ew - aR.j - 2 * a5p : aR.ew - a5p : bC.a6D(aN.a6C()) ? aw.hZ ? bC.y2() - aR.j - 2 * a5p :
			bC.y2() - a5p : aw.hZ ? h.j - aR.j - (bk.a50() + 1) * a5p : h.j - bk.a50() * bc.gap
	}

	function a60(dt, qG, id, gL, a63, a64, kl, a65, a66, a67, a6I) {
		var aB, y6, a2n, qR, a6J = void 0 !== a66,
			i = Math.floor(aQ.measureText(qG, aN.a5b) + 1.5 * a5q + (a6J ? j : 1.5 * a5q));
		if (bf.dl = !0, a6I || bq.yO(qG, a66), i + 2 * a5p + aR.j > h.i && !a6J && 50 !== id && 20 < qG.length) a60(dt, (a6I = bA.rY.a44(qG))[0], id, gL, a63, a64, kl, a65, a66, a67, !0), a60(dt, a6I[1], id, gL, a63, a64, kl, a65, a66, a67, !0);
		else if (a6I = i + (50 === id ? a5r : 0), (a2n = document.createElement("canvas")).width = i, a2n.height = j, (y6 = a2n.getContext("2d", {
				alpha: !0
			})).font = aN.a5b, bA.qZ.textBaseline(y6, 1), bA.qZ.textAlign(y6, 0), y6.clearRect(0, 0, i, j), y6.fillStyle = a64, y6.fillRect(0, 0, i, j), y6.fillStyle = a63, y6.fillText(qG, Math.floor(1.5 * a5q), Math.floor(j / 2)), a6J && (y6
				.imageSmoothingEnabled = !0, aj.wW.yv(a66, y6, i - j, 0, j)), 0 === (qR = {
				eM: dt,
				qG: qG,
				id: id,
				player: gL,
				canvas: a2n,
				a63: a63,
				a64: a64,
				i: i,
				a6A: a6I,
				kl: kl,
				a65: a65,
				a66: a66,
				a67: a67
			}).eM || 0 < a5o.length && 0 < a5o[0].eM) a5o.unshift(qR);
		else {
			for (aB = 1; aB < a5o.length; aB++)
				if (0 < a5o[aB].eM) return void a5o.splice(aB, 0, qR);
			a5o.push(qR)
		}
	}

	function a61(e7, tB, f7) {
		return "rgb(" + e7 + "," + tB + "," + f7 + ")"
	}

	function a6K(id, gG) {
		for (var en = a5o.length, aB = 0; aB < en; aB++) a5o[aB].id === id && gG-- <= 0 && (a5o.splice(aB, 1), aB--, en--)
	}

	function a6L(id, player) {
		for (var f1 = !1, aB = a5o.length - 1; 0 <= aB; aB--) a5o[aB].id !== id || player !== aD.ek && a5o[aB].player !== player || (a5o.splice(aB, 1), f1 = !0);
		return f1
	}

	function a6i(qG) {
		a60(340, qG, 6, 0, a61(215, 245, 255), bB.nf, -1, !1)
	}
	this.a5w = "", this.dd = function() {
		var self;
		a5u = 0, a5t = a0.a1.hw() ? 7 : 12, a5s = {
			zk: [0, 0, 0],
			a5x: [0, 0, 0],
			eF: [220, 180, 180],
			ue: [0, 0, 0],
			f8: [0, 0, 0]
		}, a5o = [], this.resize(), aD.hB && this.a08(0, 18), bS.wJ.wK[bS.eT].name.length && a6i(L(88, [bS.wJ.wK[bS.eT].name])), a6i(L(89, [bS.ey - 2 + "x" + (bS.ez - 2)])), a6i(L(90, [bA.rY.zD(ap.a6j)])), ap.a6j !== ap.a6k && a6i(L(91, [bA
			.rY.zD(ap.a6k) + " (" + bA.rY.a40(100 * ap.a6k / ap.a6j, 1) + ")"
		])), 0 < ap.a6l && a6i(L(66, [bA.rY.zD(ap.a6l) + " (" + bA.rY.a40(100 * ap.a6l / ap.a6j, 1) + ")"])), 0 < ap.a6m && a6i(L(92, [bA.rY.zD(ap.a6m) + " (" + bA.rY.a40(100 * ap.a6m / ap.a6j, 1) + ")"])), 10 === aD.kS && a60(120, L(93), 6,
			0, a61(235, 255, 120), bB.nf, -1, !1), 0 !== (self = this).a5w.length && (a60(200, self.a5w, 0, 0, bB.ni, bB.nf, -1, !1), self.a5w = ""), aD.yN && a60(340, L(44), 6, 0, a61(255, 200, 0), bB.nf, -1, !1)
	}, this.resize = function() {
		var a62, aB;
		if (j = (j = Math.floor((a0.a1.hw() ? .031 : .0249) * h.hx)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5b = bA.qZ.sN(1, this.fontSize), a5p = bc.gap, a5q = Math.floor(j / 5), 0 < a5o.length)
			for (a62 = a5o, a5o = [], aB = a62.length - 1; 0 <= aB; aB--) a60(a62[aB].eM, a62[aB].qG, a62[aB].id, a62[aB].player, a62[aB].a63, a62[aB].a64, a62[aB].kl, a62[aB].a65, a62[aB].a66, a62[aB].a67, !0);
		this.a68()
	}, this.a68 = function() {
		a5v = document.createElement("canvas");
		var qG = L(45),
			y6 = (a5r = aQ.measureText(qG, this.a5b) + 5 * a5q, a5v.height = j, a5v.width = a5r, a5v.getContext("2d", {
				alpha: !0
			}));
		y6.font = this.a5b, bA.qZ.textBaseline(y6, 1), bA.qZ.textAlign(y6, 1), y6.clearRect(0, 0, a5r, j), y6.fillStyle = bB.o5, y6.fillRect(0, 0, a5r, j), y6.fillStyle = bB.ni, y6.fillText(qG, Math.floor(a5r / 2), Math.floor(j / 2))
	}, this.a69 = function() {
		var en;
		return aw.hZ ? aw.i : 0 === (en = a5o.length) ? 0 : 1 === en ? a5o[0].a6A : a6B(a5o[0].a6A, a5o[1].a6A)
	}, this.a6C = function() {
		var en = a5o.length;
		return aw.hZ ? en ? a6B(aw.i, a5o[0].a6A) : aw.i : 0 === en ? 0 : 1 === en ? a5o[0].a6A : 2 === en ? a6B(a5o[0].a6A, a5o[1].a6A) : a6B(a6B(a5o[0].a6A, a5o[1].a6A), a5o[2].a6A)
	}, this.h0 = function(eu, ew) {
		for (var n8, a6E, a6F = y2(), aB = a5o.length - 1; 0 <= aB; aB--)
			if ((a6E = a6F - (aB + 1) * j) <= ew && ew < a6E + j) return 50 === a5o[aB].id ? eu >= h.i - a5r - a5p - a5o[aB].i && (eu >= h.i - a5r - a5p ? b8.g9.pX(a5o[aB].player) : aH.n3(a5o[aB].player, 800, !1, 0), !0) : eu >= h.i - a5o[aB].i -
				a5p && (736 === a5o[aB].id ? (a6E = a5o[aB].qG.split(" "), window.open(a6E[a6E.length - 1], "_blank")) : a5o[aB].a65 && (a5o[aB].a67 && a5o[aB].a67.f6 ? (a6E = a5o[aB].a67.eZ, n8 = bM.ev(a6E) - 10, a6E = bM.ex(a6E) - 10, aH
					.n2(n8, a6E, 19 + n8, 19 + a6E)) : a5o[aB].a67 && a5o[aB].a67.f7 ? aH.n4(a5o[aB].player, a5o[aB].a67.n5) : (aH.n3(a5o[aB].player, 800, !1, 0), 0 <= a5o[aB].kl && (n8 = a5o[aB].kl, a5o[aB].kl = a5o[aB].player, a5o[
					aB].player = n8))), !0);
		return !1
	}, this.yO = function(dt, qG, id, gL, a63, a64, kl, a65, a66, a67) {
		a60(dt, qG, id, gL, a63, a64, kl, a65, a66, a67)
	}, this.a6H = function(r) {
		a60(300, r, 252, 0, bB.ni, bB.nf, -1, !1)
	}, this.a4G = function(id) {
		for (var aB = a5o.length - 1; 0 <= aB; aB--) a5o[aB].id === id && (a5o[aB].eM = 1)
	}, this.a08 = function(player, id) {
		0 === id ? (aQ.jG(player, 0), a6K(423, 0), a60(160, L(46, [ag.yP[player]]), 423, player, "rgb(10,220,10)", bB.nf, -1, !1)) : 1 === id ? (a6L(50, aD.ek), aQ.jG(player, 1), a60(360, L(47, [ag.yP[player]]), 0, player, bB.oO, bB.nf, -1, !0),
			aH.n3(player, 2700, !1, 0)) : 2 === id ? (aQ.jG(player, 2), a60(0, L(48), 0, player, "rgb(10,255,255)", bB.nf, -1, !0), aH.n3(player, 2700, !1, 0)) : 3 === id ? (aQ.jG(player, 2), a60(0, L(49, [ag.yP[player]]), 0, player, bB.ni,
			bB.nf, -1, !0), aH.n3(player, 2700, !1, 0)) : 4 === id ? this.a6M(1, player, player) : 5 === id ? 2 === ag.a3J[player] || bA.g9.jY(aD.eX) || (function(id, md) {
			var aB, a6W = 0,
				en = a5o.length;
			for (aB = 0; aB < en; aB++)
				if (a5o[aB].id === id && md <= ++a6W) return a5o.splice(aB, 1)
		}(1, 5), af.a6O(player) ? a60(180, L(50, [ag.yP[player]]), 1, player, a61(255, 200, 180), bB.nf, -1, !0) : (a6K(573, 0), a60(180, L(51, [ag.yP[player]]), 573, player, bB.oO, bB.nf, -1, !0))) : 18 === id ? a60(255, L(52), 18, 0, bB.ni,
			bB.nf, -1, !1) : 21 === id ? a60(220, L(53), id, 0, bB.ni, bB.nf, -1, !1) : 22 === id ? this.a6M(2, player, player) : 59 === id && a60(0, L(54), id, 0, bB.oh, bB.nf, 0, !1)
	}, this.a1D = function(r) {
		a60(200, L(55, [r]), 94, 0, bB.ni, bB.oK, -1, !1)
	}, this.a0K = function(a6P) {
		if (aD.eX === a6P && !aD.kU)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a60(0, "Your Win Count is now " + __fx.wins.count, 3, a6P, bB.ni, bB.nf, -1, !0);
		ag.gb[a6P] && (aQ.jG(a6P, 2), aD.kA < 100 ? a60(0, L(49, [ag.yP[a6P]]), 3, a6P, bB.ni, bB.nf, -1, !0) : a60(0, L(56, [ag.yP[a6P]]), 3, a6P, bB.ni, bB.nf, -1, !0))
	}, this.a5U = function(eR) {
		var a6R, qG, a6Q = "(" + bM.ev(eR >> 2) + ", " + bM.ex(eR >> 2) + ")",
			a65 = !1,
			player = 0;
		ac.ei(eR) ? ac.ee(eR) ? a6Q = L(57, [a6Q]) : (player = ac.ef(eR), qG = L(58, [bA.y6.a2z(ag.a0a[player], bA.qZ.sN(0, 10), 150)]) + "   ", qG = (qG += L(59, [bA.rY.zD(ag.gp[player])]) + "   ") + L(60, [bA.rY.zD(ag.gb[player])]) + "   ", aD
				.hh && (a6R = bg.a0H[bg.kX[bg.el[player]]], qG += L(61) + ": " + a6R + "   "), bA.g9.jY(player) && (qG += L(62) + ": " + aE.kL[aE.hW[player]] + "   "), a6Q = qG = (qG += L(63, [player]) + "   ") + L(64, [a6Q]), a65 = !0) : a6Q =
			ac.es(eR) ? L(65, [a6Q]) + "   #" + ac.eV(eR) : L(66, [a6Q]), bf.dl = !0, a6K(55, 0), a60(220, a6Q, 55, player, bB.ni, bB.nf, -1, a65, void 0, void 0, !0)
	}, this.a5W = function(a6S) {
		var l3 = bN.y,
			player = l3.m3[a6S] >> 3,
			qG = (bf.dl = !0, a6K(55, 0), L(67, [ag.yP[player]]) + "   ");
		a60(220, qG += L(59, [bA.rY.zD(l3.a6T[a6S])]), 55, player, bB.ni, bB.nf, -1, !0)
	}, this.pH = function(p3, a6U, pI) {
		p3 === aD.eX ? a60(175, " " + L(68, [ag.yP[a6U]]) + ": ", 1001, a6U, a61(200, 255, 210), bB.nf, -1, !0, pI) : this.a6V(p3, pI)
	}, this.a6V = function(p3, pI) {
		a6K(1e3, 0), a60(175, ag.yP[p3] + ": ", 1e3, p3, bB.ni, "rgba(5,60,25,0.9)", -1, !0, pI)
	}, this.a0J = function() {
		var r;
		aD.a01 ? (r = L(69), aQ.a0I(L(70), 2, 1, 12), a60(0, r, 40, 0, "rgb(10,220,10)", bB.nf, -1, !1)) : (r = L(71), aQ.a0I(L(72), 2, 0, 16), a60(0, r, 41, 0, bB.ni, bB.nf, -1, !1))
	}, this.yD = function() {
		var gG = ag.yP,
			eq = aD.data;
		a60(300, gG[0] + " [" + aD.a0E.yJ(eq.elo[0]) + "] vs " + gG[1] + " [" + aD.a0E.yJ(eq.elo[1]) + "]", 65, 0, bB.nZ, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6X = function(r) {
		a60(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6Y = function(a6Z) {
		a60(0, L(a6Z ? 73 : 74), 247, 0, bB.og, bB.nf, -1, !1)
	}, this.yL = function(yI, yK, a6a) {
		var eq = aD.data,
			gG = ag.yP;
		a60(0, gG[0] + ": " + aD.a0E.yJ(eq.elo[0]) + " -> " + yI, 66, 0, bB.ni, a6a[0], -1, !1), a60(0, gG[1] + ": " + aD.a0E.yJ(eq.elo[1]) + " -> " + yK, 66, 1, bB.ni, a6a[1], -1, !1)
	}, this.pY = function(player, id) {
		0 === id ? a6L(50, player) ? (a60(128, L(75, [ag.yP[player]]), 52, player, a61(180, 255, 180), bB.nf, -1, !0), af.q8(player, 2, 255)) : a60(384, L(76, [ag.yP[player]]), 51, player, a61(210, 210, 255), bB.nf, -1, !0) : a6L(51, player) ? (
			a60(128, L(77, [ag.yP[player]]), 52, player, bB.ni, "rgba(60,120,10,0.9)", -1, !0), af.q8(player, 2, 255)) : (a60(384, L(78, [ag.yP[player]]), 50, player, bB.ni, "rgba(90,90,90,0.9)", -1, !0), af.q8(player, 2, 96))
	}, this.pc = function(zk, target) {
		var color = a61(210, 255, 210);
		1 < zk.length ? a60(230, L(79, [zk.length, ag.yP[target]]), 66, target, color, bB.nf, -1, !0) : a60(230, L(80, [ag.yP[zk[0]], ag.yP[target]]), 66, zk[0], color, bB.nf, target, !0)
	}, this.a6b = function(player, target) {
		a60(230, L(81, [ag.yP[player], ag.yP[target]]), 66, player, bB.ni, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6c = function(id, gG) {
		a6K(id, gG)
	}, this.a03 = function(id, player) {
		a6L(id, void 0 === player ? aD.ek : player)
	}, this.a6d = function(id) {
		for (var aB = a5o.length - 1; 0 <= aB; aB--)
			if (a5o[aB].id === id) return a5o[aB];
		return null
	}, this.pT = function(a6e, a6f, player) {
		2 !== ag.a3J[aD.eX] && a60(200, 1 === a6e ? L(82, [ag.yP[player]]) : L(83, [bA.rY.zD(a6e), ag.yP[player]]), 30, player, "rgb(190,255,190)", bB.nf, -1, !0)
	}, this.a6h = function(a6e, player) {
		2 !== ag.a3J[aD.eX] && (a6K(31, 0), 2 === ag.a3J[player] || player >= aD.kA ? a60(150, 1 === a6e ? L(84, [ag.yP[player]]) : L(85, [ag.yP[player], bA.rY.zD(a6e)]), 31, player, bB.nZ, "rgba(205,205,205,0.9)", -1, !0) : a60(150, 1 === a6e ?
			L(86, [ag.yP[player]]) : L(87, [ag.yP[player], bA.rY.zD(a6e)]), 31, player, bB.nZ, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a02 = function(bu) {
		for (var f8 = bf.k7(), aB = 2; 0 <= aB; aB--) 0 < a5s.ue[aB] && (bu || a5s.f8[aB] < f8 - 220) && this.a6n(aB)
	}, this.a6n = function(id) {
		var qG, en = a5s.ue[id],
			player = a5s.zk[id];
		a5s.ue[id] = 0, 1 === en ? (0 === id ? qG = L(94, [ag.yP[player], ag.yP[a5s.a5x[0]]]) : 1 === id ? qG = L(95, [ag.yP[player]]) : 2 === id ? qG = L(96, [ag.yP[player]]) : 3 === id && (qG = L(97, [ag.yP[player]])), a6K(7, 0), a60(a5s.eF[
			id], qG, 7, a5s.a5x[id], bB.ni, bB.nf, -1, !0)) : (qG = L(0 === id ? 98 : 1 === id ? 99 : 100, [en]), a6K(7, 0), a60(a5s.eF[id], qG, 7, player, bB.ni, bB.nf, -1, !1))
	}, this.a6M = function(id, hF, kl) {
		var f8 = bf.k7(),
			en = a5s.ue[id] + 1;
		a5s.ue[id]++, a5s.zk[id] = hF, a5s.a5x[id] = kl, 1 === en && (a5s.f8[id] = f8), (1 === en && (aD.zz < 32 || 2 === aD.zw) || 1 < en && (a5s.f8[id] < f8 - 140 || 2 === aD.zw)) && this.a6n(id)
	}, this.j3 = function() {
		b2.j3();
		for (var jQ = (jQ = a5o.length - a5t) <= 1 ? 1 : jQ * jQ, aB = a5o.length - 1; 0 <= aB; aB--) 0 < a5o[aB].eM && (a5o[aB].eM -= jQ, a5o[aB].eM <= 0) && (bf.dl = !0, a5o.splice(aB, 1));
		! function() {
			var gG, aB;
			if (128 !== a5u && !(++a5u < 128))
				for (gG = 5, aB = al.kB - 1; 0 <= aB; aB--) 1 === ag.a3J[al.kC[aB]] && 0 < gG-- && a60(240, L(97, [ag.yP[al.kC[aB]]]), 1, al.kC[aB], bB.nZ, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a02(!1)
	}, this.uf = function() {
		for (var x4, ew = y2(), aB = a5o.length - 1; 0 <= aB; aB--) x4 = ew - (aB + 1) * j, 50 === a5o[aB].id ? (ug.drawImage(a5o[aB].canvas, h.i - a5o[aB].i - a5r - a5p, x4), ug.drawImage(a5v, h.i - a5r - a5p, x4)) : ug.drawImage(a5o[aB].canvas,
			h.i - a5o[aB].i - a5p, x4)
	}
}

function cF() {
	var a6p, a6q, a6r, i, j, font, qG;

	function a6w(a6x) {
		return a6x < 10 ? "0" + a6x : String(a6x)
	}
	this.dd = function() {
		qG = L(101)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .53 : .36) * h.hx), j = Math.floor(.065 * i), font = bA.qZ.sN(1, Math.floor(.9 * j)), a6r--, this.setTime()
	}, this.j3 = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a6s = dt.getUTCMinutes(), a6t = dt.getUTCSeconds(), a6u = [0, 10, 20, 25, 30, 35, 40, 45, 50], a6v = (a6q = 3600 - 60 * a6s - a6t, a6q %= 300, 300), aB = 0; aB < a6u.length; aB++)
			if ((60 * a6s + a6t + a6q) % 3600 == 60 * a6u[aB]) {
				a6v = 0;
				break
			} return a6q += a6v, a6p = qG + a6w(Math.floor(a6q / 60)) + ":" + a6w(a6q % 60), a6r !== (a6r = 60 * a6s + a6t) && (i = aQ.measureText(a6p, font), i += Math.floor(.4 * j), !0)
	}, this.uf = function() {
		ug.lineWidth = 1 + Math.floor(j / 15), ug.translate(h.i - j, Math.floor(.5 * (h.j + i))), ug.rotate(-Math.PI / 2), ug.fillStyle = bB.ni, ug.fillRect(0, 0, i, j), ug.strokeStyle = bB.nZ, ug.strokeRect(0, 0, i, j + 10), ug.fillStyle = bB
			.nZ, ug.font = font, bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 1), ug.fillText(a6p, Math.floor(i / 2), Math.floor(.59 * j)), ug.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a4u, a6y, a6z, wq, a70, a71 = 0,
		a72 = 0;

	function a74(aB) {
		var a76 = !0,
			z2 = bB.ni,
			i = (1 === a4u[aB].id ? a4u[aB].y6.fillStyle = bB.ob : a4u[aB].jJ === aD.ek ? a4u[aB].y6.fillStyle = bB.nt : (ac.a77(a4u[aB].jJ), a4u[aB].y6.fillStyle = bA.color.nc(bO.fM[0], bO.fM[1], bO.fM[2], .87), 400 < bA.qh.a2R(bO.fM, 0, 2) && (
				a76 = !1, z2 = bB.nZ)), a4u[aB].canvas.width),
			su = (a4u[aB].y6.clearRect(0, 0, i, wq), a4u[aB].y6.fillRect(0, 0, i, wq), a4u[aB].y6.fillStyle = z2, ! function(y6, i, wq) {
				y6.fillRect(0, 0, i, 1), y6.fillRect(0, wq - 1, i, 1), y6.fillRect(0, 0, 1, wq), y6.fillRect(i - 1, 0, 1, wq)
			}(a4u[aB].y6, i, wq), a6y + 2 * wq < i && (a4u[aB].y6.fillRect(i - a6y - wq, 0, 1, wq), a4u[aB].y6.fillText(ag.yP[a4u[aB].jJ], Math.floor((i - a6y) / 2), Math.floor(.57 * wq))), 0 !== a4u[aB].id ? 0 : wq);
		a4u[aB].y6.fillText(bA.rY.zD(a4u[aB].hW), Math.floor(i - a6y / 2 - su), Math.floor(.57 * wq)),
			function(aB, i, su, a76) {
				a4u[aB].y6.fillStyle = a76 ? bB.nk : bB.ng;
				a76 = Math.floor(a6y * a4u[aB].hW / a4u[aB].a7D);
				a4u[aB].y6.fillRect(Math.floor(i - a6y - su), wq - a70, a76, a70)
			}(aB, i, su, a76), 0 === a4u[aB].id ? (a7A(aB, i, a76, z2), function(aB, i, a76) {
				a4u[aB].y6.strokeStyle = a76 ? bB.o0 : bB.oA, a4u[aB].y6.fillRect(wq, 0, 1, wq);
				a76 = i - wq;
				a4u[aB].y6.beginPath(), a4u[aB].y6.moveTo(Math.floor(.3 * wq + a76), Math.floor(wq / 2)), a4u[aB].y6.lineTo(Math.floor(wq - .3 * wq + 0 + a76), Math.floor(wq / 2)), a4u[aB].y6.stroke(), a4u[aB].y6.beginPath(), a4u[aB].y6.moveTo(
					Math.floor(wq / 2 + a76), Math.floor(.3 * wq)), a4u[aB].y6.lineTo(Math.floor(wq / 2 + a76), Math.floor(wq - .3 * wq + 0)), a4u[aB].y6.stroke()
			}(aB, i, a76)) : a7A(aB, 2 * wq, a76, z2)
	}

	function a7A(aB, i, a76, z2) {
		a4u[aB].y6.strokeStyle = a4u[aB].a7E ? bB.nr : a76 ? bB.oG : bB.oH, a4u[aB].y6.fillStyle = z2, a4u[aB].y6.fillRect(i - wq, 0, 1, wq), a4u[aB].y6.lineWidth = Math.max(Math.floor(wq / 12), 3), a4u[aB].y6.lineCap = "round";
		a76 = .35;
		i = wq + 1, a4u[aB].y6.beginPath(), a4u[aB].y6.moveTo(Math.floor(i - a76 * wq + 0), Math.floor(a76 * wq)), a4u[aB].y6.lineTo(Math.floor(i - wq + a76 * wq), Math.floor(wq - a76 * wq + 0)), a4u[aB].y6.stroke(), a4u[aB].y6.beginPath(), a4u[aB]
			.y6.moveTo(Math.floor(i - wq + a76 * wq), Math.floor(a76 * wq)), a4u[aB].y6.lineTo(Math.floor(i - a76 * wq + 0), Math.floor(wq - a76 * wq + 0)), a4u[aB].y6.stroke()
	}

	function a7Q(g, a7O) {
		for (var hW, aB = a7O - 1; 0 <= aB; aB--) hW = ad.g0(aD.eX, aB), g[aB].hW !== hW && (g[aB].hW = hW, g[aB].a7D = Math.max(hW, g[aB].a7D), g[aB].a75 = !0)
	}

	function a7U(g, a7S) {
		for (var t7 = aD.eX << 3, a6T = bN.y.a6T, m0 = bN.y.m0, a7W = bN.y.a7W, aB = a7S - 1; 0 <= aB; aB--) {
			var a7X = a7W[t7 + aB],
				hW = a6T[a7X];
			g[aB].hW !== hW ? (g[aB].hW = hW, g[aB].a7D = Math.max(hW, g[aB].a7D), g[aB].a75 = !0) : g[aB].a7E || m0[a7X] % 64 != 5 || (g[aB].a7E = !0, g[aB].a75 = !0)
		}
	}

	function a73(a4v) {
		a4v.canvas = document.createElement("canvas"), bS.wP.font = a6z;
		var i = a6y;
		a4v.jJ < aD.ek && 0 === a4v.id && (i += Math.floor(bS.wP.measureText(ag.yP[a4v.jJ] + "000").width)), i += wq, 0 === a4v.id && (i += wq), a4v.canvas.width = i, a4v.canvas.height = wq, a4v.y6 = a4v.canvas.getContext("2d", {
			alpha: !0
		}), a4v.y6.font = a6z, bA.qZ.textBaseline(a4v.y6, 1), bA.qZ.textAlign(a4v.y6, 1)
	}

	function a7K(aB) {
		return aU.a7Y() ? h.i - a4u[aB].canvas.width - bc.gap : aU.eu
	}

	function a7L(aB) {
		return Math.floor(2 * bc.gap + (aU.a7Y() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * wq))
	}
	this.dd = function() {
		a71 = a72 = 0, a4u = [], this.resize()
	}, this.resize = function() {
		a6z = aN.a5b, wq = aN.fontSize + 5, wq = Math.floor(1.25 * wq), a0.a1.hw() && (wq = Math.floor(1.25 * wq)), a70 = Math.floor(.15 * wq), bS.wP.font = a6z, a6y = Math.floor(bS.wP.measureText("02 000 000 0000").width);
		for (var aB = a4u.length - 1; 0 <= aB; aB--) a73(a4u[aB]), a74(aB)
	}, this.mU = function() {
		for (var aB = a4u.length - 1; 0 <= aB; aB--) a4u[aB].a75 && (a4u[aB].a75 = !1, a74(aB))
	}, this.h0 = function(lN, lO) {
		if (2 !== aD.zw && 0 !== ag.mi[aD.eX] && !aD.gw && !bA.g9.jY(aD.eX))
			for (var a7F, a7G, a7H, a7I = a0.a1.hw() ? wq : 0, a7J = a0.a1.hw() ? Math.floor(.15 * wq) : 0, aB = a4u.length - 1; 0 <= aB; aB--)
				if (a7F = a7K(aB), a7G = a7L(aB), a7H = a4u[aB].canvas.width, a7G - a7J <= lO && lO <= a7G + wq + a7J) {
					if (a7F - a7I <= lN && lN <= a7F + wq + a7I) return a4u[aB].a7E || (a4u[aB].a75 = !0, a4u[aB].a7E = !0, 0 === a4u[aB].id ? b8.hD.pF(a4u[aB].jJ) : b8.hD.pE(a4u[aB].jJ)), !0;
					if (0 === a4u[aB].id && a7F + a7H - wq - a7I <= lN && lN <= a7F + a7H + a7I) return bV.a5K(3), b8.hD.hK(aR.hH(), a4u[aB].jJ), !0
				} return !1
	}, this.j3 = function() {
		var a2Z, a2a, g, a7O;
		0 === ag.mi[aD.eX] || bA.g9.jY(aD.eX) && !aD.gw || (a2Z = a4u.slice(0, a71), a2a = a4u.slice(a71, a71 + a72), g = a2Z, a7O = ad.fu(aD.eX), function(g, a7O) {
			if (a71 !== a7O) return 1;
			for (var aB = a7O - 1; 0 <= aB; aB--)
				if (g[aB].jJ !== ad.fz(aD.eX, aB)) return 1;
			return
		}(g, a7O) ? a7Q(g = function(g, a7O) {
			var aB, jJ, f7, hW, a62 = [];
			loop: for (aB = 0; aB < a7O; aB++) {
				for (jJ = ad.fz(aD.eX, aB), f7 = 0; f7 < g.length; f7++)
					if (g[f7].jJ === jJ) {
						a62.push(g.splice(f7, 1)[0]);
						continue loop
					} hW = ad.g0(aD.eX, aB), a73(hW = {
					jJ: jJ,
					hW: hW,
					a7D: hW,
					id: 0,
					a75: !0,
					a7E: !1,
					canvas: null,
					y6: null
				}), a62.push(hW)
			}
			return a62
		}(g, a7O), a7O) : a7Q(g, a7O), a2Z = g, a2a = function(g) {
			var a7S = bN.y.pr[aD.eX];
			return function(g, a7S) {
				if (a72 !== a7S) return 1;
				for (var t7 = aD.eX << 3, m2 = bN.y.m2, a7W = bN.y.a7W, aB = a7S - 1; 0 <= aB; aB--) {
					var a7X = a7W[t7 + aB];
					if (g[aB].jJ !== m2[a7X]) return 1
				}
				return
			}(g, a7S) ? a7U(g = function(g, a7S) {
				var aB, jJ, f7, a62 = [],
					t7 = aD.eX << 3,
					m2 = bN.y.m2,
					a6T = bN.y.a6T,
					a7W = bN.y.a7W;
				loop: for (aB = 0; aB < a7S; aB++) {
					var a7X = a7W[t7 + aB];
					for (jJ = m2[a7X], f7 = 0; f7 < g.length; f7++)
						if (g[f7].jJ === jJ) {
							a62.push(g.splice(f7, 1)[0]);
							continue loop
						} a7X = a6T[a7X], a73(a7X = {
						jJ: jJ,
						hW: a7X,
						a7D: a7X,
						id: 1,
						a75: !0,
						a7E: !1,
						canvas: null,
						y6: null
					}), a62.push(a7X)
				}
				return a62
			}(g, a7S), a7S) : a7U(g, a7S), g
		}(a2a), a71 = a2Z.length, a72 = a2a.length, a4u = a2Z.concat(a2a))
	}, this.uf = function() {
		if (0 !== ag.mi[aD.eX] && (!bA.g9.jY(aD.eX) || aD.gw))
			for (var aB = a4u.length - 1; 0 <= aB; aB--) ug.drawImage(a4u[aB].canvas, a7K(aB), a7L(aB))
	}
}

function cH() {
	var a5o, kF, a7Z, a7a, j, a5b, fontSize, a7b, a7c, a7d, a7e, canvas, y6, mv, a7f;

	function ux(aB) {
		return L(0 === aB ? 102 : 1 === aB ? 103 : 2 === aB ? 104 : 105)
	}

	function a7m() {
		ug.drawImage(canvas, bc.gap + (aD.hh ? bc.gap + bh.a7n() : 0), a7o + 2 * bc.gap)
	}

	function a7g() {
		canvas.width = a5o[0].width + a7d, canvas.height = j + a7d, (y6 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a5o[0].width + a7d, j + a7d), y6.translate(Math.floor(a7d / 2), Math.floor(a7d / 2)), y6.lineWidth = a7d, y6.fillStyle = 1 === a5o[0].a7l ? bB.nn : bB.nf, a7p(), y6.fill(), y6.strokeStyle = 1 === a5o[0].a7l ? bB.nZ :
			bB.ni, a7p(), y6.stroke(), bA.qZ.textAlign(y6, 1), bA.qZ.textBaseline(y6, 1), y6.fillStyle = 1 === a5o[0].a7l ? bB.nZ : bB.ni, y6.font = a5b[0], y6.fillText(ux(a5o[0].a7k), Math.floor(a5o[0].width / 2), Math.floor(.72 * a7b[0] * j)), y6
			.font = a5b[1], y6.fillText(a5o[0].qG, Math.floor(a5o[0].width / 2), Math.floor((a7b[0] + .48 * a7b[1]) * j))
	}

	function a7p() {
		y6.beginPath(), y6.moveTo(a7e, 0), y6.lineTo(a5o[0].width - a7e, 0), y6.lineTo(a5o[0].width, a7e), y6.lineTo(a5o[0].width, j - a7e), y6.lineTo(a5o[0].width - a7e, j), y6.lineTo(a7e, j), y6.lineTo(0, j - a7e), y6.lineTo(0, a7e), y6.closePath()
	}
	this.dd = function() {
		kF = 4, a7Z = a7a = mv = 0, a5o = [], a5b = new Array(2), fontSize = new Array(2), (a7b = new Array(2))[0] = .3, a7b[1] = .7, a7c = new Array(4), canvas = document.createElement("canvas"), a7f = bf.eM + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hw() ? .0725 : .058) * h.hx), fontSize[0] = Math.floor(.85 * a7b[0] * j), fontSize[1] = Math.floor(.85 * a7b[1] * j), a5b[0] = bA.qZ.sN(1, fontSize[0]), a5b[1] = bA.qZ.sN(1, fontSize[1]), aB = a7c.length -
			1; 0 <= aB; aB--) a7c[aB] = this.measureText(ux(aB) + "000", a5b[0]);
		if (a7d = Math.floor(1 + .05 * j), a7e = Math.floor(.2 * j), 0 < a5o.length) {
			for (aB = a5o.length - 1; 0 <= aB; aB--) i = this.measureText(a5o[aB].qG + "00", a5b[1]), a5o[aB].width = i < a7c[aB] ? a7c[aB] : i;
			a7g()
		}
	}, this.j3 = function() {
		0 !== kF && (4 === kF ? bf.eM > a7f && (kF = 0, 1 === aD.zw) && aQ.a0I(bS.wJ.wK[bS.eT].name, 3, 1, 9) : (1 === kF ? (0 === a7Z && (a7g(), a7Z = 1e-4), 1 <= (a7Z += .002 * (bf.eM - mv)) && (a7a = 0, kF = 2, a7Z = 1), bf.dl = !0) : 2 ===
			kF ? ((a7a += (bf.eM - mv) / 1e3) > a5o[0].eF || 1 < a7a && 1 < a5o.length) && (kF = 3) : 3 === kF && ((a7Z -= .002 * (bf.eM - mv)) <= 0 && (a7Z = 0, a5o.shift(), kF = 0 < a5o.length ? 1 : 0), bf.dl = !0), mv = bf.eM))
	}, this.measureText = function(qG, a5b) {
		return ug.font = a5b, Math.floor(ug.measureText(qG).width)
	}, this.jG = function(a7j, aB) {
		this.a0I(ag.yP[a7j], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0I = function(qG, a7k, a7l, eF) {
		var i;
		qG.length && (i = (i = this.measureText(qG + "00", a5b[1])) < a7c[a7k] ? a7c[a7k] : i, a5o.push({
			qG: qG,
			width: i,
			a7k: a7k,
			a7l: a7l,
			eF: eF
		}), 0 === kF) && (a7Z = 0, kF = 1, mv = bf.eM)
	}, this.uf = function() {
		0 !== kF && 0 !== a7Z && (a7Z < 1 ? (ug.globalAlpha = a7Z, a7m(), ug.globalAlpha = 1) : a7m())
	}
}

function cq() {
	var j, canvas, y6, a7q, a7r, a7s, a7t, a75, a7u, a7v, a7w, a7x, a6Z = !1,
		a2n = (this.hZ = !1, this.i = 0, new Array(2)),
		a7y = 0;

	function mV() {
		var i = aw.i,
			l3 = (a75 = !1, y5(y6, i, j), Math.floor(i / 2));
		1 === a7q ? (y6.fillStyle = bB.o2, y6.fillRect(l3, 0, l3, j)) : -1 === a7q && (y6.fillStyle = bB.oI, y6.fillRect(0, 0, l3, j)), y7(y6, i, j, 2);
		var l3 = (l3 = Math.floor(.25 * j)) < 2 ? 2 : l3,
			a6j = (y6.fillStyle = bB.no, Math.floor((j - 4) * a7r[1] / a7s[1]));
		0 < a6j && y6.fillRect(2, j - 2 - a6j, l3, a6j), 0 < (a6j = Math.floor((j - 4) * a7r[0] / a7s[0])) && y6.fillRect(i - 2 - l3, j - 2 - a6j, l3, a6j);
		l3 = (l3 = Math.floor(j / 8)) < 2 ? 2 : l3, y9(y6, Math.floor(.4 * j), 0, j, l3, .5, !1), y9(y6, Math.floor(i - 1.4 * j), 0, j, l3, .5, !0), a6j = 1.1 * j / a2n[0].width;
		y6.imageSmoothingEnabled = !0, y6.setTransform(a6j, 0, 0, a6j, (i - a6j * a2n[0].width) / 2, -.05 * j), y6.drawImage(a2n[+a6Z], 0, 0), y6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a83() {
		a7x = -1, a6Z = ah.a84(), aN.a4G(257), aN.a6Y(a6Z), aw.hZ = !0, a75 = !0, a7u = 360;
		for (var fF, dt = 0, aB = al.kB - 1; 0 <= aB; aB--) bA.g9.jY(al.kC[aB]) || (dt += ag.gb[al.kC[aB]]);
		a6Z ? a7s[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hh ? 9 === aD.kS && 8 === bg.kX[bh.ki()] ? a7s[0] = Math.max(dt, 1) : (fF = bL.du(100 * bh.kg(), aD.ju), fF = bL.hv(200 - 2 * fF, 40, 100), fF = bL.du(fF * dt, 100), a7s[0] = Math.max(fF,
			1)) : a7s[0] = Math.max(bL.du(3 * dt, 5), 1), a7s[1] = Math.max(dt - a7s[0], 1)
	}

	function a7z() {
		a7w = bf.k7(), a75 = !0, a7u = a7q = 0, a7t = [], aw.hZ = !1, aN.a03(247), a7r[0] = a7r[1] = 0, aN.a4G(673)
	}

	function y2() {
		return aR.a6D(aN.a69()) ? __fx.settings.keybindButtons ? aR.ew - 2 * (j + bc.gap) : aR.ew - j - bc.gap : bC.a6D(aN.a6C()) ? bC.y2() - j - bc.gap : h.j - j - bk.a50() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a2n[aB] = bA.canvas.yg(ab.get(3), 8 - aB, bB.ot), a2n[aB] = bA.canvas.a2p(a2n[aB])
	}, this.dd = function() {
		a7w = -1e4, a7v = a7y = 0, a7x = -1, this.hZ = !1, a75 = a6Z = !1, a7r = [a7q = a7u = 0, 0], a7s = [1, 1], a7t = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, y6 = canvas.getContext("2d", {
			alpha: !0
		}), mV()
	}, this.mU = function() {
		a75 && mV()
	}, this.h0 = function(eu, ew) {
		return !!this.hZ && !(eu < h.i - this.i - bc.gap || ew < y2() || (aD.gw || this.ha(aD.eX) && (aM.gx && aM.a24(), b8.hD.hb(eu > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j3 = function() {
		0 < a7v ? 0 === --a7v && a7z() : this.hZ ? 180 == --a7u && 3 * a7r[0] < a7s[0] ? a7z() : a7r[0] >= a7s[0] ? a6Z ? bR.zY.zr() : bR.zY.zv() : a7r[1] >= a7s[1] ? a7v = 4 : a7u <= 0 && a7z() : ! function() {
			var a86 = bf.k7();
			if (a86 % 40 == 14) {
				if (a7y) return !(a86 < a7y) && !(a86 < a7w + 535) && (a7y = a86 + 1071, bA.g9.a3M()) ? (a83(), 1) : 0;
				(1 === al.kB || (aD.hh ? bh.kg() : ag.gb[lk[0]]) >= bL.du(96 * aD.ju, 100)) && (a7y = a86 + 535)
			}
			return
		}() && 0 <= a7x && (aN.yO(250, L(106, [ag.yP[a7x]]), 673, a7x, bB.ni, bB.nf, -1, !0), a83())
	}, this.zx = function() {
		this.hZ && a7r[0] < a7s[0] && a7z()
	}, this.q9 = function(player, a87) {
		var a88 = L(a87 ? 107 : 108, [ag.yP[player]]),
			a88 = (aN.yO(450, a88, 257, player, a87 ? bB.o0 : bB.oF, bB.nf, -1, !0), a7t.push(player), a75 = !0, aD.kU ? Math.max(a7s[0], a7s[1]) : ag.gb[player]),
			a88 = Math.max(a88, 1);
		a87 ? a7r[0] += a88 : a7r[1] += a88, player === aD.eX && (a7q = a87 ? 1 : -1)
	}, this.uf = function() {
		var ew;
		this.hZ && (ew = y2(), ug.drawImage(canvas, h.i - this.i - bc.gap, ew))
	}, this.hc = function(player) {
		return !(!aD.kU && bf.k7() < a7w + 140 || 0 !== a7u || !bA.g9.gy(1) || !bA.g9.gz(player) || 10 <= jv[player] && !bA.g9.a3e(player, 9))
	}, this.ha = function(gL) {
		if (!bA.g9.gy(1)) return !1;
		if (!bA.g9.gz(gL)) return !1;
		if (!this.hZ) return !1;
		for (var aB = a7t.length - 1; 0 <= aB; aB--)
			if (a7t[aB] === gL) return !1;
		return !0
	}, this.hY = function(player) {
		a7x = player
	}
}

function cI() {
	var i, eu, a89, canvas, y6, hZ, iN, a47, a5b, a75, a8A = 11 / 12;

	function a8C() {
		var a7C = Math.floor(iN * (i - 2 * a89)),
			a8F = 1 + Math.floor(.0625 * aR.j),
			a8G = 1 + Math.floor(.3 * aR.j),
			a8H = Math.floor(.55 * aR.j);
		y6.clearRect(0, 0, i, aR.j), y6.fillStyle = bB.ne, y6.fillRect(0, 0, a89, aR.j), y6.fillRect(a89 + a7C, 0, i - a89 - a7C, aR.j), y6.fillStyle = iN < 1 / 3 ? "rgba(" + Math.floor(3 * iN * 130) + ",130,0,0.85)" : iN < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iN - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iN - 2 / 3) * 130) + ",0.85)", y6.fillRect(a89, 0, a7C, aR.j), y6.fillStyle = bB.ni, y6.fillRect(0, 0, i, 1), y6.fillRect(0, aR.j - 1, i, 1), y6
			.fillRect(0, 0, 1, aR.j), y6.fillRect(a89, 0, 1, aR.j), y6.fillRect(a89 + a7C, 0, 1, aR.j), y6.fillRect(i - a89, 0, 1, aR.j), y6.fillRect(i - 1, 0, 1, aR.j), y6.fillRect(Math.floor(.25 * aR.j) + a8G, Math.floor((aR.j - a8F) / 2), aR.j -
				2 * a8G, a8F), y6.fillRect(Math.floor(i - 1.25 * aR.j) + a8G, Math.floor((aR.j - a8F) / 2), aR.j - 2 * a8G - a8G % 2, a8F), y6.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8F) / 2), a8G, a8F, aR.j - 2 * a8G - a8G % 2),
			a47 = bA.g9.iM(aD.eX, aR.hH()), y6.fillText(bA.rY.zD(a47) + " (" + bA.rY.a40(100 * iN, +(iN < .1)) + ")", Math.floor(.5 * i), a8H)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iN = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a20(arg1);

	function a8M(a2M) {
		return !(1 < a2M && 1 === iN || (1 < a2M && a2M * iN - iN < 1 / 1024 ? a2M = (iN + 1 / 1024) / iN : a2M < 1 && iN - a2M * iN < 1 / 1024 && (a2M = (iN - 1 / 1024) / iN), iN = bL.hv(iN * a2M, 1 / 1024, 1), a8C(), 0))
	}

	function a8N(lN) {
		return iN !== (iN = bL.hv((lN - eu - a89) / (i - 2 * a89), 1 / 1024, 1)) && (a8C(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8C(), bf.dl = !0
	}, this.ew = 0, this.h1 = !1, this.dd = function() {
		hZ = !aD.hB && !aD.gw, a75 = !1, iN = .5, a47 = 0, this.h1 = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hw() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hx), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.hw() ? .65 : .389) * h.hx), i += 12 - i % 12, this.j = Math.floor(i / 12)), a89 = Math.floor(3 * this.j / 2), a5b =
			bA.qZ.sN(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, ug), canvas.height = this.j, (y6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5b, bA.qZ.textBaseline(y6, 1), bA.qZ.textAlign(y6, 1), this.a8B(), a8C()
	}, this.a8B = function() {
		eu = a0.a1.hw() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.ew = h.j - this.j - bk.a50() * bc.gap
	}, this.mU = function() {
		a75 && (a75 = !1, a8C())
	}, this.hZ = function() {
		return !(!hZ || aM.gx && eu < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6D = function(a8I) {
		return !!this.hZ() && eu + i > h.i - a8I - bc.gap
	}, this.a4E = function() {
		hZ = !aD.gw
	}, this.a7z = function() {
		hZ = !1
	}, this.hH = function() {
		return bL.hv(Math.floor(1024 * iN + .5) - 1, 0, 1023)
	}, this.a1x = function(lN, lO) {
		return this.hZ() && eu < lN && lN < eu + i && lO > this.ew
	}, this.h0 = function(lN, lO) {
		if (!this.hZ()) return !1;
		if (!(__fx.settings.keybindButtons && lO > this.ew - Math.floor(bc.gap / 4) - this.j && lO < this.ew - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lN - eu))) {
			if (!aR.a1x(lN, lO)) return !1;
			aS.nD = !1, ! function(sA, lN, lO) {
				if (function(lN, lO) {
						return eu < lN && lN < eu + a89 && lO > aR.ew
					}(lN, lO)) return a8M(a8A);
				if (function(lN, lO) {
						return eu + i - a89 < lN && lN < eu + i && lO > aR.ew
					}(lN, lO)) return a8M(1 / a8A);
				return sA.h1 = !0, a8N(lN)
			}(this, lN, lO) || (bf.dl = !0)
		}
		return !0
	}, this.a20 = function(nK) {
		0 !== aD.zw && this.hZ() && a8M(nK) && (bf.dl = !0)
	}, this.a1T = function(deltaY) {
		var nK;
		return !(0 === deltaY || !this.hZ()) && a8M(nK = 0 < deltaY ? (nK = 400 / (400 + deltaY)) < a8A ? a8A : nK : 1 / a8A < (nK = (400 - deltaY) / 400) ? 1 / a8A : nK)
	}, this.a1Q = function(lN) {
		return !!this.h1 && a8N(lN)
	}, this.a1t = function() {
		this.h1 = !1
	}, this.j3 = function() {
		this.hZ() && a47 !== bA.g9.iM(aD.eX, this.hH()) && (a75 = !0)
	}, this.uf = function() {
		this.hZ() && (ug.drawImage(canvas, eu, this.ew), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ug, eu, this.ew)
	}
}

function d0() {
	var canvas, y6, a8O, font, a8P = 0,
		a8Q = !1,
		a8R = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8S = 5;

	function a8Z() {
		if (a8Q) {
			var aB, en = a8R.length,
				a8H = Math.floor(.5 * a8O.j),
				j = en * a8H,
				eu = Math.floor(Math.floor(a8O.eu) + .3 * a8O.i - .5),
				ew = Math.floor(Math.floor(a8O.ew) - j),
				i = Math.floor(.4 * a8O.i + 2.5);
			for (ug.fillStyle = bB.ne, ug.fillRect(eu, ew, i, j), ug.fillStyle = bB.o7, ug.fillRect(eu, ew + a8S * a8H, i, a8H), ug.fillStyle = bB.ni, ug.fillRect(eu, ew, 2, j), ug.fillRect(eu, ew, i, 2), ug.fillRect(eu + i - 2, ew, 2, j), aB =
				1; aB < en; aB++) ug.fillRect(eu, ew + aB * a8H, i, 2);
			for (ug.fillStyle = bB.ni, bA.qZ.textAlign(ug, 1), bA.qZ.textBaseline(ug, 1), ug.font = bA.qZ.sN(0, .6 * a8H), eu += .5 * i, aB = 0; aB < en; aB++) ug.fillText(a8h(aB), eu, ew + (aB + .6) * a8H)
		}
		ug.drawImage(canvas, Math.floor(a8O.eu), Math.floor(a8O.ew))
	}

	function mV(sA) {
		var eu, n8, n9, a8H;
		y6.clearRect(0, 0, Math.floor(a8O.i), Math.floor(a8O.j)), y6.fillStyle = bB.ne, y6.fillRect(0, 0, Math.floor(a8O.i), Math.floor(a8O.j)), aD.nB && (y6.fillStyle = bB.o7, y6.fillRect(0, 0, Math.floor(.3 * a8O.i), Math.floor(a8O.j))), y6
			.fillStyle = bB.ni, y6.fillText("Hide UI", .15 * a8O.i, .5 * a8O.j), y6.fillRect(Math.floor(.3 * a8O.i - .5), 0, 2, Math.floor(a8O.j)), eu = .5 * a8O.i, y6.fillText("Replay Speed", eu, .31 * a8O.j), y6.fillText(a8h(a8S), eu, .69 * a8O.j),
			y6.fillRect(Math.floor(.7 * a8O.i - .5), 0, 2, Math.floor(a8O.j)), sA.a4m ? (eu = Math.floor(.02 * a8O.i), sA = Math.floor(.025 * a8O.i), n8 = Math.floor(.85 * a8O.i - eu - .5 * sA), n9 = Math.floor(.25 * a8O.j), a8H = Math.floor(a8O.j) -
				2 * n9, y6.fillRect(n8, n9, eu, a8H), y6.fillRect(n8 + eu + sA, n9, eu, a8H)) : function() {
				var i = Math.floor(.46 * a8O.j),
					j = Math.floor(.23 * a8O.j),
					eu = Math.floor(.85 * a8O.i - .5 * i + i / 12),
					ew = Math.floor(.5 * a8O.j - j);
				y6.beginPath(), y6.moveTo(eu, ew), y6.lineTo(eu + i, ew + j), y6.lineTo(eu, ew + (j << 1)), y6.fill()
			}(), y6.fillRect(0, 0, Math.floor(a8O.i), 2), y6.fillRect(0, 0, 2, Math.floor(a8O.j)), y6.fillRect(0, Math.floor(a8O.j) - 2, Math.floor(a8O.i), 2), y6.fillRect(Math.floor(a8O.i - 2), 0, 2, Math.floor(a8O.j))
	}

	function a8h(aB) {
		return 5 === aB ? "Normal" : "" + a8R[aB]
	}
	this.a4m = !1, this.dd = function() {
		aD.gw && (a8S = 5, this.a4m = !1, a8Q = !1, a8O = new rA([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8T = function() {
		return a8R[a8S]
	}, this.y2 = function() {
		return a8O.ew
	}, this.a6D = function(a8I) {
		return !!aD.gw && a8O.eu + a8O.i > h.i - a8I - bc.gap
	}, this.resize = function() {
		aD.gw && (a8O.resize(), a8O.ew -= (bk.a50() - 1) * bc.gap, font = bA.qZ.sN(0, .3 * a8O.j), (canvas = document.createElement("canvas")).width = Math.floor(a8O.i), canvas.height = Math.floor(a8O.j), (y6 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qZ.textAlign(y6, 1), bA.qZ.textBaseline(y6, 1), mV(this))
	}, this.a23 = function(a8U) {
		0 === aD.zw || t.hZ() || a8U !== aD.nB && (aD.nB = a8U, bh.resize(), bf.dl = !0, aD.gw) && (a8P = bf.eM + 2e3, mV(this))
	}, this.h0 = function(eu, ew) {
		if (!aD.gw) return !1;
		if (eu < a8O.eu || ew < a8O.ew || eu > a8O.eu + a8O.i) return a8Q && function(sA, eu, ew) {
			var en = a8R.length,
				a8H = Math.floor(.5 * a8O.j),
				j = en * a8H,
				n8 = Math.floor(Math.floor(a8O.eu) + .3 * a8O.i - .5),
				j = Math.floor(Math.floor(a8O.ew) - j),
				i = Math.floor(.4 * a8O.i + 2.5);
			return a8Q = !1, bf.dl = !0, eu < n8 || n8 + i < eu || ew < j || (a8S = a8Y(0, Math.floor((ew - j) / a8H), en - 1), mV(sA)), !0
		}(this, eu, ew);
		if ((eu -= a8O.eu) < .3 * a8O.i) a8Q = !1, this.a23(!aD.nB);
		else {
			if (eu < .7 * a8O.i) return a8Q = !a8Q, bf.dl = !0;
			this.a25(!1)
		}
		return !0
	}, this.a25 = function(a8W) {
		2 === aD.zw ? (this.a23(!1), t.u(3)) : (a8Q = !1, this.a4m = !this.a4m, this.a4m ? (aM.gx && aM.a24(), a0.a1.setState(1)) : a8W || aM.a5h(), bf.dl = !0, mV(this))
	}, this.a8X = function() {
		this.a4m = !1, aM.a5h(), bf.dl = !0, mV(this)
	}, this.a1m = function(eu, ew) {
		return !!aD.nB && (0 <= aM.h0(eu, ew) || (aD.gw ? ((bf.eM > a8P || !this.h0(eu, ew)) && aS.h0(eu, ew), bf.dl = !0, a8P = bf.eM + 2e3) : aS.h0(eu, ew)), !0)
	}, this.j3 = function() {
		aD.gw && aD.nB && bf.eM > a8P - 1e3 && bf.eM < a8P && (bf.dl = !0)
	}, this.a04 = function() {
		aD.gw && (this.a4m = !1, bf.dl = !0, mV(this))
	}, this.uf = function() {
		if (aD.gw) {
			if (aD.nB) {
				if (bf.eM > a8P) return;
				if (bf.eM > a8P - 1e3) return ug.globalAlpha = a8Y(0, (1e3 - (bf.eM - (a8P - 1e3))) / 1e3, 1), a8Z(), void(ug.globalAlpha = 1)
			}
			a8Z()
		}
	}
}

function cJ() {
	var a8i, a8j, i, eu, ew, a8k, a8l;
	this.dd = function() {
		a8i = new Array(2), a8j = new Array(2), this.nD = !1, a8l = a8k = iP = iO = 0, hy = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.hw() ? .072 : .0502) * h.hx)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8i[aB] = document.createElement("canvas"), a8i[aB].width = i, a8i[aB].height = i, a8j[aB] = a8i[aB].getContext("2d", {
			alpha: !0
		});
		this.a8B(),
			function() {
				for (var a92 = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8j[aB].clearRect(0, 0, i, i), a8j[aB].fillStyle = bB.nb, a8j[aB].beginPath(), a8j[aB].arc(i / 2, i / 2, i / 2 - a92, 0, 2 * Math.PI), a8j[aB].fill(), a8j[aB]
					.lineWidth = a92, a8j[aB].fillStyle = bB.ni, a8j[aB].strokeStyle = bB.ni, a8j[aB].beginPath(), a8j[aB].arc(i / 2, i / 2, i / 2 - a92, 0, 2 * Math.PI), a8j[aB].stroke(), y9(a8j[aB], 0, 0, i, a92, .3, 0 === aB)
			}()
	}, this.y1 = function() {
		return -iO / hy
	}, this.y2 = function() {
		return -iP / hy
	}, this.nN = function(a8p, i4) {
		iO = hy * a8p - i4
	}, this.nO = function(a8q, i5) {
		iP = hy * a8q - i5
	}, this.h0 = function(a8o, a6E) {
		return aD.nB || ! function(a8o, a6E) {
			return Math.pow(a8o - (eu + i / 2), 2) + Math.pow(a6E - (ew + i / 2), 2) < i * i / 4 || Math.pow(a8o - (eu + i / 2), 2) + Math.pow(a6E - (ew + 2 * i), 2) < i * i / 4
		}(a8o, a6E) || bj.eK.data[8].value ? (aH.nQ() && (this.nD = !0, a8k = a8o, a8l = a6E), !1) : a6E < ew + 1.25 * i ? this.a1T(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1T(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1Q = function(a8o, a6E) {
		var a8r, a8s, i7, iA;
		return !aH.nQ() || (a8r = iO, a8s = iP, iO += i7 = a8k - a8o, iP += iA = a8l - a6E, af.a1Q(i7, iA), this.a8t(), a8k = a8o, a8l = a6E, a8r !== iO) || a8s !== iP
	}, this.a1T = function(lN, lO, deltaY) {
		var nK;
		if (aH.nQ()) {
			if (0 < deltaY) nK = (nK = 500 / (500 + deltaY)) < .5 ? .5 : nK;
			else {
				if (!(deltaY < 0)) return !1;
				nK = 2 < (nK = (500 - deltaY) / 500) ? 2 : nK
			}
			this.a8u(lN, lO, nK), bf.dl = !0
		}
		return !0
	}, this.a8u = function(eu, ew, eR) {
		var a2M;
		eR = a2M = (a2M = 1024 < (a2M = eR) * hy ? 1024 / hy : a2M) * hy < .125 ? .125 / hy : a2M, af.zoom(eR, eu, ew),
			function(a2M, lN, lO) {
				hy *= a2M, iO = (iO + lN) * a2M - lN, iP = (iP + lO) * a2M - lO, aS.a8t()
			}(eR, eu, ew)
	}, this.a8t = function() {
		var a8x = h.i / 16,
			a8y = 0,
			a8z = h.j / 16,
			a90 = 0;
		iO < -h.i + a8x && (a8y = -h.i + a8x - iO), iO > hy * bS.ey - a8x && (a8y = hy * bS.ey - a8x - iO), iP < -h.j + a8z && (a90 = -h.j + a8z - iP), iP > hy * bS.ez - a8z && (a90 = hy * bS.ez - a8z - iP), iO += a8y, iP += a90, ba.nP(), af.a91(
			a8y, a90)
	}, this.a8B = function() {
		eu = h.i - i - bc.gap, ew = Math.floor(h.j / 2 - 1.25 * i)
	}, this.uf = function() {
		bj.eK.data[8].value || (ug.drawImage(a8i[0], eu, ew), ug.drawImage(a8i[1], eu, Math.floor(ew + 3 * i / 2)))
	}
}

function cK() {
	var g, a93, a94, a95, gap, a96, a97, a98, a99, a9A, a5b, a9B, gs, a9C, a7C, a9D, a9E;

	function a9I() {
		a95 = Math.floor(.2 * (a0.a1.hw() ? .07 : .035) * h.hx), a95 = a6B(a0.a1.hw() ? 3 : 1, a95);
		var a9L = h.i / (g.length + gap);
		a95 = a95 < a9L ? a9L : a95, a7C = Math.floor((1 - gap) * a95), a93 = 0, a9M()
	}

	function a9M() {
		a93 = (a93 = a93 < -20 ? -20 : a93) > (g.length - 15) * a95 ? (g.length - 15) * a95 : a93, a97 = Math.floor(a93 / a95), a98 = (a98 = a97 + Math.floor(h.i / a95)) > g.length - 1 ? g.length - 1 : a98, a97 = (a97 = a98 < a97 ? a98 : a97) < 0 ?
			0 : a97;
		var l3 = a98;
		a96 = a94 / g[l3];
		for (var aB = a98 - 1; a97 <= aB; aB--) g[aB] > g[l3] && (l3 = aB, a96 = a94 / Math.pow(g[aB], a9C))
	}

	function a9P(eu) {
		eu = Math.floor((a93 + h.i - eu - gap * a95) / a95);
		return (eu = eu < -1 ? -1 : -1 === eu ? 0 : eu > g.length - 1 ? -1 : eu) !== a99 && (a99 = eu, -1 === a9D && 0 === a99 && aT.a9F && (a9D = setInterval(a9Q, 100)), 1)
	}

	function a9R(aB) {
		var a9T = Math.floor(a96 * Math.pow(g[aB], a9C));
		ug.fillRect(a93 + h.i - (aB + 1) * a95, h.j - a9T, a7C, a9T)
	}

	function a9Q() {
		var gL;
		0 !== (a99 = 8 === aa.a17() ? -1 : a99) ? (a9E = (new Date).getTime(), clearInterval(a9D), a9D = -1) : (gL = g[1] / 864e3, -1 !== a9E && (gL += ((new Date).getTime() - a9E) * g[1] / 864e5, a9E = -1), 0 < gL && (g[0] += Math.floor(gL), bf
			.dl = !0))
	}
	this.a9F = !1, this.dd = function() {
		a9E = a9D = -1, a99 = -(a9C = 1), this.a9G = !1, gs = 0, a9B = new Date, a93 = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a94 = Math.floor(.15 * h.j), a9A = (a9A = Math.floor((a0.a1.hw() ? .018 : .0137) * h.hx)) < 2 ? 2 : a9A, a5b = bA.qZ.sN(1, a9A), a9I()
	}, this.a9J = function(a9K) {
		var aB;
		for (this.a9F = !0, aB = 0; aB < a9K.length; aB++) g.unshift(a9K[aB]);
		a9I(), bf.dl = !0
	}, this.a9N = function() {
		a9M()
	}, this.a1Q = function(eu, ew) {
		ew > h.j - .6 * a94 ? this.a9G ? eu !== gs && (a93 += eu - gs, gs = eu, a9M(), a9P(eu), this.a9G = -1 !== a99, bf.dl = !0) : a9P(eu) && (bf.dl = !0) : this.ra()
	}, this.ra = function() {
		-1 !== a99 && (this.a9G = !1, a99 = -1, bf.dl = !0)
	}, this.a1T = function(eu, deltaY) {
		-1 !== a99 && (a93 += Math.floor(deltaY), a9M(), a9P(eu), bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		this.a1Q(eu, ew), -1 !== a99 && (gs = eu, this.a9G = !0)
	}, this.a1s = function() {
		-1 !== a99 && (this.a9G = !1)
	}, this.uf = function() {
		ug.fillStyle = bB.nl;
		for (var a9U, month, dt, sv, a9X, a9Y, n9, a9Z, a9a, aB = a98; a97 <= aB; aB--) a9R(aB);
		this.a9F && 0 === a97 && (ug.fillStyle = bB.oI, a9R(0)), -1 !== a99 && (ug.fillStyle = bB.nk, a9R(a99)), -1 !== a99 && (ug.font = a5b, bA.qZ.textBaseline(ug, 2), (dt = new Date).setTime(a9B.getTime() - 1e3 * a99 * 60 * 60 * 24), month =
			"month", a9U = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a9U = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a9U = a9U + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a99] ? L(109) : L(110), month = bA.rY.zD(g[a99]) + " " + month, dt = Math.floor(ug.measureText(a9U).width), sv = Math
			.floor(ug.measureText(month).width), a9X = Math.floor(.5 * (dt + a9A)), a9Y = (a9Y = a93 + h.i - (a99 + 1) * a95) < a9X ? a9X : a9Y > h.i - a9X ? h.i - a9X : a9Y, n9 = h.j - Math.floor(a96 * Math.pow(g[a99], a9C)), a9Z = Math
			.floor(1.1 * a9A), a9a = n9 > h.j - a9Z ? h.j - a9Z : n9, ug.fillStyle = bB.nf, ug.fillRect(h.i - sv - a9A, a9a - a9Z, sv + a9A, a9Z), ug.fillRect(a9Y - a9X, h.j - a9Z, dt + a9A, a9Z), ug.fillStyle = bB.ni, bA.qZ.textAlign(ug, 2),
			ug.fillText(month, Math.floor(h.i - .5 * a9A), a9a), bA.qZ.textAlign(ug, 1), ug.fillText(a9U, a9Y, h.j), ug.strokeStyle = bB.nm, ug.lineWidth = 1, ug.beginPath(), ug.moveTo(0, n9), ug.lineTo(h.i, n9), ug.closePath(), ug.stroke())
	}
}

function cL() {
	var a5b, i, ew, a9b, a9c, canvas, y6, a75, a3S, a9d, a9e, a9f, a9g;
	this.eu = 0, this.j = 0, this.dd = function() {
		a9c = aD.a4M, a9e = "rgba(0,100,0,0.8)", a9f = "rgba(150,0,0,0.8)", a75 = a9d = !0, a3S = ag.gp[aD.eX], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .305 : .24) * h.hx), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5b = bA.qZ.sN(1, Math.floor(.8 * this.j)), a9g = Math.floor(.5 * this.j), bS.wP.font = a5b, ew = bc.gap, a9b = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (y6 = canvas.getContext("2d", {
			alpha: !0
		})).font = a5b, bA.qZ.textBaseline(y6, 1), bA.qZ.textAlign(y6, 1), this.a9h()
	}, this.a7Y = function() {
		return a0.a1.hw() && h.i < 1.2 * h.j
	}, this.a8B = function() {
		this.a7Y() ? this.eu = h.i - i - bc.gap : this.eu = Math.floor(aV.a9i() + (h.i - aV.a9i() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mU = function() {
		a75 && (a75 = !1, this.a9h())
	}, this.a9h = function() {
		y6.clearRect(0, 0, i, this.j), y6.fillStyle = a9d ? a9e : a9f, y6.fillRect(0, 0, i, this.j), y6.fillStyle = bB.nk, this.a9j(), this.a9k(), y6.fillStyle = ag.gp[aD.eX] >= ae.jq(aD.eX) ? bB.oF : bB.ni, y6.fillText(bA.rY.zD(a3S), Math.floor(
			i / 2), a9g), y6.fillStyle = bB.ni, y6.fillRect(0, 0, i, 1), y6.fillRect(0, 0, 1, this.j), y6.fillRect(0, this.j - 1, i, 1), y6.fillRect(i - 1, 0, 1, this.j)
	}, this.a9j = function() {
		var f8 = bf.k7() % 100,
			f8 = (f8 = 9 - bL.du(f8 -= f8 % 10, 10), Math.floor(f8 * (this.j - a9b) / 9));
		y6.fillRect(0, f8, a9b, this.j - f8), y6.fillRect(i - a9b, f8, a9b, this.j - f8)
	}, this.a9k = function() {
		y6.fillRect(a9b, this.j - a9b, Math.floor((i - 2 * a9b) * ag.gp[aD.eX] / a9c), a9b)
	}, this.j3 = function() {
		var gL = aD.eX;
		bA.g9.gz(gL) && (gL = ag.gp[gL] - ag.a3R[gL], a3S !== gL ? (a9c = a6B(gL, a9c), a9d = a3S < gL && 10 <= gL, a3S = gL, a75 = !0) : bf.k7() % 10 == 9 && (a75 = !0))
	}, this.uf = function() {
		0 === ag.mi[aD.eX] || aD.hB || 2 === ag.a3J[aD.eX] || ug.drawImage(canvas, this.eu, ew)
	}
}

function cM() {
	var a9l, a9m, a9n, a9o, a9p, a9q, a9r, a9s, a9t, a9u, a9v, a9w, a9x, a9y, a9z, aA0, aA1, aA2, aA3, aA4, aA5, aA6, position, aA7, aA8, aA9, aAA, aAB = 1,
		aAC = 1,
		aAD = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.eX;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jv[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jv[aD.eX]);
	}

	function aAF() {
		a9r.clearRect(0, 0, a9l, a7o),
			a9r.fillStyle = bB.oY,
			a9r.fillRect(0, 0, a9l, a9w),
			a9r.fillStyle = bB.ne,
			a9r.fillRect(0, a9w, a9l, a7o - a9w);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jv[aD.eX]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aA6 = -1;
		if (__fx.leaderboardFilter.enabled && aA6 >= __fx.leaderboardFilter.filteredLeaderboard.length) aA6 = -1;
		playerPos >= position && aAH(playerPos - position, bB.o7),
			0 !== jv[aD.eX] && 0 === position && aAH(0, bB.oe),
			-1 !== aA6 && aAH(aA6, bB.nj),
			a9r.fillStyle = bB.ne,
			//console.log("drawing", aA6),
			a9r.clearRect(0, a7o - __fx.leaderboardFilter.tabBarOffset, a9l, __fx.leaderboardFilter.tabBarOffset);
		a9r.fillRect(0, a7o - __fx.leaderboardFilter.tabBarOffset, a9l, __fx.leaderboardFilter.tabBarOffset);
		a9r.fillStyle = bB.ni,
			a9r.fillRect(0, a9w, a9l, 1),
			a9r.fillRect(0, a7o - __fx.leaderboardFilter.tabBarOffset, a9l, 1),
			__fx.leaderboardFilter.drawTabs(a9r, a9l, a7o - __fx.leaderboardFilter.tabBarOffset, bB.o7),
			a9r.fillRect(0, 0, a9l, bc.yu),
			a9r.fillRect(0, 0, bc.yu, a7o),
			a9r.fillRect(a9l - bc.yu, 0, bc.yu, a7o),
			a9r.fillRect(0, a7o - bc.yu, a9l, bc.yu), a9r.font = a9m, bA.qZ.textBaseline(a9r, 1), bA.qZ.textAlign(a9r, 1), a9r.fillText(aAD, Math.floor((a9l + a9w - 22) / 2), Math.floor(a9u + a9n / 2));
		__fx.playerList.drawButton(a9r, 12, 12, a9w - 22);
		var f6, gM = playerPos < position + a9p - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9p)
				position = (result.length > a9p ? result.length : a9p) - a9p;
			//if (position >= result.length) position = result.length - 1;
			for (a9r.font = a9o, bA.qZ.textAlign(a9r, 0), f6 = a9p - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAI(lk[pos]), aAJ(f6, pos, lk[pos]);
			}
			for (bA.qZ.textAlign(a9r, 2), f6 = a9p - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAI(lk[pos]), aAK(f6, lk[pos]);
			}
		} else {
			for (a9r.font = a9o, bA.qZ.textAlign(a9r, 0), f6 = a9p - gM; 0 <= f6; f6--)
				aAI(lk[f6 + position]), aAJ(f6, f6 + position, lk[f6 + position]);
			for (bA.qZ.textAlign(a9r, 2), f6 = a9p - gM; 0 <= f6; f6--)
				aAI(lk[f6 + position]), aAK(f6, lk[f6 + position]);
		}
		2 == gM && (aAI(aD.eX), bA.qZ.textAlign(a9r, 0), aAJ(a9p - 1, jv[aD.eX], aD.eX), bA.qZ.textAlign(a9r, 2), aAK(a9p - 1, aD.eX)), 0 === position && (gM = .7 * a9x / ab.get(4).height, a9r.setTransform(gM, 0, 0, gM, Math.floor(a9y + .58 * a9x +
			.5 * gM * ab.get(4).width), Math.floor(a9u + a9n + .4 * a9x)), a9r.imageSmoothingEnabled = !0, a9r.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), a9r.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAI(player) {
		aD.hh && (a9r.fillStyle = bg.aAM[bg.aAN[player]])
	}

	function aAH(aB, aAO) {
		a9r.fillStyle = aAO, aB = a9p - 1 < aB ? a9p - 1 : aB;
		aAO = Math.floor((aB === a9p - 1 ? 2 : 0 === aB ? 1.15 : 1) * a9x), aAO = aB === a9p - 2 ? Math.floor(a9w + 9.15 * a9x) - Math.floor(a9w + 8.15 * a9x) : aAO;
		a9r.fillRect(0, Math.floor(a9w + (aB + (0 === aB ? 0 : .15)) * a9x), a9l, aAO)
	}

	function aAJ(aAQ, a3g, aB) {
		a9r.fillText(aA2[a3g], a9y, Math.floor(a9u + a9n + (aAQ + .5) * a9x)), 1 === ag.a3J[aB] && (a9r.font = "italic " + a9o);
		a3g = Math.floor(a9u + a9n + (aAQ + .5) * a9x);
		a9r.fillText(ag.yP[aB], a9z, a3g), 0 !== ag.a3J[aB] && (a9r.font = a9o), aB < aD.kA && 2 !== ag.a3J[aB] || a9r.fillRect(a9z, a3g + .35 * aAB, aA1[aB], Math.max(1, .1 * aAB))
	}

	function aAK(aAQ, aB) {
		a9r.fillText(ag.gb[aB], aA0, Math.floor(a9u + a9n + (aAQ + .5) * a9x))
	}

	function aAZ(ew) {
		return (ew -= bc.gap + a9w) < 0 ? Math.floor(ew / a9x) - 1 : ew < (a9p - 1) * a9x ? Math.floor(ew / a9x) : ew < a7o - a9w ? a9p - 1 : (ew -= a7o - a9w, a9p + Math.floor(ew / a9x))
	}

	function yt(eu, ew) {
		return eu >= bc.gap && eu < bc.gap + a9l && ew >= bc.gap && ew < bc.gap + a7o
	}
	this.dd = function() {
			var aB;
			for (aA8 = !1, aAA = aA9 = aA7 = 0, aA6 = -1, a9p = a0.a1.hw() ? 6 : 10, aAC = (position = 0) === (aAC = bj.eK.data[11].value) ? 10 : 1 === aAC ? 5 : 1, aA5 = !1, aA3 = new Uint16Array(a9p + 1), aA4 = new Uint32Array(a9p + 1), a9t = aD
				.ek, lk = new Uint16Array(a9t), jv = new Uint16Array(a9t), aB = a9t - 1; 0 <= aB; aB--) lk[aB] = aB, jv[aB] = aB;
			this.resize(!0), aA1 = new Uint16Array(aD.ek);
			var aAE = Math.floor(a9l - a9z - a9y - a9s);
			for (aA2 = new Array(aD.ek), a9r.font = a9o, aB = aD.ek - 1; 0 <= aB; aB--) aA2[aB] = aB + 1 + ".", ag.yP[aB] = bA.y6.a2z(ag.a0a[aB], a9o, aAE), aA1[aB] = Math.floor(a9r.measureText(ag.yP[aB]).width);
			aAF()
		}, this.resize = function(dd) {
			if (a7o = a0.a1.hw() ? (a9l = Math.floor(.335 * h.hx), Math.floor(a9p * a9l / 8)) : (a9l = Math.floor(.27 * h.hx), Math.floor(a9p * a9l / 10)), a9l = Math.floor(.97 * a9l), (a9q = document.createElement("canvas")).width = a9l, a9q
				.height = a7o, a9r = a9q.getContext("2d", {
					alpha: !0
				}), a9u = .025 * a9l, a9n = .16 * a9l, a9v = 0 * a9l, a9w = Math.floor(.45 * a9u + a9n), a9x = (a7o - a9n - 2 * a9u - a9v) / a9p,
				a9q.height = a7o += a9x, __fx.leaderboardFilter.tabBarOffset = Math.floor(a9x * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7o - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9l,
				a9m = bA.qZ.sN(1, Math.floor(.55 * a9n)), aAB = Math.floor((a0.a1.hw() ? .67 : .72) * a9x), a9o = bA.qZ.sN(0, aAB), a9r.font = a9o, a9y = Math.floor(.04 * a9l), a9z = Math.floor((a0.a1.hw() ? .195 : .18) * a9l), a9s = Math.floor(a9r
					.measureText("00920600").width), a9r.font = a9m, aA0 = a9l - a9y, !dd) {
				a9r.font = a9o;
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aA1[aB] = Math.floor(a9r.measureText(ag.yP[aB]).width);
				aAF()
			}
			aAD = bA.y6.a2z(L(111), a9m, .96 * a9l)
		}, this.a9i = function() {
			return a9l
		}, this.mU = function(bu, aAG) {
			(aAG || aA5 && (bu || bf.k7() % aAC == 0)) && (aA5 = !1, aAF())
		}, this.j3 = function() {
			! function() {
				for (var f6 = a9t - 1; 0 <= f6; f6--) 0 === ag.mi[lk[f6]] && ! function(f6) {
					var aAX = lk[f6];
					a9t--;
					for (var aB = f6; aB < a9t; aB++) lk[aB] = lk[aB + 1], jv[lk[aB]] = aB;
					lk[a9t] = aAX, jv[lk[a9t]] = a9t
				}(f6)
			}();
			for (var aAV, nQ = a9t - 1, f6 = 0; f6 < nQ; f6++) ag.gb[lk[f6]] < ag.gb[lk[f6 + 1]] && (aAV = lk[f6], lk[f6] = lk[f6 + 1], lk[f6 + 1] = aAV, jv[lk[f6]] = f6, jv[lk[f6 + 1]] = f6 + 1);
			! function() {
				for (var dt = aA5, gM = (aA5 = !0, jv[aD.eX] >= a9p - 1 ? a9p - 2 : a9p - 1), aB = gM; 0 <= aB; aB--)
					if (aA3[aB] !== lk[aB] || aA4[aB] !== ag.gb[lk[aB]]) return;
				(gM != a9p - 2 || aA3[a9p] === jv[aD.eX] && aA4[a9p] === ag.gb[aD.eX]) && (aA5 = dt)
			}();
			for (var aB = a9p - 1; 0 <= aB; aB--) aA3[aB] = lk[aB], aA4[aB] = ag.gb[lk[aB]];
			aA3[a9p] = jv[aD.eX], aA4[a9p] = ag.gb[aD.eX];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.h0 = function(eu, ew) {
			return !!yt(eu, ew) && ((__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, a9w - 22, a9w - 22) && __fx.playerList.display(ag.a0a), true) &&
				!(ew - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eu - bc.gap)) && (aA7 = bf.eM, aA8 = !0, aA9 = aAA = aAZ(ew), bJ.a26() && (eu = a8Y(-1, aAA, a9p), aA6 !== (eu = eu === a9p ?
					-1 : eu)) && (aA6 = eu, aAF(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAF(), bf.dl = !0;
		},
		this.a1Q = function(eu, ew) {
			if (__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, a9w - 22, a9w - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAF(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAF(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eu, ew, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eu - bc.gap
				)) return;
			var dt, aAY = aAZ(ew);
			return aA8 ? (dt = position, (position = a8Y(0, position += aA9 - aAY, aD.ek - a9p)) !== dt && (aAY = (aAY = a8Y(-1, aA9 = aAY, a9p)) !== a9p && yt(eu, ew) ? aAY : -1, aA6 = aAY, aAF(), bf.dl = !0), !0) : (aAY = (aAY = a8Y(-1, aAY,
				a9p)) === a9p || !yt(eu, ew) || bJ.a26() ? -1 : aAY, aA6 !== aAY && (aA6 = aAY, aAF(), bf.dl = !0))
		}, this.a1s = function(eu, ew) {
			if (!aA8) return !1;
			aA8 = !1;
			var aAY = aAZ(ew);
			var isEmptySpace = false;
			return bJ.a26() && -1 !== aA6 && (aA6 = -1, aAF(), bf.dl = !0), bf.eM - aA7 < 350 && aAA === aAY && -1 !== (aAY = (aAY = a8Y(-1, aAY, a9p)) !== a9p && yt(eu, ew) ? aAY : -1) && (eu = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lk[__fx.leaderboardFilter.filteredLeaderboard[aAY + position] ?? (isEmptySpace = true, jv[aD.eX])]) : lk[aAY + position]), aAY === a9p - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jv[aD.eX]) >=
				position + a9p - 1 && (eu = aD.eX), !isEmptySpace && aD.hh && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eu, ag.a0a, aD.kU), 0 !== ag.mi[eu] && !isEmptySpace) && aH.n3(eu, 800, !1, 0), !0
		}, this.a1T = function(eu, ew, deltaY) {
			var aAa;
			return !(aA8 || aD.nB || (aAa = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !yt(eu, ew)) || (eu = (eu = a8Y(-1, aAZ(ew), a9p)) === a9p || bJ.a26() ? -1 : eu, 0 < deltaY ? position < aD.ek - a9p && (position += Math.min(aD.ek - a9p -
				position, aAa), aA6 = eu, aAF(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aAa), aA6 = eu, aAF(), bf.dl = !0), 0))
		}, this.uf = function() {
			ug.drawImage(a9q, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, y6, eu, ew, a9T, aAb, gap, aAc, fontSize, aAd, aAe, aAf, aAg, aAh, aAi, aAj, aAk, aAl;

	function aAp() {
		y6.clearRect(0, 0, aW.i, aW.j), y6.fillStyle = bB.nf, y6.fillRect(0, 0, aW.i, aW.j), y6.fillStyle = bB.o2, eR = 0 < aAj ? aAj : Math.sqrt(aAg[4] / 1e4), y6.fillRect(0, aW.j - a9T - 1, Math.floor(eR * aW.i), a9T), y6.fillStyle = bB.ni, y6
			.fillRect(0, 0, aW.i, 1), y6.fillRect(0, 0, 1, aW.j), y6.fillRect(aW.i - 1, 0, 1, aW.j), y6.fillRect(0, aW.j - 1, aW.i, 1), y6.fillRect(0, aW.j - a9T - 1, aW.i, 1);
		for (var eR, aAr, dt = 0, aB = 0; aB < aAf.length; aB++) aAh[aB] ? (bA.qZ.textAlign(y6, 0), aAr = Math.floor((aAb - a9T + 2 * aAc) * (aB - dt + 1) / (aAf.length + 1) - .7 * aAc), y6.fillText(aAf[aB], gap, aAr), bA.qZ.textAlign(y6, 2), 5 ===
			aB && 0 !== ag.mi[aD.eX] && ag.gp[aD.eX] >= ae.jq(aD.eX) ? (y6.fillStyle = bB.oc, y6.fillText(aAn(aB), aW.i - gap, aAr), y6.fillStyle = bB.ni) : y6.fillText(aAn(aB), aW.i - gap, aAr)) : dt++
	}

	function aAn(aB) {
		return aB < 3 ? aAg[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rY.a40(aAg[aB] / 100, 2) : aB < 7 ? bA.rY.zD(aAg[aB]) : aB === 7 ? aW.aAs(aAg[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gb, aD.eX) : __fx.utils.getDensity(aD.eX)
	}

	function aAm() {
		ag.gb[aD.eX] !== aAg[6] && (aAg[6] = ag.gb[aD.eX], aAd++)
	}
	this.dd = function() {
		aAj = aAk = 0, (aAe = new Array(8))[0] = L(112), aAe[1] = aD.kU ? L(113) : L(114), aAe[2] = L(115), aAe[3] = L(116), aAe[4] = L(117), aAe[5] = L(118, 0, "Interest"), aAe[6] = L(119), aAe[7] = L(120),
			aAe.push("Max Troops", "Density"), // add aAe
			(aAf = new Array(aAe.length)).fill(""), (aAg = new Array(aAe.length))[0] = aD.kU ? 0 : aD.kA, aAg[1] = aD.kU ? al.kB : aD.kW, aAg[2] = aD.zy, aAg[3] = 0, aAg[4] = bL.du(1e4 * ag.gb[0], Math.max(aD.ju, 1)), aAg[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.eX], 64), aAg[6] = 0, aAm(), aAg[7] = 0, aAi = aAn(6), aAh = new Array(aAe.length);
		for (var aB = aAe.length - 1; 0 <= aB; aB--) aAh[aB] = !0;
		aAl = 0, aAl = aD.kU ? (aAh[0] = !1, aAh[2] = !1, aAh[3] = !1, 3) : (aAh[3] = !1, 1), aAd = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hw() ? .1646 : .126) * 1.25 * h.hx), this.j = Math.floor(1.18 * this.i), a9T = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAc = .04 * this.i, aAb = this.j, this.j -= Math.floor(aAl * (this.j -
			2 * a9T) / aAe.length), fontSize = Math.floor(.7 * (aAb - a9T) / aAe.length);
		var a5b = bA.qZ.sN(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5b, i) {
				for (var aB = 0; aB < aAf.length; aB++) aAf[aB] = bA.y6.a2z(aAe[aB], a5b, i)
			}((y6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5b, .575 * this.i), bA.qZ.textBaseline(y6, 1), y6.lineWidth = 1, this.a4F(), this.a8B(), aU.a8B(), aAp()
	}, this.a8B = function() {
		eu = h.i - this.i - bc.gap
	}, this.aAq = function() {
		ew = bc.gap
	}, this.a4F = function() {
		ew = bc.gap + (aU.a7Y() && 0 !== ag.mi[aD.eX] && !aD.hB ? aU.j + bc.gap : 0)
	}, this.mU = function(bu) {
		(bu || 100 <= aAd) && (aAd = 0, aAp())
	}, this.a4w = function() {
		return aAg[7]
	}, this.aAs = function(value) {
		var l3 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l3) / 1e3);
		return value < 10 ? l3 + ":0" + value : l3 + ":" + value
	}, this.j3 = function() {
		var aB3, per;
		aAh[0] && aD.zz - aD.zy !== aAg[0] && (aAg[0] = aD.zz - aD.zy, aAd++), al.kB - aAg[0] !== aAg[1] && (aAg[1] = al.kB - aAg[0], aAd++), this.mM(), (aB3 = ae.aB4(aD.eX)) !== aAg[5] && (aAg[5] = aB3, aAd++), aAm(), aAg[7] += bf.aB5, aB3 =
			aAn(7), aAi !== aB3 && (aAi = aB3, aAd += 100), aB3 = aD.hh ? bh.kg() : ag.gb[lk[0]], per = bL.du(1e4 * aB3, Math.max(aD.ju, 1)), aAg[3] = aB3, aAg[4] !== per && (aAd++, aAg[4] = per), 8 === aD.kS && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.g9.gz(aB)) return bR.zY.zv(), 1;
				return
			}() || aAg[3] < aD.ju || ! function() {
				for (var aB = al.kB - 1; 0 <= aB; aB--)
					if (0 < ag.gF[al.kC[aB]].length) return;
				return 1
			}() || bN.kx.aB2().length || bR.zY.zv()
	}, this.mM = function() {
		aAh[2] && aD.zy !== aAg[2] && (aAg[2] = aD.zy, aAd++)
	}, this.aAz = function() {
		return aAg[3] === aD.ju
	}, this.aB6 = function(aB) {
		var tB, aB7, dt;
		return 2 !== aD.zw && (aB % 2 == 1 && (aV.mU(1, 1), bf.dl = !0), aB === aD.a4O ? (aAj = 0, aAp(), !1) : (-1 !== aB || 0 !== aAk) && (aB7 = aAj, aAj = aD.gw ? aB / aD.a4O : (dt = performance.now(), 0 <= aB && (tB = dt - 392 * aB, aAk =
			0 === aB || tB < aAk ? tB : aAk), 1 < (aAj = (dt - aAk) / (392 * aD.a4O)) ? 1 : aAj), aAp(), aAj !== aB7))
	}, this.uf = function() {
		ug.drawImage(canvas, eu, ew)
	}
}

function cO() {
	var hZ, aB8, i, j, a8H, aB9, aBA, a7Z, canvas, mv, aBB;

	function y2() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aBB = hZ = !1, a8H = .61, aB9 = .07, aBA = .09, mv = a7Z = j = 0
	}, this.resize = function() {
		var y6, n8, f8, aBG, aBH, a5g;
		hZ && (i = aBC(i = a0.a1.hw() ? Math.floor(.69 * h.hx) : Math.floor(.5 * h.hx), a6B(h.i - 2 * bc.gap, 10)), i = aBC(i, Math.floor(3.57 * a6B(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, y6 = canvas.getContext("2d", {
				alpha: !0
			}), n8 = Math.floor(1 + j / 40), y6.clearRect(0, 0, i, j), y6.fillStyle = bB.nf, y6.fillRect(n8, n8, i - 2 * n8, j - 2 * n8), y6.lineJoin = "bevel", y6.lineWidth = 2 * n8, y6.strokeStyle = bB.ni, y6.strokeRect(n8, n8, i - 2 * n8,
				j - 2 * n8), y6.imageSmoothingEnabled = !1, f8 = ab.get(aB8), aBG = f8.width, a5g = (1 === aB8 ? .85 : 21 === aB8 ? .666 : .9) * a8H * j / (aBH = f8.height), y6.setTransform(a5g, 0, 0, a5g, Math.floor((i - a5g * aBG) / 2),
				Math.floor((j - a5g * aBH) / 2)), y6.drawImage(f8, 0, 0), y6.setTransform(1, 0, 0, 1, Math.floor(i - aBA * j - aB9 * j - n8), Math.floor(n8 + aB9 * j)),
			function(y6, en) {
				y6.lineWidth = Math.floor(1 + j / 80), y6.strokeStyle = bB.ni, y6.beginPath(), y6.moveTo(0, 0), y6.lineTo(en, en), y6.moveTo(0, en), y6.lineTo(en, 0), y6.stroke()
			}(y6, Math.floor(aBA * j)), y6.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fF, aBE, a84, aBF) {
		hZ || aBF && aBB || (aB8 = a84 ? 21 : fF ? 1 : 2, hZ = aBB = !0, this.resize(), aL.rq(), aR.a7z(), mv = bf.eM, a7Z = aBE ? 1 : 0)
	}, this.j3 = function() {
		!hZ || 1 <= a7Z || (a7Z = 1 < (a7Z += 5e-4 * (bf.eM - mv)) ? 1 : a7Z, mv = bf.eM, bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		return !(!hZ || a7Z <= 0 || (eu -= Math.floor((h.i - i) / 2), ew -= y2(), eu < 0) || ew < 0 || i < eu || j < ew || (i - j / 3 < eu && ew < j / 3 && (hZ = !1, bf.dl = !0), 0))
	}, this.uf = function() {
		!hZ || a7Z <= 0 || (ug.globalAlpha = a7Z, ug.drawImage(canvas, Math.floor((h.i - i) / 2), y2()), ug.globalAlpha = 1)
	}
}

function dN() {
	var aBJ, aBK = new Uint8Array(5),
		aBL = new Uint8Array(5);
	this.aBM = new aBN, this.dd = function() {
		for (var fF = bj.eK.data[119].value, aB = 0; aB < aBK.length; aB++) aBK[aB] = (fF >> 2 * aB) % 4
	}, this.a4a = function() {
		aBJ = [L(121), "", L(122, [bX.aBO[28]]), L(123, [bX.aBO[26]]), L(124, [bX.aBO[0]])], this.aBM.dd()
	}, this.j3 = function() {
		this.aBM.j3()
	}, this.a5K = function(id) {
		1 < id && bJ.r1() || ! function(e8) {
			if (3 === aBK[e8] || 1 === aBL[e8]) return;
			if (aBL[e8] = 1, !(Math.random() < .6)) {
				aBK[e8]++;
				for (var fF = 0, aB = 0; aB < aBK.length; aB++) fF += aBK[aB] << 2 * aB;
				bj.s0.s1(119, fF)
			}
			return 1
		}(id) || aN.a6H(aBJ[id])
	}
}

function aBN() {
	var aBQ;
	this.dd = function() {
		aBQ = !1
	}, this.j3 = function() {
		var gL;
		if (function() {
				if (!aBQ) {
					if (bf.k7() % 30 != 9) return;
					if (!bA.g9.lf(90)) return;
					aBQ = !0
				}
				return 1
			}() && (! function() {
				var qR = aN.a6d(956);
				if (qR) {
					if (bA.g9.l6(qR.player)) return 1;
					aN.a6c(956, 0)
				}
				return
			}() && (-1 === (gL = (aD.hh ? function() {
				var id = bh.ki(),
					en = al.kB;
				if (bg.kX[id])
					for (var zk = al.kC, el = bg.el, aB = 0; aB < en; aB++) {
						var gL = zk[aB];
						if (el[gL] !== id) return gL
					} else if (1 < en) return lk[en - 1];
				return -1
			} : function() {
				for (var aBY = al.kB, l2 = al.kC, aBZ = jv, aB = 0; aB < aBY; aB++) {
					var gL = l2[aB];
					if (0 !== aBZ[gL]) return gL
				}
				return -1
			})()) ? ! function() {
				var qR = aN.a6d(957);
				if (qR && qR.a67) {
					if (ac.ee(qR.a67.eZ << 2)) return 1;
					aN.a6c(957, 0)
				}
				return
			}() : (aN.yO(0, L(125, [ag.yP[gL]]), 956, gL, bB.ni, bB.nf, -1, !0), 0)))) {
			var en = ao.il.lI;
			if (0 !== en)
				for (var eK = ao.il.eK, aB = 0; aB < en; aB++) {
					var eZ = eK[aB];
					if (ac.ee(eZ << 2)) return void aN.yO(0, L(126, [bM.ev(eZ), bM.ex(eZ)]), 957, 0, bB.ni, bB.nf, -1, !0, void 0, {
						f6: 1,
						eZ: eZ
					})
				}
		}
	}
}

function dO() {
	this.aBa = new aBb, this.dd = function() {
		this.aBa.resize()
	}
}

function aBb() {
	this.resize = function() {
		var aB, aBc = document.head.querySelector("style#ss");
		if (aBc)
			for (aB = aBc.sheet.cssRules.length - 1; 0 <= aB; aB--) aBc.sheet.deleteRule(0);
		else(aBc = document.createElement("style")).id = "ss", document.head.appendChild(aBc);
		var a8P = "::-webkit-scrollbar",
			aBd = bA.qZ.qi(bc.sP),
			hj = bA.qZ.qi(Math.max(bA.qZ.rs(.012), 8));
		try {
			aBc.sheet.insertRule(a8P + "{width:" + hj + ";height:" + hj + ";}", aBc.sheet.cssRules.length), aBc.sheet.insertRule(a8P + "-thumb{background-color:white;}", aBc.sheet.cssRules.length), aBc.sheet.insertRule(a8P +
				"-track{background:" + bB.ne + ";}", aBc.sheet.cssRules.length), aBc.sheet.insertRule(a8P + "-track:horizontal{border-top:" + aBd + " solid white;}", aBc.sheet.cssRules.length), aBc.sheet.insertRule(a8P +
				"-track:vertical{border-left:" + aBd + " solid white;}", aBc.sheet.cssRules.length), aBc.sheet.insertRule(a8P + "-button{display:none;}", aBc.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBc.sheet.cssRules.length - 1; 0 <= aB; aB--) aBc.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aBe = !1, this.nY = !1, this.a4J = !1, this.aBf = [0, 0, 0, 0], this.aBg = function() {
		var n8, n9, nL, nM;
		this.a4J = this.a4J || this.nY, (this.nY || this.aBe && this.a4J) && (n8 = ba.aBh[0], n9 = ba.aBh[1], nL = ba.aBh[2], nM = ba.aBh[3], n8 = n8 < this.aBf[0] ? this.aBf[0] : n8, n9 = n9 < this.aBf[1] ? this.aBf[1] : n9, nL = nL > this.aBf[
				2] ? this.aBf[2] : nL, nM = nM > this.aBf[3] ? this.aBf[3] : nM, this.nY = !1, this.aBe = !1, n8 === this.aBf[0] && n9 === this.aBf[1] && nL === this.aBf[2] && nM === this.aBf[3] ? this.a4K() : n8 <= nL && n9 <= nM && a4c
			.putImageData(a4d, 0, 0, n8, n9, nL - n8 + 1, nM - n9 + 1))
	}, this.a4K = function() {
		this.a4J && this.aBf[2] >= this.aBf[0] && this.aBf[3] >= this.aBf[1] && a4c.putImageData(a4d, 0, 0, this.aBf[0], this.aBf[1], this.aBf[2] - this.aBf[0] + 1, this.aBf[3] - this.aBf[1] + 1), this.a4J = !1
	}, this.a07 = function() {
		this.aBf[2] >= this.aBf[0] && this.aBf[3] >= this.aBf[1] && a4c.putImageData(a4d, 0, 0, this.aBf[0], this.aBf[1], this.aBf[2] - this.aBf[0] + 1, this.aBf[3] - this.aBf[1] + 1), this.a4J = !1
	}, this.dd = function() {
		var eu, ew;
		this.aBe = !1, this.nY = !1, this.a4J = !1, this.aBf[0] = bS.ey, this.aBf[1] = bS.ez, this.aBf[2] = this.aBf[3] = 0;
		loop: for (eu = 1; eu < bS.ey - 1; eu++)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBi[ac.xZ(eu, ew) + 2]) {
					this.aBf[0] = eu;
					break loop
				} loop: for (ew = 1; ew < bS.ez - 1; ew++)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBi[ac.xZ(eu, ew) + 2]) {
					this.aBf[1] = ew;
					break loop
				} loop: for (eu = bS.ey - 2; 0 < eu; eu--)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBi[ac.xZ(eu, ew) + 2]) {
					this.aBf[2] = eu;
					break loop
				} loop: for (ew = bS.ez - 2; 0 < ew; ew--)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBi[ac.xZ(eu, ew) + 2]) {
					this.aBf[3] = ew;
					break loop
				}
	}
}

function L(value, aBj, vD) {
	var qG = "number" == typeof value ? b7.aBk[value] : value;
	if (vD && b7.aBl() && (qG = vD), aBj)
		for (var en = aBj.length, aB = 0; aB < en; aB++)
			for (var f6 = 0; f6 < 3; f6++) qG = qG.replace("{" + (10 * f6 + aB) + "}", aBj[aB]);
	return qG
}

function c2() {
	this.data = new aBm;
	var aBn = (new aBo).L84,
		aBp = (this.aBk = aBn, !1);
	this.dd = function() {
		var en, g;
		aBp = !1, "en" !== bj.eK.data[12].value.split("-")[0].toLowerCase() ? bj.eK.data[12].value === bj.eK.data[145].value && 0 < bj.eK.data[146].value && (en = bj.eK.data[146].value, (g = bj.qq.vJ(en, !1)).length === en) && !!bA.qh.a2c(g) &&
			function(g) {
				for (var en = g.length, j = 0; j < en; j++) g[j] = g[j].replace("&#39;", "'");
				var aBv = bj.qq.vJ(en, !0);
				if (en !== aBv.length) return !1;
				if (!bA.qh.a2c(aBv)) return !1;
				for (var l3 = aBn.length, a9K = new Array(l3), aBw = l3 === en, gG = Math.min(en, l3), aB = 0; aB < l3; aB++)
					if (a9K[aB] = aBn[aB], aB < en && aBv[aB] === a9K[aB]) a9K[aB] = g[aB];
					else {
						aBw = !1;
						for (var f7 = 0; f7 < gG; f7++)
							if (aBv[f7] === a9K[aB]) {
								a9K[aB] = g[f7];
								break
							}
					} return b7.aBk = a9K, aBw
			}(g) || (aBp = !0) : b7.aBk = aBn
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dy
	}, this.aBl = function() {
		return this.aBk === aBn || !aBn.length
	}, this.aBx = function() {
		var aBy;
		aBp && (aBp = !1, 0 !== aBn.length) && (aBy = bj.eK.data[12].value, b0.aBz.aC0(0, aBy.slice(0, 20)))
	}, this.aC1 = function(g) {
		g.length === aBn.length && (this.aBk = g, bj.s0.s1(145, bj.eK.data[12].value), bj.s0.s1(146, g.length), bj.qq.vP(g, !1), bj.qq.vP(aBn, !0), 0 === aa.a17()) && 5 === t.sn && t.y.aC2()
	}, this.aC3 = function() {
		var aC4, g = navigator.languages;
		return g && g.length ? (aC4 = Math.max(b7.data.aC5(g[0]), 0), 1 === g.length ? [aC4, aC4] : [aC4, Math.max(b7.data.aC5(g[1]), 0)]) : [0, 0]
	}
}

function aBm() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aC6 = function() {
		for (var aC7 = [], g = this.g, en = g.length, aB = 0; aB < en; aB++) aC7.push(g[aB]);
		var aC8 = bj.eK.data[12].vD;
		for (aB = 0; aB < en; aB++)
			if (aC7[aB] === aC8) {
				aC7.splice(aB, 1), en--;
				break
			} aC7.sort(), en++, aC7.unshift(aC8);
		try {
			if ("undefined" == typeof Intl) return aC7;
			for (aB = 0; aB < en; aB++) {
				var qG = new Intl.DisplayNames([aC7[aB]], {
					type: "language"
				}).of(aC7[aB]);
				qG !== aC7[aB] && (aC7[aB] = aC7[aB] + ": " + qG)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aC7
	}, this.aCA = function(aCB) {
		for (var qG = bj.eK.data[12].value, en = aCB.length, aB = 0; aB < en; aB++)
			if (qG === aCB[aB].split(":")[0]) return aB;
		return 0
	}, this.aC5 = function(aCC) {
		if (!aCC || aCC.length < 2) return 0;
		aCC = aCC.split("-")[0].toLowerCase();
		for (var g = this.g, en = g.length, aB = 0; aB < en; aB++)
			if (aCC === g[aB]) return aB;
		return -1
	}
}

function aBo() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "You have earned {10} gold!", "{0} has earned {11} gold!", "Team {0}", "Team {0} has won the game!",
		"You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.",
		"You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.",
		"{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}",
		"Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.",
		"{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "🔑 Show Account", "🚨 Moderation Actions", "🚩 Report User", "💬 Mention", "Loading", "{0} has defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains",
		"Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile",
		"🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit",
		"Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names",
		"Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members",
		"Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election",
		"Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender",
		"Receiver", "Amount", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Close",
		"Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name",
		"Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.",
		"Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size",
		"Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn",
		"🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar",
		"Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote",
		"Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan",
		"White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dj() {
	var eu, ew, j, tk, aCD, aCE, aCF, aCG, aCH, i, a3E, aCI;
	this.hZ = !1, this.dd = function(qG, aCJ) {
		if (1 === a0.id && 13 <= a0.dv && a0.dv < 18) return aCJ ? void(a3E = qG) : a3E !== qG ? void 0 : void a0.vH.saveString(200, qG);
		aCJ && (a3E = qG, (aCI = document.createElement("a")).appendChild(document.createTextNode(a3E)), this.hZ = !0, aCI.title = a3E, aCI.target = "_blank", aCI.href = a3E, aCI.style.textAlign = "center", aCI.style.color = bB.ni, aCI.style
			.position = "absolute", aCI.style.padding = "0px", aCI.style.margin = "0px", this.resize(), document.body.appendChild(aCI), bf.dl = !0)
	}, this.rq = function() {
		return !(!this.hZ || (document.body.removeChild(aCI), this.hZ = !1))
	}, this.h0 = function(i4, i5) {
		return !!this.hZ && ((i4 < eu || i5 < ew || eu + i < i4 || ew + j < i5 || eu + i - tk < i4 && i5 < ew + tk) && (bf.dl = !0, this.hZ = !1, document.body.removeChild(aCI)), !0)
	}, this.resize = function() {
		var a5b, aCK;
		this.hZ && (aCG = Math.floor(.8 * (a0.a1.hw() ? h.i > h.j ? .6 : .55 : .4) * h.hx), tk = Math.floor(.15 * aCG), aCD = Math.floor(.35 * tk), aCE = Math.floor(.5 * tk), aCF = Math.floor(2.5 * aCE), j = tk + aCD + 3 * aCE, a5b = bA.qZ.sN(1,
			aCD / h.k), aCH = Math.floor(h.k * aQ.measureText(a3E, a5b)), aCK = i = (aCG < aCH ? aCH : aCG) + 2 * aCF, i = Math.min(i, h.i - 2 * (a0.a1.hw() ? 2 : 1) * bc.gap), a5b = bA.qZ.sN(1, i / aCK * aCD / h.k), aCH = Math.floor(h
			.k * aQ.measureText(a3E, a5b)), eu = Math.floor((h.i - i) / 2), ew = Math.floor((h.j - j) / 2), aCI.style.font = a5b, aCI.style.top = Math.floor((ew + 1.4 * aCE + tk) / h.k) + "px", aCI.style.left = Math.floor((eu + (i -
			aCH) / 2) / h.k) + "px")
	}, this.uf = function() {
		this.hZ && (ug.fillStyle = bB.nf, ug.fillRect(eu, ew + tk, i, j - tk), ug.fillStyle = bB.oo, ug.fillRect(eu, ew, i, tk), ug.fillStyle = bB.ni, ug.lineWidth = bc.yu, ug.strokeStyle = bB.ni, ug.strokeRect(eu, ew, i, j), ug.fillRect(eu, ew +
			tk, i, bc.yu), ug.font = bA.qZ.sN(1, .48 * tk), bA.qZ.textAlign(ug, 1), bA.qZ.textBaseline(ug, 1), ug.fillText("You are leaving Territorial.io!", Math.floor(eu + (i - .5 * tk) / 2), Math.floor(ew + .55 * tk)), aM.a5m(Math
			.floor(eu + i - .8 * tk), Math.floor(ew + .25 * tk), Math.floor(.5 * tk)), ug.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aAe, eu = [0, 0, 0, 0, 0],
		ew = [0, 0, 0, 0, 0],
		nK = [1, 1, 1, 1, 1],
		fF = [!0, !0, !0, !1, !1],
		f8 = (this.fa = [!0, !0, !0, !1, !1], null);
	this.aCL = function(a2n, aCM) {
		f8 = a2n, fF = aCM, aAe = [bK.aCN, bK.a10, bK.aCO, bK.aCO, bK.aCP], this.dd()
	}, this.dd = function() {
		if (ab.tF()) {
			var aB, su = Math.floor((a0.a1.hw() ? .261 : .195) * h.hx),
				sv = Math.floor(.9 * su),
				a8H = Math.floor(.17 * sv);
			if (gap = a0.a1.hw() ? 2 * bc.gap : bc.gap, nK[0] = su / f8[0].width, nK[1] = sv / f8[1].width, nK[2] = a8H / f8[2].height, nK[3] = a8H / f8[3].height, nK[4] = a8H / f8[4].height, nK[2] *= 1.7, nK[3] *= 1.07, eu[0] = gap, eu[1] = gap,
				eu[2] = gap, eu[3] = gap, eu[4] = Math.floor(2 * gap + nK[3] * f8[3].width), ew[0] = gap, ew[1] = ew[0] + gap + nK[0] * f8[0].height, ew[2] = ew[1] + gap + nK[1] * f8[1].height, ew[3] = ew[2] + gap + nK[2] * f8[2].height, ew[4] =
				ew[3], !fF[0])
				for (aB = 0; aB < 5; aB++) ew[aB] -= nK[0] * f8[0].height + gap;
			if (!fF[1])
				for (aB = 2; aB < 5; aB++) ew[aB] -= nK[1] * f8[1].height + gap
		}
	}, this.hZ = function() {
		return !(7 === aa.a17() && a0.a1.hw())
	}, this.h0 = function(i4, i5) {
		if (f8 && this.hZ())
			for (var aB = fF.length - 1; 0 <= aB; aB--)
				if (fF[aB] && this.fa[aB] && eu[aB] < i4 && ew[aB] < i5 && i4 < eu[aB] + nK[aB] * f8[aB].width && i5 < ew[aB] + nK[aB] * f8[aB].height) return t.u(9, t.sn, new aCQ("You are leaving Territorial.io.", bA.qZ.a3D(aAe[aB]))), !0;
		return !1
	}, this.uf = function() {
		if (f8 && this.hZ()) {
			var aB;
			for (ug.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fF[aB] && this.fa[aB] && (ug.setTransform(nK[aB], 0, 0, nK[aB], eu[aB], ew[aB]), ug.drawImage(f8[aB], 0, 0));
			ug.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aCR = 0, this.aCS = null, this.tt = null, this.kx = null, this.y = null, this.uF = null, this.tr = null, this.message = null, this.aCT = null, this.rp = null, this.aCU = new aCV, this.a14 = 0, this.a9B = 0, this.dd = function() {
		this.a9B = bf.eM, this.aCR = bG.sq.wB(bj.eK.data[105].value), this.tt = new aCW, this.kx = new aCX, this.y = new aCY, this.uF = new aCZ, this.tr = new aCa, this.message = new aCb, this.aCT = new aCc, this.rp = new aCd, this.y.dd(), bp
		.dd(), this.a14 = 1, a0.a1.setState(1), aa.setState(0)
	}, this.u9 = function() {
		this.rp && this.rp.u9(), this.aCS = null, this.tt = null, this.kx = null, this.y = null, this.uF = null, this.tr = null, this.message = null, this.aCT = null, this.rp = null, this.a14 = 0, bp.u9(), a0.a1.setState(0), bi.a1g.aCe()
	}
}

function aCW() {
	function aCz(g, t7, t8) {
		var aD0 = g[t7];
		g[t7] = g[t8], g[t8] = aD0
	}
	this.tu = [
		[],
		[],
		[],
		[]
	], this.tv = [0, 0, 0, 0], this.aCf = [], this.aCg = function(aCh, sl, username, u0, a3g, aCi, elo, color, vj, aCj) {
		this.tu[aCh].push(this.aCk(sl, username, u0, a3g, aCi, elo, color, vj, aCj)), bn.aCR === sl && (bn.aCS = this.tu[aCh][this.tu[aCh].length - 1]), bn.y.aCl += 29 === t.sn && bn.y.rd[0] === aCh && 1 === bn.y.rd[2]
	}, this.aCk = function(sl, username, u0, a3g, aCi, elo, color, vj, aCj) {
		return {
			sl: sl,
			username: username,
			u0: u0,
			a3g: a3g,
			aCi: aCi,
			elo: elo,
			color: color,
			vj: vj,
			aCj: aCj
		}
	}, this.aCm = function(e8, aCh, u0, a3g, aCi, elo, vj) {
		e8 = this.tu[aCh][e8];
		e8.u0 = u0, e8.a3g = a3g, e8.aCi = aCi, e8.elo = elo, e8.vj = vj, bn.y.aCl += 29 === t.sn && bn.y.rd[0] === aCh && 1 === bn.y.rd[2]
	}, this.aCn = function(e8, aCh, aCo) {
		var e8 = this.tu[aCh][e8],
			aCp = e8.username,
			aCq = "Redacted " + bF.sq.zD(e8.sl, 2);
		e8.username = aCo ? "[" + bA.rY.a0d(aCp) + "] " + aCq : aCq, aCp.indexOf("Redacted") < 0 && (e8.aCr = aCp, e8.aCs = 3), bn.y.aCl += 29 === t.sn && bn.y.rd[0] === aCh && 1 === bn.y.rd[2]
	}, this.aCt = function(e8, aCu, aCv) {
		var player = this.tu[aCu][e8];
		this.aCw(e8, aCu), this.tu[aCv].push(player), bn.y.aCl += 29 === t.sn && bn.y.rd[0] === aCv && 1 === bn.y.rd[2]
	}, this.aCw = function(e8, aCu) {
		var tt = this.tu[aCu];
		this.aCf.push(tt[e8]), 1e3 < this.aCf.length && this.aCf.shift(), e8 >= this.tv[aCu] ? tt[e8] = tt[tt.length - 1] : (this.tv[aCu]--, 2 === aCu ? (tt.splice(this.tv[aCu] + 1, 0, tt[tt.length - 1]), tt.splice(e8, 1)) : (tt[e8] = tt[this.tv[
			aCu]], tt[this.tv[aCu]] = tt[tt.length - 1])), tt.pop(), bn.y.aCl += 29 === t.sn && bn.y.rd[0] === aCu && 1 === bn.y.rd[2]
	}, this.aCx = function(e8, rc) {
		bn.y.aCl += 29 === t.sn && bn.y.rd[0] === rc && 1 === bn.y.rd[2];
		var tt = this.tu[rc],
			qR = tt[e8];
		if (2 === rc)
			if (e8 >= this.tv[rc]) {
				for (var aCy = this.tv[rc], elo = qR.elo; aCy && elo > tt[aCy - 1].elo;) aCy--;
				tt[e8] = tt[this.tv[rc]], tt.splice(this.tv[rc]++, 1), tt.splice(aCy, 0, qR)
			} else tt.splice(this.tv[rc]--, 0, qR), tt.splice(e8, 1);
		else e8 >= this.tv[rc] ? aCz(tt, this.tv[rc]++, e8) : aCz(tt, --this.tv[rc], e8)
	}, this.aD1 = function(sl) {
		for (var tu = this.tu, en = tu.length, aB = 0; aB < en; aB++)
			for (var tt = tu[aB], l3 = tt.length, f6 = 0; f6 < l3; f6++)
				if (sl === tt[f6].sl) return tt[f6];
		return null
	}
}

function aCV() {
	this.dm = function(e8) {
		if ((tv = bn.tt.tv[e8]) < 2) return !1;
		var re = bn.y.rf[e8],
			aD2 = 9 === re.aD3 ? 333 : 512,
			tv = Math.min(tv, aD2);
		8 === re.aD3 && (tv -= tv % 2);
		aD2 = bn.tt.tu[e8].splice(0, tv), bn.tt.tv[e8] -= tv, tv = function(aD4) {
			if (bn.aCS) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var en = aD4.length, sl = bn.aCS.sl, aB = 0; aB < en; aB++)
					if (aD4[aB].sl === sl) return aB
			}
			return -1
		}(aD2);
		return -1 === tv ? (bn.tt.aCf = bn.tt.aCf.concat(aD2), 1e3 < bn.tt.aCf.length && bn.tt.aCf.splice(0, bn.tt.aCf.length - 1e3), bn.y.aCl += 29 === t.sn && bn.y.rd[0] === e8 && 1 === bn.y.rd[2], !1) : (8 === re.aD3 && (re.aD7 = (re.aD7 + (
			tv >> 1)) % 1024, e8 = tv - tv % 2, tv %= 2, aD2 = aD2.slice(e8, 2 + e8)), ax.dd(re, aD2, tv), !0)
	}, this.aD8 = function(re, aD4, aD5) {
		var eq = aD.data = new a4P,
			aDC = (eq.spawningSeed = re.spawningSeed, re.aD3 < 7 ? (eq.gameMode = 1, eq.numberTeams = re.aD3 + 2) : 9 === re.aD3 ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === re.aD3 ?
				0 : 10 === re.aD3 ? 1 : 2), eq.selectedPlayer = aD5, eq.isContest = re.aD9, eq.mapType = bS.aDA(re.eT) ? 0 : 1, bS.aDB(eq, re.eT), eq.mapSeed = re.mapSeed, eq.humanCount = aD4.length);
		eq.selectableSpawn = 1 === eq.gameMode || aDC < 100, eq.colorsData = new Uint32Array(aDC), eq.playerNamesData = new Array(aDC);
		for (var aB = 0; aB < aDC; aB++) eq.colorsData[aB] = aD4[aB].color, eq.playerNamesData[aB] = aD4[aB].username;
		if (2 === eq.battleRoyaleMode)
			for (eq.elo = new Uint16Array(aDC), aB = 0; aB < aDC; aB++) eq.elo[aB] = aD4[aB].elo;
		aa.setState(8), bS.a7(re.eT, eq.mapSeed), aD.a4U(), aD.a4S = 2
	}
}

function aCX() {
	var dz = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aDD = [bB.nw, bB.nw, bB.nx, bB.oQ, bB.oR, bB.oD, bB.oW, bB.nx, bB.oq, bB.og, bB.os],
		aDE = [
			[1],
			[1],
			[1.2],
			[1.4, 1.2],
			[1.7, 1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2]
		],
		aDF = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aDS(rg, sl, aDU) {
		for (var f7 = rg.length - 1; 0 <= f7; f7--) {
			var qR = rg[f7];
			0 === qR.id && qR.sl === sl && (qR.r = "[Redacted Message]", aDU) && (qR.aDV = 1)
		}
	}
	this.rl = function(aDG) {
		var aDH, a0e;
		return aDG.id < 5 && (aDH = "@" + bF.sq.zD(aDG.sl, 5)), 0 === aDG.id ? aDH + ": " + aDG.r : 1 === aDG.id ? (a0e = "@" + bF.sq.zD(aDG.target, 5), 0 === aDG.aDI ? 32768 <= aDG.value ? aDH + " voted with " + (aDG.value - 32768 + 1) +
				" gold against " + a0e + " to weaken the latter's admin position. 📉" : aDH + " voted with " + (aDG.value + 1) + " gold for " + a0e + " to strengthen the latter's admin position. 💪" : 1 === aDG.aDI ? aDH + " sent " + Math.floor(
					aDG.value / 100) + " 🧈 gold to " + a0e + "." : aDH + " voted with " + (aDG.value / 10).toFixed(1) + " points for " + a0e + " to acknowledge the latter as clan leader. ✅") : 2 === aDG.id ? 0 === aDG.aDI ? aDH +
			" was 🔇 muted for 1 Hour." : 1 === aDG.aDI ? "The username of " + aDH + " was ✂️ redacted. Duration: 1 Day" : aDH + " 👢 was kicked." : 3 === aDG.id ? aDH + bo.eB(aDG.aDI, bo.e5[aDG.aDI][aDG.value]) + "@" + bF.sq.zD(aDG.target, 5) +
			bo.eD(aDG.aDI, bo.e5[aDG.aDI][aDG.value]) : 4 === aDG.id ? aDH + bo.eB(5, bo.e5[5][aDG.aDI]) + "@" + bF.sq.zD(aDG.target, 5) + bo.eD(5, bo.e5[5][aDG.aDI]) : 5 === aDG.id ? aDF[aDG.aDI] : 6 === aDG.id ? "You are about to mention " +
			aDG.value + " player" + (1 === aDG.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDG.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.rk = function(aDG, a6p) {
		return {
			aDG: aDG,
			r: a6p,
			aDJ: 0,
			fontSize: 1,
			ro: 0,
			aDK: aDG.id ? bB.oP : bB.ni
		}
	}, this.ty = function(player, rc) {
		return (2 === rc ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.tz = function(u0) {
		return aDD[u0]
	}, this.aDL = function(u0, a3g) {
		return u0 < 3 || 7 === u0 ? aDE[u0][0] : 4 === u0 ? aDE[u0][a3g < 1 ? 0 : a3g < 10 ? 1 : 2] : aDE[u0][a3g < 10 ? 0 : 1]
	}, this.aDM = function(a3g) {
		return 0 === a3g
	}, this.aD1 = function(rc, sl) {
		for (var tu = bn.tt.tu, tt = tu[rc], en = tt.length, aB = 0; aB < en; aB++)
			if (sl === tt[aB].sl) return tt[aB];
		for (var f7 = 0; f7 < tu.length; f7++)
			if (rc !== f7)
				for (en = (tt = tu[f7]).length, aB = 0; aB < en; aB++)
					if (sl === tt[aB].sl) return tt[aB];
		return null
	}, this.u1 = function(qR) {
		return !!bn.aCS && qR.sl === bn.aCS.sl
	}, this.aDN = function(tt, aDO, aDP) {
		var a0b = [];
		loop: for (var aB = aDO; aB < aDP; aB++) {
			var a0c = bA.rY.a0d(tt[aB].username);
			if (a0c) {
				for (var f7 = a0b.length - 1; 0 <= f7; f7--)
					if (a0c === a0b[f7].name) {
						a0b[f7].gG++;
						continue loop
					} a0b.push({
					name: a0c,
					gG: 1
				})
			}
		}
		if (a0b.sort(function(f6, f7) {
				return f7.gG - f6.gG
			}), 0 === a0b.length) return "";
		for (var qG = a0b[0].name + ": " + a0b[0].gG, aB = 1; aB < a0b.length; aB++) qG += "   " + a0b[aB].name + ": " + a0b[aB].gG;
		return qG
	}, this.aDQ = function(u0, a3g, aCi) {
		return 0 === dz[u0].length ? "Rank: " + (a3g + 1) : dz[u0] + " Rank: " + (a3g + 1) + (3 !== u0 && aCi < 100 ? "   " + dz[3] + " Rank: " + (aCi + 1) : "")
	}, this.aDR = function(sl) {
		for (var rf = bn.y.rf, aB = 0; aB < rf.length; aB++) aDS(rf[aB].rg, sl);
		aDS(bn.message.aDT(), sl, 1), bn.rp.aDR(sl)
	}
}

function aCa() {
	var sG = 0,
		aDW = 0,
		aDX = 0,
		aDY = null,
		aDZ = null;

	function aDc(qR, aDd, aDe) {
		var qG = qR.username;
		return (qG += "   " + bn.kx.aDQ(qR.u0, qR.a3g, qR.aCi)) + function(qR) {
			qR = qR.vj;
			if (qR < 1e3) return "   Gold: " + qR;
			if ((qR %= 1024) < 1e3) return "   Gold: " + qR + "k";
			return "   Gold: " + (qR - 999) + "M"
		}(qR) + ("   IP: " + bF.sq.zD(qR.aCj, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aDe ? aDW : aDb(qR, aDd)])
	}

	function aDb(qR, aDd) {
		return aDW = aDd || bn.tt.aD1(qR.sl) ? 1 : 0
	}
	this.aDa = function() {
		!sG || aDW === aDb(aDZ) && aDX === aDZ.vj || (aDX = aDZ.vj, aDY.show(-1, -1, aDc(aDZ, 0, 1), 1, 1))
	}, this.u2 = function(e, qR, aDd) {
		var a8O = e.target.getBoundingClientRect();
		this.show(a8O.left, a8O.top, qR, 0, aDd), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.tr && bn.tr.rq(1)
		})
	}, this.show = function(eu, ew, qR, sK, aDd) {
		aDY = aDY || new sE, aDX = (aDZ = qR).vj, aDY.show(eu, ew, aDc(qR, aDd), sK), sG = 1
	}, this.rq = function(sQ) {
		aDY && aDY.rq(sQ) && (sG = 0, aDZ = null)
	}
}

function aCY() {
	function aDj(aDm) {
		bn.y.aCl && 1 === bn.y.rd[2] && t.a4y(29).aDn(), bn.y.aCl = 0, t.a4y(29).aDo(), 0 !== bn.y.rf[bn.y.rd[0]].te && !aDm || t.a4y(29).aDp(), bn.tr.aDa()
	}
	this.rf = new Array(4), this.rd = [0, 0, 1, 0], this.aCl = 0, this.aDg = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rf.length; aB++) this.rf[aB] = new aDh;
		this.rd[0] = bj.eK.data[158].value
	}, this.aDi = function() {
		aDj(!0)
	}, this.aDk = function() {
		for (var aB = 0; aB < bn.y.rf.length; aB++) {
			var re = bn.y.rf[aB];
			0 === re.te ? re.aDq = 0 : (re.aDr = Math.max(re.aDr - re.aDq % 2, 0), re.aDq++)
		}
		aDj(!1)
	}, this.aDs = function(rc) {
		this.rd[0] !== rc || this.rd[2] || t.a4y(29).aDt()
	}
}

function aCc() {
	var aDu = 0,
		aDv = "",
		aDw = 0,
		aDx = 0,
		aDy = 0;

	function aE0(a6p) {
		b0.aEB.aEC(3, a6p)
	}

	function aE9(gG) {
		aDu = 1, bn.message.aED({
			id: 6,
			value: gG
		})
	}

	function aE3(r) {
		var aEG = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEG)
	}
	this.a00 = function(r) {
		var aDz, g, aE5;
		if (aDu) return aDu = 0, "yes" === (aDz = r.toLowerCase()) || "y" === aDz ? void aE0(aDv) : void bn.message.aED({
			id: 5,
			aDI: 7
		});
		!(r.indexOf("@") < 0) && (aDz = aE3(r)) ? (aDv = r, g = function(aE2) {
			for (var en = aE2.length, aEE = [0, 0, 0, 0], aB = 0; aB < en; aB++)
				for (var i = aE2[aB], f6 = 0; f6 < 4; f6++) i === "@room" + (f6 + 1) && (aEE[f6] = 1);
			if ((aDx = bA.qh.a2R(aEE)) % 4 == 0) return bA.qh.a2j(bn.tt.tu);
			for (f6 = 0; f6 < 4; f6++) aEE[f6] = aEE[f6] ? bn.tt.tu[f6] : [];
			return bA.qh.a2j(aEE)
		}(aDz), function(aE2, aE5, r) {
			if (!aDw) return;
			for (var en = aE5.length, aB = 0; aB < en; aB++) 2 === aE5[aB].id && (r = r.replace(aE2[aE5[aB].e8], "@" + aE5[aB].fF));
			return aDu = 1, aE0((aDv = r).slice(0, 126) + "|"), 1
		}(aDz, aE5 = function(aE2) {
			for (var aE5 = [], en = (aDy = aDw = 0, aE2.length), aB = 0; aB < en; aB++) {
				var i = aE2[aB],
					l3 = i.length;
				bA.rY.startsWith(i, "@[") ? l3 <= 9 && bA.rY.a3H(i, "]") && aE5.push({
					id: 0,
					fF: i.substring(2, l3 - 1).toUpperCase()
				}) : 6 === l3 ? bA.rY.startsWith(i, "@room") || (aDy++, aE5.push({
					id: 1,
					fF: bG.sq.wB(i.substring(1))
				})) : 1 < l3 && l3 < 5 && 0 <= (l3 = b7.data.aC5(i.substring(1))) && (aE5.push({
					id: 2,
					fF: l3,
					e8: aB
				}), aDw = 1)
			}
			return aE5
		}(aDz), r) || (0 === aE5.length ? aDx || function(aE2) {
			for (var en = aE2.length, aB = 0; aB < en; aB++) {
				var i = aE2[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aDz) ? aE9(g.length) : aE0(r) : aDz.length === aDy ? aE0(r) : (function(g, aE5) {
			var l3 = aE5.length;
			if (0 === l3) return;
			var en = g.length;
			loop: for (var aB = en - 1; 0 <= aB; aB--) {
				for (var f6 = 0; f6 < l3; f6++)
					if (0 === aE5[f6].id) {
						if (aE5[f6].fF === bA.rY.a0d(g[aB].username)) continue loop
					} else if (1 === aE5[f6].id && aE5[f6].fF === g[aB].sl) continue loop;
				g[aB] = g[--en], g.pop()
			}
		}(g, aE5), aE9(g.length)))) : aE0(r)
	}, this.aEH = function(r) {
		var aE2 = aE3(r);
		if (aE2)
			for (var a5 = new RegExp("^[0-9]+$"), en = aE2.length, aB = 0; aB < en; aB++) {
				var i = aE2[aB].substring(1),
					l3 = i.length;
				1 <= l3 && l3 <= 3 && a5.test(i) && (l3 = parseInt(i, 10), !isNaN(l3)) && 0 <= l3 && l3 < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[l3]))
			}
		return r
	}
}

function aCb() {
	var aEI, aEJ = [],
		aEK = -1,
		aEL = 0,
		aEM = 0;

	function aEQ() {
		aEL = bf.eM, (3 === this.u6 ? (aEM = 1, aEP) : (aEK = (aEJ.length + aEK + 2 * this.u6 - 1) % aEJ.length, aEO))()
	}

	function aEO() {
		0 !== aEJ.length && (aEM = 0, aEI && aEI.u9(), (aEI = new u3(aEQ)).s1(aEK, aEJ.length), aEI.show(aEJ[aEK]), bn.message.resize())
	}

	function aEP() {
		aEI && aEI.u9(), (aEI = new uA(aEO)).s1(aEJ.length), aEI.show(), bn.message.resize()
	}
	this.aED = function(aDG) {
		var qR;
		2 === aDG.id && 3 === aDG.aDI ? bn.kx.aDR(aDG.sl) : (qR = bn.kx.rk(aDG, bn.kx.rl(aDG)), (5 !== aDG.id && 6 !== aDG.id || (t.a4y(29).aEN().rn(qR), 5 === aDG.id)) && (qR = bf.eM < aEL + 2e4, aEK !== aEJ.length - 1 && qR || (aEK = aEJ
			.length), aEJ.push(aDG), bj.eK.data[14].value || bp.play(), aEI) && (bj.eK.data[13].value || aEM && qR ? aEI.s1(aEJ.length) : aEO()))
	}, this.show = function() {
		aEP()
	}, this.rq = function() {
		aEK = aEJ.length - 1, aEI && aEI.u9(), aEI = null
	}, this.resize = function() {
		aEI && aEI.resize()
	}, this.aDT = function() {
		return aEJ
	}
}

function aCZ() {
	var aER = null,
		aES = null,
		aET = 0,
		aEU = 0,
		aEV = null;

	function aEX() {
		0 !== aES.u0 && (bn.uF.rq(), t.u(8, 29, new so(25, {
			sp: 0,
			sl: bF.sq.zD(aES.sl, 5),
			sm: 0
		}, 29)))
	}

	function aEY() {
		var eu = aER.eu,
			ew = aER.ew;
		bn.uF.rq(), aER = new uB([new w("Kick User", function() {
			aEe(0, 0)
		}, aEh(0, 0)), new w("Block Chat", aEf, aEh(1, 0)), new w("Censor Username", aEg, aEh(2, 0))]), aEd(eu, ew), aET = 2, aEU = 1
	}

	function aEh(id, e8) {
		var e7, aCi;
		return !bn.aCS || bn.kx.u1(aES) || (e7 = aES.a3g) <= (aCi = bn.aCS.aCi) || 1 - bo.e6(id, aCi, e8) ? 1 : 4 === aES.u0 ? 50 <= e7 ? +(e7 <= aCi) : 20 <= e7 ? +(e7 / 2 <= aCi) : +(e7 / 3 <= aCi) : 0
	}

	function aEb() {
		return !bn.aCS || bn.kx.u1(aES) ? 1 : 0
	}

	function aEa() {
		var eu = aER.eu,
			ew = aER.ew,
			aEi = (bn.uF.rq(), aEb());
		aER = new uB([new w(bo.e5[5][0], function() {
			aEe(5, 0)
		}, aEi), new w(bo.e5[5][1], function() {
			aEe(5, 1)
		}, aEi), new w(bo.e5[5][2], function() {
			aEe(5, 2)
		}, aEi), new w(aES.aCi < 100 ? "Stealth Report" : bo.e5[5][3], function() {
			aEe(5, 3)
		}, aEi)]), aEd(eu, ew), aEU = aET = 2
	}

	function aEc() {
		29 === t.sn && t.a4x().aCT(bF.sq.zD(aES.sl, 5))
	}

	function aEe(id, value) {
		b0.aEB.aEC(5, {
			id: id,
			value: value,
			sl: aES.sl
		})
	}

	function aEf() {
		var eu = aER.eu,
			ew = aER.ew;
		bn.uF.rq(), aER = new uB([new w(bo.e5[1][0], function() {
			aEe(1, 0)
		}, aEh(1, 0)), new w(bo.e5[1][1], function() {
			aEe(1, 1)
		}, aEh(1, 1)), new w(bo.e5[1][2], function() {
			aEe(1, 2)
		}, aEh(1, 2)), new w(bo.e5[1][3], function() {
			aEe(1, 3)
		}, aEh(1, 3)), new w(bo.e5[1][4], function() {
			aEe(1, 4)
		}, aEh(1, 4))]), aEd(eu, ew), aET = 3, aEU = 1
	}

	function aEg() {
		var eu = aER.eu,
			ew = aER.ew;
		bn.uF.rq(), aER = new uB([new w(bo.e5[2][0], function() {
			aEe(2, 0)
		}, aEh(2, 0)), new w(bo.e5[2][1], function() {
			aEe(2, 1)
		}, aEh(2, 1)), new w(bo.e5[2][2], function() {
			aEe(2, 2)
		}, aEh(2, 2))]), aEd(eu, ew), aET = 3, aEU = 2
	}

	function aEd(eu, ew, uH) {
		aER.show(eu, ew, uH), bn.tr.show(aER.eu, aER.ew, aES, 1)
	}
	this.aEW = function(e, qR) {
		aET = 1, aES = qR, aER = new uB([new w(L(127), aEX, 0 === aES.u0 ? 1 : 0), new w(L(128), aEY, function() {
			if (!bn.aCS) return 1;
			if (bn.kx.u1(aES)) return 1;
			if (100 <= bn.aCS.aCi) return 1;
			if (bn.aCS.aCi >= aES.a3g) return 1;
			return 0
		}()), new w(L(129, 0, "🚩 Report"), aEa, aEb()), new w(L(130), aEc, 0)]), aEd((aEV = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aEV.clientY, 1)
	}, this.a21 = function(code) {
		if (29 !== t.sn) return !1;
		if (!aES) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.rq();
			else if (bA.rY.startsWith(code, "Numpad") || bA.rY.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aET) this.aEW(aEV, aES);
				else {
					if (!aER) return !1;
					1 === aET ? code <= 1 ? aEX() : 2 === code ? aEY() : 3 === code ? aEa() : (aEc(), this.rq()) : 2 === aET ? 1 === aEU ? code <= 1 ? (aEe(0, 0), this.rq()) : (2 === code ? aEf : aEg)() : (aEe(5, bL.hv(code - 1, 0, 3)), this
					.rq()) : (aEe(aEU, bL.hv(code - 1, 0, bo.e5[aEU].length - 1)), this.rq())
				}
		}
		return !0
	}, this.rq = function() {
		aET = 0, aER && aER.rq(), aER = null, bn.tr.rq()
	}
}

function aDh() {
	this.te = 0, this.eT = 0, this.mapSeed = 0, this.aD3 = 0, this.aEl = 0, this.aEm = 0, this.aD9 = 0, this.aDr = 0, this.spawningSeed = 0, this.a1C = 0, this.aD7 = 0, this.rg = [], this.rh = 1048575, this.aDq = 0, this.aEn = [{
		eT: 0,
		mapSeed: 0,
		aD3: 0,
		eM: 100,
		aD9: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aD3: 1,
		eM: 200,
		aD9: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aD3: 2,
		eM: 300,
		aD9: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aD3: 3,
		eM: 400,
		aD9: 0
	}, {
		eT: 0,
		mapSeed: 0,
		aD3: 9,
		eM: 500,
		aD9: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aD3: 10,
		eM: 600,
		aD9: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aD3: 8,
		eM: 700,
		aD9: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aD3: 3,
		eM: 800,
		aD9: 0
	}]
}

function aCd() {
	var aEo = [],
		t0 = [],
		aEp = [];

	function aEr(qR) {
		for (var r = qR.r, aEq = [];;) {
			var f8 = function aEt(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qG = r.substring(position + 1, position + 6);
				if (5 !== qG.length) return aEt(r, position + 1);
				if (bA.rY.startsWith(qG, "room")) return aEt(r, position + 1);
				var aF0 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aF0.test(qG)) return aEt(r, position + 1);
				aF0 = r.substring(position + 6, position + 7);
				if (1 !== aF0.length) return position;
				qG = new RegExp("^[ :!.]+$");
				if (!qG.test(aF0)) return aEt(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f8) {
				aEq.push(aEu(r, qR));
				break
			}
			0 === f8 ? aEq.push(aEv(r.substring(1, 6), qR, f8)) : (aEq.push(aEu(r.substring(0, f8), qR)), aEq.push(aEv(r.substring(f8 + 1, f8 + 6), qR, f8))), r = r.substring(f8 + 6)
		}
		return aEq
	}

	function aEv(qG, qR, f8) {
		var aEw = function(qG) {
				var sl = bG.sq.wB(qG),
					aEw = bn.tt.aD1(sl);
				if (aEw) {
					for (aEo.push(aEw); 75 < aEo.length;) aEo.shift();
					return aEw
				}
				for (var aCf = bn.tt.aCf, aB = aCf.length - 1; 0 <= aB; aB--)
					if (aEw = aCf[aB], sl === aEw.sl) return aEo.push(aEw), aEw;
				for (aB = aEo.length - 1; 0 <= aB; aB--)
					if (aEw = aEo[aB], sl === aEw.sl) return aEo.push(aEw), aEw;
				return bn.tt.aCk(sl, qG, 1, 999999, 999999, 0, 0, 0, 0)
			}(qG),
			qG = (0 === f8 && 0 === qR.aDG.id && qR.ro && (qR.fontSize = bn.kx.aDL(aEw.u0, aEw.a3g), qR.aDJ = bn.kx.aDM(aEw.a3g)), document.createElement("span"));
		return qG.textContent = function(aEw, qR, f8) {
			if (aEw.aCs) return aEw.aCs--, f8 = 2 === qR.aDG.id || (3 === qR.aDG.id || 4 === qR.aDG.id) && 0 !== f8, aEw.username + (f8 ? " (" + aEw.aCr + ")" : "");
			if (qR.aDG.aDV) return "Redacted " + bF.sq.zD(aEw.sl, 2);
			return aEw.username
		}(aEw, qR, f8), qG.style.display = "inline-block", qG.style.color = bn.kx.tz(aEw.u0), qG.style.cursor = "pointer", qG.style.margin = "0", qG.style.font = "inherit", qG.style.minWidth = qG.style.minHeight = "1em", bn.kx.u1(aEw) && (qG
			.style.textDecoration = "underline"), bn.kx.aDM(aEw.a3g) && (qG.style.fontWeight = "bold"), qG.onclick = function(e) {
			bn.uF.aEW(e, aEw)
		}, bJ.r1() || (qG.onmouseover = function(e) {
			bn.tr.u2(e, aEw)
		}), t0.push(qG), qG
	}

	function aEu(r, qR) {
		var rX = document.createElement("span");
		return rX.textContent = r, rX.style.color = qR.aDK, rX.style.margin = "0", rX.style.font = "inherit", rX
	}

	function aF5(aEw, aCq, sl) {
		sl !== aEw.sl || aEw.aCr || (aEw.aCr = aEw.username, aEw.aCs = 3, aEw.username = aCq)
	}
	this.u9 = function() {
		for (var aB = 0; aB < t0.length; aB++) t0[aB].onclick = t0[aB].onmouseover = null;
		aEp = t0 = null
	}, this.transform = function(qR) {
		for (var qE = document.createElement("div"), aEq = aEr(qR), aB = 0; aB < aEq.length; aB++) qE.appendChild(aEq[aB]);
		0 === qR.aDG.id && (qE.vx143 = qR.aDG, aEp.push(qE)), qE.style.margin = "0.6em 0.6em", qR.ro && (qE.style.marginLeft = qE.style.marginRight = "inherit"), qE.style.font = "inherit";
		var aEs = 0 < qR.aDG.id;
		return qR.aDJ && (qE.style.fontWeight = "bold"), aEs && (qE.style.paddingLeft = "0.7em"), aEs && (qE.style.fontStyle = "italic"), qE.style.fontSize = qR.fontSize.toFixed(2) + "em", qE
	}, this.aF3 = function(aF4) {
		if (aF4 && (2 === aF4.id && 1 === aF4.aDI || 3 === aF4.id && 2 === aF4.aDI)) {
			var sl = 3 === aF4.id ? aF4.target : aF4.sl;
			if (!bn.tt.aD1(sl)) {
				for (var aCq = "Redacted " + bF.sq.zD(sl, 2), aCf = bn.tt.aCf, aB = aCf.length - 1; 0 <= aB; aB--) aF5(aCf[aB], aCq, sl);
				for (aB = aEo.length - 1; 0 <= aB; aB--) aF5(aEo[aB], aCq, sl)
			}
		}
	}, this.aDR = function(sl) {
		for (var aF6 = aEp, aB = aF6.length - 1; 0 <= aB; aB--) {
			var eq = aF6[aB];
			if (eq.vx143.sl === sl) {
				for (; eq.firstChild;) eq.removeChild(eq.firstChild);
				eq.vx143.r = "[Redacted Message]";
				for (var aEq = aEr(bn.kx.rk(eq.vx143, bn.kx.rl(eq.vx143))), f6 = 0; f6 < aEq.length; f6++) eq.appendChild(aEq[f6]);
				aF6.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aF7, aF8, aF9;

	function aFE(aB) {
		var button = aY.r8[aB],
			eu = button.eu,
			ew = button.ew,
			i = button.i,
			j = button.j;
		ug.fillStyle = button.aFC, ug.fillRect(eu, ew, i, j), aB === aF7 && (ug.fillStyle = aF9, ug.fillRect(eu, ew, i, j)), ug.lineWidth = bc.yu, ug.strokeStyle = aF8, ug.strokeRect(eu, ew, i, j),
			function(button) {
				var eu = button.eu,
					ew = button.ew,
					i = button.i,
					j = button.j;
				bA.qZ.textAlign(ug, 1), bA.qZ.textBaseline(ug, 1), ug.font = button.font, ug.fillStyle = aF8, ug.fillText(button.a6p, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ew = 0, this.gap = 0, this.dd = function() {
		aF7 = -1, aF8 = bB.ni, aF9 = "rgba(255,255,255,0.16)", this.r8 = new Array(7), this.j = Math.floor((a0.a1.hw() ? .123 : .093) * h.hx), this.i = Math.floor((a0.a1.hw() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aFA = Math.floor(.26 * this.j),
			aFB = bA.qZ.sN(1, aFA);
		this.r8[0] = {
			eu: 0,
			ew: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a6p: "Multiplayer",
			font: aFB,
			aFC: "rgba(22,88,22,0.8)",
			fontSize: aFA
		}, aFA = Math.floor(.18 * this.j), aFB = bA.qZ.sN(1, aFA), this.r8[1] = {
			eu: 0,
			ew: 0,
			i: this.i - this.r8[0].i - this.gap,
			j: this.j,
			a6p: "Single Player",
			font: aFB,
			aFC: "rgba(22,88,88,0.8)",
			fontSize: aFA
		}, this.r8[2] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6p: "",
			font: this.r8[1].font,
			aFC: "rgba(100,0,0,0.8)",
			fontSize: this.r8[1].fontSize
		}, this.r8[3] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: this.j,
			a6p: "Back",
			font: this.r8[0].font,
			aFC: "rgba(0,0,0,0.8)",
			fontSize: this.r8[0].fontSize
		}, this.r8[4] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6p: "The game was updated!",
			font: this.r8[1].font,
			aFC: "rgba(100,0,0,0.8)",
			fontSize: this.r8[1].fontSize
		}, this.r8[5] = {
			eu: 0,
			ew: 0,
			i: this.r8[0].i,
			j: Math.floor(.8 * this.j),
			a6p: "Reload",
			font: this.r8[0].font,
			aFC: "rgba(0,100,0,0.8)",
			fontSize: this.r8[0].fontSize
		}, this.r8[6] = {
			eu: 0,
			ew: 0,
			i: this.r8[1].i,
			j: this.r8[5].j,
			a6p: "Back",
			font: this.r8[0].font,
			aFC: "rgba(0,0,0,0.8)",
			fontSize: this.r8[0].fontSize
		}, this.a9N()
	}, this.a9N = function() {
		this.ew = Math.floor(.54 * h.j), this.r8[0].eu = Math.floor(.5 * h.i - .5 * this.i), this.r8[1].eu = this.r8[0].eu + this.r8[0].i + this.gap, this.r8[2].eu = this.r8[3].eu = this.r8[0].eu, this.r8[4].eu = this.r8[5].eu = this.r8[0].eu,
			this.r8[6].eu = this.r8[1].eu, this.r8[0].ew = Math.floor(.54 * h.j), this.r8[1].ew = this.r8[0].ew, this.r8[2].ew = Math.floor((h.j - this.r8[2].j - this.r8[3].j - this.gap) / 2), this.r8[3].ew = this.r8[2].ew + this.r8[2].j + this
			.gap, this.r8[4].ew = Math.floor((h.j - this.r8[4].j - this.r8[5].j - this.gap) / 2), this.r8[5].ew = this.r8[6].ew = this.r8[4].ew + this.r8[4].j + this.gap
	}, this.aFD = function() {
		aFE(0), aFE(1)
	}, this.aFF = function() {
		aFE(2), aFE(3)
	}, this.aFG = function() {
		aFE(4), aFE(5), aFE(6)
	}, this.a1Q = function(eu, ew, mU) {
		var aB = -1;
		return 0 === aa.a17() ? aB = this.a1x(eu, ew, 0, 2) : 3 === aa.a17() ? aB = this.a1x(eu, ew, 3, 1) : 5 === aa.a17() && (aB = this.a1x(eu, ew, 5, 2)), aF7 !== aB && (aF7 = aB, mU) && (bf.dl = !0), -1 !== aB && (aT.ra(), !0)
	}, this.a1x = function(eu, ew, aFH, size) {
		for (var aB = aFH; aB < aFH + size; aB++)
			if (eu >= this.r8[aB].eu && ew >= this.r8[aB].ew && eu <= this.r8[aB].eu + this.r8[aB].i && ew <= this.r8[aB].ew + this.r8[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aFJ, aFK, a70, aFL, aFM, aFN, aFO, aFP, aFQ, a6z, aFR, aFS, aFT, aFU = 1;

	function aFW(aFX) {
		!aFX && 1 === aFT && aFU ? (aFU = 0, b0.y.close(aFT, 3280)) : aFT = (aFT + 1) % b0.y.aFY, aFS = bf.eM, b0.y.aFZ(aFT, 4) && b0.aEB.aFa(aFT)
	}

	function aFb() {
		if (0 !== aFT) return 1 === aFT && __fx.customLobby.isActive() ? (o.a1F(3249), __fx.customLobby.setActive(!1)) : void aFW();
		o.a1F(3249)
	}

	function aFg(ew, a95, te) {
		var n8 = Math.floor((h.i - aFL) / 2) + aFO,
			nL = n8 + Math.floor(te * (aFL - 2 * aFO));
		ug.lineWidth = a95, ug.beginPath(), ug.moveTo(n8, ew), ug.lineTo(nL, ew), ug.lineTo(Math.floor(n8 - aFO + te * aFL), ew + a70), ug.lineTo(n8 - aFO, ew + a70), ug.closePath()
	}
	this.aFV = 1, this.dd = function() {
		aa.setState(6), aFJ = 0, aFK = 1, aFP = "rgba(0,220,120,0.4)", aFQ = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aFU = 1, aFT = this.aFV - 1, aFW(1)
	}, this.resize = function() {
		aFL = Math.floor((a0.a1.hw() ? .5 : .25) * h.hx), aFM = aFL + 12, a70 = Math.floor(.125 * aFL), aFO = 3 * a70, aFN = Math.floor(.225 * aFL), aFR = Math.floor(.3 * a70), a6z = bA.qZ.sN(0, aFR)
	}, this.a1B = function(a12) {
		a12 === aFT && aFb()
	}, this.h0 = function(eu, ew) {
		var n8 = Math.floor((h.i - aFM) / 2),
			n9 = Math.floor(.5 * (h.j - bc.gap - a70 - aFN)) + a70 + bc.gap;
		return n8 < eu && eu < n8 + aFM && n9 < ew && ew < n9 + aFN && (this.a28(), aY.a1Q(eu, ew, !1), !0)
	}, this.a28 = function() {
		b0.y.a1G(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.j3 = function() {
		6 === aa.a17() && (bf.eM > aFS + 12e3 && aFb(), 100 < (aFJ += .07 * aFK * (aFJ < 16 ? 5 + aFJ : 84 < aFJ ? 105 - aFJ : 17)) ? (aFJ = 100, aFK = -1) : aFJ < 0 && (aFJ = 0, aFK = 1), aFP = "rgba(0," + Math.floor(190 - 1.9 * aFJ) + "," +
			Math.floor(120 - 1.2 * aFJ) + "," + (.4 + .004 * aFJ) + ")", aFQ = "rgba(0," + Math.floor(1.9 * aFJ) + "," + Math.floor(1.2 * aFJ) + "," + (.8 - .004 * aFJ) + ")", bf.dl = !0)
	}, this.uf = function() {
		var eu = Math.floor((h.i - aFM) / 2),
			ew = Math.floor(.5 * (h.j - bc.gap - a70 - aFN));
		! function(title, ew, a95, te) {
			ug.fillStyle = aFQ, aFg(ew, a95, 1), ug.fill(), ug.fillStyle = aFP, aFg(ew, a95, te), ug.fill(), ug.strokeStyle = bB.ni, aFg(ew, a95, 1), ug.stroke(),
				function(aFi, ew) {
					bA.qZ.textAlign(ug, 1), bA.qZ.textBaseline(ug, 1), ug.font = a6z, ug.fillStyle = bB.ni, ug.fillText(aFi, Math.floor(.5 * h.i), Math.floor(ew + .58 * a70))
				}(title, ew)
		}(L(131), ew, 3, aFJ / 100),
		function(eu, ew, i, j, a6p) {
			ug.fillStyle = bB.nd, ug.fillRect(eu, ew, i, j), ug.lineWidth = 3, ug.strokeStyle = bB.ni, ug.strokeRect(eu, ew, i, j);
			var en = Math.floor(.3 * j);
			bA.qZ.textAlign(ug, 1), bA.qZ.textBaseline(ug, 1), ug.font = bA.qZ.sN(0, en), ug.fillStyle = bB.ni, ug.fillText(a6p, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * en))
		}(eu, ew + a70 + bc.gap, aFM, aFN, L(37))
	}
}

function cR() {
	var a0y = 0;
	this.dd = function() {
		aY.dd(), a0y = 0
	}, this.setState = function(aFj) {
		a0y = aFj
	}, this.a17 = function() {
		return a0y
	}, this.aFk = function() {
		this.setState(8), t.x()
	}, this.a21 = function(e) {
		if (!bS.wR) return !1;
		if (!(bf.eM < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aFl()) return !0;
				if ("Enter" === e.key) {
					if (0 === a0y) return !0;
					if (7 === a0y) return !0
				}
			}
			return !1
		}
	}, this.aFm = function() {
		bZ.resize()
	}, this.aFl = function() {
		return !!bZ.rq()
	}, this.h0 = function(eu, ew) {
		!bS.wR || bZ.h0(eu, ew) || 6 === a0y && aZ.h0(eu, ew) || bY.h0(eu, ew) || aT.h0(eu, ew)
	}, this.a1Q = function(eu, ew) {
		!aT.a9G && aY.a1Q(eu, ew, !0) || aT.a1Q(eu, ew)
	}, this.click = function(eu, ew) {
		aT.a1s()
	}, this.a1T = function(eu, ew, deltaY) {}, this.aFn = function() {
		aY.a9N(), bf.dl = !0
	}, this.uf = function() {
		8 !== a0y && 10 !== a0y && (ug.imageSmoothingEnabled = !0, this.y0(), 0 !== a0y && (aT.uf(), aO.uf(), this.aFo(), bY.uf()), 0 !== a0y && 6 === a0y && aZ.uf(), bZ.uf(), t.uf())
	}, this.y0 = function() {
		var aFq, aFp;
		if (__fx.makeMainMenuTransparent) ug.clearRect(0, 0, h.i, h.j);
		else bS.wR ? (aFp = h.i / bS.ey, aFq = h.j / bS.ez, ug.setTransform(aFp = aFq < aFp ? aFp : aFq, 0, 0, aFp, Math.floor((h.i - aFp * bS.ey) / 2), Math.floor((h.j - aFp * bS.ez) / 2)), ug.drawImage(bS.wT, 0, 0), ug.setTransform(1, 0, 0, 1,
			0, 0), ug.fillStyle = bB.nd) : ug.fillStyle = bB.nZ, ug.fillRect(0, 0, h.i, h.j)
	}, this.aFo = function() {
		var ew = Math.floor(.3 * h.j),
			canvas = ab.aFr("territorial.io"),
			ho = (ho = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : ho,
			eu = (ug.globalAlpha = .15, ug.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - ho * canvas.width))),
			eu = Math.floor(eu / ho),
			ew = Math.floor(ew - .5 * canvas.height * ho),
			ew = Math.floor(ew / ho);
		ug.setTransform(ho, 0, 0, ho, eu, ew), ug.drawImage(canvas, eu, ew), ug.setTransform(1, 0, 0, 1, 0, 0), ug.globalAlpha = 1, ug.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aD7 = 0;
	var aFt, aFu, aFv, aFw, aFx, aFy = this.aFs = 0;

	function aG1() {
		aFw = aFx = null, aFy = 0
	}
	this.dd = function(re, aD4, aD5) {
		t.x(), bn.u9(), aa.setState(10), aFw = re, aFx = aD4, aFy = aD5, this.aD7 = re.aD7, this.aFs = aD5, aFt = 0, aFu = bf.eM + 4500, b0.y.a1C = re.a1C, b0.y.a15 === re.a1C ? (console.log("direct pass"), aFv = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a15, 3247), aFv = 2, b0.y.aFZ(re.a1C, 5) && b0.p3.aFz()), ug.imageSmoothingEnabled = !0, aa.y0();
		aD4 = ab.aFr("loading"), aD5 = (a0.a1.hw() ? .396 : .25) * h.hx / aD4.width;
		ug.setTransform(aD5, 0, 0, aD5, Math.floor((h.i - aD5 * aD4.width) / 2), Math.floor((h.j - aD5 * aD4.height) / 2)), ug.imageSmoothingEnabled = !1, ug.drawImage(aD4, 0, 0), ug.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mS = function() {
		0 < aFv && bf.eM > aFu && (aFv--, aFu += 4500, 0 === bf.aG2) && 0 === bf.k7() && b0.y.aFZ(b0.y.a1C, 5)
	}, this.aG3 = function() {
		return 10 === aa.a17() && (bn.aCU.aD8(aFw, aFx, aFy), aG1(), !0)
	}, this.aG4 = function() {
		10 === aa.a17() && 2 <= ++aFt && (bn.aCU.aD8(aFw, aFx, aFy), aG1())
	}
}

function cS() {
	var aG6, canvas, a0H, aG7;

	function aGD(e8, name, aGE, qG) {
		a0H[e8] = name, canvas[e8] = new Image, canvas[e8].onload = function() {
			! function(e8, aGE) {
				var a3l, a3m = null;
				7 === aGE ? a3l = bA.a2E.a3o : 8 === aGE ? (a3l = bA.a2E.a3r, a3m = .1) : 3 === aGE ? (a3l = bA.a2E.a3p, a3m = .06) : 5 === aGE ? a3l = bA.a2E.a3s : 6 === aGE ? a3l = bA.a2E.a3n : 4 === aGE && (a3l = bA.a2E.a3t);
				canvas[e8] = bA.a2E.a3k(canvas[e8], a3l, a3m)
			}(e8, aGE), aGG()
		}, canvas[e8].onerror = function(e) {
			console.error("Error loading image at index", e8, "Error:", e), aGG()
		}, canvas[e8].src = "data:image/png;base64," + qG
	}

	function aGG() {
		aG6--, aGA()
	}

	function aGA() {
		0 === aG6 && (aG6 = -1, aGC(), bf.dl = !0, canvas[7] = aG7, canvas[8] = aG7, canvas[9] = aG7, canvas[10] = aG7, 5 === t.sn) && t.a4x().aGI.resize()
	}

	function aGC() {
		aL.a59(), bY.aCL([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wW = new yR, aj.wW.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aG6 = 23, canvas = new Array(aG6), a0H = new Array(aG6), (aG7 = document.createElement("canvas")).width = 1;
			for (var aB = aG6 - (aG7.height = 1); 0 <= aB; aB--) canvas[aB] = aG7;
			aGC(), aGD(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGD(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGD(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGD(3, "orders", 6,
					"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"
					), aGD(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGD(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGD(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGD(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGD(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), aGD(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGD(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGD(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGD(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGD(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGD(14, "bestPlayer", 5,
					"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"
					), aGD(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGD(16, "apple", 3,
					"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"
					), aGD(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGD(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGD(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGD(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGD(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGD(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e8) {
		return canvas[e8]
	}, this.aFr = function(name) {
		for (var aB = a0H.length - 1; 0 <= aB; aB--)
			if (a0H[aB] === name) return canvas[aB];
		return aG7
	}, this.tF = function() {
		return aG6 <= 0
	}, this.aG9 = function() {
		aG6 = 0, aGA()
	}
}

function cT() {
	var aGL, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, aGT, aGU, aGJ = [
			[100, 100, 100],
			[144, 0, 0],
			[0, 128, 0],
			[0, 0, 144],
			[128, 128, 0],
			[128, 0, 128],
			[0, 128, 128],
			[196, 196, 196],
			[0, 0, 0]
		],
		aGK = [
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

	function aGa(jR, nQ) {
		for (var aB = jR; aB < nQ; aB++) aGL[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGM[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGN[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aGZ(jR, nQ) {
		for (var colorsData = aD.data.colorsData, aB = jR; aB < nQ; aB++) {
			var fF = colorsData[aB];
			aGL[aB] = 4 * (fF >> 12), aGM[aB] = 4 * (fF >> 6 & 63), aGN[aB] = 4 * (63 & fF)
		}
	}

	function aGl(eR, aGn) {
		aBi[eR] = 0, aBi[eR + 1] = 0, aBi[eR + 2] = aGn, aBi[eR + 3] = 0, aGo(eR)
	}

	function aGo(eR) {
		var eu;
		bb.nY || (eu = ac.y1(eR), eR = ac.y2(eR), bb.nY = eu >= ba.aBh[0] && eu <= ba.aBh[2] && eR >= ba.aBh[1] && eR <= ba.aBh[3])
	}
	this.ep = new Int32Array(4), this.de = function() {
		var ep = this.ep;
		ep[0] = -4 * bS.ey, ep[1] = 4, ep[2] = -ep[0], ep[3] = -ep[1]
	}, this.dd = function() {
		if (aGL = new Uint8Array(aD.ek), aGM = new Uint8Array(aD.ek), aGN = new Uint8Array(aD.ek), aGO = new Uint8Array(aD.ek), aGP = new Uint8Array(aD.ek), aGQ = new Uint8Array(aD.ek), aGR = new Uint8Array(aD.ek), aGS = new Uint8Array(aD.ek),
			aGT = new Uint8Array(aD.ek), aGU = new Uint8Array(aD.ek), this.a8E = new Uint8Array(aD.ek), aD.hh)
			for (var aAN = bg.aAN, aB = aD.ek - 1; 0 <= aB; aB--) {
				var f8 = aAN[aB],
					l3 = bL.du((aGK[f8][3] + 1) * ay.random(), ay.value(100));
				aGL[aB] = aGJ[f8][0] + l3 * aGK[f8][0], aGM[aB] = aGJ[f8][1] + l3 * aGK[f8][1], aGN[aB] = aGJ[f8][2] + l3 * aGK[f8][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aGZ(0, aD.kA), aGa(aD.kA, aD.ek)) : aGa(0, aD.ek) : aGZ(0, aD.ek);
		! function() {
			var aB, eq;
			for (aB = aD.ek - 1; 0 <= aB; aB--) eq = bL.du(aGL[aB] + aGM[aB] + aGN[aB], 3), aGL[aB] += aGg(eq - aGL[aB], 2), aGM[aB] += aGg(eq - aGM[aB], 2), aGN[aB] += aGg(eq - aGN[aB], 2), aGL[aB] -= aGL[aB] % 4, aGM[aB] -= aGM[aB] % 4, aGN[
				aB] -= aGN[aB] % 4
		}(),
		function() {
			for (var aB = aD.ek - 1; 0 <= aB; aB--) aGL[aB] += bL.du(aB, 128), aGM[aB] += bL.du(aB % 128, 32), aGN[aB] += bL.du(aB % 32, 8), aGO[aB] = aB % 8
		}(), this.aGd(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGP[aB] = aGL[aB] < 32 ? aGL[aB] + 32 : aGL[aB] - 32, aGQ[aB] = aGM[aB] < 32 ? aGM[aB] + 32 : aGM[aB] - 32, aGR[aB] = aGN[aB] < 32 ? aGN[aB] + 32 : aGN[aB] - 32
			}(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGS[aB] = 235 < aGL[aB] ? aGL[aB] - 20 : aGL[aB] + 20, aGT[aB] = 235 < aGM[aB] ? aGM[aB] - 20 : aGM[aB] + 20, aGU[aB] = 235 < aGN[aB] ? aGN[aB] - 20 : aGN[aB] + 20
			}()
	}, this.a77 = function(player) {
		var g = bO.fM;
		return g[0] = aGL[player], g[1] = aGM[player], g[2] = aGN[player], g
	}, this.aGd = function() {
		for (var aB = aD.ek - 1; 0 <= aB; aB--) this.a8E[aB] = aGL[aB] + aGM[aB] + aGN[aB] < 280 ? 0 : 1
	}, this.y1 = function(eR) {
		return bL.du(eR, 4) % bS.ey
	}, this.y2 = function(eR) {
		return bL.du(eR, 4 * bS.ey)
	}, this.xZ = function(eu, ew) {
		return Math.floor(4 * (ew * bS.ey + eu))
	}, this.xp = function(eR) {
		var ep = this.ep;
		return this.aGh(eR + ep[0]) || this.aGh(eR + ep[1]) || this.aGh(eR + ep[2]) || this.aGh(eR + ep[3])
	}, this.fC = function(eR) {
		var ep = this.ep;
		return this.es(eR + ep[0]) || this.es(eR + ep[1]) || this.es(eR + ep[2]) || this.es(eR + ep[3])
	}, this.xn = function(eR, player) {
		var ep = this.ep;
		return this.aGi(eR + ep[0], player) || this.aGi(eR + ep[1], player) || this.aGi(eR + ep[2], player) || this.aGi(eR + ep[3], player)
	}, this.gN = function(eR) {
		return 208 <= aBi[eR + 3]
	}, this.xv = function(player, eR) {
		return this.gN(eR) && this.xy(player, eR)
	}, this.xy = function(player, eR) {
		return player === this.ef(eR)
	}, this.aGj = function(eR) {
		return 208 <= aBi[eR + 3] && aBi[eR + 3] < 224
	}, this.jM = function(eR) {
		return 224 <= aBi[eR + 3] && aBi[eR + 3] < 248
	}, this.xo = function(eR) {
		for (var ep = this.ep, aB = 3; 0 <= aB; aB--)
			if (this.i1(eR + ep[aB])) return !0;
		return !1
	}, this.ei = function(eR) {
		return this.gN(eR) || this.ee(eR)
	}, this.i1 = function(eR) {
		return 0 === aBi[eR + 3] && 2 === aBi[eR + 2]
	}, this.ee = function(eR) {
		return 0 === aBi[eR + 3] && 1 === aBi[eR + 2]
	}, this.we = function(eR) {
		return 0 === aBi[eR + 3] && 3 === aBi[eR + 2]
	}, this.es = function(eR) {
		return 0 === aBi[eR + 3] && 5 === aBi[eR + 2]
	}, this.aGh = function(eR) {
		return 0 === aBi[eR + 3] && 3 <= aBi[eR + 2]
	}, this.eV = function(eR) {
		return (aBi[eR] >> 1 << 8) + aBi[eR + 1]
	}, this.aGk = function(eR) {
		return 1 & aBi[eR]
	}, this.aGi = function(eR, player) {
		return this.ee(eR) || this.gN(eR) && player !== this.ef(eR)
	}, this.ef = function(eR) {
		return aBi[eR] % 4 * 128 + aBi[eR + 1] % 4 * 32 + aBi[eR + 2] % 4 * 8 + aBi[eR + 3] % 8
	}, this.xw = function(eR) {
		aGl(eR, 1)
	}, this.aGm = function(eR) {
		aGl(eR, 2)
	}, this.xa = function(eR, player) {
		aBi[eR] = aGL[player], aBi[eR + 1] = aGM[player], aBi[eR + 2] = aGN[player], aBi[eR + 3] = 208 + aGO[player], aGo(eR)
	}, this.gI = function(eR, player) {
		aBi[eR] = aGP[player], aBi[eR + 1] = aGQ[player], aBi[eR + 2] = aGR[player], aBi[eR + 3] = 224 + aGO[player], aGo(eR)
	}, this.jN = function(eR, player) {
		aBi[eR] = aGS[player], aBi[eR + 1] = aGT[player], aBi[eR + 2] = aGU[player], aBi[eR + 3] = 248 + aGO[player], aGo(eR)
	}
}

function cs() {
	var aGp = 0,
		aGr = new Uint16Array(64);

	function aGt(a5D) {
		aGp -= 2;
		for (var aB = a5D; aB < aGp; aB += 2) aGr[aB] = aGr[aB + 2], aGr[aB + 1] = aGr[aB + 3]
	}
	this.dd = function() {
		aGp = 0
	}, this.j3 = function() {
		var aB, jJ, iN;
		if (0 !== aGp)
			if (0 === ag.mi[aD.eX]) aGp = 0;
			else if (0 === ad.fu(aD.eX)) aGp = 0;
		else
			for (aB = aGp - 2; 0 <= aB; aB -= 2)(jJ = aGr[aB]) < aD.ek && 0 === ag.mi[jJ] ? aGt(aB) : (iN = aGr[aB + 1], (jJ >= aD.ek && bs.aGu(aD.eX) || jJ < aD.ek && bs.aGv(aD.eX, jJ)) && (b8.hD.hK(iN, jJ), aGt(aB)))
	}, this.hL = function(jJ, iN) {
		! function(jJ, iN) {
			for (var aB = 0; aB < aGp; aB += 2)
				if (aGr[aB] === jJ) return aGr[aB + 1] = Math.min(aGr[aB + 1] + iN, 1023), 1;
			return
		}(jJ, iN) && 64 !== aGp && (aGr[aGp] = jJ, aGr[aGp + 1] = iN, aGp += 2)
	}
}

function cU() {
	function aH2(player) {
		var dt;
		bA.g9.a3N(player) && (dt = ag.gp[player] - ag.a3R[player] + ad.aH4(player), bd.gD(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.gp[player] = 0, ag.a3R[player] = 0
	}

	function aHB() {
		aX.show(!1, !1, !1, !0), aW.aAq(), bR.zh.a0R()
	}

	function aGz(player, aHA) {
		for (var aB = aHA.length - 1; 0 <= aB; aB--) ad.aHD(aHA[aB], player)
	}

	function aH1(player) {
		for (var ie = ag.ie, ig = ag.ig, ih = ag.ih, ii = ag.ii, n8 = ie[player], n9 = ih[player], ey = bS.ey, gb = ag.gb, eu = ig[player]; n8 <= eu; eu--)
			for (var ew = ii[player]; n9 <= ew; ew--) {
				var gL = 4 * (ew * ey + eu);
				ac.xv(player, gL) && (ac.xw(gL), gb[player]--)
			}
		ig[player] = ii[player] = 0, ie[player] = ih[player] = Math.max(ey, bS.ez)
	}
	this.dm = function(gL) {
		var player, dt = ag.gb[gL];
		bN.y.pr[gL] ? dt && (aGz(player = gL, ad.aH0(player)), aH1(player), aF.gB(player), ad.clear(player), aH2(player), function(player) {
			ag.xV[player] = 0, ag.gF[player] = [], ag.gT[player] = [], ag.gU[player] = [], ag.fD[player] = []
		}(player)) : !dt && ag.gF[gL].length || this.aGy(gL)
	}, this.aGy = function(player) {
		! function(player) {
			bA.g9.jY(player) || (ag.a0V[player] = bi.a0l.aH9(), aD.zy++);
			var aHA = ad.aH0(player);
			0 === aHA.length ? bA.g9.a3K(player) && aHB() : (aGz(player, aHA), function(player, aHA) {
				var aHF = aHA[function(aHA) {
					var aB, e8 = 0;
					for (aB = aHA.length - 1; 1 <= aB; aB--) ag.gb[aHA[aB]] > ag.gb[aHA[e8]] && (e8 = aB);
					return e8
				}(aHA)];
				9 === aD.kS && (1 === bg.el[player] ? ay.k2(8) && az.aHG(aHF) : aE.hW[player] && (aN.a6c(765, 0), aN.yO(280, L(132, [ag.yP[aHF], ag.yP[player]]), 765, aHF, bB.nZ, bB.or, -1, !0)));
				if (bA.g9.a3K(player)) aHB(), aN.a08(aHF, 1);
				else {
					for (var aB = aHA.length - 1; 0 <= aB; aB--)
						if (bA.g9.a3N(aHA[aB]) && (bd.me[4 - bA.g9.jY(player)]++, bA.g9.a3K(aHA[aB]))) return aN.a08(player, 0);
					bA.g9.jY(player) || aN.a6M(0, player, aHF)
				}
			}(player, aHA))
		}(player), aH1(player), aH2(player),
			function(player) {
				ag.mi[player] = 0, ag.gF[player] = null, ag.gT[player] = null, ag.gU[player] = null, ag.fD[player] = null
			}(player), aF.gB(player), ad.clear(player), bN.aH7.aH8(player)
	}
}

function cx() {
	var input;

	function aHH(e) {
		(e = e.target.files) && 0 < e.length && b6.aHK(e[0])
	}

	function aHO(e) {
		var f8 = new Image;
		f8.onload = aHP, f8.src = e.target.result
	}

	function aHP(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bS.aHR || j > bS.aHR || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bS.aHR + ".", a0.vH ? a0.vH.showToast(e) : alert(e)) : 20 === t.sn && t.a4x().aHP(canvas)
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHH
	}, this.u9 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHI = function() {
		input.click()
	}, this.aHK = function(aHL) {
		var g = aHL.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHO, g.readAsDataURL(aHL))
	}
}

function cv() {
	this.aHT = null, this.dd = function() {
		10 !== aD.kS ? this.aHT = null : this.aHT = new Uint32Array(aD.ek)
	}, this.j3 = function() {
		10 === aD.kS && this.kx()
	}, this.kx = function() {
		for (var gL, target, aB3, aHT = this.aHT, zk = al.kC, a3S = ag.gp, aB = al.kB - 1; 0 <= aB; aB--)(gL = zk[aB]) >= aD.kA || (target = Math.max(bL.du(a3S[gL], 4), 2048), aB3 = Math.max(ae.aB4(gL), 100), aHT[gL] += bL.du(aB3 * target, 1e4),
			aHT[gL] > target && (aHT[gL] = target))
	}, this.a3Y = function(player, hW) {
		return hW > this.aHT[player] ? (hW = this.aHT[player], this.aHT[player] = 0) : this.aHT[player] -= hW, hW
	}
}

function dW() {
	function aHV(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aHd, g.readAsText(e))
	}

	function aHd(e) {
		var aHh;
		aD.zw || (e = JSON.parse(e.target.result), aHh = aD.data = new a4P, aHi(e, aHh, "mapType", 0, 2), aHi(e, aHh, "mapProceduralIndex", 0, 255), aHi(e, aHh, "mapRealisticIndex", 0, 255), aHi(e, aHh, "mapSeed", 0, 16383), function(aHg, aHh, gM,
				max) {
				aHg = aHg[gM];
				aHh[gM] = aHo(aHg) ? aHg.slice(0, max) : aHh[gM]
			}(e, aHh, "mapName", 20), function(aHg, aHh, gM) {
				var aHQ;
				2 === aHh.mapType && (!aHo(aHg = aHg[gM]) || aHg.length <= 20 ? aHh.mapType = 0 : ((aHQ = new Image).onload = function() {
					b9.aHp.aHq(aHQ, 1), aHQ.onload = null, aHQ = null
				}, aHQ.src = aHg))
			}(e, aHh, "canvas"), aHi(e, aHh, "passableWater", 0, 1), aHi(e, aHh, "passableMountains", 0, 1), aHi(e, aHh, "playerCount", 1, 512), aHi(e, aHh, "humanCount", 1, 1), aHi(e, aHh, "selectedPlayer", 0, 0), aHi(e, aHh, "gameMode", 0, 1),
			aHi(e, aHh, "playerMode", 0, 0), aHi(e, aHh, "battleRoyaleMode", 0, 0), aHi(e, aHh, "numberTeams", 0, 8), aHi(e, aHh, "isZombieMode", 0, 0), aHi(e, aHh, "isContest", 0, 0), aHi(e, aHh, "isReplay", 0, 0), aHl(e, aHh, "elo", 16, 2,
				16383), aHi(e, aHh, "colorsType", 0, 1), aHi(e, aHh, "colorsPersonalized", 0, 1), aHl(e, aHh, "colorsData", 32, 512, 262143), aHi(e, aHh, "selectableColor", 0, 1), aHl(e, aHh, "teamPlayerCount", 16, 9, 512), aHi(e, aHh,
				"neutralBots", 0, 1), aHi(e, aHh, "botDifficultyType", 0, 3), aHi(e, aHh, "botDifficultyValue", 0, 15), aHl(e, aHh, "botDifficultyTeam", 8, 9, 15), aHl(e, aHh, "botDifficultyData", 8, 512, 15), aHi(e, aHh, "spawningType", 0, 2),
			aHi(e, aHh, "spawningSeed", 0, 16383), aHl(e, aHh, "spawningData", 16, 1024, 4095), aHi(e, aHh, "selectableSpawn", 0, 1), aHi(e, aHh, "playerNamesType", 0, 2),
			function(aHg, aHh, gM, size, max) {
				var a2Z = aHg[gM];
				if (Array.isArray(a2Z)) {
					for (var a2a = new Array(size), en = Math.min(a2Z.length, size), aB = 0; aB < en; aB++) a2a[aB] = aHo(a2Z[aB]) ? a2Z[aB].slice(0, max) : "";
					aHh[gM] = a2a
				}
			}(e, aHh, "playerNamesData", 512, 20), aHi(e, aHh, "selectableName", 0, 1), aHi(e, aHh, "aIncomeType", 0, 2), aHi(e, aHh, "aIncomeValue", 0, 255), aHl(e, aHh, "aIncomeData", 8, 512, 255), aHi(e, aHh, "tIncomeType", 0, 2), aHi(e, aHh,
				"tIncomeValue", 0, 255), aHl(e, aHh, "tIncomeData", 8, 512, 255), aHi(e, aHh, "iIncomeType", 0, 2), aHi(e, aHh, "iIncomeValue", 0, 255), aHl(e, aHh, "iIncomeData", 8, 512, 255), aHi(e, aHh, "sResourcesType", 0, 2), aHi(e, aHh,
				"sResourcesValue", 0, 2047), aHl(e, aHh, "sResourcesData", 16, 512, 2047), t.x(), t.y.aHf[0] = 0, t.u(19))
	}

	function aHi(aHg, aHh, gM, min, max) {
		aHg = aHg[gM];
		aHh[gM] = "number" == typeof aHg && min <= aHg && aHg <= max ? Math.floor(aHg) : aHh[gM]
	}

	function aHo(qG) {
		return "string" == typeof qG
	}

	function aHl(aHg, aHh, gM, aHr, size, max) {
		var a2Z = aHg[gM];
		if (Array.isArray(a2Z)) {
			for (var a2a = new(8 === aHr ? Uint8Array : 16 === aHr ? Uint16Array : Uint32Array)(size), en = Math.min(a2Z.length, size), aB = 0; aB < en; aB++) a2a[aB] = bL.hv(a2Z[aB], 0, max);
			aHh[gM] = a2a
		}
	}
	this.aHU = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aHV, input.click()
	}, this.aHW = function() {
		for (var aHZ, aCI, a4v = aD.data, keys = Object.keys(a4v), aHX = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a4v[key] instanceof Uint8Array || a4v[key] instanceof Uint16Array || a4v[key] instanceof Uint32Array ? aHX[key] = Array.from(a4v[key]) : aHX[key] = a4v[key]
		}
		aHX.canvas = 2 === aHX.mapType && aHX.canvas ? aHX.canvas.toDataURL() : null, aHZ = aHX, aHZ = JSON.stringify(aHZ, null, 2), aHZ = new Blob([aHZ], {
			type: "application/json"
		}), (aCI = document.createElement("a")).href = URL.createObjectURL(aHZ), aCI.download = "tt_scenario.json", aCI.click()
	}
}

function cY() {
	var aHs, aHt, size, jJ, hW, aHu;

	function aHv(player) {
		return player < aD.kA ? aHs * player : aHs * aD.kA + aHt * (player - aD.kA)
	}
	this.dd = function() {
		aHs = aD.kA < 16 ? 12 : 8, aHt = 4;
		var en = aHv(aD.ek);
		size = new Uint8Array(aD.ek), jJ = new Uint16Array(en), hW = new Uint32Array(en), aHu = new Uint8Array(en)
	}, this.q7 = function(a7j, aHw) {
		var aHx = this.gq(a7j, aHw),
			aHw = (this.go(a7j, aHw, 0), bA.g9.gC(a7j, aHx));
		bd.gD(a7j, aHx - aHw, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aHD = function(player, aHw) {
		var aI0, aHw = function(player, aHw) {
			var aB, l3 = aHv(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jJ[l3 + aB] === aHw) return aB;
			return size[player]
		}(player, aHw);
		aHw !== size[player] && (aI0 = hW[aHv(player) + aHw], this.gE(player, aHw), this.jG(player, aI0, aD.ek))
	}, this.jW = function(player, aHw) {
		for (var l3 = aHv(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHw) return !0;
		return !1
	}, this.jo = function(player) {
		return player < aD.kA ? size[player] < aHs : size[player] < aHt
	}, this.fu = function(player) {
		return size[player]
	}, this.fz = function(player, aB) {
		return jJ[aHv(player) + aB]
	}, this.g0 = function(player, aB) {
		return hW[aHv(player) + aB]
	}, this.gq = function(player, aHw) {
		for (var l3 = aHv(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHw) return hW[l3 + aB];
		return 0
	}, this.aH4 = function(player) {
		for (var l3 = aHv(player), fF = 0, aB = size[player] - 1; 0 <= aB; aB--) fF += hW[l3 + aB];
		return fF
	}, this.go = function(player, aHw, aI0) {
		for (var l3 = aHv(player), aB = size[player] - 1; 0 <= aB; aB--) jJ[l3 + aB] === aHw && (hW[l3 + aB] = aI0)
	}, this.gZ = function(player, aB, aI0) {
		hW[aHv(player) + aB] = Math.max(aI0, 0)
	}, this.ga = function(player, aB) {
		aHu[aHv(player) + aB] = 0
	}, this.g1 = function(player, aB) {
		return aHu[aHv(player) + aB]
	}, this.jG = function(player, aI0, aHw) {
		bA.g9.a3N(aHw) && bd.me[6 - bA.g9.jY(player)]++;
		for (var l3 = aHv(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHw) return hW[l3 + aB] += aI0, void(hW[l3 + aB] = hW[l3 + aB] > aD.a3U ? aD.a3U : hW[l3 + aB]);
		jJ[l3 + size[player]] = aHw, hW[l3 + size[player]] = aI0, aHu[l3 + size[player]] = 1, size[player]++, player < aD.kA && (aHw === aD.eX ? aN.a08(player, 5) : player === aD.eX && af.a6O(aHw))
	}, this.gE = function(player, e8) {
		var f6, l3;
		if (0 !== size[player])
			for (l3 = aHv(player), size[player]--, f6 = e8; f6 < size[player]; f6++) jJ[l3 + f6] = jJ[l3 + f6 + 1], hW[l3 + f6] = hW[l3 + f6 + 1], aHu[l3 + f6] = aHu[l3 + f6 + 1]
	}, this.aH0 = function(player) {
		for (var f6, l3, aHA = [], aB = al.kB - 1; 0 <= aB; aB--)
			for (l3 = aHv(al.kC[aB]), f6 = size[al.kC[aB]] - 1; 0 <= f6; f6--)
				if (jJ[l3 + f6] === player) {
					aHA.push(al.kC[aB]);
					break
				} return aHA
	}
}

function cZ() {
	var aI1;

	function aI3(player) {
		var e7, jp;
		return bA.g9.jY(player) && player < aD.kA ? 0 : (e7 = aI1[bL.du((aD.ek - 1) * ag.gb[player], aD.ju)], bf.k7() < 1920 && (e7 = Math.max(bL.du(100 * (13440 - 6 * bf.k7()), 1920), e7)), jp = ae.jq(player), ag.gp[player] > jp && (e7 -= bL.du(2 *
			e7 * (ag.gp[player] - jp), jp)), Math.min(Math.max(e7, 0), 700))
	}

	function aIF(nK) {
		for (var gb = ag.gb, kC = al.kC, aB = al.kB - 1; 0 <= aB; aB--) {
			var gL = kC[aB];
			bA.g9.gC(gL, bL.du(nK * gb[gL], 32))
		}
	}

	function aIC() {
		var wX = aD.eX;
		bO.fJ[0] = ag.gp[wX] - ag.a3R[wX]
	}

	function aIE(e8) {
		var wX = aD.eX;
		bd.me[e8] += ag.gp[wX] - ag.a3R[wX] - bO.fJ[0]
	}
	this.dk = function() {
		for (var en = aD.ek, aB = (aI1 = new Uint16Array(en), 0); aB < en; aB++) aI1[aB] = 100 + aI2(bL.du(25600 * aB, en - 4), 9)
	}, this.dd = function() {
		0 === aD.data.iIncomeType ? this.aB4 = aI3 : 1 === aD.data.iIncomeType ? this.aB4 = function(player) {
			return bL.du(aD.data.iIncomeValue * aI3(player), 64)
		} : this.aB4 = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aI3(player), 64)
		}
	}, this.j3 = function() {
		if (bf.k7() % 10 == 9 && (function() {
				aIC();
				for (var kC = al.kC, gp = ag.gp, aB = al.kB - 1; 0 <= aB; aB--) {
					var gL = kC[aB],
						aID = bL.du(ae.aB4(gL) * gp[gL], 1e4);
					bA.g9.gC(gL, Math.max(aID, 1))
				}
				aIE(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aIC(), 1 === aD.data.aIncomeType)
						for (var gb = ag.gb, kC = al.kC, nK = aD.data.aIncomeValue, aB = al.kB - 1; 0 <= aB; aB--) {
							var gL = kC[aB];
							bA.g9.gC(gL, bL.du(nK * gb[gL], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gb = ag.gb, kC = al.kC, nK = aD.data.aIncomeData, aB = al.kB - 1; 0 <= aB; aB--) {
								var gL = kC[aB];
								bA.g9.gC(gL, bL.du(nK[gL] * gb[gL], 128))
							}
						}();
					aIE(18)
				}
			}(), bf.k7() % 100 == 99)) {
			if (aIC(), 0 === aD.data.tIncomeType) aIF(32);
			else if (1 === aD.data.tIncomeType) aIF(aD.data.tIncomeValue);
			else
				for (var gb = ag.gb, kC = al.kC, nK = aD.data.tIncomeData, aB = al.kB - 1; 0 <= aB; aB--) {
					var gL = kC[aB];
					bA.g9.gC(gL, bL.du(nK[gL] * gb[gL], 32))
				}
			aIE(8)
		}
	}, this.jq = function(player) {
		return Math.min(100 * ag.gb[player], aD.a4L)
	}, this.p6 = function(player, p7) {
		player === aD.eX || p7 === aD.eX || bA.g9.jY(player) || bA.g9.jY(p7) || bq.yO(ag.yP[player] + " has supported " + ag.yP[p7] + " with " + bO.fK[0] + " ressource" + (1 === bO.fK[0] ? "." : "s.")), bA.g9.gC(p7, bO.fK[0]), bd.pT(player, p7),
			af.aI5(player, bO.fK[0] + bO.fK[1]), af.pU(p7, bO.fK[0]), bA.g9.mJ(player)
	}, this.aI6 = function() {
		for (var en = al.kB, zk = al.kC, l3 = 0, a3S = ag.gp, aB = 0; aB < en; aB++) l3 += a3S[zk[aB]];
		return l3
	}, this.aI7 = function(aI8) {
		for (var gL, en = al.kB, zk = al.kC, l3 = 0, a3S = ag.gp, el = bg.el, aB = 0; aB < en; aB++) el[gL = zk[aB]] === aI8 && (l3 += a3S[gL]);
		return l3
	}
}

function cb() {
	var aIJ, aIK, aIL, aIM, aIN, aIO, aIP, aIQ, aIR, aIS, aIT, aIU, aIV, aIW, aIX, aIY, aIZ, aIa, aIc, aId, aCB, aIe, aIf, aIm, aIn, aIb = null,
		aIh = 0,
		aIi = !1,
		aIj = new Float32Array(4),
		aIk = 0,
		aIl = !0,
		aAC = 400,
		aIo = 0;

	function qc() {
		aIR = Math.floor(+h.hx), aIS = Math.floor(.5 * aIR)
	}

	function aIp() {
		var aB, aIu;
		for (ug.font = bA.qZ.sN(1, 100 * aIT), aIu = 80 / Math.floor(ug.measureText(bA.rY.zD(aD.a3U)).width), ug.font = bA.qZ.sN(1, 100), aB = aD.ek - 1; 0 <= aB; aB--) aIQ[aB] = 100 / Math.floor(ug.measureText(ag.yP[aB]).width), aIP[aB] = Math.min(
			aIu, aIQ[aB])
	}

	function aIv(aB) {
		return !aIo || (aB = ag.gp[aB]) < 1e6 ? 1 : aB < 1e7 ? aIj[0] : aIj[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aIt(hp) {
		aIa = !1, aIZ = 1, aIX = aIY = 0, aIl && (bA.qZ.textAlign(hp, 1), bA.qZ.textBaseline(hp, 1));
		for (var aJ1, aJ2, aB, aJ3, fontSize, aJ4, n8 = iO / hy, n9 = iP / hy, nL = (h.i + iO) / hy, nM = (h.j + iP) / hy, aJ5 = 0 !== ag.mi[aD.eX] && !bA.g9.jY(aD.eX), f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6], (fontSize = Math.floor(aIW * hy *
			aIv(aB) * aIP[aB] * aIN[aB])) < aIV || aIR <= fontSize || aIL[aB] + aIN[aB] > n8 && aIL[aB] < nL && aIM[aB] + aIO[aB] > n9 && aIM[aB] < nM && (aJ1 = Math.floor(h.i * (aIL[aB] + aIN[aB] / 2 - n8) / (nL - n8)), aJ2 = Math.floor(h.j * (
			aIM[aB] + aIO[aB] / 2 - n9) / (nM - n9) - .1 * fontSize), aJ3 = ac.a8E[aB], hp.font = bA.qZ.sN(1 === ag.a3J[aB] ? 4 : 1, fontSize), hp.fillStyle = aJ6(fontSize, aJ3 % 2), aIo ? aJ7(hp, aB, fontSize, aJ1, aJ2, aJ3) : aJ8(aB,
			fontSize, aJ1, aJ2, hp), aIa = !0, 0 < aCB[aB] ? function(aJ1, aJ2, fontSize, aB, hp) {
			0 === jv[aB] ? aj.rp.z4(aId[aB]) ? (function(aJ1, aJ2, fontSize, player, pI, hp) {
				for (var x4 = aJ2, ho = (hp.globalAlpha = aJG(fontSize), aIv(player) * (aIo ? aIk : aIQ[player])), x3 = aJ1 - .5 * fontSize / ho - .9 * fontSize, f7 = 0; f7 < 2; f7++) hp.fillText(aj.rp.yw(pI), x3, x4), x3 = aJ1 + .5 *
					fontSize / ho + .9 * fontSize;
				hp.globalAlpha = 1
			}(aJ1, aJ2, fontSize, aB, aId[aB], hp), aJA(aJ1, aJ2, fontSize, 0, 0, hp)) : aj.rp.z6(aId[aB]) ? (aJJ(aJ1, aJ2, fontSize, aId[aB], 0, hp), aJA(aJ1, aJ2, fontSize, 0, 1, hp)) : (aJJ(aJ1, aJ2, fontSize, aId[aB], 1, hp), aJA(aJ1,
				aJ2, fontSize, 1, 0, hp)) : aJJ(aJ1, aJ2, fontSize, aId[aB], 0, hp)
		}(aJ1, aJ2, fontSize, aB, hp) : 0 === jv[aB] && aJA(aJ1, aJ2, fontSize, 0, 0, hp), aJ5 && (0 < aCB[aB + aD.ek] || 0 < aCB[aB + 2 * aD.ek] || 0 < aCB[aB + 3 * aD.ek] || 0 < aCB[aB + 4 * aD.ek]) && function(aJ1, aJ2, fontSize, aB, hp) {
			var f8, gG = -1;
			for (f8 = 4; 1 <= f8; f8--) 0 < aCB[aB + f8 * aD.ek] && gG++;
			for (f8 = 1; f8 < 5; f8++) 0 < aCB[aB + f8 * aD.ek] && (! function(aJ1, aJ2, fontSize, f8, aB, aJE, dt, hp) {
				var a2n;
				if (1 === f8) {
					aB = aId[aB + aD.ek];
					if (!aj.rp.z5(aB)) return function(aJ1, aJ2, fontSize, pI, aJE, hp) {
						hp.globalAlpha = aJG(fontSize);
						aJ1 -= .534 * aJE * fontSize, aJE = aJ2 + 1.59 * fontSize;
						hp.font = bA.qZ.sN(0, .785 * fontSize), hp.fillText(aj.rp.yw(pI), aJ1, aJE), hp.globalAlpha = 1
					}(aJ1, aJ2, fontSize, aB, aJE, hp);
					a2n = aj.wW.yV[aB - 1024 + aj.rp.yh]
				} else a2n = 2 === f8 ? aL.a5B()[4].canvas[+(dt < 255)] : (3 === f8 ? aL.a5B()[5] : aL.a5B()[6]).canvas[0];
				aB = aj.wW.yW, dt = .8 * fontSize / aB, f8 = aJ1 - .5 * dt * aB - .534 * aJE * fontSize, aJ1 = aJ2 + 1.4 * dt * aB;
				hp.setTransform(dt, 0, 0, dt, f8, aJ1), hp.globalAlpha = aJG(fontSize), hp.drawImage(a2n, 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}(aJ1, aJ2, fontSize, f8, aB, gG, aCB[aB + f8 * aD.ek], hp), gG -= 2)
		}(aJ1, aJ2, fontSize, aB, hp), (aJ4 = aIT * fontSize) < aIV || (hp.font = bA.qZ.sN(1, aJ4), aJ2 += Math.floor(.78 * fontSize), aIo ? aJ8(aB, aJ4, aJ1, aJ2, hp) : aJ7(hp, aB, aJ4, aJ1, aJ2, aJ3)))
	}

	function aJ8(aB, fontSize, eu, ew, hp) {
		var ___id = aB;
		var showName = aB < aD.kA || !__fx.settings.hideBotNames;
		if (showName) hp.fillText(ag.yP[aB], eu, ew), aB < aD.kA && 2 !== ag.a3J[aB] || (aB = fontSize / aIQ[aB], hp.fillRect(eu - .5 * aB, ew + bA.qZ.yx * fontSize, aB, Math.max(1, .1 * fontSize)));
		aIo && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hp.fillText(__fx.utils.getDensity(___id), eu, showName ? ew + fontSize : ew)
		);
	}

	function aJ7(hp, aB, fontSize, aJ1, aJ2, aJ3) {
		var ___id = aB;
		aB = bA.rY.zD(ag.gp[aB]);
		aJ3 >> 1 & 1 ? (hp.lineWidth = .05 * fontSize, hp.strokeStyle = aJ6(fontSize, aJ3 % 2), hp.strokeText(aB, aJ1, aJ2)) : (1 < aJ3 && (hp.lineWidth = .12 * fontSize, hp.strokeStyle = aJ6(fontSize, aJ3), hp.strokeText(aB, aJ1, aJ2)), hp.fillText(
			aB, aJ1, aJ2));
		aIo || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hp.fillText(__fx.utils.getDensity(___id), aJ1, aJ2 + fontSize))
	}

	function aJA(aJ1, aJ2, fontSize, aJE, aJF, hp) {
		var a5g = .95 * fontSize / aIf,
			aJ1 = aJ1 - .5 * a5g * aIe + .8 * aJE * fontSize,
			aJE = aJ2 - 1.76 * a5g * aIf - (.35 - bA.qZ.yx + .7) * aJF * fontSize;
		hp.setTransform(a5g, 0, 0, a5g, aJ1, aJE), hp.globalAlpha = aJG(fontSize), hp.drawImage(ab.get(4), 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJJ(aJ1, aJ2, fontSize, pI, aJE, hp) {
		var hj, x3, a5g;
		hp.globalAlpha = aJG(fontSize), aj.rp.z5(pI) ? (hj = aj.wW.yW, hp.setTransform(a5g = 1.1 * fontSize / hj, 0, 0, a5g, x3 = aJ1 - .5 * a5g * hj - .8 * aJE * fontSize, a5g = aJ2 - 1.55 * a5g * hj), hp.drawImage(aj.wW.yV[pI - 1024 + aj.rp.yh], 0,
			0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (x3 = aJ1 - .8 * aJE * fontSize, a5g = aJ2 - (.35 - bA.qZ.yx + 1) * fontSize, hp.fillText(aj.rp.yw(pI), x3, a5g)), hp.globalAlpha = 1
	}

	function aJ6(fontSize, aJ3) {
		return aIS <= fontSize && fontSize < aIR ? bg.aJL[aJ3] + aJG(fontSize).toFixed(3) + ")" : bg.aJM[aJ3]
	}

	function aJG(fontSize) {
		return aIS <= fontSize && fontSize < aIR ? 1 - (fontSize - aIS) / (aIR - aIS) : 1
	}

	function aJV(ho, i) {
		return 1 + Math.floor(aIU * ho * i)
	}

	function aJS(aB) {
		for (var left = aIL[aB], f6 = aIL[aB] - ag.ie[aB] - 1; 0 <= f6; f6--)
			if (!aJX(aB, --left, aIM[aB], aIO[aB])) {
				left++;
				break
			} var right = aIL[aB];
		for (f6 = ag.ig[aB] - aIL[aB] - aIN[aB]; 0 <= f6; f6--)
			if (!aJX(aB, ++right + aIN[aB] - 1, aIM[aB], aIO[aB])) {
				right--;
				break
			} var eu = Math.floor((left + right) / 2),
			top = aIM[aB];
		for (f6 = aIM[aB] - ag.ih[aB] - 1; 0 <= f6; f6--)
			if (!aJY(aB, eu, --top, aIN[aB])) {
				top++;
				break
			} var bottom = aIM[aB];
		for (f6 = ag.ii[aB] - aIM[aB] - aIO[aB]; 0 <= f6; f6--)
			if (!aJY(aB, eu, ++bottom + aIO[aB] - 1, aIN[aB])) {
				bottom--;
				break
			} var ew = Math.floor((top + bottom) / 2);
		aJP(aB, eu, ew, aIN[aB], aIO[aB]) && (aIL[aB] = eu, aIM[aB] = ew)
	}

	function aJP(player, eu, ew, i, j) {
		eq = Math.floor(.2 * i);
		for (var eq, f8 = eu + i - 1; eu <= f8; f8--)
			if (!aJX(player, f8, ew, j)) return;
		for (f8 = ew + j - 1 - (eq = (eq = Math.floor(.25 * j)) < 1 ? 1 : eq); ew + eq <= f8; f8--)
			if (!aJY(player, eu, f8, i)) return;
		return 1
	}

	function aJX(player, eu, ew, j) {
		return ac.xv(player, 4 * (ew * bS.ey + eu)) && ac.xv(player, 4 * ((ew + j - 1) * bS.ey + eu))
	}

	function aJY(player, eu, ew, i) {
		return ac.xv(player, 4 * (ew * bS.ey + eu)) && ac.xv(player, 4 * (ew * bS.ey + eu + i - 1))
	}
	this.dd = function() {
		if (aIo = bj.eK.data[7].value || 8 === aD.kS, aAC = 0 === (aAC = bj.eK.data[11].value) ? 280 : 1 === aAC ? 187 : 112, aIa = !1, aIW = .88, aIT = .5, aIU = 1.8, aIV = 12 - 3 * bj.eK.data[9].value, aIK = aIJ = 0, aIL = new Uint16Array(aD
				.ek), aIM = new Uint16Array(aD.ek), aIN = new Uint16Array(aD.ek), aIO = new Uint16Array(aD.ek), aIP = new Float32Array(aD.ek), aIQ = new Float32Array(aD.ek), aId = new Uint16Array(2 * aD.ek), aCB = new Uint8Array(5 * aD.ek), aIm =
			new Uint8Array(aD.ek), aIn = new Uint8Array(aD.ek), aIl || (aIb = aIb || document.createElement("canvas")), qc(), aIY = aIX = 0, aIZ = 1, aIo) {
			var aB, aIu;
			for (aIp(), ug.font = bA.qZ.sN(1, 100), aIu = 100 / Math.floor(ug.measureText("900 000").width), aB = aD.ek - 1; 0 <= aB; aB--) aIP[aB] = Math.min(aIu, 2 * aIQ[aB]);
			aIk = aIu, aIj[0] = 100 / (aIu * Math.floor(ug.measureText("5 000 000").width)), aIj[1] = 100 / (aIu * Math.floor(ug.measureText("50 000 000").width)), aIj[2] = 100 / (aIu * Math.floor(ug.measureText("500 000 000").width)), aIj[3] =
				100 / (aIu * Math.floor(ug.measureText("1 000 000 000").width))
		} else aIp();
		! function() {
			var aB;
			for (aB = aD.ek - 1; 0 <= aB; aB--) ag.gb[aB] < 12 ? (aIL[aB] = ag.ie[aB] + 1, aIM[aB] = ag.ih[aB] + 1, aIN[aB] = 1, aIO[aB] = 1) : (aIL[aB] = ag.ie[aB], aIM[aB] = ag.ih[aB] + 1, aIN[aB] = 4, aIO[aB] = 2);
			if (aD.hB)
				for (aB = 0; aB < aD.kA; aB++) aIN[aB] = 0;
			aIe = ab.get(4).width, aIf = ab.get(4).height
		}()
	}, this.aI5 = function(gL, a6e) {
		a6e > 18 * ag.gb[gL] ? (aIn[gL] = 6, ac.a8E[gL] = 2 + ac.a8E[gL] % 2) : (aIm[gL] = 4, (ac.a8E[gL] < 2 || 3 < ac.a8E[gL]) && (ac.a8E[gL] = 6 + ac.a8E[gL] % 2))
	}, this.pU = function(gL, a6e) {
		a6e > 6 * ag.gb[gL] ? (aIn[gL] = 6, ac.a8E[gL] = 4 + ac.a8E[gL] % 2) : (aIm[gL] = 4, (ac.a8E[gL] < 4 || 5 < ac.a8E[gL]) && (ac.a8E[gL] = 8 + ac.a8E[gL] % 2))
	}, this.resize = function() {
		qc(), aIl || aIt(aIc)
	}, this.a4H = function() {
		for (var aB = 0; aB < aD.kA; aB++) ag.ig[aB] - ag.ie[aB] != 3 || ag.ii[aB] - ag.ih[aB] != 3 ? (aIL[aB] = ag.ie[aB] + (ag.ig[aB] !== ag.ie[aB] ? 1 : 0), aIM[aB] = ag.ih[aB], aIN[aB] = 1, aIO[aB] = 1) : (aIL[aB] = ag.ie[aB], aIM[aB] = ag
			.ih[aB] + 1, aIN[aB] = 4, aIO[aB] = 2)
	}, this.q8 = function(player, e8, aIw) {
		! function(player, e8, aIw) {
			player += e8 * aD.ek;
			0 === e8 ? aId[player] === aIw && 0 < aCB[player] ? aCB[player] = 0 : (aId[player] = aIw, aCB[player] = aj.rp.z4(aIw) ? 255 : 64) : 1 === e8 ? (aCB[player] = 64, aId[player] = aIw) : aCB[player] = aIw
		}(player, e8, aIw), 2 === aD.zw && this.mU(!0)
	}, this.uf = function() {
		aIl ? aIt(ug) : aIa && (1 !== aIZ ? (ug.imageSmoothingEnabled = !0, ug.setTransform(aIZ, 0, 0, aIZ, 0, 0), ug.drawImage(aIb, -aIX / aIZ, -aIY / aIZ), ug.setTransform(1, 0, 0, 1, 0, 0), ug.imageSmoothingEnabled = !1) : ug.drawImage(aIb, -
			aIX, -aIY))
	}, this.a91 = function(i7, iA) {
		aIX += i7, aIY += iA
	}, this.a1Q = function(i7, iA) {
		af.a91(i7, iA)
	}, this.zoom = function(a2M, lN, lO) {
		aIZ *= a2M, aIX = (aIX + lN) * a2M - lN, aIY = (aIY + lO) * a2M - lO
	}, this.mU = function(bu) {
		return !aIl && !(!aIi && !bu && bf.eM < aIh + (1 === aIZ && 0 === aIX && 0 === aIY && (aD.a4l() || aD.hB || 2 === aD.zw) ? 1e3 : aAC) || (aIi = !1, aIh = bf.eM, aIt(aIc), 0))
	}, this.aIz = function(aB) {
		return aIv(aB) * aIP[aB]
	}, this.aJ0 = function(player) {
		return aIP[player]
	}, this.j3 = function() {
		bf.k7() % 10 == 9 && (aIi = aD.a4n() && !aD.a4l()), !aD.a4l() && 4 <= ++aIK && function() {
			var aB, f6, f7;
			for (aIK = 0, f7 = 4; 1 <= f7; f7--)
				for (f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6] + f7 * aD.ek, 0 < aCB[aB] && aCB[aB] < 255 && aCB[aB]--;
			if (2 !== aD.zw)
				for (f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6], 0 < aCB[aB] && aCB[aB] < 255 && aCB[aB]--
		}();
		var aB, f6, en = Math.floor(.1 * al.kB);
		for (en = (en = en < 8 ? 8 : en) > al.kB ? al.kB : en, aB = aIJ + en - 1; aIJ <= aB; aB--) f6 = aB % al.kB, ! function(aB) {
			var ho = aIv(aB) * aIP[aB];
			0 < aIN[aB] && aJP(aB, aIL[aB], aIM[aB], aIN[aB], aIO[aB]) ? ! function(aB) {
				for (var eu, ew, i, j, eR = !1, f7 = 0; f7 < 8; f7++) {
					if (i = aIN[aB] + 2, j = aIO[aB] + 2, i > ag.ig[aB] - ag.ie[aB] + 1 || j > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					if (eu = aIL[aB] - 1, ew = aIM[aB] - 1, !aJP(aB, eu, ew, i, j)) return eR;
					aIL[aB] = eu, aIM[aB] = ew, aIN[aB] = i, aIO[aB] = j, eR = !0
				}
				return eR
			}(aB) && function(aB, ho) {
				for (var eu, ew, i, j, eR = !1, aCK = aIN[aB], nK = 1 + Math.floor(.02 * aCK), f7 = 1; f7 < 5; f7++) {
					if ((i = aCK + f7 * nK) > ag.ig[aB] - ag.ie[aB] + 1) return eR;
					if ((j = aJV(ho, i)) > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJP(aB, eu, ew, i, j) && (aIL[aB] = eu, aIM[aB] = ew, aIN[
						aB] = i, aIO[aB] = j, eR = !0)
				}
				return eR
			}(aB, ho) && aJS(aB) : ! function(aB, ho) {
				var j, eu = aIL[aB] + 1,
					ew = aIM[aB] + 1,
					i = aIN[aB] - 2;
				for (;;) {
					if (i < 1) {
						aIN[aB] = 0;
						break
					}
					if (j = aJV(ho, i), aJP(aB, eu, ew, i, j)) return aIL[aB] = eu, aIM[aB] = ew, aIN[aB] = i, aIO[aB] = j, 1;
					eu++, ew++, i -= 2
				}
				return
			}(aB, ho) ? function(aB, ho) {
				var eu, ew, i, j, f7, nQ, jR = ag.ig[aB] - ag.ie[aB] + 1,
					aJW = Math.floor(.02 * jR);
				for (nQ = -6 * (aJW = aJW < 1 ? 1 : aJW), f7 = jR; nQ <= f7; f7 -= aJW)
					if (j = aJV(ho, i = 0 < f7 ? f7 : 1), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJP(aB, eu, ew, i, j))
						return aIL[aB] = eu, aIM[aB] = ew, aIN[aB] = i, aIO[aB] = j
			}(aB, ho) : aJS(aB)
		}(al.kC[f6]);
		aIJ = (aIJ += en) % al.kB
	}, this.mP = function() {
		var aB, gL, z2, z3;
		if (bf.k7() % 4 == 1)
			for (aB = al.kB - 1; 0 <= aB; aB--) gL = al.kC[aB], ac.a8E[gL] < 2 || ((z2 = Math.max(aIm[gL] - 1, 0)) === (z3 = Math.max(aIn[gL] - 1, 0)) ? 0 === z2 && (ac.a8E[gL] %= 2) : 0 === z3 && ac.a8E[gL] < 6 && (ac.a8E[gL] += 4), aIm[gL] =
				z2, aIn[gL] = z3)
	}, this.a6O = function(player) {
		var aB = player + 2 * aD.ek,
			dt = aCB[aB];
		return 0 < dt && (aN.a03(50, player), aCB[aB] = 0, 255 === dt)
	}, this.a5Q = function(player) {
		return 255 === aCB[player + 2 * aD.ek]
	}
}

function cd() {
	var aJZ, aJa, aJb;
	this.dd = function() {
		aJZ =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJa =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aJb = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6g = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJc = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aJZ.length - 1; 0 <= aB; aB--)
			for (var f6 = a6g.length - 1; 0 <= f6; f6--) aJZ[aB] = aJZ[aB].replace(a6g[f6], aJc[f6]);
		if (__fx.settings.realisticNames) aJZ = realisticNames;
	}, this.a4X = function() {
		var en = aD.kA,
			yP = ag.yP,
			a0a = ag.a0a,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < en)
			for (var aB = 0; aB < en; aB++) yP[aB] = a0a[aB] = "Player " + ay.jS(1e3);
		else
			for (aB = 0; aB < en; aB++) yP[aB] = a0a[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kS) {
			for (var e7 = ay.random(), aJi = aJb, aJj = aJa, hW = aE.hW, en = aJi.length, l3 = aD.data.teamPlayerCount[7], yP = ag.yP, a0a = ag.a0a, aB = l3 - 1; aB >= aD.kA; aB--) yP[aB] = a0a[aB] = aJi[(aB + e7) % en];
			for (en = aJj.length - 1, aB = l3; aB < aD.ek; aB++) yP[aB] = a0a[aB] = aJj[hW[aB] ? en : aB % en]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var en = aD.ek, yP = ag.yP, a0a = ag.a0a, playerNamesData = aD.data.playerNamesData, aB = aD.kA; aB < en; aB++) yP[aB] = a0a[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var yP = ag.yP, a0a = ag.a0a, aB = aD.kA; aB < aD.ek; aB++) yP[aB] = a0a[aB] = "Bot " + ay.jS(1e3)
		} : function() {
			for (var aJk = aJZ, en = aJk.length, e7 = ay.random(), yP = ag.yP, a0a = ag.a0a, aB = aD.kA; aB < aD.ek; aB++) yP[aB] = a0a[aB] = aJk[(aB + e7) % en]
		})()
	}
}

function cw() {
	this.aJl = [], this.aJm = [], this.dd = function() {
		this.aJl = [], this.aJm = []
	}, this.j3 = function() {
		0 <= this.aJl.length && this.aJn(this.aJl), 0 <= this.aJm.length && this.aJn(this.aJm)
	}, this.aJn = function(g) {
		for (var f7 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eM--, g[aB].eM <= 0) {
				f7 = aB;
				break
			} for (aB = f7; 0 <= aB; aB--) g.shift()
	}, this.a5J = function(id, zk, aJo) {
		return this.f9(this.aJl, id, zk, aJo)
	}, this.aJp = function(id, zk, aJo) {
		return this.f9(this.aJm, id, zk, aJo)
	}, this.f9 = function(g, id, zk, aJo) {
		return ! function(g, id, zk) {
			var aB, hf;
			for (aB = zk.length - 1; 0 <= aB; aB--)
				for (hf = g.length - 1; 0 <= hf; hf--)
					if (g[hf].player === zk[aB] && id === g[hf].id) return 1;
			return
		}(g, id, zk) && (aJo && function(g, id, zk) {
			var aB;
			for (aB = zk.length - 1; 0 <= aB; aB--) g.push({
				player: zk[aB],
				id: id,
				eM: 384
			})
		}(g, id, zk), !0)
	}
}

function cc() {
	this.a0a = new Array(aD.ek), this.yP = new Array(aD.ek), this.a3J = new Uint8Array(aD.ek), this.mi = new Uint8Array(aD.ek), this.ie = new Uint16Array(aD.ek), this.ih = new Uint16Array(aD.ek), this.ig = new Uint16Array(aD.ek), this.ii =
		new Uint16Array(aD.ek), this.gb = new Uint32Array(aD.ek), this.xV = new Uint32Array(aD.ek), this.gp = new Uint32Array(aD.ek), this.gF = null, this.gT = null, this.gU = null, this.fD = null, this.py = new Uint16Array(aD.ek), this.jC =
		new Uint16Array(aD.ek), this.jD = new Uint16Array(aD.ek), this.a0V = new Uint16Array(aD.ek), this.a0T = new Uint8Array(aD.ek), this.a3R = new Uint16Array(aD.ek), this.dd = function() {
			this.a0a.fill(""), this.yP.fill(""), this.a3J.fill(0), this.mi.fill(0), this.ie.fill(0), this.ih.fill(0), this.ig.fill(0), this.ii.fill(0), this.gb.fill(0), this.xV.fill(0), this.gp.fill(0), this.gF = new Array(aD.ek), this.gT =
				new Array(aD.ek), this.gU = new Array(aD.ek), this.fD = new Array(aD.ek), this.py.fill(0), this.jC.fill(0), this.jD.fill(0), this.a0V.fill(0), this.a0T.fill(0), this.a3R.fill(0)
		}
}

function cu() {
	this.aCg = function(player) {
		aG.mh(player), aD.zy++, ag.a3J[player] = 2, ag.a0V[player] = bi.a0l.aH9(), player === aD.eX && (aX.show(!1, !1), aW.aAq(), bR.zh.a0R()), af.a6O(player)
	}
}

function cV() {
	this.kC = null, this.kB = 0, this.a4b = function() {
		for (this.kB = 0, aB = aD.ek - 1; 0 <= aB; aB--) 0 !== ag.mi[aB] && this.kB++;
		this.kC = new Uint16Array(this.kB);
		for (var en = 0, aB = 0; aB < aD.ek; aB++) 0 !== ag.mi[aB] && (this.kC[en++] = aB)
	}, this.mO = function() {
		for (var gb = ag.gb, xV = ag.xV, a0T = ag.a0T, kC = al.kC, aB = al.kB - 1; 0 <= aB; aB--) {
			var dt, gL = kC[aB];
			gb[gL] <= bL.du(xV[gL], 4) ? ak.dm(gL) : gb[gL] >= xV[gL] ? (dt = gb[gL], 250 <= (xV[gL] = dt) && (a0T[gL] = 1)) : xV[gL] -= Math.max(1, bL.du(xV[gL] - gb[gL], 1e3))
		}
		this.aJt()
	}, this.aJt = function() {
		for (var mi = ag.mi, l2 = this.kC, aBY = this.kB, aB = aBY - 1; 0 <= aB; aB--) 0 === mi[l2[aB]] && (l2[aB] = l2[--aBY]);
		this.kB = aBY
	}
}

function cW() {
	var aJu = new Uint16Array(aD.ek),
		aJv = 10;

	function aJy(a6U) {
		return aD.kU || 7 <= aD.kS || 4284 <= bf.k7() || bA.g9.jY(a6U)
	}
	this.dd = function() {
		aJu.fill(0), aJv = 10
	}, this.hR = function(p7) {
		var player = aD.eX;
		if (bA.g9.q0(player, p7) && bA.g9.pQ(player, bA.g9.iM(player, aR.hH()), p7)) {
			player = p7, p7 = bO.fK[0];
			if (!aJy(player)) {
				p7 = Math.max(bL.du(100 * p7, ae.jq(player)), 1);
				if (aJu[player] + p7 > aJv) return !!void 0
			}
			return !!1
		}
		return !1
	}, this.jG = function(a6U, aJx) {
		if (!aJy(a6U)) {
			aJx = Math.max(bL.du(100 * aJx, ae.jq(a6U)), 1);
			if (aJu[a6U] + aJx > aJv) return !1;
			aJu[a6U] += aJx
		}
		return !0
	}, this.j3 = function() {
		bf.k7() % 100 == 99 && (bf.k7() < 1071 ? aJv += 5 : bf.k7() < 2142 ? aJv += 8 : bf.k7() < 3213 ? aJv += 12 : aJv += 14)
	}
}

function ce() {
	var aJz;
	this.kb = null, this.ka = 0, this.dd = function() {
		aJz = [], 9 === aD.kS && this.aK0()
	}, this.aK0 = function() {
		this.kb = [0, 0, 0, 0, 0, 0];
		for (var aK1 = [256, 227, 176, 100, this.ka = 0, 0, 0], aK2 = [0, 8, 24, 46, 70, 256, 333], aK3 = [0, 0, 3, 11, 15, 256, 179], j = aD.kA, aB = 1; aB < aK1.length; aB++)
			if (j <= aK2[aB]) {
				this.ka = aK1[aB - 1] - bL.du((j - aK2[aB - 1]) * (aK1[aB - 1] - aK1[aB]), aK2[aB] - aK2[aB - 1]), this.kb[5] = aK3[aB - 1] - bL.du((j - aK2[aB - 1]) * (aK3[aB - 1] - aK3[aB]), aK2[aB] - aK2[aB - 1]), this.kb[0] = aD.ek - j - this
					.ka - this.kb[5];
				break
			} aD.kW = aD.ek - aD.kA, aD.data.numberTeams = (0 < aD.kA) + (0 < aD.kW), aD.data.playerCount = aD.x1 = aD.kA + aD.kW, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kA + this.ka, aD.kW - this.ka]), aD.a4Q.a4V()
	}, this.aHG = function(player) {
		aJz.push({
			player: player,
			gG: 14 + ay.jS(20)
		})
	}, this.j3 = function() {
		if (9 === aD.kS)
			for (var aB = aJz.length - 1; 0 <= aB; aB--) --aJz[aB].gG <= 0 && (af.q8(aJz[aB].player, 0, aj.rp.yk + aj.rp.yy), aJz.splice(aB))
	}
}

function dB() {
	function aKI() {
		return {
			ey: bS.ey,
			ez: bS.ez,
			wT: bS.wT,
			wP: bS.wP,
			wQ: bS.wQ,
			wU: bS.wU,
			eT: bS.eT,
			mapSeed: bS.mapSeed,
			wR: bS.wR
		}
	}

	function aKA(aB) {
		return 1 !== aB && bS.aDA(aB) && aB !== bS.aKK()
	}
	this.aK5 = 22, this.aHR = 4096, this.ey = 0, this.ez = 0, this.wT = null, this.wP = null, this.wQ = null, this.wU = null, this.eT = 0, this.mapSeed = 0, this.wR = !1, this.wS = new aK6, this.wJ = new aK7, this.a6m = new aK8, this.dd =
function() {
		this.wJ.dd()
	}, this.a7 = function(map, aK9) {
		((map %= this.aK5) !== this.eT || aKA(this.eT) && aK9 !== this.mapSeed) && (this.wR = !1, this.wS.aKB(), ay.a4W(map), this.eT = map, this.mapSeed = aK9, aKA(map) && (bS.wJ.wK[map].aKC = aK9), this.aDA(this.eT) ? (map = bS.wJ.wK[this.eT],
			this.ey = map.i, this.ez = map.j, ay.a4W(map.aKC), aq.a7([this.ey, this.ez, map.mn, map.mk]), aKE(), ap.aKF(), aq.aKG()) : aKD())
	}, this.aKH = function(map, aK9) {
		var fW = aKI(),
			map = (this.a7(map, aK9), this.wS.aKB(), aKI());
		return aK9 = fW, bS.ey = aK9.ey, bS.ez = aK9.ez, bS.wT = aK9.wT, bS.wP = aK9.wP, bS.wQ = aK9.wQ, bS.wU = aK9.wU, bS.eT = aK9.eT, bS.mapSeed = aK9.mapSeed, bS.wR = aK9.wR, map
	}, this.a4r = function(canvas) {
		canvas && this.wT !== canvas && (this.ey = canvas.width, this.ez = canvas.height, this.wT = canvas, this.wP = this.wT.getContext("2d", {
			alpha: !1
		}), this.hm = this.wP.getImageData(0, 0, this.ey, this.ez), this.wU = this.hm.data, this.eT = this.aKK(), this.mapSeed = 0, bS.wJ.wK[this.eT].name = aD.data.mapName)
	}, this.eS = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aKK()
	}, this.aKL = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aKM = function(aB) {
		return 1 === aB
	}, this.aKK = function() {
		return this.aK5
	}, this.aDA = function(aB) {
		return void 0 === this.wJ.wK[aB].aKN
	}, this.a4q = function(qR) {
		return 0 === qR.mapType ? qR.mapProceduralIndex < 10 ? qR.mapProceduralIndex : 10 + qR.mapProceduralIndex : 1 === qR.mapType ? qR.mapRealisticIndex + 10 : void 0
	}, this.aDB = function(qR, aKO) {
		0 === qR.mapType ? qR.mapProceduralIndex = aKO < 10 ? aKO : aKO - 10 : 1 === qR.mapType && (qR.mapRealisticIndex = aKO - 10)
	}
}

function aK6() {
	function aKX() {
		bS.wS.j3()
	}

	function aKd(gL, aKc) {
		0 < aKc && (bS.wU[gL] += aKc, bS.wU[gL + 1] += aKc, bS.wU[gL + 2] += aKc)
	}

	function i1(gL) {
		return bS.wU[gL + 2] > bS.wU[gL] && bS.wU[gL + 2] > bS.wU[gL + 1]
	}
	this.a9D = -1, this.a0y = 0, this.aKP = 0, this.aKQ = 8, this.aKR = 32, this.aKS = 8, this.aKT = 32, this.aKU = [0, 0], this.a8E = [0, 0, 0, 0], this.iX = null, this.aKV = !0, this.aKW = !1, this.aKB = function() {
		-1 !== this.a9D && clearTimeout(this.a9D), this.a9D = -1, this.iX = null, aq.aKG()
	}, this.dd = function() {
		7 === aa.a17() || this.aKW || (this.aKV = !0, this.a0y = 0, this.aKP = 1, this.aKU = [bS.wJ.wK[bS.eT].wl[0], bS.wJ.wK[bS.eT].wm[0]], this.a8E = [bS.wJ.wK[bS.eT].aKN[3], bS.wJ.wK[bS.eT].aKN[4], bS.wJ.wK[bS.eT].aKN[5], bS.wJ.wK[bS.eT].aKN[
			6]], this.aKQ = bS.wJ.wK[bS.eT].aKN[7], this.aKR = bS.wJ.wK[bS.eT].aKN[8], this.aKS = bS.wJ.wK[bS.eT].aKN[9], this.aKT = bS.wJ.wK[bS.eT].aKN[10], this.aKV ? this.a9D = setTimeout(aKX, 16) : this.j3())
	}, this.j3 = function() {
		if (8 === aa.a17() && aH.n0()) this.a9D = setTimeout(aKX, 16);
		else {
			if (0 === this.a0y) {
				var aKC = ay.aKY();
				if (ay.a4W(bS.wJ.wK[bS.eT].aKN[2]), aq.a7([bS.ey, bS.ez, bS.wJ.wK[bS.eT].aKN[0], bS.wJ.wK[bS.eT].aKN[1]]), ay.a4W(aKC), this.iX = aq.aKZ(), this.a0y++, this.aKV) return void(this.a9D = setTimeout(aKX, 16))
			}
			for (var gL, eZ, aKC = this.aKV ? 10 : 1e6, aKC = bS.ez - this.aKP - 1 < aKC ? bS.ez - this.aKP - 1 : aKC, xi = this.aKP + aKC, ew = this.aKP; ew < xi; ew++)
				for (var eu = 1; eu < bS.ey - 1; eu++) i1(gL = 4 * (eZ = eu + ew * bS.ey)) ? this.aKa(gL, eZ, 1) : (this.aKa(gL, eZ, 0), function(eu, ew, gL) {
					return 1 < eu && i1(gL - 4) || eu < bS.ey - 2 && i1(gL + 4) || 1 < ew && i1(gL - 4 * bS.ey) || ew < bS.ez - 2 && i1(gL + 4 * bS.ey)
				}(eu, ew, gL) && this.aKb(eu, ew));
			this.aKP = xi, this.aKP >= bS.ez - 1 ? (bS.wP.putImageData(bS.wQ, 0, 0, 1, 1, bS.ey - 2, bS.ez - 2), bf.dl = !0, this.aKB()) : this.aKV && (this.a9D = setTimeout(aKX, 16))
		}
	}, this.aKa = function(gL, eZ, e8) {
		aKd(gL, Math.floor(this.aKU[e8] + this.a8E[e8] * this.iX[eZ] / 1e4) - bS.wU[gL])
	}, this.aKe = function(gL, e7, aKf, e8, a8E) {
		aKd(gL, Math.floor(this.aKU[e8] + (1 - e7 / aKf) * a8E) - bS.wU[gL])
	}, this.aKb = function(lN, lO) {
		for (var gL, e7, aKf, a93 = lN - this.aKR, aKg = lO - this.aKR, xj = lN + this.aKR, xi = lO + this.aKR, a93 = a93 < 1 ? 1 : a93, xj = xj > bS.ey - 2 ? bS.ey - 2 : xj, xi = xi > bS.ez - 2 ? bS.ez - 2 : xi, ew = aKg < 1 ? 1 : aKg; ew <=
			xi; ew++)
			for (var eu = a93; eu <= xj; eu++) i1(gL = 4 * (eu + ew * bS.ey)) ? (aKf = this.aKQ + (this.aKR - this.aKQ) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lN - eu) > aKf || Math.abs(lO - ew) > aKf || aKf <= (e7 = Math.sqrt((lN - eu) * (
				lN - eu) + (lO - ew) * (lO - ew))) || this.aKe(gL, e7, aKf, 1, this.a8E[3])) : (aKf = this.aKS + (this.aKT - this.aKS) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lN - eu) > aKf || Math.abs(lO - ew) > aKf || aKf <= (e7 = Math
				.sqrt((lN - eu) * (lN - eu) + (lO - ew) * (lO - ew))) || this.aKe(gL, e7, aKf, 0, this.a8E[2]))
	}
}

function aKE() {
	var uP = aKh(bS.eT);
	uP && aKi(uP[0], uP[1], uP[2], uP[3], uP[4])
}

function aKh(eT) {
	return 2 === eT ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eT ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eT ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eT ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eT ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aKi(aKj, aKk, aKl, aKm, aKn) {
	for (var eu, ew, aKp, aKq, a2M, aKs, i6 = aKj.length - 1, aKo = bS.ey + bS.ez, en = (aKo *= aKo, aKl.length), aKr = Array(en), aB = en - 1; 0 <= aB; aB--) aKr[aB] = aKl[aB] * aKl[aB];
	var aKt = new Array(en),
		aC8 = new Array(en),
		aKu = new Array(en),
		fF = aq.aKZ();
	if (void 0 === aKn)
		for (aKn = new Array(en), aB = en - 1; 0 <= aB; aB--) aKn[aB] = 0;
	for (aB = 1; aB < en; aB++) aKt[aB] = aKr[aB] - aKr[aB - 1], aC8[aB] = aKm[aB] - aKm[aB - 1], aKu[aB] = aKn[aB] - aKn[aB - 1];
	for (eu = bS.ey - 1; 0 <= eu; eu--)
		for (ew = bS.ez - 1; 0 <= ew; ew--) {
			for (aKp = aKo, aB = i6; 0 <= aB; aB--) aKp = (aKq = (eu - aKj[aB]) * (eu - aKj[aB]) + (ew - aKk[aB]) * (ew - aKk[aB])) < aKp ? aKq : aKp;
			for (a2M = aKm[en - 1], aKs = aKn[en - 1], aB = 1; aB < en; aB++)
				if (aKp < aKr[aB]) {
					a2M = aKm[aB - 1] + aGg((aKp - aKr[aB - 1]) * aC8[aB], aKt[aB]), aKs = aKn[aB - 1] + aGg((aKp - aKr[aB - 1]) * aKu[aB], aKt[aB]);
					break
				} aKv(bS.ey * ew + eu, a2M, aKs, fF)
		}
}

function aKv(e8, a2M, aKs, fF) {
	a2M < 500 ? fF[e8] = bL.du(fF[e8] * a2M * 2, 1e3) : 500 < a2M && (fF[e8] += bL.du(2 * (1e4 - fF[e8]) * (a2M - 500), 1e3)), fF[e8] += bL.du(aKs * (10 * a2M - fF[e8]), 1e3)
}

function cg() {
	var aKw;

	function aL6(a2n, ho, eu, ew, globalAlpha) {
		bS.wP.save(), bS.wP.globalAlpha = globalAlpha, bS.wP.imageSmoothingEnabled = !1, bS.wP.scale(ho, ho), bS.wP.drawImage(a2n, Math.floor(eu * (bS.ey / ho - a2n.width)), Math.floor(ew * (bS.ez / ho - a2n.height))), bS.wP.restore()
	}
	this.a6j = 0, this.a6k = 0, this.a6l = 0, this.a6m = 0, this.dd = function() {
		(aKw = new Array(bS.aK5))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e7: [220, 250, 255, 220],
			tB: [190, 220, 0, 0],
			f7: [170, 200, 0, 0]
		}, aKw[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e7: [25, 0, 100, 0, 25],
			tB: [25, 0, 0, 0, 25],
			f7: [25, 0, 0, 0, 25]
		}, aKw[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tB: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aKw[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tB: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aKw[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e7: [10, 10, 20, 10, 10, 170, 212],
			tB: [20, 20, 60, 100, 100, 110, 170],
			f7: [70, 70, 160, 30, 30, 60, 120]
		}, aKw[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aKw[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e7: [10, 10, 60, 255, 255, 200, 200],
			tB: [10, 10, 60, 255, 255, 200, 200],
			f7: [80, 80, 255, 255, 255, 200, 200]
		}, aKw[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aKw[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aKw[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aKw[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tB: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aKw[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tB: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aKF = function() {
		var aL5, aB, f6, fW, hm = function() {
				var hm;
				return bS.wT = document.createElement("canvas"), bS.wT.width = bS.ey, bS.wT.height = bS.ez, bS.wP = bS.wT.getContext("2d", {
					alpha: !1
				}), hm = bS.wP.getImageData(0, 0, bS.ey, bS.ez), bS.wU = hm.data, hm
			}(),
			i = aKw[bS.eT].i,
			e7 = aKw[bS.eT].e7,
			tB = aKw[bS.eT].tB,
			f7 = aKw[bS.eT].f7,
			fF = aq.aKZ(),
			en = i.length - 2,
			aL0 = new Array(1 + en),
			aL1 = new Array(1 + en),
			aL2 = new Array(1 + en),
			aL3 = new Array(1 + en);
		for (f6 = en; 0 <= f6; f6--) aL0[f6] = i[f6 + 1] - i[f6], aL1[f6] = e7[f6 + 1] - e7[f6], aL2[f6] = tB[f6 + 1] - tB[f6], aL3[f6] = f7[f6 + 1] - f7[f6];
		for (aB = bS.ey * bS.ez - 1; 0 <= aB; aB--)
			for (f6 = en; 0 <= f6; f6--)
				if (fF[aB] >= i[f6]) {
					fW = fF[aB] - i[f6], bS.wU[4 * aB] = e7[f6] + aGg(aL1[f6] * fW, aL0[f6]), bS.wU[4 * aB + 1] = tB[f6] + aGg(aL2[f6] * fW, aL0[f6]), bS.wU[4 * aB + 2] = f7[f6] + aGg(aL3[f6] * fW, aL0[f6]), bS.wU[4 * aB + 3] = 255;
					break
				} bS.wP.putImageData(hm, 0, 0), bS.aKM(bS.eT) && ab.tF() && bS.aKM(bS.eT) && (hm = ab.aFr("arena"), aL5 = ab.aFr("territorial.io"), aL6(hm, 5, .5, .5, .1), aL6(aL5, 2, .5, .45, .1)), bS.wR = !0, bf.dl = !0
	}, this.a4Z = function() {
		for (var gL, eu, ew, aL7, hd, fY, a6k = 0, i = bS.ey, j = bS.ez, fW = i * j * 4, aL8 = aBi, aL9 = bS.wU, aB = i - 1; 0 <= aB; aB--) aL8[(gL = aB << 2) + 2] = aL8[fW - gL - 2] = 3;
		for (fW = 4 * i, aB = j - 1; 0 <= aB; aB--) aL8[(gL = aB * fW) + 2] = aL8[gL + fW - 2] = 3;
		for (aL7 = i - 1, hd = j - 1, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aL7; eu++) fY = 1 - (aL9[(gL = fW + eu << 2) + 2] > aL9[gL + 1] && aL9[gL + 2] > aL9[gL]), aL8[gL + 2] = 6 - 5 * fY, a6k += fY;
		this.a6j = (i - 2) * (j - 2), this.a6m = 0, bS.eS(bS.eT) && (bS.a6m.aLA(), bS.a6m.aLB(4, 5)), this.a6k = aD.ju = a6k - this.a6m, this.a6l = this.a6j - this.a6k - this.a6m, this.a6l && (bS.a6m.aLB(6, 2), bS.a6m.aLC())
	}
}

function aKD() {
	var qG;
	10 === bS.eT ? qG =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.eT ? qG =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.eT ? qG =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.eT ? qG =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.eT ? qG =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.eT ? qG =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.eT ? qG =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.eT ? qG =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.eT ? qG =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.eT && (qG =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new wC).wE(qG)
}

function aK7() {
	this.wK = null, this.aLD = null, this.aLE = null, this.dd = function() {
		var aLF = [120, 105, 92],
			cos = [12, 12, 60],
			aLG = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aLH = [140, 130, 120],
			aLI = [12, 12, 76],
			aLJ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aLK = [130, 117, 106],
			aLL = [12, 12, 68],
			aLM = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wK = new Array(bS.aK5 + 1), this.wK[0] = {
			name: L(133),
			i: 230,
			j: 230,
			mn: 1e3,
			mk: 2e3,
			aKC: 173
		}, this.wK[1] = {
			name: L(134),
			i: 800,
			j: 800,
			mn: 100,
			mk: 50,
			aKC: 43
		}, this.wK[2] = {
			name: L(135),
			i: 512,
			j: 512,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wK[3] = {
			name: L(136) + " 1",
			i: 960,
			j: 960,
			mn: 60,
			mk: 8,
			aKC: 0
		}, this.wK[4] = {
			name: L(137),
			i: 900,
			j: 900,
			mn: 100,
			mk: 5,
			aKC: 0
		}, this.wK[5] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mn: 100,
			mk: 40,
			aKC: 0
		}, this.wK[6] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			mn: 100,
			mk: 20,
			aKC: 0
		}, this.wK[7] = {
			name: L(140),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wK[8] = {
			name: L(141),
			i: 820,
			j: 820,
			mn: 200,
			mk: 100,
			aKC: 0
		}, this.wK[9] = {
			name: L(142),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wK[10] = {
			name: L(143),
			wl: aLH,
			wm: aLI,
			aKN: aLJ
		}, this.wK[11] = {
			name: L(144),
			wl: aLK,
			wm: aLL,
			aKN: aLM
		}, this.wK[12] = {
			name: L(145),
			wl: aLK,
			wm: aLL,
			aKN: aLM
		}, this.wK[13] = {
			name: L(146),
			wl: aLF,
			wm: cos,
			aKN: aLG
		}, this.wK[14] = {
			name: L(147),
			wl: aLF,
			wm: cos,
			aKN: aLG
		}, this.wK[15] = {
			name: L(148),
			wl: aLH,
			wm: aLI,
			aKN: aLJ
		}, this.wK[16] = {
			name: L(149),
			wl: aLH,
			wm: aLI,
			aKN: aLJ
		}, this.wK[17] = {
			name: L(150),
			wl: aLF,
			wm: cos,
			aKN: aLG
		}, this.wK[18] = {
			name: L(151),
			wl: aLK,
			wm: aLL,
			aKN: aLM
		}, this.wK[19] = {
			name: L(152),
			wl: aLF,
			wm: cos,
			aKN: aLG
		}, this.wK[20] = {
			name: L(153),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wK[21] = {
			name: L(136) + " 2",
			i: 940,
			j: 940,
			mn: 80,
			mk: 8,
			aKC: 0
		}, this.wK[bS.aK5] = {
			name: ""
		}, this.aLD = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aLD[aB] = aB;
		for (this.aLD[10] = 20, this.aLD[11] = 21, this.aLE = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aLE[aB] = 10 + aB
	}
}

function aK8() {
	this.aLA = function() {
		for (var gL, eu, fW, aL8 = aBi, aL9 = bS.wU, i = bS.ey, aL7 = i - 1, hd = bS.ez - 1, gG = 0, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aL7; eu++) aL9[gL = fW + eu << 2] === aL9[1 + gL] && aL9[gL] === aL9[2 + gL] && (gG++, aL8[2 + gL] = 4);
		ap.a6m = gG
	}, this.aLB = function(aLN, aLO) {
		for (var aL8 = aBi, i = bS.ey, aL7 = i - 1, hd = bS.ez - 1, id = 0, ew = 1; ew < hd; ew++)
			for (var fW = ew * i, eu = 1; eu < aL7; eu++) {
				var eR = 2 + (fW + eu << 2);
				aL8[eR] === aLN && (! function(eR, id, aLN, aLO) {
					var en = 1,
						aL8 = aBi,
						ep = ac.ep,
						a2Z = [eR],
						aLQ = id >> 8 << 1,
						aLR = 255 & id;
					aL8[eR - 2] = aLQ, aL8[eR - 1] = aLR, aL8[eR] = 5;
					for (; en;) {
						for (var a2a = [], aB = 0; aB < en; aB++)
							for (var ec = a2Z[aB], eq = 3; 0 <= eq; eq--) {
								var er = ec + ep[eq];
								aL8[er] === aLN && (aL8[er - 2] = aLQ, aL8[er - 1] = aLR, aL8[er] = aLO, a2a.push(er))
							}
						en = (a2Z = a2a).length
					}
				}(eR, id, aLN, aLO), id = (id + 1) % 32768)
			}
	}, this.aLC = function() {
		for (var aL8 = aBi, i = bS.ey, aL7 = i - 3, hd = bS.ez - 3, aLT = 12 * i, ew = 3; ew < hd; ew++)
			for (var fW = ew * i, eu = 3; eu < aL7; eu++) {
				var eR = 2 + (fW + eu << 2);
				2 !== aL8[eR] || 2 === aL8[eR - 12] && 2 === aL8[12 + eR] && 2 === aL8[eR - aLT] && 2 === aL8[eR + aLT] || (aL8[eR - 2] = 1 | aL8[eR - 2])
			}
	}
}

function a4Y() {
	(y4 = void 0 === y4 ? document.createElement("canvas") : y4).width = bS.ey, y4.height = bS.ez, a4c = y4.getContext("2d", {
		alpha: !0
	}), a4d = aBi = null, a4d = a4c.getImageData(0, 0, bS.ey, bS.ez), aBi = a4d.data, bA.qh.wV(aBi)
}

function ch() {
	var fF, i, j, max, aLU, mk, aLW, aLX, aLY, aLZ, aLa, aLb, aLc, aLd, aLV = 1e4;

	function aLk(aLj, mn, en) {
		var aB;
		for (aLW[0] = aLj, aB = 1; aB < en; aB++) aLW[aB] = aLW[aB - 1] + mn, mn = aLW[aB] >= aLV ? (aLW[aB] = aLV - 1, -mn) : aLW[aB] < 0 ? (aLW[aB] = 0, -mn) : (mn += 16384 <= ay.random() ? mk : -mk) < -aLU ? -aLU : aLU < mn ? aLU : mn
	}

	function aLm(eu, ew, aLn, en) {
		(aLn ? function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB] = aLW[aB]
		} : function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB * i] = aLW[aB]
		})(eu, ew, en)
	}

	function aLq(value, en) {
		var aB, aJW, eR, jQ = value - aLW[en - 1];
		if (0 != jQ) {
			for (aJW = 1 + bL.du(Math.abs(jQ), en - 1), aJW = jQ < 0 ? -aJW : aJW, aLW[en - 1] = value, eR = (eR = en - 1 - bL.du(Math.abs(jQ), Math.abs(aJW))) < 1 ? 1 : en - 2 < eR ? en - 2 : eR, aB = en - 2; eR <= aB; aB--) aLW[aB] += jQ - (en -
				1 - aB) * aJW;
			(jQ < 0 ? function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLW[aB] < 0 && (aLW[aB] = -aLW[aB] - 1)
			} : function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLW[aB] >= aLV && (aLW[aB] = 2 * aLV - aLW[aB] - 1)
			})(en)
		}
	}

	function aLt(a2Z, a2a, en) {
		for (var aB = 0; aB < en; aB++) a2Z[aB] = a2a[aB]
	}

	function aLu(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aLv(a5D, gap, he) {
		aLX.push(a5D), aLY.push(gap), aLZ.push(he)
	}
	this.a7 = function(a3m) {
		! function(a3m) {
			var aB;
			for (i = a3m[0], j = a3m[1], aLU = a3m[2], mk = a3m[3], fF = new Int16Array(i * j), max = j < i ? i : j, aLW = new Int16Array(max), aLX = [], aLY = [], aLZ = [], aLa = new Array(i), aLb = new Array(j), aB = i - 1; 0 <= aB; aB--) aLa[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aLb[aB] = !1;
			aLc = new Int16Array(i), aLd = new Int16Array(j)
		}(a3m),
		function(en) {
			var aLj = ay.random() % aLV,
				mn = ay.random() % (2 * aLU + 1) - aLU;
			aLk(aLj, mn, en)
		}(max), aLt(aLd, aLW, j), aLm(0, 0, !0, i);
		var eu, ew, a3m = fF[0],
			en = max,
			mn = ay.random() % (2 * aLU + 1) - aLU;
		for (aLk(a3m, mn, en), aLt(aLc, aLW, i), aLm(0, 0, !1, j), aLu(aLc), aLu(aLd), aLk(fF[i - 1], aLc[i - 1], j), aLm(i - 1, 0, !1, j), aLk(fF[i * (j - 1)], aLd[j - 1], i), aLq(fF[i * j - 1], i), aLm(0, j - 1, !0, i), aLa[i - 1] = aLa[0] = !
			0, aLb[j - 1] = aLb[0] = !0, aLv(0, i, !0), aLv(0, j, !1), ! function() {
				var aLx, a5D;
				for (;;) {
					if (aLx = function() {
							var aB, aLx = aLX.length - 1;
							for (aB = aLx - 1; 0 <= aB; aB--) aLY[aB] > aLY[aLx] && (aLx = aB);
							return aLx
						}(), aLY[aLx] < 5) return;
					a5D = aLX[aLx] + bL.du(aLY[aLx], 2), (aLZ[aLx] ? function(eu) {
						var en, aM0, aB, aFH = 0,
							aM1 = 0;
						for (; aM1 < j - 1;) {
							for (aB = aFH + 1; aB < j; aB++)
								if (aLb[aB]) {
									aM1 = aB;
									break
								} en = aM1 - aFH + 1, aLk(fF[eu + i * aFH], 0 === aFH ? aLc[eu] : aLW[aM0 - 1] - aLW[aM0 - 2], en), aLq(fF[aM1 * i + eu], en), aLm(eu, aFH, !1, en), aM0 = en, aFH = aM1
						}
						aLa[eu] = !0
					} : function(ew) {
						var en, aM0, aB, aFH = 0,
							aM1 = 0;
						for (; aM1 < i - 1;) {
							for (aB = aFH + 1; aB < i; aB++)
								if (aLa[aB]) {
									aM1 = aB;
									break
								} en = aM1 - aFH + 1, aLk(fF[ew * i + aFH], 0 === aFH ? aLd[ew] : aLW[aM0 - 1] - aLW[aM0 - 2], en), aLq(fF[ew * i + aM1], en), aLm(aFH, ew, !0, en), aM0 = en, aFH = aM1
						}
						aLb[ew] = !0
					})(a5D), aLv(a5D, aLX[aLx] + aLY[aLx] - a5D, aLZ[aLx]), aLY[aLx] = a5D - aLX[aLx] + 1
				}
			}(), eu = 0; eu < i; eu++)
			if (!aLa[eu])
				for (ew = 0; ew < j; ew++) aLb[ew] || ! function(eu, ew) {
					var value = fF[ew * i + eu - 1] + fF[(ew - 1) * i + eu],
						a6x = 2;
					aLa[eu + 1] && (a6x++, value += fF[ew * i + eu + 1]);
					aLb[ew + 1] && (a6x++, value += fF[(ew + 1) * i + eu]);
					fF[ew * i + eu] = bL.du(value, a6x)
				}(eu, ew)
	}, this.aKZ = function() {
		return fF
	}, this.aKG = function() {
		fF = null
	}
}

function aGg(f6, f7) {
	return 0 <= f6 ? bL.du(f6, f7) : -bL.du(-f6, f7)
}

function jh(fF) {
	return fF * fF
}

function a6B(f6, f7) {
	return f7 < f6 ? f6 : f7
}

function aBC(f6, f7) {
	return f6 < f7 ? f6 : f7
}

function a8Y(f6, fF, f7) {
	return fF < f6 ? f6 : f7 < fF ? f7 : fF
}

function aM3(fF, en) {
	for (var f8 = bL.du(fF + 1, 2), aB = 0; aB < en; aB++) f8 = bL.du(f8 + bL.du(fF, f8), 2);
	return f8
}

function aI2(fF, en) {
	return fF < 1 ? 0 : aM3(fF, en)
}

function aM4(n8, n9, su, a8H, nL, nM, sv, tc) {
	return !(n8 + su <= nL || n9 + a8H <= nM || nL + sv <= n8 || nM + tc <= n9)
}

function aM5(n8, n9, su, a8H, nL, nM, sv, tc) {
	return n8 <= nL && n9 <= nM && nL + sv <= n8 + su && nM + tc <= n9 + a8H
}

function wM(fF) {
	return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
}

function bx() {
	this.du = function(f6, f7) {
		return Math.floor((f6 + .5) / f7)
	}, this.aM6 = function(f6, f7) {
		return Math.floor(f6 * (f7 + .5))
	}, this.sqrt = function(fF) {
		return ~~Math.sqrt(fF + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.hv = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aM7 = function(fW, fY, fa) {
		return Math.max(Math.min(fW, fY), fa)
	}, this.aM8 = function(aM9, aMA, eu, ew) {
		eu -= aM9, aM9 = ew - aMA, ew = 0;
		return 0 == eu ? ew = 0 <= aM9 ? Math.PI : 0 : (ew = Math.atan(aM9 / eu), ew += 0 < eu ? .5 * Math.PI : 1.5 * Math.PI), ew
	}, this.log2 = function(fF) {
		return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
	}, this.log10 = function(fF) {
		return Math.floor(Math.log10(fF + .5))
	}, this.aMC = function(aMD, aME, aMF, aMG, aMH) {
		return aMF - aMH < aMD && aMD < aMF + aMH && aMG - aMH < aME && aME < aMG + aMH
	}, this.xJ = function(a8y, a90) {
		return a8y * a8y + a90 * a90
	}
}

function dD() {
	this.y = new aMI, this.sn = 0;
	var aMJ = new Array(31);

	function aMN() {
		for (var en = aMJ.length, aB = 0; aB < en; aB++) aMJ[aB] = null
	}
	this.dd = function() {
		for (var aMK, aML = document.body.firstChild; aML;) {
			if (aMK = aML.nextSibling, document.body.contains(aML) && ("DIV" === aML.tagName || "INPUT" === aML.tagName || "BUTTON" === aML.tagName)) try {
				document.body.removeChild(aML)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aML = aMK
		}
	}, this.u = function(e8, aMM, a3m) {
		void 0 === aMM && (aMM = this.sn), bf.dl = !0, 0 === e8 && (0 === aa.a17() ? e8 = 5 : a0.a1.setState(13)), this.rq(), this.sn === e8 && (aMM = aMJ[e8].aMM, aMJ[e8] = null), this.sn = e8;
		var l3 = aMJ[e8];
		if (!l3 || 4 === e8 || 7 === e8 || 8 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 15 === e8 || 18 === e8 || 20 <= e8 && e8 <= 28 || 32 === e8 || 33 === e8) {
			if (0 === e8) return void aMN();
			1 === e8 ? l3 = new aMO : 2 === e8 ? l3 = new aMP : 3 === e8 ? l3 = new aMQ : 4 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 33 === e8 ? l3 = a3m : 5 === e8 ? l3 = new aMR : 6 === e8 ? l3 = new aMS : 7 === e8 ? l3 =
				new aMT(t.y.aMU) : 8 === e8 ? l3 = a3m : 12 === e8 ? l3 = new aMV : 14 === e8 ? l3 = new aMW : 15 === e8 ? l3 = new aMT(t.y.aMX) : 16 === e8 ? l3 = new aMY : 17 === e8 ? l3 = new aMZ : 18 === e8 ? l3 = new aMa : 19 === e8 ? l3 =
				new aMb : 20 === e8 ? l3 = new aMc : 21 === e8 ? l3 = new aMd : 22 === e8 ? l3 = new aMe : 23 === e8 ? l3 = new aMf : 24 === e8 ? l3 = new aMg : 25 === e8 ? l3 = new aMh : 26 === e8 ? l3 = new aMi : 27 === e8 ? l3 = new aMj :
				28 === e8 ? l3 = new aMk : 29 === e8 ? l3 = new aMl : 30 === e8 && (l3 = new aMm), l3.aMM = aMM, aMJ[e8] = l3
		}
		l3.show(a3m)
	}, this.a16 = function() {
		this.hZ() && this.aMn(this.a4x().aMM)
	}, this.aMn = function(e8) {
		this.hZ() && (aMJ[e8] ? (this.rq(), bf.dl = !0, this.sn = e8, aMJ[e8].show()) : this.u(e8))
	}, this.rq = function() {
		this.hZ() && aMJ[this.sn].rq()
	}, this.x = function() {
		this.hZ() && (aMJ[this.sn].rq(), aMN(), this.sn = 0, a0.a1.setState(13))
	}, this.uf = function() {
		var l3;
		this.hZ() && (l3 = aMJ[this.sn]).uf && l3.uf()
	}, this.resize = function() {
		if (!this.hZ()) return !1;
		aMJ[this.sn].resize()
	}, this.h0 = function(eu, ew) {
		var l3;
		this.hZ() && (l3 = aMJ[this.sn]).h0 && l3.h0(eu, ew)
	}, this.a1Q = function(eu, ew) {
		var l3;
		this.hZ() && (l3 = aMJ[this.sn]).a1Q && l3.a1Q(eu, ew)
	}, this.a1r = function() {
		var l3;
		this.hZ() && (l3 = aMJ[this.sn]).a1r && l3.a1r()
	}, this.a1T = function(lN, lO, deltaY) {
		var l3;
		this.hZ() && (l3 = aMJ[this.sn]).a1T && l3.a1T(lN, lO, deltaY)
	}, this.a21 = function(code) {
		var l3;
		return !!this.hZ() && ((l3 = aMJ[this.sn]).a21 && l3.a21(code), !0)
	}, this.j3 = function() {
		var l3;
		this.hZ() && (l3 = aMJ[this.sn]) && l3.j3 && l3.j3()
	}, this.hZ = function() {
		return 0 < this.sn
	}, this.a4x = function() {
		return aMJ[this.sn]
	}, this.a4y = function(e8) {
		return aMJ[e8]
	}, this.aMo = function() {
		return aMJ
	}
}

function aMT(data) {
	var aMp, aMq;
	this.show = function() {
		data.aMr && bI.aNi("account", data.sl), aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a16()
	}), new w(data.aMr ? "🔄 " + L(154) : L(155), function() {
		t.u(8, t.a4x().aMM, new so(25, {
			sp: 0,
			sl: data.sl,
			sm: data.sm
		}))
	}, 0, 0, 1)]), aMq = new qS(aMp.uW, function() {
		var qU = [];
		qU.push(function() {
				var aN8 = new qC,
					rM = (aN8.qF(L(204)), new rN({
						value: data.username,
						e8: -1
					}));
				rM.e.readOnly = !0, aN8.qQ(rM), aN8.qQ(new s3([new w(L(173), function(e) {
					return bA.qZ.a3F(rM.e), bA.qZ.a3G(e), !0
				}).button])), data.aMr || aN8.qH(L(205));
				return aN8
			}()),
			function(qU) {
				var aN8, qI, aBw, aNR, aNH;
				data.aMr || ((aN8 = new qC).qF(L(206)), (qI = aN8.qH(data.aNQ.length + " / 160")).style.textAlign = "center", aBw = !0, (aNR = new uo(0, 1, function(e) {
					e = e.target.value.length;
					qI.textContent = e + " / 160", 160 < e ? aBw && (aBw = !1, aNH.qt(1), aNH.button.style.color = bB.ni) : aBw || (aBw = !0, aNH.qt(0), aNH.button.style.color = bB.og)
				})).e.rows = 6, aNR.e.style.fontSize = "1em", aNR.uv(data.aNQ), aN8.qQ(aNR), aNH = new w(L(207), function() {
					if (!aBw) return !0;
					t.u(8, t.a4x().aMM, new so(29, {
						sp: 1,
						qG: aNR.ux().substring(0, 160)
					}))
				}, 0, 0, 1), aN8.qQ(new s3([aNH.button])), 0 !== data.aNS && (aN8.qQ(new s3([new w(L(1 === data.aNS ? 209 : 210), function() {
					t.u(8, t.a4x().aMM, new so(29, {
						sp: 0,
						qG: ""
					}))
				}, 0, 0, 1).button])), aN8.qH(1 === data.aNS ? L(211, [data.aNU - 1]) : L(212, [data.aNU - 1]))), aN8.qH(L(208, [data.aNT])), qU.push(aN8))
			}(qU),
			function(qU) {
				var aN8;
				data.aMr && 0 !== data.aNS && ((aN8 = new qC).qF(L(213)), aN8.qJ(data.aNQ), aN8.qQ(new s3([new w(L(214, 0, "Report"), function(e) {
					return b0.y.aND(0) && (bA.qZ.a3G(e), b0.aNF.aNV({
						sp: 5,
						sl: data.sl
					})), !0
				}, 0, 0, 1).button])), qU.push(aN8))
			}(qU), qU.push(function() {
				var aN8 = new qC,
					aN9 = (aN8.qF(L(156)), [L(157), L(158), L(159), L(160), L(161)]),
					e7 = data.aNA;
				aN8.qL(L(162) + bA.rY.a43(data.vj, .01, 2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vi + "<br>" + L(164) + aN9[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : e7 < 1e3 ? 3 : 4]), data.aMr || (aN8.qH(L(165)), aN8.qH(L(166)),
					aN8.qH(L(167)));
				return aN8
			}()), data.aMr && qU.push(function() {
				var aN8 = new qC,
					rM = (aN8.qF(L(168)), new rN({
						value: bj.eK.data[147].value,
						e8: -1
					}, 1, void 0, function(e) {
						bj.s0.s1(147, aNB(e.target.value))
					})),
					aNC = (aN8.qQ(rM), new w(L(14), function(e) {
						return rM.e.readOnly && b0.y.aND(0) && (bA.qZ.a3G(e), aNE(), b0.aNF.aNG({
							sp: 0,
							sl: data.sl,
							value: parseInt(bj.eK.data[147].value, 10)
						})), !0
					}, 1)),
					aNH = new w(L(169), function(e) {
						return e.textContent === L(169) ? (e.textContent = L(170), rM.e.readOnly = !0, aNC.qt(0), aNC.button.style.color = bB.og, bj.s0.s1(147, rM.e.value), aNB(bj.eK.data[147].value)) : aNE(), !0
					}),
					qI = (aN8.qQ(new s3([aNH.button])), aN8.qH()),
					aNB = function(fF) {
						fF = bA.g9.a3j(fF, 2, 1e6);
						var aNI = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
						qI.textContent = L(171, [fF, bj.eK.data[105].value, aNI, data.sl, fF - aNI])
					},
					aNE = function() {
						aNH.button.textContent = L(169), rM.e.readOnly = !1, aNC.qt(1), aNC.button.style.color = bB.ni
					};
				return aNB(bj.eK.data[147].value), aN8.qQ(new s3([aNC.button])), aN8
			}());
		qU.push(function() {
			var aN8 = new qC,
				rM = (aN8.qF(L(172)), new rN({
					value: data.sl,
					e8: -1
				}));
			return rM.e.readOnly = !0, aN8.qQ(rM), aN8.qQ(new s3([new w(L(173), function(e) {
				return bA.qZ.a3F(rM.e), bA.qZ.a3G(e), !0
			}).button])), aN8
		}()), data.aMr || (qU.push(function() {
			var aN8 = new qC,
				aNJ = (aN8.qF(L(174)), new rN(bj.eK.data[106]));
			return aNJ.e.readOnly = !0, aNJ.e.type = "password", aN8.qQ(aNJ), aN8.qQ(new s3([new w(L(175), function(e) {
				return e.textContent === L(175) ? (e.textContent = L(176), aNJ.e.type = "text") : (e.textContent = L(175), aNJ.e.type = "password"), !0
			}).button, new w(L(173), function(e) {
				return bA.qZ.a3F(aNJ.e), bA.qZ.a3G(e), !0
			}).button])), aN8.qQ(new s3([new w(L(177), function() {
				t.u(8, t.a4x().aMM, new so(15))
			}).button])), aN8.qF(L(178), "0.8em"), aN8.qH(L(179)), aN8.qH(L(180)), aN8.qH(L(181)), aN8
		}()), qU.push(function() {
			var aN8 = new qC;
			return aN8.qF(L(182)), aN8.qQ(new s3([new w(L(183), function() {
				t.u(6, t.a4x().aMM)
			}).button])), aN8.qQ(new s3([new w(L(184), function() {
				bj.s0.s1(105, ""), t.u(8, t.a4x().aMM, new so(18))
			}).button])), aN8.qQ(new s3([new w(L(185) + bj.eK.data[105].value, function() {
				t.u(4, 0, new v(L(186), L(187), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a4y(7).aMM)
				})]))
			}, bB.oN).button])), aN8
		}()), qU.push(function() {
			function aNL(e8) {
				for (var aB = 0; aB < 2; aB++) aNK[aB].qt(0 === e8 ? bB.nu : 0 === aB ? bB.oN : bB.o5)
			}
			var qO, aNK, aN8 = new qC;
			aN8.qF(L(188)), aN8.qH(L(189)), bj.y.vT();
			return aNK = [new w(L(190), function() {
				var e8 = Math.min(bj.eK.data[117].value, qO.qP.length - 1);
				if (!(e8 < 1)) {
					qO.qP[e8].remove(), qO.qP.splice(e8, 1);
					for (var aB = e8; aB < qO.qP.length; aB++) qO.qP[aB].name = "" + aB;
					bj.y.vW(e8), e8 = bj.eK.data[117].value, qO.qP[e8].textContent = qO.qP[e8].textContent.replace("⚪", "🟢"), aNL(e8)
				}
			}, bB.nu), new w(L(191), function() {
				var e8 = Math.min(bj.eK.data[117].value, qO.qP.length - 1);
				e8 < 1 || (e8 = bj.y.vX(e8), bj.s0.s1(105, e8.sl), bj.s0.s1(106, e8.password), t.u(8, t.a4x().aMM, new so(18)))
			}, bB.nu)], (qO = new uL(bj.eK.data[117], aNL)).qP[0].style.marginTop = "0.5em", aN8.qN(qO), aN8.qQ(new s3([aNK[1].button])), aN8.qQ(new s3([aNK[0].button])), aN8
		}()));
		return qU.push(function() {
				var aN8 = new qC,
					aN9 = (aN8.qF(L(195)), [L(196), L(197), L(198), L(199)]),
					e7 = data.aNM;
				return aN8.qL(L(200) + (data.a0N / 100).toFixed(2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vi + "<br>" + L(164) + aN9[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : 3]), aN8
			}()), qU.push(function() {
				var aN8 = new qC;
				return aN8.qF(L(192)), aN8.qL(L(193) + bA.rY.a43(data.vf, .1, 1) + "<br>" + L(163) + (data.vg + 1) + " / " + data.vi + "<br>" + L(194) + data.vh), aN8
			}()),
			function(qU) {
				var aN8 = new qC,
					aNW = data.vm,
					aNX = (aN8.qF(L(215)), aN8.qL(L(216, [data.vk.length ? "[" + data.vk + "]" : "-"])), aN8.qL(L(217, [bA.rY.a43(aNW, .01, 2)])), aN8.qL(L(218, [data.vo + 1 + " / " + data.vi])), data.vp),
					aNY = (aN8.qL(L(219, [bA.rY.a43(aNX, .1, 1)])), data.vr);
				aN8.qL(L(220, [aNY])), aN8.qL(L(221, [bA.rY.a43(aNX / Math.max(aNY, 1), .1, 2)])), aNW = data.vn, aN8.qF(L(222), "0.8em"), aN8.qL(L(216, [data.vl.length ? "[" + data.vl + "]" : "-"])), aN8.qL(L(217, [bA.rY.a43(aNW, .01, 2)])),
					aNX = data.vq, aN8.qL(L(219, [bA.rY.a43(aNX, .1, 1)])), aNY = data.vs, aN8.qL(L(220, [aNY])), aN8.qL(L(221, [bA.rY.a43(aNX / Math.max(aNY, 1), .1, 2)])), data.aMr || (aN8.qH(L(223)), aN8.qH(L(224)));
				qU.push(aN8)
			}(qU),
			function(qU) {
				var aN8 = new qC;
				aN8.qF(L(225)), aN8.qL(L(200) + (data.aNZ / 10).toFixed(1) + "<br>" + L(164) + (data.aNa.length ? L(226, [data.aNa]) : L(227))), data.aMr ? (aN8.qQ(new s3([new w(L(228), function(e) {
					return b0.y.aND(0) && (bA.qZ.a3G(e), b0.aNF.aNV({
						sp: 4,
						sl: data.sl
					})), !0
				}, 0, 0, 1).button])), aN8.qH(L(229)), aN8.qH(L(230))) : aN8.qH(L(231));
				qU.push(aN8)
			}(qU), qU.push(function() {
				var aN8 = new qC;
				if (aN8.qF(L(201)), aN8.qL(L(202) + data.aNN + "<br>" + L(163) + (data.aNO + 1) + " / " + data.vi + "<br>" + L(164) + bo.eA(data.aNO)), data.aMr) {
					var rM = new rN({
							value: bj.eK.data[157].value,
							e8: -1
						}, 1, void 0, function(e) {
							bj.s0.s1(157, aNB(e.target.value))
						}),
						aNH = (rM.e.style.marginTop = "0.6em", aN8.qQ(rM), new w(L(169), function(e) {
							return e.textContent === L(169) ? (e.textContent = L(170), rM.e.readOnly = !0, aNP[0].qt(0), aNP[1].qt(0), aNP[0].button.style.color = bB.og, aNP[1].button.style.color = bB.og, aNB(bj.eK.data[157]
								.value)) : aNE(), !0
						})),
						aNP = (aN8.qQ(new s3([aNH.button])), [new w("−", function(e) {
							return rM.e.readOnly && b0.y.aND(0) && (bA.qZ.a3G(e), aNE(), b0.aNF.aNG({
								sp: 2,
								sl: data.sl,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rM.e.readOnly && b0.y.aND(0) && (bA.qZ.a3G(e), aNE(), b0.aNF.aNG({
								sp: 1,
								sl: data.sl,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qI = aN8.qH(),
						aNB = function(fF) {
							return fF = bA.g9.a3j(fF, 3, 32767), qI.textContent = L(203, [fF - 1, fF, bj.eK.data[105].value]), fF
						};
					aN8.qQ(new s3([aNP[0].button, aNP[1].button]));
					for (var aB = 0; aB < 2; aB++) aNP[aB].button.style.fontSize = "1.6em";
					var aNE = function() {
						aNH.button.textContent = L(169), rM.e.readOnly = !1, aNP[0].qt(1), aNP[1].qt(1), aNP[0].button.style.color = bB.ni, aNP[1].button.style.color = bB.ni
					};
					aNB(bj.eK.data[157].value)
				}
				return aN8
			}()),
			function(qU) {
				var aN8, a3E;
				data.aMr && !data.aNb || (0 === a0.id || data.aMr || data.aNb) && ((aN8 = new qC).qF("Patreon"), !data.aMr && data.aNc ? aN8.qQ(new s3([new w(L(175), function() {
					b0.aNF.aNV({
						sp: 7,
						sl: data.sl
					}), data.aNc = 0, t.u(7)
				}).button])) : data.aNb ? (aN8.qL(L(232, [(data.aNd / 100).toFixed(2)]) + "<br>" + L(233, [1 + data.aNe + " / " + data.aNf]) + "<br>" + L(234, [data.aNg ? L(235) : L(236)])), data.aMr || aN8.qQ(new s3([new w(L(237),
					function() {
						b0.aNF.aNV({
							sp: 8,
							sl: data.sl
						}), data.aNb = 0, bj.s0.s1(160, 0), t.u(7)
					}).button]))) : (aN8.qL(L(238), "0.75em").style.marginBottom = "0.3em", aN8.qL("  • " + L(239), "0.75em").style.whiteSpace = "pre", aN8.qL("  • " + L(240), "0.75em").style.whiteSpace = "pre", aN8.qL("  • " + L(
						241), "0.75em").style.whiteSpace = "pre", aN8.qL(L(242), "0.75em").style.marginTop = "1.0em", aN8.qL(L(243), "0.75em").style.marginTop = "1.0em", aN8.qL("<a href='" + bK.aNh +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3E = "https://www.patreon.com/oauth2/authorize?state=" + data.sl +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aN8.qL(L(244), "0.75em").style.marginTop = "1.0em", aN8.qL("<a href='" + a3E +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aMr || (aN8.qQ(new sD), aN8.qQ(new s3([new w(L(176), function() {
						b0.aNF.aNV({
							sp: 6,
							sl: data.sl
						}), data.aNc = 1, t.u(7)
					}).button])), aN8.qL(L(245), "0.75em").style.marginTop = "0.75em")), qU.push(aN8))
			}(qU), qU
	}())
}

function aMe() {
	var aNj, aNk, aNl, qU;

	function aNm() {
		aNo(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		2 === aD.data.aIncomeType ? (bA.qh.a2d(aNl.ux(), aD.data.aIncomeData, 255), bA.qh.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(246), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), aN8.qN(new uL({
			uP: [L(248), L(249), L(250)],
			value: aD.data.aIncomeType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ek)), aD.data.aIncomeType = e8, t.u(22)
		})), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8;
		1 === aD.data.aIncomeType && ((aN8 = new qC).qF("Value"), aN8.qQ(new rN({
			e8: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qU.push(aN8))
	}(qU), function(qU) {
		var aN8;
		2 === aD.data.aIncomeType && ((aN8 = new qC).qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.aIncomeData, 4)), aN8.qQ(aNl), qU.push(aN8))
	}(qU), qU))
}

function aMh() {
	var aNj, aNk, aNl;

	function aNm() {
		aNo(), 3 !== aD.data.botDifficultyType || bA.qh.a2R(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		3 === aD.data.botDifficultyType && bA.qh.a2d(aNl.ux(), aD.data.botDifficultyData, aE.kL.length - 1)
	}

	function aNt(qU, e8) {
		var aN8 = new qC,
			value = (aN8.qF(e8 < 0 ? L(62) : L(61) + " " + bg.a0H[e8 % 9]), 0 <= e8 && (aN8.qL(L(253) + ": " + aD.data.teamPlayerCount[e8]).style.marginBottom = "1em"), e8 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e8]);
		aN8.qN(new uL({
			uP: aE.kL,
			value: value
		}, function(hf) {
			e8 < 0 ? aD.data.botDifficultyValue = hf : aD.data.botDifficultyTeam[e8] = hf
		})), qU.push(aN8)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(62), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, function() {
		var qU = [];
		if (function(qU) {
				var aN8 = new qC,
					uP = (aN8.qF(L(247)), [L(249), L(251), L(252), L(250)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uP.splice(2, 1));
				aN8.qN(new uL({
					uP: uP,
					value: value
				}, function(e8) {
					aNo(), aD.data.botDifficultyType = e8, 0 === aD.data.gameMode && 2 === e8 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ek)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qU.push(aN8)
			}(qU), 0 === aD.data.botDifficultyType) aNt(qU, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aNt(qU, aB);
		else 3 === aD.data.botDifficultyType && ! function(qU) {
			var aN8 = new qC;
			aN8.qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.botDifficultyData, 8)), aN8.qQ(aNl), qU.push(aN8)
		}(qU);
		return qU
	}())
}

function aNu(data) {
	var aMp, aNv, aNw, aNx, aNy, aNz, aO0, colors, aO1, aO2, aO3 = 0,
		aO4 = 0,
		aO5 = !1,
		aO6 = !1,
		aO7 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aOb(lN, lO) {
		! function(lN, lO) {
			return aNv < lN && lN < aNv + aNx && aNw < lO && lO < aNw + aNy
		}(aO3 = lN, aO4 = lO) ? (aO5 && (bf.dl = !0), aO5 = !1) : (aO5 = !0, bf.dl = !0)
	}
	this.show = function() {
		aO6 = bj.eK.data[127].value, aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize();
		var f8 = h.k,
			ue = aMp.ub(),
			aOG = f8 * ue.ud,
			f8 = f8 * ue.rt;
		aNz = bA.qZ.tC(.06), aO0 = bA.qZ.tC(.04), aNv = bA.qZ.tC(.06), aNw = f8 + aNz, aNx = h.i - aNv - aO0, aNy = aOG + f8 - aNw - aO0
	}, this.uf = function() {
		aMp.uf(),
			function() {
				var aB, aOD, gG, eu, f6, g = data.data,
					aOK = 1,
					aOL = .125,
					aOM = aO6 ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aOD = g[aB].aOD, gG = aOD.length, aOK = Math.max(gG, aOK), f6 = 0; f6 < gG; f6++) aOL = Math.max(aOD[f6], aOL), aOM = Math.min(aOD[f6], aOM);
				var n9 = aNw + aNy,
					xs = aNy / (aOL - aOM),
					xr = 1 / (aOK - 1);
				for (ug.lineWidth = bc.yu, aB = 0; aB < g.length; aB++) {
					for (aOD = g[aB].aOD, gG = aOD.length, eu = aNv, ug.beginPath(), ug.moveTo(eu + aNx, n9 - xs * (aOD[gG - 1] - aOM)), f6 = gG - 2; 0 <= f6; f6--) ug.lineTo(eu + xr * f6 * aNx, n9 - xs * (aOD[f6] - aOM));
					ug.strokeStyle = colors[aB], ug.stroke()
				}(function(aOM, aOL, n9, xs) {
					ug.font = bA.qZ.sN(0, .25 * aNv), bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 2), ug.fillStyle = colors[0];
					for (var eu = .92 * aNv, aB = 0; aB < 3; aB++) {
						var fF = aOM + aB * (aOL - aOM) / 2;
						ug.fillText((fF / 1e3).toFixed(3), eu, n9 - xs * (fF - aOM))
					}
				})(aOM, aOL, n9, xs),
				function(aOK) {
					var ew = aNw + aNy + .15 * aO0;
					ug.font = bA.qZ.sN(0, Math.min(.4 * aO0, .028 * h.i)), bA.qZ.textBaseline(ug, 0), bA.qZ.textAlign(ug, 2), ug.fillStyle = colors[0], ug.fillText(bA.a2I.a35(aO1), aNv + aNx, ew), bA.qZ.textAlign(ug, 0), ug.fillText(bA.a2I.a35(
						new Date(aO2.getTime() - 6e4 * (aOK - 1) * aO7[data.aOC])), aNv, ew)
				}(aOK),
				function(aOK, aOM, aOL) {
					if (aO5 && !(aOK < 2)) {
						for (var a8P, e8 = (aO3 - aNv) / aNx * (aOK - 1), aOP = Math.floor(e8), aOQ = Math.floor(1 + e8), aOR = e8 - aOP, aOS = 1e5, aOT = -1, aOU = -1, aOV = aOL - (aOL - aOM) * (aO4 - aNw) / aNy, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aC8, aOD = g[aB].aOD;
							aOD.length <= aOQ || (aOD = aOD[aOP] + aOR * (aOD[aOQ] - aOD[aOP]), (aC8 = Math.abs(aOV - aOD)) < aOS && (aOS = aC8, aOT = aB, aOU = aOD))
						} - 1 !== aOT && (aOL = aNw + aNy - (aOU - aOM) / (aOL - aOM) * aNy, ug.lineWidth = .5 * bc.yu, ug.strokeStyle = colors[aOT], ug.beginPath(), ug.moveTo(aNv, aOL), ug.lineTo(aO3, aOL), ug.lineTo(aO3, aNw + aNy), ug
						.stroke(), ug.beginPath(), ug.arc(aO3, aOL, .1 * aNv, 0, 2 * Math.PI), ug.fillStyle = colors[aOT], ug.fill(), aOM = aNw + aNy + .15 * aO0, bA.qZ.textAlign(ug, 1), a8P = aOK - 2 < e8 ? (a8P = aO2.getTime() - 6e4 * aO7[
								data.aOC], new Date(a8P + (e8 - (aOK - 2)) * (aO1.getTime() - a8P))) : new Date(aO2.getTime() - 6e4 * (aOK - e8 - 1) * aO7[data.aOC]), aOK = bA.a2I.a35(a8P), e8 = bA.qZ.measureText(aOK), a8P = bL.hv(aO3, aNv +
								.5 * e8, aNv + aNx - .5 * e8), ug.fillStyle = bA.color.na(70, 50, 20), ug.fillRect(a8P - .52 * e8, aNw + aNy, 1.04 * e8, .55 * aO0), ug.fillStyle = colors[0], ug.fillText(aOK, a8P, aOM), ug.font = bA.qZ.sN(0,
								.25 * aNv), bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 2), a8P = .92 * aNv, aOK = (aOU / 1e3).toFixed(3), e8 = bA.qZ.measureText(aOK), aOM = a8P - 1.04 * e8, ug.fillStyle = bA.color.na(70, 50, 20), ug
							.fillRect(aOM, aOL - .1625 * aNv, aNv - aOM, .275 * aNv), ug.fillStyle = colors[aOT], ug.fillText(aOK, a8P, aOL))
					}
				}(aOK, aOM, aOL)
			}(), ug.lineWidth = bc.yu, ug.strokeStyle = bB.ni, ug.beginPath(), ug.moveTo(aNv, aNw), ug.lineTo(aNv, aNw + aNy), ug.lineTo(aNv + aNx, aNw + aNy), ug.stroke();
		var aB, fontSize = .5 * aNz,
			g = (ug.font = bA.qZ.sN(0, fontSize), bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 0), data.data),
			en = g.length,
			ew = aNw - .5 * aNz,
			qG = "";
		for (aB = 0; aB < en; aB++) qG += g[aB].name + "  ";
		qG = qG.trim();
		var aOY = bA.qZ.measureText(qG),
			eu = .5 * (h.i - aOY);
		for (aOY > h.i && (eu = 0, ug.font = bA.qZ.sN(0, h.i / aOY * fontSize)), aB = 0; aB < en; aB++) ug.fillStyle = colors[aB], ug.fillText(g[aB].name, eu, ew), eu += bA.qZ.measureText(g[aB].name + "  ")
	}, this.h0 = function(lN, lO) {
		aOb(lN, lO)
	}, this.a1Q = function(lN, lO) {
		aOb(lN, lO)
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	};
	var aB, dt, a33, hf, eq = data.data,
		en = eq.length,
		max = 1;
	for (aB = 0; aB < en; aB++) max = Math.max(max, eq[aB].aOD.length);
	for (aB = 0; aB < en; aB++)
		for (; eq[aB].aOD.length < max;) eq[aB].aOD.unshift(0);
	dt = new Date, a33 = 6e4 * dt.getTimezoneOffset(), hf = dt.getTime() - a33, aO1 = new Date(hf), 6 === data.aOC ? function(dt, a33) {
		var aOF = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aO2 = dt < 12 ? new Date(Date.UTC(aOF, dt) - a33) : new Date(Date.UTC(aOF + 1, 0) - a33)
	}(dt, a33) : (a33 = 6e4 * aO7[data.aOC], aO2 = data.aOC <= 4 ? new Date(hf + a33 - dt.getTime() % a33) : new Date(hf + a33 - (dt.getTime() + 2592e5) % a33)), hf = bA.color, colors = [bB.ni, hf.na(255, 0, 0), hf.na(0, 200, 0), hf.na(80, 80,
		255), hf.na(255, 255, 0), hf.na(255, 0, 255), hf.na(0, 255, 255), hf.na(255, 140, 0), hf.na(128, 128, 128), hf.na(0, 255, 140)], aMp = new uQ(L(254) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aOC] + ", " + bA.a2I.a32(aO1), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(255), function() {
			t.u(14)
		})
	], !1)
}

function aMW() {
	var aMp, aMq, qU;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(L(256), [new w("⬅️ " + L(37), function() {
		t.aMn(13)
	})]), aMq = new qS(aMp.uW, ((qU = []).push(function() {
		var aN8 = new qC,
			aNH = (aN8.qF(L(257)), aN8.qH(L(258)), new w(L(259), function() {
				bj.s0.s1(130, 0), t.y.aOg()
			}, 0, 0, 1)),
			rM = new rN(bj.eK.data[126], 0, function() {
				aNH.button.click()
			});
		return aN8.qQ(rM), rM.e.placeholder = "a,b,c", rM.e.style.marginTop = "0.5em", aN8.qQ(new s3([aNH.button])), aN8
	}()), qU.push(function() {
		var aN8 = new qC,
			aNH = new w(L(259), function() {
				bj.s0.s1(130, 1), t.y.aOg()
			}, 0, 0, 1),
			aOh = new rN(bj.eK.data[129], 1, function() {
				aOh.e.focus()
			}),
			aOi = new rN(bj.eK.data[128], 1, function() {
				aNH.button.click()
			});
		return aN8.qF(L(260)), aN8.qQ(aOi), aOi.e.style.marginBottom = "0.5em", aN8.qF(L(261)), aN8.qQ(aOh), aN8.qQ(new s3([aNH.button])), aN8
	}()), qU.push(function() {
		var aN8 = new qC;
		return aN8.qF(L(262)), bj.eK.data[125].uP = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aN8.qN(new uL(bj.eK.data[125])), aN8
	}()), qU.push(function() {
		var aN8 = new qC;
		return aN8.qF(L(263)), aN8.qQ(new rx(bj.eK.data[127], L(264))), aN8
	}()), qU))
}

function aMV() {
	var aMp, aOj, aNx, aOk, aOl, aOm, colors = [0, 0, 0],
		aOn = -1;

	function aOq(aB) {
		var aOr = aOj.ew + aB * (bc.gap + aOm);
		ug.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", ug.fillRect(aOk, aOr, colors[aB] * aOl, aOm), ug.strokeStyle = bB.ni, ug.strokeRect(aOk, aOr, aOl,
			aOm), ug.fillStyle = bB.ni, ug.font = bA.qZ.sN(0, .32 * aOm), bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 0), ug.fillText(L(0 === aB ? 267 : 1 === aB ? 268 : 269) + aOo(aB), aOk + bc.gap, aOr + .53 * aOm)
	}

	function aOo(aB, aOs) {
		return aOs = aOs || 256, bL.hv(Math.floor(aOs * colors[aB]), 0, aOs - 1)
	}

	function a1x(lN, lO) {
		return !(lN < aOk || lO < aOj.ew || lN > aOj.eu + aOj.i || lO > aOj.ew + aOj.j)
	}
	this.show = function() {
		var fF = bj.eK.data[121].value;
		colors[0] = (fF >> 12) / 63, colors[1] = (fF >> 6 & 63) / 63, colors[2] = (63 & fF) / 63, aMp.show(), this.resize()
	}, this.rq = function() {
		bj.s0.s1(121, (aOo(0, 64) << 12) + (aOo(1, 64) << 6) + aOo(2, 64)), aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aOj.resize();
		var f8 = h.k,
			ue = aMp.ub(),
			aOp = (aOj.ew = Math.max(aOj.ew, f8 * ue.rt + bc.gap), f8 * ue.ud - 2 * bc.gap);
		aOj.j = Math.min(aOj.j, aOp), aOj.i = 2 * aOj.j, aOj.ew = f8 * ue.rt + .5 * (f8 * ue.ud - aOj.j), aOj.eu = .5 * (h.i - aOj.i), aNx = .25 * aOj.i, aOk = aOj.eu + aNx + bc.gap, aOl = aOj.i - aNx - bc.gap, aOm = (aOj.j - 2 * bc.gap) / 3
	}, this.uf = function() {
		var e7, tB, f7;
		aMp.uf(), ug.lineWidth = bc.yu, e7 = aOo(0), tB = aOo(1), f7 = aOo(2), ug.fillStyle = "rgb(" + e7 + "," + tB + "," + f7 + ")", ug.fillRect(aOj.eu, aOj.ew, aNx, aOj.j), ug.strokeStyle = bB.ni, ug.strokeRect(aOj.eu, aOj.ew, aNx, aOj.j), ug
			.fillStyle = e7 + tB + f7 < 306 && tB < 150 ? bB.ni : bB.nZ, bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 1), ug.font = bA.qZ.sN(0, .1 * aOj.j), ug.rotate(-Math.PI / 2), ug.fillText(L(266), -aOj.ew - .5 * aOj.j, aOj.eu + .5 * aNx),
			ug.setTransform(1, 0, 0, 1, 0, 0), aOq(0), aOq(1), aOq(2)
	}, this.h0 = function(lN, lO) {
		a1x(lN, lO) && (aOn = bL.hv(Math.floor((lO - aOj.ew) / (aOm + .75 * bc.gap)), 0, 2), colors[aOn] = bL.hv((lN - aOk) / aOl, 0, 1), bf.dl = !0)
	}, this.a1Q = function(lN) {
		-1 !== aOn && (colors[aOn] = bL.hv((lN - aOk) / aOl, 0, 1), bf.dl = !0)
	}, this.a1T = function(lN, lO, deltaY) {
		a1x(lN, lO) && (lN = bL.hv(Math.floor((lO - aOj.ew) / (aOm + .75 * bc.gap)), 0, 2), colors[lN] = bL.hv(colors[lN] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a1r = function() {
		0 <= aOn && (aOn = -1, bf.dl = !0)
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(L(265), [new w("⬅️ " + L(37), function() {
		t.y.aC2()
	})], !1), aOj = new rA([.5, .25], [.5, .5], 1)
}

function aMd() {
	var aNj, aNk, aNl, r8;

	function aNm() {
		aNo(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aMo()[19] = null, t.a16()
	}

	function aOt() {
		aNo(), t.u(21)
	}

	function aNo() {
		1 === aD.data.gameMode ? aD.a4Q.a4V() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qh.a2d(aNl.ux(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, r8 = [new w("⬅️ " + L(37), aNm)], 1 === aD.data.gameMode && r8.push(new w(L(270), aOt, 1, 1)), aNj = new uQ(L(271), r8), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), 0 === aD.data.gameMode && (aN8.qN(new uL({
			uP: [L(272), L(250)],
			value: aD.data.colorsType
		}, function(e8) {
			aNo(), aD.data.colorsType = e8, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ek || (aD.data.colorsData = new Uint32Array(aD.ek)), t.u(21)
		})), aN8.qQ(new sD));
		aN8.qQ(new rx({
			value: aD.data.selectableColor
		}, L(273), function(value) {
			aD.data.selectableColor = value
		})), qU.push(aN8)
	}(r8 = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qU) {
		var aN8 = new qC;
		aN8.qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.colorsData, 1)), aN8.qQ(aNl), qU.push(aN8)
	}(r8) : (aD.a4Q.a4V(), r8.push(function() {
		var aN8 = new qC;
		aN8.qF(L(253));
		for (var aB = 0; aB < bg.a0H.length; aB++) {
			var hf = (aB + 1) % bg.a0H.length,
				e = aN8.qL((0 == hf ? "" : "Team ") + bg.a0H[hf]);
			aB && (e.style.marginTop = "0.5em"), aN8.qQ(new rN({
				e8: -1,
				value: aD.data.teamPlayerCount[hf]
			}, 1, 0, function(e) {
				aNj.uX[1].qt(0);
				var playerCount = bL.hv(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aOv] = playerCount
			})).e.aOv = hf
		}
		return aN8
	}())), r8))
}

function so(id, a3m, aOw) {
	var aMp, aOx;

	function aP2() {
		aOx.qV.innerHTML += "<br>" + L(276)
	}

	function aP1() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.s0.s1(110, bF.sq.sr(bF.sq.ss(8))), b0.aNF.aPG()
	}
	this.aOy = !0, this.aOz = id, this.show = function() {
		aMp.show(), this.resize(), 15 === id ? (b0.y.aP0(id) ? aP1 : aP2)() : 16 === id ? b0.y.aP0(id) ? b0.aBz.aP3(2) : aP2() : 17 === id ? b0.y.aP0(id) ? b0.aBz.aP3(3) : aP2() : 18 === id ? (b0.y.close(0, 3253), b0.y.aFZ(0, id), aP2()) : 21 ===
			id ? b0.y.aP0(id) ? b0.aP4.aP5(a3m.t6, a3m.t7, a3m.t8) : aP2() : 22 === id ? b0.y.aP0(id) ? b0.aP4.aP6(a3m.t6, a3m.aP7, a3m.aP8) : aP2() : 23 === id ? b0.y.aP0(id) ? b0.aP4.aP9(a3m.aOC, a3m.a0b) : aP2() : 24 === id ? b0.y.aP0(id) ? b0
			.aP4.aPA(a3m.aOC, a3m.t7, a3m.t8) : aP2() : 25 === id ? b0.y.aP0(id) ? b0.aNF.aNV(a3m) : aP2() : 28 === id ? b0.y.aP0(id) ? b0.aP4.aPB(a3m.t6, a3m.aP7, a3m.aP8) : aP2() : 29 === id && (b0.y.aP0(id) ? b0.aNF.aPC(a3m) : aP2())
	}, this.aPD = function() {
		15 === id ? aP1() : 16 === id ? b0.aBz.aP3(2) : 17 === id ? b0.aBz.aP3(3) : 18 === id ? t.u(8, this.aMM, new so(16)) : 21 === id ? b0.aP4.aP5(a3m.t6, a3m.t7, a3m.t8) : 22 === id ? b0.aP4.aP6(a3m.t6, a3m.aP7, a3m.aP8) : 23 === id ? b0.aP4
			.aP9(a3m.aOC, a3m.a0b) : 24 === id ? b0.aP4.aPA(a3m.aOC, a3m.t7, a3m.t8) : 25 === id ? b0.aNF.aNV(a3m) : 28 === id ? b0.aP4.aPB(a3m.t6, a3m.aP7, a3m.aP8) : 29 === id ? b0.aNF.aPC(a3m) : 1e3 === id && (this.aOz = id = 25, b0.aNF.aNV(
				a3m))
	}, this.aPE = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aMM) : 17 === code ? (b0.y.close(0, 3252), bj.y.vW(0), bj.eK.data[117].uP && 0 < bj.eK.data[117].uP.length ? (bu = bj.y.vX(0), bj.s0.s1(105, bu.sl), bj.s0.s1(106, bu
			.password), t.u(8, this.aMM, new so(16))) : (bj.s0.s1(105, ""), t.y.aC2())) : 21 === code ? t.u(10, this.aMM, new aPF(data)) : 23 === code ? t.u(13, this.aMM, new aNu({
			data: data,
			aOC: a3m.aOC
		})) : 25 === code && (t.y.aMX.sl = a3m.sl, t.u(15, this.aMM)))
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aOx.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(L(274), [new w("⬅️ " + L(37), function() {
		aOw ? t.u(29) : t.y.aC2()
	})]), aOx = new s2(aMp.uW, L(275))
}

function aMb() {
	var aNj, aNk, qU;

	function aPJ() {
		var gG;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4Q.a4V()), gG = bA.qh.a2X(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gG) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aNm() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aPL(), aD.data.canvas = null, t.u(5, 5)
	}

	function aPL() {
		b9.pt.dd(), bj.s0.s1(156, b9.a4h.zO())
	}

	function aPH() {
		aD.data.isReplay = 0, aPL(), aD.a4Q.a4s(), aa.aFk(), aD.a4Q.a4p(), aD.data.canvas = 2 === aD.data.mapType ? bS.wT : null, aD.a4U(), aD.a4S = 1
	}

	function aPX() {
		aPJ();
		for (var g = [aPO(), aPP(), aPQ()], aB = 3; aB < 6; aB++) aNk.qV.removeChild(aNk.qW[aB].qE), aNk.qW[aB] = g[aB - 3], aNk.qV.appendChild(aNk.qW[aB].qE);
		aNk.resize()
	}

	function aPO() {
		var aPY, aN8 = new qC;
		return aN8.qF(L(271)), aPY = 0 === aD.data.gameMode ? [L(272), L(250)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aN8.qL(aPY), aN8.qQ(new s3([new w(L(280), function() {
			t.u(21)
		}).button])), aN8
	}

	function aPP() {
		var aN8 = new qC,
			g = (aN8.qF(L(62)), [L(249) + ": " + aE.kL[aD.data.botDifficultyValue], L(251), L(252), L(250)]);
		return aN8.qL(g[aD.data.botDifficultyType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(25)
		}).button])), aN8
	}

	function aPQ() {
		var aN8 = new qC,
			g = (aN8.qF("Spawning"), [L(272), L(282), L(250)]);
		return aN8.qL(g[aD.data.spawningType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(24)
		}).button])), aN8
	}
	this.show = function() {
		aNj.show(), this.resize(), aNj.uW.scrollTop = t.y.aHf[0]
	}, this.rq = function() {
		t.y.aHf[0] = aNj.uW.scrollTop, aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ("🔧 " + L(277), [new w("⬅️ " + L(37), aNm), new w(L(278), aPH)]), aPJ(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.wT : 1 === aD.data.mapType ? aD.data.canvas = bS.aKH(bS.a4q(aD.data), 0).wT : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aKH(bS.a4q(aD.data), aD.data.mapSeed).wT)), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC,
			a2n = (aN8.qF(L(279)), aD.data.canvas);
		a2n.style.width = "100%", aN8.qQ({
			e: a2n
		}), aN8.qQ(new s3([new w(L(280), function() {
			t.u(20)
		}).button])), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8 = new qC;
		aN8.qF(L(253)), aN8.qQ(new rN({
			e8: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.hv(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qh.a2X(aD.data.teamPlayerCount, 0), aD.a4Q.a4V(), bA.qh.a2X(aD.data.teamPlayerCount, 0) !== e) && aPX()
		})), qU.push(aN8)
	}(qU), function(qU) {
		var aN8 = new qC;
		aN8.qF(L(281)), aN8.qN(new uL({
			uP: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e8) {
			aD.data.gameMode !== e8 && (aD.data.gameMode = e8, aPX())
		})), qU.push(aN8)
	}(qU), qU.push(aPO()), qU.push(aPP()), qU.push(aPQ()), function(qU) {
		var aN8 = new qC,
			g = (aN8.qF(L(283)), [L(284), L(285), L(250)]);
		aN8.qL(g[aD.data.playerNamesType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(23)
		}).button])), qU.push(aN8)
	}(qU), function(qU) {
		var aN8 = new qC,
			g = (aN8.qF(L(246)), [L(248), L(249) + ": " + aD.data.aIncomeValue, L(250)]);
		aN8.qL(g[aD.data.aIncomeType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(22)
		}).button])), qU.push(aN8)
	}(qU), function(qU) {
		var aN8 = new qC,
			g = (aN8.qF(L(286)), [L(248), L(249) + ": " + aD.data.tIncomeValue, L(250)]);
		aN8.qL(g[aD.data.tIncomeType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(26)
		}).button])), qU.push(aN8)
	}(qU), function(qU) {
		var aN8 = new qC,
			g = (aN8.qF(L(287)), [L(248), L(249) + ": " + aD.data.iIncomeValue, L(250)]);
		aN8.qL(g[aD.data.iIncomeType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(27)
		}).button])), qU.push(aN8)
	}(qU), function(qU) {
		var aN8 = new qC,
			g = (aN8.qF(L(288)), [L(248), L(249) + ": " + aD.data.sResourcesValue, L(250)]);
		aN8.qL(g[aD.data.sResourcesType]), aN8.qQ(new s3([new w(L(280), function() {
			t.u(28)
		}).button])), qU.push(aN8)
	}(qU), function(qU) {
		var aN8 = new qC;
		aN8.qF(L(289)), aN8.qQ(new s3([new w(L(290), function() {
			t.x(), aD.a4Q.a4t(), t.y.aHf[0] = 0, t.u(19)
		}).button])), aN8.qQ(new s3([new w(L(291), function() {
			bm.aHU()
		}).button])), aN8.qQ(new s3([new w(L(292), function() {
			return bm.aHW(), !0
		}).button])), qU.push(aN8)
	}(qU), qU))
}

function aMm() {
	var aNj, rS = !0;

	function rj(ri, a4v) {
		var qE = document.createElement("div"),
			aPa = document.createElement("span"),
			aPb = document.createElement("span");
		aPa.textContent = aW.aAs(a4v.eM) + ":", aPa.style.color = bB.nx, aPa.style.paddingRight = "0.4em", aPa.style.display = "table-cell", aPa.style.width = "6ch", aPa.style.textAlign = "end", qE.appendChild(aPa), aPb.textContent = a4v.qG, qE
			.appendChild(aPb), qE.style.display = "table", a4v.pI && function(qE, pI) {
				{
					var aHQ;
					pI >= 1024 - aj.rp.yh ? ((aHQ = document.createElement("img")).src = aj.wW.yV[pI - 1024 + aj.rp.yh].toDataURL(), aHQ.style.width = "1.5em", aHQ.style.height = "1.5em", aHQ.style.verticalAlign = "middle", qE.appendChild(aHQ)) : ((
						aHQ = document.createElement("span")).textContent = aj.rp.yw(pI), aHQ.style.display = "inline-block", aHQ.style.fontSize = "1.5em", aHQ.style.lineHeight = "1em", aHQ.style.verticalAlign = "middle", qE.appendChild(aHQ))
				}
			}(qE, a4v.pI), ri.appendChild(qE)
	}

	function rm() {
		rS && (aNj.uW.scrollTop = aNj.uW.scrollHeight)
	}
	this.clear = function() {
		aNj.uW.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a5o = bq.a4z(), en = a5o.length, ri = document.createDocumentFragment(), aB = 0; aB < en; aB++) rj(ri, a5o[aB]);
		aNj.uW.appendChild(ri), rm(), aNj.show(), this.resize(), rS = !0, rm()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNj.uW.style.padding = "0.4em " + bA.qZ.qi(bc.qf)
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, this.yO = function(a4v) {
		var ri = document.createDocumentFragment();
		rj(ri, a4v), aNj.uW.appendChild(ri), rm()
	}, (aNj = new uQ(L(293), [new w("⬅️ " + L(37), function() {
		t.aMn(1)
	})])).uW.style.overflowY = "auto", aNj.uW.addEventListener("scroll", function() {
		rS = aNj.uW.scrollTop >= aNj.uW.scrollHeight - aNj.uW.clientHeight - 2
	})
}

function aMj() {
	var aNj, aNk, aNl, qU;

	function aNm() {
		aNo(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		2 === aD.data.iIncomeType && bA.qh.a2d(aNl.ux(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(287), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), aN8.qN(new uL({
			uP: [L(248), L(249), L(250)],
			value: aD.data.iIncomeType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ek), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e8, t.u(27)
		})), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8;
		1 === aD.data.iIncomeType && ((aN8 = new qC).qF("Value"), aN8.qQ(new rN({
			e8: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qU.push(aN8))
	}(qU), function(qU) {
		var aN8;
		2 === aD.data.iIncomeType && ((aN8 = new qC).qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.iIncomeData, 4)), aN8.qQ(aNl), qU.push(aN8))
	}(qU), qU))
}

function aMR() {
	var aPd, aPe, aOj, rM, aPf;
	this.aGI = new sw, aOj = new rA([.45, .27], [.5, .5], 2 / 3), aPe = [new w("⚔️<br>" + L(294), function() {
			aPg(0)
		}, bB.oB), new w("🗡️<br>" + L(277), function() {
			aPg(1)
		}, bB.oT), new w("🔑<br>" + L(295), function() {
			aPg(2)
		}, bB.ol), new w("☰<br>" + L(296), function() {
			aPg(3)
		}, bB.nv), new w("", function() {
			t.u(12)
		}, bB.ne, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rM = new rN(bj.eK.data[122]);
	for (var aB = 0; aB < aPe.length; aB++) aPe[aB].button.style.position = "absolute";

	function aPg(e8) {
		a0.a1.setState(10), ab.tF() || ab.aG9(), 0 === e8 ? t.y.a4k() : 1 === e8 ? (b9.aHp.wE(bj.eK.data[156].value, 1) || aD.a4Q.a4t(), t.u(19)) : 2 === e8 ? 0 !== a0.id || bj.eK.data[140].value ? t.u(8, t.sn, new so(16)) : t.y.aPh(t.sn, 16) : 3 ===
			e8 && t.u(1)
	}
	rM.e.style.position = "absolute", rM.e.style.textAlign = "center", rM.e.placeholder = L(297), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGI.show(), aPe[4].qt(bA.color.a2u(bj.eK.data[121].value)), this.resize(), document.body.appendChild(rM.e);
		for (var aB = 0; aB < aPe.length; aB++) document.body.appendChild(aPe[aB].button);
		1 !== a0.id || a0.dv < 5 || (aPf && bf.eM > aPf + 144e5 ? a0.vH.setState(14) : aPf = bf.eM)
	}, this.rq = function() {
		this.aGI.rq(), document.body.removeChild(rM.e);
		for (var aB = 0; aB < aPe.length; aB++) document.body.removeChild(aPe[aB].button)
	}, this.resize = function() {
		this.aGI.resize(), this.aGI.resize(), aOj.resize();
		var gap = .5 * bc.gap,
			tk = 10 / 99 * .84 * aOj.i,
			aPk = .16 * aOj.j,
			a8x = .19 * aOj.i,
			eu = aOj.eu + a8x,
			tk = aOj.ew + tk + 3 * gap,
			i = .5 * (aOj.i - gap) - a8x,
			a8x = aOj.i - 2 * a8x - aPk - gap,
			a8x = (bA.qZ.tD(rM.e, eu, tk, a8x, aPk), bA.qZ.tD(aPe[4].button, eu + a8x + gap, tk, aPk, aPk), .5 * (aOj.ew + aOj.j - (tk += aPk + gap) - gap));
		bA.qZ.tD(aPe[0].button, eu, tk, i, a8x), bA.qZ.tD(aPe[1].button, eu + i + gap, tk, i, a8x), bA.qZ.tD(aPe[2].button, eu, tk + a8x + gap, i, a8x), bA.qZ.tD(aPe[3].button, eu + i + gap, tk + a8x + gap, i, a8x);
		bA.qZ.tD(aPe[5].button, eu, tk + a8x * 2 + gap * 2, i * 2 + gap, a8x / 3);
		bA.qZ.tD(aPe[6].button, eu, tk + a8x * 2.33 + gap * 3, i * 2 + gap, a8x / 3);
		for (var aB = 0; aB < aPe.length; aB++) aPe[aB].button.style.font = bA.qZ.sN(0, bA.qZ.a3A(.065 * aOj.j)), bA.qZ.qj(aPe[aB].button, 5);
		rM.e.style.font = bA.qZ.sN(0, bA.qZ.a3A(.08 * aOj.j)), bA.qZ.qj(rM.e, 5)
	}, this.uf = function() {
		if (aa.aFo(), aT.uf(), aO.uf(), bY.uf(), ab.tF()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aOj.i * 0.03);
				ug.font = bA.qZ.sN(1, size);
				ug.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = ug.measureText(text).width;
				ug.textAlign = "left";
				ug.textBaseline = "middle";
				ug.fillText(text, ug.canvas.width - textLength - size / 2, size);
			};
			ug.imageSmoothingEnabled = !1;
			var f8 = ab.aFr("territorial.io"),
				nK = .84 * aOj.i / f8.width;
			ug.setTransform(nK, 0, 0, nK, aOj.eu + .08 * aOj.i, aOj.ew), aPd = aPd || bA.a2E.a3k(f8, bA.a2E.a3q, [0, 0, 0]);
			for (var eu = -1; eu <= 1; eu += 2)
				for (var ew = -1; ew <= 1; ew += 2) ug.drawImage(aPd, eu, ew);
			ug.drawImage(f8, 0, 0), ug.imageSmoothingEnabled = !0;
			var z3 = ab.aFr("logo"),
				aPm = .6666 * nK * f8.height / z3.height,
				nL = .5 * h.i,
				nM = aOj.ew + .5 * nK * f8.height - .5 * aPm * z3.height;
			ug.setTransform(aPm, 0, 0, aPm, nL - .6 * nK * f8.width, nM), ug.drawImage(z3, 0, 0), ug.setTransform(aPm, 0, 0, aPm, nL + .6 * nK * f8.width - aPm * z3.width, nM), ug.drawImage(z3, 0, 0), ug.setTransform(1, 0, 0, 1, 0, 0), ug
				.imageSmoothingEnabled = !0
		}
	}
}

function aMY() {
	var aMp, aPn, aPo, uR;

	function aPp(aB) {
		t.u(8, t.sn, new so(21, {
			t6: aB,
			t7: 0,
			t8: 10
		}))
	}
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aPn.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aPo = [new w(L(298), function() {
		aPp(1)
	}, 0, 0, 1), new w(L(299), function() {
		aPp(2)
	}, 0, 0, 1), new w(L(300), function() {
		aPp(3)
	}, 0, 0, 1), new w(L(301), function() {
		aPp(0)
	}, 0, 0, 1), new w(L(302), function() {
		aPp(9)
	}, 0, 0, 1), new w(L(303), function() {
		aPp(10)
	}, 0, 0, 1), new w(L(304), function() {
		aPp(11)
	}, 0, 0, 1)], uR = [new w("⬅️ " + L(37), function() {
		t.a16()
	})], aMp = new uQ(L(305), uR), aPn = new r7(aPo, aMp.uW)
}

function aCQ(title, qM, aPq) {
	var aMp, aOx;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aOx.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aPq = aPq || [new w("⬅️ " + L(37), function() {
		t.a16()
	}, bB.oN)], aMp = new uQ(title, aPq), aOx = new s2(aMp.uW, qM), bA.qZ.textAlign(aMp.uW.style, 1)
}

function aPF(data) {
	var aMp, aPr, f8, sd;

	function aPs(jQ) {
		var en = data.data.length;
		if (en) {
			for (var t7, max = min = parseInt(data.data[0][0]), aB = 1; aB < en; aB++) var aEF = parseInt(data.data[aB][0]),
				min = Math.min(aEF, min),
				max = Math.max(aEF, max);
			t7 = jQ < 0 ? min + jQ : max + 1, t.u(8, t.a4x().aMM, new so(21, {
				t6: data.t6,
				t7: t7,
				t8: t7 + Math.abs(jQ)
			}))
		}
	}
	this.show = function() {
			aMp.show(), this.resize()
		}, this.rq = function() {
			aMp.rq()
		}, this.resize = function() {
			aMp.resize(), aPr.resize()
		}, this.a21 = function(f8) {
			2 === f8 && aMp.uX[0].qq()
		}, f8 = data.data.length ? 0 : 1, f8 = [new w("⬅️ " + L(37), function() {
			t.a16()
		}), new w(L(306), function() {
			aPs(-10)
		}, f8, 0, 1), new w(L(307), function() {
			aPs(10)
		}, f8, 0, 1), new w(L(255), function() {
			t.u(11, 10, new aPt({
				t6: data.t6
			}))
		})], sd = [L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(303), L(304), L(318)], aMp = new uQ(sd[data.t6], f8),
		function() {
			var aB, eq = {
					sX: []
				},
				sX = eq.sX,
				aPv = data.data,
				en = aPv.length;
			en && 0 === aPv[0][0] && 0 <= (e8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t6]) && (t.y.t9[e8] = aPv[0][1]);
			var nK = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t6],
				a3w = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t6],
				e8 = [
					[L(319), L(320) + " ↗", L(321)],
					[L(319), L(322), L(323), L(324) + " ↗"],
					[L(319), L(320) + " ↗", L(323)],
					[L(319), L(320) + " ↗", L(323)],
					[L(325), L(326), L(327) + " ↗", L(328) + " ↗", L(117)],
					[L(325), L(326), L(329) + " ↗", L(330) + " ↗", L(331)],
					[L(325), L(326), L(332) + " ↗", L(333) + " ↗", L(334)],
					[L(325), L(326), L(329) + " ↗", L(330) + " ↗", L(335)],
					[L(325), L(326), L(327) + " ↗", L(328) + " ↗", L(117)],
					[L(319), L(320) + " ↗", L(323)],
					[L(319), L(320) + " ↗", L(336)],
					[L(319), L(320) + " ↗", L(323)],
					[L(325), L(326), L(337) + " ↗", L(338) + " ↗", L(339)]
				];
			if (eq.sd = e8[data.t6], eq.si = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[25, 40, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 13, 25, 25, 25]
				][data.t6], 0 === data.t6 || 2 === data.t6 || 3 === data.t6 || 9 === data.t6 || 10 === data.t6 || 11 === data.t6)
				for (aB = 0; aB < en; aB++) sX.push([{
					fF: aPv[aB][0] + 1 + ".",
					dt: 0
				}, {
					fF: aPv[aB][1],
					dt: 1,
					sl: aPv[aB][4],
					sm: aPv[aB][3]
				}, {
					fF: (nK * aPv[aB][2]).toFixed(a3w),
					dt: 0
				}]);
			else if (12 === data.t6)
				for (aB = 0; aB < en; aB++) {
					var aPy = aPv[aB][3];
					sX.push([{
						fF: "" + aPv[aB][0],
						dt: 0
					}, {
						fF: "" + aPv[aB][4],
						dt: 0
					}, {
						fF: aPv[aB][5],
						dt: 1,
						sl: aPv[aB][1],
						sm: 0
					}, {
						fF: aPv[aB][6],
						dt: 1,
						sl: aPv[aB][2],
						sm: 0
					}, {
						fF: bo.eE(aPy % 16, aPy >> 4),
						dt: 0
					}])
				} else if (1 === data.t6)
					for (aB = 0; aB < en; aB++) sX.push([{
						fF: aPv[aB][0] + 1 + ".",
						dt: 0
					}, {
						fF: aPv[aB][1],
						dt: 0
					}, {
						fF: (nK * aPv[aB][2]).toFixed(a3w),
						dt: 0
					}, {
						fF: aPv[aB][3],
						dt: 1,
						sl: aPv[aB][5],
						sm: aPv[aB][4]
					}]);
				else if (4 === data.t6 || 5 === data.t6 || 6 === data.t6 || 7 === data.t6 || 8 === data.t6)
				for (aB = 0; aB < en; aB++) {
					var aPz = aPv[aB][5];
					4 === data.t6 || 8 === data.t6 ? "100%" === (aPz = (aPz % 64 * 100 / (aPz >> 6)).toFixed(0) + "%") && (4 === data.t6 ? aPz += " (" + L(340) + ")" : aPz += " (" + L(341) + ")") : 5 === data.t6 ? 32768 <= aPz && (aPz = -(aPz -
						32768)) : aPz = (nK * aPz).toFixed(a3w), sX.push([{
						fF: "" + aPv[aB][0],
						dt: 0
					}, {
						fF: "" + aPv[aB][6],
						dt: 0
					}, {
						fF: aPv[aB][7],
						dt: 1,
						sl: aPv[aB][1],
						sm: aPv[aB][2]
					}, {
						fF: aPv[aB][8],
						dt: 1,
						sl: aPv[aB][3],
						sm: aPv[aB][4]
					}, {
						fF: "" + aPz,
						dt: 0
					}])
				}
			aPr = new sW(aMp.uW, eq)
		}()
}

function aPt(a3m) {
	var aMp, aMq, qU;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(L(342), [new w("⬅️ " + L(37), function() {
		t.aMn(10)
	})]), aMq = new qS(aMp.uW, ((qU = []).push(function() {
		var aNH, aN8 = new qC,
			aOh = new rN(bj.eK.data[132], 1, function() {
				aNH.button.click()
			}),
			aOi = new rN(bj.eK.data[131], 1, function() {
				aOh.e.focus()
			});
		aN8.qF(L(260)), aN8.qQ(aOi), aOi.e.style.marginBottom = "0.8em", aN8.qF(L(261)), aN8.qQ(aOh);
		return aNH = new w(L(259), function() {
			t7 = Math.floor(aOi.e.value), t8 = Math.floor(aOh.e.value);
			var t8, t7 = {
				a2V: Math.min(t7, t8),
				aLx: Math.max(t7, t8)
			};
			t.u(8, t.a4y(10).aMM, new so(21, {
				t6: a3m.t6,
				t7: t7.a2V,
				t8: t7.aLx
			}))
		}, 0, 0, 1), aN8.qQ(new s3([aNH.button])), aN8
	}()), qU.push(function() {
		var aNH, aN8 = new qC,
			aOh = new rN(bj.eK.data[134], 1, function() {
				aNH.button.click()
			}),
			aOi = new rN(bj.eK.data[133], 0, function() {
				aOh.e.focus()
			});
		return aN8.qF(1 === a3m.t6 ? L(343) : L(344)), aN8.qQ(aOi), aOi.e.style.marginBottom = "0.8em", aN8.qF(L(345)), aN8.qQ(aOh), aNH = new w(L(259), function() {
			var aP7 = aOi.e.value.slice(0, 20),
				aP8 = Math.abs(Math.floor(aOh.e.value));
			t.u(8, t.a4y(10).aMM, new so(22, {
				t6: a3m.t6,
				aP7: aP7,
				aP8: aP8
			}))
		}, 0, 0, 1), aN8.qQ(new s3([aNH.button])), aN8
	}()), qU.push(function() {
		var aNH, aN8 = new qC,
			aOh = new rN(bj.eK.data[152], 1, function() {
				aNH.button.click()
			}),
			aOi = new rN(bj.eK.data[151], 0, function() {
				aOh.e.focus()
			});
		return aN8.qF(L(346)), aN8.qQ(aOi), aOi.e.style.marginBottom = "0.8em", aN8.qF(L(345)), aN8.qQ(aOh), aNH = new w(L(259), function() {
			var aP7 = aOi.e.value.slice(0, 5),
				aP8 = Math.abs(Math.floor(aOh.e.value));
			t.u(8, t.a4y(10).aMM, new so(28, {
				t6: a3m.t6,
				aP7: aP7,
				aP8: aP8
			}))
		}, 0, 0, 1), aN8.qQ(new s3([aNH.button])), aN8
	}()), qU))
}

function aMl() {
	var aQ3, tJ, aQ6, tI, tL, aQ4 = [new Array(4), [], new Array(2), new Array(2)],
		aQ5 = new Array(4),
		aQ7 = new Array(2),
		aQ8 = [L(61), L(302), L(347), L(348)];

	function aE0() {
		var a6p = aQ3.tW.rM.e.value.trim().slice(0, 127);
		a6p.length < 1 || (aQ3.tW.rM.e.value = "", bn.aCT.a00(a6p))
	}

	function aQB(aQD) {
		bn.y.rd[3] = 1 - bn.y.rd[3], aQC(3, 1, bn.y.rd[3]), aQD && b0.aEB.aEC(4), bn.y.rd[3] && bj.s0.s1(158, bn.y.rd[0])
	}

	function aQ9(f6, f7) {
		bn.y.rd[f6] !== f7 && (0 === f6 && bn.y.rd[3] && aQB(0), aQC(f6, bn.y.rd[f6], 0), aQC(f6, f7, 1), bn.y.rd[f6] = f7, 0 === f6 ? (b0.aEB.aEC(2, f7), bn.y.rd[2] ? (aQ3.tX.mV(), aQ3.tW.ra(1)) : aQ3.tW.ra(0), t.a4x().aDp(), t.a4x().aDo()) : 2 ===
			f6 && (0 === f7 ? (b0.aEB.aEC(0), aQ3.tW.mV(), aQ3.tf()) : (b0.aEB.aEC(1), aQ3.tX.mV(), aQ3.tg())))
	}

	function aQC(f6, f7, color) {
		aQ3.tZ[f6].r8[f7].qt(color ? bB.o7 : bB.ou)
	}

	function aQG(aD3) {
		return aD3 < 7 ? aD3 + 2 + " " + L(355) : 7 === aD3 || 10 === aD3 ? L(302) + " (Full-Sending: " + L(7 === aD3 ? 356 : 357) + ")" : 8 === aD3 ? "1v1" : L(358)
	}

	function aQH(fF) {
		var a6s = bL.du(fF, 60),
			fF = fF % 60;
		return (a6s < 10 ? "0" : "") + a6s + ":" + (fF < 10 ? "0" : "") + fF
	}
	this.aEN = function() {
		return aQ3.tW
	}, this.aCT = function(sl) {
		aQ9(2, 0);
		var qG = aQ3.tW.rM.e.value,
			sl = "@" + sl + " ";
		qG.length && !bA.rY.a3H(qG, " ") && (sl = " " + sl), aQ3.tW.rM.e.value = qG += sl, aQ3.tW.rM.e.focus()
	}, this.aDn = function() {
		aQ3.tX.mV()
	}, this.aDp = function() {
		var aQF = bn.y.rd[0],
			aQF = bn.y.rf[aQF];
		bS.a7(aQF.eT, aQF.mapSeed), tJ.r8[0].button.textContent = L(279) + ": " + bS.wJ.wK[aQF.eT].name, tJ.r8[1].button.textContent = L(281, 0, "Mode") + ": " + aQG(aQF.aD3), tJ.r8[2].button.textContent = L(352) + ": " + bS.wJ.wK[aQF.aEl].name,
			tJ.r8[3].button.textContent = L(353, 0, "Next Mode") + ": " + aQG(aQF.aEm), tJ.r8[4].button.textContent = L(354) + ": " + aQH(aQF.aDr), tJ.resize()
	}, this.aDo = function() {
		var aQF = bn.y.rd[0],
			re = bn.y.rf[aQF];
		aQ3.td(re.te);
		for (var aB = 0; aB < bn.tt.tu.length; aB++) aQ4[0][aB].rX.textContent = "" + bn.tt.tu[aB].length;
		var tt = bn.tt.tu[aQF],
			aQI = tt.length,
			aQJ = bn.tt.tv[aQF];
		aQ4[2][1].rX.textContent = "" + aQI, aQ4[3][1].rX.textContent = "" + aQJ, tJ.r8[4].button.textContent = L(354) + ": " + aQH(re.aDr);
		for (aB = 0; aB < 4; aB++) {
			var aQK = bn.y.rf[aB];
			aQ5[aB] ? 0 === aQK.te && (aQ5[aB].rX.textContent = bS.wJ.wK[aQK.eT].name) : aQ5[aB] = new rW(bS.wJ.wK[aQK.eT].name, tI.r8[aB].button, 1, 1), bA.rY.startsWith(aQ8[aB], "🏆 ") ? aQK.aD9 || (aQ8[aB] = aQ8[aB].substring(3), tI.r8[aB]
				.button.textContent = aQ8[aB], tI.r8[aB].button.appendChild(aQ4[0][aB].rX), tI.r8[aB].button.appendChild(aQ5[aB].rX)) : aQK.aD9 && (aQ8[aB] = "🏆 " + aQ8[aB], tI.r8[aB].button.textContent = aQ8[aB], tI.r8[aB].button
				.appendChild(aQ4[0][aB].rX), tI.r8[aB].button.appendChild(aQ5[aB].rX))
		}
		var re = "",
			aQM = "";
		0 === aQF && (re = bn.kx.aDN(tt, 0, aQI), aQM = bn.kx.aDN(tt, 0, aQJ)), aQ6[0].rX.textContent = re, aQ6[1].rX.textContent = aQM, aQ7[1].rX.textContent = "MP: " + bn.y.aDg[0] + "   SP: " + bn.y.aDg[1] + "   Lobby: " + bA.qh.a2i(bn.tt.tu)
	}, this.aDt = function() {
		aQ3.tW.mV()
	}, this.show = function() {
		aQ3.show(), this.resize(), bn.message.show()
	}, this.rq = function() {
		aQ3.rq(), bn.uF.rq(), bn.tr.rq(), bn.message.rq()
	}, this.resize = function() {
		aQ3.resize(1 - bn.y.rd[2]), bn.message.resize()
	}, this.a21 = function(f8) {
		2 === f8 ? bn.y.rd[3] ? aQB(1) : aQ3.tZ[3].r8[0].qq() : f8 < 2 && aQB(1)
	}, tI = new s6([new w(aQ8[0], function() {
		return aQ9(0, 0), 2
	}), new w(aQ8[1], function() {
		return aQ9(0, 1), 2
	}), new w(aQ8[2], function() {
		return aQ9(0, 2), 2
	}), new w(aQ8[3], function() {
		return aQ9(0, 3), 2
	})], bB.ou), tJ = new s6([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.ov, 1);
	var aQA = new s6([new w(L(349), function() {
		return aQ9(2, 0), 2
	}), new w(L(113), function() {
		return aQ9(2, 1), 2
	})], bB.ou);
	tL = new s6([new w(L(350), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bn.u9(), b0.y.a1G(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bn.u9(), b0.y.a1G(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(351), function() {
		return aQB(1), 2
	})], bB.ou), aQ3 = new tH(tI, tJ, aQA, tL, aE0, bn.uF.aEW);
	for (var aB = 0; aB < 4; aB++) aQ4[0][aB] = new rW("0", tI.r8[aB].button);
	aQ4[2][1] = new rW("0", aQA.r8[1].button), aQ4[3][1] = new rW("0", tL.r8[1].button), aQ6 = [new rW("", aQA.r8[1].button, 1, 1), new rW("", tL.r8[1].button, 1, 1)], aQC(0, bn.y.rd[0], 1), aQC(2, bn.y.rd[2], 1), (aQ7 = [new rW(L(253), aQ3.th(), 1,
		0), new rW("", aQ3.th(), 1, 1)])[0].rX.style.fontSize = "0.4em", aQ7[1].rX.style.fontSize = "0.4em"
}

function aMS() {
	var aMp, aMq, qU;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(L(359), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a4y(7).aMM)
	}), new w(L(191), function() {
		bj.s0.s1(105, bG.sq.w3(aMq.qW[0].qD[0].e.value, 5)), bj.s0.s1(106, bG.sq.w3(aMq.qW[1].qD[0].e.value, 8)), t.u(8, t.a4y(7).aMM, new so(18))
	})]), aMq = new qS(aMp.uW, ((qU = []).push(function() {
		var aN8 = new qC;
		return aN8.qF(L(172)), aN8.qQ(new rN({
			value: "",
			e8: -1
		})), aN8
	}()), qU.push(function() {
		var aN8 = new qC,
			aNJ = (aN8.qF(L(174)), new rN({
				value: "",
				e8: -1
			}));
		return aNJ.e.type = "password", aN8.qQ(aNJ), aN8.qQ(new s3([new w(L(175), function(e) {
			return e.textContent === L(175) ? (e.textContent = L(176), aNJ.e.type = "text") : (e.textContent = L(175), aNJ.e.type = "password"), !0
		}).button])), aN8
	}()), qU))
}

function aMZ() {
	var aMp, aPn, aPo, uR;

	function aPp(aB) {
		t.u(8, t.sn, new so(21, {
			t6: aB,
			t7: 0,
			t8: 10
		}))
	}
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aPn.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aPo = [new w(L(313), function() {
		aPp(5)
	}, 0, 0, 1), new w(L(314), function() {
		aPp(6)
	}, 0, 0, 1), new w(L(315), function() {
		aPp(7)
	}, 0, 0, 1), new w(L(318), function() {
		aPp(12)
	}, 0, 0, 1)], uR = [new w("⬅️ " + L(37), function() {
		t.a16()
	})], aMp = new uQ(L(360), uR), aPn = new r7(aPo, aMp.uW)
}

function aMI() {
	this.eK = {}, this.t9 = new Array(7), this.aMX = null, this.aMU = null, this.sU = 0, this.aHf = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4k = function() {
		t.x(), aZ.dd()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dd()
	}), this.aC2 = function() {
		t.u(0 === aa.a17() ? 5 : 0)
	}, this.aOg = function() {
		if (1 === bj.eK.data[130].value) t.u(8, t.a4x().aMM, new so(24, {
			aOC: bj.eK.data[125].value,
			t7: bj.eK.data[128].value,
			t8: bj.eK.data[129].value
		}));
		else {
			for (var g = (g = bj.eK.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a4x().aMM, new so(23, {
				aOC: bj.eK.data[125].value,
				a0b: g
			}))
		}
	}, this.aPh = function(aMM, target) {
		t.u(4, aMM, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aQO +
			"' target='_blank'>" + bK.aQO + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aMM)
			}), new w("✅ Accept", function() {
				bj.s0.s1(140, 1), 0 === target ? t.u(2, aMM) : t.u(8, aMM, new so(target))
			})]))
	}, this.aQP = function() {
		for (var aB = 0; aB < 7; aB++) this.t9[aB] = bG.vu.vy(bH.pg(5));
		this.t9[1] = "[" + this.t9[1] + "]", 5 === t.sn && (t.a4x().aGI.s1(this.t9), t.a4x().resize())
	}
}

function aMc() {
	var aNj, aNk, aQQ, qU;

	function aNm() {
		b6.u9(), t.aMo()[19] = null, t.a16()
	}

	function aQX() {
		aQa(), aQY()
	}

	function aQa() {
		aQQ.qE.lastChild && aQQ.qE.removeChild(aQQ.qE.lastChild)
	}

	function aQY() {
		var aQb = bS.a4q(aD.data);
		aD.data.canvas = bS.aKH(aQb, aD.data.mapSeed).wT, aQZ()
	}

	function aQZ() {
		var a2n = aD.data.canvas;
		a2n.style.width = "100%", aQQ.qE.appendChild(a2n)
	}
	this.aHP = function(a2n) {
		aD.data.canvas && aQa(), aD.data.canvas = a2n, aQZ()
	}, this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(279), [new w("⬅️ " + L(37), aNm)]), 2 === aD.data.mapType && b6.dd(), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), aN8.qN(new uL({
			uP: [L(361), L(362), L(363)],
			value: aD.data.mapType
		}, function(e8) {
			2 === (aD.data.mapType = e8) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.u9()), t.u(20)
		})), 2 <= aD.data.mapType && (aN8.qQ(new sD), aN8.qQ(new rx({
			value: aD.data.passableWater
		}, L(364), function(value) {
			aD.data.passableWater = value
		})), aN8.qQ(new rx({
			value: aD.data.passableMountains
		}, L(365), function(value) {
			aD.data.passableMountains = value
		})));
		qU.push(aN8)
	}(qU = []), function(qU) {
		if (0 === aD.data.mapType) {
			for (var aN8 = new qC, uP = (aN8.qF(L(279)), []), aB = 0; aB < bS.wJ.aLD.length; aB++) uP.push(bS.wJ.wK[bS.wJ.aLD[aB]].name);
			aN8.qN(new uL({
				uP: uP,
				value: aD.data.mapProceduralIndex
			}, function(e8) {
				aD.data.mapProceduralIndex = e8, aQX()
			})), qU.push(aN8)
		}
	}(qU), function(qU) {
		if (1 === aD.data.mapType) {
			for (var aN8 = new qC, uP = (aN8.qF(L(279)), []), aB = 0; aB < bS.wJ.aLE.length; aB++) uP.push(bS.wJ.wK[bS.wJ.aLE[aB]].name);
			aN8.qN(new uL({
				uP: uP,
				value: aD.data.mapRealisticIndex
			}, function(e8) {
				aD.data.mapRealisticIndex = e8, aQX()
			})), qU.push(aN8)
		}
	}(qU), function(qU) {
		var aN8;
		2 === aD.data.mapType && ((aN8 = new qC).qF(L(279)), aN8.qQ(new s3([new w(L(366), function() {
			return b6.aHI(), !0
		}).button])), qU.push(aN8))
	}(qU), function(qU) {
		(aQQ = new qC).qF(L(367)), 2 !== aD.data.mapType ? aQY() : aD.data.canvas && aQZ();
		qU.push(aQQ)
	}(qU), function(qU) {
		var aN8, rM, aNH;
		0 === aD.data.mapType && ((aN8 = new qC).qF("Seed"), rM = new rN({
			e8: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aQX())
		}), aNH = new w(L(272), function(e) {
			var aKC = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aKC) return rM.e.value = aD.data.mapSeed = aKC, aQX(), !0
		}), aN8.qQ(rM), aN8.qQ(new s3([aNH.button])), qU.push(aN8))
	}(qU), function(qU) {
		var aN8, rM;
		2 === aD.data.mapType && ((aN8 = new qC).qF(L(368)), rM = new rN({
			e8: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aN8.qQ(rM), qU.push(aN8))
	}(qU), qU))
}

function v(title, qM, aQc, aPq) {
	var aMp, aOx;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aOx.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aPq = aPq || [new w("⬅️ " + L(37), function() {
		t.a16()
	})], aMp = new uQ(title, aPq), aOx = new s2(aMp.uW, qM), aQc && bA.qZ.textAlign(aMp.uW.style, 1)
}

function aMf() {
	var aNj, aNk, aNl, qU;

	function aNm() {
		aNo(), 2 === aD.data.playerNamesType && 1 === bA.qh.a2R(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		2 === aD.data.playerNamesType && bA.qh.a2f(aNl.ux(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(283), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), aN8.qN(new uL({
			uP: [L(284), L(285), L(250)],
			value: aD.data.playerNamesType
		}, function(e8) {
			aNo(), aD.data.playerNamesType = e8, t.u(23)
		})), aN8.qQ(new sD), aN8.qQ(new rx({
			value: aD.data.selectableName
		}, L(369), function(value) {
			aD.data.selectableName = value
		})), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8;
		2 === aD.data.playerNamesType && ((aN8 = new qC).qF("Data"), aNl = new uo(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ek || (aD.data.playerNamesData = new Array(aD.ek), aD.data.playerNamesData
			.fill("")), aNl.uv(bA.rY.a49(aD.data.playerNamesData, 1, '"')), aN8.qQ(aNl), qU.push(aN8))
	}(qU), qU))
}

function aMQ() {
	var aNj, ut;

	function aQd() {
		t.x();
		var qG = b9.aQh(ut.ux());
		(aD.zw && 0 < qG.length && qG === b9.pt.a4g || b9.aHp.wE(qG)) && b9.aQi()
	}
	this.show = function(aQe) {
		this.aQf(aQe), aNj.show(), this.resize()
	}, this.aQf = function(aQe) {
		0 === aD.zw ? aQe ? ut.uv(aQe) : aD.a4T.length && ut.uv(aD.a4T) : (aD.gw || (b9.pt.a4g = b9.a4h.zO()), ut.uv(b9.aQg(b9.pt.a4g)))
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), ut.resize()
	}, this.a21 = function(f8) {
		2 === f8 ? aNj.uX[0].qq() : aQd()
	}, aNj = new uQ(L(370), [new w("⬅️ " + L(37), function() {
		t.aMn(1)
	}), new w(L(371), function() {
		ut.uy()
	}), new w(L(372), function() {
		ut.uz()
	}), new w(L(373), function() {
		ut.clear()
	}), new w(L(374), function() {
		aQd()
	})]), ut = new uo(L(375)), aNj.uW.appendChild(ut.e)
}

function aMP() {
	var aMp, aMq, qU, aBy, aN8;

	function aQj() {
		var eM;
		aBy !== bj.eK.data[12].value ? (b7.dd(), b7.aBx(), eM = bf.eM, t.u(4, 1, new v(L(378), L(379), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w("🔄 Reload", function() {
			bf.eM < eM + 1500 || a0.a1.a2()
		}, bB.o5)]))) : t.u(1)
	}
	this.show = function() {
			aBy = bj.eK.data[12].value, aMp.show(), this.resize()
		}, this.rq = function() {
			aMp.rq()
		}, this.resize = function() {
			aMp.resize(), aMq.resize()
		}, this.a21 = function(f8) {
			2 === f8 && aMp.uX[0].qq()
		}, aMp = new uQ(L(376), [new w("⬅️ " + L(37), aQj), new w(L(377), function() {
			t.x(), bj.s0.vb(), t.u(2)
		})]), qU = [], (aN8 = new qC).qF(L(380)), aN8.qH(L(381)), qU.push(aN8),
		function(qU) {
			var aN8 = new qC,
				g = (aN8.qF(L(402)), b7.data.aC6());
			aN8.qN(new uL({
				uP: g,
				value: b7.data.aCA(g)
			}, function(e8) {
				return bj.s0.s1(12, g[e8].split(":")[0]), !0
			})), qU.push(aN8)
		}(qU),
		function(qU) {
			var aN8 = new qC,
				aQm = (aN8.qF(L(400)), []);
			aN8.qQ(new s3([new w(L(401), function(e) {
				bX.aQn();
				for (var aB = 0; aB < aQm.length; aB++) aQm[aB].e.value = bX.aBO[aB];
				return bA.qZ.a3G(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aQo.length; aB++) {
				aN8.qH(bX.aQo[aB]);
				for (var f6 = 0; f6 < 2; f6++) {
					var e8 = 2 * aB + f6,
						rM = new rN({
							value: bX.aBO[e8],
							e8: -1
						});
					rM.e.aQp = e8, aQm.push(rM), rM.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aQq(e.target.aQp, code)
					}), f6 && (rM.e.style.marginLeft = "4%"), rM.e.style.width = "48%", aN8.qQ(rM)
				}
			}
			qU.push(aN8)
		}(qU), (aN8 = new qC).qF(L(23)), aN8.qN(new uL({
			uP: ["1", "2"],
			value: aZ.aFV - 1
		}, function(aB) {
			aZ.aFV = aB + 1
		})), qU.push(aN8), (aN8 = new qC).qF(L(382)), bj.eK.data[1].uP = [L(383), L(384), L(385), L(386)], aN8.qN(new uL(bj.eK.data[1])), qU.push(aN8), (aN8 = new qC).qF(L(387)), bj.eK.data[9].uP = [L(384), L(388), L(389)], aN8.qN(new uL(bj.eK.data[
			9])), qU.push(aN8), (aN8 = new qC).qF(L(390)), bj.eK.data[11].uP = [L(391), L(9), L(392)], aN8.qN(new uL(bj.eK.data[11])), qU.push(aN8), (aN8 = new qC).qF(L(393)), aN8.qQ(new rx(bj.eK.data[2])), qU.push(aN8), (aN8 = new qC).qF(L(394)),
		aN8.qQ(new rx(bj.eK.data[7])), qU.push(aN8), (aN8 = new qC).qF(L(395)), aN8.qQ(new rx(bj.eK.data[8])), qU.push(aN8), (aN8 = new qC).qF(L(396)), aN8.qQ(new rN(bj.eK.data[5])), qU.push(aN8), (aN8 = new qC).qF(L(397)), aN8.qQ(new rx(bj.eK.data[
			13], L(398))), aN8.qQ(new rx(bj.eK.data[14], L(399))), qU.push(aN8), aMq = new qS(aMp.uW, qU)
}

function aMg() {
	var aNj, aNk, aNl, qU;

	function aNm() {
		aNo(), 2 !== aD.data.spawningType || bA.qh.a2R(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		2 === aD.data.spawningType && bA.qh.a2d(aNl.ux(), aD.data.spawningData, bS.aHR - 1)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(403), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC,
			uP = (aN8.qF(L(247)), [L(272), L(282), L(250)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uP.splice(1, 1), 0 < value) && (value = 1);
		aN8.qN(new uL({
			uP: uP,
			value: value
		}, function(e8) {
			aNo(), aD.data.spawningType = e8, 0 === aD.data.gameMode && 1 === e8 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ek)), t.u(24)
		})), aN8.qQ(new sD), aN8.qQ(new rx({
			value: aD.data.selectableSpawn
		}, L(404), function(value) {
			aD.data.selectableSpawn = value
		})), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8 = new qC;
		aN8.qF("Seed"), aN8.qQ(new rN({
			e8: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qU.push(aN8)
	}(qU), function(qU) {
		var aN8;
		2 === aD.data.spawningType && ((aN8 = new qC).qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.spawningData, 2)), aN8.qQ(aNl), qU.push(aN8))
	}(qU), qU))
}

function aMO() {
	var aMp, aPn, aPo, uR;

	function aQr(id) {
		0 !== a0.id || bj.eK.data[140].value ? 0 === id ? t.u(8, 1, new so(16)) : t.u(2) : t.y.aPh(t.sn, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aMp.show(), this.resize(), this.j3()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aPn.resize()
	}, this.j3 = function() {
		8 === aa.a17() && (2 <= bd.aQw ? aPo[2].qr === bB.nu && aPo[2].qt(0) : aPo[2].qr !== bB.nu && aPo[2].qt(bB.nu), !aD.gw && aM.qA(aD.eX) ? aPo[1].qr === bB.nu && aPo[1].qt(0) : aPo[1].qr !== bB.nu && aPo[1].qt(bB.nu), !aD.gw && aw.hc(aD
			.eX) ? aPo[0].qr === bB.nu && aPo[0].qt(0) : aPo[0].qr !== bB.nu && aPo[0].qt(bB.nu))
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aPo = [new w(L(405), function() {
		aQr(0)
	}), new w(L(305), function() {
		t.u(16)
	}), new w(L(360), function() {
		t.u(17)
	}), new w(L(406), function() {
		t.y.aOg()
	}, 0, 0, 1), new w(L(370), function() {
		t.u(3, 1)
	}), new w(L(407), function() {
		t.u(18)
	}), new w(L(376), function() {
		aQr(1)
	}), new w(L(408), function() {
		var sd = ["Patreon", L(417), L(418), "YouTube Tutorial", "Discord", L(419), L(298), L(420), L(301), L(421), "Terms", "Privacy"],
			a3C = [bK.aNh, bK.aCN, bK.a10, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCO, bK.aQx, bK.aQy, bK.a0i, bK.aQz, bK.aR0, bK.aR1, bK.aQO];
		1 === a0.id ? (sd.splice(2, 1), sd.splice(0, 1), a3C.splice(2, 1), a3C.splice(0, 1)) : 2 === a0.id && (sd.splice(1, 1), sd.splice(0, 1), a3C.splice(1, 1), a3C.splice(0, 1)), t.u(4, 1, new v(L(408), bA.qZ.a3B(sd, a3C), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(409), function() {
		t.u(4, 1, new v(L(409), l.dv + "<br><a href='" + bK.aQx + "' target='_blank'>" + bK.aQx + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(410), function() {
		t.u(4, 1, new v(L(410), L(422) + "<br>" + L(423), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(424), function() {
			a0.a1.a0u(), t.u(1)
		})]))
	}), new w(L(411), function() {
		a0.a1.a0v(), t.u(4, 1, new v(L(425), L(426) + " <a href='" + bK.aQO + "' target='_blank'>" + bK.aQO + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], uR = [new w("⬅️ " + L(37), function() {
		t.y.aC2()
	})], 8 === aa.a17() && (aPo.unshift(new w(L(293), function() {
		t.u(30)
	})), aPo.unshift(new w(L(414), function() {
		2 <= bd.aQw && (t.x(), be.a24(), bf.dl = !0)
	}, 0, 1)), aPo.unshift(new w(L(415), function() {
		!aD.gw && aM.qA(aD.eX) && (b8.hD.pN(), t.x(), aM.gx) && aM.a24()
	}, 0, 1)), aPo.unshift(new w(L(416), function() {
		!aD.gw && aw.hc(aD.eX) && (bV.a5K(2), b8.hD.hY(), t.x(), aM.gx) && aM.a24()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dv && aPo.push(new w(L(412), function() {
		a0.a1.a0w()
	})), aMp = new uQ(L(413), uR), aPn = new r7(aPo, aMp.uW)
}

function aMk() {
	var aNj, aNk, aNl, qU;

	function aNm() {
		aNo(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		2 === aD.data.sResourcesType && bA.qh.a2d(aNl.ux(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(288), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), aN8.qN(new uL({
			uP: [L(248), L(249), L(250)],
			value: aD.data.sResourcesType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ek)), aD.data.sResourcesType = e8, t.u(28)
		})), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8;
		1 === aD.data.sResourcesType && ((aN8 = new qC).qF("Value"), aN8.qQ(new rN({
			e8: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qU.push(aN8))
	}(qU), function(qU) {
		var aN8;
		2 === aD.data.sResourcesType && ((aN8 = new qC).qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.sResourcesData, 2)), aN8.qQ(aNl), qU.push(aN8))
	}(qU), qU))
}

function aMi() {
	var aNj, aNk, aNl, qU;

	function aNm() {
		aNo(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aMo()[19] = null, t.a16()
	}

	function aNo() {
		2 === aD.data.tIncomeType && bA.qh.a2d(aNl.ux(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rq = function() {
		aNj.rq()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aNj.uX[0].qq()
	}, aNj = new uQ(L(286), [new w("⬅️ " + L(37), aNm)]), aNk = new qS(aNj.uW, (function(qU) {
		var aN8 = new qC;
		aN8.qF(L(247)), aN8.qN(new uL({
			uP: [L(248), L(249), L(250)],
			value: aD.data.tIncomeType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ek), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e8, t.u(26)
		})), qU.push(aN8)
	}(qU = []), function(qU) {
		var aN8;
		1 === aD.data.tIncomeType && ((aN8 = new qC).qF("Value"), aN8.qQ(new rN({
			e8: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qU.push(aN8))
	}(qU), function(qU) {
		var aN8;
		2 === aD.data.tIncomeType && ((aN8 = new qC).qF("Data"), (aNl = new uo(0, 1, 0, 1)).uv(bA.rY.a49(aD.data.tIncomeData, 4)), aN8.qQ(aNl), qU.push(aN8))
	}(qU), qU))
}

function aMa() {
	var aMp, aMq, qU;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rq = function() {
		aMp.rq()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a21 = function(f8) {
		2 === f8 && aMp.uX[0].qq()
	}, aMp = new uQ(L(407), [new w("⬅️ " + L(37), function() {
		t.a16()
	})]), aMq = new qS(aMp.uW, ((qU = []).push(function() {
		function aNE() {
			aR6.button.textContent = L(169), aR4.e.readOnly = !1, aR5.e.readOnly = !1, aNC.qt(1), aNC.button.style.color = bB.ni
		}
		var aN8 = new qC,
			aR3 = (aN8.qF(L(427)), new rN({
				value: bj.eK.data[105].value,
				e8: -1
			})),
			aR4 = (aR3.e.readOnly = !0, aN8.qQ(aR3), aN8.qF(L(330), "0.8em"), new rN(bj.eK.data[148])),
			aR4 = new rN(bj.eK.data[148], 0, void 0, function(e) {
				aNB(bj.eK.data[149].value, e.target.value)
			}),
			aR5 = (aN8.qQ(aR4), aN8.qF(L(334), "0.8em"), new rN(bj.eK.data[149], 1, void 0, function(e) {
				aNB(e.target.value, bj.eK.data[148].value)
			})),
			aR6 = (aN8.qQ(aR5), new w(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aR4.e.readOnly = !0, aR5.e.readOnly = !0, aNC.qt(0), aNC.button.style.color = bB.og, bj.s0.s1(149, aR5.e.value), aNB(bj.eK.data[149].value, bj.eK.data[
					148].value)) : aNE(), !0
			})),
			aNC = (aN8.qQ(new s3([aR6.button])), new w(L(14), function(e) {
				return aR4.e.readOnly && b0.y.aND(0) && (bA.qZ.a3G(e), aNE(), b0.aNF.aNG({
					sp: 0,
					sl: bj.eK.data[148].value,
					value: parseInt(bj.eK.data[149].value, 10)
				})), !0
			}, 1)),
			qI = aN8.qH(),
			aNB = (aN8.qH(L(428)).style.fontWeight = "bold", function(fF, qG) {
				fF = bA.g9.a3j(fF, 2, 1e6);
				var aNI = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
				qI.textContent = L(171, [fF, bj.eK.data[105].value, aNI, qG, fF - aNI])
			});
		return aN8.qQ(new s3([aNC.button])), aNB(bj.eK.data[149].value, bj.eK.data[148].value), aN8
	}()), qU))
}

function bw() {
	"function" != typeof Math.log2 && (Math.log2 = function(eu) {
		return Math.log(eu) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eu) {
		return Math.log(eu) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eu) {
		return 0 < eu ? 1 : eu < 0 ? -1 : 0
	})
}

function ci() {
	var a9D, aR8, aR9, aRA, aR7 = !1;

	function aRB() {
		aR7 = !0, a9D = -1, aR8 = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aR8[aB] = !1;
		var xJ = Math.floor(1 + .02 * h.min);
		aR9 = new Array(4), (aRA = new Array(4))[1] = aRA[3] = aR9[0] = aR9[2] = 0, aRA[0] = aR9[3] = -xJ, aR9[1] = aRA[2] = xJ
	}

	function aRC() {
		if (-1 !== a9D)
			if (0 !== aD.zw && aH.nQ()) {
				for (var aRD = !1, aB = 3; 0 <= aB; aB--) aR8[aB] && (aRD = !0, iO += aR9[aB], iP += aRA[aB], af.a1Q(aR9[aB], aRA[aB]), aS.a8t());
				aRD ? bf.dl = !0 : ar.nG()
			} else ar.nG()
	}
	this.a1z = function(e8) {
		0 !== aD.zw && aH.nQ() && (aR7 || aRB(), aR8[e8] = !0, -1 === a9D) && (a9D = setInterval(aRC, 20), aRC())
	}, this.a22 = function(e8) {
		if (0 !== aD.zw && (aR7 || aRB(), aR8[e8] = !1, -1 !== a9D)) {
			for (var aRD = !1, aB = 3; 0 <= aB; aB--) aRD = aRD || aR8[aB];
			aRD || this.nG()
		}
	}, this.nG = function() {
		if (aR7 && -1 !== a9D) {
			for (var aB = 3; 0 <= aB; aB--) aR8[aB] = !1;
			clearInterval(a9D), a9D = -1
		}
	}
}

function cj() {
	this.y = new aRE, this.mQ = new aRF, this.p3 = new aRG, this.aEB = new aRH, this.aBz = new aRI, this.aNF = new aRJ, this.pf = new aRK, this.aP4 = new aRL, this.a6U = new aRM, this.aRN = new aRO, this.aRP = new aRQ, this.aRR = new aRS, this.aRT =
		new aRU, this.dd = function() {
			this.y.dd()
		}
}

function aRE() {
	var aRV, aRX;
	this.aFY = 5, this.aRW = null;

	function aRe(aB) {
		return aRX[aB].aR7 && aRV[aB].aRe()
	}

	function aRg(a12) {
		aRX[a12].eM = bf.eM, aRX[a12].aRZ = !1
	}
	this.a1C = 0, this.a15 = 0, this.dd = function() {
		this.aRW = new Array(this.aFY);
		this.aRW[0] = "territorial.io";
		var aKC = ay.aKY(0);
		ay.a4W(0);
		for (var aB = 1; aB < this.aFY; aB++) this.aRW[aB] = aK.zU() + ".territorial.io";
		for (ay.a4W(aKC), aRV = new Array(this.aFY), aRX = new Array(this.aFY), aB = this.aFY - 1; 0 <= aB; aB--) aRX[aB] = {
			aR7: !1,
			eM: 0,
			aRZ: !1
		};
		this.aFZ(0, 0)
	}, this.aRa = function(aB) {
		return aRV[aB]
	}, this.j3 = function() {
		for (var aB = this.aFY - 1; 0 <= aB; aB--) this.aND(aB) && bf.eM > aRX[aB].eM + 15e3 && b0.p3.aRb(aB, aRX[aB].aRZ);
		!this.aND(0) && bf.eM > aRX[0].eM + 8e3 && (aRX[0].eM = bf.eM, this.aFZ(0, 0))
	}, this.aP0 = function(id) {
		return this.aFZ(0, id) && this.aRc(0)
	}, this.aFZ = function(a12, aMM) {
		if (aRX[a12].aR7) {
			if (aRV[a12].aRe()) return aRV[a12].aRf(aMM), aRV[a12].aND();
			aRV[a12].rq()
		}
		return this.aRd(a12, aMM), !1
	}, this.aRd = function(a12, aMM) {
		aRX[a12].aR7 = !0, aRg(a12), aRV[a12] = new aRh, aRV[a12].dd(a12, aMM)
	}, this.aRf = function(a12, aMM) {
		aRe(a12) && aRV[a12].aRf(aMM)
	}, this.aRi = function(a12, aMM) {
		b0.aBz.aRj(a12)
	}, this.aRc = function(aB) {
		return this.aND(aB) && aRV[aB].aRc()
	}, this.aRk = function(aB) {
		aRV[aB].aRk()
	}, this.aND = function(aB) {
		return aRX[aB].aR7 && aRV[aB].aND()
	}, this.send = function(a12, aC) {
		aRg(a12), aRV[a12].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a1k = function(a12) {
		8 === aa.a17() && (aRX[a12].aRZ = !0, b0.mQ.aRl = !0)
	}, this.close = function(a12, aRm) {
		aRe(a12) && aRV[a12].close(aRm)
	}, this.aRn = function(a12, aRm) {
		o.a1F(aRm), aRe(a12) && aRV[a12].close(aRm)
	}, this.a1G = function(aRm) {
		for (var aB = this.aFY - 1; 0 <= aB; aB--) this.close(aB, aRm)
	}, this.aRo = function(a12, aRm) {
		for (var aB = this.aFY - 1; 0 <= aB; aB--) aB !== a12 && this.close(aB, aRm)
	}, this.a4i = function() {
		this.close(this.a1C, 3246)
	}, this.aRp = function(a12, e) {
		aRV[a12].rq(), o.a11(a12, e.code)
	}
}

function aRF() {
	this.aRl = !1, this.j3 = function() {
		bf.k7() % 250 != 249 || aD.gw || (b0.aBz.aRq(+(this.aRl && ag.mi[aD.eX]), al.kB + bN.y.lz), this.aRl = !1)
	}
}

function aRM() {
	function aSH(aSI) {
		var eq = aD.data,
			aSI = (eq.selectedPlayer = bH.pg(aSI), eq.spawningSeed = bH.pg(14), bH.pg(4)),
			aSI = (aSI < 7 ? (eq.gameMode = 1, eq.numberTeams = aSI + 2) : 9 === aSI ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === aSI ? 0 : 10 === aSI ? 1 : 2), eq.isContest = bH.pg(1), bH
				.pg(6));
		return eq.mapType = bS.aDA(aSI) ? 0 : 1, bS.aDB(eq, aSI), eq.mapSeed = bH.pg(14), aSI
	}
	this.aRs = function(a12, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aRn(a12, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bH.pg(1) ? function(a12) {
			var aRw = bH.pg(6);
			0 === aRw ? function(a12) {
					if (0 === a12 && 8 !== aa.a17()) {
						t.y.aQP();
						for (var aS9 = bH.pg(12), aSA = bH.pg(6), g = new Array(aS9), aB = 0; aB < aS9; aB++) g[aB] = bH.pg(aSA);
						aT.a9J(g)
					}
				}(a12) : 2 === aRw ? b0.aRN.aRy(a12) : 3 === aRw || 4 === aRw ? ax.dd() : 9 === aRw ? b0.aRP.aRz(a12) : 10 === aRw ? b0.aRR.aS0() : 11 === aRw ? b0.aRP.aS1(a12) : 12 === aRw ? b0.aRR.aS2() : 13 === aRw ? b0.aRT.aS3() :
				14 === aRw ? b0.aRT.aS4() : 15 === aRw ? b0.aRP.aS5() : 16 === aRw ? b0.aRN.aS6(a12) : 17 === aRw ? b0.aRN.aS7(a12) : 19 === aRw && b0.aRN.aS8(a12)
		} : function(a12) {
			if (8 !== aa.a17() && !ax.aG3()) return;
			if (a12 !== b0.y.a1C) b0.y.aRn(a12, 3244);
			else if (0 === bH.pg(1)) bf.a05.aSJ(bH.aC);
			else {
				var aB, a12 = bH.pg(2);
				if (0 === a12) {
					var pI, p3 = bH.pg(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[aD.eX] && (pI = bH.pg(10), aN.pH(p3, aD.eX, pI), af.q8(p3, 1, pI))
				} else if (1 === a12) ! function() {
					var p3 = bH.pg(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[aD.eX] && b5.aJp(0, [p3], !0) && aN.pY(p3, 1)
				}();
				else if (2 === a12) ! function() {
					var p3 = bH.pg(9),
						target = bH.pg(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[target] && 0 !== ag.mi[aD.eX] && b5.aJp(1, [p3], !0) && (af.q8(p3, 3, 96), af.q8(target, 4, 96), aN.a6b(p3, target))
				}();
				else if (l.a9 && !l.aA) {
					var en = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), en = Math.min(b8.p0.pi.length, 540), aB = 0; aB < en; aB++) bD.aSP(32, b8.p0.pi[aB]);
					b0.y.send(b0.y.a1C, bD.aC)
				}
			}
		})(a12), bf.aRv())
	}, this.aSB = function(aC) {
		if (bH.dd(aC), bH.e8 = 1, 3 === bH.pg(6)) {
			bH.e8 += 20;
			var eq = aD.data = new a4P,
				aC = aSH(9),
				aDC = eq.humanCount = bH.pg(9) + 1;
			eq.selectableSpawn = 1 === eq.gameMode || aDC < 100, eq.colorsData = new Uint32Array(aDC), eq.playerNamesData = new Array(aDC);
			for (var aB = 0; aB < aDC; aB++) bH.e8++, eq.colorsData[aB] = bH.pg(18), eq.playerNamesData[aB] = bG.vu.vy(bH.pg(5));
			aa.aFk(), bS.a7(aC, eq.mapSeed), aD.a4U()
		} else ! function() {
			bH.e8 += 20;
			var eq = aD.data = new a4P,
				aSG = aSH(1);
			eq.humanCount = 2;
			eq.selectableSpawn = 1, eq.elo = new Uint16Array(2), eq.colorsData = new Uint32Array(2), eq.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e8++, eq.colorsData[aB] = bH.pg(18), eq.elo[aB] = bH.pg(14), eq.playerNamesData[aB] = bG.vu.vy(bH.pg(5));
			aa.aFk(), bS.a7(aSG, eq.mapSeed), aD.a4U()
		}()
	}, this.aSE = function() {
		bH.e8 = 1;
		var aRw = bH.pg(6),
			aSF = bH.pg(10);
		return b0.y.a15 === aSF ? (b0.y.a1C = aSF, !1) : (b0.y.close(b0.y.a15, 3247), b0.y.a1C = aSF, ax.aD7 = bH.pg(10), ax.aFs = bH.pg(3 === aRw ? 9 : 1), b0.y.aFZ(aSF, 5) && b0.p3.aFz(), !0)
	}
}

function aRS() {
	this.aS0 = function() {
		bj.y.vS(), bj.s0.s1(105, bF.sq.sr(bF.sq.ss(5))), bj.s0.s1(106, bF.sq.sr(bF.sq.ss(8))), bj.s0.s1(109, bH.pg(30)), bj.s0.s1(108, bj.eK.data[109].value), bj.s0.s1(111, bj.eK.data[109].value + 1), bj.s0.s1(107, 0), bj.s0.s1(110, "")
	}, this.aS2 = function() {
		var data;
		bH.size < bD.aSQ(29) ? b0.y.aRn(0, 3254) : ((data = {
			sm: bH.pg(30),
			vf: bH.pg(16),
			vg: bH.pg(30),
			vh: bH.pg(30),
			vi: bH.pg(30),
			vj: bH.aSR(32),
			username: bG.vw.wE(5),
			vk: bG.vw.wE(3),
			vl: bG.vw.wE(3),
			vm: bH.aSR(32),
			vn: bH.aSR(32),
			vo: bH.pg(30),
			vp: bH.aSR(32),
			vq: bH.aSR(32),
			vr: bH.aSR(32),
			vs: bH.aSR(32),
			aNN: bH.aSR(32),
			aNO: bH.aSR(30),
			aNZ: bH.aSR(32),
			aNa: bG.vw.wE(3),
			aNS: bH.aSR(2),
			aNT: bH.aSR(10),
			aNQ: bG.vw.wE(8),
			aNU: bH.aSR(5),
			aNA: bH.pg(30),
			aNM: bH.pg(30),
			a0N: bH.aSR(32),
			aNb: bH.pg(1),
			aNc: bH.pg(1)
		}).aNb && (data.aNd = bH.aSR(32), data.aNe = bH.pg(30), data.aNf = bH.pg(30), data.aNg = bH.pg(1)), 8 === t.sn && (25 === t.a4x().aOz ? (data.aMr = !0, t.y.aMX = data, t.a4x().aPE(25, !1)) : (data.aMr = !1, bj.s0.s1(160, +(data
			.aNb && data.aNg)), data.sl = bj.eK.data[105].value, t.y.aMU = data, bj.s0.ve(data), t.a4x().aPE(16, !0))))
	}
}

function aRU() {
	this.aS3 = function() {
		var aB;
		if (bH.size < bD.aSQ(23)) b0.y.aRn(0, 3259);
		else {
			var t6 = bH.pg(6),
				en = bH.pg(10),
				data = [];
			if (9 === t6 || 10 === t6 || 11 === t6) {
				for (aB = 0; aB < en; aB++) data.push([bH.pg(30), bG.vw.wE(5), bH.aSR(32), 0, bH.pg(30)]);
				8 === t.sn && t.a4x().aPE(21, !0, {
					t6: t6,
					data: data
				})
			} else if (12 === t6) {
				for (aB = 0; aB < en; aB++) data.push([bH.pg(20), bH.pg(30), bH.pg(30), bH.aSR(32), bH.pg(30), bG.vw.wE(5), bG.vw.wE(5)]);
				8 === t.sn && t.a4x().aPE(21, !0, {
					t6: t6,
					data: data
				})
			} else {
				var hk = bH.pg(16);
				if (bH.aSS(39 + 16 * hk + en * (0 === t6 ? 111 : 1 === t6 ? 101 : 2 === t6 || 3 === t6 ? 127 : 212))) {
					if (0 === t6)
						for (aB = 0; aB < en; aB++) data.push([bH.pg(30), bG.vu.vy(bH.pg(5)), bH.pg(16), bH.pg(30), bH.pg(30)]);
					else if (1 === t6)
						for (aB = 0; aB < en; aB++) data.push([bH.pg(16), bG.vu.vy(bH.pg(3)), bH.pg(16), bG.vu.vy(bH.pg(5)), bH.pg(31), bH.pg(30)]);
					else if (2 === t6 || 3 === t6)
						for (aB = 0; aB < en; aB++) data.push([bH.pg(30), bG.vu.vy(bH.pg(5)), bH.aSR(32), bH.pg(30), bH.pg(30)]);
					else
						for (aB = 0; aB < en; aB++) data.push([bH.pg(20), bH.pg(30), bH.pg(30), bH.pg(30), bH.pg(30), bH.aSR(32), bH.pg(30), bG.vu.vy(bH.pg(5)), bG.vu.vy(bH.pg(5))]);
					8 === t.sn && t.a4x().aPE(21, !0, {
						t6: t6,
						data: data
					})
				} else b0.y.aRn(0, 3260)
			}
		}
	}, this.aS4 = function() {
		if (bH.size < bD.aSQ(29)) b0.y.aRn(0, 3265);
		else {
			var aST = bH.pg(4),
				aSU = bH.pg(7),
				aSV = bH.pg(11);
			if (bH.aSS(29 + 16 * aSU + 16 * aSV + 11 * aST)) {
				for (var data = [], aB = 0; aB < aST; aB++) {
					for (var a0c = bG.vu.vy(bH.pg(3)), aSW = bH.pg(8), aOD = [], f6 = 0; f6 < aSW; f6++) aOD.push(bH.pg(16));
					data.push({
						name: "[" + a0c + "]",
						aOD: aOD
					})
				}
				8 === t.sn && t.a4x().aPE(23, !0, data)
			} else b0.y.aRn(0, 3266)
		}
	}
}

function aRO() {
	function aSY() {
		var id = bH.pg(3);
		return 0 === id ? {
			id: id,
			sl: bH.pg(30),
			r: bn.aCT.aEH(bG.vw.wE(7))
		} : 1 === id ? {
			id: id,
			sl: bH.pg(30),
			aDI: bH.pg(3),
			value: bH.pg(30),
			target: bH.pg(30)
		} : 2 === id ? {
			id: id,
			sl: bH.pg(30),
			aDI: bH.pg(3)
		} : 3 === id ? {
			id: id,
			sl: bH.pg(30),
			aDI: bH.pg(3),
			value: bH.pg(4),
			target: bH.pg(30)
		} : 4 === id ? {
			id: id,
			sl: bH.pg(30),
			aDI: bH.pg(3),
			target: bH.pg(30)
		} : 5 === id ? {
			id: id,
			aDI: bH.pg(6)
		} : 6 === id ? {
			id: id,
			value: bH.pg(17)
		} : null
	}
	this.aRy = function(a12) {
		if (a12 !== b0.y.a15) b0.y.close(a12, 3239);
		else if (6 !== aa.a17()) b0.y.close(a12, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var re = bn.y.rf[aB],
					playerCount = (re.te = bH.pg(10), re.eT = bH.pg(6), re.mapSeed = bH.pg(14), re.aD3 = bH.pg(4), re.aEl = bH.pg(6), re.aEm = bH.pg(4), re.aD9 = bH.pg(1), re.aDr = bH.pg(12), re.spawningSeed = bH.pg(14), bH.pg(16));
				bn.tt.tv[aB] = bH.pg(16);
				for (var f6 = 0; f6 < playerCount; f6++) bn.tt.aCg(aB, bH.pg(30), bG.vw.wE(5), bH.pg(4), bH.pg(30), bH.pg(7), bH.pg(16), bH.pg(18), bH.pg(11), bH.pg(12))
			}
			t.u(29), bn.y.aDi(!0)
		}
	}, this.aS6 = function(a12) {
		if (a12 !== b0.y.a15) b0.y.close(a12, 3239);
		else if (bn.a14) {
			bn.y.aDg[0] = bH.pg(20), bn.y.aDg[1] = bH.pg(20);
			for (var aSX = bH.pg(16), f6 = 0; f6 < aSX; f6++) {
				var id = bH.pg(3);
				0 === id ? bn.tt.aCg(bH.pg(2), bH.pg(30), bG.vw.wE(5), 0, 1234566, 127, 0, bH.pg(18), 0, bH.pg(12)) : 1 === id ? bn.tt.aCx(bH.pg(16), bH.pg(2)) : 2 === id ? bn.tt.aCt(bH.pg(16), bH.pg(2), bH.pg(2)) : 3 === id ? bn.tt.aCw(bH.pg(
					16), bH.pg(2)) : 4 === id ? bn.tt.aCm(bH.pg(16), bH.pg(2), bH.pg(4), bH.pg(30), bH.pg(7), bH.pg(16), bH.pg(11)) : 5 === id && bn.tt.aCn(bH.pg(16), bH.pg(2), bH.pg(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var re = bn.y.rf[aB];
				if (re.te = bH.pg(10), 0 === re.te) {
					if (re.a1C = bH.pg(10), re.aD7 = bH.pg(10), bn.aCU.dm(aB)) return;
					re.eT = bH.pg(6), re.mapSeed = bH.pg(14), re.aD3 = bH.pg(4), re.aEl = bH.pg(6), re.aEm = bH.pg(4), re.aD9 = bH.pg(1), re.aDr = bH.pg(12), re.spawningSeed = bH.pg(14), re.aEn.push(re.aEn[0]), re.aEn.shift()
				}
			}
			bn.y.aDk()
		} else b0.y.close(a12, 3251)
	}, this.aS7 = function(a12) {
		if (a12 !== b0.y.a15) b0.y.close(a12, 3272);
		else if (bn.a14) {
			for (var rc = bH.pg(4), re = bn.y.rf[rc], rg = re.rg, u8 = (re.rh = bH.pg(20), bH.pg(6)), aB = 0; aB < u8; aB++) {
				var aF4 = aSY();
				bn.rp.aF3(aF4), rg.push(aF4)
			}
			bn.y.aDs(rc)
		} else b0.y.close(a12, 3273)
	}, this.aS8 = function(a12) {
		a12 !== b0.y.a15 ? b0.y.close(a12, 3276) : bn.a14 ? bn.message.aED(aSY()) : b0.y.close(a12, 3277)
	}
}

function aRQ() {
	this.aRz = function(a12) {
		var aSL, r5;
		bH.aSS(70) ? (aSL = bH.pg(3), r5 = bi.aSZ.j3(bH.pg(30), bH.pg(30)), b0.aBz.aSa(a12, r5, aSL), 0 < aSL || (0 === a12 && 0 === bj.eK.data[105].value.length ? b0.aBz.aP3(0) : b0.aNF.aSb(a12), 4 === b0.y.aRa(a12).aSc() ? 6 === aa.a17() && b0
			.aEB.aFa(a12) : 5 !== b0.y.aRa(a12).aSc() || 8 !== aa.a17() && 10 !== aa.a17() || b0.p3.aFz())) : b0.y.aRn(a12, 3269)
	}, this.aS1 = function(a12) {
		var id = bH.pg(6);
		1 === id ? (bj.s0.s1(160, bH.pg(30)), b0.y.aRk(a12), aT.a9F || b0.aBz.aP3(1), b7.aBx(), 8 === t.sn && t.a4x().aPD()) : 21 === id ? 8 === t.sn && t.a4x().aPE(17) : 22 === id && (bj.s0.s1(106, bj.eK.data[110].value), bj.s0.s1(110, ""),
			8 === t.sn) && t.a4x().aPE(15)
	}, this.aS5 = function() {
		var en = bH.pg(16),
			aSd = bH.pg(16);
		if (bH.aSS(55 + 10 * en + 16 * aSd)) {
			for (var g = [], aB = 0; aB < en; aB++) g.push(bG.vu.vy(bH.pg(10)));
			b7.aC1(g)
		} else b0.y.aRn(0, 3270)
	}
}

function aRG() {
	this.aRb = function(a12, aRZ) {
		bD.a7(8), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aRZ ? 1 : 0), b0.y.send(a12, bD.aC)
	}, this.aFz = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a15), bD.a8(10, ax.aD7), bD.a8(9, ax.aFs), bD.a8(10, l.dx), bD.a8(14, l.dq), b0.y.send(b0.y.a1C, bD.aC)
	}, this.p4 = function(eZ) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eZ), b0.y.send(b0.y.a1C, bD.aC)
	}, this.p5 = function(iN, jJ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, iN), bD.a8(10, jJ), b0.y.send(b0.y.a1C, bD.aC)
	}, this.p9 = function(iN, p7) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, iN), bD.a8(9, p7), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pB = function(iN, pA) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, iN), bD.a8(27, pA), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pD = function(iN, n5) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, iN), bD.a8(16, n5), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pG = function(jJ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jJ), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pK = function(e8) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e8), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pM = function(pL) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pL), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pO = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pP = function(iN, eZ, jJ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, iN), bD.a8(10, jJ), bD.a8(22, eZ), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pW = function(aSe, aSf) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aSf), bD.a8(10, aSe), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pZ = function(a6U) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a6U), b0.y.send(b0.y.a1C, bD.aC)
	}, this.pd = function(aSg, target) {
		var aB, en = aSg.length;
		for (bD.a7(14 + 9 * en), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < en; aB++) bD.a8(9, aSg[aB]);
		b0.y.send(b0.y.a1C, bD.aC)
	}
}

function aRJ() {
	this.aSh = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.aBz.aSi(), b0.y.send(0, bD.aC)
	}, this.aSb = function(a12) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.sq.wA(bj.eK.data[105].value, 5), bG.sq.wA(bj.eK.data[106].value, 8), bD.a8(30, bj.eK.data[109].value), b0.y.send(a12, bD.aC)
	}, this.aPG = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.sq.w9(bj.eK.data[110].value), b0.y.send(0, bD.aC)
	}, this.aPC = function(a3m) {
		var en = a3m.qG.length;
		bD.a7(21 + 16 * en), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a3m.sp), bD.a8(8, en), bF.vu.w9(a3m.qG), b0.y.send(0, bD.aC)
	}, this.aNV = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.sp), bG.sq.wA(data.sl, 5), b0.y.send(0, bD.aC)
	}, this.aNG = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.sp), bG.sq.wA(data.sl, 5), bD.aSP(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aRK() {
	this.pe = function() {
		for (var en = aD.kA, zl = bR.result.zl, l3 = zl.length, a0V = (bD.a7(17 + 16 * en + 33 * l3), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, l3), bD.a8(1, +(2 === aD.zt)), bD.a8(1, aD.a0D % 2), ag.a0V), aB = 0; aB < en; aB++) bD.a8(16, a0V[aB]);
		for (var gb = ag.gb, aB = 0; aB < l3; aB++) {
			var gL = zl[aB];
			bD.a8(9, gL), bD.a8(24, gb[gL])
		}
		b0.y.send(b0.y.a1C, bD.aC)
	}
}

function aRL() {
	this.aP5 = function(t6, t7, t8) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, t6), bD.a8(1, +(t7 < 0)), bD.a8(1, +(t8 < 0)), bD.a8(30, Math.abs(t7)), bD.a8(30, Math.abs(t8)), b0.y.send(0, bD.aC)
	}, this.aP6 = function(t6, aP7, aP8) {
		bD.a7(18 + 16 * aP7.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, t6), b0.aBz.aSk(aP7), bD.a8(30, aP8), b0.y.send(0, bD.aC)
	}, this.aPB = function(t6, aP7, aP8) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, t6), bG.sq.wA(aP7, 5), bD.a8(30, aP8), b0.y.send(0, bD.aC)
	}, this.aP9 = function(aOC, a0b) {
		for (var en = a0b.length, hk = 0, aB = 0; aB < en; aB++) hk += a0b[aB].length;
		for (bD.a7(21 + 3 * en + 16 * hk), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aOC), bD.a8(4, en), bD.a8(7, hk), aB = 0; aB < en; aB++) bD.a8(3, a0b[aB].length), bF.vu.w9(a0b[aB]);
		b0.y.send(0, bD.aC)
	}, this.aPA = function(aOC, t7, t8) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aOC), bD.a8(1, +(t7 < 0)), bD.a8(1, +(t8 < 0)), bD.a8(20, Math.abs(t7)), bD.a8(20, Math.abs(t8)), b0.y.send(0, bD.aC)
	}
}

function aRH() {
	this.aFa = function(a12) {
		var username = bj.eK.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + 18 + bi.a1g.pg()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dx), bD.a8(2, bj.eK.data[158].value), b0.aBz.aSk(username), bA.color.a2s(bj.y.vZ())),
			username = (bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), b7.aC3());
		bD.a8(9, username[0]), bD.a8(9, username[1]), bi.a1g.zO(), b0.y.a15 = a12, b0.y.send(a12, bD.aC)
	}, this.aEC = function(aSn, a3m) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aSn), 2 === aSn ? bE.a8(2, a3m) : 3 === aSn ? bF.vw.zO(a3m, 7, bE) : 5 === aSn && (bE.a8(3, a3m.id), bE.a8(3, a3m.value), bE.a8(30, a3m.sl)), b0.y.send(b0.y.a15, bE.aSo())
	}
}

function aRI() {
	this.aRj = function(a12) {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dv), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), b0.y.send(a12, bD.aC)
	}, this.aSa = function(a12, r5, aSL) {
		bD.a7(70), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aSL), bD.a8(30, r5[0]), bD.a8(30, r5[1]), b0.y.send(a12, bD.aC)
	}, this.aP3 = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.aC0 = function(id, qG) {
		var en = Math.min(qG.length, 63);
		bD.a7(19 + 16 * en), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, en), bF.vu.w9(qG), b0.y.send(0, bD.aC)
	}, this.aSq = function(aSF, qR) {
		bD.a7(7 + 26 * qR.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qR.length; aB++) bD.a8(16, qR[aB][0]), bD.a8(10, qR[aB][1]);
		b0.y.send(aSF, bD.aC)
	}, this.aRq = function(aSr, aSs) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aSr), bD.a8(12, aSs), b0.y.send(b0.y.a1C, bD.aC)
	}, this.aSk = function(username) {
		bD.a8(5, username.length), bF.vu.w9(username)
	}
}

function aRh() {
	var a12, aMM, aSt, aSu = ["wss://", "/s50/", "/s51/", "/s52/"],
		aSv = 0;

	function aRi() {
		b0.y.aRi(a12, aMM)
	}

	function aSz(e) {
		b0.a6U.aRs(a12, new Uint8Array(e.data))
	}

	function aT0() {}

	function aRp(e) {
		b0.y.aRp(a12, e)
	}
	this.dd = function(e8, aSw) {
		a12 = e8, aMM = aSw, e8 = l.dr ? "ws://localhost:" + (7130 + a12) + "/" : aSu[0] + b0.y.aRW[a12] + aSu[1 + l.ds], (aSt = new WebSocket(__fx.customLobby.isActive() && 1 === a12 ? __fx.customLobby.getSocketURL() : e8)).binaryType =
			"arraybuffer", aSt.onopen = aRi, aSt.onmessage = aSz, aSt.onclose = aRp, aSt.onerror = aT0
	}, this.aSy = function() {
		return aSt.readyState === aSt.CONNECTING
	}, this.aND = function() {
		return aSt.readyState === aSt.OPEN
	}, this.aRc = function() {
		return aSv
	}, this.aRk = function() {
		aSv = 1
	}, this.aRe = function() {
		return this.aSy() || this.aND()
	}, this.aRf = function(aSw) {
		aMM = aSw
	}, this.aSc = function() {
		return aMM
	}, this.send = function(aC) {
		this.aND() && aSt.send(aC)
	}, this.close = function(aRm) {
		this.aRe() && (aSt.close(aRm), this.rq())
	}, this.rq = function() {
		aSt.onopen = null, aSt.onmessage = null, aSt.onclose = null, aSt.onerror = null
	}
}

function dK() {
	var aT1 = !1,
		a6q = 0,
		i = 0,
		su = 0,
		gap = 0,
		canvas = null,
		y6 = null,
		a2S = null;

	function aT3() {
		for (var aT9, aT7 = 0, en = 0, f8 = Math.floor(i / 2), e7 = Math.floor(su / 2), aT8 = 1.5 * Math.PI, aB = aD.x8; 0 <= aB; aB--) en += a2S[aB], 0 === a2S[aB] && aT7++;
		if (aT1 = !1, y6.clearRect(0, 0, i, i), y6.fillStyle = bB.nf, y6.fillRect(0, 0, i, i), y6.fillStyle = bB.ni, y6.fillRect(0, 0, i, gap), y6.fillRect(0, 0, gap, i), y6.fillRect(i - gap, 0, gap, i), y6.fillRect(0, i - gap, i, gap), 0 < en)
			if (aT7 === aD.x8) {
				for (aB = aD.x8; 0 <= aB; aB--)
					if (0 < a2S[aB]) {
						! function(aB, f8, e7) {
							y6.fillStyle = bg.aTG[bg.kX[aB]], y6.beginPath(), y6.arc(f8, f8, e7, 0, 2 * Math.PI), y6.fill()
						}(aB, f8, e7);
						break
					}!
				function(f8) {
					var fontSize = f8 / 3;
					y6.font = bA.qZ.sN(1, fontSize), y6.fillStyle = bB.ni, y6.fillText("100%", f8, f8 + .1 * fontSize)
				}(f8)
			} else {
				for (aB = 0; aB <= aD.x8; aB++) 0 < a2S[aB] && (! function(aB, f8, e7, aT8, aT9) {
					y6.fillStyle = bg.aTG[bg.kX[aB]], y6.beginPath(), y6.arc(f8, f8, e7, aT8, aT9), y6.lineTo(f8, f8), y6.fill()
				}(aB, f8, e7, aT8, aT9 = aT8 + 2 * Math.PI * a2S[aB] / en), function(f8, e7, aT8, aT9) {
					var fF = (aT9 - aT8) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e7 * Math.min(fF, .37);
					fontSize < 8 || (aT8 = (aT8 + aT9) / 2, aT9 = (__fx.settings.detailedTeamPercentage ? (100 * fF).toFixed(2) : Math.floor(100 * fF + .5)) + "%", e7 *= .525 - Math.max(.6 * (fF - .7), 0), y6.font = bA.qZ.sN(1, fontSize), y6
						.fillStyle = bB.ni, y6.fillText(aT9, f8 + Math.cos(aT8) * e7, f8 + Math.cos(aT8 + 1.5 * Math.PI) * e7))
				}(f8, e7, aT8, aT9), 0 !== aB && aTE(f8, e7, aT8), aT8 = aT9);
				aTE(f8, e7, 1.5 * Math.PI)
			}!
		function(f8, e7) {
			y6.beginPath(), y6.arc(f8, f8, e7, 0, 2 * Math.PI), y6.stroke()
		}(f8, e7)
	}

	function aTE(f8, e7, aTH) {
		y6.beginPath(), y6.moveTo(f8, f8), y6.lineTo(f8 + Math.cos(aTH) * e7, f8 + Math.cos(aTH + 1.5 * Math.PI) * e7), y6.stroke()
	}
	this.dd = function() {
		if (aD.hh) {
			a6q = 0, a2S = new Uint32Array(aD.x8 + 1);
			for (var aB = aD.x8; 0 <= aB; aB--) a2S[aB] = 0;
			for (aB = al.kB - 1; 0 <= aB; aB--) a2S[bg.el[al.kC[aB]]] += 1;
			this.resize()
		} else a2S = y6 = canvas = null
	}, this.a7n = function() {
		return i
	}, this.resize = function() {
		aD.hh && (i = Math.floor(a0.a1.hw() && !aD.nB ? .18 * h.min : .13 * h.hx), i = (i *= 1 + (.5 + .2 * a0.a1.hw()) * aD.nB) + i % 2, su = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, y6 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), y6.lineWidth = gap, y6.strokeStyle = bB.ni, bA.qZ.textAlign(y6, 1), bA.qZ.textBaseline(y6, 1), aT3())
	}, this.kg = function() {
		var dt, kh = this.ki();
		return bg.kX[kh] || (kh = function() {
			for (var kh = -1, aB = aD.x8; 1 <= aB; aB--)(-1 === kh || a2S[aB] > a2S[kh]) && (kh = aB);
			return kh
		}(), dt = ag.gb[lk[0]], -1 !== kh && a2S[kh] > dt) ? a2S[kh] : dt
	}, this.a0p = function() {
		return a6q = 31, this.j3(), this.ki()
	}, this.ki = function() {
		for (var kh = 0, aB = aD.x8; 0 < aB; aB--) a2S[aB] > a2S[kh] && (kh = aB);
		return kh
	}, this.li = function(aT5) {
		for (var gG = 0, kC = al.kC, el = bg.el, en = al.kB, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kC[aB];
			el[gL] === aT5 && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.kj = function(aT5) {
		for (var gG = 0, kC = al.kC, el = bg.el, en = al.kB, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kC[aB];
			el[gL] !== aT5 && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.a3L = function() {
		for (var gG = 0, aB = aD.x8; 0 <= aB; aB--) gG += 0 < a2S[aB];
		return gG
	}, this.j3 = function() {
		if (aD.hh && 32 <= ++a6q) {
			a6q = 0;
			for (var aB = aD.x8; 0 <= aB; aB--) a2S[aB] = 0;
			for (aB = al.kB - 1; 0 <= aB; aB--) a2S[bg.el[al.kC[aB]]] += ag.gb[al.kC[aB]];
			aT1 = !0
		}
	}, this.mV = function() {
		aD.hh && aT1 && aT3()
	}, this.uf = function() {
		aD.hh && (aD.nB ? ug.drawImage(canvas, bc.gap, bc.gap) : ug.drawImage(canvas, bc.gap, a7o + 2 * bc.gap))
	}
}

function da() {
	function aTN(eu, en, ew, zY, a94, fE) {
		if (!(ew < 1 || a94 < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zY(eR)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTR(ew, en, eu, zY, aTL, fE) {
		if (!(eu < 1 || aTL < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zY(eR)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTV(iE, iF, aTI) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTI) < bM.iG(iE, aTI)) ? iF : iE
	}
	this.hC = function(aTI) {
		return this.a00(aTI, function(eR) {
			return ac.ei(eR)
		})
	}, this.hI = function(aTI) {
		return this.a00(aTI, function(eR) {
			return ac.aGi(eR, aD.eX)
		})
	}, this.a00 = function(aTI, zY) {
		return function(aTI, aTJ, zY) {
			for (var h2 = bM.ev(aTI), h4 = bM.ex(aTI), aTL = bS.ey - 2, a94 = bS.ez - 2, aTM = -1, eq = 0; eq < aTJ; eq++) {
				var a93 = Math.max(h2 - eq, 1),
					aKg = Math.max(h4 - eq, 1),
					xj = Math.min(h2 + eq, aTL),
					xi = Math.min(h4 + eq, a94),
					iE = aTN(h2, xj - h2, h4 - eq, zY, a94, 1),
					iF = aTN(h2 - 1, h2 - a93 - 1, h4 - eq, zY, a94, -1),
					xj = aTN(h2, xj - h2, h4 + eq, zY, a94, 1),
					a93 = aTN(h2 - 1, h2 - a93 - 1, h4 + eq, zY, a94, -1),
					aTQ = aTR(h4, xi - h4 - 1, h2 - eq, zY, aTL, 1),
					aTS = aTR(h4 - 1, h4 - aKg - 2, h2 - eq, zY, aTL, -1),
					xi = aTR(h4, xi - h4 - 1, h2 + eq, zY, aTL, 1),
					aKg = aTR(h4 - 1, h4 - aKg - 2, h2 + eq, zY, aTL, -1);
				if (aTM = aTV(aTM, iE, aTI), aTM = aTV(aTM, iF, aTI), aTM = aTV(aTM, xj, aTI), aTM = aTV(aTM, a93, aTI), aTM = aTV(aTM, aTQ, aTI), aTM = aTV(aTM, aTS, aTI), aTM = aTV(aTM, xi, aTI), 0 <= (aTM = aTV(aTM, aKg, aTI)) && eq *
					eq >= bM.iG(aTM, aTI)) return aTM
			}
			return -1
		}(aTI, bM.hu(), zY)
	}
}

function d3() {
	function aTX(key) {
		var aQe;
		return "undefined" == typeof URLSearchParams || (aQe = window.location.search, "string" != typeof(aQe = new URLSearchParams(aQe).get(key))) || aQe.length < 1 ? null : aQe
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aTX("account");
				if (!value && !(value = aTX("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.sn, new so(1e3, {
					sp: 0,
					sl: value,
					sm: 0
				})), 1
			}()) {
			var value = aTX("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a0z = new URL(window.location.href);
		a0z.search = "";
		try {
			return history.replaceState(null, "", a0z.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aNi = function(key, value) {
		if (0 === a0.id) try {
			var a0z = new URL(window.location.href),
				gL = a0z.searchParams;
			gL.set(key, value), a0z.search = gL.toString(), history.replaceState(null, "", a0z.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aTZ, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a4W(0)
	}, this.value = function(gL) {
		return g[gL]
	}, this.aKY = function() {
		return bL.du(aTZ - 1, 2)
	}, this.a4W = function(aKC) {
		aTZ = 2 * aKC % 32768 + 1
	}, this.random = function() {
		return aTZ = 167 * aTZ % 32768
	}, this.jS = function(md) {
		return bL.du(md * this.random(), 32768)
	}, this.k2 = function(gL) {
		return 0 !== gL && this.random() < this.value(gL)
	}, this.ik = function(f6, f7) {
		return f6 + this.jS(f7 - f6)
	}
}

function cz() {
	this.pt = new aTa, this.a4h = new aTb, this.aHp = new aTc, this.dd = function() {
		aD.gw || this.pt.dd()
	}, this.j3 = function() {
		aD.gw || (this.pt.j3(), 3 !== t.sn) || bf.k7() % 15 != 5 && 2 !== aD.zw || t.a4x().aQf()
	}, this.aQi = function() {
		0 === aD.zw && aa.aFk(), aD.a4Q.a4p(), aD.data.canvas = null, b0.y.close(b0.y.a1C, 3257), b0.y.a1C = 0, aD.data.isReplay = 1, aD.a4U()
	}, this.aQh = function(qG) {
		var aB = qG.indexOf("=");
		return 0 <= aB ? qG.substring(aB + 1) : qG
	}, this.aQg = function(qG) {
		return "https://territorial.io/?replay=" + qG
	}
}

function aTa() {
	this.aTe = null, this.aTf = null, this.aTg = null, this.aTh = null, this.aTi = null, this.aTj = null, this.a4g = "";
	var aTk = 0;
	this.dd = function() {
		this.aTe = [], this.aTf = [], this.aTg = [], this.aTh = [], this.aTi = [0], this.aTj = [0], aTk = 0, this.a4g = ""
	}, this.pu = function(id, fW, fY, fa) {
		aD.gw || 2 === aD.zw || (0 === this.aTi[aTk] && (this.aTj[aTk] ? (this.aTi.push(1), this.aTj.push(0), aTk++) : this.aTi[aTk] = 1), this.aTe.push(id), this.aTf.push(fW), this.aTg.push(void 0 === fY ? 0 : fY), this.aTh.push(void 0 === fa ?
			0 : fa), this.aTj[aTk]++)
	}, this.j3 = function() {
		0 === this.aTi[aTk] ? this.aTj[aTk]++ : (this.aTi.push(0), this.aTj.push(0), aTk++)
	}
}

function aTc() {
	var aTl = 0;

	function aTp(qG, id) {
		aTl || (id ? 1 === id ? aN.a5w = L(430) + ": " + qG : t.u(4, 3, new v(L(431), qG, 1)) : t.u(4, 3, new v("⚠️ " + L(429), qG, 1)))
	}
	this.wE = function(qG, aTm) {
		var qR;
		return aTl = aTm, bG.sq.w6(bG.sq.w4(bG.sq.w2(qG))), aN.a5w = "", !(! function() {
			if (bH.size < 10) aTp("File Too Small");
			else {
				var aTr = bH.pg(12),
					aSs = (aTr !== l.rVersion && aTp("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aTr) + ("   Compatible at territorial.io/" + aTr), 1), bH.pg(12)),
					aTs = bH.pg(31);
				if (aTs !== bH.size) aTp("Size Error: " + aTs + " " + bH.size);
				else if (function(j, aTr) {
						for (var gL = bH.aC, en = bH.size, aSs = aTr, aB = 3; aB < en; aB++) aSs = aSs + gL[aB] & 4095;
						return aSs === j || (aTp("Hash Error: " + aSs + " " + j + " " + en), !1)
					}(aSs, aTr)) return 1
			}
			return
		}() || (aTm = bH, (qR = aD.data = new a4P).mapType = aTm.pg(2), qR.mapProceduralIndex = aTm.pg(8), qR.mapRealisticIndex = aTm.pg(8), qR.mapSeed = aTm.pg(14), qR.mapName = aTm.aTu(5), 2 === qR.mapType && aTm.aTv(), qR
			.passableWater = aTm.pg(1), qR.passableMountains = aTm.pg(1), qR.playerCount = aTm.pg(10), qR.humanCount = aTm.pg(10), qR.selectedPlayer = aTm.pg(9), qR.gameMode = aTm.pg(1), qR.playerMode = aTm.pg(2), qR.battleRoyaleMode =
			aTm.pg(2), qR.numberTeams = aTm.pg(4), qR.isZombieMode = aTm.pg(1), qR.isContest = aTm.pg(1), qR.isReplay = aTm.pg(1), qR.elo = aTm.aTw(2, 14, 2), qR.colorsType = aTm.pg(1), qR.colorsPersonalized = aTm.pg(1), qR.colorsData =
			aTm.aTw(10, 18, 512), qR.selectableColor = aTm.pg(1), qR.teamPlayerCount = aTm.aTw(4, 10, 9), qR.neutralBots = aTm.pg(1), qR.botDifficultyType = aTm.pg(2), qR.botDifficultyValue = aTm.pg(4), qR.botDifficultyTeam = aTm.aTw(4,
				4, 9), qR.botDifficultyData = aTm.aTw(10, 4, 512), qR.spawningType = aTm.pg(2), qR.spawningSeed = aTm.pg(14), qR.spawningData = aTm.aTw(11, 12, 1024), qR.selectableSpawn = aTm.pg(1), qR.playerNamesType = aTm.pg(2), qR
			.playerNamesData = aTm.aTx(10, 5, 512), qR.selectableName = aTm.pg(1), qR.aIncomeType = aTm.pg(2), qR.aIncomeValue = aTm.pg(8), qR.aIncomeData = aTm.aTw(10, 8, 512), qR.tIncomeType = aTm.pg(2), qR.tIncomeValue = aTm.pg(8), qR
			.tIncomeData = aTm.aTw(10, 8, 512), qR.iIncomeType = aTm.pg(2), qR.iIncomeValue = aTm.pg(8), qR.iIncomeData = aTm.aTw(10, 8, 512), qR.sResourcesType = aTm.pg(2), qR.sResourcesValue = aTm.pg(11), qR.sResourcesData = aTm.aTw(10,
				11, 512), ! function() {
				var i6 = bH,
					wF = i6.pg(5),
					aTy = i6.pg(30),
					aTz = i6.pg(30);
				if (aTy + aTz > 8 * i6.size) return void aTp("Corrupted File");
				return function(en) {
						var aU2 = new Uint8Array(en),
							aU3 = new Uint16Array(en),
							aU4 = new Uint32Array(en),
							aU5 = new Uint32Array(en);
						b9.pt.aTe = aU2, b9.pt.aTf = aU3, b9.pt.aTg = aU4, b9.pt.aTh = aU5;
						for (var aB = 0; aB < en; aB++) {
							var id = bH.pg(4);
							aU2[aB] = id, aU3[aB] = bH.pg(9), 0 === id ? aU4[aB] = bH.pg(22) : 1 === id ? (aU4[aB] = bH.pg(10), aU5[aB] = bH.pg(10)) : 2 === id ? (aU4[aB] = bH.pg(10), aU5[aB] = bH.pg(9)) : 3 === id ? (aU4[aB] = bH.pg(10),
								aU5[aB] = bH.pg(27)) : 4 === id ? (aU4[aB] = bH.pg(10), aU5[aB] = bH.pg(16)) : 5 === id || 6 === id ? aU4[aB] = bH.pg(10) : 7 === id ? aU4[aB] = bH.pg(1) : 10 === id && (aU4[aB] = bH.pg(20), aU5[aB] =
								bH.pg(22))
						}
					}(aTy),
					function(en, wF) {
						var aTi = new Uint8Array(en),
							aTj = new Array(en);
						aTj.fill(0), b9.pt.aTi = aTi, b9.pt.aTj = aTj;
						for (var aB = 0; aB < en; aB++) aTi[aB] = bH.pg(1), aTj[aB] = bH.pg(wF)
					}(aTz, wF), 1
			}()) || (bH.e8 < 8 * bH.size - 13 || bH.e8 > 8 * bH.size ? (aTp("Out Of Bounds Error: " + bH.e8 + " " + 8 * bH.size), 1) : (b9.pt.a4g = qG, 2 === aD.data.mapType && (aTp("Load base64 image...", 2), 1))))
	}, this.aHq = function(aHQ, aTq) {
		var a2n = document.createElement("canvas"),
			hp = a2n.getContext("2d");
		if (a2n.width = aHQ.width, a2n.height = aHQ.height, hp.drawImage(aHQ, 0, 0), aD.data.canvas = a2n, aTl || aTq) return aD.zw ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aQi()
	}
}

function aTb() {
	this.zO = function() {
		var wF = function() {
				for (var aTj = b9.pt.aTj, en = aTj.length, max = 0, aB = 0; aB < en; aB++) max = Math.max(max, aTj[aB]);
				return wM(Math.max(max, 1))
			}(),
			i = (qR = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e8 += 43, i.a8(2, qR.mapType), i.a8(8, qR.mapProceduralIndex), i.a8(8, qR.mapRealisticIndex), i.a8(14, qR.mapSeed), i.aUC(qR.mapName, 5), 2 === qR.mapType && i.aUD(qR.canvas),
				i.a8(1, qR.passableWater), i.a8(1, qR.passableMountains), i.a8(10, qR.playerCount), i.a8(10, qR.humanCount), i.a8(9, qR.selectedPlayer), i.a8(1, qR.gameMode), i.a8(2, qR.playerMode), i.a8(2, qR.battleRoyaleMode), i.a8(4, qR
					.numberTeams), i.a8(1, qR.isZombieMode), i.a8(1, qR.isContest), i.a8(1, qR.isReplay), i.dk(qR.elo, 2, 14), i.a8(1, qR.colorsType), i.a8(1, qR.colorsPersonalized), i.dk(qR.colorsData, 10, 18), i.a8(1, qR.selectableColor), i.dk(
					qR.teamPlayerCount, 4, 10), i.a8(1, qR.neutralBots), i.a8(2, qR.botDifficultyType), i.a8(4, qR.botDifficultyValue), i.dk(qR.botDifficultyTeam, 4, 4), i.dk(qR.botDifficultyData, 10, 4), i.a8(2, qR.spawningType), i.a8(14, qR
					.spawningSeed), i.dk(qR.spawningData, 11, 12), i.a8(1, qR.selectableSpawn), i.a8(2, qR.playerNamesType), i.aUE(qR.playerNamesData, 10, 5), i.a8(1, qR.selectableName), i.a8(2, qR.aIncomeType), i.a8(8, qR.aIncomeValue), i.dk(qR
					.aIncomeData, 10, 8), i.a8(2, qR.tIncomeType), i.a8(8, qR.tIncomeValue), i.dk(qR.tIncomeData, 10, 8), i.a8(2, qR.iIncomeType), i.a8(8, qR.iIncomeValue), i.dk(qR.iIncomeData, 10, 8), i.a8(2, qR.sResourcesType), i.a8(11, qR
					.sResourcesValue), i.dk(qR.sResourcesData, 10, 11), ! function(wF) {
					var i = bE,
						aTe = b9.pt.aTe,
						fW = b9.pt.aTf,
						fY = b9.pt.aTg,
						fa = b9.pt.aTh,
						en = aTe.length;
					i.a8(5, wF), i.a8(30, en), i.a8(30, b9.pt.aTj.length);
					for (var aB = 0; aB < en; aB++) {
						var f8 = aTe[aB];
						i.a8(4, f8), i.a8(9, fW[aB]), 0 === f8 ? i.a8(22, fY[aB]) : 1 === f8 ? (i.a8(10, fY[aB]), i.a8(10, fa[aB])) : 2 === f8 ? (i.a8(10, fY[aB]), i.a8(9, fa[aB])) : 3 === f8 ? (i.a8(10, fY[aB]), i.a8(27, fa[aB])) : 4 === f8 ? (i
							.a8(10, fY[aB]), i.a8(16, fa[aB])) : 5 === f8 || 6 === f8 ? i.a8(10, fY[aB]) : 7 === f8 ? i.a8(1, fY[aB]) : 10 === f8 && (i.a8(20, fY[aB]), i.a8(22, fa[aB]))
					}
				}(wF), ! function(wF) {
					for (var i = bE, aTi = b9.pt.aTi, aTj = b9.pt.aTj, en = aTi.length, aB = 0; aB < en; aB++) i.a8(1, aTi[aB]), i.a8(wF, aTj[aB])
				}(wF), bE.e8),
			qR = bL.du(i - 1, 6) + 1,
			wF = (bD.aSQ(6 * qR) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e8 = 24, i.a8(31, i.g.length), i.e8 = 12, i.a8(12, function() {
					for (var g = bE.g, en = g.length, aSs = l.rVersion, aB = 3; aB < en; aB++) aSs = aSs + g[aB] & 4095;
					return aSs
				}())
			}(), bH.dd(bE.g), bF.sq.sr(bF.sq.ss(qR)));
		return bH.u9(), bE.dd(), wF
	}
}

function cp() {
	var f8, bu = !1,
		aUG = !1,
		aUH = -1e4,
		aUI = -1,
		aUJ = 0;

	function resize(aUN) {
		f8 = 0, ab.tF() && (aUL(aUN) || bu) && (bu = !1, bc.resize(), bW.aBa.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.zw ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a8t()) : (aa.aFm(), aa.aFn()), bf.dl = !0)
	}

	function aUK(fF) {
		return fF && 128 < fF ? Math.floor(fF) : 128
	}

	function aUL(aUN) {
		var i, j, aUP, su, a8H;
		if (!(0 < h.sV)) return su = aUK(document.documentElement.clientWidth), a8H = aUK(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = su, j = a8H, aUP = 0 !== a0.id || i < j ?
			700 : 1200, aUP = Math.min(aUP / ((i + j) / 2), 1), aUP = 0 === bj.eK.data[1].value ? 2 * aUP / 3 : Math.min(aUP + (bj.eK.data[1].value - 1) * (1 - aUP) / 2, 1), h.k = (window.devicePixelRatio || 1) * aUP, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aUN && !aUG ? (aUG = !0, document.body.removeChild(a1P)) : aUG && (aUG = !1, document.body.appendChild(a1P)), i = Math.floor(.5 + su * h.k), j = Math.floor(.5 + a8H * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = aBC(i, j), h.max = a6B(i, j), h.hx = bL.du(i + j, 2), h.uc = i / j, a1P.width = i, a1P.height = j, a1P.style.width = su + "px", a1P.style.height = a8H + "px", aUI = bf.eM + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hx = 0, this.uc = 1, this.k = 1, this.sV = 0, this.de = function() {
		this.i = aUK(document.documentElement.clientWidth) + 2, this.j = aUK(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		f8 = 1, a1P = document.getElementById("canvasA"), (ug = a1P.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aUL(0)
	}, this.j3 = function() {
		50 <= ++f8 && resize(0), -1 === aUI || bf.eM < aUI || (aUI = -1, 2e3 * ++aUJ >= bf.eM + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(jQ) {
		bu = !0, resize(jQ)
	}, this.a27 = function() {
		aUH + 1e3 > bf.eM || (aUH = bf.eM, resize(0))
	}
}

function dH() {
	this.aSZ = new aUR, this.a0l = new aUS, this.a1g = new aUT, this.dd = function() {
		this.a1g.dd()
	}
}

function aUT() {
	this.a1h = new Uint32Array(14);
	var aUU = -1;

	function aUX() {
		var a2n = bA.qZ.wL(2, 2),
			hp = bA.qZ.getContext(a2n, !1);
		return hp.fillStyle = "rgb(128,128,128)", hp.fillRect(0, 0, 2, 2), aUY(a2n.toDataURL())
	}

	function aUY(qG) {
		for (var en = qG.length, aSs = en, aB = 0; aB < en; aB++) aSs += qG.charCodeAt(aB);
		return aSs
	}
	this.dd = function() {}, this.aCe = function() {
		a0.vG && a0.vG.setItem("qix3", "0")
	}, this.pg = function() {
		return 69
	}, this.zO = function() {
		var a2n, hp;
		bD.a8(4, bA.qh.a2R(this.a1h)), bD.a8(1, this.a1h[1] || this.a1h[7]), bD.a8(1, navigator.webdriver ? 1 : 0), bD.a8(20, (0 <= aUU || (a2n = bA.qZ.wL(172, 24), (hp = bA.qZ.getContext(a2n, !0)).fillStyle = "rgba(0,0,250,0.573)", hp.fillRect(
			1, 10, 100, 11), hp.textBaseline = "top", hp.font = "15.7px Arial", hp.fillStyle = "rgba(2,0,0,0.764)", hp.fillText("Ab🎯c DeFg4iJ1l Mnqzy", 2, 2), aUU = aUY(a2n.toDataURL())), aUU % 1048576)), bD.a8(1, 1 - Math.abs(Math.sign(
		aUX() - aUX()))), bD.a8(20, l.dx), a0.vG ? (hp = a0.vG.getItem("qix3"), a0.vG.setItem("qix3", "1"), hp ? "0" === hp ? bD.a8(2, 2) : bD.a8(2, 3) : bD.a8(2, 1)) : bD.a8(2, 0), bD.a8(20, 0)
	}
}

function aUS() {
	this.a0m = function() {
		for (var gL, en = al.kB, zk = al.kC, a0V = ag.a0V, a86 = this.aH9(), aB = 0; aB < en; aB++) gL = zk[aB], bA.g9.jY(gL) || (a0V[gL] = a86);
		var py = ag.py,
			jC = ag.jC,
			jD = ag.jD,
			a0T = ag.a0T,
			en = aD.kA;
		for (aB = 0; aB < en; aB++)(0 === a0T[aB] || jD[aB] < 1 || 2 * py[aB] > 3 * (jC[aB] + jD[aB])) && (a0V[aB] = 0);
		var a0j = 0;
		for (aB = 0; aB < en; aB++) a0j += 0 < a0V[aB];
		return a0j
	}, this.aH9 = function() {
		return Math.min(65535, bf.k7())
	}
}

function aUR() {
	function aUc(g, fF, hf) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fF >> (aB + hf) % 30 & 1)) % 256
	}
	this.j3 = function(aUZ, aUa) {
		var g = new Uint8Array(256);
		return function(g, aUZ, aUa) {
				var aB, aUe = 3 + (4 + aUZ) % 32768,
					aUf = 12 + aUa % 32768,
					aUg = 17 + ((aUZ & aUa) + (aUZ | aUa) + aUZ) % 32768;
				for (aB = 0; aB < 256; aB++) aUe = 1 + aUe * aUf % aUg, g[aB] = aUe % 256
			}(g, aUZ, aUa), aUc(g, aUZ, 2), aUc(g, aUa, 7),
			function(g) {
				var aB, fF, e8 = 0;
				for (aB = 0; aB < 3e4; aB++) fF = g[e8], g[e8] = (fF + aB + g[(e8 + aB) % 256]) % 256, e8 = (fF + aB + e8 + (fF & e8)) % 256
			}(g),
			function(g) {
				var aB, a8H = 1,
					tc = 1;
				for (aB = 0; aB < 256; aB += 2) a8H = (1 + a8H) * (g[aB] + 1) % 1073741824, tc = (1 + tc) * (g[aB + 1] + 1) % 1073741824;
				return [a8H, tc]
			}(g)
	}
}

function cm() {
	var aUh, aUi, i1, aUj;
	this.dd = function() {
		var aB, eu, ew, aSl, aUk, i, j, y6, hm, wW, fF, gL, f3, f6, aUn;
		if (function() {
				if (i1 = !0, aUj = "rgb(" + bS.wU[0] + "," + bS.wU[1] + "," + bS.wU[2] + ")", bS.aKL(bS.eT)) return 1;
				return i1 = !1, 0
			}()) aUi = null;
		else {
			for (aUh = bL.du(96, 4), aUk = 1 === bS.eT ? (aSl = 0, 160) : (aSl = 128, 32), aUj = "rgb(" + aSl + "," + aSl + "," + aSl + ")", aUi = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aUi[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.ey : aUh, j = aB % 2 == 0 ? aUh : bS.ez + 2 * aUh, aUi[aB].width = i, aUi[aB].height = j, wW = (hm = (y6 = aUi[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (ew = aUh - 1; 0 <= ew; ew--)
						for (fF = aUk + Math.floor((ew + 1) * (aSl - aUk) / (aUh + 1)), eu = i - 1; 0 <= eu; eu--) wW[gL = 4 * ((0 === aB ? aUh - ew - 1 : ew) * i + eu)] = fF, wW[gL + 1] = fF, wW[gL + 2] = fF, wW[gL + 3] = 255;
				else {
					for (eu = aUh - 1; 0 <= eu; eu--)
						for (fF = aUk + Math.floor((eu + 1) * (aSl - aUk) / (aUh + 1)), ew = j - 1 - aUh; aUh <= ew; ew--) wW[gL = 4 * (ew * i + (3 === aB ? aUh - eu - 1 : eu))] = fF, wW[gL + 1] = fF, wW[gL + 2] = fF, wW[gL + 3] = 255;
					for (f6 = 1; 0 <= f6; f6--)
						for (eu = aUh - 1; 0 <= eu; eu--)
							for (ew = aUh - 1; 0 <= ew; ew--) f3 = (Math.pow(eu * eu + ew * ew, .5) + 1) / (aUh + 1), fF = aUk + Math.floor((1 < f3 ? 1 : f3) * (aSl - aUk)), wW[gL = 4 * ((0 === f6 ? aUh - ew - 1 : ew + f6 * (j - aUh)) * i + (
								1 === aB ? eu : aUh - eu - 1))] = fF, wW[gL + 1] = fF, wW[gL + 2] = fF, wW[gL + 3] = 255
				}
				y6.putImageData(hm, 0, 0)
			}
			aUn = aUk, bS.wP.fillStyle = "rgb(" + aUn + "," + aUn + "," + aUn + ")", bS.wP.fillRect(0, 0, bS.ey, 1), bS.wP.fillRect(0, bS.ez - 1, bS.ey, 1), bS.wP.fillRect(0, 0, 1, bS.ez), bS.wP.fillRect(bS.ey - 1, 0, 1, bS.ez)
		}
	}, this.y0 = function() {
		var f6 = i1 ? 0 : -aUh;
		aM5(f6, f6, bS.ey - 2 * f6, bS.ez - 2 * f6, ba.aUo, ba.aUp, ba.aUq, ba.aUr) || (ug.fillStyle = aUj, ug.fillRect(0, 0, h.i, h.j))
	}, this.uf = function() {
		i1 || (aM4(0, -aUh, bS.ey, aUh, ba.aUo, ba.aUp, ba.aUq, ba.aUr) && ug.drawImage(aUi[0], ba.aUs, ba.aUt - aUh), aM4(bS.ey, -aUh, aUh, bS.ez + 2 * aUh, ba.aUo, ba.aUp, ba.aUq, ba.aUr) && ug.drawImage(aUi[1], ba.aUs + bS.ey, ba.aUt - aUh),
			aM4(0, bS.ez, bS.ey, aUh, ba.aUo, ba.aUp, ba.aUq, ba.aUr) && ug.drawImage(aUi[2], ba.aUs, ba.aUt + bS.ez), aM4(-aUh, -aUh, aUh, bS.ez + 2 * aUh, ba.aUo, ba.aUp, ba.aUq, ba.aUr) && ug.drawImage(aUi[3], ba.aUs - aUh, ba.aUt - aUh))
	}
}

function d6() {
	this.aH7 = new aUu, this.y3 = new aUv, this.y = new aUw, this.iX = new aUx, this.aUn = new aUy, this.m4 = new aUz, this.jy = new aV0, this.kv = new aV1, this.aV2 = new aV3, this.aV4 = new aV5, this.mF = new aV6, this.hN = new aV7, this.lU =
		new aV8, this.kx = new aV9, this.hQ = new aVA, this.m8 = new aVB, this.q6 = new aVC, this.dd = function() {
			this.lU.dd(), this.y3.dd(), this.y.dd(), this.iX.dd(), this.aUn.dd(), this.aV4.dd(), this.m8.dd()
		}, this.uf = function() {
			this.aV4.uf(), this.y3.uf()
		}
}

function aV0() {
	this.j3 = function(player) {
		return !!bN.mF.mG(player) && !(bN.y.pr[player] >= Math.max(3 * ao.performance.lM, aE.kO[aE.hW[player]]) || !bA.g9.mH(player, aE.kM[aE.hW[player]], 32, 0)) && (aW.aAz() ? function(player) {
			var aVF = bN.kx.aB2(),
				en = aVF.length;
			if (0 === en) return !1;
			aVF = aVF[ay.jS(en)], en = bN.y.m2[aVF];
			if (bN.m8.m9(player, en)) return !1;
			return !! function(player, mB) {
				var mB = bM.iV(bN.y.mE[mB]),
					h2 = bM.ev(mB),
					mB = bM.ex(mB),
					n8 = ag.ie[player],
					n9 = ag.ih[player],
					nL = ag.ig[player],
					player = ag.ii[player],
					nL = Math.max(h2 - nL, n8 - h2),
					n8 = Math.max(mB - player, n9 - mB);
				return nL < 100 && n8 < 100
			}(player, aVF) && !!bN.hQ.q5(player, en, 1) && (bA.g9.mJ(player), bN.y.mK(player), !0)
		}(player) : !!(ao.iz.j3(player) || ao.io.j3(player) || ao.iq.j3(player)) && (function(player) {
			bO.fP[1] = 4, bA.g9.mJ(player), bN.y.mK(player)
		}(player), !0))
	}
}

function aVB() {
	var aVI = 0,
		aVJ = null;
	this.dd = function() {
		null === aVJ && (aVJ = new Uint16Array(2 * bN.y.kO)), aVI = 0
	}, this.jG = function(aVK, m8) {
		var aVL = aVJ;
		aVL[aVI++] = aVK, aVL[aVI++] = m8
	}, this.m9 = function(player, m7) {
		for (var aVL = aVJ, en = aVI, aB = 0; aB < en; aB += 2)
			if (aVL[aB] === m7 && bN.kx.aVM(aVL[aB + 1]) && player === bN.y.m3[bO.fP[2]] >> 3) return !0;
		return !1
	}, this.aVN = function(aVO) {
		var m4 = bN.y.m0[aVO];
		if (!(m4 < 64)) {
			var m7 = bN.y.m2[aVO],
				aVL = aVJ,
				en = aVI;
			for (let aB = en - 2; 0 <= aB; aB -= 2)
				if (aVL[aB] === m7) {
					{
						aVT = void 0;
						var aVT = aVL[aB + 1];
						bN.kx.aVM(aVT) && bN.m8.aVb(bO.fP[2])
					}
					aVL[aB] = aVL[en - 2], aVL[aB + 1] = aVL[en - 1], en -= 2
				} aVI = en
		}
	}, this.aVQ = function(aVR, aVS) {
		for (var aVT = bN.y.m2[aVR], m7 = -1, aVL = aVJ, en = aVI, aB = 1; aB < en; aB += 2)
			if (aVL[aB] === aVT) {
				m7 = aVL[aB - 1];
				break
			} if (-1 === m7) return !1;
		if (!bN.kx.aVM(m7)) return !1;
		var aVO = bO.fP[2],
			lT = bN.y.m1[aVO];
		if (aVS === lT[lT.length - 1]) bN.y.m1[aVR] = bN.lU.aVU(bN.y.m1[aVR], bN.lU.lc(lT));
		else {
			var aVV = bN.kx.aVW(lT, aVS);
			if (-1 === aVV) return !1;
			var aVX = bN.y.mD[aVO];
			aVV === aVX ? (aVO = bM.iV(bN.y.mE[aVO]), bN.y.m1[aVR] = bN.lU.aVZ(bN.y.m1[aVR], lT, aVV, aVS, bM.iD(lT[aVV], aVS) > bM.iD(lT[aVV], aVO))) : bN.y.m1[aVR] = bN.lU.aVZ(bN.y.m1[aVR], lT, aVV, aVS, aVX < aVV)
		}
		return !0
	}, this.aVb = function(aVc) {
		var lT, l3 = bN.y,
			m4 = l3.m0[aVc];
		return m4 % 64 != 5 && (lT = l3.m1[aVc], l3.aVd[aVc] = 65535 - l3.aVd[aVc], l3.mD[aVc] = lT.length - l3.mD[aVc] - 2, l3.m1[aVc] = bN.lU.lc(lT), l3.m0[aVc] = m4 - m4 % 64 + 5, !0)
	}
}

function aV6() {
	this.mG = function(player) {
		return !!aD.data.passableWater && bN.y.lz !== bN.y.kO && bN.y.pr[player] !== bN.y.aVe && 0 !== ag.gU[player].length
	}, this.q1 = function(aTI) {
		var m4 = bO.fP[1];
		return !(4 <= m4 || !bN.kx.aVf(bM.ed(aTI))) && ac.ei(bM.ed(bM.iZ(aTI, m4)))
	}
}

function aUu() {
	this.aH8 = function(player) {
		for (var a7W = bN.y.a7W, t7 = player << 3, aB = t7 + bN.y.pr[player] - 1; t7 <= aB; aB--) this.aVg(a7W[aB])
	}, this.aVg = function(aVh) {
		var y = bN.y,
			aVi = y.lz - 1,
			aVj = y.m3[aVh],
			aVk = y.aVl[aVh],
			aVm = y.mE[aVh];
		y.lz = aVi, y.m3[aVh] = y.m3[aVi], y.mE[aVh] = y.mE[aVi], y.aVd[aVh] = y.aVd[aVi], y.a6T[aVh] = y.a6T[aVi], y.aVl[aVh] = y.aVl[aVi], y.m2[aVh] = y.m2[aVi], y.m0[aVh] = y.m0[aVi], y.aVn[aVh] = y.aVn[aVi], y.m1[aVh] = y.m1[aVi], y.mD[aVh] =
			y.mD[aVi], y.a7W[y.m3[aVh]] = aVh,
			function(aTH) {
				var player = aTH >> 3,
					y = bN.y,
					en = y.pr[player] - 1,
					aVq = (player << 3) + en;
				y.pr[player] = en, aVq !== aTH && (y.a7W[aTH] = y.a7W[aVq], y.m3[y.a7W[aTH]] = aTH)
			}(aVj), bN.iX.iX[bM.iW(y.mE[aVh])][y.aVl[aVh]] = aVh, aVi = bM.iW(aVm), aVj = aVk, aVi = bN.iX.iX[aVi], y = aVi.pop(), aVj !== aVi.length && (aVi[aVj] = y, bN.y.aVl[y] = aVj)
	}
}

function aUv() {
	var aVs, aVt = 8,
		aVu = null;

	function aVz(wW, eZ, e8) {
		eZ *= 4;
		wW[eZ] = 255, wW[1 + eZ] = 255, wW[2 + eZ] = e8, wW[3 + eZ] = 255
	}

	function aW1(hp, aUj) {
		var eu, ew, i7, eZ, aW3, aW4, hj = aVt,
			hm = bA.qZ.getImageData(hp, hj, hj),
			wW = hm.data,
			l3 = (hj >> 1) - .5,
			aW6 = bA.qh.a2L(aUj, .5);
		for (bA.qh.a2N(aUj, aW6, 300) || bA.qh.a2P(aUj, 100), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) aW4 = (hj - 1.5) * (hj - 1.5) / 4, wW[eZ = 4 * (ew * hj + eu)] = (aW3 = (i7 = (i7 = eu - l3) * i7 + (i7 = ew - l3) * i7) <= (hj - 4.5) * (hj - 4.5) / 4 ? aW6 : aUj)[0], wW[1 + eZ] = aW3[1], wW[2 + eZ] = aW3[2],
				wW[3 + eZ] = aW4 < i7 ? 0 : 255;
		hp.putImageData(hm, 0, 0)
	}
	this.dd = function() {
		var e8, hj, a2n, hp, hm, wW;
		(aVs = aVs || new Array(aD.ek)).fill(null), e8 = 255, hj = aVt + 4, a2n = bA.qZ.wL(hj, hj), hp = bA.qZ.getContext(a2n, !0), hm = bA.qZ.getImageData(hp, hj, hj), aVz(wW = hm.data, hj + 1, e8), aVz(wW, hj + 2, e8), aVz(wW, 2 * hj + 1, e8),
			aVz(wW, 2 * hj - 3, e8), aVz(wW, 2 * hj - 2, e8), aVz(wW, 3 * hj - 2, e8), aVz(wW, hj * (hj - 3) + 1, e8), aVz(wW, hj * (hj - 2) + 1, e8), aVz(wW, hj * (hj - 2) + 2, e8), aVz(wW, hj * (hj - 2) - 2, e8), aVz(wW, hj * (hj - 1) - 3, e8),
			aVz(wW, hj * (hj - 1) - 2, e8), hp.putImageData(hm, 0, 0), aVu = a2n,
			function() {
				if (aD.hh)
					for (var a2n = new Array(bg.kX.length), en = aD.ek, aVx = aVs, aAN = bg.aAN, aB = 0; aB < en; aB++) {
						var a5D = aAN[aB];
						a2n[a5D] || (a2n[a5D] = function(a5D) {
							var a2n = bA.qZ.wL(aVt, aVt),
								hp = bA.qZ.getContext(a2n, !0),
								g = bO.fM;
							return g.set(bg.aW2[a5D]), aW1(hp, g), a2n
						}(a5D)), aVx[aB] = a2n[a5D]
					}
			}()
	}, this.uf = function() {
		var aB, player, aW7, aMD, hW, i6, aW9, aWB, aWC, mE = bN.y.mE,
			m3 = bN.y.m3,
			a6T = bN.y.a6T,
			aVn = bN.y.aVn,
			aWD = aVs,
			aWE = aD.eX,
			en = bN.y.lz,
			aWF = h.i,
			aWG = h.j,
			aWH = bS.ey << 4,
			ec = hy,
			eR = ec / aVt,
			n8 = iO / ec,
			n9 = iP / ec,
			i7 = (aWF + iO) / ec - n8,
			iA = (aWG + iP) / ec - n9,
			hp = ug;
		for (hp.imageSmoothingEnabled = ec < 9, bA.qZ.textAlign(hp, 1), bA.qZ.textBaseline(hp, 1), aB = 0; aB < en; aB++) player = m3[aB] >> 3, hW = a6T[aB], aW7 = .9 + .1 * Math.log10(hW), aMD = (i6 = mE[aB]) % aWH / 16 - aW7, i6 = aWG * (Math
			.floor(i6 / aWH) / 16 - aW7 - n9) / iA, aW9 = -2 * (aWC = ec * aW7) * (1 + (aWB = +(player === aWE)) / 8), aWB = aWB * aWC / 4, (aWC = aWF * (aMD - n8) / i7) < aW9 || i6 < aW9 || aWF + aWB < aWC || aWG + aWB < i6 || (aMD = 2 *
			aW7 * eR, aW9 = aW7 * ec, null === (aWB = aWD[player]) && (aWD[player] = aWB = function(player) {
				var a2n = bA.qZ.wL(aVt, aVt);
				return aW1(bA.qZ.getContext(a2n, !0), ac.a77(player)), a2n
			}(player)), player === aWE && (hp.setTransform(aMD, 0, 0, aMD, aWC - 2 * aMD, i6 - 2 * aMD), hp.drawImage(aVu, 0, 0)), hp.setTransform(aMD, 0, 0, aMD, aWC, i6), hp.drawImage(aWB, 0, 0), (aW7 = Math.floor(function(hW) {
				if (hW < 1e3) return .42;
				if (hW < 1e4) return .34;
				if (hW < 1e6) return .26;
				if (hW < 1e8) return .19;
				return .15
			}(hW) * aW9)) < 6) || (hp.setTransform(1, 0, 0, 1, 0, 0), hp.fillStyle = aVn[aB] ? bB.oG : bB.ni, hp.font = bA.qZ.sN(1, aW7), hp.fillText(bA.rY.zD(hW), aWC + aW9, i6 + aW9 + .1 * aW7));
		hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aV5() {
	var aWK;
	this.dd = function() {
		if (aD.hh) {
			var hd = 1 - aD.x9;
			aWK = new Array(bg.kX.length);
			for (var aB = aD.x8 - 1; 0 <= aB; aB--) {
				var a5D = bg.kX[aB + hd];
				aWK[a5D] = bP.y.aWM(20, bg.aWN[a5D])
			}
			9 === aD.kS && (aWK[1] = bP.y.aWM(20, bg.aWN[1]))
		} else aWK = [bP.y.aWM(20, bg.aWN[7])]
	}, this.uf = function() {
		var nS = hy;
		if (!(5 <= nS)) {
			var aWF = h.i,
				aWG = h.j,
				n8 = iO / nS,
				n9 = iP / nS,
				nL = (aWF + iO) / nS,
				nM = (aWG + iP) / nS,
				gM = -20 * nS,
				aWP = .5 * gM,
				aWH = bS.ey << 4,
				en = bN.y.lz,
				mE = bN.y.mE,
				m3 = bN.y.m3,
				aAN = bg.aAN,
				a2n = aWK,
				hp = ug;
			3 < nS && (hp.globalAlpha = .5 * (5 - nS));
			for (var aB = 0; aB < en; aB++) {
				var i6 = mE[aB],
					eu = aWF * (i6 % aWH / 16 - n8) / (nL - n8) + aWP,
					i6 = aWG * (Math.floor(i6 / aWH) / 16 - n9) / (nM - n9) + aWP;
				aWF < eu || aWG < i6 || eu < gM || i6 < gM || (hp.setTransform(nS, 0, 0, nS, eu, i6), hp.drawImage(a2n[aAN[m3[aB] >> 3]], 0, 0))
			}
			hp.globalAlpha = 1, hp.setTransform(nS, 0, 0, nS, 0, 0)
		}
	}
}

function aV9() {
	this.aWS = function(player, id) {
		for (var aWT = ag.gU[player], en = aWT.length, aB = 0; aB < en; aB++)
			if (bM.hz(aWT[aB], id)) return !0;
		return !1
	}, this.aWU = function(player, eZ) {
		for (var iF, aWV, eR, aWT = ag.gU[player], en = aWT.length, i = bS.ey, aWX = bM.ev(eZ), aWY = bM.ex(eZ), et = -1, min = bS.ey * bS.ey + bS.ez * bS.ez, id = ac.eV(bM.ed(eZ)), aB = 0; aB < en; aB++)(aWV = (aWV = aWX - (iF = (eR = aWT[
			aB]) >> 2) % i) * aWV + (aWV = aWY - ~~((.5 + iF) / i)) * aWV) < min && bM.hz(eR, id) && (min = aWV, et = iF);
		return et
	}, this.ky = function(iE, iF) {
		for (var id = ac.eV(bM.ed(iF)), i0 = bM.hs, eR = bM.ed(iE), aWZ = -1, aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			ac.i1(ec) && ac.eV(ec) === id && (-1 === aWZ || bM.iG(bM.eb(ec), iF) < bM.iG(aWZ, iF)) && (aWZ = bM.eb(ec))
		}
		return aWZ
	}, this.lX = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec) && ac.xy(player, ec)) return !0
		}
		return !1
	}, this.lY = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.ee(ec)) return !0;
			if (ac.gN(ec)) {
				ec = ac.ef(ec);
				if (player !== ec && bs.eg(player, ec)) return !0
			}
		}
		return !1
	}, this.m5 = function(eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec)) {
				ec = ac.ef(ec);
				if (bA.g9.jY(ec)) return ec
			}
		}
		return -1
	}, this.aVf = function(eR) {
		if (ac.i1(eR))
			for (var i0 = bM.hs, aB = 0; aB < 4; aB++)
				if (ac.ei(eR + i0[aB])) return !0;
		return !1
	}, this.n7 = function(player, id) {
		for (var t7 = player << 3, t8 = t7 + bN.y.pr[player], m2 = bN.y.m2, a7W = bN.y.a7W, aB = t7; aB < t8; aB++) {
			var a7X = a7W[aB];
			if (m2[a7X] === id) return a7X
		}
		return -1
	}, this.nC = function(player) {
		return 0 === bN.y.pr[player] ? -1 : bN.y.a7W[player << 3]
	}, this.a5V = function(lN, lO) {
		var en = bN.y.lz;
		if (en < 1) return -1;
		for (var mE = bN.y.mE, aWa = 80, aOT = -1, aB = 0; aB < en; aB++) {
			var f3 = bM.i3(lN, lO, mE[aB]);
			f3 < aWa && (aWa = f3, aOT = aB)
		}
		return function(aB, lN, lO) {
			if (aB < 0) return;
			var aWh = bN.y.mE[aB],
				aWi = bM.i9(aWh),
				aWh = bM.iC(aWh),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a6T[aB]));
			return aB = Math.max(aB, bM.iQ(bA.qZ.tC(.02, 1.7))), bL.aMC(bM.i8(lN), bM.iB(lO), aWi, aWh, aB)
		}(aOT, lN, lO) ? aOT : -1
	}, this.aVM = function(n5) {
		for (var en = bN.y.lz, m2 = bN.y.m2, aB = 0; aB < en; aB++)
			if (m2[aB] === n5) return bO.fP[2] = aB, !0;
		return !1
	}, this.aH4 = function(player) {
		for (var t7 = player << 3, t8 = t7 + bN.y.pr[player], a7W = bN.y.a7W, a6T = bN.y.a6T, hW = 0, aB = t7; aB < t8; aB++) hW += a6T[a7W[aB]];
		return hW
	}, this.aWc = function(player, aVc) {
		aVc = bN.y.m1[aVc];
		return this.lX(player, aVc[aVc.length - 1])
	}, this.aWd = function(iE, iF, f3, aWe) {
		var iI = bM.ev(iE),
			iE = bM.ex(iE),
			iK = bM.ev(iF),
			iF = bM.ex(iF),
			iK = (f3 = Math.max(f3, 1), iK - iI),
			iF = iF - iE,
			i7 = bL.du(Math.abs(iK) * aWe, f3),
			aWe = bL.du(Math.abs(iF) * aWe, f3);
		return bM.fB(iI + Math.sign(iK) * i7, iE + Math.sign(iF) * aWe)
	}, this.aVW = function(lT, eZ) {
		for (var en = lT.length - 1, eu = bM.ev(eZ), ew = bM.ex(eZ), aB = 0; aB < en; aB++) {
			var iE = lT[aB],
				iF = lT[aB + 1],
				n8 = bM.ev(iE),
				iE = bM.ex(iE),
				nL = bM.ev(iF),
				iF = bM.ex(iF);
			if (!(eu !== n8 && eu !== nL && Math.sign(eu - n8) === Math.sign(eu - nL) || ew !== iE && ew !== iF && Math.sign(ew - iE) === Math.sign(ew - iF))) {
				if (n8 === nL || iE === iF) return aB;
				if (Math.abs(eu - n8) === Math.abs(ew - iE) && Math.abs(eu - nL) === Math.abs(ew - iF)) return aB
			}
		}
		return -1
	}, this.aB2 = function() {
		for (var aWk = lk[0], m3 = bN.y.m3, lz = bN.y.lz, g = [], aB = 0; aB < lz; aB++) bA.g9.km(aWk, m3[aB] >> 3) && g.push(aB);
		return g
	}, this.lV = function(player, lT) {
		for (var t7 = player << 3, t8 = t7 + bN.y.pr[player], a7W = bN.y.a7W, m1 = bN.y.m1, hF = lT[0], kl = lT[lT.length - 1], aB = t7; aB < t8; aB++) {
			var gL = m1[a7W[aB]];
			if (gL[0] === hF && gL[gL.length - 1] === kl) return !0
		}
		return !1
	}
}

function aVA() {
	function aWn(player, aVc) {
		aVc = bM.iV(bN.y.mE[aVc]), aVc = ac.eV(bM.ed(aVc));
		return !!bN.kx.aWS(player, aVc)
	}

	function aWl(player) {
		return bN.mF.mG(player) && !bN.lU.la()
	}
	this.hR = function(player, eZ) {
		return !!aWl(player) && -1 !== (eZ = function(player, eZ) {
			for (var en = bN.y.lz, mE = bN.y.mE, m3 = bN.y.m3, aWa = bM.hu(), aOT = -1, aB = 0; aB < en; aB++) {
				var f3 = bM.iD(eZ, bM.iV(mE[aB]));
				f3 < aWa && bA.g9.km(player, m3[aB] >> 3) && (aWa = f3, aOT = aB)
			}
			return aOT
		}(player, eZ)) && !!aWn(player, eZ) && (bO.fP[3] = bN.y.m2[eZ], !0)
	}, this.pC = function(player, n5) {
		return !!aWl(player) && !!bN.kx.aVM(n5) && !!aWn(player, bO.fP[2])
	}, this.q5 = function(player, n5, aWo) {
		return !! function(player, n5, aWo) {
			if (aWl(player) && bN.kx.aVM(n5)) {
				n5 = bO.fP[2];
				if (bA.g9.km(player, bN.y.m3[n5] >> 3)) {
					if (function(player, aVc) {
							return bN.kx.aWc(player, aVc) && (bO.g[0] = bN.lU.lc(bN.y.m1[aVc]), bO.fP[1] = 6, !0)
						}(player, n5)) return 1;
					var aVH = bM.iV(bN.y.mE[n5]),
						aWs = bN.kx.aWU(player, aVH);
					if (-1 !== aWs) {
						aWs = bM.iD(aWs, aVH);
						if (!(aWo && 120 < aWs)) {
							aWo = function(aVc, aWt, aVH) {
								var lT = bN.y.m1[aVc],
									aVc = bN.y.mD[aVc],
									aWv = bM.iD(aVH, lT[aVc + 1]);
								if (aWt <= aWv) return bN.kx.aWd(aVH, lT[aVc + 1], aWv, aWt);
								for (var f3 = aWt - aWv, en = lT.length - 1, aB = aVc + 1; aB < en; aB++) {
									var aWw = bM.iD(lT[aB], lT[aB + 1]);
									if (f3 <= aWw) return bN.kx.aWd(lT[aB], lT[aB + 1], aWw, f3);
									f3 -= aWw
								}
								return lT[en]
							}(n5, aWs, aVH);
							if (bN.kv.q2(player, aWo, 1)) return bO.fP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n5, aWo) && (player = bO.fP[2], bN.y.m0[player] = 64 + bN.y.m0[player] % 64, bN.m8.jG(n5, bN.y.mI), !0)
	}
}

function aUz() {
	function aX1(player, hW, aWz, aVH) {
		var jJ;
		if (ac.ee(aWz)) jJ = aD.ek;
		else {
			if ((jJ = ac.ef(aWz)) === player) return void bd.gD(player, hW - bA.g9.gC(player, hW), 12);
			if (!bs.eg(player, jJ)) return void b8.kD.pR(player, jJ, hW)
		}
		ad.jW(player, jJ) || ad.jo(player) ? (ag.gF[player].push(aVH << 2), ad.jG(player, hW, jJ), aF.jH(player, !0)) : bd.gD(player, hW, 12)
	}
	this.j3 = function() {
		for (var m0 = bN.y.m0, mE = bN.y.mE, aVd = bN.y.aVd, aB = bN.y.lz - 1; 0 <= aB; aB--) 65535 === aVd[aB] && function(aB, aVH, he) {
			if (6 === he) {
				if (bN.m8.aVQ(aB, aVH)) return bN.y.mD[aB]++, bN.y.aVd[aB] = 0, 0
			} else {
				var player = bN.y.m3[aB] >> 3,
					aB = bN.y.a6T[aB];
				bd.aX0(player), he < 4 ? aX1(player, aB, aVH + bM.hr[he] << 2, aVH) : 4 === he ? function(player, hW, aVH) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVH);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aX1(player, hW, er, aVH);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && !ac.xy(player, er)) return aX1(player, hW, er, aVH);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aX1(player, hW, er, aVH)
				}(player, aB, aVH) : 5 === he && function(player, hW, aVH) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVH);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && ac.xy(player, er)) return aX1(player, hW, er, aVH);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aX1(player, hW, er, aVH);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aX1(player, hW, er, aVH)
				}(player, aB, aVH)
			}
			return 1
		}(aB, bM.iV(mE[aB]), m0[aB] % 64) && (bN.m8.aVN(aB), bN.aH7.aVg(aB))
	}, this.aWy = function(player, eZ, he, n5) {
		if (!(4 <= he)) {
			var aWE = aD.eX;
			if (bA.g9.gz(aWE) && bs.eg(player, aWE) && player !== aWE && 0 !== ag.gU[aWE].length) {
				var aWz = eZ + bM.hr[he] << 2;
				if (ac.ee(aWz) || bs.eg(player, ac.ef(aWz))) {
					for (var f1 = !1, aB = 0; aB < 4; aB++)
						if (aWz = eZ + bM.hr[aB] << 2, ac.ei(aWz) && !ac.ee(aWz) && ac.ef(aWz) === aWE) {
							f1 = !0;
							break
						} f1 && (aN.a6c(719, 0), aN.yO(180, L(432, [ag.yP[player]]), 719, player, bB.oF, bB.nf, -1, !0, void 0, {
						f7: 1,
						n5: n5
					}))
				}
			}
		}
	}
}

function aUw() {
	this.kO = 512, this.aVe = 8, this.lz = 0, this.mI = 0, this.m3 = new Uint16Array(this.kO), this.mE = new Uint32Array(this.kO), this.aVd = new Uint16Array(this.kO), this.a6T = new Uint32Array(this.kO), this.aVl = new Uint16Array(this.kO), this
		.m2 = new Uint16Array(this.kO), this.m0 = new Uint8Array(this.kO), this.aVn = new Uint8Array(this.kO), this.m1 = new Array(this.kO), this.mD = new Uint16Array(this.kO), this.pr = new Uint8Array(aD.ek), this.a7W = new Uint16Array(this.aVe * aD
			.ek), this.dd = function() {
			this.lz = 0, this.mI = 0, this.pr.fill(0), this.m1.fill(null)
		}, this.mK = function(player) {
			var hW = bO.fK[0],
				m4 = bO.fP[1],
				lT = bO.g[0],
				aX4 = this.mI,
				en = this.lz,
				aX5 = bM.iU(lT[0]),
				aX6 = this.pr[player],
				aX7 = (player << 3) + aX6;
			this.m3[en] = aX7, this.mE[en] = aX5, this.aVd[en] = 0, hW < 60 ? (bA.g9.gA(player, 60 - hW), this.a6T[en] = 60) : this.a6T[en] = hW, this.aVl[en] = bN.iX.mK(en, bM.iW(aX5)), this.m2[en] = aX4, this.m0[en] = m4, this.aVn[en] = 0, this.m1[
				en] = lT, this.mD[en] = 0, this.mI = (aX4 + 1) % 65536, this.pr[player] = aX6 + 1, this.a7W[aX7] = en, this.lz++, bN.m4.aWy(player, lT[lT.length - 1], m4, aX4)
		}, this.j3 = function() {
			bN.m4.j3();
			for (var gL = aD.eX, dt = bN.kx.aH4(gL), sA = (! function(sA) {
					for (var aXC, mE = sA.mE, a6T = sA.a6T, aVn = sA.aVn, aVd = sA.aVd, aVl = sA.aVl, m1 = sA.m1, mD = sA.mD, sA = sA.lz, aWH = bS.ey << 4, aB = sA - 1; 0 <= aB; aB--) {
						var aXD = mE[aB],
							lT = m1[aB],
							aXE = mD[aB],
							aX5 = bM.iU(lT[aXE]),
							aXF = bM.iU(lT[aXE + 1]),
							aXG = aX5 % aWH,
							aX5 = ~~((aX5 + .5) / aWH),
							aXI = aXF % aWH,
							aXJ = ~~((aXF + .5) / aWH),
							aXK = aXI - aXG,
							aXL = aXJ - aX5,
							eq = Math.max(~~Math.sqrt(aXK * aXK + aXL * aXL + .5), 1),
							aXM = a6T[aB],
							aXM = (aXM = aVn[aB] ? 4e4 : 25e4 + Math.min(20 * aXM, 3e5) + Math.min(aXM >> 3, 5e4), aVd[aB] + Math.max(~~((aXM + .5) / eq), 1));
						65535 <= aXM ? aXE + 2 < lT.length ? (mD[aB] = aXE + 1, mE[aB] = aXC = function(aB, aXN, aXG, aXH, aXE, eq, lT, aWH) {
							aXN = Math.min(aXN - 65535, 65535);
							var lT = bM.iU(lT[aXE + 2]),
								aXE = lT % aWH - aXG,
								lT = ~~((lT + .5) / aWH) - aXH,
								aXQ = Math.max(~~Math.sqrt(aXE * aXE + lT * lT + .5), 1);
							return aXN = Math.min(Math.floor((eq * aXN + .5) / aXQ), 65534), bN.y.aVd[aB] = aXN, aXG + bL.du(aXN * aXE, 65535) + aWH * (aXH + bL.du(aXN * lT, 65535))
						}(aB, aXM, aXI, aXJ, aXE, eq, lT, aWH)) : (mE[aB] = aXC = aXF, aVd[aB] = 65535) : (aVd[aB] = aXM, mE[aB] = aXC = aXG + bL.du(aXM * aXK, 65535) + aWH * (aX5 + bL.du(aXM * aXL, 65535))), aVl[aB] = bN.iX.aXP(aVl[aB],
							aXD, aXC)
					}
				}(this), ! function(sA) {
					if (bf.k7() % 2 == 1) {
						var aB, hf, l3, f7, f8, aXR, yr, aXS, hF, n8, n9, aX5, aXT, a8y, aXV, kl, en = sA.lz,
							mE = sA.mE,
							m3 = sA.m3,
							a6T = sA.a6T,
							aVn = sA.aVn,
							iX = bN.iX.iX,
							aXX = iX.length,
							aXY = bN.iX.aXY,
							aWH = bS.ey << 4,
							aXZ = aD.hh,
							aT5 = bg.el,
							gM = (en - 1) * (bL.du(bf.k7(), 2) % 2);
						for (aB = 0; aB < en; aB++)
							for (hf = Math.abs(aB - gM), aX5 = mE[hf], l3 = bM.iW(aX5), hF = m3[hf] >> 3, n8 = aX5 % aWH, n9 = ~~((aX5 + .5) / aWH), aXV = a6T[hf], f7 = 0; f7 < 9; f7++)
								if (!((aXR = l3 + aXY[f7]) < 0 || aXX <= aXR))
									for (aXS = iX[aXR], yr = aXS.length, f8 = 0; f8 < yr; f8++) aXT = aXS[f8], kl = m3[aXT] >> 3, hF == kl || aXZ && aT5[hF] === aT5[kl] && aT5[hF] || (kl = mE[aXT], (a8y = n8 - kl % aWH) * a8y + (a8y = n9 - ~~
										((kl + .5) / aWH)) * a8y < 14400 && (kl = a6T[aXT], a8y = kl <= aXV ? Math.max(1, bL.du(kl + bL.du(aXV - kl, 10), 10)) : Math.max(1, bL.du(aXV, 10)), a6T[aXT] = Math.max(kl - a8y, 0), aVn[aXT] =
										4))
					}
				}(this), ! function(sA) {
					if (bf.k7() % 5 == 3)
						for (var a6T = sA.a6T, en = sA.lz, aB = 0; aB < en; aB++) {
							var hW = a6T[aB];
							a6T[aB] = Math.max(hW - Math.max(1, hW >> 7), 0)
						}
				}(this), this), a6T = sA.a6T, aVn = sA.aVn, aB = sA.lz - 1; 0 <= aB; aB--) aVn[aB] = aVn[aB] >> 1, 0 === a6T[aB] && (bN.m8.aVN(aB), bN.aH7.aVg(aB));
			bd.gD(gL, dt - bN.kx.aH4(gL), 15)
		}
}

function aUx() {
	this.aXa = 32, this.eu = 0, this.ew = 0, this.iY = 0, this.aXb = 0, this.aXc = 4, this.iX = null, this.aXY = new Int16Array(9), this.dd = function() {
		this.iY = 1 + bL.du(bS.ey - 1, this.aXa), this.aXb = 1 + bL.du(bS.ez - 1, this.aXa), this.iX = new Array(this.iY * this.aXb), bA.qh.a2K(this.iX);
		var eu, ew, aXY = this.aXY,
			i = this.iY;
		for (eu = -1; eu <= 1; eu++)
			for (ew = -1; ew <= 1; ew++) aXY[3 * (1 + ew) + 1 + eu] = ew * i + eu
	}, this.mK = function(aXe, aB) {
		return this.iX[aB].push(aXe), this.iX[aB].length - 1
	}, this.aXP = function(aXf, aX5, aXF) {
		var aXg, aXh, aX5 = bM.iW(aX5),
			aXF = bM.iW(aXF);
		return aX5 === aXF ? aXf : (aXg = this.iX[aX5].pop(), this.iX[aX5].length === aXf ? this.mK(aXg, aXF) : (aXh = this.iX[aX5][aXf], this.iX[aX5][aXf] = aXg, bN.y.aVl[aXg] = aXf, this.mK(aXh, aXF)))
	}
}

function aV1() {
	this.kw = function(player, aXi) {
		return -1 !== aXi && !!bN.kx.lY(player, aXi) && this.q2(player, aXi, 0)
	}, this.q2 = function(player, aXi, aXj) {
		player = function(player, aXi, aXj) {
			var aWs = bN.kx.aWU(player, aXi);
			if (-1 === aWs) return -1;
			aWs = bN.kx.ky(aWs, aXi);
			if (-1 === aWs) return -1;
			var lR = bN.lU.lZ(aWs, aXi);
			if (0 <= lR) return lR;
			if (bN.lU.la()) return -1;
			if (0 <= (lR = bN.lU.lZ(aXi, aWs))) return bN.lU.lb(bN.lU.lc(bN.lU.get(lR)));
			if (aWs === aXi) return bN.lU.lb(new Uint32Array([aWs, aXi]));
			if (0 <= (lR = bN.aV2.q2(aWs, aXi))) return lR;
			return aXj ? function(aXn, player) {
				var fU = bO.fU,
					eK = (fU.fill(0), [aXn]),
					ht = (fU[aXn] = 1, bM.ht),
					aXo = -1,
					en = eK.length;
				for (; - 1 === aXo && en;) {
					for (var g = [], aB = 0; aB < en; aB++)
						for (var eZ = eK[aB], a47 = fU[eZ], eq = 0; eq < 8; eq++) {
							var w5, a0f, et = eZ + ht[eq],
								eR = 4 * et;
							ac.i1(eR) ? (w5 = fU[et], a0f = a47 + 5 + ((1 & eq) << 1), 0 === w5 ? (g.push(et), fU[et] = a0f) : fU[et] = Math.min(a0f, w5)) : -1 === aXo && eq % 2 == 0 && ac.xv(player, eR) && (aXo = eZ)
						}
					en = (eK = g).length
				}
				return -1 !== aXo ? function(iE, aXq) {
					var ht = bM.ht,
						aXr = -1,
						he = 0,
						me = [];
					for (; aXq !== iE;)(he = function(eZ, he) {
						var fU = bO.fU,
							ht = bM.ht,
							a47 = fU[eZ];
						if (a47 - fU[eZ + ht[he]] != 5 + ((1 & he) << 1))
							for (var f6 = 0; f6 < 8; f6++) {
								var eq = f6 + he + 6 & 7;
								if (a47 - fU[eZ + ht[eq]] == 5 + ((1 & eq) << 1)) return eq
							}
						return he
					}(aXq, he)) !== aXr && (me.push(aXq), aXr = he), aXq += ht[he];
					me.push(iE);
					var lR = bN.lU.lZ(me[0], iE);
					if (0 <= lR) return lR;
					return bN.lU.lb(new Uint32Array(me))
				}(aXn, aXo) : -1
			}(aXi, player) : -1
		}(player, aXi, aXj);
		return -1 !== player && (bO.g[0] = bN.lU.get(player), !0)
	}
}

function aV3() {
	function aXt(h2, iJ, iL) {
		for (var jR = Math.min(iJ, iL), nQ = Math.max(iJ, iL), ew = jR + 1; ew < nQ; ew++)
			if (!ac.i1(bM.iR(h2, ew))) return;
		return 1
	}

	function aXu(h4, iI, iK) {
		for (var jR = Math.min(iI, iK), nQ = Math.max(iI, iK), eu = jR + 1; eu < nQ; eu++)
			if (!ac.i1(bM.iR(eu, h4))) return;
		return 1
	}

	function aXv(iI, iJ, iK, iL, aXl, aXi) {
		for (var en = Math.min(Math.abs(iK - iI), Math.abs(iL - iJ)), i7 = Math.sign(iK - iI), iA = Math.sign(iL - iJ), aB = 0; aB < en; aB++)
			if (!ac.i1(bM.iR(iI += i7, iJ += iA))) return null;
		return iI === iK ? aXt(iI, iJ, iL) ? new Uint32Array([aXl, bM.fB(iI, iJ), aXi]) : null : aXu(iJ, iI, iK) ? new Uint32Array([aXl, bM.fB(iI, iJ), aXi]) : null
	}
	this.q2 = function(aXl, aXi) {
		aXl = function(aXl, aXi) {
			var iI = bM.ev(aXl),
				iJ = bM.ex(aXl),
				iK = bM.ev(aXi),
				iL = bM.ex(aXi);
			if (iI === iK) {
				if (aXt(iI, iJ, iL)) return new Uint32Array([aXl, aXi])
			} else {
				if (iJ !== iL) return aXv(iI, iJ, iK, iL, aXl, aXi) || aXv(iK, iL, iI, iJ, aXl, aXi);
				if (aXu(iJ, iI, iK)) return new Uint32Array([aXl, aXi])
			}
			return null
		}(aXl, aXi);
		return null === aXl ? -1 : bN.lU.lb(aXl)
	}
}

function aV8() {
	var aXw = [];
	this.dd = function() {
		aXw = []
	}, this.la = function() {
		return 65536 === aXw.length
	}, this.lZ = function(aXl, aXi) {
		for (var lU = aXw, en = lU.length, aB = 0; aB < en; aB++) {
			var gL = lU[aB];
			if (gL[0] === aXl && gL[gL.length - 1] === aXi) return aB
		}
		return -1
	}, this.lc = function(lT) {
		var aXx = new Uint32Array(lT.length);
		return aXx.set(lT), aXx.reverse()
	}, this.aVU = function(hF, kl) {
		var gG = hF.length - 1,
			aXy = new Uint32Array(gG + kl.length);
		return aXy.set(hF, 0), aXy.set(kl, gG), aXy
	}, this.aVZ = function(hF, kl, aAQ, eZ, aXz) {
		aXz && (aAQ = (kl = this.lc(kl)).length - aAQ - 2);
		aXz = kl.subarray(aAQ + 1 + (eZ === kl[aAQ + 1])), eZ = new Uint32Array(hF.length + aXz.length);
		return eZ.set(hF, 0), eZ.set(aXz, hF.length), eZ
	}, this.lb = function(lT) {
		return aXw.push(lT), aXw.length - 1
	}, this.get = function(aB) {
		return aXw[aB]
	}, this.lW = function() {
		return aXw
	}, this.aY1 = function(aXl, aXi) {
		return null
	}
}

function aVC() {
	this.j3 = function(player, n5) {
		player = bN.kx.n7(player, n5);
		return !(player < 0 || !bN.m8.aVb(player) || (bN.m8.aVN(player), 0))
	}
}

function aUy() {
	var yW = 32,
		yV = new Array(2);

	function wL(f8) {
		var eu, ew, eZ, iA, i7, hj = yW,
			a2n = bA.qZ.wL(hj, hj),
			hp = bA.qZ.getContext(a2n, !0),
			hm = bA.qZ.getImageData(hp, hj, hj),
			wW = hm.data,
			l3 = (hj >> 1) - .5,
			l4 = Math.sqrt(l3 * l3);
		for (wW.fill(255), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = eu - l3, iA = ew - l3, eZ = 4 * (ew * hj + eu), i7 = 714 * (l4 - Math.sqrt(i7 * i7 + iA * iA)) / l4, wW[2 + eZ] = f8, wW[3 + eZ] = 255 < i7 ? 0 : i7;
		return hp.putImageData(hm, 0, 0), a2n
	}
	this.aY2 = -1, this.dd = function() {
		this.aY2 = -1, yV[0] || (yV[0] = wL(255), yV[1] = wL(0))
	}, this.aY3 = function(hp, eR, eu, ew, e7, aB) {
		bA.g9.gz(aD.eX) && (hp.setTransform(eR *= 4 / 3 * .625, 0, 0, eR, eu - (e7 *= 4 / 3), ew - e7), hp.drawImage(yV[+(bN.y.m2[aB] === this.aY2)], 0, 0))
	}
}

function aV7() {
	function aTN(eu, en, ew, aY4, a94, fE, player) {
		if (!(ew < 1 || a94 < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kx.aVf(eR) && !bA.qh.has(aY4, ac.eV(eR)) && ac.xn(eR, player)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTR(ew, en, eu, aY4, aTL, fE, player) {
		if (!(eu < 1 || aTL < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kx.aVf(eR) && !bA.qh.has(aY4, ac.eV(eR)) && ac.xn(eR, player)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTV(iE, iF, aTI) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTI) < bM.iG(iE, aTI)) ? iF : iE
	}
	this.hO = function(player, aTI) {
		if (bN.mF.mG(player))
			for (var aTJ = bM.hu(), aY4 = [];;) {
				var aXo = function(aTI, aTJ, aY4, player) {
					for (var h2 = bM.ev(aTI), h4 = bM.ex(aTI), aTL = bS.ey - 2, a94 = bS.ez - 2, aTM = -1, eq = 0; eq < aTJ; eq++) {
						var a93 = Math.max(h2 - eq, 1),
							aKg = Math.max(h4 - eq, 1),
							xj = Math.min(h2 + eq, aTL),
							xi = Math.min(h4 + eq, a94),
							iE = aTN(h2, xj - h2, h4 - eq, aY4, a94, 1, player),
							iF = aTN(h2 - 1, h2 - a93 - 1, h4 - eq, aY4, a94, -1, player),
							xj = aTN(h2, xj - h2, h4 + eq, aY4, a94, 1, player),
							a93 = aTN(h2 - 1, h2 - a93 - 1, h4 + eq, aY4, a94, -1, player),
							aTQ = aTR(h4, xi - h4 - 1, h2 - eq, aY4, aTL, 1, player),
							aTS = aTR(h4 - 1, h4 - aKg - 2, h2 - eq, aY4, aTL, -1, player),
							xi = aTR(h4, xi - h4 - 1, h2 + eq, aY4, aTL, 1, player),
							aKg = aTR(h4 - 1, h4 - aKg - 2, h2 + eq, aY4, aTL, -1, player);
						if (aTM = aTV(aTM, iE, aTI), aTM = aTV(aTM, iF, aTI), aTM = aTV(aTM, xj, aTI), aTM = aTV(aTM, a93, aTI), aTM = aTV(aTM, aTQ, aTI), aTM = aTV(aTM, aTS, aTI), aTM = aTV(aTM, xi, aTI), 0 <= (aTM = aTV(aTM, aKg, aTI)) &&
							eq * eq >= bM.iG(aTM, aTI)) return aTM
					}
					return -1
				}(aTI, aTJ, aY4, player);
				if (-1 === aXo) break;
				var id = ac.eV(bM.ed(aXo));
				if (bN.kx.aWS(player, id)) return !! function(player, aXo, aTI) {
					for (var he = bM.ib(aXo, aTI), aB = 0; aB < 4; aB++) {
						var eZ = bM.iZ(aXo, he);
						if (ac.aGi(bM.ed(eZ), player)) return bO.fP[6] = he, 1;
						he = (he + 1) % 4
					}
					return
				}(player, aXo, aTI) && (bO.fP[7] = aXo, !0);
				aY4.push(id)
			}
		return !1
	}
}

function dg() {
	this.aQo = [L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448)];
	var aY7 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBO = new Array(aY7.length), this.dd = function() {
		var g = bj.eK.data[155].value.split(";"),
			l3 = g.length;
		if (function() {
				for (var en = aY7.length, aB = 0; aB < en; aB++) bX.aBO[aB] = aY7[aB]
			}(), !(l3 > aY7.length))
			for (var aB = 0; aB < l3; aB++) g[aB].length && (this.aBO[aB] = g[aB])
	}, this.aQq = function(e8, code) {
		for (var aBO = this.aBO, aY9 = aY7, qG = (aBO[e8] = code, ""), en = aBO.length, aYA = [], aB = 0; aB < en; aB++) aYA.push(aBO[aB] === aY9[aB] ? "" : aBO[aB]);
		en--;
		for (aB = 0; aB < en; aB++) qG += aYA[aB] + ";";
		bj.s0.s1(155, qG += aYA[en])
	}, this.aQn = function() {
		bj.s0.s1(155, ""), this.dd()
	}, this.f8 = function(code, e8) {
		return code === this.aBO[e8] || code === this.aBO[e8 + 1]
	}
}

function dY() {
	var aYB = new Array(1),
		aYC = new Array(1),
		aYD = 20,
		eL = 0,
		aYE = !1;

	function aYG() {
		aYD++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aYC[aB] = 0, aYB[aB] = document.createElement("audio"), aYB[aB].src = src, aYB[aB].setAttribute("preload", "auto"), aYB[aB].setAttribute("controls", "none"), aYB[aB].style.display = "none", aYB[aB].onpause = function() {
					aYC[aB] = 1
				}, aYB[aB].oncanplaythrough = function() {
					aYC[aB] = 0 === aYC[aB] ? 1 : aYC[aB]
				}, document.body.appendChild(aYB[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aYE = !0
		}
	}, this.u9 = function() {
		if (aYE) {
			aYE = !1;
			for (var aB = 0; 0 <= aB; aB--) aYB[aB].onpause = null, aYB[aB].oncanplaythrough = null, document.body.removeChild(aYB[aB]), aYB[aB] = null
		}
	}, this.play = function() {
		if (aYE) {
			var dt = performance.now();
			if (eL + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aYC[aB]) return eL = dt, aYC[aB] = 2, void aYB[aB].play();
			0 < aYD && (aYD--, setTimeout(aYG, 66))
		}
	}
}

function ca() {
	this.a84 = function() {
		var aYJ;
		return !(al.kB < 3 || ag.gb[lk[0]] >= aD.ju >> 1) && (aD.hh ? (aYJ = ae.aI6(), !(2 * ae.aI7(bh.ki()) >= aYJ)) : function() {
			var aYJ = ae.aI6();
			if (2 * ag.gp[lk[0]] >= aYJ) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aX6 = aD.kA, gp = ag.gp, aB = 0; aB < aX6; aB++) gp[aB] = 512;
			var aX7 = aD.x1,
				kN = aE.kN,
				hW = aE.hW;
			for (aB = aX6; aB < aX7; aB++) gp[aB] = kN[hW[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var en = aD.x1, gp = ag.gp, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < en; aB++) gp[aB] = sResourcesValue
		} : function() {
			for (var en = aD.x1, gp = ag.gp, sResourcesData = aD.data.sResourcesData, aB = 0; aB < en; aB++) gp[aB] = sResourcesData[aB]
		})();
		bd.me[8] = ag.gp[aD.eX]
	}
}

function dP() {
	var aGq = 501,
		aYP = (this.aYO = new Uint32Array(aGq), this.a3S = new Uint32Array(aGq), this.aB3 = new Uint16Array(aGq), this.aQw = 0, 1),
		aYQ = 0;

	function aYT(self) {
		self.max.fill(0)
	}

	function aYV(self, aB) {
		self.max[0] = Math.max(self.aYO[aB], self.max[0]), self.max[1] = Math.max(self.a3S[aB], self.max[1]), self.max[2] = Math.max(self.aB3[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aYR = 0, this.me = new Array(21), this.aYS = null, this.de = function() {
		this.aYS = [L(449), L(450), L(451), L(452), L(453), L(454), L(455), L(456), L(286), L(287), L(457), L(458), L(459), L(460), "", L(461), L(462), L(463), L(246), L(464), L(465)]
	}, this.dd = function() {
		this.aQw = 0, aYP = 1, this.aYR = 0, aYQ = 0, aYT(this), this.me.fill(0)
	}, this.pz = function(player, iN) {
		bA.g9.a3N(player) && (this.me[0] += iN + 1, this.me[1]++, this.me[12] += bO.fK[1])
	}, this.pT = function(player, p7) {
		__fx.donationsTracker.logDonation(player, p7, bO.fK[0]);
		player === aD.eX && (aN.pT(bO.fK[0], bO.fK[1], p7), this.me[12] += bO.fK[1], this.me[16] += bO.fK[0]), p7 === aD.eX && (aN.a6h(bO.fK[0], player), this.me[10] += bO.fK[0])
	}, this.q3 = function(player) {
		bA.g9.a3N(player) && (this.me[2]++, this.me[12] += bO.fK[1])
	}, this.qB = function(player) {
		bA.g9.a3N(player) && (this.me[19]++, this.me[12] += bO.fK[1])
	}, this.aX0 = function(player) {
		bA.g9.a3N(player) && this.me[20]++
	}, this.gD = function(player, a47, e8) {
		bA.g9.a3N(player) && (this.me[e8] += a47)
	}, this.j3 = function() {
		var self;
		this.aYR || 0 < aYQ-- || ((self = this).aYO[self.aQw] = ag.gb[aD.eX], self.a3S[self.aQw] = ag.gp[aD.eX], self.aB3[self.aQw] = ae.aB4(aD.eX), aYV(self, self.aQw), self.aQw++, self.aQw === aGq && function(self) {
			aYT(self), aYV(self, 0), self.aQw = 1 + bL.du(aGq, 2);
			for (var aB = 1; aB < self.aQw; aB++) self.aYO[aB] = self.aYO[2 * aB], self.a3S[aB] = self.a3S[2 * aB], self.aB3[aB] = self.aB3[2 * aB], aYV(self, aB);
			aYP *= 2
		}(self), aYQ = aYP - 1, be.mV(), 0 === ag.mi[aD.eX] && (self.aYR = bf.k7()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.su = 0, this.sv = 0, this.aYX = 0, this.aYY = 0, this.a8H = 0, this.tc = 0;
	var aYa = this.aYZ = 0;
	this.aYb = 0, this.aYc = 0, this.aYd = 0, this.a7d = 0, this.e8 = 0, this.aAe = null, this.hZ = !1, this.aYe = -1, this.aYf = !1, this.aYg = [0, 0], this.de = function() {
		this.aAe = [L(466), L(119, 0, "Balance"), L(118, 0, "Interest"), L(467)]
	}, this.dd = function() {
		this.hZ = !1, this.aYe = -1, this.aYf = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eq = a0.a1.hw() && h.i < h.j ? 1 : a0.a1.hw() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eq * this.i), this.i -= a0.a1.hw() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7d = Math.floor(this.j / 150), this.a7d = Math.max(this.a7d, 1.5), this.su = Math.floor(1 + .02 * this
			.i), this.sv = Math.floor(1 + .04 * this.i), this.a8H = this.sv, aYa = Math.floor(.75 * this.a8H), this.tc = Math.floor(1 + .075 * this.i), this.aYb = Math.floor(1 + .1125 * this.i), this.aYc = Math.floor(this.i * (a0.a1.hw() ? .03 :
				.029)), this.aYc = Math.max(this.aYc, 4), this.aYd = Math.floor(.035 * this.i), this.aYd = Math.max(this.aYd, 4), this.aYZ = this.j - 2 * this.a8H - this.tc - this.aYb, this.hZ && this.aYh()
	}, this.h0 = function(lN, lO) {
		var x4, x3;
		return !!this.hZ && (x3 = lN, x4 = lO, lN -= bL.du(h.i - this.i, 2), lO -= bL.du(h.j - this.j, 2), lN < 0 || lO < 0 || lN >= this.i || lO >= this.j || lN >= this.i - this.aYb && lO < this.aYb ? -1 !== aM.h0(x3, x4) || bC.h0(x3, x4) ||
			this.rq() : lO < this.aYb || (lO < this.j - this.tc ? (this.aYf = !0, this.aYe = (lN - 2 * this.su - this.aYX) / this.aYY, 3 !== this.e8 && (bf.dl = !0)) : (x3 = (x3 = Math.floor(lN / (this.i / this.aAe.length))) < 0 ? 0 : x3 >=
				this.aAe.length ? this.aAe.length - 1 : x3) !== this.e8 && (this.e8 = x3, this.aYh(), bf.dl = !0)), !0)
	}, this.a1Q = function(lN, lO) {
		return this.aYg[0] = lN, this.aYg[1] = lO, !(!this.hZ || !this.aYf || (lN -= bL.du(h.i - this.i, 2), lO = this.aYe, this.aYe = (lN - 2 * this.su - this.aYX) / this.aYY, (0 <= this.aYe && this.aYe <= 1 || 0 <= lO && lO <= 1) && (bf.dl = !
			0), 0))
	}, this.a1s = function() {
		this.aYf && (this.aYf = !1)
	}, this.a24 = function() {
		this.hZ ? this.rq() : this.show()
	}, this.show = function() {
		bd.aQw < 2 || (this.hZ = !0, this.aYh())
	}, this.rq = function() {
		this.hZ = !1, this.aYe = -1, bf.dl = !0
	}, this.aYh = function() {
		this.e8 < 2 ? this.aYX = aQ.measureText(bA.rY.zD(bd.max[this.e8]), bA.qZ.sN(0, this.aYc)) : 2 === this.e8 && (this.aYX = aQ.measureText(bA.rY.a40(6, 2), bA.qZ.sN(0, this.aYc))), this.aYY = this.i - 2 * this.su - this.aYX - this.sv
	}, this.mV = function() {
		this.hZ && this.aYh()
	}, this.uf = function() {
		this.hZ && this.a8Z()
	}, this.a8Z = function() {
		var eu = bL.du(h.i - this.i, 2),
			ew = bL.du(h.j - this.j, 2);
		ug.setTransform(1, 0, 0, 1, eu, ew), ug.fillStyle = bB.nf, ug.fillRect(0, this.aYb, this.i, this.j - this.aYb), this.aYi(), this.aPl(), ug.strokeRect(0, 0, this.i, this.j), bA.qZ.textAlign(ug, 2), ug.font = bA.qZ.sN(0, this.aYc), 0 ===
			this.e8 ? this.aYj(bd.aYO, eu, ew) : 1 === this.e8 ? this.aYj(bd.a3S, eu, ew) : 2 === this.e8 ? this.aYk(eu, ew) : 3 === this.e8 && (this.aYl(eu, ew), this.aYm(eu, ew)), aM.a5m(Math.floor(eu + this.i - .725 * this.aYb), Math.floor(
				ew + .275 * this.aYb), Math.floor(.45 * this.aYb)), ug.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aYi = function() {
		var aB, dt;
		for (ug.lineWidth = this.a7d, bA.qZ.textBaseline(ug, 1), bA.qZ.textAlign(ug, 1), ug.strokeStyle = bB.ni, ug.font = bA.qZ.sN(1, this.aYd), dt = this.i / this.aAe.length, ug.fillStyle = bB.o4, ug.fillRect(this.e8 * dt, this.j - this.tc, dt,
				this.tc), ug.fillStyle = bB.ni, ug.fillRect(0, this.j - this.tc - .5 * this.a7d, this.i, this.a7d), aB = 1; aB <= 3; aB++) ug.fillRect(aB * dt, this.j - this.tc, this.a7d, this.tc);
		for (aB = this.aAe.length - 1; 0 <= aB; aB--) ug.fillText(bA.y6.a2z(this.aAe[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.tc)
	}, this.aPl = function() {
		ug.fillStyle = bB.oU, ug.fillRect(0, 0, this.i, this.aYb), ug.fillStyle = bB.ni, ug.fillRect(0, this.aYb - .5 * this.a7d, this.i, this.a7d), ug.font = bA.qZ.sN(1, .39 * this.aYb), ug.fillText(bA.y6.a2z(L(468), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aYb))
	}, this.aYj = function(g, eu, ew) {
		var l3 = bd.max[this.e8],
			a2M = (ug.setTransform(1, 0, 0, 1, eu + 2 * this.su + this.aYX, ew + this.a8H + this.aYb), ug.lineWidth = 2, this.aYZ / Math.sqrt(l3));
		ug.beginPath(), ug.moveTo(this.aYY, this.aYZ - a2M * Math.sqrt(g[bd.aQw - 1]));
		for (var aB = bd.aQw - 2; 0 <= aB; aB--) ug.lineTo(aB * this.aYY / (bd.aQw - 1), this.aYZ - a2M * Math.sqrt(g[aB]));
		ug.stroke();
		eu = this.a5m(g, a2M, .5);
		eu < .95 && ug.fillText(bA.rY.zD(l3), -this.su, 0), .05 < Math.abs(eu - .5) && ug.fillText(bA.rY.zD(Math.floor(l3 / 4)), -this.su, Math.floor(this.aYZ / 2)), .05 < eu && ug.fillText("0", -this.su, this.aYZ)
	}, this.aYk = function(eu, ew) {
		ug.setTransform(1, 0, 0, 1, eu + 2 * this.su + this.aYX, ew + this.a8H + this.aYb), ug.lineWidth = 2;
		var a2M = this.aYZ / Math.max(bd.max[this.e8], 1);
		ug.beginPath(), ug.moveTo(this.aYY, this.aYZ - a2M * bd.aB3[bd.aQw - 1]);
		for (var aB = bd.aQw - 2; 0 <= aB; aB--) ug.lineTo(aB * this.aYY / (bd.aQw - 1), this.aYZ - a2M * bd.aB3[aB]);
		ug.stroke();
		eu = this.a5m(bd.aB3, a2M, 1), ew = bd.max[this.e8] / 100;
		eu < .95 && ug.fillText(bA.rY.a40(ew, 2), -this.su, 0), .05 < Math.abs(eu - .5) && ug.fillText(bA.rY.a40(ew / 2, 2), -this.su, Math.floor(this.aYZ / 2)), .05 < eu && ug.fillText(bA.rY.a40(0, 2), -this.su, this.aYZ)
	}, this.aYl = function(eu, ew) {
		ug.setTransform(1, 0, 0, 1, eu + .34 * this.i, ew + 2 * aYa + this.aYb), bA.qZ.textAlign(ug, 2);
		for (var aAP = this.j - 4 * aYa - this.tc - this.aYb, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) ug.fillText(bA.y6.a2z(bd.aYS[g[aB]], 0, .31 * this.i), 0, aB * aAP / 9);
		var fF = bd.me;
		for (ug.setTransform(1, 0, 0, 1, eu + .39 * this.i, ew + 2 * aYa + this.aYb), bA.qZ.textAlign(ug, 0), ug.fillText(bA.rY.a40(100 * fF[0] / (1024 * Math.max(fF[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) ug.fillText(fF[g[aB]].toString(), 0,
			aB * aAP / 9);
		ug.fillText(bA.rY.a40(100 * (1 - ag.gb[aD.eX] / fF[7]), 0), 0, aAP)
	}, this.aYm = function(eu, ew) {
		ug.setTransform(1, 0, 0, 1, eu + .79 * this.i, ew + 2 * aYa + this.aYb), bA.qZ.textAlign(ug, 2);
		var aB, aAP = this.j - 4 * aYa - this.tc - this.aYb;
		for (ug.fillStyle = bB.nz, aB = 2; 0 <= aB; aB--) ug.fillText(bA.y6.a2z(bd.aYS[aB + 8], 0, .31 * this.i), 0, aB * aAP / 9);
		ug.fillText(bA.y6.a2z(bd.aYS[18], 0, .31 * this.i), 0, 3 * aAP / 9), ug.fillStyle = bB.ny, ug.fillText(bA.y6.a2z(bd.aYS[11], 0, .31 * this.i), 0, 4 * aAP / 9), ug.fillStyle = bB.oH, ug.fillText(bA.y6.a2z(bd.aYS[13], 0, .31 * this.i), 0,
				5 * aAP / 9), ug.fillText(bA.y6.a2z(bd.aYS[15], 0, .31 * this.i), 0, 6 * aAP / 9), ug.fillText(bA.y6.a2z(bd.aYS[16], 0, .31 * this.i), 0, 7 * aAP / 9), ug.fillText(bA.y6.a2z(bd.aYS[12], 0, .31 * this.i), 0, 8 * aAP / 9), ug
			.fillStyle = bB.oG, ug.fillText(bA.y6.a2z(bd.aYS[17], 0, .31 * this.i), 0, aAP), ug.fillStyle = bB.nz;
		var fF = bd.me,
			aEF = fF[8] + fF[9] + fF[10] + fF[18],
			aEF = bA.rY.zD(aEF),
			aOY = ug.measureText(aEF).width,
			eu = (ug.setTransform(1, 0, 0, 1, eu + .83 * this.i + aOY, ew + 2 * aYa + this.aYb), ug.fillText(bA.rY.zD(fF[8]), 0, 0), ug.fillText(bA.rY.zD(fF[9]), 0, aAP / 9), ug.fillText(bA.rY.zD(fF[10]), 0, 2 * aAP / 9), ug.fillText(bA.rY.zD(fF[
				18]), 0, 3 * aAP / 9), ug.fillStyle = bB.ny, ug.fillText(aEF, 0, 4 * aAP / 9), ug.fillStyle = bB.oH, ug.fillText(bA.rY.zD(fF[13]), 0, 5 * aAP / 9), ug.fillText(bA.rY.zD(fF[15]), 0, 6 * aAP / 9), ug.fillText(bA.rY.zD(fF[16]),
				0, 7 * aAP / 9), ug.fillText(bA.rY.zD(fF[12]), 0, 8 * aAP / 9), fF[12] + fF[13] + fF[15] + fF[16]);
		ug.fillStyle = bB.oG, ug.fillText(bA.rY.zD(eu), 0, aAP), ug.fillStyle = bB.ni
	}, this.a5m = function(g, a2M, a9C) {
		var aB, e, fW;
		return this.aYe < 0 || 1 < this.aYe ? .25 : (aB = this.aYe * (bd.aQw - 1), fW = g[e = Math.floor(aB)], fW += (aB - e) * (g[e < bd.aQw - 1 ? e + 1 : e] - fW), ug.strokeStyle = bB.nl, .04 < this.aYe && this.aYo(0, this.aYZ - a2M * Math.pow(
				fW, a9C), aB * this.aYY / (bd.aQw - 1), this.aYZ - a2M * Math.pow(fW, a9C)), .04 < fW / bd.max[this.e8] && this.aYo(aB * this.aYY / (bd.aQw - 1), this.aYZ, aB * this.aYY / (bd.aQw - 1), this.aYZ - a2M * Math.pow(fW, a9C)), ug
			.fillStyle = bB.oJ, ug.beginPath(), ug.arc(aB * this.aYY / (bd.aQw - 1), this.aYZ - a2M * Math.pow(fW, a9C), Math.max(2, .014 * this.j), 0, 2 * Math.PI), ug.fill(), g = this.aYe * bf.aB5, g = 0 === ag.mi[aD.eX] ? Math.floor(g * bd
				.aYR) : Math.floor(g * bf.k7()), ug.fillStyle = bB.ni, ug.fillText(1 === a9C ? bA.rY.a40(fW / 100, 2) : bA.rY.zD(Math.floor(fW)), -this.su, this.aYZ - a2M * Math.pow(fW, a9C)), bA.qZ.textAlign(ug, 1), ug.fillText(aW.aAs(g),
				aB * this.aYY / (bd.aQw - 1), this.aYZ + this.aYc - (a0.a1.hw() ? 2 : 0) - this.a7d), bA.qZ.textAlign(ug, 2), a2M * Math.pow(fW, a9C) / this.aYZ)
	}, this.aYo = function(n8, n9, nL, nM) {
		ug.beginPath(), ug.moveTo(n8, n9), ug.lineTo(nL, nM), ug.stroke()
	}
}

function by() {
	this.aYp = "https://", this.aYq = this.aYp + "territorial.io/", this.aQx = this.aYq + "changelog", this.aR1 = this.aYq + "terms", this.aYr = this.aYq + "cookie_policy", this.aQO = this.aYq + "privacy", this.aR0 = this.aYq + "tutorial", this.aQz =
		this.aYq + "players", this.aQy = this.aYq + "clans", this.a0i = this.aYq + "clan-results", this.aNh = "https://patreon.com/c/territorial", this.aCN = this.aYp + "play.google.com/store/apps/details?id=territorial.io", this.a10 = this.aYp +
		"apps.apple.com/app/id1581110913", this.aYs = this.aYp + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCO = this.aYp + "discord.gg/pthqvpTXmh", this.aCP = this.aYp + "www.instagram.com/davidtschacher/", this.yl =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aYt, this.y3 = new aYu, this.dd = function() {
		this.y.dd()
	}, this.j3 = function() {
		0 !== this.y.a6q && this.y.a6q--
	}
}

function aYu() {
	this.uf = function() {
		if (0 !== bP.y.a6q && (ug.globalAlpha = Math.min(bP.y.a6q / 580, 1), ug.drawImage(bP.y.aYx, 1 + aS.y1(), 1 + aS.y2()), ug.globalAlpha = 1, aD.hB)) {
			for (var n8 = iO / hy, n9 = iP / hy, nL = (h.i + iO) / hy, nM = (h.j + iP) / hy, gM = bP.y.aYy * hy, aYz = bP.y.aYz, aB = aD.kA - 1; 0 <= aB; aB--) ! function(aB, gM, n8, n9, nL, nM, aYz) {
				var highlight;
				0 === ag.mi[aB] || 0 === ag.gb[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gM *= 2), nL = h.i * ((ag.ie[aB] + ag.ig[aB] + 1) / 2 - n8) / (nL - n8) - .5 * gM, n8 = h.j * ((ag.ih[
					aB] + ag.ii[aB] + 1) / 2 - n9) / (nM - n9) - .5 * gM, nL > h.i) || n8 > h.j || nL < -gM || n8 < -gM || (highlight ? ug.setTransform(2 * hy, 0, 0, 2 * hy, nL, n8) : ug.setTransform(hy, 0, 0, hy, nL, n8), ug.drawImage(
					aYz[aD.hh ? bg.el[aB] : 1], 0, 0))
			}(aB, gM, n8, n9, nL, nM, aYz);
			ug.setTransform(hy, 0, 0, hy, 0, 0)
		}
	}
}

function aYt() {
	this.aYy = 28, this.a6q = 0, this.aYx = null;
	var aZ1 = this.aYz = null;

	function aZ4(hj, aZ5) {
		var eu, ew, eZ, i7, a2n = bA.qZ.wL(hj, hj),
			hp = bA.qZ.getContext(a2n, !0),
			hm = bA.qZ.getImageData(hp, hj, hj),
			wW = hm.data,
			l3 = (hj >> 1) - .5,
			aZ6 = .5 + l3;
		for (aZ6 *= aZ6, ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = (i7 = eu - l3) * i7 + (i7 = ew - l3) * i7, wW[eZ = 4 * (ew * hj + eu)] = aZ5[0], wW[1 + eZ] = aZ5[1], wW[2 + eZ] = aZ5[2], wW[3 + eZ] = (aZ6 - i7) * aZ5[3] / aZ6;
		return hp.putImageData(hm, 0, 0), a2n
	}

	function aY3(aB, hp, a2n, hj) {
		var highlight, eu, ew;
		0 !== ag.mi[aB] && 0 !== ag.gb[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hj *= 2), eu = ag.ie[aB] + ag.ig[aB] + 1 - hj - 2 >> 1, ew = ag.ih[aB] + ag.ii[aB] + 1 - hj - 2 >> 1, highlight ? hp
			.drawImage(a2n[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew, hj, hj) : hp.drawImage(a2n[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew))
	}
	this.dd = function() {
		var sA;
		this.a6q = 700,
			function(sA) {
				var hj = sA.aYy;
				if (sA.aYz = [], aZ1 = [], aD.hh) {
					for (var aB = 0; aB <= aD.x8; aB++) sA.aYz.push(aZ4(hj, bg.aWN[bg.kX[aB]])), aZ1.push(aZ4(hj >> 1, bg.aWN[bg.kX[aB]]));
					9 === aD.kS && aZ1.push(aZ4(hj, bg.aWN[1]))
				} else sA.aYz.push(aZ4(hj, bg.aWN[7])), sA.aYz.push(aZ4(hj, bg.aWN[4])), aZ1.push(aZ4(hj >> 1, bg.aWN[7]))
			}(this),
			function(sA, aZ7) {
				var aB, aYx = sA.aYx,
					hp = bA.qZ.getContext(aYx, !0),
					en = aD.ek,
					hj = sA.aYy >> 1;
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0), aZ7 && hp.clearRect(0, 0, aYx.width, aYx.height);
				if (9 === aD.kS) {
					hj <<= 1;
					sA = az.kb[5];
					for (aB = en - sA; aB < en; aB++) aY3(aB, hp, aZ1, hj);
					en -= sA, hj >>= 1
				}
				for (aB = aD.kA; aB < en; aB++) aY3(aB, hp, aZ1, hj)
			}(this, null !== (sA = this).aYx && sA.aYx.width === bS.ey - 2 && sA.aYx.height === bS.ez - 2 || (sA.aYx = bA.qZ.wL(bS.ey - 2, bS.ez - 2), !1)), aD.hB || this.a4I()
	}, this.aWM = aZ4, this.a4I = function() {
		for (var en = aD.kA, hj = this.aYy, aYz = this.aYz, hp = bA.qZ.getContext(this.aYx, !0), aB = 0; aB < en; aB++) aY3(aB, hp, aYz, hj)
	}
}

function d9() {
	function aZA() {
		8 === aD.kS && 1 === aD.zw && bR.zY.zv()
	}

	function aZ9(player) {
		aD.hB ? (ak.aGy(player), al.aJt(), aD.kU && aD.pv.j3()) : b3.aCg(player)
	}
	this.pN = function(player) {
		aN.a08(player, player === aD.eX ? 21 : 22), aZ9(player), aZA()
	}, this.ps = function(player) {
		1 === aD.zw && 0 !== ag.mi[player] && 2 !== ag.a3J[player] && aZ9(player), aD.zz--, aD.zy--, aN.a08(player, 4), bA.g9.gy(2) && aW.mU(!0), aZA()
	}
}

function dJ() {
	this.aTG = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAM = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.ni, "rgb(170,170,170)"
	], this.aZB = [bB.ni, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.ni, bB.nZ], this.aZC = [bB.nZ, bB.ni, bB.ni, bB.ni, bB.nZ, bB.nZ, bB.nZ, bB.nZ, bB.ni];
	var aK2 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJL = ["rgba(" + aK2[0] + ",", "rgba(" + aK2[1] + ",", "rgba(" + aK2[2] + ",", "rgba(" + aK2[3] + ",", "rgba(" + aK2[4] + ",", "rgba(" + aK2[5] + ",", "rgba(" + aK2[6] + ",", "rgba(" + aK2[7] + ",", "rgba(" + aK2[8] + ",", "rgba(" + aK2[9] +
			","
		], this.aJM = ["rgb(" + aK2[0] + ")", "rgb(" + aK2[1] + ")", "rgb(" + aK2[2] + ")", "rgb(" + aK2[3] + ")", "rgb(" + aK2[4] + ")", "rgb(" + aK2[5] + ")", "rgb(" + aK2[6] + ")", "rgb(" + aK2[7] + ")", "rgb(" + aK2[8] + ")", "rgb(" + aK2[9] +
			")"
		], this.a0H = null, this.aWN = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aW2 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kX = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.el = new Uint8Array(aD.ek), this.aAN = new Uint8Array(aD.ek), this.xE = new Uint16Array(aD.ek), this.xF = new Uint16Array(this.kX.length + 1), this.xG = new Uint16Array(this.kX.length), this.de =
		function() {
			this.a0H = [L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477)]
		}, this.dd = function() {
			if (this.el.fill(0), this.aAN.fill(0), this.aZD(), aD.hh) {
				if (9 === aD.kS) {
					for (var el = bg.el, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) el[aB] = 1;
					var en = aD.ek;
					for (aB = aD.data.teamPlayerCount[7]; aB < en; aB++) el[aB] = 2;
					bg.kX[1] = 7, bg.kX[2] = 8
				} else aD.kU ? function() {
					var aW2 = bg.aW2,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kA - 1; 0 <= aB; aB--) colorsData[aB] = ay.jS(262144);
					var aZO = 0,
						f3 = 768,
						aSl = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var eq = 0, f7 = 0; f7 < 3; f7++) eq += Math.abs(aW2[aB][f7] - aSl[f7]);
							eq < f3 && (aZO = aB, f3 = eq)
						} var aZP = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aZP[aB] = teamPlayerCount[aB];
					var kX = bg.kX,
						aZQ = new Uint8Array(9),
						gG = (kX[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aZP[aB] && (aZQ[aB] = gG, kX[gG++] = aB);
					var jR = aD.kA,
						el = bg.el;
					aZP[aZO] ? (aZP[aZO]--, el[0] = aZQ[aZO]) : jR = 0;
					var f8 = 0;
					for (aB = jR; aB < aD.x1; aB++) {
						var hf = kX[f8];
						if (aZP[hf]) aZP[hf]--, el[aB] = aZQ[hf];
						else if (aB--, 9 <= ++f8) return console.log("error 325")
					}
				}() : this.j3();
				! function() {
					for (var en = aD.ek, xE = bg.xE, xF = bg.xF, xG = bg.xG, el = bg.el, kX = bg.kX, x7 = kX.length, eK = new Array(x7), aB = 0; aB < x7; aB++) eK[aB] = [];
					for (aB = 0; aB < en; aB++) eK[kX[el[aB]]].push(aB);
					for (aB = 1; aB <= x7; aB++) xF[aB] = xF[aB - 1] + eK[aB - 1].length;
					for (aB = 0; aB < x7; aB++)
						for (var gG = eK[aB].length, l3 = xF[aB], hf = 0; hf < gG; hf++) xE[hf + l3] = eK[aB][hf];
					var kA = aD.kA;
					for (aB = 0; aB < x7; aB++)
						for (gG = eK[aB].length, l3 = xF[aB], hf = 0; hf < gG; hf++)
							if (xE[hf + l3] >= kA) {
								xG[aB] = hf;
								break
							}
				}(), ! function() {
					for (var en = aD.ek, el = bg.el, aAN = bg.aAN, kX = bg.kX, aB = 0; aB < en; aB++) aAN[aB] = kX[el[aB]];
					9 === aD.kS && aAN.fill(1, en - az.kb[5])
				}()
			}
		}, this.aZD = function() {
			for (var aB = this.kX.length - 1; 0 <= aB; aB--) this.kX[aB] = aB
		}, this.j3 = function() {
			var z2 = new Uint8Array(aD.kA),
				z3 = new Uint8Array(aD.kA),
				aZI = new Uint16Array(8),
				aZJ = new Uint16Array(this.kX.length);
			this.aZK(z2, z3, aZI, 1), this.aGY(aZI), this.aZL(aZJ, z2, z3), this.aZM(z2, z3, aZJ), this.aZN()
		}, this.aZK = function(z2, z3, aZP, aZR) {
			for (var f7, e, aZS, en = this.kX.length - aZR, g = new Uint16Array(en), aW2 = this.aW2, colorsData = aD.data.colorsData, aB = aD.kA - 1; 0 <= aB; aB--) {
				for (f7 = en; aZR <= f7; f7--) g[f7 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aW2[f7][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aW2[f7][1]) + Math.abs(4 * (63 & colorsData[aB]) - aW2[f7][2]);
				for (aZS = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZS && (aZS = g[e], z2[aB] = e);
				for (aZP[z2[aB]] += 4, aZS = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZS && e !== z2[aB] && (aZS = g[e], z3[aB] = e);
				aZP[z3[aB]]++
			}
		}, this.aGY = function(aZP) {
			for (var f7, l5, en = this.kX.length - 1, aB = en; 0 <= aB; aB--) this.kX[aB] = aB;
			for (aB = en - 1; 0 <= aB; aB--) aZP[aB]++;
			for (aB = 1; aB <= en; aB++) {
				for (l5 = 0, f7 = 1; f7 < en; f7++) aZP[f7] > aZP[l5] && (l5 = f7);
				aZP[l5] = 0, this.kX[aB] = l5 + 1
			}
		}, this.aZL = function(aZJ, z2, z3) {
			var f7, a0c, f8, eq, e, nK, tB, aZT = this.kX.length - 1,
				r2 = new Uint16Array(aZT),
				aZU = [],
				aZV = 0,
				a0b = [],
				aZW = [];
			loop: for (var aB = 0; aB < aD.kA; aB++)
				if (null !== (a0c = bA.rY.a0d(ag.a0a[aB]))) {
					for (f7 = a0b.length - 1; 0 <= f7; f7--)
						if (a0c === a0b[f7]) {
							aZW[f7].push(aB), aZV = Math.max(aZV, aZW[f7].length);
							continue loop
						} a0b.push(a0c), aZU.push(!1), aZW.push([aB]), aZV = Math.max(aZV, 1)
				}
			for (; 2 < aD.x8 && aZV > bL.du(aD.kA, aD.x8);) aD.x8--, aD.kS--;
			for (f7 = a0b.length - 1; 0 <= f7; f7--) {
				for (eq = -1, f8 = a0b.length - 1; 0 <= f8; f8--) !aZU[f8] && (-1 === eq || aZW[f8].length > aZW[eq].length) && (eq = f8);
				for (f8 = aZT - 1; 0 <= f8; f8--) r2[f8] = 1;
				for (f8 = aZW[eq].length - 1; 0 <= f8; f8--) r2[z2[aZW[eq][f8]]] += 3, r2[z3[aZW[eq][f8]]]++;
				for (aB = aZT - 1; 0 <= aB; aB--) {
					for (e = eq % aZT, f8 = aZT - 1; 0 <= f8; f8--) r2[f8] > r2[e] && (e = f8);
					for (nK = -1, f8 = aD.x8; 0 < f8; f8--)
						if (this.kX[f8] === e + 1) {
							nK = f8;
							break
						} if (r2[e] = 0, -1 !== nK) {
						for (tB = 0, f8 = aD.x8; 0 < f8; f8--) aZJ[nK] > aZJ[f8] && tB++;
						if (tB !== aD.x8 - 1) {
							for (f8 = aZW[eq].length - 1; 0 <= f8; f8--) aZJ[nK]++, this.el[aZW[eq][f8]] = nK;
							break
						}
					}
				}
				aZU[eq] = !0
			}
		}, this.aZM = function(z2, z3, aZJ) {
			for (var aB, i6, en = this.kX.length - 1, border = bL.du(aD.kA, aD.x8), aZX = (0 < aD.kA % aD.x8 && border++, new Uint8Array(1 + en)), f7 = en; 1 <= f7; f7--) aZX[this.kX[f7]] = f7;
			for (aB = 0; aB < aD.kA; aB++) i6 = aZX[z2[aB] + 1], 0 === this.el[aB] && i6 <= aD.x8 && aZJ[i6] < border && (aZJ[i6]++, this.el[aB] = i6);
			for (aB = 0; aB < aD.kA; aB++) i6 = aZX[z3[aB] + 1], 0 === this.el[aB] && i6 <= aD.x8 && aZJ[i6] < border && (aZJ[i6]++, this.el[aB] = i6);
			for (f7 = aD.x8; 1 <= f7; f7--)
				for (aB = aD.kA - 1; 0 <= aB && !(aZJ[f7] >= border); aB--) 0 === this.el[aB] && (aZJ[f7]++, this.el[aB] = f7)
		}, this.aZN = function() {
			for (var aB = aD.kA; aB < aD.ek; aB++) this.el[aB] = 1 + aB % aD.x8
		}
}

function db() {
	this.gc = function() {
		for (var eu, ew, aB = fj - 1; 0 <= aB; aB--) eu = bL.du(fl[aB], 4) % bS.ey, ew = bL.du(fl[aB], 4 * bS.ey), ag.ie[fe] = Math.min(eu, ag.ie[fe]), ag.ih[fe] = Math.min(ew, ag.ih[fe]), ag.ig[fe] = Math.max(eu, ag.ig[fe]), ag.ii[fe] = Math
			.max(ew, ag.ii[fe])
	}, this.fx = function() {
		var eq, gL, aB, en = ag.gF[fe].length,
			ep = ac.ep;
		loop: for (aB = en - 1; 0 <= aB; aB--) {
			for (eq = 3; 0 <= eq; eq--)
				if (gL = ag.gF[fe][aB] + ep[eq], ac.ee(gL) || ac.gN(gL) && ac.ef(gL) !== fe) {
					ac.jN(ag.gF[fe][aB], fe);
					continue loop
				} ag.gF[fe][aB] = ag.gF[fe][en - 1], ag.gF[fe].pop(), en--
		}
	}, this.fy = function() {
		var player = fe,
			gT = ag.gT,
			gU = ag.gU,
			fD = ag.fD,
			en = gT[player].length,
			ep = ac.ep;
		loop: for (var aB = en - 1; 0 <= aB; aB--) {
			for (var aZY = !1, aZZ = !1, eq = 3; 0 <= eq; eq--) {
				var gL = gT[player][aB] + ep[eq];
				if (ac.aGi(gL, player)) continue loop;
				aZY = aZY || ac.i1(gL), aZZ = aZZ || ac.aGh(gL)
			}
			aZY ? gU[player].push(gT[player][aB]) : aZZ ? fD[player].push(gT[player][aB]) : ac.xa(gT[player][aB], player), gT[player][aB] = gT[player][en - 1], gT[player].pop(), en--
		}
	}, this.gR = function() {
		ag.gb[fi] -= fj
	}, this.gS = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) ac.xv(fi, border[aB]) || (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gV = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) !ac.xv(fi, border[aB]) && ac.ei(border[aB]) && (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gW = function(border) {
		for (var eq, gL, en = border.length, ep = ac.ep, aB = en - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--)
				if (gL = border[aB] + ep[eq], ac.aGi(gL, fi)) {
					ag.gT[fi].push(border[aB]), border[aB] = border[en - 1], border.pop(), en--;
					break
				}
	}, this.gX = function() {
		for (var eq, gL, ep = ac.ep, aB = fj - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--) gL = fl[aB] + ep[eq], ac.xy(fi, gL) && ac.aGj(gL) && (ag.gT[fi].push(gL), ac.gI(gL, fi))
	}, this.gY = function() {
		var eu, ew;
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.xv(fi, 4 * (ag.ih[fi] * bS.ey + eu))) break loop;
			ag.ih[fi]++
		}
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.xv(fi, 4 * (ag.ii[fi] * bS.ey + eu))) break loop;
			ag.ii[fi]--
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.xv(fi, 4 * (ew * bS.ey + ag.ie[fi]))) break loop;
			ag.ie[fi]++
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.xv(fi, 4 * (ew * bS.ey + ag.ig[fi]))) break loop;
			ag.ig[fi]--
		}
	}, this.eg = function(player, jJ) {
		return 0 === bg.el[player] || bg.el[player] !== bg.el[jJ]
	}, this.hJ = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.aGu = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.jM(ag.gT[player][aB]) && ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.hM = function(a3O, a3P) {
		for (var aB, dt, gM, gL, aX6 = ag.gT[a3O].length, aX7 = ag.gT[a3P].length, ep = (aX7 < aX6 && (dt = a3O, a3O = a3P, a3P = dt, dt = aX6, aX6 = aX7, 0), ac.ep), eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aX6; aB++)
				if (gL = ag.gT[a3O][aB] + gM, ac.gN(gL) && ac.ef(gL) === a3P) return !0;
		return !1
	}, this.aGv = function(a3O, a3P) {
		for (var aB, gM, gL, aX6 = ag.gT[a3O].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aX6; aB++)
				if (ac.jM(ag.gT[a3O][aB]) && (gL = ag.gT[a3O][aB] + gM, ac.gN(gL)) && ac.ef(gL) === a3P) return !0;
		return !1
	}
}

function dV() {
	this.q4 = new aZa
}

function aZa() {
	this.hP = function(player) {
		bA.g9.a3K(player) && aN.yO(80, L(478), 637, 0, bB.oX, bB.nf, -1, !1)
	}, this.hS = function(player) {
		bA.g9.a3K(player) && aN.yO(80, L(479), 637, 0, bB.oX, bB.nf, -1, !1)
	}
}

function aZb() {
	this.aZc = 0, this.j3 = function() {
		aO.j3(), aZ.j3(), h.j3(), b0.y.j3(), ax.aG4(), bf.dl && (bf.dl = !1, aa.uf())
	}
}

function aZd() {
	this.eM = bf.eM, this.e8 = 0, this.aZc = 0, this.aG2 = 0, this.aZe = null, this.aZf = 7, this.a6r = 0, this.dd = function() {
		this.aG2 = 0, this.aZe = [], this.e8 = 0, this.aZc = 0
	}, this.aSJ = function(aC) {
		if (aD.hB) this.aB6(aC);
		else if (this.aZe.push(aC), 2 === aD.zw) {
			for (var aB = 0; aB < this.aZe.length; aB++) b8.p0.j3(this.aZe[aB]);
			this.aZe = []
		}
	}, this.aB6 = function(aC) {
		2 !== aD.zw && (b8.p0.j3(aC), b9.j3(), aW.aB6(this.aG2), this.aG2 === aD.a4O ? (aD.pv.j3(), this.aG2 = 0, this.e8 = 0, this.aZc = 0, this.eM = bf.eM) : (this.aG2++, af.a4H(), af.mU(!0), bb.aBg()))
	}, this.j3 = function() {
		h.j3(), aD.hB ? (bf.dl = aW.aB6(-1) || bf.dl, mW()) : (0 !== this.e8 || bf.eM >= this.eM && (this.eM += bf.aB5 * Math.floor(1 + (bf.eM - this.eM) / bf.aB5), 2 === aD.zw ? mL() : this.aZg(), this.e8++, 27 < bf.eM - this.a6r)) && this
		.aZh(), mR(), bf.dl && (bf.dl = !1, xz()), this.a6r = bf.eM
	}, this.aZh = function() {
		bf.dl = !0, mT(), this.e8 = 0
	}, this.aZg = function() {
		var vN, aB;
		if (this.aZc !== 7 * this.aG2) mN(), bb.aBg();
		else {
			vN = !1;
			loop: for (; this.aZi() && (vN = !0, mN(), 2 !== aD.zw) && 0 < this.aZe.length;)
				for (aB = this.aZf - 2; 0 <= aB; aB--)
					if (mN(), 2 === aD.zw) break loop;
			vN ? bb.aBg() : (mL(), bb.a4K())
		}
	}, this.aZi = function() {
		return 0 < this.aZe.length && (this.aG2++, b8.p0.j3(this.aZe[0]), this.aZe.shift(), !0)
	}
}

function aZj() {
	var aZk, aZl, aZm, aG2, aZn, e8 = 0,
		eM = bf.eM;

	function aZq() {
		! function() {
			if (!aD.hB) return;
			if (aD.kU) return;
			if (2 !== aD.zw)
				if (aZn % 7 != 0) aZn++;
				else if (aG2 === aD.a4O) {
				if (!aZt()) return;
				aW.aB6(aG2), aD.pv.j3()
			} else {
				if (!aZt()) return;
				aZn++, aG2++, af.a4H(), af.mU(!0)
			}
			return 1
		}() && aZt() && mN()
	}

	function aZr() {
		e8 = 0, (aD.hB ? (bf.dl = aW.aB6(aG2 - (aZn % 7 == 0 ? 0 : 1) + aZn % 7 / 7) || bf.dl, mW) : aM.gx || !bC.a4m ? mW : (bf.dl = !0, mT))()
	}

	function aZt() {
		var aB, en, aZu = b9.pt.aTe,
			fW = b9.pt.aTf,
			fY = b9.pt.aTg,
			fa = b9.pt.aTh,
			aZv = b9.pt.aTi,
			aZw = b9.pt.aTj;
		if (!(aZk >= aZw.length)) {
			if (aZw = aZw[aZk], aZv[aZk]) {
				for (en = aZl + aZw, aB = aZl; aB < en; aB++) b8.p0.ph(aZu[aB], fW[aB], fY[aB], fa[aB]);
				aZl += aZw, aZk++
			} else ++aZm >= aZw && (aZk++, aZm = 0);
			return 1
		}
		aN.a1D("Replay file smaller than expected."), bC.a25(!1), aD.zw = 2
	}
	this.aZc = 0, this.dd = function() {
		aZn = aG2 = aZm = aZl = aZk = 0
	}, this.j3 = function() {
		var aXX;
		h.j3(), bC.a8T() < 1.7 ? 0 === e8 ? bf.eM >= eM && (aXX = bf.aB5 / bC.a8T(), eM += aXX * Math.floor(1 + (bf.eM - eM) / aXX), 2 === aD.zw || aM.gx || !bC.a4m ? mL() : (aZq(), bb.aBg()), e8++) : aZr() : function() {
			var aXX;
			if (bf.eM >= eM)
				if (2 === aD.zw || aM.gx || !bC.a4m) mL(), eM = bf.eM;
				else {
					for (aXX = bf.aB5 / bC.a8T(), 16 < (bf.eM - eM) / aXX && (eM = bf.eM - 16 * aXX); bf.eM >= eM && 2 !== aD.zw;) eM += aXX, aZq();
					bb.aBg()
				} aZr()
		}(), mR(), bf.dl && (bf.dl = !1, xz())
	}, this.a06 = function() {
		b9.pt.aTj.length - aZk <= 2 || aN.a1D("Replay file larger than expected.")
	}
}

function aZx() {
	var e8 = 0,
		eM = bf.eM;
	this.aZc = 0, this.j3 = function() {
		h.j3(), aD.hB ? mW() : 0 === e8 ? bf.eM >= eM && (eM += bf.aB5 * Math.floor(1 + (bf.eM - eM) / bf.aB5), 2 === aD.zw || aM.gx ? mL() : (mN(), bb.aBg()), e8++) : ((aM.gx ? mW : (bf.dl = !0, mT))(), e8 = 0), mR(), bf.dl && (bf.dl = !1, xz())
	}
}

function dR() {
	this.a05 = null, this.dl = !1, this.eM = 0, this.aB5 = 56;
	var aZy = 0;

	function aZz() {
		bf.eM = aZy = performance.now(), bf.a05.j3(), window.requestAnimationFrame(aZz)
	}
	this.dd = function() {
		this.a4j(), window.requestAnimationFrame(aZz), this.eM = performance.now()
	}, this.a4a = function() {
		aD.gw ? (this.a05 = new aZj, this.a05.dd()) : aD.kU ? this.a05 = new aZx : (this.a05 = new aZd, this.a05.dd())
	}, this.a4j = function() {
		this.a05 = new aZb, this.dl = !0
	}, this.j3 = function() {
		this.a05.aZc++
	}, this.k7 = function() {
		return this.a05.aZc
	}, this.aRv = function() {
		var dt = performance.now();
		dt < aZy + 1e3 || (this.eM = dt, this.a05.j3())
	}
}

function ct() {
	var aFS = 0,
		aa0 = !0;

	function aa1(id) {
		id = [L(480), L(481), L(482), L(483)][id];
		aN.a6X(id)
	}
	this.j3 = function() {
		var dt, a6t;
		bf.eM < aFS || (aFS = bf.eM + 5e3, aD.gw) || aD.kU || bA.g9.gz(aD.eX) || (dt = new Date, a6t = dt.getUTCSeconds(), aa0 ? a6t < 50 && (aa0 = !1) : a6t < 50 || (aa0 = !0, (a6t = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a6t || 20 ==
			a6t || 40 == a6t ? aD.kS < 7 && aa1(0) : 10 == a6t || 30 == a6t || 50 == a6t ? 7 !== aD.kS && 10 !== aD.kS || aa1(1) : 5 == a6t || 25 == a6t || 45 == a6t ? 8 === aD.kS && aa1(2) : 35 == a6t && 9 === aD.kS && aa1(3))))
	}
}

function cn() {
	var n8, n9, nL, nM, aa2 = 0,
		aa3 = 0;

	function aa5() {
		return Math.pow(Math.pow(nL - n8, 2) + Math.pow(nM - n9, 2), .5)
	}

	function aa4(e) {
		n8 = h.k * e.touches[0].clientX, n9 = h.k * e.touches[0].clientY, nL = h.k * e.touches[1].clientX, nM = h.k * e.touches[1].clientY
	}
	this.a1U = function(e) {
		return 1 < e.touches.length ? (aa3 = bf.eM, aa2 = 3, aa4(e), aL.rq(), !0) : (aa2 = 0, !1)
	}, this.a1V = function(e) {
		var aKp, i4, i5;
		return 0 !== aD.zw && 1 < e.touches.length && (aa2 = Math.max(aa2 - 1, 0), aH.nQ() && (aKp = aa5(), aa4(e), e = aa5(), i4 = Math.floor((n8 + nL) / 2), i5 = Math.floor((n9 + nM) / 2), aS.a8u(i4, i5, Math.max(.125, e) / Math.max(.125,
			aKp)), bf.dl = !0), !0)
	}, this.a1v = function() {
		var eu, ew;
		return !!(aa2 && (aa2 = 0, bf.eM < aa3 + 500)) && (eu = (n8 + nL) / 2, ew = (n9 + nM) / 2, aL.a1p(eu, ew), aL.click(eu, ew, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.u9 = function() {
		this.aC = null
	}, this.pg = function(size) {
		for (var fF = 0, aC = this.aC, nQ = this.e8 + size - 1, aB = this.e8; aB <= nQ; aB++) fF |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nQ - aB;
		return this.e8 += size, this.e8 > 8 * this.size && console.error("Unwrapper Overflow"), fF
	}, this.aSR = function(size) {
		var f7 = size >> 1;
		return (1 << f7) * this.pg(size - f7) + this.pg(f7)
	}, this.aSS = function(aa6) {
		return this.size === bD.aSQ(aa6)
	}, this.aTw = function(wn, aa7, aa8) {
		var gG = this.pg(wn);
		if (!gG) return null;
		for (var wn = Math.max(gG, aa8), g = new(aa7 <= 8 ? Uint8Array : aa7 <= 16 ? Uint16Array : Uint32Array)(wn), aB = 0; aB < gG; aB++) g[aB] = this.pg(aa7);
		aa8 = g[gG - 1];
		return aa8 && g.fill(aa8, gG), g
	}, this.aTx = function(wn, aa9, aa8) {
		var gG = this.pg(wn);
		if (!gG) return null;
		for (var wn = Math.max(gG, aa8), g = new Array(wn), aB = 0; aB < gG; aB++) g[aB] = this.aTu(aa9);
		return g.fill(g[gG - 1], gG), g
	}, this.aTu = function(wn) {
		return bG.vu.vy(this.pg(wn))
	}, this.aTv = function() {
		var qG = bF.sq.sr(bF.sq.ss(this.pg(30))),
			qG = bA.rY.a4C(qG, "_", "/");
		qG = bA.rY.a4C(qG, "-", "+");
		for (var aaA = "";
			(qG.length + aaA.length) % 4;) aaA += "=";
		qG = "data:image/png;base64," + qG + aaA;
		var aHQ = new Image;
		aHQ.onload = function() {
			b9.aHp.aHq(aHQ), aHQ.onload = null, aHQ = null
		}, aHQ.src = qG
	}
}

function dL() {
	this.aUs = 0, this.aUt = 0, this.aUo = 0, this.aUp = 0, this.aUq = 0, this.aUr = 0, this.aBh = [0, 0, 0, 0], this.nP = function() {
		this.aUs = aS.y1(), this.aUt = aS.y2(), this.aUo = -this.aUs, this.aUp = -this.aUt, this.aUq = h.i / hy, this.aUr = h.j / hy, this.aBh[0] = Math.floor(this.aUo), this.aBh[1] = Math.floor(this.aUp), this.aBh[2] = Math.floor(this.aBh[0] +
			this.aUq + 1), this.aBh[3] = Math.floor(this.aBh[1] + this.aUr + 1), bb.aBe = !0
	}
}

function co() {
	var a7Z, mv;
	this.dd = function() {
		a7Z = 1, mv = 0
	}, this.j3 = function() {
		0 < a7Z && (mv = 0 === mv ? bf.eM + 16 : mv, a7Z = (a7Z -= .001 * (bf.eM - mv)) < 0 ? 0 : a7Z, mv = bf.eM, bf.dl = !0)
	}, this.uf = function() {
		0 < a7Z && (ug.fillStyle = "rgba(0,0,0," + a7Z + ")", ug.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aa6) {
		return this.dd(new Uint8Array(this.aSQ(aa6))), this.aC
	}, this.u9 = function() {
		this.aC = null
	}, this.a8 = function(size, a6x) {
		for (var aC = this.aC, nQ = this.e8 + size - 1, aB = this.e8; aB <= nQ; aB++) aC[aB >> 3] |= (a6x >> nQ - aB & 1) << 7 - (7 & aB);
		this.e8 += size, this.e8 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aSP = function(size, a6x) {
		var f7 = size >> 1,
			eq = 1 << f7;
		this.a8(size - f7, bL.du(a6x, eq)), this.a8(f7, a6x % eq)
	}, this.aaD = function(size) {
		for (var aC = this.aC, nQ = this.e8 + size, aB = this.e8; aB < nQ; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aSQ = function(aa6) {
		return aa6 + 7 >> 3
	}, this.aaE = function(g, jR, nQ, aaF) {
		for (var aB = jR; aB < nQ; aB++) this.a8(aaF, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e8 = 0
	}, this.aSo = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aaG, value) {
		for (var g = this.g, nQ = this.e8 + aaG - 1, aaH = 1 + (nQ >> 3); g.length < aaH;) g.push(0);
		for (var aB = this.e8; aB <= nQ; aB++) g[aB >> 3] |= (value >> nQ - aB & 1) << 7 - (7 & aB);
		this.e8 += aaG
	}, this.dk = function(g, wn, aa7) {
		var aaI = bA.qh.a2h(g);
		this.a8(wn, aaI);
		for (var aB = 0; aB < aaI; aB++) this.a8(aa7, g[aB])
	}, this.aUE = function(g, wn, aa9) {
		var aaI = bA.qh.a2h(g);
		this.a8(wn, aaI);
		for (var aB = 0; aB < aaI; aB++) this.aUC(g[aB], aa9)
	}, this.aUC = function(qG, wn) {
		var en = qG.length;
		this.a8(wn, en);
		for (var aB = 0; aB < en; aB++) this.a8(16, qG.charCodeAt(aB))
	}, this.aUD = function(a2n) {
		var aaJ = (a2n = a2n.toDataURL()).split(",");
		if (aaJ.length < 2) console.log("error 266");
		else {
			a2n = bA.rY.a4C(a2n = aaJ[aaJ.length - 1], "/", "_"), a2n = bA.rY.a4C(a2n, "\\+", "-");
			var a2n = bA.rY.a4C(a2n, "=", ""),
				w7 = bG.sq.w4(a2n),
				en = w7.length;
			this.a8(30, en);
			for (var aB = 0; aB < en; aB++) this.a8(6, w7[aB])
		}
	}
}
a(), self.aiCommand746 = function(fF) {
	0 === fF ? bt() : 1 !== fF || !a0 || 1 !== a0.id || a0.dv < 14 || bJ.fG()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};