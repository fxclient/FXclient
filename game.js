var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, hy, iO, iP,
	a7n, lk, jv, a1Q, uh, y5, aBh, a4a, a4b, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io",
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
	this.dq = 1108, this.n = 2102, this.rVersion = 13, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dv = "28 Jul 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
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
				ru = (rL.style.top = bA.qa.qj(rS - qU), rL.style.height = bA.qa.qj(qU), rJ.style.top = bA.qa.qj(rS - qU - ru), rJ.style.height = bA.qa.qj(ru), bA.qa.qk(rJ, 2), this.rN.e.style.width = bA.qa.qj(rw), this.rN.e.style.fontSize = rR.button
					.style.fontSize = bA.qa.qj(.5 * qU), bA.qa.qk(this.rN.e, 6), rR.button.style.left = bA.qa.qj(rw), rR.button.style.width = bA.qa.qj(rv - rw), .385 * qU);
			a0.a1.hw() && (ru *= .8 - .12 * (h.i > h.j)), rK.style.marginLeft = rK.style.marginRight = bA.qa.qj(.5 * ru), rK.style.fontSize = bA.qa.qj(ru), rn(1)
		}, (self = this).rN.e.rW = 127, rJ.style.position = "absolute", rJ.style.top = "0", rJ.style.left = "0", rJ.style.width = "100%", rJ.style.overflowX = "hidden", rJ.style.overflowY = "auto", rJ.style.font = "inherit", rJ.style
		.backgroundColor = bB.ng, rJ.addEventListener("scroll", function() {
			rU = rJ.scrollTop, rT = rU < rJ.scrollHeight - rJ.clientHeight - 2 ? 0 : 1
		}), rK.style.font = "inherit", rL.style.position = "absolute", rL.style.left = "0", rL.style.width = "100%", self.rN.e.setAttribute("placeholder", L(13)), self.rN.e.style.position = "absolute", self.rN.e.style.top = "0", self.rN.e.style
		.left = "0", self.rN.e.style.height = "100%", self.rN.e.style.backgroundColor = bB.nd, self.rN.e.style.textAlign = "center", (rR = new w(L(14), rP)).button.top = "0", rR.button.style.position = "absolute", rR.button.style.height = "100%", rR
		.qu(bB.ou), rM = new rX("127", rR.button, 1, 1), rJ.appendChild(rK), rL.appendChild(self.rN.e), rL.appendChild(rR.button)
}

function ry(rz, ql, s0) {
	function click() {
		var value = 1 - rz.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + ql, void 0 !== rz.e8 ? bj.s1.s2(rz.e8, value) : rz.value = value, s0 && s0(value)
	}
	var e;
	ql = ql || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (rz.value ? "🟩 " : "⬜ ") + ql, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function s3(qU, qN) {
	var qF = document.createElement("div");
	this.qW = qF, this.resize = function() {
		qF.style.padding = bA.qa.qj(bc.qg), qF.style.lineHeight = bA.qa.qj(bA.qa.rt(.035))
	}, qU.style.overflowX = "hidden", qU.style.overflowY = "auto", qF.innerHTML = qN, qU.appendChild(qF)
}

function s4(s5) {
	var qF = document.createElement("div");
	this.e = qF, this.s6 = s5, this.resize = function() {
		for (var en = s5.length, aB = 1; aB < en; aB++) bA.qa.qk(s5[aB], 4)
	};
	var aB, en = s5.length;
	for (qF.style.width = "100%", qF.style.height = "2.7em", qF.style.marginTop = "0.6em", qF.style.border = "inherit", aB = 0; aB < en; aB++) s5[aB].style.verticalAlign = "top", s5[aB].style.width = (100 / en).toFixed(2) + "%", s5[aB].style.height =
		"100%", s5[aB].style.fontSize = "0.75em", qF.appendChild(s5[aB])
}

function s7(s8, qn, s9) {
	this.qF = document.createElement("div"), this.r9 = s8;
	var sA = 0;
	this.resize = function(qU, sC) {
		var en = s8.length;
		if (!s9)
			for (var aB = 1; aB < en; aB++) bA.qa.qk(s8[aB].button, 4);
		for (var sD = 0, aB = 0; aB < en; aB++) sD += s8[aB].button.offsetWidth;
		if (qU && (sA = qU.offsetWidth), sC && sD < sA)
			for (aB = 0; aB < en; aB++) s8[aB].button.style.width = (100 * s8[aB].button.offsetWidth / sD).toFixed(2) + "%";
		else
			for (aB = 0; aB < en; aB++) s8[aB].button.style.width = "auto";
		sC || this.resize(qU, 1)
	};
	var sB = this;
	sB.qF.style.height = sB.qF.style.maxHeight = "100%";
	for (var aB = 0; aB < s8.length; aB++) s8[aB].qu(qn), s8[aB].button.style.height = "100%", s8[aB].button.style.padding = "0.0em 0.9em", sB.qF.appendChild(s8[aB].button)
}

function sE() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qa.qk(this.e, 8, bB.nr)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sF() {
	var sJ, sK, sG = document.createElement("div"),
		sH = 0,
		sI = 0;
	this.show = function(eu, ew, qH, sL, sM) {
		if (sH) {
			if (!sL) return;
			this.rr()
		}
		eu === ew && -1 === eu ? (eu = sJ, ew = sK) : (sJ = eu, sK = ew), sM || (sI = sL), sH = 1;
		sM = h.i / h.k, sG.style.whiteSpace = "pre", sG.textContent = qH, bA.qa.qk(sG, 5), sG.style.font = bA.qa.sO(0, bA.qa.rt(.015)), sG.style.padding = "0.3em 0.6em", sG.style.left = eu + "px", sG.style.top = "0px", document.body.appendChild(
			sG), sL = eu + sG.offsetWidth - sM;
		0 < sL && (sG.style.left = (qH = eu - sL) + "px", qH < 5) && (sG.style.whiteSpace = "pre-wrap"), sG.style.top = ew - sG.offsetHeight + sI * bc.sQ + "px"
	}, this.rr = function(sR) {
		if (sH) {
			if (sR && sI) return 0;
			sH = 0, document.body.removeChild(sG)
		}
		return 1
	}, sG.style.position = "absolute", sG.style.backgroundColor = bB.ne, sG.style.color = bB.ni, sG.style.pointerEvents = "none", sG.style.zIndex = "5", sG.style.maxWidth = "100%"
}

function rO(sS, type, sT, sU) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sV++, e.value = sS.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.ni, e.style.backgroundColor = bB.nb, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sW++
		}), e.addEventListener("blur", function() {
			h.sW--, -1 !== sS.e8 && bj.s1.s2(sS.e8, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sS.e8 && bj.s1.s2(sS.e8, e.value), sT ? sT() : e.blur())
		}), sU && e.addEventListener("input", function(qS) {
			sU(qS)
		})
}

function sX(qU, data) {
	var en = data.sY.length,
		sZ = document.createElement("div"),
		sa = document.createElement("div"),
		sb = document.createElement("div"),
		sc = new Array(en),
		qV = new Array(en),
		sd = new Array(data.se.length),
		sf = bA.color.nc(70, 70, 0, .35);

	function r5() {
		this.style.backgroundColor = bA.color.r5(sf, 160)
	}

	function sk() {
		this.style.backgroundColor = sf
	}

	function qd() {
		var f6;
		for (qU.style.font = bA.qa.sO(0, bA.qa.su(.026, .5, .03)), aB = 1; aB < sd.length; aB++) bA.qa.qk(sd[aB], 4);
		if (bA.qa.qk(sZ, 2), en) {
			for (var hF, sv = sZ.offsetWidth, sw = sb.offsetWidth, aB = 0; aB < sd.length; aB++) hF = .01 * data.sj[aB] * sw, sd[aB].style.width = (100 * hF / sv).toFixed(2) + "%";
			var l3 = data.sY[0].length;
			for (aB = 0; aB < en; aB++)
				for (bA.qa.qk(sc[aB], 2), f6 = 1; f6 < l3; f6++) bA.qa.qk(qV[aB][f6], 4);
			sa.sg && (sa.scrollTop = sa.sg)
		}
	}
	this.resize = function() {
			qd(), qd()
		}, qU.style.display = "flex", qU.style.flexDirection = "column", sa.style.overflowX = "hidden", sa.style.overflowY = "auto", sa.addEventListener("scroll", function() {
			this.sg = this.scrollTop
		}),
		function() {
			var eq, aB, sY = data.sY,
				l3 = en ? sY[0].length : 0;
			for (aB = 0; aB < en; aB++) {
				sc[aB] = document.createElement("div"), sc[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nc(130, 130, 130, .35) : bB.nh
				}(aB), sc[aB].style.width = "100%", sc[aB].style.display = "flex", qV[aB] = new Array(l3);
				for (var f6 = 0; f6 < l3; f6++) qV[aB][f6] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data
					.sj[f6] + "%", eq.innerHTML = sY[aB][f6].fF, 1 === sY[aB][f6].dt && (eq.name = "" + aB, eq.style.color = bB.og, eq.style.backgroundColor = sf, eq.addEventListener("mouseover", r5), eq.addEventListener("mouseout", sk), function(eq,
						sm, sn) {
						2147483647 !== sn && eq.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, sm), bH.dd(bD.aC), this.style.backgroundColor = sf, t.u(8, t.so, new sp(25, {
								sq: 0,
								sm: bF.sr.ss(bF.sr.st(5)),
								sn: sn
							}))
						})
					}(eq, sY[aB][f6].sm, sY[aB][f6].sn)), sc[aB].appendChild(eq)
			}
			for (sZ.style.display = "flex", sZ.style.backgroundColor = bA.color.nc(0, 120, 0, .35), aB = 0; aB < sd.length; aB++) sd[aB] = eq = document.createElement("div"), eq.style.display = "flex", eq.style.justifyContent = "center", eq.style
				.wordBreak = "break-all", eq.style.padding = "0.4em 0em", eq.style.width = data.sj[aB] + "%", eq.innerHTML = data.se[aB], sZ.appendChild(eq)
		}();
	for (var aB = 0; aB < en; aB++) sb.appendChild(sc[aB]);
	sa.appendChild(sb), qU.appendChild(sZ), qU.appendChild(sa)
}

function sx() {
	var t1, t2, sy = document.createElement("div"),
		sz = document.createElement("div"),
		t0 = document.createElement("div"),
		sb = document.createElement("div"),
		r9 = [],
		e3 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		t3 = [1, 2, 3, 0, 9, 10, 11];

	function t5(aB) {
		t.u(8, 0, new sp(21, {
			t7: t3[aB],
			t8: 0,
			t9: 10
		}))
	}
	this.show = function() {
			this.s2(t.y.tA), document.body.appendChild(sy)
		}, this.rr = function() {
			document.body.removeChild(sy)
		}, this.s2 = function(tA) {
			for (var tB = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < r9.length; aB++) {
				var i = tA[aB];
				t1[tB[aB]][1].rY.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tC = bc.gap,
				j = bA.qa.tD(.085),
				i = Math.min(4 * j, h.i - 2 * tC),
				en = r9.length;
			for (bA.qa.tE(sy, tC, h.j - tC - j, i, j), bA.qa.qk(sy), bA.qa.qk(sz, 6), aB = 0; aB < en - 1; aB++) bA.qa.qk(r9[aB].button, 6);
			for (aB = 0; aB < en; aB++) t1[aB][0].resize(), t1[aB][1].resize();
			for (r9[0].eu = 0, r9[0].button.style.left = bA.qa.qj(r9[0].eu), r9[0].button.style.width = bA.qa.tF(1.7 * j), aB = 1; aB < en; aB++) r9[aB].eu = r9[aB - 1].eu + r9[aB - 1].button.offsetWidth, r9[aB].button.style.left = bA.qa.qj(r9[aB]
				.eu);
			if (!t2) {
				if (!ab.tG()) return;
				(t2 = ab.get(14)).style.width = "24%", t2.style.position = "absolute", sz.appendChild(t2)
			}
			t2.style.left = bA.qa.qj(0), t2.style.top = "7%", t0.tH && (t0.scrollLeft = t0.tH)
		}, sy.style.position = "absolute", sz.style.width = "25%", sz.style.height = "100%", sz.style.backgroundColor = bB.ne, t0.style.position = "absolute", t0.style.width = "75%", t0.style.height = "100%", t0.style.backgroundColor = bB.ne, t0
		.style.top = t0.style.right = bA.qa.qj(0), bA.qa.t4(t0), sb.style.height = sb.style.maxHeight = "100%", r9.push(new w("", function() {
			t5(0)
		}, bB.oS)), r9.push(new w("", function() {
			t5(1)
		}, bB.oT)), r9.push(new w("", function() {
			t5(2)
		}, bB.oL)), r9.push(new w("", function() {
			t5(3)
		}, bB.o6)), r9.push(new w("", function() {
			t5(4)
		}, bB.op)), r9.push(new w("", function() {
			t5(5)
		}, bB.on)), r9.push(new w("", function() {
			t5(6)
		}, bB.op)), t1 = new Array(r9.length);
	for (var aB = 0; aB < r9.length; aB++) r9[aB].button.style.position = "absolute", t1[aB] = [new t6(e3[aB], r9[aB].button, .25, .45), new t6("", r9[aB].button, .53, .84, 1)], r9[aB].button.style.height = r9[aB].button.style.maxHeight = "100%", r9[
		aB].button.top = bA.qa.qj(0), sb.appendChild(r9[aB].button);
	t0.appendChild(sb), sy.appendChild(sz), sy.appendChild(t0)
}

function tI(tJ, tK, tL, tM, rH, rI) {
	var tN = document.createElement("div"),
		tO = document.createElement("div"),
		tP = document.createElement("div"),
		tQ = document.createElement("div"),
		tR = document.createElement("div"),
		tS = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("div"),
		tV = document.createElement("span"),
		tW = document.createElement("div");
	this.tX = new rG(rH, rI), this.tY = new tZ(rI), this.ta = [tJ, tK, tL, tM], this.te = function(tf) {
		tf = (tf / 10).toFixed(1) + "%";
		tU.style.width = tf, tV.innerHTML = tf
	}, this.tg = function() {
		this.tY.rr(tS), this.tX.show(tS)
	}, this.th = function() {
		this.tX.rr(tS), this.tY.show(tS)
	}, this.ti = function() {
		return tO
	}, this.show = function() {
		document.body.appendChild(tN)
	}, this.rr = function() {
		document.body.removeChild(tN)
	}, this.resize = function(tj) {
		var tk = 1 - .4 * a0.a1.hw() * (h.i > 1.6 * h.j),
			tl = bA.qa.rt(.05 * tk),
			tm = h.j > h.i,
			tn = bA.qa.rt(.07 * tk + .03 * tm),
			to = bA.qa.rt(.04 + .02 * tm),
			tm = bA.qa.rt(.02 * tk + .01 * tm),
			tq = bA.qa.rt(.025);
		tN.style.font = bA.qa.sO(0, tq), tk < 1 && (tq = bA.qa.sO(0, tk * tq), tP.style.font = tq, tR.style.font = tq, tW.style.font = tq, tT.style.font = tq, tQ.style.font = tq), tO.style.height = bA.qa.qj(tl), tO.style.font = bA.qa.sO(0, .72 *
				tl), bA.qa.qk(tO, 2), tP.style.top = bA.qa.qj(tl), tP.style.height = bA.qa.qj(tn), bA.qa.qk(tP, 2), tQ.style.font = bA.qa.sO(0, tk * bA.qa.rt(.02)), tQ.style.top = bA.qa.qj(tl + tn), tQ.style.height = bA.qa.qj(to), bA.qa.qk(tQ,
			2), tR.style.top = bA.qa.qj(tl + tn + to), tR.style.height = bA.qa.qj(tn), bA.qa.qk(tR, 2), tS.style.top = bA.qa.qj(tl + tn + to + tn), tS.style.height = bA.qa.qj(h.j / h.k - tl - 3 * tn - to - tm), tT.style.top = bA.qa.qj(h.j / h.k -
				tn - tm), tT.style.height = bA.qa.qj(tm), bA.qa.qk(tT, 8), tV.style.font = bA.qa.sO(0, .8 * tm), tW.style.top = bA.qa.qj(h.j / h.k - tn), tW.style.height = bA.qa.qj(tn), bA.qa.qk(tW, 8), tJ.resize(tP), tK.resize(tP), tL.resize(
			tP), tM.resize(tP), tj ? this.tX.resize(tS) : this.tY.resize()
	};
	rH = this;
	tN.style.position = "absolute", tN.style.top = "0", tN.style.left = "0", tN.style.width = "100%", tN.style.height = "100%", tN.style.backgroundColor = bB.nh, bJ.r2() || (tN.style.backdropFilter = "blur(4px)", tN.style.webkitBackdropFilter =
		"blur(4px)"), tO.style.position = "absolute", tO.style.top = "0", tO.style.left = "0", tO.style.width = "100%", tO.style.display = "flex", tO.style.alignItems = "center";
	for (var g = [tP, tQ, tR, tW], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qa.t4(g[aB]);
	tS.style.position = "absolute", tS.style.left = "0", tS.style.width = "100%", tS.style.font = "inherit", tT.style.position = "absolute", tT.style.left = "0", tT.style.width = "100%", tU.style.position = "absolute", tU.style.top = "0", tU.style
		.left = "0", tU.style.height = "100%", tU.style.width = "50%", tU.style.backgroundColor = bB.o4, tV.innerHTML = "", tV.style.position = "absolute", tV.style.top = "50%", tV.style.left = "50%", tV.style.transform = "translate(-50%, -50%)", tO
		.appendChild(function() {
			var td = document.createElement("h1");
			return td.textContent = L(23), td.style.margin = "0 auto 0.15em auto", td.style.fontFamily = "Arial Black, Trebuchet MS", td.style.fontSize = "inherit", td.style.fontWeight = "inherit", td
		}()), tP.appendChild(tJ.qF), tQ.appendChild(tK.qF), tR.appendChild(tL.qF), tT.appendChild(tU), tT.appendChild(tV), tW.appendChild(tM.qF), tN.appendChild(tO), tN.appendChild(tP), tN.appendChild(tQ), tN.appendChild(tR), tN.appendChild(tS), tN
		.appendChild(tT), tN.appendChild(tW), rH.tY.show(tS)
}

function tZ(rI) {
	var tN = document.createElement("div"),
		tS = document.createElement("div");
	this.mV = function() {
			tS.textContent = "", bn.ts.rr(1);
			for (var rj = document.createDocumentFragment(), tt = bn.y.re[0], tu = bn.tu.tv[tt], tw = bn.tu.tw[tt], aB = 0; aB < tu.length; aB++) ! function(rj, qS, ty, tt) {
				var rY = document.createElement("span");
				rY.textContent = (ty ? "🟢 " : "⚪ ") + bn.kx.tz(qS, tt), rY.style.color = bn.kx.u0(qS.u1), rY.style.cursor = "pointer", rY.style.margin = "0.2em 0.2em 0.2em 0.2em", rY.style.width = rY.style.maxWidth = 2 === tt ? "10em" : "9em",
					rY.style.height = rY.style.maxHeight = "1.4em", rY.style.whiteSpace = "nowrap", rY.style.overflow = "hidden", rY.style.textOverflow = "ellipsis", rY.style.font = "inherit", rY.style.display = "inline-block", bn.kx.u2(qS) && (
						rY.style.textDecoration = "underline"), rY.onclick = function(e) {
						rI(e, qS)
					}, bJ.r2() || (rY.onmouseover = function(e) {
						bn.ts.u3(e, qS, 1)
					}), rj.appendChild(rY)
			}(rj, tu[aB], aB < tw, tt);
			tS.appendChild(rj)
		}, this.show = function(qU) {
			qU.appendChild(tN)
		}, this.rr = function(qU) {
			qU.removeChild(tN)
		}, this.resize = function() {
			tS.style.fontSize = bA.qa.qj(bA.qa.rt(.02, .3))
		}, tN.style.top = "0", tN.style.left = "0", tN.style.width = tN.style.height = "100%", tN.style.overflowX = "hidden", tN.style.overflowY = "auto", tN.style.font = "inherit", tS.style.font = "inherit", tS.style.margin = "0.4em", tN
		.appendChild(tS)
}

function u4(u5) {
	var tN = document.createElement("div"),
		rL = document.createElement("div"),
		u6 = [];

	function qx() {
		bJ.r2() || (this.style.backgroundColor = bA.color.r5(bB.ne, 50))
	}

	function qy() {
		this.style.backgroundColor = bB.ne
	}
	this.s2 = function(u8, u9) {
			u6[2].textContent = u8 + 1 + " / " + u9
		}, this.show = function(qS) {
			rL.appendChild(bn.rq.transform(bn.kx.rl(qS, bn.kx.rm(qS)))), document.body.appendChild(tN)
		}, this.resize = function() {
			var j = bA.qa.rt(.03, .5);
			tN.style.width = 10 * j + "px", tN.style.font = bA.qa.sO(1, .75 * j), bA.qa.qk(tN, 4), rL.style.top = j + "px", rL.style.font = bA.qa.sO(0, .55 * j), bA.qa.qk(rL, 2), tN.style.height = j + rL.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qa.qk(u6[aB], 6), u6[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u6[aB].style.height = j + "px", bA.qa.qk(u6[aB], 2);
			u6[2].style.width = 4 * j + "px", u6[1].style.left = 2 * j + "px", u6[2].style.left = 4 * j + "px", u6[3].style.left = 8 * j + "px"
		}, this.uA = function() {
			for (var aB = 0; aB < 4; aB++) u6[aB].onclick = null, u6[aB].onmouseover = null, u6[aB].onmouseout = null;
			document.body.removeChild(tN), tN = rL = u6 = null
		}, tN.style.position = "absolute", tN.style.color = bB.ni, tN.style.zIndex = "3", tN.style.right = "0", tN.style.top = "0", rL.style.position = "absolute", rL.style.height = "auto", rL.style.color = bB.ni, rL.style.backgroundColor = bB.ne, rL
		.style.left = "0", rL.style.width = "100%", rL.style.overflowWrap = "break-word", tN.appendChild(rL);
	for (var aB = 0; aB < 4; aB++) u6[aB] = document.createElement("div"), u6[aB].style.position = "absolute", u6[aB].style.backgroundColor = bB.ne, u6[aB].style.color = bB.ni, u6[aB].style.top = "0", u6[aB].style.display = "flex", u6[aB].style
		.justifyContent = "center", u6[aB].style.alignItems = "center", u6[aB].style.userSelect = "none", u6[aB].style.outline = "none", u6[aB].style.font = "inherit", 2 !== (u6[aB].u7 = aB) && (u6[aB].onclick = u5, u6[aB].onmouseover = qx, u6[aB]
			.onmouseout = qy), tN.appendChild(u6[aB]);
	u6[0].textContent = "◀", u6[1].textContent = "▶", u6[3].textContent = "✖"
}

function uB(u5) {
	var sG = document.createElement("div");

	function qx() {
		bJ.r2() || (sG.style.backgroundColor = bA.color.r5(bB.ne, 50))
	}

	function qy() {
		sG.style.backgroundColor = bB.ne
	}
	this.s2 = function(u9) {
			sG.textContent = u9
		}, this.show = function() {
			document.body.appendChild(sG)
		}, this.resize = function() {
			var j = bA.qa.rt(.03, .5);
			sG.style.width = 2 * j + "px", sG.style.height = j + "px", sG.style.font = bA.qa.sO(1, .75 * j), bA.qa.qk(sG, 4), bA.qa.qk(sG, 2)
		}, this.uA = function() {
			sG.onclick = null, sG.onmouseover = null, sG.onmouseout = null, document.body.removeChild(sG), sG = null
		}, sG.style.position = "absolute", qy(), sG.style.color = bB.ni, sG.style.zIndex = "3", sG.style.right = "0", sG.style.top = "0", sG.style.display = "flex", sG.style.justifyContent = "center", sG.style.alignItems = "center", sG.style
		.userSelect = "none", sG.style.outline = "none", sG.onclick = u5, sG.onmouseover = qx, sG.onmouseout = qy
}

function uC(s8) {
	var tN = document.createElement("div"),
		uD = document.createElement("div"),
		sH = (this.eu = 0, this.ew = 0);

	function uF() {
		bn.uG.rr()
	}
	this.r9 = s8, this.show = function(eu, ew, uI) {
		if (sH) return [0, 0];
		sH = 1, this.eu = eu, this.ew = ew,
			function(self, uI) {
				var i = bA.qa.rt(.16, .7),
					j = s8.length * i / 3,
					uK = h.i / h.k,
					uL = h.j / h.k,
					nK = Math.min(1, Math.min(uK / i, uL / j));
				i *= nK, j *= nK, uI && (self.eu += bA.qa.rt(.03, .5)), self.eu = bL.hv(self.eu, 0, uK - i), self.ew = bL.hv(self.ew, 0, uL - j), uD.style.left = self.eu + "px", uD.style.top = self.ew + "px", uD.style.width = i + "px", uD.style
					.height = j + "px", uD.style.font = bA.qa.sO(0, .34 * j / s8.length), bA.qa.qk(uD, 5);
				for (var aB = 1; aB < s8.length; aB++) bA.qa.qk(s8[aB].button, 8)
			}(this, uI), document.body.appendChild(tN)
	}, this.rr = function() {
		sH && (sH = 0, tN.removeEventListener("click", uF), document.body.removeChild(tN))
	};
	for (var aB = 0; aB < s8.length; aB++) new rX("" + (1 + aB), s8[aB].button, 0, 1);
	tN.style.position = "fixed", tN.style.top = "0", tN.style.left = "0", tN.style.width = "100%", tN.style.height = "100%", tN.style.zIndex = "5", uD.style.position = "absolute",
		function() {
			for (var uH = (100 / s8.length).toFixed(2) + "%", aB = 0; aB < s8.length; aB++) s8[aB].button.style.width = "100%", s8[aB].button.style.height = s8[aB].button.style.maxHeight = uH, s8[aB].button.style.padding = "0.0em 0.9em", uD
				.appendChild(s8[aB].button)
		}(), tN.appendChild(uD), tN.addEventListener("click", uF)
}

function uM(sS, uN) {
	this.qQ = [];
	var uO = this.qQ;

	function click() {
		for (var aB = 0; aB < uO.length; aB++) uO[aB].textContent = uO[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e8 = parseInt(this.name);
		void 0 !== sS.e8 && bj.s1.s2(sS.e8, e8), uN && uN(e8)
	}
	for (var uP, en = sS.uQ.length, aB = 0; aB < en; aB++)(uP = document.createElement("p")).textContent = "⚪ " + sS.uQ[aB], uP.style.margin = "0", uP.name = "" + aB, uP.style.cursor = "pointer", uP.style.fontSize = "1em", uP.addEventListener(
		"click", click), uO.push(uP);
	uO[sS.value].textContent = uO[sS.value].textContent.replace("⚪", "🟢")
}

function uR(title, uS, uT) {
	var sy = document.createElement("div"),
		uU = document.createElement("div"),
		sb = document.createElement("div"),
		uV = document.createElement("div"),
		uW = document.createElement("div");
	this.uX = sb, this.uY = uS, this.show = function() {
			!1 !== uT ? document.body.appendChild(sy) : (document.body.appendChild(uU), document.body.appendChild(uV))
		}, this.rr = function() {
			!1 !== uT ? document.body.removeChild(sy) : (document.body.removeChild(uU), document.body.removeChild(uV))
		}, this.uc = function() {
			var ru = bA.qa.rt(.1),
				rs = bA.qa.rt(.08 + .04 * (h.ud < 1));
			return {
				ru: ru,
				rs: rs,
				ue: h.j / h.k - ru - rs
			}
		}, this.resize = function(sC) {
			var en = uS.length,
				uf = this.uc(),
				ru = uf.ru,
				rs = uf.rs;
			for (uU.style.height = bA.qa.qj(ru), bA.qa.qk(uU, 2), uV.style.top = bA.qa.qj(h.j / h.k - rs), uV.style.height = bA.qa.qj(rs), bA.qa.qk(uV, 8), sb.style.top = bA.qa.qj(ru), sb.style.height = sb.style.maxHeight = bA.qa.qj(uf.ue), uU.style
				.font = bA.qa.sO(0, bA.qa.rt(.02, .3)), uV.style.font = bA.qa.sO(0, bA.qa.rt(.02, .7)), sb.style.font = bA.qa.sO(0, bA.qa.rt(.02, .7)), aB = 1; aB < en; aB++) bA.qa.qk(uS[aB].button, 4);
			for (var sD = 0, aB = 0; aB < en; aB++) sD += uS[aB].button.offsetWidth;
			if (sC && sD < uV.offsetWidth)
				for (aB = 0; aB < en; aB++) uS[aB].button.style.width = (100 * uS[aB].button.offsetWidth / sD).toFixed(2) + "%";
			else
				for (aB = 0; aB < en; aB++) uS[aB].button.style.width = "auto";
			uV.tH && (uV.scrollLeft = uV.tH), sC || this.resize(!0)
		}, this.ug = function() {
			var uf = this.uc(),
				f8 = h.k;
			uh.fillStyle = bB.ne, uh.fillRect(0, f8 * uf.ru, h.i, f8 * uf.ue)
		}, sy.style.position = "absolute", sy.style.top = "0", sy.style.left = "0", sy.style.width = "100%", sy.style.height = "100%", uU.style.position = "absolute", uU.style.top = "0", uU.style.left = "0", uU.style.width = "100%", uU.style
		.display = "flex", uU.style.backgroundColor = bB.ne, uV.style.position = "absolute", uV.style.left = "0", uV.style.width = "100%", bA.qa.t4(uV), uW.style.height = uW.style.maxHeight = "100%", sb.style.position = "absolute", sb.style.width =
		"100%", sb.style.backgroundColor = bB.ne,
		function() {
			for (var aB = 0; aB < uS.length; aB++) uS[aB].button.style.height = "100%", uS[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uS.length; aB++) uW.appendChild(uS[aB].button);
	uU.appendChild(function() {
		var ub = document.createElement("h1");
		return ub.textContent = title, ub.style.margin = "auto", ub.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", ub.style.fontFamily = "Arial Black, Trebuchet MS", ub
	}()), uV.appendChild(uW), !1 !== uT && (sy.appendChild(sb), sy.appendChild(uU), sy.appendChild(uV))
}

function rX(ui, uj, uk, ul) {
	var self;
	this.rY = document.createElement("span"), (self = this).rY.textContent = ui, self.rY.style.color = bB.ni, self.rY.style.position = "absolute", self.rY.style.font = "inherit", ul ? self.rY.style.bottom = "0.06em" : self.rY.style.top = "0.12em",
		uk ? self.rY.style.left = "0.2em" : self.rY.style.right = "0.2em", self.rY.style.fontSize = "0.6em", self.rY.style.pointerEvents = "none", self.rY.style.whiteSpace = "pre", uj.style.position = "relative", uj.style.overflow = "hidden", uj
		.appendChild(self.rY)
}

function t6(ui, uj, um, un, uo) {
	var self;
	this.rY = document.createElement("span"), this.resize = function() {
			this.rY.style.fontSize = ((un - um) * uj.offsetHeight).toFixed(1) + "px"
		}, (self = this).rY.textContent = ui, self.rY.style.color = bB.ni, self.rY.style.font = "inherit", self.rY.style.margin = "0.1em 0.6em", self.rY.style.pointerEvents = "none", uo && (self.rY.style.fontWeight = "bold"), self.rY.style
		.whiteSpace = "nowrap", self.rY.style.display = "block", uj.appendChild(self.rY)
}

function up(uq, ur, us, ut) {
	var uu = document.createElement("textarea"),
		uv = (this.e = uu, !0);

	function v1() {
		uu.select(), document.execCommand("copy")
	}
	this.resize = function() {
			ur && bA.qa.qk(uu, 5)
		}, this.uw = function(ux) {
			uu.value = ux
		}, this.uy = function() {
			return uu.value
		}, this.uz = function() {
			uu.select()
		}, this.clear = function() {
			uu.value = ""
		}, this.v0 = function() {
			uv && navigator.clipboard ? (uu.select(), navigator.clipboard.writeText(uu.value).catch(function() {
				uv = !1, v1()
			})) : v1()
		}, uu.setAttribute("id", "textArea" + t.y.sV++), uu.setAttribute("autocomplete", "off"), uq && uu.setAttribute("placeholder", uq), uu.style.top = "0", uu.style.left = "0", uu.style.width = "100%", uu.style.height = "100%", uu.style
		.userSelect = "none", uu.style.outline = "none", uu.style.resize = "none", uu.style.border = "none", uu.style.color = bB.ni, uu.style.backgroundColor = bB.nb, ut ? (uu.style.fontSize = "1em", uu.rows = 6, uu.style.padding = "0.25em") : (uu
			.style.padding = "0.45em", uu.style.fontSize = "1.2em"), us && uu.addEventListener("input", function(e) {
			us(e)
		}), uu.addEventListener("focus", function() {
			h.sW++
		}), uu.addEventListener("blur", function() {
			h.sW--
		})
}

function dI() {
	this.qr = new v2, this.eK = new v3, this.s1 = new v4, this.y = new v5, this.dd = function() {
		this.eK.dd(), (new v6).dd()
	}
}

function v3() {
	function v7(aB, type, vE, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type || 0,
			value: vE || 0,
			vE: vE || 0,
			dv: dv || 0
		})
	}

	function v8(aB, type, vE, dv) {
		bj.eK.data.push({
			e8: aB,
			type: type,
			value: vE || "",
			vE: vE || "",
			dv: dv || 0
		})
	}

	function v9(nQ) {
		for (var aB = bj.eK.data.length; aB < nQ; aB++) bj.eK.data.push(null)
	}
	this.data = [], this.dd = function() {
		v7(0, 1, 0, 5), v7(1, 1, 1), v7(2, 0), v8(3, 2), v7(4, 1), v8(5, 2, "Trebuchet MS", 1), v7(6, 0), v7(7, 0, 0), v7(8, 0), v7(9, 1, 1), v7(10, 1), v7(11, 1, 1), v8(12, 2, navigator.language), v7(13), v7(14), v9(100), v8(100, 2), v8(101, 2),
			v8(102, 2), v8(103, 2), v8(104, 2), v8(105, 2), v8(106, 2), v7(107), v7(108), v7(109), v8(110, 2), v7(111), v7(112), v7(113), v8(114, 2), v7(115), v8(116, 2), v7(117, 1), v8(118, 2, "", 2), v7(119, 1, 0, 1), v8(120, 2), v7(121, 1, ~~(
				262144 * Math.random())), v8(122, 2, "Player " + Math.floor(1e3 * Math.random())), v7(123), v8(124), v7(125, 1), v8(126, 2), v7(127, 0, 1), v7(128), v7(129), v7(130), v7(131), v7(132), v8(133, 2), v7(134, 0, 5), v8(135, 2), v8(
				136, 2), v7(137), v7(138), v7(139), v7(140), v7(141), v7(142), v7(143), v7(144), v8(145, 2), v7(146), v7(147), v8(148, 2), v7(149), v7(150, 0, 1), v8(151, 2), v7(152, 0, 5), v7(153, 1), v7(154, 1), v8(155, 2), v8(156, 2), v7(157),
			v7(158), v7(159), v7(160), v9(180), v7(180, 0), v7(181, 0)
	}, this.s2 = function(e8, value) {
		this.data[e8].value = value
	}, this.vA = function(e8, value) {
		this.s2(e8, value), bj.qr.save(e8, String(value)), bj.qr.save(e8, String(this.data[e8].dv), !0)
	}, this.vB = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bj.qr.save(aB, String(this.data[aB].value)), bj.qr.save(aB, String(this.data[aB].dv), !0))
	}, this.vC = function(e8) {
		return Number(this.data[e8].value)
	}, this.vD = function(e8) {
		return String(this.data[e8].value)
	}
}

function v2() {
	this.vF = function(e8, dv) {
		return Number(this.vG(e8, dv))
	}, this.vG = function(e8, dv) {
		var fF = null;
		return 0 === a0.id ? a0.vH && (fF = a0.vH.getItem((dv ? "v" : "d") + e8)) : 1 === a0.id ? fF = a0.vI.loadString((dv ? 1e3 : 2e3) + e8) : 2 === a0.id && (fF = a0.vJ[(dv ? "v" : "d") + e8]), fF && 0 !== fF.length ? fF : null
	}, this.vK = function(en, vL) {
		var g = [],
			vM = vL ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vH)
				for (aB = 0; aB < en; aB++) g.push(a0.vH.getItem(vM + aB))
		} else if (1 === a0.id)
			for (var vN = vL ? 5e3 : 3e3, aB = 0; aB < en; aB++) g.push(a0.vI.loadString(vN + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) g.push(a0.vJ[vM + aB]);
		return g
	}, this.save = function(e8, value, dv) {
		var vO = (dv ? "v" : "d") + e8;
		if (0 === a0.id) {
			if (a0.vH && bj.eK.data[140].value) try {
				a0.vH.setItem(vO, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vI.saveString((dv ? 1e3 : 2e3) + e8, value) : 2 === a0.id && (a0.vJ[vO] = value, a0.vP.postMessage(vO + " " + value))
	}, this.vQ = function(g, vL) {
		var en = g.length,
			vM = vL ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vH && bj.eK.data[140].value) try {
				for (aB = 0; aB < en; aB++) a0.vH.setItem(vM + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vN = vL ? 5e3 : 3e3, aB = 0; aB < en; aB++) a0.vI.saveString(vN + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < en; aB++) a0.vJ[vM + aB] = g[aB], a0.vP.postMessage(vM + aB + " " + g[aB])
	}
}

function v6() {
	this.dd = function() {
		! function() {
			var data = bj.eK.data;
			0 === data[2].dv && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vE = 1);
			0 === data[100].dv && (data[100].value = data[100].vE = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fF, data = bj.eK.data,
			en = data.length;
		for (aB = 0; aB < en; aB++) data[aB] && data[aB].dv === bj.qr.vF(aB, !0) && (fF = bj.qr.vG(aB), data[aB].value = null === fF ? data[aB].vE : 2 === data[aB].type ? fF : Number(fF))
	}
}

function v5() {
	function vW(g) {
		if (0 === g.length) bj.s1.s2(116, "");
		else {
			for (var vZ = g[0], aB = 1; aB < g.length; aB++) vZ += ";" + g[aB];
			bj.s1.s2(116, vZ)
		}
	}
	this.vT = function() {
		bj.eK.data[110].value.length && (bj.eK.data[106].value = bj.eK.data[110], bj.s1.s2(110, ""), this.vU())
	}, this.vU = function() {
		var g = bj.eK.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eK.data[106].value), g.unshift(bj.eK.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vV = [], aB = 0; aB < g.length; aB += 2) vV.push(g[aB]);
		vW(g), bj.eK.data[117].value = 0, bj.eK.data[117].uQ = vV
	}, this.vX = function(e8) {
		bj.eK.data[117].uQ.splice(e8, 1), bj.eK.data[117].value = Math.min(e8, bj.eK.data[117].uQ.length - 1);
		var g = bj.eK.data[116].value.split(";");
		g.splice(2 * e8, 2), vW(g)
	}, this.vY = function(e8) {
		var g = bj.eK.data[116].value.split(";");
		return {
			sm: g[2 * e8],
			password: g[2 * e8 + 1]
		}
	}, this.va = function() {
		var fF = bL.hv(bj.eK.data[121].value, -1, 262143);
		return fF = -1 === fF ? ~~(262144 * Math.random()) : fF
	}
}

function v4() {
	this.s2 = function(e8, value) {
		bj.eK.data[e8].value !== value && (bj.eK.vA(e8, value), 0 === e8 ? (t.x(), b7.dd(), t.u(2)) : 1 === e8 ? h.dp(1) : 2 === e8 ? h.dp(0) : 5 === e8 && (bA.qa.vb(), h.dp(0)))
	}, this.vc = function() {
		for (var data = bj.eK.data, aB = 0; aB < 100; aB++) data[aB] && bj.eK.vA(aB, data[aB].vE);
		bA.qa.vb(), h.dp(1), b7.dd()
	}, this.vd = function() {
		for (var data = bj.eK.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eK.s2(aB, data[aB].vE)
	}, this.ve = function() {
		for (var f7 = bj.eK, aB = 128; aB < 135; aB++) f7.vA(aB, f7.data[aB].vE)
	}, this.vf = function(data) {
		bj.s1.s2(109, data.sn), bj.s1.s2(107, data.vg), bj.s1.s2(108, data.vh), bj.s1.s2(112, data.vi), bj.s1.s2(111, data.vj), bj.s1.s2(113, data.vk), bj.s1.s2(135, data.vl), bj.s1.s2(136, data.vm), bj.s1.s2(137, data.vn), bj.s1.s2(138, data
			.vo), bj.s1.s2(139, data.vp), bj.s1.s2(141, data.vq), bj.s1.s2(142, data.vr), bj.s1.s2(143, data.vs), bj.s1.s2(144, data.vt)
	}
}

function c4() {
	this.sr = new vu, this.vv = new vw, this.vx = new vy, this.dd = function() {
		this.sr.dd()
	}
}

function vw() {
	this.vz = function(size) {
		for (var w0 = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(w0.ph(16)));
		return g.join("")
	}, this.w1 = function(qH) {
		return 20 < (qH = qH.trim()).length ? qH.substring(0, 20) : qH
	}
}

function vu() {
	var w2 = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (w2[50] = 37, aB = 0; aB < 10; aB++) w2[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) w2[aB + 20] = aB + 11, w2[aB + 52] = aB + 38
	}, this.w3 = function(qH) {
		return qH.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.w4 = function(qH, size) {
		if ((qH = this.w3(qH)).length > size) return qH.substring(0, size);
		for (; qH.length < size;) qH = "-" + qH;
		return qH
	}, this.w5 = function(qH) {
		for (var w6 = w2, en = qH.length, g = new Uint8Array(en), aB = 0; aB < en; aB++) g[aB] = w6[qH.charCodeAt(aB) - 45];
		return g
	}, this.w7 = function(w8) {
		bD.a7(6 * w8.length), this.w9(w8), bH.dd(bD.aC)
	}, this.w9 = function(w8) {
		for (var en = w8.length, i = bD, aB = 0; aB < en; aB++) i.a8(6, w8[aB])
	}, this.wA = function(qH) {
		this.w9(this.w5(qH))
	}, this.wB = function(qH, size) {
		this.w9(this.w5(this.w4(qH, size)))
	}, this.wC = function(qH, size) {
		for (var g = this.w5(this.w4(qH, size)), fF = 0, nK = 1, aB = g.length - 1; 0 <= aB; aB--) fF += nK * g[aB], nK *= 64;
		return fF
	}
}

function wD() {
	var i, j, wE;

	function we(hF, eq, wc, wJ, wX) {
		eq = wd(hF, eq + 1 + 2 * wJ & 3);
		! function(hF, kl) {
			return 1 < Math.abs(hF % i - kl % i) || 1 < Math.abs(wh(hF) - wh(kl))
		}(hF, eq) && 0 === wX[eq << 2] && (wX[eq << 2] = wc)
	}

	function wh(gL) {
		return Math.floor((gL + .5) / i) % j
	}

	function wd(gL, eq) {
		return gL + wE[eq]
	}
	this.wF = function(qH) {
		var aB, wG, en, wH, w0 = bH;
		for (bG.sr.w7(bG.sr.w5(qH)), bS.wK.wL[bS.eT].i = bS.ey = i = w0.ph(12), bS.wK.wL[bS.eT].j = bS.ez = j = w0.ph(12), wE = [-i, -1, i, 1], bS.wU = document.createElement("canvas"), bS.wU.width = bS.ey, bS.wU.height = bS.ez, bS.wQ = bS.wU
			.getContext("2d", {
				alpha: !1
			}), bS.wR = bS.wV = null, bS.wR = bS.wQ.getImageData(0, 0, bS.ey, bS.ez), bS.wV = bS.wR.data, bA.qi.wW(bS.wV), en = w0.ph(12), wG = w0.ph(5), wH = wN(i * j - 1), aB = 0; aB < en; aB++) ! function(l3, gL, wI, wJ) {
			var aB, eq, w0 = bH,
				wX = bS.wV,
				wY = gL,
				wZ = gL,
				wa = 0,
				wb = 1 + wI,
				wc = 2 - wI;
			for (wX[gL << 2] = wb, aB = 0; aB < l3; aB++) eq = w0.ph(2), gL = wd(gL, eq), wX[gL << 2] === wb ? wa % 2 == 1 && we(wZ, wa + 2 * wJ + 3, wc, wJ, wX) : wX[gL << 2] = wb, we(gL, eq, wc, wJ, wX), we(wZ, eq, wc, wJ, wX), wZ = gL,
				wa = eq;
			wd(gL, 0) === wY ? (we(gL, 0, wc, wJ, wX), we(wY, 0, wc, wJ, wX)) : wd(gL, 1) === wY && (we(gL, 0, wc, wJ, wX), we(wY, 2, wc, wJ, wX));
			0 === l3 && (we(wY, 0, wc, wJ, wX), we(wY, 2, wc, wJ, wX))
		}(w0.ph(wG), w0.ph(wH), 1 === w0.ph(1), 1 === w0.ph(1));
		var eu, ew, hf, wi, wj, wk, wX = bS.wV,
			wl = !0,
			wm = bS.wK.wL[bS.eT].wm,
			wn = bS.wK.wL[bS.eT].wn;
		for (ew = 0; ew < j; ew++)
			for (wi = !0, wj = wl, eu = wk = 0; eu < i; eu++) hf = 4 * ew * i + 4 * eu, wk <= eu && 0 < wX[hf] && (wj = 2 === wX[hf], wi) && (wi = !1, wj !== wl) ? (wl = wj, wk = eu + 1, eu = -1) : (wj ? (wX[hf] = wn[0], wX[1 + hf] = wn[1], wX[
				2 + hf] = wn[2]) : (wX[hf] = wm[0], wX[1 + hf] = wm[1], wX[2 + hf] = wm[2]), wX[3 + hf] = 255);
		bS.wQ.putImageData(bS.wR, 0, 0), bS.wS = !0, bS.wT.dd(), bf.dl = !0
	}
}

function vy() {
	this.wF = function(wo) {
		for (var w0 = bH, size = w0.ph(wo), wp = 7 + 9 * w0.ph(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(w0.ph(wp)));
		return g.join("")
	}
}

function c9() {
	var sJ, sK, wq, wr, ws, wt, wu, wv, ww, wx;

	function wz() {
		var x2 = aD.x2;
		for (ww = x2; ww < aD.ek; ww++) wy();
		for (ww = aD.hB ? aD.kA : 0; ww < x2; ww++) {
			if (!x3()) {
				for (var f7 = aD.x7 = ww; f7 < x2; f7++) ww = f7, wy();
				return
			}
			x6(wt + sJ * ws + bL.du(ws, 2), wu + sK * ws + bL.du(ws, 2))
		}
	}

	function xZ(player) {
		for (var ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, ew = ih[player]; ew <= ii[player]; ew++)
			for (var eu = ie[player]; eu <= ig[player]; eu++) {
				var eR = ac.xa(eu, ew);
				ac.gN(eR) && (ac.jM(eR) ? ac.gI(eR, player) : ac.xb(eR, player))
			}
	}

	function xY(g, t8, t9) {
		var dt = g[t8];
		g[t8] = g[t9], g[t9] = dt
	}

	function x3() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sJ = bL.du(wq * ay.random(), ay.value(100)), sK = bL.du(wr * ay.random(), ay.value(100)), xg()) return 1;
			return
		}() || function() {
			var i7, iA, f6, x5, f7, x4;
			for (i7 = bL.du(wq * ay.random(), ay.value(100)), iA = bL.du(wr * ay.random(), ay.value(100)), f6 = 40; 1 <= f6; f6--)
				for (x5 = wr - f6; 0 <= x5; x5 -= 40)
					for (sK = (x5 + iA) % wr, f7 = 40; 1 <= f7; f7--)
						for (x4 = wq - f7; 0 <= x4; x4 -= 40)
							if (sJ = (x4 + i7) % wq, xg()) return 1;
			return
		}()
	}

	function xg() {
		for (var gL, xi, gap = bL.du(ws - wv, 2), xj = wu + sK * ws + gap, xk = wt + sJ * ws + gap, xh = xj + wv - 1; xj <= xh; xh--)
			for (xi = xk + wv - 1; xk <= xi; xi--)
				if (gL = ac.xa(xi, xh), !ac.ei(gL) || ac.jM(gL)) return;
		return 1
	}

	function x6(x4, x5) {
		wy(), xl(x4 - 2, x5 - 2)
	}

	function wy() {
		ag.mi[ww] = 0, ag.gb[ww] = ag.xW[ww] = 0, ag.gF[ww] = [], ag.gT[ww] = [], ag.gU[ww] = [], ag.fD[ww] = [], ag.ie[ww] = ag.ih[ww] = ag.ig[ww] = ag.ii[ww] = 0
	}

	function xl(x4, x5) {
		var gL, aB, xm, xn;
		for (ag.mi[ww] = 1, ag.ie[ww] = x4 + 10, ag.ih[ww] = x5 + 10, ag.ii[ww] = ag.ig[ww] = 0, xm = x4; xm < x4 + 4; xm++)
			for (xn = x5; xn < x5 + 4; xn++)(x4 < xm && xm < x4 + 3 || x5 < xn && xn < x5 + 3) && (gL = ac.xa(xm, xn), ac.ei(gL)) && (ag.ie[ww] = Math.min(xm, ag.ie[ww]), ag.ig[ww] = Math.max(xm, ag.ig[ww]), ag.ih[ww] = Math.min(xn, ag.ih[ww]), ag
				.ii[ww] = Math.max(xn, ag.ii[ww]), wx[ag.gb[ww]] = gL, ag.gb[ww]++, ac.xb(gL, ww));
		for (ag.xW[ww] = ag.gb[ww], aB = ag.gb[ww] - 1; 0 <= aB; aB--) ac.xo(wx[aB], ww) ? (ac.gI(wx[aB], ww), ag.gT[ww].push(wx[aB])) : ac.xp(wx[aB]) ? (ac.gI(wx[aB], ww), ag.gU[ww].push(wx[aB])) : ac.xq(wx[aB]) && (ac.gI(wx[aB], ww), ag.fD[ww]
			.push(wx[aB]))
	}
	this.dd = function() {
		if (wx = new Array(12), wv = 6, ws = 10, wq = bL.du(bS.ey, ws), wr = bL.du(bS.ez, ws), wt = bL.du(bS.ey - ws * wq, 2), wu = bL.du(bS.ez - ws * wr, 2), aD.hB)
			for (var aB = 0; aB < aD.kA; aB++) ww = aB, wy(), ag.mi[ww] = 1;
		(0 === aD.data.spawningType ? wz : 1 === aD.data.spawningType ? (wz(), function() {
			var x8 = aD.x9;
			aD.xA || x8++;
			if (!(x8 < 3)) {
				for (var data = aD.data, jR = (aD.hB ? aD.kA : 0) + data.teamPlayerCount[0], nQ = aD.x7, xB = new Uint32Array(x8), xC = new Uint32Array(x8), xD = new Uint16Array(x8), xE = new Uint16Array(x8), el = bg.el, ie = ag.ie, ih =
						ag.ih, ig = ag.ig, ii = ag.ii, fS = bO.fS, fT = bO.fT, aB = jR; aB < nQ; aB++) fS[aB] = ie[aB] + ig[aB] >> 1, fT[aB] = ih[aB] + ii[aB] >> 1;
				for (aB = jR; aB < nQ; aB++) {
					var id = el[aB];
					xB[id] += fS[aB], xC[id] += fT[aB]
				}
				var kX = bg.kX;
				for (aB = 1; aB < x8; aB++) {
					var gG = Math.max(data.teamPlayerCount[kX[aB]], 1);
					xD[aB] = bL.du(xB[aB], gG), xE[aB] = bL.du(xC[aB], gG)
				}
				var xF = bg.xF,
					xG = bg.xG,
					xH = bg.xH,
					fR = bO.fR;
				for (aB = 0; aB < 512; aB++) fR[aB] = aB;
				for (var e7 = 0; e7 < 2 + (4 <= x8); e7++)
					for (aB = jR; aB < nQ; aB++) {
						for (var hF = aB, xI = fR[hF], xJ = 1, f3 = bL.xK(fS[xI] - xD[1], fT[xI] - xE[1]), f6 = 2; f6 < x8; f6++) {
							var xL = bL.xK(fS[xI] - xD[f6], fT[xI] - xE[f6]);
							xL < f3 && (f3 = xL, xJ = f6)
						}
						var xM = el[hF];
						if (xJ !== xM) {
							if (2 === e7 && 4 <= x8) {
								var xN = Math.max((xJ + 1) % x8, 1),
									xO = bL.xK(fS[xI] - xD[xN], fT[xI] - xE[xN]);
								for (f6 = 1; f6 < x8; f6++) xL = bL.xK(fS[xI] - xD[f6], fT[xI] - xE[f6]), f3 < xL && xL < xO && (xO = xL, xN = f6);
								xN !== xM && bL.xK(xD[xM] - xD[xN], xE[xM] - xE[xN]) < bL.xK(xD[xM] - xD[xJ], xE[xM] - xE[xJ]) && (xJ = xN)
							}
							var xP = kX[xJ],
								xQ = xG[xP] + (aD.hB ? 0 : xH[xP]),
								kl = xF[xQ],
								xR = fR[kl],
								xS = xG[xP + 1];
							f3 = bL.xK(fS[xR] - xD[xM], fT[xR] - xE[xM]);
							for (var f8 = xQ + 1; f8 < xS; f8++) {
								var xT = xF[f8],
									xU = fR[xT];
								(xL = bL.xK(fS[xU] - xD[xM], fT[xU] - xE[xM])) < f3 && (f3 = xL, kl = xT)
							}
							kl < jR || nQ <= kl || (xR = fR[kl], xB[xM] += fS[xR] - fS[xI], xC[xM] += fT[xR] - fT[xI], xB[xJ] += fS[xI] - fS[xR], xC[xJ] += fT[xI] - fT[xR], gG = data.teamPlayerCount[kX[xM]], xD[xM] = bL.du(xB[xM], gG),
								xE[xM] = bL.du(xC[xM], gG), gG = data.teamPlayerCount[xP], xD[xJ] = bL.du(xB[xJ], gG), xE[xJ] = bL.du(xC[xJ], gG), fR[hF] = xR, fR[kl] = xI)
						}
					}! function() {
						for (var fR = bO.fR, ie = ag.ie, ih = ag.ih, ig = ag.ig, ii = ag.ii, gb = ag.gb, xW = ag.xW, gT = ag.gT, gU = ag.gU, fD = ag.fD, aB = 0; aB < 512; aB++) {
							var xX = fR[aB];
							if (xX !== aB) {
								xY(ie, aB, xX), xY(ih, aB, xX), xY(ig, aB, xX), xY(ii, aB, xX), xY(gb, aB, xX), xY(xW, aB, xX), xY(gT, aB, xX), xY(gU, aB, xX), xY(fD, aB, xX), xZ(aB), xZ(xX), fR[aB] = aB;
								for (var j = xX, gM = fR[j]; gM !== aB;) gM = fR[j = gM];
								fR[j] = xX
							}
						}
					}()
			}
		}) : function() {
			var x2 = aD.x2;
			for (ww = x2; ww < aD.ek; ww++) wy();
			for (ww = aD.hB ? aD.kA : 0; ww < x2; ww++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							x4 = spawningData[2 * ww] + 1,
							spawningData = spawningData[2 * ww + 1] + 1;
						if (3 < x4 && x4 < bS.ey - 5 && 3 < spawningData && spawningData < bS.ez - 5 && ac.ei(ac.xa(x4, spawningData)) && function(x4, x5) {
								var gL, xi, xh;
								for (xh = x5; x5 - 6 < xh; xh--)
									for (xi = x4; x4 - 6 < xi; xi--)
										if (gL = ac.xa(xi, xh), ac.jM(gL)) return;
								return 1
							}(x4 + 3, spawningData + 3)) return x6(x4 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!x3()) {
						for (var f7 = aD.x7 = ww; f7 < x2; f7++) ww = f7, wy();
						return
					}
					var x4 = wt + sJ * ws + bL.du(ws, 2),
						x5 = wu + sK * ws + bL.du(ws, 2);
					x6(x4, x5)
				}
		})(), bd.me[7] = ag.gb[aD.eX]
	}, this.xr = function(jJ, xs, xt) {
		var aB, x4, x5, gL, sJ, sK;
		for (ww = jJ, aB = 0; aB < 20; aB++)
			for (x4 = xs + aB; xs - aB <= x4; x4--)
				for (x5 = xt + aB; xt - aB <= x5; x5--)
					if ((x4 === xs + aB || x4 === xs - aB || x5 === xt + aB || x5 === xt - aB) && 3 < x4 && x4 < bS.ey - 5 && 3 < x5 && x5 < bS.ez - 5 && ac.ei(ac.xa(x4, x5)) && function(x4, x5) {
							var gL, xi, xh;
							for (xh = x5; x5 - 6 < xh; xh--)
								for (xi = x4; x4 - 6 < xi; xi--)
									if (gL = ac.xa(xi, xh), ac.jM(gL) && !ac.xz(ww, gL)) return;
							return 1
						}(x4 + 3, x5 + 3)) {
						if (0 < ag.gb[ww]) {
							for (sK = sJ = gL = void 0, sJ = ag.ig[ww]; sJ >= ag.ie[ww]; sJ--)
								for (sK = ag.ii[ww]; sK >= ag.ih[ww]; sK--) gL = 4 * (sK * bS.ey + sJ), ac.xw(ww, gL) && (ac.xx(gL), ag.gb[ww]--);
							wy()
						}
						return xl(x4 - 1, x5 - 1), !0
					} return !1
	}, this.xy = function(jJ) {
		ww = jJ, x3() ? x6(wt + sJ * ws + bL.du(ws, 2), wu + sK * ws + bL.du(ws, 2)) : wy()
	}
}

function y0() {
	at.y1(), uh.setTransform(hy, 0, 0, hy, 0, 0), uh.imageSmoothingEnabled = hy < 3, uh.drawImage(bS.wU, aS.y2(), aS.y3()), bP.y4.ug(), uh.drawImage(y5, aS.y2(), aS.y3()), at.ug(), bN.ug(), af.ug(), (aD.nB ? (bh.ug(), bC) : (aN.ug(), aV.ug(), aR
	.ug(), bC.ug(), aw.ug(), aW.ug(), aS.ug(), aQ.ug(), bh.ug(), aU.ug(), aP.ug(), aM.ug(), aL.ug(), aX.ug(), be.ug(), av)).ug(), t.ug()
}

function y6(y7, i, j) {
	y7.clearRect(0, 0, i, j), y7.fillStyle = bB.nf, y7.fillRect(0, 0, i, j)
}

function y8(y7, i, j, y9) {
	y7.fillStyle = bB.ni, y7.fillRect(0, 0, i, y9), y7.fillRect(0, 0, y9, j), y7.fillRect(i - y9, 0, y9, j), y7.fillRect(0, j - y9, i, y9)
}

function yA(y7, eu, ew, hj, y9, gL, yB) {
	y7.fillStyle = bB.ni;
	var gL = Math.floor(hj * gL),
		sw = (gL += (gL - y9) % 2, Math.floor((gL - y9) / 2)),
		hj = Math.floor((hj - gL) / 2);
	y7.fillRect(eu + hj, ew + hj + sw, gL, y9), yB && y7.fillRect(eu + hj + sw, ew + hj, y9, gL)
}

function yD() {
	this.dd = function() {
		8 === aD.kS && aN.yE()
	}, this.yF = function(yG) {
		var elo = aD.data.elo,
			jQ = (elo[yG] - elo[1 - yG]) / 10,
			jQ = 8 / (1 + Math.pow(2, jQ / 32)),
			jQ = Math.floor(10 * jQ + .5),
			yI = elo[yG] + jQ,
			yJ = this.yK(yI),
			elo = this.yK(elo[1 - yG] - jQ),
			jQ = (0 === yG ? aN.yM(yJ, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yM(elo, yJ, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.yO) * (2e3 + yI) / 1e3).toFixed(2));
		yG === aD.eX ? aN.yP(640, L(24, [jQ]), 40, 0, bB.ni, bB.nf, -1, !1) : aN.yP(640, L(25, [ag.yQ[yG], jQ]), 40, 0, bB.ni, bB.nf, -1, !1)
	}, this.yK = function(elo) {
		return 16e3 === (elo = bL.hv(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.rq = new yR, this.wX = new yS
}

function yS() {
	this.hZ = !1;
	this.yW = [], this.yX = 100;
	var n8, n9, gap, hj, yT, yV, yY = 0,
		yZ = new Array(9),
		ya = [],
		yb = [],
		yc = 0,
		yd = 0,
		ye = 0,
		yf = 0;

	function yr() {
		yZ.sort(function(f6, f7) {
			return f7.kF - f6.kF
		});
		for (var qH = "" + yZ[0].pI, aB = 1; aB < 9; aB++) qH += "," + yZ[aB].pI;
		for (aB = 0; aB < 9; aB++) qH += "," + yZ[aB].kF;
		bj.eK.vA(120, qH)
	}
	this.dd = function() {
		for (var yg = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yg.length; aB++) {
			var color = 6 === yg[aB] ? bB.o8 : bB.ng;
			this.yW.push(bA.canvas.yh(ab.get(3), yg[aB], color))
		}
		for (aB = 0; aB < aj.rq.yi; aB++) yb.push(aj.rq.yj - aj.rq.yi + aB);
		for (aB = 0; aB < aj.rq.yk; aB++) yb.push(aj.rq.yl + aB);
		var ym = aj.rq.yn(bK.ym);
		for (aB = 0; aB < ym.length; aB++) yb.push(ym[aB]);
		! function() {
			var aB, g = bj.eK.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) yZ[aB] = {
					pI: 1015 + aB,
					kF: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fF = parseInt(g[aB]),
						f8 = (fF = 0 <= fF && fF < aj.rq.yj ? fF : 0, parseInt(g[aB + 9]));
					f8 = 0 <= f8 && f8 < 1e3 ? f8 : 0, yZ[aB] = {
						pI: fF,
						kF: f8
					}
				}
		}()
	}, this.show = function(lN, lO, ys) {
		var aB;
		if (yc = lN, yd = lO, yY = ys || 0, this.hZ = !0, ya = [], 0 === yY)
			for (aB = 0; aB < 9; aB++) ya.push(yZ[aB].pI);
		else {
			var f7 = 49 * yY,
				ys = f7 - 49;
			for (ys >= yb.length && (yY = 1, ys = 0, f7 = 49), aB = ys = (f7 = Math.min(f7, yb.length)) - 49; aB < f7; aB++) ya.push(yb[aB])
		}
		ya.push(1024);
		ys = ya.length, hj = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), gap = Math.floor(hj / 3), (ye = 10 * (yT = hj + gap)) > h.i && (ye = h.i, gap = (yT = ye / 10) - (hj = 3 * yT / 4)), yV = bL.du(ys, 10) + !!(ys % 10), (yf = yV * yT) > h
			.j && (yf = h.j, gap = (yT = yf / yV) - (hj = 3 * yT / 4)), ys = .5 * gap;
		n8 = Math.min(Math.max(lN - .5 * ye + ys, ys), h.i - ye + ys), n9 = Math.min(Math.max(lO - .5 * yf + ys, ys), h.j - yf + ys)
	}, this.h0 = function(lN, lO, player) {
		if (!this.hZ) return !1;
		if (this.yu(lN, lO)) {
			lN = bL.hv(bL.du(lN - n8 + .5 * gap, yT), 0, 9);
			if ((lN += 10 * bL.hv(bL.du(lO - n9 + .5 * gap, yT), 0, 9)) >= ya.length) return aL.rr(), !0;
			lO = ya[lN];
			if (1024 === lO) return this.show(yc, yd, yY + 1), !0;
			! function(pI) {
				for (var aB = 0; aB < 9; aB++) yZ[aB].kF = Math.floor(.99 * yZ[aB].kF);
				for (aB = 0; aB < 9; aB++)
					if (pI === yZ[aB].pI) return yZ[aB].kF = Math.min(yZ[aB].kF + 30, 999), yr();
				yZ.splice(5, 0, {
					pI: pI,
					kF: Math.max(yZ[4].kF, 30)
				}), yZ.pop(), yr()
			}(lO), player === aD.eX ? b8.hD.pH(lO) : b8.g9.pW(lO, player)
		}
		return aL.rr(), !0
	}, this.yu = function(lN, lO) {
		return !(lN < n8 - .5 * gap || lO < n9 - .5 * gap || n8 + ye - .5 * gap <= lN || n9 + yf - .5 * gap <= lO)
	}, this.ug = function() {
		uh.fillStyle = bB.nf, uh.fillRect(n8 - .5 * gap, n9 - .5 * gap, ye, yf);
		for (var hf = .5 * bc.yv, en = (uh.lineWidth = bc.yv, uh.strokeStyle = uh.fillStyle = bB.ni, uh.strokeRect(n8 - .5 * gap + hf, n9 - .5 * gap + hf, ye - 2 * hf, yf - 2 * hf), uh.imageSmoothingEnabled = !0, ya.length), aB = 0; aB <
			en; aB++) this.yw(ya[aB], uh, n8 + aB % 10 * yT, n9 + bL.du(aB, 10) * yT, hj);
		uh.imageSmoothingEnabled = !1
	}, this.yw = function(pI, hp, eu, ew, hj) {
		var eR;
		pI >= 1024 - aj.rq.yi ? (eR = hj / this.yX, hp.setTransform(eR, 0, 0, eR, eu, ew), hp.drawImage(this.yW[pI - 1024 + aj.rq.yi], 0, 0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1), hp.font = bA.qa
			.sO(0, .89 * hj), hp.fillText(aj.rq.yx(pI), eu + .5 * hj, ew + (.35 - bA.qa.yy + .56) * hj))
	}
}

function yR() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yi = 13, this.yk = this.emojis.length, this.yl = 676, this.yj = 1024, this.yz = this.emojis.indexOf("💀"), this.z0 = this.yz + 1, this.z1 = this.emojis.indexOf("🥇"), this.z2 = this.emojis.indexOf("😊"), this.yx = function(fF) {
		return fF < this.yl ? String.fromCharCode(55356, 56806 + bL.du(fF, 26), 55356, 56806 + fF % 26) : this.emojis[Math.min(fF - this.yl, this.yk - 1)]
	}, this.yn = function(qH) {
		for (var en = qH.length - 2, g = [], aB = 0; aB < en; aB++) {
			var z3 = qH.charCodeAt(aB) - 56806,
				z4 = qH.charCodeAt(aB + 2) - 56806;
			0 <= z3 && z3 < 26 && 0 <= z4 && z4 < 26 && (g.push(26 * z3 + z4), aB += 3)
		}
		return g
	}, this.z5 = function(fF) {
		return fF < this.yl
	}, this.z6 = function(fF) {
		return fF >= 1024 - this.yi
	}, this.z7 = function(fF) {
		return fF >= this.yl && fF < this.yl + this.z0
	}
}

function c3() {
	this.sr = new z8, this.vv = new z9, this.vx = new zA, this.dd = function() {
		this.sr.dd()
	}
}

function z9() {
	this.wA = function(qH) {
		for (var en = qH.length, i = bD, aB = 0; aB < en; aB++) i.a8(16, qH.charCodeAt(aB))
	}
}

function z8() {
	var zB = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zB[0] = 45, zB[37] = 95, aB = 0; aB < 10; aB++) zB[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zB[aB + 11] = 65 + aB, zB[aB + 38] = 97 + aB
	}, this.st = function(zC) {
		for (var w0 = bH, w8 = new Uint8Array(zC), aB = 0; aB < zC; aB++) w8[aB] = w0.ph(6);
		return w8
	}, this.ss = function(w8) {
		for (var en = w8.length, zD = zB, g = [], aB = 0; aB < en; aB++) g.push(String.fromCharCode(zD[w8[aB]]));
		return g.join("")
	}, this.zE = function(value, zF) {
		for (var zD = zB, g = [], aB = 0; aB < zF; aB++) g.push(String.fromCharCode(zD[value >> 6 * (zF - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var zG, zH, zI;
	zG = [32, 65, 191, 913, 931], zH = [64, 127, 688, 930, 1155], zI = new Array(zG.length + 1);
	for (var aB = 0; aB < zI.length; aB++) {
		zI[aB] = 0;
		for (var f6 = aB - 1; 0 <= f6; f6--) zI[aB] += zH[f6] - zG[f6]
	}

	function zO(f8) {
		for (var aB = zG.length - 1; 0 <= aB; aB--)
			if (f8 >= zG[aB] && f8 < zH[aB]) return aB;
		return -1
	}
	this.w1 = function(qH) {
		return 0 !== (qH = qH.trim()).indexOf("Bot ") && 0 !== qH.indexOf("[Bot] ") && function(qH, zL, zM) {
			var en = (qH = qH.trim()).length;
			if (en < zL || zM < en) return !1;
			for (var f8, zN = 0, aB = 0; aB < en; aB++)
				if (f8 = qH.charCodeAt(aB), zN += 65 <= f8 && f8 <= 90 || 1040 <= f8 && f8 <= 1071 ? 1 : 0, -1 === zO(f8)) return !1;
			if (3 < zN && zN > Math.floor(en / 2)) return !1;
			return !0
		}(qH, 3, 20)
	}, this.zP = function(qH) {
		for (var en = (qH = qH.trim()).length, g = [], aB = 0; aB < en; aB++) {
			var f8, gL = zO(f8 = qH.charCodeAt(aB));
			g.push(zI[gL] + f8 - zG[gL])
		}
		return g
	}, this.wF = function(g) {
		for (var f8, f7, qH = "", en = g.length, aB = 0; aB < en; aB++)
			for (f7 = 1; f7 < zI.length; f7++)
				if (g[aB] < zI[f7]) {
					f8 = zG[f7 - 1] + g[aB] - zI[f7 - 1], qH += String.fromCharCode(f8);
					break
				} return qH
	}, this.zQ = function(qH) {
		for (var g = this.zP(qH), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zR = function(qH) {
		for (var g = new Array(Math.floor(qH.length / 3)), aB = 0; aB < qH.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qH.substring(aB, aB + 3));
		return this.wF(g)
	}, this.zS = function(qH) {
		for (var fF, g = [qH.length], aB = 0; aB < qH.length; aB++) g[aB] = qH.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qH.length; aB++) aB === qH.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fF = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fF + (fF < 26 ? 65 : 71)), aB++);
		return result
	}, this.zT = function(qH) {
		for (var f8, result = "", aB = 0; aB < qH.length; aB++) 48 <= (f8 = qH.charCodeAt(aB)) && f8 < 58 ? result += String.fromCharCode(f8) : 65 <= f8 && f8 < 75 ? result += "0" + (f8 - 65).toString() : 75 <= f8 && f8 < 91 ? result += (f8 - 65)
			.toString() : 97 <= f8 && f8 < 123 && (result += (f8 - 71).toString());
		return result
	}, this.zU = function(qH) {
		for (var en = qH.length, g = [], aB = 0; aB < en; aB++)(f8 = qH.charCodeAt(aB)) < 58 ? g.push(qH[aB]) : (f8 -= f8 < 91 ? 65 : 71, g.push(String(bL.du(f8, 10))), g.push(String(f8 - 10 * bL.du(f8, 10))));
		var en = g.length - 2,
			f8 = 0,
			w8 = [];
		for (aB = 0; aB < en; aB += 3) w8[f8++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return w8
	}, this.zV = function() {
		for (var e7, zW = "", aB = 0; aB < 6; aB++) e7 = 48 + ay.random() % 36, e7 += 58 <= e7 ? 39 : 0, zW += String.fromCharCode(e7);
		return zW
	}
}

function zA() {
	this.zP = function(qH, wo, zX) {
		for (var zY = [], en = qH.length, max = 0, aB = 0; aB < en; aB++) {
			var fF = qH.charCodeAt(aB);
			zY.push(fF), max = Math.max(max, fF)
		}
		var wp = max < 128 ? 7 : 16;
		for (zX.a8(wo, en), zX.a8(1, +(16 == wp)), aB = 0; aB < en; aB++) zX.a8(wp, zY[aB])
	}
}

function dA() {
	this.zZ = new za, this.result = new zb, this.zc = new zd, this.ze = new zf, this.zg = new zh, this.zi = new zj, this.dd = function() {
		this.result.dd()
	}
}

function zd() {
	this.zk = function() {
		for (var en = al.kB, zl = al.kC, zm = [], aB = 0; aB < en; aB++) {
			var gL = zl[aB];
			bA.g9.zn(gL) && zm.push(gL)
		}
		return zm
	}, this.zo = function() {
		if (0 === bg.kX[aD.zp]) return this.zq();
		bh.li(aD.zp);
		for (var zm = [], en = bO.fI[0], fR = bO.fR, aB = 0; aB < en; aB++) {
			var gL = fR[aB];
			bA.g9.zn(gL) && zm.push(gL)
		}
		return zm
	}, this.zq = function() {
		var gL = lk[0];
		return bA.g9.zn(gL) ? [gL] : []
	}, this.zr = function(zm) {
		for (var en = zm.length, dt = 0, gb = ag.gb, aB = 0; aB < en; aB++) dt += gb[zm[aB]];
		return dt
	}
}

function za() {
	function zt() {
		if (2 === aD.zx) return 1;
		aw.zy(), aD.zx = 2, aD.zz = aD.a00
	}

	function zv() {
		bR.zg.a01(), aX.show(1 === aD.a02, !1, 2 === aD.a02), bR.result.a01(), bR.zi.j3(), bR.ze.j3(), aN.a03(!0), aN.a04(247), aN.a04(956), aN.a04(957), aV.mU(!0), aW.mU(!0), aw.mU(), bC.a05(), aD.gw && bf.a06.a07(), bf.dl = !0, bb.a08(), a0.a1
			.setState(0)
	}
	this.zs = function() {
		zt() || (aD.zu = 2, zv())
	}, this.zw = function() {
		zt() || (aD.zu = 1, zv())
	}
}

function zf() {
	this.j3 = function() {
		var a0G;
		2 === aD.zu ? (aN.a09(0, 59), aH.nH(2700)) : aD.kS < 7 ? (a0G = bg.kX[aD.zp], a0G = bg.a0I[a0G], aQ.a0J(L(26, [a0G]), 2, 1, 12), aN.yP(0, L(27, [a0G]), 40, 0, bB.ni, bB.nf, -1, !1), aH.nH(2700)) : 8 === aD.kS ? (aD.a02 ? aN.a09(aD.a0E,
			2) : aN.a09(1 - aD.eX, 3), aD.a0F.yF(aD.a0E), aH.n3(aD.a0E, 2700, !1, 0)) : 9 === aD.kS ? (aN.a0K(), aH.nH(2700)) : (aN.a0L(aD.a0E), aH.n3(aD.a0E, 2700, !1, 0))
	}
}

function zj() {
	function a0V() {
		var tC;
		return 8 === aD.kS ? 0 : (tC = Math.floor(ag.a0W[aD.eX] / 50), (tC = Math.min(tC, 400)) / 100)
	}

	function a0N() {
		var tC = a0V();
		0 !== tC && aN.yP(440, L(28, [tC.toFixed(2)]), 40, 0, bB.o0, bB.nf, -1, !1)
	}
	this.j3 = function() {
		var a0O;
		0 === bR.result.a0M || 0 === bR.result.zm.length || 8 === aD.kS ? bA.g9.gz(aD.eX) && a0N() : (function(a0O) {
			7 !== aD.kS && 10 !== aD.kS || 0 !== aD.a02 && a0O && aN.yP(600, L(32, [a0O.toFixed(2)]), 40, 0, bB.ni, bB.nf, -1, !1)
		}(a0O = function() {
			aN.yP(520, L(29), 40, 0, bB.ni, bB.nf, -1, !1);
			for (var zm = bR.result.zm, en = zm.length, gb = ag.gb, g = [], aB = 0; aB < en; aB++) {
				var gL = zm[aB];
				g.push({
					gL: gL,
					dt: gb[gL]
				})
			}
			g.sort((f6, f7) => f7.dt - f6.dt);
			var a0I = ag.yQ,
				dt = bR.result.a0X,
				tC = bR.result.a0M,
				qH = "",
				a0O = 0;
			for (aB = 0; aB < en; aB++) {
				var hX = g[aB].dt * tC / (100 * dt),
					a0Z = a0I[g[aB].gL] + ": " + hX.toFixed(2) + "   ";
				g[aB].gL === aD.eX && (a0O = hX), 2 < aB && 4 !== en ? 3 === aB && (qH += "(" + L(30, [en - 3]) + ")") : qH += a0Z
			}
			aN.yP(560, bA.rZ.a0a(qH), 40, 0, bB.o0, bB.nf, -1, !1), a0O ? aN.yP(580, L(31, [a0O.toFixed(2) + " + " + a0V().toFixed(2)]), 40, 0, bB.o0, bB.nf, -1, !1) : bA.g9.gz(aD.eX) && a0N();
			return a0O
		}()), 2 === aD.zu || 7 <= aD.kS || function(a0O) {
			var zm = bR.result.zm,
				en = zm.length,
				a0b = ag.a0b,
				gb = ag.gb,
				a0c = [];
			loop: for (var aB = 0; aB < en; aB++) {
				var gL = zm[aB],
					a0d = bA.rZ.a0e(a0b[gL]);
				if (null !== a0d) {
					for (var a0f = gb[gL], f7 = a0c.length - 1; 0 <= f7; f7--)
						if (a0d === a0c[f7].name) {
							a0c[f7].dt += a0f, a0c[f7].g.push({
								gL: gL,
								dt: a0f
							});
							continue loop
						} a0c.push({
						name: a0d,
						dt: a0f,
						g: [{
							gL: gL,
							dt: a0f
						}]
					})
				}
			}
			if (0 !== a0c.length) {
				a0c.sort((f6, f7) => f7.dt - f6.dt);
				var g = a0c[0].g,
					a0g = (g.sort((f6, f7) => f7.dt - f6.dt), "[" + a0c[0].name + "]"),
					a0h = 512 * bR.result.a0M / 26214400,
					l3 = (aN.yP(0, L(33, [a0g, a0h.toFixed(4)]), 40, 0, bB.ni, bB.nf, -1, !1), g.length),
					w6 = a0c[0].dt,
					a0i = 1e4 * a0h;
				for (aB = 0; aB < l3; aB++)
					if (g[aB].gL === aD.eX) {
						aN.yP(600, L(34, [(a0i * g[aB].dt / (10 * w6)).toFixed(2)]), 40, 0, bB.ni, bB.nf, -1, !1), aN.yP(640, L(35, [(.2 * a0O).toFixed(2), a0g]), 40, 0, bB.ni, bB.nf, -1, !1);
						break
					} aD.gw || aN.yP(720, L(36) + bK.a0j, 736, 0, bB.ni, bB.o6, -1, !1)
			}
		}(a0O))
	}, this.a0S = function() {
		var a0T, wY;
		aD.kU || (a0T = ag, wY = aD.eX, 0 === a0T.a0U[wY]) || a0T.jD[wY] < 1 || 2 * a0T.pz[wY] > 3 * (a0T.jC[wY] + a0T.jD[wY]) || a0N()
	}
}

function zb() {
	this.dd = function() {
		this.a0k = 0, this.zm = [], this.a0X = 0, this.a0M = 0
	}, this.a01 = function() {
		var sB;
		aD.kU || (sB = this, 2 === aD.zu ? sB.zm = bR.zc.zk() : aD.hh ? sB.zm = bR.zc.zo() : sB.zm = bR.zc.zq(), sB.a0k = bi.a0m.a0n(), sB.a0X = Math.max(1, bR.zc.zr(sB.zm)), b8.g9.pf(), 8 === aD.kS ? bR.result.a0M = 0 : sB.a0M = 100 * bR.result
			.a0k * (1 + aD.yO))
	}
}

function zh() {
	this.a01 = function() {
		if (2 === aD.zu) aD.a02 = 2;
		else {
			if (8 === aD.kS) bA.g9.jY(0) || 0 === ag.mi[0] ? aD.a0E = 1 : bA.g9.jY(1) || 0 === ag.mi[1] ? aD.a0E = 0 : aD.a0E = +(ag.gb[1] > ag.gb[0]);
			else {
				if (aD.hh) {
					var kh = bh.a0q();
					if (aD.zp = kh, bg.kX[kh]) return void(aD.a02 = +(bg.el[aD.eX] === kh))
				}
				aD.a0E = lk[0]
			}
			aD.a02 = +(aD.a0E === aD.eX)
		}
	}
}

function dF() {
	this.id = 0, this.dv = 0, this.vH = null, this.vI = null, this.vJ = null, this.vP = null, this.a1 = new a0r, this.dd = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.vI = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vJ = mwIOSdataX, self.vP = window.webkit.messageHandlers.iosCommandA, dv = self
					.vJ.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var vH;
				try {
					if (!(vH = window.localStorage)) return;
					vH.setItem("tls7", "1"), vH.removeItem("tls7")
				} catch (error) {
					return
				}
				self.vH = vH
			}(this)
	}
}

function a0r() {
	this.a0v = function() {
		bj.s1.vc(), bj.s1.vd(), b0.y.close(0, 3255), 0 === a0.id ? a0.vH && a0.vH.clear() : 1 === a0.id ? a0.vI.saveString(199, "") : 2 === a0.id && a0.vP.postMessage("clear")
	}, this.a0w = function() {
		2 === a0.id ? a0.vP.postMessage("showConsentForm") : 1 === a0.id && a0.vI.setState(7)
	}, this.a0x = function() {
		this.setState(14)
	}, this.hw = function() {
		return 1 === bj.eK.vC(2)
	}, this.a0y = function() {
		bj.eK.vA(102, "")
	}, this.setState = function(a0z) {
		1 === a0.id && 5 <= a0.dv && a0.vI.setState(a0z)
	}, this.a2 = function() {
		var a10;
		1 === a0.id && 7 <= a0.dv ? a0.vI.setState(5) : ((a10 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a10.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dv < 17 || a0.vI.saveString(23, document.documentElement.outerHTML)
	}, this.eI = function() {
		0 !== a0.id && (1 === a0.id ? a0.vI.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dv ? a0.vP.postMessage("prepare ad 1770251391") : a0.vP.postMessage("loadAds 1770251391")))
	}, this.eN = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dv ? a0.vP.postMessage("show ad " + dt) : a0.vP.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dv < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a11 + "' target='_blank'>" +
			bK.a11 + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oN)]))
	}
}

function dU() {
	function a14(e) {
		lS(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a17()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.o5)]))
	}

	function a1F(e) {
		lS(e), t.u(4, 5, new v(L(38), a1B(e), !0))
	}

	function a1B(e) {
		var qH = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qH : 4527 === e ? "Player already in lobby" + qH : 4530 === e ? "Lobby Timeout" + qH : 4528 === e ? "Lobby Kick: Another login detected." + qH : 4540 === e ?
			"You have been kicked." + qH : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qH : "Unknown error" + qH
	}

	function lS(e) {
		a19(e), t.y.z()
	}

	function a19(e) {
		var a0z = aa.a18();
		6 === a0z ? b0.y.a1H(e) : bn.a15 ? (t.x(), bn.uA(), b0.y.close(b0.y.a16, 3256)) : 8 === a0z && aD.a1I(!0)
	}
	this.p = [], this.a12 = function(a13, e) {
		if (this.p.push(e), 8 === t.so && 0 === a13)
			if (4211 === e) a14(e);
			else {
				if (bn.a15 && (4495 === e || 4480 === e) && b0.y.a16 !== a13) return void t.a17();
				if (8 !== aa.a18() && a19(), 4480 === e) return bj.s1.ve(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a1B(e), !0))
			}
		else {
			var a0z = aa.a18();
			if (6 === a0z) {
				if (4211 === e) return void a14(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a1C(a13)
			} else {
				if (!bn.a15) return 8 === a0z ? void(a13 !== b0.y.a1D || aD.kU || 1 !== aD.zx || aD.gw || aN.a1E(L(39, [e]))) : void 0;
				if (a13 !== b0.y.a16) return
			}
			a1F(e)
		}
	}, this.a1G = function(e) {
		this.p.push(e), 8 === aa.a18() ? aD.kU || 1 !== aD.zx || aN.a1E(L(39, [e])) : a1F(e)
	}, this.s = function() {
		this.p.push(3268), lS(3268)
	}
}

function d4() {
	var a1J, a1K, a1L = -15e3,
		a1M = !1;

	function h0(e) {
		a1g() || (a1M = !0, a1h(e, 1), b0.y.a1i(b0.y.a1D), a1j(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1V(e) {
		a1L = bf.eM, a1h(e, 1), b0.y.a1i(b0.y.a1D), 0 < e.touches.length && (a1J = Math.floor(h.k * e.touches[0].clientX), a1K = Math.floor(h.k * e.touches[0].clientY), au.a1V(e) || a1j(a1J, a1K))
	}

	function a1j(eu, ew) {
		t.h0(eu, ew), 0 === aD.zx ? aa.h0(eu, ew) : bC.a1k(eu, ew) || be.h0(eu, ew) || aX.h0(eu, ew) || aL.a1l(eu, ew) || aP.h0(eu, ew) || 0 <= aM.h0(eu, ew) || aw.h0(eu, ew) || bJ.a1m(eu, ew) || aL.a1n(eu, ew)
	}

	function a1R(e) {
		a1g() || (a1M = !0, a1h(e, 1), a1o(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1W(e) {
		a1L = bf.eM, a1h(e, 1), 0 < e.touches.length && (a1J = Math.floor(h.k * e.touches[0].clientX), a1K = Math.floor(h.k * e.touches[0].clientY), au.a1W(e) || a1o(a1J, a1K))
	}

	function a1o(eu, ew) {
		t.a1R(eu, ew), 0 === aD.zx ? aa.a1R(eu, ew) : (bT.gu(eu, ew), be.a1R(eu, ew) || (aM.a1R(eu, ew), aL.hZ() ? aL.a1R(eu, ew) : aR.h1 ? aR.a1R(eu) && (bf.dl = !0) : (aV.a1R(eu, ew), aS.nD && aS.a1R(eu, ew) && (bf.dl = !0))))
	}

	function a1T(e) {
		a1g() || (a1h(e, 1), a1p(), 0 === aD.zx ? (aa.click(-1024, -1024), aT.rb()) : (aV.a1q(-1024, -1024), aM.a1R(-1024, -1024), aR.a1r(), aS.nD = !1))
	}

	function a1S(e) {
		a1g() || (a1h(e, 1), a1s(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a1P && (bJ.a1P = !1, e.preventDefault()))
	}

	function click(e) {
		a1g() || a1h(e, 1)
	}

	function a1X(e) {
		a1L = bf.eM, a1h(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.zx ? aS.nD = !1 : au.a1t() || (a1s(a1J, a1K, !1), bJ.a1P && (bJ.a1P = !1, e.preventDefault()))
	}

	function a1Y(e) {
		a1L = bf.eM, a1h(e, 1), a1s(a1J, a1K, !1), bJ.a1P && (bJ.a1P = !1, e.preventDefault())
	}

	function a1Z(e) {}

	function a1a(e) {}

	function a1b(e) {
		a1g() || a1h(e, 0)
	}

	function a1s(eu, ew, a1u) {
		a1p(), 0 === aD.zx ? aa.click(eu, ew) : (aV.a1q(eu, ew), be.a1q(), aR.a1r(), aS.nD = !1, aL.click(eu, ew, a1u) ? bf.dl = !0 : aM.a1S(eu, ew))
	}

	function a1p() {
		t.a1p()
	}

	function a1U(e) {
		var eu, ew, deltaY;
		a1g() || (a1h(e, 1), b0.y.a1i(b0.y.a1D), eu = Math.floor(h.k * e.clientX), ew = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1U(eu, ew, deltaY), 0 === aD.zx ? aa.a1U(eu, ew, deltaY) : aV.a1U(eu, ew,
			deltaY) || (aR.a1v(eu, ew) ? aR.a1U(deltaY) && (bf.dl = !0) : aS.a1U(eu, ew, deltaY)))
	}

	function a1c(e) {
		a1h(e, 0)
	}

	function a1h(e, id) {
		0 === id && t.hZ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a18() && e.preventDefault()
	}

	function a1d(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1g() || 0 < h.sW || (e = e.code) && e.length && (bX.f8(e, 18) ? ar.a1x(3) : bX.f8(e, 22) ? ar.a1x(0) : bX.f8(e, 20) ? ar.a1x(1) : bX.f8(e, 24) ? ar.a1x(2) : bX.f8(e, 10) ? aR.a1y(31 / 32) : bX.f8(e, 8) ? aR.a1y(32 / 31) : bX.f8(e, 6) ? aR
			.a1y(7 / 8) : bX.f8(e, 4) ? aR.a1y(8 / 7) : bX.f8(e, 14) ? 0 !== aD.zx && aS.a1U(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.f8(e, 16) ? 0 !== aD.zx && aS.a1U(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.f8(e, 0) ? aD
			.zx && bT.gv(0) : bX.f8(e, 2) ? aD.zx && bT.gv(1) : bX.f8(e, 30) ? aD.zx && bT.gv(2) : bX.f8(e, 26) ? aD.zx && bT.hT() : bX.f8(e, 28) && aD.zx && bT.hY())
	}

	function a1e(e) {
		if (!a1g() && !(0 < h.sW || bf.eM < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a1z(1) || "Space" === code && t.a1z(0))) return bn.a15 ? bn.uG.a1z(code) ? void 0 : void("Escape" === code && bJ.fG()) : void(8 !== aa.a18() && aa.a1z(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fG() : bX.f8(code, 18) ? ar.a20(3) : bX.f8(code, 22) ? ar.a20(0) : bX.f8(code, 20) ? ar.a20(1) : bX.f8(code, 24) ? ar.a20(2) : bX.f8(code, 12) ? bC.a21(!aD.nB) : "Space" === code && aD.zx && (aM.gx && aM.a22(), aD
					.gw) && bC.a23(!1))
		}
	}

	function a1f() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a1g() {
		return a1L + 15e3 > bf.eM
	}

	function resize() {
		h.a25()
	}
	this.a1N = 0, this.a1O = "", this.a1P = !1, this.dd = function() {
		a1Q.addEventListener("mousedown", h0, {
			passive: !1
		}), a1Q.addEventListener("mousemove", a1R, {
			passive: !1
		}), a1Q.addEventListener("mouseup", a1S, {
			passive: !1
		}), a1Q.addEventListener("click", click, {
			passive: !1
		}), a1Q.addEventListener("mouseleave", a1T, {
			passive: !1
		}), a1Q.addEventListener("wheel", a1U, {
			passive: !1
		}), a1Q.addEventListener("touchstart", a1V, {
			passive: !1
		}), a1Q.addEventListener("touchmove", a1W, {
			passive: !1
		}), a1Q.addEventListener("touchend", a1X, {
			passive: !1
		}), a1Q.addEventListener("touchcancel", a1Y, {
			passive: !1
		}), a1Q.addEventListener("dragover", a1Z), a1Q.addEventListener("drop", a1a), a1Q.addEventListener("dblclick", a1b), document.addEventListener("contextmenu", a1c), document.addEventListener("keydown", a1d), document.addEventListener(
			"keyup", a1e), document.addEventListener("visibilitychange", a1f), window.addEventListener("resize", resize)
	}, this.a1m = function(eu, ew) {
		return !!bC.h0(eu, ew) || !!(aV.h0(eu, ew) || aS.h0(eu, ew) || aR.h0(eu, ew) || aN.h0(eu, ew))
	}, this.a24 = a1g, this.r2 = function() {
		return !a1M || 0 < a1L
	}, this.fG = function() {
		if (!t.hZ()) return 8 === aa.a18() ? aD.nB ? void bC.a21(!1) : be.hZ ? void be.a22() : void aM.a22() : void(7 !== aa.a18() && 6 === aa.a18() && aZ.a26());
		t.a1z(2)
	}
}

function bz() {
	this.qa = new a27, this.qi = new a28, this.g9 = new a29, this.rZ = new a2A, this.y7 = new a2B, this.a2C = new a2D, this.canvas = new a2E, this.color = new a2F, this.a2G = new a2H, this.dd = function() {
		this.qa.vb()
	}
}

function a28() {
	this.wW = function(g) {
		g.fill(0)
	}, this.a2I = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++) g[aB] = []
	}, this.a2J = function(z3, a2K) {
		for (var z4 = bO.fN, aB = 0; aB < 3; aB++) z4[aB] = a2K * z3[aB];
		return z4
	}, this.a2L = function(z3, z4, a2M) {
		for (var jQ = 0, aB = 0; aB < 3; aB++) jQ += Math.abs(z3[aB] - z4[aB]);
		return a2M <= jQ
	}, this.a2N = function(z3, a2O) {
		for (var aB = 0; aB < 3; aB++) z3[aB] = bL.hv(z3[aB] + a2O, 0, 255);
		return z3
	}, this.a2P = function(g, t8, t9) {
		t9 = t9 || g.length - 1;
		for (var a2Q = 0, aB = t8 = t8 || 0; aB <= t9; aB++) a2Q += g[aB];
		return a2Q
	}, this.a2R = function(g, a2S) {
		for (var aB, a2T, en = g.length, a2U = [], f6 = en - 1; 0 <= f6; f6--) {
			for (aB = a2T = 0; aB < en; aB++) a2S(g[aB]) < a2S(g[a2T]) && (a2T = aB);
			en--, a2U.push(g[a2T]), g[a2T] = g[en], g.pop()
		}
		return a2U
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
	}, this.a2V = function(g, fF) {
		for (var en = g.length, gG = 0, aB = 0; aB < en; aB++) gG += g[aB] > fF;
		return gG
	}, this.a2W = function(a2X, a2Y, min) {
		for (var en = a2Y[0], aB = en - 1; 0 <= aB; aB--) a2X[aB] < min && (a2X[aB] = a2X[--en]);
		a2Y[0] = en
	}, this.a2Z = function(g, en, value) {
		for (var aB = 0; aB < en; aB++) g[aB] -= value
	}, this.a2a = function(g) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2b = function(qH, g, a2c) {
		g.fill(0);
		for (var tC = qH.split(","), en = Math.min(tC.length, g.length), aB = 0; aB < en; aB++) g[aB] = Math.min(parseInt(tC[aB]), a2c)
	}, this.a2d = function(qH, g, rW) {
		g.fill("");
		for (var tC = qH.split('"'), en = Math.min(tC.length, 2 * g.length), hf = 0, aB = 1; aB < en; aB += 2) g[hf++] = tC[aB].slice(0, rW)
	}, this.a2e = function(g, gG) {
		if (0 === gG) g.fill(0);
		else {
			var a2Q = this.a2P(g),
				en = g.length;
			if (0 === a2Q) g.fill(bL.du(gG, en));
			else
				for (var aB = 0; aB < en; aB++) g[aB] = bL.du(gG * g[aB], a2Q);
			if (0 === (a2Q = this.a2P(g))) g[1] = gG;
			else
				for (var hf = 0; a2Q++ < gG;) g[hf = (hf + 1) % en] && g[hf]++
		}
	}, this.a2f = function(g) {
		if (!g) return 0;
		var en = g.length;
		if (0 === en) return 0;
		for (var fF = g[en - 1], aB = en - 2; 0 <= aB; aB--)
			if (g[aB] !== fF) return aB + 2;
		return 1
	}, this.a2g = function(g) {
		for (var a2Q = 0, aB = 0; aB < g.length; aB++) a2Q += g[aB].length;
		return a2Q
	}, this.a2h = function(a2i) {
		for (var g = [], aB = 0; aB < a2i.length; aB++) g = g.concat(a2i[aB]);
		return g
	}, this.has = function(g, fF) {
		for (var en = g.length, aB = 0; aB < en; aB++)
			if (g[aB] === fF) return !0;
		return !1
	}
}

function a2E() {
	this.yh = function(a2j, e8, a2k) {
		var hj = a2j.height,
			a2l = bA.qa.wM(hj, hj),
			hp = bA.qa.getContext(a2l);
		return function(i, hp, a2k) {
			hp.fillStyle = a2k, hp.beginPath(), hp.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hp.fill()
		}(hj, hp, a2k), hp.drawImage(a2j, -e8 * hj, 0), a2l
	}, this.a2n = function(a2o) {
		var hp, hm, hj = a2o.height;
		return a2o.width === hj && (hm = (hp = bA.qa.getContext(a2o, !0)).getImageData(0, 0, hj, hj), bA.a2C.a2p(hm.data, hj, hj, .9), hp.putImageData(hm, 0, 0)), a2o
	}
}

function a2F() {
	this.a2q = function(fF) {
		return [fF >> 12 & 63, fF >> 6 & 63, 63 & fF]
	}, this.a2r = function(fF) {
		for (var g = this.a2q(fF), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a2s = function(fF) {
		fF = this.a2r(fF);
		return bA.color.na(fF[0], fF[1], fF[2])
	}, this.a2t = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.na = function(e7, tC, f7) {
		return "rgb(" + e7 + "," + tC + "," + f7 + ")"
	}, this.nc = function(e7, tC, f7, f6) {
		return "rgba(" + e7 + "," + tC + "," + f7 + "," + f6.toFixed(3) + ")"
	}, this.r4 = function(f8) {
		for (var g = f8.split("(")[1].split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = parseInt(g[aB]);
		return 4 === g.length ? fM[3] = 255 * parseFloat(g[3].slice(0, -1)) : fM[3] = 255, fM
	}, this.r5 = function(a2u, eq) {
		for (var g = a2u.slice(a2u.indexOf("(") + 1, a2u.indexOf(")")).split(","), fM = bO.fM, aB = 0; aB < 3; aB++) fM[aB] = bL.hv(parseInt(g[aB].trim(), 10) + eq, 0, 255);
		return 3 === g.length ? this.na(fM[0], fM[1], fM[2]) : (a2u = parseFloat(g[3].trim()), this.nc(fM[0], fM[1], fM[2], a2u = 0 === a2u ? .3 : a2u))
	}, this.a2v = function(g) {
		for (var qH = "#", aB = 0; aB < 3; aB++) {
			var e7 = g[aB].toString(16);
			qH += 1 === e7.length ? "0" + e7 : e7
		}
		return qH
	}, this.a2w = function(qH) {
		var e7, tC;
		return qH.length < 7 ? bB.nZ : (e7 = parseInt(qH.slice(1, 3), 16), tC = parseInt(qH.slice(3, 5), 16), qH = parseInt(qH.slice(5, 7), 16), this.na(e7, tC, qH))
	}
}

function a2B() {
	this.a2x = function(qH, font, maxWidth) {
		if (font && (uh.font = font), uh.measureText(qH).width <= maxWidth) return qH;
		for (var aB = qH.length - 1; 1 <= aB; aB--)
			if (qH = qH.substring(0, aB), uh.measureText(qH + "...").width <= maxWidth) return qH + "...";
		return "..."
	}
}

function a2H() {
	var a2z = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a30 = function(eM) {
		var a32, qH = new Date(eM.getTime() - 6e4 * eM.getTimezoneOffset()).toUTCString();
		return qH.length < 12 || (qH = qH.substring(5, qH.length), 0 === (eM = eM.getTimezoneOffset())) ? qH : (a32 = (eM < 0 ? "+" : "-") + bL.du(Math.abs(eM), 60), 0 == (eM = Math.abs(eM) % 60) ? qH + a32 : qH + a32 + ":" + (eM < 10 ? "0" :
			"") + eM)
	}, this.a33 = function(eM) {
		var qH = eM.toUTCString();
		return qH.length < 12 ? qH : function(eM) {
			return a2z[eM.getUTCDay()]
		}(eM) + ", " + qH.substring(5, qH.length - 4)
	}
}

function a27() {
	var a35 = null;
	this.yy = 0, this.vb = function() {
		var fF = bj.eK.data[5].value;
		a35 = "px " + fF, "Trebuchet MS" !== fF && (a35 += ", Trebuchet MS"), this.yy = hi(32, 32, ["a", "b", "m"], 200, a35)
	}, this.wM = function(i, j) {
		var f8 = document.createElement("canvas");
		return f8.width = i, f8.height = j, f8
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(y7, i, j) {
		return y7.getImageData(0, 0, i, j)
	}, this.sO = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a35 : 1 === type ? "bold " + size + a35 : 2 === type ? "lighter " + size + a35 : 3 === type ? "italic " + size + a35 : 4 === type ? "oblique " + size + a35 : 5 === type ? "small-caps " +
			size + a35 : "small-caps bold " + size + a35
	}, this.textAlign = function(hp, id) {
		hp.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hp, id) {
		hp.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qk = function(e, code, color) {
		color = this.qj(bc.sQ) + " solid " + (color || bB.ni);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tE = function(e, eu, ew, i, j) {
		e = e.style;
		e.left = this.tF(eu), e.top = this.tF(ew), e.width = this.tF(i), e.height = this.tF(j)
	}, this.qb = function(fF) {
		return 1 + fF * a0.a1.hw()
	}, this.rt = function(nK, gM) {
		return nK * this.qb(void 0 === gM ? .5 : gM) * h.hx / h.k
	}, this.tD = function(nK, gM) {
		return nK * this.qb(void 0 === gM ? .5 : gM) * h.hx
	}, this.su = function(nK, gM, a36) {
		return this.qb(gM) * Math.min(nK * h.hx, a36 * h.i) / h.k
	}, this.qj = function(fF) {
		return fF.toFixed(1) + "px"
	}, this.tF = function(fF) {
		return this.a38(fF).toFixed(1) + "px"
	}, this.a38 = function(fF) {
		return fF / h.k
	}, this.a39 = function(se, a3A) {
		for (var qH = "<ul>", en = se.length, aB = 0; aB < en; aB++) qH += "<li>" + se[aB] + ": <a href='" + a3A[aB] + "' target='_blank'>" + a3A[aB] + "</a></li>";
		return qH += "</ul>"
	}, this.a3B = function(a3C) {
		return "<a href='" + a3C + "' target='_blank'>" + a3C + "</a>"
	}, this.a3D = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3E = function(e) {
		var dt = e.textContent;
		bA.rZ.a3F(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qH) {
		return uh.measureText(qH).width
	}, this.t4 = function(a3G) {
		a3G.style.overflowX = "auto", a3G.style.overflowY = "hidden", a3G.style.whiteSpace = "nowrap", a3G.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tH = this.scrollLeft, e.preventDefault())
		}), a3G.addEventListener("scroll", function() {
			this.tH = this.scrollLeft
		})
	}
}

function a29() {
	this.gy = function(a0z) {
		return 0 === a0z ? 1 === aD.zx && aD.hB : 1 === a0z ? 1 === aD.zx && !aD.hB : 2 === aD.zx
	}, this.gz = function(player) {
		return 0 !== ag.mi[player] && 2 !== ag.a3H[player]
	}, this.a3I = function(player) {
		return player === aD.eX && 2 !== ag.a3H[player]
	}, this.km = function(player, jJ) {
		return player !== jJ && (0 === bg.el[player] || bg.el[player] !== bg.el[jJ])
	}, this.lu = function() {
		return al.kB < 2 ? 0 : aD.hh ? 1 < bh.a3J() : ag.gb[lk[1]]
	}, this.a3K = function() {
		var kB = al.kB;
		if (0 !== kB) {
			if (!aD.hh) return !this.jY(lk[0]);
			for (var el = bg.el, kh = bh.ki(), kC = al.kC, aB = kB - 1; 0 <= aB; aB--) {
				var gL = kC[aB];
				if (el[gL] === kh && !this.jY(gL)) return 1
			}
		}
		return 0
	}, this.a3L = function(player) {
		return player === aD.eX
	}, this.jY = function(player) {
		return player >= aD.kA || 2 === ag.a3H[player]
	}, this.l6 = function(player) {
		return 0 !== ag.mi[player]
	}, this.zn = function(player) {
		return player < aD.kA
	}, this.px = function(a3M, a3N) {
		return a3M !== a3N
	}, this.gC = function(player, fF) {
		var min;
		return fF = this.a3O(player, fF), ag.gp[player] += fF, ag.a3P[player] && (min = Math.min(ag.a3P[player], ag.gp[player]), ag.a3P[player] -= min, ag.gp[player] -= min), fF
	}, this.a3O = function(player, fF) {
		var a3Q = ag.gp[player];
		return fF = Math.min(fF, ag.gb[player] * aD.a3R - a3Q), fF = Math.min(fF, aD.a3S - a3Q), Math.max(fF, 0)
	}, this.mH = function(player, iN, a3T, a3U) {
		var a3Q = ag.gp[player],
			iN = bL.du(a3Q * (iN + 1), 1024),
			a3T = bL.du(a3T * a3Q, 1024),
			iN = Math.min(iN, a3Q - a3T);
		return 10 === aD.kS && (iN = b4.a3W(player, iN)), bO.fK[0] = iN, bO.fK[1] = a3T, a3U <= iN
	}, this.pQ = function(player, p8, p7) {
		var player = ag.gp[player],
			a3V = bL.du(64 * player, 1024);
		return p8 = Math.min(p8, player - a3V), p8 = this.a3O(p7, p8), bO.fK[0] = p8, bO.fK[1] = a3V, 1 <= p8
	}, this.a3X = function(player, p8, p7) {
		var player = ag.gp[player],
			a3V = bL.du(64 * player, 1024);
		return p8 = Math.min(p8, player - a3V), this.a3O(p7, p8)
	}, this.pS = function(p8, p7) {
		return p8 = this.a3O(p7, p8), bO.fK[0] = p8, bO.fK[1] = 0, 1 <= p8
	}, this.iM = function(player, a3Y) {
		return bL.du(ag.gp[player] * (a3Y + 1), 1024)
	}, this.a3Z = function(player, a3T) {
		a3T = bL.du(a3T * ag.gp[player], 1024);
		bO.fK[1] = a3T, ag.gp[player] -= a3T
	}, this.gA = function(player, a3a) {
		var fY, fa, f7 = ag.gp[player];
		return a3a <= f7 ? ag.gp[player] -= a3a : (ag.gp[player] = 0, fa = ag.a3P[player] + (fY = 5 * ((f7 = a3a - f7) >> 2)), bd.gD(player, fY - f7, 12), fa <= aD.a3b ? ag.a3P[player] = fa : (ag.a3P[player] = aD.a3b, bd.gD(player, fa - aD.a3b,
			18))), a3a
	}, this.lK = function(player, iN) {
		var gp = ag.gp,
			a3Q = gp[player],
			iN = bL.du(a3Q * (iN + 1), 1024),
			a3V = Math.max(bL.du(a3Q, 10), 1e3);
		return (iN = Math.min(iN, a3Q - a3V)) < 0 ? (gp[player] = 0, a3V = Math.min(1e3, a3Q + aD.a3b - ag.a3P[player]), bO.fK[1] = a3V, ag.a3P[player] += a3V - a3Q, 0) : (bO.fK[1] = a3V, 10 === aD.kS && (iN = b4.a3W(player, iN)), gp[player] -=
			a3V + iN, iN)
	}, this.mJ = function(player) {
		ag.gp[player] -= bO.fK[0] + bO.fK[1]
	}, this.py = function(player, jJ) {
		return (jJ = Math.min(jJ, aD.ek)) < aD.ek && 0 === ag.mi[jJ] && (jJ = aD.ek), (bO.ej[0] = jJ) === aD.ek || bs.eg(player, jJ)
	}, this.q1 = function(player, p7) {
		return 0 !== ag.mi[p7] && !bs.eg(player, p7)
	}, this.a3c = function(player, a3d) {
		for (var gL, en = al.kB, a3e = 0, a3f = lk, aB = 0; aB < en; aB++)
			if (gL = a3f[aB], !this.jY(gL)) {
				if (player === gL) return !0;
				if (++a3e > a3d) return !1
			} return !1
	}, this.lf = function(gL) {
		var a3g = aD.hh ? bh.kg() : ag.gb[lk[0]];
		return a3g >= bL.du(gL * aD.ju, 100)
	}, this.a3h = function(fF, min, max) {
		return Math.floor(bL.hv(isNaN(fF) ? 0 : Number(fF), min, max))
	}
}

function a2D() {
	this.a3i = function(canvas, a3j, a3k) {
		var i = canvas.width,
			j = canvas.height,
			f8 = bA.qa.wM(i, j),
			hp = bA.qa.getContext(f8, !0),
			canvas = (hp.drawImage(canvas, 0, 0), hp.getImageData(0, 0, i, j));
		return a3j(canvas.data, i, j, a3k), hp.putImageData(canvas, 0, 0), f8
	}, this.a3l = function(wX, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wX[3 + aB] = wX[aB], wX[aB] = wX[1 + aB] = wX[2 + aB] = 255
			}
	}, this.a3m = function(wX, i, j) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wX[1 + aB] > wX[2 + aB] + 10 && (wX[3 + aB] = wX[aB], wX[1 + aB] = wX[2 + aB])
			}
	}, this.a3n = function(wX, i, j, a3k) {
		for (var gap = Math.floor(Math.min(i, j) * a3k), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wX[3 + (aB = 4 * (eu + ew * i))] = 255 - 255 * (wX[1 + aB] - wX[aB]) / (255 - wX[aB]))
	}, this.a3o = function(wX, i, j, a3k) {
		for (var eu = i - 1; 0 <= eu; eu--)
			for (var ew = j - 1; 0 <= ew; ew--) {
				var aB = 4 * (eu + ew * i);
				wX[aB] = a3k[0], wX[1 + aB] = a3k[1], wX[2 + aB] = a3k[2]
			}
	}, this.a3p = function(wX, i, j, a3k) {
		for (var gap = Math.floor(i * a3k), eu = 0; eu < i; eu++)
			for (var aB, ew = 0; ew < j; ew++)(eu < gap || ew < gap || i - gap <= eu || j - gap <= ew) && (wX[aB = 4 * (eu + ew * i)] = wX[1 + aB] = wX[2 + aB] = 0)
	}, this.a3q = function(wX, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) 200 < wX[1 + (aB = 4 * (eu + ew * i))] && wX[1 + aB] - 20 > wX[aB] && wX[1 + aB] - 20 > wX[2 + aB] ? wX[aB] + wX[2 + aB] < 40 ? wX[3 + aB] = 0 : (wX[3 + aB] = wX[aB], wX[aB] = 255, wX[1 + aB] = 255, wX[
				2 + aB] = 255) : wX[aB] < 50 && wX[1 + aB] < 50 && wX[2 + aB] < 50 && (wX[aB] + wX[1 + aB] + wX[2 + aB] < 50 ? wX[3 + aB] = 180 : wX[3 + aB] = 180 + Math.floor(75 * (wX[aB] + wX[1 + aB] + wX[2 + aB] - 50) / 100))
	}, this.a3r = function(wX, i, j) {
		for (var ew, aB, eu = i - 1; 0 <= eu; eu--)
			for (ew = j - 1; 0 <= ew; ew--) wX[1 + (aB = 4 * (eu + ew * i))] > wX[aB] + 20 && wX[1 + aB] > wX[2 + aB] + 20 && wX[aB] + wX[2] < 40 && (wX[3 + aB] = 255 - wX[1 + aB], wX[aB] = wX[1 + aB] = wX[2 + aB] = wX[aB])
	}, this.a2p = function(wX, i, j, a3k) {
		for (var e7 = i >> 1, eu = 0; eu < i; eu++)
			for (var ew = 0; ew < j; ew++) Math.sqrt((eu - e7) * (eu - e7) + (ew - e7) * (ew - e7)) > a3k * e7 && (wX[4 * (eu + ew * i) + 3] = 0)
	}
}

function a2A() {
	var a3s = {
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
		a3t = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.ra = function(ux) {
		return ux.replace(a3t, function(match) {
			return a3s[match] || match
		})
	}, this.zE = function(fF) {
		var aB, a3u, a3v, a3w, a3x;
		if (fF < 0) return "-" + this.zE(Math.abs(fF));
		if (fF < 1e3) return fF.toString();
		for (a3u = Math.floor(Math.log(fF + .5) / Math.log(10)) + 1, a3v = Math.floor((a3u - 1) / 3), a3x = (a3w = fF.toString()).substring(a3u - 3, a3u), aB = 1; aB < a3v; aB++) a3x = a3w.substring(a3u - 3 * (aB + 1), a3u - 3 * aB) + " " + a3x;
		return a3w.substring(0, a3u - 3 * a3v) + " " + a3x
	}, this.a3y = function(gL, a3u) {
		return gL.toFixed(a3u) + "%"
	}, this.a3z = function(fF, a40) {
		return fF.toFixed(bL.hv(Math.floor((void 0 === a40 ? 3 : a40) - Math.log10(Math.max(fF, 1))), 0, 8))
	}, this.a41 = function(fF, nK, a3u) {
		return (fF * nK).toFixed(a3u)
	}, this.a0e = function(username) {
		var er, ec = username.indexOf("[");
		return !(ec < 0) && 1 < (er = username.indexOf("]")) - ec && er - ec <= 8 ? username.substring(ec + 1, er).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0e;
	this.a42 = function(qH) {
		for (var f6 = Math.floor(.5 * qH.length + .5), nQ = Math.floor(.5 * (f6 - 1)), aB = 0; aB < nQ; aB++)
			for (var f7 = -1; f7 < 2; f7 += 2) {
				var f8 = f6 + f7 * aB;
				if (" " === qH[f8]) return [this.a0a(qH.substring(0, f8)), this.a43(qH.substring(f8))]
			}
		return [qH.substring(0, f6), qH.substring(f6)]
	}, this.a43 = function(qH) {
		for (var en = qH.length, aB = 0; aB < en; aB++)
			if (" " !== qH[aB]) return qH.substring(aB);
		return qH
	}, this.a0a = function(qH) {
		for (var aB = qH.length - 1; 0 <= aB; aB--)
			if (" " !== qH[aB]) return qH.substring(0, aB + 1);
		return qH
	}, this.a44 = function(qH, a45) {
		return qH.split("(")[0] + "(🧈 " + a45.toFixed(2) + ")"
	}, this.startsWith = function(qH, a46) {
		return qH.substring(0, a46.length) === a46
	}, this.a3F = function(qH, a46) {
		var en = qH.length;
		return qH.substring(en - a46.length, en) === a46
	}, this.a47 = function(g, a48, a49) {
		var qH = "",
			en = g.length - 1;
		a49 = a49 || "";
		for (var aB = 0; aB < en; aB++) qH += a49 + g[aB] + a49 + ",", (aB + 1) % a48 == 0 && (qH += "\n");
		return qH += a49 + g[en] + a49
	}, this.a4A = function(qH, z3, z4) {
		return qH.replace(new RegExp(z3, "g"), z4)
	}
}

function a4B() {
	this.jG = function(player, eZ) {
		aI.xr(player, bM.ev(eZ), bM.ex(eZ)) && (bf.dl = !0), aD.kU && this.j3()
	}, this.j3 = function() {
		aD.hB = !1;
		for (var aB = 0; aB < aD.kA; aB++) 0 !== ag.mi[aB] && 0 === ag.gb[aB] && aI.xy(aB);
		0 !== ag.mi[aD.eX] ? (bd.me[7] = ag.gb[aD.eX], bd.me[8] = ag.gp[aD.eX], aR.a4C(), aW.a4D(), aD.gw || aH.n2(ag.ie[aD.eX] - 5, ag.ih[aD.eX] - 5, ag.ig[aD.eX] + 5, ag.ii[aD.eX] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a4E(18), af.a4F(),
			af.mU(!0), bP.y.a4G(), aL.rr(), aD.pw = null, bb.a4H = !0, bb.a4I(), aD.kU && a0.a1.setState(1)
	}
}

function c1() {
	this.ek = 512, this.a3S = 15e8, this.a4J = 1e9, this.a3b = 5e4, this.a4K = 512, this.g7 = 2, this.eX = 0, this.kA = 0, this.a00 = 0, this.kW = 0, this.zz = 0, this.x2 = 512, this.x7 = 512, this.a3R = 150, this.kU = !0, this.gw = 0, this.zx = 0,
		this.ju = 0, this.nB = !1, this.hB = 0, this.a4L = 0, this.hh = !1, this.x9 = 0, this.xA = 0, this.kS = 0, this.yO = 0, this.pw = null, this.a0F = new yD, this.a4M = 30, this.zu = 0, this.a02 = 0, this.a0E = 0, this.zp = 0, this.data =
		new a4N, this.a4O = new a4P, this.a4Q = 0, this.a4R = "", this.a4S = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a00 = this.kA = this.data.humanCount, this.kU = 1 === this.a00, this.nB = !1, this.gw = this.data.isReplay, this.kS = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.yO = this.data.isContest, this.hh = this.kS < 7 || 9 === this.kS, this.kS = 10 === this.kS && this.kU ? 7 : this.kS, this.kS = 8 === this.kS && 2 !== this.kA ? 7 : this.kS, az.dd(),
				this.x9 = this.data.numberTeams, this.data.teamPlayerCount ? this.xA = +(0 < this.data.teamPlayerCount[0]) : (this.xA = 0, this.hh && this.kU && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.x9 + 1), aD.a4O.a4T())), this.a4M = this.kA <= 2 ? 30 : this.kA <= 50 ? 40 : 50, this.a4L = this.hB = this.data.selectableSpawn, this.pw = this.hB ? new a4B : null, 1 === l.ds ? this.x2 = this.kA : this.x2 = this.data
				.playerCount, this.x7 = this.x2, this.kW = this.x2 - this.kA, this.zz = 0, this.eX = this.data.selectedPlayer, this.zu = 0, this.a02 = 0, this.a0E = 0, this.zp = 0, ay.a4U(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai.a4V(),
				b8.p0.pj = [], bg.dd(), this.zx = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a4W(), ac.de(), ap.a4X(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a4Y(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a4Z(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a4a.putImageData(a4b, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), fq(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a0F.dd(), bf.a4Y(), aH.n1(), 0 === ag.mi[aD.eX] && aX.show(!1, !0), af.mU(!0), av.dd(), bf.dl = !0, this.gw || this.kU && this.hB || a0.a1.setState(1), this.a4Q = 0
		}, this.a1I = function(a4d) {
			b9.pu.a4e.length ? this.a4R = b9.pu.a4e : this.a4R = b9.a4f.zP(), b0.y.a4g(), bq.clear(), this.zx = 0, bf.a4h(), a0.a1.setState(0), aa.setState(0), a4d || bU.eG.show(), 2 === this.a4Q ? t.y.a4i() : 1 === this.a4Q ? t.u(19) : t.u(5, 5)
		}, this.a4j = function() {
			return this.gw ? aM.gx || !bC.a4k : this.kU && (aM.gx || this.hB)
		}, this.a4l = function() {
			return 1 === this.zx && !this.hB
		}
}

function a4N() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4P() {
	this.a4T = function() {
		var a4m = aD.data;
		bA.qi.a2e(a4m.teamPlayerCount, a4m.playerCount), a4m.numberTeams = bA.qi.a2V(a4m.teamPlayerCount, 0), a4m.teamPlayerCount[0] && a4m.teamPlayerCount[7] && (a4m.teamPlayerCount[7] = 0, this.a4T())
	}, this.a4n = function() {
		var a4m = aD.data;
		a4m.mapType < 2 ? bS.a7(bS.a4o(a4m), a4m.mapSeed) : bS.a4p(a4m.canvas)
	}, this.a4q = function() {
		var a4m = aD.data;
		a4m.colorsData || (a4m.colorsData = new Uint32Array(1)), a4m.selectableColor && (a4m.colorsData[0] = bj.y.va()), a4m.selectableName && (a4m.playerNamesData || (a4m.playerNamesData = new Array(1)), a4m.playerNamesData[0] = bj.eK.data[122]
			.value)
	}, this.a4r = function() {
		aD.data = new a4N, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ek), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a4s = [];
	this.pT = function(player, p7, a4t, a4u) {
		player === aD.eX || p7 === aD.eX || !a4u && bA.g9.jY(player) || bA.g9.jY(p7) || this.yP(ag.yQ[player] + " has supported " + ag.yQ[p7] + " with " + bA.rZ.zE(a4t) + " ressource" + (1 === a4t ? "." : "s."))
	}, this.yP = function(qH, pI) {
		qH = {
			eM: aW.a4w(),
			qH: qH,
			pI: pI
		};
		a4s.push(qH), 30 === t.so && t.a4x().yP(qH)
	}, this.clear = function() {
		a4s = [];
		var tC = t.a4y(30);
		tC && tC.clear()
	}, this.a4z = function() {
		return a4s
	}
}

function dT() {
	this.yv = 0, this.gap = 0, this.sQ = 0, this.qg = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.yv = .0022 * bA.qa.qb(.5) * h.hx, this.sQ = this.yv / h.k, this.gap = Math.max(Math.floor((a0.a1.hw() ? .0114 : .01296) * h.hx), 2), this.qg = this.gap / h.k
	}
}

function dS() {
	this.a50 = function() {
		return a0.a1.hw() ? 2 : 1
	}
}

function cC() {
	var r9, eu, ew, a51, a52, a53, eM, a54, a55, a56, a57, gap, zoom, pc, a58;

	function a5M(lN, lO, eR) {
		ac.ei(eR) || -1 === (lN = bN.kx.a5V(lN, lO)) ? aN.a5U(eR) : aN.a5W(lN)
	}

	function a5I(a54) {
		for (var aB = pc.length - 1; 0 <= aB; aB--)
			if (pc[aB] === a54) return 1
	}

	function a5G(a5D) {
		var aB, en;
		if (-1 !== a5D)
			for (en = r9.length, aB = 0; aB < en; aB++)
				if (r9[aB].hZ && r9[aB].eu + 1 === a5D % 4 && r9[aB].ew + 1 === a5D >> 2) return aB;
		return -1
	}

	function a5E(lN, lO) {
		var tC = gap / 2;
		return lN < eu - a51 - 3 * tC || eu + 3 * a51 + 5 * tC < lN || lO < ew - a51 - 3 * tC || ew + 2 * a51 + 3 * tC < lO ? -1 : 4 * (lO < ew - tC ? 0 : lO < ew + a51 + tC ? 1 : 2) + (lN < eu - tC ? 0 : lN < eu + a51 + tC ? 1 : lN < eu + 2 * a51 +
			3 * tC ? 2 : 3)
	}
	this.a59 = function() {
		var aB, f7, a5C = [bB.o8, bB.oM, bB.ng, bB.oi, bB.oZ];
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
			for (f7 = 0; f7 < r9[aB].colors.length; f7++) r9[aB].canvas.push(function(id, a2k) {
				if (id < 20) return bA.canvas.yh(ab.get(3), id, a2k);
				var a2k = ab.get(3).height,
					a2l = bA.qa.wM(a2k, a2k),
					hp = bA.qa.getContext(a2l);
				20 === id ? hp.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wX.yw(aj.rq.yl + aj.rq.z2, hp, 0, 0, a2k);
				return a2l
			}(r9[aB].id, a5C[r9[aB].colors[f7]]))
	}, this.a5B = function() {
		return r9
	}, this.dd = function() {
		pc = [], eu = ew = eM = 0, a52 = a53 = -1e3, this.resize()
	}, this.resize = function() {
		a51 = Math.floor((a0.a1.hw() ? .075 : .0468) * h.hx), zoom = a51 / ab.get(3).height, gap = Math.floor(a51 / 3)
	}, this.a1l = function(lN, lO) {
		return !!this.hZ() && (bf.dl = !0, !!aj.wX.h0(lN, lO, a55) || (lN = function(lN, lO) {
			a53 = a52 = -1e3;
			var a5F = a5G(a5E(lN, lO));
			if (-1 === a5F) return 0;
			if (1 !== r9[a5F].colors[r9[a5F].l5])
				if (5 === a5F) {
					if (! function() {
							var dt = performance.now();
							a58 + 4e3 < dt && (pc = []);
							a58 = dt
						}(), a5I(a54)) return 1;
					pc.push(a54), 16 < pc.length && pc.shift()
				} else if (6 === a5F) {
				for (var aB = pc.length - 1; 0 <= aB; aB--) 0 === ag.mi[pc[aB]] && pc.splice(aB, 1);
				0 < pc.length && (b5.a5J(1, pc, !0) && b8.g9.pb(pc, a54), pc = [])
			} else if (2 === a5F) an.hR(a54) && b8.hD.p6(aR.hH(), a54);
			else if (3 === a5F) aD.hB && b8.hD.hE(a56);
			else if (0 === a5F)
				if (0 === r9[0].l5) {
					if (aD.a4L && aW.a4w() < 350) return 1;
					bV.a5K(4), b8.hD.hK(aR.hH(), a54)
				} else b1.hL(a54, aR.hH());
			else if (1 === a5F) b8.hD.hP(aR.hH(), a56);
			else if (9 === a5F) b8.hD.hS(aR.hH());
			else {
				if (7 === a5F) return bV.a5K(0), aj.wX.show(lN, lO), 2;
				if (4 === a5F) b5.a5J(0, [a54], !0) && b8.g9.pY(a54);
				else {
					if (8 !== a5F) return 0;
					b8.hD.hG(aR.hH(), a57, a54)
				}
			}
			return 1
		}(lN, lO), this.rr(), 2 === lN && (aj.wX.hZ = !0), 0 < lN))
	}, this.a1n = function(lN, lO) {
		this.hZ() || (a52 = lN, a53 = lO, eM = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.h3(mouseX),
			coordY = bM.h5(mouseY),
			coord = bM.fB(coordX, coordY),
			coord = bM.ed(coord);
		bM.h6(coordX, coordY) && a5M(mouseX, mouseY, coord)
	}, this.click = function(lN, lO, a1u) {
		var h2 = bM.h3(lN),
			h4 = bM.h5(lO),
			eZ = bM.fB(h2, h4),
			eR = bM.ed(eZ);
		return !(!bM.h6(h2, h4) || (h2 = (a0.a1.hw() ? .025 : .0144) * h.hx, h4 = performance.now(), Math.abs(lN - a52) > h2) || Math.abs(lO - a53) > h2 || eM + 500 < h4) && (eM = h4, a1u ? (a5M(lN, lO, eR), !1) : aM.gx || this.hZ() || !bA.g9.gz(
			aD.eX) || aD.gw ? (this.rr(), !1) : (aD.hB ? 0 <= (a56 = br.hC(eZ)) && (r9[3].hZ = !0) : 2 === aD.zx ? ac.gN(eR) && (a54 = ac.ef(eR), bA.g9.jY(a54) || (r9[0].hZ = !0, r9[0].l5 = 1, r9[7].hZ = !0)) : (bN.hQ.hR(aD.eX, eZ) && (
			r9[0].hZ = !0, r9[0].l5 = 1, r9[1].hZ = !0, r9[1].l5 = 0, r9[9].hZ = !0, r9[9].l5 = 0), bN.hN.hO(aD.eX, eZ) && (r9[0].hZ = !0, r9[0].l5 = 1, r9[1].hZ = !0, r9[1].l5 = 1, a56 = bO.fP[7]), ac.es(eR) ? (a57 = am.eO.eQ(
			eR)) && (h2 = bM.ed(a57), r9[8].hZ = !0, a54 = ac.ee(h2) ? aD.ek : ac.ef(h2)) : (ac.xw(aD.eX, eR) && (a55 = aD.eX, r9[0].hZ = !0, r9[0].l5 = 1, r9[7].hZ = !0), -1 !== (h4 = br.hI(eZ)) && (ac.ee(h4 << 2) ? (a54 = aD.ek,
			bs.hJ(aD.eX) ? (r9[0].hZ = !0, r9[0].l5 = 0) : ad.fu(aD.eX) && (r9[0].hZ = !0, r9[0].l5 = 3)) : (a54 = ac.ef(h4 << 2), r9[0].l5 = 1, r9[5].hZ = function(a54) {
			return !bA.g9.jY(a54) && !a5I(a54) && b5.a5J(1, [a54], !1)
		}(a54), r9[7].hZ || bA.g9.jY(a54) || (a55 = a54, r9[7].hZ = !0), r9[4].hZ = !bA.g9.jY(a54) && !af.a5Q(a54) && b5.a5J(0, [a54], !1), r9[6].hZ = function(a54) {
			if (0 === pc.length) return !1;
			if (performance.now() > a58 + 4e3) return !(pc = []);
			return !a5I(a54) && ! function(a54) {
				var aB;
				if (aD.hh)
					for (aB = pc.length - 1; 0 <= aB; aB--)
						if (!bs.eg(a54, pc[aB])) return 1;
				return
			}(a54)
		}(a54), bs.eg(a54, aD.eX) ? (bs.hM(aD.eX, a54) ? (r9[0].l5 = 0, r9[0].hZ = !0) : ad.fu(aD.eX) && (r9[0].l5 = 3, r9[0].hZ = !0), r9[0].hZ = this.a5S()) : (r9[2].hZ = !0, an.hR(a54) ? r9[2].l5 = 0 : r9[2].l5 = 1,
			r9[0].hZ = !0))))), this.a5N(lN, lO)))
	}, this.a5N = function(lN, lO) {
		return eu = lN - Math.floor(a51 / 2), ew = lO - Math.floor(a51 / 2), !!this.hZ()
	}, this.a1R = function(lN, lO) {
		return !!this.hZ() && (aj.wX.hZ ? !aj.wX.yu(lN, lO) && (aj.wX.hZ = !1, bf.dl = !0) : function(sB, lN, lO) {
			lN = a5E(lN, lO);
			if (0 <= a5G(lN)) return !1;
			if ((1 === lN || 6 === lN) && 0 <= a5G(2)) return !1;
			if ((6 === lN || 9 === lN) && 0 <= a5G(10)) return !1;
			return sB.rr(), bf.dl = !0
		}(this, lN, lO))
	}, this.rr = function() {
		for (var aB = r9.length - 1; 0 <= aB; aB--) r9[aB].hZ = !1, r9[aB].l5 = 0;
		aj.wX.hZ = !1
	}, this.hZ = function() {
		return this.a5S() || aj.wX.hZ
	}, this.a5S = function() {
		for (var en = r9.length, aB = 0; aB < en; aB++)
			if (r9[aB].hZ) return !0;
		return !1
	}, this.ug = function() {
		if (this.hZ())
			if (aj.wX.hZ) aj.wX.ug();
			else {
				var aB, hp = uh,
					f7 = r9,
					en = f7.length,
					a5a = (a51 + gap) / zoom;
				for (hp.imageSmoothingEnabled = !0, hp.setTransform(zoom, 0, 0, zoom, eu, ew), aB = 0; aB < en; aB++) f7[aB].hZ && uh.drawImage(f7[aB].canvas[f7[aB].l5], f7[aB].eu * a5a, f7[aB].ew * a5a);
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a5b, a5c, a5d, a5e = -1;

	function a5f() {
		var a5g, y7 = canvas.getContext("2d", {
			alpha: !0
		});
		y7.clearRect(0, 0, j, j), y7.fillStyle = bB.ne, y7.fillRect(0, 0, j, j), 0 === a5c && (y7.fillStyle = bB.nj, y7.fillRect(0, 0, j, j)), y7.fillStyle = bB.ni, y7.fillRect(0, 0, j, 1), y7.fillRect(0, 0, 1, j), y7.fillRect(0, j - 1, j, 1), y7
			.fillRect(j - 1, 0, 1, j), a5g = .9 * j / ab.get(0).width, y7.imageSmoothingEnabled = !0, y7.setTransform(a5g, 0, 0, a5g, Math.floor((j - a5g * ab.get(0).width) / 2), Math.floor((j - a5g * ab.get(0).height) / 2)), y7.drawImage(ab.get(0),
				0, 0), y7.setTransform(1, 0, 0, 1, 0, 0)
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
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5b = bA.qa.sO(1, (a0.a1.hw() ? .5 : .45) * j), a5f()
	}, this.a22 = function() {
		this.gx = !this.gx, this.gx ? (bC.a21(!1), aD.gw && bC.a4k && bC.a23(!0), this.a5h()) : (a5c = -1, a5f(), !aD.kU || 1 !== aD.zx || aD.hB || aD.gw || a0.a1.setState(1)), bf.dl = !0
	}, this.a5h = function() {
		(aD.kU || aD.gw) && 1 === aD.zx && (aV.mU(!0), aD.hB || setTimeout(function() {
			bb.a08()
		}, 0), a0.a1.setState(0))
	}, this.h0 = function(lN, lO) {
		return 0 <= (a5e = a5i(lN, lO)) || !aM.gx || aD.kU || aD.gw || be.hZ || aM.a22(), a5e
	}, this.a1R = function(lN, lO) {
		lN = a5i(lN, lO);
		lN !== a5c && (a5c = lN, this.gx || a5f(), bf.dl = !0)
	}, this.a1S = function(lN, lO) {
		lN = a5i(lN, lO);
		return -1 !== lN && a5e === lN && (this.gx ? aD.nB ? (0 <= lN && bC.a21(!1), !aD.gw) : (0 === lN ? aD.a1I() : 1 === lN ? this.a22() : 2 === lN && t.u(1, 0), !0) : 9 === lN && (this.a22(), !0))
	}, this.ug = function() {
		var i;
		this.gx ? (i = Math.floor(5.5 * j), uh.setTransform(1, 0, 0, 1, bc.gap, aR.ew), uh.fillStyle = bB.ne, uh.fillRect(0, 0, i, j), 0 === a5c ? (uh.fillStyle = bB.nj, uh.fillRect(0, 0, 4 * j, j)) : 1 === a5c && (uh.fillStyle = bB.nj, uh
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), uh.fillStyle = bB.ni, uh.fillRect(0, 0, i, 1), uh.fillRect(0, 0, 1, j), uh.fillRect(4 * j, 0, 1, j), uh.fillRect(0, j - 1, i, 1), uh.fillRect(i - 1, 0, 1, j), uh.font = a5b, bA.qa
			.textBaseline(uh, 1), bA.qa.textAlign(uh, 1), uh.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a5m(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.ew + .3 * j, i), i = 1, uh.setTransform(1, 0, 0, 1, bc.gap, aR.ew - i * a5d * bc.gap - i *
				j), uh.fillStyle = bB.ne, uh.fillRect(0, 0, 4 * j, j), a5c === i + 1 && (uh.fillStyle = bB.nj, uh.fillRect(0, 0, 4 * j, j)), uh.fillStyle = bB.ni, uh.fillRect(0, 0, 4 * j, 1), uh.fillRect(0, 0, 1, j), uh.fillRect(4 * j, 0, 1,
				j), uh.fillRect(0, j - 1, 4 * j, 1), uh.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), uh.setTransform(1, 0, 0, 1, 0, 0)) : uh.drawImage(canvas, bc.gap, aR.ew)
	}, this.qB = function(player) {
		return 0 !== ag.mi[player] && 2 !== aD.zx && !bA.g9.jY(player)
	}, this.a5m = function(eu, ew, en) {
		uh.setTransform(1, 0, 0, 1, eu, ew), uh.lineWidth = bc.yv, uh.strokeStyle = bB.ni, uh.beginPath(), uh.moveTo(0, 0), uh.lineTo(en, en), uh.moveTo(0, en), uh.lineTo(en, 0), uh.stroke()
	}
}

function cE() {
	var a5o, j, a5p, a5q, a5r, a5s, a5t, a5u, a5v;

	function y3() {
		return aR.a6D(aN.a69()) ? aw.hZ ? __fx.settings.keybindButtons ? aR.ew - 2 * aR.j - 3 * a5p : aR.ew - aR.j - 2 * a5p : __fx.settings.keybindButtons ? aR.ew - aR.j - 2 * a5p : aR.ew - a5p : bC.a6D(aN.a6C()) ? aw.hZ ? bC.y3() - aR.j - 2 * a5p :
			bC.y3() - a5p : aw.hZ ? h.j - aR.j - (bk.a50() + 1) * a5p : h.j - bk.a50() * bc.gap
	}

	function a60(dt, qH, id, gL, a63, a64, kl, a65, a66, a67, a6I) {
		var aB, y7, a2l, qS, a6J = void 0 !== a66,
			i = Math.floor(aQ.measureText(qH, aN.a5b) + 1.5 * a5q + (a6J ? j : 1.5 * a5q));
		if (bf.dl = !0, a6I || bq.yP(qH, a66), i + 2 * a5p + aR.j > h.i && !a6J && 50 !== id && 20 < qH.length) a60(dt, (a6I = bA.rZ.a42(qH))[0], id, gL, a63, a64, kl, a65, a66, a67, !0), a60(dt, a6I[1], id, gL, a63, a64, kl, a65, a66, a67, !0);
		else if (a6I = i + (50 === id ? a5r : 0), (a2l = document.createElement("canvas")).width = i, a2l.height = j, (y7 = a2l.getContext("2d", {
				alpha: !0
			})).font = aN.a5b, bA.qa.textBaseline(y7, 1), bA.qa.textAlign(y7, 0), y7.clearRect(0, 0, i, j), y7.fillStyle = a64, y7.fillRect(0, 0, i, j), y7.fillStyle = a63, y7.fillText(qH, Math.floor(1.5 * a5q), Math.floor(j / 2)), a6J && (y7
				.imageSmoothingEnabled = !0, aj.wX.yw(a66, y7, i - j, 0, j)), 0 === (qS = {
				eM: dt,
				qH: qH,
				id: id,
				player: gL,
				canvas: a2l,
				a63: a63,
				a64: a64,
				i: i,
				a6A: a6I,
				kl: kl,
				a65: a65,
				a66: a66,
				a67: a67
			}).eM || 0 < a5o.length && 0 < a5o[0].eM) a5o.unshift(qS);
		else {
			for (aB = 1; aB < a5o.length; aB++)
				if (0 < a5o[aB].eM) return void a5o.splice(aB, 0, qS);
			a5o.push(qS)
		}
	}

	function a61(e7, tC, f7) {
		return "rgb(" + e7 + "," + tC + "," + f7 + ")"
	}

	function a6K(id, gG) {
		for (var en = a5o.length, aB = 0; aB < en; aB++) a5o[aB].id === id && gG-- <= 0 && (a5o.splice(aB, 1), aB--, en--)
	}

	function a6L(id, player) {
		for (var f1 = !1, aB = a5o.length - 1; 0 <= aB; aB--) a5o[aB].id !== id || player !== aD.ek && a5o[aB].player !== player || (a5o.splice(aB, 1), f1 = !0);
		return f1
	}

	function a6h(qH) {
		a60(340, qH, 6, 0, a61(215, 245, 255), bB.nf, -1, !1)
	}
	this.a5w = "", this.dd = function() {
		var self;
		a5u = 0, a5t = a0.a1.hw() ? 7 : 12, a5s = {
			zl: [0, 0, 0],
			a5x: [0, 0, 0],
			eF: [220, 180, 180],
			uf: [0, 0, 0],
			f8: [0, 0, 0]
		}, a5o = [], this.resize(), aD.hB && this.a09(0, 18), bS.wK.wL[bS.eT].name.length && a6h(L(88, [bS.wK.wL[bS.eT].name])), a6h(L(89, [bS.ey - 2 + "x" + (bS.ez - 2)])), a6h(L(90, [bA.rZ.zE(ap.a6i)])), ap.a6i !== ap.a6j && a6h(L(91, [bA
			.rZ.zE(ap.a6j) + " (" + bA.rZ.a3y(100 * ap.a6j / ap.a6i, 1) + ")"
		])), 0 < ap.a6k && a6h(L(66, [bA.rZ.zE(ap.a6k) + " (" + bA.rZ.a3y(100 * ap.a6k / ap.a6i, 1) + ")"])), 0 < ap.a6l && a6h(L(92, [bA.rZ.zE(ap.a6l) + " (" + bA.rZ.a3y(100 * ap.a6l / ap.a6i, 1) + ")"])), 10 === aD.kS && a60(120, L(93), 6,
			0, a61(235, 255, 120), bB.nf, -1, !1), 0 !== (self = this).a5w.length && (a60(200, self.a5w, 0, 0, bB.ni, bB.nf, -1, !1), self.a5w = ""), aD.yO && a60(340, L(44), 6, 0, a61(255, 200, 0), bB.nf, -1, !1)
	}, this.resize = function() {
		var a62, aB;
		if (j = (j = Math.floor((a0.a1.hw() ? .031 : .0249) * h.hx)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5b = bA.qa.sO(1, this.fontSize), a5p = bc.gap, a5q = Math.floor(j / 5), 0 < a5o.length)
			for (a62 = a5o, a5o = [], aB = a62.length - 1; 0 <= aB; aB--) a60(a62[aB].eM, a62[aB].qH, a62[aB].id, a62[aB].player, a62[aB].a63, a62[aB].a64, a62[aB].kl, a62[aB].a65, a62[aB].a66, a62[aB].a67, !0);
		this.a68()
	}, this.a68 = function() {
		a5v = document.createElement("canvas");
		var qH = L(45),
			y7 = (a5r = aQ.measureText(qH, this.a5b) + 5 * a5q, a5v.height = j, a5v.width = a5r, a5v.getContext("2d", {
				alpha: !0
			}));
		y7.font = this.a5b, bA.qa.textBaseline(y7, 1), bA.qa.textAlign(y7, 1), y7.clearRect(0, 0, a5r, j), y7.fillStyle = bB.o5, y7.fillRect(0, 0, a5r, j), y7.fillStyle = bB.ni, y7.fillText(qH, Math.floor(a5r / 2), Math.floor(j / 2))
	}, this.a69 = function() {
		var en;
		return aw.hZ ? aw.i : 0 === (en = a5o.length) ? 0 : 1 === en ? a5o[0].a6A : a6B(a5o[0].a6A, a5o[1].a6A)
	}, this.a6C = function() {
		var en = a5o.length;
		return aw.hZ ? en ? a6B(aw.i, a5o[0].a6A) : aw.i : 0 === en ? 0 : 1 === en ? a5o[0].a6A : 2 === en ? a6B(a5o[0].a6A, a5o[1].a6A) : a6B(a6B(a5o[0].a6A, a5o[1].a6A), a5o[2].a6A)
	}, this.h0 = function(eu, ew) {
		for (var n8, a6E, a6F = y3(), aB = a5o.length - 1; 0 <= aB; aB--)
			if ((a6E = a6F - (aB + 1) * j) <= ew && ew < a6E + j) return 50 === a5o[aB].id ? eu >= h.i - a5r - a5p - a5o[aB].i && (eu >= h.i - a5r - a5p ? b8.g9.pY(a5o[aB].player) : aH.n3(a5o[aB].player, 800, !1, 0), !0) : eu >= h.i - a5o[aB].i -
				a5p && (736 === a5o[aB].id ? (a6E = a5o[aB].qH.split(" "), window.open(a6E[a6E.length - 1], "_blank")) : a5o[aB].a65 && (a5o[aB].a67 && a5o[aB].a67.f6 ? (a6E = a5o[aB].a67.eZ, n8 = bM.ev(a6E) - 10, a6E = bM.ex(a6E) - 10, aH
					.n2(n8, a6E, 19 + n8, 19 + a6E)) : a5o[aB].a67 && a5o[aB].a67.f7 ? aH.n4(a5o[aB].player, a5o[aB].a67.n5) : (aH.n3(a5o[aB].player, 800, !1, 0), 0 <= a5o[aB].kl && (n8 = a5o[aB].kl, a5o[aB].kl = a5o[aB].player, a5o[
					aB].player = n8))), !0);
		return !1
	}, this.yP = function(dt, qH, id, gL, a63, a64, kl, a65, a66, a67) {
		a60(dt, qH, id, gL, a63, a64, kl, a65, a66, a67)
	}, this.a6H = function(r) {
		a60(300, r, 252, 0, bB.ni, bB.nf, -1, !1)
	}, this.a4E = function(id) {
		for (var aB = a5o.length - 1; 0 <= aB; aB--) a5o[aB].id === id && (a5o[aB].eM = 1)
	}, this.a09 = function(player, id) {
		0 === id ? (aQ.jG(player, 0), a6K(423, 0), a60(160, L(46, [ag.yQ[player]]), 423, player, "rgb(10,220,10)", bB.nf, -1, !1)) : 1 === id ? (a6L(50, aD.ek), aQ.jG(player, 1), a60(360, L(47, [ag.yQ[player]]), 0, player, bB.oO, bB.nf, -1, !0),
			aH.n3(player, 2700, !1, 0)) : 2 === id ? (aQ.jG(player, 2), a60(0, L(48), 0, player, "rgb(10,255,255)", bB.nf, -1, !0), aH.n3(player, 2700, !1, 0)) : 3 === id ? (aQ.jG(player, 2), a60(0, L(49, [ag.yQ[player]]), 0, player, bB.ni,
			bB.nf, -1, !0), aH.n3(player, 2700, !1, 0)) : 4 === id ? this.a6M(1, player, player) : 5 === id ? 2 === ag.a3H[player] || bA.g9.jY(aD.eX) || (function(id, md) {
			var aB, a6W = 0,
				en = a5o.length;
			for (aB = 0; aB < en; aB++)
				if (a5o[aB].id === id && md <= ++a6W) return a5o.splice(aB, 1)
		}(1, 5), af.a6O(player) ? a60(180, L(50, [ag.yQ[player]]), 1, player, a61(255, 200, 180), bB.nf, -1, !0) : (a6K(573, 0), a60(180, L(51, [ag.yQ[player]]), 573, player, bB.oO, bB.nf, -1, !0))) : 18 === id ? a60(255, L(52), 18, 0, bB.ni,
			bB.nf, -1, !1) : 21 === id ? a60(220, L(53), id, 0, bB.ni, bB.nf, -1, !1) : 22 === id ? this.a6M(2, player, player) : 59 === id && a60(0, L(54), id, 0, bB.oh, bB.nf, 0, !1)
	}, this.a1E = function(r) {
		a60(200, L(55, [r]), 94, 0, bB.ni, bB.oK, -1, !1)
	}, this.a0L = function(a6P) {
		if (aD.eX === a6P && !aD.kU)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a60(0, "Your Win Count is now " + __fx.wins.count, 3, a6P, bB.ni, bB.nf, -1, !0);
		ag.gb[a6P] && (aQ.jG(a6P, 2), aD.kA < 100 ? a60(0, L(49, [ag.yQ[a6P]]), 3, a6P, bB.ni, bB.nf, -1, !0) : a60(0, L(56, [ag.yQ[a6P]]), 3, a6P, bB.ni, bB.nf, -1, !0))
	}, this.a5U = function(eR) {
		var qH, a6R, a6Q = "(" + bM.ev(eR >> 2) + ", " + bM.ex(eR >> 2) + ")",
			a65 = !1,
			player = 0;
		ac.ei(eR) ? ac.ee(eR) ? a6Q = L(57, [a6Q]) : (player = ac.ef(eR), aD.gw && !1 === __fx.hoveringTooltip.active && (aD.eX = player), qH = L(58, [bA.y7.a2x(ag.a0b[player], bA.qa.sO(0, 10), 150)]) + "   ", qH = (qH += L(59, [bA.rZ.zE(ag.gp[
				player])]) + "   ") + L(60, [bA.rZ.zE(ag.gb[player])]) + "   ", aD.hh && (a6R = bg.a0I[bg.kX[bg.el[player]]], qH += L(61) + ": " + a6R + "   "), bA.g9.jY(player) && (qH += L(62) + ": " + aE.kL[aE.hW[player]] + "   "), a6Q =
			qH = (qH += L(63, [player]) + "   ") + L(64, [a6Q]), a65 = !0) : a6Q = ac.es(eR) ? L(65, [a6Q]) + "   #" + ac.eV(eR) : L(66, [a6Q]), bf.dl = !0, a6K(55, 0), a60(220, a6Q, 55, player, bB.ni, bB.nf, -1, a65, void 0, void 0, !0)
	}, this.a5W = function(a6S) {
		var l3 = bN.y,
			player = l3.m3[a6S] >> 3,
			qH = (bf.dl = !0, a6K(55, 0), L(67, [ag.yQ[player]]) + "   ");
		a60(220, qH += L(59, [bA.rZ.zE(l3.a6T[a6S])]), 55, player, bB.ni, bB.nf, -1, !0)
	}, this.pH = function(p3, a6U, pI) {
		p3 === aD.eX ? a60(175, " " + L(68, [ag.yQ[a6U]]) + ": ", 1001, a6U, a61(200, 255, 210), bB.nf, -1, !0, pI) : this.a6V(p3, pI)
	}, this.a6V = function(p3, pI) {
		a6K(1e3, 0), a60(175, ag.yQ[p3] + ": ", 1e3, p3, bB.ni, "rgba(5,60,25,0.9)", -1, !0, pI)
	}, this.a0K = function() {
		var r;
		aD.a02 ? (r = L(69), aQ.a0J(L(70), 2, 1, 12), a60(0, r, 40, 0, "rgb(10,220,10)", bB.nf, -1, !1)) : (r = L(71), aQ.a0J(L(72), 2, 0, 16), a60(0, r, 41, 0, bB.ni, bB.nf, -1, !1))
	}, this.yE = function() {
		var gG = ag.yQ,
			eq = aD.data;
		a60(300, gG[0] + " [" + aD.a0F.yK(eq.elo[0]) + "] vs " + gG[1] + " [" + aD.a0F.yK(eq.elo[1]) + "]", 65, 0, bB.nZ, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6X = function(r) {
		a60(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6Y = function(a6Z) {
		a60(0, L(a6Z ? 73 : 74), 247, 0, bB.og, bB.nf, -1, !1)
	}, this.yM = function(yJ, yL, a6a) {
		var eq = aD.data,
			gG = ag.yQ;
		a60(0, gG[0] + ": " + aD.a0F.yK(eq.elo[0]) + " -> " + yJ, 66, 0, bB.ni, a6a[0], -1, !1), a60(0, gG[1] + ": " + aD.a0F.yK(eq.elo[1]) + " -> " + yL, 66, 1, bB.ni, a6a[1], -1, !1)
	}, this.pZ = function(player, id) {
		0 === id ? a6L(50, player) ? (a60(128, L(75, [ag.yQ[player]]), 52, player, a61(180, 255, 180), bB.nf, -1, !0), af.q9(player, 2, 255)) : a60(384, L(76, [ag.yQ[player]]), 51, player, a61(210, 210, 255), bB.nf, -1, !0) : a6L(51, player) ? (
			a60(128, L(77, [ag.yQ[player]]), 52, player, bB.ni, "rgba(60,120,10,0.9)", -1, !0), af.q9(player, 2, 255)) : (a60(384, L(78, [ag.yQ[player]]), 50, player, bB.ni, "rgba(90,90,90,0.9)", -1, !0), af.q9(player, 2, 96))
	}, this.pd = function(zl, target) {
		var color = a61(210, 255, 210);
		1 < zl.length ? a60(230, L(79, [zl.length, ag.yQ[target]]), 66, target, color, bB.nf, -1, !0) : a60(230, L(80, [ag.yQ[zl[0]], ag.yQ[target]]), 66, zl[0], color, bB.nf, target, !0)
	}, this.a6b = function(player, target) {
		a60(230, L(81, [ag.yQ[player], ag.yQ[target]]), 66, player, bB.ni, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6c = function(id, gG) {
		a6K(id, gG)
	}, this.a04 = function(id, player) {
		a6L(id, void 0 === player ? aD.ek : player)
	}, this.a6d = function(id) {
		for (var aB = a5o.length - 1; 0 <= aB; aB--)
			if (a5o[aB].id === id) return a5o[aB];
		return null
	}, this.pU = function(a4t, a6e, player) {
		2 !== ag.a3H[aD.eX] && a60(200, 1 === a4t ? L(82, [ag.yQ[player]]) : L(83, [bA.rZ.zE(a4t), ag.yQ[player]]), 30, player, "rgb(190,255,190)", bB.nf, -1, !0)
	}, this.a6g = function(a4t, player) {
		2 !== ag.a3H[aD.eX] && (a6K(31, 0), 2 === ag.a3H[player] || player >= aD.kA ? a60(150, 1 === a4t ? L(84, [ag.yQ[player]]) : L(85, [ag.yQ[player], bA.rZ.zE(a4t)]), 31, player, bB.nZ, "rgba(205,205,205,0.9)", -1, !0) : a60(150, 1 === a4t ?
			L(86, [ag.yQ[player]]) : L(87, [ag.yQ[player], bA.rZ.zE(a4t)]), 31, player, bB.nZ, "rgba(205,255,205,0.9)", -1, !0))
	}, this.a03 = function(bu) {
		for (var f8 = bf.k7(), aB = 2; 0 <= aB; aB--) 0 < a5s.uf[aB] && (bu || a5s.f8[aB] < f8 - 220) && this.a6m(aB)
	}, this.a6m = function(id) {
		var qH, en = a5s.uf[id],
			player = a5s.zl[id];
		a5s.uf[id] = 0, 1 === en ? (0 === id ? qH = L(94, [ag.yQ[player], ag.yQ[a5s.a5x[0]]]) : 1 === id ? qH = L(95, [ag.yQ[player]]) : 2 === id ? qH = L(96, [ag.yQ[player]]) : 3 === id && (qH = L(97, [ag.yQ[player]])), a6K(7, 0), a60(a5s.eF[
			id], qH, 7, a5s.a5x[id], bB.ni, bB.nf, -1, !0)) : (qH = L(0 === id ? 98 : 1 === id ? 99 : 100, [en]), a6K(7, 0), a60(a5s.eF[id], qH, 7, player, bB.ni, bB.nf, -1, !1))
	}, this.a6M = function(id, hF, kl) {
		var f8 = bf.k7(),
			en = a5s.uf[id] + 1;
		a5s.uf[id]++, a5s.zl[id] = hF, a5s.a5x[id] = kl, 1 === en && (a5s.f8[id] = f8), (1 === en && (aD.a00 < 32 || 2 === aD.zx) || 1 < en && (a5s.f8[id] < f8 - 140 || 2 === aD.zx)) && this.a6m(id)
	}, this.j3 = function() {
		b2.j3();
		for (var jQ = (jQ = a5o.length - a5t) <= 1 ? 1 : jQ * jQ, aB = a5o.length - 1; 0 <= aB; aB--) 0 < a5o[aB].eM && (a5o[aB].eM -= jQ, a5o[aB].eM <= 0) && (bf.dl = !0, a5o.splice(aB, 1));
		! function() {
			var gG, aB;
			if (128 !== a5u && !(++a5u < 128))
				for (gG = 5, aB = al.kB - 1; 0 <= aB; aB--) 1 === ag.a3H[al.kC[aB]] && 0 < gG-- && a60(240, L(97, [ag.yQ[al.kC[aB]]]), 1, al.kC[aB], bB.nZ, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a03(!1)
	}, this.ug = function() {
		for (var x5, ew = y3(), aB = a5o.length - 1; 0 <= aB; aB--) x5 = ew - (aB + 1) * j, 50 === a5o[aB].id ? (uh.drawImage(a5o[aB].canvas, h.i - a5o[aB].i - a5r - a5p, x5), uh.drawImage(a5v, h.i - a5r - a5p, x5)) : uh.drawImage(a5o[aB].canvas,
			h.i - a5o[aB].i - a5p, x5)
	}
}

function cF() {
	var a6o, a6p, a6q, i, j, font, qH;

	function a6v(a6w) {
		return a6w < 10 ? "0" + a6w : String(a6w)
	}
	this.dd = function() {
		qH = L(101)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .53 : .36) * h.hx), j = Math.floor(.065 * i), font = bA.qa.sO(1, Math.floor(.9 * j)), a6q--, this.setTime()
	}, this.j3 = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a6r = dt.getUTCMinutes(), a6s = dt.getUTCSeconds(), a6t = [0, 10, 20, 25, 30, 35, 40, 45, 50], a6u = (a6p = 3600 - 60 * a6r - a6s, a6p %= 300, 300), aB = 0; aB < a6t.length; aB++)
			if ((60 * a6r + a6s + a6p) % 3600 == 60 * a6t[aB]) {
				a6u = 0;
				break
			} return a6p += a6u, a6o = qH + a6v(Math.floor(a6p / 60)) + ":" + a6v(a6p % 60), a6q !== (a6q = 60 * a6r + a6s) && (i = aQ.measureText(a6o, font), i += Math.floor(.4 * j), !0)
	}, this.ug = function() {
		uh.lineWidth = 1 + Math.floor(j / 15), uh.translate(h.i - j, Math.floor(.5 * (h.j + i))), uh.rotate(-Math.PI / 2), uh.fillStyle = bB.ni, uh.fillRect(0, 0, i, j), uh.strokeStyle = bB.nZ, uh.strokeRect(0, 0, i, j + 10), uh.fillStyle = bB
			.nZ, uh.font = font, bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 1), uh.fillText(a6o, Math.floor(i / 2), Math.floor(.59 * j)), uh.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a4s, a6x, a6y, wr, a6z, a70 = 0,
		a71 = 0;

	function a73(aB) {
		var a75 = !0,
			z3 = bB.ni,
			i = (1 === a4s[aB].id ? a4s[aB].y7.fillStyle = bB.ob : a4s[aB].jJ === aD.ek ? a4s[aB].y7.fillStyle = bB.nt : (ac.a76(a4s[aB].jJ), a4s[aB].y7.fillStyle = bA.color.nc(bO.fM[0], bO.fM[1], bO.fM[2], .87), 400 < bA.qi.a2P(bO.fM, 0, 2) && (
				a75 = !1, z3 = bB.nZ)), a4s[aB].canvas.width),
			sv = (a4s[aB].y7.clearRect(0, 0, i, wr), a4s[aB].y7.fillRect(0, 0, i, wr), a4s[aB].y7.fillStyle = z3, ! function(y7, i, wr) {
				y7.fillRect(0, 0, i, 1), y7.fillRect(0, wr - 1, i, 1), y7.fillRect(0, 0, 1, wr), y7.fillRect(i - 1, 0, 1, wr)
			}(a4s[aB].y7, i, wr), a6x + 2 * wr < i && (a4s[aB].y7.fillRect(i - a6x - wr, 0, 1, wr), a4s[aB].y7.fillText(ag.yQ[a4s[aB].jJ], Math.floor((i - a6x) / 2), Math.floor(.57 * wr))), 0 !== a4s[aB].id ? 0 : wr);
		a4s[aB].y7.fillText(bA.rZ.zE(a4s[aB].hW), Math.floor(i - a6x / 2 - sv), Math.floor(.57 * wr)),
			function(aB, i, sv, a75) {
				a4s[aB].y7.fillStyle = a75 ? bB.nk : bB.ng;
				a75 = Math.floor(a6x * a4s[aB].hW / a4s[aB].a7C);
				a4s[aB].y7.fillRect(Math.floor(i - a6x - sv), wr - a6z, a75, a6z)
			}(aB, i, sv, a75), 0 === a4s[aB].id ? (a79(aB, i, a75, z3), function(aB, i, a75) {
				a4s[aB].y7.strokeStyle = a75 ? bB.o0 : bB.oA, a4s[aB].y7.fillRect(wr, 0, 1, wr);
				a75 = i - wr;
				a4s[aB].y7.beginPath(), a4s[aB].y7.moveTo(Math.floor(.3 * wr + a75), Math.floor(wr / 2)), a4s[aB].y7.lineTo(Math.floor(wr - .3 * wr + 0 + a75), Math.floor(wr / 2)), a4s[aB].y7.stroke(), a4s[aB].y7.beginPath(), a4s[aB].y7.moveTo(
					Math.floor(wr / 2 + a75), Math.floor(.3 * wr)), a4s[aB].y7.lineTo(Math.floor(wr / 2 + a75), Math.floor(wr - .3 * wr + 0)), a4s[aB].y7.stroke()
			}(aB, i, a75)) : a79(aB, 2 * wr, a75, z3)
	}

	function a79(aB, i, a75, z3) {
		a4s[aB].y7.strokeStyle = a4s[aB].a7D ? bB.nr : a75 ? bB.oG : bB.oH, a4s[aB].y7.fillStyle = z3, a4s[aB].y7.fillRect(i - wr, 0, 1, wr), a4s[aB].y7.lineWidth = Math.max(Math.floor(wr / 12), 3), a4s[aB].y7.lineCap = "round";
		a75 = .35;
		i = wr + 1, a4s[aB].y7.beginPath(), a4s[aB].y7.moveTo(Math.floor(i - a75 * wr + 0), Math.floor(a75 * wr)), a4s[aB].y7.lineTo(Math.floor(i - wr + a75 * wr), Math.floor(wr - a75 * wr + 0)), a4s[aB].y7.stroke(), a4s[aB].y7.beginPath(), a4s[aB]
			.y7.moveTo(Math.floor(i - wr + a75 * wr), Math.floor(a75 * wr)), a4s[aB].y7.lineTo(Math.floor(i - a75 * wr + 0), Math.floor(wr - a75 * wr + 0)), a4s[aB].y7.stroke()
	}

	function a7P(g, a7N) {
		for (var hW, aB = a7N - 1; 0 <= aB; aB--) hW = ad.g0(aD.eX, aB), g[aB].hW !== hW && (g[aB].hW = hW, g[aB].a7C = Math.max(hW, g[aB].a7C), g[aB].a74 = !0)
	}

	function a7T(g, a7R) {
		for (var t8 = aD.eX << 3, a6T = bN.y.a6T, m0 = bN.y.m0, a7V = bN.y.a7V, aB = a7R - 1; 0 <= aB; aB--) {
			var a7W = a7V[t8 + aB],
				hW = a6T[a7W];
			g[aB].hW !== hW ? (g[aB].hW = hW, g[aB].a7C = Math.max(hW, g[aB].a7C), g[aB].a74 = !0) : g[aB].a7D || m0[a7W] % 64 != 5 || (g[aB].a7D = !0, g[aB].a74 = !0)
		}
	}

	function a72(a4v) {
		a4v.canvas = document.createElement("canvas"), bS.wQ.font = a6y;
		var i = a6x;
		a4v.jJ < aD.ek && 0 === a4v.id && (i += Math.floor(bS.wQ.measureText(ag.yQ[a4v.jJ] + "000").width)), i += wr, 0 === a4v.id && (i += wr), a4v.canvas.width = i, a4v.canvas.height = wr, a4v.y7 = a4v.canvas.getContext("2d", {
			alpha: !0
		}), a4v.y7.font = a6y, bA.qa.textBaseline(a4v.y7, 1), bA.qa.textAlign(a4v.y7, 1)
	}

	function a7J(aB) {
		return aU.a7X() ? h.i - a4s[aB].canvas.width - bc.gap : aU.eu
	}

	function a7K(aB) {
		return Math.floor(2 * bc.gap + (aU.a7X() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * wr))
	}
	this.dd = function() {
		a70 = a71 = 0, a4s = [], this.resize()
	}, this.resize = function() {
		a6y = aN.a5b, wr = aN.fontSize + 5, wr = Math.floor(1.25 * wr), a0.a1.hw() && (wr = Math.floor(1.25 * wr)), a6z = Math.floor(.15 * wr), bS.wQ.font = a6y, a6x = Math.floor(bS.wQ.measureText("02 000 000 0000").width);
		for (var aB = a4s.length - 1; 0 <= aB; aB--) a72(a4s[aB]), a73(aB)
	}, this.mU = function() {
		for (var aB = a4s.length - 1; 0 <= aB; aB--) a4s[aB].a74 && (a4s[aB].a74 = !1, a73(aB))
	}, this.h0 = function(lN, lO) {
		if (2 !== aD.zx && 0 !== ag.mi[aD.eX] && !aD.gw && !bA.g9.jY(aD.eX))
			for (var a7E, a7F, a7G, a7H = a0.a1.hw() ? wr : 0, a7I = a0.a1.hw() ? Math.floor(.15 * wr) : 0, aB = a4s.length - 1; 0 <= aB; aB--)
				if (a7E = a7J(aB), a7F = a7K(aB), a7G = a4s[aB].canvas.width, a7F - a7I <= lO && lO <= a7F + wr + a7I) {
					if (a7E - a7H <= lN && lN <= a7E + wr + a7H) return a4s[aB].a7D || (a4s[aB].a74 = !0, a4s[aB].a7D = !0, 0 === a4s[aB].id ? b8.hD.pF(a4s[aB].jJ) : b8.hD.pE(a4s[aB].jJ)), !0;
					if (0 === a4s[aB].id && a7E + a7G - wr - a7H <= lN && lN <= a7E + a7G + a7H) return bV.a5K(3), b8.hD.hK(aR.hH(), a4s[aB].jJ), !0
				} return !1
	}, this.j3 = function() {
		var a2X, a2Y, g, a7N;
		0 === ag.mi[aD.eX] || bA.g9.jY(aD.eX) && !aD.gw || (a2X = a4s.slice(0, a70), a2Y = a4s.slice(a70, a70 + a71), g = a2X, a7N = ad.fu(aD.eX), function(g, a7N) {
			if (a70 !== a7N) return 1;
			for (var aB = a7N - 1; 0 <= aB; aB--)
				if (g[aB].jJ !== ad.fz(aD.eX, aB)) return 1;
			return
		}(g, a7N) ? a7P(g = function(g, a7N) {
			var aB, jJ, f7, hW, a62 = [];
			loop: for (aB = 0; aB < a7N; aB++) {
				for (jJ = ad.fz(aD.eX, aB), f7 = 0; f7 < g.length; f7++)
					if (g[f7].jJ === jJ) {
						a62.push(g.splice(f7, 1)[0]);
						continue loop
					} hW = ad.g0(aD.eX, aB), a72(hW = {
					jJ: jJ,
					hW: hW,
					a7C: hW,
					id: 0,
					a74: !0,
					a7D: !1,
					canvas: null,
					y7: null
				}), a62.push(hW)
			}
			return a62
		}(g, a7N), a7N) : a7P(g, a7N), a2X = g, a2Y = function(g) {
			var a7R = bN.y.ps[aD.eX];
			return function(g, a7R) {
				if (a71 !== a7R) return 1;
				for (var t8 = aD.eX << 3, m2 = bN.y.m2, a7V = bN.y.a7V, aB = a7R - 1; 0 <= aB; aB--) {
					var a7W = a7V[t8 + aB];
					if (g[aB].jJ !== m2[a7W]) return 1
				}
				return
			}(g, a7R) ? a7T(g = function(g, a7R) {
				var aB, jJ, f7, a62 = [],
					t8 = aD.eX << 3,
					m2 = bN.y.m2,
					a6T = bN.y.a6T,
					a7V = bN.y.a7V;
				loop: for (aB = 0; aB < a7R; aB++) {
					var a7W = a7V[t8 + aB];
					for (jJ = m2[a7W], f7 = 0; f7 < g.length; f7++)
						if (g[f7].jJ === jJ) {
							a62.push(g.splice(f7, 1)[0]);
							continue loop
						} a7W = a6T[a7W], a72(a7W = {
						jJ: jJ,
						hW: a7W,
						a7C: a7W,
						id: 1,
						a74: !0,
						a7D: !1,
						canvas: null,
						y7: null
					}), a62.push(a7W)
				}
				return a62
			}(g, a7R), a7R) : a7T(g, a7R), g
		}(a2Y), a70 = a2X.length, a71 = a2Y.length, a4s = a2X.concat(a2Y))
	}, this.ug = function() {
		if (0 !== ag.mi[aD.eX] && (!bA.g9.jY(aD.eX) || aD.gw))
			for (var aB = a4s.length - 1; 0 <= aB; aB--) uh.drawImage(a4s[aB].canvas, a7J(aB), a7K(aB))
	}
}

function cH() {
	var a5o, kF, a7Y, a7Z, j, a5b, fontSize, a7a, a7b, a7c, a7d, canvas, y7, mv, a7e;

	function uy(aB) {
		return L(0 === aB ? 102 : 1 === aB ? 103 : 2 === aB ? 104 : 105)
	}

	function a7l() {
		uh.drawImage(canvas, bc.gap + (aD.hh ? bc.gap + bh.a7m() : 0), a7n + 2 * bc.gap)
	}

	function a7f() {
		canvas.width = a5o[0].width + a7c, canvas.height = j + a7c, (y7 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a5o[0].width + a7c, j + a7c), y7.translate(Math.floor(a7c / 2), Math.floor(a7c / 2)), y7.lineWidth = a7c, y7.fillStyle = 1 === a5o[0].a7k ? bB.nn : bB.nf, a7o(), y7.fill(), y7.strokeStyle = 1 === a5o[0].a7k ? bB.nZ :
			bB.ni, a7o(), y7.stroke(), bA.qa.textAlign(y7, 1), bA.qa.textBaseline(y7, 1), y7.fillStyle = 1 === a5o[0].a7k ? bB.nZ : bB.ni, y7.font = a5b[0], y7.fillText(uy(a5o[0].a7j), Math.floor(a5o[0].width / 2), Math.floor(.72 * a7a[0] * j)), y7
			.font = a5b[1], y7.fillText(a5o[0].qH, Math.floor(a5o[0].width / 2), Math.floor((a7a[0] + .48 * a7a[1]) * j))
	}

	function a7o() {
		y7.beginPath(), y7.moveTo(a7d, 0), y7.lineTo(a5o[0].width - a7d, 0), y7.lineTo(a5o[0].width, a7d), y7.lineTo(a5o[0].width, j - a7d), y7.lineTo(a5o[0].width - a7d, j), y7.lineTo(a7d, j), y7.lineTo(0, j - a7d), y7.lineTo(0, a7d), y7.closePath()
	}
	this.dd = function() {
		kF = 4, a7Y = a7Z = mv = 0, a5o = [], a5b = new Array(2), fontSize = new Array(2), (a7a = new Array(2))[0] = .3, a7a[1] = .7, a7b = new Array(4), canvas = document.createElement("canvas"), a7e = bf.eM + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hw() ? .0725 : .058) * h.hx), fontSize[0] = Math.floor(.85 * a7a[0] * j), fontSize[1] = Math.floor(.85 * a7a[1] * j), a5b[0] = bA.qa.sO(1, fontSize[0]), a5b[1] = bA.qa.sO(1, fontSize[1]), aB = a7b.length -
			1; 0 <= aB; aB--) a7b[aB] = this.measureText(uy(aB) + "000", a5b[0]);
		if (a7c = Math.floor(1 + .05 * j), a7d = Math.floor(.2 * j), 0 < a5o.length) {
			for (aB = a5o.length - 1; 0 <= aB; aB--) i = this.measureText(a5o[aB].qH + "00", a5b[1]), a5o[aB].width = i < a7b[aB] ? a7b[aB] : i;
			a7f()
		}
	}, this.j3 = function() {
		0 !== kF && (4 === kF ? bf.eM > a7e && (kF = 0, 1 === aD.zx) && aQ.a0J(bS.wK.wL[bS.eT].name, 3, 1, 9) : (1 === kF ? (0 === a7Y && (a7f(), a7Y = 1e-4), 1 <= (a7Y += .002 * (bf.eM - mv)) && (a7Z = 0, kF = 2, a7Y = 1), bf.dl = !0) : 2 ===
			kF ? ((a7Z += (bf.eM - mv) / 1e3) > a5o[0].eF || 1 < a7Z && 1 < a5o.length) && (kF = 3) : 3 === kF && ((a7Y -= .002 * (bf.eM - mv)) <= 0 && (a7Y = 0, a5o.shift(), kF = 0 < a5o.length ? 1 : 0), bf.dl = !0), mv = bf.eM))
	}, this.measureText = function(qH, a5b) {
		return uh.font = a5b, Math.floor(uh.measureText(qH).width)
	}, this.jG = function(a7i, aB) {
		this.a0J(ag.yQ[a7i], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0J = function(qH, a7j, a7k, eF) {
		var i;
		qH.length && (i = (i = this.measureText(qH + "00", a5b[1])) < a7b[a7j] ? a7b[a7j] : i, a5o.push({
			qH: qH,
			width: i,
			a7j: a7j,
			a7k: a7k,
			eF: eF
		}), 0 === kF) && (a7Y = 0, kF = 1, mv = bf.eM)
	}, this.ug = function() {
		0 !== kF && 0 !== a7Y && (a7Y < 1 ? (uh.globalAlpha = a7Y, a7l(), uh.globalAlpha = 1) : a7l())
	}
}

function cq() {
	var j, canvas, y7, a7p, a7q, a7r, a7s, a74, a7t, a7u, a7v, a7w, a6Z = !1,
		a2l = (this.hZ = !1, this.i = 0, new Array(2)),
		a7x = 0;

	function mV() {
		var i = aw.i,
			l3 = (a74 = !1, y6(y7, i, j), Math.floor(i / 2));
		1 === a7p ? (y7.fillStyle = bB.o2, y7.fillRect(l3, 0, l3, j)) : -1 === a7p && (y7.fillStyle = bB.oI, y7.fillRect(0, 0, l3, j)), y8(y7, i, j, 2);
		var l3 = (l3 = Math.floor(.25 * j)) < 2 ? 2 : l3,
			a6i = (y7.fillStyle = bB.no, Math.floor((j - 4) * a7q[1] / a7r[1]));
		0 < a6i && y7.fillRect(2, j - 2 - a6i, l3, a6i), 0 < (a6i = Math.floor((j - 4) * a7q[0] / a7r[0])) && y7.fillRect(i - 2 - l3, j - 2 - a6i, l3, a6i);
		l3 = (l3 = Math.floor(j / 8)) < 2 ? 2 : l3, yA(y7, Math.floor(.4 * j), 0, j, l3, .5, !1), yA(y7, Math.floor(i - 1.4 * j), 0, j, l3, .5, !0), a6i = 1.1 * j / a2l[0].width;
		y7.imageSmoothingEnabled = !0, y7.setTransform(a6i, 0, 0, a6i, (i - a6i * a2l[0].width) / 2, -.05 * j), y7.drawImage(a2l[+a6Z], 0, 0), y7.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a82() {
		a7w = -1, a6Z = ah.a83(), aN.a4E(257), aN.a6Y(a6Z), aw.hZ = !0, a74 = !0, a7t = 360;
		for (var fF, dt = 0, aB = al.kB - 1; 0 <= aB; aB--) bA.g9.jY(al.kC[aB]) || (dt += ag.gb[al.kC[aB]]);
		a6Z ? a7r[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hh ? 9 === aD.kS && 8 === bg.kX[bh.ki()] ? a7r[0] = Math.max(dt, 1) : (fF = bL.du(100 * bh.kg(), aD.ju), fF = bL.hv(200 - 2 * fF, 40, 100), fF = bL.du(fF * dt, 100), a7r[0] = Math.max(fF,
			1)) : a7r[0] = Math.max(bL.du(3 * dt, 5), 1), a7r[1] = Math.max(dt - a7r[0], 1)
	}

	function a7y() {
		a7v = bf.k7(), a74 = !0, a7t = a7p = 0, a7s = [], aw.hZ = !1, aN.a04(247), a7q[0] = a7q[1] = 0, aN.a4E(673)
	}

	function y3() {
		return aR.a6D(aN.a69()) ? __fx.settings.keybindButtons ? aR.ew - 2 * (j + bc.gap) : aR.ew - j - bc.gap : bC.a6D(aN.a6C()) ? bC.y3() - j - bc.gap : h.j - j - bk.a50() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a2l[aB] = bA.canvas.yh(ab.get(3), 8 - aB, bB.ot), a2l[aB] = bA.canvas.a2n(a2l[aB])
	}, this.dd = function() {
		a7v = -1e4, a7u = a7x = 0, a7w = -1, this.hZ = !1, a74 = a6Z = !1, a7q = [a7p = a7t = 0, 0], a7r = [1, 1], a7s = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, y7 = canvas.getContext("2d", {
			alpha: !0
		}), mV()
	}, this.mU = function() {
		a74 && mV()
	}, this.h0 = function(eu, ew) {
		return !!this.hZ && !(eu < h.i - this.i - bc.gap || ew < y3() || (aD.gw || this.ha(aD.eX) && (aM.gx && aM.a22(), b8.hD.hb(eu > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j3 = function() {
		0 < a7u ? 0 === --a7u && a7y() : this.hZ ? 180 == --a7t && 3 * a7q[0] < a7r[0] ? a7y() : a7q[0] >= a7r[0] ? a6Z ? bR.zZ.zs() : bR.zZ.zw() : a7q[1] >= a7r[1] ? a7u = 4 : a7t <= 0 && a7y() : ! function() {
			var a85 = bf.k7();
			if (a85 % 40 == 14) {
				if (a7x) return !(a85 < a7x) && !(a85 < a7v + 535) && (a7x = a85 + 1071, bA.g9.a3K()) ? (a82(), 1) : 0;
				(1 === al.kB || (aD.hh ? bh.kg() : ag.gb[lk[0]]) >= bL.du(96 * aD.ju, 100)) && (a7x = a85 + 535)
			}
			return
		}() && 0 <= a7w && (aN.yP(250, L(106, [ag.yQ[a7w]]), 673, a7w, bB.ni, bB.nf, -1, !0), a82())
	}, this.zy = function() {
		this.hZ && a7q[0] < a7r[0] && a7y()
	}, this.qA = function(player, a86) {
		var a87 = L(a86 ? 107 : 108, [ag.yQ[player]]),
			a87 = (aN.yP(450, a87, 257, player, a86 ? bB.o0 : bB.oF, bB.nf, -1, !0), a7s.push(player), a74 = !0, aD.kU ? Math.max(a7r[0], a7r[1]) : ag.gb[player]),
			a87 = Math.max(a87, 1);
		a86 ? a7q[0] += a87 : a7q[1] += a87, player === aD.eX && (a7p = a86 ? 1 : -1)
	}, this.ug = function() {
		var ew;
		this.hZ && (ew = y3(), uh.drawImage(canvas, h.i - this.i - bc.gap, ew))
	}, this.hc = function(player) {
		return !(!aD.kU && bf.k7() < a7v + 140 || 0 !== a7t || !bA.g9.gy(1) || !bA.g9.gz(player) || 10 <= jv[player] && !bA.g9.a3c(player, 9))
	}, this.ha = function(gL) {
		if (!bA.g9.gy(1)) return !1;
		if (!bA.g9.gz(gL)) return !1;
		if (!this.hZ) return !1;
		for (var aB = a7s.length - 1; 0 <= aB; aB--)
			if (a7s[aB] === gL) return !1;
		return !0
	}, this.hY = function(player) {
		a7w = player
	}
}

function cI() {
	var i, eu, a88, canvas, y7, hZ, iN, a45, a5b, a74, a89 = 11 / 12;

	function a8B() {
		var a7B = Math.floor(iN * (i - 2 * a88)),
			a8E = 1 + Math.floor(.0625 * aR.j),
			a8F = 1 + Math.floor(.3 * aR.j),
			a8G = Math.floor(.55 * aR.j);
		y7.clearRect(0, 0, i, aR.j), y7.fillStyle = bB.ne, y7.fillRect(0, 0, a88, aR.j), y7.fillRect(a88 + a7B, 0, i - a88 - a7B, aR.j), y7.fillStyle = iN < 1 / 3 ? "rgba(" + Math.floor(3 * iN * 130) + ",130,0,0.85)" : iN < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iN - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iN - 2 / 3) * 130) + ",0.85)", y7.fillRect(a88, 0, a7B, aR.j), y7.fillStyle = bB.ni, y7.fillRect(0, 0, i, 1), y7.fillRect(0, aR.j - 1, i, 1), y7
			.fillRect(0, 0, 1, aR.j), y7.fillRect(a88, 0, 1, aR.j), y7.fillRect(a88 + a7B, 0, 1, aR.j), y7.fillRect(i - a88, 0, 1, aR.j), y7.fillRect(i - 1, 0, 1, aR.j), y7.fillRect(Math.floor(.25 * aR.j) + a8F, Math.floor((aR.j - a8E) / 2), aR.j -
				2 * a8F, a8E), y7.fillRect(Math.floor(i - 1.25 * aR.j) + a8F, Math.floor((aR.j - a8E) / 2), aR.j - 2 * a8F - a8F % 2, a8E), y7.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8E) / 2), a8F, a8E, aR.j - 2 * a8F - a8F % 2),
			a45 = bA.g9.iM(aD.eX, aR.hH()), y7.fillText(bA.rZ.zE(a45) + " (" + bA.rZ.a3y(100 * iN, +(iN < .1)) + ")", Math.floor(.5 * i), a8G)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iN = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a1y(arg1);

	function a8L(a2K) {
		return !(1 < a2K && 1 === iN || (1 < a2K && a2K * iN - iN < 1 / 1024 ? a2K = (iN + 1 / 1024) / iN : a2K < 1 && iN - a2K * iN < 1 / 1024 && (a2K = (iN - 1 / 1024) / iN), iN = bL.hv(iN * a2K, 1 / 1024, 1), a8B(), 0))
	}

	function a8M(lN) {
		return iN !== (iN = bL.hv((lN - eu - a88) / (i - 2 * a88), 1 / 1024, 1)) && (a8B(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8B(), bf.dl = !0
	}, this.ew = 0, this.h1 = !1, this.dd = function() {
		hZ = !aD.hB && !aD.gw, a74 = !1, iN = .5, a45 = 0, this.h1 = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hw() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hx), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.hw() ? .65 : .389) * h.hx), i += 12 - i % 12, this.j = Math.floor(i / 12)), a88 = Math.floor(3 * this.j / 2), a5b =
			bA.qa.sO(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, uh), canvas.height = this.j, (y7 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5b, bA.qa.textBaseline(y7, 1), bA.qa.textAlign(y7, 1), this.a8A(), a8B()
	}, this.a8A = function() {
		eu = a0.a1.hw() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.ew = h.j - this.j - bk.a50() * bc.gap
	}, this.mU = function() {
		a74 && (a74 = !1, a8B())
	}, this.hZ = function() {
		return !(!hZ || aM.gx && eu < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6D = function(a8H) {
		return !!this.hZ() && eu + i > h.i - a8H - bc.gap
	}, this.a4C = function() {
		hZ = !aD.gw
	}, this.a7y = function() {
		hZ = !1
	}, this.hH = function() {
		return bL.hv(Math.floor(1024 * iN + .5) - 1, 0, 1023)
	}, this.a1v = function(lN, lO) {
		return this.hZ() && eu < lN && lN < eu + i && lO > this.ew
	}, this.h0 = function(lN, lO) {
		if (!this.hZ()) return !1;
		if (!(__fx.settings.keybindButtons && lO > this.ew - Math.floor(bc.gap / 4) - this.j && lO < this.ew - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lN - eu))) {
			if (!aR.a1v(lN, lO)) return !1;
			aS.nD = !1, ! function(sB, lN, lO) {
				if (function(lN, lO) {
						return eu < lN && lN < eu + a88 && lO > aR.ew
					}(lN, lO)) return a8L(a89);
				if (function(lN, lO) {
						return eu + i - a88 < lN && lN < eu + i && lO > aR.ew
					}(lN, lO)) return a8L(1 / a89);
				return sB.h1 = !0, a8M(lN)
			}(this, lN, lO) || (bf.dl = !0)
		}
		return !0
	}, this.a1y = function(nK) {
		0 !== aD.zx && this.hZ() && a8L(nK) && (bf.dl = !0)
	}, this.a1U = function(deltaY) {
		var nK;
		return !(0 === deltaY || !this.hZ()) && a8L(nK = 0 < deltaY ? (nK = 400 / (400 + deltaY)) < a89 ? a89 : nK : 1 / a89 < (nK = (400 - deltaY) / 400) ? 1 / a89 : nK)
	}, this.a1R = function(lN) {
		return !!this.h1 && a8M(lN)
	}, this.a1r = function() {
		this.h1 = !1
	}, this.j3 = function() {
		this.hZ() && a45 !== bA.g9.iM(aD.eX, this.hH()) && (a74 = !0)
	}, this.ug = function() {
		this.hZ() && (uh.drawImage(canvas, eu, this.ew), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(uh, eu, this.ew)
	}
}

function d0() {
	var canvas, y7, a8N, font, a8O = 0,
		a8P = !1,
		a8Q = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8R = 5;

	function a8Y() {
		if (a8P) {
			var aB, en = a8Q.length,
				a8G = Math.floor(.5 * a8N.j),
				j = en * a8G,
				eu = Math.floor(Math.floor(a8N.eu) + .3 * a8N.i - .5),
				ew = Math.floor(Math.floor(a8N.ew) - j),
				i = Math.floor(.4 * a8N.i + 2.5);
			for (uh.fillStyle = bB.ne, uh.fillRect(eu, ew, i, j), uh.fillStyle = bB.o7, uh.fillRect(eu, ew + a8R * a8G, i, a8G), uh.fillStyle = bB.ni, uh.fillRect(eu, ew, 2, j), uh.fillRect(eu, ew, i, 2), uh.fillRect(eu + i - 2, ew, 2, j), aB =
				1; aB < en; aB++) uh.fillRect(eu, ew + aB * a8G, i, 2);
			for (uh.fillStyle = bB.ni, bA.qa.textAlign(uh, 1), bA.qa.textBaseline(uh, 1), uh.font = bA.qa.sO(0, .6 * a8G), eu += .5 * i, aB = 0; aB < en; aB++) uh.fillText(a8g(aB), eu, ew + (aB + .6) * a8G)
		}
		uh.drawImage(canvas, Math.floor(a8N.eu), Math.floor(a8N.ew))
	}

	function mV(sB) {
		var eu, n8, n9, a8G;
		y7.clearRect(0, 0, Math.floor(a8N.i), Math.floor(a8N.j)), y7.fillStyle = bB.ne, y7.fillRect(0, 0, Math.floor(a8N.i), Math.floor(a8N.j)), aD.nB && (y7.fillStyle = bB.o7, y7.fillRect(0, 0, Math.floor(.3 * a8N.i), Math.floor(a8N.j))), y7
			.fillStyle = bB.ni, y7.fillText("Hide UI", .15 * a8N.i, .5 * a8N.j), y7.fillRect(Math.floor(.3 * a8N.i - .5), 0, 2, Math.floor(a8N.j)), eu = .5 * a8N.i, y7.fillText("Replay Speed", eu, .31 * a8N.j), y7.fillText(a8g(a8R), eu, .69 * a8N.j),
			y7.fillRect(Math.floor(.7 * a8N.i - .5), 0, 2, Math.floor(a8N.j)), sB.a4k ? (eu = Math.floor(.02 * a8N.i), sB = Math.floor(.025 * a8N.i), n8 = Math.floor(.85 * a8N.i - eu - .5 * sB), n9 = Math.floor(.25 * a8N.j), a8G = Math.floor(a8N.j) -
				2 * n9, y7.fillRect(n8, n9, eu, a8G), y7.fillRect(n8 + eu + sB, n9, eu, a8G)) : function() {
				var i = Math.floor(.46 * a8N.j),
					j = Math.floor(.23 * a8N.j),
					eu = Math.floor(.85 * a8N.i - .5 * i + i / 12),
					ew = Math.floor(.5 * a8N.j - j);
				y7.beginPath(), y7.moveTo(eu, ew), y7.lineTo(eu + i, ew + j), y7.lineTo(eu, ew + (j << 1)), y7.fill()
			}(), y7.fillRect(0, 0, Math.floor(a8N.i), 2), y7.fillRect(0, 0, 2, Math.floor(a8N.j)), y7.fillRect(0, Math.floor(a8N.j) - 2, Math.floor(a8N.i), 2), y7.fillRect(Math.floor(a8N.i - 2), 0, 2, Math.floor(a8N.j))
	}

	function a8g(aB) {
		return 5 === aB ? "Normal" : "" + a8Q[aB]
	}
	this.a4k = !1, this.dd = function() {
		aD.gw && (a8R = 5, this.a4k = !1, a8P = !1, a8N = new rB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8S = function() {
		return a8Q[a8R]
	}, this.y3 = function() {
		return a8N.ew
	}, this.a6D = function(a8H) {
		return !!aD.gw && a8N.eu + a8N.i > h.i - a8H - bc.gap
	}, this.resize = function() {
		aD.gw && (a8N.resize(), a8N.ew -= (bk.a50() - 1) * bc.gap, font = bA.qa.sO(0, .3 * a8N.j), (canvas = document.createElement("canvas")).width = Math.floor(a8N.i), canvas.height = Math.floor(a8N.j), (y7 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qa.textAlign(y7, 1), bA.qa.textBaseline(y7, 1), mV(this))
	}, this.a21 = function(a8T) {
		0 === aD.zx || t.hZ() || a8T !== aD.nB && (aD.nB = a8T, bh.resize(), bf.dl = !0, aD.gw) && (a8O = bf.eM + 2e3, mV(this))
	}, this.h0 = function(eu, ew) {
		if (!aD.gw) return !1;
		if (eu < a8N.eu || ew < a8N.ew || eu > a8N.eu + a8N.i) return a8P && function(sB, eu, ew) {
			var en = a8Q.length,
				a8G = Math.floor(.5 * a8N.j),
				j = en * a8G,
				n8 = Math.floor(Math.floor(a8N.eu) + .3 * a8N.i - .5),
				j = Math.floor(Math.floor(a8N.ew) - j),
				i = Math.floor(.4 * a8N.i + 2.5);
			return a8P = !1, bf.dl = !0, eu < n8 || n8 + i < eu || ew < j || (a8R = a8X(0, Math.floor((ew - j) / a8G), en - 1), mV(sB)), !0
		}(this, eu, ew);
		if ((eu -= a8N.eu) < .3 * a8N.i) a8P = !1, this.a21(!aD.nB);
		else {
			if (eu < .7 * a8N.i) return a8P = !a8P, bf.dl = !0;
			this.a23(!1)
		}
		return !0
	}, this.a23 = function(a8V) {
		2 === aD.zx ? (this.a21(!1), t.u(3)) : (a8P = !1, this.a4k = !this.a4k, this.a4k ? (aM.gx && aM.a22(), a0.a1.setState(1)) : a8V || aM.a5h(), bf.dl = !0, mV(this))
	}, this.a8W = function() {
		this.a4k = !1, aM.a5h(), bf.dl = !0, mV(this)
	}, this.a1k = function(eu, ew) {
		return !!aD.nB && (0 <= aM.h0(eu, ew) || (aD.gw ? ((bf.eM > a8O || !this.h0(eu, ew)) && aS.h0(eu, ew), bf.dl = !0, a8O = bf.eM + 2e3) : aS.h0(eu, ew)), !0)
	}, this.j3 = function() {
		aD.gw && aD.nB && bf.eM > a8O - 1e3 && bf.eM < a8O && (bf.dl = !0)
	}, this.a05 = function() {
		aD.gw && (this.a4k = !1, bf.dl = !0, mV(this))
	}, this.ug = function() {
		if (aD.gw) {
			if (aD.nB) {
				if (bf.eM > a8O) return;
				if (bf.eM > a8O - 1e3) return uh.globalAlpha = a8X(0, (1e3 - (bf.eM - (a8O - 1e3))) / 1e3, 1), a8Y(), void(uh.globalAlpha = 1)
			}
			a8Y()
		}
	}
}

function cJ() {
	var a8h, a8i, i, eu, ew, a8j, a8k;
	this.dd = function() {
		a8h = new Array(2), a8i = new Array(2), this.nD = !1, a8k = a8j = iP = iO = 0, hy = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.hw() ? .072 : .0502) * h.hx)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8h[aB] = document.createElement("canvas"), a8h[aB].width = i, a8h[aB].height = i, a8i[aB] = a8h[aB].getContext("2d", {
			alpha: !0
		});
		this.a8A(),
			function() {
				for (var a91 = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8i[aB].clearRect(0, 0, i, i), a8i[aB].fillStyle = bB.nb, a8i[aB].beginPath(), a8i[aB].arc(i / 2, i / 2, i / 2 - a91, 0, 2 * Math.PI), a8i[aB].fill(), a8i[aB]
					.lineWidth = a91, a8i[aB].fillStyle = bB.ni, a8i[aB].strokeStyle = bB.ni, a8i[aB].beginPath(), a8i[aB].arc(i / 2, i / 2, i / 2 - a91, 0, 2 * Math.PI), a8i[aB].stroke(), yA(a8i[aB], 0, 0, i, a91, .3, 0 === aB)
			}()
	}, this.y2 = function() {
		return -iO / hy
	}, this.y3 = function() {
		return -iP / hy
	}, this.nN = function(a8o, i4) {
		iO = hy * a8o - i4
	}, this.nO = function(a8p, i5) {
		iP = hy * a8p - i5
	}, this.h0 = function(a8n, a6E) {
		return aD.nB || ! function(a8n, a6E) {
			return Math.pow(a8n - (eu + i / 2), 2) + Math.pow(a6E - (ew + i / 2), 2) < i * i / 4 || Math.pow(a8n - (eu + i / 2), 2) + Math.pow(a6E - (ew + 2 * i), 2) < i * i / 4
		}(a8n, a6E) || bj.eK.data[8].value ? (aH.nQ() && (this.nD = !0, a8j = a8n, a8k = a6E), !1) : a6E < ew + 1.25 * i ? this.a1U(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1U(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1R = function(a8n, a6E) {
		var a8q, a8r, i7, iA;
		return !aH.nQ() || (a8q = iO, a8r = iP, iO += i7 = a8j - a8n, iP += iA = a8k - a6E, af.a1R(i7, iA), this.a8s(), a8j = a8n, a8k = a6E, a8q !== iO) || a8r !== iP
	}, this.a1U = function(lN, lO, deltaY) {
		var nK;
		if (aH.nQ()) {
			if (0 < deltaY) nK = (nK = 500 / (500 + deltaY)) < .5 ? .5 : nK;
			else {
				if (!(deltaY < 0)) return !1;
				nK = 2 < (nK = (500 - deltaY) / 500) ? 2 : nK
			}
			this.a8t(lN, lO, nK), bf.dl = !0
		}
		return !0
	}, this.a8t = function(eu, ew, eR) {
		var a2K;
		eR = a2K = (a2K = 1024 < (a2K = eR) * hy ? 1024 / hy : a2K) * hy < .125 ? .125 / hy : a2K, af.zoom(eR, eu, ew),
			function(a2K, lN, lO) {
				hy *= a2K, iO = (iO + lN) * a2K - lN, iP = (iP + lO) * a2K - lO, aS.a8s()
			}(eR, eu, ew)
	}, this.a8s = function() {
		var a8w = h.i / 16,
			a8x = 0,
			a8y = h.j / 16,
			a8z = 0;
		iO < -h.i + a8w && (a8x = -h.i + a8w - iO), iO > hy * bS.ey - a8w && (a8x = hy * bS.ey - a8w - iO), iP < -h.j + a8y && (a8z = -h.j + a8y - iP), iP > hy * bS.ez - a8y && (a8z = hy * bS.ez - a8y - iP), iO += a8x, iP += a8z, ba.nP(), af.a90(
			a8x, a8z)
	}, this.a8A = function() {
		eu = h.i - i - bc.gap, ew = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ug = function() {
		bj.eK.data[8].value || (uh.drawImage(a8h[0], eu, ew), uh.drawImage(a8h[1], eu, Math.floor(ew + 3 * i / 2)))
	}
}

function cK() {
	var g, a92, a93, a94, gap, a95, a96, a97, a98, a99, a5b, a9A, gs, a9B, a7B, a9C, a9D;

	function a9H() {
		a94 = Math.floor(.2 * (a0.a1.hw() ? .07 : .035) * h.hx), a94 = a6B(a0.a1.hw() ? 3 : 1, a94);
		var a9K = h.i / (g.length + gap);
		a94 = a94 < a9K ? a9K : a94, a7B = Math.floor((1 - gap) * a94), a92 = 0, a9L()
	}

	function a9L() {
		a92 = (a92 = a92 < -20 ? -20 : a92) > (g.length - 15) * a94 ? (g.length - 15) * a94 : a92, a96 = Math.floor(a92 / a94), a97 = (a97 = a96 + Math.floor(h.i / a94)) > g.length - 1 ? g.length - 1 : a97, a96 = (a96 = a97 < a96 ? a97 : a96) < 0 ?
			0 : a96;
		var l3 = a97;
		a95 = a93 / g[l3];
		for (var aB = a97 - 1; a96 <= aB; aB--) g[aB] > g[l3] && (l3 = aB, a95 = a93 / Math.pow(g[aB], a9B))
	}

	function a9O(eu) {
		eu = Math.floor((a92 + h.i - eu - gap * a94) / a94);
		return (eu = eu < -1 ? -1 : -1 === eu ? 0 : eu > g.length - 1 ? -1 : eu) !== a98 && (a98 = eu, -1 === a9C && 0 === a98 && aT.a9E && (a9C = setInterval(a9P, 100)), 1)
	}

	function a9Q(aB) {
		var a9S = Math.floor(a95 * Math.pow(g[aB], a9B));
		uh.fillRect(a92 + h.i - (aB + 1) * a94, h.j - a9S, a7B, a9S)
	}

	function a9P() {
		var gL;
		0 !== (a98 = 8 === aa.a18() ? -1 : a98) ? (a9D = (new Date).getTime(), clearInterval(a9C), a9C = -1) : (gL = g[1] / 864e3, -1 !== a9D && (gL += ((new Date).getTime() - a9D) * g[1] / 864e5, a9D = -1), 0 < gL && (g[0] += Math.floor(gL), bf
			.dl = !0))
	}
	this.a9E = !1, this.dd = function() {
		a9D = a9C = -1, a98 = -(a9B = 1), this.a9F = !1, gs = 0, a9A = new Date, a92 = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a93 = Math.floor(.15 * h.j), a99 = (a99 = Math.floor((a0.a1.hw() ? .018 : .0137) * h.hx)) < 2 ? 2 : a99, a5b = bA.qa.sO(1, a99), a9H()
	}, this.a9I = function(a9J) {
		var aB;
		for (this.a9E = !0, aB = 0; aB < a9J.length; aB++) g.unshift(a9J[aB]);
		a9H(), bf.dl = !0
	}, this.a9M = function() {
		a9L()
	}, this.a1R = function(eu, ew) {
		ew > h.j - .6 * a93 ? this.a9F ? eu !== gs && (a92 += eu - gs, gs = eu, a9L(), a9O(eu), this.a9F = -1 !== a98, bf.dl = !0) : a9O(eu) && (bf.dl = !0) : this.rb()
	}, this.rb = function() {
		-1 !== a98 && (this.a9F = !1, a98 = -1, bf.dl = !0)
	}, this.a1U = function(eu, deltaY) {
		-1 !== a98 && (a92 += Math.floor(deltaY), a9L(), a9O(eu), bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		this.a1R(eu, ew), -1 !== a98 && (gs = eu, this.a9F = !0)
	}, this.a1q = function() {
		-1 !== a98 && (this.a9F = !1)
	}, this.ug = function() {
		uh.fillStyle = bB.nl;
		for (var a9T, month, dt, sw, a9W, a9X, n9, a9Y, a9Z, aB = a97; a96 <= aB; aB--) a9Q(aB);
		this.a9E && 0 === a96 && (uh.fillStyle = bB.oI, a9Q(0)), -1 !== a98 && (uh.fillStyle = bB.nk, a9Q(a98)), -1 !== a98 && (uh.font = a5b, bA.qa.textBaseline(uh, 2), (dt = new Date).setTime(a9A.getTime() - 1e3 * a98 * 60 * 60 * 24), month =
			"month", a9T = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a9T = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a9T = a9T + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a98] ? L(109) : L(110), month = bA.rZ.zE(g[a98]) + " " + month, dt = Math.floor(uh.measureText(a9T).width), sw = Math
			.floor(uh.measureText(month).width), a9W = Math.floor(.5 * (dt + a99)), a9X = (a9X = a92 + h.i - (a98 + 1) * a94) < a9W ? a9W : a9X > h.i - a9W ? h.i - a9W : a9X, n9 = h.j - Math.floor(a95 * Math.pow(g[a98], a9B)), a9Y = Math
			.floor(1.1 * a99), a9Z = n9 > h.j - a9Y ? h.j - a9Y : n9, uh.fillStyle = bB.nf, uh.fillRect(h.i - sw - a99, a9Z - a9Y, sw + a99, a9Y), uh.fillRect(a9X - a9W, h.j - a9Y, dt + a99, a9Y), uh.fillStyle = bB.ni, bA.qa.textAlign(uh, 2),
			uh.fillText(month, Math.floor(h.i - .5 * a99), a9Z), bA.qa.textAlign(uh, 1), uh.fillText(a9T, a9X, h.j), uh.strokeStyle = bB.nm, uh.lineWidth = 1, uh.beginPath(), uh.moveTo(0, n9), uh.lineTo(h.i, n9), uh.closePath(), uh.stroke())
	}
}

function cL() {
	var a5b, i, ew, a9a, a9b, canvas, y7, a74, a3Q, a9c, a9d, a9e, a9f;
	this.eu = 0, this.j = 0, this.dd = function() {
		a9b = aD.a4K, a9d = "rgba(0,100,0,0.8)", a9e = "rgba(150,0,0,0.8)", a74 = a9c = !0, a3Q = ag.gp[aD.eX], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hw() ? .305 : .24) * h.hx), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5b = bA.qa.sO(1, Math.floor(.8 * this.j)), a9f = Math.floor(.5 * this.j), bS.wQ.font = a5b, ew = bc.gap, a9a = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (y7 = canvas.getContext("2d", {
			alpha: !0
		})).font = a5b, bA.qa.textBaseline(y7, 1), bA.qa.textAlign(y7, 1), this.a9g()
	}, this.a7X = function() {
		return a0.a1.hw() && h.i < 1.2 * h.j
	}, this.a8A = function() {
		this.a7X() ? this.eu = h.i - i - bc.gap : this.eu = Math.floor(aV.a9h() + (h.i - aV.a9h() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mU = function() {
		a74 && (a74 = !1, this.a9g())
	}, this.a9g = function() {
		y7.clearRect(0, 0, i, this.j), y7.fillStyle = a9c ? a9d : a9e, y7.fillRect(0, 0, i, this.j), y7.fillStyle = bB.nk, this.a9i(), this.a9j(), y7.fillStyle = ag.gp[aD.eX] >= ae.jq(aD.eX) ? bB.oF : bB.ni, y7.fillText(bA.rZ.zE(a3Q), Math.floor(
			i / 2), a9f), y7.fillStyle = bB.ni, y7.fillRect(0, 0, i, 1), y7.fillRect(0, 0, 1, this.j), y7.fillRect(0, this.j - 1, i, 1), y7.fillRect(i - 1, 0, 1, this.j)
	}, this.a9i = function() {
		var f8 = bf.k7() % 100,
			f8 = (f8 = 9 - bL.du(f8 -= f8 % 10, 10), Math.floor(f8 * (this.j - a9a) / 9));
		y7.fillRect(0, f8, a9a, this.j - f8), y7.fillRect(i - a9a, f8, a9a, this.j - f8)
	}, this.a9j = function() {
		y7.fillRect(a9a, this.j - a9a, Math.floor((i - 2 * a9a) * ag.gp[aD.eX] / a9b), a9a)
	}, this.j3 = function() {
		var gL = aD.eX;
		bA.g9.gz(gL) && (gL = ag.gp[gL] - ag.a3P[gL], a3Q !== gL ? (a9b = a6B(gL, a9b), a9c = a3Q < gL && 10 <= gL, a3Q = gL, a74 = !0) : bf.k7() % 10 == 9 && (a74 = !0))
	}, this.ug = function() {
		0 === ag.mi[aD.eX] || aD.hB || 2 === ag.a3H[aD.eX] || uh.drawImage(canvas, this.eu, ew)
	}
}

function cM() {
	var a9k, a9l, a9m, a9n, a9o, a9p, a9q, a9r, a9s, a9t, a9u, a9v, a9w, a9x, a9y, a9z, aA0, aA1, aA2, aA3, aA4, aA5, position, aA6, aA7, aA8, aA9, aAA = 1,
		aAB = 1,
		aAC = "";
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

	function aAE() {
		a9q.clearRect(0, 0, a9k, a7n),
			a9q.fillStyle = bB.oY,
			a9q.fillRect(0, 0, a9k, a9v),
			a9q.fillStyle = bB.ne,
			a9q.fillRect(0, a9v, a9k, a7n - a9v);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jv[aD.eX]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aA5 = -1;
		if (__fx.leaderboardFilter.enabled && aA5 >= __fx.leaderboardFilter.filteredLeaderboard.length) aA5 = -1;
		playerPos >= position && aAG(playerPos - position, bB.o7),
			0 !== jv[aD.eX] && 0 === position && aAG(0, bB.oe),
			-1 !== aA5 && aAG(aA5, bB.nj),
			a9q.fillStyle = bB.ne,
			//console.log("drawing", aA5),
			a9q.clearRect(0, a7n - __fx.leaderboardFilter.tabBarOffset, a9k, __fx.leaderboardFilter.tabBarOffset);
		a9q.fillRect(0, a7n - __fx.leaderboardFilter.tabBarOffset, a9k, __fx.leaderboardFilter.tabBarOffset);
		a9q.fillStyle = bB.ni,
			a9q.fillRect(0, a9v, a9k, 1),
			a9q.fillRect(0, a7n - __fx.leaderboardFilter.tabBarOffset, a9k, 1),
			__fx.leaderboardFilter.drawTabs(a9q, a9k, a7n - __fx.leaderboardFilter.tabBarOffset, bB.o7),
			a9q.fillRect(0, 0, a9k, bc.yv),
			a9q.fillRect(0, 0, bc.yv, a7n),
			a9q.fillRect(a9k - bc.yv, 0, bc.yv, a7n),
			a9q.fillRect(0, a7n - bc.yv, a9k, bc.yv), a9q.font = a9l, bA.qa.textBaseline(a9q, 1), bA.qa.textAlign(a9q, 1), a9q.fillText(aAC, Math.floor((a9k + a9v - 22) / 2), Math.floor(a9t + a9m / 2));
		__fx.playerList.drawButton(a9q, 12, 12, a9v - 22);
		var f6, gM = playerPos < position + a9o - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9o)
				position = (result.length > a9o ? result.length : a9o) - a9o;
			//if (position >= result.length) position = result.length - 1;
			for (a9q.font = a9n, bA.qa.textAlign(a9q, 0), f6 = a9o - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAH(lk[pos]), aAI(f6, pos, lk[pos]);
			}
			for (bA.qa.textAlign(a9q, 2), f6 = a9o - gM; 0 <= f6; f6--) {
				const pos = result[f6 + position];
				if (pos !== undefined)
					aAH(lk[pos]), aAJ(f6, lk[pos]);
			}
		} else {
			for (a9q.font = a9n, bA.qa.textAlign(a9q, 0), f6 = a9o - gM; 0 <= f6; f6--)
				aAH(lk[f6 + position]), aAI(f6, f6 + position, lk[f6 + position]);
			for (bA.qa.textAlign(a9q, 2), f6 = a9o - gM; 0 <= f6; f6--)
				aAH(lk[f6 + position]), aAJ(f6, lk[f6 + position]);
		}
		2 == gM && (aAH(aD.eX), bA.qa.textAlign(a9q, 0), aAI(a9o - 1, jv[aD.eX], aD.eX), bA.qa.textAlign(a9q, 2), aAJ(a9o - 1, aD.eX)), 0 === position && (gM = .7 * a9w / ab.get(4).height, a9q.setTransform(gM, 0, 0, gM, Math.floor(a9x + .58 * a9w +
			.5 * gM * ab.get(4).width), Math.floor(a9t + a9m + .4 * a9w)), a9q.imageSmoothingEnabled = !0, a9q.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), a9q.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAH(player) {
		aD.hh && (a9q.fillStyle = bg.aAL[bg.aAM[player]])
	}

	function aAG(aB, aAN) {
		a9q.fillStyle = aAN, aB = a9o - 1 < aB ? a9o - 1 : aB;
		aAN = Math.floor((aB === a9o - 1 ? 2 : 0 === aB ? 1.15 : 1) * a9w), aAN = aB === a9o - 2 ? Math.floor(a9v + 9.15 * a9w) - Math.floor(a9v + 8.15 * a9w) : aAN;
		a9q.fillRect(0, Math.floor(a9v + (aB + (0 === aB ? 0 : .15)) * a9w), a9k, aAN)
	}

	function aAI(aAP, a3e, aB) {
		a9q.fillText(aA1[a3e], a9x, Math.floor(a9t + a9m + (aAP + .5) * a9w)), 1 === ag.a3H[aB] && (a9q.font = "italic " + a9n);
		a3e = Math.floor(a9t + a9m + (aAP + .5) * a9w);
		a9q.fillText(ag.yQ[aB], a9y, a3e), 0 !== ag.a3H[aB] && (a9q.font = a9n), aB < aD.kA && 2 !== ag.a3H[aB] || a9q.fillRect(a9y, a3e + .35 * aAA, aA0[aB], Math.max(1, .1 * aAA))
	}

	function aAJ(aAP, aB) {
		a9q.fillText(ag.gb[aB], a9z, Math.floor(a9t + a9m + (aAP + .5) * a9w))
	}

	function aAY(ew) {
		return (ew -= bc.gap + a9v) < 0 ? Math.floor(ew / a9w) - 1 : ew < (a9o - 1) * a9w ? Math.floor(ew / a9w) : ew < a7n - a9v ? a9o - 1 : (ew -= a7n - a9v, a9o + Math.floor(ew / a9w))
	}

	function yu(eu, ew) {
		return eu >= bc.gap && eu < bc.gap + a9k && ew >= bc.gap && ew < bc.gap + a7n
	}
	this.dd = function() {
			var aB;
			for (aA7 = !1, aA9 = aA8 = aA6 = 0, aA5 = -1, a9o = a0.a1.hw() ? 6 : 10, aAB = (position = 0) === (aAB = bj.eK.data[11].value) ? 10 : 1 === aAB ? 5 : 1, aA4 = !1, aA2 = new Uint16Array(a9o + 1), aA3 = new Uint32Array(a9o + 1), a9s = aD
				.ek, lk = new Uint16Array(a9s), jv = new Uint16Array(a9s), aB = a9s - 1; 0 <= aB; aB--) lk[aB] = aB, jv[aB] = aB;
			this.resize(!0), aA0 = new Uint16Array(aD.ek);
			var aAD = Math.floor(a9k - a9y - a9x - a9r);
			for (aA1 = new Array(aD.ek), a9q.font = a9n, aB = aD.ek - 1; 0 <= aB; aB--) aA1[aB] = aB + 1 + ".", ag.yQ[aB] = bA.y7.a2x(ag.a0b[aB], a9n, aAD), aA0[aB] = Math.floor(a9q.measureText(ag.yQ[aB]).width);
			aAE()
		}, this.resize = function(dd) {
			if (a7n = a0.a1.hw() ? (a9k = Math.floor(.335 * h.hx), Math.floor(a9o * a9k / 8)) : (a9k = Math.floor(.27 * h.hx), Math.floor(a9o * a9k / 10)), a9k = Math.floor(.97 * a9k), (a9p = document.createElement("canvas")).width = a9k, a9p
				.height = a7n, a9q = a9p.getContext("2d", {
					alpha: !0
				}), a9t = .025 * a9k, a9m = .16 * a9k, a9u = 0 * a9k, a9v = Math.floor(.45 * a9t + a9m), a9w = (a7n - a9m - 2 * a9t - a9u) / a9o,
				a9p.height = a7n += a9w, __fx.leaderboardFilter.tabBarOffset = Math.floor(a9w * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7n - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9k,
				a9l = bA.qa.sO(1, Math.floor(.55 * a9m)), aAA = Math.floor((a0.a1.hw() ? .67 : .72) * a9w), a9n = bA.qa.sO(0, aAA), a9q.font = a9n, a9x = Math.floor(.04 * a9k), a9y = Math.floor((a0.a1.hw() ? .195 : .18) * a9k), a9r = Math.floor(a9q
					.measureText("00920600").width), a9q.font = a9l, a9z = a9k - a9x, !dd) {
				a9q.font = a9n;
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aA0[aB] = Math.floor(a9q.measureText(ag.yQ[aB]).width);
				aAE()
			}
			aAC = bA.y7.a2x(L(111), a9l, .96 * a9k)
		}, this.a9h = function() {
			return a9k
		}, this.mU = function(bu, aAF) {
			(aAF || aA4 && (bu || bf.k7() % aAB == 0)) && (aA4 = !1, aAE())
		}, this.j3 = function() {
			! function() {
				for (var f6 = a9s - 1; 0 <= f6; f6--) 0 === ag.mi[lk[f6]] && ! function(f6) {
					var aAW = lk[f6];
					a9s--;
					for (var aB = f6; aB < a9s; aB++) lk[aB] = lk[aB + 1], jv[lk[aB]] = aB;
					lk[a9s] = aAW, jv[lk[a9s]] = a9s
				}(f6)
			}();
			for (var aAU, nQ = a9s - 1, f6 = 0; f6 < nQ; f6++) ag.gb[lk[f6]] < ag.gb[lk[f6 + 1]] && (aAU = lk[f6], lk[f6] = lk[f6 + 1], lk[f6 + 1] = aAU, jv[lk[f6]] = f6, jv[lk[f6 + 1]] = f6 + 1);
			! function() {
				for (var dt = aA4, gM = (aA4 = !0, jv[aD.eX] >= a9o - 1 ? a9o - 2 : a9o - 1), aB = gM; 0 <= aB; aB--)
					if (aA2[aB] !== lk[aB] || aA3[aB] !== ag.gb[lk[aB]]) return;
				(gM != a9o - 2 || aA2[a9o] === jv[aD.eX] && aA3[a9o] === ag.gb[aD.eX]) && (aA4 = dt)
			}();
			for (var aB = a9o - 1; 0 <= aB; aB--) aA2[aB] = lk[aB], aA3[aB] = ag.gb[lk[aB]];
			aA2[a9o] = jv[aD.eX], aA3[a9o] = ag.gb[aD.eX];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.h0 = function(eu, ew) {
			return !!yu(eu, ew) && ((__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, a9v - 22, a9v - 22) && __fx.playerList.display(ag.a0b), true) &&
				!(ew - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eu - bc.gap)) && (aA6 = bf.eM, aA7 = !0, aA8 = aA9 = aAY(ew), bJ.a24() && (eu = a8X(-1, aA9, a9o), aA5 !== (eu = eu === a9o ?
					-1 : eu)) && (aA5 = eu, aAE(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAE(), bf.dl = !0;
		},
		this.a1R = function(eu, ew) {
			if (__fx.utils.isPointInRectangle(eu, ew, bc.gap + 12, bc.gap + 12, a9v - 22, a9v - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAE(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAE(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eu, ew, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eu - bc.gap
				)) return;
			var dt, aAX = aAY(ew);
			return aA7 ? (dt = position, (position = a8X(0, position += aA8 - aAX, aD.ek - a9o)) !== dt && (aAX = (aAX = a8X(-1, aA8 = aAX, a9o)) !== a9o && yu(eu, ew) ? aAX : -1, aA5 = aAX, aAE(), bf.dl = !0), !0) : (aAX = (aAX = a8X(-1, aAX,
				a9o)) === a9o || !yu(eu, ew) || bJ.a24() ? -1 : aAX, aA5 !== aAX && (aA5 = aAX, aAE(), bf.dl = !0))
		}, this.a1q = function(eu, ew) {
			if (!aA7) return !1;
			aA7 = !1;
			var aAX = aAY(ew);
			var isEmptySpace = false;
			return bJ.a24() && -1 !== aA5 && (aA5 = -1, aAE(), bf.dl = !0), bf.eM - aA6 < 350 && aA9 === aAX && -1 !== (aAX = (aAX = a8X(-1, aAX, a9o)) !== a9o && yu(eu, ew) ? aAX : -1) && (eu = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lk[__fx.leaderboardFilter.filteredLeaderboard[aAX + position] ?? (isEmptySpace = true, jv[aD.eX])]) : lk[aAX + position]), aAX === a9o - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jv[aD.eX]) >=
				position + a9o - 1 && (eu = aD.eX), !isEmptySpace && aD.hh && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eu, ag.a0b, aD.kU), 0 !== ag.mi[eu] && !isEmptySpace) && aH.n3(eu, 800, !1, 0), !0
		}, this.a1U = function(eu, ew, deltaY) {
			var aAZ;
			return !(aA7 || aD.nB || (aAZ = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !yu(eu, ew)) || (eu = (eu = a8X(-1, aAY(ew), a9o)) === a9o || bJ.a24() ? -1 : eu, 0 < deltaY ? position < aD.ek - a9o && (position += Math.min(aD.ek - a9o -
				position, aAZ), aA5 = eu, aAE(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aAZ), aA5 = eu, aAE(), bf.dl = !0), 0))
		}, this.ug = function() {
			uh.drawImage(a9p, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, y7, eu, ew, a9S, aAa, gap, aAb, fontSize, aAc, aAd, aAe, aAf, aAg, aAh, aAi, aAj, aAk;

	function aAo() {
		y7.clearRect(0, 0, aW.i, aW.j), y7.fillStyle = bB.nf, y7.fillRect(0, 0, aW.i, aW.j), y7.fillStyle = bB.o2, eR = 0 < aAi ? aAi : Math.sqrt(aAf[4] / 1e4), y7.fillRect(0, aW.j - a9S - 1, Math.floor(eR * aW.i), a9S), y7.fillStyle = bB.ni, y7
			.fillRect(0, 0, aW.i, 1), y7.fillRect(0, 0, 1, aW.j), y7.fillRect(aW.i - 1, 0, 1, aW.j), y7.fillRect(0, aW.j - 1, aW.i, 1), y7.fillRect(0, aW.j - a9S - 1, aW.i, 1);
		for (var eR, aAq, dt = 0, aB = 0; aB < aAe.length; aB++) aAg[aB] ? (bA.qa.textAlign(y7, 0), aAq = Math.floor((aAa - a9S + 2 * aAb) * (aB - dt + 1) / (aAe.length + 1) - .7 * aAb), y7.fillText(aAe[aB], gap, aAq), bA.qa.textAlign(y7, 2), 5 ===
			aB && 0 !== ag.mi[aD.eX] && ag.gp[aD.eX] >= ae.jq(aD.eX) ? (y7.fillStyle = bB.oc, y7.fillText(aAm(aB), aW.i - gap, aAq), y7.fillStyle = bB.ni) : y7.fillText(aAm(aB), aW.i - gap, aAq)) : dt++
	}

	function aAm(aB) {
		return aB < 3 ? aAf[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rZ.a3y(aAf[aB] / 100, 2) : aB < 7 ? bA.rZ.zE(aAf[aB]) : aB === 7 ? aW.aAr(aAf[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gb, aD.eX) : __fx.utils.getDensity(aD.eX)
	}

	function aAl() {
		ag.gb[aD.eX] !== aAf[6] && (aAf[6] = ag.gb[aD.eX], aAc++)
	}
	this.dd = function() {
		aAi = aAj = 0, (aAd = new Array(8))[0] = L(112), aAd[1] = aD.kU ? L(113) : L(114), aAd[2] = L(115), aAd[3] = L(116), aAd[4] = L(117), aAd[5] = L(118, 0, "Interest"), aAd[6] = L(119), aAd[7] = L(120),
			aAd.push("Max Troops", "Density"), // add aAd
			(aAe = new Array(aAd.length)).fill(""), (aAf = new Array(aAd.length))[0] = aD.kU ? 0 : aD.kA, aAf[1] = aD.kU ? al.kB : aD.kW, aAf[2] = aD.zz, aAf[3] = 0, aAf[4] = bL.du(1e4 * ag.gb[0], Math.max(aD.ju, 1)), aAf[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.eX], 64), aAf[6] = 0, aAl(), aAf[7] = 0, aAh = aAm(6), aAg = new Array(aAd.length);
		for (var aB = aAd.length - 1; 0 <= aB; aB--) aAg[aB] = !0;
		aAk = 0, aAk = aD.kU ? (aAg[0] = !1, aAg[2] = !1, aAg[3] = !1, 3) : (aAg[3] = !1, 1), aAc = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hw() ? .1646 : .126) * 1.25 * h.hx), this.j = Math.floor(1.18 * this.i), a9S = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAb = .04 * this.i, aAa = this.j, this.j -= Math.floor(aAk * (this.j -
			2 * a9S) / aAd.length), fontSize = Math.floor(.7 * (aAa - a9S) / aAd.length);
		var a5b = bA.qa.sO(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5b, i) {
				for (var aB = 0; aB < aAe.length; aB++) aAe[aB] = bA.y7.a2x(aAd[aB], a5b, i)
			}((y7 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5b, .575 * this.i), bA.qa.textBaseline(y7, 1), y7.lineWidth = 1, this.a4D(), this.a8A(), aU.a8A(), aAo()
	}, this.a8A = function() {
		eu = h.i - this.i - bc.gap
	}, this.aAp = function() {
		ew = bc.gap
	}, this.a4D = function() {
		ew = bc.gap + (aU.a7X() && 0 !== ag.mi[aD.eX] && !aD.hB ? aU.j + bc.gap : 0)
	}, this.mU = function(bu) {
		(bu || 100 <= aAc) && (aAc = 0, aAo())
	}, this.a4w = function() {
		return aAf[7]
	}, this.aAr = function(value) {
		var l3 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l3) / 1e3);
		return value < 10 ? l3 + ":0" + value : l3 + ":" + value
	}, this.j3 = function() {
		var aB2, per;
		aAg[0] && aD.a00 - aD.zz !== aAf[0] && (aAf[0] = aD.a00 - aD.zz, aAc++), al.kB - aAf[0] !== aAf[1] && (aAf[1] = al.kB - aAf[0], aAc++), this.mM(), (aB2 = ae.aB3(aD.eX)) !== aAf[5] && (aAf[5] = aB2, aAc++), aAl(), aAf[7] += bf.aB4, aB2 =
			aAm(7), aAh !== aB2 && (aAh = aB2, aAc += 100), aB2 = aD.hh ? bh.kg() : ag.gb[lk[0]], per = bL.du(1e4 * aB2, Math.max(aD.ju, 1)), aAf[3] = aB2, aAf[4] !== per && (aAc++, aAf[4] = per), 8 === aD.kS && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.g9.gz(aB)) return bR.zZ.zw(), 1;
				return
			}() || aAf[3] < aD.ju || ! function() {
				for (var aB = al.kB - 1; 0 <= aB; aB--)
					if (0 < ag.gF[al.kC[aB]].length) return;
				return 1
			}() || bN.kx.aB1().length || bR.zZ.zw()
	}, this.mM = function() {
		aAg[2] && aD.zz !== aAf[2] && (aAf[2] = aD.zz, aAc++)
	}, this.aAy = function() {
		return aAf[3] === aD.ju
	}, this.aB5 = function(aB) {
		var tC, aB6, dt;
		return 2 !== aD.zx && (aB % 2 == 1 && (aV.mU(1, 1), bf.dl = !0), aB === aD.a4M ? (aAi = 0, aAo(), !1) : (-1 !== aB || 0 !== aAj) && (aB6 = aAi, aAi = aD.gw ? aB / aD.a4M : (dt = performance.now(), 0 <= aB && (tC = dt - 392 * aB, aAj =
			0 === aB || tC < aAj ? tC : aAj), 1 < (aAi = (dt - aAj) / (392 * aD.a4M)) ? 1 : aAi), aAo(), aAi !== aB6))
	}, this.ug = function() {
		uh.drawImage(canvas, eu, ew)
	}
}

function cO() {
	var hZ, aB7, i, j, a8G, aB8, aB9, a7Y, canvas, mv, aBA;

	function y3() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aBA = hZ = !1, a8G = .61, aB8 = .07, aB9 = .09, mv = a7Y = j = 0
	}, this.resize = function() {
		var y7, n8, f8, aBF, aBG, a5g;
		hZ && (i = aBB(i = a0.a1.hw() ? Math.floor(.69 * h.hx) : Math.floor(.5 * h.hx), a6B(h.i - 2 * bc.gap, 10)), i = aBB(i, Math.floor(3.57 * a6B(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, y7 = canvas.getContext("2d", {
				alpha: !0
			}), n8 = Math.floor(1 + j / 40), y7.clearRect(0, 0, i, j), y7.fillStyle = bB.nf, y7.fillRect(n8, n8, i - 2 * n8, j - 2 * n8), y7.lineJoin = "bevel", y7.lineWidth = 2 * n8, y7.strokeStyle = bB.ni, y7.strokeRect(n8, n8, i - 2 * n8,
				j - 2 * n8), y7.imageSmoothingEnabled = !1, f8 = ab.get(aB7), aBF = f8.width, a5g = (1 === aB7 ? .85 : 21 === aB7 ? .666 : .9) * a8G * j / (aBG = f8.height), y7.setTransform(a5g, 0, 0, a5g, Math.floor((i - a5g * aBF) / 2),
				Math.floor((j - a5g * aBG) / 2)), y7.drawImage(f8, 0, 0), y7.setTransform(1, 0, 0, 1, Math.floor(i - aB9 * j - aB8 * j - n8), Math.floor(n8 + aB8 * j)),
			function(y7, en) {
				y7.lineWidth = Math.floor(1 + j / 80), y7.strokeStyle = bB.ni, y7.beginPath(), y7.moveTo(0, 0), y7.lineTo(en, en), y7.moveTo(0, en), y7.lineTo(en, 0), y7.stroke()
			}(y7, Math.floor(aB9 * j)), y7.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fF, aBD, a83, aBE) {
		hZ || aBE && aBA || (aB7 = a83 ? 21 : fF ? 1 : 2, hZ = aBA = !0, this.resize(), aL.rr(), aR.a7y(), mv = bf.eM, a7Y = aBD ? 1 : 0)
	}, this.j3 = function() {
		!hZ || 1 <= a7Y || (a7Y = 1 < (a7Y += 5e-4 * (bf.eM - mv)) ? 1 : a7Y, mv = bf.eM, bf.dl = !0)
	}, this.h0 = function(eu, ew) {
		return !(!hZ || a7Y <= 0 || (eu -= Math.floor((h.i - i) / 2), ew -= y3(), eu < 0) || ew < 0 || i < eu || j < ew || (i - j / 3 < eu && ew < j / 3 && (hZ = !1, bf.dl = !0), 0))
	}, this.ug = function() {
		!hZ || a7Y <= 0 || (uh.globalAlpha = a7Y, uh.drawImage(canvas, Math.floor((h.i - i) / 2), y3()), uh.globalAlpha = 1)
	}
}

function dN() {
	var aBI, aBJ = new Uint8Array(5),
		aBK = new Uint8Array(5);
	this.aBL = new aBM, this.dd = function() {
		for (var fF = bj.eK.data[119].value, aB = 0; aB < aBJ.length; aB++) aBJ[aB] = (fF >> 2 * aB) % 4
	}, this.a4Y = function() {
		aBI = [L(121), "", L(122, [bX.aBN[28]]), L(123, [bX.aBN[26]]), L(124, [bX.aBN[0]])], this.aBL.dd()
	}, this.j3 = function() {
		this.aBL.j3()
	}, this.a5K = function(id) {
		1 < id && bJ.r2() || ! function(e8) {
			if (3 === aBJ[e8] || 1 === aBK[e8]) return;
			if (aBK[e8] = 1, !(Math.random() < .6)) {
				aBJ[e8]++;
				for (var fF = 0, aB = 0; aB < aBJ.length; aB++) fF += aBJ[aB] << 2 * aB;
				bj.s1.s2(119, fF)
			}
			return 1
		}(id) || aN.a6H(aBI[id])
	}
}

function aBM() {
	var aBP;
	this.dd = function() {
		aBP = !1
	}, this.j3 = function() {
		var gL;
		if (function() {
				if (!aBP) {
					if (bf.k7() % 30 != 9) return;
					if (!bA.g9.lf(90)) return;
					aBP = !0
				}
				return 1
			}() && (! function() {
				var qS = aN.a6d(956);
				if (qS) {
					if (bA.g9.l6(qS.player)) return 1;
					aN.a6c(956, 0)
				}
				return
			}() && (-1 === (gL = (aD.hh ? function() {
				var id = bh.ki(),
					en = al.kB;
				if (bg.kX[id])
					for (var zl = al.kC, el = bg.el, aB = 0; aB < en; aB++) {
						var gL = zl[aB];
						if (el[gL] !== id) return gL
					} else if (1 < en) return lk[en - 1];
				return -1
			} : function() {
				for (var aBX = al.kB, l2 = al.kC, aBY = jv, aB = 0; aB < aBX; aB++) {
					var gL = l2[aB];
					if (0 !== aBY[gL]) return gL
				}
				return -1
			})()) ? ! function() {
				var qS = aN.a6d(957);
				if (qS && qS.a67) {
					if (ac.ee(qS.a67.eZ << 2)) return 1;
					aN.a6c(957, 0)
				}
				return
			}() : (aN.yP(0, L(125, [ag.yQ[gL]]), 956, gL, bB.ni, bB.nf, -1, !0), 0)))) {
			var en = ao.il.lI;
			if (0 !== en)
				for (var eK = ao.il.eK, aB = 0; aB < en; aB++) {
					var eZ = eK[aB];
					if (ac.ee(eZ << 2)) return void aN.yP(0, L(126, [bM.ev(eZ), bM.ex(eZ)]), 957, 0, bB.ni, bB.nf, -1, !0, void 0, {
						f6: 1,
						eZ: eZ
					})
				}
		}
	}
}

function dO() {
	this.aBZ = new aBa, this.dd = function() {
		this.aBZ.resize()
	}
}

function aBa() {
	this.resize = function() {
		var aB, aBb = document.head.querySelector("style#ss");
		if (aBb)
			for (aB = aBb.sheet.cssRules.length - 1; 0 <= aB; aB--) aBb.sheet.deleteRule(0);
		else(aBb = document.createElement("style")).id = "ss", document.head.appendChild(aBb);
		var a8O = "::-webkit-scrollbar",
			aBc = bA.qa.qj(bc.sQ),
			hj = bA.qa.qj(Math.max(bA.qa.rt(.012), 8));
		try {
			aBb.sheet.insertRule(a8O + "{width:" + hj + ";height:" + hj + ";}", aBb.sheet.cssRules.length), aBb.sheet.insertRule(a8O + "-thumb{background-color:white;}", aBb.sheet.cssRules.length), aBb.sheet.insertRule(a8O +
				"-track{background:" + bB.ne + ";}", aBb.sheet.cssRules.length), aBb.sheet.insertRule(a8O + "-track:horizontal{border-top:" + aBc + " solid white;}", aBb.sheet.cssRules.length), aBb.sheet.insertRule(a8O +
				"-track:vertical{border-left:" + aBc + " solid white;}", aBb.sheet.cssRules.length), aBb.sheet.insertRule(a8O + "-button{display:none;}", aBb.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBb.sheet.cssRules.length - 1; 0 <= aB; aB--) aBb.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aBd = !1, this.nY = !1, this.a4H = !1, this.aBe = [0, 0, 0, 0], this.aBf = function() {
		var n8, n9, nL, nM;
		this.a4H = this.a4H || this.nY, (this.nY || this.aBd && this.a4H) && (n8 = ba.aBg[0], n9 = ba.aBg[1], nL = ba.aBg[2], nM = ba.aBg[3], n8 = n8 < this.aBe[0] ? this.aBe[0] : n8, n9 = n9 < this.aBe[1] ? this.aBe[1] : n9, nL = nL > this.aBe[
				2] ? this.aBe[2] : nL, nM = nM > this.aBe[3] ? this.aBe[3] : nM, this.nY = !1, this.aBd = !1, n8 === this.aBe[0] && n9 === this.aBe[1] && nL === this.aBe[2] && nM === this.aBe[3] ? this.a4I() : n8 <= nL && n9 <= nM && a4a
			.putImageData(a4b, 0, 0, n8, n9, nL - n8 + 1, nM - n9 + 1))
	}, this.a4I = function() {
		this.a4H && this.aBe[2] >= this.aBe[0] && this.aBe[3] >= this.aBe[1] && a4a.putImageData(a4b, 0, 0, this.aBe[0], this.aBe[1], this.aBe[2] - this.aBe[0] + 1, this.aBe[3] - this.aBe[1] + 1), this.a4H = !1
	}, this.a08 = function() {
		this.aBe[2] >= this.aBe[0] && this.aBe[3] >= this.aBe[1] && a4a.putImageData(a4b, 0, 0, this.aBe[0], this.aBe[1], this.aBe[2] - this.aBe[0] + 1, this.aBe[3] - this.aBe[1] + 1), this.a4H = !1
	}, this.dd = function() {
		var eu, ew;
		this.aBd = !1, this.nY = !1, this.a4H = !1, this.aBe[0] = bS.ey, this.aBe[1] = bS.ez, this.aBe[2] = this.aBe[3] = 0;
		loop: for (eu = 1; eu < bS.ey - 1; eu++)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBh[ac.xa(eu, ew) + 2]) {
					this.aBe[0] = eu;
					break loop
				} loop: for (ew = 1; ew < bS.ez - 1; ew++)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBh[ac.xa(eu, ew) + 2]) {
					this.aBe[1] = ew;
					break loop
				} loop: for (eu = bS.ey - 2; 0 < eu; eu--)
			for (ew = bS.ez - 2; 1 < ew; ew--)
				if (1 === aBh[ac.xa(eu, ew) + 2]) {
					this.aBe[2] = eu;
					break loop
				} loop: for (ew = bS.ez - 2; 0 < ew; ew--)
			for (eu = bS.ey - 2; 1 < eu; eu--)
				if (1 === aBh[ac.xa(eu, ew) + 2]) {
					this.aBe[3] = ew;
					break loop
				}
	}
}

function L(value, aBi, vE) {
	var qH = "number" == typeof value ? b7.aBj[value] : value;
	if (vE && b7.aBk() && (qH = vE), aBi)
		for (var en = aBi.length, aB = 0; aB < en; aB++)
			for (var f6 = 0; f6 < 3; f6++) qH = qH.replace("{" + (10 * f6 + aB) + "}", aBi[aB]);
	return qH
}

function c2() {
	this.data = new aBl;
	var aBm = (new aBn).L84,
		aBo = (this.aBj = aBm, !1);
	this.dd = function() {
		var en, g;
		aBo = !1, "en" !== bj.eK.data[12].value.split("-")[0].toLowerCase() ? bj.eK.data[12].value === bj.eK.data[145].value && 0 < bj.eK.data[146].value && (en = bj.eK.data[146].value, (g = bj.qr.vK(en, !1)).length === en) && !!bA.qi.a2a(g) &&
			function(g) {
				for (var en = g.length, j = 0; j < en; j++) g[j] = g[j].replace("&#39;", "'");
				var aBu = bj.qr.vK(en, !0);
				if (en !== aBu.length) return !1;
				if (!bA.qi.a2a(aBu)) return !1;
				for (var l3 = aBm.length, a9J = new Array(l3), aBv = l3 === en, gG = Math.min(en, l3), aB = 0; aB < l3; aB++)
					if (a9J[aB] = aBm[aB], aB < en && aBu[aB] === a9J[aB]) a9J[aB] = g[aB];
					else {
						aBv = !1;
						for (var f7 = 0; f7 < gG; f7++)
							if (aBu[f7] === a9J[aB]) {
								a9J[aB] = g[f7];
								break
							}
					} return b7.aBj = a9J, aBv
			}(g) || (aBo = !0) : b7.aBj = aBm
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dy
	}, this.aBk = function() {
		return this.aBj === aBm || !aBm.length
	}, this.aBw = function() {
		var aBx;
		aBo && (aBo = !1, 0 !== aBm.length) && (aBx = bj.eK.data[12].value, b0.aBy.aBz(0, aBx.slice(0, 20)))
	}, this.aC0 = function(g) {
		g.length === aBm.length && (this.aBj = g, bj.s1.s2(145, bj.eK.data[12].value), bj.s1.s2(146, g.length), bj.qr.vQ(g, !1), bj.qr.vQ(aBm, !0), 0 === aa.a18()) && 5 === t.so && t.y.aC1()
	}, this.aC2 = function() {
		var aC3, g = navigator.languages;
		return g && g.length ? (aC3 = Math.max(b7.data.aC4(g[0]), 0), 1 === g.length ? [aC3, aC3] : [aC3, Math.max(b7.data.aC4(g[1]), 0)]) : [0, 0]
	}
}

function aBl() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aC5 = function() {
		for (var aC6 = [], g = this.g, en = g.length, aB = 0; aB < en; aB++) aC6.push(g[aB]);
		var aC7 = bj.eK.data[12].vE;
		for (aB = 0; aB < en; aB++)
			if (aC6[aB] === aC7) {
				aC6.splice(aB, 1), en--;
				break
			} aC6.sort(), en++, aC6.unshift(aC7);
		try {
			if ("undefined" == typeof Intl) return aC6;
			for (aB = 0; aB < en; aB++) {
				var qH = new Intl.DisplayNames([aC6[aB]], {
					type: "language"
				}).of(aC6[aB]);
				qH !== aC6[aB] && (aC6[aB] = aC6[aB] + ": " + qH)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aC6
	}, this.aC9 = function(aCA) {
		for (var qH = bj.eK.data[12].value, en = aCA.length, aB = 0; aB < en; aB++)
			if (qH === aCA[aB].split(":")[0]) return aB;
		return 0
	}, this.aC4 = function(aCB) {
		if (!aCB || aCB.length < 2) return 0;
		aCB = aCB.split("-")[0].toLowerCase();
		for (var g = this.g, en = g.length, aB = 0; aB < en; aB++)
			if (aCB === g[aB]) return aB;
		return -1
	}
}

function aBn() {
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
	var eu, ew, j, tl, aCC, aCD, aCE, aCF, aCG, i, a3C, aCH;
	this.hZ = !1, this.dd = function(qH, aCI) {
		if (1 === a0.id && 13 <= a0.dv && a0.dv < 18) return aCI ? void(a3C = qH) : a3C !== qH ? void 0 : void a0.vI.saveString(200, qH);
		aCI && (a3C = qH, (aCH = document.createElement("a")).appendChild(document.createTextNode(a3C)), this.hZ = !0, aCH.title = a3C, aCH.target = "_blank", aCH.href = a3C, aCH.style.textAlign = "center", aCH.style.color = bB.ni, aCH.style
			.position = "absolute", aCH.style.padding = "0px", aCH.style.margin = "0px", this.resize(), document.body.appendChild(aCH), bf.dl = !0)
	}, this.rr = function() {
		return !(!this.hZ || (document.body.removeChild(aCH), this.hZ = !1))
	}, this.h0 = function(i4, i5) {
		return !!this.hZ && ((i4 < eu || i5 < ew || eu + i < i4 || ew + j < i5 || eu + i - tl < i4 && i5 < ew + tl) && (bf.dl = !0, this.hZ = !1, document.body.removeChild(aCH)), !0)
	}, this.resize = function() {
		var a5b, aCJ;
		this.hZ && (aCF = Math.floor(.8 * (a0.a1.hw() ? h.i > h.j ? .6 : .55 : .4) * h.hx), tl = Math.floor(.15 * aCF), aCC = Math.floor(.35 * tl), aCD = Math.floor(.5 * tl), aCE = Math.floor(2.5 * aCD), j = tl + aCC + 3 * aCD, a5b = bA.qa.sO(1,
			aCC / h.k), aCG = Math.floor(h.k * aQ.measureText(a3C, a5b)), aCJ = i = (aCF < aCG ? aCG : aCF) + 2 * aCE, i = Math.min(i, h.i - 2 * (a0.a1.hw() ? 2 : 1) * bc.gap), a5b = bA.qa.sO(1, i / aCJ * aCC / h.k), aCG = Math.floor(h
			.k * aQ.measureText(a3C, a5b)), eu = Math.floor((h.i - i) / 2), ew = Math.floor((h.j - j) / 2), aCH.style.font = a5b, aCH.style.top = Math.floor((ew + 1.4 * aCD + tl) / h.k) + "px", aCH.style.left = Math.floor((eu + (i -
			aCG) / 2) / h.k) + "px")
	}, this.ug = function() {
		this.hZ && (uh.fillStyle = bB.nf, uh.fillRect(eu, ew + tl, i, j - tl), uh.fillStyle = bB.oo, uh.fillRect(eu, ew, i, tl), uh.fillStyle = bB.ni, uh.lineWidth = bc.yv, uh.strokeStyle = bB.ni, uh.strokeRect(eu, ew, i, j), uh.fillRect(eu, ew +
			tl, i, bc.yv), uh.font = bA.qa.sO(1, .48 * tl), bA.qa.textAlign(uh, 1), bA.qa.textBaseline(uh, 1), uh.fillText("You are leaving Territorial.io!", Math.floor(eu + (i - .5 * tl) / 2), Math.floor(ew + .55 * tl)), aM.a5m(Math
			.floor(eu + i - .8 * tl), Math.floor(ew + .25 * tl), Math.floor(.5 * tl)), uh.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aAd, eu = [0, 0, 0, 0, 0],
		ew = [0, 0, 0, 0, 0],
		nK = [1, 1, 1, 1, 1],
		fF = [!0, !0, !0, !1, !1],
		f8 = (this.fa = [!0, !0, !0, !1, !1], null);
	this.aCK = function(a2l, aCL) {
		f8 = a2l, fF = aCL, aAd = [bK.aCM, bK.a11, bK.aCN, bK.aCN, bK.aCO], this.dd()
	}, this.dd = function() {
		if (ab.tG()) {
			var aB, sv = Math.floor((a0.a1.hw() ? .261 : .195) * h.hx),
				sw = Math.floor(.9 * sv),
				a8G = Math.floor(.17 * sw);
			if (gap = a0.a1.hw() ? 2 * bc.gap : bc.gap, nK[0] = sv / f8[0].width, nK[1] = sw / f8[1].width, nK[2] = a8G / f8[2].height, nK[3] = a8G / f8[3].height, nK[4] = a8G / f8[4].height, nK[2] *= 1.7, nK[3] *= 1.07, eu[0] = gap, eu[1] = gap,
				eu[2] = gap, eu[3] = gap, eu[4] = Math.floor(2 * gap + nK[3] * f8[3].width), ew[0] = gap, ew[1] = ew[0] + gap + nK[0] * f8[0].height, ew[2] = ew[1] + gap + nK[1] * f8[1].height, ew[3] = ew[2] + gap + nK[2] * f8[2].height, ew[4] =
				ew[3], !fF[0])
				for (aB = 0; aB < 5; aB++) ew[aB] -= nK[0] * f8[0].height + gap;
			if (!fF[1])
				for (aB = 2; aB < 5; aB++) ew[aB] -= nK[1] * f8[1].height + gap
		}
	}, this.hZ = function() {
		return !(7 === aa.a18() && a0.a1.hw())
	}, this.h0 = function(i4, i5) {
		if (f8 && this.hZ())
			for (var aB = fF.length - 1; 0 <= aB; aB--)
				if (fF[aB] && this.fa[aB] && eu[aB] < i4 && ew[aB] < i5 && i4 < eu[aB] + nK[aB] * f8[aB].width && i5 < ew[aB] + nK[aB] * f8[aB].height) return t.u(9, t.so, new aCP("You are leaving Territorial.io.", bA.qa.a3B(aAd[aB]))), !0;
		return !1
	}, this.ug = function() {
		if (f8 && this.hZ()) {
			var aB;
			for (uh.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fF[aB] && this.fa[aB] && (uh.setTransform(nK[aB], 0, 0, nK[aB], eu[aB], ew[aB]), uh.drawImage(f8[aB], 0, 0));
			uh.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aCQ = 0, this.aCR = null, this.tu = null, this.kx = null, this.y = null, this.uG = null, this.ts = null, this.message = null, this.aCS = null, this.rq = null, this.aCT = new aCU, this.a15 = 0, this.a9A = 0, this.dd = function() {
		this.a9A = bf.eM, this.aCQ = bG.sr.wC(bj.eK.data[105].value), this.tu = new aCV, this.kx = new aCW, this.y = new aCX, this.uG = new aCY, this.ts = new aCZ, this.message = new aCa, this.aCS = new aCb, this.rq = new aCc, this.y.dd(), bp
		.dd(), this.a15 = 1, a0.a1.setState(1), aa.setState(0)
	}, this.uA = function() {
		this.rq && this.rq.uA(), this.aCR = null, this.tu = null, this.kx = null, this.y = null, this.uG = null, this.ts = null, this.message = null, this.aCS = null, this.rq = null, this.a15 = 0, bp.uA(), a0.a1.setState(0)
	}
}

function aCV() {
	function aCx(g, t8, t9) {
		var aCy = g[t8];
		g[t8] = g[t9], g[t9] = aCy
	}
	this.tv = [
		[],
		[],
		[],
		[]
	], this.tw = [0, 0, 0, 0], this.aCd = [], this.aCe = function(aCf, sm, username, u1, a3e, aCg, elo, color, vk, aCh) {
		this.tv[aCf].push(this.aCi(sm, username, u1, a3e, aCg, elo, color, vk, aCh)), bn.aCQ === sm && (bn.aCR = this.tv[aCf][this.tv[aCf].length - 1]), bn.y.aCj += 29 === t.so && bn.y.re[0] === aCf && 1 === bn.y.re[2]
	}, this.aCi = function(sm, username, u1, a3e, aCg, elo, color, vk, aCh) {
		return {
			sm: sm,
			username: username,
			u1: u1,
			a3e: a3e,
			aCg: aCg,
			elo: elo,
			color: color,
			vk: vk,
			aCh: aCh
		}
	}, this.aCk = function(e8, aCf, u1, a3e, aCg, elo, vk) {
		e8 = this.tv[aCf][e8];
		e8.u1 = u1, e8.a3e = a3e, e8.aCg = aCg, e8.elo = elo, e8.vk = vk, bn.y.aCj += 29 === t.so && bn.y.re[0] === aCf && 1 === bn.y.re[2]
	}, this.aCl = function(e8, aCf, aCm) {
		var e8 = this.tv[aCf][e8],
			aCn = e8.username,
			aCo = "Redacted " + bF.sr.zE(e8.sm, 2);
		e8.username = aCm ? "[" + bA.rZ.a0e(aCn) + "] " + aCo : aCo, aCn.indexOf("Redacted") < 0 && (e8.aCp = aCn, e8.aCq = 3), bn.y.aCj += 29 === t.so && bn.y.re[0] === aCf && 1 === bn.y.re[2]
	}, this.aCr = function(e8, aCs, aCt) {
		var player = this.tv[aCs][e8];
		this.aCu(e8, aCs), this.tv[aCt].push(player), bn.y.aCj += 29 === t.so && bn.y.re[0] === aCt && 1 === bn.y.re[2]
	}, this.aCu = function(e8, aCs) {
		var tu = this.tv[aCs];
		this.aCd.push(tu[e8]), 1e3 < this.aCd.length && this.aCd.shift(), e8 >= this.tw[aCs] ? tu[e8] = tu[tu.length - 1] : (this.tw[aCs]--, 2 === aCs ? (tu.splice(this.tw[aCs] + 1, 0, tu[tu.length - 1]), tu.splice(e8, 1)) : (tu[e8] = tu[this.tw[
			aCs]], tu[this.tw[aCs]] = tu[tu.length - 1])), tu.pop(), bn.y.aCj += 29 === t.so && bn.y.re[0] === aCs && 1 === bn.y.re[2]
	}, this.aCv = function(e8, rd) {
		bn.y.aCj += 29 === t.so && bn.y.re[0] === rd && 1 === bn.y.re[2];
		var tu = this.tv[rd],
			qS = tu[e8];
		if (2 === rd)
			if (e8 >= this.tw[rd]) {
				for (var aCw = this.tw[rd], elo = qS.elo; aCw && elo > tu[aCw - 1].elo;) aCw--;
				tu[e8] = tu[this.tw[rd]], tu.splice(this.tw[rd]++, 1), tu.splice(aCw, 0, qS)
			} else tu.splice(this.tw[rd]--, 0, qS), tu.splice(e8, 1);
		else e8 >= this.tw[rd] ? aCx(tu, this.tw[rd]++, e8) : aCx(tu, --this.tw[rd], e8)
	}, this.aCz = function(sm) {
		for (var tv = this.tv, en = tv.length, aB = 0; aB < en; aB++)
			for (var tu = tv[aB], l3 = tu.length, f6 = 0; f6 < l3; f6++)
				if (sm === tu[f6].sm) return tu[f6];
		return null
	}
}

function aCU() {
	this.dm = function(e8) {
		if ((tw = bn.tu.tw[e8]) < 2) return !1;
		var rf = bn.y.rg[e8],
			aD0 = 9 === rf.aD1 ? 333 : 512,
			tw = Math.min(tw, aD0);
		8 === rf.aD1 && (tw -= tw % 2);
		aD0 = bn.tu.tv[e8].splice(0, tw), bn.tu.tw[e8] -= tw, tw = function(aD2) {
			if (bn.aCR) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var en = aD2.length, sm = bn.aCR.sm, aB = 0; aB < en; aB++)
					if (aD2[aB].sm === sm) return aB
			}
			return -1
		}(aD0);
		return -1 === tw ? (bn.tu.aCd = bn.tu.aCd.concat(aD0), 1e3 < bn.tu.aCd.length && bn.tu.aCd.splice(0, bn.tu.aCd.length - 1e3), bn.y.aCj += 29 === t.so && bn.y.re[0] === e8 && 1 === bn.y.re[2], !1) : (8 === rf.aD1 && (rf.aD5 = (rf.aD5 + (
			tw >> 1)) % 1024, e8 = tw - tw % 2, tw %= 2, aD0 = aD0.slice(e8, 2 + e8)), ax.dd(rf, aD0, tw), !0)
	}, this.aD6 = function(rf, aD2, aD3) {
		var eq = aD.data = new a4N,
			aDA = (eq.spawningSeed = rf.spawningSeed, rf.aD1 < 7 ? (eq.gameMode = 1, eq.numberTeams = rf.aD1 + 2) : 9 === rf.aD1 ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === rf.aD1 ?
				0 : 10 === rf.aD1 ? 1 : 2), eq.selectedPlayer = aD3, eq.isContest = rf.aD7, eq.mapType = bS.aD8(rf.eT) ? 0 : 1, bS.aD9(eq, rf.eT), eq.mapSeed = rf.mapSeed, eq.humanCount = aD2.length);
		eq.selectableSpawn = 1 === eq.gameMode || aDA < 100, eq.colorsData = new Uint32Array(aDA), eq.playerNamesData = new Array(aDA);
		for (var aB = 0; aB < aDA; aB++) eq.colorsData[aB] = aD2[aB].color, eq.playerNamesData[aB] = aD2[aB].username;
		if (2 === eq.battleRoyaleMode)
			for (eq.elo = new Uint16Array(aDA), aB = 0; aB < aDA; aB++) eq.elo[aB] = aD2[aB].elo;
		aa.setState(8), bS.a7(rf.eT, eq.mapSeed), aD.a4S(), aD.a4Q = 2
	}
}

function aCW() {
	var dz = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aDB = [bB.nw, bB.nw, bB.nx, bB.oQ, bB.oR, bB.oD, bB.oW, bB.nx, bB.oq, bB.og, bB.os],
		aDC = [
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
		aDD = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aDQ(rh, sm, aDS) {
		for (var f7 = rh.length - 1; 0 <= f7; f7--) {
			var qS = rh[f7];
			0 === qS.id && qS.sm === sm && (qS.r = "[Redacted Message]", aDS) && (qS.aDT = 1)
		}
	}
	this.rm = function(aDE) {
		var aDF, a0f;
		return aDE.id < 5 && (aDF = "@" + bF.sr.zE(aDE.sm, 5)), 0 === aDE.id ? aDF + ": " + aDE.r : 1 === aDE.id ? (a0f = "@" + bF.sr.zE(aDE.target, 5), 0 === aDE.aDG ? 32768 <= aDE.value ? aDF + " voted with " + (aDE.value - 32768 + 1) +
				" gold against " + a0f + " to weaken the latter's admin position. 📉" : aDF + " voted with " + (aDE.value + 1) + " gold for " + a0f + " to strengthen the latter's admin position. 💪" : 1 === aDE.aDG ? aDF + " sent " + Math.floor(
					aDE.value / 100) + " 🧈 gold to " + a0f + "." : aDF + " voted with " + (aDE.value / 10).toFixed(1) + " points for " + a0f + " to acknowledge the latter as clan leader. ✅") : 2 === aDE.id ? 0 === aDE.aDG ? aDF +
			" was 🔇 muted for 1 Hour." : 1 === aDE.aDG ? "The username of " + aDF + " was ✂️ redacted. Duration: 1 Day" : aDF + " 👢 was kicked." : 3 === aDE.id ? aDF + bo.eB(aDE.aDG, bo.e5[aDE.aDG][aDE.value]) + "@" + bF.sr.zE(aDE.target, 5) +
			bo.eD(aDE.aDG, bo.e5[aDE.aDG][aDE.value]) : 4 === aDE.id ? aDF + bo.eB(5, bo.e5[5][aDE.aDG]) + "@" + bF.sr.zE(aDE.target, 5) + bo.eD(5, bo.e5[5][aDE.aDG]) : 5 === aDE.id ? aDD[aDE.aDG] : 6 === aDE.id ? "You are about to mention " +
			aDE.value + " player" + (1 === aDE.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDE.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.rl = function(aDE, a6o) {
		return {
			aDE: aDE,
			r: a6o,
			aDH: 0,
			fontSize: 1,
			rp: 0,
			aDI: aDE.id ? bB.oP : bB.ni
		}
	}, this.tz = function(player, rd) {
		return (2 === rd ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.u0 = function(u1) {
		return aDB[u1]
	}, this.aDJ = function(u1, a3e) {
		return u1 < 3 || 7 === u1 ? aDC[u1][0] : 4 === u1 ? aDC[u1][a3e < 1 ? 0 : a3e < 10 ? 1 : 2] : aDC[u1][a3e < 10 ? 0 : 1]
	}, this.aDK = function(a3e) {
		return 0 === a3e
	}, this.aCz = function(rd, sm) {
		for (var tv = bn.tu.tv, tu = tv[rd], en = tu.length, aB = 0; aB < en; aB++)
			if (sm === tu[aB].sm) return tu[aB];
		for (var f7 = 0; f7 < tv.length; f7++)
			if (rd !== f7)
				for (en = (tu = tv[f7]).length, aB = 0; aB < en; aB++)
					if (sm === tu[aB].sm) return tu[aB];
		return null
	}, this.u2 = function(qS) {
		return !!bn.aCR && qS.sm === bn.aCR.sm
	}, this.aDL = function(tu, aDM, aDN) {
		var a0c = [];
		loop: for (var aB = aDM; aB < aDN; aB++) {
			var a0d = bA.rZ.a0e(tu[aB].username);
			if (a0d) {
				for (var f7 = a0c.length - 1; 0 <= f7; f7--)
					if (a0d === a0c[f7].name) {
						a0c[f7].gG++;
						continue loop
					} a0c.push({
					name: a0d,
					gG: 1
				})
			}
		}
		if (a0c.sort(function(f6, f7) {
				return f7.gG - f6.gG
			}), 0 === a0c.length) return "";
		for (var qH = a0c[0].name + ": " + a0c[0].gG, aB = 1; aB < a0c.length; aB++) qH += "   " + a0c[aB].name + ": " + a0c[aB].gG;
		return qH
	}, this.aDO = function(u1, a3e, aCg) {
		return 0 === dz[u1].length ? "Rank: " + (a3e + 1) : dz[u1] + " Rank: " + (a3e + 1) + (3 !== u1 && aCg < 100 ? "   " + dz[3] + " Rank: " + (aCg + 1) : "")
	}, this.aDP = function(sm) {
		for (var rg = bn.y.rg, aB = 0; aB < rg.length; aB++) aDQ(rg[aB].rh, sm);
		aDQ(bn.message.aDR(), sm, 1), bn.rq.aDP(sm)
	}
}

function aCZ() {
	var sH = 0,
		aDU = 0,
		aDV = 0,
		aDW = null,
		aDX = null;

	function aDa(qS, aDb, aDc) {
		var qH = qS.username;
		return (qH += "   " + bn.kx.aDO(qS.u1, qS.a3e, qS.aCg)) + function(qS) {
			qS = qS.vk;
			if (qS < 1e3) return "   Gold: " + qS;
			if ((qS %= 1024) < 1e3) return "   Gold: " + qS + "k";
			return "   Gold: " + (qS - 999) + "M"
		}(qS) + ("   IP: " + bF.sr.zE(qS.aCh, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aDc ? aDU : aDZ(qS, aDb)])
	}

	function aDZ(qS, aDb) {
		return aDU = aDb || bn.tu.aCz(qS.sm) ? 1 : 0
	}
	this.aDY = function() {
		!sH || aDU === aDZ(aDX) && aDV === aDX.vk || (aDV = aDX.vk, aDW.show(-1, -1, aDa(aDX, 0, 1), 1, 1))
	}, this.u3 = function(e, qS, aDb) {
		var a8N = e.target.getBoundingClientRect();
		this.show(a8N.left, a8N.top, qS, 0, aDb), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.ts && bn.ts.rr(1)
		})
	}, this.show = function(eu, ew, qS, sL, aDb) {
		aDW = aDW || new sF, aDV = (aDX = qS).vk, aDW.show(eu, ew, aDa(qS, aDb), sL), sH = 1
	}, this.rr = function(sR) {
		aDW && aDW.rr(sR) && (sH = 0, aDX = null)
	}
}

function aCX() {
	function aDh(aDk) {
		bn.y.aCj && 1 === bn.y.re[2] && t.a4y(29).aDl(), bn.y.aCj = 0, t.a4y(29).aDm(), 0 !== bn.y.rg[bn.y.re[0]].tf && !aDk || t.a4y(29).aDn(), bn.ts.aDY()
	}
	this.rg = new Array(4), this.re = [0, 0, 1, 0], this.aCj = 0, this.aDe = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rg.length; aB++) this.rg[aB] = new aDf;
		this.re[0] = bj.eK.data[158].value
	}, this.aDg = function() {
		aDh(!0)
	}, this.aDi = function() {
		for (var aB = 0; aB < bn.y.rg.length; aB++) {
			var rf = bn.y.rg[aB];
			0 === rf.tf ? rf.aDo = 0 : (rf.aDp = Math.max(rf.aDp - rf.aDo % 2, 0), rf.aDo++)
		}
		aDh(!1)
	}, this.aDq = function(rd) {
		this.re[0] !== rd || this.re[2] || t.a4y(29).aDr()
	}
}

function aCb() {
	var aDs = 0,
		aDt = "",
		aDu = 0,
		aDv = 0,
		aDw = 0;

	function aDy(a6o) {
		b0.aE9.aEA(3, a6o)
	}

	function aE7(gG) {
		aDs = 1, bn.message.aEB({
			id: 6,
			value: gG
		})
	}

	function aE1(r) {
		var aEE = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEE)
	}
	this.a01 = function(r) {
		var aDx, g, aE3;
		if (aDs) return aDs = 0, "yes" === (aDx = r.toLowerCase()) || "y" === aDx ? void aDy(aDt) : void bn.message.aEB({
			id: 5,
			aDG: 7
		});
		!(r.indexOf("@") < 0) && (aDx = aE1(r)) ? (aDt = r, g = function(aE0) {
			for (var en = aE0.length, aEC = [0, 0, 0, 0], aB = 0; aB < en; aB++)
				for (var i = aE0[aB], f6 = 0; f6 < 4; f6++) i === "@room" + (f6 + 1) && (aEC[f6] = 1);
			if ((aDv = bA.qi.a2P(aEC)) % 4 == 0) return bA.qi.a2h(bn.tu.tv);
			for (f6 = 0; f6 < 4; f6++) aEC[f6] = aEC[f6] ? bn.tu.tv[f6] : [];
			return bA.qi.a2h(aEC)
		}(aDx), function(aE0, aE3, r) {
			if (!aDu) return;
			for (var en = aE3.length, aB = 0; aB < en; aB++) 2 === aE3[aB].id && (r = r.replace(aE0[aE3[aB].e8], "@" + aE3[aB].fF));
			return aDs = 1, aDy((aDt = r).slice(0, 126) + "|"), 1
		}(aDx, aE3 = function(aE0) {
			for (var aE3 = [], en = (aDw = aDu = 0, aE0.length), aB = 0; aB < en; aB++) {
				var i = aE0[aB],
					l3 = i.length;
				bA.rZ.startsWith(i, "@[") ? l3 <= 9 && bA.rZ.a3F(i, "]") && aE3.push({
					id: 0,
					fF: i.substring(2, l3 - 1).toUpperCase()
				}) : 6 === l3 ? bA.rZ.startsWith(i, "@room") || (aDw++, aE3.push({
					id: 1,
					fF: bG.sr.wC(i.substring(1))
				})) : 1 < l3 && l3 < 5 && 0 <= (l3 = b7.data.aC4(i.substring(1))) && (aE3.push({
					id: 2,
					fF: l3,
					e8: aB
				}), aDu = 1)
			}
			return aE3
		}(aDx), r) || (0 === aE3.length ? aDv || function(aE0) {
			for (var en = aE0.length, aB = 0; aB < en; aB++) {
				var i = aE0[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aDx) ? aE7(g.length) : aDy(r) : aDx.length === aDw ? aDy(r) : (function(g, aE3) {
			var l3 = aE3.length;
			if (0 === l3) return;
			var en = g.length;
			loop: for (var aB = en - 1; 0 <= aB; aB--) {
				for (var f6 = 0; f6 < l3; f6++)
					if (0 === aE3[f6].id) {
						if (aE3[f6].fF === bA.rZ.a0e(g[aB].username)) continue loop
					} else if (1 === aE3[f6].id && aE3[f6].fF === g[aB].sm) continue loop;
				g[aB] = g[--en], g.pop()
			}
		}(g, aE3), aE7(g.length)))) : aDy(r)
	}, this.aEF = function(r) {
		var aE0 = aE1(r);
		if (aE0)
			for (var a5 = new RegExp("^[0-9]+$"), en = aE0.length, aB = 0; aB < en; aB++) {
				var i = aE0[aB].substring(1),
					l3 = i.length;
				1 <= l3 && l3 <= 3 && a5.test(i) && (l3 = parseInt(i, 10), !isNaN(l3)) && 0 <= l3 && l3 < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[l3]))
			}
		return r
	}
}

function aCa() {
	var aEG, aEH = [],
		aEI = -1,
		aEJ = 0,
		aEK = 0;

	function aEO() {
		aEJ = bf.eM, (3 === this.u7 ? (aEK = 1, aEN) : (aEI = (aEH.length + aEI + 2 * this.u7 - 1) % aEH.length, aEM))()
	}

	function aEM() {
		0 !== aEH.length && (aEK = 0, aEG && aEG.uA(), (aEG = new u4(aEO)).s2(aEI, aEH.length), aEG.show(aEH[aEI]), bn.message.resize())
	}

	function aEN() {
		aEG && aEG.uA(), (aEG = new uB(aEM)).s2(aEH.length), aEG.show(), bn.message.resize()
	}
	this.aEB = function(aDE) {
		var qS;
		2 === aDE.id && 3 === aDE.aDG ? bn.kx.aDP(aDE.sm) : (qS = bn.kx.rl(aDE, bn.kx.rm(aDE)), (5 !== aDE.id && 6 !== aDE.id || (t.a4y(29).aEL().ro(qS), 5 === aDE.id)) && (qS = bf.eM < aEJ + 2e4, aEI !== aEH.length - 1 && qS || (aEI = aEH
			.length), aEH.push(aDE), bj.eK.data[14].value || bp.play(), aEG) && (bj.eK.data[13].value || aEK && qS ? aEG.s2(aEH.length) : aEM()))
	}, this.show = function() {
		aEN()
	}, this.rr = function() {
		aEI = aEH.length - 1, aEG && aEG.uA(), aEG = null
	}, this.resize = function() {
		aEG && aEG.resize()
	}, this.aDR = function() {
		return aEH
	}
}

function aCY() {
	var aEP = null,
		aEQ = null,
		aER = 0,
		aES = 0,
		aET = null;

	function aEV() {
		0 !== aEQ.u1 && (bn.uG.rr(), t.u(8, 29, new sp(25, {
			sq: 0,
			sm: bF.sr.zE(aEQ.sm, 5),
			sn: 0
		}, 29)))
	}

	function aEW() {
		var eu = aEP.eu,
			ew = aEP.ew;
		bn.uG.rr(), aEP = new uC([new w("Kick User", function() {
			aEc(0, 0)
		}, aEf(0, 0)), new w("Block Chat", aEd, aEf(1, 0)), new w("Censor Username", aEe, aEf(2, 0))]), aEb(eu, ew), aER = 2, aES = 1
	}

	function aEf(id, e8) {
		var e7, aCg;
		return !bn.aCR || bn.kx.u2(aEQ) || (e7 = aEQ.a3e) <= (aCg = bn.aCR.aCg) || 1 - bo.e6(id, aCg, e8) ? 1 : 4 === aEQ.u1 ? 50 <= e7 ? +(e7 <= aCg) : 20 <= e7 ? +(e7 / 2 <= aCg) : +(e7 / 3 <= aCg) : 0
	}

	function aEZ() {
		return !bn.aCR || bn.kx.u2(aEQ) ? 1 : 0
	}

	function aEY() {
		var eu = aEP.eu,
			ew = aEP.ew,
			aEg = (bn.uG.rr(), aEZ());
		aEP = new uC([new w(bo.e5[5][0], function() {
			aEc(5, 0)
		}, aEg), new w(bo.e5[5][1], function() {
			aEc(5, 1)
		}, aEg), new w(bo.e5[5][2], function() {
			aEc(5, 2)
		}, aEg), new w(aEQ.aCg < 100 ? "Stealth Report" : bo.e5[5][3], function() {
			aEc(5, 3)
		}, aEg)]), aEb(eu, ew), aES = aER = 2
	}

	function aEa() {
		29 === t.so && t.a4x().aCS(bF.sr.zE(aEQ.sm, 5))
	}

	function aEc(id, value) {
		b0.aE9.aEA(5, {
			id: id,
			value: value,
			sm: aEQ.sm
		})
	}

	function aEd() {
		var eu = aEP.eu,
			ew = aEP.ew;
		bn.uG.rr(), aEP = new uC([new w(bo.e5[1][0], function() {
			aEc(1, 0)
		}, aEf(1, 0)), new w(bo.e5[1][1], function() {
			aEc(1, 1)
		}, aEf(1, 1)), new w(bo.e5[1][2], function() {
			aEc(1, 2)
		}, aEf(1, 2)), new w(bo.e5[1][3], function() {
			aEc(1, 3)
		}, aEf(1, 3)), new w(bo.e5[1][4], function() {
			aEc(1, 4)
		}, aEf(1, 4))]), aEb(eu, ew), aER = 3, aES = 1
	}

	function aEe() {
		var eu = aEP.eu,
			ew = aEP.ew;
		bn.uG.rr(), aEP = new uC([new w(bo.e5[2][0], function() {
			aEc(2, 0)
		}, aEf(2, 0)), new w(bo.e5[2][1], function() {
			aEc(2, 1)
		}, aEf(2, 1)), new w(bo.e5[2][2], function() {
			aEc(2, 2)
		}, aEf(2, 2))]), aEb(eu, ew), aER = 3, aES = 2
	}

	function aEb(eu, ew, uI) {
		aEP.show(eu, ew, uI), bn.ts.show(aEP.eu, aEP.ew, aEQ, 1)
	}
	this.aEU = function(e, qS) {
		aER = 1, aEQ = qS, aEP = new uC([new w(L(127), aEV, 0 === aEQ.u1 ? 1 : 0), new w(L(128), aEW, function() {
			if (!bn.aCR) return 1;
			if (bn.kx.u2(aEQ)) return 1;
			if (100 <= bn.aCR.aCg) return 1;
			if (bn.aCR.aCg >= aEQ.a3e) return 1;
			return 0
		}()), new w(L(129, 0, "🚩 Report"), aEY, aEZ()), new w(L(130), aEa, 0)]), aEb((aET = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aET.clientY, 1)
	}, this.a1z = function(code) {
		if (29 !== t.so) return !1;
		if (!aEQ) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.rr();
			else if (bA.rZ.startsWith(code, "Numpad") || bA.rZ.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aER) this.aEU(aET, aEQ);
				else {
					if (!aEP) return !1;
					1 === aER ? code <= 1 ? aEV() : 2 === code ? aEW() : 3 === code ? aEY() : (aEa(), this.rr()) : 2 === aER ? 1 === aES ? code <= 1 ? (aEc(0, 0), this.rr()) : (2 === code ? aEd : aEe)() : (aEc(5, bL.hv(code - 1, 0, 3)), this
					.rr()) : (aEc(aES, bL.hv(code - 1, 0, bo.e5[aES].length - 1)), this.rr())
				}
		}
		return !0
	}, this.rr = function() {
		aER = 0, aEP && aEP.rr(), aEP = null, bn.ts.rr()
	}
}

function aDf() {
	this.tf = 0, this.eT = 0, this.mapSeed = 0, this.aD1 = 0, this.aEj = 0, this.aEk = 0, this.aD7 = 0, this.aDp = 0, this.spawningSeed = 0, this.a1D = 0, this.aD5 = 0, this.rh = [], this.ri = 1048575, this.aDo = 0, this.aEl = [{
		eT: 0,
		mapSeed: 0,
		aD1: 0,
		eM: 100,
		aD7: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aD1: 1,
		eM: 200,
		aD7: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aD1: 2,
		eM: 300,
		aD7: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aD1: 3,
		eM: 400,
		aD7: 0
	}, {
		eT: 0,
		mapSeed: 0,
		aD1: 9,
		eM: 500,
		aD7: 0
	}, {
		eT: 1,
		mapSeed: 0,
		aD1: 10,
		eM: 600,
		aD7: 0
	}, {
		eT: 2,
		mapSeed: 0,
		aD1: 8,
		eM: 700,
		aD7: 0
	}, {
		eT: 3,
		mapSeed: 0,
		aD1: 3,
		eM: 800,
		aD7: 0
	}]
}

function aCc() {
	var aEm = [],
		t1 = [],
		aEn = [];

	function aEp(qS) {
		for (var r = qS.r, aEo = [];;) {
			var f8 = function aEr(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qH = r.substring(position + 1, position + 6);
				if (5 !== qH.length) return aEr(r, position + 1);
				if (bA.rZ.startsWith(qH, "room")) return aEr(r, position + 1);
				var aEy = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aEy.test(qH)) return aEr(r, position + 1);
				aEy = r.substring(position + 6, position + 7);
				if (1 !== aEy.length) return position;
				qH = new RegExp("^[ :!.]+$");
				if (!qH.test(aEy)) return aEr(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f8) {
				aEo.push(aEs(r, qS));
				break
			}
			0 === f8 ? aEo.push(aEt(r.substring(1, 6), qS, f8)) : (aEo.push(aEs(r.substring(0, f8), qS)), aEo.push(aEt(r.substring(f8 + 1, f8 + 6), qS, f8))), r = r.substring(f8 + 6)
		}
		return aEo
	}

	function aEt(qH, qS, f8) {
		var aEu = function(qH) {
				var sm = bG.sr.wC(qH),
					aEu = bn.tu.aCz(sm);
				if (aEu) {
					for (aEm.push(aEu); 75 < aEm.length;) aEm.shift();
					return aEu
				}
				for (var aCd = bn.tu.aCd, aB = aCd.length - 1; 0 <= aB; aB--)
					if (aEu = aCd[aB], sm === aEu.sm) return aEm.push(aEu), aEu;
				for (aB = aEm.length - 1; 0 <= aB; aB--)
					if (aEu = aEm[aB], sm === aEu.sm) return aEm.push(aEu), aEu;
				return bn.tu.aCi(sm, qH, 1, 999999, 999999, 0, 0, 0, 0)
			}(qH),
			qH = (0 === f8 && 0 === qS.aDE.id && qS.rp && (qS.fontSize = bn.kx.aDJ(aEu.u1, aEu.a3e), qS.aDH = bn.kx.aDK(aEu.a3e)), document.createElement("span"));
		return qH.textContent = function(aEu, qS, f8) {
			if (aEu.aCq) return aEu.aCq--, f8 = 2 === qS.aDE.id || (3 === qS.aDE.id || 4 === qS.aDE.id) && 0 !== f8, aEu.username + (f8 ? " (" + aEu.aCp + ")" : "");
			if (qS.aDE.aDT) return "Redacted " + bF.sr.zE(aEu.sm, 2);
			return aEu.username
		}(aEu, qS, f8), qH.style.display = "inline-block", qH.style.color = bn.kx.u0(aEu.u1), qH.style.cursor = "pointer", qH.style.margin = "0", qH.style.font = "inherit", qH.style.minWidth = qH.style.minHeight = "1em", bn.kx.u2(aEu) && (qH
			.style.textDecoration = "underline"), bn.kx.aDK(aEu.a3e) && (qH.style.fontWeight = "bold"), qH.onclick = function(e) {
			bn.uG.aEU(e, aEu)
		}, bJ.r2() || (qH.onmouseover = function(e) {
			bn.ts.u3(e, aEu)
		}), t1.push(qH), qH
	}

	function aEs(r, qS) {
		var rY = document.createElement("span");
		return rY.textContent = r, rY.style.color = qS.aDI, rY.style.margin = "0", rY.style.font = "inherit", rY
	}

	function aF3(aEu, aCo, sm) {
		sm !== aEu.sm || aEu.aCp || (aEu.aCp = aEu.username, aEu.aCq = 3, aEu.username = aCo)
	}
	this.uA = function() {
		for (var aB = 0; aB < t1.length; aB++) t1[aB].onclick = t1[aB].onmouseover = null;
		aEn = t1 = null
	}, this.transform = function(qS) {
		for (var qF = document.createElement("div"), aEo = aEp(qS), aB = 0; aB < aEo.length; aB++) qF.appendChild(aEo[aB]);
		0 === qS.aDE.id && (qF.vx143 = qS.aDE, aEn.push(qF)), qF.style.margin = "0.6em 0.6em", qS.rp && (qF.style.marginLeft = qF.style.marginRight = "inherit"), qF.style.font = "inherit";
		var aEq = 0 < qS.aDE.id;
		return qS.aDH && (qF.style.fontWeight = "bold"), aEq && (qF.style.paddingLeft = "0.7em"), aEq && (qF.style.fontStyle = "italic"), qF.style.fontSize = qS.fontSize.toFixed(2) + "em", qF
	}, this.aF1 = function(aF2) {
		if (aF2 && (2 === aF2.id && 1 === aF2.aDG || 3 === aF2.id && 2 === aF2.aDG)) {
			var sm = 3 === aF2.id ? aF2.target : aF2.sm;
			if (!bn.tu.aCz(sm)) {
				for (var aCo = "Redacted " + bF.sr.zE(sm, 2), aCd = bn.tu.aCd, aB = aCd.length - 1; 0 <= aB; aB--) aF3(aCd[aB], aCo, sm);
				for (aB = aEm.length - 1; 0 <= aB; aB--) aF3(aEm[aB], aCo, sm)
			}
		}
	}, this.aDP = function(sm) {
		for (var aF4 = aEn, aB = aF4.length - 1; 0 <= aB; aB--) {
			var eq = aF4[aB];
			if (eq.vx143.sm === sm) {
				for (; eq.firstChild;) eq.removeChild(eq.firstChild);
				eq.vx143.r = "[Redacted Message]";
				for (var aEo = aEp(bn.kx.rl(eq.vx143, bn.kx.rm(eq.vx143))), f6 = 0; f6 < aEo.length; f6++) eq.appendChild(aEo[f6]);
				aF4.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aF5, aF6, aF7;

	function aFC(aB) {
		var button = aY.r9[aB],
			eu = button.eu,
			ew = button.ew,
			i = button.i,
			j = button.j;
		uh.fillStyle = button.aFA, uh.fillRect(eu, ew, i, j), aB === aF5 && (uh.fillStyle = aF7, uh.fillRect(eu, ew, i, j)), uh.lineWidth = bc.yv, uh.strokeStyle = aF6, uh.strokeRect(eu, ew, i, j),
			function(button) {
				var eu = button.eu,
					ew = button.ew,
					i = button.i,
					j = button.j;
				bA.qa.textAlign(uh, 1), bA.qa.textBaseline(uh, 1), uh.font = button.font, uh.fillStyle = aF6, uh.fillText(button.a6o, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ew = 0, this.gap = 0, this.dd = function() {
		aF5 = -1, aF6 = bB.ni, aF7 = "rgba(255,255,255,0.16)", this.r9 = new Array(7), this.j = Math.floor((a0.a1.hw() ? .123 : .093) * h.hx), this.i = Math.floor((a0.a1.hw() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aF8 = Math.floor(.26 * this.j),
			aF9 = bA.qa.sO(1, aF8);
		this.r9[0] = {
			eu: 0,
			ew: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a6o: "Multiplayer",
			font: aF9,
			aFA: "rgba(22,88,22,0.8)",
			fontSize: aF8
		}, aF8 = Math.floor(.18 * this.j), aF9 = bA.qa.sO(1, aF8), this.r9[1] = {
			eu: 0,
			ew: 0,
			i: this.i - this.r9[0].i - this.gap,
			j: this.j,
			a6o: "Single Player",
			font: aF9,
			aFA: "rgba(22,88,88,0.8)",
			fontSize: aF8
		}, this.r9[2] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6o: "",
			font: this.r9[1].font,
			aFA: "rgba(100,0,0,0.8)",
			fontSize: this.r9[1].fontSize
		}, this.r9[3] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: this.j,
			a6o: "Back",
			font: this.r9[0].font,
			aFA: "rgba(0,0,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.r9[4] = {
			eu: 0,
			ew: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6o: "The game was updated!",
			font: this.r9[1].font,
			aFA: "rgba(100,0,0,0.8)",
			fontSize: this.r9[1].fontSize
		}, this.r9[5] = {
			eu: 0,
			ew: 0,
			i: this.r9[0].i,
			j: Math.floor(.8 * this.j),
			a6o: "Reload",
			font: this.r9[0].font,
			aFA: "rgba(0,100,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.r9[6] = {
			eu: 0,
			ew: 0,
			i: this.r9[1].i,
			j: this.r9[5].j,
			a6o: "Back",
			font: this.r9[0].font,
			aFA: "rgba(0,0,0,0.8)",
			fontSize: this.r9[0].fontSize
		}, this.a9M()
	}, this.a9M = function() {
		this.ew = Math.floor(.54 * h.j), this.r9[0].eu = Math.floor(.5 * h.i - .5 * this.i), this.r9[1].eu = this.r9[0].eu + this.r9[0].i + this.gap, this.r9[2].eu = this.r9[3].eu = this.r9[0].eu, this.r9[4].eu = this.r9[5].eu = this.r9[0].eu,
			this.r9[6].eu = this.r9[1].eu, this.r9[0].ew = Math.floor(.54 * h.j), this.r9[1].ew = this.r9[0].ew, this.r9[2].ew = Math.floor((h.j - this.r9[2].j - this.r9[3].j - this.gap) / 2), this.r9[3].ew = this.r9[2].ew + this.r9[2].j + this
			.gap, this.r9[4].ew = Math.floor((h.j - this.r9[4].j - this.r9[5].j - this.gap) / 2), this.r9[5].ew = this.r9[6].ew = this.r9[4].ew + this.r9[4].j + this.gap
	}, this.aFB = function() {
		aFC(0), aFC(1)
	}, this.aFD = function() {
		aFC(2), aFC(3)
	}, this.aFE = function() {
		aFC(4), aFC(5), aFC(6)
	}, this.a1R = function(eu, ew, mU) {
		var aB = -1;
		return 0 === aa.a18() ? aB = this.a1v(eu, ew, 0, 2) : 3 === aa.a18() ? aB = this.a1v(eu, ew, 3, 1) : 5 === aa.a18() && (aB = this.a1v(eu, ew, 5, 2)), aF5 !== aB && (aF5 = aB, mU) && (bf.dl = !0), -1 !== aB && (aT.rb(), !0)
	}, this.a1v = function(eu, ew, aFF, size) {
		for (var aB = aFF; aB < aFF + size; aB++)
			if (eu >= this.r9[aB].eu && ew >= this.r9[aB].ew && eu <= this.r9[aB].eu + this.r9[aB].i && ew <= this.r9[aB].ew + this.r9[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aFH, aFI, a6z, aFJ, aFK, aFL, aFM, aFN, aFO, a6y, aFP, aFQ, aFR, aFS = 1;

	function aFU(aFV) {
		!aFV && 1 === aFR && aFS ? (aFS = 0, b0.y.close(aFR, 3280)) : aFR = (aFR + 1) % b0.y.aFW, aFQ = bf.eM, b0.y.aFX(aFR, 4) && b0.aE9.aFY(aFR)
	}

	function aFZ() {
		if (0 !== aFR) return 1 === aFR && __fx.customLobby.isActive() ? (o.a1G(3249), __fx.customLobby.setActive(!1)) : void aFU();
		o.a1G(3249)
	}

	function aFe(ew, a94, tf) {
		var n8 = Math.floor((h.i - aFJ) / 2) + aFM,
			nL = n8 + Math.floor(tf * (aFJ - 2 * aFM));
		uh.lineWidth = a94, uh.beginPath(), uh.moveTo(n8, ew), uh.lineTo(nL, ew), uh.lineTo(Math.floor(n8 - aFM + tf * aFJ), ew + a6z), uh.lineTo(n8 - aFM, ew + a6z), uh.closePath()
	}
	this.aFT = 1, this.dd = function() {
		aa.setState(6), aFH = 0, aFI = 1, aFN = "rgba(0,220,120,0.4)", aFO = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aFS = 1, aFR = this.aFT - 1, aFU(1)
	}, this.resize = function() {
		aFJ = Math.floor((a0.a1.hw() ? .5 : .25) * h.hx), aFK = aFJ + 12, a6z = Math.floor(.125 * aFJ), aFM = 3 * a6z, aFL = Math.floor(.225 * aFJ), aFP = Math.floor(.3 * a6z), a6y = bA.qa.sO(0, aFP)
	}, this.a1C = function(a13) {
		a13 === aFR && aFZ()
	}, this.h0 = function(eu, ew) {
		var n8 = Math.floor((h.i - aFK) / 2),
			n9 = Math.floor(.5 * (h.j - bc.gap - a6z - aFL)) + a6z + bc.gap;
		return n8 < eu && eu < n8 + aFK && n9 < ew && ew < n9 + aFL && (this.a26(), aY.a1R(eu, ew, !1), !0)
	}, this.a26 = function() {
		b0.y.a1H(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.j3 = function() {
		6 === aa.a18() && (bf.eM > aFQ + 12e3 && aFZ(), 100 < (aFH += .07 * aFI * (aFH < 16 ? 5 + aFH : 84 < aFH ? 105 - aFH : 17)) ? (aFH = 100, aFI = -1) : aFH < 0 && (aFH = 0, aFI = 1), aFN = "rgba(0," + Math.floor(190 - 1.9 * aFH) + "," +
			Math.floor(120 - 1.2 * aFH) + "," + (.4 + .004 * aFH) + ")", aFO = "rgba(0," + Math.floor(1.9 * aFH) + "," + Math.floor(1.2 * aFH) + "," + (.8 - .004 * aFH) + ")", bf.dl = !0)
	}, this.ug = function() {
		var eu = Math.floor((h.i - aFK) / 2),
			ew = Math.floor(.5 * (h.j - bc.gap - a6z - aFL));
		! function(title, ew, a94, tf) {
			uh.fillStyle = aFO, aFe(ew, a94, 1), uh.fill(), uh.fillStyle = aFN, aFe(ew, a94, tf), uh.fill(), uh.strokeStyle = bB.ni, aFe(ew, a94, 1), uh.stroke(),
				function(aFg, ew) {
					bA.qa.textAlign(uh, 1), bA.qa.textBaseline(uh, 1), uh.font = a6y, uh.fillStyle = bB.ni, uh.fillText(aFg, Math.floor(.5 * h.i), Math.floor(ew + .58 * a6z))
				}(title, ew)
		}(L(131), ew, 3, aFH / 100),
		function(eu, ew, i, j, a6o) {
			uh.fillStyle = bB.nd, uh.fillRect(eu, ew, i, j), uh.lineWidth = 3, uh.strokeStyle = bB.ni, uh.strokeRect(eu, ew, i, j);
			var en = Math.floor(.3 * j);
			bA.qa.textAlign(uh, 1), bA.qa.textBaseline(uh, 1), uh.font = bA.qa.sO(0, en), uh.fillStyle = bB.ni, uh.fillText(a6o, Math.floor(eu + i / 2), Math.floor(ew + j / 2 + .1 * en))
		}(eu, ew + a6z + bc.gap, aFK, aFL, L(37))
	}
}

function cR() {
	var a0z = 0;
	this.dd = function() {
		aY.dd(), a0z = 0
	}, this.setState = function(aFh) {
		a0z = aFh
	}, this.a18 = function() {
		return a0z
	}, this.aFi = function() {
		this.setState(8), t.x()
	}, this.a1z = function(e) {
		if (!bS.wS) return !1;
		if (!(bf.eM < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aFj()) return !0;
				if ("Enter" === e.key) {
					if (0 === a0z) return !0;
					if (7 === a0z) return !0
				}
			}
			return !1
		}
	}, this.aFk = function() {
		bZ.resize()
	}, this.aFj = function() {
		return !!bZ.rr()
	}, this.h0 = function(eu, ew) {
		!bS.wS || bZ.h0(eu, ew) || 6 === a0z && aZ.h0(eu, ew) || bY.h0(eu, ew) || aT.h0(eu, ew)
	}, this.a1R = function(eu, ew) {
		!aT.a9F && aY.a1R(eu, ew, !0) || aT.a1R(eu, ew)
	}, this.click = function(eu, ew) {
		aT.a1q()
	}, this.a1U = function(eu, ew, deltaY) {}, this.aFl = function() {
		aY.a9M(), bf.dl = !0
	}, this.ug = function() {
		8 !== a0z && 10 !== a0z && (uh.imageSmoothingEnabled = !0, this.y1(), 0 !== a0z && (aT.ug(), aO.ug(), this.aFm(), bY.ug()), 0 !== a0z && 6 === a0z && aZ.ug(), bZ.ug(), t.ug())
	}, this.y1 = function() {
		var aFo, aFn;
		if (__fx.makeMainMenuTransparent) uh.clearRect(0, 0, h.i, h.j);
		else bS.wS ? (aFn = h.i / bS.ey, aFo = h.j / bS.ez, uh.setTransform(aFn = aFo < aFn ? aFn : aFo, 0, 0, aFn, Math.floor((h.i - aFn * bS.ey) / 2), Math.floor((h.j - aFn * bS.ez) / 2)), uh.drawImage(bS.wU, 0, 0), uh.setTransform(1, 0, 0, 1,
			0, 0), uh.fillStyle = bB.nd) : uh.fillStyle = bB.nZ, uh.fillRect(0, 0, h.i, h.j)
	}, this.aFm = function() {
		var ew = Math.floor(.3 * h.j),
			canvas = ab.aFp("territorial.io"),
			ho = (ho = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : ho,
			eu = (uh.globalAlpha = .15, uh.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - ho * canvas.width))),
			eu = Math.floor(eu / ho),
			ew = Math.floor(ew - .5 * canvas.height * ho),
			ew = Math.floor(ew / ho);
		uh.setTransform(ho, 0, 0, ho, eu, ew), uh.drawImage(canvas, eu, ew), uh.setTransform(1, 0, 0, 1, 0, 0), uh.globalAlpha = 1, uh.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aD5 = 0;
	var aFr, aFs, aFt, aFu, aFv, aFw = this.aFq = 0;

	function aFz() {
		aFu = aFv = null, aFw = 0
	}
	this.dd = function(rf, aD2, aD3) {
		t.x(), bn.uA(), aa.setState(10), aFu = rf, aFv = aD2, aFw = aD3, this.aD5 = rf.aD5, this.aFq = aD3, aFr = 0, aFs = bf.eM + 4500, b0.y.a1D = rf.a1D, b0.y.a16 === rf.a1D ? (console.log("direct pass"), aFt = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a16, 3247), aFt = 2, b0.y.aFX(rf.a1D, 5) && b0.p3.aFx()), uh.imageSmoothingEnabled = !0, aa.y1();
		aD2 = ab.aFp("loading"), aD3 = (a0.a1.hw() ? .396 : .25) * h.hx / aD2.width;
		uh.setTransform(aD3, 0, 0, aD3, Math.floor((h.i - aD3 * aD2.width) / 2), Math.floor((h.j - aD3 * aD2.height) / 2)), uh.imageSmoothingEnabled = !1, uh.drawImage(aD2, 0, 0), uh.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mS = function() {
		0 < aFt && bf.eM > aFs && (aFt--, aFs += 4500, 0 === bf.aG0) && 0 === bf.k7() && b0.y.aFX(b0.y.a1D, 5)
	}, this.aG1 = function() {
		return 10 === aa.a18() && (bn.aCT.aD6(aFu, aFv, aFw), aFz(), !0)
	}, this.aG2 = function() {
		10 === aa.a18() && 2 <= ++aFr && (bn.aCT.aD6(aFu, aFv, aFw), aFz())
	}
}

function cS() {
	var aG4, canvas, a0I, aG5;

	function aGB(e8, name, aGC, qH) {
		a0I[e8] = name, canvas[e8] = new Image, canvas[e8].onload = function() {
			! function(e8, aGC) {
				var a3j, a3k = null;
				7 === aGC ? a3j = bA.a2C.a3m : 8 === aGC ? (a3j = bA.a2C.a3p, a3k = .1) : 3 === aGC ? (a3j = bA.a2C.a3n, a3k = .06) : 5 === aGC ? a3j = bA.a2C.a3q : 6 === aGC ? a3j = bA.a2C.a3l : 4 === aGC && (a3j = bA.a2C.a3r);
				canvas[e8] = bA.a2C.a3i(canvas[e8], a3j, a3k)
			}(e8, aGC), aGE()
		}, canvas[e8].onerror = function(e) {
			console.error("Error loading image at index", e8, "Error:", e), aGE()
		}, canvas[e8].src = "data:image/png;base64," + qH
	}

	function aGE() {
		aG4--, aG8()
	}

	function aG8() {
		0 === aG4 && (aG4 = -1, aGA(), bf.dl = !0, canvas[7] = aG5, canvas[8] = aG5, canvas[9] = aG5, canvas[10] = aG5, 5 === t.so) && t.a4x().aGG.resize()
	}

	function aGA() {
		aL.a59(), bY.aCK([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wX = new yS, aj.wX.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aG4 = 23, canvas = new Array(aG4), a0I = new Array(aG4), (aG5 = document.createElement("canvas")).width = 1;
			for (var aB = aG4 - (aG5.height = 1); 0 <= aB; aB--) canvas[aB] = aG5;
			aGA(), aGB(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGB(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGB(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGB(3, "orders", 6,
					"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"
					), aGB(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGB(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGB(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGB(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGB(8,
					"googleplay", 3,
					"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"
					), aGB(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGB(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGB(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGB(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGB(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGB(14, "bestPlayer", 5,
					"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"
					), aGB(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGB(16, "apple", 3,
					"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"
					), aGB(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGB(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGB(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGB(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGB(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGB(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e8) {
		return canvas[e8]
	}, this.aFp = function(name) {
		for (var aB = a0I.length - 1; 0 <= aB; aB--)
			if (a0I[aB] === name) return canvas[aB];
		return aG5
	}, this.tG = function() {
		return aG4 <= 0
	}, this.aG7 = function() {
		aG4 = 0, aG8()
	}
}

function cT() {
	var aGJ, aGK, aGL, aGM, aGN, aGO, aGP, aGQ, aGR, aGS, aGH = [
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
		aGI = [
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

	function aGY(jR, nQ) {
		for (var aB = jR; aB < nQ; aB++) aGJ[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGK[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGL[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aGX(jR, nQ) {
		for (var colorsData = aD.data.colorsData, aB = jR; aB < nQ; aB++) {
			var fF = colorsData[aB];
			aGJ[aB] = 4 * (fF >> 12), aGK[aB] = 4 * (fF >> 6 & 63), aGL[aB] = 4 * (63 & fF)
		}
	}

	function aGj(eR, aGl) {
		aBh[eR] = 0, aBh[eR + 1] = 0, aBh[eR + 2] = aGl, aBh[eR + 3] = 0, aGm(eR)
	}

	function aGm(eR) {
		var eu;
		bb.nY || (eu = ac.y2(eR), eR = ac.y3(eR), bb.nY = eu >= ba.aBg[0] && eu <= ba.aBg[2] && eR >= ba.aBg[1] && eR <= ba.aBg[3])
	}
	this.ep = new Int32Array(4), this.de = function() {
		var ep = this.ep;
		ep[0] = -4 * bS.ey, ep[1] = 4, ep[2] = -ep[0], ep[3] = -ep[1]
	}, this.dd = function() {
		if (aGJ = new Uint8Array(aD.ek), aGK = new Uint8Array(aD.ek), aGL = new Uint8Array(aD.ek), aGM = new Uint8Array(aD.ek), aGN = new Uint8Array(aD.ek), aGO = new Uint8Array(aD.ek), aGP = new Uint8Array(aD.ek), aGQ = new Uint8Array(aD.ek),
			aGR = new Uint8Array(aD.ek), aGS = new Uint8Array(aD.ek), this.a8D = new Uint8Array(aD.ek), aD.hh)
			for (var aAM = bg.aAM, aB = aD.ek - 1; 0 <= aB; aB--) {
				var f8 = aAM[aB],
					l3 = bL.du((aGI[f8][3] + 1) * ay.random(), ay.value(100));
				aGJ[aB] = aGH[f8][0] + l3 * aGI[f8][0], aGK[aB] = aGH[f8][1] + l3 * aGI[f8][1], aGL[aB] = aGH[f8][2] + l3 * aGI[f8][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aGX(0, aD.kA), aGY(aD.kA, aD.ek)) : aGY(0, aD.ek) : aGX(0, aD.ek);
		! function() {
			var aB, eq;
			for (aB = aD.ek - 1; 0 <= aB; aB--) eq = bL.du(aGJ[aB] + aGK[aB] + aGL[aB], 3), aGJ[aB] += aGe(eq - aGJ[aB], 2), aGK[aB] += aGe(eq - aGK[aB], 2), aGL[aB] += aGe(eq - aGL[aB], 2), aGJ[aB] -= aGJ[aB] % 4, aGK[aB] -= aGK[aB] % 4, aGL[
				aB] -= aGL[aB] % 4
		}(),
		function() {
			for (var aB = aD.ek - 1; 0 <= aB; aB--) aGJ[aB] += bL.du(aB, 128), aGK[aB] += bL.du(aB % 128, 32), aGL[aB] += bL.du(aB % 32, 8), aGM[aB] = aB % 8
		}(), this.aGb(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGN[aB] = aGJ[aB] < 32 ? aGJ[aB] + 32 : aGJ[aB] - 32, aGO[aB] = aGK[aB] < 32 ? aGK[aB] + 32 : aGK[aB] - 32, aGP[aB] = aGL[aB] < 32 ? aGL[aB] + 32 : aGL[aB] - 32
			}(),
			function() {
				for (var aB = aD.ek - 1; 0 <= aB; aB--) aGQ[aB] = 235 < aGJ[aB] ? aGJ[aB] - 20 : aGJ[aB] + 20, aGR[aB] = 235 < aGK[aB] ? aGK[aB] - 20 : aGK[aB] + 20, aGS[aB] = 235 < aGL[aB] ? aGL[aB] - 20 : aGL[aB] + 20
			}()
	}, this.a76 = function(player) {
		var g = bO.fM;
		return g[0] = aGJ[player], g[1] = aGK[player], g[2] = aGL[player], g
	}, this.aGb = function() {
		for (var aB = aD.ek - 1; 0 <= aB; aB--) this.a8D[aB] = aGJ[aB] + aGK[aB] + aGL[aB] < 280 ? 0 : 1
	}, this.y2 = function(eR) {
		return bL.du(eR, 4) % bS.ey
	}, this.y3 = function(eR) {
		return bL.du(eR, 4 * bS.ey)
	}, this.xa = function(eu, ew) {
		return Math.floor(4 * (ew * bS.ey + eu))
	}, this.xq = function(eR) {
		var ep = this.ep;
		return this.aGf(eR + ep[0]) || this.aGf(eR + ep[1]) || this.aGf(eR + ep[2]) || this.aGf(eR + ep[3])
	}, this.fC = function(eR) {
		var ep = this.ep;
		return this.es(eR + ep[0]) || this.es(eR + ep[1]) || this.es(eR + ep[2]) || this.es(eR + ep[3])
	}, this.xo = function(eR, player) {
		var ep = this.ep;
		return this.aGg(eR + ep[0], player) || this.aGg(eR + ep[1], player) || this.aGg(eR + ep[2], player) || this.aGg(eR + ep[3], player)
	}, this.gN = function(eR) {
		return 208 <= aBh[eR + 3]
	}, this.xw = function(player, eR) {
		return this.gN(eR) && this.xz(player, eR)
	}, this.xz = function(player, eR) {
		return player === this.ef(eR)
	}, this.aGh = function(eR) {
		return 208 <= aBh[eR + 3] && aBh[eR + 3] < 224
	}, this.jM = function(eR) {
		return 224 <= aBh[eR + 3] && aBh[eR + 3] < 248
	}, this.xp = function(eR) {
		for (var ep = this.ep, aB = 3; 0 <= aB; aB--)
			if (this.i1(eR + ep[aB])) return !0;
		return !1
	}, this.ei = function(eR) {
		return this.gN(eR) || this.ee(eR)
	}, this.i1 = function(eR) {
		return 0 === aBh[eR + 3] && 2 === aBh[eR + 2]
	}, this.ee = function(eR) {
		return 0 === aBh[eR + 3] && 1 === aBh[eR + 2]
	}, this.wf = function(eR) {
		return 0 === aBh[eR + 3] && 3 === aBh[eR + 2]
	}, this.es = function(eR) {
		return 0 === aBh[eR + 3] && 5 === aBh[eR + 2]
	}, this.aGf = function(eR) {
		return 0 === aBh[eR + 3] && 3 <= aBh[eR + 2]
	}, this.eV = function(eR) {
		return (aBh[eR] >> 1 << 8) + aBh[eR + 1]
	}, this.aGi = function(eR) {
		return 1 & aBh[eR]
	}, this.aGg = function(eR, player) {
		return this.ee(eR) || this.gN(eR) && player !== this.ef(eR)
	}, this.ef = function(eR) {
		return aBh[eR] % 4 * 128 + aBh[eR + 1] % 4 * 32 + aBh[eR + 2] % 4 * 8 + aBh[eR + 3] % 8
	}, this.xx = function(eR) {
		aGj(eR, 1)
	}, this.aGk = function(eR) {
		aGj(eR, 2)
	}, this.xb = function(eR, player) {
		aBh[eR] = aGJ[player], aBh[eR + 1] = aGK[player], aBh[eR + 2] = aGL[player], aBh[eR + 3] = 208 + aGM[player], aGm(eR)
	}, this.gI = function(eR, player) {
		aBh[eR] = aGN[player], aBh[eR + 1] = aGO[player], aBh[eR + 2] = aGP[player], aBh[eR + 3] = 224 + aGM[player], aGm(eR)
	}, this.jN = function(eR, player) {
		aBh[eR] = aGQ[player], aBh[eR + 1] = aGR[player], aBh[eR + 2] = aGS[player], aBh[eR + 3] = 248 + aGM[player], aGm(eR)
	}
}

function cs() {
	var aGn = 0,
		aGp = new Uint16Array(64);

	function aGr(a5D) {
		aGn -= 2;
		for (var aB = a5D; aB < aGn; aB += 2) aGp[aB] = aGp[aB + 2], aGp[aB + 1] = aGp[aB + 3]
	}
	this.dd = function() {
		aGn = 0
	}, this.j3 = function() {
		var aB, jJ, iN;
		if (0 !== aGn)
			if (0 === ag.mi[aD.eX]) aGn = 0;
			else if (0 === ad.fu(aD.eX)) aGn = 0;
		else
			for (aB = aGn - 2; 0 <= aB; aB -= 2)(jJ = aGp[aB]) < aD.ek && 0 === ag.mi[jJ] ? aGr(aB) : (iN = aGp[aB + 1], (jJ >= aD.ek && bs.aGs(aD.eX) || jJ < aD.ek && bs.aGt(aD.eX, jJ)) && (b8.hD.hK(iN, jJ), aGr(aB)))
	}, this.hL = function(jJ, iN) {
		! function(jJ, iN) {
			for (var aB = 0; aB < aGn; aB += 2)
				if (aGp[aB] === jJ) return aGp[aB + 1] = Math.min(aGp[aB + 1] + iN, 1023), 1;
			return
		}(jJ, iN) && 64 !== aGn && (aGp[aGn] = jJ, aGp[aGn + 1] = iN, aGn += 2)
	}
}

function cU() {
	function aH0(player) {
		var dt;
		bA.g9.a3L(player) && (dt = ag.gp[player] - ag.a3P[player] + ad.aH2(player), bd.gD(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.gp[player] = 0, ag.a3P[player] = 0
	}

	function aH9() {
		aX.show(!1, !1, !1, !0), aW.aAp(), bR.zi.a0S()
	}

	function aGx(player, aH8) {
		for (var aB = aH8.length - 1; 0 <= aB; aB--) ad.aHB(aH8[aB], player)
	}

	function aGz(player) {
		for (var ie = ag.ie, ig = ag.ig, ih = ag.ih, ii = ag.ii, n8 = ie[player], n9 = ih[player], ey = bS.ey, gb = ag.gb, eu = ig[player]; n8 <= eu; eu--)
			for (var ew = ii[player]; n9 <= ew; ew--) {
				var gL = 4 * (ew * ey + eu);
				ac.xw(player, gL) && (ac.xx(gL), gb[player]--)
			}
		ig[player] = ii[player] = 0, ie[player] = ih[player] = Math.max(ey, bS.ez)
	}
	this.dm = function(gL) {
		var player, dt = ag.gb[gL];
		bN.y.ps[gL] ? dt && (aGx(player = gL, ad.aGy(player)), aGz(player), aF.gB(player), ad.clear(player), aH0(player), function(player) {
			ag.xW[player] = 0, ag.gF[player] = [], ag.gT[player] = [], ag.gU[player] = [], ag.fD[player] = []
		}(player)) : !dt && ag.gF[gL].length || this.aGw(gL)
	}, this.aGw = function(player) {
		! function(player) {
			bA.g9.jY(player) || (ag.a0W[player] = bi.a0m.aH7(), aD.zz++);
			var aH8 = ad.aGy(player);
			0 === aH8.length ? bA.g9.a3I(player) && aH9() : (aGx(player, aH8), function(player, aH8) {
				var aHD = aH8[function(aH8) {
					var aB, e8 = 0;
					for (aB = aH8.length - 1; 1 <= aB; aB--) ag.gb[aH8[aB]] > ag.gb[aH8[e8]] && (e8 = aB);
					return e8
				}(aH8)];
				9 === aD.kS && (1 === bg.el[player] ? ay.k2(8) && az.aHE(aHD) : aE.hW[player] && (aN.a6c(765, 0), aN.yP(280, L(132, [ag.yQ[aHD], ag.yQ[player]]), 765, aHD, bB.nZ, bB.or, -1, !0)));
				if (bA.g9.a3I(player)) aH9(), aN.a09(aHD, 1);
				else {
					for (var aB = aH8.length - 1; 0 <= aB; aB--)
						if (bA.g9.a3L(aH8[aB]) && (bd.me[4 - bA.g9.jY(player)]++, bA.g9.a3I(aH8[aB]))) return aN.a09(player, 0);
					bA.g9.jY(player) || aN.a6M(0, player, aHD)
				}
			}(player, aH8))
		}(player), aGz(player), aH0(player),
			function(player) {
				ag.mi[player] = 0, ag.gF[player] = null, ag.gT[player] = null, ag.gU[player] = null, ag.fD[player] = null
			}(player), aF.gB(player), ad.clear(player), bN.aH5.aH6(player)
	}
}

function cx() {
	var input;

	function aHF(e) {
		(e = e.target.files) && 0 < e.length && b6.aHI(e[0])
	}

	function aHM(e) {
		var f8 = new Image;
		f8.onload = aHN, f8.src = e.target.result
	}

	function aHN(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bS.aHP || j > bS.aHP || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bS.aHP + ".", a0.vI ? a0.vI.showToast(e) : alert(e)) : 20 === t.so && t.a4x().aHN(canvas)
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHF
	}, this.uA = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHG = function() {
		input.click()
	}, this.aHI = function(aHJ) {
		var g = aHJ.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHM, g.readAsDataURL(aHJ))
	}
}

function cv() {
	this.aHR = null, this.dd = function() {
		10 !== aD.kS ? this.aHR = null : this.aHR = new Uint32Array(aD.ek)
	}, this.j3 = function() {
		10 === aD.kS && this.kx()
	}, this.kx = function() {
		for (var gL, target, aB2, aHR = this.aHR, zl = al.kC, a3Q = ag.gp, aB = al.kB - 1; 0 <= aB; aB--)(gL = zl[aB]) >= aD.kA || (target = Math.max(bL.du(a3Q[gL], 4), 2048), aB2 = Math.max(ae.aB3(gL), 100), aHR[gL] += bL.du(aB2 * target, 1e4),
			aHR[gL] > target && (aHR[gL] = target))
	}, this.a3W = function(player, hW) {
		return hW > this.aHR[player] ? (hW = this.aHR[player], this.aHR[player] = 0) : this.aHR[player] -= hW, hW
	}
}

function dW() {
	function aHT(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aHb, g.readAsText(e))
	}

	function aHb(e) {
		var aHf;
		aD.zx || (e = JSON.parse(e.target.result), aHf = aD.data = new a4N, aHg(e, aHf, "mapType", 0, 2), aHg(e, aHf, "mapProceduralIndex", 0, 255), aHg(e, aHf, "mapRealisticIndex", 0, 255), aHg(e, aHf, "mapSeed", 0, 16383), function(aHe, aHf, gM,
				max) {
				aHe = aHe[gM];
				aHf[gM] = aHm(aHe) ? aHe.slice(0, max) : aHf[gM]
			}(e, aHf, "mapName", 20), function(aHe, aHf, gM) {
				var aHO;
				2 === aHf.mapType && (!aHm(aHe = aHe[gM]) || aHe.length <= 20 ? aHf.mapType = 0 : ((aHO = new Image).onload = function() {
					b9.aHn.aHo(aHO, 1), aHO.onload = null, aHO = null
				}, aHO.src = aHe))
			}(e, aHf, "canvas"), aHg(e, aHf, "passableWater", 0, 1), aHg(e, aHf, "passableMountains", 0, 1), aHg(e, aHf, "playerCount", 1, 512), aHg(e, aHf, "humanCount", 1, 1), aHg(e, aHf, "selectedPlayer", 0, 0), aHg(e, aHf, "gameMode", 0, 1),
			aHg(e, aHf, "playerMode", 0, 0), aHg(e, aHf, "battleRoyaleMode", 0, 0), aHg(e, aHf, "numberTeams", 0, 8), aHg(e, aHf, "isZombieMode", 0, 0), aHg(e, aHf, "isContest", 0, 0), aHg(e, aHf, "isReplay", 0, 0), aHj(e, aHf, "elo", 16, 2,
				16383), aHg(e, aHf, "colorsType", 0, 1), aHg(e, aHf, "colorsPersonalized", 0, 1), aHj(e, aHf, "colorsData", 32, 512, 262143), aHg(e, aHf, "selectableColor", 0, 1), aHj(e, aHf, "teamPlayerCount", 16, 9, 512), aHg(e, aHf,
				"neutralBots", 0, 1), aHg(e, aHf, "botDifficultyType", 0, 3), aHg(e, aHf, "botDifficultyValue", 0, 15), aHj(e, aHf, "botDifficultyTeam", 8, 9, 15), aHj(e, aHf, "botDifficultyData", 8, 512, 15), aHg(e, aHf, "spawningType", 0, 2),
			aHg(e, aHf, "spawningSeed", 0, 16383), aHj(e, aHf, "spawningData", 16, 1024, 4095), aHg(e, aHf, "selectableSpawn", 0, 1), aHg(e, aHf, "playerNamesType", 0, 2),
			function(aHe, aHf, gM, size, max) {
				var a2X = aHe[gM];
				if (Array.isArray(a2X)) {
					for (var a2Y = new Array(size), en = Math.min(a2X.length, size), aB = 0; aB < en; aB++) a2Y[aB] = aHm(a2X[aB]) ? a2X[aB].slice(0, max) : "";
					aHf[gM] = a2Y
				}
			}(e, aHf, "playerNamesData", 512, 20), aHg(e, aHf, "selectableName", 0, 1), aHg(e, aHf, "aIncomeType", 0, 2), aHg(e, aHf, "aIncomeValue", 0, 255), aHj(e, aHf, "aIncomeData", 8, 512, 255), aHg(e, aHf, "tIncomeType", 0, 2), aHg(e, aHf,
				"tIncomeValue", 0, 255), aHj(e, aHf, "tIncomeData", 8, 512, 255), aHg(e, aHf, "iIncomeType", 0, 2), aHg(e, aHf, "iIncomeValue", 0, 255), aHj(e, aHf, "iIncomeData", 8, 512, 255), aHg(e, aHf, "sResourcesType", 0, 2), aHg(e, aHf,
				"sResourcesValue", 0, 2047), aHj(e, aHf, "sResourcesData", 16, 512, 2047), t.x(), t.y.aHd[0] = 0, t.u(19))
	}

	function aHg(aHe, aHf, gM, min, max) {
		aHe = aHe[gM];
		aHf[gM] = "number" == typeof aHe && min <= aHe && aHe <= max ? Math.floor(aHe) : aHf[gM]
	}

	function aHm(qH) {
		return "string" == typeof qH
	}

	function aHj(aHe, aHf, gM, aHp, size, max) {
		var a2X = aHe[gM];
		if (Array.isArray(a2X)) {
			for (var a2Y = new(8 === aHp ? Uint8Array : 16 === aHp ? Uint16Array : Uint32Array)(size), en = Math.min(a2X.length, size), aB = 0; aB < en; aB++) a2Y[aB] = bL.hv(a2X[aB], 0, max);
			aHf[gM] = a2Y
		}
	}
	this.aHS = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aHT, input.click()
	}, this.aHU = function() {
		for (var aHX, aCH, a4v = aD.data, keys = Object.keys(a4v), aHV = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a4v[key] instanceof Uint8Array || a4v[key] instanceof Uint16Array || a4v[key] instanceof Uint32Array ? aHV[key] = Array.from(a4v[key]) : aHV[key] = a4v[key]
		}
		aHV.canvas = 2 === aHV.mapType && aHV.canvas ? aHV.canvas.toDataURL() : null, aHX = aHV, aHX = JSON.stringify(aHX, null, 2), aHX = new Blob([aHX], {
			type: "application/json"
		}), (aCH = document.createElement("a")).href = URL.createObjectURL(aHX), aCH.download = "tt_scenario.json", aCH.click()
	}
}

function cY() {
	var aHq, aHr, size, jJ, hW, aHs;

	function aHt(player) {
		return player < aD.kA ? aHq * player : aHq * aD.kA + aHr * (player - aD.kA)
	}
	this.dd = function() {
		aHq = aD.kA < 16 ? 12 : 8, aHr = 4;
		var en = aHt(aD.ek);
		size = new Uint8Array(aD.ek), jJ = new Uint16Array(en), hW = new Uint32Array(en), aHs = new Uint8Array(en)
	}, this.q8 = function(a7i, aHu) {
		var aHv = this.gq(a7i, aHu),
			aHu = (this.go(a7i, aHu, 0), bA.g9.gC(a7i, aHv));
		bd.gD(a7i, aHv - aHu, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aHB = function(player, aHu) {
		var aHy, aHu = function(player, aHu) {
			var aB, l3 = aHt(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jJ[l3 + aB] === aHu) return aB;
			return size[player]
		}(player, aHu);
		aHu !== size[player] && (aHy = hW[aHt(player) + aHu], this.gE(player, aHu), this.jG(player, aHy, aD.ek))
	}, this.jW = function(player, aHu) {
		for (var l3 = aHt(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHu) return !0;
		return !1
	}, this.jo = function(player) {
		return player < aD.kA ? size[player] < aHq : size[player] < aHr
	}, this.fu = function(player) {
		return size[player]
	}, this.fz = function(player, aB) {
		return jJ[aHt(player) + aB]
	}, this.g0 = function(player, aB) {
		return hW[aHt(player) + aB]
	}, this.gq = function(player, aHu) {
		for (var l3 = aHt(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHu) return hW[l3 + aB];
		return 0
	}, this.aH2 = function(player) {
		for (var l3 = aHt(player), fF = 0, aB = size[player] - 1; 0 <= aB; aB--) fF += hW[l3 + aB];
		return fF
	}, this.go = function(player, aHu, aHy) {
		for (var l3 = aHt(player), aB = size[player] - 1; 0 <= aB; aB--) jJ[l3 + aB] === aHu && (hW[l3 + aB] = aHy)
	}, this.gZ = function(player, aB, aHy) {
		hW[aHt(player) + aB] = Math.max(aHy, 0)
	}, this.ga = function(player, aB) {
		aHs[aHt(player) + aB] = 0
	}, this.g1 = function(player, aB) {
		return aHs[aHt(player) + aB]
	}, this.jG = function(player, aHy, aHu) {
		bA.g9.a3L(aHu) && bd.me[6 - bA.g9.jY(player)]++;
		for (var l3 = aHt(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jJ[l3 + aB] === aHu) return hW[l3 + aB] += aHy, void(hW[l3 + aB] = hW[l3 + aB] > aD.a3S ? aD.a3S : hW[l3 + aB]);
		jJ[l3 + size[player]] = aHu, hW[l3 + size[player]] = aHy, aHs[l3 + size[player]] = 1, size[player]++, player < aD.kA && (aHu === aD.eX ? aN.a09(player, 5) : player === aD.eX && af.a6O(aHu))
	}, this.gE = function(player, e8) {
		var f6, l3;
		if (0 !== size[player])
			for (l3 = aHt(player), size[player]--, f6 = e8; f6 < size[player]; f6++) jJ[l3 + f6] = jJ[l3 + f6 + 1], hW[l3 + f6] = hW[l3 + f6 + 1], aHs[l3 + f6] = aHs[l3 + f6 + 1]
	}, this.aGy = function(player) {
		for (var f6, l3, aH8 = [], aB = al.kB - 1; 0 <= aB; aB--)
			for (l3 = aHt(al.kC[aB]), f6 = size[al.kC[aB]] - 1; 0 <= f6; f6--)
				if (jJ[l3 + f6] === player) {
					aH8.push(al.kC[aB]);
					break
				} return aH8
	}
}

function cZ() {
	var aHz;

	function aI1(player) {
		var e7, jp;
		return bA.g9.jY(player) && player < aD.kA ? 0 : (e7 = aHz[bL.du((aD.ek - 1) * ag.gb[player], aD.ju)], bf.k7() < 1920 && (e7 = Math.max(bL.du(100 * (13440 - 6 * bf.k7()), 1920), e7)), jp = ae.jq(player), ag.gp[player] > jp && (e7 -= bL.du(2 *
			e7 * (ag.gp[player] - jp), jp)), Math.min(Math.max(e7, 0), 700))
	}

	function aID(nK) {
		for (var gb = ag.gb, kC = al.kC, aB = al.kB - 1; 0 <= aB; aB--) {
			var gL = kC[aB];
			bA.g9.gC(gL, bL.du(nK * gb[gL], 32))
		}
	}

	function aIA() {
		var wY = aD.eX;
		bO.fJ[0] = ag.gp[wY] - ag.a3P[wY]
	}

	function aIC(e8) {
		var wY = aD.eX;
		bd.me[e8] += ag.gp[wY] - ag.a3P[wY] - bO.fJ[0]
	}
	this.dk = function() {
		for (var en = aD.ek, aB = (aHz = new Uint16Array(en), 0); aB < en; aB++) aHz[aB] = 100 + aI0(bL.du(25600 * aB, en - 4), 9)
	}, this.dd = function() {
		0 === aD.data.iIncomeType ? this.aB3 = aI1 : 1 === aD.data.iIncomeType ? this.aB3 = function(player) {
			return bL.du(aD.data.iIncomeValue * aI1(player), 64)
		} : this.aB3 = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aI1(player), 64)
		}
	}, this.j3 = function() {
		if (bf.k7() % 10 == 9 && (function() {
				aIA();
				for (var kC = al.kC, gp = ag.gp, aB = al.kB - 1; 0 <= aB; aB--) {
					var gL = kC[aB],
						aIB = bL.du(ae.aB3(gL) * gp[gL], 1e4);
					bA.g9.gC(gL, Math.max(aIB, 1))
				}
				aIC(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aIA(), 1 === aD.data.aIncomeType)
						for (var gb = ag.gb, kC = al.kC, nK = aD.data.aIncomeValue, aB = al.kB - 1; 0 <= aB; aB--) {
							var gL = kC[aB];
							bA.g9.gC(gL, bL.du(nK * gb[gL], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gb = ag.gb, kC = al.kC, nK = aD.data.aIncomeData, aB = al.kB - 1; 0 <= aB; aB--) {
								var gL = kC[aB];
								bA.g9.gC(gL, bL.du(nK[gL] * gb[gL], 128))
							}
						}();
					aIC(18)
				}
			}(), bf.k7() % 100 == 99)) {
			if (aIA(), 0 === aD.data.tIncomeType) aID(32);
			else if (1 === aD.data.tIncomeType) aID(aD.data.tIncomeValue);
			else
				for (var gb = ag.gb, kC = al.kC, nK = aD.data.tIncomeData, aB = al.kB - 1; 0 <= aB; aB--) {
					var gL = kC[aB];
					bA.g9.gC(gL, bL.du(nK[gL] * gb[gL], 32))
				}
			aIC(8)
		}
	}, this.jq = function(player) {
		return Math.min(100 * ag.gb[player], aD.a4J)
	}, this.p6 = function(player, p7) {
		bq.pT(player, p7, bO.fK[0], 0), bA.g9.gC(p7, bO.fK[0]), bd.pU(player, p7), af.aI3(player, bO.fK[0] + bO.fK[1]), af.pV(p7, bO.fK[0]), bA.g9.mJ(player)
	}, this.aI4 = function() {
		for (var en = al.kB, zl = al.kC, l3 = 0, a3Q = ag.gp, aB = 0; aB < en; aB++) l3 += a3Q[zl[aB]];
		return l3
	}, this.aI5 = function(aI6) {
		for (var gL, en = al.kB, zl = al.kC, l3 = 0, a3Q = ag.gp, el = bg.el, aB = 0; aB < en; aB++) el[gL = zl[aB]] === aI6 && (l3 += a3Q[gL]);
		return l3
	}
}

function cb() {
	var aIH, aII, aIJ, aIK, aIL, aIM, aIN, aIO, aIP, aIQ, aIR, aIS, aIT, aIU, aIV, aIW, aIX, aIY, aIa, aIb, aCA, aIc, aId, aIk, aIl, aIZ = null,
		aIf = 0,
		aIg = !1,
		aIh = new Float32Array(4),
		aIi = 0,
		aIj = !0,
		aAB = 400,
		aIm = 0;

	function qd() {
		aIP = Math.floor(+h.hx), aIQ = Math.floor(.5 * aIP)
	}

	function aIn() {
		var aB, aIs;
		for (uh.font = bA.qa.sO(1, 100 * aIR), aIs = 80 / Math.floor(uh.measureText(bA.rZ.zE(aD.a3S)).width), uh.font = bA.qa.sO(1, 100), aB = aD.ek - 1; 0 <= aB; aB--) aIO[aB] = 100 / Math.floor(uh.measureText(ag.yQ[aB]).width), aIN[aB] = Math.min(
			aIs, aIO[aB])
	}

	function aIt(aB) {
		return !aIm || (aB = ag.gp[aB]) < 1e6 ? 1 : aB < 1e7 ? aIh[0] : aIh[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aIr(hp) {
		aIY = !1, aIX = 1, aIV = aIW = 0, aIj && (bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1));
		for (var aIz, aJ0, aB, aJ1, fontSize, aJ2, n8 = iO / hy, n9 = iP / hy, nL = (h.i + iO) / hy, nM = (h.j + iP) / hy, aJ3 = 0 !== ag.mi[aD.eX] && !bA.g9.jY(aD.eX), f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6], (fontSize = Math.floor(aIU * hy *
			aIt(aB) * aIN[aB] * aIL[aB])) < aIT || aIP <= fontSize || aIJ[aB] + aIL[aB] > n8 && aIJ[aB] < nL && aIK[aB] + aIM[aB] > n9 && aIK[aB] < nM && (aIz = Math.floor(h.i * (aIJ[aB] + aIL[aB] / 2 - n8) / (nL - n8)), aJ0 = Math.floor(h.j * (
			aIK[aB] + aIM[aB] / 2 - n9) / (nM - n9) - .1 * fontSize), aJ1 = ac.a8D[aB], hp.font = bA.qa.sO(1 === ag.a3H[aB] ? 4 : 1, fontSize), hp.fillStyle = aJ4(fontSize, aJ1 % 2), aIm ? aJ5(hp, aB, fontSize, aIz, aJ0, aJ1) : aJ6(aB,
			fontSize, aIz, aJ0, hp), aIY = !0, 0 < aCA[aB] ? function(aIz, aJ0, fontSize, aB, hp) {
			0 === jv[aB] ? aj.rq.z5(aIb[aB]) ? (function(aIz, aJ0, fontSize, player, pI, hp) {
				for (var x5 = aJ0, ho = (hp.globalAlpha = aJE(fontSize), aIt(player) * (aIm ? aIi : aIO[player])), x4 = aIz - .5 * fontSize / ho - .9 * fontSize, f7 = 0; f7 < 2; f7++) hp.fillText(aj.rq.yx(pI), x4, x5), x4 = aIz + .5 *
					fontSize / ho + .9 * fontSize;
				hp.globalAlpha = 1
			}(aIz, aJ0, fontSize, aB, aIb[aB], hp), aJ8(aIz, aJ0, fontSize, 0, 0, hp)) : aj.rq.z7(aIb[aB]) ? (aJH(aIz, aJ0, fontSize, aIb[aB], 0, hp), aJ8(aIz, aJ0, fontSize, 0, 1, hp)) : (aJH(aIz, aJ0, fontSize, aIb[aB], 1, hp), aJ8(aIz,
				aJ0, fontSize, 1, 0, hp)) : aJH(aIz, aJ0, fontSize, aIb[aB], 0, hp)
		}(aIz, aJ0, fontSize, aB, hp) : 0 === jv[aB] && aJ8(aIz, aJ0, fontSize, 0, 0, hp), aJ3 && (0 < aCA[aB + aD.ek] || 0 < aCA[aB + 2 * aD.ek] || 0 < aCA[aB + 3 * aD.ek] || 0 < aCA[aB + 4 * aD.ek]) && function(aIz, aJ0, fontSize, aB, hp) {
			var f8, gG = -1;
			for (f8 = 4; 1 <= f8; f8--) 0 < aCA[aB + f8 * aD.ek] && gG++;
			for (f8 = 1; f8 < 5; f8++) 0 < aCA[aB + f8 * aD.ek] && (! function(aIz, aJ0, fontSize, f8, aB, aJC, dt, hp) {
				var a2l;
				if (1 === f8) {
					aB = aIb[aB + aD.ek];
					if (!aj.rq.z6(aB)) return function(aIz, aJ0, fontSize, pI, aJC, hp) {
						hp.globalAlpha = aJE(fontSize);
						aIz -= .534 * aJC * fontSize, aJC = aJ0 + 1.59 * fontSize;
						hp.font = bA.qa.sO(0, .785 * fontSize), hp.fillText(aj.rq.yx(pI), aIz, aJC), hp.globalAlpha = 1
					}(aIz, aJ0, fontSize, aB, aJC, hp);
					a2l = aj.wX.yW[aB - 1024 + aj.rq.yi]
				} else a2l = 2 === f8 ? aL.a5B()[4].canvas[+(dt < 255)] : (3 === f8 ? aL.a5B()[5] : aL.a5B()[6]).canvas[0];
				aB = aj.wX.yX, dt = .8 * fontSize / aB, f8 = aIz - .5 * dt * aB - .534 * aJC * fontSize, aIz = aJ0 + 1.4 * dt * aB;
				hp.setTransform(dt, 0, 0, dt, f8, aIz), hp.globalAlpha = aJE(fontSize), hp.drawImage(a2l, 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
			}(aIz, aJ0, fontSize, f8, aB, gG, aCA[aB + f8 * aD.ek], hp), gG -= 2)
		}(aIz, aJ0, fontSize, aB, hp), (aJ2 = aIR * fontSize) < aIT || (hp.font = bA.qa.sO(1, aJ2), aJ0 += Math.floor(.78 * fontSize), aIm ? aJ6(aB, aJ2, aIz, aJ0, hp) : aJ5(hp, aB, aJ2, aIz, aJ0, aJ1)))
	}

	function aJ6(aB, fontSize, eu, ew, hp) {
		var ___id = aB;
		var showName = aB < aD.kA || !__fx.settings.hideBotNames;
		if (showName) hp.fillText(ag.yQ[aB], eu, ew), aB < aD.kA && 2 !== ag.a3H[aB] || (aB = fontSize / aIO[aB], hp.fillRect(eu - .5 * aB, ew + bA.qa.yy * fontSize, aB, Math.max(1, .1 * fontSize)));
		aIm && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hp.fillText(__fx.utils.getDensity(___id), eu, showName ? ew + fontSize : ew)
		);
	}

	function aJ5(hp, aB, fontSize, aIz, aJ0, aJ1) {
		var ___id = aB;
		aB = bA.rZ.zE(ag.gp[aB]);
		aJ1 >> 1 & 1 ? (hp.lineWidth = .05 * fontSize, hp.strokeStyle = aJ4(fontSize, aJ1 % 2), hp.strokeText(aB, aIz, aJ0)) : (1 < aJ1 && (hp.lineWidth = .12 * fontSize, hp.strokeStyle = aJ4(fontSize, aJ1), hp.strokeText(aB, aIz, aJ0)), hp.fillText(
			aB, aIz, aJ0));
		aIm || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hp.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hp.fillText(__fx.utils.getDensity(___id), aIz, aJ0 + fontSize))
	}

	function aJ8(aIz, aJ0, fontSize, aJC, aJD, hp) {
		var a5g = .95 * fontSize / aId,
			aIz = aIz - .5 * a5g * aIc + .8 * aJC * fontSize,
			aJC = aJ0 - 1.76 * a5g * aId - (.35 - bA.qa.yy + .7) * aJD * fontSize;
		hp.setTransform(a5g, 0, 0, a5g, aIz, aJC), hp.globalAlpha = aJE(fontSize), hp.drawImage(ab.get(4), 0, 0), hp.globalAlpha = 1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJH(aIz, aJ0, fontSize, pI, aJC, hp) {
		var hj, x4, a5g;
		hp.globalAlpha = aJE(fontSize), aj.rq.z6(pI) ? (hj = aj.wX.yX, hp.setTransform(a5g = 1.1 * fontSize / hj, 0, 0, a5g, x4 = aIz - .5 * a5g * hj - .8 * aJC * fontSize, a5g = aJ0 - 1.55 * a5g * hj), hp.drawImage(aj.wX.yW[pI - 1024 + aj.rq.yi], 0,
			0), hp.setTransform(1, 0, 0, 1, 0, 0)) : (x4 = aIz - .8 * aJC * fontSize, a5g = aJ0 - (.35 - bA.qa.yy + 1) * fontSize, hp.fillText(aj.rq.yx(pI), x4, a5g)), hp.globalAlpha = 1
	}

	function aJ4(fontSize, aJ1) {
		return aIQ <= fontSize && fontSize < aIP ? bg.aJJ[aJ1] + aJE(fontSize).toFixed(3) + ")" : bg.aJK[aJ1]
	}

	function aJE(fontSize) {
		return aIQ <= fontSize && fontSize < aIP ? 1 - (fontSize - aIQ) / (aIP - aIQ) : 1
	}

	function aJT(ho, i) {
		return 1 + Math.floor(aIS * ho * i)
	}

	function aJQ(aB) {
		for (var left = aIJ[aB], f6 = aIJ[aB] - ag.ie[aB] - 1; 0 <= f6; f6--)
			if (!aJV(aB, --left, aIK[aB], aIM[aB])) {
				left++;
				break
			} var right = aIJ[aB];
		for (f6 = ag.ig[aB] - aIJ[aB] - aIL[aB]; 0 <= f6; f6--)
			if (!aJV(aB, ++right + aIL[aB] - 1, aIK[aB], aIM[aB])) {
				right--;
				break
			} var eu = Math.floor((left + right) / 2),
			top = aIK[aB];
		for (f6 = aIK[aB] - ag.ih[aB] - 1; 0 <= f6; f6--)
			if (!aJW(aB, eu, --top, aIL[aB])) {
				top++;
				break
			} var bottom = aIK[aB];
		for (f6 = ag.ii[aB] - aIK[aB] - aIM[aB]; 0 <= f6; f6--)
			if (!aJW(aB, eu, ++bottom + aIM[aB] - 1, aIL[aB])) {
				bottom--;
				break
			} var ew = Math.floor((top + bottom) / 2);
		aJN(aB, eu, ew, aIL[aB], aIM[aB]) && (aIJ[aB] = eu, aIK[aB] = ew)
	}

	function aJN(player, eu, ew, i, j) {
		eq = Math.floor(.2 * i);
		for (var eq, f8 = eu + i - 1; eu <= f8; f8--)
			if (!aJV(player, f8, ew, j)) return;
		for (f8 = ew + j - 1 - (eq = (eq = Math.floor(.25 * j)) < 1 ? 1 : eq); ew + eq <= f8; f8--)
			if (!aJW(player, eu, f8, i)) return;
		return 1
	}

	function aJV(player, eu, ew, j) {
		return ac.xw(player, 4 * (ew * bS.ey + eu)) && ac.xw(player, 4 * ((ew + j - 1) * bS.ey + eu))
	}

	function aJW(player, eu, ew, i) {
		return ac.xw(player, 4 * (ew * bS.ey + eu)) && ac.xw(player, 4 * (ew * bS.ey + eu + i - 1))
	}
	this.dd = function() {
		if (aIm = bj.eK.data[7].value || 8 === aD.kS, aAB = 0 === (aAB = bj.eK.data[11].value) ? 280 : 1 === aAB ? 187 : 112, aIY = !1, aIU = .88, aIR = .5, aIS = 1.8, aIT = 12 - 3 * bj.eK.data[9].value, aII = aIH = 0, aIJ = new Uint16Array(aD
				.ek), aIK = new Uint16Array(aD.ek), aIL = new Uint16Array(aD.ek), aIM = new Uint16Array(aD.ek), aIN = new Float32Array(aD.ek), aIO = new Float32Array(aD.ek), aIb = new Uint16Array(2 * aD.ek), aCA = new Uint8Array(5 * aD.ek), aIk =
			new Uint8Array(aD.ek), aIl = new Uint8Array(aD.ek), aIj || (aIZ = aIZ || document.createElement("canvas")), qd(), aIW = aIV = 0, aIX = 1, aIm) {
			var aB, aIs;
			for (aIn(), uh.font = bA.qa.sO(1, 100), aIs = 100 / Math.floor(uh.measureText("900 000").width), aB = aD.ek - 1; 0 <= aB; aB--) aIN[aB] = Math.min(aIs, 2 * aIO[aB]);
			aIi = aIs, aIh[0] = 100 / (aIs * Math.floor(uh.measureText("5 000 000").width)), aIh[1] = 100 / (aIs * Math.floor(uh.measureText("50 000 000").width)), aIh[2] = 100 / (aIs * Math.floor(uh.measureText("500 000 000").width)), aIh[3] =
				100 / (aIs * Math.floor(uh.measureText("1 000 000 000").width))
		} else aIn();
		! function() {
			var aB;
			for (aB = aD.ek - 1; 0 <= aB; aB--) ag.gb[aB] < 12 ? (aIJ[aB] = ag.ie[aB] + 1, aIK[aB] = ag.ih[aB] + 1, aIL[aB] = 1, aIM[aB] = 1) : (aIJ[aB] = ag.ie[aB], aIK[aB] = ag.ih[aB] + 1, aIL[aB] = 4, aIM[aB] = 2);
			if (aD.hB)
				for (aB = 0; aB < aD.kA; aB++) aIL[aB] = 0;
			aIc = ab.get(4).width, aId = ab.get(4).height
		}()
	}, this.aI3 = function(gL, a4t) {
		a4t > 18 * ag.gb[gL] ? (aIl[gL] = 6, ac.a8D[gL] = 2 + ac.a8D[gL] % 2) : (aIk[gL] = 4, (ac.a8D[gL] < 2 || 3 < ac.a8D[gL]) && (ac.a8D[gL] = 6 + ac.a8D[gL] % 2))
	}, this.pV = function(gL, a4t) {
		a4t > 6 * ag.gb[gL] ? (aIl[gL] = 6, ac.a8D[gL] = 4 + ac.a8D[gL] % 2) : (aIk[gL] = 4, (ac.a8D[gL] < 4 || 5 < ac.a8D[gL]) && (ac.a8D[gL] = 8 + ac.a8D[gL] % 2))
	}, this.resize = function() {
		qd(), aIj || aIr(aIa)
	}, this.a4F = function() {
		for (var aB = 0; aB < aD.kA; aB++) ag.ig[aB] - ag.ie[aB] != 3 || ag.ii[aB] - ag.ih[aB] != 3 ? (aIJ[aB] = ag.ie[aB] + (ag.ig[aB] !== ag.ie[aB] ? 1 : 0), aIK[aB] = ag.ih[aB], aIL[aB] = 1, aIM[aB] = 1) : (aIJ[aB] = ag.ie[aB], aIK[aB] = ag
			.ih[aB] + 1, aIL[aB] = 4, aIM[aB] = 2)
	}, this.q9 = function(player, e8, aIu) {
		! function(player, e8, aIu) {
			player += e8 * aD.ek;
			0 === e8 ? aIb[player] === aIu && 0 < aCA[player] ? aCA[player] = 0 : (aIb[player] = aIu, aCA[player] = aj.rq.z5(aIu) ? 255 : 64) : 1 === e8 ? (aCA[player] = 64, aIb[player] = aIu) : aCA[player] = aIu
		}(player, e8, aIu), 2 === aD.zx && this.mU(!0)
	}, this.ug = function() {
		aIj ? aIr(uh) : aIY && (1 !== aIX ? (uh.imageSmoothingEnabled = !0, uh.setTransform(aIX, 0, 0, aIX, 0, 0), uh.drawImage(aIZ, -aIV / aIX, -aIW / aIX), uh.setTransform(1, 0, 0, 1, 0, 0), uh.imageSmoothingEnabled = !1) : uh.drawImage(aIZ, -
			aIV, -aIW))
	}, this.a90 = function(i7, iA) {
		aIV += i7, aIW += iA
	}, this.a1R = function(i7, iA) {
		af.a90(i7, iA)
	}, this.zoom = function(a2K, lN, lO) {
		aIX *= a2K, aIV = (aIV + lN) * a2K - lN, aIW = (aIW + lO) * a2K - lO
	}, this.mU = function(bu) {
		return !aIj && !(!aIg && !bu && bf.eM < aIf + (1 === aIX && 0 === aIV && 0 === aIW && (aD.a4j() || aD.hB || 2 === aD.zx) ? 1e3 : aAB) || (aIg = !1, aIf = bf.eM, aIr(aIa), 0))
	}, this.aIx = function(aB) {
		return aIt(aB) * aIN[aB]
	}, this.aIy = function(player) {
		return aIN[player]
	}, this.j3 = function() {
		bf.k7() % 10 == 9 && (aIg = aD.a4l() && !aD.a4j()), !aD.a4j() && 4 <= ++aII && function() {
			var aB, f6, f7;
			for (aII = 0, f7 = 4; 1 <= f7; f7--)
				for (f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6] + f7 * aD.ek, 0 < aCA[aB] && aCA[aB] < 255 && aCA[aB]--;
			if (2 !== aD.zx)
				for (f6 = al.kB - 1; 0 <= f6; f6--) aB = al.kC[f6], 0 < aCA[aB] && aCA[aB] < 255 && aCA[aB]--
		}();
		var aB, f6, en = Math.floor(.1 * al.kB);
		for (en = (en = en < 8 ? 8 : en) > al.kB ? al.kB : en, aB = aIH + en - 1; aIH <= aB; aB--) f6 = aB % al.kB, ! function(aB) {
			var ho = aIt(aB) * aIN[aB];
			0 < aIL[aB] && aJN(aB, aIJ[aB], aIK[aB], aIL[aB], aIM[aB]) ? ! function(aB) {
				for (var eu, ew, i, j, eR = !1, f7 = 0; f7 < 8; f7++) {
					if (i = aIL[aB] + 2, j = aIM[aB] + 2, i > ag.ig[aB] - ag.ie[aB] + 1 || j > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					if (eu = aIJ[aB] - 1, ew = aIK[aB] - 1, !aJN(aB, eu, ew, i, j)) return eR;
					aIJ[aB] = eu, aIK[aB] = ew, aIL[aB] = i, aIM[aB] = j, eR = !0
				}
				return eR
			}(aB) && function(aB, ho) {
				for (var eu, ew, i, j, eR = !1, aCJ = aIL[aB], nK = 1 + Math.floor(.02 * aCJ), f7 = 1; f7 < 5; f7++) {
					if ((i = aCJ + f7 * nK) > ag.ig[aB] - ag.ie[aB] + 1) return eR;
					if ((j = aJT(ho, i)) > ag.ii[aB] - ag.ih[aB] + 1) return eR;
					eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJN(aB, eu, ew, i, j) && (aIJ[aB] = eu, aIK[aB] = ew, aIL[
						aB] = i, aIM[aB] = j, eR = !0)
				}
				return eR
			}(aB, ho) && aJQ(aB) : ! function(aB, ho) {
				var j, eu = aIJ[aB] + 1,
					ew = aIK[aB] + 1,
					i = aIL[aB] - 2;
				for (;;) {
					if (i < 1) {
						aIL[aB] = 0;
						break
					}
					if (j = aJT(ho, i), aJN(aB, eu, ew, i, j)) return aIJ[aB] = eu, aIK[aB] = ew, aIL[aB] = i, aIM[aB] = j, 1;
					eu++, ew++, i -= 2
				}
				return
			}(aB, ho) ? function(aB, ho) {
				var eu, ew, i, j, f7, nQ, jR = ag.ig[aB] - ag.ie[aB] + 1,
					aJU = Math.floor(.02 * jR);
				for (nQ = -6 * (aJU = aJU < 1 ? 1 : aJU), f7 = jR; nQ <= f7; f7 -= aJU)
					if (j = aJT(ho, i = 0 < f7 ? f7 : 1), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - i)), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - j)), aJN(aB, eu, ew, i, j))
						return aIJ[aB] = eu, aIK[aB] = ew, aIL[aB] = i, aIM[aB] = j
			}(aB, ho) : aJQ(aB)
		}(al.kC[f6]);
		aIH = (aIH += en) % al.kB
	}, this.mP = function() {
		var aB, gL, z3, z4;
		if (bf.k7() % 4 == 1)
			for (aB = al.kB - 1; 0 <= aB; aB--) gL = al.kC[aB], ac.a8D[gL] < 2 || ((z3 = Math.max(aIk[gL] - 1, 0)) === (z4 = Math.max(aIl[gL] - 1, 0)) ? 0 === z3 && (ac.a8D[gL] %= 2) : 0 === z4 && ac.a8D[gL] < 6 && (ac.a8D[gL] += 4), aIk[gL] =
				z3, aIl[gL] = z4)
	}, this.a6O = function(player) {
		var aB = player + 2 * aD.ek,
			dt = aCA[aB];
		return 0 < dt && (aN.a04(50, player), aCA[aB] = 0, 255 === dt)
	}, this.a5Q = function(player) {
		return 255 === aCA[player + 2 * aD.ek]
	}
}

function cd() {
	var aJX, aJY, aJZ;
	this.dd = function() {
		aJX =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJY =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aJZ = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6f = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJa = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aJX.length - 1; 0 <= aB; aB--)
			for (var f6 = a6f.length - 1; 0 <= f6; f6--) aJX[aB] = aJX[aB].replace(a6f[f6], aJa[f6]);
		if (__fx.settings.realisticNames) aJX = realisticNames;
	}, this.a4V = function() {
		var en = aD.kA,
			yQ = ag.yQ,
			a0b = ag.a0b,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < en)
			for (var aB = 0; aB < en; aB++) yQ[aB] = a0b[aB] = "Player " + ay.jS(1e3);
		else
			for (aB = 0; aB < en; aB++) yQ[aB] = a0b[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kS) {
			for (var e7 = ay.random(), aJg = aJZ, aJh = aJY, hW = aE.hW, en = aJg.length, l3 = aD.data.teamPlayerCount[7], yQ = ag.yQ, a0b = ag.a0b, aB = l3 - 1; aB >= aD.kA; aB--) yQ[aB] = a0b[aB] = aJg[(aB + e7) % en];
			for (en = aJh.length - 1, aB = l3; aB < aD.ek; aB++) yQ[aB] = a0b[aB] = aJh[hW[aB] ? en : aB % en]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var en = aD.ek, yQ = ag.yQ, a0b = ag.a0b, playerNamesData = aD.data.playerNamesData, aB = aD.kA; aB < en; aB++) yQ[aB] = a0b[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var yQ = ag.yQ, a0b = ag.a0b, aB = aD.kA; aB < aD.ek; aB++) yQ[aB] = a0b[aB] = "Bot " + ay.jS(1e3)
		} : function() {
			for (var aJi = aJX, en = aJi.length, e7 = ay.random(), yQ = ag.yQ, a0b = ag.a0b, aB = aD.kA; aB < aD.ek; aB++) yQ[aB] = a0b[aB] = aJi[(aB + e7) % en]
		})()
	}
}

function cw() {
	this.aJj = [], this.aJk = [], this.dd = function() {
		this.aJj = [], this.aJk = []
	}, this.j3 = function() {
		0 <= this.aJj.length && this.aJl(this.aJj), 0 <= this.aJk.length && this.aJl(this.aJk)
	}, this.aJl = function(g) {
		for (var f7 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eM--, g[aB].eM <= 0) {
				f7 = aB;
				break
			} for (aB = f7; 0 <= aB; aB--) g.shift()
	}, this.a5J = function(id, zl, aJm) {
		return this.f9(this.aJj, id, zl, aJm)
	}, this.aJn = function(id, zl, aJm) {
		return this.f9(this.aJk, id, zl, aJm)
	}, this.f9 = function(g, id, zl, aJm) {
		return ! function(g, id, zl) {
			var aB, hf;
			for (aB = zl.length - 1; 0 <= aB; aB--)
				for (hf = g.length - 1; 0 <= hf; hf--)
					if (g[hf].player === zl[aB] && id === g[hf].id) return 1;
			return
		}(g, id, zl) && (aJm && function(g, id, zl) {
			var aB;
			for (aB = zl.length - 1; 0 <= aB; aB--) g.push({
				player: zl[aB],
				id: id,
				eM: 384
			})
		}(g, id, zl), !0)
	}
}

function cc() {
	this.a0b = new Array(aD.ek), this.yQ = new Array(aD.ek), this.a3H = new Uint8Array(aD.ek), this.mi = new Uint8Array(aD.ek), this.ie = new Uint16Array(aD.ek), this.ih = new Uint16Array(aD.ek), this.ig = new Uint16Array(aD.ek), this.ii =
		new Uint16Array(aD.ek), this.gb = new Uint32Array(aD.ek), this.xW = new Uint32Array(aD.ek), this.gp = new Uint32Array(aD.ek), this.gF = null, this.gT = null, this.gU = null, this.fD = null, this.pz = new Uint16Array(aD.ek), this.jC =
		new Uint16Array(aD.ek), this.jD = new Uint16Array(aD.ek), this.a0W = new Uint16Array(aD.ek), this.a0U = new Uint8Array(aD.ek), this.a3P = new Uint16Array(aD.ek), this.dd = function() {
			this.a0b.fill(""), this.yQ.fill(""), this.a3H.fill(0), this.mi.fill(0), this.ie.fill(0), this.ih.fill(0), this.ig.fill(0), this.ii.fill(0), this.gb.fill(0), this.xW.fill(0), this.gp.fill(0), this.gF = new Array(aD.ek), this.gT =
				new Array(aD.ek), this.gU = new Array(aD.ek), this.fD = new Array(aD.ek), this.pz.fill(0), this.jC.fill(0), this.jD.fill(0), this.a0W.fill(0), this.a0U.fill(0), this.a3P.fill(0)
		}
}

function cu() {
	this.aCe = function(player) {
		aG.mh(player), aD.zz++, ag.a3H[player] = 2, ag.a0W[player] = bi.a0m.aH7(), player === aD.eX && (aX.show(!1, !1), aW.aAp(), bR.zi.a0S()), af.a6O(player)
	}
}

function cV() {
	this.kC = null, this.kB = 0, this.a4Z = function() {
		for (this.kB = 0, aB = aD.ek - 1; 0 <= aB; aB--) 0 !== ag.mi[aB] && this.kB++;
		this.kC = new Uint16Array(this.kB);
		for (var en = 0, aB = 0; aB < aD.ek; aB++) 0 !== ag.mi[aB] && (this.kC[en++] = aB)
	}, this.mO = function() {
		for (var gb = ag.gb, xW = ag.xW, a0U = ag.a0U, kC = al.kC, aB = al.kB - 1; 0 <= aB; aB--) {
			var dt, gL = kC[aB];
			gb[gL] <= bL.du(xW[gL], 4) ? ak.dm(gL) : gb[gL] >= xW[gL] ? (dt = gb[gL], 250 <= (xW[gL] = dt) && (a0U[gL] = 1)) : xW[gL] -= Math.max(1, bL.du(xW[gL] - gb[gL], 1e3))
		}
		this.aJr()
	}, this.aJr = function() {
		for (var mi = ag.mi, l2 = this.kC, aBX = this.kB, aB = aBX - 1; 0 <= aB; aB--) 0 === mi[l2[aB]] && (l2[aB] = l2[--aBX]);
		this.kB = aBX
	}
}

function cW() {
	var aJs = new Uint16Array(aD.ek),
		aJt = 0;

	function aJx(a6U, aJv) {
		var f8 = bf.k7();
		return 3213 <= f8 ? 4 + bL.du(100 * aJv, ae.jq(a6U)) : (a6U = 1 + bL.du(aD.ju, 300), f8 < 357 ? 2 + bL.du(100 * aJv, a6U) : f8 < 714 ? 2 + bL.du(100 * aJv, 4 * a6U) : f8 < 1071 ? 2 + bL.du(100 * aJv, 10 * a6U) : f8 < 2142 ? 2 + bL.du(100 *
			aJv, 30 * a6U) : 2 + bL.du(100 * aJv, 100 * a6U))
	}

	function aJw(a6U) {
		return aD.kU || 7 <= aD.kS || 4284 <= bf.k7() || bA.g9.jY(a6U)
	}
	this.dd = function() {
		aJs.fill(0), aJt = 15
	}, this.hR = function(p7) {
		var player = aD.eX;
		return !!bA.g9.q1(player, p7) && !(!bA.g9.pQ(player, bA.g9.iM(player, aR.hH()), p7) || (player = p7, p7 = bO.fK[0], !aJw(player) && aJs[player] + aJx(player, p7) > aJt))
	}, this.jG = function(a6U, aJv) {
		if (!aJw(a6U)) {
			aJv = aJx(a6U, aJv);
			if (aJs[a6U] + aJv > aJt) return !1;
			aJs[a6U] += aJv
		}
		return !0
	}, this.j3 = function() {
		bf.k7() % 100 == 99 && (bf.k7() < 1071 ? aJt += 4 : bf.k7() < 2142 ? aJt += 6 : bf.k7() < 3213 ? aJt += 8 : aJt += 10)
	}
}

function ce() {
	var aJy;
	this.kb = null, this.ka = 0, this.dd = function() {
		aJy = [], 9 === aD.kS && this.aJz()
	}, this.aJz = function() {
		this.kb = [0, 0, 0, 0, 0, 0];
		for (var aK0 = [256, 227, 170, 148, 100, this.ka = 0, 0, 0], aK1 = [0, 8, 24, 30, 46, 70, 256, 333], aK2 = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kA, aB = 1; aB < aK0.length; aB++)
			if (j <= aK1[aB]) {
				this.ka = aK0[aB - 1] - bL.du((j - aK1[aB - 1]) * (aK0[aB - 1] - aK0[aB]), aK1[aB] - aK1[aB - 1]), this.kb[5] = aK2[aB - 1] - bL.du((j - aK1[aB - 1]) * (aK2[aB - 1] - aK2[aB]), aK1[aB] - aK1[aB - 1]), this.kb[0] = aD.ek - j - this
					.ka - this.kb[5];
				break
			} aD.kW = aD.ek - aD.kA, aD.data.numberTeams = (0 < aD.kA) + (0 < aD.kW), aD.data.playerCount = aD.x2 = aD.kA + aD.kW, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kA + this.ka, aD.kW - this.ka]), aD.a4O.a4T()
	}, this.aHE = function(player) {
		aJy.push({
			player: player,
			gG: 14 + ay.jS(20)
		})
	}, this.j3 = function() {
		if (9 === aD.kS)
			for (var aB = aJy.length - 1; 0 <= aB; aB--) --aJy[aB].gG <= 0 && (af.q9(aJy[aB].player, 0, aj.rq.yl + aj.rq.yz), aJy.splice(aB))
	}
}

function dB() {
	function aKH() {
		return {
			ey: bS.ey,
			ez: bS.ez,
			wU: bS.wU,
			wQ: bS.wQ,
			wR: bS.wR,
			wV: bS.wV,
			eT: bS.eT,
			mapSeed: bS.mapSeed,
			wS: bS.wS
		}
	}

	function aK9(aB) {
		return 1 !== aB && bS.aD8(aB) && aB !== bS.aKJ()
	}
	this.aK4 = 22, this.aHP = 4096, this.ey = 0, this.ez = 0, this.wU = null, this.wQ = null, this.wR = null, this.wV = null, this.eT = 0, this.mapSeed = 0, this.wS = !1, this.wT = new aK5, this.wK = new aK6, this.a6l = new aK7, this.dd =
function() {
		this.wK.dd()
	}, this.a7 = function(map, aK8) {
		((map %= this.aK4) !== this.eT || aK9(this.eT) && aK8 !== this.mapSeed) && (this.wS = !1, this.wT.aKA(), ay.a4U(map), this.eT = map, this.mapSeed = aK8, aK9(map) && (bS.wK.wL[map].aKB = aK8), this.aD8(this.eT) ? (map = bS.wK.wL[this.eT],
			this.ey = map.i, this.ez = map.j, ay.a4U(map.aKB), aq.a7([this.ey, this.ez, map.mn, map.mk]), aKD(), ap.aKE(), aq.aKF()) : aKC())
	}, this.aKG = function(map, aK8) {
		var fW = aKH(),
			map = (this.a7(map, aK8), this.wT.aKA(), aKH());
		return aK8 = fW, bS.ey = aK8.ey, bS.ez = aK8.ez, bS.wU = aK8.wU, bS.wQ = aK8.wQ, bS.wR = aK8.wR, bS.wV = aK8.wV, bS.eT = aK8.eT, bS.mapSeed = aK8.mapSeed, bS.wS = aK8.wS, map
	}, this.a4p = function(canvas) {
		canvas && this.wU !== canvas && (this.ey = canvas.width, this.ez = canvas.height, this.wU = canvas, this.wQ = this.wU.getContext("2d", {
			alpha: !1
		}), this.hm = this.wQ.getImageData(0, 0, this.ey, this.ez), this.wV = this.hm.data, this.eT = this.aKJ(), this.mapSeed = 0, bS.wK.wL[this.eT].name = aD.data.mapName)
	}, this.eS = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aKJ()
	}, this.aKK = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aKL = function(aB) {
		return 1 === aB
	}, this.aKJ = function() {
		return this.aK4
	}, this.aD8 = function(aB) {
		return void 0 === this.wK.wL[aB].aKM
	}, this.a4o = function(qS) {
		return 0 === qS.mapType ? qS.mapProceduralIndex < 10 ? qS.mapProceduralIndex : 10 + qS.mapProceduralIndex : 1 === qS.mapType ? qS.mapRealisticIndex + 10 : void 0
	}, this.aD9 = function(qS, aKN) {
		0 === qS.mapType ? qS.mapProceduralIndex = aKN < 10 ? aKN : aKN - 10 : 1 === qS.mapType && (qS.mapRealisticIndex = aKN - 10)
	}
}

function aK5() {
	function aKW() {
		bS.wT.j3()
	}

	function aKc(gL, aKb) {
		0 < aKb && (bS.wV[gL] += aKb, bS.wV[gL + 1] += aKb, bS.wV[gL + 2] += aKb)
	}

	function i1(gL) {
		return bS.wV[gL + 2] > bS.wV[gL] && bS.wV[gL + 2] > bS.wV[gL + 1]
	}
	this.a9C = -1, this.a0z = 0, this.aKO = 0, this.aKP = 8, this.aKQ = 32, this.aKR = 8, this.aKS = 32, this.aKT = [0, 0], this.a8D = [0, 0, 0, 0], this.iX = null, this.aKU = !0, this.aKV = !1, this.aKA = function() {
		-1 !== this.a9C && clearTimeout(this.a9C), this.a9C = -1, this.iX = null, aq.aKF()
	}, this.dd = function() {
		7 === aa.a18() || this.aKV || (this.aKU = !0, this.a0z = 0, this.aKO = 1, this.aKT = [bS.wK.wL[bS.eT].wm[0], bS.wK.wL[bS.eT].wn[0]], this.a8D = [bS.wK.wL[bS.eT].aKM[3], bS.wK.wL[bS.eT].aKM[4], bS.wK.wL[bS.eT].aKM[5], bS.wK.wL[bS.eT].aKM[
			6]], this.aKP = bS.wK.wL[bS.eT].aKM[7], this.aKQ = bS.wK.wL[bS.eT].aKM[8], this.aKR = bS.wK.wL[bS.eT].aKM[9], this.aKS = bS.wK.wL[bS.eT].aKM[10], this.aKU ? this.a9C = setTimeout(aKW, 16) : this.j3())
	}, this.j3 = function() {
		if (8 === aa.a18() && aH.n0()) this.a9C = setTimeout(aKW, 16);
		else {
			if (0 === this.a0z) {
				var aKB = ay.aKX();
				if (ay.a4U(bS.wK.wL[bS.eT].aKM[2]), aq.a7([bS.ey, bS.ez, bS.wK.wL[bS.eT].aKM[0], bS.wK.wL[bS.eT].aKM[1]]), ay.a4U(aKB), this.iX = aq.aKY(), this.a0z++, this.aKU) return void(this.a9C = setTimeout(aKW, 16))
			}
			for (var gL, eZ, aKB = this.aKU ? 10 : 1e6, aKB = bS.ez - this.aKO - 1 < aKB ? bS.ez - this.aKO - 1 : aKB, xj = this.aKO + aKB, ew = this.aKO; ew < xj; ew++)
				for (var eu = 1; eu < bS.ey - 1; eu++) i1(gL = 4 * (eZ = eu + ew * bS.ey)) ? this.aKZ(gL, eZ, 1) : (this.aKZ(gL, eZ, 0), function(eu, ew, gL) {
					return 1 < eu && i1(gL - 4) || eu < bS.ey - 2 && i1(gL + 4) || 1 < ew && i1(gL - 4 * bS.ey) || ew < bS.ez - 2 && i1(gL + 4 * bS.ey)
				}(eu, ew, gL) && this.aKa(eu, ew));
			this.aKO = xj, this.aKO >= bS.ez - 1 ? (bS.wQ.putImageData(bS.wR, 0, 0, 1, 1, bS.ey - 2, bS.ez - 2), bf.dl = !0, this.aKA()) : this.aKU && (this.a9C = setTimeout(aKW, 16))
		}
	}, this.aKZ = function(gL, eZ, e8) {
		aKc(gL, Math.floor(this.aKT[e8] + this.a8D[e8] * this.iX[eZ] / 1e4) - bS.wV[gL])
	}, this.aKd = function(gL, e7, aKe, e8, a8D) {
		aKc(gL, Math.floor(this.aKT[e8] + (1 - e7 / aKe) * a8D) - bS.wV[gL])
	}, this.aKa = function(lN, lO) {
		for (var gL, e7, aKe, a92 = lN - this.aKQ, aKf = lO - this.aKQ, xk = lN + this.aKQ, xj = lO + this.aKQ, a92 = a92 < 1 ? 1 : a92, xk = xk > bS.ey - 2 ? bS.ey - 2 : xk, xj = xj > bS.ez - 2 ? bS.ez - 2 : xj, ew = aKf < 1 ? 1 : aKf; ew <=
			xj; ew++)
			for (var eu = a92; eu <= xk; eu++) i1(gL = 4 * (eu + ew * bS.ey)) ? (aKe = this.aKP + (this.aKQ - this.aKP) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lN - eu) > aKe || Math.abs(lO - ew) > aKe || aKe <= (e7 = Math.sqrt((lN - eu) * (
				lN - eu) + (lO - ew) * (lO - ew))) || this.aKd(gL, e7, aKe, 1, this.a8D[3])) : (aKe = this.aKR + (this.aKS - this.aKR) * this.iX[eu + bS.ey * ew] / 1e4, Math.abs(lN - eu) > aKe || Math.abs(lO - ew) > aKe || aKe <= (e7 = Math
				.sqrt((lN - eu) * (lN - eu) + (lO - ew) * (lO - ew))) || this.aKd(gL, e7, aKe, 0, this.a8D[2]))
	}
}

function aKD() {
	var uQ = aKg(bS.eT);
	uQ && aKh(uQ[0], uQ[1], uQ[2], uQ[3], uQ[4])
}

function aKg(eT) {
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

function aKh(aKi, aKj, aKk, aKl, aKm) {
	for (var eu, ew, aKo, aKp, a2K, aKr, i6 = aKi.length - 1, aKn = bS.ey + bS.ez, en = (aKn *= aKn, aKk.length), aKq = Array(en), aB = en - 1; 0 <= aB; aB--) aKq[aB] = aKk[aB] * aKk[aB];
	var aKs = new Array(en),
		aC7 = new Array(en),
		aKt = new Array(en),
		fF = aq.aKY();
	if (void 0 === aKm)
		for (aKm = new Array(en), aB = en - 1; 0 <= aB; aB--) aKm[aB] = 0;
	for (aB = 1; aB < en; aB++) aKs[aB] = aKq[aB] - aKq[aB - 1], aC7[aB] = aKl[aB] - aKl[aB - 1], aKt[aB] = aKm[aB] - aKm[aB - 1];
	for (eu = bS.ey - 1; 0 <= eu; eu--)
		for (ew = bS.ez - 1; 0 <= ew; ew--) {
			for (aKo = aKn, aB = i6; 0 <= aB; aB--) aKo = (aKp = (eu - aKi[aB]) * (eu - aKi[aB]) + (ew - aKj[aB]) * (ew - aKj[aB])) < aKo ? aKp : aKo;
			for (a2K = aKl[en - 1], aKr = aKm[en - 1], aB = 1; aB < en; aB++)
				if (aKo < aKq[aB]) {
					a2K = aKl[aB - 1] + aGe((aKo - aKq[aB - 1]) * aC7[aB], aKs[aB]), aKr = aKm[aB - 1] + aGe((aKo - aKq[aB - 1]) * aKt[aB], aKs[aB]);
					break
				} aKu(bS.ey * ew + eu, a2K, aKr, fF)
		}
}

function aKu(e8, a2K, aKr, fF) {
	a2K < 500 ? fF[e8] = bL.du(fF[e8] * a2K * 2, 1e3) : 500 < a2K && (fF[e8] += bL.du(2 * (1e4 - fF[e8]) * (a2K - 500), 1e3)), fF[e8] += bL.du(aKr * (10 * a2K - fF[e8]), 1e3)
}

function cg() {
	var aKv;

	function aL5(a2l, ho, eu, ew, globalAlpha) {
		bS.wQ.save(), bS.wQ.globalAlpha = globalAlpha, bS.wQ.imageSmoothingEnabled = !1, bS.wQ.scale(ho, ho), bS.wQ.drawImage(a2l, Math.floor(eu * (bS.ey / ho - a2l.width)), Math.floor(ew * (bS.ez / ho - a2l.height))), bS.wQ.restore()
	}
	this.a6i = 0, this.a6j = 0, this.a6k = 0, this.a6l = 0, this.dd = function() {
		(aKv = new Array(bS.aK4))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e7: [220, 250, 255, 220],
			tC: [190, 220, 0, 0],
			f7: [170, 200, 0, 0]
		}, aKv[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e7: [25, 0, 100, 0, 25],
			tC: [25, 0, 0, 0, 25],
			f7: [25, 0, 0, 0, 25]
		}, aKv[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e7: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tC: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f7: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aKv[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e7: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tC: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f7: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aKv[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e7: [10, 10, 20, 10, 10, 170, 212],
			tC: [20, 20, 60, 100, 100, 110, 170],
			f7: [70, 70, 160, 30, 30, 60, 120]
		}, aKv[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e7: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tC: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f7: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aKv[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e7: [10, 10, 60, 255, 255, 200, 200],
			tC: [10, 10, 60, 255, 255, 200, 200],
			f7: [80, 80, 255, 255, 255, 200, 200]
		}, aKv[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tC: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aKv[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e7: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tC: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f7: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aKv[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e7: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tC: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f7: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aKv[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e7: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tC: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f7: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aKv[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e7: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tC: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f7: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aKE = function() {
		var aL4, aB, f6, fW, hm = function() {
				var hm;
				return bS.wU = document.createElement("canvas"), bS.wU.width = bS.ey, bS.wU.height = bS.ez, bS.wQ = bS.wU.getContext("2d", {
					alpha: !1
				}), hm = bS.wQ.getImageData(0, 0, bS.ey, bS.ez), bS.wV = hm.data, hm
			}(),
			i = aKv[bS.eT].i,
			e7 = aKv[bS.eT].e7,
			tC = aKv[bS.eT].tC,
			f7 = aKv[bS.eT].f7,
			fF = aq.aKY(),
			en = i.length - 2,
			aKz = new Array(1 + en),
			aL0 = new Array(1 + en),
			aL1 = new Array(1 + en),
			aL2 = new Array(1 + en);
		for (f6 = en; 0 <= f6; f6--) aKz[f6] = i[f6 + 1] - i[f6], aL0[f6] = e7[f6 + 1] - e7[f6], aL1[f6] = tC[f6 + 1] - tC[f6], aL2[f6] = f7[f6 + 1] - f7[f6];
		for (aB = bS.ey * bS.ez - 1; 0 <= aB; aB--)
			for (f6 = en; 0 <= f6; f6--)
				if (fF[aB] >= i[f6]) {
					fW = fF[aB] - i[f6], bS.wV[4 * aB] = e7[f6] + aGe(aL0[f6] * fW, aKz[f6]), bS.wV[4 * aB + 1] = tC[f6] + aGe(aL1[f6] * fW, aKz[f6]), bS.wV[4 * aB + 2] = f7[f6] + aGe(aL2[f6] * fW, aKz[f6]), bS.wV[4 * aB + 3] = 255;
					break
				} bS.wQ.putImageData(hm, 0, 0), bS.aKL(bS.eT) && ab.tG() && bS.aKL(bS.eT) && (hm = ab.aFp("arena"), aL4 = ab.aFp("territorial.io"), aL5(hm, 5, .5, .5, .1), aL5(aL4, 2, .5, .45, .1)), bS.wS = !0, bf.dl = !0
	}, this.a4X = function() {
		for (var gL, eu, ew, aL6, hd, fY, a6j = 0, i = bS.ey, j = bS.ez, fW = i * j * 4, aL7 = aBh, aL8 = bS.wV, aB = i - 1; 0 <= aB; aB--) aL7[(gL = aB << 2) + 2] = aL7[fW - gL - 2] = 3;
		for (fW = 4 * i, aB = j - 1; 0 <= aB; aB--) aL7[(gL = aB * fW) + 2] = aL7[gL + fW - 2] = 3;
		for (aL6 = i - 1, hd = j - 1, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aL6; eu++) fY = 1 - (aL8[(gL = fW + eu << 2) + 2] > aL8[gL + 1] && aL8[gL + 2] > aL8[gL]), aL7[gL + 2] = 6 - 5 * fY, a6j += fY;
		this.a6i = (i - 2) * (j - 2), this.a6l = 0, bS.eS(bS.eT) && (bS.a6l.aL9(), bS.a6l.aLA(4, 5)), this.a6j = aD.ju = a6j - this.a6l, this.a6k = this.a6i - this.a6j - this.a6l, this.a6k && (bS.a6l.aLA(6, 2), bS.a6l.aLB())
	}
}

function aKC() {
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
			), (new wD).wF(qH)
}

function aK6() {
	this.wL = null, this.aLC = null, this.aLD = null, this.dd = function() {
		var aLE = [120, 105, 92],
			cos = [12, 12, 60],
			aLF = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aLG = [140, 130, 120],
			aLH = [12, 12, 76],
			aLI = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aLJ = [130, 117, 106],
			aLK = [12, 12, 68],
			aLL = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wL = new Array(bS.aK4 + 1), this.wL[0] = {
			name: L(133),
			i: 230,
			j: 230,
			mn: 1e3,
			mk: 2e3,
			aKB: 173
		}, this.wL[1] = {
			name: L(134),
			i: 800,
			j: 800,
			mn: 100,
			mk: 50,
			aKB: 43
		}, this.wL[2] = {
			name: L(135),
			i: 512,
			j: 512,
			mn: 128,
			mk: 32,
			aKB: 0
		}, this.wL[3] = {
			name: L(136) + " 1",
			i: 960,
			j: 960,
			mn: 60,
			mk: 8,
			aKB: 0
		}, this.wL[4] = {
			name: L(137),
			i: 900,
			j: 900,
			mn: 100,
			mk: 5,
			aKB: 0
		}, this.wL[5] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mn: 100,
			mk: 40,
			aKB: 0
		}, this.wL[6] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			mn: 100,
			mk: 20,
			aKB: 0
		}, this.wL[7] = {
			name: L(140),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKB: 0
		}, this.wL[8] = {
			name: L(141),
			i: 820,
			j: 820,
			mn: 200,
			mk: 100,
			aKB: 0
		}, this.wL[9] = {
			name: L(142),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKB: 0
		}, this.wL[10] = {
			name: L(143),
			wm: aLG,
			wn: aLH,
			aKM: aLI
		}, this.wL[11] = {
			name: L(144),
			wm: aLJ,
			wn: aLK,
			aKM: aLL
		}, this.wL[12] = {
			name: L(145),
			wm: aLJ,
			wn: aLK,
			aKM: aLL
		}, this.wL[13] = {
			name: L(146),
			wm: aLE,
			wn: cos,
			aKM: aLF
		}, this.wL[14] = {
			name: L(147),
			wm: aLE,
			wn: cos,
			aKM: aLF
		}, this.wL[15] = {
			name: L(148),
			wm: aLG,
			wn: aLH,
			aKM: aLI
		}, this.wL[16] = {
			name: L(149),
			wm: aLG,
			wn: aLH,
			aKM: aLI
		}, this.wL[17] = {
			name: L(150),
			wm: aLE,
			wn: cos,
			aKM: aLF
		}, this.wL[18] = {
			name: L(151),
			wm: aLJ,
			wn: aLK,
			aKM: aLL
		}, this.wL[19] = {
			name: L(152),
			wm: aLE,
			wn: cos,
			aKM: aLF
		}, this.wL[20] = {
			name: L(153),
			i: 1024,
			j: 1024,
			mn: 128,
			mk: 32,
			aKB: 0
		}, this.wL[21] = {
			name: L(136) + " 2",
			i: 940,
			j: 940,
			mn: 80,
			mk: 8,
			aKB: 0
		}, this.wL[bS.aK4] = {
			name: ""
		}, this.aLC = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aLC[aB] = aB;
		for (this.aLC[10] = 20, this.aLC[11] = 21, this.aLD = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aLD[aB] = 10 + aB
	}
}

function aK7() {
	this.aL9 = function() {
		for (var gL, eu, fW, aL7 = aBh, aL8 = bS.wV, i = bS.ey, aL6 = i - 1, hd = bS.ez - 1, gG = 0, ew = 1; ew < hd; ew++)
			for (fW = ew * i, eu = 1; eu < aL6; eu++) aL8[gL = fW + eu << 2] === aL8[1 + gL] && aL8[gL] === aL8[2 + gL] && (gG++, aL7[2 + gL] = 4);
		ap.a6l = gG
	}, this.aLA = function(aLM, aLN) {
		for (var aL7 = aBh, i = bS.ey, aL6 = i - 1, hd = bS.ez - 1, id = 0, ew = 1; ew < hd; ew++)
			for (var fW = ew * i, eu = 1; eu < aL6; eu++) {
				var eR = 2 + (fW + eu << 2);
				aL7[eR] === aLM && (! function(eR, id, aLM, aLN) {
					var en = 1,
						aL7 = aBh,
						ep = ac.ep,
						a2X = [eR],
						aLP = id >> 8 << 1,
						aLQ = 255 & id;
					aL7[eR - 2] = aLP, aL7[eR - 1] = aLQ, aL7[eR] = 5;
					for (; en;) {
						for (var a2Y = [], aB = 0; aB < en; aB++)
							for (var ec = a2X[aB], eq = 3; 0 <= eq; eq--) {
								var er = ec + ep[eq];
								aL7[er] === aLM && (aL7[er - 2] = aLP, aL7[er - 1] = aLQ, aL7[er] = aLN, a2Y.push(er))
							}
						en = (a2X = a2Y).length
					}
				}(eR, id, aLM, aLN), id = (id + 1) % 32768)
			}
	}, this.aLB = function() {
		for (var aL7 = aBh, i = bS.ey, aL6 = i - 3, hd = bS.ez - 3, aLS = 12 * i, ew = 3; ew < hd; ew++)
			for (var fW = ew * i, eu = 3; eu < aL6; eu++) {
				var eR = 2 + (fW + eu << 2);
				2 !== aL7[eR] || 2 === aL7[eR - 12] && 2 === aL7[12 + eR] && 2 === aL7[eR - aLS] && 2 === aL7[eR + aLS] || (aL7[eR - 2] = 1 | aL7[eR - 2])
			}
	}
}

function a4W() {
	(y5 = void 0 === y5 ? document.createElement("canvas") : y5).width = bS.ey, y5.height = bS.ez, a4a = y5.getContext("2d", {
		alpha: !0
	}), a4b = aBh = null, a4b = a4a.getImageData(0, 0, bS.ey, bS.ez), aBh = a4b.data, bA.qi.wW(aBh)
}

function ch() {
	var fF, i, j, max, aLT, mk, aLV, aLW, aLX, aLY, aLZ, aLa, aLb, aLc, aLU = 1e4;

	function aLj(aLi, mn, en) {
		var aB;
		for (aLV[0] = aLi, aB = 1; aB < en; aB++) aLV[aB] = aLV[aB - 1] + mn, mn = aLV[aB] >= aLU ? (aLV[aB] = aLU - 1, -mn) : aLV[aB] < 0 ? (aLV[aB] = 0, -mn) : (mn += 16384 <= ay.random() ? mk : -mk) < -aLT ? -aLT : aLT < mn ? aLT : mn
	}

	function aLl(eu, ew, aLm, en) {
		(aLm ? function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB] = aLV[aB]
		} : function(eu, ew, en) {
			var aB;
			for (aB = 0; aB < en; aB++) fF[ew * i + eu + aB * i] = aLV[aB]
		})(eu, ew, en)
	}

	function aLp(value, en) {
		var aB, aJU, eR, jQ = value - aLV[en - 1];
		if (0 != jQ) {
			for (aJU = 1 + bL.du(Math.abs(jQ), en - 1), aJU = jQ < 0 ? -aJU : aJU, aLV[en - 1] = value, eR = (eR = en - 1 - bL.du(Math.abs(jQ), Math.abs(aJU))) < 1 ? 1 : en - 2 < eR ? en - 2 : eR, aB = en - 2; eR <= aB; aB--) aLV[aB] += jQ - (en -
				1 - aB) * aJU;
			(jQ < 0 ? function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLV[aB] < 0 && (aLV[aB] = -aLV[aB] - 1)
			} : function(en) {
				var aB;
				for (aB = en - 2; 1 <= aB; aB--) aLV[aB] >= aLU && (aLV[aB] = 2 * aLU - aLV[aB] - 1)
			})(en)
		}
	}

	function aLs(a2X, a2Y, en) {
		for (var aB = 0; aB < en; aB++) a2X[aB] = a2Y[aB]
	}

	function aLt(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aLu(a5D, gap, he) {
		aLW.push(a5D), aLX.push(gap), aLY.push(he)
	}
	this.a7 = function(a3k) {
		! function(a3k) {
			var aB;
			for (i = a3k[0], j = a3k[1], aLT = a3k[2], mk = a3k[3], fF = new Int16Array(i * j), max = j < i ? i : j, aLV = new Int16Array(max), aLW = [], aLX = [], aLY = [], aLZ = new Array(i), aLa = new Array(j), aB = i - 1; 0 <= aB; aB--) aLZ[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aLa[aB] = !1;
			aLb = new Int16Array(i), aLc = new Int16Array(j)
		}(a3k),
		function(en) {
			var aLi = ay.random() % aLU,
				mn = ay.random() % (2 * aLT + 1) - aLT;
			aLj(aLi, mn, en)
		}(max), aLs(aLc, aLV, j), aLl(0, 0, !0, i);
		var eu, ew, a3k = fF[0],
			en = max,
			mn = ay.random() % (2 * aLT + 1) - aLT;
		for (aLj(a3k, mn, en), aLs(aLb, aLV, i), aLl(0, 0, !1, j), aLt(aLb), aLt(aLc), aLj(fF[i - 1], aLb[i - 1], j), aLl(i - 1, 0, !1, j), aLj(fF[i * (j - 1)], aLc[j - 1], i), aLp(fF[i * j - 1], i), aLl(0, j - 1, !0, i), aLZ[i - 1] = aLZ[0] = !
			0, aLa[j - 1] = aLa[0] = !0, aLu(0, i, !0), aLu(0, j, !1), ! function() {
				var aLw, a5D;
				for (;;) {
					if (aLw = function() {
							var aB, aLw = aLW.length - 1;
							for (aB = aLw - 1; 0 <= aB; aB--) aLX[aB] > aLX[aLw] && (aLw = aB);
							return aLw
						}(), aLX[aLw] < 5) return;
					a5D = aLW[aLw] + bL.du(aLX[aLw], 2), (aLY[aLw] ? function(eu) {
						var en, aLz, aB, aFF = 0,
							aM0 = 0;
						for (; aM0 < j - 1;) {
							for (aB = aFF + 1; aB < j; aB++)
								if (aLa[aB]) {
									aM0 = aB;
									break
								} en = aM0 - aFF + 1, aLj(fF[eu + i * aFF], 0 === aFF ? aLb[eu] : aLV[aLz - 1] - aLV[aLz - 2], en), aLp(fF[aM0 * i + eu], en), aLl(eu, aFF, !1, en), aLz = en, aFF = aM0
						}
						aLZ[eu] = !0
					} : function(ew) {
						var en, aLz, aB, aFF = 0,
							aM0 = 0;
						for (; aM0 < i - 1;) {
							for (aB = aFF + 1; aB < i; aB++)
								if (aLZ[aB]) {
									aM0 = aB;
									break
								} en = aM0 - aFF + 1, aLj(fF[ew * i + aFF], 0 === aFF ? aLc[ew] : aLV[aLz - 1] - aLV[aLz - 2], en), aLp(fF[ew * i + aM0], en), aLl(aFF, ew, !0, en), aLz = en, aFF = aM0
						}
						aLa[ew] = !0
					})(a5D), aLu(a5D, aLW[aLw] + aLX[aLw] - a5D, aLY[aLw]), aLX[aLw] = a5D - aLW[aLw] + 1
				}
			}(), eu = 0; eu < i; eu++)
			if (!aLZ[eu])
				for (ew = 0; ew < j; ew++) aLa[ew] || ! function(eu, ew) {
					var value = fF[ew * i + eu - 1] + fF[(ew - 1) * i + eu],
						a6w = 2;
					aLZ[eu + 1] && (a6w++, value += fF[ew * i + eu + 1]);
					aLa[ew + 1] && (a6w++, value += fF[(ew + 1) * i + eu]);
					fF[ew * i + eu] = bL.du(value, a6w)
				}(eu, ew)
	}, this.aKY = function() {
		return fF
	}, this.aKF = function() {
		fF = null
	}
}

function aGe(f6, f7) {
	return 0 <= f6 ? bL.du(f6, f7) : -bL.du(-f6, f7)
}

function jh(fF) {
	return fF * fF
}

function a6B(f6, f7) {
	return f7 < f6 ? f6 : f7
}

function aBB(f6, f7) {
	return f6 < f7 ? f6 : f7
}

function a8X(f6, fF, f7) {
	return fF < f6 ? f6 : f7 < fF ? f7 : fF
}

function aM2(fF, en) {
	for (var f8 = bL.du(fF + 1, 2), aB = 0; aB < en; aB++) f8 = bL.du(f8 + bL.du(fF, f8), 2);
	return f8
}

function aI0(fF, en) {
	return fF < 1 ? 0 : aM2(fF, en)
}

function aM3(n8, n9, sv, a8G, nL, nM, sw, td) {
	return !(n8 + sv <= nL || n9 + a8G <= nM || nL + sw <= n8 || nM + td <= n9)
}

function aM4(n8, n9, sv, a8G, nL, nM, sw, td) {
	return n8 <= nL && n9 <= nM && nL + sw <= n8 + sv && nM + td <= n9 + a8G
}

function wN(fF) {
	return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
}

function bx() {
	this.du = function(f6, f7) {
		return Math.floor((f6 + .5) / f7)
	}, this.aM5 = function(f6, f7) {
		return Math.floor(f6 * (f7 + .5))
	}, this.sqrt = function(fF) {
		return ~~Math.sqrt(fF + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.hv = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aM6 = function(fW, fY, fa) {
		return Math.max(Math.min(fW, fY), fa)
	}, this.aM7 = function(aM8, aM9, eu, ew) {
		eu -= aM8, aM8 = ew - aM9, ew = 0;
		return 0 == eu ? ew = 0 <= aM8 ? Math.PI : 0 : (ew = Math.atan(aM8 / eu), ew += 0 < eu ? .5 * Math.PI : 1.5 * Math.PI), ew
	}, this.log2 = function(fF) {
		return Math.floor(!!fF * (1 + Math.log2(fF + .5)))
	}, this.log10 = function(fF) {
		return Math.floor(Math.log10(fF + .5))
	}, this.aMB = function(aMC, aMD, aME, aMF, aMG) {
		return aME - aMG < aMC && aMC < aME + aMG && aMF - aMG < aMD && aMD < aMF + aMG
	}, this.xK = function(a8x, a8z) {
		return a8x * a8x + a8z * a8z
	}
}

function dD() {
	this.y = new aMH, this.so = 0;
	var aMI = new Array(31);

	function aMM() {
		for (var en = aMI.length, aB = 0; aB < en; aB++) aMI[aB] = null
	}
	this.dd = function() {
		for (var aMJ, aMK = document.body.firstChild; aMK;) {
			if (aMJ = aMK.nextSibling, document.body.contains(aMK) && ("DIV" === aMK.tagName || "INPUT" === aMK.tagName || "BUTTON" === aMK.tagName)) try {
				document.body.removeChild(aMK)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aMK = aMJ
		}
	}, this.u = function(e8, aML, a3k) {
		void 0 === aML && (aML = this.so), bf.dl = !0, 0 === e8 && (0 === aa.a18() ? e8 = 5 : a0.a1.setState(13)), this.rr(), this.so === e8 && (aML = aMI[e8].aML, aMI[e8] = null), this.so = e8;
		var l3 = aMI[e8];
		if (!l3 || 4 === e8 || 7 === e8 || 8 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 15 === e8 || 18 === e8 || 20 <= e8 && e8 <= 28 || 32 === e8 || 33 === e8) {
			if (0 === e8) return void aMM();
			1 === e8 ? l3 = new aMN : 2 === e8 ? l3 = new aMO : 3 === e8 ? l3 = new aMP : 4 === e8 || 9 === e8 || 10 === e8 || 11 === e8 || 13 === e8 || 33 === e8 ? l3 = a3k : 5 === e8 ? l3 = new aMQ : 6 === e8 ? l3 = new aMR : 7 === e8 ? l3 =
				new aMS(t.y.aMT) : 8 === e8 ? l3 = a3k : 12 === e8 ? l3 = new aMU : 14 === e8 ? l3 = new aMV : 15 === e8 ? l3 = new aMS(t.y.aMW) : 16 === e8 ? l3 = new aMX : 17 === e8 ? l3 = new aMY : 18 === e8 ? l3 = new aMZ : 19 === e8 ? l3 =
				new aMa : 20 === e8 ? l3 = new aMb : 21 === e8 ? l3 = new aMc : 22 === e8 ? l3 = new aMd : 23 === e8 ? l3 = new aMe : 24 === e8 ? l3 = new aMf : 25 === e8 ? l3 = new aMg : 26 === e8 ? l3 = new aMh : 27 === e8 ? l3 = new aMi :
				28 === e8 ? l3 = new aMj : 29 === e8 ? l3 = new aMk : 30 === e8 && (l3 = new aMl), l3.aML = aML, aMI[e8] = l3
		}
		l3.show(a3k)
	}, this.a17 = function() {
		this.hZ() && this.aMm(this.a4x().aML)
	}, this.aMm = function(e8) {
		this.hZ() && (aMI[e8] ? (this.rr(), bf.dl = !0, this.so = e8, aMI[e8].show()) : this.u(e8))
	}, this.rr = function() {
		this.hZ() && aMI[this.so].rr()
	}, this.x = function() {
		this.hZ() && (aMI[this.so].rr(), aMM(), this.so = 0, a0.a1.setState(13))
	}, this.ug = function() {
		var l3;
		this.hZ() && (l3 = aMI[this.so]).ug && l3.ug()
	}, this.resize = function() {
		if (!this.hZ()) return !1;
		aMI[this.so].resize()
	}, this.h0 = function(eu, ew) {
		var l3;
		this.hZ() && (l3 = aMI[this.so]).h0 && l3.h0(eu, ew)
	}, this.a1R = function(eu, ew) {
		var l3;
		this.hZ() && (l3 = aMI[this.so]).a1R && l3.a1R(eu, ew)
	}, this.a1p = function() {
		var l3;
		this.hZ() && (l3 = aMI[this.so]).a1p && l3.a1p()
	}, this.a1U = function(lN, lO, deltaY) {
		var l3;
		this.hZ() && (l3 = aMI[this.so]).a1U && l3.a1U(lN, lO, deltaY)
	}, this.a1z = function(code) {
		var l3;
		return !!this.hZ() && ((l3 = aMI[this.so]).a1z && l3.a1z(code), !0)
	}, this.j3 = function() {
		var l3;
		this.hZ() && (l3 = aMI[this.so]) && l3.j3 && l3.j3()
	}, this.hZ = function() {
		return 0 < this.so
	}, this.a4x = function() {
		return aMI[this.so]
	}, this.a4y = function(e8) {
		return aMI[e8]
	}, this.aMn = function() {
		return aMI
	}
}

function aMS(data) {
	var aMo, aMp;
	this.show = function() {
		data.aMq && bI.aNh("account", data.sm), aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aMp.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a17()
	}), new w(data.aMq ? "🔄 " + L(154) : L(155), function() {
		t.u(8, t.a4x().aML, new sp(25, {
			sq: 0,
			sm: data.sm,
			sn: data.sn
		}))
	}, 0, 0, 1)]), aMp = new qT(aMo.uX, function() {
		var qV = [];
		qV.push(function() {
				var aN7 = new qD,
					rN = (aN7.qG(L(204)), new rO({
						value: data.username,
						e8: -1
					}));
				rN.e.readOnly = !0, aN7.qR(rN), aN7.qR(new s4([new w(L(173), function(e) {
					return bA.qa.a3D(rN.e), bA.qa.a3E(e), !0
				}).button])), data.aMq || aN7.qI(L(205));
				return aN7
			}()),
			function(qV) {
				var aN7, qJ, aBv, aNQ, aNG;
				data.aMq || ((aN7 = new qD).qG(L(206)), (qJ = aN7.qI(data.aNP.length + " / 160")).style.textAlign = "center", aBv = !0, (aNQ = new up(0, 1, function(e) {
					e = e.target.value.length;
					qJ.textContent = e + " / 160", 160 < e ? aBv && (aBv = !1, aNG.qu(1), aNG.button.style.color = bB.ni) : aBv || (aBv = !0, aNG.qu(0), aNG.button.style.color = bB.og)
				})).e.rows = 6, aNQ.e.style.fontSize = "1em", aNQ.uw(data.aNP), aN7.qR(aNQ), aNG = new w(L(207), function() {
					if (!aBv) return !0;
					t.u(8, t.a4x().aML, new sp(29, {
						sq: 1,
						qH: aNQ.uy().substring(0, 160)
					}))
				}, 0, 0, 1), aN7.qR(new s4([aNG.button])), 0 !== data.aNR && (aN7.qR(new s4([new w(L(1 === data.aNR ? 209 : 210), function() {
					t.u(8, t.a4x().aML, new sp(29, {
						sq: 0,
						qH: ""
					}))
				}, 0, 0, 1).button])), aN7.qI(1 === data.aNR ? L(211, [data.aNT - 1]) : L(212, [data.aNT - 1]))), aN7.qI(L(208, [data.aNS])), qV.push(aN7))
			}(qV),
			function(qV) {
				var aN7;
				data.aMq && 0 !== data.aNR && ((aN7 = new qD).qG(L(213)), aN7.qK(data.aNP), aN7.qR(new s4([new w(L(214, 0, "Report"), function(e) {
					return b0.y.aNC(0) && (bA.qa.a3E(e), b0.aNE.aNU({
						sq: 5,
						sm: data.sm
					})), !0
				}, 0, 0, 1).button])), qV.push(aN7))
			}(qV), qV.push(function() {
				var aN7 = new qD,
					aN8 = (aN7.qG(L(156)), [L(157), L(158), L(159), L(160), L(161)]),
					e7 = data.aN9;
				aN7.qM(L(162) + bA.rZ.a41(data.vk, .01, 2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vj + "<br>" + L(164) + aN8[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : e7 < 1e3 ? 3 : 4]), data.aMq || (aN7.qI(L(165)), aN7.qI(L(166)),
					aN7.qI(L(167)));
				return aN7
			}()), data.aMq && qV.push(function() {
				var aN7 = new qD,
					rN = (aN7.qG(L(168)), new rO({
						value: bj.eK.data[147].value,
						e8: -1
					}, 1, void 0, function(e) {
						bj.s1.s2(147, aNA(e.target.value))
					})),
					aNB = (aN7.qR(rN), new w(L(14), function(e) {
						return rN.e.readOnly && b0.y.aNC(0) && (bA.qa.a3E(e), aND(), b0.aNE.aNF({
							sq: 0,
							sm: data.sm,
							value: parseInt(bj.eK.data[147].value, 10)
						})), !0
					}, 1)),
					aNG = new w(L(169), function(e) {
						return e.textContent === L(169) ? (e.textContent = L(170), rN.e.readOnly = !0, aNB.qu(0), aNB.button.style.color = bB.og, bj.s1.s2(147, rN.e.value), aNA(bj.eK.data[147].value)) : aND(), !0
					}),
					qJ = (aN7.qR(new s4([aNG.button])), aN7.qI()),
					aNA = function(fF) {
						fF = bA.g9.a3h(fF, 2, 1e6);
						var aNH = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
						qJ.textContent = L(171, [fF, bj.eK.data[105].value, aNH, data.sm, fF - aNH])
					},
					aND = function() {
						aNG.button.textContent = L(169), rN.e.readOnly = !1, aNB.qu(1), aNB.button.style.color = bB.ni
					};
				return aNA(bj.eK.data[147].value), aN7.qR(new s4([aNB.button])), aN7
			}());
		qV.push(function() {
			var aN7 = new qD,
				rN = (aN7.qG(L(172)), new rO({
					value: data.sm,
					e8: -1
				}));
			return rN.e.readOnly = !0, aN7.qR(rN), aN7.qR(new s4([new w(L(173), function(e) {
				return bA.qa.a3D(rN.e), bA.qa.a3E(e), !0
			}).button])), aN7
		}()), data.aMq || (qV.push(function() {
			var aN7 = new qD,
				aNI = (aN7.qG(L(174)), new rO(bj.eK.data[106]));
			return aNI.e.readOnly = !0, aNI.e.type = "password", aN7.qR(aNI), aN7.qR(new s4([new w(L(175), function(e) {
				return e.textContent === L(175) ? (e.textContent = L(176), aNI.e.type = "text") : (e.textContent = L(175), aNI.e.type = "password"), !0
			}).button, new w(L(173), function(e) {
				return bA.qa.a3D(aNI.e), bA.qa.a3E(e), !0
			}).button])), aN7.qR(new s4([new w(L(177), function() {
				t.u(8, t.a4x().aML, new sp(15))
			}).button])), aN7.qG(L(178), "0.8em"), aN7.qI(L(179)), aN7.qI(L(180)), aN7.qI(L(181)), aN7
		}()), qV.push(function() {
			var aN7 = new qD;
			return aN7.qG(L(182)), aN7.qR(new s4([new w(L(183), function() {
				t.u(6, t.a4x().aML)
			}).button])), aN7.qR(new s4([new w(L(184), function() {
				bj.s1.s2(105, ""), t.u(8, t.a4x().aML, new sp(18))
			}).button])), aN7.qR(new s4([new w(L(185) + bj.eK.data[105].value, function() {
				t.u(4, 0, new v(L(186), L(187), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a4y(7).aML)
				})]))
			}, bB.oN).button])), aN7
		}()), qV.push(function() {
			function aNK(e8) {
				for (var aB = 0; aB < 2; aB++) aNJ[aB].qu(0 === e8 ? bB.nu : 0 === aB ? bB.oN : bB.o5)
			}
			var qP, aNJ, aN7 = new qD;
			aN7.qG(L(188)), aN7.qI(L(189)), bj.y.vU();
			return aNJ = [new w(L(190), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				if (!(e8 < 1)) {
					qP.qQ[e8].remove(), qP.qQ.splice(e8, 1);
					for (var aB = e8; aB < qP.qQ.length; aB++) qP.qQ[aB].name = "" + aB;
					bj.y.vX(e8), e8 = bj.eK.data[117].value, qP.qQ[e8].textContent = qP.qQ[e8].textContent.replace("⚪", "🟢"), aNK(e8)
				}
			}, bB.nu), new w(L(191), function() {
				var e8 = Math.min(bj.eK.data[117].value, qP.qQ.length - 1);
				e8 < 1 || (e8 = bj.y.vY(e8), bj.s1.s2(105, e8.sm), bj.s1.s2(106, e8.password), t.u(8, t.a4x().aML, new sp(18)))
			}, bB.nu)], (qP = new uM(bj.eK.data[117], aNK)).qQ[0].style.marginTop = "0.5em", aN7.qO(qP), aN7.qR(new s4([aNJ[1].button])), aN7.qR(new s4([aNJ[0].button])), aN7
		}()));
		return qV.push(function() {
				var aN7 = new qD,
					aN8 = (aN7.qG(L(195)), [L(196), L(197), L(198), L(199)]),
					e7 = data.aNL;
				return aN7.qM(L(200) + (data.a0O / 100).toFixed(2) + "<br>" + L(163) + (e7 + 1) + " / " + data.vj + "<br>" + L(164) + aN8[e7 < 10 ? 0 : e7 < 50 ? 1 : e7 < 200 ? 2 : 3]), aN7
			}()), qV.push(function() {
				var aN7 = new qD;
				return aN7.qG(L(192)), aN7.qM(L(193) + bA.rZ.a41(data.vg, .1, 1) + "<br>" + L(163) + (data.vh + 1) + " / " + data.vj + "<br>" + L(194) + data.vi), aN7
			}()),
			function(qV) {
				var aN7 = new qD,
					aNV = data.vn,
					aNW = (aN7.qG(L(215)), aN7.qM(L(216, [data.vl.length ? "[" + data.vl + "]" : "-"])), aN7.qM(L(217, [bA.rZ.a41(aNV, .01, 2)])), aN7.qM(L(218, [data.vp + 1 + " / " + data.vj])), data.vq),
					aNX = (aN7.qM(L(219, [bA.rZ.a41(aNW, .1, 1)])), data.vs);
				aN7.qM(L(220, [aNX])), aN7.qM(L(221, [bA.rZ.a41(aNW / Math.max(aNX, 1), .1, 2)])), aNV = data.vo, aN7.qG(L(222), "0.8em"), aN7.qM(L(216, [data.vm.length ? "[" + data.vm + "]" : "-"])), aN7.qM(L(217, [bA.rZ.a41(aNV, .01, 2)])),
					aNW = data.vr, aN7.qM(L(219, [bA.rZ.a41(aNW, .1, 1)])), aNX = data.vt, aN7.qM(L(220, [aNX])), aN7.qM(L(221, [bA.rZ.a41(aNW / Math.max(aNX, 1), .1, 2)])), data.aMq || (aN7.qI(L(223)), aN7.qI(L(224)));
				qV.push(aN7)
			}(qV),
			function(qV) {
				var aN7 = new qD;
				aN7.qG(L(225)), aN7.qM(L(200) + (data.aNY / 10).toFixed(1) + "<br>" + L(164) + (data.aNZ.length ? L(226, [data.aNZ]) : L(227))), data.aMq ? (aN7.qR(new s4([new w(L(228), function(e) {
					return b0.y.aNC(0) && (bA.qa.a3E(e), b0.aNE.aNU({
						sq: 4,
						sm: data.sm
					})), !0
				}, 0, 0, 1).button])), aN7.qI(L(229)), aN7.qI(L(230))) : aN7.qI(L(231));
				qV.push(aN7)
			}(qV), qV.push(function() {
				var aN7 = new qD;
				if (aN7.qG(L(201)), aN7.qM(L(202) + data.aNM + "<br>" + L(163) + (data.aNN + 1) + " / " + data.vj + "<br>" + L(164) + bo.eA(data.aNN)), data.aMq) {
					var rN = new rO({
							value: bj.eK.data[157].value,
							e8: -1
						}, 1, void 0, function(e) {
							bj.s1.s2(157, aNA(e.target.value))
						}),
						aNG = (rN.e.style.marginTop = "0.6em", aN7.qR(rN), new w(L(169), function(e) {
							return e.textContent === L(169) ? (e.textContent = L(170), rN.e.readOnly = !0, aNO[0].qu(0), aNO[1].qu(0), aNO[0].button.style.color = bB.og, aNO[1].button.style.color = bB.og, aNA(bj.eK.data[157]
								.value)) : aND(), !0
						})),
						aNO = (aN7.qR(new s4([aNG.button])), [new w("−", function(e) {
							return rN.e.readOnly && b0.y.aNC(0) && (bA.qa.a3E(e), aND(), b0.aNE.aNF({
								sq: 2,
								sm: data.sm,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rN.e.readOnly && b0.y.aNC(0) && (bA.qa.a3E(e), aND(), b0.aNE.aNF({
								sq: 1,
								sm: data.sm,
								value: bL.hv(parseInt(bj.eK.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qJ = aN7.qI(),
						aNA = function(fF) {
							return fF = bA.g9.a3h(fF, 3, 32767), qJ.textContent = L(203, [fF - 1, fF, bj.eK.data[105].value]), fF
						};
					aN7.qR(new s4([aNO[0].button, aNO[1].button]));
					for (var aB = 0; aB < 2; aB++) aNO[aB].button.style.fontSize = "1.6em";
					var aND = function() {
						aNG.button.textContent = L(169), rN.e.readOnly = !1, aNO[0].qu(1), aNO[1].qu(1), aNO[0].button.style.color = bB.ni, aNO[1].button.style.color = bB.ni
					};
					aNA(bj.eK.data[157].value)
				}
				return aN7
			}()),
			function(qV) {
				var aN7, a3C;
				data.aMq && !data.aNa || (0 === a0.id || data.aMq || data.aNa) && ((aN7 = new qD).qG("Patreon"), !data.aMq && data.aNb ? aN7.qR(new s4([new w(L(175), function() {
					b0.aNE.aNU({
						sq: 7,
						sm: data.sm
					}), data.aNb = 0, t.u(7)
				}).button])) : data.aNa ? (aN7.qM(L(232, [(data.aNc / 100).toFixed(2)]) + "<br>" + L(233, [1 + data.aNd + " / " + data.aNe]) + "<br>" + L(234, [data.aNf ? L(235) : L(236)])), data.aMq || aN7.qR(new s4([new w(L(237),
					function() {
						b0.aNE.aNU({
							sq: 8,
							sm: data.sm
						}), data.aNa = 0, bj.s1.s2(160, 0), t.u(7)
					}).button]))) : (aN7.qM(L(238), "0.75em").style.marginBottom = "0.3em", aN7.qM("  • " + L(239), "0.75em").style.whiteSpace = "pre", aN7.qM("  • " + L(240), "0.75em").style.whiteSpace = "pre", aN7.qM("  • " + L(
						241), "0.75em").style.whiteSpace = "pre", aN7.qM(L(242), "0.75em").style.marginTop = "1.0em", aN7.qM(L(243), "0.75em").style.marginTop = "1.0em", aN7.qM("<a href='" + bK.aNg +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3C = "https://www.patreon.com/oauth2/authorize?state=" + data.sm +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aN7.qM(L(244), "0.75em").style.marginTop = "1.0em", aN7.qM("<a href='" + a3C +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aMq || (aN7.qR(new sE), aN7.qR(new s4([new w(L(176), function() {
						b0.aNE.aNU({
							sq: 6,
							sm: data.sm
						}), data.aNb = 1, t.u(7)
					}).button])), aN7.qM(L(245), "0.75em").style.marginTop = "0.75em")), qV.push(aN7))
			}(qV), qV
	}())
}

function aMd() {
	var aNi, aNj, aNk, qV;

	function aNl() {
		aNn(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		2 === aD.data.aIncomeType ? (bA.qi.a2b(aNk.uy(), aD.data.aIncomeData, 255), bA.qi.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(246), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), aN7.qO(new uM({
			uQ: [L(248), L(249), L(250)],
			value: aD.data.aIncomeType
		}, function(e8) {
			aNn(), 2 !== e8 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ek)), aD.data.aIncomeType = e8, t.u(22)
		})), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7;
		1 === aD.data.aIncomeType && ((aN7 = new qD).qG("Value"), aN7.qR(new rO({
			e8: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qV.push(aN7))
	}(qV), function(qV) {
		var aN7;
		2 === aD.data.aIncomeType && ((aN7 = new qD).qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.aIncomeData, 4)), aN7.qR(aNk), qV.push(aN7))
	}(qV), qV))
}

function aMg() {
	var aNi, aNj, aNk;

	function aNl() {
		aNn(), 3 !== aD.data.botDifficultyType || bA.qi.a2P(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		3 === aD.data.botDifficultyType && bA.qi.a2b(aNk.uy(), aD.data.botDifficultyData, aE.kL.length - 1)
	}

	function aNs(qV, e8) {
		var aN7 = new qD,
			value = (aN7.qG(e8 < 0 ? L(62) : L(61) + " " + bg.a0I[e8 % 9]), 0 <= e8 && (aN7.qM(L(253) + ": " + aD.data.teamPlayerCount[e8]).style.marginBottom = "1em"), e8 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e8]);
		aN7.qO(new uM({
			uQ: aE.kL,
			value: value
		}, function(hf) {
			e8 < 0 ? aD.data.botDifficultyValue = hf : aD.data.botDifficultyTeam[e8] = hf
		})), qV.push(aN7)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(62), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, function() {
		var qV = [];
		if (function(qV) {
				var aN7 = new qD,
					uQ = (aN7.qG(L(247)), [L(249), L(251), L(252), L(250)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uQ.splice(2, 1));
				aN7.qO(new uM({
					uQ: uQ,
					value: value
				}, function(e8) {
					aNn(), aD.data.botDifficultyType = e8, 0 === aD.data.gameMode && 2 === e8 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ek)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qV.push(aN7)
			}(qV), 0 === aD.data.botDifficultyType) aNs(qV, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aNs(qV, aB);
		else 3 === aD.data.botDifficultyType && ! function(qV) {
			var aN7 = new qD;
			aN7.qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.botDifficultyData, 8)), aN7.qR(aNk), qV.push(aN7)
		}(qV);
		return qV
	}())
}

function aNt(data) {
	var aMo, aNu, aNv, aNw, aNx, aNy, aNz, colors, aO0, aO1, aO2 = 0,
		aO3 = 0,
		aO4 = !1,
		aO5 = !1,
		aO6 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aOa(lN, lO) {
		! function(lN, lO) {
			return aNu < lN && lN < aNu + aNw && aNv < lO && lO < aNv + aNx
		}(aO2 = lN, aO3 = lO) ? (aO4 && (bf.dl = !0), aO4 = !1) : (aO4 = !0, bf.dl = !0)
	}
	this.show = function() {
		aO5 = bj.eK.data[127].value, aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize();
		var f8 = h.k,
			uf = aMo.uc(),
			aOF = f8 * uf.ue,
			f8 = f8 * uf.ru;
		aNy = bA.qa.tD(.06), aNz = bA.qa.tD(.04), aNu = bA.qa.tD(.06), aNv = f8 + aNy, aNw = h.i - aNu - aNz, aNx = aOF + f8 - aNv - aNz
	}, this.ug = function() {
		aMo.ug(),
			function() {
				var aB, aOC, gG, eu, f6, g = data.data,
					aOJ = 1,
					aOK = .125,
					aOL = aO5 ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aOC = g[aB].aOC, gG = aOC.length, aOJ = Math.max(gG, aOJ), f6 = 0; f6 < gG; f6++) aOK = Math.max(aOC[f6], aOK), aOL = Math.min(aOC[f6], aOL);
				var n9 = aNv + aNx,
					xt = aNx / (aOK - aOL),
					xs = 1 / (aOJ - 1);
				for (uh.lineWidth = bc.yv, aB = 0; aB < g.length; aB++) {
					for (aOC = g[aB].aOC, gG = aOC.length, eu = aNu, uh.beginPath(), uh.moveTo(eu + aNw, n9 - xt * (aOC[gG - 1] - aOL)), f6 = gG - 2; 0 <= f6; f6--) uh.lineTo(eu + xs * f6 * aNw, n9 - xt * (aOC[f6] - aOL));
					uh.strokeStyle = colors[aB], uh.stroke()
				}(function(aOL, aOK, n9, xt) {
					uh.font = bA.qa.sO(0, .25 * aNu), bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 2), uh.fillStyle = colors[0];
					for (var eu = .92 * aNu, aB = 0; aB < 3; aB++) {
						var fF = aOL + aB * (aOK - aOL) / 2;
						uh.fillText((fF / 1e3).toFixed(3), eu, n9 - xt * (fF - aOL))
					}
				})(aOL, aOK, n9, xt),
				function(aOJ) {
					var ew = aNv + aNx + .15 * aNz;
					uh.font = bA.qa.sO(0, Math.min(.4 * aNz, .028 * h.i)), bA.qa.textBaseline(uh, 0), bA.qa.textAlign(uh, 2), uh.fillStyle = colors[0], uh.fillText(bA.a2G.a33(aO0), aNu + aNw, ew), bA.qa.textAlign(uh, 0), uh.fillText(bA.a2G.a33(
						new Date(aO1.getTime() - 6e4 * (aOJ - 1) * aO6[data.aOB])), aNu, ew)
				}(aOJ),
				function(aOJ, aOL, aOK) {
					if (aO4 && !(aOJ < 2)) {
						for (var a8O, e8 = (aO2 - aNu) / aNw * (aOJ - 1), aOO = Math.floor(e8), aOP = Math.floor(1 + e8), aOQ = e8 - aOO, aOR = 1e5, aOS = -1, aOT = -1, aOU = aOK - (aOK - aOL) * (aO3 - aNv) / aNx, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aC7, aOC = g[aB].aOC;
							aOC.length <= aOP || (aOC = aOC[aOO] + aOQ * (aOC[aOP] - aOC[aOO]), (aC7 = Math.abs(aOU - aOC)) < aOR && (aOR = aC7, aOS = aB, aOT = aOC))
						} - 1 !== aOS && (aOK = aNv + aNx - (aOT - aOL) / (aOK - aOL) * aNx, uh.lineWidth = .5 * bc.yv, uh.strokeStyle = colors[aOS], uh.beginPath(), uh.moveTo(aNu, aOK), uh.lineTo(aO2, aOK), uh.lineTo(aO2, aNv + aNx), uh
						.stroke(), uh.beginPath(), uh.arc(aO2, aOK, .1 * aNu, 0, 2 * Math.PI), uh.fillStyle = colors[aOS], uh.fill(), aOL = aNv + aNx + .15 * aNz, bA.qa.textAlign(uh, 1), a8O = aOJ - 2 < e8 ? (a8O = aO1.getTime() - 6e4 * aO6[
								data.aOB], new Date(a8O + (e8 - (aOJ - 2)) * (aO0.getTime() - a8O))) : new Date(aO1.getTime() - 6e4 * (aOJ - e8 - 1) * aO6[data.aOB]), aOJ = bA.a2G.a33(a8O), e8 = bA.qa.measureText(aOJ), a8O = bL.hv(aO2, aNu +
								.5 * e8, aNu + aNw - .5 * e8), uh.fillStyle = bA.color.na(70, 50, 20), uh.fillRect(a8O - .52 * e8, aNv + aNx, 1.04 * e8, .55 * aNz), uh.fillStyle = colors[0], uh.fillText(aOJ, a8O, aOL), uh.font = bA.qa.sO(0,
								.25 * aNu), bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 2), a8O = .92 * aNu, aOJ = (aOT / 1e3).toFixed(3), e8 = bA.qa.measureText(aOJ), aOL = a8O - 1.04 * e8, uh.fillStyle = bA.color.na(70, 50, 20), uh
							.fillRect(aOL, aOK - .1625 * aNu, aNu - aOL, .275 * aNu), uh.fillStyle = colors[aOS], uh.fillText(aOJ, a8O, aOK))
					}
				}(aOJ, aOL, aOK)
			}(), uh.lineWidth = bc.yv, uh.strokeStyle = bB.ni, uh.beginPath(), uh.moveTo(aNu, aNv), uh.lineTo(aNu, aNv + aNx), uh.lineTo(aNu + aNw, aNv + aNx), uh.stroke();
		var aB, fontSize = .5 * aNy,
			g = (uh.font = bA.qa.sO(0, fontSize), bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 0), data.data),
			en = g.length,
			ew = aNv - .5 * aNy,
			qH = "";
		for (aB = 0; aB < en; aB++) qH += g[aB].name + "  ";
		qH = qH.trim();
		var aOX = bA.qa.measureText(qH),
			eu = .5 * (h.i - aOX);
		for (aOX > h.i && (eu = 0, uh.font = bA.qa.sO(0, h.i / aOX * fontSize)), aB = 0; aB < en; aB++) uh.fillStyle = colors[aB], uh.fillText(g[aB].name, eu, ew), eu += bA.qa.measureText(g[aB].name + "  ")
	}, this.h0 = function(lN, lO) {
		aOa(lN, lO)
	}, this.a1R = function(lN, lO) {
		aOa(lN, lO)
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	};
	var aB, dt, a31, hf, eq = data.data,
		en = eq.length,
		max = 1;
	for (aB = 0; aB < en; aB++) max = Math.max(max, eq[aB].aOC.length);
	for (aB = 0; aB < en; aB++)
		for (; eq[aB].aOC.length < max;) eq[aB].aOC.unshift(0);
	dt = new Date, a31 = 6e4 * dt.getTimezoneOffset(), hf = dt.getTime() - a31, aO0 = new Date(hf), 6 === data.aOB ? function(dt, a31) {
		var aOE = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aO1 = dt < 12 ? new Date(Date.UTC(aOE, dt) - a31) : new Date(Date.UTC(aOE + 1, 0) - a31)
	}(dt, a31) : (a31 = 6e4 * aO6[data.aOB], aO1 = data.aOB <= 4 ? new Date(hf + a31 - dt.getTime() % a31) : new Date(hf + a31 - (dt.getTime() + 2592e5) % a31)), hf = bA.color, colors = [bB.ni, hf.na(255, 0, 0), hf.na(0, 200, 0), hf.na(80, 80,
		255), hf.na(255, 255, 0), hf.na(255, 0, 255), hf.na(0, 255, 255), hf.na(255, 140, 0), hf.na(128, 128, 128), hf.na(0, 255, 140)], aMo = new uR(L(254) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aOB] + ", " + bA.a2G.a30(aO0), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(255), function() {
			t.u(14)
		})
	], !1)
}

function aMV() {
	var aMo, aMp, qV;
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aMp.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(L(256), [new w("⬅️ " + L(37), function() {
		t.aMm(13)
	})]), aMp = new qT(aMo.uX, ((qV = []).push(function() {
		var aN7 = new qD,
			aNG = (aN7.qG(L(257)), aN7.qI(L(258)), new w(L(259), function() {
				bj.s1.s2(130, 0), t.y.aOf()
			}, 0, 0, 1)),
			rN = new rO(bj.eK.data[126], 0, function() {
				aNG.button.click()
			});
		return aN7.qR(rN), rN.e.placeholder = "a,b,c", rN.e.style.marginTop = "0.5em", aN7.qR(new s4([aNG.button])), aN7
	}()), qV.push(function() {
		var aN7 = new qD,
			aNG = new w(L(259), function() {
				bj.s1.s2(130, 1), t.y.aOf()
			}, 0, 0, 1),
			aOg = new rO(bj.eK.data[129], 1, function() {
				aOg.e.focus()
			}),
			aOh = new rO(bj.eK.data[128], 1, function() {
				aNG.button.click()
			});
		return aN7.qG(L(260)), aN7.qR(aOh), aOh.e.style.marginBottom = "0.5em", aN7.qG(L(261)), aN7.qR(aOg), aN7.qR(new s4([aNG.button])), aN7
	}()), qV.push(function() {
		var aN7 = new qD;
		return aN7.qG(L(262)), bj.eK.data[125].uQ = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aN7.qO(new uM(bj.eK.data[125])), aN7
	}()), qV.push(function() {
		var aN7 = new qD;
		return aN7.qG(L(263)), aN7.qR(new ry(bj.eK.data[127], L(264))), aN7
	}()), qV))
}

function aMU() {
	var aMo, aOi, aNw, aOj, aOk, aOl, colors = [0, 0, 0],
		aOm = -1;

	function aOp(aB) {
		var aOq = aOi.ew + aB * (bc.gap + aOl);
		uh.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", uh.fillRect(aOj, aOq, colors[aB] * aOk, aOl), uh.strokeStyle = bB.ni, uh.strokeRect(aOj, aOq, aOk,
			aOl), uh.fillStyle = bB.ni, uh.font = bA.qa.sO(0, .32 * aOl), bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 0), uh.fillText(L(0 === aB ? 267 : 1 === aB ? 268 : 269) + aOn(aB), aOj + bc.gap, aOq + .53 * aOl)
	}

	function aOn(aB, aOr) {
		return aOr = aOr || 256, bL.hv(Math.floor(aOr * colors[aB]), 0, aOr - 1)
	}

	function a1v(lN, lO) {
		return !(lN < aOj || lO < aOi.ew || lN > aOi.eu + aOi.i || lO > aOi.ew + aOi.j)
	}
	this.show = function() {
		var fF = bj.eK.data[121].value;
		colors[0] = (fF >> 12) / 63, colors[1] = (fF >> 6 & 63) / 63, colors[2] = (63 & fF) / 63, aMo.show(), this.resize()
	}, this.rr = function() {
		bj.s1.s2(121, (aOn(0, 64) << 12) + (aOn(1, 64) << 6) + aOn(2, 64)), aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aOi.resize();
		var f8 = h.k,
			uf = aMo.uc(),
			aOo = (aOi.ew = Math.max(aOi.ew, f8 * uf.ru + bc.gap), f8 * uf.ue - 2 * bc.gap);
		aOi.j = Math.min(aOi.j, aOo), aOi.i = 2 * aOi.j, aOi.ew = f8 * uf.ru + .5 * (f8 * uf.ue - aOi.j), aOi.eu = .5 * (h.i - aOi.i), aNw = .25 * aOi.i, aOj = aOi.eu + aNw + bc.gap, aOk = aOi.i - aNw - bc.gap, aOl = (aOi.j - 2 * bc.gap) / 3
	}, this.ug = function() {
		var e7, tC, f7;
		aMo.ug(), uh.lineWidth = bc.yv, e7 = aOn(0), tC = aOn(1), f7 = aOn(2), uh.fillStyle = "rgb(" + e7 + "," + tC + "," + f7 + ")", uh.fillRect(aOi.eu, aOi.ew, aNw, aOi.j), uh.strokeStyle = bB.ni, uh.strokeRect(aOi.eu, aOi.ew, aNw, aOi.j), uh
			.fillStyle = e7 + tC + f7 < 306 && tC < 150 ? bB.ni : bB.nZ, bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 1), uh.font = bA.qa.sO(0, .1 * aOi.j), uh.rotate(-Math.PI / 2), uh.fillText(L(266), -aOi.ew - .5 * aOi.j, aOi.eu + .5 * aNw),
			uh.setTransform(1, 0, 0, 1, 0, 0), aOp(0), aOp(1), aOp(2)
	}, this.h0 = function(lN, lO) {
		a1v(lN, lO) && (aOm = bL.hv(Math.floor((lO - aOi.ew) / (aOl + .75 * bc.gap)), 0, 2), colors[aOm] = bL.hv((lN - aOj) / aOk, 0, 1), bf.dl = !0)
	}, this.a1R = function(lN) {
		-1 !== aOm && (colors[aOm] = bL.hv((lN - aOj) / aOk, 0, 1), bf.dl = !0)
	}, this.a1U = function(lN, lO, deltaY) {
		a1v(lN, lO) && (lN = bL.hv(Math.floor((lO - aOi.ew) / (aOl + .75 * bc.gap)), 0, 2), colors[lN] = bL.hv(colors[lN] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a1p = function() {
		0 <= aOm && (aOm = -1, bf.dl = !0)
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(L(265), [new w("⬅️ " + L(37), function() {
		t.y.aC1()
	})], !1), aOi = new rB([.5, .25], [.5, .5], 1)
}

function aMc() {
	var aNi, aNj, aNk, r9;

	function aNl() {
		aNn(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aMn()[19] = null, t.a17()
	}

	function aOs() {
		aNn(), t.u(21)
	}

	function aNn() {
		1 === aD.data.gameMode ? aD.a4O.a4T() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qi.a2b(aNk.uy(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, r9 = [new w("⬅️ " + L(37), aNl)], 1 === aD.data.gameMode && r9.push(new w(L(270), aOs, 1, 1)), aNi = new uR(L(271), r9), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), 0 === aD.data.gameMode && (aN7.qO(new uM({
			uQ: [L(272), L(250)],
			value: aD.data.colorsType
		}, function(e8) {
			aNn(), aD.data.colorsType = e8, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ek || (aD.data.colorsData = new Uint32Array(aD.ek)), t.u(21)
		})), aN7.qR(new sE));
		aN7.qR(new ry({
			value: aD.data.selectableColor
		}, L(273), function(value) {
			aD.data.selectableColor = value
		})), qV.push(aN7)
	}(r9 = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qV) {
		var aN7 = new qD;
		aN7.qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.colorsData, 1)), aN7.qR(aNk), qV.push(aN7)
	}(r9) : (aD.a4O.a4T(), r9.push(function() {
		var aN7 = new qD;
		aN7.qG(L(253));
		for (var aB = 0; aB < bg.a0I.length; aB++) {
			var hf = (aB + 1) % bg.a0I.length,
				e = aN7.qM((0 == hf ? "" : "Team ") + bg.a0I[hf]);
			aB && (e.style.marginTop = "0.5em"), aN7.qR(new rO({
				e8: -1,
				value: aD.data.teamPlayerCount[hf]
			}, 1, 0, function(e) {
				aNi.uY[1].qu(0);
				var playerCount = bL.hv(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aOu] = playerCount
			})).e.aOu = hf
		}
		return aN7
	}())), r9))
}

function sp(id, a3k, aOv) {
	var aMo, aOw;

	function aP1() {
		aOw.qW.innerHTML += "<br>" + L(276)
	}

	function aP0() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.s1.s2(110, bF.sr.ss(bF.sr.st(8))), b0.aNE.aPF()
	}
	this.aOx = !0, this.aOy = id, this.show = function() {
		aMo.show(), this.resize(), 15 === id ? (b0.y.aOz(id) ? aP0 : aP1)() : 16 === id ? b0.y.aOz(id) ? b0.aBy.aP2(2) : aP1() : 17 === id ? b0.y.aOz(id) ? b0.aBy.aP2(3) : aP1() : 18 === id ? (b0.y.close(0, 3253), b0.y.aFX(0, id), aP1()) : 21 ===
			id ? b0.y.aOz(id) ? b0.aP3.aP4(a3k.t7, a3k.t8, a3k.t9) : aP1() : 22 === id ? b0.y.aOz(id) ? b0.aP3.aP5(a3k.t7, a3k.aP6, a3k.aP7) : aP1() : 23 === id ? b0.y.aOz(id) ? b0.aP3.aP8(a3k.aOB, a3k.a0c) : aP1() : 24 === id ? b0.y.aOz(id) ? b0
			.aP3.aP9(a3k.aOB, a3k.t8, a3k.t9) : aP1() : 25 === id ? b0.y.aOz(id) ? b0.aNE.aNU(a3k) : aP1() : 28 === id ? b0.y.aOz(id) ? b0.aP3.aPA(a3k.t7, a3k.aP6, a3k.aP7) : aP1() : 29 === id && (b0.y.aOz(id) ? b0.aNE.aPB(a3k) : aP1())
	}, this.aPC = function() {
		15 === id ? aP0() : 16 === id ? b0.aBy.aP2(2) : 17 === id ? b0.aBy.aP2(3) : 18 === id ? t.u(8, this.aML, new sp(16)) : 21 === id ? b0.aP3.aP4(a3k.t7, a3k.t8, a3k.t9) : 22 === id ? b0.aP3.aP5(a3k.t7, a3k.aP6, a3k.aP7) : 23 === id ? b0.aP3
			.aP8(a3k.aOB, a3k.a0c) : 24 === id ? b0.aP3.aP9(a3k.aOB, a3k.t8, a3k.t9) : 25 === id ? b0.aNE.aNU(a3k) : 28 === id ? b0.aP3.aPA(a3k.t7, a3k.aP6, a3k.aP7) : 29 === id ? b0.aNE.aPB(a3k) : 1e3 === id && (this.aOy = id = 25, b0.aNE.aNU(
				a3k))
	}, this.aPD = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aML) : 17 === code ? (b0.y.close(0, 3252), bj.y.vX(0), bj.eK.data[117].uQ && 0 < bj.eK.data[117].uQ.length ? (bu = bj.y.vY(0), bj.s1.s2(105, bu.sm), bj.s1.s2(106, bu
			.password), t.u(8, this.aML, new sp(16))) : (bj.s1.s2(105, ""), t.y.aC1())) : 21 === code ? t.u(10, this.aML, new aPE(data)) : 23 === code ? t.u(13, this.aML, new aNt({
			data: data,
			aOB: a3k.aOB
		})) : 25 === code && (t.y.aMW.sm = a3k.sm, t.u(15, this.aML)))
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aOw.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(L(274), [new w("⬅️ " + L(37), function() {
		aOv ? t.u(29) : t.y.aC1()
	})]), aOw = new s3(aMo.uX, L(275))
}

function aMa() {
	var aNi, aNj, qV;

	function aPI() {
		var gG;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4O.a4T()), gG = bA.qi.a2V(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gG) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aNl() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aPK(), aD.data.canvas = null, t.u(5, 5)
	}

	function aPK() {
		b9.pu.dd(), bj.s1.s2(156, b9.a4f.zP())
	}

	function aPG() {
		aD.data.isReplay = 0, aPK(), aD.a4O.a4q(), aa.aFi(), aD.a4O.a4n(), aD.data.canvas = 2 === aD.data.mapType ? bS.wU : null, aD.a4S(), aD.a4Q = 1
	}

	function aPW() {
		aPI();
		for (var g = [aPN(), aPO(), aPP()], aB = 3; aB < 6; aB++) aNj.qW.removeChild(aNj.qX[aB].qF), aNj.qX[aB] = g[aB - 3], aNj.qW.appendChild(aNj.qX[aB].qF);
		aNj.resize()
	}

	function aPN() {
		var aPX, aN7 = new qD;
		return aN7.qG(L(271)), aPX = 0 === aD.data.gameMode ? [L(272), L(250)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aN7.qM(aPX), aN7.qR(new s4([new w(L(280), function() {
			t.u(21)
		}).button])), aN7
	}

	function aPO() {
		var aN7 = new qD,
			g = (aN7.qG(L(62)), [L(249) + ": " + aE.kL[aD.data.botDifficultyValue], L(251), L(252), L(250)]);
		return aN7.qM(g[aD.data.botDifficultyType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(25)
		}).button])), aN7
	}

	function aPP() {
		var aN7 = new qD,
			g = (aN7.qG("Spawning"), [L(272), L(282), L(250)]);
		return aN7.qM(g[aD.data.spawningType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(24)
		}).button])), aN7
	}
	this.show = function() {
		aNi.show(), this.resize(), aNi.uX.scrollTop = t.y.aHd[0]
	}, this.rr = function() {
		t.y.aHd[0] = aNi.uX.scrollTop, aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR("🔧 " + L(277), [new w("⬅️ " + L(37), aNl), new w(L(278), aPG)]), aPI(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.wU : 1 === aD.data.mapType ? aD.data.canvas = bS.aKG(bS.a4o(aD.data), 0).wU : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aKG(bS.a4o(aD.data), aD.data.mapSeed).wU)), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD,
			a2l = (aN7.qG(L(279)), aD.data.canvas);
		a2l.style.width = "100%", aN7.qR({
			e: a2l
		}), aN7.qR(new s4([new w(L(280), function() {
			t.u(20)
		}).button])), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7 = new qD;
		aN7.qG(L(253)), aN7.qR(new rO({
			e8: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.hv(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qi.a2V(aD.data.teamPlayerCount, 0), aD.a4O.a4T(), bA.qi.a2V(aD.data.teamPlayerCount, 0) !== e) && aPW()
		})), qV.push(aN7)
	}(qV), function(qV) {
		var aN7 = new qD;
		aN7.qG(L(281)), aN7.qO(new uM({
			uQ: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e8) {
			aD.data.gameMode !== e8 && (aD.data.gameMode = e8, aPW())
		})), qV.push(aN7)
	}(qV), qV.push(aPN()), qV.push(aPO()), qV.push(aPP()), function(qV) {
		var aN7 = new qD,
			g = (aN7.qG(L(283)), [L(284), L(285), L(250)]);
		aN7.qM(g[aD.data.playerNamesType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(23)
		}).button])), qV.push(aN7)
	}(qV), function(qV) {
		var aN7 = new qD,
			g = (aN7.qG(L(246)), [L(248), L(249) + ": " + aD.data.aIncomeValue, L(250)]);
		aN7.qM(g[aD.data.aIncomeType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(22)
		}).button])), qV.push(aN7)
	}(qV), function(qV) {
		var aN7 = new qD,
			g = (aN7.qG(L(286)), [L(248), L(249) + ": " + aD.data.tIncomeValue, L(250)]);
		aN7.qM(g[aD.data.tIncomeType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(26)
		}).button])), qV.push(aN7)
	}(qV), function(qV) {
		var aN7 = new qD,
			g = (aN7.qG(L(287)), [L(248), L(249) + ": " + aD.data.iIncomeValue, L(250)]);
		aN7.qM(g[aD.data.iIncomeType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(27)
		}).button])), qV.push(aN7)
	}(qV), function(qV) {
		var aN7 = new qD,
			g = (aN7.qG(L(288)), [L(248), L(249) + ": " + aD.data.sResourcesValue, L(250)]);
		aN7.qM(g[aD.data.sResourcesType]), aN7.qR(new s4([new w(L(280), function() {
			t.u(28)
		}).button])), qV.push(aN7)
	}(qV), function(qV) {
		var aN7 = new qD;
		aN7.qG(L(289)), aN7.qR(new s4([new w(L(290), function() {
			t.x(), aD.a4O.a4r(), t.y.aHd[0] = 0, t.u(19)
		}).button])), aN7.qR(new s4([new w(L(291), function() {
			bm.aHS()
		}).button])), aN7.qR(new s4([new w(L(292), function() {
			return bm.aHU(), !0
		}).button])), qV.push(aN7)
	}(qV), qV))
}

function aMl() {
	var aNi, rT = !0;

	function rk(rj, a4v) {
		var qF = document.createElement("div"),
			aPZ = document.createElement("span"),
			aPa = document.createElement("span");
		aPZ.textContent = aW.aAr(a4v.eM) + ":", aPZ.style.color = bB.nx, aPZ.style.paddingRight = "0.4em", aPZ.style.display = "table-cell", aPZ.style.width = "6ch", aPZ.style.textAlign = "end", qF.appendChild(aPZ), aPa.textContent = a4v.qH, qF
			.appendChild(aPa), qF.style.display = "table", a4v.pI && function(qF, pI) {
				{
					var aHO;
					pI >= 1024 - aj.rq.yi ? ((aHO = document.createElement("img")).src = aj.wX.yW[pI - 1024 + aj.rq.yi].toDataURL(), aHO.style.width = "1.5em", aHO.style.height = "1.5em", aHO.style.verticalAlign = "middle", qF.appendChild(aHO)) : ((
						aHO = document.createElement("span")).textContent = aj.rq.yx(pI), aHO.style.display = "inline-block", aHO.style.fontSize = "1.5em", aHO.style.lineHeight = "1em", aHO.style.verticalAlign = "middle", qF.appendChild(aHO))
				}
			}(qF, a4v.pI), rj.appendChild(qF)
	}

	function rn() {
		rT && (aNi.uX.scrollTop = aNi.uX.scrollHeight)
	}
	this.clear = function() {
		aNi.uX.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a5o = bq.a4z(), en = a5o.length, rj = document.createDocumentFragment(), aB = 0; aB < en; aB++) rk(rj, a5o[aB]);
		aNi.uX.appendChild(rj), rn(), aNi.show(), this.resize(), rT = !0, rn()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNi.uX.style.padding = "0.4em " + bA.qa.qj(bc.qg)
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, this.yP = function(a4v) {
		var rj = document.createDocumentFragment();
		rk(rj, a4v), aNi.uX.appendChild(rj), rn()
	}, (aNi = new uR(L(293), [new w("⬅️ " + L(37), function() {
		t.aMm(1)
	})])).uX.style.overflowY = "auto", aNi.uX.addEventListener("scroll", function() {
		rT = aNi.uX.scrollTop >= aNi.uX.scrollHeight - aNi.uX.clientHeight - 2
	})
}

function aMi() {
	var aNi, aNj, aNk, qV;

	function aNl() {
		aNn(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		2 === aD.data.iIncomeType && bA.qi.a2b(aNk.uy(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(287), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), aN7.qO(new uM({
			uQ: [L(248), L(249), L(250)],
			value: aD.data.iIncomeType
		}, function(e8) {
			aNn(), 2 !== e8 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ek), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e8, t.u(27)
		})), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7;
		1 === aD.data.iIncomeType && ((aN7 = new qD).qG("Value"), aN7.qR(new rO({
			e8: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qV.push(aN7))
	}(qV), function(qV) {
		var aN7;
		2 === aD.data.iIncomeType && ((aN7 = new qD).qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.iIncomeData, 4)), aN7.qR(aNk), qV.push(aN7))
	}(qV), qV))
}

function aMQ() {
	var aPc, aPd, aOi, rN, aPe;
	this.aGG = new sx, aOi = new rB([.45, .27], [.5, .5], 2 / 3), aPd = [new w("⚔️<br>" + L(294), function() {
			aPf(0)
		}, bB.oB), new w("🗡️<br>" + L(277), function() {
			aPf(1)
		}, bB.oT), new w("🔑<br>" + L(295), function() {
			aPf(2)
		}, bB.ol), new w("☰<br>" + L(296), function() {
			aPf(3)
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
	for (var aB = 0; aB < aPd.length; aB++) aPd[aB].button.style.position = "absolute";

	function aPf(e8) {
		a0.a1.setState(10), ab.tG() || ab.aG7(), 0 === e8 ? t.y.a4i() : 1 === e8 ? (b9.aHn.wF(bj.eK.data[156].value, 1) || aD.a4O.a4r(), t.u(19)) : 2 === e8 ? 0 !== a0.id || bj.eK.data[140].value ? t.u(8, t.so, new sp(16)) : t.y.aPg(t.so, 16) : 3 ===
			e8 && t.u(1)
	}
	rN.e.style.position = "absolute", rN.e.style.textAlign = "center", rN.e.placeholder = L(297), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGG.show(), aPd[4].qu(bA.color.a2s(bj.eK.data[121].value)), this.resize(), document.body.appendChild(rN.e);
		for (var aB = 0; aB < aPd.length; aB++) document.body.appendChild(aPd[aB].button);
		1 !== a0.id || a0.dv < 5 || (aPe && bf.eM > aPe + 144e5 ? a0.vI.setState(14) : aPe = bf.eM)
	}, this.rr = function() {
		this.aGG.rr(), document.body.removeChild(rN.e);
		for (var aB = 0; aB < aPd.length; aB++) document.body.removeChild(aPd[aB].button)
	}, this.resize = function() {
		this.aGG.resize(), this.aGG.resize(), aOi.resize();
		var gap = .5 * bc.gap,
			tl = 10 / 99 * .84 * aOi.i,
			aPj = .16 * aOi.j,
			a8w = .19 * aOi.i,
			eu = aOi.eu + a8w,
			tl = aOi.ew + tl + 3 * gap,
			i = .5 * (aOi.i - gap) - a8w,
			a8w = aOi.i - 2 * a8w - aPj - gap,
			a8w = (bA.qa.tE(rN.e, eu, tl, a8w, aPj), bA.qa.tE(aPd[4].button, eu + a8w + gap, tl, aPj, aPj), .5 * (aOi.ew + aOi.j - (tl += aPj + gap) - gap));
		bA.qa.tE(aPd[0].button, eu, tl, i, a8w), bA.qa.tE(aPd[1].button, eu + i + gap, tl, i, a8w), bA.qa.tE(aPd[2].button, eu, tl + a8w + gap, i, a8w), bA.qa.tE(aPd[3].button, eu + i + gap, tl + a8w + gap, i, a8w);
		bA.qa.tE(aPd[5].button, eu, tl + a8w * 2 + gap * 2, i * 2 + gap, a8w / 3);
		bA.qa.tE(aPd[6].button, eu, tl + a8w * 2.33 + gap * 3, i * 2 + gap, a8w / 3);
		for (var aB = 0; aB < aPd.length; aB++) aPd[aB].button.style.font = bA.qa.sO(0, bA.qa.a38(.065 * aOi.j)), bA.qa.qk(aPd[aB].button, 5);
		rN.e.style.font = bA.qa.sO(0, bA.qa.a38(.08 * aOi.j)), bA.qa.qk(rN.e, 5)
	}, this.ug = function() {
		if (aa.aFm(), aT.ug(), aO.ug(), bY.ug(), ab.tG()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aOi.i * 0.03);
				uh.font = bA.qa.sO(1, size);
				uh.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = uh.measureText(text).width;
				uh.textAlign = "left";
				uh.textBaseline = "middle";
				uh.fillText(text, uh.canvas.width - textLength - size / 2, size);
			};
			uh.imageSmoothingEnabled = !1;
			var f8 = ab.aFp("territorial.io"),
				nK = .84 * aOi.i / f8.width;
			uh.setTransform(nK, 0, 0, nK, aOi.eu + .08 * aOi.i, aOi.ew), aPc = aPc || bA.a2C.a3i(f8, bA.a2C.a3o, [0, 0, 0]);
			for (var eu = -1; eu <= 1; eu += 2)
				for (var ew = -1; ew <= 1; ew += 2) uh.drawImage(aPc, eu, ew);
			uh.drawImage(f8, 0, 0), uh.imageSmoothingEnabled = !0;
			var z4 = ab.aFp("logo"),
				aPl = .6666 * nK * f8.height / z4.height,
				nL = .5 * h.i,
				nM = aOi.ew + .5 * nK * f8.height - .5 * aPl * z4.height;
			uh.setTransform(aPl, 0, 0, aPl, nL - .6 * nK * f8.width, nM), uh.drawImage(z4, 0, 0), uh.setTransform(aPl, 0, 0, aPl, nL + .6 * nK * f8.width - aPl * z4.width, nM), uh.drawImage(z4, 0, 0), uh.setTransform(1, 0, 0, 1, 0, 0), uh
				.imageSmoothingEnabled = !0
		}
	}
}

function aMX() {
	var aMo, aPm, aPn, uS;

	function aPo(aB) {
		t.u(8, t.so, new sp(21, {
			t7: aB,
			t8: 0,
			t9: 10
		}))
	}
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aPm.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aPn = [new w(L(298), function() {
		aPo(1)
	}, 0, 0, 1), new w(L(299), function() {
		aPo(2)
	}, 0, 0, 1), new w(L(300), function() {
		aPo(3)
	}, 0, 0, 1), new w(L(301), function() {
		aPo(0)
	}, 0, 0, 1), new w(L(302), function() {
		aPo(9)
	}, 0, 0, 1), new w(L(303), function() {
		aPo(10)
	}, 0, 0, 1), new w(L(304), function() {
		aPo(11)
	}, 0, 0, 1)], uS = [new w("⬅️ " + L(37), function() {
		t.a17()
	})], aMo = new uR(L(305), uS), aPm = new r8(aPn, aMo.uX)
}

function aCP(title, qN, aPp) {
	var aMo, aOw;
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aOw.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aPp = aPp || [new w("⬅️ " + L(37), function() {
		t.a17()
	}, bB.oN)], aMo = new uR(title, aPp), aOw = new s3(aMo.uX, qN), bA.qa.textAlign(aMo.uX.style, 1)
}

function aPE(data) {
	var aMo, aPq, f8, se;

	function aPr(jQ) {
		var en = data.data.length;
		if (en) {
			for (var t8, max = min = parseInt(data.data[0][0]), aB = 1; aB < en; aB++) var aED = parseInt(data.data[aB][0]),
				min = Math.min(aED, min),
				max = Math.max(aED, max);
			t8 = jQ < 0 ? min + jQ : max + 1, t.u(8, t.a4x().aML, new sp(21, {
				t7: data.t7,
				t8: t8,
				t9: t8 + Math.abs(jQ)
			}))
		}
	}
	this.show = function() {
			aMo.show(), this.resize()
		}, this.rr = function() {
			aMo.rr()
		}, this.resize = function() {
			aMo.resize(), aPq.resize()
		}, this.a1z = function(f8) {
			2 === f8 && aMo.uY[0].qr()
		}, f8 = data.data.length ? 0 : 1, f8 = [new w("⬅️ " + L(37), function() {
			t.a17()
		}), new w(L(306), function() {
			aPr(-10)
		}, f8, 0, 1), new w(L(307), function() {
			aPr(10)
		}, f8, 0, 1), new w(L(255), function() {
			t.u(11, 10, new aPs({
				t7: data.t7
			}))
		})], se = [L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(303), L(304), L(318)], aMo = new uR(se[data.t7], f8),
		function() {
			var aB, eq = {
					sY: []
				},
				sY = eq.sY,
				aPu = data.data,
				en = aPu.length;
			en && 0 === aPu[0][0] && 0 <= (e8 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t7]) && (t.y.tA[e8] = aPu[0][1]);
			var nK = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t7],
				a3u = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t7],
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
			if (eq.se = e8[data.t7], eq.sj = [
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
				][data.t7], 0 === data.t7 || 2 === data.t7 || 3 === data.t7 || 9 === data.t7 || 10 === data.t7 || 11 === data.t7)
				for (aB = 0; aB < en; aB++) sY.push([{
					fF: aPu[aB][0] + 1 + ".",
					dt: 0
				}, {
					fF: aPu[aB][1],
					dt: 1,
					sm: aPu[aB][4],
					sn: aPu[aB][3]
				}, {
					fF: (nK * aPu[aB][2]).toFixed(a3u),
					dt: 0
				}]);
			else if (12 === data.t7)
				for (aB = 0; aB < en; aB++) {
					var aPx = aPu[aB][3];
					sY.push([{
						fF: "" + aPu[aB][0],
						dt: 0
					}, {
						fF: "" + aPu[aB][4],
						dt: 0
					}, {
						fF: aPu[aB][5],
						dt: 1,
						sm: aPu[aB][1],
						sn: 0
					}, {
						fF: aPu[aB][6],
						dt: 1,
						sm: aPu[aB][2],
						sn: 0
					}, {
						fF: bo.eE(aPx % 16, aPx >> 4),
						dt: 0
					}])
				} else if (1 === data.t7)
					for (aB = 0; aB < en; aB++) sY.push([{
						fF: aPu[aB][0] + 1 + ".",
						dt: 0
					}, {
						fF: aPu[aB][1],
						dt: 0
					}, {
						fF: (nK * aPu[aB][2]).toFixed(a3u),
						dt: 0
					}, {
						fF: aPu[aB][3],
						dt: 1,
						sm: aPu[aB][5],
						sn: aPu[aB][4]
					}]);
				else if (4 === data.t7 || 5 === data.t7 || 6 === data.t7 || 7 === data.t7 || 8 === data.t7)
				for (aB = 0; aB < en; aB++) {
					var aPy = aPu[aB][5];
					4 === data.t7 || 8 === data.t7 ? "100%" === (aPy = (aPy % 64 * 100 / (aPy >> 6)).toFixed(0) + "%") && (4 === data.t7 ? aPy += " (" + L(340) + ")" : aPy += " (" + L(341) + ")") : 5 === data.t7 ? 32768 <= aPy && (aPy = -(aPy -
						32768)) : aPy = (nK * aPy).toFixed(a3u), sY.push([{
						fF: "" + aPu[aB][0],
						dt: 0
					}, {
						fF: "" + aPu[aB][6],
						dt: 0
					}, {
						fF: aPu[aB][7],
						dt: 1,
						sm: aPu[aB][1],
						sn: aPu[aB][2]
					}, {
						fF: aPu[aB][8],
						dt: 1,
						sm: aPu[aB][3],
						sn: aPu[aB][4]
					}, {
						fF: "" + aPy,
						dt: 0
					}])
				}
			aPq = new sX(aMo.uX, eq)
		}()
}

function aPs(a3k) {
	var aMo, aMp, qV;
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aMp.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(L(342), [new w("⬅️ " + L(37), function() {
		t.aMm(10)
	})]), aMp = new qT(aMo.uX, ((qV = []).push(function() {
		var aNG, aN7 = new qD,
			aOg = new rO(bj.eK.data[132], 1, function() {
				aNG.button.click()
			}),
			aOh = new rO(bj.eK.data[131], 1, function() {
				aOg.e.focus()
			});
		aN7.qG(L(260)), aN7.qR(aOh), aOh.e.style.marginBottom = "0.8em", aN7.qG(L(261)), aN7.qR(aOg);
		return aNG = new w(L(259), function() {
			t8 = Math.floor(aOh.e.value), t9 = Math.floor(aOg.e.value);
			var t9, t8 = {
				a2T: Math.min(t8, t9),
				aLw: Math.max(t8, t9)
			};
			t.u(8, t.a4y(10).aML, new sp(21, {
				t7: a3k.t7,
				t8: t8.a2T,
				t9: t8.aLw
			}))
		}, 0, 0, 1), aN7.qR(new s4([aNG.button])), aN7
	}()), qV.push(function() {
		var aNG, aN7 = new qD,
			aOg = new rO(bj.eK.data[134], 1, function() {
				aNG.button.click()
			}),
			aOh = new rO(bj.eK.data[133], 0, function() {
				aOg.e.focus()
			});
		return aN7.qG(1 === a3k.t7 ? L(343) : L(344)), aN7.qR(aOh), aOh.e.style.marginBottom = "0.8em", aN7.qG(L(345)), aN7.qR(aOg), aNG = new w(L(259), function() {
			var aP6 = aOh.e.value.slice(0, 20),
				aP7 = Math.abs(Math.floor(aOg.e.value));
			t.u(8, t.a4y(10).aML, new sp(22, {
				t7: a3k.t7,
				aP6: aP6,
				aP7: aP7
			}))
		}, 0, 0, 1), aN7.qR(new s4([aNG.button])), aN7
	}()), qV.push(function() {
		var aNG, aN7 = new qD,
			aOg = new rO(bj.eK.data[152], 1, function() {
				aNG.button.click()
			}),
			aOh = new rO(bj.eK.data[151], 0, function() {
				aOg.e.focus()
			});
		return aN7.qG(L(346)), aN7.qR(aOh), aOh.e.style.marginBottom = "0.8em", aN7.qG(L(345)), aN7.qR(aOg), aNG = new w(L(259), function() {
			var aP6 = aOh.e.value.slice(0, 5),
				aP7 = Math.abs(Math.floor(aOg.e.value));
			t.u(8, t.a4y(10).aML, new sp(28, {
				t7: a3k.t7,
				aP6: aP6,
				aP7: aP7
			}))
		}, 0, 0, 1), aN7.qR(new s4([aNG.button])), aN7
	}()), qV))
}

function aMk() {
	var aQ2, tK, aQ5, tJ, tM, aQ3 = [new Array(4), [], new Array(2), new Array(2)],
		aQ4 = new Array(4),
		aQ6 = new Array(2),
		aQ7 = [L(61), L(302), L(347), L(348)];

	function aDy() {
		var a6o = aQ2.tX.rN.e.value.trim().slice(0, 127);
		a6o.length < 1 || (aQ2.tX.rN.e.value = "", bn.aCS.a01(a6o))
	}

	function aQA(aQC) {
		bn.y.re[3] = 1 - bn.y.re[3], aQB(3, 1, bn.y.re[3]), aQC && b0.aE9.aEA(4), bn.y.re[3] && bj.s1.s2(158, bn.y.re[0])
	}

	function aQ8(f6, f7) {
		bn.y.re[f6] !== f7 && (0 === f6 && bn.y.re[3] && aQA(0), aQB(f6, bn.y.re[f6], 0), aQB(f6, f7, 1), bn.y.re[f6] = f7, 0 === f6 ? (b0.aE9.aEA(2, f7), bn.y.re[2] ? (aQ2.tY.mV(), aQ2.tX.rb(1)) : aQ2.tX.rb(0), t.a4x().aDn(), t.a4x().aDm()) : 2 ===
			f6 && (0 === f7 ? (b0.aE9.aEA(0), aQ2.tX.mV(), aQ2.tg()) : (b0.aE9.aEA(1), aQ2.tY.mV(), aQ2.th())))
	}

	function aQB(f6, f7, color) {
		aQ2.ta[f6].r9[f7].qu(color ? bB.o7 : bB.ou)
	}

	function aQF(aD1) {
		return aD1 < 7 ? aD1 + 2 + " " + L(355) : 7 === aD1 || 10 === aD1 ? L(302) + " (Full-Sending: " + L(7 === aD1 ? 356 : 357) + ")" : 8 === aD1 ? "1v1" : L(358)
	}

	function aQG(fF) {
		var a6r = bL.du(fF, 60),
			fF = fF % 60;
		return (a6r < 10 ? "0" : "") + a6r + ":" + (fF < 10 ? "0" : "") + fF
	}
	this.aEL = function() {
		return aQ2.tX
	}, this.aCS = function(sm) {
		aQ8(2, 0);
		var qH = aQ2.tX.rN.e.value,
			sm = "@" + sm + " ";
		qH.length && !bA.rZ.a3F(qH, " ") && (sm = " " + sm), aQ2.tX.rN.e.value = qH += sm, aQ2.tX.rN.e.focus()
	}, this.aDl = function() {
		aQ2.tY.mV()
	}, this.aDn = function() {
		var aQE = bn.y.re[0],
			aQE = bn.y.rg[aQE];
		bS.a7(aQE.eT, aQE.mapSeed), tK.r9[0].button.textContent = L(279) + ": " + bS.wK.wL[aQE.eT].name, tK.r9[1].button.textContent = L(281, 0, "Mode") + ": " + aQF(aQE.aD1), tK.r9[2].button.textContent = L(352) + ": " + bS.wK.wL[aQE.aEj].name,
			tK.r9[3].button.textContent = L(353, 0, "Next Mode") + ": " + aQF(aQE.aEk), tK.r9[4].button.textContent = L(354) + ": " + aQG(aQE.aDp), tK.resize()
	}, this.aDm = function() {
		var aQE = bn.y.re[0],
			rf = bn.y.rg[aQE];
		aQ2.te(rf.tf);
		for (var aB = 0; aB < bn.tu.tv.length; aB++) aQ3[0][aB].rY.textContent = "" + bn.tu.tv[aB].length;
		var tu = bn.tu.tv[aQE],
			aQH = tu.length,
			aQI = bn.tu.tw[aQE];
		aQ3[2][1].rY.textContent = "" + aQH, aQ3[3][1].rY.textContent = "" + aQI, tK.r9[4].button.textContent = L(354) + ": " + aQG(rf.aDp);
		for (aB = 0; aB < 4; aB++) {
			var aQJ = bn.y.rg[aB];
			aQ4[aB] ? 0 === aQJ.tf && (aQ4[aB].rY.textContent = bS.wK.wL[aQJ.eT].name) : aQ4[aB] = new rX(bS.wK.wL[aQJ.eT].name, tJ.r9[aB].button, 1, 1), bA.rZ.startsWith(aQ7[aB], "🏆 ") ? aQJ.aD7 || (aQ7[aB] = aQ7[aB].substring(3), tJ.r9[aB]
				.button.textContent = aQ7[aB], tJ.r9[aB].button.appendChild(aQ3[0][aB].rY), tJ.r9[aB].button.appendChild(aQ4[aB].rY)) : aQJ.aD7 && (aQ7[aB] = "🏆 " + aQ7[aB], tJ.r9[aB].button.textContent = aQ7[aB], tJ.r9[aB].button
				.appendChild(aQ3[0][aB].rY), tJ.r9[aB].button.appendChild(aQ4[aB].rY))
		}
		var rf = "",
			aQL = "";
		0 === aQE && (rf = bn.kx.aDL(tu, 0, aQH), aQL = bn.kx.aDL(tu, 0, aQI)), aQ5[0].rY.textContent = rf, aQ5[1].rY.textContent = aQL, aQ6[1].rY.textContent = "MP: " + bn.y.aDe[0] + "   SP: " + bn.y.aDe[1] + "   Lobby: " + bA.qi.a2g(bn.tu.tv)
	}, this.aDr = function() {
		aQ2.tX.mV()
	}, this.show = function() {
		aQ2.show(), this.resize(), bn.message.show()
	}, this.rr = function() {
		aQ2.rr(), bn.uG.rr(), bn.ts.rr(), bn.message.rr()
	}, this.resize = function() {
		aQ2.resize(1 - bn.y.re[2]), bn.message.resize()
	}, this.a1z = function(f8) {
		2 === f8 ? bn.y.re[3] ? aQA(1) : aQ2.ta[3].r9[0].qr() : f8 < 2 && aQA(1)
	}, tJ = new s7([new w(aQ7[0], function() {
		return aQ8(0, 0), 2
	}), new w(aQ7[1], function() {
		return aQ8(0, 1), 2
	}), new w(aQ7[2], function() {
		return aQ8(0, 2), 2
	}), new w(aQ7[3], function() {
		return aQ8(0, 3), 2
	})], bB.ou), tK = new s7([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.ov, 1);
	var aQ9 = new s7([new w(L(349), function() {
		return aQ8(2, 0), 2
	}), new w(L(113), function() {
		return aQ8(2, 1), 2
	})], bB.ou);
	tM = new s7([new w(L(350), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bn.uA(), b0.y.a1H(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bn.uA(), b0.y.a1H(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(351), function() {
		return aQA(1), 2
	})], bB.ou), aQ2 = new tI(tJ, tK, aQ9, tM, aDy, bn.uG.aEU);
	for (var aB = 0; aB < 4; aB++) aQ3[0][aB] = new rX("0", tJ.r9[aB].button);
	aQ3[2][1] = new rX("0", aQ9.r9[1].button), aQ3[3][1] = new rX("0", tM.r9[1].button), aQ5 = [new rX("", aQ9.r9[1].button, 1, 1), new rX("", tM.r9[1].button, 1, 1)], aQB(0, bn.y.re[0], 1), aQB(2, bn.y.re[2], 1), (aQ6 = [new rX(L(253), aQ2.ti(), 1,
		0), new rX("", aQ2.ti(), 1, 1)])[0].rY.style.fontSize = "0.4em", aQ6[1].rY.style.fontSize = "0.4em"
}

function aMR() {
	var aMo, aMp, qV;
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aMp.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(L(359), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a4y(7).aML)
	}), new w(L(191), function() {
		bj.s1.s2(105, bG.sr.w4(aMp.qX[0].qE[0].e.value, 5)), bj.s1.s2(106, bG.sr.w4(aMp.qX[1].qE[0].e.value, 8)), t.u(8, t.a4y(7).aML, new sp(18))
	})]), aMp = new qT(aMo.uX, ((qV = []).push(function() {
		var aN7 = new qD;
		return aN7.qG(L(172)), aN7.qR(new rO({
			value: "",
			e8: -1
		})), aN7
	}()), qV.push(function() {
		var aN7 = new qD,
			aNI = (aN7.qG(L(174)), new rO({
				value: "",
				e8: -1
			}));
		return aNI.e.type = "password", aN7.qR(aNI), aN7.qR(new s4([new w(L(175), function(e) {
			return e.textContent === L(175) ? (e.textContent = L(176), aNI.e.type = "text") : (e.textContent = L(175), aNI.e.type = "password"), !0
		}).button])), aN7
	}()), qV))
}

function aMY() {
	var aMo, aPm, aPn, uS;

	function aPo(aB) {
		t.u(8, t.so, new sp(21, {
			t7: aB,
			t8: 0,
			t9: 10
		}))
	}
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aPm.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aPn = [new w(L(313), function() {
		aPo(5)
	}, 0, 0, 1), new w(L(314), function() {
		aPo(6)
	}, 0, 0, 1), new w(L(315), function() {
		aPo(7)
	}, 0, 0, 1), new w(L(318), function() {
		aPo(12)
	}, 0, 0, 1)], uS = [new w("⬅️ " + L(37), function() {
		t.a17()
	})], aMo = new uR(L(360), uS), aPm = new r8(aPn, aMo.uX)
}

function aMH() {
	this.eK = {}, this.tA = new Array(7), this.aMW = null, this.aMT = null, this.sV = 0, this.aHd = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4i = function() {
		t.x(), aZ.dd()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dd()
	}), this.aC1 = function() {
		t.u(0 === aa.a18() ? 5 : 0)
	}, this.aOf = function() {
		if (1 === bj.eK.data[130].value) t.u(8, t.a4x().aML, new sp(24, {
			aOB: bj.eK.data[125].value,
			t8: bj.eK.data[128].value,
			t9: bj.eK.data[129].value
		}));
		else {
			for (var g = (g = bj.eK.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a4x().aML, new sp(23, {
				aOB: bj.eK.data[125].value,
				a0c: g
			}))
		}
	}, this.aPg = function(aML, target) {
		t.u(4, aML, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aQN +
			"' target='_blank'>" + bK.aQN + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aML)
			}), new w("✅ Accept", function() {
				bj.s1.s2(140, 1), 0 === target ? t.u(2, aML) : t.u(8, aML, new sp(target))
			})]))
	}, this.aQO = function() {
		for (var aB = 0; aB < 7; aB++) this.tA[aB] = bG.vv.vz(bH.ph(5));
		this.tA[1] = "[" + this.tA[1] + "]", 5 === t.so && (t.a4x().aGG.s2(this.tA), t.a4x().resize())
	}
}

function aMb() {
	var aNi, aNj, aQP, qV;

	function aNl() {
		b6.uA(), t.aMn()[19] = null, t.a17()
	}

	function aQW() {
		aQZ(), aQX()
	}

	function aQZ() {
		aQP.qF.lastChild && aQP.qF.removeChild(aQP.qF.lastChild)
	}

	function aQX() {
		var aQa = bS.a4o(aD.data);
		aD.data.canvas = bS.aKG(aQa, aD.data.mapSeed).wU, aQY()
	}

	function aQY() {
		var a2l = aD.data.canvas;
		a2l.style.width = "100%", aQP.qF.appendChild(a2l)
	}
	this.aHN = function(a2l) {
		aD.data.canvas && aQZ(), aD.data.canvas = a2l, aQY()
	}, this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(279), [new w("⬅️ " + L(37), aNl)]), 2 === aD.data.mapType && b6.dd(), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), aN7.qO(new uM({
			uQ: [L(361), L(362), L(363)],
			value: aD.data.mapType
		}, function(e8) {
			2 === (aD.data.mapType = e8) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uA()), t.u(20)
		})), 2 <= aD.data.mapType && (aN7.qR(new sE), aN7.qR(new ry({
			value: aD.data.passableWater
		}, L(364), function(value) {
			aD.data.passableWater = value
		})), aN7.qR(new ry({
			value: aD.data.passableMountains
		}, L(365), function(value) {
			aD.data.passableMountains = value
		})));
		qV.push(aN7)
	}(qV = []), function(qV) {
		if (0 === aD.data.mapType) {
			for (var aN7 = new qD, uQ = (aN7.qG(L(279)), []), aB = 0; aB < bS.wK.aLC.length; aB++) uQ.push(bS.wK.wL[bS.wK.aLC[aB]].name);
			aN7.qO(new uM({
				uQ: uQ,
				value: aD.data.mapProceduralIndex
			}, function(e8) {
				aD.data.mapProceduralIndex = e8, aQW()
			})), qV.push(aN7)
		}
	}(qV), function(qV) {
		if (1 === aD.data.mapType) {
			for (var aN7 = new qD, uQ = (aN7.qG(L(279)), []), aB = 0; aB < bS.wK.aLD.length; aB++) uQ.push(bS.wK.wL[bS.wK.aLD[aB]].name);
			aN7.qO(new uM({
				uQ: uQ,
				value: aD.data.mapRealisticIndex
			}, function(e8) {
				aD.data.mapRealisticIndex = e8, aQW()
			})), qV.push(aN7)
		}
	}(qV), function(qV) {
		var aN7;
		2 === aD.data.mapType && ((aN7 = new qD).qG(L(279)), aN7.qR(new s4([new w(L(366), function() {
			return b6.aHG(), !0
		}).button])), qV.push(aN7))
	}(qV), function(qV) {
		(aQP = new qD).qG(L(367)), 2 !== aD.data.mapType ? aQX() : aD.data.canvas && aQY();
		qV.push(aQP)
	}(qV), function(qV) {
		var aN7, rN, aNG;
		0 === aD.data.mapType && ((aN7 = new qD).qG("Seed"), rN = new rO({
			e8: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aQW())
		}), aNG = new w(L(272), function(e) {
			var aKB = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aKB) return rN.e.value = aD.data.mapSeed = aKB, aQW(), !0
		}), aN7.qR(rN), aN7.qR(new s4([aNG.button])), qV.push(aN7))
	}(qV), function(qV) {
		var aN7, rN;
		2 === aD.data.mapType && ((aN7 = new qD).qG(L(368)), rN = new rO({
			e8: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aN7.qR(rN), qV.push(aN7))
	}(qV), qV))
}

function v(title, qN, aQb, aPp) {
	var aMo, aOw;
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aOw.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aPp = aPp || [new w("⬅️ " + L(37), function() {
		t.a17()
	})], aMo = new uR(title, aPp), aOw = new s3(aMo.uX, qN), aQb && bA.qa.textAlign(aMo.uX.style, 1)
}

function aMe() {
	var aNi, aNj, aNk, qV;

	function aNl() {
		aNn(), 2 === aD.data.playerNamesType && 1 === bA.qi.a2P(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		2 === aD.data.playerNamesType && bA.qi.a2d(aNk.uy(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(283), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), aN7.qO(new uM({
			uQ: [L(284), L(285), L(250)],
			value: aD.data.playerNamesType
		}, function(e8) {
			aNn(), aD.data.playerNamesType = e8, t.u(23)
		})), aN7.qR(new sE), aN7.qR(new ry({
			value: aD.data.selectableName
		}, L(369), function(value) {
			aD.data.selectableName = value
		})), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7;
		2 === aD.data.playerNamesType && ((aN7 = new qD).qG("Data"), aNk = new up(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ek || (aD.data.playerNamesData = new Array(aD.ek), aD.data.playerNamesData
			.fill("")), aNk.uw(bA.rZ.a47(aD.data.playerNamesData, 1, '"')), aN7.qR(aNk), qV.push(aN7))
	}(qV), qV))
}

function aMP() {
	var aNi, uu;

	function aQc() {
		t.x();
		var qH = b9.aQg(uu.uy());
		(aD.zx && 0 < qH.length && qH === b9.pu.a4e || b9.aHn.wF(qH)) && b9.aQh()
	}
	this.show = function(aQd) {
		this.aQe(aQd), aNi.show(), this.resize()
	}, this.aQe = function(aQd) {
		0 === aD.zx ? aQd ? uu.uw(aQd) : aD.a4R.length && uu.uw(aD.a4R) : (aD.gw || (b9.pu.a4e = b9.a4f.zP()), uu.uw(b9.aQf(b9.pu.a4e)))
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), uu.resize()
	}, this.a1z = function(f8) {
		2 === f8 ? aNi.uY[0].qr() : aQc()
	}, aNi = new uR(L(370), [new w("⬅️ " + L(37), function() {
		t.aMm(1)
	}), new w(L(371), function() {
		uu.uz()
	}), new w(L(372), function() {
		uu.v0()
	}), new w(L(373), function() {
		uu.clear()
	}), new w(L(374), function() {
		aQc()
	})]), uu = new up(L(375)), aNi.uX.appendChild(uu.e)
}

function aMO() {
	var aMo, aMp, qV, aBx, aN7;

	function aQi() {
		var eM;
		aBx !== bj.eK.data[12].value ? (b7.dd(), b7.aBw(), eM = bf.eM, t.u(4, 1, new v(L(378), L(379), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w("🔄 Reload", function() {
			bf.eM < eM + 1500 || a0.a1.a2()
		}, bB.o5)]))) : t.u(1)
	}
	this.show = function() {
			aBx = bj.eK.data[12].value, aMo.show(), this.resize()
		}, this.rr = function() {
			aMo.rr()
		}, this.resize = function() {
			aMo.resize(), aMp.resize()
		}, this.a1z = function(f8) {
			2 === f8 && aMo.uY[0].qr()
		}, aMo = new uR(L(376), [new w("⬅️ " + L(37), aQi), new w(L(377), function() {
			t.x(), bj.s1.vc(), t.u(2)
		})]), qV = [], (aN7 = new qD).qG(L(380)), aN7.qI(L(381)), qV.push(aN7),
		function(qV) {
			var aN7 = new qD,
				g = (aN7.qG(L(402)), b7.data.aC5());
			aN7.qO(new uM({
				uQ: g,
				value: b7.data.aC9(g)
			}, function(e8) {
				return bj.s1.s2(12, g[e8].split(":")[0]), !0
			})), qV.push(aN7)
		}(qV),
		function(qV) {
			var aN7 = new qD,
				aQl = (aN7.qG(L(400)), []);
			aN7.qR(new s4([new w(L(401), function(e) {
				bX.aQm();
				for (var aB = 0; aB < aQl.length; aB++) aQl[aB].e.value = bX.aBN[aB];
				return bA.qa.a3E(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aQn.length; aB++) {
				aN7.qI(bX.aQn[aB]);
				for (var f6 = 0; f6 < 2; f6++) {
					var e8 = 2 * aB + f6,
						rN = new rO({
							value: bX.aBN[e8],
							e8: -1
						});
					rN.e.aQo = e8, aQl.push(rN), rN.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aQp(e.target.aQo, code)
					}), f6 && (rN.e.style.marginLeft = "4%"), rN.e.style.width = "48%", aN7.qR(rN)
				}
			}
			qV.push(aN7)
		}(qV), (aN7 = new qD).qG(L(23)), aN7.qO(new uM({
			uQ: ["1", "2"],
			value: aZ.aFT - 1
		}, function(aB) {
			aZ.aFT = aB + 1
		})), qV.push(aN7), (aN7 = new qD).qG(L(382)), bj.eK.data[1].uQ = [L(383), L(384), L(385), L(386)], aN7.qO(new uM(bj.eK.data[1])), qV.push(aN7), (aN7 = new qD).qG(L(387)), bj.eK.data[9].uQ = [L(384), L(388), L(389)], aN7.qO(new uM(bj.eK.data[
			9])), qV.push(aN7), (aN7 = new qD).qG(L(390)), bj.eK.data[11].uQ = [L(391), L(9), L(392)], aN7.qO(new uM(bj.eK.data[11])), qV.push(aN7), (aN7 = new qD).qG(L(393)), aN7.qR(new ry(bj.eK.data[2])), qV.push(aN7), (aN7 = new qD).qG(L(394)),
		aN7.qR(new ry(bj.eK.data[7])), qV.push(aN7), (aN7 = new qD).qG(L(395)), aN7.qR(new ry(bj.eK.data[8])), qV.push(aN7), (aN7 = new qD).qG(L(396)), aN7.qR(new rO(bj.eK.data[5])), qV.push(aN7), (aN7 = new qD).qG(L(397)), aN7.qR(new ry(bj.eK.data[
			13], L(398))), aN7.qR(new ry(bj.eK.data[14], L(399))), qV.push(aN7), aMp = new qT(aMo.uX, qV)
}

function aMf() {
	var aNi, aNj, aNk, qV;

	function aNl() {
		aNn(), 2 !== aD.data.spawningType || bA.qi.a2P(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		2 === aD.data.spawningType && bA.qi.a2b(aNk.uy(), aD.data.spawningData, bS.aHP - 1)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(403), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD,
			uQ = (aN7.qG(L(247)), [L(272), L(282), L(250)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uQ.splice(1, 1), 0 < value) && (value = 1);
		aN7.qO(new uM({
			uQ: uQ,
			value: value
		}, function(e8) {
			aNn(), aD.data.spawningType = e8, 0 === aD.data.gameMode && 1 === e8 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ek)), t.u(24)
		})), aN7.qR(new sE), aN7.qR(new ry({
			value: aD.data.selectableSpawn
		}, L(404), function(value) {
			aD.data.selectableSpawn = value
		})), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7 = new qD;
		aN7.qG("Seed"), aN7.qR(new rO({
			e8: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qV.push(aN7)
	}(qV), function(qV) {
		var aN7;
		2 === aD.data.spawningType && ((aN7 = new qD).qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.spawningData, 2)), aN7.qR(aNk), qV.push(aN7))
	}(qV), qV))
}

function aMN() {
	var aMo, aPm, aPn, uS;

	function aQq(id) {
		0 !== a0.id || bj.eK.data[140].value ? 0 === id ? t.u(8, 1, new sp(16)) : t.u(2) : t.y.aPg(t.so, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aMo.show(), this.resize(), this.j3()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aPm.resize()
	}, this.j3 = function() {
		8 === aa.a18() && (2 <= bd.aQv ? aPn[2].qs === bB.nu && aPn[2].qu(0) : aPn[2].qs !== bB.nu && aPn[2].qu(bB.nu), !aD.gw && aM.qB(aD.eX) ? aPn[1].qs === bB.nu && aPn[1].qu(0) : aPn[1].qs !== bB.nu && aPn[1].qu(bB.nu), !aD.gw && aw.hc(aD
			.eX) ? aPn[0].qs === bB.nu && aPn[0].qu(0) : aPn[0].qs !== bB.nu && aPn[0].qu(bB.nu))
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aPn = [new w(L(405), function() {
		aQq(0)
	}), new w(L(305), function() {
		t.u(16)
	}), new w(L(360), function() {
		t.u(17)
	}), new w(L(406), function() {
		t.y.aOf()
	}, 0, 0, 1), new w(L(370), function() {
		t.u(3, 1)
	}), new w(L(407), function() {
		t.u(18)
	}), new w(L(376), function() {
		aQq(1)
	}), new w(L(408), function() {
		var se = ["Patreon", L(417), L(418), "YouTube Tutorial", "Discord", L(419), L(298), L(420), L(301), L(421), "Terms", "Privacy"],
			a3A = [bK.aNg, bK.aCM, bK.a11, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCN, bK.aQw, bK.aQx, bK.a0j, bK.aQy, bK.aQz, bK.aR0, bK.aQN];
		1 === a0.id ? (se.splice(2, 1), se.splice(0, 1), a3A.splice(2, 1), a3A.splice(0, 1)) : 2 === a0.id && (se.splice(1, 1), se.splice(0, 1), a3A.splice(1, 1), a3A.splice(0, 1)), t.u(4, 1, new v(L(408), bA.qa.a39(se, a3A), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(409), function() {
		t.u(4, 1, new v(L(409), l.dv + "<br><a href='" + bK.aQw + "' target='_blank'>" + bK.aQw + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(410), function() {
		t.u(4, 1, new v(L(410), L(422) + "<br>" + L(423), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(424), function() {
			a0.a1.a0v(), t.u(1)
		})]))
	}), new w(L(411), function() {
		a0.a1.a0w(), t.u(4, 1, new v(L(425), L(426) + " <a href='" + bK.aQN + "' target='_blank'>" + bK.aQN + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], uS = [new w("⬅️ " + L(37), function() {
		t.y.aC1()
	})], 8 === aa.a18() && (aPn.unshift(new w(L(293), function() {
		t.u(30)
	})), aPn.unshift(new w(L(414), function() {
		2 <= bd.aQv && (t.x(), be.a22(), bf.dl = !0)
	}, 0, 1)), aPn.unshift(new w(L(415), function() {
		!aD.gw && aM.qB(aD.eX) && (b8.hD.pN(), t.x(), aM.gx) && aM.a22()
	}, 0, 1)), aPn.unshift(new w(L(416), function() {
		!aD.gw && aw.hc(aD.eX) && (bV.a5K(2), b8.hD.hY(), t.x(), aM.gx) && aM.a22()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dv && aPn.push(new w(L(412), function() {
		a0.a1.a0x()
	})), aMo = new uR(L(413), uS), aPm = new r8(aPn, aMo.uX)
}

function aMj() {
	var aNi, aNj, aNk, qV;

	function aNl() {
		aNn(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		2 === aD.data.sResourcesType && bA.qi.a2b(aNk.uy(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(288), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), aN7.qO(new uM({
			uQ: [L(248), L(249), L(250)],
			value: aD.data.sResourcesType
		}, function(e8) {
			aNn(), 2 !== e8 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ek)), aD.data.sResourcesType = e8, t.u(28)
		})), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7;
		1 === aD.data.sResourcesType && ((aN7 = new qD).qG("Value"), aN7.qR(new rO({
			e8: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qV.push(aN7))
	}(qV), function(qV) {
		var aN7;
		2 === aD.data.sResourcesType && ((aN7 = new qD).qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.sResourcesData, 2)), aN7.qR(aNk), qV.push(aN7))
	}(qV), qV))
}

function aMh() {
	var aNi, aNj, aNk, qV;

	function aNl() {
		aNn(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aMn()[19] = null, t.a17()
	}

	function aNn() {
		2 === aD.data.tIncomeType && bA.qi.a2b(aNk.uy(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aNi.show(), this.resize()
	}, this.rr = function() {
		aNi.rr()
	}, this.resize = function() {
		aNi.resize(), aNj.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aNi.uY[0].qr()
	}, aNi = new uR(L(286), [new w("⬅️ " + L(37), aNl)]), aNj = new qT(aNi.uX, (function(qV) {
		var aN7 = new qD;
		aN7.qG(L(247)), aN7.qO(new uM({
			uQ: [L(248), L(249), L(250)],
			value: aD.data.tIncomeType
		}, function(e8) {
			aNn(), 2 !== e8 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ek), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e8, t.u(26)
		})), qV.push(aN7)
	}(qV = []), function(qV) {
		var aN7;
		1 === aD.data.tIncomeType && ((aN7 = new qD).qG("Value"), aN7.qR(new rO({
			e8: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hv(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qV.push(aN7))
	}(qV), function(qV) {
		var aN7;
		2 === aD.data.tIncomeType && ((aN7 = new qD).qG("Data"), (aNk = new up(0, 1, 0, 1)).uw(bA.rZ.a47(aD.data.tIncomeData, 4)), aN7.qR(aNk), qV.push(aN7))
	}(qV), qV))
}

function aMZ() {
	var aMo, aMp, qV;
	this.show = function() {
		aMo.show(), this.resize()
	}, this.rr = function() {
		aMo.rr()
	}, this.resize = function() {
		aMo.resize(), aMp.resize()
	}, this.a1z = function(f8) {
		2 === f8 && aMo.uY[0].qr()
	}, aMo = new uR(L(407), [new w("⬅️ " + L(37), function() {
		t.a17()
	})]), aMp = new qT(aMo.uX, ((qV = []).push(function() {
		function aND() {
			aR5.button.textContent = L(169), aR3.e.readOnly = !1, aR4.e.readOnly = !1, aNB.qu(1), aNB.button.style.color = bB.ni
		}
		var aN7 = new qD,
			aR2 = (aN7.qG(L(427)), new rO({
				value: bj.eK.data[105].value,
				e8: -1
			})),
			aR3 = (aR2.e.readOnly = !0, aN7.qR(aR2), aN7.qG(L(330), "0.8em"), new rO(bj.eK.data[148])),
			aR3 = new rO(bj.eK.data[148], 0, void 0, function(e) {
				aNA(bj.eK.data[149].value, e.target.value)
			}),
			aR4 = (aN7.qR(aR3), aN7.qG(L(334), "0.8em"), new rO(bj.eK.data[149], 1, void 0, function(e) {
				aNA(e.target.value, bj.eK.data[148].value)
			})),
			aR5 = (aN7.qR(aR4), new w(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aR3.e.readOnly = !0, aR4.e.readOnly = !0, aNB.qu(0), aNB.button.style.color = bB.og, bj.s1.s2(149, aR4.e.value), aNA(bj.eK.data[149].value, bj.eK.data[
					148].value)) : aND(), !0
			})),
			aNB = (aN7.qR(new s4([aR5.button])), new w(L(14), function(e) {
				return aR3.e.readOnly && b0.y.aNC(0) && (bA.qa.a3E(e), aND(), b0.aNE.aNF({
					sq: 0,
					sm: bj.eK.data[148].value,
					value: parseInt(bj.eK.data[149].value, 10)
				})), !0
			}, 1)),
			qJ = aN7.qI(),
			aNA = (aN7.qI(L(428)).style.fontWeight = "bold", function(fF, qH) {
				fF = bA.g9.a3h(fF, 2, 1e6);
				var aNH = Math.max(1, 1 + Math.floor(.01 * (fF - 100)));
				qJ.textContent = L(171, [fF, bj.eK.data[105].value, aNH, qH, fF - aNH])
			});
		return aN7.qR(new s4([aNB.button])), aNA(bj.eK.data[149].value, bj.eK.data[148].value), aN7
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
	var a9C, aR7, aR8, aR9, aR6 = !1;

	function aRA() {
		aR6 = !0, a9C = -1, aR7 = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aR7[aB] = !1;
		var xK = Math.floor(1 + .02 * h.min);
		aR8 = new Array(4), (aR9 = new Array(4))[1] = aR9[3] = aR8[0] = aR8[2] = 0, aR9[0] = aR8[3] = -xK, aR8[1] = aR9[2] = xK
	}

	function aRB() {
		if (-1 !== a9C)
			if (0 !== aD.zx && aH.nQ()) {
				for (var aRC = !1, aB = 3; 0 <= aB; aB--) aR7[aB] && (aRC = !0, iO += aR8[aB], iP += aR9[aB], af.a1R(aR8[aB], aR9[aB]), aS.a8s());
				aRC ? bf.dl = !0 : ar.nG()
			} else ar.nG()
	}
	this.a1x = function(e8) {
		0 !== aD.zx && aH.nQ() && (aR6 || aRA(), aR7[e8] = !0, -1 === a9C) && (a9C = setInterval(aRB, 20), aRB())
	}, this.a20 = function(e8) {
		if (0 !== aD.zx && (aR6 || aRA(), aR7[e8] = !1, -1 !== a9C)) {
			for (var aRC = !1, aB = 3; 0 <= aB; aB--) aRC = aRC || aR7[aB];
			aRC || this.nG()
		}
	}, this.nG = function() {
		if (aR6 && -1 !== a9C) {
			for (var aB = 3; 0 <= aB; aB--) aR7[aB] = !1;
			clearInterval(a9C), a9C = -1
		}
	}
}

function cj() {
	this.y = new aRD, this.mQ = new aRE, this.p3 = new aRF, this.aE9 = new aRG, this.aBy = new aRH, this.aNE = new aRI, this.pg = new aRJ, this.aP3 = new aRK, this.a6U = new aRL, this.aRM = new aRN, this.aRO = new aRP, this.aRQ = new aRR, this.aRS =
		new aRT, this.dd = function() {
			this.y.dd()
		}
}

function aRD() {
	var aRU, aRW;
	this.aFW = 5, this.aRV = null;

	function aRd(aB) {
		return aRW[aB].aR6 && aRU[aB].aRd()
	}

	function aRf(a13) {
		aRW[a13].eM = bf.eM, aRW[a13].aRY = !1
	}
	this.a1D = 0, this.a16 = 0, this.dd = function() {
		this.aRV = new Array(this.aFW);
		this.aRV[0] = "territorial.io";
		var aKB = ay.aKX(0);
		ay.a4U(0);
		for (var aB = 1; aB < this.aFW; aB++) this.aRV[aB] = aK.zV() + ".territorial.io";
		for (ay.a4U(aKB), aRU = new Array(this.aFW), aRW = new Array(this.aFW), aB = this.aFW - 1; 0 <= aB; aB--) aRW[aB] = {
			aR6: !1,
			eM: 0,
			aRY: !1
		};
		this.aFX(0, 0)
	}, this.aRZ = function(aB) {
		return aRU[aB]
	}, this.j3 = function() {
		for (var aB = this.aFW - 1; 0 <= aB; aB--) this.aNC(aB) && bf.eM > aRW[aB].eM + 15e3 && b0.p3.aRa(aB, aRW[aB].aRY);
		!this.aNC(0) && bf.eM > aRW[0].eM + 8e3 && (aRW[0].eM = bf.eM, this.aFX(0, 0))
	}, this.aOz = function(id) {
		return this.aFX(0, id) && this.aRb(0)
	}, this.aFX = function(a13, aML) {
		if (aRW[a13].aR6) {
			if (aRU[a13].aRd()) return aRU[a13].aRe(aML), aRU[a13].aNC();
			aRU[a13].rr()
		}
		return this.aRc(a13, aML), !1
	}, this.aRc = function(a13, aML) {
		aRW[a13].aR6 = !0, aRf(a13), aRU[a13] = new aRg, aRU[a13].dd(a13, aML)
	}, this.aRe = function(a13, aML) {
		aRd(a13) && aRU[a13].aRe(aML)
	}, this.aRh = function(a13, aML) {
		b0.aBy.aRi(a13)
	}, this.aRb = function(aB) {
		return this.aNC(aB) && aRU[aB].aRb()
	}, this.aRj = function(aB) {
		aRU[aB].aRj()
	}, this.aNC = function(aB) {
		return aRW[aB].aR6 && aRU[aB].aNC()
	}, this.send = function(a13, aC) {
		aRf(a13), aRU[a13].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a1i = function(a13) {
		8 === aa.a18() && (aRW[a13].aRY = !0, b0.mQ.aRk = !0)
	}, this.close = function(a13, aRl) {
		aRd(a13) && aRU[a13].close(aRl)
	}, this.aRm = function(a13, aRl) {
		o.a1G(aRl), aRd(a13) && aRU[a13].close(aRl)
	}, this.a1H = function(aRl) {
		for (var aB = this.aFW - 1; 0 <= aB; aB--) this.close(aB, aRl)
	}, this.aRn = function(a13, aRl) {
		for (var aB = this.aFW - 1; 0 <= aB; aB--) aB !== a13 && this.close(aB, aRl)
	}, this.a4g = function() {
		this.close(this.a1D, 3246)
	}, this.aRo = function(a13, e) {
		aRU[a13].rr(), o.a12(a13, e.code)
	}
}

function aRE() {
	this.aRk = !1, this.j3 = function() {
		bf.k7() % 250 != 249 || aD.gw || (b0.aBy.aRp(+(this.aRk && ag.mi[aD.eX]), al.kB + bN.y.lz), this.aRk = !1)
	}
}

function aRL() {
	function aSG(aSH) {
		var eq = aD.data,
			aSH = (eq.selectedPlayer = bH.ph(aSH), eq.spawningSeed = bH.ph(14), bH.ph(4)),
			aSH = (aSH < 7 ? (eq.gameMode = 1, eq.numberTeams = aSH + 2) : 9 === aSH ? (eq.gameMode = eq.isZombieMode = 1, eq.numberTeams = 2) : (eq.gameMode = 0, eq.battleRoyaleMode = 7 === aSH ? 0 : 10 === aSH ? 1 : 2), eq.isContest = bH.ph(1), bH
				.ph(6));
		return eq.mapType = bS.aD8(aSH) ? 0 : 1, bS.aD9(eq, aSH), eq.mapSeed = bH.ph(14), aSH
	}
	this.aRr = function(a13, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aRm(a13, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bH.ph(1) ? function(a13) {
			var aRv = bH.ph(6);
			0 === aRv ? function(a13) {
					if (0 === a13 && 8 !== aa.a18()) {
						t.y.aQO();
						for (var aS8 = bH.ph(12), aS9 = bH.ph(6), g = new Array(aS8), aB = 0; aB < aS8; aB++) g[aB] = bH.ph(aS9);
						aT.a9I(g)
					}
				}(a13) : 2 === aRv ? b0.aRM.aRx(a13) : 3 === aRv || 4 === aRv ? ax.dd() : 9 === aRv ? b0.aRO.aRy(a13) : 10 === aRv ? b0.aRQ.aRz() : 11 === aRv ? b0.aRO.aS0(a13) : 12 === aRv ? b0.aRQ.aS1() : 13 === aRv ? b0.aRS.aS2() :
				14 === aRv ? b0.aRS.aS3() : 15 === aRv ? b0.aRO.aS4() : 16 === aRv ? b0.aRM.aS5(a13) : 17 === aRv ? b0.aRM.aS6(a13) : 19 === aRv && b0.aRM.aS7(a13)
		} : function(a13) {
			if (8 !== aa.a18() && !ax.aG1()) return;
			if (a13 !== b0.y.a1D) b0.y.aRm(a13, 3244);
			else if (0 === bH.ph(1)) bf.a06.aSI(bH.aC);
			else {
				var aB, a13 = bH.ph(2);
				if (0 === a13) {
					var pI, p3 = bH.ph(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[aD.eX] && (pI = bH.ph(10), aN.pH(p3, aD.eX, pI), af.q9(p3, 1, pI))
				} else if (1 === a13) ! function() {
					var p3 = bH.ph(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[aD.eX] && b5.aJn(0, [p3], !0) && aN.pZ(p3, 1)
				}();
				else if (2 === a13) ! function() {
					var p3 = bH.ph(9),
						target = bH.ph(9);
					0 !== ag.mi[p3] && 0 !== ag.mi[target] && 0 !== ag.mi[aD.eX] && b5.aJn(1, [p3], !0) && (af.q9(p3, 3, 96), af.q9(target, 4, 96), aN.a6b(p3, target))
				}();
				else if (l.a9 && !l.aA) {
					var en = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), en = Math.min(b8.p0.pj.length, 540), aB = 0; aB < en; aB++) bD.aSO(32, b8.p0.pj[aB]);
					b0.y.send(b0.y.a1D, bD.aC)
				}
			}
		})(a13), bf.aRu())
	}, this.aSA = function(aC) {
		if (bH.dd(aC), bH.e8 = 1, 3 === bH.ph(6)) {
			bH.e8 += 20;
			var eq = aD.data = new a4N,
				aC = aSG(9),
				aDA = eq.humanCount = bH.ph(9) + 1;
			eq.selectableSpawn = 1 === eq.gameMode || aDA < 100, eq.colorsData = new Uint32Array(aDA), eq.playerNamesData = new Array(aDA);
			for (var aB = 0; aB < aDA; aB++) bH.e8++, eq.colorsData[aB] = bH.ph(18), eq.playerNamesData[aB] = bG.vv.vz(bH.ph(5));
			aa.aFi(), bS.a7(aC, eq.mapSeed), aD.a4S()
		} else ! function() {
			bH.e8 += 20;
			var eq = aD.data = new a4N,
				aSF = aSG(1);
			eq.humanCount = 2;
			eq.selectableSpawn = 1, eq.elo = new Uint16Array(2), eq.colorsData = new Uint32Array(2), eq.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e8++, eq.colorsData[aB] = bH.ph(18), eq.elo[aB] = bH.ph(14), eq.playerNamesData[aB] = bG.vv.vz(bH.ph(5));
			aa.aFi(), bS.a7(aSF, eq.mapSeed), aD.a4S()
		}()
	}, this.aSD = function() {
		bH.e8 = 1;
		var aRv = bH.ph(6),
			aSE = bH.ph(10);
		return b0.y.a16 === aSE ? (b0.y.a1D = aSE, !1) : (b0.y.close(b0.y.a16, 3247), b0.y.a1D = aSE, ax.aD5 = bH.ph(10), ax.aFq = bH.ph(3 === aRv ? 9 : 1), b0.y.aFX(aSE, 5) && b0.p3.aFx(), !0)
	}
}

function aRR() {
	this.aRz = function() {
		bj.y.vT(), bj.s1.s2(105, bF.sr.ss(bF.sr.st(5))), bj.s1.s2(106, bF.sr.ss(bF.sr.st(8))), bj.s1.s2(109, bH.ph(30)), bj.s1.s2(108, bj.eK.data[109].value), bj.s1.s2(111, bj.eK.data[109].value + 1), bj.s1.s2(107, 0), bj.s1.s2(110, "")
	}, this.aS1 = function() {
		var data;
		bH.size < bD.aSP(29) ? b0.y.aRm(0, 3254) : ((data = {
			sn: bH.ph(30),
			vg: bH.ph(16),
			vh: bH.ph(30),
			vi: bH.ph(30),
			vj: bH.ph(30),
			vk: bH.aSQ(32),
			username: bG.vx.wF(5),
			vl: bG.vx.wF(3),
			vm: bG.vx.wF(3),
			vn: bH.aSQ(32),
			vo: bH.aSQ(32),
			vp: bH.ph(30),
			vq: bH.aSQ(32),
			vr: bH.aSQ(32),
			vs: bH.aSQ(32),
			vt: bH.aSQ(32),
			aNM: bH.aSQ(32),
			aNN: bH.aSQ(30),
			aNY: bH.aSQ(32),
			aNZ: bG.vx.wF(3),
			aNR: bH.aSQ(2),
			aNS: bH.aSQ(10),
			aNP: bG.vx.wF(8),
			aNT: bH.aSQ(5),
			aN9: bH.ph(30),
			aNL: bH.ph(30),
			a0O: bH.aSQ(32),
			aNa: bH.ph(1),
			aNb: bH.ph(1)
		}).aNa && (data.aNc = bH.aSQ(32), data.aNd = bH.ph(30), data.aNe = bH.ph(30), data.aNf = bH.ph(1)), 8 === t.so && (25 === t.a4x().aOy ? (data.aMq = !0, t.y.aMW = data, t.a4x().aPD(25, !1)) : (data.aMq = !1, bj.s1.s2(160, +(data
			.aNa && data.aNf)), data.sm = bj.eK.data[105].value, t.y.aMT = data, bj.s1.vf(data), t.a4x().aPD(16, !0))))
	}
}

function aRT() {
	this.aS2 = function() {
		var aB;
		if (bH.size < bD.aSP(23)) b0.y.aRm(0, 3259);
		else {
			var t7 = bH.ph(6),
				en = bH.ph(10),
				data = [];
			if (9 === t7 || 10 === t7 || 11 === t7) {
				for (aB = 0; aB < en; aB++) data.push([bH.ph(30), bG.vx.wF(5), bH.aSQ(32), 0, bH.ph(30)]);
				8 === t.so && t.a4x().aPD(21, !0, {
					t7: t7,
					data: data
				})
			} else if (12 === t7) {
				for (aB = 0; aB < en; aB++) data.push([bH.ph(20), bH.ph(30), bH.ph(30), bH.aSQ(32), bH.ph(30), bG.vx.wF(5), bG.vx.wF(5)]);
				8 === t.so && t.a4x().aPD(21, !0, {
					t7: t7,
					data: data
				})
			} else {
				var hk = bH.ph(16);
				if (bH.aSR(39 + 16 * hk + en * (0 === t7 ? 111 : 1 === t7 ? 101 : 2 === t7 || 3 === t7 ? 127 : 212))) {
					if (0 === t7)
						for (aB = 0; aB < en; aB++) data.push([bH.ph(30), bG.vv.vz(bH.ph(5)), bH.ph(16), bH.ph(30), bH.ph(30)]);
					else if (1 === t7)
						for (aB = 0; aB < en; aB++) data.push([bH.ph(16), bG.vv.vz(bH.ph(3)), bH.ph(16), bG.vv.vz(bH.ph(5)), bH.ph(31), bH.ph(30)]);
					else if (2 === t7 || 3 === t7)
						for (aB = 0; aB < en; aB++) data.push([bH.ph(30), bG.vv.vz(bH.ph(5)), bH.aSQ(32), bH.ph(30), bH.ph(30)]);
					else
						for (aB = 0; aB < en; aB++) data.push([bH.ph(20), bH.ph(30), bH.ph(30), bH.ph(30), bH.ph(30), bH.aSQ(32), bH.ph(30), bG.vv.vz(bH.ph(5)), bG.vv.vz(bH.ph(5))]);
					8 === t.so && t.a4x().aPD(21, !0, {
						t7: t7,
						data: data
					})
				} else b0.y.aRm(0, 3260)
			}
		}
	}, this.aS3 = function() {
		if (bH.size < bD.aSP(29)) b0.y.aRm(0, 3265);
		else {
			var aSS = bH.ph(4),
				aST = bH.ph(7),
				aSU = bH.ph(11);
			if (bH.aSR(29 + 16 * aST + 16 * aSU + 11 * aSS)) {
				for (var data = [], aB = 0; aB < aSS; aB++) {
					for (var a0d = bG.vv.vz(bH.ph(3)), aSV = bH.ph(8), aOC = [], f6 = 0; f6 < aSV; f6++) aOC.push(bH.ph(16));
					data.push({
						name: "[" + a0d + "]",
						aOC: aOC
					})
				}
				8 === t.so && t.a4x().aPD(23, !0, data)
			} else b0.y.aRm(0, 3266)
		}
	}
}

function aRN() {
	function aSX() {
		var id = bH.ph(3);
		return 0 === id ? {
			id: id,
			sm: bH.ph(30),
			r: bn.aCS.aEF(bG.vx.wF(7))
		} : 1 === id ? {
			id: id,
			sm: bH.ph(30),
			aDG: bH.ph(3),
			value: bH.ph(30),
			target: bH.ph(30)
		} : 2 === id ? {
			id: id,
			sm: bH.ph(30),
			aDG: bH.ph(3)
		} : 3 === id ? {
			id: id,
			sm: bH.ph(30),
			aDG: bH.ph(3),
			value: bH.ph(4),
			target: bH.ph(30)
		} : 4 === id ? {
			id: id,
			sm: bH.ph(30),
			aDG: bH.ph(3),
			target: bH.ph(30)
		} : 5 === id ? {
			id: id,
			aDG: bH.ph(6)
		} : 6 === id ? {
			id: id,
			value: bH.ph(17)
		} : null
	}
	this.aRx = function(a13) {
		if (a13 !== b0.y.a16) b0.y.close(a13, 3239);
		else if (6 !== aa.a18()) b0.y.close(a13, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rf = bn.y.rg[aB],
					playerCount = (rf.tf = bH.ph(10), rf.eT = bH.ph(6), rf.mapSeed = bH.ph(14), rf.aD1 = bH.ph(4), rf.aEj = bH.ph(6), rf.aEk = bH.ph(4), rf.aD7 = bH.ph(1), rf.aDp = bH.ph(12), rf.spawningSeed = bH.ph(14), bH.ph(16));
				bn.tu.tw[aB] = bH.ph(16);
				for (var f6 = 0; f6 < playerCount; f6++) bn.tu.aCe(aB, bH.ph(30), bG.vx.wF(5), bH.ph(4), bH.ph(30), bH.ph(7), bH.ph(16), bH.ph(18), bH.ph(11), bH.ph(12))
			}
			t.u(29), bn.y.aDg(!0)
		}
	}, this.aS5 = function(a13) {
		if (a13 !== b0.y.a16) b0.y.close(a13, 3239);
		else if (bn.a15) {
			bn.y.aDe[0] = bH.ph(20), bn.y.aDe[1] = bH.ph(20);
			for (var aSW = bH.ph(16), f6 = 0; f6 < aSW; f6++) {
				var id = bH.ph(3);
				0 === id ? bn.tu.aCe(bH.ph(2), bH.ph(30), bG.vx.wF(5), 0, 1234566, 127, 0, bH.ph(18), 0, bH.ph(12)) : 1 === id ? bn.tu.aCv(bH.ph(16), bH.ph(2)) : 2 === id ? bn.tu.aCr(bH.ph(16), bH.ph(2), bH.ph(2)) : 3 === id ? bn.tu.aCu(bH.ph(
					16), bH.ph(2)) : 4 === id ? bn.tu.aCk(bH.ph(16), bH.ph(2), bH.ph(4), bH.ph(30), bH.ph(7), bH.ph(16), bH.ph(11)) : 5 === id && bn.tu.aCl(bH.ph(16), bH.ph(2), bH.ph(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rf = bn.y.rg[aB];
				if (rf.tf = bH.ph(10), 0 === rf.tf) {
					if (rf.a1D = bH.ph(10), rf.aD5 = bH.ph(10), bn.aCT.dm(aB)) return;
					rf.eT = bH.ph(6), rf.mapSeed = bH.ph(14), rf.aD1 = bH.ph(4), rf.aEj = bH.ph(6), rf.aEk = bH.ph(4), rf.aD7 = bH.ph(1), rf.aDp = bH.ph(12), rf.spawningSeed = bH.ph(14), rf.aEl.push(rf.aEl[0]), rf.aEl.shift()
				}
			}
			bn.y.aDi()
		} else b0.y.close(a13, 3251)
	}, this.aS6 = function(a13) {
		if (a13 !== b0.y.a16) b0.y.close(a13, 3272);
		else if (bn.a15) {
			for (var rd = bH.ph(4), rf = bn.y.rg[rd], rh = rf.rh, u9 = (rf.ri = bH.ph(20), bH.ph(6)), aB = 0; aB < u9; aB++) {
				var aF2 = aSX();
				bn.rq.aF1(aF2), rh.push(aF2)
			}
			bn.y.aDq(rd)
		} else b0.y.close(a13, 3273)
	}, this.aS7 = function(a13) {
		a13 !== b0.y.a16 ? b0.y.close(a13, 3276) : bn.a15 ? bn.message.aEB(aSX()) : b0.y.close(a13, 3277)
	}
}

function aRP() {
	this.aRy = function(a13) {
		var aSK, r6;
		bH.aSR(70) ? (aSK = bH.ph(3), r6 = bi.aSY.j3(bH.ph(30), bH.ph(30)), b0.aBy.aSZ(a13, r6, aSK), 0 < aSK || (0 === a13 && 0 === bj.eK.data[105].value.length ? b0.aBy.aP2(0) : b0.aNE.aSa(a13), 4 === b0.y.aRZ(a13).aSb() ? 6 === aa.a18() && b0
			.aE9.aFY(a13) : 5 !== b0.y.aRZ(a13).aSb() || 8 !== aa.a18() && 10 !== aa.a18() || b0.p3.aFx())) : b0.y.aRm(a13, 3269)
	}, this.aS0 = function(a13) {
		var id = bH.ph(6);
		1 === id ? (bj.s1.s2(160, bH.ph(30)), b0.y.aRj(a13), aT.a9E || b0.aBy.aP2(1), b7.aBw(), 8 === t.so && t.a4x().aPC()) : 21 === id ? 8 === t.so && t.a4x().aPD(17) : 22 === id && (bj.s1.s2(106, bj.eK.data[110].value), bj.s1.s2(110, ""),
			8 === t.so) && t.a4x().aPD(15)
	}, this.aS4 = function() {
		var en = bH.ph(16),
			aSc = bH.ph(16);
		if (bH.aSR(55 + 10 * en + 16 * aSc)) {
			for (var g = [], aB = 0; aB < en; aB++) g.push(bG.vv.vz(bH.ph(10)));
			b7.aC0(g)
		} else b0.y.aRm(0, 3270)
	}
}

function aRF() {
	this.aRa = function(a13, aRY) {
		bD.a7(8), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aRY ? 1 : 0), b0.y.send(a13, bD.aC)
	}, this.aFx = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a16), bD.a8(10, ax.aD5), bD.a8(9, ax.aFq), bD.a8(10, l.dx), bD.a8(14, l.dq), b0.y.send(b0.y.a1D, bD.aC)
	}, this.p4 = function(eZ) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eZ), b0.y.send(b0.y.a1D, bD.aC)
	}, this.p5 = function(iN, jJ) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, iN), bD.a8(10, jJ), b0.y.send(b0.y.a1D, bD.aC)
	}, this.p9 = function(iN, p7) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, iN), bD.a8(9, p7), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pB = function(iN, pA) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, iN), bD.a8(27, pA), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pD = function(iN, n5) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, iN), bD.a8(16, n5), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pG = function(jJ) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jJ), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pK = function(e8) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e8), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pM = function(pL) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pL), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pO = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pP = function(iN, eZ, jJ) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, iN), bD.a8(10, jJ), bD.a8(22, eZ), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pX = function(aSd, aSe) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aSe), bD.a8(10, aSd), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pa = function(a6U) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a6U), b0.y.send(b0.y.a1D, bD.aC)
	}, this.pe = function(aSf, target) {
		var aB, en = aSf.length;
		for (bD.a7(14 + 9 * en), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < en; aB++) bD.a8(9, aSf[aB]);
		b0.y.send(b0.y.a1D, bD.aC)
	}
}

function aRI() {
	this.aSg = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.aBy.aSh(), b0.y.send(0, bD.aC)
	}, this.aSa = function(a13) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.sr.wB(bj.eK.data[105].value, 5), bG.sr.wB(bj.eK.data[106].value, 8), bD.a8(30, bj.eK.data[109].value), b0.y.send(a13, bD.aC)
	}, this.aPF = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.sr.wA(bj.eK.data[110].value), b0.y.send(0, bD.aC)
	}, this.aPB = function(a3k) {
		var en = a3k.qH.length;
		bD.a7(21 + 16 * en), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a3k.sq), bD.a8(8, en), bF.vv.wA(a3k.qH), b0.y.send(0, bD.aC)
	}, this.aNU = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.sq), bG.sr.wB(data.sm, 5), b0.y.send(0, bD.aC)
	}, this.aNF = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.sq), bG.sr.wB(data.sm, 5), bD.aSO(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aRJ() {
	this.pf = function() {
		for (var en = aD.kA, zm = bR.result.zm, l3 = zm.length, a0W = (bD.a7(17 + 16 * en + 33 * l3), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, l3), bD.a8(1, +(2 === aD.zu)), bD.a8(1, aD.a0E % 2), ag.a0W), aB = 0; aB < en; aB++) bD.a8(16, a0W[aB]);
		for (var gb = ag.gb, aB = 0; aB < l3; aB++) {
			var gL = zm[aB];
			bD.a8(9, gL), bD.a8(24, gb[gL])
		}
		b0.y.send(b0.y.a1D, bD.aC)
	}
}

function aRK() {
	this.aP4 = function(t7, t8, t9) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, t7), bD.a8(1, +(t8 < 0)), bD.a8(1, +(t9 < 0)), bD.a8(30, Math.abs(t8)), bD.a8(30, Math.abs(t9)), b0.y.send(0, bD.aC)
	}, this.aP5 = function(t7, aP6, aP7) {
		bD.a7(18 + 16 * aP6.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, t7), b0.aBy.aSj(aP6), bD.a8(30, aP7), b0.y.send(0, bD.aC)
	}, this.aPA = function(t7, aP6, aP7) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, t7), bG.sr.wB(aP6, 5), bD.a8(30, aP7), b0.y.send(0, bD.aC)
	}, this.aP8 = function(aOB, a0c) {
		for (var en = a0c.length, hk = 0, aB = 0; aB < en; aB++) hk += a0c[aB].length;
		for (bD.a7(21 + 3 * en + 16 * hk), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aOB), bD.a8(4, en), bD.a8(7, hk), aB = 0; aB < en; aB++) bD.a8(3, a0c[aB].length), bF.vv.wA(a0c[aB]);
		b0.y.send(0, bD.aC)
	}, this.aP9 = function(aOB, t8, t9) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aOB), bD.a8(1, +(t8 < 0)), bD.a8(1, +(t9 < 0)), bD.a8(20, Math.abs(t8)), bD.a8(20, Math.abs(t9)), b0.y.send(0, bD.aC)
	}
}

function aRG() {
	this.aFY = function(a13) {
		var username = bj.eK.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + 18 + bi.aSk.ph()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dx), bD.a8(2, bj.eK.data[158].value), b0.aBy.aSj(username), bA.color.a2q(bj.y.va())),
			username = (bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), b7.aC2());
		bD.a8(9, username[0]), bD.a8(9, username[1]), bi.aSk.zP(), b0.y.a16 = a13, b0.y.send(a13, bD.aC)
	}, this.aEA = function(aSn, a3k) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aSn), 2 === aSn ? bE.a8(2, a3k) : 3 === aSn ? bF.vx.zP(a3k, 7, bE) : 5 === aSn && (bE.a8(3, a3k.id), bE.a8(3, a3k.value), bE.a8(30, a3k.sm)), b0.y.send(b0.y.a16, bE.aSo())
	}
}

function aRH() {
	this.aRi = function(a13) {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dv), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), b0.y.send(a13, bD.aC)
	}, this.aSZ = function(a13, r6, aSK) {
		bD.a7(70), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aSK), bD.a8(30, r6[0]), bD.a8(30, r6[1]), b0.y.send(a13, bD.aC)
	}, this.aP2 = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.aBz = function(id, qH) {
		var en = Math.min(qH.length, 63);
		bD.a7(19 + 16 * en), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, en), bF.vv.wA(qH), b0.y.send(0, bD.aC)
	}, this.aSq = function(aSE, qS) {
		bD.a7(7 + 26 * qS.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qS.length; aB++) bD.a8(16, qS[aB][0]), bD.a8(10, qS[aB][1]);
		b0.y.send(aSE, bD.aC)
	}, this.aRp = function(aSr, aSs) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aSr), bD.a8(12, aSs), b0.y.send(b0.y.a1D, bD.aC)
	}, this.aSj = function(username) {
		bD.a8(5, username.length), bF.vv.wA(username)
	}
}

function aRg() {
	var a13, aML, aSt, aSu = ["wss://", "/s50/", "/s51/", "/s52/"],
		aSv = 0;

	function aRh() {
		b0.y.aRh(a13, aML)
	}

	function aSz(e) {
		b0.a6U.aRr(a13, new Uint8Array(e.data))
	}

	function aT0() {}

	function aRo(e) {
		b0.y.aRo(a13, e)
	}
	this.dd = function(e8, aSw) {
		a13 = e8, aML = aSw, e8 = l.dr ? "ws://localhost:" + (7130 + a13) + "/" : aSu[0] + b0.y.aRV[a13] + aSu[1 + l.ds], (aSt = new WebSocket(__fx.customLobby.isActive() && 1 === a13 ? __fx.customLobby.getSocketURL() : e8)).binaryType =
			"arraybuffer", aSt.onopen = aRh, aSt.onmessage = aSz, aSt.onclose = aRo, aSt.onerror = aT0
	}, this.aSy = function() {
		return aSt.readyState === aSt.CONNECTING
	}, this.aNC = function() {
		return aSt.readyState === aSt.OPEN
	}, this.aRb = function() {
		return aSv
	}, this.aRj = function() {
		aSv = 1
	}, this.aRd = function() {
		return this.aSy() || this.aNC()
	}, this.aRe = function(aSw) {
		aML = aSw
	}, this.aSb = function() {
		return aML
	}, this.send = function(aC) {
		this.aNC() && aSt.send(aC)
	}, this.close = function(aRl) {
		this.aRd() && (aSt.close(aRl), this.rr())
	}, this.rr = function() {
		aSt.onopen = null, aSt.onmessage = null, aSt.onclose = null, aSt.onerror = null
	}
}

function dK() {
	var aT1 = !1,
		a6p = 0,
		i = 0,
		sv = 0,
		gap = 0,
		canvas = null,
		y7 = null,
		a2Q = null;

	function aT3() {
		for (var aT9, aT7 = 0, en = 0, f8 = Math.floor(i / 2), e7 = Math.floor(sv / 2), aT8 = 1.5 * Math.PI, aB = aD.x9; 0 <= aB; aB--) en += a2Q[aB], 0 === a2Q[aB] && aT7++;
		if (aT1 = !1, y7.clearRect(0, 0, i, i), y7.fillStyle = bB.nf, y7.fillRect(0, 0, i, i), y7.fillStyle = bB.ni, y7.fillRect(0, 0, i, gap), y7.fillRect(0, 0, gap, i), y7.fillRect(i - gap, 0, gap, i), y7.fillRect(0, i - gap, i, gap), 0 < en)
			if (aT7 === aD.x9) {
				for (aB = aD.x9; 0 <= aB; aB--)
					if (0 < a2Q[aB]) {
						! function(aB, f8, e7) {
							y7.fillStyle = bg.aTG[bg.kX[aB]], y7.beginPath(), y7.arc(f8, f8, e7, 0, 2 * Math.PI), y7.fill()
						}(aB, f8, e7);
						break
					}!
				function(f8) {
					var fontSize = f8 / 3;
					y7.font = bA.qa.sO(1, fontSize), y7.fillStyle = bB.ni, y7.fillText("100%", f8, f8 + .1 * fontSize)
				}(f8)
			} else {
				for (aB = 0; aB <= aD.x9; aB++) 0 < a2Q[aB] && (! function(aB, f8, e7, aT8, aT9) {
					y7.fillStyle = bg.aTG[bg.kX[aB]], y7.beginPath(), y7.arc(f8, f8, e7, aT8, aT9), y7.lineTo(f8, f8), y7.fill()
				}(aB, f8, e7, aT8, aT9 = aT8 + 2 * Math.PI * a2Q[aB] / en), function(f8, e7, aT8, aT9) {
					var fF = (aT9 - aT8) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e7 * Math.min(fF, .37);
					fontSize < 8 || (aT8 = (aT8 + aT9) / 2, aT9 = (__fx.settings.detailedTeamPercentage ? (100 * fF).toFixed(2) : Math.floor(100 * fF + .5)) + "%", e7 *= .525 - Math.max(.6 * (fF - .7), 0), y7.font = bA.qa.sO(1, fontSize), y7
						.fillStyle = bB.ni, y7.fillText(aT9, f8 + Math.cos(aT8) * e7, f8 + Math.cos(aT8 + 1.5 * Math.PI) * e7))
				}(f8, e7, aT8, aT9), 0 !== aB && aTE(f8, e7, aT8), aT8 = aT9);
				aTE(f8, e7, 1.5 * Math.PI)
			}!
		function(f8, e7) {
			y7.beginPath(), y7.arc(f8, f8, e7, 0, 2 * Math.PI), y7.stroke()
		}(f8, e7)
	}

	function aTE(f8, e7, aTH) {
		y7.beginPath(), y7.moveTo(f8, f8), y7.lineTo(f8 + Math.cos(aTH) * e7, f8 + Math.cos(aTH + 1.5 * Math.PI) * e7), y7.stroke()
	}
	this.dd = function() {
		if (aD.hh) {
			a6p = 0, a2Q = new Uint32Array(aD.x9 + 1);
			for (var aB = aD.x9; 0 <= aB; aB--) a2Q[aB] = 0;
			for (aB = al.kB - 1; 0 <= aB; aB--) a2Q[bg.el[al.kC[aB]]] += 1;
			this.resize()
		} else a2Q = y7 = canvas = null
	}, this.a7m = function() {
		return i
	}, this.resize = function() {
		aD.hh && (i = Math.floor(a0.a1.hw() && !aD.nB ? .18 * h.min : .13 * h.hx), i = (i *= 1 + (.5 + .2 * a0.a1.hw()) * aD.nB) + i % 2, sv = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, y7 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), y7.lineWidth = gap, y7.strokeStyle = bB.ni, bA.qa.textAlign(y7, 1), bA.qa.textBaseline(y7, 1), aT3())
	}, this.kg = function() {
		var dt, kh = this.ki();
		return bg.kX[kh] || (kh = function() {
			for (var kh = -1, aB = aD.x9; 1 <= aB; aB--)(-1 === kh || a2Q[aB] > a2Q[kh]) && (kh = aB);
			return kh
		}(), dt = ag.gb[lk[0]], -1 !== kh && a2Q[kh] > dt) ? a2Q[kh] : dt
	}, this.a0q = function() {
		return a6p = 31, this.j3(), this.ki()
	}, this.ki = function() {
		for (var kh = 0, aB = aD.x9; 0 < aB; aB--) a2Q[aB] > a2Q[kh] && (kh = aB);
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
	}, this.a3J = function() {
		for (var gG = 0, aB = aD.x9; 0 <= aB; aB--) gG += 0 < a2Q[aB];
		return gG
	}, this.j3 = function() {
		if (aD.hh && 32 <= ++a6p) {
			a6p = 0;
			for (var aB = aD.x9; 0 <= aB; aB--) a2Q[aB] = 0;
			for (aB = al.kB - 1; 0 <= aB; aB--) a2Q[bg.el[al.kC[aB]]] += ag.gb[al.kC[aB]];
			aT1 = !0
		}
	}, this.mV = function() {
		aD.hh && aT1 && aT3()
	}, this.ug = function() {
		aD.hh && (aD.nB ? uh.drawImage(canvas, bc.gap, bc.gap) : uh.drawImage(canvas, bc.gap, a7n + 2 * bc.gap))
	}
}

function da() {
	function aTN(eu, en, ew, zZ, a93, fE) {
		if (!(ew < 1 || a93 < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zZ(eR)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTR(ew, en, eu, zZ, aTL, fE) {
		if (!(eu < 1 || aTL < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (zZ(eR)) return eR >> 2;
				ew += fE
			}
		}
		return -1
	}

	function aTV(iE, iF, aTI) {
		return -1 !== iF && (-1 === iE || bM.iG(iF, aTI) < bM.iG(iE, aTI)) ? iF : iE
	}
	this.hC = function(aTI) {
		return this.a01(aTI, function(eR) {
			return ac.ei(eR)
		})
	}, this.hI = function(aTI) {
		return this.a01(aTI, function(eR) {
			return ac.aGg(eR, aD.eX)
		})
	}, this.a01 = function(aTI, zZ) {
		return function(aTI, aTJ, zZ) {
			for (var h2 = bM.ev(aTI), h4 = bM.ex(aTI), aTL = bS.ey - 2, a93 = bS.ez - 2, aTM = -1, eq = 0; eq < aTJ; eq++) {
				var a92 = Math.max(h2 - eq, 1),
					aKf = Math.max(h4 - eq, 1),
					xk = Math.min(h2 + eq, aTL),
					xj = Math.min(h4 + eq, a93),
					iE = aTN(h2, xk - h2, h4 - eq, zZ, a93, 1),
					iF = aTN(h2 - 1, h2 - a92 - 1, h4 - eq, zZ, a93, -1),
					xk = aTN(h2, xk - h2, h4 + eq, zZ, a93, 1),
					a92 = aTN(h2 - 1, h2 - a92 - 1, h4 + eq, zZ, a93, -1),
					aTQ = aTR(h4, xj - h4 - 1, h2 - eq, zZ, aTL, 1),
					aTS = aTR(h4 - 1, h4 - aKf - 2, h2 - eq, zZ, aTL, -1),
					xj = aTR(h4, xj - h4 - 1, h2 + eq, zZ, aTL, 1),
					aKf = aTR(h4 - 1, h4 - aKf - 2, h2 + eq, zZ, aTL, -1);
				if (aTM = aTV(aTM, iE, aTI), aTM = aTV(aTM, iF, aTI), aTM = aTV(aTM, xk, aTI), aTM = aTV(aTM, a92, aTI), aTM = aTV(aTM, aTQ, aTI), aTM = aTV(aTM, aTS, aTI), aTM = aTV(aTM, xj, aTI), 0 <= (aTM = aTV(aTM, aKf, aTI)) && eq *
					eq >= bM.iG(aTM, aTI)) return aTM
			}
			return -1
		}(aTI, bM.hu(), zZ)
	}
}

function d3() {
	function aTX(key) {
		var aQd;
		return "undefined" == typeof URLSearchParams || (aQd = window.location.search, "string" != typeof(aQd = new URLSearchParams(aQd).get(key))) || aQd.length < 1 ? null : aQd
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aTX("account");
				if (!value && !(value = aTX("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.so, new sp(1e3, {
					sq: 0,
					sm: value,
					sn: 0
				})), 1
			}()) {
			var value = aTX("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a10 = new URL(window.location.href);
		a10.search = "";
		try {
			return history.replaceState(null, "", a10.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aNh = function(key, value) {
		if (0 === a0.id) try {
			var a10 = new URL(window.location.href),
				gL = a10.searchParams;
			gL.set(key, value), a10.search = gL.toString(), history.replaceState(null, "", a10.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aTZ, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a4U(0)
	}, this.value = function(gL) {
		return g[gL]
	}, this.aKX = function() {
		return bL.du(aTZ - 1, 2)
	}, this.a4U = function(aKB) {
		aTZ = 2 * aKB % 32768 + 1
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
	this.pu = new aTa, this.a4f = new aTb, this.aHn = new aTc, this.dd = function() {
		aD.gw || this.pu.dd()
	}, this.j3 = function() {
		aD.gw || (this.pu.j3(), 3 !== t.so) || bf.k7() % 15 != 5 && 2 !== aD.zx || t.a4x().aQe()
	}, this.aQh = function() {
		0 === aD.zx && aa.aFi(), aD.a4O.a4n(), aD.data.canvas = null, b0.y.close(b0.y.a1D, 3257), b0.y.a1D = 0, aD.data.isReplay = 1, aD.a4S()
	}, this.aQg = function(qH) {
		var aB = qH.indexOf("=");
		return 0 <= aB ? qH.substring(aB + 1) : qH
	}, this.aQf = function(qH) {
		return "https://territorial.io/?replay=" + qH
	}
}

function aTa() {
	this.aTe = null, this.aTf = null, this.aTg = null, this.aTh = null, this.aTi = null, this.aTj = null, this.a4e = "";
	var aTk = 0;
	this.dd = function() {
		this.aTe = [], this.aTf = [], this.aTg = [], this.aTh = [], this.aTi = [0], this.aTj = [0], aTk = 0, this.a4e = ""
	}, this.pv = function(id, fW, fY, fa) {
		aD.gw || 2 === aD.zx || (0 === this.aTi[aTk] && (this.aTj[aTk] ? (this.aTi.push(1), this.aTj.push(0), aTk++) : this.aTi[aTk] = 1), this.aTe.push(id), this.aTf.push(fW), this.aTg.push(void 0 === fY ? 0 : fY), this.aTh.push(void 0 === fa ?
			0 : fa), this.aTj[aTk]++)
	}, this.j3 = function() {
		0 === this.aTi[aTk] ? this.aTj[aTk]++ : (this.aTi.push(0), this.aTj.push(0), aTk++)
	}
}

function aTc() {
	var aTl = 0;

	function aTp(qH, id) {
		aTl || (id ? 1 === id ? aN.a5w = L(430) + ": " + qH : t.u(4, 3, new v(L(431), qH, 1)) : t.u(4, 3, new v("⚠️ " + L(429), qH, 1)))
	}
	this.wF = function(qH, aTm) {
		var qS;
		return aTl = aTm, bG.sr.w7(bG.sr.w5(bG.sr.w3(qH))), aN.a5w = "", !(! function() {
			if (bH.size < 10) aTp("File Too Small");
			else {
				var aTr = bH.ph(12),
					aSs = (aTr !== l.rVersion && aTp("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aTr) + ("   Compatible at territorial.io/" + aTr), 1), bH.ph(12)),
					aTs = bH.ph(31);
				if (aTs !== bH.size) aTp("Size Error: " + aTs + " " + bH.size);
				else if (function(j, aTr) {
						for (var gL = bH.aC, en = bH.size, aSs = aTr, aB = 3; aB < en; aB++) aSs = aSs + gL[aB] & 4095;
						return aSs === j || (aTp("Hash Error: " + aSs + " " + j + " " + en), !1)
					}(aSs, aTr)) return 1
			}
			return
		}() || (aTm = bH, (qS = aD.data = new a4N).mapType = aTm.ph(2), qS.mapProceduralIndex = aTm.ph(8), qS.mapRealisticIndex = aTm.ph(8), qS.mapSeed = aTm.ph(14), qS.mapName = aTm.aTu(5), 2 === qS.mapType && aTm.aTv(), qS
			.passableWater = aTm.ph(1), qS.passableMountains = aTm.ph(1), qS.playerCount = aTm.ph(10), qS.humanCount = aTm.ph(10), qS.selectedPlayer = aTm.ph(9), qS.gameMode = aTm.ph(1), qS.playerMode = aTm.ph(2), qS.battleRoyaleMode =
			aTm.ph(2), qS.numberTeams = aTm.ph(4), qS.isZombieMode = aTm.ph(1), qS.isContest = aTm.ph(1), qS.isReplay = aTm.ph(1), qS.elo = aTm.aTw(2, 14, 2), qS.colorsType = aTm.ph(1), qS.colorsPersonalized = aTm.ph(1), qS.colorsData =
			aTm.aTw(10, 18, 512), qS.selectableColor = aTm.ph(1), qS.teamPlayerCount = aTm.aTw(4, 10, 9), qS.neutralBots = aTm.ph(1), qS.botDifficultyType = aTm.ph(2), qS.botDifficultyValue = aTm.ph(4), qS.botDifficultyTeam = aTm.aTw(4,
				4, 9), qS.botDifficultyData = aTm.aTw(10, 4, 512), qS.spawningType = aTm.ph(2), qS.spawningSeed = aTm.ph(14), qS.spawningData = aTm.aTw(11, 12, 1024), qS.selectableSpawn = aTm.ph(1), qS.playerNamesType = aTm.ph(2), qS
			.playerNamesData = aTm.aTx(10, 5, 512), qS.selectableName = aTm.ph(1), qS.aIncomeType = aTm.ph(2), qS.aIncomeValue = aTm.ph(8), qS.aIncomeData = aTm.aTw(10, 8, 512), qS.tIncomeType = aTm.ph(2), qS.tIncomeValue = aTm.ph(8), qS
			.tIncomeData = aTm.aTw(10, 8, 512), qS.iIncomeType = aTm.ph(2), qS.iIncomeValue = aTm.ph(8), qS.iIncomeData = aTm.aTw(10, 8, 512), qS.sResourcesType = aTm.ph(2), qS.sResourcesValue = aTm.ph(11), qS.sResourcesData = aTm.aTw(10,
				11, 512), ! function() {
				var i6 = bH,
					wG = i6.ph(5),
					aTy = i6.ph(30),
					aTz = i6.ph(30);
				if (aTy + aTz > 8 * i6.size) return void aTp("Corrupted File");
				return function(en) {
						var aU2 = new Uint8Array(en),
							aU3 = new Uint16Array(en),
							aU4 = new Uint32Array(en),
							aU5 = new Uint32Array(en);
						b9.pu.aTe = aU2, b9.pu.aTf = aU3, b9.pu.aTg = aU4, b9.pu.aTh = aU5;
						for (var aB = 0; aB < en; aB++) {
							var id = bH.ph(4);
							aU2[aB] = id, aU3[aB] = bH.ph(9), 0 === id ? aU4[aB] = bH.ph(22) : 1 === id ? (aU4[aB] = bH.ph(10), aU5[aB] = bH.ph(10)) : 2 === id ? (aU4[aB] = bH.ph(10), aU5[aB] = bH.ph(9)) : 3 === id ? (aU4[aB] = bH.ph(10),
								aU5[aB] = bH.ph(27)) : 4 === id ? (aU4[aB] = bH.ph(10), aU5[aB] = bH.ph(16)) : 5 === id || 6 === id ? aU4[aB] = bH.ph(10) : 7 === id ? aU4[aB] = bH.ph(1) : 10 === id && (aU4[aB] = bH.ph(20), aU5[aB] =
								bH.ph(22))
						}
					}(aTy),
					function(en, wG) {
						var aTi = new Uint8Array(en),
							aTj = new Array(en);
						aTj.fill(0), b9.pu.aTi = aTi, b9.pu.aTj = aTj;
						for (var aB = 0; aB < en; aB++) aTi[aB] = bH.ph(1), aTj[aB] = bH.ph(wG)
					}(aTz, wG), 1
			}()) || (bH.e8 < 8 * bH.size - 13 || bH.e8 > 8 * bH.size ? (aTp("Out Of Bounds Error: " + bH.e8 + " " + 8 * bH.size), 1) : (b9.pu.a4e = qH, 2 === aD.data.mapType && (aTp("Load base64 image...", 2), 1))))
	}, this.aHo = function(aHO, aTq) {
		var a2l = document.createElement("canvas"),
			hp = a2l.getContext("2d");
		if (a2l.width = aHO.width, a2l.height = aHO.height, hp.drawImage(aHO, 0, 0), aD.data.canvas = a2l, aTl || aTq) return aD.zx ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aQh()
	}
}

function aTb() {
	this.zP = function() {
		var wG = function() {
				for (var aTj = b9.pu.aTj, en = aTj.length, max = 0, aB = 0; aB < en; aB++) max = Math.max(max, aTj[aB]);
				return wN(Math.max(max, 1))
			}(),
			i = (qS = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e8 += 43, i.a8(2, qS.mapType), i.a8(8, qS.mapProceduralIndex), i.a8(8, qS.mapRealisticIndex), i.a8(14, qS.mapSeed), i.aUC(qS.mapName, 5), 2 === qS.mapType && i.aUD(qS.canvas),
				i.a8(1, qS.passableWater), i.a8(1, qS.passableMountains), i.a8(10, qS.playerCount), i.a8(10, qS.humanCount), i.a8(9, qS.selectedPlayer), i.a8(1, qS.gameMode), i.a8(2, qS.playerMode), i.a8(2, qS.battleRoyaleMode), i.a8(4, qS
					.numberTeams), i.a8(1, qS.isZombieMode), i.a8(1, qS.isContest), i.a8(1, qS.isReplay), i.dk(qS.elo, 2, 14), i.a8(1, qS.colorsType), i.a8(1, qS.colorsPersonalized), i.dk(qS.colorsData, 10, 18), i.a8(1, qS.selectableColor), i.dk(
					qS.teamPlayerCount, 4, 10), i.a8(1, qS.neutralBots), i.a8(2, qS.botDifficultyType), i.a8(4, qS.botDifficultyValue), i.dk(qS.botDifficultyTeam, 4, 4), i.dk(qS.botDifficultyData, 10, 4), i.a8(2, qS.spawningType), i.a8(14, qS
					.spawningSeed), i.dk(qS.spawningData, 11, 12), i.a8(1, qS.selectableSpawn), i.a8(2, qS.playerNamesType), i.aUE(qS.playerNamesData, 10, 5), i.a8(1, qS.selectableName), i.a8(2, qS.aIncomeType), i.a8(8, qS.aIncomeValue), i.dk(qS
					.aIncomeData, 10, 8), i.a8(2, qS.tIncomeType), i.a8(8, qS.tIncomeValue), i.dk(qS.tIncomeData, 10, 8), i.a8(2, qS.iIncomeType), i.a8(8, qS.iIncomeValue), i.dk(qS.iIncomeData, 10, 8), i.a8(2, qS.sResourcesType), i.a8(11, qS
					.sResourcesValue), i.dk(qS.sResourcesData, 10, 11), ! function(wG) {
					var i = bE,
						aTe = b9.pu.aTe,
						fW = b9.pu.aTf,
						fY = b9.pu.aTg,
						fa = b9.pu.aTh,
						en = aTe.length;
					i.a8(5, wG), i.a8(30, en), i.a8(30, b9.pu.aTj.length);
					for (var aB = 0; aB < en; aB++) {
						var f8 = aTe[aB];
						i.a8(4, f8), i.a8(9, fW[aB]), 0 === f8 ? i.a8(22, fY[aB]) : 1 === f8 ? (i.a8(10, fY[aB]), i.a8(10, fa[aB])) : 2 === f8 ? (i.a8(10, fY[aB]), i.a8(9, fa[aB])) : 3 === f8 ? (i.a8(10, fY[aB]), i.a8(27, fa[aB])) : 4 === f8 ? (i
							.a8(10, fY[aB]), i.a8(16, fa[aB])) : 5 === f8 || 6 === f8 ? i.a8(10, fY[aB]) : 7 === f8 ? i.a8(1, fY[aB]) : 10 === f8 && (i.a8(20, fY[aB]), i.a8(22, fa[aB]))
					}
				}(wG), ! function(wG) {
					for (var i = bE, aTi = b9.pu.aTi, aTj = b9.pu.aTj, en = aTi.length, aB = 0; aB < en; aB++) i.a8(1, aTi[aB]), i.a8(wG, aTj[aB])
				}(wG), bE.e8),
			qS = bL.du(i - 1, 6) + 1,
			wG = (bD.aSP(6 * qS) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e8 = 24, i.a8(31, i.g.length), i.e8 = 12, i.a8(12, function() {
					for (var g = bE.g, en = g.length, aSs = l.rVersion, aB = 3; aB < en; aB++) aSs = aSs + g[aB] & 4095;
					return aSs
				}())
			}(), bH.dd(bE.g), bF.sr.ss(bF.sr.st(qS)));
		return bH.uA(), bE.dd(), wG
	}
}

function cp() {
	var f8, bu = !1,
		aUG = !1,
		aUH = -1e4,
		aUI = -1,
		aUJ = 0;

	function resize(aUN) {
		f8 = 0, ab.tG() && (aUL(aUN) || bu) && (bu = !1, bc.resize(), bW.aBZ.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.zx ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a8s()) : (aa.aFk(), aa.aFl()), bf.dl = !0)
	}

	function aUK(fF) {
		return fF && 128 < fF ? Math.floor(fF) : 128
	}

	function aUL(aUN) {
		var i, j, aUP, sv, a8G;
		if (!(0 < h.sW)) return sv = aUK(document.documentElement.clientWidth), a8G = aUK(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = sv, j = a8G, aUP = 0 !== a0.id || i < j ?
			700 : 1200, aUP = Math.min(aUP / ((i + j) / 2), 1), aUP = 0 === bj.eK.data[1].value ? 2 * aUP / 3 : Math.min(aUP + (bj.eK.data[1].value - 1) * (1 - aUP) / 2, 1), h.k = (window.devicePixelRatio || 1) * aUP, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aUN && !aUG ? (aUG = !0, document.body.removeChild(a1Q)) : aUG && (aUG = !1, document.body.appendChild(a1Q)), i = Math.floor(.5 + sv * h.k), j = Math.floor(.5 + a8G * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = aBB(i, j), h.max = a6B(i, j), h.hx = bL.du(i + j, 2), h.ud = i / j, a1Q.width = i, a1Q.height = j, a1Q.style.width = sv + "px", a1Q.style.height = a8G + "px", aUI = bf.eM + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hx = 0, this.ud = 1, this.k = 1, this.sW = 0, this.de = function() {
		this.i = aUK(document.documentElement.clientWidth) + 2, this.j = aUK(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		f8 = 1, a1Q = document.getElementById("canvasA"), (uh = a1Q.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aUL(0)
	}, this.j3 = function() {
		50 <= ++f8 && resize(0), -1 === aUI || bf.eM < aUI || (aUI = -1, 2e3 * ++aUJ >= bf.eM + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(jQ) {
		bu = !0, resize(jQ)
	}, this.a25 = function() {
		aUH + 1e3 > bf.eM || (aUH = bf.eM, resize(0))
	}
}

function dH() {
	this.aSY = new aUR, this.a0m = new aUS, this.aSk = new aUT
}

function aUT() {
	this.ph = function() {
		return 69
	}, this.zP = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aUS() {
	this.a0n = function() {
		for (var gL, en = al.kB, zl = al.kC, a0W = ag.a0W, a85 = this.aH7(), aB = 0; aB < en; aB++) gL = zl[aB], bA.g9.jY(gL) || (a0W[gL] = a85);
		var pz = ag.pz,
			jC = ag.jC,
			jD = ag.jD,
			a0U = ag.a0U,
			en = aD.kA;
		for (aB = 0; aB < en; aB++)(0 === a0U[aB] || jD[aB] < 1 || 2 * pz[aB] > 3 * (jC[aB] + jD[aB])) && (a0W[aB] = 0);
		var a0k = 0;
		for (aB = 0; aB < en; aB++) a0k += 0 < a0W[aB];
		return a0k
	}, this.aH7 = function() {
		return Math.min(65535, bf.k7())
	}
}

function aUR() {
	function aUX(g, fF, hf) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fF >> (aB + hf) % 30 & 1)) % 256
	}
	this.j3 = function(aUU, aUV) {
		var g = new Uint8Array(256);
		return function(g, aUU, aUV) {
				var aB, aUZ = 3 + (4 + aUU) % 32768,
					aUa = 12 + aUV % 32768,
					aUb = 17 + ((aUU & aUV) + (aUU | aUV) + aUU) % 32768;
				for (aB = 0; aB < 256; aB++) aUZ = 1 + aUZ * aUa % aUb, g[aB] = aUZ % 256
			}(g, aUU, aUV), aUX(g, aUU, 2), aUX(g, aUV, 7),
			function(g) {
				var aB, fF, e8 = 0;
				for (aB = 0; aB < 3e4; aB++) fF = g[e8], g[e8] = (fF + aB + g[(e8 + aB) % 256]) % 256, e8 = (fF + aB + e8 + (fF & e8)) % 256
			}(g),
			function(g) {
				var aB, a8G = 1,
					td = 1;
				for (aB = 0; aB < 256; aB += 2) a8G = (1 + a8G) * (g[aB] + 1) % 1073741824, td = (1 + td) * (g[aB + 1] + 1) % 1073741824;
				return [a8G, td]
			}(g)
	}
}

function cm() {
	var aUc, aUd, i1, aUe;
	this.dd = function() {
		var aB, eu, ew, aSl, aUf, i, j, y7, hm, wX, fF, gL, f3, f6, aUi;
		if (function() {
				if (i1 = !0, aUe = "rgb(" + bS.wV[0] + "," + bS.wV[1] + "," + bS.wV[2] + ")", bS.aKK(bS.eT)) return 1;
				return i1 = !1, 0
			}()) aUd = null;
		else {
			for (aUc = bL.du(96, 4), aUf = 1 === bS.eT ? (aSl = 0, 160) : (aSl = 128, 32), aUe = "rgb(" + aSl + "," + aSl + "," + aSl + ")", aUd = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aUd[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.ey : aUc, j = aB % 2 == 0 ? aUc : bS.ez + 2 * aUc, aUd[aB].width = i, aUd[aB].height = j, wX = (hm = (y7 = aUd[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (ew = aUc - 1; 0 <= ew; ew--)
						for (fF = aUf + Math.floor((ew + 1) * (aSl - aUf) / (aUc + 1)), eu = i - 1; 0 <= eu; eu--) wX[gL = 4 * ((0 === aB ? aUc - ew - 1 : ew) * i + eu)] = fF, wX[gL + 1] = fF, wX[gL + 2] = fF, wX[gL + 3] = 255;
				else {
					for (eu = aUc - 1; 0 <= eu; eu--)
						for (fF = aUf + Math.floor((eu + 1) * (aSl - aUf) / (aUc + 1)), ew = j - 1 - aUc; aUc <= ew; ew--) wX[gL = 4 * (ew * i + (3 === aB ? aUc - eu - 1 : eu))] = fF, wX[gL + 1] = fF, wX[gL + 2] = fF, wX[gL + 3] = 255;
					for (f6 = 1; 0 <= f6; f6--)
						for (eu = aUc - 1; 0 <= eu; eu--)
							for (ew = aUc - 1; 0 <= ew; ew--) f3 = (Math.pow(eu * eu + ew * ew, .5) + 1) / (aUc + 1), fF = aUf + Math.floor((1 < f3 ? 1 : f3) * (aSl - aUf)), wX[gL = 4 * ((0 === f6 ? aUc - ew - 1 : ew + f6 * (j - aUc)) * i + (
								1 === aB ? eu : aUc - eu - 1))] = fF, wX[gL + 1] = fF, wX[gL + 2] = fF, wX[gL + 3] = 255
				}
				y7.putImageData(hm, 0, 0)
			}
			aUi = aUf, bS.wQ.fillStyle = "rgb(" + aUi + "," + aUi + "," + aUi + ")", bS.wQ.fillRect(0, 0, bS.ey, 1), bS.wQ.fillRect(0, bS.ez - 1, bS.ey, 1), bS.wQ.fillRect(0, 0, 1, bS.ez), bS.wQ.fillRect(bS.ey - 1, 0, 1, bS.ez)
		}
	}, this.y1 = function() {
		var f6 = i1 ? 0 : -aUc;
		aM4(f6, f6, bS.ey - 2 * f6, bS.ez - 2 * f6, ba.aUj, ba.aUk, ba.aUl, ba.aUm) || (uh.fillStyle = aUe, uh.fillRect(0, 0, h.i, h.j))
	}, this.ug = function() {
		i1 || (aM3(0, -aUc, bS.ey, aUc, ba.aUj, ba.aUk, ba.aUl, ba.aUm) && uh.drawImage(aUd[0], ba.aUn, ba.aUo - aUc), aM3(bS.ey, -aUc, aUc, bS.ez + 2 * aUc, ba.aUj, ba.aUk, ba.aUl, ba.aUm) && uh.drawImage(aUd[1], ba.aUn + bS.ey, ba.aUo - aUc),
			aM3(0, bS.ez, bS.ey, aUc, ba.aUj, ba.aUk, ba.aUl, ba.aUm) && uh.drawImage(aUd[2], ba.aUn, ba.aUo + bS.ez), aM3(-aUc, -aUc, aUc, bS.ez + 2 * aUc, ba.aUj, ba.aUk, ba.aUl, ba.aUm) && uh.drawImage(aUd[3], ba.aUn - aUc, ba.aUo - aUc))
	}
}

function d6() {
	this.aH5 = new aUp, this.y4 = new aUq, this.y = new aUr, this.iX = new aUs, this.aUi = new aUt, this.m4 = new aUu, this.jy = new aUv, this.kv = new aUw, this.aUx = new aUy, this.aUz = new aV0, this.mF = new aV1, this.hN = new aV2, this.lU =
		new aV3, this.kx = new aV4, this.hQ = new aV5, this.m8 = new aV6, this.q7 = new aV7, this.dd = function() {
			this.lU.dd(), this.y4.dd(), this.y.dd(), this.iX.dd(), this.aUi.dd(), this.aUz.dd(), this.m8.dd()
		}, this.ug = function() {
			this.aUz.ug(), this.y4.ug()
		}
}

function aUv() {
	this.j3 = function(player) {
		return !!bN.mF.mG(player) && !(bN.y.ps[player] >= Math.max(3 * ao.performance.lM, aE.kO[aE.hW[player]]) || !bA.g9.mH(player, aE.kM[aE.hW[player]], 32, 0)) && (aW.aAy() ? function(player) {
			var aVA = bN.kx.aB1(),
				en = aVA.length;
			if (0 === en) return !1;
			aVA = aVA[ay.jS(en)], en = bN.y.m2[aVA];
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
			}(player, aVA) && !!bN.hQ.q6(player, en, 1) && (bA.g9.mJ(player), bN.y.mK(player), !0)
		}(player) : !!(ao.iz.j3(player) || ao.io.j3(player) || ao.iq.j3(player)) && (function(player) {
			bO.fP[1] = 4, bA.g9.mJ(player), bN.y.mK(player)
		}(player), !0))
	}
}

function aV6() {
	var aVD = 0,
		aVE = null;
	this.dd = function() {
		null === aVE && (aVE = new Uint16Array(2 * bN.y.kO)), aVD = 0
	}, this.jG = function(aVF, m8) {
		var aVG = aVE;
		aVG[aVD++] = aVF, aVG[aVD++] = m8
	}, this.m9 = function(player, m7) {
		for (var aVG = aVE, en = aVD, aB = 0; aB < en; aB += 2)
			if (aVG[aB] === m7 && bN.kx.aVH(aVG[aB + 1]) && player === bN.y.m3[bO.fP[2]] >> 3) return !0;
		return !1
	}, this.aVI = function(aVJ) {
		var m4 = bN.y.m0[aVJ];
		if (!(m4 < 64)) {
			var m7 = bN.y.m2[aVJ],
				aVG = aVE,
				en = aVD;
			for (let aB = en - 2; 0 <= aB; aB -= 2)
				if (aVG[aB] === m7) {
					{
						aVO = void 0;
						var aVO = aVG[aB + 1];
						bN.kx.aVH(aVO) && bN.m8.aVW(bO.fP[2])
					}
					aVG[aB] = aVG[en - 2], aVG[aB + 1] = aVG[en - 1], en -= 2
				} aVD = en
		}
	}, this.aVL = function(aVM, aVN) {
		for (var aVO = bN.y.m2[aVM], m7 = -1, aVG = aVE, en = aVD, aB = 1; aB < en; aB += 2)
			if (aVG[aB] === aVO) {
				m7 = aVG[aB - 1];
				break
			} if (-1 === m7) return !1;
		if (!bN.kx.aVH(m7)) return !1;
		var aVJ = bO.fP[2],
			lT = bN.y.m1[aVJ];
		if (aVN === lT[lT.length - 1]) bN.y.m1[aVM] = bN.lU.aVP(bN.y.m1[aVM], bN.lU.lc(lT));
		else {
			var aVQ = bN.kx.aVR(lT, aVN);
			if (-1 === aVQ) return !1;
			var aVS = bN.y.mD[aVJ];
			aVQ === aVS ? (aVJ = bM.iV(bN.y.mE[aVJ]), bN.y.m1[aVM] = bN.lU.aVU(bN.y.m1[aVM], lT, aVQ, aVN, bM.iD(lT[aVQ], aVN) > bM.iD(lT[aVQ], aVJ))) : bN.y.m1[aVM] = bN.lU.aVU(bN.y.m1[aVM], lT, aVQ, aVN, aVS < aVQ)
		}
		return !0
	}, this.aVW = function(aVX) {
		var lT, l3 = bN.y,
			m4 = l3.m0[aVX];
		return m4 % 64 != 5 && (lT = l3.m1[aVX], l3.aVY[aVX] = 65535 - l3.aVY[aVX], l3.mD[aVX] = lT.length - l3.mD[aVX] - 2, l3.m1[aVX] = bN.lU.lc(lT), l3.m0[aVX] = m4 - m4 % 64 + 5, !0)
	}
}

function aV1() {
	this.mG = function(player) {
		return !!aD.data.passableWater && bN.y.lz !== bN.y.kO && bN.y.ps[player] !== bN.y.aVZ && 0 !== ag.gU[player].length
	}, this.q2 = function(aTI) {
		var m4 = bO.fP[1];
		return !(4 <= m4 || !bN.kx.aVa(bM.ed(aTI))) && ac.ei(bM.ed(bM.iZ(aTI, m4)))
	}
}

function aUp() {
	this.aH6 = function(player) {
		for (var a7V = bN.y.a7V, t8 = player << 3, aB = t8 + bN.y.ps[player] - 1; t8 <= aB; aB--) this.aVb(a7V[aB])
	}, this.aVb = function(aVc) {
		var y = bN.y,
			aVd = y.lz - 1,
			aVe = y.m3[aVc],
			aVf = y.aVg[aVc],
			aVh = y.mE[aVc];
		y.lz = aVd, y.m3[aVc] = y.m3[aVd], y.mE[aVc] = y.mE[aVd], y.aVY[aVc] = y.aVY[aVd], y.a6T[aVc] = y.a6T[aVd], y.aVg[aVc] = y.aVg[aVd], y.m2[aVc] = y.m2[aVd], y.m0[aVc] = y.m0[aVd], y.aVi[aVc] = y.aVi[aVd], y.m1[aVc] = y.m1[aVd], y.mD[aVc] =
			y.mD[aVd], y.a7V[y.m3[aVc]] = aVc,
			function(aTH) {
				var player = aTH >> 3,
					y = bN.y,
					en = y.ps[player] - 1,
					aVl = (player << 3) + en;
				y.ps[player] = en, aVl !== aTH && (y.a7V[aTH] = y.a7V[aVl], y.m3[y.a7V[aTH]] = aTH)
			}(aVe), bN.iX.iX[bM.iW(y.mE[aVc])][y.aVg[aVc]] = aVc, aVd = bM.iW(aVh), aVe = aVf, aVd = bN.iX.iX[aVd], y = aVd.pop(), aVe !== aVd.length && (aVd[aVe] = y, bN.y.aVg[y] = aVe)
	}
}

function aUq() {
	var aVn, aVo = 8,
		aVp = null;

	function aVu(wX, eZ, e8) {
		eZ *= 4;
		wX[eZ] = 255, wX[1 + eZ] = 255, wX[2 + eZ] = e8, wX[3 + eZ] = 255
	}

	function aVw(hp, aUe) {
		var eu, ew, i7, eZ, aVy, aVz, hj = aVo,
			hm = bA.qa.getImageData(hp, hj, hj),
			wX = hm.data,
			l3 = (hj >> 1) - .5,
			aW1 = bA.qi.a2J(aUe, .5);
		for (bA.qi.a2L(aUe, aW1, 300) || bA.qi.a2N(aUe, 100), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) aVz = (hj - 1.5) * (hj - 1.5) / 4, wX[eZ = 4 * (ew * hj + eu)] = (aVy = (i7 = (i7 = eu - l3) * i7 + (i7 = ew - l3) * i7) <= (hj - 4.5) * (hj - 4.5) / 4 ? aW1 : aUe)[0], wX[1 + eZ] = aVy[1], wX[2 + eZ] = aVy[2],
				wX[3 + eZ] = aVz < i7 ? 0 : 255;
		hp.putImageData(hm, 0, 0)
	}
	this.dd = function() {
		var e8, hj, a2l, hp, hm, wX;
		(aVn = aVn || new Array(aD.ek)).fill(null), e8 = 255, hj = aVo + 4, a2l = bA.qa.wM(hj, hj), hp = bA.qa.getContext(a2l, !0), hm = bA.qa.getImageData(hp, hj, hj), aVu(wX = hm.data, hj + 1, e8), aVu(wX, hj + 2, e8), aVu(wX, 2 * hj + 1, e8),
			aVu(wX, 2 * hj - 3, e8), aVu(wX, 2 * hj - 2, e8), aVu(wX, 3 * hj - 2, e8), aVu(wX, hj * (hj - 3) + 1, e8), aVu(wX, hj * (hj - 2) + 1, e8), aVu(wX, hj * (hj - 2) + 2, e8), aVu(wX, hj * (hj - 2) - 2, e8), aVu(wX, hj * (hj - 1) - 3, e8),
			aVu(wX, hj * (hj - 1) - 2, e8), hp.putImageData(hm, 0, 0), aVp = a2l,
			function() {
				if (aD.hh)
					for (var a2l = new Array(bg.kX.length), en = aD.ek, aVs = aVn, aAM = bg.aAM, aB = 0; aB < en; aB++) {
						var a5D = aAM[aB];
						a2l[a5D] || (a2l[a5D] = function(a5D) {
							var a2l = bA.qa.wM(aVo, aVo),
								hp = bA.qa.getContext(a2l, !0),
								g = bO.fM;
							return g.set(bg.aVx[a5D]), aVw(hp, g), a2l
						}(a5D)), aVs[aB] = a2l[a5D]
					}
			}()
	}, this.ug = function() {
		var aB, player, aW2, aMC, hW, i6, aW4, aW6, aW7, mE = bN.y.mE,
			m3 = bN.y.m3,
			a6T = bN.y.a6T,
			aVi = bN.y.aVi,
			aW8 = aVn,
			aW9 = aD.eX,
			en = bN.y.lz,
			aWA = h.i,
			aWB = h.j,
			aWC = bS.ey << 4,
			ec = hy,
			eR = ec / aVo,
			n8 = iO / ec,
			n9 = iP / ec,
			i7 = (aWA + iO) / ec - n8,
			iA = (aWB + iP) / ec - n9,
			hp = uh;
		for (hp.imageSmoothingEnabled = ec < 9, bA.qa.textAlign(hp, 1), bA.qa.textBaseline(hp, 1), aB = 0; aB < en; aB++) player = m3[aB] >> 3, hW = a6T[aB], aW2 = .9 + .1 * Math.log10(hW), aMC = (i6 = mE[aB]) % aWC / 16 - aW2, i6 = aWB * (Math
			.floor(i6 / aWC) / 16 - aW2 - n9) / iA, aW4 = -2 * (aW7 = ec * aW2) * (1 + (aW6 = +(player === aW9)) / 8), aW6 = aW6 * aW7 / 4, (aW7 = aWA * (aMC - n8) / i7) < aW4 || i6 < aW4 || aWA + aW6 < aW7 || aWB + aW6 < i6 || (aMC = 2 *
			aW2 * eR, aW4 = aW2 * ec, null === (aW6 = aW8[player]) && (aW8[player] = aW6 = function(player) {
				var a2l = bA.qa.wM(aVo, aVo);
				return aVw(bA.qa.getContext(a2l, !0), ac.a76(player)), a2l
			}(player)), player === aW9 && (hp.setTransform(aMC, 0, 0, aMC, aW7 - 2 * aMC, i6 - 2 * aMC), hp.drawImage(aVp, 0, 0)), hp.setTransform(aMC, 0, 0, aMC, aW7, i6), hp.drawImage(aW6, 0, 0), (aW2 = Math.floor(function(hW) {
				if (hW < 1e3) return .42;
				if (hW < 1e4) return .34;
				if (hW < 1e6) return .26;
				if (hW < 1e8) return .19;
				return .15
			}(hW) * aW4)) < 6) || (hp.setTransform(1, 0, 0, 1, 0, 0), hp.fillStyle = aVi[aB] ? bB.oG : bB.ni, hp.font = bA.qa.sO(1, aW2), hp.fillText(bA.rZ.zE(hW), aW7 + aW4, i6 + aW4 + .1 * aW2));
		hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aV0() {
	var aWF;
	this.dd = function() {
		if (aD.hh) {
			var hd = 1 - aD.xA;
			aWF = new Array(bg.kX.length);
			for (var aB = aD.x9 - 1; 0 <= aB; aB--) {
				var a5D = bg.kX[aB + hd];
				aWF[a5D] = bP.y.aWH(20, bg.aWI[a5D])
			}
			9 === aD.kS && (aWF[1] = bP.y.aWH(20, bg.aWI[1]))
		} else aWF = [bP.y.aWH(20, bg.aWI[7])]
	}, this.ug = function() {
		var nS = hy;
		if (!(5 <= nS)) {
			var aWA = h.i,
				aWB = h.j,
				n8 = iO / nS,
				n9 = iP / nS,
				nL = (aWA + iO) / nS,
				nM = (aWB + iP) / nS,
				gM = -20 * nS,
				aWK = .5 * gM,
				aWC = bS.ey << 4,
				en = bN.y.lz,
				mE = bN.y.mE,
				m3 = bN.y.m3,
				aAM = bg.aAM,
				a2l = aWF,
				hp = uh;
			3 < nS && (hp.globalAlpha = .5 * (5 - nS));
			for (var aB = 0; aB < en; aB++) {
				var i6 = mE[aB],
					eu = aWA * (i6 % aWC / 16 - n8) / (nL - n8) + aWK,
					i6 = aWB * (Math.floor(i6 / aWC) / 16 - n9) / (nM - n9) + aWK;
				aWA < eu || aWB < i6 || eu < gM || i6 < gM || (hp.setTransform(nS, 0, 0, nS, eu, i6), hp.drawImage(a2l[aAM[m3[aB] >> 3]], 0, 0))
			}
			hp.globalAlpha = 1, hp.setTransform(nS, 0, 0, nS, 0, 0)
		}
	}
}

function aV4() {
	this.aWN = function(player, id) {
		for (var aWO = ag.gU[player], en = aWO.length, aB = 0; aB < en; aB++)
			if (bM.hz(aWO[aB], id)) return !0;
		return !1
	}, this.aWP = function(player, eZ) {
		for (var iF, aWQ, eR, aWO = ag.gU[player], en = aWO.length, i = bS.ey, aWS = bM.ev(eZ), aWT = bM.ex(eZ), et = -1, min = bS.ey * bS.ey + bS.ez * bS.ez, id = ac.eV(bM.ed(eZ)), aB = 0; aB < en; aB++)(aWQ = (aWQ = aWS - (iF = (eR = aWO[
			aB]) >> 2) % i) * aWQ + (aWQ = aWT - ~~((.5 + iF) / i)) * aWQ) < min && bM.hz(eR, id) && (min = aWQ, et = iF);
		return et
	}, this.ky = function(iE, iF) {
		for (var id = ac.eV(bM.ed(iF)), i0 = bM.hs, eR = bM.ed(iE), aWU = -1, aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			ac.i1(ec) && ac.eV(ec) === id && (-1 === aWU || bM.iG(bM.eb(ec), iF) < bM.iG(aWU, iF)) && (aWU = bM.eb(ec))
		}
		return aWU
	}, this.lX = function(player, eZ) {
		for (var i0 = bM.hs, eR = bM.ed(eZ), aB = 0; aB < 4; aB++) {
			var ec = eR + i0[aB];
			if (ac.gN(ec) && ac.xz(player, ec)) return !0
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
	}, this.aVa = function(eR) {
		if (ac.i1(eR))
			for (var i0 = bM.hs, aB = 0; aB < 4; aB++)
				if (ac.ei(eR + i0[aB])) return !0;
		return !1
	}, this.n7 = function(player, id) {
		for (var t8 = player << 3, t9 = t8 + bN.y.ps[player], m2 = bN.y.m2, a7V = bN.y.a7V, aB = t8; aB < t9; aB++) {
			var a7W = a7V[aB];
			if (m2[a7W] === id) return a7W
		}
		return -1
	}, this.nC = function(player) {
		return 0 === bN.y.ps[player] ? -1 : bN.y.a7V[player << 3]
	}, this.a5V = function(lN, lO) {
		var en = bN.y.lz;
		if (en < 1) return -1;
		for (var mE = bN.y.mE, aWV = 80, aOS = -1, aB = 0; aB < en; aB++) {
			var f3 = bM.i3(lN, lO, mE[aB]);
			f3 < aWV && (aWV = f3, aOS = aB)
		}
		return function(aB, lN, lO) {
			if (aB < 0) return;
			var aWc = bN.y.mE[aB],
				aWd = bM.i9(aWc),
				aWc = bM.iC(aWc),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a6T[aB]));
			return aB = Math.max(aB, bM.iQ(bA.qa.tD(.02, 1.7))), bL.aMB(bM.i8(lN), bM.iB(lO), aWd, aWc, aB)
		}(aOS, lN, lO) ? aOS : -1
	}, this.aVH = function(n5) {
		for (var en = bN.y.lz, m2 = bN.y.m2, aB = 0; aB < en; aB++)
			if (m2[aB] === n5) return bO.fP[2] = aB, !0;
		return !1
	}, this.aH2 = function(player) {
		for (var t8 = player << 3, t9 = t8 + bN.y.ps[player], a7V = bN.y.a7V, a6T = bN.y.a6T, hW = 0, aB = t8; aB < t9; aB++) hW += a6T[a7V[aB]];
		return hW
	}, this.aWX = function(player, aVX) {
		aVX = bN.y.m1[aVX];
		return this.lX(player, aVX[aVX.length - 1])
	}, this.aWY = function(iE, iF, f3, aWZ) {
		var iI = bM.ev(iE),
			iE = bM.ex(iE),
			iK = bM.ev(iF),
			iF = bM.ex(iF),
			iK = (f3 = Math.max(f3, 1), iK - iI),
			iF = iF - iE,
			i7 = bL.du(Math.abs(iK) * aWZ, f3),
			aWZ = bL.du(Math.abs(iF) * aWZ, f3);
		return bM.fB(iI + Math.sign(iK) * i7, iE + Math.sign(iF) * aWZ)
	}, this.aVR = function(lT, eZ) {
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
	}, this.aB1 = function() {
		for (var aWf = lk[0], m3 = bN.y.m3, lz = bN.y.lz, g = [], aB = 0; aB < lz; aB++) bA.g9.km(aWf, m3[aB] >> 3) && g.push(aB);
		return g
	}, this.lV = function(player, lT) {
		for (var t8 = player << 3, t9 = t8 + bN.y.ps[player], a7V = bN.y.a7V, m1 = bN.y.m1, hF = lT[0], kl = lT[lT.length - 1], aB = t8; aB < t9; aB++) {
			var gL = m1[a7V[aB]];
			if (gL[0] === hF && gL[gL.length - 1] === kl) return !0
		}
		return !1
	}
}

function aV5() {
	function aWi(player, aVX) {
		aVX = bM.iV(bN.y.mE[aVX]), aVX = ac.eV(bM.ed(aVX));
		return !!bN.kx.aWN(player, aVX)
	}

	function aWg(player) {
		return bN.mF.mG(player) && !bN.lU.la()
	}
	this.hR = function(player, eZ) {
		return !!aWg(player) && -1 !== (eZ = function(player, eZ) {
			for (var en = bN.y.lz, mE = bN.y.mE, m3 = bN.y.m3, aWV = bM.hu(), aOS = -1, aB = 0; aB < en; aB++) {
				var f3 = bM.iD(eZ, bM.iV(mE[aB]));
				f3 < aWV && bA.g9.km(player, m3[aB] >> 3) && (aWV = f3, aOS = aB)
			}
			return aOS
		}(player, eZ)) && !!aWi(player, eZ) && (bO.fP[3] = bN.y.m2[eZ], !0)
	}, this.pC = function(player, n5) {
		return !!aWg(player) && !!bN.kx.aVH(n5) && !!aWi(player, bO.fP[2])
	}, this.q6 = function(player, n5, aWj) {
		return !! function(player, n5, aWj) {
			if (aWg(player) && bN.kx.aVH(n5)) {
				n5 = bO.fP[2];
				if (bA.g9.km(player, bN.y.m3[n5] >> 3)) {
					if (function(player, aVX) {
							return bN.kx.aWX(player, aVX) && (bO.g[0] = bN.lU.lc(bN.y.m1[aVX]), bO.fP[1] = 6, !0)
						}(player, n5)) return 1;
					var aVC = bM.iV(bN.y.mE[n5]),
						aWn = bN.kx.aWP(player, aVC);
					if (-1 !== aWn) {
						aWn = bM.iD(aWn, aVC);
						if (!(aWj && 120 < aWn)) {
							aWj = function(aVX, aWo, aVC) {
								var lT = bN.y.m1[aVX],
									aVX = bN.y.mD[aVX],
									aWq = bM.iD(aVC, lT[aVX + 1]);
								if (aWo <= aWq) return bN.kx.aWY(aVC, lT[aVX + 1], aWq, aWo);
								for (var f3 = aWo - aWq, en = lT.length - 1, aB = aVX + 1; aB < en; aB++) {
									var aWr = bM.iD(lT[aB], lT[aB + 1]);
									if (f3 <= aWr) return bN.kx.aWY(lT[aB], lT[aB + 1], aWr, f3);
									f3 -= aWr
								}
								return lT[en]
							}(n5, aWn, aVC);
							if (bN.kv.q3(player, aWj, 1)) return bO.fP[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n5, aWj) && (player = bO.fP[2], bN.y.m0[player] = 64 + bN.y.m0[player] % 64, bN.m8.jG(n5, bN.y.mI), !0)
	}
}

function aUu() {
	function aWw(player, hW, aWu, aVC) {
		var jJ;
		if (ac.ee(aWu)) jJ = aD.ek;
		else {
			if ((jJ = ac.ef(aWu)) === player) return void bd.gD(player, hW - bA.g9.gC(player, hW), 12);
			if (!bs.eg(player, jJ)) return void b8.kD.pR(player, jJ, hW)
		}
		ad.jW(player, jJ) || ad.jo(player) ? (ag.gF[player].push(aVC << 2), ad.jG(player, hW, jJ), aF.jH(player, !0)) : bd.gD(player, hW, 12)
	}
	this.j3 = function() {
		for (var m0 = bN.y.m0, mE = bN.y.mE, aVY = bN.y.aVY, aB = bN.y.lz - 1; 0 <= aB; aB--) 65535 === aVY[aB] && function(aB, aVC, he) {
			if (6 === he) {
				if (bN.m8.aVL(aB, aVC)) return bN.y.mD[aB]++, bN.y.aVY[aB] = 0, 0
			} else {
				var player = bN.y.m3[aB] >> 3,
					aB = bN.y.a6T[aB];
				bd.aWv(player), he < 4 ? aWw(player, aB, aVC + bM.hr[he] << 2, aVC) : 4 === he ? function(player, hW, aVC) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVC);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aWw(player, hW, er, aVC);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && !ac.xz(player, er)) return aWw(player, hW, er, aVC);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aWw(player, hW, er, aVC)
				}(player, aB, aVC) : 5 === he && function(player, hW, aVC) {
					var aB, er, i0 = bM.hs,
						ec = bM.ed(aVC);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er) && ac.xz(player, er)) return aWw(player, hW, er, aVC);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.gN(er)) return aWw(player, hW, er, aVC);
					for (aB = 0; aB < 4; aB++)
						if (er = ec + i0[aB], ac.ee(er)) return aWw(player, hW, er, aVC)
				}(player, aB, aVC)
			}
			return 1
		}(aB, bM.iV(mE[aB]), m0[aB] % 64) && (bN.m8.aVI(aB), bN.aH5.aVb(aB))
	}, this.aWt = function(player, eZ, he, n5) {
		if (!(4 <= he)) {
			var aW9 = aD.eX;
			if (bA.g9.gz(aW9) && bs.eg(player, aW9) && player !== aW9 && 0 !== ag.gU[aW9].length) {
				var aWu = eZ + bM.hr[he] << 2;
				if (ac.ee(aWu) || bs.eg(player, ac.ef(aWu))) {
					for (var f1 = !1, aB = 0; aB < 4; aB++)
						if (aWu = eZ + bM.hr[aB] << 2, ac.ei(aWu) && !ac.ee(aWu) && ac.ef(aWu) === aW9) {
							f1 = !0;
							break
						} f1 && (aN.a6c(719, 0), aN.yP(180, L(432, [ag.yQ[player]]), 719, player, bB.oF, bB.nf, -1, !0, void 0, {
						f7: 1,
						n5: n5
					}))
				}
			}
		}
	}
}

function aUr() {
	this.kO = 512, this.aVZ = 8, this.lz = 0, this.mI = 0, this.m3 = new Uint16Array(this.kO), this.mE = new Uint32Array(this.kO), this.aVY = new Uint16Array(this.kO), this.a6T = new Uint32Array(this.kO), this.aVg = new Uint16Array(this.kO), this
		.m2 = new Uint16Array(this.kO), this.m0 = new Uint8Array(this.kO), this.aVi = new Uint8Array(this.kO), this.m1 = new Array(this.kO), this.mD = new Uint16Array(this.kO), this.ps = new Uint8Array(aD.ek), this.a7V = new Uint16Array(this.aVZ * aD
			.ek), this.dd = function() {
			this.lz = 0, this.mI = 0, this.ps.fill(0), this.m1.fill(null)
		}, this.mK = function(player) {
			var hW = bO.fK[0],
				m4 = bO.fP[1],
				lT = bO.g[0],
				aWz = this.mI,
				en = this.lz,
				aX0 = bM.iU(lT[0]),
				aX1 = this.ps[player],
				aX2 = (player << 3) + aX1;
			this.m3[en] = aX2, this.mE[en] = aX0, this.aVY[en] = 0, hW < 60 ? (bA.g9.gA(player, 60 - hW), this.a6T[en] = 60) : this.a6T[en] = hW, this.aVg[en] = bN.iX.mK(en, bM.iW(aX0)), this.m2[en] = aWz, this.m0[en] = m4, this.aVi[en] = 0, this.m1[
				en] = lT, this.mD[en] = 0, this.mI = (aWz + 1) % 65536, this.ps[player] = aX1 + 1, this.a7V[aX2] = en, this.lz++, bN.m4.aWt(player, lT[lT.length - 1], m4, aWz)
		}, this.j3 = function() {
			bN.m4.j3();
			for (var gL = aD.eX, dt = bN.kx.aH2(gL), sB = (! function(sB) {
					for (var aX7, mE = sB.mE, a6T = sB.a6T, aVi = sB.aVi, aVY = sB.aVY, aVg = sB.aVg, m1 = sB.m1, mD = sB.mD, sB = sB.lz, aWC = bS.ey << 4, aB = sB - 1; 0 <= aB; aB--) {
						var aX8 = mE[aB],
							lT = m1[aB],
							aX9 = mD[aB],
							aX0 = bM.iU(lT[aX9]),
							aXA = bM.iU(lT[aX9 + 1]),
							aXB = aX0 % aWC,
							aX0 = ~~((aX0 + .5) / aWC),
							aXD = aXA % aWC,
							aXE = ~~((aXA + .5) / aWC),
							aXF = aXD - aXB,
							aXG = aXE - aX0,
							eq = Math.max(~~Math.sqrt(aXF * aXF + aXG * aXG + .5), 1),
							aXH = a6T[aB],
							aXH = (aXH = aVi[aB] ? 4e4 : 25e4 + Math.min(20 * aXH, 3e5) + Math.min(aXH >> 3, 5e4), aVY[aB] + Math.max(~~((aXH + .5) / eq), 1));
						65535 <= aXH ? aX9 + 2 < lT.length ? (mD[aB] = aX9 + 1, mE[aB] = aX7 = function(aB, aXI, aXB, aXC, aX9, eq, lT, aWC) {
							aXI = Math.min(aXI - 65535, 65535);
							var lT = bM.iU(lT[aX9 + 2]),
								aX9 = lT % aWC - aXB,
								lT = ~~((lT + .5) / aWC) - aXC,
								aXL = Math.max(~~Math.sqrt(aX9 * aX9 + lT * lT + .5), 1);
							return aXI = Math.min(Math.floor((eq * aXI + .5) / aXL), 65534), bN.y.aVY[aB] = aXI, aXB + bL.du(aXI * aX9, 65535) + aWC * (aXC + bL.du(aXI * lT, 65535))
						}(aB, aXH, aXD, aXE, aX9, eq, lT, aWC)) : (mE[aB] = aX7 = aXA, aVY[aB] = 65535) : (aVY[aB] = aXH, mE[aB] = aX7 = aXB + bL.du(aXH * aXF, 65535) + aWC * (aX0 + bL.du(aXH * aXG, 65535))), aVg[aB] = bN.iX.aXK(aVg[aB],
							aX8, aX7)
					}
				}(this), ! function(sB) {
					if (bf.k7() % 2 == 1) {
						var aB, hf, l3, f7, f8, aXM, ys, aXN, hF, n8, n9, aX0, aXO, a8x, aXQ, kl, en = sB.lz,
							mE = sB.mE,
							m3 = sB.m3,
							a6T = sB.a6T,
							aVi = sB.aVi,
							iX = bN.iX.iX,
							aXS = iX.length,
							aXT = bN.iX.aXT,
							aWC = bS.ey << 4,
							aXU = aD.hh,
							aT5 = bg.el,
							gM = (en - 1) * (bL.du(bf.k7(), 2) % 2);
						for (aB = 0; aB < en; aB++)
							for (hf = Math.abs(aB - gM), aX0 = mE[hf], l3 = bM.iW(aX0), hF = m3[hf] >> 3, n8 = aX0 % aWC, n9 = ~~((aX0 + .5) / aWC), aXQ = a6T[hf], f7 = 0; f7 < 9; f7++)
								if (!((aXM = l3 + aXT[f7]) < 0 || aXS <= aXM))
									for (aXN = iX[aXM], ys = aXN.length, f8 = 0; f8 < ys; f8++) aXO = aXN[f8], kl = m3[aXO] >> 3, hF == kl || aXU && aT5[hF] === aT5[kl] && aT5[hF] || (kl = mE[aXO], (a8x = n8 - kl % aWC) * a8x + (a8x = n9 - ~~
										((kl + .5) / aWC)) * a8x < 14400 && (kl = a6T[aXO], a8x = kl <= aXQ ? Math.max(1, bL.du(kl + bL.du(aXQ - kl, 10), 10)) : Math.max(1, bL.du(aXQ, 10)), a6T[aXO] = Math.max(kl - a8x, 0), aVi[aXO] =
										4))
					}
				}(this), ! function(sB) {
					if (bf.k7() % 5 == 3)
						for (var a6T = sB.a6T, en = sB.lz, aB = 0; aB < en; aB++) {
							var hW = a6T[aB];
							a6T[aB] = Math.max(hW - Math.max(1, hW >> 7), 0)
						}
				}(this), this), a6T = sB.a6T, aVi = sB.aVi, aB = sB.lz - 1; 0 <= aB; aB--) aVi[aB] = aVi[aB] >> 1, 0 === a6T[aB] && (bN.m8.aVI(aB), bN.aH5.aVb(aB));
			bd.gD(gL, dt - bN.kx.aH2(gL), 15)
		}
}

function aUs() {
	this.aXV = 32, this.eu = 0, this.ew = 0, this.iY = 0, this.aXW = 0, this.aXX = 4, this.iX = null, this.aXT = new Int16Array(9), this.dd = function() {
		this.iY = 1 + bL.du(bS.ey - 1, this.aXV), this.aXW = 1 + bL.du(bS.ez - 1, this.aXV), this.iX = new Array(this.iY * this.aXW), bA.qi.a2I(this.iX);
		var eu, ew, aXT = this.aXT,
			i = this.iY;
		for (eu = -1; eu <= 1; eu++)
			for (ew = -1; ew <= 1; ew++) aXT[3 * (1 + ew) + 1 + eu] = ew * i + eu
	}, this.mK = function(aXZ, aB) {
		return this.iX[aB].push(aXZ), this.iX[aB].length - 1
	}, this.aXK = function(aXa, aX0, aXA) {
		var aXb, aXc, aX0 = bM.iW(aX0),
			aXA = bM.iW(aXA);
		return aX0 === aXA ? aXa : (aXb = this.iX[aX0].pop(), this.iX[aX0].length === aXa ? this.mK(aXb, aXA) : (aXc = this.iX[aX0][aXa], this.iX[aX0][aXa] = aXb, bN.y.aVg[aXb] = aXa, this.mK(aXc, aXA)))
	}
}

function aUw() {
	this.kw = function(player, aXd) {
		return -1 !== aXd && !!bN.kx.lY(player, aXd) && this.q3(player, aXd, 0)
	}, this.q3 = function(player, aXd, aXe) {
		player = function(player, aXd, aXe) {
			var aWn = bN.kx.aWP(player, aXd);
			if (-1 === aWn) return -1;
			aWn = bN.kx.ky(aWn, aXd);
			if (-1 === aWn) return -1;
			var lR = bN.lU.lZ(aWn, aXd);
			if (0 <= lR) return lR;
			if (bN.lU.la()) return -1;
			if (0 <= (lR = bN.lU.lZ(aXd, aWn))) return bN.lU.lb(bN.lU.lc(bN.lU.get(lR)));
			if (aWn === aXd) return bN.lU.lb(new Uint32Array([aWn, aXd]));
			if (0 <= (lR = bN.aUx.q3(aWn, aXd))) return lR;
			return aXe ? function(aXi, player) {
				var fU = bO.fU,
					eK = (fU.fill(0), [aXi]),
					ht = (fU[aXi] = 1, bM.ht),
					aXj = -1,
					en = eK.length;
				for (; - 1 === aXj && en;) {
					for (var g = [], aB = 0; aB < en; aB++)
						for (var eZ = eK[aB], a45 = fU[eZ], eq = 0; eq < 8; eq++) {
							var w6, a0g, et = eZ + ht[eq],
								eR = 4 * et;
							ac.i1(eR) ? (w6 = fU[et], a0g = a45 + 5 + ((1 & eq) << 1), 0 === w6 ? (g.push(et), fU[et] = a0g) : fU[et] = Math.min(a0g, w6)) : -1 === aXj && eq % 2 == 0 && ac.xw(player, eR) && (aXj = eZ)
						}
					en = (eK = g).length
				}
				return -1 !== aXj ? function(iE, aXl) {
					var ht = bM.ht,
						aXm = -1,
						he = 0,
						me = [];
					for (; aXl !== iE;)(he = function(eZ, he) {
						var fU = bO.fU,
							ht = bM.ht,
							a45 = fU[eZ];
						if (a45 - fU[eZ + ht[he]] != 5 + ((1 & he) << 1))
							for (var f6 = 0; f6 < 8; f6++) {
								var eq = f6 + he + 6 & 7;
								if (a45 - fU[eZ + ht[eq]] == 5 + ((1 & eq) << 1)) return eq
							}
						return he
					}(aXl, he)) !== aXm && (me.push(aXl), aXm = he), aXl += ht[he];
					me.push(iE);
					var lR = bN.lU.lZ(me[0], iE);
					if (0 <= lR) return lR;
					return bN.lU.lb(new Uint32Array(me))
				}(aXi, aXj) : -1
			}(aXd, player) : -1
		}(player, aXd, aXe);
		return -1 !== player && (bO.g[0] = bN.lU.get(player), !0)
	}
}

function aUy() {
	function aXo(h2, iJ, iL) {
		for (var jR = Math.min(iJ, iL), nQ = Math.max(iJ, iL), ew = jR + 1; ew < nQ; ew++)
			if (!ac.i1(bM.iR(h2, ew))) return;
		return 1
	}

	function aXp(h4, iI, iK) {
		for (var jR = Math.min(iI, iK), nQ = Math.max(iI, iK), eu = jR + 1; eu < nQ; eu++)
			if (!ac.i1(bM.iR(eu, h4))) return;
		return 1
	}

	function aXq(iI, iJ, iK, iL, aXg, aXd) {
		for (var en = Math.min(Math.abs(iK - iI), Math.abs(iL - iJ)), i7 = Math.sign(iK - iI), iA = Math.sign(iL - iJ), aB = 0; aB < en; aB++)
			if (!ac.i1(bM.iR(iI += i7, iJ += iA))) return null;
		return iI === iK ? aXo(iI, iJ, iL) ? new Uint32Array([aXg, bM.fB(iI, iJ), aXd]) : null : aXp(iJ, iI, iK) ? new Uint32Array([aXg, bM.fB(iI, iJ), aXd]) : null
	}
	this.q3 = function(aXg, aXd) {
		aXg = function(aXg, aXd) {
			var iI = bM.ev(aXg),
				iJ = bM.ex(aXg),
				iK = bM.ev(aXd),
				iL = bM.ex(aXd);
			if (iI === iK) {
				if (aXo(iI, iJ, iL)) return new Uint32Array([aXg, aXd])
			} else {
				if (iJ !== iL) return aXq(iI, iJ, iK, iL, aXg, aXd) || aXq(iK, iL, iI, iJ, aXg, aXd);
				if (aXp(iJ, iI, iK)) return new Uint32Array([aXg, aXd])
			}
			return null
		}(aXg, aXd);
		return null === aXg ? -1 : bN.lU.lb(aXg)
	}
}

function aV3() {
	var aXr = [];
	this.dd = function() {
		aXr = []
	}, this.la = function() {
		return 65536 === aXr.length
	}, this.lZ = function(aXg, aXd) {
		for (var lU = aXr, en = lU.length, aB = 0; aB < en; aB++) {
			var gL = lU[aB];
			if (gL[0] === aXg && gL[gL.length - 1] === aXd) return aB
		}
		return -1
	}, this.lc = function(lT) {
		var aXs = new Uint32Array(lT.length);
		return aXs.set(lT), aXs.reverse()
	}, this.aVP = function(hF, kl) {
		var gG = hF.length - 1,
			aXt = new Uint32Array(gG + kl.length);
		return aXt.set(hF, 0), aXt.set(kl, gG), aXt
	}, this.aVU = function(hF, kl, aAP, eZ, aXu) {
		aXu && (aAP = (kl = this.lc(kl)).length - aAP - 2);
		aXu = kl.subarray(aAP + 1 + (eZ === kl[aAP + 1])), eZ = new Uint32Array(hF.length + aXu.length);
		return eZ.set(hF, 0), eZ.set(aXu, hF.length), eZ
	}, this.lb = function(lT) {
		return aXr.push(lT), aXr.length - 1
	}, this.get = function(aB) {
		return aXr[aB]
	}, this.lW = function() {
		return aXr
	}, this.aXw = function(aXg, aXd) {
		return null
	}
}

function aV7() {
	this.j3 = function(player, n5) {
		player = bN.kx.n7(player, n5);
		return !(player < 0 || !bN.m8.aVW(player) || (bN.m8.aVI(player), 0))
	}
}

function aUt() {
	var yX = 32,
		yW = new Array(2);

	function wM(f8) {
		var eu, ew, eZ, iA, i7, hj = yX,
			a2l = bA.qa.wM(hj, hj),
			hp = bA.qa.getContext(a2l, !0),
			hm = bA.qa.getImageData(hp, hj, hj),
			wX = hm.data,
			l3 = (hj >> 1) - .5,
			l4 = Math.sqrt(l3 * l3);
		for (wX.fill(255), ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = eu - l3, iA = ew - l3, eZ = 4 * (ew * hj + eu), i7 = 714 * (l4 - Math.sqrt(i7 * i7 + iA * iA)) / l4, wX[2 + eZ] = f8, wX[3 + eZ] = 255 < i7 ? 0 : i7;
		return hp.putImageData(hm, 0, 0), a2l
	}
	this.aXx = -1, this.dd = function() {
		this.aXx = -1, yW[0] || (yW[0] = wM(255), yW[1] = wM(0))
	}, this.aXy = function(hp, eR, eu, ew, e7, aB) {
		bA.g9.gz(aD.eX) && (hp.setTransform(eR *= 4 / 3 * .625, 0, 0, eR, eu - (e7 *= 4 / 3), ew - e7), hp.drawImage(yW[+(bN.y.m2[aB] === this.aXx)], 0, 0))
	}
}

function aV2() {
	function aTN(eu, en, ew, aXz, a93, fE, player) {
		if (!(ew < 1 || a93 < ew))
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kx.aVa(eR) && !bA.qi.has(aXz, ac.eV(eR)) && ac.xo(eR, player)) return eR >> 2;
				eu += fE
			}
		return -1
	}

	function aTR(ew, en, eu, aXz, aTL, fE, player) {
		if (!(eu < 1 || aTL < eu)) {
			en = Math.max(en, 0);
			for (var aB = 0; aB <= en; aB++) {
				var eR = bM.iR(eu, ew);
				if (bN.kx.aVa(eR) && !bA.qi.has(aXz, ac.eV(eR)) && ac.xo(eR, player)) return eR >> 2;
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
			for (var aTJ = bM.hu(), aXz = [];;) {
				var aXj = function(aTI, aTJ, aXz, player) {
					for (var h2 = bM.ev(aTI), h4 = bM.ex(aTI), aTL = bS.ey - 2, a93 = bS.ez - 2, aTM = -1, eq = 0; eq < aTJ; eq++) {
						var a92 = Math.max(h2 - eq, 1),
							aKf = Math.max(h4 - eq, 1),
							xk = Math.min(h2 + eq, aTL),
							xj = Math.min(h4 + eq, a93),
							iE = aTN(h2, xk - h2, h4 - eq, aXz, a93, 1, player),
							iF = aTN(h2 - 1, h2 - a92 - 1, h4 - eq, aXz, a93, -1, player),
							xk = aTN(h2, xk - h2, h4 + eq, aXz, a93, 1, player),
							a92 = aTN(h2 - 1, h2 - a92 - 1, h4 + eq, aXz, a93, -1, player),
							aTQ = aTR(h4, xj - h4 - 1, h2 - eq, aXz, aTL, 1, player),
							aTS = aTR(h4 - 1, h4 - aKf - 2, h2 - eq, aXz, aTL, -1, player),
							xj = aTR(h4, xj - h4 - 1, h2 + eq, aXz, aTL, 1, player),
							aKf = aTR(h4 - 1, h4 - aKf - 2, h2 + eq, aXz, aTL, -1, player);
						if (aTM = aTV(aTM, iE, aTI), aTM = aTV(aTM, iF, aTI), aTM = aTV(aTM, xk, aTI), aTM = aTV(aTM, a92, aTI), aTM = aTV(aTM, aTQ, aTI), aTM = aTV(aTM, aTS, aTI), aTM = aTV(aTM, xj, aTI), 0 <= (aTM = aTV(aTM, aKf, aTI)) &&
							eq * eq >= bM.iG(aTM, aTI)) return aTM
					}
					return -1
				}(aTI, aTJ, aXz, player);
				if (-1 === aXj) break;
				var id = ac.eV(bM.ed(aXj));
				if (bN.kx.aWN(player, id)) return !! function(player, aXj, aTI) {
					for (var he = bM.ib(aXj, aTI), aB = 0; aB < 4; aB++) {
						var eZ = bM.iZ(aXj, he);
						if (ac.aGg(bM.ed(eZ), player)) return bO.fP[6] = he, 1;
						he = (he + 1) % 4
					}
					return
				}(player, aXj, aTI) && (bO.fP[7] = aXj, !0);
				aXz.push(id)
			}
		return !1
	}
}

function dg() {
	this.aQn = [L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448)];
	var aY2 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBN = new Array(aY2.length), this.dd = function() {
		var g = bj.eK.data[155].value.split(";"),
			l3 = g.length;
		if (function() {
				for (var en = aY2.length, aB = 0; aB < en; aB++) bX.aBN[aB] = aY2[aB]
			}(), !(l3 > aY2.length))
			for (var aB = 0; aB < l3; aB++) g[aB].length && (this.aBN[aB] = g[aB])
	}, this.aQp = function(e8, code) {
		for (var aBN = this.aBN, aY4 = aY2, qH = (aBN[e8] = code, ""), en = aBN.length, aY5 = [], aB = 0; aB < en; aB++) aY5.push(aBN[aB] === aY4[aB] ? "" : aBN[aB]);
		en--;
		for (aB = 0; aB < en; aB++) qH += aY5[aB] + ";";
		bj.s1.s2(155, qH += aY5[en])
	}, this.aQm = function() {
		bj.s1.s2(155, ""), this.dd()
	}, this.f8 = function(code, e8) {
		return code === this.aBN[e8] || code === this.aBN[e8 + 1]
	}
}

function dY() {
	var aY6 = new Array(1),
		aY7 = new Array(1),
		aY8 = 20,
		eL = 0,
		aY9 = !1;

	function aYB() {
		aY8++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aY7[aB] = 0, aY6[aB] = document.createElement("audio"), aY6[aB].src = src, aY6[aB].setAttribute("preload", "auto"), aY6[aB].setAttribute("controls", "none"), aY6[aB].style.display = "none", aY6[aB].onpause = function() {
					aY7[aB] = 1
				}, aY6[aB].oncanplaythrough = function() {
					aY7[aB] = 0 === aY7[aB] ? 1 : aY7[aB]
				}, document.body.appendChild(aY6[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aY9 = !0
		}
	}, this.uA = function() {
		if (aY9) {
			aY9 = !1;
			for (var aB = 0; 0 <= aB; aB--) aY6[aB].onpause = null, aY6[aB].oncanplaythrough = null, document.body.removeChild(aY6[aB]), aY6[aB] = null
		}
	}, this.play = function() {
		if (aY9) {
			var dt = performance.now();
			if (eL + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aY7[aB]) return eL = dt, aY7[aB] = 2, void aY6[aB].play();
			0 < aY8 && (aY8--, setTimeout(aYB, 66))
		}
	}
}

function ca() {
	this.a83 = function() {
		var aYE;
		return !(al.kB < 3 || ag.gb[lk[0]] >= aD.ju >> 1) && (aD.hh ? (aYE = ae.aI4(), !(2 * ae.aI5(bh.ki()) >= aYE)) : function() {
			var aYE = ae.aI4();
			if (2 * ag.gp[lk[0]] >= aYE) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aX1 = aD.kA, gp = ag.gp, aB = 0; aB < aX1; aB++) gp[aB] = 512;
			var aX2 = aD.x2,
				kN = aE.kN,
				hW = aE.hW;
			for (aB = aX1; aB < aX2; aB++) gp[aB] = kN[hW[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var en = aD.x2, gp = ag.gp, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < en; aB++) gp[aB] = sResourcesValue
		} : function() {
			for (var en = aD.x2, gp = ag.gp, sResourcesData = aD.data.sResourcesData, aB = 0; aB < en; aB++) gp[aB] = sResourcesData[aB]
		})();
		bd.me[8] = ag.gp[aD.eX]
	}
}

function dP() {
	var aGo = 501,
		aYK = (this.aYJ = new Uint32Array(aGo), this.a3Q = new Uint32Array(aGo), this.aB2 = new Uint16Array(aGo), this.aQv = 0, 1),
		aYL = 0;

	function aYO(self) {
		self.max.fill(0)
	}

	function aYQ(self, aB) {
		self.max[0] = Math.max(self.aYJ[aB], self.max[0]), self.max[1] = Math.max(self.a3Q[aB], self.max[1]), self.max[2] = Math.max(self.aB2[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aYM = 0, this.me = new Array(21), this.aYN = null, this.de = function() {
		this.aYN = [L(449), L(450), L(451), L(452), L(453), L(454), L(455), L(456), L(286), L(287), L(457), L(458), L(459), L(460), "", L(461), L(462), L(463), L(246), L(464), L(465)]
	}, this.dd = function() {
		this.aQv = 0, aYK = 1, this.aYM = 0, aYL = 0, aYO(this), this.me.fill(0)
	}, this.q0 = function(player, iN) {
		bA.g9.a3L(player) && (this.me[0] += iN + 1, this.me[1]++, this.me[12] += bO.fK[1])
	}, this.pU = function(player, p7) {
		__fx.donationsTracker.logDonation(player, p7, bO.fK[0]);
		player === aD.eX && (aN.pU(bO.fK[0], bO.fK[1], p7), this.me[12] += bO.fK[1], this.me[16] += bO.fK[0]), p7 === aD.eX && (aN.a6g(bO.fK[0], player), this.me[10] += bO.fK[0])
	}, this.q4 = function(player) {
		bA.g9.a3L(player) && (this.me[2]++, this.me[12] += bO.fK[1])
	}, this.qC = function(player) {
		bA.g9.a3L(player) && (this.me[19]++, this.me[12] += bO.fK[1])
	}, this.aWv = function(player) {
		bA.g9.a3L(player) && this.me[20]++
	}, this.gD = function(player, a45, e8) {
		bA.g9.a3L(player) && (this.me[e8] += a45)
	}, this.j3 = function() {
		var self;
		this.aYM || 0 < aYL-- || ((self = this).aYJ[self.aQv] = ag.gb[aD.eX], self.a3Q[self.aQv] = ag.gp[aD.eX], self.aB2[self.aQv] = ae.aB3(aD.eX), aYQ(self, self.aQv), self.aQv++, self.aQv === aGo && function(self) {
			aYO(self), aYQ(self, 0), self.aQv = 1 + bL.du(aGo, 2);
			for (var aB = 1; aB < self.aQv; aB++) self.aYJ[aB] = self.aYJ[2 * aB], self.a3Q[aB] = self.a3Q[2 * aB], self.aB2[aB] = self.aB2[2 * aB], aYQ(self, aB);
			aYK *= 2
		}(self), aYL = aYK - 1, be.mV(), 0 === ag.mi[aD.eX] && (self.aYM = bf.k7()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.sv = 0, this.sw = 0, this.aYS = 0, this.aYT = 0, this.a8G = 0, this.td = 0;
	var aYV = this.aYU = 0;
	this.aYW = 0, this.aYX = 0, this.aYY = 0, this.a7c = 0, this.e8 = 0, this.aAd = null, this.hZ = !1, this.aYZ = -1, this.aYa = !1, this.aYb = [0, 0], this.de = function() {
		this.aAd = [L(466), L(119, 0, "Balance"), L(118, 0, "Interest"), L(467)]
	}, this.dd = function() {
		this.hZ = !1, this.aYZ = -1, this.aYa = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eq = a0.a1.hw() && h.i < h.j ? 1 : a0.a1.hw() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eq * this.i), this.i -= a0.a1.hw() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7c = Math.floor(this.j / 150), this.a7c = Math.max(this.a7c, 1.5), this.sv = Math.floor(1 + .02 * this
			.i), this.sw = Math.floor(1 + .04 * this.i), this.a8G = this.sw, aYV = Math.floor(.75 * this.a8G), this.td = Math.floor(1 + .075 * this.i), this.aYW = Math.floor(1 + .1125 * this.i), this.aYX = Math.floor(this.i * (a0.a1.hw() ? .03 :
				.029)), this.aYX = Math.max(this.aYX, 4), this.aYY = Math.floor(.035 * this.i), this.aYY = Math.max(this.aYY, 4), this.aYU = this.j - 2 * this.a8G - this.td - this.aYW, this.hZ && this.aYc()
	}, this.h0 = function(lN, lO) {
		var x5, x4;
		return !!this.hZ && (x4 = lN, x5 = lO, lN -= bL.du(h.i - this.i, 2), lO -= bL.du(h.j - this.j, 2), lN < 0 || lO < 0 || lN >= this.i || lO >= this.j || lN >= this.i - this.aYW && lO < this.aYW ? -1 !== aM.h0(x4, x5) || bC.h0(x4, x5) ||
			this.rr() : lO < this.aYW || (lO < this.j - this.td ? (this.aYa = !0, this.aYZ = (lN - 2 * this.sv - this.aYS) / this.aYT, 3 !== this.e8 && (bf.dl = !0)) : (x4 = (x4 = Math.floor(lN / (this.i / this.aAd.length))) < 0 ? 0 : x4 >=
				this.aAd.length ? this.aAd.length - 1 : x4) !== this.e8 && (this.e8 = x4, this.aYc(), bf.dl = !0)), !0)
	}, this.a1R = function(lN, lO) {
		return this.aYb[0] = lN, this.aYb[1] = lO, !(!this.hZ || !this.aYa || (lN -= bL.du(h.i - this.i, 2), lO = this.aYZ, this.aYZ = (lN - 2 * this.sv - this.aYS) / this.aYT, (0 <= this.aYZ && this.aYZ <= 1 || 0 <= lO && lO <= 1) && (bf.dl = !
			0), 0))
	}, this.a1q = function() {
		this.aYa && (this.aYa = !1)
	}, this.a22 = function() {
		this.hZ ? this.rr() : this.show()
	}, this.show = function() {
		bd.aQv < 2 || (this.hZ = !0, this.aYc())
	}, this.rr = function() {
		this.hZ = !1, this.aYZ = -1, bf.dl = !0
	}, this.aYc = function() {
		this.e8 < 2 ? this.aYS = aQ.measureText(bA.rZ.zE(bd.max[this.e8]), bA.qa.sO(0, this.aYX)) : 2 === this.e8 && (this.aYS = aQ.measureText(bA.rZ.a3y(6, 2), bA.qa.sO(0, this.aYX))), this.aYT = this.i - 2 * this.sv - this.aYS - this.sw
	}, this.mV = function() {
		this.hZ && this.aYc()
	}, this.ug = function() {
		this.hZ && this.a8Y()
	}, this.a8Y = function() {
		var eu = bL.du(h.i - this.i, 2),
			ew = bL.du(h.j - this.j, 2);
		uh.setTransform(1, 0, 0, 1, eu, ew), uh.fillStyle = bB.nf, uh.fillRect(0, this.aYW, this.i, this.j - this.aYW), this.aYd(), this.aPk(), uh.strokeRect(0, 0, this.i, this.j), bA.qa.textAlign(uh, 2), uh.font = bA.qa.sO(0, this.aYX), 0 ===
			this.e8 ? this.aYe(bd.aYJ, eu, ew) : 1 === this.e8 ? this.aYe(bd.a3Q, eu, ew) : 2 === this.e8 ? this.aYf(eu, ew) : 3 === this.e8 && (this.aYg(eu, ew), this.aYh(eu, ew)), aM.a5m(Math.floor(eu + this.i - .725 * this.aYW), Math.floor(
				ew + .275 * this.aYW), Math.floor(.45 * this.aYW)), uh.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aYd = function() {
		var aB, dt;
		for (uh.lineWidth = this.a7c, bA.qa.textBaseline(uh, 1), bA.qa.textAlign(uh, 1), uh.strokeStyle = bB.ni, uh.font = bA.qa.sO(1, this.aYY), dt = this.i / this.aAd.length, uh.fillStyle = bB.o4, uh.fillRect(this.e8 * dt, this.j - this.td, dt,
				this.td), uh.fillStyle = bB.ni, uh.fillRect(0, this.j - this.td - .5 * this.a7c, this.i, this.a7c), aB = 1; aB <= 3; aB++) uh.fillRect(aB * dt, this.j - this.td, this.a7c, this.td);
		for (aB = this.aAd.length - 1; 0 <= aB; aB--) uh.fillText(bA.y7.a2x(this.aAd[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.td)
	}, this.aPk = function() {
		uh.fillStyle = bB.oU, uh.fillRect(0, 0, this.i, this.aYW), uh.fillStyle = bB.ni, uh.fillRect(0, this.aYW - .5 * this.a7c, this.i, this.a7c), uh.font = bA.qa.sO(1, .39 * this.aYW), uh.fillText(bA.y7.a2x(L(468), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aYW))
	}, this.aYe = function(g, eu, ew) {
		var l3 = bd.max[this.e8],
			a2K = (uh.setTransform(1, 0, 0, 1, eu + 2 * this.sv + this.aYS, ew + this.a8G + this.aYW), uh.lineWidth = 2, this.aYU / Math.sqrt(l3));
		uh.beginPath(), uh.moveTo(this.aYT, this.aYU - a2K * Math.sqrt(g[bd.aQv - 1]));
		for (var aB = bd.aQv - 2; 0 <= aB; aB--) uh.lineTo(aB * this.aYT / (bd.aQv - 1), this.aYU - a2K * Math.sqrt(g[aB]));
		uh.stroke();
		eu = this.a5m(g, a2K, .5);
		eu < .95 && uh.fillText(bA.rZ.zE(l3), -this.sv, 0), .05 < Math.abs(eu - .5) && uh.fillText(bA.rZ.zE(Math.floor(l3 / 4)), -this.sv, Math.floor(this.aYU / 2)), .05 < eu && uh.fillText("0", -this.sv, this.aYU)
	}, this.aYf = function(eu, ew) {
		uh.setTransform(1, 0, 0, 1, eu + 2 * this.sv + this.aYS, ew + this.a8G + this.aYW), uh.lineWidth = 2;
		var a2K = this.aYU / Math.max(bd.max[this.e8], 1);
		uh.beginPath(), uh.moveTo(this.aYT, this.aYU - a2K * bd.aB2[bd.aQv - 1]);
		for (var aB = bd.aQv - 2; 0 <= aB; aB--) uh.lineTo(aB * this.aYT / (bd.aQv - 1), this.aYU - a2K * bd.aB2[aB]);
		uh.stroke();
		eu = this.a5m(bd.aB2, a2K, 1), ew = bd.max[this.e8] / 100;
		eu < .95 && uh.fillText(bA.rZ.a3y(ew, 2), -this.sv, 0), .05 < Math.abs(eu - .5) && uh.fillText(bA.rZ.a3y(ew / 2, 2), -this.sv, Math.floor(this.aYU / 2)), .05 < eu && uh.fillText(bA.rZ.a3y(0, 2), -this.sv, this.aYU)
	}, this.aYg = function(eu, ew) {
		uh.setTransform(1, 0, 0, 1, eu + .34 * this.i, ew + 2 * aYV + this.aYW), bA.qa.textAlign(uh, 2);
		for (var aAO = this.j - 4 * aYV - this.td - this.aYW, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) uh.fillText(bA.y7.a2x(bd.aYN[g[aB]], 0, .31 * this.i), 0, aB * aAO / 9);
		var fF = bd.me;
		for (uh.setTransform(1, 0, 0, 1, eu + .39 * this.i, ew + 2 * aYV + this.aYW), bA.qa.textAlign(uh, 0), uh.fillText(bA.rZ.a3y(100 * fF[0] / (1024 * Math.max(fF[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) uh.fillText(fF[g[aB]].toString(), 0,
			aB * aAO / 9);
		uh.fillText(bA.rZ.a3y(100 * (1 - ag.gb[aD.eX] / fF[7]), 0), 0, aAO)
	}, this.aYh = function(eu, ew) {
		uh.setTransform(1, 0, 0, 1, eu + .79 * this.i, ew + 2 * aYV + this.aYW), bA.qa.textAlign(uh, 2);
		var aB, aAO = this.j - 4 * aYV - this.td - this.aYW;
		for (uh.fillStyle = bB.nz, aB = 2; 0 <= aB; aB--) uh.fillText(bA.y7.a2x(bd.aYN[aB + 8], 0, .31 * this.i), 0, aB * aAO / 9);
		uh.fillText(bA.y7.a2x(bd.aYN[18], 0, .31 * this.i), 0, 3 * aAO / 9), uh.fillStyle = bB.ny, uh.fillText(bA.y7.a2x(bd.aYN[11], 0, .31 * this.i), 0, 4 * aAO / 9), uh.fillStyle = bB.oH, uh.fillText(bA.y7.a2x(bd.aYN[13], 0, .31 * this.i), 0,
				5 * aAO / 9), uh.fillText(bA.y7.a2x(bd.aYN[15], 0, .31 * this.i), 0, 6 * aAO / 9), uh.fillText(bA.y7.a2x(bd.aYN[16], 0, .31 * this.i), 0, 7 * aAO / 9), uh.fillText(bA.y7.a2x(bd.aYN[12], 0, .31 * this.i), 0, 8 * aAO / 9), uh
			.fillStyle = bB.oG, uh.fillText(bA.y7.a2x(bd.aYN[17], 0, .31 * this.i), 0, aAO), uh.fillStyle = bB.nz;
		var fF = bd.me,
			aED = fF[8] + fF[9] + fF[10] + fF[18],
			aED = bA.rZ.zE(aED),
			aOX = uh.measureText(aED).width,
			eu = (uh.setTransform(1, 0, 0, 1, eu + .83 * this.i + aOX, ew + 2 * aYV + this.aYW), uh.fillText(bA.rZ.zE(fF[8]), 0, 0), uh.fillText(bA.rZ.zE(fF[9]), 0, aAO / 9), uh.fillText(bA.rZ.zE(fF[10]), 0, 2 * aAO / 9), uh.fillText(bA.rZ.zE(fF[
				18]), 0, 3 * aAO / 9), uh.fillStyle = bB.ny, uh.fillText(aED, 0, 4 * aAO / 9), uh.fillStyle = bB.oH, uh.fillText(bA.rZ.zE(fF[13]), 0, 5 * aAO / 9), uh.fillText(bA.rZ.zE(fF[15]), 0, 6 * aAO / 9), uh.fillText(bA.rZ.zE(fF[16]),
				0, 7 * aAO / 9), uh.fillText(bA.rZ.zE(fF[12]), 0, 8 * aAO / 9), fF[12] + fF[13] + fF[15] + fF[16]);
		uh.fillStyle = bB.oG, uh.fillText(bA.rZ.zE(eu), 0, aAO), uh.fillStyle = bB.ni
	}, this.a5m = function(g, a2K, a9B) {
		var aB, e, fW;
		return this.aYZ < 0 || 1 < this.aYZ ? .25 : (aB = this.aYZ * (bd.aQv - 1), fW = g[e = Math.floor(aB)], fW += (aB - e) * (g[e < bd.aQv - 1 ? e + 1 : e] - fW), uh.strokeStyle = bB.nl, .04 < this.aYZ && this.aYj(0, this.aYU - a2K * Math.pow(
				fW, a9B), aB * this.aYT / (bd.aQv - 1), this.aYU - a2K * Math.pow(fW, a9B)), .04 < fW / bd.max[this.e8] && this.aYj(aB * this.aYT / (bd.aQv - 1), this.aYU, aB * this.aYT / (bd.aQv - 1), this.aYU - a2K * Math.pow(fW, a9B)), uh
			.fillStyle = bB.oJ, uh.beginPath(), uh.arc(aB * this.aYT / (bd.aQv - 1), this.aYU - a2K * Math.pow(fW, a9B), Math.max(2, .014 * this.j), 0, 2 * Math.PI), uh.fill(), g = this.aYZ * bf.aB4, g = 0 === ag.mi[aD.eX] ? Math.floor(g * bd
				.aYM) : Math.floor(g * bf.k7()), uh.fillStyle = bB.ni, uh.fillText(1 === a9B ? bA.rZ.a3y(fW / 100, 2) : bA.rZ.zE(Math.floor(fW)), -this.sv, this.aYU - a2K * Math.pow(fW, a9B)), bA.qa.textAlign(uh, 1), uh.fillText(aW.aAr(g),
				aB * this.aYT / (bd.aQv - 1), this.aYU + this.aYX - (a0.a1.hw() ? 2 : 0) - this.a7c), bA.qa.textAlign(uh, 2), a2K * Math.pow(fW, a9B) / this.aYU)
	}, this.aYj = function(n8, n9, nL, nM) {
		uh.beginPath(), uh.moveTo(n8, n9), uh.lineTo(nL, nM), uh.stroke()
	}
}

function by() {
	this.aYk = "https://", this.aYl = this.aYk + "territorial.io/", this.aQw = this.aYl + "changelog", this.aR0 = this.aYl + "terms", this.aYm = this.aYl + "cookie_policy", this.aQN = this.aYl + "privacy", this.aQz = this.aYl + "tutorial", this.aQy =
		this.aYl + "players", this.aQx = this.aYl + "clans", this.a0j = this.aYl + "clan-results", this.aNg = "https://patreon.com/c/territorial", this.aCM = this.aYk + "play.google.com/store/apps/details?id=territorial.io", this.a11 = this.aYk +
		"apps.apple.com/app/id1581110913", this.aYn = this.aYk + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCN = this.aYk + "discord.gg/pthqvpTXmh", this.aCO = this.aYk + "www.instagram.com/davidtschacher/", this.ym =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aYo, this.y4 = new aYp, this.dd = function() {
		this.y.dd()
	}, this.j3 = function() {
		0 !== this.y.a6p && this.y.a6p--
	}
}

function aYp() {
	this.ug = function() {
		if (0 !== bP.y.a6p && (uh.globalAlpha = Math.min(bP.y.a6p / 580, 1), uh.drawImage(bP.y.aYs, 1 + aS.y2(), 1 + aS.y3()), uh.globalAlpha = 1, aD.hB)) {
			for (var n8 = iO / hy, n9 = iP / hy, nL = (h.i + iO) / hy, nM = (h.j + iP) / hy, gM = bP.y.aYt * hy, aYu = bP.y.aYu, aB = aD.kA - 1; 0 <= aB; aB--) ! function(aB, gM, n8, n9, nL, nM, aYu) {
				var highlight;
				0 === ag.mi[aB] || 0 === ag.gb[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gM *= 2), nL = h.i * ((ag.ie[aB] + ag.ig[aB] + 1) / 2 - n8) / (nL - n8) - .5 * gM, n8 = h.j * ((ag.ih[
					aB] + ag.ii[aB] + 1) / 2 - n9) / (nM - n9) - .5 * gM, nL > h.i) || n8 > h.j || nL < -gM || n8 < -gM || (highlight ? uh.setTransform(2 * hy, 0, 0, 2 * hy, nL, n8) : uh.setTransform(hy, 0, 0, hy, nL, n8), uh.drawImage(
					aYu[aD.hh ? bg.el[aB] : 1], 0, 0))
			}(aB, gM, n8, n9, nL, nM, aYu);
			uh.setTransform(hy, 0, 0, hy, 0, 0)
		}
	}
}

function aYo() {
	this.aYt = 28, this.a6p = 0, this.aYs = null;
	var aYw = this.aYu = null;

	function aYz(hj, aZ0) {
		var eu, ew, eZ, i7, a2l = bA.qa.wM(hj, hj),
			hp = bA.qa.getContext(a2l, !0),
			hm = bA.qa.getImageData(hp, hj, hj),
			wX = hm.data,
			l3 = (hj >> 1) - .5,
			aZ1 = .5 + l3;
		for (aZ1 *= aZ1, ew = 0; ew < hj; ew++)
			for (eu = 0; eu < hj; eu++) i7 = (i7 = eu - l3) * i7 + (i7 = ew - l3) * i7, wX[eZ = 4 * (ew * hj + eu)] = aZ0[0], wX[1 + eZ] = aZ0[1], wX[2 + eZ] = aZ0[2], wX[3 + eZ] = (aZ1 - i7) * aZ0[3] / aZ1;
		return hp.putImageData(hm, 0, 0), a2l
	}

	function aXy(aB, hp, a2l, hj) {
		var highlight, eu, ew;
		0 !== ag.mi[aB] && 0 !== ag.gb[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hj *= 2), eu = ag.ie[aB] + ag.ig[aB] + 1 - hj - 2 >> 1, ew = ag.ih[aB] + ag.ii[aB] + 1 - hj - 2 >> 1, highlight ? hp
			.drawImage(a2l[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew, hj, hj) : hp.drawImage(a2l[aD.hh ? 9 === aD.kS && 5 === aE.hW[aB] ? 3 : bg.el[aB] : aB < aD.kA ? 1 : 0], eu, ew))
	}
	this.dd = function() {
		var sB;
		this.a6p = 700,
			function(sB) {
				var hj = sB.aYt;
				if (sB.aYu = [], aYw = [], aD.hh) {
					for (var aB = 0; aB <= aD.x9; aB++) sB.aYu.push(aYz(hj, bg.aWI[bg.kX[aB]])), aYw.push(aYz(hj >> 1, bg.aWI[bg.kX[aB]]));
					9 === aD.kS && aYw.push(aYz(hj, bg.aWI[1]))
				} else sB.aYu.push(aYz(hj, bg.aWI[7])), sB.aYu.push(aYz(hj, bg.aWI[4])), aYw.push(aYz(hj >> 1, bg.aWI[7]))
			}(this),
			function(sB, aZ2) {
				var aB, aYs = sB.aYs,
					hp = bA.qa.getContext(aYs, !0),
					en = aD.ek,
					hj = sB.aYt >> 1;
				hp.imageSmoothingEnabled = !1, hp.setTransform(1, 0, 0, 1, 0, 0), aZ2 && hp.clearRect(0, 0, aYs.width, aYs.height);
				if (9 === aD.kS) {
					hj <<= 1;
					sB = az.kb[5];
					for (aB = en - sB; aB < en; aB++) aXy(aB, hp, aYw, hj);
					en -= sB, hj >>= 1
				}
				for (aB = aD.kA; aB < en; aB++) aXy(aB, hp, aYw, hj)
			}(this, null !== (sB = this).aYs && sB.aYs.width === bS.ey - 2 && sB.aYs.height === bS.ez - 2 || (sB.aYs = bA.qa.wM(bS.ey - 2, bS.ez - 2), !1)), aD.hB || this.a4G()
	}, this.aWH = aYz, this.a4G = function() {
		for (var en = aD.kA, hj = this.aYt, aYu = this.aYu, hp = bA.qa.getContext(this.aYs, !0), aB = 0; aB < en; aB++) aXy(aB, hp, aYu, hj)
	}
}

function d9() {
	function aZ5() {
		8 === aD.kS && 1 === aD.zx && bR.zZ.zw()
	}

	function aZ4(player) {
		aD.hB ? (ak.aGw(player), al.aJr(), aD.kU && aD.pw.j3()) : b3.aCe(player)
	}
	this.pN = function(player) {
		aN.a09(player, player === aD.eX ? 21 : 22), aZ4(player), aZ5()
	}, this.pt = function(player) {
		1 === aD.zx && 0 !== ag.mi[player] && 2 !== ag.a3H[player] && aZ4(player), aD.a00--, aD.zz--, aN.a09(player, 4), bA.g9.gy(2) && aW.mU(!0), aZ5()
	}
}

function dJ() {
	this.aTG = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAL = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.ni, "rgb(170,170,170)"
	], this.aZ6 = [bB.ni, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.ni, bB.nZ], this.aZ7 = [bB.nZ, bB.ni, bB.ni, bB.ni, bB.nZ, bB.nZ, bB.nZ, bB.nZ, bB.ni];
	var aK1 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJJ = ["rgba(" + aK1[0] + ",", "rgba(" + aK1[1] + ",", "rgba(" + aK1[2] + ",", "rgba(" + aK1[3] + ",", "rgba(" + aK1[4] + ",", "rgba(" + aK1[5] + ",", "rgba(" + aK1[6] + ",", "rgba(" + aK1[7] + ",", "rgba(" + aK1[8] + ",", "rgba(" + aK1[9] +
			","
		], this.aJK = ["rgb(" + aK1[0] + ")", "rgb(" + aK1[1] + ")", "rgb(" + aK1[2] + ")", "rgb(" + aK1[3] + ")", "rgb(" + aK1[4] + ")", "rgb(" + aK1[5] + ")", "rgb(" + aK1[6] + ")", "rgb(" + aK1[7] + ")", "rgb(" + aK1[8] + ")", "rgb(" + aK1[9] +
			")"
		], this.a0I = null, this.aWI = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aVx = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kX = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.el = new Uint8Array(aD.ek), this.aAM = new Uint8Array(aD.ek), this.xF = new Uint16Array(aD.ek), this.xG = new Uint16Array(this.kX.length + 1), this.xH = new Uint16Array(this.kX.length), this.de =
		function() {
			this.a0I = [L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477)]
		}, this.dd = function() {
			if (this.el.fill(0), this.aAM.fill(0), this.aZ8(), aD.hh) {
				if (9 === aD.kS) {
					for (var el = bg.el, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) el[aB] = 1;
					var en = aD.ek;
					for (aB = aD.data.teamPlayerCount[7]; aB < en; aB++) el[aB] = 2;
					bg.kX[1] = 7, bg.kX[2] = 8
				} else aD.kU ? function() {
					var aVx = bg.aVx,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kA - 1; 0 <= aB; aB--) colorsData[aB] = ay.jS(262144);
					var aZJ = 0,
						f3 = 768,
						aSl = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var eq = 0, f7 = 0; f7 < 3; f7++) eq += Math.abs(aVx[aB][f7] - aSl[f7]);
							eq < f3 && (aZJ = aB, f3 = eq)
						} var aZK = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aZK[aB] = teamPlayerCount[aB];
					var kX = bg.kX,
						aZL = new Uint8Array(9),
						gG = (kX[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aZK[aB] && (aZL[aB] = gG, kX[gG++] = aB);
					var jR = aD.kA,
						el = bg.el;
					aZK[aZJ] ? (aZK[aZJ]--, el[0] = aZL[aZJ]) : jR = 0;
					var f8 = 0;
					for (aB = jR; aB < aD.x2; aB++) {
						var hf = kX[f8];
						if (aZK[hf]) aZK[hf]--, el[aB] = aZL[hf];
						else if (aB--, 9 <= ++f8) return console.log("error 325")
					}
				}() : this.j3();
				! function() {
					for (var en = aD.ek, xF = bg.xF, xG = bg.xG, xH = bg.xH, el = bg.el, kX = bg.kX, x8 = kX.length, eK = new Array(x8), aB = 0; aB < x8; aB++) eK[aB] = [];
					for (aB = 0; aB < en; aB++) eK[kX[el[aB]]].push(aB);
					for (aB = 1; aB <= x8; aB++) xG[aB] = xG[aB - 1] + eK[aB - 1].length;
					for (aB = 0; aB < x8; aB++)
						for (var gG = eK[aB].length, l3 = xG[aB], hf = 0; hf < gG; hf++) xF[hf + l3] = eK[aB][hf];
					var kA = aD.kA;
					for (aB = 0; aB < x8; aB++)
						for (gG = eK[aB].length, l3 = xG[aB], hf = 0; hf < gG; hf++)
							if (xF[hf + l3] >= kA) {
								xH[aB] = hf;
								break
							}
				}(), ! function() {
					for (var en = aD.ek, el = bg.el, aAM = bg.aAM, kX = bg.kX, aB = 0; aB < en; aB++) aAM[aB] = kX[el[aB]];
					9 === aD.kS && aAM.fill(1, en - az.kb[5])
				}()
			}
		}, this.aZ8 = function() {
			for (var aB = this.kX.length - 1; 0 <= aB; aB--) this.kX[aB] = aB
		}, this.j3 = function() {
			var z3 = new Uint8Array(aD.kA),
				z4 = new Uint8Array(aD.kA),
				aZD = new Uint16Array(8),
				aZE = new Uint16Array(this.kX.length);
			this.aZF(z3, z4, aZD, 1), this.aGW(aZD), this.aZG(aZE, z3, z4), this.aZH(z3, z4, aZE), this.aZI()
		}, this.aZF = function(z3, z4, aZK, aZM) {
			for (var f7, e, aZN, en = this.kX.length - aZM, g = new Uint16Array(en), aVx = this.aVx, colorsData = aD.data.colorsData, aB = aD.kA - 1; 0 <= aB; aB--) {
				for (f7 = en; aZM <= f7; f7--) g[f7 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aVx[f7][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aVx[f7][1]) + Math.abs(4 * (63 & colorsData[aB]) - aVx[f7][2]);
				for (aZN = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZN && (aZN = g[e], z3[aB] = e);
				for (aZK[z3[aB]] += 4, aZN = 768, f7 = en - 1; 0 <= f7; f7--) g[e = (f7 + aB) % en] < aZN && e !== z3[aB] && (aZN = g[e], z4[aB] = e);
				aZK[z4[aB]]++
			}
		}, this.aGW = function(aZK) {
			for (var f7, l5, en = this.kX.length - 1, aB = en; 0 <= aB; aB--) this.kX[aB] = aB;
			for (aB = en - 1; 0 <= aB; aB--) aZK[aB]++;
			for (aB = 1; aB <= en; aB++) {
				for (l5 = 0, f7 = 1; f7 < en; f7++) aZK[f7] > aZK[l5] && (l5 = f7);
				aZK[l5] = 0, this.kX[aB] = l5 + 1
			}
		}, this.aZG = function(aZE, z3, z4) {
			var f7, a0d, f8, eq, e, nK, tC, aZO = this.kX.length - 1,
				r3 = new Uint16Array(aZO),
				aZP = [],
				aZQ = 0,
				a0c = [],
				aZR = [];
			loop: for (var aB = 0; aB < aD.kA; aB++)
				if (null !== (a0d = bA.rZ.a0e(ag.a0b[aB]))) {
					for (f7 = a0c.length - 1; 0 <= f7; f7--)
						if (a0d === a0c[f7]) {
							aZR[f7].push(aB), aZQ = Math.max(aZQ, aZR[f7].length);
							continue loop
						} a0c.push(a0d), aZP.push(!1), aZR.push([aB]), aZQ = Math.max(aZQ, 1)
				}
			for (; 2 < aD.x9 && aZQ > bL.du(aD.kA, aD.x9);) aD.x9--, aD.kS--;
			for (f7 = a0c.length - 1; 0 <= f7; f7--) {
				for (eq = -1, f8 = a0c.length - 1; 0 <= f8; f8--) !aZP[f8] && (-1 === eq || aZR[f8].length > aZR[eq].length) && (eq = f8);
				for (f8 = aZO - 1; 0 <= f8; f8--) r3[f8] = 1;
				for (f8 = aZR[eq].length - 1; 0 <= f8; f8--) r3[z3[aZR[eq][f8]]] += 3, r3[z4[aZR[eq][f8]]]++;
				for (aB = aZO - 1; 0 <= aB; aB--) {
					for (e = eq % aZO, f8 = aZO - 1; 0 <= f8; f8--) r3[f8] > r3[e] && (e = f8);
					for (nK = -1, f8 = aD.x9; 0 < f8; f8--)
						if (this.kX[f8] === e + 1) {
							nK = f8;
							break
						} if (r3[e] = 0, -1 !== nK) {
						for (tC = 0, f8 = aD.x9; 0 < f8; f8--) aZE[nK] > aZE[f8] && tC++;
						if (tC !== aD.x9 - 1) {
							for (f8 = aZR[eq].length - 1; 0 <= f8; f8--) aZE[nK]++, this.el[aZR[eq][f8]] = nK;
							break
						}
					}
				}
				aZP[eq] = !0
			}
		}, this.aZH = function(z3, z4, aZE) {
			for (var aB, i6, en = this.kX.length - 1, border = bL.du(aD.kA, aD.x9), aZS = (0 < aD.kA % aD.x9 && border++, new Uint8Array(1 + en)), f7 = en; 1 <= f7; f7--) aZS[this.kX[f7]] = f7;
			for (aB = 0; aB < aD.kA; aB++) i6 = aZS[z3[aB] + 1], 0 === this.el[aB] && i6 <= aD.x9 && aZE[i6] < border && (aZE[i6]++, this.el[aB] = i6);
			for (aB = 0; aB < aD.kA; aB++) i6 = aZS[z4[aB] + 1], 0 === this.el[aB] && i6 <= aD.x9 && aZE[i6] < border && (aZE[i6]++, this.el[aB] = i6);
			for (f7 = aD.x9; 1 <= f7; f7--)
				for (aB = aD.kA - 1; 0 <= aB && !(aZE[f7] >= border); aB--) 0 === this.el[aB] && (aZE[f7]++, this.el[aB] = f7)
		}, this.aZI = function() {
			for (var aB = aD.kA; aB < aD.ek; aB++) this.el[aB] = 1 + aB % aD.x9
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
			for (var aZT = !1, aZU = !1, eq = 3; 0 <= eq; eq--) {
				var gL = gT[player][aB] + ep[eq];
				if (ac.aGg(gL, player)) continue loop;
				aZT = aZT || ac.i1(gL), aZU = aZU || ac.aGf(gL)
			}
			aZT ? gU[player].push(gT[player][aB]) : aZU ? fD[player].push(gT[player][aB]) : ac.xb(gT[player][aB], player), gT[player][aB] = gT[player][en - 1], gT[player].pop(), en--
		}
	}, this.gR = function() {
		ag.gb[fi] -= fj
	}, this.gS = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) ac.xw(fi, border[aB]) || (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gV = function(border) {
		for (var en = border.length, aB = en - 1; 0 <= aB; aB--) !ac.xw(fi, border[aB]) && ac.ei(border[aB]) && (border[aB] = border[en - 1], border.pop(), en--)
	}, this.gW = function(border) {
		for (var eq, gL, en = border.length, ep = ac.ep, aB = en - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--)
				if (gL = border[aB] + ep[eq], ac.aGg(gL, fi)) {
					ag.gT[fi].push(border[aB]), border[aB] = border[en - 1], border.pop(), en--;
					break
				}
	}, this.gX = function() {
		for (var eq, gL, ep = ac.ep, aB = fj - 1; 0 <= aB; aB--)
			for (eq = 3; 0 <= eq; eq--) gL = fl[aB] + ep[eq], ac.xz(fi, gL) && ac.aGh(gL) && (ag.gT[fi].push(gL), ac.gI(gL, fi))
	}, this.gY = function() {
		var eu, ew;
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.xw(fi, 4 * (ag.ih[fi] * bS.ey + eu))) break loop;
			ag.ih[fi]++
		}
		loop: for (; ag.ih[fi] < ag.ii[fi];) {
			for (eu = ag.ig[fi]; eu >= ag.ie[fi]; eu--)
				if (ac.xw(fi, 4 * (ag.ii[fi] * bS.ey + eu))) break loop;
			ag.ii[fi]--
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.xw(fi, 4 * (ew * bS.ey + ag.ie[fi]))) break loop;
			ag.ie[fi]++
		}
		loop: for (; ag.ie[fi] < ag.ig[fi];) {
			for (ew = ag.ii[fi]; ew >= ag.ih[fi]; ew--)
				if (ac.xw(fi, 4 * (ew * bS.ey + ag.ig[fi]))) break loop;
			ag.ig[fi]--
		}
	}, this.eg = function(player, jJ) {
		return 0 === bg.el[player] || bg.el[player] !== bg.el[jJ]
	}, this.hJ = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.aGs = function(player) {
		for (var aB, gM, en = ag.gT[player].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < en; aB++)
				if (ac.jM(ag.gT[player][aB]) && ac.ee(ag.gT[player][aB] + gM)) return !0;
		return !1
	}, this.hM = function(a3M, a3N) {
		for (var aB, dt, gM, gL, aX1 = ag.gT[a3M].length, aX2 = ag.gT[a3N].length, ep = (aX2 < aX1 && (dt = a3M, a3M = a3N, a3N = dt, dt = aX1, aX1 = aX2, 0), ac.ep), eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aX1; aB++)
				if (gL = ag.gT[a3M][aB] + gM, ac.gN(gL) && ac.ef(gL) === a3N) return !0;
		return !1
	}, this.aGt = function(a3M, a3N) {
		for (var aB, gM, gL, aX1 = ag.gT[a3M].length, ep = ac.ep, eq = 3; 0 <= eq; eq--)
			for (gM = ep[eq], aB = 0; aB < aX1; aB++)
				if (ac.jM(ag.gT[a3M][aB]) && (gL = ag.gT[a3M][aB] + gM, ac.gN(gL)) && ac.ef(gL) === a3N) return !0;
		return !1
	}
}

function dV() {
	this.q5 = new aZV
}

function aZV() {
	this.hP = function(player) {
		bA.g9.a3I(player) && aN.yP(80, L(478), 637, 0, bB.oX, bB.nf, -1, !1)
	}, this.hS = function(player) {
		bA.g9.a3I(player) && aN.yP(80, L(479), 637, 0, bB.oX, bB.nf, -1, !1)
	}
}

function aZW() {
	this.aZX = 0, this.j3 = function() {
		aO.j3(), aZ.j3(), h.j3(), b0.y.j3(), ax.aG2(), bf.dl && (bf.dl = !1, aa.ug())
	}
}

function aZY() {
	this.eM = bf.eM, this.e8 = 0, this.aZX = 0, this.aG0 = 0, this.aZZ = null, this.aZa = 7, this.a6q = 0, this.dd = function() {
		this.aG0 = 0, this.aZZ = [], this.e8 = 0, this.aZX = 0
	}, this.aSI = function(aC) {
		if (aD.hB) this.aB5(aC);
		else if (this.aZZ.push(aC), 2 === aD.zx) {
			for (var aB = 0; aB < this.aZZ.length; aB++) b8.p0.j3(this.aZZ[aB]);
			this.aZZ = []
		}
	}, this.aB5 = function(aC) {
		2 !== aD.zx && (b8.p0.j3(aC), b9.j3(), aW.aB5(this.aG0), this.aG0 === aD.a4M ? (aD.pw.j3(), this.aG0 = 0, this.e8 = 0, this.aZX = 0, this.eM = bf.eM) : (this.aG0++, af.a4F(), af.mU(!0), bb.aBf()))
	}, this.j3 = function() {
		h.j3(), aD.hB ? (bf.dl = aW.aB5(-1) || bf.dl, mW()) : (0 !== this.e8 || bf.eM >= this.eM && (this.eM += bf.aB4 * Math.floor(1 + (bf.eM - this.eM) / bf.aB4), 2 === aD.zx ? mL() : this.aZb(), this.e8++, 27 < bf.eM - this.a6q)) && this
		.aZc(), mR(), bf.dl && (bf.dl = !1, y0()), this.a6q = bf.eM
	}, this.aZc = function() {
		bf.dl = !0, mT(), this.e8 = 0
	}, this.aZb = function() {
		var vO, aB;
		if (this.aZX !== 7 * this.aG0) mN(), bb.aBf();
		else {
			vO = !1;
			loop: for (; this.aZd() && (vO = !0, mN(), 2 !== aD.zx) && 0 < this.aZZ.length;)
				for (aB = this.aZa - 2; 0 <= aB; aB--)
					if (mN(), 2 === aD.zx) break loop;
			vO ? bb.aBf() : (mL(), bb.a4I())
		}
	}, this.aZd = function() {
		return 0 < this.aZZ.length && (this.aG0++, b8.p0.j3(this.aZZ[0]), this.aZZ.shift(), !0)
	}
}

function aZe() {
	var aZf, aZg, aZh, aG0, aZi, e8 = 0,
		eM = bf.eM;

	function aZl() {
		! function() {
			if (!aD.hB) return;
			if (aD.kU) return;
			if (2 !== aD.zx)
				if (aZi % 7 != 0) aZi++;
				else if (aG0 === aD.a4M) {
				if (!aZo()) return;
				aW.aB5(aG0), aD.pw.j3()
			} else {
				if (!aZo()) return;
				aZi++, aG0++, af.a4F(), af.mU(!0)
			}
			return 1
		}() && aZo() && mN()
	}

	function aZm() {
		e8 = 0, (aD.hB ? (bf.dl = aW.aB5(aG0 - (aZi % 7 == 0 ? 0 : 1) + aZi % 7 / 7) || bf.dl, mW) : aM.gx || !bC.a4k ? mW : (bf.dl = !0, mT))()
	}

	function aZo() {
		var aB, en, aZp = b9.pu.aTe,
			fW = b9.pu.aTf,
			fY = b9.pu.aTg,
			fa = b9.pu.aTh,
			aZq = b9.pu.aTi,
			aZr = b9.pu.aTj;
		if (!(aZf >= aZr.length)) {
			if (aZr = aZr[aZf], aZq[aZf]) {
				for (en = aZg + aZr, aB = aZg; aB < en; aB++) b8.p0.pi(aZp[aB], fW[aB], fY[aB], fa[aB]);
				aZg += aZr, aZf++
			} else ++aZh >= aZr && (aZf++, aZh = 0);
			return 1
		}
		aN.a1E("Replay file smaller than expected."), bC.a23(!1), aD.zx = 2
	}
	this.aZX = 0, this.dd = function() {
		aZi = aG0 = aZh = aZg = aZf = 0
	}, this.j3 = function() {
		var aXS;
		h.j3(), bC.a8S() < 1.7 ? 0 === e8 ? bf.eM >= eM && (aXS = bf.aB4 / bC.a8S(), eM += aXS * Math.floor(1 + (bf.eM - eM) / aXS), 2 === aD.zx || aM.gx || !bC.a4k ? mL() : (aZl(), bb.aBf()), e8++) : aZm() : function() {
			var aXS;
			if (bf.eM >= eM)
				if (2 === aD.zx || aM.gx || !bC.a4k) mL(), eM = bf.eM;
				else {
					for (aXS = bf.aB4 / bC.a8S(), 16 < (bf.eM - eM) / aXS && (eM = bf.eM - 16 * aXS); bf.eM >= eM && 2 !== aD.zx;) eM += aXS, aZl();
					bb.aBf()
				} aZm()
		}(), mR(), bf.dl && (bf.dl = !1, y0())
	}, this.a07 = function() {
		b9.pu.aTj.length - aZf <= 2 || aN.a1E("Replay file larger than expected.")
	}
}

function aZs() {
	var e8 = 0,
		eM = bf.eM;
	this.aZX = 0, this.j3 = function() {
		h.j3(), aD.hB ? mW() : 0 === e8 ? bf.eM >= eM && (eM += bf.aB4 * Math.floor(1 + (bf.eM - eM) / bf.aB4), 2 === aD.zx || aM.gx ? mL() : (mN(), bb.aBf()), e8++) : ((aM.gx ? mW : (bf.dl = !0, mT))(), e8 = 0), mR(), bf.dl && (bf.dl = !1, y0())
	}
}

function dR() {
	this.a06 = null, this.dl = !1, this.eM = 0, this.aB4 = 56;
	var aZt = 0;

	function aZu() {
		bf.eM = aZt = performance.now(), bf.a06.j3(), window.requestAnimationFrame(aZu)
	}
	this.dd = function() {
		this.a4h(), window.requestAnimationFrame(aZu), this.eM = performance.now()
	}, this.a4Y = function() {
		aD.gw ? (this.a06 = new aZe, this.a06.dd()) : aD.kU ? this.a06 = new aZs : (this.a06 = new aZY, this.a06.dd())
	}, this.a4h = function() {
		this.a06 = new aZW, this.dl = !0
	}, this.j3 = function() {
		this.a06.aZX++
	}, this.k7 = function() {
		return this.a06.aZX
	}, this.aRu = function() {
		var dt = performance.now();
		dt < aZt + 1e3 || (this.eM = dt, this.a06.j3())
	}
}

function ct() {
	var aFQ = 0,
		aZv = !0;

	function aZw(id) {
		id = [L(480), L(481), L(482), L(483)][id];
		aN.a6X(id)
	}
	this.j3 = function() {
		var dt, a6s;
		bf.eM < aFQ || (aFQ = bf.eM + 5e3, aD.gw) || aD.kU || bA.g9.gz(aD.eX) || (dt = new Date, a6s = dt.getUTCSeconds(), aZv ? a6s < 50 && (aZv = !1) : a6s < 50 || (aZv = !0, (a6s = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a6s || 20 ==
			a6s || 40 == a6s ? aD.kS < 7 && aZw(0) : 10 == a6s || 30 == a6s || 50 == a6s ? 7 !== aD.kS && 10 !== aD.kS || aZw(1) : 5 == a6s || 25 == a6s || 45 == a6s ? 8 === aD.kS && aZw(2) : 35 == a6s && 9 === aD.kS && aZw(3))))
	}
}

function cn() {
	var n8, n9, nL, nM, aZx = 0,
		aZy = 0;

	function aa0() {
		return Math.pow(Math.pow(nL - n8, 2) + Math.pow(nM - n9, 2), .5)
	}

	function aZz(e) {
		n8 = h.k * e.touches[0].clientX, n9 = h.k * e.touches[0].clientY, nL = h.k * e.touches[1].clientX, nM = h.k * e.touches[1].clientY
	}
	this.a1V = function(e) {
		return 1 < e.touches.length ? (aZy = bf.eM, aZx = 3, aZz(e), aL.rr(), !0) : (aZx = 0, !1)
	}, this.a1W = function(e) {
		var aKo, i4, i5;
		return 0 !== aD.zx && 1 < e.touches.length && (aZx = Math.max(aZx - 1, 0), aH.nQ() && (aKo = aa0(), aZz(e), e = aa0(), i4 = Math.floor((n8 + nL) / 2), i5 = Math.floor((n9 + nM) / 2), aS.a8t(i4, i5, Math.max(.125, e) / Math.max(.125,
			aKo)), bf.dl = !0), !0)
	}, this.a1t = function() {
		var eu, ew;
		return !!(aZx && (aZx = 0, bf.eM < aZy + 500)) && (eu = (n8 + nL) / 2, ew = (n9 + nM) / 2, aL.a1n(eu, ew), aL.click(eu, ew, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.uA = function() {
		this.aC = null
	}, this.ph = function(size) {
		for (var fF = 0, aC = this.aC, nQ = this.e8 + size - 1, aB = this.e8; aB <= nQ; aB++) fF |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nQ - aB;
		return this.e8 += size, this.e8 > 8 * this.size && console.error("Unwrapper Overflow"), fF
	}, this.aSQ = function(size) {
		var f7 = size >> 1;
		return (1 << f7) * this.ph(size - f7) + this.ph(f7)
	}, this.aSR = function(aa1) {
		return this.size === bD.aSP(aa1)
	}, this.aTw = function(wo, aa2, aa3) {
		var gG = this.ph(wo);
		if (!gG) return null;
		for (var wo = Math.max(gG, aa3), g = new(aa2 <= 8 ? Uint8Array : aa2 <= 16 ? Uint16Array : Uint32Array)(wo), aB = 0; aB < gG; aB++) g[aB] = this.ph(aa2);
		aa3 = g[gG - 1];
		return aa3 && g.fill(aa3, gG), g
	}, this.aTx = function(wo, aa4, aa3) {
		var gG = this.ph(wo);
		if (!gG) return null;
		for (var wo = Math.max(gG, aa3), g = new Array(wo), aB = 0; aB < gG; aB++) g[aB] = this.aTu(aa4);
		return g.fill(g[gG - 1], gG), g
	}, this.aTu = function(wo) {
		return bG.vv.vz(this.ph(wo))
	}, this.aTv = function() {
		var qH = bF.sr.ss(bF.sr.st(this.ph(30))),
			qH = bA.rZ.a4A(qH, "_", "/");
		qH = bA.rZ.a4A(qH, "-", "+");
		for (var aa5 = "";
			(qH.length + aa5.length) % 4;) aa5 += "=";
		qH = "data:image/png;base64," + qH + aa5;
		var aHO = new Image;
		aHO.onload = function() {
			b9.aHn.aHo(aHO), aHO.onload = null, aHO = null
		}, aHO.src = qH
	}
}

function dL() {
	this.aUn = 0, this.aUo = 0, this.aUj = 0, this.aUk = 0, this.aUl = 0, this.aUm = 0, this.aBg = [0, 0, 0, 0], this.nP = function() {
		this.aUn = aS.y2(), this.aUo = aS.y3(), this.aUj = -this.aUn, this.aUk = -this.aUo, this.aUl = h.i / hy, this.aUm = h.j / hy, this.aBg[0] = Math.floor(this.aUj), this.aBg[1] = Math.floor(this.aUk), this.aBg[2] = Math.floor(this.aBg[0] +
			this.aUl + 1), this.aBg[3] = Math.floor(this.aBg[1] + this.aUm + 1), bb.aBd = !0
	}
}

function co() {
	var a7Y, mv;
	this.dd = function() {
		a7Y = 1, mv = 0
	}, this.j3 = function() {
		0 < a7Y && (mv = 0 === mv ? bf.eM + 16 : mv, a7Y = (a7Y -= .001 * (bf.eM - mv)) < 0 ? 0 : a7Y, mv = bf.eM, bf.dl = !0)
	}, this.ug = function() {
		0 < a7Y && (uh.fillStyle = "rgba(0,0,0," + a7Y + ")", uh.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e8 = 0, this.aC = null, this.dd = function(aC) {
		this.e8 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aa1) {
		return this.dd(new Uint8Array(this.aSP(aa1))), this.aC
	}, this.uA = function() {
		this.aC = null
	}, this.a8 = function(size, a6w) {
		for (var aC = this.aC, nQ = this.e8 + size - 1, aB = this.e8; aB <= nQ; aB++) aC[aB >> 3] |= (a6w >> nQ - aB & 1) << 7 - (7 & aB);
		this.e8 += size, this.e8 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aSO = function(size, a6w) {
		var f7 = size >> 1,
			eq = 1 << f7;
		this.a8(size - f7, bL.du(a6w, eq)), this.a8(f7, a6w % eq)
	}, this.aa8 = function(size) {
		for (var aC = this.aC, nQ = this.e8 + size, aB = this.e8; aB < nQ; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aSP = function(aa1) {
		return aa1 + 7 >> 3
	}, this.aa9 = function(g, jR, nQ, aaA) {
		for (var aB = jR; aB < nQ; aB++) this.a8(aaA, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e8 = 0
	}, this.aSo = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aaB, value) {
		for (var g = this.g, nQ = this.e8 + aaB - 1, aaC = 1 + (nQ >> 3); g.length < aaC;) g.push(0);
		for (var aB = this.e8; aB <= nQ; aB++) g[aB >> 3] |= (value >> nQ - aB & 1) << 7 - (7 & aB);
		this.e8 += aaB
	}, this.dk = function(g, wo, aa2) {
		var aaD = bA.qi.a2f(g);
		this.a8(wo, aaD);
		for (var aB = 0; aB < aaD; aB++) this.a8(aa2, g[aB])
	}, this.aUE = function(g, wo, aa4) {
		var aaD = bA.qi.a2f(g);
		this.a8(wo, aaD);
		for (var aB = 0; aB < aaD; aB++) this.aUC(g[aB], aa4)
	}, this.aUC = function(qH, wo) {
		var en = qH.length;
		this.a8(wo, en);
		for (var aB = 0; aB < en; aB++) this.a8(16, qH.charCodeAt(aB))
	}, this.aUD = function(a2l) {
		var aaE = (a2l = a2l.toDataURL()).split(",");
		if (aaE.length < 2) console.log("error 266");
		else {
			a2l = bA.rZ.a4A(a2l = aaE[aaE.length - 1], "/", "_"), a2l = bA.rZ.a4A(a2l, "\\+", "-");
			var a2l = bA.rZ.a4A(a2l, "=", ""),
				w8 = bG.sr.w5(a2l),
				en = w8.length;
			this.a8(30, en);
			for (var aB = 0; aB < en; aB++) this.a8(6, w8[aB])
		}
	}
}
a(), self.aiCommand746 = function(fF) {
	0 === fF ? bt() : 1 !== fF || !a0 || 1 !== a0.id || a0.dv < 14 || bJ.fG()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};