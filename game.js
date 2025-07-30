var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, hy, iO, iP,
	a7o, lk, jv, a1R, ui, y6, aBi, a4b, a4c, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io",
		"input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>",
		"undefined", "pre", "</a>", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave",
		"inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel", "underline", "top",
		"tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown",
		"italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
		.dd(), bf.dl = !0, setTimeout(function() {
			bS.a7(2, 14071)
		}, 0), t.u(5, 5), bI.dm() || a0.a1.dn(), h.dp(), l.m = 1)
}

function dG() {
	this.dq = 1108, this.n = 2103, this.rVersion = 13, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dv = "30 Jul 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
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
		bA.g9.pS(hW, p7) ? an.jG(p7, bO.fK[0]) && (bq.pT(player, p7, bO.fK[0], 1), bA.g9.gC(p7, bO.fK[0]), bd.pU(player, p7), af.pV(p7, bO.fK[0])) : bd.gD(player, hW, 12)
	}
}

function ox() {
	this.pW = function(pI, player) {
		aN.pH(aD.eX, player, pI), b0.p3.pX(pI, player)
	}, this.pY = function(player) {
		aN.pZ(player, 0), b0.p3.pa(player)
	}, this.pb = function(pc, player) {
		aN.pd(pc, player), b0.p3.pe(pc, player)
	}, this.pf = function() {
		aD.kU || aD.gw || b0.pg.pf()
	}
}

function p1() {
	this.j3 = function(aC) {
		var id, fW, nQ;
		for (bH.dd(aC), bH.e8 += 2, nQ = 8 * bH.size; bH.e8 + 8 <= nQ;) id = bH.ph(4), fW = bH.ph(9), 0 === id ? this.pi(id, fW, bH.ph(22)) : 1 === id ? this.pi(id, fW, bH.ph(10), bH.ph(10)) : 2 === id ? this.pi(id, fW, bH.ph(10), bH.ph(9)) :
			3 === id ? this.pi(id, fW, bH.ph(10), bH.ph(27)) : 4 === id ? this.pi(id, fW, bH.ph(10), bH.ph(16)) : 5 === id || 6 === id ? this.pi(id, fW, bH.ph(10)) : 7 === id ? this.pi(id, fW, bH.ph(1)) : 10 === id ? this.pi(id, fW, bH.ph(20), bH
				.ph(22)) : this.pi(id, fW)
	}, this.pj = [], this.pk = function() {
		for (var pm = 0, pn = 0, po = 0, pp = 0, pq = 0, pr = 0, aB = 0; aB < 512; aB++) pm += ag.mi[aB], pn += ag.gb[aB], po += ag.gp[aB], pp += bN.y.ps[aB];
		pq += bN.y.lz, pr += al.kB, this.pj.push(po % 1073741824 * 4 + (pm + pn + pp + pq + pr) % 4)
	}, this.pi = function(id, fW, fY, fa) {
		0 === id ? b8.oy.hE(fW, fY) : 1 === id ? b8.oy.hK(fW, fY, fa) : 2 === id ? b8.oy.p8(fW, fY, fa) : 3 === id ? b8.oy.hP(fW, fY, fa) : 4 === id ? b8.oy.hS(fW, fY, fa) : 5 === id ? b8.oy.pF(fW, fY) : 6 === id ? b8.oy.pJ(fW, fY) : 7 === id ?
			b8.oy.hb(fW, fY) : 8 === id ? b8.oy.pN(fW) : 9 === id ? b8.oy.pt(fW) : 10 === id && b8.oy.hG(fW, fY >> 10, fa, fY % 1024)
	}
}

function oz() {
	this.hE = function(player, eZ) {
		bA.g9.gy(0) && bA.g9.gz(player) && bM.iS(eZ) && (b9.pu.pv(0, player, eZ), aD.pw.jG(player, eZ))
	}, this.hK = function(player, iN, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.px(player, jJ) && bA.g9.mH(player, iN, 12, 0) && bA.g9.py(player, jJ) && ((jJ = ad.jW(player, bO.ej[0])) || ad.jo(player)) && (ag.pz[player]++, b9.pu.pv(1, player, iN, bO.ej[0]), ao.it.j8(player,
			jJ)) && (ao.iv.jK[player] = 1, bA.g9.mJ(player), bd.q0(player, iN), ao.it.jE(player))
	}, this.p8 = function(player, iN, p7) {
		bA.g9.gy(1) && bA.g9.gz(player) && aD.hh && bA.g9.px(player, p7) && bA.g9.q1(player, p7) && bA.g9.pQ(player, bA.g9.iM(player, iN), p7) && an.jG(p7, bO.fK[0]) && (b9.pu.pv(2, player, iN, p7), ae.p6(player, p7))
	}, this.hP = function(player, iN, pA) {
		bO.fP[1] = 7 & pA;
		var eZ = pA >> 3;
		bA.g9.gy(1) && bA.g9.gz(player) && bM.iS(eZ) && bN.mF.mG(player) && bN.mF.q2(eZ) && bA.g9.mH(player, iN, 32, 0) && bN.kv.q3(player, eZ, 1) && (ao.iv.jK[player] = 1, bd.q4(player), b9.pu.pv(3, player, iN, pA), bA.g9.mJ(player), bl.q5.hP(
			player), bN.y.mK(player))
	}, this.hS = function(player, iN, n5) {
		849 === iN ? this.pE(player, n5) : bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.mH(player, iN, 32, 0) && bN.hQ.q6(player, n5) && (bd.q4(player), b9.pu.pv(4, player, iN, n5), bA.g9.mJ(player), bl.q5.hS(player), bN.y.mK(player))
	}, this.pE = function(player, n5) {
		bA.g9.gy(1) && bA.g9.gz(player) && bN.q7.j3(player, n5) && b9.pu.pv(4, player, 849, n5)
	}, this.pF = function(player, jJ) {
		513 === jJ ? this.hY(player) : bA.g9.gy(1) && bA.g9.gz(player) && (jJ = Math.min(jJ, aD.ek), ad.jW(player, jJ)) && (b9.pu.pv(5, player, jJ), ad.q8(player, jJ))
	}, this.pJ = function(player, pI) {
		(bA.g9.gy(1) || bA.g9.gy(2)) && bA.g9.gz(player) && (pI = bL.hv(pI, 0, 1023), b9.pu.pv(6, player, pI), af.q9(player, 0, pI))
	}, this.hb = function(player, pL) {
		aw.ha(player) && (b9.pu.pv(7, player, pL), aw.qA(player, pL))
	}, this.pN = function(player) {
		(bA.g9.gy(0) || bA.g9.gy(1)) && bA.g9.gz(player) && aM.qB(player) && (b9.pu.pv(8, player), bQ.pN(player))
	}, this.pt = function(player) {
		b9.pu.pv(9, player), bQ.pt(player)
	}, this.hY = function(player) {
		aw.hc(player) && (b9.pu.pv(5, player, 513), aw.hY(player))
	}, this.hG = function(player, iN, eZ, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.px(player, jJ) && bA.g9.py(player, jJ) && bM.iS(eZ) && am.eO.eh(player, eZ) && (ad.jW(player, bO.ej[0]) || ad.jo(player)) && (ao.iv.jK[player] = 1, b9.pu.pv(10, player, (iN << 10) + bO.ej[0], eZ),
			jJ = bA.g9.lK(player, iN), ag.gF[player].push(bO.eo[0]), ad.jG(player, jJ, bO.ej[0]), aF.jH(player, !0), bd.qC(player))
	}
}

function qD() {
	var qF;
	this.qE = [], this.qF = document.createElement("div"), this.qG = function(qH, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qH, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.qF.appendChild(
			title), title
	}, this.qI = function(qH, marginBottom) {
		var qJ = document.createElement("p");
		return qJ.textContent = qH, qJ.style.fontSize = "0.75em", qJ.style.lineHeight = "1.2em", qJ.style.marginBottom = marginBottom || "0", this.qF.appendChild(qJ), qJ
	}, this.qK = function(qH) {
		var qL = document.createElement("p");
		return qL.textContent = qH, qL.style.fontSize = "1em", qL.style.marginBottom = "0", qL.style.whiteSpace = "pre-wrap", qL.style.overflowWrap = "break-word", this.qF.appendChild(qL), qL
	}, this.qM = function(qN, fontSize) {
		var qF = document.createElement("div");
		return qF.innerHTML = qN, qF.style.fontSize = fontSize || "1em", qF.style.lineHeight = "1.2em", this.qF.appendChild(qF), qF
	}, this.qO = function(qP) {
		for (var qQ = qP.qQ, en = qQ.length, aB = 0; aB < en; aB++) this.qF.appendChild(qQ[aB])
	}, this.qR = function(qS) {
		return this.qE.push(qS), this.qF.appendChild(qS.e), qS
	}, this.resize = function() {
		for (var en = this.qE.length, aB = 0; aB < en; aB++) this.qE[aB].resize && this.qE[aB].resize()
	}, (qF = this.qF).style.position = "absolute", qF.style.height = "auto", qF.style.padding = "0.5em"
}

function qT(qU, qV) {
	var qF = document.createElement("div");

	function qd() {
		var aB, qe, j, gM, eq, qZ = h.k * qF.offsetWidth,
			qf = new Float64Array(function(qZ) {
				var i = .25 * bA.qa.qb(.6) * h.hx;
				return Math.max(Math.floor(qZ / i), 1)
			}(qZ)),
			qg = bc.qg,
			qh = (qZ - (qf.length + 1) * bc.gap) / (qf.length * h.k);
		for (qf.fill(qg), aB = 0; aB < qV.length; aB++) qe = (eq = qV[aB].qF).style, j = bA.qi.min(qf), gM = qf.indexOf(j), qe.top = bA.qa.qj(j), qe.left = bA.qa.qj(qg + gM * (qh + qg)), qe.width = bA.qa.qj(qh), bA.qa.qk(eq, 5), qf[gM] += eq
			.offsetHeight + 3 * qg;
		qF.style.height = bA.qa.qj(bA.qi.max(qf) - 2 * qg)
	}
	this.qW = qF, this.qX = qV, this.resize = function() {
		var aB;
		for (aB = 0; aB < qV.length; aB++) qV[aB].resize();
		qd(), qd()
	}, qF.style.width = "100%", qF.style.maxWidth = "100%", qU.style.lineHeight = "1.5em", qU.style.overflowX = "hidden", qU.style.overflowY = "auto";
	for (var aB = 0; aB < qV.length; aB++) qF.appendChild(qV[aB].qF);
	qU.appendChild(qF)
}

function w(ql, qm, qn, qo, qp) {
	var self, qq = document.createElement("button");

	function qx() {
		var r3;
		bJ.r2() || (r3 = bA.color.r4(qn), !1 !== qo && 0 < r3[0] && r3[0] < 255 && r3[0] === r3[1] && r3[0] === r3[2]) || (qq.style.backgroundColor = bA.color.r5(qn, r3[3] && r3[3] < 120 ? 150 : 50))
	}

	function qw() {
		if (qo) {
			var r3 = bA.color.r4(qn);
			if (r3[0] === r3[1] && r3[0] === r3[2]) return
		}
		qm && ((r3 = qm(this)) ? 2 === r3 && qx() : r7(this))
	}

	function qz() {
		this.style.backgroundColor = qn
	}

	function qy() {
		r7(this)
	}

	function r7(eq) {
		eq.style.backgroundColor = qn, eq.blur()
	}
	this.button = qq, this.qr = qm, this.qs = qn, this.qv = function(r0) {
		r0 = 1.1 - Math.min(.01 * ql.length, .6) + .2 * r0;
		qq.style.fontSize = r0.toFixed(1) + "em"
	}, this.qu = function(f8) {
		f8 ? 1 === f8 ? f8 = bB.nu : 2 === f8 && (qo = 1, f8 = bB.nu) : (qo = 0, f8 = bB.ne), this.qs = qn = f8, qq.style.backgroundColor = f8
	}, self = this, qq.innerHTML = ql, qq.style.color = qp ? bB.og : bB.ni, qq.style.userSelect = "none", qq.style.outline = "none", qq.style.overflowWrap = "break-word", self.qu(qn), qq.style.border = "none", qq.style.font = "inherit", self.qv(
		0), qq.style.padding = "0em 0.3em", qq.onclick = qw, qq.addEventListener("mouseover", qx), qq.addEventListener("mouseout", qy), qq.addEventListener("focus", qx), qq.addEventListener("blur", qz)
}

function r8(r9, qU) {
	var qF;
	this.resize = function() {
		for (var aB = 0; aB < r9.length; aB++) bA.qa.qk(r9[aB].button);
		qF.style.gap = qF.style.padding = bA.qa.qj(bc.qg)
	}, (qF = document.createElement("div")).style.display = "grid", qF.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qF.style.overflowY = "auto", qF.style.gridAutoRows = "5.3em", qF.style.maxHeight = "100%";
	for (var aB = 0; aB < r9.length; aB++) r9[aB].qv(1), qF.appendChild(r9[aB].button);
	qU.appendChild(qF)
}

function rB(rC, rD, rE) {
	this.eu = 0, this.ew = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qa.qb(rE || .5) * rC[1] * h.hx, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rC[0] / rC[1]), h.i - 2 * bc.gap), this.j = rC[1] * this.i / rC[0], this.eu = bc.gap + rD[0] * (h.i - this.i - 2 * bc.gap), this.ew = bc
			.gap + rD[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rF = function() {
		return this.eu + .5 * this.i
	}
}

function rG(rH, rI) {
	var rR, self, rJ = document.createElement("div"),
		rK = document.createElement("div"),
		rL = document.createElement("div"),
		rM = null,
		rS = (this.rN = new rO({
			value: "",
			e8: -1
		}, 0, rP, function(e) {
			e.target.value = bA.rZ.ra(e.target.value), rM.rY.textContent = 127 - e.target.value.length
		}), 0),
		rT = 1,
		rU = 0,
		rV = 1048575;

	function rP() {
		rH(), rM.rY.textContent = 127
	}

	function rk(rj, qS) {
		qS && (qS.rp = 1, rj.appendChild(bn.rq.transform(qS)))
	}

	function rn(bu) {
		rT ? rJ.scrollTop = rJ.scrollHeight : bu && (rJ.scrollTop = rU)
	}
	this.rb = function(rc) {
			rV = 1048575, rK.textContent = "", rc || this.mV()
		}, this.mV = function() {
			var rd = bn.y.re[0],
				rd = bn.y.rg[rd],
				rh = rd.rh,
				en = rh.length,
				jR = 1048575 === rV ? 0 : en - (rd.ri - rV + 1048575) % 1048575;
			if (rV = rd.ri, !(en <= (jR = Math.max(jR, 0)))) {
				for (var rj = document.createDocumentFragment(), aB = jR; aB < en; aB++) rk(rj, bn.kx.rl(rh[aB], bn.kx.rm(rh[aB])));
				rK.appendChild(rj), rn()
			}
		}, this.ro = function(r) {
			var rj = document.createDocumentFragment();
			rk(rj, r), rK.appendChild(rj), rn()
		}, this.show = function(qU) {
			qU.appendChild(rJ), qU.appendChild(rL), this.resize(qU)
		}, this.rr = function(qU) {
			qU.removeChild(rJ), qU.removeChild(rL)
		}, this.resize = function(qU) {
			rS = qU ? qU.offsetHeight : rS;
			var qU = bA.qa.rt(.04, .75),
				ru = Math.max(qU, rS - qU),
				rv = h.i / h.k,
				rw = .7 * rv,
				rx = bA.qa.qj(rS - qU - ru),
				ru = (rL.style.height = bA.qa.qj(qU), rJ.style.height = bA.qa.qj(ru), h.j > h.i || a0.a1.hw() ? (rL.style.top = rx, rJ.style.top = bA.qa.qj(rS - ru), bA.qa.qk(rJ, 8)) : (rJ.style.top = rx, rL.style.top = bA.qa.qj(rS - qU), bA.qa.qk(
						rJ, 2)), this.rN.e.style.width = bA.qa.qj(rw), this.rN.e.style.fontSize = rR.button.style.fontSize = bA.qa.qj(.5 * qU), bA.qa.qk(this.rN.e, 6), rR.button.style.left = bA.qa.qj(rw), rR.button.style.width = bA.qa.qj(rv - rw),
					.385 * qU);
			a0.a1.hw() && (ru *= .8 - .12 * (h.i > h.j)), rK.style.marginLeft = rK.style.marginRight = bA.qa.qj(.5 * ru), rK.style.fontSize = bA.qa.qj(ru), rn(1)
		}, (self = this).rN.e.rW = 127, rJ.style.position = "absolute", rJ.style.left = "0", rJ.style.width = "100%", rJ.style.overflowX = "hidden", rJ.style.overflowY = "auto", rJ.style.font = "inherit", rJ.style.backgroundColor = bB.ng, rJ
		.addEventListener("scroll", function() {
			rU = rJ.scrollTop, rT = rU < rJ.scrollHeight - rJ.clientHeight - 2 ? 0 : 1
		}), rK.style.font = "inherit", rL.style.position = "absolute", rL.style.left = "0", rL.style.width = "100%", self.rN.e.setAttribute("placeholder", L(13)), self.rN.e.style.position = "absolute", self.rN.e.style.top = "0", self.rN.e.style
		.left = "0", self.rN.e.style.height = "100%", self.rN.e.style.backgroundColor = bB.nd, self.rN.e.style.textAlign = "center", (rR = new w(L(14), rP)).button.top = "0", rR.button.style.position = "absolute", rR.button.style.height = "100%", rR
		.qu(bB.ou), rM = new rX("127", rR.button, 1, 1), rJ.appendChild(rK), rL.appendChild(self.rN.e), rL.appendChild(rR.button)
}

function rz(s0, ql, s1) {
	function click() {
		var value = 1 - s0.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + ql, void 0 !== s0.e8 ? bj.s2.s3(s0.e8, value) : s0.value = value, s1 && s1(value)
	}
	var e;
	ql = ql || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (s0.value ? "🟩 " : "⬜ ") + ql, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function s4(qU, qN) {
	var qF = document.createElement("div");
	this.qW = qF, this.resize = function() {
		qF.style.padding = bA.qa.qj(bc.qg), qF.style.lineHeight = bA.qa.qj(bA.qa.rt(.035))
	}, qU.style.overflowX = "hidden", qU.style.overflowY = "auto", qF.innerHTML = qN, qU.appendChild(qF)
}

function s5(s6) {
	var qF = document.createElement("div");
	this.e = qF, this.s7 = s6, this.resize = function() {
		for (var en = s6.length, aB = 1; aB < en; aB++) bA.qa.qk(s6[aB], 4)
	};
	var aB, en = s6.length;
	for (qF.style.width = "100%", qF.style.height = "2.7em", qF.style.marginTop = "0.6em", qF.style.border = "inherit", aB = 0; aB < en; aB++) s6[aB].style.verticalAlign = "top", s6[aB].style.width = (100 / en).toFixed(2) + "%", s6[aB].style.height =
		"100%", s6[aB].style.fontSize = "0.75em", qF.appendChild(s6[aB])
}

function s8(s9, qn, sA) {
	this.qF = document.createElement("div"), this.r9 = s9;
	var sB = 0;
	this.resize = function(qU, sD) {
		var en = s9.length;
		if (!sA)
			for (var aB = 1; aB < en; aB++) bA.qa.qk(s9[aB].button, 4);
		for (var sE = 0, aB = 0; aB < en; aB++) sE += s9[aB].button.offsetWidth;
		if (qU && (sB = qU.offsetWidth), sD && sE < sB)
			for (aB = 0; aB < en; aB++) s9[aB].button.style.width = (100 * s9[aB].button.offsetWidth / sE).toFixed(2) + "%";
		else
			for (aB = 0; aB < en; aB++) s9[aB].button.style.width = "auto";
		sD || this.resize(qU, 1)
	};
	var sC = this;
	sC.qF.style.height = sC.qF.style.maxHeight = "100%";
	for (var aB = 0; aB < s9.length; aB++) s9[aB].qu(qn), s9[aB].button.style.height = "100%", s9[aB].button.style.padding = "0.0em 0.9em", sC.qF.appendChild(s9[aB].button)
}

function sF() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qa.qk(this.e, 8, bB.nr)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sG() {
	var sK, sL, sH = document.createElement("div"),
		sI = 0,
		sJ = 0;
	this.show = function(eu, ew, qH, sM, sN) {
		if (sI) {
			if (!sM) return;
			this.rr()
		}
		eu === ew && -1 === eu ? (eu = sK, ew = sL) : (sK = eu, sL = ew), sN || (sJ = sM), sI = 1;
		sN = h.i / h.k, sH.style.whiteSpace = "pre", sH.textContent = qH, bA.qa.qk(sH, 5), sH.style.font = bA.qa.sP(0, bA.qa.rt(.015)), sH.style.padding = "0.3em 0.6em", sH.style.left = eu + "px", sH.style.top = "0px", document.body.appendChild(
			sH), sM = eu + sH.offsetWidth - sN;
		0 < sM && (sH.style.left = (qH = eu - sM) + "px", qH < 5) && (sH.style.whiteSpace = "pre-wrap"), sH.style.top = ew - sH.offsetHeight + sJ * bc.sR + "px"
	}, this.rr = function(sS) {
		if (sI) {
			if (sS && sJ) return 0;
			sI = 0, document.body.removeChild(sH)
		}
		return 1
	}, sH.style.position = "absolute", sH.style.backgroundColor = bB.ne, sH.style.color = bB.ni, sH.style.pointerEvents = "none", sH.style.zIndex = "5", sH.style.maxWidth = "100%"
}

function rO(sT, type, sU, sV) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sW++, e.value = sT.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.ni, e.style.backgroundColor = bB.nb, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sX++
		}), e.addEventListener("blur", function() {
			h.sX--, -1 !== sT.e8 && bj.s2.s3(sT.e8, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sT.e8 && bj.s2.s3(sT.e8, e.value), sU ? sU() : e.blur())
		}), sV && e.addEventListener("input", function(qS) {
			sV(qS)
		})
}

function sY(qU, data) {
	var en = data.sZ.length,
		sa = document.createElement("div"),
		sb = document.createElement("div"),
		sc = document.createElement("div"),
		sd = new Array(en),
		qV = new Array(en),
		se = new Array(data.sf.length),
		sg = bA.color.nc(70, 70, 0, .35);

	function r5() {
		this.style.backgroundColor = bA.color.r5(sg, 160)
	}

	function sl() {
		this.style.backgroundColor = sg
	}

	function qd() {
		var f6;
		for (qU.style.font = bA.qa.sP(0, bA.qa.sv(.026, .5, .03)), aB = 1; aB < se.length; aB++) bA.qa.qk(se[aB], 4);
		if (bA.qa.qk(sa, 2), en) {
			for (var hF, sw = sa.offsetWidth, sx = sc.offsetWidth, aB = 0; aB < se.length; aB++) hF = .01 * data.sk[aB] * sx, se[aB].style.width = (100 * hF / sw).toFixed(2) + "%";
			var l3 = data.sZ[0].length;
			for (aB = 0; aB < en; aB++)
				for (bA.qa.qk(sd[aB], 2), f6 = 1; f6 < l3; f6++) bA.qa.qk(qV[aB][f6], 4);
			sb.sh && (sb.scrollTop = sb.sh)
		}
	}
	this.resize = function() {
			qd(), qd()
		}, qU.style.display = "flex", qU.style.flexDirection = "column", sb.style.overflowX = "hidden", sb.style.overflowY = "auto", sb.addEventListener("scroll", function() {
			this.sh = this.scrollTop
		}),
		function() {
			var eq, aB, sZ = data.sZ,
				l3 = en ? sZ[0].length : 0;
			for (aB = 0; aB < en; aB++) {
				sd[aB] = document.createElement("div"), sd[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nc(130, 130, 130, .35) : bB.nh
				}(aB), sd[aB].style.width = "100%", sd[aB].style.display = "flex", qV[aB] = new Array(l3);
				for (var f6 = 0; f6 < l3; f6++) qV[aB][f6] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data
					.sk[f6] + "%", eq.innerHTML = sZ[aB][f6].fF, 1 === sZ[aB][f6].dt && (eq.name = "" + aB, eq.style.color = bB.og, eq.style.backgroundColor = sg, eq.addEventListener("mouseover", r5), eq.addEventListener("mouseout", sl), function(eq,
						sn, so) {
						2147483647 !== so && eq.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, sn), bH.dd(bD.aC), this.style.backgroundColor = sg, t.u(8, t.sp, new sq(25, {
								sr: 0,
								sn: bF.ss.st(bF.ss.su(5)),
								so: so
							}))
						})
					}(eq, sZ[aB][f6].sn, sZ[aB][f6].so)), sd[aB].appendChild(eq)
			}
			for (sa.style.display = "flex", sa.style.backgroundColor = bA.color.nc(0, 120, 0, .35), aB = 0; aB < se.length; aB++) se[aB] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style
				.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data.sk[aB] + "%", eq.innerHTML = data.sf[aB], sa.appendChild(eq)
		}();
	for (var aB = 0; aB < en; aB++) sc.appendChild(sd[aB]);
	sb.appendChild(sc), qU.appendChild(sa), qU.appendChild(sb)
}

function sy() {
	var t2, t3, sz = document.createElement("div"),
		t0 = document.createElement("div"),
		t1 = document.createElement("div"),
		sc = document.createElement("div"),
		r9 = [],
		e3 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		t4 = [1, 2, 3, 0, 9, 10, 11];

	function t6(aB) {
		t.u(8, 0, new sq(21, {
			t8: t4[aB],
			t9: 0,
			tA: 10
		}))
	}
	this.show = function() {
			this.s3(t.y.tB), document.body.appendChild(sz)
		}, this.rr = function() {
			document.body.removeChild(sz)
		}, this.s3 = function(tB) {
			for (var tC = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < r9.length; aB++) {
				var i = tB[aB];
				t2[tC[aB]][1].rY.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tD = bc.gap,
				j = bA.qa.tE(.085),
				i = Math.min(4 * j, h.i - 2 * tD),
				en = r9.length;
			for (bA.qa.tF(sz, tD, h.j - tD - j, i, j), bA.qa.qk(sz), bA.qa.qk(t0, 6), aB = 0; aB < en - 1; aB++) bA.qa.qk(r9[aB].button, 6);
			for (aB = 0; aB < en; aB++) t2[aB][0].resize(), t2[aB][1].resize();
			for (r9[0].eu = 0, r9[0].button.style.left = bA.qa.qj(r9[0].eu), r9[0].button.style.width = bA.qa.tG(1.7 * j), aB = 1; aB < en; aB++) r9[aB].eu = r9[aB - 1].eu + r9[aB - 1].button.offsetWidth, r9[aB].button.style.left = bA.qa.qj(r9[aB]
				.eu);
			if (!t3) {
				if (!ab.tH()) return;
				(t3 = ab.get(14)).style.width = "24%", t3.style.position = "absolute", t0.appendChild(t3)
			}
			t3.style.left = bA.qa.qj(0), t3.style.top = "7%", t1.tI && (t1.scrollLeft = t1.tI)
		}, sz.style.position = "absolute", t0.style.width = "25%", t0.style.height = "100%", t0.style.backgroundColor = bB.ne, t1.style.position = "absolute", t1.style.width = "75%", t1.style.height = "100%", t1.style.backgroundColor = bB.ne, t1
		.style.top = t1.style.right = bA.qa.qj(0), bA.qa.t5(t1), sc.style.height = sc.style.maxHeight = "100%", r9.push(new w("", function() {
			t6(0)
		}, bB.oS)), r9.push(new w("", function() {
			t6(1)
		}, bB.oT)), r9.push(new w("", function() {
			t6(2)
		}, bB.oL)), r9.push(new w("", function() {
			t6(3)
		}, bB.o6)), r9.push(new w("", function() {
			t6(4)
		}, bB.op)), r9.push(new w("", function() {
			t6(5)
		}, bB.on)), r9.push(new w("", function() {
			t6(6)
		}, bB.op)), t2 = new Array(r9.length);
	for (var aB = 0; aB < r9.length; aB++) r9[aB].button.style.position = "absolute", t2[aB] = [new t7(e3[aB], r9[aB].button, .25, .45), new t7("", r9[aB].button, .53, .84, 1)], r9[aB].button.style.height = r9[aB].button.style.maxHeight = "100%", r9[
		aB].button.top = bA.qa.qj(0), sc.appendChild(r9[aB].button);
	t1.appendChild(sc), sz.appendChild(t0), sz.appendChild(t1)
}

function tJ(tK, tL, tM, tN, rH, rI) {
	var tO = document.createElement("div"),
		tP = document.createElement("div"),
		tQ = document.createElement("div"),
		tR = document.createElement("div"),
		tS = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("div"),
		tV = document.createElement("div"),
		tW = document.createElement("span"),
		tX = document.createElement("div");
	this.tY = new rG(rH, rI), this.tZ = new ta(rI), this.tb = [tK, tL, tM, tN], this.tf = function(tg) {
		tg = (tg / 10).toFixed(1) + "%";
		tV.style.width = tg, tW.innerHTML = tg
	}, this.th = function() {
		this.tZ.rr(tT), this.tY.show(tT)
	}, this.ti = function() {
		this.tY.rr(tT), this.tZ.show(tT)
	}, this.tj = function() {
		return tP
	}, this.show = function() {
		document.body.appendChild(tO)
	}, this.rr = function() {
		document.body.removeChild(tO)
	}, this.resize = function(tk) {
		var tl = 1 - .4 * a0.a1.hw() * (h.i > 1.6 * h.j),
			tm = bA.qa.rt(.05 * tl),
			tn = h.j > h.i,
			to = bA.qa.rt(.07 * tl + .03 * tn),
			tp = bA.qa.rt(.04 + .02 * tn),
			tn = bA.qa.rt(.02 * tl + .01 * tn),
			tr = bA.qa.rt(.025);
		tO.style.font = bA.qa.sP(0, tr), tl < 1 && (tr = bA.qa.sP(0, tl * tr), tQ.style.font = tr, tS.style.font = tr, tX.style.font = tr, tU.style.font = tr, tR.style.font = tr), tP.style.height = bA.qa.qj(tm), tP.style.font = bA.qa.sP(0, .72 *
				tm), bA.qa.qk(tP, 2), tQ.style.top = bA.qa.qj(tm), tQ.style.height = bA.qa.qj(to), bA.qa.qk(tQ, 2), tR.style.font = bA.qa.sP(0, tl * bA.qa.rt(.02)), tR.style.top = bA.qa.qj(tm + to), tR.style.height = bA.qa.qj(tp), bA.qa.qk(tR,
			2), tS.style.top = bA.qa.qj(tm + to + tp), tS.style.height = bA.qa.qj(to), bA.qa.qk(tS, 2), tT.style.top = bA.qa.qj(tm + to + tp + to), tT.style.height = bA.qa.qj(h.j / h.k - tm - 3 * to - tp - tn), tU.style.top = bA.qa.qj(h.j / h.k -
				to - tn), tU.style.height = bA.qa.qj(tn), bA.qa.qk(tU, 8), tW.style.font = bA.qa.sP(0, .8 * tn), tX.style.top = bA.qa.qj(h.j / h.k - to), tX.style.height = bA.qa.qj(to), bA.qa.qk(tX, 8), tK.resize(tQ), tL.resize(tQ), tM.resize(
			tQ), tN.resize(tQ), tk ? this.tY.resize(tT) : this.tZ.resize()
	};
	rH = this;
	tO.style.position = "absolute", tO.style.top = "0", tO.style.left = "0", tO.style.width = "100%", tO.style.height = "100%", tO.style.backgroundColor = bB.nh, bJ.r2() || (tO.style.backdropFilter = "blur(4px)", tO.style.webkitBackdropFilter =
		"blur(4px)"), tP.style.position = "absolute", tP.style.top = "0", tP.style.left = "0", tP.style.width = "100%", tP.style.display = "flex", tP.style.alignItems = "center";
	for (var g = [tQ, tR, tS, tX], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qa.t5(g[aB]);
	tT.style.position = "absolute", tT.style.left = "0", tT.style.width = "100%", tT.style.font = "inherit", tU.style.position = "absolute", tU.style.left = "0", tU.style.width = "100%", tV.style.position = "absolute", tV.style.top = "0", tV.style
		.left = "0", tV.style.height = "100%", tV.style.width = "50%", tV.style.backgroundColor = bB.o4, tW.innerHTML = "", tW.style.position = "absolute", tW.style.top = "50%", tW.style.left = "50%", tW.style.transform = "translate(-50%, -50%)", tP
		.appendChild(function() {
			var te = document.createElement("h1");
			return te.textContent = L(23), te.style.margin = "0 auto 0.15em auto", te.style.fontFamily = "Arial Black, Trebuchet MS", te.style.fontSize = "inherit", te.style.fontWeight = "inherit", te
		}()), tQ.appendChild(tK.qF), tR.appendChild(tL.qF), tS.appendChild(tM.qF), tU.appendChild(tV), tU.appendChild(tW), tX.appendChild(tN.qF), tO.appendChild(tP), tO.appendChild(tQ), tO.appendChild(tR), tO.appendChild(tS), tO.appendChild(tT), tO
		.appendChild(tU), tO.appendChild(tX), rH.tZ.show(tT)
}

function ta(rI) {
	var tO = document.createElement("div"),
		tT = document.createElement("div");
	this.mV = function() {
			tT.textContent = "", bn.tt.rr(1);
			for (var rj = document.createDocumentFragment(), tu = bn.y.re[0], tv = bn.tv.tw[tu], tx = bn.tv.tx[tu], aB = 0; aB < tv.length; aB++) ! function(rj, qS, tz, tu) {
				var rY = document.createElement("span");
				rY.textContent = (tz ? "🟢 " : "⚪ ") + bn.kx.u0(qS, tu), rY.style.color = bn.kx.u1(qS.u2), rY.style.cursor = "pointer", rY.style.margin = "0.2em 0.2em 0.2em 0.2em", rY.style.width = rY.style.maxWidth = 2 === tu ? "10em" : "9em",
					rY.style.height = rY.style.maxHeight = "1.4em", rY.style.whiteSpace = "nowrap", rY.style.overflow = "hidden", rY.style.textOverflow = "ellipsis", rY.style.font = "inherit", rY.style.display = "inline-block", bn.kx.u3(qS) && (
						rY.style.textDecoration = "underline"), rY.onclick = function(e) {
						rI(e, qS)
					}, bJ.r2() || (rY.onmouseover = function(e) {
						bn.tt.u4(e, qS, 1)
					}), rj.appendChild(rY)
			}(rj, tv[aB], aB < tx, tu);
			tT.appendChild(rj)
		}, this.show = function(qU) {
			qU.appendChild(tO)
		}, this.rr = function(qU) {
			qU.removeChild(tO)
		}, this.resize = function() {
			tT.style.fontSize = bA.qa.qj(bA.qa.rt(.02, .3))
		}, tO.style.top = "0", tO.style.left = "0", tO.style.width = tO.style.height = "100%", tO.style.overflowX = "hidden", tO.style.overflowY = "auto", tO.style.font = "inherit", tT.style.font = "inherit", tT.style.margin = "0.4em", tO
		.appendChild(tT)
}

function u5(u6) {
	var tO = document.createElement("div"),
		rL = document.createElement("div"),
		u7 = [];

	function qx() {
		bJ.r2() || (this.style.backgroundColor = bA.color.r5(bB.ne, 50))
	}

	function qy() {
		this.style.backgroundColor = bB.ne
	}
	this.s3 = function(u9, uA) {
			u7[2].textContent = u9 + 1 + " / " + uA
		}, this.show = function(qS) {
			rL.appendChild(bn.rq.transform(bn.kx.rl(qS, bn.kx.rm(qS)))), document.body.appendChild(tO)
		}, this.resize = function() {
			var j = bA.qa.rt(.03, .5);
			tO.style.width = 10 * j + "px", tO.style.font = bA.qa.sP(1, .75 * j), bA.qa.qk(tO, 4), rL.style.top = j + "px", rL.style.font = bA.qa.sP(0, .55 * j), bA.qa.qk(rL, 2), tO.style.height = j + rL.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qa.qk(u7[aB], 6), u7[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u7[aB].style.height = j + "px", bA.qa.qk(u7[aB], 2);
			u7[2].style.width = 4 * j + "px", u7[1].style.left = 2 * j + "px", u7[2].style.left = 4 * j + "px", u7[3].style.left = 8 * j + "px"
		}, this.uB = function() {
			for (var aB = 0; aB < 4; aB++) u7[aB].onclick = null, u7[aB].onmouseover = null, u7[aB].onmouseout = null;
			document.body.removeChild(tO), tO = rL = u7 = null
		}, tO.style.position = "absolute", tO.style.color = bB.ni, tO.style.zIndex = "3", tO.style.right = "0", tO.style.top = "0", rL.style.position = "absolute", rL.style.height = "auto", rL.style.color = bB.ni, rL.style.backgroundColor = bB.ne, rL
		.style.left = "0", rL.style.width = "100%", rL.style.overflowWrap = "break-word", tO.appendChild(rL);
	for (var aB = 0; aB < 4; aB++) u7[aB] = document.createElement("div"), u7[aB].style.position = "absolute", u7[aB].style.backgroundColor = bB.ne, u7[aB].style.color = bB.ni, u7[aB].style.top = "0", u7[aB].style.display = "flex", u7[aB].style
		.justifyContent = "center", u7[aB].style.alignItems = "center", u7[aB].style.userSelect = "none", u7[aB].style.outline = "none", u7[aB].style.font = "inherit", 2 !== (u7[aB].u8 = aB) && (u7[aB].onclick = u6, u7[aB].onmouseover = qx, u7[aB]
			.onmouseout = qy), tO.appendChild(u7[aB]);
	u7[0].textContent = "◀", u7[1].textContent = "▶", u7[3].textContent = "✖"
}

function uC(u6) {
	var sH = document.createElement("div");

	function qx() {
		bJ.r2() || (sH.style.backgroundColor = bA.color.r5(bB.ne, 50))
	}

	function qy() {
		sH.style.backgroundColor = bB.ne
	}
	this.s3 = function(uA) {
			sH.textContent = uA
		}, this.show = function() {
			document.body.appendChild(sH)
		}, this.resize = function() {
			var j = bA.qa.rt(.03, .5);
			sH.style.width = 2 * j + "px", sH.style.height = j + "px", sH.style.font = bA.qa.sP(1, .75 * j), bA.qa.qk(sH, 4), bA.qa.qk(sH, 2)
		}, this.uB = function() {
			sH.onclick = null, sH.onmouseover = null, sH.onmouseout = null, document.body.removeChild(sH), sH = null
		}, sH.style.position = "absolute", qy(), sH.style.color = bB.ni, sH.style.zIndex = "3", sH.style.right = "0", sH.style.top = "0", sH.style.display = "flex", sH.style.justifyContent = "center", sH.style.alignItems = "center", sH.style
		.userSelect = "none", sH.style.outline = "none", sH.onclick = u6, sH.onmouseover = qx, sH.onmouseout = qy
}

function uD(s9) {
	var tO = document.createElement("div"),
		uE = document.createElement("div"),
		sI = (this.eu = 0, this.ew = 0);

	function uG() {
		bn.uH.rr()
	}
	this.r9 = s9, this.show = function(eu, ew, uJ) {
		if (sI) return [0, 0];
		sI = 1, this.eu = eu, this.ew = ew,
			function(self, uJ) {
				var i = bA.qa.rt(.16, .7),
					j = s9.length * i / 3,
					uL = h.i / h.k,
					uM = h.j / h.k,
					nK = Math.min(1, Math.min(uL / i, uM / j));
				i *= nK, j *= nK, uJ && (self.eu += bA.qa.rt(.03, .5)), self.eu = bL.hv(self.eu, 0, uL - i), self.ew = bL.hv(self.ew, 0, uM - j), uE.style.left = self.eu + "px", uE.style.top = self.ew + "px", uE.style.width = i + "px", uE.style
					.height = j + "px", uE.style.font = bA.qa.sP(0, .34 * j / s9.length), bA.qa.qk(uE, 5);
				for (var aB = 1; aB < s9.length; aB++) bA.qa.qk(s9[aB].button, 8)
			}(this, uJ), document.body.appendChild(tO)
	}, this.rr = function() {
		sI && (sI = 0, tO.removeEventListener("click", uG), document.body.removeChild(tO))
	};
	for (var aB = 0; aB < s9.length; aB++) new rX("" + (1 + aB), s9[aB].button, 0, 1);
	tO.style.position = "fixed", tO.style.top = "0", tO.style.left = "0", tO.style.width = "100%", tO.style.height = "100%", tO.style.zIndex = "5", uE.style.position = "absolute",
		function() {
			for (var uI = (100 / s9.length).toFixed(2) + "%", aB = 0; aB < s9.length; aB++) s9[aB].button.style.width = "100%", s9[aB].button.style.height = s9[aB].button.style.maxHeight = uI, s9[aB].button.style.padding = "0.0em 0.9em", uE
				.appendChild(s9[aB].button)
		}(), tO.appendChild(uE), tO.addEventListener("click", uG)
}

function uN(sT, uO) {
	this.qQ = [];
	var uP = this.qQ;

	function click() {
		for (var aB = 0; aB < uP.length; aB++) uP[aB].textContent = uP[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e8 = parseInt(this.name);
		void 0 !== sT.e8 && bj.s2.s3(sT.e8, e8), uO && uO(e8)
	}
	for (var uQ, en = sT.uR.length, aB = 0; aB < en; aB++)(uQ = document.createElement("p")).textContent = "⚪ " + sT.uR[aB], uQ.style.margin = "0", uQ.name = "" + aB, uQ.style.cursor = "pointer", uQ.style.fontSize = "1em", uQ.addEventListener(
		"click", click), uP.push(uQ);
	uP[sT.value].textContent = uP[sT.value].textContent.replace("⚪", "🟢")
}

function uS(title, uT, uU) {
	var sz = document.createElement("div"),
		uV = document.createElement("div"),
		sc = document.createElement("div"),
		uW = document.createElement("div"),
		uX = document.createElement("div");
	this.uY = sc, this.uZ = uT, this.show = function() {
			!1 !== uU ? document.body.appendChild(sz) : (document.body.appendChild(uV), document.body.appendChild(uW))
		}, this.rr = function() {
			!1 !== uU ? document.body.removeChild(sz) : (document.body.removeChild(uV), document.body.removeChild(uW))
		}, this.ud = function() {
			var ru = bA.qa.rt(.1),
				rs = bA.qa.rt(.08 + .04 * (h.ue < 1));
			return {
				ru: ru,
				rs: rs,
				uf: h.j / h.k - ru - rs
			}
		}, this.resize = function(sD) {
			var en = uT.length,
				ug = this.ud(),
				ru = ug.ru,
				rs = ug.rs;
			for (uV.style.height = bA.qa.qj(ru), bA.qa.qk(uV, 2), uW.style.top = bA.qa.qj(h.j / h.k - rs), uW.style.height = bA.qa.qj(rs), bA.qa.qk(uW, 8), sc.style.top = bA.qa.qj(ru), sc.style.height = sc.style.maxHeight = bA.qa.qj(ug.uf), uV.style
				.font = bA.qa.sP(0, bA.qa.rt(.02, .3)), uW.style.font = bA.qa.sP(0, bA.qa.rt(.02, .7)), sc.style.font = bA.qa.sP(0, bA.qa.rt(.02, .7)), aB = 1; aB < en; aB++) bA.qa.qk(uT[aB].button, 4);
			for (var sE = 0, aB = 0; aB < en; aB++) sE += uT[aB].button.offsetWidth;
			if (sD && sE < uW.offsetWidth)
				for (aB = 0; aB < en; aB++) uT[aB].button.style.width = (100 * uT[aB].button.offsetWidth / sE).toFixed(2) + "%";
			else
				for (aB = 0; aB < en; aB++) uT[aB].button.style.width = "auto";
			uW.tI && (uW.scrollLeft = uW.tI), sD || this.resize(!0)
		}, this.uh = function() {
			var ug = this.ud(),
				f8 = h.k;
			ui.fillStyle = bB.ne, ui.fillRect(0, f8 * ug.ru, h.i, f8 * ug.uf)
		}, sz.style.position = "absolute", sz.style.top = "0", sz.style.left = "0", sz.style.width = "100%", sz.style.height = "100%", uV.style.position = "absolute", uV.style.top = "0", uV.style.left = "0", uV.style.width = "100%", uV.style
		.display = "flex", uV.style.backgroundColor = bB.ne, uW.style.position = "absolute", uW.style.left = "0", uW.style.width = "100%", bA.qa.t5(uW), uX.style.height = uX.style.maxHeight = "100%", sc.style.position = "absolute", sc.style.width =
		"100%", sc.style.backgroundColor = bB.ne,
		function() {
			for (var aB = 0; aB < uT.length; aB++) uT[aB].button.style.height = "100%", uT[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uT.length; aB++) uX.appendChild(uT[aB].button);
	uV.appendChild(function() {
		var uc = document.createElement("h1");
		return uc.textContent = title, uc.style.margin = "auto", uc.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", uc.style.fontFamily = "Arial Black, Trebuchet MS", uc
	}()), uW.appendChild(uX), !1 !== uU && (sz.appendChild(sc), sz.appendChild(uV), sz.appendChild(uW))
}

function rX(uj, uk, ul, um) {
	var self;
	this.rY = document.createElement("span"), (self = this).rY.textContent = uj, self.rY.style.color = bB.ni, self.rY.style.position = "absolute", self.rY.style.font = "inherit", um ? self.rY.style.bottom = "0.06em" : self.rY.style.top = "0.12em",
		ul ? self.rY.style.left = "0.2em" : self.rY.style.right = "0.2em", self.rY.style.fontSize = "0.6em", self.rY.style.pointerEvents = "none", self.rY.style.whiteSpace = "pre", uk.style.position = "relative", uk.style.overflow = "hidden", uk
		.appendChild(self.rY)
}

function t7(uj, uk, un, uo, up) {
	var self;
	this.rY = document.createElement("span"), this.resize = function() {
			this.rY.style.fontSize = ((uo - un) * uk.offsetHeight).toFixed(1) + "px"
		}, (self = this).rY.textContent = uj, self.rY.style.color = bB.ni, self.rY.style.font = "inherit", self.rY.style.margin = "0.1em 0.6em", self.rY.style.pointerEvents = "none", up && (self.rY.style.fontWeight = "bold"), self.rY.style
		.whiteSpace = "nowrap", self.rY.style.display = "block", uk.appendChild(self.rY)
}

function uq(ur, us, ut, uu) {
	var uv = document.createElement("textarea"),
		uw = (this.e = uv, !0);

	function v2() {
		uv.select(), document.execCommand("copy")
	}
	this.resize = function() {
			us && bA.qa.qk(uv, 5)
		}, this.ux = function(uy) {
			uv.value = uy
		}, this.uz = function() {
			return uv.value
		}, this.v0 = function() {
			uv.select()
		}, this.clear = function() {
			uv.value = ""
		}, this.v1 = function() {
			uw && navigator.clipboard ? (uv.select(), navigator.clipboard.writeText(uv.value).catch(function() {
				uw = !1, v2()
			})) : v2()
		}, uv.setAttribute("id", "textArea" + t.y.sW++), uv.setAttribute("autocomplete", "off"), ur && uv.setAttribute("placeholder", ur), uv.style.top = "0", uv.style.left = "0", uv.style.width = "100%", uv.style.height = "100%", uv.style
		.userSelect = "none", uv.style.outline = "none", uv.style.resize = "none", uv.style.border = "none", uv.style.color = bB.ni, uv.style.backgroundColor = bB.nb, uu ? (uv.style.fontSize = "1em", uv.rows = 6, uv.style.padding = "0.25em") : (uv
			.style.padding = "0.45em", uv.style.fontSize = "1.2em"), ut && uv.addEventListener("input", function(e) {
			ut(e)
		}), uv.addEventListener("focus", function() {
			h.sX++
		}), uv.addEventListener("blur", function() {
			h.sX--
		})
}

function dI() {
	this.qr = new v3, this.eK = new v4, this.s2 = new v5, this.y = new v6, this.dd = function() {
		this.eK.dd(), (new v7).dd()
	}
}

function v4() {
	function v8(aB, type, vF, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type || 0,
			value: vF || 0,
			vF: vF || 0,
			dv: dv || 0
		})
	}

	function v9(aB, type, vF, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type,
			value: vF || "",
			vF: vF || "",
			dv: dv || 0
		})
	}

	function vA(nQ) {
		for (var aB = bj.eK.data.length; aB < nQ; aB++) bj.eK.data.push(null)
	}
	this.data = [], this.dd = function() {
		v8(0, 1, 0, 5), v8(1, 1, 1), v8(2, 0), v9(3, 2), v8(4, 1), v9(5, 2, "Trebuchet MS", 1), v8(6, 0), v8(7, 0, 0), v8(8, 0), v8(9, 1, 1), v8(10, 1), v8(11, 1, 1), v9(12, 2, navigator.language), v8(13), v8(14), vA(100), v9(100, 2), v9(101, 2),
			v9(102, 2), v9(103, 2), v9(104, 2), v9(105, 2), v9(106, 2), v8(107), v8(108), v8(109), v9(110, 2), v8(111), v8(112), v8(113), v9(114, 2), v8(115), v9(116, 2), v8(117, 1), v9(118, 2, "", 2), v8(119, 1, 0, 1), v9(120, 2), v8(121, 1, ~~(
				262144 * Math.random())), v9(122, 2, "Player " + Math.floor(1e3 * Math.random())), v8(123), v9(124), v8(125, 1), v9(126, 2), v8(127, 0, 1), v8(128), v8(129), v8(130), v8(131), v8(132), v9(133, 2), v8(134, 0, 5), v9(135, 2), v9(
				136, 2), v8(137), v8(138), v8(139), v8(140), v8(141), v8(142), v8(143), v8(144), v9(145, 2), v8(146), v8(147), v9(148, 2), v8(149), v8(150, 0, 1), v9(151, 2), v8(152, 0, 5), v8(153, 1), v8(154, 1), v9(155, 2), v9(156, 2), v8(157),
			v8(158), v8(159), v8(160), vA(180), v8(180, 0), v8(181, 0)
	}, this.s3 = function(e8, value) {
		this.data[e8].value = value
	}, this.vB = function(e8, value) {
		this.s3(e8, value), bj.qr.save(e8, String(value)), bj.qr.save(e8, String(this.data[e8].dv), !0)
	}, this.vC = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bj.qr.save(aB, String(this.data[aB].value)), bj.qr.save(aB, String(this.data[aB].dv), !0))
	}, this.vD = function(e8) {
		return Number(this.data[e8].value)
	}, this.vE = function(e8) {
		return String(this.data[e8].value)
	}
}

function v3() {
	this.vG = function(e8, dv) {
		return Number(this.vH(e8, dv))
	}, this.vH = function(e8, dv) {
		var fF = null;
		return 0 === a0.id ? a0.vI && (fF = a0.vI.getItem((dv ? "v" : "d") + e8)) : 1 === a0.id ? fF = a0.vJ.loadString((dv ? 1e3 : 2e3) + e8) : 2 === a0.id && (fF = a0.vK[(dv ? "v" : "d") + e8]), fF && 0 !== fF.length ? fF : null
	}, this.vL = function(en, vM) {
		var g = [],
			vN = vM ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vI)
				for (aB = 0; aB < en; aB++) g.push(a0.vI.getItem(vN + aB))
		} else if (1 === a0.id)
			for (var vO = vM ? 5e3 : 3e3, aB = 0; aB < en; aB++) g.push(a0.vJ.loadString(vO + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) g.push(a0.vK[vN + aB]);
		return g
	}, this.save = function(e8, value, dv) {
		var vP = (dv ? "v" : "d") + e8;
		if (0 === a0.id) {
			if (a0.vI && bj.eK.data[140].value) try {
				a0.vI.setItem(vP, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vJ.saveString((dv ? 1e3 : 2e3) + e8, value) : 2 === a0.id && (a0.vK[vP] = value, a0.vQ.postMessage(vP + " " + value))
	}, this.vR = function(g, vM) {
		var en = g.length,
			vN = vM ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vI && bj.eK.data[140].value) try {
				for (aB = 0; aB < en; aB++) a0.vI.setItem(vN + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vO = vM ? 5e3 : 3e3, aB = 0; aB < en; aB++) a0.vJ.saveString(vO + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) a0.vK[vN + aB] = g[aB], a0.vQ.postMessage(vN + aB + " " + g[aB])
	}
}

function v7() {
	this.dd = function() {
		! function() {
			var data = bj.eK.data;
			0 === data[2].dv && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vF = 1);
			0 === data[100].dv && (data[100].value = data[100].vF = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fF, data = bj.eK.data,
			en = data.length;
		for (aB = 0; aB < en; aB++) data[aB] && data[aB].dv === bj.qr.vG(aB, !0) && (fF = bj.qr.vH(aB), data[aB].value = null === fF ? data[aB].vF : 2 === data[aB].type ? fF : Number(fF))
	}
}

function v6() {
	function vX(g) {
		if (0 === g.length) bj.s2.s3(116, "");
		else {
			for (var va = g[0], aB = 1; aB < g.length; aB++) va += ";" + g[aB];
			bj.s2.s3(116, va)
		}
	}
	this.vU = function() {
		bj.eK.data[110].value.length && (bj.eK.data[106].value = bj.eK.data[110], bj.s2.s3(110, ""), this.vV())
	}, this.vV = function() {
		var g = bj.eK.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eK.data[106].value), g.unshift(bj.eK.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vW = [], aB = 0; aB < g.length; aB += 2) vW.push(g[aB]);
		vX(g), bj.eK.data[117].value = 0, bj.eK.data[117].uR = vW
	}, this.vY = function(e8) {
		bj.eK.data[117].uR.splice(e8, 1), bj.eK.data[117].value = Math.min(e8, bj.eK.data[117].uR.length - 1);
		var g = bj.eK.data[116].value.split(";");
		g.splice(2 * e8, 2), vX(g)
	}, this.vZ = function(e8) {
		var g = bj.eK.data[116].value.split(";");
		return {
			sn: g[2 * e8],
			password: g[2 * e8 + 1]
		}
	}, this.vb = function() {
		var fF = bL.hv(bj.eK.data[121].value, -1, 262143);
		return fF = -1 === fF ? ~~(262144 * Math.random()) : fF
	}
}

function v5() {
	this.s3 = function(e8, value) {
		bj.eK.data[e8].value !== value && (bj.eK.vB(e8, value), 0 === e8 ? (t.x(), b7.dd(), t.u(2)) : 1 === e8 ? h.dp(1) : 2 === e8 ? h.dp(0) : 5 === e8 && (bA.qa.vc(), h.dp(0)))
	}, this.vd = function() {
		for (var data = bj.eK.data, aB = 0; aB < 100; aB++) data[aB] && bj.eK.vB(aB, data[aB].vF);
		bA.qa.vc(), h.dp(1), b7.dd()
	}, this.ve = function() {
		for (var data = bj.eK.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eK.s3(aB, data[aB].vF)
	}, this.vf = function() {
		for (var f7 = bj.eK, aB = 128; aB < 135; aB++) f7.vB(aB, f7.data[aB].vF)
	}, this.vg = function(data) {
		bj.s2.s3(109, data.so), bj.s2.s3(107, data.vh), bj.s2.s3(108, data.vi), bj.s2.s3(112, data.vj), bj.s2.s3(111, data.vk), bj.s2.s3(113, data.vl), bj.s2.s3(135, data.vm), bj.s2.s3(136, data.vn), bj.s2.s3(137, data.vo), bj.s2.s3(138, data
			.vp), bj.s2.s3(139, data.vq), bj.s2.s3(141, data.vr), bj.s2.s3(142, data.vs), bj.s2.s3(143, data.vt), bj.s2.s3(144, data.vu)
	}
}

function c4() {
	this.ss = new vv, this.vw = new vx, this.vy = new vz, this.dd = function() {
		this.ss.dd()
	}
}

function vx() {
	this.w0 = function(size) {
		for (var w1 = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(w1.ph(16)));
		return g.join("")
	}, this.w2 = function(qH) {
		return 20 < (qH = qH.trim()).length ? qH.substring(0, 20) : qH
	}
}

function vv() {
	var w3 = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (w3[50] = 37, aB = 0; aB < 10; aB++) w3[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) w3[aB + 20] = aB + 11, w3[aB + 52] = aB + 38
	}, this.w4 = function(qH) {
		return qH.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.w5 = function(qH, size) {
		if ((qH = this.w4(qH)).length > size) return qH.substring(0, size);
		for (; qH.length < size;) qH = "-" + qH;
		return qH
	}, this.w6 = function(qH) {
		for (var w7 = w3, en = qH.length, g = new Uint8Array(en), aB = 0; aB < en; aB++) g[aB] = w7[qH.charCodeAt(aB) - 45];
		return g
	}, this.w8 = function(w9) {
		bD.a7(6 * w9.length), this.wA(w9), bH.dd(bD.aC)
	}, this.wA = function(w9) {
		for (var en = w9.length, i = bD, aB = 0; aB < en; aB++) i.a8(6, w9[aB])
	}, this.wB = function(qH) {
		this.wA(this.w6(qH))
	}, this.wC = function(qH, size) {
		this.wA(this.w6(this.w5(qH, size)))
	}, this.wD = function(qH, size) {
		for (var g = this.w6(this.w5(qH, size)), fF = 0, nK = 1, aB = g.length - 1; 0 <= aB; aB--) fF += nK * g[aB], nK *= 64;
		return fF
	}
}

function wE() {
	var i, j, wF;

	function wf(hF, eq, wd, wK, wY) {
		eq = we(hF, eq + 1 + 2 * wK & 3);
		! function(hF, kl) {
			return 1 < Math.abs(hF % i - kl % i) || 1 < Math.abs(wi(hF) - wi(kl))
		}(hF, eq) && 0 === wY[eq << 2] && (wY[eq << 2] = wd)
	}

	function wi(gL) {
		return Math.floor((gL + .5) / i) % j
	}

	function we(gL, eq) {
		return gL + wF[eq]
	}
	this.wG = function(qH) {
		var aB, wH, en, wI, w1 = bH;
		for (bG.ss.w8(bG.ss.w6(qH)), bS.wL.wM[bS.eT].i = bS.ey = i = w1.ph(12), bS.wL.wM[bS.eT].j = bS.ez = j = w1.ph(12), wF = [-i, -1, i, 1], bS.wV = document.createElement("canvas"), bS.wV.width = bS.ey, bS.wV.height = bS.ez, bS.wR = bS.wV
			.getContext("2d", {
				alpha: !1
			}), bS.wS = bS.wW = null, bS.wS = bS.wR.getImageData(0, 0, bS.ey, bS.ez), bS.wW = bS.wS.data, bA.qi.wX(bS.wW), en = w1.ph(12), wH = w1.ph(5), wI = wO(i * j - 1), aB = 0; aB < en; aB++) ! function(l3, gL, wJ, wK) {
			var aB, eq, w1 = bH,
				wY = bS.wW,
				wZ = gL,
				wa = gL,
				wb = 0,
				wc = 1 + wJ,
				wd = 2 - wJ;
			for (wY[gL << 2] = wc, aB = 0; aB < l3; aB++) eq = w1.ph(2), gL = we(gL, eq), wY[gL << 2] === wc ? wb % 2 == 1 && wf(wa, wb + 2 * wK + 3, wd, wK, wY) : wY[gL << 2] = wc, wf(gL, eq, wd, wK, wY), wf(wa, eq, wd, wK, wY), wa = gL,
				wb = eq;
			we(gL, 0) === wZ ? (wf(gL, 0, wd, wK, wY), wf(wZ, 0, wd, wK, wY)) : we(gL, 1) === wZ && (wf(gL, 0, wd, wK, wY), wf(wZ, 2, wd, wK, wY));
			0 === l3 && (wf(wZ, 0, wd, wK, wY), wf(wZ, 2, wd, wK, wY))
		}(w1.ph(wH), w1.ph(wI), 1 === w1.ph(1), 1 === w1.ph(1));
		var eu, ew, hf, wj, wk, wl, wY = bS.wW,
			wm = !0,
			wn = bS.wL.wM[bS.eT].wn,
			wo = bS.wL.wM[bS.eT].wo;
		for (ew = 0; ew < j; ew++)
			for (wj = !0, wk = wm, eu = wl = 0; eu < i; eu++) hf = 4 * ew * i + 4 * eu, wl <= eu && 0 < wY[hf] && (wk = 2 === wY[hf], wj) && (wj = !1, wk !== wm) ? (wm = wk, wl = eu + 1, eu = -1) : (wk ? (wY[hf] = wo[0], wY[1 + hf] = wo[1], wY[
				2 + hf] = wo[2]) : (wY[hf] = wn[0], wY[1 + hf] = wn[1], wY[2 + hf] = wn[2]), wY[3 + hf] = 255);
		bS.wR.putImageData(bS.wS, 0, 0), bS.wT = !0, bS.wU.dd(), bf.dl = !0
	}
}

function vz() {
	this.wG = function(wp) {
		for (var w1 = bH, size = w1.ph(wp), wq = 7 + 9 * w1.ph(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(w1.ph(wq)));
		return g.join("")
	}
}

function c9() {
	var sK, sL, wr, ws, wt, wu, wv, ww, wx, wy;

	function x0() {
		var x3 = aD.x3;
		for (wx = x3; wx < aD.ek; wx++) wz();
		for (wx = aD.hB ? aD.kA : 0; wx < x3; wx++) {
			if (!x4()) {
				for (var f7 = aD.x8 = wx; f7 < x3; f7++) wx = f7, wz();
				return
			}
			x7(wu + sK * wt + bL.du(wt, 2), wv + sL * wt + bL.du(wt, 2))
		}
	}

	function xa(player) {
		for (var ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, ew = ih[player]; ew <= ii[player]; ew++)
			for (var eu = ie[player]; eu <= ig[player]; eu++) {
				var eR = ac.xb(eu, ew);
				ac.gN(eR) && (ac.jM(eR) ? ac.gI(eR, player) : ac.xc(eR, player))
			}
	}

	function xZ(g, t9, tA) {
		var dt = g[t9];
		g[t9] = g[tA], g[tA] = dt
	}

	function x4() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sK = bL.du(wr * ay.random(), ay.value(100)), sL = bL.du(ws * ay.random(), ay.value(100)), xh()) return 1;
			return
		}() || function() {
			var i7, iA, f6, x6, f7, x5;
			for (i7 = bL.du(wr * ay.random(), ay.value(100)), iA = bL.du(ws * ay.random(), ay.value(100)), f6 = 40; 1 <= f6; f6--)
				for (x6 = ws - f6; 0 <= x6; x6 -= 40)
					for (sL = (x6 + iA) % ws, f7 = 40; 1 <= f7; f7--)
						for (x5 = wr - f7; 0 <= x5; x5 -= 40)
							if (sK = (x5 + i7) % wr, xh()) return 1;
			return
		}()
	}

	function xh() {
		for (var gL, xj, gap = bL.du(wt - ww, 2), xk = wv + sL * wt + gap, xl = wu + sK * wt + gap, xi = xk + ww - 1; xk <= xi; xi--)
			for (xj = xl + ww - 1; xl <= xj; xj--)
				if (gL = ac.xb(xj, xi), !ac.ei(gL) || ac.jM(gL)) return;
		return 1
	}

	function x7(x5, x6) {
		wz(), xm(x5 - 2, x6 - 2)
	}

	function wz() {
		ag.mi[wx] = 0, ag.gb[wx] = ag.xX[wx] = 0, ag.gF[wx] = [], ag.gT[wx] = [], ag.gU[wx] = [], ag.fD[wx] = [], ag.ie[wx] = ag.ih[wx] = ag.ig[wx] = ag.ii[wx] = 0
	}

	function xm(x5, x6) {
		var gL, aB, xn, xo;
		for (ag.mi[wx] = 1, ag.ie[wx] = x5 + 10, ag.ih[wx] = x6 + 10, ag.ii[wx] = ag.ig[wx] = 0, xn = x5; xn < x5 + 4; xn++)
			for (xo = x6; xo < x6 + 4; xo++)(x5 < xn && xn < x5 + 3 || x6 < xo && xo < x6 + 3) && (gL = ac.xb(xn, xo), ac.ei(gL)) && (ag.ie[wx] = Math.min(xn, ag.ie[wx]), ag.ig[wx] = Math.max(xn, ag.ig[wx]), ag.ih[wx] = Math.min(xo, ag.ih[wx]), ag
				.ii[wx] = Math.max(xo, ag.ii[wx]), wy[ag.gb[wx]] = gL, ag.gb[wx]++, ac.xc(gL, wx));
		for (ag.xX[wx] = ag.gb[wx], aB = ag.gb[wx] - 1; 0 <= aB; aB--) ac.xp(wy[aB], wx) ? (ac.gI(wy[aB], wx), ag.gT[wx].push(wy[aB])) : ac.xq(wy[aB]) ? (ac.gI(wy[aB], wx), ag.gU[wx].push(wy[aB])) : ac.xr(wy[aB]) && (ac.gI(wy[aB], wx), ag.fD[wx]
			.push(wy[aB]))
	}
	this.dd = function() {
		if (wy = new Array(12), ww = 6, wt = 10, wr = bL.du(bS.ey, wt), ws = bL.du(bS.ez, wt), wu = bL.du(bS.ey - wt * wr, 2), wv = bL.du(bS.ez - wt * ws, 2), aD.hB)
			for (var aB = 0; aB < aD.kA; aB++) wx = aB, wz(), ag.mi[wx] = 1;
		(0 === aD.data.spawningType ? x0 : 1 === aD.data.spawningType ? (x0(), function() {
			var x9 = aD.xA;
			aD.xB || x9++;
			if (!(x9 < 3)) {
				for (var data = aD.data, jR = (aD.hB ? aD.kA : 0) + data.teamPlayerCount[0], nQ = aD.x8, xC = new Uint32Array(x9), xD = new Uint32Array(x9), xE = new Uint16Array(x9), xF = new Uint16Array(x9), el = bg.el, ie = ag.ie, ih =
						ag.ih, ig = ag.ig, ii = ag.ii, fS = bO.fS, fT = bO.fT, aB = jR; aB < nQ; aB++) fS[aB] = ie[aB] + ig[aB] >> 1, fT[aB] = ih[aB] + ii[aB] >> 1;
				for (aB = jR; aB < nQ; aB++) {
					var id = el[aB];
					xC[id] += fS[aB], xD[id] += fT[aB]
				}
				var kX = bg.kX;
				for (aB = 1; aB < x9; aB++) {
					var gG = Math.max(data.teamPlayerCount[kX[aB]], 1);
					xE[aB] = bL.du(xC[aB], gG), xF[aB] = bL.du(xD[aB], gG)
				}
				var xG = bg.xG,
					xH = bg.xH,
					xI = bg.xI,
					fR = bO.fR;
				for (aB = 0; aB < 512; aB++) fR[aB] = aB;
				for (var e7 = 0; e7 < 2 + (4 <= x9); e7++)
					for (aB = jR; aB < nQ; aB++) {
						for (var hF = aB, xJ = fR[hF], xK = 1, f3 = bL.xL(fS[xJ] - xE[1], fT[xJ] - xF[1]), f6 = 2; f6 < x9; f6++) {
							var xM = bL.xL(fS[xJ] - xE[f6], fT[xJ] - xF[f6]);
							xM < f3 && (f3 = xM, xK = f6)
						}
						var xN = el[hF];
						if (xK !== xN) {
							if (2 === e7 && 4 <= x9) {
								var xO = Math.max((xK + 1) % x9, 1),
									xP = bL.xL(fS[xJ] - xE[xO], fT[xJ] - xF[xO]);
								for (f6 = 1; f6 < x9; f6++) xM = bL.xL(fS[xJ] - xE[f6], fT[xJ] - xF[f6]), f3 < xM && xM < xP && (xP = xM, xO = f6);
								xO !== xN && bL.xL(xE[xN] - xE[xO], xF[xN] - xF[xO]) < bL.xL(xE[xN] - xE[xK], xF[xN] - xF[xK]) && (xK = xO)
							}
							var xQ = kX[xK],
								xR = xH[xQ] + (aD.hB ? 0 : xI[xQ]),
								kl = xG[xR],
								xS = fR[kl],
								xT = xH[xQ + 1];
							f3 = bL.xL(fS[xS] - xE[xN], fT[xS] - xF[xN]);
							for (var f8 = xR + 1; f8 < xT; f8++) {
								var xU = xG[f8],
									xV = fR[xU];
								(xM = bL.xL(fS[xV] - xE[xN], fT[xV] - xF[xN])) < f3 && (f3 = xM, kl = xU)
							}
							kl < jR || nQ <= kl || (xS = fR[kl], xC[xN] += fS[xS] - fS[xJ], xD[xN] += fT[xS] - fT[xJ], xC[xK] += fS[xJ] - fS[xS], xD[xK] += fT[xJ] - fT[xS], gG = data.teamPlayerCount[kX[xN]], xE[xN] = bL.du(xC[xN], gG),
								xF[xN] = bL.du(xD[xN], gG), gG = data.teamPlayerCount[xQ], xE[xK] = bL.du(xC[xK], gG), xF[xK] = bL.du(xD[xK], gG), fR[hF] = xS, fR[kl] = xJ)
						}
					}! function() {
						for (var fR = bO.fR, ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, gb = ag.gb, xX = ag.xX, gT = ag.gT, gU = ag.gU, fD = ag.fD, aB = 0; aB < 512; aB++) {
							var xY = fR[aB];
							if (xY !== aB) {
								xZ(ie, aB, xY), xZ(ih, aB, xY), xZ(ig, aB, xY), xZ(ii, aB, xY), xZ(gb, aB, xY), xZ(xX, aB, xY), xZ(gT, aB, xY), xZ(gU, aB, xY), xZ(fD, aB, xY), xa(aB), xa(xY), fR[aB] = aB;
								for (var j = xY, gM = fR[j]; gM !== aB;) gM = fR[j = gM];
								fR[j] = xY
							}
						}
					}()
			}
		}) : function() {
			var x3 = aD.x3;
			for (wx = x3; wx < aD.ek; wx++) wz();
			for (wx = aD.hB ? aD.kA : 0; wx < x3; wx++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							x5 = spawningData[2 * wx] + 1,
							spawningData = spawningData[2 * wx + 1] + 1;
						if (3 < x5 && x5 < bS.ey - 5 && 3 < spawningData && spawningData < bS.ez - 5 && ac.ei(ac.xb(x5, spawningData)) && function(x5, x6) {
								var gL, xj, xi;
								for (xi = x6; x6 - 6 < xi; xi--)
									for (xj = x5; x5 - 6 < xj; xj--)
										if (gL = ac.xb(xj, xi), ac.jM(gL)) return;
								return 1
							}(x5 + 3, spawningData + 3)) return x7(x5 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!x4()) {
						for (var f7 = aD.x8 = wx; f7 < x3; f7++) wx = f7, wz();
						return
					}
					var x5 = wu + sK * wt + bL.du(wt, 2),
						x6 = wv + sL * wt + bL.du(wt, 2);
					x7(x5, x6)
				}
		})(), bd.me[7] = ag.gb[aD.eX]
	}, this.xs = function(jJ, xt, xu) {
		var aB, x5, x6, gL, sK, sL;
		for (wx = jJ, aB = 0; aB < 20; aB++)
			for (x5 = xt + aB; xt - aB <= x5; x5--)
				for (x6 = xu + aB; xu - aB <= x6; x6--)
					if ((x5 === xt + aB || x5 === xt - aB || x6 === xu + aB || x6 === xu - aB) && 3 < x5 && x5 < bS.ey - 5 && 3 < x6 && x6 < bS.ez - 5 && ac.ei(ac.xb(x5, x6)) && function(x5, x6) {
							var gL, xj, xi;
							for (xi = x6; x6 - 6 < xi; xi--)
								for (xj = x5; x5 - 6 < xj; xj--)
									if (gL = ac.xb(xj, xi), ac.jM(gL) && !ac.y0(wx, gL)) return;
							return 1
						}(x5 + 3, x6 + 3)) {
						if (0 < ag.gb[wx]) {
							for (sL = sK = gL = void 0, sK = ag.ig[wx]; sK >= ag.ie[wx]; sK--)
								for (sL = ag.ii[wx]; sL >= ag.ih[wx]; sL--) gL = 4 * (sL * bS.ey + sK), ac.xx(wx, gL) && (ac.xy(gL), ag.gb[wx]--);
							wz()
						}
						return xm(x5 - 1, x6 - 1), !0
					} return !1
	}, this.xz = function(jJ) {
		wx = jJ, x4() ? x7(wu + sK * wt + bL.du(wt, 2), wv + sL * wt + bL.du(wt, 2)) : wz()
	}
}

function y1() {
	at.y2(), ui.setTransform(hy, 0, 0, hy, 0, 0), ui.imageSmoothingEnabled = hy < 3, ui.drawImage(bS.wV, aS.y3(), aS.y4()), bP.y5.uh(), ui.drawImage(y6, aS.y3(), aS.y4()), at.uh(), bN.uh(), af.uh(), (aD.nB ? (bh.uh(), bC) : (aN.uh(), aV.uh(), aR
	.uh(), bC.uh(), aw.uh(), aW.uh(), aS.uh(), aQ.uh(), bh.uh(), aU.uh(), aP.uh(), aM.uh(), aL.uh(), aX.uh(), be.uh(), av)).uh(), t.uh()
}

function y7(y8, i, j) {
	y8.clearRect(0, 0, i, j), y8.fillStyle = bB.nf, y8.fillRect(0, 0, i, j)
}

function y9(y8, i, j, yA) {
	y8.fillStyle = bB.ni, y8.fillRect(0, 0, i, yA), y8.fillRect(0, 0, yA, j), y8.fillRect(i - yA, 0, yA, j), y8.fillRect(0, j - yA, i, yA)
}

function yB(y8, eu, ew, hj, yA, gL, yC) {
	y8.fillStyle = bB.ni;
	var gL = Math.floor(hj * gL),
		sx = (gL += (gL - yA) % 2, Math.floor((gL - yA) / 2)),
		hj = Math.floor((hj - gL) / 2);
	y8.fillRect(eu + hj, ew + hj + sx, gL, yA), yC && y8.fillRect(eu + hj + sx, ew + hj, yA, gL)
}

function yE() {
	this.dd = function() {
		8 === aD.kS && aN.yF()
	}, this.yG = function(yH) {
		var elo = aD.data.elo,
			jQ = (elo[yH] - elo[1 - yH]) / 10,
			jQ = 8 / (1 + Math.pow(2, jQ / 32)),
			jQ = Math.floor(10 * jQ + .5),
			yJ = elo[yH] + jQ,
			yK = this.yL(yJ),
			elo = this.yL(elo[1 - yH] - jQ),
			jQ = (0 === yH ? aN.yN(yK, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yN(elo, yK, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.yP) * (2e3 + yJ) / 1e3).toFixed(2));
		yH === aD.eX ? aN.yQ(640, L(24, [jQ]), 40, 0, bB.ni, bB.nf, -1, !1) : aN.yQ(640, L(25, [ag.yR[yH], jQ]), 40, 0, bB.ni, bB.nf, -1, !1)
	}, this.yL = function(elo) {
		return 16e3 === (elo = bL.hv(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.rq = new yS, this.wY = new yT
}

function yT() {
	this.hZ = !1;
	this.yX = [], this.yY = 100;
	var n8, n9, gap, hj, yU, yW, yZ = 0,
		ya = new Array(9),
		yb = [],
		yc = [],
		yd = 0,
		ye = 0,
		yf = 0,
		yg = 0;

	function ys() {
		ya.sort(function(f6, f7) {
			return f7.kF - f6.kF
		});
		for (var qH = "" + ya[0].pI, aB = 1; aB < 9; aB++) qH += "," + ya[aB].pI;
		for (aB = 0; aB < 9; aB++) qH += "," + ya[aB].kF;
		bj.eK.vB(120, qH)
	}
	this.dd = function() {
		for (var yh = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yh.length; aB++) {
			var color = 6 === yh[aB] ? bB.o8 : bB.ng;
			this.yX.push(bA.canvas.yi(ab.get(3), yh[aB], color))
		}
		for (aB = 0; aB < aj.rq.yj; aB++) yc.push(aj.rq.yk - aj.rq.yj + aB);
		for (aB = 0; aB < aj.rq.yl; aB++) yc.push(aj.rq.ym + aB);
		var yn = aj.rq.yo(bK.yn);
		for (aB = 0; aB < yn.length; aB++) yc.push(yn[aB]);
		! function() {
			var aB, g = bj.eK.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) ya[aB] = {
					pI: 1015 + aB,
					kF: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fF = parseInt(g[aB]),
						f8 = (fF = 0 <= fF && fF < aj.rq.yk ? fF : 0, parseInt(g[aB + 9]));
					f8 = 0 <= f8 && f8 < 1e3 ? f8 : 0, ya[aB] = {
						pI: fF,
						kF: f8
					}
				}
		}()
	}, this.show = function(lN, lO, yt) {
		var aB;
		if (yd = lN, ye = lO, yZ = yt || 0, this.hZ = !0, yb = [], 0 === yZ)
			for (aB = 0; aB < 9; aB++) yb.push(ya[aB].pI);
		else {
			var f7 = 49 * yZ,
				yt = f7 - 49;
			for (yt >= yc.length && (yZ = 1, yt = 0, f7 = 49), aB = yt = (f7 = Math.min(f7, yc.length)) - 49; aB < f7; aB++) yb.push(yc[aB])
		}
		yb.push(1024);
		yt = yb.length, hj = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), gap = Math.floor(hj / 3), (yf = 10 * (yU = hj + gap)) > h.i && (yf = h.i, gap = (yU = yf / 10) - (hj = 3 * yU / 4)), yW = bL.du(yt, 10) + !!(yt % 10), (yg = yW * yU) > h
			.j && (yg = h.j, gap = (yU = yg / yW) - (hj = 3 * yU / 4)), yt = .5 * gap;
		n8 = Math.min(Math.max(lN - .5 * yf + yt, yt), h.i - yf + yt), n9 = Math.min(Math.max(lO - .5 * yg + yt, yt), h.j - yg + yt)
	}, this.h0 = function(lN, lO, player) {
		if (!this.hZ) return !1;
		if (this.yv(lN, lO)) {
			lN = bL.hv(bL.du(lN - n8 + .5 * gap, yU), 0, 9);
			if ((lN += 10 * bL.hv(bL.du(lO - n9 + .5 * gap, yU), 0, 9)) >= yb.length) return aL.rr(), !0;
			lO = yb[lN];
			if (1024 === lO) return this.show(yd, ye, yZ + 1), !0;
			! function(pI) {
				for (var aB = 0; aB < 9; aB++) ya[aB].kF = Math.floor(.99 * ya[aB].kF);
				for (aB = 0; aB < 9; aB++)
					if (pI === ya[aB].pI) return ya[aB].kF = Math.min(ya[aB].kF + 30, 999), ys();
				ya.splice(5, 0, {
					pI: pI,
					kF: Math.max(ya[4].kF, 30)
				}), ya.pop(), ys()
			}(lO), player === aD.eX ? b8.hD.pH(lO) : b8.g9.pW(lO, player)
		}
		return aL.rr(), !0
	}, this.yv = function(lN, lO) {
		return !(lN < n8 - .5 * gap || lO < n9 - .5 * gap || n8 + yf - .5 * gap <= lN || n9 + yg - .5 * gap <= lO)
	}, this.uh = function() {
		ui.fillStyle = bB.nf, ui.fillRect(n8 - .5 * gap, n9 - .5 * gap, yf, yg);
		for (var hf = .5 * bc.yw, en = (ui.lineWidth = bc.yw, ui.strokeStyle = ui.fillStyle = bB.ni, ui.strokeRect(n8 - .5 * gap + hf, n9 - .5 * gap + hf, yf - 2 * hf, yg - 2 * hf), ui.imageSmoothingEnabled = !0, yb.length), aB = 0; aB <
			en; aB++) this.yx(yb[aB], ui, n8 + aB % 10 * yU, n9 + bL.du(aB, 10) * yU, hj);
		ui.imageSmoothingEnabled = !1
	}, this.yx = function(pI, hp, eu, ew, hj) {
		var eR;
		pI >= 1024 - aj.rq.yj ? (eR = hj / this.yY, hp.setTransform(eR, 0, 0, eR, eu, ew), hp.drawImage(this.yX[pI - 1024 + aj.rq.yj], 0, 0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1), hp.font = bA.qa
			.sP(0, .89 * hj), hp.fillText(aj.rq.yy(pI), eu + .5 * hj, ew + (.35 - bA.qa.yz + .56) * hj))
	}
}

function yS() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yj = 13, this.yl = this.emojis.length, this.ym = 676, this.yk = 1024, this.z0 = this.emojis.indexOf("💀"), this.z1 = this.z0 + 1, this.z2 = this.emojis.indexOf("🥇"), this.z3 = this.emojis.indexOf("😊"), this.yy = function(fF) {
		return fF < this.ym ? String.fromCharCode(55356, 56806 + bL.du(fF, 26), 55356, 56806 + fF % 26) : this.emojis[Math.min(fF - this.ym, this.yl - 1)]
	}, this.yo = function(qH) {
		for (var en = qH.length - 2, g = [], aB = 0; aB < en; aB++) {
			var z4 = qH.charCodeAt(aB) - 56806,
				z5 = qH.charCodeAt(aB + 2) - 56806;
			0 <= z4 && z4 < 26 && 0 <= z5 && z5 < 26 && (g.push(26 * z4 + z5), aB += 3)
		}
		return g
	}, this.z6 = function(fF) {
		return fF < this.ym
	}, this.z7 = function(fF) {
		return fF >= 1024 - this.yj
	}, this.z8 = function(fF) {
		return fF >= this.ym && fF < this.ym + this.z1
	}
}

function c3() {
	this.ss = new z9, this.vw = new zA, this.vy = new zB, this.dd = function() {
		this.ss.dd()
	}
}

function zA() {
	this.wB = function(qH) {
		for (var en = qH.length, i = bD, aB = 0; aB < en; aB++) i.a8(16, qH.charCodeAt(aB))
	}
}

function z9() {
	var zC = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zC[0] = 45, zC[37] = 95, aB = 0; aB < 10; aB++) zC[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zC[aB + 11] = 65 + aB, zC[aB + 38] = 97 + aB
	}, this.su = function(zD) {
		for (var w1 = bH, w9 = new Uint8Array(zD), aB = 0; aB < zD; aB++) w9[aB] = w1.ph(6);
		return w9
	}, this.st = function(w9) {
		for (var en = w9.length, zE = zC, g = [], aB = 0; aB < en; aB++) g.push(String.fromCharCode(zE[w9[aB]]));
		return g.join("")
	}, this.zF = function(value, zG) {
		for (var zE = zC, g = [], aB = 0; aB < zG; aB++) g.push(String.fromCharCode(zE[value >> 6 * (zG - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var zH, zI, zJ;
	zH = [32, 65, 191, 913, 931], zI = [64, 127, 688, 930, 1155], zJ = new Array(zH.length + 1);
	for (var aB = 0; aB < zJ.length; aB++) {
		zJ[aB] = 0;
		for (var f6 = aB - 1; 0 <= f6; f6--) zJ[aB] += zI[f6] - zH[f6]
	}

	function zP(f8) {
		for (var aB = zH.length - 1; 0 <= aB; aB--)
			if (f8 >= zH[aB] && f8 < zI[aB]) return aB;
		return -1
	}
	this.w2 = function(qH) {
		return 0 !== (qH = qH.trim()).indexOf("Bot ") && 0 !== qH.indexOf("[Bot] ") && function(qH, zM, zN) {
			var en = (qH = qH.trim()).length;
			if (en < zM || zN < en) return !1;
			for (var f8, zO = 0, aB = 0; aB < en; aB++)
				if (f8 = qH.charCodeAt(aB), zO += 65 <= f8 && f8 <= 90 || 1040 <= f8 && f8 <= 1071 ? 1 : 0, -1 === zP(f8)) return !1;
			if (3 < zO && zO > Math.floor(en / 2)) return !1;
			return !0
		}(qH, 3, 20)
	}, this.zQ = function(qH) {
		for (var en = (qH = qH.trim()).length, g = [], aB = 0; aB < en; aB++) {
			var f8, gL = zP(f8 = qH.charCodeAt(aB));
			g.push(zJ[gL] + f8 - zH[gL])
		}
		return g
	}, this.wG = function(g) {
		for (var f8, f7, qH = "", en = g.length, aB = 0; aB < en; aB++)
			for (f7 = 1; f7 < zJ.length; f7++)
				if (g[aB] < zJ[f7]) {
					f8 = zH[f7 - 1] + g[aB] - zJ[f7 - 1], qH += String.fromCharCode(f8);
					break
				} return qH
	}, this.zR = function(qH) {
		for (var g = this.zQ(qH), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zS = function(qH) {
		for (var g = new Array(Math.floor(qH.length / 3)), aB = 0; aB < qH.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qH.substring(aB, aB + 3));
		return this.wG(g)
	}, this.zT = function(qH) {
		for (var fF, g = [qH.length], aB = 0; aB < qH.length; aB++) g[aB] = qH.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qH.length; aB++) aB === qH.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fF = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fF + (fF < 26 ? 65 : 71)), aB++);
		return result
	}, this.zU = function(qH) {
		for (var f8, result = "", aB = 0; aB < qH.length; aB++) 48 <= (f8 = qH.charCodeAt(aB)) && f8 < 58 ? result += String.fromCharCode(f8) : 65 <= f8 && f8 < 75 ? result += "0" + (f8 - 65).toString() : 75 <= f8 && f8 < 91 ? result += (f8 - 65)
			.toString() : 97 <= f8 && f8 < 123 && (result += (f8 - 71).toString());
		return result
	}, this.zV = function(qH) {
		for (var en = qH.length, g = [], aB = 0; aB < en; aB++)(f8 = qH.charCodeAt(aB)) < 58 ? g.push(qH[aB]) : (f8 -= f8 < 91 ? 65 : 71, g.push(String(bL.du(f8, 10))), g.push(String(f8 - 10 * bL.du(f8, 10))));
		var en = g.length - 2,
			f8 = 0,
			w9 = [];
		for (aB = 0; aB < en; aB += 3) w9[f8++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return w9
	}, this.zW = function() {
		for (var e7, zX = "", aB = 0; aB < 6; aB++) e7 = 48 + ay.random() % 36, e7 += 58 <= e7 ? 39 : 0, zX += String.fromCharCode(e7);
		return zX
	}
}

function zB() {
	this.zQ = function(qH, wp, zY) {
		for (var zZ = [], en = qH.length, max = 0, aB = 0; aB < en; aB++) {
			var fF = qH.charCodeAt(aB);
			zZ.push(fF), max = Math.max(max, fF)
		}
		var wq = max < 128 ? 7 : 16;
		for (zY.a8(wp, en), zY.a8(1, +(16 == wq)), aB = 0; aB < en; aB++) zY.a8(wq, zZ[aB])
	}
}

function dA() {
	this.za = new zb, this.result = new zc, this.zd = new ze, this.zf = new zg, this.zh = new zi, this.zj = new zk, this.dd = function() {
		this.result.dd()
	}
}

function ze() {
	this.zl = function() {
		for (var en = al.kB, zm = al.kC, zn = [], aB = 0; aB < en; aB++) {
			var gL = zm[aB];
			bA.g9.zo(gL) && zn.push(gL)
		}
		return zn
	}, this.zp = function() {
		if (0 === bg.kX[aD.zq]) return this.zr();
		bh.li(aD.zq);
		for (var zn = [], en = bO.fI[0], fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = fR[aB];
			bA.g9.zo(gL) && zn.push(gL)
		}
		return zn
	}, this.zr = function() {
		var gL = lk[0];
		return bA.g9.zo(gL) ? [gL] : []
	}, this.zs = function(zn) {
		for (var en = zn.length, dt = 0, gb = ag.gb, aB = 0; aB < en; aB++) dt += gb[zn[aB]];
		return dt
	}
}

function zb() {
	function zu() {
		if (2 === aD.zy) return 1;
		aw.zz(), aD.zy = 2, aD.a00 = aD.a01
	}

	function zw() {
		bR.zh.a02(), aX.show(1 === aD.a03, !1, 2 === aD.a03), bR.result.a02(), bR.zj.j3(), bR.zf.j3(), aN.a04(!0), aN.a05(247), aN.a05(956), aN.a05(957), aV.mU(!0), aW.mU(!0), aw.mU(), bC.a06(), aD.gw && bf.a07.a08(), bf.dl = !0, bb.a09(), a0.a1
			.setState(0)
	}
	this.zt = function() {
		zu() || (aD.zv = 2, zw())
	}, this.zx = function() {
		zu() || (aD.zv = 1, zw())
	}
}

function zg() {
	this.j3 = function() {
		var a0H;
		2 === aD.zv ? (aN.a0A(0, 59), aH.nH(2700)) : aD.kS < 7 ? (a0H = bg.kX[aD.zq], a0H = bg.a0J[a0H], aQ.a0K(L(26, [a0H]), 2, 1, 12), aN.yQ(0, L(27, [a0H]), 40, 0, bB.ni, bB.nf, -1, !1), aH.nH(2700)) : 8 === aD.kS ? (aD.a03 ? aN.a0A(aD.a0F,
			2) : aN.a0A(1 - aD.eX, 3), aD.a0G.yG(aD.a0F), aH.n3(aD.a0F, 2700, !1, 0)) : 9 === aD.kS ? (aN.a0L(), aH.nH(2700)) : (aN.a0M(aD.a0F), aH.n3(aD.a0F, 2700, !1, 0))
	}
}

function zk() {
	function a0W() {
		var tD;
		return 8 === aD.kS ? 0 : (tD = Math.floor(ag.a0X[aD.eX] / 50), (tD = Math.min(tD, 400)) / 100)
	}

	function a0O() {
		var tD = a0W();
		0 !== tD && aN.yQ(440, L(28, [tD.toFixed(2)]), 40, 0, bB.o0, bB.nf, -1, !1)
	}
	this.j3 = function() {
		var a0P;
		0 === bR.result.a0N || 0 === bR.result.zn.length || 8 === aD.kS ? bA.g9.gz(aD.eX) && a0O() : (function(a0P) {
			7 !== aD.kS && 10 !== aD.kS || 0 !== aD.a03 && a0P && aN.yQ(600, L(32, [a0P.toFixed(2)]), 40, 0, bB.ni, bB.nf, -1, !1)
		}(a0P = function() {
			aN.yQ(520, L(29), 40, 0, bB.ni, bB.nf, -1, !1);
			for (var zn = bR.result.zn, en = zn.length, gb = ag.gb, g = [], aB = 0; aB < en; aB++) {
				var gL = zn[aB];
				g.push({
					gL: gL,
					dt: gb[gL]
				})
			}
			g.sort((f6, f7) => f7.dt - f6.dt);
			var a0J = ag.yR,
				dt = bR.result.a0Y,
				tD = bR.result.a0N,
				qH = "",
				a0P = 0;
			for (aB = 0; aB < en; aB++) {
				var hX = g[aB].dt * tD / (100 * dt),
					a0a = a0J[g[aB].gL] + ": " + hX.toFixed(2) + "   ";
				g[aB].gL === aD.eX && (a0P = hX), 2 < aB && 4 !== en ? 3 === aB && (qH += "(" + L(30, [en - 3]) + ")") : qH += a0a
			}
			aN.yQ(560, bA.rZ.a0b(qH), 40, 0, bB.o0, bB.nf, -1, !1), a0P ? aN.yQ(580, L(31, [a0P.toFixed(2) + " + " + a0W().toFixed(2)]), 40, 0, bB.o0, bB.nf, -1, !1) : bA.g9.gz(aD.eX) && a0O();
			return a0P
		}()), 2 === aD.zv || 7 <= aD.kS || function(a0P) {
			var zn = bR.result.zn,
				en = zn.length,
				a0c = ag.a0c,
				gb = ag.gb,
				a0d = [];
			loop: for (var aB = 0; aB < en; aB++) {
				var gL = zn[aB],
					a0e = bA.rZ.a0f(a0c[gL]);
				if (null !== a0e) {
					for (var a0g = gb[gL], f7 = a0d.length - 1; 0 <= f7; f7--)
						if (a0e === a0d[f7].name) {
							a0d[f7].dt += a0g, a0d[f7].g.push({
								gL: gL,
								dt: a0g
							});
							continue loop
						} a0d.push({
						name: a0e,
						dt: a0g,
						g: [{
							gL: gL,
							dt: a0g
						}]
					})
				}
			}
			if (0 !== a0d.length) {
				a0d.sort((f6, f7) => f7.dt - f6.dt);
				var g = a0d[0].g,
					a0h = (g.sort((f6, f7) => f7.dt - f6.dt), "[" + a0d[0].name + "]"),
					a0i = 512 * bR.result.a0N / 26214400,
					l3 = (aN.yQ(0, L(33, [a0h, a0i.toFixed(4)]), 40, 0, bB.ni, bB.nf, -1, !1), g.length),
					w7 = a0d[0].dt,
					a0j = 1e4 * a0i;
				for (aB = 0; aB < l3; aB++)
					if (g[aB].gL === aD.eX) {
						aN.yQ(600, L(34, [(a0j * g[aB].dt / (10 * w7)).toFixed(2)]), 40, 0, bB.ni, bB.nf, -1, !1), aN.yQ(640, L(35, [(.2 * a0P).toFixed(2), a0h]), 40, 0, bB.ni, bB.nf, -1, !1);
						break
					} aD.gw || aN.yQ(720, L(36) + bK.a0k, 736, 0, bB.ni, bB.o6, -1, !1)
			}
		}(a0P))
	}, this.a0T = function() {
		var a0U, wZ;
		aD.kU || (a0U = ag, wZ = aD.eX, 0 === a0U.a0V[wZ]) || a0U.jD[wZ] < 1 || 2 * a0U.pz[wZ] > 3 * (a0U.jC[wZ] + a0U.jD[wZ]) || a0O()
	}
}

function zc() {
	this.dd = function() {
		this.a0l = 0, this.zn = [], this.a0Y = 0, this.a0N = 0
	}, this.a02 = function() {
		var sC;
		aD.kU || (sC = this, 2 === aD.zv ? sC.zn = bR.zd.zl() : aD.hh ? sC.zn = bR.zd.zp() : sC.zn = bR.zd.zr(), sC.a0l = bi.a0n.a0o(), sC.a0Y = Math.max(1, bR.zd.zs(sC.zn)), b8.g9.pf(), 8 === aD.kS ? bR.result.a0N = 0 : sC.a0N = 100 * bR.result
			.a0l * (1 + aD.yP))
	}
}

function zi() {
	this.a02 = function() {
		if (2 === aD.zv) aD.a03 = 2;
		else {
			if (8 === aD.kS) bA.g9.jY(0) || 0 === ag.mi[0] ? aD.a0F = 1 : bA.g9.jY(1) || 0 === ag.mi[1] ? aD.a0F = 0 : aD.a0F = +(ag.gb[1] > ag.gb[0]);
			else {
				if (aD.hh) {
					var kh = bh.a0r();
					if (aD.zq = kh, bg.kX[kh]) return void(aD.a03 = +(bg.el[aD.eX] === kh))
				}
				aD.a0F = lk[0]
			}
			aD.a03 = +(aD.a0F === aD.eX)
		}
	}
}

function dF() {
	this.id = 0, this.dv = 0, this.vI = null, this.vJ = null, this.vK = null, this.vQ = null, this.a1 = new a0s, this.dd = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.vJ = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vK = mwIOSdataX, self.vQ = window.webkit.messageHandlers.iosCommandA, dv = self
					.vK.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var vI;
				try {
					if (!(vI = window.localStorage)) return;
					vI.setItem("tls7", "1"), vI.removeItem("tls7")
				} catch (error) {
					return
				}
				self.vI = vI
			}(this)
	}
}

function a0s() {
	this.a0w = function() {
		bj.s2.vd(), bj.s2.ve(), b0.y.close(0, 3255), 0 === a0.id ? a0.vI && a0.vI.clear() : 1 === a0.id ? a0.vJ.saveString(199, "") : 2 === a0.id && a0.vQ.postMessage("clear")
	}, this.a0x = function() {
		2 === a0.id ? a0.vQ.postMessage("showConsentForm") : 1 === a0.id && a0.vJ.setState(7)
	}, this.a0y = function() {
		this.setState(14)
	}, this.hw = function() {
		return 1 === bj.eK.vD(2)
	}, this.a0z = function() {
		bj.eK.vB(102, "")
	}, this.setState = function(a10) {
		1 === a0.id && 5 <= a0.dv && a0.vJ.setState(a10)
	}, this.a2 = function() {
		var a11;
		1 === a0.id && 7 <= a0.dv ? a0.vJ.setState(5) : ((a11 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a11.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dv < 17 || a0.vJ.saveString(23, document.documentElement.outerHTML)
	}, this.eI = function() {
		0 !== a0.id && (1 === a0.id ? a0.vJ.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dv ? a0.vQ.postMessage("prepare ad 1770251391") : a0.vQ.postMessage("loadAds 1770251391")))
	}, this.eN = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dv ? a0.vQ.postMessage("show ad " + dt) : a0.vQ.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dv < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a12 + "' target='_blank'>" +
			bK.a12 + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oN)]))
	}
}

function dU() {
	function a15(e) {
		lS(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a18()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.o5)]))
	}

	function a1G(e) {
		lS(e), t.u(4, 5, new v(L(38), a1C(e), !0))
	}

	function a1C(e) {
		var qH = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qH : 4527 === e ? "Player already in lobby" + qH : 4530 === e ? "Lobby Timeout" + qH : 4528 === e ? "Lobby Kick: Another login detected." + qH : 4540 === e ?
			"You have been kicked." + qH : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qH : "Unknown error" + qH
	}

	function lS(e) {
		a1A(e), t.y.z()
	}

	function a1A(e) {
		var a10 = aa.a19();
		6 === a10 ? b0.y.a1I(e) : bn.a16 ? (t.x(), bn.uB(), b0.y.close(b0.y.a17, 3256)) : 8 === a10 && aD.a1J(!0)
	}
	this.p = [], this.a13 = function(a14, e) {
		if (this.p.push(e), 8 === t.sp && 0 === a14)
			if (4211 === e) a15(e);
			else {
				if (bn.a16 && (4495 === e || 4480 === e) && b0.y.a17 !== a14) return void t.a18();
				if (8 !== aa.a19() && a1A(), 4480 === e) return bj.s2.vf(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a1C(e), !0))
			}
		else {
			var a10 = aa.a19();
			if (6 === a10) {
				if (4211 === e) return void a15(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a1D(a14)
			} else {
				if (!bn.a16) return 8 === a10 ? void(a14 !== b0.y.a1E || aD.kU || 1 !== aD.zy || aD.gw || aN.a1F(L(39, [e]))) : void 0;
				if (a14 !== b0.y.a17) return
			}
			a1G(e)
		}
	}, this.a1H = function(e) {
		this.p.push(e), 8 === aa.a19() ? aD.kU || 1 !== aD.zy || aN.a1F(L(39, [e])) : a1G(e)
	}, this.s = function() {
		this.p.push(3268), lS(3268)
	}
}

function d4() {
	var a1K, a1L, a1M = -15e3,
		a1N = !1;

	function h0(e) {
		a1h() || (a1N = !0, a1i(e, 1), b0.y.a1j(b0.y.a1E), a1k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1W(e) {
		a1M = bf.eM, a1i(e, 1), b0.y.a1j(b0.y.a1E), 0 < e.touches.length && (a1K = Math.floor(h.k * e.touches[0].clientX), a1L = Math.floor(h.k * e.touches[0].clientY), au.a1W(e) || a1k(a1K, a1L))
	}

	function a1k(eu, ew) {
		t.h0(eu, ew), 0 === aD.zy ? aa.h0(eu, ew) : bC.a1l(eu, ew) || be.h0(eu, ew) || aX.h0(eu, ew) || aL.a1m(eu, ew) || aP.h0(eu, ew) || 0 <= aM.h0(eu, ew) || aw.h0(eu, ew) || bJ.a1n(eu, ew) || aL.a1o(eu, ew)
	}

	function a1S(e) {
		a1h() || (a1N = !0, a1i(e, 1), a1p(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1X(e) {
		a1M = bf.eM, a1i(e, 1), 0 < e.touches.length && (a1K = Math.floor(h.k * e.touches[0].clientX), a1L = Math.floor(h.k * e.touches[0].clientY), au.a1X(e) || a1p(a1K, a1L))
	}

	function a1p(eu, ew) {
		t.a1S(eu, ew), 0 === aD.zy ? aa.a1S(eu, ew) : (bT.gu(eu, ew), be.a1S(eu, ew) || (aM.a1S(eu, ew), aL.hZ() ? aL.a1S(eu, ew) : aR.h1 ? aR.a1S(eu) && (bf.dl = !0) : (aV.a1S(eu, ew), aS.nD && aS.a1S(eu, ew) && (bf.dl = !0))))
	}

	function a1U(e) {
		a1h() || (a1i(e, 1), a1q(), 0 === aD.zy ? (aa.click(-1024, -1024), aT.rb()) : (aV.a1r(-1024, -1024), aM.a1S(-1024, -1024), aR.a1s(), aS.nD = !1))
	}

	function a1T(e) {
		a1h() || (a1i(e, 1), a1t(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a1Q && (bJ.a1Q = !1, e.preventDefault()))
	}

	function click(e) {
		a1h() || a1i(e, 1)
	}

	function a1Y(e) {
		a1M = bf.eM, a1i(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.zy ? aS.nD = !1 : au.a1u() || (a1t(a1K, a1L, !1), bJ.a1Q && (bJ.a1Q = !1, e.preventDefault()))
	}

	function a1Z(e) {
		a1M = bf.eM, a1i(e, 1), a1t(a1K, a1L, !1), bJ.a1Q && (bJ.a1Q = !1, e.preventDefault())
	}

	function a1a(e) {}

	function a1b(e) {}

	function a1c(e) {
		a1h() || a1i(e, 0)
	}

	function a1t(eu, ew, a1v) {
		a1q(), 0 === aD.zy ? aa.click(eu, ew) : (aV.a1r(eu, ew), be.a1r(), aR.a1s(), aS.nD = !1, aL.click(eu, ew, a1v) ? bf.dl = !0 : aM.a1T(eu, ew))
	}

	function a1q() {
		t.a1q()
	}

	function a1V(e) {
		var eu, ew, deltaY;
		a1h() || (a1i(e, 1), b0.y.a1j(b0.y.a1E), eu = Math.floor(h.k * e.clientX), ew = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1V(eu, ew, deltaY), 0 === aD.zy ? aa.a1V(eu, ew, deltaY) : aV.a1V(eu, ew,
			deltaY) || (aR.a1w(eu, ew) ? aR.a1V(deltaY) && (bf.dl = !0) : aS.a1V(eu, ew, deltaY)))
	}

	function a1d(e) {
		a1i(e, 0)
	}

	function a1i(e, id) {
		0 === id && t.hZ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a19() && e.preventDefault()
	}

	function a1e(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1h() || 0 < h.sX || (e = e.code) && e.length && (bX.f8(e, 18) ? ar.a1y(3) : bX.f8(e, 22) ? ar.a1y(0) : bX.f8(e, 20) ? ar.a1y(1) : bX.f8(e, 24) ? ar.a1y(2) : bX.f8(e, 10) ? aR.a1z(31 / 32) : bX.f8(e, 8) ? aR.a1z(32 / 31) : bX.f8(e, 6) ? aR
			.a1z(7 / 8) : bX.f8(e, 4) ? aR.a1z(8 / 7) : bX.f8(e, 14) ? 0 !== aD.zy && aS.a1V(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.f8(e, 16) ? 0 !== aD.zy && aS.a1V(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.f8(e, 0) ? aD
			.zy && bT.gv(0) : bX.f8(e, 2) ? aD.zy && bT.gv(1) : bX.f8(e, 30) ? aD.zy && bT.gv(2) : bX.f8(e, 26) ? aD.zy && bT.hT() : bX.f8(e, 28) && aD.zy && bT.hY())
	}

	function a1f(e) {
		if (!a1h() && !(0 < h.sX || bf.eM < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a20(1) || "Space" === code && t.a20(0))) return bn.a16 ? bn.uH.a20(code) ? void 0 : void("Escape" === code && bJ.fG()) : void(8 !== aa.a19() && aa.a20(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fG() : bX.f8(code, 18) ? ar.a21(3) : bX.f8(code, 22) ? ar.a21(0) : bX.f8(code, 20) ? ar.a21(1) : bX.f8(code, 24) ? ar.a21(2) : bX.f8(code, 12) ? bC.a22(!aD.nB) : "Space" === code && aD.zy && (aM.gx && aM.a23(), aD
					.gw) && bC.a24(!1))
		}
	}

	function a1g() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a1h() {
		return a1M + 15e3 > bf.eM
	}

	function resize() {
		h.a26()
	}
	this.a1O = 0, this.a1P = "", this.a1Q = !1, this.dd = function() {
		a1R.addEventListener("mousedown", h0, {
			passive: !1
		}), a1R.addEventListener("mousemove", a1S, {
			passive: !1
		}), a1R.addEventListener("mouseup", a1T, {
			passive: !1
		}), a1R.addEventListener("click", click, {
			passive: !1
		}), a1R.addEventListener("mouseleave", a1U, {
			passive: !1
		}), a1R.addEventListener("wheel", a1V, {
			passive: !1
		}), a1R.addEventListener("touchstart", a1W, {
			passive: !1
		}), a1R.addEventListener("touchmove", a1X, {
			passive: !1
		}), a1R.addEventListener("touchend", a1Y, {
			passive: !1
		}), a1R.addEventListener("touchcancel", a1Z, {
			passive: !1
		}), a1R.addEventListener("dragover", a1a), a1R.addEventListener("drop", a1b), a1R.addEventListener("dblclick", a1c), document.addEventListener("contextmenu", a1d), document.addEventListener("keydown", a1e), document.addEventListener(
			"keyup", a1f), document.addEventListener("visibilitychange", a1g), window.addEventListener("resize", resize)
	}, this.a1n = function(eu, ew) {
		return !!bC.h0(eu, ew) || !!(aV.h0(eu, ew) || aS.h0(eu, ew) || aR.h0(eu, ew) || aN.h0(eu, ew))
	}, this.a25 = a1h, this.r2 = function() {
		return !a1N || 0 < a1M
	}, this.fG = function() {
		if (!t.hZ()) return 8 === aa.a19() ? aD.nB ? void bC.a22(!1) : be.hZ ? void be.a23() : void aM.a23() : void(7 !== aa.a19() && 6 === aa.a19() && aZ.a27());
		t.a20(2)
	}
}

function bz() {
	this.qa = new a28, this.qi = new a29, this.g9 = new a2A, this.rZ = new a2B, this.y8 = new a2C, this.a2D = new a2E, this.canvas = new a2F, this.color = new a2G, this.a2H = new a2I, this.dd = function() {
		this.qa.vc()
	}
}

function a29() {
	this.wX = function(g) {
		g.fill(0)
	}, this.a2J = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++) g[aB] = []
	}, this.a2K = function(z4, a2L) {
		for (var z5 = bO.fN, aB = 0; aB < 3; aB++) z5[aB] = a2L * z4[aB];
		return z5
	}, this.a2M = function(z4, z5, a2N) {
		for (var jQ = 0, aB = 0; aB < 3; aB++) jQ += Math.abs(z4[aB] - z5[aB]);
		return a2N <= jQ
	}, this.a2O = function(z4, a2P) {
		for (var aB = 0; aB < 3; aB++) z4[aB] = bL.hv(z4[aB] + a2P, 0, 255);
		return z4
	}, this.a2Q = function(g, t9, tA) {
		tA = tA || g.length - 1;
		for (var a2R = 0, aB = t9 = t9 || 0; aB <= tA; aB++) a2R += g[aB];
		return a2R
	}, this.a2S = function(g, a2T) {
		for (var aB, a2U, en = g.length, a2V = [], f6 = en - 1; 0 <= f6; f6--) {
			for (aB = a2U = 0; aB < en; aB++) a2T(g[aB]) < a2T(g[a2U]) && (a2U = aB);
			en--, a2V.push(g[a2U]), g[a2U] = g[en], g.pop()
		}
		return a2V
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
	}, this.a2W = function(g, fF) {
		for (var en = g.length, gG = 0, aB = 0; aB < en; aB++) gG += g[aB] > fF;
		return gG
	}, this.a2X = function(a2Y, a2Z, min) {
		for (var en = a2Z[0], aB = en - 1; 0 <= aB; aB--) a2Y[aB] < min && (a2Y[aB] = a2Y[--en]);
		a2Z[0] = en
	}, this.a2a = function(g, en, value) {
		for (var aB = 0; aB < en; aB++) g[aB] -= value
	}, this.a2b = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2c = function(qH, g, a2d) {
		g.fill(0);
		for (var tD = qH.split(","), en = Math.min(tD.length, g.length), aB = 0; aB < en; aB++) g[aB] = Math.min(parseInt(tD[aB]), a2d)
	}, this.a2e = function(qH, g, rW) {
		g.fill("");
		for (var tD = qH.split('"'), en = Math.min(tD.length, 2 * g.length), hf = 0, aB = 1; aB < en; aB += 2) g[hf++] = tD[aB].slice(0, rW)
	}, this.a2f = function(g, gG) {
		if (0 === gG) g.fill(0);
		else {
			var a2R = this.a2Q(g),
				en = g.length;
			if (0 === a2R) g.fill(bL.du(gG, en));
			else
				for (var aB = 0; aB < en; aB++) g[aB] = bL.du(gG * g[aB], a2R);
			if (0 === (a2R = this.a2Q(g))) g[1] = gG;
			else
				for (var hf = 0; a2R++ < gG;) g[hf = (hf + 1) % en] && g[hf]++
		}
	}, this.a2g = function(g) {
		if (!g) return 0;
		var en = g.length;
		if (0 === en) return 0;
		for (var fF = g[en - 1], aB = en - 2; 0 <= aB; aB--)
			if (g[aB] !== fF) return aB + 2;
		return 1
	}, this.a2h = function(g) {
		for (var a2R = 0, aB = 0; aB < g.length; aB++) a2R += g[aB].length;
		return a2R
	}, this.a2i = function(a2j) {
		for (var g = [], aB = 0; aB < a2j.length; aB++) g = g.concat(a2j[aB]);
		return g
	}, this.has = function(g, fF) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if (g[aB] === fF) return !0;
		return !1
	}
}

function a2F() {
	this.yi = function(a2k, e8, a2l) {
		var hj = a2k.height,
			a2m = bA.qa.wN(hj, hj),
			hp = bA.qa.getContext(a2m);
		return function(i, hp, a2l) {
			hp.fillStyle = a2l, hp.beginPath(), hp.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hp.fill()
		}(hj, hp, a2l), hp.drawImage(a2k, -e8 * hj, 0), a2m
	}, this.a2o = function(a2p) {
		var hp, hm, hj = a2p.height;
		return a2p.width === hj && (hm = (hp = bA.qa.getContext(a2p, !0)).getImageData(0, 0, hj, hj), bA.a2D.a2q(hm.data, hj, hj, .9), hp.putImageData(hm, 0, 0)), a2p
	}
}

function a2G() {
	this.a2r = function(fF) {
		return [fF >> 12 & 63, fF >> 6 & 63, 63 & fF]
	}, this.a2s = function(fF) {
		for (var g = this.a2r(fF), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a2t = function(fF) {
		fF = this.a2s(fF);
		return bA.color.na(fF[0], fF[1], fF[2])
	}, this.a2u = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.na = function(e7, tD, f7) {
		return "rgb(" + e7 + "," + tD + "," + f7 + ")"
	}, this.nc = function(e7, tD, f7, f6) {
		return "rgba(" + e7 + "," + tD + "," + f7 + "," + f6.toFixed(3) + ")"
	}, this.r4 = function(f8) {
		for (var g = f8.split("(")[1].split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = parseInt(g[aB]);
		return 4 === g.length ? fM[3] = 255 * parseFloat(g[3].slice(0, -1)) : fM[3] = 255, fM
	}, this.r5 = function(a2v, eq) {
		for (var g = a2v.slice(a2v.indexOf("(") + 1, a2v.indexOf(")")).split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = bL.hv(parseInt(g[aB].trim(), 10) + eq, 0, 255);
		return 3 === g.length ? this.na(fM[0], fM[1], fM[2]) : (a2v = parseFloat(g[3].trim()), this.nc(fM[0], fM[1], fM[2], a2v = 0 === a2v ? .3 : a2v))
	}, this.a2w = function(g) {
		for (var qH = "#", aB = 0; aB < 3; aB++) {
			var e7 = g[aB].toString(16);
			qH += 1 === e7.length ? "0" + e7 : e7
		}
		return qH
	}, this.a2x = function(qH) {
		var e7, tD;
		return qH.length < 7 ? bB.nZ : (e7 = parseInt(qH.slice(1, 3), 16), tD = parseInt(qH.slice(3, 5), 16), qH = parseInt(qH.slice(5, 7), 16), this.na(e7, tD, qH))
	}
}

function a2C() {
	this.a2y = function(qH, font, maxWidth) {
		if (font && (ui.font = font), ui.measureText(qH).width <= maxWidth) return qH;
		for (var aB = qH.length - 1; 1 <= aB; aB--)
			if (qH = qH.substring(0, aB), ui.measureText(qH + "...").width <= maxWidth) return qH + "...";
		return "..."
	}
}

function a2I() {
	var a30 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a31 = function(eM) {
		var a33, qH = new Date(eM.getTime() - 6e4 * eM.getTimezoneOffset()).toUTCString();
		return qH.length < 12 || (qH = qH.substring(5, qH.length), 0 === (eM = eM.getTimezoneOffset())) ? qH : (a33 = (eM < 0 ? "+" : "-") + bL.du(Math.abs(eM), 60), 0 == (eM = Math.abs(eM) % 60) ? qH + a33 : qH + a33 + ":" + (eM < 10 ? "0" :
			"") + eM)
	}, this.a34 = function(eM) {
		var qH = eM.toUTCString();
		return qH.length < 12 ? qH : function(eM) {
			return a30[eM.getUTCDay()]
		}(eM) + ", " + qH.substring(5, qH.length - 4)
	}
}

function a28() {
	var a36 = null;
	this.yz = 0, this.vc = function() {
		var fF = bj.eK.data[5].value;
		a36 = "px " + fF, "Trebuchet MS" !== fF && (a36 += ", Trebuchet MS"), this.yz = hi(32, 32, ["a", "b", "m"], 200, a36)
	}, this.wN = function(i, j) {
		var f8 = document.createElement("canvas");
		return f8.width = i, f8.height = j, f8
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(y8, i, j) {
		return y8.getImageData(0, 0, i, j)
	}, this.sP = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a36 : 1 === type ? "bold " + size + a36 : 2 === type ? "lighter " + size + a36 : 3 === type ? "italic " + size + a36 : 4 === type ? "oblique " + size + a36 : 5 === type ? "small-caps " +
			size + a36 : "small-caps bold " + size + a36
	}, this.textAlign = function(hp, id) {
		hp.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hp, id) {
		hp.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qk = function(e, code, color) {
		color = this.qj(bc.sR) + " solid " + (color || bB.ni);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tF = function(e, eu, ew, i, j) {
		e = e.style;
		e.left = this.tG(eu), e.top = this.tG(ew), e.width = this.tG(i), e.height = this.tG(j)
	}, this.qb = function(fF) {
		return 1 + fF * a0.a1.hw()
	}, this.rt = function(nK, gM) {
		return nK * this.qb(void 0 === gM ? .5 : gM) * h.hx / h.k
	}, this.tE = function(nK, gM) {
		return nK * this.qb(void 0 === gM ? .5 : gM) * h.hx
	}, this.sv = function(nK, gM, a37) {
		return this.qb(gM) * Math.min(nK * h.hx, a37 * h.i) / h.k
	}, this.qj = function(fF) {
		return fF.toFixed(1) + "px"
	}, this.tG = function(fF) {
		return this.a39(fF).toFixed(1) + "px"
	}, this.a39 = function(fF) {
		return fF / h.k
	}, this.a3A = function(sf, a3B) {
		for (var qH = "<ul>", en = sf.length, aB = 0; aB < en; aB++) qH += "<li>" + sf[aB] + ": <a href='" + a3B[aB] + "' target='_blank'>" + a3B[aB] + "</a></li>";
		return qH += "</ul>"
	}, this.a3C = function(a3D) {
		return "<a href='" + a3D + "' target='_blank'>" + a3D + "</a>"
	}, this.a3E = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3F = function(e) {
		var dt = e.textContent;
		bA.rZ.a3G(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qH) {
		return ui.measureText(qH).width
	}, this.t5 = function(a3H) {
		a3H.style.overflowX = "auto", a3H.style.overflowY = "hidden", a3H.style.whiteSpace = "nowrap", a3H.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tI = this.scrollLeft, e.preventDefault())
		}), a3H.addEventListener("scroll", function() {
			this.tI = this.scrollLeft
		})
	}
}

function a2A() {
	this.gy = function(a10) {
		return 0 === a10 ? 1 === aD.zy && aD.hB : 1 === a10 ? 1 === aD.zy && !aD.hB : 2 === aD.zy
	}, this.gz = function(player) {
		return 0 !== ag.mi[player] && 2 !== ag.a3I[player]
	}, this.a3J = function(player) {
		return player === aD.eX && 2 !== ag.a3I[player]
	}, this.km = function(player, jJ) {
		return player !== jJ && (0 === bg.el[player] || bg.el[player] !== bg.el[jJ])
	}, this.lu = function() {
		return al.kB < 2 ? 0 : aD.hh ? 1 < bh.a3K() : ag.gb[lk[1]]
	}, this.a3L = function() {
		var kB = al.kB;
		if (0 !== kB) {
			if (!aD.hh) return !this.jY(lk[0]);
			for (var el = bg.el, kh = bh.ki(), kC = al.kC, aB = kB - 1; 0 <= aB; aB--) {
				var gL = kC[aB];
				if (el[gL] === kh && !this.jY(gL)) return 1
			}
		}
		return 0
	}, this.a3M = function(player) {
		return player === aD.eX
	}, this.jY = function(player) {
		return player >= aD.kA || 2 === ag.a3I[player]
	}, this.l6 = function(player) {
		return 0 !== ag.mi[player]
	}, this.zo = function(player) {
		return player < aD.kA
	}, this.px = function(a3N, a3O) {
		return a3N !== a3O
	}, this.gC = function(player, fF) {
		var min;
		return fF = this.a3P(player, fF), ag.gp[player] += fF, ag.a3Q[player] && (min = Math.min(ag.a3Q[player], ag.gp[player]), ag.a3Q[player] -= min, ag.gp[player] -= min), fF
	}, this.a3P = function(player, fF) {
		var a3R = ag.gp[player];
		return fF = Math.min(fF, ag.gb[player] * aD.a3S - a3R), fF = Math.min(fF, aD.a3T - a3R), Math.max(fF, 0)
	}, this.mH = function(player, iN, a3U, a3V) {
		var a3R = ag.gp[player],
			iN = bL.du(a3R * (iN + 1), 1024),
			a3U = bL.du(a3U * a3R, 1024),
			iN = Math.min(iN, a3R - a3U);
		return 10 === aD.kS && (iN = b4.a3X(player, iN)), bO.fK[0] = iN, bO.fK[1] = a3U, a3V <= iN
	}, this.pQ = function(player, p8, p7) {
		var player = ag.gp[player],
			a3W = bL.du(64 * player, 1024);
		return p8 = Math.min(p8, player - a3W), p8 = this.a3P(p7, p8), bO.fK[0] = p8, bO.fK[1] = a3W, 1 <= p8
	}, this.a3Y = function(player, p8, p7) {
		var player = ag.gp[player],
			a3W = bL.du(64 * player, 1024);
		return p8 = Math.min(p8, player - a3W), this.a3P(p7, p8)
	}, this.pS = function(p8, p7) {
		return p8 = this.a3P(p7, p8), bO.fK[0] = p8, bO.fK[1] = 0, 1 <= p8
	}, this.iM = function(player, a3Z) {
		return bL.du(ag.gp[player] * (a3Z + 1), 1024)
	}, this.a3a = function(player, a3U) {
		a3U = bL.du(a3U * ag.gp[player], 1024);
		bO.fK[1] = a3U, ag.gp[player] -= a3U
	}, this.gA = function(player, a3b) {
		var fY, fa, f7 = ag.gp[player];
		return a3b <= f7 ? ag.gp[player] -= a3b : (ag.gp[player] = 0, fa = ag.a3Q[player] + (fY = 5 * ((f7 = a3b - f7) >> 2)), bd.gD(player, fY - f7, 12), fa <= aD.a3c ? ag.a3Q[player] = fa : (ag.a3Q[player] = aD.a3c, bd.gD(player, fa - aD.a3c,
			18))), a3b
	}, this.lK = function(player, iN) {
		var gp = ag.gp,
			a3R = gp[player],
			iN = bL.du(a3R * (iN + 1), 1024),
			a3W = Math.max(bL.du(a3R, 10), 1e3);
		return (iN = Math.min(iN, a3R - a3W)) < 0 ? (gp[player] = 0, a3W = Math.min(1e3, a3R + aD.a3c - ag.a3Q[player]), bO.fK[1] = a3W, ag.a3Q[player] += a3W - a3R, 0) : (bO.fK[1] = a3W, 10 === aD.kS && (iN = b4.a3X(player, iN)), gp[player] -=
			a3W + iN, iN)
	}, this.mJ = function(player) {
		ag.gp[player] -= bO.fK[0] + bO.fK[1]
	}, this.py = function(player, jJ) {
		return (jJ = Math.min(jJ, aD.ek)) < aD.ek && 0 === ag.mi[jJ] && (jJ = aD.ek), (bO.ej[0] = jJ) === aD.ek || bs.eg(player, jJ)
	}, this.q1 = function(player, p7) {
		return 0 !== ag.mi[p7] && !bs.eg(player, p7)
	}, this.a3d = function(player, a3e) {
		for (var gL, en = al.kB, a3f = 0, a3g = lk, aB = 0; aB < en; aB++)
			if (gL = a3g[aB], !this.jY(gL)) {
				if (player === gL) return !0;
				if (++a3f > a3e) return !1
			} return !1
	}, this.lf = function(gL) {
		var a3h = aD.hh ? bh.kg() : ag.gb[lk[0]];
		return a3h >= bL.du(gL * aD.ju, 100)
	}, this.a3i = function(fF, min, max) {
		return Math.floor(bL.hv(isNaN(fF) ? 0 : Number(fF), min, max))
	}
}

function a2E() {
	this.a3j = function(canvas, a3k, a3l) {
		var i = canvas.width,
			j = canvas.height,
			f8 = bA.qa.wN(i, j),
			hp = bA.qa.getContext(f8, !0),
			canvas = (hp.drawImage(canvas, 0, 0), hp.getImageData(0, 0, i, j));
		return a3k(canvas.data, i, j, a3l), hp.putImageData(canvas, 0, 0), f8
	}, this.a3m = function(wY, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wY[3 + aB] = wY[aB], wY[aB] = wY[1 + aB] = wY[2 + aB] = 255
			}
	}, this.a3n = function(wY, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wY[1 + aB] > wY[2 + aB] + 10 && (wY[3 + aB] = wY[aB], wY[1 + aB] = wY[2 + aB])
			}
	}, this.a3o = function(wY, i, j, a3l) {
		for (var gap = Math.floor(Math.min(i, j) * a3l), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wY[3 + (aB = 4 * (eu + ew * i))] = 255 - 255 * (wY[1 + aB] - wY[aB]) / (255 - wY[aB]))
	}, this.a3p = function(wY, i, j, a3l) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wY[aB] = a3l[0], wY[1 + aB] = a3l[1], wY[2 + aB] = a3l[2]
			}
	}, this.a3q = function(wY, i, j, a3l) {
		for (var gap = Math.floor(i * a3l), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wY[aB = 4 * (eu + ew * i)] = wY[1 + aB] = wY[2 + aB] = 0)
	}, this.a3r = function(wY, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) 200 < wY[1 + (aB = 4 * (eu + ew * i))] && wY[1 + aB] - 20 > wY[aB] && wY[1 + aB] - 20 > wY[2 + aB] ? wY[aB] + wY[2 + aB] < 40 ? wY[3 + aB] = 0 : (wY[3 + aB] = wY[aB], wY[aB] = 255, wY[1 + aB] = 255, wY[
				2 + aB] = 255) : wY[aB] < 50 && wY[1 + aB] < 50 && wY[2 + aB] < 50 && (wY[aB] + wY[1 + aB] + wY[2 + aB] < 50 ? wY[3 + aB] = 180 : wY[3 + aB] = 180 + Math.floor(75 * (wY[aB] + wY[1 + aB] + wY[2 + aB] - 50) / 100))
	}, this.a3s = function(wY, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) wY[1 + (aB = 4 * (eu + ew * i))] > wY[aB] + 20 && wY[1 + aB] > wY[2 + aB] + 20 && wY[aB] + wY[2] < 40 && (wY[3 + aB] = 255 - wY[1 + aB], wY[aB] = wY[1 + aB] = wY[2 + aB] = wY[aB])
	}, this.a2q = function(wY, i, j, a3l) {
		for (var e7 = i >> 1, eu = 0; eu < i; eu++)
			for (var ew = 0; ew < j; ew++) Math.sqrt((eu - e7) * (eu - e7) + (ew - e7) * (ew - e7)) > a3l * e7 && (wY[4 * (eu + ew * i) + 3] = 0)
	}
}

function a2B() {
	var a3t = {
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
		a3u = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.ra = function(uy) {
		return uy.replace(a3u, function(match) {
			return a3t[match] || match
		})
	}, this.zF = function(fF) {
		var aB, a3v, a3w, a3x, a3y;
		if (fF < 0) return "-" + this.zF(Math.abs(fF));
		if (fF < 1e3) return fF.toString();
		for (a3v = Math.floor(Math.log(fF + .5) / Math.log(10)) + 1, a3w = Math.floor((a3v - 1) / 3), a3y = (a3x = fF.toString()).substring(a3v - 3, a3v), aB = 1; aB < a3w; aB++) a3y = a3x.substring(a3v - 3 * (aB + 1), a3v - 3 * aB) + " " + a3y;
		return a3x.substring(0, a3v - 3 * a3w) + " " + a3y
	}, this.a3z = function(gL, a3v) {
		return gL.toFixed(a3v) + "%"
	}, this.a40 = function(fF, a41) {
		return fF.toFixed(bL.hv(Math.floor((void 0 === a41 ? 3 : a41) - Math.log10(Math.max(fF, 1))), 0, 8))
	}, this.a42 = function(fF, nK, a3v) {
		return (fF * nK).toFixed(a3v)
	}, this.a0f = function(username) {
		var er, ec = username.indexOf("[");
		return !(ec < 0) && 1 < (er = username.indexOf("]")) - ec && er - ec <= 8 ? username.substring(ec + 1, er).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0f;
	this.a43 = function(qH) {
		for (var f6 = Math.floor(.5 * qH.length + .5), nQ = Math.floor(.5 * (f6 - 1)), aB = 0; aB < nQ; aB++)
			for (var f7 = -1; f7 < 2; f7 += 2) {
				var f8 = f6 + f7 * aB;
				if (" " === qH[f8]) return [this.a0b(qH.substring(0, f8)), this.a44(qH.substring(f8))]
			}
		return [qH.substring(0, f6), qH.substring(f6)]
	}, this.a44 = function(qH) {
		for (var en = qH.length, aB = 0; aB < en; aB++)
			if (" " !== qH[aB]) return qH.substring(aB);
		return qH
	}, this.a0b = function(qH) {
		for (var aB = qH.length - 1; 0 <= aB; aB--)
			if (" " !== qH[aB]) return qH.substring(0, aB + 1);
		return qH
	}, this.a45 = function(qH, a46) {
		return qH.split("(")[0] + "(🧈 " + a46.toFixed(2) + ")"
	}, this.startsWith = function(qH, a47) {
		return qH.substring(0, a47.length) === a47
	}, this.a3G = function(qH, a47) {
		var en = qH.length;
		return qH.substring(en - a47.length, en) === a47
	}, this.a48 = function(g, a49, a4A) {
		var qH = "",
			en = g.length - 1;
		a4A = a4A || "";
		for (var aB = 0; aB < en; aB++) qH += a4A + g[aB] + a4A + ",", (aB + 1) % a49 == 0 && (qH += "\n");
		return qH += a4A + g[en] + a4A
	}, this.a4B = function(qH, z4, z5) {
		return qH.replace(new RegExp(z4, "g"), z5)
	}
}

function a4C() {
	this.jG = function(player, eZ) {
		aI.xs(player, bM.ev(eZ), bM.ex(eZ)) && (bf.dl = !0), aD.kU && this.j3()
	}, this.j3 = function() {
		aD.hB = !1;
		for (var aB = 0; aB < aD.kA; aB++) 0 !== ag.mi[aB] && 0 === ag.gb[aB] && aI.xz(aB);
		0 !== ag.mi[aD.eX] ? (bd.me[7] = ag.gb[aD.eX], bd.me[8] = ag.gp[aD.eX], aR.a4D(), aW.a4E(), aD.gw || aH.n2(ag.ie[aD.eX] - 5, ag.ih[aD.eX] - 5, ag.ig[aD.eX] + 5, ag.ii[aD.eX] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a4F(18), af.a4G(),
			af.mU(!0), bP.y.a4H(), aL.rr(), aD.pw = null, bb.a4I = !0, bb.a4J(), aD.kU && a0.a1.setState(1)
	}
}

function c1() {
	this.ek = 512, this.a3T = 15e8, this.a4K = 1e9, this.a3c = 5e4, this.a4L = 512, this.g7 = 2, this.eX = 0, this.kA = 0, this.a01 = 0, this.kW = 0, this.a00 = 0, this.x3 = 512, this.x8 = 512, this.a3S = 150, this.kU = !0, this.gw = 0, this.zy = 0,
		this.ju = 0, this.nB = !1, this.hB = 0, this.a4M = 0, this.hh = !1, this.xA = 0, this.xB = 0, this.kS = 0, this.yP = 0, this.pw = null, this.a0G = new yE, this.a4N = 30, this.zv = 0, this.a03 = 0, this.a0F = 0, this.zq = 0, this.data =
		new a4O, this.a4P = new a4Q, this.a4R = 0, this.a4S = "", this.a4T = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a01 = this.kA = this.data.humanCount, this.kU = 1 === this.a01, this.nB = !1, this.gw = this.data.isReplay, this.kS = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.yP = this.data.isContest, this.hh = this.kS < 7 || 9 === this.kS, this.kS = 10 === this.kS && this.kU ? 7 : this.kS, this.kS = 8 === this.kS && 2 !== this.kA ? 7 : this.kS, az.dd(),
				this.xA = this.data.numberTeams, this.data.teamPlayerCount ? this.xB = +(0 < this.data.teamPlayerCount[0]) : (this.xB = 0, this.hh && this.kU && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.xA + 1), aD.a4P.a4U())), this.a4N = this.kA <= 2 ? 30 : this.kA <= 50 ? 40 : 50, this.a4M = this.hB = this.data.selectableSpawn, this.pw = this.hB ? new a4C : null, 1 === l.ds ? this.x3 = this.kA : this.x3 = this.data
				.playerCount, this.x8 = this.x3, this.kW = this.x3 - this.kA, this.a00 = 0, this.eX = this.data.selectedPlayer, this.zv = 0, this.a03 = 0, this.a0F = 0, this.zq = 0, ay.a4V(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai.a4W(),
				b8.p0.pj = [], bg.dd(), this.zy = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a4X(), ac.de(), ap.a4Y(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a4Z(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a4a(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a4b.putImageData(a4c, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), fq(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a0G.dd(), bf.a4Z(), aH.n1(), 0 === ag.mi[aD.eX] && aX.show(!1, !0), af.mU(!0), av.dd(), bf.dl = !0, this.gw || this.kU && this.hB || a0.a1.setState(1), this.a4R = 0
		}, this.a1J = function(a4e) {
			b9.pu.a4f.length ? this.a4S = b9.pu.a4f : this.a4S = b9.a4g.zQ(), b0.y.a4h(), bq.clear(), this.zy = 0, bf.a4i(), a0.a1.setState(0), aa.setState(0), a4e || bU.eG.show(), 2 === this.a4R ? t.y.a4j() : 1 === this.a4R ? t.u(19) : t.u(5, 5)
		}, this.a4k = function() {
			return this.gw ? aM.gx || !bC.a4l : this.kU && (aM.gx || this.hB)
		}, this.a4m = function() {
			return 1 === this.zy && !this.hB
		}
}

function a4O() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4Q() {
	this.a4U = function() {
		var a4n = aD.data;
		bA.qi.a2f(a4n.teamPlayerCount, a4n.playerCount), a4n.numberTeams = bA.qi.a2W(a4n.teamPlayerCount, 0), a4n.teamPlayerCount[0] && a4n.teamPlayerCount[7] && (a4n.teamPlayerCount[7] = 0, this.a4U())
	}, this.a4o = function() {
		var a4n = aD.data;
		a4n.mapType < 2 ? bS.a7(bS.a4p(a4n), a4n.mapSeed) : bS.a4q(a4n.canvas)
	}, this.a4r = function() {
		var a4n = aD.data;
		a4n.colorsData || (a4n.colorsData = new Uint32Array(1)), a4n.selectableColor && (a4n.colorsData[0] = bj.y.vb()), a4n.selectableName && (a4n.playerNamesData || (a4n.playerNamesData = new Array(1)), a4n.playerNamesData[0] = bj.eK.data[122]
			.value)
	}, this.a4s = function() {
		aD.data = new a4O, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ek), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a4t = [];
	this.pT = function(player, p7, a4u, a4v) {
		player === aD.eX || p7 === aD.eX || !a4v && bA.g9.jY(player) || bA.g9.jY(p7) || this.yQ(ag.yR[player] + " has supported " + ag.yR[p7] + " with " + bA.rZ.zF(a4u) + " ressource" + (1 === a4u ? "." : "s."))
	}, this.yQ = function(qH, pI) {
		qH = {
			eM: aW.a4x(),
			qH: qH,
			pI: pI
		};
		a4t.push(qH), 30 === t.sp && t.a4y().yQ(qH)
	}, this.clear = function() {
		a4t = [];
		var tD = t.a4z(30);
		tD && tD.clear()
	}, this.a50 = function() {
		return a4t
	}
}

function dT() {
	this.yw = 0, this.gap = 0, this.sR = 0, this.qg = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.yw = .0022 * bA.qa.qb(.5) * h.hx, this.sR = this.yw / h.k, this.gap = Math.max(Math.floor((a0.a1.hw() ? .0114 : .01296) * h.hx), 2), this.qg = this.gap / h.k
	}
}

function dS() {
	this.a51 = function() {
		return a0.a1.hw() ? 2 : 1
	}
}

function cC() {
	var r9, eu, ew, a52, a53, a54, eM, a55, a56, a57, a58, gap, zoom, pc, a59;

	function a5N(lN, lO, eR) {
		ac.ei(eR) || -1 === (lN = bN.kx.a5W(lN, lO)) ? aN.a5V(eR) : aN.a5X(lN)
	}

	function a5J(a55) {
		for (var aB = pc.length - 1; 0 <= aB; aB--)
			if (pc[aB] === a55) return 1
	}

	function a5H(a5E) {
		var aB, en;
		if (-1 !== a5E)
			for (en = r9.length, aB = 0; aB < en; aB++)
				if (r9[aB].hZ && r9[aB].eu + 1 === a5E % 4 && r9[aB].ew + 1 === a5E >> 2) return aB;
		return -1
	}

	function a5F(lN, lO) {
		var tD = gap / 2;
		return lN < eu - a52 - 3 * tD || eu + 3 * a52 + 5 * tD < lN || lO < ew - a52 - 3 * tD || ew + 2 * a52 + 3 * tD < lO ? -1 : 4 * (lO < ew - tD ? 0 : lO < ew + a52 + tD ? 1 : 2) + (lN < eu - tD ? 0 : lN < eu + a52 + tD ? 1 : lN < eu + 2 * a52 +
			3 * tD ? 2 : 3)
	}
	this.a5A = function() {
		var aB, f7, a5D = [bB.o8, bB.oM, bB.ng, bB.oi, bB.oZ];
		for (r9 = new Array(10), aB = 0; aB < 10; aB++) r9[aB] = {
			id: aB,
			hZ: !1,
			l5: 0,
			canvas: [],
			eu: 0,
			ew: 0
		};
		for (r9[0].colors = [0, 1, 2, 3], r9[0].eu = 0, r9[0].ew = 0, r9[1].colors = [1, 4], r9[1].eu = 1, r9[1].ew = 0, r9[2].colors = [0, 1], r9[2].eu = -1, r9[2].ew = 0, r9[3].colors = [0], r9[3].eu = 0, r9[3].ew = 0, r9[4].colors = [0, 2],
			r9[4].eu = 1, r9[4].ew = 1, r9[5].colors = [3], r9[5].eu = 0, r9[5].ew = -1, r9[6].id = 20, r9[6].colors = [0], r9[6].eu = 1, r9[6].ew = -1, r9[7].id = 21, r9[7].colors = [0], r9[7].eu = 0, r9[7].ew = 1, r9[8].id = 16, r9[8]
			.colors = [0], r9[8].eu = 0, r9[8].ew = 0, r9[9].id = 10, r9[9].colors = [4], r9[9].eu = 2, r9[9].ew = 0, aB = 0; aB < 10; aB++)
			for (f7 = 0; f7 < r9[aB].colors.length; f7++) r9[aB].canvas.push(function(id, a2l) {
				if (id < 20) return bA.canvas.yi(ab.get(3), id, a2l);
				var a2l = ab.get(3).height,
					a2m = bA.qa.wN(a2l, a2l),
					hp = bA.qa.getContext(a2m);
				20 === id ? hp.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wY.yx(aj.rq.ym + aj.rq.z3, hp, 0, 0, a2l);
				return a2m
			}(r9[aB].id, a5D[r9[aB].colors[f7]]))
	}, this.a5C = function() {
		return r9
	}, this.dd = function() {
		pc = [], eu = ew = eM = 0, a53 = a54 = -1e3, this.resize()
	}, this.resize = function() {
		a52 = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), zoom = a52 / ab.get(3).height, gap = Math.floor(a52 / 3)
	}, this.a1m = function(lN, lO) {
		return !!this.hZ() && (bf.dl = !0, !!aj.wY.h0(lN, lO, a56) || (lN = function(lN, lO) {
			a54 = a53 = -1e3;
			var a5G = a5H(a5F(lN, lO));
			if (-1 === a5G) return 0;
			if (1 !== r9[a5G].colors[r9[a5G].l5])
				if (5 === a5G) {
					if (! function() {
							var dt = performance.now();
							a59 + 4e3 < dt && (pc = []);
							a59 = dt
						}(), a5J(a55)) return 1;
					pc.push(a55), 16 < pc.length && pc.shift()
				} else if (6 === a5G) {
				for (var aB = pc.length - 1; 0 <= aB; aB--) 0 === ag.mi[pc[aB]] && pc.splice(aB, 1);
				0 < pc.length && (b5.a5K(1, pc, !0) && b8.g9.pb(pc, a55), pc = [])
			} else if (2 === a5G) an.hR(a55) && b8.hD.p6(aR.hH(), a55);
			else if (3 === a5G) aD.hB && b8.hD.hE(a57);
			else if (0 === a5G)
				if (0 === r9[0].l5) {
					if (aD.a4M && aW.a4x() < 350) return 1;
					bV.a5L(4), b8.hD.hK(aR.hH(), a55)
				} else b1.hL(a55, aR.hH());
			else if (1 === a5G) b8.hD.hP(aR.hH(), a57);
			else if (9 === a5G) b8.hD.hS(aR.hH());
			else {
				if (7 === a5G) return bV.a5L(0), aj.wY.show(lN, lO), 2;
				if (4 === a5G) b5.a5K(0, [a55], !0) && b8.g9.pY(a55);
				else {
					if (8 !== a5G) return 0;
					b8.hD.hG(aR.hH(), a58, a55)
				}
			}
			return 1
		}(lN, lO), this.rr(), 2 === lN && (aj.wY.hZ = !0), 0 < lN))
	}, this.a1o = function(lN, lO) {
		this.hZ() || (a53 = lN, a54 = lO, eM = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.h3(mouseX),
			coordY = bM.h5(mouseY),
			coord = bM.fB(coordX, coordY),
			coord = bM.ed(coord);
		bM.h6(coordX, coordY) && a5N(mouseX, mouseY, coord)
	}, this.click = function(lN, lO, a1v) {
		var h2 = bM.h3(lN),
			h4 = bM.h5(lO),
			eZ = bM.fB(h2, h4),
			eR = bM.ed(eZ);
		return !(!bM.h6(h2, h4) || (h2 = (a0.a1.hw() ? .025 : .0144) * h.hx, h4 = performance.now(), Math.abs(lN - a53) > h2) || Math.abs(lO - a54) > h2 || eM + 500 < h4) && (eM = h4, a1v ? (a5N(lN, lO, eR), !1) : aM.gx || this.hZ() || !bA.g9.gz(
			aD.eX) || aD.gw ? (this.rr(), !1) : (aD.hB ? 0 <= (a57 = br.hC(eZ)) && (r9[3].hZ = !0) : 2 === aD.zy ? ac.gN(eR) && (a55 = ac.ef(eR), bA.g9.jY(a55) || (r9[0].hZ = !0, r9[0].l5 = 1, r9[7].hZ = !0)) : (bN.hQ.hR(aD.eX, eZ) && (
			r9[0].hZ = !0, r9[0].l5 = 1, r9[1].hZ = !0, r9[1].l5 = 0, r9[9].hZ = !0, r9[9].l5 = 0), bN.hN.hO(aD.eX, eZ) && (r9[0].hZ = !0, r9[0].l5 = 1, r9[1].hZ = !0, r9[1].l5 = 1, a57 = bO.fP[7]), ac.es(eR) ? (a58 = am.eO.eQ(
			eR)) && (h2 = bM.ed(a58), r9[8].hZ = !0, a55 = ac.ee(h2) ? aD.ek : ac.ef(h2)) : (ac.xx(aD.eX, eR) && (a56 = aD.eX, r9[0].hZ = !0, r9[0].l5 = 1, r9[7].hZ = !0), -1 !== (h4 = br.hI(eZ)) && (ac.ee(h4 << 2) ? (a55 = aD.ek,
			bs.hJ(aD.eX) ? (r9[0].hZ = !0, r9[0].l5 = 0) : ad.fu(aD.eX) && (r9[0].hZ = !0, r9[0].l5 = 3)) : (a55 = ac.ef(h4 << 2), r9[0].l5 = 1, r9[5].hZ = function(a55) {
			return !bA.g9.jY(a55) && !a5J(a55) && b5.a5K(1, [a55], !1)
		}(a55), r9[7].hZ || bA.g9.jY(a55) || (a56 = a55, r9[7].hZ = !0), r9[4].hZ = !bA.g9.jY(a55) && !af.a5R(a55) && b5.a5K(0, [a55], !1), r9[6].hZ = function(a55) {
			if (0 === pc.length) return !1;
			if (performance.now() > a59 + 4e3) return !(pc = []);
			return !a5J(a55) && ! function(a55) {
				var aB;
				if (aD.hh)
					for (aB = pc.length - 1; 0 <= aB; aB--)
						if (!bs.eg(a55, pc[aB])) return 1;
				return
			}(a55)
		}(a55), bs.eg(a55, aD.eX) ? (bs.hM(aD.eX, a55) ? (r9[0].l5 = 0, r9[0].hZ = !0) : ad.fu(aD.eX) && (r9[0].l5 = 3, r9[0].hZ = !0), r9[0].hZ = this.a5T()) : (r9[2].hZ = !0, an.hR(a55) ? r9[2].l5 = 0 : r9[2].l5 = 1,
			r9[0].hZ = !0))))), this.a5O(lN, lO)))
	}, this.a5O = function(lN, lO) {
		return eu = lN - Math.floor(a52 / 2), ew = lO - Math.floor(a52 / 2), !!this.hZ()
	}, this.a1S = function(lN, lO) {
		return !!this.hZ() && (aj.wY.hZ ? !aj.wY.yv(lN, lO) && (aj.wY.hZ = !1, bf.dl = !0) : function(sC, lN, lO) {
			lN = a5F(lN, lO);
			if (0 <= a5H(lN)) return !1;
			if ((1 === lN || 6 === lN) && 0 <= a5H(2)) return !1;
			if ((6 === lN || 9 === lN) && 0 <= a5H(10)) return !1;
			return sC.rr(), bf.dl = !0
		}(this, lN, lO))
	}, this.rr = function() {
		for (var aB = r9.length - 1; 0 <= aB; aB--) r9[aB].hZ = !1, r9[aB].l5 = 0;
		aj.wY.hZ = !1
	}, this.hZ = function() {
		return this.a5T() || aj.wY.hZ
	}, this.a5T = function() {
		for (var en = r9.length, aB = 0; aB < en; aB++)
			if (r9[aB].hZ) return !0;
		return !1
	}, this.uh = function() {
		if (this.hZ())
			if (aj.wY.hZ) aj.wY.uh();
			else {
				var aB, hp = ui,
					f7 = r9,
					en = f7.length,
					a5b = (a52 + gap) / zoom;
				for (hp.imageSmoothingEnabled = !0, hp.setTransform(zoom, 0, 0, zoom, eu, ew), aB = 0; aB < en; aB++) f7[aB].hZ && ui.drawImage(f7[aB].canvas[f7[aB].l5], f7[aB].eu * a5b, f7[aB].ew * a5b);
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a5c, a5d, a5e, a5f = -1;

	function a5g() {
		var a5h, y8 = canvas.getContext("2d", {
			alpha: !0
		});
		y8.clearRect(0, 0, j, j), y8.fillStyle = bB.ne, y8.fillRect(0, 0, j, j), 0 === a5d && (y8.fillStyle = bB.nj, y8.fillRect(0, 0, j, j)), y8.fillStyle = bB.ni, y8.fillRect(0, 0, j, 1), y8.fillRect(0, 0, 1, j), y8.fillRect(0, j - 1, j, 1), y8
			.fillRect(j - 1, 0, 1, j), a5h = .9 * j / ab.get(0).width, y8.imageSmoothingEnabled = !0, y8.setTransform(a5h, 0, 0, a5h, Math.floor((j - a5h * ab.get(0).width) / 2), Math.floor((j - a5h * ab.get(0).height) / 2)), y8.drawImage(ab.get(0),
				0, 0), y8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5j(lN, lO) {
		if (!aM.gx) return lN <= j + bc.gap && lO >= aR.ew ? 9 : -1;
		if (lN <= 4 * j + bc.gap) {
			if (lO >= aR.ew) return 0;
			if (lO >= aR.ew - j - a5e * bc.gap) return 2
		} else if (lN <= 7 * j + bc.gap && lO >= aR.ew - j - a5e * bc.gap) return 1;
		return -1
	}
	this.gx = !1, this.dd = function() {
		a5d = -1, this.gx = !1, a5e = a0.a1.hw() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5c = bA.qa.sP(1, (a0.a1.hw() ? .5 : .45) * j), a5g()
	}, this.a23 = function() {
		this.gx = !this.gx, this.gx ? (bC.a22(!1), aD.gw && bC.a4l && bC.a24(!0), this.a5i()) : (a5d = -1, a5g(), !aD.kU || 1 !== aD.zy || aD.hB || aD.gw || a0.a1.setState(1)), bf.dl = !0
	}, this.a5i = function() {
		(aD.kU || aD.gw) && 1 === aD.zy && (aV.mU(!0), aD.hB || setTimeout(function() {
			bb.a09()
		}, 0), a0.a1.setState(0))
	}, this.h0 = function(lN, lO) {
		return 0 <= (a5f = a5j(lN, lO)) || !aM.gx || aD.kU || aD.gw || be.hZ || aM.a23(), a5f
	}, this.a1S = function(lN, lO) {
		lN = a5j(lN, lO);
		lN !== a5d && (a5d = lN, this.gx || a5g(), bf.dl = !0)
	}, this.a1T = function(lN, lO) {
		lN = a5j(lN, lO);
		return -1 !== lN && a5f === lN && (this.gx ? aD.nB ? (0 <= lN && bC.a22(!1), !aD.gw) : (0 === lN ? aD.a1J() : 1 === lN ? this.a23() : 2 === lN && t.u(1, 0), !0) : 9 === lN && (this.a23(), !0))
	}, this.uh = function() {
		var i;
		this.gx ? (i = Math.floor(5.5 * j), ui.setTransform(1, 0, 0, 1, bc.gap, aR.ew), ui.fillStyle = bB.ne, ui.fillRect(0, 0, i, j), 0 === a5d ? (ui.fillStyle = bB.nj, ui.fillRect(0, 0, 4 * j, j)) : 1 === a5d && (ui.fillStyle = bB.nj, ui
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), ui.fillStyle = bB.ni, ui.fillRect(0, 0, i, 1), ui.fillRect(0, 0, 1, j), ui.fillRect(4 * j, 0, 1, j), ui.fillRect(0, j - 1, i, 1), ui.fillRect(i - 1, 0, 1, j), ui.font = a5c, bA.qa
			.textBaseline(ui, 1), bA.qa.textAlign(ui, 1), ui.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a5n(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.ew + .3 * j, i), i = 1, ui.setTransform(1, 0, 0, 1, bc.gap, aR.ew - i * a5e * bc.gap - i *
				j), ui.fillStyle = bB.ne, ui.fillRect(0, 0, 4 * j, j), a5d === i + 1 && (ui.fillStyle = bB.nj, ui.fillRect(0, 0, 4 * j, j)), ui.fillStyle = bB.ni, ui.fillRect(0, 0, 4 * j, 1), ui.fillRect(0, 0, 1, j), ui.fillRect(4 * j, 0, 1,
				j), ui.fillRect(0, j - 1, 4 * j, 1), ui.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), ui.setTransform(1, 0, 0, 1, 0, 0)) : ui.drawImage(canvas, bc.gap, aR.ew)
	}, this.qB = function(player) {
		return 0 !== ag.mi[player] && 2 !== aD.zy && !bA.g9.jY(player)
	}, this.a5n = function(eu, ew, en) {
		ui.setTransform(1, 0, 0, 1, eu, ew), ui.lineWidth = bc.yw, ui.strokeStyle = bB.ni, ui.beginPath(), ui.moveTo(0, 0), ui.lineTo(en, en), ui.moveTo(0, en), ui.lineTo(en, 0), ui.stroke()
	}
}

function cE() {
	var a5p, j, a5q, a5r, a5s, a5t, a5u, a5v, a5w;

	function y4() {
		return aR.a6E(aN.a6A()) ? aw.hZ ? __fx.settings.keybindButtons ? aR.ew - 2 * aR.j - 3 * a5q : aR.ew - aR.j - 2 * a5q : __fx.settings.keybindButtons ? aR.ew - aR.j - 2 * a5q : aR.ew - a5q : bC.a6E(aN.a6D()) ? aw.hZ ? bC.y4() - aR.j - 2 * a5q :
			bC.y4() - a5q : aw.hZ ? h.j - aR.j - (bk.a51() + 1) * a5q : h.j - bk.a51() * bc.gap
	}

	function a61(dt, qH, id, gL, a64, a65, kl, a66, a67, a68, a6J) {
		var aB, y8, a2m, qS, a6K = void 0 !== a67,
			i = Math.floor(aQ.measureText(qH, aN.a5c) + 1.5 * a5r + (a6K ? j : 1.5 * a5r));
		if (bf.dl = !0, a6J || bq.yQ(qH, a67), i + 2 * a5q + aR.j > h.i && !a6K && 50 !== id && 20 < qH.length) a61(dt, (a6J = bA.rZ.a43(qH))[0], id, gL, a64, a65, kl, a66, a67, a68, !0), a61(dt, a6J[1], id, gL, a64, a65, kl, a66, a67, a68, !0);
		else if (a6J = i + (50 === id ? a5s : 0), (a2m = document.createElement("canvas")).width = i, a2m.height = j, (y8 = a2m.getContext("2d", {
				alpha: !0
			})).font = aN.a5c, bA.qa.textBaseline(y8, 1), bA.qa.textAlign(y8, 0), y8.clearRect(0, 0, i, j), y8.fillStyle = a65, y8.fillRect(0, 0, i, j), y8.fillStyle = a64, y8.fillText(qH, Math.floor(1.5 * a5r), Math.floor(j / 2)), a6K && (y8
				.imageSmoothingEnabled = !0, aj.wY.yx(a67, y8, i - j, 0, j)), 0 === (qS = {
				eM: dt,
				qH: qH,
				id: id,
				player: gL,
				canvas: a2m,
				a64: a64,
				a65: a65,
				i: i,
				a6B: a6J,
				kl: kl,
				a66: a66,
				a67: a67,
				a68: a68
			}).eM || 0 < a5p.length && 0 < a5p[0].eM) a5p.unshift(qS);
		else {
			for (aB = 1; aB < a5p.length; aB++)
				if (0 < a5p[aB].eM) return void a5p.splice(aB, 0, qS);
			a5p.push(qS)
		}
	}

	function a62(e7, tD, f7) {
		return "rgb(" + e7 + "," + tD + "," + f7 + ")"
	}

	function a6L(id, gG) {
		for (var en = a5p.length, aB = 0; aB < en; aB++) a5p[aB].id === id && gG-- <= 0 && (a5p.splice(aB, 1), aB--, en--)
	}

	function a6M(id, player) {
		for (var f1 = !1, aB = a5p.length - 1; 0 <= aB; aB--) a5p[aB].id !== id || player !== aD.ek && a5p[aB].player !== player || (a5p.splice(aB, 1), f1 = !0);
		return f1
	}

	function a6i(qH) {
		a61(340, qH, 6, 0, a62(215, 245, 255), bB.nf, -1, !1)
	}
	this.a5x = "", this.dd = function() {
		var self;
		a5v = 0, a5u = a0.a1.hw() ? 7 : 12, a5t = {
			zm: [0, 0, 0],
			a5y: [0, 0, 0],
			eF: [220, 180, 180],
			ug: [0, 0, 0],
			f8: [0, 0, 0]
		}, a5p = [], this.resize(), aD.hB && this.a0A(0, 18), bS.wL.wM[bS.eT].name.length && a6i(L(88, [bS.wL.wM[bS.eT].name])), a6i(L(89, [bS.ey - 2 + "x" + (bS.ez - 2)])), a6i(L(90, [bA.rZ.zF(ap.a6j)])), ap.a6j !== ap.a6k && a6i(L(91, [bA
			.rZ.zF(ap.a6k) + " (" + bA.rZ.a3z(100 * ap.a6k / ap.a6j, 1) + ")"
		])), 0 < ap.a6l && a6i(L(66, [bA.rZ.zF(ap.a6l) + " (" + bA.rZ.a3z(100 * ap.a6l / ap.a6j, 1) + ")"])), 0 < ap.a6m && a6i(L(92, [bA.rZ.zF(ap.a6m) + " (" + bA.rZ.a3z(100 * ap.a6m / ap.a6j, 1) + ")"])), 10 === aD.kS && a61(120, L(93), 6,
			0, a62(235, 255, 120), bB.nf, -1, !1), 0 !== (self = this).a5x.length && (a61(200, self.a5x, 0, 0, bB.ni, bB.nf, -1, !1), self.a5x = ""), aD.yP && a61(340, L(44), 6, 0, a62(255, 200, 0), bB.nf, -1, !1)
	}, this.resize = function() {
		var a63, aB;
		if (j = (j = Math.floor((a0.a1.hw() ? .031 : .0249) * h.hx)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5c = bA.qa.sP(1, this.fontSize), a5q = bc.gap, a5r = Math.floor(j / 5), 0 < a5p.length)
			for (a63 = a5p, a5p = [], aB = a63.length - 1; 0 <= aB; aB--) a61(a63[aB].eM, a63[aB].qH, a63[aB].id, a63[aB].player, a63[aB].a64, a63[aB].a65, a63[aB].kl, a63[aB].a66, a63[aB].a67, a63[aB].a68, !0);
		this.a69()
	}, this.a69 = function() {
		a5w = document.createElement("canvas");
		var qH = L(45),
			y8 = (a5s = aQ.measureText(qH, this.a5c) + 5 * a5r, a5w.height = j, a5w.width = a5s, a5w.getContext("2d", {
				alpha: !0
			}));
		y8.font = this.a5c, bA.qa.textBaseline(y8, 1), bA.qa.textAlign(y8, 1), y8.clearRect(0, 0, a5s, j), y8.fillStyle = bB.o5, y8.fillRect(0, 0, a5s, j), y8.fillStyle = bB.ni, y8.fillText(qH, Math.floor(a5s / 2), Math.floor(j / 2))
	}, this.a6A = function() {
		var en;
		return aw.hZ ? aw.i : 0 === (en = a5p.length) ? 0 : 1 === en ? a5p[0].a6B : a6C(a5p[0].a6B, a5p[1].a6B)
	}, this.a6D = function() {
		var en = a5p.length;
		return aw.hZ ? en ? a6C(aw.i, a5p[0].a6B) : aw.i : 0 === en ? 0 : 1 === en ? a5p[0].a6B : 2 === en ? a6C(a5p[0].a6B, a5p[1].a6B) : a6C(a6C(a5p[0].a6B, a5p[1].a6B), a5p[2].a6B)
	}, this.h0 = function(eu, ew) {
		for (var n8, a6F, a6G = y4(), aB = a5p.length - 1; 0 <= aB; aB--)
			if ((a6F = a6G - (aB + 1) * j) <= ew && ew < a6F + j) return 50 === a5p[aB].id ? eu >= h.i - a5s - a5q - a5p[aB].i && (eu >= h.i - a5s - a5q ? b8.g9.pY(a5p[aB].player) : aH.n3(a5p[aB].player, 800, !1, 0), !0) : eu >= h.i - a5p[aB].i -
				a5q && (736 === a5p[aB].id ? (a6F = a5p[aB].qH.split(" "), window.open(a6F[a6F.length - 1], "_blank")) : a5p[aB].a66 && (a5p[aB].a68 && a5p[aB].a68.f6 ? (a6F = a5p[aB].a68.eZ, n8 = bM.ev(a6F) - 10, a6F = bM.ex(a6F) - 10, aH
					.n2(n8, a6F, 19 + n8, 19 + a6F)) : a5p[aB].a68 && a5p[aB].a68.f7 ? aH.n4(a5p[aB].player, a5p[aB].a68.n5) : (aH.n3(a5p[aB].player, 800, !1, 0), 0 <= a5p[aB].kl && (n8 = a5p[aB].kl, a5p[aB].kl = a5p[aB].player, a5p[
					aB].player = n8))), !0);
		return !1
	}, this.yQ = function(dt, qH, id, gL, a64, a65, kl, a66, a67, a68) {
		a61(dt, qH, id, gL, a64, a65, kl, a66, a67, a68)
	}, this.a6I = function(r) {
		a61(300, r, 252, 0, bB.ni, bB.nf, -1, !1)
	}, this.a4F = function(id) {
		for (var aB = a5p.length - 1; 0 <= aB; aB--) a5p[aB].id === id && (a5p[aB].eM = 1)
	}, this.a0A = function(player, id) {
		0 === id ? (aQ.jG(player, 0), a6L(423, 0), a61(160, L(46, [ag.yR[player]]), 423, player, "rgb(10,220,10)", bB.nf, -1, !1)) : 1 === id ? (a6M(50, aD.ek), aQ.jG(player, 1), a61(360, L(47, [ag.yR[player]]), 0, player, bB.oO, bB.nf, -1, !0),
			aH.n3(player, 2700, !1, 0)) : 2 === id ? (aQ.jG(player, 2), a61(0, L(48), 0, player, "rgb(10,255,255)", bB.nf, -1, !0), aH.n3(player, 2700, !1, 0)) : 3 === id ? (aQ.jG(player, 2), a61(0, L(49, [ag.yR[player]]), 0, player, bB.ni,
			bB.nf, -1, !0), aH.n3(player, 2700, !1, 0)) : 4 === id ? this.a6N(1, player, player) : 5 === id ? 2 === ag.a3I[player] || bA.g9.jY(aD.eX) || (function(id, md) {
			var aB, a6X = 0,
				en = a5p.length;
			for (aB = 0; aB < en; aB++)
				if (a5p[aB].id === id && md <= ++a6X) return a5p.splice(aB, 1)
		}(1, 5), af.a6P(player) ? a61(180, L(50, [ag.yR[player]]), 1, player, a62(255, 200, 180), bB.nf, -1, !0) : (a6L(573, 0), a61(180, L(51, [ag.yR[player]]), 573, player, bB.oO, bB.nf, -1, !0))) : 18 === id ? a61(255, L(52), 18, 0, bB.ni,
			bB.nf, -1, !1) : 21 === id ? a61(220, L(53), id, 0, bB.ni, bB.nf, -1, !1) : 22 === id ? this.a6N(2, player, player) : 59 === id && a61(0, L(54), id, 0, bB.oh, bB.nf, 0, !1)
	}, this.a1F = function(r) {
		a61(200, L(55, [r]), 94, 0, bB.ni, bB.oK, -1, !1)
	}, this.a0M = function(a6Q) {
		if (aD.eX === a6Q && !aD.kU)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a61(0, "Your Win Count is now " + __fx.wins.count, 3, a6Q, bB.ni, bB.nf, -1, !0);
		ag.gb[a6Q] && (aQ.jG(a6Q, 2), aD.kA < 100 ? a61(0, L(49, [ag.yR[a6Q]]), 3, a6Q, bB.ni, bB.nf, -1, !0) : a61(0, L(56, [ag.yR[a6Q]]), 3, a6Q, bB.ni, bB.nf, -1, !0))
	}, this.a5V = function(eR) {
		var qH, a6S, a6R = "(" + bM.ev(eR >> 2) + ", " + bM.ex(eR >> 2) + ")",
			a66 = !1,
			player = 0;
		ac.ei(eR) ? ac.ee(eR) ? a6R = L(57, [a6R]) : (player = ac.ef(eR), aD.gw && !1 === __fx.hoveringTooltip.active && (aD.eX = player), qH = L(58, [bA.y8.a2y(ag.a0c[player], bA.qa.sP(0, 10), 150)]) + "   ", qH = (qH += L(59, [bA.rZ.zF(ag.gp[
				player])]) + "   ") + L(60, [bA.rZ.zF(ag.gb[player])]) + "   ", aD.hh && (a6S = bg.a0J[bg.kX[bg.el[player]]], qH += L(61) + ": " + a6S + "   "), bA.g9.jY(player) && (qH += L(62) + ": " + aE.kL[aE.hW[player]] + "   "), a6R =
			qH = (qH += L(63, [player]) + "   ") + L(64, [a6R]), a66 = !0) : a6R = ac.es(eR) ? L(65, [a6R]) + "   #" + ac.eV(eR) : L(66, [a6R]), bf.dl = !0, a6L(55, 0), a61(220, a6R, 55, player, bB.ni, bB.nf, -1, a66, void 0, void 0, !0)
	}, this.a5X = function(a6T) {
		var l3 = bN.y,
			player = l3.m3[a6T] >> 3,
			qH = (bf.dl = !0, a6L(55, 0), L(67, [ag.yR[player]]) + "   ");
		a61(220, qH += L(59, [bA.rZ.zF(l3.a6U[a6T])]), 55, player, bB.ni, bB.nf, -1, !0)
	}, this.pH = function(p3, a6V, pI) {
		p3 === aD.eX ? a61(175, " " + L(68, [ag.yR[a6V]]) + ": ", 1001, a6V, a62(200, 255, 210), bB.nf, -1, !0, pI) : this.a6W(p3, pI)
	}, this.a6W = function(p3, pI) {
		a6L(1e3, 0), a61(175, ag.yR[p3] + ": ", 1e3, p3, bB.ni, "rgba(5,60,25,0.9)", -1, !0, pI)
	}, this.a0L = function() {
		var r;
		aD.a03 ? (r = L(69), aQ.a0K(L(70), 2, 1, 12), a61(0, r, 40, 0, "rgb(10,220,10)", bB.nf, -1, !1)) : (r = L(71), aQ.a0K(L(72), 2, 0, 16), a61(0, r, 41, 0, bB.ni, bB.nf, -1, !1))
	}, this.yF = function() {
		var gG = ag.yR,
			eq = aD.data;
		a61(300, gG[0] + " [" + aD.a0G.yL(eq.elo[0]) + "] vs " + gG[1] + " [" + aD.a0G.yL(eq.elo[1]) + "]", 65, 0, bB.nZ, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6Y = function(r) {
		a61(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6Z = function(a6a) {
		a61(0, L(a6a ? 73 : 74), 247, 0, bB.og, bB.nf, -1, !1)
	}, this.yN = function(yK, yM, a6b) {
		var eq = aD.data,
			gG = ag.yR;
		a61(0, gG[0] + ": " + aD.a0G.yL(eq.elo[0]) + " -> " + yK, 66, 0, bB.ni, a6b[0], -1, !1), a61(0, gG[1] + ": " + aD.a0G.yL(eq.elo[1]) + " -> " + yM, 66, 1, bB.ni, a6b[1], -1, !1)
	}, this.pZ = function(player, id) {
		0 === id ? a6M(50, player) ? (a61(128, L(75, [ag.yR[player]]), 52, player, a62(180, 255, 180), bB.nf, -1, !0), af.q9(player, 2, 255)) : a61(384, L(76, [ag.yR[player]]), 51, player, a62(210, 210, 255), bB.nf, -1, !0) : a6M(51, player) ? (
			a61(128, L(77, [ag.yR[player]]), 52, player, bB.ni, "rgba(60,120,10,0.9)", -1, !0), af.q9(player, 2, 255)) : (a61(384, L(78, [ag.yR[player]]), 50, player, bB.ni, "rgba(90,90,90,0.9)", -1, !0), af.q9(player, 2, 96))
	}, this.pd = function(zm, target) {
		var color = a62(210, 255, 210);
		1 < zm.length ? a61(230, L(79, [zm.length, ag.yR[target]]), 66, target, color, bB.nf, -1, !0) : a61(230, L(80, [ag.yR[zm[0]], ag.yR[target]]), 66, zm[0], color, bB.nf, target, !0)
	}, this.a6c = function(player, target) {
		a61(230, L(81, [ag.yR[player], ag.yR[target]]), 66, player, bB.ni, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6d = function(id, gG) {
		a6L(id, gG)
	}, this.a05 = function(id, player) {
		a6M(id, void 0 === player ? aD.ek : player)
	}, this.a6e = function(id) {
		for (var aB = a5p.length - 1; 0 <= aB; aB--)
			if (a5p[aB].id === id) return a5p[aB];
		return null
	}, this.pU = function(a4u, a6f, player) {
		2 !== ag.a3I[aD.eX] && a61(200, 1 === a4u ? L(82, [ag.yR[player]]) : L(83, [bA.rZ.zF(a4u), ag.yR[player]]), 30, player, "rgb(190,255,190)", bB.nf, -1, !0)
	}, this.a6h = function(a4u, player) {
		2 !== ag.a3I[aD.eX] && (a6L(31, 0), 2 === ag.a3I[player] || player >= aD.kA ? a61(150, 1 === a4u ? L(84, [ag.yR[player]]) : L(85, [ag.yR[player], bA.rZ.zF(a4u)]), 31, player, bB.nZ, "rgba(205,205,205,0.9)", -1, !0) : a61(150, 1 === a4u ?
			L(86, [ag.yR[player]]) : L(87, [ag.yR[player], bA.rZ.zF(a4u)]), 31, player, bB.nZ, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a04 = function(bu) {
		for (var f8 = bf.k7(), aB = 2; 0 <= aB; aB--) 0 < a5t.ug[aB] && (bu || a5t.f8[aB] < f8 - 220) && this.a6n(aB)
	}, this.a6n = function(id) {
		var qH, en = a5t.ug[id],
			player = a5t.zm[id];
		a5t.ug[id] = 0, 1 === en ? (0 === id ? qH = L(94, [ag.yR[player], ag.yR[a5t.a5y[0]]]) : 1 === id ? qH = L(95, [ag.yR[player]]) : 2 === id ? qH = L(96, [ag.yR[player]]) : 3 === id && (qH = L(97, [ag.yR[player]])), a6L(7, 0), a61(a5t.eF[
			id], qH, 7, a5t.a5y[id], bB.ni, bB.nf, -1, !0)) : (qH = L(0 === id ? 98 : 1 === id ? 99 : 100, [en]), a6L(7, 0), a61(a5t.eF[id], qH, 7, player, bB.ni, bB.nf, -1, !1))
	}, this.a6N = function(id, hF, kl) {
		var f8 = bf.k7(),
			en = a5t.ug[id] + 1;
		a5t.ug[id]++, a5t.zm[id] = hF, a5t.a5y[id] = kl, 1 === en && (a5t.f8[id] = f8), (1 === en && (aD.a01 < 32 || 2 === aD.zy) || 1 < en && (a5t.f8[id] < f8 - 140 || 2 === aD.zy)) && this.a6n(id)
	}, this.j3 = function() {
		b2.j3();
		for (var jQ = (jQ = a5p.length - a5u) <= 1 ? 1 : jQ * jQ, aB = a5p.length - 1; 0 <= aB; aB--) 0 < a5p[aB].eM && (a5p[aB].eM -= jQ, a5p[aB].eM <= 0) && (bf.dl = !0, a5p.splice(aB, 1));
		! function() {
			var gG, aB;
			if (128 !== a5v && !(++a5v < 128))
				for (gG = 5, aB = al.kB - 1; 0 <= aB; aB--) 1 === ag.a3I[al.kC[aB]] && 0 < gG-- && a61(240, L(97, [ag.yR[al.kC[aB]]]), 1, al.kC[aB], bB.nZ, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a04(!1)
	}, this.uh = function() {
		for (var x6, ew = y4(), aB = a5p.length - 1; 0 <= aB; aB--) x6 = ew - (aB + 1) * j, 50 === a5p[aB].id ? (ui.drawImage(a5p[aB].canvas, h.i - a5p[aB].i - a5s - a5q, x6), ui.drawImage(a5w, h.i - a5s - a5q, x6)) : ui.drawImage(a5p[aB].canvas,
			h.i - a5p[aB].i - a5q, x6)
	}
}

function cF() {
	var a6p, a6q, a6r, i, j, font, qH;

	function a6w(a6x) {
		return a6x < 10 ? "0" + a6x : String(a6x)
	}
	this.dd = function() {
		qH = L(101)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .53 : .36) * h.hx), j = Math.floor(.065 * i), font = bA.qa.sP(1, Math.floor(.9 * j)), a6r--, this.setTime()
	}, this.j3 = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a6s = dt.getUTCMinutes(), a6t = dt.getUTCSeconds(), a6u = [0, 10, 20, 25, 30, 35, 40, 45, 50], a6v = (a6q = 3600 - 60 * a6s - a6t, a6q %= 300, 300), aB = 0; aB < a6u.length; aB++)
			if ((60 * a6s + a6t + a6q) % 3600 == 60 * a6u[aB]) {
				a6v = 0;
				break
			} return a6q += a6v, a6p = qH + a6w(Math.floor(a6q / 60)) + ":" + a6w(a6q % 60), a6r !== (a6r = 60 * a6s + a6t) && (i = aQ.measureText(a6p, font), i += Math.floor(.4 * j), !0)
	}, this.uh = function() {
		ui.lineWidth = 1 + Math.floor(j / 15), ui.translate(h.i - j, Math.floor(.5 * (h.j + i))), ui.rotate(-Math.PI / 2), ui.fillStyle = bB.ni, ui.fillRect(0, 0, i, j), ui.strokeStyle = bB.nZ, ui.strokeRect(0, 0, i, j + 10), ui.fillStyle = bB
			.nZ, ui.font = font, bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 1), ui.fillText(a6p, Math.floor(i / 2), Math.floor(.59 * j)), ui.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a4t, a6y, a6z, ws, a70, a71 = 0,
		a72 = 0;

	function a74(aB) {
		var a76 = !0,
			z4 = bB.ni,
			i = (1 === a4t[aB].id ? a4t[aB].y8.fillStyle = bB.ob : a4t[aB].jJ === aD.ek ? a4t[aB].y8.fillStyle = bB.nt : (ac.a77(a4t[aB].jJ), a4t[aB].y8.fillStyle = bA.color.nc(bO.fM[0], bO.fM[1], bO.fM[2], .87), 400 < bA.qi.a2Q(bO.fM, 0, 2) && (
				a76 = !1, z4 = bB.nZ)), a4t[aB].canvas.width),
			sw = (a4t[aB].y8.clearRect(0, 0, i, ws), a4t[aB].y8.fillRect(0, 0, i, ws), a4t[aB].y8.fillStyle = z4, ! function(y8, i, ws) {
				y8.fillRect(0, 0, i, 1), y8.fillRect(0, ws - 1, i, 1), y8.fillRect(0, 0, 1, ws), y8.fillRect(i - 1, 0, 1, ws)
			}(a4t[aB].y8, i, ws), a6y + 2 * ws < i && (a4t[aB].y8.fillRect(i - a6y - ws, 0, 1, ws), a4t[aB].y8.fillText(ag.yR[a4t[aB].jJ], Math.floor((i - a6y) / 2), Math.floor(.57 * ws))), 0 !== a4t[aB].id ? 0 : ws);
		a4t[aB].y8.fillText(bA.rZ.zF(a4t[aB].hW), Math.floor(i - a6y / 2 - sw), Math.floor(.57 * ws)),
			function(aB, i, sw, a76) {
				a4t[aB].y8.fillStyle = a76 ? bB.nk : bB.ng;
				a76 = Math.floor(a6y * a4t[aB].hW / a4t[aB].a7D);
				a4t[aB].y8.fillRect(Math.floor(i - a6y - sw), ws - a70, a76, a70)
			}(aB, i, sw, a76), 0 === a4t[aB].id ? (a7A(aB, i, a76, z4), function(aB, i, a76) {
				a4t[aB].y8.strokeStyle = a76 ? bB.o0 : bB.oA, a4t[aB].y8.fillRect(ws, 0, 1, ws);
				a76 = i - ws;
				a4t[aB].y8.beginPath(), a4t[aB].y8.moveTo(Math.floor(.3 * ws + a76), Math.floor(ws / 2)), a4t[aB].y8.lineTo(Math.floor(ws - .3 * ws + 0 + a76), Math.floor(ws / 2)), a4t[aB].y8.stroke(), a4t[aB].y8.beginPath(), a4t[aB].y8.moveTo(
					Math.floor(ws / 2 + a76), Math.floor(.3 * ws)), a4t[aB].y8.lineTo(Math.floor(ws / 2 + a76), Math.floor(ws - .3 * ws + 0)), a4t[aB].y8.stroke()
			}(aB, i, a76)) : a7A(aB, 2 * ws, a76, z4)
	}

	function a7A(aB, i, a76, z4) {
		a4t[aB].y8.strokeStyle = a4t[aB].a7E ? bB.nr : a76 ? bB.oG : bB.oH, a4t[aB].y8.fillStyle = z4, a4t[aB].y8.fillRect(i - ws, 0, 1, ws), a4t[aB].y8.lineWidth = Math.max(Math.floor(ws / 12), 3), a4t[aB].y8.lineCap = "round";
		a76 = .35;
		i = ws + 1, a4t[aB].y8.beginPath(), a4t[aB].y8.moveTo(Math.floor(i - a76 * ws + 0), Math.floor(a76 * ws)), a4t[aB].y8.lineTo(Math.floor(i - ws + a76 * ws), Math.floor(ws - a76 * ws + 0)), a4t[aB].y8.stroke(), a4t[aB].y8.beginPath(), a4t[aB]
			.y8.moveTo(Math.floor(i - ws + a76 * ws), Math.floor(a76 * ws)), a4t[aB].y8.lineTo(Math.floor(i - a76 * ws + 0), Math.floor(ws - a76 * ws + 0)), a4t[aB].y8.stroke()
	}

	function a7Q(g, a7O) {
		for (var hW, aB = a7O - 1; 0 <= aB; aB--) hW = ad.g0(aD.eX, aB), g[aB].hW !== hW && (g[aB].hW = hW, g[aB].a7D = Math.max(hW, g[aB].a7D), g[aB].a75 = !0)
	}

	function a7U(g, a7S) {
		for (var t9 = aD.eX << 3, a6U = bN.y.a6U, m0 = bN.y.m0, a7W = bN.y.a7W, aB = a7S - 1; 0 <= aB; aB--) {
			var a7X = a7W[t9 + aB],
				hW = a6U[a7X];
			g[aB].hW !== hW ? (g[aB].hW = hW, g[aB].a7D = Math.max(hW, g[aB].a7D), g[aB].a75 = !0) : g[aB].a7E || m0[a7X] % 64 != 5 || (g[aB].a7E = !0, g[aB].a75 = !0)
		}
	}

	function a73(a4w) {
		a4w.canvas = document.createElement("canvas"), bS.wR.font = a6z;
		var i = a6y;
		a4w.jJ < aD.ek && 0 === a4w.id && (i += Math.floor(bS.wR.measureText(ag.yR[a4w.jJ] + "000").width)), i += ws, 0 === a4w.id && (i += ws), a4w.canvas.width = i, a4w.canvas.height = ws, a4w.y8 = a4w.canvas.getContext("2d", {
			alpha: !0
		}), a4w.y8.font = a6z, bA.qa.textBaseline(a4w.y8, 1), bA.qa.textAlign(a4w.y8, 1)
	}

	function a7K(aB) {
		return aU.a7Y() ? h.i - a4t[aB].canvas.width - bc.gap : aU.eu
	}

	function a7L(aB) {
		return Math.floor(2 * bc.gap + (aU.a7Y() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * ws))
	}
	this.dd = function() {
		a71 = a72 = 0, a4t = [], this.resize()
	}, this.resize = function() {
		a6z = aN.a5c, ws = aN.fontSize + 5, ws = Math.floor(1.25 * ws), a0.a1.hw() && (ws = Math.floor(1.25 * ws)), a70 = Math.floor(.15 * ws), bS.wR.font = a6z, a6y = Math.floor(bS.wR.measureText("02 000 000 0000").width);
		for (var aB = a4t.length - 1; 0 <= aB; aB--) a73(a4t[aB]), a74(aB)
	}, this.mU = function() {
		for (var aB = a4t.length - 1; 0 <= aB; aB--) a4t[aB].a75 && (a4t[aB].a75 = !1, a74(aB))
	}, this.h0 = function(lN, lO) {
		if (2 !== aD.zy && 0 !== ag.mi[aD.eX] && !aD.gw && !bA.g9.jY(aD.eX))
			for (var a7F, a7G, a7H, a7I = a0.a1.hw() ? ws : 0, a7J = a0.a1.hw() ? Math.floor(.15 * ws) : 0, aB = a4t.length - 1; 0 <= aB; aB--)
				if (a7F = a7K(aB), a7G = a7L(aB), a7H = a4t[aB].canvas.width, a7G - a7J <= lO && lO <= a7G + ws + a7J) {
					if (a7F - a7I <= lN && lN <= a7F + ws + a7I) return a4t[aB].a7E || (a4t[aB].a75 = !0, a4t[aB].a7E = !0, 0 === a4t[aB].id ? b8.hD.pF(a4t[aB].jJ) : b8.hD.pE(a4t[aB].jJ)), !0;
					if (0 === a4t[aB].id && a7F + a7H - ws - a7I <= lN && lN <= a7F + a7H + a7I) return bV.a5L(3), b8.hD.hK(aR.hH(), a4t[aB].jJ), !0
				} return !1
	}, this.j3 = function() {
		var a2Y, a2Z, g, a7O;
		0 === ag.mi[aD.eX] || bA.g9.jY(aD.eX) && !aD.gw || (a2Y = a4t.slice(0, a71), a2Z = a4t.slice(a71, a71 + a72), g = a2Y, a7O = ad.fu(aD.eX), function(g, a7O) {
			if (a71 !== a7O) return 1;
			for (var aB = a7O - 1; 0 <= aB; aB--)
				if (g[aB].jJ !== ad.fz(aD.eX, aB)) return 1;
			return
		}(g, a7O) ? a7Q(g = function(g, a7O) {
			var aB, jJ, f7, hW, a63 = [];
			loop: for (aB = 0; aB < a7O; aB++) {
				for (jJ = ad.fz(aD.eX, aB), f7 = 0; f7 < g.length; f7++)
					if (g[f7].jJ === jJ) {
						a63.push(g.splice(f7, 1)[0]);
						continue loop
					} hW = ad.g0(aD.eX, aB), a73(hW = {
					jJ: jJ,
					hW: hW,
					a7D: hW,
					id: 0,
					a75: !0,
					a7E: !1,
					canvas: null,
					y8: null
				}), a63.push(hW)
			}
			return a63
		}(g, a7O), a7O) : a7Q(g, a7O), a2Y = g, a2Z = function(g) {
			var a7S = bN.y.ps[aD.eX];
			return function(g, a7S) {
				if (a72 !== a7S) return 1;
				for (var t9 = aD.eX << 3, m2 = bN.y.m2, a7W = bN.y.a7W, aB = a7S - 1; 0 <= aB; aB--) {
					var a7X = a7W[t9 + aB];
					if (g[aB].jJ !== m2[a7X]) return 1
				}
				return
			}(g, a7S) ? a7U(g = function(g, a7S) {
				var aB, jJ, f7, a63 = [],
					t9 = aD.eX << 3,
					m2 = bN.y.m2,
					a6U = bN.y.a6U,
					a7W = bN.y.a7W;
				loop: for (aB = 0; aB < a7S; aB++) {
					var a7X = a7W[t9 + aB];
					for (jJ = m2[a7X], f7 = 0; f7 < g.length; f7++)
						if (g[f7].jJ === jJ) {
							a63.push(g.splice(f7, 1)[0]);
							continue loop
						} a7X = a6U[a7X], a73(a7X = {
						jJ: jJ,
						hW: a7X,
						a7D: a7X,
						id: 1,
						a75: !0,
						a7E: !1,
						canvas: null,
						y8: null
					}), a63.push(a7X)
				}
				return a63
			}(g, a7S), a7S) : a7U(g, a7S), g
		}(a2Z), a71 = a2Y.length, a72 = a2Z.length, a4t = a2Y.concat(a2Z))
	}, this.uh = function() {
		if (0 !== ag.mi[aD.eX] && (!bA.g9.jY(aD.eX) || aD.gw))
			for (var aB = a4t.length - 1; 0 <= aB; aB--) ui.drawImage(a4t[aB].canvas, a7K(aB), a7L(aB))
	}
}

function cH() {
	var a5p, kF, a7Z, a7a, j, a5c, fontSize, a7b, a7c, a7d, a7e, canvas, y8, mv, a7f;

	function uz(aB) {
		return L(0 === aB ? 102 : 1 === aB ? 103 : 2 === aB ? 104 : 105)
	}

	function a7m() {
		ui.drawImage(canvas, bc.gap + (aD.hh ? bc.gap + bh.a7n() : 0), a7o + 2 * bc.gap)
	}

	function a7g() {
		canvas.width = a5p[0].width + a7d, canvas.height = j + a7d, (y8 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a5p[0].width + a7d, j + a7d), y8.translate(Math.floor(a7d / 2), Math.floor(a7d / 2)), y8.lineWidth = a7d, y8.fillStyle = 1 === a5p[0].a7l ? bB.nn : bB.nf, a7p(), y8.fill(), y8.strokeStyle = 1 === a5p[0].a7l ? bB.nZ :
			bB.ni, a7p(), y8.stroke(), bA.qa.textAlign(y8, 1), bA.qa.textBaseline(y8, 1), y8.fillStyle = 1 === a5p[0].a7l ? bB.nZ : bB.ni, y8.font = a5c[0], y8.fillText(uz(a5p[0].a7k), Math.floor(a5p[0].width / 2), Math.floor(.72 * a7b[0] * j)), y8
			.font = a5c[1], y8.fillText(a5p[0].qH, Math.floor(a5p[0].width / 2), Math.floor((a7b[0] + .48 * a7b[1]) * j))
	}

	function a7p() {
		y8.beginPath(), y8.moveTo(a7e, 0), y8.lineTo(a5p[0].width - a7e, 0), y8.lineTo(a5p[0].width, a7e), y8.lineTo(a5p[0].width, j - a7e), y8.lineTo(a5p[0].width - a7e, j), y8.lineTo(a7e, j), y8.lineTo(0, j - a7e), y8.lineTo(0, a7e), y8.closePath()
	}
	this.dd = function() {
		kF = 4, a7Z = a7a = mv = 0, a5p = [], a5c = new Array(2), fontSize = new Array(2), (a7b = new Array(2))[0] = .3, a7b[1] = .7, a7c = new Array(4), canvas = document.createElement("canvas"), a7f = bf.eM + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hw() ? .0725 : .058) * h.hx), fontSize[0] = Math.floor(.85 * a7b[0] * j), fontSize[1] = Math.floor(.85 * a7b[1] * j), a5c[0] = bA.qa.sP(1, fontSize[0]), a5c[1] = bA.qa.sP(1, fontSize[1]), aB = a7c.length -
			1; 0 <= aB; aB--) a7c[aB] = this.measureText(uz(aB) + "000", a5c[0]);
		if (a7d = Math.floor(1 + .05 * j), a7e = Math.floor(.2 * j), 0 < a5p.length) {
			for (aB = a5p.length - 1; 0 <= aB; aB--) i = this.measureText(a5p[aB].qH + "00", a5c[1]), a5p[aB].width = i < a7c[aB] ? a7c[aB] : i;
			a7g()
		}
	}, this.j3 = function() {
		0 !== kF && (4 === kF ? bf.eM > a7f && (kF = 0, 1 === aD.zy) && aQ.a0K(bS.wL.wM[bS.eT].name, 3, 1, 9) : (1 === kF ? (0 === a7Z && (a7g(), a7Z = 1e-4), 1 <= (a7Z += .002 * (bf.eM - mv)) && (a7a = 0, kF = 2, a7Z = 1), bf.dl = !0) : 2 ===
			kF ? ((a7a += (bf.eM - mv) / 1e3) > a5p[0].eF || 1 < a7a && 1 < a5p.length) && (kF = 3) : 3 === kF && ((a7Z -= .002 * (bf.eM - mv)) <= 0 && (a7Z = 0, a5p.shift(), kF = 0 < a5p.length ? 1 : 0), bf.dl = !0), mv = bf.eM))
	}, this.measureText = function(qH, a5c) {
		return ui.font = a5c, Math.floor(ui.measureText(qH).width)
	}, this.jG = function(a7j, aB) {
		this.a0K(ag.yR[a7j], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0K = function(qH, a7k, a7l, eF) {
		var i;
		qH.length && (i = (i = this.measureText(qH + "00", a5c[1])) < a7c[a7k] ? a7c[a7k] : i, a5p.push({
			qH: qH,
			width: i,
			a7k: a7k,
			a7l: a7l,
			eF: eF
		}), 0 === kF) && (a7Z = 0, kF = 1, mv = bf.eM)
	}, this.uh = function() {
		0 !== kF && 0 !== a7Z && (a7Z < 1 ? (ui.globalAlpha = a7Z, a7m(), ui.globalAlpha = 1) : a7m())
	}
}

function cq() {
	var j, canvas, y8, a7q, a7r, a7s, a7t, a75, a7u, a7v, a7w, a7x, a6a = !1,
		a2m = (this.hZ = !1, this.i = 0, new Array(2)),
		a7y = 0;

	function mV() {
		var i = aw.i,
			l3 = (a75 = !1, y7(y8, i, j), Math.floor(i / 2));
		1 === a7q ? (y8.fillStyle = bB.o2, y8.fillRect(l3, 0, l3, j)) : -1 === a7q && (y8.fillStyle = bB.oI, y8.fillRect(0, 0, l3, j)), y9(y8, i, j, 2);
		var l3 = (l3 = Math.floor(.25 * j)) < 2 ? 2 : l3,
			a6j = (y8.fillStyle = bB.no, Math.floor((j - 4) * a7r[1] / a7s[1]));
		0 < a6j && y8.fillRect(2, j - 2 - a6j, l3, a6j), 0 < (a6j = Math.floor((j - 4) * a7r[0] / a7s[0])) && y8.fillRect(i - 2 - l3, j - 2 - a6j, l3, a6j);
		l3 = (l3 = Math.floor(j / 8)) < 2 ? 2 : l3, yB(y8, Math.floor(.4 * j), 0, j, l3, .5, !1), yB(y8, Math.floor(i - 1.4 * j), 0, j, l3, .5, !0), a6j = 1.1 * j / a2m[0].width;
		y8.imageSmoothingEnabled = !0, y8.setTransform(a6j, 0, 0, a6j, (i - a6j * a2m[0].width) / 2, -.05 * j), y8.drawImage(a2m[+a6a], 0, 0), y8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a83() {
		a7x = -1, a6a = ah.a84(), aN.a4F(257), aN.a6Z(a6a), aw.hZ = !0, a75 = !0, a7u = 360;
		for (var fF, dt = 0, aB = al.kB - 1; 0 <= aB; aB--) bA.g9.jY(al.kC[aB]) || (dt += ag.gb[al.kC[aB]]);
		a6a ? a7s[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hh ? 9 === aD.kS && 8 === bg.kX[bh.ki()] ? a7s[0] = Math.max(dt, 1) : (fF = bL.du(100 * bh.kg(), aD.ju), fF = bL.hv(200 - 2 * fF, 40, 100), fF = bL.du(fF * dt, 100), a7s[0] = Math.max(fF,
			1)) : a7s[0] = Math.max(bL.du(3 * dt, 5), 1), a7s[1] = Math.max(dt - a7s[0], 1)
	}

	function a7z() {
		a7w = bf.k7(), a75 = !0, a7u = a7q = 0, a7t = [], aw.hZ = !1, aN.a05(247), a7r[0] = a7r[1] = 0, aN.a4F(673)
	}

	function y4() {
		return aR.a6E(aN.a6A()) ? __fx.settings.keybindButtons ? aR.ew - 2 * (j + bc.gap) : aR.ew - j - bc.gap : bC.a6E(aN.a6D()) ? bC.y4() - j - bc.gap : h.j - j - bk.a51() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a2m[aB] = bA.canvas.yi(ab.get(3), 8 - aB, bB.ot), a2m[aB] = bA.canvas.a2o(a2m[aB])
	}, this.dd = function() {
		a7w = -1e4, a7v = a7y = 0, a7x = -1, this.hZ = !1, a75 = a6a = !1, a7r = [a7q = a7u = 0, 0], a7s = [1, 1], a7t = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, y8 = canvas.getContext("2d", {
			alpha: !0
		}), mV()
	}, this.mU = function() {
		a75 && mV()
	}, this.h0 = function(eu, ew) {
		return !!this.hZ && !(eu < h.i - this.i - bc.gap || ew < y4() || (aD.gw || this.ha(aD.eX) && (aM.gx && aM.a23(), b8.hD.hb(eu > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j3 = function() {
		0 < a7v ? 0 === --a7v && a7z() : this.hZ ? 180 == --a7u && 3 * a7r[0] < a7s[0] ? a7z() : a7r[0] >= a7s[0] ? a6a ? bR.za.zt() : bR.za.zx() : a7r[1] >= a7s[1] ? a7v = 4 : a7u <= 0 && a7z() : ! function() {
			var a86 = bf.k7();
			if (a86 % 40 == 14) {
				if (a7y) return !(a86 < a7y) && !(a86 < a7w + 535) && (a7y = a86 + 1071, bA.g9.a3L()) ? (a83(), 1) : 0;
				(1 === al.kB || (aD.hh ? bh.kg() : ag.gb[lk[0]]) >= bL.du(96 * aD.ju, 100)) && (a7y = a86 + 535)
			}
			return
		}() && 0 <= a7x && (aN.yQ(250, L(106, [ag.yR[a7x]]), 673, a7x, bB.ni, bB.nf, -1, !0), a83())
	}, this.zz = function() {
		this.hZ && a7r[0] < a7s[0] && a7z()
	}, this.qA = function(player, a87) {
		var a88 = L(a87 ? 107 : 108, [ag.yR[player]]),
			a88 = (aN.yQ(450, a88, 257, player, a87 ? bB.o0 : bB.oF, bB.nf, -1, !0), a7t.push(player), a75 = !0, aD.kU ? Math.max(a7s[0], a7s[1]) : ag.gb[player]),
			a88 = Math.max(a88, 1);
		a87 ? a7r[0] += a88 : a7r[1] += a88, player === aD.eX && (a7q = a87 ? 1 : -1)
	}, this.uh = function() {
		var ew;
		this.hZ && (ew = y4(), ui.drawImage(canvas, h.i - this.i - bc.gap, ew))
	}, this.hc = function(player) {
		return !(!aD.kU && bf.k7() < a7w + 140 || 0 !== a7u || !bA.g9.gy(1) || !bA.g9.gz(player) || 10 <= jv[player] && !bA.g9.a3d(player, 9))
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
	var i, eu, a89, canvas, y8, hZ, iN, a46, a5c, a75, a8A = 11 / 12;

	function a8C() {
		var a7C = Math.floor(iN * (i - 2 * a89)),
			a8F = 1 + Math.floor(.0625 * aR.j),
			a8G = 1 + Math.floor(.3 * aR.j),
			a8H = Math.floor(.55 * aR.j);
		y8.clearRect(0, 0, i, aR.j), y8.fillStyle = bB.ne, y8.fillRect(0, 0, a89, aR.j), y8.fillRect(a89 + a7C, 0, i - a89 - a7C, aR.j), y8.fillStyle = iN < 1 / 3 ? "rgba(" + Math.floor(3 * iN * 130) + ",130,0,0.85)" : iN < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iN - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iN - 2 / 3) * 130) + ",0.85)", y8.fillRect(a89, 0, a7C, aR.j), y8.fillStyle = bB.ni, y8.fillRect(0, 0, i, 1), y8.fillRect(0, aR.j - 1, i, 1), y8
			.fillRect(0, 0, 1, aR.j), y8.fillRect(a89, 0, 1, aR.j), y8.fillRect(a89 + a7C, 0, 1, aR.j), y8.fillRect(i - a89, 0, 1, aR.j), y8.fillRect(i - 1, 0, 1, aR.j), y8.fillRect(Math.floor(.25 * aR.j) + a8G, Math.floor((aR.j - a8F) / 2), aR.j -
				2 * a8G, a8F), y8.fillRect(Math.floor(i - 1.25 * aR.j) + a8G, Math.floor((aR.j - a8F) / 2), aR.j - 2 * a8G - a8G % 2, a8F), y8.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8F) / 2), a8G, a8F, aR.j - 2 * a8G - a8G % 2),
			a46 = bA.g9.iM(aD.eX, aR.hH()), y8.fillText(bA.rZ.zF(a46) + " (" + bA.rZ.a3z(100 * iN, +(iN < .1)) + ")", Math.floor(.5 * i), a8H)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iN = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a1z(arg1);

	function a8M(a2L) {
		return !(1 < a2L && 1 === iN || (1 < a2L && a2L * iN - iN < 1 / 1024 ? a2L = (iN + 1 / 1024) / iN : a2L < 1 && iN - a2L * iN < 1 / 1024 && (a2L = (iN - 1 / 1024) / iN), iN = bL.hv(iN * a2L, 1 / 1024, 1), a8C(), 0))
	}

	function a8N(lN) {
		return iN !== (iN = bL.hv((lN - eu - a89) / (i - 2 * a89), 1 / 1024, 1)) && (a8C(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8C(), bf.dl = !0
	}, this.ew = 0, this.h1 = !1, this.dd = function() {
		hZ = !aD.hB && !aD.gw, a75 = !1, iN = .5, a46 = 0, this.h1 = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hw() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hx), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.hw() ? .65 : .389) * h.hx), i += 12 - i % 12, this.j = Math.floor(i / 12)), a89 = Math.floor(3 * this.j / 2), a5c =
			bA.qa.sP(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, ui), canvas.height = this.j, (y8 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5c, bA.qa.textBaseline(y8, 1), bA.qa.textAlign(y8, 1), this.a8B(), a8C()
	}, this.a8B = function() {
		eu = a0.a1.hw() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.ew = h.j - this.j - bk.a51() * bc.gap
	}, this.mU = function() {
		a75 && (a75 = !1, a8C())
	}, this.hZ = function() {
		return !(!hZ || aM.gx && eu < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6E = function(a8I) {
		return !!this.hZ() && eu + i > h.i - a8I - bc.gap
	}, this.a4D = function() {
		hZ = !aD.gw
	}, this.a7z = function() {
		hZ = !1
	}, this.hH = function() {
		return bL.hv(Math.floor(1024 * iN + .5) - 1, 0, 1023)
	}, this.a1w = function(lN, lO) {
		return this.hZ() && eu < lN && lN < eu + i && lO > this.ew
	}, this.h0 = function(lN, lO) {
		if (!this.hZ()) return !1;
		if (!(__fx.settings.keybindButtons && lO > this.ew - Math.floor(bc.gap / 4) - this.j && lO < this.ew - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lN - eu))) {
			if (!aR.a1w(lN, lO)) return !1;
			aS.nD = !1, ! function(sC, lN, lO) {
				if (function(lN, lO) {
						return eu < lN && lN < eu + a89 && lO > aR.ew
					}(lN, lO)) return a8M(a8A);
				if (function(lN, lO) {
						return eu + i - a89 < lN && lN < eu + i && lO > aR.ew
					}(lN, lO)) return a8M(1 / a8A);
				return sC.h1 = !0, a8N(lN)
			}(this, lN, lO) || (bf.dl = !0)
		}
		return !0
	}, this.a1z = function(nK) {
		0 !== aD.zy && this.hZ() && a8M(nK) && (bf.dl = !0)
	}, this.a1V = function(deltaY) {
		var nK;
		return !(0 === deltaY || !this.hZ()) && a8M(nK = 0 < deltaY ? (nK = 400 / (400 + deltaY)) < a8A ? a8A : nK : 1 / a8A < (nK = (400 - deltaY) / 400) ? 1 / a8A : nK)
	}, this.a1S = function(lN) {
		return !!this.h1 && a8N(lN)
	}, this.a1s = function() {
		this.h1 = !1
	}, this.j3 = function() {
		this.hZ() && a46 !== bA.g9.iM(aD.eX, this.hH()) && (a75 = !0)
	}, this.uh = function() {
		this.hZ() && (ui.drawImage(canvas, eu, this.ew), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ui, eu, this.ew)
	}
}

function d0() {
	var canvas, y8, a8O, font, a8P = 0,
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
			for (ui.fillStyle = bB.ne, ui.fillRect(eu, ew, i, j), ui.fillStyle = bB.o7, ui.fillRect(eu, ew + a8S * a8H, i, a8H), ui.fillStyle = bB.ni, ui.fillRect(eu, ew, 2, j), ui.fillRect(eu, ew, i, 2), ui.fillRect(eu + i - 2, ew, 2, j), aB =
				1; aB < en; aB++) ui.fillRect(eu, ew + aB * a8H, i, 2);
			for (ui.fillStyle = bB.ni, bA.qa.textAlign(ui, 1), bA.qa.textBaseline(ui, 1), ui.font = bA.qa.sP(0, .6 * a8H), eu += .5 * i, aB = 0; aB < en; aB++) ui.fillText(a8h(aB), eu, ew + (aB + .6) * a8H)
		}
		ui.drawImage(canvas, Math.floor(a8O.eu), Math.floor(a8O.ew))
	}

	function mV(sC) {
		var eu, n8, n9, a8H;
		y8.clearRect(0, 0, Math.floor(a8O.i), Math.floor(a8O.j)), y8.fillStyle = bB.ne, y8.fillRect(0, 0, Math.floor(a8O.i), Math.floor(a8O.j)), aD.nB && (y8.fillStyle = bB.o7, y8.fillRect(0, 0, Math.floor(.3 * a8O.i), Math.floor(a8O.j))), y8
			.fillStyle = bB.ni, y8.fillText("Hide UI", .15 * a8O.i, .5 * a8O.j), y8.fillRect(Math.floor(.3 * a8O.i - .5), 0, 2, Math.floor(a8O.j)), eu = .5 * a8O.i, y8.fillText("Replay Speed", eu, .31 * a8O.j), y8.fillText(a8h(a8S), eu, .69 * a8O.j),
			y8.fillRect(Math.floor(.7 * a8O.i - .5), 0, 2, Math.floor(a8O.j)), sC.a4l ? (eu = Math.floor(.02 * a8O.i), sC = Math.floor(.025 * a8O.i), n8 = Math.floor(.85 * a8O.i - eu - .5 * sC), n9 = Math.floor(.25 * a8O.j), a8H = Math.floor(a8O.j) -
				2 * n9, y8.fillRect(n8, n9, eu, a8H), y8.fillRect(n8 + eu + sC, n9, eu, a8H)) : function() {
				var i = Math.floor(.46 * a8O.j),
					j = Math.floor(.23 * a8O.j),
					eu = Math.floor(.85 * a8O.i - .5 * i + i / 12),
					ew = Math.floor(.5 * a8O.j - j);
				y8.beginPath(), y8.moveTo(eu, ew), y8.lineTo(eu + i, ew + j), y8.lineTo(eu, ew + (j << 1)), y8.fill()
			}(), y8.fillRect(0, 0, Math.floor(a8O.i), 2), y8.fillRect(0, 0, 2, Math.floor(a8O.j)), y8.fillRect(0, Math.floor(a8O.j) - 2, Math.floor(a8O.i), 2), y8.fillRect(Math.floor(a8O.i - 2), 0, 2, Math.floor(a8O.j))
	}

	function a8h(aB) {
		return 5 === aB ? "Normal" : "" + a8R[aB]
	}
	this.a4l = !1, this.dd = function() {
		aD.gw && (a8S = 5, this.a4l = !1, a8Q = !1, a8O = new rB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8T = function() {
		return a8R[a8S]
	}, this.y4 = function() {
		return a8O.ew
	}, this.a6E = function(a8I) {
		return !!aD.gw && a8O.eu + a8O.i > h.i - a8I - bc.gap
	}, this.resize = function() {
		aD.gw && (a8O.resize(), a8O.ew -= (bk.a51() - 1) * bc.gap, font = bA.qa.sP(0, .3 * a8O.j), (canvas = document.createElement("canvas")).width = Math.floor(a8O.i), canvas.height = Math.floor(a8O.j), (y8 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qa.textAlign(y8, 1), bA.qa.textBaseline(y8, 1), mV(this))
	}, this.a22 = function(a8U) {
		0 === aD.zy || t.hZ() || a8U !== aD.nB && (aD.nB = a8U, bh.resize(), bf.dl = !0, aD.gw) && (a8P = bf.eM + 2e3, mV(this))
	}, this.h0 = function(eu, ew) {
		if (!aD.gw) return !1;
		if (eu < a8O.eu || ew < a8O.ew || eu > a8O.eu + a8O.i) return a8Q && function(sC, eu, ew) {
			var en = a8R.length,
				a8H = Math.floor(.5 * a8O.j),
				j = en * a8H,
				n8 = Math.floor(Math.floor(a8O.eu) + .3 * a8O.i - .5),
				j = Math.floor(Math.floor(a8O.ew) - j),
				i = Math.floor(.4 * a8O.i + 2.5);
			return a8Q = !1, bf.dl = !0, eu < n8 || n8 + i < eu || ew < j || (a8S = a8Y(0, Math.floor((ew - j) / a8H), en - 1), mV(sC)), !0
		}(this, eu, ew);
		if ((eu -= a8O.eu) < .3 * a8O.i) a8Q = !1, this.a22(!aD.nB);
		else {
			if (eu < .7 * a8O.i) return a8Q = !a8Q, bf.dl = !0;
			this.a24(!1)
		}
		return !0
	}, this.a24 = function(a8W) {
		2 === aD.zy ? (this.a22(!1), t.u(3)) : (a8Q = !1, this.a4l = !this.a4l, this.a4l ? (aM.gx && aM.a23(), a0.a1.setState(1)) : a8W || aM.a5i(), bf.dl = !0, mV(this))
	}, this.a8X = function() {
		this.a4l = !1, aM.a5i(), bf.dl = !0, mV(this)
	}, this.a1l = function(eu, ew) {
		return !!aD.nB && (0 <= aM.h0(eu, ew) || (aD.gw ? ((bf.eM > a8P || !this.h0(eu, ew)) && aS.h0(eu, ew), bf.dl = !0, a8P = bf.eM + 2e3) : aS.h0(eu, ew)), !0)
	}, this.j3 = function() {
		aD.gw && aD.nB && bf.eM > a8P - 1e3 && bf.eM < a8P && (bf.dl = !0)
	}, this.a06 = function() {
		aD.gw && (this.a4l = !1, bf.dl = !0, mV(this))
	}, this.uh = function() {
		if (aD.gw) {
			if (aD.nB) {
				if (bf.eM > a8P) return;
				if (bf.eM > a8P - 1e3) return ui.globalAlpha = a8Y(0, (1e3 - (bf.eM - (a8P - 1e3))) / 1e3, 1), a8Z(), void(ui.globalAlpha = 1)
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
					.lineWidth = a92, a8j[aB].fillStyle = bB.ni, a8j[aB].strokeStyle = bB.ni, a8j[aB].beginPath(), a8j[aB].arc(i / 2, i / 2, i / 2 - a92, 0, 2 * Math.PI), a8j[aB].stroke(), yB(a8j[aB], 0, 0, i, a92, .3, 0 === aB)
			}()
	}, this.y3 = function() {
		return -iO / hy
	}, this.y4 = function() {
		return -iP / hy
	}, this.nN = function(a8p, i4) {
		iO = hy * a8p - i4
	}, this.nO = function(a8q, i5) {
		iP = hy * a8q - i5
	}, this.h0 = function(a8o, a6F) {
		return aD.nB || ! function(a8o, a6F) {
			return Math.pow(a8o - (eu + i / 2), 2) + Math.pow(a6F - (ew + i / 2), 2) < i * i / 4 || Math.pow(a8o - (eu + i / 2), 2) + Math.pow(a6F - (ew + 2 * i), 2) < i * i / 4
		}(a8o, a6F) || bj.eK.data[8].value ? (aH.nQ() && (this.nD = !0, a8k = a8o, a8l = a6F), !1) : a6F < ew + 1.25 * i ? this.a1V(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1V(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1S = function(a8o, a6F) {
		var a8r, a8s, i7, iA;
		return !aH.nQ() || (a8r = iO, a8s = iP, iO += i7 = a8k - a8o, iP += iA = a8l - a6F, af.a1S(i7, iA), this.a8t(), a8k = a8o, a8l = a6F, a8r !== iO) || a8s !== iP
	}, this.a1V = function(lN, lO, deltaY) {
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
		var a2L;
		eR = a2L = (a2L = 1024 < (a2L = eR) * hy ? 1024 / hy : a2L) * hy < .125 ? .125 / hy : a2L, af.zoom(eR, eu, ew),
			function(a2L, lN, lO) {
				hy *= a2L, iO = (iO + lN) * a2L - lN, iP = (iP + lO) * a2L - lO, aS.a8t()
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
	}, this.uh = function() {
		bj.eK.data[8].value || (ui.drawImage(a8i[0], eu, ew), ui.drawImage(a8i[1], eu, Math.floor(ew + 3 * i / 2)))
	}
}

function cK() {
	var g, a93, a94, a95, gap, a96, a97, a98, a99, a9A, a5c, a9B, gs, a9C, a7C, a9D, a9E;

	function a9I() {
		a95 = Math.floor(.2 * (a0.a1.hw() ? .07 : .035) * h.hx), a95 = a6C(a0.a1.hw() ? 3 : 1, a95);
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
		ui.fillRect(a93 + h.i - (aB + 1) * a95, h.j - a9T, a7C, a9T)
	}

	function a9Q() {
		var gL;
		0 !== (a99 = 8 === aa.a19() ? -1 : a99) ? (a9E = (new Date).getTime(), clearInterval(a9D), a9D = -1) : (gL = g[1] / 864e3, -1 !== a9E && (gL += ((new Date).getTime() - a9E) * g[1] / 864e5, a9E = -1), 0 < gL && (g[0] += Math.floor(gL), bf
			.dl = !0))
	}
	this.a9F = !1, this.dd = function() {
		a9E = a9D = -1, a99 = -(a9C = 1), this.a9G = !1, gs = 0, a9B = new Date, a93 = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a94 = Math.floor(.15 * h.j), a9A = (a9A = Math.floor((a0.a1.hw() ? .018 : .0137) * h.hx)) < 2 ? 2 : a9A, a5c = bA.qa.sP(1, a9A), a9I()
	}, this.a9J = function(a9K) {
		var aB;
		for (this.a9F = !0, aB = 0; aB < a9K.length; aB++) g.unshift(a9K[aB]);
		a9I(), bf.dl = !0
	}, this.a9N = function() {
		a9M()
	}, this.a1S = function(eu, ew) {
		ew > h.j - .6 * a94 ? this.a9G ? eu !== gs && (a93 += eu - gs, gs = eu, a9M(), a9P(eu), this.a9G = -1 !== a99, bf.dl = !0) : a9P(eu) && (bf.dl = !0) : this.rb()
	}, this.rb = function() {
		-1 !== a99 && (this.a9G = !1, a99 = -1, bf.dl = !0)
	}, this.a1V = function(eu, deltaY) {
		-1 !== a99 && (a93 += Math.floor(deltaY), a9M(), a9P(eu), bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		this.a1S(eu, ew), -1 !== a99 && (gs = eu, this.a9G = !0)
	}, this.a1r = function() {
		-1 !== a99 && (this.a9G = !1)
	}, this.uh = function() {
		ui.fillStyle = bB.nl;
		for (var a9U, month, dt, sx, a9X, a9Y, n9, a9Z, a9a, aB = a98; a97 <= aB; aB--) a9R(aB);
		this.a9F && 0 === a97 && (ui.fillStyle = bB.oI, a9R(0)), -1 !== a99 && (ui.fillStyle = bB.nk, a9R(a99)), -1 !== a99 && (ui.font = a5c, bA.qa.textBaseline(ui, 2), (dt = new Date).setTime(a9B.getTime() - 1e3 * a99 * 60 * 60 * 24), month =
			"month", a9U = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a9U = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a9U = a9U + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a99] ? L(109) : L(110), month = bA.rZ.zF(g[a99]) + " " + month, dt = Math.floor(ui.measureText(a9U).width), sx = Math
			.floor(ui.measureText(month).width), a9X = Math.floor(.5 * (dt + a9A)), a9Y = (a9Y = a93 + h.i - (a99 + 1) * a95) < a9X ? a9X : a9Y > h.i - a9X ? h.i - a9X : a9Y, n9 = h.j - Math.floor(a96 * Math.pow(g[a99], a9C)), a9Z = Math
			.floor(1.1 * a9A), a9a = n9 > h.j - a9Z ? h.j - a9Z : n9, ui.fillStyle = bB.nf, ui.fillRect(h.i - sx - a9A, a9a - a9Z, sx + a9A, a9Z), ui.fillRect(a9Y - a9X, h.j - a9Z, dt + a9A, a9Z), ui.fillStyle = bB.ni, bA.qa.textAlign(ui, 2),
			ui.fillText(month, Math.floor(h.i - .5 * a9A), a9a), bA.qa.textAlign(ui, 1), ui.fillText(a9U, a9Y, h.j), ui.strokeStyle = bB.nm, ui.lineWidth = 1, ui.beginPath(), ui.moveTo(0, n9), ui.lineTo(h.i, n9), ui.closePath(), ui.stroke())
	}
}

function cL() {
	var a5c, i, ew, a9b, a9c, canvas, y8, a75, a3R, a9d, a9e, a9f, a9g;
	this.eu = 0, this.j = 0, this.dd = function() {
		a9c = aD.a4L, a9e = "rgba(0,100,0,0.8)", a9f = "rgba(150,0,0,0.8)", a75 = a9d = !0, a3R = ag.gp[aD.eX], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .305 : .24) * h.hx), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5c = bA.qa.sP(1, Math.floor(.8 * this.j)), a9g = Math.floor(.5 * this.j), bS.wR.font = a5c, ew = bc.gap, a9b = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (y8 = canvas.getContext("2d", {
			alpha: !0
		})).font = a5c, bA.qa.textBaseline(y8, 1), bA.qa.textAlign(y8, 1), this.a9h()
	}, this.a7Y = function() {
		return a0.a1.hw() && h.i < 1.2 * h.j
	}, this.a8B = function() {
		this.a7Y() ? this.eu = h.i - i - bc.gap : this.eu = Math.floor(aV.a9i() + (h.i - aV.a9i() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mU = function() {
		a75 && (a75 = !1, this.a9h())
	}, this.a9h = function() {
		y8.clearRect(0, 0, i, this.j), y8.fillStyle = a9d ? a9e : a9f, y8.fillRect(0, 0, i, this.j), y8.fillStyle = bB.nk, this.a9j(), this.a9k(), y8.fillStyle = ag.gp[aD.eX] >= ae.jq(aD.eX) ? bB.oF : bB.ni, y8.fillText(bA.rZ.zF(a3R), Math.floor(
			i / 2), a9g), y8.fillStyle = bB.ni, y8.fillRect(0, 0, i, 1), y8.fillRect(0, 0, 1, this.j), y8.fillRect(0, this.j - 1, i, 1), y8.fillRect(i - 1, 0, 1, this.j)
	}, this.a9j = function() {
		var f8 = bf.k7() % 100,
			f8 = (f8 = 9 - bL.du(f8 -= f8 % 10, 10), Math.floor(f8 * (this.j - a9b) / 9));
		y8.fillRect(0, f8, a9b, this.j - f8), y8.fillRect(i - a9b, f8, a9b, this.j - f8)
	}, this.a9k = function() {
		y8.fillRect(a9b, this.j - a9b, Math.floor((i - 2 * a9b) * ag.gp[aD.eX] / a9c), a9b)
	}, this.j3 = function() {
		var gL = aD.eX;
		bA.g9.gz(gL) && (gL = ag.gp[gL] - ag.a3Q[gL], a3R !== gL ? (a9c = a6C(gL, a9c), a9d = a3R < gL && 10 <= gL, a3R = gL, a75 = !0) : bf.k7() % 10 == 9 && (a75 = !0))
	}, this.uh = function() {
		0 === ag.mi[aD.eX] || aD.hB || 2 === ag.a3I[aD.eX] || ui.drawImage(canvas, this.eu, ew)
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
			a9r.fillRect(0, 0, a9l, bc.yw),
			a9r.fillRect(0, 0, bc.yw, a7o),
			a9r.fillRect(a9l - bc.yw, 0, bc.yw, a7o),
			a9r.fillRect(0, a7o - bc.yw, a9l, bc.yw), a9r.font = a9m, bA.qa.textBaseline(a9r, 1), bA.qa.textAlign(a9r, 1), a9r.fillText(aAD, Math.floor((a9l + a9w - 22) / 2), Math.floor(a9u + a9n / 2));
		__fx.playerList.drawButton(a9r, 12, 12, a9w - 22);
		var f6, gM = playerPos < position + a9p - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9p)
				position = (result.length > a9p ? result.length : a9p) - a9p;
			//if (position >= result.length) position = result.length - 1;
			for (a9r.font = a9o, bA.qa.textAlign(a9r, 0), f6 = a9p - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAI(lk[pos]), aAJ(f6, pos, lk[pos]);
			}
			for (bA.qa.textAlign(a9r, 2), f6 = a9p - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAI(lk[pos]), aAK(f6, lk[pos]);
			}
		} else {
			for (a9r.font = a9o, bA.qa.textAlign(a9r, 0), f6 = a9p - gM; 0 <= f6; f6--)
				aAI(lk[f6 + position]), aAJ(f6, f6 + position, lk[f6 + position]);
			for (bA.qa.textAlign(a9r, 2), f6 = a9p - gM; 0 <= f6; f6--)
				aAI(lk[f6 + position]), aAK(f6, lk[f6 + position]);
		}
		2 == gM && (aAI(aD.eX), bA.qa.textAlign(a9r, 0), aAJ(a9p - 1, jv[aD.eX], aD.eX), bA.qa.textAlign(a9r, 2), aAK(a9p - 1, aD.eX)), 0 === position && (gM = .7 * a9x / ab.get(4).height, a9r.setTransform(gM, 0, 0, gM, Math.floor(a9y + .58 * a9x +
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

	function aAJ(aAQ, a3f, aB) {
		a9r.fillText(aA2[a3f], a9y, Math.floor(a9u + a9n + (aAQ + .5) * a9x)), 1 === ag.a3I[aB] && (a9r.font = "italic " + a9o);
		a3f = Math.floor(a9u + a9n + (aAQ + .5) * a9x);
		a9r.fillText(ag.yR[aB], a9z, a3f), 0 !== ag.a3I[aB] && (a9r.font = a9o), aB < aD.kA && 2 !== ag.a3I[aB] || a9r.fillRect(a9z, a3f + .35 * aAB, aA1[aB], Math.max(1, .1 * aAB))
	}

	function aAK(aAQ, aB) {
		a9r.fillText(ag.gb[aB], aA0, Math.floor(a9u + a9n + (aAQ + .5) * a9x))
	}

	function aAZ(ew) {
		return (ew -= bc.gap + a9w) < 0 ? Math.floor(ew / a9x) - 1 : ew < (a9p - 1) * a9x ? Math.floor(ew / a9x) : ew < a7o - a9w ? a9p - 1 : (ew -= a7o - a9w, a9p + Math.floor(ew / a9x))
	}

	function yv(eu, ew) {
		return eu >= bc.gap && eu < bc.gap + a9l && ew >= bc.gap && ew < bc.gap + a7o
	}
	this.dd = function() {
			var aB;
			for (aA8 = !1, aAA = aA9 = aA7 = 0, aA6 = -1, a9p = a0.a1.hw() ? 6 : 10, aAC = (position = 0) === (aAC = bj.eK.data[11].value) ? 10 : 1 === aAC ? 5 : 1, aA5 = !1, aA3 = new Uint16Array(a9p + 1), aA4 = new Uint32Array(a9p + 1), a9t = aD
				.ek, lk = new Uint16Array(a9t), jv = new Uint16Array(a9t), aB = a9t - 1; 0 <= aB; aB--) lk[aB] = aB, jv[aB] = aB;
			this.resize(!0), aA1 = new Uint16Array(aD.ek);
			var aAE = Math.floor(a9l - a9z - a9y - a9s);
			for (aA2 = new Array(aD.ek), a9r.font = a9o, aB = aD.ek - 1; 0 <= aB; aB--) aA2[aB] = aB + 1 + ".", ag.yR[aB] = bA.y8.a2y(ag.a0c[aB], a9o, aAE), aA1[aB] = Math.floor(a9r.measureText(ag.yR[aB]).width);
			aAF()
		}, this.resize = function(dd) {
			if (a7o = a0.a1.hw() ? (a9l = Math.floor(.335 * h.hx), Math.floor(a9p * a9l / 8)) : (a9l = Math.floor(.27 * h.hx), Math.floor(a9p * a9l / 10)), a9l = Math.floor(.97 * a9l), (a9q = document.createElement("canvas")).width = a9l, a9q
				.height = a7o, a9r = a9q.getContext("2d", {
					alpha: !0
				}), a9u = .025 * a9l, a9n = .16 * a9l, a9v = 0 * a9l, a9w = Math.floor(.45 * a9u + a9n), a9x = (a7o - a9n - 2 * a9u - a9v) / a9p,
				a9q.height = a7o += a9x, __fx.leaderboardFilter.tabBarOffset = Math.floor(a9x * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7o - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9l,
				a9m = bA.qa.sP(1, Math.floor(.55 * a9n)), aAB = Math.floor((a0.a1.hw() ? .67 : .72) * a9x), a9o = bA.qa.sP(0, aAB), a9r.font = a9o, a9y = Math.floor(.04 * a9l), a9z = Math.floor((a0.a1.hw() ? .195 : .18) * a9l), a9s = Math.floor(a9r
					.measureText("00920600").width), a9r.font = a9m, aA0 = a9l - a9y, !dd) {
				a9r.font = a9o;
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aA1[aB] = Math.floor(a9r.measureText(ag.yR[aB]).width);
				aAF()
			}
			aAD = bA.y8.a2y(L(111), a9m, .96 * a9l)
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
			return !!yv(eu, ew) && ((__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, a9w - 22, a9w - 22) && __fx.playerList.display(ag.a0c), true) &&
				!(ew - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eu - bc.gap)) && (aA7 = bf.eM, aA8 = !0, aA9 = aAA = aAZ(ew), bJ.a25() && (eu = a8Y(-1, aAA, a9p), aA6 !== (eu = eu === a9p ?
					-1 : eu)) && (aA6 = eu, aAF(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAF(), bf.dl = !0;
		},
		this.a1S = function(eu, ew) {
			if (__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, a9w - 22, a9w - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAF(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAF(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eu, ew, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eu - bc.gap
				)) return;
			var dt, aAY = aAZ(ew);
			return aA8 ? (dt = position, (position = a8Y(0, position += aA9 - aAY, aD.ek - a9p)) !== dt && (aAY = (aAY = a8Y(-1, aA9 = aAY, a9p)) !== a9p && yv(eu, ew) ? aAY : -1, aA6 = aAY, aAF(), bf.dl = !0), !0) : (aAY = (aAY = a8Y(-1, aAY,
				a9p)) === a9p || !yv(eu, ew) || bJ.a25() ? -1 : aAY, aA6 !== aAY && (aA6 = aAY, aAF(), bf.dl = !0))
		}, this.a1r = function(eu, ew) {
			if (!aA8) return !1;
			aA8 = !1;
			var aAY = aAZ(ew);
			var isEmptySpace = false;
			return bJ.a25() && -1 !== aA6 && (aA6 = -1, aAF(), bf.dl = !0), bf.eM - aA7 < 350 && aAA === aAY && -1 !== (aAY = (aAY = a8Y(-1, aAY, a9p)) !== a9p && yv(eu, ew) ? aAY : -1) && (eu = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lk[__fx.leaderboardFilter.filteredLeaderboard[aAY + position] ?? (isEmptySpace = true, jv[aD.eX])]) : lk[aAY + position]), aAY === a9p - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jv[aD.eX]) >=
				position + a9p - 1 && (eu = aD.eX), !isEmptySpace && aD.hh && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eu, ag.a0c, aD.kU), 0 !== ag.mi[eu] && !isEmptySpace) && aH.n3(eu, 800, !1, 0), !0
		}, this.a1V = function(eu, ew, deltaY) {
			var aAa;
			return !(aA8 || aD.nB || (aAa = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !yv(eu, ew)) || (eu = (eu = a8Y(-1, aAZ(ew), a9p)) === a9p || bJ.a25() ? -1 : eu, 0 < deltaY ? position < aD.ek - a9p && (position += Math.min(aD.ek - a9p -
				position, aAa), aA6 = eu, aAF(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aAa), aA6 = eu, aAF(), bf.dl = !0), 0))
		}, this.uh = function() {
			ui.drawImage(a9q, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, y8, eu, ew, a9T, aAb, gap, aAc, fontSize, aAd, aAe, aAf, aAg, aAh, aAi, aAj, aAk, aAl;

	function aAp() {
		y8.clearRect(0, 0, aW.i, aW.j), y8.fillStyle = bB.nf, y8.fillRect(0, 0, aW.i, aW.j), y8.fillStyle = bB.o2, eR = 0 < aAj ? aAj : Math.sqrt(aAg[4] / 1e4), y8.fillRect(0, aW.j - a9T - 1, Math.floor(eR * aW.i), a9T), y8.fillStyle = bB.ni, y8
			.fillRect(0, 0, aW.i, 1), y8.fillRect(0, 0, 1, aW.j), y8.fillRect(aW.i - 1, 0, 1, aW.j), y8.fillRect(0, aW.j - 1, aW.i, 1), y8.fillRect(0, aW.j - a9T - 1, aW.i, 1);
		for (var eR, aAr, dt = 0, aB = 0; aB < aAf.length; aB++) aAh[aB] ? (bA.qa.textAlign(y8, 0), aAr = Math.floor((aAb - a9T + 2 * aAc) * (aB - dt + 1) / (aAf.length + 1) - .7 * aAc), y8.fillText(aAf[aB], gap, aAr), bA.qa.textAlign(y8, 2), 5 ===
			aB && 0 !== ag.mi[aD.eX] && ag.gp[aD.eX] >= ae.jq(aD.eX) ? (y8.fillStyle = bB.oc, y8.fillText(aAn(aB), aW.i - gap, aAr), y8.fillStyle = bB.ni) : y8.fillText(aAn(aB), aW.i - gap, aAr)) : dt++
	}

	function aAn(aB) {
		return aB < 3 ? aAg[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rZ.a3z(aAg[aB] / 100, 2) : aB < 7 ? bA.rZ.zF(aAg[aB]) : aB === 7 ? aW.aAs(aAg[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gb, aD.eX) : __fx.utils.getDensity(aD.eX)
	}

	function aAm() {
		ag.gb[aD.eX] !== aAg[6] && (aAg[6] = ag.gb[aD.eX], aAd++)
	}
	this.dd = function() {
		aAj = aAk = 0, (aAe = new Array(8))[0] = L(112), aAe[1] = aD.kU ? L(113) : L(114), aAe[2] = L(115), aAe[3] = L(116), aAe[4] = L(117), aAe[5] = L(118, 0, "Interest"), aAe[6] = L(119), aAe[7] = L(120),
			aAe.push("Max Troops", "Density"), // add aAe
			(aAf = new Array(aAe.length)).fill(""), (aAg = new Array(aAe.length))[0] = aD.kU ? 0 : aD.kA, aAg[1] = aD.kU ? al.kB : aD.kW, aAg[2] = aD.a00, aAg[3] = 0, aAg[4] = bL.du(1e4 * ag.gb[0], Math.max(aD.ju, 1)), aAg[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.eX], 64), aAg[6] = 0, aAm(), aAg[7] = 0, aAi = aAn(6), (aAh = new Array(aAe.length)).fill(!0), aAl = 0, aAl =
			aD.kU ? (aAh[0] = !1, aAh[2] = !1, aAh[3] = !1, 3) : (aAh[3] = !1, 1), aAd = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hw() ? .1646 : .126) * 1.25 * h.hx), this.j = Math.floor(1.18 * this.i), a9T = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAc = .04 * this.i, aAb = this.j, this.j -= Math.floor(aAl * (this.j -
			2 * a9T) / aAe.length), fontSize = Math.floor(.7 * (aAb - a9T) / aAe.length);
		var a5c = bA.qa.sP(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5c, i) {
				for (var aB = 0; aB < aAf.length; aB++) aAf[aB] = bA.y8.a2y(aAe[aB], a5c, i)
			}((y8 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5c, .575 * this.i), bA.qa.textBaseline(y8, 1), y8.lineWidth = 1, this.a4E(), this.a8B(), aU.a8B(), aAp()
	}, this.a8B = function() {
		eu = h.i - this.i - bc.gap
	}, this.aAq = function() {
		ew = bc.gap
	}, this.a4E = function() {
		ew = bc.gap + (aU.a7Y() && 0 !== ag.mi[aD.eX] && !aD.hB ? aU.j + bc.gap : 0)
	}, this.mU = function(bu) {
		(bu || 100 <= aAd) && (aAd = 0, aAp())
	}, this.a4x = function() {
		return aAg[7]
	}, this.aAs = function(value) {
		var l3 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l3) / 1e3);
		return value < 10 ? l3 + ":0" + value : l3 + ":" + value
	}, this.j3 = function() {
		var aB3, per;
		aAh[0] && aD.a01 - aD.a00 !== aAg[0] && (aAg[0] = aD.a01 - aD.a00, aAd++), al.kB - aAg[0] !== aAg[1] && (aAg[1] = al.kB - aAg[0], aAd++), this.mM(), (aB3 = ae.aB4(aD.eX)) !== aAg[5] && (aAg[5] = aB3, aAd++), aAm(), aAg[7] += bf.aB5, aB3 =
			aAn(7), aAi !== aB3 && (aAi = aB3, aAd += 100), aB3 = aD.hh ? bh.kg() : ag.gb[lk[0]], per = bL.du(1e4 * aB3, Math.max(aD.ju, 1)), aAg[3] = aB3, aAg[4] !== per && (aAd++, aAg[4] = per), 8 === aD.kS && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.g9.gz(aB)) return bR.za.zx(), 1;
				return
			}() || aAg[3] < aD.ju || ! function() {
				for (var aB = al.kB - 1; 0 <= aB; aB--)
					if (0 < ag.gF[al.kC[aB]].length) return;
				return 1
			}() || bN.kx.aB2().length || bR.za.zx()
	}, this.mM = function() {
		aAh[2] && aD.a00 !== aAg[2] && (aAg[2] = aD.a00, aAd += 2 === aD.zy ? 100 : 1)
	}, this.aAz = function() {
		return aAg[3] === aD.ju
	}, this.aB6 = function(aB) {
		var tD, aB7, dt;
		return 2 !== aD.zy && (aB % 2 == 1 && (aV.mU(1, 1), bf.dl = !0), aB === aD.a4N ? (aAj = 0, aAp(), !1) : (-1 !== aB || 0 !== aAk) && (aB7 = aAj, aAj = aD.gw ? aB / aD.a4N : (dt = performance.now(), 0 <= aB && (tD = dt - 392 * aB, aAk =
			0 === aB || tD < aAk ? tD : aAk), 1 < (aAj = (dt - aAk) / (392 * aD.a4N)) ? 1 : aAj), aAp(), aAj !== aB7))
	}, this.uh = function() {
		ui.drawImage(canvas, eu, ew)
	}
}

function cO() {
	var hZ, aB8, i, j, a8H, aB9, aBA, a7Z, canvas, mv, aBB;

	function y4() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aBB = hZ = !1, a8H = .61, aB9 = .07, aBA = .09, mv = a7Z = j = 0
	}, this.resize = function() {
		var y8, n8, f8, aBG, aBH, a5h;
		hZ && (i = aBC(i = a0.a1.hw() ? Math.floor(.69 * h.hx) : Math.floor(.5 * h.hx), a6C(h.i - 2 * bc.gap, 10)), i = aBC(i, Math.floor(3.57 * a6C(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, y8 = canvas.getContext("2d", {
				alpha: !0
			}), n8 = Math.floor(1 + j / 40), y8.clearRect(0, 0, i, j), y8.fillStyle = bB.nf, y8.fillRect(n8, n8, i - 2 * n8, j - 2 * n8), y8.lineJoin = "bevel", y8.lineWidth = 2 * n8, y8.strokeStyle = bB.ni, y8.strokeRect(n8, n8, i - 2 * n8,
				j - 2 * n8), y8.imageSmoothingEnabled = !1, f8 = ab.get(aB8), aBG = f8.width, a5h = (1 === aB8 ? .85 : 21 === aB8 ? .666 : .9) * a8H * j / (aBH = f8.height), y8.setTransform(a5h, 0, 0, a5h, Math.floor((i - a5h * aBG) / 2),
				Math.floor((j - a5h * aBH) / 2)), y8.drawImage(f8, 0, 0), y8.setTransform(1, 0, 0, 1, Math.floor(i - aBA * j - aB9 * j - n8), Math.floor(n8 + aB9 * j)),
			function(y8, en) {
				y8.lineWidth = Math.floor(1 + j / 80), y8.strokeStyle = bB.ni, y8.beginPath(), y8.moveTo(0, 0), y8.lineTo(en, en), y8.moveTo(0, en), y8.lineTo(en, 0), y8.stroke()
			}(y8, Math.floor(aBA * j)), y8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fF, aBE, a84, aBF) {
		hZ || aBF && aBB || (aB8 = a84 ? 21 : fF ? 1 : 2, hZ = aBB = !0, this.resize(), aL.rr(), aR.a7z(), mv = bf.eM, a7Z = aBE ? 1 : 0)
	}, this.j3 = function() {
		!hZ || 1 <= a7Z || (a7Z = 1 < (a7Z += 5e-4 * (bf.eM - mv)) ? 1 : a7Z, mv = bf.eM, bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		return !(!hZ || a7Z <= 0 || (eu -= Math.floor((h.i - i) / 2), ew -= y4(), eu < 0) || ew < 0 || i < eu || j < ew || (i - j / 3 < eu && ew < j / 3 && (hZ = !1, bf.dl = !0), 0))
	}, this.uh = function() {
		!hZ || a7Z <= 0 || (ui.globalAlpha = a7Z, ui.drawImage(canvas, Math.floor((h.i - i) / 2), y4()), ui.globalAlpha = 1)
	}
}

function dN() {
	var aBJ, aBK = new Uint8Array(5),
		aBL = new Uint8Array(5);
	this.aBM = new aBN, this.dd = function() {
		for (var fF = bj.eK.data[119].value, aB = 0; aB < aBK.length; aB++) aBK[aB] = (fF >> 2 * aB) % 4
	}, this.a4Z = function() {
		aBJ = [L(121), "", L(122, [bX.aBO[28]]), L(123, [bX.aBO[26]]), L(124, [bX.aBO[0]])], this.aBM.dd()
	}, this.j3 = function() {
		this.aBM.j3()
	}, this.a5L = function(id) {
		1 < id && bJ.r2() || ! function(e8) {
			if (3 === aBK[e8] || 1 === aBL[e8]) return;
			if (aBL[e8] = 1, !(Math.random() < .6)) {
				aBK[e8]++;
				for (var fF = 0, aB = 0; aB < aBK.length; aB++) fF += aBK[aB] << 2 * aB;
				bj.s2.s3(119, fF)
			}
			return 1
		}(id) || aN.a6I(aBJ[id])
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
				var qS = aN.a6e(956);
				if (qS) {
					if (bA.g9.l6(qS.player)) return 1;
					aN.a6d(956, 0)
				}
				return
			}() && (-1 === (gL = (aD.hh ? function() {
				var id = bh.ki(),
					en = al.kB;
				if (bg.kX[id])
					for (var zm = al.kC, el = bg.el, aB = 0; aB < en; aB++) {
						var gL = zm[aB];
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
				var qS = aN.a6e(957);
				if (qS && qS.a68) {
					if (ac.ee(qS.a68.eZ << 2)) return 1;
					aN.a6d(957, 0)
				}
				return
			}() : (aN.yQ(0, L(125, [ag.yR[gL]]), 956, gL, bB.ni, bB.nf, -1, !0), 0)))) {
			var en = ao.il.lI;
			if (0 !== en)
				for (var eK = ao.il.eK, aB = 0; aB < en; aB++) {
					var eZ = eK[aB];
					if (ac.ee(eZ << 2)) return void aN.yQ(0, L(126, [bM.ev(eZ), bM.ex(eZ)]), 957, 0, bB.ni, bB.nf, -1, !0, void 0, {
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
			aBd = bA.qa.qj(bc.sR),
			hj = bA.qa.qj(Math.max(bA.qa.rt(.012), 8));
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
	this.aBe = !1, this.nY = !1, this.a4I = !1, this.aBf = [0, 0, 0, 0], this.aBg = function() {
		var n8, n9, nL, nM;
		this.a4I = this.a4I || this.nY, (this.nY || this.aBe && this.a4I) && (n8 = ba.aBh[0], n9 = ba.aBh[1], nL = ba.aBh[2], nM = ba.aBh[3], n8 = n8 < this.aBf[0] ? this.aBf[0] : n8, n9 = n9 < this.aBf[1] ? this.aBf[1] : n9, nL = nL > this.aBf[
				2] ? this.aBf[2] : nL, nM = nM > this.aBf[3] ? this.aBf[3] : nM, this.nY = !1, this.aBe = !1, n8 === this.aBf[0] && n9 === this.aBf[1] && nL === this.aBf[2] && nM === this.aBf[3] ? this.a4J() : n8 <= nL && n9 <= nM && a4b
			.putImageData(a4c, 0, 0, n8, n9, nL - n8 + 1, nM - n9 + 1))
	}, this.a4J = function() {
		this.a4I && this.aBf[2] >= this.aBf[0] && this.aBf[3] >= this.aBf[1] && a4b.putImageData(a4c, 0, 0, this.aBf[0], this.aBf[1], this.aBf[2] - this.aBf[0] + 1, this.aBf[3] - this.aBf[1] + 1), this.a4I = !1
	}, this.a09 = function() {
		this.aBf[2] >= this.aBf[0] && this.aBf[3] >= this.aBf[1] && a4b.putImageData(a4c, 0, 0, this.aBf[0], this.aBf[1], this.aBf[2] - this.aBf[0] + 1, this.aBf[3] - this.aBf[1] + 1), this.a4I = !1
	}, this.dd = function() {
		var eu, ew;
		this.aBe = !1, this.nY = !1, this.a4I = !1, this.aBf[0] = bS.ey, this.aBf[1] = bS.ez, this.aBf[2] = this.aBf[3] = 0;
		loop: for (eu = 1; eu < bS.ey - 1; eu++)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBi[ac.xb(eu, ew) + 2]) {
					this.aBf[0] = eu;
					break loop
				} loop: for (ew = 1; ew < bS.ez - 1; ew++)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBi[ac.xb(eu, ew) + 2]) {
					this.aBf[1] = ew;
					break loop
				} loop: for (eu = bS.ey - 2; 0 < eu; eu--)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBi[ac.xb(eu, ew) + 2]) {
					this.aBf[2] = eu;
					break loop
				} loop: for (ew = bS.ez - 2; 0 < ew; ew--)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBi[ac.xb(eu, ew) + 2]) {
					this.aBf[3] = ew;
					break loop
				}
	}
}

function L(value, aBj, vF) {
	var qH = "number" == typeof value ? b7.aBk[value] : value;
	if (vF && b7.aBl() && (qH = vF), aBj)
		for (var en = aBj.length, aB = 0; aB < en; aB++)
			for (var f6 = 0; f6 < 3; f6++) qH = qH.replace("{" + (10 * f6 + aB) + "}", aBj[aB]);
	return qH
}

function c2() {
	this.data = new aBm;
	var aBn = (new aBo).L84,
		aBp = (this.aBk = aBn, !1);
	this.dd = function() {
		var en, g;
		aBp = !1, "en" !== bj.eK.data[12].value.split("-")[0].toLowerCase() ? bj.eK.data[12].value === bj.eK.data[145].value && 0 < bj.eK.data[146].value && (en = bj.eK.data[146].value, (g = bj.qr.vL(en, !1)).length === en) && !!bA.qi.a2b(g) &&
			function(g) {
				for (var en = g.length, j = 0; j < en; j++) g[j] = g[j].replace("&#39;", "'");
				var aBv = bj.qr.vL(en, !0);
				if (en !== aBv.length) return !1;
				if (!bA.qi.a2b(aBv)) return !1;
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
		g.length === aBn.length && (this.aBk = g, bj.s2.s3(145, bj.eK.data[12].value), bj.s2.s3(146, g.length), bj.qr.vR(g, !1), bj.qr.vR(aBn, !0), 0 === aa.a19()) && 5 === t.sp && t.y.aC2()
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
		var aC8 = bj.eK.data[12].vF;
		for (aB = 0; aB < en; aB++)
			if (aC7[aB] === aC8) {
				aC7.splice(aB, 1), en--;
				break
			} aC7.sort(), en++, aC7.unshift(aC8);
		try {
			if ("undefined" == typeof Intl) return aC7;
			for (aB = 0; aB < en; aB++) {
				var qH = new Intl.DisplayNames([aC7[aB]], {
					type: "language"
				}).of(aC7[aB]);
				qH !== aC7[aB] && (aC7[aB] = aC7[aB] + ": " + qH)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aC7
	}, this.aCA = function(aCB) {
		for (var qH = bj.eK.data[12].value, en = aCB.length, aB = 0; aB < en; aB++)
			if (qH === aCB[aB].split(":")[0]) return aB;
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
	var eu, ew, j, tm, aCD, aCE, aCF, aCG, aCH, i, a3D, aCI;
	this.hZ = !1, this.dd = function(qH, aCJ) {
		if (1 === a0.id && 13 <= a0.dv && a0.dv < 18) return aCJ ? void(a3D = qH) : a3D !== qH ? void 0 : void a0.vJ.saveString(200, qH);
		aCJ && (a3D = qH, (aCI = document.createElement("a")).appendChild(document.createTextNode(a3D)), this.hZ = !0, aCI.title = a3D, aCI.target = "_blank", aCI.href = a3D, aCI.style.textAlign = "center", aCI.style.color = bB.ni, aCI.style
			.position = "absolute", aCI.style.padding = "0px", aCI.style.margin = "0px", this.resize(), document.body.appendChild(aCI), bf.dl = !0)
	}, this.rr = function() {
		return !(!this.hZ || (document.body.removeChild(aCI), this.hZ = !1))
	}, this.h0 = function(i4, i5) {
		return !!this.hZ && ((i4 < eu || i5 < ew || eu + i < i4 || ew + j < i5 || eu + i - tm < i4 && i5 < ew + tm) && (bf.dl = !0, this.hZ = !1, document.body.removeChild(aCI)), !0)
	}, this.resize = function() {
		var a5c, aCK;
		this.hZ && (aCG = Math.floor(.8 * (a0.a1.hw() ? h.i > h.j ? .6 : .55 : .4) * h.hx), tm = Math.floor(.15 * aCG), aCD = Math.floor(.35 * tm), aCE = Math.floor(.5 * tm), aCF = Math.floor(2.5 * aCE), j = tm + aCD + 3 * aCE, a5c = bA.qa.sP(1,
			aCD / h.k), aCH = Math.floor(h.k * aQ.measureText(a3D, a5c)), aCK = i = (aCG < aCH ? aCH : aCG) + 2 * aCF, i = Math.min(i, h.i - 2 * (a0.a1.hw() ? 2 : 1) * bc.gap), a5c = bA.qa.sP(1, i / aCK * aCD / h.k), aCH = Math.floor(h
			.k * aQ.measureText(a3D, a5c)), eu = Math.floor((h.i - i) / 2), ew = Math.floor((h.j - j) / 2), aCI.style.font = a5c, aCI.style.top = Math.floor((ew + 1.4 * aCE + tm) / h.k) + "px", aCI.style.left = Math.floor((eu + (i -
			aCH) / 2) / h.k) + "px")
	}, this.uh = function() {
		this.hZ && (ui.fillStyle = bB.nf, ui.fillRect(eu, ew + tm, i, j - tm), ui.fillStyle = bB.oo, ui.fillRect(eu, ew, i, tm), ui.fillStyle = bB.ni, ui.lineWidth = bc.yw, ui.strokeStyle = bB.ni, ui.strokeRect(eu, ew, i, j), ui.fillRect(eu, ew +
			tm, i, bc.yw), ui.font = bA.qa.sP(1, .48 * tm), bA.qa.textAlign(ui, 1), bA.qa.textBaseline(ui, 1), ui.fillText("You are leaving Territorial.io!", Math.floor(eu + (i - .5 * tm) / 2), Math.floor(ew + .55 * tm)), aM.a5n(Math
			.floor(eu + i - .8 * tm), Math.floor(ew + .25 * tm), Math.floor(.5 * tm)), ui.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aAe, eu = [0, 0, 0, 0, 0],
		ew = [0, 0, 0, 0, 0],
		nK = [1, 1, 1, 1, 1],
		fF = [!0, !0, !0, !1, !1],
		f8 = (this.fa = [!0, !0, !0, !1, !1], null);
	this.aCL = function(a2m, aCM) {
		f8 = a2m, fF = aCM, aAe = [bK.aCN, bK.a12, bK.aCO, bK.aCO, bK.aCP], this.dd()
	}, this.dd = function() {
		if (ab.tH()) {
			var aB, sw = Math.floor((a0.a1.hw() ? .261 : .195) * h.hx),
				sx = Math.floor(.9 * sw),
				a8H = Math.floor(.17 * sx);
			if (gap = a0.a1.hw() ? 2 * bc.gap : bc.gap, nK[0] = sw / f8[0].width, nK[1] = sx / f8[1].width, nK[2] = a8H / f8[2].height, nK[3] = a8H / f8[3].height, nK[4] = a8H / f8[4].height, nK[2] *= 1.7, nK[3] *= 1.07, eu[0] = gap, eu[1] = gap,
				eu[2] = gap, eu[3] = gap, eu[4] = Math.floor(2 * gap + nK[3] * f8[3].width), ew[0] = gap, ew[1] = ew[0] + gap + nK[0] * f8[0].height, ew[2] = ew[1] + gap + nK[1] * f8[1].height, ew[3] = ew[2] + gap + nK[2] * f8[2].height, ew[4] =
				ew[3], !fF[0])
				for (aB = 0; aB < 5; aB++) ew[aB] -= nK[0] * f8[0].height + gap;
			if (!fF[1])
				for (aB = 2; aB < 5; aB++) ew[aB] -= nK[1] * f8[1].height + gap
		}
	}, this.hZ = function() {
		return !(7 === aa.a19() && a0.a1.hw())
	}, this.h0 = function(i4, i5) {
		if (f8 && this.hZ())
			for (var aB = fF.length - 1; 0 <= aB; aB--)
				if (fF[aB] && this.fa[aB] && eu[aB] < i4 && ew[aB] < i5 && i4 < eu[aB] + nK[aB] * f8[aB].width && i5 < ew[aB] + nK[aB] * f8[aB].height) return t.u(9, t.sp, new aCQ("You are leaving Territorial.io.", bA.qa.a3C(aAe[aB]))), !0;
		return !1
	}, this.uh = function() {
		if (f8 && this.hZ()) {
			var aB;
			for (ui.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fF[aB] && this.fa[aB] && (ui.setTransform(nK[aB], 0, 0, nK[aB], eu[aB], ew[aB]), ui.drawImage(f8[aB], 0, 0));
			ui.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aCR = 0, this.aCS = null, this.tv = null, this.kx = null, this.y = null, this.uH = null, this.tt = null, this.message = null, this.aCT = null, this.rq = null, this.aCU = new aCV, this.a16 = 0, this.a9B = 0, this.dd = function() {
		this.a9B = bf.eM, this.aCR = bG.ss.wD(bj.eK.data[105].value), this.tv = new aCW, this.kx = new aCX, this.y = new aCY, this.uH = new aCZ, this.tt = new aCa, this.message = new aCb, this.aCT = new aCc, this.rq = new aCd, this.y.dd(), bp
		.dd(), this.a16 = 1, a0.a1.setState(1), aa.setState(0)
	}, this.uB = function() {
		this.rq && this.rq.uB(), this.aCS = null, this.tv = null, this.kx = null, this.y = null, this.uH = null, this.tt = null, this.message = null, this.aCT = null, this.rq = null, this.a16 = 0, bp.uB(), a0.a1.setState(0)
	}
}

function aCW() {
	function aCy(g, t9, tA) {
		var aCz = g[t9];
		g[t9] = g[tA], g[tA] = aCz
	}
	this.tw = [
		[],
		[],
		[],
		[]
	], this.tx = [0, 0, 0, 0], this.aCe = [], this.aCf = function(aCg, sn, username, u2, a3f, aCh, elo, color, vl, aCi) {
		this.tw[aCg].push(this.aCj(sn, username, u2, a3f, aCh, elo, color, vl, aCi)), bn.aCR === sn && (bn.aCS = this.tw[aCg][this.tw[aCg].length - 1]), bn.y.aCk += 29 === t.sp && bn.y.re[0] === aCg && 1 === bn.y.re[2]
	}, this.aCj = function(sn, username, u2, a3f, aCh, elo, color, vl, aCi) {
		return {
			sn: sn,
			username: username,
			u2: u2,
			a3f: a3f,
			aCh: aCh,
			elo: elo,
			color: color,
			vl: vl,
			aCi: aCi
		}
	}, this.aCl = function(e8, aCg, u2, a3f, aCh, elo, vl) {
		e8 = this.tw[aCg][e8];
		e8.u2 = u2, e8.a3f = a3f, e8.aCh = aCh, e8.elo = elo, e8.vl = vl, bn.y.aCk += 29 === t.sp && bn.y.re[0] === aCg && 1 === bn.y.re[2]
	}, this.aCm = function(e8, aCg, aCn) {
		var e8 = this.tw[aCg][e8],
			aCo = e8.username,
			aCp = "Redacted " + bF.ss.zF(e8.sn, 2);
		e8.username = aCn ? "[" + bA.rZ.a0f(aCo) + "] " + aCp : aCp, aCo.indexOf("Redacted") < 0 && (e8.aCq = aCo, e8.aCr = 3), bn.y.aCk += 29 === t.sp && bn.y.re[0] === aCg && 1 === bn.y.re[2]
	}, this.aCs = function(e8, aCt, aCu) {
		var player = this.tw[aCt][e8];
		this.aCv(e8, aCt), this.tw[aCu].push(player), bn.y.aCk += 29 === t.sp && bn.y.re[0] === aCu && 1 === bn.y.re[2]
	}, this.aCv = function(e8, aCt) {
		var tv = this.tw[aCt];
		this.aCe.push(tv[e8]), 1e3 < this.aCe.length && this.aCe.shift(), e8 >= this.tx[aCt] ? tv[e8] = tv[tv.length - 1] : (this.tx[aCt]--, 2 === aCt ? (tv.splice(this.tx[aCt] + 1, 0, tv[tv.length - 1]), tv.splice(e8, 1)) : (tv[e8] = tv[this.tx[
			aCt]], tv[this.tx[aCt]] = tv[tv.length - 1])), tv.pop(), bn.y.aCk += 29 === t.sp && bn.y.re[0] === aCt && 1 === bn.y.re[2]
	}, this.aCw = function(e8, rd) {
		bn.y.aCk += 29 === t.sp && bn.y.re[0] === rd && 1 === bn.y.re[2];
		var tv = this.tw[rd],
			qS = tv[e8];
		if (2 === rd)
			if (e8 >= this.tx[rd]) {
				for (var aCx = this.tx[rd], elo = qS.elo; aCx && elo > tv[aCx - 1].elo;) aCx--;
				tv[e8] = tv[this.tx[rd]], tv.splice(this.tx[rd]++, 1), tv.splice(aCx, 0, qS)
			} else tv.splice(this.tx[rd]--, 0, qS), tv.splice(e8, 1);
		else e8 >= this.tx[rd] ? aCy(tv, this.tx[rd]++, e8) : aCy(tv, --this.tx[rd], e8)
	}, this.aD0 = function(sn) {
		for (var tw = this.tw, en = tw.length, aB = 0; aB < en; aB++)
			for (var tv = tw[aB], l3 = tv.length, f6 = 0; f6 < l3; f6++)
				if (sn === tv[f6].sn) return tv[f6];
		return null
	}
}

function aCV() {
	this.dm = function(e8) {
		if ((tx = bn.tv.tx[e8]) < 2) return !1;
		var rf = bn.y.rg[e8],
			aD1 = 9 === rf.aD2 ? 333 : 512,
			tx = Math.min(tx, aD1);
		8 === rf.aD2 && (tx -= tx % 2);
		aD1 = bn.tv.tw[e8].splice(0, tx), bn.tv.tx[e8] -= tx, tx = function(aD3) {
			if (bn.aCS) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var en = aD3.length, sn = bn.aCS.sn, aB = 0; aB < en; aB++)
					if (aD3[aB].sn === sn) return aB
			}
			return -1
		}(aD1);
		return -1 === tx ? (bn.tv.aCe = bn.tv.aCe.concat(aD1), 1e3 < bn.tv.aCe.length && bn.tv.aCe.splice(0, bn.tv.aCe.length - 1e3), bn.y.aCk += 29 === t.sp && bn.y.re[0] === e8 && 1 === bn.y.re[2], !1) : (8 === rf.aD2 && (rf.aD6 = (rf.aD6 + (
			tx >> 1)) % 1024, e8 = tx - tx % 2, tx %= 2, aD1 = aD1.slice(e8, 2 + e8)), ax.dd(rf, aD1, tx), !0)
	}, this.aD7 = function(rf, aD3, aD4) {
		var eq = aD.data = new a4O,
			aDB = (eq.spawningSeed = rf.spawningSeed, rf.aD2 < 7 ? (eq.gameMode = 1, eq.numberTeams = rf.aD2 + 2) : 9 === rf.aD2 ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === rf.aD2 ?
				0 : 10 === rf.aD2 ? 1 : 2), eq.selectedPlayer = aD4, eq.isContest = rf.aD8, eq.mapType = bS.aD9(rf.eT) ? 0 : 1, bS.aDA(eq, rf.eT), eq.mapSeed = rf.mapSeed, eq.humanCount = aD3.length);
		eq.selectableSpawn = 1 === eq.gameMode || aDB < 100, eq.colorsData = new Uint32Array(aDB), eq.playerNamesData = new Array(aDB);
		for (var aB = 0; aB < aDB; aB++) eq.colorsData[aB] = aD3[aB].color, eq.playerNamesData[aB] = aD3[aB].username;
		if (2 === eq.battleRoyaleMode)
			for (eq.elo = new Uint16Array(aDB), aB = 0; aB < aDB; aB++) eq.elo[aB] = aD3[aB].elo;
		aa.setState(8), bS.a7(rf.eT, eq.mapSeed), aD.a4T(), aD.a4R = 2
	}
}

function aCX() {
	var dz = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aDC = [bB.nw, bB.nw, bB.nx, bB.oQ, bB.oR, bB.oD, bB.oW, bB.nx, bB.oq, bB.og, bB.os],
		aDD = [
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
		aDE = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aDR(rh, sn, aDT) {
		for (var f7 = rh.length - 1; 0 <= f7; f7--) {
			var qS = rh[f7];
			0 === qS.id && qS.sn === sn && (qS.r = "[Redacted Message]", aDT) && (qS.aDU = 1)
		}
	}
	this.rm = function(aDF) {
		var aDG, a0g;
		return aDF.id < 5 && (aDG = "@" + bF.ss.zF(aDF.sn, 5)), 0 === aDF.id ? aDG + ": " + aDF.r : 1 === aDF.id ? (a0g = "@" + bF.ss.zF(aDF.target, 5), 0 === aDF.aDH ? 32768 <= aDF.value ? aDG + " voted with " + (aDF.value - 32768 + 1) +
				" gold against " + a0g + " to weaken the latter's admin position. 📉" : aDG + " voted with " + (aDF.value + 1) + " gold for " + a0g + " to strengthen the latter's admin position. 💪" : 1 === aDF.aDH ? aDG + " sent " + Math.floor(
					aDF.value / 100) + " 🧈 gold to " + a0g + "." : aDG + " voted with " + (aDF.value / 10).toFixed(1) + " points for " + a0g + " to acknowledge the latter as clan leader. ✅") : 2 === aDF.id ? 0 === aDF.aDH ? aDG +
			" was 🔇 muted for 1 Hour." : 1 === aDF.aDH ? "The username of " + aDG + " was ✂️ redacted. Duration: 1 Day" : aDG + " 👢 was kicked." : 3 === aDF.id ? aDG + bo.eB(aDF.aDH, bo.e5[aDF.aDH][aDF.value]) + "@" + bF.ss.zF(aDF.target, 5) +
			bo.eD(aDF.aDH, bo.e5[aDF.aDH][aDF.value]) : 4 === aDF.id ? aDG + bo.eB(5, bo.e5[5][aDF.aDH]) + "@" + bF.ss.zF(aDF.target, 5) + bo.eD(5, bo.e5[5][aDF.aDH]) : 5 === aDF.id ? aDE[aDF.aDH] : 6 === aDF.id ? "You are about to mention " +
			aDF.value + " player" + (1 === aDF.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDF.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.rl = function(aDF, a6p) {
		return {
			aDF: aDF,
			r: a6p,
			aDI: 0,
			fontSize: 1,
			rp: 0,
			aDJ: aDF.id ? bB.oP : bB.ni
		}
	}, this.u0 = function(player, rd) {
		return (2 === rd ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.u1 = function(u2) {
		return aDC[u2]
	}, this.aDK = function(u2, a3f) {
		return u2 < 3 || 7 === u2 ? aDD[u2][0] : 4 === u2 ? aDD[u2][a3f < 1 ? 0 : a3f < 10 ? 1 : 2] : aDD[u2][a3f < 10 ? 0 : 1]
	}, this.aDL = function(a3f) {
		return 0 === a3f
	}, this.aD0 = function(rd, sn) {
		for (var tw = bn.tv.tw, tv = tw[rd], en = tv.length, aB = 0; aB < en; aB++)
			if (sn === tv[aB].sn) return tv[aB];
		for (var f7 = 0; f7 < tw.length; f7++)
			if (rd !== f7)
				for (en = (tv = tw[f7]).length, aB = 0; aB < en; aB++)
					if (sn === tv[aB].sn) return tv[aB];
		return null
	}, this.u3 = function(qS) {
		return !!bn.aCS && qS.sn === bn.aCS.sn
	}, this.aDM = function(tv, aDN, aDO) {
		var a0d = [];
		loop: for (var aB = aDN; aB < aDO; aB++) {
			var a0e = bA.rZ.a0f(tv[aB].username);
			if (a0e) {
				for (var f7 = a0d.length - 1; 0 <= f7; f7--)
					if (a0e === a0d[f7].name) {
						a0d[f7].gG++;
						continue loop
					} a0d.push({
					name: a0e,
					gG: 1
				})
			}
		}
		if (a0d.sort(function(f6, f7) {
				return f7.gG - f6.gG
			}), 0 === a0d.length) return "";
		for (var qH = a0d[0].name + ": " + a0d[0].gG, aB = 1; aB < a0d.length; aB++) qH += "   " + a0d[aB].name + ": " + a0d[aB].gG;
		return qH
	}, this.aDP = function(u2, a3f, aCh) {
		return 0 === dz[u2].length ? "Rank: " + (a3f + 1) : dz[u2] + " Rank: " + (a3f + 1) + (3 !== u2 && aCh < 100 ? "   " + dz[3] + " Rank: " + (aCh + 1) : "")
	}, this.aDQ = function(sn) {
		for (var rg = bn.y.rg, aB = 0; aB < rg.length; aB++) aDR(rg[aB].rh, sn);
		aDR(bn.message.aDS(), sn, 1), bn.rq.aDQ(sn)
	}
}

function aCa() {
	var sI = 0,
		aDV = 0,
		aDW = 0,
		aDX = null,
		aDY = null;

	function aDb(qS, aDc, aDd) {
		var qH = qS.username;
		return (qH += "   " + bn.kx.aDP(qS.u2, qS.a3f, qS.aCh)) + function(qS) {
			qS = qS.vl;
			if (qS < 1e3) return "   Gold: " + qS;
			if ((qS %= 1024) < 1e3) return "   Gold: " + qS + "k";
			return "   Gold: " + (qS - 999) + "M"
		}(qS) + ("   IP: " + bF.ss.zF(qS.aCi, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aDd ? aDV : aDa(qS, aDc)])
	}

	function aDa(qS, aDc) {
		return aDV = aDc || bn.tv.aD0(qS.sn) ? 1 : 0
	}
	this.aDZ = function() {
		!sI || aDV === aDa(aDY) && aDW === aDY.vl || (aDW = aDY.vl, aDX.show(-1, -1, aDb(aDY, 0, 1), 1, 1))
	}, this.u4 = function(e, qS, aDc) {
		var a8O = e.target.getBoundingClientRect();
		this.show(a8O.left, a8O.top, qS, 0, aDc), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.tt && bn.tt.rr(1)
		})
	}, this.show = function(eu, ew, qS, sM, aDc) {
		aDX = aDX || new sG, aDW = (aDY = qS).vl, aDX.show(eu, ew, aDb(qS, aDc), sM), sI = 1
	}, this.rr = function(sS) {
		aDX && aDX.rr(sS) && (sI = 0, aDY = null)
	}
}

function aCY() {
	function aDi(aDl) {
		bn.y.aCk && 1 === bn.y.re[2] && t.a4z(29).aDm(), bn.y.aCk = 0, t.a4z(29).aDn(), 0 !== bn.y.rg[bn.y.re[0]].tg && !aDl || t.a4z(29).aDo(), bn.tt.aDZ()
	}
	this.rg = new Array(4), this.re = [0, 0, 1, 0], this.aCk = 0, this.aDf = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rg.length; aB++) this.rg[aB] = new aDg;
		this.re[0] = bj.eK.data[158].value
	}, this.aDh = function() {
		aDi(!0)
	}, this.aDj = function() {
		for (var aB = 0; aB < bn.y.rg.length; aB++) {
			var rf = bn.y.rg[aB];
			0 === rf.tg ? rf.aDp = 0 : (rf.aDq = Math.max(rf.aDq - rf.aDp % 2, 0), rf.aDp++)
		}
		aDi(!1)
	}, this.aDr = function(rd) {
		this.re[0] !== rd || this.re[2] || t.a4z(29).aDs()
	}
}

function aCc() {
	var aDt = 0,
		aDu = "",
		aDv = 0,
		aDw = 0,
		aDx = 0;

	function aDz(a6p) {
		b0.aEA.aEB(3, a6p)
	}

	function aE8(gG) {
		aDt = 1, bn.message.aEC({
			id: 6,
			value: gG
		})
	}

	function aE2(r) {
		var aEF = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEF)
	}
	this.a02 = function(r) {
		var aDy, g, aE4;
		if (aDt) return aDt = 0, "yes" === (aDy = r.toLowerCase()) || "y" === aDy ? void aDz(aDu) : void bn.message.aEC({
			id: 5,
			aDH: 7
		});
		!(r.indexOf("@") < 0) && (aDy = aE2(r)) ? (aDu = r, g = function(aE1) {
			for (var en = aE1.length, aED = [0, 0, 0, 0], aB = 0; aB < en; aB++)
				for (var i = aE1[aB], f6 = 0; f6 < 4; f6++) i === "@room" + (f6 + 1) && (aED[f6] = 1);
			if ((aDw = bA.qi.a2Q(aED)) % 4 == 0) return bA.qi.a2i(bn.tv.tw);
			for (f6 = 0; f6 < 4; f6++) aED[f6] = aED[f6] ? bn.tv.tw[f6] : [];
			return bA.qi.a2i(aED)
		}(aDy), function(aE1, aE4, r) {
			if (!aDv) return;
			for (var en = aE4.length, aB = 0; aB < en; aB++) 2 === aE4[aB].id && (r = r.replace(aE1[aE4[aB].e8], "@" + aE4[aB].fF));
			return aDt = 1, aDz((aDu = r).slice(0, 126) + "|"), 1
		}(aDy, aE4 = function(aE1) {
			for (var aE4 = [], en = (aDx = aDv = 0, aE1.length), aB = 0; aB < en; aB++) {
				var i = aE1[aB],
					l3 = i.length;
				bA.rZ.startsWith(i, "@[") ? l3 <= 9 && bA.rZ.a3G(i, "]") && aE4.push({
					id: 0,
					fF: i.substring(2, l3 - 1).toUpperCase()
				}) : 6 === l3 ? bA.rZ.startsWith(i, "@room") || (aDx++, aE4.push({
					id: 1,
					fF: bG.ss.wD(i.substring(1))
				})) : 1 < l3 && l3 < 5 && 0 <= (l3 = b7.data.aC5(i.substring(1))) && (aE4.push({
					id: 2,
					fF: l3,
					e8: aB
				}), aDv = 1)
			}
			return aE4
		}(aDy), r) || (0 === aE4.length ? aDw || function(aE1) {
			for (var en = aE1.length, aB = 0; aB < en; aB++) {
				var i = aE1[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aDy) ? aE8(g.length) : aDz(r) : aDy.length === aDx ? aDz(r) : (function(g, aE4) {
			var l3 = aE4.length;
			if (0 === l3) return;
			var en = g.length;
			loop: for (var aB = en - 1; 0 <= aB; aB--) {
				for (var f6 = 0; f6 < l3; f6++)
					if (0 === aE4[f6].id) {
						if (aE4[f6].fF === bA.rZ.a0f(g[aB].username)) continue loop
					} else if (1 === aE4[f6].id && aE4[f6].fF === g[aB].sn) continue loop;
				g[aB] = g[--en], g.pop()
			}
		}(g, aE4), aE8(g.length)))) : aDz(r)
	}, this.aEG = function(r) {
		var aE1 = aE2(r);
		if (aE1)
			for (var a5 = new RegExp("^[0-9]+$"), en = aE1.length, aB = 0; aB < en; aB++) {
				var i = aE1[aB].substring(1),
					l3 = i.length;
				1 <= l3 && l3 <= 3 && a5.test(i) && (l3 = parseInt(i, 10), !isNaN(l3)) && 0 <= l3 && l3 < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[l3]))
			}
		return r
	}
}

function aCb() {
	var aEH, aEI = [],
		aEJ = -1,
		aEK = 0,
		aEL = 0;

	function aEP() {
		aEK = bf.eM, (3 === this.u8 ? (aEL = 1, aEO) : (aEJ = (aEI.length + aEJ + 2 * this.u8 - 1) % aEI.length, aEN))()
	}

	function aEN() {
		0 !== aEI.length && (aEL = 0, aEH && aEH.uB(), (aEH = new u5(aEP)).s3(aEJ, aEI.length), aEH.show(aEI[aEJ]), bn.message.resize())
	}

	function aEO() {
		aEH && aEH.uB(), (aEH = new uC(aEN)).s3(aEI.length), aEH.show(), bn.message.resize()
	}
	this.aEC = function(aDF) {
		var qS;
		2 === aDF.id && 3 === aDF.aDH ? bn.kx.aDQ(aDF.sn) : (qS = bn.kx.rl(aDF, bn.kx.rm(aDF)), (5 !== aDF.id && 6 !== aDF.id || (t.a4z(29).aEM().ro(qS), 5 === aDF.id)) && (qS = bf.eM < aEK + 2e4, aEJ !== aEI.length - 1 && qS || (aEJ = aEI
			.length), aEI.push(aDF), bj.eK.data[14].value || bp.play(), aEH) && (bj.eK.data[13].value || aEL && qS ? aEH.s3(aEI.length) : aEN()))
	}, this.show = function() {
		aEO()
	}, this.rr = function() {
		aEJ = aEI.length - 1, aEH && aEH.uB(), aEH = null
	}, this.resize = function() {
		aEH && aEH.resize()
	}, this.aDS = function() {
		return aEI
	}
}

function aCZ() {
	var aEQ = null,
		aER = null,
		aES = 0,
		aET = 0,
		aEU = null;

	function aEW() {
		0 !== aER.u2 && (bn.uH.rr(), t.u(8, 29, new sq(25, {
			sr: 0,
			sn: bF.ss.zF(aER.sn, 5),
			so: 0
		}, 29)))
	}

	function aEX() {
		var eu = aEQ.eu,
			ew = aEQ.ew;
		bn.uH.rr(), aEQ = new uD([new w("Kick User", function() {
			aEd(0, 0)
		}, aEg(0, 0)), new w("Block Chat", aEe, aEg(1, 0)), new w("Censor Username", aEf, aEg(2, 0))]), aEc(eu, ew), aES = 2, aET = 1
	}

	function aEg(id, e8) {
		var e7, aCh;
		return !bn.aCS || bn.kx.u3(aER) || (e7 = aER.a3f) <= (aCh = bn.aCS.aCh) || 1 - bo.e6(id, aCh, e8) ? 1 : 4 === aER.u2 ? 50 <= e7 ? +(e7 <= aCh) : 20 <= e7 ? +(e7 / 2 <= aCh) : +(e7 / 3 <= aCh) : 0
	}

	function aEa() {
		return !bn.aCS || bn.kx.u3(aER) ? 1 : 0
	}

	function aEZ() {
		var eu = aEQ.eu,
			ew = aEQ.ew,
			aEh = (bn.uH.rr(), aEa());
		aEQ = new uD([new w(bo.e5[5][0], function() {
			aEd(5, 0)
		}, aEh), new w(bo.e5[5][1], function() {
			aEd(5, 1)
		}, aEh), new w(bo.e5[5][2], function() {
			aEd(5, 2)
		}, aEh), new w(aER.aCh < 100 ? "Stealth Report" : bo.e5[5][3], function() {
			aEd(5, 3)
		}, aEh)]), aEc(eu, ew), aET = aES = 2
	}

	function aEb() {
		29 === t.sp && t.a4y().aCT(bF.ss.zF(aER.sn, 5))
	}

	function aEd(id, value) {
		b0.aEA.aEB(5, {
			id: id,
			value: value,
			sn: aER.sn
		})
	}

	function aEe() {
		var eu = aEQ.eu,
			ew = aEQ.ew;
		bn.uH.rr(), aEQ = new uD([new w(bo.e5[1][0], function() {
			aEd(1, 0)
		}, aEg(1, 0)), new w(bo.e5[1][1], function() {
			aEd(1, 1)
		}, aEg(1, 1)), new w(bo.e5[1][2], function() {
			aEd(1, 2)
		}, aEg(1, 2)), new w(bo.e5[1][3], function() {
			aEd(1, 3)
		}, aEg(1, 3)), new w(bo.e5[1][4], function() {
			aEd(1, 4)
		}, aEg(1, 4))]), aEc(eu, ew), aES = 3, aET = 1
	}

	function aEf() {
		var eu = aEQ.eu,
			ew = aEQ.ew;
		bn.uH.rr(), aEQ = new uD([new w(bo.e5[2][0], function() {
			aEd(2, 0)
		}, aEg(2, 0)), new w(bo.e5[2][1], function() {
			aEd(2, 1)
		}, aEg(2, 1)), new w(bo.e5[2][2], function() {
			aEd(2, 2)
		}, aEg(2, 2))]), aEc(eu, ew), aES = 3, aET = 2
	}

	function aEc(eu, ew, uJ) {
		aEQ.show(eu, ew, uJ), bn.tt.show(aEQ.eu, aEQ.ew, aER, 1)
	}
	this.aEV = function(e, qS) {
		aES = 1, aER = qS, aEQ = new uD([new w(L(127), aEW, 0 === aER.u2 ? 1 : 0), new w(L(128), aEX, function() {
			if (!bn.aCS) return 1;
			if (bn.kx.u3(aER)) return 1;
			if (100 <= bn.aCS.aCh) return 1;
			if (bn.aCS.aCh >= aER.a3f) return 1;
			return 0
		}()), new w(L(129, 0, "🚩 Report"), aEZ, aEa()), new w(L(130), aEb, 0)]), aEc((aEU = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aEU.clientY, 1)
	}, this.a20 = function(code) {
		if (29 !== t.sp) return !1;
		if (!aER) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.rr();
			else if (bA.rZ.startsWith(code, "Numpad") || bA.rZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aES) this.aEV(aEU, aER);
				else {
					if (!aEQ) return !1;
					1 === aES ? code <= 1 ? aEW() : 2 === code ? aEX() : 3 === code ? aEZ() : (aEb(), this.rr()) : 2 === aES ? 1 === aET ? code <= 1 ? (aEd(0, 0), this.rr()) : (2 === code ? aEe : aEf)() : (aEd(5, bL.hv(code - 1, 0, 3)), this
					.rr()) : (aEd(aET, bL.hv(code - 1, 0, bo.e5[aET].length - 1)), this.rr())
				}
		}
		return !0
	}, this.rr = function() {
		aES = 0, aEQ && aEQ.rr(), aEQ = null, bn.tt.rr()
	}
}

function aDg() {
	this.tg = 0, this.eT = 0, this.mapSeed = 0, this.aD2 = 0, this.aEk = 0, this.aEl = 0, this.aD8 = 0, this.aDq = 0, this.spawningSeed = 0, this.a1E = 0, this.aD6 = 0, this.rh = [], this.ri = 1048575, this.aDp = 0, this.aEm = [{
		eT: 0,
		mapSeed: 0,
		aD2: 0,
		eM: 100,
		aD8: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aD2: 1,
		eM: 200,
		aD8: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aD2: 2,
		eM: 300,
		aD8: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aD2: 3,
		eM: 400,
		aD8: 0
	}, {
		eT: 0,
		mapSeed: 0,
		aD2: 9,
		eM: 500,
		aD8: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aD2: 10,
		eM: 600,
		aD8: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aD2: 8,
		eM: 700,
		aD8: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aD2: 3,
		eM: 800,
		aD8: 0
	}]
}

function aCd() {
	var aEn = [],
		t2 = [],
		aEo = [];

	function aEq(qS) {
		for (var r = qS.r, aEp = [];;) {
			var f8 = function aEs(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qH = r.substring(position + 1, position + 6);
				if (5 !== qH.length) return aEs(r, position + 1);
				if (bA.rZ.startsWith(qH, "room")) return aEs(r, position + 1);
				var aEz = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aEz.test(qH)) return aEs(r, position + 1);
				aEz = r.substring(position + 6, position + 7);
				if (1 !== aEz.length) return position;
				qH = new RegExp("^[ :!.]+$");
				if (!qH.test(aEz)) return aEs(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f8) {
				aEp.push(aEt(r, qS));
				break
			}
			0 === f8 ? aEp.push(aEu(r.substring(1, 6), qS, f8)) : (aEp.push(aEt(r.substring(0, f8), qS)), aEp.push(aEu(r.substring(f8 + 1, f8 + 6), qS, f8))), r = r.substring(f8 + 6)
		}
		return aEp
	}

	function aEu(qH, qS, f8) {
		var aEv = function(qH) {
				var sn = bG.ss.wD(qH),
					aEv = bn.tv.aD0(sn);
				if (aEv) {
					for (aEn.push(aEv); 75 < aEn.length;) aEn.shift();
					return aEv
				}
				for (var aCe = bn.tv.aCe, aB = aCe.length - 1; 0 <= aB; aB--)
					if (aEv = aCe[aB], sn === aEv.sn) return aEn.push(aEv), aEv;
				for (aB = aEn.length - 1; 0 <= aB; aB--)
					if (aEv = aEn[aB], sn === aEv.sn) return aEn.push(aEv), aEv;
				return bn.tv.aCj(sn, qH, 1, 999999, 999999, 0, 0, 0, 0)
			}(qH),
			qH = (0 === f8 && 0 === qS.aDF.id && qS.rp && (qS.fontSize = bn.kx.aDK(aEv.u2, aEv.a3f), qS.aDI = bn.kx.aDL(aEv.a3f)), document.createElement("span"));
		return qH.textContent = function(aEv, qS, f8) {
			if (aEv.aCr) return aEv.aCr--, f8 = 2 === qS.aDF.id || (3 === qS.aDF.id || 4 === qS.aDF.id) && 0 !== f8, aEv.username + (f8 ? " (" + aEv.aCq + ")" : "");
			if (qS.aDF.aDU) return "Redacted " + bF.ss.zF(aEv.sn, 2);
			return aEv.username
		}(aEv, qS, f8), qH.style.display = "inline-block", qH.style.color = bn.kx.u1(aEv.u2), qH.style.cursor = "pointer", qH.style.margin = "0", qH.style.font = "inherit", qH.style.minWidth = qH.style.minHeight = "1em", bn.kx.u3(aEv) && (qH
			.style.textDecoration = "underline"), bn.kx.aDL(aEv.a3f) && (qH.style.fontWeight = "bold"), qH.onclick = function(e) {
			bn.uH.aEV(e, aEv)
		}, bJ.r2() || (qH.onmouseover = function(e) {
			bn.tt.u4(e, aEv)
		}), t2.push(qH), qH
	}

	function aEt(r, qS) {
		var rY = document.createElement("span");
		return rY.textContent = r, rY.style.color = qS.aDJ, rY.style.margin = "0", rY.style.font = "inherit", rY
	}

	function aF4(aEv, aCp, sn) {
		sn !== aEv.sn || aEv.aCq || (aEv.aCq = aEv.username, aEv.aCr = 3, aEv.username = aCp)
	}
	this.uB = function() {
		for (var aB = 0; aB < t2.length; aB++) t2[aB].onclick = t2[aB].onmouseover = null;
		aEo = t2 = null
	}, this.transform = function(qS) {
		for (var qF = document.createElement("div"), aEp = aEq(qS), aB = 0; aB < aEp.length; aB++) qF.appendChild(aEp[aB]);
		0 === qS.aDF.id && (qF.vx143 = qS.aDF, aEo.push(qF)), qF.style.margin = "0.6em 0.6em", qS.rp && (qF.style.marginLeft = qF.style.marginRight = "inherit"), qF.style.font = "inherit";
		var aEr = 0 < qS.aDF.id;
		return qS.aDI && (qF.style.fontWeight = "bold"), aEr && (qF.style.paddingLeft = "0.7em"), aEr && (qF.style.fontStyle = "italic"), qF.style.fontSize = qS.fontSize.toFixed(2) + "em", qF
	}, this.aF2 = function(aF3) {
		if (aF3 && (2 === aF3.id && 1 === aF3.aDH || 3 === aF3.id && 2 === aF3.aDH)) {
			var sn = 3 === aF3.id ? aF3.target : aF3.sn;
			if (!bn.tv.aD0(sn)) {
				for (var aCp = "Redacted " + bF.ss.zF(sn, 2), aCe = bn.tv.aCe, aB = aCe.length - 1; 0 <= aB; aB--) aF4(aCe[aB], aCp, sn);
				for (aB = aEn.length - 1; 0 <= aB; aB--) aF4(aEn[aB], aCp, sn)
			}
		}
	}, this.aDQ = function(sn) {
		for (var aF5 = aEo, aB = aF5.length - 1; 0 <= aB; aB--) {
			var eq = aF5[aB];
			if (eq.vx143.sn === sn) {
				for (; eq.firstChild;) eq.removeChild(eq.firstChild);
				eq.vx143.r = "[Redacted Message]";
				for (var aEp = aEq(bn.kx.rl(eq.vx143, bn.kx.rm(eq.vx143))), f6 = 0; f6 < aEp.length; f6++) eq.appendChild(aEp[f6]);
				aF5.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aF6, aF7, aF8;

	function aFD(aB) {
		var button = aY.r9[aB],
			eu = button.eu,
			ew = button.ew,
			i = button.i,
			j = button.j;
		ui.fillStyle = button.aFB, ui.fillRect(eu, ew, i, j), aB === aF6 && (ui.fillStyle = aF8, ui.fillRect(eu, ew, i, j)), ui.lineWidth = bc.yw, ui.strokeStyle = aF7, ui.strokeRect(eu, ew, i, j),
			function(button) {
				var eu = button.eu,
					ew = button.ew,
					i = button.i,
					j = button.j;
				bA.qa.textAlign(ui, 1), bA.qa.textBaseline(ui, 1), ui.font = button.font, ui.fillStyle = aF7, ui.fillText(button.a6p, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ew = 0, this.gap = 0, this.dd = function() {
		aF6 = -1, aF7 = bB.ni, aF8 = "rgba(255,255,255,0.16)", this.r9 = new Array(7), this.j = Math.floor((a0.a1.hw() ? .123 : .093) * h.hx), this.i = Math.floor((a0.a1.hw() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aF9 = Math.floor(.26 * this.j),
			aFA = bA.qa.sP(1, aF9);
		this.r9[0] = {
			eu: 0,
			ew: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a6p: "Multiplayer",
			font: aFA,
			aFB: "rgba(22,88,22,0.8)",
			fontSize: aF9
		}, aF9 = Math.floor(.18 * this.j), aFA = bA.qa.sP(1, aF9), this.r9[1] = {
			eu: 0,
			ew: 0,
			i: this.i - this.r9[0].i - this.gap,
			j: this.j,
			a6p: "Single Player",
			font: aFA,
			aFB: "rgba(22,88,88,0.8)",
			fontSize: aF9
		}, this.r9[2] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6p: "",
			font: this.r9[1].font,
			aFB: "rgba(100,0,0,0.8)",
			fontSize: this.r9[1].fontSize
		}, this.r9[3] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: this.j,
			a6p: "Back",
			font: this.r9[0].font,
			aFB: "rgba(0,0,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.r9[4] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6p: "The game was updated!",
			font: this.r9[1].font,
			aFB: "rgba(100,0,0,0.8)",
			fontSize: this.r9[1].fontSize
		}, this.r9[5] = {
			eu: 0,
			ew: 0,
			i: this.r9[0].i,
			j: Math.floor(.8 * this.j),
			a6p: "Reload",
			font: this.r9[0].font,
			aFB: "rgba(0,100,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.r9[6] = {
			eu: 0,
			ew: 0,
			i: this.r9[1].i,
			j: this.r9[5].j,
			a6p: "Back",
			font: this.r9[0].font,
			aFB: "rgba(0,0,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.a9N()
	}, this.a9N = function() {
		this.ew = Math.floor(.54 * h.j), this.r9[0].eu = Math.floor(.5 * h.i - .5 * this.i), this.r9[1].eu = this.r9[0].eu + this.r9[0].i + this.gap, this.r9[2].eu = this.r9[3].eu = this.r9[0].eu, this.r9[4].eu = this.r9[5].eu = this.r9[0].eu,
			this.r9[6].eu = this.r9[1].eu, this.r9[0].ew = Math.floor(.54 * h.j), this.r9[1].ew = this.r9[0].ew, this.r9[2].ew = Math.floor((h.j - this.r9[2].j - this.r9[3].j - this.gap) / 2), this.r9[3].ew = this.r9[2].ew + this.r9[2].j + this
			.gap, this.r9[4].ew = Math.floor((h.j - this.r9[4].j - this.r9[5].j - this.gap) / 2), this.r9[5].ew = this.r9[6].ew = this.r9[4].ew + this.r9[4].j + this.gap
	}, this.aFC = function() {
		aFD(0), aFD(1)
	}, this.aFE = function() {
		aFD(2), aFD(3)
	}, this.aFF = function() {
		aFD(4), aFD(5), aFD(6)
	}, this.a1S = function(eu, ew, mU) {
		var aB = -1;
		return 0 === aa.a19() ? aB = this.a1w(eu, ew, 0, 2) : 3 === aa.a19() ? aB = this.a1w(eu, ew, 3, 1) : 5 === aa.a19() && (aB = this.a1w(eu, ew, 5, 2)), aF6 !== aB && (aF6 = aB, mU) && (bf.dl = !0), -1 !== aB && (aT.rb(), !0)
	}, this.a1w = function(eu, ew, aFG, size) {
		for (var aB = aFG; aB < aFG + size; aB++)
			if (eu >= this.r9[aB].eu && ew >= this.r9[aB].ew && eu <= this.r9[aB].eu + this.r9[aB].i && ew <= this.r9[aB].ew + this.r9[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aFI, aFJ, a70, aFK, aFL, aFM, aFN, aFO, aFP, a6z, aFQ, aFR, aFS, aFT = 1;

	function aFV(aFW) {
		!aFW && 1 === aFS && aFT ? (aFT = 0, b0.y.close(aFS, 3280)) : aFS = (aFS + 1) % b0.y.aFX, aFR = bf.eM, b0.y.aFY(aFS, 4) && b0.aEA.aFZ(aFS)
	}

	function aFa() {
		if (0 !== aFS) return 1 === aFS && __fx.customLobby.isActive() ? (o.a1H(3249), __fx.customLobby.setActive(!1)) : void aFV();
		o.a1H(3249)
	}

	function aFf(ew, a95, tg) {
		var n8 = Math.floor((h.i - aFK) / 2) + aFN,
			nL = n8 + Math.floor(tg * (aFK - 2 * aFN));
		ui.lineWidth = a95, ui.beginPath(), ui.moveTo(n8, ew), ui.lineTo(nL, ew), ui.lineTo(Math.floor(n8 - aFN + tg * aFK), ew + a70), ui.lineTo(n8 - aFN, ew + a70), ui.closePath()
	}
	this.aFU = 1, this.dd = function() {
		aa.setState(6), aFI = 0, aFJ = 1, aFO = "rgba(0,220,120,0.4)", aFP = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aFT = 1, aFS = this.aFU - 1, aFV(1)
	}, this.resize = function() {
		aFK = Math.floor((a0.a1.hw() ? .5 : .25) * h.hx), aFL = aFK + 12, a70 = Math.floor(.125 * aFK), aFN = 3 * a70, aFM = Math.floor(.225 * aFK), aFQ = Math.floor(.3 * a70), a6z = bA.qa.sP(0, aFQ)
	}, this.a1D = function(a14) {
		a14 === aFS && aFa()
	}, this.h0 = function(eu, ew) {
		var n8 = Math.floor((h.i - aFL) / 2),
			n9 = Math.floor(.5 * (h.j - bc.gap - a70 - aFM)) + a70 + bc.gap;
		return n8 < eu && eu < n8 + aFL && n9 < ew && ew < n9 + aFM && (this.a27(), aY.a1S(eu, ew, !1), !0)
	}, this.a27 = function() {
		b0.y.a1I(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.j3 = function() {
		6 === aa.a19() && (bf.eM > aFR + 12e3 && aFa(), 100 < (aFI += .07 * aFJ * (aFI < 16 ? 5 + aFI : 84 < aFI ? 105 - aFI : 17)) ? (aFI = 100, aFJ = -1) : aFI < 0 && (aFI = 0, aFJ = 1), aFO = "rgba(0," + Math.floor(190 - 1.9 * aFI) + "," +
			Math.floor(120 - 1.2 * aFI) + "," + (.4 + .004 * aFI) + ")", aFP = "rgba(0," + Math.floor(1.9 * aFI) + "," + Math.floor(1.2 * aFI) + "," + (.8 - .004 * aFI) + ")", bf.dl = !0)
	}, this.uh = function() {
		var eu = Math.floor((h.i - aFL) / 2),
			ew = Math.floor(.5 * (h.j - bc.gap - a70 - aFM));
		! function(title, ew, a95, tg) {
			ui.fillStyle = aFP, aFf(ew, a95, 1), ui.fill(), ui.fillStyle = aFO, aFf(ew, a95, tg), ui.fill(), ui.strokeStyle = bB.ni, aFf(ew, a95, 1), ui.stroke(),
				function(aFh, ew) {
					bA.qa.textAlign(ui, 1), bA.qa.textBaseline(ui, 1), ui.font = a6z, ui.fillStyle = bB.ni, ui.fillText(aFh, Math.floor(.5 * h.i), Math.floor(ew + .58 * a70))
				}(title, ew)
		}(L(131), ew, 3, aFI / 100),
		function(eu, ew, i, j, a6p) {
			ui.fillStyle = bB.nd, ui.fillRect(eu, ew, i, j), ui.lineWidth = 3, ui.strokeStyle = bB.ni, ui.strokeRect(eu, ew, i, j);
			var en = Math.floor(.3 * j);
			bA.qa.textAlign(ui, 1), bA.qa.textBaseline(ui, 1), ui.font = bA.qa.sP(0, en), ui.fillStyle = bB.ni, ui.fillText(a6p, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * en))
		}(eu, ew + a70 + bc.gap, aFL, aFM, L(37))
	}
}

function cR() {
	var a10 = 0;
	this.dd = function() {
		aY.dd(), a10 = 0
	}, this.setState = function(aFi) {
		a10 = aFi
	}, this.a19 = function() {
		return a10
	}, this.aFj = function() {
		this.setState(8), t.x()
	}, this.a20 = function(e) {
		if (!bS.wT) return !1;
		if (!(bf.eM < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aFk()) return !0;
				if ("Enter" === e.key) {
					if (0 === a10) return !0;
					if (7 === a10) return !0
				}
			}
			return !1
		}
	}, this.aFl = function() {
		bZ.resize()
	}, this.aFk = function() {
		return !!bZ.rr()
	}, this.h0 = function(eu, ew) {
		!bS.wT || bZ.h0(eu, ew) || 6 === a10 && aZ.h0(eu, ew) || bY.h0(eu, ew) || aT.h0(eu, ew)
	}, this.a1S = function(eu, ew) {
		!aT.a9G && aY.a1S(eu, ew, !0) || aT.a1S(eu, ew)
	}, this.click = function(eu, ew) {
		aT.a1r()
	}, this.a1V = function(eu, ew, deltaY) {}, this.aFm = function() {
		aY.a9N(), bf.dl = !0
	}, this.uh = function() {
		8 !== a10 && 10 !== a10 && (ui.imageSmoothingEnabled = !0, this.y2(), 0 !== a10 && (aT.uh(), aO.uh(), this.aFn(), bY.uh()), 0 !== a10 && 6 === a10 && aZ.uh(), bZ.uh(), t.uh())
	}, this.y2 = function() {
		var aFp, aFo;
		if (__fx.makeMainMenuTransparent) ui.clearRect(0, 0, h.i, h.j);
		else bS.wT ? (aFo = h.i / bS.ey, aFp = h.j / bS.ez, ui.setTransform(aFo = aFp < aFo ? aFo : aFp, 0, 0, aFo, Math.floor((h.i - aFo * bS.ey) / 2), Math.floor((h.j - aFo * bS.ez) / 2)), ui.drawImage(bS.wV, 0, 0), ui.setTransform(1, 0, 0, 1,
			0, 0), ui.fillStyle = bB.nd) : ui.fillStyle = bB.nZ, ui.fillRect(0, 0, h.i, h.j)
	}, this.aFn = function() {
		var ew = Math.floor(.3 * h.j),
			canvas = ab.aFq("territorial.io"),
			ho = (ho = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : ho,
			eu = (ui.globalAlpha = .15, ui.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - ho * canvas.width))),
			eu = Math.floor(eu / ho),
			ew = Math.floor(ew - .5 * canvas.height * ho),
			ew = Math.floor(ew / ho);
		ui.setTransform(ho, 0, 0, ho, eu, ew), ui.drawImage(canvas, eu, ew), ui.setTransform(1, 0, 0, 1, 0, 0), ui.globalAlpha = 1, ui.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aD6 = 0;
	var aFs, aFt, aFu, aFv, aFw, aFx = this.aFr = 0;

	function aG0() {
		aFv = aFw = null, aFx = 0
	}
	this.dd = function(rf, aD3, aD4) {
		t.x(), bn.uB(), aa.setState(10), aFv = rf, aFw = aD3, aFx = aD4, this.aD6 = rf.aD6, this.aFr = aD4, aFs = 0, aFt = bf.eM + 4500, b0.y.a1E = rf.a1E, b0.y.a17 === rf.a1E ? (console.log("direct pass"), aFu = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a17, 3247), aFu = 2, b0.y.aFY(rf.a1E, 5) && b0.p3.aFy()), ui.imageSmoothingEnabled = !0, aa.y2();
		aD3 = ab.aFq("loading"), aD4 = (a0.a1.hw() ? .396 : .25) * h.hx / aD3.width;
		ui.setTransform(aD4, 0, 0, aD4, Math.floor((h.i - aD4 * aD3.width) / 2), Math.floor((h.j - aD4 * aD3.height) / 2)), ui.imageSmoothingEnabled = !1, ui.drawImage(aD3, 0, 0), ui.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mS = function() {
		0 < aFu && bf.eM > aFt && (aFu--, aFt += 4500, 0 === bf.aG1) && 0 === bf.k7() && b0.y.aFY(b0.y.a1E, 5)
	}, this.aG2 = function() {
		return 10 === aa.a19() && (bn.aCU.aD7(aFv, aFw, aFx), aG0(), !0)
	}, this.aG3 = function() {
		10 === aa.a19() && 2 <= ++aFs && (bn.aCU.aD7(aFv, aFw, aFx), aG0())
	}
}

function cS() {
	var aG5, canvas, a0J, aG6;

	function aGC(e8, name, aGD, qH) {
		a0J[e8] = name, canvas[e8] = new Image, canvas[e8].onload = function() {
			! function(e8, aGD) {
				var a3k, a3l = null;
				7 === aGD ? a3k = bA.a2D.a3n : 8 === aGD ? (a3k = bA.a2D.a3q, a3l = .1) : 3 === aGD ? (a3k = bA.a2D.a3o, a3l = .06) : 5 === aGD ? a3k = bA.a2D.a3r : 6 === aGD ? a3k = bA.a2D.a3m : 4 === aGD && (a3k = bA.a2D.a3s);
				canvas[e8] = bA.a2D.a3j(canvas[e8], a3k, a3l)
			}(e8, aGD), aGF()
		}, canvas[e8].onerror = function(e) {
			console.error("Error loading image at index", e8, "Error:", e), aGF()
		}, canvas[e8].src = "data:image/png;base64," + qH
	}

	function aGF() {
		aG5--, aG9()
	}

	function aG9() {
		0 === aG5 && (aG5 = -1, aGB(), bf.dl = !0, canvas[7] = aG6, canvas[8] = aG6, canvas[9] = aG6, canvas[10] = aG6, 5 === t.sp) && t.a4y().aGH.resize()
	}

	function aGB() {
		aL.a5A(), bY.aCL([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wY = new yT, aj.wY.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aG5 = 23, canvas = new Array(aG5), a0J = new Array(aG5), (aG6 = document.createElement("canvas")).width = 1;
			for (var aB = aG5 - (aG6.height = 1); 0 <= aB; aB--) canvas[aB] = aG6;
			aGB(), aGC(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGC(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGC(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGC(3, "orders", 6,
					"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"
					), aGC(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGC(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGC(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGC(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGC(8,
					"googleplay", 3,
					"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"
					), aGC(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGC(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGC(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGC(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGC(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGC(14, "bestPlayer", 5,
					"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"
					), aGC(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGC(16, "apple", 3,
					"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"
					), aGC(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGC(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGC(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGC(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGC(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGC(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e8) {
		return canvas[e8]
	}, this.aFq = function(name) {
		for (var aB = a0J.length - 1; 0 <= aB; aB--)
			if (a0J[aB] === name) return canvas[aB];
		return aG6
	}, this.tH = function() {
		return aG5 <= 0
	}, this.aG8 = function() {
		aG5 = 0, aG9()
	}
}

function cT() {
	var aGK, aGL, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, aGT, aGI = [
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
		aGJ = [
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

	function aGZ(jR, nQ) {
		for (var aB = jR; aB < nQ; aB++) aGK[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGL[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGM[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aGY(jR, nQ) {
		for (var colorsData = aD.data.colorsData, aB = jR; aB < nQ; aB++) {
			var fF = colorsData[aB];
			aGK[aB] = 4 * (fF >> 12), aGL[aB] = 4 * (fF >> 6 & 63), aGM[aB] = 4 * (63 & fF)
		}
	}

	function aGk(eR, aGm) {
		aBi[eR] = 0, aBi[eR + 1] = 0, aBi[eR + 2] = aGm, aBi[eR + 3] = 0, aGn(eR)
	}

	function aGn(eR) {
		var eu;
		bb.nY || (eu = ac.y3(eR), eR = ac.y4(eR), bb.nY = eu >= ba.aBh[0] && eu <= ba.aBh[2] && eR >= ba.aBh[1] && eR <= ba.aBh[3])
	}
	this.ep = new Int32Array(4), this.de = function() {
		var ep = this.ep;
		ep[0] = -4 * bS.ey, ep[1] = 4, ep[2] = -ep[0], ep[3] = -ep[1]
	}, this.dd = function() {
		if (aGK = new Uint8Array(aD.ek), aGL = new Uint8Array(aD.ek), aGM = new Uint8Array(aD.ek), aGN = new Uint8Array(aD.ek), aGO = new Uint8Array(aD.ek), aGP = new Uint8Array(aD.ek), aGQ = new Uint8Array(aD.ek), aGR = new Uint8Array(aD.ek),
			aGS = new Uint8Array(aD.ek), aGT = new Uint8Array(aD.ek), this.a8E = new Uint8Array(aD.ek), aD.hh)
			for (var aAN = bg.aAN, aB = aD.ek - 1; 0 <= aB; aB--) {
				var f8 = aAN[aB],
					l3 = bL.du((aGJ[f8][3] + 1) * ay.random(), ay.value(100));
				aGK[aB] = aGI[f8][0] + l3 * aGJ[f8][0], aGL[aB] = aGI[f8][1] + l3 * aGJ[f8][1], aGM[aB] = aGI[f8][2] + l3 * aGJ[f8][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aGY(0, aD.kA), aGZ(aD.kA, aD.ek)) : aGZ(0, aD.ek) : aGY(0, aD.ek);
		! function() {
			var aB, eq;
			for (aB = aD.ek - 1; 0 <= aB; aB--) eq = bL.du(aGK[aB] + aGL[aB] + aGM[aB], 3), aGK[aB] += aGf(eq - aGK[aB], 2), aGL[aB] += aGf(eq - aGL[aB], 2), aGM[aB] += aGf(eq - aGM[aB], 2), aGK[aB] -= aGK[aB] % 4, aGL[aB] -= aGL[aB] % 4, aGM[
				aB] -= aGM[aB] % 4
		}(),
		function() {
			for (var aB = aD.ek - 1; 0 <= aB; aB--) aGK[aB] += bL.du(aB, 128), aGL[aB] += bL.du(aB % 128, 32), aGM[aB] += bL.du(aB % 32, 8), aGN[aB] = aB % 8
		}(), this.aGc(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGO[aB] = aGK[aB] < 32 ? aGK[aB] + 32 : aGK[aB] - 32, aGP[aB] = aGL[aB] < 32 ? aGL[aB] + 32 : aGL[aB] - 32, aGQ[aB] = aGM[aB] < 32 ? aGM[aB] + 32 : aGM[aB] - 32
			}(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGR[aB] = 235 < aGK[aB] ? aGK[aB] - 20 : aGK[aB] + 20, aGS[aB] = 235 < aGL[aB] ? aGL[aB] - 20 : aGL[aB] + 20, aGT[aB] = 235 < aGM[aB] ? aGM[aB] - 20 : aGM[aB] + 20
			}()
	}, this.a77 = function(player) {
		var g = bO.fM;
		return g[0] = aGK[player], g[1] = aGL[player], g[2] = aGM[player], g
	}, this.aGc = function() {
		for (var aB = aD.ek - 1; 0 <= aB; aB--) this.a8E[aB] = aGK[aB] + aGL[aB] + aGM[aB] < 280 ? 0 : 1
	}, this.y3 = function(eR) {
		return bL.du(eR, 4) % bS.ey
	}, this.y4 = function(eR) {
		return bL.du(eR, 4 * bS.ey)
	}, this.xb = function(eu, ew) {
		return Math.floor(4 * (ew * bS.ey + eu))
	}, this.xr = function(eR) {
		var ep = this.ep;
		return this.aGg(eR + ep[0]) || this.aGg(eR + ep[1]) || this.aGg(eR + ep[2]) || this.aGg(eR + ep[3])
	}, this.fC = function(eR) {
		var ep = this.ep;
		return this.es(eR + ep[0]) || this.es(eR + ep[1]) || this.es(eR + ep[2]) || this.es(eR + ep[3])
	}, this.xp = function(eR, player) {
		var ep = this.ep;
		return this.aGh(eR + ep[0], player) || this.aGh(eR + ep[1], player) || this.aGh(eR + ep[2], player) || this.aGh(eR + ep[3], player)
	}, this.gN = function(eR) {
		return 208 <= aBi[eR + 3]
	}, this.xx = function(player, eR) {
		return this.gN(eR) && this.y0(player, eR)
	}, this.y0 = function(player, eR) {
		return player === this.ef(eR)
	}, this.aGi = function(eR) {
		return 208 <= aBi[eR + 3] && aBi[eR + 3] < 224
	}, this.jM = function(eR) {
		return 224 <= aBi[eR + 3] && aBi[eR + 3] < 248
	}, this.xq = function(eR) {
		for (var ep = this.ep, aB = 3; 0 <= aB; aB--)
			if (this.i1(eR + ep[aB])) return !0;
		return !1
	}, this.ei = function(eR) {
		return this.gN(eR) || this.ee(eR)
	}, this.i1 = function(eR) {
		return 0 === aBi[eR + 3] && 2 === aBi[eR + 2]
	}, this.ee = function(eR) {
		return 0 === aBi[eR + 3] && 1 === aBi[eR + 2]
	}, this.wg = function(eR) {
		return 0 === aBi[eR + 3] && 3 === aBi[eR + 2]
	}, this.es = function(eR) {
		return 0 === aBi[eR + 3] && 5 === aBi[eR + 2]
	}, this.aGg = function(eR) {
		return 0 === aBi[eR + 3] && 3 <= aBi[eR + 2]
	}, this.eV = function(eR) {
		return (aBi[eR] >> 1 << 8) + aBi[eR + 1]
	}, this.aGj = function(eR) {
		return 1 & aBi[eR]
	}, this.aGh = function(eR, player) {
		return this.ee(eR) || this.gN(eR) && player !== this.ef(eR)
	}, this.ef = function(eR) {
		return aBi[eR] % 4 * 128 + aBi[eR + 1] % 4 * 32 + aBi[eR + 2] % 4 * 8 + aBi[eR + 3] % 8
	}, this.xy = function(eR) {
		aGk(eR, 1)
	}, this.aGl = function(eR) {
		aGk(eR, 2)
	}, this.xc = function(eR, player) {
		aBi[eR] = aGK[player], aBi[eR + 1] = aGL[player], aBi[eR + 2] = aGM[player], aBi[eR + 3] = 208 + aGN[player], aGn(eR)
	}, this.gI = function(eR, player) {
		aBi[eR] = aGO[player], aBi[eR + 1] = aGP[player], aBi[eR + 2] = aGQ[player], aBi[eR + 3] = 224 + aGN[player], aGn(eR)
	}, this.jN = function(eR, player) {
		aBi[eR] = aGR[player], aBi[eR + 1] = aGS[player], aBi[eR + 2] = aGT[player], aBi[eR + 3] = 248 + aGN[player], aGn(eR)
	}
}

function cs() {
	var aGo = 0,
		aGq = new Uint16Array(64);

	function aGs(a5E) {
		aGo -= 2;
		for (var aB = a5E; aB < aGo; aB += 2) aGq[aB] = aGq[aB + 2], aGq[aB + 1] = aGq[aB + 3]
	}
	this.dd = function() {
		aGo = 0
	}, this.j3 = function() {
		var aB, jJ, iN;
		if (0 !== aGo)
			if (0 === ag.mi[aD.eX]) aGo = 0;
			else if (0 === ad.fu(aD.eX)) aGo = 0;
		else
			for (aB = aGo - 2; 0 <= aB; aB -= 2)(jJ = aGq[aB]) < aD.ek && 0 === ag.mi[jJ] ? aGs(aB) : (iN = aGq[aB + 1], (jJ >= aD.ek && bs.aGt(aD.eX) || jJ < aD.ek && bs.aGu(aD.eX, jJ)) && (b8.hD.hK(iN, jJ), aGs(aB)))
	}, this.hL = function(jJ, iN) {
		! function(jJ, iN) {
			for (var aB = 0; aB < aGo; aB += 2)
				if (aGq[aB] === jJ) return aGq[aB + 1] = Math.min(aGq[aB + 1] + iN, 1023), 1;
			return
		}(jJ, iN) && 64 !== aGo && (aGq[aGo] = jJ, aGq[aGo + 1] = iN, aGo += 2)
	}
}

function cU() {
	function aH1(player) {
		var dt;
		bA.g9.a3M(player) && (dt = ag.gp[player] - ag.a3Q[player] + ad.aH3(player), bd.gD(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.gp[player] = 0, ag.a3Q[player] = 0
	}

	function aHA() {
		aX.show(!1, !1, !1, !0), aW.aAq(), bR.zj.a0T()
	}

	function aGy(player, aH9) {
		for (var aB = aH9.length - 1; 0 <= aB; aB--) ad.aHC(aH9[aB], player)
	}

	function aH0(player) {
		var ie = ag.ie,
			ig = ag.ig,
			ih = ag.ih,
			ii = ag.ii,
			ey = bS.ey;
		if (ag.gb[player]) {
			ag.gb[player] = 0;
			for (var n8 = ie[player], n9 = ih[player], eu = ig[player]; n8 <= eu; eu--)
				for (var ew = ii[player]; n9 <= ew; ew--) {
					var gL = 4 * (ew * ey + eu);
					ac.xx(player, gL) && ac.xy(gL)
				}
		}
		ig[player] = ii[player] = 0, ie[player] = ih[player] = Math.max(ey, bS.ez)
	}
	this.dm = function(gL) {
		var player, dt = ag.gb[gL] + ag.xX[gL];
		bN.y.ps[gL] ? dt && (aGy(player = gL, ad.aGz(player)), aH0(player), aF.gB(player), ad.clear(player), aH1(player), function(player) {
			ag.xX[player] = 0, ag.gF[player] = [], ag.gT[player] = [], ag.gU[player] = [], ag.fD[player] = []
		}(player)) : !dt && ag.gF[gL].length || this.aGx(gL)
	}, this.aGx = function(player) {
		! function(player) {
			bA.g9.jY(player) || (ag.a0X[player] = bi.a0n.aH8(), aD.a00++);
			var aH9 = ad.aGz(player);
			0 === aH9.length ? bA.g9.a3J(player) && aHA() : (aGy(player, aH9), function(player, aH9) {
				var aHE = aH9[function(aH9) {
					var aB, e8 = 0;
					for (aB = aH9.length - 1; 1 <= aB; aB--) ag.gb[aH9[aB]] > ag.gb[aH9[e8]] && (e8 = aB);
					return e8
				}(aH9)];
				9 === aD.kS && (1 === bg.el[player] ? ay.k2(8) && az.aHF(aHE) : aE.hW[player] && (aN.a6d(765, 0), aN.yQ(280, L(132, [ag.yR[aHE], ag.yR[player]]), 765, aHE, bB.nZ, bB.or, -1, !0)));
				if (bA.g9.a3J(player)) aHA(), aN.a0A(aHE, 1);
				else {
					for (var aB = aH9.length - 1; 0 <= aB; aB--)
						if (bA.g9.a3M(aH9[aB]) && (bd.me[4 - bA.g9.jY(player)]++, bA.g9.a3J(aH9[aB]))) return aN.a0A(player, 0);
					bA.g9.jY(player) || aN.a6N(0, player, aHE)
				}
			}(player, aH9))
		}(player), aH0(player), aH1(player),
			function(player) {
				ag.mi[player] = 0, ag.gF[player] = null, ag.gT[player] = null, ag.gU[player] = null, ag.fD[player] = null
			}(player), aF.gB(player), ad.clear(player), bN.aH6.aH7(player)
	}
}

function cx() {
	var input;

	function aHG(e) {
		(e = e.target.files) && 0 < e.length && b6.aHJ(e[0])
	}

	function aHN(e) {
		var f8 = new Image;
		f8.onload = aHO, f8.src = e.target.result
	}

	function aHO(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bS.aHQ || j > bS.aHQ || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bS.aHQ + ".", a0.vJ ? a0.vJ.showToast(e) : alert(e)) : 20 === t.sp && t.a4y().aHO(canvas)
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHG
	}, this.uB = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHH = function() {
		input.click()
	}, this.aHJ = function(aHK) {
		var g = aHK.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHN, g.readAsDataURL(aHK))
	}
}

function cv() {
	this.aHS = null, this.dd = function() {
		10 !== aD.kS ? this.aHS = null : this.aHS = new Uint32Array(aD.ek)
	}, this.j3 = function() {
		10 === aD.kS && this.kx()
	}, this.kx = function() {
		for (var gL, target, aB3, aHS = this.aHS, zm = al.kC, a3R = ag.gp, aB = al.kB - 1; 0 <= aB; aB--)(gL = zm[aB]) >= aD.kA || (target = Math.max(bL.du(a3R[gL], 4), 2048), aB3 = Math.max(ae.aB4(gL), 100), aHS[gL] += bL.du(aB3 * target, 1e4),
			aHS[gL] > target && (aHS[gL] = target))
	}, this.a3X = function(player, hW) {
		return hW > this.aHS[player] ? (hW = this.aHS[player], this.aHS[player] = 0) : this.aHS[player] -= hW, hW
	}
}

function dW() {
	function aHU(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aHc, g.readAsText(e))
	}

	function aHc(e) {
		var aHg;
		aD.zy || (e = JSON.parse(e.target.result), aHg = aD.data = new a4O, aHh(e, aHg, "mapType", 0, 2), aHh(e, aHg, "mapProceduralIndex", 0, 255), aHh(e, aHg, "mapRealisticIndex", 0, 255), aHh(e, aHg, "mapSeed", 0, 16383), function(aHf, aHg, gM,
				max) {
				aHf = aHf[gM];
				aHg[gM] = aHn(aHf) ? aHf.slice(0, max) : aHg[gM]
			}(e, aHg, "mapName", 20), function(aHf, aHg, gM) {
				var aHP;
				2 === aHg.mapType && (!aHn(aHf = aHf[gM]) || aHf.length <= 20 ? aHg.mapType = 0 : ((aHP = new Image).onload = function() {
					b9.aHo.aHp(aHP, 1), aHP.onload = null, aHP = null
				}, aHP.src = aHf))
			}(e, aHg, "canvas"), aHh(e, aHg, "passableWater", 0, 1), aHh(e, aHg, "passableMountains", 0, 1), aHh(e, aHg, "playerCount", 1, 512), aHh(e, aHg, "humanCount", 1, 1), aHh(e, aHg, "selectedPlayer", 0, 0), aHh(e, aHg, "gameMode", 0, 1),
			aHh(e, aHg, "playerMode", 0, 0), aHh(e, aHg, "battleRoyaleMode", 0, 0), aHh(e, aHg, "numberTeams", 0, 8), aHh(e, aHg, "isZombieMode", 0, 0), aHh(e, aHg, "isContest", 0, 0), aHh(e, aHg, "isReplay", 0, 0), aHk(e, aHg, "elo", 16, 2,
				16383), aHh(e, aHg, "colorsType", 0, 1), aHh(e, aHg, "colorsPersonalized", 0, 1), aHk(e, aHg, "colorsData", 32, 512, 262143), aHh(e, aHg, "selectableColor", 0, 1), aHk(e, aHg, "teamPlayerCount", 16, 9, 512), aHh(e, aHg,
				"neutralBots", 0, 1), aHh(e, aHg, "botDifficultyType", 0, 3), aHh(e, aHg, "botDifficultyValue", 0, 15), aHk(e, aHg, "botDifficultyTeam", 8, 9, 15), aHk(e, aHg, "botDifficultyData", 8, 512, 15), aHh(e, aHg, "spawningType", 0, 2),
			aHh(e, aHg, "spawningSeed", 0, 16383), aHk(e, aHg, "spawningData", 16, 1024, 4095), aHh(e, aHg, "selectableSpawn", 0, 1), aHh(e, aHg, "playerNamesType", 0, 2),
			function(aHf, aHg, gM, size, max) {
				var a2Y = aHf[gM];
				if (Array.isArray(a2Y)) {
					for (var a2Z = new Array(size), en = Math.min(a2Y.length, size), aB = 0; aB < en; aB++) a2Z[aB] = aHn(a2Y[aB]) ? a2Y[aB].slice(0, max) : "";
					aHg[gM] = a2Z
				}
			}(e, aHg, "playerNamesData", 512, 20), aHh(e, aHg, "selectableName", 0, 1), aHh(e, aHg, "aIncomeType", 0, 2), aHh(e, aHg, "aIncomeValue", 0, 255), aHk(e, aHg, "aIncomeData", 8, 512, 255), aHh(e, aHg, "tIncomeType", 0, 2), aHh(e, aHg,
				"tIncomeValue", 0, 255), aHk(e, aHg, "tIncomeData", 8, 512, 255), aHh(e, aHg, "iIncomeType", 0, 2), aHh(e, aHg, "iIncomeValue", 0, 255), aHk(e, aHg, "iIncomeData", 8, 512, 255), aHh(e, aHg, "sResourcesType", 0, 2), aHh(e, aHg,
				"sResourcesValue", 0, 2047), aHk(e, aHg, "sResourcesData", 16, 512, 2047), t.x(), t.y.aHe[0] = 0, t.u(19))
	}

	function aHh(aHf, aHg, gM, min, max) {
		aHf = aHf[gM];
		aHg[gM] = "number" == typeof aHf && min <= aHf && aHf <= max ? Math.floor(aHf) : aHg[gM]
	}

	function aHn(qH) {
		return "string" == typeof qH
	}

	function aHk(aHf, aHg, gM, aHq, size, max) {
		var a2Y = aHf[gM];
		if (Array.isArray(a2Y)) {
			for (var a2Z = new(8 === aHq ? Uint8Array : 16 === aHq ? Uint16Array : Uint32Array)(size), en = Math.min(a2Y.length, size), aB = 0; aB < en; aB++) a2Z[aB] = bL.hv(a2Y[aB], 0, max);
			aHg[gM] = a2Z
		}
	}
	this.aHT = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aHU, input.click()
	}, this.aHV = function() {
		for (var aHY, aCI, a4w = aD.data, keys = Object.keys(a4w), aHW = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a4w[key] instanceof Uint8Array || a4w[key] instanceof Uint16Array || a4w[key] instanceof Uint32Array ? aHW[key] = Array.from(a4w[key]) : aHW[key] = a4w[key]
		}
		aHW.canvas = 2 === aHW.mapType && aHW.canvas ? aHW.canvas.toDataURL() : null, aHY = aHW, aHY = JSON.stringify(aHY, null, 2), aHY = new Blob([aHY], {
			type: "application/json"
		}), (aCI = document.createElement("a")).href = URL.createObjectURL(aHY), aCI.download = "tt_scenario.json", aCI.click()
	}
}

function cY() {
	var aHr, aHs, size, jJ, hW, aHt;

	function aHu(player) {
		return player < aD.kA ? aHr * player : aHr * aD.kA + aHs * (player - aD.kA)
	}
	this.dd = function() {
		aHr = aD.kA < 16 ? 12 : 8, aHs = 4;
		var en = aHu(aD.ek);
		size = new Uint8Array(aD.ek), jJ = new Uint16Array(en), hW = new Uint32Array(en), aHt = new Uint8Array(en)
	}, this.q8 = function(a7j, aHv) {
		var aHw = this.gq(a7j, aHv),
			aHv = (this.go(a7j, aHv, 0), bA.g9.gC(a7j, aHw));
		bd.gD(a7j, aHw - aHv, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aHC = function(player, aHv) {
		var aHz, aHv = function(player, aHv) {
			var aB, l3 = aHu(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jJ[l3 + aB] === aHv) return aB;
			return size[player]
		}(player, aHv);
		aHv !== size[player] && (aHz = hW[aHu(player) + aHv], this.gE(player, aHv), this.jG(player, aHz, aD.ek))
	}, this.jW = function(player, aHv) {
		for (var l3 = aHu(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHv) return !0;
		return !1
	}, this.jo = function(player) {
		return player < aD.kA ? size[player] < aHr : size[player] < aHs
	}, this.fu = function(player) {
		return size[player]
	}, this.fz = function(player, aB) {
		return jJ[aHu(player) + aB]
	}, this.g0 = function(player, aB) {
		return hW[aHu(player) + aB]
	}, this.gq = function(player, aHv) {
		for (var l3 = aHu(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHv) return hW[l3 + aB];
		return 0
	}, this.aH3 = function(player) {
		for (var l3 = aHu(player), fF = 0, aB = size[player] - 1; 0 <= aB; aB--) fF += hW[l3 + aB];
		return fF
	}, this.go = function(player, aHv, aHz) {
		for (var l3 = aHu(player), aB = size[player] - 1; 0 <= aB; aB--) jJ[l3 + aB] === aHv && (hW[l3 + aB] = aHz)
	}, this.gZ = function(player, aB, aHz) {
		hW[aHu(player) + aB] = Math.max(aHz, 0)
	}, this.ga = function(player, aB) {
		aHt[aHu(player) + aB] = 0
	}, this.g1 = function(player, aB) {
		return aHt[aHu(player) + aB]
	}, this.jG = function(player, aHz, aHv) {
		bA.g9.a3M(aHv) && bd.me[6 - bA.g9.jY(player)]++;
		for (var l3 = aHu(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHv) return hW[l3 + aB] += aHz, void(hW[l3 + aB] = hW[l3 + aB] > aD.a3T ? aD.a3T : hW[l3 + aB]);
		jJ[l3 + size[player]] = aHv, hW[l3 + size[player]] = aHz, aHt[l3 + size[player]] = 1, size[player]++, player < aD.kA && (aHv === aD.eX ? aN.a0A(player, 5) : player === aD.eX && af.a6P(aHv))
	}, this.gE = function(player, e8) {
		var f6, l3;
		if (0 !== size[player])
			for (l3 = aHu(player), size[player]--, f6 = e8; f6 < size[player]; f6++) jJ[l3 + f6] = jJ[l3 + f6 + 1], hW[l3 + f6] = hW[l3 + f6 + 1], aHt[l3 + f6] = aHt[l3 + f6 + 1]
	}, this.aGz = function(player) {
		for (var f6, l3, aH9 = [], aB = al.kB - 1; 0 <= aB; aB--)
			for (l3 = aHu(al.kC[aB]), f6 = size[al.kC[aB]] - 1; 0 <= f6; f6--)
				if (jJ[l3 + f6] === player) {
					aH9.push(al.kC[aB]);
					break
				} return aH9
	}
}

function cZ() {
	var aI0;

	function aI2(player) {
		var e7, jp;
		return bA.g9.jY(player) && player < aD.kA ? 0 : (e7 = aI0[bL.du((aD.ek - 1) * ag.gb[player], aD.ju)], bf.k7() < 1920 && (e7 = Math.max(bL.du(100 * (13440 - 6 * bf.k7()), 1920), e7)), jp = ae.jq(player), ag.gp[player] > jp && (e7 -= bL.du(2 *
			e7 * (ag.gp[player] - jp), jp)), Math.min(Math.max(e7, 0), 700))
	}

	function aIE(nK) {
		for (var gb = ag.gb, kC = al.kC, aB = al.kB - 1; 0 <= aB; aB--) {
			var gL = kC[aB];
			bA.g9.gC(gL, bL.du(nK * gb[gL], 32))
		}
	}

	function aIB() {
		var wZ = aD.eX;
		bO.fJ[0] = ag.gp[wZ] - ag.a3Q[wZ]
	}

	function aID(e8) {
		var wZ = aD.eX;
		bd.me[e8] += ag.gp[wZ] - ag.a3Q[wZ] - bO.fJ[0]
	}
	this.dk = function() {
		for (var en = aD.ek, aB = (aI0 = new Uint16Array(en), 0); aB < en; aB++) aI0[aB] = 100 + aI1(bL.du(25600 * aB, en - 4), 9)
	}, this.dd = function() {
		0 === aD.data.iIncomeType ? this.aB4 = aI2 : 1 === aD.data.iIncomeType ? this.aB4 = function(player) {
			return bL.du(aD.data.iIncomeValue * aI2(player), 64)
		} : this.aB4 = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aI2(player), 64)
		}
	}, this.j3 = function() {
		if (bf.k7() % 10 == 9 && (function() {
				aIB();
				for (var kC = al.kC, gp = ag.gp, aB = al.kB - 1; 0 <= aB; aB--) {
					var gL = kC[aB],
						aIC = bL.du(ae.aB4(gL) * gp[gL], 1e4);
					bA.g9.gC(gL, Math.max(aIC, 1))
				}
				aID(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aIB(), 1 === aD.data.aIncomeType)
						for (var gb = ag.gb, kC = al.kC, nK = aD.data.aIncomeValue, aB = al.kB - 1; 0 <= aB; aB--) {
							var gL = kC[aB];
							bA.g9.gC(gL, bL.du(nK * gb[gL], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gb = ag.gb, kC = al.kC, nK = aD.data.aIncomeData, aB = al.kB - 1; 0 <= aB; aB--) {
								var gL = kC[aB];
								bA.g9.gC(gL, bL.du(nK[gL] * gb[gL], 128))
							}
						}();
					aID(18)
				}
			}(), bf.k7() % 100 == 99)) {
			if (aIB(), 0 === aD.data.tIncomeType) aIE(32);
			else if (1 === aD.data.tIncomeType) aIE(aD.data.tIncomeValue);
			else
				for (var gb = ag.gb, kC = al.kC, nK = aD.data.tIncomeData, aB = al.kB - 1; 0 <= aB; aB--) {
					var gL = kC[aB];
					bA.g9.gC(gL, bL.du(nK[gL] * gb[gL], 32))
				}
			aID(8)
		}
	}, this.jq = function(player) {
		return Math.min(100 * ag.gb[player], aD.a4K)
	}, this.p6 = function(player, p7) {
		bq.pT(player, p7, bO.fK[0], 0), bA.g9.gC(p7, bO.fK[0]), bd.pU(player, p7), af.aI4(player, bO.fK[0] + bO.fK[1]), af.pV(p7, bO.fK[0]), bA.g9.mJ(player)
	}, this.aI5 = function() {
		for (var en = al.kB, zm = al.kC, l3 = 0, a3R = ag.gp, aB = 0; aB < en; aB++) l3 += a3R[zm[aB]];
		return l3
	}, this.aI6 = function(aI7) {
		for (var gL, en = al.kB, zm = al.kC, l3 = 0, a3R = ag.gp, el = bg.el, aB = 0; aB < en; aB++) el[gL = zm[aB]] === aI7 && (l3 += a3R[gL]);
		return l3
	}
}

function cb() {
	var aII, aIJ, aIK, aIL, aIM, aIN, aIO, aIP, aIQ, aIR, aIS, aIT, aIU, aIV, aIW, aIX, aIY, aIZ, aIb, aIc, aCB, aId, aIe, aIl, aIm, aIa = null,
		aIg = 0,
		aIh = !1,
		aIi = new Float32Array(4),
		aIj = 0,
		aIk = !0,
		aAC = 400,
		aIn = 0;

	function qd() {
		aIQ = Math.floor(+h.hx), aIR = Math.floor(.5 * aIQ)
	}

	function aIo() {
		var aB, aIt;
		for (ui.font = bA.qa.sP(1, 100 * aIS), aIt = 80 / Math.floor(ui.measureText(bA.rZ.zF(aD.a3T)).width), ui.font = bA.qa.sP(1, 100), aB = aD.ek - 1; 0 <= aB; aB--) aIP[aB] = 100 / Math.floor(ui.measureText(ag.yR[aB]).width), aIO[aB] = Math.min(
			aIt, aIP[aB])
	}

	function aIu(aB) {
		return !aIn || (aB = ag.gp[aB]) < 1e6 ? 1 : aB < 1e7 ? aIi[0] : aIi[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aIs(hp) {
		aIZ = !1, aIY = 1, aIW = aIX = 0, aIk && (bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1));
		for (var aJ0, aJ1, aB, aJ2, fontSize, aJ3, n8 = iO / hy, n9 = iP / hy, nL = (h.i + iO) / hy, nM = (h.j + iP) / hy, aJ4 = 0 !== ag.mi[aD.eX] && !bA.g9.jY(aD.eX), f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6], (fontSize = Math.floor(aIV * hy *
			aIu(aB) * aIO[aB] * aIM[aB])) < aIU || aIQ <= fontSize || aIK[aB] + aIM[aB] > n8 && aIK[aB] < nL && aIL[aB] + aIN[aB] > n9 && aIL[aB] < nM && (aJ0 = Math.floor(h.i * (aIK[aB] + aIM[aB] / 2 - n8) / (nL - n8)), aJ1 = Math.floor(h.j * (
			aIL[aB] + aIN[aB] / 2 - n9) / (nM - n9) - .1 * fontSize), aJ2 = ac.a8E[aB], hp.font = bA.qa.sP(1 === ag.a3I[aB] ? 4 : 1, fontSize), hp.fillStyle = aJ5(fontSize, aJ2 % 2), aIn ? aJ6(hp, aB, fontSize, aJ0, aJ1, aJ2) : aJ7(aB,
			fontSize, aJ0, aJ1, hp), aIZ = !0, 0 < aCB[aB] ? function(aJ0, aJ1, fontSize, aB, hp) {
			0 === jv[aB] ? aj.rq.z6(aIc[aB]) ? (function(aJ0, aJ1, fontSize, player, pI, hp) {
				for (var x6 = aJ1, ho = (hp.globalAlpha = aJF(fontSize), aIu(player) * (aIn ? aIj : aIP[player])), x5 = aJ0 - .5 * fontSize / ho - .9 * fontSize, f7 = 0; f7 < 2; f7++) hp.fillText(aj.rq.yy(pI), x5, x6), x5 = aJ0 + .5 *
					fontSize / ho + .9 * fontSize;
				hp.globalAlpha = 1
			}(aJ0, aJ1, fontSize, aB, aIc[aB], hp), aJ9(aJ0, aJ1, fontSize, 0, 0, hp)) : aj.rq.z8(aIc[aB]) ? (aJI(aJ0, aJ1, fontSize, aIc[aB], 0, hp), aJ9(aJ0, aJ1, fontSize, 0, 1, hp)) : (aJI(aJ0, aJ1, fontSize, aIc[aB], 1, hp), aJ9(aJ0,
				aJ1, fontSize, 1, 0, hp)) : aJI(aJ0, aJ1, fontSize, aIc[aB], 0, hp)
		}(aJ0, aJ1, fontSize, aB, hp) : 0 === jv[aB] && aJ9(aJ0, aJ1, fontSize, 0, 0, hp), aJ4 && (0 < aCB[aB + aD.ek] || 0 < aCB[aB + 2 * aD.ek] || 0 < aCB[aB + 3 * aD.ek] || 0 < aCB[aB + 4 * aD.ek]) && function(aJ0, aJ1, fontSize, aB, hp) {
			var f8, gG = -1;
			for (f8 = 4; 1 <= f8; f8--) 0 < aCB[aB + f8 * aD.ek] && gG++;
			for (f8 = 1; f8 < 5; f8++) 0 < aCB[aB + f8 * aD.ek] && (! function(aJ0, aJ1, fontSize, f8, aB, aJD, dt, hp) {
				var a2m;
				if (1 === f8) {
					aB = aIc[aB + aD.ek];
					if (!aj.rq.z7(aB)) return function(aJ0, aJ1, fontSize, pI, aJD, hp) {
						hp.globalAlpha = aJF(fontSize);
						aJ0 -= .534 * aJD * fontSize, aJD = aJ1 + 1.59 * fontSize;
						hp.font = bA.qa.sP(0, .785 * fontSize), hp.fillText(aj.rq.yy(pI), aJ0, aJD), hp.globalAlpha = 1
					}(aJ0, aJ1, fontSize, aB, aJD, hp);
					a2m = aj.wY.yX[aB - 1024 + aj.rq.yj]
				} else a2m = 2 === f8 ? aL.a5C()[4].canvas[+(dt < 255)] : (3 === f8 ? aL.a5C()[5] : aL.a5C()[6]).canvas[0];
				aB = aj.wY.yY, dt = .8 * fontSize / aB, f8 = aJ0 - .5 * dt * aB - .534 * aJD * fontSize, aJ0 = aJ1 + 1.4 * dt * aB;
				hp.setTransform(dt, 0, 0, dt, f8, aJ0), hp.globalAlpha = aJF(fontSize), hp.drawImage(a2m, 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}(aJ0, aJ1, fontSize, f8, aB, gG, aCB[aB + f8 * aD.ek], hp), gG -= 2)
		}(aJ0, aJ1, fontSize, aB, hp), (aJ3 = aIS * fontSize) < aIU || (hp.font = bA.qa.sP(1, aJ3), aJ1 += Math.floor(.78 * fontSize), aIn ? aJ7(aB, aJ3, aJ0, aJ1, hp) : aJ6(hp, aB, aJ3, aJ0, aJ1, aJ2)))
	}

	function aJ7(aB, fontSize, eu, ew, hp) {
		var ___id = aB;
		var showName = aB < aD.kA || !__fx.settings.hideBotNames;
		if (showName) hp.fillText(ag.yR[aB], eu, ew), aB < aD.kA && 2 !== ag.a3I[aB] || (aB = fontSize / aIP[aB], hp.fillRect(eu - .5 * aB, ew + bA.qa.yz * fontSize, aB, Math.max(1, .1 * fontSize)));
		aIn && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hp.fillText(__fx.utils.getDensity(___id), eu, showName ? ew + fontSize : ew)
		);
	}

	function aJ6(hp, aB, fontSize, aJ0, aJ1, aJ2) {
		var ___id = aB;
		aB = bA.rZ.zF(ag.gp[aB]);
		aJ2 >> 1 & 1 ? (hp.lineWidth = .05 * fontSize, hp.strokeStyle = aJ5(fontSize, aJ2 % 2), hp.strokeText(aB, aJ0, aJ1)) : (1 < aJ2 && (hp.lineWidth = .12 * fontSize, hp.strokeStyle = aJ5(fontSize, aJ2), hp.strokeText(aB, aJ0, aJ1)), hp.fillText(
			aB, aJ0, aJ1));
		aIn || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hp.fillText(__fx.utils.getDensity(___id), aJ0, aJ1 + fontSize))
	}

	function aJ9(aJ0, aJ1, fontSize, aJD, aJE, hp) {
		var a5h = .95 * fontSize / aIe,
			aJ0 = aJ0 - .5 * a5h * aId + .8 * aJD * fontSize,
			aJD = aJ1 - 1.76 * a5h * aIe - (.35 - bA.qa.yz + .7) * aJE * fontSize;
		hp.setTransform(a5h, 0, 0, a5h, aJ0, aJD), hp.globalAlpha = aJF(fontSize), hp.drawImage(ab.get(4), 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJI(aJ0, aJ1, fontSize, pI, aJD, hp) {
		var hj, x5, a5h;
		hp.globalAlpha = aJF(fontSize), aj.rq.z7(pI) ? (hj = aj.wY.yY, hp.setTransform(a5h = 1.1 * fontSize / hj, 0, 0, a5h, x5 = aJ0 - .5 * a5h * hj - .8 * aJD * fontSize, a5h = aJ1 - 1.55 * a5h * hj), hp.drawImage(aj.wY.yX[pI - 1024 + aj.rq.yj], 0,
			0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (x5 = aJ0 - .8 * aJD * fontSize, a5h = aJ1 - (.35 - bA.qa.yz + 1) * fontSize, hp.fillText(aj.rq.yy(pI), x5, a5h)), hp.globalAlpha = 1
	}

	function aJ5(fontSize, aJ2) {
		return aIR <= fontSize && fontSize < aIQ ? bg.aJK[aJ2] + aJF(fontSize).toFixed(3) + ")" : bg.aJL[aJ2]
	}

	function aJF(fontSize) {
		return aIR <= fontSize && fontSize < aIQ ? 1 - (fontSize - aIR) / (aIQ - aIR) : 1
	}

	function aJU(ho, i) {
		return 1 + Math.floor(aIT * ho * i)
	}

	function aJR(aB) {
		for (var left = aIK[aB], f6 = aIK[aB] - ag.ie[aB] - 1; 0 <= f6; f6--)
			if (!aJW(aB, --left, aIL[aB], aIN[aB])) {
				left++;
				break
			} var right = aIK[aB];
		for (f6 = ag.ig[aB] - aIK[aB] - aIM[aB]; 0 <= f6; f6--)
			if (!aJW(aB, ++right + aIM[aB] - 1, aIL[aB], aIN[aB])) {
				right--;
				break
			} var eu = Math.floor((left + right) / 2),
			top = aIL[aB];
		for (f6 = aIL[aB] - ag.ih[aB] - 1; 0 <= f6; f6--)
			if (!aJX(aB, eu, --top, aIM[aB])) {
				top++;
				break
			} var bottom = aIL[aB];
		for (f6 = ag.ii[aB] - aIL[aB] - aIN[aB]; 0 <= f6; f6--)
			if (!aJX(aB, eu, ++bottom + aIN[aB] - 1, aIM[aB])) {
				bottom--;
				break
			} var ew = Math.floor((top + bottom) / 2);
		aJO(aB, eu, ew, aIM[aB], aIN[aB]) && (aIK[aB] = eu, aIL[aB] = ew)
	}

	function aJO(player, eu, ew, i, j) {
		eq = Math.floor(.2 * i);
		for (var eq, f8 = eu + i - 1; eu <= f8; f8--)
			if (!aJW(player, f8, ew, j)) return;
		for (f8 = ew + j - 1 - (eq = (eq = Math.floor(.25 * j)) < 1 ? 1 : eq); ew + eq <= f8; f8--)
			if (!aJX(player, eu, f8, i)) return;
		return 1
	}

	function aJW(player, eu, ew, j) {
		return ac.xx(player, 4 * (ew * bS.ey + eu)) && ac.xx(player, 4 * ((ew + j - 1) * bS.ey + eu))
	}

	function aJX(player, eu, ew, i) {
		return ac.xx(player, 4 * (ew * bS.ey + eu)) && ac.xx(player, 4 * (ew * bS.ey + eu + i - 1))
	}
	this.dd = function() {
		if (aIn = bj.eK.data[7].value || 8 === aD.kS, aAC = 0 === (aAC = bj.eK.data[11].value) ? 280 : 1 === aAC ? 187 : 112, aIZ = !1, aIV = .88, aIS = .5, aIT = 1.8, aIU = 12 - 3 * bj.eK.data[9].value, aIJ = aII = 0, aIK = new Uint16Array(aD
				.ek), aIL = new Uint16Array(aD.ek), aIM = new Uint16Array(aD.ek), aIN = new Uint16Array(aD.ek), aIO = new Float32Array(aD.ek), aIP = new Float32Array(aD.ek), aIc = new Uint16Array(2 * aD.ek), aCB = new Uint8Array(5 * aD.ek), aIl =
			new Uint8Array(aD.ek), aIm = new Uint8Array(aD.ek), aIk || (aIa = aIa || document.createElement("canvas")), qd(), aIX = aIW = 0, aIY = 1, aIn) {
			var aB, aIt;
			for (aIo(), ui.font = bA.qa.sP(1, 100), aIt = 100 / Math.floor(ui.measureText("900 000").width), aB = aD.ek - 1; 0 <= aB; aB--) aIO[aB] = Math.min(aIt, 2 * aIP[aB]);
			aIj = aIt, aIi[0] = 100 / (aIt * Math.floor(ui.measureText("5 000 000").width)), aIi[1] = 100 / (aIt * Math.floor(ui.measureText("50 000 000").width)), aIi[2] = 100 / (aIt * Math.floor(ui.measureText("500 000 000").width)), aIi[3] =
				100 / (aIt * Math.floor(ui.measureText("1 000 000 000").width))
		} else aIo();
		! function() {
			var aB;
			for (aB = aD.ek - 1; 0 <= aB; aB--) ag.gb[aB] < 12 ? (aIK[aB] = ag.ie[aB] + 1, aIL[aB] = ag.ih[aB] + 1, aIM[aB] = 1, aIN[aB] = 1) : (aIK[aB] = ag.ie[aB], aIL[aB] = ag.ih[aB] + 1, aIM[aB] = 4, aIN[aB] = 2);
			if (aD.hB)
				for (aB = 0; aB < aD.kA; aB++) aIM[aB] = 0;
			aId = ab.get(4).width, aIe = ab.get(4).height
		}()
	}, this.aI4 = function(gL, a4u) {
		a4u > 18 * ag.gb[gL] ? (aIm[gL] = 6, ac.a8E[gL] = 2 + ac.a8E[gL] % 2) : (aIl[gL] = 4, (ac.a8E[gL] < 2 || 3 < ac.a8E[gL]) && (ac.a8E[gL] = 6 + ac.a8E[gL] % 2))
	}, this.pV = function(gL, a4u) {
		a4u > 6 * ag.gb[gL] ? (aIm[gL] = 6, ac.a8E[gL] = 4 + ac.a8E[gL] % 2) : (aIl[gL] = 4, (ac.a8E[gL] < 4 || 5 < ac.a8E[gL]) && (ac.a8E[gL] = 8 + ac.a8E[gL] % 2))
	}, this.resize = function() {
		qd(), aIk || aIs(aIb)
	}, this.a4G = function() {
		for (var aB = 0; aB < aD.kA; aB++) ag.ig[aB] - ag.ie[aB] != 3 || ag.ii[aB] - ag.ih[aB] != 3 ? (aIK[aB] = ag.ie[aB] + (ag.ig[aB] !== ag.ie[aB] ? 1 : 0), aIL[aB] = ag.ih[aB], aIM[aB] = 1, aIN[aB] = 1) : (aIK[aB] = ag.ie[aB], aIL[aB] = ag
			.ih[aB] + 1, aIM[aB] = 4, aIN[aB] = 2)
	}, this.q9 = function(player, e8, aIv) {
		! function(player, e8, aIv) {
			player += e8 * aD.ek;
			0 === e8 ? aIc[player] === aIv && 0 < aCB[player] ? aCB[player] = 0 : (aIc[player] = aIv, aCB[player] = aj.rq.z6(aIv) ? 255 : 64) : 1 === e8 ? (aCB[player] = 64, aIc[player] = aIv) : aCB[player] = aIv
		}(player, e8, aIv), 2 === aD.zy && this.mU(!0)
	}, this.uh = function() {
		aIk ? aIs(ui) : aIZ && (1 !== aIY ? (ui.imageSmoothingEnabled = !0, ui.setTransform(aIY, 0, 0, aIY, 0, 0), ui.drawImage(aIa, -aIW / aIY, -aIX / aIY), ui.setTransform(1, 0, 0, 1, 0, 0), ui.imageSmoothingEnabled = !1) : ui.drawImage(aIa, -
			aIW, -aIX))
	}, this.a91 = function(i7, iA) {
		aIW += i7, aIX += iA
	}, this.a1S = function(i7, iA) {
		af.a91(i7, iA)
	}, this.zoom = function(a2L, lN, lO) {
		aIY *= a2L, aIW = (aIW + lN) * a2L - lN, aIX = (aIX + lO) * a2L - lO
	}, this.mU = function(bu) {
		return !aIk && !(!aIh && !bu && bf.eM < aIg + (1 === aIY && 0 === aIW && 0 === aIX && (aD.a4k() || aD.hB || 2 === aD.zy) ? 1e3 : aAC) || (aIh = !1, aIg = bf.eM, aIs(aIb), 0))
	}, this.aIy = function(aB) {
		return aIu(aB) * aIO[aB]
	}, this.aIz = function(player) {
		return aIO[player]
	}, this.j3 = function() {
		bf.k7() % 10 == 9 && (aIh = aD.a4m() && !aD.a4k()), !aD.a4k() && 4 <= ++aIJ && function() {
			var aB, f6, f7;
			for (aIJ = 0, f7 = 4; 1 <= f7; f7--)
				for (f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6] + f7 * aD.ek, 0 < aCB[aB] && aCB[aB] < 255 && aCB[aB]--;
			if (2 !== aD.zy)
				for (f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6], 0 < aCB[aB] && aCB[aB] < 255 && aCB[aB]--
		}();
		var aB, f6, en = Math.floor(.1 * al.kB);
		for (en = (en = en < 8 ? 8 : en) > al.kB ? al.kB : en, aB = aII + en - 1; aII <= aB; aB--) f6 = aB % al.kB, ! function(aB) {
			var ho = aIu(aB) * aIO[aB];
			0 < aIM[aB] && aJO(aB, aIK[aB], aIL[aB], aIM[aB], aIN[aB]) ? ! function(aB) {
				for (var eu, ew, i, j, eR = !1, f7 = 0; f7 < 8; f7++) {
					if (i = aIM[aB] + 2, j = aIN[aB] + 2, i > ag.ig[aB] - ag.ie[aB] + 1 || j > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					if (eu = aIK[aB] - 1, ew = aIL[aB] - 1, !aJO(aB, eu, ew, i, j)) return eR;
					aIK[aB] = eu, aIL[aB] = ew, aIM[aB] = i, aIN[aB] = j, eR = !0
				}
				return eR
			}(aB) && function(aB, ho) {
				for (var eu, ew, i, j, eR = !1, aCK = aIM[aB], nK = 1 + Math.floor(.02 * aCK), f7 = 1; f7 < 5; f7++) {
					if ((i = aCK + f7 * nK) > ag.ig[aB] - ag.ie[aB] + 1) return eR;
					if ((j = aJU(ho, i)) > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJO(aB, eu, ew, i, j) && (aIK[aB] = eu, aIL[aB] = ew, aIM[
						aB] = i, aIN[aB] = j, eR = !0)
				}
				return eR
			}(aB, ho) && aJR(aB) : ! function(aB, ho) {
				var j, eu = aIK[aB] + 1,
					ew = aIL[aB] + 1,
					i = aIM[aB] - 2;
				for (;;) {
					if (i < 1) {
						aIM[aB] = 0;
						break
					}
					if (j = aJU(ho, i), aJO(aB, eu, ew, i, j)) return aIK[aB] = eu, aIL[aB] = ew, aIM[aB] = i, aIN[aB] = j, 1;
					eu++, ew++, i -= 2
				}
				return
			}(aB, ho) ? function(aB, ho) {
				var eu, ew, i, j, f7, nQ, jR = ag.ig[aB] - ag.ie[aB] + 1,
					aJV = Math.floor(.02 * jR);
				for (nQ = -6 * (aJV = aJV < 1 ? 1 : aJV), f7 = jR; nQ <= f7; f7 -= aJV)
					if (j = aJU(ho, i = 0 < f7 ? f7 : 1), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJO(aB, eu, ew, i, j))
						return aIK[aB] = eu, aIL[aB] = ew, aIM[aB] = i, aIN[aB] = j
			}(aB, ho) : aJR(aB)
		}(al.kC[f6]);
		aII = (aII += en) % al.kB
	}, this.mP = function() {
		var aB, gL, z4, z5;
		if (bf.k7() % 4 == 1)
			for (aB = al.kB - 1; 0 <= aB; aB--) gL = al.kC[aB], ac.a8E[gL] < 2 || ((z4 = Math.max(aIl[gL] - 1, 0)) === (z5 = Math.max(aIm[gL] - 1, 0)) ? 0 === z4 && (ac.a8E[gL] %= 2) : 0 === z5 && ac.a8E[gL] < 6 && (ac.a8E[gL] += 4), aIl[gL] =
				z4, aIm[gL] = z5)
	}, this.a6P = function(player) {
		var aB = player + 2 * aD.ek,
			dt = aCB[aB];
		return 0 < dt && (aN.a05(50, player), aCB[aB] = 0, 255 === dt)
	}, this.a5R = function(player) {
		return 255 === aCB[player + 2 * aD.ek]
	}
}

function cd() {
	var aJY, aJZ, aJa;
	this.dd = function() {
		aJY =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJZ =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aJa = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6g = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJb = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aJY.length - 1; 0 <= aB; aB--)
			for (var f6 = a6g.length - 1; 0 <= f6; f6--) aJY[aB] = aJY[aB].replace(a6g[f6], aJb[f6]);
		if (__fx.settings.realisticNames) aJY = realisticNames;
	}, this.a4W = function() {
		var en = aD.kA,
			yR = ag.yR,
			a0c = ag.a0c,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < en)
			for (var aB = 0; aB < en; aB++) yR[aB] = a0c[aB] = "Player " + ay.jS(1e3);
		else
			for (aB = 0; aB < en; aB++) yR[aB] = a0c[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kS) {
			for (var e7 = ay.random(), aJh = aJa, aJi = aJZ, hW = aE.hW, en = aJh.length, l3 = aD.data.teamPlayerCount[7], yR = ag.yR, a0c = ag.a0c, aB = l3 - 1; aB >= aD.kA; aB--) yR[aB] = a0c[aB] = aJh[(aB + e7) % en];
			for (en = aJi.length - 1, aB = l3; aB < aD.ek; aB++) yR[aB] = a0c[aB] = aJi[hW[aB] ? en : aB % en]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var en = aD.ek, yR = ag.yR, a0c = ag.a0c, playerNamesData = aD.data.playerNamesData, aB = aD.kA; aB < en; aB++) yR[aB] = a0c[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var yR = ag.yR, a0c = ag.a0c, aB = aD.kA; aB < aD.ek; aB++) yR[aB] = a0c[aB] = "Bot " + ay.jS(1e3)
		} : function() {
			for (var aJj = aJY, en = aJj.length, e7 = ay.random(), yR = ag.yR, a0c = ag.a0c, aB = aD.kA; aB < aD.ek; aB++) yR[aB] = a0c[aB] = aJj[(aB + e7) % en]
		})()
	}
}

function cw() {
	this.aJk = [], this.aJl = [], this.dd = function() {
		this.aJk = [], this.aJl = []
	}, this.j3 = function() {
		0 <= this.aJk.length && this.aJm(this.aJk), 0 <= this.aJl.length && this.aJm(this.aJl)
	}, this.aJm = function(g) {
		for (var f7 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eM--, g[aB].eM <= 0) {
				f7 = aB;
				break
			} for (aB = f7; 0 <= aB; aB--) g.shift()
	}, this.a5K = function(id, zm, aJn) {
		return this.f9(this.aJk, id, zm, aJn)
	}, this.aJo = function(id, zm, aJn) {
		return this.f9(this.aJl, id, zm, aJn)
	}, this.f9 = function(g, id, zm, aJn) {
		return ! function(g, id, zm) {
			var aB, hf;
			for (aB = zm.length - 1; 0 <= aB; aB--)
				for (hf = g.length - 1; 0 <= hf; hf--)
					if (g[hf].player === zm[aB] && id === g[hf].id) return 1;
			return
		}(g, id, zm) && (aJn && function(g, id, zm) {
			var aB;
			for (aB = zm.length - 1; 0 <= aB; aB--) g.push({
				player: zm[aB],
				id: id,
				eM: 384
			})
		}(g, id, zm), !0)
	}
}

function cc() {
	this.a0c = new Array(aD.ek), this.yR = new Array(aD.ek), this.a3I = new Uint8Array(aD.ek), this.mi = new Uint8Array(aD.ek), this.ie = new Uint16Array(aD.ek), this.ih = new Uint16Array(aD.ek), this.ig = new Uint16Array(aD.ek), this.ii =
		new Uint16Array(aD.ek), this.gb = new Uint32Array(aD.ek), this.xX = new Uint32Array(aD.ek), this.gp = new Uint32Array(aD.ek), this.gF = null, this.gT = null, this.gU = null, this.fD = null, this.pz = new Uint16Array(aD.ek), this.jC =
		new Uint16Array(aD.ek), this.jD = new Uint16Array(aD.ek), this.a0X = new Uint16Array(aD.ek), this.a0V = new Uint8Array(aD.ek), this.a3Q = new Uint16Array(aD.ek), this.dd = function() {
			this.a0c.fill(""), this.yR.fill(""), this.a3I.fill(0), this.mi.fill(0), this.ie.fill(0), this.ih.fill(0), this.ig.fill(0), this.ii.fill(0), this.gb.fill(0), this.xX.fill(0), this.gp.fill(0), this.gF = new Array(aD.ek), this.gT =
				new Array(aD.ek), this.gU = new Array(aD.ek), this.fD = new Array(aD.ek), this.pz.fill(0), this.jC.fill(0), this.jD.fill(0), this.a0X.fill(0), this.a0V.fill(0), this.a3Q.fill(0)
		}
}

function cu() {
	this.aCf = function(player) {
		aG.mh(player), aD.a00++, ag.a3I[player] = 2, ag.a0X[player] = bi.a0n.aH8(), player === aD.eX && (aX.show(!1, !1), aW.aAq(), bR.zj.a0T()), af.a6P(player)
	}
}

function cV() {
	this.kC = null, this.kB = 0, this.a4a = function() {
		for (this.kB = 0, aB = aD.ek - 1; 0 <= aB; aB--) 0 !== ag.mi[aB] && this.kB++;
		this.kC = new Uint16Array(this.kB);
		for (var en = 0, aB = 0; aB < aD.ek; aB++) 0 !== ag.mi[aB] && (this.kC[en++] = aB)
	}, this.mO = function() {
		for (var gb = ag.gb, xX = ag.xX, a0V = ag.a0V, kC = al.kC, aB = al.kB - 1; 0 <= aB; aB--) {
			var gL = kC[aB],
				dt = gb[gL],
				l3 = xX[gL];
			dt <= bL.du(l3, 4) ? ak.dm(gL) : l3 <= dt ? 250 <= (xX[gL] = dt) && (a0V[gL] = 1) : xX[gL] = l3 - Math.max(1, bL.du(l3 - dt, 1e3))
		}
		this.aJs()
	}, this.aJs = function() {
		for (var mi = ag.mi, l2 = this.kC, aBY = this.kB, aB = aBY - 1; 0 <= aB; aB--) 0 === mi[l2[aB]] && (l2[aB] = l2[--aBY]);
		this.kB = aBY
	}
}

function cW() {
	var aJt = new Uint16Array(aD.ek),
		aJu = 0;

	function aJy(a6V, aJw) {
		var f8 = bf.k7();
		return 3213 <= f8 ? 4 + bL.du(100 * aJw, ae.jq(a6V)) : (a6V = 1 + bL.du(aD.ju, 300), f8 < 357 ? 2 + bL.du(100 * aJw, a6V) : f8 < 714 ? 2 + bL.du(100 * aJw, 4 * a6V) : f8 < 1071 ? 2 + bL.du(100 * aJw, 10 * a6V) : f8 < 2142 ? 2 + bL.du(100 *
			aJw, 30 * a6V) : 2 + bL.du(100 * aJw, 100 * a6V))
	}

	function aJx(a6V) {
		return aD.kU || 7 <= aD.kS || 4284 <= bf.k7() || bA.g9.jY(a6V)
	}
	this.dd = function() {
		aJt.fill(0), aJu = 15
	}, this.hR = function(p7) {
		var player = aD.eX;
		return !!bA.g9.q1(player, p7) && !(!bA.g9.pQ(player, bA.g9.iM(player, aR.hH()), p7) || (player = p7, p7 = bO.fK[0], !aJx(player) && aJt[player] + aJy(player, p7) > aJu))
	}, this.jG = function(a6V, aJw) {
		if (!aJx(a6V)) {
			aJw = aJy(a6V, aJw);
			if (aJt[a6V] + aJw > aJu) return !1;
			aJt[a6V] += aJw
		}
		return !0
	}, this.j3 = function() {
		bf.k7() % 100 == 99 && (bf.k7() < 1071 ? aJu += 4 : bf.k7() < 2142 ? aJu += 6 : bf.k7() < 3213 ? aJu += 8 : aJu += 10)
	}
}

function ce() {
	var aJz;
	this.kb = null, this.ka = 0, this.dd = function() {
		aJz = [], 9 === aD.kS && this.aK0()
	}, this.aK0 = function() {
		this.kb = [0, 0, 0, 0, 0, 0];
		for (var aK1 = [256, 227, 170, 148, 100, this.ka = 0, 0, 0], aK2 = [0, 8, 24, 30, 46, 70, 256, 333], aK3 = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kA, aB = 1; aB < aK1.length; aB++)
			if (j <= aK2[aB]) {
				this.ka = aK1[aB - 1] - bL.du((j - aK2[aB - 1]) * (aK1[aB - 1] - aK1[aB]), aK2[aB] - aK2[aB - 1]), this.kb[5] = aK3[aB - 1] - bL.du((j - aK2[aB - 1]) * (aK3[aB - 1] - aK3[aB]), aK2[aB] - aK2[aB - 1]), this.kb[0] = aD.ek - j - this
					.ka - this.kb[5];
				break
			} aD.kW = aD.ek - aD.kA, aD.data.numberTeams = (0 < aD.kA) + (0 < aD.kW), aD.data.playerCount = aD.x3 = aD.kA + aD.kW, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kA + this.ka, aD.kW - this.ka]), aD.a4P.a4U()
	}, this.aHF = function(player) {
		aJz.push({
			player: player,
			gG: 14 + ay.jS(20)
		})
	}, this.j3 = function() {
		if (9 === aD.kS)
			for (var aB = aJz.length - 1; 0 <= aB; aB--) --aJz[aB].gG <= 0 && (af.q9(aJz[aB].player, 0, aj.rq.ym + aj.rq.z0), aJz.splice(aB))
	}
}

function dB() {
	function aKI() {
		return {
			ey: bS.ey,
			ez: bS.ez,
			wV: bS.wV,
			wR: bS.wR,
			wS: bS.wS,
			wW: bS.wW,
			eT: bS.eT,
			mapSeed: bS.mapSeed,
			wT: bS.wT
		}
	}

	function aKA(aB) {
		return 1 !== aB && bS.aD9(aB) && aB !== bS.aKK()
	}
	this.aK5 = 22, this.aHQ = 4096, this.ey = 0, this.ez = 0, this.wV = null, this.wR = null, this.wS = null, this.wW = null, this.eT = 0, this.mapSeed = 0, this.wT = !1, this.wU = new aK6, this.wL = new aK7, this.a6m = new aK8, this.dd =
function() {
		this.wL.dd()
	}, this.a7 = function(map, aK9) {
		((map %= this.aK5) !== this.eT || aKA(this.eT) && aK9 !== this.mapSeed) && (this.wT = !1, this.wU.aKB(), ay.a4V(map), this.eT = map, this.mapSeed = aK9, aKA(map) && (bS.wL.wM[map].aKC = aK9), this.aD9(this.eT) ? (map = bS.wL.wM[this.eT],
			this.ey = map.i, this.ez = map.j, ay.a4V(map.aKC), aq.a7([this.ey, this.ez, map.mn, map.mk]), aKE(), ap.aKF(), aq.aKG()) : aKD())
	}, this.aKH = function(map, aK9) {
		var fW = aKI(),
			map = (this.a7(map, aK9), this.wU.aKB(), aKI());
		return aK9 = fW, bS.ey = aK9.ey, bS.ez = aK9.ez, bS.wV = aK9.wV, bS.wR = aK9.wR, bS.wS = aK9.wS, bS.wW = aK9.wW, bS.eT = aK9.eT, bS.mapSeed = aK9.mapSeed, bS.wT = aK9.wT, map
	}, this.a4q = function(canvas) {
		canvas && this.wV !== canvas && (this.ey = canvas.width, this.ez = canvas.height, this.wV = canvas, this.wR = this.wV.getContext("2d", {
			alpha: !1
		}), this.hm = this.wR.getImageData(0, 0, this.ey, this.ez), this.wW = this.hm.data, this.eT = this.aKK(), this.mapSeed = 0, bS.wL.wM[this.eT].name = aD.data.mapName)
	}, this.eS = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aKK()
	}, this.aKL = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aKM = function(aB) {
		return 1 === aB
	}, this.aKK = function() {
		return this.aK5
	}, this.aD9 = function(aB) {
		return void 0 === this.wL.wM[aB].aKN
	}, this.a4p = function(qS) {
		return 0 === qS.mapType ? qS.mapProceduralIndex < 10 ? qS.mapProceduralIndex : 10 + qS.mapProceduralIndex : 1 === qS.mapType ? qS.mapRealisticIndex + 10 : void 0
	}, this.aDA = function(qS, aKO) {
		0 === qS.mapType ? qS.mapProceduralIndex = aKO < 10 ? aKO : aKO - 10 : 1 === qS.mapType && (qS.mapRealisticIndex = aKO - 10)
	}
}

function aK6() {
	function aKX() {
		bS.wU.j3()
	}

	function aKd(gL, aKc) {
		0 < aKc && (bS.wW[gL] += aKc, bS.wW[gL + 1] += aKc, bS.wW[gL + 2] += aKc)
	}

	function i1(gL) {
		return bS.wW[gL + 2] > bS.wW[gL] && bS.wW[gL + 2] > bS.wW[gL + 1]
	}
	this.a9D = -1, this.a10 = 0, this.aKP = 0, this.aKQ = 8, this.aKR = 32, this.aKS = 8, this.aKT = 32, this.aKU = [0, 0], this.a8E = [0, 0, 0, 0], this.iX = null, this.aKV = !0, this.aKW = !1, this.aKB = function() {
		-1 !== this.a9D && clearTimeout(this.a9D), this.a9D = -1, this.iX = null, aq.aKG()
	}, this.dd = function() {
		7 === aa.a19() || this.aKW || (this.aKV = !0, this.a10 = 0, this.aKP = 1, this.aKU = [bS.wL.wM[bS.eT].wn[0], bS.wL.wM[bS.eT].wo[0]], this.a8E = [bS.wL.wM[bS.eT].aKN[3], bS.wL.wM[bS.eT].aKN[4], bS.wL.wM[bS.eT].aKN[5], bS.wL.wM[bS.eT].aKN[
			6]], this.aKQ = bS.wL.wM[bS.eT].aKN[7], this.aKR = bS.wL.wM[bS.eT].aKN[8], this.aKS = bS.wL.wM[bS.eT].aKN[9], this.aKT = bS.wL.wM[bS.eT].aKN[10], this.aKV ? this.a9D = setTimeout(aKX, 16) : this.j3())
	}, this.j3 = function() {
		if (8 === aa.a19() && aH.n0()) this.a9D = setTimeout(aKX, 16);
		else {
			if (0 === this.a10) {
				var aKC = ay.aKY();
				if (ay.a4V(bS.wL.wM[bS.eT].aKN[2]), aq.a7([bS.ey, bS.ez, bS.wL.wM[bS.eT].aKN[0], bS.wL.wM[bS.eT].aKN[1]]), ay.a4V(aKC), this.iX = aq.aKZ(), this.a10++, this.aKV) return void(this.a9D = setTimeout(aKX, 16))
			}
			for (var gL, eZ, aKC = this.aKV ? 10 : 1e6, aKC = bS.ez - this.aKP - 1 < aKC ? bS.ez - this.aKP - 1 : aKC, xk = this.aKP + aKC, ew = this.aKP; ew < xk; ew++)
				for (var eu = 1; eu < bS.ey - 1; eu++) i1(gL = 4 * (eZ = eu + ew * bS.ey)) ? this.aKa(gL, eZ, 1) : (this.aKa(gL, eZ, 0), function(eu, ew, gL) {
					return 1 < eu && i1(gL - 4) || eu < bS.ey - 2 && i1(gL + 4) || 1 < ew && i1(gL - 4 * bS.ey) || ew < bS.ez - 2 && i1(gL + 4 * bS.ey)
				}(eu, ew, gL) && this.aKb(eu, ew));
			this.aKP = xk, this.aKP >= bS.ez - 1 ? (bS.wR.putImageData(bS.wS, 0, 0, 1, 1, bS.ey - 2, bS.ez - 2), bf.dl = !0, this.aKB()) : this.aKV && (this.a9D = setTimeout(aKX, 16))
		}
	}, this.aKa = function(gL, eZ, e8) {
		aKd(gL, Math.floor(this.aKU[e8] + this.a8E[e8] * this.iX[eZ] / 1e4) - bS.wW[gL])
	}, this.aKe = function(gL, e7, aKf, e8, a8E) {
		aKd(gL, Math.floor(this.aKU[e8] + (1 - e7 / aKf) * a8E) - bS.wW[gL])
	}, this.aKb = function(lN, lO) {
		for (var gL, e7, aKf, a93 = lN - this.aKR, aKg = lO - this.aKR, xl = lN + this.aKR, xk = lO + this.aKR, a93 = a93 < 1 ? 1 : a93, xl = xl > bS.ey - 2 ? bS.ey - 2 : xl, xk = xk > bS.ez - 2 ? bS.ez - 2 : xk, ew = aKg < 1 ? 1 : aKg; ew <=
			xk; ew++)
			for (var eu = a93; eu <= xl; eu++) i1(gL = 4 * (eu + ew * bS.ey)) ? (aKf = this.aKQ + (this.aKR - this.aKQ) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lN - eu) > aKf || Math.abs(lO - ew) > aKf || aKf <= (e7 = Math.sqrt((lN - eu) * (
				lN - eu) + (lO - ew) * (lO - ew))) || this.aKe(gL, e7, aKf, 1, this.a8E[3])) : (aKf = this.aKS + (this.aKT - this.aKS) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lN - eu) > aKf || Math.abs(lO - ew) > aKf || aKf <= (e7 = Math
				.sqrt((lN - eu) * (lN - eu) + (lO - ew) * (lO - ew))) || this.aKe(gL, e7, aKf, 0, this.a8E[2]))
	}
}

function aKE() {
	var uR = aKh(bS.eT);
	uR && aKi(uR[0], uR[1], uR[2], uR[3], uR[4])
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
	for (var eu, ew, aKp, aKq, a2L, aKs, i6 = aKj.length - 1, aKo = bS.ey + bS.ez, en = (aKo *= aKo, aKl.length), aKr = Array(en), aB = en - 1; 0 <= aB; aB--) aKr[aB] = aKl[aB] * aKl[aB];
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
			for (a2L = aKm[en - 1], aKs = aKn[en - 1], aB = 1; aB < en; aB++)
				if (aKp < aKr[aB]) {
					a2L = aKm[aB - 1] + aGf((aKp - aKr[aB - 1]) * aC8[aB], aKt[aB]), aKs = aKn[aB - 1] + aGf((aKp - aKr[aB - 1]) * aKu[aB], aKt[aB]);
					break
				} aKv(bS.ey * ew + eu, a2L, aKs, fF)
		}
}

function aKv(e8, a2L, aKs, fF) {
	a2L < 500 ? fF[e8] = bL.du(fF[e8] * a2L * 2, 1e3) : 500 < a2L && (fF[e8] += bL.du(2 * (1e4 - fF[e8]) * (a2L - 500), 1e3)), fF[e8] += bL.du(aKs * (10 * a2L - fF[e8]), 1e3)
}

function cg() {
	var aKw;

	function aL6(a2m, ho, eu, ew, globalAlpha) {
		bS.wR.save(), bS.wR.globalAlpha = globalAlpha, bS.wR.imageSmoothingEnabled = !1, bS.wR.scale(ho, ho), bS.wR.drawImage(a2m, Math.floor(eu * (bS.ey / ho - a2m.width)), Math.floor(ew * (bS.ez / ho - a2m.height))), bS.wR.restore()
	}
	this.a6j = 0, this.a6k = 0, this.a6l = 0, this.a6m = 0, this.dd = function() {
		(aKw = new Array(bS.aK5))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e7: [220, 250, 255, 220],
			tD: [190, 220, 0, 0],
			f7: [170, 200, 0, 0]
		}, aKw[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e7: [25, 0, 100, 0, 25],
			tD: [25, 0, 0, 0, 25],
			f7: [25, 0, 0, 0, 25]
		}, aKw[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tD: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aKw[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tD: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aKw[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e7: [10, 10, 20, 10, 10, 170, 212],
			tD: [20, 20, 60, 100, 100, 110, 170],
			f7: [70, 70, 160, 30, 30, 60, 120]
		}, aKw[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tD: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aKw[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e7: [10, 10, 60, 255, 255, 200, 200],
			tD: [10, 10, 60, 255, 255, 200, 200],
			f7: [80, 80, 255, 255, 255, 200, 200]
		}, aKw[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tD: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aKw[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tD: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aKw[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tD: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aKw[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tD: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aKw[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tD: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aKF = function() {
		var aL5, aB, f6, fW, hm = function() {
				var hm;
				return bS.wV = document.createElement("canvas"), bS.wV.width = bS.ey, bS.wV.height = bS.ez, bS.wR = bS.wV.getContext("2d", {
					alpha: !1
				}), hm = bS.wR.getImageData(0, 0, bS.ey, bS.ez), bS.wW = hm.data, hm
			}(),
			i = aKw[bS.eT].i,
			e7 = aKw[bS.eT].e7,
			tD = aKw[bS.eT].tD,
			f7 = aKw[bS.eT].f7,
			fF = aq.aKZ(),
			en = i.length - 2,
			aL0 = new Array(1 + en),
			aL1 = new Array(1 + en),
			aL2 = new Array(1 + en),
			aL3 = new Array(1 + en);
		for (f6 = en; 0 <= f6; f6--) aL0[f6] = i[f6 + 1] - i[f6], aL1[f6] = e7[f6 + 1] - e7[f6], aL2[f6] = tD[f6 + 1] - tD[f6], aL3[f6] = f7[f6 + 1] - f7[f6];
		for (aB = bS.ey * bS.ez - 1; 0 <= aB; aB--)
			for (f6 = en; 0 <= f6; f6--)
				if (fF[aB] >= i[f6]) {
					fW = fF[aB] - i[f6], bS.wW[4 * aB] = e7[f6] + aGf(aL1[f6] * fW, aL0[f6]), bS.wW[4 * aB + 1] = tD[f6] + aGf(aL2[f6] * fW, aL0[f6]), bS.wW[4 * aB + 2] = f7[f6] + aGf(aL3[f6] * fW, aL0[f6]), bS.wW[4 * aB + 3] = 255;
					break
				} bS.wR.putImageData(hm, 0, 0), bS.aKM(bS.eT) && ab.tH() && bS.aKM(bS.eT) && (hm = ab.aFq("arena"), aL5 = ab.aFq("territorial.io"), aL6(hm, 5, .5, .5, .1), aL6(aL5, 2, .5, .45, .1)), bS.wT = !0, bf.dl = !0
	}, this.a4Y = function() {
		for (var gL, eu, ew, aL7, hd, fY, a6k = 0, i = bS.ey, j = bS.ez, fW = i * j * 4, aL8 = aBi, aL9 = bS.wW, aB = i - 1; 0 <= aB; aB--) aL8[(gL = aB << 2) + 2] = aL8[fW - gL - 2] = 3;
		for (fW = 4 * i, aB = j - 1; 0 <= aB; aB--) aL8[(gL = aB * fW) + 2] = aL8[gL + fW - 2] = 3;
		for (aL7 = i - 1, hd = j - 1, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aL7; eu++) fY = 1 - (aL9[(gL = fW + eu << 2) + 2] > aL9[gL + 1] && aL9[gL + 2] > aL9[gL]), aL8[gL + 2] = 6 - 5 * fY, a6k += fY;
		this.a6j = (i - 2) * (j - 2), this.a6m = 0, bS.eS(bS.eT) && (bS.a6m.aLA(), bS.a6m.aLB(4, 5)), this.a6k = aD.ju = a6k - this.a6m, this.a6l = this.a6j - this.a6k - this.a6m, this.a6l && (bS.a6m.aLB(6, 2), bS.a6m.aLC())
	}
}

function aKD() {
	var qH;
	10 === bS.eT ? qH =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.eT ? qH =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.eT ? qH =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.eT ? qH =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.eT ? qH =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.eT ? qH =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.eT ? qH =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.eT ? qH =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.eT ? qH =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.eT && (qH =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new wE).wG(qH)
}

function aK7() {
	this.wM = null, this.aLD = null, this.aLE = null, this.dd = function() {
		var aLF = [120, 105, 92],
			cos = [12, 12, 60],
			aLG = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aLH = [140, 130, 120],
			aLI = [12, 12, 76],
			aLJ = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aLK = [130, 117, 106],
			aLL = [12, 12, 68],
			aLM = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wM = new Array(bS.aK5 + 1), this.wM[0] = {
			name: L(133),
			i: 230,
			j: 230,
			mn: 1e3,
			mk: 2e3,
			aKC: 173
		}, this.wM[1] = {
			name: L(134),
			i: 800,
			j: 800,
			mn: 100,
			mk: 50,
			aKC: 43
		}, this.wM[2] = {
			name: L(135),
			i: 512,
			j: 512,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wM[3] = {
			name: L(136) + " 1",
			i: 960,
			j: 960,
			mn: 60,
			mk: 8,
			aKC: 0
		}, this.wM[4] = {
			name: L(137),
			i: 900,
			j: 900,
			mn: 100,
			mk: 5,
			aKC: 0
		}, this.wM[5] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mn: 100,
			mk: 40,
			aKC: 0
		}, this.wM[6] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			mn: 100,
			mk: 20,
			aKC: 0
		}, this.wM[7] = {
			name: L(140),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wM[8] = {
			name: L(141),
			i: 820,
			j: 820,
			mn: 200,
			mk: 100,
			aKC: 0
		}, this.wM[9] = {
			name: L(142),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wM[10] = {
			name: L(143),
			wn: aLH,
			wo: aLI,
			aKN: aLJ
		}, this.wM[11] = {
			name: L(144),
			wn: aLK,
			wo: aLL,
			aKN: aLM
		}, this.wM[12] = {
			name: L(145),
			wn: aLK,
			wo: aLL,
			aKN: aLM
		}, this.wM[13] = {
			name: L(146),
			wn: aLF,
			wo: cos,
			aKN: aLG
		}, this.wM[14] = {
			name: L(147),
			wn: aLF,
			wo: cos,
			aKN: aLG
		}, this.wM[15] = {
			name: L(148),
			wn: aLH,
			wo: aLI,
			aKN: aLJ
		}, this.wM[16] = {
			name: L(149),
			wn: aLH,
			wo: aLI,
			aKN: aLJ
		}, this.wM[17] = {
			name: L(150),
			wn: aLF,
			wo: cos,
			aKN: aLG
		}, this.wM[18] = {
			name: L(151),
			wn: aLK,
			wo: aLL,
			aKN: aLM
		}, this.wM[19] = {
			name: L(152),
			wn: aLF,
			wo: cos,
			aKN: aLG
		}, this.wM[20] = {
			name: L(153),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKC: 0
		}, this.wM[21] = {
			name: L(136) + " 2",
			i: 940,
			j: 940,
			mn: 80,
			mk: 8,
			aKC: 0
		}, this.wM[bS.aK5] = {
			name: ""
		}, this.aLD = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aLD[aB] = aB;
		for (this.aLD[10] = 20, this.aLD[11] = 21, this.aLE = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aLE[aB] = 10 + aB
	}
}

function aK8() {
	this.aLA = function() {
		for (var gL, eu, fW, aL8 = aBi, aL9 = bS.wW, i = bS.ey, aL7 = i - 1, hd = bS.ez - 1, gG = 0, ew = 1; ew < hd; ew++)
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
						a2Y = [eR],
						aLQ = id >> 8 << 1,
						aLR = 255 & id;
					aL8[eR - 2] = aLQ, aL8[eR - 1] = aLR, aL8[eR] = 5;
					for (; en;) {
						for (var a2Z = [], aB = 0; aB < en; aB++)
							for (var ec = a2Y[aB], eq = 3; 0 <= eq; eq--) {
								var er = ec + ep[eq];
								aL8[er] === aLN && (aL8[er - 2] = aLQ, aL8[er - 1] = aLR, aL8[er] = aLO, a2Z.push(er))
							}
						en = (a2Y = a2Z).length
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

function a4X() {
	(y6 = void 0 === y6 ? document.createElement("canvas") : y6).width = bS.ey, y6.height = bS.ez, a4b = y6.getContext("2d", {
		alpha: !0
	}), a4c = aBi = null, a4c = a4b.getImageData(0, 0, bS.ey, bS.ez), aBi = a4c.data, bA.qi.wX(aBi)
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
		var aB, aJV, eR, jQ = value - aLW[en - 1];
		if (0 != jQ) {
			for (aJV = 1 + bL.du(Math.abs(jQ), en - 1), aJV = jQ < 0 ? -aJV : aJV, aLW[en - 1] = value, eR = (eR = en - 1 - bL.du(Math.abs(jQ), Math.abs(aJV))) < 1 ? 1 : en - 2 < eR ? en - 2 : eR, aB = en - 2; eR <= aB; aB--) aLW[aB] += jQ - (en -
				1 - aB) * aJV;
			(jQ < 0 ? function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLW[aB] < 0 && (aLW[aB] = -aLW[aB] - 1)
			} : function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLW[aB] >= aLV && (aLW[aB] = 2 * aLV - aLW[aB] - 1)
			})(en)
		}
	}

	function aLt(a2Y, a2Z, en) {
		for (var aB = 0; aB < en; aB++) a2Y[aB] = a2Z[aB]
	}

	function aLu(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aLv(a5E, gap, he) {
		aLX.push(a5E), aLY.push(gap), aLZ.push(he)
	}
	this.a7 = function(a3l) {
		! function(a3l) {
			var aB;
			for (i = a3l[0], j = a3l[1], aLU = a3l[2], mk = a3l[3], fF = new Int16Array(i * j), max = j < i ? i : j, aLW = new Int16Array(max), aLX = [], aLY = [], aLZ = [], aLa = new Array(i), aLb = new Array(j), aB = i - 1; 0 <= aB; aB--) aLa[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aLb[aB] = !1;
			aLc = new Int16Array(i), aLd = new Int16Array(j)
		}(a3l),
		function(en) {
			var aLj = ay.random() % aLV,
				mn = ay.random() % (2 * aLU + 1) - aLU;
			aLk(aLj, mn, en)
		}(max), aLt(aLd, aLW, j), aLm(0, 0, !0, i);
		var eu, ew, a3l = fF[0],
			en = max,
			mn = ay.random() % (2 * aLU + 1) - aLU;
		for (aLk(a3l, mn, en), aLt(aLc, aLW, i), aLm(0, 0, !1, j), aLu(aLc), aLu(aLd), aLk(fF[i - 1], aLc[i - 1], j), aLm(i - 1, 0, !1, j), aLk(fF[i * (j - 1)], aLd[j - 1], i), aLq(fF[i * j - 1], i), aLm(0, j - 1, !0, i), aLa[i - 1] = aLa[0] = !
			0, aLb[j - 1] = aLb[0] = !0, aLv(0, i, !0), aLv(0, j, !1), ! function() {
				var aLx, a5E;
				for (;;) {
					if (aLx = function() {
							var aB, aLx = aLX.length - 1;
							for (aB = aLx - 1; 0 <= aB; aB--) aLY[aB] > aLY[aLx] && (aLx = aB);
							return aLx
						}(), aLY[aLx] < 5) return;
					a5E = aLX[aLx] + bL.du(aLY[aLx], 2), (aLZ[aLx] ? function(eu) {
						var en, aM0, aB, aFG = 0,
							aM1 = 0;
						for (; aM1 < j - 1;) {
							for (aB = aFG + 1; aB < j; aB++)
								if (aLb[aB]) {
									aM1 = aB;
									break
								} en = aM1 - aFG + 1, aLk(fF[eu + i * aFG], 0 === aFG ? aLc[eu] : aLW[aM0 - 1] - aLW[aM0 - 2], en), aLq(fF[aM1 * i + eu], en), aLm(eu, aFG, !1, en), aM0 = en, aFG = aM1
						}
						aLa[eu] = !0
					} : function(ew) {
						var en, aM0, aB, aFG = 0,
							aM1 = 0;
						for (; aM1 < i - 1;) {
							for (aB = aFG + 1; aB < i; aB++)
								if (aLa[aB]) {
									aM1 = aB;
									break
								} en = aM1 - aFG + 1, aLk(fF[ew * i + aFG], 0 === aFG ? aLd[ew] : aLW[aM0 - 1] - aLW[aM0 - 2], en), aLq(fF[ew * i + aM1], en), aLm(aFG, ew, !0, en), aM0 = en, aFG = aM1
						}
						aLb[ew] = !0
					})(a5E), aLv(a5E, aLX[aLx] + aLY[aLx] - a5E, aLZ[aLx]), aLY[aLx] = a5E - aLX[aLx] + 1
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

function aGf(f6, f7) {
	return 0 <= f6 ? bL.du(f6, f7) : -bL.du(-f6, f7)
}

function jh(fF) {
	return fF * fF
}

function a6C(f6, f7) {
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

function aI1(fF, en) {
	return fF < 1 ? 0 : aM3(fF, en)
}

function aM4(n8, n9, sw, a8H, nL, nM, sx, te) {
	return !(n8 + sw <= nL || n9 + a8H <= nM || nL + sx <= n8 || nM + te <= n9)
}

function aM5(n8, n9, sw, a8H, nL, nM, sx, te) {
	return n8 <= nL && n9 <= nM && nL + sx <= n8 + sw && nM + te <= n9 + a8H
}

function wO(fF) {
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
	}, this.xL = function(a8y, a90) {
		return a8y * a8y + a90 * a90
	}
}

function dD() {
	this.y = new aMI, this.sp = 0;
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
	}, this.u = function(e8, aMM, a3l) {
		void 0 === aMM && (aMM = this.sp), bf.dl = !0, 0 === e8 && (0 === aa.a19() ? e8 = 5 : a0.a1.setState(13)), this.rr(), this.sp === e8 && (aMM = aMJ[e8].aMM, aMJ[e8] = null), this.sp = e8;
		var l3 = aMJ[e8];
		if (!l3 || 4 === e8 || 7 === e8 || 8 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 15 === e8 || 18 === e8 || 20 <= e8 && e8 <= 28 || 32 === e8 || 33 === e8) {
			if (0 === e8) return void aMN();
			1 === e8 ? l3 = new aMO : 2 === e8 ? l3 = new aMP : 3 === e8 ? l3 = new aMQ : 4 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 33 === e8 ? l3 = a3l : 5 === e8 ? l3 = new aMR : 6 === e8 ? l3 = new aMS : 7 === e8 ? l3 =
				new aMT(t.y.aMU) : 8 === e8 ? l3 = a3l : 12 === e8 ? l3 = new aMV : 14 === e8 ? l3 = new aMW : 15 === e8 ? l3 = new aMT(t.y.aMX) : 16 === e8 ? l3 = new aMY : 17 === e8 ? l3 = new aMZ : 18 === e8 ? l3 = new aMa : 19 === e8 ? l3 =
				new aMb : 20 === e8 ? l3 = new aMc : 21 === e8 ? l3 = new aMd : 22 === e8 ? l3 = new aMe : 23 === e8 ? l3 = new aMf : 24 === e8 ? l3 = new aMg : 25 === e8 ? l3 = new aMh : 26 === e8 ? l3 = new aMi : 27 === e8 ? l3 = new aMj :
				28 === e8 ? l3 = new aMk : 29 === e8 ? l3 = new aMl : 30 === e8 && (l3 = new aMm), l3.aMM = aMM, aMJ[e8] = l3
		}
		l3.show(a3l)
	}, this.a18 = function() {
		this.hZ() && this.aMn(this.a4y().aMM)
	}, this.aMn = function(e8) {
		this.hZ() && (aMJ[e8] ? (this.rr(), bf.dl = !0, this.sp = e8, aMJ[e8].show()) : this.u(e8))
	}, this.rr = function() {
		this.hZ() && aMJ[this.sp].rr()
	}, this.x = function() {
		this.hZ() && (aMJ[this.sp].rr(), aMN(), this.sp = 0, a0.a1.setState(13))
	}, this.uh = function() {
		var l3;
		this.hZ() && (l3 = aMJ[this.sp]).uh && l3.uh()
	}, this.resize = function() {
		if (!this.hZ()) return !1;
		aMJ[this.sp].resize()
	}, this.h0 = function(eu, ew) {
		var l3;
		this.hZ() && (l3 = aMJ[this.sp]).h0 && l3.h0(eu, ew)
	}, this.a1S = function(eu, ew) {
		var l3;
		this.hZ() && (l3 = aMJ[this.sp]).a1S && l3.a1S(eu, ew)
	}, this.a1q = function() {
		var l3;
		this.hZ() && (l3 = aMJ[this.sp]).a1q && l3.a1q()
	}, this.a1V = function(lN, lO, deltaY) {
		var l3;
		this.hZ() && (l3 = aMJ[this.sp]).a1V && l3.a1V(lN, lO, deltaY)
	}, this.a20 = function(code) {
		var l3;
		return !!this.hZ() && ((l3 = aMJ[this.sp]).a20 && l3.a20(code), !0)
	}, this.j3 = function() {
		var l3;
		this.hZ() && (l3 = aMJ[this.sp]) && l3.j3 && l3.j3()
	}, this.hZ = function() {
		return 0 < this.sp
	}, this.a4y = function() {
		return aMJ[this.sp]
	}, this.a4z = function(e8) {
		return aMJ[e8]
	}, this.aMo = function() {
		return aMJ
	}
}

function aMT(data) {
	var aMp, aMq;
	this.show = function() {
		data.aMr && bI.aNi("account", data.sn), aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a18()
	}), new w(data.aMr ? "🔄 " + L(154) : L(155), function() {
		t.u(8, t.a4y().aMM, new sq(25, {
			sr: 0,
			sn: data.sn,
			so: data.so
		}))
	}, 0, 0, 1)]), aMq = new qT(aMp.uY, function() {
		var qV = [];
		qV.push(function() {
				var aN8 = new qD,
					rN = (aN8.qG(L(204)), new rO({
						value: data.username,
						e8: -1
					}));
				rN.e.readOnly = !0, aN8.qR(rN), aN8.qR(new s5([new w(L(173), function(e) {
					return bA.qa.a3E(rN.e), bA.qa.a3F(e), !0
				}).button])), data.aMr || aN8.qI(L(205));
				return aN8
			}()),
			function(qV) {
				var aN8, qJ, aBw, aNR, aNH;
				data.aMr || ((aN8 = new qD).qG(L(206)), (qJ = aN8.qI(data.aNQ.length + " / 160")).style.textAlign = "center", aBw = !0, (aNR = new uq(0, 1, function(e) {
					e = e.target.value.length;
					qJ.textContent = e + " / 160", 160 < e ? aBw && (aBw = !1, aNH.qu(1), aNH.button.style.color = bB.ni) : aBw || (aBw = !0, aNH.qu(0), aNH.button.style.color = bB.og)
				})).e.rows = 6, aNR.e.style.fontSize = "1em", aNR.ux(data.aNQ), aN8.qR(aNR), aNH = new w(L(207), function() {
					if (!aBw) return !0;
					t.u(8, t.a4y().aMM, new sq(29, {
						sr: 1,
						qH: aNR.uz().substring(0, 160)
					}))
				}, 0, 0, 1), aN8.qR(new s5([aNH.button])), 0 !== data.aNS && (aN8.qR(new s5([new w(L(1 === data.aNS ? 209 : 210), function() {
					t.u(8, t.a4y().aMM, new sq(29, {
						sr: 0,
						qH: ""
					}))
				}, 0, 0, 1).button])), aN8.qI(1 === data.aNS ? L(211, [data.aNU - 1]) : L(212, [data.aNU - 1]))), aN8.qI(L(208, [data.aNT])), qV.push(aN8))
			}(qV),
			function(qV) {
				var aN8;
				data.aMr && 0 !== data.aNS && ((aN8 = new qD).qG(L(213)), aN8.qK(data.aNQ), aN8.qR(new s5([new w(L(214, 0, "Report"), function(e) {
					return b0.y.aND(0) && (bA.qa.a3F(e), b0.aNF.aNV({
						sr: 5,
						sn: data.sn
					})), !0
				}, 0, 0, 1).button])), qV.push(aN8))
			}(qV), qV.push(function() {
				var aN8 = new qD,
					aN9 = (aN8.qG(L(156)), [L(157), L(158), L(159), L(160), L(161)]),
					e7 = data.aNA;
				aN8.qM(L(162) + bA.rZ.a42(data.vl, .01, 2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vk + "<br>" + L(164) + aN9[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : e7 < 1e3 ? 3 : 4]), data.aMr || (aN8.qI(L(165)), aN8.qI(L(166)),
					aN8.qI(L(167)));
				return aN8
			}()), data.aMr && qV.push(function() {
				var aN8 = new qD,
					rN = (aN8.qG(L(168)), new rO({
						value: bj.eK.data[147].value,
						e8: -1
					}, 1, void 0, function(e) {
						bj.s2.s3(147, aNB(e.target.value))
					})),
					aNC = (aN8.qR(rN), new w(L(14), function(e) {
						return rN.e.readOnly && b0.y.aND(0) && (bA.qa.a3F(e), aNE(), b0.aNF.aNG({
							sr: 0,
							sn: data.sn,
							value: parseInt(bj.eK.data[147].value, 10)
						})), !0
					}, 1)),
					aNH = new w(L(169), function(e) {
						return e.textContent === L(169) ? (e.textContent = L(170), rN.e.readOnly = !0, aNC.qu(0), aNC.button.style.color = bB.og, bj.s2.s3(147, rN.e.value), aNB(bj.eK.data[147].value)) : aNE(), !0
					}),
					qJ = (aN8.qR(new s5([aNH.button])), aN8.qI()),
					aNB = function(fF) {
						fF = bA.g9.a3i(fF, 2, 1e6);
						var aNI = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
						qJ.textContent = L(171, [fF, bj.eK.data[105].value, aNI, data.sn, fF - aNI])
					},
					aNE = function() {
						aNH.button.textContent = L(169), rN.e.readOnly = !1, aNC.qu(1), aNC.button.style.color = bB.ni
					};
				return aNB(bj.eK.data[147].value), aN8.qR(new s5([aNC.button])), aN8
			}());
		qV.push(function() {
			var aN8 = new qD,
				rN = (aN8.qG(L(172)), new rO({
					value: data.sn,
					e8: -1
				}));
			return rN.e.readOnly = !0, aN8.qR(rN), aN8.qR(new s5([new w(L(173), function(e) {
				return bA.qa.a3E(rN.e), bA.qa.a3F(e), !0
			}).button])), aN8
		}()), data.aMr || (qV.push(function() {
			var aN8 = new qD,
				aNJ = (aN8.qG(L(174)), new rO(bj.eK.data[106]));
			return aNJ.e.readOnly = !0, aNJ.e.type = "password", aN8.qR(aNJ), aN8.qR(new s5([new w(L(175), function(e) {
				return e.textContent === L(175) ? (e.textContent = L(176), aNJ.e.type = "text") : (e.textContent = L(175), aNJ.e.type = "password"), !0
			}).button, new w(L(173), function(e) {
				return bA.qa.a3E(aNJ.e), bA.qa.a3F(e), !0
			}).button])), aN8.qR(new s5([new w(L(177), function() {
				t.u(8, t.a4y().aMM, new sq(15))
			}).button])), aN8.qG(L(178), "0.8em"), aN8.qI(L(179)), aN8.qI(L(180)), aN8.qI(L(181)), aN8
		}()), qV.push(function() {
			var aN8 = new qD;
			return aN8.qG(L(182)), aN8.qR(new s5([new w(L(183), function() {
				t.u(6, t.a4y().aMM)
			}).button])), aN8.qR(new s5([new w(L(184), function() {
				bj.s2.s3(105, ""), t.u(8, t.a4y().aMM, new sq(18))
			}).button])), aN8.qR(new s5([new w(L(185) + bj.eK.data[105].value, function() {
				t.u(4, 0, new v(L(186), L(187), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a4z(7).aMM)
				})]))
			}, bB.oN).button])), aN8
		}()), qV.push(function() {
			function aNL(e8) {
				for (var aB = 0; aB < 2; aB++) aNK[aB].qu(0 === e8 ? bB.nu : 0 === aB ? bB.oN : bB.o5)
			}
			var qP, aNK, aN8 = new qD;
			aN8.qG(L(188)), aN8.qI(L(189)), bj.y.vV();
			return aNK = [new w(L(190), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				if (!(e8 < 1)) {
					qP.qQ[e8].remove(), qP.qQ.splice(e8, 1);
					for (var aB = e8; aB < qP.qQ.length; aB++) qP.qQ[aB].name = "" + aB;
					bj.y.vY(e8), e8 = bj.eK.data[117].value, qP.qQ[e8].textContent = qP.qQ[e8].textContent.replace("⚪", "🟢"), aNL(e8)
				}
			}, bB.nu), new w(L(191), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				e8 < 1 || (e8 = bj.y.vZ(e8), bj.s2.s3(105, e8.sn), bj.s2.s3(106, e8.password), t.u(8, t.a4y().aMM, new sq(18)))
			}, bB.nu)], (qP = new uN(bj.eK.data[117], aNL)).qQ[0].style.marginTop = "0.5em", aN8.qO(qP), aN8.qR(new s5([aNK[1].button])), aN8.qR(new s5([aNK[0].button])), aN8
		}()));
		return qV.push(function() {
				var aN8 = new qD,
					aN9 = (aN8.qG(L(195)), [L(196), L(197), L(198), L(199)]),
					e7 = data.aNM;
				return aN8.qM(L(200) + (data.a0P / 100).toFixed(2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vk + "<br>" + L(164) + aN9[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : 3]), aN8
			}()), qV.push(function() {
				var aN8 = new qD;
				return aN8.qG(L(192)), aN8.qM(L(193) + bA.rZ.a42(data.vh, .1, 1) + "<br>" + L(163) + (data.vi + 1) + " / " + data.vk + "<br>" + L(194) + data.vj), aN8
			}()),
			function(qV) {
				var aN8 = new qD,
					aNW = data.vo,
					aNX = (aN8.qG(L(215)), aN8.qM(L(216, [data.vm.length ? "[" + data.vm + "]" : "-"])), aN8.qM(L(217, [bA.rZ.a42(aNW, .01, 2)])), aN8.qM(L(218, [data.vq + 1 + " / " + data.vk])), data.vr),
					aNY = (aN8.qM(L(219, [bA.rZ.a42(aNX, .1, 1)])), data.vt);
				aN8.qM(L(220, [aNY])), aN8.qM(L(221, [bA.rZ.a42(aNX / Math.max(aNY, 1), .1, 2)])), aNW = data.vp, aN8.qG(L(222), "0.8em"), aN8.qM(L(216, [data.vn.length ? "[" + data.vn + "]" : "-"])), aN8.qM(L(217, [bA.rZ.a42(aNW, .01, 2)])),
					aNX = data.vs, aN8.qM(L(219, [bA.rZ.a42(aNX, .1, 1)])), aNY = data.vu, aN8.qM(L(220, [aNY])), aN8.qM(L(221, [bA.rZ.a42(aNX / Math.max(aNY, 1), .1, 2)])), data.aMr || (aN8.qI(L(223)), aN8.qI(L(224)));
				qV.push(aN8)
			}(qV),
			function(qV) {
				var aN8 = new qD;
				aN8.qG(L(225)), aN8.qM(L(200) + (data.aNZ / 10).toFixed(1) + "<br>" + L(164) + (data.aNa.length ? L(226, [data.aNa]) : L(227))), data.aMr ? (aN8.qR(new s5([new w(L(228), function(e) {
					return b0.y.aND(0) && (bA.qa.a3F(e), b0.aNF.aNV({
						sr: 4,
						sn: data.sn
					})), !0
				}, 0, 0, 1).button])), aN8.qI(L(229)), aN8.qI(L(230))) : aN8.qI(L(231));
				qV.push(aN8)
			}(qV), qV.push(function() {
				var aN8 = new qD;
				if (aN8.qG(L(201)), aN8.qM(L(202) + data.aNN + "<br>" + L(163) + (data.aNO + 1) + " / " + data.vk + "<br>" + L(164) + bo.eA(data.aNO)), data.aMr) {
					var rN = new rO({
							value: bj.eK.data[157].value,
							e8: -1
						}, 1, void 0, function(e) {
							bj.s2.s3(157, aNB(e.target.value))
						}),
						aNH = (rN.e.style.marginTop = "0.6em", aN8.qR(rN), new w(L(169), function(e) {
							return e.textContent === L(169) ? (e.textContent = L(170), rN.e.readOnly = !0, aNP[0].qu(0), aNP[1].qu(0), aNP[0].button.style.color = bB.og, aNP[1].button.style.color = bB.og, aNB(bj.eK.data[157]
								.value)) : aNE(), !0
						})),
						aNP = (aN8.qR(new s5([aNH.button])), [new w("−", function(e) {
							return rN.e.readOnly && b0.y.aND(0) && (bA.qa.a3F(e), aNE(), b0.aNF.aNG({
								sr: 2,
								sn: data.sn,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rN.e.readOnly && b0.y.aND(0) && (bA.qa.a3F(e), aNE(), b0.aNF.aNG({
								sr: 1,
								sn: data.sn,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qJ = aN8.qI(),
						aNB = function(fF) {
							return fF = bA.g9.a3i(fF, 3, 32767), qJ.textContent = L(203, [fF - 1, fF, bj.eK.data[105].value]), fF
						};
					aN8.qR(new s5([aNP[0].button, aNP[1].button]));
					for (var aB = 0; aB < 2; aB++) aNP[aB].button.style.fontSize = "1.6em";
					var aNE = function() {
						aNH.button.textContent = L(169), rN.e.readOnly = !1, aNP[0].qu(1), aNP[1].qu(1), aNP[0].button.style.color = bB.ni, aNP[1].button.style.color = bB.ni
					};
					aNB(bj.eK.data[157].value)
				}
				return aN8
			}()),
			function(qV) {
				var aN8, a3D;
				data.aMr && !data.aNb || (0 === a0.id || data.aMr || data.aNb) && ((aN8 = new qD).qG("Patreon"), !data.aMr && data.aNc ? aN8.qR(new s5([new w(L(175), function() {
					b0.aNF.aNV({
						sr: 7,
						sn: data.sn
					}), data.aNc = 0, t.u(7)
				}).button])) : data.aNb ? (aN8.qM(L(232, [(data.aNd / 100).toFixed(2)]) + "<br>" + L(233, [1 + data.aNe + " / " + data.aNf]) + "<br>" + L(234, [data.aNg ? L(235) : L(236)])), data.aMr || aN8.qR(new s5([new w(L(237),
					function() {
						b0.aNF.aNV({
							sr: 8,
							sn: data.sn
						}), data.aNb = 0, bj.s2.s3(160, 0), t.u(7)
					}).button]))) : (aN8.qM(L(238), "0.75em").style.marginBottom = "0.3em", aN8.qM("  • " + L(239), "0.75em").style.whiteSpace = "pre", aN8.qM("  • " + L(240), "0.75em").style.whiteSpace = "pre", aN8.qM("  • " + L(
						241), "0.75em").style.whiteSpace = "pre", aN8.qM(L(242), "0.75em").style.marginTop = "1.0em", aN8.qM(L(243), "0.75em").style.marginTop = "1.0em", aN8.qM("<a href='" + bK.aNh +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3D = "https://www.patreon.com/oauth2/authorize?state=" + data.sn +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aN8.qM(L(244), "0.75em").style.marginTop = "1.0em", aN8.qM("<a href='" + a3D +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aMr || (aN8.qR(new sF), aN8.qR(new s5([new w(L(176), function() {
						b0.aNF.aNV({
							sr: 6,
							sn: data.sn
						}), data.aNc = 1, t.u(7)
					}).button])), aN8.qM(L(245), "0.75em").style.marginTop = "0.75em")), qV.push(aN8))
			}(qV), qV
	}())
}

function aMe() {
	var aNj, aNk, aNl, qV;

	function aNm() {
		aNo(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		2 === aD.data.aIncomeType ? (bA.qi.a2c(aNl.uz(), aD.data.aIncomeData, 255), bA.qi.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(246), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), aN8.qO(new uN({
			uR: [L(248), L(249), L(250)],
			value: aD.data.aIncomeType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ek)), aD.data.aIncomeType = e8, t.u(22)
		})), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8;
		1 === aD.data.aIncomeType && ((aN8 = new qD).qG("Value"), aN8.qR(new rO({
			e8: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qV.push(aN8))
	}(qV), function(qV) {
		var aN8;
		2 === aD.data.aIncomeType && ((aN8 = new qD).qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.aIncomeData, 4)), aN8.qR(aNl), qV.push(aN8))
	}(qV), qV))
}

function aMh() {
	var aNj, aNk, aNl;

	function aNm() {
		aNo(), 3 !== aD.data.botDifficultyType || bA.qi.a2Q(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		3 === aD.data.botDifficultyType && bA.qi.a2c(aNl.uz(), aD.data.botDifficultyData, aE.kL.length - 1)
	}

	function aNt(qV, e8) {
		var aN8 = new qD,
			value = (aN8.qG(e8 < 0 ? L(62) : L(61) + " " + bg.a0J[e8 % 9]), 0 <= e8 && (aN8.qM(L(253) + ": " + aD.data.teamPlayerCount[e8]).style.marginBottom = "1em"), e8 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e8]);
		aN8.qO(new uN({
			uR: aE.kL,
			value: value
		}, function(hf) {
			e8 < 0 ? aD.data.botDifficultyValue = hf : aD.data.botDifficultyTeam[e8] = hf
		})), qV.push(aN8)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(62), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, function() {
		var qV = [];
		if (function(qV) {
				var aN8 = new qD,
					uR = (aN8.qG(L(247)), [L(249), L(251), L(252), L(250)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uR.splice(2, 1));
				aN8.qO(new uN({
					uR: uR,
					value: value
				}, function(e8) {
					aNo(), aD.data.botDifficultyType = e8, 0 === aD.data.gameMode && 2 === e8 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ek)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qV.push(aN8)
			}(qV), 0 === aD.data.botDifficultyType) aNt(qV, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aNt(qV, aB);
		else 3 === aD.data.botDifficultyType && ! function(qV) {
			var aN8 = new qD;
			aN8.qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.botDifficultyData, 8)), aN8.qR(aNl), qV.push(aN8)
		}(qV);
		return qV
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
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize();
		var f8 = h.k,
			ug = aMp.ud(),
			aOG = f8 * ug.uf,
			f8 = f8 * ug.ru;
		aNz = bA.qa.tE(.06), aO0 = bA.qa.tE(.04), aNv = bA.qa.tE(.06), aNw = f8 + aNz, aNx = h.i - aNv - aO0, aNy = aOG + f8 - aNw - aO0
	}, this.uh = function() {
		aMp.uh(),
			function() {
				var aB, aOD, gG, eu, f6, g = data.data,
					aOK = 1,
					aOL = .125,
					aOM = aO6 ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aOD = g[aB].aOD, gG = aOD.length, aOK = Math.max(gG, aOK), f6 = 0; f6 < gG; f6++) aOL = Math.max(aOD[f6], aOL), aOM = Math.min(aOD[f6], aOM);
				var n9 = aNw + aNy,
					xu = aNy / (aOL - aOM),
					xt = 1 / (aOK - 1);
				for (ui.lineWidth = bc.yw, aB = 0; aB < g.length; aB++) {
					for (aOD = g[aB].aOD, gG = aOD.length, eu = aNv, ui.beginPath(), ui.moveTo(eu + aNx, n9 - xu * (aOD[gG - 1] - aOM)), f6 = gG - 2; 0 <= f6; f6--) ui.lineTo(eu + xt * f6 * aNx, n9 - xu * (aOD[f6] - aOM));
					ui.strokeStyle = colors[aB], ui.stroke()
				}(function(aOM, aOL, n9, xu) {
					ui.font = bA.qa.sP(0, .25 * aNv), bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 2), ui.fillStyle = colors[0];
					for (var eu = .92 * aNv, aB = 0; aB < 3; aB++) {
						var fF = aOM + aB * (aOL - aOM) / 2;
						ui.fillText((fF / 1e3).toFixed(3), eu, n9 - xu * (fF - aOM))
					}
				})(aOM, aOL, n9, xu),
				function(aOK) {
					var ew = aNw + aNy + .15 * aO0;
					ui.font = bA.qa.sP(0, Math.min(.4 * aO0, .028 * h.i)), bA.qa.textBaseline(ui, 0), bA.qa.textAlign(ui, 2), ui.fillStyle = colors[0], ui.fillText(bA.a2H.a34(aO1), aNv + aNx, ew), bA.qa.textAlign(ui, 0), ui.fillText(bA.a2H.a34(
						new Date(aO2.getTime() - 6e4 * (aOK - 1) * aO7[data.aOC])), aNv, ew)
				}(aOK),
				function(aOK, aOM, aOL) {
					if (aO5 && !(aOK < 2)) {
						for (var a8P, e8 = (aO3 - aNv) / aNx * (aOK - 1), aOP = Math.floor(e8), aOQ = Math.floor(1 + e8), aOR = e8 - aOP, aOS = 1e5, aOT = -1, aOU = -1, aOV = aOL - (aOL - aOM) * (aO4 - aNw) / aNy, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aC8, aOD = g[aB].aOD;
							aOD.length <= aOQ || (aOD = aOD[aOP] + aOR * (aOD[aOQ] - aOD[aOP]), (aC8 = Math.abs(aOV - aOD)) < aOS && (aOS = aC8, aOT = aB, aOU = aOD))
						} - 1 !== aOT && (aOL = aNw + aNy - (aOU - aOM) / (aOL - aOM) * aNy, ui.lineWidth = .5 * bc.yw, ui.strokeStyle = colors[aOT], ui.beginPath(), ui.moveTo(aNv, aOL), ui.lineTo(aO3, aOL), ui.lineTo(aO3, aNw + aNy), ui
						.stroke(), ui.beginPath(), ui.arc(aO3, aOL, .1 * aNv, 0, 2 * Math.PI), ui.fillStyle = colors[aOT], ui.fill(), aOM = aNw + aNy + .15 * aO0, bA.qa.textAlign(ui, 1), a8P = aOK - 2 < e8 ? (a8P = aO2.getTime() - 6e4 * aO7[
								data.aOC], new Date(a8P + (e8 - (aOK - 2)) * (aO1.getTime() - a8P))) : new Date(aO2.getTime() - 6e4 * (aOK - e8 - 1) * aO7[data.aOC]), aOK = bA.a2H.a34(a8P), e8 = bA.qa.measureText(aOK), a8P = bL.hv(aO3, aNv +
								.5 * e8, aNv + aNx - .5 * e8), ui.fillStyle = bA.color.na(70, 50, 20), ui.fillRect(a8P - .52 * e8, aNw + aNy, 1.04 * e8, .55 * aO0), ui.fillStyle = colors[0], ui.fillText(aOK, a8P, aOM), ui.font = bA.qa.sP(0,
								.25 * aNv), bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 2), a8P = .92 * aNv, aOK = (aOU / 1e3).toFixed(3), e8 = bA.qa.measureText(aOK), aOM = a8P - 1.04 * e8, ui.fillStyle = bA.color.na(70, 50, 20), ui
							.fillRect(aOM, aOL - .1625 * aNv, aNv - aOM, .275 * aNv), ui.fillStyle = colors[aOT], ui.fillText(aOK, a8P, aOL))
					}
				}(aOK, aOM, aOL)
			}(), ui.lineWidth = bc.yw, ui.strokeStyle = bB.ni, ui.beginPath(), ui.moveTo(aNv, aNw), ui.lineTo(aNv, aNw + aNy), ui.lineTo(aNv + aNx, aNw + aNy), ui.stroke();
		var aB, fontSize = .5 * aNz,
			g = (ui.font = bA.qa.sP(0, fontSize), bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 0), data.data),
			en = g.length,
			ew = aNw - .5 * aNz,
			qH = "";
		for (aB = 0; aB < en; aB++) qH += g[aB].name + "  ";
		qH = qH.trim();
		var aOY = bA.qa.measureText(qH),
			eu = .5 * (h.i - aOY);
		for (aOY > h.i && (eu = 0, ui.font = bA.qa.sP(0, h.i / aOY * fontSize)), aB = 0; aB < en; aB++) ui.fillStyle = colors[aB], ui.fillText(g[aB].name, eu, ew), eu += bA.qa.measureText(g[aB].name + "  ")
	}, this.h0 = function(lN, lO) {
		aOb(lN, lO)
	}, this.a1S = function(lN, lO) {
		aOb(lN, lO)
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	};
	var aB, dt, a32, hf, eq = data.data,
		en = eq.length,
		max = 1;
	for (aB = 0; aB < en; aB++) max = Math.max(max, eq[aB].aOD.length);
	for (aB = 0; aB < en; aB++)
		for (; eq[aB].aOD.length < max;) eq[aB].aOD.unshift(0);
	dt = new Date, a32 = 6e4 * dt.getTimezoneOffset(), hf = dt.getTime() - a32, aO1 = new Date(hf), 6 === data.aOC ? function(dt, a32) {
		var aOF = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aO2 = dt < 12 ? new Date(Date.UTC(aOF, dt) - a32) : new Date(Date.UTC(aOF + 1, 0) - a32)
	}(dt, a32) : (a32 = 6e4 * aO7[data.aOC], aO2 = data.aOC <= 4 ? new Date(hf + a32 - dt.getTime() % a32) : new Date(hf + a32 - (dt.getTime() + 2592e5) % a32)), hf = bA.color, colors = [bB.ni, hf.na(255, 0, 0), hf.na(0, 200, 0), hf.na(80, 80,
		255), hf.na(255, 255, 0), hf.na(255, 0, 255), hf.na(0, 255, 255), hf.na(255, 140, 0), hf.na(128, 128, 128), hf.na(0, 255, 140)], aMp = new uS(L(254) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aOC] + ", " + bA.a2H.a31(aO1), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(255), function() {
			t.u(14)
		})
	], !1)
}

function aMW() {
	var aMp, aMq, qV;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(L(256), [new w("⬅️ " + L(37), function() {
		t.aMn(13)
	})]), aMq = new qT(aMp.uY, ((qV = []).push(function() {
		var aN8 = new qD,
			aNH = (aN8.qG(L(257)), aN8.qI(L(258)), new w(L(259), function() {
				bj.s2.s3(130, 0), t.y.aOg()
			}, 0, 0, 1)),
			rN = new rO(bj.eK.data[126], 0, function() {
				aNH.button.click()
			});
		return aN8.qR(rN), rN.e.placeholder = "a,b,c", rN.e.style.marginTop = "0.5em", aN8.qR(new s5([aNH.button])), aN8
	}()), qV.push(function() {
		var aN8 = new qD,
			aNH = new w(L(259), function() {
				bj.s2.s3(130, 1), t.y.aOg()
			}, 0, 0, 1),
			aOh = new rO(bj.eK.data[129], 1, function() {
				aOh.e.focus()
			}),
			aOi = new rO(bj.eK.data[128], 1, function() {
				aNH.button.click()
			});
		return aN8.qG(L(260)), aN8.qR(aOi), aOi.e.style.marginBottom = "0.5em", aN8.qG(L(261)), aN8.qR(aOh), aN8.qR(new s5([aNH.button])), aN8
	}()), qV.push(function() {
		var aN8 = new qD;
		return aN8.qG(L(262)), bj.eK.data[125].uR = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aN8.qO(new uN(bj.eK.data[125])), aN8
	}()), qV.push(function() {
		var aN8 = new qD;
		return aN8.qG(L(263)), aN8.qR(new rz(bj.eK.data[127], L(264))), aN8
	}()), qV))
}

function aMV() {
	var aMp, aOj, aNx, aOk, aOl, aOm, colors = [0, 0, 0],
		aOn = -1;

	function aOq(aB) {
		var aOr = aOj.ew + aB * (bc.gap + aOm);
		ui.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", ui.fillRect(aOk, aOr, colors[aB] * aOl, aOm), ui.strokeStyle = bB.ni, ui.strokeRect(aOk, aOr, aOl,
			aOm), ui.fillStyle = bB.ni, ui.font = bA.qa.sP(0, .32 * aOm), bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 0), ui.fillText(L(0 === aB ? 267 : 1 === aB ? 268 : 269) + aOo(aB), aOk + bc.gap, aOr + .53 * aOm)
	}

	function aOo(aB, aOs) {
		return aOs = aOs || 256, bL.hv(Math.floor(aOs * colors[aB]), 0, aOs - 1)
	}

	function a1w(lN, lO) {
		return !(lN < aOk || lO < aOj.ew || lN > aOj.eu + aOj.i || lO > aOj.ew + aOj.j)
	}
	this.show = function() {
		var fF = bj.eK.data[121].value;
		colors[0] = (fF >> 12) / 63, colors[1] = (fF >> 6 & 63) / 63, colors[2] = (63 & fF) / 63, aMp.show(), this.resize()
	}, this.rr = function() {
		bj.s2.s3(121, (aOo(0, 64) << 12) + (aOo(1, 64) << 6) + aOo(2, 64)), aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aOj.resize();
		var f8 = h.k,
			ug = aMp.ud(),
			aOp = (aOj.ew = Math.max(aOj.ew, f8 * ug.ru + bc.gap), f8 * ug.uf - 2 * bc.gap);
		aOj.j = Math.min(aOj.j, aOp), aOj.i = 2 * aOj.j, aOj.ew = f8 * ug.ru + .5 * (f8 * ug.uf - aOj.j), aOj.eu = .5 * (h.i - aOj.i), aNx = .25 * aOj.i, aOk = aOj.eu + aNx + bc.gap, aOl = aOj.i - aNx - bc.gap, aOm = (aOj.j - 2 * bc.gap) / 3
	}, this.uh = function() {
		var e7, tD, f7;
		aMp.uh(), ui.lineWidth = bc.yw, e7 = aOo(0), tD = aOo(1), f7 = aOo(2), ui.fillStyle = "rgb(" + e7 + "," + tD + "," + f7 + ")", ui.fillRect(aOj.eu, aOj.ew, aNx, aOj.j), ui.strokeStyle = bB.ni, ui.strokeRect(aOj.eu, aOj.ew, aNx, aOj.j), ui
			.fillStyle = e7 + tD + f7 < 306 && tD < 150 ? bB.ni : bB.nZ, bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 1), ui.font = bA.qa.sP(0, .1 * aOj.j), ui.rotate(-Math.PI / 2), ui.fillText(L(266), -aOj.ew - .5 * aOj.j, aOj.eu + .5 * aNx),
			ui.setTransform(1, 0, 0, 1, 0, 0), aOq(0), aOq(1), aOq(2)
	}, this.h0 = function(lN, lO) {
		a1w(lN, lO) && (aOn = bL.hv(Math.floor((lO - aOj.ew) / (aOm + .75 * bc.gap)), 0, 2), colors[aOn] = bL.hv((lN - aOk) / aOl, 0, 1), bf.dl = !0)
	}, this.a1S = function(lN) {
		-1 !== aOn && (colors[aOn] = bL.hv((lN - aOk) / aOl, 0, 1), bf.dl = !0)
	}, this.a1V = function(lN, lO, deltaY) {
		a1w(lN, lO) && (lN = bL.hv(Math.floor((lO - aOj.ew) / (aOm + .75 * bc.gap)), 0, 2), colors[lN] = bL.hv(colors[lN] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a1q = function() {
		0 <= aOn && (aOn = -1, bf.dl = !0)
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(L(265), [new w("⬅️ " + L(37), function() {
		t.y.aC2()
	})], !1), aOj = new rB([.5, .25], [.5, .5], 1)
}

function aMd() {
	var aNj, aNk, aNl, r9;

	function aNm() {
		aNo(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aMo()[19] = null, t.a18()
	}

	function aOt() {
		aNo(), t.u(21)
	}

	function aNo() {
		1 === aD.data.gameMode ? aD.a4P.a4U() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qi.a2c(aNl.uz(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, r9 = [new w("⬅️ " + L(37), aNm)], 1 === aD.data.gameMode && r9.push(new w(L(270), aOt, 1, 1)), aNj = new uS(L(271), r9), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), 0 === aD.data.gameMode && (aN8.qO(new uN({
			uR: [L(272), L(250)],
			value: aD.data.colorsType
		}, function(e8) {
			aNo(), aD.data.colorsType = e8, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ek || (aD.data.colorsData = new Uint32Array(aD.ek)), t.u(21)
		})), aN8.qR(new sF));
		aN8.qR(new rz({
			value: aD.data.selectableColor
		}, L(273), function(value) {
			aD.data.selectableColor = value
		})), qV.push(aN8)
	}(r9 = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qV) {
		var aN8 = new qD;
		aN8.qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.colorsData, 1)), aN8.qR(aNl), qV.push(aN8)
	}(r9) : (aD.a4P.a4U(), r9.push(function() {
		var aN8 = new qD;
		aN8.qG(L(253));
		for (var aB = 0; aB < bg.a0J.length; aB++) {
			var hf = (aB + 1) % bg.a0J.length,
				e = aN8.qM((0 == hf ? "" : "Team ") + bg.a0J[hf]);
			aB && (e.style.marginTop = "0.5em"), aN8.qR(new rO({
				e8: -1,
				value: aD.data.teamPlayerCount[hf]
			}, 1, 0, function(e) {
				aNj.uZ[1].qu(0);
				var playerCount = bL.hv(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aOv] = playerCount
			})).e.aOv = hf
		}
		return aN8
	}())), r9))
}

function sq(id, a3l, aOw) {
	var aMp, aOx;

	function aP2() {
		aOx.qW.innerHTML += "<br>" + L(276)
	}

	function aP1() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.s2.s3(110, bF.ss.st(bF.ss.su(8))), b0.aNF.aPG()
	}
	this.aOy = !0, this.aOz = id, this.show = function() {
		aMp.show(), this.resize(), 15 === id ? (b0.y.aP0(id) ? aP1 : aP2)() : 16 === id ? b0.y.aP0(id) ? b0.aBz.aP3(2) : aP2() : 17 === id ? b0.y.aP0(id) ? b0.aBz.aP3(3) : aP2() : 18 === id ? (b0.y.close(0, 3253), b0.y.aFY(0, id), aP2()) : 21 ===
			id ? b0.y.aP0(id) ? b0.aP4.aP5(a3l.t8, a3l.t9, a3l.tA) : aP2() : 22 === id ? b0.y.aP0(id) ? b0.aP4.aP6(a3l.t8, a3l.aP7, a3l.aP8) : aP2() : 23 === id ? b0.y.aP0(id) ? b0.aP4.aP9(a3l.aOC, a3l.a0d) : aP2() : 24 === id ? b0.y.aP0(id) ? b0
			.aP4.aPA(a3l.aOC, a3l.t9, a3l.tA) : aP2() : 25 === id ? b0.y.aP0(id) ? b0.aNF.aNV(a3l) : aP2() : 28 === id ? b0.y.aP0(id) ? b0.aP4.aPB(a3l.t8, a3l.aP7, a3l.aP8) : aP2() : 29 === id && (b0.y.aP0(id) ? b0.aNF.aPC(a3l) : aP2())
	}, this.aPD = function() {
		15 === id ? aP1() : 16 === id ? b0.aBz.aP3(2) : 17 === id ? b0.aBz.aP3(3) : 18 === id ? t.u(8, this.aMM, new sq(16)) : 21 === id ? b0.aP4.aP5(a3l.t8, a3l.t9, a3l.tA) : 22 === id ? b0.aP4.aP6(a3l.t8, a3l.aP7, a3l.aP8) : 23 === id ? b0.aP4
			.aP9(a3l.aOC, a3l.a0d) : 24 === id ? b0.aP4.aPA(a3l.aOC, a3l.t9, a3l.tA) : 25 === id ? b0.aNF.aNV(a3l) : 28 === id ? b0.aP4.aPB(a3l.t8, a3l.aP7, a3l.aP8) : 29 === id ? b0.aNF.aPC(a3l) : 1e3 === id && (this.aOz = id = 25, b0.aNF.aNV(
				a3l))
	}, this.aPE = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aMM) : 17 === code ? (b0.y.close(0, 3252), bj.y.vY(0), bj.eK.data[117].uR && 0 < bj.eK.data[117].uR.length ? (bu = bj.y.vZ(0), bj.s2.s3(105, bu.sn), bj.s2.s3(106, bu
			.password), t.u(8, this.aMM, new sq(16))) : (bj.s2.s3(105, ""), t.y.aC2())) : 21 === code ? t.u(10, this.aMM, new aPF(data)) : 23 === code ? t.u(13, this.aMM, new aNu({
			data: data,
			aOC: a3l.aOC
		})) : 25 === code && (t.y.aMX.sn = a3l.sn, t.u(15, this.aMM)))
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aOx.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(L(274), [new w("⬅️ " + L(37), function() {
		aOw ? t.u(29) : t.y.aC2()
	})]), aOx = new s4(aMp.uY, L(275))
}

function aMb() {
	var aNj, aNk, qV;

	function aPJ() {
		var gG;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4P.a4U()), gG = bA.qi.a2W(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gG) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aNm() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aPL(), aD.data.canvas = null, t.u(5, 5)
	}

	function aPL() {
		b9.pu.dd(), bj.s2.s3(156, b9.a4g.zQ())
	}

	function aPH() {
		aD.data.isReplay = 0, aPL(), aD.a4P.a4r(), aa.aFj(), aD.a4P.a4o(), aD.data.canvas = 2 === aD.data.mapType ? bS.wV : null, aD.a4T(), aD.a4R = 1
	}

	function aPX() {
		aPJ();
		for (var g = [aPO(), aPP(), aPQ()], aB = 3; aB < 6; aB++) aNk.qW.removeChild(aNk.qX[aB].qF), aNk.qX[aB] = g[aB - 3], aNk.qW.appendChild(aNk.qX[aB].qF);
		aNk.resize()
	}

	function aPO() {
		var aPY, aN8 = new qD;
		return aN8.qG(L(271)), aPY = 0 === aD.data.gameMode ? [L(272), L(250)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aN8.qM(aPY), aN8.qR(new s5([new w(L(280), function() {
			t.u(21)
		}).button])), aN8
	}

	function aPP() {
		var aN8 = new qD,
			g = (aN8.qG(L(62)), [L(249) + ": " + aE.kL[aD.data.botDifficultyValue], L(251), L(252), L(250)]);
		return aN8.qM(g[aD.data.botDifficultyType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(25)
		}).button])), aN8
	}

	function aPQ() {
		var aN8 = new qD,
			g = (aN8.qG("Spawning"), [L(272), L(282), L(250)]);
		return aN8.qM(g[aD.data.spawningType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(24)
		}).button])), aN8
	}
	this.show = function() {
		aNj.show(), this.resize(), aNj.uY.scrollTop = t.y.aHe[0]
	}, this.rr = function() {
		t.y.aHe[0] = aNj.uY.scrollTop, aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS("🔧 " + L(277), [new w("⬅️ " + L(37), aNm), new w(L(278), aPH)]), aPJ(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.wV : 1 === aD.data.mapType ? aD.data.canvas = bS.aKH(bS.a4p(aD.data), 0).wV : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aKH(bS.a4p(aD.data), aD.data.mapSeed).wV)), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD,
			a2m = (aN8.qG(L(279)), aD.data.canvas);
		a2m.style.width = "100%", aN8.qR({
			e: a2m
		}), aN8.qR(new s5([new w(L(280), function() {
			t.u(20)
		}).button])), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8 = new qD;
		aN8.qG(L(253)), aN8.qR(new rO({
			e8: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.hv(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qi.a2W(aD.data.teamPlayerCount, 0), aD.a4P.a4U(), bA.qi.a2W(aD.data.teamPlayerCount, 0) !== e) && aPX()
		})), qV.push(aN8)
	}(qV), function(qV) {
		var aN8 = new qD;
		aN8.qG(L(281)), aN8.qO(new uN({
			uR: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e8) {
			aD.data.gameMode !== e8 && (aD.data.gameMode = e8, aPX())
		})), qV.push(aN8)
	}(qV), qV.push(aPO()), qV.push(aPP()), qV.push(aPQ()), function(qV) {
		var aN8 = new qD,
			g = (aN8.qG(L(283)), [L(284), L(285), L(250)]);
		aN8.qM(g[aD.data.playerNamesType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(23)
		}).button])), qV.push(aN8)
	}(qV), function(qV) {
		var aN8 = new qD,
			g = (aN8.qG(L(246)), [L(248), L(249) + ": " + aD.data.aIncomeValue, L(250)]);
		aN8.qM(g[aD.data.aIncomeType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(22)
		}).button])), qV.push(aN8)
	}(qV), function(qV) {
		var aN8 = new qD,
			g = (aN8.qG(L(286)), [L(248), L(249) + ": " + aD.data.tIncomeValue, L(250)]);
		aN8.qM(g[aD.data.tIncomeType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(26)
		}).button])), qV.push(aN8)
	}(qV), function(qV) {
		var aN8 = new qD,
			g = (aN8.qG(L(287)), [L(248), L(249) + ": " + aD.data.iIncomeValue, L(250)]);
		aN8.qM(g[aD.data.iIncomeType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(27)
		}).button])), qV.push(aN8)
	}(qV), function(qV) {
		var aN8 = new qD,
			g = (aN8.qG(L(288)), [L(248), L(249) + ": " + aD.data.sResourcesValue, L(250)]);
		aN8.qM(g[aD.data.sResourcesType]), aN8.qR(new s5([new w(L(280), function() {
			t.u(28)
		}).button])), qV.push(aN8)
	}(qV), function(qV) {
		var aN8 = new qD;
		aN8.qG(L(289)), aN8.qR(new s5([new w(L(290), function() {
			t.x(), aD.a4P.a4s(), t.y.aHe[0] = 0, t.u(19)
		}).button])), aN8.qR(new s5([new w(L(291), function() {
			bm.aHT()
		}).button])), aN8.qR(new s5([new w(L(292), function() {
			return bm.aHV(), !0
		}).button])), qV.push(aN8)
	}(qV), qV))
}

function aMm() {
	var aNj, rT = !0;

	function rk(rj, a4w) {
		var qF = document.createElement("div"),
			aPa = document.createElement("span"),
			aPb = document.createElement("span");
		aPa.textContent = aW.aAs(a4w.eM) + ":", aPa.style.color = bB.nx, aPa.style.paddingRight = "0.4em", aPa.style.display = "table-cell", aPa.style.width = "6ch", aPa.style.textAlign = "end", qF.appendChild(aPa), aPb.textContent = a4w.qH, qF
			.appendChild(aPb), qF.style.display = "table", a4w.pI && function(qF, pI) {
				{
					var aHP;
					pI >= 1024 - aj.rq.yj ? ((aHP = document.createElement("img")).src = aj.wY.yX[pI - 1024 + aj.rq.yj].toDataURL(), aHP.style.width = "1.5em", aHP.style.height = "1.5em", aHP.style.verticalAlign = "middle", qF.appendChild(aHP)) : ((
						aHP = document.createElement("span")).textContent = aj.rq.yy(pI), aHP.style.display = "inline-block", aHP.style.fontSize = "1.5em", aHP.style.lineHeight = "1em", aHP.style.verticalAlign = "middle", qF.appendChild(aHP))
				}
			}(qF, a4w.pI), rj.appendChild(qF)
	}

	function rn() {
		rT && (aNj.uY.scrollTop = aNj.uY.scrollHeight)
	}
	this.clear = function() {
		aNj.uY.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a5p = bq.a50(), en = a5p.length, rj = document.createDocumentFragment(), aB = 0; aB < en; aB++) rk(rj, a5p[aB]);
		aNj.uY.appendChild(rj), rn(), aNj.show(), this.resize(), rT = !0, rn()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNj.uY.style.padding = "0.4em " + bA.qa.qj(bc.qg)
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, this.yQ = function(a4w) {
		var rj = document.createDocumentFragment();
		rk(rj, a4w), aNj.uY.appendChild(rj), rn()
	}, (aNj = new uS(L(293), [new w("⬅️ " + L(37), function() {
		t.aMn(1)
	})])).uY.style.overflowY = "auto", aNj.uY.addEventListener("scroll", function() {
		rT = aNj.uY.scrollTop >= aNj.uY.scrollHeight - aNj.uY.clientHeight - 2
	})
}

function aMj() {
	var aNj, aNk, aNl, qV;

	function aNm() {
		aNo(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		2 === aD.data.iIncomeType && bA.qi.a2c(aNl.uz(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(287), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), aN8.qO(new uN({
			uR: [L(248), L(249), L(250)],
			value: aD.data.iIncomeType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ek), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e8, t.u(27)
		})), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8;
		1 === aD.data.iIncomeType && ((aN8 = new qD).qG("Value"), aN8.qR(new rO({
			e8: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qV.push(aN8))
	}(qV), function(qV) {
		var aN8;
		2 === aD.data.iIncomeType && ((aN8 = new qD).qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.iIncomeData, 4)), aN8.qR(aNl), qV.push(aN8))
	}(qV), qV))
}

function aMR() {
	var aPd, aPe, aOj, rN, aPf;
	this.aGH = new sy, aOj = new rB([.45, .27], [.5, .5], 2 / 3), aPe = [new w("⚔️<br>" + L(294), function() {
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
	], rN = new rO(bj.eK.data[122]);
	for (var aB = 0; aB < aPe.length; aB++) aPe[aB].button.style.position = "absolute";

	function aPg(e8) {
		a0.a1.setState(10), ab.tH() || ab.aG8(), 0 === e8 ? t.y.a4j() : 1 === e8 ? (b9.aHo.wG(bj.eK.data[156].value, 1) || aD.a4P.a4s(), t.u(19)) : 2 === e8 ? 0 !== a0.id || bj.eK.data[140].value ? t.u(8, t.sp, new sq(16)) : t.y.aPh(t.sp, 16) : 3 ===
			e8 && t.u(1)
	}
	rN.e.style.position = "absolute", rN.e.style.textAlign = "center", rN.e.placeholder = L(297), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGH.show(), aPe[4].qu(bA.color.a2t(bj.eK.data[121].value)), this.resize(), document.body.appendChild(rN.e);
		for (var aB = 0; aB < aPe.length; aB++) document.body.appendChild(aPe[aB].button);
		1 !== a0.id || a0.dv < 5 || (aPf && bf.eM > aPf + 144e5 ? a0.vJ.setState(14) : aPf = bf.eM)
	}, this.rr = function() {
		this.aGH.rr(), document.body.removeChild(rN.e);
		for (var aB = 0; aB < aPe.length; aB++) document.body.removeChild(aPe[aB].button)
	}, this.resize = function() {
		this.aGH.resize(), this.aGH.resize(), aOj.resize();
		var gap = .5 * bc.gap,
			tm = 10 / 99 * .84 * aOj.i,
			aPk = .16 * aOj.j,
			a8x = .19 * aOj.i,
			eu = aOj.eu + a8x,
			tm = aOj.ew + tm + 3 * gap,
			i = .5 * (aOj.i - gap) - a8x,
			a8x = aOj.i - 2 * a8x - aPk - gap,
			a8x = (bA.qa.tF(rN.e, eu, tm, a8x, aPk), bA.qa.tF(aPe[4].button, eu + a8x + gap, tm, aPk, aPk), .5 * (aOj.ew + aOj.j - (tm += aPk + gap) - gap));
		bA.qa.tF(aPe[0].button, eu, tm, i, a8x), bA.qa.tF(aPe[1].button, eu + i + gap, tm, i, a8x), bA.qa.tF(aPe[2].button, eu, tm + a8x + gap, i, a8x), bA.qa.tF(aPe[3].button, eu + i + gap, tm + a8x + gap, i, a8x);
		bA.qa.tF(aPe[5].button, eu, tm + a8x * 2 + gap * 2, i * 2 + gap, a8x / 3);
		bA.qa.tF(aPe[6].button, eu, tm + a8x * 2.33 + gap * 3, i * 2 + gap, a8x / 3);
		for (var aB = 0; aB < aPe.length; aB++) aPe[aB].button.style.font = bA.qa.sP(0, bA.qa.a39(.065 * aOj.j)), bA.qa.qk(aPe[aB].button, 5);
		rN.e.style.font = bA.qa.sP(0, bA.qa.a39(.08 * aOj.j)), bA.qa.qk(rN.e, 5)
	}, this.uh = function() {
		if (aa.aFn(), aT.uh(), aO.uh(), bY.uh(), ab.tH()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aOj.i * 0.03);
				ui.font = bA.qa.sP(1, size);
				ui.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = ui.measureText(text).width;
				ui.textAlign = "left";
				ui.textBaseline = "middle";
				ui.fillText(text, ui.canvas.width - textLength - size / 2, size);
			};
			ui.imageSmoothingEnabled = !1;
			var f8 = ab.aFq("territorial.io"),
				nK = .84 * aOj.i / f8.width;
			ui.setTransform(nK, 0, 0, nK, aOj.eu + .08 * aOj.i, aOj.ew), aPd = aPd || bA.a2D.a3j(f8, bA.a2D.a3p, [0, 0, 0]);
			for (var eu = -1; eu <= 1; eu += 2)
				for (var ew = -1; ew <= 1; ew += 2) ui.drawImage(aPd, eu, ew);
			ui.drawImage(f8, 0, 0), ui.imageSmoothingEnabled = !0;
			var z5 = ab.aFq("logo"),
				aPm = .6666 * nK * f8.height / z5.height,
				nL = .5 * h.i,
				nM = aOj.ew + .5 * nK * f8.height - .5 * aPm * z5.height;
			ui.setTransform(aPm, 0, 0, aPm, nL - .6 * nK * f8.width, nM), ui.drawImage(z5, 0, 0), ui.setTransform(aPm, 0, 0, aPm, nL + .6 * nK * f8.width - aPm * z5.width, nM), ui.drawImage(z5, 0, 0), ui.setTransform(1, 0, 0, 1, 0, 0), ui
				.imageSmoothingEnabled = !0
		}
	}
}

function aMY() {
	var aMp, aPn, aPo, uT;

	function aPp(aB) {
		t.u(8, t.sp, new sq(21, {
			t8: aB,
			t9: 0,
			tA: 10
		}))
	}
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aPn.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
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
	}, 0, 0, 1)], uT = [new w("⬅️ " + L(37), function() {
		t.a18()
	})], aMp = new uS(L(305), uT), aPn = new r8(aPo, aMp.uY)
}

function aCQ(title, qN, aPq) {
	var aMp, aOx;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aOx.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aPq = aPq || [new w("⬅️ " + L(37), function() {
		t.a18()
	}, bB.oN)], aMp = new uS(title, aPq), aOx = new s4(aMp.uY, qN), bA.qa.textAlign(aMp.uY.style, 1)
}

function aPF(data) {
	var aMp, aPr, f8, sf;

	function aPs(jQ) {
		var en = data.data.length;
		if (en) {
			for (var t9, max = min = parseInt(data.data[0][0]), aB = 1; aB < en; aB++) var aEE = parseInt(data.data[aB][0]),
				min = Math.min(aEE, min),
				max = Math.max(aEE, max);
			t9 = jQ < 0 ? min + jQ : max + 1, t.u(8, t.a4y().aMM, new sq(21, {
				t8: data.t8,
				t9: t9,
				tA: t9 + Math.abs(jQ)
			}))
		}
	}
	this.show = function() {
			aMp.show(), this.resize()
		}, this.rr = function() {
			aMp.rr()
		}, this.resize = function() {
			aMp.resize(), aPr.resize()
		}, this.a20 = function(f8) {
			2 === f8 && aMp.uZ[0].qr()
		}, f8 = data.data.length ? 0 : 1, f8 = [new w("⬅️ " + L(37), function() {
			t.a18()
		}), new w(L(306), function() {
			aPs(-10)
		}, f8, 0, 1), new w(L(307), function() {
			aPs(10)
		}, f8, 0, 1), new w(L(255), function() {
			t.u(11, 10, new aPt({
				t8: data.t8
			}))
		})], sf = [L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(303), L(304), L(318)], aMp = new uS(sf[data.t8], f8),
		function() {
			var aB, eq = {
					sZ: []
				},
				sZ = eq.sZ,
				aPv = data.data,
				en = aPv.length;
			en && 0 === aPv[0][0] && 0 <= (e8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t8]) && (t.y.tB[e8] = aPv[0][1]);
			var nK = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t8],
				a3v = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t8],
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
			if (eq.sf = e8[data.t8], eq.sk = [
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
				][data.t8], 0 === data.t8 || 2 === data.t8 || 3 === data.t8 || 9 === data.t8 || 10 === data.t8 || 11 === data.t8)
				for (aB = 0; aB < en; aB++) sZ.push([{
					fF: aPv[aB][0] + 1 + ".",
					dt: 0
				}, {
					fF: aPv[aB][1],
					dt: 1,
					sn: aPv[aB][4],
					so: aPv[aB][3]
				}, {
					fF: (nK * aPv[aB][2]).toFixed(a3v),
					dt: 0
				}]);
			else if (12 === data.t8)
				for (aB = 0; aB < en; aB++) {
					var aPy = aPv[aB][3];
					sZ.push([{
						fF: "" + aPv[aB][0],
						dt: 0
					}, {
						fF: "" + aPv[aB][4],
						dt: 0
					}, {
						fF: aPv[aB][5],
						dt: 1,
						sn: aPv[aB][1],
						so: 0
					}, {
						fF: aPv[aB][6],
						dt: 1,
						sn: aPv[aB][2],
						so: 0
					}, {
						fF: bo.eE(aPy % 16, aPy >> 4),
						dt: 0
					}])
				} else if (1 === data.t8)
					for (aB = 0; aB < en; aB++) sZ.push([{
						fF: aPv[aB][0] + 1 + ".",
						dt: 0
					}, {
						fF: aPv[aB][1],
						dt: 0
					}, {
						fF: (nK * aPv[aB][2]).toFixed(a3v),
						dt: 0
					}, {
						fF: aPv[aB][3],
						dt: 1,
						sn: aPv[aB][5],
						so: aPv[aB][4]
					}]);
				else if (4 === data.t8 || 5 === data.t8 || 6 === data.t8 || 7 === data.t8 || 8 === data.t8)
				for (aB = 0; aB < en; aB++) {
					var aPz = aPv[aB][5];
					4 === data.t8 || 8 === data.t8 ? "100%" === (aPz = (aPz % 64 * 100 / (aPz >> 6)).toFixed(0) + "%") && (4 === data.t8 ? aPz += " (" + L(340) + ")" : aPz += " (" + L(341) + ")") : 5 === data.t8 ? 32768 <= aPz && (aPz = -(aPz -
						32768)) : aPz = (nK * aPz).toFixed(a3v), sZ.push([{
						fF: "" + aPv[aB][0],
						dt: 0
					}, {
						fF: "" + aPv[aB][6],
						dt: 0
					}, {
						fF: aPv[aB][7],
						dt: 1,
						sn: aPv[aB][1],
						so: aPv[aB][2]
					}, {
						fF: aPv[aB][8],
						dt: 1,
						sn: aPv[aB][3],
						so: aPv[aB][4]
					}, {
						fF: "" + aPz,
						dt: 0
					}])
				}
			aPr = new sY(aMp.uY, eq)
		}()
}

function aPt(a3l) {
	var aMp, aMq, qV;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(L(342), [new w("⬅️ " + L(37), function() {
		t.aMn(10)
	})]), aMq = new qT(aMp.uY, ((qV = []).push(function() {
		var aNH, aN8 = new qD,
			aOh = new rO(bj.eK.data[132], 1, function() {
				aNH.button.click()
			}),
			aOi = new rO(bj.eK.data[131], 1, function() {
				aOh.e.focus()
			});
		aN8.qG(L(260)), aN8.qR(aOi), aOi.e.style.marginBottom = "0.8em", aN8.qG(L(261)), aN8.qR(aOh);
		return aNH = new w(L(259), function() {
			t9 = Math.floor(aOi.e.value), tA = Math.floor(aOh.e.value);
			var tA, t9 = {
				a2U: Math.min(t9, tA),
				aLx: Math.max(t9, tA)
			};
			t.u(8, t.a4z(10).aMM, new sq(21, {
				t8: a3l.t8,
				t9: t9.a2U,
				tA: t9.aLx
			}))
		}, 0, 0, 1), aN8.qR(new s5([aNH.button])), aN8
	}()), qV.push(function() {
		var aNH, aN8 = new qD,
			aOh = new rO(bj.eK.data[134], 1, function() {
				aNH.button.click()
			}),
			aOi = new rO(bj.eK.data[133], 0, function() {
				aOh.e.focus()
			});
		return aN8.qG(1 === a3l.t8 ? L(343) : L(344)), aN8.qR(aOi), aOi.e.style.marginBottom = "0.8em", aN8.qG(L(345)), aN8.qR(aOh), aNH = new w(L(259), function() {
			var aP7 = aOi.e.value.slice(0, 20),
				aP8 = Math.abs(Math.floor(aOh.e.value));
			t.u(8, t.a4z(10).aMM, new sq(22, {
				t8: a3l.t8,
				aP7: aP7,
				aP8: aP8
			}))
		}, 0, 0, 1), aN8.qR(new s5([aNH.button])), aN8
	}()), qV.push(function() {
		var aNH, aN8 = new qD,
			aOh = new rO(bj.eK.data[152], 1, function() {
				aNH.button.click()
			}),
			aOi = new rO(bj.eK.data[151], 0, function() {
				aOh.e.focus()
			});
		return aN8.qG(L(346)), aN8.qR(aOi), aOi.e.style.marginBottom = "0.8em", aN8.qG(L(345)), aN8.qR(aOh), aNH = new w(L(259), function() {
			var aP7 = aOi.e.value.slice(0, 5),
				aP8 = Math.abs(Math.floor(aOh.e.value));
			t.u(8, t.a4z(10).aMM, new sq(28, {
				t8: a3l.t8,
				aP7: aP7,
				aP8: aP8
			}))
		}, 0, 0, 1), aN8.qR(new s5([aNH.button])), aN8
	}()), qV))
}

function aMl() {
	var aQ3, tL, aQ6, tK, tN, aQ4 = [new Array(4), [], new Array(2), new Array(2)],
		aQ5 = new Array(4),
		aQ7 = new Array(2),
		aQ8 = [L(61), L(302), L(347), L(348)];

	function aDz() {
		var a6p = aQ3.tY.rN.e.value.trim().slice(0, 127);
		a6p.length < 1 || (aQ3.tY.rN.e.value = "", bn.aCT.a02(a6p))
	}

	function aQB(aQD) {
		bn.y.re[3] = 1 - bn.y.re[3], aQC(3, 1, bn.y.re[3]), aQD && b0.aEA.aEB(4), bn.y.re[3] && bj.s2.s3(158, bn.y.re[0])
	}

	function aQ9(f6, f7) {
		bn.y.re[f6] !== f7 && (0 === f6 && bn.y.re[3] && aQB(0), aQC(f6, bn.y.re[f6], 0), aQC(f6, f7, 1), bn.y.re[f6] = f7, 0 === f6 ? (b0.aEA.aEB(2, f7), bn.y.re[2] ? (aQ3.tZ.mV(), aQ3.tY.rb(1)) : aQ3.tY.rb(0), t.a4y().aDo(), t.a4y().aDn()) : 2 ===
			f6 && (0 === f7 ? (b0.aEA.aEB(0), aQ3.tY.mV(), aQ3.th()) : (b0.aEA.aEB(1), aQ3.tZ.mV(), aQ3.ti())))
	}

	function aQC(f6, f7, color) {
		aQ3.tb[f6].r9[f7].qu(color ? bB.o7 : bB.ou)
	}

	function aQG(aD2) {
		return aD2 < 7 ? aD2 + 2 + " " + L(355) : 7 === aD2 || 10 === aD2 ? L(302) + " (Full-Sending: " + L(7 === aD2 ? 356 : 357) + ")" : 8 === aD2 ? "1v1" : L(358)
	}

	function aQH(fF) {
		var a6s = bL.du(fF, 60),
			fF = fF % 60;
		return (a6s < 10 ? "0" : "") + a6s + ":" + (fF < 10 ? "0" : "") + fF
	}
	this.aEM = function() {
		return aQ3.tY
	}, this.aCT = function(sn) {
		aQ9(2, 0);
		var qH = aQ3.tY.rN.e.value,
			sn = "@" + sn + " ";
		qH.length && !bA.rZ.a3G(qH, " ") && (sn = " " + sn), aQ3.tY.rN.e.value = qH += sn, aQ3.tY.rN.e.focus()
	}, this.aDm = function() {
		aQ3.tZ.mV()
	}, this.aDo = function() {
		var aQF = bn.y.re[0],
			aQF = bn.y.rg[aQF];
		bS.a7(aQF.eT, aQF.mapSeed), tL.r9[0].button.textContent = L(279) + ": " + bS.wL.wM[aQF.eT].name, tL.r9[1].button.textContent = L(281, 0, "Mode") + ": " + aQG(aQF.aD2), tL.r9[2].button.textContent = L(352) + ": " + bS.wL.wM[aQF.aEk].name,
			tL.r9[3].button.textContent = L(353, 0, "Next Mode") + ": " + aQG(aQF.aEl), tL.r9[4].button.textContent = L(354) + ": " + aQH(aQF.aDq), tL.resize()
	}, this.aDn = function() {
		var aQF = bn.y.re[0],
			rf = bn.y.rg[aQF];
		aQ3.tf(rf.tg);
		for (var aB = 0; aB < bn.tv.tw.length; aB++) aQ4[0][aB].rY.textContent = "" + bn.tv.tw[aB].length;
		var tv = bn.tv.tw[aQF],
			aQI = tv.length,
			aQJ = bn.tv.tx[aQF];
		aQ4[2][1].rY.textContent = "" + aQI, aQ4[3][1].rY.textContent = "" + aQJ, tL.r9[4].button.textContent = L(354) + ": " + aQH(rf.aDq);
		for (aB = 0; aB < 4; aB++) {
			var aQK = bn.y.rg[aB];
			aQ5[aB] ? 0 === aQK.tg && (aQ5[aB].rY.textContent = bS.wL.wM[aQK.eT].name) : aQ5[aB] = new rX(bS.wL.wM[aQK.eT].name, tK.r9[aB].button, 1, 1), bA.rZ.startsWith(aQ8[aB], "🏆 ") ? aQK.aD8 || (aQ8[aB] = aQ8[aB].substring(3), tK.r9[aB]
				.button.textContent = aQ8[aB], tK.r9[aB].button.appendChild(aQ4[0][aB].rY), tK.r9[aB].button.appendChild(aQ5[aB].rY)) : aQK.aD8 && (aQ8[aB] = "🏆 " + aQ8[aB], tK.r9[aB].button.textContent = aQ8[aB], tK.r9[aB].button
				.appendChild(aQ4[0][aB].rY), tK.r9[aB].button.appendChild(aQ5[aB].rY))
		}
		var rf = "",
			aQM = "";
		0 === aQF && (rf = bn.kx.aDM(tv, 0, aQI), aQM = bn.kx.aDM(tv, 0, aQJ)), aQ6[0].rY.textContent = rf, aQ6[1].rY.textContent = aQM, aQ7[1].rY.textContent = "MP: " + bn.y.aDf[0] + "   SP: " + bn.y.aDf[1] + "   Lobby: " + bA.qi.a2h(bn.tv.tw)
	}, this.aDs = function() {
		aQ3.tY.mV()
	}, this.show = function() {
		aQ3.show(), this.resize(), bn.message.show()
	}, this.rr = function() {
		aQ3.rr(), bn.uH.rr(), bn.tt.rr(), bn.message.rr()
	}, this.resize = function() {
		aQ3.resize(1 - bn.y.re[2]), bn.message.resize()
	}, this.a20 = function(f8) {
		2 === f8 ? bn.y.re[3] ? aQB(1) : aQ3.tb[3].r9[0].qr() : f8 < 2 && aQB(1)
	}, tK = new s8([new w(aQ8[0], function() {
		return aQ9(0, 0), 2
	}), new w(aQ8[1], function() {
		return aQ9(0, 1), 2
	}), new w(aQ8[2], function() {
		return aQ9(0, 2), 2
	}), new w(aQ8[3], function() {
		return aQ9(0, 3), 2
	})], bB.ou), tL = new s8([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.ov, 1);
	var aQA = new s8([new w(L(349), function() {
		return aQ9(2, 0), 2
	}), new w(L(113), function() {
		return aQ9(2, 1), 2
	})], bB.ou);
	tN = new s8([new w(L(350), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bn.uB(), b0.y.a1I(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bn.uB(), b0.y.a1I(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(351), function() {
		return aQB(1), 2
	})], bB.ou), aQ3 = new tJ(tK, tL, aQA, tN, aDz, bn.uH.aEV);
	for (var aB = 0; aB < 4; aB++) aQ4[0][aB] = new rX("0", tK.r9[aB].button);
	aQ4[2][1] = new rX("0", aQA.r9[1].button), aQ4[3][1] = new rX("0", tN.r9[1].button), aQ6 = [new rX("", aQA.r9[1].button, 1, 1), new rX("", tN.r9[1].button, 1, 1)], aQC(0, bn.y.re[0], 1), aQC(2, bn.y.re[2], 1), (aQ7 = [new rX(L(253), aQ3.tj(), 1,
		0), new rX("", aQ3.tj(), 1, 1)])[0].rY.style.fontSize = "0.4em", aQ7[1].rY.style.fontSize = "0.4em"
}

function aMS() {
	var aMp, aMq, qV;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(L(359), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a4z(7).aMM)
	}), new w(L(191), function() {
		bj.s2.s3(105, bG.ss.w5(aMq.qX[0].qE[0].e.value, 5)), bj.s2.s3(106, bG.ss.w5(aMq.qX[1].qE[0].e.value, 8)), t.u(8, t.a4z(7).aMM, new sq(18))
	})]), aMq = new qT(aMp.uY, ((qV = []).push(function() {
		var aN8 = new qD;
		return aN8.qG(L(172)), aN8.qR(new rO({
			value: "",
			e8: -1
		})), aN8
	}()), qV.push(function() {
		var aN8 = new qD,
			aNJ = (aN8.qG(L(174)), new rO({
				value: "",
				e8: -1
			}));
		return aNJ.e.type = "password", aN8.qR(aNJ), aN8.qR(new s5([new w(L(175), function(e) {
			return e.textContent === L(175) ? (e.textContent = L(176), aNJ.e.type = "text") : (e.textContent = L(175), aNJ.e.type = "password"), !0
		}).button])), aN8
	}()), qV))
}

function aMZ() {
	var aMp, aPn, aPo, uT;

	function aPp(aB) {
		t.u(8, t.sp, new sq(21, {
			t8: aB,
			t9: 0,
			tA: 10
		}))
	}
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aPn.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aPo = [new w(L(313), function() {
		aPp(5)
	}, 0, 0, 1), new w(L(314), function() {
		aPp(6)
	}, 0, 0, 1), new w(L(315), function() {
		aPp(7)
	}, 0, 0, 1), new w(L(318), function() {
		aPp(12)
	}, 0, 0, 1)], uT = [new w("⬅️ " + L(37), function() {
		t.a18()
	})], aMp = new uS(L(360), uT), aPn = new r8(aPo, aMp.uY)
}

function aMI() {
	this.eK = {}, this.tB = new Array(7), this.aMX = null, this.aMU = null, this.sW = 0, this.aHe = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4j = function() {
		t.x(), aZ.dd()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dd()
	}), this.aC2 = function() {
		t.u(0 === aa.a19() ? 5 : 0)
	}, this.aOg = function() {
		if (1 === bj.eK.data[130].value) t.u(8, t.a4y().aMM, new sq(24, {
			aOC: bj.eK.data[125].value,
			t9: bj.eK.data[128].value,
			tA: bj.eK.data[129].value
		}));
		else {
			for (var g = (g = bj.eK.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a4y().aMM, new sq(23, {
				aOC: bj.eK.data[125].value,
				a0d: g
			}))
		}
	}, this.aPh = function(aMM, target) {
		t.u(4, aMM, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aQO +
			"' target='_blank'>" + bK.aQO + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aMM)
			}), new w("✅ Accept", function() {
				bj.s2.s3(140, 1), 0 === target ? t.u(2, aMM) : t.u(8, aMM, new sq(target))
			})]))
	}, this.aQP = function() {
		for (var aB = 0; aB < 7; aB++) this.tB[aB] = bG.vw.w0(bH.ph(5));
		this.tB[1] = "[" + this.tB[1] + "]", 5 === t.sp && (t.a4y().aGH.s3(this.tB), t.a4y().resize())
	}
}

function aMc() {
	var aNj, aNk, aQQ, qV;

	function aNm() {
		b6.uB(), t.aMo()[19] = null, t.a18()
	}

	function aQX() {
		aQa(), aQY()
	}

	function aQa() {
		aQQ.qF.lastChild && aQQ.qF.removeChild(aQQ.qF.lastChild)
	}

	function aQY() {
		var aQb = bS.a4p(aD.data);
		aD.data.canvas = bS.aKH(aQb, aD.data.mapSeed).wV, aQZ()
	}

	function aQZ() {
		var a2m = aD.data.canvas;
		a2m.style.width = "100%", aQQ.qF.appendChild(a2m)
	}
	this.aHO = function(a2m) {
		aD.data.canvas && aQa(), aD.data.canvas = a2m, aQZ()
	}, this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(279), [new w("⬅️ " + L(37), aNm)]), 2 === aD.data.mapType && b6.dd(), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), aN8.qO(new uN({
			uR: [L(361), L(362), L(363)],
			value: aD.data.mapType
		}, function(e8) {
			2 === (aD.data.mapType = e8) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uB()), t.u(20)
		})), 2 <= aD.data.mapType && (aN8.qR(new sF), aN8.qR(new rz({
			value: aD.data.passableWater
		}, L(364), function(value) {
			aD.data.passableWater = value
		})), aN8.qR(new rz({
			value: aD.data.passableMountains
		}, L(365), function(value) {
			aD.data.passableMountains = value
		})));
		qV.push(aN8)
	}(qV = []), function(qV) {
		if (0 === aD.data.mapType) {
			for (var aN8 = new qD, uR = (aN8.qG(L(279)), []), aB = 0; aB < bS.wL.aLD.length; aB++) uR.push(bS.wL.wM[bS.wL.aLD[aB]].name);
			aN8.qO(new uN({
				uR: uR,
				value: aD.data.mapProceduralIndex
			}, function(e8) {
				aD.data.mapProceduralIndex = e8, aQX()
			})), qV.push(aN8)
		}
	}(qV), function(qV) {
		if (1 === aD.data.mapType) {
			for (var aN8 = new qD, uR = (aN8.qG(L(279)), []), aB = 0; aB < bS.wL.aLE.length; aB++) uR.push(bS.wL.wM[bS.wL.aLE[aB]].name);
			aN8.qO(new uN({
				uR: uR,
				value: aD.data.mapRealisticIndex
			}, function(e8) {
				aD.data.mapRealisticIndex = e8, aQX()
			})), qV.push(aN8)
		}
	}(qV), function(qV) {
		var aN8;
		2 === aD.data.mapType && ((aN8 = new qD).qG(L(279)), aN8.qR(new s5([new w(L(366), function() {
			return b6.aHH(), !0
		}).button])), qV.push(aN8))
	}(qV), function(qV) {
		(aQQ = new qD).qG(L(367)), 2 !== aD.data.mapType ? aQY() : aD.data.canvas && aQZ();
		qV.push(aQQ)
	}(qV), function(qV) {
		var aN8, rN, aNH;
		0 === aD.data.mapType && ((aN8 = new qD).qG("Seed"), rN = new rO({
			e8: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aQX())
		}), aNH = new w(L(272), function(e) {
			var aKC = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aKC) return rN.e.value = aD.data.mapSeed = aKC, aQX(), !0
		}), aN8.qR(rN), aN8.qR(new s5([aNH.button])), qV.push(aN8))
	}(qV), function(qV) {
		var aN8, rN;
		2 === aD.data.mapType && ((aN8 = new qD).qG(L(368)), rN = new rO({
			e8: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aN8.qR(rN), qV.push(aN8))
	}(qV), qV))
}

function v(title, qN, aQc, aPq) {
	var aMp, aOx;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aOx.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aPq = aPq || [new w("⬅️ " + L(37), function() {
		t.a18()
	})], aMp = new uS(title, aPq), aOx = new s4(aMp.uY, qN), aQc && bA.qa.textAlign(aMp.uY.style, 1)
}

function aMf() {
	var aNj, aNk, aNl, qV;

	function aNm() {
		aNo(), 2 === aD.data.playerNamesType && 1 === bA.qi.a2Q(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		2 === aD.data.playerNamesType && bA.qi.a2e(aNl.uz(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(283), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), aN8.qO(new uN({
			uR: [L(284), L(285), L(250)],
			value: aD.data.playerNamesType
		}, function(e8) {
			aNo(), aD.data.playerNamesType = e8, t.u(23)
		})), aN8.qR(new sF), aN8.qR(new rz({
			value: aD.data.selectableName
		}, L(369), function(value) {
			aD.data.selectableName = value
		})), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8;
		2 === aD.data.playerNamesType && ((aN8 = new qD).qG("Data"), aNl = new uq(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ek || (aD.data.playerNamesData = new Array(aD.ek), aD.data.playerNamesData
			.fill("")), aNl.ux(bA.rZ.a48(aD.data.playerNamesData, 1, '"')), aN8.qR(aNl), qV.push(aN8))
	}(qV), qV))
}

function aMQ() {
	var aNj, uv;

	function aQd() {
		t.x();
		var qH = b9.aQh(uv.uz());
		(aD.zy && 0 < qH.length && qH === b9.pu.a4f || b9.aHo.wG(qH)) && b9.aQi()
	}
	this.show = function(aQe) {
		this.aQf(aQe), aNj.show(), this.resize()
	}, this.aQf = function(aQe) {
		0 === aD.zy ? aQe ? uv.ux(aQe) : aD.a4S.length && uv.ux(aD.a4S) : (aD.gw || (b9.pu.a4f = b9.a4g.zQ()), uv.ux(b9.aQg(b9.pu.a4f)))
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), uv.resize()
	}, this.a20 = function(f8) {
		2 === f8 ? aNj.uZ[0].qr() : aQd()
	}, aNj = new uS(L(370), [new w("⬅️ " + L(37), function() {
		t.aMn(1)
	}), new w(L(371), function() {
		uv.v0()
	}), new w(L(372), function() {
		uv.v1()
	}), new w(L(373), function() {
		uv.clear()
	}), new w(L(374), function() {
		aQd()
	})]), uv = new uq(L(375)), aNj.uY.appendChild(uv.e)
}

function aMP() {
	var aMp, aMq, qV, aBy, aN8;

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
		}, this.rr = function() {
			aMp.rr()
		}, this.resize = function() {
			aMp.resize(), aMq.resize()
		}, this.a20 = function(f8) {
			2 === f8 && aMp.uZ[0].qr()
		}, aMp = new uS(L(376), [new w("⬅️ " + L(37), aQj), new w(L(377), function() {
			t.x(), bj.s2.vd(), t.u(2)
		})]), qV = [], (aN8 = new qD).qG(L(380)), aN8.qI(L(381)), qV.push(aN8),
		function(qV) {
			var aN8 = new qD,
				g = (aN8.qG(L(402)), b7.data.aC6());
			aN8.qO(new uN({
				uR: g,
				value: b7.data.aCA(g)
			}, function(e8) {
				return bj.s2.s3(12, g[e8].split(":")[0]), !0
			})), qV.push(aN8)
		}(qV),
		function(qV) {
			var aN8 = new qD,
				aQm = (aN8.qG(L(400)), []);
			aN8.qR(new s5([new w(L(401), function(e) {
				bX.aQn();
				for (var aB = 0; aB < aQm.length; aB++) aQm[aB].e.value = bX.aBO[aB];
				return bA.qa.a3F(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aQo.length; aB++) {
				aN8.qI(bX.aQo[aB]);
				for (var f6 = 0; f6 < 2; f6++) {
					var e8 = 2 * aB + f6,
						rN = new rO({
							value: bX.aBO[e8],
							e8: -1
						});
					rN.e.aQp = e8, aQm.push(rN), rN.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aQq(e.target.aQp, code)
					}), f6 && (rN.e.style.marginLeft = "4%"), rN.e.style.width = "48%", aN8.qR(rN)
				}
			}
			qV.push(aN8)
		}(qV), (aN8 = new qD).qG(L(23)), aN8.qO(new uN({
			uR: ["1", "2"],
			value: aZ.aFU - 1
		}, function(aB) {
			aZ.aFU = aB + 1
		})), qV.push(aN8), (aN8 = new qD).qG(L(382)), bj.eK.data[1].uR = [L(383), L(384), L(385), L(386)], aN8.qO(new uN(bj.eK.data[1])), qV.push(aN8), (aN8 = new qD).qG(L(387)), bj.eK.data[9].uR = [L(384), L(388), L(389)], aN8.qO(new uN(bj.eK.data[
			9])), qV.push(aN8), (aN8 = new qD).qG(L(390)), bj.eK.data[11].uR = [L(391), L(9), L(392)], aN8.qO(new uN(bj.eK.data[11])), qV.push(aN8), (aN8 = new qD).qG(L(393)), aN8.qR(new rz(bj.eK.data[2])), qV.push(aN8), (aN8 = new qD).qG(L(394)),
		aN8.qR(new rz(bj.eK.data[7])), qV.push(aN8), (aN8 = new qD).qG(L(395)), aN8.qR(new rz(bj.eK.data[8])), qV.push(aN8), (aN8 = new qD).qG(L(396)), aN8.qR(new rO(bj.eK.data[5])), qV.push(aN8), (aN8 = new qD).qG(L(397)), aN8.qR(new rz(bj.eK.data[
			13], L(398))), aN8.qR(new rz(bj.eK.data[14], L(399))), qV.push(aN8), aMq = new qT(aMp.uY, qV)
}

function aMg() {
	var aNj, aNk, aNl, qV;

	function aNm() {
		aNo(), 2 !== aD.data.spawningType || bA.qi.a2Q(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		2 === aD.data.spawningType && bA.qi.a2c(aNl.uz(), aD.data.spawningData, bS.aHQ - 1)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(403), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD,
			uR = (aN8.qG(L(247)), [L(272), L(282), L(250)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uR.splice(1, 1), 0 < value) && (value = 1);
		aN8.qO(new uN({
			uR: uR,
			value: value
		}, function(e8) {
			aNo(), aD.data.spawningType = e8, 0 === aD.data.gameMode && 1 === e8 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ek)), t.u(24)
		})), aN8.qR(new sF), aN8.qR(new rz({
			value: aD.data.selectableSpawn
		}, L(404), function(value) {
			aD.data.selectableSpawn = value
		})), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8 = new qD;
		aN8.qG("Seed"), aN8.qR(new rO({
			e8: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qV.push(aN8)
	}(qV), function(qV) {
		var aN8;
		2 === aD.data.spawningType && ((aN8 = new qD).qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.spawningData, 2)), aN8.qR(aNl), qV.push(aN8))
	}(qV), qV))
}

function aMO() {
	var aMp, aPn, aPo, uT;

	function aQr(id) {
		0 !== a0.id || bj.eK.data[140].value ? 0 === id ? t.u(8, 1, new sq(16)) : t.u(2) : t.y.aPh(t.sp, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aMp.show(), this.resize(), this.j3()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aPn.resize()
	}, this.j3 = function() {
		8 === aa.a19() && (2 <= bd.aQw ? aPo[2].qs === bB.nu && aPo[2].qu(0) : aPo[2].qs !== bB.nu && aPo[2].qu(bB.nu), !aD.gw && aM.qB(aD.eX) ? aPo[1].qs === bB.nu && aPo[1].qu(0) : aPo[1].qs !== bB.nu && aPo[1].qu(bB.nu), !aD.gw && aw.hc(aD
			.eX) ? aPo[0].qs === bB.nu && aPo[0].qu(0) : aPo[0].qs !== bB.nu && aPo[0].qu(bB.nu))
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
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
		var sf = ["Patreon", L(417), L(418), "YouTube Tutorial", "Discord", L(419), L(298), L(420), L(301), L(421), "Terms", "Privacy"],
			a3B = [bK.aNh, bK.aCN, bK.a12, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCO, bK.aQx, bK.aQy, bK.a0k, bK.aQz, bK.aR0, bK.aR1, bK.aQO];
		1 === a0.id ? (sf.splice(2, 1), sf.splice(0, 1), a3B.splice(2, 1), a3B.splice(0, 1)) : 2 === a0.id && (sf.splice(1, 1), sf.splice(0, 1), a3B.splice(1, 1), a3B.splice(0, 1)), t.u(4, 1, new v(L(408), bA.qa.a3A(sf, a3B), !1, [new w(
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
			a0.a1.a0w(), t.u(1)
		})]))
	}), new w(L(411), function() {
		a0.a1.a0x(), t.u(4, 1, new v(L(425), L(426) + " <a href='" + bK.aQO + "' target='_blank'>" + bK.aQO + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], uT = [new w("⬅️ " + L(37), function() {
		t.y.aC2()
	})], 8 === aa.a19() && (aPo.unshift(new w(L(293), function() {
		t.u(30)
	})), aPo.unshift(new w(L(414), function() {
		2 <= bd.aQw && (t.x(), be.a23(), bf.dl = !0)
	}, 0, 1)), aPo.unshift(new w(L(415), function() {
		!aD.gw && aM.qB(aD.eX) && (b8.hD.pN(), t.x(), aM.gx) && aM.a23()
	}, 0, 1)), aPo.unshift(new w(L(416), function() {
		!aD.gw && aw.hc(aD.eX) && (bV.a5L(2), b8.hD.hY(), t.x(), aM.gx) && aM.a23()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dv && aPo.push(new w(L(412), function() {
		a0.a1.a0y()
	})), aMp = new uS(L(413), uT), aPn = new r8(aPo, aMp.uY)
}

function aMk() {
	var aNj, aNk, aNl, qV;

	function aNm() {
		aNo(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		2 === aD.data.sResourcesType && bA.qi.a2c(aNl.uz(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(288), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), aN8.qO(new uN({
			uR: [L(248), L(249), L(250)],
			value: aD.data.sResourcesType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ek)), aD.data.sResourcesType = e8, t.u(28)
		})), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8;
		1 === aD.data.sResourcesType && ((aN8 = new qD).qG("Value"), aN8.qR(new rO({
			e8: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qV.push(aN8))
	}(qV), function(qV) {
		var aN8;
		2 === aD.data.sResourcesType && ((aN8 = new qD).qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.sResourcesData, 2)), aN8.qR(aNl), qV.push(aN8))
	}(qV), qV))
}

function aMi() {
	var aNj, aNk, aNl, qV;

	function aNm() {
		aNo(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aMo()[19] = null, t.a18()
	}

	function aNo() {
		2 === aD.data.tIncomeType && bA.qi.a2c(aNl.uz(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aNj.show(), this.resize()
	}, this.rr = function() {
		aNj.rr()
	}, this.resize = function() {
		aNj.resize(), aNk.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aNj.uZ[0].qr()
	}, aNj = new uS(L(286), [new w("⬅️ " + L(37), aNm)]), aNk = new qT(aNj.uY, (function(qV) {
		var aN8 = new qD;
		aN8.qG(L(247)), aN8.qO(new uN({
			uR: [L(248), L(249), L(250)],
			value: aD.data.tIncomeType
		}, function(e8) {
			aNo(), 2 !== e8 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ek), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e8, t.u(26)
		})), qV.push(aN8)
	}(qV = []), function(qV) {
		var aN8;
		1 === aD.data.tIncomeType && ((aN8 = new qD).qG("Value"), aN8.qR(new rO({
			e8: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qV.push(aN8))
	}(qV), function(qV) {
		var aN8;
		2 === aD.data.tIncomeType && ((aN8 = new qD).qG("Data"), (aNl = new uq(0, 1, 0, 1)).ux(bA.rZ.a48(aD.data.tIncomeData, 4)), aN8.qR(aNl), qV.push(aN8))
	}(qV), qV))
}

function aMa() {
	var aMp, aMq, qV;
	this.show = function() {
		aMp.show(), this.resize()
	}, this.rr = function() {
		aMp.rr()
	}, this.resize = function() {
		aMp.resize(), aMq.resize()
	}, this.a20 = function(f8) {
		2 === f8 && aMp.uZ[0].qr()
	}, aMp = new uS(L(407), [new w("⬅️ " + L(37), function() {
		t.a18()
	})]), aMq = new qT(aMp.uY, ((qV = []).push(function() {
		function aNE() {
			aR6.button.textContent = L(169), aR4.e.readOnly = !1, aR5.e.readOnly = !1, aNC.qu(1), aNC.button.style.color = bB.ni
		}
		var aN8 = new qD,
			aR3 = (aN8.qG(L(427)), new rO({
				value: bj.eK.data[105].value,
				e8: -1
			})),
			aR4 = (aR3.e.readOnly = !0, aN8.qR(aR3), aN8.qG(L(330), "0.8em"), new rO(bj.eK.data[148])),
			aR4 = new rO(bj.eK.data[148], 0, void 0, function(e) {
				aNB(bj.eK.data[149].value, e.target.value)
			}),
			aR5 = (aN8.qR(aR4), aN8.qG(L(334), "0.8em"), new rO(bj.eK.data[149], 1, void 0, function(e) {
				aNB(e.target.value, bj.eK.data[148].value)
			})),
			aR6 = (aN8.qR(aR5), new w(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aR4.e.readOnly = !0, aR5.e.readOnly = !0, aNC.qu(0), aNC.button.style.color = bB.og, bj.s2.s3(149, aR5.e.value), aNB(bj.eK.data[149].value, bj.eK.data[
					148].value)) : aNE(), !0
			})),
			aNC = (aN8.qR(new s5([aR6.button])), new w(L(14), function(e) {
				return aR4.e.readOnly && b0.y.aND(0) && (bA.qa.a3F(e), aNE(), b0.aNF.aNG({
					sr: 0,
					sn: bj.eK.data[148].value,
					value: parseInt(bj.eK.data[149].value, 10)
				})), !0
			}, 1)),
			qJ = aN8.qI(),
			aNB = (aN8.qI(L(428)).style.fontWeight = "bold", function(fF, qH) {
				fF = bA.g9.a3i(fF, 2, 1e6);
				var aNI = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
				qJ.textContent = L(171, [fF, bj.eK.data[105].value, aNI, qH, fF - aNI])
			});
		return aN8.qR(new s5([aNC.button])), aNB(bj.eK.data[149].value, bj.eK.data[148].value), aN8
	}()), qV))
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
		var xL = Math.floor(1 + .02 * h.min);
		aR9 = new Array(4), (aRA = new Array(4))[1] = aRA[3] = aR9[0] = aR9[2] = 0, aRA[0] = aR9[3] = -xL, aR9[1] = aRA[2] = xL
	}

	function aRC() {
		if (-1 !== a9D)
			if (0 !== aD.zy && aH.nQ()) {
				for (var aRD = !1, aB = 3; 0 <= aB; aB--) aR8[aB] && (aRD = !0, iO += aR9[aB], iP += aRA[aB], af.a1S(aR9[aB], aRA[aB]), aS.a8t());
				aRD ? bf.dl = !0 : ar.nG()
			} else ar.nG()
	}
	this.a1y = function(e8) {
		0 !== aD.zy && aH.nQ() && (aR7 || aRB(), aR8[e8] = !0, -1 === a9D) && (a9D = setInterval(aRC, 20), aRC())
	}, this.a21 = function(e8) {
		if (0 !== aD.zy && (aR7 || aRB(), aR8[e8] = !1, -1 !== a9D)) {
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
	this.y = new aRE, this.mQ = new aRF, this.p3 = new aRG, this.aEA = new aRH, this.aBz = new aRI, this.aNF = new aRJ, this.pg = new aRK, this.aP4 = new aRL, this.a6V = new aRM, this.aRN = new aRO, this.aRP = new aRQ, this.aRR = new aRS, this.aRT =
		new aRU, this.dd = function() {
			this.y.dd()
		}
}

function aRE() {
	var aRV, aRX;
	this.aFX = 5, this.aRW = null;

	function aRe(aB) {
		return aRX[aB].aR7 && aRV[aB].aRe()
	}

	function aRg(a14) {
		aRX[a14].eM = bf.eM, aRX[a14].aRZ = !1
	}
	this.a1E = 0, this.a17 = 0, this.dd = function() {
		this.aRW = new Array(this.aFX);
		this.aRW[0] = "territorial.io";
		var aKC = ay.aKY(0);
		ay.a4V(0);
		for (var aB = 1; aB < this.aFX; aB++) this.aRW[aB] = aK.zW() + ".territorial.io";
		for (ay.a4V(aKC), aRV = new Array(this.aFX), aRX = new Array(this.aFX), aB = this.aFX - 1; 0 <= aB; aB--) aRX[aB] = {
			aR7: !1,
			eM: 0,
			aRZ: !1
		};
		this.aFY(0, 0)
	}, this.aRa = function(aB) {
		return aRV[aB]
	}, this.j3 = function() {
		for (var aB = this.aFX - 1; 0 <= aB; aB--) this.aND(aB) && bf.eM > aRX[aB].eM + 15e3 && b0.p3.aRb(aB, aRX[aB].aRZ);
		!this.aND(0) && bf.eM > aRX[0].eM + 8e3 && (aRX[0].eM = bf.eM, this.aFY(0, 0))
	}, this.aP0 = function(id) {
		return this.aFY(0, id) && this.aRc(0)
	}, this.aFY = function(a14, aMM) {
		if (aRX[a14].aR7) {
			if (aRV[a14].aRe()) return aRV[a14].aRf(aMM), aRV[a14].aND();
			aRV[a14].rr()
		}
		return this.aRd(a14, aMM), !1
	}, this.aRd = function(a14, aMM) {
		aRX[a14].aR7 = !0, aRg(a14), aRV[a14] = new aRh, aRV[a14].dd(a14, aMM)
	}, this.aRf = function(a14, aMM) {
		aRe(a14) && aRV[a14].aRf(aMM)
	}, this.aRi = function(a14, aMM) {
		b0.aBz.aRj(a14)
	}, this.aRc = function(aB) {
		return this.aND(aB) && aRV[aB].aRc()
	}, this.aRk = function(aB) {
		aRV[aB].aRk()
	}, this.aND = function(aB) {
		return aRX[aB].aR7 && aRV[aB].aND()
	}, this.send = function(a14, aC) {
		aRg(a14), aRV[a14].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a1j = function(a14) {
		8 === aa.a19() && (aRX[a14].aRZ = !0, b0.mQ.aRl = !0)
	}, this.close = function(a14, aRm) {
		aRe(a14) && aRV[a14].close(aRm)
	}, this.aRn = function(a14, aRm) {
		o.a1H(aRm), aRe(a14) && aRV[a14].close(aRm)
	}, this.a1I = function(aRm) {
		for (var aB = this.aFX - 1; 0 <= aB; aB--) this.close(aB, aRm)
	}, this.aRo = function(a14, aRm) {
		for (var aB = this.aFX - 1; 0 <= aB; aB--) aB !== a14 && this.close(aB, aRm)
	}, this.a4h = function() {
		this.close(this.a1E, 3246)
	}, this.aRp = function(a14, e) {
		aRV[a14].rr(), o.a13(a14, e.code)
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
			aSI = (eq.selectedPlayer = bH.ph(aSI), eq.spawningSeed = bH.ph(14), bH.ph(4)),
			aSI = (aSI < 7 ? (eq.gameMode = 1, eq.numberTeams = aSI + 2) : 9 === aSI ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === aSI ? 0 : 10 === aSI ? 1 : 2), eq.isContest = bH.ph(1), bH
				.ph(6));
		return eq.mapType = bS.aD9(aSI) ? 0 : 1, bS.aDA(eq, aSI), eq.mapSeed = bH.ph(14), aSI
	}
	this.aRs = function(a14, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aRn(a14, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bH.ph(1) ? function(a14) {
			var aRw = bH.ph(6);
			0 === aRw ? function(a14) {
					if (0 === a14 && 8 !== aa.a19()) {
						t.y.aQP();
						for (var aS9 = bH.ph(12), aSA = bH.ph(6), g = new Array(aS9), aB = 0; aB < aS9; aB++) g[aB] = bH.ph(aSA);
						aT.a9J(g)
					}
				}(a14) : 2 === aRw ? b0.aRN.aRy(a14) : 3 === aRw || 4 === aRw ? ax.dd() : 9 === aRw ? b0.aRP.aRz(a14) : 10 === aRw ? b0.aRR.aS0() : 11 === aRw ? b0.aRP.aS1(a14) : 12 === aRw ? b0.aRR.aS2() : 13 === aRw ? b0.aRT.aS3() :
				14 === aRw ? b0.aRT.aS4() : 15 === aRw ? b0.aRP.aS5() : 16 === aRw ? b0.aRN.aS6(a14) : 17 === aRw ? b0.aRN.aS7(a14) : 19 === aRw && b0.aRN.aS8(a14)
		} : function(a14) {
			if (8 !== aa.a19() && !ax.aG2()) return;
			if (a14 !== b0.y.a1E) b0.y.aRn(a14, 3244);
			else if (0 === bH.ph(1)) bf.a07.aSJ(bH.aC);
			else {
				var aB, a14 = bH.ph(2);
				if (0 === a14) {
					var pI, p3 = bH.ph(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[aD.eX] && (pI = bH.ph(10), aN.pH(p3, aD.eX, pI), af.q9(p3, 1, pI))
				} else if (1 === a14) ! function() {
					var p3 = bH.ph(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[aD.eX] && b5.aJo(0, [p3], !0) && aN.pZ(p3, 1)
				}();
				else if (2 === a14) ! function() {
					var p3 = bH.ph(9),
						target = bH.ph(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[target] && 0 !== ag.mi[aD.eX] && b5.aJo(1, [p3], !0) && (af.q9(p3, 3, 96), af.q9(target, 4, 96), aN.a6c(p3, target))
				}();
				else if (l.a9 && !l.aA) {
					var en = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), en = Math.min(b8.p0.pj.length, 540), aB = 0; aB < en; aB++) bD.aSP(32, b8.p0.pj[aB]);
					b0.y.send(b0.y.a1E, bD.aC)
				}
			}
		})(a14), bf.aRv())
	}, this.aSB = function(aC) {
		if (bH.dd(aC), bH.e8 = 1, 3 === bH.ph(6)) {
			bH.e8 += 20;
			var eq = aD.data = new a4O,
				aC = aSH(9),
				aDB = eq.humanCount = bH.ph(9) + 1;
			eq.selectableSpawn = 1 === eq.gameMode || aDB < 100, eq.colorsData = new Uint32Array(aDB), eq.playerNamesData = new Array(aDB);
			for (var aB = 0; aB < aDB; aB++) bH.e8++, eq.colorsData[aB] = bH.ph(18), eq.playerNamesData[aB] = bG.vw.w0(bH.ph(5));
			aa.aFj(), bS.a7(aC, eq.mapSeed), aD.a4T()
		} else ! function() {
			bH.e8 += 20;
			var eq = aD.data = new a4O,
				aSG = aSH(1);
			eq.humanCount = 2;
			eq.selectableSpawn = 1, eq.elo = new Uint16Array(2), eq.colorsData = new Uint32Array(2), eq.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e8++, eq.colorsData[aB] = bH.ph(18), eq.elo[aB] = bH.ph(14), eq.playerNamesData[aB] = bG.vw.w0(bH.ph(5));
			aa.aFj(), bS.a7(aSG, eq.mapSeed), aD.a4T()
		}()
	}, this.aSE = function() {
		bH.e8 = 1;
		var aRw = bH.ph(6),
			aSF = bH.ph(10);
		return b0.y.a17 === aSF ? (b0.y.a1E = aSF, !1) : (b0.y.close(b0.y.a17, 3247), b0.y.a1E = aSF, ax.aD6 = bH.ph(10), ax.aFr = bH.ph(3 === aRw ? 9 : 1), b0.y.aFY(aSF, 5) && b0.p3.aFy(), !0)
	}
}

function aRS() {
	this.aS0 = function() {
		bj.y.vU(), bj.s2.s3(105, bF.ss.st(bF.ss.su(5))), bj.s2.s3(106, bF.ss.st(bF.ss.su(8))), bj.s2.s3(109, bH.ph(30)), bj.s2.s3(108, bj.eK.data[109].value), bj.s2.s3(111, bj.eK.data[109].value + 1), bj.s2.s3(107, 0), bj.s2.s3(110, "")
	}, this.aS2 = function() {
		var data;
		bH.size < bD.aSQ(29) ? b0.y.aRn(0, 3254) : ((data = {
			so: bH.ph(30),
			vh: bH.ph(16),
			vi: bH.ph(30),
			vj: bH.ph(30),
			vk: bH.ph(30),
			vl: bH.aSR(32),
			username: bG.vy.wG(5),
			vm: bG.vy.wG(3),
			vn: bG.vy.wG(3),
			vo: bH.aSR(32),
			vp: bH.aSR(32),
			vq: bH.ph(30),
			vr: bH.aSR(32),
			vs: bH.aSR(32),
			vt: bH.aSR(32),
			vu: bH.aSR(32),
			aNN: bH.aSR(32),
			aNO: bH.aSR(30),
			aNZ: bH.aSR(32),
			aNa: bG.vy.wG(3),
			aNS: bH.aSR(2),
			aNT: bH.aSR(10),
			aNQ: bG.vy.wG(8),
			aNU: bH.aSR(5),
			aNA: bH.ph(30),
			aNM: bH.ph(30),
			a0P: bH.aSR(32),
			aNb: bH.ph(1),
			aNc: bH.ph(1)
		}).aNb && (data.aNd = bH.aSR(32), data.aNe = bH.ph(30), data.aNf = bH.ph(30), data.aNg = bH.ph(1)), 8 === t.sp && (25 === t.a4y().aOz ? (data.aMr = !0, t.y.aMX = data, t.a4y().aPE(25, !1)) : (data.aMr = !1, bj.s2.s3(160, +(data
			.aNb && data.aNg)), data.sn = bj.eK.data[105].value, t.y.aMU = data, bj.s2.vg(data), t.a4y().aPE(16, !0))))
	}
}

function aRU() {
	this.aS3 = function() {
		var aB;
		if (bH.size < bD.aSQ(23)) b0.y.aRn(0, 3259);
		else {
			var t8 = bH.ph(6),
				en = bH.ph(10),
				data = [];
			if (9 === t8 || 10 === t8 || 11 === t8) {
				for (aB = 0; aB < en; aB++) data.push([bH.ph(30), bG.vy.wG(5), bH.aSR(32), 0, bH.ph(30)]);
				8 === t.sp && t.a4y().aPE(21, !0, {
					t8: t8,
					data: data
				})
			} else if (12 === t8) {
				for (aB = 0; aB < en; aB++) data.push([bH.ph(20), bH.ph(30), bH.ph(30), bH.aSR(32), bH.ph(30), bG.vy.wG(5), bG.vy.wG(5)]);
				8 === t.sp && t.a4y().aPE(21, !0, {
					t8: t8,
					data: data
				})
			} else {
				var hk = bH.ph(16);
				if (bH.aSS(39 + 16 * hk + en * (0 === t8 ? 111 : 1 === t8 ? 101 : 2 === t8 || 3 === t8 ? 127 : 212))) {
					if (0 === t8)
						for (aB = 0; aB < en; aB++) data.push([bH.ph(30), bG.vw.w0(bH.ph(5)), bH.ph(16), bH.ph(30), bH.ph(30)]);
					else if (1 === t8)
						for (aB = 0; aB < en; aB++) data.push([bH.ph(16), bG.vw.w0(bH.ph(3)), bH.ph(16), bG.vw.w0(bH.ph(5)), bH.ph(31), bH.ph(30)]);
					else if (2 === t8 || 3 === t8)
						for (aB = 0; aB < en; aB++) data.push([bH.ph(30), bG.vw.w0(bH.ph(5)), bH.aSR(32), bH.ph(30), bH.ph(30)]);
					else
						for (aB = 0; aB < en; aB++) data.push([bH.ph(20), bH.ph(30), bH.ph(30), bH.ph(30), bH.ph(30), bH.aSR(32), bH.ph(30), bG.vw.w0(bH.ph(5)), bG.vw.w0(bH.ph(5))]);
					8 === t.sp && t.a4y().aPE(21, !0, {
						t8: t8,
						data: data
					})
				} else b0.y.aRn(0, 3260)
			}
		}
	}, this.aS4 = function() {
		if (bH.size < bD.aSQ(29)) b0.y.aRn(0, 3265);
		else {
			var aST = bH.ph(4),
				aSU = bH.ph(7),
				aSV = bH.ph(11);
			if (bH.aSS(29 + 16 * aSU + 16 * aSV + 11 * aST)) {
				for (var data = [], aB = 0; aB < aST; aB++) {
					for (var a0e = bG.vw.w0(bH.ph(3)), aSW = bH.ph(8), aOD = [], f6 = 0; f6 < aSW; f6++) aOD.push(bH.ph(16));
					data.push({
						name: "[" + a0e + "]",
						aOD: aOD
					})
				}
				8 === t.sp && t.a4y().aPE(23, !0, data)
			} else b0.y.aRn(0, 3266)
		}
	}
}

function aRO() {
	function aSY() {
		var id = bH.ph(3);
		return 0 === id ? {
			id: id,
			sn: bH.ph(30),
			r: bn.aCT.aEG(bG.vy.wG(7))
		} : 1 === id ? {
			id: id,
			sn: bH.ph(30),
			aDH: bH.ph(3),
			value: bH.ph(30),
			target: bH.ph(30)
		} : 2 === id ? {
			id: id,
			sn: bH.ph(30),
			aDH: bH.ph(3)
		} : 3 === id ? {
			id: id,
			sn: bH.ph(30),
			aDH: bH.ph(3),
			value: bH.ph(4),
			target: bH.ph(30)
		} : 4 === id ? {
			id: id,
			sn: bH.ph(30),
			aDH: bH.ph(3),
			target: bH.ph(30)
		} : 5 === id ? {
			id: id,
			aDH: bH.ph(6)
		} : 6 === id ? {
			id: id,
			value: bH.ph(17)
		} : null
	}
	this.aRy = function(a14) {
		if (a14 !== b0.y.a17) b0.y.close(a14, 3239);
		else if (6 !== aa.a19()) b0.y.close(a14, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rf = bn.y.rg[aB],
					playerCount = (rf.tg = bH.ph(10), rf.eT = bH.ph(6), rf.mapSeed = bH.ph(14), rf.aD2 = bH.ph(4), rf.aEk = bH.ph(6), rf.aEl = bH.ph(4), rf.aD8 = bH.ph(1), rf.aDq = bH.ph(12), rf.spawningSeed = bH.ph(14), bH.ph(16));
				bn.tv.tx[aB] = bH.ph(16);
				for (var f6 = 0; f6 < playerCount; f6++) bn.tv.aCf(aB, bH.ph(30), bG.vy.wG(5), bH.ph(4), bH.ph(30), bH.ph(7), bH.ph(16), bH.ph(18), bH.ph(11), bH.ph(12))
			}
			t.u(29), bn.y.aDh(!0)
		}
	}, this.aS6 = function(a14) {
		if (a14 !== b0.y.a17) b0.y.close(a14, 3239);
		else if (bn.a16) {
			bn.y.aDf[0] = bH.ph(20), bn.y.aDf[1] = bH.ph(20);
			for (var aSX = bH.ph(16), f6 = 0; f6 < aSX; f6++) {
				var id = bH.ph(3);
				0 === id ? bn.tv.aCf(bH.ph(2), bH.ph(30), bG.vy.wG(5), 0, 1234566, 127, 0, bH.ph(18), 0, bH.ph(12)) : 1 === id ? bn.tv.aCw(bH.ph(16), bH.ph(2)) : 2 === id ? bn.tv.aCs(bH.ph(16), bH.ph(2), bH.ph(2)) : 3 === id ? bn.tv.aCv(bH.ph(
					16), bH.ph(2)) : 4 === id ? bn.tv.aCl(bH.ph(16), bH.ph(2), bH.ph(4), bH.ph(30), bH.ph(7), bH.ph(16), bH.ph(11)) : 5 === id && bn.tv.aCm(bH.ph(16), bH.ph(2), bH.ph(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rf = bn.y.rg[aB];
				if (rf.tg = bH.ph(10), 0 === rf.tg) {
					if (rf.a1E = bH.ph(10), rf.aD6 = bH.ph(10), bn.aCU.dm(aB)) return;
					rf.eT = bH.ph(6), rf.mapSeed = bH.ph(14), rf.aD2 = bH.ph(4), rf.aEk = bH.ph(6), rf.aEl = bH.ph(4), rf.aD8 = bH.ph(1), rf.aDq = bH.ph(12), rf.spawningSeed = bH.ph(14), rf.aEm.push(rf.aEm[0]), rf.aEm.shift()
				}
			}
			bn.y.aDj()
		} else b0.y.close(a14, 3251)
	}, this.aS7 = function(a14) {
		if (a14 !== b0.y.a17) b0.y.close(a14, 3272);
		else if (bn.a16) {
			for (var rd = bH.ph(4), rf = bn.y.rg[rd], rh = rf.rh, uA = (rf.ri = bH.ph(20), bH.ph(6)), aB = 0; aB < uA; aB++) {
				var aF3 = aSY();
				bn.rq.aF2(aF3), rh.push(aF3)
			}
			bn.y.aDr(rd)
		} else b0.y.close(a14, 3273)
	}, this.aS8 = function(a14) {
		a14 !== b0.y.a17 ? b0.y.close(a14, 3276) : bn.a16 ? bn.message.aEC(aSY()) : b0.y.close(a14, 3277)
	}
}

function aRQ() {
	this.aRz = function(a14) {
		var aSL, r6;
		bH.aSS(70) ? (aSL = bH.ph(3), r6 = bi.aSZ.j3(bH.ph(30), bH.ph(30)), b0.aBz.aSa(a14, r6, aSL), 0 < aSL || (0 === a14 && 0 === bj.eK.data[105].value.length ? b0.aBz.aP3(0) : b0.aNF.aSb(a14), 4 === b0.y.aRa(a14).aSc() ? 6 === aa.a19() && b0
			.aEA.aFZ(a14) : 5 !== b0.y.aRa(a14).aSc() || 8 !== aa.a19() && 10 !== aa.a19() || b0.p3.aFy())) : b0.y.aRn(a14, 3269)
	}, this.aS1 = function(a14) {
		var id = bH.ph(6);
		1 === id ? (bj.s2.s3(160, bH.ph(30)), b0.y.aRk(a14), aT.a9F || b0.aBz.aP3(1), b7.aBx(), 8 === t.sp && t.a4y().aPD()) : 21 === id ? 8 === t.sp && t.a4y().aPE(17) : 22 === id && (bj.s2.s3(106, bj.eK.data[110].value), bj.s2.s3(110, ""),
			8 === t.sp) && t.a4y().aPE(15)
	}, this.aS5 = function() {
		var en = bH.ph(16),
			aSd = bH.ph(16);
		if (bH.aSS(55 + 10 * en + 16 * aSd)) {
			for (var g = [], aB = 0; aB < en; aB++) g.push(bG.vw.w0(bH.ph(10)));
			b7.aC1(g)
		} else b0.y.aRn(0, 3270)
	}
}

function aRG() {
	this.aRb = function(a14, aRZ) {
		bD.a7(8), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aRZ ? 1 : 0), b0.y.send(a14, bD.aC)
	}, this.aFy = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a17), bD.a8(10, ax.aD6), bD.a8(9, ax.aFr), bD.a8(10, l.dx), bD.a8(14, l.dq), b0.y.send(b0.y.a1E, bD.aC)
	}, this.p4 = function(eZ) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eZ), b0.y.send(b0.y.a1E, bD.aC)
	}, this.p5 = function(iN, jJ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, iN), bD.a8(10, jJ), b0.y.send(b0.y.a1E, bD.aC)
	}, this.p9 = function(iN, p7) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, iN), bD.a8(9, p7), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pB = function(iN, pA) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, iN), bD.a8(27, pA), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pD = function(iN, n5) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, iN), bD.a8(16, n5), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pG = function(jJ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jJ), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pK = function(e8) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e8), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pM = function(pL) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pL), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pO = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pP = function(iN, eZ, jJ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, iN), bD.a8(10, jJ), bD.a8(22, eZ), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pX = function(aSe, aSf) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aSf), bD.a8(10, aSe), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pa = function(a6V) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a6V), b0.y.send(b0.y.a1E, bD.aC)
	}, this.pe = function(aSg, target) {
		var aB, en = aSg.length;
		for (bD.a7(14 + 9 * en), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < en; aB++) bD.a8(9, aSg[aB]);
		b0.y.send(b0.y.a1E, bD.aC)
	}
}

function aRJ() {
	this.aSh = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.aBz.aSi(), b0.y.send(0, bD.aC)
	}, this.aSb = function(a14) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.ss.wC(bj.eK.data[105].value, 5), bG.ss.wC(bj.eK.data[106].value, 8), bD.a8(30, bj.eK.data[109].value), b0.y.send(a14, bD.aC)
	}, this.aPG = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.ss.wB(bj.eK.data[110].value), b0.y.send(0, bD.aC)
	}, this.aPC = function(a3l) {
		var en = a3l.qH.length;
		bD.a7(21 + 16 * en), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a3l.sr), bD.a8(8, en), bF.vw.wB(a3l.qH), b0.y.send(0, bD.aC)
	}, this.aNV = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.sr), bG.ss.wC(data.sn, 5), b0.y.send(0, bD.aC)
	}, this.aNG = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.sr), bG.ss.wC(data.sn, 5), bD.aSP(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aRK() {
	this.pf = function() {
		for (var en = aD.kA, zn = bR.result.zn, l3 = zn.length, a0X = (bD.a7(17 + 16 * en + 33 * l3), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, l3), bD.a8(1, +(2 === aD.zv)), bD.a8(1, aD.a0F % 2), ag.a0X), aB = 0; aB < en; aB++) bD.a8(16, a0X[aB]);
		for (var gb = ag.gb, aB = 0; aB < l3; aB++) {
			var gL = zn[aB];
			bD.a8(9, gL), bD.a8(24, gb[gL])
		}
		b0.y.send(b0.y.a1E, bD.aC)
	}
}

function aRL() {
	this.aP5 = function(t8, t9, tA) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, t8), bD.a8(1, +(t9 < 0)), bD.a8(1, +(tA < 0)), bD.a8(30, Math.abs(t9)), bD.a8(30, Math.abs(tA)), b0.y.send(0, bD.aC)
	}, this.aP6 = function(t8, aP7, aP8) {
		bD.a7(18 + 16 * aP7.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, t8), b0.aBz.aSk(aP7), bD.a8(30, aP8), b0.y.send(0, bD.aC)
	}, this.aPB = function(t8, aP7, aP8) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, t8), bG.ss.wC(aP7, 5), bD.a8(30, aP8), b0.y.send(0, bD.aC)
	}, this.aP9 = function(aOC, a0d) {
		for (var en = a0d.length, hk = 0, aB = 0; aB < en; aB++) hk += a0d[aB].length;
		for (bD.a7(21 + 3 * en + 16 * hk), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aOC), bD.a8(4, en), bD.a8(7, hk), aB = 0; aB < en; aB++) bD.a8(3, a0d[aB].length), bF.vw.wB(a0d[aB]);
		b0.y.send(0, bD.aC)
	}, this.aPA = function(aOC, t9, tA) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aOC), bD.a8(1, +(t9 < 0)), bD.a8(1, +(tA < 0)), bD.a8(20, Math.abs(t9)), bD.a8(20, Math.abs(tA)), b0.y.send(0, bD.aC)
	}
}

function aRH() {
	this.aFZ = function(a14) {
		var username = bj.eK.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + 18 + bi.aSl.ph()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dx), bD.a8(2, bj.eK.data[158].value), b0.aBz.aSk(username), bA.color.a2r(bj.y.vb())),
			username = (bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), b7.aC3());
		bD.a8(9, username[0]), bD.a8(9, username[1]), bi.aSl.zQ(), b0.y.a17 = a14, b0.y.send(a14, bD.aC)
	}, this.aEB = function(aSo, a3l) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aSo), 2 === aSo ? bE.a8(2, a3l) : 3 === aSo ? bF.vy.zQ(a3l, 7, bE) : 5 === aSo && (bE.a8(3, a3l.id), bE.a8(3, a3l.value), bE.a8(30, a3l.sn)), b0.y.send(b0.y.a17, bE.aSp())
	}
}

function aRI() {
	this.aRj = function(a14) {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dv), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), b0.y.send(a14, bD.aC)
	}, this.aSa = function(a14, r6, aSL) {
		bD.a7(70), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aSL), bD.a8(30, r6[0]), bD.a8(30, r6[1]), b0.y.send(a14, bD.aC)
	}, this.aP3 = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.aC0 = function(id, qH) {
		var en = Math.min(qH.length, 63);
		bD.a7(19 + 16 * en), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, en), bF.vw.wB(qH), b0.y.send(0, bD.aC)
	}, this.aSr = function(aSF, qS) {
		bD.a7(7 + 26 * qS.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qS.length; aB++) bD.a8(16, qS[aB][0]), bD.a8(10, qS[aB][1]);
		b0.y.send(aSF, bD.aC)
	}, this.aRq = function(aSs, aSt) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aSs), bD.a8(12, aSt), b0.y.send(b0.y.a1E, bD.aC)
	}, this.aSk = function(username) {
		bD.a8(5, username.length), bF.vw.wB(username)
	}
}

function aRh() {
	var a14, aMM, aSu, aSv = ["wss://", "/s50/", "/s51/", "/s52/"],
		aSw = 0;

	function aRi() {
		b0.y.aRi(a14, aMM)
	}

	function aT0(e) {
		b0.a6V.aRs(a14, new Uint8Array(e.data))
	}

	function aT1() {}

	function aRp(e) {
		b0.y.aRp(a14, e)
	}
	this.dd = function(e8, aSx) {
		a14 = e8, aMM = aSx, e8 = l.dr ? "ws://localhost:" + (7130 + a14) + "/" : aSv[0] + b0.y.aRW[a14] + aSv[1 + l.ds], (aSu = new WebSocket(__fx.customLobby.isActive() && 1 === a14 ? __fx.customLobby.getSocketURL() : e8)).binaryType =
			"arraybuffer", aSu.onopen = aRi, aSu.onmessage = aT0, aSu.onclose = aRp, aSu.onerror = aT1
	}, this.aSz = function() {
		return aSu.readyState === aSu.CONNECTING
	}, this.aND = function() {
		return aSu.readyState === aSu.OPEN
	}, this.aRc = function() {
		return aSw
	}, this.aRk = function() {
		aSw = 1
	}, this.aRe = function() {
		return this.aSz() || this.aND()
	}, this.aRf = function(aSx) {
		aMM = aSx
	}, this.aSc = function() {
		return aMM
	}, this.send = function(aC) {
		this.aND() && aSu.send(aC)
	}, this.close = function(aRm) {
		this.aRe() && (aSu.close(aRm), this.rr())
	}, this.rr = function() {
		aSu.onopen = null, aSu.onmessage = null, aSu.onclose = null, aSu.onerror = null
	}
}

function dK() {
	var aT2 = !1,
		a6q = 0,
		i = 0,
		sw = 0,
		gap = 0,
		canvas = null,
		y8 = null,
		a2R = null;

	function aT4() {
		for (var aTA, aT8 = 0, en = 0, f8 = Math.floor(i / 2), e7 = Math.floor(sw / 2), aT9 = 1.5 * Math.PI, aB = aD.xA; 0 <= aB; aB--) en += a2R[aB], 0 === a2R[aB] && aT8++;
		if (aT2 = !1, y8.clearRect(0, 0, i, i), y8.fillStyle = bB.nf, y8.fillRect(0, 0, i, i), y8.fillStyle = bB.ni, y8.fillRect(0, 0, i, gap), y8.fillRect(0, 0, gap, i), y8.fillRect(i - gap, 0, gap, i), y8.fillRect(0, i - gap, i, gap), 0 < en)
			if (aT8 === aD.xA) {
				for (aB = aD.xA; 0 <= aB; aB--)
					if (0 < a2R[aB]) {
						! function(aB, f8, e7) {
							y8.fillStyle = bg.aTH[bg.kX[aB]], y8.beginPath(), y8.arc(f8, f8, e7, 0, 2 * Math.PI), y8.fill()
						}(aB, f8, e7);
						break
					}!
				function(f8) {
					var fontSize = f8 / 3;
					y8.font = bA.qa.sP(1, fontSize), y8.fillStyle = bB.ni, y8.fillText("100%", f8, f8 + .1 * fontSize)
				}(f8)
			} else {
				for (aB = 0; aB <= aD.xA; aB++) 0 < a2R[aB] && (! function(aB, f8, e7, aT9, aTA) {
					y8.fillStyle = bg.aTH[bg.kX[aB]], y8.beginPath(), y8.arc(f8, f8, e7, aT9, aTA), y8.lineTo(f8, f8), y8.fill()
				}(aB, f8, e7, aT9, aTA = aT9 + 2 * Math.PI * a2R[aB] / en), function(f8, e7, aT9, aTA) {
					var fF = (aTA - aT9) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e7 * Math.min(fF, .37);
					fontSize < 8 || (aT9 = (aT9 + aTA) / 2, aTA = (__fx.settings.detailedTeamPercentage ? (100 * fF).toFixed(2) : Math.floor(100 * fF + .5)) + "%", e7 *= .525 - Math.max(.6 * (fF - .7), 0), y8.font = bA.qa.sP(1, fontSize), y8
						.fillStyle = bB.ni, y8.fillText(aTA, f8 + Math.cos(aT9) * e7, f8 + Math.cos(aT9 + 1.5 * Math.PI) * e7))
				}(f8, e7, aT9, aTA), 0 !== aB && aTF(f8, e7, aT9), aT9 = aTA);
				aTF(f8, e7, 1.5 * Math.PI)
			}!
		function(f8, e7) {
			y8.beginPath(), y8.arc(f8, f8, e7, 0, 2 * Math.PI), y8.stroke()
		}(f8, e7)
	}

	function aTF(f8, e7, aTI) {
		y8.beginPath(), y8.moveTo(f8, f8), y8.lineTo(f8 + Math.cos(aTI) * e7, f8 + Math.cos(aTI + 1.5 * Math.PI) * e7), y8.stroke()
	}
	this.dd = function() {
		if (aD.hh) {
			a6q = 0, a2R = new Uint32Array(aD.xA + 1);
			for (var aB = aD.xA; 0 <= aB; aB--) a2R[aB] = 0;
			for (aB = al.kB - 1; 0 <= aB; aB--) a2R[bg.el[al.kC[aB]]] += 1;
			this.resize()
		} else a2R = y8 = canvas = null
	}, this.a7n = function() {
		return i
	}, this.resize = function() {
		aD.hh && (i = Math.floor(a0.a1.hw() && !aD.nB ? .18 * h.min : .13 * h.hx), i = (i *= 1 + (.5 + .2 * a0.a1.hw()) * aD.nB) + i % 2, sw = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, y8 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), y8.lineWidth = gap, y8.strokeStyle = bB.ni, bA.qa.textAlign(y8, 1), bA.qa.textBaseline(y8, 1), aT4())
	}, this.kg = function() {
		var dt, kh = this.ki();
		return bg.kX[kh] || (kh = function() {
			for (var kh = -1, aB = aD.xA; 1 <= aB; aB--)(-1 === kh || a2R[aB] > a2R[kh]) && (kh = aB);
			return kh
		}(), dt = ag.gb[lk[0]], -1 !== kh && a2R[kh] > dt) ? a2R[kh] : dt
	}, this.a0r = function() {
		return a6q = 31, this.j3(), this.ki()
	}, this.ki = function() {
		for (var kh = 0, aB = aD.xA; 0 < aB; aB--) a2R[aB] > a2R[kh] && (kh = aB);
		return kh
	}, this.li = function(aT6) {
		for (var gG = 0, kC = al.kC, el = bg.el, en = al.kB, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kC[aB];
			el[gL] === aT6 && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.kj = function(aT6) {
		for (var gG = 0, kC = al.kC, el = bg.el, en = al.kB, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kC[aB];
			el[gL] !== aT6 && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.a3K = function() {
		for (var gG = 0, aB = aD.xA; 0 <= aB; aB--) gG += 0 < a2R[aB];
		return gG
	}, this.j3 = function() {
		if (aD.hh && 32 <= ++a6q) {
			a6q = 0;
			for (var aB = aD.xA; 0 <= aB; aB--) a2R[aB] = 0;
			for (aB = al.kB - 1; 0 <= aB; aB--) a2R[bg.el[al.kC[aB]]] += ag.gb[al.kC[aB]];
			aT2 = !0
		}
	}, this.mV = function() {
		aD.hh && aT2 && aT4()
	}, this.uh = function() {
		aD.hh && (aD.nB ? ui.drawImage(canvas, bc.gap, bc.gap) : ui.drawImage(canvas, bc.gap, a7o + 2 * bc.gap))
	}
}

function da() {
	function aTO(eu, en, ew, za, a94, fE) {
		if (!(ew < 1 || a94 < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (za(eR)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTS(ew, en, eu, za, aTM, fE) {
		if (!(eu < 1 || aTM < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (za(eR)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTW(iE, iF, aTJ) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTJ) < bM.iG(iE, aTJ)) ? iF : iE
	}
	this.hC = function(aTJ) {
		return this.a02(aTJ, function(eR) {
			return ac.ei(eR)
		})
	}, this.hI = function(aTJ) {
		return this.a02(aTJ, function(eR) {
			return ac.aGh(eR, aD.eX)
		})
	}, this.a02 = function(aTJ, za) {
		return function(aTJ, aTK, za) {
			for (var h2 = bM.ev(aTJ), h4 = bM.ex(aTJ), aTM = bS.ey - 2, a94 = bS.ez - 2, aTN = -1, eq = 0; eq < aTK; eq++) {
				var a93 = Math.max(h2 - eq, 1),
					aKg = Math.max(h4 - eq, 1),
					xl = Math.min(h2 + eq, aTM),
					xk = Math.min(h4 + eq, a94),
					iE = aTO(h2, xl - h2, h4 - eq, za, a94, 1),
					iF = aTO(h2 - 1, h2 - a93 - 1, h4 - eq, za, a94, -1),
					xl = aTO(h2, xl - h2, h4 + eq, za, a94, 1),
					a93 = aTO(h2 - 1, h2 - a93 - 1, h4 + eq, za, a94, -1),
					aTR = aTS(h4, xk - h4 - 1, h2 - eq, za, aTM, 1),
					aTT = aTS(h4 - 1, h4 - aKg - 2, h2 - eq, za, aTM, -1),
					xk = aTS(h4, xk - h4 - 1, h2 + eq, za, aTM, 1),
					aKg = aTS(h4 - 1, h4 - aKg - 2, h2 + eq, za, aTM, -1);
				if (aTN = aTW(aTN, iE, aTJ), aTN = aTW(aTN, iF, aTJ), aTN = aTW(aTN, xl, aTJ), aTN = aTW(aTN, a93, aTJ), aTN = aTW(aTN, aTR, aTJ), aTN = aTW(aTN, aTT, aTJ), aTN = aTW(aTN, xk, aTJ), 0 <= (aTN = aTW(aTN, aKg, aTJ)) && eq *
					eq >= bM.iG(aTN, aTJ)) return aTN
			}
			return -1
		}(aTJ, bM.hu(), za)
	}
}

function d3() {
	function aTY(key) {
		var aQe;
		return "undefined" == typeof URLSearchParams || (aQe = window.location.search, "string" != typeof(aQe = new URLSearchParams(aQe).get(key))) || aQe.length < 1 ? null : aQe
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aTY("account");
				if (!value && !(value = aTY("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.sp, new sq(1e3, {
					sr: 0,
					sn: value,
					so: 0
				})), 1
			}()) {
			var value = aTY("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a11 = new URL(window.location.href);
		a11.search = "";
		try {
			return history.replaceState(null, "", a11.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aNi = function(key, value) {
		if (0 === a0.id) try {
			var a11 = new URL(window.location.href),
				gL = a11.searchParams;
			gL.set(key, value), a11.search = gL.toString(), history.replaceState(null, "", a11.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aTa, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a4V(0)
	}, this.value = function(gL) {
		return g[gL]
	}, this.aKY = function() {
		return bL.du(aTa - 1, 2)
	}, this.a4V = function(aKC) {
		aTa = 2 * aKC % 32768 + 1
	}, this.random = function() {
		return aTa = 167 * aTa % 32768
	}, this.jS = function(md) {
		return bL.du(md * this.random(), 32768)
	}, this.k2 = function(gL) {
		return 0 !== gL && this.random() < this.value(gL)
	}, this.ik = function(f6, f7) {
		return f6 + this.jS(f7 - f6)
	}
}

function cz() {
	this.pu = new aTb, this.a4g = new aTc, this.aHo = new aTd, this.dd = function() {
		aD.gw || this.pu.dd()
	}, this.j3 = function() {
		aD.gw || (this.pu.j3(), 3 !== t.sp) || bf.k7() % 15 != 5 && 2 !== aD.zy || t.a4y().aQf()
	}, this.aQi = function() {
		0 === aD.zy && aa.aFj(), aD.a4P.a4o(), aD.data.canvas = null, b0.y.close(b0.y.a1E, 3257), b0.y.a1E = 0, aD.data.isReplay = 1, aD.a4T()
	}, this.aQh = function(qH) {
		var aB = qH.indexOf("=");
		return 0 <= aB ? qH.substring(aB + 1) : qH
	}, this.aQg = function(qH) {
		return "https://territorial.io/?replay=" + qH
	}
}

function aTb() {
	this.aTf = null, this.aTg = null, this.aTh = null, this.aTi = null, this.aTj = null, this.aTk = null, this.a4f = "";
	var aTl = 0;
	this.dd = function() {
		this.aTf = [], this.aTg = [], this.aTh = [], this.aTi = [], this.aTj = [0], this.aTk = [0], aTl = 0, this.a4f = ""
	}, this.pv = function(id, fW, fY, fa) {
		aD.gw || 2 === aD.zy || (0 === this.aTj[aTl] && (this.aTk[aTl] ? (this.aTj.push(1), this.aTk.push(0), aTl++) : this.aTj[aTl] = 1), this.aTf.push(id), this.aTg.push(fW), this.aTh.push(void 0 === fY ? 0 : fY), this.aTi.push(void 0 === fa ?
			0 : fa), this.aTk[aTl]++)
	}, this.j3 = function() {
		0 === this.aTj[aTl] ? this.aTk[aTl]++ : (this.aTj.push(0), this.aTk.push(0), aTl++)
	}
}

function aTd() {
	var aTm = 0;

	function aTq(qH, id) {
		aTm || (id ? 1 === id ? aN.a5x = L(430) + ": " + qH : t.u(4, 3, new v(L(431), qH, 1)) : t.u(4, 3, new v("⚠️ " + L(429), qH, 1)))
	}
	this.wG = function(qH, aTn) {
		var qS;
		return aTm = aTn, bG.ss.w8(bG.ss.w6(bG.ss.w4(qH))), aN.a5x = "", !(! function() {
			if (bH.size < 10) aTq("File Too Small");
			else {
				var aTs = bH.ph(12),
					aSt = (aTs !== l.rVersion && aTq("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aTs) + ("   Compatible at territorial.io/" + aTs), 1), bH.ph(12)),
					aTt = bH.ph(31);
				if (aTt !== bH.size) aTq("Size Error: " + aTt + " " + bH.size);
				else if (function(j, aTs) {
						for (var gL = bH.aC, en = bH.size, aSt = aTs, aB = 3; aB < en; aB++) aSt = aSt + gL[aB] & 4095;
						return aSt === j || (aTq("Hash Error: " + aSt + " " + j + " " + en), !1)
					}(aSt, aTs)) return 1
			}
			return
		}() || (aTn = bH, (qS = aD.data = new a4O).mapType = aTn.ph(2), qS.mapProceduralIndex = aTn.ph(8), qS.mapRealisticIndex = aTn.ph(8), qS.mapSeed = aTn.ph(14), qS.mapName = aTn.aTv(5), 2 === qS.mapType && aTn.aTw(), qS
			.passableWater = aTn.ph(1), qS.passableMountains = aTn.ph(1), qS.playerCount = aTn.ph(10), qS.humanCount = aTn.ph(10), qS.selectedPlayer = aTn.ph(9), qS.gameMode = aTn.ph(1), qS.playerMode = aTn.ph(2), qS.battleRoyaleMode =
			aTn.ph(2), qS.numberTeams = aTn.ph(4), qS.isZombieMode = aTn.ph(1), qS.isContest = aTn.ph(1), qS.isReplay = aTn.ph(1), qS.elo = aTn.aTx(2, 14, 2), qS.colorsType = aTn.ph(1), qS.colorsPersonalized = aTn.ph(1), qS.colorsData =
			aTn.aTx(10, 18, 512), qS.selectableColor = aTn.ph(1), qS.teamPlayerCount = aTn.aTx(4, 10, 9), qS.neutralBots = aTn.ph(1), qS.botDifficultyType = aTn.ph(2), qS.botDifficultyValue = aTn.ph(4), qS.botDifficultyTeam = aTn.aTx(4,
				4, 9), qS.botDifficultyData = aTn.aTx(10, 4, 512), qS.spawningType = aTn.ph(2), qS.spawningSeed = aTn.ph(14), qS.spawningData = aTn.aTx(11, 12, 1024), qS.selectableSpawn = aTn.ph(1), qS.playerNamesType = aTn.ph(2), qS
			.playerNamesData = aTn.aTy(10, 5, 512), qS.selectableName = aTn.ph(1), qS.aIncomeType = aTn.ph(2), qS.aIncomeValue = aTn.ph(8), qS.aIncomeData = aTn.aTx(10, 8, 512), qS.tIncomeType = aTn.ph(2), qS.tIncomeValue = aTn.ph(8), qS
			.tIncomeData = aTn.aTx(10, 8, 512), qS.iIncomeType = aTn.ph(2), qS.iIncomeValue = aTn.ph(8), qS.iIncomeData = aTn.aTx(10, 8, 512), qS.sResourcesType = aTn.ph(2), qS.sResourcesValue = aTn.ph(11), qS.sResourcesData = aTn.aTx(10,
				11, 512), ! function() {
				var i6 = bH,
					wH = i6.ph(5),
					aTz = i6.ph(30),
					aU0 = i6.ph(30);
				if (aTz + aU0 > 8 * i6.size) return void aTq("Corrupted File");
				return function(en) {
						var aU3 = new Uint8Array(en),
							aU4 = new Uint16Array(en),
							aU5 = new Uint32Array(en),
							aU6 = new Uint32Array(en);
						b9.pu.aTf = aU3, b9.pu.aTg = aU4, b9.pu.aTh = aU5, b9.pu.aTi = aU6;
						for (var aB = 0; aB < en; aB++) {
							var id = bH.ph(4);
							aU3[aB] = id, aU4[aB] = bH.ph(9), 0 === id ? aU5[aB] = bH.ph(22) : 1 === id ? (aU5[aB] = bH.ph(10), aU6[aB] = bH.ph(10)) : 2 === id ? (aU5[aB] = bH.ph(10), aU6[aB] = bH.ph(9)) : 3 === id ? (aU5[aB] = bH.ph(10),
								aU6[aB] = bH.ph(27)) : 4 === id ? (aU5[aB] = bH.ph(10), aU6[aB] = bH.ph(16)) : 5 === id || 6 === id ? aU5[aB] = bH.ph(10) : 7 === id ? aU5[aB] = bH.ph(1) : 10 === id && (aU5[aB] = bH.ph(20), aU6[aB] =
								bH.ph(22))
						}
					}(aTz),
					function(en, wH) {
						var aTj = new Uint8Array(en),
							aTk = new Array(en);
						aTk.fill(0), b9.pu.aTj = aTj, b9.pu.aTk = aTk;
						for (var aB = 0; aB < en; aB++) aTj[aB] = bH.ph(1), aTk[aB] = bH.ph(wH)
					}(aU0, wH), 1
			}()) || (bH.e8 < 8 * bH.size - 13 || bH.e8 > 8 * bH.size ? (aTq("Out Of Bounds Error: " + bH.e8 + " " + 8 * bH.size), 1) : (b9.pu.a4f = qH, 2 === aD.data.mapType && (aTq("Load base64 image...", 2), 1))))
	}, this.aHp = function(aHP, aTr) {
		var a2m = document.createElement("canvas"),
			hp = a2m.getContext("2d");
		if (a2m.width = aHP.width, a2m.height = aHP.height, hp.drawImage(aHP, 0, 0), aD.data.canvas = a2m, aTm || aTr) return aD.zy ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aQi()
	}
}

function aTc() {
	this.zQ = function() {
		var wH = function() {
				for (var aTk = b9.pu.aTk, en = aTk.length, max = 0, aB = 0; aB < en; aB++) max = Math.max(max, aTk[aB]);
				return wO(Math.max(max, 1))
			}(),
			i = (qS = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e8 += 43, i.a8(2, qS.mapType), i.a8(8, qS.mapProceduralIndex), i.a8(8, qS.mapRealisticIndex), i.a8(14, qS.mapSeed), i.aUD(qS.mapName, 5), 2 === qS.mapType && i.aUE(qS.canvas),
				i.a8(1, qS.passableWater), i.a8(1, qS.passableMountains), i.a8(10, qS.playerCount), i.a8(10, qS.humanCount), i.a8(9, qS.selectedPlayer), i.a8(1, qS.gameMode), i.a8(2, qS.playerMode), i.a8(2, qS.battleRoyaleMode), i.a8(4, qS
					.numberTeams), i.a8(1, qS.isZombieMode), i.a8(1, qS.isContest), i.a8(1, qS.isReplay), i.dk(qS.elo, 2, 14), i.a8(1, qS.colorsType), i.a8(1, qS.colorsPersonalized), i.dk(qS.colorsData, 10, 18), i.a8(1, qS.selectableColor), i.dk(
					qS.teamPlayerCount, 4, 10), i.a8(1, qS.neutralBots), i.a8(2, qS.botDifficultyType), i.a8(4, qS.botDifficultyValue), i.dk(qS.botDifficultyTeam, 4, 4), i.dk(qS.botDifficultyData, 10, 4), i.a8(2, qS.spawningType), i.a8(14, qS
					.spawningSeed), i.dk(qS.spawningData, 11, 12), i.a8(1, qS.selectableSpawn), i.a8(2, qS.playerNamesType), i.aUF(qS.playerNamesData, 10, 5), i.a8(1, qS.selectableName), i.a8(2, qS.aIncomeType), i.a8(8, qS.aIncomeValue), i.dk(qS
					.aIncomeData, 10, 8), i.a8(2, qS.tIncomeType), i.a8(8, qS.tIncomeValue), i.dk(qS.tIncomeData, 10, 8), i.a8(2, qS.iIncomeType), i.a8(8, qS.iIncomeValue), i.dk(qS.iIncomeData, 10, 8), i.a8(2, qS.sResourcesType), i.a8(11, qS
					.sResourcesValue), i.dk(qS.sResourcesData, 10, 11), ! function(wH) {
					var i = bE,
						aTf = b9.pu.aTf,
						fW = b9.pu.aTg,
						fY = b9.pu.aTh,
						fa = b9.pu.aTi,
						en = aTf.length;
					i.a8(5, wH), i.a8(30, en), i.a8(30, b9.pu.aTk.length);
					for (var aB = 0; aB < en; aB++) {
						var f8 = aTf[aB];
						i.a8(4, f8), i.a8(9, fW[aB]), 0 === f8 ? i.a8(22, fY[aB]) : 1 === f8 ? (i.a8(10, fY[aB]), i.a8(10, fa[aB])) : 2 === f8 ? (i.a8(10, fY[aB]), i.a8(9, fa[aB])) : 3 === f8 ? (i.a8(10, fY[aB]), i.a8(27, fa[aB])) : 4 === f8 ? (i
							.a8(10, fY[aB]), i.a8(16, fa[aB])) : 5 === f8 || 6 === f8 ? i.a8(10, fY[aB]) : 7 === f8 ? i.a8(1, fY[aB]) : 10 === f8 && (i.a8(20, fY[aB]), i.a8(22, fa[aB]))
					}
				}(wH), ! function(wH) {
					for (var i = bE, aTj = b9.pu.aTj, aTk = b9.pu.aTk, en = aTj.length, aB = 0; aB < en; aB++) i.a8(1, aTj[aB]), i.a8(wH, aTk[aB])
				}(wH), bE.e8),
			qS = bL.du(i - 1, 6) + 1,
			wH = (bD.aSQ(6 * qS) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e8 = 24, i.a8(31, i.g.length), i.e8 = 12, i.a8(12, function() {
					for (var g = bE.g, en = g.length, aSt = l.rVersion, aB = 3; aB < en; aB++) aSt = aSt + g[aB] & 4095;
					return aSt
				}())
			}(), bH.dd(bE.g), bF.ss.st(bF.ss.su(qS)));
		return bH.uB(), bE.dd(), wH
	}
}

function cp() {
	var f8, bu = !1,
		aUH = !1,
		aUI = -1e4,
		aUJ = -1,
		aUK = 0;

	function resize(aUO) {
		f8 = 0, ab.tH() && (aUM(aUO) || bu) && (bu = !1, bc.resize(), bW.aBa.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.zy ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a8t()) : (aa.aFl(), aa.aFm()), bf.dl = !0)
	}

	function aUL(fF) {
		return fF && 128 < fF ? Math.floor(fF) : 128
	}

	function aUM(aUO) {
		var i, j, aUQ, sw, a8H;
		if (!(0 < h.sX)) return sw = aUL(document.documentElement.clientWidth), a8H = aUL(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = sw, j = a8H, aUQ = 0 !== a0.id || i < j ?
			700 : 1200, aUQ = Math.min(aUQ / ((i + j) / 2), 1), aUQ = 0 === bj.eK.data[1].value ? 2 * aUQ / 3 : Math.min(aUQ + (bj.eK.data[1].value - 1) * (1 - aUQ) / 2, 1), h.k = (window.devicePixelRatio || 1) * aUQ, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aUO && !aUH ? (aUH = !0, document.body.removeChild(a1R)) : aUH && (aUH = !1, document.body.appendChild(a1R)), i = Math.floor(.5 + sw * h.k), j = Math.floor(.5 + a8H * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = aBC(i, j), h.max = a6C(i, j), h.hx = bL.du(i + j, 2), h.ue = i / j, a1R.width = i, a1R.height = j, a1R.style.width = sw + "px", a1R.style.height = a8H + "px", aUJ = bf.eM + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hx = 0, this.ue = 1, this.k = 1, this.sX = 0, this.de = function() {
		this.i = aUL(document.documentElement.clientWidth) + 2, this.j = aUL(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		f8 = 1, a1R = document.getElementById("canvasA"), (ui = a1R.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aUM(0)
	}, this.j3 = function() {
		50 <= ++f8 && resize(0), -1 === aUJ || bf.eM < aUJ || (aUJ = -1, 2e3 * ++aUK >= bf.eM + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(jQ) {
		bu = !0, resize(jQ)
	}, this.a26 = function() {
		aUI + 1e3 > bf.eM || (aUI = bf.eM, resize(0))
	}
}

function dH() {
	this.aSZ = new aUS, this.a0n = new aUT, this.aSl = new aUU
}

function aUU() {
	this.ph = function() {
		return 69
	}, this.zQ = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aUT() {
	this.a0o = function() {
		for (var gL, en = al.kB, zm = al.kC, a0X = ag.a0X, a86 = this.aH8(), aB = 0; aB < en; aB++) gL = zm[aB], bA.g9.jY(gL) || (a0X[gL] = a86);
		var pz = ag.pz,
			jC = ag.jC,
			jD = ag.jD,
			a0V = ag.a0V,
			en = aD.kA;
		for (aB = 0; aB < en; aB++)(0 === a0V[aB] || jD[aB] < 1 || 2 * pz[aB] > 3 * (jC[aB] + jD[aB])) && (a0X[aB] = 0);
		var a0l = 0;
		for (aB = 0; aB < en; aB++) a0l += 0 < a0X[aB];
		return a0l
	}, this.aH8 = function() {
		return Math.min(65535, bf.k7())
	}
}

function aUS() {
	function aUY(g, fF, hf) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fF >> (aB + hf) % 30 & 1)) % 256
	}
	this.j3 = function(aUV, aUW) {
		var g = new Uint8Array(256);
		return function(g, aUV, aUW) {
				var aB, aUa = 3 + (4 + aUV) % 32768,
					aUb = 12 + aUW % 32768,
					aUc = 17 + ((aUV & aUW) + (aUV | aUW) + aUV) % 32768;
				for (aB = 0; aB < 256; aB++) aUa = 1 + aUa * aUb % aUc, g[aB] = aUa % 256
			}(g, aUV, aUW), aUY(g, aUV, 2), aUY(g, aUW, 7),
			function(g) {
				var aB, fF, e8 = 0;
				for (aB = 0; aB < 3e4; aB++) fF = g[e8], g[e8] = (fF + aB + g[(e8 + aB) % 256]) % 256, e8 = (fF + aB + e8 + (fF & e8)) % 256
			}(g),
			function(g) {
				var aB, a8H = 1,
					te = 1;
				for (aB = 0; aB < 256; aB += 2) a8H = (1 + a8H) * (g[aB] + 1) % 1073741824, te = (1 + te) * (g[aB + 1] + 1) % 1073741824;
				return [a8H, te]
			}(g)
	}
}

function cm() {
	var aUd, aUe, i1, aUf;
	this.dd = function() {
		var aB, eu, ew, aSm, aUg, i, j, y8, hm, wY, fF, gL, f3, f6, aUj;
		if (function() {
				if (i1 = !0, aUf = "rgb(" + bS.wW[0] + "," + bS.wW[1] + "," + bS.wW[2] + ")", bS.aKL(bS.eT)) return 1;
				return i1 = !1, 0
			}()) aUe = null;
		else {
			for (aUd = bL.du(96, 4), aUg = 1 === bS.eT ? (aSm = 0, 160) : (aSm = 128, 32), aUf = "rgb(" + aSm + "," + aSm + "," + aSm + ")", aUe = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aUe[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.ey : aUd, j = aB % 2 == 0 ? aUd : bS.ez + 2 * aUd, aUe[aB].width = i, aUe[aB].height = j, wY = (hm = (y8 = aUe[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (ew = aUd - 1; 0 <= ew; ew--)
						for (fF = aUg + Math.floor((ew + 1) * (aSm - aUg) / (aUd + 1)), eu = i - 1; 0 <= eu; eu--) wY[gL = 4 * ((0 === aB ? aUd - ew - 1 : ew) * i + eu)] = fF, wY[gL + 1] = fF, wY[gL + 2] = fF, wY[gL + 3] = 255;
				else {
					for (eu = aUd - 1; 0 <= eu; eu--)
						for (fF = aUg + Math.floor((eu + 1) * (aSm - aUg) / (aUd + 1)), ew = j - 1 - aUd; aUd <= ew; ew--) wY[gL = 4 * (ew * i + (3 === aB ? aUd - eu - 1 : eu))] = fF, wY[gL + 1] = fF, wY[gL + 2] = fF, wY[gL + 3] = 255;
					for (f6 = 1; 0 <= f6; f6--)
						for (eu = aUd - 1; 0 <= eu; eu--)
							for (ew = aUd - 1; 0 <= ew; ew--) f3 = (Math.pow(eu * eu + ew * ew, .5) + 1) / (aUd + 1), fF = aUg + Math.floor((1 < f3 ? 1 : f3) * (aSm - aUg)), wY[gL = 4 * ((0 === f6 ? aUd - ew - 1 : ew + f6 * (j - aUd)) * i + (
								1 === aB ? eu : aUd - eu - 1))] = fF, wY[gL + 1] = fF, wY[gL + 2] = fF, wY[gL + 3] = 255
				}
				y8.putImageData(hm, 0, 0)
			}
			aUj = aUg, bS.wR.fillStyle = "rgb(" + aUj + "," + aUj + "," + aUj + ")", bS.wR.fillRect(0, 0, bS.ey, 1), bS.wR.fillRect(0, bS.ez - 1, bS.ey, 1), bS.wR.fillRect(0, 0, 1, bS.ez), bS.wR.fillRect(bS.ey - 1, 0, 1, bS.ez)
		}
	}, this.y2 = function() {
		var f6 = i1 ? 0 : -aUd;
		aM5(f6, f6, bS.ey - 2 * f6, bS.ez - 2 * f6, ba.aUk, ba.aUl, ba.aUm, ba.aUn) || (ui.fillStyle = aUf, ui.fillRect(0, 0, h.i, h.j))
	}, this.uh = function() {
		i1 || (aM4(0, -aUd, bS.ey, aUd, ba.aUk, ba.aUl, ba.aUm, ba.aUn) && ui.drawImage(aUe[0], ba.aUo, ba.aUp - aUd), aM4(bS.ey, -aUd, aUd, bS.ez + 2 * aUd, ba.aUk, ba.aUl, ba.aUm, ba.aUn) && ui.drawImage(aUe[1], ba.aUo + bS.ey, ba.aUp - aUd),
			aM4(0, bS.ez, bS.ey, aUd, ba.aUk, ba.aUl, ba.aUm, ba.aUn) && ui.drawImage(aUe[2], ba.aUo, ba.aUp + bS.ez), aM4(-aUd, -aUd, aUd, bS.ez + 2 * aUd, ba.aUk, ba.aUl, ba.aUm, ba.aUn) && ui.drawImage(aUe[3], ba.aUo - aUd, ba.aUp - aUd))
	}
}

function d6() {
	this.aH6 = new aUq, this.y5 = new aUr, this.y = new aUs, this.iX = new aUt, this.aUj = new aUu, this.m4 = new aUv, this.jy = new aUw, this.kv = new aUx, this.aUy = new aUz, this.aV0 = new aV1, this.mF = new aV2, this.hN = new aV3, this.lU =
		new aV4, this.kx = new aV5, this.hQ = new aV6, this.m8 = new aV7, this.q7 = new aV8, this.dd = function() {
			this.lU.dd(), this.y5.dd(), this.y.dd(), this.iX.dd(), this.aUj.dd(), this.aV0.dd(), this.m8.dd()
		}, this.uh = function() {
			this.aV0.uh(), this.y5.uh()
		}
}

function aUw() {
	this.j3 = function(player) {
		return !!bN.mF.mG(player) && !(bN.y.ps[player] >= Math.max(3 * ao.performance.lM, aE.kO[aE.hW[player]]) || !bA.g9.mH(player, aE.kM[aE.hW[player]], 32, 0)) && (aW.aAz() ? function(player) {
			var aVB = bN.kx.aB2(),
				en = aVB.length;
			if (0 === en) return !1;
			aVB = aVB[ay.jS(en)], en = bN.y.m2[aVB];
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
			}(player, aVB) && !!bN.hQ.q6(player, en, 1) && (bA.g9.mJ(player), bN.y.mK(player), !0)
		}(player) : !!(ao.iz.j3(player) || ao.io.j3(player) || ao.iq.j3(player)) && (function(player) {
			bO.fP[1] = 4, bA.g9.mJ(player), bN.y.mK(player)
		}(player), !0))
	}
}

function aV7() {
	var aVE = 0,
		aVF = null;
	this.dd = function() {
		null === aVF && (aVF = new Uint16Array(2 * bN.y.kO)), aVE = 0
	}, this.jG = function(aVG, m8) {
		var aVH = aVF;
		aVH[aVE++] = aVG, aVH[aVE++] = m8
	}, this.m9 = function(player, m7) {
		for (var aVH = aVF, en = aVE, aB = 0; aB < en; aB += 2)
			if (aVH[aB] === m7 && bN.kx.aVI(aVH[aB + 1]) && player === bN.y.m3[bO.fP[2]] >> 3) return !0;
		return !1
	}, this.aVJ = function(aVK) {
		var m4 = bN.y.m0[aVK];
		if (!(m4 < 64)) {
			var m7 = bN.y.m2[aVK],
				aVH = aVF,
				en = aVE;
			for (let aB = en - 2; 0 <= aB; aB -= 2)
				if (aVH[aB] === m7) {
					{
						aVP = void 0;
						var aVP = aVH[aB + 1];
						bN.kx.aVI(aVP) && bN.m8.aVX(bO.fP[2])
					}
					aVH[aB] = aVH[en - 2], aVH[aB + 1] = aVH[en - 1], en -= 2
				} aVE = en
		}
	}, this.aVM = function(aVN, aVO) {
		for (var aVP = bN.y.m2[aVN], m7 = -1, aVH = aVF, en = aVE, aB = 1; aB < en; aB += 2)
			if (aVH[aB] === aVP) {
				m7 = aVH[aB - 1];
				break
			} if (-1 === m7) return !1;
		if (!bN.kx.aVI(m7)) return !1;
		var aVK = bO.fP[2],
			lT = bN.y.m1[aVK];
		if (aVO === lT[lT.length - 1]) bN.y.m1[aVN] = bN.lU.aVQ(bN.y.m1[aVN], bN.lU.lc(lT));
		else {
			var aVR = bN.kx.aVS(lT, aVO);
			if (-1 === aVR) return !1;
			var aVT = bN.y.mD[aVK];
			aVR === aVT ? (aVK = bM.iV(bN.y.mE[aVK]), bN.y.m1[aVN] = bN.lU.aVV(bN.y.m1[aVN], lT, aVR, aVO, bM.iD(lT[aVR], aVO) > bM.iD(lT[aVR], aVK))) : bN.y.m1[aVN] = bN.lU.aVV(bN.y.m1[aVN], lT, aVR, aVO, aVT < aVR)
		}
		return !0
	}, this.aVX = function(aVY) {
		var lT, l3 = bN.y,
			m4 = l3.m0[aVY];
		return m4 % 64 != 5 && (lT = l3.m1[aVY], l3.aVZ[aVY] = 65535 - l3.aVZ[aVY], l3.mD[aVY] = lT.length - l3.mD[aVY] - 2, l3.m1[aVY] = bN.lU.lc(lT), l3.m0[aVY] = m4 - m4 % 64 + 5, !0)
	}
}

function aV2() {
	this.mG = function(player) {
		return !!aD.data.passableWater && bN.y.lz !== bN.y.kO && bN.y.ps[player] !== bN.y.aVa && 0 !== ag.gU[player].length
	}, this.q2 = function(aTJ) {
		var m4 = bO.fP[1];
		return !(4 <= m4 || !bN.kx.aVb(bM.ed(aTJ))) && ac.ei(bM.ed(bM.iZ(aTJ, m4)))
	}
}

function aUq() {
	this.aH7 = function(player) {
		for (var a7W = bN.y.a7W, t9 = player << 3, aB = t9 + bN.y.ps[player] - 1; t9 <= aB; aB--) this.aVc(a7W[aB])
	}, this.aVc = function(aVd) {
		var y = bN.y,
			aVe = y.lz - 1,
			aVf = y.m3[aVd],
			aVg = y.aVh[aVd],
			aVi = y.mE[aVd];
		y.lz = aVe, y.m3[aVd] = y.m3[aVe], y.mE[aVd] = y.mE[aVe], y.aVZ[aVd] = y.aVZ[aVe], y.a6U[aVd] = y.a6U[aVe], y.aVh[aVd] = y.aVh[aVe], y.m2[aVd] = y.m2[aVe], y.m0[aVd] = y.m0[aVe], y.aVj[aVd] = y.aVj[aVe], y.m1[aVd] = y.m1[aVe], y.mD[aVd] =
			y.mD[aVe], y.a7W[y.m3[aVd]] = aVd,
			function(aTI) {
				var player = aTI >> 3,
					y = bN.y,
					en = y.ps[player] - 1,
					aVm = (player << 3) + en;
				y.ps[player] = en, aVm !== aTI && (y.a7W[aTI] = y.a7W[aVm], y.m3[y.a7W[aTI]] = aTI)
			}(aVf), bN.iX.iX[bM.iW(y.mE[aVd])][y.aVh[aVd]] = aVd, aVe = bM.iW(aVi), aVf = aVg, aVe = bN.iX.iX[aVe], y = aVe.pop(), aVf !== aVe.length && (aVe[aVf] = y, bN.y.aVh[y] = aVf)
	}
}

function aUr() {
	var aVo, aVp = 8,
		aVq = null;

	function aVv(wY, eZ, e8) {
		eZ *= 4;
		wY[eZ] = 255, wY[1 + eZ] = 255, wY[2 + eZ] = e8, wY[3 + eZ] = 255
	}

	function aVx(hp, aUf) {
		var eu, ew, i7, eZ, aVz, aW0, hj = aVp,
			hm = bA.qa.getImageData(hp, hj, hj),
			wY = hm.data,
			l3 = (hj >> 1) - .5,
			aW2 = bA.qi.a2K(aUf, .5);
		for (bA.qi.a2M(aUf, aW2, 300) || bA.qi.a2O(aUf, 100), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) aW0 = (hj - 1.5) * (hj - 1.5) / 4, wY[eZ = 4 * (ew * hj + eu)] = (aVz = (i7 = (i7 = eu - l3) * i7 + (i7 = ew - l3) * i7) <= (hj - 4.5) * (hj - 4.5) / 4 ? aW2 : aUf)[0], wY[1 + eZ] = aVz[1], wY[2 + eZ] = aVz[2],
				wY[3 + eZ] = aW0 < i7 ? 0 : 255;
		hp.putImageData(hm, 0, 0)
	}
	this.dd = function() {
		var e8, hj, a2m, hp, hm, wY;
		(aVo = aVo || new Array(aD.ek)).fill(null), e8 = 255, hj = aVp + 4, a2m = bA.qa.wN(hj, hj), hp = bA.qa.getContext(a2m, !0), hm = bA.qa.getImageData(hp, hj, hj), aVv(wY = hm.data, hj + 1, e8), aVv(wY, hj + 2, e8), aVv(wY, 2 * hj + 1, e8),
			aVv(wY, 2 * hj - 3, e8), aVv(wY, 2 * hj - 2, e8), aVv(wY, 3 * hj - 2, e8), aVv(wY, hj * (hj - 3) + 1, e8), aVv(wY, hj * (hj - 2) + 1, e8), aVv(wY, hj * (hj - 2) + 2, e8), aVv(wY, hj * (hj - 2) - 2, e8), aVv(wY, hj * (hj - 1) - 3, e8),
			aVv(wY, hj * (hj - 1) - 2, e8), hp.putImageData(hm, 0, 0), aVq = a2m,
			function() {
				if (aD.hh)
					for (var a2m = new Array(bg.kX.length), en = aD.ek, aVt = aVo, aAN = bg.aAN, aB = 0; aB < en; aB++) {
						var a5E = aAN[aB];
						a2m[a5E] || (a2m[a5E] = function(a5E) {
							var a2m = bA.qa.wN(aVp, aVp),
								hp = bA.qa.getContext(a2m, !0),
								g = bO.fM;
							return g.set(bg.aVy[a5E]), aVx(hp, g), a2m
						}(a5E)), aVt[aB] = a2m[a5E]
					}
			}()
	}, this.uh = function() {
		var aB, player, aW3, aMD, hW, i6, aW5, aW7, aW8, mE = bN.y.mE,
			m3 = bN.y.m3,
			a6U = bN.y.a6U,
			aVj = bN.y.aVj,
			aW9 = aVo,
			aWA = aD.eX,
			en = bN.y.lz,
			aWB = h.i,
			aWC = h.j,
			aWD = bS.ey << 4,
			ec = hy,
			eR = ec / aVp,
			n8 = iO / ec,
			n9 = iP / ec,
			i7 = (aWB + iO) / ec - n8,
			iA = (aWC + iP) / ec - n9,
			hp = ui;
		for (hp.imageSmoothingEnabled = ec < 9, bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1), aB = 0; aB < en; aB++) player = m3[aB] >> 3, hW = a6U[aB], aW3 = .9 + .1 * Math.log10(hW), aMD = (i6 = mE[aB]) % aWD / 16 - aW3, i6 = aWC * (Math
			.floor(i6 / aWD) / 16 - aW3 - n9) / iA, aW5 = -2 * (aW8 = ec * aW3) * (1 + (aW7 = +(player === aWA)) / 8), aW7 = aW7 * aW8 / 4, (aW8 = aWB * (aMD - n8) / i7) < aW5 || i6 < aW5 || aWB + aW7 < aW8 || aWC + aW7 < i6 || (aMD = 2 *
			aW3 * eR, aW5 = aW3 * ec, null === (aW7 = aW9[player]) && (aW9[player] = aW7 = function(player) {
				var a2m = bA.qa.wN(aVp, aVp);
				return aVx(bA.qa.getContext(a2m, !0), ac.a77(player)), a2m
			}(player)), player === aWA && (hp.setTransform(aMD, 0, 0, aMD, aW8 - 2 * aMD, i6 - 2 * aMD), hp.drawImage(aVq, 0, 0)), hp.setTransform(aMD, 0, 0, aMD, aW8, i6), hp.drawImage(aW7, 0, 0), (aW3 = Math.floor(function(hW) {
				if (hW < 1e3) return .42;
				if (hW < 1e4) return .34;
				if (hW < 1e6) return .26;
				if (hW < 1e8) return .19;
				return .15
			}(hW) * aW5)) < 6) || (hp.setTransform(1, 0, 0, 1, 0, 0), hp.fillStyle = aVj[aB] ? bB.oG : bB.ni, hp.font = bA.qa.sP(1, aW3), hp.fillText(bA.rZ.zF(hW), aW8 + aW5, i6 + aW5 + .1 * aW3));
		hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aV1() {
	var aWG;
	this.dd = function() {
		if (aD.hh) {
			var hd = 1 - aD.xB;
			aWG = new Array(bg.kX.length);
			for (var aB = aD.xA - 1; 0 <= aB; aB--) {
				var a5E = bg.kX[aB + hd];
				aWG[a5E] = bP.y.aWI(20, bg.aWJ[a5E])
			}
			9 === aD.kS && (aWG[1] = bP.y.aWI(20, bg.aWJ[1]))
		} else aWG = [bP.y.aWI(20, bg.aWJ[7])]
	}, this.uh = function() {
		var nS = hy;
		if (!(5 <= nS)) {
			var aWB = h.i,
				aWC = h.j,
				n8 = iO / nS,
				n9 = iP / nS,
				nL = (aWB + iO) / nS,
				nM = (aWC + iP) / nS,
				gM = -20 * nS,
				aWL = .5 * gM,
				aWD = bS.ey << 4,
				en = bN.y.lz,
				mE = bN.y.mE,
				m3 = bN.y.m3,
				aAN = bg.aAN,
				a2m = aWG,
				hp = ui;
			3 < nS && (hp.globalAlpha = .5 * (5 - nS));
			for (var aB = 0; aB < en; aB++) {
				var i6 = mE[aB],
					eu = aWB * (i6 % aWD / 16 - n8) / (nL - n8) + aWL,
					i6 = aWC * (Math.floor(i6 / aWD) / 16 - n9) / (nM - n9) + aWL;
				aWB < eu || aWC < i6 || eu < gM || i6 < gM || (hp.setTransform(nS, 0, 0, nS, eu, i6), hp.drawImage(a2m[aAN[m3[aB] >> 3]], 0, 0))
			}
			hp.globalAlpha = 1, hp.setTransform(nS, 0, 0, nS, 0, 0)
		}
	}
}

function aV5() {
	this.aWO = function(player, id) {
		for (var aWP = ag.gU[player], en = aWP.length, aB = 0; aB < en; aB++)
			if (bM.hz(aWP[aB], id)) return !0;
		return !1
	}, this.aWQ = function(player, eZ) {
		for (var iF, aWR, eR, aWP = ag.gU[player], en = aWP.length, i = bS.ey, aWT = bM.ev(eZ), aWU = bM.ex(eZ), et = -1, min = bS.ey * bS.ey + bS.ez * bS.ez, id = ac.eV(bM.ed(eZ)), aB = 0; aB < en; aB++)(aWR = (aWR = aWT - (iF = (eR = aWP[
			aB]) >> 2) % i) * aWR + (aWR = aWU - ~~((.5 + iF) / i)) * aWR) < min && bM.hz(eR, id) && (min = aWR, et = iF);
		return et
	}, this.ky = function(iE, iF) {
		for (var id = ac.eV(bM.ed(iF)), i0 = bM.hs, eR = bM.ed(iE), aWV = -1, aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			ac.i1(ec) && ac.eV(ec) === id && (-1 === aWV || bM.iG(bM.eb(ec), iF) < bM.iG(aWV, iF)) && (aWV = bM.eb(ec))
		}
		return aWV
	}, this.lX = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec) && ac.y0(player, ec)) return !0
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
	}, this.aVb = function(eR) {
		if (ac.i1(eR))
			for (var i0 = bM.hs, aB = 0; aB < 4; aB++)
				if (ac.ei(eR + i0[aB])) return !0;
		return !1
	}, this.n7 = function(player, id) {
		for (var t9 = player << 3, tA = t9 + bN.y.ps[player], m2 = bN.y.m2, a7W = bN.y.a7W, aB = t9; aB < tA; aB++) {
			var a7X = a7W[aB];
			if (m2[a7X] === id) return a7X
		}
		return -1
	}, this.nC = function(player) {
		return 0 === bN.y.ps[player] ? -1 : bN.y.a7W[player << 3]
	}, this.a5W = function(lN, lO) {
		var en = bN.y.lz;
		if (en < 1) return -1;
		for (var mE = bN.y.mE, aWW = 80, aOT = -1, aB = 0; aB < en; aB++) {
			var f3 = bM.i3(lN, lO, mE[aB]);
			f3 < aWW && (aWW = f3, aOT = aB)
		}
		return function(aB, lN, lO) {
			if (aB < 0) return;
			var aWd = bN.y.mE[aB],
				aWe = bM.i9(aWd),
				aWd = bM.iC(aWd),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a6U[aB]));
			return aB = Math.max(aB, bM.iQ(bA.qa.tE(.02, 1.7))), bL.aMC(bM.i8(lN), bM.iB(lO), aWe, aWd, aB)
		}(aOT, lN, lO) ? aOT : -1
	}, this.aVI = function(n5) {
		for (var en = bN.y.lz, m2 = bN.y.m2, aB = 0; aB < en; aB++)
			if (m2[aB] === n5) return bO.fP[2] = aB, !0;
		return !1
	}, this.aH3 = function(player) {
		for (var t9 = player << 3, tA = t9 + bN.y.ps[player], a7W = bN.y.a7W, a6U = bN.y.a6U, hW = 0, aB = t9; aB < tA; aB++) hW += a6U[a7W[aB]];
		return hW
	}, this.aWY = function(player, aVY) {
		aVY = bN.y.m1[aVY];
		return this.lX(player, aVY[aVY.length - 1])
	}, this.aWZ = function(iE, iF, f3, aWa) {
		var iI = bM.ev(iE),
			iE = bM.ex(iE),
			iK = bM.ev(iF),
			iF = bM.ex(iF),
			iK = (f3 = Math.max(f3, 1), iK - iI),
			iF = iF - iE,
			i7 = bL.du(Math.abs(iK) * aWa, f3),
			aWa = bL.du(Math.abs(iF) * aWa, f3);
		return bM.fB(iI + Math.sign(iK) * i7, iE + Math.sign(iF) * aWa)
	}, this.aVS = function(lT, eZ) {
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
		for (var aWg = lk[0], m3 = bN.y.m3, lz = bN.y.lz, g = [], aB = 0; aB < lz; aB++) bA.g9.km(aWg, m3[aB] >> 3) && g.push(aB);
		return g
	}, this.lV = function(player, lT) {
		for (var t9 = player << 3, tA = t9 + bN.y.ps[player], a7W = bN.y.a7W, m1 = bN.y.m1, hF = lT[0], kl = lT[lT.length - 1], aB = t9; aB < tA; aB++) {
			var gL = m1[a7W[aB]];
			if (gL[0] === hF && gL[gL.length - 1] === kl) return !0
		}
		return !1
	}
}

function aV6() {
	function aWj(player, aVY) {
		aVY = bM.iV(bN.y.mE[aVY]), aVY = ac.eV(bM.ed(aVY));
		return !!bN.kx.aWO(player, aVY)
	}

	function aWh(player) {
		return bN.mF.mG(player) && !bN.lU.la()
	}
	this.hR = function(player, eZ) {
		return !!aWh(player) && -1 !== (eZ = function(player, eZ) {
			for (var en = bN.y.lz, mE = bN.y.mE, m3 = bN.y.m3, aWW = bM.hu(), aOT = -1, aB = 0; aB < en; aB++) {
				var f3 = bM.iD(eZ, bM.iV(mE[aB]));
				f3 < aWW && bA.g9.km(player, m3[aB] >> 3) && (aWW = f3, aOT = aB)
			}
			return aOT
		}(player, eZ)) && !!aWj(player, eZ) && (bO.fP[3] = bN.y.m2[eZ], !0)
	}, this.pC = function(player, n5) {
		return !!aWh(player) && !!bN.kx.aVI(n5) && !!aWj(player, bO.fP[2])
	}, this.q6 = function(player, n5, aWk) {
		return !! function(player, n5, aWk) {
			if (aWh(player) && bN.kx.aVI(n5)) {
				n5 = bO.fP[2];
				if (bA.g9.km(player, bN.y.m3[n5] >> 3)) {
					if (function(player, aVY) {
							return bN.kx.aWY(player, aVY) && (bO.g[0] = bN.lU.lc(bN.y.m1[aVY]), bO.fP[1] = 6, !0)
						}(player, n5)) return 1;
					var aVD = bM.iV(bN.y.mE[n5]),
						aWo = bN.kx.aWQ(player, aVD);
					if (-1 !== aWo) {
						aWo = bM.iD(aWo, aVD);
						if (!(aWk && 120 < aWo)) {
							aWk = function(aVY, aWp, aVD) {
								var lT = bN.y.m1[aVY],
									aVY = bN.y.mD[aVY],
									aWr = bM.iD(aVD, lT[aVY + 1]);
								if (aWp <= aWr) return bN.kx.aWZ(aVD, lT[aVY + 1], aWr, aWp);
								for (var f3 = aWp - aWr, en = lT.length - 1, aB = aVY + 1; aB < en; aB++) {
									var aWs = bM.iD(lT[aB], lT[aB + 1]);
									if (f3 <= aWs) return bN.kx.aWZ(lT[aB], lT[aB + 1], aWs, f3);
									f3 -= aWs
								}
								return lT[en]
							}(n5, aWo, aVD);
							if (bN.kv.q3(player, aWk, 1)) return bO.fP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n5, aWk) && (player = bO.fP[2], bN.y.m0[player] = 64 + bN.y.m0[player] % 64, bN.m8.jG(n5, bN.y.mI), !0)
	}
}

function aUv() {
	function aWx(player, hW, aWv, aVD) {
		var jJ;
		if (ac.ee(aWv)) jJ = aD.ek;
		else {
			if ((jJ = ac.ef(aWv)) === player) return void bd.gD(player, hW - bA.g9.gC(player, hW), 12);
			if (!bs.eg(player, jJ)) return void b8.kD.pR(player, jJ, hW)
		}
		ad.jW(player, jJ) || ad.jo(player) ? (ag.gF[player].push(aVD << 2), ad.jG(player, hW, jJ), aF.jH(player, !0)) : bd.gD(player, hW, 12)
	}
	this.j3 = function() {
		for (var m0 = bN.y.m0, mE = bN.y.mE, aVZ = bN.y.aVZ, aB = bN.y.lz - 1; 0 <= aB; aB--) 65535 === aVZ[aB] && function(aB, aVD, he) {
			if (6 === he) {
				if (bN.m8.aVM(aB, aVD)) return bN.y.mD[aB]++, bN.y.aVZ[aB] = 0, 0
			} else {
				var player = bN.y.m3[aB] >> 3,
					aB = bN.y.a6U[aB];
				bd.aWw(player), he < 4 ? aWx(player, aB, aVD + bM.hr[he] << 2, aVD) : 4 === he ? function(player, hW, aVD) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVD);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aWx(player, hW, er, aVD);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && !ac.y0(player, er)) return aWx(player, hW, er, aVD);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aWx(player, hW, er, aVD)
				}(player, aB, aVD) : 5 === he && function(player, hW, aVD) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVD);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && ac.y0(player, er)) return aWx(player, hW, er, aVD);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aWx(player, hW, er, aVD);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aWx(player, hW, er, aVD)
				}(player, aB, aVD)
			}
			return 1
		}(aB, bM.iV(mE[aB]), m0[aB] % 64) && (bN.m8.aVJ(aB), bN.aH6.aVc(aB))
	}, this.aWu = function(player, eZ, he, n5) {
		if (!(4 <= he)) {
			var aWA = aD.eX;
			if (bA.g9.gz(aWA) && bs.eg(player, aWA) && player !== aWA && 0 !== ag.gU[aWA].length) {
				var aWv = eZ + bM.hr[he] << 2;
				if (ac.ee(aWv) || bs.eg(player, ac.ef(aWv))) {
					for (var f1 = !1, aB = 0; aB < 4; aB++)
						if (aWv = eZ + bM.hr[aB] << 2, ac.ei(aWv) && !ac.ee(aWv) && ac.ef(aWv) === aWA) {
							f1 = !0;
							break
						} f1 && (aN.a6d(719, 0), aN.yQ(180, L(432, [ag.yR[player]]), 719, player, bB.oF, bB.nf, -1, !0, void 0, {
						f7: 1,
						n5: n5
					}))
				}
			}
		}
	}
}

function aUs() {
	this.kO = 512, this.aVa = 8, this.lz = 0, this.mI = 0, this.m3 = new Uint16Array(this.kO), this.mE = new Uint32Array(this.kO), this.aVZ = new Uint16Array(this.kO), this.a6U = new Uint32Array(this.kO), this.aVh = new Uint16Array(this.kO), this
		.m2 = new Uint16Array(this.kO), this.m0 = new Uint8Array(this.kO), this.aVj = new Uint8Array(this.kO), this.m1 = new Array(this.kO), this.mD = new Uint16Array(this.kO), this.ps = new Uint8Array(aD.ek), this.a7W = new Uint16Array(this.aVa * aD
			.ek), this.dd = function() {
			this.lz = 0, this.mI = 0, this.ps.fill(0), this.m1.fill(null)
		}, this.mK = function(player) {
			var hW = bO.fK[0],
				m4 = bO.fP[1],
				lT = bO.g[0],
				aX0 = this.mI,
				en = this.lz,
				aX1 = bM.iU(lT[0]),
				aX2 = this.ps[player],
				aX3 = (player << 3) + aX2;
			this.m3[en] = aX3, this.mE[en] = aX1, this.aVZ[en] = 0, hW < 60 ? (bA.g9.gA(player, 60 - hW), this.a6U[en] = 60) : this.a6U[en] = hW, this.aVh[en] = bN.iX.mK(en, bM.iW(aX1)), this.m2[en] = aX0, this.m0[en] = m4, this.aVj[en] = 0, this.m1[
				en] = lT, this.mD[en] = 0, this.mI = (aX0 + 1) % 65536, this.ps[player] = aX2 + 1, this.a7W[aX3] = en, this.lz++, bN.m4.aWu(player, lT[lT.length - 1], m4, aX0)
		}, this.j3 = function() {
			bN.m4.j3();
			for (var gL = aD.eX, dt = bN.kx.aH3(gL), sC = (! function(sC) {
					for (var aX8, mE = sC.mE, a6U = sC.a6U, aVj = sC.aVj, aVZ = sC.aVZ, aVh = sC.aVh, m1 = sC.m1, mD = sC.mD, sC = sC.lz, aWD = bS.ey << 4, aB = sC - 1; 0 <= aB; aB--) {
						var aX9 = mE[aB],
							lT = m1[aB],
							aXA = mD[aB],
							aX1 = bM.iU(lT[aXA]),
							aXB = bM.iU(lT[aXA + 1]),
							aXC = aX1 % aWD,
							aX1 = ~~((aX1 + .5) / aWD),
							aXE = aXB % aWD,
							aXF = ~~((aXB + .5) / aWD),
							aXG = aXE - aXC,
							aXH = aXF - aX1,
							eq = Math.max(~~Math.sqrt(aXG * aXG + aXH * aXH + .5), 1),
							aXI = a6U[aB],
							aXI = (aXI = aVj[aB] ? 4e4 : 25e4 + Math.min(20 * aXI, 3e5) + Math.min(aXI >> 3, 5e4), aVZ[aB] + Math.max(~~((aXI + .5) / eq), 1));
						65535 <= aXI ? aXA + 2 < lT.length ? (mD[aB] = aXA + 1, mE[aB] = aX8 = function(aB, aXJ, aXC, aXD, aXA, eq, lT, aWD) {
							aXJ = Math.min(aXJ - 65535, 65535);
							var lT = bM.iU(lT[aXA + 2]),
								aXA = lT % aWD - aXC,
								lT = ~~((lT + .5) / aWD) - aXD,
								aXM = Math.max(~~Math.sqrt(aXA * aXA + lT * lT + .5), 1);
							return aXJ = Math.min(Math.floor((eq * aXJ + .5) / aXM), 65534), bN.y.aVZ[aB] = aXJ, aXC + bL.du(aXJ * aXA, 65535) + aWD * (aXD + bL.du(aXJ * lT, 65535))
						}(aB, aXI, aXE, aXF, aXA, eq, lT, aWD)) : (mE[aB] = aX8 = aXB, aVZ[aB] = 65535) : (aVZ[aB] = aXI, mE[aB] = aX8 = aXC + bL.du(aXI * aXG, 65535) + aWD * (aX1 + bL.du(aXI * aXH, 65535))), aVh[aB] = bN.iX.aXL(aVh[aB],
							aX9, aX8)
					}
				}(this), ! function(sC) {
					if (bf.k7() % 2 == 1) {
						var aB, hf, l3, f7, f8, aXN, yt, aXO, hF, n8, n9, aX1, aXP, a8y, aXR, kl, en = sC.lz,
							mE = sC.mE,
							m3 = sC.m3,
							a6U = sC.a6U,
							aVj = sC.aVj,
							iX = bN.iX.iX,
							aXT = iX.length,
							aXU = bN.iX.aXU,
							aWD = bS.ey << 4,
							aXV = aD.hh,
							aT6 = bg.el,
							gM = (en - 1) * (bL.du(bf.k7(), 2) % 2);
						for (aB = 0; aB < en; aB++)
							for (hf = Math.abs(aB - gM), aX1 = mE[hf], l3 = bM.iW(aX1), hF = m3[hf] >> 3, n8 = aX1 % aWD, n9 = ~~((aX1 + .5) / aWD), aXR = a6U[hf], f7 = 0; f7 < 9; f7++)
								if (!((aXN = l3 + aXU[f7]) < 0 || aXT <= aXN))
									for (aXO = iX[aXN], yt = aXO.length, f8 = 0; f8 < yt; f8++) aXP = aXO[f8], kl = m3[aXP] >> 3, hF == kl || aXV && aT6[hF] === aT6[kl] && aT6[hF] || (kl = mE[aXP], (a8y = n8 - kl % aWD) * a8y + (a8y = n9 - ~~
										((kl + .5) / aWD)) * a8y < 14400 && (kl = a6U[aXP], a8y = kl <= aXR ? Math.max(1, bL.du(kl + bL.du(aXR - kl, 10), 10)) : Math.max(1, bL.du(aXR, 10)), a6U[aXP] = Math.max(kl - a8y, 0), aVj[aXP] =
										4))
					}
				}(this), ! function(sC) {
					if (bf.k7() % 5 == 3)
						for (var a6U = sC.a6U, en = sC.lz, aB = 0; aB < en; aB++) {
							var hW = a6U[aB];
							a6U[aB] = Math.max(hW - Math.max(1, hW >> 7), 0)
						}
				}(this), this), a6U = sC.a6U, aVj = sC.aVj, aB = sC.lz - 1; 0 <= aB; aB--) aVj[aB] = aVj[aB] >> 1, 0 === a6U[aB] && (bN.m8.aVJ(aB), bN.aH6.aVc(aB));
			bd.gD(gL, dt - bN.kx.aH3(gL), 15)
		}
}

function aUt() {
	this.aXW = 32, this.eu = 0, this.ew = 0, this.iY = 0, this.aXX = 0, this.aXY = 4, this.iX = null, this.aXU = new Int16Array(9), this.dd = function() {
		this.iY = 1 + bL.du(bS.ey - 1, this.aXW), this.aXX = 1 + bL.du(bS.ez - 1, this.aXW), this.iX = new Array(this.iY * this.aXX), bA.qi.a2J(this.iX);
		var eu, ew, aXU = this.aXU,
			i = this.iY;
		for (eu = -1; eu <= 1; eu++)
			for (ew = -1; ew <= 1; ew++) aXU[3 * (1 + ew) + 1 + eu] = ew * i + eu
	}, this.mK = function(aXa, aB) {
		return this.iX[aB].push(aXa), this.iX[aB].length - 1
	}, this.aXL = function(aXb, aX1, aXB) {
		var aXc, aXd, aX1 = bM.iW(aX1),
			aXB = bM.iW(aXB);
		return aX1 === aXB ? aXb : (aXc = this.iX[aX1].pop(), this.iX[aX1].length === aXb ? this.mK(aXc, aXB) : (aXd = this.iX[aX1][aXb], this.iX[aX1][aXb] = aXc, bN.y.aVh[aXc] = aXb, this.mK(aXd, aXB)))
	}
}

function aUx() {
	this.kw = function(player, aXe) {
		return -1 !== aXe && !!bN.kx.lY(player, aXe) && this.q3(player, aXe, 0)
	}, this.q3 = function(player, aXe, aXf) {
		player = function(player, aXe, aXf) {
			var aWo = bN.kx.aWQ(player, aXe);
			if (-1 === aWo) return -1;
			aWo = bN.kx.ky(aWo, aXe);
			if (-1 === aWo) return -1;
			var lR = bN.lU.lZ(aWo, aXe);
			if (0 <= lR) return lR;
			if (bN.lU.la()) return -1;
			if (0 <= (lR = bN.lU.lZ(aXe, aWo))) return bN.lU.lb(bN.lU.lc(bN.lU.get(lR)));
			if (aWo === aXe) return bN.lU.lb(new Uint32Array([aWo, aXe]));
			if (0 <= (lR = bN.aUy.q3(aWo, aXe))) return lR;
			return aXf ? function(aXj, player) {
				var fU = bO.fU,
					eK = (fU.fill(0), [aXj]),
					ht = (fU[aXj] = 1, bM.ht),
					aXk = -1,
					en = eK.length;
				for (; - 1 === aXk && en;) {
					for (var g = [], aB = 0; aB < en; aB++)
						for (var eZ = eK[aB], a46 = fU[eZ], eq = 0; eq < 8; eq++) {
							var w7, a0h, et = eZ + ht[eq],
								eR = 4 * et;
							ac.i1(eR) ? (w7 = fU[et], a0h = a46 + 5 + ((1 & eq) << 1), 0 === w7 ? (g.push(et), fU[et] = a0h) : fU[et] = Math.min(a0h, w7)) : -1 === aXk && eq % 2 == 0 && ac.xx(player, eR) && (aXk = eZ)
						}
					en = (eK = g).length
				}
				return -1 !== aXk ? function(iE, aXm) {
					var ht = bM.ht,
						aXn = -1,
						he = 0,
						me = [];
					for (; aXm !== iE;)(he = function(eZ, he) {
						var fU = bO.fU,
							ht = bM.ht,
							a46 = fU[eZ];
						if (a46 - fU[eZ + ht[he]] != 5 + ((1 & he) << 1))
							for (var f6 = 0; f6 < 8; f6++) {
								var eq = f6 + he + 6 & 7;
								if (a46 - fU[eZ + ht[eq]] == 5 + ((1 & eq) << 1)) return eq
							}
						return he
					}(aXm, he)) !== aXn && (me.push(aXm), aXn = he), aXm += ht[he];
					me.push(iE);
					var lR = bN.lU.lZ(me[0], iE);
					if (0 <= lR) return lR;
					return bN.lU.lb(new Uint32Array(me))
				}(aXj, aXk) : -1
			}(aXe, player) : -1
		}(player, aXe, aXf);
		return -1 !== player && (bO.g[0] = bN.lU.get(player), !0)
	}
}

function aUz() {
	function aXp(h2, iJ, iL) {
		for (var jR = Math.min(iJ, iL), nQ = Math.max(iJ, iL), ew = jR + 1; ew < nQ; ew++)
			if (!ac.i1(bM.iR(h2, ew))) return;
		return 1
	}

	function aXq(h4, iI, iK) {
		for (var jR = Math.min(iI, iK), nQ = Math.max(iI, iK), eu = jR + 1; eu < nQ; eu++)
			if (!ac.i1(bM.iR(eu, h4))) return;
		return 1
	}

	function aXr(iI, iJ, iK, iL, aXh, aXe) {
		for (var en = Math.min(Math.abs(iK - iI), Math.abs(iL - iJ)), i7 = Math.sign(iK - iI), iA = Math.sign(iL - iJ), aB = 0; aB < en; aB++)
			if (!ac.i1(bM.iR(iI += i7, iJ += iA))) return null;
		return iI === iK ? aXp(iI, iJ, iL) ? new Uint32Array([aXh, bM.fB(iI, iJ), aXe]) : null : aXq(iJ, iI, iK) ? new Uint32Array([aXh, bM.fB(iI, iJ), aXe]) : null
	}
	this.q3 = function(aXh, aXe) {
		aXh = function(aXh, aXe) {
			var iI = bM.ev(aXh),
				iJ = bM.ex(aXh),
				iK = bM.ev(aXe),
				iL = bM.ex(aXe);
			if (iI === iK) {
				if (aXp(iI, iJ, iL)) return new Uint32Array([aXh, aXe])
			} else {
				if (iJ !== iL) return aXr(iI, iJ, iK, iL, aXh, aXe) || aXr(iK, iL, iI, iJ, aXh, aXe);
				if (aXq(iJ, iI, iK)) return new Uint32Array([aXh, aXe])
			}
			return null
		}(aXh, aXe);
		return null === aXh ? -1 : bN.lU.lb(aXh)
	}
}

function aV4() {
	var aXs = [];
	this.dd = function() {
		aXs = []
	}, this.la = function() {
		return 65536 === aXs.length
	}, this.lZ = function(aXh, aXe) {
		for (var lU = aXs, en = lU.length, aB = 0; aB < en; aB++) {
			var gL = lU[aB];
			if (gL[0] === aXh && gL[gL.length - 1] === aXe) return aB
		}
		return -1
	}, this.lc = function(lT) {
		var aXt = new Uint32Array(lT.length);
		return aXt.set(lT), aXt.reverse()
	}, this.aVQ = function(hF, kl) {
		var gG = hF.length - 1,
			aXu = new Uint32Array(gG + kl.length);
		return aXu.set(hF, 0), aXu.set(kl, gG), aXu
	}, this.aVV = function(hF, kl, aAQ, eZ, aXv) {
		aXv && (aAQ = (kl = this.lc(kl)).length - aAQ - 2);
		aXv = kl.subarray(aAQ + 1 + (eZ === kl[aAQ + 1])), eZ = new Uint32Array(hF.length + aXv.length);
		return eZ.set(hF, 0), eZ.set(aXv, hF.length), eZ
	}, this.lb = function(lT) {
		return aXs.push(lT), aXs.length - 1
	}, this.get = function(aB) {
		return aXs[aB]
	}, this.lW = function() {
		return aXs
	}, this.aXx = function(aXh, aXe) {
		return null
	}
}

function aV8() {
	this.j3 = function(player, n5) {
		player = bN.kx.n7(player, n5);
		return !(player < 0 || !bN.m8.aVX(player) || (bN.m8.aVJ(player), 0))
	}
}

function aUu() {
	var yY = 32,
		yX = new Array(2);

	function wN(f8) {
		var eu, ew, eZ, iA, i7, hj = yY,
			a2m = bA.qa.wN(hj, hj),
			hp = bA.qa.getContext(a2m, !0),
			hm = bA.qa.getImageData(hp, hj, hj),
			wY = hm.data,
			l3 = (hj >> 1) - .5,
			l4 = Math.sqrt(l3 * l3);
		for (wY.fill(255), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = eu - l3, iA = ew - l3, eZ = 4 * (ew * hj + eu), i7 = 714 * (l4 - Math.sqrt(i7 * i7 + iA * iA)) / l4, wY[2 + eZ] = f8, wY[3 + eZ] = 255 < i7 ? 0 : i7;
		return hp.putImageData(hm, 0, 0), a2m
	}
	this.aXy = -1, this.dd = function() {
		this.aXy = -1, yX[0] || (yX[0] = wN(255), yX[1] = wN(0))
	}, this.aXz = function(hp, eR, eu, ew, e7, aB) {
		bA.g9.gz(aD.eX) && (hp.setTransform(eR *= 4 / 3 * .625, 0, 0, eR, eu - (e7 *= 4 / 3), ew - e7), hp.drawImage(yX[+(bN.y.m2[aB] === this.aXy)], 0, 0))
	}
}

function aV3() {
	function aTO(eu, en, ew, aY0, a94, fE, player) {
		if (!(ew < 1 || a94 < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kx.aVb(eR) && !bA.qi.has(aY0, ac.eV(eR)) && ac.xp(eR, player)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTS(ew, en, eu, aY0, aTM, fE, player) {
		if (!(eu < 1 || aTM < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kx.aVb(eR) && !bA.qi.has(aY0, ac.eV(eR)) && ac.xp(eR, player)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTW(iE, iF, aTJ) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTJ) < bM.iG(iE, aTJ)) ? iF : iE
	}
	this.hO = function(player, aTJ) {
		if (bN.mF.mG(player))
			for (var aTK = bM.hu(), aY0 = [];;) {
				var aXk = function(aTJ, aTK, aY0, player) {
					for (var h2 = bM.ev(aTJ), h4 = bM.ex(aTJ), aTM = bS.ey - 2, a94 = bS.ez - 2, aTN = -1, eq = 0; eq < aTK; eq++) {
						var a93 = Math.max(h2 - eq, 1),
							aKg = Math.max(h4 - eq, 1),
							xl = Math.min(h2 + eq, aTM),
							xk = Math.min(h4 + eq, a94),
							iE = aTO(h2, xl - h2, h4 - eq, aY0, a94, 1, player),
							iF = aTO(h2 - 1, h2 - a93 - 1, h4 - eq, aY0, a94, -1, player),
							xl = aTO(h2, xl - h2, h4 + eq, aY0, a94, 1, player),
							a93 = aTO(h2 - 1, h2 - a93 - 1, h4 + eq, aY0, a94, -1, player),
							aTR = aTS(h4, xk - h4 - 1, h2 - eq, aY0, aTM, 1, player),
							aTT = aTS(h4 - 1, h4 - aKg - 2, h2 - eq, aY0, aTM, -1, player),
							xk = aTS(h4, xk - h4 - 1, h2 + eq, aY0, aTM, 1, player),
							aKg = aTS(h4 - 1, h4 - aKg - 2, h2 + eq, aY0, aTM, -1, player);
						if (aTN = aTW(aTN, iE, aTJ), aTN = aTW(aTN, iF, aTJ), aTN = aTW(aTN, xl, aTJ), aTN = aTW(aTN, a93, aTJ), aTN = aTW(aTN, aTR, aTJ), aTN = aTW(aTN, aTT, aTJ), aTN = aTW(aTN, xk, aTJ), 0 <= (aTN = aTW(aTN, aKg, aTJ)) &&
							eq * eq >= bM.iG(aTN, aTJ)) return aTN
					}
					return -1
				}(aTJ, aTK, aY0, player);
				if (-1 === aXk) break;
				var id = ac.eV(bM.ed(aXk));
				if (bN.kx.aWO(player, id)) return !! function(player, aXk, aTJ) {
					for (var he = bM.ib(aXk, aTJ), aB = 0; aB < 4; aB++) {
						var eZ = bM.iZ(aXk, he);
						if (ac.aGh(bM.ed(eZ), player)) return bO.fP[6] = he, 1;
						he = (he + 1) % 4
					}
					return
				}(player, aXk, aTJ) && (bO.fP[7] = aXk, !0);
				aY0.push(id)
			}
		return !1
	}
}

function dg() {
	this.aQo = [L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448)];
	var aY3 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBO = new Array(aY3.length), this.dd = function() {
		var g = bj.eK.data[155].value.split(";"),
			l3 = g.length;
		if (function() {
				for (var en = aY3.length, aB = 0; aB < en; aB++) bX.aBO[aB] = aY3[aB]
			}(), !(l3 > aY3.length))
			for (var aB = 0; aB < l3; aB++) g[aB].length && (this.aBO[aB] = g[aB])
	}, this.aQq = function(e8, code) {
		for (var aBO = this.aBO, aY5 = aY3, qH = (aBO[e8] = code, ""), en = aBO.length, aY6 = [], aB = 0; aB < en; aB++) aY6.push(aBO[aB] === aY5[aB] ? "" : aBO[aB]);
		en--;
		for (aB = 0; aB < en; aB++) qH += aY6[aB] + ";";
		bj.s2.s3(155, qH += aY6[en])
	}, this.aQn = function() {
		bj.s2.s3(155, ""), this.dd()
	}, this.f8 = function(code, e8) {
		return code === this.aBO[e8] || code === this.aBO[e8 + 1]
	}
}

function dY() {
	var aY7 = new Array(1),
		aY8 = new Array(1),
		aY9 = 20,
		eL = 0,
		aYA = !1;

	function aYC() {
		aY9++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aY8[aB] = 0, aY7[aB] = document.createElement("audio"), aY7[aB].src = src, aY7[aB].setAttribute("preload", "auto"), aY7[aB].setAttribute("controls", "none"), aY7[aB].style.display = "none", aY7[aB].onpause = function() {
					aY8[aB] = 1
				}, aY7[aB].oncanplaythrough = function() {
					aY8[aB] = 0 === aY8[aB] ? 1 : aY8[aB]
				}, document.body.appendChild(aY7[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aYA = !0
		}
	}, this.uB = function() {
		if (aYA) {
			aYA = !1;
			for (var aB = 0; 0 <= aB; aB--) aY7[aB].onpause = null, aY7[aB].oncanplaythrough = null, document.body.removeChild(aY7[aB]), aY7[aB] = null
		}
	}, this.play = function() {
		if (aYA) {
			var dt = performance.now();
			if (eL + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aY8[aB]) return eL = dt, aY8[aB] = 2, void aY7[aB].play();
			0 < aY9 && (aY9--, setTimeout(aYC, 66))
		}
	}
}

function ca() {
	this.a84 = function() {
		var aYF;
		return !(al.kB < 3 || ag.gb[lk[0]] >= aD.ju >> 1) && (aD.hh ? (aYF = ae.aI5(), !(2 * ae.aI6(bh.ki()) >= aYF)) : function() {
			var aYF = ae.aI5();
			if (2 * ag.gp[lk[0]] >= aYF) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aX2 = aD.kA, gp = ag.gp, aB = 0; aB < aX2; aB++) gp[aB] = 512;
			var aX3 = aD.x3,
				kN = aE.kN,
				hW = aE.hW;
			for (aB = aX2; aB < aX3; aB++) gp[aB] = kN[hW[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var en = aD.x3, gp = ag.gp, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < en; aB++) gp[aB] = sResourcesValue
		} : function() {
			for (var en = aD.x3, gp = ag.gp, sResourcesData = aD.data.sResourcesData, aB = 0; aB < en; aB++) gp[aB] = sResourcesData[aB]
		})();
		bd.me[8] = ag.gp[aD.eX]
	}
}

function dP() {
	var aGp = 501,
		aYL = (this.aYK = new Uint32Array(aGp), this.a3R = new Uint32Array(aGp), this.aB3 = new Uint16Array(aGp), this.aQw = 0, 1),
		aYM = 0;

	function aYP(self) {
		self.max.fill(0)
	}

	function aYR(self, aB) {
		self.max[0] = Math.max(self.aYK[aB], self.max[0]), self.max[1] = Math.max(self.a3R[aB], self.max[1]), self.max[2] = Math.max(self.aB3[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aYN = 0, this.me = new Array(21), this.aYO = null, this.de = function() {
		this.aYO = [L(449), L(450), L(451), L(452), L(453), L(454), L(455), L(456), L(286), L(287), L(457), L(458), L(459), L(460), "", L(461), L(462), L(463), L(246), L(464), L(465)]
	}, this.dd = function() {
		this.aQw = 0, aYL = 1, this.aYN = 0, aYM = 0, aYP(this), this.me.fill(0)
	}, this.q0 = function(player, iN) {
		bA.g9.a3M(player) && (this.me[0] += iN + 1, this.me[1]++, this.me[12] += bO.fK[1])
	}, this.pU = function(player, p7) {
		__fx.donationsTracker.logDonation(player, p7, bO.fK[0]);
		player === aD.eX && (aN.pU(bO.fK[0], bO.fK[1], p7), this.me[12] += bO.fK[1], this.me[16] += bO.fK[0]), p7 === aD.eX && (aN.a6h(bO.fK[0], player), this.me[10] += bO.fK[0])
	}, this.q4 = function(player) {
		bA.g9.a3M(player) && (this.me[2]++, this.me[12] += bO.fK[1])
	}, this.qC = function(player) {
		bA.g9.a3M(player) && (this.me[19]++, this.me[12] += bO.fK[1])
	}, this.aWw = function(player) {
		bA.g9.a3M(player) && this.me[20]++
	}, this.gD = function(player, a46, e8) {
		bA.g9.a3M(player) && (this.me[e8] += a46)
	}, this.j3 = function() {
		var self;
		this.aYN || 0 < aYM-- || ((self = this).aYK[self.aQw] = ag.gb[aD.eX], self.a3R[self.aQw] = ag.gp[aD.eX], self.aB3[self.aQw] = ae.aB4(aD.eX), aYR(self, self.aQw), self.aQw++, self.aQw === aGp && function(self) {
			aYP(self), aYR(self, 0), self.aQw = 1 + bL.du(aGp, 2);
			for (var aB = 1; aB < self.aQw; aB++) self.aYK[aB] = self.aYK[2 * aB], self.a3R[aB] = self.a3R[2 * aB], self.aB3[aB] = self.aB3[2 * aB], aYR(self, aB);
			aYL *= 2
		}(self), aYM = aYL - 1, be.mV(), 0 === ag.mi[aD.eX] && (self.aYN = bf.k7()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.sw = 0, this.sx = 0, this.aYT = 0, this.aYU = 0, this.a8H = 0, this.te = 0;
	var aYW = this.aYV = 0;
	this.aYX = 0, this.aYY = 0, this.aYZ = 0, this.a7d = 0, this.e8 = 0, this.aAe = null, this.hZ = !1, this.aYa = -1, this.aYb = !1, this.aYc = [0, 0], this.de = function() {
		this.aAe = [L(466), L(119, 0, "Balance"), L(118, 0, "Interest"), L(467)]
	}, this.dd = function() {
		this.hZ = !1, this.aYa = -1, this.aYb = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eq = a0.a1.hw() && h.i < h.j ? 1 : a0.a1.hw() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eq * this.i), this.i -= a0.a1.hw() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7d = Math.floor(this.j / 150), this.a7d = Math.max(this.a7d, 1.5), this.sw = Math.floor(1 + .02 * this
			.i), this.sx = Math.floor(1 + .04 * this.i), this.a8H = this.sx, aYW = Math.floor(.75 * this.a8H), this.te = Math.floor(1 + .075 * this.i), this.aYX = Math.floor(1 + .1125 * this.i), this.aYY = Math.floor(this.i * (a0.a1.hw() ? .03 :
				.029)), this.aYY = Math.max(this.aYY, 4), this.aYZ = Math.floor(.035 * this.i), this.aYZ = Math.max(this.aYZ, 4), this.aYV = this.j - 2 * this.a8H - this.te - this.aYX, this.hZ && this.aYd()
	}, this.h0 = function(lN, lO) {
		var x6, x5;
		return !!this.hZ && (x5 = lN, x6 = lO, lN -= bL.du(h.i - this.i, 2), lO -= bL.du(h.j - this.j, 2), lN < 0 || lO < 0 || lN >= this.i || lO >= this.j || lN >= this.i - this.aYX && lO < this.aYX ? -1 !== aM.h0(x5, x6) || bC.h0(x5, x6) ||
			this.rr() : lO < this.aYX || (lO < this.j - this.te ? (this.aYb = !0, this.aYa = (lN - 2 * this.sw - this.aYT) / this.aYU, 3 !== this.e8 && (bf.dl = !0)) : (x5 = (x5 = Math.floor(lN / (this.i / this.aAe.length))) < 0 ? 0 : x5 >=
				this.aAe.length ? this.aAe.length - 1 : x5) !== this.e8 && (this.e8 = x5, this.aYd(), bf.dl = !0)), !0)
	}, this.a1S = function(lN, lO) {
		return this.aYc[0] = lN, this.aYc[1] = lO, !(!this.hZ || !this.aYb || (lN -= bL.du(h.i - this.i, 2), lO = this.aYa, this.aYa = (lN - 2 * this.sw - this.aYT) / this.aYU, (0 <= this.aYa && this.aYa <= 1 || 0 <= lO && lO <= 1) && (bf.dl = !
			0), 0))
	}, this.a1r = function() {
		this.aYb && (this.aYb = !1)
	}, this.a23 = function() {
		this.hZ ? this.rr() : this.show()
	}, this.show = function() {
		bd.aQw < 2 || (this.hZ = !0, this.aYd())
	}, this.rr = function() {
		this.hZ = !1, this.aYa = -1, bf.dl = !0
	}, this.aYd = function() {
		this.e8 < 2 ? this.aYT = aQ.measureText(bA.rZ.zF(bd.max[this.e8]), bA.qa.sP(0, this.aYY)) : 2 === this.e8 && (this.aYT = aQ.measureText(bA.rZ.a3z(6, 2), bA.qa.sP(0, this.aYY))), this.aYU = this.i - 2 * this.sw - this.aYT - this.sx
	}, this.mV = function() {
		this.hZ && this.aYd()
	}, this.uh = function() {
		this.hZ && this.a8Z()
	}, this.a8Z = function() {
		var eu = bL.du(h.i - this.i, 2),
			ew = bL.du(h.j - this.j, 2);
		ui.setTransform(1, 0, 0, 1, eu, ew), ui.fillStyle = bB.nf, ui.fillRect(0, this.aYX, this.i, this.j - this.aYX), this.aYe(), this.aPl(), ui.strokeRect(0, 0, this.i, this.j), bA.qa.textAlign(ui, 2), ui.font = bA.qa.sP(0, this.aYY), 0 ===
			this.e8 ? this.aYf(bd.aYK, eu, ew) : 1 === this.e8 ? this.aYf(bd.a3R, eu, ew) : 2 === this.e8 ? this.aYg(eu, ew) : 3 === this.e8 && (this.aYh(eu, ew), this.aYi(eu, ew)), aM.a5n(Math.floor(eu + this.i - .725 * this.aYX), Math.floor(
				ew + .275 * this.aYX), Math.floor(.45 * this.aYX)), ui.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aYe = function() {
		var aB, dt;
		for (ui.lineWidth = this.a7d, bA.qa.textBaseline(ui, 1), bA.qa.textAlign(ui, 1), ui.strokeStyle = bB.ni, ui.font = bA.qa.sP(1, this.aYZ), dt = this.i / this.aAe.length, ui.fillStyle = bB.o4, ui.fillRect(this.e8 * dt, this.j - this.te, dt,
				this.te), ui.fillStyle = bB.ni, ui.fillRect(0, this.j - this.te - .5 * this.a7d, this.i, this.a7d), aB = 1; aB <= 3; aB++) ui.fillRect(aB * dt, this.j - this.te, this.a7d, this.te);
		for (aB = this.aAe.length - 1; 0 <= aB; aB--) ui.fillText(bA.y8.a2y(this.aAe[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.te)
	}, this.aPl = function() {
		ui.fillStyle = bB.oU, ui.fillRect(0, 0, this.i, this.aYX), ui.fillStyle = bB.ni, ui.fillRect(0, this.aYX - .5 * this.a7d, this.i, this.a7d), ui.font = bA.qa.sP(1, .39 * this.aYX), ui.fillText(bA.y8.a2y(L(468), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aYX))
	}, this.aYf = function(g, eu, ew) {
		var l3 = bd.max[this.e8],
			a2L = (ui.setTransform(1, 0, 0, 1, eu + 2 * this.sw + this.aYT, ew + this.a8H + this.aYX), ui.lineWidth = 2, this.aYV / Math.sqrt(l3));
		ui.beginPath(), ui.moveTo(this.aYU, this.aYV - a2L * Math.sqrt(g[bd.aQw - 1]));
		for (var aB = bd.aQw - 2; 0 <= aB; aB--) ui.lineTo(aB * this.aYU / (bd.aQw - 1), this.aYV - a2L * Math.sqrt(g[aB]));
		ui.stroke();
		eu = this.a5n(g, a2L, .5);
		eu < .95 && ui.fillText(bA.rZ.zF(l3), -this.sw, 0), .05 < Math.abs(eu - .5) && ui.fillText(bA.rZ.zF(Math.floor(l3 / 4)), -this.sw, Math.floor(this.aYV / 2)), .05 < eu && ui.fillText("0", -this.sw, this.aYV)
	}, this.aYg = function(eu, ew) {
		ui.setTransform(1, 0, 0, 1, eu + 2 * this.sw + this.aYT, ew + this.a8H + this.aYX), ui.lineWidth = 2;
		var a2L = this.aYV / Math.max(bd.max[this.e8], 1);
		ui.beginPath(), ui.moveTo(this.aYU, this.aYV - a2L * bd.aB3[bd.aQw - 1]);
		for (var aB = bd.aQw - 2; 0 <= aB; aB--) ui.lineTo(aB * this.aYU / (bd.aQw - 1), this.aYV - a2L * bd.aB3[aB]);
		ui.stroke();
		eu = this.a5n(bd.aB3, a2L, 1), ew = bd.max[this.e8] / 100;
		eu < .95 && ui.fillText(bA.rZ.a3z(ew, 2), -this.sw, 0), .05 < Math.abs(eu - .5) && ui.fillText(bA.rZ.a3z(ew / 2, 2), -this.sw, Math.floor(this.aYV / 2)), .05 < eu && ui.fillText(bA.rZ.a3z(0, 2), -this.sw, this.aYV)
	}, this.aYh = function(eu, ew) {
		ui.setTransform(1, 0, 0, 1, eu + .34 * this.i, ew + 2 * aYW + this.aYX), bA.qa.textAlign(ui, 2);
		for (var aAP = this.j - 4 * aYW - this.te - this.aYX, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) ui.fillText(bA.y8.a2y(bd.aYO[g[aB]], 0, .31 * this.i), 0, aB * aAP / 9);
		var fF = bd.me;
		for (ui.setTransform(1, 0, 0, 1, eu + .39 * this.i, ew + 2 * aYW + this.aYX), bA.qa.textAlign(ui, 0), ui.fillText(bA.rZ.a3z(100 * fF[0] / (1024 * Math.max(fF[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) ui.fillText(fF[g[aB]].toString(), 0,
			aB * aAP / 9);
		ui.fillText(bA.rZ.a3z(100 * (1 - ag.gb[aD.eX] / fF[7]), 0), 0, aAP)
	}, this.aYi = function(eu, ew) {
		ui.setTransform(1, 0, 0, 1, eu + .79 * this.i, ew + 2 * aYW + this.aYX), bA.qa.textAlign(ui, 2);
		var aB, aAP = this.j - 4 * aYW - this.te - this.aYX;
		for (ui.fillStyle = bB.nz, aB = 2; 0 <= aB; aB--) ui.fillText(bA.y8.a2y(bd.aYO[aB + 8], 0, .31 * this.i), 0, aB * aAP / 9);
		ui.fillText(bA.y8.a2y(bd.aYO[18], 0, .31 * this.i), 0, 3 * aAP / 9), ui.fillStyle = bB.ny, ui.fillText(bA.y8.a2y(bd.aYO[11], 0, .31 * this.i), 0, 4 * aAP / 9), ui.fillStyle = bB.oH, ui.fillText(bA.y8.a2y(bd.aYO[13], 0, .31 * this.i), 0,
				5 * aAP / 9), ui.fillText(bA.y8.a2y(bd.aYO[15], 0, .31 * this.i), 0, 6 * aAP / 9), ui.fillText(bA.y8.a2y(bd.aYO[16], 0, .31 * this.i), 0, 7 * aAP / 9), ui.fillText(bA.y8.a2y(bd.aYO[12], 0, .31 * this.i), 0, 8 * aAP / 9), ui
			.fillStyle = bB.oG, ui.fillText(bA.y8.a2y(bd.aYO[17], 0, .31 * this.i), 0, aAP), ui.fillStyle = bB.nz;
		var fF = bd.me,
			aEE = fF[8] + fF[9] + fF[10] + fF[18],
			aEE = bA.rZ.zF(aEE),
			aOY = ui.measureText(aEE).width,
			eu = (ui.setTransform(1, 0, 0, 1, eu + .83 * this.i + aOY, ew + 2 * aYW + this.aYX), ui.fillText(bA.rZ.zF(fF[8]), 0, 0), ui.fillText(bA.rZ.zF(fF[9]), 0, aAP / 9), ui.fillText(bA.rZ.zF(fF[10]), 0, 2 * aAP / 9), ui.fillText(bA.rZ.zF(fF[
				18]), 0, 3 * aAP / 9), ui.fillStyle = bB.ny, ui.fillText(aEE, 0, 4 * aAP / 9), ui.fillStyle = bB.oH, ui.fillText(bA.rZ.zF(fF[13]), 0, 5 * aAP / 9), ui.fillText(bA.rZ.zF(fF[15]), 0, 6 * aAP / 9), ui.fillText(bA.rZ.zF(fF[16]),
				0, 7 * aAP / 9), ui.fillText(bA.rZ.zF(fF[12]), 0, 8 * aAP / 9), fF[12] + fF[13] + fF[15] + fF[16]);
		ui.fillStyle = bB.oG, ui.fillText(bA.rZ.zF(eu), 0, aAP), ui.fillStyle = bB.ni
	}, this.a5n = function(g, a2L, a9C) {
		var aB, e, fW;
		return this.aYa < 0 || 1 < this.aYa ? .25 : (aB = this.aYa * (bd.aQw - 1), fW = g[e = Math.floor(aB)], fW += (aB - e) * (g[e < bd.aQw - 1 ? e + 1 : e] - fW), ui.strokeStyle = bB.nl, .04 < this.aYa && this.aYk(0, this.aYV - a2L * Math.pow(
				fW, a9C), aB * this.aYU / (bd.aQw - 1), this.aYV - a2L * Math.pow(fW, a9C)), .04 < fW / bd.max[this.e8] && this.aYk(aB * this.aYU / (bd.aQw - 1), this.aYV, aB * this.aYU / (bd.aQw - 1), this.aYV - a2L * Math.pow(fW, a9C)), ui
			.fillStyle = bB.oJ, ui.beginPath(), ui.arc(aB * this.aYU / (bd.aQw - 1), this.aYV - a2L * Math.pow(fW, a9C), Math.max(2, .014 * this.j), 0, 2 * Math.PI), ui.fill(), g = this.aYa * bf.aB5, g = 0 === ag.mi[aD.eX] ? Math.floor(g * bd
				.aYN) : Math.floor(g * bf.k7()), ui.fillStyle = bB.ni, ui.fillText(1 === a9C ? bA.rZ.a3z(fW / 100, 2) : bA.rZ.zF(Math.floor(fW)), -this.sw, this.aYV - a2L * Math.pow(fW, a9C)), bA.qa.textAlign(ui, 1), ui.fillText(aW.aAs(g),
				aB * this.aYU / (bd.aQw - 1), this.aYV + this.aYY - (a0.a1.hw() ? 2 : 0) - this.a7d), bA.qa.textAlign(ui, 2), a2L * Math.pow(fW, a9C) / this.aYV)
	}, this.aYk = function(n8, n9, nL, nM) {
		ui.beginPath(), ui.moveTo(n8, n9), ui.lineTo(nL, nM), ui.stroke()
	}
}

function by() {
	this.aYl = "https://", this.aYm = this.aYl + "territorial.io/", this.aQx = this.aYm + "changelog", this.aR1 = this.aYm + "terms", this.aYn = this.aYm + "cookie_policy", this.aQO = this.aYm + "privacy", this.aR0 = this.aYm + "tutorial", this.aQz =
		this.aYm + "players", this.aQy = this.aYm + "clans", this.a0k = this.aYm + "clan-results", this.aNh = "https://patreon.com/c/territorial", this.aCN = this.aYl + "play.google.com/store/apps/details?id=territorial.io", this.a12 = this.aYl +
		"apps.apple.com/app/id1581110913", this.aYo = this.aYl + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCO = this.aYl + "discord.gg/pthqvpTXmh", this.aCP = this.aYl + "www.instagram.com/davidtschacher/", this.yn =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aYp, this.y5 = new aYq, this.dd = function() {
		this.y.dd()
	}, this.j3 = function() {
		0 !== this.y.a6q && this.y.a6q--
	}
}

function aYq() {
	this.uh = function() {
		if (0 !== bP.y.a6q && (ui.globalAlpha = Math.min(bP.y.a6q / 580, 1), ui.drawImage(bP.y.aYt, 1 + aS.y3(), 1 + aS.y4()), ui.globalAlpha = 1, aD.hB)) {
			for (var n8 = iO / hy, n9 = iP / hy, nL = (h.i + iO) / hy, nM = (h.j + iP) / hy, gM = bP.y.aYu * hy, aYv = bP.y.aYv, aB = aD.kA - 1; 0 <= aB; aB--) ! function(aB, gM, n8, n9, nL, nM, aYv) {
				var highlight;
				0 === ag.mi[aB] || 0 === ag.gb[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gM *= 2), nL = h.i * ((ag.ie[aB] + ag.ig[aB] + 1) / 2 - n8) / (nL - n8) - .5 * gM, n8 = h.j * ((ag.ih[
					aB] + ag.ii[aB] + 1) / 2 - n9) / (nM - n9) - .5 * gM, nL > h.i) || n8 > h.j || nL < -gM || n8 < -gM || (highlight ? ui.setTransform(2 * hy, 0, 0, 2 * hy, nL, n8) : ui.setTransform(hy, 0, 0, hy, nL, n8), ui.drawImage(
					aYv[aD.hh ? bg.el[aB] : 1], 0, 0))
			}(aB, gM, n8, n9, nL, nM, aYv);
			ui.setTransform(hy, 0, 0, hy, 0, 0)
		}
	}
}

function aYp() {
	this.aYu = 28, this.a6q = 0, this.aYt = null;
	var aYx = this.aYv = null;

	function aZ0(hj, aZ1) {
		var eu, ew, eZ, i7, a2m = bA.qa.wN(hj, hj),
			hp = bA.qa.getContext(a2m, !0),
			hm = bA.qa.getImageData(hp, hj, hj),
			wY = hm.data,
			l3 = (hj >> 1) - .5,
			aZ2 = .5 + l3;
		for (aZ2 *= aZ2, ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = (i7 = eu - l3) * i7 + (i7 = ew - l3) * i7, wY[eZ = 4 * (ew * hj + eu)] = aZ1[0], wY[1 + eZ] = aZ1[1], wY[2 + eZ] = aZ1[2], wY[3 + eZ] = (aZ2 - i7) * aZ1[3] / aZ2;
		return hp.putImageData(hm, 0, 0), a2m
	}

	function aXz(aB, hp, a2m, hj) {
		var highlight, eu, ew;
		0 !== ag.mi[aB] && 0 !== ag.gb[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hj *= 2), eu = ag.ie[aB] + ag.ig[aB] + 1 - hj - 2 >> 1, ew = ag.ih[aB] + ag.ii[aB] + 1 - hj - 2 >> 1, highlight ? hp
			.drawImage(a2m[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew, hj, hj) : hp.drawImage(a2m[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew))
	}
	this.dd = function() {
		var sC;
		this.a6q = 700,
			function(sC) {
				var hj = sC.aYu;
				if (sC.aYv = [], aYx = [], aD.hh) {
					for (var aB = 0; aB <= aD.xA; aB++) sC.aYv.push(aZ0(hj, bg.aWJ[bg.kX[aB]])), aYx.push(aZ0(hj >> 1, bg.aWJ[bg.kX[aB]]));
					9 === aD.kS && aYx.push(aZ0(hj, bg.aWJ[1]))
				} else sC.aYv.push(aZ0(hj, bg.aWJ[7])), sC.aYv.push(aZ0(hj, bg.aWJ[4])), aYx.push(aZ0(hj >> 1, bg.aWJ[7]))
			}(this),
			function(sC, aZ3) {
				var aB, aYt = sC.aYt,
					hp = bA.qa.getContext(aYt, !0),
					en = aD.ek,
					hj = sC.aYu >> 1;
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0), aZ3 && hp.clearRect(0, 0, aYt.width, aYt.height);
				if (9 === aD.kS) {
					hj <<= 1;
					sC = az.kb[5];
					for (aB = en - sC; aB < en; aB++) aXz(aB, hp, aYx, hj);
					en -= sC, hj >>= 1
				}
				for (aB = aD.kA; aB < en; aB++) aXz(aB, hp, aYx, hj)
			}(this, null !== (sC = this).aYt && sC.aYt.width === bS.ey - 2 && sC.aYt.height === bS.ez - 2 || (sC.aYt = bA.qa.wN(bS.ey - 2, bS.ez - 2), !1)), aD.hB || this.a4H()
	}, this.aWI = aZ0, this.a4H = function() {
		for (var en = aD.kA, hj = this.aYu, aYv = this.aYv, hp = bA.qa.getContext(this.aYt, !0), aB = 0; aB < en; aB++) aXz(aB, hp, aYv, hj)
	}
}

function d9() {
	function aZ6() {
		8 === aD.kS && 1 === aD.zy && bR.za.zx()
	}

	function aZ5(player) {
		aD.hB ? (ak.aGx(player), al.aJs(), aD.kU && aD.pw.j3()) : b3.aCf(player)
	}
	this.pN = function(player) {
		aN.a0A(player, player === aD.eX ? 21 : 22), aZ5(player), aZ6()
	}, this.pt = function(player) {
		1 === aD.zy && 0 !== ag.mi[player] && 2 !== ag.a3I[player] && aZ5(player), aD.a01--, aD.a00--, aN.a0A(player, 4), bA.g9.gy(2) && aW.mU(!0), aZ6()
	}
}

function dJ() {
	this.aTH = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAM = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.ni, "rgb(170,170,170)"
	], this.aZ7 = [bB.ni, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.ni, bB.nZ], this.aZ8 = [bB.nZ, bB.ni, bB.ni, bB.ni, bB.nZ, bB.nZ, bB.nZ, bB.nZ, bB.ni];
	var aK2 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJK = ["rgba(" + aK2[0] + ",", "rgba(" + aK2[1] + ",", "rgba(" + aK2[2] + ",", "rgba(" + aK2[3] + ",", "rgba(" + aK2[4] + ",", "rgba(" + aK2[5] + ",", "rgba(" + aK2[6] + ",", "rgba(" + aK2[7] + ",", "rgba(" + aK2[8] + ",", "rgba(" + aK2[9] +
			","
		], this.aJL = ["rgb(" + aK2[0] + ")", "rgb(" + aK2[1] + ")", "rgb(" + aK2[2] + ")", "rgb(" + aK2[3] + ")", "rgb(" + aK2[4] + ")", "rgb(" + aK2[5] + ")", "rgb(" + aK2[6] + ")", "rgb(" + aK2[7] + ")", "rgb(" + aK2[8] + ")", "rgb(" + aK2[9] +
			")"
		], this.a0J = null, this.aWJ = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aVy = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kX = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.el = new Uint8Array(aD.ek), this.aAN = new Uint8Array(aD.ek), this.xG = new Uint16Array(aD.ek), this.xH = new Uint16Array(this.kX.length + 1), this.xI = new Uint16Array(this.kX.length), this.de =
		function() {
			this.a0J = [L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477)]
		}, this.dd = function() {
			if (this.el.fill(0), this.aAN.fill(0), this.aZ9(), aD.hh) {
				if (9 === aD.kS) {
					for (var el = bg.el, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) el[aB] = 1;
					var en = aD.ek;
					for (aB = aD.data.teamPlayerCount[7]; aB < en; aB++) el[aB] = 2;
					bg.kX[1] = 7, bg.kX[2] = 8
				} else aD.kU ? function() {
					var aVy = bg.aVy,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kA - 1; 0 <= aB; aB--) colorsData[aB] = ay.jS(262144);
					var aZK = 0,
						f3 = 768,
						aSm = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var eq = 0, f7 = 0; f7 < 3; f7++) eq += Math.abs(aVy[aB][f7] - aSm[f7]);
							eq < f3 && (aZK = aB, f3 = eq)
						} var aZL = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aZL[aB] = teamPlayerCount[aB];
					var kX = bg.kX,
						aZM = new Uint8Array(9),
						gG = (kX[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aZL[aB] && (aZM[aB] = gG, kX[gG++] = aB);
					var jR = aD.kA,
						el = bg.el;
					aZL[aZK] ? (aZL[aZK]--, el[0] = aZM[aZK]) : jR = 0;
					var f8 = 0;
					for (aB = jR; aB < aD.x3; aB++) {
						var hf = kX[f8];
						if (aZL[hf]) aZL[hf]--, el[aB] = aZM[hf];
						else if (aB--, 9 <= ++f8) return console.log("error 325")
					}
				}() : this.j3();
				! function() {
					for (var en = aD.ek, xG = bg.xG, xH = bg.xH, xI = bg.xI, el = bg.el, kX = bg.kX, x9 = kX.length, eK = new Array(x9), aB = 0; aB < x9; aB++) eK[aB] = [];
					for (aB = 0; aB < en; aB++) eK[kX[el[aB]]].push(aB);
					for (aB = 1; aB <= x9; aB++) xH[aB] = xH[aB - 1] + eK[aB - 1].length;
					for (aB = 0; aB < x9; aB++)
						for (var gG = eK[aB].length, l3 = xH[aB], hf = 0; hf < gG; hf++) xG[hf + l3] = eK[aB][hf];
					var kA = aD.kA;
					for (aB = 0; aB < x9; aB++)
						for (gG = eK[aB].length, l3 = xH[aB], hf = 0; hf < gG; hf++)
							if (xG[hf + l3] >= kA) {
								xI[aB] = hf;
								break
							}
				}(), ! function() {
					for (var en = aD.ek, el = bg.el, aAN = bg.aAN, kX = bg.kX, aB = 0; aB < en; aB++) aAN[aB] = kX[el[aB]];
					9 === aD.kS && aAN.fill(1, en - az.kb[5])
				}()
			}
		}, this.aZ9 = function() {
			for (var aB = this.kX.length - 1; 0 <= aB; aB--) this.kX[aB] = aB
		}, this.j3 = function() {
			var z4 = new Uint8Array(aD.kA),
				z5 = new Uint8Array(aD.kA),
				aZE = new Uint16Array(8),
				aZF = new Uint16Array(this.kX.length);
			this.aZG(z4, z5, aZE, 1), this.aGX(aZE), this.aZH(aZF, z4, z5), this.aZI(z4, z5, aZF), this.aZJ()
		}, this.aZG = function(z4, z5, aZL, aZN) {
			for (var f7, e, aZO, en = this.kX.length - aZN, g = new Uint16Array(en), aVy = this.aVy, colorsData = aD.data.colorsData, aB = aD.kA - 1; 0 <= aB; aB--) {
				for (f7 = en; aZN <= f7; f7--) g[f7 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aVy[f7][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aVy[f7][1]) + Math.abs(4 * (63 & colorsData[aB]) - aVy[f7][2]);
				for (aZO = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZO && (aZO = g[e], z4[aB] = e);
				for (aZL[z4[aB]] += 4, aZO = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZO && e !== z4[aB] && (aZO = g[e], z5[aB] = e);
				aZL[z5[aB]]++
			}
		}, this.aGX = function(aZL) {
			for (var f7, l5, en = this.kX.length - 1, aB = en; 0 <= aB; aB--) this.kX[aB] = aB;
			for (aB = en - 1; 0 <= aB; aB--) aZL[aB]++;
			for (aB = 1; aB <= en; aB++) {
				for (l5 = 0, f7 = 1; f7 < en; f7++) aZL[f7] > aZL[l5] && (l5 = f7);
				aZL[l5] = 0, this.kX[aB] = l5 + 1
			}
		}, this.aZH = function(aZF, z4, z5) {
			var f7, a0e, f8, eq, e, nK, tD, aZP = this.kX.length - 1,
				r3 = new Uint16Array(aZP),
				aZQ = [],
				aZR = 0,
				a0d = [],
				aZS = [];
			loop: for (var aB = 0; aB < aD.kA; aB++)
				if (null !== (a0e = bA.rZ.a0f(ag.a0c[aB]))) {
					for (f7 = a0d.length - 1; 0 <= f7; f7--)
						if (a0e === a0d[f7]) {
							aZS[f7].push(aB), aZR = Math.max(aZR, aZS[f7].length);
							continue loop
						} a0d.push(a0e), aZQ.push(!1), aZS.push([aB]), aZR = Math.max(aZR, 1)
				}
			for (; 2 < aD.xA && aZR > bL.du(aD.kA, aD.xA);) aD.xA--, aD.kS--;
			for (f7 = a0d.length - 1; 0 <= f7; f7--) {
				for (eq = -1, f8 = a0d.length - 1; 0 <= f8; f8--) !aZQ[f8] && (-1 === eq || aZS[f8].length > aZS[eq].length) && (eq = f8);
				for (f8 = aZP - 1; 0 <= f8; f8--) r3[f8] = 1;
				for (f8 = aZS[eq].length - 1; 0 <= f8; f8--) r3[z4[aZS[eq][f8]]] += 3, r3[z5[aZS[eq][f8]]]++;
				for (aB = aZP - 1; 0 <= aB; aB--) {
					for (e = eq % aZP, f8 = aZP - 1; 0 <= f8; f8--) r3[f8] > r3[e] && (e = f8);
					for (nK = -1, f8 = aD.xA; 0 < f8; f8--)
						if (this.kX[f8] === e + 1) {
							nK = f8;
							break
						} if (r3[e] = 0, -1 !== nK) {
						for (tD = 0, f8 = aD.xA; 0 < f8; f8--) aZF[nK] > aZF[f8] && tD++;
						if (tD !== aD.xA - 1) {
							for (f8 = aZS[eq].length - 1; 0 <= f8; f8--) aZF[nK]++, this.el[aZS[eq][f8]] = nK;
							break
						}
					}
				}
				aZQ[eq] = !0
			}
		}, this.aZI = function(z4, z5, aZF) {
			for (var aB, i6, en = this.kX.length - 1, border = bL.du(aD.kA, aD.xA), aZT = (0 < aD.kA % aD.xA && border++, new Uint8Array(1 + en)), f7 = en; 1 <= f7; f7--) aZT[this.kX[f7]] = f7;
			for (aB = 0; aB < aD.kA; aB++) i6 = aZT[z4[aB] + 1], 0 === this.el[aB] && i6 <= aD.xA && aZF[i6] < border && (aZF[i6]++, this.el[aB] = i6);
			for (aB = 0; aB < aD.kA; aB++) i6 = aZT[z5[aB] + 1], 0 === this.el[aB] && i6 <= aD.xA && aZF[i6] < border && (aZF[i6]++, this.el[aB] = i6);
			for (f7 = aD.xA; 1 <= f7; f7--)
				for (aB = aD.kA - 1; 0 <= aB && !(aZF[f7] >= border); aB--) 0 === this.el[aB] && (aZF[f7]++, this.el[aB] = f7)
		}, this.aZJ = function() {
			for (var aB = aD.kA; aB < aD.ek; aB++) this.el[aB] = 1 + aB % aD.xA
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
			for (var aZU = !1, aZV = !1, eq = 3; 0 <= eq; eq--) {
				var gL = gT[player][aB] + ep[eq];
				if (ac.aGh(gL, player)) continue loop;
				aZU = aZU || ac.i1(gL), aZV = aZV || ac.aGg(gL)
			}
			aZU ? gU[player].push(gT[player][aB]) : aZV ? fD[player].push(gT[player][aB]) : ac.xc(gT[player][aB], player), gT[player][aB] = gT[player][en - 1], gT[player].pop(), en--
		}
	}, this.gR = function() {
		ag.gb[fi] -= fj
	}, this.gS = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) ac.xx(fi, border[aB]) || (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gV = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) !ac.xx(fi, border[aB]) && ac.ei(border[aB]) && (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gW = function(border) {
		for (var eq, gL, en = border.length, ep = ac.ep, aB = en - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--)
				if (gL = border[aB] + ep[eq], ac.aGh(gL, fi)) {
					ag.gT[fi].push(border[aB]), border[aB] = border[en - 1], border.pop(), en--;
					break
				}
	}, this.gX = function() {
		for (var eq, gL, ep = ac.ep, aB = fj - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--) gL = fl[aB] + ep[eq], ac.y0(fi, gL) && ac.aGi(gL) && (ag.gT[fi].push(gL), ac.gI(gL, fi))
	}, this.gY = function() {
		var eu, ew;
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.xx(fi, 4 * (ag.ih[fi] * bS.ey + eu))) break loop;
			ag.ih[fi]++
		}
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.xx(fi, 4 * (ag.ii[fi] * bS.ey + eu))) break loop;
			ag.ii[fi]--
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.xx(fi, 4 * (ew * bS.ey + ag.ie[fi]))) break loop;
			ag.ie[fi]++
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.xx(fi, 4 * (ew * bS.ey + ag.ig[fi]))) break loop;
			ag.ig[fi]--
		}
	}, this.eg = function(player, jJ) {
		return 0 === bg.el[player] || bg.el[player] !== bg.el[jJ]
	}, this.hJ = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.aGt = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.jM(ag.gT[player][aB]) && ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.hM = function(a3N, a3O) {
		for (var aB, dt, gM, gL, aX2 = ag.gT[a3N].length, aX3 = ag.gT[a3O].length, ep = (aX3 < aX2 && (dt = a3N, a3N = a3O, a3O = dt, dt = aX2, aX2 = aX3, 0), ac.ep), eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aX2; aB++)
				if (gL = ag.gT[a3N][aB] + gM, ac.gN(gL) && ac.ef(gL) === a3O) return !0;
		return !1
	}, this.aGu = function(a3N, a3O) {
		for (var aB, gM, gL, aX2 = ag.gT[a3N].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aX2; aB++)
				if (ac.jM(ag.gT[a3N][aB]) && (gL = ag.gT[a3N][aB] + gM, ac.gN(gL)) && ac.ef(gL) === a3O) return !0;
		return !1
	}
}

function dV() {
	this.q5 = new aZW
}

function aZW() {
	this.hP = function(player) {
		bA.g9.a3J(player) && aN.yQ(80, L(478), 637, 0, bB.oX, bB.nf, -1, !1)
	}, this.hS = function(player) {
		bA.g9.a3J(player) && aN.yQ(80, L(479), 637, 0, bB.oX, bB.nf, -1, !1)
	}
}

function aZX() {
	this.aZY = 0, this.j3 = function() {
		aO.j3(), aZ.j3(), h.j3(), b0.y.j3(), ax.aG3(), bf.dl && (bf.dl = !1, aa.uh())
	}
}

function aZZ() {
	this.eM = bf.eM, this.e8 = 0, this.aZY = 0, this.aG1 = 0, this.aZa = null, this.aZb = 7, this.a6r = 0, this.dd = function() {
		this.aG1 = 0, this.aZa = [], this.e8 = 0, this.aZY = 0
	}, this.aSJ = function(aC) {
		if (aD.hB) this.aB6(aC);
		else if (this.aZa.push(aC), 2 === aD.zy) {
			for (var aB = 0; aB < this.aZa.length; aB++) b8.p0.j3(this.aZa[aB]);
			this.aZa = []
		}
	}, this.aB6 = function(aC) {
		2 !== aD.zy && (b8.p0.j3(aC), b9.j3(), aW.aB6(this.aG1), this.aG1 === aD.a4N ? (aD.pw.j3(), this.aG1 = 0, this.e8 = 0, this.aZY = 0, this.eM = bf.eM) : (this.aG1++, af.a4G(), af.mU(!0), bb.aBg()))
	}, this.j3 = function() {
		h.j3(), aD.hB ? (bf.dl = aW.aB6(-1) || bf.dl, mW()) : (0 !== this.e8 || bf.eM >= this.eM && (this.eM += bf.aB5 * Math.floor(1 + (bf.eM - this.eM) / bf.aB5), 2 === aD.zy ? mL() : this.aZc(), this.e8++, 27 < bf.eM - this.a6r)) && this
		.aZd(), mR(), bf.dl && (bf.dl = !1, y1()), this.a6r = bf.eM
	}, this.aZd = function() {
		bf.dl = !0, mT(), this.e8 = 0
	}, this.aZc = function() {
		var vP, aB;
		if (this.aZY !== 7 * this.aG1) mN(), bb.aBg();
		else {
			vP = !1;
			loop: for (; this.aZe() && (vP = !0, mN(), 2 !== aD.zy) && 0 < this.aZa.length;)
				for (aB = this.aZb - 2; 0 <= aB; aB--)
					if (mN(), 2 === aD.zy) break loop;
			vP ? bb.aBg() : (mL(), bb.a4J())
		}
	}, this.aZe = function() {
		return 0 < this.aZa.length && (this.aG1++, b8.p0.j3(this.aZa[0]), this.aZa.shift(), !0)
	}
}

function aZf() {
	var aZg, aZh, aZi, aG1, aZj, e8 = 0,
		eM = bf.eM;

	function aZm() {
		! function() {
			if (!aD.hB) return;
			if (aD.kU) return;
			if (2 !== aD.zy)
				if (aZj % 7 != 0) aZj++;
				else if (aG1 === aD.a4N) {
				if (!aZp()) return;
				aW.aB6(aG1), aD.pw.j3()
			} else {
				if (!aZp()) return;
				aZj++, aG1++, af.a4G(), af.mU(!0)
			}
			return 1
		}() && aZp() && mN()
	}

	function aZn() {
		e8 = 0, (aD.hB ? (bf.dl = aW.aB6(aG1 - (aZj % 7 == 0 ? 0 : 1) + aZj % 7 / 7) || bf.dl, mW) : aM.gx || !bC.a4l ? mW : (bf.dl = !0, mT))()
	}

	function aZp() {
		var aB, en, aZq = b9.pu.aTf,
			fW = b9.pu.aTg,
			fY = b9.pu.aTh,
			fa = b9.pu.aTi,
			aZr = b9.pu.aTj,
			aZs = b9.pu.aTk;
		if (!(aZg >= aZs.length)) {
			if (aZs = aZs[aZg], aZr[aZg]) {
				for (en = aZh + aZs, aB = aZh; aB < en; aB++) b8.p0.pi(aZq[aB], fW[aB], fY[aB], fa[aB]);
				aZh += aZs, aZg++
			} else ++aZi >= aZs && (aZg++, aZi = 0);
			return 1
		}
		aN.a1F("Replay file smaller than expected."), bC.a24(!1), aD.zy = 2
	}
	this.aZY = 0, this.dd = function() {
		aZj = aG1 = aZi = aZh = aZg = 0
	}, this.j3 = function() {
		var aXT;
		h.j3(), bC.a8T() < 1.7 ? 0 === e8 ? bf.eM >= eM && (aXT = bf.aB5 / bC.a8T(), eM += aXT * Math.floor(1 + (bf.eM - eM) / aXT), 2 === aD.zy || aM.gx || !bC.a4l ? mL() : (aZm(), bb.aBg()), e8++) : aZn() : function() {
			var aXT;
			if (bf.eM >= eM)
				if (2 === aD.zy || aM.gx || !bC.a4l) mL(), eM = bf.eM;
				else {
					for (aXT = bf.aB5 / bC.a8T(), 16 < (bf.eM - eM) / aXT && (eM = bf.eM - 16 * aXT); bf.eM >= eM && 2 !== aD.zy;) eM += aXT, aZm();
					bb.aBg()
				} aZn()
		}(), mR(), bf.dl && (bf.dl = !1, y1())
	}, this.a08 = function() {
		b9.pu.aTk.length - aZg <= 2 || aN.a1F("Replay file larger than expected.")
	}
}

function aZt() {
	var e8 = 0,
		eM = bf.eM;
	this.aZY = 0, this.j3 = function() {
		h.j3(), aD.hB ? mW() : 0 === e8 ? bf.eM >= eM && (eM += bf.aB5 * Math.floor(1 + (bf.eM - eM) / bf.aB5), 2 === aD.zy || aM.gx ? mL() : (mN(), bb.aBg()), e8++) : ((aM.gx ? mW : (bf.dl = !0, mT))(), e8 = 0), mR(), bf.dl && (bf.dl = !1, y1())
	}
}

function dR() {
	this.a07 = null, this.dl = !1, this.eM = 0, this.aB5 = 56;
	var aZu = 0;

	function aZv() {
		bf.eM = aZu = performance.now(), bf.a07.j3(), window.requestAnimationFrame(aZv)
	}
	this.dd = function() {
		this.a4i(), window.requestAnimationFrame(aZv), this.eM = performance.now()
	}, this.a4Z = function() {
		aD.gw ? (this.a07 = new aZf, this.a07.dd()) : aD.kU ? this.a07 = new aZt : (this.a07 = new aZZ, this.a07.dd())
	}, this.a4i = function() {
		this.a07 = new aZX, this.dl = !0
	}, this.j3 = function() {
		this.a07.aZY++
	}, this.k7 = function() {
		return this.a07.aZY
	}, this.aRv = function() {
		var dt = performance.now();
		dt < aZu + 1e3 || (this.eM = dt, this.a07.j3())
	}
}

function ct() {
	var aFR = 0,
		aZw = !0;

	function aZx(id) {
		id = [L(480), L(481), L(482), L(483)][id];
		aN.a6Y(id)
	}
	this.j3 = function() {
		var dt, a6t;
		bf.eM < aFR || (aFR = bf.eM + 5e3, aD.gw) || aD.kU || bA.g9.gz(aD.eX) || (dt = new Date, a6t = dt.getUTCSeconds(), aZw ? a6t < 50 && (aZw = !1) : a6t < 50 || (aZw = !0, (a6t = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a6t || 20 ==
			a6t || 40 == a6t ? aD.kS < 7 && aZx(0) : 10 == a6t || 30 == a6t || 50 == a6t ? 7 !== aD.kS && 10 !== aD.kS || aZx(1) : 5 == a6t || 25 == a6t || 45 == a6t ? 8 === aD.kS && aZx(2) : 35 == a6t && 9 === aD.kS && aZx(3))))
	}
}

function cn() {
	var n8, n9, nL, nM, aZy = 0,
		aZz = 0;

	function aa1() {
		return Math.pow(Math.pow(nL - n8, 2) + Math.pow(nM - n9, 2), .5)
	}

	function aa0(e) {
		n8 = h.k * e.touches[0].clientX, n9 = h.k * e.touches[0].clientY, nL = h.k * e.touches[1].clientX, nM = h.k * e.touches[1].clientY
	}
	this.a1W = function(e) {
		return 1 < e.touches.length ? (aZz = bf.eM, aZy = 3, aa0(e), aL.rr(), !0) : (aZy = 0, !1)
	}, this.a1X = function(e) {
		var aKp, i4, i5;
		return 0 !== aD.zy && 1 < e.touches.length && (aZy = Math.max(aZy - 1, 0), aH.nQ() && (aKp = aa1(), aa0(e), e = aa1(), i4 = Math.floor((n8 + nL) / 2), i5 = Math.floor((n9 + nM) / 2), aS.a8u(i4, i5, Math.max(.125, e) / Math.max(.125,
			aKp)), bf.dl = !0), !0)
	}, this.a1u = function() {
		var eu, ew;
		return !!(aZy && (aZy = 0, bf.eM < aZz + 500)) && (eu = (n8 + nL) / 2, ew = (n9 + nM) / 2, aL.a1o(eu, ew), aL.click(eu, ew, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.uB = function() {
		this.aC = null
	}, this.ph = function(size) {
		for (var fF = 0, aC = this.aC, nQ = this.e8 + size - 1, aB = this.e8; aB <= nQ; aB++) fF |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nQ - aB;
		return this.e8 += size, this.e8 > 8 * this.size && console.error("Unwrapper Overflow"), fF
	}, this.aSR = function(size) {
		var f7 = size >> 1;
		return (1 << f7) * this.ph(size - f7) + this.ph(f7)
	}, this.aSS = function(aa2) {
		return this.size === bD.aSQ(aa2)
	}, this.aTx = function(wp, aa3, aa4) {
		var gG = this.ph(wp);
		if (!gG) return null;
		for (var wp = Math.max(gG, aa4), g = new(aa3 <= 8 ? Uint8Array : aa3 <= 16 ? Uint16Array : Uint32Array)(wp), aB = 0; aB < gG; aB++) g[aB] = this.ph(aa3);
		aa4 = g[gG - 1];
		return aa4 && g.fill(aa4, gG), g
	}, this.aTy = function(wp, aa5, aa4) {
		var gG = this.ph(wp);
		if (!gG) return null;
		for (var wp = Math.max(gG, aa4), g = new Array(wp), aB = 0; aB < gG; aB++) g[aB] = this.aTv(aa5);
		return g.fill(g[gG - 1], gG), g
	}, this.aTv = function(wp) {
		return bG.vw.w0(this.ph(wp))
	}, this.aTw = function() {
		var qH = bF.ss.st(bF.ss.su(this.ph(30))),
			qH = bA.rZ.a4B(qH, "_", "/");
		qH = bA.rZ.a4B(qH, "-", "+");
		for (var aa6 = "";
			(qH.length + aa6.length) % 4;) aa6 += "=";
		qH = "data:image/png;base64," + qH + aa6;
		var aHP = new Image;
		aHP.onload = function() {
			b9.aHo.aHp(aHP), aHP.onload = null, aHP = null
		}, aHP.src = qH
	}
}

function dL() {
	this.aUo = 0, this.aUp = 0, this.aUk = 0, this.aUl = 0, this.aUm = 0, this.aUn = 0, this.aBh = [0, 0, 0, 0], this.nP = function() {
		this.aUo = aS.y3(), this.aUp = aS.y4(), this.aUk = -this.aUo, this.aUl = -this.aUp, this.aUm = h.i / hy, this.aUn = h.j / hy, this.aBh[0] = Math.floor(this.aUk), this.aBh[1] = Math.floor(this.aUl), this.aBh[2] = Math.floor(this.aBh[0] +
			this.aUm + 1), this.aBh[3] = Math.floor(this.aBh[1] + this.aUn + 1), bb.aBe = !0
	}
}

function co() {
	var a7Z, mv;
	this.dd = function() {
		a7Z = 1, mv = 0
	}, this.j3 = function() {
		0 < a7Z && (mv = 0 === mv ? bf.eM + 16 : mv, a7Z = (a7Z -= .001 * (bf.eM - mv)) < 0 ? 0 : a7Z, mv = bf.eM, bf.dl = !0)
	}, this.uh = function() {
		0 < a7Z && (ui.fillStyle = "rgba(0,0,0," + a7Z + ")", ui.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aa2) {
		return this.dd(new Uint8Array(this.aSQ(aa2))), this.aC
	}, this.uB = function() {
		this.aC = null
	}, this.a8 = function(size, a6x) {
		for (var aC = this.aC, nQ = this.e8 + size - 1, aB = this.e8; aB <= nQ; aB++) aC[aB >> 3] |= (a6x >> nQ - aB & 1) << 7 - (7 & aB);
		this.e8 += size, this.e8 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aSP = function(size, a6x) {
		var f7 = size >> 1,
			eq = 1 << f7;
		this.a8(size - f7, bL.du(a6x, eq)), this.a8(f7, a6x % eq)
	}, this.aa9 = function(size) {
		for (var aC = this.aC, nQ = this.e8 + size, aB = this.e8; aB < nQ; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aSQ = function(aa2) {
		return aa2 + 7 >> 3
	}, this.aaA = function(g, jR, nQ, aaB) {
		for (var aB = jR; aB < nQ; aB++) this.a8(aaB, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e8 = 0
	}, this.aSp = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aaC, value) {
		for (var g = this.g, nQ = this.e8 + aaC - 1, aaD = 1 + (nQ >> 3); g.length < aaD;) g.push(0);
		for (var aB = this.e8; aB <= nQ; aB++) g[aB >> 3] |= (value >> nQ - aB & 1) << 7 - (7 & aB);
		this.e8 += aaC
	}, this.dk = function(g, wp, aa3) {
		var aaE = bA.qi.a2g(g);
		this.a8(wp, aaE);
		for (var aB = 0; aB < aaE; aB++) this.a8(aa3, g[aB])
	}, this.aUF = function(g, wp, aa5) {
		var aaE = bA.qi.a2g(g);
		this.a8(wp, aaE);
		for (var aB = 0; aB < aaE; aB++) this.aUD(g[aB], aa5)
	}, this.aUD = function(qH, wp) {
		var en = qH.length;
		this.a8(wp, en);
		for (var aB = 0; aB < en; aB++) this.a8(16, qH.charCodeAt(aB))
	}, this.aUE = function(a2m) {
		var aaF = (a2m = a2m.toDataURL()).split(",");
		if (aaF.length < 2) console.log("error 266");
		else {
			a2m = bA.rZ.a4B(a2m = aaF[aaF.length - 1], "/", "_"), a2m = bA.rZ.a4B(a2m, "\\+", "-");
			var a2m = bA.rZ.a4B(a2m, "=", ""),
				w9 = bG.ss.w6(a2m),
				en = w9.length;
			this.a8(30, en);
			for (var aB = 0; aB < en; aB++) this.a8(6, w9[aB])
		}
	}
}
a(), self.aiCommand746 = function(fF) {
	0 === fF ? bt() : 1 !== fF || !a0 || 1 !== a0.id || a0.dv < 14 || bJ.fG()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};