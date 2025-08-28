var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, hy, iO, iP,
	a7z, ll, jv, a1c, uk, yH, aC2, a4n, a4o, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "<br>", "rgba(", "auto", "center", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", "0.5em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "' target='_blank'>",
		"undefined", "pre", "</a>", "underline", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel", "top",
		"tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown",
		"italic ", "file", "error", "en-US", "dotted", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
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
	this.dq = 1112, this.n = 2119, this.rVersion = 15, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dv = "28 Aug 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
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
		for (var aB = ag.gF[player].length - 1; size <= aB; aB--) ac.jM(ag.gF[player][aB], player)
	}
	this.dd = function() {
		j5 = 0
	}, this.j8 = function(player, j9) {
		return bO.ej[1] = ag.gF[player].length, bO.ej[0] === aD.ek ? ao.it.jA(player) : this.jB(player, bO.ej[0]), (0 !== bO.ej[1] || 0 !== ag.gF[player].length) && !(!j9 && bO.ej[1] === ag.gF[player].length || (bO.ej[0] === aD.ek ? ag.jC[
			player]++ : ag.jD[player]++, 0))
	}, this.jE = function(player) {
		jF(bO.ej[1], player), ad.jG(player, bO.fK[0], bO.ej[0]), aF.jH(player, !1)
	}, this.jI = function(player, jJ, en, hW) {
		var jK = bL.du(12 * ag.gp[player], 1024);
		hW -= hW >= bL.du(ag.gp[player], 2) ? jK : 0, jF(en, player), ad.jG(player, hW, jJ), ag.gp[player] -= hW + jK, aF.jH(player, !1)
	}, this.jB = function(player, jJ) {
		for (var he, ep = ac.ep, aB = ag.gT[player].length - 1; 0 <= aB; aB--)
			if (ac.jL(ag.gT[player][aB]))
				for (he = 3; 0 <= he; he--)
					if (ac.gN(ag.gT[player][aB] + ep[he]) && ac.ef(ag.gT[player][aB] + ep[he]) === jJ) {
						ag.gF[player].push(ag.gT[player][aB]);
						break
					}
	}, this.jA = function(player) {
		for (var ep = ac.ep, aB = ag.gT[player].length - 1; 0 <= aB; aB--)
			if (ac.jL(ag.gT[player][aB]))
				for (var he = 3; 0 <= he; he--)
					if (ac.ee(ag.gT[player][aB] + ep[he])) {
						ag.gF[player].push(ag.gT[player][aB]);
						break
					}
	}, this.jN = function(player, jO) {
		var aB, f6, he, hg, en = ag.gT[player].length,
			jP = 256 <= en ? 12 : 32 <= en ? 6 : 1,
			jQ = en - 1 - ay.jR(jP),
			ep = ac.ep;
		j5 = 0;
		loop: for (aB = jQ; 0 <= aB; aB -= jP)
			for (he = 3; 0 <= he; he--)
				if ((hg = ac.ee(ag.gT[player][aB] + ep[he]) ? aD.ek : ac.ef(ag.gT[player][aB] + ep[he])) === aD.ek || ac.gN(ag.gT[player][aB] + ep[he]) && hg !== player && (jO || bs.eg(player, hg))) {
					for (f6 = j5 - 1; 0 <= f6; f6--)
						if (j7[f6] === hg) continue loop;
					if (j7[j5] = hg, 8 <= ++j5) return !0
				}
		return 0 < j5
	}, this.jS = function(player, jO) {
		var aB, he, hg, ep = ac.ep;
		for (j5 = 0, aB = ag.gT[player].length - 1; 0 <= aB; aB--)
			for (he = 3; 0 <= he; he--)
				if ((hg = ac.ee(ag.gT[player][aB] + ep[he]) ? aD.ek : ac.ef(ag.gT[player][aB] + ep[he])) === aD.ek || ac.gN(ag.gT[player][aB] + ep[he]) && hg !== player && (jO || bs.eg(player, hg))) return j7[j5++] = hg, !0;
		return !1
	}, this.jT = function() {
		for (var f7, aB = j5 - 1; 0 <= aB; aB--)
			if (j7[aB] === aD.ek) {
				for (j5--, f7 = aB; f7 < j5; f7++) j7[f7] = j7[f7 + 1];
				return !0
			} return !1
	}, this.jU = function(player) {
		for (var f7, aB = j5 - 1; 0 <= aB; aB--)
			if (ad.jV(player, j7[aB]))
				for (j5--, f7 = aB; f7 < j5; f7++) j7[f7] = j7[f7 + 1];
		return 0 === j5
	}, this.jW = function() {
		for (var aB = j5 - 1; 0 <= aB; aB--)
			if (bA.g9.jX(j7[aB])) return !0;
		return !1
	}, this.jY = function() {
		for (var aB = j5 - 1; 0 <= aB; aB--) bA.g9.jX(j7[aB]) || (j7[aB] = j7[--j5]);
		return 0 < j5
	}, this.jZ = function(player) {
		for (var f7, ja = j7[0], jb = ag.gp[ja] + ad.gq(ja, player), aB = j5 - 1; 1 <= aB; aB--)(f7 = ag.gp[j7[aB]] + ad.gq(j7[aB], player)) < jb && (ja = j7[aB], jb = f7);
		return ja
	}, this.jc = function(player) {
		var j, jd = j7[0];
		if (1 !== j5)
			for (var je = bL.du(ag.ig[player] + ag.ie[player], 2), jf = bL.du(ag.ii[player] + ag.ih[player], 2), f3 = jg(je - bL.du(ag.ig[jd] + ag.ie[jd], 2)) + jg(jf - bL.du(ag.ii[jd] + ag.ih[jd], 2)), aB = j5 - 1; 1 <= aB; aB--)(j = jg(je - bL
				.du(ag.ig[j7[aB]] + ag.ie[j7[aB]], 2)) + jg(jf - bL.du(ag.ii[j7[aB]] + ag.ih[j7[aB]], 2))) < f3 && (f3 = j, jd = j7[aB]);
		return jd
	}, this.jh = function() {
		for (var ji = j7, jj = ji[0], gp = ag.gp, jk = gp[jj], aB = j5 - 1; 1 <= aB; aB--) {
			var gL = ji[aB],
				f7 = gp[gL];
			jk < f7 && (jj = gL, jk = f7)
		}
		return jj
	}, this.jl = function() {
		return j7[ay.jR(j5)]
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
	this.jm = new Uint8Array(aD.ek), this.dd = function() {
		this.jm.fill(0)
	}, this.jn = function(player, hW) {
		var jp, jr, js, jt;
		ad.jo(player) && (jp = ae.jq(player), 3 <= (jr = aE.hW[player]) && jr < 6 && (hW = Math.max(ag.gp[player] - jp, hW)), js = ag.gU[player].length, jt = ag.gT[player].length, 30 * ag.gb[player] > aD.ju && jv[player] < 10 && 100 * jt <= js &&
			aE.jw(player, 10), aD.hh ? function(player, hW, jr, jp) {
				var jJ;
				if (ao.it.jN(player, !1) || ao.it.jS(player, !1)) {
					if (!ao.it.jU(player))
						if (ao.it.jT()) k0(player, hW), k1(player, aD.ek, jr);
						else {
							if (ay.k2(aE.k3[jr])) jJ = ao.it.jZ(player);
							else {
								if (ao.it.jW() && ay.k2(aE.k5[jr]) && ao.it.jY(), 6 === jr) return k4(player, hW, ao.it.jl(), jr);
								jJ = ao.it.jc(player)
							}
							k4(player, hW, jJ, jr), k1(player, jJ, jr)
						}
				} else bN.jy.j3(player) || ao.ix.j3(player) || ! function(player, hW, jr, jp) {
					var jm = ao.iv.jm;
					jm[player] = 0;
					var k8 = bg.el[player];
					if (0 !== k8) {
						var k9 = ag.gp[player],
							gb = ag.gb;
						if (player < aD.kA && (hW = k9), !(k9 < gb[player] || 5 === jr && k9 < jp || 4 === jr && k9 < bL.du(jp, 2))) {
							bh.kB(k8);
							for (var en = bO.fI[0], fR = bO.fR, aB = ay.jR(en), f7 = 0; f7 < en; f7++) {
								var f8 = fR[(f7 + aB) % en];
								if (jm[f8]) return b8.kC.kD(player, f8, hW)
							}
							var kE = bN.y.kE;
							for (f7 = 0; f7 < en; f7++)
								if (f8 = fR[(f7 + aB) % en], kE[f8] && f8 !== player) return b8.kC.kD(player, f8, hW)
						}
					}
				}(player, hW, jr, jp)
			}(player, hW, jr, jp) : (!jt || js && (js < jt && !ay.jR(10) || 100 * jt <= js && ay.jR(3) || !ay.jR(8))) && bN.jy.j3(player) || function(player, hW, jr) {
				ao.it.jN(player, !0) || ao.it.jS(player, !0) ? ao.it.jU(player) || (ao.it.jT() ? k0(player, hW) : ay.k2(aE.k3[jr]) ? k4(player, hW, ao.it.jZ(player), jr) : 5 === jr ? k4(player, hW, ao.it.jh(), jr) : (ao.it.jW() && ay.k2(aE
					.k5[jr]) && ao.it.jY(), k4(player, hW, 6 === jr ? ao.it.jl() : ao.it.jc(player), jr))) : ao.ix.j3(player)
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
			750)) : this.hW[aB] <= 4 ? (kI[aB] = 1 + ay.jR(20), 3 === this.hW[aB] ? (kG[aB] = kH[aB] = 500, kJ[aB] = kK[aB] = 1e3) : (kK[aB] = 250 + ay.jR(1501), kJ[aB] = 500 + ay.jR(501), kG[aB] = 300 + ay.jR(201), kH[aB] = 100 + ay.jR(
			201))) : this.hW[aB] <= 5 ? (kJ[aB] = 1e3, kK[aB] = 1e3, kI[aB] = 35 + ay.jR(16), kG[aB] = 300 + ay.jR(201), kH[aB] = 50 + ay.jR(101)) : (kJ[aB] = kK[aB] = 800, kI[aB] = 5, kG[aB] = 10, kH[aB] = 250), kZ(aB)
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

	function ku(player, ks) {
		for (var en = bO.fI[0], fQ = bO.fQ, l6 = -1, l7 = aD.ek, aB = 0; aB < en; aB++) {
			var f3, gL = fQ[aB];
			bs.eg(player, gL) && (f3 = bM.iG(ks, bM.ic(gL)), -1 === l6 || f3 < l6) && (l6 = f3, l7 = gL)
		}
		return l7
	}

	function kw(kt, ks) {
		if (kt === aD.ek) return 0;
		var gU = ag.gU[kt],
			l5 = gU.length;
		if (0 === l5) return 0;
		for (var en = Math.min(l5, 10), l7 = 0, l6 = bM.iG(gU[l7] >> 2, ks), aB = 0; aB < en; aB++) {
			var hf = ay.jR(l5),
				f3 = bM.iG(gU[hf] >> 2, ks);
			f3 < l6 && (l6 = f3, l7 = hf)
		}
		return gU[l7] >> 2
	}

	function l1(player, ks, jJ, l9) {
		var lA;
		(l9 === aD.ek || (lA = bM.ic(jJ), l9 = bM.ic(l9), bM.iG(ks, lA) < bM.iG(ks, l9))) && (kf[player] = jJ)
	}
	this.dd = function() {
		kf.fill(aD.ek)
	}, this.j4 = function() {
		if (bf.k7() % 109 == 9 && !(al.kg < 20) && aD.hh && !(bh.kh() < bL.du(8 * aD.ju, 10))) {
			var ki = bh.kj();
			if (bg.kX[ki]) {
				bh.kk(ki);
				var en = bO.fI[0];
				if (0 !== en)
					for (var g = bO.fR, kl = al.kl, kg = al.kg, km = kf, hf = ay.jR(en), aB = 0; aB < kg; aB++) {
						var hF = kl[aB],
							kn = g[hf];
						bA.g9.ko(hF, kn) && 512 === km[hF] && (km[hF] = kn, hf = (hf + 1) % en)
					}
			}
		}
	}, this.j3 = function(player) {
		var ks, kv, kt, kp = function(player) {
			var jJ = kf[player];
			if (jJ !== aD.ek) {
				if (bA.g9.l8(jJ) && ag.gU[jJ]) return jJ;
				kf[player] = aD.ek
			}
			return aD.ek
		}(player);
		return function(player) {
			for (var l4 = al.kl, l5 = al.kg, en = Math.min(l5, l5 < 17 && 5 === ay.jR(20) ? 1 : 16), gM = ay.jR(l5), fQ = bO.fQ, gU = ag.gU, gG = 0, aB = 0; aB < en; aB++) {
				var gL = l4[(aB + gM) % l5];
				gL !== player && gU[gL].length && (fQ[gG++] = gL)
			}
			bO.fI[0] = gG
		}(player), 0 !== bO.fI[0] && (0 < (kv = kw(kt = ku(player, ks = bM.ij(player)), ks)) && bN.kx.ky(player, bN.kz.l0(kv, ks)) ? (l1(player, ks, kt, kp), !0) : 0 < (kt = function(player, ks) {
			for (var en = bO.fI[0], fQ = bO.fQ, km = kf, gM = 0, aB = 0; aB < en; aB++) {
				var gL = fQ[aB],
					gL = km[gL];
				gL !== aD.ek && bA.g9.l8(gL) && player !== gL && bs.eg(player, gL) && (fQ[gM++] = gL)
			}
			return 0 !== (bO.fI[0] = gM) ? kw(ku(player, ks), ks) : 0
		}(player, ks)) && bN.kx.ky(player, bN.kz.l0(kt, ks)) ? (l1(player, ks, ac.ef(kt << 2), kp), !0) : !!(0 < (kv = kw(kp, ks)) && bN.kx.ky(player, bN.kz.l0(kv, ks))))
	}
}

function iy() {
	function lE(player) {
		for (var fD = ag.fD[player], en = fD.length, fE = Math.max(bL.du(en, 12), 1), ep = ac.ep, e7 = ay.jR(en), aB = 0; aB < en; aB += fE)
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

	function lJ(player, lL) {
		var hW = bA.g9.lM(player, aE.kP[aE.hW[player]]);
		ag.gF[player].push(lL.eR), ad.jG(player, hW, lL.gL), aF.jH(player, !0)
	}
	this.j3 = function(player) {
		return !!bS.eS(bS.eT) && !!aD.data.passableMountains && 0 !== ag.fD[player].length && function(player) {
			var lD = lE(player);
			if (null === lD) return !1;
			! function(player) {
				for (var kl = al.kl, kg = al.kg, en = Math.min(kg, 12), gM = ay.jR(kg), fQ = bO.fQ, fD = ag.fD, gG = 0, aB = 0; aB < en; aB++) {
					var gL = kl[(aB + gM) % kg];
					gL !== player && fD[gL].length && bs.eg(player, gL) && (fQ[gG++] = gL)
				}
				bO.fI[0] = gG
			}(player);
			var lG = function(eU) {
				for (var en = bO.fI[0], fQ = bO.fQ, aB = 0; aB < en; aB++) {
					var lL = lE(fQ[aB]);
					if (null !== lL && lL.id === eU) return lL
				}
				return null
			}(lD.id);
			return null !== lG ? (lJ(player, lG), !0) : function(player, eU) {
				var en = ao.il.lK;
				if (0 !== en)
					for (var eR = ao.il.eK[ay.jR(en)] << 2, ep = ac.ep, eq = ay.jR(4);;) {
						if (eR += ep[eq], ac.es(eR)) {
							if (ac.eV(eR) === eU) return lJ(player, {
								eR: eR,
								gL: aD.ek
							}), !0;
							break
						}
						if (!ac.ee(eR)) break
					}
				return !1
			}(player, lD.id)
		}(player)
	}
}

function ip() {
	this.j3 = function(player) {
		return bN.kx.ky(player, function(player) {
			var en = ao.il.lK;
			if (0 === en) return -1;
			for (var l5 = Math.min(en, ao.performance.lO ? en : 10), eK = ao.il.eK, jQ = bL.du(ay.random() * en, ay.value(100)), e = jQ + l5, lP = ay.ik(ag.ie[player], ag.ig[player]), lQ = ay.ik(ag.ih[player], ag.ii[player]), l7 = -1,
					f3 = bM.iH(0, 0, bS.ey, bS.ez), aB = jQ; aB < e; aB++) {
				var gM = aB % en,
					lR = bM.f5(lP, lQ, eK[gM]);
				lR < f3 && (f3 = lR, l7 = gM)
			}
			return -1 !== l7 ? function(eZ, lP, lQ) {
				var h2 = bM.ev(eZ),
					h4 = bM.ex(eZ),
					i7 = lP - h2,
					iA = lQ - h4;
				Math.abs(i7) >= Math.abs(iA) ? (iA = 0, i7 = Math.sign(i7)) : (i7 = 0, iA = Math.sign(iA));
				i7 === iA && (i7 = 1);
				for (;;) {
					if (h2 += i7, h4 += iA, !bM.fA(h2, h4)) break;
					if (eZ = bM.fB(h2, h4), ac.i1(bM.ed(eZ))) return eZ
				}
				return -1
			}(eK[l7], lP, lQ) : -1
		}(player))
	}
}

function j0() {
	this.j3 = function(player) {
		var lT = function(player) {
			for (var lW = bN.lW.lY(), en = lW.length, l5 = Math.min(en, 32), hf = ay.jR(en), aB = 0; aB < l5; aB++) {
				var lT = (aB + hf) % en,
					lV = lW[lT],
					iE = lV[0],
					iF = lV[lV.length - 1];
				if (bN.kz.lZ(player, iE) && bN.kz.la(player, iF)) return lT;
				if (bN.kz.lZ(player, iF) && bN.kz.la(player, iE)) return 0 <= (lT = bN.lW.lb(iF, iE)) ? lT : bN.lW.lc() ? -1 : bN.lW.ld(bN.lW.le(lV))
			}
			return -1
		}(player);
		return -1 !== lT && (lT = bN.lW.get(lT), !bN.kz.lX(player, lT)) && (bO.g[0] = lT, !0)
	}
}

function is() {
	this.lO = 0, this.dd = function() {
		this.lO = 0
	}, this.j3 = function() {
		if (!this.lO && bf.k7() % 30 == 7 && bA.g9.lh(80) && (ao.performance.lO = 1)) {
			if (aD.hh) {
				var ki = bh.kj();
				if (bg.kX[ki]) {
					bh.kB(ki);
					var g = bO.fR,
						en = bO.fI[0];
					if (0 !== en)
						for (var lk = Math.min(100 + 10 * (en - 1), 400), aB = 0; aB < en; aB++) aE.ke(g[aB], lk)
				}
			}
			aE.ke(ll[0], 100)
		}
	}
}

function im() {
	var lm = 0,
		ln = 0,
		lo = 300,
		lp = 300,
		lq = 0;
	this.lK = 0, this.eK = new Uint32Array(512), this.dd = function() {
		ln = lm = 0, this.lK = 0, lq = 0
	}, this.j3 = function() {
		if (function() {
				var en = ao.il.lK;
				if (0 === en) return 1;
				var eK = ao.il.eK;
				if (bf.k7() % 35 == 6) {
					for (var aB = en - 1; 0 <= aB; aB--) ac.ee(eK[aB] << 2) || (en--, eK[aB] = eK[en]);
					ao.il.lK = en
				}
				return en < eK.length
			}())
			if (lo <= lm) {
				var lu = ao.il.lK;
				if (lu) {
					if (bf.k7() % 350 != 1) return;
					if (lq !== lu) return void(lq = lu);
					if (!bA.g9.jX(ll[0])) return
				} else if (bf.k7() % 12 != 8) return;
				bA.g9.lv() || ao.il.dd()
			} else {
				var aB, i = bS.ey,
					lw = i - 2,
					lu = lw * (bS.ez - 2),
					lx = lo,
					eK = ao.il.eK,
					l5 = ao.il.lK,
					ly = eK.length,
					gM = Math.min(ln + lx * ((1 + 19 * ao.performance.lO) * lp), lu);
				for (aB = ln; aB < gM; aB += lx) {
					var eR = 4 * (aB % lw + (bL.du(aB, lw) + 1) * i + 1);
					if (ac.ee(eR) && (eK[l5] = eR >> 2, ++l5 === ly)) {
						aB += lx;
						break
					}
				}(ln = aB) >= lu && (ln = ++lm), ao.il.lK = l5
			}
	}
}

function j2() {
	this.j3 = function() {
		if (bf.k7() % 51 == 45)
			for (var en = bN.y.m0, m1 = bN.y.m1, m2 = bN.y.m2, m3 = bN.y.m3, m4 = bN.y.m4, kQ = aE.kQ, hW = aE.hW, aB = 0; aB < en; aB++) {
				var lV, player, m8, m5 = m1[aB];
				m5 % 64 == 6 || (lV = m2[aB], (player = bN.kz.m6(lV[lV.length - 1])) < 0) || !bA.g9.ko(player, m4[aB] >> 3) || ay.jR(1e3) >= kQ[hW[player]] || ! function(mC, lV) {
					for (var en = lV.length - 1, mD = bN.y.mE[mC], f3 = 0, aB = mD + 1; aB < en; aB++) f3 += bM.iD(lV[aB], lV[aB + 1]);
					return (f3 += bM.iD(bM.iV(bN.y.mF[mC]), lV[mD + 1])) <= 60
				}(aB, lV) || (m8 = m3[aB], 64 <= m5 && bN.m9.mA(player, m8)) || function(player, lV, m8, mC, m5) {
					bN.mG.mH(player) && bA.g9.mI(player, aE.kM[aE.hW[player]], 32, 0) && (bN.y.m1[mC] = 64 + m5 % 64, bN.m9.jG(m8, bN.y.mJ), bO.g[0] = bN.lW.le(lV), bO.fP[1] = 6, bA.g9.mK(player), bN.y.mL(player))
				}(player, lV, m8, aB, m5)
			}
	}
}

function mM() {
	aN.j3(), af.j3(), aW.mN(), b0.y.j3()
}

function mO() {
	b1.j3(), aG.j3(), an.j3(), ae.j3(), b4.j3(), aF.j3(), ao.j3(), bN.y.j3(), al.mP(), aV.j3(), az.j3(), bV.j3(), af.j3(), af.mQ(), aW.j3(), bP.j3(), aU.j3(), aP.j3(), aN.j3(), b5.j3(), aR.j3(), aw.j3(), bd.j3(), bh.j3(), b0.y.j3(), b0.mR.j3(), t
	.j3(), b9.j3(), bf.j3()
}

function mS() {
	aH.j3(), aX.j3(), aQ.j3(), av.j3(), bC.j3(), ax.mT()
}

function mU() {
	aV.mV(!1), aP.mV(), aW.mV(!1), aU.mV(), aR.mV(), aw.mV(), af.mV(!1), bh.mW()
}

function mX() {
	af.mV(!1) && (bf.dl = !0), b0.y.j3()
}

function c6() {
	var mY, mZ, ma;

	function mc(me) {
		for (var aB = mY - 1; 0 <= aB; aB--) 0 === ma[mZ[aB]] && ag.gb[mZ[aB]] >= me && fr(mZ[aB])
	}

	function mb(player) {
		var dt;
		64 === ma[player] ? ma[player] = 6 : (dt = ag.gb[player], ma[player] = dt < 1e3 ? 3 : dt < 1e4 ? 2 : dt < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		mY = 0, mZ = new Uint16Array(aD.ek), ma = new Uint8Array(aD.ek)
	}, this.j3 = function() {
		for (var aB = mY - 1; 0 <= aB; aB--) 64 === ma[mZ[aB]] ? mb(mZ[aB]) : 0 == ma[mZ[aB]]-- && (mb(mZ[aB]), fr(mZ[aB]));
		16e4 <= ag.gb[ll[0]] && (mc(16e4), 3e5 <= ag.gb[ll[0]]) && mc(3e5), bA.g9.l8(aD.eX) && (bd.mf[7] = Math.max(ag.gb[aD.eX], bd.mf[7]))
	}, this.gB = function(player) {
		for (var f6, aB = mY - 1; 0 <= aB; aB--)
			if (player === mZ[aB]) {
				for (mY--, f6 = aB; f6 < mY; f6++) mZ[f6] = mZ[f6 + 1];
				return
			}
	}, this.jH = function(player, mg) {
		for (var aB = mY - 1; 0 <= aB; aB--)
			if (player === mZ[aB]) return;
		mZ[mY++] = player, ma[player] = mg ? 2 : 64
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
			if (0 === ag.mj[jy[aB]]) {
				f6 = void 0;
				var f6 = aB;
				size--, jy[f6] = jy[size]
			} else aE.j3(jy[aB])
	}, this.mi = function(gL) {
		jy[size++] = gL
	}
}

function c8() {
	var ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my = !1,
		mz = !1;

	function n0(eF) {
		mw = bf.eM, mn = mo = mm = 0, mp = (mx = 33) / eF, ml = 1 / (eF / mx / 4), mq = (h.i / 2 + iO) / hy, mr = (h.j / 2 + iP) / hy, ms = hy
	}

	function n7(aB) {
		var n9; - 1 !== aB && (aB = bM.iV(bN.y.mF[aB]), n9 = bM.ev(aB) - 15, aB = bM.ex(aB) - 15, aH.n3(n9, aB, 29 + n9, 29 + aB))
	}

	function nK(eC) {
		Math.abs(Math.log(mv / ms)) < .125 && (mv = eC * ms)
	}

	function nJ(n9, nA, nM, nN) {
		mt = (n9 + nM + 1) / 2, mu = (nA + nN + 1) / 2;
		nM = h.i / (nM - n9 + 1), n9 = h.j / (nN - nA + 1);
		mv = .9 * (nM < n9 ? nM : n9)
	}
	this.n1 = function() {
		return my
	}, this.n2 = function() {
		n0(1), this.n3(0, 0, bS.ey - 1, bS.ez - 1), aD.hB || aD.gw || this.n4(aD.eX, 3e3, !0, .3)
	}, this.n5 = function(player, n6) {
		n7(bN.kz.n8(player, n6))
	}, this.n4 = function(player, eF, nB, zoom) {
		aD.nC || my && !nB && mz || (0 === ag.gb[player] ? n7(bN.kz.nD(player)) : (aS.nE = !1, mz = nB, n0(eF), function(player) {
			mt = (ag.ie[player] + ag.ig[player] + 1) / 2, mu = (ag.ih[player] + ag.ii[player] + 1) / 2
		}(player), function(zoom, player) {
			var i7 = ag.ig[player] - ag.ie[player] + 1,
				player = ag.ii[player] - ag.ih[player] + 1,
				f6 = h.i / i7,
				f7 = h.j / player,
				f6 = (mv = f6 < f7 ? f6 : f7, 0 !== zoom ? zoom : i7 < 20 && player < 20 ? .5 : .9);
			mv *= f6, nK(7 / 8)
		}(zoom, player), my = !0, ar.nH()))
	}, this.nI = function(eF) {
		aD.gw || aD.nC || (aS.nE = !1, mz = !1, n0(eF), nJ(0, 0, bS.ey - 1, bS.ez - 1), nK(7 / 8), my = !0, ar.nH())
	}, this.n3 = function(n9, nA, nM, nN) {
		my = !1, nJ(n9, nA, nM, nN), hy = mv, aS.nO(mt, h.i / 2), aS.nP(mu, h.j / 2), ba.nQ(), bf.dl = !0
	}, this.nR = function() {
		return !(my && mz || (my = !1))
	}, this.j3 = function() {
		var nU, nV, eq, nY;
		my && (mm < .5 ? mo < mp && (mo += mp * ml, mn = mm) : 1 - mn < mm && (mo = (mo -= mp * ml) < mp * ml ? mp * ml : mo), mw = mw >= bf.eM ? bf.eM - 1 : mw, eq = bf.eM - mw, mm = 1e3 < eq || 1 < (mm += mo * eq / mx) ? 1 : mm, mw = bf.eM,
			eq = hy, nU = iO, nV = iP, eq = (hy = ms * Math.pow(mv / ms, mm)) / eq, nY = 1 - (ms * Math.pow(mv / ms, 1 - mm) - ms) / (mv - ms), aS.nO(mq + nY * (mt - mq), h.i / 2), aS.nP(mr + nY * (mu - mr), h.j / 2), af.zoom(eq, (nU * eq -
				iO) / (1 - eq), (nV * eq - iP) / (1 - eq)), ba.nQ(), 1 <= mm && (my = !1, bb.nZ = !0), bf.dl = !0)
	}
}

function c0() {
	var f8 = bA.color;
	this.na = f8.nb(0, 0, 0), this.nc = f8.nd(0, 0, 0, .7), this.ne = f8.nd(0, 0, 0, .5), this.nf = f8.nd(0, 0, 0, .85), this.ng = f8.nd(0, 0, 0, .75), this.nh = f8.nd(0, 0, 0, .6), this.ni = f8.nd(0, 0, 0, .35), this.nj = f8.nb(255, 255, 255), this
		.nk = f8.nd(255, 255, 255, .3), this.nl = f8.nd(255, 255, 255, .6), this.nm = f8.nd(255, 255, 255, .4), this.nn = f8.nd(255, 255, 255, .25), this.no = f8.nd(255, 255, 255, .85), this.np = f8.nd(255, 255, 255, .75), this.nq = f8.nd(255, 255,
			255, .15), this.nr = f8.nd(255, 255, 255, .11), this.ns = f8.nb(128, 128, 128), this.nt = f8.nd(64, 64, 64, .75), this.nu = f8.nd(88, 88, 88, .83), this.nv = f8.nd(60, 60, 60, .85), this.nw = f8.nd(80, 60, 60, .85), this.nx = f8.nb(170,
			170, 170), this.ny = f8.nb(200, 235, 245), this.nz = f8.nb(30, 255, 30), this.o0 = f8.nb(0, 200, 0), this.o1 = f8.nb(128, 255, 128), this.o2 = f8.nd(10, 65, 10, .75), this.o3 = f8.nd(0, 255, 0, .6), this.o4 = f8.nd(0, 255, 0, .5), this
		.o5 = f8.nd(0, 200, 0, .5), this.o6 = f8.nd(0, 100, 0, .75), this.o7 = f8.nd(0, 60, 0, .8), this.o8 = f8.nd(0, 255, 0, .3), this.o9 = f8.nd(0, 180, 0, .6), this.oA = f8.nd(0, 120, 0, .85), this.oB = f8.nb(0, 120, 0), this.oC = f8.nd(0, 70, 0,
			.85), this.oD = f8.nb(190, 230, 190), this.oE = f8.nb(0, 255, 0), this.oF = f8.nb(255, 120, 120), this.oG = f8.nb(255, 160, 160), this.oH = f8.nb(255, 70, 70), this.oI = f8.nb(230, 0, 0), this.oJ = f8.nd(220, 0, 0, .6), this.oK = f8.nd(
			255, 100, 100, .8), this.oL = f8.nd(100, 0, 0, .85), this.oM = f8.nd(60, 0, 0, .85), this.oN = f8.nd(200, 0, 0, .6), this.oO = f8.nd(120, 0, 0, .85), this.oP = f8.nb(255, 70, 10), this.oQ = f8.nb(230, 190, 190), this.oR = f8.nb(255, 0,
		0), this.oS = f8.nb(255, 0, 255), this.oT = f8.nd(60, 0, 60, .85), this.oU = f8.nd(0, 60, 60, .85), this.oV = f8.nd(10, 60, 60, .9), this.oW = f8.nd(0, 96, 96, .75), this.oX = f8.nb(0, 255, 255), this.oY = f8.nb(160, 160, 255), this.oZ = f8
		.nd(0, 40, 90, .75), this.oa = f8.nd(0, 0, 255, .6), this.ob = f8.nb(200, 200, 255), this.oc = f8.nd(50, 50, 255, .83), this.od = f8.nb(255, 120, 100), this.oe = f8.nd(255, 255, 0, .5), this.og = f8.nd(255, 255, 150, .2), this.oh = f8.nb(255,
			255, 0), this.oi = f8.nb(255, 255, 200), this.oj = f8.nd(200, 200, 0, .6), this.ok = f8.nd(140, 120, 0, .75), this.ol = f8.nd(180, 160, 40, .75), this.om = f8.nd(70, 50, 20, .85), this.on = f8.nd(30, 30, 0, .85), this.oo = f8.nd(60, 60,
			0, .85), this.op = f8.nb(255, 255, 100), this.oq = f8.nd(255, 140, 0, .75), this.or = f8.nd(70, 40, 0, .85), this.os = f8.nb(220, 120, 0), this.ot = f8.nd(255, 200, 80, .85), this.ou = f8.nb(255, 150, 120), this.ov = f8.nd(0, 0, 0, 0),
		this.ow = f8.nd(255, 255, 255, 0), this.ox = f8.nd(254, 254, 254, 0)
}

function cy() {
	this.hD = new oy, this.g9 = new oz, this.p0 = new p1, this.p2 = new p3, this.kC = new p4
}

function oy() {
	this.hE = function(eZ) {
		aD.kU ? b8.p0.hE(aD.eX, eZ) : b0.p5.p6(eZ)
	}, this.hK = function(iN, jJ) {
		aD.kU ? b8.p0.hK(aD.eX, iN, jJ) : b0.p5.p7(iN, jJ)
	}, this.p8 = function(iN, p9) {
		aD.kU ? b8.p0.pA(aD.eX, iN, p9) : b0.p5.pB(iN, p9)
	}, this.hP = function(iN, eZ) {
		eZ = (eZ << 3) + bO.fP[6];
		aD.kU ? b8.p0.hP(aD.eX, iN, eZ) : bN.mG.mH(aD.eX) && b0.p5.pD(iN, eZ)
	}, this.hS = function(iN) {
		849 === iN && (iN = 850);
		var n6 = bO.fP[3];
		aD.kU ? b8.p0.hS(aD.eX, iN, n6) : bN.hQ.pE(aD.eX, n6) && b0.p5.pF(iN, n6)
	}, this.pG = function(n6) {
		aD.kU ? b8.p0.pG(aD.eX, n6) : b0.p5.pF(849, n6)
	}, this.pH = function(jJ) {
		aD.kU ? b8.p0.pH(aD.eX, jJ) : b0.p5.pI(jJ)
	}, this.pJ = function(pK) {
		aD.kU ? b8.p0.pL(aD.eX, pK) : b0.p5.pM(pK)
	}, this.hb = function(pN) {
		aD.kU ? b8.p0.hb(aD.eX, pN) : b0.p5.pO(pN)
	}, this.pP = function() {
		aD.kU ? b8.p0.pP(aD.eX) : b0.p5.pQ()
	}, this.hY = function() {
		aD.kU ? b8.p0.hY(aD.eX) : b0.p5.pI(513)
	}, this.hG = function(iN, eZ, jJ) {
		aD.kU ? b8.p0.hG(aD.eX, iN, eZ, jJ) : b0.p5.pR(iN, eZ, jJ)
	}
}

function p4() {
	this.kD = function(player, p9, hW) {
		bA.g9.pS(player, hW, p9) && (ae.p8(player, p9), !bA.g9.jX(p9)) && ao.iv.jm[p9] && ao.iv.jm[p9]--
	}, this.pT = function(player, p9, hW) {
		bA.g9.pU(hW, p9) ? an.jG(p9, bO.fK[0]) && (bq.pV(player, p9, bO.fK[0], 1), bA.g9.gC(p9, bO.fK[0]), bd.pW(player, p9), af.pX(p9, bO.fK[0])) : bd.gD(player, hW, 12)
	}
}

function oz() {
	this.pY = function(pK, player) {
		aN.pJ(aD.eX, player, pK), b0.p5.pZ(pK, player)
	}, this.pa = function(player) {
		aN.pb(player, 0), b0.p5.pc(player)
	}, this.pd = function(pe, player) {
		aN.pf(pe, player), b0.p5.pg(pe, player)
	}, this.ph = function() {
		aD.kU || aD.gw || b0.pi.ph()
	}
}

function p3() {
	this.j3 = function(aC) {
		var id, fW, nR;
		for (bH.dd(aC), bH.e8 += 2, nR = 8 * bH.size; bH.e8 + 8 <= nR;) id = bH.pj(4), fW = bH.pj(9), 0 === id ? this.pk(id, fW, bH.pj(22)) : 1 === id ? this.pk(id, fW, bH.pj(10), bH.pj(10)) : 2 === id ? this.pk(id, fW, bH.pj(10), bH.pj(9)) :
			3 === id ? this.pk(id, fW, bH.pj(10), bH.pj(27)) : 4 === id ? this.pk(id, fW, bH.pj(10), bH.pj(16)) : 5 === id || 6 === id ? this.pk(id, fW, bH.pj(10)) : 7 === id ? this.pk(id, fW, bH.pj(1)) : 10 === id ? this.pk(id, fW, bH.pj(20), bH
				.pj(22)) : this.pk(id, fW)
	}, this.pl = [], this.pm = function() {
		for (var po = 0, pp = 0, pq = 0, pr = 0, ps = 0, pt = 0, aB = 0; aB < 512; aB++) po += ag.mj[aB], pp += ag.gb[aB], pq += ag.gp[aB], pr += bN.y.kE[aB];
		ps += bN.y.m0, pt += al.kg, this.pl.push(pq % 1073741824 * 4 + (po + pp + pr + ps + pt) % 4)
	}, this.pk = function(id, fW, fY, fa) {
		0 === id ? b8.p0.hE(fW, fY) : 1 === id ? b8.p0.hK(fW, fY, fa) : 2 === id ? b8.p0.pA(fW, fY, fa) : 3 === id ? b8.p0.hP(fW, fY, fa) : 4 === id ? b8.p0.hS(fW, fY, fa) : 5 === id ? b8.p0.pH(fW, fY) : 6 === id ? b8.p0.pL(fW, fY) : 7 === id ?
			b8.p0.hb(fW, fY) : 8 === id ? b8.p0.pP(fW) : 9 === id ? b8.p0.pu(fW) : 10 === id && b8.p0.hG(fW, fY >> 10, fa, fY % 1024)
	}
}

function p1() {
	this.hE = function(player, eZ) {
		bA.g9.gy(0) && bA.g9.gz(player) && bM.iS(eZ) && (b9.pv.pw(0, player, eZ), aD.px.jG(player, eZ))
	}, this.hK = function(player, iN, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.py(player, jJ) && bA.g9.mI(player, iN, 12, 0) && bA.g9.pz(player, jJ) && ((jJ = ad.jV(player, bO.ej[0])) || ad.jo(player)) && (ag.q0[player]++, b9.pv.pw(1, player, iN, bO.ej[0]), ao.it.j8(player,
			jJ)) && (bA.g9.mK(player), bd.q1(player, iN), ao.it.jE(player))
	}, this.pA = function(player, iN, p9) {
		bA.g9.gy(1) && bA.g9.gz(player) && aD.hh && bA.g9.py(player, p9) && bA.g9.q2(player, p9) && bA.g9.pS(player, bA.g9.iM(player, iN), p9) && an.jG(p9, bO.fK[0]) && (b9.pv.pw(2, player, iN, p9), ae.p8(player, p9))
	}, this.hP = function(player, iN, pC) {
		bO.fP[1] = 7 & pC;
		var eZ = pC >> 3;
		bA.g9.gy(1) && bA.g9.gz(player) && bM.iS(eZ) && bN.mG.mH(player) && bN.mG.q3(eZ) && bA.g9.mI(player, iN, 32, 0) && bN.kx.q4(player, eZ, 1) && (bd.q5(player), b9.pv.pw(3, player, iN, pC), bA.g9.mK(player), bl.q6.hP(player), bN.y.mL(
			player))
	}, this.hS = function(player, iN, n6) {
		849 === iN ? this.pG(player, n6) : bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.mI(player, iN, 32, 0) && bN.hQ.q7(player, n6) && (bd.q5(player), b9.pv.pw(4, player, iN, n6), bA.g9.mK(player), bl.q6.hS(player), bN.y.mL(player))
	}, this.pG = function(player, n6) {
		bA.g9.gy(1) && bA.g9.gz(player) && bN.q8.j3(player, n6) && b9.pv.pw(4, player, 849, n6)
	}, this.pH = function(player, jJ) {
		513 === jJ ? this.hY(player) : bA.g9.gy(1) && bA.g9.gz(player) && (jJ = Math.min(jJ, aD.ek), ad.jV(player, jJ)) && (b9.pv.pw(5, player, jJ), ad.q9(player, jJ))
	}, this.pL = function(player, pK) {
		(bA.g9.gy(1) || bA.g9.gy(2)) && bA.g9.gz(player) && (pK = bL.hv(pK, 0, 1023), b9.pv.pw(6, player, pK), af.qA(player, 0, pK))
	}, this.hb = function(player, pN) {
		aw.ha(player) && (b9.pv.pw(7, player, pN), aw.qB(player, pN))
	}, this.pP = function(player) {
		(bA.g9.gy(0) || bA.g9.gy(1)) && bA.g9.gz(player) && aM.qC(player) && (b9.pv.pw(8, player), bQ.pP(player))
	}, this.pu = function(player) {
		b9.pv.pw(9, player), bQ.pu(player)
	}, this.hY = function(player) {
		aw.hc(player) && (b9.pv.pw(5, player, 513), aw.hY(player))
	}, this.hG = function(player, iN, eZ, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.py(player, jJ) && bA.g9.pz(player, jJ) && bM.iS(eZ) && am.eO.eh(player, eZ) && (ad.jV(player, bO.ej[0]) || ad.jo(player)) && (b9.pv.pw(10, player, (iN << 10) + bO.ej[0], eZ), jJ = bA.g9.lM(player,
			iN), ag.gF[player].push(bO.eo[0]), ad.jG(player, jJ, bO.ej[0]), aF.jH(player, !0), bd.qD(player))
	}
}

function qE() {
	var qG;
	this.qF = [], this.qG = document.createElement("div"), this.qH = function(qI, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qI, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.qG.appendChild(
			title), title
	}, this.qJ = function(qI, marginBottom) {
		var qK = document.createElement("p");
		return qK.textContent = qI, qK.style.fontSize = "0.75em", qK.style.lineHeight = "1.2em", qK.style.marginBottom = marginBottom || "0", this.qG.appendChild(qK), qK
	}, this.qL = function(qI) {
		var qM = document.createElement("p");
		return qM.textContent = qI, qM.style.fontSize = "1em", qM.style.marginBottom = "0", qM.style.whiteSpace = "pre-wrap", qM.style.overflowWrap = "break-word", this.qG.appendChild(qM), qM
	}, this.qN = function(qO, fontSize) {
		var qG = document.createElement("div");
		return qG.innerHTML = qO, qG.style.fontSize = fontSize || "1em", qG.style.lineHeight = "1.2em", this.qG.appendChild(qG), qG
	}, this.qP = function(qQ) {
		for (var qR = qQ.qR, en = qR.length, aB = 0; aB < en; aB++) this.qG.appendChild(qR[aB])
	}, this.qS = function(qT) {
		return this.qF.push(qT), this.qG.appendChild(qT.e), qT
	}, this.resize = function() {
		for (var en = this.qF.length, aB = 0; aB < en; aB++) this.qF[aB].resize && this.qF[aB].resize()
	}, (qG = this.qG).style.position = "absolute", qG.style.height = "auto", qG.style.padding = "0.5em"
}

function qU(qV, qW) {
	var qG = document.createElement("div");

	function qe() {
		var aB, qf, j, gM, eq, qa = h.k * qG.offsetWidth,
			qg = new Float64Array(function(qa) {
				var i = .25 * bA.qb.qc(.6) * h.hx;
				return Math.max(Math.floor(qa / i), 1)
			}(qa)),
			qh = bc.qh,
			qi = (qa - (qg.length + 1) * bc.gap) / (qg.length * h.k);
		for (qg.fill(qh), aB = 0; aB < qW.length; aB++) qf = (eq = qW[aB].qG).style, j = bA.qj.min(qg), gM = qg.indexOf(j), qf.top = bA.qb.qk(j), qf.left = bA.qb.qk(qh + gM * (qi + qh)), qf.width = bA.qb.qk(qi), bA.qb.ql(eq, 5), qg[gM] += eq
			.offsetHeight + 3 * qh;
		qG.style.height = bA.qb.qk(bA.qj.max(qg) - 2 * qh)
	}
	this.qX = qG, this.qY = qW, this.resize = function() {
		var aB;
		for (aB = 0; aB < qW.length; aB++) qW[aB].resize();
		qe(), qe()
	}, qG.style.width = "100%", qG.style.maxWidth = "100%", qV.style.lineHeight = "1.5em", qV.style.overflowX = "hidden", qV.style.overflowY = "auto";
	for (var aB = 0; aB < qW.length; aB++) qG.appendChild(qW[aB].qG);
	qV.appendChild(qG)
}

function w(qm, qn, qo, qp, qq) {
	var self, qr = document.createElement("button");

	function qy() {
		var r4;
		bJ.r3() || (r4 = bA.color.r5(qo), !1 !== qp && 0 < r4[0] && r4[0] < 255 && r4[0] === r4[1] && r4[0] === r4[2]) || (qr.style.backgroundColor = bA.color.r6(qo, r4[3] && r4[3] < 120 ? 150 : 50))
	}

	function qx() {
		if (qp) {
			var r4 = bA.color.r5(qo);
			if (r4[0] === r4[1] && r4[0] === r4[2]) return
		}
		qn && ((r4 = qn(this)) ? 2 === r4 && qy() : r8(this))
	}

	function r0() {
		this.style.backgroundColor = qo
	}

	function qz() {
		r8(this)
	}

	function r8(eq) {
		eq.style.backgroundColor = qo, eq.blur()
	}
	this.button = qr, this.qs = qn, this.qt = qo, this.qw = function(r1) {
		r1 = 1.1 - Math.min(.01 * qm.length, .6) + .2 * r1;
		qr.style.fontSize = r1.toFixed(1) + "em"
	}, this.qv = function(f8) {
		f8 ? 1 === f8 ? f8 = bB.nv : 2 === f8 && (qp = 1, f8 = bB.nv) : (qp = 0, f8 = bB.nf), this.qt = qo = f8, qr.style.backgroundColor = f8
	}, self = this, qr.innerHTML = qm, qr.style.color = qq ? bB.oh : bB.nj, qr.style.userSelect = "none", qr.style.outline = "none", qr.style.overflowWrap = "break-word", self.qv(qo), qr.style.border = "none", qr.style.font = "inherit", self.qw(
		0), qr.style.padding = "0em 0.3em", qr.onclick = qx, qr.addEventListener("mouseover", qy), qr.addEventListener("mouseout", qz), qr.addEventListener("focus", qy), qr.addEventListener("blur", r0)
}

function r9(rA, qV) {
	var qG;
	this.resize = function() {
		for (var aB = 0; aB < rA.length; aB++) bA.qb.ql(rA[aB].button);
		qG.style.gap = qG.style.padding = bA.qb.qk(bc.qh)
	}, (qG = document.createElement("div")).style.display = "grid", qG.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qG.style.overflowY = "auto", qG.style.gridAutoRows = "5.3em", qG.style.maxHeight = "100%";
	for (var aB = 0; aB < rA.length; aB++) rA[aB].qw(1), qG.appendChild(rA[aB].button);
	qV.appendChild(qG)
}

function rC(rD, rE, rF) {
	this.eu = 0, this.ew = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qb.qc(rF || .5) * rD[1] * h.hx, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rD[0] / rD[1]), h.i - 2 * bc.gap), this.j = rD[1] * this.i / rD[0], this.eu = bc.gap + rE[0] * (h.i - this.i - 2 * bc.gap), this.ew = bc
			.gap + rE[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rG = function() {
		return this.eu + .5 * this.i
	}
}

function rH(rI, rJ) {
	var rS, self, rK = document.createElement("div"),
		rL = document.createElement("div"),
		rM = document.createElement("div"),
		rN = null,
		rT = (this.rO = new rP({
			value: "",
			e8: -1
		}, 0, rQ, function(e) {
			e.target.value = bA.ra.rb(e.target.value), rN.rZ.textContent = 127 - e.target.value.length
		}), 0),
		rU = 1,
		rV = 0,
		rW = 1048575;

	function rQ() {
		rI(), rN.rZ.textContent = 127
	}

	function rl(rk, qT) {
		qT && (qT.rq = 1, rk.appendChild(bn.rr.transform(qT)))
	}

	function ro(bu) {
		rU ? rK.scrollTop = rK.scrollHeight : bu && (rK.scrollTop = rV)
	}
	this.rc = function(rd) {
			rW = 1048575, rL.textContent = "", rd || this.mW()
		}, this.mW = function() {
			var re = bn.y.rf[0],
				re = bn.y.rh[re],
				ri = re.ri,
				en = ri.length,
				jQ = 1048575 === rW ? 0 : en - (re.rj - rW + 1048575) % 1048575;
			if (rW = re.rj, !(en <= (jQ = Math.max(jQ, 0)))) {
				for (var rk = document.createDocumentFragment(), aB = jQ; aB < en; aB++) rl(rk, bn.kz.rm(ri[aB], bn.kz.rn(ri[aB])));
				rL.appendChild(rk), ro()
			}
		}, this.rp = function(r) {
			var rk = document.createDocumentFragment();
			rl(rk, r), rL.appendChild(rk), ro()
		}, this.show = function(qV) {
			qV.appendChild(rK), qV.appendChild(rM), this.resize(qV)
		}, this.rs = function(qV) {
			t.removeChild(qV, rK), t.removeChild(qV, rM)
		}, this.resize = function(qV) {
			rT = qV ? qV.offsetHeight : rT;
			var qV = bA.qb.ru(.04, .75),
				rv = Math.max(qV, rT - qV),
				rw = h.i / h.k,
				rx = .7 * rw,
				ry = bA.qb.qk(rT - qV - rv),
				rv = (rM.style.height = bA.qb.qk(qV), rK.style.height = bA.qb.qk(rv), h.j > h.i || a0.a1.hw() ? (rM.style.top = ry, rK.style.top = bA.qb.qk(rT - rv), bA.qb.ql(rK, 8)) : (rK.style.top = ry, rM.style.top = bA.qb.qk(rT - qV), bA.qb.ql(
						rK, 2)), this.rO.e.style.width = bA.qb.qk(rx), this.rO.e.style.fontSize = rS.button.style.fontSize = bA.qb.qk(.5 * qV), bA.qb.ql(this.rO.e, 6), rS.button.style.left = bA.qb.qk(rx), rS.button.style.width = bA.qb.qk(rw - rx),
					.385 * qV);
			a0.a1.hw() && (rv *= .8 - .12 * (h.i > h.j)), rL.style.marginLeft = rL.style.marginRight = bA.qb.qk(.5 * rv), rL.style.fontSize = bA.qb.qk(rv), ro(1)
		}, (self = this).rO.e.rX = 127, rK.style.position = "absolute", rK.style.left = "0", rK.style.width = "100%", rK.style.overflowX = "hidden", rK.style.overflowY = "auto", rK.style.font = "inherit", rK.style.backgroundColor = bB.nh, rK
		.addEventListener("scroll", function() {
			rV = rK.scrollTop, rU = rV < rK.scrollHeight - rK.clientHeight - 2 ? 0 : 1
		}), rL.style.font = "inherit", rM.style.position = "absolute", rM.style.left = "0", rM.style.width = "100%", self.rO.e.setAttribute("placeholder", L(13)), self.rO.e.style.position = "absolute", self.rO.e.style.top = "0", self.rO.e.style
		.left = "0", self.rO.e.style.height = "100%", self.rO.e.style.backgroundColor = bB.ne, self.rO.e.style.textAlign = "center", (rS = new w(L(14), rQ)).button.top = "0", rS.button.style.position = "absolute", rS.button.style.height = "100%", rS
		.qv(bB.ow), rN = new rY("127", rS.button, 1, 1), rK.appendChild(rL), rM.appendChild(self.rO.e), rM.appendChild(rS.button)
}

function s0(s1, qm, s2) {
	function click() {
		var value = 1 - s1.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qm, void 0 !== s1.e8 ? bj.s3.s4(s1.e8, value) : s1.value = value, s2 && s2(value)
	}
	var e;
	qm = qm || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (s1.value ? "🟩 " : "⬜ ") + qm, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function s5(qV, qO) {
	var qG = document.createElement("div");
	this.qX = qG, this.resize = function() {
		qG.style.padding = bA.qb.qk(bc.qh), qG.style.lineHeight = bA.qb.qk(bA.qb.ru(.035))
	}, qV.style.overflowX = "hidden", qV.style.overflowY = "auto", qG.innerHTML = qO, qV.appendChild(qG)
}

function s6(s7) {
	var qG = document.createElement("div");
	this.e = qG, this.s8 = s7, this.resize = function() {
		for (var en = s7.length, aB = 1; aB < en; aB++) bA.qb.ql(s7[aB], 4)
	};
	var aB, en = s7.length;
	for (qG.style.width = "100%", qG.style.height = "2.7em", qG.style.marginTop = "0.6em", qG.style.border = "inherit", aB = 0; aB < en; aB++) s7[aB].style.verticalAlign = "top", s7[aB].style.width = (100 / en).toFixed(2) + "%", s7[aB].style.height =
		"100%", s7[aB].style.fontSize = "0.75em", qG.appendChild(s7[aB])
}

function s9(sA, qo, sB) {
	this.qG = document.createElement("div"), this.rA = sA;
	var sC = 0;
	this.resize = function(qV, sE) {
		var en = sA.length;
		if (!sB)
			for (var aB = 1; aB < en; aB++) bA.qb.ql(sA[aB].button, 4);
		for (var sF = 0, aB = 0; aB < en; aB++) sF += sA[aB].button.offsetWidth;
		if (qV && (sC = qV.offsetWidth), sE && sF < sC)
			for (aB = 0; aB < en; aB++) sA[aB].button.style.width = (100 * sA[aB].button.offsetWidth / sF).toFixed(2) + "%";
		else
			for (aB = 0; aB < en; aB++) sA[aB].button.style.width = "auto";
		sE || this.resize(qV, 1)
	};
	var sD = this;
	sD.qG.style.height = sD.qG.style.maxHeight = "100%";
	for (var aB = 0; aB < sA.length; aB++) sA[aB].qv(qo), sA[aB].button.style.height = "100%", sA[aB].button.style.padding = "0.0em 0.9em", sD.qG.appendChild(sA[aB].button)
}

function sG() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qb.ql(this.e, 8, bB.ns)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sH() {
	var sL, sM, sI = document.createElement("div"),
		sJ = 0,
		sK = 0;
	this.show = function(eu, ew, qI, sN, sO) {
		if (sJ) {
			if (!sN) return;
			this.rs()
		}
		eu === ew && -1 === eu ? (eu = sL, ew = sM) : (sL = eu, sM = ew), sO || (sK = sN), sJ = 1;
		sO = h.i / h.k, sI.style.whiteSpace = "pre", sI.textContent = qI, bA.qb.ql(sI, 5), sI.style.font = bA.qb.sQ(0, bA.qb.ru(.015)), sI.style.padding = "0.3em 0.6em", sI.style.left = eu + "px", sI.style.top = "0px", document.body.appendChild(
			sI), sN = eu + sI.offsetWidth - sO;
		0 < sN && (sI.style.left = (qI = eu - sN) + "px", qI < 5) && (sI.style.whiteSpace = "pre-wrap"), sI.style.top = ew - sI.offsetHeight + sK * bc.sS + "px"
	}, this.rs = function(sT) {
		if (sJ) {
			if (sT && sK) return 0;
			sJ = 0, t.removeChild(document.body, sI)
		}
		return 1
	}, sI.style.position = "absolute", sI.style.backgroundColor = bB.nf, sI.style.color = bB.nj, sI.style.pointerEvents = "none", sI.style.zIndex = "5", sI.style.maxWidth = "100%"
}

function rP(sU, type, sV, sW) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sX++, e.value = sU.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.nj, e.style.backgroundColor = bB.nc, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sY++
		}), e.addEventListener("blur", function() {
			h.sY--, -1 !== sU.e8 && bj.s3.s4(sU.e8, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sU.e8 && bj.s3.s4(sU.e8, e.value), sV ? sV() : e.blur())
		}), sW && e.addEventListener("input", function(qT) {
			sW(qT)
		})
}

function sZ(qV, data) {
	var en = data.sa.length,
		sb = document.createElement("div"),
		sc = document.createElement("div"),
		sd = document.createElement("div"),
		se = new Array(en),
		qW = new Array(en),
		sf = new Array(data.sg.length),
		sh = bA.color.nd(70, 70, 0, .35);

	function r6() {
		this.style.backgroundColor = bA.color.r6(sh, 160)
	}

	function sm() {
		this.style.backgroundColor = sh
	}

	function qe() {
		var f6;
		for (qV.style.font = bA.qb.sQ(0, bA.qb.sw(.026, .5, .03)), aB = 1; aB < sf.length; aB++) bA.qb.ql(sf[aB], 4);
		if (bA.qb.ql(sb, 2), en) {
			for (var hF, sx = sb.offsetWidth, sy = sd.offsetWidth, aB = 0; aB < sf.length; aB++) hF = .01 * data.sl[aB] * sy, sf[aB].style.width = (100 * hF / sx).toFixed(2) + "%";
			var l5 = data.sa[0].length;
			for (aB = 0; aB < en; aB++)
				for (bA.qb.ql(se[aB], 2), f6 = 1; f6 < l5; f6++) bA.qb.ql(qW[aB][f6], 4);
			sc.si && (sc.scrollTop = sc.si)
		}
	}
	this.resize = function() {
			qe(), qe()
		}, qV.style.display = "flex", qV.style.flexDirection = "column", sc.style.overflowX = "hidden", sc.style.overflowY = "auto", sc.addEventListener("scroll", function() {
			this.si = this.scrollTop
		}),
		function() {
			var eq, aB, sa = data.sa,
				l5 = en ? sa[0].length : 0;
			for (aB = 0; aB < en; aB++) {
				se[aB] = document.createElement("div"), se[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nd(130, 130, 130, .35) : bB.ni
				}(aB), se[aB].style.width = "100%", se[aB].style.display = "flex", qW[aB] = new Array(l5);
				for (var f6 = 0; f6 < l5; f6++) qW[aB][f6] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data
					.sl[f6] + "%", eq.innerHTML = sa[aB][f6].fF, 1 === sa[aB][f6].dt && (eq.name = "" + aB, eq.style.color = bB.oh, eq.style.backgroundColor = sh, eq.addEventListener("mouseover", r6), eq.addEventListener("mouseout", sm), function(eq,
						so, sp) {
						2147483647 !== sp && eq.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, so), bH.dd(bD.aC), this.style.backgroundColor = sh, t.u(8, t.sq, new sr(25, {
								ss: 0,
								so: bF.st.su(bF.st.sv(5)),
								sp: sp
							}))
						})
					}(eq, sa[aB][f6].so, sa[aB][f6].sp)), se[aB].appendChild(eq)
			}
			for (sb.style.display = "flex", sb.style.backgroundColor = bA.color.nd(0, 120, 0, .35), aB = 0; aB < sf.length; aB++) sf[aB] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style
				.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data.sl[aB] + "%", eq.innerHTML = data.sg[aB], sb.appendChild(eq)
		}();
	for (var aB = 0; aB < en; aB++) sd.appendChild(se[aB]);
	sc.appendChild(sd), qV.appendChild(sb), qV.appendChild(sc)
}

function sz() {
	var t3, t4, t0 = document.createElement("div"),
		t1 = document.createElement("div"),
		t2 = document.createElement("div"),
		sd = document.createElement("div"),
		rA = [],
		e3 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		t5 = [1, 2, 3, 0, 9, 10, 11];

	function t7(aB) {
		t.u(8, 0, new sr(21, {
			t9: t5[aB],
			tA: 0,
			tB: 10
		}))
	}
	this.show = function() {
			this.s4(t.y.tC), document.body.appendChild(t0)
		}, this.rs = function() {
			t.removeChild(document.body, t0)
		}, this.s4 = function(tC) {
			for (var tD = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rA.length; aB++) {
				var i = tC[aB];
				t3[tD[aB]][1].rZ.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tE = bc.gap,
				j = bA.qb.tF(.085),
				i = Math.min(4 * j, h.i - 2 * tE),
				en = rA.length;
			for (bA.qb.tG(t0, tE, h.j - tE - j, i, j), bA.qb.ql(t0), bA.qb.ql(t1, 6), aB = 0; aB < en - 1; aB++) bA.qb.ql(rA[aB].button, 6);
			for (aB = 0; aB < en; aB++) t3[aB][0].resize(), t3[aB][1].resize();
			for (rA[0].eu = 0, rA[0].button.style.left = bA.qb.qk(rA[0].eu), rA[0].button.style.width = bA.qb.tH(1.7 * j), aB = 1; aB < en; aB++) rA[aB].eu = rA[aB - 1].eu + rA[aB - 1].button.offsetWidth, rA[aB].button.style.left = bA.qb.qk(rA[aB]
				.eu);
			if (!t4) {
				if (!ab.tI()) return;
				(t4 = ab.get(14)).style.width = "24%", t4.style.position = "absolute", t1.appendChild(t4)
			}
			t4.style.left = bA.qb.qk(0), t4.style.top = "7%", t2.tJ && (t2.scrollLeft = t2.tJ)
		}, t0.style.position = "absolute", t1.style.width = "25%", t1.style.height = "100%", t1.style.backgroundColor = bB.nf, t2.style.position = "absolute", t2.style.width = "75%", t2.style.height = "100%", t2.style.backgroundColor = bB.nf, t2
		.style.top = t2.style.right = bA.qb.qk(0), bA.qb.t6(t2), sd.style.height = sd.style.maxHeight = "100%", rA.push(new w("", function() {
			t7(0)
		}, bB.oT)), rA.push(new w("", function() {
			t7(1)
		}, bB.oU)), rA.push(new w("", function() {
			t7(2)
		}, bB.oM)), rA.push(new w("", function() {
			t7(3)
		}, bB.o7)), rA.push(new w("", function() {
			t7(4)
		}, bB.or)), rA.push(new w("", function() {
			t7(5)
		}, bB.oo)), rA.push(new w("", function() {
			t7(6)
		}, bB.or)), t3 = new Array(rA.length);
	for (var aB = 0; aB < rA.length; aB++) rA[aB].button.style.position = "absolute", t3[aB] = [new t8(e3[aB], rA[aB].button, .25, .45), new t8("", rA[aB].button, .53, .84, 1)], rA[aB].button.style.height = rA[aB].button.style.maxHeight = "100%", rA[
		aB].button.top = bA.qb.qk(0), sd.appendChild(rA[aB].button);
	t2.appendChild(sd), t0.appendChild(t1), t0.appendChild(t2)
}

function tK(tL, tM, tN, tO, rI, rJ) {
	var tP = document.createElement("div"),
		tQ = document.createElement("div"),
		tR = document.createElement("div"),
		tS = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("div"),
		tV = document.createElement("div"),
		tW = document.createElement("div"),
		tX = document.createElement("span"),
		tY = document.createElement("div");
	this.tZ = new rH(rI, rJ), this.ta = new tb(rJ), this.tc = [tL, tM, tN, tO], this.tg = function(th) {
		th = (th / 10).toFixed(1) + "%";
		tW.style.width = th, tX.innerHTML = th
	}, this.ti = function() {
		this.ta.rs(tU), this.tZ.show(tU)
	}, this.tj = function() {
		this.tZ.rs(tU), this.ta.show(tU)
	}, this.tk = function() {
		return tQ
	}, this.show = function() {
		document.body.appendChild(tP)
	}, this.rs = function() {
		t.removeChild(document.body, tP)
	}, this.resize = function(tl) {
		var tm = 1 - .4 * a0.a1.hw() * (h.i > 1.6 * h.j),
			tn = bA.qb.ru(.05 * tm),
			to = h.j > h.i,
			tp = bA.qb.ru(.07 * tm + .03 * to),
			tq = bA.qb.ru(.04 + .02 * to),
			to = bA.qb.ru(.02 * tm + .01 * to),
			ts = bA.qb.ru(.025);
		tP.style.font = bA.qb.sQ(0, ts), tm < 1 && (ts = bA.qb.sQ(0, tm * ts), tR.style.font = ts, tT.style.font = ts, tY.style.font = ts, tV.style.font = ts, tS.style.font = ts), tQ.style.height = bA.qb.qk(tn), tQ.style.font = bA.qb.sQ(0, .72 *
				tn), bA.qb.ql(tQ, 2), tR.style.top = bA.qb.qk(tn), tR.style.height = bA.qb.qk(tp), bA.qb.ql(tR, 2), tS.style.font = bA.qb.sQ(0, tm * bA.qb.ru(.02)), tS.style.top = bA.qb.qk(tn + tp), tS.style.height = bA.qb.qk(tq), bA.qb.ql(tS,
			2), tT.style.top = bA.qb.qk(tn + tp + tq), tT.style.height = bA.qb.qk(tp), bA.qb.ql(tT, 2), tU.style.top = bA.qb.qk(tn + tp + tq + tp), tU.style.height = bA.qb.qk(h.j / h.k - tn - 3 * tp - tq - to), tV.style.top = bA.qb.qk(h.j / h.k -
				tp - to), tV.style.height = bA.qb.qk(to), bA.qb.ql(tV, 8), tX.style.font = bA.qb.sQ(0, .8 * to), tY.style.top = bA.qb.qk(h.j / h.k - tp), tY.style.height = bA.qb.qk(tp), bA.qb.ql(tY, 8), tL.resize(tR), tM.resize(tR), tN.resize(
			tR), tO.resize(tR), tl ? this.tZ.resize(tU) : this.ta.resize()
	};
	rI = this;
	tP.style.position = "absolute", tP.style.top = "0", tP.style.left = "0", tP.style.width = "100%", tP.style.height = "100%", tP.style.backgroundColor = bB.ni, bJ.r3() || (tP.style.backdropFilter = "blur(4px)", tP.style.webkitBackdropFilter =
		"blur(4px)"), tQ.style.position = "absolute", tQ.style.top = "0", tQ.style.left = "0", tQ.style.width = "100%", tQ.style.display = "flex", tQ.style.alignItems = "center";
	for (var g = [tR, tS, tT, tY], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qb.t6(g[aB]);
	tU.style.position = "absolute", tU.style.left = "0", tU.style.width = "100%", tU.style.font = "inherit", tV.style.position = "absolute", tV.style.left = "0", tV.style.width = "100%", tW.style.position = "absolute", tW.style.top = "0", tW.style
		.left = "0", tW.style.height = "100%", tW.style.width = "50%", tW.style.backgroundColor = bB.o5, tX.innerHTML = "", tX.style.position = "absolute", tX.style.top = "50%", tX.style.left = "50%", tX.style.transform = "translate(-50%, -50%)", tQ
		.appendChild(function() {
			var tf = document.createElement("h1");
			return tf.textContent = L(23), tf.style.margin = "0 auto 0.15em auto", tf.style.fontFamily = "Arial Black, Trebuchet MS", tf.style.fontSize = "inherit", tf.style.fontWeight = "inherit", tf
		}()), tR.appendChild(tL.qG), tS.appendChild(tM.qG), tT.appendChild(tN.qG), tV.appendChild(tW), tV.appendChild(tX), tY.appendChild(tO.qG), tP.appendChild(tQ), tP.appendChild(tR), tP.appendChild(tS), tP.appendChild(tT), tP.appendChild(tU), tP
		.appendChild(tV), tP.appendChild(tY), rI.ta.show(tU)
}

function tb(rJ) {
	var tP = document.createElement("div"),
		tU = document.createElement("div");
	this.mW = function() {
			tU.textContent = "", bn.tu.rs(1);
			for (var rk = document.createDocumentFragment(), tv = bn.y.rf[0], tw = bn.tw.tx[tv], ty = bn.tw.ty[tv], aB = 0; aB < tw.length; aB++) ! function(rk, qT, u0, tv) {
				var rZ = document.createElement("span");
				rZ.textContent = (u0 ? "🟢 " : "⚪ ") + bn.kz.u1(qT, tv), rZ.style.color = bn.kz.u2(qT.u3), rZ.style.cursor = "pointer", rZ.style.margin = "0.2em 0.2em 0.2em 0.2em", rZ.style.width = rZ.style.maxWidth = 2 === tv ? "10em" : "9em",
					rZ.style.height = rZ.style.maxHeight = "1.4em", rZ.style.whiteSpace = "nowrap", rZ.style.overflow = "hidden", rZ.style.textOverflow = "ellipsis", rZ.style.font = "inherit", rZ.style.display = "inline-block", bn.kz.u4(qT) && (
						rZ.style.textDecoration = "underline"), qT.u5 && (rZ.style.textDecorationLine = "underline", rZ.style.textDecorationStyle = "dotted");
				rZ.onclick = function(e) {
					rJ(e, qT)
				}, bJ.r3() || (rZ.onmouseover = function(e) {
					bn.tu.u6(e, qT, 1)
				}), rk.appendChild(rZ)
			}(rk, tw[aB], aB < ty, tv);
			tU.appendChild(rk)
		}, this.show = function(qV) {
			qV.appendChild(tP)
		}, this.rs = function(qV) {
			t.removeChild(qV, tP)
		}, this.resize = function() {
			tU.style.fontSize = bA.qb.qk(bA.qb.ru(.02, .3))
		}, tP.style.top = "0", tP.style.left = "0", tP.style.width = tP.style.height = "100%", tP.style.overflowX = "hidden", tP.style.overflowY = "auto", tP.style.font = "inherit", tU.style.font = "inherit", tU.style.margin = "0.4em", tP
		.appendChild(tU)
}

function u7(u8) {
	var tP = document.createElement("div"),
		rM = document.createElement("div"),
		u9 = [];

	function qy() {
		bJ.r3() || (this.style.backgroundColor = bA.color.r6(bB.nf, 50))
	}

	function qz() {
		this.style.backgroundColor = bB.nf
	}
	this.s4 = function(uB, uC) {
			u9[2].textContent = uB + 1 + " / " + uC
		}, this.show = function(qT) {
			rM.appendChild(bn.rr.transform(bn.kz.rm(qT, bn.kz.rn(qT)))), document.body.appendChild(tP)
		}, this.resize = function() {
			var j = bA.qb.ru(.03, .5);
			tP.style.width = 10 * j + "px", tP.style.font = bA.qb.sQ(1, .75 * j), bA.qb.ql(tP, 4), rM.style.top = j + "px", rM.style.font = bA.qb.sQ(0, .55 * j), bA.qb.ql(rM, 2), tP.style.height = j + rM.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qb.ql(u9[aB], 6), u9[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u9[aB].style.height = j + "px", bA.qb.ql(u9[aB], 2);
			u9[2].style.width = 4 * j + "px", u9[1].style.left = 2 * j + "px", u9[2].style.left = 4 * j + "px", u9[3].style.left = 8 * j + "px"
		}, this.uD = function() {
			for (var aB = 0; aB < 4; aB++) u9[aB].onclick = null, u9[aB].onmouseover = null, u9[aB].onmouseout = null;
			t.removeChild(document.body, tP), tP = rM = u9 = null
		}, tP.style.position = "absolute", tP.style.color = bB.nj, tP.style.zIndex = "3", tP.style.right = "0", tP.style.top = "0", rM.style.position = "absolute", rM.style.height = "auto", rM.style.color = bB.nj, rM.style.backgroundColor = bB.nf, rM
		.style.left = "0", rM.style.width = "100%", rM.style.overflowWrap = "break-word", tP.appendChild(rM);
	for (var aB = 0; aB < 4; aB++) u9[aB] = document.createElement("div"), u9[aB].style.position = "absolute", u9[aB].style.backgroundColor = bB.nf, u9[aB].style.color = bB.nj, u9[aB].style.top = "0", u9[aB].style.display = "flex", u9[aB].style
		.justifyContent = "center", u9[aB].style.alignItems = "center", u9[aB].style.userSelect = "none", u9[aB].style.outline = "none", u9[aB].style.font = "inherit", 2 !== (u9[aB].uA = aB) && (u9[aB].onclick = u8, u9[aB].onmouseover = qy, u9[aB]
			.onmouseout = qz), tP.appendChild(u9[aB]);
	u9[0].textContent = "◀", u9[1].textContent = "▶", u9[3].textContent = "✖"
}

function uE(u8) {
	var sI = document.createElement("div");

	function qy() {
		bJ.r3() || (sI.style.backgroundColor = bA.color.r6(bB.nf, 50))
	}

	function qz() {
		sI.style.backgroundColor = bB.nf
	}
	this.s4 = function(uC) {
			sI.textContent = uC
		}, this.show = function() {
			document.body.appendChild(sI)
		}, this.resize = function() {
			var j = bA.qb.ru(.03, .5);
			sI.style.width = 2 * j + "px", sI.style.height = j + "px", sI.style.font = bA.qb.sQ(1, .75 * j), bA.qb.ql(sI, 4), bA.qb.ql(sI, 2)
		}, this.uD = function() {
			sI.onclick = null, sI.onmouseover = null, sI.onmouseout = null, t.removeChild(document.body, sI), sI = null
		}, sI.style.position = "absolute", qz(), sI.style.color = bB.nj, sI.style.zIndex = "3", sI.style.right = "0", sI.style.top = "0", sI.style.display = "flex", sI.style.justifyContent = "center", sI.style.alignItems = "center", sI.style
		.userSelect = "none", sI.style.outline = "none", sI.onclick = u8, sI.onmouseover = qy, sI.onmouseout = qz
}

function uF(sA) {
	var tP = document.createElement("div"),
		uG = document.createElement("div"),
		sJ = (this.eu = 0, this.ew = 0);

	function uI() {
		bn.uJ.rs()
	}
	this.rA = sA, this.show = function(eu, ew, uL) {
		if (sJ) return [0, 0];
		sJ = 1, this.eu = eu, this.ew = ew,
			function(self, uL) {
				var i = bA.qb.ru(.16, .7),
					j = sA.length * i / 3,
					uN = h.i / h.k,
					uO = h.j / h.k,
					nL = Math.min(1, Math.min(uN / i, uO / j));
				i *= nL, j *= nL, uL && (self.eu += bA.qb.ru(.03, .5)), self.eu = bL.hv(self.eu, 0, uN - i), self.ew = bL.hv(self.ew, 0, uO - j), uG.style.left = self.eu + "px", uG.style.top = self.ew + "px", uG.style.width = i + "px", uG.style
					.height = j + "px", uG.style.font = bA.qb.sQ(0, .34 * j / sA.length), bA.qb.ql(uG, 5);
				for (var aB = 1; aB < sA.length; aB++) bA.qb.ql(sA[aB].button, 8)
			}(this, uL), document.body.appendChild(tP)
	}, this.rs = function() {
		sJ && (sJ = 0, tP.removeEventListener("click", uI), t.removeChild(document.body, tP))
	};
	for (var aB = 0; aB < sA.length; aB++) new rY("" + (1 + aB), sA[aB].button, 0, 1);
	tP.style.position = "fixed", tP.style.top = "0", tP.style.left = "0", tP.style.width = "100%", tP.style.height = "100%", tP.style.zIndex = "5", uG.style.position = "absolute",
		function() {
			for (var uK = (100 / sA.length).toFixed(2) + "%", aB = 0; aB < sA.length; aB++) sA[aB].button.style.width = "100%", sA[aB].button.style.height = sA[aB].button.style.maxHeight = uK, sA[aB].button.style.padding = "0.0em 0.9em", uG
				.appendChild(sA[aB].button)
		}(), tP.appendChild(uG), tP.addEventListener("click", uI)
}

function uP(sU, uQ) {
	this.qR = [];
	var uR = this.qR;

	function click() {
		for (var aB = 0; aB < uR.length; aB++) uR[aB].textContent = uR[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e8 = parseInt(this.name);
		void 0 !== sU.e8 && bj.s3.s4(sU.e8, e8), uQ && uQ(e8)
	}
	for (var uS, en = sU.uT.length, aB = 0; aB < en; aB++)(uS = document.createElement("p")).textContent = "⚪ " + sU.uT[aB], uS.style.margin = "0", uS.name = "" + aB, uS.style.cursor = "pointer", uS.style.fontSize = "1em", uS.addEventListener(
		"click", click), uR.push(uS);
	uR[sU.value].textContent = uR[sU.value].textContent.replace("⚪", "🟢")
}

function uU(title, uV, uW) {
	var t0 = document.createElement("div"),
		uX = document.createElement("div"),
		sd = document.createElement("div"),
		uY = document.createElement("div"),
		uZ = document.createElement("div");
	this.ua = sd, this.ub = uV, this.show = function() {
			!1 !== uW ? document.body.appendChild(t0) : (document.body.appendChild(uX), document.body.appendChild(uY))
		}, this.rs = function() {
			!1 !== uW ? t.removeChild(document.body, t0) : (t.removeChild(document.body, uX), t.removeChild(document.body, uY))
		}, this.uf = function() {
			var rv = bA.qb.ru(.1),
				rt = bA.qb.ru(.08 + .04 * (h.ug < 1), .3);
			return {
				rv: rv,
				rt: rt,
				uh: h.j / h.k - rv - rt
			}
		}, this.resize = function(sE) {
			var en = uV.length,
				ui = this.uf(),
				rv = ui.rv,
				rt = ui.rt;
			for (uX.style.height = bA.qb.qk(rv), bA.qb.ql(uX, 2), uY.style.top = bA.qb.qk(h.j / h.k - rt), uY.style.height = bA.qb.qk(rt), bA.qb.ql(uY, 8), sd.style.top = bA.qb.qk(rv), sd.style.height = sd.style.maxHeight = bA.qb.qk(ui.uh), uX.style
				.font = bA.qb.sQ(0, bA.qb.ru(.02, .15)), uY.style.font = bA.qb.sQ(0, bA.qb.ru(.02, .7)), sd.style.font = bA.qb.sQ(0, bA.qb.ru(.02, .35)), aB = 1; aB < en; aB++) bA.qb.ql(uV[aB].button, 4);
			for (var sF = 0, aB = 0; aB < en; aB++) sF += uV[aB].button.offsetWidth;
			if (sE && sF < uY.offsetWidth)
				for (aB = 0; aB < en; aB++) uV[aB].button.style.width = (100 * uV[aB].button.offsetWidth / sF).toFixed(2) + "%";
			else
				for (aB = 0; aB < en; aB++) uV[aB].button.style.width = "auto";
			uY.tJ && (uY.scrollLeft = uY.tJ), sE || this.resize(!0)
		}, this.uj = function() {
			var ui = this.uf(),
				f8 = h.k;
			uk.fillStyle = bB.nf, uk.fillRect(0, f8 * ui.rv, h.i, f8 * ui.uh)
		}, t0.style.position = "absolute", t0.style.top = "0", t0.style.left = "0", t0.style.width = "100%", t0.style.height = "100%", uX.style.position = "absolute", uX.style.top = "0", uX.style.left = "0", uX.style.width = "100%", uX.style
		.display = "flex", uX.style.backgroundColor = bB.nf, uY.style.position = "absolute", uY.style.left = "0", uY.style.width = "100%", bA.qb.t6(uY), uZ.style.height = uZ.style.maxHeight = "100%", sd.style.position = "absolute", sd.style.width =
		"100%", sd.style.backgroundColor = bB.nf,
		function() {
			for (var aB = 0; aB < uV.length; aB++) uV[aB].button.style.height = "100%", uV[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uV.length; aB++) uZ.appendChild(uV[aB].button);
	uX.appendChild(function() {
		var ue = document.createElement("h1");
		return ue.textContent = title, ue.style.margin = "auto", ue.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", ue.style.fontFamily = "Arial Black, Trebuchet MS", ue
	}()), uY.appendChild(uZ), !1 !== uW && (t0.appendChild(sd), t0.appendChild(uX), t0.appendChild(uY))
}

function rY(ul, um, un, uo) {
	var self;
	this.rZ = document.createElement("span"), (self = this).rZ.textContent = ul, self.rZ.style.color = bB.nj, self.rZ.style.position = "absolute", self.rZ.style.font = "inherit", uo ? self.rZ.style.bottom = "0.06em" : self.rZ.style.top = "0.12em",
		un ? self.rZ.style.left = "0.2em" : self.rZ.style.right = "0.2em", self.rZ.style.fontSize = "0.6em", self.rZ.style.pointerEvents = "none", self.rZ.style.whiteSpace = "pre", um.style.position = "relative", um.style.overflow = "hidden", um
		.appendChild(self.rZ)
}

function t8(ul, um, up, uq, ur) {
	var self;
	this.rZ = document.createElement("span"), this.resize = function() {
			this.rZ.style.fontSize = ((uq - up) * um.offsetHeight).toFixed(1) + "px"
		}, (self = this).rZ.textContent = ul, self.rZ.style.color = bB.nj, self.rZ.style.font = "inherit", self.rZ.style.margin = "0.1em 0.6em", self.rZ.style.pointerEvents = "none", ur && (self.rZ.style.fontWeight = "bold"), self.rZ.style
		.whiteSpace = "nowrap", self.rZ.style.display = "block", um.appendChild(self.rZ)
}

function us(ut, uu, uv, uw) {
	var ux = document.createElement("textarea"),
		uy = (this.e = ux, !0);

	function v4() {
		ux.select(), document.execCommand("copy")
	}
	this.resize = function() {
			uu && bA.qb.ql(ux, 5)
		}, this.uz = function(v0) {
			ux.value = v0
		}, this.v1 = function() {
			return ux.value
		}, this.v2 = function() {
			ux.select()
		}, this.clear = function() {
			ux.value = ""
		}, this.v3 = function() {
			uy && navigator.clipboard ? (ux.select(), navigator.clipboard.writeText(ux.value).catch(function() {
				uy = !1, v4()
			})) : v4()
		}, ux.setAttribute("id", "textArea" + t.y.sX++), ux.setAttribute("autocomplete", "off"), ut && ux.setAttribute("placeholder", ut), ux.style.top = "0", ux.style.left = "0", ux.style.width = "100%", ux.style.height = "100%", ux.style
		.userSelect = "none", ux.style.outline = "none", ux.style.resize = "none", ux.style.border = "none", ux.style.color = bB.nj, ux.style.backgroundColor = bB.nc, uw ? (ux.style.fontSize = "1em", ux.rows = 6, ux.style.padding = "0.25em") : (ux
			.style.padding = "0.45em", ux.style.fontSize = "1.2em"), uv && ux.addEventListener("input", function(e) {
			uv(e)
		}), ux.addEventListener("focus", function() {
			h.sY++
		}), ux.addEventListener("blur", function() {
			h.sY--
		})
}

function dI() {
	this.qs = new v5, this.eK = new v6, this.s3 = new v7, this.y = new v8, this.v9 = new vA, this.dd = function() {
		this.eK.dd(), (new vB).dd(), this.v9.dd()
	}
}

function v6() {
	function vC(aB, type, vJ, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type || 0,
			value: vJ || 0,
			vJ: vJ || 0,
			dv: dv || 0
		})
	}

	function vD(aB, type, vJ, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type,
			value: vJ || "",
			vJ: vJ || "",
			dv: dv || 0
		})
	}

	function vE(nR) {
		for (var aB = bj.eK.data.length; aB < nR; aB++) bj.eK.data.push(null)
	}
	this.data = [], this.dd = function() {
		vC(0, 1, 0, 5), vC(1, 1, 1), vC(2, 0), vD(3, 2), vC(4, 1), vD(5, 2, "Trebuchet MS", 1), vC(6, 0), vC(7, 0, 0), vC(8, 0), vC(9, 1, 1), vC(10, 1), vC(11, 1, 1), vD(12, 2, navigator.language), vC(13), vC(14), vE(100), vD(100, 2), vD(101, 2),
			vD(102, 2), vD(103, 2), vD(104, 2), vD(105, 2), vD(106, 2), vC(107), vC(108), vC(109), vD(110, 2), vC(111), vC(112), vC(113), vD(114, 2), vC(115), vD(116, 2), vC(117, 1), vD(118, 2, "", 2), vC(119, 1, 0, 1), vD(120, 2), vC(121, 1, ~~(
				262144 * Math.random())), vD(122, 2, "Player " + Math.floor(1e3 * Math.random())), vC(123), vD(124), vC(125, 1), vD(126, 2), vC(127, 0, 1), vC(128), vC(129), vC(130), vC(131), vC(132), vD(133, 2), vC(134, 0, 5), vD(135, 2), vD(
				136, 2), vC(137), vC(138), vC(139), vC(140), vC(141), vC(142), vC(143), vC(144), vD(145, 2), vC(146), vC(147), vD(148, 2), vC(149), vC(150, 0, 1), vD(151, 2), vC(152, 0, 5), vC(153, 1), vC(154, 1), vD(155, 2), vD(156, 2), vC(157),
			vC(158), vC(159), vC(160), vD(161, 2), vE(180), vC(180, 0), vC(181, 0)
	}, this.s4 = function(e8, value) {
		this.data[e8].value = value
	}, this.vF = function(e8, value) {
		this.s4(e8, value), bj.qs.save(e8, String(value)), bj.qs.save(e8, String(this.data[e8].dv), !0)
	}, this.vG = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bj.qs.save(aB, String(this.data[aB].value)), bj.qs.save(aB, String(this.data[aB].dv), !0))
	}, this.vH = function(e8) {
		return Number(this.data[e8].value)
	}, this.vI = function(e8) {
		return String(this.data[e8].value)
	}
}

function vA() {
	var vK = [];

	function vO(so) {
		vK.unshift(so), bj.s3.s4(161, vK.join(";"))
	}

	function vN(so) {
		for (var vQ = vK, en = vQ.length, aB = 0; aB < en; aB++)
			if (vQ[aB] === so) return vQ.splice(aB, 1), bj.s3.s4(161, vQ.join(";")), 1
	}
	this.dd = function() {
		var qI = bj.eK.data[161].value;
		qI.length && (vK = qI.split(";"))
	}, this.get = function() {
		return vK
	}, this.vL = function() {
		return {
			uT: vK,
			value: 0
		}
	}, this.u5 = function(so) {
		return bA.qj.has(vK, so)
	}, this.vM = function(so) {
		return vN(so) ? 0 : (vO(so), 1)
	}, this.mW = function(so) {
		vN(so) && vO(so)
	}, this.vP = function(e8) {
		e8 < vK.length && (vK.splice(e8, 1), bj.s3.s4(161, vK.join(";")))
	}
}

function v5() {
	this.vR = function(e8, dv) {
		return Number(this.vS(e8, dv))
	}, this.vS = function(e8, dv) {
		var fF = null;
		return 0 === a0.id ? a0.vT && (fF = a0.vT.getItem((dv ? "v" : "d") + e8)) : 1 === a0.id ? fF = a0.vU.loadString((dv ? 1e3 : 2e3) + e8) : 2 === a0.id && (fF = a0.vV[(dv ? "v" : "d") + e8]), fF && 0 !== fF.length ? fF : null
	}, this.vW = function(en, vX) {
		var g = [],
			vY = vX ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vT)
				for (aB = 0; aB < en; aB++) g.push(a0.vT.getItem(vY + aB))
		} else if (1 === a0.id)
			for (var vZ = vX ? 5e3 : 3e3, aB = 0; aB < en; aB++) g.push(a0.vU.loadString(vZ + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) g.push(a0.vV[vY + aB]);
		return g
	}, this.save = function(e8, value, dv) {
		var va = (dv ? "v" : "d") + e8;
		if (0 === a0.id) {
			if (a0.vT && bj.eK.data[140].value) try {
				a0.vT.setItem(va, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vU.saveString((dv ? 1e3 : 2e3) + e8, value) : 2 === a0.id && (a0.vV[va] = value, a0.vb.postMessage(va + " " + value))
	}, this.vc = function(g, vX) {
		var en = g.length,
			vY = vX ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vT && bj.eK.data[140].value) try {
				for (aB = 0; aB < en; aB++) a0.vT.setItem(vY + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vZ = vX ? 5e3 : 3e3, aB = 0; aB < en; aB++) a0.vU.saveString(vZ + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) a0.vV[vY + aB] = g[aB], a0.vb.postMessage(vY + aB + " " + g[aB])
	}
}

function vB() {
	this.dd = function() {
		! function() {
			var data = bj.eK.data;
			0 === data[2].dv && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vJ = 1);
			0 === data[100].dv && (data[100].value = data[100].vJ = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fF, data = bj.eK.data,
			en = data.length;
		for (aB = 0; aB < en; aB++) data[aB] && data[aB].dv === bj.qs.vR(aB, !0) && (fF = bj.qs.vS(aB), data[aB].value = null === fF ? data[aB].vJ : 2 === data[aB].type ? fF : Number(fF))
	}
}

function v8() {
	function vi(g) {
		if (0 === g.length) bj.s3.s4(116, "");
		else {
			for (var vl = g[0], aB = 1; aB < g.length; aB++) vl += ";" + g[aB];
			bj.s3.s4(116, vl)
		}
	}
	this.vf = function() {
		bj.eK.data[110].value.length && (bj.eK.data[106].value = bj.eK.data[110], bj.s3.s4(110, ""), this.vg())
	}, this.vg = function() {
		var g = bj.eK.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eK.data[106].value), g.unshift(bj.eK.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vh = [], aB = 0; aB < g.length; aB += 2) vh.push(g[aB]);
		vi(g), bj.eK.data[117].value = 0, bj.eK.data[117].uT = vh
	}, this.vj = function(e8) {
		bj.eK.data[117].uT.splice(e8, 1), bj.eK.data[117].value = Math.min(e8, bj.eK.data[117].uT.length - 1);
		var g = bj.eK.data[116].value.split(";");
		g.splice(2 * e8, 2), vi(g)
	}, this.vk = function(e8) {
		var g = bj.eK.data[116].value.split(";");
		return {
			so: g[2 * e8],
			password: g[2 * e8 + 1]
		}
	}, this.vm = function() {
		var fF = bL.hv(bj.eK.data[121].value, -1, 262143);
		return fF = -1 === fF ? ~~(262144 * Math.random()) : fF
	}
}

function v7() {
	this.s4 = function(e8, value) {
		bj.eK.data[e8].value !== value && (bj.eK.vF(e8, value), 0 === e8 ? (t.x(), b7.dd(), t.u(2)) : 1 === e8 ? h.dp(1) : 2 === e8 ? h.dp(0) : 5 === e8 && (bA.qb.vn(), h.dp(0)))
	}, this.vo = function() {
		for (var data = bj.eK.data, aB = 0; aB < 100; aB++) data[aB] && bj.eK.vF(aB, data[aB].vJ);
		bA.qb.vn(), h.dp(1)
	}, this.vp = function() {
		for (var data = bj.eK.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eK.s4(aB, data[aB].vJ)
	}, this.vq = function() {
		for (var f7 = bj.eK, aB = 128; aB < 135; aB++) f7.vF(aB, f7.data[aB].vJ)
	}, this.vr = function(data) {
		bj.s3.s4(109, data.sp), bj.s3.s4(107, data.vs), bj.s3.s4(108, data.vt), bj.s3.s4(112, data.vu), bj.s3.s4(111, data.vv), bj.s3.s4(113, data.vw), bj.s3.s4(135, data.vx), bj.s3.s4(136, data.vy), bj.s3.s4(137, data.vz), bj.s3.s4(138, data
			.w0), bj.s3.s4(139, data.w1), bj.s3.s4(141, data.w2), bj.s3.s4(142, data.w3), bj.s3.s4(143, data.w4), bj.s3.s4(144, data.w5)
	}
}

function c4() {
	this.st = new w6, this.w7 = new w8, this.w9 = new wA, this.dd = function() {
		this.st.dd()
	}
}

function w8() {
	this.wB = function(size) {
		for (var wC = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wC.pj(16)));
		return g.join("")
	}, this.wD = function(qI) {
		return 20 < (qI = qI.trim()).length ? qI.substring(0, 20) : qI
	}
}

function w6() {
	var wE = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (wE[50] = 37, aB = 0; aB < 10; aB++) wE[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) wE[aB + 20] = aB + 11, wE[aB + 52] = aB + 38
	}, this.wF = function(qI) {
		return qI.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.wG = function(qI, size) {
		if ((qI = this.wF(qI)).length > size) return qI.substring(0, size);
		for (; qI.length < size;) qI = "-" + qI;
		return qI
	}, this.wH = function(qI) {
		for (var wI = wE, en = qI.length, g = new Uint8Array(en), aB = 0; aB < en; aB++) g[aB] = wI[qI.charCodeAt(aB) - 45];
		return g
	}, this.wJ = function(wK) {
		bD.a7(6 * wK.length), this.wL(wK), bH.dd(bD.aC)
	}, this.wL = function(wK) {
		for (var en = wK.length, i = bD, aB = 0; aB < en; aB++) i.a8(6, wK[aB])
	}, this.wM = function(qI) {
		this.wL(this.wH(qI))
	}, this.wN = function(qI, size) {
		this.wL(this.wH(this.wG(qI, size)))
	}, this.wO = function(qI, size) {
		for (var g = this.wH(this.wG(qI, size)), fF = 0, nL = 1, aB = g.length - 1; 0 <= aB; aB--) fF += nL * g[aB], nL *= 64;
		return fF
	}
}

function wP() {
	var i, j, wQ;

	function wq(hF, eq, wo, wV, wj) {
		eq = wp(hF, eq + 1 + 2 * wV & 3);
		! function(hF, kn) {
			return 1 < Math.abs(hF % i - kn % i) || 1 < Math.abs(wt(hF) - wt(kn))
		}(hF, eq) && 0 === wj[eq << 2] && (wj[eq << 2] = wo)
	}

	function wt(gL) {
		return Math.floor((gL + .5) / i) % j
	}

	function wp(gL, eq) {
		return gL + wQ[eq]
	}
	this.wR = function(qI) {
		var aB, wS, en, wT, wC = bH;
		for (bG.st.wJ(bG.st.wH(qI)), bS.wW.wX[bS.eT].i = bS.ey = i = wC.pj(12), bS.wW.wX[bS.eT].j = bS.ez = j = wC.pj(12), wQ = [-i, -1, i, 1], bS.wg = document.createElement("canvas"), bS.wg.width = bS.ey, bS.wg.height = bS.ez, bS.wc = bS.wg
			.getContext("2d", {
				alpha: !1
			}), bS.wd = bS.wh = null, bS.wd = bS.wc.getImageData(0, 0, bS.ey, bS.ez), bS.wh = bS.wd.data, bA.qj.wi(bS.wh), en = wC.pj(12), wS = wC.pj(5), wT = wZ(i * j - 1), aB = 0; aB < en; aB++) ! function(l5, gL, wU, wV) {
			var aB, eq, wC = bH,
				wj = bS.wh,
				wk = gL,
				wl = gL,
				wm = 0,
				wn = 1 + wU,
				wo = 2 - wU;
			for (wj[gL << 2] = wn, aB = 0; aB < l5; aB++) eq = wC.pj(2), gL = wp(gL, eq), wj[gL << 2] === wn ? wm % 2 == 1 && wq(wl, wm + 2 * wV + 3, wo, wV, wj) : wj[gL << 2] = wn, wq(gL, eq, wo, wV, wj), wq(wl, eq, wo, wV, wj), wl = gL,
				wm = eq;
			wp(gL, 0) === wk ? (wq(gL, 0, wo, wV, wj), wq(wk, 0, wo, wV, wj)) : wp(gL, 1) === wk && (wq(gL, 0, wo, wV, wj), wq(wk, 2, wo, wV, wj));
			0 === l5 && (wq(wk, 0, wo, wV, wj), wq(wk, 2, wo, wV, wj))
		}(wC.pj(wS), wC.pj(wT), 1 === wC.pj(1), 1 === wC.pj(1));
		var eu, ew, hf, wu, wv, ww, wj = bS.wh,
			wx = !0,
			wy = bS.wW.wX[bS.eT].wy,
			wz = bS.wW.wX[bS.eT].wz;
		for (ew = 0; ew < j; ew++)
			for (wu = !0, wv = wx, eu = ww = 0; eu < i; eu++) hf = 4 * ew * i + 4 * eu, ww <= eu && 0 < wj[hf] && (wv = 2 === wj[hf], wu) && (wu = !1, wv !== wx) ? (wx = wv, ww = eu + 1, eu = -1) : (wv ? (wj[hf] = wz[0], wj[1 + hf] = wz[1], wj[
				2 + hf] = wz[2]) : (wj[hf] = wy[0], wj[1 + hf] = wy[1], wj[2 + hf] = wy[2]), wj[3 + hf] = 255);
		bS.wc.putImageData(bS.wd, 0, 0), bS.we = !0, bS.wf.dd(), bf.dl = !0
	}
}

function wA() {
	this.wR = function(x0) {
		for (var wC = bH, size = wC.pj(x0), x1 = 7 + 9 * wC.pj(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wC.pj(x1)));
		return g.join("")
	}
}

function c9() {
	var sL, sM, x2, x3, x4, x5, x6, x7, x8, x9;

	function xB() {
		var xE = aD.xE;
		for (x8 = xE; x8 < aD.ek; x8++) xA();
		for (x8 = aD.hB ? aD.kA : 0; x8 < xE; x8++) {
			if (!xF()) {
				for (var f7 = aD.xJ = x8; f7 < xE; f7++) x8 = f7, xA();
				return
			}
			xI(x5 + sL * x4 + bL.du(x4, 2), x6 + sM * x4 + bL.du(x4, 2))
		}
	}

	function xl(player) {
		for (var ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, ew = ih[player]; ew <= ii[player]; ew++)
			for (var eu = ie[player]; eu <= ig[player]; eu++) {
				var eR = ac.xm(eu, ew);
				ac.gN(eR) && (ac.jL(eR) ? ac.gI(eR, player) : ac.xn(eR, player))
			}
	}

	function xk(g, tA, tB) {
		var dt = g[tA];
		g[tA] = g[tB], g[tB] = dt
	}

	function xF() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sL = bL.du(x2 * ay.random(), ay.value(100)), sM = bL.du(x3 * ay.random(), ay.value(100)), xs()) return 1;
			return
		}() || function() {
			var i7, iA, f6, xH, f7, xG;
			for (i7 = bL.du(x2 * ay.random(), ay.value(100)), iA = bL.du(x3 * ay.random(), ay.value(100)), f6 = 40; 1 <= f6; f6--)
				for (xH = x3 - f6; 0 <= xH; xH -= 40)
					for (sM = (xH + iA) % x3, f7 = 40; 1 <= f7; f7--)
						for (xG = x2 - f7; 0 <= xG; xG -= 40)
							if (sL = (xG + i7) % x2, xs()) return 1;
			return
		}()
	}

	function xs() {
		for (var gL, xu, gap = bL.du(x4 - x7, 2), xv = x6 + sM * x4 + gap, xw = x5 + sL * x4 + gap, xt = xv + x7 - 1; xv <= xt; xt--)
			for (xu = xw + x7 - 1; xw <= xu; xu--)
				if (gL = ac.xm(xu, xt), !ac.ei(gL) || ac.jL(gL)) return;
		return 1
	}

	function xI(xG, xH) {
		xA(), xx(xG - 2, xH - 2)
	}

	function xA() {
		ag.mj[x8] = 0, ag.gb[x8] = ag.xi[x8] = 0, ag.gF[x8] = [], ag.gT[x8] = [], ag.gU[x8] = [], ag.fD[x8] = [], ag.ie[x8] = ag.ih[x8] = ag.ig[x8] = ag.ii[x8] = 0
	}

	function xx(xG, xH) {
		var gL, aB, xy, xz;
		for (ag.mj[x8] = 1, ag.ie[x8] = xG + 10, ag.ih[x8] = xH + 10, ag.ii[x8] = ag.ig[x8] = 0, xy = xG; xy < xG + 4; xy++)
			for (xz = xH; xz < xH + 4; xz++)(xG < xy && xy < xG + 3 || xH < xz && xz < xH + 3) && (gL = ac.xm(xy, xz), ac.ei(gL)) && (ag.ie[x8] = Math.min(xy, ag.ie[x8]), ag.ig[x8] = Math.max(xy, ag.ig[x8]), ag.ih[x8] = Math.min(xz, ag.ih[x8]), ag
				.ii[x8] = Math.max(xz, ag.ii[x8]), x9[ag.gb[x8]] = gL, ag.gb[x8]++, ac.xn(gL, x8));
		for (ag.xi[x8] = ag.gb[x8], aB = ag.gb[x8] - 1; 0 <= aB; aB--) ac.y0(x9[aB], x8) ? (ac.gI(x9[aB], x8), ag.gT[x8].push(x9[aB])) : ac.y1(x9[aB]) ? (ac.gI(x9[aB], x8), ag.gU[x8].push(x9[aB])) : ac.y2(x9[aB]) && (ac.gI(x9[aB], x8), ag.fD[x8]
			.push(x9[aB]))
	}
	this.dd = function() {
		if (x9 = new Array(12), x7 = 6, x4 = 10, x2 = bL.du(bS.ey, x4), x3 = bL.du(bS.ez, x4), x5 = bL.du(bS.ey - x4 * x2, 2), x6 = bL.du(bS.ez - x4 * x3, 2), aD.hB)
			for (var aB = 0; aB < aD.kA; aB++) x8 = aB, xA(), ag.mj[x8] = 1;
		(0 === aD.data.spawningType ? xB : 1 === aD.data.spawningType ? (xB(), function() {
			var xK = aD.xL;
			aD.xM || xK++;
			if (!(xK < 3)) {
				for (var data = aD.data, jQ = (aD.hB ? aD.kA : 0) + data.teamPlayerCount[0], nR = aD.xJ, xN = new Uint32Array(xK), xO = new Uint32Array(xK), xP = new Uint16Array(xK), xQ = new Uint16Array(xK), el = bg.el, ie = ag.ie, ih =
						ag.ih, ig = ag.ig, ii = ag.ii, fS = bO.fS, fT = bO.fT, aB = jQ; aB < nR; aB++) fS[aB] = ie[aB] + ig[aB] >> 1, fT[aB] = ih[aB] + ii[aB] >> 1;
				for (aB = jQ; aB < nR; aB++) {
					var id = el[aB];
					xN[id] += fS[aB], xO[id] += fT[aB]
				}
				var kX = bg.kX;
				for (aB = 1; aB < xK; aB++) {
					var gG = Math.max(data.teamPlayerCount[kX[aB]], 1);
					xP[aB] = bL.du(xN[aB], gG), xQ[aB] = bL.du(xO[aB], gG)
				}
				var xR = bg.xR,
					xS = bg.xS,
					xT = bg.xT,
					fR = bO.fR;
				for (aB = 0; aB < 512; aB++) fR[aB] = aB;
				for (var e7 = 0; e7 < 2 + (4 <= xK); e7++)
					for (aB = jQ; aB < nR; aB++) {
						for (var hF = aB, xU = fR[hF], xV = 1, f3 = bL.xW(fS[xU] - xP[1], fT[xU] - xQ[1]), f6 = 2; f6 < xK; f6++) {
							var xX = bL.xW(fS[xU] - xP[f6], fT[xU] - xQ[f6]);
							xX < f3 && (f3 = xX, xV = f6)
						}
						var xY = el[hF];
						if (xV !== xY) {
							if (2 === e7 && 4 <= xK) {
								var xZ = Math.max((xV + 1) % xK, 1),
									xa = bL.xW(fS[xU] - xP[xZ], fT[xU] - xQ[xZ]);
								for (f6 = 1; f6 < xK; f6++) xX = bL.xW(fS[xU] - xP[f6], fT[xU] - xQ[f6]), f3 < xX && xX < xa && (xa = xX, xZ = f6);
								xZ !== xY && bL.xW(xP[xY] - xP[xZ], xQ[xY] - xQ[xZ]) < bL.xW(xP[xY] - xP[xV], xQ[xY] - xQ[xV]) && (xV = xZ)
							}
							var xb = kX[xV],
								xc = xS[xb] + (aD.hB ? 0 : xT[xb]),
								kn = xR[xc],
								xd = fR[kn],
								xe = xS[xb + 1];
							f3 = bL.xW(fS[xd] - xP[xY], fT[xd] - xQ[xY]);
							for (var f8 = xc + 1; f8 < xe; f8++) {
								var xf = xR[f8],
									xg = fR[xf];
								(xX = bL.xW(fS[xg] - xP[xY], fT[xg] - xQ[xY])) < f3 && (f3 = xX, kn = xf)
							}
							kn < jQ || nR <= kn || (xd = fR[kn], xN[xY] += fS[xd] - fS[xU], xO[xY] += fT[xd] - fT[xU], xN[xV] += fS[xU] - fS[xd], xO[xV] += fT[xU] - fT[xd], gG = data.teamPlayerCount[kX[xY]], xP[xY] = bL.du(xN[xY], gG),
								xQ[xY] = bL.du(xO[xY], gG), gG = data.teamPlayerCount[xb], xP[xV] = bL.du(xN[xV], gG), xQ[xV] = bL.du(xO[xV], gG), fR[hF] = xd, fR[kn] = xU)
						}
					}! function() {
						for (var fR = bO.fR, ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, gb = ag.gb, xi = ag.xi, gT = ag.gT, gU = ag.gU, fD = ag.fD, aB = 0; aB < 512; aB++) {
							var xj = fR[aB];
							if (xj !== aB) {
								xk(ie, aB, xj), xk(ih, aB, xj), xk(ig, aB, xj), xk(ii, aB, xj), xk(gb, aB, xj), xk(xi, aB, xj), xk(gT, aB, xj), xk(gU, aB, xj), xk(fD, aB, xj), xl(aB), xl(xj), fR[aB] = aB;
								for (var j = xj, gM = fR[j]; gM !== aB;) gM = fR[j = gM];
								fR[j] = xj
							}
						}
					}()
			}
		}) : function() {
			var xE = aD.xE;
			for (x8 = xE; x8 < aD.ek; x8++) xA();
			for (x8 = aD.hB ? aD.kA : 0; x8 < xE; x8++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							xG = spawningData[2 * x8] + 1,
							spawningData = spawningData[2 * x8 + 1] + 1;
						if (3 < xG && xG < bS.ey - 5 && 3 < spawningData && spawningData < bS.ez - 5 && ac.ei(ac.xm(xG, spawningData)) && function(xG, xH) {
								var gL, xu, xt;
								for (xt = xH; xH - 6 < xt; xt--)
									for (xu = xG; xG - 6 < xu; xu--)
										if (gL = ac.xm(xu, xt), ac.jL(gL)) return;
								return 1
							}(xG + 3, spawningData + 3)) return xI(xG + 1, spawningData + 1), 1;
						return
					}()) {
					if (!xF()) {
						for (var f7 = aD.xJ = x8; f7 < xE; f7++) x8 = f7, xA();
						return
					}
					var xG = x5 + sL * x4 + bL.du(x4, 2),
						xH = x6 + sM * x4 + bL.du(x4, 2);
					xI(xG, xH)
				}
		})(), bd.mf[7] = ag.gb[aD.eX]
	}, this.y3 = function(jJ, y4, y5) {
		var aB, xG, xH, gL, sL, sM;
		for (x8 = jJ, aB = 0; aB < 20; aB++)
			for (xG = y4 + aB; y4 - aB <= xG; xG--)
				for (xH = y5 + aB; y5 - aB <= xH; xH--)
					if ((xG === y4 + aB || xG === y4 - aB || xH === y5 + aB || xH === y5 - aB) && 3 < xG && xG < bS.ey - 5 && 3 < xH && xH < bS.ez - 5 && ac.ei(ac.xm(xG, xH)) && function(xG, xH) {
							var gL, xu, xt;
							for (xt = xH; xH - 6 < xt; xt--)
								for (xu = xG; xG - 6 < xu; xu--)
									if (gL = ac.xm(xu, xt), ac.jL(gL) && !ac.yB(x8, gL)) return;
							return 1
						}(xG + 3, xH + 3)) {
						if (0 < ag.gb[x8]) {
							for (sM = sL = gL = void 0, sL = ag.ig[x8]; sL >= ag.ie[x8]; sL--)
								for (sM = ag.ii[x8]; sM >= ag.ih[x8]; sM--) gL = 4 * (sM * bS.ey + sL), ac.y8(x8, gL) && (ac.y9(gL), ag.gb[x8]--);
							xA()
						}
						return xx(xG - 1, xH - 1), !0
					} return !1
	}, this.yA = function(jJ) {
		x8 = jJ, xF() ? xI(x5 + sL * x4 + bL.du(x4, 2), x6 + sM * x4 + bL.du(x4, 2)) : xA()
	}
}

function yC() {
	at.yD(), uk.setTransform(hy, 0, 0, hy, 0, 0), uk.imageSmoothingEnabled = hy < 3, uk.drawImage(bS.wg, aS.yE(), aS.yF()), bP.yG.uj(), uk.drawImage(yH, aS.yE(), aS.yF()), at.uj(), bN.uj(), af.uj(), (aD.nC ? (bh.uj(), bC) : (aN.uj(), aV.uj(), aR
	.uj(), bC.uj(), aw.uj(), aW.uj(), aS.uj(), aQ.uj(), bh.uj(), aU.uj(), aP.uj(), aM.uj(), aL.uj(), aX.uj(), be.uj(), av)).uj(), t.uj()
}

function yI(yJ, i, j) {
	yJ.clearRect(0, 0, i, j), yJ.fillStyle = bB.ng, yJ.fillRect(0, 0, i, j)
}

function yK(yJ, i, j, yL) {
	yJ.fillStyle = bB.nj, yJ.fillRect(0, 0, i, yL), yJ.fillRect(0, 0, yL, j), yJ.fillRect(i - yL, 0, yL, j), yJ.fillRect(0, j - yL, i, yL)
}

function yM(yJ, eu, ew, hj, yL, gL, yN) {
	yJ.fillStyle = bB.nj;
	var gL = Math.floor(hj * gL),
		sy = (gL += (gL - yL) % 2, Math.floor((gL - yL) / 2)),
		hj = Math.floor((hj - gL) / 2);
	yJ.fillRect(eu + hj, ew + hj + sy, gL, yL), yN && yJ.fillRect(eu + hj + sy, ew + hj, yL, gL)
}

function yP() {
	this.dd = function() {
		8 === aD.kS && aN.yQ()
	}, this.yR = function(yS) {
		var elo = aD.data.elo,
			jP = (elo[yS] - elo[1 - yS]) / 10,
			jP = 8 / (1 + Math.pow(2, jP / 32)),
			jP = Math.floor(10 * jP + .5),
			yU = elo[yS] + jP,
			yV = this.yW(yU),
			elo = this.yW(elo[1 - yS] - jP),
			jP = (0 === yS ? aN.yY(yV, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yY(elo, yV, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.ya) * yU / 500).toFixed(2));
		yS === aD.eX ? aN.yb(640, L(24, [jP]), 40, 0, bB.nj, bB.ng, -1, !1) : aN.yb(640, L(25, [ag.yc[yS], jP]), 40, 0, bB.nj, bB.ng, -1, !1)
	}, this.yW = function(elo) {
		return 16e3 === (elo = bL.hv(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.rr = new yd, this.wj = new ye
}

function ye() {
	this.hZ = !1;
	this.yi = [], this.yj = 100;
	var n9, nA, gap, hj, yf, yh, yk = 0,
		yl = new Array(9),
		ym = [],
		yn = [],
		yo = 0,
		yp = 0,
		yq = 0,
		yr = 0;

	function z3() {
		yl.sort(function(f6, f7) {
			return f7.kF - f6.kF
		});
		for (var qI = "" + yl[0].pK, aB = 1; aB < 9; aB++) qI += "," + yl[aB].pK;
		for (aB = 0; aB < 9; aB++) qI += "," + yl[aB].kF;
		bj.eK.vF(120, qI)
	}
	this.dd = function() {
		for (var ys = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < ys.length; aB++) {
			var color = 6 === ys[aB] ? bB.o9 : bB.nh;
			this.yi.push(bA.canvas.yt(ab.get(3), ys[aB], color))
		}
		for (aB = 0; aB < aj.rr.yu; aB++) yn.push(aj.rr.yv - aj.rr.yu + aB);
		for (aB = 0; aB < aj.rr.yw; aB++) yn.push(aj.rr.yx + aB);
		var yy = aj.rr.yz(bK.yy);
		for (aB = 0; aB < yy.length; aB++) yn.push(yy[aB]);
		! function() {
			var aB, g = bj.eK.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) yl[aB] = {
					pK: 1015 + aB,
					kF: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fF = parseInt(g[aB]),
						f8 = (fF = 0 <= fF && fF < aj.rr.yv ? fF : 0, parseInt(g[aB + 9]));
					f8 = 0 <= f8 && f8 < 1e3 ? f8 : 0, yl[aB] = {
						pK: fF,
						kF: f8
					}
				}
		}()
	}, this.show = function(lP, lQ, z4) {
		var aB;
		if (yo = lP, yp = lQ, yk = z4 || 0, this.hZ = !0, ym = [], 0 === yk)
			for (aB = 0; aB < 9; aB++) ym.push(yl[aB].pK);
		else {
			var f7 = 49 * yk,
				z4 = f7 - 49;
			for (z4 >= yn.length && (yk = 1, z4 = 0, f7 = 49), aB = z4 = (f7 = Math.min(f7, yn.length)) - 49; aB < f7; aB++) ym.push(yn[aB])
		}
		ym.push(1024);
		z4 = ym.length, hj = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), gap = Math.floor(hj / 3), (yq = 10 * (yf = hj + gap)) > h.i && (yq = h.i, gap = (yf = yq / 10) - (hj = 3 * yf / 4)), yh = bL.du(z4, 10) + !!(z4 % 10), (yr = yh * yf) > h
			.j && (yr = h.j, gap = (yf = yr / yh) - (hj = 3 * yf / 4)), z4 = .5 * gap;
		n9 = Math.min(Math.max(lP - .5 * yq + z4, z4), h.i - yq + z4), nA = Math.min(Math.max(lQ - .5 * yr + z4, z4), h.j - yr + z4)
	}, this.h0 = function(lP, lQ, player) {
		if (!this.hZ) return !1;
		if (this.z6(lP, lQ)) {
			lP = bL.hv(bL.du(lP - n9 + .5 * gap, yf), 0, 9);
			if ((lP += 10 * bL.hv(bL.du(lQ - nA + .5 * gap, yf), 0, 9)) >= ym.length) return aL.rs(), !0;
			lQ = ym[lP];
			if (1024 === lQ) return this.show(yo, yp, yk + 1), !0;
			! function(pK) {
				for (var aB = 0; aB < 9; aB++) yl[aB].kF = Math.floor(.99 * yl[aB].kF);
				for (aB = 0; aB < 9; aB++)
					if (pK === yl[aB].pK) return yl[aB].kF = Math.min(yl[aB].kF + 30, 999), z3();
				yl.splice(5, 0, {
					pK: pK,
					kF: Math.max(yl[4].kF, 30)
				}), yl.pop(), z3()
			}(lQ), player === aD.eX ? b8.hD.pJ(lQ) : b8.g9.pY(lQ, player)
		}
		return aL.rs(), !0
	}, this.z6 = function(lP, lQ) {
		return !(lP < n9 - .5 * gap || lQ < nA - .5 * gap || n9 + yq - .5 * gap <= lP || nA + yr - .5 * gap <= lQ)
	}, this.uj = function() {
		uk.fillStyle = bB.ng, uk.fillRect(n9 - .5 * gap, nA - .5 * gap, yq, yr);
		for (var hf = .5 * bc.z7, en = (uk.lineWidth = bc.z7, uk.strokeStyle = uk.fillStyle = bB.nj, uk.strokeRect(n9 - .5 * gap + hf, nA - .5 * gap + hf, yq - 2 * hf, yr - 2 * hf), uk.imageSmoothingEnabled = !0, ym.length), aB = 0; aB <
			en; aB++) this.z8(ym[aB], uk, n9 + aB % 10 * yf, nA + bL.du(aB, 10) * yf, hj);
		uk.imageSmoothingEnabled = !1
	}, this.z8 = function(pK, hp, eu, ew, hj) {
		var eR;
		pK >= 1024 - aj.rr.yu ? (eR = hj / this.yj, hp.setTransform(eR, 0, 0, eR, eu, ew), hp.drawImage(this.yi[pK - 1024 + aj.rr.yu], 0, 0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qb.textAlign(hp, 1), bA.qb.textBaseline(hp, 1), hp.font = bA.qb
			.sQ(0, .89 * hj), hp.fillText(aj.rr.z9(pK), eu + .5 * hj, ew + (.35 - bA.qb.zA + .56) * hj))
	}
}

function yd() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yu = 13, this.yw = this.emojis.length, this.yx = 676, this.yv = 1024, this.zB = this.emojis.indexOf("💀"), this.zC = this.zB + 1, this.zD = this.emojis.indexOf("🥇"), this.zE = this.emojis.indexOf("😊"), this.z9 = function(fF) {
		return fF < this.yx ? String.fromCharCode(55356, 56806 + bL.du(fF, 26), 55356, 56806 + fF % 26) : this.emojis[Math.min(fF - this.yx, this.yw - 1)]
	}, this.yz = function(qI) {
		for (var en = qI.length - 2, g = [], aB = 0; aB < en; aB++) {
			var zF = qI.charCodeAt(aB) - 56806,
				zG = qI.charCodeAt(aB + 2) - 56806;
			0 <= zF && zF < 26 && 0 <= zG && zG < 26 && (g.push(26 * zF + zG), aB += 3)
		}
		return g
	}, this.zH = function(fF) {
		return fF < this.yx
	}, this.zI = function(fF) {
		return fF >= 1024 - this.yu
	}, this.zJ = function(fF) {
		return fF >= this.yx && fF < this.yx + this.zC
	}
}

function c3() {
	this.st = new zK, this.w7 = new zL, this.w9 = new zM, this.dd = function() {
		this.st.dd()
	}
}

function zL() {
	this.wM = function(qI) {
		for (var en = qI.length, i = bD, aB = 0; aB < en; aB++) i.a8(16, qI.charCodeAt(aB))
	}
}

function zK() {
	var zN = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zN[0] = 45, zN[37] = 95, aB = 0; aB < 10; aB++) zN[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zN[aB + 11] = 65 + aB, zN[aB + 38] = 97 + aB
	}, this.sv = function(zO) {
		for (var wC = bH, wK = new Uint8Array(zO), aB = 0; aB < zO; aB++) wK[aB] = wC.pj(6);
		return wK
	}, this.su = function(wK) {
		for (var en = wK.length, zP = zN, g = [], aB = 0; aB < en; aB++) g.push(String.fromCharCode(zP[wK[aB]]));
		return g.join("")
	}, this.zQ = function(value, zR) {
		for (var zP = zN, g = [], aB = 0; aB < zR; aB++) g.push(String.fromCharCode(zP[value >> 6 * (zR - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var zS, zT, zU;
	zS = [32, 65, 191, 913, 931], zT = [64, 127, 688, 930, 1155], zU = new Array(zS.length + 1);
	for (var aB = 0; aB < zU.length; aB++) {
		zU[aB] = 0;
		for (var f6 = aB - 1; 0 <= f6; f6--) zU[aB] += zT[f6] - zS[f6]
	}

	function za(f8) {
		for (var aB = zS.length - 1; 0 <= aB; aB--)
			if (f8 >= zS[aB] && f8 < zT[aB]) return aB;
		return -1
	}
	this.wD = function(qI) {
		return 0 !== (qI = qI.trim()).indexOf("Bot ") && 0 !== qI.indexOf("[Bot] ") && function(qI, zX, zY) {
			var en = (qI = qI.trim()).length;
			if (en < zX || zY < en) return !1;
			for (var f8, zZ = 0, aB = 0; aB < en; aB++)
				if (f8 = qI.charCodeAt(aB), zZ += 65 <= f8 && f8 <= 90 || 1040 <= f8 && f8 <= 1071 ? 1 : 0, -1 === za(f8)) return !1;
			if (3 < zZ && zZ > Math.floor(en / 2)) return !1;
			return !0
		}(qI, 3, 20)
	}, this.zb = function(qI) {
		for (var en = (qI = qI.trim()).length, g = [], aB = 0; aB < en; aB++) {
			var f8, gL = za(f8 = qI.charCodeAt(aB));
			g.push(zU[gL] + f8 - zS[gL])
		}
		return g
	}, this.wR = function(g) {
		for (var f8, f7, qI = "", en = g.length, aB = 0; aB < en; aB++)
			for (f7 = 1; f7 < zU.length; f7++)
				if (g[aB] < zU[f7]) {
					f8 = zS[f7 - 1] + g[aB] - zU[f7 - 1], qI += String.fromCharCode(f8);
					break
				} return qI
	}, this.zc = function(qI) {
		for (var g = this.zb(qI), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zd = function(qI) {
		for (var g = new Array(Math.floor(qI.length / 3)), aB = 0; aB < qI.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qI.substring(aB, aB + 3));
		return this.wR(g)
	}, this.ze = function(qI) {
		for (var fF, g = [qI.length], aB = 0; aB < qI.length; aB++) g[aB] = qI.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qI.length; aB++) aB === qI.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fF = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fF + (fF < 26 ? 65 : 71)), aB++);
		return result
	}, this.zf = function(qI) {
		for (var f8, result = "", aB = 0; aB < qI.length; aB++) 48 <= (f8 = qI.charCodeAt(aB)) && f8 < 58 ? result += String.fromCharCode(f8) : 65 <= f8 && f8 < 75 ? result += "0" + (f8 - 65).toString() : 75 <= f8 && f8 < 91 ? result += (f8 - 65)
			.toString() : 97 <= f8 && f8 < 123 && (result += (f8 - 71).toString());
		return result
	}, this.zg = function(qI) {
		for (var en = qI.length, g = [], aB = 0; aB < en; aB++)(f8 = qI.charCodeAt(aB)) < 58 ? g.push(qI[aB]) : (f8 -= f8 < 91 ? 65 : 71, g.push(String(bL.du(f8, 10))), g.push(String(f8 - 10 * bL.du(f8, 10))));
		var en = g.length - 2,
			f8 = 0,
			wK = [];
		for (aB = 0; aB < en; aB += 3) wK[f8++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return wK
	}, this.zh = function() {
		for (var e7, zi = "", aB = 0; aB < 6; aB++) e7 = 48 + ay.random() % 36, e7 += 58 <= e7 ? 39 : 0, zi += String.fromCharCode(e7);
		return zi
	}
}

function zM() {
	this.zb = function(qI, x0, zj) {
		for (var zk = [], en = qI.length, max = 0, aB = 0; aB < en; aB++) {
			var fF = qI.charCodeAt(aB);
			zk.push(fF), max = Math.max(max, fF)
		}
		var x1 = max < 128 ? 7 : 16;
		for (zj.a8(x0, en), zj.a8(1, +(16 == x1)), aB = 0; aB < en; aB++) zj.a8(x1, zk[aB])
	}
}

function dA() {
	this.zl = new zm, this.result = new zn, this.zo = new zp, this.zq = new zr, this.zs = new zt, this.zu = new zv, this.dd = function() {
		this.result.dd()
	}
}

function zp() {
	this.zw = function() {
		for (var en = al.kg, zx = al.kl, zy = [], aB = 0; aB < en; aB++) {
			var gL = zx[aB];
			bA.g9.zz(gL) && zy.push(gL)
		}
		return zy
	}, this.a00 = function() {
		if (0 === bg.kX[aD.a01]) return this.a02();
		bh.kB(aD.a01);
		for (var zy = [], en = bO.fI[0], fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = fR[aB];
			bA.g9.zz(gL) && zy.push(gL)
		}
		return zy
	}, this.a02 = function() {
		var gL = ll[0];
		return bA.g9.zz(gL) ? [gL] : []
	}, this.a03 = function(zy) {
		for (var en = zy.length, dt = 0, gb = ag.gb, aB = 0; aB < en; aB++) dt += gb[zy[aB]];
		return dt
	}
}

function zm() {
	function a05() {
		if (2 === aD.a09) return 1;
		aw.a0A(), aD.a09 = 2, aD.a0B = aD.a0C
	}

	function a07() {
		bR.zs.a0D(), aX.show(1 === aD.a0E, !1, 2 === aD.a0E), bR.result.a0D(), bR.zu.j3(), bR.zq.j3(), aN.a0F(!0), aN.a0G(247), aN.a0G(956), aN.a0G(957), aV.mV(!0), aW.mV(!0), aw.mV(), bC.a0H(), aD.gw && bf.a0I.a0J(), bf.dl = !0, bb.a0K(), a0.a1
			.setState(0)
	}
	this.a04 = function() {
		a05() || (aD.a06 = 2, a07())
	}, this.a08 = function() {
		a05() || (aD.a06 = 1, a07())
	}
}

function zr() {
	this.j3 = function() {
		var a0S;
		2 === aD.a06 ? (aN.a0L(0, 59), aH.nI(2700)) : aD.kS < 7 ? (a0S = bg.kX[aD.a01], a0S = bg.a0U[a0S], aQ.a0V(L(26, [a0S]), 2, 1, 12), aN.yb(0, L(27, [a0S]), 40, 0, bB.nj, bB.ng, -1, !1), aH.nI(2700)) : 8 === aD.kS ? (aD.a0E ? aN.a0L(aD.a0Q,
			2) : aN.a0L(1 - aD.eX, 3), aD.a0R.yR(aD.a0Q), aH.n4(aD.a0Q, 2700, !1, 0)) : 9 === aD.kS ? (aN.a0W(), aH.nI(2700)) : (aN.a0X(aD.a0Q), aH.n4(aD.a0Q, 2700, !1, 0))
	}
}

function zv() {
	function a0h() {
		var tE;
		return 8 === aD.kS ? 0 : (tE = Math.floor(ag.a0i[aD.eX] / 50), (tE = Math.min(tE, 400)) / 100)
	}

	function a0Z() {
		var tE = a0h();
		0 !== tE && aN.yb(440, L(28, [tE.toFixed(2)]), 40, 0, bB.o1, bB.ng, -1, !1)
	}
	this.j3 = function() {
		var a0a;
		0 === bR.result.a0Y || 0 === bR.result.zy.length || 8 === aD.kS ? bA.g9.gz(aD.eX) && a0Z() : (function(a0a) {
			7 !== aD.kS && 10 !== aD.kS || 0 !== aD.a0E && a0a && aN.yb(600, L(32, [a0a.toFixed(2)]), 40, 0, bB.nj, bB.ng, -1, !1)
		}(a0a = function() {
			aN.yb(520, L(29), 40, 0, bB.nj, bB.ng, -1, !1);
			for (var zy = bR.result.zy, en = zy.length, gb = ag.gb, g = [], aB = 0; aB < en; aB++) {
				var gL = zy[aB];
				g.push({
					gL: gL,
					dt: gb[gL]
				})
			}
			g.sort((f6, f7) => f7.dt - f6.dt);
			var a0U = ag.yc,
				dt = bR.result.a0j,
				tE = bR.result.a0Y,
				qI = "",
				a0a = 0;
			for (aB = 0; aB < en; aB++) {
				var hX = g[aB].dt * tE / (100 * dt),
					a0l = a0U[g[aB].gL] + ": " + hX.toFixed(2) + "   ";
				g[aB].gL === aD.eX && (a0a = hX), 2 < aB && 4 !== en ? 3 === aB && (qI += "(" + L(30, [en - 3]) + ")") : qI += a0l
			}
			aN.yb(560, bA.ra.a0m(qI), 40, 0, bB.o1, bB.ng, -1, !1), a0a ? aN.yb(580, L(31, [a0a.toFixed(2) + " + " + a0h().toFixed(2)]), 40, 0, bB.o1, bB.ng, -1, !1) : bA.g9.gz(aD.eX) && a0Z();
			return a0a
		}()), 2 === aD.a06 || 7 <= aD.kS || function(a0a) {
			var zy = bR.result.zy,
				en = zy.length,
				a0n = ag.a0n,
				gb = ag.gb,
				a0o = [];
			loop: for (var aB = 0; aB < en; aB++) {
				var gL = zy[aB],
					a0p = bA.ra.a0q(a0n[gL]);
				if (null !== a0p) {
					for (var a0r = gb[gL], f7 = a0o.length - 1; 0 <= f7; f7--)
						if (a0p === a0o[f7].name) {
							a0o[f7].dt += a0r, a0o[f7].g.push({
								gL: gL,
								dt: a0r
							});
							continue loop
						} a0o.push({
						name: a0p,
						dt: a0r,
						g: [{
							gL: gL,
							dt: a0r
						}]
					})
				}
			}
			if (0 !== a0o.length) {
				a0o.sort((f6, f7) => f7.dt - f6.dt);
				var g = a0o[0].g,
					a0s = (g.sort((f6, f7) => f7.dt - f6.dt), "[" + a0o[0].name + "]"),
					a0t = 512 * bR.result.a0Y / 26214400,
					l5 = (aN.yb(0, L(33, [a0s, a0t.toFixed(4)]), 40, 0, bB.nj, bB.ng, -1, !1), g.length),
					wI = a0o[0].dt,
					a0u = 1e4 * a0t;
				for (aB = 0; aB < l5; aB++)
					if (g[aB].gL === aD.eX) {
						aN.yb(600, L(34, [(a0u * g[aB].dt / (10 * wI)).toFixed(2)]), 40, 0, bB.nj, bB.ng, -1, !1), aN.yb(640, L(35, [(.2 * a0a).toFixed(2), a0s]), 40, 0, bB.nj, bB.ng, -1, !1);
						break
					} aD.gw || aN.yb(720, L(36) + bK.a0v, 736, 0, bB.nj, bB.o7, -1, !1)
			}
		}(a0a))
	}, this.a0e = function() {
		var a0f, wk;
		aD.kU || (a0f = ag, wk = aD.eX, 0 === a0f.a0g[wk]) || a0f.jD[wk] < 1 || 2 * a0f.q0[wk] > 3 * (a0f.jC[wk] + a0f.jD[wk]) || a0Z()
	}
}

function zn() {
	this.dd = function() {
		this.a0w = 0, this.zy = [], this.a0j = 0, this.a0Y = 0
	}, this.a0D = function() {
		var sD;
		aD.kU || (sD = this, 2 === aD.a06 ? sD.zy = bR.zo.zw() : aD.hh ? sD.zy = bR.zo.a00() : sD.zy = bR.zo.a02(), sD.a0w = bi.a0y.a0z(), sD.a0j = Math.max(1, bR.zo.a03(sD.zy)), b8.g9.ph(), 8 === aD.kS ? bR.result.a0Y = 0 : sD.a0Y = 100 * bR
			.result.a0w * (1 + aD.ya))
	}
}

function zt() {
	this.a0D = function() {
		if (2 === aD.a06) aD.a0E = 2;
		else {
			if (8 === aD.kS) bA.g9.jX(0) || 0 === ag.mj[0] ? aD.a0Q = 1 : bA.g9.jX(1) || 0 === ag.mj[1] ? aD.a0Q = 0 : aD.a0Q = +(ag.gb[1] > ag.gb[0]);
			else {
				if (aD.hh) {
					var ki = bh.a12();
					if (aD.a01 = ki, bg.kX[ki]) return void(aD.a0E = +(bg.el[aD.eX] === ki))
				}
				aD.a0Q = ll[0]
			}
			aD.a0E = +(aD.a0Q === aD.eX)
		}
	}
}

function dF() {
	this.id = 0, this.dv = 0, this.vT = null, this.vU = null, this.vV = null, this.vb = null, this.a1 = new a13, this.dd = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.vU = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vV = mwIOSdataX, self.vb = window.webkit.messageHandlers.iosCommandA, dv = self
					.vV.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var vT;
				try {
					if (!(vT = window.localStorage)) return;
					vT.setItem("tls7", "1"), vT.removeItem("tls7")
				} catch (error) {
					return
				}
				self.vT = vT
			}(this)
	}
}

function a13() {
	this.a17 = function() {
		bj.s3.vo(), bj.s3.vp(), b0.y.close(0, 3255), 0 === a0.id ? a0.vT && a0.vT.clear() : 1 === a0.id ? a0.vU.saveString(199, "") : 2 === a0.id && a0.vb.postMessage("clear")
	}, this.a18 = function() {
		2 === a0.id ? a0.vb.postMessage("showConsentForm") : 1 === a0.id && a0.vU.setState(7)
	}, this.a19 = function() {
		this.setState(14)
	}, this.hw = function() {
		return 1 === bj.eK.vH(2)
	}, this.a1A = function() {
		bj.eK.vF(102, "")
	}, this.setState = function(a1B) {
		1 === a0.id && 5 <= a0.dv && a0.vU.setState(a1B)
	}, this.a2 = function() {
		var a1C;
		1 === a0.id && 7 <= a0.dv ? a0.vU.setState(5) : ((a1C = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1C.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dv < 17 || a0.vU.saveString(23, document.documentElement.outerHTML)
	}, this.eI = function() {
		0 !== a0.id && (1 === a0.id ? a0.vU.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dv ? a0.vb.postMessage("prepare ad 1770251391") : a0.vb.postMessage("loadAds 1770251391")))
	}, this.eN = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dv ? a0.vb.postMessage("show ad " + dt) : a0.vb.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dv < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1D + "' target='_blank'>" + bK
			.a1D + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oO)]))
	}
}

function dU() {
	function a1G(e) {
		lU(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a1J()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.o6)]))
	}

	function a1R(e) {
		lU(e), t.u(4, 5, new v(L(38), a1N(e), !0))
	}

	function a1N(e) {
		var qI = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qI : 4527 === e ? "Player already in lobby" + qI : 4530 === e ? "Lobby Timeout" + qI : 4528 === e ? "Lobby Kick: Another login detected." + qI : 4540 === e ?
			"You have been kicked." + qI : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qI : 4555 === e ? "Invalid Account Error. Please Try Again." + qI : "Unknown error" + qI
	}

	function lU(e) {
		a1L(e), t.y.z()
	}

	function a1L(e) {
		var a1B = aa.a1K();
		6 === a1B ? b0.y.a1T(e) : bn.a1H ? (t.x(), bn.uD(), b0.y.close(b0.y.a1I, 3256)) : 8 === a1B && aD.a1U(!0)
	}
	this.p = [], this.a1E = function(a1F, e) {
		if (this.p.push(e), 8 === t.sq && 0 === a1F)
			if (4211 === e) a1G(e);
			else {
				if (bn.a1H && (4495 === e || 4480 === e) && b0.y.a1I !== a1F) return void t.a1J();
				if (8 !== aa.a1K() && a1L(), 4480 === e) return bj.s3.vq(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a1N(e), !0))
			}
		else {
			var a1B = aa.a1K();
			if (6 === a1B) {
				if (4211 === e) return void a1G(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a1O(a1F)
			} else {
				if (!bn.a1H) return 8 === a1B ? void(a1F !== b0.y.a1P || aD.kU || 1 !== aD.a09 || aD.gw || aN.a1Q(L(39, [e]))) : void 0;
				if (a1F !== b0.y.a1I) return
			}
			a1R(e)
		}
	}, this.a1S = function(e) {
		this.p.push(e), 8 === aa.a1K() ? aD.kU || 1 !== aD.a09 || aN.a1Q(L(39, [e])) : a1R(e)
	}, this.s = function() {
		this.p.push(3268), lU(3268)
	}
}

function d4() {
	var a1V, a1W, a1X = -15e3,
		a1Y = !1;

	function h0(e) {
		a1s() || (a1Y = !0, a1t(e, 1), b0.y.a1u(b0.y.a1P), a1v(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1h(e) {
		a1X = bf.eM, a1t(e, 1), b0.y.a1u(b0.y.a1P), 0 < e.touches.length && (a1V = Math.floor(h.k * e.touches[0].clientX), a1W = Math.floor(h.k * e.touches[0].clientY), au.a1h(e) || a1v(a1V, a1W))
	}

	function a1v(eu, ew) {
		t.h0(eu, ew), 0 === aD.a09 ? aa.h0(eu, ew) : bC.a1w(eu, ew) || be.h0(eu, ew) || aX.h0(eu, ew) || aL.a1x(eu, ew) || aP.h0(eu, ew) || 0 <= aM.h0(eu, ew) || aw.h0(eu, ew) || bJ.a1y(eu, ew) || aL.a1z(eu, ew)
	}

	function a1d(e) {
		a1s() || (a1Y = !0, a1t(e, 1), a20(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1i(e) {
		a1X = bf.eM, a1t(e, 1), 0 < e.touches.length && (a1V = Math.floor(h.k * e.touches[0].clientX), a1W = Math.floor(h.k * e.touches[0].clientY), au.a1i(e) || a20(a1V, a1W))
	}

	function a20(eu, ew) {
		t.a1d(eu, ew), 0 === aD.a09 ? aa.a1d(eu, ew) : (bT.gu(eu, ew), be.a1d(eu, ew) || (aM.a1d(eu, ew), aL.hZ() ? aL.a1d(eu, ew) : aR.h1 ? aR.a1d(eu) && (bf.dl = !0) : (aV.a1d(eu, ew), aS.nE && aS.a1d(eu, ew) && (bf.dl = !0))))
	}

	function a1f(e) {
		a1s() || (a1t(e, 1), a21(), 0 === aD.a09 ? (aa.click(-1024, -1024), aT.rc()) : (aV.a22(-1024, -1024), aM.a1d(-1024, -1024), aR.a23(), aS.nE = !1))
	}

	function a1e(e) {
		a1s() || (a1t(e, 1), a24(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a1b && (bJ.a1b = !1, e.preventDefault()))
	}

	function click(e) {
		a1s() || a1t(e, 1)
	}

	function a1j(e) {
		a1X = bf.eM, a1t(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a09 ? aS.nE = !1 : au.a25() || (a24(a1V, a1W, !1), bJ.a1b && (bJ.a1b = !1, e.preventDefault()))
	}

	function a1k(e) {
		a1X = bf.eM, a1t(e, 1), a24(a1V, a1W, !1), bJ.a1b && (bJ.a1b = !1, e.preventDefault())
	}

	function a1l(e) {}

	function a1m(e) {}

	function a1n(e) {
		a1s() || a1t(e, 0)
	}

	function a24(eu, ew, a26) {
		a21(), 0 === aD.a09 ? aa.click(eu, ew) : (aV.a22(eu, ew), be.a22(), aR.a23(), aS.nE = !1, aL.click(eu, ew, a26) ? bf.dl = !0 : aM.a1e(eu, ew))
	}

	function a21() {
		t.a21()
	}

	function a1g(e) {
		var eu, ew, deltaY;
		a1s() || (a1t(e, 1), b0.y.a1u(b0.y.a1P), eu = Math.floor(h.k * e.clientX), ew = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1g(eu, ew, deltaY), 0 === aD.a09 ? aa.a1g(eu, ew, deltaY) : aV.a1g(eu, ew,
			deltaY) || (aR.a27(eu, ew) ? aR.a1g(deltaY) && (bf.dl = !0) : aS.a1g(eu, ew, deltaY)))
	}

	function a1o(e) {
		a1t(e, 0)
	}

	function a1t(e, id) {
		0 === id && t.hZ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a1K() && e.preventDefault()
	}

	function a1p(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1s() || 0 < h.sY || (e = e.code) && e.length && (bX.f8(e, 18) ? ar.a29(3) : bX.f8(e, 22) ? ar.a29(0) : bX.f8(e, 20) ? ar.a29(1) : bX.f8(e, 24) ? ar.a29(2) : bX.f8(e, 10) ? aR.a2A(31 / 32) : bX.f8(e, 8) ? aR.a2A(32 / 31) : bX.f8(e, 6) ? aR
			.a2A(7 / 8) : bX.f8(e, 4) ? aR.a2A(8 / 7) : bX.f8(e, 14) ? 0 !== aD.a09 && aS.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.f8(e, 16) ? 0 !== aD.a09 && aS.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.f8(e, 0) ?
			aD.a09 && bT.gv(0) : bX.f8(e, 2) ? aD.a09 && bT.gv(1) : bX.f8(e, 30) ? aD.a09 && bT.gv(2) : bX.f8(e, 26) ? aD.a09 && bT.hT() : bX.f8(e, 28) && aD.a09 && bT.hY())
	}

	function a1q(e) {
		if (!a1s() && !(0 < h.sY || bf.eM < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2B(1) || "Space" === code && t.a2B(0))) return bn.a1H ? bn.uJ.a2B(code) ? void 0 : void("Escape" === code && bJ.fG()) : void(8 !== aa.a1K() && aa.a2B(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fG() : bX.f8(code, 18) ? ar.a2C(3) : bX.f8(code, 22) ? ar.a2C(0) : bX.f8(code, 20) ? ar.a2C(1) : bX.f8(code, 24) ? ar.a2C(2) : bX.f8(code, 12) ? bC.a2D(!aD.nC) : "Space" === code && aD.a09 && (aM.gx && aM.a2E(), aD
					.gw) && bC.a2F(!1))
		}
	}

	function a1r() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a1s() {
		return a1X + 15e3 > bf.eM
	}

	function resize() {
		h.a2H()
	}
	this.a1Z = 0, this.a1a = "", this.a1b = !1, this.dd = function() {
		a1c.addEventListener("mousedown", h0, {
			passive: !1
		}), a1c.addEventListener("mousemove", a1d, {
			passive: !1
		}), a1c.addEventListener("mouseup", a1e, {
			passive: !1
		}), a1c.addEventListener("click", click, {
			passive: !1
		}), a1c.addEventListener("mouseleave", a1f, {
			passive: !1
		}), a1c.addEventListener("wheel", a1g, {
			passive: !1
		}), a1c.addEventListener("touchstart", a1h, {
			passive: !1
		}), a1c.addEventListener("touchmove", a1i, {
			passive: !1
		}), a1c.addEventListener("touchend", a1j, {
			passive: !1
		}), a1c.addEventListener("touchcancel", a1k, {
			passive: !1
		}), a1c.addEventListener("dragover", a1l), a1c.addEventListener("drop", a1m), a1c.addEventListener("dblclick", a1n), document.addEventListener("contextmenu", a1o), document.addEventListener("keydown", a1p), document.addEventListener(
			"keyup", a1q), document.addEventListener("visibilitychange", a1r), window.addEventListener("resize", resize)
	}, this.a1y = function(eu, ew) {
		return !!bC.h0(eu, ew) || !!(aV.h0(eu, ew) || aS.h0(eu, ew) || aR.h0(eu, ew) || aN.h0(eu, ew))
	}, this.a2G = a1s, this.r3 = function() {
		return !a1Y || 0 < a1X
	}, this.fG = function() {
		if (!t.hZ()) return 8 === aa.a1K() ? aD.nC ? void bC.a2D(!1) : be.hZ ? void be.a2E() : void aM.a2E() : void(7 !== aa.a1K() && 6 === aa.a1K() && aZ.a2I());
		t.a2B(2)
	}
}

function bz() {
	this.qb = new a2J, this.qj = new a2K, this.g9 = new a2L, this.ra = new a2M, this.yJ = new a2N, this.a2O = new a2P, this.canvas = new a2Q, this.color = new a2R, this.a2S = new a2T, this.dd = function() {
		this.qb.vn()
	}
}

function a2K() {
	this.wi = function(g) {
		g.fill(0)
	}, this.a2U = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++) g[aB] = []
	}, this.a2V = function(zF, a2W) {
		for (var zG = bO.fN, aB = 0; aB < 3; aB++) zG[aB] = a2W * zF[aB];
		return zG
	}, this.a2X = function(zF, zG, a2Y) {
		for (var jP = 0, aB = 0; aB < 3; aB++) jP += Math.abs(zF[aB] - zG[aB]);
		return a2Y <= jP
	}, this.a2Z = function(zF, a2a) {
		for (var aB = 0; aB < 3; aB++) zF[aB] = bL.hv(zF[aB] + a2a, 0, 255);
		return zF
	}, this.a2b = function(g, tA, tB) {
		tB = tB || g.length - 1;
		for (var a2c = 0, aB = tA = tA || 0; aB <= tB; aB++) a2c += g[aB];
		return a2c
	}, this.a2d = function(g, a2e) {
		for (var aB, a2f, en = g.length, a2g = [], f6 = en - 1; 0 <= f6; f6--) {
			for (aB = a2f = 0; aB < en; aB++) a2e(g[aB]) < a2e(g[a2f]) && (a2f = aB);
			en--, a2g.push(g[a2f]), g[a2f] = g[en], g.pop()
		}
		return a2g
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
	}, this.a2h = function(g, fF) {
		for (var en = g.length, gG = 0, aB = 0; aB < en; aB++) gG += g[aB] > fF;
		return gG
	}, this.a2i = function(a2j, a2k, min) {
		for (var en = a2k[0], aB = en - 1; 0 <= aB; aB--) a2j[aB] < min && (a2j[aB] = a2j[--en]);
		a2k[0] = en
	}, this.a2l = function(g, en, value) {
		for (var aB = 0; aB < en; aB++) g[aB] -= value
	}, this.a2m = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2n = function(qI, g, a2o) {
		g.fill(0);
		for (var tE = qI.split(","), en = Math.min(tE.length, g.length), aB = 0; aB < en; aB++) g[aB] = Math.min(parseInt(tE[aB]), a2o)
	}, this.a2p = function(qI, g, rX) {
		g.fill("");
		for (var tE = qI.split('"'), en = Math.min(tE.length, 2 * g.length), hf = 0, aB = 1; aB < en; aB += 2) g[hf++] = tE[aB].slice(0, rX)
	}, this.a2q = function(g, gG) {
		if (0 === gG) g.fill(0);
		else {
			var a2c = this.a2b(g),
				en = g.length;
			if (0 === a2c) g.fill(bL.du(gG, en));
			else
				for (var aB = 0; aB < en; aB++) g[aB] = bL.du(gG * g[aB], a2c);
			if (0 === (a2c = this.a2b(g))) g[1] = gG;
			else
				for (var hf = 0; a2c++ < gG;) g[hf = (hf + 1) % en] && g[hf]++
		}
	}, this.a2r = function(g) {
		if (!g) return 0;
		var en = g.length;
		if (0 === en) return 0;
		for (var fF = g[en - 1], aB = en - 2; 0 <= aB; aB--)
			if (g[aB] !== fF) return aB + 2;
		return 1
	}, this.a2s = function(g) {
		for (var a2c = 0, aB = 0; aB < g.length; aB++) a2c += g[aB].length;
		return a2c
	}, this.a2t = function(a2u) {
		for (var g = [], aB = 0; aB < a2u.length; aB++) g = g.concat(a2u[aB]);
		return g
	}, this.has = function(g, fF) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if (g[aB] === fF) return !0;
		return !1
	}
}

function a2Q() {
	this.yt = function(a2v, e8, a2w) {
		var hj = a2v.height,
			a2x = bA.qb.wY(hj, hj),
			hp = bA.qb.getContext(a2x);
		return function(i, hp, a2w) {
			hp.fillStyle = a2w, hp.beginPath(), hp.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hp.fill()
		}(hj, hp, a2w), hp.drawImage(a2v, -e8 * hj, 0), a2x
	}, this.a2z = function(a30) {
		var hp, hm, hj = a30.height;
		return a30.width === hj && (hm = (hp = bA.qb.getContext(a30, !0)).getImageData(0, 0, hj, hj), bA.a2O.a31(hm.data, hj, hj, .9), hp.putImageData(hm, 0, 0)), a30
	}
}

function a2R() {
	this.a32 = function(fF) {
		return [fF >> 12 & 63, fF >> 6 & 63, 63 & fF]
	}, this.a33 = function(fF) {
		for (var g = this.a32(fF), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a34 = function(fF) {
		fF = this.a33(fF);
		return bA.color.nb(fF[0], fF[1], fF[2])
	}, this.a35 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nb = function(e7, tE, f7) {
		return "rgb(" + e7 + "," + tE + "," + f7 + ")"
	}, this.nd = function(e7, tE, f7, f6) {
		return "rgba(" + e7 + "," + tE + "," + f7 + "," + f6.toFixed(3) + ")"
	}, this.r5 = function(f8) {
		for (var g = f8.split("(")[1].split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = parseInt(g[aB]);
		return 4 === g.length ? fM[3] = 255 * parseFloat(g[3].slice(0, -1)) : fM[3] = 255, fM
	}, this.r6 = function(a36, eq) {
		for (var g = a36.slice(a36.indexOf("(") + 1, a36.indexOf(")")).split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = bL.hv(parseInt(g[aB].trim(), 10) + eq, 0, 255);
		return 3 === g.length ? this.nb(fM[0], fM[1], fM[2]) : (a36 = parseFloat(g[3].trim()), this.nd(fM[0], fM[1], fM[2], a36 = 0 === a36 ? .3 : a36))
	}, this.a37 = function(g) {
		for (var qI = "#", aB = 0; aB < 3; aB++) {
			var e7 = g[aB].toString(16);
			qI += 1 === e7.length ? "0" + e7 : e7
		}
		return qI
	}, this.a38 = function(qI) {
		var e7, tE;
		return qI.length < 7 ? bB.na : (e7 = parseInt(qI.slice(1, 3), 16), tE = parseInt(qI.slice(3, 5), 16), qI = parseInt(qI.slice(5, 7), 16), this.nb(e7, tE, qI))
	}
}

function a2N() {
	this.a39 = function(qI, font, maxWidth) {
		if (font && (uk.font = font), uk.measureText(qI).width <= maxWidth) return qI;
		for (var aB = qI.length - 1; 1 <= aB; aB--)
			if (qI = qI.substring(0, aB), uk.measureText(qI + "...").width <= maxWidth) return qI + "...";
		return "..."
	}
}

function a2T() {
	var a3B = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a3C = function(eM) {
		var a3E, qI = new Date(eM.getTime() - 6e4 * eM.getTimezoneOffset()).toUTCString();
		return qI.length < 12 || (qI = qI.substring(5, qI.length), 0 === (eM = eM.getTimezoneOffset())) ? qI : (a3E = (eM < 0 ? "+" : "-") + bL.du(Math.abs(eM), 60), 0 == (eM = Math.abs(eM) % 60) ? qI + a3E : qI + a3E + ":" + (eM < 10 ? "0" :
			"") + eM)
	}, this.a3F = function(eM) {
		var qI = eM.toUTCString();
		return qI.length < 12 ? qI : function(eM) {
			return a3B[eM.getUTCDay()]
		}(eM) + ", " + qI.substring(5, qI.length - 4)
	}
}

function a2J() {
	var a3H = null;
	this.zA = 0, this.vn = function() {
		var fF = bj.eK.data[5].value;
		a3H = "px " + fF, "Trebuchet MS" !== fF && (a3H += ", Trebuchet MS"), this.zA = hi(32, 32, ["a", "b", "m"], 200, a3H)
	}, this.wY = function(i, j) {
		var f8 = document.createElement("canvas");
		return f8.width = i, f8.height = j, f8
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(yJ, i, j) {
		return yJ.getImageData(0, 0, i, j)
	}, this.sQ = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a3H : 1 === type ? "bold " + size + a3H : 2 === type ? "lighter " + size + a3H : 3 === type ? "italic " + size + a3H : 4 === type ? "oblique " + size + a3H : 5 === type ? "small-caps " +
			size + a3H : "small-caps bold " + size + a3H
	}, this.textAlign = function(hp, id) {
		hp.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hp, id) {
		hp.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.ql = function(e, code, color) {
		color = this.qk(bc.sS) + " solid " + (color || bB.nj);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tG = function(e, eu, ew, i, j) {
		e = e.style;
		e.left = this.tH(eu), e.top = this.tH(ew), e.width = this.tH(i), e.height = this.tH(j)
	}, this.qc = function(fF) {
		return 1 + fF * a0.a1.hw()
	}, this.ru = function(nL, gM) {
		return nL * this.qc(void 0 === gM ? .5 : gM) * h.hx / h.k
	}, this.tF = function(nL, gM) {
		return nL * this.qc(void 0 === gM ? .5 : gM) * h.hx
	}, this.sw = function(nL, gM, a3I) {
		return this.qc(gM) * Math.min(nL * h.hx, a3I * h.i) / h.k
	}, this.qk = function(fF) {
		return fF.toFixed(1) + "px"
	}, this.tH = function(fF) {
		return this.a3K(fF).toFixed(1) + "px"
	}, this.a3K = function(fF) {
		return fF / h.k
	}, this.a3L = function(sg, a3M) {
		for (var qI = "<ul>", en = sg.length, aB = 0; aB < en; aB++) qI += "<li>" + sg[aB] + ": <a href='" + a3M[aB] + "' target='_blank'>" + a3M[aB] + "</a></li>";
		return qI += "</ul>"
	}, this.a3N = function(a3O) {
		return "<a href='" + a3O + "' target='_blank'>" + a3O + "</a>"
	}, this.a3P = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3Q = function(e) {
		var dt = e.textContent;
		bA.ra.a3R(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qI) {
		return uk.measureText(qI).width
	}, this.t6 = function(a3S) {
		a3S.style.overflowX = "auto", a3S.style.overflowY = "hidden", a3S.style.whiteSpace = "nowrap", a3S.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tJ = this.scrollLeft, e.preventDefault())
		}), a3S.addEventListener("scroll", function() {
			this.tJ = this.scrollLeft
		})
	}
}

function a2L() {
	this.gy = function(a1B) {
		return 0 === a1B ? 1 === aD.a09 && aD.hB : 1 === a1B ? 1 === aD.a09 && !aD.hB : 2 === aD.a09
	}, this.gz = function(player) {
		return 0 !== ag.mj[player] && 2 !== ag.a3T[player]
	}, this.a3U = function(player) {
		return player === aD.eX && 2 !== ag.a3T[player]
	}, this.ko = function(player, jJ) {
		return player !== jJ && (0 === bg.el[player] || bg.el[player] !== bg.el[jJ])
	}, this.lv = function() {
		return al.kg < 2 ? 0 : aD.hh ? 1 < bh.a3V() : ag.gb[ll[1]]
	}, this.a3W = function() {
		var kg = al.kg;
		if (0 !== kg) {
			if (!aD.hh) return !this.jX(ll[0]);
			for (var el = bg.el, ki = bh.kj(), kl = al.kl, aB = kg - 1; 0 <= aB; aB--) {
				var gL = kl[aB];
				if (el[gL] === ki && !this.jX(gL)) return 1
			}
		}
		return 0
	}, this.a3X = function(player) {
		return player === aD.eX
	}, this.a3Y = function(jJ, nL) {
		return ag.gp[aD.eX] < nL * ag.gp[jJ]
	}, this.jX = function(player) {
		return player >= aD.kA || 2 === ag.a3T[player]
	}, this.l8 = function(player) {
		return 0 !== ag.mj[player]
	}, this.zz = function(player) {
		return player < aD.kA
	}, this.py = function(a3Z, a3a) {
		return a3Z !== a3a
	}, this.gC = function(player, fF) {
		var min;
		return fF = this.a3b(player, fF), ag.gp[player] += fF, ag.a3c[player] && (min = Math.min(ag.a3c[player], ag.gp[player]), ag.a3c[player] -= min, ag.gp[player] -= min), fF
	}, this.a3b = function(player, fF) {
		var a3d = ag.gp[player];
		return fF = Math.min(fF, ag.gb[player] * aD.a3e - a3d), fF = Math.min(fF, aD.a3f - a3d), Math.max(fF, 0)
	}, this.mI = function(player, iN, a3g, a3h) {
		var a3d = ag.gp[player],
			iN = bL.du(a3d * (iN + 1), 1024),
			a3g = bL.du(a3g * a3d, 1024),
			iN = Math.min(iN, a3d - a3g);
		return 10 === aD.kS && (iN = b4.a3j(player, iN)), bO.fK[0] = iN, bO.fK[1] = a3g, a3h <= iN
	}, this.pS = function(player, pA, p9) {
		var player = ag.gp[player],
			a3i = bL.du(64 * player, 1024);
		return pA = Math.min(pA, player - a3i), pA = this.a3b(p9, pA), bO.fK[0] = pA, bO.fK[1] = a3i, 1 <= pA
	}, this.a3k = function(player, pA, p9) {
		var player = ag.gp[player],
			a3i = bL.du(64 * player, 1024);
		return pA = Math.min(pA, player - a3i), this.a3b(p9, pA)
	}, this.pU = function(pA, p9) {
		return pA = this.a3b(p9, pA), bO.fK[0] = pA, bO.fK[1] = 0, 1 <= pA
	}, this.iM = function(player, a3l) {
		return bL.du(ag.gp[player] * (a3l + 1), 1024)
	}, this.a3m = function(player, a3g) {
		a3g = bL.du(a3g * ag.gp[player], 1024);
		bO.fK[1] = a3g, ag.gp[player] -= a3g
	}, this.gA = function(player, a3n) {
		var fY, fa, f7 = ag.gp[player];
		return a3n <= f7 ? ag.gp[player] -= a3n : (ag.gp[player] = 0, fa = ag.a3c[player] + (fY = 5 * ((f7 = a3n - f7) >> 2)), bd.gD(player, fY - f7, 12), fa <= aD.a3o ? ag.a3c[player] = fa : (ag.a3c[player] = aD.a3o, bd.gD(player, fa - aD.a3o,
			18))), a3n
	}, this.lM = function(player, iN) {
		var gp = ag.gp,
			a3d = gp[player],
			iN = bL.du(a3d * (iN + 1), 1024),
			a3i = Math.max(bL.du(a3d, 10), 1e3);
		return (iN = Math.min(iN, a3d - a3i)) < 0 ? (gp[player] = 0, a3i = Math.min(1e3, a3d + aD.a3o - ag.a3c[player]), bO.fK[1] = a3i, ag.a3c[player] += a3i - a3d, 0) : (bO.fK[1] = a3i, 10 === aD.kS && (iN = b4.a3j(player, iN)), gp[player] -=
			a3i + iN, iN)
	}, this.mK = function(player) {
		ag.gp[player] -= bO.fK[0] + bO.fK[1]
	}, this.pz = function(player, jJ) {
		return (jJ = Math.min(jJ, aD.ek)) < aD.ek && 0 === ag.mj[jJ] && (jJ = aD.ek), (bO.ej[0] = jJ) === aD.ek || bs.eg(player, jJ)
	}, this.q2 = function(player, p9) {
		return 0 !== ag.mj[p9] && !bs.eg(player, p9)
	}, this.a3p = function(player, a3q) {
		for (var gL, en = al.kg, a3r = 0, a3s = ll, aB = 0; aB < en; aB++)
			if (gL = a3s[aB], !this.jX(gL)) {
				if (player === gL) return !0;
				if (++a3r > a3q) return !1
			} return !1
	}, this.lh = function(gL) {
		var a3t = aD.hh ? bh.kh() : ag.gb[ll[0]];
		return a3t >= bL.du(gL * aD.ju, 100)
	}, this.a3u = function(fF, min, max) {
		return Math.floor(bL.hv(isNaN(fF) ? 0 : Number(fF), min, max))
	}
}

function a2P() {
	this.a3v = function(canvas, a3w, a3x) {
		var i = canvas.width,
			j = canvas.height,
			f8 = bA.qb.wY(i, j),
			hp = bA.qb.getContext(f8, !0),
			canvas = (hp.drawImage(canvas, 0, 0), hp.getImageData(0, 0, i, j));
		return a3w(canvas.data, i, j, a3x), hp.putImageData(canvas, 0, 0), f8
	}, this.a3y = function(wj, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wj[3 + aB] = wj[aB], wj[aB] = wj[1 + aB] = wj[2 + aB] = 255
			}
	}, this.a3z = function(wj, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wj[1 + aB] > wj[2 + aB] + 10 && (wj[3 + aB] = wj[aB], wj[1 + aB] = wj[2 + aB])
			}
	}, this.a40 = function(wj, i, j, a3x) {
		for (var gap = Math.floor(Math.min(i, j) * a3x), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wj[3 + (aB = 4 * (eu + ew * i))] = 255 - 255 * (wj[1 + aB] - wj[aB]) / (255 - wj[aB]))
	}, this.a41 = function(wj, i, j, a3x) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wj[aB] = a3x[0], wj[1 + aB] = a3x[1], wj[2 + aB] = a3x[2]
			}
	}, this.a42 = function(wj, i, j, a3x) {
		for (var gap = Math.floor(i * a3x), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wj[aB = 4 * (eu + ew * i)] = wj[1 + aB] = wj[2 + aB] = 0)
	}, this.a43 = function(wj, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) 200 < wj[1 + (aB = 4 * (eu + ew * i))] && wj[1 + aB] - 20 > wj[aB] && wj[1 + aB] - 20 > wj[2 + aB] ? wj[aB] + wj[2 + aB] < 40 ? wj[3 + aB] = 0 : (wj[3 + aB] = wj[aB], wj[aB] = 255, wj[1 + aB] = 255, wj[
				2 + aB] = 255) : wj[aB] < 50 && wj[1 + aB] < 50 && wj[2 + aB] < 50 && (wj[aB] + wj[1 + aB] + wj[2 + aB] < 50 ? wj[3 + aB] = 180 : wj[3 + aB] = 180 + Math.floor(75 * (wj[aB] + wj[1 + aB] + wj[2 + aB] - 50) / 100))
	}, this.a44 = function(wj, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) wj[1 + (aB = 4 * (eu + ew * i))] > wj[aB] + 20 && wj[1 + aB] > wj[2 + aB] + 20 && wj[aB] + wj[2] < 40 && (wj[3 + aB] = 255 - wj[1 + aB], wj[aB] = wj[1 + aB] = wj[2 + aB] = wj[aB])
	}, this.a31 = function(wj, i, j, a3x) {
		for (var e7 = i >> 1, eu = 0; eu < i; eu++)
			for (var ew = 0; ew < j; ew++) Math.sqrt((eu - e7) * (eu - e7) + (ew - e7) * (ew - e7)) > a3x * e7 && (wj[4 * (eu + ew * i) + 3] = 0)
	}
}

function a2M() {
	var a45 = {
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
		a46 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rb = function(v0) {
		return v0.replace(a46, function(match) {
			return a45[match] || match
		})
	}, this.zQ = function(fF) {
		var aB, a47, a48, a49, a4A;
		if (fF < 0) return "-" + this.zQ(Math.abs(fF));
		if (fF < 1e3) return fF.toString();
		for (a47 = Math.floor(Math.log(fF + .5) / Math.log(10)) + 1, a48 = Math.floor((a47 - 1) / 3), a4A = (a49 = fF.toString()).substring(a47 - 3, a47), aB = 1; aB < a48; aB++) a4A = a49.substring(a47 - 3 * (aB + 1), a47 - 3 * aB) + " " + a4A;
		return a49.substring(0, a47 - 3 * a48) + " " + a4A
	}, this.a4B = function(gL, a47) {
		return gL.toFixed(a47) + "%"
	}, this.a4C = function(fF, a4D) {
		return fF.toFixed(bL.hv(Math.floor((void 0 === a4D ? 3 : a4D) - Math.log10(Math.max(fF, 1))), 0, 8))
	}, this.a4E = function(fF, nL, a47) {
		return (fF * nL).toFixed(a47)
	}, this.a0q = function(username) {
		var er, ec = username.indexOf("[");
		return !(ec < 0) && 1 < (er = username.indexOf("]")) - ec && er - ec <= 8 ? username.substring(ec + 1, er).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0q;
	this.a4F = function(qI) {
		for (var f6 = Math.floor(.5 * qI.length + .5), nR = Math.floor(.5 * (f6 - 1)), aB = 0; aB < nR; aB++)
			for (var f7 = -1; f7 < 2; f7 += 2) {
				var f8 = f6 + f7 * aB;
				if (" " === qI[f8]) return [this.a0m(qI.substring(0, f8)), this.a4G(qI.substring(f8))]
			}
		return [qI.substring(0, f6), qI.substring(f6)]
	}, this.a4G = function(qI) {
		for (var en = qI.length, aB = 0; aB < en; aB++)
			if (" " !== qI[aB]) return qI.substring(aB);
		return qI
	}, this.a0m = function(qI) {
		for (var aB = qI.length - 1; 0 <= aB; aB--)
			if (" " !== qI[aB]) return qI.substring(0, aB + 1);
		return qI
	}, this.a4H = function(qI, a4I) {
		return qI.split("(")[0] + "(🧈 " + a4I.toFixed(2) + ")"
	}, this.startsWith = function(qI, a4J) {
		return qI.substring(0, a4J.length) === a4J
	}, this.a3R = function(qI, a4J) {
		var en = qI.length;
		return qI.substring(en - a4J.length, en) === a4J
	}, this.a4K = function(g, a4L, a4M) {
		var qI = "",
			en = g.length - 1;
		a4M = a4M || "";
		for (var aB = 0; aB < en; aB++) qI += a4M + g[aB] + a4M + ",", (aB + 1) % a4L == 0 && (qI += "\n");
		return qI += a4M + g[en] + a4M
	}, this.a4N = function(qI, zF, zG) {
		return qI.replace(new RegExp(zF, "g"), zG)
	}
}

function a4O() {
	this.jG = function(player, eZ) {
		aI.y3(player, bM.ev(eZ), bM.ex(eZ)) && (bf.dl = !0), aD.kU && this.j3()
	}, this.j3 = function() {
		aD.hB = !1;
		for (var aB = 0; aB < aD.kA; aB++) 0 !== ag.mj[aB] && 0 === ag.gb[aB] && aI.yA(aB);
		0 !== ag.mj[aD.eX] ? (bd.mf[7] = ag.gb[aD.eX], bd.mf[8] = ag.gp[aD.eX], aR.a4P(), aW.a4Q(), aD.gw || aH.n3(ag.ie[aD.eX] - 5, ag.ih[aD.eX] - 5, ag.ig[aD.eX] + 5, ag.ii[aD.eX] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a4R(18), af.a4S(),
			af.mV(!0), bP.y.a4T(), aL.rs(), aD.px = null, bb.a4U = !0, bb.a4V(), aD.kU && a0.a1.setState(1)
	}
}

function c1() {
	this.ek = 512, this.a3f = 15e8, this.a4W = 1e9, this.a3o = 5e4, this.a4X = 512, this.g7 = 2, this.eX = 0, this.kA = 0, this.a0C = 0, this.kW = 0, this.a0B = 0, this.xE = 512, this.xJ = 512, this.a3e = 150, this.kU = !0, this.gw = 0, this.a09 = 0,
		this.ju = 0, this.nC = !1, this.hB = 0, this.a4Y = 0, this.hh = !1, this.xL = 0, this.xM = 0, this.kS = 0, this.ya = 0, this.px = null, this.a0R = new yP, this.a4Z = 30, this.a06 = 0, this.a0E = 0, this.a0Q = 0, this.a01 = 0, this.data =
		new a4a, this.a4b = new a4c, this.a4d = 0, this.a4e = "", this.a4f = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0C = this.kA = this.data.humanCount, this.kU = 1 === this.a0C, this.nC = !1, this.gw = this.data.isReplay, this.kS = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.ya = this.data.isContest, this.hh = this.kS < 7 || 9 === this.kS, this.kS = 10 === this.kS && this.kU ? 7 : this.kS, this.kS = 8 === this.kS && 2 !== this.kA ? 7 : this.kS, az.dd(),
				this.xL = this.data.numberTeams, this.data.teamPlayerCount ? this.xM = +(0 < this.data.teamPlayerCount[0]) : (this.xM = 0, this.hh && this.kU && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.xL + 1), aD.a4b.a4g())), this.a4Z = this.kA <= 2 ? 30 : this.kA <= 50 ? 40 : 50, this.a4Y = this.hB = this.data.selectableSpawn, this.px = this.hB ? new a4O : null, 1 === l.ds ? this.xE = this.kA : this.xE = this.data
				.playerCount, this.xJ = this.xE, this.kW = this.xE - this.kA, this.a0B = 0, this.eX = this.data.selectedPlayer, this.a06 = 0, this.a0E = 0, this.a0Q = 0, this.a01 = 0, ay.a4h(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai
				.a4i(), b8.p2.pl = [], bg.dd(), this.a09 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a4j(), ac.de(), ap.a4k(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a4l(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a4m(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a4n.putImageData(a4o, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), fq(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a0R.dd(), bf.a4l(), aH.n2(), 0 === ag.mj[aD.eX] && aX.show(!1, !0), af.mV(!0), av.dd(), bf.dl = !0, this.gw || this.kU && this.hB || a0.a1.setState(1), this.a4d = 0
		}, this.a1U = function(a4q) {
			b9.pv.a4r.length ? this.a4e = b9.pv.a4r : this.a4e = b9.a4s.zb(), b0.y.a4t(), bq.clear(), this.a09 = 0, bf.a4u(), a0.a1.setState(0), aa.setState(0), a4q || bU.eG.show(), 2 === this.a4d ? t.y.a4v() : 1 === this.a4d ? t.u(19) : t.u(5, 5)
		}, this.a4w = function() {
			return this.gw ? aM.gx || !bC.a4x : this.kU && (aM.gx || this.hB)
		}, this.a4y = function() {
			return 1 === this.a09 && !this.hB
		}
}

function a4a() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4c() {
	this.a4g = function() {
		var a4z = aD.data;
		bA.qj.a2q(a4z.teamPlayerCount, a4z.playerCount), a4z.numberTeams = bA.qj.a2h(a4z.teamPlayerCount, 0), a4z.teamPlayerCount[0] && a4z.teamPlayerCount[7] && (a4z.teamPlayerCount[7] = 0, this.a4g())
	}, this.a50 = function() {
		var a4z = aD.data;
		a4z.mapType < 2 ? bS.a7(bS.a51(a4z), a4z.mapSeed) : bS.a52(a4z.canvas)
	}, this.a53 = function() {
		var a4z = aD.data;
		a4z.colorsData || (a4z.colorsData = new Uint32Array(1)), a4z.selectableColor && (a4z.colorsData[0] = bj.y.vm()), a4z.selectableName && (a4z.playerNamesData || (a4z.playerNamesData = new Array(1)), a4z.playerNamesData[0] = bj.eK.data[122]
			.value)
	}, this.a54 = function() {
		aD.data = new a4a, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ek), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a55 = [];
	this.pV = function(player, p9, a56, a57) {
		player === aD.eX || p9 === aD.eX || !a57 && bA.g9.jX(player) || bA.g9.jX(p9) || this.yb(ag.yc[player] + " supported " + ag.yc[p9] + " with " + bA.ra.zQ(a56) + " ressource" + (1 === a56 ? "." : "s."))
	}, this.yb = function(qI, pK) {
		qI = {
			eM: aW.a59(),
			qI: qI,
			pK: pK
		};
		a55.push(qI), 30 === t.sq && t.a5A().yb(qI)
	}, this.clear = function() {
		a55 = [];
		var tE = t.a5B(30);
		tE && tE.clear()
	}, this.a5C = function() {
		return a55
	}
}

function dT() {
	this.z7 = 0, this.gap = 0, this.sS = 0, this.qh = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.z7 = .0022 * bA.qb.qc(.5) * h.hx, this.sS = this.z7 / h.k, this.gap = Math.max(Math.floor((a0.a1.hw() ? .0114 : .01296) * h.hx), 2), this.qh = this.gap / h.k
	}
}

function dS() {
	this.a5D = function() {
		return a0.a1.hw() ? 2 : 1
	}
}

function cC() {
	var rA, eu, ew, a5E, a5F, a5G, eM, a5H, a5I, a5J, a5K, gap, zoom, pe, a5L;

	function a5Z(lP, lQ, eR) {
		ac.ei(eR) || -1 === (lP = bN.kz.a5i(lP, lQ)) ? aN.a5h(eR) : aN.a5j(lP)
	}

	function a5V(a5H) {
		for (var aB = pe.length - 1; 0 <= aB; aB--)
			if (pe[aB] === a5H) return 1
	}

	function a5T(a5Q) {
		var aB, en;
		if (-1 !== a5Q)
			for (en = rA.length, aB = 0; aB < en; aB++)
				if (rA[aB].hZ && rA[aB].eu + 1 === a5Q % 4 && rA[aB].ew + 1 === a5Q >> 2) return aB;
		return -1
	}

	function a5R(lP, lQ) {
		var tE = gap / 2;
		return lP < eu - a5E - 3 * tE || eu + 3 * a5E + 5 * tE < lP || lQ < ew - a5E - 3 * tE || ew + 2 * a5E + 3 * tE < lQ ? -1 : 4 * (lQ < ew - tE ? 0 : lQ < ew + a5E + tE ? 1 : 2) + (lP < eu - tE ? 0 : lP < eu + a5E + tE ? 1 : lP < eu + 2 * a5E +
			3 * tE ? 2 : 3)
	}
	this.a5M = function() {
		var aB, f7, a5P = [bB.o9, bB.oN, bB.nh, bB.oj, bB.oa];
		for (rA = new Array(10), aB = 0; aB < 10; aB++) rA[aB] = {
			id: aB,
			hZ: !1,
			l7: 0,
			canvas: [],
			eu: 0,
			ew: 0
		};
		for (rA[0].colors = [0, 1, 2, 3], rA[0].eu = 0, rA[0].ew = 0, rA[1].colors = [1, 4], rA[1].eu = 1, rA[1].ew = 0, rA[2].colors = [0, 1], rA[2].eu = -1, rA[2].ew = 0, rA[3].colors = [0], rA[3].eu = 0, rA[3].ew = 0, rA[4].colors = [0, 2],
			rA[4].eu = 1, rA[4].ew = 1, rA[5].colors = [3], rA[5].eu = 0, rA[5].ew = -1, rA[6].id = 20, rA[6].colors = [0], rA[6].eu = 1, rA[6].ew = -1, rA[7].id = 21, rA[7].colors = [0], rA[7].eu = 0, rA[7].ew = 1, rA[8].id = 16, rA[8]
			.colors = [0], rA[8].eu = 0, rA[8].ew = 0, rA[9].id = 10, rA[9].colors = [4], rA[9].eu = 2, rA[9].ew = 0, aB = 0; aB < 10; aB++)
			for (f7 = 0; f7 < rA[aB].colors.length; f7++) rA[aB].canvas.push(function(id, a2w) {
				if (id < 20) return bA.canvas.yt(ab.get(3), id, a2w);
				var a2w = ab.get(3).height,
					a2x = bA.qb.wY(a2w, a2w),
					hp = bA.qb.getContext(a2x);
				20 === id ? hp.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wj.z8(aj.rr.yx + aj.rr.zE, hp, 0, 0, a2w);
				return a2x
			}(rA[aB].id, a5P[rA[aB].colors[f7]]))
	}, this.a5O = function() {
		return rA
	}, this.dd = function() {
		pe = [], eu = ew = eM = 0, a5F = a5G = -1e3, this.resize()
	}, this.resize = function() {
		a5E = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), zoom = a5E / ab.get(3).height, gap = Math.floor(a5E / 3)
	}, this.a1x = function(lP, lQ) {
		return !!this.hZ() && (bf.dl = !0, !!aj.wj.h0(lP, lQ, a5I) || (lP = function(lP, lQ) {
			a5G = a5F = -1e3;
			var a5S = a5T(a5R(lP, lQ));
			if (-1 === a5S) return 0;
			if (1 !== rA[a5S].colors[rA[a5S].l7])
				if (5 === a5S) {
					if (! function() {
							var dt = performance.now();
							a5L + 4e3 < dt && (pe = []);
							a5L = dt
						}(), a5V(a5H)) return 1;
					pe.push(a5H), 16 < pe.length && pe.shift()
				} else if (6 === a5S) {
				for (var aB = pe.length - 1; 0 <= aB; aB--) 0 === ag.mj[pe[aB]] && pe.splice(aB, 1);
				0 < pe.length && (b5.a5W(1, pe, !0) && b8.g9.pd(pe, a5H), pe = [])
			} else if (2 === a5S) an.hR(a5H) && b8.hD.p8(aR.hH(), a5H);
			else if (3 === a5S) aD.hB && b8.hD.hE(a5J);
			else if (0 === a5S)
				if (0 === rA[0].l7) {
					if (aD.a4Y && aW.a59() < 350) return 1;
					bV.a5X(4), b8.hD.hK(aR.hH(), a5H)
				} else b1.hL(a5H, aR.hH());
			else if (1 === a5S) b8.hD.hP(aR.hH(), a5J);
			else if (9 === a5S) b8.hD.hS(aR.hH());
			else {
				if (7 === a5S) return bV.a5X(0), aj.wj.show(lP, lQ), 2;
				if (4 === a5S) b5.a5W(0, [a5H], !0) && b8.g9.pa(a5H);
				else {
					if (8 !== a5S) return 0;
					b8.hD.hG(aR.hH(), a5K, a5H)
				}
			}
			return 1
		}(lP, lQ), this.rs(), 2 === lP && (aj.wj.hZ = !0), 0 < lP))
	}, this.a1z = function(lP, lQ) {
		this.hZ() || (a5F = lP, a5G = lQ, eM = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.h3(mouseX),
			coordY = bM.h5(mouseY),
			coord = bM.fB(coordX, coordY),
			coord = bM.ed(coord);
		bM.h6(coordX, coordY) && a5Z(mouseX, mouseY, coord)
	}, this.click = function(lP, lQ, a26) {
		var h2 = bM.h3(lP),
			h4 = bM.h5(lQ),
			eZ = bM.fB(h2, h4),
			eR = bM.ed(eZ);
		return !(!bM.h6(h2, h4) || (h2 = (a0.a1.hw() ? .025 : .0144) * h.hx, h4 = performance.now(), Math.abs(lP - a5F) > h2) || Math.abs(lQ - a5G) > h2 || eM + 500 < h4) && (eM = h4, a26 ? (a5Z(lP, lQ, eR), !1) : aM.gx || this.hZ() || !bA.g9.gz(
			aD.eX) || aD.gw ? (this.rs(), !1) : (aD.hB ? 0 <= (a5J = br.hC(eZ)) && (rA[3].hZ = !0) : 2 === aD.a09 ? ac.gN(eR) && (a5H = ac.ef(eR), bA.g9.jX(a5H) || (rA[0].hZ = !0, rA[0].l7 = 1, rA[7].hZ = !0)) : (bN.hQ.hR(aD.eX, eZ) && (
			rA[0].hZ = !0, rA[0].l7 = 1, rA[1].hZ = !0, rA[1].l7 = 0, rA[9].hZ = !0, rA[9].l7 = 0), bN.hN.hO(aD.eX, eZ) && (rA[0].hZ = !0, rA[0].l7 = 1, rA[1].hZ = !0, rA[1].l7 = 1, a5J = bO.fP[7]), ac.es(eR) ? (a5K = am.eO.eQ(
			eR)) && (h2 = bM.ed(a5K), rA[8].hZ = !0, a5H = ac.ee(h2) ? aD.ek : ac.ef(h2)) : (ac.y8(aD.eX, eR) && (a5I = aD.eX, rA[0].hZ = !0, rA[0].l7 = 1, rA[7].hZ = !0), -1 !== (h4 = br.hI(eZ)) && (ac.ee(h4 << 2) ? (a5H = aD.ek,
			bs.hJ(aD.eX) ? (rA[0].hZ = !0, rA[0].l7 = 0) : ad.fu(aD.eX) && (rA[0].hZ = !0, rA[0].l7 = 3)) : (a5H = ac.ef(h4 << 2), rA[0].l7 = 1, rA[5].hZ = function(a5H) {
			return !bA.g9.jX(a5H) && !a5V(a5H) && b5.a5W(1, [a5H], !1)
		}(a5H), rA[7].hZ || bA.g9.jX(a5H) || (a5I = a5H, rA[7].hZ = !0), rA[4].hZ = !bA.g9.jX(a5H) && !af.a5d(a5H) && b5.a5W(0, [a5H], !1), rA[6].hZ = function(a5H) {
			if (0 === pe.length) return !1;
			if (performance.now() > a5L + 4e3) return !(pe = []);
			return !a5V(a5H) && ! function(a5H) {
				var aB;
				if (aD.hh)
					for (aB = pe.length - 1; 0 <= aB; aB--)
						if (!bs.eg(a5H, pe[aB])) return 1;
				return
			}(a5H)
		}(a5H), bs.eg(a5H, aD.eX) ? (bs.hM(aD.eX, a5H) ? (rA[0].l7 = 0, rA[0].hZ = !0) : ad.fu(aD.eX) && (rA[0].l7 = 3, rA[0].hZ = !0), rA[0].hZ = this.a5f()) : (rA[2].hZ = !0, an.hR(a5H) ? rA[2].l7 = 0 : rA[2].l7 = 1,
			rA[0].hZ = !0))))), this.a5a(lP, lQ)))
	}, this.a5a = function(lP, lQ) {
		return eu = lP - Math.floor(a5E / 2), ew = lQ - Math.floor(a5E / 2), !!this.hZ()
	}, this.a1d = function(lP, lQ) {
		return !!this.hZ() && (aj.wj.hZ ? !aj.wj.z6(lP, lQ) && (aj.wj.hZ = !1, bf.dl = !0) : function(sD, lP, lQ) {
			lP = a5R(lP, lQ);
			if (0 <= a5T(lP)) return !1;
			if ((1 === lP || 6 === lP) && 0 <= a5T(2)) return !1;
			if ((6 === lP || 9 === lP) && 0 <= a5T(10)) return !1;
			return sD.rs(), bf.dl = !0
		}(this, lP, lQ))
	}, this.rs = function() {
		for (var aB = rA.length - 1; 0 <= aB; aB--) rA[aB].hZ = !1, rA[aB].l7 = 0;
		aj.wj.hZ = !1
	}, this.hZ = function() {
		return this.a5f() || aj.wj.hZ
	}, this.a5f = function() {
		for (var en = rA.length, aB = 0; aB < en; aB++)
			if (rA[aB].hZ) return !0;
		return !1
	}, this.uj = function() {
		if (this.hZ())
			if (aj.wj.hZ) aj.wj.uj();
			else {
				var aB, hp = uk,
					f7 = rA,
					en = f7.length,
					a5n = (a5E + gap) / zoom;
				for (hp.imageSmoothingEnabled = !0, hp.setTransform(zoom, 0, 0, zoom, eu, ew), aB = 0; aB < en; aB++) f7[aB].hZ && uk.drawImage(f7[aB].canvas[f7[aB].l7], f7[aB].eu * a5n, f7[aB].ew * a5n);
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a5o, a5p, a5q, a5r = -1;

	function a5s() {
		var a5t, yJ = canvas.getContext("2d", {
			alpha: !0
		});
		yJ.clearRect(0, 0, j, j), yJ.fillStyle = bB.nf, yJ.fillRect(0, 0, j, j), 0 === a5p && (yJ.fillStyle = bB.nk, yJ.fillRect(0, 0, j, j)), yJ.fillStyle = bB.nj, yJ.fillRect(0, 0, j, 1), yJ.fillRect(0, 0, 1, j), yJ.fillRect(0, j - 1, j, 1), yJ
			.fillRect(j - 1, 0, 1, j), a5t = .9 * j / ab.get(0).width, yJ.imageSmoothingEnabled = !0, yJ.setTransform(a5t, 0, 0, a5t, Math.floor((j - a5t * ab.get(0).width) / 2), Math.floor((j - a5t * ab.get(0).height) / 2)), yJ.drawImage(ab.get(0),
				0, 0), yJ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5v(lP, lQ) {
		if (!aM.gx) return lP <= j + bc.gap && lQ >= aR.ew ? 9 : -1;
		if (lP <= 4 * j + bc.gap) {
			if (lQ >= aR.ew) return 0;
			if (lQ >= aR.ew - j - a5q * bc.gap) return 2
		} else if (lP <= 7 * j + bc.gap && lQ >= aR.ew - j - a5q * bc.gap) return 1;
		return -1
	}
	this.gx = !1, this.dd = function() {
		a5p = -1, this.gx = !1, a5q = a0.a1.hw() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5o = bA.qb.sQ(1, (a0.a1.hw() ? .5 : .45) * j), a5s()
	}, this.a2E = function() {
		this.gx = !this.gx, this.gx ? (bC.a2D(!1), aD.gw && bC.a4x && bC.a2F(!0), this.a5u()) : (a5p = -1, a5s(), !aD.kU || 1 !== aD.a09 || aD.hB || aD.gw || a0.a1.setState(1)), bf.dl = !0
	}, this.a5u = function() {
		(aD.kU || aD.gw) && 1 === aD.a09 && (aV.mV(!0), aD.hB || setTimeout(function() {
			bb.a0K()
		}, 0), a0.a1.setState(0))
	}, this.h0 = function(lP, lQ) {
		return 0 <= (a5r = a5v(lP, lQ)) || !aM.gx || aD.kU || aD.gw || be.hZ || aM.a2E(), a5r
	}, this.a1d = function(lP, lQ) {
		lP = a5v(lP, lQ);
		lP !== a5p && (a5p = lP, this.gx || a5s(), bf.dl = !0)
	}, this.a1e = function(lP, lQ) {
		lP = a5v(lP, lQ);
		return -1 !== lP && a5r === lP && (this.gx ? aD.nC ? (0 <= lP && bC.a2D(!1), !aD.gw) : (0 === lP ? aD.a1U() : 1 === lP ? this.a2E() : 2 === lP && t.u(1, 0), !0) : 9 === lP && (this.a2E(), !0))
	}, this.uj = function() {
		var i;
		this.gx ? (i = Math.floor(5.5 * j), uk.setTransform(1, 0, 0, 1, bc.gap, aR.ew), uk.fillStyle = bB.nf, uk.fillRect(0, 0, i, j), 0 === a5p ? (uk.fillStyle = bB.nk, uk.fillRect(0, 0, 4 * j, j)) : 1 === a5p && (uk.fillStyle = bB.nk, uk
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), uk.fillStyle = bB.nj, uk.fillRect(0, 0, i, 1), uk.fillRect(0, 0, 1, j), uk.fillRect(4 * j, 0, 1, j), uk.fillRect(0, j - 1, i, 1), uk.fillRect(i - 1, 0, 1, j), uk.font = a5o, bA.qb
			.textBaseline(uk, 1), bA.qb.textAlign(uk, 1), uk.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a5z(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.ew + .3 * j, i), i = 1, uk.setTransform(1, 0, 0, 1, bc.gap, aR.ew - i * a5q * bc.gap - i *
				j), uk.fillStyle = bB.nf, uk.fillRect(0, 0, 4 * j, j), a5p === i + 1 && (uk.fillStyle = bB.nk, uk.fillRect(0, 0, 4 * j, j)), uk.fillStyle = bB.nj, uk.fillRect(0, 0, 4 * j, 1), uk.fillRect(0, 0, 1, j), uk.fillRect(4 * j, 0, 1,
				j), uk.fillRect(0, j - 1, 4 * j, 1), uk.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), uk.setTransform(1, 0, 0, 1, 0, 0)) : uk.drawImage(canvas, bc.gap, aR.ew)
	}, this.qC = function(player) {
		return 0 !== ag.mj[player] && 2 !== aD.a09 && !bA.g9.jX(player)
	}, this.a5z = function(eu, ew, en) {
		uk.setTransform(1, 0, 0, 1, eu, ew), uk.lineWidth = bc.z7, uk.strokeStyle = bB.nj, uk.beginPath(), uk.moveTo(0, 0), uk.lineTo(en, en), uk.moveTo(0, en), uk.lineTo(en, 0), uk.stroke()
	}
}

function cE() {
	var a61, j, a62, a63, a64, a65, a66, a67, a68;

	function yF() {
		return aR.a6Q(aN.a6M()) ? aw.hZ ? __fx.settings.keybindButtons ? aR.ew - 2 * aR.j - 3 * a62 : aR.ew - aR.j - 2 * a62 : __fx.settings.keybindButtons ? aR.ew - aR.j - 2 * a62 : aR.ew - a62 : bC.a6Q(aN.a6P()) ? aw.hZ ? bC.yF() - aR.j - 2 * a62 :
			bC.yF() - a62 : aw.hZ ? h.j - aR.j - (bk.a5D() + 1) * a62 : h.j - bk.a5D() * bc.gap
	}

	function a6D(dt, qI, id, gL, a6G, a6H, kn, a6I, a6J, a6K, a6V) {
		var aB, yJ, a2x, qT, a6W = void 0 !== a6J,
			i = Math.floor(aQ.measureText(qI, aN.a5o) + 1.5 * a63 + (a6W ? j : 1.5 * a63));
		if (bf.dl = !0, a6V || bq.yb(qI, a6J), i + 2 * a62 + aR.j > h.i && !a6W && 50 !== id && 20 < qI.length) a6D(dt, (a6V = bA.ra.a4F(qI))[0], id, gL, a6G, a6H, kn, a6I, a6J, a6K, !0), a6D(dt, a6V[1], id, gL, a6G, a6H, kn, a6I, a6J, a6K, !0);
		else if (a6V = i + (50 === id ? a64 : 0), (a2x = document.createElement("canvas")).width = i, a2x.height = j, (yJ = a2x.getContext("2d", {
				alpha: !0
			})).font = aN.a5o, bA.qb.textBaseline(yJ, 1), bA.qb.textAlign(yJ, 0), yJ.clearRect(0, 0, i, j), yJ.fillStyle = a6H, yJ.fillRect(0, 0, i, j), yJ.fillStyle = a6G, yJ.fillText(qI, Math.floor(1.5 * a63), Math.floor(j / 2)), a6W && (yJ
				.imageSmoothingEnabled = !0, aj.wj.z8(a6J, yJ, i - j, 0, j)), 0 === (qT = {
				eM: dt,
				qI: qI,
				id: id,
				player: gL,
				canvas: a2x,
				a6G: a6G,
				a6H: a6H,
				i: i,
				a6N: a6V,
				kn: kn,
				a6I: a6I,
				a6J: a6J,
				a6K: a6K
			}).eM || 0 < a61.length && 0 < a61[0].eM) a61.unshift(qT);
		else {
			for (aB = 1; aB < a61.length; aB++)
				if (0 < a61[aB].eM) return void a61.splice(aB, 0, qT);
			a61.push(qT)
		}
	}

	function a6E(e7, tE, f7) {
		return "rgb(" + e7 + "," + tE + "," + f7 + ")"
	}

	function a6X(id, gG) {
		for (var en = a61.length, aB = 0; aB < en; aB++) a61[aB].id === id && gG-- <= 0 && (a61.splice(aB, 1), aB--, en--)
	}

	function a6Y(id, player) {
		for (var f1 = !1, aB = a61.length - 1; 0 <= aB; aB--) a61[aB].id !== id || player !== aD.ek && a61[aB].player !== player || (a61.splice(aB, 1), f1 = !0);
		return f1
	}

	function a6u(qI) {
		a6D(340, qI, 6, 0, a6E(215, 245, 255), bB.ng, -1, !1)
	}
	this.a69 = "", this.dd = function() {
		var self;
		a67 = 0, a66 = a0.a1.hw() ? 7 : 12, a65 = {
			zx: [0, 0, 0],
			a6A: [0, 0, 0],
			eF: [220, 180, 180],
			ui: [0, 0, 0],
			f8: [0, 0, 0]
		}, a61 = [], this.resize(), aD.hB && this.a0L(0, 18), bS.wW.wX[bS.eT].name.length && a6u(L(86, [bS.wW.wX[bS.eT].name])), a6u(L(87, [bS.ey - 2 + "x" + (bS.ez - 2)])), a6u(L(88, [bA.ra.zQ(ap.a6v)])), ap.a6v !== ap.a6w && a6u(L(89, [bA
			.ra.zQ(ap.a6w) + " (" + bA.ra.a4B(100 * ap.a6w / ap.a6v, 1) + ")"
		])), 0 < ap.a6x && a6u(L(66, [bA.ra.zQ(ap.a6x) + " (" + bA.ra.a4B(100 * ap.a6x / ap.a6v, 1) + ")"])), 0 < ap.a6y && a6u(L(90, [bA.ra.zQ(ap.a6y) + " (" + bA.ra.a4B(100 * ap.a6y / ap.a6v, 1) + ")"])), 10 === aD.kS && a6D(120, L(91), 6,
			0, a6E(235, 255, 120), bB.ng, -1, !1), 0 !== (self = this).a69.length && (a6D(200, self.a69, 0, 0, bB.nj, bB.ng, -1, !1), self.a69 = ""), aD.ya && a6D(340, L(44), 6, 0, a6E(255, 200, 0), bB.ng, -1, !1)
	}, this.resize = function() {
		var a6F, aB;
		if (j = (j = Math.floor((a0.a1.hw() ? .031 : .0249) * h.hx)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5o = bA.qb.sQ(1, this.fontSize), a62 = bc.gap, a63 = Math.floor(j / 5), 0 < a61.length)
			for (a6F = a61, a61 = [], aB = a6F.length - 1; 0 <= aB; aB--) a6D(a6F[aB].eM, a6F[aB].qI, a6F[aB].id, a6F[aB].player, a6F[aB].a6G, a6F[aB].a6H, a6F[aB].kn, a6F[aB].a6I, a6F[aB].a6J, a6F[aB].a6K, !0);
		this.a6L()
	}, this.a6L = function() {
		a68 = document.createElement("canvas");
		var qI = L(45),
			yJ = (a64 = aQ.measureText(qI, this.a5o) + 5 * a63, a68.height = j, a68.width = a64, a68.getContext("2d", {
				alpha: !0
			}));
		yJ.font = this.a5o, bA.qb.textBaseline(yJ, 1), bA.qb.textAlign(yJ, 1), yJ.clearRect(0, 0, a64, j), yJ.fillStyle = bB.o6, yJ.fillRect(0, 0, a64, j), yJ.fillStyle = bB.nj, yJ.fillText(qI, Math.floor(a64 / 2), Math.floor(j / 2))
	}, this.a6M = function() {
		var en;
		return aw.hZ ? aw.i : 0 === (en = a61.length) ? 0 : 1 === en ? a61[0].a6N : a6O(a61[0].a6N, a61[1].a6N)
	}, this.a6P = function() {
		var en = a61.length;
		return aw.hZ ? en ? a6O(aw.i, a61[0].a6N) : aw.i : 0 === en ? 0 : 1 === en ? a61[0].a6N : 2 === en ? a6O(a61[0].a6N, a61[1].a6N) : a6O(a6O(a61[0].a6N, a61[1].a6N), a61[2].a6N)
	}, this.h0 = function(eu, ew) {
		for (var n9, a6R, a6S = yF(), aB = a61.length - 1; 0 <= aB; aB--)
			if ((a6R = a6S - (aB + 1) * j) <= ew && ew < a6R + j) return 50 === a61[aB].id ? eu >= h.i - a64 - a62 - a61[aB].i && (eu >= h.i - a64 - a62 ? b8.g9.pa(a61[aB].player) : aH.n4(a61[aB].player, 800, !1, 0), !0) : eu >= h.i - a61[aB].i -
				a62 && (736 === a61[aB].id ? (a6R = a61[aB].qI.split(" "), window.open(a6R[a6R.length - 1], "_blank")) : a61[aB].a6I && (a61[aB].a6K && a61[aB].a6K.f6 ? (a6R = a61[aB].a6K.eZ, n9 = bM.ev(a6R) - 10, a6R = bM.ex(a6R) - 10, aH
					.n3(n9, a6R, 19 + n9, 19 + a6R)) : a61[aB].a6K && a61[aB].a6K.f7 ? aH.n5(a61[aB].player, a61[aB].a6K.n6) : (aH.n4(a61[aB].player, 800, !1, 0), 0 <= a61[aB].kn && (n9 = a61[aB].kn, a61[aB].kn = a61[aB].player, a61[
					aB].player = n9))), !0);
		return !1
	}, this.yb = function(dt, qI, id, gL, a6G, a6H, kn, a6I, a6J, a6K) {
		a6D(dt, qI, id, gL, a6G, a6H, kn, a6I, a6J, a6K)
	}, this.a6U = function(r) {
		a6D(300, r, 252, 0, bB.nj, bB.ng, -1, !1)
	}, this.a4R = function(id) {
		for (var aB = a61.length - 1; 0 <= aB; aB--) a61[aB].id === id && (a61[aB].eM = 1)
	}, this.a0L = function(player, id) {
		0 === id ? (aQ.jG(player, 0), a6X(423, 2), a6D(160, L(46, [ag.yc[player]]), 423, player, "rgb(10,220,10)", bB.ng, -1, !1)) : 1 === id ? (a6Y(50, aD.ek), aQ.jG(player, 1), a6D(360, L(47, [ag.yc[player]]), 0, player, bB.oP, bB.ng, -1, !0),
			aH.n4(player, 2700, !1, 0)) : 2 === id ? (aQ.jG(player, 2), a6D(0, L(48), 0, player, "rgb(10,255,255)", bB.ng, -1, !0), aH.n4(player, 2700, !1, 0)) : 3 === id ? (aQ.jG(player, 2), a6D(0, L(49, [ag.yc[player]]), 0, player, bB.nj,
			bB.ng, -1, !0), aH.n4(player, 2700, !1, 0)) : 4 === id ? this.a6Z(1, player, player) : 5 === id ? bA.g9.jX(aD.eX) || (function(id, me) {
			var aB, a6j = 0,
				en = a61.length;
			for (aB = 0; aB < en; aB++)
				if (a61[aB].id === id && me <= ++a6j) return a61.splice(aB, 1)
		}(1, 5), af.a6b(player) && a6D(180, L(50, [ag.yc[player]]), 1, player, a6E(255, 200, 180), bB.ng, -1, !0), bA.g9.a3Y(player, 10) && (a6X(573, 0), a6D(180, L(51, [ag.yc[player]]), 573, player, bB.oP, bB.ng, -1, !0))) : 18 === id ? a6D(
			255, L(52), 18, 0, bB.nj, bB.ng, -1, !1) : 21 === id ? a6D(220, L(53), id, 0, bB.nj, bB.ng, -1, !1) : 22 === id ? this.a6Z(2, player, player) : 59 === id && a6D(0, L(54), id, 0, bB.oi, bB.ng, 0, !1)
	}, this.a1Q = function(r) {
		a6D(200, L(55, [r]), 94, 0, bB.nj, bB.oL, -1, !1)
	}, this.a0X = function(a6c) {
		if (aD.eX === a6c && !aD.kU && !aD.gw)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a6D(0, "Your Win Count is now " + __fx.wins.count, 3, a6c, bB.nj, bB.ng, -1, !0);
		ag.gb[a6c] && (aQ.jG(a6c, 2), aD.kA < 100 ? a6D(0, L(49, [ag.yc[a6c]]), 3, a6c, bB.nj, bB.ng, -1, !0) : a6D(0, L(56, [ag.yc[a6c]]), 3, a6c, bB.nj, bB.ng, -1, !0))
	}, this.a5h = function(eR) {
		var qI, a6e, a6d = "(" + bM.ev(eR >> 2) + ", " + bM.ex(eR >> 2) + ")",
			a6I = !1,
			player = 0;
		ac.ei(eR) ? ac.ee(eR) ? a6d = L(57, [a6d]) : (player = ac.ef(eR), aD.gw && !1 === __fx.hoveringTooltip.active && (aD.eX = player), qI = L(58, [bA.yJ.a39(ag.a0n[player], bA.qb.sQ(0, 10), 150)]) + "   ", qI = (qI += L(59, [bA.ra.zQ(ag.gp[
				player])]) + "   ") + L(60, [bA.ra.zQ(ag.gb[player])]) + "   ", aD.hh && (a6e = bg.a0U[bg.kX[bg.el[player]]], qI += L(61) + ": " + a6e + "   "), bA.g9.jX(player) && (qI += L(62) + ": " + aE.kL[aE.hW[player]] + "   "), a6d =
			qI = (qI += L(63, [player]) + "   ") + L(64, [a6d]), a6I = !0) : a6d = ac.es(eR) ? L(65, [a6d]) + "   #" + ac.eV(eR) : L(66, [a6d]), bf.dl = !0, a6X(55, 0), a6D(220, a6d, 55, player, bB.nj, bB.ng, -1, a6I, void 0, void 0, !0)
	}, this.a5j = function(a6f) {
		var l5 = bN.y,
			player = l5.m4[a6f] >> 3,
			qI = (bf.dl = !0, a6X(55, 0), L(67, [ag.yc[player]]) + "   ");
		a6D(220, qI += L(59, [bA.ra.zQ(l5.a6g[a6f])]), 55, player, bB.nj, bB.ng, -1, !0)
	}, this.pJ = function(p5, a6h, pK) {
		p5 === aD.eX ? a6D(175, " " + L(68, [ag.yc[a6h]]) + ": ", 1001, a6h, a6E(200, 255, 210), bB.ng, -1, !0, pK) : this.a6i(p5, pK)
	}, this.a6i = function(p5, pK) {
		a6X(1e3, 0), a6D(175, ag.yc[p5] + ": ", 1e3, p5, bB.nj, "rgba(5,60,25,0.9)", -1, !0, pK)
	}, this.a0W = function() {
		var r;
		aD.a0E ? (r = L(69), aQ.a0V(L(70), 2, 1, 12), a6D(0, r, 40, 0, "rgb(10,220,10)", bB.ng, -1, !1)) : (r = L(71), aQ.a0V(L(72), 2, 0, 16), a6D(0, r, 41, 0, bB.nj, bB.ng, -1, !1))
	}, this.yQ = function() {
		var gG = ag.yc,
			eq = aD.data;
		a6D(300, gG[0] + " [" + aD.a0R.yW(eq.elo[0]) + "] vs " + gG[1] + " [" + aD.a0R.yW(eq.elo[1]) + "]", 65, 0, bB.na, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6k = function(r) {
		a6D(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6l = function(a6m) {
		a6D(0, L(a6m ? 73 : 74), 247, 0, bB.oh, bB.ng, -1, !1)
	}, this.yY = function(yV, yX, a6n) {
		var eq = aD.data,
			gG = ag.yc;
		a6D(0, gG[0] + ": " + aD.a0R.yW(eq.elo[0]) + " -> " + yV, 66, 0, bB.nj, a6n[0], -1, !1), a6D(0, gG[1] + ": " + aD.a0R.yW(eq.elo[1]) + " -> " + yX, 66, 1, bB.nj, a6n[1], -1, !1)
	}, this.pb = function(player, id) {
		0 === id ? a6Y(50, player) ? (a6D(128, L(75, [ag.yc[player]]), 52, player, a6E(180, 255, 180), bB.ng, -1, !0), af.qA(player, 2, 255)) : a6D(384, L(76, [ag.yc[player]]), 51, player, a6E(210, 210, 255), bB.ng, -1, !0) : a6Y(51, player) ? (
			a6D(128, L(77, [ag.yc[player]]), 52, player, bB.nj, "rgba(60,120,10,0.9)", -1, !0), af.qA(player, 2, 255)) : (a6D(384, L(78, [ag.yc[player]]), 50, player, bB.nj, "rgba(90,90,90,0.9)", -1, !0), af.qA(player, 2, 96))
	}, this.pf = function(zx, target) {
		var color = a6E(210, 255, 210);
		1 < zx.length ? a6D(230, L(79, [zx.length, ag.yc[target]]), 66, target, color, bB.ng, -1, !0) : a6D(230, L(80, [ag.yc[zx[0]], ag.yc[target]]), 66, zx[0], color, bB.ng, target, !0)
	}, this.a6o = function(player, target) {
		a6D(230, L(81, [ag.yc[player], ag.yc[target]]), 66, player, bB.nj, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6p = function(id, gG) {
		a6X(id, gG)
	}, this.a0G = function(id, player) {
		a6Y(id, void 0 === player ? aD.ek : player)
	}, this.a6q = function(id) {
		for (var aB = a61.length - 1; 0 <= aB; aB--)
			if (a61[aB].id === id) return a61[aB];
		return null
	}, this.pW = function(a56, a6r, player) {
		2 !== ag.a3T[aD.eX] && a6D(200, 1 === a56 ? L(82, [ag.yc[player]]) : L(83, [bA.ra.zQ(a56), ag.yc[player]]), 30, player, "rgb(190,255,190)", bB.ng, -1, !0)
	}, this.a6t = function(a56, player) {
		2 !== ag.a3T[aD.eX] && (a6X(31, 0), a56 = " (" + bA.ra.zQ(a56) + ") 💸", a6D(150, a56 = bA.g9.jX(player) ? L(84) + a56 : L(85, [ag.yc[player]]) + a56, 31, player, bB.na, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a0F = function(bu) {
		for (var f8 = bf.k7(), aB = 2; 0 <= aB; aB--) 0 < a65.ui[aB] && (bu || a65.f8[aB] < f8 - 220) && this.a6z(aB)
	}, this.a6z = function(id) {
		var qI, en = a65.ui[id],
			player = a65.zx[id];
		a65.ui[id] = 0, 1 === en ? (0 === id ? qI = L(92, [ag.yc[player], ag.yc[a65.a6A[0]]]) : 1 === id ? qI = L(93, [ag.yc[player]]) : 2 === id ? qI = L(94, [ag.yc[player]]) : 3 === id && (qI = L(95, [ag.yc[player]])), a6X(7, 0), a6D(a65.eF[
			id], qI, 7, a65.a6A[id], bB.nj, bB.ng, -1, !0)) : (qI = L(0 === id ? 96 : 1 === id ? 97 : 98, [en]), a6X(7, 0), a6D(a65.eF[id], qI, 7, player, bB.nj, bB.ng, -1, !1))
	}, this.a6Z = function(id, hF, kn) {
		var f8 = bf.k7(),
			en = a65.ui[id] + 1;
		a65.ui[id]++, a65.zx[id] = hF, a65.a6A[id] = kn, 1 === en && (a65.f8[id] = f8), (1 === en && (aD.a0C < 32 || 2 === aD.a09) || 1 < en && (a65.f8[id] < f8 - 140 || 2 === aD.a09)) && this.a6z(id)
	}, this.j3 = function() {
		b2.j3();
		for (var jP = (jP = a61.length - a66) <= 1 ? 1 : jP * jP, aB = a61.length - 1; 0 <= aB; aB--) 0 < a61[aB].eM && (a61[aB].eM -= jP, a61[aB].eM <= 0) && (bf.dl = !0, a61.splice(aB, 1));
		! function() {
			var gG, aB;
			if (128 !== a67 && !(++a67 < 128))
				for (gG = 5, aB = al.kg - 1; 0 <= aB; aB--) 1 === ag.a3T[al.kl[aB]] && 0 < gG-- && a6D(240, L(95, [ag.yc[al.kl[aB]]]), 1, al.kl[aB], bB.na, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0F(!1)
	}, this.uj = function() {
		for (var xH, ew = yF(), aB = a61.length - 1; 0 <= aB; aB--) xH = ew - (aB + 1) * j, 50 === a61[aB].id ? (uk.drawImage(a61[aB].canvas, h.i - a61[aB].i - a64 - a62, xH), uk.drawImage(a68, h.i - a64 - a62, xH)) : uk.drawImage(a61[aB].canvas,
			h.i - a61[aB].i - a62, xH)
	}
}

function cF() {
	var a71, a72, a73, i, j, font, qI;

	function a78(a79) {
		return a79 < 10 ? "0" + a79 : String(a79)
	}
	this.dd = function() {
		qI = L(99)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .53 : .36) * h.hx), j = Math.floor(.065 * i), font = bA.qb.sQ(1, Math.floor(.9 * j)), a73--, this.setTime()
	}, this.j3 = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a74 = dt.getUTCMinutes(), a75 = dt.getUTCSeconds(), a76 = [0, 10, 20, 25, 30, 35, 40, 45, 50], a77 = (a72 = 3600 - 60 * a74 - a75, a72 %= 300, 300), aB = 0; aB < a76.length; aB++)
			if ((60 * a74 + a75 + a72) % 3600 == 60 * a76[aB]) {
				a77 = 0;
				break
			} return a72 += a77, a71 = qI + a78(Math.floor(a72 / 60)) + ":" + a78(a72 % 60), a73 !== (a73 = 60 * a74 + a75) && (i = aQ.measureText(a71, font), i += Math.floor(.4 * j), !0)
	}, this.uj = function() {
		uk.lineWidth = 1 + Math.floor(j / 15), uk.translate(h.i - j, Math.floor(.5 * (h.j + i))), uk.rotate(-Math.PI / 2), uk.fillStyle = bB.nj, uk.fillRect(0, 0, i, j), uk.strokeStyle = bB.na, uk.strokeRect(0, 0, i, j + 10), uk.fillStyle = bB
			.na, uk.font = font, bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 1), uk.fillText(a71, Math.floor(i / 2), Math.floor(.59 * j)), uk.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a55, a7A, a7B, x3, a7C, a7D = 0,
		a7E = 0;

	function a7G(aB) {
		var a7I = !0,
			zF = bB.nj,
			i = (1 === a55[aB].id ? a55[aB].yJ.fillStyle = bB.oc : a55[aB].jJ === aD.ek ? a55[aB].yJ.fillStyle = bB.nu : (ac.a7J(a55[aB].jJ), a55[aB].yJ.fillStyle = bA.color.nd(bO.fM[0], bO.fM[1], bO.fM[2], .87), 400 < bA.qj.a2b(bO.fM, 0, 2) && (
				a7I = !1, zF = bB.na)), a55[aB].canvas.width),
			sx = (a55[aB].yJ.clearRect(0, 0, i, x3), a55[aB].yJ.fillRect(0, 0, i, x3), a55[aB].yJ.fillStyle = zF, ! function(yJ, i, x3) {
				yJ.fillRect(0, 0, i, 1), yJ.fillRect(0, x3 - 1, i, 1), yJ.fillRect(0, 0, 1, x3), yJ.fillRect(i - 1, 0, 1, x3)
			}(a55[aB].yJ, i, x3), a7A + 2 * x3 < i && (a55[aB].yJ.fillRect(i - a7A - x3, 0, 1, x3), a55[aB].yJ.fillText(ag.yc[a55[aB].jJ], Math.floor((i - a7A) / 2), Math.floor(.57 * x3))), 0 !== a55[aB].id ? 0 : x3);
		a55[aB].yJ.fillText(bA.ra.zQ(a55[aB].hW), Math.floor(i - a7A / 2 - sx), Math.floor(.57 * x3)),
			function(aB, i, sx, a7I) {
				a55[aB].yJ.fillStyle = a7I ? bB.nl : bB.nh;
				a7I = Math.floor(a7A * a55[aB].hW / a55[aB].a7P);
				a55[aB].yJ.fillRect(Math.floor(i - a7A - sx), x3 - a7C, a7I, a7C)
			}(aB, i, sx, a7I), 0 === a55[aB].id ? (a7M(aB, i, a7I, zF), function(aB, i, a7I) {
				a55[aB].yJ.strokeStyle = a7I ? bB.o1 : bB.oB, a55[aB].yJ.fillRect(x3, 0, 1, x3);
				a7I = i - x3;
				a55[aB].yJ.beginPath(), a55[aB].yJ.moveTo(Math.floor(.3 * x3 + a7I), Math.floor(x3 / 2)), a55[aB].yJ.lineTo(Math.floor(x3 - .3 * x3 + 0 + a7I), Math.floor(x3 / 2)), a55[aB].yJ.stroke(), a55[aB].yJ.beginPath(), a55[aB].yJ.moveTo(
					Math.floor(x3 / 2 + a7I), Math.floor(.3 * x3)), a55[aB].yJ.lineTo(Math.floor(x3 / 2 + a7I), Math.floor(x3 - .3 * x3 + 0)), a55[aB].yJ.stroke()
			}(aB, i, a7I)) : a7M(aB, 2 * x3, a7I, zF)
	}

	function a7M(aB, i, a7I, zF) {
		a55[aB].yJ.strokeStyle = a55[aB].a7Q ? bB.ns : a7I ? bB.oH : bB.oI, a55[aB].yJ.fillStyle = zF, a55[aB].yJ.fillRect(i - x3, 0, 1, x3), a55[aB].yJ.lineWidth = Math.max(Math.floor(x3 / 12), 3), a55[aB].yJ.lineCap = "round";
		a7I = .35;
		i = x3 + 1, a55[aB].yJ.beginPath(), a55[aB].yJ.moveTo(Math.floor(i - a7I * x3 + 0), Math.floor(a7I * x3)), a55[aB].yJ.lineTo(Math.floor(i - x3 + a7I * x3), Math.floor(x3 - a7I * x3 + 0)), a55[aB].yJ.stroke(), a55[aB].yJ.beginPath(), a55[aB]
			.yJ.moveTo(Math.floor(i - x3 + a7I * x3), Math.floor(a7I * x3)), a55[aB].yJ.lineTo(Math.floor(i - a7I * x3 + 0), Math.floor(x3 - a7I * x3 + 0)), a55[aB].yJ.stroke()
	}

	function a7c(g, a7a) {
		for (var hW, aB = a7a - 1; 0 <= aB; aB--) hW = ad.g0(aD.eX, aB), g[aB].hW !== hW && (g[aB].hW = hW, g[aB].a7P = Math.max(hW, g[aB].a7P), g[aB].a7H = !0)
	}

	function a7g(g, a7e) {
		for (var tA = aD.eX << 3, a6g = bN.y.a6g, m1 = bN.y.m1, a7i = bN.y.a7i, aB = a7e - 1; 0 <= aB; aB--) {
			var a7j = a7i[tA + aB],
				hW = a6g[a7j];
			g[aB].hW !== hW ? (g[aB].hW = hW, g[aB].a7P = Math.max(hW, g[aB].a7P), g[aB].a7H = !0) : g[aB].a7Q || m1[a7j] % 64 != 5 || (g[aB].a7Q = !0, g[aB].a7H = !0)
		}
	}

	function a7F(a58) {
		a58.canvas = document.createElement("canvas"), bS.wc.font = a7B;
		var i = a7A;
		a58.jJ < aD.ek && 0 === a58.id && (i += Math.floor(bS.wc.measureText(ag.yc[a58.jJ] + "000").width)), i += x3, 0 === a58.id && (i += x3), a58.canvas.width = i, a58.canvas.height = x3, a58.yJ = a58.canvas.getContext("2d", {
			alpha: !0
		}), a58.yJ.font = a7B, bA.qb.textBaseline(a58.yJ, 1), bA.qb.textAlign(a58.yJ, 1)
	}

	function a7W(aB) {
		return aU.a7k() ? h.i - a55[aB].canvas.width - bc.gap : aU.eu
	}

	function a7X(aB) {
		return Math.floor(2 * bc.gap + (aU.a7k() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * x3))
	}
	this.dd = function() {
		a7D = a7E = 0, a55 = [], this.resize()
	}, this.resize = function() {
		a7B = aN.a5o, x3 = aN.fontSize + 5, x3 = Math.floor(1.25 * x3), a0.a1.hw() && (x3 = Math.floor(1.25 * x3)), a7C = Math.floor(.15 * x3), bS.wc.font = a7B, a7A = Math.floor(bS.wc.measureText("02 000 000 0000").width);
		for (var aB = a55.length - 1; 0 <= aB; aB--) a7F(a55[aB]), a7G(aB)
	}, this.mV = function() {
		for (var aB = a55.length - 1; 0 <= aB; aB--) a55[aB].a7H && (a55[aB].a7H = !1, a7G(aB))
	}, this.h0 = function(lP, lQ) {
		if (2 !== aD.a09 && 0 !== ag.mj[aD.eX] && !aD.gw && !bA.g9.jX(aD.eX))
			for (var a7R, a7S, a7T, a7U = a0.a1.hw() ? x3 : 0, a7V = a0.a1.hw() ? Math.floor(.15 * x3) : 0, aB = a55.length - 1; 0 <= aB; aB--)
				if (a7R = a7W(aB), a7S = a7X(aB), a7T = a55[aB].canvas.width, a7S - a7V <= lQ && lQ <= a7S + x3 + a7V) {
					if (a7R - a7U <= lP && lP <= a7R + x3 + a7U) return a55[aB].a7Q || (a55[aB].a7H = !0, a55[aB].a7Q = !0, 0 === a55[aB].id ? b8.hD.pH(a55[aB].jJ) : b8.hD.pG(a55[aB].jJ)), !0;
					if (0 === a55[aB].id && a7R + a7T - x3 - a7U <= lP && lP <= a7R + a7T + a7U) return bV.a5X(3), b8.hD.hK(aR.hH(), a55[aB].jJ), !0
				} return !1
	}, this.j3 = function() {
		var a2j, a2k, g, a7a;
		0 === ag.mj[aD.eX] || bA.g9.jX(aD.eX) && !aD.gw || (a2j = a55.slice(0, a7D), a2k = a55.slice(a7D, a7D + a7E), g = a2j, a7a = ad.fu(aD.eX), function(g, a7a) {
			if (a7D !== a7a) return 1;
			for (var aB = a7a - 1; 0 <= aB; aB--)
				if (g[aB].jJ !== ad.fz(aD.eX, aB)) return 1;
			return
		}(g, a7a) ? a7c(g = function(g, a7a) {
			var aB, jJ, f7, hW, a6F = [];
			loop: for (aB = 0; aB < a7a; aB++) {
				for (jJ = ad.fz(aD.eX, aB), f7 = 0; f7 < g.length; f7++)
					if (g[f7].jJ === jJ) {
						a6F.push(g.splice(f7, 1)[0]);
						continue loop
					} hW = ad.g0(aD.eX, aB), a7F(hW = {
					jJ: jJ,
					hW: hW,
					a7P: hW,
					id: 0,
					a7H: !0,
					a7Q: !1,
					canvas: null,
					yJ: null
				}), a6F.push(hW)
			}
			return a6F
		}(g, a7a), a7a) : a7c(g, a7a), a2j = g, a2k = function(g) {
			var a7e = bN.y.kE[aD.eX];
			return function(g, a7e) {
				if (a7E !== a7e) return 1;
				for (var tA = aD.eX << 3, m3 = bN.y.m3, a7i = bN.y.a7i, aB = a7e - 1; 0 <= aB; aB--) {
					var a7j = a7i[tA + aB];
					if (g[aB].jJ !== m3[a7j]) return 1
				}
				return
			}(g, a7e) ? a7g(g = function(g, a7e) {
				var aB, jJ, f7, a6F = [],
					tA = aD.eX << 3,
					m3 = bN.y.m3,
					a6g = bN.y.a6g,
					a7i = bN.y.a7i;
				loop: for (aB = 0; aB < a7e; aB++) {
					var a7j = a7i[tA + aB];
					for (jJ = m3[a7j], f7 = 0; f7 < g.length; f7++)
						if (g[f7].jJ === jJ) {
							a6F.push(g.splice(f7, 1)[0]);
							continue loop
						} a7j = a6g[a7j], a7F(a7j = {
						jJ: jJ,
						hW: a7j,
						a7P: a7j,
						id: 1,
						a7H: !0,
						a7Q: !1,
						canvas: null,
						yJ: null
					}), a6F.push(a7j)
				}
				return a6F
			}(g, a7e), a7e) : a7g(g, a7e), g
		}(a2k), a7D = a2j.length, a7E = a2k.length, a55 = a2j.concat(a2k))
	}, this.uj = function() {
		if (0 !== ag.mj[aD.eX] && (!bA.g9.jX(aD.eX) || aD.gw))
			for (var aB = a55.length - 1; 0 <= aB; aB--) uk.drawImage(a55[aB].canvas, a7W(aB), a7X(aB))
	}
}

function cH() {
	var a61, kF, a7l, a7m, j, a5o, fontSize, a7n, a7o, a7p, a7q, canvas, yJ, mw, a7r;

	function v1(aB) {
		return L(0 === aB ? 100 : 1 === aB ? 101 : 2 === aB ? 102 : 103)
	}

	function a7y() {
		aD.hh ? a7z + 4 * bc.gap + j + bh.a80() > aR.ew ? uk.drawImage(canvas, 2 * bc.gap + bh.a80(), a7z + 2 * bc.gap) : uk.drawImage(canvas, bc.gap, a7z + 3 * bc.gap + bh.a80()) : uk.drawImage(canvas, bc.gap, a7z + 2 * bc.gap)
	}

	function a7s() {
		canvas.width = a61[0].width + a7p, canvas.height = j + a7p, (yJ = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a61[0].width + a7p, j + a7p), yJ.translate(Math.floor(a7p / 2), Math.floor(a7p / 2)), yJ.lineWidth = a7p, yJ.fillStyle = 1 === a61[0].a7x ? bB.no : bB.ng, a81(), yJ.fill(), yJ.strokeStyle = 1 === a61[0].a7x ? bB.na :
			bB.nj, a81(), yJ.stroke(), bA.qb.textAlign(yJ, 1), bA.qb.textBaseline(yJ, 1), yJ.fillStyle = 1 === a61[0].a7x ? bB.na : bB.nj, yJ.font = a5o[0], yJ.fillText(v1(a61[0].a7w), Math.floor(a61[0].width / 2), Math.floor(.72 * a7n[0] * j)), yJ
			.font = a5o[1], yJ.fillText(a61[0].qI, Math.floor(a61[0].width / 2), Math.floor((a7n[0] + .48 * a7n[1]) * j))
	}

	function a81() {
		yJ.beginPath(), yJ.moveTo(a7q, 0), yJ.lineTo(a61[0].width - a7q, 0), yJ.lineTo(a61[0].width, a7q), yJ.lineTo(a61[0].width, j - a7q), yJ.lineTo(a61[0].width - a7q, j), yJ.lineTo(a7q, j), yJ.lineTo(0, j - a7q), yJ.lineTo(0, a7q), yJ.closePath()
	}
	this.dd = function() {
		kF = 4, a7l = a7m = mw = 0, a61 = [], a5o = new Array(2), fontSize = new Array(2), (a7n = new Array(2))[0] = .3, a7n[1] = .7, a7o = new Array(4), canvas = document.createElement("canvas"), a7r = bf.eM + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hw() ? .062 : .047) * h.hx), fontSize[0] = Math.floor(.85 * a7n[0] * j), fontSize[1] = Math.floor(.85 * a7n[1] * j), a5o[0] = bA.qb.sQ(1, fontSize[0]), a5o[1] = bA.qb.sQ(1, fontSize[1]), aB = a7o.length -
			1; 0 <= aB; aB--) a7o[aB] = this.measureText(v1(aB) + "000", a5o[0]);
		if (a7p = Math.floor(1 + .05 * j), a7q = Math.floor(.2 * j), 0 < a61.length) {
			for (aB = a61.length - 1; 0 <= aB; aB--) i = this.measureText(a61[aB].qI + "00", a5o[1]), a61[aB].width = i < a7o[aB] ? a7o[aB] : i;
			a7s()
		}
	}, this.j3 = function() {
		0 !== kF && (4 === kF ? bf.eM > a7r && (kF = 0, 1 === aD.a09) && aQ.a0V(bS.wW.wX[bS.eT].name, 3, 1, 9) : (1 === kF ? (0 === a7l && (a7s(), a7l = 1e-4), 1 <= (a7l += .002 * (bf.eM - mw)) && (a7m = 0, kF = 2, a7l = 1), bf.dl = !0) : 2 ===
			kF ? ((a7m += (bf.eM - mw) / 1e3) > a61[0].eF || 1 < a7m && 1 < a61.length) && (kF = 3) : 3 === kF && ((a7l -= .002 * (bf.eM - mw)) <= 0 && (a7l = 0, a61.shift(), kF = 0 < a61.length ? 1 : 0), bf.dl = !0), mw = bf.eM))
	}, this.measureText = function(qI, a5o) {
		return uk.font = a5o, Math.floor(uk.measureText(qI).width)
	}, this.jG = function(a7v, aB) {
		this.a0V(ag.yc[a7v], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0V = function(qI, a7w, a7x, eF) {
		var i;
		qI.length && (i = (i = this.measureText(qI + "00", a5o[1])) < a7o[a7w] ? a7o[a7w] : i, a61.push({
			qI: qI,
			width: i,
			a7w: a7w,
			a7x: a7x,
			eF: eF
		}), 0 === kF) && (a7l = 0, kF = 1, mw = bf.eM)
	}, this.uj = function() {
		0 !== kF && 0 !== a7l && (a7l < 1 ? (uk.globalAlpha = a7l, a7y(), uk.globalAlpha = 1) : a7y())
	}
}

function cq() {
	var j, canvas, yJ, a82, a83, a84, a85, a7H, a86, a87, a88, a89, a6m = !1,
		a2x = (this.hZ = !1, this.i = 0, new Array(2)),
		a8A = 0;

	function mW() {
		var i = aw.i,
			l5 = (a7H = !1, yI(yJ, i, j), Math.floor(i / 2));
		1 === a82 ? (yJ.fillStyle = bB.o3, yJ.fillRect(l5, 0, l5, j)) : -1 === a82 && (yJ.fillStyle = bB.oJ, yJ.fillRect(0, 0, l5, j)), yK(yJ, i, j, 2);
		var l5 = (l5 = Math.floor(.25 * j)) < 2 ? 2 : l5,
			a6v = (yJ.fillStyle = bB.np, Math.floor((j - 4) * a83[1] / a84[1]));
		0 < a6v && yJ.fillRect(2, j - 2 - a6v, l5, a6v), 0 < (a6v = Math.floor((j - 4) * a83[0] / a84[0])) && yJ.fillRect(i - 2 - l5, j - 2 - a6v, l5, a6v);
		l5 = (l5 = Math.floor(j / 8)) < 2 ? 2 : l5, yM(yJ, Math.floor(.4 * j), 0, j, l5, .5, !1), yM(yJ, Math.floor(i - 1.4 * j), 0, j, l5, .5, !0), a6v = 1.1 * j / a2x[0].width;
		yJ.imageSmoothingEnabled = !0, yJ.setTransform(a6v, 0, 0, a6v, (i - a6v * a2x[0].width) / 2, -.05 * j), yJ.drawImage(a2x[+a6m], 0, 0), yJ.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8F() {
		a89 = -1, a6m = ah.a8G(), aN.a4R(257), aN.a6l(a6m), aw.hZ = !0, a7H = !0, a86 = 360;
		for (var fF, dt = 0, aB = al.kg - 1; 0 <= aB; aB--) bA.g9.jX(al.kl[aB]) || (dt += ag.gb[al.kl[aB]]);
		a6m ? a84[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hh ? 9 === aD.kS && 8 === bg.kX[bh.kj()] ? a84[0] = Math.max(dt, 1) : (fF = bL.du(100 * bh.kh(), aD.ju), fF = bL.hv(200 - 2 * fF, 40, 100), fF = bL.du(fF * dt, 100), a84[0] = Math.max(fF,
			1)) : 8 === aD.kS ? a84[0] = Math.max(bL.du(3 * dt, 4), 1) : a84[0] = Math.max(bL.du(3 * dt, 5), 1), a84[1] = Math.max(dt - a84[0], 1)
	}

	function a8B() {
		a88 = bf.k7(), a7H = !0, a86 = a82 = 0, a85 = [], aw.hZ = !1, aN.a0G(247), a83[0] = a83[1] = 0, aN.a4R(673)
	}

	function yF() {
		return aR.a6Q(aN.a6M()) ? __fx.settings.keybindButtons ? aR.ew - 2 * (j + bc.gap) : aR.ew - j - bc.gap : bC.a6Q(aN.a6P()) ? bC.yF() - j - bc.gap : h.j - j - bk.a5D() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a2x[aB] = bA.canvas.yt(ab.get(3), 8 - aB, bB.ov), a2x[aB] = bA.canvas.a2z(a2x[aB])
	}, this.dd = function() {
		a88 = -1e4, a87 = a8A = 0, a89 = -1, this.hZ = !1, a7H = a6m = !1, a83 = [a82 = a86 = 0, 0], a84 = [1, 1], a85 = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, yJ = canvas.getContext("2d", {
			alpha: !0
		}), mW()
	}, this.mV = function() {
		a7H && mW()
	}, this.h0 = function(eu, ew) {
		return !!this.hZ && !(eu < h.i - this.i - bc.gap || ew < yF() || (aD.gw || this.ha(aD.eX) && (aM.gx && aM.a2E(), b8.hD.hb(eu > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j3 = function() {
		0 < a87 ? 0 === --a87 && a8B() : this.hZ ? 180 == --a86 && 3 * a83[0] < a84[0] ? a8B() : a83[0] >= a84[0] ? a6m ? bR.zl.a04() : bR.zl.a08() : a83[1] >= a84[1] ? a87 = 4 : a86 <= 0 && a8B() : ! function() {
			var a8I = bf.k7();
			if (a8I % 40 == 14) {
				if (a8A) return !(a8I < a8A) && !(a8I < a88 + 535) && (a8A = a8I + 1071, bA.g9.a3W()) ? (a8F(), 1) : 0;
				(1 === al.kg || (aD.hh ? bh.kh() : ag.gb[ll[0]]) >= bL.du(96 * aD.ju, 100)) && (a8A = a8I + 535)
			}
			return
		}() && 0 <= a89 && (aN.yb(250, L(104, [ag.yc[a89]]), 673, a89, bB.nj, bB.ng, -1, !0), a8F())
	}, this.a0A = function() {
		this.hZ && a83[0] < a84[0] && a8B()
	}, this.qB = function(player, a8J) {
		var a8K = L(a8J ? 105 : 106, [ag.yc[player]]),
			a8K = (aN.yb(450, a8K, 257, player, a8J ? bB.o1 : bB.oG, bB.ng, -1, !0), a85.push(player), a7H = !0, aD.kU ? Math.max(a84[0], a84[1]) : ag.gb[player]),
			a8K = Math.max(a8K, 1);
		a8J ? a83[0] += a8K : a83[1] += a8K, player === aD.eX && (a82 = a8J ? 1 : -1)
	}, this.uj = function() {
		var ew;
		this.hZ && (ew = yF(), uk.drawImage(canvas, h.i - this.i - bc.gap, ew))
	}, this.hc = function(player) {
		return 0 === a86 && !!bA.g9.gy(1) && !!bA.g9.gz(player) && !(10 <= jv[player] && !bA.g9.a3p(player, 9) || !aD.kU && ((player = bf.k7()) < a88 + 100 || player < 1607 || 9 === aD.kS && !bh.a8M()))
	}, this.ha = function(gL) {
		if (!bA.g9.gy(1)) return !1;
		if (!bA.g9.gz(gL)) return !1;
		if (!this.hZ) return !1;
		for (var aB = a85.length - 1; 0 <= aB; aB--)
			if (a85[aB] === gL) return !1;
		return !0
	}, this.hY = function(player) {
		a89 = player
	}
}

function cI() {
	var i, eu, a8N, canvas, yJ, hZ, iN, a4I, a5o, a7H, a8O = 11 / 12;

	function a8Q() {
		var a7O = Math.floor(iN * (i - 2 * a8N)),
			a8T = 1 + Math.floor(.0625 * aR.j),
			a8U = 1 + Math.floor(.3 * aR.j),
			a8V = Math.floor(.55 * aR.j);
		yJ.clearRect(0, 0, i, aR.j), yJ.fillStyle = bB.nf, yJ.fillRect(0, 0, a8N, aR.j), yJ.fillRect(a8N + a7O, 0, i - a8N - a7O, aR.j), yJ.fillStyle = iN < 1 / 3 ? "rgba(" + Math.floor(3 * iN * 130) + ",130,0,0.85)" : iN < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iN - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iN - 2 / 3) * 130) + ",0.85)", yJ.fillRect(a8N, 0, a7O, aR.j), yJ.fillStyle = bB.nj, yJ.fillRect(0, 0, i, 1), yJ.fillRect(0, aR.j - 1, i, 1), yJ
			.fillRect(0, 0, 1, aR.j), yJ.fillRect(a8N, 0, 1, aR.j), yJ.fillRect(a8N + a7O, 0, 1, aR.j), yJ.fillRect(i - a8N, 0, 1, aR.j), yJ.fillRect(i - 1, 0, 1, aR.j), yJ.fillRect(Math.floor(.25 * aR.j) + a8U, Math.floor((aR.j - a8T) / 2), aR.j -
				2 * a8U, a8T), yJ.fillRect(Math.floor(i - 1.25 * aR.j) + a8U, Math.floor((aR.j - a8T) / 2), aR.j - 2 * a8U - a8U % 2, a8T), yJ.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8T) / 2), a8U, a8T, aR.j - 2 * a8U - a8U % 2),
			a4I = bA.g9.iM(aD.eX, aR.hH()), yJ.fillText(bA.ra.zQ(a4I) + " (" + bA.ra.a4B(100 * iN, +(iN < .1)) + ")", Math.floor(.5 * i), a8V)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iN = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2A(arg1);

	function a8a(a2W) {
		return !(1 < a2W && 1 === iN || (1 < a2W && a2W * iN - iN < 1 / 1024 ? a2W = (iN + 1 / 1024) / iN : a2W < 1 && iN - a2W * iN < 1 / 1024 && (a2W = (iN - 1 / 1024) / iN), iN = bL.hv(iN * a2W, 1 / 1024, 1), a8Q(), 0))
	}

	function a8b(lP) {
		return iN !== (iN = bL.hv((lP - eu - a8N) / (i - 2 * a8N), 1 / 1024, 1)) && (a8Q(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8Q(), bf.dl = !0
	}, this.ew = 0, this.h1 = !1, this.dd = function() {
		hZ = !aD.hB && !aD.gw, a7H = !1, iN = .5, a4I = 0, this.h1 = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hw() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hx), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.hw() ? .65 : .389) * h.hx), i += 12 - i % 12, this.j = Math.floor(i / 12)), a8N = Math.floor(3 * this.j / 2), a5o =
			bA.qb.sQ(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, uk), canvas.height = this.j, (yJ = canvas.getContext("2d", {
				alpha: !0
			})).font = a5o, bA.qb.textBaseline(yJ, 1), bA.qb.textAlign(yJ, 1), this.a8P(), a8Q()
	}, this.a8P = function() {
		eu = a0.a1.hw() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.ew = h.j - this.j - bk.a5D() * bc.gap
	}, this.mV = function() {
		a7H && (a7H = !1, a8Q())
	}, this.hZ = function() {
		return !(!hZ || aM.gx && eu < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6Q = function(a8W) {
		return !!this.hZ() && eu + i > h.i - a8W - bc.gap
	}, this.a4P = function() {
		hZ = !aD.gw
	}, this.a8B = function() {
		hZ = !1
	}, this.hH = function() {
		return bL.hv(Math.floor(1024 * iN + .5) - 1, 0, 1023)
	}, this.a27 = function(lP, lQ) {
		return this.hZ() && eu < lP && lP < eu + i && lQ > this.ew
	}, this.h0 = function(lP, lQ) {
		if (!this.hZ()) return !1;
		if (!(__fx.settings.keybindButtons && lQ > this.ew - Math.floor(bc.gap / 4) - this.j && lQ < this.ew - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lP - eu))) {
			if (!aR.a27(lP, lQ)) return !1;
			aS.nE = !1, ! function(sD, lP, lQ) {
				if (function(lP, lQ) {
						return eu < lP && lP < eu + a8N && lQ > aR.ew
					}(lP, lQ)) return a8a(a8O);
				if (function(lP, lQ) {
						return eu + i - a8N < lP && lP < eu + i && lQ > aR.ew
					}(lP, lQ)) return a8a(1 / a8O);
				return sD.h1 = !0, a8b(lP)
			}(this, lP, lQ) || (bf.dl = !0)
		}
		return !0
	}, this.a2A = function(nL) {
		0 !== aD.a09 && this.hZ() && a8a(nL) && (bf.dl = !0)
	}, this.a1g = function(deltaY) {
		var nL;
		return !(0 === deltaY || !this.hZ()) && a8a(nL = 0 < deltaY ? (nL = 400 / (400 + deltaY)) < a8O ? a8O : nL : 1 / a8O < (nL = (400 - deltaY) / 400) ? 1 / a8O : nL)
	}, this.a1d = function(lP) {
		return !!this.h1 && a8b(lP)
	}, this.a23 = function() {
		this.h1 = !1
	}, this.j3 = function() {
		this.hZ() && a4I !== bA.g9.iM(aD.eX, this.hH()) && (a7H = !0)
	}, this.uj = function() {
		this.hZ() && (uk.drawImage(canvas, eu, this.ew), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(uk, eu, this.ew)
	}
}

function d0() {
	var canvas, yJ, a8c, font, a8d = 0,
		a8e = !1,
		a8f = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8g = 5;

	function a8n() {
		if (a8e) {
			var aB, en = a8f.length,
				a8V = Math.floor(.5 * a8c.j),
				j = en * a8V,
				eu = Math.floor(Math.floor(a8c.eu) + .3 * a8c.i - .5),
				ew = Math.floor(Math.floor(a8c.ew) - j),
				i = Math.floor(.4 * a8c.i + 2.5);
			for (uk.fillStyle = bB.nf, uk.fillRect(eu, ew, i, j), uk.fillStyle = bB.o8, uk.fillRect(eu, ew + a8g * a8V, i, a8V), uk.fillStyle = bB.nj, uk.fillRect(eu, ew, 2, j), uk.fillRect(eu, ew, i, 2), uk.fillRect(eu + i - 2, ew, 2, j), aB =
				1; aB < en; aB++) uk.fillRect(eu, ew + aB * a8V, i, 2);
			for (uk.fillStyle = bB.nj, bA.qb.textAlign(uk, 1), bA.qb.textBaseline(uk, 1), uk.font = bA.qb.sQ(0, .6 * a8V), eu += .5 * i, aB = 0; aB < en; aB++) uk.fillText(a8v(aB), eu, ew + (aB + .6) * a8V)
		}
		uk.drawImage(canvas, Math.floor(a8c.eu), Math.floor(a8c.ew))
	}

	function mW(sD) {
		var eu, n9, nA, a8V;
		yJ.clearRect(0, 0, Math.floor(a8c.i), Math.floor(a8c.j)), yJ.fillStyle = bB.nf, yJ.fillRect(0, 0, Math.floor(a8c.i), Math.floor(a8c.j)), aD.nC && (yJ.fillStyle = bB.o8, yJ.fillRect(0, 0, Math.floor(.3 * a8c.i), Math.floor(a8c.j))), yJ
			.fillStyle = bB.nj, yJ.fillText("Hide UI", .15 * a8c.i, .5 * a8c.j), yJ.fillRect(Math.floor(.3 * a8c.i - .5), 0, 2, Math.floor(a8c.j)), eu = .5 * a8c.i, yJ.fillText("Replay Speed", eu, .31 * a8c.j), yJ.fillText(a8v(a8g), eu, .69 * a8c.j),
			yJ.fillRect(Math.floor(.7 * a8c.i - .5), 0, 2, Math.floor(a8c.j)), sD.a4x ? (eu = Math.floor(.02 * a8c.i), sD = Math.floor(.025 * a8c.i), n9 = Math.floor(.85 * a8c.i - eu - .5 * sD), nA = Math.floor(.25 * a8c.j), a8V = Math.floor(a8c.j) -
				2 * nA, yJ.fillRect(n9, nA, eu, a8V), yJ.fillRect(n9 + eu + sD, nA, eu, a8V)) : function() {
				var i = Math.floor(.46 * a8c.j),
					j = Math.floor(.23 * a8c.j),
					eu = Math.floor(.85 * a8c.i - .5 * i + i / 12),
					ew = Math.floor(.5 * a8c.j - j);
				yJ.beginPath(), yJ.moveTo(eu, ew), yJ.lineTo(eu + i, ew + j), yJ.lineTo(eu, ew + (j << 1)), yJ.fill()
			}(), yJ.fillRect(0, 0, Math.floor(a8c.i), 2), yJ.fillRect(0, 0, 2, Math.floor(a8c.j)), yJ.fillRect(0, Math.floor(a8c.j) - 2, Math.floor(a8c.i), 2), yJ.fillRect(Math.floor(a8c.i - 2), 0, 2, Math.floor(a8c.j))
	}

	function a8v(aB) {
		return 5 === aB ? "Normal" : "" + a8f[aB]
	}
	this.a4x = !1, this.dd = function() {
		aD.gw && (a8g = 5, this.a4x = !1, a8e = !1, a8c = new rC([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8h = function() {
		return a8f[a8g]
	}, this.yF = function() {
		return a8c.ew
	}, this.a6Q = function(a8W) {
		return !!aD.gw && a8c.eu + a8c.i > h.i - a8W - bc.gap
	}, this.resize = function() {
		aD.gw && (a8c.resize(), a8c.ew -= (bk.a5D() - 1) * bc.gap, font = bA.qb.sQ(0, .3 * a8c.j), (canvas = document.createElement("canvas")).width = Math.floor(a8c.i), canvas.height = Math.floor(a8c.j), (yJ = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qb.textAlign(yJ, 1), bA.qb.textBaseline(yJ, 1), mW(this))
	}, this.a2D = function(a8i) {
		0 === aD.a09 || t.hZ() || a8i !== aD.nC && (aD.nC = a8i, bh.resize(), bf.dl = !0, aD.gw) && (a8d = bf.eM + 2e3, mW(this))
	}, this.h0 = function(eu, ew) {
		if (!aD.gw) return !1;
		if (eu < a8c.eu || ew < a8c.ew || eu > a8c.eu + a8c.i) return a8e && function(sD, eu, ew) {
			var en = a8f.length,
				a8V = Math.floor(.5 * a8c.j),
				j = en * a8V,
				n9 = Math.floor(Math.floor(a8c.eu) + .3 * a8c.i - .5),
				j = Math.floor(Math.floor(a8c.ew) - j),
				i = Math.floor(.4 * a8c.i + 2.5);
			return a8e = !1, bf.dl = !0, eu < n9 || n9 + i < eu || ew < j || (a8g = a8m(0, Math.floor((ew - j) / a8V), en - 1), mW(sD)), !0
		}(this, eu, ew);
		if ((eu -= a8c.eu) < .3 * a8c.i) a8e = !1, this.a2D(!aD.nC);
		else {
			if (eu < .7 * a8c.i) return a8e = !a8e, bf.dl = !0;
			this.a2F(!1)
		}
		return !0
	}, this.a2F = function(a8k) {
		2 === aD.a09 ? (this.a2D(!1), t.u(3)) : (a8e = !1, this.a4x = !this.a4x, this.a4x ? (aM.gx && aM.a2E(), a0.a1.setState(1)) : a8k || aM.a5u(), bf.dl = !0, mW(this))
	}, this.a8l = function() {
		this.a4x = !1, aM.a5u(), bf.dl = !0, mW(this)
	}, this.a1w = function(eu, ew) {
		return !!aD.nC && (0 <= aM.h0(eu, ew) || (aD.gw ? ((bf.eM > a8d || !this.h0(eu, ew)) && aS.h0(eu, ew), bf.dl = !0, a8d = bf.eM + 2e3) : aS.h0(eu, ew)), !0)
	}, this.j3 = function() {
		aD.gw && aD.nC && bf.eM > a8d - 1e3 && bf.eM < a8d && (bf.dl = !0)
	}, this.a0H = function() {
		aD.gw && (this.a4x = !1, bf.dl = !0, mW(this))
	}, this.uj = function() {
		if (aD.gw) {
			if (aD.nC) {
				if (bf.eM > a8d) return;
				if (bf.eM > a8d - 1e3) return uk.globalAlpha = a8m(0, (1e3 - (bf.eM - (a8d - 1e3))) / 1e3, 1), a8n(), void(uk.globalAlpha = 1)
			}
			a8n()
		}
	}
}

function cJ() {
	var a8w, a8x, i, eu, ew, a8y, a8z;
	this.dd = function() {
		a8w = new Array(2), a8x = new Array(2), this.nE = !1, a8z = a8y = iP = iO = 0, hy = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.hw() ? .072 : .0502) * h.hx)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8w[aB] = document.createElement("canvas"), a8w[aB].width = i, a8w[aB].height = i, a8x[aB] = a8w[aB].getContext("2d", {
			alpha: !0
		});
		this.a8P(),
			function() {
				for (var a9G = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8x[aB].clearRect(0, 0, i, i), a8x[aB].fillStyle = bB.nc, a8x[aB].beginPath(), a8x[aB].arc(i / 2, i / 2, i / 2 - a9G, 0, 2 * Math.PI), a8x[aB].fill(), a8x[aB]
					.lineWidth = a9G, a8x[aB].fillStyle = bB.nj, a8x[aB].strokeStyle = bB.nj, a8x[aB].beginPath(), a8x[aB].arc(i / 2, i / 2, i / 2 - a9G, 0, 2 * Math.PI), a8x[aB].stroke(), yM(a8x[aB], 0, 0, i, a9G, .3, 0 === aB)
			}()
	}, this.yE = function() {
		return -iO / hy
	}, this.yF = function() {
		return -iP / hy
	}, this.nO = function(a93, i4) {
		iO = hy * a93 - i4
	}, this.nP = function(a94, i5) {
		iP = hy * a94 - i5
	}, this.h0 = function(a92, a6R) {
		return aD.nC || ! function(a92, a6R) {
			return Math.pow(a92 - (eu + i / 2), 2) + Math.pow(a6R - (ew + i / 2), 2) < i * i / 4 || Math.pow(a92 - (eu + i / 2), 2) + Math.pow(a6R - (ew + 2 * i), 2) < i * i / 4
		}(a92, a6R) || bj.eK.data[8].value ? (aH.nR() && (this.nE = !0, a8y = a92, a8z = a6R), !1) : a6R < ew + 1.25 * i ? this.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1g(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1d = function(a92, a6R) {
		var a95, a96, i7, iA;
		return !aH.nR() || (a95 = iO, a96 = iP, iO += i7 = a8y - a92, iP += iA = a8z - a6R, af.a1d(i7, iA), this.a97(), a8y = a92, a8z = a6R, a95 !== iO) || a96 !== iP
	}, this.a1g = function(lP, lQ, deltaY) {
		var nL;
		if (aH.nR()) {
			if (0 < deltaY) nL = (nL = 500 / (500 + deltaY)) < .5 ? .5 : nL;
			else {
				if (!(deltaY < 0)) return !1;
				nL = 2 < (nL = (500 - deltaY) / 500) ? 2 : nL
			}
			this.a98(lP, lQ, nL), bf.dl = !0
		}
		return !0
	}, this.a98 = function(eu, ew, eR) {
		var a2W;
		eR = a2W = (a2W = 1024 < (a2W = eR) * hy ? 1024 / hy : a2W) * hy < .125 ? .125 / hy : a2W, af.zoom(eR, eu, ew),
			function(a2W, lP, lQ) {
				hy *= a2W, iO = (iO + lP) * a2W - lP, iP = (iP + lQ) * a2W - lQ, aS.a97()
			}(eR, eu, ew)
	}, this.a97 = function() {
		var a9B = h.i / 16,
			a9C = 0,
			a9D = h.j / 16,
			a9E = 0;
		iO < -h.i + a9B && (a9C = -h.i + a9B - iO), iO > hy * bS.ey - a9B && (a9C = hy * bS.ey - a9B - iO), iP < -h.j + a9D && (a9E = -h.j + a9D - iP), iP > hy * bS.ez - a9D && (a9E = hy * bS.ez - a9D - iP), iO += a9C, iP += a9E, ba.nQ(), af.a9F(
			a9C, a9E)
	}, this.a8P = function() {
		eu = h.i - i - bc.gap, ew = Math.floor(h.j / 2 - 1.25 * i)
	}, this.uj = function() {
		bj.eK.data[8].value || (uk.drawImage(a8w[0], eu, ew), uk.drawImage(a8w[1], eu, Math.floor(ew + 3 * i / 2)))
	}
}

function cK() {
	var g, a9H, a9I, a9J, gap, a9K, a9L, a9M, a9N, a9O, a5o, a9P, gs, a9Q, a7O, a9R, a9S;

	function a9W() {
		a9J = Math.floor(.2 * (a0.a1.hw() ? .07 : .035) * h.hx), a9J = a6O(a0.a1.hw() ? 3 : 1, a9J);
		var a9Z = h.i / (g.length + gap);
		a9J = a9J < a9Z ? a9Z : a9J, a7O = Math.floor((1 - gap) * a9J), a9H = 0, a9a()
	}

	function a9a() {
		a9H = (a9H = a9H < -20 ? -20 : a9H) > (g.length - 15) * a9J ? (g.length - 15) * a9J : a9H, a9L = Math.floor(a9H / a9J), a9M = (a9M = a9L + Math.floor(h.i / a9J)) > g.length - 1 ? g.length - 1 : a9M, a9L = (a9L = a9M < a9L ? a9M : a9L) < 0 ?
			0 : a9L;
		var l5 = a9M;
		a9K = a9I / g[l5];
		for (var aB = a9M - 1; a9L <= aB; aB--) g[aB] > g[l5] && (l5 = aB, a9K = a9I / Math.pow(g[aB], a9Q))
	}

	function a9d(eu) {
		eu = Math.floor((a9H + h.i - eu - gap * a9J) / a9J);
		return (eu = eu < -1 ? -1 : -1 === eu ? 0 : eu > g.length - 1 ? -1 : eu) !== a9N && (a9N = eu, -1 === a9R && 0 === a9N && aT.a9T && (a9R = setInterval(a9e, 100)), 1)
	}

	function a9f(aB) {
		var a9h = Math.floor(a9K * Math.pow(g[aB], a9Q));
		uk.fillRect(a9H + h.i - (aB + 1) * a9J, h.j - a9h, a7O, a9h)
	}

	function a9e() {
		var gL;
		0 !== (a9N = 8 === aa.a1K() ? -1 : a9N) ? (a9S = (new Date).getTime(), clearInterval(a9R), a9R = -1) : (gL = g[1] / 864e3, -1 !== a9S && (gL += ((new Date).getTime() - a9S) * g[1] / 864e5, a9S = -1), 0 < gL && (g[0] += Math.floor(gL), bf
			.dl = !0))
	}
	this.a9T = !1, this.dd = function() {
		a9S = a9R = -1, a9N = -(a9Q = 1), this.a9U = !1, gs = 0, a9P = new Date, a9H = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a9I = Math.floor(.15 * h.j), a9O = (a9O = Math.floor((a0.a1.hw() ? .018 : .0137) * h.hx)) < 2 ? 2 : a9O, a5o = bA.qb.sQ(1, a9O), a9W()
	}, this.a9X = function(a9Y) {
		var aB;
		for (this.a9T = !0, aB = 0; aB < a9Y.length; aB++) g.unshift(a9Y[aB]);
		a9W(), bf.dl = !0
	}, this.a9b = function() {
		a9a()
	}, this.a1d = function(eu, ew) {
		ew > h.j - .6 * a9I ? this.a9U ? eu !== gs && (a9H += eu - gs, gs = eu, a9a(), a9d(eu), this.a9U = -1 !== a9N, bf.dl = !0) : a9d(eu) && (bf.dl = !0) : this.rc()
	}, this.rc = function() {
		-1 !== a9N && (this.a9U = !1, a9N = -1, bf.dl = !0)
	}, this.a1g = function(eu, deltaY) {
		-1 !== a9N && (a9H += Math.floor(deltaY), a9a(), a9d(eu), bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		this.a1d(eu, ew), -1 !== a9N && (gs = eu, this.a9U = !0)
	}, this.a22 = function() {
		-1 !== a9N && (this.a9U = !1)
	}, this.uj = function() {
		uk.fillStyle = bB.nm;
		for (var a9i, month, dt, sy, a9l, a9m, nA, a9n, a9o, aB = a9M; a9L <= aB; aB--) a9f(aB);
		this.a9T && 0 === a9L && (uk.fillStyle = bB.oJ, a9f(0)), -1 !== a9N && (uk.fillStyle = bB.nl, a9f(a9N)), -1 !== a9N && (uk.font = a5o, bA.qb.textBaseline(uk, 2), (dt = new Date).setTime(a9P.getTime() - 1e3 * a9N * 60 * 60 * 24), month =
			"month", a9i = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a9i = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a9i = a9i + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a9N] ? L(107) : L(108), month = bA.ra.zQ(g[a9N]) + " " + month, dt = Math.floor(uk.measureText(a9i).width), sy = Math
			.floor(uk.measureText(month).width), a9l = Math.floor(.5 * (dt + a9O)), a9m = (a9m = a9H + h.i - (a9N + 1) * a9J) < a9l ? a9l : a9m > h.i - a9l ? h.i - a9l : a9m, nA = h.j - Math.floor(a9K * Math.pow(g[a9N], a9Q)), a9n = Math
			.floor(1.1 * a9O), a9o = nA > h.j - a9n ? h.j - a9n : nA, uk.fillStyle = bB.ng, uk.fillRect(h.i - sy - a9O, a9o - a9n, sy + a9O, a9n), uk.fillRect(a9m - a9l, h.j - a9n, dt + a9O, a9n), uk.fillStyle = bB.nj, bA.qb.textAlign(uk, 2),
			uk.fillText(month, Math.floor(h.i - .5 * a9O), a9o), bA.qb.textAlign(uk, 1), uk.fillText(a9i, a9m, h.j), uk.strokeStyle = bB.nn, uk.lineWidth = 1, uk.beginPath(), uk.moveTo(0, nA), uk.lineTo(h.i, nA), uk.closePath(), uk.stroke())
	}
}

function cL() {
	var a5o, i, ew, a9p, a9q, a9r, canvas, yJ, a7H, a3d, a9s, a9t, a9u, a9v;
	this.eu = 0, this.j = 0, this.dd = function() {
		a9r = aD.a4X, a9t = "rgba(0,100,0,0.8)", a9u = "rgba(150,0,0,0.8)", a7H = a9s = !0, a3d = ag.gp[aD.eX], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .305 : .24) * h.hx), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5o = bA.qb.sQ(1, Math.floor(.8 * this.j)), a9q = bA.qb.sQ(1, Math.floor(.45 * this.j)), a9v = Math.floor(.5 * this.j), bS.wc
			.font = a5o, ew = bc.gap, a9p = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, yJ = canvas.getContext("2d", {
				alpha: !0
			}), bA.qb.textBaseline(yJ, 1), bA.qb.textAlign(yJ, 1), this.a9w()
	}, this.a7k = function() {
		return a0.a1.hw() && h.i < 1.2 * h.j
	}, this.a8P = function() {
		this.a7k() ? this.eu = h.i - i - bc.gap : this.eu = Math.floor(aV.a9x() + (h.i - aV.a9x() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mV = function() {
		a7H && (a7H = !1, this.a9w())
	}, this.a9w = function() {
		yJ.font = a5o, yJ.clearRect(0, 0, i, this.j), yJ.fillStyle = a9s ? a9t : a9u, yJ.fillRect(0, 0, i, this.j), yJ.fillStyle = bB.nl;
		var f8 = this.a9y(),
			aA0 = (this.a9z(), yJ.fillStyle = ag.gp[aD.eX] >= ae.jq(aD.eX) ? bB.oG : bB.nj, bA.ra.zQ(a3d)),
			aA0 = (yJ.fillText(aA0, Math.floor(i / 2), a9v), yJ.measureText(aA0).width),
			f8 = (yJ.font = a9q, yJ.fillStyle = 9 === f8 ? bB.op : bB.nj, ae.aA2),
			aA3 = "+" + f8,
			sy = yJ.measureText(aA3).width,
			aA4 = Math.floor(this.j / 12),
			aA0 = .5 * (i + aA0) + aA4;
		(aA0 + sy + a9p <= i || 1e3 <= f8 && (aA3 = "+" + Math.floor(f8 / 1e3) + "K", aA0 + (sy = yJ.measureText(aA3).width) + a9p <= i)) && yJ.fillText(aA3, Math.floor(aA0 + .5 * sy), Math.floor(.3 * this.j)), yJ.fillStyle = bB.nj, yJ.fillRect(
			0, 0, i, 1), yJ.fillRect(0, 0, 1, this.j), yJ.fillRect(0, this.j - 1, i, 1), yJ.fillRect(i - 1, 0, 1, this.j)
	}, this.a9y = function() {
		var f8 = bf.k7() % 100,
			xH = (f8 = 9 - bL.du(f8 -= f8 % 10, 10), Math.floor(f8 * (this.j - a9p) / 9));
		return yJ.fillRect(0, xH, a9p, this.j - xH), yJ.fillRect(i - a9p, xH, a9p, this.j - xH), f8
	}, this.a9z = function() {
		yJ.fillRect(a9p, this.j - a9p, Math.floor((i - 2 * a9p) * ag.gp[aD.eX] / a9r), a9p)
	}, this.j3 = function() {
		var gL = aD.eX;
		bA.g9.gz(gL) && (gL = ag.gp[gL] - ag.a3c[gL], a3d !== gL ? (a9r = a6O(gL, a9r), a9s = a3d < gL && 10 <= gL, a3d = gL, a7H = !0) : bf.k7() % 10 == 9 && (a7H = !0))
	}, this.uj = function() {
		0 === ag.mj[aD.eX] || aD.hB || 2 === ag.a3T[aD.eX] || uk.drawImage(canvas, this.eu, ew)
	}
}

function cM() {
	var aA5, aA6, aA7, aA8, aA9, aAA, aAB, aAC, aAD, aAE, aAF, aAG, aAH, aAI, aAJ, aAK, aAL, aAM, aAN, aAO, aAP, aAQ, position, aAR, aAS, aAT, aAU, aAV = 1,
		aAW = 1,
		aAX = "";
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

	function aAZ() {
		aAB.clearRect(0, 0, aA5, a7z),
			aAB.fillStyle = bB.oZ,
			aAB.fillRect(0, 0, aA5, aAG),
			aAB.fillStyle = bB.nf,
			aAB.fillRect(0, aAG, aA5, a7z - aAG);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jv[aD.eX]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aAQ = -1;
		if (__fx.leaderboardFilter.enabled && aAQ >= __fx.leaderboardFilter.filteredLeaderboard.length) aAQ = -1;
		playerPos >= position && aAb(playerPos - position, bB.o8),
			0 !== jv[aD.eX] && 0 === position && aAb(0, bB.og),
			-1 !== aAQ && aAb(aAQ, bB.nk),
			aAB.fillStyle = bB.nf,
			//console.log("drawing", aAQ),
			aAB.clearRect(0, a7z - __fx.leaderboardFilter.tabBarOffset, aA5, __fx.leaderboardFilter.tabBarOffset);
		aAB.fillRect(0, a7z - __fx.leaderboardFilter.tabBarOffset, aA5, __fx.leaderboardFilter.tabBarOffset);
		aAB.fillStyle = bB.nj,
			aAB.fillRect(0, aAG, aA5, 1),
			aAB.fillRect(0, a7z - __fx.leaderboardFilter.tabBarOffset, aA5, 1),
			__fx.leaderboardFilter.drawTabs(aAB, aA5, a7z - __fx.leaderboardFilter.tabBarOffset, bB.o8),
			aAB.fillRect(0, 0, aA5, bc.z7),
			aAB.fillRect(0, 0, bc.z7, a7z),
			aAB.fillRect(aA5 - bc.z7, 0, bc.z7, a7z),
			aAB.fillRect(0, a7z - bc.z7, aA5, bc.z7), aAB.font = aA6, bA.qb.textBaseline(aAB, 1), bA.qb.textAlign(aAB, 1), aAB.fillText(aAX, Math.floor((aA5 + aAG - 22) / 2), Math.floor(aAE + aA7 / 2));
		__fx.playerList.drawButton(aAB, 12, 12, aAG - 22);
		var f6, gM = playerPos < position + aA9 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aA9)
				position = (result.length > aA9 ? result.length : aA9) - aA9;
			//if (position >= result.length) position = result.length - 1;
			for (aAB.font = aA8, bA.qb.textAlign(aAB, 0), f6 = aA9 - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAc(ll[pos]), aAd(f6, pos, ll[pos]);
			}
			for (bA.qb.textAlign(aAB, 2), f6 = aA9 - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAc(ll[pos]), aAe(f6, ll[pos]);
			}
		} else {
			for (aAB.font = aA8, bA.qb.textAlign(aAB, 0), f6 = aA9 - gM; 0 <= f6; f6--)
				aAc(ll[f6 + position]), aAd(f6, f6 + position, ll[f6 + position]);
			for (bA.qb.textAlign(aAB, 2), f6 = aA9 - gM; 0 <= f6; f6--)
				aAc(ll[f6 + position]), aAe(f6, ll[f6 + position]);
		}
		2 == gM && (aAc(aD.eX), bA.qb.textAlign(aAB, 0), aAd(aA9 - 1, jv[aD.eX], aD.eX), bA.qb.textAlign(aAB, 2), aAe(aA9 - 1, aD.eX)), 0 === position && (gM = .7 * aAH / ab.get(4).height, aAB.setTransform(gM, 0, 0, gM, Math.floor(aAI + .58 * aAH +
			.5 * gM * ab.get(4).width), Math.floor(aAE + aA7 + .4 * aAH)), aAB.imageSmoothingEnabled = !0, aAB.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aAB.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAc(player) {
		aD.hh && (aAB.fillStyle = bg.aAg[bg.aAh[player]])
	}

	function aAb(aB, aAi) {
		aAB.fillStyle = aAi, aB = aA9 - 1 < aB ? aA9 - 1 : aB;
		aAi = Math.floor((aB === aA9 - 1 ? 2 : 0 === aB ? 1.15 : 1) * aAH), aAi = aB === aA9 - 2 ? Math.floor(aAG + 9.15 * aAH) - Math.floor(aAG + 8.15 * aAH) : aAi;
		aAB.fillRect(0, Math.floor(aAG + (aB + (0 === aB ? 0 : .15)) * aAH), aA5, aAi)
	}

	function aAd(aAk, a3r, aB) {
		aAB.fillText(aAM[a3r], aAI, Math.floor(aAE + aA7 + (aAk + .5) * aAH)), 1 === ag.a3T[aB] && (aAB.font = "italic " + aA8);
		a3r = Math.floor(aAE + aA7 + (aAk + .5) * aAH);
		aAB.fillText(ag.yc[aB], aAJ, a3r), 0 !== ag.a3T[aB] && (aAB.font = aA8), aB < aD.kA && 2 !== ag.a3T[aB] || aAB.fillRect(aAJ, a3r + .35 * aAV, aAL[aB], Math.max(1, .1 * aAV))
	}

	function aAe(aAk, aB) {
		aAB.fillText(ag.gb[aB], aAK, Math.floor(aAE + aA7 + (aAk + .5) * aAH))
	}

	function aAt(ew) {
		return (ew -= bc.gap + aAG) < 0 ? Math.floor(ew / aAH) - 1 : ew < (aA9 - 1) * aAH ? Math.floor(ew / aAH) : ew < a7z - aAG ? aA9 - 1 : (ew -= a7z - aAG, aA9 + Math.floor(ew / aAH))
	}

	function z6(eu, ew) {
		return eu >= bc.gap && eu < bc.gap + aA5 && ew >= bc.gap && ew < bc.gap + a7z
	}
	this.dd = function() {
			var aB;
			for (aAS = !1, aAU = aAT = aAR = 0, aAQ = -1, aA9 = a0.a1.hw() ? 6 : 10, aAW = (position = 0) === (aAW = bj.eK.data[11].value) ? 10 : 1 === aAW ? 5 : 1, aAP = !1, aAN = new Uint16Array(aA9 + 1), aAO = new Uint32Array(aA9 + 1), aAD = aD
				.ek, ll = new Uint16Array(aAD), jv = new Uint16Array(aAD), aB = aAD - 1; 0 <= aB; aB--) ll[aB] = aB, jv[aB] = aB;
			this.resize(!0), aAL = new Uint16Array(aD.ek);
			var aAY = Math.floor(aA5 - aAJ - aAI - aAC);
			for (aAM = new Array(aD.ek), aAB.font = aA8, aB = aD.ek - 1; 0 <= aB; aB--) aAM[aB] = aB + 1 + ".", ag.yc[aB] = bA.yJ.a39(ag.a0n[aB], aA8, aAY), aAL[aB] = Math.floor(aAB.measureText(ag.yc[aB]).width);
			aAZ()
		}, this.resize = function(dd) {
			if (a7z = a0.a1.hw() ? (aA5 = Math.floor(.335 * h.hx), Math.floor(aA9 * aA5 / 8)) : (aA5 = Math.floor(.27 * h.hx), Math.floor(aA9 * aA5 / 10)), aA5 = Math.floor(.97 * aA5), (aAA = document.createElement("canvas")).width = aA5, aAA
				.height = a7z, aAB = aAA.getContext("2d", {
					alpha: !0
				}), aAE = .025 * aA5, aA7 = .16 * aA5, aAF = 0 * aA5, aAG = Math.floor(.45 * aAE + aA7), aAH = (a7z - aA7 - 2 * aAE - aAF) / aA9,
				aAA.height = a7z += aAH, __fx.leaderboardFilter.tabBarOffset = Math.floor(aAH * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7z - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aA5,
				aA6 = bA.qb.sQ(1, Math.floor(.55 * aA7)), aAV = Math.floor((a0.a1.hw() ? .67 : .72) * aAH), aA8 = bA.qb.sQ(0, aAV), aAB.font = aA8, aAI = Math.floor(.04 * aA5), aAJ = Math.floor((a0.a1.hw() ? .195 : .18) * aA5), aAC = Math.floor(aAB
					.measureText("00920600").width), aAB.font = aA6, aAK = aA5 - aAI, !dd) {
				aAB.font = aA8;
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aAL[aB] = Math.floor(aAB.measureText(ag.yc[aB]).width);
				aAZ()
			}
			aAX = bA.yJ.a39(L(109), aA6, .96 * aA5)
		}, this.a9x = function() {
			return aA5
		}, this.mV = function(bu, aAa) {
			(aAa || aAP && (bu || bf.k7() % aAW == 0)) && (aAP = !1, aAZ())
		}, this.j3 = function() {
			! function() {
				for (var f6 = aAD - 1; 0 <= f6; f6--) 0 === ag.mj[ll[f6]] && ! function(f6) {
					var aAr = ll[f6];
					aAD--;
					for (var aB = f6; aB < aAD; aB++) ll[aB] = ll[aB + 1], jv[ll[aB]] = aB;
					ll[aAD] = aAr, jv[ll[aAD]] = aAD
				}(f6)
			}();
			for (var aAp, nR = aAD - 1, f6 = 0; f6 < nR; f6++) ag.gb[ll[f6]] < ag.gb[ll[f6 + 1]] && (aAp = ll[f6], ll[f6] = ll[f6 + 1], ll[f6 + 1] = aAp, jv[ll[f6]] = f6, jv[ll[f6 + 1]] = f6 + 1);
			! function() {
				for (var dt = aAP, gM = (aAP = !0, jv[aD.eX] >= aA9 - 1 ? aA9 - 2 : aA9 - 1), aB = gM; 0 <= aB; aB--)
					if (aAN[aB] !== ll[aB] || aAO[aB] !== ag.gb[ll[aB]]) return;
				(gM != aA9 - 2 || aAN[aA9] === jv[aD.eX] && aAO[aA9] === ag.gb[aD.eX]) && (aAP = dt)
			}();
			for (var aB = aA9 - 1; 0 <= aB; aB--) aAN[aB] = ll[aB], aAO[aB] = ag.gb[ll[aB]];
			aAN[aA9] = jv[aD.eX], aAO[aA9] = ag.gb[aD.eX];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.h0 = function(eu, ew) {
			return !!z6(eu, ew) && ((__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, aAG - 22, aAG - 22) && __fx.playerList.display(ag.a0n), true) &&
				!(ew - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eu - bc.gap)) && (aAR = bf.eM, aAS = !0, aAT = aAU = aAt(ew), bJ.a2G() && (eu = a8m(-1, aAU, aA9), aAQ !== (eu = eu === aA9 ?
					-1 : eu)) && (aAQ = eu, aAZ(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAZ(), bf.dl = !0;
		},
		this.a1d = function(eu, ew) {
			if (__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, aAG - 22, aAG - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAZ(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAZ(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eu, ew, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eu - bc.gap
				)) return;
			var dt, aAs = aAt(ew);
			return aAS ? (dt = position, (position = a8m(0, position += aAT - aAs, aD.ek - aA9)) !== dt && (aAs = (aAs = a8m(-1, aAT = aAs, aA9)) !== aA9 && z6(eu, ew) ? aAs : -1, aAQ = aAs, aAZ(), bf.dl = !0), !0) : (aAs = (aAs = a8m(-1, aAs,
				aA9)) === aA9 || !z6(eu, ew) || bJ.a2G() ? -1 : aAs, aAQ !== aAs && (aAQ = aAs, aAZ(), bf.dl = !0))
		}, this.a22 = function(eu, ew) {
			if (!aAS) return !1;
			aAS = !1;
			var aAs = aAt(ew);
			var isEmptySpace = false;
			return bJ.a2G() && -1 !== aAQ && (aAQ = -1, aAZ(), bf.dl = !0), bf.eM - aAR < 350 && aAU === aAs && -1 !== (aAs = (aAs = a8m(-1, aAs, aA9)) !== aA9 && z6(eu, ew) ? aAs : -1) && (eu = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					ll[__fx.leaderboardFilter.filteredLeaderboard[aAs + position] ?? (isEmptySpace = true, jv[aD.eX])]) : ll[aAs + position]), aAs === aA9 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jv[aD.eX]) >=
				position + aA9 - 1 && (eu = aD.eX), !isEmptySpace && aD.hh && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eu, ag.a0n, aD.kU), 0 !== ag.mj[eu] && !isEmptySpace) && aH.n4(eu, 800, !1, 0), !0
		}, this.a1g = function(eu, ew, deltaY) {
			var aAu;
			return !(aAS || aD.nC || (aAu = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !z6(eu, ew)) || (eu = (eu = a8m(-1, aAt(ew), aA9)) === aA9 || bJ.a2G() ? -1 : eu, 0 < deltaY ? position < aD.ek - aA9 && (position += Math.min(aD.ek - aA9 -
				position, aAu), aAQ = eu, aAZ(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aAu), aAQ = eu, aAZ(), bf.dl = !0), 0))
		}, this.uj = function() {
			uk.drawImage(aAA, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, yJ, eu, ew, a9h, aAv, gap, aAw, fontSize, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB5;

	function aB9() {
		yJ.clearRect(0, 0, aW.i, aW.j), yJ.fillStyle = bB.ng, yJ.fillRect(0, 0, aW.i, aW.j), yJ.fillStyle = bB.o3, eR = 0 < aB3 ? aB3 : Math.sqrt(aB0[4] / 1e4), yJ.fillRect(0, aW.j - a9h - 1, Math.floor(eR * aW.i), a9h), yJ.fillStyle = bB.nj, yJ
			.fillRect(0, 0, aW.i, 1), yJ.fillRect(0, 0, 1, aW.j), yJ.fillRect(aW.i - 1, 0, 1, aW.j), yJ.fillRect(0, aW.j - 1, aW.i, 1), yJ.fillRect(0, aW.j - a9h - 1, aW.i, 1);
		for (var eR, aBB, dt = 0, aB = 0; aB < aAz.length; aB++) aB1[aB] ? (bA.qb.textAlign(yJ, 0), aBB = Math.floor((aAv - a9h + 2 * aAw) * (aB - dt + 1) / (aAz.length + 1) - .7 * aAw), yJ.fillText(aAz[aB], gap, aBB), bA.qb.textAlign(yJ, 2), 5 ===
			aB && 0 !== ag.mj[aD.eX] && ag.gp[aD.eX] >= ae.jq(aD.eX) ? (yJ.fillStyle = bB.od, yJ.fillText(aB7(aB), aW.i - gap, aBB), yJ.fillStyle = bB.nj) : yJ.fillText(aB7(aB), aW.i - gap, aBB)) : dt++
	}

	function aB7(aB) {
		return aB < 3 ? aB0[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.ra.a4B(aB0[aB] / 100, 2) : aB < 7 ? bA.ra.zQ(aB0[aB]) : aB === 7 ? aW.aBC(aB0[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gb, aD.eX) : __fx.utils.getDensity(aD.eX)
	}

	function aB6() {
		ag.gb[aD.eX] !== aB0[6] && (aB0[6] = ag.gb[aD.eX], aAx++)
	}
	this.dd = function() {
		aB3 = aB4 = 0, (aAy = new Array(8))[0] = L(110), aAy[1] = aD.kU ? L(111) : L(112), aAy[2] = L(113), aAy[3] = L(114), aAy[4] = L(115), aAy[5] = L(116, 0, "Interest"), aAy[6] = L(117), aAy[7] = L(118),
			aAy.push("Max Troops", "Density"), // add aAy
			(aAz = new Array(aAy.length)).fill(""), (aB0 = new Array(aAy.length))[0] = aD.kU ? 0 : aD.kA, aB0[1] = aD.kU ? al.kg : aD.kW, aB0[2] = aD.a0B, aB0[3] = 0, aB0[4] = bL.du(1e4 * ag.gb[0], Math.max(aD.ju, 1)), aB0[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.eX], 64), aB0[6] = 0, aB6(), aB0[7] = 0, aB2 = aB7(6), (aB1 = new Array(aAy.length)).fill(!0), aB5 = 0, aB5 =
			aD.kU ? (aB1[0] = !1, aB1[2] = !1, aB1[3] = !1, 3) : (aB1[3] = !1, 1), aAx = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hw() ? .1646 : .126) * 1.25 * h.hx), this.j = Math.floor(1.18 * this.i), a9h = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAw = .04 * this.i, aAv = this.j, this.j -= Math.floor(aB5 * (this.j -
			2 * a9h) / aAy.length), fontSize = Math.floor(.7 * (aAv - a9h) / aAy.length);
		var a5o = bA.qb.sQ(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5o, i) {
				for (var aB = 0; aB < aAz.length; aB++) aAz[aB] = bA.yJ.a39(aAy[aB], a5o, i)
			}((yJ = canvas.getContext("2d", {
				alpha: !0
			})).font = a5o, .575 * this.i), bA.qb.textBaseline(yJ, 1), yJ.lineWidth = 1, this.a4Q(), this.a8P(), aU.a8P(), aB9()
	}, this.a8P = function() {
		eu = h.i - this.i - bc.gap
	}, this.aBA = function() {
		ew = bc.gap
	}, this.a4Q = function() {
		ew = bc.gap + (aU.a7k() && 0 !== ag.mj[aD.eX] && !aD.hB ? aU.j + bc.gap : 0)
	}, this.mV = function(bu) {
		(bu || 100 <= aAx) && (aAx = 0, aB9())
	}, this.a59 = function() {
		return aB0[7]
	}, this.aBC = function(value) {
		var l5 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l5) / 1e3);
		return value < 10 ? l5 + ":0" + value : l5 + ":" + value
	}, this.j3 = function() {
		var aBN, per;
		aB1[0] && aD.a0C - aD.a0B !== aB0[0] && (aB0[0] = aD.a0C - aD.a0B, aAx++), al.kg - aB0[0] !== aB0[1] && (aB0[1] = al.kg - aB0[0], aAx++), this.mN(), (aBN = ae.aBO(aD.eX)) !== aB0[5] && (aB0[5] = aBN, aAx++), aB6(), aB0[7] += bf.aBP, aBN =
			aB7(7), aB2 !== aBN && (aB2 = aBN, aAx += 100), aBN = aD.hh ? bh.kh() : ag.gb[ll[0]], per = bL.du(1e4 * aBN, Math.max(aD.ju, 1)), aB0[3] = aBN, aB0[4] !== per && (aAx++, aB0[4] = per), 8 === aD.kS && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.g9.gz(aB)) return bR.zl.a08(), 1;
				return
			}() || aB0[3] < aD.ju || ! function() {
				for (var aB = al.kg - 1; 0 <= aB; aB--)
					if (0 < ag.gF[al.kl[aB]].length) return;
				return 1
			}() || bN.kz.aBM().length || bR.zl.a08()
	}, this.mN = function() {
		aB1[2] && aD.a0B !== aB0[2] && (aB0[2] = aD.a0B, aAx += 2 === aD.a09 ? 100 : 1)
	}, this.aBJ = function() {
		return aB0[3] === aD.ju
	}, this.aBQ = function(aB) {
		var tE, aBR, dt;
		return 2 !== aD.a09 && (aB % 2 == 1 && (aV.mV(1, 1), bf.dl = !0), aB === aD.a4Z ? (aB3 = 0, aB9(), !1) : (-1 !== aB || 0 !== aB4) && (aBR = aB3, aB3 = aD.gw ? aB / aD.a4Z : (dt = performance.now(), 0 <= aB && (tE = dt - 392 * aB, aB4 =
			0 === aB || tE < aB4 ? tE : aB4), 1 < (aB3 = (dt - aB4) / (392 * aD.a4Z)) ? 1 : aB3), aB9(), aB3 !== aBR))
	}, this.uj = function() {
		uk.drawImage(canvas, eu, ew)
	}
}

function cO() {
	var hZ, aBS, i, j, a8V, aBT, aBU, a7l, canvas, mw, aBV;

	function yF() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aBV = hZ = !1, a8V = .61, aBT = .07, aBU = .09, mw = a7l = j = 0
	}, this.resize = function() {
		var yJ, n9, f8, aBa, aBb, a5t;
		hZ && (i = aBW(i = a0.a1.hw() ? Math.floor(.69 * h.hx) : Math.floor(.5 * h.hx), a6O(h.i - 2 * bc.gap, 10)), i = aBW(i, Math.floor(3.57 * a6O(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, yJ = canvas.getContext("2d", {
				alpha: !0
			}), n9 = Math.floor(1 + j / 40), yJ.clearRect(0, 0, i, j), yJ.fillStyle = bB.ng, yJ.fillRect(n9, n9, i - 2 * n9, j - 2 * n9), yJ.lineJoin = "bevel", yJ.lineWidth = 2 * n9, yJ.strokeStyle = bB.nj, yJ.strokeRect(n9, n9, i - 2 * n9,
				j - 2 * n9), yJ.imageSmoothingEnabled = !1, f8 = ab.get(aBS), aBa = f8.width, a5t = (1 === aBS ? .85 : 21 === aBS ? .666 : .9) * a8V * j / (aBb = f8.height), yJ.setTransform(a5t, 0, 0, a5t, Math.floor((i - a5t * aBa) / 2),
				Math.floor((j - a5t * aBb) / 2)), yJ.drawImage(f8, 0, 0), yJ.setTransform(1, 0, 0, 1, Math.floor(i - aBU * j - aBT * j - n9), Math.floor(n9 + aBT * j)),
			function(yJ, en) {
				yJ.lineWidth = Math.floor(1 + j / 80), yJ.strokeStyle = bB.nj, yJ.beginPath(), yJ.moveTo(0, 0), yJ.lineTo(en, en), yJ.moveTo(0, en), yJ.lineTo(en, 0), yJ.stroke()
			}(yJ, Math.floor(aBU * j)), yJ.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fF, aBY, a8G, aBZ) {
		hZ || aBZ && aBV || (aBS = a8G ? 21 : fF ? 1 : 2, hZ = aBV = !0, this.resize(), aL.rs(), aR.a8B(), mw = bf.eM, a7l = aBY ? 1 : 0)
	}, this.j3 = function() {
		!hZ || 1 <= a7l || (a7l = 1 < (a7l += 5e-4 * (bf.eM - mw)) ? 1 : a7l, mw = bf.eM, bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		return !(!hZ || a7l <= 0 || (eu -= Math.floor((h.i - i) / 2), ew -= yF(), eu < 0) || ew < 0 || i < eu || j < ew || (i - j / 3 < eu && ew < j / 3 && (hZ = !1, bf.dl = !0), 0))
	}, this.uj = function() {
		!hZ || a7l <= 0 || (uk.globalAlpha = a7l, uk.drawImage(canvas, Math.floor((h.i - i) / 2), yF()), uk.globalAlpha = 1)
	}
}

function dN() {
	var aBd, aBe = new Uint8Array(5),
		aBf = new Uint8Array(5);
	this.aBg = new aBh, this.dd = function() {
		for (var fF = bj.eK.data[119].value, aB = 0; aB < aBe.length; aB++) aBe[aB] = (fF >> 2 * aB) % 4
	}, this.a4l = function() {
		aBd = [L(119), "", L(120, [bX.aBi[28]]), L(121, [bX.aBi[26]]), L(122, [bX.aBi[0]])], this.aBg.dd()
	}, this.j3 = function() {
		this.aBg.j3()
	}, this.a5X = function(id) {
		1 < id && bJ.r3() || ! function(e8) {
			if (3 === aBe[e8] || 1 === aBf[e8]) return;
			if (aBf[e8] = 1, !(Math.random() < .6)) {
				aBe[e8]++;
				for (var fF = 0, aB = 0; aB < aBe.length; aB++) fF += aBe[aB] << 2 * aB;
				bj.s3.s4(119, fF)
			}
			return 1
		}(id) || aN.a6U(aBd[id])
	}
}

function aBh() {
	var aBk;
	this.dd = function() {
		aBk = !1
	}, this.j3 = function() {
		var gL;
		if (function() {
				if (!aBk) {
					if (bf.k7() % 30 != 9) return;
					if (!bA.g9.lh(90)) return;
					aBk = !0
				}
				return 1
			}() && (! function() {
				var qT = aN.a6q(956);
				if (qT) {
					if (bA.g9.l8(qT.player)) return 1;
					aN.a6p(956, 0)
				}
				return
			}() && (-1 === (gL = (aD.hh ? function() {
				var id = bh.kj(),
					en = al.kg;
				if (bg.kX[id])
					for (var zx = al.kl, el = bg.el, aB = 0; aB < en; aB++) {
						var gL = zx[aB];
						if (el[gL] !== id) return gL
					} else if (1 < en) return ll[en - 1];
				return -1
			} : function() {
				for (var aBs = al.kg, l4 = al.kl, aBt = jv, aB = 0; aB < aBs; aB++) {
					var gL = l4[aB];
					if (0 !== aBt[gL]) return gL
				}
				return -1
			})()) ? ! function() {
				var qT = aN.a6q(957);
				if (qT && qT.a6K) {
					if (ac.ee(qT.a6K.eZ << 2)) return 1;
					aN.a6p(957, 0)
				}
				return
			}() : (aN.yb(0, L(123, [ag.yc[gL]]), 956, gL, bB.nj, bB.ng, -1, !0), 0)))) {
			var en = ao.il.lK;
			if (0 !== en)
				for (var eK = ao.il.eK, aB = 0; aB < en; aB++) {
					var eZ = eK[aB];
					if (ac.ee(eZ << 2)) return void aN.yb(0, L(124, [bM.ev(eZ), bM.ex(eZ)]), 957, 0, bB.nj, bB.ng, -1, !0, void 0, {
						f6: 1,
						eZ: eZ
					})
				}
		}
	}
}

function dO() {
	this.aBu = new aBv, this.dd = function() {
		this.aBu.resize()
	}
}

function aBv() {
	this.resize = function() {
		var aB, aBw = document.head.querySelector("style#ss");
		if (aBw)
			for (aB = aBw.sheet.cssRules.length - 1; 0 <= aB; aB--) aBw.sheet.deleteRule(0);
		else(aBw = document.createElement("style")).id = "ss", document.head.appendChild(aBw);
		var a8d = "::-webkit-scrollbar",
			aBx = bA.qb.qk(bc.sS),
			hj = bA.qb.qk(Math.max(bA.qb.ru(.012), 8));
		try {
			aBw.sheet.insertRule(a8d + "{width:" + hj + ";height:" + hj + ";}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d + "-thumb{background-color:white;}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d +
				"-track{background:" + bB.nf + ";}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d + "-track:horizontal{border-top:" + aBx + " solid white;}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d +
				"-track:vertical{border-left:" + aBx + " solid white;}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d + "-button{display:none;}", aBw.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBw.sheet.cssRules.length - 1; 0 <= aB; aB--) aBw.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aBy = !1, this.nZ = !1, this.a4U = !1, this.aBz = [0, 0, 0, 0], this.aC0 = function() {
		var n9, nA, nM, nN;
		this.a4U = this.a4U || this.nZ, (this.nZ || this.aBy && this.a4U) && (n9 = ba.aC1[0], nA = ba.aC1[1], nM = ba.aC1[2], nN = ba.aC1[3], n9 = n9 < this.aBz[0] ? this.aBz[0] : n9, nA = nA < this.aBz[1] ? this.aBz[1] : nA, nM = nM > this.aBz[
				2] ? this.aBz[2] : nM, nN = nN > this.aBz[3] ? this.aBz[3] : nN, this.nZ = !1, this.aBy = !1, n9 === this.aBz[0] && nA === this.aBz[1] && nM === this.aBz[2] && nN === this.aBz[3] ? this.a4V() : n9 <= nM && nA <= nN && a4n
			.putImageData(a4o, 0, 0, n9, nA, nM - n9 + 1, nN - nA + 1))
	}, this.a4V = function() {
		this.a4U && this.aBz[2] >= this.aBz[0] && this.aBz[3] >= this.aBz[1] && a4n.putImageData(a4o, 0, 0, this.aBz[0], this.aBz[1], this.aBz[2] - this.aBz[0] + 1, this.aBz[3] - this.aBz[1] + 1), this.a4U = !1
	}, this.a0K = function() {
		this.aBz[2] >= this.aBz[0] && this.aBz[3] >= this.aBz[1] && a4n.putImageData(a4o, 0, 0, this.aBz[0], this.aBz[1], this.aBz[2] - this.aBz[0] + 1, this.aBz[3] - this.aBz[1] + 1), this.a4U = !1
	}, this.dd = function() {
		var eu, ew;
		this.aBy = !1, this.nZ = !1, this.a4U = !1, this.aBz[0] = bS.ey, this.aBz[1] = bS.ez, this.aBz[2] = this.aBz[3] = 0;
		loop: for (eu = 1; eu < bS.ey - 1; eu++)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aC2[ac.xm(eu, ew) + 2]) {
					this.aBz[0] = eu;
					break loop
				} loop: for (ew = 1; ew < bS.ez - 1; ew++)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aC2[ac.xm(eu, ew) + 2]) {
					this.aBz[1] = ew;
					break loop
				} loop: for (eu = bS.ey - 2; 0 < eu; eu--)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aC2[ac.xm(eu, ew) + 2]) {
					this.aBz[2] = eu;
					break loop
				} loop: for (ew = bS.ez - 2; 0 < ew; ew--)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aC2[ac.xm(eu, ew) + 2]) {
					this.aBz[3] = ew;
					break loop
				}
	}
}

function L(value, aC3, vJ) {
	var qI = "number" == typeof value ? b7.aC4[value] : value;
	if (vJ && b7.aC5() && (qI = vJ), aC3)
		for (var en = aC3.length, aB = 0; aB < en; aB++)
			for (var f6 = 0; f6 < 3; f6++) qI = qI.replace("{" + (10 * f6 + aB) + "}", aC3[aB]);
	return qI
}

function c2() {
	this.data = new aC6;
	var aC7 = (new aC8).L84,
		aCA = (this.aC4 = aC7, !(this.aC9 = "en"));
	this.dd = function() {
		var qI, g;
		aCA = !1, ("en" === (qI = bj.eK.data[12].value).split("-")[0].toLowerCase() ? (b7.aC4 = aC7, b7.aC9 = qI, 1) : bj.eK.data[12].value === bj.eK.data[145].value && 0 < bj.eK.data[146].value && (qI = bj.eK.data[146].value, (g = bj.qs.vW(qI, !
			1)).length === qI) && !!bA.qj.a2m(g) && function(g) {
			for (var en = g.length, j = 0; j < en; j++) g[j] = g[j].replace("&#39;", "'");
			var aCG = bj.qs.vW(en, !0);
			if (en !== aCG.length) return !1;
			if (!bA.qj.a2m(aCG)) return !1;
			for (var l5 = aC7.length, a9Y = new Array(l5), aCH = l5 === en, gG = Math.min(en, l5), aB = 0; aB < l5; aB++)
				if (a9Y[aB] = aC7[aB], aB < en && aCG[aB] === a9Y[aB]) a9Y[aB] = g[aB];
				else {
					aCH = !1;
					for (var f7 = 0; f7 < gG; f7++)
						if (aCG[f7] === a9Y[aB]) {
							a9Y[aB] = g[f7];
							break
						}
				} return b7.aC4 = a9Y, b7.aC9 = bj.eK.data[12].value, aCH
		}(g)) || (aCA = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dy
	}, this.aC5 = function() {
		return this.aC4 === aC7 || !aC7.length
	}, this.aCI = function() {
		var aCJ;
		return !!aCA && (aCA = !1, 0 !== aC7.length) && (aCJ = bj.eK.data[12].value, b0.aCK.aCL(0, aCJ.slice(0, 20)), !0)
	}, this.aCM = function(g) {
		g.length !== aC7.length ? 8 === t.sq && t.a5A().aCN(30, 0, 1) : (this.aC4 = g, this.aC9 = bj.eK.data[12].value, bj.s3.s4(145, this.aC9), bj.s3.s4(146, g.length), bj.qs.vc(g, !1), bj.qs.vc(aC7, !0), 8 === t.sq ? t.a5A().aCN(30) : 0 === aa
			.a1K() && 5 === t.sq && t.y.aCO())
	}, this.aCP = function() {
		var aCQ, g = navigator.languages;
		return g && g.length ? (aCQ = Math.max(b7.data.aCR(g[0]), 0), 1 === g.length ? [aCQ, aCQ] : [aCQ, Math.max(b7.data.aCR(g[1]), 0)]) : [0, 0]
	}
}

function aC6() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aCS = function() {
		for (var aCT = [], g = this.g, en = g.length, aB = 0; aB < en; aB++) aCT.push(g[aB]);
		var aCU = bj.eK.data[12].vJ;
		for (aB = 0; aB < en; aB++)
			if (aCT[aB] === aCU) {
				aCT.splice(aB, 1), en--;
				break
			} aCT.sort(), en++, aCT.unshift(aCU);
		try {
			if ("undefined" == typeof Intl) return aCT;
			for (aB = 0; aB < en; aB++) {
				var qI = new Intl.DisplayNames([aCT[aB]], {
					type: "language"
				}).of(aCT[aB]);
				qI !== aCT[aB] && (aCT[aB] = aCT[aB] + ": " + qI)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aCT
	}, this.aCW = function(aCX) {
		for (var qI = bj.eK.data[12].value, en = aCX.length, aB = 0; aB < en; aB++)
			if (qI === aCX[aB].split(":")[0]) return aB;
		return 0
	}, this.aCR = function(aCY) {
		if (!aCY || aCY.length < 2) return 0;
		aCY = aCY.split("-")[0].toLowerCase();
		for (var g = this.g, en = g.length, aB = 0; aB < en; aB++)
			if (aCY === g[aB]) return aB;
		return -1
	}
}

function aC8() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}", "Team {0} won the game!",
		"You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️",
		"Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Next Contest: ", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.",
		"second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚨 Moderation Actions", "🚩 Report User", "💬 Mention", "Loading",
		"{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}",
		"Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings",
		"Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer",
		"My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index",
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search",
		"Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login",
		"The only official webpage is https://territorial.io", "If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}",
		"Gold to be Sent: {10}", "Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All",
		"📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn",
		"🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dj() {
	var eu, ew, j, tn, aCZ, aCa, aCb, aCc, aCd, i, a3O, aCe;
	this.hZ = !1, this.dd = function(qI, aCf) {
		if (1 === a0.id && 13 <= a0.dv && a0.dv < 18) return aCf ? void(a3O = qI) : a3O !== qI ? void 0 : void a0.vU.saveString(200, qI);
		aCf && (a3O = qI, (aCe = document.createElement("a")).appendChild(document.createTextNode(a3O)), this.hZ = !0, aCe.title = a3O, aCe.target = "_blank", aCe.href = a3O, aCe.style.textAlign = "center", aCe.style.color = bB.nj, aCe.style
			.position = "absolute", aCe.style.padding = "0px", aCe.style.margin = "0px", this.resize(), document.body.appendChild(aCe), bf.dl = !0)
	}, this.rs = function() {
		return !(!this.hZ || (t.removeChild(document.body, aCe), this.hZ = !1))
	}, this.h0 = function(i4, i5) {
		return !!this.hZ && ((i4 < eu || i5 < ew || eu + i < i4 || ew + j < i5 || eu + i - tn < i4 && i5 < ew + tn) && (bf.dl = !0, this.hZ = !1, t.removeChild(document.body, aCe)), !0)
	}, this.resize = function() {
		var a5o, aCg;
		this.hZ && (aCc = Math.floor(.8 * (a0.a1.hw() ? h.i > h.j ? .6 : .55 : .4) * h.hx), tn = Math.floor(.15 * aCc), aCZ = Math.floor(.35 * tn), aCa = Math.floor(.5 * tn), aCb = Math.floor(2.5 * aCa), j = tn + aCZ + 3 * aCa, a5o = bA.qb.sQ(1,
			aCZ / h.k), aCd = Math.floor(h.k * aQ.measureText(a3O, a5o)), aCg = i = (aCc < aCd ? aCd : aCc) + 2 * aCb, i = Math.min(i, h.i - 2 * (a0.a1.hw() ? 2 : 1) * bc.gap), a5o = bA.qb.sQ(1, i / aCg * aCZ / h.k), aCd = Math.floor(h
			.k * aQ.measureText(a3O, a5o)), eu = Math.floor((h.i - i) / 2), ew = Math.floor((h.j - j) / 2), aCe.style.font = a5o, aCe.style.top = Math.floor((ew + 1.4 * aCa + tn) / h.k) + "px", aCe.style.left = Math.floor((eu + (i -
			aCd) / 2) / h.k) + "px")
	}, this.uj = function() {
		this.hZ && (uk.fillStyle = bB.ng, uk.fillRect(eu, ew + tn, i, j - tn), uk.fillStyle = bB.oq, uk.fillRect(eu, ew, i, tn), uk.fillStyle = bB.nj, uk.lineWidth = bc.z7, uk.strokeStyle = bB.nj, uk.strokeRect(eu, ew, i, j), uk.fillRect(eu, ew +
			tn, i, bc.z7), uk.font = bA.qb.sQ(1, .48 * tn), bA.qb.textAlign(uk, 1), bA.qb.textBaseline(uk, 1), uk.fillText(L(125), Math.floor(eu + (i - .5 * tn) / 2), Math.floor(ew + .55 * tn)), aM.a5z(Math.floor(eu + i - .8 * tn), Math
			.floor(ew + .25 * tn), Math.floor(.5 * tn)), uk.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aAy, eu = [0, 0, 0, 0, 0],
		ew = [0, 0, 0, 0, 0],
		nL = [1, 1, 1, 1, 1],
		fF = [!0, !0, !0, !1, !1],
		f8 = (this.fa = [!0, !0, !0, !1, !1], null);
	this.aCh = function(a2x, aCi) {
		f8 = a2x, fF = aCi, aAy = [bK.aCj, bK.a1D, bK.aCk, bK.aCk, bK.aCl], this.dd()
	}, this.dd = function() {
		if (ab.tI()) {
			var aB, sx = Math.floor((a0.a1.hw() ? .261 : .195) * h.hx),
				sy = Math.floor(.9 * sx),
				a8V = Math.floor(.17 * sy);
			if (gap = a0.a1.hw() ? 2 * bc.gap : bc.gap, nL[0] = sx / f8[0].width, nL[1] = sy / f8[1].width, nL[2] = a8V / f8[2].height, nL[3] = a8V / f8[3].height, nL[4] = a8V / f8[4].height, nL[2] *= 1.7, nL[3] *= 1.07, eu[0] = gap, eu[1] = gap,
				eu[2] = gap, eu[3] = gap, eu[4] = Math.floor(2 * gap + nL[3] * f8[3].width), ew[0] = gap, ew[1] = ew[0] + gap + nL[0] * f8[0].height, ew[2] = ew[1] + gap + nL[1] * f8[1].height, ew[3] = ew[2] + gap + nL[2] * f8[2].height, ew[4] =
				ew[3], !fF[0])
				for (aB = 0; aB < 5; aB++) ew[aB] -= nL[0] * f8[0].height + gap;
			if (!fF[1])
				for (aB = 2; aB < 5; aB++) ew[aB] -= nL[1] * f8[1].height + gap
		}
	}, this.hZ = function() {
		return !(7 === aa.a1K() && a0.a1.hw())
	}, this.h0 = function(i4, i5) {
		if (f8 && this.hZ())
			for (var aB = fF.length - 1; 0 <= aB; aB--)
				if (fF[aB] && this.fa[aB] && eu[aB] < i4 && ew[aB] < i5 && i4 < eu[aB] + nL[aB] * f8[aB].width && i5 < ew[aB] + nL[aB] * f8[aB].height) return t.u(9, t.sq, new aCm(L(126), bA.qb.a3N(aAy[aB]))), !0;
		return !1
	}, this.uj = function() {
		if (f8 && this.hZ()) {
			var aB;
			for (uk.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fF[aB] && this.fa[aB] && (uk.setTransform(nL[aB], 0, 0, nL[aB], eu[aB], ew[aB]), uk.drawImage(f8[aB], 0, 0));
			uk.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aCn = 0, this.aCo = null, this.tw = null, this.kz = null, this.y = null, this.uJ = null, this.tu = null, this.message = null, this.aCp = null, this.rr = null, this.aCq = null, this.aCr = new aCs, this.a1H = 0, this.a9P = 0, this.dd =
		function() {
			this.a9P = bf.eM, this.aCn = bG.st.wO(bj.eK.data[105].value), this.tw = new aCt, this.kz = new aCu, this.y = new aCv, this.uJ = new aCw, this.tu = new aCx, this.message = new aCy, this.aCp = new aCz, this.rr = new aD0, this.aCq = new aD1,
				this.y.dd(), bp.dd(), this.a1H = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uD = function() {
			this.rr && this.rr.uD(), this.aCo = null, this.tw = null, this.kz = null, this.y = null, this.uJ = null, this.tu = null, this.message = null, this.aCp = null, this.rr = null, this.aCq = null, this.a1H = 0, bp.uD(), a0.a1.setState(0)
		}
}

function aCt() {
	function aDO(g, tA, tB) {
		var aDP = g[tA];
		g[tA] = g[tB], g[tB] = aDP
	}
	this.tx = [
		[],
		[],
		[],
		[]
	], this.ty = [0, 0, 0, 0], this.aD2 = [], this.aD3 = function(aD4, so, username, u3, a3r, aD5, elo, color, vw, aD6) {
		username = this.aD8(so, username, u3, a3r, aD5, elo, color, vw, aD6);
		this.tx[aD4].push(username), bn.aCn === so && (bn.aCo = username), bn.aCq.aD9(so) && (username.u5 = 1), bn.y.aDA += 29 === t.sq && bn.y.rf[0] === aD4 && 1 === bn.y.rf[2]
	}, this.aD8 = function(so, username, u3, a3r, aD5, elo, color, vw, aD6) {
		return {
			so: so,
			username: username,
			u3: u3,
			a3r: a3r,
			aD5: aD5,
			elo: elo,
			color: color,
			vw: vw,
			aD6: aD6
		}
	}, this.aDB = function(e8, aD4, u3, a3r, aD5, elo, vw) {
		e8 = this.tx[aD4][e8];
		e8.u3 = u3, e8.a3r = a3r, e8.aD5 = aD5, e8.elo = elo, e8.vw = vw, bn.y.aDA += 29 === t.sq && bn.y.rf[0] === aD4 && 1 === bn.y.rf[2]
	}, this.aDC = function(e8, aD4, aDD) {
		var e8 = this.tx[aD4][e8],
			aDE = e8.username,
			aDF = "Redacted " + bF.st.zQ(e8.so, 2);
		e8.username = aDD ? "[" + bA.ra.a0q(aDE) + "] " + aDF : aDF, aDE.indexOf("Redacted") < 0 && (e8.aDG = aDE, e8.aDH = 3), bn.y.aDA += 29 === t.sq && bn.y.rf[0] === aD4 && 1 === bn.y.rf[2]
	}, this.aDI = function(e8, aDJ, aDK) {
		var player = this.tx[aDJ][e8];
		this.aDL(e8, aDJ), this.tx[aDK].push(player), bn.y.aDA += 29 === t.sq && bn.y.rf[0] === aDK && 1 === bn.y.rf[2]
	}, this.aDL = function(e8, aDJ) {
		var tw = this.tx[aDJ];
		this.aD2.push(tw[e8]), 1e3 < this.aD2.length && this.aD2.shift(), e8 >= this.ty[aDJ] ? tw[e8] = tw[tw.length - 1] : (this.ty[aDJ]--, 2 === aDJ ? (tw.splice(this.ty[aDJ] + 1, 0, tw[tw.length - 1]), tw.splice(e8, 1)) : (tw[e8] = tw[this.ty[
			aDJ]], tw[this.ty[aDJ]] = tw[tw.length - 1])), tw.pop(), bn.y.aDA += 29 === t.sq && bn.y.rf[0] === aDJ && 1 === bn.y.rf[2]
	}, this.aDM = function(e8, re) {
		bn.y.aDA += 29 === t.sq && bn.y.rf[0] === re && 1 === bn.y.rf[2];
		var tw = this.tx[re],
			qT = tw[e8];
		if (2 === re)
			if (e8 >= this.ty[re]) {
				bn.aCq.join(qT);
				for (var aDN = this.ty[re], elo = qT.elo; aDN && elo > tw[aDN - 1].elo;) aDN--;
				tw[e8] = tw[this.ty[re]], tw.splice(this.ty[re]++, 1), tw.splice(aDN, 0, qT)
			} else tw.splice(this.ty[re]--, 0, qT), tw.splice(e8, 1);
		else e8 >= this.ty[re] ? (bn.aCq.join(qT), aDO(tw, this.ty[re]++, e8)) : aDO(tw, --this.ty[re], e8)
	}, this.aDQ = function(so) {
		for (var tx = this.tx, en = tx.length, aB = 0; aB < en; aB++)
			for (var tw = tx[aB], l5 = tw.length, f6 = 0; f6 < l5; f6++)
				if (so === tw[f6].so) return tw[f6];
		return null
	}
}

function aD1() {
	var aDR = [],
		aDS = [],
		aDT = 0;

	function aDU(g, a6s, aDY, aDZ) {
		var en = g.length;
		if (0 === en) return "";
		var qI = "@" + g[0];
		if (1 === en) return qI + a6s + aDZ;
		for (var aB = 1; aB < en - 1; aB++) qI += ", @" + g[aB];
		return qI + " and @" + g[en - 1] + aDY + aDZ
	}
	this.dd = function() {
		var qI = aDU(aDS, " is", " are", " in the lobby!");
		qI.length && bn.message.aDV({
			id: 7,
			r: qI
		}), aDR = [], aDS = [], aDT = 0
	}, this.aD9 = function(aDW) {
		return bn.aCn !== aDW && (aDW = bF.st.zQ(aDW, 5), !!bj.v9.u5(aDW)) && (aDS.push(aDW), !0)
	}, this.join = function(player) {
		bn.aCn !== player.so && (player = bF.st.zQ(player.so, 5), bj.v9.u5(player)) && aDR.push(player)
	}, this.aDX = function() {
		var a6s, aDY;
		++aDT < 3 || (aDT = 0, a6s = aDU(aDS, "", "", " entered the lobby!"), (a6s = (aDY = aDU(aDR, "", "", " joined a game!")).length ? a6s.length ? a6s + " " + aDY : aDY : a6s).length && bn.message.aDV({
			id: 7,
			r: a6s
		}), aDR = [], aDS = [])
	}
}

function aCs() {
	this.dm = function(e8) {
		if ((ty = bn.tw.ty[e8]) < 2) return !1;
		var rg = bn.y.rh[e8],
			aDa = 9 === rg.aDb ? 333 : 512,
			ty = Math.min(ty, aDa);
		8 === rg.aDb && (ty -= ty % 2);
		aDa = bn.tw.tx[e8].splice(0, ty), bn.tw.ty[e8] -= ty, ty = function(aDc) {
			if (bn.aCo)
				for (var en = aDc.length, so = bn.aCo.so, aB = 0; aB < en; aB++)
					if (aDc[aB].so === so) return aB;
			return -1
		}(aDa);
		return -1 === ty ? (bn.tw.aD2 = bn.tw.aD2.concat(aDa), 1e3 < bn.tw.aD2.length && bn.tw.aD2.splice(0, bn.tw.aD2.length - 1e3), bn.y.aDA += 29 === t.sq && bn.y.rf[0] === e8 && 1 === bn.y.rf[2], !1) : (8 === rg.aDb && (rg.aDf = (rg.aDf + (
			ty >> 1)) % 1024, e8 = ty - ty % 2, ty %= 2, aDa = aDa.slice(e8, 2 + e8)), ax.dd(rg, aDa, ty), !0)
	}, this.aDg = function(rg, aDc, aDd) {
		var eq = aD.data = new a4a,
			aDk = (eq.spawningSeed = rg.spawningSeed, rg.aDb < 7 ? (eq.gameMode = 1, eq.numberTeams = rg.aDb + 2) : 9 === rg.aDb ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === rg.aDb ?
				0 : 10 === rg.aDb ? 1 : 2), eq.selectedPlayer = aDd, eq.isContest = rg.aDh, eq.mapType = bS.aDi(rg.eT) ? 0 : 1, bS.aDj(eq, rg.eT), eq.mapSeed = rg.mapSeed, eq.humanCount = aDc.length);
		eq.selectableSpawn = 1 === eq.gameMode || aDk < 100, eq.colorsData = new Uint32Array(aDk), eq.playerNamesData = new Array(aDk);
		for (var aB = 0; aB < aDk; aB++) eq.colorsData[aB] = aDc[aB].color, eq.playerNamesData[aB] = aDc[aB].username;
		if (2 === eq.battleRoyaleMode)
			for (eq.elo = new Uint16Array(aDk), aB = 0; aB < aDk; aB++) eq.elo[aB] = aDc[aB].elo;
		aa.setState(8), bS.a7(rg.eT, eq.mapSeed), aD.a4f(), aD.a4d = 2
	}
}

function aCu() {
	var dz = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aDl = [bB.nx, bB.nx, bB.ny, bB.oR, bB.oS, bB.oE, bB.oX, bB.ny, bB.os, bB.oh, bB.ou],
		aDm = [
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
		aDn = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aE0(ri, so, aE2) {
		for (var f7 = ri.length - 1; 0 <= f7; f7--) {
			var qT = ri[f7];
			0 === qT.id && qT.so === so && (qT.r = "[Redacted Message]", aE2) && (qT.aE3 = 1)
		}
	}
	this.rn = function(aDo) {
		var aDp, a0r;
		return aDo.id < 5 && (aDp = "@" + bF.st.zQ(aDo.so, 5)), 0 === aDo.id ? aDp + ": " + aDo.r : 1 === aDo.id ? (a0r = "@" + bF.st.zQ(aDo.target, 5), 0 === aDo.aDq ? 32768 <= aDo.value ? aDp + " voted with " + (aDo.value - 32768 + 1) +
				" gold against " + a0r + " to weaken the latter's admin position. 📉" : aDp + " voted with " + (aDo.value + 1) + " gold for " + a0r + " to strengthen the latter's admin position. 💪" : 1 === aDo.aDq ? aDp + " sent " + Math.floor(
					aDo.value / 100) + " 🧈 gold to " + a0r + "." : aDp + " voted with " + (aDo.value / 10).toFixed(1) + " points for " + a0r + " to acknowledge the latter as clan leader. ✅") : 2 === aDo.id ? 0 === aDo.aDq ? aDp +
			" was 🔇 muted for 1 Hour." : 1 === aDo.aDq ? "The username of " + aDp + " was ✂️ redacted. Duration: 1 Day" : aDp + " 👢 was kicked." : 3 === aDo.id ? aDp + bo.eB(aDo.aDq, bo.e5[aDo.aDq][aDo.value]) + "@" + bF.st.zQ(aDo.target, 5) +
			bo.eD(aDo.aDq, bo.e5[aDo.aDq][aDo.value]) : 4 === aDo.id ? aDp + bo.eB(5, bo.e5[5][aDo.aDq]) + "@" + bF.st.zQ(aDo.target, 5) + bo.eD(5, bo.e5[5][aDo.aDq]) : 5 === aDo.id ? aDn[aDo.aDq] : 6 === aDo.id ? "You are about to mention " +
			aDo.value + " player" + (1 === aDo.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDo.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aDo.id ? aDo.r : void 0
	}, this.rm = function(aDo, a71) {
		return {
			aDo: aDo,
			r: a71,
			aDr: 0,
			fontSize: 1,
			rq: 0,
			aDs: aDo.id ? bB.oQ : bB.nj
		}
	}, this.u1 = function(player, re) {
		return (2 === re ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.u2 = function(u3) {
		return aDl[u3]
	}, this.aDt = function(u3, a3r) {
		return u3 < 3 || 7 === u3 ? aDm[u3][0] : 4 === u3 ? aDm[u3][a3r < 1 ? 0 : a3r < 10 ? 1 : 2] : aDm[u3][a3r < 10 ? 0 : 1]
	}, this.aDu = function(a3r) {
		return 0 === a3r
	}, this.aDQ = function(re, so) {
		for (var tx = bn.tw.tx, tw = tx[re], en = tw.length, aB = 0; aB < en; aB++)
			if (so === tw[aB].so) return tw[aB];
		for (var f7 = 0; f7 < tx.length; f7++)
			if (re !== f7)
				for (en = (tw = tx[f7]).length, aB = 0; aB < en; aB++)
					if (so === tw[aB].so) return tw[aB];
		return null
	}, this.u4 = function(qT) {
		return !!bn.aCo && qT.so === bn.aCo.so
	}, this.aDv = function(tw, aDw, aDx) {
		var a0o = [];
		loop: for (var aB = aDw; aB < aDx; aB++) {
			var a0p = bA.ra.a0q(tw[aB].username);
			if (a0p) {
				for (var f7 = a0o.length - 1; 0 <= f7; f7--)
					if (a0p === a0o[f7].name) {
						a0o[f7].gG++;
						continue loop
					} a0o.push({
					name: a0p,
					gG: 1
				})
			}
		}
		if (a0o.sort(function(f6, f7) {
				return f7.gG - f6.gG
			}), 0 === a0o.length) return "";
		for (var qI = a0o[0].name + ": " + a0o[0].gG, aB = 1; aB < a0o.length; aB++) qI += "   " + a0o[aB].name + ": " + a0o[aB].gG;
		return qI
	}, this.aDy = function(u3, a3r, aD5) {
		return 0 === dz[u3].length ? "Rank: " + (a3r + 1) : dz[u3] + " Rank: " + (a3r + 1) + (3 !== u3 && aD5 < 100 ? "   " + dz[3] + " Rank: " + (aD5 + 1) : "")
	}, this.aDz = function(so) {
		for (var rh = bn.y.rh, aB = 0; aB < rh.length; aB++) aE0(rh[aB].ri, so);
		aE0(bn.message.aE1(), so, 1), bn.rr.aDz(so)
	}
}

function aCx() {
	var sJ = 0,
		aE4 = 0,
		aE5 = 0,
		aE6 = null,
		aE7 = null;

	function aEA(qT, aEB, aEC) {
		var qI = qT.username;
		return (qI += "   " + bn.kz.aDy(qT.u3, qT.a3r, qT.aD5)) + function(qT) {
			qT = qT.vw;
			if (qT < 1e3) return "   Gold: " + qT;
			if ((qT %= 1024) < 1e3) return "   Gold: " + qT + "k";
			return "   Gold: " + (qT - 999) + "M"
		}(qT) + ("   IP: " + bF.st.zQ(qT.aD6, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aEC ? aE4 : aE9(qT, aEB)])
	}

	function aE9(qT, aEB) {
		return aE4 = aEB || bn.tw.aDQ(qT.so) ? 1 : 0
	}
	this.aE8 = function() {
		!sJ || aE4 === aE9(aE7) && aE5 === aE7.vw || (aE5 = aE7.vw, aE6.show(-1, -1, aEA(aE7, 0, 1), 1, 1))
	}, this.u6 = function(e, qT, aEB) {
		var a8c = e.target.getBoundingClientRect();
		this.show(a8c.left, a8c.top, qT, 0, aEB), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.tu && bn.tu.rs(1)
		})
	}, this.show = function(eu, ew, qT, sN, aEB) {
		aE6 = aE6 || new sH, aE5 = (aE7 = qT).vw, aE6.show(eu, ew, aEA(qT, aEB), sN), sJ = 1
	}, this.rs = function(sT) {
		aE6 && aE6.rs(sT) && (sJ = 0, aE7 = null)
	}
}

function aCv() {
	function aEH(aEJ) {
		bn.y.aDA && 1 === bn.y.rf[2] && t.a5B(29).aEK(), bn.y.aDA = 0, t.a5B(29).aEL(), 0 !== bn.y.rh[bn.y.rf[0]].th && !aEJ || t.a5B(29).aEM(), bn.tu.aE8()
	}
	this.rh = new Array(4), this.rf = [0, 0, 1, 0], this.aDA = 0, this.aEE = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rh.length; aB++) this.rh[aB] = new aEF;
		this.rf[0] = bj.eK.data[158].value
	}, this.aEG = function() {
		aEH(!0), bn.aCq.dd()
	}, this.aDX = function() {
		bn.aCq.aDX();
		for (var aB = 0; aB < bn.y.rh.length; aB++) {
			var rg = bn.y.rh[aB];
			0 === rg.th ? rg.aEN = 0 : (rg.aEO = Math.max(rg.aEO - rg.aEN % 2, 0), rg.aEN++)
		}
		aEH(!1)
	}, this.aEP = function(re) {
		this.rf[0] !== re || this.rf[2] || t.a5B(29).aEQ()
	}
}

function aCz() {
	var aER = 0,
		aES = "",
		aET = 0,
		aEU = 0,
		aEV = 0;

	function aEX(a71) {
		b0.aEi.aEj(3, a71)
	}

	function aEg(gG) {
		aER = 1, bn.message.aDV({
			id: 6,
			value: gG
		})
	}

	function aEa(r) {
		var aEm = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEm)
	}
	this.a0D = function(r) {
		var aEW, g, aEc;
		if (aER) return aER = 0, "yes" === (aEW = r.toLowerCase()) || "y" === aEW ? void aEX(aES) : void bn.message.aDV({
			id: 5,
			aDq: 7
		});
		!(r.indexOf("@") < 0) && (aEW = aEa(r)) ? (aES = r, g = function(aEZ) {
			for (var en = aEZ.length, aEk = [0, 0, 0, 0], aB = 0; aB < en; aB++)
				for (var i = aEZ[aB], f6 = 0; f6 < 4; f6++) i === "@room" + (f6 + 1) && (aEk[f6] = 1);
			if ((aEU = bA.qj.a2b(aEk)) % 4 == 0) return bA.qj.a2t(bn.tw.tx);
			for (f6 = 0; f6 < 4; f6++) aEk[f6] = aEk[f6] ? bn.tw.tx[f6] : [];
			return bA.qj.a2t(aEk)
		}(aEW), function(aEZ, aEc, r) {
			if (!aET) return;
			for (var en = aEc.length, aB = 0; aB < en; aB++) 2 === aEc[aB].id && (r = r.replace(aEZ[aEc[aB].e8], "@" + aEc[aB].fF));
			return aER = 1, aEX((aES = r).slice(0, 126) + "|"), 1
		}(aEW, aEc = function(aEZ) {
			for (var aEc = [], en = (aEV = aET = 0, aEZ.length), aB = 0; aB < en; aB++) {
				var i = aEZ[aB],
					l5 = i.length;
				bA.ra.startsWith(i, "@[") ? l5 <= 9 && bA.ra.a3R(i, "]") && aEc.push({
					id: 0,
					fF: i.substring(2, l5 - 1).toUpperCase()
				}) : 6 === l5 ? bA.ra.startsWith(i, "@room") || (aEV++, aEc.push({
					id: 1,
					fF: bG.st.wO(i.substring(1))
				})) : 1 < l5 && l5 < 5 && 0 <= (l5 = b7.data.aCR(i.substring(1))) && (aEc.push({
					id: 2,
					fF: l5,
					e8: aB
				}), aET = 1)
			}
			return aEc
		}(aEW), r) || (0 === aEc.length ? aEU || function(aEZ) {
			for (var en = aEZ.length, aB = 0; aB < en; aB++) {
				var i = aEZ[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aEW) ? aEg(g.length) : aEX(r) : aEW.length === aEV ? aEX(r) : (function(g, aEc) {
			var l5 = aEc.length;
			if (0 === l5) return;
			var en = g.length;
			loop: for (var aB = en - 1; 0 <= aB; aB--) {
				for (var f6 = 0; f6 < l5; f6++)
					if (0 === aEc[f6].id) {
						if (aEc[f6].fF === bA.ra.a0q(g[aB].username)) continue loop
					} else if (1 === aEc[f6].id && aEc[f6].fF === g[aB].so) continue loop;
				g[aB] = g[--en], g.pop()
			}
		}(g, aEc), aEg(g.length)))) : aEX(r)
	}, this.aEn = function(r) {
		var aEZ = aEa(r);
		if (aEZ)
			for (var a5 = new RegExp("^[0-9]+$"), en = aEZ.length, aB = 0; aB < en; aB++) {
				var i = aEZ[aB].substring(1),
					l5 = i.length;
				1 <= l5 && l5 <= 3 && a5.test(i) && (l5 = parseInt(i, 10), !isNaN(l5)) && 0 <= l5 && l5 < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[l5]))
			}
		return r
	}
}

function aCy() {
	var aEo, aEp = [],
		aEq = -1,
		aEr = 0,
		aEs = 0;

	function aEx() {
		aEr = bf.eM, (3 === this.uA ? aEw : (aEq = (aEp.length + aEq + 2 * this.uA - 1) % aEp.length, aEv))()
	}

	function aEv() {
		0 !== aEp.length && (aEs = 0, aEo && aEo.uD(), (aEo = new u7(aEx)).s4(aEq, aEp.length), aEo.show(aEp[aEq]), bn.message.resize())
	}

	function aEw() {
		aEs = 1, aEo && aEo.uD(), (aEo = new uE(aEv)).s4(aEp.length), aEo.show(), bn.message.resize()
	}
	this.aDV = function(aDo) {
		var qT;
		2 === aDo.id && 3 === aDo.aDq ? bn.kz.aDz(aDo.so) : (qT = bn.kz.rm(aDo, bn.kz.rn(aDo)), (5 !== aDo.id && 6 !== aDo.id || (t.a5B(29).aEt().rp(qT), 5 === aDo.id)) && (qT = bf.eM < aEr + 2e4, aEq !== aEp.length - 1 && qT || (aEq = aEp
			.length), aEp.push(aDo), bj.eK.data[14].value || 7 === aDo.id || bp.play(), aEo) && (aEs && (bj.eK.data[13].value || qT) ? aEo.s4(aEp.length) : aEv()))
	}, this.show = function() {
		aEw()
	}, this.rs = function() {
		aEq = aEp.length - 1, aEo && aEo.uD(), aEo = null
	}, this.resize = function() {
		aEo && aEo.resize()
	}, this.aE1 = function() {
		return aEp
	}
}

function aCw() {
	var aEy = null,
		aEz = null,
		aF0 = 0,
		aF1 = 0,
		aF2 = null;

	function aF4() {
		0 !== aEz.u3 && (bn.uJ.rs(), t.u(8, 29, new sr(25, {
			ss: 0,
			so: bF.st.zQ(aEz.so, 5),
			sp: 0
		}, 29)))
	}

	function aF5() {
		var eu = aEy.eu,
			ew = aEy.ew;
		bn.uJ.rs(), aEy = new uF([new w("Kick User", function() {
			aFB(0, 0)
		}, aFE(0, 0)), new w("Block Chat", aFC, aFE(1, 0)), new w("Censor Username", aFD, aFE(2, 0))]), aFA(eu, ew), aF0 = 2, aF1 = 1
	}

	function aFE(id, e8) {
		var e7, aD5;
		return !bn.aCo || bn.kz.u4(aEz) || (e7 = aEz.a3r) <= (aD5 = bn.aCo.aD5) || 1 - bo.e6(id, aD5, e8) ? 1 : 4 === aEz.u3 ? 50 <= e7 ? +(e7 <= aD5) : 20 <= e7 ? +(e7 / 2 <= aD5) : +(e7 / 3 <= aD5) : 0
	}

	function aF8() {
		return !bn.aCo || bn.kz.u4(aEz) ? 1 : 0
	}

	function aF7() {
		var eu = aEy.eu,
			ew = aEy.ew,
			aFF = (bn.uJ.rs(), aF8());
		aEy = new uF([new w(bo.e5[5][0], function() {
			aFB(5, 0)
		}, aFF), new w(bo.e5[5][1], function() {
			aFB(5, 1)
		}, aFF), new w(bo.e5[5][2], function() {
			aFB(5, 2)
		}, aFF), new w(bo.e5[5][3], function() {
			aFB(5, 3)
		}, aFF)]), aFA(eu, ew), aF1 = aF0 = 2
	}

	function aF9() {
		29 === t.sq && t.a5A().aCp(bF.st.zQ(aEz.so, 5))
	}

	function aFB(id, value) {
		b0.aEi.aEj(5, {
			id: id,
			value: value,
			so: aEz.so
		})
	}

	function aFC() {
		var eu = aEy.eu,
			ew = aEy.ew;
		bn.uJ.rs(), aEy = new uF([new w(bo.e5[1][0], function() {
			aFB(1, 0)
		}, aFE(1, 0)), new w(bo.e5[1][1], function() {
			aFB(1, 1)
		}, aFE(1, 1)), new w(bo.e5[1][2], function() {
			aFB(1, 2)
		}, aFE(1, 2)), new w(bo.e5[1][3], function() {
			aFB(1, 3)
		}, aFE(1, 3)), new w(bo.e5[1][4], function() {
			aFB(1, 4)
		}, aFE(1, 4))]), aFA(eu, ew), aF0 = 3, aF1 = 1
	}

	function aFD() {
		var eu = aEy.eu,
			ew = aEy.ew;
		bn.uJ.rs(), aEy = new uF([new w(bo.e5[2][0], function() {
			aFB(2, 0)
		}, aFE(2, 0)), new w(bo.e5[2][1], function() {
			aFB(2, 1)
		}, aFE(2, 1)), new w(bo.e5[2][2], function() {
			aFB(2, 2)
		}, aFE(2, 2))]), aFA(eu, ew), aF0 = 3, aF1 = 2
	}

	function aFA(eu, ew, uL) {
		aEy.show(eu, ew, uL), bn.tu.show(aEy.eu, aEy.ew, aEz, 1)
	}
	this.aF3 = function(e, qT) {
		aF0 = 1, aEz = qT, aEy = new uF([new w(L(127), aF4, 0 === qT.u3 ? 1 : 0), new w(L(128), aF5, function() {
			if (!bn.aCo) return 1;
			if (bn.kz.u4(aEz)) return 1;
			if (100 <= bn.aCo.aD5) return 1;
			if (bn.aCo.aD5 >= aEz.a3r) return 1;
			return 0
		}()), new w(L(129, 0, "🚩 Report"), aF7, aF8()), new w(L(130), aF9, 0)]), aFA((aF2 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aF2.clientY, 1)
	}, this.a2B = function(code) {
		if (29 !== t.sq) return !1;
		if (!aEz) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.rs();
			else if (bA.ra.startsWith(code, "Numpad") || bA.ra.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aF0) this.aF3(aF2, aEz);
				else {
					if (!aEy) return !1;
					1 === aF0 ? code <= 1 ? aF4() : 2 === code ? aF5() : 3 === code ? aF7() : (aF9(), this.rs()) : 2 === aF0 ? 1 === aF1 ? code <= 1 ? (aFB(0, 0), this.rs()) : (2 === code ? aFC : aFD)() : (aFB(5, bL.hv(code - 1, 0, 3)), this
					.rs()) : (aFB(aF1, bL.hv(code - 1, 0, bo.e5[aF1].length - 1)), this.rs())
				}
		}
		return !0
	}, this.rs = function() {
		aF0 = 0, aEy && aEy.rs(), aEy = null, bn.tu.rs()
	}
}

function aEF() {
	this.th = 0, this.eT = 0, this.mapSeed = 0, this.aDb = 0, this.aFI = 0, this.aFJ = 0, this.aDh = 0, this.aEO = 0, this.spawningSeed = 0, this.a1P = 0, this.aDf = 0, this.ri = [], this.rj = 1048575, this.aEN = 0, this.aFK = [{
		eT: 0,
		mapSeed: 0,
		aDb: 0,
		eM: 100,
		aDh: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aDb: 1,
		eM: 200,
		aDh: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aDb: 2,
		eM: 300,
		aDh: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aDb: 3,
		eM: 400,
		aDh: 0
	}, {
		eT: 0,
		mapSeed: 0,
		aDb: 9,
		eM: 500,
		aDh: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aDb: 10,
		eM: 600,
		aDh: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aDb: 8,
		eM: 700,
		aDh: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aDb: 3,
		eM: 800,
		aDh: 0
	}]
}

function aD0() {
	var aFL = [],
		t3 = [],
		aFM = [];

	function aFO(qT) {
		for (var r = qT.r, aFN = [];;) {
			var f8 = function aFQ(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qI = r.substring(position + 1, position + 6);
				if (5 !== qI.length) return aFQ(r, position + 1);
				if (bA.ra.startsWith(qI, "room")) return aFQ(r, position + 1);
				var aFW = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aFW.test(qI)) return aFQ(r, position + 1);
				aFW = r.substring(position + 6, position + 7);
				if (1 !== aFW.length) return position;
				qI = new RegExp("^[ :!.]+$");
				if (!qI.test(aFW)) return aFQ(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f8) {
				aFN.push(aFR(r, qT));
				break
			}
			0 === f8 ? aFN.push(aFS(r.substring(1, 6), qT, f8)) : (aFN.push(aFR(r.substring(0, f8), qT)), aFN.push(aFS(r.substring(f8 + 1, f8 + 6), qT, f8))), r = r.substring(f8 + 6)
		}
		return aFN
	}

	function aFS(qI, qT, f8) {
		var aD7 = function(qI) {
				var so = bG.st.wO(qI),
					aD7 = bn.tw.aDQ(so);
				if (aD7) {
					for (aFL.push(aD7); 75 < aFL.length;) aFL.shift();
					return aD7
				}
				for (var aD2 = bn.tw.aD2, aB = aD2.length - 1; 0 <= aB; aB--)
					if (aD7 = aD2[aB], so === aD7.so) return aFL.push(aD7), aD7;
				for (aB = aFL.length - 1; 0 <= aB; aB--)
					if (aD7 = aFL[aB], so === aD7.so) return aFL.push(aD7), aD7;
				return bn.tw.aD8(so, qI, 1, 999999, 999999, 0, 0, 0, 0)
			}(qI),
			qI = (0 === f8 && 0 === qT.aDo.id && qT.rq && (qT.fontSize = bn.kz.aDt(aD7.u3, aD7.a3r), qT.aDr = bn.kz.aDu(aD7.a3r)), document.createElement("span"));
		return qI.textContent = function(aD7, qT, f8) {
			if (aD7.aDH) return aD7.aDH--, f8 = 2 === qT.aDo.id || (3 === qT.aDo.id || 4 === qT.aDo.id) && 0 !== f8, aD7.username + (f8 ? " (" + aD7.aDG + ")" : "");
			if (qT.aDo.aE3) return "Redacted " + bF.st.zQ(aD7.so, 2);
			return aD7.username
		}(aD7, qT, f8), qI.style.display = "inline-block", qI.style.color = bn.kz.u2(aD7.u3), qI.style.cursor = "pointer", qI.style.margin = "0", qI.style.font = "inherit", qI.style.minWidth = qI.style.minHeight = "1em", bn.kz.u4(aD7) && (qI
			.style.textDecoration = "underline"), aD7.u5 && (qI.style.textDecorationLine = "underline", qI.style.textDecorationStyle = "dotted"), bn.kz.aDu(aD7.a3r) && (qI.style.fontWeight = "bold"), qI.onclick = function(e) {
			bn.uJ.aF3(e, aD7)
		}, bJ.r3() || (qI.onmouseover = function(e) {
			bn.tu.u6(e, aD7)
		}), t3.push(qI), qI
	}

	function aFR(r, qT) {
		var rZ = document.createElement("span");
		return rZ.textContent = r, rZ.style.color = qT.aDs, rZ.style.margin = "0", rZ.style.font = "inherit", rZ
	}

	function aFb(aD7, aDF, so) {
		so !== aD7.so || aD7.aDG || (aD7.aDG = aD7.username, aD7.aDH = 3, aD7.username = aDF)
	}
	this.uD = function() {
		for (var aB = 0; aB < t3.length; aB++) t3[aB].onclick = t3[aB].onmouseover = null;
		aFM = t3 = null
	}, this.transform = function(qT) {
		for (var qG = document.createElement("div"), aFN = aFO(qT), aB = 0; aB < aFN.length; aB++) qG.appendChild(aFN[aB]);
		0 === qT.aDo.id && (qG.vx143 = qT.aDo, aFM.push(qG)), qG.style.margin = "0.6em 0.6em", qT.rq && (qG.style.marginLeft = qG.style.marginRight = "inherit"), qG.style.font = "inherit";
		var aFP = 0 < qT.aDo.id;
		return qT.aDr && (qG.style.fontWeight = "bold"), aFP && (qG.style.paddingLeft = "0.7em"), aFP && (qG.style.fontStyle = "italic"), qG.style.fontSize = qT.fontSize.toFixed(2) + "em", qG
	}, this.aFZ = function(aFa) {
		if (aFa && (2 === aFa.id && 1 === aFa.aDq || 3 === aFa.id && 2 === aFa.aDq)) {
			var so = 3 === aFa.id ? aFa.target : aFa.so;
			if (!bn.tw.aDQ(so)) {
				for (var aDF = "Redacted " + bF.st.zQ(so, 2), aD2 = bn.tw.aD2, aB = aD2.length - 1; 0 <= aB; aB--) aFb(aD2[aB], aDF, so);
				for (aB = aFL.length - 1; 0 <= aB; aB--) aFb(aFL[aB], aDF, so)
			}
		}
	}, this.aDz = function(so) {
		for (var aFc = aFM, aB = aFc.length - 1; 0 <= aB; aB--) {
			var eq = aFc[aB];
			if (eq.vx143.so === so) {
				for (; eq.firstChild;) t.removeChild(eq, eq.firstChild);
				eq.vx143.r = "[Redacted Message]";
				for (var aFN = aFO(bn.kz.rm(eq.vx143, bn.kz.rn(eq.vx143))), f6 = 0; f6 < aFN.length; f6++) eq.appendChild(aFN[f6]);
				aFc.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aFd, aFe, aFf;

	function aFk(aB) {
		var button = aY.rA[aB],
			eu = button.eu,
			ew = button.ew,
			i = button.i,
			j = button.j;
		uk.fillStyle = button.aFi, uk.fillRect(eu, ew, i, j), aB === aFd && (uk.fillStyle = aFf, uk.fillRect(eu, ew, i, j)), uk.lineWidth = bc.z7, uk.strokeStyle = aFe, uk.strokeRect(eu, ew, i, j),
			function(button) {
				var eu = button.eu,
					ew = button.ew,
					i = button.i,
					j = button.j;
				bA.qb.textAlign(uk, 1), bA.qb.textBaseline(uk, 1), uk.font = button.font, uk.fillStyle = aFe, uk.fillText(button.a71, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ew = 0, this.gap = 0, this.dd = function() {
		aFd = -1, aFe = bB.nj, aFf = "rgba(255,255,255,0.16)", this.rA = new Array(7), this.j = Math.floor((a0.a1.hw() ? .123 : .093) * h.hx), this.i = Math.floor((a0.a1.hw() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aFg = Math.floor(.26 * this.j),
			aFh = bA.qb.sQ(1, aFg);
		this.rA[0] = {
			eu: 0,
			ew: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a71: "Multiplayer",
			font: aFh,
			aFi: "rgba(22,88,22,0.8)",
			fontSize: aFg
		}, aFg = Math.floor(.18 * this.j), aFh = bA.qb.sQ(1, aFg), this.rA[1] = {
			eu: 0,
			ew: 0,
			i: this.i - this.rA[0].i - this.gap,
			j: this.j,
			a71: "Single Player",
			font: aFh,
			aFi: "rgba(22,88,88,0.8)",
			fontSize: aFg
		}, this.rA[2] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a71: "",
			font: this.rA[1].font,
			aFi: "rgba(100,0,0,0.8)",
			fontSize: this.rA[1].fontSize
		}, this.rA[3] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: this.j,
			a71: "Back",
			font: this.rA[0].font,
			aFi: "rgba(0,0,0,0.8)",
			fontSize: this.rA[0].fontSize
		}, this.rA[4] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a71: "The game was updated!",
			font: this.rA[1].font,
			aFi: "rgba(100,0,0,0.8)",
			fontSize: this.rA[1].fontSize
		}, this.rA[5] = {
			eu: 0,
			ew: 0,
			i: this.rA[0].i,
			j: Math.floor(.8 * this.j),
			a71: "Reload",
			font: this.rA[0].font,
			aFi: "rgba(0,100,0,0.8)",
			fontSize: this.rA[0].fontSize
		}, this.rA[6] = {
			eu: 0,
			ew: 0,
			i: this.rA[1].i,
			j: this.rA[5].j,
			a71: "Back",
			font: this.rA[0].font,
			aFi: "rgba(0,0,0,0.8)",
			fontSize: this.rA[0].fontSize
		}, this.a9b()
	}, this.a9b = function() {
		this.ew = Math.floor(.54 * h.j), this.rA[0].eu = Math.floor(.5 * h.i - .5 * this.i), this.rA[1].eu = this.rA[0].eu + this.rA[0].i + this.gap, this.rA[2].eu = this.rA[3].eu = this.rA[0].eu, this.rA[4].eu = this.rA[5].eu = this.rA[0].eu,
			this.rA[6].eu = this.rA[1].eu, this.rA[0].ew = Math.floor(.54 * h.j), this.rA[1].ew = this.rA[0].ew, this.rA[2].ew = Math.floor((h.j - this.rA[2].j - this.rA[3].j - this.gap) / 2), this.rA[3].ew = this.rA[2].ew + this.rA[2].j + this
			.gap, this.rA[4].ew = Math.floor((h.j - this.rA[4].j - this.rA[5].j - this.gap) / 2), this.rA[5].ew = this.rA[6].ew = this.rA[4].ew + this.rA[4].j + this.gap
	}, this.aFj = function() {
		aFk(0), aFk(1)
	}, this.aFl = function() {
		aFk(2), aFk(3)
	}, this.aFm = function() {
		aFk(4), aFk(5), aFk(6)
	}, this.a1d = function(eu, ew, mV) {
		var aB = -1;
		return 0 === aa.a1K() ? aB = this.a27(eu, ew, 0, 2) : 3 === aa.a1K() ? aB = this.a27(eu, ew, 3, 1) : 5 === aa.a1K() && (aB = this.a27(eu, ew, 5, 2)), aFd !== aB && (aFd = aB, mV) && (bf.dl = !0), -1 !== aB && (aT.rc(), !0)
	}, this.a27 = function(eu, ew, aFn, size) {
		for (var aB = aFn; aB < aFn + size; aB++)
			if (eu >= this.rA[aB].eu && ew >= this.rA[aB].ew && eu <= this.rA[aB].eu + this.rA[aB].i && ew <= this.rA[aB].ew + this.rA[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aFp, aFq, a7C, aFr, aFs, aFt, aFu, aFv, aFw, a7B, aFx, aFy, aFz, aG0 = 1;

	function aG2(aG3) {
		!aG3 && 1 === aFz && aG0 ? (aG0 = 0, b0.y.close(aFz, 3280)) : aFz = (aFz + 1) % b0.y.aG4, aFy = bf.eM, b0.y.aG5(aFz, 4) && b0.aEi.aG6(aFz)
	}

	function aG7() {
		0 === aFz ? o.a1S(3249) : aG2()
	}

	function aGC(ew, a9J, th) {
		var n9 = Math.floor((h.i - aFr) / 2) + aFu,
			nM = n9 + Math.floor(th * (aFr - 2 * aFu));
		uk.lineWidth = a9J, uk.beginPath(), uk.moveTo(n9, ew), uk.lineTo(nM, ew), uk.lineTo(Math.floor(n9 - aFu + th * aFr), ew + a7C), uk.lineTo(n9 - aFu, ew + a7C), uk.closePath()
	}
	this.aG1 = 1, this.dd = function() {
		aa.setState(6), aFp = 0, aFq = 1, aFv = "rgba(0,220,120,0.4)", aFw = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aG0 = 1, aFz = this.aG1 - 1, aG2(1)
	}, this.resize = function() {
		aFr = Math.floor((a0.a1.hw() ? .5 : .25) * h.hx), aFs = aFr + 12, a7C = Math.floor(.125 * aFr), aFu = 3 * a7C, aFt = Math.floor(.225 * aFr), aFx = Math.floor(.3 * a7C), a7B = bA.qb.sQ(0, aFx)
	}, this.a1O = function(a1F) {
		a1F === aFz && aG7()
	}, this.h0 = function(eu, ew) {
		var n9 = Math.floor((h.i - aFs) / 2),
			nA = Math.floor(.5 * (h.j - bc.gap - a7C - aFt)) + a7C + bc.gap;
		return n9 < eu && eu < n9 + aFs && nA < ew && ew < nA + aFt && (this.a2I(), aY.a1d(eu, ew, !1), !0)
	}, this.a2I = function() {
		b0.y.a1T(3260), t.y.z()
	}, this.j3 = function() {
		6 === aa.a1K() && (bf.eM > aFy + 12e3 && aG7(), 100 < (aFp += .07 * aFq * (aFp < 16 ? 5 + aFp : 84 < aFp ? 105 - aFp : 17)) ? (aFp = 100, aFq = -1) : aFp < 0 && (aFp = 0, aFq = 1), aFv = "rgba(0," + Math.floor(190 - 1.9 * aFp) + "," +
			Math.floor(120 - 1.2 * aFp) + "," + (.4 + .004 * aFp) + ")", aFw = "rgba(0," + Math.floor(1.9 * aFp) + "," + Math.floor(1.2 * aFp) + "," + (.8 - .004 * aFp) + ")", bf.dl = !0)
	}, this.uj = function() {
		var eu = Math.floor((h.i - aFs) / 2),
			ew = Math.floor(.5 * (h.j - bc.gap - a7C - aFt));
		! function(title, ew, a9J, th) {
			uk.fillStyle = aFw, aGC(ew, a9J, 1), uk.fill(), uk.fillStyle = aFv, aGC(ew, a9J, th), uk.fill(), uk.strokeStyle = bB.nj, aGC(ew, a9J, 1), uk.stroke(),
				function(aGE, ew) {
					bA.qb.textAlign(uk, 1), bA.qb.textBaseline(uk, 1), uk.font = a7B, uk.fillStyle = bB.nj, uk.fillText(aGE, Math.floor(.5 * h.i), Math.floor(ew + .58 * a7C))
				}(title, ew)
		}(L(131), ew, 3, aFp / 100),
		function(eu, ew, i, j, a71) {
			uk.fillStyle = bB.ne, uk.fillRect(eu, ew, i, j), uk.lineWidth = 3, uk.strokeStyle = bB.nj, uk.strokeRect(eu, ew, i, j);
			var en = Math.floor(.3 * j);
			bA.qb.textAlign(uk, 1), bA.qb.textBaseline(uk, 1), uk.font = bA.qb.sQ(0, en), uk.fillStyle = bB.nj, uk.fillText(a71, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * en))
		}(eu, ew + a7C + bc.gap, aFs, aFt, L(37))
	}
}

function cR() {
	var a1B = 0;
	this.dd = function() {
		aY.dd(), a1B = 0
	}, this.setState = function(aGF) {
		a1B = aGF
	}, this.a1K = function() {
		return a1B
	}, this.aGG = function() {
		this.setState(8), t.x()
	}, this.a2B = function(e) {
		if (!bS.we) return !1;
		if (!(bf.eM < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aGH()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1B) return !0;
					if (7 === a1B) return !0
				}
			}
			return !1
		}
	}, this.aGI = function() {
		bZ.resize()
	}, this.aGH = function() {
		return !!bZ.rs()
	}, this.h0 = function(eu, ew) {
		!bS.we || bZ.h0(eu, ew) || 6 === a1B && aZ.h0(eu, ew) || bY.h0(eu, ew) || aT.h0(eu, ew)
	}, this.a1d = function(eu, ew) {
		!aT.a9U && aY.a1d(eu, ew, !0) || aT.a1d(eu, ew)
	}, this.click = function(eu, ew) {
		aT.a22()
	}, this.a1g = function(eu, ew, deltaY) {}, this.aGJ = function() {
		aY.a9b(), bf.dl = !0
	}, this.uj = function() {
		8 !== a1B && 10 !== a1B && (uk.imageSmoothingEnabled = !0, this.yD(), 0 !== a1B && (aT.uj(), aO.uj(), this.aGK(), bY.uj()), 0 !== a1B && 6 === a1B && aZ.uj(), bZ.uj(), t.uj())
	}, this.yD = function() {
		var aGM, aGL;
		if (__fx.makeMainMenuTransparent) uk.clearRect(0, 0, h.i, h.j);
		else bS.we ? (aGL = h.i / bS.ey, aGM = h.j / bS.ez, uk.setTransform(aGL = aGM < aGL ? aGL : aGM, 0, 0, aGL, Math.floor((h.i - aGL * bS.ey) / 2), Math.floor((h.j - aGL * bS.ez) / 2)), uk.drawImage(bS.wg, 0, 0), uk.setTransform(1, 0, 0, 1,
			0, 0), uk.fillStyle = bB.ne) : uk.fillStyle = bB.na, uk.fillRect(0, 0, h.i, h.j)
	}, this.aGK = function() {
		var ew = Math.floor(.3 * h.j),
			canvas = ab.aGN("territorial.io"),
			ho = (ho = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : ho,
			eu = (uk.globalAlpha = .15, uk.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - ho * canvas.width))),
			eu = Math.floor(eu / ho),
			ew = Math.floor(ew - .5 * canvas.height * ho),
			ew = Math.floor(ew / ho);
		uk.setTransform(ho, 0, 0, ho, eu, ew), uk.drawImage(canvas, eu, ew), uk.setTransform(1, 0, 0, 1, 0, 0), uk.globalAlpha = 1, uk.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aDf = 0;
	var aGP, aGQ, aGR, aGS, aGT, aGU = this.aGO = 0;

	function aGX() {
		aGS = aGT = null, aGU = 0
	}
	this.dd = function(rg, aDc, aDd) {
		t.x(), bn.uD(), aa.setState(10), aGS = rg, aGT = aDc, aGU = aDd, this.aDf = rg.aDf, this.aGO = aDd, aGP = 0, aGQ = bf.eM + 4500, b0.y.a1P = rg.a1P, b0.y.a1I === rg.a1P ? (console.log("direct pass"), aGR = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a1I, 3247), aGR = 2, b0.y.aG5(rg.a1P, 5) && b0.p5.aGV()), uk.imageSmoothingEnabled = !0, aa.yD();
		aDc = ab.aGN("loading"), aDd = (a0.a1.hw() ? .396 : .25) * h.hx / aDc.width;
		uk.setTransform(aDd, 0, 0, aDd, Math.floor((h.i - aDd * aDc.width) / 2), Math.floor((h.j - aDd * aDc.height) / 2)), uk.imageSmoothingEnabled = !1, uk.drawImage(aDc, 0, 0), uk.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mT = function() {
		0 < aGR && bf.eM > aGQ && (aGR--, aGQ += 4500, 0 === bf.aGY) && 0 === bf.k7() && b0.y.aG5(b0.y.a1P, 5)
	}, this.aGZ = function() {
		return 10 === aa.a1K() && (bn.aCr.aDg(aGS, aGT, aGU), aGX(), !0)
	}, this.aGa = function() {
		10 === aa.a1K() && 2 <= ++aGP && (bn.aCr.aDg(aGS, aGT, aGU), aGX())
	}
}

function cS() {
	var aGc, canvas, a0U, aGd;

	function aGj(e8, name, aGk, qI) {
		a0U[e8] = name, canvas[e8] = new Image, canvas[e8].onload = function() {
			! function(e8, aGk) {
				var a3w, a3x = null;
				7 === aGk ? a3w = bA.a2O.a3z : 8 === aGk ? (a3w = bA.a2O.a42, a3x = .1) : 3 === aGk ? (a3w = bA.a2O.a40, a3x = .06) : 5 === aGk ? a3w = bA.a2O.a43 : 6 === aGk ? a3w = bA.a2O.a3y : 4 === aGk && (a3w = bA.a2O.a44);
				canvas[e8] = bA.a2O.a3v(canvas[e8], a3w, a3x)
			}(e8, aGk), aGm()
		}, canvas[e8].onerror = function(e) {
			console.error("Error loading image at index", e8, "Error:", e), aGm()
		}, canvas[e8].src = "data:image/png;base64," + qI
	}

	function aGm() {
		aGc--, aGg()
	}

	function aGg() {
		0 === aGc && (aGc = -1, aGi(), bf.dl = !0, canvas[7] = aGd, canvas[8] = aGd, canvas[9] = aGd, canvas[10] = aGd, 5 === t.sq) && t.a5A().aGo.resize()
	}

	function aGi() {
		aL.a5M(), bY.aCh([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wj = new ye, aj.wj.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aGc = 23, canvas = new Array(aGc), a0U = new Array(aGc), (aGd = document.createElement("canvas")).width = 1;
			for (var aB = aGc - (aGd.height = 1); 0 <= aB; aB--) canvas[aB] = aGd;
			aGi(), aGj(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGj(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGj(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGj(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aGj(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGj(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGj(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGj(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGj(8,
					"googleplay", 3,
					"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"
					), aGj(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGj(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGj(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGj(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGj(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGj(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aGj(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGj(16, "apple", 3,
					"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"
					), aGj(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGj(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGj(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGj(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGj(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGj(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e8) {
		return canvas[e8]
	}, this.aGN = function(name) {
		for (var aB = a0U.length - 1; 0 <= aB; aB--)
			if (a0U[aB] === name) return canvas[aB];
		return aGd
	}, this.tI = function() {
		return aGc <= 0
	}, this.aGf = function() {
		aGc = 0, aGg()
	}
}

function cT() {
	var aGr, aGs, aGt, aGu, aGv, aGw, aGx, aGy, aGz, aH0, aGp = [
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
		aGq = [
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

	function aH6(jQ, nR) {
		for (var aB = jQ; aB < nR; aB++) aGr[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGs[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGt[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aH5(jQ, nR) {
		for (var colorsData = aD.data.colorsData, aB = jQ; aB < nR; aB++) {
			var fF = colorsData[aB];
			aGr[aB] = 4 * (fF >> 12), aGs[aB] = 4 * (fF >> 6 & 63), aGt[aB] = 4 * (63 & fF)
		}
	}

	function aHH(eR, aHJ) {
		aC2[eR] = 0, aC2[eR + 1] = 0, aC2[eR + 2] = aHJ, aC2[eR + 3] = 0, aHK(eR)
	}

	function aHK(eR) {
		var eu;
		bb.nZ || (eu = ac.yE(eR), eR = ac.yF(eR), bb.nZ = eu >= ba.aC1[0] && eu <= ba.aC1[2] && eR >= ba.aC1[1] && eR <= ba.aC1[3])
	}
	this.ep = new Int32Array(4), this.de = function() {
		var ep = this.ep;
		ep[0] = -4 * bS.ey, ep[1] = 4, ep[2] = -ep[0], ep[3] = -ep[1]
	}, this.dd = function() {
		if (aGr = new Uint8Array(aD.ek), aGs = new Uint8Array(aD.ek), aGt = new Uint8Array(aD.ek), aGu = new Uint8Array(aD.ek), aGv = new Uint8Array(aD.ek), aGw = new Uint8Array(aD.ek), aGx = new Uint8Array(aD.ek), aGy = new Uint8Array(aD.ek),
			aGz = new Uint8Array(aD.ek), aH0 = new Uint8Array(aD.ek), this.a8S = new Uint8Array(aD.ek), aD.hh)
			for (var aAh = bg.aAh, aB = aD.ek - 1; 0 <= aB; aB--) {
				var f8 = aAh[aB],
					l5 = bL.du((aGq[f8][3] + 1) * ay.random(), ay.value(100));
				aGr[aB] = aGp[f8][0] + l5 * aGq[f8][0], aGs[aB] = aGp[f8][1] + l5 * aGq[f8][1], aGt[aB] = aGp[f8][2] + l5 * aGq[f8][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aH5(0, aD.kA), aH6(aD.kA, aD.ek)) : aH6(0, aD.ek) : aH5(0, aD.ek);
		! function() {
			var aB, eq;
			for (aB = aD.ek - 1; 0 <= aB; aB--) eq = bL.du(aGr[aB] + aGs[aB] + aGt[aB], 3), aGr[aB] += aHC(eq - aGr[aB], 2), aGs[aB] += aHC(eq - aGs[aB], 2), aGt[aB] += aHC(eq - aGt[aB], 2), aGr[aB] -= aGr[aB] % 4, aGs[aB] -= aGs[aB] % 4, aGt[
				aB] -= aGt[aB] % 4
		}(),
		function() {
			for (var aB = aD.ek - 1; 0 <= aB; aB--) aGr[aB] += bL.du(aB, 128), aGs[aB] += bL.du(aB % 128, 32), aGt[aB] += bL.du(aB % 32, 8), aGu[aB] = aB % 8
		}(), this.aH9(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGv[aB] = aGr[aB] < 32 ? aGr[aB] + 32 : aGr[aB] - 32, aGw[aB] = aGs[aB] < 32 ? aGs[aB] + 32 : aGs[aB] - 32, aGx[aB] = aGt[aB] < 32 ? aGt[aB] + 32 : aGt[aB] - 32
			}(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGy[aB] = 235 < aGr[aB] ? aGr[aB] - 20 : aGr[aB] + 20, aGz[aB] = 235 < aGs[aB] ? aGs[aB] - 20 : aGs[aB] + 20, aH0[aB] = 235 < aGt[aB] ? aGt[aB] - 20 : aGt[aB] + 20
			}()
	}, this.a7J = function(player) {
		var g = bO.fM;
		return g[0] = aGr[player], g[1] = aGs[player], g[2] = aGt[player], g
	}, this.aH9 = function() {
		for (var aB = aD.ek - 1; 0 <= aB; aB--) this.a8S[aB] = aGr[aB] + aGs[aB] + aGt[aB] < 280 ? 0 : 1
	}, this.yE = function(eR) {
		return bL.du(eR, 4) % bS.ey
	}, this.yF = function(eR) {
		return bL.du(eR, 4 * bS.ey)
	}, this.xm = function(eu, ew) {
		return Math.floor(4 * (ew * bS.ey + eu))
	}, this.y2 = function(eR) {
		var ep = this.ep;
		return this.aHD(eR + ep[0]) || this.aHD(eR + ep[1]) || this.aHD(eR + ep[2]) || this.aHD(eR + ep[3])
	}, this.fC = function(eR) {
		var ep = this.ep;
		return this.es(eR + ep[0]) || this.es(eR + ep[1]) || this.es(eR + ep[2]) || this.es(eR + ep[3])
	}, this.y0 = function(eR, player) {
		var ep = this.ep;
		return this.aHE(eR + ep[0], player) || this.aHE(eR + ep[1], player) || this.aHE(eR + ep[2], player) || this.aHE(eR + ep[3], player)
	}, this.gN = function(eR) {
		return 208 <= aC2[eR + 3]
	}, this.y8 = function(player, eR) {
		return this.gN(eR) && this.yB(player, eR)
	}, this.yB = function(player, eR) {
		return player === this.ef(eR)
	}, this.aHF = function(eR) {
		return 208 <= aC2[eR + 3] && aC2[eR + 3] < 224
	}, this.jL = function(eR) {
		return 224 <= aC2[eR + 3] && aC2[eR + 3] < 248
	}, this.y1 = function(eR) {
		for (var ep = this.ep, aB = 3; 0 <= aB; aB--)
			if (this.i1(eR + ep[aB])) return !0;
		return !1
	}, this.ei = function(eR) {
		return this.gN(eR) || this.ee(eR)
	}, this.i1 = function(eR) {
		return 0 === aC2[eR + 3] && 2 === aC2[eR + 2]
	}, this.ee = function(eR) {
		return 0 === aC2[eR + 3] && 1 === aC2[eR + 2]
	}, this.wr = function(eR) {
		return 0 === aC2[eR + 3] && 3 === aC2[eR + 2]
	}, this.es = function(eR) {
		return 0 === aC2[eR + 3] && 5 === aC2[eR + 2]
	}, this.aHD = function(eR) {
		return 0 === aC2[eR + 3] && 3 <= aC2[eR + 2]
	}, this.eV = function(eR) {
		return (aC2[eR] >> 1 << 8) + aC2[eR + 1]
	}, this.aHG = function(eR) {
		return 1 & aC2[eR]
	}, this.aHE = function(eR, player) {
		return this.ee(eR) || this.gN(eR) && player !== this.ef(eR)
	}, this.ef = function(eR) {
		return aC2[eR] % 4 * 128 + aC2[eR + 1] % 4 * 32 + aC2[eR + 2] % 4 * 8 + aC2[eR + 3] % 8
	}, this.y9 = function(eR) {
		aHH(eR, 1)
	}, this.aHI = function(eR) {
		aHH(eR, 2)
	}, this.xn = function(eR, player) {
		aC2[eR] = aGr[player], aC2[eR + 1] = aGs[player], aC2[eR + 2] = aGt[player], aC2[eR + 3] = 208 + aGu[player], aHK(eR)
	}, this.gI = function(eR, player) {
		aC2[eR] = aGv[player], aC2[eR + 1] = aGw[player], aC2[eR + 2] = aGx[player], aC2[eR + 3] = 224 + aGu[player], aHK(eR)
	}, this.jM = function(eR, player) {
		aC2[eR] = aGy[player], aC2[eR + 1] = aGz[player], aC2[eR + 2] = aH0[player], aC2[eR + 3] = 248 + aGu[player], aHK(eR)
	}
}

function cs() {
	var aHL = 0,
		aHN = new Uint16Array(64);

	function vN(a5Q) {
		aHL -= 2;
		for (var aB = a5Q; aB < aHL; aB += 2) aHN[aB] = aHN[aB + 2], aHN[aB + 1] = aHN[aB + 3]
	}
	this.dd = function() {
		aHL = 0
	}, this.j3 = function() {
		var aB, jJ, iN;
		if (0 !== aHL)
			if (0 === ag.mj[aD.eX]) aHL = 0;
			else if (0 === ad.fu(aD.eX)) aHL = 0;
		else
			for (aB = aHL - 2; 0 <= aB; aB -= 2)(jJ = aHN[aB]) < aD.ek && 0 === ag.mj[jJ] ? vN(aB) : (iN = aHN[aB + 1], (jJ >= aD.ek && bs.aHP(aD.eX) || jJ < aD.ek && bs.aHQ(aD.eX, jJ)) && (b8.hD.hK(iN, jJ), vN(aB)))
	}, this.hL = function(jJ, iN) {
		! function(jJ, iN) {
			for (var aB = 0; aB < aHL; aB += 2)
				if (aHN[aB] === jJ) return aHN[aB + 1] = Math.min(aHN[aB + 1] + iN, 1023), 1;
			return
		}(jJ, iN) && 64 !== aHL && (aHN[aHL] = jJ, aHN[aHL + 1] = iN, aHL += 2)
	}
}

function cU() {
	function aHX(player) {
		var dt;
		bA.g9.a3X(player) && (dt = ag.gp[player] - ag.a3c[player] + ad.aHZ(player), bd.gD(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.gp[player] = 0, ag.a3c[player] = 0
	}

	function aHg() {
		aX.show(!1, !1, !1, !0), aW.aBA(), bR.zu.a0e()
	}

	function aHU(player, aHf) {
		for (var aB = aHf.length - 1; 0 <= aB; aB--) ad.aHi(aHf[aB], player)
	}

	function aHW(player) {
		var ie = ag.ie,
			ig = ag.ig,
			ih = ag.ih,
			ii = ag.ii,
			ey = bS.ey;
		if (ag.gb[player]) {
			ag.gb[player] = 0;
			for (var n9 = ie[player], nA = ih[player], eu = ig[player]; n9 <= eu; eu--)
				for (var ew = ii[player]; nA <= ew; ew--) {
					var gL = 4 * (ew * ey + eu);
					ac.y8(player, gL) && ac.y9(gL)
				}
		}
		ig[player] = ii[player] = 0, ie[player] = ih[player] = Math.max(ey, bS.ez)
	}
	this.dm = function(gL) {
		var player, dt = ag.gb[gL] + ag.xi[gL];
		bN.y.kE[gL] ? dt && (aHU(player = gL, ad.aHV(player)), aHW(player), aF.gB(player), ad.clear(player), aHX(player), function(player) {
			ag.xi[player] = 0, ag.gF[player] = [], ag.gT[player] = [], ag.gU[player] = [], ag.fD[player] = []
		}(player)) : !dt && ag.gF[gL].length || this.aHT(gL)
	}, this.aHT = function(player) {
		! function(player) {
			bA.g9.jX(player) || (ag.a0i[player] = bi.a0y.aHe(), aD.a0B++);
			var aHf = ad.aHV(player);
			0 === aHf.length ? bA.g9.a3U(player) && aHg() : (aHU(player, aHf), function(player, aHf) {
				var aHk = aHf[function(aHf) {
					var aB, e8 = 0;
					for (aB = aHf.length - 1; 1 <= aB; aB--) ag.gb[aHf[aB]] > ag.gb[aHf[e8]] && (e8 = aB);
					return e8
				}(aHf)];
				9 === aD.kS && (1 === bg.el[player] ? ay.k2(8) && az.aHl(aHk) : aE.hW[player] && (aN.a6p(765, 0), aN.yb(280, L(132, [ag.yc[aHk], ag.yc[player]]), 765, aHk, bB.na, bB.ot, -1, !0)));
				if (bA.g9.a3U(player)) aHg(), aN.a0L(aHk, 1);
				else {
					for (var aB = aHf.length - 1; 0 <= aB; aB--)
						if (bA.g9.a3X(aHf[aB]) && (bd.mf[4 - bA.g9.jX(player)]++, bA.g9.a3U(aHf[aB]))) return aN.a0L(player, 0);
					bA.g9.jX(player) || aN.a6Z(0, player, aHk)
				}
			}(player, aHf))
		}(player), aHW(player), aHX(player),
			function(player) {
				ag.mj[player] = 0, ag.gF[player] = null, ag.gT[player] = null, ag.gU[player] = null, ag.fD[player] = null
			}(player), aF.gB(player), ad.clear(player), bN.aHc.aHd(player)
	}
}

function cx() {
	var input;

	function aHm(e) {
		(e = e.target.files) && 0 < e.length && b6.aHp(e[0])
	}

	function aHt(e) {
		var f8 = new Image;
		f8.onload = aHu, f8.src = e.target.result
	}

	function aHu(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bS.aHw || j > bS.aHw || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bS.aHw + ".", a0.vU ? a0.vU.showToast(e) : alert(e)) : 20 === t.sq && t.a5A().aHu(canvas)
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHm
	}, this.uD = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHn = function() {
		input.click()
	}, this.aHp = function(aHq) {
		var g = aHq.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHt, g.readAsDataURL(aHq))
	}
}

function cv() {
	this.aHy = null, this.dd = function() {
		10 !== aD.kS ? this.aHy = null : this.aHy = new Uint32Array(aD.ek)
	}, this.j3 = function() {
		10 === aD.kS && this.kz()
	}, this.kz = function() {
		for (var gL, target, aBN, aHy = this.aHy, zx = al.kl, a3d = ag.gp, aB = al.kg - 1; 0 <= aB; aB--)(gL = zx[aB]) >= aD.kA || (target = Math.max(bL.du(a3d[gL], 4), 2048), aBN = Math.max(ae.aBO(gL), 100), aHy[gL] += bL.du(aBN * target, 1e4),
			aHy[gL] > target && (aHy[gL] = target))
	}, this.a3j = function(player, hW) {
		return hW > this.aHy[player] ? (hW = this.aHy[player], this.aHy[player] = 0) : this.aHy[player] -= hW, hW
	}
}

function dW() {
	function aI0(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aI8, g.readAsText(e))
	}

	function aI8(e) {
		var aIC;
		aD.a09 || (e = JSON.parse(e.target.result), aIC = aD.data = new a4a, aID(e, aIC, "mapType", 0, 2), aID(e, aIC, "mapProceduralIndex", 0, 255), aID(e, aIC, "mapRealisticIndex", 0, 255), aID(e, aIC, "mapSeed", 0, 16383), function(aIB, aIC, gM,
				max) {
				aIB = aIB[gM];
				aIC[gM] = aIJ(aIB) ? aIB.slice(0, max) : aIC[gM]
			}(e, aIC, "mapName", 20), function(aIB, aIC, gM) {
				var aHv;
				2 === aIC.mapType && (!aIJ(aIB = aIB[gM]) || aIB.length <= 20 ? aIC.mapType = 0 : ((aHv = new Image).onload = function() {
					b9.aIK.aIL(aHv, 1), aHv.onload = null, aHv = null
				}, aHv.src = aIB))
			}(e, aIC, "canvas"), aID(e, aIC, "passableWater", 0, 1), aID(e, aIC, "passableMountains", 0, 1), aID(e, aIC, "playerCount", 1, 512), aID(e, aIC, "humanCount", 1, 1), aID(e, aIC, "selectedPlayer", 0, 0), aID(e, aIC, "gameMode", 0, 1),
			aID(e, aIC, "playerMode", 0, 0), aID(e, aIC, "battleRoyaleMode", 0, 0), aID(e, aIC, "numberTeams", 0, 8), aID(e, aIC, "isZombieMode", 0, 0), aID(e, aIC, "isContest", 0, 0), aID(e, aIC, "isReplay", 0, 0), aIG(e, aIC, "elo", 16, 2,
				16383), aID(e, aIC, "colorsType", 0, 1), aID(e, aIC, "colorsPersonalized", 0, 1), aIG(e, aIC, "colorsData", 32, 512, 262143), aID(e, aIC, "selectableColor", 0, 1), aIG(e, aIC, "teamPlayerCount", 16, 9, 512), aID(e, aIC,
				"neutralBots", 0, 1), aID(e, aIC, "botDifficultyType", 0, 3), aID(e, aIC, "botDifficultyValue", 0, 15), aIG(e, aIC, "botDifficultyTeam", 8, 9, 15), aIG(e, aIC, "botDifficultyData", 8, 512, 15), aID(e, aIC, "spawningType", 0, 2),
			aID(e, aIC, "spawningSeed", 0, 16383), aIG(e, aIC, "spawningData", 16, 1024, 4095), aID(e, aIC, "selectableSpawn", 0, 1), aID(e, aIC, "playerNamesType", 0, 2),
			function(aIB, aIC, gM, size, max) {
				var a2j = aIB[gM];
				if (Array.isArray(a2j)) {
					for (var a2k = new Array(size), en = Math.min(a2j.length, size), aB = 0; aB < en; aB++) a2k[aB] = aIJ(a2j[aB]) ? a2j[aB].slice(0, max) : "";
					aIC[gM] = a2k
				}
			}(e, aIC, "playerNamesData", 512, 20), aID(e, aIC, "selectableName", 0, 1), aID(e, aIC, "aIncomeType", 0, 2), aID(e, aIC, "aIncomeValue", 0, 255), aIG(e, aIC, "aIncomeData", 8, 512, 255), aID(e, aIC, "tIncomeType", 0, 2), aID(e, aIC,
				"tIncomeValue", 0, 255), aIG(e, aIC, "tIncomeData", 8, 512, 255), aID(e, aIC, "iIncomeType", 0, 2), aID(e, aIC, "iIncomeValue", 0, 255), aIG(e, aIC, "iIncomeData", 8, 512, 255), aID(e, aIC, "sResourcesType", 0, 2), aID(e, aIC,
				"sResourcesValue", 0, 2047), aIG(e, aIC, "sResourcesData", 16, 512, 2047), t.x(), t.y.aIA[0] = 0, t.u(19))
	}

	function aID(aIB, aIC, gM, min, max) {
		aIB = aIB[gM];
		aIC[gM] = "number" == typeof aIB && min <= aIB && aIB <= max ? Math.floor(aIB) : aIC[gM]
	}

	function aIJ(qI) {
		return "string" == typeof qI
	}

	function aIG(aIB, aIC, gM, aIM, size, max) {
		var a2j = aIB[gM];
		if (Array.isArray(a2j)) {
			for (var a2k = new(8 === aIM ? Uint8Array : 16 === aIM ? Uint16Array : Uint32Array)(size), en = Math.min(a2j.length, size), aB = 0; aB < en; aB++) a2k[aB] = bL.hv(a2j[aB], 0, max);
			aIC[gM] = a2k
		}
	}
	this.aHz = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aI0, input.click()
	}, this.aI1 = function() {
		for (var aI4, aCe, a58 = aD.data, keys = Object.keys(a58), aI2 = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a58[key] instanceof Uint8Array || a58[key] instanceof Uint16Array || a58[key] instanceof Uint32Array ? aI2[key] = Array.from(a58[key]) : aI2[key] = a58[key]
		}
		aI2.canvas = 2 === aI2.mapType && aI2.canvas ? aI2.canvas.toDataURL() : null, aI4 = aI2, aI4 = JSON.stringify(aI4, null, 2), aI4 = new Blob([aI4], {
			type: "application/json"
		}), (aCe = document.createElement("a")).href = URL.createObjectURL(aI4), aCe.download = "tt_scenario.json", aCe.click()
	}
}

function cY() {
	var aIN, aIO, size, jJ, hW, aIP;

	function aIQ(player) {
		return player < aD.kA ? aIN * player : aIN * aD.kA + aIO * (player - aD.kA)
	}
	this.dd = function() {
		aIN = aD.kA < 16 ? 12 : 8, aIO = 4;
		var en = aIQ(aD.ek);
		size = new Uint8Array(aD.ek), jJ = new Uint16Array(en), hW = new Uint32Array(en), aIP = new Uint8Array(en)
	}, this.q9 = function(a7v, aIR) {
		var aIS = this.gq(a7v, aIR),
			aIR = (this.go(a7v, aIR, 0), bA.g9.gC(a7v, aIS));
		bd.gD(a7v, aIS - aIR, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aHi = function(player, aIR) {
		var aIV, aIR = function(player, aIR) {
			var aB, l5 = aIQ(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jJ[l5 + aB] === aIR) return aB;
			return size[player]
		}(player, aIR);
		aIR !== size[player] && (aIV = hW[aIQ(player) + aIR], this.gE(player, aIR), this.jG(player, aIV, aD.ek))
	}, this.jV = function(player, aIR) {
		for (var l5 = aIQ(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l5 + aB] === aIR) return !0;
		return !1
	}, this.jo = function(player) {
		return player < aD.kA ? size[player] < aIN : size[player] < aIO
	}, this.fu = function(player) {
		return size[player]
	}, this.fz = function(player, aB) {
		return jJ[aIQ(player) + aB]
	}, this.g0 = function(player, aB) {
		return hW[aIQ(player) + aB]
	}, this.gq = function(player, aIR) {
		for (var l5 = aIQ(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l5 + aB] === aIR) return hW[l5 + aB];
		return 0
	}, this.aHZ = function(player) {
		for (var l5 = aIQ(player), fF = 0, aB = size[player] - 1; 0 <= aB; aB--) fF += hW[l5 + aB];
		return fF
	}, this.go = function(player, aIR, aIV) {
		for (var l5 = aIQ(player), aB = size[player] - 1; 0 <= aB; aB--) jJ[l5 + aB] === aIR && (hW[l5 + aB] = aIV)
	}, this.gZ = function(player, aB, aIV) {
		hW[aIQ(player) + aB] = Math.max(aIV, 0)
	}, this.ga = function(player, aB) {
		aIP[aIQ(player) + aB] = 0
	}, this.g1 = function(player, aB) {
		return aIP[aIQ(player) + aB]
	}, this.jG = function(player, aIV, aIR) {
		ao.iv.jm[player] = ao.iv.jm[aIR] = 8, bA.g9.a3X(aIR) && bd.mf[6 - bA.g9.jX(player)]++;
		for (var l5 = aIQ(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l5 + aB] === aIR) return hW[l5 + aB] += aIV, void(hW[l5 + aB] = hW[l5 + aB] > aD.a3f ? aD.a3f : hW[l5 + aB]);
		jJ[l5 + size[player]] = aIR, hW[l5 + size[player]] = aIV, aIP[l5 + size[player]] = 1, size[player]++, aIR === aD.eX ? aN.a0L(player, 5) : player < aD.kA && player === aD.eX && af.a6b(aIR)
	}, this.gE = function(player, e8) {
		var f6, l5;
		if (0 !== size[player])
			for (l5 = aIQ(player), size[player]--, f6 = e8; f6 < size[player]; f6++) jJ[l5 + f6] = jJ[l5 + f6 + 1], hW[l5 + f6] = hW[l5 + f6 + 1], aIP[l5 + f6] = aIP[l5 + f6 + 1]
	}, this.aHV = function(player) {
		for (var f6, l5, aHf = [], aB = al.kg - 1; 0 <= aB; aB--)
			for (l5 = aIQ(al.kl[aB]), f6 = size[al.kl[aB]] - 1; 0 <= f6; f6--)
				if (jJ[l5 + f6] === player) {
					aHf.push(al.kl[aB]);
					break
				} return aHf
	}
}

function cZ() {
	var aIW;

	function aIY(player) {
		var e7, jp;
		return bA.g9.jX(player) && player < aD.kA ? 0 : (e7 = aIW[bL.du((aD.ek - 1) * ag.gb[player], aD.ju)], bf.k7() < 1920 && (e7 = Math.max(bL.du(100 * (13440 - 6 * bf.k7()), 1920), e7)), jp = ae.jq(player), ag.gp[player] > jp && (e7 -= bL.du(2 *
			e7 * (ag.gp[player] - jp), jp)), Math.min(Math.max(e7, 0), 700))
	}

	function aIk(nL) {
		for (var gb = ag.gb, kl = al.kl, aB = al.kg - 1; 0 <= aB; aB--) {
			var gL = kl[aB];
			bA.g9.gC(gL, bL.du(nL * gb[gL], 32))
		}
	}

	function aIh() {
		var wk = aD.eX;
		bO.fJ[0] = ag.gp[wk] - ag.a3c[wk]
	}

	function aIj(e8) {
		var wk = aD.eX,
			wk = ag.gp[wk] - ag.a3c[wk] - bO.fJ[0];
		ae.aA2 += wk, bd.mf[e8] += wk
	}
	this.aA2 = 0, this.dk = function() {
		for (var en = aD.ek, aB = (aIW = new Uint16Array(en), 0); aB < en; aB++) aIW[aB] = 100 + aIX(bL.du(25600 * aB, en - 4), 9)
	}, this.dd = function() {
		(this.aA2 = 0) === aD.data.iIncomeType ? this.aBO = aIY : 1 === aD.data.iIncomeType ? this.aBO = function(player) {
			return bL.du(aD.data.iIncomeValue * aIY(player), 64)
		} : this.aBO = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aIY(player), 64)
		}
	}, this.j3 = function() {
		if (bf.k7() % 10 == 9 && (ae.aA2 = 0, function() {
				aIh();
				for (var kl = al.kl, gp = ag.gp, aB = al.kg - 1; 0 <= aB; aB--) {
					var gL = kl[aB],
						aIi = bL.du(ae.aBO(gL) * gp[gL], 1e4);
					bA.g9.gC(gL, Math.max(aIi, 1))
				}
				aIj(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aIh(), 1 === aD.data.aIncomeType)
						for (var gb = ag.gb, kl = al.kl, nL = aD.data.aIncomeValue, aB = al.kg - 1; 0 <= aB; aB--) {
							var gL = kl[aB];
							bA.g9.gC(gL, bL.du(nL * gb[gL], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gb = ag.gb, kl = al.kl, nL = aD.data.aIncomeData, aB = al.kg - 1; 0 <= aB; aB--) {
								var gL = kl[aB];
								bA.g9.gC(gL, bL.du(nL[gL] * gb[gL], 128))
							}
						}();
					aIj(18)
				}
			}(), bf.k7() % 100 == 99)) {
			if (aIh(), 0 === aD.data.tIncomeType) aIk(32);
			else if (1 === aD.data.tIncomeType) aIk(aD.data.tIncomeValue);
			else
				for (var gb = ag.gb, kl = al.kl, nL = aD.data.tIncomeData, aB = al.kg - 1; 0 <= aB; aB--) {
					var gL = kl[aB];
					bA.g9.gC(gL, bL.du(nL[gL] * gb[gL], 32))
				}
			aIj(8)
		}
	}, this.jq = function(player) {
		return Math.min(100 * ag.gb[player], aD.a4W)
	}, this.p8 = function(player, p9) {
		bq.pV(player, p9, bO.fK[0], 0), bA.g9.gC(p9, bO.fK[0]), bd.pW(player, p9), af.aIa(player, bO.fK[0] + bO.fK[1]), af.pX(p9, bO.fK[0]), bA.g9.mK(player)
	}, this.aIb = function() {
		for (var en = al.kg, zx = al.kl, l5 = 0, a3d = ag.gp, aB = 0; aB < en; aB++) l5 += a3d[zx[aB]];
		return l5
	}, this.aIc = function(aId) {
		for (var gL, en = al.kg, zx = al.kl, l5 = 0, a3d = ag.gp, el = bg.el, aB = 0; aB < en; aB++) el[gL = zx[aB]] === aId && (l5 += a3d[gL]);
		return l5
	}
}

function cb() {
	var aIo, aIp, aIq, aIr, aIs, aIt, aIu, aIv, aIw, aIx, aIy, aIz, aJ0, aJ1, aJ2, aJ3, aJ4, aJ5, aJ7, aJ8, aCX, aJ9, aJA, aJH, aJI, aJ6 = null,
		aJC = 0,
		aJD = !1,
		aJE = new Float32Array(4),
		aJF = 0,
		aJG = !0,
		aAW = 400,
		aJJ = 0;

	function qe() {
		aIw = Math.floor(+h.hx), aIx = Math.floor(.5 * aIw)
	}

	function aJK() {
		var aB, aJP;
		for (uk.font = bA.qb.sQ(1, 100 * aIy), aJP = 80 / Math.floor(uk.measureText(bA.ra.zQ(aD.a3f)).width), uk.font = bA.qb.sQ(1, 100), aB = aD.ek - 1; 0 <= aB; aB--) aIv[aB] = 100 / Math.floor(uk.measureText(ag.yc[aB]).width), aIu[aB] = Math.min(
			aJP, aIv[aB])
	}

	function aJQ(aB) {
		return !aJJ || (aB = ag.gp[aB]) < 1e6 ? 1 : aB < 1e7 ? aJE[0] : aJE[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aJO(hp) {
		aJ5 = !1, aJ4 = 1, aJ2 = aJ3 = 0, aJG && (bA.qb.textAlign(hp, 1), bA.qb.textBaseline(hp, 1));
		for (var aJW, aJX, aB, aJY, fontSize, aJZ, n9 = iO / hy, nA = iP / hy, nM = (h.i + iO) / hy, nN = (h.j + iP) / hy, aJa = 0 !== ag.mj[aD.eX] && !bA.g9.jX(aD.eX), f6 = al.kg - 1; 0 <= f6; f6--) aB = al.kl[f6], (fontSize = Math.floor(aJ1 * hy *
			aJQ(aB) * aIu[aB] * aIs[aB])) < aJ0 || aIw <= fontSize || aIq[aB] + aIs[aB] > n9 && aIq[aB] < nM && aIr[aB] + aIt[aB] > nA && aIr[aB] < nN && (aJW = Math.floor(h.i * (aIq[aB] + aIs[aB] / 2 - n9) / (nM - n9)), aJX = Math.floor(h.j * (
			aIr[aB] + aIt[aB] / 2 - nA) / (nN - nA) - .1 * fontSize), aJY = ac.a8S[aB], hp.font = bA.qb.sQ(1 === ag.a3T[aB] ? 4 : 1, fontSize), hp.fillStyle = aJb(fontSize, aJY % 2), aJJ ? aJc(hp, aB, fontSize, aJW, aJX, aJY) : aJd(aB,
			fontSize, aJW, aJX, hp), aJ5 = !0, 0 < aCX[aB] ? function(aJW, aJX, fontSize, aB, hp) {
			0 === jv[aB] ? aj.rr.zH(aJ8[aB]) ? (function(aJW, aJX, fontSize, player, pK, hp) {
				for (var xH = aJX, ho = (hp.globalAlpha = aJl(fontSize), aJQ(player) * (aJJ ? aJF : aIv[player])), xG = aJW - .5 * fontSize / ho - .9 * fontSize, f7 = 0; f7 < 2; f7++) hp.fillText(aj.rr.z9(pK), xG, xH), xG = aJW + .5 *
					fontSize / ho + .9 * fontSize;
				hp.globalAlpha = 1
			}(aJW, aJX, fontSize, aB, aJ8[aB], hp), aJf(aJW, aJX, fontSize, 0, 0, hp)) : aj.rr.zJ(aJ8[aB]) ? (aJo(aJW, aJX, fontSize, aJ8[aB], 0, hp), aJf(aJW, aJX, fontSize, 0, 1, hp)) : (aJo(aJW, aJX, fontSize, aJ8[aB], 1, hp), aJf(aJW,
				aJX, fontSize, 1, 0, hp)) : aJo(aJW, aJX, fontSize, aJ8[aB], 0, hp)
		}(aJW, aJX, fontSize, aB, hp) : 0 === jv[aB] && aJf(aJW, aJX, fontSize, 0, 0, hp), aJa && (0 < aCX[aB + aD.ek] || 0 < aCX[aB + 2 * aD.ek] || 0 < aCX[aB + 3 * aD.ek] || 0 < aCX[aB + 4 * aD.ek]) && function(aJW, aJX, fontSize, aB, hp) {
			var f8, gG = -1;
			for (f8 = 4; 1 <= f8; f8--) 0 < aCX[aB + f8 * aD.ek] && gG++;
			for (f8 = 1; f8 < 5; f8++) 0 < aCX[aB + f8 * aD.ek] && (! function(aJW, aJX, fontSize, f8, aB, aJj, dt, hp) {
				var a2x;
				if (1 === f8) {
					aB = aJ8[aB + aD.ek];
					if (!aj.rr.zI(aB)) return function(aJW, aJX, fontSize, pK, aJj, hp) {
						hp.globalAlpha = aJl(fontSize);
						aJW -= .534 * aJj * fontSize, aJj = aJX + 1.59 * fontSize;
						hp.font = bA.qb.sQ(0, .785 * fontSize), hp.fillText(aj.rr.z9(pK), aJW, aJj), hp.globalAlpha = 1
					}(aJW, aJX, fontSize, aB, aJj, hp);
					a2x = aj.wj.yi[aB - 1024 + aj.rr.yu]
				} else a2x = 2 === f8 ? aL.a5O()[4].canvas[+(dt < 255)] : (3 === f8 ? aL.a5O()[5] : aL.a5O()[6]).canvas[0];
				aB = aj.wj.yj, dt = .8 * fontSize / aB, f8 = aJW - .5 * dt * aB - .534 * aJj * fontSize, aJW = aJX + 1.4 * dt * aB;
				hp.setTransform(dt, 0, 0, dt, f8, aJW), hp.globalAlpha = aJl(fontSize), hp.drawImage(a2x, 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}(aJW, aJX, fontSize, f8, aB, gG, aCX[aB + f8 * aD.ek], hp), gG -= 2)
		}(aJW, aJX, fontSize, aB, hp), (aJZ = aIy * fontSize) < aJ0 || (hp.font = bA.qb.sQ(1, aJZ), aJX += Math.floor(.78 * fontSize), aJJ ? aJd(aB, aJZ, aJW, aJX, hp) : aJc(hp, aB, aJZ, aJW, aJX, aJY)))
	}

	function aJd(aB, fontSize, eu, ew, hp) {
		var ___id = aB;
		var showName = aB < aD.kA || !__fx.settings.hideBotNames;
		if (showName) hp.fillText(ag.yc[aB], eu, ew), aB < aD.kA && 2 !== ag.a3T[aB] || (aB = fontSize / aIv[aB], hp.fillRect(eu - .5 * aB, ew + bA.qb.zA * fontSize, aB, Math.max(1, .1 * fontSize)));
		aJJ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hp.fillText(__fx.utils.getDensity(___id), eu, showName ? ew + fontSize : ew)
		);
	}

	function aJc(hp, aB, fontSize, aJW, aJX, aJY) {
		var ___id = aB;
		aB = bA.ra.zQ(ag.gp[aB]);
		aJY >> 1 & 1 ? (hp.lineWidth = .05 * fontSize, hp.strokeStyle = aJb(fontSize, aJY % 2), hp.strokeText(aB, aJW, aJX)) : (1 < aJY && (hp.lineWidth = .12 * fontSize, hp.strokeStyle = aJb(fontSize, aJY), hp.strokeText(aB, aJW, aJX)), hp.fillText(
			aB, aJW, aJX));
		aJJ || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hp.fillText(__fx.utils.getDensity(___id), aJW, aJX + fontSize))
	}

	function aJf(aJW, aJX, fontSize, aJj, aJk, hp) {
		var a5t = .95 * fontSize / aJA,
			aJW = aJW - .5 * a5t * aJ9 + .8 * aJj * fontSize,
			aJj = aJX - 1.76 * a5t * aJA - (.35 - bA.qb.zA + .7) * aJk * fontSize;
		hp.setTransform(a5t, 0, 0, a5t, aJW, aJj), hp.globalAlpha = aJl(fontSize), hp.drawImage(ab.get(4), 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJo(aJW, aJX, fontSize, pK, aJj, hp) {
		var hj, xG, a5t;
		hp.globalAlpha = aJl(fontSize), aj.rr.zI(pK) ? (hj = aj.wj.yj, hp.setTransform(a5t = 1.1 * fontSize / hj, 0, 0, a5t, xG = aJW - .5 * a5t * hj - .8 * aJj * fontSize, a5t = aJX - 1.55 * a5t * hj), hp.drawImage(aj.wj.yi[pK - 1024 + aj.rr.yu], 0,
			0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (xG = aJW - .8 * aJj * fontSize, a5t = aJX - (.35 - bA.qb.zA + 1) * fontSize, hp.fillText(aj.rr.z9(pK), xG, a5t)), hp.globalAlpha = 1
	}

	function aJb(fontSize, aJY) {
		return aIx <= fontSize && fontSize < aIw ? bg.aJq[aJY] + aJl(fontSize).toFixed(3) + ")" : bg.aJr[aJY]
	}

	function aJl(fontSize) {
		return aIx <= fontSize && fontSize < aIw ? 1 - (fontSize - aIx) / (aIw - aIx) : 1
	}

	function aK0(ho, i) {
		return 1 + Math.floor(aIz * ho * i)
	}

	function aJx(aB) {
		for (var left = aIq[aB], f6 = aIq[aB] - ag.ie[aB] - 1; 0 <= f6; f6--)
			if (!aK2(aB, --left, aIr[aB], aIt[aB])) {
				left++;
				break
			} var right = aIq[aB];
		for (f6 = ag.ig[aB] - aIq[aB] - aIs[aB]; 0 <= f6; f6--)
			if (!aK2(aB, ++right + aIs[aB] - 1, aIr[aB], aIt[aB])) {
				right--;
				break
			} var eu = Math.floor((left + right) / 2),
			top = aIr[aB];
		for (f6 = aIr[aB] - ag.ih[aB] - 1; 0 <= f6; f6--)
			if (!aK3(aB, eu, --top, aIs[aB])) {
				top++;
				break
			} var bottom = aIr[aB];
		for (f6 = ag.ii[aB] - aIr[aB] - aIt[aB]; 0 <= f6; f6--)
			if (!aK3(aB, eu, ++bottom + aIt[aB] - 1, aIs[aB])) {
				bottom--;
				break
			} var ew = Math.floor((top + bottom) / 2);
		aJu(aB, eu, ew, aIs[aB], aIt[aB]) && (aIq[aB] = eu, aIr[aB] = ew)
	}

	function aJu(player, eu, ew, i, j) {
		eq = Math.floor(.2 * i);
		for (var eq, f8 = eu + i - 1; eu <= f8; f8--)
			if (!aK2(player, f8, ew, j)) return;
		for (f8 = ew + j - 1 - (eq = (eq = Math.floor(.25 * j)) < 1 ? 1 : eq); ew + eq <= f8; f8--)
			if (!aK3(player, eu, f8, i)) return;
		return 1
	}

	function aK2(player, eu, ew, j) {
		return ac.y8(player, 4 * (ew * bS.ey + eu)) && ac.y8(player, 4 * ((ew + j - 1) * bS.ey + eu))
	}

	function aK3(player, eu, ew, i) {
		return ac.y8(player, 4 * (ew * bS.ey + eu)) && ac.y8(player, 4 * (ew * bS.ey + eu + i - 1))
	}
	this.dd = function() {
		if (aJJ = bj.eK.data[7].value || 8 === aD.kS, aAW = 0 === (aAW = bj.eK.data[11].value) ? 280 : 1 === aAW ? 187 : 112, aJ5 = !1, aJ1 = .88, aIy = .5, aIz = 1.8, aJ0 = 12 - 3 * bj.eK.data[9].value, aIp = aIo = 0, aIq = new Uint16Array(aD
				.ek), aIr = new Uint16Array(aD.ek), aIs = new Uint16Array(aD.ek), aIt = new Uint16Array(aD.ek), aIu = new Float32Array(aD.ek), aIv = new Float32Array(aD.ek), aJ8 = new Uint16Array(2 * aD.ek), aCX = new Uint8Array(5 * aD.ek), aJH =
			new Uint8Array(aD.ek), aJI = new Uint8Array(aD.ek), aJG || (aJ6 = aJ6 || document.createElement("canvas")), qe(), aJ3 = aJ2 = 0, aJ4 = 1, aJJ) {
			var aB, aJP;
			for (aJK(), uk.font = bA.qb.sQ(1, 100), aJP = 100 / Math.floor(uk.measureText("900 000").width), aB = aD.ek - 1; 0 <= aB; aB--) aIu[aB] = Math.min(aJP, 2 * aIv[aB]);
			aJF = aJP, aJE[0] = 100 / (aJP * Math.floor(uk.measureText("5 000 000").width)), aJE[1] = 100 / (aJP * Math.floor(uk.measureText("50 000 000").width)), aJE[2] = 100 / (aJP * Math.floor(uk.measureText("500 000 000").width)), aJE[3] =
				100 / (aJP * Math.floor(uk.measureText("1 000 000 000").width))
		} else aJK();
		! function() {
			var aB;
			for (aB = aD.ek - 1; 0 <= aB; aB--) ag.gb[aB] < 12 ? (aIq[aB] = ag.ie[aB] + 1, aIr[aB] = ag.ih[aB] + 1, aIs[aB] = 1, aIt[aB] = 1) : (aIq[aB] = ag.ie[aB], aIr[aB] = ag.ih[aB] + 1, aIs[aB] = 4, aIt[aB] = 2);
			if (aD.hB)
				for (aB = 0; aB < aD.kA; aB++) aIs[aB] = 0;
			aJ9 = ab.get(4).width, aJA = ab.get(4).height
		}()
	}, this.aIa = function(gL, a56) {
		a56 > 18 * ag.gb[gL] ? (aJI[gL] = 6, ac.a8S[gL] = 2 + ac.a8S[gL] % 2) : (aJH[gL] = 4, (ac.a8S[gL] < 2 || 3 < ac.a8S[gL]) && (ac.a8S[gL] = 6 + ac.a8S[gL] % 2))
	}, this.pX = function(gL, a56) {
		a56 > 6 * ag.gb[gL] ? (aJI[gL] = 6, ac.a8S[gL] = 4 + ac.a8S[gL] % 2) : (aJH[gL] = 4, (ac.a8S[gL] < 4 || 5 < ac.a8S[gL]) && (ac.a8S[gL] = 8 + ac.a8S[gL] % 2))
	}, this.resize = function() {
		qe(), aJG || aJO(aJ7)
	}, this.a4S = function() {
		for (var aB = 0; aB < aD.kA; aB++) ag.ig[aB] - ag.ie[aB] != 3 || ag.ii[aB] - ag.ih[aB] != 3 ? (aIq[aB] = ag.ie[aB] + (ag.ig[aB] !== ag.ie[aB] ? 1 : 0), aIr[aB] = ag.ih[aB], aIs[aB] = 1, aIt[aB] = 1) : (aIq[aB] = ag.ie[aB], aIr[aB] = ag
			.ih[aB] + 1, aIs[aB] = 4, aIt[aB] = 2)
	}, this.qA = function(player, e8, aJR) {
		! function(player, e8, aJR) {
			player += e8 * aD.ek;
			0 === e8 ? aJ8[player] === aJR && 0 < aCX[player] ? aCX[player] = 0 : (aJ8[player] = aJR, aCX[player] = aj.rr.zH(aJR) ? 255 : 64) : 1 === e8 ? (aCX[player] = 64, aJ8[player] = aJR) : aCX[player] = aJR
		}(player, e8, aJR), 2 === aD.a09 && this.mV(!0)
	}, this.uj = function() {
		aJG ? aJO(uk) : aJ5 && (1 !== aJ4 ? (uk.imageSmoothingEnabled = !0, uk.setTransform(aJ4, 0, 0, aJ4, 0, 0), uk.drawImage(aJ6, -aJ2 / aJ4, -aJ3 / aJ4), uk.setTransform(1, 0, 0, 1, 0, 0), uk.imageSmoothingEnabled = !1) : uk.drawImage(aJ6, -
			aJ2, -aJ3))
	}, this.a9F = function(i7, iA) {
		aJ2 += i7, aJ3 += iA
	}, this.a1d = function(i7, iA) {
		af.a9F(i7, iA)
	}, this.zoom = function(a2W, lP, lQ) {
		aJ4 *= a2W, aJ2 = (aJ2 + lP) * a2W - lP, aJ3 = (aJ3 + lQ) * a2W - lQ
	}, this.mV = function(bu) {
		return !aJG && !(!aJD && !bu && bf.eM < aJC + (1 === aJ4 && 0 === aJ2 && 0 === aJ3 && (aD.a4w() || aD.hB || 2 === aD.a09) ? 1e3 : aAW) || (aJD = !1, aJC = bf.eM, aJO(aJ7), 0))
	}, this.aJU = function(aB) {
		return aJQ(aB) * aIu[aB]
	}, this.aJV = function(player) {
		return aIu[player]
	}, this.j3 = function() {
		bf.k7() % 10 == 9 && (aJD = aD.a4y() && !aD.a4w()), !aD.a4w() && 4 <= ++aIp && function() {
			var aB, f6, f7;
			for (aIp = 0, f7 = 4; 1 <= f7; f7--)
				for (f6 = al.kg - 1; 0 <= f6; f6--) aB = al.kl[f6] + f7 * aD.ek, 0 < aCX[aB] && aCX[aB] < 255 && aCX[aB]--;
			if (2 !== aD.a09)
				for (f6 = al.kg - 1; 0 <= f6; f6--) aB = al.kl[f6], 0 < aCX[aB] && aCX[aB] < 255 && aCX[aB]--
		}();
		var aB, f6, en = Math.floor(.1 * al.kg);
		for (en = (en = en < 8 ? 8 : en) > al.kg ? al.kg : en, aB = aIo + en - 1; aIo <= aB; aB--) f6 = aB % al.kg, ! function(aB) {
			var ho = aJQ(aB) * aIu[aB];
			0 < aIs[aB] && aJu(aB, aIq[aB], aIr[aB], aIs[aB], aIt[aB]) ? ! function(aB) {
				for (var eu, ew, i, j, eR = !1, f7 = 0; f7 < 8; f7++) {
					if (i = aIs[aB] + 2, j = aIt[aB] + 2, i > ag.ig[aB] - ag.ie[aB] + 1 || j > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					if (eu = aIq[aB] - 1, ew = aIr[aB] - 1, !aJu(aB, eu, ew, i, j)) return eR;
					aIq[aB] = eu, aIr[aB] = ew, aIs[aB] = i, aIt[aB] = j, eR = !0
				}
				return eR
			}(aB) && function(aB, ho) {
				for (var eu, ew, i, j, eR = !1, aCg = aIs[aB], nL = 1 + Math.floor(.02 * aCg), f7 = 1; f7 < 5; f7++) {
					if ((i = aCg + f7 * nL) > ag.ig[aB] - ag.ie[aB] + 1) return eR;
					if ((j = aK0(ho, i)) > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJu(aB, eu, ew, i, j) && (aIq[aB] = eu, aIr[aB] = ew, aIs[
						aB] = i, aIt[aB] = j, eR = !0)
				}
				return eR
			}(aB, ho) && aJx(aB) : ! function(aB, ho) {
				var j, eu = aIq[aB] + 1,
					ew = aIr[aB] + 1,
					i = aIs[aB] - 2;
				for (;;) {
					if (i < 1) {
						aIs[aB] = 0;
						break
					}
					if (j = aK0(ho, i), aJu(aB, eu, ew, i, j)) return aIq[aB] = eu, aIr[aB] = ew, aIs[aB] = i, aIt[aB] = j, 1;
					eu++, ew++, i -= 2
				}
				return
			}(aB, ho) ? function(aB, ho) {
				var eu, ew, i, j, f7, nR, jQ = ag.ig[aB] - ag.ie[aB] + 1,
					aK1 = Math.floor(.02 * jQ);
				for (nR = -6 * (aK1 = aK1 < 1 ? 1 : aK1), f7 = jQ; nR <= f7; f7 -= aK1)
					if (j = aK0(ho, i = 0 < f7 ? f7 : 1), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJu(aB, eu, ew, i, j))
						return aIq[aB] = eu, aIr[aB] = ew, aIs[aB] = i, aIt[aB] = j
			}(aB, ho) : aJx(aB)
		}(al.kl[f6]);
		aIo = (aIo += en) % al.kg
	}, this.mQ = function() {
		var aB, gL, zF, zG;
		if (bf.k7() % 4 == 1)
			for (aB = al.kg - 1; 0 <= aB; aB--) gL = al.kl[aB], ac.a8S[gL] < 2 || ((zF = Math.max(aJH[gL] - 1, 0)) === (zG = Math.max(aJI[gL] - 1, 0)) ? 0 === zF && (ac.a8S[gL] %= 2) : 0 === zG && ac.a8S[gL] < 6 && (ac.a8S[gL] += 4), aJH[gL] =
				zF, aJI[gL] = zG)
	}, this.a6b = function(player) {
		var aB = player + 2 * aD.ek,
			dt = aCX[aB];
		return 0 < dt && (aN.a0G(50, player), aCX[aB] = 0, 255 === dt)
	}, this.a5d = function(player) {
		return 255 === aCX[player + 2 * aD.ek]
	}
}

function cd() {
	var aK4, aK5, aK6;
	this.dd = function() {
		aK4 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aK5 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aK6 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6s = ["K ", " Y", "E ", " Z", " z", " s", "S "], aDY = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aK4.length - 1; 0 <= aB; aB--)
			for (var f6 = a6s.length - 1; 0 <= f6; f6--) aK4[aB] = aK4[aB].replace(a6s[f6], aDY[f6]);
		if (__fx.settings.realisticNames) aK4 = realisticNames;
	}, this.a4i = function() {
		var en = aD.kA,
			yc = ag.yc,
			a0n = ag.a0n,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < en)
			for (var aB = 0; aB < en; aB++) yc[aB] = a0n[aB] = "Player " + ay.jR(1e3);
		else
			for (aB = 0; aB < en; aB++) yc[aB] = a0n[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kS) {
			for (var e7 = ay.random(), aKC = aK6, aKD = aK5, hW = aE.hW, en = aKC.length, l5 = aD.data.teamPlayerCount[7], yc = ag.yc, a0n = ag.a0n, aB = l5 - 1; aB >= aD.kA; aB--) yc[aB] = a0n[aB] = aKC[(aB + e7) % en];
			for (en = aKD.length - 1, aB = l5; aB < aD.ek; aB++) yc[aB] = a0n[aB] = aKD[hW[aB] ? en : aB % en]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var en = aD.ek, yc = ag.yc, a0n = ag.a0n, playerNamesData = aD.data.playerNamesData, aB = aD.kA; aB < en; aB++) yc[aB] = a0n[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var yc = ag.yc, a0n = ag.a0n, aB = aD.kA; aB < aD.ek; aB++) yc[aB] = a0n[aB] = "Bot " + ay.jR(1e3)
		} : function() {
			for (var aKE = aK4, en = aKE.length, e7 = ay.random(), yc = ag.yc, a0n = ag.a0n, aB = aD.kA; aB < aD.ek; aB++) yc[aB] = a0n[aB] = aKE[(aB + e7) % en]
		})()
	}
}

function cw() {
	this.aKF = [], this.aKG = [], this.dd = function() {
		this.aKF = [], this.aKG = []
	}, this.j3 = function() {
		0 <= this.aKF.length && this.aKH(this.aKF), 0 <= this.aKG.length && this.aKH(this.aKG)
	}, this.aKH = function(g) {
		for (var f7 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eM--, g[aB].eM <= 0) {
				f7 = aB;
				break
			} for (aB = f7; 0 <= aB; aB--) g.shift()
	}, this.a5W = function(id, zx, aKI) {
		return this.f9(this.aKF, id, zx, aKI)
	}, this.aKJ = function(id, zx, aKI) {
		return this.f9(this.aKG, id, zx, aKI)
	}, this.f9 = function(g, id, zx, aKI) {
		return ! function(g, id, zx) {
			var aB, hf;
			for (aB = zx.length - 1; 0 <= aB; aB--)
				for (hf = g.length - 1; 0 <= hf; hf--)
					if (g[hf].player === zx[aB] && id === g[hf].id) return 1;
			return
		}(g, id, zx) && (aKI && function(g, id, zx) {
			var aB;
			for (aB = zx.length - 1; 0 <= aB; aB--) g.push({
				player: zx[aB],
				id: id,
				eM: 384
			})
		}(g, id, zx), !0)
	}
}

function cc() {
	this.a0n = new Array(aD.ek), this.yc = new Array(aD.ek), this.a3T = new Uint8Array(aD.ek), this.mj = new Uint8Array(aD.ek), this.ie = new Uint16Array(aD.ek), this.ih = new Uint16Array(aD.ek), this.ig = new Uint16Array(aD.ek), this.ii =
		new Uint16Array(aD.ek), this.gb = new Uint32Array(aD.ek), this.xi = new Uint32Array(aD.ek), this.gp = new Uint32Array(aD.ek), this.gF = null, this.gT = null, this.gU = null, this.fD = null, this.q0 = new Uint16Array(aD.ek), this.jC =
		new Uint16Array(aD.ek), this.jD = new Uint16Array(aD.ek), this.a0i = new Uint16Array(aD.ek), this.a0g = new Uint8Array(aD.ek), this.a3c = new Uint16Array(aD.ek), this.dd = function() {
			this.a0n.fill(""), this.yc.fill(""), this.a3T.fill(0), this.mj.fill(0), this.ie.fill(0), this.ih.fill(0), this.ig.fill(0), this.ii.fill(0), this.gb.fill(0), this.xi.fill(0), this.gp.fill(0), this.gF = new Array(aD.ek), this.gT =
				new Array(aD.ek), this.gU = new Array(aD.ek), this.fD = new Array(aD.ek), this.q0.fill(0), this.jC.fill(0), this.jD.fill(0), this.a0i.fill(0), this.a0g.fill(0), this.a3c.fill(0)
		}
}

function cu() {
	this.aD3 = function(player) {
		aG.mi(player), aD.a0B++, ag.a3T[player] = 2, ag.a0i[player] = bi.a0y.aHe(), player === aD.eX && (aX.show(!1, !1), aW.aBA(), bR.zu.a0e()), af.a6b(player)
	}
}

function cV() {
	this.kl = null, this.kg = 0, this.a4m = function() {
		for (this.kg = 0, aB = aD.ek - 1; 0 <= aB; aB--) 0 !== ag.mj[aB] && this.kg++;
		this.kl = new Uint16Array(this.kg);
		for (var en = 0, aB = 0; aB < aD.ek; aB++) 0 !== ag.mj[aB] && (this.kl[en++] = aB)
	}, this.mP = function() {
		for (var gb = ag.gb, xi = ag.xi, a0g = ag.a0g, kl = al.kl, aB = al.kg - 1; 0 <= aB; aB--) {
			var gL = kl[aB],
				dt = gb[gL],
				l5 = xi[gL];
			dt <= bL.du(l5, 4) ? ak.dm(gL) : l5 <= dt ? 250 <= (xi[gL] = dt) && (a0g[gL] = 1) : xi[gL] = l5 - Math.max(1, bL.du(l5 - dt, 1e3))
		}
		this.aKN()
	}, this.aKN = function() {
		for (var mj = ag.mj, l4 = this.kl, aBs = this.kg, aB = aBs - 1; 0 <= aB; aB--) 0 === mj[l4[aB]] && (l4[aB] = l4[--aBs]);
		this.kg = aBs
	}
}

function cW() {
	var aKO = new Uint16Array(aD.ek),
		aKP = 0;

	function aKT(a6h, aKR) {
		var f8 = bf.k7();
		return 3213 <= f8 ? 4 + bL.du(100 * aKR, ae.jq(a6h)) : (a6h = 1 + bL.du(aD.ju, 300), f8 < 357 ? 2 + bL.du(100 * aKR, a6h) : f8 < 714 ? 2 + bL.du(100 * aKR, 4 * a6h) : f8 < 1071 ? 2 + bL.du(100 * aKR, 10 * a6h) : f8 < 2142 ? 2 + bL.du(100 *
			aKR, 30 * a6h) : 2 + bL.du(100 * aKR, 100 * a6h))
	}

	function aKS(a6h) {
		return aD.kU || 7 <= aD.kS || 4284 <= bf.k7() || bA.g9.jX(a6h)
	}
	this.dd = function() {
		aKO.fill(0), aKP = 15
	}, this.hR = function(p9) {
		var player = aD.eX;
		return !!bA.g9.q2(player, p9) && !(!bA.g9.pS(player, bA.g9.iM(player, aR.hH()), p9) || (player = p9, p9 = bO.fK[0], !aKS(player) && aKO[player] + aKT(player, p9) > aKP))
	}, this.jG = function(a6h, aKR) {
		if (!aKS(a6h)) {
			aKR = aKT(a6h, aKR);
			if (aKO[a6h] + aKR > aKP) return !1;
			aKO[a6h] += aKR
		}
		return !0
	}, this.j3 = function() {
		bf.k7() % 100 == 99 && (bf.k7() < 1071 ? aKP += 4 : bf.k7() < 2142 ? aKP += 6 : bf.k7() < 3213 ? aKP += 8 : aKP += 10)
	}
}

function ce() {
	var aKU;
	this.kb = null, this.ka = 0, this.dd = function() {
		aKU = [], 9 === aD.kS && this.aKV()
	}, this.aKV = function() {
		this.kb = [0, 0, 0, 0, 0, 0];
		for (var aKW = [256, 227, 170, 148, 100, this.ka = 0, 0, 0], aKX = [0, 8, 24, 30, 46, 70, 256, 333], aKY = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kA, aB = 1; aB < aKW.length; aB++)
			if (j <= aKX[aB]) {
				this.ka = aKW[aB - 1] - bL.du((j - aKX[aB - 1]) * (aKW[aB - 1] - aKW[aB]), aKX[aB] - aKX[aB - 1]), this.kb[5] = aKY[aB - 1] - bL.du((j - aKX[aB - 1]) * (aKY[aB - 1] - aKY[aB]), aKX[aB] - aKX[aB - 1]), this.kb[0] = aD.ek - j - this
					.ka - this.kb[5];
				break
			} aD.kW = aD.ek - aD.kA, aD.data.numberTeams = (0 < aD.kA) + (0 < aD.kW), aD.data.playerCount = aD.xE = aD.kA + aD.kW, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kA + this.ka, aD.kW - this.ka]), aD.a4b.a4g()
	}, this.aHl = function(player) {
		aKU.push({
			player: player,
			gG: 14 + ay.jR(20)
		})
	}, this.j3 = function() {
		if (9 === aD.kS)
			for (var aB = aKU.length - 1; 0 <= aB; aB--) --aKU[aB].gG <= 0 && (af.qA(aKU[aB].player, 0, aj.rr.yx + aj.rr.zB), aKU.splice(aB))
	}
}

function dB() {
	function aKo() {
		return {
			ey: bS.ey,
			ez: bS.ez,
			wg: bS.wg,
			wc: bS.wc,
			wd: bS.wd,
			wh: bS.wh,
			eT: bS.eT,
			mapSeed: bS.mapSeed,
			we: bS.we
		}
	}

	function aKg(aB) {
		return 1 !== aB && bS.aDi(aB) && aB !== bS.aKq()
	}
	this.aKa = 24, this.aKb = 12, this.aHw = 4096, this.ey = 0, this.ez = 0, this.wg = null, this.wc = null, this.wd = null, this.wh = null, this.eT = 0, this.mapSeed = 0, this.we = !1, this.wf = new aKc, this.wW = new aKd, this.a6y = new aKe, this
		.dd = function() {
			this.wW.dd()
		}, this.a7 = function(map, aKf) {
			((map %= this.aKa) !== this.eT || aKg(this.eT) && aKf !== this.mapSeed) && (this.we = !1, this.wf.aKh(), ay.a4h(map), this.eT = map, this.mapSeed = aKf, aKg(map) && (bS.wW.wX[map].aKi = aKf), this.aDi(this.eT) ? (map = bS.wW.wX[this.eT],
				this.ey = map.i, this.ez = map.j, ay.a4h(map.aKi), aq.a7([this.ey, this.ez, map.mo, map.ml]), aKk(), ap.aKl(), aq.aKm()) : aKj())
		}, this.aKn = function(map, aKf) {
			var fW = aKo(),
				map = (this.a7(map, aKf), this.wf.aKh(), aKo());
			return aKf = fW, bS.ey = aKf.ey, bS.ez = aKf.ez, bS.wg = aKf.wg, bS.wc = aKf.wc, bS.wd = aKf.wd, bS.wh = aKf.wh, bS.eT = aKf.eT, bS.mapSeed = aKf.mapSeed, bS.we = aKf.we, map
		}, this.a52 = function(canvas) {
			canvas && this.wg !== canvas && (this.ey = canvas.width, this.ez = canvas.height, this.wg = canvas, this.wc = this.wg.getContext("2d", {
				alpha: !1
			}), this.hm = this.wc.getImageData(0, 0, this.ey, this.ez), this.wh = this.hm.data, this.eT = this.aKq(), this.mapSeed = 0, bS.wW.wX[this.eT].name = aD.data.mapName)
		}, this.eS = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aKq()
		}, this.aKr = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aKs = function(aB) {
			return 1 === aB
		}, this.aKq = function() {
			return this.aKa
		}, this.aDi = function(aB) {
			return void 0 === this.wW.wX[aB].aKt
		}, this.a51 = function(qT) {
			return 0 === qT.mapType ? qT.mapProceduralIndex < 10 ? qT.mapProceduralIndex : 10 + qT.mapProceduralIndex : 1 === qT.mapType ? 10 <= qT.mapRealisticIndex ? 22 + qT.mapRealisticIndex - 10 : qT.mapRealisticIndex + 10 : void 0
		}, this.aDj = function(qT, aKu) {
			0 === qT.mapType ? qT.mapProceduralIndex = aKu < 10 ? aKu : aKu - 10 : 1 === qT.mapType && (qT.mapRealisticIndex = aKu - (22 <= aKu ? 12 : 10))
		}
}

function aKc() {
	function aL3() {
		bS.wf.j3()
	}

	function aL9(gL, aL8) {
		0 < aL8 && (bS.wh[gL] += aL8, bS.wh[gL + 1] += aL8, bS.wh[gL + 2] += aL8)
	}

	function i1(gL) {
		return bS.wh[gL + 2] > bS.wh[gL] && bS.wh[gL + 2] > bS.wh[gL + 1]
	}
	this.a9R = -1, this.a1B = 0, this.aKv = 0, this.aKw = 8, this.aKx = 32, this.aKy = 8, this.aKz = 32, this.aL0 = [0, 0], this.a8S = [0, 0, 0, 0], this.iX = null, this.aL1 = !0, this.aL2 = !1, this.aKh = function() {
		-1 !== this.a9R && clearTimeout(this.a9R), this.a9R = -1, this.iX = null, aq.aKm()
	}, this.dd = function() {
		7 === aa.a1K() || this.aL2 || (this.aL1 = !0, this.a1B = 0, this.aKv = 1, this.aL0 = [bS.wW.wX[bS.eT].wy[0], bS.wW.wX[bS.eT].wz[0]], this.a8S = [bS.wW.wX[bS.eT].aKt[3], bS.wW.wX[bS.eT].aKt[4], bS.wW.wX[bS.eT].aKt[5], bS.wW.wX[bS.eT].aKt[
			6]], this.aKw = bS.wW.wX[bS.eT].aKt[7], this.aKx = bS.wW.wX[bS.eT].aKt[8], this.aKy = bS.wW.wX[bS.eT].aKt[9], this.aKz = bS.wW.wX[bS.eT].aKt[10], this.aL1 ? this.a9R = setTimeout(aL3, 16) : this.j3())
	}, this.j3 = function() {
		if (8 === aa.a1K() && aH.n1()) this.a9R = setTimeout(aL3, 16);
		else {
			if (0 === this.a1B) {
				var aKi = ay.aL4();
				if (ay.a4h(bS.wW.wX[bS.eT].aKt[2]), aq.a7([bS.ey, bS.ez, bS.wW.wX[bS.eT].aKt[0], bS.wW.wX[bS.eT].aKt[1]]), ay.a4h(aKi), this.iX = aq.aL5(), this.a1B++, this.aL1) return void(this.a9R = setTimeout(aL3, 16))
			}
			for (var gL, eZ, aKi = this.aL1 ? 10 : 1e6, aKi = bS.ez - this.aKv - 1 < aKi ? bS.ez - this.aKv - 1 : aKi, xv = this.aKv + aKi, ew = this.aKv; ew < xv; ew++)
				for (var eu = 1; eu < bS.ey - 1; eu++) i1(gL = 4 * (eZ = eu + ew * bS.ey)) ? this.aL6(gL, eZ, 1) : (this.aL6(gL, eZ, 0), function(eu, ew, gL) {
					return 1 < eu && i1(gL - 4) || eu < bS.ey - 2 && i1(gL + 4) || 1 < ew && i1(gL - 4 * bS.ey) || ew < bS.ez - 2 && i1(gL + 4 * bS.ey)
				}(eu, ew, gL) && this.aL7(eu, ew));
			this.aKv = xv, this.aKv >= bS.ez - 1 ? (bS.wc.putImageData(bS.wd, 0, 0, 1, 1, bS.ey - 2, bS.ez - 2), bf.dl = !0, this.aKh()) : this.aL1 && (this.a9R = setTimeout(aL3, 16))
		}
	}, this.aL6 = function(gL, eZ, e8) {
		aL9(gL, Math.floor(this.aL0[e8] + this.a8S[e8] * this.iX[eZ] / 1e4) - bS.wh[gL])
	}, this.aLA = function(gL, e7, aLB, e8, a8S) {
		aL9(gL, Math.floor(this.aL0[e8] + (1 - e7 / aLB) * a8S) - bS.wh[gL])
	}, this.aL7 = function(lP, lQ) {
		for (var gL, e7, aLB, a9H = lP - this.aKx, aLC = lQ - this.aKx, xw = lP + this.aKx, xv = lQ + this.aKx, a9H = a9H < 1 ? 1 : a9H, xw = xw > bS.ey - 2 ? bS.ey - 2 : xw, xv = xv > bS.ez - 2 ? bS.ez - 2 : xv, ew = aLC < 1 ? 1 : aLC; ew <=
			xv; ew++)
			for (var eu = a9H; eu <= xw; eu++) i1(gL = 4 * (eu + ew * bS.ey)) ? (aLB = this.aKw + (this.aKx - this.aKw) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lP - eu) > aLB || Math.abs(lQ - ew) > aLB || aLB <= (e7 = Math.sqrt((lP - eu) * (
				lP - eu) + (lQ - ew) * (lQ - ew))) || this.aLA(gL, e7, aLB, 1, this.a8S[3])) : (aLB = this.aKy + (this.aKz - this.aKy) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lP - eu) > aLB || Math.abs(lQ - ew) > aLB || aLB <= (e7 = Math
				.sqrt((lP - eu) * (lP - eu) + (lQ - ew) * (lQ - ew))) || this.aLA(gL, e7, aLB, 0, this.a8S[2]))
	}
}

function aKk() {
	var uT = aLD(bS.eT);
	uT && aLE(uT[0], uT[1], uT[2], uT[3], uT[4])
}

function aLD(eT) {
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

function aLE(aLF, aLG, aLH, aLI, aLJ) {
	for (var eu, ew, aLL, aLM, a2W, aLO, i6 = aLF.length - 1, aLK = bS.ey + bS.ez, en = (aLK *= aLK, aLH.length), aLN = Array(en), aB = en - 1; 0 <= aB; aB--) aLN[aB] = aLH[aB] * aLH[aB];
	var aLP = new Array(en),
		aCU = new Array(en),
		aLQ = new Array(en),
		fF = aq.aL5();
	if (void 0 === aLJ)
		for (aLJ = new Array(en), aB = en - 1; 0 <= aB; aB--) aLJ[aB] = 0;
	for (aB = 1; aB < en; aB++) aLP[aB] = aLN[aB] - aLN[aB - 1], aCU[aB] = aLI[aB] - aLI[aB - 1], aLQ[aB] = aLJ[aB] - aLJ[aB - 1];
	for (eu = bS.ey - 1; 0 <= eu; eu--)
		for (ew = bS.ez - 1; 0 <= ew; ew--) {
			for (aLL = aLK, aB = i6; 0 <= aB; aB--) aLL = (aLM = (eu - aLF[aB]) * (eu - aLF[aB]) + (ew - aLG[aB]) * (ew - aLG[aB])) < aLL ? aLM : aLL;
			for (a2W = aLI[en - 1], aLO = aLJ[en - 1], aB = 1; aB < en; aB++)
				if (aLL < aLN[aB]) {
					a2W = aLI[aB - 1] + aHC((aLL - aLN[aB - 1]) * aCU[aB], aLP[aB]), aLO = aLJ[aB - 1] + aHC((aLL - aLN[aB - 1]) * aLQ[aB], aLP[aB]);
					break
				} aLR(bS.ey * ew + eu, a2W, aLO, fF)
		}
}

function aLR(e8, a2W, aLO, fF) {
	a2W < 500 ? fF[e8] = bL.du(fF[e8] * a2W * 2, 1e3) : 500 < a2W && (fF[e8] += bL.du(2 * (1e4 - fF[e8]) * (a2W - 500), 1e3)), fF[e8] += bL.du(aLO * (10 * a2W - fF[e8]), 1e3)
}

function cg() {
	var aLS;

	function aLc(a2x, ho, eu, ew, globalAlpha) {
		bS.wc.save(), bS.wc.globalAlpha = globalAlpha, bS.wc.imageSmoothingEnabled = !1, bS.wc.scale(ho, ho), bS.wc.drawImage(a2x, Math.floor(eu * (bS.ey / ho - a2x.width)), Math.floor(ew * (bS.ez / ho - a2x.height))), bS.wc.restore()
	}
	this.a6v = 0, this.a6w = 0, this.a6x = 0, this.a6y = 0, this.dd = function() {
		(aLS = new Array(bS.aKa))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e7: [220, 250, 255, 220],
			tE: [190, 220, 0, 0],
			f7: [170, 200, 0, 0]
		}, aLS[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e7: [25, 0, 100, 0, 25],
			tE: [25, 0, 0, 0, 25],
			f7: [25, 0, 0, 0, 25]
		}, aLS[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tE: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aLS[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tE: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aLS[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e7: [10, 10, 20, 10, 10, 170, 212],
			tE: [20, 20, 60, 100, 100, 110, 170],
			f7: [70, 70, 160, 30, 30, 60, 120]
		}, aLS[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tE: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aLS[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e7: [10, 10, 60, 255, 255, 200, 200],
			tE: [10, 10, 60, 255, 255, 200, 200],
			f7: [80, 80, 255, 255, 255, 200, 200]
		}, aLS[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tE: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aLS[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tE: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aLS[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tE: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aLS[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tE: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aLS[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tE: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aKl = function() {
		var aLb, aB, f6, fW, hm = function() {
				var hm;
				return bS.wg = document.createElement("canvas"), bS.wg.width = bS.ey, bS.wg.height = bS.ez, bS.wc = bS.wg.getContext("2d", {
					alpha: !1
				}), hm = bS.wc.getImageData(0, 0, bS.ey, bS.ez), bS.wh = hm.data, hm
			}(),
			i = aLS[bS.eT].i,
			e7 = aLS[bS.eT].e7,
			tE = aLS[bS.eT].tE,
			f7 = aLS[bS.eT].f7,
			fF = aq.aL5(),
			en = i.length - 2,
			aLW = new Array(1 + en),
			aLX = new Array(1 + en),
			aLY = new Array(1 + en),
			aLZ = new Array(1 + en);
		for (f6 = en; 0 <= f6; f6--) aLW[f6] = i[f6 + 1] - i[f6], aLX[f6] = e7[f6 + 1] - e7[f6], aLY[f6] = tE[f6 + 1] - tE[f6], aLZ[f6] = f7[f6 + 1] - f7[f6];
		for (aB = bS.ey * bS.ez - 1; 0 <= aB; aB--)
			for (f6 = en; 0 <= f6; f6--)
				if (fF[aB] >= i[f6]) {
					fW = fF[aB] - i[f6], bS.wh[4 * aB] = e7[f6] + aHC(aLX[f6] * fW, aLW[f6]), bS.wh[4 * aB + 1] = tE[f6] + aHC(aLY[f6] * fW, aLW[f6]), bS.wh[4 * aB + 2] = f7[f6] + aHC(aLZ[f6] * fW, aLW[f6]), bS.wh[4 * aB + 3] = 255;
					break
				} bS.wc.putImageData(hm, 0, 0), bS.aKs(bS.eT) && ab.tI() && bS.aKs(bS.eT) && (hm = ab.aGN("arena"), aLb = ab.aGN("territorial.io"), aLc(hm, 5, .5, .5, .1), aLc(aLb, 2, .5, .45, .1)), bS.we = !0, bf.dl = !0
	}, this.a4k = function() {
		for (var gL, eu, ew, aLd, hd, fY, a6w = 0, i = bS.ey, j = bS.ez, fW = i * j * 4, aLe = aC2, aLf = bS.wh, aB = i - 1; 0 <= aB; aB--) aLe[(gL = aB << 2) + 2] = aLe[fW - gL - 2] = 3;
		for (fW = 4 * i, aB = j - 1; 0 <= aB; aB--) aLe[(gL = aB * fW) + 2] = aLe[gL + fW - 2] = 3;
		for (aLd = i - 1, hd = j - 1, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aLd; eu++) fY = 1 - (aLf[(gL = fW + eu << 2) + 2] > aLf[gL + 1] && aLf[gL + 2] > aLf[gL]), aLe[gL + 2] = 6 - 5 * fY, a6w += fY;
		this.a6v = (i - 2) * (j - 2), this.a6y = 0, bS.eS(bS.eT) && (bS.a6y.aLg(), bS.a6y.aLh(4, 5)), this.a6w = aD.ju = a6w - this.a6y, this.a6x = this.a6v - this.a6w - this.a6y, this.a6x && (bS.a6y.aLh(6, 2), bS.a6y.aLi())
	}
}

function aKj() {
	var qI;
	10 === bS.eT ? qI =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.eT ? qI =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.eT ? qI =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.eT ? qI =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.eT ? qI =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.eT ? qI =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.eT ? qI =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.eT ? qI =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.eT ? qI =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.eT ? qI =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.eT ? qI =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.eT && (qI =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new wP).wR(qI)
}

function aKd() {
	this.wX = null, this.aLj = null, this.aLk = null, this.dd = function() {
		var aLl = [120, 105, 92],
			cos = [12, 12, 60],
			aLm = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aLn = [140, 130, 120],
			aLo = [12, 12, 76],
			aLp = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aLq = [130, 117, 106],
			aLr = [12, 12, 68],
			aLs = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wX = new Array(bS.aKa + 1), this.wX[0] = {
			name: L(133),
			i: 230,
			j: 230,
			mo: 1e3,
			ml: 2e3,
			aKi: 173
		}, this.wX[1] = {
			name: L(134),
			i: 800,
			j: 800,
			mo: 100,
			ml: 50,
			aKi: 43
		}, this.wX[2] = {
			name: L(135),
			i: 512,
			j: 512,
			mo: 128,
			ml: 32,
			aKi: 0
		}, this.wX[3] = {
			name: L(136) + " 1",
			i: 960,
			j: 960,
			mo: 60,
			ml: 8,
			aKi: 0
		}, this.wX[4] = {
			name: L(137),
			i: 900,
			j: 900,
			mo: 100,
			ml: 5,
			aKi: 0
		}, this.wX[5] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mo: 100,
			ml: 40,
			aKi: 0
		}, this.wX[6] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			mo: 100,
			ml: 20,
			aKi: 0
		}, this.wX[7] = {
			name: L(140),
			i: 1024,
			j: 1024,
			mo: 128,
			ml: 32,
			aKi: 0
		}, this.wX[8] = {
			name: L(141),
			i: 820,
			j: 820,
			mo: 200,
			ml: 100,
			aKi: 0
		}, this.wX[9] = {
			name: L(142),
			i: 1024,
			j: 1024,
			mo: 128,
			ml: 32,
			aKi: 0
		}, this.wX[10] = {
			name: L(143),
			wy: aLn,
			wz: aLo,
			aKt: aLp
		}, this.wX[11] = {
			name: L(144),
			wy: aLq,
			wz: aLr,
			aKt: aLs
		}, this.wX[12] = {
			name: L(145),
			wy: aLq,
			wz: aLr,
			aKt: aLs
		}, this.wX[13] = {
			name: L(146),
			wy: aLl,
			wz: cos,
			aKt: aLm
		}, this.wX[14] = {
			name: L(147),
			wy: aLl,
			wz: cos,
			aKt: aLm
		}, this.wX[15] = {
			name: L(148),
			wy: aLn,
			wz: aLo,
			aKt: aLp
		}, this.wX[16] = {
			name: L(149),
			wy: aLn,
			wz: aLo,
			aKt: aLp
		}, this.wX[17] = {
			name: L(150),
			wy: aLl,
			wz: cos,
			aKt: aLm
		}, this.wX[18] = {
			name: L(151),
			wy: aLq,
			wz: aLr,
			aKt: aLs
		}, this.wX[19] = {
			name: L(152),
			wy: aLl,
			wz: cos,
			aKt: aLm
		}, this.wX[20] = {
			name: L(153),
			i: 1024,
			j: 1024,
			mo: 128,
			ml: 32,
			aKi: 0
		}, this.wX[21] = {
			name: L(136) + " 2",
			i: 940,
			j: 940,
			mo: 80,
			ml: 8,
			aKi: 0
		}, this.wX[22] = {
			name: L(154),
			wy: aLq,
			wz: aLr,
			aKt: aLs
		}, this.wX[23] = {
			name: L(155),
			wy: aLn,
			wz: aLo,
			aKt: aLp
		}, this.wX[bS.aKa] = {
			name: ""
		}, this.aLj = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aLj[aB] = aB;
		for (this.aLj[10] = 20, this.aLj[11] = 21, this.aLk = new Uint8Array(bS.aKb), aB = 0; aB < 10; aB++) this.aLk[aB] = 10 + aB;
		this.aLk[10] = 22, this.aLk[11] = 23
	}
}

function aKe() {
	this.aLg = function() {
		for (var gL, eu, fW, aLe = aC2, aLf = bS.wh, i = bS.ey, aLd = i - 1, hd = bS.ez - 1, gG = 0, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aLd; eu++) aLf[gL = fW + eu << 2] === aLf[1 + gL] && aLf[gL] === aLf[2 + gL] && (gG++, aLe[2 + gL] = 4);
		ap.a6y = gG
	}, this.aLh = function(aLt, aLu) {
		for (var aLe = aC2, i = bS.ey, aLd = i - 1, hd = bS.ez - 1, id = 0, ew = 1; ew < hd; ew++)
			for (var fW = ew * i, eu = 1; eu < aLd; eu++) {
				var eR = 2 + (fW + eu << 2);
				aLe[eR] === aLt && (! function(eR, id, aLt, aLu) {
					var en = 1,
						aLe = aC2,
						ep = ac.ep,
						a2j = [eR],
						aLw = id >> 8 << 1,
						aLx = 255 & id;
					aLe[eR - 2] = aLw, aLe[eR - 1] = aLx, aLe[eR] = 5;
					for (; en;) {
						for (var a2k = [], aB = 0; aB < en; aB++)
							for (var ec = a2j[aB], eq = 3; 0 <= eq; eq--) {
								var er = ec + ep[eq];
								aLe[er] === aLt && (aLe[er - 2] = aLw, aLe[er - 1] = aLx, aLe[er] = aLu, a2k.push(er))
							}
						en = (a2j = a2k).length
					}
				}(eR, id, aLt, aLu), id = (id + 1) % 32768)
			}
	}, this.aLi = function() {
		for (var aLe = aC2, i = bS.ey, aLd = i - 3, hd = bS.ez - 3, aLz = 12 * i, ew = 3; ew < hd; ew++)
			for (var fW = ew * i, eu = 3; eu < aLd; eu++) {
				var eR = 2 + (fW + eu << 2);
				2 !== aLe[eR] || 2 === aLe[eR - 12] && 2 === aLe[12 + eR] && 2 === aLe[eR - aLz] && 2 === aLe[eR + aLz] || (aLe[eR - 2] = 1 | aLe[eR - 2])
			}
	}
}

function a4j() {
	(yH = void 0 === yH ? document.createElement("canvas") : yH).width = bS.ey, yH.height = bS.ez, a4n = yH.getContext("2d", {
		alpha: !0
	}), a4o = aC2 = null, a4o = a4n.getImageData(0, 0, bS.ey, bS.ez), aC2 = a4o.data, bA.qj.wi(aC2)
}

function ch() {
	var fF, i, j, max, aM0, ml, aM2, aM3, aM4, aM5, aM6, aM7, aM8, aM9, aM1 = 1e4;

	function aMG(aMF, mo, en) {
		var aB;
		for (aM2[0] = aMF, aB = 1; aB < en; aB++) aM2[aB] = aM2[aB - 1] + mo, mo = aM2[aB] >= aM1 ? (aM2[aB] = aM1 - 1, -mo) : aM2[aB] < 0 ? (aM2[aB] = 0, -mo) : (mo += 16384 <= ay.random() ? ml : -ml) < -aM0 ? -aM0 : aM0 < mo ? aM0 : mo
	}

	function aMI(eu, ew, aMJ, en) {
		(aMJ ? function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB] = aM2[aB]
		} : function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB * i] = aM2[aB]
		})(eu, ew, en)
	}

	function aMM(value, en) {
		var aB, aK1, eR, jP = value - aM2[en - 1];
		if (0 != jP) {
			for (aK1 = 1 + bL.du(Math.abs(jP), en - 1), aK1 = jP < 0 ? -aK1 : aK1, aM2[en - 1] = value, eR = (eR = en - 1 - bL.du(Math.abs(jP), Math.abs(aK1))) < 1 ? 1 : en - 2 < eR ? en - 2 : eR, aB = en - 2; eR <= aB; aB--) aM2[aB] += jP - (en -
				1 - aB) * aK1;
			(jP < 0 ? function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aM2[aB] < 0 && (aM2[aB] = -aM2[aB] - 1)
			} : function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aM2[aB] >= aM1 && (aM2[aB] = 2 * aM1 - aM2[aB] - 1)
			})(en)
		}
	}

	function aMP(a2j, a2k, en) {
		for (var aB = 0; aB < en; aB++) a2j[aB] = a2k[aB]
	}

	function aMQ(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aMR(a5Q, gap, he) {
		aM3.push(a5Q), aM4.push(gap), aM5.push(he)
	}
	this.a7 = function(a3x) {
		! function(a3x) {
			var aB;
			for (i = a3x[0], j = a3x[1], aM0 = a3x[2], ml = a3x[3], fF = new Int16Array(i * j), max = j < i ? i : j, aM2 = new Int16Array(max), aM3 = [], aM4 = [], aM5 = [], aM6 = new Array(i), aM7 = new Array(j), aB = i - 1; 0 <= aB; aB--) aM6[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aM7[aB] = !1;
			aM8 = new Int16Array(i), aM9 = new Int16Array(j)
		}(a3x),
		function(en) {
			var aMF = ay.random() % aM1,
				mo = ay.random() % (2 * aM0 + 1) - aM0;
			aMG(aMF, mo, en)
		}(max), aMP(aM9, aM2, j), aMI(0, 0, !0, i);
		var eu, ew, a3x = fF[0],
			en = max,
			mo = ay.random() % (2 * aM0 + 1) - aM0;
		for (aMG(a3x, mo, en), aMP(aM8, aM2, i), aMI(0, 0, !1, j), aMQ(aM8), aMQ(aM9), aMG(fF[i - 1], aM8[i - 1], j), aMI(i - 1, 0, !1, j), aMG(fF[i * (j - 1)], aM9[j - 1], i), aMM(fF[i * j - 1], i), aMI(0, j - 1, !0, i), aM6[i - 1] = aM6[0] = !
			0, aM7[j - 1] = aM7[0] = !0, aMR(0, i, !0), aMR(0, j, !1), ! function() {
				var aMT, a5Q;
				for (;;) {
					if (aMT = function() {
							var aB, aMT = aM3.length - 1;
							for (aB = aMT - 1; 0 <= aB; aB--) aM4[aB] > aM4[aMT] && (aMT = aB);
							return aMT
						}(), aM4[aMT] < 5) return;
					a5Q = aM3[aMT] + bL.du(aM4[aMT], 2), (aM5[aMT] ? function(eu) {
						var en, aMW, aB, aFn = 0,
							aMX = 0;
						for (; aMX < j - 1;) {
							for (aB = aFn + 1; aB < j; aB++)
								if (aM7[aB]) {
									aMX = aB;
									break
								} en = aMX - aFn + 1, aMG(fF[eu + i * aFn], 0 === aFn ? aM8[eu] : aM2[aMW - 1] - aM2[aMW - 2], en), aMM(fF[aMX * i + eu], en), aMI(eu, aFn, !1, en), aMW = en, aFn = aMX
						}
						aM6[eu] = !0
					} : function(ew) {
						var en, aMW, aB, aFn = 0,
							aMX = 0;
						for (; aMX < i - 1;) {
							for (aB = aFn + 1; aB < i; aB++)
								if (aM6[aB]) {
									aMX = aB;
									break
								} en = aMX - aFn + 1, aMG(fF[ew * i + aFn], 0 === aFn ? aM9[ew] : aM2[aMW - 1] - aM2[aMW - 2], en), aMM(fF[ew * i + aMX], en), aMI(aFn, ew, !0, en), aMW = en, aFn = aMX
						}
						aM7[ew] = !0
					})(a5Q), aMR(a5Q, aM3[aMT] + aM4[aMT] - a5Q, aM5[aMT]), aM4[aMT] = a5Q - aM3[aMT] + 1
				}
			}(), eu = 0; eu < i; eu++)
			if (!aM6[eu])
				for (ew = 0; ew < j; ew++) aM7[ew] || ! function(eu, ew) {
					var value = fF[ew * i + eu - 1] + fF[(ew - 1) * i + eu],
						a79 = 2;
					aM6[eu + 1] && (a79++, value += fF[ew * i + eu + 1]);
					aM7[ew + 1] && (a79++, value += fF[(ew + 1) * i + eu]);
					fF[ew * i + eu] = bL.du(value, a79)
				}(eu, ew)
	}, this.aL5 = function() {
		return fF
	}, this.aKm = function() {
		fF = null
	}
}

function aHC(f6, f7) {
	return 0 <= f6 ? bL.du(f6, f7) : -bL.du(-f6, f7)
}

function jg(fF) {
	return fF * fF
}

function a6O(f6, f7) {
	return f7 < f6 ? f6 : f7
}

function aBW(f6, f7) {
	return f6 < f7 ? f6 : f7
}

function a8m(f6, fF, f7) {
	return fF < f6 ? f6 : f7 < fF ? f7 : fF
}

function aMZ(fF, en) {
	for (var f8 = bL.du(fF + 1, 2), aB = 0; aB < en; aB++) f8 = bL.du(f8 + bL.du(fF, f8), 2);
	return f8
}

function aIX(fF, en) {
	return fF < 1 ? 0 : aMZ(fF, en)
}

function aMa(n9, nA, sx, a8V, nM, nN, sy, tf) {
	return !(n9 + sx <= nM || nA + a8V <= nN || nM + sy <= n9 || nN + tf <= nA)
}

function aMb(n9, nA, sx, a8V, nM, nN, sy, tf) {
	return n9 <= nM && nA <= nN && nM + sy <= n9 + sx && nN + tf <= nA + a8V
}

function wZ(fF) {
	return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
}

function bx() {
	this.du = function(f6, f7) {
		return Math.floor((f6 + .5) / f7)
	}, this.aMc = function(f6, f7) {
		return Math.floor(f6 * (f7 + .5))
	}, this.sqrt = function(fF) {
		return ~~Math.sqrt(fF + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.hv = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aMd = function(fW, fY, fa) {
		return Math.max(Math.min(fW, fY), fa)
	}, this.aMe = function(aMf, aMg, eu, ew) {
		eu -= aMf, aMf = ew - aMg, ew = 0;
		return 0 == eu ? ew = 0 <= aMf ? Math.PI : 0 : (ew = Math.atan(aMf / eu), ew += 0 < eu ? .5 * Math.PI : 1.5 * Math.PI), ew
	}, this.log2 = function(fF) {
		return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
	}, this.log10 = function(fF) {
		return Math.floor(Math.log10(fF + .5))
	}, this.aMi = function(aMj, aMk, aMl, aMm, aMn) {
		return aMl - aMn < aMj && aMj < aMl + aMn && aMm - aMn < aMk && aMk < aMm + aMn
	}, this.xW = function(a9C, a9E) {
		return a9C * a9C + a9E * a9E
	}
}

function dD() {
	this.y = new aMo, this.sq = 0;
	var aMp = new Array(31);

	function aMt() {
		for (var en = aMp.length, aB = 0; aB < en; aB++) aMp[aB] = null
	}
	this.dd = function() {
		for (var aMq, aMr = document.body.firstChild; aMr;) aMq = aMr.nextSibling, !document.body.contains(aMr) || "DIV" !== aMr.tagName && "INPUT" !== aMr.tagName && "BUTTON" !== aMr.tagName || t.removeChild(document.body, aMr), aMr = aMq
	}, this.u = function(e8, aMs, a3x) {
		void 0 === aMs && (aMs = this.sq), bf.dl = !0, 0 === e8 && (0 === aa.a1K() ? e8 = 5 : a0.a1.setState(13)), this.rs(), this.sq === e8 && (aMs = aMp[e8].aMs, aMp[e8] = null), this.sq = e8;
		var l5 = aMp[e8];
		if (!l5 || 4 === e8 || 7 === e8 || 8 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 15 === e8 || 18 === e8 || 20 <= e8 && e8 <= 28 || 32 === e8 || 33 === e8) {
			if (0 === e8) return void aMt();
			1 === e8 ? l5 = new aMu : 2 === e8 ? l5 = new aMv : 3 === e8 ? l5 = new aMw : 4 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 33 === e8 ? l5 = a3x : 5 === e8 ? l5 = new aMx : 6 === e8 ? l5 = new aMy : 7 === e8 ? l5 =
				new aMz(t.y.aN0) : 8 === e8 ? l5 = a3x : 12 === e8 ? l5 = new aN1 : 14 === e8 ? l5 = new aN2 : 15 === e8 ? l5 = new aMz(t.y.aN3) : 16 === e8 ? l5 = new aN4 : 17 === e8 ? l5 = new aN5 : 18 === e8 ? l5 = new aN6 : 19 === e8 ? l5 =
				new aN7 : 20 === e8 ? l5 = new aN8 : 21 === e8 ? l5 = new aN9 : 22 === e8 ? l5 = new aNA : 23 === e8 ? l5 = new aNB : 24 === e8 ? l5 = new aNC : 25 === e8 ? l5 = new aND : 26 === e8 ? l5 = new aNE : 27 === e8 ? l5 = new aNF :
				28 === e8 ? l5 = new aNG : 29 === e8 ? l5 = new aNH : 30 === e8 && (l5 = new aNI), l5.aMs = aMs, aMp[e8] = l5
		}
		l5.show(a3x)
	}, this.a1J = function() {
		this.hZ() && this.aNJ(this.a5A().aMs)
	}, this.aNJ = function(e8) {
		this.hZ() && (aMp[e8] ? (this.rs(), bf.dl = !0, this.sq = e8, aMp[e8].show()) : this.u(e8))
	}, this.rs = function() {
		this.hZ() && aMp[this.sq].rs()
	}, this.x = function() {
		this.hZ() && (aMp[this.sq].rs(), aMt(), this.sq = 0, a0.a1.setState(13))
	}, this.uj = function() {
		var l5;
		this.hZ() && (l5 = aMp[this.sq]).uj && l5.uj()
	}, this.resize = function() {
		if (!this.hZ()) return !1;
		aMp[this.sq].resize()
	}, this.h0 = function(eu, ew) {
		var l5;
		this.hZ() && (l5 = aMp[this.sq]).h0 && l5.h0(eu, ew)
	}, this.a1d = function(eu, ew) {
		var l5;
		this.hZ() && (l5 = aMp[this.sq]).a1d && l5.a1d(eu, ew)
	}, this.a21 = function() {
		var l5;
		this.hZ() && (l5 = aMp[this.sq]).a21 && l5.a21()
	}, this.a1g = function(lP, lQ, deltaY) {
		var l5;
		this.hZ() && (l5 = aMp[this.sq]).a1g && l5.a1g(lP, lQ, deltaY)
	}, this.a2B = function(code) {
		var l5;
		return !!this.hZ() && ((l5 = aMp[this.sq]).a2B && l5.a2B(code), !0)
	}, this.j3 = function() {
		var l5;
		this.hZ() && (l5 = aMp[this.sq]) && l5.j3 && l5.j3()
	}, this.hZ = function() {
		return 0 < this.sq
	}, this.a5A = function() {
		return aMp[this.sq]
	}, this.a5B = function(e8) {
		return aMp[e8]
	}, this.aNK = function() {
		return aMp
	}, this.removeChild = function(aNL, a3S) {
		try {
			aNL.removeChild(a3S)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aMz(data) {
	var aNM, aNN;
	this.show = function() {
		data.aNO && bI.aOI("account", data.so), aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aNN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a1J()
	}), new w(data.aNO ? "🔄 " + L(156) : L(157), function() {
		t.u(8, data.aNO ? t.a5A().aMs : void 0, new sr(25, {
			ss: 0,
			so: data.so,
			sp: data.sp
		}))
	}, 0, 0, 1)]), aNN = new qU(aNM.ua, function() {
		var qW = [];
		qW.push(function() {
				var aNg = new qE,
					a0r = (aNg.qH(L(208)), data.aNy);
				a0r < 1 ? (aNg.qN(L(209)), 0 === data.aNz ? aNg.qJ(L(210)) : 1 === data.aNz ? aNg.qJ(L(211)) : 2 === data.aNz ? aNg.qJ(L(212)) : 3 === data.aNz ? aNg.qJ(L(213)) : 4 === data.aNz ? aNg.qJ(L(214)) : 5 === data.aNz ? aNg.qJ(
					L(215)) : 6 === data.aNz ? aNg.qJ(L(216)) : aNg.qJ(L(217))) : (aNg.qN(L(218)), a0r = a0r < 2 ? L(219) : a0r < 61 ? 2 === a0r ? L(220) : L(221, [a0r - 1]) : a0r < 84 ? 61 === a0r ? L(222) : L(223, [a0r - 60]) :
					a0r < 255 ? 84 === a0r ? L(224) : L(225, [a0r - 83]) : L(226), aNg.qJ(a0r));
				{
					var qK, aNj;
					aNg.qS(new sG), data.aNO && (qK = aNg.qJ(), aNg.qS(new s6([new w(bj.v9.u5(data.so) ? L(227) : L(228), function(e) {
						return bj.v9.vM(data.so) ? (e.textContent = L(227), aNj(1)) : (e.textContent = L(228), aNj(0)), !0
					}).button])), aNj = function(fF) {
						qK.textContent = fF ? L(229) : ""
					}, bj.v9.u5(data.so) && aNj(1), aNg.qS(new sG))
				}
				var rO = new rP({
					value: data.username,
					e8: -1
				});
				rO.e.readOnly = !0, aNg.qS(rO), aNg.qS(new s6([new w(L(174), function(e) {
					return bA.qb.a3P(rO.e), bA.qb.a3Q(e), !0
				}).button])), data.aNO || aNg.qJ(L(230));
				return aNg
			}()),
			function(qW) {
				var aNg, qK, aCH, aO1, aNp;
				data.aNO || ((aNg = new qE).qH(L(231)), (qK = aNg.qJ(data.aO0.length + " / 160")).style.textAlign = "center", aCH = !0, (aO1 = new us(0, 1, function(e) {
					e = e.target.value.length;
					qK.textContent = e + " / 160", 160 < e ? aCH && (aCH = !1, aNp.qv(1), aNp.button.style.color = bB.nj) : aCH || (aCH = !0, aNp.qv(0), aNp.button.style.color = bB.oh)
				})).e.rows = 6, aO1.e.style.fontSize = "1em", aO1.uz(data.aO0), aNg.qS(aO1), aNp = new w(L(232), function() {
					if (!aCH) return !0;
					t.u(8, t.a5A().aMs, new sr(29, {
						ss: 1,
						qI: aO1.v1().substring(0, 160)
					}))
				}, 0, 0, 1), aNg.qS(new s6([aNp.button])), 0 !== data.aO2 && (aNg.qS(new s6([new w(L(1 === data.aO2 ? 234 : 235), function() {
					t.u(8, t.a5A().aMs, new sr(29, {
						ss: 0,
						qI: ""
					}))
				}, 0, 0, 1).button])), aNg.qJ(1 === data.aO2 ? L(236, [data.aO4 - 1]) : L(237, [data.aO4 - 1]))), aNg.qJ(L(233, [data.aO3])), qW.push(aNg))
			}(qW),
			function(qW) {
				var aNg;
				data.aNO && 0 !== data.aO2 && ((aNg = new qE).qH(L(238)), aNg.qL(data.aO0), aNg.qS(new s6([new w(L(239, 0, "Report"), function(e) {
					return b0.y.aNl(0) && (bA.qb.a3Q(e), b0.aNn.aO5({
						ss: 5,
						so: data.so
					})), !0
				}, 0, 0, 1).button])), qW.push(aNg))
			}(qW), qW.push(function() {
				var aNg = new qE,
					aNh = (aNg.qH(L(158)), [L(159), L(160), L(161), L(162), L(163)]),
					e7 = data.aNi;
				aNg.qN(L(164) + bA.ra.a4E(data.vw, .01, 2) + "<br>" + L(165) + (e7 + 1) + " / " + data.vv + "<br>" + L(166) + aNh[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : e7 < 1e3 ? 3 : 4]), data.aNO || (aNg.qJ(L(167)), aNg.qJ(L(168)),
					aNg.qJ(L(169)));
				return aNg
			}()), data.aNO && qW.push(function() {
				var aNg = new qE,
					rO = (aNg.qH(L(170)), new rP({
						value: bj.eK.data[147].value,
						e8: -1
					}, 1, void 0, function(e) {
						bj.s3.s4(147, aNj(e.target.value))
					})),
					aNk = (aNg.qS(rO), new w(L(14), function(e) {
						return rO.e.readOnly && b0.y.aNl(0) && (bA.qb.a3Q(e), aNm(), b0.aNn.aNo({
							ss: 0,
							so: data.so,
							value: parseInt(bj.eK.data[147].value, 10)
						})), !0
					}, 1)),
					aNp = new w(L(171), function(e) {
						return e.textContent === L(171) ? (e.textContent = L(172), rO.e.readOnly = !0, aNk.qv(0), aNk.button.style.color = bB.oh, bj.s3.s4(147, rO.e.value), aNj(bj.eK.data[147].value)) : aNm(), !0
					}),
					qK = (aNg.qS(new s6([aNp.button])), aNg.qJ()),
					aNj = function(fF) {
						qK.innerHTML = t.y.aNq(fF, bj.eK.data[105].value, data.so)
					},
					aNm = function() {
						aNp.button.textContent = L(171), rO.e.readOnly = !1, aNk.qv(1), aNk.button.style.color = bB.nj
					};
				return aNj(bj.eK.data[147].value), aNg.qS(new s6([aNk.button])), aNg
			}());
		qW.push(function() {
			var aNg = new qE,
				rO = (aNg.qH(L(173)), new rP({
					value: data.so,
					e8: -1
				}));
			return rO.e.readOnly = !0, aNg.qS(rO), aNg.qS(new s6([new w(L(174), function(e) {
				return bA.qb.a3P(rO.e), bA.qb.a3Q(e), !0
			}).button])), aNg
		}()), data.aNO || (qW.push(function() {
			var aNg = new qE,
				aNr = (aNg.qH(L(175)), new rP(bj.eK.data[106]));
			return aNr.e.readOnly = !0, aNr.e.type = "password", aNg.qS(aNr), aNg.qS(new s6([new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aNr.e.type = "text") : (e.textContent = L(176), aNr.e.type = "password"), !0
			}).button, new w(L(174), function(e) {
				return bA.qb.a3P(aNr.e), bA.qb.a3Q(e), !0
			}).button])), aNg.qS(new s6([new w(L(178), function() {
				t.u(8, t.a5A().aMs, new sr(15))
			}).button])), aNg.qH(L(179), "0.8em"), aNg.qJ(L(180)), aNg.qJ(L(181)), aNg.qJ(L(182)), aNg
		}()), qW.push(function() {
			var aNg = new qE;
			return aNg.qH(L(183)), aNg.qS(new s6([new w(L(184), function() {
				t.u(6, t.a5A().aMs)
			}).button])), aNg.qS(new s6([new w(L(185), function() {
				bj.s3.s4(105, ""), t.u(8, t.a5A().aMs, new sr(18))
			}).button])), aNg.qS(new s6([new w(L(186) + bj.eK.data[105].value, function() {
				t.u(4, 0, new v(L(187), L(188), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a5B(7).aMs)
				})]))
			}, bB.oO).button])), aNg
		}()), qW.push(function() {
			function aNt(e8) {
				aNs[0].qv(0 === e8 ? bB.nv : bB.o6), aNs[1].qv(0 === e8 ? bB.nv : bB.oO), aNs[2].qv(e8 === qQ.qR.length - 1 || e8 < 5 ? bB.nv : bB.oO)
			}
			var qQ, aNs, aNg = new qE;
			aNg.qH(L(193)), aNg.qJ(L(194)), bj.y.vg();
			return aNs = [new w(L(195), function() {
				var e8 = Math.min(bj.eK.data[117].value, qQ.qR.length - 1);
				e8 < 1 || (e8 = bj.y.vk(e8), bj.s3.s4(105, e8.so), bj.s3.s4(106, e8.password), t.u(8, t.a5A().aMs, new sr(18)))
			}, bB.nv, 1), new w(L(191), function() {
				var e8 = Math.min(bj.eK.data[117].value, qQ.qR.length - 1);
				if (!(e8 < 1)) {
					qQ.qR[e8].remove(), qQ.qR.splice(e8, 1);
					for (var aB = e8; aB < qQ.qR.length; aB++) qQ.qR[aB].name = "" + aB;
					bj.y.vj(e8), e8 = bj.eK.data[117].value, qQ.qR[e8].textContent = qQ.qR[e8].textContent.replace("⚪", "🟢"), aNt(e8)
				}
			}, bB.nv, 1), new w(L(192), function() {
				var e8 = Math.min(bj.eK.data[117].value, qQ.qR.length - 1);
				if (e8 !== qQ.qR.length - 1) {
					for (var aB = qQ.qR.length - 1; e8 < aB; aB--) qQ.qR[aB].remove(), qQ.qR.splice(aB, 1), bj.y.vj(aB);
					aNt(e8)
				}
			}, bB.nv, 1)], qQ = new uP(bj.eK.data[117], aNt), aNt(0), qQ.qR[0].style.marginTop = "0.5em", aNg.qP(qQ), aNg.qS(new s6([aNs[0].button])), aNg.qS(new s6([aNs[1].button])), aNg.qS(new s6([aNs[2].button])), aNg
		}()));
		return qW.push(function() {
				var aNg = new qE,
					aNh = (aNg.qH(L(199)), [L(200), L(201), L(202), L(203)]),
					e7 = data.aNu;
				return aNg.qN(L(204) + (data.a0a / 100).toFixed(2) + "<br>" + L(165) + (e7 + 1) + " / " + data.vv + "<br>" + L(166) + aNh[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : 3]), aNg
			}()), qW.push(function() {
				var aNg = new qE;
				return aNg.qH(L(196)), aNg.qN(L(197) + bA.ra.a4E(data.vs, .1, 1) + "<br>" + L(165) + (data.vt + 1) + " / " + data.vv + "<br>" + L(198) + data.vu), aNg
			}()),
			function(qW) {
				var aNg = new qE,
					aO6 = data.vz,
					aO7 = (aNg.qH(L(240)), aNg.qN(L(241, [data.vx.length ? "[" + data.vx + "]" : "-"])), aNg.qN(L(242, [bA.ra.a4E(aO6, .01, 2)])), aNg.qN(L(243, [data.w1 + 1 + " / " + data.vv])), data.w2),
					aO8 = (aNg.qN(L(244, [bA.ra.a4E(aO7, .1, 1)])), data.w4);
				aNg.qN(L(245, [aO8])), aNg.qN(L(246, [bA.ra.a4E(aO7 / Math.max(aO8, 1), .1, 2)])), aO6 = data.w0, aNg.qH(L(247), "0.8em"), aNg.qN(L(241, [data.vy.length ? "[" + data.vy + "]" : "-"])), aNg.qN(L(242, [bA.ra.a4E(aO6, .01, 2)])),
					aO7 = data.w3, aNg.qN(L(244, [bA.ra.a4E(aO7, .1, 1)])), aO8 = data.w5, aNg.qN(L(245, [aO8])), aNg.qN(L(246, [bA.ra.a4E(aO7 / Math.max(aO8, 1), .1, 2)])), data.aNO || (aNg.qJ(L(248)), aNg.qJ(L(249)));
				qW.push(aNg)
			}(qW),
			function(qW) {
				var aNg = new qE;
				aNg.qH(L(250)), aNg.qN(L(204) + (data.aO9 / 10).toFixed(1) + "<br>" + L(166) + (data.aOA.length ? L(251, [data.aOA]) : L(252))), data.aNO ? (aNg.qS(new s6([new w(L(253), function(e) {
					return b0.y.aNl(0) && (bA.qb.a3Q(e), b0.aNn.aO5({
						ss: 4,
						so: data.so
					})), !0
				}, 0, 0, 1).button])), aNg.qJ(L(254)), aNg.qJ(L(255))) : aNg.qJ(L(256));
				qW.push(aNg)
			}(qW), qW.push(function() {
				var aNg = new qE;
				if (aNg.qH(L(205)), aNg.qN(L(206) + data.aNv + "<br>" + L(165) + (data.aNw + 1) + " / " + data.vv + "<br>" + L(166) + bo.eA(data.aNw)), data.aNO) {
					var rO = new rP({
							value: bj.eK.data[157].value,
							e8: -1
						}, 1, void 0, function(e) {
							bj.s3.s4(157, aNj(e.target.value))
						}),
						aNp = (rO.e.style.marginTop = "0.6em", aNg.qS(rO), new w(L(171), function(e) {
							return e.textContent === L(171) ? (e.textContent = L(172), rO.e.readOnly = !0, aNx[0].qv(0), aNx[1].qv(0), aNx[0].button.style.color = bB.oh, aNx[1].button.style.color = bB.oh, aNj(bj.eK.data[157]
								.value)) : aNm(), !0
						})),
						aNx = (aNg.qS(new s6([aNp.button])), [new w("−", function(e) {
							return rO.e.readOnly && b0.y.aNl(0) && (bA.qb.a3Q(e), aNm(), b0.aNn.aNo({
								ss: 2,
								so: data.so,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rO.e.readOnly && b0.y.aNl(0) && (bA.qb.a3Q(e), aNm(), b0.aNn.aNo({
								ss: 1,
								so: data.so,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qK = aNg.qJ(),
						aNj = function(fF) {
							return fF = bA.g9.a3u(fF, 3, 32767), qK.textContent = L(207, [fF - 1, fF, bj.eK.data[105].value]), fF
						};
					aNg.qS(new s6([aNx[0].button, aNx[1].button]));
					for (var aB = 0; aB < 2; aB++) aNx[aB].button.style.fontSize = "1.6em";
					var aNm = function() {
						aNp.button.textContent = L(171), rO.e.readOnly = !1, aNx[0].qv(1), aNx[1].qv(1), aNx[0].button.style.color = bB.nj, aNx[1].button.style.color = bB.nj
					};
					aNj(bj.eK.data[157].value)
				}
				return aNg
			}()),
			function(qW) {
				var aNg, a3O;
				data.aNO && !data.aOB || (0 === a0.id || data.aNO || data.aOB) && ((aNg = new qE).qH("Patreon"), !data.aNO && data.aOC ? aNg.qS(new s6([new w(L(176), function() {
					b0.aNn.aO5({
						ss: 7,
						so: data.so
					}), data.aOC = 0, t.u(7)
				}).button])) : data.aOB ? (aNg.qN(L(257, [(data.aOD / 100).toFixed(2)]) + "<br>" + L(258, [1 + data.aOE + " / " + data.aOF]) + "<br>" + L(259, [data.aOG ? L(260) : L(261)])), data.aNO || aNg.qS(new s6([new w(L(262),
					function() {
						b0.aNn.aO5({
							ss: 8,
							so: data.so
						}), data.aOB = 0, bj.s3.s4(160, 0), t.u(7)
					}).button]))) : (aNg.qN(L(263), "0.75em").style.marginBottom = "0.3em", aNg.qN("  • " + L(264), "0.75em").style.whiteSpace = "pre", aNg.qN("  • " + L(265), "0.75em").style.whiteSpace = "pre", aNg.qN("  • " + L(
						266), "0.75em").style.whiteSpace = "pre", aNg.qN(L(267), "0.75em").style.marginTop = "1.0em", aNg.qN(L(268), "0.75em").style.marginTop = "1.0em", aNg.qN("<a href='" + bK.aOH +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3O = "https://www.patreon.com/oauth2/authorize?state=" + data.so +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aNg.qN(L(269), "0.75em").style.marginTop = "1.0em", aNg.qN("<a href='" + a3O +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aNO || (aNg.qS(new sG), aNg.qS(new s6([new w(L(177), function() {
						b0.aNn.aO5({
							ss: 6,
							so: data.so
						}), data.aOC = 1, t.u(7)
					}).button])), aNg.qN(L(270), "0.75em").style.marginTop = "0.75em")), qW.push(aNg))
			}(qW),
			function(qW) {
				var aNg, qQ, aNs, e8, aNt;
				data.aNO || bj.v9.get().length && ((aNg = new qE).qH(L(189)), e8 = 0, aNt = function() {
					var aBw = bj.v9.get().length;
					aNs[0].qv(e8 === aBw ? bB.nv : bB.o6), aNs[1].qv(e8 === aBw ? bB.nv : bB.oO), aNs[2].qv(e8 === aBw || aBw - 1 <= e8 || e8 < 5 ? bB.nv : bB.oO)
				}, aNs = [new w(L(190), function() {
					t.u(8, void 0, new sr(25, {
						ss: 0,
						so: bj.v9.get()[e8],
						sp: 0
					}))
				}, bB.nv, 1), new w(L(191), function() {
					bj.v9.vP(e8), qQ.qR[e8].remove(), qQ.qR.splice(e8, 1);
					for (var aB = e8; aB < qQ.qR.length; aB++) qQ.qR[aB].name = "" + aB;
					bj.v9.get().length && (e8 = Math.max(e8 - 1, 0), qQ.qR[e8].textContent = qQ.qR[e8].textContent.replace("⚪", "🟢")), aNt()
				}, bB.nv, 1), new w(L(192), function() {
					for (var hf = qQ.qR.length - 1; e8 < hf; hf--) bj.v9.vP(hf), qQ.qR[hf].remove(), qQ.qR.splice(hf, 1);
					aNt()
				}, bB.nv, 1)], aNt(), (qQ = new uP(bj.v9.vL(), function(aB) {
					e8 = aB, aNt()
				})).qR[0].style.marginTop = "0.5em", aNg.qP(qQ), aNg.qS(new s6([aNs[0].button])), aNg.qS(new s6([aNs[1].button])), aNg.qS(new s6([aNs[2].button])), qW.push(aNg))
			}(qW), qW
	}())
}

function aNA() {
	var aOJ, aOK, aOL, qW;

	function aOM() {
		aOO(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		2 === aD.data.aIncomeType ? (bA.qj.a2n(aOL.v1(), aD.data.aIncomeData, 255), bA.qj.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(271), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), aNg.qP(new uP({
			uT: [L(273), L(274), L(275)],
			value: aD.data.aIncomeType
		}, function(e8) {
			aOO(), 2 !== e8 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ek)), aD.data.aIncomeType = e8, t.u(22)
		})), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg;
		1 === aD.data.aIncomeType && ((aNg = new qE).qH("Value"), aNg.qS(new rP({
			e8: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qW.push(aNg))
	}(qW), function(qW) {
		var aNg;
		2 === aD.data.aIncomeType && ((aNg = new qE).qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.aIncomeData, 4)), aNg.qS(aOL), qW.push(aNg))
	}(qW), qW))
}

function aND() {
	var aOJ, aOK, aOL;

	function aOM() {
		aOO(), 3 !== aD.data.botDifficultyType || bA.qj.a2b(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		3 === aD.data.botDifficultyType && bA.qj.a2n(aOL.v1(), aD.data.botDifficultyData, aE.kL.length - 1)
	}

	function aOT(qW, e8) {
		var aNg = new qE,
			value = (aNg.qH(e8 < 0 ? L(62) : L(61) + " " + bg.a0U[e8 % 9]), 0 <= e8 && (aNg.qN(L(278) + ": " + aD.data.teamPlayerCount[e8]).style.marginBottom = "1em"), e8 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e8]);
		aNg.qP(new uP({
			uT: aE.kL,
			value: value
		}, function(hf) {
			e8 < 0 ? aD.data.botDifficultyValue = hf : aD.data.botDifficultyTeam[e8] = hf
		})), qW.push(aNg)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(62), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, function() {
		var qW = [];
		if (function(qW) {
				var aNg = new qE,
					uT = (aNg.qH(L(272)), [L(274), L(276), L(277), L(275)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uT.splice(2, 1));
				aNg.qP(new uP({
					uT: uT,
					value: value
				}, function(e8) {
					aOO(), aD.data.botDifficultyType = e8, 0 === aD.data.gameMode && 2 === e8 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ek)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qW.push(aNg)
			}(qW), 0 === aD.data.botDifficultyType) aOT(qW, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aOT(qW, aB);
		else 3 === aD.data.botDifficultyType && ! function(qW) {
			var aNg = new qE;
			aNg.qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.botDifficultyData, 8)), aNg.qS(aOL), qW.push(aNg)
		}(qW);
		return qW
	}())
}

function aOU(data) {
	var aNM, aOV, aOW, aOX, aOY, aOZ, aOa, colors, aOb, aOc, aOd = 0,
		aOe = 0,
		aOf = !1,
		aOg = !1,
		aOh = [1, 5, 60, 240, 1440, 10080, 43200];

	function aPB(lP, lQ) {
		! function(lP, lQ) {
			return aOV < lP && lP < aOV + aOX && aOW < lQ && lQ < aOW + aOY
		}(aOd = lP, aOe = lQ) ? (aOf && (bf.dl = !0), aOf = !1) : (aOf = !0, bf.dl = !0)
	}
	this.show = function() {
		aOg = bj.eK.data[127].value, aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize();
		var f8 = h.k,
			ui = aNM.uf(),
			aOq = f8 * ui.uh,
			f8 = f8 * ui.rv;
		aOZ = bA.qb.tF(.06), aOa = bA.qb.tF(.04), aOV = bA.qb.tF(.06), aOW = f8 + aOZ, aOX = h.i - aOV - aOa, aOY = aOq + f8 - aOW - aOa
	}, this.uj = function() {
		aNM.uj(),
			function() {
				var aB, aOn, gG, eu, f6, g = data.data,
					aOu = 1,
					aOv = .125,
					aOw = aOg ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aOn = g[aB].aOn, gG = aOn.length, aOu = Math.max(gG, aOu), f6 = 0; f6 < gG; f6++) aOv = Math.max(aOn[f6], aOv), aOw = Math.min(aOn[f6], aOw);
				var nA = aOW + aOY,
					y5 = aOY / (aOv - aOw),
					y4 = 1 / (aOu - 1);
				for (uk.lineWidth = bc.z7, aB = 0; aB < g.length; aB++) {
					for (aOn = g[aB].aOn, gG = aOn.length, eu = aOV, uk.beginPath(), uk.moveTo(eu + aOX, nA - y5 * (aOn[gG - 1] - aOw)), f6 = gG - 2; 0 <= f6; f6--) uk.lineTo(eu + y4 * f6 * aOX, nA - y5 * (aOn[f6] - aOw));
					uk.strokeStyle = colors[aB], uk.stroke()
				}(function(aOw, aOv, nA, y5) {
					uk.font = bA.qb.sQ(0, .25 * aOV), bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 2), uk.fillStyle = colors[0];
					for (var eu = .92 * aOV, aB = 0; aB < 3; aB++) {
						var fF = aOw + aB * (aOv - aOw) / 2;
						uk.fillText((fF / 1e3).toFixed(3), eu, nA - y5 * (fF - aOw))
					}
				})(aOw, aOv, nA, y5),
				function(aOu) {
					var ew = aOW + aOY + .15 * aOa;
					uk.font = bA.qb.sQ(0, Math.min(.4 * aOa, .028 * h.i)), bA.qb.textBaseline(uk, 0), bA.qb.textAlign(uk, 2), uk.fillStyle = colors[0], uk.fillText(bA.a2S.a3F(aOb), aOV + aOX, ew), bA.qb.textAlign(uk, 0), uk.fillText(bA.a2S.a3F(
						new Date(aOc.getTime() - 6e4 * (aOu - 1) * aOh[data.aOm])), aOV, ew)
				}(aOu),
				function(aOu, aOw, aOv) {
					if (aOf && !(aOu < 2)) {
						for (var a8d, e8 = (aOd - aOV) / aOX * (aOu - 1), aOz = Math.floor(e8), aP0 = Math.floor(1 + e8), aP1 = e8 - aOz, aP2 = 1e5, aP3 = -1, aP4 = -1, aP5 = aOv - (aOv - aOw) * (aOe - aOW) / aOY, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aCU, aOn = g[aB].aOn;
							aOn.length <= aP0 || (aOn = aOn[aOz] + aP1 * (aOn[aP0] - aOn[aOz]), (aCU = Math.abs(aP5 - aOn)) < aP2 && (aP2 = aCU, aP3 = aB, aP4 = aOn))
						} - 1 !== aP3 && (aOv = aOW + aOY - (aP4 - aOw) / (aOv - aOw) * aOY, uk.lineWidth = .5 * bc.z7, uk.strokeStyle = colors[aP3], uk.beginPath(), uk.moveTo(aOV, aOv), uk.lineTo(aOd, aOv), uk.lineTo(aOd, aOW + aOY), uk
						.stroke(), uk.beginPath(), uk.arc(aOd, aOv, .1 * aOV, 0, 2 * Math.PI), uk.fillStyle = colors[aP3], uk.fill(), aOw = aOW + aOY + .15 * aOa, bA.qb.textAlign(uk, 1), a8d = aOu - 2 < e8 ? (a8d = aOc.getTime() - 6e4 * aOh[
								data.aOm], new Date(a8d + (e8 - (aOu - 2)) * (aOb.getTime() - a8d))) : new Date(aOc.getTime() - 6e4 * (aOu - e8 - 1) * aOh[data.aOm]), aOu = bA.a2S.a3F(a8d), e8 = bA.qb.measureText(aOu), a8d = bL.hv(aOd, aOV +
								.5 * e8, aOV + aOX - .5 * e8), uk.fillStyle = bA.color.nb(70, 50, 20), uk.fillRect(a8d - .52 * e8, aOW + aOY, 1.04 * e8, .55 * aOa), uk.fillStyle = colors[0], uk.fillText(aOu, a8d, aOw), uk.font = bA.qb.sQ(0,
								.25 * aOV), bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 2), a8d = .92 * aOV, aOu = (aP4 / 1e3).toFixed(3), e8 = bA.qb.measureText(aOu), aOw = a8d - 1.04 * e8, uk.fillStyle = bA.color.nb(70, 50, 20), uk
							.fillRect(aOw, aOv - .1625 * aOV, aOV - aOw, .275 * aOV), uk.fillStyle = colors[aP3], uk.fillText(aOu, a8d, aOv))
					}
				}(aOu, aOw, aOv)
			}(), uk.lineWidth = bc.z7, uk.strokeStyle = bB.nj, uk.beginPath(), uk.moveTo(aOV, aOW), uk.lineTo(aOV, aOW + aOY), uk.lineTo(aOV + aOX, aOW + aOY), uk.stroke();
		var aB, fontSize = .5 * aOZ,
			g = (uk.font = bA.qb.sQ(0, fontSize), bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 0), data.data),
			en = g.length,
			ew = aOW - .5 * aOZ,
			qI = "";
		for (aB = 0; aB < en; aB++) qI += g[aB].name + "  ";
		qI = qI.trim();
		var aP8 = bA.qb.measureText(qI),
			eu = .5 * (h.i - aP8);
		for (aP8 > h.i && (eu = 0, uk.font = bA.qb.sQ(0, h.i / aP8 * fontSize)), aB = 0; aB < en; aB++) uk.fillStyle = colors[aB], uk.fillText(g[aB].name, eu, ew), eu += bA.qb.measureText(g[aB].name + "  ")
	}, this.h0 = function(lP, lQ) {
		aPB(lP, lQ)
	}, this.a1d = function(lP, lQ) {
		aPB(lP, lQ)
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	};
	var aB, dt, a3D, hf, eq = data.data,
		en = eq.length,
		max = 1;
	for (aB = 0; aB < en; aB++) max = Math.max(max, eq[aB].aOn.length);
	for (aB = 0; aB < en; aB++)
		for (; eq[aB].aOn.length < max;) eq[aB].aOn.unshift(0);
	dt = new Date, a3D = 6e4 * dt.getTimezoneOffset(), hf = dt.getTime() - a3D, aOb = new Date(hf), 6 === data.aOm ? function(dt, a3D) {
		var aOp = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aOc = dt < 12 ? new Date(Date.UTC(aOp, dt) - a3D) : new Date(Date.UTC(aOp + 1, 0) - a3D)
	}(dt, a3D) : (a3D = 6e4 * aOh[data.aOm], aOc = data.aOm <= 4 ? new Date(hf + a3D - dt.getTime() % a3D) : new Date(hf + a3D - (dt.getTime() + 2592e5) % a3D)), hf = bA.color, colors = [bB.nj, hf.nb(255, 0, 0), hf.nb(0, 200, 0), hf.nb(80, 80,
		255), hf.nb(255, 255, 0), hf.nb(255, 0, 255), hf.nb(0, 255, 255), hf.nb(255, 140, 0), hf.nb(128, 128, 128), hf.nb(0, 255, 140)], aNM = new uU(L(279) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aOm] + ", " + bA.a2S.a3C(aOb), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(280), function() {
			t.u(14)
		})
	], !1)
}

function aN2() {
	var aNM, aNN, qW;
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aNN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(L(281), [new w("⬅️ " + L(37), function() {
		t.aNJ(13)
	})]), aNN = new qU(aNM.ua, ((qW = []).push(function() {
		var aNg = new qE,
			aNp = (aNg.qH(L(282)), aNg.qJ(L(283)), new w(L(284), function() {
				bj.s3.s4(130, 0), t.y.aPG()
			}, 0, 0, 1)),
			rO = new rP(bj.eK.data[126], 0, function() {
				aNp.button.click()
			});
		return aNg.qS(rO), rO.e.placeholder = "a,b,c", rO.e.style.marginTop = "0.5em", aNg.qS(new s6([aNp.button])), aNg
	}()), qW.push(function() {
		var aNg = new qE,
			aNp = new w(L(284), function() {
				bj.s3.s4(130, 1), t.y.aPG()
			}, 0, 0, 1),
			aPH = new rP(bj.eK.data[129], 1, function() {
				aPH.e.focus()
			}),
			aPI = new rP(bj.eK.data[128], 1, function() {
				aNp.button.click()
			});
		return aNg.qH(L(285)), aNg.qS(aPI), aPI.e.style.marginBottom = "0.5em", aNg.qH(L(286)), aNg.qS(aPH), aNg.qS(new s6([aNp.button])), aNg
	}()), qW.push(function() {
		var aNg = new qE;
		return aNg.qH(L(287)), bj.eK.data[125].uT = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aNg.qP(new uP(bj.eK.data[125])), aNg
	}()), qW.push(function() {
		var aNg = new qE;
		return aNg.qH(L(288)), aNg.qS(new s0(bj.eK.data[127], L(289))), aNg
	}()), qW))
}

function aN1() {
	var aNM, aPJ, aOX, aPK, aPL, aPM, colors = [0, 0, 0],
		aPN = -1;

	function aPQ(aB) {
		var aPR = aPJ.ew + aB * (bc.gap + aPM);
		uk.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", uk.fillRect(aPK, aPR, colors[aB] * aPL, aPM), uk.strokeStyle = bB.nj, uk.strokeRect(aPK, aPR, aPL,
			aPM), uk.fillStyle = bB.nj, uk.font = bA.qb.sQ(0, .32 * aPM), bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 0), uk.fillText(L(0 === aB ? 292 : 1 === aB ? 293 : 294) + aPO(aB), aPK + bc.gap, aPR + .53 * aPM)
	}

	function aPO(aB, aPS) {
		return aPS = aPS || 256, bL.hv(Math.floor(aPS * colors[aB]), 0, aPS - 1)
	}

	function a27(lP, lQ) {
		return !(lP < aPK || lQ < aPJ.ew || lP > aPJ.eu + aPJ.i || lQ > aPJ.ew + aPJ.j)
	}
	this.show = function() {
		var fF = bj.eK.data[121].value;
		colors[0] = (fF >> 12) / 63, colors[1] = (fF >> 6 & 63) / 63, colors[2] = (63 & fF) / 63, aNM.show(), this.resize()
	}, this.rs = function() {
		bj.s3.s4(121, (aPO(0, 64) << 12) + (aPO(1, 64) << 6) + aPO(2, 64)), aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aPJ.resize();
		var f8 = h.k,
			ui = aNM.uf(),
			aPP = (aPJ.ew = Math.max(aPJ.ew, f8 * ui.rv + bc.gap), f8 * ui.uh - 2 * bc.gap);
		aPJ.j = Math.min(aPJ.j, aPP), aPJ.i = 2 * aPJ.j, aPJ.ew = f8 * ui.rv + .5 * (f8 * ui.uh - aPJ.j), aPJ.eu = .5 * (h.i - aPJ.i), aOX = .25 * aPJ.i, aPK = aPJ.eu + aOX + bc.gap, aPL = aPJ.i - aOX - bc.gap, aPM = (aPJ.j - 2 * bc.gap) / 3
	}, this.uj = function() {
		var e7, tE, f7;
		aNM.uj(), uk.lineWidth = bc.z7, e7 = aPO(0), tE = aPO(1), f7 = aPO(2), uk.fillStyle = "rgb(" + e7 + "," + tE + "," + f7 + ")", uk.fillRect(aPJ.eu, aPJ.ew, aOX, aPJ.j), uk.strokeStyle = bB.nj, uk.strokeRect(aPJ.eu, aPJ.ew, aOX, aPJ.j), uk
			.fillStyle = e7 + tE + f7 < 306 && tE < 150 ? bB.nj : bB.na, bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 1), uk.font = bA.qb.sQ(0, .1 * aPJ.j), uk.rotate(-Math.PI / 2), uk.fillText(L(291), -aPJ.ew - .5 * aPJ.j, aPJ.eu + .5 * aOX),
			uk.setTransform(1, 0, 0, 1, 0, 0), aPQ(0), aPQ(1), aPQ(2)
	}, this.h0 = function(lP, lQ) {
		a27(lP, lQ) && (aPN = bL.hv(Math.floor((lQ - aPJ.ew) / (aPM + .75 * bc.gap)), 0, 2), colors[aPN] = bL.hv((lP - aPK) / aPL, 0, 1), bf.dl = !0)
	}, this.a1d = function(lP) {
		-1 !== aPN && (colors[aPN] = bL.hv((lP - aPK) / aPL, 0, 1), bf.dl = !0)
	}, this.a1g = function(lP, lQ, deltaY) {
		a27(lP, lQ) && (lP = bL.hv(Math.floor((lQ - aPJ.ew) / (aPM + .75 * bc.gap)), 0, 2), colors[lP] = bL.hv(colors[lP] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a21 = function() {
		0 <= aPN && (aPN = -1, bf.dl = !0)
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(L(290), [new w("⬅️ " + L(37), function() {
		t.y.aCO()
	})], !1), aPJ = new rC([.5, .25], [.5, .5], 1)
}

function aN9() {
	var aOJ, aOK, aOL, rA;

	function aOM() {
		aOO(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aNK()[19] = null, t.a1J()
	}

	function aPT() {
		aOO(), t.u(21)
	}

	function aOO() {
		1 === aD.data.gameMode ? aD.a4b.a4g() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qj.a2n(aOL.v1(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, rA = [new w("⬅️ " + L(37), aOM)], 1 === aD.data.gameMode && rA.push(new w(L(295), aPT, 1, 1)), aOJ = new uU(L(296), rA), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), 0 === aD.data.gameMode && (aNg.qP(new uP({
			uT: [L(297), L(275)],
			value: aD.data.colorsType
		}, function(e8) {
			aOO(), aD.data.colorsType = e8, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ek || (aD.data.colorsData = new Uint32Array(aD.ek)), t.u(21)
		})), aNg.qS(new sG));
		aNg.qS(new s0({
			value: aD.data.selectableColor
		}, L(298), function(value) {
			aD.data.selectableColor = value
		})), qW.push(aNg)
	}(rA = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qW) {
		var aNg = new qE;
		aNg.qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.colorsData, 1)), aNg.qS(aOL), qW.push(aNg)
	}(rA) : (aD.a4b.a4g(), rA.push(function() {
		var aNg = new qE;
		aNg.qH(L(278));
		for (var aB = 0; aB < bg.a0U.length; aB++) {
			var hf = (aB + 1) % bg.a0U.length,
				e = aNg.qN((0 == hf ? "" : "Team ") + bg.a0U[hf]);
			aB && (e.style.marginTop = "0.5em"), aNg.qS(new rP({
				e8: -1,
				value: aD.data.teamPlayerCount[hf]
			}, 1, 0, function(e) {
				aOJ.ub[1].qv(0);
				var playerCount = bL.hv(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aPV] = playerCount
			})).e.aPV = hf
		}
		return aNg
	}())), rA))
}

function sr(id, a3x, aPW) {
	var aNM, aPX;

	function aPc() {
		aPX.qX.innerHTML += "<br>" + L(301)
	}

	function aPn() {
		var f7 = 1;
		t.u(4, 1, new v(L(302), L(303), !1, [new w("🔄 Reload", function() {
			f7 && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), f7 = 0
		}, bB.o6)]))
	}

	function aPb() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.s3.s4(110, bF.st.su(bF.st.sv(8))), b0.aNn.aPq()
	}
	this.aPY = !0, this.aPZ = id, this.show = function() {
		aNM.show(), this.resize(), 15 === id ? (b0.y.aPa(id) ? aPb : aPc)() : 16 === id ? b0.y.aPa(id) ? b0.aCK.aPd(2) : aPc() : 17 === id ? b0.y.aPa(id) ? b0.aCK.aPd(3) : aPc() : 18 === id ? (b0.y.close(0, 3253), b0.y.aG5(0, id), aPc()) : 21 ===
			id ? b0.y.aPa(id) ? b0.aPe.aPf(a3x.t9, a3x.tA, a3x.tB) : aPc() : 22 === id ? b0.y.aPa(id) ? b0.aPe.aPg(a3x.t9, a3x.aPh, a3x.aPi) : aPc() : 23 === id ? b0.y.aPa(id) ? b0.aPe.aPj(a3x.aOm, a3x.a0o) : aPc() : 24 === id ? b0.y.aPa(id) ? b0
			.aPe.aPk(a3x.aOm, a3x.tA, a3x.tB) : aPc() : 25 === id ? b0.y.aPa(id) ? b0.aNn.aO5(a3x) : aPc() : 28 === id ? b0.y.aPa(id) ? b0.aPe.aPl(a3x.t9, a3x.aPh, a3x.aPi) : aPc() : 29 === id ? b0.y.aPa(id) ? b0.aNn.aPm(a3x) : aPc() : 30 ===
			id && (b0.y.aPa(id) ? b7.aCI() || aPn() : aPc())
	}, this.aPo = function() {
		15 === id ? aPb() : 16 === id ? b0.aCK.aPd(2) : 17 === id ? b0.aCK.aPd(3) : 18 === id ? t.u(8, this.aMs, new sr(16)) : 21 === id ? b0.aPe.aPf(a3x.t9, a3x.tA, a3x.tB) : 22 === id ? b0.aPe.aPg(a3x.t9, a3x.aPh, a3x.aPi) : 23 === id ? b0.aPe
			.aPj(a3x.aOm, a3x.a0o) : 24 === id ? b0.aPe.aPk(a3x.aOm, a3x.tA, a3x.tB) : 25 === id ? b0.aNn.aO5(a3x) : 28 === id ? b0.aPe.aPl(a3x.t9, a3x.aPh, a3x.aPi) : 29 === id ? b0.aNn.aPm(a3x) : 30 === id ? b7.aCI() || aPn() : 1e3 === id && (
				this.aPZ = id = 25, b0.aNn.aO5(a3x))
	}, this.aCN = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aMs) : 17 === code ? (b0.y.close(0, 3252), bj.y.vj(0), bj.eK.data[117].uT && 0 < bj.eK.data[117].uT.length ? (bu = bj.y.vk(0), bj.s3.s4(105, bu.so), bj.s3.s4(106, bu
			.password), t.u(8, this.aMs, new sr(16))) : (bj.s3.s4(105, ""), t.y.aCO())) : 21 === code ? t.u(10, this.aMs, new aPp(data)) : 23 === code ? t.u(13, this.aMs, new aOU({
			data: data,
			aOm: a3x.aOm
		})) : 25 === code ? (t.y.aN3.so = a3x.so, bj.v9.mW(a3x.so), t.u(15, this.aMs)) : 30 === code && (data ? t.u(1) : aPn()))
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aPX.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(L(299), [new w("⬅️ " + L(37), function() {
		aPW ? t.u(29) : t.y.aCO()
	})]), aPX = new s5(aNM.ua, L(300))
}

function aN7() {
	var aOJ, aOK, qW;

	function aPt() {
		var gG;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4b.a4g()), gG = bA.qj.a2h(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gG) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aOM() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aPv(), aD.data.canvas = null, t.u(5, 5)
	}

	function aPv() {
		b9.pv.dd(), bj.s3.s4(156, b9.a4s.zb())
	}

	function aPr() {
		aD.data.isReplay = 0, aPv(), aD.a4b.a53(), aa.aGG(), aD.a4b.a50(), aD.data.canvas = 2 === aD.data.mapType ? bS.wg : null, aD.a4f(), aD.a4d = 1
	}

	function aQ7() {
		aPt();
		for (var g = [aPy(), aPz(), aQ0()], aB = 3; aB < 6; aB++) t.removeChild(aOK.qX, aOK.qY[aB].qG), aOK.qY[aB] = g[aB - 3], aOK.qX.appendChild(aOK.qY[aB].qG);
		aOK.resize()
	}

	function aPy() {
		var aQ8, aNg = new qE;
		return aNg.qH(L(296)), aQ8 = 0 === aD.data.gameMode ? [L(297), L(275)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aNg.qN(aQ8), aNg.qS(new s6([new w(L(307), function() {
			t.u(21)
		}).button])), aNg
	}

	function aPz() {
		var aNg = new qE,
			g = (aNg.qH(L(62)), [L(274) + ": " + aE.kL[aD.data.botDifficultyValue], L(276), L(277), L(275)]);
		return aNg.qN(g[aD.data.botDifficultyType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(25)
		}).button])), aNg
	}

	function aQ0() {
		var aNg = new qE,
			g = (aNg.qH("Spawning"), [L(297), L(309), L(275)]);
		return aNg.qN(g[aD.data.spawningType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(24)
		}).button])), aNg
	}
	this.show = function() {
		aOJ.show(), this.resize(), aOJ.ua.scrollTop = t.y.aIA[0]
	}, this.rs = function() {
		t.y.aIA[0] = aOJ.ua.scrollTop, aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU("🔧 " + L(304), [new w("⬅️ " + L(37), aOM), new w(L(305), aPr)]), aPt(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.wg : 1 === aD.data.mapType ? aD.data.canvas = bS.aKn(bS.a51(aD.data), 0).wg : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aKn(bS.a51(aD.data), aD.data.mapSeed).wg)), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE,
			a2x = (aNg.qH(L(306)), aD.data.canvas);
		a2x.style.width = "100%", aNg.qS({
			e: a2x
		}), aNg.qS(new s6([new w(L(307), function() {
			t.u(20)
		}).button])), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg = new qE;
		aNg.qH(L(278)), aNg.qS(new rP({
			e8: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.hv(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qj.a2h(aD.data.teamPlayerCount, 0), aD.a4b.a4g(), bA.qj.a2h(aD.data.teamPlayerCount, 0) !== e) && aQ7()
		})), qW.push(aNg)
	}(qW), function(qW) {
		var aNg = new qE;
		aNg.qH(L(308)), aNg.qP(new uP({
			uT: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e8) {
			aD.data.gameMode !== e8 && (aD.data.gameMode = e8, aQ7())
		})), qW.push(aNg)
	}(qW), qW.push(aPy()), qW.push(aPz()), qW.push(aQ0()), function(qW) {
		var aNg = new qE,
			g = (aNg.qH(L(310)), [L(311), L(312), L(275)]);
		aNg.qN(g[aD.data.playerNamesType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(23)
		}).button])), qW.push(aNg)
	}(qW), function(qW) {
		var aNg = new qE,
			g = (aNg.qH(L(271)), [L(273), L(274) + ": " + aD.data.aIncomeValue, L(275)]);
		aNg.qN(g[aD.data.aIncomeType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(22)
		}).button])), qW.push(aNg)
	}(qW), function(qW) {
		var aNg = new qE,
			g = (aNg.qH(L(313)), [L(273), L(274) + ": " + aD.data.tIncomeValue, L(275)]);
		aNg.qN(g[aD.data.tIncomeType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(26)
		}).button])), qW.push(aNg)
	}(qW), function(qW) {
		var aNg = new qE,
			g = (aNg.qH(L(314)), [L(273), L(274) + ": " + aD.data.iIncomeValue, L(275)]);
		aNg.qN(g[aD.data.iIncomeType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(27)
		}).button])), qW.push(aNg)
	}(qW), function(qW) {
		var aNg = new qE,
			g = (aNg.qH(L(315)), [L(273), L(274) + ": " + aD.data.sResourcesValue, L(275)]);
		aNg.qN(g[aD.data.sResourcesType]), aNg.qS(new s6([new w(L(307), function() {
			t.u(28)
		}).button])), qW.push(aNg)
	}(qW), function(qW) {
		var aNg = new qE;
		aNg.qH(L(316)), aNg.qS(new s6([new w(L(317), function() {
			t.x(), aD.a4b.a54(), t.y.aIA[0] = 0, t.u(19)
		}).button])), aNg.qS(new s6([new w(L(318), function() {
			bm.aHz()
		}).button])), aNg.qS(new s6([new w(L(319), function() {
			return bm.aI1(), !0
		}).button])), qW.push(aNg)
	}(qW), qW))
}

function aNI() {
	var aOJ, rU = !0;

	function rl(rk, a58) {
		var qG = document.createElement("div"),
			aQA = document.createElement("span"),
			aQB = document.createElement("span");
		aQA.textContent = aW.aBC(a58.eM) + ":", aQA.style.color = bB.ny, aQA.style.paddingRight = "0.4em", aQA.style.display = "table-cell", aQA.style.width = "6ch", aQA.style.textAlign = "end", qG.appendChild(aQA), aQB.textContent = a58.qI, qG
			.appendChild(aQB), qG.style.display = "table", a58.pK && function(qG, pK) {
				{
					var aHv;
					pK >= 1024 - aj.rr.yu ? ((aHv = document.createElement("img")).src = aj.wj.yi[pK - 1024 + aj.rr.yu].toDataURL(), aHv.style.width = "1.5em", aHv.style.height = "1.5em", aHv.style.verticalAlign = "middle", qG.appendChild(aHv)) : ((
						aHv = document.createElement("span")).textContent = aj.rr.z9(pK), aHv.style.display = "inline-block", aHv.style.fontSize = "1.5em", aHv.style.lineHeight = "1em", aHv.style.verticalAlign = "middle", qG.appendChild(aHv))
				}
			}(qG, a58.pK), rk.appendChild(qG)
	}

	function ro() {
		rU && (aOJ.ua.scrollTop = aOJ.ua.scrollHeight)
	}
	this.clear = function() {
		aOJ.ua.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a61 = bq.a5C(), en = a61.length, rk = document.createDocumentFragment(), aB = 0; aB < en; aB++) rl(rk, a61[aB]);
		aOJ.ua.appendChild(rk), ro(), aOJ.show(), this.resize(), rU = !0, ro()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOJ.ua.style.padding = "0.4em " + bA.qb.qk(bc.qh)
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, this.yb = function(a58) {
		var rk = document.createDocumentFragment();
		rl(rk, a58), aOJ.ua.appendChild(rk), ro()
	}, (aOJ = new uU(L(320), [new w("⬅️ " + L(37), function() {
		t.aNJ(1)
	})])).ua.style.overflowY = "auto", aOJ.ua.addEventListener("scroll", function() {
		rU = aOJ.ua.scrollTop >= aOJ.ua.scrollHeight - aOJ.ua.clientHeight - 2
	})
}

function aNF() {
	var aOJ, aOK, aOL, qW;

	function aOM() {
		aOO(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		2 === aD.data.iIncomeType && bA.qj.a2n(aOL.v1(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(314), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), aNg.qP(new uP({
			uT: [L(273), L(274), L(275)],
			value: aD.data.iIncomeType
		}, function(e8) {
			aOO(), 2 !== e8 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ek), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e8, t.u(27)
		})), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg;
		1 === aD.data.iIncomeType && ((aNg = new qE).qH("Value"), aNg.qS(new rP({
			e8: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qW.push(aNg))
	}(qW), function(qW) {
		var aNg;
		2 === aD.data.iIncomeType && ((aNg = new qE).qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.iIncomeData, 4)), aNg.qS(aOL), qW.push(aNg))
	}(qW), qW))
}

function aMx() {
	var aQD, aQE, aPJ, rO, aQF;
	this.aGo = new sz, aPJ = new rC([.45, .27], [.5, .5], 2 / 3), aQE = [new w("⚔️<br>" + L(321), function() {
			aQG(0)
		}, bB.oC), new w("🗡️<br>" + L(304), function() {
			aQG(1)
		}, bB.oU), new w("🔑<br>" + L(322), function() {
			aQG(2)
		}, bB.om), new w("☰<br>" + L(323), function() {
			aQG(3)
		}, bB.nw), new w("", function() {
			t.u(12)
		}, bB.nf, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rO = new rP(bj.eK.data[122]);
	for (var aB = 0; aB < aQE.length; aB++) aQE[aB].button.style.position = "absolute";

	function aQG(e8) {
		a0.a1.setState(10), ab.tI() || ab.aGf(), 0 === e8 ? t.y.a4v() : 1 === e8 ? (b9.aIK.wR(bj.eK.data[156].value, 1) || aD.a4b.a54(), t.u(19)) : 2 === e8 ? 0 !== a0.id || bj.eK.data[140].value ? t.u(8, t.sq, new sr(16)) : t.y.aQH(t.sq, 16) : 3 ===
			e8 && t.u(1)
	}
	rO.e.style.position = "absolute", rO.e.style.textAlign = "center", rO.e.placeholder = L(324), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGo.show(), aQE[4].qv(bA.color.a34(bj.eK.data[121].value)), this.resize(), document.body.appendChild(rO.e);
		for (var aB = 0; aB < aQE.length; aB++) document.body.appendChild(aQE[aB].button);
		1 !== a0.id || a0.dv < 5 || (aQF && bf.eM > aQF + 144e5 ? a0.vU.setState(14) : aQF = bf.eM)
	}, this.rs = function() {
		this.aGo.rs(), t.removeChild(document.body, rO.e);
		for (var aB = 0; aB < aQE.length; aB++) t.removeChild(document.body, aQE[aB].button)
	}, this.resize = function() {
		this.aGo.resize(), this.aGo.resize(), aPJ.resize();
		var gap = .5 * bc.gap,
			tn = 10 / 99 * .84 * aPJ.i,
			aQK = .16 * aPJ.j,
			a9B = .19 * aPJ.i,
			eu = aPJ.eu + a9B,
			tn = aPJ.ew + tn + 3 * gap,
			i = .5 * (aPJ.i - gap) - a9B,
			a9B = aPJ.i - 2 * a9B - aQK - gap,
			a9B = (bA.qb.tG(rO.e, eu, tn, a9B, aQK), bA.qb.tG(aQE[4].button, eu + a9B + gap, tn, aQK, aQK), .5 * (aPJ.ew + aPJ.j - (tn += aQK + gap) - gap));
		bA.qb.tG(aQE[0].button, eu, tn, i, a9B), bA.qb.tG(aQE[1].button, eu + i + gap, tn, i, a9B), bA.qb.tG(aQE[2].button, eu, tn + a9B + gap, i, a9B), bA.qb.tG(aQE[3].button, eu + i + gap, tn + a9B + gap, i, a9B);
		bA.qb.tG(aQE[5].button, eu, tn + a9B * 2 + gap * 2, i * 2 + gap, a9B / 3);
		bA.qb.tG(aQE[6].button, eu, tn + a9B * 2.33 + gap * 3, i * 2 + gap, a9B / 3);
		for (var aB = 0; aB < aQE.length; aB++) aQE[aB].button.style.font = bA.qb.sQ(0, bA.qb.a3K(.065 * aPJ.j)), bA.qb.ql(aQE[aB].button, 5);
		rO.e.style.font = bA.qb.sQ(0, bA.qb.a3K(.08 * aPJ.j)), bA.qb.ql(rO.e, 5)
	}, this.uj = function() {
		if (aa.aGK(), aT.uj(), aO.uj(), bY.uj(), ab.tI()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aPJ.i * 0.03);
				uk.font = bA.qb.sQ(1, size);
				uk.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = uk.measureText(text).width;
				uk.textAlign = "left";
				uk.textBaseline = "middle";
				uk.fillText(text, uk.canvas.width - textLength - size / 2, size);
			};
			uk.imageSmoothingEnabled = !1;
			var f8 = ab.aGN("territorial.io"),
				nL = .84 * aPJ.i / f8.width;
			uk.setTransform(nL, 0, 0, nL, aPJ.eu + .08 * aPJ.i, aPJ.ew), aQD = aQD || bA.a2O.a3v(f8, bA.a2O.a41, [0, 0, 0]);
			for (var eu = -1; eu <= 1; eu += 2)
				for (var ew = -1; ew <= 1; ew += 2) uk.drawImage(aQD, eu, ew);
			uk.drawImage(f8, 0, 0), uk.imageSmoothingEnabled = !0;
			var zG = ab.aGN("logo"),
				aQM = .6666 * nL * f8.height / zG.height,
				nM = .5 * h.i,
				nN = aPJ.ew + .5 * nL * f8.height - .5 * aQM * zG.height;
			uk.setTransform(aQM, 0, 0, aQM, nM - .6 * nL * f8.width, nN), uk.drawImage(zG, 0, 0), uk.setTransform(aQM, 0, 0, aQM, nM + .6 * nL * f8.width - aQM * zG.width, nN), uk.drawImage(zG, 0, 0), uk.setTransform(1, 0, 0, 1, 0, 0), uk
				.imageSmoothingEnabled = !0
		}
	}
}

function aN4() {
	var aNM, aQN, aQO, uV;

	function aQP(aB) {
		t.u(8, t.sq, new sr(21, {
			t9: aB,
			tA: 0,
			tB: 10
		}))
	}
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aQN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aQO = [new w(L(325), function() {
		aQP(1)
	}, 0, 0, 1), new w(L(326), function() {
		aQP(2)
	}, 0, 0, 1), new w(L(327), function() {
		aQP(3)
	}, 0, 0, 1), new w(L(328), function() {
		aQP(0)
	}, 0, 0, 1), new w(L(329), function() {
		aQP(9)
	}, 0, 0, 1), new w(L(330), function() {
		aQP(10)
	}, 0, 0, 1), new w(L(331), function() {
		aQP(11)
	}, 0, 0, 1)], uV = [new w("⬅️ " + L(37), function() {
		t.a1J()
	})], aNM = new uU(L(332), uV), aQN = new r9(aQO, aNM.ua)
}

function aCm(title, qO, aQQ) {
	var aNM, aPX;
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aPX.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aQQ = aQQ || [new w("⬅️ " + L(37), function() {
		t.a1J()
	}, bB.oO)], aNM = new uU(title, aQQ), aPX = new s5(aNM.ua, qO), bA.qb.textAlign(aNM.ua.style, 1)
}

function aPp(data) {
	var aNM, aQR, f8, sg;

	function aQS(jP) {
		var en = data.data.length;
		if (en) {
			for (var tA, max = min = parseInt(data.data[0][0]), aB = 1; aB < en; aB++) var aEl = parseInt(data.data[aB][0]),
				min = Math.min(aEl, min),
				max = Math.max(aEl, max);
			tA = jP < 0 ? min + jP : max + 1, t.u(8, t.a5A().aMs, new sr(21, {
				t9: data.t9,
				tA: tA,
				tB: tA + Math.abs(jP)
			}))
		}
	}
	this.show = function() {
			aNM.show(), this.resize()
		}, this.rs = function() {
			aNM.rs()
		}, this.resize = function() {
			aNM.resize(), aQR.resize()
		}, this.a2B = function(f8) {
			2 === f8 && aNM.ub[0].qs()
		}, f8 = data.data.length ? 0 : 1, f8 = [new w("⬅️ " + L(37), function() {
			t.a1J()
		}), new w(L(333), function() {
			aQS(-10)
		}, f8, 0, 1), new w(L(334), function() {
			aQS(10)
		}, f8, 0, 1), new w(L(280), function() {
			t.u(11, 10, new aQT({
				t9: data.t9
			}))
		})], sg = [L(335), L(336), L(337), L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(330), L(331), L(345)], aNM = new uU(sg[data.t9], f8),
		function() {
			var aB, eq = {
					sa: []
				},
				sa = eq.sa,
				aQV = data.data,
				en = aQV.length;
			en && 0 === aQV[0][0] && 0 <= (e8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t9]) && (t.y.tC[e8] = aQV[0][1]);
			var nL = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t9],
				a47 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t9],
				e8 = [
					[L(346), L(347) + " ↗", L(348)],
					[L(346), L(349), L(350), L(351) + " ↗"],
					[L(346), L(347) + " ↗", L(350)],
					[L(346), L(347) + " ↗", L(350)],
					[L(352), L(353), L(354) + " ↗", L(355) + " ↗", L(115)],
					[L(352), L(353), L(356) + " ↗", L(357) + " ↗", L(358)],
					[L(352), L(353), L(359) + " ↗", L(360) + " ↗", L(361)],
					[L(352), L(353), L(356) + " ↗", L(357) + " ↗", L(362)],
					[L(352), L(353), L(354) + " ↗", L(355) + " ↗", L(115)],
					[L(346), L(347) + " ↗", L(350)],
					[L(346), L(347) + " ↗", L(363)],
					[L(346), L(347) + " ↗", L(350)],
					[L(352), L(353), L(364) + " ↗", L(365) + " ↗", L(366)]
				];
			if (eq.sg = e8[data.t9], eq.sl = [
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
				][data.t9], 0 === data.t9 || 2 === data.t9 || 3 === data.t9 || 9 === data.t9 || 10 === data.t9 || 11 === data.t9)
				for (aB = 0; aB < en; aB++) sa.push([{
					fF: aQV[aB][0] + 1 + ".",
					dt: 0
				}, {
					fF: aQV[aB][1],
					dt: 1,
					so: aQV[aB][4],
					sp: aQV[aB][3]
				}, {
					fF: (nL * aQV[aB][2]).toFixed(a47),
					dt: 0
				}]);
			else if (12 === data.t9)
				for (aB = 0; aB < en; aB++) {
					var aQY = aQV[aB][3];
					sa.push([{
						fF: "" + aQV[aB][0],
						dt: 0
					}, {
						fF: "" + aQV[aB][4],
						dt: 0
					}, {
						fF: aQV[aB][5],
						dt: 1,
						so: aQV[aB][1],
						sp: 0
					}, {
						fF: aQV[aB][6],
						dt: 1,
						so: aQV[aB][2],
						sp: 0
					}, {
						fF: bo.eE(aQY % 16, aQY >> 4),
						dt: 0
					}])
				} else if (1 === data.t9)
					for (aB = 0; aB < en; aB++) sa.push([{
						fF: aQV[aB][0] + 1 + ".",
						dt: 0
					}, {
						fF: aQV[aB][1],
						dt: 0
					}, {
						fF: (nL * aQV[aB][2]).toFixed(a47),
						dt: 0
					}, {
						fF: aQV[aB][3],
						dt: 1,
						so: aQV[aB][5],
						sp: aQV[aB][4]
					}]);
				else if (4 === data.t9 || 5 === data.t9 || 6 === data.t9 || 7 === data.t9 || 8 === data.t9)
				for (aB = 0; aB < en; aB++) {
					var aQZ = aQV[aB][5];
					4 === data.t9 || 8 === data.t9 ? "100%" === (aQZ = (aQZ % 64 * 100 / (aQZ >> 6)).toFixed(0) + "%") && (4 === data.t9 ? aQZ += " (" + L(367) + ")" : aQZ += " (" + L(368) + ")") : 5 === data.t9 ? 32768 <= aQZ && (aQZ = -(aQZ -
						32768)) : aQZ = (nL * aQZ).toFixed(a47), sa.push([{
						fF: "" + aQV[aB][0],
						dt: 0
					}, {
						fF: "" + aQV[aB][6],
						dt: 0
					}, {
						fF: aQV[aB][7],
						dt: 1,
						so: aQV[aB][1],
						sp: aQV[aB][2]
					}, {
						fF: aQV[aB][8],
						dt: 1,
						so: aQV[aB][3],
						sp: aQV[aB][4]
					}, {
						fF: "" + aQZ,
						dt: 0
					}])
				}
			aQR = new sZ(aNM.ua, eq)
		}()
}

function aQT(a3x) {
	var aNM, aNN, qW;
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aNN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(L(369), [new w("⬅️ " + L(37), function() {
		t.aNJ(10)
	})]), aNN = new qU(aNM.ua, ((qW = []).push(function() {
		var aNp, aNg = new qE,
			aPH = new rP(bj.eK.data[132], 1, function() {
				aNp.button.click()
			}),
			aPI = new rP(bj.eK.data[131], 1, function() {
				aPH.e.focus()
			});
		aNg.qH(L(285)), aNg.qS(aPI), aPI.e.style.marginBottom = "0.8em", aNg.qH(L(286)), aNg.qS(aPH);
		return aNp = new w(L(284), function() {
			tA = Math.floor(aPI.e.value), tB = Math.floor(aPH.e.value);
			var tB, tA = {
				a2f: Math.min(tA, tB),
				aMT: Math.max(tA, tB)
			};
			t.u(8, t.a5B(10).aMs, new sr(21, {
				t9: a3x.t9,
				tA: tA.a2f,
				tB: tA.aMT
			}))
		}, 0, 0, 1), aNg.qS(new s6([aNp.button])), aNg
	}()), qW.push(function() {
		var aNp, aNg = new qE,
			aPH = new rP(bj.eK.data[134], 1, function() {
				aNp.button.click()
			}),
			aPI = new rP(bj.eK.data[133], 0, function() {
				aPH.e.focus()
			});
		return aNg.qH(1 === a3x.t9 ? L(370) : L(371)), aNg.qS(aPI), aPI.e.style.marginBottom = "0.8em", aNg.qH(L(372)), aNg.qS(aPH), aNp = new w(L(284), function() {
			var aPh = aPI.e.value.slice(0, 20),
				aPi = Math.abs(Math.floor(aPH.e.value));
			t.u(8, t.a5B(10).aMs, new sr(22, {
				t9: a3x.t9,
				aPh: aPh,
				aPi: aPi
			}))
		}, 0, 0, 1), aNg.qS(new s6([aNp.button])), aNg
	}()), qW.push(function() {
		var aNp, aNg = new qE,
			aPH = new rP(bj.eK.data[152], 1, function() {
				aNp.button.click()
			}),
			aPI = new rP(bj.eK.data[151], 0, function() {
				aPH.e.focus()
			});
		return aNg.qH(L(373)), aNg.qS(aPI), aPI.e.style.marginBottom = "0.8em", aNg.qH(L(372)), aNg.qS(aPH), aNp = new w(L(284), function() {
			var aPh = aPI.e.value.slice(0, 5),
				aPi = Math.abs(Math.floor(aPH.e.value));
			t.u(8, t.a5B(10).aMs, new sr(28, {
				t9: a3x.t9,
				aPh: aPh,
				aPi: aPi
			}))
		}, 0, 0, 1), aNg.qS(new s6([aNp.button])), aNg
	}()), qW))
}

function aNH() {
	var aQd, tM, aQg, tL, tO, aQe = [new Array(4), [], new Array(2), new Array(2)],
		aQf = new Array(4),
		aQh = new Array(2),
		aQi = [L(61), L(329), L(374), L(375)];

	function aEX() {
		var a71 = aQd.tZ.rO.e.value.trim().slice(0, 127);
		a71.length < 1 || (aQd.tZ.rO.e.value = "", bn.aCp.a0D(a71))
	}

	function aQl(aQn) {
		bn.y.rf[3] = 1 - bn.y.rf[3], aQm(3, 1, bn.y.rf[3]), aQn && b0.aEi.aEj(4), bn.y.rf[3] && bj.s3.s4(158, bn.y.rf[0])
	}

	function aQj(f6, f7) {
		bn.y.rf[f6] !== f7 && (0 === f6 && bn.y.rf[3] && aQl(0), aQm(f6, bn.y.rf[f6], 0), aQm(f6, f7, 1), bn.y.rf[f6] = f7, 0 === f6 ? (b0.aEi.aEj(2, f7), bn.y.rf[2] ? (aQd.ta.mW(), aQd.tZ.rc(1)) : aQd.tZ.rc(0), t.a5A().aEM(), t.a5A().aEL()) : 2 ===
			f6 && (0 === f7 ? (b0.aEi.aEj(0), aQd.tZ.mW(), aQd.ti()) : (b0.aEi.aEj(1), aQd.ta.mW(), aQd.tj())))
	}

	function aQm(f6, f7, color) {
		aQd.tc[f6].rA[f7].qv(color ? bB.o8 : bB.ow)
	}

	function aQq(aDb) {
		return aDb < 7 ? aDb + 2 + " " + L(382) : 7 === aDb || 10 === aDb ? L(329) + " (Full-Sending: " + L(7 === aDb ? 383 : 384) + ")" : 8 === aDb ? "1v1" : L(385)
	}

	function aQr(fF) {
		var a74 = bL.du(fF, 60),
			fF = fF % 60;
		return (a74 < 10 ? "0" : "") + a74 + ":" + (fF < 10 ? "0" : "") + fF
	}
	this.aEt = function() {
		return aQd.tZ
	}, this.aCp = function(so) {
		aQj(2, 0);
		var qI = aQd.tZ.rO.e.value,
			so = "@" + so + " ";
		qI.length && !bA.ra.a3R(qI, " ") && (so = " " + so), aQd.tZ.rO.e.value = qI += so, aQd.tZ.rO.e.focus()
	}, this.aEK = function() {
		aQd.ta.mW()
	}, this.aEM = function() {
		var aQp = bn.y.rf[0],
			aQp = bn.y.rh[aQp];
		bS.a7(aQp.eT, aQp.mapSeed), tM.rA[0].button.textContent = L(306) + ": " + bS.wW.wX[aQp.eT].name, tM.rA[1].button.textContent = L(308, 0, "Mode") + ": " + aQq(aQp.aDb), tM.rA[2].button.textContent = L(379) + ": " + bS.wW.wX[aQp.aFI].name,
			tM.rA[3].button.textContent = L(380, 0, "Next Mode") + ": " + aQq(aQp.aFJ), tM.rA[4].button.textContent = L(381) + ": " + aQr(aQp.aEO), tM.resize()
	}, this.aEL = function() {
		var aQp = bn.y.rf[0],
			rg = bn.y.rh[aQp];
		aQd.tg(rg.th);
		for (var aB = 0; aB < bn.tw.tx.length; aB++) aQe[0][aB].rZ.textContent = "" + bn.tw.tx[aB].length;
		var tw = bn.tw.tx[aQp],
			aQs = tw.length,
			aQt = bn.tw.ty[aQp];
		aQe[2][1].rZ.textContent = "" + aQs, aQe[3][1].rZ.textContent = "" + aQt, tM.rA[4].button.textContent = L(381) + ": " + aQr(rg.aEO);
		for (aB = 0; aB < 4; aB++) {
			var aQu = bn.y.rh[aB];
			aQf[aB] ? 0 === aQu.th && (aQf[aB].rZ.textContent = bS.wW.wX[aQu.eT].name) : aQf[aB] = new rY(bS.wW.wX[aQu.eT].name, tL.rA[aB].button, 1, 1), bA.ra.startsWith(aQi[aB], "🏆 ") ? aQu.aDh || (aQi[aB] = aQi[aB].substring(3), tL.rA[aB]
				.button.textContent = aQi[aB], tL.rA[aB].button.appendChild(aQe[0][aB].rZ), tL.rA[aB].button.appendChild(aQf[aB].rZ)) : aQu.aDh && (aQi[aB] = "🏆 " + aQi[aB], tL.rA[aB].button.textContent = aQi[aB], tL.rA[aB].button
				.appendChild(aQe[0][aB].rZ), tL.rA[aB].button.appendChild(aQf[aB].rZ))
		}
		var rg = "",
			aQw = "";
		0 === aQp && (rg = bn.kz.aDv(tw, 0, aQs), aQw = bn.kz.aDv(tw, 0, aQt)), aQg[0].rZ.textContent = rg, aQg[1].rZ.textContent = aQw, aQh[1].rZ.textContent = "MP: " + bn.y.aEE[0] + "   SP: " + bn.y.aEE[1] + "   Lobby: " + bA.qj.a2s(bn.tw.tx)
	}, this.aEQ = function() {
		aQd.tZ.mW()
	}, this.show = function() {
		aQd.show(), this.resize(), bn.message.show()
	}, this.rs = function() {
		aQd.rs(), bn.uJ.rs(), bn.tu.rs(), bn.message.rs()
	}, this.resize = function() {
		aQd.resize(1 - bn.y.rf[2]), bn.message.resize()
	}, this.a2B = function(f8) {
		2 === f8 ? bn.y.rf[3] ? aQl(1) : aQd.tc[3].rA[0].qs() : f8 < 2 && aQl(1)
	}, tL = new s9([new w(aQi[0], function() {
		return aQj(0, 0), 2
	}), new w(aQi[1], function() {
		return aQj(0, 1), 2
	}), new w(aQi[2], function() {
		return aQj(0, 2), 2
	}), new w(aQi[3], function() {
		return aQj(0, 3), 2
	})], bB.ow), tM = new s9([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.ox, 1);
	var aQk = new s9([new w(L(376), function() {
		return aQj(2, 0), 2
	}), new w(L(111), function() {
		return aQj(2, 1), 2
	})], bB.ow);
	tO = new s9([new w(L(377), function() {
		t.x(), bn.uD(), b0.y.a1T(3240), t.u(5, 5)
	}), new w(L(378), function() {
		return aQl(1), 2
	})], bB.ow), aQd = new tK(tL, tM, aQk, tO, aEX, bn.uJ.aF3);
	for (var aB = 0; aB < 4; aB++) aQe[0][aB] = new rY("0", tL.rA[aB].button);
	aQe[2][1] = new rY("0", aQk.rA[1].button), aQe[3][1] = new rY("0", tO.rA[1].button), aQg = [new rY("", aQk.rA[1].button, 1, 1), new rY("", tO.rA[1].button, 1, 1)], aQm(0, bn.y.rf[0], 1), aQm(2, bn.y.rf[2], 1), (aQh = [new rY(L(278), aQd.tk(), 1,
		0), new rY("", aQd.tk(), 1, 1)])[0].rZ.style.fontSize = "0.4em", aQh[1].rZ.style.fontSize = "0.4em"
}

function aMy() {
	var aNM, aNN, qW;
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aNN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(L(386), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a5B(7).aMs)
	}), new w(L(195), function() {
		bj.s3.s4(105, bG.st.wG(aNN.qY[0].qF[0].e.value, 5)), bj.s3.s4(106, bG.st.wG(aNN.qY[1].qF[0].e.value, 8)), t.u(8, t.a5B(7).aMs, new sr(18))
	})]), aNN = new qU(aNM.ua, ((qW = []).push(function() {
		var aNg = new qE;
		return aNg.qH(L(173)), aNg.qS(new rP({
			value: "",
			e8: -1
		})), aNg
	}()), qW.push(function() {
		var aNg = new qE,
			aNr = (aNg.qH(L(175)), new rP({
				value: "",
				e8: -1
			}));
		return aNr.e.type = "password", aNg.qS(aNr), aNg.qS(new s6([new w(L(176), function(e) {
			return e.textContent === L(176) ? (e.textContent = L(177), aNr.e.type = "text") : (e.textContent = L(176), aNr.e.type = "password"), !0
		}).button])), aNg
	}()), qW.push(function() {
		var aNg = new qE;
		return aNg.qH(L(179)), aNg.qJ(L(387)), aNg.qJ(L(388)), aNg.qJ(L(389)), aNg
	}()), qW))
}

function aN5() {
	var aNM, aQN, aQO, uV;

	function aQP(aB) {
		t.u(8, t.sq, new sr(21, {
			t9: aB,
			tA: 0,
			tB: 10
		}))
	}
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aQN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aQO = [new w(L(340), function() {
		aQP(5)
	}, 0, 0, 1), new w(L(341), function() {
		aQP(6)
	}, 0, 0, 1), new w(L(342), function() {
		aQP(7)
	}, 0, 0, 1), new w(L(345), function() {
		aQP(12)
	}, 0, 0, 1)], uV = [new w("⬅️ " + L(37), function() {
		t.a1J()
	})], aNM = new uU(L(390), uV), aQN = new r9(aQO, aNM.ua)
}

function aMo() {
	this.eK = {}, this.tC = new Array(7), this.aN3 = null, this.aN0 = null, this.sX = 0, this.aIA = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4v = function() {
		t.x(), aZ.dd()
	}, this.aCO = function() {
		t.u(0 === aa.a1K() ? 5 : 0)
	}, this.aPG = function() {
		if (1 === bj.eK.data[130].value) t.u(8, t.a5A().aMs, new sr(24, {
			aOm: bj.eK.data[125].value,
			tA: bj.eK.data[128].value,
			tB: bj.eK.data[129].value
		}));
		else {
			for (var g = (g = bj.eK.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5A().aMs, new sr(23, {
				aOm: bj.eK.data[125].value,
				a0o: g
			}))
		}
	}, this.aQH = function(aMs, target) {
		t.u(4, aMs, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aQz +
			"' target='_blank'>" + bK.aQz + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aMs)
			}), new w("✅ Accept", function() {
				bj.s3.s4(140, 1), 0 === target ? t.u(2, aMs) : t.u(8, aMs, new sr(target))
			})]))
	}, this.aR0 = function() {
		for (var aB = 0; aB < 7; aB++) this.tC[aB] = bG.w7.wB(bH.pj(5));
		this.tC[1] = "[" + this.tC[1] + "]", 5 === t.sq && (t.a5A().aGo.s4(this.tC), t.a5A().resize())
	}, this.aNq = function(fF, p5, a6h) {
		fF = bA.g9.a3u(fF, 1, 1e6);
		var aR1 = Math.max(1, 1 + Math.floor(.01 * (fF - 100))),
			p5 = L(391, [p5]);
		return (p5 += "<br>") + L(392, [a6h]) + "<br>" + L(393, [aR1 < 20 ? fF + aR1 + "–" + (fF + 20) : fF + aR1]) + "<br>" + L(394, [fF])
	}
}

function aN8() {
	var aOJ, aOK, aR2, qW;

	function aOM() {
		b6.uD(), t.aNK()[19] = null, t.a1J()
	}

	function aR9() {
		aRC(), aRA()
	}

	function aRC() {
		aR2.qG.lastChild && t.removeChild(aR2.qG, aR2.qG.lastChild)
	}

	function aRA() {
		var aRD = bS.a51(aD.data);
		aD.data.canvas = bS.aKn(aRD, aD.data.mapSeed).wg, aRB()
	}

	function aRB() {
		var a2x = aD.data.canvas;
		a2x.style.width = "100%", aR2.qG.appendChild(a2x)
	}
	this.aHu = function(a2x) {
		aD.data.canvas && aRC(), aD.data.canvas = a2x, aRB()
	}, this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(306), [new w("⬅️ " + L(37), aOM)]), 2 === aD.data.mapType && b6.dd(), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), aNg.qP(new uP({
			uT: [L(395), L(396), L(397)],
			value: aD.data.mapType
		}, function(e8) {
			2 === (aD.data.mapType = e8) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uD()), t.u(20)
		})), 2 <= aD.data.mapType && (aNg.qS(new sG), aNg.qS(new s0({
			value: aD.data.passableWater
		}, L(398), function(value) {
			aD.data.passableWater = value
		})), aNg.qS(new s0({
			value: aD.data.passableMountains
		}, L(399), function(value) {
			aD.data.passableMountains = value
		})));
		qW.push(aNg)
	}(qW = []), function(qW) {
		if (0 === aD.data.mapType) {
			for (var aNg = new qE, uT = (aNg.qH(L(306)), []), aB = 0; aB < bS.wW.aLj.length; aB++) uT.push(bS.wW.wX[bS.wW.aLj[aB]].name);
			aNg.qP(new uP({
				uT: uT,
				value: aD.data.mapProceduralIndex
			}, function(e8) {
				aD.data.mapProceduralIndex = e8, aR9()
			})), qW.push(aNg)
		}
	}(qW), function(qW) {
		if (1 === aD.data.mapType) {
			for (var aNg = new qE, uT = (aNg.qH(L(306)), []), aB = 0; aB < bS.wW.aLk.length; aB++) uT.push(bS.wW.wX[bS.wW.aLk[aB]].name);
			aNg.qP(new uP({
				uT: uT,
				value: aD.data.mapRealisticIndex
			}, function(e8) {
				aD.data.mapRealisticIndex = e8, aR9()
			})), qW.push(aNg)
		}
	}(qW), function(qW) {
		var aNg;
		2 === aD.data.mapType && ((aNg = new qE).qH(L(306)), aNg.qS(new s6([new w(L(400), function() {
			return b6.aHn(), !0
		}).button])), qW.push(aNg))
	}(qW), function(qW) {
		(aR2 = new qE).qH(L(401)), 2 !== aD.data.mapType ? aRA() : aD.data.canvas && aRB();
		qW.push(aR2)
	}(qW), function(qW) {
		var aNg, rO, aNp;
		0 === aD.data.mapType && ((aNg = new qE).qH("Seed"), rO = new rP({
			e8: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aR9())
		}), aNp = new w(L(297), function(e) {
			var aKi = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aKi) return rO.e.value = aD.data.mapSeed = aKi, aR9(), !0
		}), aNg.qS(rO), aNg.qS(new s6([aNp.button])), qW.push(aNg))
	}(qW), function(qW) {
		var aNg, rO;
		2 === aD.data.mapType && ((aNg = new qE).qH(L(402)), rO = new rP({
			e8: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aNg.qS(rO), qW.push(aNg))
	}(qW), qW))
}

function v(title, qO, aRE, aQQ) {
	var aNM, aPX;
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aPX.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aQQ = aQQ || [new w("⬅️ " + L(37), function() {
		t.a1J()
	})], aNM = new uU(title, aQQ), aPX = new s5(aNM.ua, qO), aRE && bA.qb.textAlign(aNM.ua.style, 1)
}

function aNB() {
	var aOJ, aOK, aOL, qW;

	function aOM() {
		aOO(), 2 === aD.data.playerNamesType && 1 === bA.qj.a2b(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		2 === aD.data.playerNamesType && bA.qj.a2p(aOL.v1(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(310), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), aNg.qP(new uP({
			uT: [L(311), L(312), L(275)],
			value: aD.data.playerNamesType
		}, function(e8) {
			aOO(), aD.data.playerNamesType = e8, t.u(23)
		})), aNg.qS(new sG), aNg.qS(new s0({
			value: aD.data.selectableName
		}, L(403), function(value) {
			aD.data.selectableName = value
		})), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg;
		2 === aD.data.playerNamesType && ((aNg = new qE).qH("Data"), aOL = new us(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ek || (aD.data.playerNamesData = new Array(aD.ek), aD.data.playerNamesData
			.fill("")), aOL.uz(bA.ra.a4K(aD.data.playerNamesData, 1, '"')), aNg.qS(aOL), qW.push(aNg))
	}(qW), qW))
}

function aMw() {
	var aOJ, ux;

	function aRF() {
		t.x();
		var qI = b9.aRJ(ux.v1());
		(aD.a09 && 0 < qI.length && qI === b9.pv.a4r || b9.aIK.wR(qI)) && b9.aRK()
	}
	this.show = function(aRG) {
		this.aRH(aRG), aOJ.show(), this.resize()
	}, this.aRH = function(aRG) {
		0 === aD.a09 ? aRG ? ux.uz(aRG) : aD.a4e.length && ux.uz(aD.a4e) : (aD.gw || (b9.pv.a4r = b9.a4s.zb()), ux.uz(b9.aRI(b9.pv.a4r)))
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), ux.resize()
	}, this.a2B = function(f8) {
		2 === f8 ? aOJ.ub[0].qs() : aRF()
	}, aOJ = new uU(L(404), [new w("⬅️ " + L(37), function() {
		t.aNJ(1)
	}), new w(L(405), function() {
		ux.v2()
	}), new w(L(406), function() {
		ux.v3()
	}), new w(L(407), function() {
		ux.clear()
	}), new w(L(408), function() {
		aRF()
	})]), ux = new us(L(409)), aOJ.ua.appendChild(ux.e)
}

function aMv() {
	var aNM, aNN, qW, aNg;

	function aRL() {
		b7.aC9 !== bj.eK.data[12].value ? (b7.dd(), t.u(8, 1, new sr(30))) : t.u(1)
	}
	this.show = function() {
			aNM.show(), this.resize()
		}, this.rs = function() {
			aNM.rs()
		}, this.resize = function() {
			aNM.resize(), aNN.resize()
		}, this.a2B = function(f8) {
			2 === f8 && aNM.ub[0].qs()
		}, aNM = new uU(L(410), [new w("⬅️ " + L(37), aRL), new w(L(411), function() {
			t.x(), bj.s3.vo(), t.u(2)
		})]), qW = [], (aNg = new qE).qH(L(412)), aNg.qJ(L(413)), qW.push(aNg),
		function(qW) {
			var aNg = new qE,
				g = (aNg.qH(L(434)), b7.data.aCS());
			aNg.qP(new uP({
				uT: g,
				value: b7.data.aCW(g)
			}, function(e8) {
				return bj.s3.s4(12, g[e8].split(":")[0]), !0
			})), qW.push(aNg)
		}(qW),
		function(qW) {
			var aNg = new qE,
				aRO = (aNg.qH(L(432)), []);
			aNg.qS(new s6([new w(L(433), function(e) {
				bX.aRP();
				for (var aB = 0; aB < aRO.length; aB++) aRO[aB].e.value = bX.aBi[aB];
				return bA.qb.a3Q(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aRQ.length; aB++) {
				aNg.qJ(bX.aRQ[aB]);
				for (var f6 = 0; f6 < 2; f6++) {
					var e8 = 2 * aB + f6,
						rO = new rP({
							value: bX.aBi[e8],
							e8: -1
						});
					rO.e.aRR = e8, aRO.push(rO), rO.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aRS(e.target.aRR, code)
					}), f6 && (rO.e.style.marginLeft = "4%"), rO.e.style.width = "48%", aNg.qS(rO)
				}
			}
			qW.push(aNg)
		}(qW), (aNg = new qE).qH(L(23)), aNg.qP(new uP({
			uT: ["1", "2"],
			value: aZ.aG1 - 1
		}, function(aB) {
			aZ.aG1 = aB + 1
		})), qW.push(aNg), (aNg = new qE).qH(L(414)), bj.eK.data[1].uT = [L(415), L(416), L(417), L(418)], aNg.qP(new uP(bj.eK.data[1])), qW.push(aNg), (aNg = new qE).qH(L(419)), bj.eK.data[9].uT = [L(416), L(420), L(421)], aNg.qP(new uP(bj.eK.data[
			9])), qW.push(aNg), (aNg = new qE).qH(L(422)), bj.eK.data[11].uT = [L(423), L(9), L(424)], aNg.qP(new uP(bj.eK.data[11])), qW.push(aNg), (aNg = new qE).qH(L(425)), aNg.qS(new s0(bj.eK.data[2])), qW.push(aNg), (aNg = new qE).qH(L(426)),
		aNg.qS(new s0(bj.eK.data[7])), qW.push(aNg), (aNg = new qE).qH(L(427)), aNg.qS(new s0(bj.eK.data[8])), qW.push(aNg), (aNg = new qE).qH(L(428)), aNg.qS(new rP(bj.eK.data[5])), qW.push(aNg), (aNg = new qE).qH(L(429)), aNg.qS(new s0(bj.eK.data[
			13], L(430))), aNg.qS(new s0(bj.eK.data[14], L(431))), qW.push(aNg), aNN = new qU(aNM.ua, qW)
}

function aNC() {
	var aOJ, aOK, aOL, qW;

	function aOM() {
		aOO(), 2 !== aD.data.spawningType || bA.qj.a2b(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		2 === aD.data.spawningType && bA.qj.a2n(aOL.v1(), aD.data.spawningData, bS.aHw - 1)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(435), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE,
			uT = (aNg.qH(L(272)), [L(297), L(309), L(275)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uT.splice(1, 1), 0 < value) && (value = 1);
		aNg.qP(new uP({
			uT: uT,
			value: value
		}, function(e8) {
			aOO(), aD.data.spawningType = e8, 0 === aD.data.gameMode && 1 === e8 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ek)), t.u(24)
		})), aNg.qS(new sG), aNg.qS(new s0({
			value: aD.data.selectableSpawn
		}, L(436), function(value) {
			aD.data.selectableSpawn = value
		})), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg = new qE;
		aNg.qH("Seed"), aNg.qS(new rP({
			e8: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qW.push(aNg)
	}(qW), function(qW) {
		var aNg;
		2 === aD.data.spawningType && ((aNg = new qE).qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.spawningData, 2)), aNg.qS(aOL), qW.push(aNg))
	}(qW), qW))
}

function aMu() {
	var aNM, aQN, aQO, uV;

	function aRT(id) {
		0 !== a0.id || bj.eK.data[140].value ? 0 === id ? t.u(8, 1, new sr(16)) : t.u(2) : t.y.aQH(t.sq, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aNM.show(), this.resize(), this.j3()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aQN.resize()
	}, this.j3 = function() {
		8 === aa.a1K() && (2 <= bd.aRY ? aQO[2].qt === bB.nv && aQO[2].qv(0) : aQO[2].qt !== bB.nv && aQO[2].qv(bB.nv), !aD.gw && aM.qC(aD.eX) ? aQO[1].qt === bB.nv && aQO[1].qv(0) : aQO[1].qt !== bB.nv && aQO[1].qv(bB.nv), !aD.gw && aw.hc(aD
			.eX) ? aQO[0].qt === bB.nv && aQO[0].qv(0) : aQO[0].qt !== bB.nv && aQO[0].qv(bB.nv))
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aQO = [new w(L(437), function() {
		aRT(0)
	}), new w(L(332), function() {
		t.u(16)
	}), new w(L(390), function() {
		t.u(17)
	}), new w(L(438), function() {
		t.y.aPG()
	}, 0, 0, 1), new w(L(404), function() {
		t.u(3, 1)
	}), new w(L(439), function() {
		t.u(18)
	}), new w(L(410), function() {
		aRT(1)
	}), new w(L(440), function() {
		var sg = ["Patreon", L(449), L(450), "YouTube Tutorial", "Discord", L(451), L(325), L(452), L(328), L(453), "Terms", "Privacy"],
			a3M = [bK.aOH, bK.aCj, bK.a1D, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCk, bK.aRZ, bK.aRa, bK.a0v, bK.aRb, bK.aRc, bK.aRd, bK.aQz];
		1 === a0.id ? (sg.splice(2, 1), sg.splice(0, 1), a3M.splice(2, 1), a3M.splice(0, 1)) : 2 === a0.id && (sg.splice(1, 1), sg.splice(0, 1), a3M.splice(1, 1), a3M.splice(0, 1)), t.u(4, 1, new v(L(440), bA.qb.a3L(sg, a3M), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(441), function() {
		t.u(4, 1, new v(L(441), l.dv + "<br><a href='" + bK.aRZ + "' target='_blank'>" + bK.aRZ + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(442), function() {
		t.u(4, 1, new v(L(442), L(454) + "<br>" + L(455), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(456), function() {
			a0.a1.a17(), t.u(1)
		})]))
	}), new w(L(443), function() {
		a0.a1.a18(), t.u(4, 1, new v(L(457), L(458) + " <a href='" + bK.aQz + "' target='_blank'>" + bK.aQz + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], uV = [new w("⬅️ " + L(37), function() {
		t.y.aCO()
	})], 8 === aa.a1K() && (aQO.unshift(new w(L(320), function() {
		t.u(30)
	})), aQO.unshift(new w(L(446), function() {
		2 <= bd.aRY && (t.x(), be.a2E(), bf.dl = !0)
	}, 0, 1)), aQO.unshift(new w(L(447), function() {
		!aD.gw && aM.qC(aD.eX) && (b8.hD.pP(), t.x(), aM.gx) && aM.a2E()
	}, 0, 1)), aQO.unshift(new w(L(448), function() {
		!aD.gw && aw.hc(aD.eX) && (bV.a5X(2), b8.hD.hY(), t.x(), aM.gx) && aM.a2E()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dv && aQO.push(new w(L(444), function() {
		a0.a1.a19()
	})), aNM = new uU(L(445), uV), aQN = new r9(aQO, aNM.ua)
}

function aNG() {
	var aOJ, aOK, aOL, qW;

	function aOM() {
		aOO(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		2 === aD.data.sResourcesType && bA.qj.a2n(aOL.v1(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(315), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), aNg.qP(new uP({
			uT: [L(273), L(274), L(275)],
			value: aD.data.sResourcesType
		}, function(e8) {
			aOO(), 2 !== e8 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ek)), aD.data.sResourcesType = e8, t.u(28)
		})), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg;
		1 === aD.data.sResourcesType && ((aNg = new qE).qH("Value"), aNg.qS(new rP({
			e8: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qW.push(aNg))
	}(qW), function(qW) {
		var aNg;
		2 === aD.data.sResourcesType && ((aNg = new qE).qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.sResourcesData, 2)), aNg.qS(aOL), qW.push(aNg))
	}(qW), qW))
}

function aNE() {
	var aOJ, aOK, aOL, qW;

	function aOM() {
		aOO(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aNK()[19] = null, t.a1J()
	}

	function aOO() {
		2 === aD.data.tIncomeType && bA.qj.a2n(aOL.v1(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aOJ.show(), this.resize()
	}, this.rs = function() {
		aOJ.rs()
	}, this.resize = function() {
		aOJ.resize(), aOK.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aOJ.ub[0].qs()
	}, aOJ = new uU(L(313), [new w("⬅️ " + L(37), aOM)]), aOK = new qU(aOJ.ua, (function(qW) {
		var aNg = new qE;
		aNg.qH(L(272)), aNg.qP(new uP({
			uT: [L(273), L(274), L(275)],
			value: aD.data.tIncomeType
		}, function(e8) {
			aOO(), 2 !== e8 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ek), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e8, t.u(26)
		})), qW.push(aNg)
	}(qW = []), function(qW) {
		var aNg;
		1 === aD.data.tIncomeType && ((aNg = new qE).qH("Value"), aNg.qS(new rP({
			e8: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qW.push(aNg))
	}(qW), function(qW) {
		var aNg;
		2 === aD.data.tIncomeType && ((aNg = new qE).qH("Data"), (aOL = new us(0, 1, 0, 1)).uz(bA.ra.a4K(aD.data.tIncomeData, 4)), aNg.qS(aOL), qW.push(aNg))
	}(qW), qW))
}

function aN6() {
	var aNM, aNN, qW;
	this.show = function() {
		aNM.show(), this.resize()
	}, this.rs = function() {
		aNM.rs()
	}, this.resize = function() {
		aNM.resize(), aNN.resize()
	}, this.a2B = function(f8) {
		2 === f8 && aNM.ub[0].qs()
	}, aNM = new uU(L(439), [new w("⬅️ " + L(37), function() {
		t.a1J()
	})]), aNN = new qU(aNM.ua, ((qW = []).push(function() {
		function aNm() {
			aRi.button.textContent = L(171), aRg.e.readOnly = !1, aRh.e.readOnly = !1, aNk.qv(1), aNk.button.style.color = bB.nj
		}
		var aNg = new qE,
			aRf = (aNg.qH(L(459)), new rP({
				value: bj.eK.data[105].value,
				e8: -1
			})),
			aRg = (aRf.e.readOnly = !0, aNg.qS(aRf), aNg.qH(L(357), "0.8em"), new rP(bj.eK.data[148])),
			aRg = new rP(bj.eK.data[148], 0, void 0, function(e) {
				aNj(bj.eK.data[149].value, e.target.value)
			}),
			aRh = (aNg.qS(aRg), aNg.qH(L(361), "0.8em"), new rP(bj.eK.data[149], 1, void 0, function(e) {
				aNj(e.target.value, bj.eK.data[148].value)
			})),
			aRi = (aNg.qS(aRh), new w(L(171), function(e) {
				return e.textContent === L(171) ? (e.textContent = L(172), aRg.e.readOnly = !0, aRh.e.readOnly = !0, aNk.qv(0), aNk.button.style.color = bB.oh, bj.s3.s4(149, aRh.e.value), aNj(bj.eK.data[149].value, bj.eK.data[
					148].value)) : aNm(), !0
			})),
			aNk = (aNg.qS(new s6([aRi.button])), new w(L(14), function(e) {
				return aRg.e.readOnly && b0.y.aNl(0) && (bA.qb.a3Q(e), aNm(), b0.aNn.aNo({
					ss: 0,
					so: bj.eK.data[148].value,
					value: parseInt(bj.eK.data[149].value, 10)
				})), !0
			}, 1)),
			qK = aNg.qJ(),
			aNj = (aNg.qJ(L(460)).style.fontWeight = "bold", function(fF, qI) {
				qK.innerHTML = t.y.aNq(fF, bj.eK.data[105].value, qI)
			});
		return aNg.qS(new s6([aNk.button])), aNj(bj.eK.data[149].value, bj.eK.data[148].value), aNg
	}()), qW))
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
	var a9R, aRk, aRl, aRm, aRj = !1;

	function aRn() {
		aRj = !0, a9R = -1, aRk = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aRk[aB] = !1;
		var xW = Math.floor(1 + .02 * h.min);
		aRl = new Array(4), (aRm = new Array(4))[1] = aRm[3] = aRl[0] = aRl[2] = 0, aRm[0] = aRl[3] = -xW, aRl[1] = aRm[2] = xW
	}

	function aRo() {
		if (-1 !== a9R)
			if (0 !== aD.a09 && aH.nR()) {
				for (var aRp = !1, aB = 3; 0 <= aB; aB--) aRk[aB] && (aRp = !0, iO += aRl[aB], iP += aRm[aB], af.a1d(aRl[aB], aRm[aB]), aS.a97());
				aRp ? bf.dl = !0 : ar.nH()
			} else ar.nH()
	}
	this.a29 = function(e8) {
		0 !== aD.a09 && aH.nR() && (aRj || aRn(), aRk[e8] = !0, -1 === a9R) && (a9R = setInterval(aRo, 20), aRo())
	}, this.a2C = function(e8) {
		if (0 !== aD.a09 && (aRj || aRn(), aRk[e8] = !1, -1 !== a9R)) {
			for (var aRp = !1, aB = 3; 0 <= aB; aB--) aRp = aRp || aRk[aB];
			aRp || this.nH()
		}
	}, this.nH = function() {
		if (aRj && -1 !== a9R) {
			for (var aB = 3; 0 <= aB; aB--) aRk[aB] = !1;
			clearInterval(a9R), a9R = -1
		}
	}
}

function cj() {
	this.y = new aRq, this.mR = new aRr, this.p5 = new aRs, this.aEi = new aRt, this.aCK = new aRu, this.aNn = new aRv, this.pi = new aRw, this.aPe = new aRx, this.a6h = new aRy, this.aRz = new aS0, this.aS1 = new aS2, this.aS3 = new aS4, this.aS5 =
		new aS6, this.dd = function() {
			this.y.dd()
		}
}

function aRq() {
	var aS7, aS9;
	this.aG4 = 5, this.aS8 = null;

	function aSH(aB) {
		return aS9[aB].aRj && aS7[aB].aSH()
	}

	function aSE(a1F) {
		aS9[a1F].eM = bf.eM, aS9[a1F].aSB = !1
	}
	this.a1P = 0, this.a1I = 0, this.dd = function() {
		this.aS8 = new Array(this.aG4);
		this.aS8[0] = "territorial.io";
		var aKi = ay.aL4(0);
		ay.a4h(0);
		for (var aB = 1; aB < this.aG4; aB++) this.aS8[aB] = aK.zh() + ".territorial.io";
		for (ay.a4h(aKi), aS7 = new Array(this.aG4), aS9 = new Array(this.aG4), aB = this.aG4 - 1; 0 <= aB; aB--) aS9[aB] = {
			aRj: !1,
			eM: 0,
			aSB: !1
		};
		this.aG5(0, 0)
	}, this.aSC = function(aB) {
		return aS7[aB]
	}, this.j3 = function() {
		for (var aB = this.aG4 - 1; 0 <= aB; aB--) this.aNl(aB) && bf.eM > aS9[aB].eM + 15e3 && (b0.p5.aSD(aB, aS9[aB].aSB), aSE(aB));
		!this.aNl(0) && bf.eM > aS9[0].eM + 8e3 && (aS9[0].eM = bf.eM, this.aG5(0, 0))
	}, this.aPa = function(id) {
		return this.aG5(0, id) && this.aSF(0)
	}, this.aG5 = function(a1F, aMs) {
		if (aS9[a1F].aRj) {
			if (aS7[a1F].aSH()) return aS7[a1F].aSI(aMs), aS7[a1F].aNl();
			aS7[a1F].rs()
		}
		return this.aSG(a1F, aMs), !1
	}, this.aSG = function(a1F, aMs) {
		aS9[a1F].aRj = !0, aSE(a1F), aS7[a1F] = new aSJ, aS7[a1F].dd(a1F, aMs)
	}, this.aSI = function(a1F, aMs) {
		aSH(a1F) && aS7[a1F].aSI(aMs)
	}, this.aSK = function(a1F, aMs) {
		b0.aCK.aSL(a1F)
	}, this.aSF = function(aB) {
		return this.aNl(aB) && aS7[aB].aSF()
	}, this.aSM = function(aB) {
		aS7[aB].aSM()
	}, this.aNl = function(aB) {
		return aS9[aB].aRj && aS7[aB].aNl()
	}, this.send = function(a1F, aC) {
		0 !== a1F && aSE(a1F), aS7[a1F].send(aC)
	}, this.a1u = function(a1F) {
		8 === aa.a1K() && (aS9[a1F].aSB = !0, b0.mR.aSN = !0)
	}, this.close = function(a1F, aSO) {
		aSH(a1F) && aS7[a1F].close(aSO)
	}, this.aSP = function(a1F, aSO) {
		o.a1S(aSO), aSH(a1F) && aS7[a1F].close(aSO)
	}, this.a1T = function(aSO) {
		for (var aB = this.aG4 - 1; 0 <= aB; aB--) this.close(aB, aSO)
	}, this.aSQ = function(a1F, aSO) {
		for (var aB = this.aG4 - 1; 0 <= aB; aB--) aB !== a1F && this.close(aB, aSO)
	}, this.a4t = function() {
		this.close(this.a1P, 3246)
	}, this.aSR = function(a1F, e) {
		aS7[a1F].rs(), o.a1E(a1F, e.code)
	}
}

function aRr() {
	this.aSN = !1, this.j3 = function() {
		bf.k7() % 250 != 249 || aD.gw || (b0.aCK.aSS(+(this.aSN && ag.mj[aD.eX]), al.kg + bN.y.m0), this.aSN = !1)
	}
}

function aRy() {
	function aSt(aSu) {
		var eq = aD.data,
			aSu = (eq.selectedPlayer = bH.pj(aSu), eq.spawningSeed = bH.pj(14), bH.pj(4)),
			aSu = (aSu < 7 ? (eq.gameMode = 1, eq.numberTeams = aSu + 2) : 9 === aSu ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === aSu ? 0 : 10 === aSu ? 1 : 2), eq.isContest = bH.pj(1), bH
				.pj(6));
		return eq.mapType = bS.aDi(aSu) ? 0 : 1, bS.aDj(eq, aSu), eq.mapSeed = bH.pj(14), aSu
	}
	this.aSU = function(a1F, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aSP(a1F, 3205) : ((0 === bH.pj(1) ? function(a1F) {
			var aSY = bH.pj(6);
			0 === aSY ? function(a1F) {
					if (0 === a1F && 8 !== aa.a1K()) {
						t.y.aR0();
						for (var aSl = bH.pj(12), aSm = bH.pj(6), g = new Array(aSl), aB = 0; aB < aSl; aB++) g[aB] = bH.pj(aSm);
						aT.a9X(g)
					}
				}(a1F) : 2 === aSY ? b0.aRz.aSa(a1F) : 3 === aSY || 4 === aSY ? ax.dd() : 9 === aSY ? b0.aS1.aSb(a1F) : 10 === aSY ? b0.aS3.aSc() : 11 === aSY ? b0.aS1.aSd(a1F) : 12 === aSY ? b0.aS3.aSe() : 13 === aSY ? b0.aS5.aSf() :
				14 === aSY ? b0.aS5.aSg() : 15 === aSY ? b0.aS1.aSh() : 16 === aSY ? b0.aRz.aSi(a1F) : 17 === aSY ? b0.aRz.aSj(a1F) : 19 === aSY && b0.aRz.aSk(a1F)
		} : function(a1F) {
			if (8 !== aa.a1K() && !ax.aGZ()) return;
			if (a1F !== b0.y.a1P) b0.y.aSP(a1F, 3244);
			else if (0 === bH.pj(1)) bf.a0I.aSv(bH.aC);
			else {
				var aB, a1F = bH.pj(2);
				if (0 === a1F) {
					var pK, p5 = bH.pj(9);
					0 !== ag.mj[p5] && 0 !== ag.mj[aD.eX] && (pK = bH.pj(10), aN.pJ(p5, aD.eX, pK), af.qA(p5, 1, pK))
				} else if (1 === a1F) ! function() {
					var p5 = bH.pj(9);
					0 !== ag.mj[p5] && 0 !== ag.mj[aD.eX] && b5.aKJ(0, [p5], !0) && aN.pb(p5, 1)
				}();
				else if (2 === a1F) ! function() {
					var p5 = bH.pj(9),
						target = bH.pj(9);
					0 !== ag.mj[p5] && 0 !== ag.mj[target] && 0 !== ag.mj[aD.eX] && b5.aKJ(1, [p5], !0) && (af.qA(p5, 3, 96), af.qA(target, 4, 96), aN.a6o(p5, target))
				}();
				else if (l.a9 && !l.aA) {
					var en = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), en = Math.min(b8.p2.pl.length, 540), aB = 0; aB < en; aB++) bD.aT1(32, b8.p2.pl[aB]);
					b0.y.send(b0.y.a1P, bD.aC)
				}
			}
		})(a1F), bf.aSX())
	}, this.aSn = function(aC) {
		if (bH.dd(aC), bH.e8 = 1, 3 === bH.pj(6)) {
			bH.e8 += 20;
			var eq = aD.data = new a4a,
				aC = aSt(9),
				aDk = eq.humanCount = bH.pj(9) + 1;
			eq.selectableSpawn = 1 === eq.gameMode || aDk < 100, eq.colorsData = new Uint32Array(aDk), eq.playerNamesData = new Array(aDk);
			for (var aB = 0; aB < aDk; aB++) bH.e8++, eq.colorsData[aB] = bH.pj(18), eq.playerNamesData[aB] = bG.w7.wB(bH.pj(5));
			aa.aGG(), bS.a7(aC, eq.mapSeed), aD.a4f()
		} else ! function() {
			bH.e8 += 20;
			var eq = aD.data = new a4a,
				aSs = aSt(1);
			eq.humanCount = 2;
			eq.selectableSpawn = 1, eq.elo = new Uint16Array(2), eq.colorsData = new Uint32Array(2), eq.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e8++, eq.colorsData[aB] = bH.pj(18), eq.elo[aB] = bH.pj(14), eq.playerNamesData[aB] = bG.w7.wB(bH.pj(5));
			aa.aGG(), bS.a7(aSs, eq.mapSeed), aD.a4f()
		}()
	}, this.aSq = function() {
		bH.e8 = 1;
		var aSY = bH.pj(6),
			aSr = bH.pj(10);
		return b0.y.a1I === aSr ? (b0.y.a1P = aSr, !1) : (b0.y.close(b0.y.a1I, 3247), b0.y.a1P = aSr, ax.aDf = bH.pj(10), ax.aGO = bH.pj(3 === aSY ? 9 : 1), b0.y.aG5(aSr, 5) && b0.p5.aGV(), !0)
	}
}

function aS4() {
	this.aSc = function() {
		bj.y.vf(), bj.s3.s4(105, bF.st.su(bF.st.sv(5))), bj.s3.s4(106, bF.st.su(bF.st.sv(8))), bj.s3.s4(109, bH.pj(30)), bj.s3.s4(108, bj.eK.data[109].value), bj.s3.s4(111, bj.eK.data[109].value + 1), bj.s3.s4(107, 0), bj.s3.s4(110, "")
	}, this.aSe = function() {
		var data;
		bH.size < bD.aT2(29) ? b0.y.aSP(0, 3254) : ((data = {
			sp: bH.pj(30),
			vs: bH.pj(16),
			vt: bH.pj(30),
			vu: bH.pj(30),
			vv: bH.pj(30),
			vw: bH.aT3(32),
			username: bG.w9.wR(5),
			vx: bG.w9.wR(3),
			vy: bG.w9.wR(3),
			vz: bH.aT3(32),
			w0: bH.aT3(32),
			w1: bH.pj(30),
			w2: bH.aT3(32),
			w3: bH.aT3(32),
			w4: bH.aT3(32),
			w5: bH.aT3(32),
			aNv: bH.aT3(32),
			aNw: bH.aT3(30),
			aO9: bH.aT3(32),
			aOA: bG.w9.wR(3),
			aO2: bH.aT3(2),
			aO3: bH.aT3(10),
			aO0: bG.w9.wR(8),
			aO4: bH.aT3(5),
			aNi: bH.pj(30),
			aNu: bH.pj(30),
			a0a: bH.aT3(32),
			aNz: bH.pj(3),
			aNy: bH.pj(8),
			aOB: bH.pj(1),
			aOC: bH.pj(1)
		}).aOB && (data.aOD = bH.aT3(32), data.aOE = bH.pj(30), data.aOF = bH.pj(30), data.aOG = bH.pj(1)), 8 === t.sq && (25 === t.a5A().aPZ ? (data.aNO = !0, t.y.aN3 = data, t.a5A().aCN(25, !1)) : (data.aNO = !1, bj.s3.s4(160, +(data
			.aOB && data.aOG)), data.so = bj.eK.data[105].value, t.y.aN0 = data, bj.s3.vr(data), t.a5A().aCN(16, !0))))
	}
}

function aS6() {
	this.aSf = function() {
		var aB;
		if (bH.size < bD.aT2(23)) b0.y.aSP(0, 3259);
		else {
			var t9 = bH.pj(6),
				en = bH.pj(10),
				data = [];
			if (9 === t9 || 10 === t9 || 11 === t9) {
				for (aB = 0; aB < en; aB++) data.push([bH.pj(30), bG.w9.wR(5), bH.aT3(32), 0, bH.pj(30)]);
				8 === t.sq && t.a5A().aCN(21, !0, {
					t9: t9,
					data: data
				})
			} else if (12 === t9) {
				for (aB = 0; aB < en; aB++) data.push([bH.pj(20), bH.pj(30), bH.pj(30), bH.aT3(32), bH.pj(30), bG.w9.wR(5), bG.w9.wR(5)]);
				8 === t.sq && t.a5A().aCN(21, !0, {
					t9: t9,
					data: data
				})
			} else {
				var hk = bH.pj(16);
				if (bH.aT4(39 + 16 * hk + en * (0 === t9 ? 111 : 1 === t9 ? 101 : 2 === t9 || 3 === t9 ? 127 : 212))) {
					if (0 === t9)
						for (aB = 0; aB < en; aB++) data.push([bH.pj(30), bG.w7.wB(bH.pj(5)), bH.pj(16), bH.pj(30), bH.pj(30)]);
					else if (1 === t9)
						for (aB = 0; aB < en; aB++) data.push([bH.pj(16), bG.w7.wB(bH.pj(3)), bH.pj(16), bG.w7.wB(bH.pj(5)), bH.pj(31), bH.pj(30)]);
					else if (2 === t9 || 3 === t9)
						for (aB = 0; aB < en; aB++) data.push([bH.pj(30), bG.w7.wB(bH.pj(5)), bH.aT3(32), bH.pj(30), bH.pj(30)]);
					else
						for (aB = 0; aB < en; aB++) data.push([bH.pj(20), bH.pj(30), bH.pj(30), bH.pj(30), bH.pj(30), bH.aT3(32), bH.pj(30), bG.w7.wB(bH.pj(5)), bG.w7.wB(bH.pj(5))]);
					8 === t.sq && t.a5A().aCN(21, !0, {
						t9: t9,
						data: data
					})
				} else b0.y.aSP(0, 3260)
			}
		}
	}, this.aSg = function() {
		if (bH.size < bD.aT2(29)) b0.y.aSP(0, 3265);
		else {
			var aT5 = bH.pj(4),
				aT6 = bH.pj(7),
				aT7 = bH.pj(11);
			if (bH.aT4(29 + 16 * aT6 + 16 * aT7 + 11 * aT5)) {
				for (var data = [], aB = 0; aB < aT5; aB++) {
					for (var a0p = bG.w7.wB(bH.pj(3)), aT8 = bH.pj(8), aOn = [], f6 = 0; f6 < aT8; f6++) aOn.push(bH.pj(16));
					data.push({
						name: "[" + a0p + "]",
						aOn: aOn
					})
				}
				8 === t.sq && t.a5A().aCN(23, !0, data)
			} else b0.y.aSP(0, 3266)
		}
	}
}

function aS0() {
	function aTA() {
		var id = bH.pj(3);
		return 0 === id ? {
			id: id,
			so: bH.pj(30),
			r: bn.aCp.aEn(bG.w9.wR(7))
		} : 1 === id ? {
			id: id,
			so: bH.pj(30),
			aDq: bH.pj(3),
			value: bH.pj(30),
			target: bH.pj(30)
		} : 2 === id ? {
			id: id,
			so: bH.pj(30),
			aDq: bH.pj(3)
		} : 3 === id ? {
			id: id,
			so: bH.pj(30),
			aDq: bH.pj(3),
			value: bH.pj(4),
			target: bH.pj(30)
		} : 4 === id ? {
			id: id,
			so: bH.pj(30),
			aDq: bH.pj(3),
			target: bH.pj(30)
		} : 5 === id ? {
			id: id,
			aDq: bH.pj(6)
		} : 6 === id ? {
			id: id,
			value: bH.pj(17)
		} : null
	}
	this.aSa = function(a1F) {
		if (a1F !== b0.y.a1I) b0.y.close(a1F, 3239);
		else if (6 !== aa.a1K()) b0.y.close(a1F, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rg = bn.y.rh[aB],
					playerCount = (rg.th = bH.pj(10), rg.eT = bH.pj(6), rg.mapSeed = bH.pj(14), rg.aDb = bH.pj(4), rg.aFI = bH.pj(6), rg.aFJ = bH.pj(4), rg.aDh = bH.pj(1), rg.aEO = bH.pj(12), rg.spawningSeed = bH.pj(14), bH.pj(16));
				bn.tw.ty[aB] = bH.pj(16);
				for (var f6 = 0; f6 < playerCount; f6++) bn.tw.aD3(aB, bH.pj(30), bG.w9.wR(5), bH.pj(4), bH.pj(30), bH.pj(7), bH.pj(16), bH.pj(18), bH.pj(11), bH.pj(12))
			}
			t.u(29), bn.y.aEG(!0)
		}
	}, this.aSi = function(a1F) {
		if (a1F !== b0.y.a1I) b0.y.close(a1F, 3239);
		else if (bn.a1H) {
			bn.y.aEE[0] = bH.pj(20), bn.y.aEE[1] = bH.pj(20);
			for (var aT9 = bH.pj(16), f6 = 0; f6 < aT9; f6++) {
				var id = bH.pj(3);
				0 === id ? bn.tw.aD3(bH.pj(2), bH.pj(30), bG.w9.wR(5), 0, 1234566, 127, 0, bH.pj(18), 0, bH.pj(12)) : 1 === id ? bn.tw.aDM(bH.pj(16), bH.pj(2)) : 2 === id ? bn.tw.aDI(bH.pj(16), bH.pj(2), bH.pj(2)) : 3 === id ? bn.tw.aDL(bH.pj(
					16), bH.pj(2)) : 4 === id ? bn.tw.aDB(bH.pj(16), bH.pj(2), bH.pj(4), bH.pj(30), bH.pj(7), bH.pj(16), bH.pj(11)) : 5 === id && bn.tw.aDC(bH.pj(16), bH.pj(2), bH.pj(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rg = bn.y.rh[aB];
				if (rg.th = bH.pj(10), 0 === rg.th) {
					if (rg.a1P = bH.pj(10), rg.aDf = bH.pj(10), bn.aCr.dm(aB)) return;
					rg.eT = bH.pj(6), rg.mapSeed = bH.pj(14), rg.aDb = bH.pj(4), rg.aFI = bH.pj(6), rg.aFJ = bH.pj(4), rg.aDh = bH.pj(1), rg.aEO = bH.pj(12), rg.spawningSeed = bH.pj(14), rg.aFK.push(rg.aFK[0]), rg.aFK.shift()
				}
			}
			bn.y.aDX()
		} else b0.y.close(a1F, 3251)
	}, this.aSj = function(a1F) {
		if (a1F !== b0.y.a1I) b0.y.close(a1F, 3272);
		else if (bn.a1H) {
			for (var re = bH.pj(4), rg = bn.y.rh[re], ri = rg.ri, uC = (rg.rj = bH.pj(20), bH.pj(6)), aB = 0; aB < uC; aB++) {
				var aFa = aTA();
				bn.rr.aFZ(aFa), ri.push(aFa)
			}
			bn.y.aEP(re)
		} else b0.y.close(a1F, 3273)
	}, this.aSk = function(a1F) {
		a1F !== b0.y.a1I ? b0.y.close(a1F, 3276) : bn.a1H ? bn.message.aDV(aTA()) : b0.y.close(a1F, 3277)
	}
}

function aS2() {
	this.aSb = function(a1F) {
		var aSx, r7;
		bH.aT4(70) ? (aSx = bH.pj(3), r7 = bi.aTB.j3(bH.pj(30), bH.pj(30)), b0.aCK.aTC(a1F, r7, aSx), 0 < aSx || (0 === a1F && 0 === bj.eK.data[105].value.length ? b0.aCK.aPd(0) : b0.aNn.aTD(a1F), 4 === b0.y.aSC(a1F).aTE() ? 6 === aa.a1K() && b0
			.aEi.aG6(a1F) : 5 !== b0.y.aSC(a1F).aTE() || 8 !== aa.a1K() && 10 !== aa.a1K() || b0.p5.aGV())) : b0.y.aSP(a1F, 3269)
	}, this.aSd = function(a1F) {
		var id = bH.pj(6);
		1 === id ? (bj.s3.s4(160, bH.pj(30)), b0.y.aSM(a1F), aT.a9T || b0.aCK.aPd(1), b7.aCI(), 8 === t.sq && t.a5A().aPo()) : 21 === id ? 8 === t.sq && t.a5A().aCN(17) : 22 === id && (bj.s3.s4(106, bj.eK.data[110].value), bj.s3.s4(110, ""),
			8 === t.sq) && t.a5A().aCN(15)
	}, this.aSh = function() {
		var en = bH.pj(16),
			aTF = bH.pj(16);
		if (bH.aT4(55 + 10 * en + 16 * aTF)) {
			for (var g = [], aB = 0; aB < en; aB++) g.push(bG.w7.wB(bH.pj(10)));
			b7.aCM(g)
		} else b0.y.aSP(0, 3270)
	}
}

function aRs() {
	this.aSD = function(a1F, aSB) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aSB ? 1 : 0), bD.a8(3, 0 === aD.a09 ? bn.a1H ? 6 : 0 : aD.gw ? 1 : aD.kU ? 7 : aD.kS < 7 ? 2 : 8 === aD.kS ? 4 : 9 === aD.kS ? 5 : 3), b0.y.send(a1F, bD.aC)
	}, this.aGV = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a1I), bD.a8(10, ax.aDf), bD.a8(9, ax.aGO), bD.a8(10, l.dx), bD.a8(14, l.dq), b0.y.send(b0.y.a1P, bD.aC)
	}, this.p6 = function(eZ) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eZ), b0.y.send(b0.y.a1P, bD.aC)
	}, this.p7 = function(iN, jJ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, iN), bD.a8(10, jJ), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pB = function(iN, p9) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, iN), bD.a8(9, p9), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pD = function(iN, pC) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, iN), bD.a8(27, pC), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pF = function(iN, n6) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, iN), bD.a8(16, n6), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pI = function(jJ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jJ), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pM = function(e8) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e8), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pO = function(pN) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pN), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pQ = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pR = function(iN, eZ, jJ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, iN), bD.a8(10, jJ), bD.a8(22, eZ), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pZ = function(aTG, aTH) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aTH), bD.a8(10, aTG), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pc = function(a6h) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a6h), b0.y.send(b0.y.a1P, bD.aC)
	}, this.pg = function(aTI, target) {
		var aB, en = aTI.length;
		for (bD.a7(14 + 9 * en), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < en; aB++) bD.a8(9, aTI[aB]);
		b0.y.send(b0.y.a1P, bD.aC)
	}
}

function aRv() {
	this.aTJ = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.aCK.aTK(), b0.y.send(0, bD.aC)
	}, this.aTD = function(a1F) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.st.wN(bj.eK.data[105].value, 5), bG.st.wN(bj.eK.data[106].value, 8), bD.a8(30, bj.eK.data[109].value), b0.y.send(a1F, bD.aC)
	}, this.aPq = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.st.wM(bj.eK.data[110].value), b0.y.send(0, bD.aC)
	}, this.aPm = function(a3x) {
		var en = a3x.qI.length;
		bD.a7(21 + 16 * en), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a3x.ss), bD.a8(8, en), bF.w7.wM(a3x.qI), b0.y.send(0, bD.aC)
	}, this.aO5 = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.ss), bG.st.wN(data.so, 5), b0.y.send(0, bD.aC)
	}, this.aNo = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.ss), bG.st.wN(data.so, 5), bD.aT1(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aRw() {
	this.ph = function() {
		for (var en = aD.kA, zy = bR.result.zy, l5 = zy.length, a0i = (bD.a7(17 + 16 * en + 33 * l5), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, l5), bD.a8(1, +(2 === aD.a06)), bD.a8(1, aD.a0Q % 2), ag.a0i), aB = 0; aB < en; aB++) bD.a8(16, a0i[aB]);
		for (var gb = ag.gb, aB = 0; aB < l5; aB++) {
			var gL = zy[aB];
			bD.a8(9, gL), bD.a8(24, gb[gL])
		}
		b0.y.send(b0.y.a1P, bD.aC)
	}
}

function aRx() {
	this.aPf = function(t9, tA, tB) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, t9), bD.a8(1, +(tA < 0)), bD.a8(1, +(tB < 0)), bD.a8(30, Math.abs(tA)), bD.a8(30, Math.abs(tB)), b0.y.send(0, bD.aC)
	}, this.aPg = function(t9, aPh, aPi) {
		bD.a7(18 + 16 * aPh.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, t9), b0.aCK.aTM(aPh), bD.a8(30, aPi), b0.y.send(0, bD.aC)
	}, this.aPl = function(t9, aPh, aPi) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, t9), bG.st.wN(aPh, 5), bD.a8(30, aPi), b0.y.send(0, bD.aC)
	}, this.aPj = function(aOm, a0o) {
		for (var en = a0o.length, hk = 0, aB = 0; aB < en; aB++) hk += a0o[aB].length;
		for (bD.a7(21 + 3 * en + 16 * hk), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aOm), bD.a8(4, en), bD.a8(7, hk), aB = 0; aB < en; aB++) bD.a8(3, a0o[aB].length), bF.w7.wM(a0o[aB]);
		b0.y.send(0, bD.aC)
	}, this.aPk = function(aOm, tA, tB) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aOm), bD.a8(1, +(tA < 0)), bD.a8(1, +(tB < 0)), bD.a8(20, Math.abs(tA)), bD.a8(20, Math.abs(tB)), b0.y.send(0, bD.aC)
	}
}

function aRt() {
	this.aG6 = function(a1F) {
		var username = bj.eK.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + 18 + bi.aTN.pj()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dx), bD.a8(2, bj.eK.data[158].value), b0.aCK.aTM(username), bA.color.a32(bj.y.vm())),
			username = (bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), b7.aCP());
		bD.a8(9, username[0]), bD.a8(9, username[1]), bi.aTN.zb(), b0.y.a1I = a1F, b0.y.send(a1F, bD.aC)
	}, this.aEj = function(aTQ, a3x) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aTQ), 2 === aTQ ? bE.a8(2, a3x) : 3 === aTQ ? bF.w9.zb(a3x, 7, bE) : 5 === aTQ && (bE.a8(3, a3x.id), bE.a8(3, a3x.value), bE.a8(30, a3x.so)), b0.y.send(b0.y.a1I, bE.aTR())
	}
}

function aRu() {
	this.aSL = function(a1F) {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dv), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), b0.y.send(a1F, bD.aC)
	}, this.aTC = function(a1F, r7, aSx) {
		bD.a7(70), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aSx), bD.a8(30, r7[0]), bD.a8(30, r7[1]), b0.y.send(a1F, bD.aC)
	}, this.aPd = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.aCL = function(id, qI) {
		var en = Math.min(qI.length, 63);
		bD.a7(19 + 16 * en), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, en), bF.w7.wM(qI), b0.y.send(0, bD.aC)
	}, this.aTT = function(aSr, qT) {
		bD.a7(7 + 26 * qT.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qT.length; aB++) bD.a8(16, qT[aB][0]), bD.a8(10, qT[aB][1]);
		b0.y.send(aSr, bD.aC)
	}, this.aSS = function(aTU, aTV) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aTU), bD.a8(12, aTV), b0.y.send(b0.y.a1P, bD.aC)
	}, this.aTM = function(username) {
		bD.a8(5, username.length), bF.w7.wM(username)
	}
}

function aSJ() {
	var a1F, aMs, aTW, aTX = ["wss://", "/s50/", "/s51/", "/s52/"],
		aTY = 0;

	function aSK() {
		b0.y.aSK(a1F, aMs)
	}

	function aTc(e) {
		b0.a6h.aSU(a1F, new Uint8Array(e.data))
	}

	function aTd() {}

	function aSR(e) {
		b0.y.aSR(a1F, e)
	}
	this.dd = function(e8, aTZ) {
		a1F = e8, aMs = aTZ, e8 = l.dr ? "ws://localhost:" + (7130 + a1F) + "/" : aTX[0] + b0.y.aS8[a1F] + aTX[1 + l.ds], (aTW = new WebSocket(e8)).binaryType = "arraybuffer", aTW.onopen = aSK, aTW.onmessage = aTc, aTW.onclose = aSR, aTW
			.onerror = aTd
	}, this.aTb = function() {
		return aTW.readyState === aTW.CONNECTING
	}, this.aNl = function() {
		return aTW.readyState === aTW.OPEN
	}, this.aSF = function() {
		return aTY
	}, this.aSM = function() {
		aTY = 1
	}, this.aSH = function() {
		return this.aTb() || this.aNl()
	}, this.aSI = function(aTZ) {
		aMs = aTZ
	}, this.aTE = function() {
		return aMs
	}, this.send = function(aC) {
		this.aNl() && aTW.send(aC)
	}, this.close = function(aSO) {
		this.aSH() && (aTW.close(aSO), this.rs())
	}, this.rs = function() {
		aTW.onopen = null, aTW.onmessage = null, aTW.onclose = null, aTW.onerror = null
	}
}

function dK() {
	var gap, aTe = !1,
		a72 = 0,
		i = 0,
		sx = 0,
		canvas = null,
		yJ = null,
		a2c = null;

	function aTg() {
		for (var aTm, aTk = 0, en = 0, f8 = Math.floor(i / 2), e7 = Math.floor(sx / 2), aTl = 1.5 * Math.PI, aB = aD.xL; 0 <= aB; aB--) en += a2c[aB], 0 === a2c[aB] && aTk++;
		if (aTe = !1, yJ.clearRect(0, 0, i, i), 0 < en)
			if (aTk === aD.xL) {
				for (aB = aD.xL; 0 <= aB; aB--)
					if (0 < a2c[aB]) {
						! function(aB, f8, e7) {
							yJ.fillStyle = bg.aTt[bg.kX[aB]], yJ.beginPath(), yJ.arc(f8, f8, e7, 0, 2 * Math.PI), yJ.fill()
						}(aB, f8, e7);
						break
					}!
				function(f8) {
					var fontSize = f8 / 3;
					yJ.font = bA.qb.sQ(1, fontSize), yJ.fillStyle = bB.nj, yJ.fillText("100%", f8, f8 + .1 * fontSize)
				}(f8)
			} else {
				for (aB = 0; aB <= aD.xL; aB++) 0 < a2c[aB] && (! function(aB, f8, e7, aTl, aTm) {
					yJ.fillStyle = bg.aTt[bg.kX[aB]], yJ.beginPath(), yJ.arc(f8, f8, e7, aTl, aTm), yJ.lineTo(f8, f8), yJ.fill()
				}(aB, f8, e7, aTl, aTm = aTl + 2 * Math.PI * a2c[aB] / en), function(f8, e7, aTl, aTm) {
					var fF = (aTm - aTl) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e7 * Math.min(fF, .37);
					fontSize < 8 || (aTl = (aTl + aTm) / 2, aTm = (__fx.settings.detailedTeamPercentage ? (100 * fF).toFixed(2) : Math.floor(100 * fF + .5)) + "%", e7 *= .525 - Math.max(.6 * (fF - .7), 0), yJ.font = bA.qb.sQ(1, fontSize), yJ
						.fillStyle = bB.nj, yJ.fillText(aTm, f8 + Math.cos(aTl) * e7, f8 + Math.cos(aTl + 1.5 * Math.PI) * e7))
				}(f8, e7, aTl, aTm), 0 !== aB && aTr(f8, e7, aTl), aTl = aTm);
				aTr(f8, e7, 1.5 * Math.PI)
			}!
		function(f8, e7) {
			yJ.beginPath(), yJ.arc(f8, f8, e7, 0, 2 * Math.PI), yJ.stroke()
		}(f8, e7)
	}

	function aTr(f8, e7, aTu) {
		yJ.beginPath(), yJ.moveTo(f8, f8), yJ.lineTo(f8 + Math.cos(aTu) * e7, f8 + Math.cos(aTu + 1.5 * Math.PI) * e7), yJ.stroke()
	}
	this.dd = function() {
		if (aD.hh) {
			a72 = 0, a2c = new Uint32Array(aD.xL + 1);
			for (var aB = aD.xL; 0 <= aB; aB--) a2c[aB] = 0;
			for (aB = al.kg - 1; 0 <= aB; aB--) a2c[bg.el[al.kl[aB]]] += 1;
			this.resize()
		} else a2c = yJ = canvas = null
	}, this.a80 = function() {
		return i
	}, this.resize = function() {
		aD.hh && (i = Math.floor(.95 * (a0.a1.hw() && !aD.nC ? .18 * h.min : .13 * h.hx)), i = (i *= 1 + (.5 + .2 * a0.a1.hw()) * aD.nC) + i % 2, gap = Math.max(1, .015 * i), sx = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (yJ = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, yJ.strokeStyle = bB.nj, bA.qb.textAlign(yJ, 1), bA.qb.textBaseline(yJ, 1), aTg())
	}, this.kh = function() {
		var dt, ki = this.kj();
		return bg.kX[ki] || (ki = function() {
			for (var ki = -1, aB = aD.xL; 1 <= aB; aB--)(-1 === ki || a2c[aB] > a2c[ki]) && (ki = aB);
			return ki
		}(), dt = ag.gb[ll[0]], -1 !== ki && a2c[ki] > dt) ? a2c[ki] : dt
	}, this.a12 = function() {
		return a72 = 31, this.j3(), this.kj()
	}, this.kj = function() {
		for (var ki = 0, aB = aD.xL; 0 < aB; aB--) a2c[aB] > a2c[ki] && (ki = aB);
		return ki
	}, this.a8M = function() {
		return a2c[2] > 2 * a2c[1] || a2c[1] > 4 * a2c[2]
	}, this.kB = function(aTi) {
		for (var gG = 0, kl = al.kl, el = bg.el, en = al.kg, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kl[aB];
			el[gL] === aTi && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.kk = function(aTi) {
		for (var gG = 0, kl = al.kl, el = bg.el, en = al.kg, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kl[aB];
			el[gL] !== aTi && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.a3V = function() {
		for (var gG = 0, aB = aD.xL; 0 <= aB; aB--) gG += 0 < a2c[aB];
		return gG
	}, this.j3 = function() {
		if (aD.hh && 32 <= ++a72) {
			a72 = 0;
			for (var aB = aD.xL; 0 <= aB; aB--) a2c[aB] = 0;
			for (aB = al.kg - 1; 0 <= aB; aB--) a2c[bg.el[al.kl[aB]]] += ag.gb[al.kl[aB]];
			aTe = !0
		}
	}, this.mW = function() {
		aD.hh && aTe && aTg()
	}, this.uj = function() {
		aD.hh && (aD.nC ? uk.drawImage(canvas, bc.gap, bc.gap) : uk.drawImage(canvas, bc.gap, a7z + 2 * bc.gap))
	}
}

function da() {
	function aU0(eu, en, ew, zl, a9I, fE) {
		if (!(ew < 1 || a9I < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zl(eR)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aU4(ew, en, eu, zl, aTy, fE) {
		if (!(eu < 1 || aTy < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zl(eR)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aU8(iE, iF, aTv) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTv) < bM.iG(iE, aTv)) ? iF : iE
	}
	this.hC = function(aTv) {
		return this.a0D(aTv, function(eR) {
			return ac.ei(eR)
		})
	}, this.hI = function(aTv) {
		return this.a0D(aTv, function(eR) {
			return ac.aHE(eR, aD.eX)
		})
	}, this.a0D = function(aTv, zl) {
		return function(aTv, aTw, zl) {
			for (var h2 = bM.ev(aTv), h4 = bM.ex(aTv), aTy = bS.ey - 2, a9I = bS.ez - 2, aTz = -1, eq = 0; eq < aTw; eq++) {
				var a9H = Math.max(h2 - eq, 1),
					aLC = Math.max(h4 - eq, 1),
					xw = Math.min(h2 + eq, aTy),
					xv = Math.min(h4 + eq, a9I),
					iE = aU0(h2, xw - h2, h4 - eq, zl, a9I, 1),
					iF = aU0(h2 - 1, h2 - a9H - 1, h4 - eq, zl, a9I, -1),
					xw = aU0(h2, xw - h2, h4 + eq, zl, a9I, 1),
					a9H = aU0(h2 - 1, h2 - a9H - 1, h4 + eq, zl, a9I, -1),
					aU3 = aU4(h4, xv - h4 - 1, h2 - eq, zl, aTy, 1),
					aU5 = aU4(h4 - 1, h4 - aLC - 2, h2 - eq, zl, aTy, -1),
					xv = aU4(h4, xv - h4 - 1, h2 + eq, zl, aTy, 1),
					aLC = aU4(h4 - 1, h4 - aLC - 2, h2 + eq, zl, aTy, -1);
				if (aTz = aU8(aTz, iE, aTv), aTz = aU8(aTz, iF, aTv), aTz = aU8(aTz, xw, aTv), aTz = aU8(aTz, a9H, aTv), aTz = aU8(aTz, aU3, aTv), aTz = aU8(aTz, aU5, aTv), aTz = aU8(aTz, xv, aTv), 0 <= (aTz = aU8(aTz, aLC, aTv)) && eq *
					eq >= bM.iG(aTz, aTv)) return aTz
			}
			return -1
		}(aTv, bM.hu(), zl)
	}
}

function d3() {
	function aUA(key) {
		var aRG;
		return "undefined" == typeof URLSearchParams || (aRG = window.location.search, "string" != typeof(aRG = new URLSearchParams(aRG).get(key))) || aRG.length < 1 ? null : aRG
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aUA("account");
				if (!value && !(value = aUA("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.sq, new sr(1e3, {
					ss: 0,
					so: value,
					sp: 0
				})), 1
			}()) {
			var value = aUA("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1C = new URL(window.location.href);
		a1C.search = "";
		try {
			return history.replaceState(null, "", a1C.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aOI = function(key, value) {
		if (0 === a0.id) try {
			var a1C = new URL(window.location.href),
				gL = a1C.searchParams;
			gL.set(key, value), a1C.search = gL.toString(), history.replaceState(null, "", a1C.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aUC, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a4h(0)
	}, this.value = function(gL) {
		return g[gL]
	}, this.aL4 = function() {
		return bL.du(aUC - 1, 2)
	}, this.a4h = function(aKi) {
		aUC = 2 * aKi % 32768 + 1
	}, this.random = function() {
		return aUC = 167 * aUC % 32768
	}, this.jR = function(me) {
		return bL.du(me * this.random(), 32768)
	}, this.k2 = function(gL) {
		return 0 !== gL && this.random() < this.value(gL)
	}, this.ik = function(f6, f7) {
		return f6 + this.jR(f7 - f6)
	}
}

function cz() {
	this.pv = new aUD, this.a4s = new aUE, this.aIK = new aUF, this.dd = function() {
		aD.gw || this.pv.dd()
	}, this.j3 = function() {
		aD.gw || (this.pv.j3(), 3 !== t.sq) || bf.k7() % 15 != 5 && 2 !== aD.a09 || t.a5A().aRH()
	}, this.aRK = function() {
		0 === aD.a09 && aa.aGG(), aD.a4b.a50(), aD.data.canvas = null, b0.y.close(b0.y.a1P, 3257), b0.y.a1P = 0, aD.data.isReplay = 1, aD.a4f()
	}, this.aRJ = function(qI) {
		var aB = qI.indexOf("=");
		return 0 <= aB ? qI.substring(aB + 1) : qI
	}, this.aRI = function(qI) {
		return "https://territorial.io/?replay=" + qI
	}
}

function aUD() {
	this.aUH = null, this.aUI = null, this.aUJ = null, this.aUK = null, this.aUL = null, this.aUM = null, this.a4r = "";
	var aUN = 0;
	this.dd = function() {
		this.aUH = [], this.aUI = [], this.aUJ = [], this.aUK = [], this.aUL = [0], this.aUM = [0], aUN = 0, this.a4r = ""
	}, this.pw = function(id, fW, fY, fa) {
		aD.gw || 2 === aD.a09 || (0 === this.aUL[aUN] && (this.aUM[aUN] ? (this.aUL.push(1), this.aUM.push(0), aUN++) : this.aUL[aUN] = 1), this.aUH.push(id), this.aUI.push(fW), this.aUJ.push(void 0 === fY ? 0 : fY), this.aUK.push(void 0 === fa ?
			0 : fa), this.aUM[aUN]++)
	}, this.j3 = function() {
		0 === this.aUL[aUN] ? this.aUM[aUN]++ : (this.aUL.push(0), this.aUM.push(0), aUN++)
	}
}

function aUF() {
	var aUO = 0;

	function aUS(qI, id) {
		aUO || (id ? 1 === id ? aN.a69 = L(462) + ": " + qI : t.u(4, 3, new v(L(463), qI, 1)) : t.u(4, 3, new v("⚠️ " + L(461), qI, 1)))
	}
	this.wR = function(qI, aUP) {
		var qT;
		return aUO = aUP, bG.st.wJ(bG.st.wH(bG.st.wF(qI))), aN.a69 = "", !(! function() {
			if (bH.size < 10) aUS("File Too Small");
			else {
				var aUU = bH.pj(12),
					aTV = (aUU !== l.rVersion && aUS("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aUU) + ("   Compatible at territorial.io/" + aUU), 1), bH.pj(12)),
					aUV = bH.pj(31);
				if (aUV !== bH.size) aUS("Size Error: " + aUV + " " + bH.size);
				else if (function(j, aUU) {
						for (var gL = bH.aC, en = bH.size, aTV = aUU, aB = 3; aB < en; aB++) aTV = aTV + gL[aB] & 4095;
						return aTV === j || (aUS("Hash Error: " + aTV + " " + j + " " + en), !1)
					}(aTV, aUU)) return 1
			}
			return
		}() || (aUP = bH, (qT = aD.data = new a4a).mapType = aUP.pj(2), qT.mapProceduralIndex = aUP.pj(8), qT.mapRealisticIndex = aUP.pj(8), qT.mapSeed = aUP.pj(14), qT.mapName = aUP.aUX(5), 2 === qT.mapType && aUP.aUY(), qT
			.passableWater = aUP.pj(1), qT.passableMountains = aUP.pj(1), qT.playerCount = aUP.pj(10), qT.humanCount = aUP.pj(10), qT.selectedPlayer = aUP.pj(9), qT.gameMode = aUP.pj(1), qT.playerMode = aUP.pj(2), qT.battleRoyaleMode =
			aUP.pj(2), qT.numberTeams = aUP.pj(4), qT.isZombieMode = aUP.pj(1), qT.isContest = aUP.pj(1), qT.isReplay = aUP.pj(1), qT.elo = aUP.aUZ(2, 14, 2), qT.colorsType = aUP.pj(1), qT.colorsPersonalized = aUP.pj(1), qT.colorsData =
			aUP.aUZ(10, 18, 512), qT.selectableColor = aUP.pj(1), qT.teamPlayerCount = aUP.aUZ(4, 10, 9), qT.neutralBots = aUP.pj(1), qT.botDifficultyType = aUP.pj(2), qT.botDifficultyValue = aUP.pj(4), qT.botDifficultyTeam = aUP.aUZ(4,
				4, 9), qT.botDifficultyData = aUP.aUZ(10, 4, 512), qT.spawningType = aUP.pj(2), qT.spawningSeed = aUP.pj(14), qT.spawningData = aUP.aUZ(11, 12, 1024), qT.selectableSpawn = aUP.pj(1), qT.playerNamesType = aUP.pj(2), qT
			.playerNamesData = aUP.aUa(10, 5, 512), qT.selectableName = aUP.pj(1), qT.aIncomeType = aUP.pj(2), qT.aIncomeValue = aUP.pj(8), qT.aIncomeData = aUP.aUZ(10, 8, 512), qT.tIncomeType = aUP.pj(2), qT.tIncomeValue = aUP.pj(8), qT
			.tIncomeData = aUP.aUZ(10, 8, 512), qT.iIncomeType = aUP.pj(2), qT.iIncomeValue = aUP.pj(8), qT.iIncomeData = aUP.aUZ(10, 8, 512), qT.sResourcesType = aUP.pj(2), qT.sResourcesValue = aUP.pj(11), qT.sResourcesData = aUP.aUZ(10,
				11, 512), ! function() {
				var i6 = bH,
					wS = i6.pj(5),
					aUb = i6.pj(30),
					aUc = i6.pj(30);
				if (aUb + aUc > 8 * i6.size) return void aUS("Corrupted File");
				return function(en) {
						var aUf = new Uint8Array(en),
							aUg = new Uint16Array(en),
							aUh = new Uint32Array(en),
							aUi = new Uint32Array(en);
						b9.pv.aUH = aUf, b9.pv.aUI = aUg, b9.pv.aUJ = aUh, b9.pv.aUK = aUi;
						for (var aB = 0; aB < en; aB++) {
							var id = bH.pj(4);
							aUf[aB] = id, aUg[aB] = bH.pj(9), 0 === id ? aUh[aB] = bH.pj(22) : 1 === id ? (aUh[aB] = bH.pj(10), aUi[aB] = bH.pj(10)) : 2 === id ? (aUh[aB] = bH.pj(10), aUi[aB] = bH.pj(9)) : 3 === id ? (aUh[aB] = bH.pj(10),
								aUi[aB] = bH.pj(27)) : 4 === id ? (aUh[aB] = bH.pj(10), aUi[aB] = bH.pj(16)) : 5 === id || 6 === id ? aUh[aB] = bH.pj(10) : 7 === id ? aUh[aB] = bH.pj(1) : 10 === id && (aUh[aB] = bH.pj(20), aUi[aB] =
								bH.pj(22))
						}
					}(aUb),
					function(en, wS) {
						var aUL = new Uint8Array(en),
							aUM = new Array(en);
						aUM.fill(0), b9.pv.aUL = aUL, b9.pv.aUM = aUM;
						for (var aB = 0; aB < en; aB++) aUL[aB] = bH.pj(1), aUM[aB] = bH.pj(wS)
					}(aUc, wS), 1
			}()) || (bH.e8 < 8 * bH.size - 13 || bH.e8 > 8 * bH.size ? (aUS("Out Of Bounds Error: " + bH.e8 + " " + 8 * bH.size), 1) : (b9.pv.a4r = qI, 2 === aD.data.mapType && (aUS("Load base64 image...", 2), 1))))
	}, this.aIL = function(aHv, aUT) {
		var a2x = document.createElement("canvas"),
			hp = a2x.getContext("2d");
		if (a2x.width = aHv.width, a2x.height = aHv.height, hp.drawImage(aHv, 0, 0), aD.data.canvas = a2x, aUO || aUT) return aD.a09 ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aRK()
	}
}

function aUE() {
	this.zb = function() {
		var wS = function() {
				for (var aUM = b9.pv.aUM, en = aUM.length, max = 0, aB = 0; aB < en; aB++) max = Math.max(max, aUM[aB]);
				return wZ(Math.max(max, 1))
			}(),
			i = (qT = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e8 += 43, i.a8(2, qT.mapType), i.a8(8, qT.mapProceduralIndex), i.a8(8, qT.mapRealisticIndex), i.a8(14, qT.mapSeed), i.aUp(qT.mapName, 5), 2 === qT.mapType && i.aUq(qT.canvas),
				i.a8(1, qT.passableWater), i.a8(1, qT.passableMountains), i.a8(10, qT.playerCount), i.a8(10, qT.humanCount), i.a8(9, qT.selectedPlayer), i.a8(1, qT.gameMode), i.a8(2, qT.playerMode), i.a8(2, qT.battleRoyaleMode), i.a8(4, qT
					.numberTeams), i.a8(1, qT.isZombieMode), i.a8(1, qT.isContest), i.a8(1, qT.isReplay), i.dk(qT.elo, 2, 14), i.a8(1, qT.colorsType), i.a8(1, qT.colorsPersonalized), i.dk(qT.colorsData, 10, 18), i.a8(1, qT.selectableColor), i.dk(
					qT.teamPlayerCount, 4, 10), i.a8(1, qT.neutralBots), i.a8(2, qT.botDifficultyType), i.a8(4, qT.botDifficultyValue), i.dk(qT.botDifficultyTeam, 4, 4), i.dk(qT.botDifficultyData, 10, 4), i.a8(2, qT.spawningType), i.a8(14, qT
					.spawningSeed), i.dk(qT.spawningData, 11, 12), i.a8(1, qT.selectableSpawn), i.a8(2, qT.playerNamesType), i.aUr(qT.playerNamesData, 10, 5), i.a8(1, qT.selectableName), i.a8(2, qT.aIncomeType), i.a8(8, qT.aIncomeValue), i.dk(qT
					.aIncomeData, 10, 8), i.a8(2, qT.tIncomeType), i.a8(8, qT.tIncomeValue), i.dk(qT.tIncomeData, 10, 8), i.a8(2, qT.iIncomeType), i.a8(8, qT.iIncomeValue), i.dk(qT.iIncomeData, 10, 8), i.a8(2, qT.sResourcesType), i.a8(11, qT
					.sResourcesValue), i.dk(qT.sResourcesData, 10, 11), ! function(wS) {
					var i = bE,
						aUH = b9.pv.aUH,
						fW = b9.pv.aUI,
						fY = b9.pv.aUJ,
						fa = b9.pv.aUK,
						en = aUH.length;
					i.a8(5, wS), i.a8(30, en), i.a8(30, b9.pv.aUM.length);
					for (var aB = 0; aB < en; aB++) {
						var f8 = aUH[aB];
						i.a8(4, f8), i.a8(9, fW[aB]), 0 === f8 ? i.a8(22, fY[aB]) : 1 === f8 ? (i.a8(10, fY[aB]), i.a8(10, fa[aB])) : 2 === f8 ? (i.a8(10, fY[aB]), i.a8(9, fa[aB])) : 3 === f8 ? (i.a8(10, fY[aB]), i.a8(27, fa[aB])) : 4 === f8 ? (i
							.a8(10, fY[aB]), i.a8(16, fa[aB])) : 5 === f8 || 6 === f8 ? i.a8(10, fY[aB]) : 7 === f8 ? i.a8(1, fY[aB]) : 10 === f8 && (i.a8(20, fY[aB]), i.a8(22, fa[aB]))
					}
				}(wS), ! function(wS) {
					for (var i = bE, aUL = b9.pv.aUL, aUM = b9.pv.aUM, en = aUL.length, aB = 0; aB < en; aB++) i.a8(1, aUL[aB]), i.a8(wS, aUM[aB])
				}(wS), bE.e8),
			qT = bL.du(i - 1, 6) + 1,
			wS = (bD.aT2(6 * qT) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e8 = 24, i.a8(31, i.g.length), i.e8 = 12, i.a8(12, function() {
					for (var g = bE.g, en = g.length, aTV = l.rVersion, aB = 3; aB < en; aB++) aTV = aTV + g[aB] & 4095;
					return aTV
				}())
			}(), bH.dd(bE.g), bF.st.su(bF.st.sv(qT)));
		return bH.uD(), bE.dd(), wS
	}
}

function cp() {
	var f8, bu = !1,
		aUt = !1,
		aUu = -1e4,
		aUv = -1,
		aUw = 0;

	function resize(aV0) {
		f8 = 0, ab.tI() && (aUy(aV0) || bu) && (bu = !1, bc.resize(), bW.aBu.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a09 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a97()) : (aa.aGI(), aa.aGJ()), bf.dl = !0)
	}

	function aUx(fF) {
		return fF && 128 < fF ? Math.floor(fF) : 128
	}

	function aUy(aV0) {
		var i, j, aV2, sx, a8V;
		if (!(0 < h.sY)) return sx = aUx(document.documentElement.clientWidth), a8V = aUx(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = sx, j = a8V, aV2 = 0 !== a0.id || i < j ?
			700 : 1200, aV2 = Math.min(aV2 / ((i + j) / 2), 1), aV2 = 0 === bj.eK.data[1].value ? 2 * aV2 / 3 : Math.min(aV2 + (bj.eK.data[1].value - 1) * (1 - aV2) / 2, 1), h.k = (window.devicePixelRatio || 1) * aV2, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aV0 && !aUt ? (aUt = !0, t.removeChild(document.body, a1c)) : aUt && (aUt = !1, document.body.appendChild(a1c)), i = Math.floor(.5 + sx * h.k), j = Math.floor(.5 + a8V * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aBW(i, j), h.max = a6O(i, j), h.hx = bL.du(i + j, 2), h.ug = i / j, a1c.width = i, a1c.height = j, a1c.style.width = sx + "px", a1c.style.height = a8V + "px", aUv = bf.eM + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hx = 0, this.ug = 1, this.k = 1, this.sY = 0, this.de = function() {
		this.i = aUx(document.documentElement.clientWidth) + 2, this.j = aUx(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		f8 = 1, a1c = document.getElementById("canvasA"), (uk = a1c.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aUy(0)
	}, this.j3 = function() {
		50 <= ++f8 && resize(0), -1 === aUv || bf.eM < aUv || (aUv = -1, 2e3 * ++aUw >= bf.eM + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(jP) {
		bu = !0, resize(jP)
	}, this.a2H = function() {
		aUu + 1e3 > bf.eM || (aUu = bf.eM, resize(0))
	}
}

function dH() {
	this.aTB = new aV4, this.a0y = new aV5, this.aTN = new aV6
}

function aV6() {
	this.pj = function() {
		return 69
	}, this.zb = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aV5() {
	this.a0z = function() {
		for (var gL, en = al.kg, zx = al.kl, a0i = ag.a0i, a8I = this.aHe(), aB = 0; aB < en; aB++) gL = zx[aB], bA.g9.jX(gL) || (a0i[gL] = a8I);
		var q0 = ag.q0,
			jC = ag.jC,
			jD = ag.jD,
			a0g = ag.a0g,
			en = aD.kA;
		for (aB = 0; aB < en; aB++)(0 === a0g[aB] || jD[aB] < 1 || 2 * q0[aB] > 3 * (jC[aB] + jD[aB])) && (a0i[aB] = 0);
		var a0w = 0;
		for (aB = 0; aB < en; aB++) a0w += 0 < a0i[aB];
		return a0w
	}, this.aHe = function() {
		return Math.min(65535, bf.k7())
	}
}

function aV4() {
	function aVA(g, fF, hf) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fF >> (aB + hf) % 30 & 1)) % 256
	}
	this.j3 = function(aV7, aV8) {
		var g = new Uint8Array(256);
		return function(g, aV7, aV8) {
				var aB, aVC = 3 + (4 + aV7) % 32768,
					aVD = 12 + aV8 % 32768,
					aVE = 17 + ((aV7 & aV8) + (aV7 | aV8) + aV7) % 32768;
				for (aB = 0; aB < 256; aB++) aVC = 1 + aVC * aVD % aVE, g[aB] = aVC % 256
			}(g, aV7, aV8), aVA(g, aV7, 2), aVA(g, aV8, 7),
			function(g) {
				var aB, fF, e8 = 0;
				for (aB = 0; aB < 3e4; aB++) fF = g[e8], g[e8] = (fF + aB + g[(e8 + aB) % 256]) % 256, e8 = (fF + aB + e8 + (fF & e8)) % 256
			}(g),
			function(g) {
				var aB, a8V = 1,
					tf = 1;
				for (aB = 0; aB < 256; aB += 2) a8V = (1 + a8V) * (g[aB] + 1) % 1073741824, tf = (1 + tf) * (g[aB + 1] + 1) % 1073741824;
				return [a8V, tf]
			}(g)
	}
}

function cm() {
	var aVF, aVG, i1, aVH;
	this.dd = function() {
		var aB, eu, ew, aTO, aVI, i, j, yJ, hm, wj, fF, gL, f3, f6, aVL;
		if (function() {
				if (i1 = !0, aVH = "rgb(" + bS.wh[0] + "," + bS.wh[1] + "," + bS.wh[2] + ")", bS.aKr(bS.eT)) return 1;
				return i1 = !1, 0
			}()) aVG = null;
		else {
			for (aVF = bL.du(96, 4), aVI = 1 === bS.eT ? (aTO = 0, 160) : (aTO = 128, 32), aVH = "rgb(" + aTO + "," + aTO + "," + aTO + ")", aVG = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aVG[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.ey : aVF, j = aB % 2 == 0 ? aVF : bS.ez + 2 * aVF, aVG[aB].width = i, aVG[aB].height = j, wj = (hm = (yJ = aVG[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (ew = aVF - 1; 0 <= ew; ew--)
						for (fF = aVI + Math.floor((ew + 1) * (aTO - aVI) / (aVF + 1)), eu = i - 1; 0 <= eu; eu--) wj[gL = 4 * ((0 === aB ? aVF - ew - 1 : ew) * i + eu)] = fF, wj[gL + 1] = fF, wj[gL + 2] = fF, wj[gL + 3] = 255;
				else {
					for (eu = aVF - 1; 0 <= eu; eu--)
						for (fF = aVI + Math.floor((eu + 1) * (aTO - aVI) / (aVF + 1)), ew = j - 1 - aVF; aVF <= ew; ew--) wj[gL = 4 * (ew * i + (3 === aB ? aVF - eu - 1 : eu))] = fF, wj[gL + 1] = fF, wj[gL + 2] = fF, wj[gL + 3] = 255;
					for (f6 = 1; 0 <= f6; f6--)
						for (eu = aVF - 1; 0 <= eu; eu--)
							for (ew = aVF - 1; 0 <= ew; ew--) f3 = (Math.pow(eu * eu + ew * ew, .5) + 1) / (aVF + 1), fF = aVI + Math.floor((1 < f3 ? 1 : f3) * (aTO - aVI)), wj[gL = 4 * ((0 === f6 ? aVF - ew - 1 : ew + f6 * (j - aVF)) * i + (
								1 === aB ? eu : aVF - eu - 1))] = fF, wj[gL + 1] = fF, wj[gL + 2] = fF, wj[gL + 3] = 255
				}
				yJ.putImageData(hm, 0, 0)
			}
			aVL = aVI, bS.wc.fillStyle = "rgb(" + aVL + "," + aVL + "," + aVL + ")", bS.wc.fillRect(0, 0, bS.ey, 1), bS.wc.fillRect(0, bS.ez - 1, bS.ey, 1), bS.wc.fillRect(0, 0, 1, bS.ez), bS.wc.fillRect(bS.ey - 1, 0, 1, bS.ez)
		}
	}, this.yD = function() {
		var f6 = i1 ? 0 : -aVF;
		aMb(f6, f6, bS.ey - 2 * f6, bS.ez - 2 * f6, ba.aVM, ba.aVN, ba.aVO, ba.aVP) || (uk.fillStyle = aVH, uk.fillRect(0, 0, h.i, h.j))
	}, this.uj = function() {
		i1 || (aMa(0, -aVF, bS.ey, aVF, ba.aVM, ba.aVN, ba.aVO, ba.aVP) && uk.drawImage(aVG[0], ba.aVQ, ba.aVR - aVF), aMa(bS.ey, -aVF, aVF, bS.ez + 2 * aVF, ba.aVM, ba.aVN, ba.aVO, ba.aVP) && uk.drawImage(aVG[1], ba.aVQ + bS.ey, ba.aVR - aVF),
			aMa(0, bS.ez, bS.ey, aVF, ba.aVM, ba.aVN, ba.aVO, ba.aVP) && uk.drawImage(aVG[2], ba.aVQ, ba.aVR + bS.ez), aMa(-aVF, -aVF, aVF, bS.ez + 2 * aVF, ba.aVM, ba.aVN, ba.aVO, ba.aVP) && uk.drawImage(aVG[3], ba.aVQ - aVF, ba.aVR - aVF))
	}
}

function d6() {
	this.aHc = new aVS, this.yG = new aVT, this.y = new aVU, this.iX = new aVV, this.aVL = new aVW, this.m5 = new aVX, this.jy = new aVY, this.kx = new aVZ, this.aVa = new aVb, this.aVc = new aVd, this.mG = new aVe, this.hN = new aVf, this.lW =
		new aVg, this.kz = new aVh, this.hQ = new aVi, this.m9 = new aVj, this.q8 = new aVk, this.dd = function() {
			this.lW.dd(), this.yG.dd(), this.y.dd(), this.iX.dd(), this.aVL.dd(), this.aVc.dd(), this.m9.dd()
		}, this.uj = function() {
			this.aVc.uj(), this.yG.uj()
		}
}

function aVY() {
	this.j3 = function(player) {
		return !!bN.mG.mH(player) && !(bN.y.kE[player] >= Math.max(3 * ao.performance.lO, aE.kO[aE.hW[player]]) || !bA.g9.mI(player, aE.kM[aE.hW[player]], 32, 0)) && (aW.aBJ() ? function(player) {
			var aVn = bN.kz.aBM(),
				en = aVn.length;
			if (0 === en) return !1;
			aVn = aVn[ay.jR(en)], en = bN.y.m3[aVn];
			if (bN.m9.mA(player, en)) return !1;
			return !! function(player, mC) {
				var mC = bM.iV(bN.y.mF[mC]),
					h2 = bM.ev(mC),
					mC = bM.ex(mC),
					n9 = ag.ie[player],
					nA = ag.ih[player],
					nM = ag.ig[player],
					player = ag.ii[player],
					nM = Math.max(h2 - nM, n9 - h2),
					n9 = Math.max(mC - player, nA - mC);
				return nM < 100 && n9 < 100
			}(player, aVn) && !!bN.hQ.q7(player, en, 1) && (bA.g9.mK(player), bN.y.mL(player), !0)
		}(player) : !!(ao.iz.j3(player) || ao.io.j3(player) || ao.iq.j3(player)) && (function(player) {
			bO.fP[1] = 4, bA.g9.mK(player), bN.y.mL(player)
		}(player), !0))
	}
}

function aVj() {
	var aVq = 0,
		aVr = null;
	this.dd = function() {
		null === aVr && (aVr = new Uint16Array(2 * bN.y.kO)), aVq = 0
	}, this.jG = function(aVs, m9) {
		var aVt = aVr;
		aVt[aVq++] = aVs, aVt[aVq++] = m9
	}, this.mA = function(player, m8) {
		for (var aVt = aVr, en = aVq, aB = 0; aB < en; aB += 2)
			if (aVt[aB] === m8 && bN.kz.aVu(aVt[aB + 1]) && player === bN.y.m4[bO.fP[2]] >> 3) return !0;
		return !1
	}, this.aVv = function(aVw) {
		var m5 = bN.y.m1[aVw];
		if (!(m5 < 64)) {
			for (var m8 = bN.y.m3[aVw], aVt = aVr, en = aVq, aB = en - 2; 0 <= aB; aB -= 2)
				if (aVt[aB] === m8) {
					{
						aW1 = void 0;
						var aW1 = aVt[aB + 1];
						bN.kz.aVu(aW1) && bN.m9.aW9(bO.fP[2])
					}
					aVt[aB] = aVt[en - 2], aVt[aB + 1] = aVt[en - 1], en -= 2
				} aVq = en
		}
	}, this.aVy = function(aVz, aW0) {
		for (var aW1 = bN.y.m3[aVz], m8 = -1, aVt = aVr, en = aVq, aB = 1; aB < en; aB += 2)
			if (aVt[aB] === aW1) {
				m8 = aVt[aB - 1];
				break
			} if (-1 === m8) return !1;
		if (!bN.kz.aVu(m8)) return !1;
		var aVw = bO.fP[2],
			lV = bN.y.m2[aVw];
		if (aW0 === lV[lV.length - 1]) bN.y.m2[aVz] = bN.lW.aW2(bN.y.m2[aVz], bN.lW.le(lV));
		else {
			var aW3 = bN.kz.aW4(lV, aW0);
			if (-1 === aW3) return !1;
			var aW5 = bN.y.mE[aVw];
			aW3 === aW5 ? (aVw = bM.iV(bN.y.mF[aVw]), bN.y.m2[aVz] = bN.lW.aW7(bN.y.m2[aVz], lV, aW3, aW0, bM.iD(lV[aW3], aW0) > bM.iD(lV[aW3], aVw))) : bN.y.m2[aVz] = bN.lW.aW7(bN.y.m2[aVz], lV, aW3, aW0, aW5 < aW3)
		}
		return !0
	}, this.aW9 = function(aWA) {
		var lV, l5 = bN.y,
			m5 = l5.m1[aWA];
		return m5 % 64 != 5 && (lV = l5.m2[aWA], l5.aWB[aWA] = 65535 - l5.aWB[aWA], l5.mE[aWA] = lV.length - l5.mE[aWA] - 2, l5.m2[aWA] = bN.lW.le(lV), l5.m1[aWA] = m5 - m5 % 64 + 5, !0)
	}
}

function aVe() {
	this.mH = function(player) {
		return !!aD.data.passableWater && bN.y.m0 !== bN.y.kO && bN.y.kE[player] !== bN.y.aWC && 0 !== ag.gU[player].length
	}, this.q3 = function(aTv) {
		var m5 = bO.fP[1];
		return !(4 <= m5 || !bN.kz.aWD(bM.ed(aTv))) && ac.ei(bM.ed(bM.iZ(aTv, m5)))
	}
}

function aVS() {
	this.aHd = function(player) {
		for (var a7i = bN.y.a7i, tA = player << 3, aB = tA + bN.y.kE[player] - 1; tA <= aB; aB--) this.aWE(a7i[aB])
	}, this.aWE = function(aWF) {
		var y = bN.y,
			aWG = y.m0 - 1,
			aWH = y.m4[aWF],
			aWI = y.aWJ[aWF],
			aWK = y.mF[aWF];
		y.m0 = aWG, y.m4[aWF] = y.m4[aWG], y.mF[aWF] = y.mF[aWG], y.aWB[aWF] = y.aWB[aWG], y.a6g[aWF] = y.a6g[aWG], y.aWJ[aWF] = y.aWJ[aWG], y.m3[aWF] = y.m3[aWG], y.m1[aWF] = y.m1[aWG], y.aWL[aWF] = y.aWL[aWG], y.m2[aWF] = y.m2[aWG], y.mE[aWF] =
			y.mE[aWG], y.a7i[y.m4[aWF]] = aWF,
			function(aTu) {
				var player = aTu >> 3,
					y = bN.y,
					en = y.kE[player] - 1,
					aWO = (player << 3) + en;
				y.kE[player] = en, aWO !== aTu && (y.a7i[aTu] = y.a7i[aWO], y.m4[y.a7i[aTu]] = aTu)
			}(aWH), bN.iX.iX[bM.iW(y.mF[aWF])][y.aWJ[aWF]] = aWF, aWG = bM.iW(aWK), aWH = aWI, aWG = bN.iX.iX[aWG], y = aWG.pop(), aWH !== aWG.length && (aWG[aWH] = y, bN.y.aWJ[y] = aWH)
	}
}

function aVT() {
	var aWQ, aWR = 8,
		aWS = null;

	function aWX(wj, eZ, e8) {
		eZ *= 4;
		wj[eZ] = 255, wj[1 + eZ] = 255, wj[2 + eZ] = e8, wj[3 + eZ] = 255
	}

	function aWZ(hp, aVH) {
		var eu, ew, i7, eZ, aWb, aWc, hj = aWR,
			hm = bA.qb.getImageData(hp, hj, hj),
			wj = hm.data,
			l5 = (hj >> 1) - .5,
			aWe = bA.qj.a2V(aVH, .5);
		for (bA.qj.a2X(aVH, aWe, 300) || bA.qj.a2Z(aVH, 100), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) aWc = (hj - 1.5) * (hj - 1.5) / 4, wj[eZ = 4 * (ew * hj + eu)] = (aWb = (i7 = (i7 = eu - l5) * i7 + (i7 = ew - l5) * i7) <= (hj - 4.5) * (hj - 4.5) / 4 ? aWe : aVH)[0], wj[1 + eZ] = aWb[1], wj[2 + eZ] = aWb[2],
				wj[3 + eZ] = aWc < i7 ? 0 : 255;
		hp.putImageData(hm, 0, 0)
	}
	this.dd = function() {
		var e8, hj, a2x, hp, hm, wj;
		(aWQ = aWQ || new Array(aD.ek)).fill(null), e8 = 255, hj = aWR + 4, a2x = bA.qb.wY(hj, hj), hp = bA.qb.getContext(a2x, !0), hm = bA.qb.getImageData(hp, hj, hj), aWX(wj = hm.data, hj + 1, e8), aWX(wj, hj + 2, e8), aWX(wj, 2 * hj + 1, e8),
			aWX(wj, 2 * hj - 3, e8), aWX(wj, 2 * hj - 2, e8), aWX(wj, 3 * hj - 2, e8), aWX(wj, hj * (hj - 3) + 1, e8), aWX(wj, hj * (hj - 2) + 1, e8), aWX(wj, hj * (hj - 2) + 2, e8), aWX(wj, hj * (hj - 2) - 2, e8), aWX(wj, hj * (hj - 1) - 3, e8),
			aWX(wj, hj * (hj - 1) - 2, e8), hp.putImageData(hm, 0, 0), aWS = a2x,
			function() {
				if (aD.hh)
					for (var a2x = new Array(bg.kX.length), en = aD.ek, aWV = aWQ, aAh = bg.aAh, aB = 0; aB < en; aB++) {
						var a5Q = aAh[aB];
						a2x[a5Q] || (a2x[a5Q] = function(a5Q) {
							var a2x = bA.qb.wY(aWR, aWR),
								hp = bA.qb.getContext(a2x, !0),
								g = bO.fM;
							return g.set(bg.aWa[a5Q]), aWZ(hp, g), a2x
						}(a5Q)), aWV[aB] = a2x[a5Q]
					}
			}()
	}, this.uj = function() {
		var aB, player, aWf, aMj, hW, i6, aWh, aWj, aWk, mF = bN.y.mF,
			m4 = bN.y.m4,
			a6g = bN.y.a6g,
			aWL = bN.y.aWL,
			aWl = aWQ,
			aWm = aD.eX,
			en = bN.y.m0,
			aWn = h.i,
			aWo = h.j,
			aWp = bS.ey << 4,
			ec = hy,
			eR = ec / aWR,
			n9 = iO / ec,
			nA = iP / ec,
			i7 = (aWn + iO) / ec - n9,
			iA = (aWo + iP) / ec - nA,
			hp = uk;
		for (hp.imageSmoothingEnabled = ec < 9, bA.qb.textAlign(hp, 1), bA.qb.textBaseline(hp, 1), aB = 0; aB < en; aB++) player = m4[aB] >> 3, hW = a6g[aB], aWf = .9 + .1 * Math.log10(hW), aMj = (i6 = mF[aB]) % aWp / 16 - aWf, i6 = aWo * (Math
			.floor(i6 / aWp) / 16 - aWf - nA) / iA, aWh = -2 * (aWk = ec * aWf) * (1 + (aWj = +(player === aWm)) / 8), aWj = aWj * aWk / 4, (aWk = aWn * (aMj - n9) / i7) < aWh || i6 < aWh || aWn + aWj < aWk || aWo + aWj < i6 || (aMj = 2 *
			aWf * eR, aWh = aWf * ec, null === (aWj = aWl[player]) && (aWl[player] = aWj = function(player) {
				var a2x = bA.qb.wY(aWR, aWR);
				return aWZ(bA.qb.getContext(a2x, !0), ac.a7J(player)), a2x
			}(player)), player === aWm && (hp.setTransform(aMj, 0, 0, aMj, aWk - 2 * aMj, i6 - 2 * aMj), hp.drawImage(aWS, 0, 0)), hp.setTransform(aMj, 0, 0, aMj, aWk, i6), hp.drawImage(aWj, 0, 0), (aWf = Math.floor(function(hW) {
				if (hW < 1e3) return .42;
				if (hW < 1e4) return .34;
				if (hW < 1e6) return .26;
				if (hW < 1e8) return .19;
				return .15
			}(hW) * aWh)) < 6) || (hp.setTransform(1, 0, 0, 1, 0, 0), hp.fillStyle = aWL[aB] ? bB.oH : bB.nj, hp.font = bA.qb.sQ(1, aWf), hp.fillText(bA.ra.zQ(hW), aWk + aWh, i6 + aWh + .1 * aWf));
		hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aVd() {
	var aWs;
	this.dd = function() {
		if (aD.hh) {
			var hd = 1 - aD.xM;
			aWs = new Array(bg.kX.length);
			for (var aB = aD.xL - 1; 0 <= aB; aB--) {
				var a5Q = bg.kX[aB + hd];
				aWs[a5Q] = bP.y.aWu(20, bg.aWv[a5Q])
			}
			9 === aD.kS && (aWs[1] = bP.y.aWu(20, bg.aWv[1]))
		} else aWs = [bP.y.aWu(20, bg.aWv[7])]
	}, this.uj = function() {
		var nT = hy;
		if (!(5 <= nT)) {
			var aWn = h.i,
				aWo = h.j,
				n9 = iO / nT,
				nA = iP / nT,
				nM = (aWn + iO) / nT,
				nN = (aWo + iP) / nT,
				gM = -20 * nT,
				aWx = .5 * gM,
				aWp = bS.ey << 4,
				en = bN.y.m0,
				mF = bN.y.mF,
				m4 = bN.y.m4,
				aAh = bg.aAh,
				a2x = aWs,
				hp = uk;
			3 < nT && (hp.globalAlpha = .5 * (5 - nT));
			for (var aB = 0; aB < en; aB++) {
				var i6 = mF[aB],
					eu = aWn * (i6 % aWp / 16 - n9) / (nM - n9) + aWx,
					i6 = aWo * (Math.floor(i6 / aWp) / 16 - nA) / (nN - nA) + aWx;
				aWn < eu || aWo < i6 || eu < gM || i6 < gM || (hp.setTransform(nT, 0, 0, nT, eu, i6), hp.drawImage(a2x[aAh[m4[aB] >> 3]], 0, 0))
			}
			hp.globalAlpha = 1, hp.setTransform(nT, 0, 0, nT, 0, 0)
		}
	}
}

function aVh() {
	this.aX0 = function(player, id) {
		for (var aX1 = ag.gU[player], en = aX1.length, aB = 0; aB < en; aB++)
			if (bM.hz(aX1[aB], id)) return !0;
		return !1
	}, this.aX2 = function(player, eZ) {
		for (var iF, aX3, eR, aX1 = ag.gU[player], en = aX1.length, i = bS.ey, aX5 = bM.ev(eZ), aX6 = bM.ex(eZ), et = -1, min = bS.ey * bS.ey + bS.ez * bS.ez, id = ac.eV(bM.ed(eZ)), aB = 0; aB < en; aB++)(aX3 = (aX3 = aX5 - (iF = (eR = aX1[
			aB]) >> 2) % i) * aX3 + (aX3 = aX6 - ~~((.5 + iF) / i)) * aX3) < min && bM.hz(eR, id) && (min = aX3, et = iF);
		return et
	}, this.l0 = function(iE, iF) {
		for (var id = ac.eV(bM.ed(iF)), i0 = bM.hs, eR = bM.ed(iE), aX7 = -1, aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			ac.i1(ec) && ac.eV(ec) === id && (-1 === aX7 || bM.iG(bM.eb(ec), iF) < bM.iG(aX7, iF)) && (aX7 = bM.eb(ec))
		}
		return aX7
	}, this.lZ = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec) && ac.yB(player, ec)) return !0
		}
		return !1
	}, this.la = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.ee(ec)) return !0;
			if (ac.gN(ec)) {
				ec = ac.ef(ec);
				if (player !== ec && bs.eg(player, ec)) return !0
			}
		}
		return !1
	}, this.m6 = function(eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec)) {
				ec = ac.ef(ec);
				if (bA.g9.jX(ec)) return ec
			}
		}
		return -1
	}, this.aWD = function(eR) {
		if (ac.i1(eR))
			for (var i0 = bM.hs, aB = 0; aB < 4; aB++)
				if (ac.ei(eR + i0[aB])) return !0;
		return !1
	}, this.n8 = function(player, id) {
		for (var tA = player << 3, tB = tA + bN.y.kE[player], m3 = bN.y.m3, a7i = bN.y.a7i, aB = tA; aB < tB; aB++) {
			var a7j = a7i[aB];
			if (m3[a7j] === id) return a7j
		}
		return -1
	}, this.nD = function(player) {
		return 0 === bN.y.kE[player] ? -1 : bN.y.a7i[player << 3]
	}, this.a5i = function(lP, lQ) {
		var en = bN.y.m0;
		if (en < 1) return -1;
		for (var mF = bN.y.mF, aX8 = 80, aP3 = -1, aB = 0; aB < en; aB++) {
			var f3 = bM.i3(lP, lQ, mF[aB]);
			f3 < aX8 && (aX8 = f3, aP3 = aB)
		}
		return function(aB, lP, lQ) {
			if (aB < 0) return;
			var aXF = bN.y.mF[aB],
				aXG = bM.i9(aXF),
				aXF = bM.iC(aXF),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a6g[aB]));
			return aB = Math.max(aB, bM.iQ(bA.qb.tF(.02, 1.7))), bL.aMi(bM.i8(lP), bM.iB(lQ), aXG, aXF, aB)
		}(aP3, lP, lQ) ? aP3 : -1
	}, this.aVu = function(n6) {
		for (var en = bN.y.m0, m3 = bN.y.m3, aB = 0; aB < en; aB++)
			if (m3[aB] === n6) return bO.fP[2] = aB, !0;
		return !1
	}, this.aHZ = function(player) {
		for (var tA = player << 3, tB = tA + bN.y.kE[player], a7i = bN.y.a7i, a6g = bN.y.a6g, hW = 0, aB = tA; aB < tB; aB++) hW += a6g[a7i[aB]];
		return hW
	}, this.aXA = function(player, aWA) {
		aWA = bN.y.m2[aWA];
		return this.lZ(player, aWA[aWA.length - 1])
	}, this.aXB = function(iE, iF, f3, aXC) {
		var iI = bM.ev(iE),
			iE = bM.ex(iE),
			iK = bM.ev(iF),
			iF = bM.ex(iF),
			iK = (f3 = Math.max(f3, 1), iK - iI),
			iF = iF - iE,
			i7 = bL.du(Math.abs(iK) * aXC, f3),
			aXC = bL.du(Math.abs(iF) * aXC, f3);
		return bM.fB(iI + Math.sign(iK) * i7, iE + Math.sign(iF) * aXC)
	}, this.aW4 = function(lV, eZ) {
		for (var en = lV.length - 1, eu = bM.ev(eZ), ew = bM.ex(eZ), aB = 0; aB < en; aB++) {
			var iE = lV[aB],
				iF = lV[aB + 1],
				n9 = bM.ev(iE),
				iE = bM.ex(iE),
				nM = bM.ev(iF),
				iF = bM.ex(iF);
			if (!(eu !== n9 && eu !== nM && Math.sign(eu - n9) === Math.sign(eu - nM) || ew !== iE && ew !== iF && Math.sign(ew - iE) === Math.sign(ew - iF))) {
				if (n9 === nM || iE === iF) return aB;
				if (Math.abs(eu - n9) === Math.abs(ew - iE) && Math.abs(eu - nM) === Math.abs(ew - iF)) return aB
			}
		}
		return -1
	}, this.aBM = function() {
		for (var aXI = ll[0], m4 = bN.y.m4, m0 = bN.y.m0, g = [], aB = 0; aB < m0; aB++) bA.g9.ko(aXI, m4[aB] >> 3) && g.push(aB);
		return g
	}, this.lX = function(player, lV) {
		for (var tA = player << 3, tB = tA + bN.y.kE[player], a7i = bN.y.a7i, m2 = bN.y.m2, hF = lV[0], kn = lV[lV.length - 1], aB = tA; aB < tB; aB++) {
			var gL = m2[a7i[aB]];
			if (gL[0] === hF && gL[gL.length - 1] === kn) return !0
		}
		return !1
	}
}

function aVi() {
	function aXL(player, aWA) {
		aWA = bM.iV(bN.y.mF[aWA]), aWA = ac.eV(bM.ed(aWA));
		return !!bN.kz.aX0(player, aWA)
	}

	function aXJ(player) {
		return bN.mG.mH(player) && !bN.lW.lc()
	}
	this.hR = function(player, eZ) {
		return !!aXJ(player) && -1 !== (eZ = function(player, eZ) {
			for (var en = bN.y.m0, mF = bN.y.mF, m4 = bN.y.m4, aX8 = bM.hu(), aP3 = -1, aB = 0; aB < en; aB++) {
				var f3 = bM.iD(eZ, bM.iV(mF[aB]));
				f3 < aX8 && bA.g9.ko(player, m4[aB] >> 3) && (aX8 = f3, aP3 = aB)
			}
			return aP3
		}(player, eZ)) && !!aXL(player, eZ) && (bO.fP[3] = bN.y.m3[eZ], !0)
	}, this.pE = function(player, n6) {
		return !!aXJ(player) && !!bN.kz.aVu(n6) && !!aXL(player, bO.fP[2])
	}, this.q7 = function(player, n6, aXM) {
		return !! function(player, n6, aXM) {
			if (aXJ(player) && bN.kz.aVu(n6)) {
				n6 = bO.fP[2];
				if (bA.g9.ko(player, bN.y.m4[n6] >> 3)) {
					if (function(player, aWA) {
							return bN.kz.aXA(player, aWA) && (bO.g[0] = bN.lW.le(bN.y.m2[aWA]), bO.fP[1] = 6, !0)
						}(player, n6)) return 1;
					var aVp = bM.iV(bN.y.mF[n6]),
						aXQ = bN.kz.aX2(player, aVp);
					if (-1 !== aXQ) {
						aXQ = bM.iD(aXQ, aVp);
						if (!(aXM && 120 < aXQ)) {
							aXM = function(aWA, aXR, aVp) {
								var lV = bN.y.m2[aWA],
									aWA = bN.y.mE[aWA],
									aXT = bM.iD(aVp, lV[aWA + 1]);
								if (aXR <= aXT) return bN.kz.aXB(aVp, lV[aWA + 1], aXT, aXR);
								for (var f3 = aXR - aXT, en = lV.length - 1, aB = aWA + 1; aB < en; aB++) {
									var aXU = bM.iD(lV[aB], lV[aB + 1]);
									if (f3 <= aXU) return bN.kz.aXB(lV[aB], lV[aB + 1], aXU, f3);
									f3 -= aXU
								}
								return lV[en]
							}(n6, aXQ, aVp);
							if (bN.kx.q4(player, aXM, 1)) return bO.fP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n6, aXM) && (player = bO.fP[2], bN.y.m1[player] = 64 + bN.y.m1[player] % 64, bN.m9.jG(n6, bN.y.mJ), !0)
	}
}

function aVX() {
	function aXZ(player, hW, aXX, aVp) {
		var jJ;
		if (ac.ee(aXX)) jJ = aD.ek;
		else {
			if ((jJ = ac.ef(aXX)) === player) return void bd.gD(player, hW - bA.g9.gC(player, hW), 12);
			if (!bs.eg(player, jJ)) return void b8.kC.pT(player, jJ, hW)
		}
		ad.jV(player, jJ) || ad.jo(player) ? (ag.gF[player].push(aVp << 2), ad.jG(player, hW, jJ), aF.jH(player, !0)) : bd.gD(player, hW, 12)
	}
	this.j3 = function() {
		for (var m1 = bN.y.m1, mF = bN.y.mF, aWB = bN.y.aWB, aB = bN.y.m0 - 1; 0 <= aB; aB--) 65535 === aWB[aB] && function(aB, aVp, he) {
			if (6 === he) {
				if (bN.m9.aVy(aB, aVp)) return bN.y.mE[aB]++, bN.y.aWB[aB] = 0, 0
			} else {
				var player = bN.y.m4[aB] >> 3,
					aB = bN.y.a6g[aB];
				bd.aXY(player), he < 4 ? aXZ(player, aB, aVp + bM.hr[he] << 2, aVp) : 4 === he ? function(player, hW, aVp) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVp);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aXZ(player, hW, er, aVp);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && !ac.yB(player, er)) return aXZ(player, hW, er, aVp);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aXZ(player, hW, er, aVp)
				}(player, aB, aVp) : 5 === he && function(player, hW, aVp) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVp);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && ac.yB(player, er)) return aXZ(player, hW, er, aVp);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aXZ(player, hW, er, aVp);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aXZ(player, hW, er, aVp)
				}(player, aB, aVp)
			}
			return 1
		}(aB, bM.iV(mF[aB]), m1[aB] % 64) && (bN.m9.aVv(aB), bN.aHc.aWE(aB))
	}, this.aXW = function(player, eZ, he, n6, hW) {
		if (!(5 <= he)) {
			var aWm = aD.eX;
			if (bA.g9.gz(aWm) && bs.eg(player, aWm) && player !== aWm && 0 !== ag.gU[aWm].length && bA.g9.a3Y(player, 5)) {
				for (var aXX, f1 = !1, aB = 0; aB < 4; aB++)
					if (aXX = eZ + bM.hr[aB] << 2, ac.ei(aXX) && !ac.ee(aXX) && ac.ef(aXX) === aWm) {
						f1 = !0;
						break
					} f1 && (aN.a6p(719, 0), he = hW < 25e3 ? L(464) + " (" + bA.ra.zQ(hW) + ") ⛵" : L(465) + " (" + bA.ra.zQ(hW) + ") 🚢", aN.yb(180, he, 719, player, bB.oG, bB.ng, -1, !0, void 0, {
					f7: 1,
					n6: n6
				}))
			}
		}
	}
}

function aVU() {
	this.kO = 512, this.aWC = 8, this.m0 = 0, this.mJ = 0, this.m4 = new Uint16Array(this.kO), this.mF = new Uint32Array(this.kO), this.aWB = new Uint16Array(this.kO), this.a6g = new Uint32Array(this.kO), this.aWJ = new Uint16Array(this.kO), this
		.m3 = new Uint16Array(this.kO), this.m1 = new Uint8Array(this.kO), this.aWL = new Uint8Array(this.kO), this.m2 = new Array(this.kO), this.mE = new Uint16Array(this.kO), this.kE = new Uint8Array(aD.ek), this.a7i = new Uint16Array(this.aWC * aD
			.ek), this.dd = function() {
			this.m0 = 0, this.mJ = 0, this.kE.fill(0), this.m2.fill(null)
		}, this.mL = function(player) {
			var hW = bO.fK[0],
				m5 = bO.fP[1],
				lV = bO.g[0],
				aXc = this.mJ,
				en = this.m0,
				aXd = bM.iU(lV[0]),
				aXe = this.kE[player],
				aXf = (player << 3) + aXe;
			this.m4[en] = aXf, this.mF[en] = aXd, this.aWB[en] = 0, hW < 60 && (bA.g9.gA(player, 60 - hW), hW = 60), this.a6g[en] = hW, this.aWJ[en] = bN.iX.mL(en, bM.iW(aXd)), this.m3[en] = aXc, this.m1[en] = m5, this.aWL[en] = 0, this.m2[en] = lV,
				this.mE[en] = 0, this.mJ = (aXc + 1) % 65536, this.kE[player] = aXe + 1, this.a7i[aXf] = en, this.m0++, bN.m5.aXW(player, lV[lV.length - 1], m5, aXc, hW)
		}, this.j3 = function() {
			bN.m5.j3();
			for (var gL = aD.eX, dt = bN.kz.aHZ(gL), sD = (! function(sD) {
					for (var aXk, mF = sD.mF, a6g = sD.a6g, aWL = sD.aWL, aWB = sD.aWB, aWJ = sD.aWJ, m2 = sD.m2, mE = sD.mE, sD = sD.m0, aWp = bS.ey << 4, aB = sD - 1; 0 <= aB; aB--) {
						var aXl = mF[aB],
							lV = m2[aB],
							aXm = mE[aB],
							aXd = bM.iU(lV[aXm]),
							aXn = bM.iU(lV[aXm + 1]),
							aXo = aXd % aWp,
							aXd = ~~((aXd + .5) / aWp),
							aXq = aXn % aWp,
							aXr = ~~((aXn + .5) / aWp),
							aXs = aXq - aXo,
							aXt = aXr - aXd,
							eq = Math.max(~~Math.sqrt(aXs * aXs + aXt * aXt + .5), 1),
							aXu = a6g[aB],
							aXu = (aXu = aWL[aB] ? 4e4 : 25e4 + Math.min(20 * aXu, 3e5) + Math.min(aXu >> 3, 5e4), aWB[aB] + Math.max(~~((aXu + .5) / eq), 1));
						65535 <= aXu ? aXm + 2 < lV.length ? (mE[aB] = aXm + 1, mF[aB] = aXk = function(aB, aXv, aXo, aXp, aXm, eq, lV, aWp) {
							aXv = Math.min(aXv - 65535, 65535);
							var lV = bM.iU(lV[aXm + 2]),
								aXm = lV % aWp - aXo,
								lV = ~~((lV + .5) / aWp) - aXp,
								aXy = Math.max(~~Math.sqrt(aXm * aXm + lV * lV + .5), 1);
							return aXv = Math.min(Math.floor((eq * aXv + .5) / aXy), 65534), bN.y.aWB[aB] = aXv, aXo + bL.du(aXv * aXm, 65535) + aWp * (aXp + bL.du(aXv * lV, 65535))
						}(aB, aXu, aXq, aXr, aXm, eq, lV, aWp)) : (mF[aB] = aXk = aXn, aWB[aB] = 65535) : (aWB[aB] = aXu, mF[aB] = aXk = aXo + bL.du(aXu * aXs, 65535) + aWp * (aXd + bL.du(aXu * aXt, 65535))), aWJ[aB] = bN.iX.aXx(aWJ[aB],
							aXl, aXk)
					}
				}(this), ! function(sD) {
					if (bf.k7() % 2 == 1) {
						var aB, hf, l5, f7, f8, aXz, z4, aY0, hF, n9, nA, aXd, aY1, a9C, aY3, kn, en = sD.m0,
							mF = sD.mF,
							m4 = sD.m4,
							a6g = sD.a6g,
							aWL = sD.aWL,
							iX = bN.iX.iX,
							aY5 = iX.length,
							aY6 = bN.iX.aY6,
							aWp = bS.ey << 4,
							aY7 = aD.hh,
							aTi = bg.el,
							gM = (en - 1) * (bL.du(bf.k7(), 2) % 2);
						for (aB = 0; aB < en; aB++)
							for (hf = Math.abs(aB - gM), aXd = mF[hf], l5 = bM.iW(aXd), hF = m4[hf] >> 3, n9 = aXd % aWp, nA = ~~((aXd + .5) / aWp), aY3 = a6g[hf], f7 = 0; f7 < 9; f7++)
								if (!((aXz = l5 + aY6[f7]) < 0 || aY5 <= aXz))
									for (aY0 = iX[aXz], z4 = aY0.length, f8 = 0; f8 < z4; f8++) aY1 = aY0[f8], kn = m4[aY1] >> 3, hF == kn || aY7 && aTi[hF] === aTi[kn] && aTi[hF] || (kn = mF[aY1], (a9C = n9 - kn % aWp) * a9C + (a9C = nA - ~~
										((kn + .5) / aWp)) * a9C < 14400 && (kn = a6g[aY1], a9C = kn <= aY3 ? Math.max(1, bL.du(kn + bL.du(aY3 - kn, 10), 10)) : Math.max(1, bL.du(aY3, 10)), a6g[aY1] = Math.max(kn - a9C, 0), aWL[aY1] =
										4))
					}
				}(this), ! function(sD) {
					if (bf.k7() % 5 == 3)
						for (var a6g = sD.a6g, en = sD.m0, aB = 0; aB < en; aB++) {
							var hW = a6g[aB];
							a6g[aB] = Math.max(hW - Math.max(1, hW >> 7), 0)
						}
				}(this), this), a6g = sD.a6g, aWL = sD.aWL, aB = sD.m0 - 1; 0 <= aB; aB--) aWL[aB] = aWL[aB] >> 1, 0 === a6g[aB] && (bN.m9.aVv(aB), bN.aHc.aWE(aB));
			bd.gD(gL, dt - bN.kz.aHZ(gL), 15)
		}
}

function aVV() {
	this.aY8 = 32, this.eu = 0, this.ew = 0, this.iY = 0, this.aY9 = 0, this.aYA = 4, this.iX = null, this.aY6 = new Int16Array(9), this.dd = function() {
		this.iY = 1 + bL.du(bS.ey - 1, this.aY8), this.aY9 = 1 + bL.du(bS.ez - 1, this.aY8), this.iX = new Array(this.iY * this.aY9), bA.qj.a2U(this.iX);
		var eu, ew, aY6 = this.aY6,
			i = this.iY;
		for (eu = -1; eu <= 1; eu++)
			for (ew = -1; ew <= 1; ew++) aY6[3 * (1 + ew) + 1 + eu] = ew * i + eu
	}, this.mL = function(aYC, aB) {
		return this.iX[aB].push(aYC), this.iX[aB].length - 1
	}, this.aXx = function(aYD, aXd, aXn) {
		var aYE, aYF, aXd = bM.iW(aXd),
			aXn = bM.iW(aXn);
		return aXd === aXn ? aYD : (aYE = this.iX[aXd].pop(), this.iX[aXd].length === aYD ? this.mL(aYE, aXn) : (aYF = this.iX[aXd][aYD], this.iX[aXd][aYD] = aYE, bN.y.aWJ[aYE] = aYD, this.mL(aYF, aXn)))
	}
}

function aVZ() {
	this.ky = function(player, aYG) {
		return -1 !== aYG && !!bN.kz.la(player, aYG) && this.q4(player, aYG, 0)
	}, this.q4 = function(player, aYG, aYH) {
		player = function(player, aYG, aYH) {
			var aXQ = bN.kz.aX2(player, aYG);
			if (-1 === aXQ) return -1;
			aXQ = bN.kz.l0(aXQ, aYG);
			if (-1 === aXQ) return -1;
			var lT = bN.lW.lb(aXQ, aYG);
			if (0 <= lT) return lT;
			if (bN.lW.lc()) return -1;
			if (0 <= (lT = bN.lW.lb(aYG, aXQ))) return bN.lW.ld(bN.lW.le(bN.lW.get(lT)));
			if (aXQ === aYG) return bN.lW.ld(new Uint32Array([aXQ, aYG]));
			if (0 <= (lT = bN.aVa.q4(aXQ, aYG))) return lT;
			return aYH ? function(aYL, player) {
				var fU = bO.fU,
					eK = (fU.fill(0), [aYL]),
					ht = (fU[aYL] = 1, bM.ht),
					aYM = -1,
					en = eK.length;
				for (; - 1 === aYM && en;) {
					for (var g = [], aB = 0; aB < en; aB++)
						for (var eZ = eK[aB], a4I = fU[eZ], eq = 0; eq < 8; eq++) {
							var wI, a0s, et = eZ + ht[eq],
								eR = 4 * et;
							ac.i1(eR) ? (wI = fU[et], a0s = a4I + 5 + ((1 & eq) << 1), 0 === wI ? (g.push(et), fU[et] = a0s) : fU[et] = Math.min(a0s, wI)) : -1 === aYM && eq % 2 == 0 && ac.y8(player, eR) && (aYM = eZ)
						}
					en = (eK = g).length
				}
				return -1 !== aYM ? function(iE, aYO) {
					var ht = bM.ht,
						aYP = -1,
						he = 0,
						mf = [];
					for (; aYO !== iE;)(he = function(eZ, he) {
						var fU = bO.fU,
							ht = bM.ht,
							a4I = fU[eZ];
						if (a4I - fU[eZ + ht[he]] != 5 + ((1 & he) << 1))
							for (var f6 = 0; f6 < 8; f6++) {
								var eq = f6 + he + 6 & 7;
								if (a4I - fU[eZ + ht[eq]] == 5 + ((1 & eq) << 1)) return eq
							}
						return he
					}(aYO, he)) !== aYP && (mf.push(aYO), aYP = he), aYO += ht[he];
					mf.push(iE);
					var lT = bN.lW.lb(mf[0], iE);
					if (0 <= lT) return lT;
					return bN.lW.ld(new Uint32Array(mf))
				}(aYL, aYM) : -1
			}(aYG, player) : -1
		}(player, aYG, aYH);
		return -1 !== player && (bO.g[0] = bN.lW.get(player), !0)
	}
}

function aVb() {
	function aYR(h2, iJ, iL) {
		for (var jQ = Math.min(iJ, iL), nR = Math.max(iJ, iL), ew = jQ + 1; ew < nR; ew++)
			if (!ac.i1(bM.iR(h2, ew))) return;
		return 1
	}

	function aYS(h4, iI, iK) {
		for (var jQ = Math.min(iI, iK), nR = Math.max(iI, iK), eu = jQ + 1; eu < nR; eu++)
			if (!ac.i1(bM.iR(eu, h4))) return;
		return 1
	}

	function aYT(iI, iJ, iK, iL, aYJ, aYG) {
		for (var en = Math.min(Math.abs(iK - iI), Math.abs(iL - iJ)), i7 = Math.sign(iK - iI), iA = Math.sign(iL - iJ), aB = 0; aB < en; aB++)
			if (!ac.i1(bM.iR(iI += i7, iJ += iA))) return null;
		return iI === iK ? aYR(iI, iJ, iL) ? new Uint32Array([aYJ, bM.fB(iI, iJ), aYG]) : null : aYS(iJ, iI, iK) ? new Uint32Array([aYJ, bM.fB(iI, iJ), aYG]) : null
	}
	this.q4 = function(aYJ, aYG) {
		aYJ = function(aYJ, aYG) {
			var iI = bM.ev(aYJ),
				iJ = bM.ex(aYJ),
				iK = bM.ev(aYG),
				iL = bM.ex(aYG);
			if (iI === iK) {
				if (aYR(iI, iJ, iL)) return new Uint32Array([aYJ, aYG])
			} else {
				if (iJ !== iL) return aYT(iI, iJ, iK, iL, aYJ, aYG) || aYT(iK, iL, iI, iJ, aYJ, aYG);
				if (aYS(iJ, iI, iK)) return new Uint32Array([aYJ, aYG])
			}
			return null
		}(aYJ, aYG);
		return null === aYJ ? -1 : bN.lW.ld(aYJ)
	}
}

function aVg() {
	var aYU = [];
	this.dd = function() {
		aYU = []
	}, this.lc = function() {
		return 65536 === aYU.length
	}, this.lb = function(aYJ, aYG) {
		for (var lW = aYU, en = lW.length, aB = 0; aB < en; aB++) {
			var gL = lW[aB];
			if (gL[0] === aYJ && gL[gL.length - 1] === aYG) return aB
		}
		return -1
	}, this.le = function(lV) {
		var aYV = new Uint32Array(lV.length);
		return aYV.set(lV), aYV.reverse()
	}, this.aW2 = function(hF, kn) {
		var gG = hF.length - 1,
			aYW = new Uint32Array(gG + kn.length);
		return aYW.set(hF, 0), aYW.set(kn, gG), aYW
	}, this.aW7 = function(hF, kn, aAk, eZ, aYX) {
		aYX && (aAk = (kn = this.le(kn)).length - aAk - 2);
		aYX = kn.subarray(aAk + 1 + (eZ === kn[aAk + 1])), eZ = new Uint32Array(hF.length + aYX.length);
		return eZ.set(hF, 0), eZ.set(aYX, hF.length), eZ
	}, this.ld = function(lV) {
		return aYU.push(lV), aYU.length - 1
	}, this.get = function(aB) {
		return aYU[aB]
	}, this.lY = function() {
		return aYU
	}, this.aYZ = function(aYJ, aYG) {
		return null
	}
}

function aVk() {
	this.j3 = function(player, n6) {
		player = bN.kz.n8(player, n6);
		return !(player < 0 || !bN.m9.aW9(player) || (bN.m9.aVv(player), 0))
	}
}

function aVW() {
	var yj = 32,
		yi = new Array(2);

	function wY(f8) {
		var eu, ew, eZ, iA, i7, hj = yj,
			a2x = bA.qb.wY(hj, hj),
			hp = bA.qb.getContext(a2x, !0),
			hm = bA.qb.getImageData(hp, hj, hj),
			wj = hm.data,
			l5 = (hj >> 1) - .5,
			l6 = Math.sqrt(l5 * l5);
		for (wj.fill(255), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = eu - l5, iA = ew - l5, eZ = 4 * (ew * hj + eu), i7 = 714 * (l6 - Math.sqrt(i7 * i7 + iA * iA)) / l6, wj[2 + eZ] = f8, wj[3 + eZ] = 255 < i7 ? 0 : i7;
		return hp.putImageData(hm, 0, 0), a2x
	}
	this.aYa = -1, this.dd = function() {
		this.aYa = -1, yi[0] || (yi[0] = wY(255), yi[1] = wY(0))
	}, this.aYb = function(hp, eR, eu, ew, e7, aB) {
		bA.g9.gz(aD.eX) && (hp.setTransform(eR *= 4 / 3 * .625, 0, 0, eR, eu - (e7 *= 4 / 3), ew - e7), hp.drawImage(yi[+(bN.y.m3[aB] === this.aYa)], 0, 0))
	}
}

function aVf() {
	function aU0(eu, en, ew, aYc, a9I, fE, player) {
		if (!(ew < 1 || a9I < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kz.aWD(eR) && !bA.qj.has(aYc, ac.eV(eR)) && ac.y0(eR, player)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aU4(ew, en, eu, aYc, aTy, fE, player) {
		if (!(eu < 1 || aTy < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kz.aWD(eR) && !bA.qj.has(aYc, ac.eV(eR)) && ac.y0(eR, player)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aU8(iE, iF, aTv) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTv) < bM.iG(iE, aTv)) ? iF : iE
	}
	this.hO = function(player, aTv) {
		if (bN.mG.mH(player))
			for (var aTw = bM.hu(), aYc = [];;) {
				var aYM = function(aTv, aTw, aYc, player) {
					for (var h2 = bM.ev(aTv), h4 = bM.ex(aTv), aTy = bS.ey - 2, a9I = bS.ez - 2, aTz = -1, eq = 0; eq < aTw; eq++) {
						var a9H = Math.max(h2 - eq, 1),
							aLC = Math.max(h4 - eq, 1),
							xw = Math.min(h2 + eq, aTy),
							xv = Math.min(h4 + eq, a9I),
							iE = aU0(h2, xw - h2, h4 - eq, aYc, a9I, 1, player),
							iF = aU0(h2 - 1, h2 - a9H - 1, h4 - eq, aYc, a9I, -1, player),
							xw = aU0(h2, xw - h2, h4 + eq, aYc, a9I, 1, player),
							a9H = aU0(h2 - 1, h2 - a9H - 1, h4 + eq, aYc, a9I, -1, player),
							aU3 = aU4(h4, xv - h4 - 1, h2 - eq, aYc, aTy, 1, player),
							aU5 = aU4(h4 - 1, h4 - aLC - 2, h2 - eq, aYc, aTy, -1, player),
							xv = aU4(h4, xv - h4 - 1, h2 + eq, aYc, aTy, 1, player),
							aLC = aU4(h4 - 1, h4 - aLC - 2, h2 + eq, aYc, aTy, -1, player);
						if (aTz = aU8(aTz, iE, aTv), aTz = aU8(aTz, iF, aTv), aTz = aU8(aTz, xw, aTv), aTz = aU8(aTz, a9H, aTv), aTz = aU8(aTz, aU3, aTv), aTz = aU8(aTz, aU5, aTv), aTz = aU8(aTz, xv, aTv), 0 <= (aTz = aU8(aTz, aLC, aTv)) &&
							eq * eq >= bM.iG(aTz, aTv)) return aTz
					}
					return -1
				}(aTv, aTw, aYc, player);
				if (-1 === aYM) break;
				var id = ac.eV(bM.ed(aYM));
				if (bN.kz.aX0(player, id)) return !! function(player, aYM, aTv) {
					for (var he = bM.ib(aYM, aTv), aB = 0; aB < 4; aB++) {
						var eZ = bM.iZ(aYM, he);
						if (ac.aHE(bM.ed(eZ), player)) return bO.fP[6] = he, 1;
						he = (he + 1) % 4
					}
					return
				}(player, aYM, aTv) && (bO.fP[7] = aYM, !0);
				aYc.push(id)
			}
		return !1
	}
}

function dg() {
	this.aRQ = [L(466), L(467), L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478), L(479), L(480), L(481)];
	var aYf = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBi = new Array(aYf.length), this.dd = function() {
		var g = bj.eK.data[155].value.split(";"),
			l5 = g.length;
		if (function() {
				for (var en = aYf.length, aB = 0; aB < en; aB++) bX.aBi[aB] = aYf[aB]
			}(), !(l5 > aYf.length))
			for (var aB = 0; aB < l5; aB++) g[aB].length && (this.aBi[aB] = g[aB])
	}, this.aRS = function(e8, code) {
		for (var aBi = this.aBi, aYh = aYf, qI = (aBi[e8] = code, ""), en = aBi.length, aYi = [], aB = 0; aB < en; aB++) aYi.push(aBi[aB] === aYh[aB] ? "" : aBi[aB]);
		en--;
		for (aB = 0; aB < en; aB++) qI += aYi[aB] + ";";
		bj.s3.s4(155, qI += aYi[en])
	}, this.aRP = function() {
		bj.s3.s4(155, ""), this.dd()
	}, this.f8 = function(code, e8) {
		return code === this.aBi[e8] || code === this.aBi[e8 + 1]
	}
}

function dY() {
	var aYj = new Array(1),
		aYk = new Array(1),
		aYl = 20,
		eL = 0,
		aYm = !1;

	function aYo() {
		aYl++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aYk[aB] = 0, aYj[aB] = document.createElement("audio"), aYj[aB].src = src, aYj[aB].setAttribute("preload", "auto"), aYj[aB].setAttribute("controls", "none"), aYj[aB].style.display = "none", aYj[aB].onpause = function() {
					aYk[aB] = 1
				}, aYj[aB].oncanplaythrough = function() {
					aYk[aB] = 0 === aYk[aB] ? 1 : aYk[aB]
				}, document.body.appendChild(aYj[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aYm = !0
		}
	}, this.uD = function() {
		if (aYm) {
			aYm = !1;
			for (var aB = 0; 0 <= aB; aB--) aYj[aB].onpause = null, aYj[aB].oncanplaythrough = null, t.removeChild(document.body, aYj[aB]), aYj[aB] = null
		}
	}, this.play = function() {
		if (aYm) {
			var dt = performance.now();
			if (eL + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aYk[aB]) return eL = dt, aYk[aB] = 2, void aYj[aB].play();
			0 < aYl && (aYl--, setTimeout(aYo, 66))
		}
	}
}

function ca() {
	this.a8G = function() {
		var aYr;
		return !(al.kg < 3 || ag.gb[ll[0]] >= aD.ju >> 1) && (aD.hh ? 9 !== aD.kS && (aYr = ae.aIb(), !(2 * ae.aIc(bh.kj()) >= aYr)) : function() {
			if (8 === aD.kS) return !1;
			var aYr = ae.aIb();
			if (2 * ag.gp[ll[0]] >= aYr) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aXe = aD.kA, gp = ag.gp, aB = 0; aB < aXe; aB++) gp[aB] = 512;
			var aXf = aD.xE,
				kN = aE.kN,
				hW = aE.hW;
			for (aB = aXe; aB < aXf; aB++) gp[aB] = kN[hW[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var en = aD.xE, gp = ag.gp, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < en; aB++) gp[aB] = sResourcesValue
		} : function() {
			for (var en = aD.xE, gp = ag.gp, sResourcesData = aD.data.sResourcesData, aB = 0; aB < en; aB++) gp[aB] = sResourcesData[aB]
		})();
		bd.mf[8] = ag.gp[aD.eX]
	}
}

function dP() {
	var aHM = 501,
		aYx = (this.aYw = new Uint32Array(aHM), this.a3d = new Uint32Array(aHM), this.aBN = new Uint16Array(aHM), this.aRY = 0, 1),
		aYy = 0;

	function aZ1(self) {
		self.max.fill(0)
	}

	function aZ3(self, aB) {
		self.max[0] = Math.max(self.aYw[aB], self.max[0]), self.max[1] = Math.max(self.a3d[aB], self.max[1]), self.max[2] = Math.max(self.aBN[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aYz = 0, this.mf = new Array(21), this.aZ0 = null, this.de = function() {
		this.aZ0 = [L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(313), L(314), L(490), L(491), L(492), L(493), "", L(494), L(495), L(496), L(271), L(497), L(498)]
	}, this.dd = function() {
		this.aRY = 0, aYx = 1, this.aYz = 0, aYy = 0, aZ1(this), this.mf.fill(0)
	}, this.q1 = function(player, iN) {
		bA.g9.a3X(player) && (this.mf[0] += iN + 1, this.mf[1]++, this.mf[12] += bO.fK[1])
	}, this.pW = function(player, p9) {
		__fx.donationsTracker.logDonation(player, p9, bO.fK[0]);
		player === aD.eX && (aN.pW(bO.fK[0], bO.fK[1], p9), this.mf[12] += bO.fK[1], this.mf[16] += bO.fK[0]), p9 === aD.eX && (aN.a6t(bO.fK[0], player), this.mf[10] += bO.fK[0])
	}, this.q5 = function(player) {
		bA.g9.a3X(player) && (this.mf[2]++, this.mf[12] += bO.fK[1])
	}, this.qD = function(player) {
		bA.g9.a3X(player) && (this.mf[19]++, this.mf[12] += bO.fK[1])
	}, this.aXY = function(player) {
		bA.g9.a3X(player) && this.mf[20]++
	}, this.gD = function(player, a4I, e8) {
		bA.g9.a3X(player) && (this.mf[e8] += a4I)
	}, this.j3 = function() {
		var self;
		this.aYz || 0 < aYy-- || ((self = this).aYw[self.aRY] = ag.gb[aD.eX], self.a3d[self.aRY] = ag.gp[aD.eX], self.aBN[self.aRY] = ae.aBO(aD.eX), aZ3(self, self.aRY), self.aRY++, self.aRY === aHM && function(self) {
			aZ1(self), aZ3(self, 0), self.aRY = 1 + bL.du(aHM, 2);
			for (var aB = 1; aB < self.aRY; aB++) self.aYw[aB] = self.aYw[2 * aB], self.a3d[aB] = self.a3d[2 * aB], self.aBN[aB] = self.aBN[2 * aB], aZ3(self, aB);
			aYx *= 2
		}(self), aYy = aYx - 1, be.mW(), 0 === ag.mj[aD.eX] && (self.aYz = bf.k7()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.sx = 0, this.sy = 0, this.aZ5 = 0, this.aZ6 = 0, this.a8V = 0, this.tf = 0;
	var aZ8 = this.aZ7 = 0;
	this.aZ9 = 0, this.aZA = 0, this.aZB = 0, this.a7p = 0, this.e8 = 0, this.aAy = null, this.hZ = !1, this.aZC = -1, this.aZD = !1, this.aZE = [0, 0], this.de = function() {
		this.aAy = [L(499), L(117, 0, "Balance"), L(116, 0, "Interest"), L(500)]
	}, this.dd = function() {
		this.hZ = !1, this.aZC = -1, this.aZD = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eq = a0.a1.hw() && h.i < h.j ? 1 : a0.a1.hw() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eq * this.i), this.i -= a0.a1.hw() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7p = Math.floor(this.j / 150), this.a7p = Math.max(this.a7p, 1.5), this.sx = Math.floor(1 + .02 * this
			.i), this.sy = Math.floor(1 + .04 * this.i), this.a8V = this.sy, aZ8 = Math.floor(.75 * this.a8V), this.tf = Math.floor(1 + .075 * this.i), this.aZ9 = Math.floor(1 + .1125 * this.i), this.aZA = Math.floor(this.i * (a0.a1.hw() ? .03 :
				.029)), this.aZA = Math.max(this.aZA, 4), this.aZB = Math.floor(.035 * this.i), this.aZB = Math.max(this.aZB, 4), this.aZ7 = this.j - 2 * this.a8V - this.tf - this.aZ9, this.hZ && this.aZF()
	}, this.h0 = function(lP, lQ) {
		var xH, xG;
		return !!this.hZ && (xG = lP, xH = lQ, lP -= bL.du(h.i - this.i, 2), lQ -= bL.du(h.j - this.j, 2), lP < 0 || lQ < 0 || lP >= this.i || lQ >= this.j || lP >= this.i - this.aZ9 && lQ < this.aZ9 ? -1 !== aM.h0(xG, xH) || bC.h0(xG, xH) ||
			this.rs() : lQ < this.aZ9 || (lQ < this.j - this.tf ? (this.aZD = !0, this.aZC = (lP - 2 * this.sx - this.aZ5) / this.aZ6, 3 !== this.e8 && (bf.dl = !0)) : (xG = (xG = Math.floor(lP / (this.i / this.aAy.length))) < 0 ? 0 : xG >=
				this.aAy.length ? this.aAy.length - 1 : xG) !== this.e8 && (this.e8 = xG, this.aZF(), bf.dl = !0)), !0)
	}, this.a1d = function(lP, lQ) {
		return this.aZE[0] = lP, this.aZE[1] = lQ, !(!this.hZ || !this.aZD || (lP -= bL.du(h.i - this.i, 2), lQ = this.aZC, this.aZC = (lP - 2 * this.sx - this.aZ5) / this.aZ6, (0 <= this.aZC && this.aZC <= 1 || 0 <= lQ && lQ <= 1) && (bf.dl = !
			0), 0))
	}, this.a22 = function() {
		this.aZD && (this.aZD = !1)
	}, this.a2E = function() {
		this.hZ ? this.rs() : this.show()
	}, this.show = function() {
		bd.aRY < 2 || (this.hZ = !0, this.aZF())
	}, this.rs = function() {
		this.hZ = !1, this.aZC = -1, bf.dl = !0
	}, this.aZF = function() {
		this.e8 < 2 ? this.aZ5 = aQ.measureText(bA.ra.zQ(bd.max[this.e8]), bA.qb.sQ(0, this.aZA)) : 2 === this.e8 && (this.aZ5 = aQ.measureText(bA.ra.a4B(6, 2), bA.qb.sQ(0, this.aZA))), this.aZ6 = this.i - 2 * this.sx - this.aZ5 - this.sy
	}, this.mW = function() {
		this.hZ && this.aZF()
	}, this.uj = function() {
		this.hZ && this.a8n()
	}, this.a8n = function() {
		var eu = bL.du(h.i - this.i, 2),
			ew = bL.du(h.j - this.j, 2);
		uk.setTransform(1, 0, 0, 1, eu, ew), uk.fillStyle = bB.ng, uk.fillRect(0, this.aZ9, this.i, this.j - this.aZ9), this.aZG(), this.aQL(), uk.strokeRect(0, 0, this.i, this.j), bA.qb.textAlign(uk, 2), uk.font = bA.qb.sQ(0, this.aZA), 0 ===
			this.e8 ? this.aZH(bd.aYw, eu, ew) : 1 === this.e8 ? this.aZH(bd.a3d, eu, ew) : 2 === this.e8 ? this.aZI(eu, ew) : 3 === this.e8 && (this.aZJ(eu, ew), this.aZK(eu, ew)), aM.a5z(Math.floor(eu + this.i - .725 * this.aZ9), Math.floor(
				ew + .275 * this.aZ9), Math.floor(.45 * this.aZ9)), uk.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aZG = function() {
		var aB, dt;
		for (uk.lineWidth = this.a7p, bA.qb.textBaseline(uk, 1), bA.qb.textAlign(uk, 1), uk.strokeStyle = bB.nj, uk.font = bA.qb.sQ(1, this.aZB), dt = this.i / this.aAy.length, uk.fillStyle = bB.o5, uk.fillRect(this.e8 * dt, this.j - this.tf, dt,
				this.tf), uk.fillStyle = bB.nj, uk.fillRect(0, this.j - this.tf - .5 * this.a7p, this.i, this.a7p), aB = 1; aB <= 3; aB++) uk.fillRect(aB * dt, this.j - this.tf, this.a7p, this.tf);
		for (aB = this.aAy.length - 1; 0 <= aB; aB--) uk.fillText(bA.yJ.a39(this.aAy[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.tf)
	}, this.aQL = function() {
		uk.fillStyle = bB.oV, uk.fillRect(0, 0, this.i, this.aZ9), uk.fillStyle = bB.nj, uk.fillRect(0, this.aZ9 - .5 * this.a7p, this.i, this.a7p), uk.font = bA.qb.sQ(1, .39 * this.aZ9), uk.fillText(bA.yJ.a39(L(501), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aZ9))
	}, this.aZH = function(g, eu, ew) {
		var l5 = bd.max[this.e8],
			a2W = (uk.setTransform(1, 0, 0, 1, eu + 2 * this.sx + this.aZ5, ew + this.a8V + this.aZ9), uk.lineWidth = 2, this.aZ7 / Math.sqrt(l5));
		uk.beginPath(), uk.moveTo(this.aZ6, this.aZ7 - a2W * Math.sqrt(g[bd.aRY - 1]));
		for (var aB = bd.aRY - 2; 0 <= aB; aB--) uk.lineTo(aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.sqrt(g[aB]));
		uk.stroke();
		eu = this.a5z(g, a2W, .5);
		eu < .95 && uk.fillText(bA.ra.zQ(l5), -this.sx, 0), .05 < Math.abs(eu - .5) && uk.fillText(bA.ra.zQ(Math.floor(l5 / 4)), -this.sx, Math.floor(this.aZ7 / 2)), .05 < eu && uk.fillText("0", -this.sx, this.aZ7)
	}, this.aZI = function(eu, ew) {
		uk.setTransform(1, 0, 0, 1, eu + 2 * this.sx + this.aZ5, ew + this.a8V + this.aZ9), uk.lineWidth = 2;
		var a2W = this.aZ7 / Math.max(bd.max[this.e8], 1);
		uk.beginPath(), uk.moveTo(this.aZ6, this.aZ7 - a2W * bd.aBN[bd.aRY - 1]);
		for (var aB = bd.aRY - 2; 0 <= aB; aB--) uk.lineTo(aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * bd.aBN[aB]);
		uk.stroke();
		eu = this.a5z(bd.aBN, a2W, 1), ew = bd.max[this.e8] / 100;
		eu < .95 && uk.fillText(bA.ra.a4B(ew, 2), -this.sx, 0), .05 < Math.abs(eu - .5) && uk.fillText(bA.ra.a4B(ew / 2, 2), -this.sx, Math.floor(this.aZ7 / 2)), .05 < eu && uk.fillText(bA.ra.a4B(0, 2), -this.sx, this.aZ7)
	}, this.aZJ = function(eu, ew) {
		uk.setTransform(1, 0, 0, 1, eu + .34 * this.i, ew + 2 * aZ8 + this.aZ9), bA.qb.textAlign(uk, 2);
		for (var aAj = this.j - 4 * aZ8 - this.tf - this.aZ9, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) uk.fillText(bA.yJ.a39(bd.aZ0[g[aB]], 0, .31 * this.i), 0, aB * aAj / 9);
		var fF = bd.mf;
		for (uk.setTransform(1, 0, 0, 1, eu + .39 * this.i, ew + 2 * aZ8 + this.aZ9), bA.qb.textAlign(uk, 0), uk.fillText(bA.ra.a4B(100 * fF[0] / (1024 * Math.max(fF[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) uk.fillText(fF[g[aB]].toString(), 0,
			aB * aAj / 9);
		uk.fillText(bA.ra.a4B(100 * (1 - ag.gb[aD.eX] / fF[7]), 0), 0, aAj)
	}, this.aZK = function(eu, ew) {
		uk.setTransform(1, 0, 0, 1, eu + .79 * this.i, ew + 2 * aZ8 + this.aZ9), bA.qb.textAlign(uk, 2);
		var aB, aAj = this.j - 4 * aZ8 - this.tf - this.aZ9;
		for (uk.fillStyle = bB.o0, aB = 2; 0 <= aB; aB--) uk.fillText(bA.yJ.a39(bd.aZ0[aB + 8], 0, .31 * this.i), 0, aB * aAj / 9);
		uk.fillText(bA.yJ.a39(bd.aZ0[18], 0, .31 * this.i), 0, 3 * aAj / 9), uk.fillStyle = bB.nz, uk.fillText(bA.yJ.a39(bd.aZ0[11], 0, .31 * this.i), 0, 4 * aAj / 9), uk.fillStyle = bB.oI, uk.fillText(bA.yJ.a39(bd.aZ0[13], 0, .31 * this.i), 0,
				5 * aAj / 9), uk.fillText(bA.yJ.a39(bd.aZ0[15], 0, .31 * this.i), 0, 6 * aAj / 9), uk.fillText(bA.yJ.a39(bd.aZ0[16], 0, .31 * this.i), 0, 7 * aAj / 9), uk.fillText(bA.yJ.a39(bd.aZ0[12], 0, .31 * this.i), 0, 8 * aAj / 9), uk
			.fillStyle = bB.oH, uk.fillText(bA.yJ.a39(bd.aZ0[17], 0, .31 * this.i), 0, aAj), uk.fillStyle = bB.o0;
		var fF = bd.mf,
			aEl = fF[8] + fF[9] + fF[10] + fF[18],
			aEl = bA.ra.zQ(aEl),
			aP8 = uk.measureText(aEl).width,
			eu = (uk.setTransform(1, 0, 0, 1, eu + .83 * this.i + aP8, ew + 2 * aZ8 + this.aZ9), uk.fillText(bA.ra.zQ(fF[8]), 0, 0), uk.fillText(bA.ra.zQ(fF[9]), 0, aAj / 9), uk.fillText(bA.ra.zQ(fF[10]), 0, 2 * aAj / 9), uk.fillText(bA.ra.zQ(fF[
				18]), 0, 3 * aAj / 9), uk.fillStyle = bB.nz, uk.fillText(aEl, 0, 4 * aAj / 9), uk.fillStyle = bB.oI, uk.fillText(bA.ra.zQ(fF[13]), 0, 5 * aAj / 9), uk.fillText(bA.ra.zQ(fF[15]), 0, 6 * aAj / 9), uk.fillText(bA.ra.zQ(fF[16]),
				0, 7 * aAj / 9), uk.fillText(bA.ra.zQ(fF[12]), 0, 8 * aAj / 9), fF[12] + fF[13] + fF[15] + fF[16]);
		uk.fillStyle = bB.oH, uk.fillText(bA.ra.zQ(eu), 0, aAj), uk.fillStyle = bB.nj
	}, this.a5z = function(g, a2W, a9Q) {
		var aB, e, fW;
		return this.aZC < 0 || 1 < this.aZC ? .25 : (aB = this.aZC * (bd.aRY - 1), fW = g[e = Math.floor(aB)], fW += (aB - e) * (g[e < bd.aRY - 1 ? e + 1 : e] - fW), uk.strokeStyle = bB.nm, .04 < this.aZC && this.aZM(0, this.aZ7 - a2W * Math.pow(
				fW, a9Q), aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.pow(fW, a9Q)), .04 < fW / bd.max[this.e8] && this.aZM(aB * this.aZ6 / (bd.aRY - 1), this.aZ7, aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.pow(fW, a9Q)), uk
			.fillStyle = bB.oK, uk.beginPath(), uk.arc(aB * this.aZ6 / (bd.aRY - 1), this.aZ7 - a2W * Math.pow(fW, a9Q), Math.max(2, .014 * this.j), 0, 2 * Math.PI), uk.fill(), g = this.aZC * bf.aBP, g = 0 === ag.mj[aD.eX] ? Math.floor(g * bd
				.aYz) : Math.floor(g * bf.k7()), uk.fillStyle = bB.nj, uk.fillText(1 === a9Q ? bA.ra.a4B(fW / 100, 2) : bA.ra.zQ(Math.floor(fW)), -this.sx, this.aZ7 - a2W * Math.pow(fW, a9Q)), bA.qb.textAlign(uk, 1), uk.fillText(aW.aBC(g),
				aB * this.aZ6 / (bd.aRY - 1), this.aZ7 + this.aZA - (a0.a1.hw() ? 2 : 0) - this.a7p), bA.qb.textAlign(uk, 2), a2W * Math.pow(fW, a9Q) / this.aZ7)
	}, this.aZM = function(n9, nA, nM, nN) {
		uk.beginPath(), uk.moveTo(n9, nA), uk.lineTo(nM, nN), uk.stroke()
	}
}

function by() {
	this.aZN = "https://", this.aZO = this.aZN + "territorial.io/", this.aRZ = this.aZO + "changelog", this.aRd = this.aZO + "terms", this.aZP = this.aZO + "cookie_policy", this.aQz = this.aZO + "privacy", this.aRc = this.aZO + "tutorial", this.aRb =
		this.aZO + "players", this.aRa = this.aZO + "clans", this.a0v = this.aZO + "clan-results", this.aOH = "https://patreon.com/c/territorial", this.aCj = this.aZN + "play.google.com/store/apps/details?id=territorial.io", this.a1D = this.aZN +
		"apps.apple.com/app/id1581110913", this.aZQ = this.aZN + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCk = this.aZN + "discord.gg/pthqvpTXmh", this.aCl = this.aZN + "www.instagram.com/davidtschacher/", this.yy =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aZR, this.yG = new aZS, this.dd = function() {
		this.y.dd()
	}, this.j3 = function() {
		0 !== this.y.a72 && this.y.a72--
	}
}

function aZS() {
	this.uj = function() {
		if (0 !== bP.y.a72 && (uk.globalAlpha = Math.min(bP.y.a72 / 580, 1), uk.drawImage(bP.y.aZV, 1 + aS.yE(), 1 + aS.yF()), uk.globalAlpha = 1, aD.hB)) {
			for (var n9 = iO / hy, nA = iP / hy, nM = (h.i + iO) / hy, nN = (h.j + iP) / hy, gM = bP.y.aZW * hy, aZX = bP.y.aZX, aB = aD.kA - 1; 0 <= aB; aB--) ! function(aB, gM, n9, nA, nM, nN, aZX) {
				var highlight;
				0 === ag.mj[aB] || 0 === ag.gb[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gM *= 2), nM = h.i * ((ag.ie[aB] + ag.ig[aB] + 1) / 2 - n9) / (nM - n9) - .5 * gM, n9 = h.j * ((ag.ih[
					aB] + ag.ii[aB] + 1) / 2 - nA) / (nN - nA) - .5 * gM, nM > h.i) || n9 > h.j || nM < -gM || n9 < -gM || (highlight ? uk.setTransform(2 * hy, 0, 0, 2 * hy, nM, n9) : uk.setTransform(hy, 0, 0, hy, nM, n9), uk.drawImage(
					aZX[aD.hh ? bg.el[aB] : 1], 0, 0))
			}(aB, gM, n9, nA, nM, nN, aZX);
			uk.setTransform(hy, 0, 0, hy, 0, 0)
		}
	}
}

function aZR() {
	this.aZW = 28, this.a72 = 0, this.aZV = null;
	var aZZ = this.aZX = null;

	function aZc(hj, aZd) {
		var eu, ew, eZ, i7, a2x = bA.qb.wY(hj, hj),
			hp = bA.qb.getContext(a2x, !0),
			hm = bA.qb.getImageData(hp, hj, hj),
			wj = hm.data,
			l5 = (hj >> 1) - .5,
			aZe = .5 + l5;
		for (aZe *= aZe, ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = (i7 = eu - l5) * i7 + (i7 = ew - l5) * i7, wj[eZ = 4 * (ew * hj + eu)] = aZd[0], wj[1 + eZ] = aZd[1], wj[2 + eZ] = aZd[2], wj[3 + eZ] = (aZe - i7) * aZd[3] / aZe;
		return hp.putImageData(hm, 0, 0), a2x
	}

	function aYb(aB, hp, a2x, hj) {
		var highlight, eu, ew;
		0 !== ag.mj[aB] && 0 !== ag.gb[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hj *= 2), eu = ag.ie[aB] + ag.ig[aB] + 1 - hj - 2 >> 1, ew = ag.ih[aB] + ag.ii[aB] + 1 - hj - 2 >> 1, highlight ? hp
			.drawImage(a2x[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew, hj, hj) : hp.drawImage(a2x[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew))
	}
	this.dd = function() {
		var sD;
		this.a72 = 700,
			function(sD) {
				var hj = sD.aZW;
				if (sD.aZX = [], aZZ = [], aD.hh) {
					for (var aB = 0; aB <= aD.xL; aB++) sD.aZX.push(aZc(hj, bg.aWv[bg.kX[aB]])), aZZ.push(aZc(hj >> 1, bg.aWv[bg.kX[aB]]));
					9 === aD.kS && aZZ.push(aZc(hj, bg.aWv[1]))
				} else sD.aZX.push(aZc(hj, bg.aWv[7])), sD.aZX.push(aZc(hj, bg.aWv[4])), aZZ.push(aZc(hj >> 1, bg.aWv[7]))
			}(this),
			function(sD, aZf) {
				var aB, aZV = sD.aZV,
					hp = bA.qb.getContext(aZV, !0),
					en = aD.ek,
					hj = sD.aZW >> 1;
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0), aZf && hp.clearRect(0, 0, aZV.width, aZV.height);
				if (9 === aD.kS) {
					hj <<= 1;
					sD = az.kb[5];
					for (aB = en - sD; aB < en; aB++) aYb(aB, hp, aZZ, hj);
					en -= sD, hj >>= 1
				}
				for (aB = aD.kA; aB < en; aB++) aYb(aB, hp, aZZ, hj)
			}(this, null !== (sD = this).aZV && sD.aZV.width === bS.ey - 2 && sD.aZV.height === bS.ez - 2 || (sD.aZV = bA.qb.wY(bS.ey - 2, bS.ez - 2), !1)), aD.hB || this.a4T()
	}, this.aWu = aZc, this.a4T = function() {
		for (var en = aD.kA, hj = this.aZW, aZX = this.aZX, hp = bA.qb.getContext(this.aZV, !0), aB = 0; aB < en; aB++) aYb(aB, hp, aZX, hj)
	}
}

function d9() {
	function aZi() {
		8 === aD.kS && 1 === aD.a09 && bR.zl.a08()
	}

	function aZh(player) {
		aD.hB ? (ak.aHT(player), al.aKN(), aD.kU && aD.px.j3()) : b3.aD3(player)
	}
	this.pP = function(player) {
		aN.a0L(player, player === aD.eX ? 21 : 22), aZh(player), aZi()
	}, this.pu = function(player) {
		1 === aD.a09 && 0 !== ag.mj[player] && 2 !== ag.a3T[player] && aZh(player), aD.a0C--, aD.a0B--, aN.a0L(player, 4), bA.g9.gy(2) && aW.mV(!0), aZi()
	}
}

function dJ() {
	this.aTt = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAg = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nj, "rgb(170,170,170)"
	], this.aZj = [bB.nj, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nj, bB.na], this.aZk = [bB.na, bB.nj, bB.nj, bB.nj, bB.na, bB.na, bB.na, bB.na, bB.nj];
	var aKX = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJq = ["rgba(" + aKX[0] + ",", "rgba(" + aKX[1] + ",", "rgba(" + aKX[2] + ",", "rgba(" + aKX[3] + ",", "rgba(" + aKX[4] + ",", "rgba(" + aKX[5] + ",", "rgba(" + aKX[6] + ",", "rgba(" + aKX[7] + ",", "rgba(" + aKX[8] + ",", "rgba(" + aKX[9] +
			","
		], this.aJr = ["rgb(" + aKX[0] + ")", "rgb(" + aKX[1] + ")", "rgb(" + aKX[2] + ")", "rgb(" + aKX[3] + ")", "rgb(" + aKX[4] + ")", "rgb(" + aKX[5] + ")", "rgb(" + aKX[6] + ")", "rgb(" + aKX[7] + ")", "rgb(" + aKX[8] + ")", "rgb(" + aKX[9] +
			")"
		], this.a0U = null, this.aWv = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aWa = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kX = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.el = new Uint8Array(aD.ek), this.aAh = new Uint8Array(aD.ek), this.xR = new Uint16Array(aD.ek), this.xS = new Uint16Array(this.kX.length + 1), this.xT = new Uint16Array(this.kX.length), this.de =
		function() {
			this.a0U = [L(502), L(503), L(504), L(505), L(506), L(507), L(508), L(509), L(510)]
		}, this.dd = function() {
			if (this.el.fill(0), this.aAh.fill(0), this.aZl(), aD.hh) {
				if (9 === aD.kS) {
					for (var el = bg.el, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) el[aB] = 1;
					var en = aD.ek;
					for (aB = aD.data.teamPlayerCount[7]; aB < en; aB++) el[aB] = 2;
					bg.kX[1] = 7, bg.kX[2] = 8
				} else aD.kU ? function() {
					var aWa = bg.aWa,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kA - 1; 0 <= aB; aB--) colorsData[aB] = ay.jR(262144);
					var aZw = 0,
						f3 = 768,
						aTO = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var eq = 0, f7 = 0; f7 < 3; f7++) eq += Math.abs(aWa[aB][f7] - aTO[f7]);
							eq < f3 && (aZw = aB, f3 = eq)
						} var aZx = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aZx[aB] = teamPlayerCount[aB];
					var kX = bg.kX,
						aZy = new Uint8Array(9),
						gG = (kX[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aZx[aB] && (aZy[aB] = gG, kX[gG++] = aB);
					var jQ = aD.kA,
						el = bg.el;
					aZx[aZw] ? (aZx[aZw]--, el[0] = aZy[aZw]) : jQ = 0;
					var f8 = 0;
					for (aB = jQ; aB < aD.xE; aB++) {
						var hf = kX[f8];
						if (aZx[hf]) aZx[hf]--, el[aB] = aZy[hf];
						else if (aB--, 9 <= ++f8) return console.log("error 325")
					}
				}() : this.j3();
				! function() {
					for (var en = aD.ek, xR = bg.xR, xS = bg.xS, xT = bg.xT, el = bg.el, kX = bg.kX, xK = kX.length, eK = new Array(xK), aB = 0; aB < xK; aB++) eK[aB] = [];
					for (aB = 0; aB < en; aB++) eK[kX[el[aB]]].push(aB);
					for (aB = 1; aB <= xK; aB++) xS[aB] = xS[aB - 1] + eK[aB - 1].length;
					for (aB = 0; aB < xK; aB++)
						for (var gG = eK[aB].length, l5 = xS[aB], hf = 0; hf < gG; hf++) xR[hf + l5] = eK[aB][hf];
					var kA = aD.kA;
					for (aB = 0; aB < xK; aB++)
						for (gG = eK[aB].length, l5 = xS[aB], hf = 0; hf < gG; hf++)
							if (xR[hf + l5] >= kA) {
								xT[aB] = hf;
								break
							}
				}(), ! function() {
					for (var en = aD.ek, el = bg.el, aAh = bg.aAh, kX = bg.kX, aB = 0; aB < en; aB++) aAh[aB] = kX[el[aB]];
					9 === aD.kS && aAh.fill(1, en - az.kb[5])
				}()
			}
		}, this.aZl = function() {
			for (var aB = this.kX.length - 1; 0 <= aB; aB--) this.kX[aB] = aB
		}, this.j3 = function() {
			var zF = new Uint8Array(aD.kA),
				zG = new Uint8Array(aD.kA),
				aZq = new Uint16Array(8),
				aZr = new Uint16Array(this.kX.length);
			this.aZs(zF, zG, aZq, 1), this.aH4(aZq), this.aZt(aZr, zF, zG), this.aZu(zF, zG, aZr), this.aZv()
		}, this.aZs = function(zF, zG, aZx, aZz) {
			for (var f7, e, aa0, en = this.kX.length - aZz, g = new Uint16Array(en), aWa = this.aWa, colorsData = aD.data.colorsData, aB = aD.kA - 1; 0 <= aB; aB--) {
				for (f7 = en; aZz <= f7; f7--) g[f7 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aWa[f7][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aWa[f7][1]) + Math.abs(4 * (63 & colorsData[aB]) - aWa[f7][2]);
				for (aa0 = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aa0 && (aa0 = g[e], zF[aB] = e);
				for (aZx[zF[aB]] += 4, aa0 = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aa0 && e !== zF[aB] && (aa0 = g[e], zG[aB] = e);
				aZx[zG[aB]]++
			}
		}, this.aH4 = function(aZx) {
			for (var f7, l7, en = this.kX.length - 1, aB = en; 0 <= aB; aB--) this.kX[aB] = aB;
			for (aB = en - 1; 0 <= aB; aB--) aZx[aB]++;
			for (aB = 1; aB <= en; aB++) {
				for (l7 = 0, f7 = 1; f7 < en; f7++) aZx[f7] > aZx[l7] && (l7 = f7);
				aZx[l7] = 0, this.kX[aB] = l7 + 1
			}
		}, this.aZt = function(aZr, zF, zG) {
			var f7, a0p, f8, eq, e, nL, tE, aa1 = this.kX.length - 1,
				r4 = new Uint16Array(aa1),
				aa2 = [],
				aa3 = 0,
				a0o = [],
				aa4 = [];
			loop: for (var aB = 0; aB < aD.kA; aB++)
				if (null !== (a0p = bA.ra.a0q(ag.a0n[aB]))) {
					for (f7 = a0o.length - 1; 0 <= f7; f7--)
						if (a0p === a0o[f7]) {
							aa4[f7].push(aB), aa3 = Math.max(aa3, aa4[f7].length);
							continue loop
						} a0o.push(a0p), aa2.push(!1), aa4.push([aB]), aa3 = Math.max(aa3, 1)
				}
			for (; 2 < aD.xL && aa3 > bL.du(aD.kA, aD.xL);) aD.xL--, aD.kS--;
			for (f7 = a0o.length - 1; 0 <= f7; f7--) {
				for (eq = -1, f8 = a0o.length - 1; 0 <= f8; f8--) !aa2[f8] && (-1 === eq || aa4[f8].length > aa4[eq].length) && (eq = f8);
				for (f8 = aa1 - 1; 0 <= f8; f8--) r4[f8] = 1;
				for (f8 = aa4[eq].length - 1; 0 <= f8; f8--) r4[zF[aa4[eq][f8]]] += 3, r4[zG[aa4[eq][f8]]]++;
				for (aB = aa1 - 1; 0 <= aB; aB--) {
					for (e = eq % aa1, f8 = aa1 - 1; 0 <= f8; f8--) r4[f8] > r4[e] && (e = f8);
					for (nL = -1, f8 = aD.xL; 0 < f8; f8--)
						if (this.kX[f8] === e + 1) {
							nL = f8;
							break
						} if (r4[e] = 0, -1 !== nL) {
						for (tE = 0, f8 = aD.xL; 0 < f8; f8--) aZr[nL] > aZr[f8] && tE++;
						if (tE !== aD.xL - 1) {
							for (f8 = aa4[eq].length - 1; 0 <= f8; f8--) aZr[nL]++, this.el[aa4[eq][f8]] = nL;
							break
						}
					}
				}
				aa2[eq] = !0
			}
		}, this.aZu = function(zF, zG, aZr) {
			for (var aB, i6, en = this.kX.length - 1, border = bL.du(aD.kA, aD.xL), aa5 = (0 < aD.kA % aD.xL && border++, new Uint8Array(1 + en)), f7 = en; 1 <= f7; f7--) aa5[this.kX[f7]] = f7;
			for (aB = 0; aB < aD.kA; aB++) i6 = aa5[zF[aB] + 1], 0 === this.el[aB] && i6 <= aD.xL && aZr[i6] < border && (aZr[i6]++, this.el[aB] = i6);
			for (aB = 0; aB < aD.kA; aB++) i6 = aa5[zG[aB] + 1], 0 === this.el[aB] && i6 <= aD.xL && aZr[i6] < border && (aZr[i6]++, this.el[aB] = i6);
			for (f7 = aD.xL; 1 <= f7; f7--)
				for (aB = aD.kA - 1; 0 <= aB && !(aZr[f7] >= border); aB--) 0 === this.el[aB] && (aZr[f7]++, this.el[aB] = f7)
		}, this.aZv = function() {
			for (var aB = aD.kA; aB < aD.ek; aB++) this.el[aB] = 1 + aB % aD.xL
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
					ac.jM(ag.gF[fe][aB], fe);
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
			for (var aa6 = !1, aa7 = !1, eq = 3; 0 <= eq; eq--) {
				var gL = gT[player][aB] + ep[eq];
				if (ac.aHE(gL, player)) continue loop;
				aa6 = aa6 || ac.i1(gL), aa7 = aa7 || ac.aHD(gL)
			}
			aa6 ? gU[player].push(gT[player][aB]) : aa7 ? fD[player].push(gT[player][aB]) : ac.xn(gT[player][aB], player), gT[player][aB] = gT[player][en - 1], gT[player].pop(), en--
		}
	}, this.gR = function() {
		ag.gb[fi] -= fj
	}, this.gS = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) ac.y8(fi, border[aB]) || (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gV = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) !ac.y8(fi, border[aB]) && ac.ei(border[aB]) && (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gW = function(border) {
		for (var eq, gL, en = border.length, ep = ac.ep, aB = en - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--)
				if (gL = border[aB] + ep[eq], ac.aHE(gL, fi)) {
					ag.gT[fi].push(border[aB]), border[aB] = border[en - 1], border.pop(), en--;
					break
				}
	}, this.gX = function() {
		for (var eq, gL, ep = ac.ep, aB = fj - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--) gL = fl[aB] + ep[eq], ac.yB(fi, gL) && ac.aHF(gL) && (ag.gT[fi].push(gL), ac.gI(gL, fi))
	}, this.gY = function() {
		var eu, ew;
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.y8(fi, 4 * (ag.ih[fi] * bS.ey + eu))) break loop;
			ag.ih[fi]++
		}
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.y8(fi, 4 * (ag.ii[fi] * bS.ey + eu))) break loop;
			ag.ii[fi]--
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.y8(fi, 4 * (ew * bS.ey + ag.ie[fi]))) break loop;
			ag.ie[fi]++
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.y8(fi, 4 * (ew * bS.ey + ag.ig[fi]))) break loop;
			ag.ig[fi]--
		}
	}, this.eg = function(player, jJ) {
		return 0 === bg.el[player] || bg.el[player] !== bg.el[jJ]
	}, this.hJ = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.aHP = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.jL(ag.gT[player][aB]) && ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.hM = function(a3Z, a3a) {
		for (var aB, dt, gM, gL, aXe = ag.gT[a3Z].length, aXf = ag.gT[a3a].length, ep = (aXf < aXe && (dt = a3Z, a3Z = a3a, a3a = dt, dt = aXe, aXe = aXf, 0), ac.ep), eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aXe; aB++)
				if (gL = ag.gT[a3Z][aB] + gM, ac.gN(gL) && ac.ef(gL) === a3a) return !0;
		return !1
	}, this.aHQ = function(a3Z, a3a) {
		for (var aB, gM, gL, aXe = ag.gT[a3Z].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aXe; aB++)
				if (ac.jL(ag.gT[a3Z][aB]) && (gL = ag.gT[a3Z][aB] + gM, ac.gN(gL)) && ac.ef(gL) === a3a) return !0;
		return !1
	}
}

function dV() {
	this.q6 = new aa8
}

function aa8() {
	this.hP = function(player) {
		bA.g9.a3U(player) && aN.yb(80, L(511), 637, 0, bB.oY, bB.ng, -1, !1)
	}, this.hS = function(player) {
		bA.g9.a3U(player) && aN.yb(80, L(512), 637, 0, bB.oY, bB.ng, -1, !1)
	}
}

function aa9() {
	this.aaA = 0, this.j3 = function() {
		aO.j3(), aZ.j3(), h.j3(), b0.y.j3(), ax.aGa(), bf.dl && (bf.dl = !1, aa.uj())
	}
}

function aaB() {
	this.eM = bf.eM, this.e8 = 0, this.aaA = 0, this.aGY = 0, this.aaC = null, this.aaD = 7, this.a73 = 0, this.dd = function() {
		this.aGY = 0, this.aaC = [], this.e8 = 0, this.aaA = 0
	}, this.aSv = function(aC) {
		if (aD.hB) this.aBQ(aC);
		else if (this.aaC.push(aC), 2 === aD.a09) {
			for (var aB = 0; aB < this.aaC.length; aB++) b8.p2.j3(this.aaC[aB]);
			this.aaC = []
		}
	}, this.aBQ = function(aC) {
		2 !== aD.a09 && (b8.p2.j3(aC), b9.j3(), aW.aBQ(this.aGY), this.aGY === aD.a4Z ? (aD.px.j3(), this.aGY = 0, this.e8 = 0, this.aaA = 0, this.eM = bf.eM) : (this.aGY++, af.a4S(), af.mV(!0), bb.aC0()))
	}, this.j3 = function() {
		h.j3(), aD.hB ? (bf.dl = aW.aBQ(-1) || bf.dl, mX()) : (0 !== this.e8 || bf.eM >= this.eM && (this.eM += bf.aBP * Math.floor(1 + (bf.eM - this.eM) / bf.aBP), 2 === aD.a09 ? mM() : this.aaE(), this.e8++, 27 < bf.eM - this.a73)) && this
		.aaF(), mS(), bf.dl && (bf.dl = !1, yC()), this.a73 = bf.eM
	}, this.aaF = function() {
		bf.dl = !0, mU(), this.e8 = 0
	}, this.aaE = function() {
		var va, aB;
		if (this.aaA !== 7 * this.aGY) mO(), bb.aC0();
		else {
			va = !1;
			loop: for (; this.aaG() && (va = !0, mO(), 2 !== aD.a09) && 0 < this.aaC.length;)
				for (aB = this.aaD - 2; 0 <= aB; aB--)
					if (mO(), 2 === aD.a09) break loop;
			va ? bb.aC0() : (mM(), bb.a4V())
		}
	}, this.aaG = function() {
		return 0 < this.aaC.length && (this.aGY++, b8.p2.j3(this.aaC[0]), this.aaC.shift(), !0)
	}
}

function aaH() {
	var aaI, aaJ, aaK, aGY, aaL, e8 = 0,
		eM = bf.eM;

	function aaO() {
		! function() {
			if (!aD.hB) return;
			if (aD.kU) return;
			if (2 !== aD.a09)
				if (aaL % 7 != 0) aaL++;
				else if (aGY === aD.a4Z) {
				if (!aaR()) return;
				aW.aBQ(aGY), aD.px.j3()
			} else {
				if (!aaR()) return;
				aaL++, aGY++, af.a4S(), af.mV(!0)
			}
			return 1
		}() && aaR() && mO()
	}

	function aaP() {
		e8 = 0, (aD.hB ? (bf.dl = aW.aBQ(aGY - (aaL % 7 == 0 ? 0 : 1) + aaL % 7 / 7) || bf.dl, mX) : aM.gx || !bC.a4x ? mX : (bf.dl = !0, mU))()
	}

	function aaR() {
		var aB, en, aaS = b9.pv.aUH,
			fW = b9.pv.aUI,
			fY = b9.pv.aUJ,
			fa = b9.pv.aUK,
			aaT = b9.pv.aUL,
			aaU = b9.pv.aUM;
		if (!(aaI >= aaU.length)) {
			if (aaU = aaU[aaI], aaT[aaI]) {
				for (en = aaJ + aaU, aB = aaJ; aB < en; aB++) b8.p2.pk(aaS[aB], fW[aB], fY[aB], fa[aB]);
				aaJ += aaU, aaI++
			} else ++aaK >= aaU && (aaI++, aaK = 0);
			return 1
		}
		aN.a1Q("Replay file smaller than expected."), bC.a2F(!1), aD.a09 = 2
	}
	this.aaA = 0, this.dd = function() {
		aaL = aGY = aaK = aaJ = aaI = 0
	}, this.j3 = function() {
		var aY5;
		h.j3(), bC.a8h() < 1.7 ? 0 === e8 ? bf.eM >= eM && (aY5 = bf.aBP / bC.a8h(), eM += aY5 * Math.floor(1 + (bf.eM - eM) / aY5), 2 === aD.a09 || aM.gx || !bC.a4x ? mM() : (aaO(), bb.aC0()), e8++) : aaP() : function() {
			var aY5;
			if (bf.eM >= eM)
				if (2 === aD.a09 || aM.gx || !bC.a4x) mM(), eM = bf.eM;
				else {
					for (aY5 = bf.aBP / bC.a8h(), 16 < (bf.eM - eM) / aY5 && (eM = bf.eM - 16 * aY5); bf.eM >= eM && 2 !== aD.a09;) eM += aY5, aaO();
					bb.aC0()
				} aaP()
		}(), mS(), bf.dl && (bf.dl = !1, yC())
	}, this.a0J = function() {
		b9.pv.aUM.length - aaI <= 2 || aN.a1Q("Replay file larger than expected.")
	}
}

function aaV() {
	var e8 = 0,
		eM = bf.eM;
	this.aaA = 0, this.j3 = function() {
		h.j3(), aD.hB ? mX() : 0 === e8 ? bf.eM >= eM && (eM += bf.aBP * Math.floor(1 + (bf.eM - eM) / bf.aBP), 2 === aD.a09 || aM.gx ? mM() : (mO(), bb.aC0()), e8++) : ((aM.gx ? mX : (bf.dl = !0, mU))(), e8 = 0), mS(), bf.dl && (bf.dl = !1,
		yC())
	}
}

function dR() {
	this.a0I = null, this.dl = !1, this.eM = 0, this.aBP = 56;
	var aaW = 0;

	function aaX() {
		bf.eM = aaW = performance.now(), bf.a0I.j3(), window.requestAnimationFrame(aaX)
	}
	this.dd = function() {
		this.a4u(), window.requestAnimationFrame(aaX), this.eM = performance.now()
	}, this.a4l = function() {
		aD.gw ? (this.a0I = new aaH, this.a0I.dd()) : aD.kU ? this.a0I = new aaV : (this.a0I = new aaB, this.a0I.dd())
	}, this.a4u = function() {
		this.a0I = new aa9, this.dl = !0
	}, this.j3 = function() {
		this.a0I.aaA++
	}, this.k7 = function() {
		return this.a0I.aaA
	}, this.aSX = function() {
		var dt = performance.now();
		dt < aaW + 1e3 || (this.eM = dt, this.a0I.j3())
	}
}

function ct() {
	var aFy = 0,
		aaY = !0;

	function aaZ(id) {
		id = [L(513), L(514), L(515), L(516)][id];
		aN.a6k(id)
	}
	this.j3 = function() {
		var dt, a75;
		bf.eM < aFy || (aFy = bf.eM + 5e3, aD.gw) || aD.kU || bA.g9.gz(aD.eX) || (dt = new Date, a75 = dt.getUTCSeconds(), aaY ? a75 < 50 && (aaY = !1) : a75 < 50 || (aaY = !0, (a75 = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a75 || 20 ==
			a75 || 40 == a75 ? aD.kS < 7 && aaZ(0) : 10 == a75 || 30 == a75 || 50 == a75 ? 7 !== aD.kS && 10 !== aD.kS || aaZ(1) : 5 == a75 || 25 == a75 || 45 == a75 ? 8 === aD.kS && aaZ(2) : 35 == a75 && 9 === aD.kS && aaZ(3))))
	}
}

function cn() {
	var n9, nA, nM, nN, aaa = 0,
		aab = 0;

	function aad() {
		return Math.pow(Math.pow(nM - n9, 2) + Math.pow(nN - nA, 2), .5)
	}

	function aac(e) {
		n9 = h.k * e.touches[0].clientX, nA = h.k * e.touches[0].clientY, nM = h.k * e.touches[1].clientX, nN = h.k * e.touches[1].clientY
	}
	this.a1h = function(e) {
		return 1 < e.touches.length ? (aab = bf.eM, aaa = 3, aac(e), aL.rs(), !0) : (aaa = 0, !1)
	}, this.a1i = function(e) {
		var aLL, i4, i5;
		return 0 !== aD.a09 && 1 < e.touches.length && (aaa = Math.max(aaa - 1, 0), aH.nR() && (aLL = aad(), aac(e), e = aad(), i4 = Math.floor((n9 + nM) / 2), i5 = Math.floor((nA + nN) / 2), aS.a98(i4, i5, Math.max(.125, e) / Math.max(.125,
			aLL)), bf.dl = !0), !0)
	}, this.a25 = function() {
		var eu, ew;
		return !!(aaa && (aaa = 0, bf.eM < aab + 500)) && (eu = (n9 + nM) / 2, ew = (nA + nN) / 2, aL.a1z(eu, ew), aL.click(eu, ew, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.uD = function() {
		this.aC = null
	}, this.pj = function(size) {
		for (var fF = 0, aC = this.aC, nR = this.e8 + size - 1, aB = this.e8; aB <= nR; aB++) fF |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nR - aB;
		return this.e8 += size, this.e8 > 8 * this.size && console.error("Unwrapper Overflow"), fF
	}, this.aT3 = function(size) {
		var f7 = size >> 1;
		return (1 << f7) * this.pj(size - f7) + this.pj(f7)
	}, this.aT4 = function(aae) {
		return this.size === bD.aT2(aae)
	}, this.aUZ = function(x0, aaf, aag) {
		var gG = this.pj(x0);
		if (!gG) return null;
		for (var x0 = Math.max(gG, aag), g = new(aaf <= 8 ? Uint8Array : aaf <= 16 ? Uint16Array : Uint32Array)(x0), aB = 0; aB < gG; aB++) g[aB] = this.pj(aaf);
		aag = g[gG - 1];
		return aag && g.fill(aag, gG), g
	}, this.aUa = function(x0, aah, aag) {
		var gG = this.pj(x0);
		if (!gG) return null;
		for (var x0 = Math.max(gG, aag), g = new Array(x0), aB = 0; aB < gG; aB++) g[aB] = this.aUX(aah);
		return g.fill(g[gG - 1], gG), g
	}, this.aUX = function(x0) {
		return bG.w7.wB(this.pj(x0))
	}, this.aUY = function() {
		var qI = bF.st.su(bF.st.sv(this.pj(30))),
			qI = bA.ra.a4N(qI, "_", "/");
		qI = bA.ra.a4N(qI, "-", "+");
		for (var aai = "";
			(qI.length + aai.length) % 4;) aai += "=";
		qI = "data:image/png;base64," + qI + aai;
		var aHv = new Image;
		aHv.onload = function() {
			b9.aIK.aIL(aHv), aHv.onload = null, aHv = null
		}, aHv.src = qI
	}
}

function dL() {
	this.aVQ = 0, this.aVR = 0, this.aVM = 0, this.aVN = 0, this.aVO = 0, this.aVP = 0, this.aC1 = [0, 0, 0, 0], this.nQ = function() {
		this.aVQ = aS.yE(), this.aVR = aS.yF(), this.aVM = -this.aVQ, this.aVN = -this.aVR, this.aVO = h.i / hy, this.aVP = h.j / hy, this.aC1[0] = Math.floor(this.aVM), this.aC1[1] = Math.floor(this.aVN), this.aC1[2] = Math.floor(this.aC1[0] +
			this.aVO + 1), this.aC1[3] = Math.floor(this.aC1[1] + this.aVP + 1), bb.aBy = !0
	}
}

function co() {
	var a7l, mw;
	this.dd = function() {
		a7l = 1, mw = 0
	}, this.j3 = function() {
		0 < a7l && (mw = 0 === mw ? bf.eM + 16 : mw, a7l = (a7l -= .001 * (bf.eM - mw)) < 0 ? 0 : a7l, mw = bf.eM, bf.dl = !0)
	}, this.uj = function() {
		0 < a7l && (uk.fillStyle = "rgba(0,0,0," + a7l + ")", uk.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aae) {
		return this.dd(new Uint8Array(this.aT2(aae))), this.aC
	}, this.uD = function() {
		this.aC = null
	}, this.a8 = function(size, a79) {
		for (var aC = this.aC, nR = this.e8 + size - 1, aB = this.e8; aB <= nR; aB++) aC[aB >> 3] |= (a79 >> nR - aB & 1) << 7 - (7 & aB);
		this.e8 += size, this.e8 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aT1 = function(size, a79) {
		var f7 = size >> 1,
			eq = 1 << f7;
		this.a8(size - f7, bL.du(a79, eq)), this.a8(f7, a79 % eq)
	}, this.aal = function(size) {
		for (var aC = this.aC, nR = this.e8 + size, aB = this.e8; aB < nR; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aT2 = function(aae) {
		return aae + 7 >> 3
	}, this.aam = function(g, jQ, nR, aan) {
		for (var aB = jQ; aB < nR; aB++) this.a8(aan, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e8 = 0
	}, this.aTR = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aao, value) {
		for (var g = this.g, nR = this.e8 + aao - 1, aap = 1 + (nR >> 3); g.length < aap;) g.push(0);
		for (var aB = this.e8; aB <= nR; aB++) g[aB >> 3] |= (value >> nR - aB & 1) << 7 - (7 & aB);
		this.e8 += aao
	}, this.dk = function(g, x0, aaf) {
		var aaq = bA.qj.a2r(g);
		this.a8(x0, aaq);
		for (var aB = 0; aB < aaq; aB++) this.a8(aaf, g[aB])
	}, this.aUr = function(g, x0, aah) {
		var aaq = bA.qj.a2r(g);
		this.a8(x0, aaq);
		for (var aB = 0; aB < aaq; aB++) this.aUp(g[aB], aah)
	}, this.aUp = function(qI, x0) {
		var en = qI.length;
		this.a8(x0, en);
		for (var aB = 0; aB < en; aB++) this.a8(16, qI.charCodeAt(aB))
	}, this.aUq = function(a2x) {
		var aar = (a2x = a2x.toDataURL()).split(",");
		if (aar.length < 2) console.log("error 266");
		else {
			a2x = bA.ra.a4N(a2x = aar[aar.length - 1], "/", "_"), a2x = bA.ra.a4N(a2x, "\\+", "-");
			var a2x = bA.ra.a4N(a2x, "=", ""),
				wK = bG.st.wH(a2x),
				en = wK.length;
			this.a8(30, en);
			for (var aB = 0; aB < en; aB++) this.a8(6, wK[aB])
		}
	}
}
a(), self.aiCommand746 = function(fF) {
	0 === fF ? bt() : 1 !== fF || !a0 || 1 !== a0.id || a0.dv < 14 || bJ.fG()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};