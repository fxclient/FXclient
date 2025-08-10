var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, hy, iO, iP,
	a7y, ll, jv, a1b, uj, yG, aBs, a4l, a4m, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", "0.5em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "' target='_blank'>",
		"undefined", "pre", "</a>", "underline", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel", "top",
		"tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown",
		"italic ", "file", "error", "en-US", "dotted", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", ". Duration: x", ",0,0.85)", " solid white;}", " have", " has", " Rank: ", " / 160", " -> "
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
	this.dq = 1109, this.n = 2105, this.rVersion = 14, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dv = "10 Aug 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
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
			0, .85), this.op = f8.nd(255, 140, 0, .75), this.oq = f8.nd(70, 40, 0, .85), this.or = f8.nb(220, 120, 0), this.os = f8.nd(255, 200, 80, .85), this.ot = f8.nb(255, 150, 120), this.ou = f8.nd(0, 0, 0, 0), this.ov = f8.nd(255, 255, 255, 0),
		this.ow = f8.nd(254, 254, 254, 0)
}

function cy() {
	this.hD = new ox, this.g9 = new oy, this.oz = new p0, this.p1 = new p2, this.kC = new p3
}

function ox() {
	this.hE = function(eZ) {
		aD.kU ? b8.oz.hE(aD.eX, eZ) : b0.p4.p5(eZ)
	}, this.hK = function(iN, jJ) {
		aD.kU ? b8.oz.hK(aD.eX, iN, jJ) : b0.p4.p6(iN, jJ)
	}, this.p7 = function(iN, p8) {
		aD.kU ? b8.oz.p9(aD.eX, iN, p8) : b0.p4.pA(iN, p8)
	}, this.hP = function(iN, eZ) {
		eZ = (eZ << 3) + bO.fP[6];
		aD.kU ? b8.oz.hP(aD.eX, iN, eZ) : bN.mG.mH(aD.eX) && b0.p4.pC(iN, eZ)
	}, this.hS = function(iN) {
		849 === iN && (iN = 850);
		var n6 = bO.fP[3];
		aD.kU ? b8.oz.hS(aD.eX, iN, n6) : bN.hQ.pD(aD.eX, n6) && b0.p4.pE(iN, n6)
	}, this.pF = function(n6) {
		aD.kU ? b8.oz.pF(aD.eX, n6) : b0.p4.pE(849, n6)
	}, this.pG = function(jJ) {
		aD.kU ? b8.oz.pG(aD.eX, jJ) : b0.p4.pH(jJ)
	}, this.pI = function(pJ) {
		aD.kU ? b8.oz.pK(aD.eX, pJ) : b0.p4.pL(pJ)
	}, this.hb = function(pM) {
		aD.kU ? b8.oz.hb(aD.eX, pM) : b0.p4.pN(pM)
	}, this.pO = function() {
		aD.kU ? b8.oz.pO(aD.eX) : b0.p4.pP()
	}, this.hY = function() {
		aD.kU ? b8.oz.hY(aD.eX) : b0.p4.pH(513)
	}, this.hG = function(iN, eZ, jJ) {
		aD.kU ? b8.oz.hG(aD.eX, iN, eZ, jJ) : b0.p4.pQ(iN, eZ, jJ)
	}
}

function p3() {
	this.kD = function(player, p8, hW) {
		bA.g9.pR(player, hW, p8) && (ae.p7(player, p8), !bA.g9.jX(p8)) && ao.iv.jm[p8] && ao.iv.jm[p8]--
	}, this.pS = function(player, p8, hW) {
		bA.g9.pT(hW, p8) ? an.jG(p8, bO.fK[0]) && (bq.pU(player, p8, bO.fK[0], 1), bA.g9.gC(p8, bO.fK[0]), bd.pV(player, p8), af.pW(p8, bO.fK[0])) : bd.gD(player, hW, 12)
	}
}

function oy() {
	this.pX = function(pJ, player) {
		aN.pI(aD.eX, player, pJ), b0.p4.pY(pJ, player)
	}, this.pZ = function(player) {
		aN.pa(player, 0), b0.p4.pb(player)
	}, this.pc = function(pd, player) {
		aN.pe(pd, player), b0.p4.pf(pd, player)
	}, this.pg = function() {
		aD.kU || aD.gw || b0.ph.pg()
	}
}

function p2() {
	this.j3 = function(aC) {
		var id, fW, nR;
		for (bH.dd(aC), bH.e8 += 2, nR = 8 * bH.size; bH.e8 + 8 <= nR;) id = bH.pi(4), fW = bH.pi(9), 0 === id ? this.pj(id, fW, bH.pi(22)) : 1 === id ? this.pj(id, fW, bH.pi(10), bH.pi(10)) : 2 === id ? this.pj(id, fW, bH.pi(10), bH.pi(9)) :
			3 === id ? this.pj(id, fW, bH.pi(10), bH.pi(27)) : 4 === id ? this.pj(id, fW, bH.pi(10), bH.pi(16)) : 5 === id || 6 === id ? this.pj(id, fW, bH.pi(10)) : 7 === id ? this.pj(id, fW, bH.pi(1)) : 10 === id ? this.pj(id, fW, bH.pi(20), bH
				.pi(22)) : this.pj(id, fW)
	}, this.pk = [], this.pl = function() {
		for (var pn = 0, po = 0, pp = 0, pq = 0, pr = 0, ps = 0, aB = 0; aB < 512; aB++) pn += ag.mj[aB], po += ag.gb[aB], pp += ag.gp[aB], pq += bN.y.kE[aB];
		pr += bN.y.m0, ps += al.kg, this.pk.push(pp % 1073741824 * 4 + (pn + po + pq + pr + ps) % 4)
	}, this.pj = function(id, fW, fY, fa) {
		0 === id ? b8.oz.hE(fW, fY) : 1 === id ? b8.oz.hK(fW, fY, fa) : 2 === id ? b8.oz.p9(fW, fY, fa) : 3 === id ? b8.oz.hP(fW, fY, fa) : 4 === id ? b8.oz.hS(fW, fY, fa) : 5 === id ? b8.oz.pG(fW, fY) : 6 === id ? b8.oz.pK(fW, fY) : 7 === id ?
			b8.oz.hb(fW, fY) : 8 === id ? b8.oz.pO(fW) : 9 === id ? b8.oz.pt(fW) : 10 === id && b8.oz.hG(fW, fY >> 10, fa, fY % 1024)
	}
}

function p0() {
	this.hE = function(player, eZ) {
		bA.g9.gy(0) && bA.g9.gz(player) && bM.iS(eZ) && (b9.pu.pv(0, player, eZ), aD.pw.jG(player, eZ))
	}, this.hK = function(player, iN, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.px(player, jJ) && bA.g9.mI(player, iN, 12, 0) && bA.g9.py(player, jJ) && ((jJ = ad.jV(player, bO.ej[0])) || ad.jo(player)) && (ag.pz[player]++, b9.pu.pv(1, player, iN, bO.ej[0]), ao.it.j8(player,
			jJ)) && (bA.g9.mK(player), bd.q0(player, iN), ao.it.jE(player))
	}, this.p9 = function(player, iN, p8) {
		bA.g9.gy(1) && bA.g9.gz(player) && aD.hh && bA.g9.px(player, p8) && bA.g9.q1(player, p8) && bA.g9.pR(player, bA.g9.iM(player, iN), p8) && an.jG(p8, bO.fK[0]) && (b9.pu.pv(2, player, iN, p8), ae.p7(player, p8))
	}, this.hP = function(player, iN, pB) {
		bO.fP[1] = 7 & pB;
		var eZ = pB >> 3;
		bA.g9.gy(1) && bA.g9.gz(player) && bM.iS(eZ) && bN.mG.mH(player) && bN.mG.q2(eZ) && bA.g9.mI(player, iN, 32, 0) && bN.kx.q3(player, eZ, 1) && (bd.q4(player), b9.pu.pv(3, player, iN, pB), bA.g9.mK(player), bl.q5.hP(player), bN.y.mL(
			player))
	}, this.hS = function(player, iN, n6) {
		849 === iN ? this.pF(player, n6) : bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.mI(player, iN, 32, 0) && bN.hQ.q6(player, n6) && (bd.q4(player), b9.pu.pv(4, player, iN, n6), bA.g9.mK(player), bl.q5.hS(player), bN.y.mL(player))
	}, this.pF = function(player, n6) {
		bA.g9.gy(1) && bA.g9.gz(player) && bN.q7.j3(player, n6) && b9.pu.pv(4, player, 849, n6)
	}, this.pG = function(player, jJ) {
		513 === jJ ? this.hY(player) : bA.g9.gy(1) && bA.g9.gz(player) && (jJ = Math.min(jJ, aD.ek), ad.jV(player, jJ)) && (b9.pu.pv(5, player, jJ), ad.q8(player, jJ))
	}, this.pK = function(player, pJ) {
		(bA.g9.gy(1) || bA.g9.gy(2)) && bA.g9.gz(player) && (pJ = bL.hv(pJ, 0, 1023), b9.pu.pv(6, player, pJ), af.q9(player, 0, pJ))
	}, this.hb = function(player, pM) {
		aw.ha(player) && (b9.pu.pv(7, player, pM), aw.qA(player, pM))
	}, this.pO = function(player) {
		(bA.g9.gy(0) || bA.g9.gy(1)) && bA.g9.gz(player) && aM.qB(player) && (b9.pu.pv(8, player), bQ.pO(player))
	}, this.pt = function(player) {
		b9.pu.pv(9, player), bQ.pt(player)
	}, this.hY = function(player) {
		aw.hc(player) && (b9.pu.pv(5, player, 513), aw.hY(player))
	}, this.hG = function(player, iN, eZ, jJ) {
		bA.g9.gy(1) && bA.g9.gz(player) && bA.g9.px(player, jJ) && bA.g9.py(player, jJ) && bM.iS(eZ) && am.eO.eh(player, eZ) && (ad.jV(player, bO.ej[0]) || ad.jo(player)) && (b9.pu.pv(10, player, (iN << 10) + bO.ej[0], eZ), jJ = bA.g9.lM(player,
			iN), ag.gF[player].push(bO.eo[0]), ad.jG(player, jJ, bO.ej[0]), aF.jH(player, !0), bd.qC(player))
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
		f8 ? 1 === f8 ? f8 = bB.nv : 2 === f8 && (qo = 1, f8 = bB.nv) : (qo = 0, f8 = bB.nf), this.qs = qn = f8, qq.style.backgroundColor = f8
	}, self = this, qq.innerHTML = ql, qq.style.color = qp ? bB.oh : bB.nj, qq.style.userSelect = "none", qq.style.outline = "none", qq.style.overflowWrap = "break-word", self.qu(qn), qq.style.border = "none", qq.style.font = "inherit", self.qv(
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
			rV = 1048575, rK.textContent = "", rc || this.mW()
		}, this.mW = function() {
			var rd = bn.y.re[0],
				rd = bn.y.rg[rd],
				rh = rd.rh,
				en = rh.length,
				jQ = 1048575 === rV ? 0 : en - (rd.ri - rV + 1048575) % 1048575;
			if (rV = rd.ri, !(en <= (jQ = Math.max(jQ, 0)))) {
				for (var rj = document.createDocumentFragment(), aB = jQ; aB < en; aB++) rk(rj, bn.kz.rl(rh[aB], bn.kz.rm(rh[aB])));
				rK.appendChild(rj), rn()
			}
		}, this.ro = function(r) {
			var rj = document.createDocumentFragment();
			rk(rj, r), rK.appendChild(rj), rn()
		}, this.show = function(qU) {
			qU.appendChild(rJ), qU.appendChild(rL), this.resize(qU)
		}, this.rr = function(qU) {
			t.removeChild(qU, rJ), t.removeChild(qU, rL)
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
		}, (self = this).rN.e.rW = 127, rJ.style.position = "absolute", rJ.style.left = "0", rJ.style.width = "100%", rJ.style.overflowX = "hidden", rJ.style.overflowY = "auto", rJ.style.font = "inherit", rJ.style.backgroundColor = bB.nh, rJ
		.addEventListener("scroll", function() {
			rU = rJ.scrollTop, rT = rU < rJ.scrollHeight - rJ.clientHeight - 2 ? 0 : 1
		}), rK.style.font = "inherit", rL.style.position = "absolute", rL.style.left = "0", rL.style.width = "100%", self.rN.e.setAttribute("placeholder", L(13)), self.rN.e.style.position = "absolute", self.rN.e.style.top = "0", self.rN.e.style
		.left = "0", self.rN.e.style.height = "100%", self.rN.e.style.backgroundColor = bB.ne, self.rN.e.style.textAlign = "center", (rR = new w(L(14), rP)).button.top = "0", rR.button.style.position = "absolute", rR.button.style.height = "100%", rR
		.qu(bB.ov), rM = new rX("127", rR.button, 1, 1), rJ.appendChild(rK), rL.appendChild(self.rN.e), rL.appendChild(rR.button)
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
		bA.qa.qk(this.e, 8, bB.ns)
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
			sI = 0, t.removeChild(document.body, sH)
		}
		return 1
	}, sH.style.position = "absolute", sH.style.backgroundColor = bB.nf, sH.style.color = bB.nj, sH.style.pointerEvents = "none", sH.style.zIndex = "5", sH.style.maxWidth = "100%"
}

function rO(sT, type, sU, sV) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sW++, e.value = sT.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.nj, e.style.backgroundColor = bB.nc, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
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
		sg = bA.color.nd(70, 70, 0, .35);

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
			var l5 = data.sZ[0].length;
			for (aB = 0; aB < en; aB++)
				for (bA.qa.qk(sd[aB], 2), f6 = 1; f6 < l5; f6++) bA.qa.qk(qV[aB][f6], 4);
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
				l5 = en ? sZ[0].length : 0;
			for (aB = 0; aB < en; aB++) {
				sd[aB] = document.createElement("div"), sd[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nd(130, 130, 130, .35) : bB.ni
				}(aB), sd[aB].style.width = "100%", sd[aB].style.display = "flex", qV[aB] = new Array(l5);
				for (var f6 = 0; f6 < l5; f6++) qV[aB][f6] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data
					.sk[f6] + "%", eq.innerHTML = sZ[aB][f6].fF, 1 === sZ[aB][f6].dt && (eq.name = "" + aB, eq.style.color = bB.oh, eq.style.backgroundColor = sg, eq.addEventListener("mouseover", r5), eq.addEventListener("mouseout", sl), function(eq,
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
			for (sa.style.display = "flex", sa.style.backgroundColor = bA.color.nd(0, 120, 0, .35), aB = 0; aB < se.length; aB++) se[aB] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style
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
			t.removeChild(document.body, sz)
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
		}, sz.style.position = "absolute", t0.style.width = "25%", t0.style.height = "100%", t0.style.backgroundColor = bB.nf, t1.style.position = "absolute", t1.style.width = "75%", t1.style.height = "100%", t1.style.backgroundColor = bB.nf, t1
		.style.top = t1.style.right = bA.qa.qj(0), bA.qa.t5(t1), sc.style.height = sc.style.maxHeight = "100%", r9.push(new w("", function() {
			t6(0)
		}, bB.oT)), r9.push(new w("", function() {
			t6(1)
		}, bB.oU)), r9.push(new w("", function() {
			t6(2)
		}, bB.oM)), r9.push(new w("", function() {
			t6(3)
		}, bB.o7)), r9.push(new w("", function() {
			t6(4)
		}, bB.oq)), r9.push(new w("", function() {
			t6(5)
		}, bB.oo)), r9.push(new w("", function() {
			t6(6)
		}, bB.oq)), t2 = new Array(r9.length);
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
		t.removeChild(document.body, tO)
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
	tO.style.position = "absolute", tO.style.top = "0", tO.style.left = "0", tO.style.width = "100%", tO.style.height = "100%", tO.style.backgroundColor = bB.ni, bJ.r2() || (tO.style.backdropFilter = "blur(4px)", tO.style.webkitBackdropFilter =
		"blur(4px)"), tP.style.position = "absolute", tP.style.top = "0", tP.style.left = "0", tP.style.width = "100%", tP.style.display = "flex", tP.style.alignItems = "center";
	for (var g = [tQ, tR, tS, tX], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qa.t5(g[aB]);
	tT.style.position = "absolute", tT.style.left = "0", tT.style.width = "100%", tT.style.font = "inherit", tU.style.position = "absolute", tU.style.left = "0", tU.style.width = "100%", tV.style.position = "absolute", tV.style.top = "0", tV.style
		.left = "0", tV.style.height = "100%", tV.style.width = "50%", tV.style.backgroundColor = bB.o5, tW.innerHTML = "", tW.style.position = "absolute", tW.style.top = "50%", tW.style.left = "50%", tW.style.transform = "translate(-50%, -50%)", tP
		.appendChild(function() {
			var te = document.createElement("h1");
			return te.textContent = L(23), te.style.margin = "0 auto 0.15em auto", te.style.fontFamily = "Arial Black, Trebuchet MS", te.style.fontSize = "inherit", te.style.fontWeight = "inherit", te
		}()), tQ.appendChild(tK.qF), tR.appendChild(tL.qF), tS.appendChild(tM.qF), tU.appendChild(tV), tU.appendChild(tW), tX.appendChild(tN.qF), tO.appendChild(tP), tO.appendChild(tQ), tO.appendChild(tR), tO.appendChild(tS), tO.appendChild(tT), tO
		.appendChild(tU), tO.appendChild(tX), rH.tZ.show(tT)
}

function ta(rI) {
	var tO = document.createElement("div"),
		tT = document.createElement("div");
	this.mW = function() {
			tT.textContent = "", bn.tt.rr(1);
			for (var rj = document.createDocumentFragment(), tu = bn.y.re[0], tv = bn.tv.tw[tu], tx = bn.tv.tx[tu], aB = 0; aB < tv.length; aB++) ! function(rj, qS, tz, tu) {
				var rY = document.createElement("span");
				rY.textContent = (tz ? "🟢 " : "⚪ ") + bn.kz.u0(qS, tu), rY.style.color = bn.kz.u1(qS.u2), rY.style.cursor = "pointer", rY.style.margin = "0.2em 0.2em 0.2em 0.2em", rY.style.width = rY.style.maxWidth = 2 === tu ? "10em" : "9em",
					rY.style.height = rY.style.maxHeight = "1.4em", rY.style.whiteSpace = "nowrap", rY.style.overflow = "hidden", rY.style.textOverflow = "ellipsis", rY.style.font = "inherit", rY.style.display = "inline-block", bn.kz.u3(qS) && (
						rY.style.textDecoration = "underline"), qS.u4 && (rY.style.textDecorationLine = "underline", rY.style.textDecorationStyle = "dotted");
				rY.onclick = function(e) {
					rI(e, qS)
				}, bJ.r2() || (rY.onmouseover = function(e) {
					bn.tt.u5(e, qS, 1)
				}), rj.appendChild(rY)
			}(rj, tv[aB], aB < tx, tu);
			tT.appendChild(rj)
		}, this.show = function(qU) {
			qU.appendChild(tO)
		}, this.rr = function(qU) {
			t.removeChild(qU, tO)
		}, this.resize = function() {
			tT.style.fontSize = bA.qa.qj(bA.qa.rt(.02, .3))
		}, tO.style.top = "0", tO.style.left = "0", tO.style.width = tO.style.height = "100%", tO.style.overflowX = "hidden", tO.style.overflowY = "auto", tO.style.font = "inherit", tT.style.font = "inherit", tT.style.margin = "0.4em", tO
		.appendChild(tT)
}

function u6(u7) {
	var tO = document.createElement("div"),
		rL = document.createElement("div"),
		u8 = [];

	function qx() {
		bJ.r2() || (this.style.backgroundColor = bA.color.r5(bB.nf, 50))
	}

	function qy() {
		this.style.backgroundColor = bB.nf
	}
	this.s3 = function(uA, uB) {
			u8[2].textContent = uA + 1 + " / " + uB
		}, this.show = function(qS) {
			rL.appendChild(bn.rq.transform(bn.kz.rl(qS, bn.kz.rm(qS)))), document.body.appendChild(tO)
		}, this.resize = function() {
			var j = bA.qa.rt(.03, .5);
			tO.style.width = 10 * j + "px", tO.style.font = bA.qa.sP(1, .75 * j), bA.qa.qk(tO, 4), rL.style.top = j + "px", rL.style.font = bA.qa.sP(0, .55 * j), bA.qa.qk(rL, 2), tO.style.height = j + rL.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qa.qk(u8[aB], 6), u8[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u8[aB].style.height = j + "px", bA.qa.qk(u8[aB], 2);
			u8[2].style.width = 4 * j + "px", u8[1].style.left = 2 * j + "px", u8[2].style.left = 4 * j + "px", u8[3].style.left = 8 * j + "px"
		}, this.uC = function() {
			for (var aB = 0; aB < 4; aB++) u8[aB].onclick = null, u8[aB].onmouseover = null, u8[aB].onmouseout = null;
			t.removeChild(document.body, tO), tO = rL = u8 = null
		}, tO.style.position = "absolute", tO.style.color = bB.nj, tO.style.zIndex = "3", tO.style.right = "0", tO.style.top = "0", rL.style.position = "absolute", rL.style.height = "auto", rL.style.color = bB.nj, rL.style.backgroundColor = bB.nf, rL
		.style.left = "0", rL.style.width = "100%", rL.style.overflowWrap = "break-word", tO.appendChild(rL);
	for (var aB = 0; aB < 4; aB++) u8[aB] = document.createElement("div"), u8[aB].style.position = "absolute", u8[aB].style.backgroundColor = bB.nf, u8[aB].style.color = bB.nj, u8[aB].style.top = "0", u8[aB].style.display = "flex", u8[aB].style
		.justifyContent = "center", u8[aB].style.alignItems = "center", u8[aB].style.userSelect = "none", u8[aB].style.outline = "none", u8[aB].style.font = "inherit", 2 !== (u8[aB].u9 = aB) && (u8[aB].onclick = u7, u8[aB].onmouseover = qx, u8[aB]
			.onmouseout = qy), tO.appendChild(u8[aB]);
	u8[0].textContent = "◀", u8[1].textContent = "▶", u8[3].textContent = "✖"
}

function uD(u7) {
	var sH = document.createElement("div");

	function qx() {
		bJ.r2() || (sH.style.backgroundColor = bA.color.r5(bB.nf, 50))
	}

	function qy() {
		sH.style.backgroundColor = bB.nf
	}
	this.s3 = function(uB) {
			sH.textContent = uB
		}, this.show = function() {
			document.body.appendChild(sH)
		}, this.resize = function() {
			var j = bA.qa.rt(.03, .5);
			sH.style.width = 2 * j + "px", sH.style.height = j + "px", sH.style.font = bA.qa.sP(1, .75 * j), bA.qa.qk(sH, 4), bA.qa.qk(sH, 2)
		}, this.uC = function() {
			sH.onclick = null, sH.onmouseover = null, sH.onmouseout = null, t.removeChild(document.body, sH), sH = null
		}, sH.style.position = "absolute", qy(), sH.style.color = bB.nj, sH.style.zIndex = "3", sH.style.right = "0", sH.style.top = "0", sH.style.display = "flex", sH.style.justifyContent = "center", sH.style.alignItems = "center", sH.style
		.userSelect = "none", sH.style.outline = "none", sH.onclick = u7, sH.onmouseover = qx, sH.onmouseout = qy
}

function uE(s9) {
	var tO = document.createElement("div"),
		uF = document.createElement("div"),
		sI = (this.eu = 0, this.ew = 0);

	function uH() {
		bn.uI.rr()
	}
	this.r9 = s9, this.show = function(eu, ew, uK) {
		if (sI) return [0, 0];
		sI = 1, this.eu = eu, this.ew = ew,
			function(self, uK) {
				var i = bA.qa.rt(.16, .7),
					j = s9.length * i / 3,
					uM = h.i / h.k,
					uN = h.j / h.k,
					nL = Math.min(1, Math.min(uM / i, uN / j));
				i *= nL, j *= nL, uK && (self.eu += bA.qa.rt(.03, .5)), self.eu = bL.hv(self.eu, 0, uM - i), self.ew = bL.hv(self.ew, 0, uN - j), uF.style.left = self.eu + "px", uF.style.top = self.ew + "px", uF.style.width = i + "px", uF.style
					.height = j + "px", uF.style.font = bA.qa.sP(0, .34 * j / s9.length), bA.qa.qk(uF, 5);
				for (var aB = 1; aB < s9.length; aB++) bA.qa.qk(s9[aB].button, 8)
			}(this, uK), document.body.appendChild(tO)
	}, this.rr = function() {
		sI && (sI = 0, tO.removeEventListener("click", uH), t.removeChild(document.body, tO))
	};
	for (var aB = 0; aB < s9.length; aB++) new rX("" + (1 + aB), s9[aB].button, 0, 1);
	tO.style.position = "fixed", tO.style.top = "0", tO.style.left = "0", tO.style.width = "100%", tO.style.height = "100%", tO.style.zIndex = "5", uF.style.position = "absolute",
		function() {
			for (var uJ = (100 / s9.length).toFixed(2) + "%", aB = 0; aB < s9.length; aB++) s9[aB].button.style.width = "100%", s9[aB].button.style.height = s9[aB].button.style.maxHeight = uJ, s9[aB].button.style.padding = "0.0em 0.9em", uF
				.appendChild(s9[aB].button)
		}(), tO.appendChild(uF), tO.addEventListener("click", uH)
}

function uO(sT, uP) {
	this.qQ = [];
	var uQ = this.qQ;

	function click() {
		for (var aB = 0; aB < uQ.length; aB++) uQ[aB].textContent = uQ[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e8 = parseInt(this.name);
		void 0 !== sT.e8 && bj.s2.s3(sT.e8, e8), uP && uP(e8)
	}
	for (var uR, en = sT.uS.length, aB = 0; aB < en; aB++)(uR = document.createElement("p")).textContent = "⚪ " + sT.uS[aB], uR.style.margin = "0", uR.name = "" + aB, uR.style.cursor = "pointer", uR.style.fontSize = "1em", uR.addEventListener(
		"click", click), uQ.push(uR);
	uQ[sT.value].textContent = uQ[sT.value].textContent.replace("⚪", "🟢")
}

function uT(title, uU, uV) {
	var sz = document.createElement("div"),
		uW = document.createElement("div"),
		sc = document.createElement("div"),
		uX = document.createElement("div"),
		uY = document.createElement("div");
	this.uZ = sc, this.ua = uU, this.show = function() {
			!1 !== uV ? document.body.appendChild(sz) : (document.body.appendChild(uW), document.body.appendChild(uX))
		}, this.rr = function() {
			!1 !== uV ? t.removeChild(document.body, sz) : (t.removeChild(document.body, uW), t.removeChild(document.body, uX))
		}, this.ue = function() {
			var ru = bA.qa.rt(.1),
				rs = bA.qa.rt(.08 + .04 * (h.uf < 1), .3);
			return {
				ru: ru,
				rs: rs,
				ug: h.j / h.k - ru - rs
			}
		}, this.resize = function(sD) {
			var en = uU.length,
				uh = this.ue(),
				ru = uh.ru,
				rs = uh.rs;
			for (uW.style.height = bA.qa.qj(ru), bA.qa.qk(uW, 2), uX.style.top = bA.qa.qj(h.j / h.k - rs), uX.style.height = bA.qa.qj(rs), bA.qa.qk(uX, 8), sc.style.top = bA.qa.qj(ru), sc.style.height = sc.style.maxHeight = bA.qa.qj(uh.ug), uW.style
				.font = bA.qa.sP(0, bA.qa.rt(.02, .15)), uX.style.font = bA.qa.sP(0, bA.qa.rt(.02, .7)), sc.style.font = bA.qa.sP(0, bA.qa.rt(.02, .35)), aB = 1; aB < en; aB++) bA.qa.qk(uU[aB].button, 4);
			for (var sE = 0, aB = 0; aB < en; aB++) sE += uU[aB].button.offsetWidth;
			if (sD && sE < uX.offsetWidth)
				for (aB = 0; aB < en; aB++) uU[aB].button.style.width = (100 * uU[aB].button.offsetWidth / sE).toFixed(2) + "%";
			else
				for (aB = 0; aB < en; aB++) uU[aB].button.style.width = "auto";
			uX.tI && (uX.scrollLeft = uX.tI), sD || this.resize(!0)
		}, this.ui = function() {
			var uh = this.ue(),
				f8 = h.k;
			uj.fillStyle = bB.nf, uj.fillRect(0, f8 * uh.ru, h.i, f8 * uh.ug)
		}, sz.style.position = "absolute", sz.style.top = "0", sz.style.left = "0", sz.style.width = "100%", sz.style.height = "100%", uW.style.position = "absolute", uW.style.top = "0", uW.style.left = "0", uW.style.width = "100%", uW.style
		.display = "flex", uW.style.backgroundColor = bB.nf, uX.style.position = "absolute", uX.style.left = "0", uX.style.width = "100%", bA.qa.t5(uX), uY.style.height = uY.style.maxHeight = "100%", sc.style.position = "absolute", sc.style.width =
		"100%", sc.style.backgroundColor = bB.nf,
		function() {
			for (var aB = 0; aB < uU.length; aB++) uU[aB].button.style.height = "100%", uU[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uU.length; aB++) uY.appendChild(uU[aB].button);
	uW.appendChild(function() {
		var ud = document.createElement("h1");
		return ud.textContent = title, ud.style.margin = "auto", ud.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", ud.style.fontFamily = "Arial Black, Trebuchet MS", ud
	}()), uX.appendChild(uY), !1 !== uV && (sz.appendChild(sc), sz.appendChild(uW), sz.appendChild(uX))
}

function rX(uk, ul, um, un) {
	var self;
	this.rY = document.createElement("span"), (self = this).rY.textContent = uk, self.rY.style.color = bB.nj, self.rY.style.position = "absolute", self.rY.style.font = "inherit", un ? self.rY.style.bottom = "0.06em" : self.rY.style.top = "0.12em",
		um ? self.rY.style.left = "0.2em" : self.rY.style.right = "0.2em", self.rY.style.fontSize = "0.6em", self.rY.style.pointerEvents = "none", self.rY.style.whiteSpace = "pre", ul.style.position = "relative", ul.style.overflow = "hidden", ul
		.appendChild(self.rY)
}

function t7(uk, ul, uo, up, uq) {
	var self;
	this.rY = document.createElement("span"), this.resize = function() {
			this.rY.style.fontSize = ((up - uo) * ul.offsetHeight).toFixed(1) + "px"
		}, (self = this).rY.textContent = uk, self.rY.style.color = bB.nj, self.rY.style.font = "inherit", self.rY.style.margin = "0.1em 0.6em", self.rY.style.pointerEvents = "none", uq && (self.rY.style.fontWeight = "bold"), self.rY.style
		.whiteSpace = "nowrap", self.rY.style.display = "block", ul.appendChild(self.rY)
}

function ur(us, ut, uu, uv) {
	var uw = document.createElement("textarea"),
		ux = (this.e = uw, !0);

	function v3() {
		uw.select(), document.execCommand("copy")
	}
	this.resize = function() {
			ut && bA.qa.qk(uw, 5)
		}, this.uy = function(uz) {
			uw.value = uz
		}, this.v0 = function() {
			return uw.value
		}, this.v1 = function() {
			uw.select()
		}, this.clear = function() {
			uw.value = ""
		}, this.v2 = function() {
			ux && navigator.clipboard ? (uw.select(), navigator.clipboard.writeText(uw.value).catch(function() {
				ux = !1, v3()
			})) : v3()
		}, uw.setAttribute("id", "textArea" + t.y.sW++), uw.setAttribute("autocomplete", "off"), us && uw.setAttribute("placeholder", us), uw.style.top = "0", uw.style.left = "0", uw.style.width = "100%", uw.style.height = "100%", uw.style
		.userSelect = "none", uw.style.outline = "none", uw.style.resize = "none", uw.style.border = "none", uw.style.color = bB.nj, uw.style.backgroundColor = bB.nc, uv ? (uw.style.fontSize = "1em", uw.rows = 6, uw.style.padding = "0.25em") : (uw
			.style.padding = "0.45em", uw.style.fontSize = "1.2em"), uu && uw.addEventListener("input", function(e) {
			uu(e)
		}), uw.addEventListener("focus", function() {
			h.sX++
		}), uw.addEventListener("blur", function() {
			h.sX--
		})
}

function dI() {
	this.qr = new v4, this.eK = new v5, this.s2 = new v6, this.y = new v7, this.v8 = new v9, this.dd = function() {
		this.eK.dd(), (new vA).dd(), this.v8.dd()
	}
}

function v5() {
	function vB(aB, type, vI, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type || 0,
			value: vI || 0,
			vI: vI || 0,
			dv: dv || 0
		})
	}

	function vC(aB, type, vI, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type,
			value: vI || "",
			vI: vI || "",
			dv: dv || 0
		})
	}

	function vD(nR) {
		for (var aB = bj.eK.data.length; aB < nR; aB++) bj.eK.data.push(null)
	}
	this.data = [], this.dd = function() {
		vB(0, 1, 0, 5), vB(1, 1, 1), vB(2, 0), vC(3, 2), vB(4, 1), vC(5, 2, "Trebuchet MS", 1), vB(6, 0), vB(7, 0, 0), vB(8, 0), vB(9, 1, 1), vB(10, 1), vB(11, 1, 1), vC(12, 2, navigator.language), vB(13), vB(14), vD(100), vC(100, 2), vC(101, 2),
			vC(102, 2), vC(103, 2), vC(104, 2), vC(105, 2), vC(106, 2), vB(107), vB(108), vB(109), vC(110, 2), vB(111), vB(112), vB(113), vC(114, 2), vB(115), vC(116, 2), vB(117, 1), vC(118, 2, "", 2), vB(119, 1, 0, 1), vC(120, 2), vB(121, 1, ~~(
				262144 * Math.random())), vC(122, 2, "Player " + Math.floor(1e3 * Math.random())), vB(123), vC(124), vB(125, 1), vC(126, 2), vB(127, 0, 1), vB(128), vB(129), vB(130), vB(131), vB(132), vC(133, 2), vB(134, 0, 5), vC(135, 2), vC(
				136, 2), vB(137), vB(138), vB(139), vB(140), vB(141), vB(142), vB(143), vB(144), vC(145, 2), vB(146), vB(147), vC(148, 2), vB(149), vB(150, 0, 1), vC(151, 2), vB(152, 0, 5), vB(153, 1), vB(154, 1), vC(155, 2), vC(156, 2), vB(157),
			vB(158), vB(159), vB(160), vC(161, 2), vD(180), vB(180, 0), vB(181, 0)
	}, this.s3 = function(e8, value) {
		this.data[e8].value = value
	}, this.vE = function(e8, value) {
		this.s3(e8, value), bj.qr.save(e8, String(value)), bj.qr.save(e8, String(this.data[e8].dv), !0)
	}, this.vF = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bj.qr.save(aB, String(this.data[aB].value)), bj.qr.save(aB, String(this.data[aB].dv), !0))
	}, this.vG = function(e8) {
		return Number(this.data[e8].value)
	}, this.vH = function(e8) {
		return String(this.data[e8].value)
	}
}

function v9() {
	var vJ = [];

	function vN(sn) {
		vJ.unshift(sn), bj.s2.s3(161, vJ.join(";"))
	}

	function vM(sn) {
		for (var vP = vJ, en = vP.length, aB = 0; aB < en; aB++)
			if (vP[aB] === sn) return vP.splice(aB, 1), bj.s2.s3(161, vP.join(";")), 1
	}
	this.dd = function() {
		var qH = bj.eK.data[161].value;
		qH.length && (vJ = qH.split(";"))
	}, this.get = function() {
		return vJ
	}, this.vK = function() {
		return {
			uS: vJ,
			value: 0
		}
	}, this.u4 = function(sn) {
		return bA.qi.has(vJ, sn)
	}, this.vL = function(sn) {
		return vM(sn) ? 0 : (vN(sn), 1)
	}, this.mW = function(sn) {
		vM(sn) && vN(sn)
	}, this.vO = function(e8) {
		e8 < vJ.length && (vJ.splice(e8, 1), bj.s2.s3(161, vJ.join(";")))
	}
}

function v4() {
	this.vQ = function(e8, dv) {
		return Number(this.vR(e8, dv))
	}, this.vR = function(e8, dv) {
		var fF = null;
		return 0 === a0.id ? a0.vS && (fF = a0.vS.getItem((dv ? "v" : "d") + e8)) : 1 === a0.id ? fF = a0.vT.loadString((dv ? 1e3 : 2e3) + e8) : 2 === a0.id && (fF = a0.vU[(dv ? "v" : "d") + e8]), fF && 0 !== fF.length ? fF : null
	}, this.vV = function(en, vW) {
		var g = [],
			vX = vW ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vS)
				for (aB = 0; aB < en; aB++) g.push(a0.vS.getItem(vX + aB))
		} else if (1 === a0.id)
			for (var vY = vW ? 5e3 : 3e3, aB = 0; aB < en; aB++) g.push(a0.vT.loadString(vY + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) g.push(a0.vU[vX + aB]);
		return g
	}, this.save = function(e8, value, dv) {
		var vZ = (dv ? "v" : "d") + e8;
		if (0 === a0.id) {
			if (a0.vS && bj.eK.data[140].value) try {
				a0.vS.setItem(vZ, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vT.saveString((dv ? 1e3 : 2e3) + e8, value) : 2 === a0.id && (a0.vU[vZ] = value, a0.va.postMessage(vZ + " " + value))
	}, this.vb = function(g, vW) {
		var en = g.length,
			vX = vW ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vS && bj.eK.data[140].value) try {
				for (aB = 0; aB < en; aB++) a0.vS.setItem(vX + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vY = vW ? 5e3 : 3e3, aB = 0; aB < en; aB++) a0.vT.saveString(vY + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) a0.vU[vX + aB] = g[aB], a0.va.postMessage(vX + aB + " " + g[aB])
	}
}

function vA() {
	this.dd = function() {
		! function() {
			var data = bj.eK.data;
			0 === data[2].dv && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vI = 1);
			0 === data[100].dv && (data[100].value = data[100].vI = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fF, data = bj.eK.data,
			en = data.length;
		for (aB = 0; aB < en; aB++) data[aB] && data[aB].dv === bj.qr.vQ(aB, !0) && (fF = bj.qr.vR(aB), data[aB].value = null === fF ? data[aB].vI : 2 === data[aB].type ? fF : Number(fF))
	}
}

function v7() {
	function vh(g) {
		if (0 === g.length) bj.s2.s3(116, "");
		else {
			for (var vk = g[0], aB = 1; aB < g.length; aB++) vk += ";" + g[aB];
			bj.s2.s3(116, vk)
		}
	}
	this.ve = function() {
		bj.eK.data[110].value.length && (bj.eK.data[106].value = bj.eK.data[110], bj.s2.s3(110, ""), this.vf())
	}, this.vf = function() {
		var g = bj.eK.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eK.data[106].value), g.unshift(bj.eK.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vg = [], aB = 0; aB < g.length; aB += 2) vg.push(g[aB]);
		vh(g), bj.eK.data[117].value = 0, bj.eK.data[117].uS = vg
	}, this.vi = function(e8) {
		bj.eK.data[117].uS.splice(e8, 1), bj.eK.data[117].value = Math.min(e8, bj.eK.data[117].uS.length - 1);
		var g = bj.eK.data[116].value.split(";");
		g.splice(2 * e8, 2), vh(g)
	}, this.vj = function(e8) {
		var g = bj.eK.data[116].value.split(";");
		return {
			sn: g[2 * e8],
			password: g[2 * e8 + 1]
		}
	}, this.vl = function() {
		var fF = bL.hv(bj.eK.data[121].value, -1, 262143);
		return fF = -1 === fF ? ~~(262144 * Math.random()) : fF
	}
}

function v6() {
	this.s3 = function(e8, value) {
		bj.eK.data[e8].value !== value && (bj.eK.vE(e8, value), 0 === e8 ? (t.x(), b7.dd(), t.u(2)) : 1 === e8 ? h.dp(1) : 2 === e8 ? h.dp(0) : 5 === e8 && (bA.qa.vm(), h.dp(0)))
	}, this.vn = function() {
		for (var data = bj.eK.data, aB = 0; aB < 100; aB++) data[aB] && bj.eK.vE(aB, data[aB].vI);
		bA.qa.vm(), h.dp(1), b7.dd()
	}, this.vo = function() {
		for (var data = bj.eK.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eK.s3(aB, data[aB].vI)
	}, this.vp = function() {
		for (var f7 = bj.eK, aB = 128; aB < 135; aB++) f7.vE(aB, f7.data[aB].vI)
	}, this.vq = function(data) {
		bj.s2.s3(109, data.so), bj.s2.s3(107, data.vr), bj.s2.s3(108, data.vs), bj.s2.s3(112, data.vt), bj.s2.s3(111, data.vu), bj.s2.s3(113, data.vv), bj.s2.s3(135, data.vw), bj.s2.s3(136, data.vx), bj.s2.s3(137, data.vy), bj.s2.s3(138, data
			.vz), bj.s2.s3(139, data.w0), bj.s2.s3(141, data.w1), bj.s2.s3(142, data.w2), bj.s2.s3(143, data.w3), bj.s2.s3(144, data.w4)
	}
}

function c4() {
	this.ss = new w5, this.w6 = new w7, this.w8 = new w9, this.dd = function() {
		this.ss.dd()
	}
}

function w7() {
	this.wA = function(size) {
		for (var wB = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wB.pi(16)));
		return g.join("")
	}, this.wC = function(qH) {
		return 20 < (qH = qH.trim()).length ? qH.substring(0, 20) : qH
	}
}

function w5() {
	var wD = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (wD[50] = 37, aB = 0; aB < 10; aB++) wD[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) wD[aB + 20] = aB + 11, wD[aB + 52] = aB + 38
	}, this.wE = function(qH) {
		return qH.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.wF = function(qH, size) {
		if ((qH = this.wE(qH)).length > size) return qH.substring(0, size);
		for (; qH.length < size;) qH = "-" + qH;
		return qH
	}, this.wG = function(qH) {
		for (var wH = wD, en = qH.length, g = new Uint8Array(en), aB = 0; aB < en; aB++) g[aB] = wH[qH.charCodeAt(aB) - 45];
		return g
	}, this.wI = function(wJ) {
		bD.a7(6 * wJ.length), this.wK(wJ), bH.dd(bD.aC)
	}, this.wK = function(wJ) {
		for (var en = wJ.length, i = bD, aB = 0; aB < en; aB++) i.a8(6, wJ[aB])
	}, this.wL = function(qH) {
		this.wK(this.wG(qH))
	}, this.wM = function(qH, size) {
		this.wK(this.wG(this.wF(qH, size)))
	}, this.wN = function(qH, size) {
		for (var g = this.wG(this.wF(qH, size)), fF = 0, nL = 1, aB = g.length - 1; 0 <= aB; aB--) fF += nL * g[aB], nL *= 64;
		return fF
	}
}

function wO() {
	var i, j, wP;

	function wp(hF, eq, wn, wU, wi) {
		eq = wo(hF, eq + 1 + 2 * wU & 3);
		! function(hF, kn) {
			return 1 < Math.abs(hF % i - kn % i) || 1 < Math.abs(ws(hF) - ws(kn))
		}(hF, eq) && 0 === wi[eq << 2] && (wi[eq << 2] = wn)
	}

	function ws(gL) {
		return Math.floor((gL + .5) / i) % j
	}

	function wo(gL, eq) {
		return gL + wP[eq]
	}
	this.wQ = function(qH) {
		var aB, wR, en, wS, wB = bH;
		for (bG.ss.wI(bG.ss.wG(qH)), bS.wV.wW[bS.eT].i = bS.ey = i = wB.pi(12), bS.wV.wW[bS.eT].j = bS.ez = j = wB.pi(12), wP = [-i, -1, i, 1], bS.wf = document.createElement("canvas"), bS.wf.width = bS.ey, bS.wf.height = bS.ez, bS.wb = bS.wf
			.getContext("2d", {
				alpha: !1
			}), bS.wc = bS.wg = null, bS.wc = bS.wb.getImageData(0, 0, bS.ey, bS.ez), bS.wg = bS.wc.data, bA.qi.wh(bS.wg), en = wB.pi(12), wR = wB.pi(5), wS = wY(i * j - 1), aB = 0; aB < en; aB++) ! function(l5, gL, wT, wU) {
			var aB, eq, wB = bH,
				wi = bS.wg,
				wj = gL,
				wk = gL,
				wl = 0,
				wm = 1 + wT,
				wn = 2 - wT;
			for (wi[gL << 2] = wm, aB = 0; aB < l5; aB++) eq = wB.pi(2), gL = wo(gL, eq), wi[gL << 2] === wm ? wl % 2 == 1 && wp(wk, wl + 2 * wU + 3, wn, wU, wi) : wi[gL << 2] = wm, wp(gL, eq, wn, wU, wi), wp(wk, eq, wn, wU, wi), wk = gL,
				wl = eq;
			wo(gL, 0) === wj ? (wp(gL, 0, wn, wU, wi), wp(wj, 0, wn, wU, wi)) : wo(gL, 1) === wj && (wp(gL, 0, wn, wU, wi), wp(wj, 2, wn, wU, wi));
			0 === l5 && (wp(wj, 0, wn, wU, wi), wp(wj, 2, wn, wU, wi))
		}(wB.pi(wR), wB.pi(wS), 1 === wB.pi(1), 1 === wB.pi(1));
		var eu, ew, hf, wt, wu, wv, wi = bS.wg,
			ww = !0,
			wx = bS.wV.wW[bS.eT].wx,
			wy = bS.wV.wW[bS.eT].wy;
		for (ew = 0; ew < j; ew++)
			for (wt = !0, wu = ww, eu = wv = 0; eu < i; eu++) hf = 4 * ew * i + 4 * eu, wv <= eu && 0 < wi[hf] && (wu = 2 === wi[hf], wt) && (wt = !1, wu !== ww) ? (ww = wu, wv = eu + 1, eu = -1) : (wu ? (wi[hf] = wy[0], wi[1 + hf] = wy[1], wi[
				2 + hf] = wy[2]) : (wi[hf] = wx[0], wi[1 + hf] = wx[1], wi[2 + hf] = wx[2]), wi[3 + hf] = 255);
		bS.wb.putImageData(bS.wc, 0, 0), bS.wd = !0, bS.we.dd(), bf.dl = !0
	}
}

function w9() {
	this.wQ = function(wz) {
		for (var wB = bH, size = wB.pi(wz), x0 = 7 + 9 * wB.pi(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wB.pi(x0)));
		return g.join("")
	}
}

function c9() {
	var sK, sL, x1, x2, x3, x4, x5, x6, x7, x8;

	function xA() {
		var xD = aD.xD;
		for (x7 = xD; x7 < aD.ek; x7++) x9();
		for (x7 = aD.hB ? aD.kA : 0; x7 < xD; x7++) {
			if (!xE()) {
				for (var f7 = aD.xI = x7; f7 < xD; f7++) x7 = f7, x9();
				return
			}
			xH(x4 + sK * x3 + bL.du(x3, 2), x5 + sL * x3 + bL.du(x3, 2))
		}
	}

	function xk(player) {
		for (var ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, ew = ih[player]; ew <= ii[player]; ew++)
			for (var eu = ie[player]; eu <= ig[player]; eu++) {
				var eR = ac.xl(eu, ew);
				ac.gN(eR) && (ac.jL(eR) ? ac.gI(eR, player) : ac.xm(eR, player))
			}
	}

	function xj(g, t9, tA) {
		var dt = g[t9];
		g[t9] = g[tA], g[tA] = dt
	}

	function xE() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sK = bL.du(x1 * ay.random(), ay.value(100)), sL = bL.du(x2 * ay.random(), ay.value(100)), xr()) return 1;
			return
		}() || function() {
			var i7, iA, f6, xG, f7, xF;
			for (i7 = bL.du(x1 * ay.random(), ay.value(100)), iA = bL.du(x2 * ay.random(), ay.value(100)), f6 = 40; 1 <= f6; f6--)
				for (xG = x2 - f6; 0 <= xG; xG -= 40)
					for (sL = (xG + iA) % x2, f7 = 40; 1 <= f7; f7--)
						for (xF = x1 - f7; 0 <= xF; xF -= 40)
							if (sK = (xF + i7) % x1, xr()) return 1;
			return
		}()
	}

	function xr() {
		for (var gL, xt, gap = bL.du(x3 - x6, 2), xu = x5 + sL * x3 + gap, xv = x4 + sK * x3 + gap, xs = xu + x6 - 1; xu <= xs; xs--)
			for (xt = xv + x6 - 1; xv <= xt; xt--)
				if (gL = ac.xl(xt, xs), !ac.ei(gL) || ac.jL(gL)) return;
		return 1
	}

	function xH(xF, xG) {
		x9(), xw(xF - 2, xG - 2)
	}

	function x9() {
		ag.mj[x7] = 0, ag.gb[x7] = ag.xh[x7] = 0, ag.gF[x7] = [], ag.gT[x7] = [], ag.gU[x7] = [], ag.fD[x7] = [], ag.ie[x7] = ag.ih[x7] = ag.ig[x7] = ag.ii[x7] = 0
	}

	function xw(xF, xG) {
		var gL, aB, xx, xy;
		for (ag.mj[x7] = 1, ag.ie[x7] = xF + 10, ag.ih[x7] = xG + 10, ag.ii[x7] = ag.ig[x7] = 0, xx = xF; xx < xF + 4; xx++)
			for (xy = xG; xy < xG + 4; xy++)(xF < xx && xx < xF + 3 || xG < xy && xy < xG + 3) && (gL = ac.xl(xx, xy), ac.ei(gL)) && (ag.ie[x7] = Math.min(xx, ag.ie[x7]), ag.ig[x7] = Math.max(xx, ag.ig[x7]), ag.ih[x7] = Math.min(xy, ag.ih[x7]), ag
				.ii[x7] = Math.max(xy, ag.ii[x7]), x8[ag.gb[x7]] = gL, ag.gb[x7]++, ac.xm(gL, x7));
		for (ag.xh[x7] = ag.gb[x7], aB = ag.gb[x7] - 1; 0 <= aB; aB--) ac.xz(x8[aB], x7) ? (ac.gI(x8[aB], x7), ag.gT[x7].push(x8[aB])) : ac.y0(x8[aB]) ? (ac.gI(x8[aB], x7), ag.gU[x7].push(x8[aB])) : ac.y1(x8[aB]) && (ac.gI(x8[aB], x7), ag.fD[x7]
			.push(x8[aB]))
	}
	this.dd = function() {
		if (x8 = new Array(12), x6 = 6, x3 = 10, x1 = bL.du(bS.ey, x3), x2 = bL.du(bS.ez, x3), x4 = bL.du(bS.ey - x3 * x1, 2), x5 = bL.du(bS.ez - x3 * x2, 2), aD.hB)
			for (var aB = 0; aB < aD.kA; aB++) x7 = aB, x9(), ag.mj[x7] = 1;
		(0 === aD.data.spawningType ? xA : 1 === aD.data.spawningType ? (xA(), function() {
			var xJ = aD.xK;
			aD.xL || xJ++;
			if (!(xJ < 3)) {
				for (var data = aD.data, jQ = (aD.hB ? aD.kA : 0) + data.teamPlayerCount[0], nR = aD.xI, xM = new Uint32Array(xJ), xN = new Uint32Array(xJ), xO = new Uint16Array(xJ), xP = new Uint16Array(xJ), el = bg.el, ie = ag.ie, ih =
						ag.ih, ig = ag.ig, ii = ag.ii, fS = bO.fS, fT = bO.fT, aB = jQ; aB < nR; aB++) fS[aB] = ie[aB] + ig[aB] >> 1, fT[aB] = ih[aB] + ii[aB] >> 1;
				for (aB = jQ; aB < nR; aB++) {
					var id = el[aB];
					xM[id] += fS[aB], xN[id] += fT[aB]
				}
				var kX = bg.kX;
				for (aB = 1; aB < xJ; aB++) {
					var gG = Math.max(data.teamPlayerCount[kX[aB]], 1);
					xO[aB] = bL.du(xM[aB], gG), xP[aB] = bL.du(xN[aB], gG)
				}
				var xQ = bg.xQ,
					xR = bg.xR,
					xS = bg.xS,
					fR = bO.fR;
				for (aB = 0; aB < 512; aB++) fR[aB] = aB;
				for (var e7 = 0; e7 < 2 + (4 <= xJ); e7++)
					for (aB = jQ; aB < nR; aB++) {
						for (var hF = aB, xT = fR[hF], xU = 1, f3 = bL.xV(fS[xT] - xO[1], fT[xT] - xP[1]), f6 = 2; f6 < xJ; f6++) {
							var xW = bL.xV(fS[xT] - xO[f6], fT[xT] - xP[f6]);
							xW < f3 && (f3 = xW, xU = f6)
						}
						var xX = el[hF];
						if (xU !== xX) {
							if (2 === e7 && 4 <= xJ) {
								var xY = Math.max((xU + 1) % xJ, 1),
									xZ = bL.xV(fS[xT] - xO[xY], fT[xT] - xP[xY]);
								for (f6 = 1; f6 < xJ; f6++) xW = bL.xV(fS[xT] - xO[f6], fT[xT] - xP[f6]), f3 < xW && xW < xZ && (xZ = xW, xY = f6);
								xY !== xX && bL.xV(xO[xX] - xO[xY], xP[xX] - xP[xY]) < bL.xV(xO[xX] - xO[xU], xP[xX] - xP[xU]) && (xU = xY)
							}
							var xa = kX[xU],
								xb = xR[xa] + (aD.hB ? 0 : xS[xa]),
								kn = xQ[xb],
								xc = fR[kn],
								xd = xR[xa + 1];
							f3 = bL.xV(fS[xc] - xO[xX], fT[xc] - xP[xX]);
							for (var f8 = xb + 1; f8 < xd; f8++) {
								var xe = xQ[f8],
									xf = fR[xe];
								(xW = bL.xV(fS[xf] - xO[xX], fT[xf] - xP[xX])) < f3 && (f3 = xW, kn = xe)
							}
							kn < jQ || nR <= kn || (xc = fR[kn], xM[xX] += fS[xc] - fS[xT], xN[xX] += fT[xc] - fT[xT], xM[xU] += fS[xT] - fS[xc], xN[xU] += fT[xT] - fT[xc], gG = data.teamPlayerCount[kX[xX]], xO[xX] = bL.du(xM[xX], gG),
								xP[xX] = bL.du(xN[xX], gG), gG = data.teamPlayerCount[xa], xO[xU] = bL.du(xM[xU], gG), xP[xU] = bL.du(xN[xU], gG), fR[hF] = xc, fR[kn] = xT)
						}
					}! function() {
						for (var fR = bO.fR, ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, gb = ag.gb, xh = ag.xh, gT = ag.gT, gU = ag.gU, fD = ag.fD, aB = 0; aB < 512; aB++) {
							var xi = fR[aB];
							if (xi !== aB) {
								xj(ie, aB, xi), xj(ih, aB, xi), xj(ig, aB, xi), xj(ii, aB, xi), xj(gb, aB, xi), xj(xh, aB, xi), xj(gT, aB, xi), xj(gU, aB, xi), xj(fD, aB, xi), xk(aB), xk(xi), fR[aB] = aB;
								for (var j = xi, gM = fR[j]; gM !== aB;) gM = fR[j = gM];
								fR[j] = xi
							}
						}
					}()
			}
		}) : function() {
			var xD = aD.xD;
			for (x7 = xD; x7 < aD.ek; x7++) x9();
			for (x7 = aD.hB ? aD.kA : 0; x7 < xD; x7++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							xF = spawningData[2 * x7] + 1,
							spawningData = spawningData[2 * x7 + 1] + 1;
						if (3 < xF && xF < bS.ey - 5 && 3 < spawningData && spawningData < bS.ez - 5 && ac.ei(ac.xl(xF, spawningData)) && function(xF, xG) {
								var gL, xt, xs;
								for (xs = xG; xG - 6 < xs; xs--)
									for (xt = xF; xF - 6 < xt; xt--)
										if (gL = ac.xl(xt, xs), ac.jL(gL)) return;
								return 1
							}(xF + 3, spawningData + 3)) return xH(xF + 1, spawningData + 1), 1;
						return
					}()) {
					if (!xE()) {
						for (var f7 = aD.xI = x7; f7 < xD; f7++) x7 = f7, x9();
						return
					}
					var xF = x4 + sK * x3 + bL.du(x3, 2),
						xG = x5 + sL * x3 + bL.du(x3, 2);
					xH(xF, xG)
				}
		})(), bd.mf[7] = ag.gb[aD.eX]
	}, this.y2 = function(jJ, y3, y4) {
		var aB, xF, xG, gL, sK, sL;
		for (x7 = jJ, aB = 0; aB < 20; aB++)
			for (xF = y3 + aB; y3 - aB <= xF; xF--)
				for (xG = y4 + aB; y4 - aB <= xG; xG--)
					if ((xF === y3 + aB || xF === y3 - aB || xG === y4 + aB || xG === y4 - aB) && 3 < xF && xF < bS.ey - 5 && 3 < xG && xG < bS.ez - 5 && ac.ei(ac.xl(xF, xG)) && function(xF, xG) {
							var gL, xt, xs;
							for (xs = xG; xG - 6 < xs; xs--)
								for (xt = xF; xF - 6 < xt; xt--)
									if (gL = ac.xl(xt, xs), ac.jL(gL) && !ac.yA(x7, gL)) return;
							return 1
						}(xF + 3, xG + 3)) {
						if (0 < ag.gb[x7]) {
							for (sL = sK = gL = void 0, sK = ag.ig[x7]; sK >= ag.ie[x7]; sK--)
								for (sL = ag.ii[x7]; sL >= ag.ih[x7]; sL--) gL = 4 * (sL * bS.ey + sK), ac.y7(x7, gL) && (ac.y8(gL), ag.gb[x7]--);
							x9()
						}
						return xw(xF - 1, xG - 1), !0
					} return !1
	}, this.y9 = function(jJ) {
		x7 = jJ, xE() ? xH(x4 + sK * x3 + bL.du(x3, 2), x5 + sL * x3 + bL.du(x3, 2)) : x9()
	}
}

function yB() {
	at.yC(), uj.setTransform(hy, 0, 0, hy, 0, 0), uj.imageSmoothingEnabled = hy < 3, uj.drawImage(bS.wf, aS.yD(), aS.yE()), bP.yF.ui(), uj.drawImage(yG, aS.yD(), aS.yE()), at.ui(), bN.ui(), af.ui(), (aD.nC ? (bh.ui(), bC) : (aN.ui(), aV.ui(), aR
	.ui(), bC.ui(), aw.ui(), aW.ui(), aS.ui(), aQ.ui(), bh.ui(), aU.ui(), aP.ui(), aM.ui(), aL.ui(), aX.ui(), be.ui(), av)).ui(), t.ui()
}

function yH(yI, i, j) {
	yI.clearRect(0, 0, i, j), yI.fillStyle = bB.ng, yI.fillRect(0, 0, i, j)
}

function yJ(yI, i, j, yK) {
	yI.fillStyle = bB.nj, yI.fillRect(0, 0, i, yK), yI.fillRect(0, 0, yK, j), yI.fillRect(i - yK, 0, yK, j), yI.fillRect(0, j - yK, i, yK)
}

function yL(yI, eu, ew, hj, yK, gL, yM) {
	yI.fillStyle = bB.nj;
	var gL = Math.floor(hj * gL),
		sx = (gL += (gL - yK) % 2, Math.floor((gL - yK) / 2)),
		hj = Math.floor((hj - gL) / 2);
	yI.fillRect(eu + hj, ew + hj + sx, gL, yK), yM && yI.fillRect(eu + hj + sx, ew + hj, yK, gL)
}

function yO() {
	this.dd = function() {
		8 === aD.kS && aN.yP()
	}, this.yQ = function(yR) {
		var elo = aD.data.elo,
			jP = (elo[yR] - elo[1 - yR]) / 10,
			jP = 8 / (1 + Math.pow(2, jP / 32)),
			jP = Math.floor(10 * jP + .5),
			yT = elo[yR] + jP,
			yU = this.yV(yT),
			elo = this.yV(elo[1 - yR] - jP),
			jP = (0 === yR ? aN.yX(yU, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yX(elo, yU, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.yZ) * (2e3 + yT) / 1e3).toFixed(2));
		yR === aD.eX ? aN.ya(640, L(24, [jP]), 40, 0, bB.nj, bB.ng, -1, !1) : aN.ya(640, L(25, [ag.yb[yR], jP]), 40, 0, bB.nj, bB.ng, -1, !1)
	}, this.yV = function(elo) {
		return 16e3 === (elo = bL.hv(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.rq = new yc, this.wi = new yd
}

function yd() {
	this.hZ = !1;
	this.yh = [], this.yi = 100;
	var n9, nA, gap, hj, ye, yg, yj = 0,
		yk = new Array(9),
		yl = [],
		ym = [],
		yn = 0,
		yo = 0,
		yp = 0,
		yq = 0;

	function z2() {
		yk.sort(function(f6, f7) {
			return f7.kF - f6.kF
		});
		for (var qH = "" + yk[0].pJ, aB = 1; aB < 9; aB++) qH += "," + yk[aB].pJ;
		for (aB = 0; aB < 9; aB++) qH += "," + yk[aB].kF;
		bj.eK.vE(120, qH)
	}
	this.dd = function() {
		for (var yr = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yr.length; aB++) {
			var color = 6 === yr[aB] ? bB.o9 : bB.nh;
			this.yh.push(bA.canvas.ys(ab.get(3), yr[aB], color))
		}
		for (aB = 0; aB < aj.rq.yt; aB++) ym.push(aj.rq.yu - aj.rq.yt + aB);
		for (aB = 0; aB < aj.rq.yv; aB++) ym.push(aj.rq.yw + aB);
		var yx = aj.rq.yy(bK.yx);
		for (aB = 0; aB < yx.length; aB++) ym.push(yx[aB]);
		! function() {
			var aB, g = bj.eK.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) yk[aB] = {
					pJ: 1015 + aB,
					kF: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fF = parseInt(g[aB]),
						f8 = (fF = 0 <= fF && fF < aj.rq.yu ? fF : 0, parseInt(g[aB + 9]));
					f8 = 0 <= f8 && f8 < 1e3 ? f8 : 0, yk[aB] = {
						pJ: fF,
						kF: f8
					}
				}
		}()
	}, this.show = function(lP, lQ, z3) {
		var aB;
		if (yn = lP, yo = lQ, yj = z3 || 0, this.hZ = !0, yl = [], 0 === yj)
			for (aB = 0; aB < 9; aB++) yl.push(yk[aB].pJ);
		else {
			var f7 = 49 * yj,
				z3 = f7 - 49;
			for (z3 >= ym.length && (yj = 1, z3 = 0, f7 = 49), aB = z3 = (f7 = Math.min(f7, ym.length)) - 49; aB < f7; aB++) yl.push(ym[aB])
		}
		yl.push(1024);
		z3 = yl.length, hj = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), gap = Math.floor(hj / 3), (yp = 10 * (ye = hj + gap)) > h.i && (yp = h.i, gap = (ye = yp / 10) - (hj = 3 * ye / 4)), yg = bL.du(z3, 10) + !!(z3 % 10), (yq = yg * ye) > h
			.j && (yq = h.j, gap = (ye = yq / yg) - (hj = 3 * ye / 4)), z3 = .5 * gap;
		n9 = Math.min(Math.max(lP - .5 * yp + z3, z3), h.i - yp + z3), nA = Math.min(Math.max(lQ - .5 * yq + z3, z3), h.j - yq + z3)
	}, this.h0 = function(lP, lQ, player) {
		if (!this.hZ) return !1;
		if (this.z5(lP, lQ)) {
			lP = bL.hv(bL.du(lP - n9 + .5 * gap, ye), 0, 9);
			if ((lP += 10 * bL.hv(bL.du(lQ - nA + .5 * gap, ye), 0, 9)) >= yl.length) return aL.rr(), !0;
			lQ = yl[lP];
			if (1024 === lQ) return this.show(yn, yo, yj + 1), !0;
			! function(pJ) {
				for (var aB = 0; aB < 9; aB++) yk[aB].kF = Math.floor(.99 * yk[aB].kF);
				for (aB = 0; aB < 9; aB++)
					if (pJ === yk[aB].pJ) return yk[aB].kF = Math.min(yk[aB].kF + 30, 999), z2();
				yk.splice(5, 0, {
					pJ: pJ,
					kF: Math.max(yk[4].kF, 30)
				}), yk.pop(), z2()
			}(lQ), player === aD.eX ? b8.hD.pI(lQ) : b8.g9.pX(lQ, player)
		}
		return aL.rr(), !0
	}, this.z5 = function(lP, lQ) {
		return !(lP < n9 - .5 * gap || lQ < nA - .5 * gap || n9 + yp - .5 * gap <= lP || nA + yq - .5 * gap <= lQ)
	}, this.ui = function() {
		uj.fillStyle = bB.ng, uj.fillRect(n9 - .5 * gap, nA - .5 * gap, yp, yq);
		for (var hf = .5 * bc.z6, en = (uj.lineWidth = bc.z6, uj.strokeStyle = uj.fillStyle = bB.nj, uj.strokeRect(n9 - .5 * gap + hf, nA - .5 * gap + hf, yp - 2 * hf, yq - 2 * hf), uj.imageSmoothingEnabled = !0, yl.length), aB = 0; aB <
			en; aB++) this.z7(yl[aB], uj, n9 + aB % 10 * ye, nA + bL.du(aB, 10) * ye, hj);
		uj.imageSmoothingEnabled = !1
	}, this.z7 = function(pJ, hp, eu, ew, hj) {
		var eR;
		pJ >= 1024 - aj.rq.yt ? (eR = hj / this.yi, hp.setTransform(eR, 0, 0, eR, eu, ew), hp.drawImage(this.yh[pJ - 1024 + aj.rq.yt], 0, 0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1), hp.font = bA.qa
			.sP(0, .89 * hj), hp.fillText(aj.rq.z8(pJ), eu + .5 * hj, ew + (.35 - bA.qa.z9 + .56) * hj))
	}
}

function yc() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yt = 13, this.yv = this.emojis.length, this.yw = 676, this.yu = 1024, this.zA = this.emojis.indexOf("💀"), this.zB = this.zA + 1, this.zC = this.emojis.indexOf("🥇"), this.zD = this.emojis.indexOf("😊"), this.z8 = function(fF) {
		return fF < this.yw ? String.fromCharCode(55356, 56806 + bL.du(fF, 26), 55356, 56806 + fF % 26) : this.emojis[Math.min(fF - this.yw, this.yv - 1)]
	}, this.yy = function(qH) {
		for (var en = qH.length - 2, g = [], aB = 0; aB < en; aB++) {
			var zE = qH.charCodeAt(aB) - 56806,
				zF = qH.charCodeAt(aB + 2) - 56806;
			0 <= zE && zE < 26 && 0 <= zF && zF < 26 && (g.push(26 * zE + zF), aB += 3)
		}
		return g
	}, this.zG = function(fF) {
		return fF < this.yw
	}, this.zH = function(fF) {
		return fF >= 1024 - this.yt
	}, this.zI = function(fF) {
		return fF >= this.yw && fF < this.yw + this.zB
	}
}

function c3() {
	this.ss = new zJ, this.w6 = new zK, this.w8 = new zL, this.dd = function() {
		this.ss.dd()
	}
}

function zK() {
	this.wL = function(qH) {
		for (var en = qH.length, i = bD, aB = 0; aB < en; aB++) i.a8(16, qH.charCodeAt(aB))
	}
}

function zJ() {
	var zM = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zM[0] = 45, zM[37] = 95, aB = 0; aB < 10; aB++) zM[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zM[aB + 11] = 65 + aB, zM[aB + 38] = 97 + aB
	}, this.su = function(zN) {
		for (var wB = bH, wJ = new Uint8Array(zN), aB = 0; aB < zN; aB++) wJ[aB] = wB.pi(6);
		return wJ
	}, this.st = function(wJ) {
		for (var en = wJ.length, zO = zM, g = [], aB = 0; aB < en; aB++) g.push(String.fromCharCode(zO[wJ[aB]]));
		return g.join("")
	}, this.zP = function(value, zQ) {
		for (var zO = zM, g = [], aB = 0; aB < zQ; aB++) g.push(String.fromCharCode(zO[value >> 6 * (zQ - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var zR, zS, zT;
	zR = [32, 65, 191, 913, 931], zS = [64, 127, 688, 930, 1155], zT = new Array(zR.length + 1);
	for (var aB = 0; aB < zT.length; aB++) {
		zT[aB] = 0;
		for (var f6 = aB - 1; 0 <= f6; f6--) zT[aB] += zS[f6] - zR[f6]
	}

	function zZ(f8) {
		for (var aB = zR.length - 1; 0 <= aB; aB--)
			if (f8 >= zR[aB] && f8 < zS[aB]) return aB;
		return -1
	}
	this.wC = function(qH) {
		return 0 !== (qH = qH.trim()).indexOf("Bot ") && 0 !== qH.indexOf("[Bot] ") && function(qH, zW, zX) {
			var en = (qH = qH.trim()).length;
			if (en < zW || zX < en) return !1;
			for (var f8, zY = 0, aB = 0; aB < en; aB++)
				if (f8 = qH.charCodeAt(aB), zY += 65 <= f8 && f8 <= 90 || 1040 <= f8 && f8 <= 1071 ? 1 : 0, -1 === zZ(f8)) return !1;
			if (3 < zY && zY > Math.floor(en / 2)) return !1;
			return !0
		}(qH, 3, 20)
	}, this.za = function(qH) {
		for (var en = (qH = qH.trim()).length, g = [], aB = 0; aB < en; aB++) {
			var f8, gL = zZ(f8 = qH.charCodeAt(aB));
			g.push(zT[gL] + f8 - zR[gL])
		}
		return g
	}, this.wQ = function(g) {
		for (var f8, f7, qH = "", en = g.length, aB = 0; aB < en; aB++)
			for (f7 = 1; f7 < zT.length; f7++)
				if (g[aB] < zT[f7]) {
					f8 = zR[f7 - 1] + g[aB] - zT[f7 - 1], qH += String.fromCharCode(f8);
					break
				} return qH
	}, this.zb = function(qH) {
		for (var g = this.za(qH), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zc = function(qH) {
		for (var g = new Array(Math.floor(qH.length / 3)), aB = 0; aB < qH.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qH.substring(aB, aB + 3));
		return this.wQ(g)
	}, this.zd = function(qH) {
		for (var fF, g = [qH.length], aB = 0; aB < qH.length; aB++) g[aB] = qH.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qH.length; aB++) aB === qH.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fF = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fF + (fF < 26 ? 65 : 71)), aB++);
		return result
	}, this.ze = function(qH) {
		for (var f8, result = "", aB = 0; aB < qH.length; aB++) 48 <= (f8 = qH.charCodeAt(aB)) && f8 < 58 ? result += String.fromCharCode(f8) : 65 <= f8 && f8 < 75 ? result += "0" + (f8 - 65).toString() : 75 <= f8 && f8 < 91 ? result += (f8 - 65)
			.toString() : 97 <= f8 && f8 < 123 && (result += (f8 - 71).toString());
		return result
	}, this.zf = function(qH) {
		for (var en = qH.length, g = [], aB = 0; aB < en; aB++)(f8 = qH.charCodeAt(aB)) < 58 ? g.push(qH[aB]) : (f8 -= f8 < 91 ? 65 : 71, g.push(String(bL.du(f8, 10))), g.push(String(f8 - 10 * bL.du(f8, 10))));
		var en = g.length - 2,
			f8 = 0,
			wJ = [];
		for (aB = 0; aB < en; aB += 3) wJ[f8++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return wJ
	}, this.zg = function() {
		for (var e7, zh = "", aB = 0; aB < 6; aB++) e7 = 48 + ay.random() % 36, e7 += 58 <= e7 ? 39 : 0, zh += String.fromCharCode(e7);
		return zh
	}
}

function zL() {
	this.za = function(qH, wz, zi) {
		for (var zj = [], en = qH.length, max = 0, aB = 0; aB < en; aB++) {
			var fF = qH.charCodeAt(aB);
			zj.push(fF), max = Math.max(max, fF)
		}
		var x0 = max < 128 ? 7 : 16;
		for (zi.a8(wz, en), zi.a8(1, +(16 == x0)), aB = 0; aB < en; aB++) zi.a8(x0, zj[aB])
	}
}

function dA() {
	this.zk = new zl, this.result = new zm, this.zn = new zo, this.zp = new zq, this.zr = new zs, this.zt = new zu, this.dd = function() {
		this.result.dd()
	}
}

function zo() {
	this.zv = function() {
		for (var en = al.kg, zw = al.kl, zx = [], aB = 0; aB < en; aB++) {
			var gL = zw[aB];
			bA.g9.zy(gL) && zx.push(gL)
		}
		return zx
	}, this.zz = function() {
		if (0 === bg.kX[aD.a00]) return this.a01();
		bh.kB(aD.a00);
		for (var zx = [], en = bO.fI[0], fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = fR[aB];
			bA.g9.zy(gL) && zx.push(gL)
		}
		return zx
	}, this.a01 = function() {
		var gL = ll[0];
		return bA.g9.zy(gL) ? [gL] : []
	}, this.a02 = function(zx) {
		for (var en = zx.length, dt = 0, gb = ag.gb, aB = 0; aB < en; aB++) dt += gb[zx[aB]];
		return dt
	}
}

function zl() {
	function a04() {
		if (2 === aD.a08) return 1;
		aw.a09(), aD.a08 = 2, aD.a0A = aD.a0B
	}

	function a06() {
		bR.zr.a0C(), aX.show(1 === aD.a0D, !1, 2 === aD.a0D), bR.result.a0C(), bR.zt.j3(), bR.zp.j3(), aN.a0E(!0), aN.a0F(247), aN.a0F(956), aN.a0F(957), aV.mV(!0), aW.mV(!0), aw.mV(), bC.a0G(), aD.gw && bf.a0H.a0I(), bf.dl = !0, bb.a0J(), a0.a1
			.setState(0)
	}
	this.a03 = function() {
		a04() || (aD.a05 = 2, a06())
	}, this.a07 = function() {
		a04() || (aD.a05 = 1, a06())
	}
}

function zq() {
	this.j3 = function() {
		var a0R;
		2 === aD.a05 ? (aN.a0K(0, 59), aH.nI(2700)) : aD.kS < 7 ? (a0R = bg.kX[aD.a00], a0R = bg.a0T[a0R], aQ.a0U(L(26, [a0R]), 2, 1, 12), aN.ya(0, L(27, [a0R]), 40, 0, bB.nj, bB.ng, -1, !1), aH.nI(2700)) : 8 === aD.kS ? (aD.a0D ? aN.a0K(aD.a0P,
			2) : aN.a0K(1 - aD.eX, 3), aD.a0Q.yQ(aD.a0P), aH.n4(aD.a0P, 2700, !1, 0)) : 9 === aD.kS ? (aN.a0V(), aH.nI(2700)) : (aN.a0W(aD.a0P), aH.n4(aD.a0P, 2700, !1, 0))
	}
}

function zu() {
	function a0g() {
		var tD;
		return 8 === aD.kS ? 0 : (tD = Math.floor(ag.a0h[aD.eX] / 50), (tD = Math.min(tD, 400)) / 100)
	}

	function a0Y() {
		var tD = a0g();
		0 !== tD && aN.ya(440, L(28, [tD.toFixed(2)]), 40, 0, bB.o1, bB.ng, -1, !1)
	}
	this.j3 = function() {
		var a0Z;
		0 === bR.result.a0X || 0 === bR.result.zx.length || 8 === aD.kS ? bA.g9.gz(aD.eX) && a0Y() : (function(a0Z) {
			7 !== aD.kS && 10 !== aD.kS || 0 !== aD.a0D && a0Z && aN.ya(600, L(32, [a0Z.toFixed(2)]), 40, 0, bB.nj, bB.ng, -1, !1)
		}(a0Z = function() {
			aN.ya(520, L(29), 40, 0, bB.nj, bB.ng, -1, !1);
			for (var zx = bR.result.zx, en = zx.length, gb = ag.gb, g = [], aB = 0; aB < en; aB++) {
				var gL = zx[aB];
				g.push({
					gL: gL,
					dt: gb[gL]
				})
			}
			g.sort((f6, f7) => f7.dt - f6.dt);
			var a0T = ag.yb,
				dt = bR.result.a0i,
				tD = bR.result.a0X,
				qH = "",
				a0Z = 0;
			for (aB = 0; aB < en; aB++) {
				var hX = g[aB].dt * tD / (100 * dt),
					a0k = a0T[g[aB].gL] + ": " + hX.toFixed(2) + "   ";
				g[aB].gL === aD.eX && (a0Z = hX), 2 < aB && 4 !== en ? 3 === aB && (qH += "(" + L(30, [en - 3]) + ")") : qH += a0k
			}
			aN.ya(560, bA.rZ.a0l(qH), 40, 0, bB.o1, bB.ng, -1, !1), a0Z ? aN.ya(580, L(31, [a0Z.toFixed(2) + " + " + a0g().toFixed(2)]), 40, 0, bB.o1, bB.ng, -1, !1) : bA.g9.gz(aD.eX) && a0Y();
			return a0Z
		}()), 2 === aD.a05 || 7 <= aD.kS || function(a0Z) {
			var zx = bR.result.zx,
				en = zx.length,
				a0m = ag.a0m,
				gb = ag.gb,
				a0n = [];
			loop: for (var aB = 0; aB < en; aB++) {
				var gL = zx[aB],
					a0o = bA.rZ.a0p(a0m[gL]);
				if (null !== a0o) {
					for (var a0q = gb[gL], f7 = a0n.length - 1; 0 <= f7; f7--)
						if (a0o === a0n[f7].name) {
							a0n[f7].dt += a0q, a0n[f7].g.push({
								gL: gL,
								dt: a0q
							});
							continue loop
						} a0n.push({
						name: a0o,
						dt: a0q,
						g: [{
							gL: gL,
							dt: a0q
						}]
					})
				}
			}
			if (0 !== a0n.length) {
				a0n.sort((f6, f7) => f7.dt - f6.dt);
				var g = a0n[0].g,
					a0r = (g.sort((f6, f7) => f7.dt - f6.dt), "[" + a0n[0].name + "]"),
					a0s = 512 * bR.result.a0X / 26214400,
					l5 = (aN.ya(0, L(33, [a0r, a0s.toFixed(4)]), 40, 0, bB.nj, bB.ng, -1, !1), g.length),
					wH = a0n[0].dt,
					a0t = 1e4 * a0s;
				for (aB = 0; aB < l5; aB++)
					if (g[aB].gL === aD.eX) {
						aN.ya(600, L(34, [(a0t * g[aB].dt / (10 * wH)).toFixed(2)]), 40, 0, bB.nj, bB.ng, -1, !1), aN.ya(640, L(35, [(.2 * a0Z).toFixed(2), a0r]), 40, 0, bB.nj, bB.ng, -1, !1);
						break
					} aD.gw || aN.ya(720, L(36) + bK.a0u, 736, 0, bB.nj, bB.o7, -1, !1)
			}
		}(a0Z))
	}, this.a0d = function() {
		var a0e, wj;
		aD.kU || (a0e = ag, wj = aD.eX, 0 === a0e.a0f[wj]) || a0e.jD[wj] < 1 || 2 * a0e.pz[wj] > 3 * (a0e.jC[wj] + a0e.jD[wj]) || a0Y()
	}
}

function zm() {
	this.dd = function() {
		this.a0v = 0, this.zx = [], this.a0i = 0, this.a0X = 0
	}, this.a0C = function() {
		var sC;
		aD.kU || (sC = this, 2 === aD.a05 ? sC.zx = bR.zn.zv() : aD.hh ? sC.zx = bR.zn.zz() : sC.zx = bR.zn.a01(), sC.a0v = bi.a0x.a0y(), sC.a0i = Math.max(1, bR.zn.a02(sC.zx)), b8.g9.pg(), 8 === aD.kS ? bR.result.a0X = 0 : sC.a0X = 100 * bR
			.result.a0v * (1 + aD.yZ))
	}
}

function zs() {
	this.a0C = function() {
		if (2 === aD.a05) aD.a0D = 2;
		else {
			if (8 === aD.kS) bA.g9.jX(0) || 0 === ag.mj[0] ? aD.a0P = 1 : bA.g9.jX(1) || 0 === ag.mj[1] ? aD.a0P = 0 : aD.a0P = +(ag.gb[1] > ag.gb[0]);
			else {
				if (aD.hh) {
					var ki = bh.a11();
					if (aD.a00 = ki, bg.kX[ki]) return void(aD.a0D = +(bg.el[aD.eX] === ki))
				}
				aD.a0P = ll[0]
			}
			aD.a0D = +(aD.a0P === aD.eX)
		}
	}
}

function dF() {
	this.id = 0, this.dv = 0, this.vS = null, this.vT = null, this.vU = null, this.va = null, this.a1 = new a12, this.dd = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.vT = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vU = mwIOSdataX, self.va = window.webkit.messageHandlers.iosCommandA, dv = self
					.vU.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var vS;
				try {
					if (!(vS = window.localStorage)) return;
					vS.setItem("tls7", "1"), vS.removeItem("tls7")
				} catch (error) {
					return
				}
				self.vS = vS
			}(this)
	}
}

function a12() {
	this.a16 = function() {
		bj.s2.vn(), bj.s2.vo(), b0.y.close(0, 3255), 0 === a0.id ? a0.vS && a0.vS.clear() : 1 === a0.id ? a0.vT.saveString(199, "") : 2 === a0.id && a0.va.postMessage("clear")
	}, this.a17 = function() {
		2 === a0.id ? a0.va.postMessage("showConsentForm") : 1 === a0.id && a0.vT.setState(7)
	}, this.a18 = function() {
		this.setState(14)
	}, this.hw = function() {
		return 1 === bj.eK.vG(2)
	}, this.a19 = function() {
		bj.eK.vE(102, "")
	}, this.setState = function(a1A) {
		1 === a0.id && 5 <= a0.dv && a0.vT.setState(a1A)
	}, this.a2 = function() {
		var a1B;
		1 === a0.id && 7 <= a0.dv ? a0.vT.setState(5) : ((a1B = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1B.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dv < 17 || a0.vT.saveString(23, document.documentElement.outerHTML)
	}, this.eI = function() {
		0 !== a0.id && (1 === a0.id ? a0.vT.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dv ? a0.va.postMessage("prepare ad 1770251391") : a0.va.postMessage("loadAds 1770251391")))
	}, this.eN = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dv ? a0.va.postMessage("show ad " + dt) : a0.va.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dv < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1C + "' target='_blank'>" +
			bK.a1C + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oO)]))
	}
}

function dU() {
	function a1F(e) {
		lU(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a1I()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.o6)]))
	}

	function a1Q(e) {
		lU(e), t.u(4, 5, new v(L(38), a1M(e), !0))
	}

	function a1M(e) {
		var qH = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qH : 4527 === e ? "Player already in lobby" + qH : 4530 === e ? "Lobby Timeout" + qH : 4528 === e ? "Lobby Kick: Another login detected." + qH : 4540 === e ?
			"You have been kicked." + qH : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qH : 4555 === e ? "Invalid Account Error. Please Try Again." + qH : "Unknown error" + qH
	}

	function lU(e) {
		a1K(e), t.y.z()
	}

	function a1K(e) {
		var a1A = aa.a1J();
		6 === a1A ? b0.y.a1S(e) : bn.a1G ? (t.x(), bn.uC(), b0.y.close(b0.y.a1H, 3256)) : 8 === a1A && aD.a1T(!0)
	}
	this.p = [], this.a1D = function(a1E, e) {
		if (this.p.push(e), 8 === t.sp && 0 === a1E)
			if (4211 === e) a1F(e);
			else {
				if (bn.a1G && (4495 === e || 4480 === e) && b0.y.a1H !== a1E) return void t.a1I();
				if (8 !== aa.a1J() && a1K(), 4480 === e) return bj.s2.vp(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a1M(e), !0))
			}
		else {
			var a1A = aa.a1J();
			if (6 === a1A) {
				if (4211 === e) return void a1F(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a1N(a1E)
			} else {
				if (!bn.a1G) return 8 === a1A ? void(a1E !== b0.y.a1O || aD.kU || 1 !== aD.a08 || aD.gw || aN.a1P(L(39, [e]))) : void 0;
				if (a1E !== b0.y.a1H) return
			}
			a1Q(e)
		}
	}, this.a1R = function(e) {
		this.p.push(e), 8 === aa.a1J() ? aD.kU || 1 !== aD.a08 || aN.a1P(L(39, [e])) : a1Q(e)
	}, this.s = function() {
		this.p.push(3268), lU(3268)
	}
}

function d4() {
	var a1U, a1V, a1W = -15e3,
		a1X = !1;

	function h0(e) {
		a1r() || (a1X = !0, a1s(e, 1), b0.y.a1t(b0.y.a1O), a1u(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1g(e) {
		a1W = bf.eM, a1s(e, 1), b0.y.a1t(b0.y.a1O), 0 < e.touches.length && (a1U = Math.floor(h.k * e.touches[0].clientX), a1V = Math.floor(h.k * e.touches[0].clientY), au.a1g(e) || a1u(a1U, a1V))
	}

	function a1u(eu, ew) {
		t.h0(eu, ew), 0 === aD.a08 ? aa.h0(eu, ew) : bC.a1v(eu, ew) || be.h0(eu, ew) || aX.h0(eu, ew) || aL.a1w(eu, ew) || aP.h0(eu, ew) || 0 <= aM.h0(eu, ew) || aw.h0(eu, ew) || bJ.a1x(eu, ew) || aL.a1y(eu, ew)
	}

	function a1c(e) {
		a1r() || (a1X = !0, a1s(e, 1), a1z(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1h(e) {
		a1W = bf.eM, a1s(e, 1), 0 < e.touches.length && (a1U = Math.floor(h.k * e.touches[0].clientX), a1V = Math.floor(h.k * e.touches[0].clientY), au.a1h(e) || a1z(a1U, a1V))
	}

	function a1z(eu, ew) {
		t.a1c(eu, ew), 0 === aD.a08 ? aa.a1c(eu, ew) : (bT.gu(eu, ew), be.a1c(eu, ew) || (aM.a1c(eu, ew), aL.hZ() ? aL.a1c(eu, ew) : aR.h1 ? aR.a1c(eu) && (bf.dl = !0) : (aV.a1c(eu, ew), aS.nE && aS.a1c(eu, ew) && (bf.dl = !0))))
	}

	function a1e(e) {
		a1r() || (a1s(e, 1), a20(), 0 === aD.a08 ? (aa.click(-1024, -1024), aT.rb()) : (aV.a21(-1024, -1024), aM.a1c(-1024, -1024), aR.a22(), aS.nE = !1))
	}

	function a1d(e) {
		a1r() || (a1s(e, 1), a23(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a1a && (bJ.a1a = !1, e.preventDefault()))
	}

	function click(e) {
		a1r() || a1s(e, 1)
	}

	function a1i(e) {
		a1W = bf.eM, a1s(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a08 ? aS.nE = !1 : au.a24() || (a23(a1U, a1V, !1), bJ.a1a && (bJ.a1a = !1, e.preventDefault()))
	}

	function a1j(e) {
		a1W = bf.eM, a1s(e, 1), a23(a1U, a1V, !1), bJ.a1a && (bJ.a1a = !1, e.preventDefault())
	}

	function a1k(e) {}

	function a1l(e) {}

	function a1m(e) {
		a1r() || a1s(e, 0)
	}

	function a23(eu, ew, a25) {
		a20(), 0 === aD.a08 ? aa.click(eu, ew) : (aV.a21(eu, ew), be.a21(), aR.a22(), aS.nE = !1, aL.click(eu, ew, a25) ? bf.dl = !0 : aM.a1d(eu, ew))
	}

	function a20() {
		t.a20()
	}

	function a1f(e) {
		var eu, ew, deltaY;
		a1r() || (a1s(e, 1), b0.y.a1t(b0.y.a1O), eu = Math.floor(h.k * e.clientX), ew = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1f(eu, ew, deltaY), 0 === aD.a08 ? aa.a1f(eu, ew, deltaY) : aV.a1f(eu, ew,
			deltaY) || (aR.a26(eu, ew) ? aR.a1f(deltaY) && (bf.dl = !0) : aS.a1f(eu, ew, deltaY)))
	}

	function a1n(e) {
		a1s(e, 0)
	}

	function a1s(e, id) {
		0 === id && t.hZ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a1J() && e.preventDefault()
	}

	function a1o(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1r() || 0 < h.sX || (e = e.code) && e.length && (bX.f8(e, 18) ? ar.a28(3) : bX.f8(e, 22) ? ar.a28(0) : bX.f8(e, 20) ? ar.a28(1) : bX.f8(e, 24) ? ar.a28(2) : bX.f8(e, 10) ? aR.a29(31 / 32) : bX.f8(e, 8) ? aR.a29(32 / 31) : bX.f8(e, 6) ? aR
			.a29(7 / 8) : bX.f8(e, 4) ? aR.a29(8 / 7) : bX.f8(e, 14) ? 0 !== aD.a08 && aS.a1f(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.f8(e, 16) ? 0 !== aD.a08 && aS.a1f(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.f8(e, 0) ?
			aD.a08 && bT.gv(0) : bX.f8(e, 2) ? aD.a08 && bT.gv(1) : bX.f8(e, 30) ? aD.a08 && bT.gv(2) : bX.f8(e, 26) ? aD.a08 && bT.hT() : bX.f8(e, 28) && aD.a08 && bT.hY())
	}

	function a1p(e) {
		if (!a1r() && !(0 < h.sX || bf.eM < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2A(1) || "Space" === code && t.a2A(0))) return bn.a1G ? bn.uI.a2A(code) ? void 0 : void("Escape" === code && bJ.fG()) : void(8 !== aa.a1J() && aa.a2A(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fG() : bX.f8(code, 18) ? ar.a2B(3) : bX.f8(code, 22) ? ar.a2B(0) : bX.f8(code, 20) ? ar.a2B(1) : bX.f8(code, 24) ? ar.a2B(2) : bX.f8(code, 12) ? bC.a2C(!aD.nC) : "Space" === code && aD.a08 && (aM.gx && aM.a2D(), aD
					.gw) && bC.a2E(!1))
		}
	}

	function a1q() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a1r() {
		return a1W + 15e3 > bf.eM
	}

	function resize() {
		h.a2G()
	}
	this.a1Y = 0, this.a1Z = "", this.a1a = !1, this.dd = function() {
		a1b.addEventListener("mousedown", h0, {
			passive: !1
		}), a1b.addEventListener("mousemove", a1c, {
			passive: !1
		}), a1b.addEventListener("mouseup", a1d, {
			passive: !1
		}), a1b.addEventListener("click", click, {
			passive: !1
		}), a1b.addEventListener("mouseleave", a1e, {
			passive: !1
		}), a1b.addEventListener("wheel", a1f, {
			passive: !1
		}), a1b.addEventListener("touchstart", a1g, {
			passive: !1
		}), a1b.addEventListener("touchmove", a1h, {
			passive: !1
		}), a1b.addEventListener("touchend", a1i, {
			passive: !1
		}), a1b.addEventListener("touchcancel", a1j, {
			passive: !1
		}), a1b.addEventListener("dragover", a1k), a1b.addEventListener("drop", a1l), a1b.addEventListener("dblclick", a1m), document.addEventListener("contextmenu", a1n), document.addEventListener("keydown", a1o), document.addEventListener(
			"keyup", a1p), document.addEventListener("visibilitychange", a1q), window.addEventListener("resize", resize)
	}, this.a1x = function(eu, ew) {
		return !!bC.h0(eu, ew) || !!(aV.h0(eu, ew) || aS.h0(eu, ew) || aR.h0(eu, ew) || aN.h0(eu, ew))
	}, this.a2F = a1r, this.r2 = function() {
		return !a1X || 0 < a1W
	}, this.fG = function() {
		if (!t.hZ()) return 8 === aa.a1J() ? aD.nC ? void bC.a2C(!1) : be.hZ ? void be.a2D() : void aM.a2D() : void(7 !== aa.a1J() && 6 === aa.a1J() && aZ.a2H());
		t.a2A(2)
	}
}

function bz() {
	this.qa = new a2I, this.qi = new a2J, this.g9 = new a2K, this.rZ = new a2L, this.yI = new a2M, this.a2N = new a2O, this.canvas = new a2P, this.color = new a2Q, this.a2R = new a2S, this.dd = function() {
		this.qa.vm()
	}
}

function a2J() {
	this.wh = function(g) {
		g.fill(0)
	}, this.a2T = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++) g[aB] = []
	}, this.a2U = function(zE, a2V) {
		for (var zF = bO.fN, aB = 0; aB < 3; aB++) zF[aB] = a2V * zE[aB];
		return zF
	}, this.a2W = function(zE, zF, a2X) {
		for (var jP = 0, aB = 0; aB < 3; aB++) jP += Math.abs(zE[aB] - zF[aB]);
		return a2X <= jP
	}, this.a2Y = function(zE, a2Z) {
		for (var aB = 0; aB < 3; aB++) zE[aB] = bL.hv(zE[aB] + a2Z, 0, 255);
		return zE
	}, this.a2a = function(g, t9, tA) {
		tA = tA || g.length - 1;
		for (var a2b = 0, aB = t9 = t9 || 0; aB <= tA; aB++) a2b += g[aB];
		return a2b
	}, this.a2c = function(g, a2d) {
		for (var aB, a2e, en = g.length, a2f = [], f6 = en - 1; 0 <= f6; f6--) {
			for (aB = a2e = 0; aB < en; aB++) a2d(g[aB]) < a2d(g[a2e]) && (a2e = aB);
			en--, a2f.push(g[a2e]), g[a2e] = g[en], g.pop()
		}
		return a2f
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
	}, this.a2g = function(g, fF) {
		for (var en = g.length, gG = 0, aB = 0; aB < en; aB++) gG += g[aB] > fF;
		return gG
	}, this.a2h = function(a2i, a2j, min) {
		for (var en = a2j[0], aB = en - 1; 0 <= aB; aB--) a2i[aB] < min && (a2i[aB] = a2i[--en]);
		a2j[0] = en
	}, this.a2k = function(g, en, value) {
		for (var aB = 0; aB < en; aB++) g[aB] -= value
	}, this.a2l = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2m = function(qH, g, a2n) {
		g.fill(0);
		for (var tD = qH.split(","), en = Math.min(tD.length, g.length), aB = 0; aB < en; aB++) g[aB] = Math.min(parseInt(tD[aB]), a2n)
	}, this.a2o = function(qH, g, rW) {
		g.fill("");
		for (var tD = qH.split('"'), en = Math.min(tD.length, 2 * g.length), hf = 0, aB = 1; aB < en; aB += 2) g[hf++] = tD[aB].slice(0, rW)
	}, this.a2p = function(g, gG) {
		if (0 === gG) g.fill(0);
		else {
			var a2b = this.a2a(g),
				en = g.length;
			if (0 === a2b) g.fill(bL.du(gG, en));
			else
				for (var aB = 0; aB < en; aB++) g[aB] = bL.du(gG * g[aB], a2b);
			if (0 === (a2b = this.a2a(g))) g[1] = gG;
			else
				for (var hf = 0; a2b++ < gG;) g[hf = (hf + 1) % en] && g[hf]++
		}
	}, this.a2q = function(g) {
		if (!g) return 0;
		var en = g.length;
		if (0 === en) return 0;
		for (var fF = g[en - 1], aB = en - 2; 0 <= aB; aB--)
			if (g[aB] !== fF) return aB + 2;
		return 1
	}, this.a2r = function(g) {
		for (var a2b = 0, aB = 0; aB < g.length; aB++) a2b += g[aB].length;
		return a2b
	}, this.a2s = function(a2t) {
		for (var g = [], aB = 0; aB < a2t.length; aB++) g = g.concat(a2t[aB]);
		return g
	}, this.has = function(g, fF) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if (g[aB] === fF) return !0;
		return !1
	}
}

function a2P() {
	this.ys = function(a2u, e8, a2v) {
		var hj = a2u.height,
			a2w = bA.qa.wX(hj, hj),
			hp = bA.qa.getContext(a2w);
		return function(i, hp, a2v) {
			hp.fillStyle = a2v, hp.beginPath(), hp.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hp.fill()
		}(hj, hp, a2v), hp.drawImage(a2u, -e8 * hj, 0), a2w
	}, this.a2y = function(a2z) {
		var hp, hm, hj = a2z.height;
		return a2z.width === hj && (hm = (hp = bA.qa.getContext(a2z, !0)).getImageData(0, 0, hj, hj), bA.a2N.a30(hm.data, hj, hj, .9), hp.putImageData(hm, 0, 0)), a2z
	}
}

function a2Q() {
	this.a31 = function(fF) {
		return [fF >> 12 & 63, fF >> 6 & 63, 63 & fF]
	}, this.a32 = function(fF) {
		for (var g = this.a31(fF), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a33 = function(fF) {
		fF = this.a32(fF);
		return bA.color.nb(fF[0], fF[1], fF[2])
	}, this.a34 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nb = function(e7, tD, f7) {
		return "rgb(" + e7 + "," + tD + "," + f7 + ")"
	}, this.nd = function(e7, tD, f7, f6) {
		return "rgba(" + e7 + "," + tD + "," + f7 + "," + f6.toFixed(3) + ")"
	}, this.r4 = function(f8) {
		for (var g = f8.split("(")[1].split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = parseInt(g[aB]);
		return 4 === g.length ? fM[3] = 255 * parseFloat(g[3].slice(0, -1)) : fM[3] = 255, fM
	}, this.r5 = function(a35, eq) {
		for (var g = a35.slice(a35.indexOf("(") + 1, a35.indexOf(")")).split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = bL.hv(parseInt(g[aB].trim(), 10) + eq, 0, 255);
		return 3 === g.length ? this.nb(fM[0], fM[1], fM[2]) : (a35 = parseFloat(g[3].trim()), this.nd(fM[0], fM[1], fM[2], a35 = 0 === a35 ? .3 : a35))
	}, this.a36 = function(g) {
		for (var qH = "#", aB = 0; aB < 3; aB++) {
			var e7 = g[aB].toString(16);
			qH += 1 === e7.length ? "0" + e7 : e7
		}
		return qH
	}, this.a37 = function(qH) {
		var e7, tD;
		return qH.length < 7 ? bB.na : (e7 = parseInt(qH.slice(1, 3), 16), tD = parseInt(qH.slice(3, 5), 16), qH = parseInt(qH.slice(5, 7), 16), this.nb(e7, tD, qH))
	}
}

function a2M() {
	this.a38 = function(qH, font, maxWidth) {
		if (font && (uj.font = font), uj.measureText(qH).width <= maxWidth) return qH;
		for (var aB = qH.length - 1; 1 <= aB; aB--)
			if (qH = qH.substring(0, aB), uj.measureText(qH + "...").width <= maxWidth) return qH + "...";
		return "..."
	}
}

function a2S() {
	var a3A = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a3B = function(eM) {
		var a3D, qH = new Date(eM.getTime() - 6e4 * eM.getTimezoneOffset()).toUTCString();
		return qH.length < 12 || (qH = qH.substring(5, qH.length), 0 === (eM = eM.getTimezoneOffset())) ? qH : (a3D = (eM < 0 ? "+" : "-") + bL.du(Math.abs(eM), 60), 0 == (eM = Math.abs(eM) % 60) ? qH + a3D : qH + a3D + ":" + (eM < 10 ? "0" :
			"") + eM)
	}, this.a3E = function(eM) {
		var qH = eM.toUTCString();
		return qH.length < 12 ? qH : function(eM) {
			return a3A[eM.getUTCDay()]
		}(eM) + ", " + qH.substring(5, qH.length - 4)
	}
}

function a2I() {
	var a3G = null;
	this.z9 = 0, this.vm = function() {
		var fF = bj.eK.data[5].value;
		a3G = "px " + fF, "Trebuchet MS" !== fF && (a3G += ", Trebuchet MS"), this.z9 = hi(32, 32, ["a", "b", "m"], 200, a3G)
	}, this.wX = function(i, j) {
		var f8 = document.createElement("canvas");
		return f8.width = i, f8.height = j, f8
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(yI, i, j) {
		return yI.getImageData(0, 0, i, j)
	}, this.sP = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a3G : 1 === type ? "bold " + size + a3G : 2 === type ? "lighter " + size + a3G : 3 === type ? "italic " + size + a3G : 4 === type ? "oblique " + size + a3G : 5 === type ? "small-caps " +
			size + a3G : "small-caps bold " + size + a3G
	}, this.textAlign = function(hp, id) {
		hp.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hp, id) {
		hp.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qk = function(e, code, color) {
		color = this.qj(bc.sR) + " solid " + (color || bB.nj);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tF = function(e, eu, ew, i, j) {
		e = e.style;
		e.left = this.tG(eu), e.top = this.tG(ew), e.width = this.tG(i), e.height = this.tG(j)
	}, this.qb = function(fF) {
		return 1 + fF * a0.a1.hw()
	}, this.rt = function(nL, gM) {
		return nL * this.qb(void 0 === gM ? .5 : gM) * h.hx / h.k
	}, this.tE = function(nL, gM) {
		return nL * this.qb(void 0 === gM ? .5 : gM) * h.hx
	}, this.sv = function(nL, gM, a3H) {
		return this.qb(gM) * Math.min(nL * h.hx, a3H * h.i) / h.k
	}, this.qj = function(fF) {
		return fF.toFixed(1) + "px"
	}, this.tG = function(fF) {
		return this.a3J(fF).toFixed(1) + "px"
	}, this.a3J = function(fF) {
		return fF / h.k
	}, this.a3K = function(sf, a3L) {
		for (var qH = "<ul>", en = sf.length, aB = 0; aB < en; aB++) qH += "<li>" + sf[aB] + ": <a href='" + a3L[aB] + "' target='_blank'>" + a3L[aB] + "</a></li>";
		return qH += "</ul>"
	}, this.a3M = function(a3N) {
		return "<a href='" + a3N + "' target='_blank'>" + a3N + "</a>"
	}, this.a3O = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3P = function(e) {
		var dt = e.textContent;
		bA.rZ.a3Q(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qH) {
		return uj.measureText(qH).width
	}, this.t5 = function(a3R) {
		a3R.style.overflowX = "auto", a3R.style.overflowY = "hidden", a3R.style.whiteSpace = "nowrap", a3R.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tI = this.scrollLeft, e.preventDefault())
		}), a3R.addEventListener("scroll", function() {
			this.tI = this.scrollLeft
		})
	}
}

function a2K() {
	this.gy = function(a1A) {
		return 0 === a1A ? 1 === aD.a08 && aD.hB : 1 === a1A ? 1 === aD.a08 && !aD.hB : 2 === aD.a08
	}, this.gz = function(player) {
		return 0 !== ag.mj[player] && 2 !== ag.a3S[player]
	}, this.a3T = function(player) {
		return player === aD.eX && 2 !== ag.a3S[player]
	}, this.ko = function(player, jJ) {
		return player !== jJ && (0 === bg.el[player] || bg.el[player] !== bg.el[jJ])
	}, this.lv = function() {
		return al.kg < 2 ? 0 : aD.hh ? 1 < bh.a3U() : ag.gb[ll[1]]
	}, this.a3V = function() {
		var kg = al.kg;
		if (0 !== kg) {
			if (!aD.hh) return !this.jX(ll[0]);
			for (var el = bg.el, ki = bh.kj(), kl = al.kl, aB = kg - 1; 0 <= aB; aB--) {
				var gL = kl[aB];
				if (el[gL] === ki && !this.jX(gL)) return 1
			}
		}
		return 0
	}, this.a3W = function(player) {
		return player === aD.eX
	}, this.jX = function(player) {
		return player >= aD.kA || 2 === ag.a3S[player]
	}, this.l8 = function(player) {
		return 0 !== ag.mj[player]
	}, this.zy = function(player) {
		return player < aD.kA
	}, this.px = function(a3X, a3Y) {
		return a3X !== a3Y
	}, this.gC = function(player, fF) {
		var min;
		return fF = this.a3Z(player, fF), ag.gp[player] += fF, ag.a3a[player] && (min = Math.min(ag.a3a[player], ag.gp[player]), ag.a3a[player] -= min, ag.gp[player] -= min), fF
	}, this.a3Z = function(player, fF) {
		var a3b = ag.gp[player];
		return fF = Math.min(fF, ag.gb[player] * aD.a3c - a3b), fF = Math.min(fF, aD.a3d - a3b), Math.max(fF, 0)
	}, this.mI = function(player, iN, a3e, a3f) {
		var a3b = ag.gp[player],
			iN = bL.du(a3b * (iN + 1), 1024),
			a3e = bL.du(a3e * a3b, 1024),
			iN = Math.min(iN, a3b - a3e);
		return 10 === aD.kS && (iN = b4.a3h(player, iN)), bO.fK[0] = iN, bO.fK[1] = a3e, a3f <= iN
	}, this.pR = function(player, p9, p8) {
		var player = ag.gp[player],
			a3g = bL.du(64 * player, 1024);
		return p9 = Math.min(p9, player - a3g), p9 = this.a3Z(p8, p9), bO.fK[0] = p9, bO.fK[1] = a3g, 1 <= p9
	}, this.a3i = function(player, p9, p8) {
		var player = ag.gp[player],
			a3g = bL.du(64 * player, 1024);
		return p9 = Math.min(p9, player - a3g), this.a3Z(p8, p9)
	}, this.pT = function(p9, p8) {
		return p9 = this.a3Z(p8, p9), bO.fK[0] = p9, bO.fK[1] = 0, 1 <= p9
	}, this.iM = function(player, a3j) {
		return bL.du(ag.gp[player] * (a3j + 1), 1024)
	}, this.a3k = function(player, a3e) {
		a3e = bL.du(a3e * ag.gp[player], 1024);
		bO.fK[1] = a3e, ag.gp[player] -= a3e
	}, this.gA = function(player, a3l) {
		var fY, fa, f7 = ag.gp[player];
		return a3l <= f7 ? ag.gp[player] -= a3l : (ag.gp[player] = 0, fa = ag.a3a[player] + (fY = 5 * ((f7 = a3l - f7) >> 2)), bd.gD(player, fY - f7, 12), fa <= aD.a3m ? ag.a3a[player] = fa : (ag.a3a[player] = aD.a3m, bd.gD(player, fa - aD.a3m,
			18))), a3l
	}, this.lM = function(player, iN) {
		var gp = ag.gp,
			a3b = gp[player],
			iN = bL.du(a3b * (iN + 1), 1024),
			a3g = Math.max(bL.du(a3b, 10), 1e3);
		return (iN = Math.min(iN, a3b - a3g)) < 0 ? (gp[player] = 0, a3g = Math.min(1e3, a3b + aD.a3m - ag.a3a[player]), bO.fK[1] = a3g, ag.a3a[player] += a3g - a3b, 0) : (bO.fK[1] = a3g, 10 === aD.kS && (iN = b4.a3h(player, iN)), gp[player] -=
			a3g + iN, iN)
	}, this.mK = function(player) {
		ag.gp[player] -= bO.fK[0] + bO.fK[1]
	}, this.py = function(player, jJ) {
		return (jJ = Math.min(jJ, aD.ek)) < aD.ek && 0 === ag.mj[jJ] && (jJ = aD.ek), (bO.ej[0] = jJ) === aD.ek || bs.eg(player, jJ)
	}, this.q1 = function(player, p8) {
		return 0 !== ag.mj[p8] && !bs.eg(player, p8)
	}, this.a3n = function(player, a3o) {
		for (var gL, en = al.kg, a3p = 0, a3q = ll, aB = 0; aB < en; aB++)
			if (gL = a3q[aB], !this.jX(gL)) {
				if (player === gL) return !0;
				if (++a3p > a3o) return !1
			} return !1
	}, this.lh = function(gL) {
		var a3r = aD.hh ? bh.kh() : ag.gb[ll[0]];
		return a3r >= bL.du(gL * aD.ju, 100)
	}, this.a3s = function(fF, min, max) {
		return Math.floor(bL.hv(isNaN(fF) ? 0 : Number(fF), min, max))
	}
}

function a2O() {
	this.a3t = function(canvas, a3u, a3v) {
		var i = canvas.width,
			j = canvas.height,
			f8 = bA.qa.wX(i, j),
			hp = bA.qa.getContext(f8, !0),
			canvas = (hp.drawImage(canvas, 0, 0), hp.getImageData(0, 0, i, j));
		return a3u(canvas.data, i, j, a3v), hp.putImageData(canvas, 0, 0), f8
	}, this.a3w = function(wi, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wi[3 + aB] = wi[aB], wi[aB] = wi[1 + aB] = wi[2 + aB] = 255
			}
	}, this.a3x = function(wi, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wi[1 + aB] > wi[2 + aB] + 10 && (wi[3 + aB] = wi[aB], wi[1 + aB] = wi[2 + aB])
			}
	}, this.a3y = function(wi, i, j, a3v) {
		for (var gap = Math.floor(Math.min(i, j) * a3v), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wi[3 + (aB = 4 * (eu + ew * i))] = 255 - 255 * (wi[1 + aB] - wi[aB]) / (255 - wi[aB]))
	}, this.a3z = function(wi, i, j, a3v) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wi[aB] = a3v[0], wi[1 + aB] = a3v[1], wi[2 + aB] = a3v[2]
			}
	}, this.a40 = function(wi, i, j, a3v) {
		for (var gap = Math.floor(i * a3v), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wi[aB = 4 * (eu + ew * i)] = wi[1 + aB] = wi[2 + aB] = 0)
	}, this.a41 = function(wi, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) 200 < wi[1 + (aB = 4 * (eu + ew * i))] && wi[1 + aB] - 20 > wi[aB] && wi[1 + aB] - 20 > wi[2 + aB] ? wi[aB] + wi[2 + aB] < 40 ? wi[3 + aB] = 0 : (wi[3 + aB] = wi[aB], wi[aB] = 255, wi[1 + aB] = 255, wi[
				2 + aB] = 255) : wi[aB] < 50 && wi[1 + aB] < 50 && wi[2 + aB] < 50 && (wi[aB] + wi[1 + aB] + wi[2 + aB] < 50 ? wi[3 + aB] = 180 : wi[3 + aB] = 180 + Math.floor(75 * (wi[aB] + wi[1 + aB] + wi[2 + aB] - 50) / 100))
	}, this.a42 = function(wi, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) wi[1 + (aB = 4 * (eu + ew * i))] > wi[aB] + 20 && wi[1 + aB] > wi[2 + aB] + 20 && wi[aB] + wi[2] < 40 && (wi[3 + aB] = 255 - wi[1 + aB], wi[aB] = wi[1 + aB] = wi[2 + aB] = wi[aB])
	}, this.a30 = function(wi, i, j, a3v) {
		for (var e7 = i >> 1, eu = 0; eu < i; eu++)
			for (var ew = 0; ew < j; ew++) Math.sqrt((eu - e7) * (eu - e7) + (ew - e7) * (ew - e7)) > a3v * e7 && (wi[4 * (eu + ew * i) + 3] = 0)
	}
}

function a2L() {
	var a43 = {
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
		a44 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.ra = function(uz) {
		return uz.replace(a44, function(match) {
			return a43[match] || match
		})
	}, this.zP = function(fF) {
		var aB, a45, a46, a47, a48;
		if (fF < 0) return "-" + this.zP(Math.abs(fF));
		if (fF < 1e3) return fF.toString();
		for (a45 = Math.floor(Math.log(fF + .5) / Math.log(10)) + 1, a46 = Math.floor((a45 - 1) / 3), a48 = (a47 = fF.toString()).substring(a45 - 3, a45), aB = 1; aB < a46; aB++) a48 = a47.substring(a45 - 3 * (aB + 1), a45 - 3 * aB) + " " + a48;
		return a47.substring(0, a45 - 3 * a46) + " " + a48
	}, this.a49 = function(gL, a45) {
		return gL.toFixed(a45) + "%"
	}, this.a4A = function(fF, a4B) {
		return fF.toFixed(bL.hv(Math.floor((void 0 === a4B ? 3 : a4B) - Math.log10(Math.max(fF, 1))), 0, 8))
	}, this.a4C = function(fF, nL, a45) {
		return (fF * nL).toFixed(a45)
	}, this.a0p = function(username) {
		var er, ec = username.indexOf("[");
		return !(ec < 0) && 1 < (er = username.indexOf("]")) - ec && er - ec <= 8 ? username.substring(ec + 1, er).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0p;
	this.a4D = function(qH) {
		for (var f6 = Math.floor(.5 * qH.length + .5), nR = Math.floor(.5 * (f6 - 1)), aB = 0; aB < nR; aB++)
			for (var f7 = -1; f7 < 2; f7 += 2) {
				var f8 = f6 + f7 * aB;
				if (" " === qH[f8]) return [this.a0l(qH.substring(0, f8)), this.a4E(qH.substring(f8))]
			}
		return [qH.substring(0, f6), qH.substring(f6)]
	}, this.a4E = function(qH) {
		for (var en = qH.length, aB = 0; aB < en; aB++)
			if (" " !== qH[aB]) return qH.substring(aB);
		return qH
	}, this.a0l = function(qH) {
		for (var aB = qH.length - 1; 0 <= aB; aB--)
			if (" " !== qH[aB]) return qH.substring(0, aB + 1);
		return qH
	}, this.a4F = function(qH, a4G) {
		return qH.split("(")[0] + "(🧈 " + a4G.toFixed(2) + ")"
	}, this.startsWith = function(qH, a4H) {
		return qH.substring(0, a4H.length) === a4H
	}, this.a3Q = function(qH, a4H) {
		var en = qH.length;
		return qH.substring(en - a4H.length, en) === a4H
	}, this.a4I = function(g, a4J, a4K) {
		var qH = "",
			en = g.length - 1;
		a4K = a4K || "";
		for (var aB = 0; aB < en; aB++) qH += a4K + g[aB] + a4K + ",", (aB + 1) % a4J == 0 && (qH += "\n");
		return qH += a4K + g[en] + a4K
	}, this.a4L = function(qH, zE, zF) {
		return qH.replace(new RegExp(zE, "g"), zF)
	}
}

function a4M() {
	this.jG = function(player, eZ) {
		aI.y2(player, bM.ev(eZ), bM.ex(eZ)) && (bf.dl = !0), aD.kU && this.j3()
	}, this.j3 = function() {
		aD.hB = !1;
		for (var aB = 0; aB < aD.kA; aB++) 0 !== ag.mj[aB] && 0 === ag.gb[aB] && aI.y9(aB);
		0 !== ag.mj[aD.eX] ? (bd.mf[7] = ag.gb[aD.eX], bd.mf[8] = ag.gp[aD.eX], aR.a4N(), aW.a4O(), aD.gw || aH.n3(ag.ie[aD.eX] - 5, ag.ih[aD.eX] - 5, ag.ig[aD.eX] + 5, ag.ii[aD.eX] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a4P(18), af.a4Q(),
			af.mV(!0), bP.y.a4R(), aL.rr(), aD.pw = null, bb.a4S = !0, bb.a4T(), aD.kU && a0.a1.setState(1)
	}
}

function c1() {
	this.ek = 512, this.a3d = 15e8, this.a4U = 1e9, this.a3m = 5e4, this.a4V = 512, this.g7 = 2, this.eX = 0, this.kA = 0, this.a0B = 0, this.kW = 0, this.a0A = 0, this.xD = 512, this.xI = 512, this.a3c = 150, this.kU = !0, this.gw = 0, this.a08 = 0,
		this.ju = 0, this.nC = !1, this.hB = 0, this.a4W = 0, this.hh = !1, this.xK = 0, this.xL = 0, this.kS = 0, this.yZ = 0, this.pw = null, this.a0Q = new yO, this.a4X = 30, this.a05 = 0, this.a0D = 0, this.a0P = 0, this.a00 = 0, this.data =
		new a4Y, this.a4Z = new a4a, this.a4b = 0, this.a4c = "", this.a4d = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0B = this.kA = this.data.humanCount, this.kU = 1 === this.a0B, this.nC = !1, this.gw = this.data.isReplay, this.kS = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.yZ = this.data.isContest, this.hh = this.kS < 7 || 9 === this.kS, this.kS = 10 === this.kS && this.kU ? 7 : this.kS, this.kS = 8 === this.kS && 2 !== this.kA ? 7 : this.kS, az.dd(),
				this.xK = this.data.numberTeams, this.data.teamPlayerCount ? this.xL = +(0 < this.data.teamPlayerCount[0]) : (this.xL = 0, this.hh && this.kU && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.xK + 1), aD.a4Z.a4e())), this.a4X = this.kA <= 2 ? 30 : this.kA <= 50 ? 40 : 50, this.a4W = this.hB = this.data.selectableSpawn, this.pw = this.hB ? new a4M : null, 1 === l.ds ? this.xD = this.kA : this.xD = this.data
				.playerCount, this.xI = this.xD, this.kW = this.xD - this.kA, this.a0A = 0, this.eX = this.data.selectedPlayer, this.a05 = 0, this.a0D = 0, this.a0P = 0, this.a00 = 0, ay.a4f(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai
				.a4g(), b8.p1.pk = [], bg.dd(), this.a08 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a4h(), ac.de(), ap.a4i(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a4j(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a4k(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a4l.putImageData(a4m, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), fq(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a0Q.dd(), bf.a4j(), aH.n2(), 0 === ag.mj[aD.eX] && aX.show(!1, !0), af.mV(!0), av.dd(), bf.dl = !0, this.gw || this.kU && this.hB || a0.a1.setState(1), this.a4b = 0
		}, this.a1T = function(a4o) {
			b9.pu.a4p.length ? this.a4c = b9.pu.a4p : this.a4c = b9.a4q.za(), b0.y.a4r(), bq.clear(), this.a08 = 0, bf.a4s(), a0.a1.setState(0), aa.setState(0), a4o || bU.eG.show(), 2 === this.a4b ? t.y.a4t() : 1 === this.a4b ? t.u(19) : t.u(5, 5)
		}, this.a4u = function() {
			return this.gw ? aM.gx || !bC.a4v : this.kU && (aM.gx || this.hB)
		}, this.a4w = function() {
			return 1 === this.a08 && !this.hB
		}
}

function a4Y() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4a() {
	this.a4e = function() {
		var a4x = aD.data;
		bA.qi.a2p(a4x.teamPlayerCount, a4x.playerCount), a4x.numberTeams = bA.qi.a2g(a4x.teamPlayerCount, 0), a4x.teamPlayerCount[0] && a4x.teamPlayerCount[7] && (a4x.teamPlayerCount[7] = 0, this.a4e())
	}, this.a4y = function() {
		var a4x = aD.data;
		a4x.mapType < 2 ? bS.a7(bS.a4z(a4x), a4x.mapSeed) : bS.a50(a4x.canvas)
	}, this.a51 = function() {
		var a4x = aD.data;
		a4x.colorsData || (a4x.colorsData = new Uint32Array(1)), a4x.selectableColor && (a4x.colorsData[0] = bj.y.vl()), a4x.selectableName && (a4x.playerNamesData || (a4x.playerNamesData = new Array(1)), a4x.playerNamesData[0] = bj.eK.data[122]
			.value)
	}, this.a52 = function() {
		aD.data = new a4Y, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ek), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a53 = [];
	this.pU = function(player, p8, a54, a55) {
		player === aD.eX || p8 === aD.eX || !a55 && bA.g9.jX(player) || bA.g9.jX(p8) || this.ya(ag.yb[player] + " has supported " + ag.yb[p8] + " with " + bA.rZ.zP(a54) + " ressource" + (1 === a54 ? "." : "s."))
	}, this.ya = function(qH, pJ) {
		qH = {
			eM: aW.a57(),
			qH: qH,
			pJ: pJ
		};
		a53.push(qH), 30 === t.sp && t.a58().ya(qH)
	}, this.clear = function() {
		a53 = [];
		var tD = t.a59(30);
		tD && tD.clear()
	}, this.a5A = function() {
		return a53
	}
}

function dT() {
	this.z6 = 0, this.gap = 0, this.sR = 0, this.qg = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.z6 = .0022 * bA.qa.qb(.5) * h.hx, this.sR = this.z6 / h.k, this.gap = Math.max(Math.floor((a0.a1.hw() ? .0114 : .01296) * h.hx), 2), this.qg = this.gap / h.k
	}
}

function dS() {
	this.a5B = function() {
		return a0.a1.hw() ? 2 : 1
	}
}

function cC() {
	var r9, eu, ew, a5C, a5D, a5E, eM, a5F, a5G, a5H, a5I, gap, zoom, pd, a5J;

	function a5X(lP, lQ, eR) {
		ac.ei(eR) || -1 === (lP = bN.kz.a5g(lP, lQ)) ? aN.a5f(eR) : aN.a5h(lP)
	}

	function a5T(a5F) {
		for (var aB = pd.length - 1; 0 <= aB; aB--)
			if (pd[aB] === a5F) return 1
	}

	function a5R(a5O) {
		var aB, en;
		if (-1 !== a5O)
			for (en = r9.length, aB = 0; aB < en; aB++)
				if (r9[aB].hZ && r9[aB].eu + 1 === a5O % 4 && r9[aB].ew + 1 === a5O >> 2) return aB;
		return -1
	}

	function a5P(lP, lQ) {
		var tD = gap / 2;
		return lP < eu - a5C - 3 * tD || eu + 3 * a5C + 5 * tD < lP || lQ < ew - a5C - 3 * tD || ew + 2 * a5C + 3 * tD < lQ ? -1 : 4 * (lQ < ew - tD ? 0 : lQ < ew + a5C + tD ? 1 : 2) + (lP < eu - tD ? 0 : lP < eu + a5C + tD ? 1 : lP < eu + 2 * a5C +
			3 * tD ? 2 : 3)
	}
	this.a5K = function() {
		var aB, f7, a5N = [bB.o9, bB.oN, bB.nh, bB.oj, bB.oa];
		for (r9 = new Array(10), aB = 0; aB < 10; aB++) r9[aB] = {
			id: aB,
			hZ: !1,
			l7: 0,
			canvas: [],
			eu: 0,
			ew: 0
		};
		for (r9[0].colors = [0, 1, 2, 3], r9[0].eu = 0, r9[0].ew = 0, r9[1].colors = [1, 4], r9[1].eu = 1, r9[1].ew = 0, r9[2].colors = [0, 1], r9[2].eu = -1, r9[2].ew = 0, r9[3].colors = [0], r9[3].eu = 0, r9[3].ew = 0, r9[4].colors = [0, 2],
			r9[4].eu = 1, r9[4].ew = 1, r9[5].colors = [3], r9[5].eu = 0, r9[5].ew = -1, r9[6].id = 20, r9[6].colors = [0], r9[6].eu = 1, r9[6].ew = -1, r9[7].id = 21, r9[7].colors = [0], r9[7].eu = 0, r9[7].ew = 1, r9[8].id = 16, r9[8]
			.colors = [0], r9[8].eu = 0, r9[8].ew = 0, r9[9].id = 10, r9[9].colors = [4], r9[9].eu = 2, r9[9].ew = 0, aB = 0; aB < 10; aB++)
			for (f7 = 0; f7 < r9[aB].colors.length; f7++) r9[aB].canvas.push(function(id, a2v) {
				if (id < 20) return bA.canvas.ys(ab.get(3), id, a2v);
				var a2v = ab.get(3).height,
					a2w = bA.qa.wX(a2v, a2v),
					hp = bA.qa.getContext(a2w);
				20 === id ? hp.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wi.z7(aj.rq.yw + aj.rq.zD, hp, 0, 0, a2v);
				return a2w
			}(r9[aB].id, a5N[r9[aB].colors[f7]]))
	}, this.a5M = function() {
		return r9
	}, this.dd = function() {
		pd = [], eu = ew = eM = 0, a5D = a5E = -1e3, this.resize()
	}, this.resize = function() {
		a5C = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), zoom = a5C / ab.get(3).height, gap = Math.floor(a5C / 3)
	}, this.a1w = function(lP, lQ) {
		return !!this.hZ() && (bf.dl = !0, !!aj.wi.h0(lP, lQ, a5G) || (lP = function(lP, lQ) {
			a5E = a5D = -1e3;
			var a5Q = a5R(a5P(lP, lQ));
			if (-1 === a5Q) return 0;
			if (1 !== r9[a5Q].colors[r9[a5Q].l7])
				if (5 === a5Q) {
					if (! function() {
							var dt = performance.now();
							a5J + 4e3 < dt && (pd = []);
							a5J = dt
						}(), a5T(a5F)) return 1;
					pd.push(a5F), 16 < pd.length && pd.shift()
				} else if (6 === a5Q) {
				for (var aB = pd.length - 1; 0 <= aB; aB--) 0 === ag.mj[pd[aB]] && pd.splice(aB, 1);
				0 < pd.length && (b5.a5U(1, pd, !0) && b8.g9.pc(pd, a5F), pd = [])
			} else if (2 === a5Q) an.hR(a5F) && b8.hD.p7(aR.hH(), a5F);
			else if (3 === a5Q) aD.hB && b8.hD.hE(a5H);
			else if (0 === a5Q)
				if (0 === r9[0].l7) {
					if (aD.a4W && aW.a57() < 350) return 1;
					bV.a5V(4), b8.hD.hK(aR.hH(), a5F)
				} else b1.hL(a5F, aR.hH());
			else if (1 === a5Q) b8.hD.hP(aR.hH(), a5H);
			else if (9 === a5Q) b8.hD.hS(aR.hH());
			else {
				if (7 === a5Q) return bV.a5V(0), aj.wi.show(lP, lQ), 2;
				if (4 === a5Q) b5.a5U(0, [a5F], !0) && b8.g9.pZ(a5F);
				else {
					if (8 !== a5Q) return 0;
					b8.hD.hG(aR.hH(), a5I, a5F)
				}
			}
			return 1
		}(lP, lQ), this.rr(), 2 === lP && (aj.wi.hZ = !0), 0 < lP))
	}, this.a1y = function(lP, lQ) {
		this.hZ() || (a5D = lP, a5E = lQ, eM = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.h3(mouseX),
			coordY = bM.h5(mouseY),
			coord = bM.fB(coordX, coordY),
			coord = bM.ed(coord);
		bM.h6(coordX, coordY) && a5X(mouseX, mouseY, coord)
	}, this.click = function(lP, lQ, a25) {
		var h2 = bM.h3(lP),
			h4 = bM.h5(lQ),
			eZ = bM.fB(h2, h4),
			eR = bM.ed(eZ);
		return !(!bM.h6(h2, h4) || (h2 = (a0.a1.hw() ? .025 : .0144) * h.hx, h4 = performance.now(), Math.abs(lP - a5D) > h2) || Math.abs(lQ - a5E) > h2 || eM + 500 < h4) && (eM = h4, a25 ? (a5X(lP, lQ, eR), !1) : aM.gx || this.hZ() || !bA.g9.gz(
			aD.eX) || aD.gw ? (this.rr(), !1) : (aD.hB ? 0 <= (a5H = br.hC(eZ)) && (r9[3].hZ = !0) : 2 === aD.a08 ? ac.gN(eR) && (a5F = ac.ef(eR), bA.g9.jX(a5F) || (r9[0].hZ = !0, r9[0].l7 = 1, r9[7].hZ = !0)) : (bN.hQ.hR(aD.eX, eZ) && (
			r9[0].hZ = !0, r9[0].l7 = 1, r9[1].hZ = !0, r9[1].l7 = 0, r9[9].hZ = !0, r9[9].l7 = 0), bN.hN.hO(aD.eX, eZ) && (r9[0].hZ = !0, r9[0].l7 = 1, r9[1].hZ = !0, r9[1].l7 = 1, a5H = bO.fP[7]), ac.es(eR) ? (a5I = am.eO.eQ(
			eR)) && (h2 = bM.ed(a5I), r9[8].hZ = !0, a5F = ac.ee(h2) ? aD.ek : ac.ef(h2)) : (ac.y7(aD.eX, eR) && (a5G = aD.eX, r9[0].hZ = !0, r9[0].l7 = 1, r9[7].hZ = !0), -1 !== (h4 = br.hI(eZ)) && (ac.ee(h4 << 2) ? (a5F = aD.ek,
			bs.hJ(aD.eX) ? (r9[0].hZ = !0, r9[0].l7 = 0) : ad.fu(aD.eX) && (r9[0].hZ = !0, r9[0].l7 = 3)) : (a5F = ac.ef(h4 << 2), r9[0].l7 = 1, r9[5].hZ = function(a5F) {
			return !bA.g9.jX(a5F) && !a5T(a5F) && b5.a5U(1, [a5F], !1)
		}(a5F), r9[7].hZ || bA.g9.jX(a5F) || (a5G = a5F, r9[7].hZ = !0), r9[4].hZ = !bA.g9.jX(a5F) && !af.a5b(a5F) && b5.a5U(0, [a5F], !1), r9[6].hZ = function(a5F) {
			if (0 === pd.length) return !1;
			if (performance.now() > a5J + 4e3) return !(pd = []);
			return !a5T(a5F) && ! function(a5F) {
				var aB;
				if (aD.hh)
					for (aB = pd.length - 1; 0 <= aB; aB--)
						if (!bs.eg(a5F, pd[aB])) return 1;
				return
			}(a5F)
		}(a5F), bs.eg(a5F, aD.eX) ? (bs.hM(aD.eX, a5F) ? (r9[0].l7 = 0, r9[0].hZ = !0) : ad.fu(aD.eX) && (r9[0].l7 = 3, r9[0].hZ = !0), r9[0].hZ = this.a5d()) : (r9[2].hZ = !0, an.hR(a5F) ? r9[2].l7 = 0 : r9[2].l7 = 1,
			r9[0].hZ = !0))))), this.a5Y(lP, lQ)))
	}, this.a5Y = function(lP, lQ) {
		return eu = lP - Math.floor(a5C / 2), ew = lQ - Math.floor(a5C / 2), !!this.hZ()
	}, this.a1c = function(lP, lQ) {
		return !!this.hZ() && (aj.wi.hZ ? !aj.wi.z5(lP, lQ) && (aj.wi.hZ = !1, bf.dl = !0) : function(sC, lP, lQ) {
			lP = a5P(lP, lQ);
			if (0 <= a5R(lP)) return !1;
			if ((1 === lP || 6 === lP) && 0 <= a5R(2)) return !1;
			if ((6 === lP || 9 === lP) && 0 <= a5R(10)) return !1;
			return sC.rr(), bf.dl = !0
		}(this, lP, lQ))
	}, this.rr = function() {
		for (var aB = r9.length - 1; 0 <= aB; aB--) r9[aB].hZ = !1, r9[aB].l7 = 0;
		aj.wi.hZ = !1
	}, this.hZ = function() {
		return this.a5d() || aj.wi.hZ
	}, this.a5d = function() {
		for (var en = r9.length, aB = 0; aB < en; aB++)
			if (r9[aB].hZ) return !0;
		return !1
	}, this.ui = function() {
		if (this.hZ())
			if (aj.wi.hZ) aj.wi.ui();
			else {
				var aB, hp = uj,
					f7 = r9,
					en = f7.length,
					a5l = (a5C + gap) / zoom;
				for (hp.imageSmoothingEnabled = !0, hp.setTransform(zoom, 0, 0, zoom, eu, ew), aB = 0; aB < en; aB++) f7[aB].hZ && uj.drawImage(f7[aB].canvas[f7[aB].l7], f7[aB].eu * a5l, f7[aB].ew * a5l);
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a5m, a5n, a5o, a5p = -1;

	function a5q() {
		var a5r, yI = canvas.getContext("2d", {
			alpha: !0
		});
		yI.clearRect(0, 0, j, j), yI.fillStyle = bB.nf, yI.fillRect(0, 0, j, j), 0 === a5n && (yI.fillStyle = bB.nk, yI.fillRect(0, 0, j, j)), yI.fillStyle = bB.nj, yI.fillRect(0, 0, j, 1), yI.fillRect(0, 0, 1, j), yI.fillRect(0, j - 1, j, 1), yI
			.fillRect(j - 1, 0, 1, j), a5r = .9 * j / ab.get(0).width, yI.imageSmoothingEnabled = !0, yI.setTransform(a5r, 0, 0, a5r, Math.floor((j - a5r * ab.get(0).width) / 2), Math.floor((j - a5r * ab.get(0).height) / 2)), yI.drawImage(ab.get(0),
				0, 0), yI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5t(lP, lQ) {
		if (!aM.gx) return lP <= j + bc.gap && lQ >= aR.ew ? 9 : -1;
		if (lP <= 4 * j + bc.gap) {
			if (lQ >= aR.ew) return 0;
			if (lQ >= aR.ew - j - a5o * bc.gap) return 2
		} else if (lP <= 7 * j + bc.gap && lQ >= aR.ew - j - a5o * bc.gap) return 1;
		return -1
	}
	this.gx = !1, this.dd = function() {
		a5n = -1, this.gx = !1, a5o = a0.a1.hw() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5m = bA.qa.sP(1, (a0.a1.hw() ? .5 : .45) * j), a5q()
	}, this.a2D = function() {
		this.gx = !this.gx, this.gx ? (bC.a2C(!1), aD.gw && bC.a4v && bC.a2E(!0), this.a5s()) : (a5n = -1, a5q(), !aD.kU || 1 !== aD.a08 || aD.hB || aD.gw || a0.a1.setState(1)), bf.dl = !0
	}, this.a5s = function() {
		(aD.kU || aD.gw) && 1 === aD.a08 && (aV.mV(!0), aD.hB || setTimeout(function() {
			bb.a0J()
		}, 0), a0.a1.setState(0))
	}, this.h0 = function(lP, lQ) {
		return 0 <= (a5p = a5t(lP, lQ)) || !aM.gx || aD.kU || aD.gw || be.hZ || aM.a2D(), a5p
	}, this.a1c = function(lP, lQ) {
		lP = a5t(lP, lQ);
		lP !== a5n && (a5n = lP, this.gx || a5q(), bf.dl = !0)
	}, this.a1d = function(lP, lQ) {
		lP = a5t(lP, lQ);
		return -1 !== lP && a5p === lP && (this.gx ? aD.nC ? (0 <= lP && bC.a2C(!1), !aD.gw) : (0 === lP ? aD.a1T() : 1 === lP ? this.a2D() : 2 === lP && t.u(1, 0), !0) : 9 === lP && (this.a2D(), !0))
	}, this.ui = function() {
		var i;
		this.gx ? (i = Math.floor(5.5 * j), uj.setTransform(1, 0, 0, 1, bc.gap, aR.ew), uj.fillStyle = bB.nf, uj.fillRect(0, 0, i, j), 0 === a5n ? (uj.fillStyle = bB.nk, uj.fillRect(0, 0, 4 * j, j)) : 1 === a5n && (uj.fillStyle = bB.nk, uj
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), uj.fillStyle = bB.nj, uj.fillRect(0, 0, i, 1), uj.fillRect(0, 0, 1, j), uj.fillRect(4 * j, 0, 1, j), uj.fillRect(0, j - 1, i, 1), uj.fillRect(i - 1, 0, 1, j), uj.font = a5m, bA.qa
			.textBaseline(uj, 1), bA.qa.textAlign(uj, 1), uj.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a5x(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.ew + .3 * j, i), i = 1, uj.setTransform(1, 0, 0, 1, bc.gap, aR.ew - i * a5o * bc.gap - i *
				j), uj.fillStyle = bB.nf, uj.fillRect(0, 0, 4 * j, j), a5n === i + 1 && (uj.fillStyle = bB.nk, uj.fillRect(0, 0, 4 * j, j)), uj.fillStyle = bB.nj, uj.fillRect(0, 0, 4 * j, 1), uj.fillRect(0, 0, 1, j), uj.fillRect(4 * j, 0, 1,
				j), uj.fillRect(0, j - 1, 4 * j, 1), uj.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), uj.setTransform(1, 0, 0, 1, 0, 0)) : uj.drawImage(canvas, bc.gap, aR.ew)
	}, this.qB = function(player) {
		return 0 !== ag.mj[player] && 2 !== aD.a08 && !bA.g9.jX(player)
	}, this.a5x = function(eu, ew, en) {
		uj.setTransform(1, 0, 0, 1, eu, ew), uj.lineWidth = bc.z6, uj.strokeStyle = bB.nj, uj.beginPath(), uj.moveTo(0, 0), uj.lineTo(en, en), uj.moveTo(0, en), uj.lineTo(en, 0), uj.stroke()
	}
}

function cE() {
	var a5z, j, a60, a61, a62, a63, a64, a65, a66;

	function yE() {
		return aR.a6O(aN.a6K()) ? aw.hZ ? __fx.settings.keybindButtons ? aR.ew - 2 * aR.j - 3 * a60 : aR.ew - aR.j - 2 * a60 : __fx.settings.keybindButtons ? aR.ew - aR.j - 2 * a60 : aR.ew - a60 : bC.a6O(aN.a6N()) ? aw.hZ ? bC.yE() - aR.j - 2 * a60 :
			bC.yE() - a60 : aw.hZ ? h.j - aR.j - (bk.a5B() + 1) * a60 : h.j - bk.a5B() * bc.gap
	}

	function a6B(dt, qH, id, gL, a6E, a6F, kn, a6G, a6H, a6I, a6T) {
		var aB, yI, a2w, qS, a6U = void 0 !== a6H,
			i = Math.floor(aQ.measureText(qH, aN.a5m) + 1.5 * a61 + (a6U ? j : 1.5 * a61));
		if (bf.dl = !0, a6T || bq.ya(qH, a6H), i + 2 * a60 + aR.j > h.i && !a6U && 50 !== id && 20 < qH.length) a6B(dt, (a6T = bA.rZ.a4D(qH))[0], id, gL, a6E, a6F, kn, a6G, a6H, a6I, !0), a6B(dt, a6T[1], id, gL, a6E, a6F, kn, a6G, a6H, a6I, !0);
		else if (a6T = i + (50 === id ? a62 : 0), (a2w = document.createElement("canvas")).width = i, a2w.height = j, (yI = a2w.getContext("2d", {
				alpha: !0
			})).font = aN.a5m, bA.qa.textBaseline(yI, 1), bA.qa.textAlign(yI, 0), yI.clearRect(0, 0, i, j), yI.fillStyle = a6F, yI.fillRect(0, 0, i, j), yI.fillStyle = a6E, yI.fillText(qH, Math.floor(1.5 * a61), Math.floor(j / 2)), a6U && (yI
				.imageSmoothingEnabled = !0, aj.wi.z7(a6H, yI, i - j, 0, j)), 0 === (qS = {
				eM: dt,
				qH: qH,
				id: id,
				player: gL,
				canvas: a2w,
				a6E: a6E,
				a6F: a6F,
				i: i,
				a6L: a6T,
				kn: kn,
				a6G: a6G,
				a6H: a6H,
				a6I: a6I
			}).eM || 0 < a5z.length && 0 < a5z[0].eM) a5z.unshift(qS);
		else {
			for (aB = 1; aB < a5z.length; aB++)
				if (0 < a5z[aB].eM) return void a5z.splice(aB, 0, qS);
			a5z.push(qS)
		}
	}

	function a6C(e7, tD, f7) {
		return "rgb(" + e7 + "," + tD + "," + f7 + ")"
	}

	function a6V(id, gG) {
		for (var en = a5z.length, aB = 0; aB < en; aB++) a5z[aB].id === id && gG-- <= 0 && (a5z.splice(aB, 1), aB--, en--)
	}

	function a6W(id, player) {
		for (var f1 = !1, aB = a5z.length - 1; 0 <= aB; aB--) a5z[aB].id !== id || player !== aD.ek && a5z[aB].player !== player || (a5z.splice(aB, 1), f1 = !0);
		return f1
	}

	function a6s(qH) {
		a6B(340, qH, 6, 0, a6C(215, 245, 255), bB.ng, -1, !1)
	}
	this.a67 = "", this.dd = function() {
		var self;
		a65 = 0, a64 = a0.a1.hw() ? 7 : 12, a63 = {
			zw: [0, 0, 0],
			a68: [0, 0, 0],
			eF: [220, 180, 180],
			uh: [0, 0, 0],
			f8: [0, 0, 0]
		}, a5z = [], this.resize(), aD.hB && this.a0K(0, 18), bS.wV.wW[bS.eT].name.length && a6s(L(88, [bS.wV.wW[bS.eT].name])), a6s(L(89, [bS.ey - 2 + "x" + (bS.ez - 2)])), a6s(L(90, [bA.rZ.zP(ap.a6t)])), ap.a6t !== ap.a6u && a6s(L(91, [bA
			.rZ.zP(ap.a6u) + " (" + bA.rZ.a49(100 * ap.a6u / ap.a6t, 1) + ")"
		])), 0 < ap.a6v && a6s(L(66, [bA.rZ.zP(ap.a6v) + " (" + bA.rZ.a49(100 * ap.a6v / ap.a6t, 1) + ")"])), 0 < ap.a6w && a6s(L(92, [bA.rZ.zP(ap.a6w) + " (" + bA.rZ.a49(100 * ap.a6w / ap.a6t, 1) + ")"])), 10 === aD.kS && a6B(120, L(93), 6,
			0, a6C(235, 255, 120), bB.ng, -1, !1), 0 !== (self = this).a67.length && (a6B(200, self.a67, 0, 0, bB.nj, bB.ng, -1, !1), self.a67 = ""), aD.yZ && a6B(340, L(44), 6, 0, a6C(255, 200, 0), bB.ng, -1, !1)
	}, this.resize = function() {
		var a6D, aB;
		if (j = (j = Math.floor((a0.a1.hw() ? .031 : .0249) * h.hx)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5m = bA.qa.sP(1, this.fontSize), a60 = bc.gap, a61 = Math.floor(j / 5), 0 < a5z.length)
			for (a6D = a5z, a5z = [], aB = a6D.length - 1; 0 <= aB; aB--) a6B(a6D[aB].eM, a6D[aB].qH, a6D[aB].id, a6D[aB].player, a6D[aB].a6E, a6D[aB].a6F, a6D[aB].kn, a6D[aB].a6G, a6D[aB].a6H, a6D[aB].a6I, !0);
		this.a6J()
	}, this.a6J = function() {
		a66 = document.createElement("canvas");
		var qH = L(45),
			yI = (a62 = aQ.measureText(qH, this.a5m) + 5 * a61, a66.height = j, a66.width = a62, a66.getContext("2d", {
				alpha: !0
			}));
		yI.font = this.a5m, bA.qa.textBaseline(yI, 1), bA.qa.textAlign(yI, 1), yI.clearRect(0, 0, a62, j), yI.fillStyle = bB.o6, yI.fillRect(0, 0, a62, j), yI.fillStyle = bB.nj, yI.fillText(qH, Math.floor(a62 / 2), Math.floor(j / 2))
	}, this.a6K = function() {
		var en;
		return aw.hZ ? aw.i : 0 === (en = a5z.length) ? 0 : 1 === en ? a5z[0].a6L : a6M(a5z[0].a6L, a5z[1].a6L)
	}, this.a6N = function() {
		var en = a5z.length;
		return aw.hZ ? en ? a6M(aw.i, a5z[0].a6L) : aw.i : 0 === en ? 0 : 1 === en ? a5z[0].a6L : 2 === en ? a6M(a5z[0].a6L, a5z[1].a6L) : a6M(a6M(a5z[0].a6L, a5z[1].a6L), a5z[2].a6L)
	}, this.h0 = function(eu, ew) {
		for (var n9, a6P, a6Q = yE(), aB = a5z.length - 1; 0 <= aB; aB--)
			if ((a6P = a6Q - (aB + 1) * j) <= ew && ew < a6P + j) return 50 === a5z[aB].id ? eu >= h.i - a62 - a60 - a5z[aB].i && (eu >= h.i - a62 - a60 ? b8.g9.pZ(a5z[aB].player) : aH.n4(a5z[aB].player, 800, !1, 0), !0) : eu >= h.i - a5z[aB].i -
				a60 && (736 === a5z[aB].id ? (a6P = a5z[aB].qH.split(" "), window.open(a6P[a6P.length - 1], "_blank")) : a5z[aB].a6G && (a5z[aB].a6I && a5z[aB].a6I.f6 ? (a6P = a5z[aB].a6I.eZ, n9 = bM.ev(a6P) - 10, a6P = bM.ex(a6P) - 10, aH
					.n3(n9, a6P, 19 + n9, 19 + a6P)) : a5z[aB].a6I && a5z[aB].a6I.f7 ? aH.n5(a5z[aB].player, a5z[aB].a6I.n6) : (aH.n4(a5z[aB].player, 800, !1, 0), 0 <= a5z[aB].kn && (n9 = a5z[aB].kn, a5z[aB].kn = a5z[aB].player, a5z[
					aB].player = n9))), !0);
		return !1
	}, this.ya = function(dt, qH, id, gL, a6E, a6F, kn, a6G, a6H, a6I) {
		a6B(dt, qH, id, gL, a6E, a6F, kn, a6G, a6H, a6I)
	}, this.a6S = function(r) {
		a6B(300, r, 252, 0, bB.nj, bB.ng, -1, !1)
	}, this.a4P = function(id) {
		for (var aB = a5z.length - 1; 0 <= aB; aB--) a5z[aB].id === id && (a5z[aB].eM = 1)
	}, this.a0K = function(player, id) {
		0 === id ? (aQ.jG(player, 0), a6V(423, 0), a6B(160, L(46, [ag.yb[player]]), 423, player, "rgb(10,220,10)", bB.ng, -1, !1)) : 1 === id ? (a6W(50, aD.ek), aQ.jG(player, 1), a6B(360, L(47, [ag.yb[player]]), 0, player, bB.oP, bB.ng, -1, !0),
			aH.n4(player, 2700, !1, 0)) : 2 === id ? (aQ.jG(player, 2), a6B(0, L(48), 0, player, "rgb(10,255,255)", bB.ng, -1, !0), aH.n4(player, 2700, !1, 0)) : 3 === id ? (aQ.jG(player, 2), a6B(0, L(49, [ag.yb[player]]), 0, player, bB.nj,
			bB.ng, -1, !0), aH.n4(player, 2700, !1, 0)) : 4 === id ? this.a6X(1, player, player) : 5 === id ? 2 === ag.a3S[player] || bA.g9.jX(aD.eX) || (function(id, me) {
			var aB, a6h = 0,
				en = a5z.length;
			for (aB = 0; aB < en; aB++)
				if (a5z[aB].id === id && me <= ++a6h) return a5z.splice(aB, 1)
		}(1, 5), af.a6Z(player) ? a6B(180, L(50, [ag.yb[player]]), 1, player, a6C(255, 200, 180), bB.ng, -1, !0) : (a6V(573, 0), a6B(180, L(51, [ag.yb[player]]), 573, player, bB.oP, bB.ng, -1, !0))) : 18 === id ? a6B(255, L(52), 18, 0, bB.nj,
			bB.ng, -1, !1) : 21 === id ? a6B(220, L(53), id, 0, bB.nj, bB.ng, -1, !1) : 22 === id ? this.a6X(2, player, player) : 59 === id && a6B(0, L(54), id, 0, bB.oi, bB.ng, 0, !1)
	}, this.a1P = function(r) {
		a6B(200, L(55, [r]), 94, 0, bB.nj, bB.oL, -1, !1)
	}, this.a0W = function(a6a) {
		if (aD.eX === a6a && !aD.kU)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a6B(0, "Your Win Count is now " + __fx.wins.count, 3, a6a, bB.nj, bB.ng, -1, !0);
		ag.gb[a6a] && (aQ.jG(a6a, 2), aD.kA < 100 ? a6B(0, L(49, [ag.yb[a6a]]), 3, a6a, bB.nj, bB.ng, -1, !0) : a6B(0, L(56, [ag.yb[a6a]]), 3, a6a, bB.nj, bB.ng, -1, !0))
	}, this.a5f = function(eR) {
		var qH, a6c, a6b = "(" + bM.ev(eR >> 2) + ", " + bM.ex(eR >> 2) + ")",
			a6G = !1,
			player = 0;
		ac.ei(eR) ? ac.ee(eR) ? a6b = L(57, [a6b]) : (player = ac.ef(eR), aD.gw && !1 === __fx.hoveringTooltip.active && (aD.eX = player), qH = L(58, [bA.yI.a38(ag.a0m[player], bA.qa.sP(0, 10), 150)]) + "   ", qH = (qH += L(59, [bA.rZ.zP(ag.gp[
				player])]) + "   ") + L(60, [bA.rZ.zP(ag.gb[player])]) + "   ", aD.hh && (a6c = bg.a0T[bg.kX[bg.el[player]]], qH += L(61) + ": " + a6c + "   "), bA.g9.jX(player) && (qH += L(62) + ": " + aE.kL[aE.hW[player]] + "   "), a6b =
			qH = (qH += L(63, [player]) + "   ") + L(64, [a6b]), a6G = !0) : a6b = ac.es(eR) ? L(65, [a6b]) + "   #" + ac.eV(eR) : L(66, [a6b]), bf.dl = !0, a6V(55, 0), a6B(220, a6b, 55, player, bB.nj, bB.ng, -1, a6G, void 0, void 0, !0)
	}, this.a5h = function(a6d) {
		var l5 = bN.y,
			player = l5.m4[a6d] >> 3,
			qH = (bf.dl = !0, a6V(55, 0), L(67, [ag.yb[player]]) + "   ");
		a6B(220, qH += L(59, [bA.rZ.zP(l5.a6e[a6d])]), 55, player, bB.nj, bB.ng, -1, !0)
	}, this.pI = function(p4, a6f, pJ) {
		p4 === aD.eX ? a6B(175, " " + L(68, [ag.yb[a6f]]) + ": ", 1001, a6f, a6C(200, 255, 210), bB.ng, -1, !0, pJ) : this.a6g(p4, pJ)
	}, this.a6g = function(p4, pJ) {
		a6V(1e3, 0), a6B(175, ag.yb[p4] + ": ", 1e3, p4, bB.nj, "rgba(5,60,25,0.9)", -1, !0, pJ)
	}, this.a0V = function() {
		var r;
		aD.a0D ? (r = L(69), aQ.a0U(L(70), 2, 1, 12), a6B(0, r, 40, 0, "rgb(10,220,10)", bB.ng, -1, !1)) : (r = L(71), aQ.a0U(L(72), 2, 0, 16), a6B(0, r, 41, 0, bB.nj, bB.ng, -1, !1))
	}, this.yP = function() {
		var gG = ag.yb,
			eq = aD.data;
		a6B(300, gG[0] + " [" + aD.a0Q.yV(eq.elo[0]) + "] vs " + gG[1] + " [" + aD.a0Q.yV(eq.elo[1]) + "]", 65, 0, bB.na, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6i = function(r) {
		a6B(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6j = function(a6k) {
		a6B(0, L(a6k ? 73 : 74), 247, 0, bB.oh, bB.ng, -1, !1)
	}, this.yX = function(yU, yW, a6l) {
		var eq = aD.data,
			gG = ag.yb;
		a6B(0, gG[0] + ": " + aD.a0Q.yV(eq.elo[0]) + " -> " + yU, 66, 0, bB.nj, a6l[0], -1, !1), a6B(0, gG[1] + ": " + aD.a0Q.yV(eq.elo[1]) + " -> " + yW, 66, 1, bB.nj, a6l[1], -1, !1)
	}, this.pa = function(player, id) {
		0 === id ? a6W(50, player) ? (a6B(128, L(75, [ag.yb[player]]), 52, player, a6C(180, 255, 180), bB.ng, -1, !0), af.q9(player, 2, 255)) : a6B(384, L(76, [ag.yb[player]]), 51, player, a6C(210, 210, 255), bB.ng, -1, !0) : a6W(51, player) ? (
			a6B(128, L(77, [ag.yb[player]]), 52, player, bB.nj, "rgba(60,120,10,0.9)", -1, !0), af.q9(player, 2, 255)) : (a6B(384, L(78, [ag.yb[player]]), 50, player, bB.nj, "rgba(90,90,90,0.9)", -1, !0), af.q9(player, 2, 96))
	}, this.pe = function(zw, target) {
		var color = a6C(210, 255, 210);
		1 < zw.length ? a6B(230, L(79, [zw.length, ag.yb[target]]), 66, target, color, bB.ng, -1, !0) : a6B(230, L(80, [ag.yb[zw[0]], ag.yb[target]]), 66, zw[0], color, bB.ng, target, !0)
	}, this.a6m = function(player, target) {
		a6B(230, L(81, [ag.yb[player], ag.yb[target]]), 66, player, bB.nj, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6n = function(id, gG) {
		a6V(id, gG)
	}, this.a0F = function(id, player) {
		a6W(id, void 0 === player ? aD.ek : player)
	}, this.a6o = function(id) {
		for (var aB = a5z.length - 1; 0 <= aB; aB--)
			if (a5z[aB].id === id) return a5z[aB];
		return null
	}, this.pV = function(a54, a6p, player) {
		2 !== ag.a3S[aD.eX] && a6B(200, 1 === a54 ? L(82, [ag.yb[player]]) : L(83, [bA.rZ.zP(a54), ag.yb[player]]), 30, player, "rgb(190,255,190)", bB.ng, -1, !0)
	}, this.a6r = function(a54, player) {
		2 !== ag.a3S[aD.eX] && (a6V(31, 0), 2 === ag.a3S[player] || player >= aD.kA ? a6B(150, 1 === a54 ? L(84, [ag.yb[player]]) : L(85, [ag.yb[player], bA.rZ.zP(a54)]), 31, player, bB.na, "rgba(205,205,205,0.9)", -1, !0) : a6B(150, 1 === a54 ?
			L(86, [ag.yb[player]]) : L(87, [ag.yb[player], bA.rZ.zP(a54)]), 31, player, bB.na, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a0E = function(bu) {
		for (var f8 = bf.k7(), aB = 2; 0 <= aB; aB--) 0 < a63.uh[aB] && (bu || a63.f8[aB] < f8 - 220) && this.a6x(aB)
	}, this.a6x = function(id) {
		var qH, en = a63.uh[id],
			player = a63.zw[id];
		a63.uh[id] = 0, 1 === en ? (0 === id ? qH = L(94, [ag.yb[player], ag.yb[a63.a68[0]]]) : 1 === id ? qH = L(95, [ag.yb[player]]) : 2 === id ? qH = L(96, [ag.yb[player]]) : 3 === id && (qH = L(97, [ag.yb[player]])), a6V(7, 0), a6B(a63.eF[
			id], qH, 7, a63.a68[id], bB.nj, bB.ng, -1, !0)) : (qH = L(0 === id ? 98 : 1 === id ? 99 : 100, [en]), a6V(7, 0), a6B(a63.eF[id], qH, 7, player, bB.nj, bB.ng, -1, !1))
	}, this.a6X = function(id, hF, kn) {
		var f8 = bf.k7(),
			en = a63.uh[id] + 1;
		a63.uh[id]++, a63.zw[id] = hF, a63.a68[id] = kn, 1 === en && (a63.f8[id] = f8), (1 === en && (aD.a0B < 32 || 2 === aD.a08) || 1 < en && (a63.f8[id] < f8 - 140 || 2 === aD.a08)) && this.a6x(id)
	}, this.j3 = function() {
		b2.j3();
		for (var jP = (jP = a5z.length - a64) <= 1 ? 1 : jP * jP, aB = a5z.length - 1; 0 <= aB; aB--) 0 < a5z[aB].eM && (a5z[aB].eM -= jP, a5z[aB].eM <= 0) && (bf.dl = !0, a5z.splice(aB, 1));
		! function() {
			var gG, aB;
			if (128 !== a65 && !(++a65 < 128))
				for (gG = 5, aB = al.kg - 1; 0 <= aB; aB--) 1 === ag.a3S[al.kl[aB]] && 0 < gG-- && a6B(240, L(97, [ag.yb[al.kl[aB]]]), 1, al.kl[aB], bB.na, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0E(!1)
	}, this.ui = function() {
		for (var xG, ew = yE(), aB = a5z.length - 1; 0 <= aB; aB--) xG = ew - (aB + 1) * j, 50 === a5z[aB].id ? (uj.drawImage(a5z[aB].canvas, h.i - a5z[aB].i - a62 - a60, xG), uj.drawImage(a66, h.i - a62 - a60, xG)) : uj.drawImage(a5z[aB].canvas,
			h.i - a5z[aB].i - a60, xG)
	}
}

function cF() {
	var a6z, a70, a71, i, j, font, qH;

	function a76(a77) {
		return a77 < 10 ? "0" + a77 : String(a77)
	}
	this.dd = function() {
		qH = L(101)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .53 : .36) * h.hx), j = Math.floor(.065 * i), font = bA.qa.sP(1, Math.floor(.9 * j)), a71--, this.setTime()
	}, this.j3 = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a72 = dt.getUTCMinutes(), a73 = dt.getUTCSeconds(), a74 = [0, 10, 20, 25, 30, 35, 40, 45, 50], a75 = (a70 = 3600 - 60 * a72 - a73, a70 %= 300, 300), aB = 0; aB < a74.length; aB++)
			if ((60 * a72 + a73 + a70) % 3600 == 60 * a74[aB]) {
				a75 = 0;
				break
			} return a70 += a75, a6z = qH + a76(Math.floor(a70 / 60)) + ":" + a76(a70 % 60), a71 !== (a71 = 60 * a72 + a73) && (i = aQ.measureText(a6z, font), i += Math.floor(.4 * j), !0)
	}, this.ui = function() {
		uj.lineWidth = 1 + Math.floor(j / 15), uj.translate(h.i - j, Math.floor(.5 * (h.j + i))), uj.rotate(-Math.PI / 2), uj.fillStyle = bB.nj, uj.fillRect(0, 0, i, j), uj.strokeStyle = bB.na, uj.strokeRect(0, 0, i, j + 10), uj.fillStyle = bB
			.na, uj.font = font, bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 1), uj.fillText(a6z, Math.floor(i / 2), Math.floor(.59 * j)), uj.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a53, a78, a79, x2, a7A, a7B = 0,
		a7C = 0;

	function a7E(aB) {
		var a7G = !0,
			zE = bB.nj,
			i = (1 === a53[aB].id ? a53[aB].yI.fillStyle = bB.oc : a53[aB].jJ === aD.ek ? a53[aB].yI.fillStyle = bB.nu : (ac.a7H(a53[aB].jJ), a53[aB].yI.fillStyle = bA.color.nd(bO.fM[0], bO.fM[1], bO.fM[2], .87), 400 < bA.qi.a2a(bO.fM, 0, 2) && (
				a7G = !1, zE = bB.na)), a53[aB].canvas.width),
			sw = (a53[aB].yI.clearRect(0, 0, i, x2), a53[aB].yI.fillRect(0, 0, i, x2), a53[aB].yI.fillStyle = zE, ! function(yI, i, x2) {
				yI.fillRect(0, 0, i, 1), yI.fillRect(0, x2 - 1, i, 1), yI.fillRect(0, 0, 1, x2), yI.fillRect(i - 1, 0, 1, x2)
			}(a53[aB].yI, i, x2), a78 + 2 * x2 < i && (a53[aB].yI.fillRect(i - a78 - x2, 0, 1, x2), a53[aB].yI.fillText(ag.yb[a53[aB].jJ], Math.floor((i - a78) / 2), Math.floor(.57 * x2))), 0 !== a53[aB].id ? 0 : x2);
		a53[aB].yI.fillText(bA.rZ.zP(a53[aB].hW), Math.floor(i - a78 / 2 - sw), Math.floor(.57 * x2)),
			function(aB, i, sw, a7G) {
				a53[aB].yI.fillStyle = a7G ? bB.nl : bB.nh;
				a7G = Math.floor(a78 * a53[aB].hW / a53[aB].a7N);
				a53[aB].yI.fillRect(Math.floor(i - a78 - sw), x2 - a7A, a7G, a7A)
			}(aB, i, sw, a7G), 0 === a53[aB].id ? (a7K(aB, i, a7G, zE), function(aB, i, a7G) {
				a53[aB].yI.strokeStyle = a7G ? bB.o1 : bB.oB, a53[aB].yI.fillRect(x2, 0, 1, x2);
				a7G = i - x2;
				a53[aB].yI.beginPath(), a53[aB].yI.moveTo(Math.floor(.3 * x2 + a7G), Math.floor(x2 / 2)), a53[aB].yI.lineTo(Math.floor(x2 - .3 * x2 + 0 + a7G), Math.floor(x2 / 2)), a53[aB].yI.stroke(), a53[aB].yI.beginPath(), a53[aB].yI.moveTo(
					Math.floor(x2 / 2 + a7G), Math.floor(.3 * x2)), a53[aB].yI.lineTo(Math.floor(x2 / 2 + a7G), Math.floor(x2 - .3 * x2 + 0)), a53[aB].yI.stroke()
			}(aB, i, a7G)) : a7K(aB, 2 * x2, a7G, zE)
	}

	function a7K(aB, i, a7G, zE) {
		a53[aB].yI.strokeStyle = a53[aB].a7O ? bB.ns : a7G ? bB.oH : bB.oI, a53[aB].yI.fillStyle = zE, a53[aB].yI.fillRect(i - x2, 0, 1, x2), a53[aB].yI.lineWidth = Math.max(Math.floor(x2 / 12), 3), a53[aB].yI.lineCap = "round";
		a7G = .35;
		i = x2 + 1, a53[aB].yI.beginPath(), a53[aB].yI.moveTo(Math.floor(i - a7G * x2 + 0), Math.floor(a7G * x2)), a53[aB].yI.lineTo(Math.floor(i - x2 + a7G * x2), Math.floor(x2 - a7G * x2 + 0)), a53[aB].yI.stroke(), a53[aB].yI.beginPath(), a53[aB]
			.yI.moveTo(Math.floor(i - x2 + a7G * x2), Math.floor(a7G * x2)), a53[aB].yI.lineTo(Math.floor(i - a7G * x2 + 0), Math.floor(x2 - a7G * x2 + 0)), a53[aB].yI.stroke()
	}

	function a7a(g, a7Y) {
		for (var hW, aB = a7Y - 1; 0 <= aB; aB--) hW = ad.g0(aD.eX, aB), g[aB].hW !== hW && (g[aB].hW = hW, g[aB].a7N = Math.max(hW, g[aB].a7N), g[aB].a7F = !0)
	}

	function a7e(g, a7c) {
		for (var t9 = aD.eX << 3, a6e = bN.y.a6e, m1 = bN.y.m1, a7g = bN.y.a7g, aB = a7c - 1; 0 <= aB; aB--) {
			var a7h = a7g[t9 + aB],
				hW = a6e[a7h];
			g[aB].hW !== hW ? (g[aB].hW = hW, g[aB].a7N = Math.max(hW, g[aB].a7N), g[aB].a7F = !0) : g[aB].a7O || m1[a7h] % 64 != 5 || (g[aB].a7O = !0, g[aB].a7F = !0)
		}
	}

	function a7D(a56) {
		a56.canvas = document.createElement("canvas"), bS.wb.font = a79;
		var i = a78;
		a56.jJ < aD.ek && 0 === a56.id && (i += Math.floor(bS.wb.measureText(ag.yb[a56.jJ] + "000").width)), i += x2, 0 === a56.id && (i += x2), a56.canvas.width = i, a56.canvas.height = x2, a56.yI = a56.canvas.getContext("2d", {
			alpha: !0
		}), a56.yI.font = a79, bA.qa.textBaseline(a56.yI, 1), bA.qa.textAlign(a56.yI, 1)
	}

	function a7U(aB) {
		return aU.a7i() ? h.i - a53[aB].canvas.width - bc.gap : aU.eu
	}

	function a7V(aB) {
		return Math.floor(2 * bc.gap + (aU.a7i() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * x2))
	}
	this.dd = function() {
		a7B = a7C = 0, a53 = [], this.resize()
	}, this.resize = function() {
		a79 = aN.a5m, x2 = aN.fontSize + 5, x2 = Math.floor(1.25 * x2), a0.a1.hw() && (x2 = Math.floor(1.25 * x2)), a7A = Math.floor(.15 * x2), bS.wb.font = a79, a78 = Math.floor(bS.wb.measureText("02 000 000 0000").width);
		for (var aB = a53.length - 1; 0 <= aB; aB--) a7D(a53[aB]), a7E(aB)
	}, this.mV = function() {
		for (var aB = a53.length - 1; 0 <= aB; aB--) a53[aB].a7F && (a53[aB].a7F = !1, a7E(aB))
	}, this.h0 = function(lP, lQ) {
		if (2 !== aD.a08 && 0 !== ag.mj[aD.eX] && !aD.gw && !bA.g9.jX(aD.eX))
			for (var a7P, a7Q, a7R, a7S = a0.a1.hw() ? x2 : 0, a7T = a0.a1.hw() ? Math.floor(.15 * x2) : 0, aB = a53.length - 1; 0 <= aB; aB--)
				if (a7P = a7U(aB), a7Q = a7V(aB), a7R = a53[aB].canvas.width, a7Q - a7T <= lQ && lQ <= a7Q + x2 + a7T) {
					if (a7P - a7S <= lP && lP <= a7P + x2 + a7S) return a53[aB].a7O || (a53[aB].a7F = !0, a53[aB].a7O = !0, 0 === a53[aB].id ? b8.hD.pG(a53[aB].jJ) : b8.hD.pF(a53[aB].jJ)), !0;
					if (0 === a53[aB].id && a7P + a7R - x2 - a7S <= lP && lP <= a7P + a7R + a7S) return bV.a5V(3), b8.hD.hK(aR.hH(), a53[aB].jJ), !0
				} return !1
	}, this.j3 = function() {
		var a2i, a2j, g, a7Y;
		0 === ag.mj[aD.eX] || bA.g9.jX(aD.eX) && !aD.gw || (a2i = a53.slice(0, a7B), a2j = a53.slice(a7B, a7B + a7C), g = a2i, a7Y = ad.fu(aD.eX), function(g, a7Y) {
			if (a7B !== a7Y) return 1;
			for (var aB = a7Y - 1; 0 <= aB; aB--)
				if (g[aB].jJ !== ad.fz(aD.eX, aB)) return 1;
			return
		}(g, a7Y) ? a7a(g = function(g, a7Y) {
			var aB, jJ, f7, hW, a6D = [];
			loop: for (aB = 0; aB < a7Y; aB++) {
				for (jJ = ad.fz(aD.eX, aB), f7 = 0; f7 < g.length; f7++)
					if (g[f7].jJ === jJ) {
						a6D.push(g.splice(f7, 1)[0]);
						continue loop
					} hW = ad.g0(aD.eX, aB), a7D(hW = {
					jJ: jJ,
					hW: hW,
					a7N: hW,
					id: 0,
					a7F: !0,
					a7O: !1,
					canvas: null,
					yI: null
				}), a6D.push(hW)
			}
			return a6D
		}(g, a7Y), a7Y) : a7a(g, a7Y), a2i = g, a2j = function(g) {
			var a7c = bN.y.kE[aD.eX];
			return function(g, a7c) {
				if (a7C !== a7c) return 1;
				for (var t9 = aD.eX << 3, m3 = bN.y.m3, a7g = bN.y.a7g, aB = a7c - 1; 0 <= aB; aB--) {
					var a7h = a7g[t9 + aB];
					if (g[aB].jJ !== m3[a7h]) return 1
				}
				return
			}(g, a7c) ? a7e(g = function(g, a7c) {
				var aB, jJ, f7, a6D = [],
					t9 = aD.eX << 3,
					m3 = bN.y.m3,
					a6e = bN.y.a6e,
					a7g = bN.y.a7g;
				loop: for (aB = 0; aB < a7c; aB++) {
					var a7h = a7g[t9 + aB];
					for (jJ = m3[a7h], f7 = 0; f7 < g.length; f7++)
						if (g[f7].jJ === jJ) {
							a6D.push(g.splice(f7, 1)[0]);
							continue loop
						} a7h = a6e[a7h], a7D(a7h = {
						jJ: jJ,
						hW: a7h,
						a7N: a7h,
						id: 1,
						a7F: !0,
						a7O: !1,
						canvas: null,
						yI: null
					}), a6D.push(a7h)
				}
				return a6D
			}(g, a7c), a7c) : a7e(g, a7c), g
		}(a2j), a7B = a2i.length, a7C = a2j.length, a53 = a2i.concat(a2j))
	}, this.ui = function() {
		if (0 !== ag.mj[aD.eX] && (!bA.g9.jX(aD.eX) || aD.gw))
			for (var aB = a53.length - 1; 0 <= aB; aB--) uj.drawImage(a53[aB].canvas, a7U(aB), a7V(aB))
	}
}

function cH() {
	var a5z, kF, a7j, a7k, j, a5m, fontSize, a7l, a7m, a7n, a7o, canvas, yI, mw, a7p;

	function v0(aB) {
		return L(0 === aB ? 102 : 1 === aB ? 103 : 2 === aB ? 104 : 105)
	}

	function a7w() {
		uj.drawImage(canvas, bc.gap + (aD.hh ? bc.gap + bh.a7x() : 0), a7y + 2 * bc.gap)
	}

	function a7q() {
		canvas.width = a5z[0].width + a7n, canvas.height = j + a7n, (yI = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a5z[0].width + a7n, j + a7n), yI.translate(Math.floor(a7n / 2), Math.floor(a7n / 2)), yI.lineWidth = a7n, yI.fillStyle = 1 === a5z[0].a7v ? bB.no : bB.ng, a7z(), yI.fill(), yI.strokeStyle = 1 === a5z[0].a7v ? bB.na :
			bB.nj, a7z(), yI.stroke(), bA.qa.textAlign(yI, 1), bA.qa.textBaseline(yI, 1), yI.fillStyle = 1 === a5z[0].a7v ? bB.na : bB.nj, yI.font = a5m[0], yI.fillText(v0(a5z[0].a7u), Math.floor(a5z[0].width / 2), Math.floor(.72 * a7l[0] * j)), yI
			.font = a5m[1], yI.fillText(a5z[0].qH, Math.floor(a5z[0].width / 2), Math.floor((a7l[0] + .48 * a7l[1]) * j))
	}

	function a7z() {
		yI.beginPath(), yI.moveTo(a7o, 0), yI.lineTo(a5z[0].width - a7o, 0), yI.lineTo(a5z[0].width, a7o), yI.lineTo(a5z[0].width, j - a7o), yI.lineTo(a5z[0].width - a7o, j), yI.lineTo(a7o, j), yI.lineTo(0, j - a7o), yI.lineTo(0, a7o), yI.closePath()
	}
	this.dd = function() {
		kF = 4, a7j = a7k = mw = 0, a5z = [], a5m = new Array(2), fontSize = new Array(2), (a7l = new Array(2))[0] = .3, a7l[1] = .7, a7m = new Array(4), canvas = document.createElement("canvas"), a7p = bf.eM + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hw() ? .0725 : .058) * h.hx), fontSize[0] = Math.floor(.85 * a7l[0] * j), fontSize[1] = Math.floor(.85 * a7l[1] * j), a5m[0] = bA.qa.sP(1, fontSize[0]), a5m[1] = bA.qa.sP(1, fontSize[1]), aB = a7m.length -
			1; 0 <= aB; aB--) a7m[aB] = this.measureText(v0(aB) + "000", a5m[0]);
		if (a7n = Math.floor(1 + .05 * j), a7o = Math.floor(.2 * j), 0 < a5z.length) {
			for (aB = a5z.length - 1; 0 <= aB; aB--) i = this.measureText(a5z[aB].qH + "00", a5m[1]), a5z[aB].width = i < a7m[aB] ? a7m[aB] : i;
			a7q()
		}
	}, this.j3 = function() {
		0 !== kF && (4 === kF ? bf.eM > a7p && (kF = 0, 1 === aD.a08) && aQ.a0U(bS.wV.wW[bS.eT].name, 3, 1, 9) : (1 === kF ? (0 === a7j && (a7q(), a7j = 1e-4), 1 <= (a7j += .002 * (bf.eM - mw)) && (a7k = 0, kF = 2, a7j = 1), bf.dl = !0) : 2 ===
			kF ? ((a7k += (bf.eM - mw) / 1e3) > a5z[0].eF || 1 < a7k && 1 < a5z.length) && (kF = 3) : 3 === kF && ((a7j -= .002 * (bf.eM - mw)) <= 0 && (a7j = 0, a5z.shift(), kF = 0 < a5z.length ? 1 : 0), bf.dl = !0), mw = bf.eM))
	}, this.measureText = function(qH, a5m) {
		return uj.font = a5m, Math.floor(uj.measureText(qH).width)
	}, this.jG = function(a7t, aB) {
		this.a0U(ag.yb[a7t], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0U = function(qH, a7u, a7v, eF) {
		var i;
		qH.length && (i = (i = this.measureText(qH + "00", a5m[1])) < a7m[a7u] ? a7m[a7u] : i, a5z.push({
			qH: qH,
			width: i,
			a7u: a7u,
			a7v: a7v,
			eF: eF
		}), 0 === kF) && (a7j = 0, kF = 1, mw = bf.eM)
	}, this.ui = function() {
		0 !== kF && 0 !== a7j && (a7j < 1 ? (uj.globalAlpha = a7j, a7w(), uj.globalAlpha = 1) : a7w())
	}
}

function cq() {
	var j, canvas, yI, a80, a81, a82, a83, a7F, a84, a85, a86, a87, a6k = !1,
		a2w = (this.hZ = !1, this.i = 0, new Array(2)),
		a88 = 0;

	function mW() {
		var i = aw.i,
			l5 = (a7F = !1, yH(yI, i, j), Math.floor(i / 2));
		1 === a80 ? (yI.fillStyle = bB.o3, yI.fillRect(l5, 0, l5, j)) : -1 === a80 && (yI.fillStyle = bB.oJ, yI.fillRect(0, 0, l5, j)), yJ(yI, i, j, 2);
		var l5 = (l5 = Math.floor(.25 * j)) < 2 ? 2 : l5,
			a6t = (yI.fillStyle = bB.np, Math.floor((j - 4) * a81[1] / a82[1]));
		0 < a6t && yI.fillRect(2, j - 2 - a6t, l5, a6t), 0 < (a6t = Math.floor((j - 4) * a81[0] / a82[0])) && yI.fillRect(i - 2 - l5, j - 2 - a6t, l5, a6t);
		l5 = (l5 = Math.floor(j / 8)) < 2 ? 2 : l5, yL(yI, Math.floor(.4 * j), 0, j, l5, .5, !1), yL(yI, Math.floor(i - 1.4 * j), 0, j, l5, .5, !0), a6t = 1.1 * j / a2w[0].width;
		yI.imageSmoothingEnabled = !0, yI.setTransform(a6t, 0, 0, a6t, (i - a6t * a2w[0].width) / 2, -.05 * j), yI.drawImage(a2w[+a6k], 0, 0), yI.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8D() {
		a87 = -1, a6k = ah.a8E(), aN.a4P(257), aN.a6j(a6k), aw.hZ = !0, a7F = !0, a84 = 360;
		for (var fF, dt = 0, aB = al.kg - 1; 0 <= aB; aB--) bA.g9.jX(al.kl[aB]) || (dt += ag.gb[al.kl[aB]]);
		a6k ? a82[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hh ? 9 === aD.kS && 8 === bg.kX[bh.kj()] ? a82[0] = Math.max(dt, 1) : (fF = bL.du(100 * bh.kh(), aD.ju), fF = bL.hv(200 - 2 * fF, 40, 100), fF = bL.du(fF * dt, 100), a82[0] = Math.max(fF,
			1)) : a82[0] = Math.max(bL.du(3 * dt, 5), 1), a82[1] = Math.max(dt - a82[0], 1)
	}

	function a89() {
		a86 = bf.k7(), a7F = !0, a84 = a80 = 0, a83 = [], aw.hZ = !1, aN.a0F(247), a81[0] = a81[1] = 0, aN.a4P(673)
	}

	function yE() {
		return aR.a6O(aN.a6K()) ? __fx.settings.keybindButtons ? aR.ew - 2 * (j + bc.gap) : aR.ew - j - bc.gap : bC.a6O(aN.a6N()) ? bC.yE() - j - bc.gap : h.j - j - bk.a5B() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a2w[aB] = bA.canvas.ys(ab.get(3), 8 - aB, bB.ou), a2w[aB] = bA.canvas.a2y(a2w[aB])
	}, this.dd = function() {
		a86 = -1e4, a85 = a88 = 0, a87 = -1, this.hZ = !1, a7F = a6k = !1, a81 = [a80 = a84 = 0, 0], a82 = [1, 1], a83 = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, yI = canvas.getContext("2d", {
			alpha: !0
		}), mW()
	}, this.mV = function() {
		a7F && mW()
	}, this.h0 = function(eu, ew) {
		return !!this.hZ && !(eu < h.i - this.i - bc.gap || ew < yE() || (aD.gw || this.ha(aD.eX) && (aM.gx && aM.a2D(), b8.hD.hb(eu > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j3 = function() {
		0 < a85 ? 0 === --a85 && a89() : this.hZ ? 180 == --a84 && 3 * a81[0] < a82[0] ? a89() : a81[0] >= a82[0] ? a6k ? bR.zk.a03() : bR.zk.a07() : a81[1] >= a82[1] ? a85 = 4 : a84 <= 0 && a89() : ! function() {
			var a8G = bf.k7();
			if (a8G % 40 == 14) {
				if (a88) return !(a8G < a88) && !(a8G < a86 + 535) && (a88 = a8G + 1071, bA.g9.a3V()) ? (a8D(), 1) : 0;
				(1 === al.kg || (aD.hh ? bh.kh() : ag.gb[ll[0]]) >= bL.du(96 * aD.ju, 100)) && (a88 = a8G + 535)
			}
			return
		}() && 0 <= a87 && (aN.ya(250, L(106, [ag.yb[a87]]), 673, a87, bB.nj, bB.ng, -1, !0), a8D())
	}, this.a09 = function() {
		this.hZ && a81[0] < a82[0] && a89()
	}, this.qA = function(player, a8H) {
		var a8I = L(a8H ? 107 : 108, [ag.yb[player]]),
			a8I = (aN.ya(450, a8I, 257, player, a8H ? bB.o1 : bB.oG, bB.ng, -1, !0), a83.push(player), a7F = !0, aD.kU ? Math.max(a82[0], a82[1]) : ag.gb[player]),
			a8I = Math.max(a8I, 1);
		a8H ? a81[0] += a8I : a81[1] += a8I, player === aD.eX && (a80 = a8H ? 1 : -1)
	}, this.ui = function() {
		var ew;
		this.hZ && (ew = yE(), uj.drawImage(canvas, h.i - this.i - bc.gap, ew))
	}, this.hc = function(player) {
		return !(!aD.kU && bf.k7() < a86 + 140 || 0 !== a84 || !bA.g9.gy(1) || !bA.g9.gz(player) || 10 <= jv[player] && !bA.g9.a3n(player, 9))
	}, this.ha = function(gL) {
		if (!bA.g9.gy(1)) return !1;
		if (!bA.g9.gz(gL)) return !1;
		if (!this.hZ) return !1;
		for (var aB = a83.length - 1; 0 <= aB; aB--)
			if (a83[aB] === gL) return !1;
		return !0
	}, this.hY = function(player) {
		a87 = player
	}
}

function cI() {
	var i, eu, a8J, canvas, yI, hZ, iN, a4G, a5m, a7F, a8K = 11 / 12;

	function a8M() {
		var a7M = Math.floor(iN * (i - 2 * a8J)),
			a8P = 1 + Math.floor(.0625 * aR.j),
			a8Q = 1 + Math.floor(.3 * aR.j),
			a8R = Math.floor(.55 * aR.j);
		yI.clearRect(0, 0, i, aR.j), yI.fillStyle = bB.nf, yI.fillRect(0, 0, a8J, aR.j), yI.fillRect(a8J + a7M, 0, i - a8J - a7M, aR.j), yI.fillStyle = iN < 1 / 3 ? "rgba(" + Math.floor(3 * iN * 130) + ",130,0,0.85)" : iN < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iN - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iN - 2 / 3) * 130) + ",0.85)", yI.fillRect(a8J, 0, a7M, aR.j), yI.fillStyle = bB.nj, yI.fillRect(0, 0, i, 1), yI.fillRect(0, aR.j - 1, i, 1), yI
			.fillRect(0, 0, 1, aR.j), yI.fillRect(a8J, 0, 1, aR.j), yI.fillRect(a8J + a7M, 0, 1, aR.j), yI.fillRect(i - a8J, 0, 1, aR.j), yI.fillRect(i - 1, 0, 1, aR.j), yI.fillRect(Math.floor(.25 * aR.j) + a8Q, Math.floor((aR.j - a8P) / 2), aR.j -
				2 * a8Q, a8P), yI.fillRect(Math.floor(i - 1.25 * aR.j) + a8Q, Math.floor((aR.j - a8P) / 2), aR.j - 2 * a8Q - a8Q % 2, a8P), yI.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8P) / 2), a8Q, a8P, aR.j - 2 * a8Q - a8Q % 2),
			a4G = bA.g9.iM(aD.eX, aR.hH()), yI.fillText(bA.rZ.zP(a4G) + " (" + bA.rZ.a49(100 * iN, +(iN < .1)) + ")", Math.floor(.5 * i), a8R)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iN = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a29(arg1);

	function a8W(a2V) {
		return !(1 < a2V && 1 === iN || (1 < a2V && a2V * iN - iN < 1 / 1024 ? a2V = (iN + 1 / 1024) / iN : a2V < 1 && iN - a2V * iN < 1 / 1024 && (a2V = (iN - 1 / 1024) / iN), iN = bL.hv(iN * a2V, 1 / 1024, 1), a8M(), 0))
	}

	function a8X(lP) {
		return iN !== (iN = bL.hv((lP - eu - a8J) / (i - 2 * a8J), 1 / 1024, 1)) && (a8M(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8M(), bf.dl = !0
	}, this.ew = 0, this.h1 = !1, this.dd = function() {
		hZ = !aD.hB && !aD.gw, a7F = !1, iN = .5, a4G = 0, this.h1 = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hw() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hx), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.hw() ? .65 : .389) * h.hx), i += 12 - i % 12, this.j = Math.floor(i / 12)), a8J = Math.floor(3 * this.j / 2), a5m =
			bA.qa.sP(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, uj), canvas.height = this.j, (yI = canvas.getContext("2d", {
				alpha: !0
			})).font = a5m, bA.qa.textBaseline(yI, 1), bA.qa.textAlign(yI, 1), this.a8L(), a8M()
	}, this.a8L = function() {
		eu = a0.a1.hw() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.ew = h.j - this.j - bk.a5B() * bc.gap
	}, this.mV = function() {
		a7F && (a7F = !1, a8M())
	}, this.hZ = function() {
		return !(!hZ || aM.gx && eu < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6O = function(a8S) {
		return !!this.hZ() && eu + i > h.i - a8S - bc.gap
	}, this.a4N = function() {
		hZ = !aD.gw
	}, this.a89 = function() {
		hZ = !1
	}, this.hH = function() {
		return bL.hv(Math.floor(1024 * iN + .5) - 1, 0, 1023)
	}, this.a26 = function(lP, lQ) {
		return this.hZ() && eu < lP && lP < eu + i && lQ > this.ew
	}, this.h0 = function(lP, lQ) {
		if (!this.hZ()) return !1;
		if (!(__fx.settings.keybindButtons && lQ > this.ew - Math.floor(bc.gap / 4) - this.j && lQ < this.ew - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lP - eu))) {
			if (!aR.a26(lP, lQ)) return !1;
			aS.nE = !1, ! function(sC, lP, lQ) {
				if (function(lP, lQ) {
						return eu < lP && lP < eu + a8J && lQ > aR.ew
					}(lP, lQ)) return a8W(a8K);
				if (function(lP, lQ) {
						return eu + i - a8J < lP && lP < eu + i && lQ > aR.ew
					}(lP, lQ)) return a8W(1 / a8K);
				return sC.h1 = !0, a8X(lP)
			}(this, lP, lQ) || (bf.dl = !0)
		}
		return !0
	}, this.a29 = function(nL) {
		0 !== aD.a08 && this.hZ() && a8W(nL) && (bf.dl = !0)
	}, this.a1f = function(deltaY) {
		var nL;
		return !(0 === deltaY || !this.hZ()) && a8W(nL = 0 < deltaY ? (nL = 400 / (400 + deltaY)) < a8K ? a8K : nL : 1 / a8K < (nL = (400 - deltaY) / 400) ? 1 / a8K : nL)
	}, this.a1c = function(lP) {
		return !!this.h1 && a8X(lP)
	}, this.a22 = function() {
		this.h1 = !1
	}, this.j3 = function() {
		this.hZ() && a4G !== bA.g9.iM(aD.eX, this.hH()) && (a7F = !0)
	}, this.ui = function() {
		this.hZ() && (uj.drawImage(canvas, eu, this.ew), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(uj, eu, this.ew)
	}
}

function d0() {
	var canvas, yI, a8Y, font, a8Z = 0,
		a8a = !1,
		a8b = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8c = 5;

	function a8j() {
		if (a8a) {
			var aB, en = a8b.length,
				a8R = Math.floor(.5 * a8Y.j),
				j = en * a8R,
				eu = Math.floor(Math.floor(a8Y.eu) + .3 * a8Y.i - .5),
				ew = Math.floor(Math.floor(a8Y.ew) - j),
				i = Math.floor(.4 * a8Y.i + 2.5);
			for (uj.fillStyle = bB.nf, uj.fillRect(eu, ew, i, j), uj.fillStyle = bB.o8, uj.fillRect(eu, ew + a8c * a8R, i, a8R), uj.fillStyle = bB.nj, uj.fillRect(eu, ew, 2, j), uj.fillRect(eu, ew, i, 2), uj.fillRect(eu + i - 2, ew, 2, j), aB =
				1; aB < en; aB++) uj.fillRect(eu, ew + aB * a8R, i, 2);
			for (uj.fillStyle = bB.nj, bA.qa.textAlign(uj, 1), bA.qa.textBaseline(uj, 1), uj.font = bA.qa.sP(0, .6 * a8R), eu += .5 * i, aB = 0; aB < en; aB++) uj.fillText(a8r(aB), eu, ew + (aB + .6) * a8R)
		}
		uj.drawImage(canvas, Math.floor(a8Y.eu), Math.floor(a8Y.ew))
	}

	function mW(sC) {
		var eu, n9, nA, a8R;
		yI.clearRect(0, 0, Math.floor(a8Y.i), Math.floor(a8Y.j)), yI.fillStyle = bB.nf, yI.fillRect(0, 0, Math.floor(a8Y.i), Math.floor(a8Y.j)), aD.nC && (yI.fillStyle = bB.o8, yI.fillRect(0, 0, Math.floor(.3 * a8Y.i), Math.floor(a8Y.j))), yI
			.fillStyle = bB.nj, yI.fillText("Hide UI", .15 * a8Y.i, .5 * a8Y.j), yI.fillRect(Math.floor(.3 * a8Y.i - .5), 0, 2, Math.floor(a8Y.j)), eu = .5 * a8Y.i, yI.fillText("Replay Speed", eu, .31 * a8Y.j), yI.fillText(a8r(a8c), eu, .69 * a8Y.j),
			yI.fillRect(Math.floor(.7 * a8Y.i - .5), 0, 2, Math.floor(a8Y.j)), sC.a4v ? (eu = Math.floor(.02 * a8Y.i), sC = Math.floor(.025 * a8Y.i), n9 = Math.floor(.85 * a8Y.i - eu - .5 * sC), nA = Math.floor(.25 * a8Y.j), a8R = Math.floor(a8Y.j) -
				2 * nA, yI.fillRect(n9, nA, eu, a8R), yI.fillRect(n9 + eu + sC, nA, eu, a8R)) : function() {
				var i = Math.floor(.46 * a8Y.j),
					j = Math.floor(.23 * a8Y.j),
					eu = Math.floor(.85 * a8Y.i - .5 * i + i / 12),
					ew = Math.floor(.5 * a8Y.j - j);
				yI.beginPath(), yI.moveTo(eu, ew), yI.lineTo(eu + i, ew + j), yI.lineTo(eu, ew + (j << 1)), yI.fill()
			}(), yI.fillRect(0, 0, Math.floor(a8Y.i), 2), yI.fillRect(0, 0, 2, Math.floor(a8Y.j)), yI.fillRect(0, Math.floor(a8Y.j) - 2, Math.floor(a8Y.i), 2), yI.fillRect(Math.floor(a8Y.i - 2), 0, 2, Math.floor(a8Y.j))
	}

	function a8r(aB) {
		return 5 === aB ? "Normal" : "" + a8b[aB]
	}
	this.a4v = !1, this.dd = function() {
		aD.gw && (a8c = 5, this.a4v = !1, a8a = !1, a8Y = new rB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8d = function() {
		return a8b[a8c]
	}, this.yE = function() {
		return a8Y.ew
	}, this.a6O = function(a8S) {
		return !!aD.gw && a8Y.eu + a8Y.i > h.i - a8S - bc.gap
	}, this.resize = function() {
		aD.gw && (a8Y.resize(), a8Y.ew -= (bk.a5B() - 1) * bc.gap, font = bA.qa.sP(0, .3 * a8Y.j), (canvas = document.createElement("canvas")).width = Math.floor(a8Y.i), canvas.height = Math.floor(a8Y.j), (yI = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qa.textAlign(yI, 1), bA.qa.textBaseline(yI, 1), mW(this))
	}, this.a2C = function(a8e) {
		0 === aD.a08 || t.hZ() || a8e !== aD.nC && (aD.nC = a8e, bh.resize(), bf.dl = !0, aD.gw) && (a8Z = bf.eM + 2e3, mW(this))
	}, this.h0 = function(eu, ew) {
		if (!aD.gw) return !1;
		if (eu < a8Y.eu || ew < a8Y.ew || eu > a8Y.eu + a8Y.i) return a8a && function(sC, eu, ew) {
			var en = a8b.length,
				a8R = Math.floor(.5 * a8Y.j),
				j = en * a8R,
				n9 = Math.floor(Math.floor(a8Y.eu) + .3 * a8Y.i - .5),
				j = Math.floor(Math.floor(a8Y.ew) - j),
				i = Math.floor(.4 * a8Y.i + 2.5);
			return a8a = !1, bf.dl = !0, eu < n9 || n9 + i < eu || ew < j || (a8c = a8i(0, Math.floor((ew - j) / a8R), en - 1), mW(sC)), !0
		}(this, eu, ew);
		if ((eu -= a8Y.eu) < .3 * a8Y.i) a8a = !1, this.a2C(!aD.nC);
		else {
			if (eu < .7 * a8Y.i) return a8a = !a8a, bf.dl = !0;
			this.a2E(!1)
		}
		return !0
	}, this.a2E = function(a8g) {
		2 === aD.a08 ? (this.a2C(!1), t.u(3)) : (a8a = !1, this.a4v = !this.a4v, this.a4v ? (aM.gx && aM.a2D(), a0.a1.setState(1)) : a8g || aM.a5s(), bf.dl = !0, mW(this))
	}, this.a8h = function() {
		this.a4v = !1, aM.a5s(), bf.dl = !0, mW(this)
	}, this.a1v = function(eu, ew) {
		return !!aD.nC && (0 <= aM.h0(eu, ew) || (aD.gw ? ((bf.eM > a8Z || !this.h0(eu, ew)) && aS.h0(eu, ew), bf.dl = !0, a8Z = bf.eM + 2e3) : aS.h0(eu, ew)), !0)
	}, this.j3 = function() {
		aD.gw && aD.nC && bf.eM > a8Z - 1e3 && bf.eM < a8Z && (bf.dl = !0)
	}, this.a0G = function() {
		aD.gw && (this.a4v = !1, bf.dl = !0, mW(this))
	}, this.ui = function() {
		if (aD.gw) {
			if (aD.nC) {
				if (bf.eM > a8Z) return;
				if (bf.eM > a8Z - 1e3) return uj.globalAlpha = a8i(0, (1e3 - (bf.eM - (a8Z - 1e3))) / 1e3, 1), a8j(), void(uj.globalAlpha = 1)
			}
			a8j()
		}
	}
}

function cJ() {
	var a8s, a8t, i, eu, ew, a8u, a8v;
	this.dd = function() {
		a8s = new Array(2), a8t = new Array(2), this.nE = !1, a8v = a8u = iP = iO = 0, hy = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.hw() ? .072 : .0502) * h.hx)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8s[aB] = document.createElement("canvas"), a8s[aB].width = i, a8s[aB].height = i, a8t[aB] = a8s[aB].getContext("2d", {
			alpha: !0
		});
		this.a8L(),
			function() {
				for (var a9C = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8t[aB].clearRect(0, 0, i, i), a8t[aB].fillStyle = bB.nc, a8t[aB].beginPath(), a8t[aB].arc(i / 2, i / 2, i / 2 - a9C, 0, 2 * Math.PI), a8t[aB].fill(), a8t[aB]
					.lineWidth = a9C, a8t[aB].fillStyle = bB.nj, a8t[aB].strokeStyle = bB.nj, a8t[aB].beginPath(), a8t[aB].arc(i / 2, i / 2, i / 2 - a9C, 0, 2 * Math.PI), a8t[aB].stroke(), yL(a8t[aB], 0, 0, i, a9C, .3, 0 === aB)
			}()
	}, this.yD = function() {
		return -iO / hy
	}, this.yE = function() {
		return -iP / hy
	}, this.nO = function(a8z, i4) {
		iO = hy * a8z - i4
	}, this.nP = function(a90, i5) {
		iP = hy * a90 - i5
	}, this.h0 = function(a8y, a6P) {
		return aD.nC || ! function(a8y, a6P) {
			return Math.pow(a8y - (eu + i / 2), 2) + Math.pow(a6P - (ew + i / 2), 2) < i * i / 4 || Math.pow(a8y - (eu + i / 2), 2) + Math.pow(a6P - (ew + 2 * i), 2) < i * i / 4
		}(a8y, a6P) || bj.eK.data[8].value ? (aH.nR() && (this.nE = !0, a8u = a8y, a8v = a6P), !1) : a6P < ew + 1.25 * i ? this.a1f(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1f(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1c = function(a8y, a6P) {
		var a91, a92, i7, iA;
		return !aH.nR() || (a91 = iO, a92 = iP, iO += i7 = a8u - a8y, iP += iA = a8v - a6P, af.a1c(i7, iA), this.a93(), a8u = a8y, a8v = a6P, a91 !== iO) || a92 !== iP
	}, this.a1f = function(lP, lQ, deltaY) {
		var nL;
		if (aH.nR()) {
			if (0 < deltaY) nL = (nL = 500 / (500 + deltaY)) < .5 ? .5 : nL;
			else {
				if (!(deltaY < 0)) return !1;
				nL = 2 < (nL = (500 - deltaY) / 500) ? 2 : nL
			}
			this.a94(lP, lQ, nL), bf.dl = !0
		}
		return !0
	}, this.a94 = function(eu, ew, eR) {
		var a2V;
		eR = a2V = (a2V = 1024 < (a2V = eR) * hy ? 1024 / hy : a2V) * hy < .125 ? .125 / hy : a2V, af.zoom(eR, eu, ew),
			function(a2V, lP, lQ) {
				hy *= a2V, iO = (iO + lP) * a2V - lP, iP = (iP + lQ) * a2V - lQ, aS.a93()
			}(eR, eu, ew)
	}, this.a93 = function() {
		var a97 = h.i / 16,
			a98 = 0,
			a99 = h.j / 16,
			a9A = 0;
		iO < -h.i + a97 && (a98 = -h.i + a97 - iO), iO > hy * bS.ey - a97 && (a98 = hy * bS.ey - a97 - iO), iP < -h.j + a99 && (a9A = -h.j + a99 - iP), iP > hy * bS.ez - a99 && (a9A = hy * bS.ez - a99 - iP), iO += a98, iP += a9A, ba.nQ(), af.a9B(
			a98, a9A)
	}, this.a8L = function() {
		eu = h.i - i - bc.gap, ew = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ui = function() {
		bj.eK.data[8].value || (uj.drawImage(a8s[0], eu, ew), uj.drawImage(a8s[1], eu, Math.floor(ew + 3 * i / 2)))
	}
}

function cK() {
	var g, a9D, a9E, a9F, gap, a9G, a9H, a9I, a9J, a9K, a5m, a9L, gs, a9M, a7M, a9N, a9O;

	function a9S() {
		a9F = Math.floor(.2 * (a0.a1.hw() ? .07 : .035) * h.hx), a9F = a6M(a0.a1.hw() ? 3 : 1, a9F);
		var a9V = h.i / (g.length + gap);
		a9F = a9F < a9V ? a9V : a9F, a7M = Math.floor((1 - gap) * a9F), a9D = 0, a9W()
	}

	function a9W() {
		a9D = (a9D = a9D < -20 ? -20 : a9D) > (g.length - 15) * a9F ? (g.length - 15) * a9F : a9D, a9H = Math.floor(a9D / a9F), a9I = (a9I = a9H + Math.floor(h.i / a9F)) > g.length - 1 ? g.length - 1 : a9I, a9H = (a9H = a9I < a9H ? a9I : a9H) < 0 ?
			0 : a9H;
		var l5 = a9I;
		a9G = a9E / g[l5];
		for (var aB = a9I - 1; a9H <= aB; aB--) g[aB] > g[l5] && (l5 = aB, a9G = a9E / Math.pow(g[aB], a9M))
	}

	function a9Z(eu) {
		eu = Math.floor((a9D + h.i - eu - gap * a9F) / a9F);
		return (eu = eu < -1 ? -1 : -1 === eu ? 0 : eu > g.length - 1 ? -1 : eu) !== a9J && (a9J = eu, -1 === a9N && 0 === a9J && aT.a9P && (a9N = setInterval(a9a, 100)), 1)
	}

	function a9b(aB) {
		var a9d = Math.floor(a9G * Math.pow(g[aB], a9M));
		uj.fillRect(a9D + h.i - (aB + 1) * a9F, h.j - a9d, a7M, a9d)
	}

	function a9a() {
		var gL;
		0 !== (a9J = 8 === aa.a1J() ? -1 : a9J) ? (a9O = (new Date).getTime(), clearInterval(a9N), a9N = -1) : (gL = g[1] / 864e3, -1 !== a9O && (gL += ((new Date).getTime() - a9O) * g[1] / 864e5, a9O = -1), 0 < gL && (g[0] += Math.floor(gL), bf
			.dl = !0))
	}
	this.a9P = !1, this.dd = function() {
		a9O = a9N = -1, a9J = -(a9M = 1), this.a9Q = !1, gs = 0, a9L = new Date, a9D = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a9E = Math.floor(.15 * h.j), a9K = (a9K = Math.floor((a0.a1.hw() ? .018 : .0137) * h.hx)) < 2 ? 2 : a9K, a5m = bA.qa.sP(1, a9K), a9S()
	}, this.a9T = function(a9U) {
		var aB;
		for (this.a9P = !0, aB = 0; aB < a9U.length; aB++) g.unshift(a9U[aB]);
		a9S(), bf.dl = !0
	}, this.a9X = function() {
		a9W()
	}, this.a1c = function(eu, ew) {
		ew > h.j - .6 * a9E ? this.a9Q ? eu !== gs && (a9D += eu - gs, gs = eu, a9W(), a9Z(eu), this.a9Q = -1 !== a9J, bf.dl = !0) : a9Z(eu) && (bf.dl = !0) : this.rb()
	}, this.rb = function() {
		-1 !== a9J && (this.a9Q = !1, a9J = -1, bf.dl = !0)
	}, this.a1f = function(eu, deltaY) {
		-1 !== a9J && (a9D += Math.floor(deltaY), a9W(), a9Z(eu), bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		this.a1c(eu, ew), -1 !== a9J && (gs = eu, this.a9Q = !0)
	}, this.a21 = function() {
		-1 !== a9J && (this.a9Q = !1)
	}, this.ui = function() {
		uj.fillStyle = bB.nm;
		for (var a9e, month, dt, sx, a9h, a9i, nA, a9j, a9k, aB = a9I; a9H <= aB; aB--) a9b(aB);
		this.a9P && 0 === a9H && (uj.fillStyle = bB.oJ, a9b(0)), -1 !== a9J && (uj.fillStyle = bB.nl, a9b(a9J)), -1 !== a9J && (uj.font = a5m, bA.qa.textBaseline(uj, 2), (dt = new Date).setTime(a9L.getTime() - 1e3 * a9J * 60 * 60 * 24), month =
			"month", a9e = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a9e = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a9e = a9e + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a9J] ? L(109) : L(110), month = bA.rZ.zP(g[a9J]) + " " + month, dt = Math.floor(uj.measureText(a9e).width), sx = Math
			.floor(uj.measureText(month).width), a9h = Math.floor(.5 * (dt + a9K)), a9i = (a9i = a9D + h.i - (a9J + 1) * a9F) < a9h ? a9h : a9i > h.i - a9h ? h.i - a9h : a9i, nA = h.j - Math.floor(a9G * Math.pow(g[a9J], a9M)), a9j = Math
			.floor(1.1 * a9K), a9k = nA > h.j - a9j ? h.j - a9j : nA, uj.fillStyle = bB.ng, uj.fillRect(h.i - sx - a9K, a9k - a9j, sx + a9K, a9j), uj.fillRect(a9i - a9h, h.j - a9j, dt + a9K, a9j), uj.fillStyle = bB.nj, bA.qa.textAlign(uj, 2),
			uj.fillText(month, Math.floor(h.i - .5 * a9K), a9k), bA.qa.textAlign(uj, 1), uj.fillText(a9e, a9i, h.j), uj.strokeStyle = bB.nn, uj.lineWidth = 1, uj.beginPath(), uj.moveTo(0, nA), uj.lineTo(h.i, nA), uj.closePath(), uj.stroke())
	}
}

function cL() {
	var a5m, i, ew, a9l, a9m, canvas, yI, a7F, a3b, a9n, a9o, a9p, a9q;
	this.eu = 0, this.j = 0, this.dd = function() {
		a9m = aD.a4V, a9o = "rgba(0,100,0,0.8)", a9p = "rgba(150,0,0,0.8)", a7F = a9n = !0, a3b = ag.gp[aD.eX], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .305 : .24) * h.hx), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5m = bA.qa.sP(1, Math.floor(.8 * this.j)), a9q = Math.floor(.5 * this.j), bS.wb.font = a5m, ew = bc.gap, a9l = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (yI = canvas.getContext("2d", {
			alpha: !0
		})).font = a5m, bA.qa.textBaseline(yI, 1), bA.qa.textAlign(yI, 1), this.a9r()
	}, this.a7i = function() {
		return a0.a1.hw() && h.i < 1.2 * h.j
	}, this.a8L = function() {
		this.a7i() ? this.eu = h.i - i - bc.gap : this.eu = Math.floor(aV.a9s() + (h.i - aV.a9s() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mV = function() {
		a7F && (a7F = !1, this.a9r())
	}, this.a9r = function() {
		yI.clearRect(0, 0, i, this.j), yI.fillStyle = a9n ? a9o : a9p, yI.fillRect(0, 0, i, this.j), yI.fillStyle = bB.nl, this.a9t(), this.a9u(), yI.fillStyle = ag.gp[aD.eX] >= ae.jq(aD.eX) ? bB.oG : bB.nj, yI.fillText(bA.rZ.zP(a3b), Math.floor(
			i / 2), a9q), yI.fillStyle = bB.nj, yI.fillRect(0, 0, i, 1), yI.fillRect(0, 0, 1, this.j), yI.fillRect(0, this.j - 1, i, 1), yI.fillRect(i - 1, 0, 1, this.j)
	}, this.a9t = function() {
		var f8 = bf.k7() % 100,
			f8 = (f8 = 9 - bL.du(f8 -= f8 % 10, 10), Math.floor(f8 * (this.j - a9l) / 9));
		yI.fillRect(0, f8, a9l, this.j - f8), yI.fillRect(i - a9l, f8, a9l, this.j - f8)
	}, this.a9u = function() {
		yI.fillRect(a9l, this.j - a9l, Math.floor((i - 2 * a9l) * ag.gp[aD.eX] / a9m), a9l)
	}, this.j3 = function() {
		var gL = aD.eX;
		bA.g9.gz(gL) && (gL = ag.gp[gL] - ag.a3a[gL], a3b !== gL ? (a9m = a6M(gL, a9m), a9n = a3b < gL && 10 <= gL, a3b = gL, a7F = !0) : bf.k7() % 10 == 9 && (a7F = !0))
	}, this.ui = function() {
		0 === ag.mj[aD.eX] || aD.hB || 2 === ag.a3S[aD.eX] || uj.drawImage(canvas, this.eu, ew)
	}
}

function cM() {
	var a9v, a9w, a9x, a9y, a9z, aA0, aA1, aA2, aA3, aA4, aA5, aA6, aA7, aA8, aA9, aAA, aAB, aAC, aAD, aAE, aAF, aAG, position, aAH, aAI, aAJ, aAK, aAL = 1,
		aAM = 1,
		aAN = "";
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

	function aAP() {
		aA1.clearRect(0, 0, a9v, a7y),
			aA1.fillStyle = bB.oZ,
			aA1.fillRect(0, 0, a9v, aA6),
			aA1.fillStyle = bB.nf,
			aA1.fillRect(0, aA6, a9v, a7y - aA6);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jv[aD.eX]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aAG = -1;
		if (__fx.leaderboardFilter.enabled && aAG >= __fx.leaderboardFilter.filteredLeaderboard.length) aAG = -1;
		playerPos >= position && aAR(playerPos - position, bB.o8),
			0 !== jv[aD.eX] && 0 === position && aAR(0, bB.og),
			-1 !== aAG && aAR(aAG, bB.nk),
			aA1.fillStyle = bB.nf,
			//console.log("drawing", aAG),
			aA1.clearRect(0, a7y - __fx.leaderboardFilter.tabBarOffset, a9v, __fx.leaderboardFilter.tabBarOffset);
		aA1.fillRect(0, a7y - __fx.leaderboardFilter.tabBarOffset, a9v, __fx.leaderboardFilter.tabBarOffset);
		aA1.fillStyle = bB.nj,
			aA1.fillRect(0, aA6, a9v, 1),
			aA1.fillRect(0, a7y - __fx.leaderboardFilter.tabBarOffset, a9v, 1),
			__fx.leaderboardFilter.drawTabs(aA1, a9v, a7y - __fx.leaderboardFilter.tabBarOffset, bB.o8),
			aA1.fillRect(0, 0, a9v, bc.z6),
			aA1.fillRect(0, 0, bc.z6, a7y),
			aA1.fillRect(a9v - bc.z6, 0, bc.z6, a7y),
			aA1.fillRect(0, a7y - bc.z6, a9v, bc.z6), aA1.font = a9w, bA.qa.textBaseline(aA1, 1), bA.qa.textAlign(aA1, 1), aA1.fillText(aAN, Math.floor((a9v + aA6 - 22) / 2), Math.floor(aA4 + a9x / 2));
		__fx.playerList.drawButton(aA1, 12, 12, aA6 - 22);
		var f6, gM = playerPos < position + a9z - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9z)
				position = (result.length > a9z ? result.length : a9z) - a9z;
			//if (position >= result.length) position = result.length - 1;
			for (aA1.font = a9y, bA.qa.textAlign(aA1, 0), f6 = a9z - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAS(ll[pos]), aAT(f6, pos, ll[pos]);
			}
			for (bA.qa.textAlign(aA1, 2), f6 = a9z - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAS(ll[pos]), aAU(f6, ll[pos]);
			}
		} else {
			for (aA1.font = a9y, bA.qa.textAlign(aA1, 0), f6 = a9z - gM; 0 <= f6; f6--)
				aAS(ll[f6 + position]), aAT(f6, f6 + position, ll[f6 + position]);
			for (bA.qa.textAlign(aA1, 2), f6 = a9z - gM; 0 <= f6; f6--)
				aAS(ll[f6 + position]), aAU(f6, ll[f6 + position]);
		}
		2 == gM && (aAS(aD.eX), bA.qa.textAlign(aA1, 0), aAT(a9z - 1, jv[aD.eX], aD.eX), bA.qa.textAlign(aA1, 2), aAU(a9z - 1, aD.eX)), 0 === position && (gM = .7 * aA7 / ab.get(4).height, aA1.setTransform(gM, 0, 0, gM, Math.floor(aA8 + .58 * aA7 +
			.5 * gM * ab.get(4).width), Math.floor(aA4 + a9x + .4 * aA7)), aA1.imageSmoothingEnabled = !0, aA1.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aA1.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAS(player) {
		aD.hh && (aA1.fillStyle = bg.aAW[bg.aAX[player]])
	}

	function aAR(aB, aAY) {
		aA1.fillStyle = aAY, aB = a9z - 1 < aB ? a9z - 1 : aB;
		aAY = Math.floor((aB === a9z - 1 ? 2 : 0 === aB ? 1.15 : 1) * aA7), aAY = aB === a9z - 2 ? Math.floor(aA6 + 9.15 * aA7) - Math.floor(aA6 + 8.15 * aA7) : aAY;
		aA1.fillRect(0, Math.floor(aA6 + (aB + (0 === aB ? 0 : .15)) * aA7), a9v, aAY)
	}

	function aAT(aAa, a3p, aB) {
		aA1.fillText(aAC[a3p], aA8, Math.floor(aA4 + a9x + (aAa + .5) * aA7)), 1 === ag.a3S[aB] && (aA1.font = "italic " + a9y);
		a3p = Math.floor(aA4 + a9x + (aAa + .5) * aA7);
		aA1.fillText(ag.yb[aB], aA9, a3p), 0 !== ag.a3S[aB] && (aA1.font = a9y), aB < aD.kA && 2 !== ag.a3S[aB] || aA1.fillRect(aA9, a3p + .35 * aAL, aAB[aB], Math.max(1, .1 * aAL))
	}

	function aAU(aAa, aB) {
		aA1.fillText(ag.gb[aB], aAA, Math.floor(aA4 + a9x + (aAa + .5) * aA7))
	}

	function aAj(ew) {
		return (ew -= bc.gap + aA6) < 0 ? Math.floor(ew / aA7) - 1 : ew < (a9z - 1) * aA7 ? Math.floor(ew / aA7) : ew < a7y - aA6 ? a9z - 1 : (ew -= a7y - aA6, a9z + Math.floor(ew / aA7))
	}

	function z5(eu, ew) {
		return eu >= bc.gap && eu < bc.gap + a9v && ew >= bc.gap && ew < bc.gap + a7y
	}
	this.dd = function() {
			var aB;
			for (aAI = !1, aAK = aAJ = aAH = 0, aAG = -1, a9z = a0.a1.hw() ? 6 : 10, aAM = (position = 0) === (aAM = bj.eK.data[11].value) ? 10 : 1 === aAM ? 5 : 1, aAF = !1, aAD = new Uint16Array(a9z + 1), aAE = new Uint32Array(a9z + 1), aA3 = aD
				.ek, ll = new Uint16Array(aA3), jv = new Uint16Array(aA3), aB = aA3 - 1; 0 <= aB; aB--) ll[aB] = aB, jv[aB] = aB;
			this.resize(!0), aAB = new Uint16Array(aD.ek);
			var aAO = Math.floor(a9v - aA9 - aA8 - aA2);
			for (aAC = new Array(aD.ek), aA1.font = a9y, aB = aD.ek - 1; 0 <= aB; aB--) aAC[aB] = aB + 1 + ".", ag.yb[aB] = bA.yI.a38(ag.a0m[aB], a9y, aAO), aAB[aB] = Math.floor(aA1.measureText(ag.yb[aB]).width);
			aAP()
		}, this.resize = function(dd) {
			if (a7y = a0.a1.hw() ? (a9v = Math.floor(.335 * h.hx), Math.floor(a9z * a9v / 8)) : (a9v = Math.floor(.27 * h.hx), Math.floor(a9z * a9v / 10)), a9v = Math.floor(.97 * a9v), (aA0 = document.createElement("canvas")).width = a9v, aA0
				.height = a7y, aA1 = aA0.getContext("2d", {
					alpha: !0
				}), aA4 = .025 * a9v, a9x = .16 * a9v, aA5 = 0 * a9v, aA6 = Math.floor(.45 * aA4 + a9x), aA7 = (a7y - a9x - 2 * aA4 - aA5) / a9z,
				aA0.height = a7y += aA7, __fx.leaderboardFilter.tabBarOffset = Math.floor(aA7 * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7y - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9v,
				a9w = bA.qa.sP(1, Math.floor(.55 * a9x)), aAL = Math.floor((a0.a1.hw() ? .67 : .72) * aA7), a9y = bA.qa.sP(0, aAL), aA1.font = a9y, aA8 = Math.floor(.04 * a9v), aA9 = Math.floor((a0.a1.hw() ? .195 : .18) * a9v), aA2 = Math.floor(aA1
					.measureText("00920600").width), aA1.font = a9w, aAA = a9v - aA8, !dd) {
				aA1.font = a9y;
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aAB[aB] = Math.floor(aA1.measureText(ag.yb[aB]).width);
				aAP()
			}
			aAN = bA.yI.a38(L(111), a9w, .96 * a9v)
		}, this.a9s = function() {
			return a9v
		}, this.mV = function(bu, aAQ) {
			(aAQ || aAF && (bu || bf.k7() % aAM == 0)) && (aAF = !1, aAP())
		}, this.j3 = function() {
			! function() {
				for (var f6 = aA3 - 1; 0 <= f6; f6--) 0 === ag.mj[ll[f6]] && ! function(f6) {
					var aAh = ll[f6];
					aA3--;
					for (var aB = f6; aB < aA3; aB++) ll[aB] = ll[aB + 1], jv[ll[aB]] = aB;
					ll[aA3] = aAh, jv[ll[aA3]] = aA3
				}(f6)
			}();
			for (var aAf, nR = aA3 - 1, f6 = 0; f6 < nR; f6++) ag.gb[ll[f6]] < ag.gb[ll[f6 + 1]] && (aAf = ll[f6], ll[f6] = ll[f6 + 1], ll[f6 + 1] = aAf, jv[ll[f6]] = f6, jv[ll[f6 + 1]] = f6 + 1);
			! function() {
				for (var dt = aAF, gM = (aAF = !0, jv[aD.eX] >= a9z - 1 ? a9z - 2 : a9z - 1), aB = gM; 0 <= aB; aB--)
					if (aAD[aB] !== ll[aB] || aAE[aB] !== ag.gb[ll[aB]]) return;
				(gM != a9z - 2 || aAD[a9z] === jv[aD.eX] && aAE[a9z] === ag.gb[aD.eX]) && (aAF = dt)
			}();
			for (var aB = a9z - 1; 0 <= aB; aB--) aAD[aB] = ll[aB], aAE[aB] = ag.gb[ll[aB]];
			aAD[a9z] = jv[aD.eX], aAE[a9z] = ag.gb[aD.eX];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.h0 = function(eu, ew) {
			return !!z5(eu, ew) && ((__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, aA6 - 22, aA6 - 22) && __fx.playerList.display(ag.a0m), true) &&
				!(ew - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eu - bc.gap)) && (aAH = bf.eM, aAI = !0, aAJ = aAK = aAj(ew), bJ.a2F() && (eu = a8i(-1, aAK, a9z), aAG !== (eu = eu === a9z ?
					-1 : eu)) && (aAG = eu, aAP(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAP(), bf.dl = !0;
		},
		this.a1c = function(eu, ew) {
			if (__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, aA6 - 22, aA6 - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAP(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAP(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eu, ew, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eu - bc.gap
				)) return;
			var dt, aAi = aAj(ew);
			return aAI ? (dt = position, (position = a8i(0, position += aAJ - aAi, aD.ek - a9z)) !== dt && (aAi = (aAi = a8i(-1, aAJ = aAi, a9z)) !== a9z && z5(eu, ew) ? aAi : -1, aAG = aAi, aAP(), bf.dl = !0), !0) : (aAi = (aAi = a8i(-1, aAi,
				a9z)) === a9z || !z5(eu, ew) || bJ.a2F() ? -1 : aAi, aAG !== aAi && (aAG = aAi, aAP(), bf.dl = !0))
		}, this.a21 = function(eu, ew) {
			if (!aAI) return !1;
			aAI = !1;
			var aAi = aAj(ew);
			var isEmptySpace = false;
			return bJ.a2F() && -1 !== aAG && (aAG = -1, aAP(), bf.dl = !0), bf.eM - aAH < 350 && aAK === aAi && -1 !== (aAi = (aAi = a8i(-1, aAi, a9z)) !== a9z && z5(eu, ew) ? aAi : -1) && (eu = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					ll[__fx.leaderboardFilter.filteredLeaderboard[aAi + position] ?? (isEmptySpace = true, jv[aD.eX])]) : ll[aAi + position]), aAi === a9z - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jv[aD.eX]) >=
				position + a9z - 1 && (eu = aD.eX), !isEmptySpace && aD.hh && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eu, ag.a0m, aD.kU), 0 !== ag.mj[eu] && !isEmptySpace) && aH.n4(eu, 800, !1, 0), !0
		}, this.a1f = function(eu, ew, deltaY) {
			var aAk;
			return !(aAI || aD.nC || (aAk = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !z5(eu, ew)) || (eu = (eu = a8i(-1, aAj(ew), a9z)) === a9z || bJ.a2F() ? -1 : eu, 0 < deltaY ? position < aD.ek - a9z && (position += Math.min(aD.ek - a9z -
				position, aAk), aAG = eu, aAP(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aAk), aAG = eu, aAP(), bf.dl = !0), 0))
		}, this.ui = function() {
			uj.drawImage(aA0, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, yI, eu, ew, a9d, aAl, gap, aAm, fontSize, aAn, aAo, aAp, aAq, aAr, aAs, aAt, aAu, aAv;

	function aAz() {
		yI.clearRect(0, 0, aW.i, aW.j), yI.fillStyle = bB.ng, yI.fillRect(0, 0, aW.i, aW.j), yI.fillStyle = bB.o3, eR = 0 < aAt ? aAt : Math.sqrt(aAq[4] / 1e4), yI.fillRect(0, aW.j - a9d - 1, Math.floor(eR * aW.i), a9d), yI.fillStyle = bB.nj, yI
			.fillRect(0, 0, aW.i, 1), yI.fillRect(0, 0, 1, aW.j), yI.fillRect(aW.i - 1, 0, 1, aW.j), yI.fillRect(0, aW.j - 1, aW.i, 1), yI.fillRect(0, aW.j - a9d - 1, aW.i, 1);
		for (var eR, aB1, dt = 0, aB = 0; aB < aAp.length; aB++) aAr[aB] ? (bA.qa.textAlign(yI, 0), aB1 = Math.floor((aAl - a9d + 2 * aAm) * (aB - dt + 1) / (aAp.length + 1) - .7 * aAm), yI.fillText(aAp[aB], gap, aB1), bA.qa.textAlign(yI, 2), 5 ===
			aB && 0 !== ag.mj[aD.eX] && ag.gp[aD.eX] >= ae.jq(aD.eX) ? (yI.fillStyle = bB.od, yI.fillText(aAx(aB), aW.i - gap, aB1), yI.fillStyle = bB.nj) : yI.fillText(aAx(aB), aW.i - gap, aB1)) : dt++
	}

	function aAx(aB) {
		return aB < 3 ? aAq[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rZ.a49(aAq[aB] / 100, 2) : aB < 7 ? bA.rZ.zP(aAq[aB]) : aB === 7 ? aW.aB2(aAq[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gb, aD.eX) : __fx.utils.getDensity(aD.eX)
	}

	function aAw() {
		ag.gb[aD.eX] !== aAq[6] && (aAq[6] = ag.gb[aD.eX], aAn++)
	}
	this.dd = function() {
		aAt = aAu = 0, (aAo = new Array(8))[0] = L(112), aAo[1] = aD.kU ? L(113) : L(114), aAo[2] = L(115), aAo[3] = L(116), aAo[4] = L(117), aAo[5] = L(118, 0, "Interest"), aAo[6] = L(119), aAo[7] = L(120),
			aAo.push("Max Troops", "Density"), // add aAo
			(aAp = new Array(aAo.length)).fill(""), (aAq = new Array(aAo.length))[0] = aD.kU ? 0 : aD.kA, aAq[1] = aD.kU ? al.kg : aD.kW, aAq[2] = aD.a0A, aAq[3] = 0, aAq[4] = bL.du(1e4 * ag.gb[0], Math.max(aD.ju, 1)), aAq[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.eX], 64), aAq[6] = 0, aAw(), aAq[7] = 0, aAs = aAx(6), (aAr = new Array(aAo.length)).fill(!0), aAv = 0, aAv =
			aD.kU ? (aAr[0] = !1, aAr[2] = !1, aAr[3] = !1, 3) : (aAr[3] = !1, 1), aAn = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hw() ? .1646 : .126) * 1.25 * h.hx), this.j = Math.floor(1.18 * this.i), a9d = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAm = .04 * this.i, aAl = this.j, this.j -= Math.floor(aAv * (this.j -
			2 * a9d) / aAo.length), fontSize = Math.floor(.7 * (aAl - a9d) / aAo.length);
		var a5m = bA.qa.sP(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5m, i) {
				for (var aB = 0; aB < aAp.length; aB++) aAp[aB] = bA.yI.a38(aAo[aB], a5m, i)
			}((yI = canvas.getContext("2d", {
				alpha: !0
			})).font = a5m, .575 * this.i), bA.qa.textBaseline(yI, 1), yI.lineWidth = 1, this.a4O(), this.a8L(), aU.a8L(), aAz()
	}, this.a8L = function() {
		eu = h.i - this.i - bc.gap
	}, this.aB0 = function() {
		ew = bc.gap
	}, this.a4O = function() {
		ew = bc.gap + (aU.a7i() && 0 !== ag.mj[aD.eX] && !aD.hB ? aU.j + bc.gap : 0)
	}, this.mV = function(bu) {
		(bu || 100 <= aAn) && (aAn = 0, aAz())
	}, this.a57 = function() {
		return aAq[7]
	}, this.aB2 = function(value) {
		var l5 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l5) / 1e3);
		return value < 10 ? l5 + ":0" + value : l5 + ":" + value
	}, this.j3 = function() {
		var aBD, per;
		aAr[0] && aD.a0B - aD.a0A !== aAq[0] && (aAq[0] = aD.a0B - aD.a0A, aAn++), al.kg - aAq[0] !== aAq[1] && (aAq[1] = al.kg - aAq[0], aAn++), this.mN(), (aBD = ae.aBE(aD.eX)) !== aAq[5] && (aAq[5] = aBD, aAn++), aAw(), aAq[7] += bf.aBF, aBD =
			aAx(7), aAs !== aBD && (aAs = aBD, aAn += 100), aBD = aD.hh ? bh.kh() : ag.gb[ll[0]], per = bL.du(1e4 * aBD, Math.max(aD.ju, 1)), aAq[3] = aBD, aAq[4] !== per && (aAn++, aAq[4] = per), 8 === aD.kS && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.g9.gz(aB)) return bR.zk.a07(), 1;
				return
			}() || aAq[3] < aD.ju || ! function() {
				for (var aB = al.kg - 1; 0 <= aB; aB--)
					if (0 < ag.gF[al.kl[aB]].length) return;
				return 1
			}() || bN.kz.aBC().length || bR.zk.a07()
	}, this.mN = function() {
		aAr[2] && aD.a0A !== aAq[2] && (aAq[2] = aD.a0A, aAn += 2 === aD.a08 ? 100 : 1)
	}, this.aB9 = function() {
		return aAq[3] === aD.ju
	}, this.aBG = function(aB) {
		var tD, aBH, dt;
		return 2 !== aD.a08 && (aB % 2 == 1 && (aV.mV(1, 1), bf.dl = !0), aB === aD.a4X ? (aAt = 0, aAz(), !1) : (-1 !== aB || 0 !== aAu) && (aBH = aAt, aAt = aD.gw ? aB / aD.a4X : (dt = performance.now(), 0 <= aB && (tD = dt - 392 * aB, aAu =
			0 === aB || tD < aAu ? tD : aAu), 1 < (aAt = (dt - aAu) / (392 * aD.a4X)) ? 1 : aAt), aAz(), aAt !== aBH))
	}, this.ui = function() {
		uj.drawImage(canvas, eu, ew)
	}
}

function cO() {
	var hZ, aBI, i, j, a8R, aBJ, aBK, a7j, canvas, mw, aBL;

	function yE() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aBL = hZ = !1, a8R = .61, aBJ = .07, aBK = .09, mw = a7j = j = 0
	}, this.resize = function() {
		var yI, n9, f8, aBQ, aBR, a5r;
		hZ && (i = aBM(i = a0.a1.hw() ? Math.floor(.69 * h.hx) : Math.floor(.5 * h.hx), a6M(h.i - 2 * bc.gap, 10)), i = aBM(i, Math.floor(3.57 * a6M(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, yI = canvas.getContext("2d", {
				alpha: !0
			}), n9 = Math.floor(1 + j / 40), yI.clearRect(0, 0, i, j), yI.fillStyle = bB.ng, yI.fillRect(n9, n9, i - 2 * n9, j - 2 * n9), yI.lineJoin = "bevel", yI.lineWidth = 2 * n9, yI.strokeStyle = bB.nj, yI.strokeRect(n9, n9, i - 2 * n9,
				j - 2 * n9), yI.imageSmoothingEnabled = !1, f8 = ab.get(aBI), aBQ = f8.width, a5r = (1 === aBI ? .85 : 21 === aBI ? .666 : .9) * a8R * j / (aBR = f8.height), yI.setTransform(a5r, 0, 0, a5r, Math.floor((i - a5r * aBQ) / 2),
				Math.floor((j - a5r * aBR) / 2)), yI.drawImage(f8, 0, 0), yI.setTransform(1, 0, 0, 1, Math.floor(i - aBK * j - aBJ * j - n9), Math.floor(n9 + aBJ * j)),
			function(yI, en) {
				yI.lineWidth = Math.floor(1 + j / 80), yI.strokeStyle = bB.nj, yI.beginPath(), yI.moveTo(0, 0), yI.lineTo(en, en), yI.moveTo(0, en), yI.lineTo(en, 0), yI.stroke()
			}(yI, Math.floor(aBK * j)), yI.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fF, aBO, a8E, aBP) {
		hZ || aBP && aBL || (aBI = a8E ? 21 : fF ? 1 : 2, hZ = aBL = !0, this.resize(), aL.rr(), aR.a89(), mw = bf.eM, a7j = aBO ? 1 : 0)
	}, this.j3 = function() {
		!hZ || 1 <= a7j || (a7j = 1 < (a7j += 5e-4 * (bf.eM - mw)) ? 1 : a7j, mw = bf.eM, bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		return !(!hZ || a7j <= 0 || (eu -= Math.floor((h.i - i) / 2), ew -= yE(), eu < 0) || ew < 0 || i < eu || j < ew || (i - j / 3 < eu && ew < j / 3 && (hZ = !1, bf.dl = !0), 0))
	}, this.ui = function() {
		!hZ || a7j <= 0 || (uj.globalAlpha = a7j, uj.drawImage(canvas, Math.floor((h.i - i) / 2), yE()), uj.globalAlpha = 1)
	}
}

function dN() {
	var aBT, aBU = new Uint8Array(5),
		aBV = new Uint8Array(5);
	this.aBW = new aBX, this.dd = function() {
		for (var fF = bj.eK.data[119].value, aB = 0; aB < aBU.length; aB++) aBU[aB] = (fF >> 2 * aB) % 4
	}, this.a4j = function() {
		aBT = [L(121), "", L(122, [bX.aBY[28]]), L(123, [bX.aBY[26]]), L(124, [bX.aBY[0]])], this.aBW.dd()
	}, this.j3 = function() {
		this.aBW.j3()
	}, this.a5V = function(id) {
		1 < id && bJ.r2() || ! function(e8) {
			if (3 === aBU[e8] || 1 === aBV[e8]) return;
			if (aBV[e8] = 1, !(Math.random() < .6)) {
				aBU[e8]++;
				for (var fF = 0, aB = 0; aB < aBU.length; aB++) fF += aBU[aB] << 2 * aB;
				bj.s2.s3(119, fF)
			}
			return 1
		}(id) || aN.a6S(aBT[id])
	}
}

function aBX() {
	var aBa;
	this.dd = function() {
		aBa = !1
	}, this.j3 = function() {
		var gL;
		if (function() {
				if (!aBa) {
					if (bf.k7() % 30 != 9) return;
					if (!bA.g9.lh(90)) return;
					aBa = !0
				}
				return 1
			}() && (! function() {
				var qS = aN.a6o(956);
				if (qS) {
					if (bA.g9.l8(qS.player)) return 1;
					aN.a6n(956, 0)
				}
				return
			}() && (-1 === (gL = (aD.hh ? function() {
				var id = bh.kj(),
					en = al.kg;
				if (bg.kX[id])
					for (var zw = al.kl, el = bg.el, aB = 0; aB < en; aB++) {
						var gL = zw[aB];
						if (el[gL] !== id) return gL
					} else if (1 < en) return ll[en - 1];
				return -1
			} : function() {
				for (var aBi = al.kg, l4 = al.kl, aBj = jv, aB = 0; aB < aBi; aB++) {
					var gL = l4[aB];
					if (0 !== aBj[gL]) return gL
				}
				return -1
			})()) ? ! function() {
				var qS = aN.a6o(957);
				if (qS && qS.a6I) {
					if (ac.ee(qS.a6I.eZ << 2)) return 1;
					aN.a6n(957, 0)
				}
				return
			}() : (aN.ya(0, L(125, [ag.yb[gL]]), 956, gL, bB.nj, bB.ng, -1, !0), 0)))) {
			var en = ao.il.lK;
			if (0 !== en)
				for (var eK = ao.il.eK, aB = 0; aB < en; aB++) {
					var eZ = eK[aB];
					if (ac.ee(eZ << 2)) return void aN.ya(0, L(126, [bM.ev(eZ), bM.ex(eZ)]), 957, 0, bB.nj, bB.ng, -1, !0, void 0, {
						f6: 1,
						eZ: eZ
					})
				}
		}
	}
}

function dO() {
	this.aBk = new aBl, this.dd = function() {
		this.aBk.resize()
	}
}

function aBl() {
	this.resize = function() {
		var aB, aBm = document.head.querySelector("style#ss");
		if (aBm)
			for (aB = aBm.sheet.cssRules.length - 1; 0 <= aB; aB--) aBm.sheet.deleteRule(0);
		else(aBm = document.createElement("style")).id = "ss", document.head.appendChild(aBm);
		var a8Z = "::-webkit-scrollbar",
			aBn = bA.qa.qj(bc.sR),
			hj = bA.qa.qj(Math.max(bA.qa.rt(.012), 8));
		try {
			aBm.sheet.insertRule(a8Z + "{width:" + hj + ";height:" + hj + ";}", aBm.sheet.cssRules.length), aBm.sheet.insertRule(a8Z + "-thumb{background-color:white;}", aBm.sheet.cssRules.length), aBm.sheet.insertRule(a8Z +
				"-track{background:" + bB.nf + ";}", aBm.sheet.cssRules.length), aBm.sheet.insertRule(a8Z + "-track:horizontal{border-top:" + aBn + " solid white;}", aBm.sheet.cssRules.length), aBm.sheet.insertRule(a8Z +
				"-track:vertical{border-left:" + aBn + " solid white;}", aBm.sheet.cssRules.length), aBm.sheet.insertRule(a8Z + "-button{display:none;}", aBm.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBm.sheet.cssRules.length - 1; 0 <= aB; aB--) aBm.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aBo = !1, this.nZ = !1, this.a4S = !1, this.aBp = [0, 0, 0, 0], this.aBq = function() {
		var n9, nA, nM, nN;
		this.a4S = this.a4S || this.nZ, (this.nZ || this.aBo && this.a4S) && (n9 = ba.aBr[0], nA = ba.aBr[1], nM = ba.aBr[2], nN = ba.aBr[3], n9 = n9 < this.aBp[0] ? this.aBp[0] : n9, nA = nA < this.aBp[1] ? this.aBp[1] : nA, nM = nM > this.aBp[
				2] ? this.aBp[2] : nM, nN = nN > this.aBp[3] ? this.aBp[3] : nN, this.nZ = !1, this.aBo = !1, n9 === this.aBp[0] && nA === this.aBp[1] && nM === this.aBp[2] && nN === this.aBp[3] ? this.a4T() : n9 <= nM && nA <= nN && a4l
			.putImageData(a4m, 0, 0, n9, nA, nM - n9 + 1, nN - nA + 1))
	}, this.a4T = function() {
		this.a4S && this.aBp[2] >= this.aBp[0] && this.aBp[3] >= this.aBp[1] && a4l.putImageData(a4m, 0, 0, this.aBp[0], this.aBp[1], this.aBp[2] - this.aBp[0] + 1, this.aBp[3] - this.aBp[1] + 1), this.a4S = !1
	}, this.a0J = function() {
		this.aBp[2] >= this.aBp[0] && this.aBp[3] >= this.aBp[1] && a4l.putImageData(a4m, 0, 0, this.aBp[0], this.aBp[1], this.aBp[2] - this.aBp[0] + 1, this.aBp[3] - this.aBp[1] + 1), this.a4S = !1
	}, this.dd = function() {
		var eu, ew;
		this.aBo = !1, this.nZ = !1, this.a4S = !1, this.aBp[0] = bS.ey, this.aBp[1] = bS.ez, this.aBp[2] = this.aBp[3] = 0;
		loop: for (eu = 1; eu < bS.ey - 1; eu++)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBs[ac.xl(eu, ew) + 2]) {
					this.aBp[0] = eu;
					break loop
				} loop: for (ew = 1; ew < bS.ez - 1; ew++)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBs[ac.xl(eu, ew) + 2]) {
					this.aBp[1] = ew;
					break loop
				} loop: for (eu = bS.ey - 2; 0 < eu; eu--)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBs[ac.xl(eu, ew) + 2]) {
					this.aBp[2] = eu;
					break loop
				} loop: for (ew = bS.ez - 2; 0 < ew; ew--)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBs[ac.xl(eu, ew) + 2]) {
					this.aBp[3] = ew;
					break loop
				}
	}
}

function L(value, aBt, vI) {
	var qH = "number" == typeof value ? b7.aBu[value] : value;
	if (vI && b7.aBv() && (qH = vI), aBt)
		for (var en = aBt.length, aB = 0; aB < en; aB++)
			for (var f6 = 0; f6 < 3; f6++) qH = qH.replace("{" + (10 * f6 + aB) + "}", aBt[aB]);
	return qH
}

function c2() {
	this.data = new aBw;
	var aBx = (new aBy).L84,
		aBz = (this.aBu = aBx, !1);
	this.dd = function() {
		aBz = !1
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dy
	}, this.aBv = function() {
		return this.aBu === aBx || !aBx.length
	}, this.aC7 = function() {
		aBz && (aBz = !1, aBx.length)
	}, this.aC8 = function(g) {
		g.length === aBx.length && (this.aBu = g, bj.s2.s3(145, bj.eK.data[12].value), bj.s2.s3(146, g.length), bj.qr.vb(g, !1), bj.qr.vb(aBx, !0), 0 === aa.a1J()) && 5 === t.sp && t.y.aC9()
	}, this.aCA = function() {
		var aCB, g = navigator.languages;
		return g && g.length ? (aCB = Math.max(b7.data.aCC(g[0]), 0), 1 === g.length ? [aCB, aCB] : [aCB, Math.max(b7.data.aCC(g[1]), 0)]) : [0, 0]
	}
}

function aBw() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aCD = function() {
		for (var aCE = [], g = this.g, en = g.length, aB = 0; aB < en; aB++) aCE.push(g[aB]);
		var aCF = bj.eK.data[12].vI;
		for (aB = 0; aB < en; aB++)
			if (aCE[aB] === aCF) {
				aCE.splice(aB, 1), en--;
				break
			} aCE.sort(), en++, aCE.unshift(aCF);
		try {
			if ("undefined" == typeof Intl) return aCE;
			for (aB = 0; aB < en; aB++) {
				var qH = new Intl.DisplayNames([aCE[aB]], {
					type: "language"
				}).of(aCE[aB]);
				qH !== aCE[aB] && (aCE[aB] = aCE[aB] + ": " + qH)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aCE
	}, this.aCH = function(aCI) {
		for (var qH = bj.eK.data[12].value, en = aCI.length, aB = 0; aB < en; aB++)
			if (qH === aCI[aB].split(":")[0]) return aB;
		return 0
	}, this.aCC = function(aCJ) {
		if (!aCJ || aCJ.length < 2) return 0;
		aCJ = aCJ.split("-")[0].toLowerCase();
		for (var g = this.g, en = g.length, aB = 0; aB < en; aB++)
			if (aCJ === g[aB]) return aB;
		return -1
	}
}

function aBy() {
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
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", " minute", " hour", " day", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}",
		"Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
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
		"Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official webpage is https://territorial.io", "If you log in on a different website, your account may be stolen!",
		"If you play with the Android or iOS App, you are fine.", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay",
		"🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Spawning", "Selectable Spawn", "🔑 My Account",
		"📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App",
		"Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar",
		"Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote",
		"Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan",
		"White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dj() {
	var eu, ew, j, tm, aCK, aCL, aCM, aCN, aCO, i, a3N, aCP;
	this.hZ = !1, this.dd = function(qH, aCQ) {
		if (1 === a0.id && 13 <= a0.dv && a0.dv < 18) return aCQ ? void(a3N = qH) : a3N !== qH ? void 0 : void a0.vT.saveString(200, qH);
		aCQ && (a3N = qH, (aCP = document.createElement("a")).appendChild(document.createTextNode(a3N)), this.hZ = !0, aCP.title = a3N, aCP.target = "_blank", aCP.href = a3N, aCP.style.textAlign = "center", aCP.style.color = bB.nj, aCP.style
			.position = "absolute", aCP.style.padding = "0px", aCP.style.margin = "0px", this.resize(), document.body.appendChild(aCP), bf.dl = !0)
	}, this.rr = function() {
		return !(!this.hZ || (t.removeChild(document.body, aCP), this.hZ = !1))
	}, this.h0 = function(i4, i5) {
		return !!this.hZ && ((i4 < eu || i5 < ew || eu + i < i4 || ew + j < i5 || eu + i - tm < i4 && i5 < ew + tm) && (bf.dl = !0, this.hZ = !1, t.removeChild(document.body, aCP)), !0)
	}, this.resize = function() {
		var a5m, aCR;
		this.hZ && (aCN = Math.floor(.8 * (a0.a1.hw() ? h.i > h.j ? .6 : .55 : .4) * h.hx), tm = Math.floor(.15 * aCN), aCK = Math.floor(.35 * tm), aCL = Math.floor(.5 * tm), aCM = Math.floor(2.5 * aCL), j = tm + aCK + 3 * aCL, a5m = bA.qa.sP(1,
			aCK / h.k), aCO = Math.floor(h.k * aQ.measureText(a3N, a5m)), aCR = i = (aCN < aCO ? aCO : aCN) + 2 * aCM, i = Math.min(i, h.i - 2 * (a0.a1.hw() ? 2 : 1) * bc.gap), a5m = bA.qa.sP(1, i / aCR * aCK / h.k), aCO = Math.floor(h
			.k * aQ.measureText(a3N, a5m)), eu = Math.floor((h.i - i) / 2), ew = Math.floor((h.j - j) / 2), aCP.style.font = a5m, aCP.style.top = Math.floor((ew + 1.4 * aCL + tm) / h.k) + "px", aCP.style.left = Math.floor((eu + (i -
			aCO) / 2) / h.k) + "px")
	}, this.ui = function() {
		this.hZ && (uj.fillStyle = bB.ng, uj.fillRect(eu, ew + tm, i, j - tm), uj.fillStyle = bB.op, uj.fillRect(eu, ew, i, tm), uj.fillStyle = bB.nj, uj.lineWidth = bc.z6, uj.strokeStyle = bB.nj, uj.strokeRect(eu, ew, i, j), uj.fillRect(eu, ew +
			tm, i, bc.z6), uj.font = bA.qa.sP(1, .48 * tm), bA.qa.textAlign(uj, 1), bA.qa.textBaseline(uj, 1), uj.fillText("You are leaving Territorial.io!", Math.floor(eu + (i - .5 * tm) / 2), Math.floor(ew + .55 * tm)), aM.a5x(Math
			.floor(eu + i - .8 * tm), Math.floor(ew + .25 * tm), Math.floor(.5 * tm)), uj.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aAo, eu = [0, 0, 0, 0, 0],
		ew = [0, 0, 0, 0, 0],
		nL = [1, 1, 1, 1, 1],
		fF = [!0, !0, !0, !1, !1],
		f8 = (this.fa = [!0, !0, !0, !1, !1], null);
	this.aCS = function(a2w, aCT) {
		f8 = a2w, fF = aCT, aAo = [bK.aCU, bK.a1C, bK.aCV, bK.aCV, bK.aCW], this.dd()
	}, this.dd = function() {
		if (ab.tH()) {
			var aB, sw = Math.floor((a0.a1.hw() ? .261 : .195) * h.hx),
				sx = Math.floor(.9 * sw),
				a8R = Math.floor(.17 * sx);
			if (gap = a0.a1.hw() ? 2 * bc.gap : bc.gap, nL[0] = sw / f8[0].width, nL[1] = sx / f8[1].width, nL[2] = a8R / f8[2].height, nL[3] = a8R / f8[3].height, nL[4] = a8R / f8[4].height, nL[2] *= 1.7, nL[3] *= 1.07, eu[0] = gap, eu[1] = gap,
				eu[2] = gap, eu[3] = gap, eu[4] = Math.floor(2 * gap + nL[3] * f8[3].width), ew[0] = gap, ew[1] = ew[0] + gap + nL[0] * f8[0].height, ew[2] = ew[1] + gap + nL[1] * f8[1].height, ew[3] = ew[2] + gap + nL[2] * f8[2].height, ew[4] =
				ew[3], !fF[0])
				for (aB = 0; aB < 5; aB++) ew[aB] -= nL[0] * f8[0].height + gap;
			if (!fF[1])
				for (aB = 2; aB < 5; aB++) ew[aB] -= nL[1] * f8[1].height + gap
		}
	}, this.hZ = function() {
		return !(7 === aa.a1J() && a0.a1.hw())
	}, this.h0 = function(i4, i5) {
		if (f8 && this.hZ())
			for (var aB = fF.length - 1; 0 <= aB; aB--)
				if (fF[aB] && this.fa[aB] && eu[aB] < i4 && ew[aB] < i5 && i4 < eu[aB] + nL[aB] * f8[aB].width && i5 < ew[aB] + nL[aB] * f8[aB].height) return t.u(9, t.sp, new aCX("You are leaving Territorial.io.", bA.qa.a3M(aAo[aB]))), !0;
		return !1
	}, this.ui = function() {
		if (f8 && this.hZ()) {
			var aB;
			for (uj.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fF[aB] && this.fa[aB] && (uj.setTransform(nL[aB], 0, 0, nL[aB], eu[aB], ew[aB]), uj.drawImage(f8[aB], 0, 0));
			uj.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aCY = 0, this.aCZ = null, this.tv = null, this.kz = null, this.y = null, this.uI = null, this.tt = null, this.message = null, this.aCa = null, this.rq = null, this.aCb = null, this.aCc = new aCd, this.a1G = 0, this.a9L = 0, this.dd =
		function() {
			this.a9L = bf.eM, this.aCY = bG.ss.wN(bj.eK.data[105].value), this.tv = new aCe, this.kz = new aCf, this.y = new aCg, this.uI = new aCh, this.tt = new aCi, this.message = new aCj, this.aCa = new aCk, this.rq = new aCl, this.aCb = new aCm,
				this.y.dd(), bp.dd(), this.a1G = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uC = function() {
			this.rq && this.rq.uC(), this.aCZ = null, this.tv = null, this.kz = null, this.y = null, this.uI = null, this.tt = null, this.message = null, this.aCa = null, this.rq = null, this.aCb = null, this.a1G = 0, bp.uC(), a0.a1.setState(0)
		}
}

function aCe() {
	function aD9(g, t9, tA) {
		var aDA = g[t9];
		g[t9] = g[tA], g[tA] = aDA
	}
	this.tw = [
		[],
		[],
		[],
		[]
	], this.tx = [0, 0, 0, 0], this.aCn = [], this.aCo = function(aCp, sn, username, u2, a3p, aCq, elo, color, vv, aCr) {
		username = this.aCt(sn, username, u2, a3p, aCq, elo, color, vv, aCr);
		this.tw[aCp].push(username), bn.aCY === sn && (bn.aCZ = username), bn.aCb.aCu(sn) && (username.u4 = 1), bn.y.aCv += 29 === t.sp && bn.y.re[0] === aCp && 1 === bn.y.re[2]
	}, this.aCt = function(sn, username, u2, a3p, aCq, elo, color, vv, aCr) {
		return {
			sn: sn,
			username: username,
			u2: u2,
			a3p: a3p,
			aCq: aCq,
			elo: elo,
			color: color,
			vv: vv,
			aCr: aCr
		}
	}, this.aCw = function(e8, aCp, u2, a3p, aCq, elo, vv) {
		e8 = this.tw[aCp][e8];
		e8.u2 = u2, e8.a3p = a3p, e8.aCq = aCq, e8.elo = elo, e8.vv = vv, bn.y.aCv += 29 === t.sp && bn.y.re[0] === aCp && 1 === bn.y.re[2]
	}, this.aCx = function(e8, aCp, aCy) {
		var e8 = this.tw[aCp][e8],
			aCz = e8.username,
			aD0 = "Redacted " + bF.ss.zP(e8.sn, 2);
		e8.username = aCy ? "[" + bA.rZ.a0p(aCz) + "] " + aD0 : aD0, aCz.indexOf("Redacted") < 0 && (e8.aD1 = aCz, e8.aD2 = 3), bn.y.aCv += 29 === t.sp && bn.y.re[0] === aCp && 1 === bn.y.re[2]
	}, this.aD3 = function(e8, aD4, aD5) {
		var player = this.tw[aD4][e8];
		this.aD6(e8, aD4), this.tw[aD5].push(player), bn.y.aCv += 29 === t.sp && bn.y.re[0] === aD5 && 1 === bn.y.re[2]
	}, this.aD6 = function(e8, aD4) {
		var tv = this.tw[aD4];
		this.aCn.push(tv[e8]), 1e3 < this.aCn.length && this.aCn.shift(), e8 >= this.tx[aD4] ? tv[e8] = tv[tv.length - 1] : (this.tx[aD4]--, 2 === aD4 ? (tv.splice(this.tx[aD4] + 1, 0, tv[tv.length - 1]), tv.splice(e8, 1)) : (tv[e8] = tv[this.tx[
			aD4]], tv[this.tx[aD4]] = tv[tv.length - 1])), tv.pop(), bn.y.aCv += 29 === t.sp && bn.y.re[0] === aD4 && 1 === bn.y.re[2]
	}, this.aD7 = function(e8, rd) {
		bn.y.aCv += 29 === t.sp && bn.y.re[0] === rd && 1 === bn.y.re[2];
		var tv = this.tw[rd],
			qS = tv[e8];
		if (2 === rd)
			if (e8 >= this.tx[rd]) {
				bn.aCb.join(qS);
				for (var aD8 = this.tx[rd], elo = qS.elo; aD8 && elo > tv[aD8 - 1].elo;) aD8--;
				tv[e8] = tv[this.tx[rd]], tv.splice(this.tx[rd]++, 1), tv.splice(aD8, 0, qS)
			} else tv.splice(this.tx[rd]--, 0, qS), tv.splice(e8, 1);
		else e8 >= this.tx[rd] ? (bn.aCb.join(qS), aD9(tv, this.tx[rd]++, e8)) : aD9(tv, --this.tx[rd], e8)
	}, this.aDB = function(sn) {
		for (var tw = this.tw, en = tw.length, aB = 0; aB < en; aB++)
			for (var tv = tw[aB], l5 = tv.length, f6 = 0; f6 < l5; f6++)
				if (sn === tv[f6].sn) return tv[f6];
		return null
	}
}

function aCm() {
	var aDC = [],
		aDD = [],
		aDE = 0;

	function aDF(g, a6q, aDJ, aDK) {
		var en = g.length;
		if (0 === en) return "";
		var qH = "@" + g[0];
		if (1 === en) return qH + a6q + aDK;
		for (var aB = 1; aB < en - 1; aB++) qH += ", @" + g[aB];
		return qH + " and @" + g[en - 1] + aDJ + aDK
	}
	this.dd = function() {
		var qH = aDF(aDD, " is", " are", " in the lobby!");
		qH.length && bn.message.aDG({
			id: 7,
			r: qH
		}), aDC = [], aDD = [], aDE = 0
	}, this.aCu = function(aDH) {
		return bn.aCY !== aDH && (aDH = bF.ss.zP(aDH, 5), !!bj.v8.u4(aDH)) && (aDD.push(aDH), !0)
	}, this.join = function(player) {
		bn.aCY !== player.sn && (player = bF.ss.zP(player.sn, 5), bj.v8.u4(player)) && aDC.push(player)
	}, this.aDI = function() {
		var a6q, aDJ;
		++aDE < 3 || (aDE = 0, a6q = aDF(aDD, " has", " have", " entered the lobby!"), (a6q = (aDJ = aDF(aDC, " has", " have", " joined a game!")).length ? a6q.length ? a6q + " " + aDJ : aDJ : a6q).length && bn.message.aDG({
			id: 7,
			r: a6q
		}), aDC = [], aDD = [])
	}
}

function aCd() {
	this.dm = function(e8) {
		if ((tx = bn.tv.tx[e8]) < 2) return !1;
		var rf = bn.y.rg[e8],
			aDL = 9 === rf.aDM ? 333 : 512,
			tx = Math.min(tx, aDL);
		8 === rf.aDM && (tx -= tx % 2);
		aDL = bn.tv.tw[e8].splice(0, tx), bn.tv.tx[e8] -= tx, tx = function(aDN) {
			if (bn.aCZ)
				for (var en = aDN.length, sn = bn.aCZ.sn, aB = 0; aB < en; aB++)
					if (aDN[aB].sn === sn) return aB;
			return -1
		}(aDL);
		return -1 === tx ? (bn.tv.aCn = bn.tv.aCn.concat(aDL), 1e3 < bn.tv.aCn.length && bn.tv.aCn.splice(0, bn.tv.aCn.length - 1e3), bn.y.aCv += 29 === t.sp && bn.y.re[0] === e8 && 1 === bn.y.re[2], !1) : (8 === rf.aDM && (rf.aDQ = (rf.aDQ + (
			tx >> 1)) % 1024, e8 = tx - tx % 2, tx %= 2, aDL = aDL.slice(e8, 2 + e8)), ax.dd(rf, aDL, tx), !0)
	}, this.aDR = function(rf, aDN, aDO) {
		var eq = aD.data = new a4Y,
			aDV = (eq.spawningSeed = rf.spawningSeed, rf.aDM < 7 ? (eq.gameMode = 1, eq.numberTeams = rf.aDM + 2) : 9 === rf.aDM ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === rf.aDM ?
				0 : 10 === rf.aDM ? 1 : 2), eq.selectedPlayer = aDO, eq.isContest = rf.aDS, eq.mapType = bS.aDT(rf.eT) ? 0 : 1, bS.aDU(eq, rf.eT), eq.mapSeed = rf.mapSeed, eq.humanCount = aDN.length);
		eq.selectableSpawn = 1 === eq.gameMode || aDV < 100, eq.colorsData = new Uint32Array(aDV), eq.playerNamesData = new Array(aDV);
		for (var aB = 0; aB < aDV; aB++) eq.colorsData[aB] = aDN[aB].color, eq.playerNamesData[aB] = aDN[aB].username;
		if (2 === eq.battleRoyaleMode)
			for (eq.elo = new Uint16Array(aDV), aB = 0; aB < aDV; aB++) eq.elo[aB] = aDN[aB].elo;
		aa.setState(8), bS.a7(rf.eT, eq.mapSeed), aD.a4d(), aD.a4b = 2
	}
}

function aCf() {
	var dz = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aDW = [bB.nx, bB.nx, bB.ny, bB.oR, bB.oS, bB.oE, bB.oX, bB.ny, bB.or, bB.oh, bB.ot],
		aDX = [
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
		aDY = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aDl(rh, sn, aDn) {
		for (var f7 = rh.length - 1; 0 <= f7; f7--) {
			var qS = rh[f7];
			0 === qS.id && qS.sn === sn && (qS.r = "[Redacted Message]", aDn) && (qS.aDo = 1)
		}
	}
	this.rm = function(aDZ) {
		var aDa, a0q;
		return aDZ.id < 5 && (aDa = "@" + bF.ss.zP(aDZ.sn, 5)), 0 === aDZ.id ? aDa + ": " + aDZ.r : 1 === aDZ.id ? (a0q = "@" + bF.ss.zP(aDZ.target, 5), 0 === aDZ.aDb ? 32768 <= aDZ.value ? aDa + " voted with " + (aDZ.value - 32768 + 1) +
				" gold against " + a0q + " to weaken the latter's admin position. 📉" : aDa + " voted with " + (aDZ.value + 1) + " gold for " + a0q + " to strengthen the latter's admin position. 💪" : 1 === aDZ.aDb ? aDa + " sent " + Math.floor(
					aDZ.value / 100) + " 🧈 gold to " + a0q + "." : aDa + " voted with " + (aDZ.value / 10).toFixed(1) + " points for " + a0q + " to acknowledge the latter as clan leader. ✅") : 2 === aDZ.id ? 0 === aDZ.aDb ? aDa +
			" was 🔇 muted for 1 Hour." : 1 === aDZ.aDb ? "The username of " + aDa + " was ✂️ redacted. Duration: 1 Day" : aDa + " 👢 was kicked." : 3 === aDZ.id ? aDa + bo.eB(aDZ.aDb, bo.e5[aDZ.aDb][aDZ.value]) + "@" + bF.ss.zP(aDZ.target, 5) +
			bo.eD(aDZ.aDb, bo.e5[aDZ.aDb][aDZ.value]) : 4 === aDZ.id ? aDa + bo.eB(5, bo.e5[5][aDZ.aDb]) + "@" + bF.ss.zP(aDZ.target, 5) + bo.eD(5, bo.e5[5][aDZ.aDb]) : 5 === aDZ.id ? aDY[aDZ.aDb] : 6 === aDZ.id ? "You are about to mention " +
			aDZ.value + " player" + (1 === aDZ.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDZ.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aDZ.id ? aDZ.r : void 0
	}, this.rl = function(aDZ, a6z) {
		return {
			aDZ: aDZ,
			r: a6z,
			aDc: 0,
			fontSize: 1,
			rp: 0,
			aDd: aDZ.id ? bB.oQ : bB.nj
		}
	}, this.u0 = function(player, rd) {
		return (2 === rd ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.u1 = function(u2) {
		return aDW[u2]
	}, this.aDe = function(u2, a3p) {
		return u2 < 3 || 7 === u2 ? aDX[u2][0] : 4 === u2 ? aDX[u2][a3p < 1 ? 0 : a3p < 10 ? 1 : 2] : aDX[u2][a3p < 10 ? 0 : 1]
	}, this.aDf = function(a3p) {
		return 0 === a3p
	}, this.aDB = function(rd, sn) {
		for (var tw = bn.tv.tw, tv = tw[rd], en = tv.length, aB = 0; aB < en; aB++)
			if (sn === tv[aB].sn) return tv[aB];
		for (var f7 = 0; f7 < tw.length; f7++)
			if (rd !== f7)
				for (en = (tv = tw[f7]).length, aB = 0; aB < en; aB++)
					if (sn === tv[aB].sn) return tv[aB];
		return null
	}, this.u3 = function(qS) {
		return !!bn.aCZ && qS.sn === bn.aCZ.sn
	}, this.aDg = function(tv, aDh, aDi) {
		var a0n = [];
		loop: for (var aB = aDh; aB < aDi; aB++) {
			var a0o = bA.rZ.a0p(tv[aB].username);
			if (a0o) {
				for (var f7 = a0n.length - 1; 0 <= f7; f7--)
					if (a0o === a0n[f7].name) {
						a0n[f7].gG++;
						continue loop
					} a0n.push({
					name: a0o,
					gG: 1
				})
			}
		}
		if (a0n.sort(function(f6, f7) {
				return f7.gG - f6.gG
			}), 0 === a0n.length) return "";
		for (var qH = a0n[0].name + ": " + a0n[0].gG, aB = 1; aB < a0n.length; aB++) qH += "   " + a0n[aB].name + ": " + a0n[aB].gG;
		return qH
	}, this.aDj = function(u2, a3p, aCq) {
		return 0 === dz[u2].length ? "Rank: " + (a3p + 1) : dz[u2] + " Rank: " + (a3p + 1) + (3 !== u2 && aCq < 100 ? "   " + dz[3] + " Rank: " + (aCq + 1) : "")
	}, this.aDk = function(sn) {
		for (var rg = bn.y.rg, aB = 0; aB < rg.length; aB++) aDl(rg[aB].rh, sn);
		aDl(bn.message.aDm(), sn, 1), bn.rq.aDk(sn)
	}
}

function aCi() {
	var sI = 0,
		aDp = 0,
		aDq = 0,
		aDr = null,
		aDs = null;

	function aDv(qS, aDw, aDx) {
		var qH = qS.username;
		return (qH += "   " + bn.kz.aDj(qS.u2, qS.a3p, qS.aCq)) + function(qS) {
			qS = qS.vv;
			if (qS < 1e3) return "   Gold: " + qS;
			if ((qS %= 1024) < 1e3) return "   Gold: " + qS + "k";
			return "   Gold: " + (qS - 999) + "M"
		}(qS) + ("   IP: " + bF.ss.zP(qS.aCr, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aDx ? aDp : aDu(qS, aDw)])
	}

	function aDu(qS, aDw) {
		return aDp = aDw || bn.tv.aDB(qS.sn) ? 1 : 0
	}
	this.aDt = function() {
		!sI || aDp === aDu(aDs) && aDq === aDs.vv || (aDq = aDs.vv, aDr.show(-1, -1, aDv(aDs, 0, 1), 1, 1))
	}, this.u5 = function(e, qS, aDw) {
		var a8Y = e.target.getBoundingClientRect();
		this.show(a8Y.left, a8Y.top, qS, 0, aDw), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.tt && bn.tt.rr(1)
		})
	}, this.show = function(eu, ew, qS, sM, aDw) {
		aDr = aDr || new sG, aDq = (aDs = qS).vv, aDr.show(eu, ew, aDv(qS, aDw), sM), sI = 1
	}, this.rr = function(sS) {
		aDr && aDr.rr(sS) && (sI = 0, aDs = null)
	}
}

function aCg() {
	function aE2(aE4) {
		bn.y.aCv && 1 === bn.y.re[2] && t.a59(29).aE5(), bn.y.aCv = 0, t.a59(29).aE6(), 0 !== bn.y.rg[bn.y.re[0]].tg && !aE4 || t.a59(29).aE7(), bn.tt.aDt()
	}
	this.rg = new Array(4), this.re = [0, 0, 1, 0], this.aCv = 0, this.aDz = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rg.length; aB++) this.rg[aB] = new aE0;
		this.re[0] = bj.eK.data[158].value
	}, this.aE1 = function() {
		aE2(!0), bn.aCb.dd()
	}, this.aDI = function() {
		bn.aCb.aDI();
		for (var aB = 0; aB < bn.y.rg.length; aB++) {
			var rf = bn.y.rg[aB];
			0 === rf.tg ? rf.aE8 = 0 : (rf.aE9 = Math.max(rf.aE9 - rf.aE8 % 2, 0), rf.aE8++)
		}
		aE2(!1)
	}, this.aEA = function(rd) {
		this.re[0] !== rd || this.re[2] || t.a59(29).aEB()
	}
}

function aCk() {
	var aEC = 0,
		aED = "",
		aEE = 0,
		aEF = 0,
		aEG = 0;

	function aEI(a6z) {
		b0.aET.aEU(3, a6z)
	}

	function aER(gG) {
		aEC = 1, bn.message.aDG({
			id: 6,
			value: gG
		})
	}

	function aEL(r) {
		var aEX = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEX)
	}
	this.a0C = function(r) {
		var aEH, g, aEN;
		if (aEC) return aEC = 0, "yes" === (aEH = r.toLowerCase()) || "y" === aEH ? void aEI(aED) : void bn.message.aDG({
			id: 5,
			aDb: 7
		});
		!(r.indexOf("@") < 0) && (aEH = aEL(r)) ? (aED = r, g = function(aEK) {
			for (var en = aEK.length, aEV = [0, 0, 0, 0], aB = 0; aB < en; aB++)
				for (var i = aEK[aB], f6 = 0; f6 < 4; f6++) i === "@room" + (f6 + 1) && (aEV[f6] = 1);
			if ((aEF = bA.qi.a2a(aEV)) % 4 == 0) return bA.qi.a2s(bn.tv.tw);
			for (f6 = 0; f6 < 4; f6++) aEV[f6] = aEV[f6] ? bn.tv.tw[f6] : [];
			return bA.qi.a2s(aEV)
		}(aEH), function(aEK, aEN, r) {
			if (!aEE) return;
			for (var en = aEN.length, aB = 0; aB < en; aB++) 2 === aEN[aB].id && (r = r.replace(aEK[aEN[aB].e8], "@" + aEN[aB].fF));
			return aEC = 1, aEI((aED = r).slice(0, 126) + "|"), 1
		}(aEH, aEN = function(aEK) {
			for (var aEN = [], en = (aEG = aEE = 0, aEK.length), aB = 0; aB < en; aB++) {
				var i = aEK[aB],
					l5 = i.length;
				bA.rZ.startsWith(i, "@[") ? l5 <= 9 && bA.rZ.a3Q(i, "]") && aEN.push({
					id: 0,
					fF: i.substring(2, l5 - 1).toUpperCase()
				}) : 6 === l5 ? bA.rZ.startsWith(i, "@room") || (aEG++, aEN.push({
					id: 1,
					fF: bG.ss.wN(i.substring(1))
				})) : 1 < l5 && l5 < 5 && 0 <= (l5 = b7.data.aCC(i.substring(1))) && (aEN.push({
					id: 2,
					fF: l5,
					e8: aB
				}), aEE = 1)
			}
			return aEN
		}(aEH), r) || (0 === aEN.length ? aEF || function(aEK) {
			for (var en = aEK.length, aB = 0; aB < en; aB++) {
				var i = aEK[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aEH) ? aER(g.length) : aEI(r) : aEH.length === aEG ? aEI(r) : (function(g, aEN) {
			var l5 = aEN.length;
			if (0 === l5) return;
			var en = g.length;
			loop: for (var aB = en - 1; 0 <= aB; aB--) {
				for (var f6 = 0; f6 < l5; f6++)
					if (0 === aEN[f6].id) {
						if (aEN[f6].fF === bA.rZ.a0p(g[aB].username)) continue loop
					} else if (1 === aEN[f6].id && aEN[f6].fF === g[aB].sn) continue loop;
				g[aB] = g[--en], g.pop()
			}
		}(g, aEN), aER(g.length)))) : aEI(r)
	}, this.aEY = function(r) {
		var aEK = aEL(r);
		if (aEK)
			for (var a5 = new RegExp("^[0-9]+$"), en = aEK.length, aB = 0; aB < en; aB++) {
				var i = aEK[aB].substring(1),
					l5 = i.length;
				1 <= l5 && l5 <= 3 && a5.test(i) && (l5 = parseInt(i, 10), !isNaN(l5)) && 0 <= l5 && l5 < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[l5]))
			}
		return r
	}
}

function aCj() {
	var aEZ, aEa = [],
		aEb = -1,
		aEc = 0,
		aEd = 0;

	function aEh() {
		aEc = bf.eM, (3 === this.u9 ? (aEd = 1, aEg) : (aEb = (aEa.length + aEb + 2 * this.u9 - 1) % aEa.length, aEf))()
	}

	function aEf() {
		0 !== aEa.length && (aEd = 0, aEZ && aEZ.uC(), (aEZ = new u6(aEh)).s3(aEb, aEa.length), aEZ.show(aEa[aEb]), bn.message.resize())
	}

	function aEg() {
		aEZ && aEZ.uC(), (aEZ = new uD(aEf)).s3(aEa.length), aEZ.show(), bn.message.resize()
	}
	this.aDG = function(aDZ) {
		var qS;
		2 === aDZ.id && 3 === aDZ.aDb ? bn.kz.aDk(aDZ.sn) : (qS = bn.kz.rl(aDZ, bn.kz.rm(aDZ)), (5 !== aDZ.id && 6 !== aDZ.id || (t.a59(29).aEe().ro(qS), 5 === aDZ.id)) && (qS = bf.eM < aEc + 2e4, aEb !== aEa.length - 1 && qS || (aEb = aEa
			.length), aEa.push(aDZ), bj.eK.data[14].value || 7 === aDZ.id || bp.play(), aEZ) && (bj.eK.data[13].value || aEd && qS ? aEZ.s3(aEa.length) : aEf()))
	}, this.show = function() {
		aEg()
	}, this.rr = function() {
		aEb = aEa.length - 1, aEZ && aEZ.uC(), aEZ = null
	}, this.resize = function() {
		aEZ && aEZ.resize()
	}, this.aDm = function() {
		return aEa
	}
}

function aCh() {
	var aEi = null,
		aEj = null,
		aEk = 0,
		aEl = 0,
		aEm = null;

	function aEo() {
		0 !== aEj.u2 && (bn.uI.rr(), t.u(8, 29, new sq(25, {
			sr: 0,
			sn: bF.ss.zP(aEj.sn, 5),
			so: 0
		}, 29)))
	}

	function aEp() {
		var eu = aEi.eu,
			ew = aEi.ew;
		bn.uI.rr(), aEi = new uE([new w("Kick User", function() {
			aEv(0, 0)
		}, aEy(0, 0)), new w("Block Chat", aEw, aEy(1, 0)), new w("Censor Username", aEx, aEy(2, 0))]), aEu(eu, ew), aEk = 2, aEl = 1
	}

	function aEy(id, e8) {
		var e7, aCq;
		return !bn.aCZ || bn.kz.u3(aEj) || (e7 = aEj.a3p) <= (aCq = bn.aCZ.aCq) || 1 - bo.e6(id, aCq, e8) ? 1 : 4 === aEj.u2 ? 50 <= e7 ? +(e7 <= aCq) : 20 <= e7 ? +(e7 / 2 <= aCq) : +(e7 / 3 <= aCq) : 0
	}

	function aEs() {
		return !bn.aCZ || bn.kz.u3(aEj) ? 1 : 0
	}

	function aEr() {
		var eu = aEi.eu,
			ew = aEi.ew,
			aEz = (bn.uI.rr(), aEs());
		aEi = new uE([new w(bo.e5[5][0], function() {
			aEv(5, 0)
		}, aEz), new w(bo.e5[5][1], function() {
			aEv(5, 1)
		}, aEz), new w(bo.e5[5][2], function() {
			aEv(5, 2)
		}, aEz), new w(aEj.aCq < 100 ? "Stealth Report" : bo.e5[5][3], function() {
			aEv(5, 3)
		}, aEz)]), aEu(eu, ew), aEl = aEk = 2
	}

	function aEt() {
		29 === t.sp && t.a58().aCa(bF.ss.zP(aEj.sn, 5))
	}

	function aEv(id, value) {
		b0.aET.aEU(5, {
			id: id,
			value: value,
			sn: aEj.sn
		})
	}

	function aEw() {
		var eu = aEi.eu,
			ew = aEi.ew;
		bn.uI.rr(), aEi = new uE([new w(bo.e5[1][0], function() {
			aEv(1, 0)
		}, aEy(1, 0)), new w(bo.e5[1][1], function() {
			aEv(1, 1)
		}, aEy(1, 1)), new w(bo.e5[1][2], function() {
			aEv(1, 2)
		}, aEy(1, 2)), new w(bo.e5[1][3], function() {
			aEv(1, 3)
		}, aEy(1, 3)), new w(bo.e5[1][4], function() {
			aEv(1, 4)
		}, aEy(1, 4))]), aEu(eu, ew), aEk = 3, aEl = 1
	}

	function aEx() {
		var eu = aEi.eu,
			ew = aEi.ew;
		bn.uI.rr(), aEi = new uE([new w(bo.e5[2][0], function() {
			aEv(2, 0)
		}, aEy(2, 0)), new w(bo.e5[2][1], function() {
			aEv(2, 1)
		}, aEy(2, 1)), new w(bo.e5[2][2], function() {
			aEv(2, 2)
		}, aEy(2, 2))]), aEu(eu, ew), aEk = 3, aEl = 2
	}

	function aEu(eu, ew, uK) {
		aEi.show(eu, ew, uK), bn.tt.show(aEi.eu, aEi.ew, aEj, 1)
	}
	this.aEn = function(e, qS) {
		aEk = 1, aEj = qS, aEi = new uE([new w(L(127), aEo, 0 === qS.u2 ? 1 : 0), new w(L(128), aEp, function() {
			if (!bn.aCZ) return 1;
			if (bn.kz.u3(aEj)) return 1;
			if (100 <= bn.aCZ.aCq) return 1;
			if (bn.aCZ.aCq >= aEj.a3p) return 1;
			return 0
		}()), new w(L(129, 0, "🚩 Report"), aEr, aEs()), new w(L(130), aEt, 0)]), aEu((aEm = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aEm.clientY, 1)
	}, this.a2A = function(code) {
		if (29 !== t.sp) return !1;
		if (!aEj) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.rr();
			else if (bA.rZ.startsWith(code, "Numpad") || bA.rZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aEk) this.aEn(aEm, aEj);
				else {
					if (!aEi) return !1;
					1 === aEk ? code <= 1 ? aEo() : 2 === code ? aEp() : 3 === code ? aEr() : (aEt(), this.rr()) : 2 === aEk ? 1 === aEl ? code <= 1 ? (aEv(0, 0), this.rr()) : (2 === code ? aEw : aEx)() : (aEv(5, bL.hv(code - 1, 0, 3)), this
					.rr()) : (aEv(aEl, bL.hv(code - 1, 0, bo.e5[aEl].length - 1)), this.rr())
				}
		}
		return !0
	}, this.rr = function() {
		aEk = 0, aEi && aEi.rr(), aEi = null, bn.tt.rr()
	}
}

function aE0() {
	this.tg = 0, this.eT = 0, this.mapSeed = 0, this.aDM = 0, this.aF2 = 0, this.aF3 = 0, this.aDS = 0, this.aE9 = 0, this.spawningSeed = 0, this.a1O = 0, this.aDQ = 0, this.rh = [], this.ri = 1048575, this.aE8 = 0, this.aF4 = [{
		eT: 0,
		mapSeed: 0,
		aDM: 0,
		eM: 100,
		aDS: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aDM: 1,
		eM: 200,
		aDS: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aDM: 2,
		eM: 300,
		aDS: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aDM: 3,
		eM: 400,
		aDS: 0
	}, {
		eT: 0,
		mapSeed: 0,
		aDM: 9,
		eM: 500,
		aDS: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aDM: 10,
		eM: 600,
		aDS: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aDM: 8,
		eM: 700,
		aDS: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aDM: 3,
		eM: 800,
		aDS: 0
	}]
}

function aCl() {
	var aF5 = [],
		t2 = [],
		aF6 = [];

	function aF8(qS) {
		for (var r = qS.r, aF7 = [];;) {
			var f8 = function aFA(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qH = r.substring(position + 1, position + 6);
				if (5 !== qH.length) return aFA(r, position + 1);
				if (bA.rZ.startsWith(qH, "room")) return aFA(r, position + 1);
				var aFG = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aFG.test(qH)) return aFA(r, position + 1);
				aFG = r.substring(position + 6, position + 7);
				if (1 !== aFG.length) return position;
				qH = new RegExp("^[ :!.]+$");
				if (!qH.test(aFG)) return aFA(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f8) {
				aF7.push(aFB(r, qS));
				break
			}
			0 === f8 ? aF7.push(aFC(r.substring(1, 6), qS, f8)) : (aF7.push(aFB(r.substring(0, f8), qS)), aF7.push(aFC(r.substring(f8 + 1, f8 + 6), qS, f8))), r = r.substring(f8 + 6)
		}
		return aF7
	}

	function aFC(qH, qS, f8) {
		var aCs = function(qH) {
				var sn = bG.ss.wN(qH),
					aCs = bn.tv.aDB(sn);
				if (aCs) {
					for (aF5.push(aCs); 75 < aF5.length;) aF5.shift();
					return aCs
				}
				for (var aCn = bn.tv.aCn, aB = aCn.length - 1; 0 <= aB; aB--)
					if (aCs = aCn[aB], sn === aCs.sn) return aF5.push(aCs), aCs;
				for (aB = aF5.length - 1; 0 <= aB; aB--)
					if (aCs = aF5[aB], sn === aCs.sn) return aF5.push(aCs), aCs;
				return bn.tv.aCt(sn, qH, 1, 999999, 999999, 0, 0, 0, 0)
			}(qH),
			qH = (0 === f8 && 0 === qS.aDZ.id && qS.rp && (qS.fontSize = bn.kz.aDe(aCs.u2, aCs.a3p), qS.aDc = bn.kz.aDf(aCs.a3p)), document.createElement("span"));
		return qH.textContent = function(aCs, qS, f8) {
			if (aCs.aD2) return aCs.aD2--, f8 = 2 === qS.aDZ.id || (3 === qS.aDZ.id || 4 === qS.aDZ.id) && 0 !== f8, aCs.username + (f8 ? " (" + aCs.aD1 + ")" : "");
			if (qS.aDZ.aDo) return "Redacted " + bF.ss.zP(aCs.sn, 2);
			return aCs.username
		}(aCs, qS, f8), qH.style.display = "inline-block", qH.style.color = bn.kz.u1(aCs.u2), qH.style.cursor = "pointer", qH.style.margin = "0", qH.style.font = "inherit", qH.style.minWidth = qH.style.minHeight = "1em", bn.kz.u3(aCs) && (qH
			.style.textDecoration = "underline"), aCs.u4 && (qH.style.textDecorationLine = "underline", qH.style.textDecorationStyle = "dotted"), bn.kz.aDf(aCs.a3p) && (qH.style.fontWeight = "bold"), qH.onclick = function(e) {
			bn.uI.aEn(e, aCs)
		}, bJ.r2() || (qH.onmouseover = function(e) {
			bn.tt.u5(e, aCs)
		}), t2.push(qH), qH
	}

	function aFB(r, qS) {
		var rY = document.createElement("span");
		return rY.textContent = r, rY.style.color = qS.aDd, rY.style.margin = "0", rY.style.font = "inherit", rY
	}

	function aFL(aCs, aD0, sn) {
		sn !== aCs.sn || aCs.aD1 || (aCs.aD1 = aCs.username, aCs.aD2 = 3, aCs.username = aD0)
	}
	this.uC = function() {
		for (var aB = 0; aB < t2.length; aB++) t2[aB].onclick = t2[aB].onmouseover = null;
		aF6 = t2 = null
	}, this.transform = function(qS) {
		for (var qF = document.createElement("div"), aF7 = aF8(qS), aB = 0; aB < aF7.length; aB++) qF.appendChild(aF7[aB]);
		0 === qS.aDZ.id && (qF.vx143 = qS.aDZ, aF6.push(qF)), qF.style.margin = "0.6em 0.6em", qS.rp && (qF.style.marginLeft = qF.style.marginRight = "inherit"), qF.style.font = "inherit";
		var aF9 = 0 < qS.aDZ.id;
		return qS.aDc && (qF.style.fontWeight = "bold"), aF9 && (qF.style.paddingLeft = "0.7em"), aF9 && (qF.style.fontStyle = "italic"), qF.style.fontSize = qS.fontSize.toFixed(2) + "em", qF
	}, this.aFJ = function(aFK) {
		if (aFK && (2 === aFK.id && 1 === aFK.aDb || 3 === aFK.id && 2 === aFK.aDb)) {
			var sn = 3 === aFK.id ? aFK.target : aFK.sn;
			if (!bn.tv.aDB(sn)) {
				for (var aD0 = "Redacted " + bF.ss.zP(sn, 2), aCn = bn.tv.aCn, aB = aCn.length - 1; 0 <= aB; aB--) aFL(aCn[aB], aD0, sn);
				for (aB = aF5.length - 1; 0 <= aB; aB--) aFL(aF5[aB], aD0, sn)
			}
		}
	}, this.aDk = function(sn) {
		for (var aFM = aF6, aB = aFM.length - 1; 0 <= aB; aB--) {
			var eq = aFM[aB];
			if (eq.vx143.sn === sn) {
				for (; eq.firstChild;) t.removeChild(eq, eq.firstChild);
				eq.vx143.r = "[Redacted Message]";
				for (var aF7 = aF8(bn.kz.rl(eq.vx143, bn.kz.rm(eq.vx143))), f6 = 0; f6 < aF7.length; f6++) eq.appendChild(aF7[f6]);
				aFM.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aFN, aFO, aFP;

	function aFU(aB) {
		var button = aY.r9[aB],
			eu = button.eu,
			ew = button.ew,
			i = button.i,
			j = button.j;
		uj.fillStyle = button.aFS, uj.fillRect(eu, ew, i, j), aB === aFN && (uj.fillStyle = aFP, uj.fillRect(eu, ew, i, j)), uj.lineWidth = bc.z6, uj.strokeStyle = aFO, uj.strokeRect(eu, ew, i, j),
			function(button) {
				var eu = button.eu,
					ew = button.ew,
					i = button.i,
					j = button.j;
				bA.qa.textAlign(uj, 1), bA.qa.textBaseline(uj, 1), uj.font = button.font, uj.fillStyle = aFO, uj.fillText(button.a6z, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ew = 0, this.gap = 0, this.dd = function() {
		aFN = -1, aFO = bB.nj, aFP = "rgba(255,255,255,0.16)", this.r9 = new Array(7), this.j = Math.floor((a0.a1.hw() ? .123 : .093) * h.hx), this.i = Math.floor((a0.a1.hw() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aFQ = Math.floor(.26 * this.j),
			aFR = bA.qa.sP(1, aFQ);
		this.r9[0] = {
			eu: 0,
			ew: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a6z: "Multiplayer",
			font: aFR,
			aFS: "rgba(22,88,22,0.8)",
			fontSize: aFQ
		}, aFQ = Math.floor(.18 * this.j), aFR = bA.qa.sP(1, aFQ), this.r9[1] = {
			eu: 0,
			ew: 0,
			i: this.i - this.r9[0].i - this.gap,
			j: this.j,
			a6z: "Single Player",
			font: aFR,
			aFS: "rgba(22,88,88,0.8)",
			fontSize: aFQ
		}, this.r9[2] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6z: "",
			font: this.r9[1].font,
			aFS: "rgba(100,0,0,0.8)",
			fontSize: this.r9[1].fontSize
		}, this.r9[3] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: this.j,
			a6z: "Back",
			font: this.r9[0].font,
			aFS: "rgba(0,0,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.r9[4] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6z: "The game was updated!",
			font: this.r9[1].font,
			aFS: "rgba(100,0,0,0.8)",
			fontSize: this.r9[1].fontSize
		}, this.r9[5] = {
			eu: 0,
			ew: 0,
			i: this.r9[0].i,
			j: Math.floor(.8 * this.j),
			a6z: "Reload",
			font: this.r9[0].font,
			aFS: "rgba(0,100,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.r9[6] = {
			eu: 0,
			ew: 0,
			i: this.r9[1].i,
			j: this.r9[5].j,
			a6z: "Back",
			font: this.r9[0].font,
			aFS: "rgba(0,0,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.a9X()
	}, this.a9X = function() {
		this.ew = Math.floor(.54 * h.j), this.r9[0].eu = Math.floor(.5 * h.i - .5 * this.i), this.r9[1].eu = this.r9[0].eu + this.r9[0].i + this.gap, this.r9[2].eu = this.r9[3].eu = this.r9[0].eu, this.r9[4].eu = this.r9[5].eu = this.r9[0].eu,
			this.r9[6].eu = this.r9[1].eu, this.r9[0].ew = Math.floor(.54 * h.j), this.r9[1].ew = this.r9[0].ew, this.r9[2].ew = Math.floor((h.j - this.r9[2].j - this.r9[3].j - this.gap) / 2), this.r9[3].ew = this.r9[2].ew + this.r9[2].j + this
			.gap, this.r9[4].ew = Math.floor((h.j - this.r9[4].j - this.r9[5].j - this.gap) / 2), this.r9[5].ew = this.r9[6].ew = this.r9[4].ew + this.r9[4].j + this.gap
	}, this.aFT = function() {
		aFU(0), aFU(1)
	}, this.aFV = function() {
		aFU(2), aFU(3)
	}, this.aFW = function() {
		aFU(4), aFU(5), aFU(6)
	}, this.a1c = function(eu, ew, mV) {
		var aB = -1;
		return 0 === aa.a1J() ? aB = this.a26(eu, ew, 0, 2) : 3 === aa.a1J() ? aB = this.a26(eu, ew, 3, 1) : 5 === aa.a1J() && (aB = this.a26(eu, ew, 5, 2)), aFN !== aB && (aFN = aB, mV) && (bf.dl = !0), -1 !== aB && (aT.rb(), !0)
	}, this.a26 = function(eu, ew, aFX, size) {
		for (var aB = aFX; aB < aFX + size; aB++)
			if (eu >= this.r9[aB].eu && ew >= this.r9[aB].ew && eu <= this.r9[aB].eu + this.r9[aB].i && ew <= this.r9[aB].ew + this.r9[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aFZ, aFa, a7A, aFb, aFc, aFd, aFe, aFf, aFg, a79, aFh, aFi, aFj, aFk = 1;

	function aFm(aFn) {
		!aFn && 1 === aFj && aFk ? (aFk = 0, b0.y.close(aFj, 3280)) : aFj = (aFj + 1) % b0.y.aFo, aFi = bf.eM, b0.y.aFp(aFj, 4) && b0.aET.aFq(aFj)
	}

	function aFr() {
		0 === aFj ? o.a1R(3249) : aFm()
	}

	function aFw(ew, a9F, tg) {
		var n9 = Math.floor((h.i - aFb) / 2) + aFe,
			nM = n9 + Math.floor(tg * (aFb - 2 * aFe));
		uj.lineWidth = a9F, uj.beginPath(), uj.moveTo(n9, ew), uj.lineTo(nM, ew), uj.lineTo(Math.floor(n9 - aFe + tg * aFb), ew + a7A), uj.lineTo(n9 - aFe, ew + a7A), uj.closePath()
	}
	this.aFl = 1, this.dd = function() {
		aa.setState(6), aFZ = 0, aFa = 1, aFf = "rgba(0,220,120,0.4)", aFg = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aFk = 1, aFj = this.aFl - 1, aFm(1)
	}, this.resize = function() {
		aFb = Math.floor((a0.a1.hw() ? .5 : .25) * h.hx), aFc = aFb + 12, a7A = Math.floor(.125 * aFb), aFe = 3 * a7A, aFd = Math.floor(.225 * aFb), aFh = Math.floor(.3 * a7A), a79 = bA.qa.sP(0, aFh)
	}, this.a1N = function(a1E) {
		a1E === aFj && aFr()
	}, this.h0 = function(eu, ew) {
		var n9 = Math.floor((h.i - aFc) / 2),
			nA = Math.floor(.5 * (h.j - bc.gap - a7A - aFd)) + a7A + bc.gap;
		return n9 < eu && eu < n9 + aFc && nA < ew && ew < nA + aFd && (this.a2H(), aY.a1c(eu, ew, !1), !0)
	}, this.a2H = function() {
		b0.y.a1S(3260), t.y.z()
	}, this.j3 = function() {
		6 === aa.a1J() && (bf.eM > aFi + 12e3 && aFr(), 100 < (aFZ += .07 * aFa * (aFZ < 16 ? 5 + aFZ : 84 < aFZ ? 105 - aFZ : 17)) ? (aFZ = 100, aFa = -1) : aFZ < 0 && (aFZ = 0, aFa = 1), aFf = "rgba(0," + Math.floor(190 - 1.9 * aFZ) + "," +
			Math.floor(120 - 1.2 * aFZ) + "," + (.4 + .004 * aFZ) + ")", aFg = "rgba(0," + Math.floor(1.9 * aFZ) + "," + Math.floor(1.2 * aFZ) + "," + (.8 - .004 * aFZ) + ")", bf.dl = !0)
	}, this.ui = function() {
		var eu = Math.floor((h.i - aFc) / 2),
			ew = Math.floor(.5 * (h.j - bc.gap - a7A - aFd));
		! function(title, ew, a9F, tg) {
			uj.fillStyle = aFg, aFw(ew, a9F, 1), uj.fill(), uj.fillStyle = aFf, aFw(ew, a9F, tg), uj.fill(), uj.strokeStyle = bB.nj, aFw(ew, a9F, 1), uj.stroke(),
				function(aFy, ew) {
					bA.qa.textAlign(uj, 1), bA.qa.textBaseline(uj, 1), uj.font = a79, uj.fillStyle = bB.nj, uj.fillText(aFy, Math.floor(.5 * h.i), Math.floor(ew + .58 * a7A))
				}(title, ew)
		}(L(131), ew, 3, aFZ / 100),
		function(eu, ew, i, j, a6z) {
			uj.fillStyle = bB.ne, uj.fillRect(eu, ew, i, j), uj.lineWidth = 3, uj.strokeStyle = bB.nj, uj.strokeRect(eu, ew, i, j);
			var en = Math.floor(.3 * j);
			bA.qa.textAlign(uj, 1), bA.qa.textBaseline(uj, 1), uj.font = bA.qa.sP(0, en), uj.fillStyle = bB.nj, uj.fillText(a6z, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * en))
		}(eu, ew + a7A + bc.gap, aFc, aFd, L(37))
	}
}

function cR() {
	var a1A = 0;
	this.dd = function() {
		aY.dd(), a1A = 0
	}, this.setState = function(aFz) {
		a1A = aFz
	}, this.a1J = function() {
		return a1A
	}, this.aG0 = function() {
		this.setState(8), t.x()
	}, this.a2A = function(e) {
		if (!bS.wd) return !1;
		if (!(bf.eM < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aG1()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1A) return !0;
					if (7 === a1A) return !0
				}
			}
			return !1
		}
	}, this.aG2 = function() {
		bZ.resize()
	}, this.aG1 = function() {
		return !!bZ.rr()
	}, this.h0 = function(eu, ew) {
		!bS.wd || bZ.h0(eu, ew) || 6 === a1A && aZ.h0(eu, ew) || bY.h0(eu, ew) || aT.h0(eu, ew)
	}, this.a1c = function(eu, ew) {
		!aT.a9Q && aY.a1c(eu, ew, !0) || aT.a1c(eu, ew)
	}, this.click = function(eu, ew) {
		aT.a21()
	}, this.a1f = function(eu, ew, deltaY) {}, this.aG3 = function() {
		aY.a9X(), bf.dl = !0
	}, this.ui = function() {
		8 !== a1A && 10 !== a1A && (uj.imageSmoothingEnabled = !0, this.yC(), 0 !== a1A && (aT.ui(), aO.ui(), this.aG4(), bY.ui()), 0 !== a1A && 6 === a1A && aZ.ui(), bZ.ui(), t.ui())
	}, this.yC = function() {
		var aG6, aG5;
		if (__fx.makeMainMenuTransparent) uj.clearRect(0, 0, h.i, h.j);
		else bS.wd ? (aG5 = h.i / bS.ey, aG6 = h.j / bS.ez, uj.setTransform(aG5 = aG6 < aG5 ? aG5 : aG6, 0, 0, aG5, Math.floor((h.i - aG5 * bS.ey) / 2), Math.floor((h.j - aG5 * bS.ez) / 2)), uj.drawImage(bS.wf, 0, 0), uj.setTransform(1, 0, 0, 1,
			0, 0), uj.fillStyle = bB.ne) : uj.fillStyle = bB.na, uj.fillRect(0, 0, h.i, h.j)
	}, this.aG4 = function() {
		var ew = Math.floor(.3 * h.j),
			canvas = ab.aG7("territorial.io"),
			ho = (ho = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : ho,
			eu = (uj.globalAlpha = .15, uj.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - ho * canvas.width))),
			eu = Math.floor(eu / ho),
			ew = Math.floor(ew - .5 * canvas.height * ho),
			ew = Math.floor(ew / ho);
		uj.setTransform(ho, 0, 0, ho, eu, ew), uj.drawImage(canvas, eu, ew), uj.setTransform(1, 0, 0, 1, 0, 0), uj.globalAlpha = 1, uj.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aDQ = 0;
	var aG9, aGA, aGB, aGC, aGD, aGE = this.aG8 = 0;

	function aGH() {
		aGC = aGD = null, aGE = 0
	}
	this.dd = function(rf, aDN, aDO) {
		t.x(), bn.uC(), aa.setState(10), aGC = rf, aGD = aDN, aGE = aDO, this.aDQ = rf.aDQ, this.aG8 = aDO, aG9 = 0, aGA = bf.eM + 4500, b0.y.a1O = rf.a1O, b0.y.a1H === rf.a1O ? (console.log("direct pass"), aGB = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a1H, 3247), aGB = 2, b0.y.aFp(rf.a1O, 5) && b0.p4.aGF()), uj.imageSmoothingEnabled = !0, aa.yC();
		aDN = ab.aG7("loading"), aDO = (a0.a1.hw() ? .396 : .25) * h.hx / aDN.width;
		uj.setTransform(aDO, 0, 0, aDO, Math.floor((h.i - aDO * aDN.width) / 2), Math.floor((h.j - aDO * aDN.height) / 2)), uj.imageSmoothingEnabled = !1, uj.drawImage(aDN, 0, 0), uj.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mT = function() {
		0 < aGB && bf.eM > aGA && (aGB--, aGA += 4500, 0 === bf.aGI) && 0 === bf.k7() && b0.y.aFp(b0.y.a1O, 5)
	}, this.aGJ = function() {
		return 10 === aa.a1J() && (bn.aCc.aDR(aGC, aGD, aGE), aGH(), !0)
	}, this.aGK = function() {
		10 === aa.a1J() && 2 <= ++aG9 && (bn.aCc.aDR(aGC, aGD, aGE), aGH())
	}
}

function cS() {
	var aGM, canvas, a0T, aGN;

	function aGT(e8, name, aGU, qH) {
		a0T[e8] = name, canvas[e8] = new Image, canvas[e8].onload = function() {
			! function(e8, aGU) {
				var a3u, a3v = null;
				7 === aGU ? a3u = bA.a2N.a3x : 8 === aGU ? (a3u = bA.a2N.a40, a3v = .1) : 3 === aGU ? (a3u = bA.a2N.a3y, a3v = .06) : 5 === aGU ? a3u = bA.a2N.a41 : 6 === aGU ? a3u = bA.a2N.a3w : 4 === aGU && (a3u = bA.a2N.a42);
				canvas[e8] = bA.a2N.a3t(canvas[e8], a3u, a3v)
			}(e8, aGU), aGW()
		}, canvas[e8].onerror = function(e) {
			console.error("Error loading image at index", e8, "Error:", e), aGW()
		}, canvas[e8].src = "data:image/png;base64," + qH
	}

	function aGW() {
		aGM--, aGQ()
	}

	function aGQ() {
		0 === aGM && (aGM = -1, aGS(), bf.dl = !0, canvas[7] = aGN, canvas[8] = aGN, canvas[9] = aGN, canvas[10] = aGN, 5 === t.sp) && t.a58().aGY.resize()
	}

	function aGS() {
		aL.a5K(), bY.aCS([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wi = new yd, aj.wi.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aGM = 23, canvas = new Array(aGM), a0T = new Array(aGM), (aGN = document.createElement("canvas")).width = 1;
			for (var aB = aGM - (aGN.height = 1); 0 <= aB; aB--) canvas[aB] = aGN;
			aGS(), aGT(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGT(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGT(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGT(3, "orders", 6,
					"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"
					), aGT(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGT(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGT(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUlJbH11lvH1ltvnZ1CgZo4cWIsXrw4OwMA4As9//zz2QkAAAAAAAAA0GSUZgcAAAAAAAAAAEAhqKysjJYtW2ZnsB4fffRRDBkyJDujSRs7dmy89tpr2RnU0p577hn9+vXLzgCgjvr37x/z58/PzgD4p3fffTcGDBiQnQEA0KQ99NBD8eyzz2ZnAAWguro6xo0bl50BAFArTz/9dHzyySfZGQAAAAAAAADQJBjuAQAAAAAAAACg6HXv3j169eqVnUENbr311pg3b152RpN31VVXZSdQBwMGDIiysrLsDADqYNmyZTF8+PDsDIB/GjVqVCxbtiw7AwCgybvkkkuyE4AC8Ne//jX+8pe/ZGcAANRKdXV1zJ8/PzsDAAAAAAAAAJoEwz0AAAAAAAAAABS9wYMHR4sWLbIzWI8lS5bEsGHDsjOahcsvvzxmz56dnUEtdezY0ec+QBN0/fXXx8SJE7MzAOLPf/5zXHPNNdkZAADNwl133RXTp0/PzgCSjRs3LjsBAKBO3n777ewEAAAAAAAAAGgSDPcAAAAAAAAAAFDUevbsGT179szOoAY333xzLFq0KDuj2XCoXNPyy1/+Mtq2bZudAUAd9e3bN5YsWZKdARSx5cuXxxlnnJGdAQDQrFxyySXZCUCi559/Pu66667sDACAOpkzZ052AgAAAAAAAAA0CYZ7AAAAAAAAAAAoahUVFVFa6jaaQrRw4cI477zzsjOaleuvvz5mzpyZnUEtbbPNNjFmzJjsDADqaO7cuTF69OjsDKCIXX755fHCCy9kZwAANCt33XVX/OUvf8nOAJJcdtll2QkAAHX23HPPZScAAAAAAAAAQJPgxBEAAAAAAAAAAIrWUUcdFfvtt192BjW44YYbYtWqVdkZzc6ll16anUAdHHfccdG5c+fsDADq6NJLL40///nP2RlAEZo5c2YMHjw4OwMAoFkaMWJEVFdXZ2cAjezFF1+MW265JTsDAKDOJk6cGOvWrcvOAAAAAAAAAICCZ7gHAAAAAAAAAICiNXDgwCgpKcnOYD3efffdGDp0aHZGs3TrrbfG9OnTszOopTZt2sTo0aOzMwDYAKecckosWbIkOwMoIqtWrYozzjgjOwMAoNl65JFH4rHHHsvOABrZlVdemZ0AALBB5s+fH++++252BgAAAAAAAAAUPMM9AAAAAAAAAAAUpRNOOCG6du2anUENrrrqqqiqqsrOaLYuvvjiWLduXXYGtXTYYYfFvvvum50BQB29/vrrhgiBRnX55ZfH1KlTszMAAJq1IUOGxCeffJKdATSSF198Ma677rrsDACADfbKK69kJwAAAAAAAABAwTPcAwAAAAAAAABAURo4cGB2AjV466234sILL8zOaNbuvvvuePrpp7MzqKUWLVrEiBEjsjMA2ABXXXVVPPzww9kZQBGYMWNGDBo0KDsDAKDZe+655+KOO+7IzgAawbp166KysjI7AwBgozz33HPZCQAAAAAAAABQ8Az3AAAAAAAAAABQdE4//fTYbbfdsjOoweWXXx7V1dXZGc3e2LFj/XduQr773e/G4Ycfnp0BwAY45ZRTYv78+dkZQDO2fPnyOO2007IzAACKxllnnRVLlizJzgAa2JQpU+LOO+/MzgAA2CgTJ07MTgAAAAAAAACAgme4BwAAAAAAAACAolJaWhpnnHFGdgY1ePnll2PcuHHZGUXh4YcfjsmTJ2dnUEslJSVx/vnnZ2cAsAEWLFgQZ5xxRqxduzY7BWimRo8eHc8++2x2BgBA0Vi0aFFcffXV2RlAA1q7dm0MHTo0OwMAYKNNmTIl3n///ewMAAAAAAAAAChohnsAAAAAAAAAACgqAwcOjE6dOmVnUIPLLrssO6GojBkzJqqqqrIzqKVvfetb8Ytf/CI7A4ANcO+998a1116bnQE0Q48++mhccMEF2RkAAEVn2LBh8corr2RnAA3kD3/4Q0yZMiU7AwCgXsycOTM7AQAAAAAAAAAKmuEeAAAAAAAAAACKRllZWfTt2zc7gxrMnDkzrr/++uyMovL444/HY489lp1BHZx99tlRWurWP4CmqH///vG3v/0tOwNoRubPnx+9e/fOzgAAKErV1dVx7rnnRnV1dXYKUM+WLVsW5557bnYGAEC9+ctf/pKdAAAAAAAAAAAFzbP3AQAAAAAAAAAoGiNHjowddtghO4MaXHTRRdkJRamysjLWrFmTnUEtderUKc4777zsDAA2QHV1dZx00kmxZMmS7BSgGVizZk3069cv5s+fn50CAFC07r///njwwQezM4B6dtVVV8Wrr76anQEAUG8mTJgQVVVV2RkAAAAAAAAAULAM9wAAAAAAAAAAUBTKy8ujd+/e2RnUYPr06XH77bdnZxSladOmxcSJE7MzqIO+fftGeXl5dgYAG+DFF1+MAQMGOBwN2Gjjxo2L+++/PzsDAKDoDRgwwEArNCOzZ8+OIUOGZGcAANSrV199NV5++eXsDAAAAAAAAAAoWIZ7AAAAAAAAAAAoCiNGjIj27dtnZ7Ae69ati8rKyuyMojZixIhYvXp1dga1tO2228bIkSOzMwDYQDfffHNce+212RlAE/bnP/85Bg4cmJ0BAEBEzJ07Ny644ILsDKAeVFVVxaBBg6K6ujo7BQCg3k2ZMiU7AQAAAAAAAAAKluEeAAAAAAAAAACavXbt2sUJJ5yQnUENnnrqqXjooYeyM4rajBkz4sEHH8zOoA5OPPHE6NChQ3YGABuoX79+MW3atOwMoAmaN29eHH/88dkZAAB8ysUXXxxTp07NzgA20n333ef3VQBAs3XHHXdkJwAAAAAAAABAwTLcAwAAAAAAAABAszd69Oho27ZtdgbrUV1dHZWVldkZRMTw4cNj5cqV2RnUUnl5eYwZMyY7A4CNcOyxx8a8efOyM4AmZOXKldG7d29/dwAAFKDTTz89li9fnp0BbKAFCxbEGWeckZ0BANBgnnrqqXj99dezMwAAAAAAAACgIBnuAQAAAAAAAACgWevcuXMcc8wx2RnUYNKkSTFp0qTsDCJi9uzZcd9992VnUAc/+tGPomvXrtkZAGygd955J0466aRYsWJFdgrQRAwdOtT3TwAABWrWrFlx4YUXZmcAG2DdunUxaNCgWLBgQXYKAECD+uMf/5idAAAAAAAAAAAFyXAPAAAAAAAAAADN2rBhw6JNmzbZGazH2rVro7KyMjuDTxk6dGgsX748O4NaatmyZYwcOTI7A4CN8Pjjj8egQYNi3bp12SlAgbv55pvjkksuyc4AAOBzVFZWxlNPPZWdAdTRPffcEzfffHN2BgBAg7vmmmti7dq12RkAAAAAAAAAUHAM9wAAAAAAAAAA0Gx16dIljjzyyOwMavDHP/4xpk6dmp3Bp7z55ptx5513ZmdQBwcddFD06tUrOwOAjXDVVVfFddddl50BFLCpU6dG7969szMAAKiF0047LT744IPsDKCW5s2bF7/4xS+yMwAAGsWcOXPi2Wefzc4AAAAAAAAAgIJjuAcAAAAAAAAAgGarsrIyWrZsmZ3BeqxevTqGDx+encF6VFRUxNKlS7MzqKXS0tKoqKjIzgBgI5122mnxyCOPZGcABeiNN96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGT(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGT(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), aGT(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGT(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGT(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGT(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGT(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGT(14, "bestPlayer", 5,
					"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"
					), aGT(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGT(16, "apple", 3,
					"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"
					), aGT(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGT(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGT(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGT(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGT(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGT(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e8) {
		return canvas[e8]
	}, this.aG7 = function(name) {
		for (var aB = a0T.length - 1; 0 <= aB; aB--)
			if (a0T[aB] === name) return canvas[aB];
		return aGN
	}, this.tH = function() {
		return aGM <= 0
	}, this.aGP = function() {
		aGM = 0, aGQ()
	}
}

function cT() {
	var aGb, aGc, aGd, aGe, aGf, aGg, aGh, aGi, aGj, aGk, aGZ = [
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
		aGa = [
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

	function aGq(jQ, nR) {
		for (var aB = jQ; aB < nR; aB++) aGb[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGc[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGd[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aGp(jQ, nR) {
		for (var colorsData = aD.data.colorsData, aB = jQ; aB < nR; aB++) {
			var fF = colorsData[aB];
			aGb[aB] = 4 * (fF >> 12), aGc[aB] = 4 * (fF >> 6 & 63), aGd[aB] = 4 * (63 & fF)
		}
	}

	function aH1(eR, aH3) {
		aBs[eR] = 0, aBs[eR + 1] = 0, aBs[eR + 2] = aH3, aBs[eR + 3] = 0, aH4(eR)
	}

	function aH4(eR) {
		var eu;
		bb.nZ || (eu = ac.yD(eR), eR = ac.yE(eR), bb.nZ = eu >= ba.aBr[0] && eu <= ba.aBr[2] && eR >= ba.aBr[1] && eR <= ba.aBr[3])
	}
	this.ep = new Int32Array(4), this.de = function() {
		var ep = this.ep;
		ep[0] = -4 * bS.ey, ep[1] = 4, ep[2] = -ep[0], ep[3] = -ep[1]
	}, this.dd = function() {
		if (aGb = new Uint8Array(aD.ek), aGc = new Uint8Array(aD.ek), aGd = new Uint8Array(aD.ek), aGe = new Uint8Array(aD.ek), aGf = new Uint8Array(aD.ek), aGg = new Uint8Array(aD.ek), aGh = new Uint8Array(aD.ek), aGi = new Uint8Array(aD.ek),
			aGj = new Uint8Array(aD.ek), aGk = new Uint8Array(aD.ek), this.a8O = new Uint8Array(aD.ek), aD.hh)
			for (var aAX = bg.aAX, aB = aD.ek - 1; 0 <= aB; aB--) {
				var f8 = aAX[aB],
					l5 = bL.du((aGa[f8][3] + 1) * ay.random(), ay.value(100));
				aGb[aB] = aGZ[f8][0] + l5 * aGa[f8][0], aGc[aB] = aGZ[f8][1] + l5 * aGa[f8][1], aGd[aB] = aGZ[f8][2] + l5 * aGa[f8][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aGp(0, aD.kA), aGq(aD.kA, aD.ek)) : aGq(0, aD.ek) : aGp(0, aD.ek);
		! function() {
			var aB, eq;
			for (aB = aD.ek - 1; 0 <= aB; aB--) eq = bL.du(aGb[aB] + aGc[aB] + aGd[aB], 3), aGb[aB] += aGw(eq - aGb[aB], 2), aGc[aB] += aGw(eq - aGc[aB], 2), aGd[aB] += aGw(eq - aGd[aB], 2), aGb[aB] -= aGb[aB] % 4, aGc[aB] -= aGc[aB] % 4, aGd[
				aB] -= aGd[aB] % 4
		}(),
		function() {
			for (var aB = aD.ek - 1; 0 <= aB; aB--) aGb[aB] += bL.du(aB, 128), aGc[aB] += bL.du(aB % 128, 32), aGd[aB] += bL.du(aB % 32, 8), aGe[aB] = aB % 8
		}(), this.aGt(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGf[aB] = aGb[aB] < 32 ? aGb[aB] + 32 : aGb[aB] - 32, aGg[aB] = aGc[aB] < 32 ? aGc[aB] + 32 : aGc[aB] - 32, aGh[aB] = aGd[aB] < 32 ? aGd[aB] + 32 : aGd[aB] - 32
			}(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGi[aB] = 235 < aGb[aB] ? aGb[aB] - 20 : aGb[aB] + 20, aGj[aB] = 235 < aGc[aB] ? aGc[aB] - 20 : aGc[aB] + 20, aGk[aB] = 235 < aGd[aB] ? aGd[aB] - 20 : aGd[aB] + 20
			}()
	}, this.a7H = function(player) {
		var g = bO.fM;
		return g[0] = aGb[player], g[1] = aGc[player], g[2] = aGd[player], g
	}, this.aGt = function() {
		for (var aB = aD.ek - 1; 0 <= aB; aB--) this.a8O[aB] = aGb[aB] + aGc[aB] + aGd[aB] < 280 ? 0 : 1
	}, this.yD = function(eR) {
		return bL.du(eR, 4) % bS.ey
	}, this.yE = function(eR) {
		return bL.du(eR, 4 * bS.ey)
	}, this.xl = function(eu, ew) {
		return Math.floor(4 * (ew * bS.ey + eu))
	}, this.y1 = function(eR) {
		var ep = this.ep;
		return this.aGx(eR + ep[0]) || this.aGx(eR + ep[1]) || this.aGx(eR + ep[2]) || this.aGx(eR + ep[3])
	}, this.fC = function(eR) {
		var ep = this.ep;
		return this.es(eR + ep[0]) || this.es(eR + ep[1]) || this.es(eR + ep[2]) || this.es(eR + ep[3])
	}, this.xz = function(eR, player) {
		var ep = this.ep;
		return this.aGy(eR + ep[0], player) || this.aGy(eR + ep[1], player) || this.aGy(eR + ep[2], player) || this.aGy(eR + ep[3], player)
	}, this.gN = function(eR) {
		return 208 <= aBs[eR + 3]
	}, this.y7 = function(player, eR) {
		return this.gN(eR) && this.yA(player, eR)
	}, this.yA = function(player, eR) {
		return player === this.ef(eR)
	}, this.aGz = function(eR) {
		return 208 <= aBs[eR + 3] && aBs[eR + 3] < 224
	}, this.jL = function(eR) {
		return 224 <= aBs[eR + 3] && aBs[eR + 3] < 248
	}, this.y0 = function(eR) {
		for (var ep = this.ep, aB = 3; 0 <= aB; aB--)
			if (this.i1(eR + ep[aB])) return !0;
		return !1
	}, this.ei = function(eR) {
		return this.gN(eR) || this.ee(eR)
	}, this.i1 = function(eR) {
		return 0 === aBs[eR + 3] && 2 === aBs[eR + 2]
	}, this.ee = function(eR) {
		return 0 === aBs[eR + 3] && 1 === aBs[eR + 2]
	}, this.wq = function(eR) {
		return 0 === aBs[eR + 3] && 3 === aBs[eR + 2]
	}, this.es = function(eR) {
		return 0 === aBs[eR + 3] && 5 === aBs[eR + 2]
	}, this.aGx = function(eR) {
		return 0 === aBs[eR + 3] && 3 <= aBs[eR + 2]
	}, this.eV = function(eR) {
		return (aBs[eR] >> 1 << 8) + aBs[eR + 1]
	}, this.aH0 = function(eR) {
		return 1 & aBs[eR]
	}, this.aGy = function(eR, player) {
		return this.ee(eR) || this.gN(eR) && player !== this.ef(eR)
	}, this.ef = function(eR) {
		return aBs[eR] % 4 * 128 + aBs[eR + 1] % 4 * 32 + aBs[eR + 2] % 4 * 8 + aBs[eR + 3] % 8
	}, this.y8 = function(eR) {
		aH1(eR, 1)
	}, this.aH2 = function(eR) {
		aH1(eR, 2)
	}, this.xm = function(eR, player) {
		aBs[eR] = aGb[player], aBs[eR + 1] = aGc[player], aBs[eR + 2] = aGd[player], aBs[eR + 3] = 208 + aGe[player], aH4(eR)
	}, this.gI = function(eR, player) {
		aBs[eR] = aGf[player], aBs[eR + 1] = aGg[player], aBs[eR + 2] = aGh[player], aBs[eR + 3] = 224 + aGe[player], aH4(eR)
	}, this.jM = function(eR, player) {
		aBs[eR] = aGi[player], aBs[eR + 1] = aGj[player], aBs[eR + 2] = aGk[player], aBs[eR + 3] = 248 + aGe[player], aH4(eR)
	}
}

function cs() {
	var aH5 = 0,
		aH7 = new Uint16Array(64);

	function vM(a5O) {
		aH5 -= 2;
		for (var aB = a5O; aB < aH5; aB += 2) aH7[aB] = aH7[aB + 2], aH7[aB + 1] = aH7[aB + 3]
	}
	this.dd = function() {
		aH5 = 0
	}, this.j3 = function() {
		var aB, jJ, iN;
		if (0 !== aH5)
			if (0 === ag.mj[aD.eX]) aH5 = 0;
			else if (0 === ad.fu(aD.eX)) aH5 = 0;
		else
			for (aB = aH5 - 2; 0 <= aB; aB -= 2)(jJ = aH7[aB]) < aD.ek && 0 === ag.mj[jJ] ? vM(aB) : (iN = aH7[aB + 1], (jJ >= aD.ek && bs.aH9(aD.eX) || jJ < aD.ek && bs.aHA(aD.eX, jJ)) && (b8.hD.hK(iN, jJ), vM(aB)))
	}, this.hL = function(jJ, iN) {
		! function(jJ, iN) {
			for (var aB = 0; aB < aH5; aB += 2)
				if (aH7[aB] === jJ) return aH7[aB + 1] = Math.min(aH7[aB + 1] + iN, 1023), 1;
			return
		}(jJ, iN) && 64 !== aH5 && (aH7[aH5] = jJ, aH7[aH5 + 1] = iN, aH5 += 2)
	}
}

function cU() {
	function aHH(player) {
		var dt;
		bA.g9.a3W(player) && (dt = ag.gp[player] - ag.a3a[player] + ad.aHJ(player), bd.gD(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.gp[player] = 0, ag.a3a[player] = 0
	}

	function aHQ() {
		aX.show(!1, !1, !1, !0), aW.aB0(), bR.zt.a0d()
	}

	function aHE(player, aHP) {
		for (var aB = aHP.length - 1; 0 <= aB; aB--) ad.aHS(aHP[aB], player)
	}

	function aHG(player) {
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
					ac.y7(player, gL) && ac.y8(gL)
				}
		}
		ig[player] = ii[player] = 0, ie[player] = ih[player] = Math.max(ey, bS.ez)
	}
	this.dm = function(gL) {
		var player, dt = ag.gb[gL] + ag.xh[gL];
		bN.y.kE[gL] ? dt && (aHE(player = gL, ad.aHF(player)), aHG(player), aF.gB(player), ad.clear(player), aHH(player), function(player) {
			ag.xh[player] = 0, ag.gF[player] = [], ag.gT[player] = [], ag.gU[player] = [], ag.fD[player] = []
		}(player)) : !dt && ag.gF[gL].length || this.aHD(gL)
	}, this.aHD = function(player) {
		! function(player) {
			bA.g9.jX(player) || (ag.a0h[player] = bi.a0x.aHO(), aD.a0A++);
			var aHP = ad.aHF(player);
			0 === aHP.length ? bA.g9.a3T(player) && aHQ() : (aHE(player, aHP), function(player, aHP) {
				var aHU = aHP[function(aHP) {
					var aB, e8 = 0;
					for (aB = aHP.length - 1; 1 <= aB; aB--) ag.gb[aHP[aB]] > ag.gb[aHP[e8]] && (e8 = aB);
					return e8
				}(aHP)];
				9 === aD.kS && (1 === bg.el[player] ? ay.k2(8) && az.aHV(aHU) : aE.hW[player] && (aN.a6n(765, 0), aN.ya(280, L(132, [ag.yb[aHU], ag.yb[player]]), 765, aHU, bB.na, bB.os, -1, !0)));
				if (bA.g9.a3T(player)) aHQ(), aN.a0K(aHU, 1);
				else {
					for (var aB = aHP.length - 1; 0 <= aB; aB--)
						if (bA.g9.a3W(aHP[aB]) && (bd.mf[4 - bA.g9.jX(player)]++, bA.g9.a3T(aHP[aB]))) return aN.a0K(player, 0);
					bA.g9.jX(player) || aN.a6X(0, player, aHU)
				}
			}(player, aHP))
		}(player), aHG(player), aHH(player),
			function(player) {
				ag.mj[player] = 0, ag.gF[player] = null, ag.gT[player] = null, ag.gU[player] = null, ag.fD[player] = null
			}(player), aF.gB(player), ad.clear(player), bN.aHM.aHN(player)
	}
}

function cx() {
	var input;

	function aHW(e) {
		(e = e.target.files) && 0 < e.length && b6.aHZ(e[0])
	}

	function aHd(e) {
		var f8 = new Image;
		f8.onload = aHe, f8.src = e.target.result
	}

	function aHe(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bS.aHg || j > bS.aHg || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bS.aHg + ".", a0.vT ? a0.vT.showToast(e) : alert(e)) : 20 === t.sp && t.a58().aHe(canvas)
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHW
	}, this.uC = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHX = function() {
		input.click()
	}, this.aHZ = function(aHa) {
		var g = aHa.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHd, g.readAsDataURL(aHa))
	}
}

function cv() {
	this.aHi = null, this.dd = function() {
		10 !== aD.kS ? this.aHi = null : this.aHi = new Uint32Array(aD.ek)
	}, this.j3 = function() {
		10 === aD.kS && this.kz()
	}, this.kz = function() {
		for (var gL, target, aBD, aHi = this.aHi, zw = al.kl, a3b = ag.gp, aB = al.kg - 1; 0 <= aB; aB--)(gL = zw[aB]) >= aD.kA || (target = Math.max(bL.du(a3b[gL], 4), 2048), aBD = Math.max(ae.aBE(gL), 100), aHi[gL] += bL.du(aBD * target, 1e4),
			aHi[gL] > target && (aHi[gL] = target))
	}, this.a3h = function(player, hW) {
		return hW > this.aHi[player] ? (hW = this.aHi[player], this.aHi[player] = 0) : this.aHi[player] -= hW, hW
	}
}

function dW() {
	function aHk(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aHs, g.readAsText(e))
	}

	function aHs(e) {
		var aHw;
		aD.a08 || (e = JSON.parse(e.target.result), aHw = aD.data = new a4Y, aHx(e, aHw, "mapType", 0, 2), aHx(e, aHw, "mapProceduralIndex", 0, 255), aHx(e, aHw, "mapRealisticIndex", 0, 255), aHx(e, aHw, "mapSeed", 0, 16383), function(aHv, aHw, gM,
				max) {
				aHv = aHv[gM];
				aHw[gM] = aI3(aHv) ? aHv.slice(0, max) : aHw[gM]
			}(e, aHw, "mapName", 20), function(aHv, aHw, gM) {
				var aHf;
				2 === aHw.mapType && (!aI3(aHv = aHv[gM]) || aHv.length <= 20 ? aHw.mapType = 0 : ((aHf = new Image).onload = function() {
					b9.aI4.aI5(aHf, 1), aHf.onload = null, aHf = null
				}, aHf.src = aHv))
			}(e, aHw, "canvas"), aHx(e, aHw, "passableWater", 0, 1), aHx(e, aHw, "passableMountains", 0, 1), aHx(e, aHw, "playerCount", 1, 512), aHx(e, aHw, "humanCount", 1, 1), aHx(e, aHw, "selectedPlayer", 0, 0), aHx(e, aHw, "gameMode", 0, 1),
			aHx(e, aHw, "playerMode", 0, 0), aHx(e, aHw, "battleRoyaleMode", 0, 0), aHx(e, aHw, "numberTeams", 0, 8), aHx(e, aHw, "isZombieMode", 0, 0), aHx(e, aHw, "isContest", 0, 0), aHx(e, aHw, "isReplay", 0, 0), aI0(e, aHw, "elo", 16, 2,
				16383), aHx(e, aHw, "colorsType", 0, 1), aHx(e, aHw, "colorsPersonalized", 0, 1), aI0(e, aHw, "colorsData", 32, 512, 262143), aHx(e, aHw, "selectableColor", 0, 1), aI0(e, aHw, "teamPlayerCount", 16, 9, 512), aHx(e, aHw,
				"neutralBots", 0, 1), aHx(e, aHw, "botDifficultyType", 0, 3), aHx(e, aHw, "botDifficultyValue", 0, 15), aI0(e, aHw, "botDifficultyTeam", 8, 9, 15), aI0(e, aHw, "botDifficultyData", 8, 512, 15), aHx(e, aHw, "spawningType", 0, 2),
			aHx(e, aHw, "spawningSeed", 0, 16383), aI0(e, aHw, "spawningData", 16, 1024, 4095), aHx(e, aHw, "selectableSpawn", 0, 1), aHx(e, aHw, "playerNamesType", 0, 2),
			function(aHv, aHw, gM, size, max) {
				var a2i = aHv[gM];
				if (Array.isArray(a2i)) {
					for (var a2j = new Array(size), en = Math.min(a2i.length, size), aB = 0; aB < en; aB++) a2j[aB] = aI3(a2i[aB]) ? a2i[aB].slice(0, max) : "";
					aHw[gM] = a2j
				}
			}(e, aHw, "playerNamesData", 512, 20), aHx(e, aHw, "selectableName", 0, 1), aHx(e, aHw, "aIncomeType", 0, 2), aHx(e, aHw, "aIncomeValue", 0, 255), aI0(e, aHw, "aIncomeData", 8, 512, 255), aHx(e, aHw, "tIncomeType", 0, 2), aHx(e, aHw,
				"tIncomeValue", 0, 255), aI0(e, aHw, "tIncomeData", 8, 512, 255), aHx(e, aHw, "iIncomeType", 0, 2), aHx(e, aHw, "iIncomeValue", 0, 255), aI0(e, aHw, "iIncomeData", 8, 512, 255), aHx(e, aHw, "sResourcesType", 0, 2), aHx(e, aHw,
				"sResourcesValue", 0, 2047), aI0(e, aHw, "sResourcesData", 16, 512, 2047), t.x(), t.y.aHu[0] = 0, t.u(19))
	}

	function aHx(aHv, aHw, gM, min, max) {
		aHv = aHv[gM];
		aHw[gM] = "number" == typeof aHv && min <= aHv && aHv <= max ? Math.floor(aHv) : aHw[gM]
	}

	function aI3(qH) {
		return "string" == typeof qH
	}

	function aI0(aHv, aHw, gM, aI6, size, max) {
		var a2i = aHv[gM];
		if (Array.isArray(a2i)) {
			for (var a2j = new(8 === aI6 ? Uint8Array : 16 === aI6 ? Uint16Array : Uint32Array)(size), en = Math.min(a2i.length, size), aB = 0; aB < en; aB++) a2j[aB] = bL.hv(a2i[aB], 0, max);
			aHw[gM] = a2j
		}
	}
	this.aHj = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aHk, input.click()
	}, this.aHl = function() {
		for (var aHo, aCP, a56 = aD.data, keys = Object.keys(a56), aHm = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a56[key] instanceof Uint8Array || a56[key] instanceof Uint16Array || a56[key] instanceof Uint32Array ? aHm[key] = Array.from(a56[key]) : aHm[key] = a56[key]
		}
		aHm.canvas = 2 === aHm.mapType && aHm.canvas ? aHm.canvas.toDataURL() : null, aHo = aHm, aHo = JSON.stringify(aHo, null, 2), aHo = new Blob([aHo], {
			type: "application/json"
		}), (aCP = document.createElement("a")).href = URL.createObjectURL(aHo), aCP.download = "tt_scenario.json", aCP.click()
	}
}

function cY() {
	var aI7, aI8, size, jJ, hW, aI9;

	function aIA(player) {
		return player < aD.kA ? aI7 * player : aI7 * aD.kA + aI8 * (player - aD.kA)
	}
	this.dd = function() {
		aI7 = aD.kA < 16 ? 12 : 8, aI8 = 4;
		var en = aIA(aD.ek);
		size = new Uint8Array(aD.ek), jJ = new Uint16Array(en), hW = new Uint32Array(en), aI9 = new Uint8Array(en)
	}, this.q8 = function(a7t, aIB) {
		var aIC = this.gq(a7t, aIB),
			aIB = (this.go(a7t, aIB, 0), bA.g9.gC(a7t, aIC));
		bd.gD(a7t, aIC - aIB, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aHS = function(player, aIB) {
		var aIF, aIB = function(player, aIB) {
			var aB, l5 = aIA(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jJ[l5 + aB] === aIB) return aB;
			return size[player]
		}(player, aIB);
		aIB !== size[player] && (aIF = hW[aIA(player) + aIB], this.gE(player, aIB), this.jG(player, aIF, aD.ek))
	}, this.jV = function(player, aIB) {
		for (var l5 = aIA(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l5 + aB] === aIB) return !0;
		return !1
	}, this.jo = function(player) {
		return player < aD.kA ? size[player] < aI7 : size[player] < aI8
	}, this.fu = function(player) {
		return size[player]
	}, this.fz = function(player, aB) {
		return jJ[aIA(player) + aB]
	}, this.g0 = function(player, aB) {
		return hW[aIA(player) + aB]
	}, this.gq = function(player, aIB) {
		for (var l5 = aIA(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l5 + aB] === aIB) return hW[l5 + aB];
		return 0
	}, this.aHJ = function(player) {
		for (var l5 = aIA(player), fF = 0, aB = size[player] - 1; 0 <= aB; aB--) fF += hW[l5 + aB];
		return fF
	}, this.go = function(player, aIB, aIF) {
		for (var l5 = aIA(player), aB = size[player] - 1; 0 <= aB; aB--) jJ[l5 + aB] === aIB && (hW[l5 + aB] = aIF)
	}, this.gZ = function(player, aB, aIF) {
		hW[aIA(player) + aB] = Math.max(aIF, 0)
	}, this.ga = function(player, aB) {
		aI9[aIA(player) + aB] = 0
	}, this.g1 = function(player, aB) {
		return aI9[aIA(player) + aB]
	}, this.jG = function(player, aIF, aIB) {
		ao.iv.jm[player] = ao.iv.jm[aIB] = 8, bA.g9.a3W(aIB) && bd.mf[6 - bA.g9.jX(player)]++;
		for (var l5 = aIA(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l5 + aB] === aIB) return hW[l5 + aB] += aIF, void(hW[l5 + aB] = hW[l5 + aB] > aD.a3d ? aD.a3d : hW[l5 + aB]);
		jJ[l5 + size[player]] = aIB, hW[l5 + size[player]] = aIF, aI9[l5 + size[player]] = 1, size[player]++, player < aD.kA && (aIB === aD.eX ? aN.a0K(player, 5) : player === aD.eX && af.a6Z(aIB))
	}, this.gE = function(player, e8) {
		var f6, l5;
		if (0 !== size[player])
			for (l5 = aIA(player), size[player]--, f6 = e8; f6 < size[player]; f6++) jJ[l5 + f6] = jJ[l5 + f6 + 1], hW[l5 + f6] = hW[l5 + f6 + 1], aI9[l5 + f6] = aI9[l5 + f6 + 1]
	}, this.aHF = function(player) {
		for (var f6, l5, aHP = [], aB = al.kg - 1; 0 <= aB; aB--)
			for (l5 = aIA(al.kl[aB]), f6 = size[al.kl[aB]] - 1; 0 <= f6; f6--)
				if (jJ[l5 + f6] === player) {
					aHP.push(al.kl[aB]);
					break
				} return aHP
	}
}

function cZ() {
	var aIG;

	function aII(player) {
		var e7, jp;
		return bA.g9.jX(player) && player < aD.kA ? 0 : (e7 = aIG[bL.du((aD.ek - 1) * ag.gb[player], aD.ju)], bf.k7() < 1920 && (e7 = Math.max(bL.du(100 * (13440 - 6 * bf.k7()), 1920), e7)), jp = ae.jq(player), ag.gp[player] > jp && (e7 -= bL.du(2 *
			e7 * (ag.gp[player] - jp), jp)), Math.min(Math.max(e7, 0), 700))
	}

	function aIU(nL) {
		for (var gb = ag.gb, kl = al.kl, aB = al.kg - 1; 0 <= aB; aB--) {
			var gL = kl[aB];
			bA.g9.gC(gL, bL.du(nL * gb[gL], 32))
		}
	}

	function aIR() {
		var wj = aD.eX;
		bO.fJ[0] = ag.gp[wj] - ag.a3a[wj]
	}

	function aIT(e8) {
		var wj = aD.eX;
		bd.mf[e8] += ag.gp[wj] - ag.a3a[wj] - bO.fJ[0]
	}
	this.dk = function() {
		for (var en = aD.ek, aB = (aIG = new Uint16Array(en), 0); aB < en; aB++) aIG[aB] = 100 + aIH(bL.du(25600 * aB, en - 4), 9)
	}, this.dd = function() {
		0 === aD.data.iIncomeType ? this.aBE = aII : 1 === aD.data.iIncomeType ? this.aBE = function(player) {
			return bL.du(aD.data.iIncomeValue * aII(player), 64)
		} : this.aBE = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aII(player), 64)
		}
	}, this.j3 = function() {
		if (bf.k7() % 10 == 9 && (function() {
				aIR();
				for (var kl = al.kl, gp = ag.gp, aB = al.kg - 1; 0 <= aB; aB--) {
					var gL = kl[aB],
						aIS = bL.du(ae.aBE(gL) * gp[gL], 1e4);
					bA.g9.gC(gL, Math.max(aIS, 1))
				}
				aIT(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aIR(), 1 === aD.data.aIncomeType)
						for (var gb = ag.gb, kl = al.kl, nL = aD.data.aIncomeValue, aB = al.kg - 1; 0 <= aB; aB--) {
							var gL = kl[aB];
							bA.g9.gC(gL, bL.du(nL * gb[gL], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gb = ag.gb, kl = al.kl, nL = aD.data.aIncomeData, aB = al.kg - 1; 0 <= aB; aB--) {
								var gL = kl[aB];
								bA.g9.gC(gL, bL.du(nL[gL] * gb[gL], 128))
							}
						}();
					aIT(18)
				}
			}(), bf.k7() % 100 == 99)) {
			if (aIR(), 0 === aD.data.tIncomeType) aIU(32);
			else if (1 === aD.data.tIncomeType) aIU(aD.data.tIncomeValue);
			else
				for (var gb = ag.gb, kl = al.kl, nL = aD.data.tIncomeData, aB = al.kg - 1; 0 <= aB; aB--) {
					var gL = kl[aB];
					bA.g9.gC(gL, bL.du(nL[gL] * gb[gL], 32))
				}
			aIT(8)
		}
	}, this.jq = function(player) {
		return Math.min(100 * ag.gb[player], aD.a4U)
	}, this.p7 = function(player, p8) {
		bq.pU(player, p8, bO.fK[0], 0), bA.g9.gC(p8, bO.fK[0]), bd.pV(player, p8), af.aIK(player, bO.fK[0] + bO.fK[1]), af.pW(p8, bO.fK[0]), bA.g9.mK(player)
	}, this.aIL = function() {
		for (var en = al.kg, zw = al.kl, l5 = 0, a3b = ag.gp, aB = 0; aB < en; aB++) l5 += a3b[zw[aB]];
		return l5
	}, this.aIM = function(aIN) {
		for (var gL, en = al.kg, zw = al.kl, l5 = 0, a3b = ag.gp, el = bg.el, aB = 0; aB < en; aB++) el[gL = zw[aB]] === aIN && (l5 += a3b[gL]);
		return l5
	}
}

function cb() {
	var aIY, aIZ, aIa, aIb, aIc, aId, aIe, aIf, aIg, aIh, aIi, aIj, aIk, aIl, aIm, aIn, aIo, aIp, aIr, aIs, aCI, aIt, aIu, aJ1, aJ2, aIq = null,
		aIw = 0,
		aIx = !1,
		aIy = new Float32Array(4),
		aIz = 0,
		aJ0 = !0,
		aAM = 400,
		aJ3 = 0;

	function qd() {
		aIg = Math.floor(+h.hx), aIh = Math.floor(.5 * aIg)
	}

	function aJ4() {
		var aB, aJ9;
		for (uj.font = bA.qa.sP(1, 100 * aIi), aJ9 = 80 / Math.floor(uj.measureText(bA.rZ.zP(aD.a3d)).width), uj.font = bA.qa.sP(1, 100), aB = aD.ek - 1; 0 <= aB; aB--) aIf[aB] = 100 / Math.floor(uj.measureText(ag.yb[aB]).width), aIe[aB] = Math.min(
			aJ9, aIf[aB])
	}

	function aJA(aB) {
		return !aJ3 || (aB = ag.gp[aB]) < 1e6 ? 1 : aB < 1e7 ? aIy[0] : aIy[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aJ8(hp) {
		aIp = !1, aIo = 1, aIm = aIn = 0, aJ0 && (bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1));
		for (var aJG, aJH, aB, aJI, fontSize, aJJ, n9 = iO / hy, nA = iP / hy, nM = (h.i + iO) / hy, nN = (h.j + iP) / hy, aJK = 0 !== ag.mj[aD.eX] && !bA.g9.jX(aD.eX), f6 = al.kg - 1; 0 <= f6; f6--) aB = al.kl[f6], (fontSize = Math.floor(aIl * hy *
			aJA(aB) * aIe[aB] * aIc[aB])) < aIk || aIg <= fontSize || aIa[aB] + aIc[aB] > n9 && aIa[aB] < nM && aIb[aB] + aId[aB] > nA && aIb[aB] < nN && (aJG = Math.floor(h.i * (aIa[aB] + aIc[aB] / 2 - n9) / (nM - n9)), aJH = Math.floor(h.j * (
			aIb[aB] + aId[aB] / 2 - nA) / (nN - nA) - .1 * fontSize), aJI = ac.a8O[aB], hp.font = bA.qa.sP(1 === ag.a3S[aB] ? 4 : 1, fontSize), hp.fillStyle = aJL(fontSize, aJI % 2), aJ3 ? aJM(hp, aB, fontSize, aJG, aJH, aJI) : aJN(aB,
			fontSize, aJG, aJH, hp), aIp = !0, 0 < aCI[aB] ? function(aJG, aJH, fontSize, aB, hp) {
			0 === jv[aB] ? aj.rq.zG(aIs[aB]) ? (function(aJG, aJH, fontSize, player, pJ, hp) {
				for (var xG = aJH, ho = (hp.globalAlpha = aJV(fontSize), aJA(player) * (aJ3 ? aIz : aIf[player])), xF = aJG - .5 * fontSize / ho - .9 * fontSize, f7 = 0; f7 < 2; f7++) hp.fillText(aj.rq.z8(pJ), xF, xG), xF = aJG + .5 *
					fontSize / ho + .9 * fontSize;
				hp.globalAlpha = 1
			}(aJG, aJH, fontSize, aB, aIs[aB], hp), aJP(aJG, aJH, fontSize, 0, 0, hp)) : aj.rq.zI(aIs[aB]) ? (aJY(aJG, aJH, fontSize, aIs[aB], 0, hp), aJP(aJG, aJH, fontSize, 0, 1, hp)) : (aJY(aJG, aJH, fontSize, aIs[aB], 1, hp), aJP(aJG,
				aJH, fontSize, 1, 0, hp)) : aJY(aJG, aJH, fontSize, aIs[aB], 0, hp)
		}(aJG, aJH, fontSize, aB, hp) : 0 === jv[aB] && aJP(aJG, aJH, fontSize, 0, 0, hp), aJK && (0 < aCI[aB + aD.ek] || 0 < aCI[aB + 2 * aD.ek] || 0 < aCI[aB + 3 * aD.ek] || 0 < aCI[aB + 4 * aD.ek]) && function(aJG, aJH, fontSize, aB, hp) {
			var f8, gG = -1;
			for (f8 = 4; 1 <= f8; f8--) 0 < aCI[aB + f8 * aD.ek] && gG++;
			for (f8 = 1; f8 < 5; f8++) 0 < aCI[aB + f8 * aD.ek] && (! function(aJG, aJH, fontSize, f8, aB, aJT, dt, hp) {
				var a2w;
				if (1 === f8) {
					aB = aIs[aB + aD.ek];
					if (!aj.rq.zH(aB)) return function(aJG, aJH, fontSize, pJ, aJT, hp) {
						hp.globalAlpha = aJV(fontSize);
						aJG -= .534 * aJT * fontSize, aJT = aJH + 1.59 * fontSize;
						hp.font = bA.qa.sP(0, .785 * fontSize), hp.fillText(aj.rq.z8(pJ), aJG, aJT), hp.globalAlpha = 1
					}(aJG, aJH, fontSize, aB, aJT, hp);
					a2w = aj.wi.yh[aB - 1024 + aj.rq.yt]
				} else a2w = 2 === f8 ? aL.a5M()[4].canvas[+(dt < 255)] : (3 === f8 ? aL.a5M()[5] : aL.a5M()[6]).canvas[0];
				aB = aj.wi.yi, dt = .8 * fontSize / aB, f8 = aJG - .5 * dt * aB - .534 * aJT * fontSize, aJG = aJH + 1.4 * dt * aB;
				hp.setTransform(dt, 0, 0, dt, f8, aJG), hp.globalAlpha = aJV(fontSize), hp.drawImage(a2w, 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}(aJG, aJH, fontSize, f8, aB, gG, aCI[aB + f8 * aD.ek], hp), gG -= 2)
		}(aJG, aJH, fontSize, aB, hp), (aJJ = aIi * fontSize) < aIk || (hp.font = bA.qa.sP(1, aJJ), aJH += Math.floor(.78 * fontSize), aJ3 ? aJN(aB, aJJ, aJG, aJH, hp) : aJM(hp, aB, aJJ, aJG, aJH, aJI)))
	}

	function aJN(aB, fontSize, eu, ew, hp) {
		var ___id = aB;
		var showName = aB < aD.kA || !__fx.settings.hideBotNames;
		if (showName) hp.fillText(ag.yb[aB], eu, ew), aB < aD.kA && 2 !== ag.a3S[aB] || (aB = fontSize / aIf[aB], hp.fillRect(eu - .5 * aB, ew + bA.qa.z9 * fontSize, aB, Math.max(1, .1 * fontSize)));
		aJ3 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hp.fillText(__fx.utils.getDensity(___id), eu, showName ? ew + fontSize : ew)
		);
	}

	function aJM(hp, aB, fontSize, aJG, aJH, aJI) {
		var ___id = aB;
		aB = bA.rZ.zP(ag.gp[aB]);
		aJI >> 1 & 1 ? (hp.lineWidth = .05 * fontSize, hp.strokeStyle = aJL(fontSize, aJI % 2), hp.strokeText(aB, aJG, aJH)) : (1 < aJI && (hp.lineWidth = .12 * fontSize, hp.strokeStyle = aJL(fontSize, aJI), hp.strokeText(aB, aJG, aJH)), hp.fillText(
			aB, aJG, aJH));
		aJ3 || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hp.fillText(__fx.utils.getDensity(___id), aJG, aJH + fontSize))
	}

	function aJP(aJG, aJH, fontSize, aJT, aJU, hp) {
		var a5r = .95 * fontSize / aIu,
			aJG = aJG - .5 * a5r * aIt + .8 * aJT * fontSize,
			aJT = aJH - 1.76 * a5r * aIu - (.35 - bA.qa.z9 + .7) * aJU * fontSize;
		hp.setTransform(a5r, 0, 0, a5r, aJG, aJT), hp.globalAlpha = aJV(fontSize), hp.drawImage(ab.get(4), 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJY(aJG, aJH, fontSize, pJ, aJT, hp) {
		var hj, xF, a5r;
		hp.globalAlpha = aJV(fontSize), aj.rq.zH(pJ) ? (hj = aj.wi.yi, hp.setTransform(a5r = 1.1 * fontSize / hj, 0, 0, a5r, xF = aJG - .5 * a5r * hj - .8 * aJT * fontSize, a5r = aJH - 1.55 * a5r * hj), hp.drawImage(aj.wi.yh[pJ - 1024 + aj.rq.yt], 0,
			0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (xF = aJG - .8 * aJT * fontSize, a5r = aJH - (.35 - bA.qa.z9 + 1) * fontSize, hp.fillText(aj.rq.z8(pJ), xF, a5r)), hp.globalAlpha = 1
	}

	function aJL(fontSize, aJI) {
		return aIh <= fontSize && fontSize < aIg ? bg.aJa[aJI] + aJV(fontSize).toFixed(3) + ")" : bg.aJb[aJI]
	}

	function aJV(fontSize) {
		return aIh <= fontSize && fontSize < aIg ? 1 - (fontSize - aIh) / (aIg - aIh) : 1
	}

	function aJk(ho, i) {
		return 1 + Math.floor(aIj * ho * i)
	}

	function aJh(aB) {
		for (var left = aIa[aB], f6 = aIa[aB] - ag.ie[aB] - 1; 0 <= f6; f6--)
			if (!aJm(aB, --left, aIb[aB], aId[aB])) {
				left++;
				break
			} var right = aIa[aB];
		for (f6 = ag.ig[aB] - aIa[aB] - aIc[aB]; 0 <= f6; f6--)
			if (!aJm(aB, ++right + aIc[aB] - 1, aIb[aB], aId[aB])) {
				right--;
				break
			} var eu = Math.floor((left + right) / 2),
			top = aIb[aB];
		for (f6 = aIb[aB] - ag.ih[aB] - 1; 0 <= f6; f6--)
			if (!aJn(aB, eu, --top, aIc[aB])) {
				top++;
				break
			} var bottom = aIb[aB];
		for (f6 = ag.ii[aB] - aIb[aB] - aId[aB]; 0 <= f6; f6--)
			if (!aJn(aB, eu, ++bottom + aId[aB] - 1, aIc[aB])) {
				bottom--;
				break
			} var ew = Math.floor((top + bottom) / 2);
		aJe(aB, eu, ew, aIc[aB], aId[aB]) && (aIa[aB] = eu, aIb[aB] = ew)
	}

	function aJe(player, eu, ew, i, j) {
		eq = Math.floor(.2 * i);
		for (var eq, f8 = eu + i - 1; eu <= f8; f8--)
			if (!aJm(player, f8, ew, j)) return;
		for (f8 = ew + j - 1 - (eq = (eq = Math.floor(.25 * j)) < 1 ? 1 : eq); ew + eq <= f8; f8--)
			if (!aJn(player, eu, f8, i)) return;
		return 1
	}

	function aJm(player, eu, ew, j) {
		return ac.y7(player, 4 * (ew * bS.ey + eu)) && ac.y7(player, 4 * ((ew + j - 1) * bS.ey + eu))
	}

	function aJn(player, eu, ew, i) {
		return ac.y7(player, 4 * (ew * bS.ey + eu)) && ac.y7(player, 4 * (ew * bS.ey + eu + i - 1))
	}
	this.dd = function() {
		if (aJ3 = bj.eK.data[7].value || 8 === aD.kS, aAM = 0 === (aAM = bj.eK.data[11].value) ? 280 : 1 === aAM ? 187 : 112, aIp = !1, aIl = .88, aIi = .5, aIj = 1.8, aIk = 12 - 3 * bj.eK.data[9].value, aIZ = aIY = 0, aIa = new Uint16Array(aD
				.ek), aIb = new Uint16Array(aD.ek), aIc = new Uint16Array(aD.ek), aId = new Uint16Array(aD.ek), aIe = new Float32Array(aD.ek), aIf = new Float32Array(aD.ek), aIs = new Uint16Array(2 * aD.ek), aCI = new Uint8Array(5 * aD.ek), aJ1 =
			new Uint8Array(aD.ek), aJ2 = new Uint8Array(aD.ek), aJ0 || (aIq = aIq || document.createElement("canvas")), qd(), aIn = aIm = 0, aIo = 1, aJ3) {
			var aB, aJ9;
			for (aJ4(), uj.font = bA.qa.sP(1, 100), aJ9 = 100 / Math.floor(uj.measureText("900 000").width), aB = aD.ek - 1; 0 <= aB; aB--) aIe[aB] = Math.min(aJ9, 2 * aIf[aB]);
			aIz = aJ9, aIy[0] = 100 / (aJ9 * Math.floor(uj.measureText("5 000 000").width)), aIy[1] = 100 / (aJ9 * Math.floor(uj.measureText("50 000 000").width)), aIy[2] = 100 / (aJ9 * Math.floor(uj.measureText("500 000 000").width)), aIy[3] =
				100 / (aJ9 * Math.floor(uj.measureText("1 000 000 000").width))
		} else aJ4();
		! function() {
			var aB;
			for (aB = aD.ek - 1; 0 <= aB; aB--) ag.gb[aB] < 12 ? (aIa[aB] = ag.ie[aB] + 1, aIb[aB] = ag.ih[aB] + 1, aIc[aB] = 1, aId[aB] = 1) : (aIa[aB] = ag.ie[aB], aIb[aB] = ag.ih[aB] + 1, aIc[aB] = 4, aId[aB] = 2);
			if (aD.hB)
				for (aB = 0; aB < aD.kA; aB++) aIc[aB] = 0;
			aIt = ab.get(4).width, aIu = ab.get(4).height
		}()
	}, this.aIK = function(gL, a54) {
		a54 > 18 * ag.gb[gL] ? (aJ2[gL] = 6, ac.a8O[gL] = 2 + ac.a8O[gL] % 2) : (aJ1[gL] = 4, (ac.a8O[gL] < 2 || 3 < ac.a8O[gL]) && (ac.a8O[gL] = 6 + ac.a8O[gL] % 2))
	}, this.pW = function(gL, a54) {
		a54 > 6 * ag.gb[gL] ? (aJ2[gL] = 6, ac.a8O[gL] = 4 + ac.a8O[gL] % 2) : (aJ1[gL] = 4, (ac.a8O[gL] < 4 || 5 < ac.a8O[gL]) && (ac.a8O[gL] = 8 + ac.a8O[gL] % 2))
	}, this.resize = function() {
		qd(), aJ0 || aJ8(aIr)
	}, this.a4Q = function() {
		for (var aB = 0; aB < aD.kA; aB++) ag.ig[aB] - ag.ie[aB] != 3 || ag.ii[aB] - ag.ih[aB] != 3 ? (aIa[aB] = ag.ie[aB] + (ag.ig[aB] !== ag.ie[aB] ? 1 : 0), aIb[aB] = ag.ih[aB], aIc[aB] = 1, aId[aB] = 1) : (aIa[aB] = ag.ie[aB], aIb[aB] = ag
			.ih[aB] + 1, aIc[aB] = 4, aId[aB] = 2)
	}, this.q9 = function(player, e8, aJB) {
		! function(player, e8, aJB) {
			player += e8 * aD.ek;
			0 === e8 ? aIs[player] === aJB && 0 < aCI[player] ? aCI[player] = 0 : (aIs[player] = aJB, aCI[player] = aj.rq.zG(aJB) ? 255 : 64) : 1 === e8 ? (aCI[player] = 64, aIs[player] = aJB) : aCI[player] = aJB
		}(player, e8, aJB), 2 === aD.a08 && this.mV(!0)
	}, this.ui = function() {
		aJ0 ? aJ8(uj) : aIp && (1 !== aIo ? (uj.imageSmoothingEnabled = !0, uj.setTransform(aIo, 0, 0, aIo, 0, 0), uj.drawImage(aIq, -aIm / aIo, -aIn / aIo), uj.setTransform(1, 0, 0, 1, 0, 0), uj.imageSmoothingEnabled = !1) : uj.drawImage(aIq, -
			aIm, -aIn))
	}, this.a9B = function(i7, iA) {
		aIm += i7, aIn += iA
	}, this.a1c = function(i7, iA) {
		af.a9B(i7, iA)
	}, this.zoom = function(a2V, lP, lQ) {
		aIo *= a2V, aIm = (aIm + lP) * a2V - lP, aIn = (aIn + lQ) * a2V - lQ
	}, this.mV = function(bu) {
		return !aJ0 && !(!aIx && !bu && bf.eM < aIw + (1 === aIo && 0 === aIm && 0 === aIn && (aD.a4u() || aD.hB || 2 === aD.a08) ? 1e3 : aAM) || (aIx = !1, aIw = bf.eM, aJ8(aIr), 0))
	}, this.aJE = function(aB) {
		return aJA(aB) * aIe[aB]
	}, this.aJF = function(player) {
		return aIe[player]
	}, this.j3 = function() {
		bf.k7() % 10 == 9 && (aIx = aD.a4w() && !aD.a4u()), !aD.a4u() && 4 <= ++aIZ && function() {
			var aB, f6, f7;
			for (aIZ = 0, f7 = 4; 1 <= f7; f7--)
				for (f6 = al.kg - 1; 0 <= f6; f6--) aB = al.kl[f6] + f7 * aD.ek, 0 < aCI[aB] && aCI[aB] < 255 && aCI[aB]--;
			if (2 !== aD.a08)
				for (f6 = al.kg - 1; 0 <= f6; f6--) aB = al.kl[f6], 0 < aCI[aB] && aCI[aB] < 255 && aCI[aB]--
		}();
		var aB, f6, en = Math.floor(.1 * al.kg);
		for (en = (en = en < 8 ? 8 : en) > al.kg ? al.kg : en, aB = aIY + en - 1; aIY <= aB; aB--) f6 = aB % al.kg, ! function(aB) {
			var ho = aJA(aB) * aIe[aB];
			0 < aIc[aB] && aJe(aB, aIa[aB], aIb[aB], aIc[aB], aId[aB]) ? ! function(aB) {
				for (var eu, ew, i, j, eR = !1, f7 = 0; f7 < 8; f7++) {
					if (i = aIc[aB] + 2, j = aId[aB] + 2, i > ag.ig[aB] - ag.ie[aB] + 1 || j > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					if (eu = aIa[aB] - 1, ew = aIb[aB] - 1, !aJe(aB, eu, ew, i, j)) return eR;
					aIa[aB] = eu, aIb[aB] = ew, aIc[aB] = i, aId[aB] = j, eR = !0
				}
				return eR
			}(aB) && function(aB, ho) {
				for (var eu, ew, i, j, eR = !1, aCR = aIc[aB], nL = 1 + Math.floor(.02 * aCR), f7 = 1; f7 < 5; f7++) {
					if ((i = aCR + f7 * nL) > ag.ig[aB] - ag.ie[aB] + 1) return eR;
					if ((j = aJk(ho, i)) > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJe(aB, eu, ew, i, j) && (aIa[aB] = eu, aIb[aB] = ew, aIc[
						aB] = i, aId[aB] = j, eR = !0)
				}
				return eR
			}(aB, ho) && aJh(aB) : ! function(aB, ho) {
				var j, eu = aIa[aB] + 1,
					ew = aIb[aB] + 1,
					i = aIc[aB] - 2;
				for (;;) {
					if (i < 1) {
						aIc[aB] = 0;
						break
					}
					if (j = aJk(ho, i), aJe(aB, eu, ew, i, j)) return aIa[aB] = eu, aIb[aB] = ew, aIc[aB] = i, aId[aB] = j, 1;
					eu++, ew++, i -= 2
				}
				return
			}(aB, ho) ? function(aB, ho) {
				var eu, ew, i, j, f7, nR, jQ = ag.ig[aB] - ag.ie[aB] + 1,
					aJl = Math.floor(.02 * jQ);
				for (nR = -6 * (aJl = aJl < 1 ? 1 : aJl), f7 = jQ; nR <= f7; f7 -= aJl)
					if (j = aJk(ho, i = 0 < f7 ? f7 : 1), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJe(aB, eu, ew, i, j))
						return aIa[aB] = eu, aIb[aB] = ew, aIc[aB] = i, aId[aB] = j
			}(aB, ho) : aJh(aB)
		}(al.kl[f6]);
		aIY = (aIY += en) % al.kg
	}, this.mQ = function() {
		var aB, gL, zE, zF;
		if (bf.k7() % 4 == 1)
			for (aB = al.kg - 1; 0 <= aB; aB--) gL = al.kl[aB], ac.a8O[gL] < 2 || ((zE = Math.max(aJ1[gL] - 1, 0)) === (zF = Math.max(aJ2[gL] - 1, 0)) ? 0 === zE && (ac.a8O[gL] %= 2) : 0 === zF && ac.a8O[gL] < 6 && (ac.a8O[gL] += 4), aJ1[gL] =
				zE, aJ2[gL] = zF)
	}, this.a6Z = function(player) {
		var aB = player + 2 * aD.ek,
			dt = aCI[aB];
		return 0 < dt && (aN.a0F(50, player), aCI[aB] = 0, 255 === dt)
	}, this.a5b = function(player) {
		return 255 === aCI[player + 2 * aD.ek]
	}
}

function cd() {
	var aJo, aJp, aJq;
	this.dd = function() {
		aJo =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJp =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aJq = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6q = ["K ", " Y", "E ", " Z", " z", " s", "S "], aDJ = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aJo.length - 1; 0 <= aB; aB--)
			for (var f6 = a6q.length - 1; 0 <= f6; f6--) aJo[aB] = aJo[aB].replace(a6q[f6], aDJ[f6]);
		if (__fx.settings.realisticNames) aJo = realisticNames;
	}, this.a4g = function() {
		var en = aD.kA,
			yb = ag.yb,
			a0m = ag.a0m,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < en)
			for (var aB = 0; aB < en; aB++) yb[aB] = a0m[aB] = "Player " + ay.jR(1e3);
		else
			for (aB = 0; aB < en; aB++) yb[aB] = a0m[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kS) {
			for (var e7 = ay.random(), aJw = aJq, aJx = aJp, hW = aE.hW, en = aJw.length, l5 = aD.data.teamPlayerCount[7], yb = ag.yb, a0m = ag.a0m, aB = l5 - 1; aB >= aD.kA; aB--) yb[aB] = a0m[aB] = aJw[(aB + e7) % en];
			for (en = aJx.length - 1, aB = l5; aB < aD.ek; aB++) yb[aB] = a0m[aB] = aJx[hW[aB] ? en : aB % en]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var en = aD.ek, yb = ag.yb, a0m = ag.a0m, playerNamesData = aD.data.playerNamesData, aB = aD.kA; aB < en; aB++) yb[aB] = a0m[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var yb = ag.yb, a0m = ag.a0m, aB = aD.kA; aB < aD.ek; aB++) yb[aB] = a0m[aB] = "Bot " + ay.jR(1e3)
		} : function() {
			for (var aJy = aJo, en = aJy.length, e7 = ay.random(), yb = ag.yb, a0m = ag.a0m, aB = aD.kA; aB < aD.ek; aB++) yb[aB] = a0m[aB] = aJy[(aB + e7) % en]
		})()
	}
}

function cw() {
	this.aJz = [], this.aK0 = [], this.dd = function() {
		this.aJz = [], this.aK0 = []
	}, this.j3 = function() {
		0 <= this.aJz.length && this.aK1(this.aJz), 0 <= this.aK0.length && this.aK1(this.aK0)
	}, this.aK1 = function(g) {
		for (var f7 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eM--, g[aB].eM <= 0) {
				f7 = aB;
				break
			} for (aB = f7; 0 <= aB; aB--) g.shift()
	}, this.a5U = function(id, zw, aK2) {
		return this.f9(this.aJz, id, zw, aK2)
	}, this.aK3 = function(id, zw, aK2) {
		return this.f9(this.aK0, id, zw, aK2)
	}, this.f9 = function(g, id, zw, aK2) {
		return ! function(g, id, zw) {
			var aB, hf;
			for (aB = zw.length - 1; 0 <= aB; aB--)
				for (hf = g.length - 1; 0 <= hf; hf--)
					if (g[hf].player === zw[aB] && id === g[hf].id) return 1;
			return
		}(g, id, zw) && (aK2 && function(g, id, zw) {
			var aB;
			for (aB = zw.length - 1; 0 <= aB; aB--) g.push({
				player: zw[aB],
				id: id,
				eM: 384
			})
		}(g, id, zw), !0)
	}
}

function cc() {
	this.a0m = new Array(aD.ek), this.yb = new Array(aD.ek), this.a3S = new Uint8Array(aD.ek), this.mj = new Uint8Array(aD.ek), this.ie = new Uint16Array(aD.ek), this.ih = new Uint16Array(aD.ek), this.ig = new Uint16Array(aD.ek), this.ii =
		new Uint16Array(aD.ek), this.gb = new Uint32Array(aD.ek), this.xh = new Uint32Array(aD.ek), this.gp = new Uint32Array(aD.ek), this.gF = null, this.gT = null, this.gU = null, this.fD = null, this.pz = new Uint16Array(aD.ek), this.jC =
		new Uint16Array(aD.ek), this.jD = new Uint16Array(aD.ek), this.a0h = new Uint16Array(aD.ek), this.a0f = new Uint8Array(aD.ek), this.a3a = new Uint16Array(aD.ek), this.dd = function() {
			this.a0m.fill(""), this.yb.fill(""), this.a3S.fill(0), this.mj.fill(0), this.ie.fill(0), this.ih.fill(0), this.ig.fill(0), this.ii.fill(0), this.gb.fill(0), this.xh.fill(0), this.gp.fill(0), this.gF = new Array(aD.ek), this.gT =
				new Array(aD.ek), this.gU = new Array(aD.ek), this.fD = new Array(aD.ek), this.pz.fill(0), this.jC.fill(0), this.jD.fill(0), this.a0h.fill(0), this.a0f.fill(0), this.a3a.fill(0)
		}
}

function cu() {
	this.aCo = function(player) {
		aG.mi(player), aD.a0A++, ag.a3S[player] = 2, ag.a0h[player] = bi.a0x.aHO(), player === aD.eX && (aX.show(!1, !1), aW.aB0(), bR.zt.a0d()), af.a6Z(player)
	}
}

function cV() {
	this.kl = null, this.kg = 0, this.a4k = function() {
		for (this.kg = 0, aB = aD.ek - 1; 0 <= aB; aB--) 0 !== ag.mj[aB] && this.kg++;
		this.kl = new Uint16Array(this.kg);
		for (var en = 0, aB = 0; aB < aD.ek; aB++) 0 !== ag.mj[aB] && (this.kl[en++] = aB)
	}, this.mP = function() {
		for (var gb = ag.gb, xh = ag.xh, a0f = ag.a0f, kl = al.kl, aB = al.kg - 1; 0 <= aB; aB--) {
			var gL = kl[aB],
				dt = gb[gL],
				l5 = xh[gL];
			dt <= bL.du(l5, 4) ? ak.dm(gL) : l5 <= dt ? 250 <= (xh[gL] = dt) && (a0f[gL] = 1) : xh[gL] = l5 - Math.max(1, bL.du(l5 - dt, 1e3))
		}
		this.aK7()
	}, this.aK7 = function() {
		for (var mj = ag.mj, l4 = this.kl, aBi = this.kg, aB = aBi - 1; 0 <= aB; aB--) 0 === mj[l4[aB]] && (l4[aB] = l4[--aBi]);
		this.kg = aBi
	}
}

function cW() {
	var aK8 = new Uint16Array(aD.ek),
		aK9 = 0;

	function aKD(a6f, aKB) {
		var f8 = bf.k7();
		return 3213 <= f8 ? 4 + bL.du(100 * aKB, ae.jq(a6f)) : (a6f = 1 + bL.du(aD.ju, 300), f8 < 357 ? 2 + bL.du(100 * aKB, a6f) : f8 < 714 ? 2 + bL.du(100 * aKB, 4 * a6f) : f8 < 1071 ? 2 + bL.du(100 * aKB, 10 * a6f) : f8 < 2142 ? 2 + bL.du(100 *
			aKB, 30 * a6f) : 2 + bL.du(100 * aKB, 100 * a6f))
	}

	function aKC(a6f) {
		return aD.kU || 7 <= aD.kS || 4284 <= bf.k7() || bA.g9.jX(a6f)
	}
	this.dd = function() {
		aK8.fill(0), aK9 = 15
	}, this.hR = function(p8) {
		var player = aD.eX;
		return !!bA.g9.q1(player, p8) && !(!bA.g9.pR(player, bA.g9.iM(player, aR.hH()), p8) || (player = p8, p8 = bO.fK[0], !aKC(player) && aK8[player] + aKD(player, p8) > aK9))
	}, this.jG = function(a6f, aKB) {
		if (!aKC(a6f)) {
			aKB = aKD(a6f, aKB);
			if (aK8[a6f] + aKB > aK9) return !1;
			aK8[a6f] += aKB
		}
		return !0
	}, this.j3 = function() {
		bf.k7() % 100 == 99 && (bf.k7() < 1071 ? aK9 += 4 : bf.k7() < 2142 ? aK9 += 6 : bf.k7() < 3213 ? aK9 += 8 : aK9 += 10)
	}
}

function ce() {
	var aKE;
	this.kb = null, this.ka = 0, this.dd = function() {
		aKE = [], 9 === aD.kS && this.aKF()
	}, this.aKF = function() {
		this.kb = [0, 0, 0, 0, 0, 0];
		for (var aKG = [256, 227, 170, 148, 100, this.ka = 0, 0, 0], aKH = [0, 8, 24, 30, 46, 70, 256, 333], aKI = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kA, aB = 1; aB < aKG.length; aB++)
			if (j <= aKH[aB]) {
				this.ka = aKG[aB - 1] - bL.du((j - aKH[aB - 1]) * (aKG[aB - 1] - aKG[aB]), aKH[aB] - aKH[aB - 1]), this.kb[5] = aKI[aB - 1] - bL.du((j - aKH[aB - 1]) * (aKI[aB - 1] - aKI[aB]), aKH[aB] - aKH[aB - 1]), this.kb[0] = aD.ek - j - this
					.ka - this.kb[5];
				break
			} aD.kW = aD.ek - aD.kA, aD.data.numberTeams = (0 < aD.kA) + (0 < aD.kW), aD.data.playerCount = aD.xD = aD.kA + aD.kW, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kA + this.ka, aD.kW - this.ka]), aD.a4Z.a4e()
	}, this.aHV = function(player) {
		aKE.push({
			player: player,
			gG: 14 + ay.jR(20)
		})
	}, this.j3 = function() {
		if (9 === aD.kS)
			for (var aB = aKE.length - 1; 0 <= aB; aB--) --aKE[aB].gG <= 0 && (af.q9(aKE[aB].player, 0, aj.rq.yw + aj.rq.zA), aKE.splice(aB))
	}
}

function dB() {
	function aKX() {
		return {
			ey: bS.ey,
			ez: bS.ez,
			wf: bS.wf,
			wb: bS.wb,
			wc: bS.wc,
			wg: bS.wg,
			eT: bS.eT,
			mapSeed: bS.mapSeed,
			wd: bS.wd
		}
	}

	function aKP(aB) {
		return 1 !== aB && bS.aDT(aB) && aB !== bS.aKZ()
	}
	this.aKK = 22, this.aHg = 4096, this.ey = 0, this.ez = 0, this.wf = null, this.wb = null, this.wc = null, this.wg = null, this.eT = 0, this.mapSeed = 0, this.wd = !1, this.we = new aKL, this.wV = new aKM, this.a6w = new aKN, this.dd =
function() {
		this.wV.dd()
	}, this.a7 = function(map, aKO) {
		((map %= this.aKK) !== this.eT || aKP(this.eT) && aKO !== this.mapSeed) && (this.wd = !1, this.we.aKQ(), ay.a4f(map), this.eT = map, this.mapSeed = aKO, aKP(map) && (bS.wV.wW[map].aKR = aKO), this.aDT(this.eT) ? (map = bS.wV.wW[this.eT],
			this.ey = map.i, this.ez = map.j, ay.a4f(map.aKR), aq.a7([this.ey, this.ez, map.mo, map.ml]), aKT(), ap.aKU(), aq.aKV()) : aKS())
	}, this.aKW = function(map, aKO) {
		var fW = aKX(),
			map = (this.a7(map, aKO), this.we.aKQ(), aKX());
		return aKO = fW, bS.ey = aKO.ey, bS.ez = aKO.ez, bS.wf = aKO.wf, bS.wb = aKO.wb, bS.wc = aKO.wc, bS.wg = aKO.wg, bS.eT = aKO.eT, bS.mapSeed = aKO.mapSeed, bS.wd = aKO.wd, map
	}, this.a50 = function(canvas) {
		canvas && this.wf !== canvas && (this.ey = canvas.width, this.ez = canvas.height, this.wf = canvas, this.wb = this.wf.getContext("2d", {
			alpha: !1
		}), this.hm = this.wb.getImageData(0, 0, this.ey, this.ez), this.wg = this.hm.data, this.eT = this.aKZ(), this.mapSeed = 0, bS.wV.wW[this.eT].name = aD.data.mapName)
	}, this.eS = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aKZ()
	}, this.aKa = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aKb = function(aB) {
		return 1 === aB
	}, this.aKZ = function() {
		return this.aKK
	}, this.aDT = function(aB) {
		return void 0 === this.wV.wW[aB].aKc
	}, this.a4z = function(qS) {
		return 0 === qS.mapType ? qS.mapProceduralIndex < 10 ? qS.mapProceduralIndex : 10 + qS.mapProceduralIndex : 1 === qS.mapType ? qS.mapRealisticIndex + 10 : void 0
	}, this.aDU = function(qS, aKd) {
		0 === qS.mapType ? qS.mapProceduralIndex = aKd < 10 ? aKd : aKd - 10 : 1 === qS.mapType && (qS.mapRealisticIndex = aKd - 10)
	}
}

function aKL() {
	function aKm() {
		bS.we.j3()
	}

	function aKs(gL, aKr) {
		0 < aKr && (bS.wg[gL] += aKr, bS.wg[gL + 1] += aKr, bS.wg[gL + 2] += aKr)
	}

	function i1(gL) {
		return bS.wg[gL + 2] > bS.wg[gL] && bS.wg[gL + 2] > bS.wg[gL + 1]
	}
	this.a9N = -1, this.a1A = 0, this.aKe = 0, this.aKf = 8, this.aKg = 32, this.aKh = 8, this.aKi = 32, this.aKj = [0, 0], this.a8O = [0, 0, 0, 0], this.iX = null, this.aKk = !0, this.aKl = !1, this.aKQ = function() {
		-1 !== this.a9N && clearTimeout(this.a9N), this.a9N = -1, this.iX = null, aq.aKV()
	}, this.dd = function() {
		7 === aa.a1J() || this.aKl || (this.aKk = !0, this.a1A = 0, this.aKe = 1, this.aKj = [bS.wV.wW[bS.eT].wx[0], bS.wV.wW[bS.eT].wy[0]], this.a8O = [bS.wV.wW[bS.eT].aKc[3], bS.wV.wW[bS.eT].aKc[4], bS.wV.wW[bS.eT].aKc[5], bS.wV.wW[bS.eT].aKc[
			6]], this.aKf = bS.wV.wW[bS.eT].aKc[7], this.aKg = bS.wV.wW[bS.eT].aKc[8], this.aKh = bS.wV.wW[bS.eT].aKc[9], this.aKi = bS.wV.wW[bS.eT].aKc[10], this.aKk ? this.a9N = setTimeout(aKm, 16) : this.j3())
	}, this.j3 = function() {
		if (8 === aa.a1J() && aH.n1()) this.a9N = setTimeout(aKm, 16);
		else {
			if (0 === this.a1A) {
				var aKR = ay.aKn();
				if (ay.a4f(bS.wV.wW[bS.eT].aKc[2]), aq.a7([bS.ey, bS.ez, bS.wV.wW[bS.eT].aKc[0], bS.wV.wW[bS.eT].aKc[1]]), ay.a4f(aKR), this.iX = aq.aKo(), this.a1A++, this.aKk) return void(this.a9N = setTimeout(aKm, 16))
			}
			for (var gL, eZ, aKR = this.aKk ? 10 : 1e6, aKR = bS.ez - this.aKe - 1 < aKR ? bS.ez - this.aKe - 1 : aKR, xu = this.aKe + aKR, ew = this.aKe; ew < xu; ew++)
				for (var eu = 1; eu < bS.ey - 1; eu++) i1(gL = 4 * (eZ = eu + ew * bS.ey)) ? this.aKp(gL, eZ, 1) : (this.aKp(gL, eZ, 0), function(eu, ew, gL) {
					return 1 < eu && i1(gL - 4) || eu < bS.ey - 2 && i1(gL + 4) || 1 < ew && i1(gL - 4 * bS.ey) || ew < bS.ez - 2 && i1(gL + 4 * bS.ey)
				}(eu, ew, gL) && this.aKq(eu, ew));
			this.aKe = xu, this.aKe >= bS.ez - 1 ? (bS.wb.putImageData(bS.wc, 0, 0, 1, 1, bS.ey - 2, bS.ez - 2), bf.dl = !0, this.aKQ()) : this.aKk && (this.a9N = setTimeout(aKm, 16))
		}
	}, this.aKp = function(gL, eZ, e8) {
		aKs(gL, Math.floor(this.aKj[e8] + this.a8O[e8] * this.iX[eZ] / 1e4) - bS.wg[gL])
	}, this.aKt = function(gL, e7, aKu, e8, a8O) {
		aKs(gL, Math.floor(this.aKj[e8] + (1 - e7 / aKu) * a8O) - bS.wg[gL])
	}, this.aKq = function(lP, lQ) {
		for (var gL, e7, aKu, a9D = lP - this.aKg, aKv = lQ - this.aKg, xv = lP + this.aKg, xu = lQ + this.aKg, a9D = a9D < 1 ? 1 : a9D, xv = xv > bS.ey - 2 ? bS.ey - 2 : xv, xu = xu > bS.ez - 2 ? bS.ez - 2 : xu, ew = aKv < 1 ? 1 : aKv; ew <=
			xu; ew++)
			for (var eu = a9D; eu <= xv; eu++) i1(gL = 4 * (eu + ew * bS.ey)) ? (aKu = this.aKf + (this.aKg - this.aKf) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lP - eu) > aKu || Math.abs(lQ - ew) > aKu || aKu <= (e7 = Math.sqrt((lP - eu) * (
				lP - eu) + (lQ - ew) * (lQ - ew))) || this.aKt(gL, e7, aKu, 1, this.a8O[3])) : (aKu = this.aKh + (this.aKi - this.aKh) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lP - eu) > aKu || Math.abs(lQ - ew) > aKu || aKu <= (e7 = Math
				.sqrt((lP - eu) * (lP - eu) + (lQ - ew) * (lQ - ew))) || this.aKt(gL, e7, aKu, 0, this.a8O[2]))
	}
}

function aKT() {
	var uS = aKw(bS.eT);
	uS && aKx(uS[0], uS[1], uS[2], uS[3], uS[4])
}

function aKw(eT) {
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

function aKx(aKy, aKz, aL0, aL1, aL2) {
	for (var eu, ew, aL4, aL5, a2V, aL7, i6 = aKy.length - 1, aL3 = bS.ey + bS.ez, en = (aL3 *= aL3, aL0.length), aL6 = Array(en), aB = en - 1; 0 <= aB; aB--) aL6[aB] = aL0[aB] * aL0[aB];
	var aL8 = new Array(en),
		aCF = new Array(en),
		aL9 = new Array(en),
		fF = aq.aKo();
	if (void 0 === aL2)
		for (aL2 = new Array(en), aB = en - 1; 0 <= aB; aB--) aL2[aB] = 0;
	for (aB = 1; aB < en; aB++) aL8[aB] = aL6[aB] - aL6[aB - 1], aCF[aB] = aL1[aB] - aL1[aB - 1], aL9[aB] = aL2[aB] - aL2[aB - 1];
	for (eu = bS.ey - 1; 0 <= eu; eu--)
		for (ew = bS.ez - 1; 0 <= ew; ew--) {
			for (aL4 = aL3, aB = i6; 0 <= aB; aB--) aL4 = (aL5 = (eu - aKy[aB]) * (eu - aKy[aB]) + (ew - aKz[aB]) * (ew - aKz[aB])) < aL4 ? aL5 : aL4;
			for (a2V = aL1[en - 1], aL7 = aL2[en - 1], aB = 1; aB < en; aB++)
				if (aL4 < aL6[aB]) {
					a2V = aL1[aB - 1] + aGw((aL4 - aL6[aB - 1]) * aCF[aB], aL8[aB]), aL7 = aL2[aB - 1] + aGw((aL4 - aL6[aB - 1]) * aL9[aB], aL8[aB]);
					break
				} aLA(bS.ey * ew + eu, a2V, aL7, fF)
		}
}

function aLA(e8, a2V, aL7, fF) {
	a2V < 500 ? fF[e8] = bL.du(fF[e8] * a2V * 2, 1e3) : 500 < a2V && (fF[e8] += bL.du(2 * (1e4 - fF[e8]) * (a2V - 500), 1e3)), fF[e8] += bL.du(aL7 * (10 * a2V - fF[e8]), 1e3)
}

function cg() {
	var aLB;

	function aLL(a2w, ho, eu, ew, globalAlpha) {
		bS.wb.save(), bS.wb.globalAlpha = globalAlpha, bS.wb.imageSmoothingEnabled = !1, bS.wb.scale(ho, ho), bS.wb.drawImage(a2w, Math.floor(eu * (bS.ey / ho - a2w.width)), Math.floor(ew * (bS.ez / ho - a2w.height))), bS.wb.restore()
	}
	this.a6t = 0, this.a6u = 0, this.a6v = 0, this.a6w = 0, this.dd = function() {
		(aLB = new Array(bS.aKK))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e7: [220, 250, 255, 220],
			tD: [190, 220, 0, 0],
			f7: [170, 200, 0, 0]
		}, aLB[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e7: [25, 0, 100, 0, 25],
			tD: [25, 0, 0, 0, 25],
			f7: [25, 0, 0, 0, 25]
		}, aLB[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tD: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aLB[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tD: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aLB[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e7: [10, 10, 20, 10, 10, 170, 212],
			tD: [20, 20, 60, 100, 100, 110, 170],
			f7: [70, 70, 160, 30, 30, 60, 120]
		}, aLB[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tD: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aLB[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e7: [10, 10, 60, 255, 255, 200, 200],
			tD: [10, 10, 60, 255, 255, 200, 200],
			f7: [80, 80, 255, 255, 255, 200, 200]
		}, aLB[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tD: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aLB[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tD: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aLB[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tD: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aLB[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tD: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aLB[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tD: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aKU = function() {
		var aLK, aB, f6, fW, hm = function() {
				var hm;
				return bS.wf = document.createElement("canvas"), bS.wf.width = bS.ey, bS.wf.height = bS.ez, bS.wb = bS.wf.getContext("2d", {
					alpha: !1
				}), hm = bS.wb.getImageData(0, 0, bS.ey, bS.ez), bS.wg = hm.data, hm
			}(),
			i = aLB[bS.eT].i,
			e7 = aLB[bS.eT].e7,
			tD = aLB[bS.eT].tD,
			f7 = aLB[bS.eT].f7,
			fF = aq.aKo(),
			en = i.length - 2,
			aLF = new Array(1 + en),
			aLG = new Array(1 + en),
			aLH = new Array(1 + en),
			aLI = new Array(1 + en);
		for (f6 = en; 0 <= f6; f6--) aLF[f6] = i[f6 + 1] - i[f6], aLG[f6] = e7[f6 + 1] - e7[f6], aLH[f6] = tD[f6 + 1] - tD[f6], aLI[f6] = f7[f6 + 1] - f7[f6];
		for (aB = bS.ey * bS.ez - 1; 0 <= aB; aB--)
			for (f6 = en; 0 <= f6; f6--)
				if (fF[aB] >= i[f6]) {
					fW = fF[aB] - i[f6], bS.wg[4 * aB] = e7[f6] + aGw(aLG[f6] * fW, aLF[f6]), bS.wg[4 * aB + 1] = tD[f6] + aGw(aLH[f6] * fW, aLF[f6]), bS.wg[4 * aB + 2] = f7[f6] + aGw(aLI[f6] * fW, aLF[f6]), bS.wg[4 * aB + 3] = 255;
					break
				} bS.wb.putImageData(hm, 0, 0), bS.aKb(bS.eT) && ab.tH() && bS.aKb(bS.eT) && (hm = ab.aG7("arena"), aLK = ab.aG7("territorial.io"), aLL(hm, 5, .5, .5, .1), aLL(aLK, 2, .5, .45, .1)), bS.wd = !0, bf.dl = !0
	}, this.a4i = function() {
		for (var gL, eu, ew, aLM, hd, fY, a6u = 0, i = bS.ey, j = bS.ez, fW = i * j * 4, aLN = aBs, aLO = bS.wg, aB = i - 1; 0 <= aB; aB--) aLN[(gL = aB << 2) + 2] = aLN[fW - gL - 2] = 3;
		for (fW = 4 * i, aB = j - 1; 0 <= aB; aB--) aLN[(gL = aB * fW) + 2] = aLN[gL + fW - 2] = 3;
		for (aLM = i - 1, hd = j - 1, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aLM; eu++) fY = 1 - (aLO[(gL = fW + eu << 2) + 2] > aLO[gL + 1] && aLO[gL + 2] > aLO[gL]), aLN[gL + 2] = 6 - 5 * fY, a6u += fY;
		this.a6t = (i - 2) * (j - 2), this.a6w = 0, bS.eS(bS.eT) && (bS.a6w.aLP(), bS.a6w.aLQ(4, 5)), this.a6u = aD.ju = a6u - this.a6w, this.a6v = this.a6t - this.a6u - this.a6w, this.a6v && (bS.a6w.aLQ(6, 2), bS.a6w.aLR())
	}
}

function aKS() {
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
			), (new wO).wQ(qH)
}

function aKM() {
	this.wW = null, this.aLS = null, this.aLT = null, this.dd = function() {
		var aLU = [120, 105, 92],
			cos = [12, 12, 60],
			aLV = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aLW = [140, 130, 120],
			aLX = [12, 12, 76],
			aLY = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aLZ = [130, 117, 106],
			aLa = [12, 12, 68],
			aLb = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wW = new Array(bS.aKK + 1), this.wW[0] = {
			name: L(133),
			i: 230,
			j: 230,
			mo: 1e3,
			ml: 2e3,
			aKR: 173
		}, this.wW[1] = {
			name: L(134),
			i: 800,
			j: 800,
			mo: 100,
			ml: 50,
			aKR: 43
		}, this.wW[2] = {
			name: L(135),
			i: 512,
			j: 512,
			mo: 128,
			ml: 32,
			aKR: 0
		}, this.wW[3] = {
			name: L(136) + " 1",
			i: 960,
			j: 960,
			mo: 60,
			ml: 8,
			aKR: 0
		}, this.wW[4] = {
			name: L(137),
			i: 900,
			j: 900,
			mo: 100,
			ml: 5,
			aKR: 0
		}, this.wW[5] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mo: 100,
			ml: 40,
			aKR: 0
		}, this.wW[6] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			mo: 100,
			ml: 20,
			aKR: 0
		}, this.wW[7] = {
			name: L(140),
			i: 1024,
			j: 1024,
			mo: 128,
			ml: 32,
			aKR: 0
		}, this.wW[8] = {
			name: L(141),
			i: 820,
			j: 820,
			mo: 200,
			ml: 100,
			aKR: 0
		}, this.wW[9] = {
			name: L(142),
			i: 1024,
			j: 1024,
			mo: 128,
			ml: 32,
			aKR: 0
		}, this.wW[10] = {
			name: L(143),
			wx: aLW,
			wy: aLX,
			aKc: aLY
		}, this.wW[11] = {
			name: L(144),
			wx: aLZ,
			wy: aLa,
			aKc: aLb
		}, this.wW[12] = {
			name: L(145),
			wx: aLZ,
			wy: aLa,
			aKc: aLb
		}, this.wW[13] = {
			name: L(146),
			wx: aLU,
			wy: cos,
			aKc: aLV
		}, this.wW[14] = {
			name: L(147),
			wx: aLU,
			wy: cos,
			aKc: aLV
		}, this.wW[15] = {
			name: L(148),
			wx: aLW,
			wy: aLX,
			aKc: aLY
		}, this.wW[16] = {
			name: L(149),
			wx: aLW,
			wy: aLX,
			aKc: aLY
		}, this.wW[17] = {
			name: L(150),
			wx: aLU,
			wy: cos,
			aKc: aLV
		}, this.wW[18] = {
			name: L(151),
			wx: aLZ,
			wy: aLa,
			aKc: aLb
		}, this.wW[19] = {
			name: L(152),
			wx: aLU,
			wy: cos,
			aKc: aLV
		}, this.wW[20] = {
			name: L(153),
			i: 1024,
			j: 1024,
			mo: 128,
			ml: 32,
			aKR: 0
		}, this.wW[21] = {
			name: L(136) + " 2",
			i: 940,
			j: 940,
			mo: 80,
			ml: 8,
			aKR: 0
		}, this.wW[bS.aKK] = {
			name: ""
		}, this.aLS = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aLS[aB] = aB;
		for (this.aLS[10] = 20, this.aLS[11] = 21, this.aLT = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aLT[aB] = 10 + aB
	}
}

function aKN() {
	this.aLP = function() {
		for (var gL, eu, fW, aLN = aBs, aLO = bS.wg, i = bS.ey, aLM = i - 1, hd = bS.ez - 1, gG = 0, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aLM; eu++) aLO[gL = fW + eu << 2] === aLO[1 + gL] && aLO[gL] === aLO[2 + gL] && (gG++, aLN[2 + gL] = 4);
		ap.a6w = gG
	}, this.aLQ = function(aLc, aLd) {
		for (var aLN = aBs, i = bS.ey, aLM = i - 1, hd = bS.ez - 1, id = 0, ew = 1; ew < hd; ew++)
			for (var fW = ew * i, eu = 1; eu < aLM; eu++) {
				var eR = 2 + (fW + eu << 2);
				aLN[eR] === aLc && (! function(eR, id, aLc, aLd) {
					var en = 1,
						aLN = aBs,
						ep = ac.ep,
						a2i = [eR],
						aLf = id >> 8 << 1,
						aLg = 255 & id;
					aLN[eR - 2] = aLf, aLN[eR - 1] = aLg, aLN[eR] = 5;
					for (; en;) {
						for (var a2j = [], aB = 0; aB < en; aB++)
							for (var ec = a2i[aB], eq = 3; 0 <= eq; eq--) {
								var er = ec + ep[eq];
								aLN[er] === aLc && (aLN[er - 2] = aLf, aLN[er - 1] = aLg, aLN[er] = aLd, a2j.push(er))
							}
						en = (a2i = a2j).length
					}
				}(eR, id, aLc, aLd), id = (id + 1) % 32768)
			}
	}, this.aLR = function() {
		for (var aLN = aBs, i = bS.ey, aLM = i - 3, hd = bS.ez - 3, aLi = 12 * i, ew = 3; ew < hd; ew++)
			for (var fW = ew * i, eu = 3; eu < aLM; eu++) {
				var eR = 2 + (fW + eu << 2);
				2 !== aLN[eR] || 2 === aLN[eR - 12] && 2 === aLN[12 + eR] && 2 === aLN[eR - aLi] && 2 === aLN[eR + aLi] || (aLN[eR - 2] = 1 | aLN[eR - 2])
			}
	}
}

function a4h() {
	(yG = void 0 === yG ? document.createElement("canvas") : yG).width = bS.ey, yG.height = bS.ez, a4l = yG.getContext("2d", {
		alpha: !0
	}), a4m = aBs = null, a4m = a4l.getImageData(0, 0, bS.ey, bS.ez), aBs = a4m.data, bA.qi.wh(aBs)
}

function ch() {
	var fF, i, j, max, aLj, ml, aLl, aLm, aLn, aLo, aLp, aLq, aLr, aLs, aLk = 1e4;

	function aLz(aLy, mo, en) {
		var aB;
		for (aLl[0] = aLy, aB = 1; aB < en; aB++) aLl[aB] = aLl[aB - 1] + mo, mo = aLl[aB] >= aLk ? (aLl[aB] = aLk - 1, -mo) : aLl[aB] < 0 ? (aLl[aB] = 0, -mo) : (mo += 16384 <= ay.random() ? ml : -ml) < -aLj ? -aLj : aLj < mo ? aLj : mo
	}

	function aM1(eu, ew, aM2, en) {
		(aM2 ? function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB] = aLl[aB]
		} : function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB * i] = aLl[aB]
		})(eu, ew, en)
	}

	function aM5(value, en) {
		var aB, aJl, eR, jP = value - aLl[en - 1];
		if (0 != jP) {
			for (aJl = 1 + bL.du(Math.abs(jP), en - 1), aJl = jP < 0 ? -aJl : aJl, aLl[en - 1] = value, eR = (eR = en - 1 - bL.du(Math.abs(jP), Math.abs(aJl))) < 1 ? 1 : en - 2 < eR ? en - 2 : eR, aB = en - 2; eR <= aB; aB--) aLl[aB] += jP - (en -
				1 - aB) * aJl;
			(jP < 0 ? function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLl[aB] < 0 && (aLl[aB] = -aLl[aB] - 1)
			} : function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLl[aB] >= aLk && (aLl[aB] = 2 * aLk - aLl[aB] - 1)
			})(en)
		}
	}

	function aM8(a2i, a2j, en) {
		for (var aB = 0; aB < en; aB++) a2i[aB] = a2j[aB]
	}

	function aM9(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aMA(a5O, gap, he) {
		aLm.push(a5O), aLn.push(gap), aLo.push(he)
	}
	this.a7 = function(a3v) {
		! function(a3v) {
			var aB;
			for (i = a3v[0], j = a3v[1], aLj = a3v[2], ml = a3v[3], fF = new Int16Array(i * j), max = j < i ? i : j, aLl = new Int16Array(max), aLm = [], aLn = [], aLo = [], aLp = new Array(i), aLq = new Array(j), aB = i - 1; 0 <= aB; aB--) aLp[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aLq[aB] = !1;
			aLr = new Int16Array(i), aLs = new Int16Array(j)
		}(a3v),
		function(en) {
			var aLy = ay.random() % aLk,
				mo = ay.random() % (2 * aLj + 1) - aLj;
			aLz(aLy, mo, en)
		}(max), aM8(aLs, aLl, j), aM1(0, 0, !0, i);
		var eu, ew, a3v = fF[0],
			en = max,
			mo = ay.random() % (2 * aLj + 1) - aLj;
		for (aLz(a3v, mo, en), aM8(aLr, aLl, i), aM1(0, 0, !1, j), aM9(aLr), aM9(aLs), aLz(fF[i - 1], aLr[i - 1], j), aM1(i - 1, 0, !1, j), aLz(fF[i * (j - 1)], aLs[j - 1], i), aM5(fF[i * j - 1], i), aM1(0, j - 1, !0, i), aLp[i - 1] = aLp[0] = !
			0, aLq[j - 1] = aLq[0] = !0, aMA(0, i, !0), aMA(0, j, !1), ! function() {
				var aMC, a5O;
				for (;;) {
					if (aMC = function() {
							var aB, aMC = aLm.length - 1;
							for (aB = aMC - 1; 0 <= aB; aB--) aLn[aB] > aLn[aMC] && (aMC = aB);
							return aMC
						}(), aLn[aMC] < 5) return;
					a5O = aLm[aMC] + bL.du(aLn[aMC], 2), (aLo[aMC] ? function(eu) {
						var en, aMF, aB, aFX = 0,
							aMG = 0;
						for (; aMG < j - 1;) {
							for (aB = aFX + 1; aB < j; aB++)
								if (aLq[aB]) {
									aMG = aB;
									break
								} en = aMG - aFX + 1, aLz(fF[eu + i * aFX], 0 === aFX ? aLr[eu] : aLl[aMF - 1] - aLl[aMF - 2], en), aM5(fF[aMG * i + eu], en), aM1(eu, aFX, !1, en), aMF = en, aFX = aMG
						}
						aLp[eu] = !0
					} : function(ew) {
						var en, aMF, aB, aFX = 0,
							aMG = 0;
						for (; aMG < i - 1;) {
							for (aB = aFX + 1; aB < i; aB++)
								if (aLp[aB]) {
									aMG = aB;
									break
								} en = aMG - aFX + 1, aLz(fF[ew * i + aFX], 0 === aFX ? aLs[ew] : aLl[aMF - 1] - aLl[aMF - 2], en), aM5(fF[ew * i + aMG], en), aM1(aFX, ew, !0, en), aMF = en, aFX = aMG
						}
						aLq[ew] = !0
					})(a5O), aMA(a5O, aLm[aMC] + aLn[aMC] - a5O, aLo[aMC]), aLn[aMC] = a5O - aLm[aMC] + 1
				}
			}(), eu = 0; eu < i; eu++)
			if (!aLp[eu])
				for (ew = 0; ew < j; ew++) aLq[ew] || ! function(eu, ew) {
					var value = fF[ew * i + eu - 1] + fF[(ew - 1) * i + eu],
						a77 = 2;
					aLp[eu + 1] && (a77++, value += fF[ew * i + eu + 1]);
					aLq[ew + 1] && (a77++, value += fF[(ew + 1) * i + eu]);
					fF[ew * i + eu] = bL.du(value, a77)
				}(eu, ew)
	}, this.aKo = function() {
		return fF
	}, this.aKV = function() {
		fF = null
	}
}

function aGw(f6, f7) {
	return 0 <= f6 ? bL.du(f6, f7) : -bL.du(-f6, f7)
}

function jg(fF) {
	return fF * fF
}

function a6M(f6, f7) {
	return f7 < f6 ? f6 : f7
}

function aBM(f6, f7) {
	return f6 < f7 ? f6 : f7
}

function a8i(f6, fF, f7) {
	return fF < f6 ? f6 : f7 < fF ? f7 : fF
}

function aMI(fF, en) {
	for (var f8 = bL.du(fF + 1, 2), aB = 0; aB < en; aB++) f8 = bL.du(f8 + bL.du(fF, f8), 2);
	return f8
}

function aIH(fF, en) {
	return fF < 1 ? 0 : aMI(fF, en)
}

function aMJ(n9, nA, sw, a8R, nM, nN, sx, te) {
	return !(n9 + sw <= nM || nA + a8R <= nN || nM + sx <= n9 || nN + te <= nA)
}

function aMK(n9, nA, sw, a8R, nM, nN, sx, te) {
	return n9 <= nM && nA <= nN && nM + sx <= n9 + sw && nN + te <= nA + a8R
}

function wY(fF) {
	return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
}

function bx() {
	this.du = function(f6, f7) {
		return Math.floor((f6 + .5) / f7)
	}, this.aML = function(f6, f7) {
		return Math.floor(f6 * (f7 + .5))
	}, this.sqrt = function(fF) {
		return ~~Math.sqrt(fF + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.hv = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aMM = function(fW, fY, fa) {
		return Math.max(Math.min(fW, fY), fa)
	}, this.aMN = function(aMO, aMP, eu, ew) {
		eu -= aMO, aMO = ew - aMP, ew = 0;
		return 0 == eu ? ew = 0 <= aMO ? Math.PI : 0 : (ew = Math.atan(aMO / eu), ew += 0 < eu ? .5 * Math.PI : 1.5 * Math.PI), ew
	}, this.log2 = function(fF) {
		return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
	}, this.log10 = function(fF) {
		return Math.floor(Math.log10(fF + .5))
	}, this.aMR = function(aMS, aMT, aMU, aMV, aMW) {
		return aMU - aMW < aMS && aMS < aMU + aMW && aMV - aMW < aMT && aMT < aMV + aMW
	}, this.xV = function(a98, a9A) {
		return a98 * a98 + a9A * a9A
	}
}

function dD() {
	this.y = new aMX, this.sp = 0;
	var aMY = new Array(31);

	function aMc() {
		for (var en = aMY.length, aB = 0; aB < en; aB++) aMY[aB] = null
	}
	this.dd = function() {
		for (var aMZ, aMa = document.body.firstChild; aMa;) aMZ = aMa.nextSibling, !document.body.contains(aMa) || "DIV" !== aMa.tagName && "INPUT" !== aMa.tagName && "BUTTON" !== aMa.tagName || t.removeChild(document.body, aMa), aMa = aMZ
	}, this.u = function(e8, aMb, a3v) {
		void 0 === aMb && (aMb = this.sp), bf.dl = !0, 0 === e8 && (0 === aa.a1J() ? e8 = 5 : a0.a1.setState(13)), this.rr(), this.sp === e8 && (aMb = aMY[e8].aMb, aMY[e8] = null), this.sp = e8;
		var l5 = aMY[e8];
		if (!l5 || 4 === e8 || 7 === e8 || 8 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 15 === e8 || 18 === e8 || 20 <= e8 && e8 <= 28 || 32 === e8 || 33 === e8) {
			if (0 === e8) return void aMc();
			1 === e8 ? l5 = new aMd : 2 === e8 ? l5 = new aMe : 3 === e8 ? l5 = new aMf : 4 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 33 === e8 ? l5 = a3v : 5 === e8 ? l5 = new aMg : 6 === e8 ? l5 = new aMh : 7 === e8 ? l5 =
				new aMi(t.y.aMj) : 8 === e8 ? l5 = a3v : 12 === e8 ? l5 = new aMk : 14 === e8 ? l5 = new aMl : 15 === e8 ? l5 = new aMi(t.y.aMm) : 16 === e8 ? l5 = new aMn : 17 === e8 ? l5 = new aMo : 18 === e8 ? l5 = new aMp : 19 === e8 ? l5 =
				new aMq : 20 === e8 ? l5 = new aMr : 21 === e8 ? l5 = new aMs : 22 === e8 ? l5 = new aMt : 23 === e8 ? l5 = new aMu : 24 === e8 ? l5 = new aMv : 25 === e8 ? l5 = new aMw : 26 === e8 ? l5 = new aMx : 27 === e8 ? l5 = new aMy :
				28 === e8 ? l5 = new aMz : 29 === e8 ? l5 = new aN0 : 30 === e8 && (l5 = new aN1), l5.aMb = aMb, aMY[e8] = l5
		}
		l5.show(a3v)
	}, this.a1I = function() {
		this.hZ() && this.aN2(this.a58().aMb)
	}, this.aN2 = function(e8) {
		this.hZ() && (aMY[e8] ? (this.rr(), bf.dl = !0, this.sp = e8, aMY[e8].show()) : this.u(e8))
	}, this.rr = function() {
		this.hZ() && aMY[this.sp].rr()
	}, this.x = function() {
		this.hZ() && (aMY[this.sp].rr(), aMc(), this.sp = 0, a0.a1.setState(13))
	}, this.ui = function() {
		var l5;
		this.hZ() && (l5 = aMY[this.sp]).ui && l5.ui()
	}, this.resize = function() {
		if (!this.hZ()) return !1;
		aMY[this.sp].resize()
	}, this.h0 = function(eu, ew) {
		var l5;
		this.hZ() && (l5 = aMY[this.sp]).h0 && l5.h0(eu, ew)
	}, this.a1c = function(eu, ew) {
		var l5;
		this.hZ() && (l5 = aMY[this.sp]).a1c && l5.a1c(eu, ew)
	}, this.a20 = function() {
		var l5;
		this.hZ() && (l5 = aMY[this.sp]).a20 && l5.a20()
	}, this.a1f = function(lP, lQ, deltaY) {
		var l5;
		this.hZ() && (l5 = aMY[this.sp]).a1f && l5.a1f(lP, lQ, deltaY)
	}, this.a2A = function(code) {
		var l5;
		return !!this.hZ() && ((l5 = aMY[this.sp]).a2A && l5.a2A(code), !0)
	}, this.j3 = function() {
		var l5;
		this.hZ() && (l5 = aMY[this.sp]) && l5.j3 && l5.j3()
	}, this.hZ = function() {
		return 0 < this.sp
	}, this.a58 = function() {
		return aMY[this.sp]
	}, this.a59 = function(e8) {
		return aMY[e8]
	}, this.aN3 = function() {
		return aMY
	}, this.removeChild = function(aN4, a3R) {
		try {
			aN4.removeChild(a3R)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aMi(data) {
	var aN5, aN6;
	this.show = function() {
		data.aN7 && bI.aO1("account", data.sn), aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aN6.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a1I()
	}), new w(data.aN7 ? "🔄 " + L(154) : L(155), function() {
		t.u(8, data.aN7 ? t.a58().aMb : void 0, new sq(25, {
			sr: 0,
			sn: data.sn,
			so: data.so
		}))
	}, 0, 0, 1)]), aN6 = new qT(aN5.uZ, function() {
		var qV = [];
		qV.push(function() {
				var aNP = new qD,
					a0q = (aNP.qG(L(207)), data.aNh);
				a0q < 1 ? (aNP.qM(L(208)), 0 === data.aNi ? aNP.qI(L(209)) : 1 === data.aNi ? aNP.qI(L(210)) : 2 === data.aNi ? aNP.qI(L(211)) : 3 === data.aNi ? aNP.qI(L(212)) : 4 === data.aNi ? aNP.qI(L(213)) : 5 === data.aNi ? aNP.qI(
					L(214)) : 6 === data.aNi ? aNP.qI(L(215)) : aNP.qI(L(216))) : (aNP.qM(L(217)), a0q = a0q < 2 ? "some seconds" : a0q < 61 ? a0q - 1 + L(218) + (2 < a0q ? "s" : "") : a0q < 84 ? a0q - 60 + L(219) + (61 < a0q ? "s" :
					"") : a0q < 255 ? a0q - 83 + L(220) + (84 < a0q ? "s" : "") : "a long time", aNP.qI("Last active " + a0q + " ago."));
				{
					var qJ, aNS;
					aNP.qR(new sF), data.aN7 && (qJ = aNP.qI(), aNP.qR(new s5([new w(bj.v8.u4(data.sn) ? L(221) : L(222), function(e) {
						return bj.v8.vL(data.sn) ? (e.textContent = L(221), aNS(1)) : (e.textContent = L(222), aNS(0)), !0
					}).button])), aNS = function(fF) {
						qJ.textContent = fF ? L(223) : ""
					}, bj.v8.u4(data.sn) && aNS(1), aNP.qR(new sF))
				}
				var rN = new rO({
					value: data.username,
					e8: -1
				});
				rN.e.readOnly = !0, aNP.qR(rN), aNP.qR(new s5([new w(L(173), function(e) {
					return bA.qa.a3O(rN.e), bA.qa.a3P(e), !0
				}).button])), data.aN7 || aNP.qI(L(224));
				return aNP
			}()),
			function(qV) {
				var aNP, qJ, aC6, aNk, aNY;
				data.aN7 || ((aNP = new qD).qG(L(225)), (qJ = aNP.qI(data.aNj.length + " / 160")).style.textAlign = "center", aC6 = !0, (aNk = new ur(0, 1, function(e) {
					e = e.target.value.length;
					qJ.textContent = e + " / 160", 160 < e ? aC6 && (aC6 = !1, aNY.qu(1), aNY.button.style.color = bB.nj) : aC6 || (aC6 = !0, aNY.qu(0), aNY.button.style.color = bB.oh)
				})).e.rows = 6, aNk.e.style.fontSize = "1em", aNk.uy(data.aNj), aNP.qR(aNk), aNY = new w(L(226), function() {
					if (!aC6) return !0;
					t.u(8, t.a58().aMb, new sq(29, {
						sr: 1,
						qH: aNk.v0().substring(0, 160)
					}))
				}, 0, 0, 1), aNP.qR(new s5([aNY.button])), 0 !== data.aNl && (aNP.qR(new s5([new w(L(1 === data.aNl ? 228 : 229), function() {
					t.u(8, t.a58().aMb, new sq(29, {
						sr: 0,
						qH: ""
					}))
				}, 0, 0, 1).button])), aNP.qI(1 === data.aNl ? L(230, [data.aNn - 1]) : L(231, [data.aNn - 1]))), aNP.qI(L(227, [data.aNm])), qV.push(aNP))
			}(qV),
			function(qV) {
				var aNP;
				data.aN7 && 0 !== data.aNl && ((aNP = new qD).qG(L(232)), aNP.qK(data.aNj), aNP.qR(new s5([new w(L(233, 0, "Report"), function(e) {
					return b0.y.aNU(0) && (bA.qa.a3P(e), b0.aNW.aNo({
						sr: 5,
						sn: data.sn
					})), !0
				}, 0, 0, 1).button])), qV.push(aNP))
			}(qV), qV.push(function() {
				var aNP = new qD,
					aNQ = (aNP.qG(L(156)), [L(157), L(158), L(159), L(160), L(161)]),
					e7 = data.aNR;
				aNP.qM(L(162) + bA.rZ.a4C(data.vv, .01, 2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vu + "<br>" + L(164) + aNQ[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : e7 < 1e3 ? 3 : 4]), data.aN7 || (aNP.qI(L(165)), aNP.qI(L(166)),
					aNP.qI(L(167)));
				return aNP
			}()), data.aN7 && qV.push(function() {
				var aNP = new qD,
					rN = (aNP.qG(L(168)), new rO({
						value: bj.eK.data[147].value,
						e8: -1
					}, 1, void 0, function(e) {
						bj.s2.s3(147, aNS(e.target.value))
					})),
					aNT = (aNP.qR(rN), new w(L(14), function(e) {
						return rN.e.readOnly && b0.y.aNU(0) && (bA.qa.a3P(e), aNV(), b0.aNW.aNX({
							sr: 0,
							sn: data.sn,
							value: parseInt(bj.eK.data[147].value, 10)
						})), !0
					}, 1)),
					aNY = new w(L(169), function(e) {
						return e.textContent === L(169) ? (e.textContent = L(170), rN.e.readOnly = !0, aNT.qu(0), aNT.button.style.color = bB.oh, bj.s2.s3(147, rN.e.value), aNS(bj.eK.data[147].value)) : aNV(), !0
					}),
					qJ = (aNP.qR(new s5([aNY.button])), aNP.qI()),
					aNS = function(fF) {
						fF = bA.g9.a3s(fF, 2, 1e6);
						var aNZ = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
						qJ.textContent = L(171, [fF, bj.eK.data[105].value, aNZ, data.sn, fF - aNZ])
					},
					aNV = function() {
						aNY.button.textContent = L(169), rN.e.readOnly = !1, aNT.qu(1), aNT.button.style.color = bB.nj
					};
				return aNS(bj.eK.data[147].value), aNP.qR(new s5([aNT.button])), aNP
			}());
		qV.push(function() {
			var aNP = new qD,
				rN = (aNP.qG(L(172)), new rO({
					value: data.sn,
					e8: -1
				}));
			return rN.e.readOnly = !0, aNP.qR(rN), aNP.qR(new s5([new w(L(173), function(e) {
				return bA.qa.a3O(rN.e), bA.qa.a3P(e), !0
			}).button])), aNP
		}()), data.aN7 || (qV.push(function() {
			var aNP = new qD,
				aNa = (aNP.qG(L(174)), new rO(bj.eK.data[106]));
			return aNa.e.readOnly = !0, aNa.e.type = "password", aNP.qR(aNa), aNP.qR(new s5([new w(L(175), function(e) {
				return e.textContent === L(175) ? (e.textContent = L(176), aNa.e.type = "text") : (e.textContent = L(175), aNa.e.type = "password"), !0
			}).button, new w(L(173), function(e) {
				return bA.qa.a3O(aNa.e), bA.qa.a3P(e), !0
			}).button])), aNP.qR(new s5([new w(L(177), function() {
				t.u(8, t.a58().aMb, new sq(15))
			}).button])), aNP.qG(L(178), "0.8em"), aNP.qI(L(179)), aNP.qI(L(180)), aNP.qI(L(181)), aNP
		}()), qV.push(function() {
			var aNP = new qD;
			return aNP.qG(L(182)), aNP.qR(new s5([new w(L(183), function() {
				t.u(6, t.a58().aMb)
			}).button])), aNP.qR(new s5([new w(L(184), function() {
				bj.s2.s3(105, ""), t.u(8, t.a58().aMb, new sq(18))
			}).button])), aNP.qR(new s5([new w(L(185) + bj.eK.data[105].value, function() {
				t.u(4, 0, new v(L(186), L(187), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a59(7).aMb)
				})]))
			}, bB.oO).button])), aNP
		}()), qV.push(function() {
			function aNc(e8) {
				aNb[0].qu(0 === e8 ? bB.nv : bB.o6), aNb[1].qu(0 === e8 ? bB.nv : bB.oO), aNb[2].qu(e8 === qP.qQ.length - 1 || e8 < 5 ? bB.nv : bB.oO)
			}
			var qP, aNb, aNP = new qD;
			aNP.qG(L(192)), aNP.qI(L(193)), bj.y.vf();
			return aNb = [new w(L(194), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				e8 < 1 || (e8 = bj.y.vj(e8), bj.s2.s3(105, e8.sn), bj.s2.s3(106, e8.password), t.u(8, t.a58().aMb, new sq(18)))
			}, bB.nv, 1), new w(L(190), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				if (!(e8 < 1)) {
					qP.qQ[e8].remove(), qP.qQ.splice(e8, 1);
					for (var aB = e8; aB < qP.qQ.length; aB++) qP.qQ[aB].name = "" + aB;
					bj.y.vi(e8), e8 = bj.eK.data[117].value, qP.qQ[e8].textContent = qP.qQ[e8].textContent.replace("⚪", "🟢"), aNc(e8)
				}
			}, bB.nv, 1), new w(L(191), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				if (e8 !== qP.qQ.length - 1) {
					for (var aB = qP.qQ.length - 1; e8 < aB; aB--) qP.qQ[aB].remove(), qP.qQ.splice(aB, 1), bj.y.vi(aB);
					aNc(e8)
				}
			}, bB.nv, 1)], qP = new uO(bj.eK.data[117], aNc), aNc(0), qP.qQ[0].style.marginTop = "0.5em", aNP.qO(qP), aNP.qR(new s5([aNb[0].button])), aNP.qR(new s5([aNb[1].button])), aNP.qR(new s5([aNb[2].button])), aNP
		}()));
		return qV.push(function() {
				var aNP = new qD,
					aNQ = (aNP.qG(L(198)), [L(199), L(200), L(201), L(202)]),
					e7 = data.aNd;
				return aNP.qM(L(203) + (data.a0Z / 100).toFixed(2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vu + "<br>" + L(164) + aNQ[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : 3]), aNP
			}()), qV.push(function() {
				var aNP = new qD;
				return aNP.qG(L(195)), aNP.qM(L(196) + bA.rZ.a4C(data.vr, .1, 1) + "<br>" + L(163) + (data.vs + 1) + " / " + data.vu + "<br>" + L(197) + data.vt), aNP
			}()),
			function(qV) {
				var aNP = new qD,
					aNp = data.vy,
					aNq = (aNP.qG(L(234)), aNP.qM(L(235, [data.vw.length ? "[" + data.vw + "]" : "-"])), aNP.qM(L(236, [bA.rZ.a4C(aNp, .01, 2)])), aNP.qM(L(237, [data.w0 + 1 + " / " + data.vu])), data.w1),
					aNr = (aNP.qM(L(238, [bA.rZ.a4C(aNq, .1, 1)])), data.w3);
				aNP.qM(L(239, [aNr])), aNP.qM(L(240, [bA.rZ.a4C(aNq / Math.max(aNr, 1), .1, 2)])), aNp = data.vz, aNP.qG(L(241), "0.8em"), aNP.qM(L(235, [data.vx.length ? "[" + data.vx + "]" : "-"])), aNP.qM(L(236, [bA.rZ.a4C(aNp, .01, 2)])),
					aNq = data.w2, aNP.qM(L(238, [bA.rZ.a4C(aNq, .1, 1)])), aNr = data.w4, aNP.qM(L(239, [aNr])), aNP.qM(L(240, [bA.rZ.a4C(aNq / Math.max(aNr, 1), .1, 2)])), data.aN7 || (aNP.qI(L(242)), aNP.qI(L(243)));
				qV.push(aNP)
			}(qV),
			function(qV) {
				var aNP = new qD;
				aNP.qG(L(244)), aNP.qM(L(203) + (data.aNs / 10).toFixed(1) + "<br>" + L(164) + (data.aNt.length ? L(245, [data.aNt]) : L(246))), data.aN7 ? (aNP.qR(new s5([new w(L(247), function(e) {
					return b0.y.aNU(0) && (bA.qa.a3P(e), b0.aNW.aNo({
						sr: 4,
						sn: data.sn
					})), !0
				}, 0, 0, 1).button])), aNP.qI(L(248)), aNP.qI(L(249))) : aNP.qI(L(250));
				qV.push(aNP)
			}(qV), qV.push(function() {
				var aNP = new qD;
				if (aNP.qG(L(204)), aNP.qM(L(205) + data.aNe + "<br>" + L(163) + (data.aNf + 1) + " / " + data.vu + "<br>" + L(164) + bo.eA(data.aNf)), data.aN7) {
					var rN = new rO({
							value: bj.eK.data[157].value,
							e8: -1
						}, 1, void 0, function(e) {
							bj.s2.s3(157, aNS(e.target.value))
						}),
						aNY = (rN.e.style.marginTop = "0.6em", aNP.qR(rN), new w(L(169), function(e) {
							return e.textContent === L(169) ? (e.textContent = L(170), rN.e.readOnly = !0, aNg[0].qu(0), aNg[1].qu(0), aNg[0].button.style.color = bB.oh, aNg[1].button.style.color = bB.oh, aNS(bj.eK.data[157]
								.value)) : aNV(), !0
						})),
						aNg = (aNP.qR(new s5([aNY.button])), [new w("−", function(e) {
							return rN.e.readOnly && b0.y.aNU(0) && (bA.qa.a3P(e), aNV(), b0.aNW.aNX({
								sr: 2,
								sn: data.sn,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rN.e.readOnly && b0.y.aNU(0) && (bA.qa.a3P(e), aNV(), b0.aNW.aNX({
								sr: 1,
								sn: data.sn,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qJ = aNP.qI(),
						aNS = function(fF) {
							return fF = bA.g9.a3s(fF, 3, 32767), qJ.textContent = L(206, [fF - 1, fF, bj.eK.data[105].value]), fF
						};
					aNP.qR(new s5([aNg[0].button, aNg[1].button]));
					for (var aB = 0; aB < 2; aB++) aNg[aB].button.style.fontSize = "1.6em";
					var aNV = function() {
						aNY.button.textContent = L(169), rN.e.readOnly = !1, aNg[0].qu(1), aNg[1].qu(1), aNg[0].button.style.color = bB.nj, aNg[1].button.style.color = bB.nj
					};
					aNS(bj.eK.data[157].value)
				}
				return aNP
			}()),
			function(qV) {
				var aNP, a3N;
				data.aN7 && !data.aNu || (0 === a0.id || data.aN7 || data.aNu) && ((aNP = new qD).qG("Patreon"), !data.aN7 && data.aNv ? aNP.qR(new s5([new w(L(175), function() {
					b0.aNW.aNo({
						sr: 7,
						sn: data.sn
					}), data.aNv = 0, t.u(7)
				}).button])) : data.aNu ? (aNP.qM(L(251, [(data.aNw / 100).toFixed(2)]) + "<br>" + L(252, [1 + data.aNx + " / " + data.aNy]) + "<br>" + L(253, [data.aNz ? L(254) : L(255)])), data.aN7 || aNP.qR(new s5([new w(L(256),
					function() {
						b0.aNW.aNo({
							sr: 8,
							sn: data.sn
						}), data.aNu = 0, bj.s2.s3(160, 0), t.u(7)
					}).button]))) : (aNP.qM(L(257), "0.75em").style.marginBottom = "0.3em", aNP.qM("  • " + L(258), "0.75em").style.whiteSpace = "pre", aNP.qM("  • " + L(259), "0.75em").style.whiteSpace = "pre", aNP.qM("  • " + L(
						260), "0.75em").style.whiteSpace = "pre", aNP.qM(L(261), "0.75em").style.marginTop = "1.0em", aNP.qM(L(262), "0.75em").style.marginTop = "1.0em", aNP.qM("<a href='" + bK.aO0 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3N = "https://www.patreon.com/oauth2/authorize?state=" + data.sn +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aNP.qM(L(263), "0.75em").style.marginTop = "1.0em", aNP.qM("<a href='" + a3N +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aN7 || (aNP.qR(new sF), aNP.qR(new s5([new w(L(176), function() {
						b0.aNW.aNo({
							sr: 6,
							sn: data.sn
						}), data.aNv = 1, t.u(7)
					}).button])), aNP.qM(L(264), "0.75em").style.marginTop = "0.75em")), qV.push(aNP))
			}(qV),
			function(qV) {
				var aNP, qP, aNb, e8, aNc;
				data.aN7 || bj.v8.get().length && ((aNP = new qD).qG(L(188)), e8 = 0, aNc = function() {
					var aBm = bj.v8.get().length;
					aNb[0].qu(e8 === aBm ? bB.nv : bB.o6), aNb[1].qu(e8 === aBm ? bB.nv : bB.oO), aNb[2].qu(e8 === aBm || aBm - 1 <= e8 || e8 < 5 ? bB.nv : bB.oO)
				}, aNb = [new w(L(189), function() {
					t.u(8, void 0, new sq(25, {
						sr: 0,
						sn: bj.v8.get()[e8],
						so: 0
					}))
				}, bB.nv, 1), new w(L(190), function() {
					bj.v8.vO(e8), qP.qQ[e8].remove(), qP.qQ.splice(e8, 1);
					for (var aB = e8; aB < qP.qQ.length; aB++) qP.qQ[aB].name = "" + aB;
					bj.v8.get().length && (e8 = Math.max(e8 - 1, 0), qP.qQ[e8].textContent = qP.qQ[e8].textContent.replace("⚪", "🟢")), aNc()
				}, bB.nv, 1), new w(L(191), function() {
					for (var hf = qP.qQ.length - 1; e8 < hf; hf--) bj.v8.vO(hf), qP.qQ[hf].remove(), qP.qQ.splice(hf, 1);
					aNc()
				}, bB.nv, 1)], aNc(), (qP = new uO(bj.v8.vK(), function(aB) {
					e8 = aB, aNc()
				})).qQ[0].style.marginTop = "0.5em", aNP.qO(qP), aNP.qR(new s5([aNb[0].button])), aNP.qR(new s5([aNb[1].button])), aNP.qR(new s5([aNb[2].button])), qV.push(aNP))
			}(qV), qV
	}())
}

function aMt() {
	var aO2, aO3, aO4, qV;

	function aO5() {
		aO7(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		2 === aD.data.aIncomeType ? (bA.qi.a2m(aO4.v0(), aD.data.aIncomeData, 255), bA.qi.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(265), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), aNP.qO(new uO({
			uS: [L(267), L(268), L(269)],
			value: aD.data.aIncomeType
		}, function(e8) {
			aO7(), 2 !== e8 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ek)), aD.data.aIncomeType = e8, t.u(22)
		})), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP;
		1 === aD.data.aIncomeType && ((aNP = new qD).qG("Value"), aNP.qR(new rO({
			e8: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qV.push(aNP))
	}(qV), function(qV) {
		var aNP;
		2 === aD.data.aIncomeType && ((aNP = new qD).qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.aIncomeData, 4)), aNP.qR(aO4), qV.push(aNP))
	}(qV), qV))
}

function aMw() {
	var aO2, aO3, aO4;

	function aO5() {
		aO7(), 3 !== aD.data.botDifficultyType || bA.qi.a2a(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		3 === aD.data.botDifficultyType && bA.qi.a2m(aO4.v0(), aD.data.botDifficultyData, aE.kL.length - 1)
	}

	function aOC(qV, e8) {
		var aNP = new qD,
			value = (aNP.qG(e8 < 0 ? L(62) : L(61) + " " + bg.a0T[e8 % 9]), 0 <= e8 && (aNP.qM(L(272) + ": " + aD.data.teamPlayerCount[e8]).style.marginBottom = "1em"), e8 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e8]);
		aNP.qO(new uO({
			uS: aE.kL,
			value: value
		}, function(hf) {
			e8 < 0 ? aD.data.botDifficultyValue = hf : aD.data.botDifficultyTeam[e8] = hf
		})), qV.push(aNP)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(62), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, function() {
		var qV = [];
		if (function(qV) {
				var aNP = new qD,
					uS = (aNP.qG(L(266)), [L(268), L(270), L(271), L(269)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uS.splice(2, 1));
				aNP.qO(new uO({
					uS: uS,
					value: value
				}, function(e8) {
					aO7(), aD.data.botDifficultyType = e8, 0 === aD.data.gameMode && 2 === e8 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ek)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qV.push(aNP)
			}(qV), 0 === aD.data.botDifficultyType) aOC(qV, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aOC(qV, aB);
		else 3 === aD.data.botDifficultyType && ! function(qV) {
			var aNP = new qD;
			aNP.qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.botDifficultyData, 8)), aNP.qR(aO4), qV.push(aNP)
		}(qV);
		return qV
	}())
}

function aOD(data) {
	var aN5, aOE, aOF, aOG, aOH, aOI, aOJ, colors, aOK, aOL, aOM = 0,
		aON = 0,
		aOO = !1,
		aOP = !1,
		aOQ = [1, 5, 60, 240, 1440, 10080, 43200];

	function aOu(lP, lQ) {
		! function(lP, lQ) {
			return aOE < lP && lP < aOE + aOG && aOF < lQ && lQ < aOF + aOH
		}(aOM = lP, aON = lQ) ? (aOO && (bf.dl = !0), aOO = !1) : (aOO = !0, bf.dl = !0)
	}
	this.show = function() {
		aOP = bj.eK.data[127].value, aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize();
		var f8 = h.k,
			uh = aN5.ue(),
			aOZ = f8 * uh.ug,
			f8 = f8 * uh.ru;
		aOI = bA.qa.tE(.06), aOJ = bA.qa.tE(.04), aOE = bA.qa.tE(.06), aOF = f8 + aOI, aOG = h.i - aOE - aOJ, aOH = aOZ + f8 - aOF - aOJ
	}, this.ui = function() {
		aN5.ui(),
			function() {
				var aB, aOW, gG, eu, f6, g = data.data,
					aOd = 1,
					aOe = .125,
					aOf = aOP ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aOW = g[aB].aOW, gG = aOW.length, aOd = Math.max(gG, aOd), f6 = 0; f6 < gG; f6++) aOe = Math.max(aOW[f6], aOe), aOf = Math.min(aOW[f6], aOf);
				var nA = aOF + aOH,
					y4 = aOH / (aOe - aOf),
					y3 = 1 / (aOd - 1);
				for (uj.lineWidth = bc.z6, aB = 0; aB < g.length; aB++) {
					for (aOW = g[aB].aOW, gG = aOW.length, eu = aOE, uj.beginPath(), uj.moveTo(eu + aOG, nA - y4 * (aOW[gG - 1] - aOf)), f6 = gG - 2; 0 <= f6; f6--) uj.lineTo(eu + y3 * f6 * aOG, nA - y4 * (aOW[f6] - aOf));
					uj.strokeStyle = colors[aB], uj.stroke()
				}(function(aOf, aOe, nA, y4) {
					uj.font = bA.qa.sP(0, .25 * aOE), bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 2), uj.fillStyle = colors[0];
					for (var eu = .92 * aOE, aB = 0; aB < 3; aB++) {
						var fF = aOf + aB * (aOe - aOf) / 2;
						uj.fillText((fF / 1e3).toFixed(3), eu, nA - y4 * (fF - aOf))
					}
				})(aOf, aOe, nA, y4),
				function(aOd) {
					var ew = aOF + aOH + .15 * aOJ;
					uj.font = bA.qa.sP(0, Math.min(.4 * aOJ, .028 * h.i)), bA.qa.textBaseline(uj, 0), bA.qa.textAlign(uj, 2), uj.fillStyle = colors[0], uj.fillText(bA.a2R.a3E(aOK), aOE + aOG, ew), bA.qa.textAlign(uj, 0), uj.fillText(bA.a2R.a3E(
						new Date(aOL.getTime() - 6e4 * (aOd - 1) * aOQ[data.aOV])), aOE, ew)
				}(aOd),
				function(aOd, aOf, aOe) {
					if (aOO && !(aOd < 2)) {
						for (var a8Z, e8 = (aOM - aOE) / aOG * (aOd - 1), aOi = Math.floor(e8), aOj = Math.floor(1 + e8), aOk = e8 - aOi, aOl = 1e5, aOm = -1, aOn = -1, aOo = aOe - (aOe - aOf) * (aON - aOF) / aOH, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aCF, aOW = g[aB].aOW;
							aOW.length <= aOj || (aOW = aOW[aOi] + aOk * (aOW[aOj] - aOW[aOi]), (aCF = Math.abs(aOo - aOW)) < aOl && (aOl = aCF, aOm = aB, aOn = aOW))
						} - 1 !== aOm && (aOe = aOF + aOH - (aOn - aOf) / (aOe - aOf) * aOH, uj.lineWidth = .5 * bc.z6, uj.strokeStyle = colors[aOm], uj.beginPath(), uj.moveTo(aOE, aOe), uj.lineTo(aOM, aOe), uj.lineTo(aOM, aOF + aOH), uj
						.stroke(), uj.beginPath(), uj.arc(aOM, aOe, .1 * aOE, 0, 2 * Math.PI), uj.fillStyle = colors[aOm], uj.fill(), aOf = aOF + aOH + .15 * aOJ, bA.qa.textAlign(uj, 1), a8Z = aOd - 2 < e8 ? (a8Z = aOL.getTime() - 6e4 * aOQ[
								data.aOV], new Date(a8Z + (e8 - (aOd - 2)) * (aOK.getTime() - a8Z))) : new Date(aOL.getTime() - 6e4 * (aOd - e8 - 1) * aOQ[data.aOV]), aOd = bA.a2R.a3E(a8Z), e8 = bA.qa.measureText(aOd), a8Z = bL.hv(aOM, aOE +
								.5 * e8, aOE + aOG - .5 * e8), uj.fillStyle = bA.color.nb(70, 50, 20), uj.fillRect(a8Z - .52 * e8, aOF + aOH, 1.04 * e8, .55 * aOJ), uj.fillStyle = colors[0], uj.fillText(aOd, a8Z, aOf), uj.font = bA.qa.sP(0,
								.25 * aOE), bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 2), a8Z = .92 * aOE, aOd = (aOn / 1e3).toFixed(3), e8 = bA.qa.measureText(aOd), aOf = a8Z - 1.04 * e8, uj.fillStyle = bA.color.nb(70, 50, 20), uj
							.fillRect(aOf, aOe - .1625 * aOE, aOE - aOf, .275 * aOE), uj.fillStyle = colors[aOm], uj.fillText(aOd, a8Z, aOe))
					}
				}(aOd, aOf, aOe)
			}(), uj.lineWidth = bc.z6, uj.strokeStyle = bB.nj, uj.beginPath(), uj.moveTo(aOE, aOF), uj.lineTo(aOE, aOF + aOH), uj.lineTo(aOE + aOG, aOF + aOH), uj.stroke();
		var aB, fontSize = .5 * aOI,
			g = (uj.font = bA.qa.sP(0, fontSize), bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 0), data.data),
			en = g.length,
			ew = aOF - .5 * aOI,
			qH = "";
		for (aB = 0; aB < en; aB++) qH += g[aB].name + "  ";
		qH = qH.trim();
		var aOr = bA.qa.measureText(qH),
			eu = .5 * (h.i - aOr);
		for (aOr > h.i && (eu = 0, uj.font = bA.qa.sP(0, h.i / aOr * fontSize)), aB = 0; aB < en; aB++) uj.fillStyle = colors[aB], uj.fillText(g[aB].name, eu, ew), eu += bA.qa.measureText(g[aB].name + "  ")
	}, this.h0 = function(lP, lQ) {
		aOu(lP, lQ)
	}, this.a1c = function(lP, lQ) {
		aOu(lP, lQ)
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	};
	var aB, dt, a3C, hf, eq = data.data,
		en = eq.length,
		max = 1;
	for (aB = 0; aB < en; aB++) max = Math.max(max, eq[aB].aOW.length);
	for (aB = 0; aB < en; aB++)
		for (; eq[aB].aOW.length < max;) eq[aB].aOW.unshift(0);
	dt = new Date, a3C = 6e4 * dt.getTimezoneOffset(), hf = dt.getTime() - a3C, aOK = new Date(hf), 6 === data.aOV ? function(dt, a3C) {
		var aOY = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aOL = dt < 12 ? new Date(Date.UTC(aOY, dt) - a3C) : new Date(Date.UTC(aOY + 1, 0) - a3C)
	}(dt, a3C) : (a3C = 6e4 * aOQ[data.aOV], aOL = data.aOV <= 4 ? new Date(hf + a3C - dt.getTime() % a3C) : new Date(hf + a3C - (dt.getTime() + 2592e5) % a3C)), hf = bA.color, colors = [bB.nj, hf.nb(255, 0, 0), hf.nb(0, 200, 0), hf.nb(80, 80,
		255), hf.nb(255, 255, 0), hf.nb(255, 0, 255), hf.nb(0, 255, 255), hf.nb(255, 140, 0), hf.nb(128, 128, 128), hf.nb(0, 255, 140)], aN5 = new uT(L(273) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aOV] + ", " + bA.a2R.a3B(aOK), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(274), function() {
			t.u(14)
		})
	], !1)
}

function aMl() {
	var aN5, aN6, qV;
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aN6.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(L(275), [new w("⬅️ " + L(37), function() {
		t.aN2(13)
	})]), aN6 = new qT(aN5.uZ, ((qV = []).push(function() {
		var aNP = new qD,
			aNY = (aNP.qG(L(276)), aNP.qI(L(277)), new w(L(278), function() {
				bj.s2.s3(130, 0), t.y.aOz()
			}, 0, 0, 1)),
			rN = new rO(bj.eK.data[126], 0, function() {
				aNY.button.click()
			});
		return aNP.qR(rN), rN.e.placeholder = "a,b,c", rN.e.style.marginTop = "0.5em", aNP.qR(new s5([aNY.button])), aNP
	}()), qV.push(function() {
		var aNP = new qD,
			aNY = new w(L(278), function() {
				bj.s2.s3(130, 1), t.y.aOz()
			}, 0, 0, 1),
			aP0 = new rO(bj.eK.data[129], 1, function() {
				aP0.e.focus()
			}),
			aP1 = new rO(bj.eK.data[128], 1, function() {
				aNY.button.click()
			});
		return aNP.qG(L(279)), aNP.qR(aP1), aP1.e.style.marginBottom = "0.5em", aNP.qG(L(280)), aNP.qR(aP0), aNP.qR(new s5([aNY.button])), aNP
	}()), qV.push(function() {
		var aNP = new qD;
		return aNP.qG(L(281)), bj.eK.data[125].uS = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aNP.qO(new uO(bj.eK.data[125])), aNP
	}()), qV.push(function() {
		var aNP = new qD;
		return aNP.qG(L(282)), aNP.qR(new rz(bj.eK.data[127], L(283))), aNP
	}()), qV))
}

function aMk() {
	var aN5, aP2, aOG, aP3, aP4, aP5, colors = [0, 0, 0],
		aP6 = -1;

	function aP9(aB) {
		var aPA = aP2.ew + aB * (bc.gap + aP5);
		uj.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", uj.fillRect(aP3, aPA, colors[aB] * aP4, aP5), uj.strokeStyle = bB.nj, uj.strokeRect(aP3, aPA, aP4,
			aP5), uj.fillStyle = bB.nj, uj.font = bA.qa.sP(0, .32 * aP5), bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 0), uj.fillText(L(0 === aB ? 286 : 1 === aB ? 287 : 288) + aP7(aB), aP3 + bc.gap, aPA + .53 * aP5)
	}

	function aP7(aB, aPB) {
		return aPB = aPB || 256, bL.hv(Math.floor(aPB * colors[aB]), 0, aPB - 1)
	}

	function a26(lP, lQ) {
		return !(lP < aP3 || lQ < aP2.ew || lP > aP2.eu + aP2.i || lQ > aP2.ew + aP2.j)
	}
	this.show = function() {
		var fF = bj.eK.data[121].value;
		colors[0] = (fF >> 12) / 63, colors[1] = (fF >> 6 & 63) / 63, colors[2] = (63 & fF) / 63, aN5.show(), this.resize()
	}, this.rr = function() {
		bj.s2.s3(121, (aP7(0, 64) << 12) + (aP7(1, 64) << 6) + aP7(2, 64)), aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aP2.resize();
		var f8 = h.k,
			uh = aN5.ue(),
			aP8 = (aP2.ew = Math.max(aP2.ew, f8 * uh.ru + bc.gap), f8 * uh.ug - 2 * bc.gap);
		aP2.j = Math.min(aP2.j, aP8), aP2.i = 2 * aP2.j, aP2.ew = f8 * uh.ru + .5 * (f8 * uh.ug - aP2.j), aP2.eu = .5 * (h.i - aP2.i), aOG = .25 * aP2.i, aP3 = aP2.eu + aOG + bc.gap, aP4 = aP2.i - aOG - bc.gap, aP5 = (aP2.j - 2 * bc.gap) / 3
	}, this.ui = function() {
		var e7, tD, f7;
		aN5.ui(), uj.lineWidth = bc.z6, e7 = aP7(0), tD = aP7(1), f7 = aP7(2), uj.fillStyle = "rgb(" + e7 + "," + tD + "," + f7 + ")", uj.fillRect(aP2.eu, aP2.ew, aOG, aP2.j), uj.strokeStyle = bB.nj, uj.strokeRect(aP2.eu, aP2.ew, aOG, aP2.j), uj
			.fillStyle = e7 + tD + f7 < 306 && tD < 150 ? bB.nj : bB.na, bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 1), uj.font = bA.qa.sP(0, .1 * aP2.j), uj.rotate(-Math.PI / 2), uj.fillText(L(285), -aP2.ew - .5 * aP2.j, aP2.eu + .5 * aOG),
			uj.setTransform(1, 0, 0, 1, 0, 0), aP9(0), aP9(1), aP9(2)
	}, this.h0 = function(lP, lQ) {
		a26(lP, lQ) && (aP6 = bL.hv(Math.floor((lQ - aP2.ew) / (aP5 + .75 * bc.gap)), 0, 2), colors[aP6] = bL.hv((lP - aP3) / aP4, 0, 1), bf.dl = !0)
	}, this.a1c = function(lP) {
		-1 !== aP6 && (colors[aP6] = bL.hv((lP - aP3) / aP4, 0, 1), bf.dl = !0)
	}, this.a1f = function(lP, lQ, deltaY) {
		a26(lP, lQ) && (lP = bL.hv(Math.floor((lQ - aP2.ew) / (aP5 + .75 * bc.gap)), 0, 2), colors[lP] = bL.hv(colors[lP] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a20 = function() {
		0 <= aP6 && (aP6 = -1, bf.dl = !0)
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(L(284), [new w("⬅️ " + L(37), function() {
		t.y.aC9()
	})], !1), aP2 = new rB([.5, .25], [.5, .5], 1)
}

function aMs() {
	var aO2, aO3, aO4, r9;

	function aO5() {
		aO7(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aN3()[19] = null, t.a1I()
	}

	function aPC() {
		aO7(), t.u(21)
	}

	function aO7() {
		1 === aD.data.gameMode ? aD.a4Z.a4e() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qi.a2m(aO4.v0(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, r9 = [new w("⬅️ " + L(37), aO5)], 1 === aD.data.gameMode && r9.push(new w(L(289), aPC, 1, 1)), aO2 = new uT(L(290), r9), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), 0 === aD.data.gameMode && (aNP.qO(new uO({
			uS: [L(291), L(269)],
			value: aD.data.colorsType
		}, function(e8) {
			aO7(), aD.data.colorsType = e8, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ek || (aD.data.colorsData = new Uint32Array(aD.ek)), t.u(21)
		})), aNP.qR(new sF));
		aNP.qR(new rz({
			value: aD.data.selectableColor
		}, L(292), function(value) {
			aD.data.selectableColor = value
		})), qV.push(aNP)
	}(r9 = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qV) {
		var aNP = new qD;
		aNP.qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.colorsData, 1)), aNP.qR(aO4), qV.push(aNP)
	}(r9) : (aD.a4Z.a4e(), r9.push(function() {
		var aNP = new qD;
		aNP.qG(L(272));
		for (var aB = 0; aB < bg.a0T.length; aB++) {
			var hf = (aB + 1) % bg.a0T.length,
				e = aNP.qM((0 == hf ? "" : "Team ") + bg.a0T[hf]);
			aB && (e.style.marginTop = "0.5em"), aNP.qR(new rO({
				e8: -1,
				value: aD.data.teamPlayerCount[hf]
			}, 1, 0, function(e) {
				aO2.ua[1].qu(0);
				var playerCount = bL.hv(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aPE] = playerCount
			})).e.aPE = hf
		}
		return aNP
	}())), r9))
}

function sq(id, a3v, aPF) {
	var aN5, aPG;

	function aPL() {
		aPG.qW.innerHTML += "<br>" + L(295)
	}

	function aPK() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.s2.s3(110, bF.ss.st(bF.ss.su(8))), b0.aNW.aPa()
	}
	this.aPH = !0, this.aPI = id, this.show = function() {
		aN5.show(), this.resize(), 15 === id ? (b0.y.aPJ(id) ? aPK : aPL)() : 16 === id ? b0.y.aPJ(id) ? b0.aPM.aPN(2) : aPL() : 17 === id ? b0.y.aPJ(id) ? b0.aPM.aPN(3) : aPL() : 18 === id ? (b0.y.close(0, 3253), b0.y.aFp(0, id), aPL()) : 21 ===
			id ? b0.y.aPJ(id) ? b0.aPO.aPP(a3v.t8, a3v.t9, a3v.tA) : aPL() : 22 === id ? b0.y.aPJ(id) ? b0.aPO.aPQ(a3v.t8, a3v.aPR, a3v.aPS) : aPL() : 23 === id ? b0.y.aPJ(id) ? b0.aPO.aPT(a3v.aOV, a3v.a0n) : aPL() : 24 === id ? b0.y.aPJ(id) ? b0
			.aPO.aPU(a3v.aOV, a3v.t9, a3v.tA) : aPL() : 25 === id ? b0.y.aPJ(id) ? b0.aNW.aNo(a3v) : aPL() : 28 === id ? b0.y.aPJ(id) ? b0.aPO.aPV(a3v.t8, a3v.aPR, a3v.aPS) : aPL() : 29 === id && (b0.y.aPJ(id) ? b0.aNW.aPW(a3v) : aPL())
	}, this.aPX = function() {
		15 === id ? aPK() : 16 === id ? b0.aPM.aPN(2) : 17 === id ? b0.aPM.aPN(3) : 18 === id ? t.u(8, this.aMb, new sq(16)) : 21 === id ? b0.aPO.aPP(a3v.t8, a3v.t9, a3v.tA) : 22 === id ? b0.aPO.aPQ(a3v.t8, a3v.aPR, a3v.aPS) : 23 === id ? b0.aPO
			.aPT(a3v.aOV, a3v.a0n) : 24 === id ? b0.aPO.aPU(a3v.aOV, a3v.t9, a3v.tA) : 25 === id ? b0.aNW.aNo(a3v) : 28 === id ? b0.aPO.aPV(a3v.t8, a3v.aPR, a3v.aPS) : 29 === id ? b0.aNW.aPW(a3v) : 1e3 === id && (this.aPI = id = 25, b0.aNW.aNo(
				a3v))
	}, this.aPY = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aMb) : 17 === code ? (b0.y.close(0, 3252), bj.y.vi(0), bj.eK.data[117].uS && 0 < bj.eK.data[117].uS.length ? (bu = bj.y.vj(0), bj.s2.s3(105, bu.sn), bj.s2.s3(106, bu
			.password), t.u(8, this.aMb, new sq(16))) : (bj.s2.s3(105, ""), t.y.aC9())) : 21 === code ? t.u(10, this.aMb, new aPZ(data)) : 23 === code ? t.u(13, this.aMb, new aOD({
			data: data,
			aOV: a3v.aOV
		})) : 25 === code && (t.y.aMm.sn = a3v.sn, bj.v8.mW(a3v.sn), t.u(15, this.aMb)))
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aPG.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(L(293), [new w("⬅️ " + L(37), function() {
		aPF ? t.u(29) : t.y.aC9()
	})]), aPG = new s4(aN5.uZ, L(294))
}

function aMq() {
	var aO2, aO3, qV;

	function aPd() {
		var gG;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4Z.a4e()), gG = bA.qi.a2g(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gG) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aO5() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aPf(), aD.data.canvas = null, t.u(5, 5)
	}

	function aPf() {
		b9.pu.dd(), bj.s2.s3(156, b9.a4q.za())
	}

	function aPb() {
		aD.data.isReplay = 0, aPf(), aD.a4Z.a51(), aa.aG0(), aD.a4Z.a4y(), aD.data.canvas = 2 === aD.data.mapType ? bS.wf : null, aD.a4d(), aD.a4b = 1
	}

	function aPr() {
		aPd();
		for (var g = [aPi(), aPj(), aPk()], aB = 3; aB < 6; aB++) t.removeChild(aO3.qW, aO3.qX[aB].qF), aO3.qX[aB] = g[aB - 3], aO3.qW.appendChild(aO3.qX[aB].qF);
		aO3.resize()
	}

	function aPi() {
		var aPs, aNP = new qD;
		return aNP.qG(L(290)), aPs = 0 === aD.data.gameMode ? [L(291), L(269)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aNP.qM(aPs), aNP.qR(new s5([new w(L(299), function() {
			t.u(21)
		}).button])), aNP
	}

	function aPj() {
		var aNP = new qD,
			g = (aNP.qG(L(62)), [L(268) + ": " + aE.kL[aD.data.botDifficultyValue], L(270), L(271), L(269)]);
		return aNP.qM(g[aD.data.botDifficultyType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(25)
		}).button])), aNP
	}

	function aPk() {
		var aNP = new qD,
			g = (aNP.qG("Spawning"), [L(291), L(301), L(269)]);
		return aNP.qM(g[aD.data.spawningType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(24)
		}).button])), aNP
	}
	this.show = function() {
		aO2.show(), this.resize(), aO2.uZ.scrollTop = t.y.aHu[0]
	}, this.rr = function() {
		t.y.aHu[0] = aO2.uZ.scrollTop, aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT("🔧 " + L(296), [new w("⬅️ " + L(37), aO5), new w(L(297), aPb)]), aPd(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.wf : 1 === aD.data.mapType ? aD.data.canvas = bS.aKW(bS.a4z(aD.data), 0).wf : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aKW(bS.a4z(aD.data), aD.data.mapSeed).wf)), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD,
			a2w = (aNP.qG(L(298)), aD.data.canvas);
		a2w.style.width = "100%", aNP.qR({
			e: a2w
		}), aNP.qR(new s5([new w(L(299), function() {
			t.u(20)
		}).button])), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP = new qD;
		aNP.qG(L(272)), aNP.qR(new rO({
			e8: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.hv(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qi.a2g(aD.data.teamPlayerCount, 0), aD.a4Z.a4e(), bA.qi.a2g(aD.data.teamPlayerCount, 0) !== e) && aPr()
		})), qV.push(aNP)
	}(qV), function(qV) {
		var aNP = new qD;
		aNP.qG(L(300)), aNP.qO(new uO({
			uS: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e8) {
			aD.data.gameMode !== e8 && (aD.data.gameMode = e8, aPr())
		})), qV.push(aNP)
	}(qV), qV.push(aPi()), qV.push(aPj()), qV.push(aPk()), function(qV) {
		var aNP = new qD,
			g = (aNP.qG(L(302)), [L(303), L(304), L(269)]);
		aNP.qM(g[aD.data.playerNamesType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(23)
		}).button])), qV.push(aNP)
	}(qV), function(qV) {
		var aNP = new qD,
			g = (aNP.qG(L(265)), [L(267), L(268) + ": " + aD.data.aIncomeValue, L(269)]);
		aNP.qM(g[aD.data.aIncomeType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(22)
		}).button])), qV.push(aNP)
	}(qV), function(qV) {
		var aNP = new qD,
			g = (aNP.qG(L(305)), [L(267), L(268) + ": " + aD.data.tIncomeValue, L(269)]);
		aNP.qM(g[aD.data.tIncomeType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(26)
		}).button])), qV.push(aNP)
	}(qV), function(qV) {
		var aNP = new qD,
			g = (aNP.qG(L(306)), [L(267), L(268) + ": " + aD.data.iIncomeValue, L(269)]);
		aNP.qM(g[aD.data.iIncomeType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(27)
		}).button])), qV.push(aNP)
	}(qV), function(qV) {
		var aNP = new qD,
			g = (aNP.qG(L(307)), [L(267), L(268) + ": " + aD.data.sResourcesValue, L(269)]);
		aNP.qM(g[aD.data.sResourcesType]), aNP.qR(new s5([new w(L(299), function() {
			t.u(28)
		}).button])), qV.push(aNP)
	}(qV), function(qV) {
		var aNP = new qD;
		aNP.qG(L(308)), aNP.qR(new s5([new w(L(309), function() {
			t.x(), aD.a4Z.a52(), t.y.aHu[0] = 0, t.u(19)
		}).button])), aNP.qR(new s5([new w(L(310), function() {
			bm.aHj()
		}).button])), aNP.qR(new s5([new w(L(311), function() {
			return bm.aHl(), !0
		}).button])), qV.push(aNP)
	}(qV), qV))
}

function aN1() {
	var aO2, rT = !0;

	function rk(rj, a56) {
		var qF = document.createElement("div"),
			aPu = document.createElement("span"),
			aPv = document.createElement("span");
		aPu.textContent = aW.aB2(a56.eM) + ":", aPu.style.color = bB.ny, aPu.style.paddingRight = "0.4em", aPu.style.display = "table-cell", aPu.style.width = "6ch", aPu.style.textAlign = "end", qF.appendChild(aPu), aPv.textContent = a56.qH, qF
			.appendChild(aPv), qF.style.display = "table", a56.pJ && function(qF, pJ) {
				{
					var aHf;
					pJ >= 1024 - aj.rq.yt ? ((aHf = document.createElement("img")).src = aj.wi.yh[pJ - 1024 + aj.rq.yt].toDataURL(), aHf.style.width = "1.5em", aHf.style.height = "1.5em", aHf.style.verticalAlign = "middle", qF.appendChild(aHf)) : ((
						aHf = document.createElement("span")).textContent = aj.rq.z8(pJ), aHf.style.display = "inline-block", aHf.style.fontSize = "1.5em", aHf.style.lineHeight = "1em", aHf.style.verticalAlign = "middle", qF.appendChild(aHf))
				}
			}(qF, a56.pJ), rj.appendChild(qF)
	}

	function rn() {
		rT && (aO2.uZ.scrollTop = aO2.uZ.scrollHeight)
	}
	this.clear = function() {
		aO2.uZ.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a5z = bq.a5A(), en = a5z.length, rj = document.createDocumentFragment(), aB = 0; aB < en; aB++) rk(rj, a5z[aB]);
		aO2.uZ.appendChild(rj), rn(), aO2.show(), this.resize(), rT = !0, rn()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO2.uZ.style.padding = "0.4em " + bA.qa.qj(bc.qg)
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, this.ya = function(a56) {
		var rj = document.createDocumentFragment();
		rk(rj, a56), aO2.uZ.appendChild(rj), rn()
	}, (aO2 = new uT(L(312), [new w("⬅️ " + L(37), function() {
		t.aN2(1)
	})])).uZ.style.overflowY = "auto", aO2.uZ.addEventListener("scroll", function() {
		rT = aO2.uZ.scrollTop >= aO2.uZ.scrollHeight - aO2.uZ.clientHeight - 2
	})
}

function aMy() {
	var aO2, aO3, aO4, qV;

	function aO5() {
		aO7(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		2 === aD.data.iIncomeType && bA.qi.a2m(aO4.v0(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(306), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), aNP.qO(new uO({
			uS: [L(267), L(268), L(269)],
			value: aD.data.iIncomeType
		}, function(e8) {
			aO7(), 2 !== e8 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ek), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e8, t.u(27)
		})), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP;
		1 === aD.data.iIncomeType && ((aNP = new qD).qG("Value"), aNP.qR(new rO({
			e8: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qV.push(aNP))
	}(qV), function(qV) {
		var aNP;
		2 === aD.data.iIncomeType && ((aNP = new qD).qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.iIncomeData, 4)), aNP.qR(aO4), qV.push(aNP))
	}(qV), qV))
}

function aMg() {
	var aPx, aPy, aP2, rN, aPz;
	this.aGY = new sy, aP2 = new rB([.45, .27], [.5, .5], 2 / 3), aPy = [new w("⚔️<br>" + L(313), function() {
			aQ0(0)
		}, bB.oC), new w("🗡️<br>" + L(296), function() {
			aQ0(1)
		}, bB.oU), new w("🔑<br>" + L(314), function() {
			aQ0(2)
		}, bB.om), new w("☰<br>" + L(315), function() {
			aQ0(3)
		}, bB.nw), new w("", function() {
			t.u(12)
		}, bB.nf, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rN = new rO(bj.eK.data[122]);
	for (var aB = 0; aB < aPy.length; aB++) aPy[aB].button.style.position = "absolute";

	function aQ0(e8) {
		a0.a1.setState(10), ab.tH() || ab.aGP(), 0 === e8 ? t.y.a4t() : 1 === e8 ? (b9.aI4.wQ(bj.eK.data[156].value, 1) || aD.a4Z.a52(), t.u(19)) : 2 === e8 ? 0 !== a0.id || bj.eK.data[140].value ? t.u(8, t.sp, new sq(16)) : t.y.aQ1(t.sp, 16) : 3 ===
			e8 && t.u(1)
	}
	rN.e.style.position = "absolute", rN.e.style.textAlign = "center", rN.e.placeholder = L(316), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGY.show(), aPy[4].qu(bA.color.a33(bj.eK.data[121].value)), this.resize(), document.body.appendChild(rN.e);
		for (var aB = 0; aB < aPy.length; aB++) document.body.appendChild(aPy[aB].button);
		1 !== a0.id || a0.dv < 5 || (aPz && bf.eM > aPz + 144e5 ? a0.vT.setState(14) : aPz = bf.eM)
	}, this.rr = function() {
		this.aGY.rr(), t.removeChild(document.body, rN.e);
		for (var aB = 0; aB < aPy.length; aB++) t.removeChild(document.body, aPy[aB].button)
	}, this.resize = function() {
		this.aGY.resize(), this.aGY.resize(), aP2.resize();
		var gap = .5 * bc.gap,
			tm = 10 / 99 * .84 * aP2.i,
			aQ4 = .16 * aP2.j,
			a97 = .19 * aP2.i,
			eu = aP2.eu + a97,
			tm = aP2.ew + tm + 3 * gap,
			i = .5 * (aP2.i - gap) - a97,
			a97 = aP2.i - 2 * a97 - aQ4 - gap,
			a97 = (bA.qa.tF(rN.e, eu, tm, a97, aQ4), bA.qa.tF(aPy[4].button, eu + a97 + gap, tm, aQ4, aQ4), .5 * (aP2.ew + aP2.j - (tm += aQ4 + gap) - gap));
		bA.qa.tF(aPy[0].button, eu, tm, i, a97), bA.qa.tF(aPy[1].button, eu + i + gap, tm, i, a97), bA.qa.tF(aPy[2].button, eu, tm + a97 + gap, i, a97), bA.qa.tF(aPy[3].button, eu + i + gap, tm + a97 + gap, i, a97);
		bA.qa.tF(aPy[5].button, eu, tm + a97 * 2 + gap * 2, i * 2 + gap, a97 / 3);
		bA.qa.tF(aPy[6].button, eu, tm + a97 * 2.33 + gap * 3, i * 2 + gap, a97 / 3);
		for (var aB = 0; aB < aPy.length; aB++) aPy[aB].button.style.font = bA.qa.sP(0, bA.qa.a3J(.065 * aP2.j)), bA.qa.qk(aPy[aB].button, 5);
		rN.e.style.font = bA.qa.sP(0, bA.qa.a3J(.08 * aP2.j)), bA.qa.qk(rN.e, 5)
	}, this.ui = function() {
		if (aa.aG4(), aT.ui(), aO.ui(), bY.ui(), ab.tH()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aP2.i * 0.03);
				uj.font = bA.qa.sP(1, size);
				uj.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = uj.measureText(text).width;
				uj.textAlign = "left";
				uj.textBaseline = "middle";
				uj.fillText(text, uj.canvas.width - textLength - size / 2, size);
			};
			uj.imageSmoothingEnabled = !1;
			var f8 = ab.aG7("territorial.io"),
				nL = .84 * aP2.i / f8.width;
			uj.setTransform(nL, 0, 0, nL, aP2.eu + .08 * aP2.i, aP2.ew), aPx = aPx || bA.a2N.a3t(f8, bA.a2N.a3z, [0, 0, 0]);
			for (var eu = -1; eu <= 1; eu += 2)
				for (var ew = -1; ew <= 1; ew += 2) uj.drawImage(aPx, eu, ew);
			uj.drawImage(f8, 0, 0), uj.imageSmoothingEnabled = !0;
			var zF = ab.aG7("logo"),
				aQ6 = .6666 * nL * f8.height / zF.height,
				nM = .5 * h.i,
				nN = aP2.ew + .5 * nL * f8.height - .5 * aQ6 * zF.height;
			uj.setTransform(aQ6, 0, 0, aQ6, nM - .6 * nL * f8.width, nN), uj.drawImage(zF, 0, 0), uj.setTransform(aQ6, 0, 0, aQ6, nM + .6 * nL * f8.width - aQ6 * zF.width, nN), uj.drawImage(zF, 0, 0), uj.setTransform(1, 0, 0, 1, 0, 0), uj
				.imageSmoothingEnabled = !0
		}
	}
}

function aMn() {
	var aN5, aQ7, aQ8, uU;

	function aQ9(aB) {
		t.u(8, t.sp, new sq(21, {
			t8: aB,
			t9: 0,
			tA: 10
		}))
	}
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aQ7.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aQ8 = [new w(L(317), function() {
		aQ9(1)
	}, 0, 0, 1), new w(L(318), function() {
		aQ9(2)
	}, 0, 0, 1), new w(L(319), function() {
		aQ9(3)
	}, 0, 0, 1), new w(L(320), function() {
		aQ9(0)
	}, 0, 0, 1), new w(L(321), function() {
		aQ9(9)
	}, 0, 0, 1), new w(L(322), function() {
		aQ9(10)
	}, 0, 0, 1), new w(L(323), function() {
		aQ9(11)
	}, 0, 0, 1)], uU = [new w("⬅️ " + L(37), function() {
		t.a1I()
	})], aN5 = new uT(L(324), uU), aQ7 = new r8(aQ8, aN5.uZ)
}

function aCX(title, qN, aQA) {
	var aN5, aPG;
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aPG.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aQA = aQA || [new w("⬅️ " + L(37), function() {
		t.a1I()
	}, bB.oO)], aN5 = new uT(title, aQA), aPG = new s4(aN5.uZ, qN), bA.qa.textAlign(aN5.uZ.style, 1)
}

function aPZ(data) {
	var aN5, aQB, f8, sf;

	function aQC(jP) {
		var en = data.data.length;
		if (en) {
			for (var t9, max = min = parseInt(data.data[0][0]), aB = 1; aB < en; aB++) var aEW = parseInt(data.data[aB][0]),
				min = Math.min(aEW, min),
				max = Math.max(aEW, max);
			t9 = jP < 0 ? min + jP : max + 1, t.u(8, t.a58().aMb, new sq(21, {
				t8: data.t8,
				t9: t9,
				tA: t9 + Math.abs(jP)
			}))
		}
	}
	this.show = function() {
			aN5.show(), this.resize()
		}, this.rr = function() {
			aN5.rr()
		}, this.resize = function() {
			aN5.resize(), aQB.resize()
		}, this.a2A = function(f8) {
			2 === f8 && aN5.ua[0].qr()
		}, f8 = data.data.length ? 0 : 1, f8 = [new w("⬅️ " + L(37), function() {
			t.a1I()
		}), new w(L(325), function() {
			aQC(-10)
		}, f8, 0, 1), new w(L(326), function() {
			aQC(10)
		}, f8, 0, 1), new w(L(274), function() {
			t.u(11, 10, new aQD({
				t8: data.t8
			}))
		})], sf = [L(327), L(328), L(329), L(330), L(331), L(332), L(333), L(334), L(335), L(336), L(322), L(323), L(337)], aN5 = new uT(sf[data.t8], f8),
		function() {
			var aB, eq = {
					sZ: []
				},
				sZ = eq.sZ,
				aQF = data.data,
				en = aQF.length;
			en && 0 === aQF[0][0] && 0 <= (e8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t8]) && (t.y.tB[e8] = aQF[0][1]);
			var nL = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t8],
				a45 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t8],
				e8 = [
					[L(338), L(339) + " ↗", L(340)],
					[L(338), L(341), L(342), L(343) + " ↗"],
					[L(338), L(339) + " ↗", L(342)],
					[L(338), L(339) + " ↗", L(342)],
					[L(344), L(345), L(346) + " ↗", L(347) + " ↗", L(117)],
					[L(344), L(345), L(348) + " ↗", L(349) + " ↗", L(350)],
					[L(344), L(345), L(351) + " ↗", L(352) + " ↗", L(353)],
					[L(344), L(345), L(348) + " ↗", L(349) + " ↗", L(354)],
					[L(344), L(345), L(346) + " ↗", L(347) + " ↗", L(117)],
					[L(338), L(339) + " ↗", L(342)],
					[L(338), L(339) + " ↗", L(355)],
					[L(338), L(339) + " ↗", L(342)],
					[L(344), L(345), L(356) + " ↗", L(357) + " ↗", L(358)]
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
					fF: aQF[aB][0] + 1 + ".",
					dt: 0
				}, {
					fF: aQF[aB][1],
					dt: 1,
					sn: aQF[aB][4],
					so: aQF[aB][3]
				}, {
					fF: (nL * aQF[aB][2]).toFixed(a45),
					dt: 0
				}]);
			else if (12 === data.t8)
				for (aB = 0; aB < en; aB++) {
					var aQI = aQF[aB][3];
					sZ.push([{
						fF: "" + aQF[aB][0],
						dt: 0
					}, {
						fF: "" + aQF[aB][4],
						dt: 0
					}, {
						fF: aQF[aB][5],
						dt: 1,
						sn: aQF[aB][1],
						so: 0
					}, {
						fF: aQF[aB][6],
						dt: 1,
						sn: aQF[aB][2],
						so: 0
					}, {
						fF: bo.eE(aQI % 16, aQI >> 4),
						dt: 0
					}])
				} else if (1 === data.t8)
					for (aB = 0; aB < en; aB++) sZ.push([{
						fF: aQF[aB][0] + 1 + ".",
						dt: 0
					}, {
						fF: aQF[aB][1],
						dt: 0
					}, {
						fF: (nL * aQF[aB][2]).toFixed(a45),
						dt: 0
					}, {
						fF: aQF[aB][3],
						dt: 1,
						sn: aQF[aB][5],
						so: aQF[aB][4]
					}]);
				else if (4 === data.t8 || 5 === data.t8 || 6 === data.t8 || 7 === data.t8 || 8 === data.t8)
				for (aB = 0; aB < en; aB++) {
					var aQJ = aQF[aB][5];
					4 === data.t8 || 8 === data.t8 ? "100%" === (aQJ = (aQJ % 64 * 100 / (aQJ >> 6)).toFixed(0) + "%") && (4 === data.t8 ? aQJ += " (" + L(359) + ")" : aQJ += " (" + L(360) + ")") : 5 === data.t8 ? 32768 <= aQJ && (aQJ = -(aQJ -
						32768)) : aQJ = (nL * aQJ).toFixed(a45), sZ.push([{
						fF: "" + aQF[aB][0],
						dt: 0
					}, {
						fF: "" + aQF[aB][6],
						dt: 0
					}, {
						fF: aQF[aB][7],
						dt: 1,
						sn: aQF[aB][1],
						so: aQF[aB][2]
					}, {
						fF: aQF[aB][8],
						dt: 1,
						sn: aQF[aB][3],
						so: aQF[aB][4]
					}, {
						fF: "" + aQJ,
						dt: 0
					}])
				}
			aQB = new sY(aN5.uZ, eq)
		}()
}

function aQD(a3v) {
	var aN5, aN6, qV;
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aN6.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(L(361), [new w("⬅️ " + L(37), function() {
		t.aN2(10)
	})]), aN6 = new qT(aN5.uZ, ((qV = []).push(function() {
		var aNY, aNP = new qD,
			aP0 = new rO(bj.eK.data[132], 1, function() {
				aNY.button.click()
			}),
			aP1 = new rO(bj.eK.data[131], 1, function() {
				aP0.e.focus()
			});
		aNP.qG(L(279)), aNP.qR(aP1), aP1.e.style.marginBottom = "0.8em", aNP.qG(L(280)), aNP.qR(aP0);
		return aNY = new w(L(278), function() {
			t9 = Math.floor(aP1.e.value), tA = Math.floor(aP0.e.value);
			var tA, t9 = {
				a2e: Math.min(t9, tA),
				aMC: Math.max(t9, tA)
			};
			t.u(8, t.a59(10).aMb, new sq(21, {
				t8: a3v.t8,
				t9: t9.a2e,
				tA: t9.aMC
			}))
		}, 0, 0, 1), aNP.qR(new s5([aNY.button])), aNP
	}()), qV.push(function() {
		var aNY, aNP = new qD,
			aP0 = new rO(bj.eK.data[134], 1, function() {
				aNY.button.click()
			}),
			aP1 = new rO(bj.eK.data[133], 0, function() {
				aP0.e.focus()
			});
		return aNP.qG(1 === a3v.t8 ? L(362) : L(363)), aNP.qR(aP1), aP1.e.style.marginBottom = "0.8em", aNP.qG(L(364)), aNP.qR(aP0), aNY = new w(L(278), function() {
			var aPR = aP1.e.value.slice(0, 20),
				aPS = Math.abs(Math.floor(aP0.e.value));
			t.u(8, t.a59(10).aMb, new sq(22, {
				t8: a3v.t8,
				aPR: aPR,
				aPS: aPS
			}))
		}, 0, 0, 1), aNP.qR(new s5([aNY.button])), aNP
	}()), qV.push(function() {
		var aNY, aNP = new qD,
			aP0 = new rO(bj.eK.data[152], 1, function() {
				aNY.button.click()
			}),
			aP1 = new rO(bj.eK.data[151], 0, function() {
				aP0.e.focus()
			});
		return aNP.qG(L(365)), aNP.qR(aP1), aP1.e.style.marginBottom = "0.8em", aNP.qG(L(364)), aNP.qR(aP0), aNY = new w(L(278), function() {
			var aPR = aP1.e.value.slice(0, 5),
				aPS = Math.abs(Math.floor(aP0.e.value));
			t.u(8, t.a59(10).aMb, new sq(28, {
				t8: a3v.t8,
				aPR: aPR,
				aPS: aPS
			}))
		}, 0, 0, 1), aNP.qR(new s5([aNY.button])), aNP
	}()), qV))
}

function aN0() {
	var aQN, tL, aQQ, tK, tN, aQO = [new Array(4), [], new Array(2), new Array(2)],
		aQP = new Array(4),
		aQR = new Array(2),
		aQS = [L(61), L(321), L(366), L(367)];

	function aEI() {
		var a6z = aQN.tY.rN.e.value.trim().slice(0, 127);
		a6z.length < 1 || (aQN.tY.rN.e.value = "", bn.aCa.a0C(a6z))
	}

	function aQV(aQX) {
		bn.y.re[3] = 1 - bn.y.re[3], aQW(3, 1, bn.y.re[3]), aQX && b0.aET.aEU(4), bn.y.re[3] && bj.s2.s3(158, bn.y.re[0])
	}

	function aQT(f6, f7) {
		bn.y.re[f6] !== f7 && (0 === f6 && bn.y.re[3] && aQV(0), aQW(f6, bn.y.re[f6], 0), aQW(f6, f7, 1), bn.y.re[f6] = f7, 0 === f6 ? (b0.aET.aEU(2, f7), bn.y.re[2] ? (aQN.tZ.mW(), aQN.tY.rb(1)) : aQN.tY.rb(0), t.a58().aE7(), t.a58().aE6()) : 2 ===
			f6 && (0 === f7 ? (b0.aET.aEU(0), aQN.tY.mW(), aQN.th()) : (b0.aET.aEU(1), aQN.tZ.mW(), aQN.ti())))
	}

	function aQW(f6, f7, color) {
		aQN.tb[f6].r9[f7].qu(color ? bB.o8 : bB.ov)
	}

	function aQa(aDM) {
		return aDM < 7 ? aDM + 2 + " " + L(374) : 7 === aDM || 10 === aDM ? L(321) + " (Full-Sending: " + L(7 === aDM ? 375 : 376) + ")" : 8 === aDM ? "1v1" : L(377)
	}

	function aQb(fF) {
		var a72 = bL.du(fF, 60),
			fF = fF % 60;
		return (a72 < 10 ? "0" : "") + a72 + ":" + (fF < 10 ? "0" : "") + fF
	}
	this.aEe = function() {
		return aQN.tY
	}, this.aCa = function(sn) {
		aQT(2, 0);
		var qH = aQN.tY.rN.e.value,
			sn = "@" + sn + " ";
		qH.length && !bA.rZ.a3Q(qH, " ") && (sn = " " + sn), aQN.tY.rN.e.value = qH += sn, aQN.tY.rN.e.focus()
	}, this.aE5 = function() {
		aQN.tZ.mW()
	}, this.aE7 = function() {
		var aQZ = bn.y.re[0],
			aQZ = bn.y.rg[aQZ];
		bS.a7(aQZ.eT, aQZ.mapSeed), tL.r9[0].button.textContent = L(298) + ": " + bS.wV.wW[aQZ.eT].name, tL.r9[1].button.textContent = L(300, 0, "Mode") + ": " + aQa(aQZ.aDM), tL.r9[2].button.textContent = L(371) + ": " + bS.wV.wW[aQZ.aF2].name,
			tL.r9[3].button.textContent = L(372, 0, "Next Mode") + ": " + aQa(aQZ.aF3), tL.r9[4].button.textContent = L(373) + ": " + aQb(aQZ.aE9), tL.resize()
	}, this.aE6 = function() {
		var aQZ = bn.y.re[0],
			rf = bn.y.rg[aQZ];
		aQN.tf(rf.tg);
		for (var aB = 0; aB < bn.tv.tw.length; aB++) aQO[0][aB].rY.textContent = "" + bn.tv.tw[aB].length;
		var tv = bn.tv.tw[aQZ],
			aQc = tv.length,
			aQd = bn.tv.tx[aQZ];
		aQO[2][1].rY.textContent = "" + aQc, aQO[3][1].rY.textContent = "" + aQd, tL.r9[4].button.textContent = L(373) + ": " + aQb(rf.aE9);
		for (aB = 0; aB < 4; aB++) {
			var aQe = bn.y.rg[aB];
			aQP[aB] ? 0 === aQe.tg && (aQP[aB].rY.textContent = bS.wV.wW[aQe.eT].name) : aQP[aB] = new rX(bS.wV.wW[aQe.eT].name, tK.r9[aB].button, 1, 1), bA.rZ.startsWith(aQS[aB], "🏆 ") ? aQe.aDS || (aQS[aB] = aQS[aB].substring(3), tK.r9[aB]
				.button.textContent = aQS[aB], tK.r9[aB].button.appendChild(aQO[0][aB].rY), tK.r9[aB].button.appendChild(aQP[aB].rY)) : aQe.aDS && (aQS[aB] = "🏆 " + aQS[aB], tK.r9[aB].button.textContent = aQS[aB], tK.r9[aB].button
				.appendChild(aQO[0][aB].rY), tK.r9[aB].button.appendChild(aQP[aB].rY))
		}
		var rf = "",
			aQg = "";
		0 === aQZ && (rf = bn.kz.aDg(tv, 0, aQc), aQg = bn.kz.aDg(tv, 0, aQd)), aQQ[0].rY.textContent = rf, aQQ[1].rY.textContent = aQg, aQR[1].rY.textContent = "MP: " + bn.y.aDz[0] + "   SP: " + bn.y.aDz[1] + "   Lobby: " + bA.qi.a2r(bn.tv.tw)
	}, this.aEB = function() {
		aQN.tY.mW()
	}, this.show = function() {
		aQN.show(), this.resize(), bn.message.show()
	}, this.rr = function() {
		aQN.rr(), bn.uI.rr(), bn.tt.rr(), bn.message.rr()
	}, this.resize = function() {
		aQN.resize(1 - bn.y.re[2]), bn.message.resize()
	}, this.a2A = function(f8) {
		2 === f8 ? bn.y.re[3] ? aQV(1) : aQN.tb[3].r9[0].qr() : f8 < 2 && aQV(1)
	}, tK = new s8([new w(aQS[0], function() {
		return aQT(0, 0), 2
	}), new w(aQS[1], function() {
		return aQT(0, 1), 2
	}), new w(aQS[2], function() {
		return aQT(0, 2), 2
	}), new w(aQS[3], function() {
		return aQT(0, 3), 2
	})], bB.ov), tL = new s8([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.ow, 1);
	var aQU = new s8([new w(L(368), function() {
		return aQT(2, 0), 2
	}), new w(L(113), function() {
		return aQT(2, 1), 2
	})], bB.ov);
	tN = new s8([new w(L(369), function() {
		t.x(), bn.uC(), b0.y.a1S(3240), t.u(5, 5)
	}), new w(L(370), function() {
		return aQV(1), 2
	})], bB.ov), aQN = new tJ(tK, tL, aQU, tN, aEI, bn.uI.aEn);
	for (var aB = 0; aB < 4; aB++) aQO[0][aB] = new rX("0", tK.r9[aB].button);
	aQO[2][1] = new rX("0", aQU.r9[1].button), aQO[3][1] = new rX("0", tN.r9[1].button), aQQ = [new rX("", aQU.r9[1].button, 1, 1), new rX("", tN.r9[1].button, 1, 1)], aQW(0, bn.y.re[0], 1), aQW(2, bn.y.re[2], 1), (aQR = [new rX(L(272), aQN.tj(), 1,
		0), new rX("", aQN.tj(), 1, 1)])[0].rY.style.fontSize = "0.4em", aQR[1].rY.style.fontSize = "0.4em"
}

function aMh() {
	var aN5, aN6, qV;
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aN6.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(L(378), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a59(7).aMb)
	}), new w(L(194), function() {
		bj.s2.s3(105, bG.ss.wF(aN6.qX[0].qE[0].e.value, 5)), bj.s2.s3(106, bG.ss.wF(aN6.qX[1].qE[0].e.value, 8)), t.u(8, t.a59(7).aMb, new sq(18))
	})]), aN6 = new qT(aN5.uZ, ((qV = []).push(function() {
		var aNP = new qD;
		return aNP.qG(L(172)), aNP.qR(new rO({
			value: "",
			e8: -1
		})), aNP
	}()), qV.push(function() {
		var aNP = new qD,
			aNa = (aNP.qG(L(174)), new rO({
				value: "",
				e8: -1
			}));
		return aNa.e.type = "password", aNP.qR(aNa), aNP.qR(new s5([new w(L(175), function(e) {
			return e.textContent === L(175) ? (e.textContent = L(176), aNa.e.type = "text") : (e.textContent = L(175), aNa.e.type = "password"), !0
		}).button])), aNP
	}()), qV.push(function() {
		var aNP = new qD;
		return aNP.qG(L(178)), aNP.qI(L(379)), aNP.qI(L(380)), aNP.qI(L(381)), aNP
	}()), qV))
}

function aMo() {
	var aN5, aQ7, aQ8, uU;

	function aQ9(aB) {
		t.u(8, t.sp, new sq(21, {
			t8: aB,
			t9: 0,
			tA: 10
		}))
	}
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aQ7.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aQ8 = [new w(L(332), function() {
		aQ9(5)
	}, 0, 0, 1), new w(L(333), function() {
		aQ9(6)
	}, 0, 0, 1), new w(L(334), function() {
		aQ9(7)
	}, 0, 0, 1), new w(L(337), function() {
		aQ9(12)
	}, 0, 0, 1)], uU = [new w("⬅️ " + L(37), function() {
		t.a1I()
	})], aN5 = new uT(L(382), uU), aQ7 = new r8(aQ8, aN5.uZ)
}

function aMX() {
	this.eK = {}, this.tB = new Array(7), this.aMm = null, this.aMj = null, this.sW = 0, this.aHu = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4t = function() {
		t.x(), aZ.dd()
	}, this.aC9 = function() {
		t.u(0 === aa.a1J() ? 5 : 0)
	}, this.aOz = function() {
		if (1 === bj.eK.data[130].value) t.u(8, t.a58().aMb, new sq(24, {
			aOV: bj.eK.data[125].value,
			t9: bj.eK.data[128].value,
			tA: bj.eK.data[129].value
		}));
		else {
			for (var g = (g = bj.eK.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a58().aMb, new sq(23, {
				aOV: bj.eK.data[125].value,
				a0n: g
			}))
		}
	}, this.aQ1 = function(aMb, target) {
		t.u(4, aMb, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aQj +
			"' target='_blank'>" + bK.aQj + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aMb)
			}), new w("✅ Accept", function() {
				bj.s2.s3(140, 1), 0 === target ? t.u(2, aMb) : t.u(8, aMb, new sq(target))
			})]))
	}, this.aQk = function() {
		for (var aB = 0; aB < 7; aB++) this.tB[aB] = bG.w6.wA(bH.pi(5));
		this.tB[1] = "[" + this.tB[1] + "]", 5 === t.sp && (t.a58().aGY.s3(this.tB), t.a58().resize())
	}
}

function aMr() {
	var aO2, aO3, aQl, qV;

	function aO5() {
		b6.uC(), t.aN3()[19] = null, t.a1I()
	}

	function aQs() {
		aQv(), aQt()
	}

	function aQv() {
		aQl.qF.lastChild && t.removeChild(aQl.qF, aQl.qF.lastChild)
	}

	function aQt() {
		var aQw = bS.a4z(aD.data);
		aD.data.canvas = bS.aKW(aQw, aD.data.mapSeed).wf, aQu()
	}

	function aQu() {
		var a2w = aD.data.canvas;
		a2w.style.width = "100%", aQl.qF.appendChild(a2w)
	}
	this.aHe = function(a2w) {
		aD.data.canvas && aQv(), aD.data.canvas = a2w, aQu()
	}, this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(298), [new w("⬅️ " + L(37), aO5)]), 2 === aD.data.mapType && b6.dd(), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), aNP.qO(new uO({
			uS: [L(383), L(384), L(385)],
			value: aD.data.mapType
		}, function(e8) {
			2 === (aD.data.mapType = e8) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uC()), t.u(20)
		})), 2 <= aD.data.mapType && (aNP.qR(new sF), aNP.qR(new rz({
			value: aD.data.passableWater
		}, L(386), function(value) {
			aD.data.passableWater = value
		})), aNP.qR(new rz({
			value: aD.data.passableMountains
		}, L(387), function(value) {
			aD.data.passableMountains = value
		})));
		qV.push(aNP)
	}(qV = []), function(qV) {
		if (0 === aD.data.mapType) {
			for (var aNP = new qD, uS = (aNP.qG(L(298)), []), aB = 0; aB < bS.wV.aLS.length; aB++) uS.push(bS.wV.wW[bS.wV.aLS[aB]].name);
			aNP.qO(new uO({
				uS: uS,
				value: aD.data.mapProceduralIndex
			}, function(e8) {
				aD.data.mapProceduralIndex = e8, aQs()
			})), qV.push(aNP)
		}
	}(qV), function(qV) {
		if (1 === aD.data.mapType) {
			for (var aNP = new qD, uS = (aNP.qG(L(298)), []), aB = 0; aB < bS.wV.aLT.length; aB++) uS.push(bS.wV.wW[bS.wV.aLT[aB]].name);
			aNP.qO(new uO({
				uS: uS,
				value: aD.data.mapRealisticIndex
			}, function(e8) {
				aD.data.mapRealisticIndex = e8, aQs()
			})), qV.push(aNP)
		}
	}(qV), function(qV) {
		var aNP;
		2 === aD.data.mapType && ((aNP = new qD).qG(L(298)), aNP.qR(new s5([new w(L(388), function() {
			return b6.aHX(), !0
		}).button])), qV.push(aNP))
	}(qV), function(qV) {
		(aQl = new qD).qG(L(389)), 2 !== aD.data.mapType ? aQt() : aD.data.canvas && aQu();
		qV.push(aQl)
	}(qV), function(qV) {
		var aNP, rN, aNY;
		0 === aD.data.mapType && ((aNP = new qD).qG("Seed"), rN = new rO({
			e8: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aQs())
		}), aNY = new w(L(291), function(e) {
			var aKR = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aKR) return rN.e.value = aD.data.mapSeed = aKR, aQs(), !0
		}), aNP.qR(rN), aNP.qR(new s5([aNY.button])), qV.push(aNP))
	}(qV), function(qV) {
		var aNP, rN;
		2 === aD.data.mapType && ((aNP = new qD).qG(L(390)), rN = new rO({
			e8: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aNP.qR(rN), qV.push(aNP))
	}(qV), qV))
}

function v(title, qN, aQx, aQA) {
	var aN5, aPG;
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aPG.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aQA = aQA || [new w("⬅️ " + L(37), function() {
		t.a1I()
	})], aN5 = new uT(title, aQA), aPG = new s4(aN5.uZ, qN), aQx && bA.qa.textAlign(aN5.uZ.style, 1)
}

function aMu() {
	var aO2, aO3, aO4, qV;

	function aO5() {
		aO7(), 2 === aD.data.playerNamesType && 1 === bA.qi.a2a(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		2 === aD.data.playerNamesType && bA.qi.a2o(aO4.v0(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(302), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), aNP.qO(new uO({
			uS: [L(303), L(304), L(269)],
			value: aD.data.playerNamesType
		}, function(e8) {
			aO7(), aD.data.playerNamesType = e8, t.u(23)
		})), aNP.qR(new sF), aNP.qR(new rz({
			value: aD.data.selectableName
		}, L(391), function(value) {
			aD.data.selectableName = value
		})), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP;
		2 === aD.data.playerNamesType && ((aNP = new qD).qG("Data"), aO4 = new ur(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ek || (aD.data.playerNamesData = new Array(aD.ek), aD.data.playerNamesData
			.fill("")), aO4.uy(bA.rZ.a4I(aD.data.playerNamesData, 1, '"')), aNP.qR(aO4), qV.push(aNP))
	}(qV), qV))
}

function aMf() {
	var aO2, uw;

	function aQy() {
		t.x();
		var qH = b9.aR2(uw.v0());
		(aD.a08 && 0 < qH.length && qH === b9.pu.a4p || b9.aI4.wQ(qH)) && b9.aR3()
	}
	this.show = function(aQz) {
		this.aR0(aQz), aO2.show(), this.resize()
	}, this.aR0 = function(aQz) {
		0 === aD.a08 ? aQz ? uw.uy(aQz) : aD.a4c.length && uw.uy(aD.a4c) : (aD.gw || (b9.pu.a4p = b9.a4q.za()), uw.uy(b9.aR1(b9.pu.a4p)))
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), uw.resize()
	}, this.a2A = function(f8) {
		2 === f8 ? aO2.ua[0].qr() : aQy()
	}, aO2 = new uT(L(392), [new w("⬅️ " + L(37), function() {
		t.aN2(1)
	}), new w(L(393), function() {
		uw.v1()
	}), new w(L(394), function() {
		uw.v2()
	}), new w(L(395), function() {
		uw.clear()
	}), new w(L(396), function() {
		aQy()
	})]), uw = new ur(L(397)), aO2.uZ.appendChild(uw.e)
}

function aMe() {
	var aN5, aN6, qV, aR4, aNP;

	function aR5() {
		var eM;
		aR4 !== bj.eK.data[12].value ? (b7.dd(), b7.aC7(), eM = bf.eM, t.u(4, 1, new v(L(400), L(401), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w("🔄 Reload", function() {
			bf.eM < eM + 1500 || a0.a1.a2()
		}, bB.o6)]))) : t.u(1)
	}
	this.show = function() {
			aR4 = bj.eK.data[12].value, aN5.show(), this.resize()
		}, this.rr = function() {
			aN5.rr()
		}, this.resize = function() {
			aN5.resize(), aN6.resize()
		}, this.a2A = function(f8) {
			2 === f8 && aN5.ua[0].qr()
		}, aN5 = new uT(L(398), [new w("⬅️ " + L(37), aR5), new w(L(399), function() {
			t.x(), bj.s2.vn(), t.u(2)
		})]), qV = [], (aNP = new qD).qG(L(402)), aNP.qI(L(403)), qV.push(aNP),
		function(qV) {
			var aNP = new qD,
				aR7 = (aNP.qG(L(422)), []);
			aNP.qR(new s5([new w(L(423), function(e) {
				bX.aR8();
				for (var aB = 0; aB < aR7.length; aB++) aR7[aB].e.value = bX.aBY[aB];
				return bA.qa.a3P(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aR9.length; aB++) {
				aNP.qI(bX.aR9[aB]);
				for (var f6 = 0; f6 < 2; f6++) {
					var e8 = 2 * aB + f6,
						rN = new rO({
							value: bX.aBY[e8],
							e8: -1
						});
					rN.e.aRA = e8, aR7.push(rN), rN.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aRB(e.target.aRA, code)
					}), f6 && (rN.e.style.marginLeft = "4%"), rN.e.style.width = "48%", aNP.qR(rN)
				}
			}
			qV.push(aNP)
		}(qV), (aNP = new qD).qG(L(23)), aNP.qO(new uO({
			uS: ["1", "2"],
			value: aZ.aFl - 1
		}, function(aB) {
			aZ.aFl = aB + 1
		})), qV.push(aNP), (aNP = new qD).qG(L(404)), bj.eK.data[1].uS = [L(405), L(406), L(407), L(408)], aNP.qO(new uO(bj.eK.data[1])), qV.push(aNP), (aNP = new qD).qG(L(409)), bj.eK.data[9].uS = [L(406), L(410), L(411)], aNP.qO(new uO(bj.eK.data[
			9])), qV.push(aNP), (aNP = new qD).qG(L(412)), bj.eK.data[11].uS = [L(413), L(9), L(414)], aNP.qO(new uO(bj.eK.data[11])), qV.push(aNP), (aNP = new qD).qG(L(415)), aNP.qR(new rz(bj.eK.data[2])), qV.push(aNP), (aNP = new qD).qG(L(416)),
		aNP.qR(new rz(bj.eK.data[7])), qV.push(aNP), (aNP = new qD).qG(L(417)), aNP.qR(new rz(bj.eK.data[8])), qV.push(aNP), (aNP = new qD).qG(L(418)), aNP.qR(new rO(bj.eK.data[5])), qV.push(aNP), (aNP = new qD).qG(L(419)), aNP.qR(new rz(bj.eK.data[
			13], L(420))), aNP.qR(new rz(bj.eK.data[14], L(421))), qV.push(aNP), aN6 = new qT(aN5.uZ, qV)
}

function aMv() {
	var aO2, aO3, aO4, qV;

	function aO5() {
		aO7(), 2 !== aD.data.spawningType || bA.qi.a2a(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		2 === aD.data.spawningType && bA.qi.a2m(aO4.v0(), aD.data.spawningData, bS.aHg - 1)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(424), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD,
			uS = (aNP.qG(L(266)), [L(291), L(301), L(269)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uS.splice(1, 1), 0 < value) && (value = 1);
		aNP.qO(new uO({
			uS: uS,
			value: value
		}, function(e8) {
			aO7(), aD.data.spawningType = e8, 0 === aD.data.gameMode && 1 === e8 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ek)), t.u(24)
		})), aNP.qR(new sF), aNP.qR(new rz({
			value: aD.data.selectableSpawn
		}, L(425), function(value) {
			aD.data.selectableSpawn = value
		})), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP = new qD;
		aNP.qG("Seed"), aNP.qR(new rO({
			e8: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qV.push(aNP)
	}(qV), function(qV) {
		var aNP;
		2 === aD.data.spawningType && ((aNP = new qD).qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.spawningData, 2)), aNP.qR(aO4), qV.push(aNP))
	}(qV), qV))
}

function aMd() {
	var aN5, aQ7, aQ8, uU;

	function aRC(id) {
		0 !== a0.id || bj.eK.data[140].value ? 0 === id ? t.u(8, 1, new sq(16)) : t.u(2) : t.y.aQ1(t.sp, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aN5.show(), this.resize(), this.j3()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aQ7.resize()
	}, this.j3 = function() {
		8 === aa.a1J() && (2 <= bd.aRH ? aQ8[2].qs === bB.nv && aQ8[2].qu(0) : aQ8[2].qs !== bB.nv && aQ8[2].qu(bB.nv), !aD.gw && aM.qB(aD.eX) ? aQ8[1].qs === bB.nv && aQ8[1].qu(0) : aQ8[1].qs !== bB.nv && aQ8[1].qu(bB.nv), !aD.gw && aw.hc(aD
			.eX) ? aQ8[0].qs === bB.nv && aQ8[0].qu(0) : aQ8[0].qs !== bB.nv && aQ8[0].qu(bB.nv))
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aQ8 = [new w(L(426), function() {
		aRC(0)
	}), new w(L(324), function() {
		t.u(16)
	}), new w(L(382), function() {
		t.u(17)
	}), new w(L(427), function() {
		t.y.aOz()
	}, 0, 0, 1), new w(L(392), function() {
		t.u(3, 1)
	}), new w(L(428), function() {
		t.u(18)
	}), new w(L(398), function() {
		aRC(1)
	}), new w(L(429), function() {
		var sf = ["Patreon", L(438), L(439), "YouTube Tutorial", "Discord", L(440), L(317), L(441), L(320), L(442), "Terms", "Privacy"],
			a3L = [bK.aO0, bK.aCU, bK.a1C, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCV, bK.aRI, bK.aRJ, bK.a0u, bK.aRK, bK.aRL, bK.aRM, bK.aQj];
		1 === a0.id ? (sf.splice(2, 1), sf.splice(0, 1), a3L.splice(2, 1), a3L.splice(0, 1)) : 2 === a0.id && (sf.splice(1, 1), sf.splice(0, 1), a3L.splice(1, 1), a3L.splice(0, 1)), t.u(4, 1, new v(L(429), bA.qa.a3K(sf, a3L), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(430), function() {
		t.u(4, 1, new v(L(430), l.dv + "<br><a href='" + bK.aRI + "' target='_blank'>" + bK.aRI + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(431), function() {
		t.u(4, 1, new v(L(431), L(443) + "<br>" + L(444), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(445), function() {
			a0.a1.a16(), t.u(1)
		})]))
	}), new w(L(432), function() {
		a0.a1.a17(), t.u(4, 1, new v(L(446), L(447) + " <a href='" + bK.aQj + "' target='_blank'>" + bK.aQj + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], uU = [new w("⬅️ " + L(37), function() {
		t.y.aC9()
	})], 8 === aa.a1J() && (aQ8.unshift(new w(L(312), function() {
		t.u(30)
	})), aQ8.unshift(new w(L(435), function() {
		2 <= bd.aRH && (t.x(), be.a2D(), bf.dl = !0)
	}, 0, 1)), aQ8.unshift(new w(L(436), function() {
		!aD.gw && aM.qB(aD.eX) && (b8.hD.pO(), t.x(), aM.gx) && aM.a2D()
	}, 0, 1)), aQ8.unshift(new w(L(437), function() {
		!aD.gw && aw.hc(aD.eX) && (bV.a5V(2), b8.hD.hY(), t.x(), aM.gx) && aM.a2D()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dv && aQ8.push(new w(L(433), function() {
		a0.a1.a18()
	})), aN5 = new uT(L(434), uU), aQ7 = new r8(aQ8, aN5.uZ)
}

function aMz() {
	var aO2, aO3, aO4, qV;

	function aO5() {
		aO7(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		2 === aD.data.sResourcesType && bA.qi.a2m(aO4.v0(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(307), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), aNP.qO(new uO({
			uS: [L(267), L(268), L(269)],
			value: aD.data.sResourcesType
		}, function(e8) {
			aO7(), 2 !== e8 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ek)), aD.data.sResourcesType = e8, t.u(28)
		})), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP;
		1 === aD.data.sResourcesType && ((aNP = new qD).qG("Value"), aNP.qR(new rO({
			e8: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qV.push(aNP))
	}(qV), function(qV) {
		var aNP;
		2 === aD.data.sResourcesType && ((aNP = new qD).qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.sResourcesData, 2)), aNP.qR(aO4), qV.push(aNP))
	}(qV), qV))
}

function aMx() {
	var aO2, aO3, aO4, qV;

	function aO5() {
		aO7(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aN3()[19] = null, t.a1I()
	}

	function aO7() {
		2 === aD.data.tIncomeType && bA.qi.a2m(aO4.v0(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aO2.show(), this.resize()
	}, this.rr = function() {
		aO2.rr()
	}, this.resize = function() {
		aO2.resize(), aO3.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aO2.ua[0].qr()
	}, aO2 = new uT(L(305), [new w("⬅️ " + L(37), aO5)]), aO3 = new qT(aO2.uZ, (function(qV) {
		var aNP = new qD;
		aNP.qG(L(266)), aNP.qO(new uO({
			uS: [L(267), L(268), L(269)],
			value: aD.data.tIncomeType
		}, function(e8) {
			aO7(), 2 !== e8 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ek), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e8, t.u(26)
		})), qV.push(aNP)
	}(qV = []), function(qV) {
		var aNP;
		1 === aD.data.tIncomeType && ((aNP = new qD).qG("Value"), aNP.qR(new rO({
			e8: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qV.push(aNP))
	}(qV), function(qV) {
		var aNP;
		2 === aD.data.tIncomeType && ((aNP = new qD).qG("Data"), (aO4 = new ur(0, 1, 0, 1)).uy(bA.rZ.a4I(aD.data.tIncomeData, 4)), aNP.qR(aO4), qV.push(aNP))
	}(qV), qV))
}

function aMp() {
	var aN5, aN6, qV;
	this.show = function() {
		aN5.show(), this.resize()
	}, this.rr = function() {
		aN5.rr()
	}, this.resize = function() {
		aN5.resize(), aN6.resize()
	}, this.a2A = function(f8) {
		2 === f8 && aN5.ua[0].qr()
	}, aN5 = new uT(L(428), [new w("⬅️ " + L(37), function() {
		t.a1I()
	})]), aN6 = new qT(aN5.uZ, ((qV = []).push(function() {
		function aNV() {
			aRR.button.textContent = L(169), aRP.e.readOnly = !1, aRQ.e.readOnly = !1, aNT.qu(1), aNT.button.style.color = bB.nj
		}
		var aNP = new qD,
			aRO = (aNP.qG(L(448)), new rO({
				value: bj.eK.data[105].value,
				e8: -1
			})),
			aRP = (aRO.e.readOnly = !0, aNP.qR(aRO), aNP.qG(L(349), "0.8em"), new rO(bj.eK.data[148])),
			aRP = new rO(bj.eK.data[148], 0, void 0, function(e) {
				aNS(bj.eK.data[149].value, e.target.value)
			}),
			aRQ = (aNP.qR(aRP), aNP.qG(L(353), "0.8em"), new rO(bj.eK.data[149], 1, void 0, function(e) {
				aNS(e.target.value, bj.eK.data[148].value)
			})),
			aRR = (aNP.qR(aRQ), new w(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aRP.e.readOnly = !0, aRQ.e.readOnly = !0, aNT.qu(0), aNT.button.style.color = bB.oh, bj.s2.s3(149, aRQ.e.value), aNS(bj.eK.data[149].value, bj.eK.data[
					148].value)) : aNV(), !0
			})),
			aNT = (aNP.qR(new s5([aRR.button])), new w(L(14), function(e) {
				return aRP.e.readOnly && b0.y.aNU(0) && (bA.qa.a3P(e), aNV(), b0.aNW.aNX({
					sr: 0,
					sn: bj.eK.data[148].value,
					value: parseInt(bj.eK.data[149].value, 10)
				})), !0
			}, 1)),
			qJ = aNP.qI(),
			aNS = (aNP.qI(L(449)).style.fontWeight = "bold", function(fF, qH) {
				fF = bA.g9.a3s(fF, 2, 1e6);
				var aNZ = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
				qJ.textContent = L(171, [fF, bj.eK.data[105].value, aNZ, qH, fF - aNZ])
			});
		return aNP.qR(new s5([aNT.button])), aNS(bj.eK.data[149].value, bj.eK.data[148].value), aNP
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
	var a9N, aRT, aRU, aRV, aRS = !1;

	function aRW() {
		aRS = !0, a9N = -1, aRT = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aRT[aB] = !1;
		var xV = Math.floor(1 + .02 * h.min);
		aRU = new Array(4), (aRV = new Array(4))[1] = aRV[3] = aRU[0] = aRU[2] = 0, aRV[0] = aRU[3] = -xV, aRU[1] = aRV[2] = xV
	}

	function aRX() {
		if (-1 !== a9N)
			if (0 !== aD.a08 && aH.nR()) {
				for (var aRY = !1, aB = 3; 0 <= aB; aB--) aRT[aB] && (aRY = !0, iO += aRU[aB], iP += aRV[aB], af.a1c(aRU[aB], aRV[aB]), aS.a93());
				aRY ? bf.dl = !0 : ar.nH()
			} else ar.nH()
	}
	this.a28 = function(e8) {
		0 !== aD.a08 && aH.nR() && (aRS || aRW(), aRT[e8] = !0, -1 === a9N) && (a9N = setInterval(aRX, 20), aRX())
	}, this.a2B = function(e8) {
		if (0 !== aD.a08 && (aRS || aRW(), aRT[e8] = !1, -1 !== a9N)) {
			for (var aRY = !1, aB = 3; 0 <= aB; aB--) aRY = aRY || aRT[aB];
			aRY || this.nH()
		}
	}, this.nH = function() {
		if (aRS && -1 !== a9N) {
			for (var aB = 3; 0 <= aB; aB--) aRT[aB] = !1;
			clearInterval(a9N), a9N = -1
		}
	}
}

function cj() {
	this.y = new aRZ, this.mR = new aRa, this.p4 = new aRb, this.aET = new aRc, this.aPM = new aRd, this.aNW = new aRe, this.ph = new aRf, this.aPO = new aRg, this.a6f = new aRh, this.aRi = new aRj, this.aRk = new aRl, this.aRm = new aRn, this.aRo =
		new aRp, this.dd = function() {
			this.y.dd()
		}
}

function aRZ() {
	var aRq, aRs;
	this.aFo = 5, this.aRr = null;

	function aS0(aB) {
		return aRs[aB].aRS && aRq[aB].aS0()
	}

	function aRx(a1E) {
		aRs[a1E].eM = bf.eM, aRs[a1E].aRu = !1
	}
	this.a1O = 0, this.a1H = 0, this.dd = function() {
		this.aRr = new Array(this.aFo);
		this.aRr[0] = "territorial.io";
		var aKR = ay.aKn(0);
		ay.a4f(0);
		for (var aB = 1; aB < this.aFo; aB++) this.aRr[aB] = aK.zg() + ".territorial.io";
		for (ay.a4f(aKR), aRq = new Array(this.aFo), aRs = new Array(this.aFo), aB = this.aFo - 1; 0 <= aB; aB--) aRs[aB] = {
			aRS: !1,
			eM: 0,
			aRu: !1
		};
		this.aFp(0, 0)
	}, this.aRv = function(aB) {
		return aRq[aB]
	}, this.j3 = function() {
		for (var aB = this.aFo - 1; 0 <= aB; aB--) this.aNU(aB) && bf.eM > aRs[aB].eM + 15e3 && (b0.p4.aRw(aB, aRs[aB].aRu), aRx(aB));
		!this.aNU(0) && bf.eM > aRs[0].eM + 8e3 && (aRs[0].eM = bf.eM, this.aFp(0, 0))
	}, this.aPJ = function(id) {
		return this.aFp(0, id) && this.aRy(0)
	}, this.aFp = function(a1E, aMb) {
		if (aRs[a1E].aRS) {
			if (aRq[a1E].aS0()) return aRq[a1E].aS1(aMb), aRq[a1E].aNU();
			aRq[a1E].rr()
		}
		return this.aRz(a1E, aMb), !1
	}, this.aRz = function(a1E, aMb) {
		aRs[a1E].aRS = !0, aRx(a1E), aRq[a1E] = new aS2, aRq[a1E].dd(a1E, aMb)
	}, this.aS1 = function(a1E, aMb) {
		aS0(a1E) && aRq[a1E].aS1(aMb)
	}, this.aS3 = function(a1E, aMb) {
		b0.aPM.aS4(a1E)
	}, this.aRy = function(aB) {
		return this.aNU(aB) && aRq[aB].aRy()
	}, this.aS5 = function(aB) {
		aRq[aB].aS5()
	}, this.aNU = function(aB) {
		return aRs[aB].aRS && aRq[aB].aNU()
	}, this.send = function(a1E, aC) {
		0 !== a1E && aRx(a1E), aRq[a1E].send(aC)
	}, this.a1t = function(a1E) {
		8 === aa.a1J() && (aRs[a1E].aRu = !0, b0.mR.aS6 = !0)
	}, this.close = function(a1E, aS7) {
		aS0(a1E) && aRq[a1E].close(aS7)
	}, this.aS8 = function(a1E, aS7) {
		o.a1R(aS7), aS0(a1E) && aRq[a1E].close(aS7)
	}, this.a1S = function(aS7) {
		for (var aB = this.aFo - 1; 0 <= aB; aB--) this.close(aB, aS7)
	}, this.aS9 = function(a1E, aS7) {
		for (var aB = this.aFo - 1; 0 <= aB; aB--) aB !== a1E && this.close(aB, aS7)
	}, this.a4r = function() {
		this.close(this.a1O, 3246)
	}, this.aSA = function(a1E, e) {
		aRq[a1E].rr(), o.a1D(a1E, e.code)
	}
}

function aRa() {
	this.aS6 = !1, this.j3 = function() {
		bf.k7() % 250 != 249 || aD.gw || (b0.aPM.aSB(+(this.aS6 && ag.mj[aD.eX]), al.kg + bN.y.m0), this.aS6 = !1)
	}
}

function aRh() {
	function aSc(aSd) {
		var eq = aD.data,
			aSd = (eq.selectedPlayer = bH.pi(aSd), eq.spawningSeed = bH.pi(14), bH.pi(4)),
			aSd = (aSd < 7 ? (eq.gameMode = 1, eq.numberTeams = aSd + 2) : 9 === aSd ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === aSd ? 0 : 10 === aSd ? 1 : 2), eq.isContest = bH.pi(1), bH
				.pi(6));
		return eq.mapType = bS.aDT(aSd) ? 0 : 1, bS.aDU(eq, aSd), eq.mapSeed = bH.pi(14), aSd
	}
	this.aSD = function(a1E, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aS8(a1E, 3205) : ((0 === bH.pi(1) ? function(a1E) {
			var aSH = bH.pi(6);
			0 === aSH ? function(a1E) {
					if (0 === a1E && 8 !== aa.a1J()) {
						t.y.aQk();
						for (var aSU = bH.pi(12), aSV = bH.pi(6), g = new Array(aSU), aB = 0; aB < aSU; aB++) g[aB] = bH.pi(aSV);
						aT.a9T(g)
					}
				}(a1E) : 2 === aSH ? b0.aRi.aSJ(a1E) : 3 === aSH || 4 === aSH ? ax.dd() : 9 === aSH ? b0.aRk.aSK(a1E) : 10 === aSH ? b0.aRm.aSL() : 11 === aSH ? b0.aRk.aSM(a1E) : 12 === aSH ? b0.aRm.aSN() : 13 === aSH ? b0.aRo.aSO() :
				14 === aSH ? b0.aRo.aSP() : 15 === aSH ? b0.aRk.aSQ() : 16 === aSH ? b0.aRi.aSR(a1E) : 17 === aSH ? b0.aRi.aSS(a1E) : 19 === aSH && b0.aRi.aST(a1E)
		} : function(a1E) {
			if (8 !== aa.a1J() && !ax.aGJ()) return;
			if (a1E !== b0.y.a1O) b0.y.aS8(a1E, 3244);
			else if (0 === bH.pi(1)) bf.a0H.aSe(bH.aC);
			else {
				var aB, a1E = bH.pi(2);
				if (0 === a1E) {
					var pJ, p4 = bH.pi(9);
					0 !== ag.mj[p4] && 0 !== ag.mj[aD.eX] && (pJ = bH.pi(10), aN.pI(p4, aD.eX, pJ), af.q9(p4, 1, pJ))
				} else if (1 === a1E) ! function() {
					var p4 = bH.pi(9);
					0 !== ag.mj[p4] && 0 !== ag.mj[aD.eX] && b5.aK3(0, [p4], !0) && aN.pa(p4, 1)
				}();
				else if (2 === a1E) ! function() {
					var p4 = bH.pi(9),
						target = bH.pi(9);
					0 !== ag.mj[p4] && 0 !== ag.mj[target] && 0 !== ag.mj[aD.eX] && b5.aK3(1, [p4], !0) && (af.q9(p4, 3, 96), af.q9(target, 4, 96), aN.a6m(p4, target))
				}();
				else if (l.a9 && !l.aA) {
					var en = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), en = Math.min(b8.p1.pk.length, 540), aB = 0; aB < en; aB++) bD.aSk(32, b8.p1.pk[aB]);
					b0.y.send(b0.y.a1O, bD.aC)
				}
			}
		})(a1E), bf.aSG())
	}, this.aSW = function(aC) {
		if (bH.dd(aC), bH.e8 = 1, 3 === bH.pi(6)) {
			bH.e8 += 20;
			var eq = aD.data = new a4Y,
				aC = aSc(9),
				aDV = eq.humanCount = bH.pi(9) + 1;
			eq.selectableSpawn = 1 === eq.gameMode || aDV < 100, eq.colorsData = new Uint32Array(aDV), eq.playerNamesData = new Array(aDV);
			for (var aB = 0; aB < aDV; aB++) bH.e8++, eq.colorsData[aB] = bH.pi(18), eq.playerNamesData[aB] = bG.w6.wA(bH.pi(5));
			aa.aG0(), bS.a7(aC, eq.mapSeed), aD.a4d()
		} else ! function() {
			bH.e8 += 20;
			var eq = aD.data = new a4Y,
				aSb = aSc(1);
			eq.humanCount = 2;
			eq.selectableSpawn = 1, eq.elo = new Uint16Array(2), eq.colorsData = new Uint32Array(2), eq.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e8++, eq.colorsData[aB] = bH.pi(18), eq.elo[aB] = bH.pi(14), eq.playerNamesData[aB] = bG.w6.wA(bH.pi(5));
			aa.aG0(), bS.a7(aSb, eq.mapSeed), aD.a4d()
		}()
	}, this.aSZ = function() {
		bH.e8 = 1;
		var aSH = bH.pi(6),
			aSa = bH.pi(10);
		return b0.y.a1H === aSa ? (b0.y.a1O = aSa, !1) : (b0.y.close(b0.y.a1H, 3247), b0.y.a1O = aSa, ax.aDQ = bH.pi(10), ax.aG8 = bH.pi(3 === aSH ? 9 : 1), b0.y.aFp(aSa, 5) && b0.p4.aGF(), !0)
	}
}

function aRn() {
	this.aSL = function() {
		bj.y.ve(), bj.s2.s3(105, bF.ss.st(bF.ss.su(5))), bj.s2.s3(106, bF.ss.st(bF.ss.su(8))), bj.s2.s3(109, bH.pi(30)), bj.s2.s3(108, bj.eK.data[109].value), bj.s2.s3(111, bj.eK.data[109].value + 1), bj.s2.s3(107, 0), bj.s2.s3(110, "")
	}, this.aSN = function() {
		var data;
		bH.size < bD.aSl(29) ? b0.y.aS8(0, 3254) : ((data = {
			so: bH.pi(30),
			vr: bH.pi(16),
			vs: bH.pi(30),
			vt: bH.pi(30),
			vu: bH.pi(30),
			vv: bH.aSm(32),
			username: bG.w8.wQ(5),
			vw: bG.w8.wQ(3),
			vx: bG.w8.wQ(3),
			vy: bH.aSm(32),
			vz: bH.aSm(32),
			w0: bH.pi(30),
			w1: bH.aSm(32),
			w2: bH.aSm(32),
			w3: bH.aSm(32),
			w4: bH.aSm(32),
			aNe: bH.aSm(32),
			aNf: bH.aSm(30),
			aNs: bH.aSm(32),
			aNt: bG.w8.wQ(3),
			aNl: bH.aSm(2),
			aNm: bH.aSm(10),
			aNj: bG.w8.wQ(8),
			aNn: bH.aSm(5),
			aNR: bH.pi(30),
			aNd: bH.pi(30),
			a0Z: bH.aSm(32),
			aNi: bH.pi(3),
			aNh: bH.pi(8),
			aNu: bH.pi(1),
			aNv: bH.pi(1)
		}).aNu && (data.aNw = bH.aSm(32), data.aNx = bH.pi(30), data.aNy = bH.pi(30), data.aNz = bH.pi(1)), 8 === t.sp && (25 === t.a58().aPI ? (data.aN7 = !0, t.y.aMm = data, t.a58().aPY(25, !1)) : (data.aN7 = !1, bj.s2.s3(160, +(data
			.aNu && data.aNz)), data.sn = bj.eK.data[105].value, t.y.aMj = data, bj.s2.vq(data), t.a58().aPY(16, !0))))
	}
}

function aRp() {
	this.aSO = function() {
		var aB;
		if (bH.size < bD.aSl(23)) b0.y.aS8(0, 3259);
		else {
			var t8 = bH.pi(6),
				en = bH.pi(10),
				data = [];
			if (9 === t8 || 10 === t8 || 11 === t8) {
				for (aB = 0; aB < en; aB++) data.push([bH.pi(30), bG.w8.wQ(5), bH.aSm(32), 0, bH.pi(30)]);
				8 === t.sp && t.a58().aPY(21, !0, {
					t8: t8,
					data: data
				})
			} else if (12 === t8) {
				for (aB = 0; aB < en; aB++) data.push([bH.pi(20), bH.pi(30), bH.pi(30), bH.aSm(32), bH.pi(30), bG.w8.wQ(5), bG.w8.wQ(5)]);
				8 === t.sp && t.a58().aPY(21, !0, {
					t8: t8,
					data: data
				})
			} else {
				var hk = bH.pi(16);
				if (bH.aSn(39 + 16 * hk + en * (0 === t8 ? 111 : 1 === t8 ? 101 : 2 === t8 || 3 === t8 ? 127 : 212))) {
					if (0 === t8)
						for (aB = 0; aB < en; aB++) data.push([bH.pi(30), bG.w6.wA(bH.pi(5)), bH.pi(16), bH.pi(30), bH.pi(30)]);
					else if (1 === t8)
						for (aB = 0; aB < en; aB++) data.push([bH.pi(16), bG.w6.wA(bH.pi(3)), bH.pi(16), bG.w6.wA(bH.pi(5)), bH.pi(31), bH.pi(30)]);
					else if (2 === t8 || 3 === t8)
						for (aB = 0; aB < en; aB++) data.push([bH.pi(30), bG.w6.wA(bH.pi(5)), bH.aSm(32), bH.pi(30), bH.pi(30)]);
					else
						for (aB = 0; aB < en; aB++) data.push([bH.pi(20), bH.pi(30), bH.pi(30), bH.pi(30), bH.pi(30), bH.aSm(32), bH.pi(30), bG.w6.wA(bH.pi(5)), bG.w6.wA(bH.pi(5))]);
					8 === t.sp && t.a58().aPY(21, !0, {
						t8: t8,
						data: data
					})
				} else b0.y.aS8(0, 3260)
			}
		}
	}, this.aSP = function() {
		if (bH.size < bD.aSl(29)) b0.y.aS8(0, 3265);
		else {
			var aSo = bH.pi(4),
				aSp = bH.pi(7),
				aSq = bH.pi(11);
			if (bH.aSn(29 + 16 * aSp + 16 * aSq + 11 * aSo)) {
				for (var data = [], aB = 0; aB < aSo; aB++) {
					for (var a0o = bG.w6.wA(bH.pi(3)), aSr = bH.pi(8), aOW = [], f6 = 0; f6 < aSr; f6++) aOW.push(bH.pi(16));
					data.push({
						name: "[" + a0o + "]",
						aOW: aOW
					})
				}
				8 === t.sp && t.a58().aPY(23, !0, data)
			} else b0.y.aS8(0, 3266)
		}
	}
}

function aRj() {
	function aSt() {
		var id = bH.pi(3);
		return 0 === id ? {
			id: id,
			sn: bH.pi(30),
			r: bn.aCa.aEY(bG.w8.wQ(7))
		} : 1 === id ? {
			id: id,
			sn: bH.pi(30),
			aDb: bH.pi(3),
			value: bH.pi(30),
			target: bH.pi(30)
		} : 2 === id ? {
			id: id,
			sn: bH.pi(30),
			aDb: bH.pi(3)
		} : 3 === id ? {
			id: id,
			sn: bH.pi(30),
			aDb: bH.pi(3),
			value: bH.pi(4),
			target: bH.pi(30)
		} : 4 === id ? {
			id: id,
			sn: bH.pi(30),
			aDb: bH.pi(3),
			target: bH.pi(30)
		} : 5 === id ? {
			id: id,
			aDb: bH.pi(6)
		} : 6 === id ? {
			id: id,
			value: bH.pi(17)
		} : null
	}
	this.aSJ = function(a1E) {
		if (a1E !== b0.y.a1H) b0.y.close(a1E, 3239);
		else if (6 !== aa.a1J()) b0.y.close(a1E, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rf = bn.y.rg[aB],
					playerCount = (rf.tg = bH.pi(10), rf.eT = bH.pi(6), rf.mapSeed = bH.pi(14), rf.aDM = bH.pi(4), rf.aF2 = bH.pi(6), rf.aF3 = bH.pi(4), rf.aDS = bH.pi(1), rf.aE9 = bH.pi(12), rf.spawningSeed = bH.pi(14), bH.pi(16));
				bn.tv.tx[aB] = bH.pi(16);
				for (var f6 = 0; f6 < playerCount; f6++) bn.tv.aCo(aB, bH.pi(30), bG.w8.wQ(5), bH.pi(4), bH.pi(30), bH.pi(7), bH.pi(16), bH.pi(18), bH.pi(11), bH.pi(12))
			}
			t.u(29), bn.y.aE1(!0)
		}
	}, this.aSR = function(a1E) {
		if (a1E !== b0.y.a1H) b0.y.close(a1E, 3239);
		else if (bn.a1G) {
			bn.y.aDz[0] = bH.pi(20), bn.y.aDz[1] = bH.pi(20);
			for (var aSs = bH.pi(16), f6 = 0; f6 < aSs; f6++) {
				var id = bH.pi(3);
				0 === id ? bn.tv.aCo(bH.pi(2), bH.pi(30), bG.w8.wQ(5), 0, 1234566, 127, 0, bH.pi(18), 0, bH.pi(12)) : 1 === id ? bn.tv.aD7(bH.pi(16), bH.pi(2)) : 2 === id ? bn.tv.aD3(bH.pi(16), bH.pi(2), bH.pi(2)) : 3 === id ? bn.tv.aD6(bH.pi(
					16), bH.pi(2)) : 4 === id ? bn.tv.aCw(bH.pi(16), bH.pi(2), bH.pi(4), bH.pi(30), bH.pi(7), bH.pi(16), bH.pi(11)) : 5 === id && bn.tv.aCx(bH.pi(16), bH.pi(2), bH.pi(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rf = bn.y.rg[aB];
				if (rf.tg = bH.pi(10), 0 === rf.tg) {
					if (rf.a1O = bH.pi(10), rf.aDQ = bH.pi(10), bn.aCc.dm(aB)) return;
					rf.eT = bH.pi(6), rf.mapSeed = bH.pi(14), rf.aDM = bH.pi(4), rf.aF2 = bH.pi(6), rf.aF3 = bH.pi(4), rf.aDS = bH.pi(1), rf.aE9 = bH.pi(12), rf.spawningSeed = bH.pi(14), rf.aF4.push(rf.aF4[0]), rf.aF4.shift()
				}
			}
			bn.y.aDI()
		} else b0.y.close(a1E, 3251)
	}, this.aSS = function(a1E) {
		if (a1E !== b0.y.a1H) b0.y.close(a1E, 3272);
		else if (bn.a1G) {
			for (var rd = bH.pi(4), rf = bn.y.rg[rd], rh = rf.rh, uB = (rf.ri = bH.pi(20), bH.pi(6)), aB = 0; aB < uB; aB++) {
				var aFK = aSt();
				bn.rq.aFJ(aFK), rh.push(aFK)
			}
			bn.y.aEA(rd)
		} else b0.y.close(a1E, 3273)
	}, this.aST = function(a1E) {
		a1E !== b0.y.a1H ? b0.y.close(a1E, 3276) : bn.a1G ? bn.message.aDG(aSt()) : b0.y.close(a1E, 3277)
	}
}

function aRl() {
	this.aSK = function(a1E) {
		var aSg, r6;
		bH.aSn(70) ? (aSg = bH.pi(3), r6 = bi.aSu.j3(bH.pi(30), bH.pi(30)), b0.aPM.aSv(a1E, r6, aSg), 0 < aSg || (0 === a1E && 0 === bj.eK.data[105].value.length ? b0.aPM.aPN(0) : b0.aNW.aSw(a1E), 4 === b0.y.aRv(a1E).aSx() ? 6 === aa.a1J() && b0
			.aET.aFq(a1E) : 5 !== b0.y.aRv(a1E).aSx() || 8 !== aa.a1J() && 10 !== aa.a1J() || b0.p4.aGF())) : b0.y.aS8(a1E, 3269)
	}, this.aSM = function(a1E) {
		var id = bH.pi(6);
		1 === id ? (bj.s2.s3(160, bH.pi(30)), b0.y.aS5(a1E), aT.a9P || b0.aPM.aPN(1), b7.aC7(), 8 === t.sp && t.a58().aPX()) : 21 === id ? 8 === t.sp && t.a58().aPY(17) : 22 === id && (bj.s2.s3(106, bj.eK.data[110].value), bj.s2.s3(110, ""),
			8 === t.sp) && t.a58().aPY(15)
	}, this.aSQ = function() {
		var en = bH.pi(16),
			aSy = bH.pi(16);
		if (bH.aSn(55 + 10 * en + 16 * aSy)) {
			for (var g = [], aB = 0; aB < en; aB++) g.push(bG.w6.wA(bH.pi(10)));
			b7.aC8(g)
		} else b0.y.aS8(0, 3270)
	}
}

function aRb() {
	this.aRw = function(a1E, aRu) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aRu ? 1 : 0), bD.a8(3, 0 === aD.a08 ? bn.a1G ? 6 : 0 : aD.gw ? 1 : aD.kU ? 7 : aD.kS < 7 ? 2 : 8 === aD.kS ? 4 : 9 === aD.kS ? 5 : 3), b0.y.send(a1E, bD.aC)
	}, this.aGF = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a1H), bD.a8(10, ax.aDQ), bD.a8(9, ax.aG8), bD.a8(10, l.dx), bD.a8(14, l.dq), b0.y.send(b0.y.a1O, bD.aC)
	}, this.p5 = function(eZ) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eZ), b0.y.send(b0.y.a1O, bD.aC)
	}, this.p6 = function(iN, jJ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, iN), bD.a8(10, jJ), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pA = function(iN, p8) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, iN), bD.a8(9, p8), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pC = function(iN, pB) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, iN), bD.a8(27, pB), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pE = function(iN, n6) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, iN), bD.a8(16, n6), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pH = function(jJ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jJ), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pL = function(e8) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e8), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pN = function(pM) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pM), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pP = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pQ = function(iN, eZ, jJ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, iN), bD.a8(10, jJ), bD.a8(22, eZ), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pY = function(aSz, aT0) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aT0), bD.a8(10, aSz), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pb = function(a6f) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a6f), b0.y.send(b0.y.a1O, bD.aC)
	}, this.pf = function(aT1, target) {
		var aB, en = aT1.length;
		for (bD.a7(14 + 9 * en), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < en; aB++) bD.a8(9, aT1[aB]);
		b0.y.send(b0.y.a1O, bD.aC)
	}
}

function aRe() {
	this.aT2 = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.aPM.aT3(), b0.y.send(0, bD.aC)
	}, this.aSw = function(a1E) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.ss.wM(bj.eK.data[105].value, 5), bG.ss.wM(bj.eK.data[106].value, 8), bD.a8(30, bj.eK.data[109].value), b0.y.send(a1E, bD.aC)
	}, this.aPa = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.ss.wL(bj.eK.data[110].value), b0.y.send(0, bD.aC)
	}, this.aPW = function(a3v) {
		var en = a3v.qH.length;
		bD.a7(21 + 16 * en), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a3v.sr), bD.a8(8, en), bF.w6.wL(a3v.qH), b0.y.send(0, bD.aC)
	}, this.aNo = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.sr), bG.ss.wM(data.sn, 5), b0.y.send(0, bD.aC)
	}, this.aNX = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.sr), bG.ss.wM(data.sn, 5), bD.aSk(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aRf() {
	this.pg = function() {
		for (var en = aD.kA, zx = bR.result.zx, l5 = zx.length, a0h = (bD.a7(17 + 16 * en + 33 * l5), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, l5), bD.a8(1, +(2 === aD.a05)), bD.a8(1, aD.a0P % 2), ag.a0h), aB = 0; aB < en; aB++) bD.a8(16, a0h[aB]);
		for (var gb = ag.gb, aB = 0; aB < l5; aB++) {
			var gL = zx[aB];
			bD.a8(9, gL), bD.a8(24, gb[gL])
		}
		b0.y.send(b0.y.a1O, bD.aC)
	}
}

function aRg() {
	this.aPP = function(t8, t9, tA) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, t8), bD.a8(1, +(t9 < 0)), bD.a8(1, +(tA < 0)), bD.a8(30, Math.abs(t9)), bD.a8(30, Math.abs(tA)), b0.y.send(0, bD.aC)
	}, this.aPQ = function(t8, aPR, aPS) {
		bD.a7(18 + 16 * aPR.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, t8), b0.aPM.aT5(aPR), bD.a8(30, aPS), b0.y.send(0, bD.aC)
	}, this.aPV = function(t8, aPR, aPS) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, t8), bG.ss.wM(aPR, 5), bD.a8(30, aPS), b0.y.send(0, bD.aC)
	}, this.aPT = function(aOV, a0n) {
		for (var en = a0n.length, hk = 0, aB = 0; aB < en; aB++) hk += a0n[aB].length;
		for (bD.a7(21 + 3 * en + 16 * hk), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aOV), bD.a8(4, en), bD.a8(7, hk), aB = 0; aB < en; aB++) bD.a8(3, a0n[aB].length), bF.w6.wL(a0n[aB]);
		b0.y.send(0, bD.aC)
	}, this.aPU = function(aOV, t9, tA) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aOV), bD.a8(1, +(t9 < 0)), bD.a8(1, +(tA < 0)), bD.a8(20, Math.abs(t9)), bD.a8(20, Math.abs(tA)), b0.y.send(0, bD.aC)
	}
}

function aRc() {
	this.aFq = function(a1E) {
		var username = bj.eK.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + 18 + bi.aT6.pi()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dx), bD.a8(2, bj.eK.data[158].value), b0.aPM.aT5(username), bA.color.a31(bj.y.vl())),
			username = (bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), b7.aCA());
		bD.a8(9, username[0]), bD.a8(9, username[1]), bi.aT6.za(), b0.y.a1H = a1E, b0.y.send(a1E, bD.aC)
	}, this.aEU = function(aT9, a3v) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aT9), 2 === aT9 ? bE.a8(2, a3v) : 3 === aT9 ? bF.w8.za(a3v, 7, bE) : 5 === aT9 && (bE.a8(3, a3v.id), bE.a8(3, a3v.value), bE.a8(30, a3v.sn)), b0.y.send(b0.y.a1H, bE.aTA())
	}
}

function aRd() {
	this.aS4 = function(a1E) {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dv), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), b0.y.send(a1E, bD.aC)
	}, this.aSv = function(a1E, r6, aSg) {
		bD.a7(70), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aSg), bD.a8(30, r6[0]), bD.a8(30, r6[1]), b0.y.send(a1E, bD.aC)
	}, this.aPN = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.aTC = function(id, qH) {
		var en = Math.min(qH.length, 63);
		bD.a7(19 + 16 * en), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, en), bF.w6.wL(qH), b0.y.send(0, bD.aC)
	}, this.aTD = function(aSa, qS) {
		bD.a7(7 + 26 * qS.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qS.length; aB++) bD.a8(16, qS[aB][0]), bD.a8(10, qS[aB][1]);
		b0.y.send(aSa, bD.aC)
	}, this.aSB = function(aTE, aTF) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aTE), bD.a8(12, aTF), b0.y.send(b0.y.a1O, bD.aC)
	}, this.aT5 = function(username) {
		bD.a8(5, username.length), bF.w6.wL(username)
	}
}

function aS2() {
	var a1E, aMb, aTG, aTH = ["wss://", "/s50/", "/s51/", "/s52/"],
		aTI = 0;

	function aS3() {
		b0.y.aS3(a1E, aMb)
	}

	function aTM(e) {
		b0.a6f.aSD(a1E, new Uint8Array(e.data))
	}

	function aTN() {}

	function aSA(e) {
		b0.y.aSA(a1E, e)
	}
	this.dd = function(e8, aTJ) {
		a1E = e8, aMb = aTJ, e8 = l.dr ? "ws://localhost:" + (7130 + a1E) + "/" : aTH[0] + b0.y.aRr[a1E] + aTH[1 + l.ds], (aTG = new WebSocket(e8)).binaryType = "arraybuffer", aTG.onopen = aS3, aTG.onmessage = aTM, aTG.onclose = aSA, aTG
			.onerror = aTN
	}, this.aTL = function() {
		return aTG.readyState === aTG.CONNECTING
	}, this.aNU = function() {
		return aTG.readyState === aTG.OPEN
	}, this.aRy = function() {
		return aTI
	}, this.aS5 = function() {
		aTI = 1
	}, this.aS0 = function() {
		return this.aTL() || this.aNU()
	}, this.aS1 = function(aTJ) {
		aMb = aTJ
	}, this.aSx = function() {
		return aMb
	}, this.send = function(aC) {
		this.aNU() && aTG.send(aC)
	}, this.close = function(aS7) {
		this.aS0() && (aTG.close(aS7), this.rr())
	}, this.rr = function() {
		aTG.onopen = null, aTG.onmessage = null, aTG.onclose = null, aTG.onerror = null
	}
}

function dK() {
	var aTO = !1,
		a70 = 0,
		i = 0,
		sw = 0,
		gap = 0,
		canvas = null,
		yI = null,
		a2b = null;

	function aTQ() {
		for (var aTW, aTU = 0, en = 0, f8 = Math.floor(i / 2), e7 = Math.floor(sw / 2), aTV = 1.5 * Math.PI, aB = aD.xK; 0 <= aB; aB--) en += a2b[aB], 0 === a2b[aB] && aTU++;
		if (aTO = !1, yI.clearRect(0, 0, i, i), yI.fillStyle = bB.ng, yI.fillRect(0, 0, i, i), yI.fillStyle = bB.nj, yI.fillRect(0, 0, i, gap), yI.fillRect(0, 0, gap, i), yI.fillRect(i - gap, 0, gap, i), yI.fillRect(0, i - gap, i, gap), 0 < en)
			if (aTU === aD.xK) {
				for (aB = aD.xK; 0 <= aB; aB--)
					if (0 < a2b[aB]) {
						! function(aB, f8, e7) {
							yI.fillStyle = bg.aTd[bg.kX[aB]], yI.beginPath(), yI.arc(f8, f8, e7, 0, 2 * Math.PI), yI.fill()
						}(aB, f8, e7);
						break
					}!
				function(f8) {
					var fontSize = f8 / 3;
					yI.font = bA.qa.sP(1, fontSize), yI.fillStyle = bB.nj, yI.fillText("100%", f8, f8 + .1 * fontSize)
				}(f8)
			} else {
				for (aB = 0; aB <= aD.xK; aB++) 0 < a2b[aB] && (! function(aB, f8, e7, aTV, aTW) {
					yI.fillStyle = bg.aTd[bg.kX[aB]], yI.beginPath(), yI.arc(f8, f8, e7, aTV, aTW), yI.lineTo(f8, f8), yI.fill()
				}(aB, f8, e7, aTV, aTW = aTV + 2 * Math.PI * a2b[aB] / en), function(f8, e7, aTV, aTW) {
					var fF = (aTW - aTV) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e7 * Math.min(fF, .37);
					fontSize < 8 || (aTV = (aTV + aTW) / 2, aTW = (__fx.settings.detailedTeamPercentage ? (100 * fF).toFixed(2) : Math.floor(100 * fF + .5)) + "%", e7 *= .525 - Math.max(.6 * (fF - .7), 0), yI.font = bA.qa.sP(1, fontSize), yI
						.fillStyle = bB.nj, yI.fillText(aTW, f8 + Math.cos(aTV) * e7, f8 + Math.cos(aTV + 1.5 * Math.PI) * e7))
				}(f8, e7, aTV, aTW), 0 !== aB && aTb(f8, e7, aTV), aTV = aTW);
				aTb(f8, e7, 1.5 * Math.PI)
			}!
		function(f8, e7) {
			yI.beginPath(), yI.arc(f8, f8, e7, 0, 2 * Math.PI), yI.stroke()
		}(f8, e7)
	}

	function aTb(f8, e7, aTe) {
		yI.beginPath(), yI.moveTo(f8, f8), yI.lineTo(f8 + Math.cos(aTe) * e7, f8 + Math.cos(aTe + 1.5 * Math.PI) * e7), yI.stroke()
	}
	this.dd = function() {
		if (aD.hh) {
			a70 = 0, a2b = new Uint32Array(aD.xK + 1);
			for (var aB = aD.xK; 0 <= aB; aB--) a2b[aB] = 0;
			for (aB = al.kg - 1; 0 <= aB; aB--) a2b[bg.el[al.kl[aB]]] += 1;
			this.resize()
		} else a2b = yI = canvas = null
	}, this.a7x = function() {
		return i
	}, this.resize = function() {
		aD.hh && (i = Math.floor(a0.a1.hw() && !aD.nC ? .18 * h.min : .13 * h.hx), i = (i *= 1 + (.5 + .2 * a0.a1.hw()) * aD.nC) + i % 2, sw = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, yI = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), yI.lineWidth = gap, yI.strokeStyle = bB.nj, bA.qa.textAlign(yI, 1), bA.qa.textBaseline(yI, 1), aTQ())
	}, this.kh = function() {
		var dt, ki = this.kj();
		return bg.kX[ki] || (ki = function() {
			for (var ki = -1, aB = aD.xK; 1 <= aB; aB--)(-1 === ki || a2b[aB] > a2b[ki]) && (ki = aB);
			return ki
		}(), dt = ag.gb[ll[0]], -1 !== ki && a2b[ki] > dt) ? a2b[ki] : dt
	}, this.a11 = function() {
		return a70 = 31, this.j3(), this.kj()
	}, this.kj = function() {
		for (var ki = 0, aB = aD.xK; 0 < aB; aB--) a2b[aB] > a2b[ki] && (ki = aB);
		return ki
	}, this.kB = function(aTS) {
		for (var gG = 0, kl = al.kl, el = bg.el, en = al.kg, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kl[aB];
			el[gL] === aTS && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.kk = function(aTS) {
		for (var gG = 0, kl = al.kl, el = bg.el, en = al.kg, fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = kl[aB];
			el[gL] !== aTS && (fR[gG++] = gL)
		}
		bO.fI[0] = gG
	}, this.a3U = function() {
		for (var gG = 0, aB = aD.xK; 0 <= aB; aB--) gG += 0 < a2b[aB];
		return gG
	}, this.j3 = function() {
		if (aD.hh && 32 <= ++a70) {
			a70 = 0;
			for (var aB = aD.xK; 0 <= aB; aB--) a2b[aB] = 0;
			for (aB = al.kg - 1; 0 <= aB; aB--) a2b[bg.el[al.kl[aB]]] += ag.gb[al.kl[aB]];
			aTO = !0
		}
	}, this.mW = function() {
		aD.hh && aTO && aTQ()
	}, this.ui = function() {
		aD.hh && (aD.nC ? uj.drawImage(canvas, bc.gap, bc.gap) : uj.drawImage(canvas, bc.gap, a7y + 2 * bc.gap))
	}
}

function da() {
	function aTk(eu, en, ew, zk, a9E, fE) {
		if (!(ew < 1 || a9E < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zk(eR)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTo(ew, en, eu, zk, aTi, fE) {
		if (!(eu < 1 || aTi < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zk(eR)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTs(iE, iF, aTf) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTf) < bM.iG(iE, aTf)) ? iF : iE
	}
	this.hC = function(aTf) {
		return this.a0C(aTf, function(eR) {
			return ac.ei(eR)
		})
	}, this.hI = function(aTf) {
		return this.a0C(aTf, function(eR) {
			return ac.aGy(eR, aD.eX)
		})
	}, this.a0C = function(aTf, zk) {
		return function(aTf, aTg, zk) {
			for (var h2 = bM.ev(aTf), h4 = bM.ex(aTf), aTi = bS.ey - 2, a9E = bS.ez - 2, aTj = -1, eq = 0; eq < aTg; eq++) {
				var a9D = Math.max(h2 - eq, 1),
					aKv = Math.max(h4 - eq, 1),
					xv = Math.min(h2 + eq, aTi),
					xu = Math.min(h4 + eq, a9E),
					iE = aTk(h2, xv - h2, h4 - eq, zk, a9E, 1),
					iF = aTk(h2 - 1, h2 - a9D - 1, h4 - eq, zk, a9E, -1),
					xv = aTk(h2, xv - h2, h4 + eq, zk, a9E, 1),
					a9D = aTk(h2 - 1, h2 - a9D - 1, h4 + eq, zk, a9E, -1),
					aTn = aTo(h4, xu - h4 - 1, h2 - eq, zk, aTi, 1),
					aTp = aTo(h4 - 1, h4 - aKv - 2, h2 - eq, zk, aTi, -1),
					xu = aTo(h4, xu - h4 - 1, h2 + eq, zk, aTi, 1),
					aKv = aTo(h4 - 1, h4 - aKv - 2, h2 + eq, zk, aTi, -1);
				if (aTj = aTs(aTj, iE, aTf), aTj = aTs(aTj, iF, aTf), aTj = aTs(aTj, xv, aTf), aTj = aTs(aTj, a9D, aTf), aTj = aTs(aTj, aTn, aTf), aTj = aTs(aTj, aTp, aTf), aTj = aTs(aTj, xu, aTf), 0 <= (aTj = aTs(aTj, aKv, aTf)) && eq *
					eq >= bM.iG(aTj, aTf)) return aTj
			}
			return -1
		}(aTf, bM.hu(), zk)
	}
}

function d3() {
	function aTu(key) {
		var aQz;
		return "undefined" == typeof URLSearchParams || (aQz = window.location.search, "string" != typeof(aQz = new URLSearchParams(aQz).get(key))) || aQz.length < 1 ? null : aQz
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aTu("account");
				if (!value && !(value = aTu("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.sp, new sq(1e3, {
					sr: 0,
					sn: value,
					so: 0
				})), 1
			}()) {
			var value = aTu("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1B = new URL(window.location.href);
		a1B.search = "";
		try {
			return history.replaceState(null, "", a1B.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aO1 = function(key, value) {
		if (0 === a0.id) try {
			var a1B = new URL(window.location.href),
				gL = a1B.searchParams;
			gL.set(key, value), a1B.search = gL.toString(), history.replaceState(null, "", a1B.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aTw, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a4f(0)
	}, this.value = function(gL) {
		return g[gL]
	}, this.aKn = function() {
		return bL.du(aTw - 1, 2)
	}, this.a4f = function(aKR) {
		aTw = 2 * aKR % 32768 + 1
	}, this.random = function() {
		return aTw = 167 * aTw % 32768
	}, this.jR = function(me) {
		return bL.du(me * this.random(), 32768)
	}, this.k2 = function(gL) {
		return 0 !== gL && this.random() < this.value(gL)
	}, this.ik = function(f6, f7) {
		return f6 + this.jR(f7 - f6)
	}
}

function cz() {
	this.pu = new aTx, this.a4q = new aTy, this.aI4 = new aTz, this.dd = function() {
		aD.gw || this.pu.dd()
	}, this.j3 = function() {
		aD.gw || (this.pu.j3(), 3 !== t.sp) || bf.k7() % 15 != 5 && 2 !== aD.a08 || t.a58().aR0()
	}, this.aR3 = function() {
		0 === aD.a08 && aa.aG0(), aD.a4Z.a4y(), aD.data.canvas = null, b0.y.close(b0.y.a1O, 3257), b0.y.a1O = 0, aD.data.isReplay = 1, aD.a4d()
	}, this.aR2 = function(qH) {
		var aB = qH.indexOf("=");
		return 0 <= aB ? qH.substring(aB + 1) : qH
	}, this.aR1 = function(qH) {
		return "https://territorial.io/?replay=" + qH
	}
}

function aTx() {
	this.aU1 = null, this.aU2 = null, this.aU3 = null, this.aU4 = null, this.aU5 = null, this.aU6 = null, this.a4p = "";
	var aU7 = 0;
	this.dd = function() {
		this.aU1 = [], this.aU2 = [], this.aU3 = [], this.aU4 = [], this.aU5 = [0], this.aU6 = [0], aU7 = 0, this.a4p = ""
	}, this.pv = function(id, fW, fY, fa) {
		aD.gw || 2 === aD.a08 || (0 === this.aU5[aU7] && (this.aU6[aU7] ? (this.aU5.push(1), this.aU6.push(0), aU7++) : this.aU5[aU7] = 1), this.aU1.push(id), this.aU2.push(fW), this.aU3.push(void 0 === fY ? 0 : fY), this.aU4.push(void 0 === fa ?
			0 : fa), this.aU6[aU7]++)
	}, this.j3 = function() {
		0 === this.aU5[aU7] ? this.aU6[aU7]++ : (this.aU5.push(0), this.aU6.push(0), aU7++)
	}
}

function aTz() {
	var aU8 = 0;

	function aUC(qH, id) {
		aU8 || (id ? 1 === id ? aN.a67 = L(451) + ": " + qH : t.u(4, 3, new v(L(452), qH, 1)) : t.u(4, 3, new v("⚠️ " + L(450), qH, 1)))
	}
	this.wQ = function(qH, aU9) {
		var qS;
		return aU8 = aU9, bG.ss.wI(bG.ss.wG(bG.ss.wE(qH))), aN.a67 = "", !(! function() {
			if (bH.size < 10) aUC("File Too Small");
			else {
				var aUE = bH.pi(12),
					aTF = (aUE !== l.rVersion && aUC("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aUE) + ("   Compatible at territorial.io/" + aUE), 1), bH.pi(12)),
					aUF = bH.pi(31);
				if (aUF !== bH.size) aUC("Size Error: " + aUF + " " + bH.size);
				else if (function(j, aUE) {
						for (var gL = bH.aC, en = bH.size, aTF = aUE, aB = 3; aB < en; aB++) aTF = aTF + gL[aB] & 4095;
						return aTF === j || (aUC("Hash Error: " + aTF + " " + j + " " + en), !1)
					}(aTF, aUE)) return 1
			}
			return
		}() || (aU9 = bH, (qS = aD.data = new a4Y).mapType = aU9.pi(2), qS.mapProceduralIndex = aU9.pi(8), qS.mapRealisticIndex = aU9.pi(8), qS.mapSeed = aU9.pi(14), qS.mapName = aU9.aUH(5), 2 === qS.mapType && aU9.aUI(), qS
			.passableWater = aU9.pi(1), qS.passableMountains = aU9.pi(1), qS.playerCount = aU9.pi(10), qS.humanCount = aU9.pi(10), qS.selectedPlayer = aU9.pi(9), qS.gameMode = aU9.pi(1), qS.playerMode = aU9.pi(2), qS.battleRoyaleMode =
			aU9.pi(2), qS.numberTeams = aU9.pi(4), qS.isZombieMode = aU9.pi(1), qS.isContest = aU9.pi(1), qS.isReplay = aU9.pi(1), qS.elo = aU9.aUJ(2, 14, 2), qS.colorsType = aU9.pi(1), qS.colorsPersonalized = aU9.pi(1), qS.colorsData =
			aU9.aUJ(10, 18, 512), qS.selectableColor = aU9.pi(1), qS.teamPlayerCount = aU9.aUJ(4, 10, 9), qS.neutralBots = aU9.pi(1), qS.botDifficultyType = aU9.pi(2), qS.botDifficultyValue = aU9.pi(4), qS.botDifficultyTeam = aU9.aUJ(4,
				4, 9), qS.botDifficultyData = aU9.aUJ(10, 4, 512), qS.spawningType = aU9.pi(2), qS.spawningSeed = aU9.pi(14), qS.spawningData = aU9.aUJ(11, 12, 1024), qS.selectableSpawn = aU9.pi(1), qS.playerNamesType = aU9.pi(2), qS
			.playerNamesData = aU9.aUK(10, 5, 512), qS.selectableName = aU9.pi(1), qS.aIncomeType = aU9.pi(2), qS.aIncomeValue = aU9.pi(8), qS.aIncomeData = aU9.aUJ(10, 8, 512), qS.tIncomeType = aU9.pi(2), qS.tIncomeValue = aU9.pi(8), qS
			.tIncomeData = aU9.aUJ(10, 8, 512), qS.iIncomeType = aU9.pi(2), qS.iIncomeValue = aU9.pi(8), qS.iIncomeData = aU9.aUJ(10, 8, 512), qS.sResourcesType = aU9.pi(2), qS.sResourcesValue = aU9.pi(11), qS.sResourcesData = aU9.aUJ(10,
				11, 512), ! function() {
				var i6 = bH,
					wR = i6.pi(5),
					aUL = i6.pi(30),
					aUM = i6.pi(30);
				if (aUL + aUM > 8 * i6.size) return void aUC("Corrupted File");
				return function(en) {
						var aUP = new Uint8Array(en),
							aUQ = new Uint16Array(en),
							aUR = new Uint32Array(en),
							aUS = new Uint32Array(en);
						b9.pu.aU1 = aUP, b9.pu.aU2 = aUQ, b9.pu.aU3 = aUR, b9.pu.aU4 = aUS;
						for (var aB = 0; aB < en; aB++) {
							var id = bH.pi(4);
							aUP[aB] = id, aUQ[aB] = bH.pi(9), 0 === id ? aUR[aB] = bH.pi(22) : 1 === id ? (aUR[aB] = bH.pi(10), aUS[aB] = bH.pi(10)) : 2 === id ? (aUR[aB] = bH.pi(10), aUS[aB] = bH.pi(9)) : 3 === id ? (aUR[aB] = bH.pi(10),
								aUS[aB] = bH.pi(27)) : 4 === id ? (aUR[aB] = bH.pi(10), aUS[aB] = bH.pi(16)) : 5 === id || 6 === id ? aUR[aB] = bH.pi(10) : 7 === id ? aUR[aB] = bH.pi(1) : 10 === id && (aUR[aB] = bH.pi(20), aUS[aB] =
								bH.pi(22))
						}
					}(aUL),
					function(en, wR) {
						var aU5 = new Uint8Array(en),
							aU6 = new Array(en);
						aU6.fill(0), b9.pu.aU5 = aU5, b9.pu.aU6 = aU6;
						for (var aB = 0; aB < en; aB++) aU5[aB] = bH.pi(1), aU6[aB] = bH.pi(wR)
					}(aUM, wR), 1
			}()) || (bH.e8 < 8 * bH.size - 13 || bH.e8 > 8 * bH.size ? (aUC("Out Of Bounds Error: " + bH.e8 + " " + 8 * bH.size), 1) : (b9.pu.a4p = qH, 2 === aD.data.mapType && (aUC("Load base64 image...", 2), 1))))
	}, this.aI5 = function(aHf, aUD) {
		var a2w = document.createElement("canvas"),
			hp = a2w.getContext("2d");
		if (a2w.width = aHf.width, a2w.height = aHf.height, hp.drawImage(aHf, 0, 0), aD.data.canvas = a2w, aU8 || aUD) return aD.a08 ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aR3()
	}
}

function aTy() {
	this.za = function() {
		var wR = function() {
				for (var aU6 = b9.pu.aU6, en = aU6.length, max = 0, aB = 0; aB < en; aB++) max = Math.max(max, aU6[aB]);
				return wY(Math.max(max, 1))
			}(),
			i = (qS = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e8 += 43, i.a8(2, qS.mapType), i.a8(8, qS.mapProceduralIndex), i.a8(8, qS.mapRealisticIndex), i.a8(14, qS.mapSeed), i.aUZ(qS.mapName, 5), 2 === qS.mapType && i.aUa(qS.canvas),
				i.a8(1, qS.passableWater), i.a8(1, qS.passableMountains), i.a8(10, qS.playerCount), i.a8(10, qS.humanCount), i.a8(9, qS.selectedPlayer), i.a8(1, qS.gameMode), i.a8(2, qS.playerMode), i.a8(2, qS.battleRoyaleMode), i.a8(4, qS
					.numberTeams), i.a8(1, qS.isZombieMode), i.a8(1, qS.isContest), i.a8(1, qS.isReplay), i.dk(qS.elo, 2, 14), i.a8(1, qS.colorsType), i.a8(1, qS.colorsPersonalized), i.dk(qS.colorsData, 10, 18), i.a8(1, qS.selectableColor), i.dk(
					qS.teamPlayerCount, 4, 10), i.a8(1, qS.neutralBots), i.a8(2, qS.botDifficultyType), i.a8(4, qS.botDifficultyValue), i.dk(qS.botDifficultyTeam, 4, 4), i.dk(qS.botDifficultyData, 10, 4), i.a8(2, qS.spawningType), i.a8(14, qS
					.spawningSeed), i.dk(qS.spawningData, 11, 12), i.a8(1, qS.selectableSpawn), i.a8(2, qS.playerNamesType), i.aUb(qS.playerNamesData, 10, 5), i.a8(1, qS.selectableName), i.a8(2, qS.aIncomeType), i.a8(8, qS.aIncomeValue), i.dk(qS
					.aIncomeData, 10, 8), i.a8(2, qS.tIncomeType), i.a8(8, qS.tIncomeValue), i.dk(qS.tIncomeData, 10, 8), i.a8(2, qS.iIncomeType), i.a8(8, qS.iIncomeValue), i.dk(qS.iIncomeData, 10, 8), i.a8(2, qS.sResourcesType), i.a8(11, qS
					.sResourcesValue), i.dk(qS.sResourcesData, 10, 11), ! function(wR) {
					var i = bE,
						aU1 = b9.pu.aU1,
						fW = b9.pu.aU2,
						fY = b9.pu.aU3,
						fa = b9.pu.aU4,
						en = aU1.length;
					i.a8(5, wR), i.a8(30, en), i.a8(30, b9.pu.aU6.length);
					for (var aB = 0; aB < en; aB++) {
						var f8 = aU1[aB];
						i.a8(4, f8), i.a8(9, fW[aB]), 0 === f8 ? i.a8(22, fY[aB]) : 1 === f8 ? (i.a8(10, fY[aB]), i.a8(10, fa[aB])) : 2 === f8 ? (i.a8(10, fY[aB]), i.a8(9, fa[aB])) : 3 === f8 ? (i.a8(10, fY[aB]), i.a8(27, fa[aB])) : 4 === f8 ? (i
							.a8(10, fY[aB]), i.a8(16, fa[aB])) : 5 === f8 || 6 === f8 ? i.a8(10, fY[aB]) : 7 === f8 ? i.a8(1, fY[aB]) : 10 === f8 && (i.a8(20, fY[aB]), i.a8(22, fa[aB]))
					}
				}(wR), ! function(wR) {
					for (var i = bE, aU5 = b9.pu.aU5, aU6 = b9.pu.aU6, en = aU5.length, aB = 0; aB < en; aB++) i.a8(1, aU5[aB]), i.a8(wR, aU6[aB])
				}(wR), bE.e8),
			qS = bL.du(i - 1, 6) + 1,
			wR = (bD.aSl(6 * qS) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e8 = 24, i.a8(31, i.g.length), i.e8 = 12, i.a8(12, function() {
					for (var g = bE.g, en = g.length, aTF = l.rVersion, aB = 3; aB < en; aB++) aTF = aTF + g[aB] & 4095;
					return aTF
				}())
			}(), bH.dd(bE.g), bF.ss.st(bF.ss.su(qS)));
		return bH.uC(), bE.dd(), wR
	}
}

function cp() {
	var f8, bu = !1,
		aUd = !1,
		aUe = -1e4,
		aUf = -1,
		aUg = 0;

	function resize(aUk) {
		f8 = 0, ab.tH() && (aUi(aUk) || bu) && (bu = !1, bc.resize(), bW.aBk.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a08 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a93()) : (aa.aG2(), aa.aG3()), bf.dl = !0)
	}

	function aUh(fF) {
		return fF && 128 < fF ? Math.floor(fF) : 128
	}

	function aUi(aUk) {
		var i, j, aUm, sw, a8R;
		if (!(0 < h.sX)) return sw = aUh(document.documentElement.clientWidth), a8R = aUh(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = sw, j = a8R, aUm = 0 !== a0.id || i < j ?
			700 : 1200, aUm = Math.min(aUm / ((i + j) / 2), 1), aUm = 0 === bj.eK.data[1].value ? 2 * aUm / 3 : Math.min(aUm + (bj.eK.data[1].value - 1) * (1 - aUm) / 2, 1), h.k = (window.devicePixelRatio || 1) * aUm, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aUk && !aUd ? (aUd = !0, t.removeChild(document.body, a1b)) : aUd && (aUd = !1, document.body.appendChild(a1b)), i = Math.floor(.5 + sw * h.k), j = Math.floor(.5 + a8R * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aBM(i, j), h.max = a6M(i, j), h.hx = bL.du(i + j, 2), h.uf = i / j, a1b.width = i, a1b.height = j, a1b.style.width = sw + "px", a1b.style.height = a8R + "px", aUf = bf.eM + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hx = 0, this.uf = 1, this.k = 1, this.sX = 0, this.de = function() {
		this.i = aUh(document.documentElement.clientWidth) + 2, this.j = aUh(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		f8 = 1, a1b = document.getElementById("canvasA"), (uj = a1b.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aUi(0)
	}, this.j3 = function() {
		50 <= ++f8 && resize(0), -1 === aUf || bf.eM < aUf || (aUf = -1, 2e3 * ++aUg >= bf.eM + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(jP) {
		bu = !0, resize(jP)
	}, this.a2G = function() {
		aUe + 1e3 > bf.eM || (aUe = bf.eM, resize(0))
	}
}

function dH() {
	this.aSu = new aUo, this.a0x = new aUp, this.aT6 = new aUq
}

function aUq() {
	this.pi = function() {
		return 69
	}, this.za = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aUp() {
	this.a0y = function() {
		for (var gL, en = al.kg, zw = al.kl, a0h = ag.a0h, a8G = this.aHO(), aB = 0; aB < en; aB++) gL = zw[aB], bA.g9.jX(gL) || (a0h[gL] = a8G);
		var pz = ag.pz,
			jC = ag.jC,
			jD = ag.jD,
			a0f = ag.a0f,
			en = aD.kA;
		for (aB = 0; aB < en; aB++)(0 === a0f[aB] || jD[aB] < 1 || 2 * pz[aB] > 3 * (jC[aB] + jD[aB])) && (a0h[aB] = 0);
		var a0v = 0;
		for (aB = 0; aB < en; aB++) a0v += 0 < a0h[aB];
		return a0v
	}, this.aHO = function() {
		return Math.min(65535, bf.k7())
	}
}

function aUo() {
	function aUu(g, fF, hf) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fF >> (aB + hf) % 30 & 1)) % 256
	}
	this.j3 = function(aUr, aUs) {
		var g = new Uint8Array(256);
		return function(g, aUr, aUs) {
				var aB, aUw = 3 + (4 + aUr) % 32768,
					aUx = 12 + aUs % 32768,
					aUy = 17 + ((aUr & aUs) + (aUr | aUs) + aUr) % 32768;
				for (aB = 0; aB < 256; aB++) aUw = 1 + aUw * aUx % aUy, g[aB] = aUw % 256
			}(g, aUr, aUs), aUu(g, aUr, 2), aUu(g, aUs, 7),
			function(g) {
				var aB, fF, e8 = 0;
				for (aB = 0; aB < 3e4; aB++) fF = g[e8], g[e8] = (fF + aB + g[(e8 + aB) % 256]) % 256, e8 = (fF + aB + e8 + (fF & e8)) % 256
			}(g),
			function(g) {
				var aB, a8R = 1,
					te = 1;
				for (aB = 0; aB < 256; aB += 2) a8R = (1 + a8R) * (g[aB] + 1) % 1073741824, te = (1 + te) * (g[aB + 1] + 1) % 1073741824;
				return [a8R, te]
			}(g)
	}
}

function cm() {
	var aUz, aV0, i1, aV1;
	this.dd = function() {
		var aB, eu, ew, aT7, aV2, i, j, yI, hm, wi, fF, gL, f3, f6, aV5;
		if (function() {
				if (i1 = !0, aV1 = "rgb(" + bS.wg[0] + "," + bS.wg[1] + "," + bS.wg[2] + ")", bS.aKa(bS.eT)) return 1;
				return i1 = !1, 0
			}()) aV0 = null;
		else {
			for (aUz = bL.du(96, 4), aV2 = 1 === bS.eT ? (aT7 = 0, 160) : (aT7 = 128, 32), aV1 = "rgb(" + aT7 + "," + aT7 + "," + aT7 + ")", aV0 = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aV0[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.ey : aUz, j = aB % 2 == 0 ? aUz : bS.ez + 2 * aUz, aV0[aB].width = i, aV0[aB].height = j, wi = (hm = (yI = aV0[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (ew = aUz - 1; 0 <= ew; ew--)
						for (fF = aV2 + Math.floor((ew + 1) * (aT7 - aV2) / (aUz + 1)), eu = i - 1; 0 <= eu; eu--) wi[gL = 4 * ((0 === aB ? aUz - ew - 1 : ew) * i + eu)] = fF, wi[gL + 1] = fF, wi[gL + 2] = fF, wi[gL + 3] = 255;
				else {
					for (eu = aUz - 1; 0 <= eu; eu--)
						for (fF = aV2 + Math.floor((eu + 1) * (aT7 - aV2) / (aUz + 1)), ew = j - 1 - aUz; aUz <= ew; ew--) wi[gL = 4 * (ew * i + (3 === aB ? aUz - eu - 1 : eu))] = fF, wi[gL + 1] = fF, wi[gL + 2] = fF, wi[gL + 3] = 255;
					for (f6 = 1; 0 <= f6; f6--)
						for (eu = aUz - 1; 0 <= eu; eu--)
							for (ew = aUz - 1; 0 <= ew; ew--) f3 = (Math.pow(eu * eu + ew * ew, .5) + 1) / (aUz + 1), fF = aV2 + Math.floor((1 < f3 ? 1 : f3) * (aT7 - aV2)), wi[gL = 4 * ((0 === f6 ? aUz - ew - 1 : ew + f6 * (j - aUz)) * i + (
								1 === aB ? eu : aUz - eu - 1))] = fF, wi[gL + 1] = fF, wi[gL + 2] = fF, wi[gL + 3] = 255
				}
				yI.putImageData(hm, 0, 0)
			}
			aV5 = aV2, bS.wb.fillStyle = "rgb(" + aV5 + "," + aV5 + "," + aV5 + ")", bS.wb.fillRect(0, 0, bS.ey, 1), bS.wb.fillRect(0, bS.ez - 1, bS.ey, 1), bS.wb.fillRect(0, 0, 1, bS.ez), bS.wb.fillRect(bS.ey - 1, 0, 1, bS.ez)
		}
	}, this.yC = function() {
		var f6 = i1 ? 0 : -aUz;
		aMK(f6, f6, bS.ey - 2 * f6, bS.ez - 2 * f6, ba.aV6, ba.aV7, ba.aV8, ba.aV9) || (uj.fillStyle = aV1, uj.fillRect(0, 0, h.i, h.j))
	}, this.ui = function() {
		i1 || (aMJ(0, -aUz, bS.ey, aUz, ba.aV6, ba.aV7, ba.aV8, ba.aV9) && uj.drawImage(aV0[0], ba.aVA, ba.aVB - aUz), aMJ(bS.ey, -aUz, aUz, bS.ez + 2 * aUz, ba.aV6, ba.aV7, ba.aV8, ba.aV9) && uj.drawImage(aV0[1], ba.aVA + bS.ey, ba.aVB - aUz),
			aMJ(0, bS.ez, bS.ey, aUz, ba.aV6, ba.aV7, ba.aV8, ba.aV9) && uj.drawImage(aV0[2], ba.aVA, ba.aVB + bS.ez), aMJ(-aUz, -aUz, aUz, bS.ez + 2 * aUz, ba.aV6, ba.aV7, ba.aV8, ba.aV9) && uj.drawImage(aV0[3], ba.aVA - aUz, ba.aVB - aUz))
	}
}

function d6() {
	this.aHM = new aVC, this.yF = new aVD, this.y = new aVE, this.iX = new aVF, this.aV5 = new aVG, this.m5 = new aVH, this.jy = new aVI, this.kx = new aVJ, this.aVK = new aVL, this.aVM = new aVN, this.mG = new aVO, this.hN = new aVP, this.lW =
		new aVQ, this.kz = new aVR, this.hQ = new aVS, this.m9 = new aVT, this.q7 = new aVU, this.dd = function() {
			this.lW.dd(), this.yF.dd(), this.y.dd(), this.iX.dd(), this.aV5.dd(), this.aVM.dd(), this.m9.dd()
		}, this.ui = function() {
			this.aVM.ui(), this.yF.ui()
		}
}

function aVI() {
	this.j3 = function(player) {
		return !!bN.mG.mH(player) && !(bN.y.kE[player] >= Math.max(3 * ao.performance.lO, aE.kO[aE.hW[player]]) || !bA.g9.mI(player, aE.kM[aE.hW[player]], 32, 0)) && (aW.aB9() ? function(player) {
			var aVX = bN.kz.aBC(),
				en = aVX.length;
			if (0 === en) return !1;
			aVX = aVX[ay.jR(en)], en = bN.y.m3[aVX];
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
			}(player, aVX) && !!bN.hQ.q6(player, en, 1) && (bA.g9.mK(player), bN.y.mL(player), !0)
		}(player) : !!(ao.iz.j3(player) || ao.io.j3(player) || ao.iq.j3(player)) && (function(player) {
			bO.fP[1] = 4, bA.g9.mK(player), bN.y.mL(player)
		}(player), !0))
	}
}

function aVT() {
	var aVa = 0,
		aVb = null;
	this.dd = function() {
		null === aVb && (aVb = new Uint16Array(2 * bN.y.kO)), aVa = 0
	}, this.jG = function(aVc, m9) {
		var aVd = aVb;
		aVd[aVa++] = aVc, aVd[aVa++] = m9
	}, this.mA = function(player, m8) {
		for (var aVd = aVb, en = aVa, aB = 0; aB < en; aB += 2)
			if (aVd[aB] === m8 && bN.kz.aVe(aVd[aB + 1]) && player === bN.y.m4[bO.fP[2]] >> 3) return !0;
		return !1
	}, this.aVf = function(aVg) {
		var m5 = bN.y.m1[aVg];
		if (!(m5 < 64)) {
			var m8 = bN.y.m3[aVg],
				aVd = aVb,
				en = aVa;
			for (let aB = en - 2; 0 <= aB; aB -= 2)
				if (aVd[aB] === m8) {
					{
						aVl = void 0;
						var aVl = aVd[aB + 1];
						bN.kz.aVe(aVl) && bN.m9.aVt(bO.fP[2])
					}
					aVd[aB] = aVd[en - 2], aVd[aB + 1] = aVd[en - 1], en -= 2
				} aVa = en
		}
	}, this.aVi = function(aVj, aVk) {
		for (var aVl = bN.y.m3[aVj], m8 = -1, aVd = aVb, en = aVa, aB = 1; aB < en; aB += 2)
			if (aVd[aB] === aVl) {
				m8 = aVd[aB - 1];
				break
			} if (-1 === m8) return !1;
		if (!bN.kz.aVe(m8)) return !1;
		var aVg = bO.fP[2],
			lV = bN.y.m2[aVg];
		if (aVk === lV[lV.length - 1]) bN.y.m2[aVj] = bN.lW.aVm(bN.y.m2[aVj], bN.lW.le(lV));
		else {
			var aVn = bN.kz.aVo(lV, aVk);
			if (-1 === aVn) return !1;
			var aVp = bN.y.mE[aVg];
			aVn === aVp ? (aVg = bM.iV(bN.y.mF[aVg]), bN.y.m2[aVj] = bN.lW.aVr(bN.y.m2[aVj], lV, aVn, aVk, bM.iD(lV[aVn], aVk) > bM.iD(lV[aVn], aVg))) : bN.y.m2[aVj] = bN.lW.aVr(bN.y.m2[aVj], lV, aVn, aVk, aVp < aVn)
		}
		return !0
	}, this.aVt = function(aVu) {
		var lV, l5 = bN.y,
			m5 = l5.m1[aVu];
		return m5 % 64 != 5 && (lV = l5.m2[aVu], l5.aVv[aVu] = 65535 - l5.aVv[aVu], l5.mE[aVu] = lV.length - l5.mE[aVu] - 2, l5.m2[aVu] = bN.lW.le(lV), l5.m1[aVu] = m5 - m5 % 64 + 5, !0)
	}
}

function aVO() {
	this.mH = function(player) {
		return !!aD.data.passableWater && bN.y.m0 !== bN.y.kO && bN.y.kE[player] !== bN.y.aVw && 0 !== ag.gU[player].length
	}, this.q2 = function(aTf) {
		var m5 = bO.fP[1];
		return !(4 <= m5 || !bN.kz.aVx(bM.ed(aTf))) && ac.ei(bM.ed(bM.iZ(aTf, m5)))
	}
}

function aVC() {
	this.aHN = function(player) {
		for (var a7g = bN.y.a7g, t9 = player << 3, aB = t9 + bN.y.kE[player] - 1; t9 <= aB; aB--) this.aVy(a7g[aB])
	}, this.aVy = function(aVz) {
		var y = bN.y,
			aW0 = y.m0 - 1,
			aW1 = y.m4[aVz],
			aW2 = y.aW3[aVz],
			aW4 = y.mF[aVz];
		y.m0 = aW0, y.m4[aVz] = y.m4[aW0], y.mF[aVz] = y.mF[aW0], y.aVv[aVz] = y.aVv[aW0], y.a6e[aVz] = y.a6e[aW0], y.aW3[aVz] = y.aW3[aW0], y.m3[aVz] = y.m3[aW0], y.m1[aVz] = y.m1[aW0], y.aW5[aVz] = y.aW5[aW0], y.m2[aVz] = y.m2[aW0], y.mE[aVz] =
			y.mE[aW0], y.a7g[y.m4[aVz]] = aVz,
			function(aTe) {
				var player = aTe >> 3,
					y = bN.y,
					en = y.kE[player] - 1,
					aW8 = (player << 3) + en;
				y.kE[player] = en, aW8 !== aTe && (y.a7g[aTe] = y.a7g[aW8], y.m4[y.a7g[aTe]] = aTe)
			}(aW1), bN.iX.iX[bM.iW(y.mF[aVz])][y.aW3[aVz]] = aVz, aW0 = bM.iW(aW4), aW1 = aW2, aW0 = bN.iX.iX[aW0], y = aW0.pop(), aW1 !== aW0.length && (aW0[aW1] = y, bN.y.aW3[y] = aW1)
	}
}

function aVD() {
	var aWA, aWB = 8,
		aWC = null;

	function aWH(wi, eZ, e8) {
		eZ *= 4;
		wi[eZ] = 255, wi[1 + eZ] = 255, wi[2 + eZ] = e8, wi[3 + eZ] = 255
	}

	function aWJ(hp, aV1) {
		var eu, ew, i7, eZ, aWL, aWM, hj = aWB,
			hm = bA.qa.getImageData(hp, hj, hj),
			wi = hm.data,
			l5 = (hj >> 1) - .5,
			aWO = bA.qi.a2U(aV1, .5);
		for (bA.qi.a2W(aV1, aWO, 300) || bA.qi.a2Y(aV1, 100), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) aWM = (hj - 1.5) * (hj - 1.5) / 4, wi[eZ = 4 * (ew * hj + eu)] = (aWL = (i7 = (i7 = eu - l5) * i7 + (i7 = ew - l5) * i7) <= (hj - 4.5) * (hj - 4.5) / 4 ? aWO : aV1)[0], wi[1 + eZ] = aWL[1], wi[2 + eZ] = aWL[2],
				wi[3 + eZ] = aWM < i7 ? 0 : 255;
		hp.putImageData(hm, 0, 0)
	}
	this.dd = function() {
		var e8, hj, a2w, hp, hm, wi;
		(aWA = aWA || new Array(aD.ek)).fill(null), e8 = 255, hj = aWB + 4, a2w = bA.qa.wX(hj, hj), hp = bA.qa.getContext(a2w, !0), hm = bA.qa.getImageData(hp, hj, hj), aWH(wi = hm.data, hj + 1, e8), aWH(wi, hj + 2, e8), aWH(wi, 2 * hj + 1, e8),
			aWH(wi, 2 * hj - 3, e8), aWH(wi, 2 * hj - 2, e8), aWH(wi, 3 * hj - 2, e8), aWH(wi, hj * (hj - 3) + 1, e8), aWH(wi, hj * (hj - 2) + 1, e8), aWH(wi, hj * (hj - 2) + 2, e8), aWH(wi, hj * (hj - 2) - 2, e8), aWH(wi, hj * (hj - 1) - 3, e8),
			aWH(wi, hj * (hj - 1) - 2, e8), hp.putImageData(hm, 0, 0), aWC = a2w,
			function() {
				if (aD.hh)
					for (var a2w = new Array(bg.kX.length), en = aD.ek, aWF = aWA, aAX = bg.aAX, aB = 0; aB < en; aB++) {
						var a5O = aAX[aB];
						a2w[a5O] || (a2w[a5O] = function(a5O) {
							var a2w = bA.qa.wX(aWB, aWB),
								hp = bA.qa.getContext(a2w, !0),
								g = bO.fM;
							return g.set(bg.aWK[a5O]), aWJ(hp, g), a2w
						}(a5O)), aWF[aB] = a2w[a5O]
					}
			}()
	}, this.ui = function() {
		var aB, player, aWP, aMS, hW, i6, aWR, aWT, aWU, mF = bN.y.mF,
			m4 = bN.y.m4,
			a6e = bN.y.a6e,
			aW5 = bN.y.aW5,
			aWV = aWA,
			aWW = aD.eX,
			en = bN.y.m0,
			aWX = h.i,
			aWY = h.j,
			aWZ = bS.ey << 4,
			ec = hy,
			eR = ec / aWB,
			n9 = iO / ec,
			nA = iP / ec,
			i7 = (aWX + iO) / ec - n9,
			iA = (aWY + iP) / ec - nA,
			hp = uj;
		for (hp.imageSmoothingEnabled = ec < 9, bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1), aB = 0; aB < en; aB++) player = m4[aB] >> 3, hW = a6e[aB], aWP = .9 + .1 * Math.log10(hW), aMS = (i6 = mF[aB]) % aWZ / 16 - aWP, i6 = aWY * (Math
			.floor(i6 / aWZ) / 16 - aWP - nA) / iA, aWR = -2 * (aWU = ec * aWP) * (1 + (aWT = +(player === aWW)) / 8), aWT = aWT * aWU / 4, (aWU = aWX * (aMS - n9) / i7) < aWR || i6 < aWR || aWX + aWT < aWU || aWY + aWT < i6 || (aMS = 2 *
			aWP * eR, aWR = aWP * ec, null === (aWT = aWV[player]) && (aWV[player] = aWT = function(player) {
				var a2w = bA.qa.wX(aWB, aWB);
				return aWJ(bA.qa.getContext(a2w, !0), ac.a7H(player)), a2w
			}(player)), player === aWW && (hp.setTransform(aMS, 0, 0, aMS, aWU - 2 * aMS, i6 - 2 * aMS), hp.drawImage(aWC, 0, 0)), hp.setTransform(aMS, 0, 0, aMS, aWU, i6), hp.drawImage(aWT, 0, 0), (aWP = Math.floor(function(hW) {
				if (hW < 1e3) return .42;
				if (hW < 1e4) return .34;
				if (hW < 1e6) return .26;
				if (hW < 1e8) return .19;
				return .15
			}(hW) * aWR)) < 6) || (hp.setTransform(1, 0, 0, 1, 0, 0), hp.fillStyle = aW5[aB] ? bB.oH : bB.nj, hp.font = bA.qa.sP(1, aWP), hp.fillText(bA.rZ.zP(hW), aWU + aWR, i6 + aWR + .1 * aWP));
		hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aVN() {
	var aWc;
	this.dd = function() {
		if (aD.hh) {
			var hd = 1 - aD.xL;
			aWc = new Array(bg.kX.length);
			for (var aB = aD.xK - 1; 0 <= aB; aB--) {
				var a5O = bg.kX[aB + hd];
				aWc[a5O] = bP.y.aWe(20, bg.aWf[a5O])
			}
			9 === aD.kS && (aWc[1] = bP.y.aWe(20, bg.aWf[1]))
		} else aWc = [bP.y.aWe(20, bg.aWf[7])]
	}, this.ui = function() {
		var nT = hy;
		if (!(5 <= nT)) {
			var aWX = h.i,
				aWY = h.j,
				n9 = iO / nT,
				nA = iP / nT,
				nM = (aWX + iO) / nT,
				nN = (aWY + iP) / nT,
				gM = -20 * nT,
				aWh = .5 * gM,
				aWZ = bS.ey << 4,
				en = bN.y.m0,
				mF = bN.y.mF,
				m4 = bN.y.m4,
				aAX = bg.aAX,
				a2w = aWc,
				hp = uj;
			3 < nT && (hp.globalAlpha = .5 * (5 - nT));
			for (var aB = 0; aB < en; aB++) {
				var i6 = mF[aB],
					eu = aWX * (i6 % aWZ / 16 - n9) / (nM - n9) + aWh,
					i6 = aWY * (Math.floor(i6 / aWZ) / 16 - nA) / (nN - nA) + aWh;
				aWX < eu || aWY < i6 || eu < gM || i6 < gM || (hp.setTransform(nT, 0, 0, nT, eu, i6), hp.drawImage(a2w[aAX[m4[aB] >> 3]], 0, 0))
			}
			hp.globalAlpha = 1, hp.setTransform(nT, 0, 0, nT, 0, 0)
		}
	}
}

function aVR() {
	this.aWk = function(player, id) {
		for (var aWl = ag.gU[player], en = aWl.length, aB = 0; aB < en; aB++)
			if (bM.hz(aWl[aB], id)) return !0;
		return !1
	}, this.aWm = function(player, eZ) {
		for (var iF, aWn, eR, aWl = ag.gU[player], en = aWl.length, i = bS.ey, aWp = bM.ev(eZ), aWq = bM.ex(eZ), et = -1, min = bS.ey * bS.ey + bS.ez * bS.ez, id = ac.eV(bM.ed(eZ)), aB = 0; aB < en; aB++)(aWn = (aWn = aWp - (iF = (eR = aWl[
			aB]) >> 2) % i) * aWn + (aWn = aWq - ~~((.5 + iF) / i)) * aWn) < min && bM.hz(eR, id) && (min = aWn, et = iF);
		return et
	}, this.l0 = function(iE, iF) {
		for (var id = ac.eV(bM.ed(iF)), i0 = bM.hs, eR = bM.ed(iE), aWr = -1, aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			ac.i1(ec) && ac.eV(ec) === id && (-1 === aWr || bM.iG(bM.eb(ec), iF) < bM.iG(aWr, iF)) && (aWr = bM.eb(ec))
		}
		return aWr
	}, this.lZ = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec) && ac.yA(player, ec)) return !0
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
	}, this.aVx = function(eR) {
		if (ac.i1(eR))
			for (var i0 = bM.hs, aB = 0; aB < 4; aB++)
				if (ac.ei(eR + i0[aB])) return !0;
		return !1
	}, this.n8 = function(player, id) {
		for (var t9 = player << 3, tA = t9 + bN.y.kE[player], m3 = bN.y.m3, a7g = bN.y.a7g, aB = t9; aB < tA; aB++) {
			var a7h = a7g[aB];
			if (m3[a7h] === id) return a7h
		}
		return -1
	}, this.nD = function(player) {
		return 0 === bN.y.kE[player] ? -1 : bN.y.a7g[player << 3]
	}, this.a5g = function(lP, lQ) {
		var en = bN.y.m0;
		if (en < 1) return -1;
		for (var mF = bN.y.mF, aWs = 80, aOm = -1, aB = 0; aB < en; aB++) {
			var f3 = bM.i3(lP, lQ, mF[aB]);
			f3 < aWs && (aWs = f3, aOm = aB)
		}
		return function(aB, lP, lQ) {
			if (aB < 0) return;
			var aWz = bN.y.mF[aB],
				aX0 = bM.i9(aWz),
				aWz = bM.iC(aWz),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a6e[aB]));
			return aB = Math.max(aB, bM.iQ(bA.qa.tE(.02, 1.7))), bL.aMR(bM.i8(lP), bM.iB(lQ), aX0, aWz, aB)
		}(aOm, lP, lQ) ? aOm : -1
	}, this.aVe = function(n6) {
		for (var en = bN.y.m0, m3 = bN.y.m3, aB = 0; aB < en; aB++)
			if (m3[aB] === n6) return bO.fP[2] = aB, !0;
		return !1
	}, this.aHJ = function(player) {
		for (var t9 = player << 3, tA = t9 + bN.y.kE[player], a7g = bN.y.a7g, a6e = bN.y.a6e, hW = 0, aB = t9; aB < tA; aB++) hW += a6e[a7g[aB]];
		return hW
	}, this.aWu = function(player, aVu) {
		aVu = bN.y.m2[aVu];
		return this.lZ(player, aVu[aVu.length - 1])
	}, this.aWv = function(iE, iF, f3, aWw) {
		var iI = bM.ev(iE),
			iE = bM.ex(iE),
			iK = bM.ev(iF),
			iF = bM.ex(iF),
			iK = (f3 = Math.max(f3, 1), iK - iI),
			iF = iF - iE,
			i7 = bL.du(Math.abs(iK) * aWw, f3),
			aWw = bL.du(Math.abs(iF) * aWw, f3);
		return bM.fB(iI + Math.sign(iK) * i7, iE + Math.sign(iF) * aWw)
	}, this.aVo = function(lV, eZ) {
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
	}, this.aBC = function() {
		for (var aX2 = ll[0], m4 = bN.y.m4, m0 = bN.y.m0, g = [], aB = 0; aB < m0; aB++) bA.g9.ko(aX2, m4[aB] >> 3) && g.push(aB);
		return g
	}, this.lX = function(player, lV) {
		for (var t9 = player << 3, tA = t9 + bN.y.kE[player], a7g = bN.y.a7g, m2 = bN.y.m2, hF = lV[0], kn = lV[lV.length - 1], aB = t9; aB < tA; aB++) {
			var gL = m2[a7g[aB]];
			if (gL[0] === hF && gL[gL.length - 1] === kn) return !0
		}
		return !1
	}
}

function aVS() {
	function aX5(player, aVu) {
		aVu = bM.iV(bN.y.mF[aVu]), aVu = ac.eV(bM.ed(aVu));
		return !!bN.kz.aWk(player, aVu)
	}

	function aX3(player) {
		return bN.mG.mH(player) && !bN.lW.lc()
	}
	this.hR = function(player, eZ) {
		return !!aX3(player) && -1 !== (eZ = function(player, eZ) {
			for (var en = bN.y.m0, mF = bN.y.mF, m4 = bN.y.m4, aWs = bM.hu(), aOm = -1, aB = 0; aB < en; aB++) {
				var f3 = bM.iD(eZ, bM.iV(mF[aB]));
				f3 < aWs && bA.g9.ko(player, m4[aB] >> 3) && (aWs = f3, aOm = aB)
			}
			return aOm
		}(player, eZ)) && !!aX5(player, eZ) && (bO.fP[3] = bN.y.m3[eZ], !0)
	}, this.pD = function(player, n6) {
		return !!aX3(player) && !!bN.kz.aVe(n6) && !!aX5(player, bO.fP[2])
	}, this.q6 = function(player, n6, aX6) {
		return !! function(player, n6, aX6) {
			if (aX3(player) && bN.kz.aVe(n6)) {
				n6 = bO.fP[2];
				if (bA.g9.ko(player, bN.y.m4[n6] >> 3)) {
					if (function(player, aVu) {
							return bN.kz.aWu(player, aVu) && (bO.g[0] = bN.lW.le(bN.y.m2[aVu]), bO.fP[1] = 6, !0)
						}(player, n6)) return 1;
					var aVZ = bM.iV(bN.y.mF[n6]),
						aXA = bN.kz.aWm(player, aVZ);
					if (-1 !== aXA) {
						aXA = bM.iD(aXA, aVZ);
						if (!(aX6 && 120 < aXA)) {
							aX6 = function(aVu, aXB, aVZ) {
								var lV = bN.y.m2[aVu],
									aVu = bN.y.mE[aVu],
									aXD = bM.iD(aVZ, lV[aVu + 1]);
								if (aXB <= aXD) return bN.kz.aWv(aVZ, lV[aVu + 1], aXD, aXB);
								for (var f3 = aXB - aXD, en = lV.length - 1, aB = aVu + 1; aB < en; aB++) {
									var aXE = bM.iD(lV[aB], lV[aB + 1]);
									if (f3 <= aXE) return bN.kz.aWv(lV[aB], lV[aB + 1], aXE, f3);
									f3 -= aXE
								}
								return lV[en]
							}(n6, aXA, aVZ);
							if (bN.kx.q3(player, aX6, 1)) return bO.fP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n6, aX6) && (player = bO.fP[2], bN.y.m1[player] = 64 + bN.y.m1[player] % 64, bN.m9.jG(n6, bN.y.mJ), !0)
	}
}

function aVH() {
	function aXJ(player, hW, aXH, aVZ) {
		var jJ;
		if (ac.ee(aXH)) jJ = aD.ek;
		else {
			if ((jJ = ac.ef(aXH)) === player) return void bd.gD(player, hW - bA.g9.gC(player, hW), 12);
			if (!bs.eg(player, jJ)) return void b8.kC.pS(player, jJ, hW)
		}
		ad.jV(player, jJ) || ad.jo(player) ? (ag.gF[player].push(aVZ << 2), ad.jG(player, hW, jJ), aF.jH(player, !0)) : bd.gD(player, hW, 12)
	}
	this.j3 = function() {
		for (var m1 = bN.y.m1, mF = bN.y.mF, aVv = bN.y.aVv, aB = bN.y.m0 - 1; 0 <= aB; aB--) 65535 === aVv[aB] && function(aB, aVZ, he) {
			if (6 === he) {
				if (bN.m9.aVi(aB, aVZ)) return bN.y.mE[aB]++, bN.y.aVv[aB] = 0, 0
			} else {
				var player = bN.y.m4[aB] >> 3,
					aB = bN.y.a6e[aB];
				bd.aXI(player), he < 4 ? aXJ(player, aB, aVZ + bM.hr[he] << 2, aVZ) : 4 === he ? function(player, hW, aVZ) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVZ);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aXJ(player, hW, er, aVZ);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && !ac.yA(player, er)) return aXJ(player, hW, er, aVZ);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aXJ(player, hW, er, aVZ)
				}(player, aB, aVZ) : 5 === he && function(player, hW, aVZ) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVZ);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && ac.yA(player, er)) return aXJ(player, hW, er, aVZ);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aXJ(player, hW, er, aVZ);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aXJ(player, hW, er, aVZ)
				}(player, aB, aVZ)
			}
			return 1
		}(aB, bM.iV(mF[aB]), m1[aB] % 64) && (bN.m9.aVf(aB), bN.aHM.aVy(aB))
	}, this.aXG = function(player, eZ, he, n6) {
		if (!(4 <= he)) {
			var aWW = aD.eX;
			if (bA.g9.gz(aWW) && bs.eg(player, aWW) && player !== aWW && 0 !== ag.gU[aWW].length) {
				var aXH = eZ + bM.hr[he] << 2;
				if (ac.ee(aXH) || bs.eg(player, ac.ef(aXH))) {
					for (var f1 = !1, aB = 0; aB < 4; aB++)
						if (aXH = eZ + bM.hr[aB] << 2, ac.ei(aXH) && !ac.ee(aXH) && ac.ef(aXH) === aWW) {
							f1 = !0;
							break
						} f1 && (aN.a6n(719, 0), aN.ya(180, L(453, [ag.yb[player]]), 719, player, bB.oG, bB.ng, -1, !0, void 0, {
						f7: 1,
						n6: n6
					}))
				}
			}
		}
	}
}

function aVE() {
	this.kO = 512, this.aVw = 8, this.m0 = 0, this.mJ = 0, this.m4 = new Uint16Array(this.kO), this.mF = new Uint32Array(this.kO), this.aVv = new Uint16Array(this.kO), this.a6e = new Uint32Array(this.kO), this.aW3 = new Uint16Array(this.kO), this
		.m3 = new Uint16Array(this.kO), this.m1 = new Uint8Array(this.kO), this.aW5 = new Uint8Array(this.kO), this.m2 = new Array(this.kO), this.mE = new Uint16Array(this.kO), this.kE = new Uint8Array(aD.ek), this.a7g = new Uint16Array(this.aVw * aD
			.ek), this.dd = function() {
			this.m0 = 0, this.mJ = 0, this.kE.fill(0), this.m2.fill(null)
		}, this.mL = function(player) {
			var hW = bO.fK[0],
				m5 = bO.fP[1],
				lV = bO.g[0],
				aXM = this.mJ,
				en = this.m0,
				aXN = bM.iU(lV[0]),
				aXO = this.kE[player],
				aXP = (player << 3) + aXO;
			this.m4[en] = aXP, this.mF[en] = aXN, this.aVv[en] = 0, hW < 60 ? (bA.g9.gA(player, 60 - hW), this.a6e[en] = 60) : this.a6e[en] = hW, this.aW3[en] = bN.iX.mL(en, bM.iW(aXN)), this.m3[en] = aXM, this.m1[en] = m5, this.aW5[en] = 0, this.m2[
				en] = lV, this.mE[en] = 0, this.mJ = (aXM + 1) % 65536, this.kE[player] = aXO + 1, this.a7g[aXP] = en, this.m0++, bN.m5.aXG(player, lV[lV.length - 1], m5, aXM)
		}, this.j3 = function() {
			bN.m5.j3();
			for (var gL = aD.eX, dt = bN.kz.aHJ(gL), sC = (! function(sC) {
					for (var aXU, mF = sC.mF, a6e = sC.a6e, aW5 = sC.aW5, aVv = sC.aVv, aW3 = sC.aW3, m2 = sC.m2, mE = sC.mE, sC = sC.m0, aWZ = bS.ey << 4, aB = sC - 1; 0 <= aB; aB--) {
						var aXV = mF[aB],
							lV = m2[aB],
							aXW = mE[aB],
							aXN = bM.iU(lV[aXW]),
							aXX = bM.iU(lV[aXW + 1]),
							aXY = aXN % aWZ,
							aXN = ~~((aXN + .5) / aWZ),
							aXa = aXX % aWZ,
							aXb = ~~((aXX + .5) / aWZ),
							aXc = aXa - aXY,
							aXd = aXb - aXN,
							eq = Math.max(~~Math.sqrt(aXc * aXc + aXd * aXd + .5), 1),
							aXe = a6e[aB],
							aXe = (aXe = aW5[aB] ? 4e4 : 25e4 + Math.min(20 * aXe, 3e5) + Math.min(aXe >> 3, 5e4), aVv[aB] + Math.max(~~((aXe + .5) / eq), 1));
						65535 <= aXe ? aXW + 2 < lV.length ? (mE[aB] = aXW + 1, mF[aB] = aXU = function(aB, aXf, aXY, aXZ, aXW, eq, lV, aWZ) {
							aXf = Math.min(aXf - 65535, 65535);
							var lV = bM.iU(lV[aXW + 2]),
								aXW = lV % aWZ - aXY,
								lV = ~~((lV + .5) / aWZ) - aXZ,
								aXi = Math.max(~~Math.sqrt(aXW * aXW + lV * lV + .5), 1);
							return aXf = Math.min(Math.floor((eq * aXf + .5) / aXi), 65534), bN.y.aVv[aB] = aXf, aXY + bL.du(aXf * aXW, 65535) + aWZ * (aXZ + bL.du(aXf * lV, 65535))
						}(aB, aXe, aXa, aXb, aXW, eq, lV, aWZ)) : (mF[aB] = aXU = aXX, aVv[aB] = 65535) : (aVv[aB] = aXe, mF[aB] = aXU = aXY + bL.du(aXe * aXc, 65535) + aWZ * (aXN + bL.du(aXe * aXd, 65535))), aW3[aB] = bN.iX.aXh(aW3[aB],
							aXV, aXU)
					}
				}(this), ! function(sC) {
					if (bf.k7() % 2 == 1) {
						var aB, hf, l5, f7, f8, aXj, z3, aXk, hF, n9, nA, aXN, aXl, a98, aXn, kn, en = sC.m0,
							mF = sC.mF,
							m4 = sC.m4,
							a6e = sC.a6e,
							aW5 = sC.aW5,
							iX = bN.iX.iX,
							aXp = iX.length,
							aXq = bN.iX.aXq,
							aWZ = bS.ey << 4,
							aXr = aD.hh,
							aTS = bg.el,
							gM = (en - 1) * (bL.du(bf.k7(), 2) % 2);
						for (aB = 0; aB < en; aB++)
							for (hf = Math.abs(aB - gM), aXN = mF[hf], l5 = bM.iW(aXN), hF = m4[hf] >> 3, n9 = aXN % aWZ, nA = ~~((aXN + .5) / aWZ), aXn = a6e[hf], f7 = 0; f7 < 9; f7++)
								if (!((aXj = l5 + aXq[f7]) < 0 || aXp <= aXj))
									for (aXk = iX[aXj], z3 = aXk.length, f8 = 0; f8 < z3; f8++) aXl = aXk[f8], kn = m4[aXl] >> 3, hF == kn || aXr && aTS[hF] === aTS[kn] && aTS[hF] || (kn = mF[aXl], (a98 = n9 - kn % aWZ) * a98 + (a98 = nA - ~~
										((kn + .5) / aWZ)) * a98 < 14400 && (kn = a6e[aXl], a98 = kn <= aXn ? Math.max(1, bL.du(kn + bL.du(aXn - kn, 10), 10)) : Math.max(1, bL.du(aXn, 10)), a6e[aXl] = Math.max(kn - a98, 0), aW5[aXl] =
										4))
					}
				}(this), ! function(sC) {
					if (bf.k7() % 5 == 3)
						for (var a6e = sC.a6e, en = sC.m0, aB = 0; aB < en; aB++) {
							var hW = a6e[aB];
							a6e[aB] = Math.max(hW - Math.max(1, hW >> 7), 0)
						}
				}(this), this), a6e = sC.a6e, aW5 = sC.aW5, aB = sC.m0 - 1; 0 <= aB; aB--) aW5[aB] = aW5[aB] >> 1, 0 === a6e[aB] && (bN.m9.aVf(aB), bN.aHM.aVy(aB));
			bd.gD(gL, dt - bN.kz.aHJ(gL), 15)
		}
}

function aVF() {
	this.aXs = 32, this.eu = 0, this.ew = 0, this.iY = 0, this.aXt = 0, this.aXu = 4, this.iX = null, this.aXq = new Int16Array(9), this.dd = function() {
		this.iY = 1 + bL.du(bS.ey - 1, this.aXs), this.aXt = 1 + bL.du(bS.ez - 1, this.aXs), this.iX = new Array(this.iY * this.aXt), bA.qi.a2T(this.iX);
		var eu, ew, aXq = this.aXq,
			i = this.iY;
		for (eu = -1; eu <= 1; eu++)
			for (ew = -1; ew <= 1; ew++) aXq[3 * (1 + ew) + 1 + eu] = ew * i + eu
	}, this.mL = function(aXw, aB) {
		return this.iX[aB].push(aXw), this.iX[aB].length - 1
	}, this.aXh = function(aXx, aXN, aXX) {
		var aXy, aXz, aXN = bM.iW(aXN),
			aXX = bM.iW(aXX);
		return aXN === aXX ? aXx : (aXy = this.iX[aXN].pop(), this.iX[aXN].length === aXx ? this.mL(aXy, aXX) : (aXz = this.iX[aXN][aXx], this.iX[aXN][aXx] = aXy, bN.y.aW3[aXy] = aXx, this.mL(aXz, aXX)))
	}
}

function aVJ() {
	this.ky = function(player, aY0) {
		return -1 !== aY0 && !!bN.kz.la(player, aY0) && this.q3(player, aY0, 0)
	}, this.q3 = function(player, aY0, aY1) {
		player = function(player, aY0, aY1) {
			var aXA = bN.kz.aWm(player, aY0);
			if (-1 === aXA) return -1;
			aXA = bN.kz.l0(aXA, aY0);
			if (-1 === aXA) return -1;
			var lT = bN.lW.lb(aXA, aY0);
			if (0 <= lT) return lT;
			if (bN.lW.lc()) return -1;
			if (0 <= (lT = bN.lW.lb(aY0, aXA))) return bN.lW.ld(bN.lW.le(bN.lW.get(lT)));
			if (aXA === aY0) return bN.lW.ld(new Uint32Array([aXA, aY0]));
			if (0 <= (lT = bN.aVK.q3(aXA, aY0))) return lT;
			return aY1 ? function(aY5, player) {
				var fU = bO.fU,
					eK = (fU.fill(0), [aY5]),
					ht = (fU[aY5] = 1, bM.ht),
					aY6 = -1,
					en = eK.length;
				for (; - 1 === aY6 && en;) {
					for (var g = [], aB = 0; aB < en; aB++)
						for (var eZ = eK[aB], a4G = fU[eZ], eq = 0; eq < 8; eq++) {
							var wH, a0r, et = eZ + ht[eq],
								eR = 4 * et;
							ac.i1(eR) ? (wH = fU[et], a0r = a4G + 5 + ((1 & eq) << 1), 0 === wH ? (g.push(et), fU[et] = a0r) : fU[et] = Math.min(a0r, wH)) : -1 === aY6 && eq % 2 == 0 && ac.y7(player, eR) && (aY6 = eZ)
						}
					en = (eK = g).length
				}
				return -1 !== aY6 ? function(iE, aY8) {
					var ht = bM.ht,
						aY9 = -1,
						he = 0,
						mf = [];
					for (; aY8 !== iE;)(he = function(eZ, he) {
						var fU = bO.fU,
							ht = bM.ht,
							a4G = fU[eZ];
						if (a4G - fU[eZ + ht[he]] != 5 + ((1 & he) << 1))
							for (var f6 = 0; f6 < 8; f6++) {
								var eq = f6 + he + 6 & 7;
								if (a4G - fU[eZ + ht[eq]] == 5 + ((1 & eq) << 1)) return eq
							}
						return he
					}(aY8, he)) !== aY9 && (mf.push(aY8), aY9 = he), aY8 += ht[he];
					mf.push(iE);
					var lT = bN.lW.lb(mf[0], iE);
					if (0 <= lT) return lT;
					return bN.lW.ld(new Uint32Array(mf))
				}(aY5, aY6) : -1
			}(aY0, player) : -1
		}(player, aY0, aY1);
		return -1 !== player && (bO.g[0] = bN.lW.get(player), !0)
	}
}

function aVL() {
	function aYB(h2, iJ, iL) {
		for (var jQ = Math.min(iJ, iL), nR = Math.max(iJ, iL), ew = jQ + 1; ew < nR; ew++)
			if (!ac.i1(bM.iR(h2, ew))) return;
		return 1
	}

	function aYC(h4, iI, iK) {
		for (var jQ = Math.min(iI, iK), nR = Math.max(iI, iK), eu = jQ + 1; eu < nR; eu++)
			if (!ac.i1(bM.iR(eu, h4))) return;
		return 1
	}

	function aYD(iI, iJ, iK, iL, aY3, aY0) {
		for (var en = Math.min(Math.abs(iK - iI), Math.abs(iL - iJ)), i7 = Math.sign(iK - iI), iA = Math.sign(iL - iJ), aB = 0; aB < en; aB++)
			if (!ac.i1(bM.iR(iI += i7, iJ += iA))) return null;
		return iI === iK ? aYB(iI, iJ, iL) ? new Uint32Array([aY3, bM.fB(iI, iJ), aY0]) : null : aYC(iJ, iI, iK) ? new Uint32Array([aY3, bM.fB(iI, iJ), aY0]) : null
	}
	this.q3 = function(aY3, aY0) {
		aY3 = function(aY3, aY0) {
			var iI = bM.ev(aY3),
				iJ = bM.ex(aY3),
				iK = bM.ev(aY0),
				iL = bM.ex(aY0);
			if (iI === iK) {
				if (aYB(iI, iJ, iL)) return new Uint32Array([aY3, aY0])
			} else {
				if (iJ !== iL) return aYD(iI, iJ, iK, iL, aY3, aY0) || aYD(iK, iL, iI, iJ, aY3, aY0);
				if (aYC(iJ, iI, iK)) return new Uint32Array([aY3, aY0])
			}
			return null
		}(aY3, aY0);
		return null === aY3 ? -1 : bN.lW.ld(aY3)
	}
}

function aVQ() {
	var aYE = [];
	this.dd = function() {
		aYE = []
	}, this.lc = function() {
		return 65536 === aYE.length
	}, this.lb = function(aY3, aY0) {
		for (var lW = aYE, en = lW.length, aB = 0; aB < en; aB++) {
			var gL = lW[aB];
			if (gL[0] === aY3 && gL[gL.length - 1] === aY0) return aB
		}
		return -1
	}, this.le = function(lV) {
		var aYF = new Uint32Array(lV.length);
		return aYF.set(lV), aYF.reverse()
	}, this.aVm = function(hF, kn) {
		var gG = hF.length - 1,
			aYG = new Uint32Array(gG + kn.length);
		return aYG.set(hF, 0), aYG.set(kn, gG), aYG
	}, this.aVr = function(hF, kn, aAa, eZ, aYH) {
		aYH && (aAa = (kn = this.le(kn)).length - aAa - 2);
		aYH = kn.subarray(aAa + 1 + (eZ === kn[aAa + 1])), eZ = new Uint32Array(hF.length + aYH.length);
		return eZ.set(hF, 0), eZ.set(aYH, hF.length), eZ
	}, this.ld = function(lV) {
		return aYE.push(lV), aYE.length - 1
	}, this.get = function(aB) {
		return aYE[aB]
	}, this.lY = function() {
		return aYE
	}, this.aYJ = function(aY3, aY0) {
		return null
	}
}

function aVU() {
	this.j3 = function(player, n6) {
		player = bN.kz.n8(player, n6);
		return !(player < 0 || !bN.m9.aVt(player) || (bN.m9.aVf(player), 0))
	}
}

function aVG() {
	var yi = 32,
		yh = new Array(2);

	function wX(f8) {
		var eu, ew, eZ, iA, i7, hj = yi,
			a2w = bA.qa.wX(hj, hj),
			hp = bA.qa.getContext(a2w, !0),
			hm = bA.qa.getImageData(hp, hj, hj),
			wi = hm.data,
			l5 = (hj >> 1) - .5,
			l6 = Math.sqrt(l5 * l5);
		for (wi.fill(255), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = eu - l5, iA = ew - l5, eZ = 4 * (ew * hj + eu), i7 = 714 * (l6 - Math.sqrt(i7 * i7 + iA * iA)) / l6, wi[2 + eZ] = f8, wi[3 + eZ] = 255 < i7 ? 0 : i7;
		return hp.putImageData(hm, 0, 0), a2w
	}
	this.aYK = -1, this.dd = function() {
		this.aYK = -1, yh[0] || (yh[0] = wX(255), yh[1] = wX(0))
	}, this.aYL = function(hp, eR, eu, ew, e7, aB) {
		bA.g9.gz(aD.eX) && (hp.setTransform(eR *= 4 / 3 * .625, 0, 0, eR, eu - (e7 *= 4 / 3), ew - e7), hp.drawImage(yh[+(bN.y.m3[aB] === this.aYK)], 0, 0))
	}
}

function aVP() {
	function aTk(eu, en, ew, aYM, a9E, fE, player) {
		if (!(ew < 1 || a9E < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kz.aVx(eR) && !bA.qi.has(aYM, ac.eV(eR)) && ac.xz(eR, player)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTo(ew, en, eu, aYM, aTi, fE, player) {
		if (!(eu < 1 || aTi < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kz.aVx(eR) && !bA.qi.has(aYM, ac.eV(eR)) && ac.xz(eR, player)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTs(iE, iF, aTf) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTf) < bM.iG(iE, aTf)) ? iF : iE
	}
	this.hO = function(player, aTf) {
		if (bN.mG.mH(player))
			for (var aTg = bM.hu(), aYM = [];;) {
				var aY6 = function(aTf, aTg, aYM, player) {
					for (var h2 = bM.ev(aTf), h4 = bM.ex(aTf), aTi = bS.ey - 2, a9E = bS.ez - 2, aTj = -1, eq = 0; eq < aTg; eq++) {
						var a9D = Math.max(h2 - eq, 1),
							aKv = Math.max(h4 - eq, 1),
							xv = Math.min(h2 + eq, aTi),
							xu = Math.min(h4 + eq, a9E),
							iE = aTk(h2, xv - h2, h4 - eq, aYM, a9E, 1, player),
							iF = aTk(h2 - 1, h2 - a9D - 1, h4 - eq, aYM, a9E, -1, player),
							xv = aTk(h2, xv - h2, h4 + eq, aYM, a9E, 1, player),
							a9D = aTk(h2 - 1, h2 - a9D - 1, h4 + eq, aYM, a9E, -1, player),
							aTn = aTo(h4, xu - h4 - 1, h2 - eq, aYM, aTi, 1, player),
							aTp = aTo(h4 - 1, h4 - aKv - 2, h2 - eq, aYM, aTi, -1, player),
							xu = aTo(h4, xu - h4 - 1, h2 + eq, aYM, aTi, 1, player),
							aKv = aTo(h4 - 1, h4 - aKv - 2, h2 + eq, aYM, aTi, -1, player);
						if (aTj = aTs(aTj, iE, aTf), aTj = aTs(aTj, iF, aTf), aTj = aTs(aTj, xv, aTf), aTj = aTs(aTj, a9D, aTf), aTj = aTs(aTj, aTn, aTf), aTj = aTs(aTj, aTp, aTf), aTj = aTs(aTj, xu, aTf), 0 <= (aTj = aTs(aTj, aKv, aTf)) &&
							eq * eq >= bM.iG(aTj, aTf)) return aTj
					}
					return -1
				}(aTf, aTg, aYM, player);
				if (-1 === aY6) break;
				var id = ac.eV(bM.ed(aY6));
				if (bN.kz.aWk(player, id)) return !! function(player, aY6, aTf) {
					for (var he = bM.ib(aY6, aTf), aB = 0; aB < 4; aB++) {
						var eZ = bM.iZ(aY6, he);
						if (ac.aGy(bM.ed(eZ), player)) return bO.fP[6] = he, 1;
						he = (he + 1) % 4
					}
					return
				}(player, aY6, aTf) && (bO.fP[7] = aY6, !0);
				aYM.push(id)
			}
		return !1
	}
}

function dg() {
	this.aR9 = [L(454), L(455), L(456), L(457), L(458), L(459), L(460), L(461), L(462), L(463), L(464), L(465), L(466), L(467), L(468), L(469)];
	var aYP = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBY = new Array(aYP.length), this.dd = function() {
		var g = bj.eK.data[155].value.split(";"),
			l5 = g.length;
		if (function() {
				for (var en = aYP.length, aB = 0; aB < en; aB++) bX.aBY[aB] = aYP[aB]
			}(), !(l5 > aYP.length))
			for (var aB = 0; aB < l5; aB++) g[aB].length && (this.aBY[aB] = g[aB])
	}, this.aRB = function(e8, code) {
		for (var aBY = this.aBY, aYR = aYP, qH = (aBY[e8] = code, ""), en = aBY.length, aYS = [], aB = 0; aB < en; aB++) aYS.push(aBY[aB] === aYR[aB] ? "" : aBY[aB]);
		en--;
		for (aB = 0; aB < en; aB++) qH += aYS[aB] + ";";
		bj.s2.s3(155, qH += aYS[en])
	}, this.aR8 = function() {
		bj.s2.s3(155, ""), this.dd()
	}, this.f8 = function(code, e8) {
		return code === this.aBY[e8] || code === this.aBY[e8 + 1]
	}
}

function dY() {
	var aYT = new Array(1),
		aYU = new Array(1),
		aYV = 20,
		eL = 0,
		aYW = !1;

	function aYY() {
		aYV++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aYU[aB] = 0, aYT[aB] = document.createElement("audio"), aYT[aB].src = src, aYT[aB].setAttribute("preload", "auto"), aYT[aB].setAttribute("controls", "none"), aYT[aB].style.display = "none", aYT[aB].onpause = function() {
					aYU[aB] = 1
				}, aYT[aB].oncanplaythrough = function() {
					aYU[aB] = 0 === aYU[aB] ? 1 : aYU[aB]
				}, document.body.appendChild(aYT[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aYW = !0
		}
	}, this.uC = function() {
		if (aYW) {
			aYW = !1;
			for (var aB = 0; 0 <= aB; aB--) aYT[aB].onpause = null, aYT[aB].oncanplaythrough = null, t.removeChild(document.body, aYT[aB]), aYT[aB] = null
		}
	}, this.play = function() {
		if (aYW) {
			var dt = performance.now();
			if (eL + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aYU[aB]) return eL = dt, aYU[aB] = 2, void aYT[aB].play();
			0 < aYV && (aYV--, setTimeout(aYY, 66))
		}
	}
}

function ca() {
	this.a8E = function() {
		var aYb;
		return !(al.kg < 3 || ag.gb[ll[0]] >= aD.ju >> 1) && (aD.hh ? (aYb = ae.aIL(), !(2 * ae.aIM(bh.kj()) >= aYb)) : function() {
			var aYb = ae.aIL();
			if (2 * ag.gp[ll[0]] >= aYb) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aXO = aD.kA, gp = ag.gp, aB = 0; aB < aXO; aB++) gp[aB] = 512;
			var aXP = aD.xD,
				kN = aE.kN,
				hW = aE.hW;
			for (aB = aXO; aB < aXP; aB++) gp[aB] = kN[hW[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var en = aD.xD, gp = ag.gp, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < en; aB++) gp[aB] = sResourcesValue
		} : function() {
			for (var en = aD.xD, gp = ag.gp, sResourcesData = aD.data.sResourcesData, aB = 0; aB < en; aB++) gp[aB] = sResourcesData[aB]
		})();
		bd.mf[8] = ag.gp[aD.eX]
	}
}

function dP() {
	var aH6 = 501,
		aYh = (this.aYg = new Uint32Array(aH6), this.a3b = new Uint32Array(aH6), this.aBD = new Uint16Array(aH6), this.aRH = 0, 1),
		aYi = 0;

	function aYl(self) {
		self.max.fill(0)
	}

	function aYn(self, aB) {
		self.max[0] = Math.max(self.aYg[aB], self.max[0]), self.max[1] = Math.max(self.a3b[aB], self.max[1]), self.max[2] = Math.max(self.aBD[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aYj = 0, this.mf = new Array(21), this.aYk = null, this.de = function() {
		this.aYk = [L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(305), L(306), L(478), L(479), L(480), L(481), "", L(482), L(483), L(484), L(265), L(485), L(486)]
	}, this.dd = function() {
		this.aRH = 0, aYh = 1, this.aYj = 0, aYi = 0, aYl(this), this.mf.fill(0)
	}, this.q0 = function(player, iN) {
		bA.g9.a3W(player) && (this.mf[0] += iN + 1, this.mf[1]++, this.mf[12] += bO.fK[1])
	}, this.pV = function(player, p8) {
		__fx.donationsTracker.logDonation(player, p8, bO.fK[0]);
		player === aD.eX && (aN.pV(bO.fK[0], bO.fK[1], p8), this.mf[12] += bO.fK[1], this.mf[16] += bO.fK[0]), p8 === aD.eX && (aN.a6r(bO.fK[0], player), this.mf[10] += bO.fK[0])
	}, this.q4 = function(player) {
		bA.g9.a3W(player) && (this.mf[2]++, this.mf[12] += bO.fK[1])
	}, this.qC = function(player) {
		bA.g9.a3W(player) && (this.mf[19]++, this.mf[12] += bO.fK[1])
	}, this.aXI = function(player) {
		bA.g9.a3W(player) && this.mf[20]++
	}, this.gD = function(player, a4G, e8) {
		bA.g9.a3W(player) && (this.mf[e8] += a4G)
	}, this.j3 = function() {
		var self;
		this.aYj || 0 < aYi-- || ((self = this).aYg[self.aRH] = ag.gb[aD.eX], self.a3b[self.aRH] = ag.gp[aD.eX], self.aBD[self.aRH] = ae.aBE(aD.eX), aYn(self, self.aRH), self.aRH++, self.aRH === aH6 && function(self) {
			aYl(self), aYn(self, 0), self.aRH = 1 + bL.du(aH6, 2);
			for (var aB = 1; aB < self.aRH; aB++) self.aYg[aB] = self.aYg[2 * aB], self.a3b[aB] = self.a3b[2 * aB], self.aBD[aB] = self.aBD[2 * aB], aYn(self, aB);
			aYh *= 2
		}(self), aYi = aYh - 1, be.mW(), 0 === ag.mj[aD.eX] && (self.aYj = bf.k7()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.sw = 0, this.sx = 0, this.aYp = 0, this.aYq = 0, this.a8R = 0, this.te = 0;
	var aYs = this.aYr = 0;
	this.aYt = 0, this.aYu = 0, this.aYv = 0, this.a7n = 0, this.e8 = 0, this.aAo = null, this.hZ = !1, this.aYw = -1, this.aYx = !1, this.aYy = [0, 0], this.de = function() {
		this.aAo = [L(487), L(119, 0, "Balance"), L(118, 0, "Interest"), L(488)]
	}, this.dd = function() {
		this.hZ = !1, this.aYw = -1, this.aYx = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eq = a0.a1.hw() && h.i < h.j ? 1 : a0.a1.hw() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eq * this.i), this.i -= a0.a1.hw() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7n = Math.floor(this.j / 150), this.a7n = Math.max(this.a7n, 1.5), this.sw = Math.floor(1 + .02 * this
			.i), this.sx = Math.floor(1 + .04 * this.i), this.a8R = this.sx, aYs = Math.floor(.75 * this.a8R), this.te = Math.floor(1 + .075 * this.i), this.aYt = Math.floor(1 + .1125 * this.i), this.aYu = Math.floor(this.i * (a0.a1.hw() ? .03 :
				.029)), this.aYu = Math.max(this.aYu, 4), this.aYv = Math.floor(.035 * this.i), this.aYv = Math.max(this.aYv, 4), this.aYr = this.j - 2 * this.a8R - this.te - this.aYt, this.hZ && this.aYz()
	}, this.h0 = function(lP, lQ) {
		var xG, xF;
		return !!this.hZ && (xF = lP, xG = lQ, lP -= bL.du(h.i - this.i, 2), lQ -= bL.du(h.j - this.j, 2), lP < 0 || lQ < 0 || lP >= this.i || lQ >= this.j || lP >= this.i - this.aYt && lQ < this.aYt ? -1 !== aM.h0(xF, xG) || bC.h0(xF, xG) ||
			this.rr() : lQ < this.aYt || (lQ < this.j - this.te ? (this.aYx = !0, this.aYw = (lP - 2 * this.sw - this.aYp) / this.aYq, 3 !== this.e8 && (bf.dl = !0)) : (xF = (xF = Math.floor(lP / (this.i / this.aAo.length))) < 0 ? 0 : xF >=
				this.aAo.length ? this.aAo.length - 1 : xF) !== this.e8 && (this.e8 = xF, this.aYz(), bf.dl = !0)), !0)
	}, this.a1c = function(lP, lQ) {
		return this.aYy[0] = lP, this.aYy[1] = lQ, !(!this.hZ || !this.aYx || (lP -= bL.du(h.i - this.i, 2), lQ = this.aYw, this.aYw = (lP - 2 * this.sw - this.aYp) / this.aYq, (0 <= this.aYw && this.aYw <= 1 || 0 <= lQ && lQ <= 1) && (bf.dl = !
			0), 0))
	}, this.a21 = function() {
		this.aYx && (this.aYx = !1)
	}, this.a2D = function() {
		this.hZ ? this.rr() : this.show()
	}, this.show = function() {
		bd.aRH < 2 || (this.hZ = !0, this.aYz())
	}, this.rr = function() {
		this.hZ = !1, this.aYw = -1, bf.dl = !0
	}, this.aYz = function() {
		this.e8 < 2 ? this.aYp = aQ.measureText(bA.rZ.zP(bd.max[this.e8]), bA.qa.sP(0, this.aYu)) : 2 === this.e8 && (this.aYp = aQ.measureText(bA.rZ.a49(6, 2), bA.qa.sP(0, this.aYu))), this.aYq = this.i - 2 * this.sw - this.aYp - this.sx
	}, this.mW = function() {
		this.hZ && this.aYz()
	}, this.ui = function() {
		this.hZ && this.a8j()
	}, this.a8j = function() {
		var eu = bL.du(h.i - this.i, 2),
			ew = bL.du(h.j - this.j, 2);
		uj.setTransform(1, 0, 0, 1, eu, ew), uj.fillStyle = bB.ng, uj.fillRect(0, this.aYt, this.i, this.j - this.aYt), this.aZ0(), this.aQ5(), uj.strokeRect(0, 0, this.i, this.j), bA.qa.textAlign(uj, 2), uj.font = bA.qa.sP(0, this.aYu), 0 ===
			this.e8 ? this.aZ1(bd.aYg, eu, ew) : 1 === this.e8 ? this.aZ1(bd.a3b, eu, ew) : 2 === this.e8 ? this.aZ2(eu, ew) : 3 === this.e8 && (this.aZ3(eu, ew), this.aZ4(eu, ew)), aM.a5x(Math.floor(eu + this.i - .725 * this.aYt), Math.floor(
				ew + .275 * this.aYt), Math.floor(.45 * this.aYt)), uj.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aZ0 = function() {
		var aB, dt;
		for (uj.lineWidth = this.a7n, bA.qa.textBaseline(uj, 1), bA.qa.textAlign(uj, 1), uj.strokeStyle = bB.nj, uj.font = bA.qa.sP(1, this.aYv), dt = this.i / this.aAo.length, uj.fillStyle = bB.o5, uj.fillRect(this.e8 * dt, this.j - this.te, dt,
				this.te), uj.fillStyle = bB.nj, uj.fillRect(0, this.j - this.te - .5 * this.a7n, this.i, this.a7n), aB = 1; aB <= 3; aB++) uj.fillRect(aB * dt, this.j - this.te, this.a7n, this.te);
		for (aB = this.aAo.length - 1; 0 <= aB; aB--) uj.fillText(bA.yI.a38(this.aAo[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.te)
	}, this.aQ5 = function() {
		uj.fillStyle = bB.oV, uj.fillRect(0, 0, this.i, this.aYt), uj.fillStyle = bB.nj, uj.fillRect(0, this.aYt - .5 * this.a7n, this.i, this.a7n), uj.font = bA.qa.sP(1, .39 * this.aYt), uj.fillText(bA.yI.a38(L(489), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aYt))
	}, this.aZ1 = function(g, eu, ew) {
		var l5 = bd.max[this.e8],
			a2V = (uj.setTransform(1, 0, 0, 1, eu + 2 * this.sw + this.aYp, ew + this.a8R + this.aYt), uj.lineWidth = 2, this.aYr / Math.sqrt(l5));
		uj.beginPath(), uj.moveTo(this.aYq, this.aYr - a2V * Math.sqrt(g[bd.aRH - 1]));
		for (var aB = bd.aRH - 2; 0 <= aB; aB--) uj.lineTo(aB * this.aYq / (bd.aRH - 1), this.aYr - a2V * Math.sqrt(g[aB]));
		uj.stroke();
		eu = this.a5x(g, a2V, .5);
		eu < .95 && uj.fillText(bA.rZ.zP(l5), -this.sw, 0), .05 < Math.abs(eu - .5) && uj.fillText(bA.rZ.zP(Math.floor(l5 / 4)), -this.sw, Math.floor(this.aYr / 2)), .05 < eu && uj.fillText("0", -this.sw, this.aYr)
	}, this.aZ2 = function(eu, ew) {
		uj.setTransform(1, 0, 0, 1, eu + 2 * this.sw + this.aYp, ew + this.a8R + this.aYt), uj.lineWidth = 2;
		var a2V = this.aYr / Math.max(bd.max[this.e8], 1);
		uj.beginPath(), uj.moveTo(this.aYq, this.aYr - a2V * bd.aBD[bd.aRH - 1]);
		for (var aB = bd.aRH - 2; 0 <= aB; aB--) uj.lineTo(aB * this.aYq / (bd.aRH - 1), this.aYr - a2V * bd.aBD[aB]);
		uj.stroke();
		eu = this.a5x(bd.aBD, a2V, 1), ew = bd.max[this.e8] / 100;
		eu < .95 && uj.fillText(bA.rZ.a49(ew, 2), -this.sw, 0), .05 < Math.abs(eu - .5) && uj.fillText(bA.rZ.a49(ew / 2, 2), -this.sw, Math.floor(this.aYr / 2)), .05 < eu && uj.fillText(bA.rZ.a49(0, 2), -this.sw, this.aYr)
	}, this.aZ3 = function(eu, ew) {
		uj.setTransform(1, 0, 0, 1, eu + .34 * this.i, ew + 2 * aYs + this.aYt), bA.qa.textAlign(uj, 2);
		for (var aAZ = this.j - 4 * aYs - this.te - this.aYt, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) uj.fillText(bA.yI.a38(bd.aYk[g[aB]], 0, .31 * this.i), 0, aB * aAZ / 9);
		var fF = bd.mf;
		for (uj.setTransform(1, 0, 0, 1, eu + .39 * this.i, ew + 2 * aYs + this.aYt), bA.qa.textAlign(uj, 0), uj.fillText(bA.rZ.a49(100 * fF[0] / (1024 * Math.max(fF[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) uj.fillText(fF[g[aB]].toString(), 0,
			aB * aAZ / 9);
		uj.fillText(bA.rZ.a49(100 * (1 - ag.gb[aD.eX] / fF[7]), 0), 0, aAZ)
	}, this.aZ4 = function(eu, ew) {
		uj.setTransform(1, 0, 0, 1, eu + .79 * this.i, ew + 2 * aYs + this.aYt), bA.qa.textAlign(uj, 2);
		var aB, aAZ = this.j - 4 * aYs - this.te - this.aYt;
		for (uj.fillStyle = bB.o0, aB = 2; 0 <= aB; aB--) uj.fillText(bA.yI.a38(bd.aYk[aB + 8], 0, .31 * this.i), 0, aB * aAZ / 9);
		uj.fillText(bA.yI.a38(bd.aYk[18], 0, .31 * this.i), 0, 3 * aAZ / 9), uj.fillStyle = bB.nz, uj.fillText(bA.yI.a38(bd.aYk[11], 0, .31 * this.i), 0, 4 * aAZ / 9), uj.fillStyle = bB.oI, uj.fillText(bA.yI.a38(bd.aYk[13], 0, .31 * this.i), 0,
				5 * aAZ / 9), uj.fillText(bA.yI.a38(bd.aYk[15], 0, .31 * this.i), 0, 6 * aAZ / 9), uj.fillText(bA.yI.a38(bd.aYk[16], 0, .31 * this.i), 0, 7 * aAZ / 9), uj.fillText(bA.yI.a38(bd.aYk[12], 0, .31 * this.i), 0, 8 * aAZ / 9), uj
			.fillStyle = bB.oH, uj.fillText(bA.yI.a38(bd.aYk[17], 0, .31 * this.i), 0, aAZ), uj.fillStyle = bB.o0;
		var fF = bd.mf,
			aEW = fF[8] + fF[9] + fF[10] + fF[18],
			aEW = bA.rZ.zP(aEW),
			aOr = uj.measureText(aEW).width,
			eu = (uj.setTransform(1, 0, 0, 1, eu + .83 * this.i + aOr, ew + 2 * aYs + this.aYt), uj.fillText(bA.rZ.zP(fF[8]), 0, 0), uj.fillText(bA.rZ.zP(fF[9]), 0, aAZ / 9), uj.fillText(bA.rZ.zP(fF[10]), 0, 2 * aAZ / 9), uj.fillText(bA.rZ.zP(fF[
				18]), 0, 3 * aAZ / 9), uj.fillStyle = bB.nz, uj.fillText(aEW, 0, 4 * aAZ / 9), uj.fillStyle = bB.oI, uj.fillText(bA.rZ.zP(fF[13]), 0, 5 * aAZ / 9), uj.fillText(bA.rZ.zP(fF[15]), 0, 6 * aAZ / 9), uj.fillText(bA.rZ.zP(fF[16]),
				0, 7 * aAZ / 9), uj.fillText(bA.rZ.zP(fF[12]), 0, 8 * aAZ / 9), fF[12] + fF[13] + fF[15] + fF[16]);
		uj.fillStyle = bB.oH, uj.fillText(bA.rZ.zP(eu), 0, aAZ), uj.fillStyle = bB.nj
	}, this.a5x = function(g, a2V, a9M) {
		var aB, e, fW;
		return this.aYw < 0 || 1 < this.aYw ? .25 : (aB = this.aYw * (bd.aRH - 1), fW = g[e = Math.floor(aB)], fW += (aB - e) * (g[e < bd.aRH - 1 ? e + 1 : e] - fW), uj.strokeStyle = bB.nm, .04 < this.aYw && this.aZ6(0, this.aYr - a2V * Math.pow(
				fW, a9M), aB * this.aYq / (bd.aRH - 1), this.aYr - a2V * Math.pow(fW, a9M)), .04 < fW / bd.max[this.e8] && this.aZ6(aB * this.aYq / (bd.aRH - 1), this.aYr, aB * this.aYq / (bd.aRH - 1), this.aYr - a2V * Math.pow(fW, a9M)), uj
			.fillStyle = bB.oK, uj.beginPath(), uj.arc(aB * this.aYq / (bd.aRH - 1), this.aYr - a2V * Math.pow(fW, a9M), Math.max(2, .014 * this.j), 0, 2 * Math.PI), uj.fill(), g = this.aYw * bf.aBF, g = 0 === ag.mj[aD.eX] ? Math.floor(g * bd
				.aYj) : Math.floor(g * bf.k7()), uj.fillStyle = bB.nj, uj.fillText(1 === a9M ? bA.rZ.a49(fW / 100, 2) : bA.rZ.zP(Math.floor(fW)), -this.sw, this.aYr - a2V * Math.pow(fW, a9M)), bA.qa.textAlign(uj, 1), uj.fillText(aW.aB2(g),
				aB * this.aYq / (bd.aRH - 1), this.aYr + this.aYu - (a0.a1.hw() ? 2 : 0) - this.a7n), bA.qa.textAlign(uj, 2), a2V * Math.pow(fW, a9M) / this.aYr)
	}, this.aZ6 = function(n9, nA, nM, nN) {
		uj.beginPath(), uj.moveTo(n9, nA), uj.lineTo(nM, nN), uj.stroke()
	}
}

function by() {
	this.aZ7 = "https://", this.aZ8 = this.aZ7 + "territorial.io/", this.aRI = this.aZ8 + "changelog", this.aRM = this.aZ8 + "terms", this.aZ9 = this.aZ8 + "cookie_policy", this.aQj = this.aZ8 + "privacy", this.aRL = this.aZ8 + "tutorial", this.aRK =
		this.aZ8 + "players", this.aRJ = this.aZ8 + "clans", this.a0u = this.aZ8 + "clan-results", this.aO0 = "https://patreon.com/c/territorial", this.aCU = this.aZ7 + "play.google.com/store/apps/details?id=territorial.io", this.a1C = this.aZ7 +
		"apps.apple.com/app/id1581110913", this.aZA = this.aZ7 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCV = this.aZ7 + "discord.gg/pthqvpTXmh", this.aCW = this.aZ7 + "www.instagram.com/davidtschacher/", this.yx =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aZB, this.yF = new aZC, this.dd = function() {
		this.y.dd()
	}, this.j3 = function() {
		0 !== this.y.a70 && this.y.a70--
	}
}

function aZC() {
	this.ui = function() {
		if (0 !== bP.y.a70 && (uj.globalAlpha = Math.min(bP.y.a70 / 580, 1), uj.drawImage(bP.y.aZF, 1 + aS.yD(), 1 + aS.yE()), uj.globalAlpha = 1, aD.hB)) {
			for (var n9 = iO / hy, nA = iP / hy, nM = (h.i + iO) / hy, nN = (h.j + iP) / hy, gM = bP.y.aZG * hy, aZH = bP.y.aZH, aB = aD.kA - 1; 0 <= aB; aB--) ! function(aB, gM, n9, nA, nM, nN, aZH) {
				var highlight;
				0 === ag.mj[aB] || 0 === ag.gb[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gM *= 2), nM = h.i * ((ag.ie[aB] + ag.ig[aB] + 1) / 2 - n9) / (nM - n9) - .5 * gM, n9 = h.j * ((ag.ih[
					aB] + ag.ii[aB] + 1) / 2 - nA) / (nN - nA) - .5 * gM, nM > h.i) || n9 > h.j || nM < -gM || n9 < -gM || (highlight ? uj.setTransform(2 * hy, 0, 0, 2 * hy, nM, n9) : uj.setTransform(hy, 0, 0, hy, nM, n9), uj.drawImage(
					aZH[aD.hh ? bg.el[aB] : 1], 0, 0))
			}(aB, gM, n9, nA, nM, nN, aZH);
			uj.setTransform(hy, 0, 0, hy, 0, 0)
		}
	}
}

function aZB() {
	this.aZG = 28, this.a70 = 0, this.aZF = null;
	var aZJ = this.aZH = null;

	function aZM(hj, aZN) {
		var eu, ew, eZ, i7, a2w = bA.qa.wX(hj, hj),
			hp = bA.qa.getContext(a2w, !0),
			hm = bA.qa.getImageData(hp, hj, hj),
			wi = hm.data,
			l5 = (hj >> 1) - .5,
			aZO = .5 + l5;
		for (aZO *= aZO, ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = (i7 = eu - l5) * i7 + (i7 = ew - l5) * i7, wi[eZ = 4 * (ew * hj + eu)] = aZN[0], wi[1 + eZ] = aZN[1], wi[2 + eZ] = aZN[2], wi[3 + eZ] = (aZO - i7) * aZN[3] / aZO;
		return hp.putImageData(hm, 0, 0), a2w
	}

	function aYL(aB, hp, a2w, hj) {
		var highlight, eu, ew;
		0 !== ag.mj[aB] && 0 !== ag.gb[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hj *= 2), eu = ag.ie[aB] + ag.ig[aB] + 1 - hj - 2 >> 1, ew = ag.ih[aB] + ag.ii[aB] + 1 - hj - 2 >> 1, highlight ? hp
			.drawImage(a2w[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew, hj, hj) : hp.drawImage(a2w[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew))
	}
	this.dd = function() {
		var sC;
		this.a70 = 700,
			function(sC) {
				var hj = sC.aZG;
				if (sC.aZH = [], aZJ = [], aD.hh) {
					for (var aB = 0; aB <= aD.xK; aB++) sC.aZH.push(aZM(hj, bg.aWf[bg.kX[aB]])), aZJ.push(aZM(hj >> 1, bg.aWf[bg.kX[aB]]));
					9 === aD.kS && aZJ.push(aZM(hj, bg.aWf[1]))
				} else sC.aZH.push(aZM(hj, bg.aWf[7])), sC.aZH.push(aZM(hj, bg.aWf[4])), aZJ.push(aZM(hj >> 1, bg.aWf[7]))
			}(this),
			function(sC, aZP) {
				var aB, aZF = sC.aZF,
					hp = bA.qa.getContext(aZF, !0),
					en = aD.ek,
					hj = sC.aZG >> 1;
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0), aZP && hp.clearRect(0, 0, aZF.width, aZF.height);
				if (9 === aD.kS) {
					hj <<= 1;
					sC = az.kb[5];
					for (aB = en - sC; aB < en; aB++) aYL(aB, hp, aZJ, hj);
					en -= sC, hj >>= 1
				}
				for (aB = aD.kA; aB < en; aB++) aYL(aB, hp, aZJ, hj)
			}(this, null !== (sC = this).aZF && sC.aZF.width === bS.ey - 2 && sC.aZF.height === bS.ez - 2 || (sC.aZF = bA.qa.wX(bS.ey - 2, bS.ez - 2), !1)), aD.hB || this.a4R()
	}, this.aWe = aZM, this.a4R = function() {
		for (var en = aD.kA, hj = this.aZG, aZH = this.aZH, hp = bA.qa.getContext(this.aZF, !0), aB = 0; aB < en; aB++) aYL(aB, hp, aZH, hj)
	}
}

function d9() {
	function aZS() {
		8 === aD.kS && 1 === aD.a08 && bR.zk.a07()
	}

	function aZR(player) {
		aD.hB ? (ak.aHD(player), al.aK7(), aD.kU && aD.pw.j3()) : b3.aCo(player)
	}
	this.pO = function(player) {
		aN.a0K(player, player === aD.eX ? 21 : 22), aZR(player), aZS()
	}, this.pt = function(player) {
		1 === aD.a08 && 0 !== ag.mj[player] && 2 !== ag.a3S[player] && aZR(player), aD.a0B--, aD.a0A--, aN.a0K(player, 4), bA.g9.gy(2) && aW.mV(!0), aZS()
	}
}

function dJ() {
	this.aTd = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAW = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nj, "rgb(170,170,170)"
	], this.aZT = [bB.nj, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nj, bB.na], this.aZU = [bB.na, bB.nj, bB.nj, bB.nj, bB.na, bB.na, bB.na, bB.na, bB.nj];
	var aKH = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJa = ["rgba(" + aKH[0] + ",", "rgba(" + aKH[1] + ",", "rgba(" + aKH[2] + ",", "rgba(" + aKH[3] + ",", "rgba(" + aKH[4] + ",", "rgba(" + aKH[5] + ",", "rgba(" + aKH[6] + ",", "rgba(" + aKH[7] + ",", "rgba(" + aKH[8] + ",", "rgba(" + aKH[9] +
			","
		], this.aJb = ["rgb(" + aKH[0] + ")", "rgb(" + aKH[1] + ")", "rgb(" + aKH[2] + ")", "rgb(" + aKH[3] + ")", "rgb(" + aKH[4] + ")", "rgb(" + aKH[5] + ")", "rgb(" + aKH[6] + ")", "rgb(" + aKH[7] + ")", "rgb(" + aKH[8] + ")", "rgb(" + aKH[9] +
			")"
		], this.a0T = null, this.aWf = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aWK = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kX = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.el = new Uint8Array(aD.ek), this.aAX = new Uint8Array(aD.ek), this.xQ = new Uint16Array(aD.ek), this.xR = new Uint16Array(this.kX.length + 1), this.xS = new Uint16Array(this.kX.length), this.de =
		function() {
			this.a0T = [L(490), L(491), L(492), L(493), L(494), L(495), L(496), L(497), L(498)]
		}, this.dd = function() {
			if (this.el.fill(0), this.aAX.fill(0), this.aZV(), aD.hh) {
				if (9 === aD.kS) {
					for (var el = bg.el, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) el[aB] = 1;
					var en = aD.ek;
					for (aB = aD.data.teamPlayerCount[7]; aB < en; aB++) el[aB] = 2;
					bg.kX[1] = 7, bg.kX[2] = 8
				} else aD.kU ? function() {
					var aWK = bg.aWK,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kA - 1; 0 <= aB; aB--) colorsData[aB] = ay.jR(262144);
					var aZg = 0,
						f3 = 768,
						aT7 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var eq = 0, f7 = 0; f7 < 3; f7++) eq += Math.abs(aWK[aB][f7] - aT7[f7]);
							eq < f3 && (aZg = aB, f3 = eq)
						} var aZh = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aZh[aB] = teamPlayerCount[aB];
					var kX = bg.kX,
						aZi = new Uint8Array(9),
						gG = (kX[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aZh[aB] && (aZi[aB] = gG, kX[gG++] = aB);
					var jQ = aD.kA,
						el = bg.el;
					aZh[aZg] ? (aZh[aZg]--, el[0] = aZi[aZg]) : jQ = 0;
					var f8 = 0;
					for (aB = jQ; aB < aD.xD; aB++) {
						var hf = kX[f8];
						if (aZh[hf]) aZh[hf]--, el[aB] = aZi[hf];
						else if (aB--, 9 <= ++f8) return console.log("error 325")
					}
				}() : this.j3();
				! function() {
					for (var en = aD.ek, xQ = bg.xQ, xR = bg.xR, xS = bg.xS, el = bg.el, kX = bg.kX, xJ = kX.length, eK = new Array(xJ), aB = 0; aB < xJ; aB++) eK[aB] = [];
					for (aB = 0; aB < en; aB++) eK[kX[el[aB]]].push(aB);
					for (aB = 1; aB <= xJ; aB++) xR[aB] = xR[aB - 1] + eK[aB - 1].length;
					for (aB = 0; aB < xJ; aB++)
						for (var gG = eK[aB].length, l5 = xR[aB], hf = 0; hf < gG; hf++) xQ[hf + l5] = eK[aB][hf];
					var kA = aD.kA;
					for (aB = 0; aB < xJ; aB++)
						for (gG = eK[aB].length, l5 = xR[aB], hf = 0; hf < gG; hf++)
							if (xQ[hf + l5] >= kA) {
								xS[aB] = hf;
								break
							}
				}(), ! function() {
					for (var en = aD.ek, el = bg.el, aAX = bg.aAX, kX = bg.kX, aB = 0; aB < en; aB++) aAX[aB] = kX[el[aB]];
					9 === aD.kS && aAX.fill(1, en - az.kb[5])
				}()
			}
		}, this.aZV = function() {
			for (var aB = this.kX.length - 1; 0 <= aB; aB--) this.kX[aB] = aB
		}, this.j3 = function() {
			var zE = new Uint8Array(aD.kA),
				zF = new Uint8Array(aD.kA),
				aZa = new Uint16Array(8),
				aZb = new Uint16Array(this.kX.length);
			this.aZc(zE, zF, aZa, 1), this.aGo(aZa), this.aZd(aZb, zE, zF), this.aZe(zE, zF, aZb), this.aZf()
		}, this.aZc = function(zE, zF, aZh, aZj) {
			for (var f7, e, aZk, en = this.kX.length - aZj, g = new Uint16Array(en), aWK = this.aWK, colorsData = aD.data.colorsData, aB = aD.kA - 1; 0 <= aB; aB--) {
				for (f7 = en; aZj <= f7; f7--) g[f7 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aWK[f7][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aWK[f7][1]) + Math.abs(4 * (63 & colorsData[aB]) - aWK[f7][2]);
				for (aZk = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZk && (aZk = g[e], zE[aB] = e);
				for (aZh[zE[aB]] += 4, aZk = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZk && e !== zE[aB] && (aZk = g[e], zF[aB] = e);
				aZh[zF[aB]]++
			}
		}, this.aGo = function(aZh) {
			for (var f7, l7, en = this.kX.length - 1, aB = en; 0 <= aB; aB--) this.kX[aB] = aB;
			for (aB = en - 1; 0 <= aB; aB--) aZh[aB]++;
			for (aB = 1; aB <= en; aB++) {
				for (l7 = 0, f7 = 1; f7 < en; f7++) aZh[f7] > aZh[l7] && (l7 = f7);
				aZh[l7] = 0, this.kX[aB] = l7 + 1
			}
		}, this.aZd = function(aZb, zE, zF) {
			var f7, a0o, f8, eq, e, nL, tD, aZl = this.kX.length - 1,
				r3 = new Uint16Array(aZl),
				aZm = [],
				aZn = 0,
				a0n = [],
				aZo = [];
			loop: for (var aB = 0; aB < aD.kA; aB++)
				if (null !== (a0o = bA.rZ.a0p(ag.a0m[aB]))) {
					for (f7 = a0n.length - 1; 0 <= f7; f7--)
						if (a0o === a0n[f7]) {
							aZo[f7].push(aB), aZn = Math.max(aZn, aZo[f7].length);
							continue loop
						} a0n.push(a0o), aZm.push(!1), aZo.push([aB]), aZn = Math.max(aZn, 1)
				}
			for (; 2 < aD.xK && aZn > bL.du(aD.kA, aD.xK);) aD.xK--, aD.kS--;
			for (f7 = a0n.length - 1; 0 <= f7; f7--) {
				for (eq = -1, f8 = a0n.length - 1; 0 <= f8; f8--) !aZm[f8] && (-1 === eq || aZo[f8].length > aZo[eq].length) && (eq = f8);
				for (f8 = aZl - 1; 0 <= f8; f8--) r3[f8] = 1;
				for (f8 = aZo[eq].length - 1; 0 <= f8; f8--) r3[zE[aZo[eq][f8]]] += 3, r3[zF[aZo[eq][f8]]]++;
				for (aB = aZl - 1; 0 <= aB; aB--) {
					for (e = eq % aZl, f8 = aZl - 1; 0 <= f8; f8--) r3[f8] > r3[e] && (e = f8);
					for (nL = -1, f8 = aD.xK; 0 < f8; f8--)
						if (this.kX[f8] === e + 1) {
							nL = f8;
							break
						} if (r3[e] = 0, -1 !== nL) {
						for (tD = 0, f8 = aD.xK; 0 < f8; f8--) aZb[nL] > aZb[f8] && tD++;
						if (tD !== aD.xK - 1) {
							for (f8 = aZo[eq].length - 1; 0 <= f8; f8--) aZb[nL]++, this.el[aZo[eq][f8]] = nL;
							break
						}
					}
				}
				aZm[eq] = !0
			}
		}, this.aZe = function(zE, zF, aZb) {
			for (var aB, i6, en = this.kX.length - 1, border = bL.du(aD.kA, aD.xK), aZp = (0 < aD.kA % aD.xK && border++, new Uint8Array(1 + en)), f7 = en; 1 <= f7; f7--) aZp[this.kX[f7]] = f7;
			for (aB = 0; aB < aD.kA; aB++) i6 = aZp[zE[aB] + 1], 0 === this.el[aB] && i6 <= aD.xK && aZb[i6] < border && (aZb[i6]++, this.el[aB] = i6);
			for (aB = 0; aB < aD.kA; aB++) i6 = aZp[zF[aB] + 1], 0 === this.el[aB] && i6 <= aD.xK && aZb[i6] < border && (aZb[i6]++, this.el[aB] = i6);
			for (f7 = aD.xK; 1 <= f7; f7--)
				for (aB = aD.kA - 1; 0 <= aB && !(aZb[f7] >= border); aB--) 0 === this.el[aB] && (aZb[f7]++, this.el[aB] = f7)
		}, this.aZf = function() {
			for (var aB = aD.kA; aB < aD.ek; aB++) this.el[aB] = 1 + aB % aD.xK
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
			for (var aZq = !1, aZr = !1, eq = 3; 0 <= eq; eq--) {
				var gL = gT[player][aB] + ep[eq];
				if (ac.aGy(gL, player)) continue loop;
				aZq = aZq || ac.i1(gL), aZr = aZr || ac.aGx(gL)
			}
			aZq ? gU[player].push(gT[player][aB]) : aZr ? fD[player].push(gT[player][aB]) : ac.xm(gT[player][aB], player), gT[player][aB] = gT[player][en - 1], gT[player].pop(), en--
		}
	}, this.gR = function() {
		ag.gb[fi] -= fj
	}, this.gS = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) ac.y7(fi, border[aB]) || (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gV = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) !ac.y7(fi, border[aB]) && ac.ei(border[aB]) && (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gW = function(border) {
		for (var eq, gL, en = border.length, ep = ac.ep, aB = en - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--)
				if (gL = border[aB] + ep[eq], ac.aGy(gL, fi)) {
					ag.gT[fi].push(border[aB]), border[aB] = border[en - 1], border.pop(), en--;
					break
				}
	}, this.gX = function() {
		for (var eq, gL, ep = ac.ep, aB = fj - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--) gL = fl[aB] + ep[eq], ac.yA(fi, gL) && ac.aGz(gL) && (ag.gT[fi].push(gL), ac.gI(gL, fi))
	}, this.gY = function() {
		var eu, ew;
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.y7(fi, 4 * (ag.ih[fi] * bS.ey + eu))) break loop;
			ag.ih[fi]++
		}
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.y7(fi, 4 * (ag.ii[fi] * bS.ey + eu))) break loop;
			ag.ii[fi]--
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.y7(fi, 4 * (ew * bS.ey + ag.ie[fi]))) break loop;
			ag.ie[fi]++
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.y7(fi, 4 * (ew * bS.ey + ag.ig[fi]))) break loop;
			ag.ig[fi]--
		}
	}, this.eg = function(player, jJ) {
		return 0 === bg.el[player] || bg.el[player] !== bg.el[jJ]
	}, this.hJ = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.aH9 = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.jL(ag.gT[player][aB]) && ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.hM = function(a3X, a3Y) {
		for (var aB, dt, gM, gL, aXO = ag.gT[a3X].length, aXP = ag.gT[a3Y].length, ep = (aXP < aXO && (dt = a3X, a3X = a3Y, a3Y = dt, dt = aXO, aXO = aXP, 0), ac.ep), eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aXO; aB++)
				if (gL = ag.gT[a3X][aB] + gM, ac.gN(gL) && ac.ef(gL) === a3Y) return !0;
		return !1
	}, this.aHA = function(a3X, a3Y) {
		for (var aB, gM, gL, aXO = ag.gT[a3X].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aXO; aB++)
				if (ac.jL(ag.gT[a3X][aB]) && (gL = ag.gT[a3X][aB] + gM, ac.gN(gL)) && ac.ef(gL) === a3Y) return !0;
		return !1
	}
}

function dV() {
	this.q5 = new aZs
}

function aZs() {
	this.hP = function(player) {
		bA.g9.a3T(player) && aN.ya(80, L(499), 637, 0, bB.oY, bB.ng, -1, !1)
	}, this.hS = function(player) {
		bA.g9.a3T(player) && aN.ya(80, L(500), 637, 0, bB.oY, bB.ng, -1, !1)
	}
}

function aZt() {
	this.aZu = 0, this.j3 = function() {
		aO.j3(), aZ.j3(), h.j3(), b0.y.j3(), ax.aGK(), bf.dl && (bf.dl = !1, aa.ui())
	}
}

function aZv() {
	this.eM = bf.eM, this.e8 = 0, this.aZu = 0, this.aGI = 0, this.aZw = null, this.aZx = 7, this.a71 = 0, this.dd = function() {
		this.aGI = 0, this.aZw = [], this.e8 = 0, this.aZu = 0
	}, this.aSe = function(aC) {
		if (aD.hB) this.aBG(aC);
		else if (this.aZw.push(aC), 2 === aD.a08) {
			for (var aB = 0; aB < this.aZw.length; aB++) b8.p1.j3(this.aZw[aB]);
			this.aZw = []
		}
	}, this.aBG = function(aC) {
		2 !== aD.a08 && (b8.p1.j3(aC), b9.j3(), aW.aBG(this.aGI), this.aGI === aD.a4X ? (aD.pw.j3(), this.aGI = 0, this.e8 = 0, this.aZu = 0, this.eM = bf.eM) : (this.aGI++, af.a4Q(), af.mV(!0), bb.aBq()))
	}, this.j3 = function() {
		h.j3(), aD.hB ? (bf.dl = aW.aBG(-1) || bf.dl, mX()) : (0 !== this.e8 || bf.eM >= this.eM && (this.eM += bf.aBF * Math.floor(1 + (bf.eM - this.eM) / bf.aBF), 2 === aD.a08 ? mM() : this.aZy(), this.e8++, 27 < bf.eM - this.a71)) && this
		.aZz(), mS(), bf.dl && (bf.dl = !1, yB()), this.a71 = bf.eM
	}, this.aZz = function() {
		bf.dl = !0, mU(), this.e8 = 0
	}, this.aZy = function() {
		var vZ, aB;
		if (this.aZu !== 7 * this.aGI) mO(), bb.aBq();
		else {
			vZ = !1;
			loop: for (; this.aa0() && (vZ = !0, mO(), 2 !== aD.a08) && 0 < this.aZw.length;)
				for (aB = this.aZx - 2; 0 <= aB; aB--)
					if (mO(), 2 === aD.a08) break loop;
			vZ ? bb.aBq() : (mM(), bb.a4T())
		}
	}, this.aa0 = function() {
		return 0 < this.aZw.length && (this.aGI++, b8.p1.j3(this.aZw[0]), this.aZw.shift(), !0)
	}
}

function aa1() {
	var aa2, aa3, aa4, aGI, aa5, e8 = 0,
		eM = bf.eM;

	function aa8() {
		! function() {
			if (!aD.hB) return;
			if (aD.kU) return;
			if (2 !== aD.a08)
				if (aa5 % 7 != 0) aa5++;
				else if (aGI === aD.a4X) {
				if (!aaB()) return;
				aW.aBG(aGI), aD.pw.j3()
			} else {
				if (!aaB()) return;
				aa5++, aGI++, af.a4Q(), af.mV(!0)
			}
			return 1
		}() && aaB() && mO()
	}

	function aa9() {
		e8 = 0, (aD.hB ? (bf.dl = aW.aBG(aGI - (aa5 % 7 == 0 ? 0 : 1) + aa5 % 7 / 7) || bf.dl, mX) : aM.gx || !bC.a4v ? mX : (bf.dl = !0, mU))()
	}

	function aaB() {
		var aB, en, aaC = b9.pu.aU1,
			fW = b9.pu.aU2,
			fY = b9.pu.aU3,
			fa = b9.pu.aU4,
			aaD = b9.pu.aU5,
			aaE = b9.pu.aU6;
		if (!(aa2 >= aaE.length)) {
			if (aaE = aaE[aa2], aaD[aa2]) {
				for (en = aa3 + aaE, aB = aa3; aB < en; aB++) b8.p1.pj(aaC[aB], fW[aB], fY[aB], fa[aB]);
				aa3 += aaE, aa2++
			} else ++aa4 >= aaE && (aa2++, aa4 = 0);
			return 1
		}
		aN.a1P("Replay file smaller than expected."), bC.a2E(!1), aD.a08 = 2
	}
	this.aZu = 0, this.dd = function() {
		aa5 = aGI = aa4 = aa3 = aa2 = 0
	}, this.j3 = function() {
		var aXp;
		h.j3(), bC.a8d() < 1.7 ? 0 === e8 ? bf.eM >= eM && (aXp = bf.aBF / bC.a8d(), eM += aXp * Math.floor(1 + (bf.eM - eM) / aXp), 2 === aD.a08 || aM.gx || !bC.a4v ? mM() : (aa8(), bb.aBq()), e8++) : aa9() : function() {
			var aXp;
			if (bf.eM >= eM)
				if (2 === aD.a08 || aM.gx || !bC.a4v) mM(), eM = bf.eM;
				else {
					for (aXp = bf.aBF / bC.a8d(), 16 < (bf.eM - eM) / aXp && (eM = bf.eM - 16 * aXp); bf.eM >= eM && 2 !== aD.a08;) eM += aXp, aa8();
					bb.aBq()
				} aa9()
		}(), mS(), bf.dl && (bf.dl = !1, yB())
	}, this.a0I = function() {
		b9.pu.aU6.length - aa2 <= 2 || aN.a1P("Replay file larger than expected.")
	}
}

function aaF() {
	var e8 = 0,
		eM = bf.eM;
	this.aZu = 0, this.j3 = function() {
		h.j3(), aD.hB ? mX() : 0 === e8 ? bf.eM >= eM && (eM += bf.aBF * Math.floor(1 + (bf.eM - eM) / bf.aBF), 2 === aD.a08 || aM.gx ? mM() : (mO(), bb.aBq()), e8++) : ((aM.gx ? mX : (bf.dl = !0, mU))(), e8 = 0), mS(), bf.dl && (bf.dl = !1,
		yB())
	}
}

function dR() {
	this.a0H = null, this.dl = !1, this.eM = 0, this.aBF = 56;
	var aaG = 0;

	function aaH() {
		bf.eM = aaG = performance.now(), bf.a0H.j3(), window.requestAnimationFrame(aaH)
	}
	this.dd = function() {
		this.a4s(), window.requestAnimationFrame(aaH), this.eM = performance.now()
	}, this.a4j = function() {
		aD.gw ? (this.a0H = new aa1, this.a0H.dd()) : aD.kU ? this.a0H = new aaF : (this.a0H = new aZv, this.a0H.dd())
	}, this.a4s = function() {
		this.a0H = new aZt, this.dl = !0
	}, this.j3 = function() {
		this.a0H.aZu++
	}, this.k7 = function() {
		return this.a0H.aZu
	}, this.aSG = function() {
		var dt = performance.now();
		dt < aaG + 1e3 || (this.eM = dt, this.a0H.j3())
	}
}

function ct() {
	var aFi = 0,
		aaI = !0;

	function aaJ(id) {
		id = [L(501), L(502), L(503), L(504)][id];
		aN.a6i(id)
	}
	this.j3 = function() {
		var dt, a73;
		bf.eM < aFi || (aFi = bf.eM + 5e3, aD.gw) || aD.kU || bA.g9.gz(aD.eX) || (dt = new Date, a73 = dt.getUTCSeconds(), aaI ? a73 < 50 && (aaI = !1) : a73 < 50 || (aaI = !0, (a73 = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a73 || 20 ==
			a73 || 40 == a73 ? aD.kS < 7 && aaJ(0) : 10 == a73 || 30 == a73 || 50 == a73 ? 7 !== aD.kS && 10 !== aD.kS || aaJ(1) : 5 == a73 || 25 == a73 || 45 == a73 ? 8 === aD.kS && aaJ(2) : 35 == a73 && 9 === aD.kS && aaJ(3))))
	}
}

function cn() {
	var n9, nA, nM, nN, aaK = 0,
		aaL = 0;

	function aaN() {
		return Math.pow(Math.pow(nM - n9, 2) + Math.pow(nN - nA, 2), .5)
	}

	function aaM(e) {
		n9 = h.k * e.touches[0].clientX, nA = h.k * e.touches[0].clientY, nM = h.k * e.touches[1].clientX, nN = h.k * e.touches[1].clientY
	}
	this.a1g = function(e) {
		return 1 < e.touches.length ? (aaL = bf.eM, aaK = 3, aaM(e), aL.rr(), !0) : (aaK = 0, !1)
	}, this.a1h = function(e) {
		var aL4, i4, i5;
		return 0 !== aD.a08 && 1 < e.touches.length && (aaK = Math.max(aaK - 1, 0), aH.nR() && (aL4 = aaN(), aaM(e), e = aaN(), i4 = Math.floor((n9 + nM) / 2), i5 = Math.floor((nA + nN) / 2), aS.a94(i4, i5, Math.max(.125, e) / Math.max(.125,
			aL4)), bf.dl = !0), !0)
	}, this.a24 = function() {
		var eu, ew;
		return !!(aaK && (aaK = 0, bf.eM < aaL + 500)) && (eu = (n9 + nM) / 2, ew = (nA + nN) / 2, aL.a1y(eu, ew), aL.click(eu, ew, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.uC = function() {
		this.aC = null
	}, this.pi = function(size) {
		for (var fF = 0, aC = this.aC, nR = this.e8 + size - 1, aB = this.e8; aB <= nR; aB++) fF |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nR - aB;
		return this.e8 += size, this.e8 > 8 * this.size && console.error("Unwrapper Overflow"), fF
	}, this.aSm = function(size) {
		var f7 = size >> 1;
		return (1 << f7) * this.pi(size - f7) + this.pi(f7)
	}, this.aSn = function(aaO) {
		return this.size === bD.aSl(aaO)
	}, this.aUJ = function(wz, aaP, aaQ) {
		var gG = this.pi(wz);
		if (!gG) return null;
		for (var wz = Math.max(gG, aaQ), g = new(aaP <= 8 ? Uint8Array : aaP <= 16 ? Uint16Array : Uint32Array)(wz), aB = 0; aB < gG; aB++) g[aB] = this.pi(aaP);
		aaQ = g[gG - 1];
		return aaQ && g.fill(aaQ, gG), g
	}, this.aUK = function(wz, aaR, aaQ) {
		var gG = this.pi(wz);
		if (!gG) return null;
		for (var wz = Math.max(gG, aaQ), g = new Array(wz), aB = 0; aB < gG; aB++) g[aB] = this.aUH(aaR);
		return g.fill(g[gG - 1], gG), g
	}, this.aUH = function(wz) {
		return bG.w6.wA(this.pi(wz))
	}, this.aUI = function() {
		var qH = bF.ss.st(bF.ss.su(this.pi(30))),
			qH = bA.rZ.a4L(qH, "_", "/");
		qH = bA.rZ.a4L(qH, "-", "+");
		for (var aaS = "";
			(qH.length + aaS.length) % 4;) aaS += "=";
		qH = "data:image/png;base64," + qH + aaS;
		var aHf = new Image;
		aHf.onload = function() {
			b9.aI4.aI5(aHf), aHf.onload = null, aHf = null
		}, aHf.src = qH
	}
}

function dL() {
	this.aVA = 0, this.aVB = 0, this.aV6 = 0, this.aV7 = 0, this.aV8 = 0, this.aV9 = 0, this.aBr = [0, 0, 0, 0], this.nQ = function() {
		this.aVA = aS.yD(), this.aVB = aS.yE(), this.aV6 = -this.aVA, this.aV7 = -this.aVB, this.aV8 = h.i / hy, this.aV9 = h.j / hy, this.aBr[0] = Math.floor(this.aV6), this.aBr[1] = Math.floor(this.aV7), this.aBr[2] = Math.floor(this.aBr[0] +
			this.aV8 + 1), this.aBr[3] = Math.floor(this.aBr[1] + this.aV9 + 1), bb.aBo = !0
	}
}

function co() {
	var a7j, mw;
	this.dd = function() {
		a7j = 1, mw = 0
	}, this.j3 = function() {
		0 < a7j && (mw = 0 === mw ? bf.eM + 16 : mw, a7j = (a7j -= .001 * (bf.eM - mw)) < 0 ? 0 : a7j, mw = bf.eM, bf.dl = !0)
	}, this.ui = function() {
		0 < a7j && (uj.fillStyle = "rgba(0,0,0," + a7j + ")", uj.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aaO) {
		return this.dd(new Uint8Array(this.aSl(aaO))), this.aC
	}, this.uC = function() {
		this.aC = null
	}, this.a8 = function(size, a77) {
		for (var aC = this.aC, nR = this.e8 + size - 1, aB = this.e8; aB <= nR; aB++) aC[aB >> 3] |= (a77 >> nR - aB & 1) << 7 - (7 & aB);
		this.e8 += size, this.e8 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aSk = function(size, a77) {
		var f7 = size >> 1,
			eq = 1 << f7;
		this.a8(size - f7, bL.du(a77, eq)), this.a8(f7, a77 % eq)
	}, this.aaV = function(size) {
		for (var aC = this.aC, nR = this.e8 + size, aB = this.e8; aB < nR; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aSl = function(aaO) {
		return aaO + 7 >> 3
	}, this.aaW = function(g, jQ, nR, aaX) {
		for (var aB = jQ; aB < nR; aB++) this.a8(aaX, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e8 = 0
	}, this.aTA = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aaY, value) {
		for (var g = this.g, nR = this.e8 + aaY - 1, aaZ = 1 + (nR >> 3); g.length < aaZ;) g.push(0);
		for (var aB = this.e8; aB <= nR; aB++) g[aB >> 3] |= (value >> nR - aB & 1) << 7 - (7 & aB);
		this.e8 += aaY
	}, this.dk = function(g, wz, aaP) {
		var aaa = bA.qi.a2q(g);
		this.a8(wz, aaa);
		for (var aB = 0; aB < aaa; aB++) this.a8(aaP, g[aB])
	}, this.aUb = function(g, wz, aaR) {
		var aaa = bA.qi.a2q(g);
		this.a8(wz, aaa);
		for (var aB = 0; aB < aaa; aB++) this.aUZ(g[aB], aaR)
	}, this.aUZ = function(qH, wz) {
		var en = qH.length;
		this.a8(wz, en);
		for (var aB = 0; aB < en; aB++) this.a8(16, qH.charCodeAt(aB))
	}, this.aUa = function(a2w) {
		var aab = (a2w = a2w.toDataURL()).split(",");
		if (aab.length < 2) console.log("error 266");
		else {
			a2w = bA.rZ.a4L(a2w = aab[aab.length - 1], "/", "_"), a2w = bA.rZ.a4L(a2w, "\\+", "-");
			var a2w = bA.rZ.a4L(a2w, "=", ""),
				wJ = bG.ss.wG(a2w),
				en = wJ.length;
			this.a8(30, en);
			for (var aB = 0; aB < en; aB++) this.a8(6, wJ[aB])
		}
	}
}
a(), self.aiCommand746 = function(fF) {
	0 === fF ? bt() : 1 !== fF || !a0 || 1 !== a0.id || a0.dv < 14 || bJ.fG()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};