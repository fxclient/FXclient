var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, h, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, t, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, a0, bh, bi, bj, o, bk, bl, bm, bn, bo, bp, bq, br, fb, fc, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, hw, iM, iN, a7k,
	li, jt, a1M, ue, y2, aBe, a4Y, a4Z, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io",
		"input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>",
		"undefined", "pre", "</a>", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave",
		"inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel", "underline", "top",
		"tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown",
		"italic ", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back",
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

function bs(bt) {
	l && !bt || (bv(), bK = new bw, bJ = new bx, b9 = new by, bA = new bz, aD = new c0, b6 = new c1, bE = new c2, bF = new c3, aE = new c4, aF = new c5, aG = new c6, aH = new c7, aI = new c8, aJ = new c9, aK = new cA, aL = new cB, aM = new cC, aN =
		new cD, aO = new cE, aP = new cF, aQ = new cG, aR = new cH, aS = new cI, aT = new cJ, aU = new cK, aV = new cL, aW = new cM, aX = new cN, aY = new cO, aZ = new cP, aa = new cQ, ab = new cR, ac = new cS, ak = new cT, al = new cU, am =
		new cV, ad = new cW, ae = new cX, ah = new cY, af = new cZ, ag = new ca, ai = new cb, ay = new cc, aj = new cd, ao = new ce, ap = new cf, aq = new cg, az = new ch, ax = new ci, an = new cj, ar = new ck, at = new cl, au = new cm, h =
		new cn, av = new co, aw = new cp, b0 = new cq, b1 = new cr, b2 = new cs, b3 = new ct, b4 = new cu, b5 = new cv, b7 = new cw, b8 = new cx, bB = new cy, bC = new a6, bD = new cz, bG = new d0, bH = new d1, bI = new d2, bL = new d3, bM =
		new d4, bN = new d5, bO = new d6, bP = new d7, bQ = new d8, bR = new d9, bS = new dA, t = new dB, bT = new dC, a0 = new dD, l = new dE, bh = new dF, bi = new dG, bf = new dH, bg = new dI, bZ = new dJ, ba = new dK, bU = new dL, bV =
		new dM, bc = new dN, bd = new dO, be = new dP, bj = new dQ, bb = new dR, o = new dS, bk = new dT, bl = new dU, bm = new dV, bo = new dW, bp = new dX, bq = new dY, br = new dZ, l.db(), a0.db(), h.dc(), bi.db(), b6.db(), b6.dd(), (bW =
			new de).db(), b9.db(), bU.db(), az.db(), bE.db(), bF.db(), bR.db(), t.db(), bX = new df, h.db(), a0.a1.dg(), be.db(), bb.db(), bV.db(), bY = new dh, ax.db(), ae.di(), bT.db(), ao.db(), aa.db(), aT.db(), ai.db(), bI.db(), ab.db(), be
		.dj = !0, setTimeout(function() {
			bR.a7(2, 14071)
		}, 0), t.u(5, 5), bH.dk() || a0.a1.dl(), h.dm(), l.m = 1)
}

function dE() {
	this.dn = 1101, this.n = 2094, this.rVersion = 11, this.dp = 0, this.db = function() {
		this.dq = 2;
		var dr = bK.ds(this.n, 10) % 100;
		this.dt = "18 Jul 2025 [" + bK.ds(this.n, 1e3) + "." + (dr < 10 ? "0" : "") + dr + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dv = (new Date).getTime() % 1024
	}, this.m = 0
}

function dw() {
	var dx = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dy = [100, 60, 30, 15, 6, 1],
		dz = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e0 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		e1 = ["👢", "🔇", "✂️", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		e2 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e3 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.e4 = function(id, e5, e6) {
		e5 = this.e7(e5);
		return +(dz[e5][id] > e6)
	}, this.e7 = function(e5) {
		for (var aB = 0; aB < dy.length; aB++)
			if (dy[aB] <= e5) return aB;
		return dy.length
	}, this.e8 = function(e5) {
		return dx[this.e7(e5)]
	}, this.e9 = function(id, eA) {
		return e0[id].replace(new RegExp("x", "g"), eA)
	}, this.eB = function(id, eA) {
		return e2[id].replace(new RegExp("x", "g"), eA)
	}, this.eC = function(id, eD) {
		return e1[id] + (this.e3[id][eD].length ? " (" + this.e3[id][eD] + ")" : "")
	}
}

function dC() {
	this.eE = new eF, this.db = function() {
		a0.a1.eG()
	}, this.eH = function() {
		return bi.eI.data[160].value
	}
}

function eF() {
	var eJ = 2e4;
	this.show = function() {
		if (be.eK < eJ) return !1;
		eJ = be.eK + 135e4, 2 === l.dq && a0.a1.eL(Math.floor(135e4))
	}
}

function cV() {
	this.eM = new eN
}

function eN() {
	this.eO = function(eP) {
		var eS;
		return bR.eQ(bR.eR) && aD.data.passableMountains && (eS = ac.eT(eP), this.eU(aD.eV, eS) || this.eW(aD.eV, eS)) && 0 !== (eS = function(er) {
			for (var es = bL.et(er), eu = bL.ev(er), max = Math.max(bR.ew, bR.ex) - 2, ey = max * max, ez = !1, f0 = 0, f1 = 0; f1 < max; f1++) {
				var f2, eX = function(es, eu, f1) {
					for (var aB = 0; aB <= f1; aB++)
						for (var f4 = -1; f4 < 2; f4 += 2)
							for (var f5 = -1; f5 < 2; f5 += 2)
								for (var f6 = 0; f6 < 2; f6++) {
									var eP = function(es, eu) {
										if (bL.f8(es, eu)) {
											es = bL.f9(es, eu), eu = bL.eb(es);
											if (ac.eg(eu) && ac.fA(eu)) return es
										}
										return 0
									}(es + f6 * f4 * aB + (1 - f6) * f5 * f1, eu + f6 * f5 * f1 + (1 - f6) * f4 * aB);
									if (eP) return eP
								}
					return 0
				}(es, eu, f1);
				eX && (f2 = bL.f3(es, eu, eX)) < ey && (f0 = eX, ey = f2, ez || (ez = !0, max = Math.floor(Math.sqrt(f2)) + 1))
			}
			return f0
		}(bL.eZ(eP))) && (eP = bL.eb(eS), ac.ec(eP) || (eP = ac.ed(eP)) !== aD.eV && br.ee(eP, aD.eV)) ? eS : 0
	}, this.ef = function(player, eX) {
		eX = bL.eb(eX);
		if (ac.eg(eX)) {
			if (ac.ec(eX)) bN.eh[0] = aD.ei;
			else if (ac.ed(eX) !== bN.eh[0]) return !1;
			for (var ej = function(eP) {
					var en = ac.en,
						ej = [];
					loop: for (var eo = 3; 0 <= eo; eo--) {
						var ep = eP + en[eo];
						if (ac.eq(ep)) {
							for (var id = ac.eT(ep), aB = 0; aB < ej.length; aB++)
								if (id === ej[aB]) continue loop;
							bN.em[ej.length] = ep, ej.push(id)
						}
					}
					return ej
				}(eX), el = ej.length, aB = 0; aB < el; aB++)
				if (this.eU(player, ej[aB]) || this.eW(player, ej[aB])) return bN.em[0] = bN.em[aB], !0
		}
		return !1
	}, this.eU = function(player, eS) {
		for (var fB = ag.fB[player], el = fB.length, fC = Math.max(bK.ds(el, 12), 1), en = ac.en, aB = 0; aB < el; aB += fC)
			for (var ea = fB[aB], eo = 3; 0 <= eo; eo--) {
				var ep = ea + en[eo];
				if (ac.eq(ep) && eS === ac.eT(ep)) return !0
			}
		return !1
	}, this.eW = function(player, eS) {
		for (var fB = ag.fB[player], el = fB.length, en = ac.en, aB = 0; aB < el; aB++)
			for (var ea = fB[aB], eo = 3; 0 <= eo; eo--) {
				var ep = ea + en[eo];
				if (ac.eq(ep) && eS === ac.eT(ep)) return !0
			}
		return !1
	}
}

function d5() {
	this.g = new Array(4), this.fF = new Uint16Array(2), this.fG = new Uint16Array(2), this.fH = new Int32Array(2), this.fI = new Uint32Array(2), this.fJ = new Uint32Array(2), this.fK = new Uint8Array(4), this.fL = new Uint8Array(4), this.em =
		new Uint32Array(4), this.fM = new Uint32Array(5), this.eh = new Uint32Array(8), this.fN = new Uint32Array(8), this.fO = new Uint16Array(16), this.fP = new Uint16Array(512), this.fQ = new Uint16Array(512), this.fR = new Uint16Array(512), this
		.fS = new Uint16Array(0), this.db = function() {
			var el = bR.ew * bR.ex;
			this.fS.length !== el && (this.fS = new Uint16Array(el))
		}, this.fT = function(g, fU) {
			return g[0] = fU, g
		}, this.fV = function(g, fU, fW) {
			return g[0] = fU, g[1] = fW, g
		}, this.fX = function(g, fU, fW, fY) {
			return g[0] = fU, g[1] = fW, g[2] = fY, g
		}, this.fZ = function(g, fU, fW, fY, fa) {
			return g[0] = fU, g[1] = fW, g[2] = fY, g[3] = fa, g
		}
}

function fo() {
	fh = 0, fi = 2048, fj = new Uint32Array(4 * fi), fk = 0, fl = new Uint32Array(fi), fm = new Uint8Array(bR.ew * bR.ex)
}

function fp(player) {
	fc = player, fn = !1, fq(), fr();
	for (var aB = ad.fs(fc) - 1; 0 <= aB; aB--) fb = aB, ft();
	fn && fu()
}

function fu() {
	br.fv(), br.fw()
}

function ft() {
	fg = ad.fx(fc, fb), fd = ad.fy(fc, fb), fe = ad.fz(fc, fb), g0(), (0 !== fh && (g2(), g3()) ? g4 : g1)()
}

function g3() {
	if (!((ff = bK.ds(fd, fh)) > aD.g5)) {
		if (!fe) return !1;
		var g6 = fh * (1 + aD.g5);
		fd += b9.g7.g8(fc, g6 - fd), ff = bK.ds(fd, fh)
	}
	return !0
}

function g2() {
	for (var aB = fh - 1; 0 <= aB; aB--) fm[bK.ds(fj[aB], 4)] = 0
}

function g1() {
	1 === ad.fs(fc) && aF.g9(fc);
	var dr = b9.g7.gA(fc, fd);
	bc.gB(fc, fd - dr, 12), ad.gC(fc, fb)
}

function fq() {
	for (var player = fc, gD = ag.gD, el = Math.min(gD[player].length, fi), gE = 0, gF = fl, aB = el - 1; 0 <= aB; aB--) gF[gE++] = gD[player][aB];
	fk = gE
}

function fr() {
	for (var aB = ag.gD[fc].length - 1; 0 <= aB; aB--) ac.eg(ag.gD[fc][aB]) && ac.gG(ag.gD[fc][aB], fc);
	ag.gD[fc] = []
}

function g0() {
	fh = 0, (fg === aD.ei ? gH : gI)()
}

function gI() {
	for (var gJ, gK, aB, en = ac.en, eo = 3; 0 <= eo; eo--)
		for (aB = fk - 1; 0 <= aB; aB--) gJ = fl[aB] + en[eo], gK = bK.ds(gJ, 4), 0 === fm[gK] && ac.gL(gJ) && ac.ed(gJ) === fg && (fm[gK] = 1, fj[fh++] = gJ)
}

function gH() {
	for (var gJ, gK, aB, en = ac.en, eo = 3; 0 <= eo; eo--)
		for (aB = fk - 1; 0 <= aB; aB--) gJ = fl[aB] + en[eo], gK = bK.ds(gJ, 4), 0 === fm[gK] && ac.ec(gJ) && (fm[gK] = 1, fj[fh++] = gJ)
}

function g4() {
	gM() ? (gN(), fg !== aD.ei && gO()) : g1()
}

function gO() {
	br.gP(), br.gQ(ag.gR[fg]), br.gQ(ag.gS[fg]), bR.eQ(bR.eR) && br.gQ(ag.fB[fg]), br.gT(ag.gD[fg]), br.gU(ag.gS[fg]), br.gU(ag.fB[fg]), br.gV(), br.gW()
}

function gN() {
	fn = !0, ad.gX(fc, fb, fd), ad.gY(fc, fb), ag.gZ[fc] += fh, br.ga(), gb()
}

function gM() {
	return (fg === aD.ei ? gc : gd)()
}

function gd() {
	var ge = fh * aD.g5,
		gf = gg(),
		gh = gi(),
		gf = ge + 2 * gf + gh,
		gk = ff * fh;
	return gf < gk ? (fd -= gf, bc.gB(fc, gf, 13), gl(gf - ge, gh), !0) : fe && 0 === gh ? (fd -= gk, gk += b9.g7.g8(fc, gf - gk + 1), bc.gB(fc, gk, 13), gl(gk - ge, 0), !0) : (fd -= gk, bc.gB(fc, gk, 13), gl(gk - ge, gh), !1)
}

function gl(gk, gh) {
	if (0 < gh) {
		if (gk <= gh) return bc.gB(fg, gk, 13), void ad.gm(fg, fc, gh - gk);
		ad.gm(fg, fc, 0), gk -= gh
	}
	gk = bK.ds(gk, 2), gk = Math.min(ag.gn[fg], gk), bc.gB(fg, gk, 13), ag.gn[fg] -= gk
}

function gi() {
	return ad.go(fg, fc)
}

function gg() {
	return bK.ds(fh * ag.gn[fg], 1 + bK.ds(10 * ag.gZ[fg], 16))
}

function gc() {
	var gp = fh * aD.g5;
	return fd -= gp, bc.gB(fc, gp, 13), !0
}

function gb() {
	for (var aB = fh - 1; 0 <= aB; aB--) ag.gD[fc].push(fj[aB]), ag.gR[fc].push(fj[aB]), ac.gG(fj[aB], fc)
}

function dA() {
	var gq = 0,
		gr = 0;
	this.gs = function(es, eu) {
		gq = es, gr = eu
	}, this.gt = function(code) {
		var h0, h2, eX;
		aD.gu || aM.gv || (b9.g7.gw(0) || b9.g7.gw(1)) && b9.g7.gx(aD.eV) && (aR.gy(gq, gr) ? aR.gz = !1 : aP.gy(gq, gr) || (h0 = bL.h1(gq), h2 = bL.h3(gr), eX = bL.f9(h0, h2), bL.h4(h0, h2) && (0 === code ? function(eX) {
			var h8, eP, ea;
			aD.h9 ? -1 !== (h8 = bq.hA(eX)) && b7.hB.hC(eX) : (eP = bL.eb(eX), ac.eq(eP) ? (h8 = am.eM.eO(eP)) && (ea = bL.eb(h8), ea = ac.ec(ea) ? aD.ei : ac.ed(ea), b7.hB.hE(aR.hF(), h8, ea)) : (h8 = bq.hG(eX)) < 0 || (eP = bL
				.eb(h8), ac.ec(eP) ? br.hH(aD.eV) ? b7.hB.hI(aR.hF(), aD.ei) : ad.fs(aD.eV) && b0.hJ(aD.ei, aR.hF()) : (ea = ac.ed(eP), br.ee(ea, aD.eV) && (br.hK(aD.eV, ea) ? b7.hB.hI(aR.hF(), ea) : ad.fs(aD.eV) && b0.hJ(
					ea, aR.hF())))))
		}(eX) : 1 === code ? function(eX) {
			bM.hL.hM(aD.eV, eX) && b7.hB.hN(aR.hF(), bN.fN[7])
		}(eX) : 2 === code && function(eX) {
			bM.hO.hP(aD.eV, eX) && b7.hB.hQ(aR.hF())
		}(eX))))
	}, this.hR = function() {
		if (!aD.gu && !aM.gv && b9.g7.gw(1)) {
			var gJ = aD.eV;
			if (b9.g7.gx(gJ)) {
				var el = ad.fs(gJ);
				if (el < 1) ! function() {
					var gJ = aD.eV;
					if (br.hH(gJ)) b7.hB.hI(aR.hF(), aD.ei);
					else
						for (var en = ac.en, gR = ag.gR, el = gR[gJ].length, hb = Math.floor(Math.random() * el), aB = 0; aB < el; aB++)
							for (var hc = 3; 0 <= hc; hc--) {
								var hd = gR[gJ][(aB + hb) % el] + en[hc];
								if (ac.gL(hd)) {
									hd = ac.ed(hd);
									if (hd !== gJ && (!aD.hf || br.ee(gJ, hd))) return b7.hB.hI(aR.hF(), hd)
								}
							}
				}();
				else {
					for (var hT = 0, hU = ad.fy(gJ, 0), aB = 1; aB < el; aB++) {
						var hV = ad.fy(gJ, aB);
						hV < hU && (hU = hV, hT = aB)
					}
					b7.hB.hI(aR.hF(), ad.fx(gJ, hT))
				}
			}
		}
	}, this.hW = function() {
		if (!aD.gu && !aM.gv && b9.g7.gx(aD.eV) && b9.g7.gw(1)) return av.hX ? av.hY(aD.eV) ? void b7.hB.hZ(1) : void 0 : void(av.ha(aD.eV) && b7.hB.hW())
	}
}

function hg(hh, size, hi, hj, font) {
	var aB, hm = .2,
		canvas = document.createElement("canvas"),
		hn = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hh, canvas.height = hh, hn.font = size + font, hn.textAlign = "center", hn.textBaseline = "middle", hn.fillStyle = "red", aB = 0; aB < hi.length; aB++) hn.fillText(hi[aB], .5 * hh, .5 * hh);
	return -1 < (canvas = function(hk) {
		var aB, e5, eo = hk.data;
		for (aB = eo.length - 4; 0 <= aB; aB -= 4)
			if (e5 = eo[aB], hj <= e5) return Math.floor(aB / (4 * hh));
		return -1
	}(hn.getImageData(0, 0, hh, hh))) && (hm = (canvas - .5 * hh + .1 * size) / size), Math.max(hm, 0)
}

function d3() {
	this.hp = new Int16Array(4), this.hq = new Int16Array(4), this.hr = null, this.db = function() {
		var aB;
		for (this.hp[0] = -bR.ew, this.hp[1] = 1, this.hp[2] = bR.ew, this.hp[3] = -1, this.hr = new Int16Array([-bR.ew, 1 - bR.ew, 1, bR.ew + 1, bR.ew, bR.ew - 1, -1, -bR.ew - 1]), aB = 0; aB < 4; aB++) this.hq[aB] = 4 * this.hp[aB]
	}, this.hs = function() {
		return bK.ht(Math.floor(.15 * (1 + .25 * a0.a1.hu()) * h.hv / hw), 4, 128)
	}, this.hx = function(eP, id) {
		for (var hy = this.hq, aB = 0; aB < 4; aB++) {
			var ea = eP + hy[aB];
			if (ac.hz(ea) && ac.eT(ea) === id) return !0
		}
		return !1
	}, this.i0 = function(player, eP) {
		return !ac.ec(eP) && player === ac.ed(eP)
	}, this.f3 = function(h0, h2, eX) {
		return (h0 -= this.et(eX)) * h0 + (h2 -= this.ev(eX)) * h2
	}, this.i1 = function(i2, i3, i4) {
		i2 = this.i6(i2) - this.i7(i4), i3 = this.i9(i3) - this.iA(i4);
		return Math.sqrt(i2 * i2 + i3 * i3)
	}, this.iB = function(iC, iD) {
		var i5 = this.et(iC) - this.et(iD),
			iC = this.ev(iC) - this.ev(iD);
		return ~~Math.sqrt(i5 * i5 + iC * iC + .5)
	}, this.iE = function(iC, iD) {
		var i5 = this.et(iC) - this.et(iD),
			iC = this.ev(iC) - this.ev(iD);
		return i5 * i5 + iC * iC
	}, this.iF = function(iG, iH, iI, iJ) {
		return (iG -= iI) * iG + (iH -= iJ) * iH
	}, this.iK = function(gJ, iL) {
		return bK.ds(iL * ag.gn[gJ], 1e3)
	}, this.i6 = function(i2) {
		return 16 * (i2 + iM) / hw
	}, this.i9 = function(i3) {
		return 16 * (i3 + iN) / hw
	}, this.iO = function(eo) {
		return 16 * eo / hw
	}, this.h1 = function(i2) {
		return Math.floor((i2 + iM) / hw)
	}, this.h3 = function(i3) {
		return Math.floor((i3 + iN) / hw)
	}, this.h4 = function(h0, h2) {
		return 1 <= h0 && 1 <= h2 && h0 < bR.ew - 1 && h2 < bR.ex - 1
	}, this.et = function(eX) {
		return eX % bR.ew
	}, this.ev = function(eX) {
		return bK.ds(eX, bR.ew)
	}, this.f9 = function(h0, h2) {
		return h2 * bR.ew + h0
	}, this.iP = function(h0, h2) {
		return 4 * this.f9(h0, h2)
	}, this.iQ = function(eX) {
		return this.f8(this.et(eX), this.ev(eX))
	}, this.f8 = function(h0, h2) {
		return 0 < h0 && h0 < bR.ew - 1 && 0 < h2 && h2 < bR.ex - 1
	}, this.eb = function(eX) {
		return eX << 2
	}, this.eZ = function(eP) {
		return eP >> 2
	}, this.iR = function(eX) {
		return bR.ew * this.ev(eX) * 256 + (this.et(eX) << 4)
	}, this.iS = function(eX) {
		return this.iR(eX) + 8 + (bR.ew << 7)
	}, this.iT = function(i4) {
		return bR.ew * (this.iA(i4) >> 4) + (this.i7(i4) >> 4)
	}, this.iU = function(i4) {
		i4 = this.iT(i4);
		return (this.et(i4) >> 5) + bM.iV.iW * (this.ev(i4) >> 5)
	}, this.i7 = function(i4) {
		return i4 % (bR.ew << 4)
	}, this.iA = function(i4) {
		return bK.ds(i4, bR.ew << 4)
	}, this.iX = function(eX, hc) {
		return eX + this.hp[hc]
	}, this.iY = function(eP, hc) {
		return eP + this.hq[hc]
	}, this.iZ = function(iC, iD) {
		var i5 = this.et(iD) - this.et(iC),
			iD = this.ev(iD) - this.ev(iC);
		return Math.abs(i5) >= Math.abs(iD) ? 1 + 2 * (i5 < 0) : 2 * (0 < iD)
	}, this.ia = function(player) {
		return this.f9(ag.ib[player] + ag.ic[player] >> 1, ag.ie[player] + ag.ig[player] >> 1)
	}, this.ih = function(player) {
		return this.f9(ax.ii(ag.ib[player], ag.ic[player]), ax.ii(ag.ie[player], ag.ig[player]))
	}
}

function cj() {
	this.ij = new ik, this.il = new im, this.io = new ip, this.performance = new iq, this.ir = new is, this.it = new iu, this.iv = new iw, this.ix = new iy, this.iz = new j0, this.db = function() {
		this.ij.db(), this.io.db(), this.performance.db(), this.ir.db(), this.it.db()
	}, this.j1 = function() {
		this.performance.j1(), this.ij.j1(), this.io.j2()
	}
}

function is() {
	var j3, j5 = new Uint16Array(8);

	function jE(size, player) {
		for (var aB = ag.gD[player].length - 1; size <= aB; aB--) ac.jL(ag.gD[player][aB], player)
	}
	this.db = function() {
		j3 = 0
	}, this.j6 = function(player, j7) {
		return bN.eh[1] = ag.gD[player].length, bN.eh[0] === aD.ei ? an.ir.j8(player) : this.j9(player, bN.eh[0]), (0 !== bN.eh[1] || 0 !== ag.gD[player].length) && !(!j7 && bN.eh[1] === ag.gD[player].length || (bN.eh[0] === aD.ei ? ag.jA[
			player]++ : ag.jB[player]++, 0))
	}, this.jC = function(player) {
		aD.hf && (an.it.jD[player] = 1), jE(bN.eh[1], player), ad.jF(player, bN.fI[0], bN.eh[0]), aF.jG(player, !1)
	}, this.jH = function(player, jI, el, hU) {
		var jJ = bK.ds(12 * ag.gn[player], 1024);
		hU -= hU >= bK.ds(ag.gn[player], 2) ? jJ : 0, jE(el, player), ad.jF(player, hU, jI), ag.gn[player] -= hU + jJ, aF.jG(player, !1)
	}, this.j9 = function(player, jI) {
		for (var hc, en = ac.en, aB = ag.gR[player].length - 1; 0 <= aB; aB--)
			if (ac.jK(ag.gR[player][aB]))
				for (hc = 3; 0 <= hc; hc--)
					if (ac.gL(ag.gR[player][aB] + en[hc]) && ac.ed(ag.gR[player][aB] + en[hc]) === jI) {
						ag.gD[player].push(ag.gR[player][aB]);
						break
					}
	}, this.j8 = function(player) {
		for (var en = ac.en, aB = ag.gR[player].length - 1; 0 <= aB; aB--)
			if (ac.jK(ag.gR[player][aB]))
				for (var hc = 3; 0 <= hc; hc--)
					if (ac.ec(ag.gR[player][aB] + en[hc])) {
						ag.gD[player].push(ag.gR[player][aB]);
						break
					}
	}, this.jM = function(player, jN) {
		var aB, f4, hc, he, el = ag.gR[player].length,
			jO = 256 <= el ? 12 : 32 <= el ? 6 : 1,
			jP = el - 1 - ax.jQ(jO),
			en = ac.en;
		j3 = 0;
		loop: for (aB = jP; 0 <= aB; aB -= jO)
			for (hc = 3; 0 <= hc; hc--)
				if ((he = ac.ec(ag.gR[player][aB] + en[hc]) ? aD.ei : ac.ed(ag.gR[player][aB] + en[hc])) === aD.ei || ac.gL(ag.gR[player][aB] + en[hc]) && he !== player && (jN || br.ee(player, he))) {
					for (f4 = j3 - 1; 0 <= f4; f4--)
						if (j5[f4] === he) continue loop;
					if (j5[j3] = he, 8 <= ++j3) return !0
				}
		return 0 < j3
	}, this.jR = function(player, jN) {
		var aB, hc, he, en = ac.en;
		for (j3 = 0, aB = ag.gR[player].length - 1; 0 <= aB; aB--)
			for (hc = 3; 0 <= hc; hc--)
				if ((he = ac.ec(ag.gR[player][aB] + en[hc]) ? aD.ei : ac.ed(ag.gR[player][aB] + en[hc])) === aD.ei || ac.gL(ag.gR[player][aB] + en[hc]) && he !== player && (jN || br.ee(player, he))) return j5[j3++] = he, !0;
		return !1
	}, this.jS = function() {
		for (var f5, aB = j3 - 1; 0 <= aB; aB--)
			if (j5[aB] === aD.ei) {
				for (j3--, f5 = aB; f5 < j3; f5++) j5[f5] = j5[f5 + 1];
				return !0
			} return !1
	}, this.jT = function(player) {
		for (var f5, aB = j3 - 1; 0 <= aB; aB--)
			if (ad.jU(player, j5[aB]))
				for (j3--, f5 = aB; f5 < j3; f5++) j5[f5] = j5[f5 + 1];
		return 0 === j3
	}, this.jV = function() {
		for (var aB = j3 - 1; 0 <= aB; aB--)
			if (b9.g7.jW(j5[aB])) return !0;
		return !1
	}, this.jX = function() {
		for (var aB = j3 - 1; 0 <= aB; aB--) b9.g7.jW(j5[aB]) || (j5[aB] = j5[--j3]);
		return 0 < j3
	}, this.jY = function(player) {
		for (var f5, jZ = j5[0], ja = ag.gn[jZ] + ad.go(jZ, player), aB = j3 - 1; 1 <= aB; aB--)(f5 = ag.gn[j5[aB]] + ad.go(j5[aB], player)) < ja && (jZ = j5[aB], ja = f5);
		return jZ
	}, this.jb = function(player) {
		var j, jc = j5[0];
		if (1 !== j3)
			for (var jd = bK.ds(ag.ic[player] + ag.ib[player], 2), je = bK.ds(ag.ig[player] + ag.ie[player], 2), f1 = jf(jd - bK.ds(ag.ic[jc] + ag.ib[jc], 2)) + jf(je - bK.ds(ag.ig[jc] + ag.ie[jc], 2)), aB = j3 - 1; 1 <= aB; aB--)(j = jf(jd - bK
				.ds(ag.ic[j5[aB]] + ag.ib[j5[aB]], 2)) + jf(je - bK.ds(ag.ig[j5[aB]] + ag.ie[j5[aB]], 2))) < f1 && (f1 = j, jc = j5[aB]);
		return jc
	}, this.jg = function() {
		for (var jh = j5, ji = jh[0], gn = ag.gn, jj = gn[ji], aB = j3 - 1; 1 <= aB; aB--) {
			var gJ = jh[aB],
				f5 = gn[gJ];
			jj < f5 && (ji = gJ, jj = f5)
		}
		return ji
	}, this.jk = function() {
		return j5[ax.jQ(j3)]
	}
}

function iu() {
	function jz(player, jI, jp) {
		3 <= jp && 2142 < be.k5() && (jI === aD.ei || ag.gn[jI] < bK.ds(ag.gn[player], 20)) && aE.ju(player, 20)
	}

	function k2(player, hU, jI, jp) {
		3 <= jp && jp < 6 && bK.ds(ag.gn[player], 8) > ag.gn[jI] && (hU = Math.max(bK.ds(11 * ag.gn[jI], 5), bK.ds(ag.gn[player], 10)));
		jp = ag.gD[player].length;
		an.ir.j9(player, jI), an.ir.jH(player, jI, jp, hU)
	}

	function jy(player, hU) {
		var jI = aD.ei,
			el = ag.gD[player].length;
		an.ir.j8(player), ag.gD[player].length !== el && an.ir.jH(player, jI, el, hU)
	}
	this.jD = new Uint8Array(aD.ei), this.db = function() {
		this.jD.fill(0)
	}, this.jl = function(player, hU) {
		var jn, jp, jq, jr;
		ad.jm(player) && (jn = ae.jo(player), 3 <= (jp = aE.hU[player]) && jp < 6 && (hU = Math.max(ag.gn[player] - jn, hU)), jq = ag.gS[player].length, jr = ag.gR[player].length, 30 * ag.gZ[player] > aD.js && jt[player] < 10 && 100 * jr <= jq &&
			aE.ju(player, 10), aD.hf ? function(player, hU, jp, jn) {
				var jI;
				if (an.it.jD[player] = 1, an.ir.jM(player, !1) || an.ir.jR(player, !1)) {
					if (!an.ir.jT(player))
						if (an.ir.jS()) jy(player, hU), jz(player, aD.ei, jp);
						else {
							if (ax.k0(aE.k1[jp])) jI = an.ir.jY(player);
							else {
								if (an.ir.jV() && ax.k0(aE.k3[jp]) && an.ir.jX(), 6 === jp) return k2(player, hU, an.ir.jk(), jp);
								jI = an.ir.jb(player)
							}
							k2(player, hU, jI, jp), jz(player, jI, jp)
						}
				} else bM.jw.j1(player) || an.iv.j1(player) || (an.it.jD[player] = 0, function(player, hU, jp, jn) {
					var aB, f5, f6, ej = bf.ej,
						k6 = ej[player];
					if (0 !== k6) {
						var k7 = ag.gn[player],
							gZ = ag.gZ;
						if (player < aD.k8 && (hU = k7), !(k7 < gZ[player] || 5 === jp && k7 < jn || 4 === jp && k7 < bK.ds(jn, 2))) {
							var el = al.k9,
								kA = al.kA,
								jD = (aB = ax.jQ(el), an.it.jD);
							for (f5 = 0; f5 < el; f5++)
								if (f6 = kA[(f5 + aB) % el], 1 === jD[f6] && ej[f6] === k6) return b7.kB.kC(player, f6, hU)
						}
					}
				}(player, hU, jp, jn))
			}(player, hU, jp, jn) : (!jr || jq && (jq < jr && !ax.jQ(10) || 100 * jr <= jq && ax.jQ(3) || !ax.jQ(8))) && bM.jw.j1(player) || function(player, hU, jp) {
				an.ir.jM(player, !0) || an.ir.jR(player, !0) ? an.ir.jT(player) || (an.ir.jS() ? jy(player, hU) : ax.k0(aE.k1[jp]) ? k2(player, hU, an.ir.jY(player), jp) : 5 === jp ? k2(player, hU, an.ir.jg(), jp) : (an.ir.jV() && ax.k0(aE
					.k3[jp]) && an.ir.jX(), k2(player, hU, 6 === jp ? an.ir.jk() : an.ir.jb(player), jp))) : an.iv.j1(player)
			}(player, hU, jp))
	}
}

function c4() {
	var kD = new Uint8Array(aD.ei),
		kE = new Uint16Array(aD.ei),
		kF = new Uint16Array(aD.ei),
		kG = new Uint8Array(aD.ei),
		kH = (this.hU = new Uint8Array(aD.ei), new Uint16Array(aD.ei)),
		kI = new Uint16Array(aD.ei);

	function kX(aB) {
		kD[aB] = 1 + bK.ds(kH[aB] * ax.random(), 10 * ax.value(100))
	}
	this.kJ = null, this.k3 = [97, 94, 70, 40, 20, 0, 100], this.kK = [500, 450, 400, 300, 80, 50, 100], this.k1 = [0, 0, 5, 25, 50, 100, 0], this.kL = [60, 74, 112, 200, 256, 512, 512], this.kM = [1, 2, 3, 4, 6, 8, 1], this.kN = [500, 450, 400, 300,
		80, 50, 100
	], this.kO = [100, 150, 250, 400, 600, 1e3, 100], this.dc = function() {
		this.kJ = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.db = function() {
		kD.fill(0), kE.fill(0), kF.fill(0), kG.fill(0), this.hU.fill(0), kH.fill(0), kI.fill(0);
		var kP = aD.k8;
		if (9 === aD.kQ) this.kR();
		else if (aD.kS)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kU - 1; 0 <= aB; aB--) {
					var hd = aB + kP;
					this.hU[hd] = aD.data.botDifficultyData[hd]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kU - 1; 0 <= aB; aB--) this.hU[hd = aB + kP] = aD.data.botDifficultyTeam[bf.kV[bf.ej[hd]]];
				else if (1 === aD.data.botDifficultyType) {
			var kW = this.kJ.length;
			for (aB = aD.kU - 1; 0 <= aB; aB--) this.hU[aB + kP] = aB % kW
		} else
			for (kW = aD.data.botDifficultyValue, aB = aD.kU - 1; 0 <= aB; aB--) this.hU[aB + kP] = kW;
		else
			for (var kT = 8 === aD.kQ ? 1 : 0, aB = aD.kU - 1; 0 <= aB; aB--) this.hU[aB + kP] = kT;
		for (aB = 0; aB < kP; aB++) this.hU[aB] = 6;
		var el = aD.ei;
		for (aB = 0; aB < el; aB++) this.hU[aB] <= 2 ? (kG[aB] = 5, kH[aB] = kI[aB] = 1040, 0 === this.hU[aB] ? (kE[aB] = 980, kF[aB] = 980) : 1 === this.hU[aB] ? (kE[aB] = 980, kF[aB] = 920, kH[aB] = kI[aB] = 1100) : (kE[aB] = 825, kF[aB] =
			750)) : this.hU[aB] <= 4 ? (kG[aB] = 1 + ax.jQ(20), 3 === this.hU[aB] ? (kE[aB] = kF[aB] = 500, kH[aB] = kI[aB] = 1e3) : (kI[aB] = 250 + ax.jQ(1501), kH[aB] = 500 + ax.jQ(501), kE[aB] = 300 + ax.jQ(201), kF[aB] = 100 + ax.jQ(
			201))) : this.hU[aB] <= 5 ? (kH[aB] = 1e3, kI[aB] = 1e3, kG[aB] = 35 + ax.jQ(16), kE[aB] = 300 + ax.jQ(201), kF[aB] = 50 + ax.jQ(101)) : (kH[aB] = kI[aB] = 800, kG[aB] = 5, kE[aB] = 10, kF[aB] = 250), kX(aB)
	}, this.kR = function() {
		for (var eP = ay.kY, kP = aD.k8, aB = eP - 1; 0 <= aB; aB--) this.hU[aB + kP] = 0;
		for (var f5 = 0; f5 < 6; f5++) {
			for (aB = eP + ay.kZ[f5] - 1; eP <= aB; aB--) this.hU[aB + kP] = f5;
			eP += ay.kZ[f5]
		}
	}, this.ju = function(gJ, value) {
		kD[gJ] = Math.min(value, kD[gJ])
	}, this.j1 = function(gJ) {
		0 == --kD[gJ] && ! function(gJ) {
			(function(gJ) {
				kH[gJ] !== kI[gJ] && (kH[gJ] += kH[gJ] < kI[gJ] ? 3 : -3);
				kE[gJ] !== kF[gJ] && (kE[gJ] += kE[gJ] < kF[gJ] ? kG[gJ] : -kG[gJ], kE[gJ] = (Math.abs(kE[gJ] - kF[gJ]) <= kG[gJ] ? kF : kE)[gJ]);
				kD[gJ] = bK.ds(kH[gJ], 10)
			})(gJ), an.it.jl(gJ, bK.ds(kE[gJ] * ag.gn[gJ], 1e3))
		}(gJ)
	}, this.kc = function(gJ, gE) {
		kH[gJ] = kI[gJ] = gE
	}
}

function ip() {
	var kd = new Uint16Array(aD.ei);

	function kq(player, ko) {
		for (var el = bN.fG[0], fO = bN.fO, l2 = -1, l3 = aD.ei, aB = 0; aB < el; aB++) {
			var f1, gJ = fO[aB];
			br.ee(player, gJ) && (f1 = bL.iE(ko, bL.ia(gJ)), -1 === l2 || f1 < l2) && (l2 = f1, l3 = gJ)
		}
		return l3
	}

	function ks(kp, ko) {
		if (kp === aD.ei) return 0;
		var gS = ag.gS[kp],
			l1 = gS.length;
		if (0 === l1) return 0;
		for (var el = Math.min(l1, 10), l3 = 0, l2 = bL.iE(gS[l3] >> 2, ko), aB = 0; aB < el; aB++) {
			var hd = ax.jQ(l1),
				f1 = bL.iE(gS[hd] >> 2, ko);
			f1 < l2 && (l2 = f1, l3 = hd)
		}
		return gS[l3] >> 2
	}

	function kx(player, ko, jI, l5) {
		var l6;
		(l5 === aD.ei || (l6 = bL.ia(jI), l5 = bL.ia(l5), bL.iE(ko, l6) < bL.iE(ko, l5))) && (kd[player] = jI)
	}
	this.db = function() {
		kd.fill(aD.ei)
	}, this.j2 = function() {
		if (be.k5() % 109 == 9 && !(al.k9 < 20) && aD.hf && !(bg.ke() < bK.ds(8 * aD.js, 10))) {
			var kf = bg.kg();
			if (bf.kV[kf]) {
				bg.kh(kf);
				var el = bN.fG[0];
				if (0 !== el)
					for (var g = bN.fP, kA = al.kA, k9 = al.k9, ki = kd, hd = ax.jQ(el), aB = 0; aB < k9; aB++) {
						var hD = kA[aB],
							kj = g[hd];
						b9.g7.kk(hD, kj) && 512 === ki[hD] && (ki[hD] = kj, hd = (hd + 1) % el)
					}
			}
		}
	}, this.j1 = function(player) {
		var ko, kr, kp, kl = function(player) {
			var jI = kd[player];
			if (jI !== aD.ei) {
				if (b9.g7.l4(jI) && ag.gS[jI]) return jI;
				kd[player] = aD.ei
			}
			return aD.ei
		}(player);
		return function(player) {
			for (var l0 = al.kA, l1 = al.k9, el = Math.min(l1, l1 < 17 && 5 === ax.jQ(20) ? 1 : 16), gK = ax.jQ(l1), fO = bN.fO, gS = ag.gS, gE = 0, aB = 0; aB < el; aB++) {
				var gJ = l0[(aB + gK) % l1];
				gJ !== player && gS[gJ].length && (fO[gE++] = gJ)
			}
			bN.fG[0] = gE
		}(player), 0 !== bN.fG[0] && (0 < (kr = ks(kp = kq(player, ko = bL.ih(player)), ko)) && bM.kt.ku(player, bM.kv.kw(kr, ko)) ? (kx(player, ko, kp, kl), !0) : 0 < (kp = function(player, ko) {
			for (var el = bN.fG[0], fO = bN.fO, ki = kd, gK = 0, aB = 0; aB < el; aB++) {
				var gJ = fO[aB],
					gJ = ki[gJ];
				gJ !== aD.ei && b9.g7.l4(gJ) && player !== gJ && br.ee(player, gJ) && (fO[gK++] = gJ)
			}
			return 0 !== (bN.fG[0] = gK) ? ks(kq(player, ko), ko) : 0
		}(player, ko)) && bM.kt.ku(player, bM.kv.kw(kp, ko)) ? (kx(player, ko, ac.ed(kp << 2), kl), !0) : !!(0 < (kr = ks(kl, ko)) && bM.kt.ku(player, bM.kv.kw(kr, ko))))
	}
}

function iw() {
	function lA(player) {
		for (var fB = ag.fB[player], el = fB.length, fC = Math.max(bK.ds(el, 12), 1), en = ac.en, e5 = ax.jQ(el), aB = 0; aB < el; aB += fC)
			for (var ea = fB[(aB + e5) % el], eo = 3; 0 <= eo; eo--) {
				var ep = ea + en[eo];
				if (ac.eq(ep)) return {
					eP: ep,
					id: ac.eT(ep),
					gJ: player
				}
			}
		return null
	}

	function lF(player, lH) {
		var hU = b9.g7.lI(player, aE.kN[aE.hU[player]]);
		ag.gD[player].push(lH.eP), ad.jF(player, hU, lH.gJ), aF.jG(player, !0)
	}
	this.j1 = function(player) {
		return !!bR.eQ(bR.eR) && !!aD.data.passableMountains && 0 !== ag.fB[player].length && function(player) {
			var l9 = lA(player);
			if (null === l9) return !1;
			! function(player) {
				for (var kA = al.kA, k9 = al.k9, el = Math.min(k9, 12), gK = ax.jQ(k9), fO = bN.fO, fB = ag.fB, gE = 0, aB = 0; aB < el; aB++) {
					var gJ = kA[(aB + gK) % k9];
					gJ !== player && fB[gJ].length && br.ee(player, gJ) && (fO[gE++] = gJ)
				}
				bN.fG[0] = gE
			}(player);
			var lC = function(eS) {
				for (var el = bN.fG[0], fO = bN.fO, aB = 0; aB < el; aB++) {
					var lH = lA(fO[aB]);
					if (null !== lH && lH.id === eS) return lH
				}
				return null
			}(l9.id);
			return null !== lC ? (lF(player, lC), !0) : function(player, eS) {
				var el = an.ij.lG;
				if (0 !== el)
					for (var eP = an.ij.eI[ax.jQ(el)] << 2, en = ac.en, eo = ax.jQ(4);;) {
						if (eP += en[eo], ac.eq(eP)) {
							if (ac.eT(eP) === eS) return lF(player, {
								eP: eP,
								gJ: aD.ei
							}), !0;
							break
						}
						if (!ac.ec(eP)) break
					}
				return !1
			}(player, l9.id)
		}(player)
	}
}

function im() {
	this.j1 = function(player) {
		return bM.kt.ku(player, function(player) {
			var el = an.ij.lG;
			if (0 === el) return -1;
			for (var l1 = Math.min(el, an.performance.lK ? el : 10), eI = an.ij.eI, jP = bK.ds(ax.random() * el, ax.value(100)), e = jP + l1, lL = ax.ii(ag.ib[player], ag.ic[player]), lM = ax.ii(ag.ie[player], ag.ig[player]), l3 = -1,
					f1 = bL.iF(0, 0, bR.ew, bR.ex), aB = jP; aB < e; aB++) {
				var gK = aB % el,
					lN = bL.f3(lL, lM, eI[gK]);
				lN < f1 && (f1 = lN, l3 = gK)
			}
			return -1 !== l3 ? function(eX, lL, lM) {
				var h0 = bL.et(eX),
					h2 = bL.ev(eX),
					i5 = lL - h0,
					i8 = lM - h2;
				Math.abs(i5) >= Math.abs(i8) ? (i8 = 0, i5 = Math.sign(i5)) : (i5 = 0, i8 = Math.sign(i8));
				i5 === i8 && (i5 = 1);
				for (;;) {
					if (h0 += i5, h2 += i8, !bL.f8(h0, h2)) break;
					if (eX = bL.f9(h0, h2), ac.hz(bL.eb(eX))) return eX
				}
				return -1
			}(eI[l3], lL, lM) : -1
		}(player))
	}
}

function iy() {
	this.j1 = function(player) {
		var lP = function(player) {
			for (var lS = bM.lS.lU(), el = lS.length, l1 = Math.min(el, 32), hd = ax.jQ(el), aB = 0; aB < l1; aB++) {
				var lP = (aB + hd) % el,
					lR = lS[lP],
					iC = lR[0],
					iD = lR[lR.length - 1];
				if (bM.kv.lV(player, iC) && bM.kv.lW(player, iD)) return lP;
				if (bM.kv.lV(player, iD) && bM.kv.lW(player, iC)) return 0 <= (lP = bM.lS.lX(iD, iC)) ? lP : bM.lS.lY() ? -1 : bM.lS.lZ(bM.lS.la(lR))
			}
			return -1
		}(player);
		return -1 !== lP && (lP = bM.lS.get(lP), !bM.kv.lT(player, lP)) && (bN.g[0] = lP, !0)
	}
}

function iq() {
	this.lK = 0, this.db = function() {
		this.lK = 0
	}, this.j1 = function() {
		if (!this.lK && be.k5() % 30 == 7 && b9.g7.ld(80) && (an.performance.lK = 1)) {
			if (aD.hf) {
				var kf = bg.kg();
				if (bf.kV[kf]) {
					bg.lg(kf);
					var g = bN.fP,
						el = bN.fG[0];
					if (0 !== el)
						for (var lh = Math.min(100 + 10 * (el - 1), 400), aB = 0; aB < el; aB++) aE.kc(g[aB], lh)
				}
			}
			aE.kc(li[0], 100)
		}
	}
}

function ik() {
	var lj = 0,
		lk = 0,
		ll = 300,
		lm = 300,
		ln = 0;
	this.lG = 0, this.eI = new Uint32Array(512), this.db = function() {
		lk = lj = 0, this.lG = 0, ln = 0
	}, this.j1 = function() {
		if (function() {
				var el = an.ij.lG;
				if (0 === el) return 1;
				var eI = an.ij.eI;
				if (be.k5() % 35 == 6) {
					for (var aB = el - 1; 0 <= aB; aB--) ac.ec(eI[aB] << 2) || (el--, eI[aB] = eI[el]);
					an.ij.lG = el
				}
				return el < eI.length
			}())
			if (ll <= lj) {
				var lr = an.ij.lG;
				if (lr) {
					if (be.k5() % 350 != 1) return;
					if (ln !== lr) return void(ln = lr);
					if (!b9.g7.jW(li[0])) return
				} else if (be.k5() % 12 != 8) return;
				b9.g7.ls() || an.ij.db()
			} else {
				var aB, i = bR.ew,
					lt = i - 2,
					lr = lt * (bR.ex - 2),
					lu = ll,
					eI = an.ij.eI,
					l1 = an.ij.lG,
					lv = eI.length,
					gK = Math.min(lk + lu * ((1 + 19 * an.performance.lK) * lm), lr);
				for (aB = lk; aB < gK; aB += lu) {
					var eP = 4 * (aB % lt + (bK.ds(aB, lt) + 1) * i + 1);
					if (ac.ec(eP) && (eI[l1] = eP >> 2, ++l1 === lv)) {
						aB += lu;
						break
					}
				}(lk = aB) >= lr && (lk = ++lj), an.ij.lG = l1
			}
	}
}

function j0() {
	this.j1 = function() {
		if (be.k5() % 51 == 45)
			for (var el = bM.y.lx, ly = bM.y.ly, lz = bM.y.lz, m0 = bM.y.m0, m1 = bM.y.m1, kO = aE.kO, hU = aE.hU, aB = 0; aB < el; aB++) {
				var lR, player, m5, m2 = ly[aB];
				m2 % 64 == 6 || (lR = lz[aB], (player = bM.kv.m3(lR[lR.length - 1])) < 0) || !b9.g7.kk(player, m1[aB] >> 3) || ax.jQ(1e3) >= kO[hU[player]] || ! function(m9, lR) {
					for (var el = lR.length - 1, mA = bM.y.mB[m9], f1 = 0, aB = mA + 1; aB < el; aB++) f1 += bL.iB(lR[aB], lR[aB + 1]);
					return (f1 += bL.iB(bL.iT(bM.y.mC[m9]), lR[mA + 1])) <= 60
				}(aB, lR) || (m5 = m0[aB], 64 <= m2 && bM.m6.m7(player, m5)) || function(player, lR, m5, m9, m2) {
					bM.mD.mE(player) && b9.g7.mF(player, aE.kK[aE.hU[player]], 32, 0) && (bM.y.ly[m9] = 64 + m2 % 64, bM.m6.jF(m5, bM.y.mG), bN.g[0] = bM.lS.la(lR), bN.fN[1] = 6, b9.g7.mH(player), bM.y.mI(player))
				}(player, lR, m5, aB, m2)
			}
	}
}

function mJ() {
	aN.j1(), af.j1(), aW.mK(), az.y.j1()
}

function mL() {
	b0.j1(), aG.j1(), ae.j1(), b3.j1(), aF.j1(), an.j1(), bM.y.j1(), al.mM(), aV.j1(), ay.j1(), bU.j1(), af.j1(), af.mN(), aW.j1(), bO.j1(), aU.j1(), aP.j1(), aN.j1(), b4.j1(), aR.j1(), av.j1(), bc.j1(), bg.j1(), az.y.j1(), az.mO.j1(), t.j1(), b8
	.j1(), be.j1()
}

function mP() {
	aH.j1(), aX.j1(), aQ.j1(), au.j1(), bB.j1(), aw.mQ()
}

function mR() {
	aV.mS(!1), aP.mS(), aW.mS(!1), aU.mS(), aR.mS(), av.mS(), af.mS(!1), bg.mT()
}

function mU() {
	af.mS(!1) && (be.dj = !0), az.y.j1()
}

function c5() {
	var mV, mW, mX;

	function mZ(mb) {
		for (var aB = mV - 1; 0 <= aB; aB--) 0 === mX[mW[aB]] && ag.gZ[mW[aB]] >= mb && fp(mW[aB])
	}

	function mY(player) {
		var dr;
		64 === mX[player] ? mX[player] = 6 : (dr = ag.gZ[player], mX[player] = dr < 1e3 ? 3 : dr < 1e4 ? 2 : dr < 6e4 ? 1 : 0)
	}
	this.db = function() {
		mV = 0, mW = new Uint16Array(aD.ei), mX = new Uint8Array(aD.ei)
	}, this.j1 = function() {
		for (var aB = mV - 1; 0 <= aB; aB--) 64 === mX[mW[aB]] ? mY(mW[aB]) : 0 == mX[mW[aB]]-- && (mY(mW[aB]), fp(mW[aB]));
		16e4 <= ag.gZ[li[0]] && (mZ(16e4), 3e5 <= ag.gZ[li[0]]) && mZ(3e5), b9.g7.l4(aD.eV) && (bc.mc[7] = Math.max(ag.gZ[aD.eV], bc.mc[7]))
	}, this.g9 = function(player) {
		for (var f4, aB = mV - 1; 0 <= aB; aB--)
			if (player === mW[aB]) {
				for (mV--, f4 = aB; f4 < mV; f4++) mW[f4] = mW[f4 + 1];
				return
			}
	}, this.jG = function(player, md) {
		for (var aB = mV - 1; 0 <= aB; aB--)
			if (player === mW[aB]) return;
		mW[mV++] = player, mX[player] = md ? 2 : 64
	}
}

function c6() {
	var size, jw;
	this.db = function() {
		size = aD.kU, jw = new Uint16Array(aD.ei);
		for (var k8 = aD.k8, aB = aD.kU - 1; 0 <= aB; aB--) jw[aB] = k8 + aB
	}, this.j1 = function() {
		an.iz.j1();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.mg[jw[aB]]) {
				f4 = void 0;
				var f4 = aB;
				size--, jw[f4] = jw[size]
			} else aE.j1(jw[aB])
	}, this.mf = function(gJ) {
		jw[size++] = gJ
	}
}

function c7() {
	var mi, mj, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv = !1,
		mw = !1;

	function mx(eD) {
		mt = be.eK, mk = ml = mj = 0, mm = (mu = 33) / eD, mi = 1 / (eD / mu / 4), mn = (h.i / 2 + iM) / hw, mo = (h.j / 2 + iN) / hw, mp = hw
	}

	function n4(aB) {
		var n6; - 1 !== aB && (aB = bL.iT(bM.y.mC[aB]), n6 = bL.et(aB) - 10, aB = bL.ev(aB) - 10, aH.n0(n6, aB, 19 + n6, 19 + aB))
	}

	function nH(eA) {
		Math.abs(Math.log(ms / mp)) < .125 && (ms = eA * mp)
	}

	function nG(n6, n7, nJ, nK) {
		mq = (n6 + nJ + 1) / 2, mr = (n7 + nK + 1) / 2;
		nJ = h.i / (nJ - n6 + 1), n6 = h.j / (nK - n7 + 1);
		ms = .9 * (nJ < n6 ? nJ : n6)
	}
	this.my = function() {
		return mv
	}, this.mz = function() {
		mx(1), this.n0(0, 0, bR.ew - 1, bR.ex - 1), aD.h9 || aD.gu || this.n1(aD.eV, 3e3, !0, .3)
	}, this.n2 = function(player, n3) {
		n4(bM.kv.n5(player, n3))
	}, this.n1 = function(player, eD, n8, zoom) {
		aD.n9 || mv && !n8 && mw || (0 === ag.gZ[player] ? n4(bM.kv.nA(player)) : (aS.nB = !1, mw = n8, mx(eD), function(player) {
			mq = (ag.ib[player] + ag.ic[player] + 1) / 2, mr = (ag.ie[player] + ag.ig[player] + 1) / 2
		}(player), function(zoom, player) {
			var i5 = ag.ic[player] - ag.ib[player] + 1,
				player = ag.ig[player] - ag.ie[player] + 1,
				f4 = h.i / i5,
				f5 = h.j / player,
				f4 = (ms = f4 < f5 ? f4 : f5, 0 !== zoom ? zoom : i5 < 20 && player < 20 ? .5 : .9);
			ms *= f4, nH(7 / 8)
		}(zoom, player), mv = !0, aq.nE()))
	}, this.nF = function(eD) {
		aD.gu || aD.n9 || (aS.nB = !1, mw = !1, mx(eD), nG(0, 0, bR.ew - 1, bR.ex - 1), nH(7 / 8), mv = !0, aq.nE())
	}, this.n0 = function(n6, n7, nJ, nK) {
		nG(n6, n7, nJ, nK), hw = ms, aS.nL(mq, h.i / 2), aS.nM(mr, h.j / 2), bZ.nN(), be.dj = !0
	}, this.nO = function() {
		return !(mv && mw || (mv = !1))
	}, this.j1 = function() {
		var nR, nS, eo, nV;
		mv && (mj < .5 ? ml < mm && (ml += mm * mi, mk = mj) : 1 - mk < mj && (ml = (ml -= mm * mi) < mm * mi ? mm * mi : ml), mt = mt >= be.eK ? be.eK - 1 : mt, eo = be.eK - mt, mj = 1e3 < eo || 1 < (mj += ml * eo / mu) ? 1 : mj, mt = be.eK,
			eo = hw, nR = iM, nS = iN, eo = (hw = mp * Math.pow(ms / mp, mj)) / eo, nV = 1 - (mp * Math.pow(ms / mp, 1 - mj) - mp) / (ms - mp), aS.nL(mn + nV * (mq - mn), h.i / 2), aS.nM(mo + nV * (mr - mo), h.j / 2), af.zoom(eo, (nR * eo -
				iM) / (1 - eo), (nS * eo - iN) / (1 - eo)), bZ.nN(), 1 <= mj && (mv = !1, ba.nW = !0), be.dj = !0)
	}
}

function bz() {
	var f6 = b9.color;
	this.nX = f6.nY(0, 0, 0), this.nZ = f6.na(0, 0, 0, .7), this.nb = f6.na(0, 0, 0, .5), this.nc = f6.na(0, 0, 0, .85), this.nd = f6.na(0, 0, 0, .75), this.ne = f6.na(0, 0, 0, .6), this.nf = f6.na(0, 0, 0, .35), this.ng = f6.nY(255, 255, 255), this
		.nh = f6.na(255, 255, 255, .3), this.ni = f6.na(255, 255, 255, .6), this.nj = f6.na(255, 255, 255, .4), this.nk = f6.na(255, 255, 255, .25), this.nl = f6.na(255, 255, 255, .85), this.nm = f6.na(255, 255, 255, .75), this.nn = f6.na(255, 255,
			255, .15), this.no = f6.na(255, 255, 255, .11), this.np = f6.nY(128, 128, 128), this.nq = f6.na(64, 64, 64, .75), this.nr = f6.na(88, 88, 88, .83), this.ns = f6.na(60, 60, 60, .85), this.nt = f6.na(80, 60, 60, .85), this.nu = f6.nY(170,
			170, 170), this.nv = f6.nY(200, 235, 245), this.nw = f6.nY(30, 255, 30), this.nx = f6.nY(0, 200, 0), this.ny = f6.nY(128, 255, 128), this.nz = f6.na(10, 65, 10, .75), this.o0 = f6.na(0, 255, 0, .6), this.o1 = f6.na(0, 255, 0, .5), this
		.o2 = f6.na(0, 200, 0, .5), this.o3 = f6.na(0, 100, 0, .75), this.o4 = f6.na(0, 60, 0, .8), this.o5 = f6.na(0, 255, 0, .3), this.o6 = f6.na(0, 180, 0, .6), this.o7 = f6.na(0, 120, 0, .85), this.o8 = f6.nY(0, 120, 0), this.o9 = f6.na(0, 70, 0,
			.85), this.oA = f6.nY(190, 230, 190), this.oB = f6.nY(0, 255, 0), this.oC = f6.nY(255, 120, 120), this.oD = f6.nY(255, 160, 160), this.oE = f6.nY(255, 70, 70), this.oF = f6.nY(230, 0, 0), this.oG = f6.na(220, 0, 0, .6), this.oH = f6.na(
			255, 100, 100, .8), this.oI = f6.na(100, 0, 0, .85), this.oJ = f6.na(60, 0, 0, .85), this.oK = f6.na(200, 0, 0, .6), this.oL = f6.na(120, 0, 0, .85), this.oM = f6.nY(255, 70, 10), this.oN = f6.nY(230, 190, 190), this.oO = f6.nY(255, 0,
		0), this.oP = f6.nY(255, 0, 255), this.oQ = f6.na(60, 0, 60, .85), this.oR = f6.na(0, 60, 60, .85), this.oS = f6.na(10, 60, 60, .9), this.oT = f6.na(0, 96, 96, .75), this.oU = f6.nY(0, 255, 255), this.oV = f6.nY(160, 160, 255), this.oW = f6
		.na(0, 40, 90, .75), this.oX = f6.na(0, 0, 255, .6), this.oY = f6.nY(200, 200, 255), this.oZ = f6.na(50, 50, 255, .83), this.oa = f6.nY(255, 120, 100), this.ob = f6.na(255, 255, 0, .5), this.oc = f6.na(255, 255, 150, .2), this.od = f6.nY(255,
			255, 0), this.oe = f6.nY(255, 255, 200), this.og = f6.na(200, 200, 0, .6), this.oh = f6.na(140, 120, 0, .75), this.oi = f6.na(180, 160, 40, .75), this.oj = f6.na(70, 50, 20, .85), this.ok = f6.na(30, 30, 0, .85), this.ol = f6.na(60, 60,
			0, .85), this.om = f6.na(255, 140, 0, .75), this.on = f6.na(70, 40, 0, .85), this.oo = f6.nY(220, 120, 0), this.op = f6.na(255, 200, 80, .85), this.oq = f6.nY(255, 150, 120), this.or = f6.na(0, 0, 0, 0), this.os = f6.na(255, 255, 255, 0),
		this.ot = f6.na(254, 254, 254, 0)
}

function cw() {
	this.hB = new ou, this.g7 = new ov, this.ow = new ox, this.oy = new oz, this.kB = new p0
}

function ou() {
	this.hC = function(eX) {
		aD.kS ? b7.ow.hC(aD.eV, eX) : az.p1.p2(eX)
	}, this.hI = function(iL, jI) {
		aD.kS ? b7.ow.hI(aD.eV, iL, jI) : az.p1.p3(iL, jI)
	}, this.p4 = function(iL, p5) {
		aD.kS ? b7.ow.p6(aD.eV, iL, p5) : az.p1.p7(iL, p5)
	}, this.hN = function(iL, eX) {
		eX = (eX << 3) + bN.fN[6];
		aD.kS ? b7.ow.hN(aD.eV, iL, eX) : bM.mD.mE(aD.eV) && az.p1.p9(iL, eX)
	}, this.hQ = function(iL) {
		849 === iL && (iL = 850);
		var n3 = bN.fN[3];
		aD.kS ? b7.ow.hQ(aD.eV, iL, n3) : bM.hO.pA(aD.eV, n3) && az.p1.pB(iL, n3)
	}, this.pC = function(n3) {
		aD.kS ? b7.ow.pC(aD.eV, n3) : az.p1.pB(849, n3)
	}, this.pD = function(jI) {
		aD.kS ? b7.ow.pD(aD.eV, jI) : az.p1.pE(jI)
	}, this.pF = function(pG) {
		aD.kS ? b7.ow.pH(aD.eV, pG) : az.p1.pI(pG)
	}, this.hZ = function(pJ) {
		aD.kS ? b7.ow.hZ(aD.eV, pJ) : az.p1.pK(pJ)
	}, this.pL = function() {
		aD.kS ? b7.ow.pL(aD.eV) : az.p1.pM()
	}, this.hW = function() {
		aD.kS ? b7.ow.hW(aD.eV) : az.p1.pE(513)
	}, this.hE = function(iL, eX, jI) {
		aD.kS ? b7.ow.hE(aD.eV, iL, eX, jI) : az.p1.pN(iL, eX, jI)
	}
}

function p0() {
	this.kC = function(player, p5, hU) {
		b9.g7.pO(player, hU, p5) && (ae.p4(player, p5), p5 < aD.k8) && ax.random() < ax.value(10) && (an.it.jD[p5] = 0)
	}, this.pP = function(player, p5, hU) {
		b9.g7.pQ(hU, p5) ? (b9.g7.gA(p5, bN.fI[0]), bc.pR(player, p5), af.pS(p5, bN.fI[0])) : bc.gB(player, hU, 12)
	}
}

function ov() {
	this.pT = function(pG, player) {
		aN.pF(aD.eV, player, pG), az.p1.pU(pG, player)
	}, this.pV = function(player) {
		aN.pW(player, 0), az.p1.pX(player)
	}, this.pY = function(pZ, player) {
		aN.pa(pZ, player), az.p1.pb(pZ, player)
	}, this.pc = function() {
		aD.kS || aD.gu || az.pd.pc()
	}
}

function oz() {
	this.j1 = function(aC) {
		var id, fU, nO;
		for (bG.db(aC), bG.e6 += 2, nO = 8 * bG.size; bG.e6 + 8 <= nO;) id = bG.pe(4), fU = bG.pe(9), 0 === id ? this.pf(id, fU, bG.pe(22)) : 1 === id ? this.pf(id, fU, bG.pe(10), bG.pe(10)) : 2 === id ? this.pf(id, fU, bG.pe(10), bG.pe(9)) :
			3 === id ? this.pf(id, fU, bG.pe(10), bG.pe(27)) : 4 === id ? this.pf(id, fU, bG.pe(10), bG.pe(16)) : 5 === id || 6 === id ? this.pf(id, fU, bG.pe(10)) : 7 === id ? this.pf(id, fU, bG.pe(1)) : 10 === id ? this.pf(id, fU, bG.pe(20), bG
				.pe(22)) : this.pf(id, fU)
	}, this.pg = [], this.ph = function() {
		for (var pj = 0, pk = 0, pl = 0, pm = 0, pn = 0, po = 0, aB = 0; aB < 512; aB++) pj += ag.mg[aB], pk += ag.gZ[aB], pl += ag.gn[aB], pm += bM.y.pp[aB];
		pn += bM.y.lx, po += al.k9, this.pg.push(pl % 1073741824 * 4 + (pj + pk + pm + pn + po) % 4)
	}, this.pf = function(id, fU, fW, fY) {
		0 === id ? b7.ow.hC(fU, fW) : 1 === id ? b7.ow.hI(fU, fW, fY) : 2 === id ? b7.ow.p6(fU, fW, fY) : 3 === id ? b7.ow.hN(fU, fW, fY) : 4 === id ? b7.ow.hQ(fU, fW, fY) : 5 === id ? b7.ow.pD(fU, fW) : 6 === id ? b7.ow.pH(fU, fW) : 7 === id ?
			b7.ow.hZ(fU, fW) : 8 === id ? b7.ow.pL(fU) : 9 === id ? b7.ow.pq(fU) : 10 === id && b7.ow.hE(fU, fW >> 10, fY, fW % 1024)
	}
}

function ox() {
	this.hC = function(player, eX) {
		b9.g7.gw(0) && b9.g7.gx(player) && bL.iQ(eX) && (b8.pr.ps(0, player, eX), aD.pt.jF(player, eX))
	}, this.hI = function(player, iL, jI) {
		b9.g7.gw(1) && b9.g7.gx(player) && b9.g7.pu(player, jI) && b9.g7.mF(player, iL, 12, 0) && b9.g7.pv(player, jI) && ((jI = ad.jU(player, bN.eh[0])) || ad.jm(player)) && (ag.pw[player]++, b8.pr.ps(1, player, iL, bN.eh[0]), an.ir.j6(player,
			jI)) && (b9.g7.mH(player), bc.px(player, iL), an.ir.jC(player))
	}, this.p6 = function(player, iL, p5) {
		b9.g7.gw(1) && b9.g7.gx(player) && aD.hf && b9.g7.pu(player, p5) && b9.g7.py(player, p5) && b9.g7.pO(player, b9.g7.iK(player, iL), p5) && (b8.pr.ps(2, player, iL, p5), ae.p4(player, p5))
	}, this.hN = function(player, iL, p8) {
		bN.fN[1] = 7 & p8;
		var eX = p8 >> 3;
		b9.g7.gw(1) && b9.g7.gx(player) && bL.iQ(eX) && bM.mD.mE(player) && bM.mD.pz(eX) && b9.g7.mF(player, iL, 32, 0) && bM.kt.q0(player, eX, 1) && (bc.q1(player), b8.pr.ps(3, player, iL, p8), b9.g7.mH(player), bk.q2.hN(player), bM.y.mI(
			player))
	}, this.hQ = function(player, iL, n3) {
		849 === iL ? this.pC(player, n3) : b9.g7.gw(1) && b9.g7.gx(player) && b9.g7.mF(player, iL, 32, 0) && bM.hO.q3(player, n3) && (bc.q1(player), b8.pr.ps(4, player, iL, n3), b9.g7.mH(player), bk.q2.hQ(player), bM.y.mI(player))
	}, this.pC = function(player, n3) {
		b9.g7.gw(1) && b9.g7.gx(player) && bM.q4.j1(player, n3) && b8.pr.ps(4, player, 849, n3)
	}, this.pD = function(player, jI) {
		513 === jI ? this.hW(player) : b9.g7.gw(1) && b9.g7.gx(player) && (jI = Math.min(jI, aD.ei), ad.jU(player, jI)) && (b8.pr.ps(5, player, jI), ad.q5(player, jI))
	}, this.pH = function(player, pG) {
		(b9.g7.gw(1) || b9.g7.gw(2)) && b9.g7.gx(player) && (pG = bK.ht(pG, 0, 1023), b8.pr.ps(6, player, pG), af.q6(player, 0, pG))
	}, this.hZ = function(player, pJ) {
		av.hY(player) && (b8.pr.ps(7, player, pJ), av.q7(player, pJ))
	}, this.pL = function(player) {
		(b9.g7.gw(0) || b9.g7.gw(1)) && b9.g7.gx(player) && aM.q8(player) && (b8.pr.ps(8, player), bP.pL(player))
	}, this.pq = function(player) {
		b8.pr.ps(9, player), bP.pq(player)
	}, this.hW = function(player) {
		av.ha(player) && (b8.pr.ps(5, player, 513), av.hW(player))
	}, this.hE = function(player, iL, eX, jI) {
		b9.g7.gw(1) && b9.g7.gx(player) && b9.g7.pu(player, jI) && b9.g7.pv(player, jI) && bL.iQ(eX) && am.eM.ef(player, eX) && (ad.jU(player, bN.eh[0]) || ad.jm(player)) && (b8.pr.ps(10, player, (iL << 10) + bN.eh[0], eX), jI = b9.g7.lI(player,
			iL), ag.gD[player].push(bN.em[0]), ad.jF(player, jI, bN.eh[0]), aF.jG(player, !0), bc.q9(player))
	}
}

function qA() {
	var qC;
	this.qB = [], this.qC = document.createElement("div"), this.qD = function(qE, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qE, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.qC.appendChild(
			title), title
	}, this.qF = function(qE, marginBottom) {
		var qG = document.createElement("p");
		return qG.textContent = qE, qG.style.fontSize = "0.75em", qG.style.lineHeight = "1.2em", qG.style.marginBottom = marginBottom || "0", this.qC.appendChild(qG), qG
	}, this.qH = function(qE) {
		var qI = document.createElement("p");
		return qI.textContent = qE, qI.style.fontSize = "1em", qI.style.marginBottom = "0", qI.style.whiteSpace = "pre-wrap", qI.style.overflowWrap = "break-word", this.qC.appendChild(qI), qI
	}, this.qJ = function(qK, fontSize) {
		var qC = document.createElement("div");
		return qC.innerHTML = qK, qC.style.fontSize = fontSize || "1em", qC.style.lineHeight = "1.2em", this.qC.appendChild(qC), qC
	}, this.qL = function(qM) {
		for (var qN = qM.qN, el = qN.length, aB = 0; aB < el; aB++) this.qC.appendChild(qN[aB])
	}, this.qO = function(qP) {
		return this.qB.push(qP), this.qC.appendChild(qP.e), qP
	}, this.resize = function() {
		for (var el = this.qB.length, aB = 0; aB < el; aB++) this.qB[aB].resize && this.qB[aB].resize()
	}, (qC = this.qC).style.position = "absolute", qC.style.height = "auto", qC.style.padding = "0.5em"
}

function qQ(qR, qS) {
	var qC = document.createElement("div");

	function qa() {
		var aB, qb, j, gK, eo, qW = h.k * qC.offsetWidth,
			qc = new Float64Array(function(qW) {
				var i = .25 * b9.qX.qY(.6) * h.hv;
				return Math.max(Math.floor(qW / i), 1)
			}(qW)),
			qd = bb.qd,
			qe = (qW - (qc.length + 1) * bb.gap) / (qc.length * h.k);
		for (qc.fill(qd), aB = 0; aB < qS.length; aB++) qb = (eo = qS[aB].qC).style, j = b9.qf.min(qc), gK = qc.indexOf(j), qb.top = b9.qX.qg(j), qb.left = b9.qX.qg(qd + gK * (qe + qd)), qb.width = b9.qX.qg(qe), b9.qX.qh(eo, 5), qc[gK] += eo
			.offsetHeight + 3 * qd;
		qC.style.height = b9.qX.qg(b9.qf.max(qc) - 2 * qd)
	}
	this.qT = qC, this.qU = qS, this.resize = function() {
		var aB;
		for (aB = 0; aB < qS.length; aB++) qS[aB].resize();
		qa(), qa()
	}, qC.style.width = "100%", qC.style.maxWidth = "100%", qR.style.lineHeight = "1.5em", qR.style.overflowX = "hidden", qR.style.overflowY = "auto";
	for (var aB = 0; aB < qS.length; aB++) qC.appendChild(qS[aB].qC);
	qR.appendChild(qC)
}

function w(qi, qj, qk, ql, qm) {
	var self, qn = document.createElement("button");

	function qu() {
		var r0;
		bI.qz() || (r0 = b9.color.r1(qk), !1 !== ql && 0 < r0[0] && r0[0] < 255 && r0[0] === r0[1] && r0[0] === r0[2]) || (qn.style.backgroundColor = b9.color.r2(qk, r0[3] && r0[3] < 120 ? 150 : 50))
	}

	function qt() {
		if (ql) {
			var r0 = b9.color.r1(qk);
			if (r0[0] === r0[1] && r0[0] === r0[2]) return
		}
		qj && ((r0 = qj(this)) ? 2 === r0 && qu() : r4(this))
	}

	function qw() {
		this.style.backgroundColor = qk
	}

	function qv() {
		r4(this)
	}

	function r4(eo) {
		eo.style.backgroundColor = qk, eo.blur()
	}
	this.button = qn, this.qo = qj, this.qp = qk, this.qs = function(qx) {
		qx = 1.1 - Math.min(.01 * qi.length, .6) + .2 * qx;
		qn.style.fontSize = qx.toFixed(1) + "em"
	}, this.qr = function(f6) {
		f6 ? 1 === f6 ? f6 = bA.ns : 2 === f6 && (ql = 1, f6 = bA.ns) : (ql = 0, f6 = bA.nc), this.qp = qk = f6, qn.style.backgroundColor = f6
	}, self = this, qn.innerHTML = qi, qn.style.color = qm ? bA.od : bA.ng, qn.style.userSelect = "none", qn.style.outline = "none", qn.style.overflowWrap = "break-word", self.qr(qk), qn.style.border = "none", qn.style.font = "inherit", self.qs(
		0), qn.style.padding = "0em 0.3em", qn.onclick = qt, qn.addEventListener("mouseover", qu), qn.addEventListener("mouseout", qv), qn.addEventListener("focus", qu), qn.addEventListener("blur", qw)
}

function r5(r6, qR) {
	var qC;
	this.resize = function() {
		for (var aB = 0; aB < r6.length; aB++) b9.qX.qh(r6[aB].button);
		qC.style.gap = qC.style.padding = b9.qX.qg(bb.qd)
	}, (qC = document.createElement("div")).style.display = "grid", qC.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qC.style.overflowY = "auto", qC.style.gridAutoRows = "5.3em", qC.style.maxHeight = "100%";
	for (var aB = 0; aB < r6.length; aB++) r6[aB].qs(1), qC.appendChild(r6[aB].button);
	qR.appendChild(qC)
}

function r8(r9, rA, rB) {
	this.es = 0, this.eu = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b9.qX.qY(rB || .5) * r9[1] * h.hv, h.j - 2 * bb.gap), this.i = Math.min(this.j * (r9[0] / r9[1]), h.i - 2 * bb.gap), this.j = r9[1] * this.i / r9[0], this.es = bb.gap + rA[0] * (h.i - this.i - 2 * bb.gap), this.eu = bb
			.gap + rA[1] * (h.j - this.j - 2 * bb.gap)
	}, this.rC = function() {
		return this.es + .5 * this.i
	}
}

function rD(rE, rF) {
	var rO, self, rG = document.createElement("div"),
		rH = document.createElement("div"),
		rI = document.createElement("div"),
		rJ = null,
		rP = (this.rK = new rL({
			value: "",
			e6: -1
		}, 0, rM, function(e) {
			e.target.value = b9.rW.rX(e.target.value), rJ.rV.textContent = 127 - e.target.value.length
		}), 0),
		rQ = 1,
		rR = 0,
		rS = 1048575;

	function rM() {
		rE(), rJ.rV.textContent = 127
	}

	function rh(rg, qP) {
		qP && (qP.rm = 1, rg.appendChild(bm.rn.transform(qP)))
	}

	function rk(bt) {
		rQ ? rG.scrollTop = rG.scrollHeight : bt && (rG.scrollTop = rR)
	}
	this.rY = function(rZ) {
			rS = 1048575, rH.textContent = "", rZ || this.mT()
		}, this.mT = function() {
			var ra = bm.y.rb[0],
				ra = bm.y.rd[ra],
				re = ra.re,
				el = re.length,
				jP = 1048575 === rS ? 0 : el - (ra.rf - rS + 1048575) % 1048575;
			if (rS = ra.rf, !(el <= (jP = Math.max(jP, 0)))) {
				for (var rg = document.createDocumentFragment(), aB = jP; aB < el; aB++) rh(rg, bm.kv.ri(re[aB], bm.kv.rj(re[aB])));
				rH.appendChild(rg), rk()
			}
		}, this.rl = function(r) {
			var rg = document.createDocumentFragment();
			rh(rg, r), rH.appendChild(rg), rk()
		}, this.show = function(qR) {
			qR.appendChild(rG), qR.appendChild(rI), this.resize(qR)
		}, this.ro = function(qR) {
			qR.removeChild(rG), qR.removeChild(rI)
		}, this.resize = function(qR) {
			rP = qR ? qR.offsetHeight : rP;
			var qR = b9.qX.rq(.04, .75),
				rr = Math.max(qR, rP - qR),
				rs = h.i / h.k,
				rt = .7 * rs,
				rr = (rI.style.top = b9.qX.qg(rP - qR), rI.style.height = b9.qX.qg(qR), rG.style.top = b9.qX.qg(rP - qR - rr), rG.style.height = b9.qX.qg(rr), b9.qX.qh(rG, 2), this.rK.e.style.width = b9.qX.qg(rt), this.rK.e.style.fontSize = rO.button
					.style.fontSize = b9.qX.qg(.5 * qR), b9.qX.qh(this.rK.e, 6), rO.button.style.left = b9.qX.qg(rt), rO.button.style.width = b9.qX.qg(rs - rt), .385 * qR);
			a0.a1.hu() && (rr *= .8 - .12 * (h.i > h.j)), rH.style.marginLeft = rH.style.marginRight = b9.qX.qg(.5 * rr), rH.style.fontSize = b9.qX.qg(rr), rk(1)
		}, (self = this).rK.e.rT = 127, rG.style.position = "absolute", rG.style.top = "0", rG.style.left = "0", rG.style.width = "100%", rG.style.overflowX = "hidden", rG.style.overflowY = "auto", rG.style.font = "inherit", rG.style
		.backgroundColor = bA.ne, rG.addEventListener("scroll", function() {
			rR = rG.scrollTop, rQ = rR < rG.scrollHeight - rG.clientHeight - 2 ? 0 : 1
		}), rH.style.font = "inherit", rI.style.position = "absolute", rI.style.left = "0", rI.style.width = "100%", self.rK.e.setAttribute("placeholder", L(13)), self.rK.e.style.position = "absolute", self.rK.e.style.top = "0", self.rK.e.style
		.left = "0", self.rK.e.style.height = "100%", self.rK.e.style.backgroundColor = bA.nb, self.rK.e.style.textAlign = "center", (rO = new w(L(14), rM)).button.top = "0", rO.button.style.position = "absolute", rO.button.style.height = "100%", rO
		.qr(bA.os), rJ = new rU("127", rO.button, 1, 1), rG.appendChild(rH), rI.appendChild(self.rK.e), rI.appendChild(rO.button)
}

function rv(rw, qi, rx) {
	function click() {
		var value = 1 - rw.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qi, void 0 !== rw.e6 ? bi.ry.rz(rw.e6, value) : rw.value = value, rx && rx(value)
	}
	var e;
	qi = qi || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (rw.value ? "🟩 " : "⬜ ") + qi, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function s0(qR, qK) {
	var qC = document.createElement("div");
	this.qT = qC, this.resize = function() {
		qC.style.padding = b9.qX.qg(bb.qd), qC.style.lineHeight = b9.qX.qg(b9.qX.rq(.035))
	}, qR.style.overflowX = "hidden", qR.style.overflowY = "auto", qC.innerHTML = qK, qR.appendChild(qC)
}

function s1(s2) {
	var qC = document.createElement("div");
	this.e = qC, this.s3 = s2, this.resize = function() {
		for (var el = s2.length, aB = 1; aB < el; aB++) b9.qX.qh(s2[aB], 4)
	};
	var aB, el = s2.length;
	for (qC.style.width = "100%", qC.style.height = "2.7em", qC.style.marginTop = "0.6em", qC.style.border = "inherit", aB = 0; aB < el; aB++) s2[aB].style.verticalAlign = "top", s2[aB].style.width = (100 / el).toFixed(2) + "%", s2[aB].style.height =
		"100%", s2[aB].style.fontSize = "0.75em", qC.appendChild(s2[aB])
}

function s4(s5, qk, s6) {
	this.qC = document.createElement("div"), this.r6 = s5;
	var s7 = 0;
	this.resize = function(qR, s9) {
		var el = s5.length;
		if (!s6)
			for (var aB = 1; aB < el; aB++) b9.qX.qh(s5[aB].button, 4);
		for (var sA = 0, aB = 0; aB < el; aB++) sA += s5[aB].button.offsetWidth;
		if (qR && (s7 = qR.offsetWidth), s9 && sA < s7)
			for (aB = 0; aB < el; aB++) s5[aB].button.style.width = (100 * s5[aB].button.offsetWidth / sA).toFixed(2) + "%";
		else
			for (aB = 0; aB < el; aB++) s5[aB].button.style.width = "auto";
		s9 || this.resize(qR, 1)
	};
	var s8 = this;
	s8.qC.style.height = s8.qC.style.maxHeight = "100%";
	for (var aB = 0; aB < s5.length; aB++) s5[aB].qr(qk), s5[aB].button.style.height = "100%", s5[aB].button.style.padding = "0.0em 0.9em", s8.qC.appendChild(s5[aB].button)
}

function sB() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b9.qX.qh(this.e, 8, bA.np)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sC() {
	var sG, sH, sD = document.createElement("div"),
		sE = 0,
		sF = 0;
	this.show = function(es, eu, qE, sI, sJ) {
		if (sE) {
			if (!sI) return;
			this.ro()
		}
		es === eu && -1 === es ? (es = sG, eu = sH) : (sG = es, sH = eu), sJ || (sF = sI), sE = 1;
		sJ = h.i / h.k, sD.style.whiteSpace = "pre", sD.textContent = qE, b9.qX.qh(sD, 5), sD.style.font = b9.qX.sL(0, b9.qX.rq(.015)), sD.style.padding = "0.3em 0.6em", sD.style.left = es + "px", sD.style.top = "0px", document.body.appendChild(
			sD), sI = es + sD.offsetWidth - sJ;
		0 < sI && (sD.style.left = (qE = es - sI) + "px", qE < 5) && (sD.style.whiteSpace = "pre-wrap"), sD.style.top = eu - sD.offsetHeight + sF * bb.sN + "px"
	}, this.ro = function(sO) {
		if (sE) {
			if (sO && sF) return 0;
			sE = 0, document.body.removeChild(sD)
		}
		return 1
	}, sD.style.position = "absolute", sD.style.backgroundColor = bA.nc, sD.style.color = bA.ng, sD.style.pointerEvents = "none", sD.style.zIndex = "5", sD.style.maxWidth = "100%"
}

function rL(sP, type, sQ, sR) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sS++, e.value = sP.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bA.ng, e.style.backgroundColor = bA.nZ, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sT++
		}), e.addEventListener("blur", function() {
			h.sT--, -1 !== sP.e6 && bi.ry.rz(sP.e6, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sP.e6 && bi.ry.rz(sP.e6, e.value), sQ ? sQ() : e.blur())
		}), sR && e.addEventListener("input", function(qP) {
			sR(qP)
		})
}

function sU(qR, data) {
	var el = data.sV.length,
		sW = document.createElement("div"),
		sX = document.createElement("div"),
		sY = document.createElement("div"),
		sZ = new Array(el),
		qS = new Array(el),
		sa = new Array(data.sb.length),
		sc = b9.color.na(70, 70, 0, .35);

	function r2() {
		this.style.backgroundColor = b9.color.r2(sc, 160)
	}

	function sh() {
		this.style.backgroundColor = sc
	}

	function qa() {
		var f4;
		for (qR.style.font = b9.qX.sL(0, b9.qX.sr(.026, .5, .03)), aB = 1; aB < sa.length; aB++) b9.qX.qh(sa[aB], 4);
		if (b9.qX.qh(sW, 2), el) {
			for (var hD, ss = sW.offsetWidth, st = sY.offsetWidth, aB = 0; aB < sa.length; aB++) hD = .01 * data.sg[aB] * st, sa[aB].style.width = (100 * hD / ss).toFixed(2) + "%";
			var l1 = data.sV[0].length;
			for (aB = 0; aB < el; aB++)
				for (b9.qX.qh(sZ[aB], 2), f4 = 1; f4 < l1; f4++) b9.qX.qh(qS[aB][f4], 4);
			sX.sd && (sX.scrollTop = sX.sd)
		}
	}
	this.resize = function() {
			qa(), qa()
		}, qR.style.display = "flex", qR.style.flexDirection = "column", sX.style.overflowX = "hidden", sX.style.overflowY = "auto", sX.addEventListener("scroll", function() {
			this.sd = this.scrollTop
		}),
		function() {
			var eo, aB, sV = data.sV,
				l1 = el ? sV[0].length : 0;
			for (aB = 0; aB < el; aB++) {
				sZ[aB] = document.createElement("div"), sZ[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? b9.color.na(130, 130, 130, .35) : bA.nf
				}(aB), sZ[aB].style.width = "100%", sZ[aB].style.display = "flex", qS[aB] = new Array(l1);
				for (var f4 = 0; f4 < l1; f4++) qS[aB][f4] = eo = document.createElement("div"), eo.style.display = "flex", eo.style.justifyContent = "center", eo.style.wordBreak = "break-all", eo.style.padding = "0.4em 0em", eo.style.width = data
					.sg[f4] + "%", eo.innerHTML = sV[aB][f4].fD, 1 === sV[aB][f4].dr && (eo.name = "" + aB, eo.style.color = bA.od, eo.style.backgroundColor = sc, eo.addEventListener("mouseover", r2), eo.addEventListener("mouseout", sh), function(eo,
						sj, sk) {
						2147483647 !== sk && eo.addEventListener("click", function() {
							bC.a7(30), bC.a8(30, sj), bG.db(bC.aC), this.style.backgroundColor = sc, t.u(8, t.sl, new sm(25, {
								sn: 0,
								sj: bE.so.sp(bE.so.sq(5)),
								sk: sk
							}))
						})
					}(eo, sV[aB][f4].sj, sV[aB][f4].sk)), sZ[aB].appendChild(eo)
			}
			for (sW.style.display = "flex", sW.style.backgroundColor = b9.color.na(0, 120, 0, .35), aB = 0; aB < sa.length; aB++) sa[aB] = eo = document.createElement("div"), eo.style.display = "flex", eo.style.justifyContent = "center", eo.style
				.wordBreak = "break-all", eo.style.padding = "0.4em 0em", eo.style.width = data.sg[aB] + "%", eo.innerHTML = data.sb[aB], sW.appendChild(eo)
		}();
	for (var aB = 0; aB < el; aB++) sY.appendChild(sZ[aB]);
	sX.appendChild(sY), qR.appendChild(sW), qR.appendChild(sX)
}

function su() {
	var sy, sz, sv = document.createElement("div"),
		sw = document.createElement("div"),
		sx = document.createElement("div"),
		sY = document.createElement("div"),
		r6 = [],
		e1 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		t0 = [1, 2, 3, 0, 9, 10, 11];

	function t2(aB) {
		t.u(8, 0, new sm(21, {
			t4: t0[aB],
			t5: 0,
			t6: 10
		}))
	}
	this.show = function() {
			this.rz(t.y.t7), document.body.appendChild(sv)
		}, this.ro = function() {
			document.body.removeChild(sv)
		}, this.rz = function(t7) {
			for (var t8 = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < r6.length; aB++) {
				var i = t7[aB];
				sy[t8[aB]][1].rV.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, t9 = bb.gap,
				j = b9.qX.tA(.085),
				i = Math.min(4 * j, h.i - 2 * t9),
				el = r6.length;
			for (b9.qX.tB(sv, t9, h.j - t9 - j, i, j), b9.qX.qh(sv), b9.qX.qh(sw, 6), aB = 0; aB < el - 1; aB++) b9.qX.qh(r6[aB].button, 6);
			for (aB = 0; aB < el; aB++) sy[aB][0].resize(), sy[aB][1].resize();
			for (r6[0].es = 0, r6[0].button.style.left = b9.qX.qg(r6[0].es), r6[0].button.style.width = b9.qX.tC(1.7 * j), aB = 1; aB < el; aB++) r6[aB].es = r6[aB - 1].es + r6[aB - 1].button.offsetWidth, r6[aB].button.style.left = b9.qX.qg(r6[aB]
				.es);
			if (!sz) {
				if (!ab.tD()) return;
				(sz = ab.get(14)).style.width = "24%", sz.style.position = "absolute", sw.appendChild(sz)
			}
			sz.style.left = b9.qX.qg(0), sz.style.top = "7%", sx.tE && (sx.scrollLeft = sx.tE)
		}, sv.style.position = "absolute", sw.style.width = "25%", sw.style.height = "100%", sw.style.backgroundColor = bA.nc, sx.style.position = "absolute", sx.style.width = "75%", sx.style.height = "100%", sx.style.backgroundColor = bA.nc, sx
		.style.top = sx.style.right = b9.qX.qg(0), b9.qX.t1(sx), sY.style.height = sY.style.maxHeight = "100%", r6.push(new w("", function() {
			t2(0)
		}, bA.oQ)), r6.push(new w("", function() {
			t2(1)
		}, bA.oR)), r6.push(new w("", function() {
			t2(2)
		}, bA.oJ)), r6.push(new w("", function() {
			t2(3)
		}, bA.o4)), r6.push(new w("", function() {
			t2(4)
		}, bA.on)), r6.push(new w("", function() {
			t2(5)
		}, bA.ol)), r6.push(new w("", function() {
			t2(6)
		}, bA.on)), sy = new Array(r6.length);
	for (var aB = 0; aB < r6.length; aB++) r6[aB].button.style.position = "absolute", sy[aB] = [new t3(e1[aB], r6[aB].button, .25, .45), new t3("", r6[aB].button, .53, .84, 1)], r6[aB].button.style.height = r6[aB].button.style.maxHeight = "100%", r6[
		aB].button.top = b9.qX.qg(0), sY.appendChild(r6[aB].button);
	sx.appendChild(sY), sv.appendChild(sw), sv.appendChild(sx)
}

function tF(tG, tH, tI, tJ, rE, rF) {
	var tK = document.createElement("div"),
		tL = document.createElement("div"),
		tM = document.createElement("div"),
		tN = document.createElement("div"),
		tO = document.createElement("div"),
		tP = document.createElement("div"),
		tQ = document.createElement("div"),
		tR = document.createElement("div"),
		tS = document.createElement("span"),
		tT = document.createElement("div");
	this.tU = new rD(rE, rF), this.tV = new tW(rF), this.tX = [tG, tH, tI, tJ], this.tb = function(tc) {
		tc = (tc / 10).toFixed(1) + "%";
		tR.style.width = tc, tS.innerHTML = tc
	}, this.td = function() {
		this.tV.ro(tP), this.tU.show(tP)
	}, this.te = function() {
		this.tU.ro(tP), this.tV.show(tP)
	}, this.tf = function() {
		return tL
	}, this.show = function() {
		document.body.appendChild(tK)
	}, this.ro = function() {
		document.body.removeChild(tK)
	}, this.resize = function(tg) {
		var th = 1 - .4 * a0.a1.hu() * (h.i > 1.6 * h.j),
			ti = b9.qX.rq(.05 * th),
			tj = h.j > h.i,
			tk = b9.qX.rq(.07 * th + .03 * tj),
			tl = b9.qX.rq(.04 + .02 * tj),
			tj = b9.qX.rq(.02 * th + .01 * tj),
			tn = b9.qX.rq(.025);
		tK.style.font = b9.qX.sL(0, tn), th < 1 && (tn = b9.qX.sL(0, th * tn), tM.style.font = tn, tO.style.font = tn, tT.style.font = tn, tQ.style.font = tn, tN.style.font = tn), tL.style.height = b9.qX.qg(ti), tL.style.font = b9.qX.sL(0, .72 *
				ti), b9.qX.qh(tL, 2), tM.style.top = b9.qX.qg(ti), tM.style.height = b9.qX.qg(tk), b9.qX.qh(tM, 2), tN.style.font = b9.qX.sL(0, th * b9.qX.rq(.02)), tN.style.top = b9.qX.qg(ti + tk), tN.style.height = b9.qX.qg(tl), b9.qX.qh(tN,
			2), tO.style.top = b9.qX.qg(ti + tk + tl), tO.style.height = b9.qX.qg(tk), b9.qX.qh(tO, 2), tP.style.top = b9.qX.qg(ti + tk + tl + tk), tP.style.height = b9.qX.qg(h.j / h.k - ti - 3 * tk - tl - tj), tQ.style.top = b9.qX.qg(h.j / h.k -
				tk - tj), tQ.style.height = b9.qX.qg(tj), b9.qX.qh(tQ, 8), tS.style.font = b9.qX.sL(0, .8 * tj), tT.style.top = b9.qX.qg(h.j / h.k - tk), tT.style.height = b9.qX.qg(tk), b9.qX.qh(tT, 8), tG.resize(tM), tH.resize(tM), tI.resize(
			tM), tJ.resize(tM), tg ? this.tU.resize(tP) : this.tV.resize()
	};
	rE = this;
	tK.style.position = "absolute", tK.style.top = "0", tK.style.left = "0", tK.style.width = "100%", tK.style.height = "100%", tK.style.backgroundColor = bA.nf, bI.qz() || (tK.style.backdropFilter = "blur(4px)", tK.style.webkitBackdropFilter =
		"blur(4px)"), tL.style.position = "absolute", tL.style.top = "0", tL.style.left = "0", tL.style.width = "100%", tL.style.display = "flex", tL.style.alignItems = "center";
	for (var g = [tM, tN, tO, tT], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", b9.qX.t1(g[aB]);
	tP.style.position = "absolute", tP.style.left = "0", tP.style.width = "100%", tP.style.font = "inherit", tQ.style.position = "absolute", tQ.style.left = "0", tQ.style.width = "100%", tR.style.position = "absolute", tR.style.top = "0", tR.style
		.left = "0", tR.style.height = "100%", tR.style.width = "50%", tR.style.backgroundColor = bA.o2, tS.innerHTML = "", tS.style.position = "absolute", tS.style.top = "50%", tS.style.left = "50%", tS.style.transform = "translate(-50%, -50%)", tL
		.appendChild(function() {
			var ta = document.createElement("h1");
			return ta.textContent = L(23), ta.style.margin = "0 auto 0.15em auto", ta.style.webkitTextStroke = "0.02em brown", ta.style.fontFamily = "Arial Black, Trebuchet MS", ta.style.fontSize = "inherit", ta.style.fontWeight = "inherit", ta
		}()), tM.appendChild(tG.qC), tN.appendChild(tH.qC), tO.appendChild(tI.qC), tQ.appendChild(tR), tQ.appendChild(tS), tT.appendChild(tJ.qC), tK.appendChild(tL), tK.appendChild(tM), tK.appendChild(tN), tK.appendChild(tO), tK.appendChild(tP), tK
		.appendChild(tQ), tK.appendChild(tT), rE.tV.show(tP)
}

function tW(rF) {
	var tK = document.createElement("div"),
		tP = document.createElement("div");
	this.mT = function() {
			tP.textContent = "", bm.tp.ro(1);
			for (var rg = document.createDocumentFragment(), tq = bm.y.rb[0], tr = bm.tr.ts[tq], tt = bm.tr.tt[tq], aB = 0; aB < tr.length; aB++) ! function(rg, qP, tv, tq) {
				var rV = document.createElement("span");
				rV.textContent = (tv ? "🟢 " : "⚪ ") + bm.kv.tw(qP, tq), rV.style.color = bm.kv.tx(qP.ty), rV.style.cursor = "pointer", rV.style.margin = "0.2em 0.2em 0.2em 0.2em", rV.style.width = rV.style.maxWidth = 2 === tq ? "10em" : "9em",
					rV.style.height = rV.style.maxHeight = "1.4em", rV.style.whiteSpace = "nowrap", rV.style.overflow = "hidden", rV.style.textOverflow = "ellipsis", rV.style.font = "inherit", rV.style.display = "inline-block", bm.kv.tz(qP) && (
						rV.style.textDecoration = "underline"), rV.onclick = function(e) {
						rF(e, qP)
					}, bI.qz() || (rV.onmouseover = function(e) {
						bm.tp.u0(e, qP, 1)
					}), rg.appendChild(rV)
			}(rg, tr[aB], aB < tt, tq);
			tP.appendChild(rg)
		}, this.show = function(qR) {
			qR.appendChild(tK)
		}, this.ro = function(qR) {
			qR.removeChild(tK)
		}, this.resize = function() {
			tP.style.fontSize = b9.qX.qg(b9.qX.rq(.02, .3))
		}, tK.style.top = "0", tK.style.left = "0", tK.style.width = tK.style.height = "100%", tK.style.overflowX = "hidden", tK.style.overflowY = "auto", tK.style.font = "inherit", tP.style.font = "inherit", tP.style.margin = "0.4em", tK
		.appendChild(tP)
}

function u1(u2) {
	var tK = document.createElement("div"),
		rI = document.createElement("div"),
		u3 = [];

	function qu() {
		bI.qz() || (this.style.backgroundColor = b9.color.r2(bA.nc, 50))
	}

	function qv() {
		this.style.backgroundColor = bA.nc
	}
	this.rz = function(u5, u6) {
			u3[2].textContent = u5 + 1 + " / " + u6
		}, this.show = function(qP) {
			rI.appendChild(bm.rn.transform(bm.kv.ri(qP, bm.kv.rj(qP)))), document.body.appendChild(tK)
		}, this.resize = function() {
			var j = b9.qX.rq(.03, .5);
			tK.style.width = 10 * j + "px", tK.style.font = b9.qX.sL(1, .75 * j), b9.qX.qh(tK, 4), rI.style.top = j + "px", rI.style.font = b9.qX.sL(0, .55 * j), b9.qX.qh(rI, 2), tK.style.height = j + rI.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) b9.qX.qh(u3[aB], 6), u3[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u3[aB].style.height = j + "px", b9.qX.qh(u3[aB], 2);
			u3[2].style.width = 4 * j + "px", u3[1].style.left = 2 * j + "px", u3[2].style.left = 4 * j + "px", u3[3].style.left = 8 * j + "px"
		}, this.u7 = function() {
			for (var aB = 0; aB < 4; aB++) u3[aB].onclick = null, u3[aB].onmouseover = null, u3[aB].onmouseout = null;
			document.body.removeChild(tK), tK = rI = u3 = null
		}, tK.style.position = "absolute", tK.style.color = bA.ng, tK.style.zIndex = "3", tK.style.right = "0", tK.style.top = "0", rI.style.position = "absolute", rI.style.height = "auto", rI.style.color = bA.ng, rI.style.backgroundColor = bA.nc, rI
		.style.left = "0", rI.style.width = "100%", rI.style.overflowWrap = "break-word", tK.appendChild(rI);
	for (var aB = 0; aB < 4; aB++) u3[aB] = document.createElement("div"), u3[aB].style.position = "absolute", u3[aB].style.backgroundColor = bA.nc, u3[aB].style.color = bA.ng, u3[aB].style.top = "0", u3[aB].style.display = "flex", u3[aB].style
		.justifyContent = "center", u3[aB].style.alignItems = "center", u3[aB].style.userSelect = "none", u3[aB].style.outline = "none", u3[aB].style.font = "inherit", 2 !== (u3[aB].u4 = aB) && (u3[aB].onclick = u2, u3[aB].onmouseover = qu, u3[aB]
			.onmouseout = qv), tK.appendChild(u3[aB]);
	u3[0].textContent = "◀", u3[1].textContent = "▶", u3[3].textContent = "✖"
}

function u8(u2) {
	var sD = document.createElement("div");

	function qu() {
		bI.qz() || (sD.style.backgroundColor = b9.color.r2(bA.nc, 50))
	}

	function qv() {
		sD.style.backgroundColor = bA.nc
	}
	this.rz = function(u6) {
			sD.textContent = u6
		}, this.show = function() {
			document.body.appendChild(sD)
		}, this.resize = function() {
			var j = b9.qX.rq(.03, .5);
			sD.style.width = 2 * j + "px", sD.style.height = j + "px", sD.style.font = b9.qX.sL(1, .75 * j), b9.qX.qh(sD, 4), b9.qX.qh(sD, 2)
		}, this.u7 = function() {
			sD.onclick = null, sD.onmouseover = null, sD.onmouseout = null, document.body.removeChild(sD), sD = null
		}, sD.style.position = "absolute", qv(), sD.style.color = bA.ng, sD.style.zIndex = "3", sD.style.right = "0", sD.style.top = "0", sD.style.display = "flex", sD.style.justifyContent = "center", sD.style.alignItems = "center", sD.style
		.userSelect = "none", sD.style.outline = "none", sD.onclick = u2, sD.onmouseover = qu, sD.onmouseout = qv
}

function u9(s5) {
	var tK = document.createElement("div"),
		uA = document.createElement("div"),
		sE = (this.es = 0, this.eu = 0);

	function uC() {
		bm.uD.ro()
	}
	this.r6 = s5, this.show = function(es, eu, uF) {
		if (sE) return [0, 0];
		sE = 1, this.es = es, this.eu = eu,
			function(self, uF) {
				var i = b9.qX.rq(.16, .7),
					j = s5.length * i / 3,
					uH = h.i / h.k,
					uI = h.j / h.k,
					nI = Math.min(1, Math.min(uH / i, uI / j));
				i *= nI, j *= nI, uF && (self.es += b9.qX.rq(.03, .5)), self.es = bK.ht(self.es, 0, uH - i), self.eu = bK.ht(self.eu, 0, uI - j), uA.style.left = self.es + "px", uA.style.top = self.eu + "px", uA.style.width = i + "px", uA.style
					.height = j + "px", uA.style.font = b9.qX.sL(0, .34 * j / s5.length), b9.qX.qh(uA, 5);
				for (var aB = 1; aB < s5.length; aB++) b9.qX.qh(s5[aB].button, 8)
			}(this, uF), document.body.appendChild(tK)
	}, this.ro = function() {
		sE && (sE = 0, tK.removeEventListener("click", uC), document.body.removeChild(tK))
	};
	for (var aB = 0; aB < s5.length; aB++) new rU("" + (1 + aB), s5[aB].button, 0, 1);
	tK.style.position = "fixed", tK.style.top = "0", tK.style.left = "0", tK.style.width = "100%", tK.style.height = "100%", tK.style.zIndex = "5", uA.style.position = "absolute",
		function() {
			for (var uE = (100 / s5.length).toFixed(2) + "%", aB = 0; aB < s5.length; aB++) s5[aB].button.style.width = "100%", s5[aB].button.style.height = s5[aB].button.style.maxHeight = uE, s5[aB].button.style.padding = "0.0em 0.9em", uA
				.appendChild(s5[aB].button)
		}(), tK.appendChild(uA), tK.addEventListener("click", uC)
}

function uJ(sP, uK) {
	this.qN = [];
	var uL = this.qN;

	function click() {
		for (var aB = 0; aB < uL.length; aB++) uL[aB].textContent = uL[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e6 = parseInt(this.name);
		void 0 !== sP.e6 && bi.ry.rz(sP.e6, e6), uK && uK(e6)
	}
	for (var uM, el = sP.uN.length, aB = 0; aB < el; aB++)(uM = document.createElement("p")).textContent = "⚪ " + sP.uN[aB], uM.style.margin = "0", uM.name = "" + aB, uM.style.cursor = "pointer", uM.style.fontSize = "1em", uM.addEventListener(
		"click", click), uL.push(uM);
	uL[sP.value].textContent = uL[sP.value].textContent.replace("⚪", "🟢")
}

function uO(title, uP, uQ) {
	var sv = document.createElement("div"),
		uR = document.createElement("div"),
		sY = document.createElement("div"),
		uS = document.createElement("div"),
		uT = document.createElement("div");
	this.uU = sY, this.uV = uP, this.show = function() {
			!1 !== uQ ? document.body.appendChild(sv) : (document.body.appendChild(uR), document.body.appendChild(uS))
		}, this.ro = function() {
			!1 !== uQ ? document.body.removeChild(sv) : (document.body.removeChild(uR), document.body.removeChild(uS))
		}, this.uZ = function() {
			var rr = b9.qX.rq(.1),
				rp = b9.qX.rq(.08 + .04 * (h.ua < 1));
			return {
				rr: rr,
				rp: rp,
				ub: h.j / h.k - rr - rp
			}
		}, this.resize = function(s9) {
			var el = uP.length,
				uc = this.uZ(),
				rr = uc.rr,
				rp = uc.rp;
			for (uR.style.height = b9.qX.qg(rr), b9.qX.qh(uR, 2), uS.style.top = b9.qX.qg(h.j / h.k - rp), uS.style.height = b9.qX.qg(rp), b9.qX.qh(uS, 8), sY.style.top = b9.qX.qg(rr), sY.style.height = sY.style.maxHeight = b9.qX.qg(uc.ub), uR.style
				.font = b9.qX.sL(0, b9.qX.rq(.02, .3)), uS.style.font = b9.qX.sL(0, b9.qX.rq(.02, .7)), sY.style.font = b9.qX.sL(0, b9.qX.rq(.02, .7)), aB = 1; aB < el; aB++) b9.qX.qh(uP[aB].button, 4);
			for (var sA = 0, aB = 0; aB < el; aB++) sA += uP[aB].button.offsetWidth;
			if (s9 && sA < uS.offsetWidth)
				for (aB = 0; aB < el; aB++) uP[aB].button.style.width = (100 * uP[aB].button.offsetWidth / sA).toFixed(2) + "%";
			else
				for (aB = 0; aB < el; aB++) uP[aB].button.style.width = "auto";
			uS.tE && (uS.scrollLeft = uS.tE), s9 || this.resize(!0)
		}, this.ud = function() {
			var uc = this.uZ(),
				f6 = h.k;
			ue.fillStyle = bA.nc, ue.fillRect(0, f6 * uc.rr, h.i, f6 * uc.ub)
		}, sv.style.position = "absolute", sv.style.top = "0", sv.style.left = "0", sv.style.width = "100%", sv.style.height = "100%", uR.style.position = "absolute", uR.style.top = "0", uR.style.left = "0", uR.style.width = "100%", uR.style
		.display = "flex", uR.style.backgroundColor = bA.nc, uS.style.position = "absolute", uS.style.left = "0", uS.style.width = "100%", b9.qX.t1(uS), uT.style.height = uT.style.maxHeight = "100%", sY.style.position = "absolute", sY.style.width =
		"100%", sY.style.backgroundColor = bA.nc,
		function() {
			for (var aB = 0; aB < uP.length; aB++) uP[aB].button.style.height = "100%", uP[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uP.length; aB++) uT.appendChild(uP[aB].button);
	uR.appendChild(function() {
		var uY = document.createElement("h1");
		return uY.textContent = title, uY.style.margin = "auto", uY.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", uY.style.webkitTextStroke = "0.02em brown", uY.style.fontFamily = "Arial Black, Trebuchet MS", uY
	}()), uS.appendChild(uT), !1 !== uQ && (sv.appendChild(sY), sv.appendChild(uR), sv.appendChild(uS))
}

function rU(uf, ug, uh, ui) {
	var self;
	this.rV = document.createElement("span"), (self = this).rV.textContent = uf, self.rV.style.color = bA.ng, self.rV.style.position = "absolute", self.rV.style.font = "inherit", ui ? self.rV.style.bottom = "0.06em" : self.rV.style.top = "0.12em",
		uh ? self.rV.style.left = "0.2em" : self.rV.style.right = "0.2em", self.rV.style.fontSize = "0.6em", self.rV.style.pointerEvents = "none", self.rV.style.whiteSpace = "pre", ug.style.position = "relative", ug.style.overflow = "hidden", ug
		.appendChild(self.rV)
}

function t3(uf, ug, uj, uk, ul) {
	var self;
	this.rV = document.createElement("span"), this.resize = function() {
			this.rV.style.fontSize = ((uk - uj) * ug.offsetHeight).toFixed(1) + "px"
		}, (self = this).rV.textContent = uf, self.rV.style.color = bA.ng, self.rV.style.font = "inherit", self.rV.style.margin = "0.1em 0.6em", self.rV.style.pointerEvents = "none", ul && (self.rV.style.fontWeight = "bold"), self.rV.style
		.whiteSpace = "nowrap", self.rV.style.display = "block", ug.appendChild(self.rV)
}

function um(un, uo, up, uq) {
	var ur = document.createElement("textarea"),
		us = (this.e = ur, !0);

	function uy() {
		ur.select(), document.execCommand("copy")
	}
	this.resize = function() {
			uo && b9.qX.qh(ur, 5)
		}, this.ut = function(uu) {
			ur.value = uu
		}, this.uv = function() {
			return ur.value
		}, this.uw = function() {
			ur.select()
		}, this.clear = function() {
			ur.value = ""
		}, this.ux = function() {
			us && navigator.clipboard ? (ur.select(), navigator.clipboard.writeText(ur.value).catch(function() {
				us = !1, uy()
			})) : uy()
		}, ur.setAttribute("id", "textArea" + t.y.sS++), ur.setAttribute("autocomplete", "off"), un && ur.setAttribute("placeholder", un), ur.style.top = "0", ur.style.left = "0", ur.style.width = "100%", ur.style.height = "100%", ur.style
		.userSelect = "none", ur.style.outline = "none", ur.style.resize = "none", ur.style.border = "none", ur.style.color = bA.ng, ur.style.backgroundColor = bA.nZ, uq ? (ur.style.fontSize = "1em", ur.rows = 6, ur.style.padding = "0.25em") : (ur
			.style.padding = "0.45em", ur.style.fontSize = "1.2em"), up && ur.addEventListener("input", function(e) {
			up(e)
		}), ur.addEventListener("focus", function() {
			h.sT++
		}), ur.addEventListener("blur", function() {
			h.sT--
		})
}

function dG() {
	this.qo = new uz, this.eI = new v0, this.ry = new v1, this.y = new v2, this.db = function() {
		this.eI.db(), (new v3).db()
	}
}

function v0() {
	function v4(aB, type, vB, dt) {
		bi.eI.data.push({
			e6: aB,
			type: type || 0,
			value: vB || 0,
			vB: vB || 0,
			dt: dt || 0
		})
	}

	function v5(aB, type, vB, dt) {
		bi.eI.data.push({
			e6: aB,
			type: type,
			value: vB || "",
			vB: vB || "",
			dt: dt || 0
		})
	}

	function v6(nO) {
		for (var aB = bi.eI.data.length; aB < nO; aB++) bi.eI.data.push(null)
	}
	this.data = [], this.db = function() {
		v4(0, 1, 0, 5), v4(1, 1, 1), v4(2, 0), v5(3, 2), v4(4, 1), v5(5, 2, "Trebuchet MS", 1), v4(6, 0), v4(7, 0, 0), v4(8, 0), v4(9, 1, 1), v4(10, 1), v4(11, 1, 1), v5(12, 2, navigator.language), v4(13), v4(14), v6(100), v5(100, 2), v5(101, 2),
			v5(102, 2), v5(103, 2), v5(104, 2), v5(105, 2), v5(106, 2), v4(107), v4(108), v4(109), v5(110, 2), v4(111), v4(112), v4(113), v5(114, 2), v4(115), v5(116, 2), v4(117, 1), v5(118, 2, "", 2), v4(119, 1, 0, 1), v5(120, 2), v4(121, 1, ~~(
				262144 * Math.random())), v5(122, 2, "Player " + Math.floor(1e3 * Math.random())), v4(123), v5(124), v4(125, 1), v5(126, 2), v4(127, 0, 1), v4(128), v4(129), v4(130), v4(131), v4(132), v5(133, 2), v4(134, 0, 5), v5(135, 2), v5(
				136, 2), v4(137), v4(138), v4(139), v4(140), v4(141), v4(142), v4(143), v4(144), v5(145, 2), v4(146), v4(147), v5(148, 2), v4(149), v4(150, 0, 1), v5(151, 2), v4(152, 0, 5), v4(153, 1), v4(154, 1), v5(155, 2), v5(156, 2), v4(157),
			v4(158), v4(159), v4(160), v6(180), v4(180, 0), v4(181, 0)
	}, this.rz = function(e6, value) {
		this.data[e6].value = value
	}, this.v7 = function(e6, value) {
		this.rz(e6, value), bi.qo.save(e6, String(value)), bi.qo.save(e6, String(this.data[e6].dt), !0)
	}, this.v8 = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bi.qo.save(aB, String(this.data[aB].value)), bi.qo.save(aB, String(this.data[aB].dt), !0))
	}, this.v9 = function(e6) {
		return Number(this.data[e6].value)
	}, this.vA = function(e6) {
		return String(this.data[e6].value)
	}
}

function uz() {
	this.vC = function(e6, dt) {
		return Number(this.vD(e6, dt))
	}, this.vD = function(e6, dt) {
		var fD = null;
		return 0 === a0.id ? a0.vE && (fD = a0.vE.getItem((dt ? "v" : "d") + e6)) : 1 === a0.id ? fD = a0.vF.loadString((dt ? 1e3 : 2e3) + e6) : 2 === a0.id && (fD = a0.vG[(dt ? "v" : "d") + e6]), fD && 0 !== fD.length ? fD : null
	}, this.vH = function(el, vI) {
		var g = [],
			vJ = vI ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vE)
				for (aB = 0; aB < el; aB++) g.push(a0.vE.getItem(vJ + aB))
		} else if (1 === a0.id)
			for (var vK = vI ? 5e3 : 3e3, aB = 0; aB < el; aB++) g.push(a0.vF.loadString(vK + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < el; aB++) g.push(a0.vG[vJ + aB]);
		return g
	}, this.save = function(e6, value, dt) {
		var vL = (dt ? "v" : "d") + e6;
		if (0 === a0.id) {
			if (a0.vE && bi.eI.data[140].value) try {
				a0.vE.setItem(vL, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vF.saveString((dt ? 1e3 : 2e3) + e6, value) : 2 === a0.id && (a0.vG[vL] = value, a0.vM.postMessage(vL + " " + value))
	}, this.vN = function(g, vI) {
		var el = g.length,
			vJ = vI ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vE && bi.eI.data[140].value) try {
				for (aB = 0; aB < el; aB++) a0.vE.setItem(vJ + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vK = vI ? 5e3 : 3e3, aB = 0; aB < el; aB++) a0.vF.saveString(vK + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < el; aB++) a0.vG[vJ + aB] = g[aB], a0.vM.postMessage(vJ + aB + " " + g[aB])
	}
}

function v3() {
	this.db = function() {
		! function() {
			var data = bi.eI.data;
			0 === data[2].dt && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vB = 1);
			0 === data[100].dt && (data[100].value = data[100].vB = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fD, data = bi.eI.data,
			el = data.length;
		for (aB = 0; aB < el; aB++) data[aB] && data[aB].dt === bi.qo.vC(aB, !0) && (fD = bi.qo.vD(aB), data[aB].value = null === fD ? data[aB].vB : 2 === data[aB].type ? fD : Number(fD))
	}
}

function v2() {
	function vT(g) {
		if (0 === g.length) bi.ry.rz(116, "");
		else {
			for (var vW = g[0], aB = 1; aB < g.length; aB++) vW += ";" + g[aB];
			bi.ry.rz(116, vW)
		}
	}
	this.vQ = function() {
		bi.eI.data[110].value.length && (bi.eI.data[106].value = bi.eI.data[110], bi.ry.rz(110, ""), this.vR())
	}, this.vR = function() {
		var g = bi.eI.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bi.eI.data[106].value), g.unshift(bi.eI.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vS = [], aB = 0; aB < g.length; aB += 2) vS.push(g[aB]);
		vT(g), bi.eI.data[117].value = 0, bi.eI.data[117].uN = vS
	}, this.vU = function(e6) {
		bi.eI.data[117].uN.splice(e6, 1), bi.eI.data[117].value = Math.min(e6, bi.eI.data[117].uN.length - 1);
		var g = bi.eI.data[116].value.split(";");
		g.splice(2 * e6, 2), vT(g)
	}, this.vV = function(e6) {
		var g = bi.eI.data[116].value.split(";");
		return {
			sj: g[2 * e6],
			password: g[2 * e6 + 1]
		}
	}, this.vX = function() {
		var fD = bK.ht(bi.eI.data[121].value, -1, 262143);
		return fD = -1 === fD ? ~~(262144 * Math.random()) : fD
	}
}

function v1() {
	this.rz = function(e6, value) {
		bi.eI.data[e6].value !== value && (bi.eI.v7(e6, value), 0 === e6 ? (t.x(), b6.db(), t.u(2)) : 1 === e6 ? h.dm(1) : 2 === e6 ? h.dm(0) : 5 === e6 && (b9.qX.vY(), h.dm(0)))
	}, this.vZ = function() {
		for (var data = bi.eI.data, aB = 0; aB < 100; aB++) data[aB] && bi.eI.v7(aB, data[aB].vB);
		b9.qX.vY(), h.dm(1), b6.db()
	}, this.va = function() {
		for (var data = bi.eI.data, aB = 0; aB < data.length; aB++) data[aB] && bi.eI.rz(aB, data[aB].vB)
	}, this.vb = function() {
		for (var f5 = bi.eI, aB = 128; aB < 135; aB++) f5.v7(aB, f5.data[aB].vB)
	}, this.vc = function(data) {
		bi.ry.rz(109, data.sk), bi.ry.rz(107, data.vd), bi.ry.rz(108, data.ve), bi.ry.rz(112, data.vf), bi.ry.rz(111, data.vg), bi.ry.rz(113, data.vh), bi.ry.rz(135, data.vi), bi.ry.rz(136, data.vj), bi.ry.rz(137, data.vk), bi.ry.rz(138, data
			.vl), bi.ry.rz(139, data.vm), bi.ry.rz(141, data.vn), bi.ry.rz(142, data.vo), bi.ry.rz(143, data.vp), bi.ry.rz(144, data.vq)
	}
}

function c3() {
	this.so = new vr, this.vs = new vt, this.vu = new vv, this.db = function() {
		this.so.db()
	}
}

function vt() {
	this.vw = function(size) {
		for (var vx = bG, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vx.pe(16)));
		return g.join("")
	}, this.vy = function(qE) {
		return 20 < (qE = qE.trim()).length ? qE.substring(0, 20) : qE
	}
}

function vr() {
	var vz = new Uint8Array(78);
	this.db = function() {
		var aB;
		for (vz[50] = 37, aB = 0; aB < 10; aB++) vz[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) vz[aB + 20] = aB + 11, vz[aB + 52] = aB + 38
	}, this.w0 = function(qE) {
		return qE.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.w1 = function(qE, size) {
		if ((qE = this.w0(qE)).length > size) return qE.substring(0, size);
		for (; qE.length < size;) qE = "-" + qE;
		return qE
	}, this.w2 = function(qE) {
		for (var w3 = vz, el = qE.length, g = new Uint8Array(el), aB = 0; aB < el; aB++) g[aB] = w3[qE.charCodeAt(aB) - 45];
		return g
	}, this.w4 = function(w5) {
		bC.a7(6 * w5.length), this.w6(w5), bG.db(bC.aC)
	}, this.w6 = function(w5) {
		for (var el = w5.length, i = bC, aB = 0; aB < el; aB++) i.a8(6, w5[aB])
	}, this.w7 = function(qE) {
		this.w6(this.w2(qE))
	}, this.w8 = function(qE, size) {
		this.w6(this.w2(this.w1(qE, size)))
	}, this.w9 = function(qE, size) {
		for (var g = this.w2(this.w1(qE, size)), fD = 0, nI = 1, aB = g.length - 1; 0 <= aB; aB--) fD += nI * g[aB], nI *= 64;
		return fD
	}
}

function wA() {
	var i, j, wB;

	function wb(hD, eo, wZ, wG, wU) {
		eo = wa(hD, eo + 1 + 2 * wG & 3);
		! function(hD, kj) {
			return 1 < Math.abs(hD % i - kj % i) || 1 < Math.abs(we(hD) - we(kj))
		}(hD, eo) && 0 === wU[eo << 2] && (wU[eo << 2] = wZ)
	}

	function we(gJ) {
		return Math.floor((gJ + .5) / i) % j
	}

	function wa(gJ, eo) {
		return gJ + wB[eo]
	}
	this.wC = function(qE) {
		var aB, wD, el, wE, vx = bG;
		for (bF.so.w4(bF.so.w2(qE)), bR.wH.wI[bR.eR].i = bR.ew = i = vx.pe(12), bR.wH.wI[bR.eR].j = bR.ex = j = vx.pe(12), wB = [-i, -1, i, 1], bR.wR = document.createElement("canvas"), bR.wR.width = bR.ew, bR.wR.height = bR.ex, bR.wN = bR.wR
			.getContext("2d", {
				alpha: !1
			}), bR.wO = bR.wS = null, bR.wO = bR.wN.getImageData(0, 0, bR.ew, bR.ex), bR.wS = bR.wO.data, b9.qf.wT(bR.wS), el = vx.pe(12), wD = vx.pe(5), wE = wK(i * j - 1), aB = 0; aB < el; aB++) ! function(l1, gJ, wF, wG) {
			var aB, eo, vx = bG,
				wU = bR.wS,
				wV = gJ,
				wW = gJ,
				wX = 0,
				wY = 1 + wF,
				wZ = 2 - wF;
			for (wU[gJ << 2] = wY, aB = 0; aB < l1; aB++) eo = vx.pe(2), gJ = wa(gJ, eo), wU[gJ << 2] === wY ? wX % 2 == 1 && wb(wW, wX + 2 * wG + 3, wZ, wG, wU) : wU[gJ << 2] = wY, wb(gJ, eo, wZ, wG, wU), wb(wW, eo, wZ, wG, wU), wW = gJ,
				wX = eo;
			wa(gJ, 0) === wV ? (wb(gJ, 0, wZ, wG, wU), wb(wV, 0, wZ, wG, wU)) : wa(gJ, 1) === wV && (wb(gJ, 0, wZ, wG, wU), wb(wV, 2, wZ, wG, wU));
			0 === l1 && (wb(wV, 0, wZ, wG, wU), wb(wV, 2, wZ, wG, wU))
		}(vx.pe(wD), vx.pe(wE), 1 === vx.pe(1), 1 === vx.pe(1));
		var es, eu, hd, wf, wg, wh, wU = bR.wS,
			wi = !0,
			wj = bR.wH.wI[bR.eR].wj,
			wk = bR.wH.wI[bR.eR].wk;
		for (eu = 0; eu < j; eu++)
			for (wf = !0, wg = wi, es = wh = 0; es < i; es++) hd = 4 * eu * i + 4 * es, wh <= es && 0 < wU[hd] && (wg = 2 === wU[hd], wf) && (wf = !1, wg !== wi) ? (wi = wg, wh = es + 1, es = -1) : (wg ? (wU[hd] = wk[0], wU[1 + hd] = wk[1], wU[
				2 + hd] = wk[2]) : (wU[hd] = wj[0], wU[1 + hd] = wj[1], wU[2 + hd] = wj[2]), wU[3 + hd] = 255);
		bR.wN.putImageData(bR.wO, 0, 0), bR.wP = !0, bR.wQ.db(), be.dj = !0
	}
}

function vv() {
	this.wC = function(wl) {
		for (var vx = bG, size = vx.pe(wl), wm = 7 + 9 * vx.pe(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vx.pe(wm)));
		return g.join("")
	}
}

function c8() {
	var sG, sH, wn, wo, wp, wq, wr, ws, wt, wu;

	function ww() {
		var wz = aD.wz;
		for (wt = wz; wt < aD.ei; wt++) wv();
		for (wt = aD.h9 ? aD.k8 : 0; wt < wz; wt++) {
			if (!x0()) {
				for (var f5 = aD.x4 = wt; f5 < wz; f5++) wt = f5, wv();
				return
			}
			x3(wq + sG * wp + bK.ds(wp, 2), wr + sH * wp + bK.ds(wp, 2))
		}
	}

	function xW(player) {
		for (var ib = ag.ib, ie = ag.ie, ic = ag.ic, ig = ag.ig, eu = ie[player]; eu <= ig[player]; eu++)
			for (var es = ib[player]; es <= ic[player]; es++) {
				var eP = ac.xX(es, eu);
				ac.gL(eP) && (ac.jK(eP) ? ac.gG(eP, player) : ac.xY(eP, player))
			}
	}

	function xV(g, t5, t6) {
		var dr = g[t5];
		g[t5] = g[t6], g[t6] = dr
	}

	function x0() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sG = bK.ds(wn * ax.random(), ax.value(100)), sH = bK.ds(wo * ax.random(), ax.value(100)), xd()) return 1;
			return
		}() || function() {
			var i5, i8, f4, x2, f5, x1;
			for (i5 = bK.ds(wn * ax.random(), ax.value(100)), i8 = bK.ds(wo * ax.random(), ax.value(100)), f4 = 40; 1 <= f4; f4--)
				for (x2 = wo - f4; 0 <= x2; x2 -= 40)
					for (sH = (x2 + i8) % wo, f5 = 40; 1 <= f5; f5--)
						for (x1 = wn - f5; 0 <= x1; x1 -= 40)
							if (sG = (x1 + i5) % wn, xd()) return 1;
			return
		}()
	}

	function xd() {
		for (var gJ, xf, gap = bK.ds(wp - ws, 2), xg = wr + sH * wp + gap, xh = wq + sG * wp + gap, xe = xg + ws - 1; xg <= xe; xe--)
			for (xf = xh + ws - 1; xh <= xf; xf--)
				if (gJ = ac.xX(xf, xe), !ac.eg(gJ) || ac.jK(gJ)) return;
		return 1
	}

	function x3(x1, x2) {
		wv(), xi(x1 - 2, x2 - 2)
	}

	function wv() {
		ag.mg[wt] = 0, ag.gZ[wt] = ag.xT[wt] = 0, ag.gD[wt] = [], ag.gR[wt] = [], ag.gS[wt] = [], ag.fB[wt] = [], ag.ib[wt] = ag.ie[wt] = ag.ic[wt] = ag.ig[wt] = 0
	}

	function xi(x1, x2) {
		var gJ, aB, xj, xk;
		for (ag.mg[wt] = 1, ag.ib[wt] = x1 + 10, ag.ie[wt] = x2 + 10, ag.ig[wt] = ag.ic[wt] = 0, xj = x1; xj < x1 + 4; xj++)
			for (xk = x2; xk < x2 + 4; xk++)(x1 < xj && xj < x1 + 3 || x2 < xk && xk < x2 + 3) && (gJ = ac.xX(xj, xk), ac.eg(gJ)) && (ag.ib[wt] = Math.min(xj, ag.ib[wt]), ag.ic[wt] = Math.max(xj, ag.ic[wt]), ag.ie[wt] = Math.min(xk, ag.ie[wt]), ag
				.ig[wt] = Math.max(xk, ag.ig[wt]), wu[ag.gZ[wt]] = gJ, ag.gZ[wt]++, ac.xY(gJ, wt));
		for (ag.xT[wt] = ag.gZ[wt], aB = ag.gZ[wt] - 1; 0 <= aB; aB--) ac.xl(wu[aB], wt) ? (ac.gG(wu[aB], wt), ag.gR[wt].push(wu[aB])) : ac.xm(wu[aB]) ? (ac.gG(wu[aB], wt), ag.gS[wt].push(wu[aB])) : ac.xn(wu[aB]) && (ac.gG(wu[aB], wt), ag.fB[wt]
			.push(wu[aB]))
	}
	this.db = function() {
		if (wu = new Array(12), ws = 6, wp = 10, wn = bK.ds(bR.ew, wp), wo = bK.ds(bR.ex, wp), wq = bK.ds(bR.ew - wp * wn, 2), wr = bK.ds(bR.ex - wp * wo, 2), aD.h9)
			for (var aB = 0; aB < aD.k8; aB++) wt = aB, wv(), ag.mg[wt] = 1;
		(0 === aD.data.spawningType ? ww : 1 === aD.data.spawningType ? (ww(), function() {
			var x5 = aD.x6;
			aD.x7 || x5++;
			if (!(x5 < 3)) {
				for (var data = aD.data, jP = (aD.h9 ? aD.k8 : 0) + data.teamPlayerCount[0], nO = aD.x4, x8 = new Uint32Array(x5), x9 = new Uint32Array(x5), xA = new Uint16Array(x5), xB = new Uint16Array(x5), ej = bf.ej, ib = ag.ib, ie =
						ag.ie, ic = ag.ic, ig = ag.ig, fQ = bN.fQ, fR = bN.fR, aB = jP; aB < nO; aB++) fQ[aB] = ib[aB] + ic[aB] >> 1, fR[aB] = ie[aB] + ig[aB] >> 1;
				for (aB = jP; aB < nO; aB++) {
					var id = ej[aB];
					x8[id] += fQ[aB], x9[id] += fR[aB]
				}
				var kV = bf.kV;
				for (aB = 1; aB < x5; aB++) {
					var gE = Math.max(data.teamPlayerCount[kV[aB]], 1);
					xA[aB] = bK.ds(x8[aB], gE), xB[aB] = bK.ds(x9[aB], gE)
				}
				var xC = bf.xC,
					xD = bf.xD,
					xE = bf.xE,
					fP = bN.fP;
				for (aB = 0; aB < 512; aB++) fP[aB] = aB;
				for (var e5 = 0; e5 < 2 + (4 <= x5); e5++)
					for (aB = jP; aB < nO; aB++) {
						for (var hD = aB, xF = fP[hD], xG = 1, f1 = bK.xH(fQ[xF] - xA[1], fR[xF] - xB[1]), f4 = 2; f4 < x5; f4++) {
							var xI = bK.xH(fQ[xF] - xA[f4], fR[xF] - xB[f4]);
							xI < f1 && (f1 = xI, xG = f4)
						}
						var xJ = ej[hD];
						if (xG !== xJ) {
							if (2 === e5 && 4 <= x5) {
								var xK = Math.max((xG + 1) % x5, 1),
									xL = bK.xH(fQ[xF] - xA[xK], fR[xF] - xB[xK]);
								for (f4 = 1; f4 < x5; f4++) xI = bK.xH(fQ[xF] - xA[f4], fR[xF] - xB[f4]), f1 < xI && xI < xL && (xL = xI, xK = f4);
								xK !== xJ && bK.xH(xA[xJ] - xA[xK], xB[xJ] - xB[xK]) < bK.xH(xA[xJ] - xA[xG], xB[xJ] - xB[xG]) && (xG = xK)
							}
							var xM = kV[xG],
								xN = xD[xM] + (aD.h9 ? 0 : xE[xM]),
								kj = xC[xN],
								xO = fP[kj],
								xP = xD[xM + 1];
							f1 = bK.xH(fQ[xO] - xA[xJ], fR[xO] - xB[xJ]);
							for (var f6 = xN + 1; f6 < xP; f6++) {
								var xQ = xC[f6],
									xR = fP[xQ];
								(xI = bK.xH(fQ[xR] - xA[xJ], fR[xR] - xB[xJ])) < f1 && (f1 = xI, kj = xQ)
							}
							kj < jP || nO <= kj || (xO = fP[kj], x8[xJ] += fQ[xO] - fQ[xF], x9[xJ] += fR[xO] - fR[xF], x8[xG] += fQ[xF] - fQ[xO], x9[xG] += fR[xF] - fR[xO], gE = data.teamPlayerCount[kV[xJ]], xA[xJ] = bK.ds(x8[xJ], gE),
								xB[xJ] = bK.ds(x9[xJ], gE), gE = data.teamPlayerCount[xM], xA[xG] = bK.ds(x8[xG], gE), xB[xG] = bK.ds(x9[xG], gE), fP[hD] = xO, fP[kj] = xF)
						}
					}! function() {
						for (var fP = bN.fP, ib = ag.ib, ie = ag.ie, ic = ag.ic, ig = ag.ig, gZ = ag.gZ, xT = ag.xT, gR = ag.gR, gS = ag.gS, fB = ag.fB, aB = 0; aB < 512; aB++) {
							var xU = fP[aB];
							if (xU !== aB) {
								xV(ib, aB, xU), xV(ie, aB, xU), xV(ic, aB, xU), xV(ig, aB, xU), xV(gZ, aB, xU), xV(xT, aB, xU), xV(gR, aB, xU), xV(gS, aB, xU), xV(fB, aB, xU), xW(aB), xW(xU), fP[aB] = aB;
								for (var j = xU, gK = fP[j]; gK !== aB;) gK = fP[j = gK];
								fP[j] = xU
							}
						}
					}()
			}
		}) : function() {
			var wz = aD.wz;
			for (wt = wz; wt < aD.ei; wt++) wv();
			for (wt = aD.h9 ? aD.k8 : 0; wt < wz; wt++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							x1 = spawningData[2 * wt] + 1,
							spawningData = spawningData[2 * wt + 1] + 1;
						if (3 < x1 && x1 < bR.ew - 5 && 3 < spawningData && spawningData < bR.ex - 5 && ac.eg(ac.xX(x1, spawningData)) && function(x1, x2) {
								var gJ, xf, xe;
								for (xe = x2; x2 - 6 < xe; xe--)
									for (xf = x1; x1 - 6 < xf; xf--)
										if (gJ = ac.xX(xf, xe), ac.jK(gJ)) return;
								return 1
							}(x1 + 3, spawningData + 3)) return x3(x1 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!x0()) {
						for (var f5 = aD.x4 = wt; f5 < wz; f5++) wt = f5, wv();
						return
					}
					var x1 = wq + sG * wp + bK.ds(wp, 2),
						x2 = wr + sH * wp + bK.ds(wp, 2);
					x3(x1, x2)
				}
		})(), bc.mc[7] = ag.gZ[aD.eV]
	}, this.xo = function(jI, xp, xq) {
		var aB, x1, x2, gJ, sG, sH;
		for (wt = jI, aB = 0; aB < 20; aB++)
			for (x1 = xp + aB; xp - aB <= x1; x1--)
				for (x2 = xq + aB; xq - aB <= x2; x2--)
					if ((x1 === xp + aB || x1 === xp - aB || x2 === xq + aB || x2 === xq - aB) && 3 < x1 && x1 < bR.ew - 5 && 3 < x2 && x2 < bR.ex - 5 && ac.eg(ac.xX(x1, x2)) && function(x1, x2) {
							var gJ, xf, xe;
							for (xe = x2; x2 - 6 < xe; xe--)
								for (xf = x1; x1 - 6 < xf; xf--)
									if (gJ = ac.xX(xf, xe), ac.jK(gJ) && !ac.xw(wt, gJ)) return;
							return 1
						}(x1 + 3, x2 + 3)) {
						if (0 < ag.gZ[wt]) {
							for (sH = sG = gJ = void 0, sG = ag.ic[wt]; sG >= ag.ib[wt]; sG--)
								for (sH = ag.ig[wt]; sH >= ag.ie[wt]; sH--) gJ = 4 * (sH * bR.ew + sG), ac.xt(wt, gJ) && (ac.xu(gJ), ag.gZ[wt]--);
							wv()
						}
						return xi(x1 - 1, x2 - 1), !0
					} return !1
	}, this.xv = function(jI) {
		wt = jI, x0() ? x3(wq + sG * wp + bK.ds(wp, 2), wr + sH * wp + bK.ds(wp, 2)) : wv()
	}
}

function xx() {
	ar.xy(), ue.setTransform(hw, 0, 0, hw, 0, 0), ue.imageSmoothingEnabled = hw < 3, ue.drawImage(bR.wR, aS.xz(), aS.y0()), bO.y1.ud(), ue.drawImage(y2, aS.xz(), aS.y0()), ar.ud(), bM.ud(), af.ud(), (aD.n9 ? (bg.ud(), bB) : (aN.ud(), aV.ud(), aR
	.ud(), bB.ud(), av.ud(), aW.ud(), aS.ud(), aQ.ud(), bg.ud(), aU.ud(), aP.ud(), aM.ud(), aL.ud(), aX.ud(), bd.ud(), au)).ud(), t.ud()
}

function y3(y4, i, j) {
	y4.clearRect(0, 0, i, j), y4.fillStyle = bA.nd, y4.fillRect(0, 0, i, j)
}

function y5(y4, i, j, y6) {
	y4.fillStyle = bA.ng, y4.fillRect(0, 0, i, y6), y4.fillRect(0, 0, y6, j), y4.fillRect(i - y6, 0, y6, j), y4.fillRect(0, j - y6, i, y6)
}

function y7(y4, es, eu, hh, y6, gJ, y8) {
	y4.fillStyle = bA.ng;
	var gJ = Math.floor(hh * gJ),
		st = (gJ += (gJ - y6) % 2, Math.floor((gJ - y6) / 2)),
		hh = Math.floor((hh - gJ) / 2);
	y4.fillRect(es + hh, eu + hh + st, gJ, y6), y8 && y4.fillRect(es + hh + st, eu + hh, y6, gJ)
}

function yA() {
	this.db = function() {
		8 === aD.kQ && aN.yB()
	}, this.yC = function(yD) {
		var elo = aD.data.elo,
			jO = (elo[yD] - elo[1 - yD]) / 10,
			jO = 8 / (1 + Math.pow(2, jO / 32)),
			jO = Math.floor(10 * jO + .5),
			yF = elo[yD] + jO,
			yF = this.yH(yF),
			elo = this.yH(elo[1 - yD] - jO);
		0 === yD ? aN.yJ(yF, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yJ(elo, yF, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ag.yK[yD] < 100 || aN.yL(220, L(24), 40, 0, bA.ng, bA.nd, -1, !1)
	}, this.yH = function(elo) {
		return 16e3 === (elo = bK.ht(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cd() {
	this.rn = new yM, this.wU = new yN
}

function yN() {
	this.hX = !1;
	this.yR = [], this.yS = 100;
	var n6, n7, gap, hh, yO, yQ, yT = 0,
		yU = new Array(9),
		yV = [],
		yW = [],
		yX = 0,
		yY = 0,
		yZ = 0,
		ya = 0;

	function ym() {
		yU.sort(function(f4, f5) {
			return f5.kD - f4.kD
		});
		for (var qE = "" + yU[0].pG, aB = 1; aB < 9; aB++) qE += "," + yU[aB].pG;
		for (aB = 0; aB < 9; aB++) qE += "," + yU[aB].kD;
		bi.eI.v7(120, qE)
	}
	this.db = function() {
		for (var yb = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yb.length; aB++) {
			var color = 6 === yb[aB] ? bA.o6 : bA.ne;
			this.yR.push(b9.canvas.yc(ab.get(3), yb[aB], color))
		}
		for (aB = 0; aB < aj.rn.yd; aB++) yW.push(aj.rn.ye - aj.rn.yd + aB);
		for (aB = 0; aB < aj.rn.yf; aB++) yW.push(aj.rn.yg + aB);
		var yh = aj.rn.yi(bJ.yh);
		for (aB = 0; aB < yh.length; aB++) yW.push(yh[aB]);
		! function() {
			var aB, g = bi.eI.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) yU[aB] = {
					pG: 1015 + aB,
					kD: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fD = parseInt(g[aB]),
						f6 = (fD = 0 <= fD && fD < aj.rn.ye ? fD : 0, parseInt(g[aB + 9]));
					f6 = 0 <= f6 && f6 < 1e3 ? f6 : 0, yU[aB] = {
						pG: fD,
						kD: f6
					}
				}
		}()
	}, this.show = function(lL, lM, yn) {
		var aB;
		if (yX = lL, yY = lM, yT = yn || 0, this.hX = !0, yV = [], 0 === yT)
			for (aB = 0; aB < 9; aB++) yV.push(yU[aB].pG);
		else {
			var f5 = 49 * yT,
				yn = f5 - 49;
			for (yn >= yW.length && (yT = 1, yn = 0, f5 = 49), aB = yn = (f5 = Math.min(f5, yW.length)) - 49; aB < f5; aB++) yV.push(yW[aB])
		}
		yV.push(1024);
		yn = yV.length, hh = Math.floor((a0.a1.hu() ? .075 : .0468) * h.hv), gap = Math.floor(hh / 3), (yZ = 10 * (yO = hh + gap)) > h.i && (yZ = h.i, gap = (yO = yZ / 10) - (hh = 3 * yO / 4)), yQ = bK.ds(yn, 10) + !!(yn % 10), (ya = yQ * yO) > h
			.j && (ya = h.j, gap = (yO = ya / yQ) - (hh = 3 * yO / 4)), yn = .5 * gap;
		n6 = Math.min(Math.max(lL - .5 * yZ + yn, yn), h.i - yZ + yn), n7 = Math.min(Math.max(lM - .5 * ya + yn, yn), h.j - ya + yn)
	}, this.gy = function(lL, lM, player) {
		if (!this.hX) return !1;
		if (this.yp(lL, lM)) {
			lL = bK.ht(bK.ds(lL - n6 + .5 * gap, yO), 0, 9);
			if ((lL += 10 * bK.ht(bK.ds(lM - n7 + .5 * gap, yO), 0, 9)) >= yV.length) return aL.ro(), !0;
			lM = yV[lL];
			if (1024 === lM) return this.show(yX, yY, yT + 1), !0;
			! function(pG) {
				for (var aB = 0; aB < 9; aB++) yU[aB].kD = Math.floor(.99 * yU[aB].kD);
				for (aB = 0; aB < 9; aB++)
					if (pG === yU[aB].pG) return yU[aB].kD = Math.min(yU[aB].kD + 30, 999), ym();
				yU.splice(5, 0, {
					pG: pG,
					kD: Math.max(yU[4].kD, 30)
				}), yU.pop(), ym()
			}(lM), player === aD.eV ? b7.hB.pF(lM) : b7.g7.pT(lM, player)
		}
		return aL.ro(), !0
	}, this.yp = function(lL, lM) {
		return !(lL < n6 - .5 * gap || lM < n7 - .5 * gap || n6 + yZ - .5 * gap <= lL || n7 + ya - .5 * gap <= lM)
	}, this.ud = function() {
		ue.fillStyle = bA.nd, ue.fillRect(n6 - .5 * gap, n7 - .5 * gap, yZ, ya);
		for (var hd = .5 * bb.yq, el = (ue.lineWidth = bb.yq, ue.strokeStyle = ue.fillStyle = bA.ng, ue.strokeRect(n6 - .5 * gap + hd, n7 - .5 * gap + hd, yZ - 2 * hd, ya - 2 * hd), ue.imageSmoothingEnabled = !0, yV.length), aB = 0; aB <
			el; aB++) this.yr(yV[aB], ue, n6 + aB % 10 * yO, n7 + bK.ds(aB, 10) * yO, hh);
		ue.imageSmoothingEnabled = !1
	}, this.yr = function(pG, hn, es, eu, hh) {
		var eP;
		pG >= 1024 - aj.rn.yd ? (eP = hh / this.yS, hn.setTransform(eP, 0, 0, eP, es, eu), hn.drawImage(this.yR[pG - 1024 + aj.rn.yd], 0, 0), hn.setTransform(1, 0, 0, 1, 0, 0)) : (b9.qX.textAlign(hn, 1), b9.qX.textBaseline(hn, 1), hn.font = b9.qX
			.sL(0, .89 * hh), hn.fillText(aj.rn.ys(pG), es + .5 * hh, eu + (.35 - b9.qX.yt + .56) * hh))
	}
}

function yM() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yd = 13, this.yf = this.emojis.length, this.yg = 676, this.ye = 1024, this.yu = this.emojis.indexOf("💀"), this.yv = this.yu + 1, this.yw = this.emojis.indexOf("🥇"), this.yx = this.emojis.indexOf("😊"), this.ys = function(fD) {
		return fD < this.yg ? String.fromCharCode(55356, 56806 + bK.ds(fD, 26), 55356, 56806 + fD % 26) : this.emojis[Math.min(fD - this.yg, this.yf - 1)]
	}, this.yi = function(qE) {
		for (var el = qE.length - 2, g = [], aB = 0; aB < el; aB++) {
			var yy = qE.charCodeAt(aB) - 56806,
				yz = qE.charCodeAt(aB + 2) - 56806;
			0 <= yy && yy < 26 && 0 <= yz && yz < 26 && (g.push(26 * yy + yz), aB += 3)
		}
		return g
	}, this.z0 = function(fD) {
		return fD < this.yg
	}, this.z1 = function(fD) {
		return fD >= 1024 - this.yd
	}, this.z2 = function(fD) {
		return fD >= this.yg && fD < this.yg + this.yv
	}
}

function c2() {
	this.so = new z3, this.vs = new z4, this.vu = new z5, this.db = function() {
		this.so.db()
	}
}

function z4() {
	this.w7 = function(qE) {
		for (var el = qE.length, i = bC, aB = 0; aB < el; aB++) i.a8(16, qE.charCodeAt(aB))
	}
}

function z3() {
	var z6 = new Uint8Array(64);
	this.db = function() {
		var aB;
		for (z6[0] = 45, z6[37] = 95, aB = 0; aB < 10; aB++) z6[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) z6[aB + 11] = 65 + aB, z6[aB + 38] = 97 + aB
	}, this.sq = function(z7) {
		for (var vx = bG, w5 = new Uint8Array(z7), aB = 0; aB < z7; aB++) w5[aB] = vx.pe(6);
		return w5
	}, this.sp = function(w5) {
		for (var el = w5.length, z8 = z6, g = [], aB = 0; aB < el; aB++) g.push(String.fromCharCode(z8[w5[aB]]));
		return g.join("")
	}, this.z9 = function(value, zA) {
		for (var z8 = z6, g = [], aB = 0; aB < zA; aB++) g.push(String.fromCharCode(z8[value >> 6 * (zA - 1 - aB) & 63]));
		return g.join("")
	}
}

function cA() {
	var zB, zC, zD;
	zB = [32, 65, 191, 913, 931], zC = [64, 127, 688, 930, 1155], zD = new Array(zB.length + 1);
	for (var aB = 0; aB < zD.length; aB++) {
		zD[aB] = 0;
		for (var f4 = aB - 1; 0 <= f4; f4--) zD[aB] += zC[f4] - zB[f4]
	}

	function zJ(f6) {
		for (var aB = zB.length - 1; 0 <= aB; aB--)
			if (f6 >= zB[aB] && f6 < zC[aB]) return aB;
		return -1
	}
	this.vy = function(qE) {
		return 0 !== (qE = qE.trim()).indexOf("Bot ") && 0 !== qE.indexOf("[Bot] ") && function(qE, zG, zH) {
			var el = (qE = qE.trim()).length;
			if (el < zG || zH < el) return !1;
			for (var f6, zI = 0, aB = 0; aB < el; aB++)
				if (f6 = qE.charCodeAt(aB), zI += 65 <= f6 && f6 <= 90 || 1040 <= f6 && f6 <= 1071 ? 1 : 0, -1 === zJ(f6)) return !1;
			if (3 < zI && zI > Math.floor(el / 2)) return !1;
			return !0
		}(qE, 3, 20)
	}, this.zK = function(qE) {
		for (var el = (qE = qE.trim()).length, g = [], aB = 0; aB < el; aB++) {
			var f6, gJ = zJ(f6 = qE.charCodeAt(aB));
			g.push(zD[gJ] + f6 - zB[gJ])
		}
		return g
	}, this.wC = function(g) {
		for (var f6, f5, qE = "", el = g.length, aB = 0; aB < el; aB++)
			for (f5 = 1; f5 < zD.length; f5++)
				if (g[aB] < zD[f5]) {
					f6 = zB[f5 - 1] + g[aB] - zD[f5 - 1], qE += String.fromCharCode(f6);
					break
				} return qE
	}, this.zL = function(qE) {
		for (var g = this.zK(qE), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zM = function(qE) {
		for (var g = new Array(Math.floor(qE.length / 3)), aB = 0; aB < qE.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qE.substring(aB, aB + 3));
		return this.wC(g)
	}, this.zN = function(qE) {
		for (var fD, g = [qE.length], aB = 0; aB < qE.length; aB++) g[aB] = qE.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qE.length; aB++) aB === qE.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fD = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fD + (fD < 26 ? 65 : 71)), aB++);
		return result
	}, this.zO = function(qE) {
		for (var f6, result = "", aB = 0; aB < qE.length; aB++) 48 <= (f6 = qE.charCodeAt(aB)) && f6 < 58 ? result += String.fromCharCode(f6) : 65 <= f6 && f6 < 75 ? result += "0" + (f6 - 65).toString() : 75 <= f6 && f6 < 91 ? result += (f6 - 65)
			.toString() : 97 <= f6 && f6 < 123 && (result += (f6 - 71).toString());
		return result
	}, this.zP = function(qE) {
		for (var el = qE.length, g = [], aB = 0; aB < el; aB++)(f6 = qE.charCodeAt(aB)) < 58 ? g.push(qE[aB]) : (f6 -= f6 < 91 ? 65 : 71, g.push(String(bK.ds(f6, 10))), g.push(String(f6 - 10 * bK.ds(f6, 10))));
		var el = g.length - 2,
			f6 = 0,
			w5 = [];
		for (aB = 0; aB < el; aB += 3) w5[f6++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return w5
	}, this.zQ = function() {
		for (var e5, zR = "", aB = 0; aB < 6; aB++) e5 = 48 + ax.random() % 36, e5 += 58 <= e5 ? 39 : 0, zR += String.fromCharCode(e5);
		return zR
	}
}

function z5() {
	this.zK = function(qE, wl, zS) {
		for (var zT = [], el = qE.length, max = 0, aB = 0; aB < el; aB++) {
			var fD = qE.charCodeAt(aB);
			zT.push(fD), max = Math.max(max, fD)
		}
		var wm = max < 128 ? 7 : 16;
		for (zS.a8(wl, el), zS.a8(1, +(16 == wm)), aB = 0; aB < el; aB++) zS.a8(wm, zT[aB])
	}
}

function d8() {
	this.zU = new zV, this.result = new zW, this.zX = new zY, this.zZ = new za, this.zb = new zc, this.zd = new ze, this.db = function() {
		this.result.db()
	}
}

function zY() {
	this.zf = function() {
		for (var el = al.k9, zg = al.kA, zh = [], aB = 0; aB < el; aB++) {
			var gJ = zg[aB];
			b9.g7.zi(gJ) && zh.push(gJ)
		}
		return zh
	}, this.zj = function() {
		if (0 === bf.kV[aD.zk]) return this.zl();
		bg.lg(aD.zk);
		for (var zh = [], el = bN.fG[0], fP = bN.fP, aB = 0; aB < el; aB++) {
			var gJ = fP[aB];
			b9.g7.zi(gJ) && zh.push(gJ)
		}
		return zh
	}, this.zl = function() {
		var gJ = li[0];
		return b9.g7.zi(gJ) ? [gJ] : []
	}, this.zm = function(zh) {
		for (var el = zh.length, dr = 0, gZ = ag.gZ, aB = 0; aB < el; aB++) dr += gZ[zh[aB]];
		return dr
	}
}

function zV() {
	function zo() {
		if (2 === aD.zs) return 1;
		av.zt(), aD.zs = 2, aD.zu = aD.zv
	}

	function zq() {
		bQ.zb.zw(), aX.show(1 === aD.zx, !1, 2 === aD.zx), bQ.result.zw(), bQ.zd.j1(), bQ.zZ.j1(), aN.zy(!0), aN.zz(247), aN.zz(956), aN.zz(957), aV.mS(!0), aW.mS(!0), av.mS(), bB.a00(), aD.gu && be.a01.a02(), be.dj = !0, ba.a03(), a0.a1.setState(0)
	}
	this.zn = function() {
		zo() || (aD.zp = 2, zq())
	}, this.zr = function() {
		zo() || (aD.zp = 1, zq())
	}
}

function za() {
	this.j1 = function() {
		var a0B;
		2 === aD.zp ? (aN.a04(0, 59), aH.nF(2700)) : aD.kQ < 7 ? (a0B = bf.kV[aD.zk], a0B = bf.a0D[a0B], aQ.a0E(L(25, [a0B]), 2, 1, 12), aN.yL(0, L(26, [a0B]), 40, 0, bA.ng, bA.nd, -1, !1), aH.nF(2700)) : 8 === aD.kQ ? (aD.zx ? aN.a04(aD.a09,
			2) : aN.a04(1 - aD.eV, 3), aD.a0A.yC(aD.a09), aH.n1(aD.a09, 2700, !1, 0)) : 9 === aD.kQ ? (aN.a0F(), aH.nF(2700)) : (aN.a0G(aD.a09), aH.n1(aD.a09, 2700, !1, 0))
	}
}

function ze() {
	function a0Q() {
		var t9;
		return 8 === aD.kQ ? 0 : (t9 = Math.floor(ag.yK[aD.eV] / 50), (t9 = Math.min(t9, 400)) / 100)
	}

	function a0I() {
		var t9 = a0Q();
		0 !== t9 && aN.yL(440, L(27, [t9.toFixed(2)]), 40, 0, bA.ny, bA.nd, -1, !1)
	}
	this.j1 = function() {
		var a0J;
		0 === bQ.result.a0H || 0 === bQ.result.zh.length || 8 === aD.kQ ? b9.g7.gx(aD.eV) && a0I() : (function(a0J) {
			7 !== aD.kQ && 10 !== aD.kQ || 0 !== aD.zx && aN.yL(600, L(31, [a0J.toFixed(2)]), 40, 0, bA.ng, bA.nd, -1, !1)
		}(a0J = function() {
			aN.yL(520, L(28), 40, 0, bA.ng, bA.nd, -1, !1);
			for (var zh = bQ.result.zh, el = zh.length, gZ = ag.gZ, g = [], aB = 0; aB < el; aB++) {
				var gJ = zh[aB];
				g.push({
					gJ: gJ,
					dr: gZ[gJ]
				})
			}
			g.sort((f4, f5) => f5.dr - f4.dr);
			var a0D = ag.a0R,
				dr = bQ.result.a0S,
				t9 = bQ.result.a0H,
				qE = "",
				a0J = 0;
			for (aB = 0; aB < el; aB++) {
				var hV = g[aB].dr * t9 / (100 * dr),
					a0U = a0D[g[aB].gJ] + ": " + hV.toFixed(2) + "   ";
				g[aB].gJ === aD.eV && (a0J = hV), 2 < aB && 4 !== el ? 3 === aB && (qE += "(" + L(29, [el - 3]) + ")") : qE += a0U
			}
			aN.yL(560, b9.rW.a0V(qE), 40, 0, bA.ny, bA.nd, -1, !1), a0J ? aN.yL(580, L(30, [a0J.toFixed(2) + " + " + a0Q().toFixed(2)]), 40, 0, bA.ny, bA.nd, -1, !1) : b9.g7.gx(aD.eV) && a0I();
			return a0J
		}()), 2 === aD.zp || 7 <= aD.kQ || function(a0J) {
			var zh = bQ.result.zh,
				el = zh.length,
				a0W = ag.a0W,
				gZ = ag.gZ,
				a0X = [];
			loop: for (var aB = 0; aB < el; aB++) {
				var gJ = zh[aB],
					a0Y = b9.rW.a0Z(a0W[gJ]);
				if (null !== a0Y) {
					for (var a0a = gZ[gJ], f5 = a0X.length - 1; 0 <= f5; f5--)
						if (a0Y === a0X[f5].name) {
							a0X[f5].dr += a0a, a0X[f5].g.push({
								gJ: gJ,
								dr: a0a
							});
							continue loop
						} a0X.push({
						name: a0Y,
						dr: a0a,
						g: [{
							gJ: gJ,
							dr: a0a
						}]
					})
				}
			}
			if (0 !== a0X.length) {
				a0X.sort((f4, f5) => f5.dr - f4.dr);
				var g = a0X[0].g,
					a0b = (g.sort((f4, f5) => f5.dr - f4.dr), "[" + a0X[0].name + "]"),
					a0c = 512 * bQ.result.a0H / 26214400,
					l1 = (aN.yL(0, L(32, [a0b, a0c.toFixed(4)]), 40, 0, bA.ng, bA.nd, -1, !1), g.length),
					w3 = a0X[0].dr,
					a0d = 1e4 * a0c;
				for (aB = 0; aB < l1; aB++)
					if (g[aB].gJ === aD.eV) {
						aN.yL(600, L(33, [(a0d * g[aB].dr / (10 * w3)).toFixed(2)]), 40, 0, bA.ng, bA.nd, -1, !1), aN.yL(640, L(34, [(.2 * a0J).toFixed(2), a0b]), 40, 0, bA.ng, bA.nd, -1, !1);
						break
					} aD.gu || aN.yL(720, L(35) + bJ.a0e, 736, 0, bA.ng, bA.o4, -1, !1)
			}
		}(a0J))
	}, this.a0N = function() {
		var a0O, wV;
		aD.kS || (a0O = ag, wV = aD.eV, 0 === a0O.a0P[wV]) || a0O.jB[wV] < 1 || 2 * a0O.pw[wV] > 3 * (a0O.jA[wV] + a0O.jB[wV]) || a0I()
	}
}

function zW() {
	this.db = function() {
		this.a0f = 0, this.zh = [], this.a0S = 0, this.a0H = 0
	}, this.zw = function() {
		var s8;
		aD.kS || (s8 = this, 2 === aD.zp ? s8.zh = bQ.zX.zf() : aD.hf ? s8.zh = bQ.zX.zj() : s8.zh = bQ.zX.zl(), s8.a0f = bh.a0h.a0i(), s8.a0S = Math.max(1, bQ.zX.zm(s8.zh)), b7.g7.pc(), 8 === aD.kQ ? bQ.result.a0H = 0 : s8.a0H = 100 * bQ.result
			.a0f * (1 + aD.a0k))
	}
}

function zc() {
	this.zw = function() {
		if (2 === aD.zp) aD.zx = 2;
		else {
			if (8 === aD.kQ) b9.g7.jW(0) || 0 === ag.mg[0] ? aD.a09 = 1 : b9.g7.jW(1) || 0 === ag.mg[1] ? aD.a09 = 0 : aD.a09 = +(ag.gZ[1] > ag.gZ[0]);
			else {
				if (aD.hf) {
					var kf = bg.a0m();
					if (aD.zk = kf, bf.kV[kf]) return void(aD.zx = +(bf.ej[aD.eV] === kf))
				}
				aD.a09 = li[0]
			}
			aD.zx = +(aD.a09 === aD.eV)
		}
	}
}

function dD() {
	this.id = 0, this.dt = 0, this.vE = null, this.vF = null, this.vG = null, this.vM = null, this.a1 = new a0n, this.db = function() {
		var self, dt;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dt = Android.getVersion()) < 12 || (self.dt = dt, self.id = 1, self.vF = Android),
			function(self) {
				var dt;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vG = mwIOSdataX, self.vM = window.webkit.messageHandlers.iosCommandA, dt = self
					.vG.version, self.dt = dt ? Number(dt) : 0)
			}(this),
			function(self) {
				var vE;
				if (0 === self.id) {
					try {
						if (!(vE = window.localStorage)) return;
						vE.setItem("tls7", "1"), vE.removeItem("tls7")
					} catch (error) {
						return
					}
					self.vE = vE
				}
			}(this)
	}
}

function a0n() {
	this.a0r = function() {
		bi.ry.vZ(), bi.ry.va(), az.y.close(0, 3255), 0 === a0.id ? a0.vE && a0.vE.clear() : 1 === a0.id ? a0.vF.saveString(199, "") : 2 === a0.id && a0.vM.postMessage("clear")
	}, this.a0s = function() {
		2 === a0.id ? a0.vM.postMessage("showConsentForm") : 1 === a0.id && a0.vF.setState(7)
	}, this.a0t = function() {
		this.setState(14)
	}, this.hu = function() {
		return 1 === bi.eI.v9(2)
	}, this.a0u = function() {
		bi.eI.v7(102, "")
	}, this.setState = function(a0v) {
		1 === a0.id && 5 <= a0.dt && a0.vF.setState(a0v)
	}, this.a2 = function() {
		var a0w;
		1 === a0.id && 7 <= a0.dt ? a0.vF.setState(5) : ((a0w = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a0w.toString())
	}, this.dg = function() {
		1 !== a0.id || a0.dt < 17 || a0.vF.saveString(23, document.documentElement.outerHTML)
	}, this.eG = function() {
		0 !== a0.id && (1 === a0.id ? a0.vF.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dt ? a0.vM.postMessage("prepare ad 1770251391") : a0.vM.postMessage("loadAds 1770251391")))
	}, this.eL = function(dr) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dt ? a0.vM.postMessage("show ad " + dr) : a0.vM.postMessage("showAd"), !0)
	}, this.dl = function() {
		2 === a0.id && a0.dt < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bJ.a0x + "' target='_blank'>" +
			bJ.a0x + "</a>", !0, [new w("⬅️ " + L(36), function() {
				t.u(0)
			}, bA.oL)]))
	}
}

function dS() {
	function a10(e) {
		lQ(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(36), function() {
				t.a13()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bA.o3)]))
	}

	function a1B(e) {
		lQ(e), t.u(4, 5, new v(L(37), a17(e), !0))
	}

	function a17(e) {
		var qE = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qE : 4527 === e ? "Player already in lobby" + qE : 4530 === e ? "Lobby Timeout" + qE : 4528 === e ? "Lobby Kick: Another login detected." + qE : 4540 === e ?
			"You have been kicked." + qE : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qE : "Unknown error" + qE
	}

	function lQ(e) {
		a15(e), t.y.z()
	}

	function a15(e) {
		var a0v = aa.a14();
		6 === a0v ? az.y.a1D(e) : bm.a11 ? (t.x(), bm.u7(), az.y.close(az.y.a12, 3256)) : 8 === a0v && aD.a1E(!0)
	}
	this.p = [], this.a0y = function(a0z, e) {
		if (this.p.push(e), 8 === t.sl && 0 === a0z)
			if (4211 === e) a10(e);
			else {
				if (bm.a11 && (4495 === e || 4480 === e) && az.y.a12 !== a0z) return void t.a13();
				if (8 !== aa.a14() && a15(), 4480 === e) return bi.ry.vb(), void t.u(4, 0, new v(L(39), L(40), !0));
				t.u(4, 0, new v(L(37), a17(e), !0))
			}
		else {
			var a0v = aa.a14();
			if (6 === a0v) {
				if (4211 === e) return void a10(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a18(a0z)
			} else {
				if (!bm.a11) return 8 === a0v ? void(a0z !== az.y.a19 || aD.kS || 1 !== aD.zs || aD.gu || aN.a1A(L(38, [e]))) : void 0;
				if (a0z !== az.y.a12) return
			}
			a1B(e)
		}
	}, this.a1C = function(e) {
		this.p.push(e), 8 === aa.a14() ? aD.kS || 1 !== aD.zs || aN.a1A(L(38, [e])) : a1B(e)
	}, this.s = function() {
		this.p.push(3268), lQ(3268)
	}
}

function d2() {
	var a1F, a1G, a1H = -15e3,
		a1I = !1;

	function gy(e) {
		a1c() || (a1I = !0, a1d(e, 1), az.y.a1e(az.y.a19), a1f(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1R(e) {
		a1H = be.eK, a1d(e, 1), az.y.a1e(az.y.a19), 0 < e.touches.length && (a1F = Math.floor(h.k * e.touches[0].clientX), a1G = Math.floor(h.k * e.touches[0].clientY), at.a1R(e) || a1f(a1F, a1G))
	}

	function a1f(es, eu) {
		t.gy(es, eu), 0 === aD.zs ? aa.gy(es, eu) : bB.a1g(es, eu) || bd.gy(es, eu) || aX.gy(es, eu) || aL.a1h(es, eu) || aP.gy(es, eu) || 0 <= aM.gy(es, eu) || av.gy(es, eu) || bI.a1i(es, eu) || aL.a1j(es, eu)
	}

	function a1N(e) {
		a1c() || (a1I = !0, a1d(e, 1), a1k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1S(e) {
		a1H = be.eK, a1d(e, 1), 0 < e.touches.length && (a1F = Math.floor(h.k * e.touches[0].clientX), a1G = Math.floor(h.k * e.touches[0].clientY), at.a1S(e) || a1k(a1F, a1G))
	}

	function a1k(es, eu) {
		t.a1N(es, eu), 0 === aD.zs ? aa.a1N(es, eu) : (bS.gs(es, eu), bd.a1N(es, eu) || (aM.a1N(es, eu), aL.hX() ? aL.a1N(es, eu) : aR.gz ? aR.a1N(es) && (be.dj = !0) : (aV.a1N(es, eu), aS.nB && aS.a1N(es, eu) && (be.dj = !0))))
	}

	function a1P(e) {
		a1c() || (a1d(e, 1), a1l(), 0 === aD.zs ? (aa.click(-1024, -1024), aT.rY()) : (aV.a1m(-1024, -1024), aM.a1N(-1024, -1024), aR.a1n(), aS.nB = !1))
	}

	function a1O(e) {
		a1c() || (a1d(e, 1), a1o(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bI.a1L && (bI.a1L = !1, e.preventDefault()))
	}

	function click(e) {
		a1c() || a1d(e, 1)
	}

	function a1T(e) {
		a1H = be.eK, a1d(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.zs ? aS.nB = !1 : at.a1p() || (a1o(a1F, a1G, !1), bI.a1L && (bI.a1L = !1, e.preventDefault()))
	}

	function a1U(e) {
		a1H = be.eK, a1d(e, 1), a1o(a1F, a1G, !1), bI.a1L && (bI.a1L = !1, e.preventDefault())
	}

	function a1V(e) {}

	function a1W(e) {}

	function a1X(e) {
		a1c() || a1d(e, 0)
	}

	function a1o(es, eu, a1q) {
		a1l(), 0 === aD.zs ? aa.click(es, eu) : (aV.a1m(es, eu), bd.a1m(), aR.a1n(), aS.nB = !1, aL.click(es, eu, a1q) ? be.dj = !0 : aM.a1O(es, eu))
	}

	function a1l() {
		t.a1l()
	}

	function a1Q(e) {
		var es, eu, deltaY;
		a1c() || (a1d(e, 1), az.y.a1e(az.y.a19), es = Math.floor(h.k * e.clientX), eu = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1Q(es, eu, deltaY), 0 === aD.zs ? aa.a1Q(es, eu, deltaY) : aV.a1Q(es, eu,
			deltaY) || (aR.a1r(es, eu) ? aR.a1Q(deltaY) && (be.dj = !0) : aS.a1Q(es, eu, deltaY)))
	}

	function a1Y(e) {
		a1d(e, 0)
	}

	function a1d(e, id) {
		0 === id && t.hX() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a14() && e.preventDefault()
	}

	function a1Z(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1c() || 0 < h.sT || (e = e.code) && e.length && (bW.f6(e, 18) ? aq.a1t(3) : bW.f6(e, 22) ? aq.a1t(0) : bW.f6(e, 20) ? aq.a1t(1) : bW.f6(e, 24) ? aq.a1t(2) : bW.f6(e, 10) ? aR.a1u(31 / 32) : bW.f6(e, 8) ? aR.a1u(32 / 31) : bW.f6(e, 6) ? aR
			.a1u(7 / 8) : bW.f6(e, 4) ? aR.a1u(8 / 7) : bW.f6(e, 14) ? 0 !== aD.zs && aS.a1Q(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bW.f6(e, 16) ? 0 !== aD.zs && aS.a1Q(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bW.f6(e, 0) ? aD
			.zs && bS.gt(0) : bW.f6(e, 2) ? aD.zs && bS.gt(1) : bW.f6(e, 30) ? aD.zs && bS.gt(2) : bW.f6(e, 26) ? aD.zs && bS.hR() : bW.f6(e, 28) && aD.zs && bS.hW())
	}

	function a1a(e) {
		if (!a1c() && !(0 < h.sT || be.eK < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a1v(1) || "Space" === code && t.a1v(0))) return bm.a11 ? bm.uD.a1v(code) ? void 0 : void("Escape" === code && bI.fE()) : void(8 !== aa.a14() && aa.a1v(e) ? be.dj = !0 : "Escape" ===
				code ? bI.fE() : bW.f6(code, 18) ? aq.a1w(3) : bW.f6(code, 22) ? aq.a1w(0) : bW.f6(code, 20) ? aq.a1w(1) : bW.f6(code, 24) ? aq.a1w(2) : bW.f6(code, 12) ? bB.a1x(!aD.n9) : "Space" === code && aD.zs && (aM.gv && aM.a1y(), aD
					.gu) && bB.a1z(!1))
		}
	}

	function a1b() {
		"hidden" !== document.visibilityState && (be.dj = !0)
	}

	function a1c() {
		return a1H + 15e3 > be.eK
	}

	function resize() {
		h.a21()
	}
	this.a1J = 0, this.a1K = "", this.a1L = !1, this.db = function() {
		a1M.addEventListener("mousedown", gy, {
			passive: !1
		}), a1M.addEventListener("mousemove", a1N, {
			passive: !1
		}), a1M.addEventListener("mouseup", a1O, {
			passive: !1
		}), a1M.addEventListener("click", click, {
			passive: !1
		}), a1M.addEventListener("mouseleave", a1P, {
			passive: !1
		}), a1M.addEventListener("wheel", a1Q, {
			passive: !1
		}), a1M.addEventListener("touchstart", a1R, {
			passive: !1
		}), a1M.addEventListener("touchmove", a1S, {
			passive: !1
		}), a1M.addEventListener("touchend", a1T, {
			passive: !1
		}), a1M.addEventListener("touchcancel", a1U, {
			passive: !1
		}), a1M.addEventListener("dragover", a1V), a1M.addEventListener("drop", a1W), a1M.addEventListener("dblclick", a1X), document.addEventListener("contextmenu", a1Y), document.addEventListener("keydown", a1Z), document.addEventListener(
			"keyup", a1a), document.addEventListener("visibilitychange", a1b), window.addEventListener("resize", resize)
	}, this.a1i = function(es, eu) {
		return !!bB.gy(es, eu) || !!(aV.gy(es, eu) || aS.gy(es, eu) || aR.gy(es, eu) || aN.gy(es, eu))
	}, this.a20 = a1c, this.qz = function() {
		return !a1I || 0 < a1H
	}, this.fE = function() {
		if (!t.hX()) return 8 === aa.a14() ? aD.n9 ? void bB.a1x(!1) : bd.hX ? void bd.a1y() : void aM.a1y() : void(7 !== aa.a14() && 6 === aa.a14() && aZ.a22());
		t.a1v(2)
	}
}

function by() {
	this.qX = new a23, this.qf = new a24, this.g7 = new a25, this.rW = new a26, this.y4 = new a27, this.a28 = new a29, this.canvas = new a2A, this.color = new a2B, this.a2C = new a2D, this.db = function() {
		this.qX.vY()
	}
}

function a24() {
	this.wT = function(g) {
		g.fill(0)
	}, this.a2E = function(g) {
		for (var el = g.length, aB = 0; aB < el; aB++) g[aB] = []
	}, this.a2F = function(yy, a2G) {
		for (var yz = bN.fL, aB = 0; aB < 3; aB++) yz[aB] = a2G * yy[aB];
		return yz
	}, this.a2H = function(yy, yz, a2I) {
		for (var jO = 0, aB = 0; aB < 3; aB++) jO += Math.abs(yy[aB] - yz[aB]);
		return a2I <= jO
	}, this.a2J = function(yy, a2K) {
		for (var aB = 0; aB < 3; aB++) yy[aB] = bK.ht(yy[aB] + a2K, 0, 255);
		return yy
	}, this.a2L = function(g, t5, t6) {
		t6 = t6 || g.length - 1;
		for (var a2M = 0, aB = t5 = t5 || 0; aB <= t6; aB++) a2M += g[aB];
		return a2M
	}, this.a2N = function(g, a2O) {
		for (var aB, a2P, el = g.length, a2Q = [], f4 = el - 1; 0 <= f4; f4--) {
			for (aB = a2P = 0; aB < el; aB++) a2O(g[aB]) < a2O(g[a2P]) && (a2P = aB);
			el--, a2Q.push(g[a2P]), g[a2P] = g[el], g.pop()
		}
		return a2Q
	}, this.min = function(g) {
		var aB, fD, el = g.length;
		if (0 === el) return 0;
		for (fD = g[0], aB = 1; aB < el; aB++) fD = Math.min(fD, g[aB]);
		return fD
	}, this.max = function(g) {
		var el = g.length;
		if (0 === el) return 0;
		for (var fD = g[0], aB = 1; aB < el; aB++) fD = Math.max(fD, g[aB]);
		return fD
	}, this.a2R = function(g, fD) {
		for (var el = g.length, gE = 0, aB = 0; aB < el; aB++) gE += g[aB] > fD;
		return gE
	}, this.a2S = function(a2T, a2U, min) {
		for (var el = a2U[0], aB = el - 1; 0 <= aB; aB--) a2T[aB] < min && (a2T[aB] = a2T[--el]);
		a2U[0] = el
	}, this.a2V = function(g, el, value) {
		for (var aB = 0; aB < el; aB++) g[aB] -= value
	}, this.a2W = function(g) {
		for (var el = g.length, aB = 0; aB < el; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2X = function(qE, g, a2Y) {
		g.fill(0);
		for (var t9 = qE.split(","), el = Math.min(t9.length, g.length), aB = 0; aB < el; aB++) g[aB] = Math.min(parseInt(t9[aB]), a2Y)
	}, this.a2Z = function(qE, g, rT) {
		g.fill("");
		for (var t9 = qE.split('"'), el = Math.min(t9.length, 2 * g.length), hd = 0, aB = 1; aB < el; aB += 2) g[hd++] = t9[aB].slice(0, rT)
	}, this.a2a = function(g, gE) {
		if (0 === gE) g.fill(0);
		else {
			var a2M = this.a2L(g),
				el = g.length;
			if (0 === a2M) g.fill(bK.ds(gE, el));
			else
				for (var aB = 0; aB < el; aB++) g[aB] = bK.ds(gE * g[aB], a2M);
			if (0 === (a2M = this.a2L(g))) g[1] = gE;
			else
				for (var hd = 0; a2M++ < gE;) g[hd = (hd + 1) % el] && g[hd]++
		}
	}, this.a2b = function(g) {
		if (!g) return 0;
		var el = g.length;
		if (0 === el) return 0;
		for (var fD = g[el - 1], aB = el - 2; 0 <= aB; aB--)
			if (g[aB] !== fD) return aB + 2;
		return 1
	}, this.a2c = function(g) {
		for (var a2M = 0, aB = 0; aB < g.length; aB++) a2M += g[aB].length;
		return a2M
	}, this.a2d = function(a2e) {
		for (var g = [], aB = 0; aB < a2e.length; aB++) g = g.concat(a2e[aB]);
		return g
	}, this.has = function(g, fD) {
		for (var el = g.length, aB = 0; aB < el; aB++)
			if (g[aB] === fD) return !0;
		return !1
	}
}

function a2A() {
	this.yc = function(a2f, e6, a2g) {
		var hh = a2f.height,
			a2h = b9.qX.wJ(hh, hh),
			hn = b9.qX.getContext(a2h);
		return function(i, hn, a2g) {
			hn.fillStyle = a2g, hn.beginPath(), hn.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hn.fill()
		}(hh, hn, a2g), hn.drawImage(a2f, -e6 * hh, 0), a2h
	}, this.a2j = function(a2k) {
		var hn, hk, hh = a2k.height;
		return a2k.width === hh && (hk = (hn = b9.qX.getContext(a2k, !0)).getImageData(0, 0, hh, hh), b9.a28.a2l(hk.data, hh, hh, .9), hn.putImageData(hk, 0, 0)), a2k
	}
}

function a2B() {
	this.a2m = function(fD) {
		return [fD >> 12 & 63, fD >> 6 & 63, 63 & fD]
	}, this.a2n = function(fD) {
		for (var g = this.a2m(fD), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a2o = function(fD) {
		fD = this.a2n(fD);
		return b9.color.nY(fD[0], fD[1], fD[2])
	}, this.a2p = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nY = function(e5, t9, f5) {
		return "rgb(" + e5 + "," + t9 + "," + f5 + ")"
	}, this.na = function(e5, t9, f5, f4) {
		return "rgba(" + e5 + "," + t9 + "," + f5 + "," + f4.toFixed(3) + ")"
	}, this.r1 = function(f6) {
		for (var g = f6.split("(")[1].split(","), fK = bN.fK, aB = 0; aB < 3; aB++) fK[aB] = parseInt(g[aB]);
		return 4 === g.length ? fK[3] = 255 * parseFloat(g[3].slice(0, -1)) : fK[3] = 255, fK
	}, this.r2 = function(a2q, eo) {
		for (var g = a2q.slice(a2q.indexOf("(") + 1, a2q.indexOf(")")).split(","), fK = bN.fK, aB = 0; aB < 3; aB++) fK[aB] = bK.ht(parseInt(g[aB].trim(), 10) + eo, 0, 255);
		return 3 === g.length ? this.nY(fK[0], fK[1], fK[2]) : (a2q = parseFloat(g[3].trim()), this.na(fK[0], fK[1], fK[2], a2q = 0 === a2q ? .3 : a2q))
	}, this.a2r = function(g) {
		for (var qE = "#", aB = 0; aB < 3; aB++) {
			var e5 = g[aB].toString(16);
			qE += 1 === e5.length ? "0" + e5 : e5
		}
		return qE
	}, this.a2s = function(qE) {
		var e5, t9;
		return qE.length < 7 ? bA.nX : (e5 = parseInt(qE.slice(1, 3), 16), t9 = parseInt(qE.slice(3, 5), 16), qE = parseInt(qE.slice(5, 7), 16), this.nY(e5, t9, qE))
	}
}

function a27() {
	this.a2t = function(qE, font, maxWidth) {
		if (font && (ue.font = font), ue.measureText(qE).width <= maxWidth) return qE;
		for (var aB = qE.length - 1; 1 <= aB; aB--)
			if (qE = qE.substring(0, aB), ue.measureText(qE + "...").width <= maxWidth) return qE + "...";
		return "..."
	}
}

function a2D() {
	var a2v = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a2w = function(eK) {
		var a2y, qE = new Date(eK.getTime() - 6e4 * eK.getTimezoneOffset()).toUTCString();
		return qE.length < 12 || (qE = qE.substring(5, qE.length), 0 === (eK = eK.getTimezoneOffset())) ? qE : (a2y = (eK < 0 ? "+" : "-") + bK.ds(Math.abs(eK), 60), 0 == (eK = Math.abs(eK) % 60) ? qE + a2y : qE + a2y + ":" + (eK < 10 ? "0" :
			"") + eK)
	}, this.a2z = function(eK) {
		var qE = eK.toUTCString();
		return qE.length < 12 ? qE : function(eK) {
			return a2v[eK.getUTCDay()]
		}(eK) + ", " + qE.substring(5, qE.length - 4)
	}
}

function a23() {
	var a31 = null;
	this.yt = 0, this.vY = function() {
		var fD = bi.eI.data[5].value;
		a31 = "px " + fD, "Trebuchet MS" !== fD && (a31 += ", Trebuchet MS"), this.yt = hg(32, 32, ["a", "b", "m"], 200, a31)
	}, this.wJ = function(i, j) {
		var f6 = document.createElement("canvas");
		return f6.width = i, f6.height = j, f6
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(y4, i, j) {
		return y4.getImageData(0, 0, i, j)
	}, this.sL = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a31 : 1 === type ? "bold " + size + a31 : 2 === type ? "lighter " + size + a31 : 3 === type ? "italic " + size + a31 : 4 === type ? "oblique " + size + a31 : 5 === type ? "small-caps " +
			size + a31 : "small-caps bold " + size + a31
	}, this.textAlign = function(hn, id) {
		hn.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hn, id) {
		hn.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qh = function(e, code, color) {
		color = this.qg(bb.sN) + " solid " + (color || bA.ng);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tB = function(e, es, eu, i, j) {
		e = e.style;
		e.left = this.tC(es), e.top = this.tC(eu), e.width = this.tC(i), e.height = this.tC(j)
	}, this.qY = function(fD) {
		return 1 + fD * a0.a1.hu()
	}, this.rq = function(nI, gK) {
		return nI * this.qY(void 0 === gK ? .5 : gK) * h.hv / h.k
	}, this.tA = function(nI, gK) {
		return nI * this.qY(void 0 === gK ? .5 : gK) * h.hv
	}, this.sr = function(nI, gK, a32) {
		return this.qY(gK) * Math.min(nI * h.hv, a32 * h.i) / h.k
	}, this.qg = function(fD) {
		return fD.toFixed(1) + "px"
	}, this.tC = function(fD) {
		return this.a34(fD).toFixed(1) + "px"
	}, this.a34 = function(fD) {
		return fD / h.k
	}, this.a35 = function(sb, a36) {
		for (var qE = "<ul>", el = sb.length, aB = 0; aB < el; aB++) qE += "<li>" + sb[aB] + ": <a href='" + a36[aB] + "' target='_blank'>" + a36[aB] + "</a></li>";
		return qE += "</ul>"
	}, this.a37 = function(a38) {
		return "<a href='" + a38 + "' target='_blank'>" + a38 + "</a>"
	}, this.a39 = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3A = function(e) {
		var dr = e.textContent;
		b9.rW.a3B(dr, "✔") || (1 === dr.length ? e.textContent = "✔" : e.textContent = dr + " ✔", setTimeout(function() {
			e.textContent = dr
		}, 500))
	}, this.measureText = function(qE) {
		return ue.measureText(qE).width
	}, this.t1 = function(a3C) {
		a3C.style.overflowX = "auto", a3C.style.overflowY = "hidden", a3C.style.whiteSpace = "nowrap", a3C.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tE = this.scrollLeft, e.preventDefault())
		}), a3C.addEventListener("scroll", function() {
			this.tE = this.scrollLeft
		})
	}
}

function a25() {
	this.gw = function(a0v) {
		return 0 === a0v ? 1 === aD.zs && aD.h9 : 1 === a0v ? 1 === aD.zs && !aD.h9 : 2 === aD.zs
	}, this.gx = function(player) {
		return 0 !== ag.mg[player] && 2 !== ag.a3D[player]
	}, this.a3E = function(player) {
		return player === aD.eV && 2 !== ag.a3D[player]
	}, this.kk = function(player, jI) {
		return player !== jI && (0 === bf.ej[player] || bf.ej[player] !== bf.ej[jI])
	}, this.ls = function() {
		return al.k9 < 2 ? 0 : aD.hf ? 1 < bg.a3F() : ag.gZ[li[1]]
	}, this.a3G = function() {
		var k9 = al.k9;
		if (0 !== k9) {
			if (!aD.hf) return !this.jW(li[0]);
			for (var ej = bf.ej, kf = bg.kg(), kA = al.kA, aB = k9 - 1; 0 <= aB; aB--) {
				var gJ = kA[aB];
				if (ej[gJ] === kf && !this.jW(gJ)) return 1
			}
		}
		return 0
	}, this.a3H = function(player) {
		return player === aD.eV
	}, this.jW = function(player) {
		return player >= aD.k8 || 2 === ag.a3D[player]
	}, this.l4 = function(player) {
		return 0 !== ag.mg[player]
	}, this.zi = function(player) {
		return player < aD.k8
	}, this.pu = function(a3I, a3J) {
		return a3I !== a3J
	}, this.gA = function(player, fD) {
		var min;
		return fD = this.a3K(player, fD), ag.gn[player] += fD, ag.a3L[player] && (min = Math.min(ag.a3L[player], ag.gn[player]), ag.a3L[player] -= min, ag.gn[player] -= min), fD
	}, this.a3K = function(player, fD) {
		var a3M = ag.gn[player];
		return fD = Math.min(fD, ag.gZ[player] * aD.a3N - a3M), fD = Math.min(fD, aD.a3O - a3M), Math.max(fD, 0)
	}, this.mF = function(player, iL, a3P, a3Q) {
		var a3M = ag.gn[player],
			iL = bK.ds(a3M * (iL + 1), 1024),
			a3P = bK.ds(a3P * a3M, 1024),
			iL = Math.min(iL, a3M - a3P);
		return 10 === aD.kQ && (iL = b3.a3S(player, iL)), bN.fI[0] = iL, bN.fI[1] = a3P, a3Q <= iL
	}, this.pO = function(player, p6, p5) {
		var player = ag.gn[player],
			a3R = bK.ds(64 * player, 1024),
			player = (p6 = Math.min(p6, player - a3R), this.a3U(p6));
		return a3R += player, p6 = this.a3K(p5, p6 -= player), bN.fI[0] = p6, bN.fI[1] = a3R, 1 <= p6
	}, this.pQ = function(p6, p5) {
		var a3T = this.a3U(p6);
		return p6 = this.a3K(p5, p6 -= a3T), bN.fI[0] = p6, bN.fI[1] = a3T, 1 <= p6
	}, this.iK = function(player, a3V) {
		return bK.ds(ag.gn[player] * (a3V + 1), 1024)
	}, this.a3U = function(a3W) {
		return bK.ds(Math.max(2142 - be.k5(), 0) * a3W, 2142)
	}, this.a3X = function(player, a3P) {
		a3P = bK.ds(a3P * ag.gn[player], 1024);
		bN.fI[1] = a3P, ag.gn[player] -= a3P
	}, this.g8 = function(player, a3Y) {
		var fW, fY, f5 = ag.gn[player];
		return a3Y <= f5 ? ag.gn[player] -= a3Y : (ag.gn[player] = 0, fY = ag.a3L[player] + (fW = 5 * ((f5 = a3Y - f5) >> 2)), bc.gB(player, fW - f5, 12), fY <= aD.a3Z ? ag.a3L[player] = fY : (ag.a3L[player] = aD.a3Z, bc.gB(player, fY - aD.a3Z,
			18))), a3Y
	}, this.lI = function(player, iL) {
		var gn = ag.gn,
			a3M = gn[player],
			iL = bK.ds(a3M * (iL + 1), 1024),
			a3R = Math.max(bK.ds(a3M, 10), 1e3);
		return (iL = Math.min(iL, a3M - a3R)) < 0 ? (gn[player] = 0, a3R = Math.min(1e3, a3M + aD.a3Z - ag.a3L[player]), bN.fI[1] = a3R, ag.a3L[player] += a3R - a3M, 0) : (bN.fI[1] = a3R, 10 === aD.kQ && (iL = b3.a3S(player, iL)), gn[player] -=
			a3R + iL, iL)
	}, this.mH = function(player) {
		ag.gn[player] -= bN.fI[0] + bN.fI[1]
	}, this.pv = function(player, jI) {
		return (jI = Math.min(jI, aD.ei)) < aD.ei && 0 === ag.mg[jI] && (jI = aD.ei), (bN.eh[0] = jI) === aD.ei || br.ee(player, jI)
	}, this.py = function(player, p5) {
		return 0 !== ag.mg[p5] && !br.ee(player, p5)
	}, this.a3a = function(player, a3b) {
		for (var gJ, el = al.k9, a3c = 0, a3d = li, aB = 0; aB < el; aB++)
			if (gJ = a3d[aB], !this.jW(gJ)) {
				if (player === gJ) return !0;
				if (++a3c > a3b) return !1
			} return !1
	}, this.ld = function(gJ) {
		var a3e = aD.hf ? bg.ke() : ag.gZ[li[0]];
		return a3e >= bK.ds(gJ * aD.js, 100)
	}, this.a3f = function(fD, min, max) {
		return Math.floor(bK.ht(isNaN(fD) ? 0 : Number(fD), min, max))
	}
}

function a29() {
	this.a3g = function(canvas, a3h, a3i) {
		var i = canvas.width,
			j = canvas.height,
			f6 = b9.qX.wJ(i, j),
			hn = b9.qX.getContext(f6, !0),
			canvas = (hn.drawImage(canvas, 0, 0), hn.getImageData(0, 0, i, j));
		return a3h(canvas.data, i, j, a3i), hn.putImageData(canvas, 0, 0), f6
	}, this.a3j = function(wU, i, j) {
		for (var es = i - 1; 0 <= es; es--)
			for (var eu = j - 1; 0 <= eu; eu--) {
				var aB = 4 * (es + eu * i);
				wU[3 + aB] = wU[aB], wU[aB] = wU[1 + aB] = wU[2 + aB] = 255
			}
	}, this.a3k = function(wU, i, j) {
		for (var es = i - 1; 0 <= es; es--)
			for (var eu = j - 1; 0 <= eu; eu--) {
				var aB = 4 * (es + eu * i);
				wU[1 + aB] > wU[2 + aB] + 10 && (wU[3 + aB] = wU[aB], wU[1 + aB] = wU[2 + aB])
			}
	}, this.a3l = function(wU, i, j, a3i) {
		for (var gap = Math.floor(Math.min(i, j) * a3i), es = 0; es < i; es++)
			for (var aB, eu = 0; eu < j; eu++)(es < gap || eu < gap || i - gap <= es || j - gap <= eu) && (wU[3 + (aB = 4 * (es + eu * i))] = 255 - 255 * (wU[1 + aB] - wU[aB]) / (255 - wU[aB]))
	}, this.a3m = function(wU, i, j, a3i) {
		for (var es = i - 1; 0 <= es; es--)
			for (var eu = j - 1; 0 <= eu; eu--) {
				var aB = 4 * (es + eu * i);
				wU[aB] = a3i[0], wU[1 + aB] = a3i[1], wU[2 + aB] = a3i[2]
			}
	}, this.a3n = function(wU, i, j, a3i) {
		for (var gap = Math.floor(i * a3i), es = 0; es < i; es++)
			for (var aB, eu = 0; eu < j; eu++)(es < gap || eu < gap || i - gap <= es || j - gap <= eu) && (wU[aB = 4 * (es + eu * i)] = wU[1 + aB] = wU[2 + aB] = 0)
	}, this.a3o = function(wU, i, j) {
		for (var eu, aB, es = i - 1; 0 <= es; es--)
			for (eu = j - 1; 0 <= eu; eu--) 200 < wU[1 + (aB = 4 * (es + eu * i))] && wU[1 + aB] - 20 > wU[aB] && wU[1 + aB] - 20 > wU[2 + aB] ? wU[aB] + wU[2 + aB] < 40 ? wU[3 + aB] = 0 : (wU[3 + aB] = wU[aB], wU[aB] = 255, wU[1 + aB] = 255, wU[
				2 + aB] = 255) : wU[aB] < 50 && wU[1 + aB] < 50 && wU[2 + aB] < 50 && (wU[aB] + wU[1 + aB] + wU[2 + aB] < 50 ? wU[3 + aB] = 180 : wU[3 + aB] = 180 + Math.floor(75 * (wU[aB] + wU[1 + aB] + wU[2 + aB] - 50) / 100))
	}, this.a3p = function(wU, i, j) {
		for (var eu, aB, es = i - 1; 0 <= es; es--)
			for (eu = j - 1; 0 <= eu; eu--) wU[1 + (aB = 4 * (es + eu * i))] > wU[aB] + 20 && wU[1 + aB] > wU[2 + aB] + 20 && wU[aB] + wU[2] < 40 && (wU[3 + aB] = 255 - wU[1 + aB], wU[aB] = wU[1 + aB] = wU[2 + aB] = wU[aB])
	}, this.a2l = function(wU, i, j, a3i) {
		for (var e5 = i >> 1, es = 0; es < i; es++)
			for (var eu = 0; eu < j; eu++) Math.sqrt((es - e5) * (es - e5) + (eu - e5) * (eu - e5)) > a3i * e5 && (wU[4 * (es + eu * i) + 3] = 0)
	}
}

function a26() {
	var a3q = {
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
		a3r = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rX = function(uu) {
		return uu.replace(a3r, function(match) {
			return a3q[match] || match
		})
	}, this.z9 = function(fD) {
		var aB, a3s, a3t, a3u, a3v;
		if (fD < 0) return "-" + this.z9(Math.abs(fD));
		if (fD < 1e3) return fD.toString();
		for (a3s = Math.floor(Math.log(fD + .5) / Math.log(10)) + 1, a3t = Math.floor((a3s - 1) / 3), a3v = (a3u = fD.toString()).substring(a3s - 3, a3s), aB = 1; aB < a3t; aB++) a3v = a3u.substring(a3s - 3 * (aB + 1), a3s - 3 * aB) + " " + a3v;
		return a3u.substring(0, a3s - 3 * a3t) + " " + a3v
	}, this.a3w = function(gJ, a3s) {
		return gJ.toFixed(a3s) + "%"
	}, this.a3x = function(fD, a3y) {
		return fD.toFixed(bK.ht(Math.floor((void 0 === a3y ? 3 : a3y) - Math.log10(Math.max(fD, 1))), 0, 8))
	}, this.a3z = function(fD, nI, a3s) {
		return (fD * nI).toFixed(a3s)
	}, this.a0Z = function(username) {
		var ep, ea = username.indexOf("[");
		return !(ea < 0) && 1 < (ep = username.indexOf("]")) - ea && ep - ea <= 8 ? username.substring(ea + 1, ep).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0Z;
	this.a40 = function(qE) {
		for (var f4 = Math.floor(.5 * qE.length + .5), nO = Math.floor(.5 * (f4 - 1)), aB = 0; aB < nO; aB++)
			for (var f5 = -1; f5 < 2; f5 += 2) {
				var f6 = f4 + f5 * aB;
				if (" " === qE[f6]) return [this.a0V(qE.substring(0, f6)), this.a41(qE.substring(f6))]
			}
		return [qE.substring(0, f4), qE.substring(f4)]
	}, this.a41 = function(qE) {
		for (var el = qE.length, aB = 0; aB < el; aB++)
			if (" " !== qE[aB]) return qE.substring(aB);
		return qE
	}, this.a0V = function(qE) {
		for (var aB = qE.length - 1; 0 <= aB; aB--)
			if (" " !== qE[aB]) return qE.substring(0, aB + 1);
		return qE
	}, this.a42 = function(qE, a43) {
		return qE.split("(")[0] + "(🧈 " + a43.toFixed(2) + ")"
	}, this.startsWith = function(qE, a44) {
		return qE.substring(0, a44.length) === a44
	}, this.a3B = function(qE, a44) {
		var el = qE.length;
		return qE.substring(el - a44.length, el) === a44
	}, this.a45 = function(g, a46, a47) {
		var qE = "",
			el = g.length - 1;
		a47 = a47 || "";
		for (var aB = 0; aB < el; aB++) qE += a47 + g[aB] + a47 + ",", (aB + 1) % a46 == 0 && (qE += "\n");
		return qE += a47 + g[el] + a47
	}, this.a48 = function(qE, yy, yz) {
		return qE.replace(new RegExp(yy, "g"), yz)
	}
}

function a49() {
	this.jF = function(player, eX) {
		aI.xo(player, bL.et(eX), bL.ev(eX)) && (be.dj = !0), aD.kS && this.j1()
	}, this.j1 = function() {
		aD.h9 = !1;
		for (var aB = 0; aB < aD.k8; aB++) 0 !== ag.mg[aB] && 0 === ag.gZ[aB] && aI.xv(aB);
		0 !== ag.mg[aD.eV] ? (bc.mc[7] = ag.gZ[aD.eV], bc.mc[8] = ag.gn[aD.eV], aR.a4A(), aW.a4B(), aD.gu || aH.n0(ag.ib[aD.eV] - 5, ag.ie[aD.eV] - 5, ag.ic[aD.eV] + 5, ag.ig[aD.eV] + 5), au.db()) : aX.show(!1, !1, !1, !0), aN.a4C(18), af.a4D(),
			af.mS(!0), bO.y.a4E(), aL.ro(), aD.pt = null, ba.a4F = !0, ba.a4G(), aD.kS && a0.a1.setState(1)
	}
}

function c0() {
	this.ei = 512, this.a3O = 15e8, this.a4H = 1e9, this.a3Z = 5e4, this.a4I = 512, this.g5 = 2, this.eV = 0, this.k8 = 0, this.zv = 0, this.kU = 0, this.zu = 0, this.wz = 512, this.x4 = 512, this.a3N = 150, this.kS = !0, this.gu = 0, this.zs = 0,
		this.js = 0, this.n9 = !1, this.h9 = 0, this.a4J = 0, this.hf = !1, this.x6 = 0, this.x7 = 0, this.kQ = 0, this.a0k = 0, this.pt = null, this.a0A = new yA, this.a4K = 30, this.zp = 0, this.zx = 0, this.a09 = 0, this.zk = 0, this.data =
		new a4L, this.a4M = new a4N, this.a4O = 0, this.a4P = "", this.a4Q = function() {
			bN.db(), bQ.db(), this.zv = this.k8 = this.data.humanCount, this.kS = 1 === this.zv, this.n9 = !1, this.gu = this.data.isReplay, this.kQ = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 :
				this.data.numberTeams - 2, this.a0k = this.data.isContest, this.hf = this.kQ < 7 || 9 === this.kQ, this.kQ = 10 === this.kQ && this.kS ? 7 : this.kQ, this.kQ = 8 === this.kQ && 2 !== this.k8 ? 7 : this.kQ, ay.db(), this.x6 = this.data
				.numberTeams, this.data.teamPlayerCount ? this.x7 = +(0 < this.data.teamPlayerCount[0]) : (this.x7 = 0, this.hf && this.kS && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.x6 + 1), aD.a4M
					.a4R())), this.a4K = this.k8 <= 2 ? 30 : this.k8 <= 50 ? 40 : 50, this.a4J = this.h9 = this.data.selectableSpawn, this.pt = this.h9 ? new a49 : null, 1 === l.dq ? this.wz = this.k8 : this.wz = this.data.playerCount, this.x4 = this
				.wz, this.kU = this.wz - this.k8, this.zu = 0, this.eV = this.data.selectedPlayer, this.zp = 0, this.zx = 0, this.a09 = 0, this.zk = 0, ax.a4S(this.data.spawningSeed), ae.db(), ag.db(), ai.a4T(), b7.oy.pg = [], bf.db(), this.zs = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bc.db(), a4U(), ac.dc(), ao.a4V(), ba.db(), ac.db(), ar.db(), bL.db(), bM.db(), an.db(), bU.a4W(), aE.db(),
				ai.a7(), aI.db(), aJ.db(), al.a4X(), b8.db(), bg.db(), bO.db(), bd.db(), a4Y.putImageData(a4Z, 0, 0), aV.db(), aS.db(), aR.db(), bB.db(), av.db(), aU.db(), aW.db(), aM.db(), aQ.db(), aN.db(), aP.db(), aL.db(), aX.db(), aF.db(), aG
				.db(), fo(), ad.db(), af.db(), b3.db(), b4.db(), b0.db(), this.a0A.db(), be.a4W(), aH.mz(), 0 === ag.mg[aD.eV] && aX.show(!1, !0), af.mS(!0), au.db(), be.dj = !0, this.gu || this.kS && this.h9 || a0.a1.setState(1), this.a4O = 0
		}, this.a1E = function(a4b) {
			b8.pr.a4c.length ? this.a4P = b8.pr.a4c : this.a4P = b8.a4d.zK(), az.y.a4e(), bp.clear(), this.zs = 0, be.a4f(), a0.a1.setState(0), aa.setState(0), a4b || bT.eE.show(), 2 === this.a4O ? t.y.a4g() : 1 === this.a4O ? t.u(19) : t.u(5, 5)
		}, this.a4h = function() {
			return this.gu ? aM.gv || !bB.a4i : this.kS && (aM.gv || this.h9)
		}, this.a4j = function() {
			return 1 === this.zs && !this.h9
		}
}

function a4L() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4N() {
	this.a4R = function() {
		var a4k = aD.data;
		b9.qf.a2a(a4k.teamPlayerCount, a4k.playerCount), a4k.numberTeams = b9.qf.a2R(a4k.teamPlayerCount, 0), a4k.teamPlayerCount[0] && a4k.teamPlayerCount[7] && (a4k.teamPlayerCount[7] = 0, this.a4R())
	}, this.a4l = function() {
		var a4k = aD.data;
		a4k.mapType < 2 ? bR.a7(bR.a4m(a4k), a4k.mapSeed) : bR.a4n(a4k.canvas)
	}, this.a4o = function() {
		var a4k = aD.data;
		a4k.colorsData || (a4k.colorsData = new Uint32Array(1)), a4k.selectableColor && (a4k.colorsData[0] = bi.y.vX()), a4k.selectableName && (a4k.playerNamesData || (a4k.playerNamesData = new Array(1)), a4k.playerNamesData[0] = bi.eI.data[122]
			.value)
	}, this.a4p = function() {
		aD.data = new a4L, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ei), aD.data.aIncomeData[0] = 64
	}
}

function dX() {
	var a4q = [];
	this.yL = function(qE, pG) {
		qE = {
			eK: aW.a4s(),
			qE: qE,
			pG: pG
		};
		a4q.push(qE), 30 === t.sl && t.a4t().yL(qE)
	}, this.clear = function() {
		a4q = [], t.a4u(30) && t.a4u(30).clear()
	}, this.a4v = function() {
		return a4q
	}
}

function dR() {
	this.yq = 0, this.gap = 0, this.sN = 0, this.qd = 0, this.db = function() {
		this.resize()
	}, this.resize = function() {
		this.yq = .0022 * b9.qX.qY(.5) * h.hv, this.sN = this.yq / h.k, this.gap = Math.max(Math.floor((a0.a1.hu() ? .0114 : .01296) * h.hv), 2), this.qd = this.gap / h.k
	}
}

function dQ() {
	this.a4w = function() {
		return a0.a1.hu() ? 2 : 1
	}
}

function cB() {
	var r6, es, eu, a4x, a4y, a4z, eK, a50, a51, a52, a53, gap, zoom, pZ, a54;

	function a5I(lL, lM, eP) {
		ac.eg(eP) || -1 === (lL = bM.kv.a5R(lL, lM)) ? aN.a5Q(eP) : aN.a5S(lL)
	}

	function a5E(a50) {
		for (var aB = pZ.length - 1; 0 <= aB; aB--)
			if (pZ[aB] === a50) return 1
	}

	function a5C(a59) {
		var aB, el;
		if (-1 !== a59)
			for (el = r6.length, aB = 0; aB < el; aB++)
				if (r6[aB].hX && r6[aB].es + 1 === a59 % 4 && r6[aB].eu + 1 === a59 >> 2) return aB;
		return -1
	}

	function a5A(lL, lM) {
		var t9 = gap / 2;
		return lL < es - a4x - 3 * t9 || es + 3 * a4x + 5 * t9 < lL || lM < eu - a4x - 3 * t9 || eu + 2 * a4x + 3 * t9 < lM ? -1 : 4 * (lM < eu - t9 ? 0 : lM < eu + a4x + t9 ? 1 : 2) + (lL < es - t9 ? 0 : lL < es + a4x + t9 ? 1 : lL < es + 2 * a4x +
			3 * t9 ? 2 : 3)
	}
	this.a55 = function() {
		var aB, f5, a58 = [bA.o6, bA.oK, bA.ne, bA.og, bA.oX];
		for (r6 = new Array(10), aB = 0; aB < 10; aB++) r6[aB] = {
			id: aB,
			hX: !1,
			l3: 0,
			canvas: [],
			es: 0,
			eu: 0
		};
		for (r6[0].colors = [0, 1, 2, 3], r6[0].es = 0, r6[0].eu = 0, r6[1].colors = [1, 4], r6[1].es = 1, r6[1].eu = 0, r6[2].colors = [0, 2], r6[2].es = -1, r6[2].eu = 0, r6[3].colors = [0], r6[3].es = 0, r6[3].eu = 0, r6[4].colors = [0, 2],
			r6[4].es = 1, r6[4].eu = 1, r6[5].colors = [3], r6[5].es = 0, r6[5].eu = -1, r6[6].id = 20, r6[6].colors = [0], r6[6].es = 1, r6[6].eu = -1, r6[7].id = 21, r6[7].colors = [0], r6[7].es = 0, r6[7].eu = 1, r6[8].id = 16, r6[8]
			.colors = [0], r6[8].es = 0, r6[8].eu = 0, r6[9].id = 10, r6[9].colors = [4], r6[9].es = 2, r6[9].eu = 0, aB = 0; aB < 10; aB++)
			for (f5 = 0; f5 < r6[aB].colors.length; f5++) r6[aB].canvas.push(function(id, a2g) {
				if (id < 20) return b9.canvas.yc(ab.get(3), id, a2g);
				var a2g = ab.get(3).height,
					a2h = b9.qX.wJ(a2g, a2g),
					hn = b9.qX.getContext(a2h);
				20 === id ? hn.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wU.yr(aj.rn.yg + aj.rn.yx, hn, 0, 0, a2g);
				return a2h
			}(r6[aB].id, a58[r6[aB].colors[f5]]))
	}, this.a57 = function() {
		return r6
	}, this.db = function() {
		pZ = [], es = eu = eK = 0, a4y = a4z = -1e3, this.resize()
	}, this.resize = function() {
		a4x = Math.floor((a0.a1.hu() ? .075 : .0468) * h.hv), zoom = a4x / ab.get(3).height, gap = Math.floor(a4x / 3)
	}, this.a1h = function(lL, lM) {
		return !!this.hX() && (be.dj = !0, !!aj.wU.gy(lL, lM, a51) || (lL = function(lL, lM) {
			a4z = a4y = -1e3;
			var a5B = a5C(a5A(lL, lM));
			if (-1 === a5B) return 0;
			if (1 !== r6[a5B].colors[r6[a5B].l3])
				if (5 === a5B) {
					if (! function() {
							var dr = performance.now();
							a54 + 4e3 < dr && (pZ = []);
							a54 = dr
						}(), a5E(a50)) return 1;
					pZ.push(a50), 16 < pZ.length && pZ.shift()
				} else if (6 === a5B) {
				for (var aB = pZ.length - 1; 0 <= aB; aB--) 0 === ag.mg[pZ[aB]] && pZ.splice(aB, 1);
				0 < pZ.length && (b4.a5F(1, pZ, !0) && b7.g7.pY(pZ, a50), pZ = [])
			} else if (2 === a5B) b7.hB.p4(aR.hF(), a50);
			else if (3 === a5B) aD.h9 && b7.hB.hC(a52);
			else if (0 === a5B)
				if (0 === r6[0].l3) {
					if (aD.a4J && aW.a4s() < 350) return 1;
					bU.a5G(4), b7.hB.hI(aR.hF(), a50)
				} else b0.hJ(a50, aR.hF());
			else if (1 === a5B) b7.hB.hN(aR.hF(), a52);
			else if (9 === a5B) b7.hB.hQ(aR.hF());
			else {
				if (7 === a5B) return bU.a5G(0), aj.wU.show(lL, lM), 2;
				if (4 === a5B) b4.a5F(0, [a50], !0) && b7.g7.pV(a50);
				else {
					if (8 !== a5B) return 0;
					b7.hB.hE(aR.hF(), a53, a50)
				}
			}
			return 1
		}(lL, lM), this.ro(), 2 === lL && (aj.wU.hX = !0), 0 < lL))
	}, this.a1j = function(lL, lM) {
		this.hX() || (a4y = lL, a4z = lM, eK = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bL.h1(mouseX),
			coordY = bL.h3(mouseY),
			coord = bL.f9(coordX, coordY),
			coord = bL.eb(coord);
		bL.h4(coordX, coordY) && a5I(mouseX, mouseY, coord)
	}, this.click = function(lL, lM, a1q) {
		var h0 = bL.h1(lL),
			h2 = bL.h3(lM),
			eX = bL.f9(h0, h2),
			eP = bL.eb(eX);
		return !(!bL.h4(h0, h2) || (h0 = (a0.a1.hu() ? .025 : .0144) * h.hv, h2 = performance.now(), Math.abs(lL - a4y) > h0) || Math.abs(lM - a4z) > h0 || eK + 500 < h2) && (eK = h2, a1q ? (a5I(lL, lM, eP), !1) : aM.gv || this.hX() || !b9.g7.gx(
			aD.eV) || aD.gu ? (this.ro(), !1) : (aD.h9 ? 0 <= (a52 = bq.hA(eX)) && (r6[3].hX = !0) : 2 === aD.zs ? ac.gL(eP) && (a50 = ac.ed(eP), b9.g7.jW(a50) || (r6[0].hX = !0, r6[0].l3 = 1, r6[7].hX = !0)) : (bM.hO.hP(aD.eV, eX) && (
			r6[0].hX = !0, r6[0].l3 = 1, r6[1].hX = !0, r6[1].l3 = 0, r6[9].hX = !0, r6[9].l3 = 0), bM.hL.hM(aD.eV, eX) && (r6[0].hX = !0, r6[0].l3 = 1, r6[1].hX = !0, r6[1].l3 = 1, a52 = bN.fN[7]), ac.eq(eP) ? (a53 = am.eM.eO(
			eP)) && (h0 = bL.eb(a53), r6[8].hX = !0, a50 = ac.ec(h0) ? aD.ei : ac.ed(h0)) : (ac.xt(aD.eV, eP) && (a51 = aD.eV, r6[0].hX = !0, r6[0].l3 = 1, r6[7].hX = !0), -1 !== (h2 = bq.hG(eX)) && (ac.ec(h2 << 2) ? (a50 = aD.ei,
			br.hH(aD.eV) ? (r6[0].hX = !0, r6[0].l3 = 0) : ad.fs(aD.eV) && (r6[0].hX = !0, r6[0].l3 = 3)) : (a50 = ac.ed(h2 << 2), r6[0].l3 = 1, r6[5].hX = function(a50) {
			return !b9.g7.jW(a50) && !a5E(a50) && b4.a5F(1, [a50], !1)
		}(a50), r6[7].hX || b9.g7.jW(a50) || (a51 = a50, r6[7].hX = !0), r6[4].hX = !b9.g7.jW(a50) && !af.a5M(a50) && b4.a5F(0, [a50], !1), r6[6].hX = function(a50) {
			if (0 === pZ.length) return !1;
			if (performance.now() > a54 + 4e3) return !(pZ = []);
			return !a5E(a50) && ! function(a50) {
				var aB;
				if (aD.hf)
					for (aB = pZ.length - 1; 0 <= aB; aB--)
						if (!br.ee(a50, pZ[aB])) return 1;
				return
			}(a50)
		}(a50), br.ee(a50, aD.eV) ? (br.hK(aD.eV, a50) ? (r6[0].l3 = 0, r6[0].hX = !0) : ad.fs(aD.eV) && (r6[0].l3 = 3, r6[0].hX = !0), r6[0].hX = this.a5O()) : (r6[2].hX = !0, r6[0].hX = !0))))), this.a5J(lL, lM)))
	}, this.a5J = function(lL, lM) {
		return es = lL - Math.floor(a4x / 2), eu = lM - Math.floor(a4x / 2), !!this.hX()
	}, this.a1N = function(lL, lM) {
		return !!this.hX() && (aj.wU.hX ? !aj.wU.yp(lL, lM) && (aj.wU.hX = !1, be.dj = !0) : function(s8, lL, lM) {
			lL = a5A(lL, lM);
			if (0 <= a5C(lL)) return !1;
			if ((1 === lL || 6 === lL) && 0 <= a5C(2)) return !1;
			if ((6 === lL || 9 === lL) && 0 <= a5C(10)) return !1;
			return s8.ro(), be.dj = !0
		}(this, lL, lM))
	}, this.ro = function() {
		for (var aB = r6.length - 1; 0 <= aB; aB--) r6[aB].hX = !1, r6[aB].l3 = 0;
		aj.wU.hX = !1
	}, this.hX = function() {
		return this.a5O() || aj.wU.hX
	}, this.a5O = function() {
		for (var el = r6.length, aB = 0; aB < el; aB++)
			if (r6[aB].hX) return !0;
		return !1
	}, this.ud = function() {
		if (this.hX())
			if (aj.wU.hX) aj.wU.ud();
			else {
				var aB, hn = ue,
					f5 = r6,
					el = f5.length,
					a5W = (a4x + gap) / zoom;
				for (hn.imageSmoothingEnabled = !0, hn.setTransform(zoom, 0, 0, zoom, es, eu), aB = 0; aB < el; aB++) f5[aB].hX && ue.drawImage(f5[aB].canvas[f5[aB].l3], f5[aB].es * a5W, f5[aB].eu * a5W);
				hn.imageSmoothingEnabled = !1, hn.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cC() {
	var j, canvas, a5X, a5Y, a5Z, a5a = -1;

	function a5b() {
		var a5c, y4 = canvas.getContext("2d", {
			alpha: !0
		});
		y4.clearRect(0, 0, j, j), y4.fillStyle = bA.nc, y4.fillRect(0, 0, j, j), 0 === a5Y && (y4.fillStyle = bA.nh, y4.fillRect(0, 0, j, j)), y4.fillStyle = bA.ng, y4.fillRect(0, 0, j, 1), y4.fillRect(0, 0, 1, j), y4.fillRect(0, j - 1, j, 1), y4
			.fillRect(j - 1, 0, 1, j), a5c = .9 * j / ab.get(0).width, y4.imageSmoothingEnabled = !0, y4.setTransform(a5c, 0, 0, a5c, Math.floor((j - a5c * ab.get(0).width) / 2), Math.floor((j - a5c * ab.get(0).height) / 2)), y4.drawImage(ab.get(0),
				0, 0), y4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5e(lL, lM) {
		if (!aM.gv) return lL <= j + bb.gap && lM >= aR.eu ? 9 : -1;
		if (lL <= 4 * j + bb.gap) {
			if (lM >= aR.eu) return 0;
			if (lM >= aR.eu - j - a5Z * bb.gap) return 2
		} else if (lL <= 7 * j + bb.gap && lM >= aR.eu - j - a5Z * bb.gap) return 1;
		return -1
	}
	this.gv = !1, this.db = function() {
		a5Y = -1, this.gv = !1, a5Z = a0.a1.hu() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5X = b9.qX.sL(1, (a0.a1.hu() ? .5 : .45) * j), a5b()
	}, this.a1y = function() {
		this.gv = !this.gv, this.gv ? (bB.a1x(!1), aD.gu && bB.a4i && bB.a1z(!0), this.a5d()) : (a5Y = -1, a5b(), !aD.kS || 1 !== aD.zs || aD.h9 || aD.gu || a0.a1.setState(1)), be.dj = !0
	}, this.a5d = function() {
		(aD.kS || aD.gu) && 1 === aD.zs && (aV.mS(!0), aD.h9 || setTimeout(function() {
			ba.a03()
		}, 0), a0.a1.setState(0))
	}, this.gy = function(lL, lM) {
		return 0 <= (a5a = a5e(lL, lM)) || !aM.gv || aD.kS || aD.gu || bd.hX || aM.a1y(), a5a
	}, this.a1N = function(lL, lM) {
		lL = a5e(lL, lM);
		lL !== a5Y && (a5Y = lL, this.gv || a5b(), be.dj = !0)
	}, this.a1O = function(lL, lM) {
		lL = a5e(lL, lM);
		return -1 !== lL && a5a === lL && (this.gv ? aD.n9 ? (0 <= lL && bB.a1x(!1), !aD.gu) : (0 === lL ? aD.a1E() : 1 === lL ? this.a1y() : 2 === lL && t.u(1, 0), !0) : 9 === lL && (this.a1y(), !0))
	}, this.ud = function() {
		var i;
		this.gv ? (i = Math.floor(5.5 * j), ue.setTransform(1, 0, 0, 1, bb.gap, aR.eu), ue.fillStyle = bA.nc, ue.fillRect(0, 0, i, j), 0 === a5Y ? (ue.fillStyle = bA.nh, ue.fillRect(0, 0, 4 * j, j)) : 1 === a5Y && (ue.fillStyle = bA.nh, ue
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), ue.fillStyle = bA.ng, ue.fillRect(0, 0, i, 1), ue.fillRect(0, 0, 1, j), ue.fillRect(4 * j, 0, 1, j), ue.fillRect(0, j - 1, i, 1), ue.fillRect(i - 1, 0, 1, j), ue.font = a5X, b9.qX
			.textBaseline(ue, 1), b9.qX.textAlign(ue, 1), ue.fillText(L(41), 2 * j, .54 * j), i = .4 * j, aM.a5i(bb.gap + 4 * j + (1.5 * j - i) / 2, aR.eu + .3 * j, i), i = 1, ue.setTransform(1, 0, 0, 1, bb.gap, aR.eu - i * a5Z * bb.gap - i *
				j), ue.fillStyle = bA.nc, ue.fillRect(0, 0, 4 * j, j), a5Y === i + 1 && (ue.fillStyle = bA.nh, ue.fillRect(0, 0, 4 * j, j)), ue.fillStyle = bA.ng, ue.fillRect(0, 0, 4 * j, 1), ue.fillRect(0, 0, 1, j), ue.fillRect(4 * j, 0, 1,
				j), ue.fillRect(0, j - 1, 4 * j, 1), ue.fillText(L(0 === i ? 41 : 42), 2 * j, .54 * j), ue.setTransform(1, 0, 0, 1, 0, 0)) : ue.drawImage(canvas, bb.gap, aR.eu)
	}, this.q8 = function(player) {
		return 0 !== ag.mg[player] && 2 !== aD.zs && !b9.g7.jW(player)
	}, this.a5i = function(es, eu, el) {
		ue.setTransform(1, 0, 0, 1, es, eu), ue.lineWidth = bb.yq, ue.strokeStyle = bA.ng, ue.beginPath(), ue.moveTo(0, 0), ue.lineTo(el, el), ue.moveTo(0, el), ue.lineTo(el, 0), ue.stroke()
	}
}

function cD() {
	var a5k, j, a5l, a5m, a5n, a5o, a5p, a5q, a5r;

	function y0() {
		return aR.a69(aN.a65()) ? av.hX ? __fx.settings.keybindButtons ? aR.eu - 2 * aR.j - 3 * a5l : aR.eu - aR.j - 2 * a5l : __fx.settings.keybindButtons ? aR.eu - aR.j - 2 * a5l : aR.eu - a5l : bB.a69(aN.a68()) ? av.hX ? bB.y0() - aR.j - 2 * a5l :
			bB.y0() - a5l : av.hX ? h.j - aR.j - (bj.a4w() + 1) * a5l : h.j - bj.a4w() * bb.gap
	}

	function a5w(dr, qE, id, gJ, a5z, a60, kj, a61, a62, a63, a6E) {
		var aB, y4, a2h, qP, a6F = void 0 !== a62,
			i = Math.floor(aQ.measureText(qE, aN.a5X) + 1.5 * a5m + (a6F ? j : 1.5 * a5m));
		if (be.dj = !0, a6E || bp.yL(qE, a62), i + 2 * a5l + aR.j > h.i && !a6F && 50 !== id && 20 < qE.length) a5w(dr, (a6E = b9.rW.a40(qE))[0], id, gJ, a5z, a60, kj, a61, a62, a63, !0), a5w(dr, a6E[1], id, gJ, a5z, a60, kj, a61, a62, a63, !0);
		else if (a6E = i + (50 === id ? a5n : 0), (a2h = document.createElement("canvas")).width = i, a2h.height = j, (y4 = a2h.getContext("2d", {
				alpha: !0
			})).font = aN.a5X, b9.qX.textBaseline(y4, 1), b9.qX.textAlign(y4, 0), y4.clearRect(0, 0, i, j), y4.fillStyle = a60, y4.fillRect(0, 0, i, j), y4.fillStyle = a5z, y4.fillText(qE, Math.floor(1.5 * a5m), Math.floor(j / 2)), a6F && (y4
				.imageSmoothingEnabled = !0, aj.wU.yr(a62, y4, i - j, 0, j)), 0 === (qP = {
				eK: dr,
				qE: qE,
				id: id,
				player: gJ,
				canvas: a2h,
				a5z: a5z,
				a60: a60,
				i: i,
				a66: a6E,
				kj: kj,
				a61: a61,
				a62: a62,
				a63: a63
			}).eK || 0 < a5k.length && 0 < a5k[0].eK) a5k.unshift(qP);
		else {
			for (aB = 1; aB < a5k.length; aB++)
				if (0 < a5k[aB].eK) return void a5k.splice(aB, 0, qP);
			a5k.push(qP)
		}
	}

	function a5x(e5, t9, f5) {
		return "rgb(" + e5 + "," + t9 + "," + f5 + ")"
	}

	function a6G(id, gE) {
		for (var el = a5k.length, aB = 0; aB < el; aB++) a5k[aB].id === id && gE-- <= 0 && (a5k.splice(aB, 1), aB--, el--)
	}

	function a6H(id, player) {
		for (var ez = !1, aB = a5k.length - 1; 0 <= aB; aB--) a5k[aB].id !== id || player !== aD.ei && a5k[aB].player !== player || (a5k.splice(aB, 1), ez = !0);
		return ez
	}

	function a6e(qE) {
		a5w(340, qE, 6, 0, a5x(215, 245, 255), bA.nd, -1, !1)
	}
	this.a5s = "", this.db = function() {
		var self;
		a5q = 0, a5p = a0.a1.hu() ? 7 : 12, a5o = {
			zg: [0, 0, 0],
			a5t: [0, 0, 0],
			eD: [220, 180, 180],
			uc: [0, 0, 0],
			f6: [0, 0, 0]
		}, a5k = [], this.resize(), aD.h9 && this.a04(0, 18), bR.wH.wI[bR.eR].name.length && a6e(L(89, [bR.wH.wI[bR.eR].name])), a6e(L(90, [bR.ew - 2 + "x" + (bR.ex - 2)])), a6e(L(91, [b9.rW.z9(ao.a6f)])), ao.a6f !== ao.a6g && a6e(L(92, [b9
			.rW.z9(ao.a6g) + " (" + b9.rW.a3w(100 * ao.a6g / ao.a6f, 1) + ")"
		])), 0 < ao.a6h && a6e(L(65, [b9.rW.z9(ao.a6h) + " (" + b9.rW.a3w(100 * ao.a6h / ao.a6f, 1) + ")"])), 0 < ao.a6i && a6e(L(93, [b9.rW.z9(ao.a6i) + " (" + b9.rW.a3w(100 * ao.a6i / ao.a6f, 1) + ")"])), 10 === aD.kQ && a5w(120, L(94), 6,
			0, a5x(235, 255, 120), bA.nd, -1, !1), 0 !== (self = this).a5s.length && (a5w(200, self.a5s, 0, 0, bA.ng, bA.nd, -1, !1), self.a5s = ""), aD.a0k && a5w(340, L(43), 6, 0, a5x(255, 200, 0), bA.nd, -1, !1)
	}, this.resize = function() {
		var a5y, aB;
		if (j = (j = Math.floor((a0.a1.hu() ? .031 : .0249) * h.hv)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5X = b9.qX.sL(1, this.fontSize), a5l = bb.gap, a5m = Math.floor(j / 5), 0 < a5k.length)
			for (a5y = a5k, a5k = [], aB = a5y.length - 1; 0 <= aB; aB--) a5w(a5y[aB].eK, a5y[aB].qE, a5y[aB].id, a5y[aB].player, a5y[aB].a5z, a5y[aB].a60, a5y[aB].kj, a5y[aB].a61, a5y[aB].a62, a5y[aB].a63, !0);
		this.a64()
	}, this.a64 = function() {
		a5r = document.createElement("canvas");
		var qE = L(44),
			y4 = (a5n = aQ.measureText(qE, this.a5X) + 5 * a5m, a5r.height = j, a5r.width = a5n, a5r.getContext("2d", {
				alpha: !0
			}));
		y4.font = this.a5X, b9.qX.textBaseline(y4, 1), b9.qX.textAlign(y4, 1), y4.clearRect(0, 0, a5n, j), y4.fillStyle = bA.o3, y4.fillRect(0, 0, a5n, j), y4.fillStyle = bA.ng, y4.fillText(qE, Math.floor(a5n / 2), Math.floor(j / 2))
	}, this.a65 = function() {
		var el;
		return av.hX ? av.i : 0 === (el = a5k.length) ? 0 : 1 === el ? a5k[0].a66 : a67(a5k[0].a66, a5k[1].a66)
	}, this.a68 = function() {
		var el = a5k.length;
		return av.hX ? el ? a67(av.i, a5k[0].a66) : av.i : 0 === el ? 0 : 1 === el ? a5k[0].a66 : 2 === el ? a67(a5k[0].a66, a5k[1].a66) : a67(a67(a5k[0].a66, a5k[1].a66), a5k[2].a66)
	}, this.gy = function(es, eu) {
		for (var n6, a6A, a6B = y0(), aB = a5k.length - 1; 0 <= aB; aB--)
			if ((a6A = a6B - (aB + 1) * j) <= eu && eu < a6A + j) return 50 === a5k[aB].id ? es >= h.i - a5n - a5l - a5k[aB].i && (es >= h.i - a5n - a5l ? b7.g7.pV(a5k[aB].player) : aH.n1(a5k[aB].player, 800, !1, 0), !0) : es >= h.i - a5k[aB].i -
				a5l && (736 === a5k[aB].id ? (a6A = a5k[aB].qE.split(" "), window.open(a6A[a6A.length - 1], "_blank")) : a5k[aB].a61 && (a5k[aB].a63 && a5k[aB].a63.f4 ? (a6A = a5k[aB].a63.eX, n6 = bL.et(a6A) - 10, a6A = bL.ev(a6A) - 10, aH
					.n0(n6, a6A, 19 + n6, 19 + a6A)) : a5k[aB].a63 && a5k[aB].a63.f5 ? aH.n2(a5k[aB].player, a5k[aB].a63.n3) : (aH.n1(a5k[aB].player, 800, !1, 0), 0 <= a5k[aB].kj && (n6 = a5k[aB].kj, a5k[aB].kj = a5k[aB].player, a5k[
					aB].player = n6))), !0);
		return !1
	}, this.yL = function(dr, qE, id, gJ, a5z, a60, kj, a61, a62, a63) {
		a5w(dr, qE, id, gJ, a5z, a60, kj, a61, a62, a63)
	}, this.a6D = function(r) {
		a5w(300, r, 252, 0, bA.ng, bA.nd, -1, !1)
	}, this.a4C = function(id) {
		for (var aB = a5k.length - 1; 0 <= aB; aB--) a5k[aB].id === id && (a5k[aB].eK = 1)
	}, this.a04 = function(player, id) {
		0 === id ? (aQ.jF(player, 0), a6G(423, 0), a5w(160, L(45, [ag.a0R[player]]), 423, player, "rgb(10,220,10)", bA.nd, -1, !1)) : 1 === id ? (a6H(50, aD.ei), aQ.jF(player, 1), a5w(360, L(46, [ag.a0R[player]]), 0, player, bA.oM, bA.nd, -1, !
			0), aH.n1(player, 2700, !1, 0)) : 2 === id ? (aQ.jF(player, 2), a5w(0, L(47), 0, player, "rgb(10,255,255)", bA.nd, -1, !0), aH.n1(player, 2700, !1, 0)) : 3 === id ? (aQ.jF(player, 2), a5w(0, L(48, [ag.a0R[player]]), 0, player, bA
			.ng, bA.nd, -1, !0), aH.n1(player, 2700, !1, 0)) : 4 === id ? this.a6I(1, player, player) : 5 === id ? 2 === ag.a3D[player] || b9.g7.jW(aD.eV) || (function(id, mb) {
			var aB, a6S = 0,
				el = a5k.length;
			for (aB = 0; aB < el; aB++)
				if (a5k[aB].id === id && mb <= ++a6S) return a5k.splice(aB, 1)
		}(1, 5), af.a6K(player) ? a5w(180, L(49, [ag.a0R[player]]), 1, player, a5x(255, 200, 180), bA.nd, -1, !0) : (a6G(573, 0), a5w(180, L(50, [ag.a0R[player]]), 573, player, bA.oM, bA.nd, -1, !0))) : 18 === id ? a5w(255, L(51), 18, 0, bA
			.ng, bA.nd, -1, !1) : 21 === id ? a5w(220, L(52), id, 0, bA.ng, bA.nd, -1, !1) : 22 === id ? this.a6I(2, player, player) : 59 === id && a5w(0, L(53), id, 0, bA.oe, bA.nd, 0, !1)
	}, this.a1A = function(r) {
		a5w(200, L(54, [r]), 94, 0, bA.ng, bA.oI, -1, !1)
	}, this.a0G = function(a6L) {
		if (aD.eV === a6L && !aD.kS)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a5w(0, "Your Win Count is now " + __fx.wins.count, 3, a6L, bA.ng, bA.nd, -1, !0);
		ag.gZ[a6L] && (aQ.jF(a6L, 2), aD.k8 < 100 ? a5w(0, L(48, [ag.a0R[a6L]]), 3, a6L, bA.ng, bA.nd, -1, !0) : a5w(0, L(55, [ag.a0R[a6L]]), 3, a6L, bA.ng, bA.nd, -1, !0))
	}, this.a5Q = function(eP) {
		var a6N, qE, a6M = "(" + bL.et(eP >> 2) + ", " + bL.ev(eP >> 2) + ")",
			a61 = !1,
			player = 0;
		ac.eg(eP) ? ac.ec(eP) ? a6M = L(56, [a6M]) : (player = ac.ed(eP), qE = L(57, [b9.y4.a2t(ag.a0W[player], b9.qX.sL(0, 10), 150)]) + "   ", qE = (qE += L(58, [b9.rW.z9(ag.gn[player])]) + "   ") + L(59, [b9.rW.z9(ag.gZ[player])]) + "   ", aD
				.hf && (a6N = bf.a0D[bf.kV[bf.ej[player]]], qE += L(60) + ": " + a6N + "   "), b9.g7.jW(player) && (qE += L(61) + ": " + aE.kJ[aE.hU[player]] + "   "), a6M = qE = (qE += L(62, [player]) + "   ") + L(63, [a6M]), a61 = !0) : a6M =
			ac.eq(eP) ? L(64, [a6M]) + "   #" + ac.eT(eP) : L(65, [a6M]), be.dj = !0, a6G(55, 0), a5w(220, a6M, 55, player, bA.ng, bA.nd, -1, a61, void 0, void 0, !0)
	}, this.a5S = function(a6O) {
		var l1 = bM.y,
			player = l1.m1[a6O] >> 3,
			qE = (be.dj = !0, a6G(55, 0), L(66, [ag.a0R[player]]) + "   ");
		a5w(220, qE += L(58, [b9.rW.z9(l1.a6P[a6O])]), 55, player, bA.ng, bA.nd, -1, !0)
	}, this.pF = function(p1, a6Q, pG) {
		p1 === aD.eV ? a5w(175, " " + L(67, [ag.a0R[a6Q]]) + ": ", 1001, a6Q, a5x(200, 255, 210), bA.nd, -1, !0, pG) : this.a6R(p1, pG)
	}, this.a6R = function(p1, pG) {
		a6G(1e3, 0), a5w(175, ag.a0R[p1] + ": ", 1e3, p1, bA.ng, "rgba(5,60,25,0.9)", -1, !0, pG)
	}, this.a0F = function() {
		var r;
		aD.zx ? (r = L(68), aQ.a0E(L(69), 2, 1, 12), a5w(0, r, 40, 0, "rgb(10,220,10)", bA.nd, -1, !1)) : (r = L(70), aQ.a0E(L(71), 2, 0, 16), a5w(0, r, 41, 0, bA.ng, bA.nd, -1, !1))
	}, this.yB = function() {
		var gE = ag.a0R,
			eo = aD.data;
		a5w(300, gE[0] + " [" + aD.a0A.yH(eo.elo[0]) + "] vs " + gE[1] + " [" + aD.a0A.yH(eo.elo[1]) + "]", 65, 0, bA.nX, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6T = function(r) {
		a5w(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6U = function(a6V) {
		a5w(0, L(a6V ? 72 : 73), 247, 0, bA.od, bA.nd, -1, !1)
	}, this.yJ = function(yG, yI, a6W) {
		var eo = aD.data,
			gE = ag.a0R;
		a5w(0, gE[0] + ": " + aD.a0A.yH(eo.elo[0]) + " -> " + yG, 66, 0, bA.ng, a6W[0], -1, !1), a5w(0, gE[1] + ": " + aD.a0A.yH(eo.elo[1]) + " -> " + yI, 66, 1, bA.ng, a6W[1], -1, !1)
	}, this.pW = function(player, id) {
		0 === id ? a6H(50, player) ? (a5w(128, L(74, [ag.a0R[player]]), 52, player, a5x(180, 255, 180), bA.nd, -1, !0), af.q6(player, 2, 255)) : a5w(384, L(75, [ag.a0R[player]]), 51, player, a5x(210, 210, 255), bA.nd, -1, !0) : a6H(51, player) ?
			(a5w(128, L(76, [ag.a0R[player]]), 52, player, bA.ng, "rgba(60,120,10,0.9)", -1, !0), af.q6(player, 2, 255)) : (a5w(384, L(77, [ag.a0R[player]]), 50, player, bA.ng, "rgba(90,90,90,0.9)", -1, !0), af.q6(player, 2, 96))
	}, this.pa = function(zg, target) {
		var color = a5x(210, 255, 210);
		1 < zg.length ? a5w(230, L(78, [zg.length, ag.a0R[target]]), 66, target, color, bA.nd, -1, !0) : a5w(230, L(79, [ag.a0R[zg[0]], ag.a0R[target]]), 66, zg[0], color, bA.nd, target, !0)
	}, this.a6X = function(player, target) {
		a5w(230, L(80, [ag.a0R[player], ag.a0R[target]]), 66, player, bA.ng, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6Y = function(id, gE) {
		a6G(id, gE)
	}, this.zz = function(id, player) {
		a6H(id, void 0 === player ? aD.ei : player)
	}, this.a6Z = function(id) {
		for (var aB = a5k.length - 1; 0 <= aB; aB--)
			if (a5k[aB].id === id) return a5k[aB];
		return null
	}, this.pR = function(a6a, a6b, player) {
		2 !== ag.a3D[aD.eV] && (a5w(200, a6a = 1 === a6a ? L(81, [ag.a0R[player]]) : L(82, [b9.rW.z9(a6a), ag.a0R[player]]), 30, player, "rgb(190,255,190)", bA.nd, -1, !0), a6b) && (a6a = 1 === a6b ? L(83) : L(84, [b9.rW.z9(a6b)]), bp.yL(a6a))
	}, this.a6d = function(a6a, player) {
		2 !== ag.a3D[aD.eV] && (a6G(31, 0), 2 === ag.a3D[player] || player >= aD.k8 ? a5w(150, 1 === a6a ? L(85, [ag.a0R[player]]) : L(86, [ag.a0R[player], b9.rW.z9(a6a)]), 31, player, bA.nX, "rgba(205,205,205,0.9)", -1, !0) : a5w(150, 1 ===
			a6a ? L(87, [ag.a0R[player]]) : L(88, [ag.a0R[player], b9.rW.z9(a6a)]), 31, player, bA.nX, "rgba(205,255,205,0.9)", -1, !0))
	}, this.zy = function(bt) {
		for (var f6 = be.k5(), aB = 2; 0 <= aB; aB--) 0 < a5o.uc[aB] && (bt || a5o.f6[aB] < f6 - 220) && this.a6j(aB)
	}, this.a6j = function(id) {
		var qE, el = a5o.uc[id],
			player = a5o.zg[id];
		a5o.uc[id] = 0, 1 === el ? (0 === id ? qE = L(95, [ag.a0R[player], ag.a0R[a5o.a5t[0]]]) : 1 === id ? qE = L(96, [ag.a0R[player]]) : 2 === id ? qE = L(97, [ag.a0R[player]]) : 3 === id && (qE = L(98, [ag.a0R[player]])), a6G(7, 0), a5w(a5o
			.eD[id], qE, 7, a5o.a5t[id], bA.ng, bA.nd, -1, !0)) : (qE = L(0 === id ? 99 : 1 === id ? 100 : 101, [el]), a6G(7, 0), a5w(a5o.eD[id], qE, 7, player, bA.ng, bA.nd, -1, !1))
	}, this.a6I = function(id, hD, kj) {
		var f6 = be.k5(),
			el = a5o.uc[id] + 1;
		a5o.uc[id]++, a5o.zg[id] = hD, a5o.a5t[id] = kj, 1 === el && (a5o.f6[id] = f6), (1 === el && (aD.zv < 32 || 2 === aD.zs) || 1 < el && (a5o.f6[id] < f6 - 140 || 2 === aD.zs)) && this.a6j(id)
	}, this.j1 = function() {
		b1.j1();
		for (var jO = (jO = a5k.length - a5p) <= 1 ? 1 : jO * jO, aB = a5k.length - 1; 0 <= aB; aB--) 0 < a5k[aB].eK && (a5k[aB].eK -= jO, a5k[aB].eK <= 0) && (be.dj = !0, a5k.splice(aB, 1));
		! function() {
			var gE, aB;
			if (128 !== a5q && !(++a5q < 128))
				for (gE = 5, aB = al.k9 - 1; 0 <= aB; aB--) 1 === ag.a3D[al.kA[aB]] && 0 < gE-- && a5w(240, L(98, [ag.a0R[al.kA[aB]]]), 1, al.kA[aB], bA.nX, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.zy(!1)
	}, this.ud = function() {
		for (var x2, eu = y0(), aB = a5k.length - 1; 0 <= aB; aB--) x2 = eu - (aB + 1) * j, 50 === a5k[aB].id ? (ue.drawImage(a5k[aB].canvas, h.i - a5k[aB].i - a5n - a5l, x2), ue.drawImage(a5r, h.i - a5n - a5l, x2)) : ue.drawImage(a5k[aB].canvas,
			h.i - a5k[aB].i - a5l, x2)
	}
}

function cE() {
	var a6l, a6m, a6n, i, j, font, qE;

	function a6s(a6t) {
		return a6t < 10 ? "0" + a6t : String(a6t)
	}
	this.db = function() {
		qE = L(102)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hu() ? .53 : .36) * h.hv), j = Math.floor(.065 * i), font = b9.qX.sL(1, Math.floor(.9 * j)), a6n--, this.setTime()
	}, this.j1 = function() {
		this.setTime() && (be.dj = !0)
	}, this.setTime = function() {
		for (var dr = new Date, a6o = dr.getUTCMinutes(), a6p = dr.getUTCSeconds(), a6q = [0, 10, 20, 25, 30, 35, 40, 45, 50], a6r = (a6m = 3600 - 60 * a6o - a6p, a6m %= 300, 300), aB = 0; aB < a6q.length; aB++)
			if ((60 * a6o + a6p + a6m) % 3600 == 60 * a6q[aB]) {
				a6r = 0;
				break
			} return a6m += a6r, a6l = qE + a6s(Math.floor(a6m / 60)) + ":" + a6s(a6m % 60), a6n !== (a6n = 60 * a6o + a6p) && (i = aQ.measureText(a6l, font), i += Math.floor(.4 * j), !0)
	}, this.ud = function() {
		ue.lineWidth = 1 + Math.floor(j / 15), ue.translate(h.i - j, Math.floor(.5 * (h.j + i))), ue.rotate(-Math.PI / 2), ue.fillStyle = bA.ng, ue.fillRect(0, 0, i, j), ue.strokeStyle = bA.nX, ue.strokeRect(0, 0, i, j + 10), ue.fillStyle = bA
			.nX, ue.font = font, b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 1), ue.fillText(a6l, Math.floor(i / 2), Math.floor(.59 * j)), ue.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cF() {
	var a4q, a6u, a6v, wo, a6w, a6x = 0,
		a6y = 0;

	function a70(aB) {
		var a72 = !0,
			yy = bA.ng,
			i = (1 === a4q[aB].id ? a4q[aB].y4.fillStyle = bA.oZ : a4q[aB].jI === aD.ei ? a4q[aB].y4.fillStyle = bA.nr : (ac.a73(a4q[aB].jI), a4q[aB].y4.fillStyle = b9.color.na(bN.fK[0], bN.fK[1], bN.fK[2], .87), 400 < b9.qf.a2L(bN.fK, 0, 2) && (
				a72 = !1, yy = bA.nX)), a4q[aB].canvas.width),
			ss = (a4q[aB].y4.clearRect(0, 0, i, wo), a4q[aB].y4.fillRect(0, 0, i, wo), a4q[aB].y4.fillStyle = yy, ! function(y4, i, wo) {
				y4.fillRect(0, 0, i, 1), y4.fillRect(0, wo - 1, i, 1), y4.fillRect(0, 0, 1, wo), y4.fillRect(i - 1, 0, 1, wo)
			}(a4q[aB].y4, i, wo), a6u + 2 * wo < i && (a4q[aB].y4.fillRect(i - a6u - wo, 0, 1, wo), a4q[aB].y4.fillText(ag.a0R[a4q[aB].jI], Math.floor((i - a6u) / 2), Math.floor(.57 * wo))), 0 !== a4q[aB].id ? 0 : wo);
		a4q[aB].y4.fillText(b9.rW.z9(a4q[aB].hU), Math.floor(i - a6u / 2 - ss), Math.floor(.57 * wo)),
			function(aB, i, ss, a72) {
				a4q[aB].y4.fillStyle = a72 ? bA.ni : bA.ne;
				a72 = Math.floor(a6u * a4q[aB].hU / a4q[aB].a79);
				a4q[aB].y4.fillRect(Math.floor(i - a6u - ss), wo - a6w, a72, a6w)
			}(aB, i, ss, a72), 0 === a4q[aB].id ? (a76(aB, i, a72, yy), function(aB, i, a72) {
				a4q[aB].y4.strokeStyle = a72 ? bA.ny : bA.o8, a4q[aB].y4.fillRect(wo, 0, 1, wo);
				a72 = i - wo;
				a4q[aB].y4.beginPath(), a4q[aB].y4.moveTo(Math.floor(.3 * wo + a72), Math.floor(wo / 2)), a4q[aB].y4.lineTo(Math.floor(wo - .3 * wo + 0 + a72), Math.floor(wo / 2)), a4q[aB].y4.stroke(), a4q[aB].y4.beginPath(), a4q[aB].y4.moveTo(
					Math.floor(wo / 2 + a72), Math.floor(.3 * wo)), a4q[aB].y4.lineTo(Math.floor(wo / 2 + a72), Math.floor(wo - .3 * wo + 0)), a4q[aB].y4.stroke()
			}(aB, i, a72)) : a76(aB, 2 * wo, a72, yy)
	}

	function a76(aB, i, a72, yy) {
		a4q[aB].y4.strokeStyle = a4q[aB].a7A ? bA.np : a72 ? bA.oE : bA.oF, a4q[aB].y4.fillStyle = yy, a4q[aB].y4.fillRect(i - wo, 0, 1, wo), a4q[aB].y4.lineWidth = Math.max(Math.floor(wo / 12), 3), a4q[aB].y4.lineCap = "round";
		a72 = .35;
		i = wo + 1, a4q[aB].y4.beginPath(), a4q[aB].y4.moveTo(Math.floor(i - a72 * wo + 0), Math.floor(a72 * wo)), a4q[aB].y4.lineTo(Math.floor(i - wo + a72 * wo), Math.floor(wo - a72 * wo + 0)), a4q[aB].y4.stroke(), a4q[aB].y4.beginPath(), a4q[aB]
			.y4.moveTo(Math.floor(i - wo + a72 * wo), Math.floor(a72 * wo)), a4q[aB].y4.lineTo(Math.floor(i - a72 * wo + 0), Math.floor(wo - a72 * wo + 0)), a4q[aB].y4.stroke()
	}

	function a7M(g, a7K) {
		for (var hU, aB = a7K - 1; 0 <= aB; aB--) hU = ad.fy(aD.eV, aB), g[aB].hU !== hU && (g[aB].hU = hU, g[aB].a79 = Math.max(hU, g[aB].a79), g[aB].a71 = !0)
	}

	function a7Q(g, a7O) {
		for (var t5 = aD.eV << 3, a6P = bM.y.a6P, ly = bM.y.ly, a7S = bM.y.a7S, aB = a7O - 1; 0 <= aB; aB--) {
			var a7T = a7S[t5 + aB],
				hU = a6P[a7T];
			g[aB].hU !== hU ? (g[aB].hU = hU, g[aB].a79 = Math.max(hU, g[aB].a79), g[aB].a71 = !0) : g[aB].a7A || ly[a7T] % 64 != 5 || (g[aB].a7A = !0, g[aB].a71 = !0)
		}
	}

	function a6z(a4r) {
		a4r.canvas = document.createElement("canvas"), bR.wN.font = a6v;
		var i = a6u;
		a4r.jI < aD.ei && 0 === a4r.id && (i += Math.floor(bR.wN.measureText(ag.a0R[a4r.jI] + "000").width)), i += wo, 0 === a4r.id && (i += wo), a4r.canvas.width = i, a4r.canvas.height = wo, a4r.y4 = a4r.canvas.getContext("2d", {
			alpha: !0
		}), a4r.y4.font = a6v, b9.qX.textBaseline(a4r.y4, 1), b9.qX.textAlign(a4r.y4, 1)
	}

	function a7G(aB) {
		return aU.a7U() ? h.i - a4q[aB].canvas.width - bb.gap : aU.es
	}

	function a7H(aB) {
		return Math.floor(2 * bb.gap + (aU.a7U() ? aW.j + bb.gap : 0) + aU.j + aB * (1.3 * wo))
	}
	this.db = function() {
		a6x = a6y = 0, a4q = [], this.resize()
	}, this.resize = function() {
		a6v = aN.a5X, wo = aN.fontSize + 5, wo = Math.floor(1.25 * wo), a0.a1.hu() && (wo = Math.floor(1.25 * wo)), a6w = Math.floor(.15 * wo), bR.wN.font = a6v, a6u = Math.floor(bR.wN.measureText("02 000 000 0000").width);
		for (var aB = a4q.length - 1; 0 <= aB; aB--) a6z(a4q[aB]), a70(aB)
	}, this.mS = function() {
		for (var aB = a4q.length - 1; 0 <= aB; aB--) a4q[aB].a71 && (a4q[aB].a71 = !1, a70(aB))
	}, this.gy = function(lL, lM) {
		if (2 !== aD.zs && 0 !== ag.mg[aD.eV] && !aD.gu && !b9.g7.jW(aD.eV))
			for (var a7B, a7C, a7D, a7E = a0.a1.hu() ? wo : 0, a7F = a0.a1.hu() ? Math.floor(.15 * wo) : 0, aB = a4q.length - 1; 0 <= aB; aB--)
				if (a7B = a7G(aB), a7C = a7H(aB), a7D = a4q[aB].canvas.width, a7C - a7F <= lM && lM <= a7C + wo + a7F) {
					if (a7B - a7E <= lL && lL <= a7B + wo + a7E) return a4q[aB].a7A || (a4q[aB].a71 = !0, a4q[aB].a7A = !0, 0 === a4q[aB].id ? b7.hB.pD(a4q[aB].jI) : b7.hB.pC(a4q[aB].jI)), !0;
					if (0 === a4q[aB].id && a7B + a7D - wo - a7E <= lL && lL <= a7B + a7D + a7E) return bU.a5G(3), b7.hB.hI(aR.hF(), a4q[aB].jI), !0
				} return !1
	}, this.j1 = function() {
		var a2T, a2U, g, a7K;
		0 === ag.mg[aD.eV] || b9.g7.jW(aD.eV) && !aD.gu || (a2T = a4q.slice(0, a6x), a2U = a4q.slice(a6x, a6x + a6y), g = a2T, a7K = ad.fs(aD.eV), function(g, a7K) {
			if (a6x !== a7K) return 1;
			for (var aB = a7K - 1; 0 <= aB; aB--)
				if (g[aB].jI !== ad.fx(aD.eV, aB)) return 1;
			return
		}(g, a7K) ? a7M(g = function(g, a7K) {
			var aB, jI, f5, hU, a5y = [];
			loop: for (aB = 0; aB < a7K; aB++) {
				for (jI = ad.fx(aD.eV, aB), f5 = 0; f5 < g.length; f5++)
					if (g[f5].jI === jI) {
						a5y.push(g.splice(f5, 1)[0]);
						continue loop
					} hU = ad.fy(aD.eV, aB), a6z(hU = {
					jI: jI,
					hU: hU,
					a79: hU,
					id: 0,
					a71: !0,
					a7A: !1,
					canvas: null,
					y4: null
				}), a5y.push(hU)
			}
			return a5y
		}(g, a7K), a7K) : a7M(g, a7K), a2T = g, a2U = function(g) {
			var a7O = bM.y.pp[aD.eV];
			return function(g, a7O) {
				if (a6y !== a7O) return 1;
				for (var t5 = aD.eV << 3, m0 = bM.y.m0, a7S = bM.y.a7S, aB = a7O - 1; 0 <= aB; aB--) {
					var a7T = a7S[t5 + aB];
					if (g[aB].jI !== m0[a7T]) return 1
				}
				return
			}(g, a7O) ? a7Q(g = function(g, a7O) {
				var aB, jI, f5, a5y = [],
					t5 = aD.eV << 3,
					m0 = bM.y.m0,
					a6P = bM.y.a6P,
					a7S = bM.y.a7S;
				loop: for (aB = 0; aB < a7O; aB++) {
					var a7T = a7S[t5 + aB];
					for (jI = m0[a7T], f5 = 0; f5 < g.length; f5++)
						if (g[f5].jI === jI) {
							a5y.push(g.splice(f5, 1)[0]);
							continue loop
						} a7T = a6P[a7T], a6z(a7T = {
						jI: jI,
						hU: a7T,
						a79: a7T,
						id: 1,
						a71: !0,
						a7A: !1,
						canvas: null,
						y4: null
					}), a5y.push(a7T)
				}
				return a5y
			}(g, a7O), a7O) : a7Q(g, a7O), g
		}(a2U), a6x = a2T.length, a6y = a2U.length, a4q = a2T.concat(a2U))
	}, this.ud = function() {
		if (0 !== ag.mg[aD.eV] && (!b9.g7.jW(aD.eV) || aD.gu))
			for (var aB = a4q.length - 1; 0 <= aB; aB--) ue.drawImage(a4q[aB].canvas, a7G(aB), a7H(aB))
	}
}

function cG() {
	var a5k, kD, a7V, a7W, j, a5X, fontSize, a7X, a7Y, a7Z, a7a, canvas, y4, mt, a7b;

	function uv(aB) {
		return L(0 === aB ? 103 : 1 === aB ? 104 : 2 === aB ? 105 : 106)
	}

	function a7i() {
		ue.drawImage(canvas, bb.gap + (aD.hf ? bb.gap + bg.a7j() : 0), a7k + 2 * bb.gap)
	}

	function a7c() {
		canvas.width = a5k[0].width + a7Z, canvas.height = j + a7Z, (y4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a5k[0].width + a7Z, j + a7Z), y4.translate(Math.floor(a7Z / 2), Math.floor(a7Z / 2)), y4.lineWidth = a7Z, y4.fillStyle = 1 === a5k[0].a7h ? bA.nl : bA.nd, a7l(), y4.fill(), y4.strokeStyle = 1 === a5k[0].a7h ? bA.nX :
			bA.ng, a7l(), y4.stroke(), b9.qX.textAlign(y4, 1), b9.qX.textBaseline(y4, 1), y4.fillStyle = 1 === a5k[0].a7h ? bA.nX : bA.ng, y4.font = a5X[0], y4.fillText(uv(a5k[0].a7g), Math.floor(a5k[0].width / 2), Math.floor(.72 * a7X[0] * j)), y4
			.font = a5X[1], y4.fillText(a5k[0].qE, Math.floor(a5k[0].width / 2), Math.floor((a7X[0] + .48 * a7X[1]) * j))
	}

	function a7l() {
		y4.beginPath(), y4.moveTo(a7a, 0), y4.lineTo(a5k[0].width - a7a, 0), y4.lineTo(a5k[0].width, a7a), y4.lineTo(a5k[0].width, j - a7a), y4.lineTo(a5k[0].width - a7a, j), y4.lineTo(a7a, j), y4.lineTo(0, j - a7a), y4.lineTo(0, a7a), y4.closePath()
	}
	this.db = function() {
		kD = 4, a7V = a7W = mt = 0, a5k = [], a5X = new Array(2), fontSize = new Array(2), (a7X = new Array(2))[0] = .3, a7X[1] = .7, a7Y = new Array(4), canvas = document.createElement("canvas"), a7b = be.eK + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hu() ? .0725 : .058) * h.hv), fontSize[0] = Math.floor(.85 * a7X[0] * j), fontSize[1] = Math.floor(.85 * a7X[1] * j), a5X[0] = b9.qX.sL(1, fontSize[0]), a5X[1] = b9.qX.sL(1, fontSize[1]), aB = a7Y.length -
			1; 0 <= aB; aB--) a7Y[aB] = this.measureText(uv(aB) + "000", a5X[0]);
		if (a7Z = Math.floor(1 + .05 * j), a7a = Math.floor(.2 * j), 0 < a5k.length) {
			for (aB = a5k.length - 1; 0 <= aB; aB--) i = this.measureText(a5k[aB].qE + "00", a5X[1]), a5k[aB].width = i < a7Y[aB] ? a7Y[aB] : i;
			a7c()
		}
	}, this.j1 = function() {
		0 !== kD && (4 === kD ? be.eK > a7b && (kD = 0, 1 === aD.zs) && aQ.a0E(bR.wH.wI[bR.eR].name, 3, 1, 9) : (1 === kD ? (0 === a7V && (a7c(), a7V = 1e-4), 1 <= (a7V += .002 * (be.eK - mt)) && (a7W = 0, kD = 2, a7V = 1), be.dj = !0) : 2 ===
			kD ? ((a7W += (be.eK - mt) / 1e3) > a5k[0].eD || 1 < a7W && 1 < a5k.length) && (kD = 3) : 3 === kD && ((a7V -= .002 * (be.eK - mt)) <= 0 && (a7V = 0, a5k.shift(), kD = 0 < a5k.length ? 1 : 0), be.dj = !0), mt = be.eK))
	}, this.measureText = function(qE, a5X) {
		return ue.font = a5X, Math.floor(ue.measureText(qE).width)
	}, this.jF = function(a7f, aB) {
		this.a0E(ag.a0R[a7f], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0E = function(qE, a7g, a7h, eD) {
		var i;
		qE.length && (i = (i = this.measureText(qE + "00", a5X[1])) < a7Y[a7g] ? a7Y[a7g] : i, a5k.push({
			qE: qE,
			width: i,
			a7g: a7g,
			a7h: a7h,
			eD: eD
		}), 0 === kD) && (a7V = 0, kD = 1, mt = be.eK)
	}, this.ud = function() {
		0 !== kD && 0 !== a7V && (a7V < 1 ? (ue.globalAlpha = a7V, a7i(), ue.globalAlpha = 1) : a7i())
	}
}

function co() {
	var j, canvas, y4, a7m, a7n, a7o, a7p, a71, a7q, a7r, a7s, a7t, a6V = !1,
		a2h = (this.hX = !1, this.i = 0, new Array(2)),
		a7u = 0;

	function mT() {
		var i = av.i,
			l1 = (a71 = !1, y3(y4, i, j), Math.floor(i / 2));
		1 === a7m ? (y4.fillStyle = bA.o0, y4.fillRect(l1, 0, l1, j)) : -1 === a7m && (y4.fillStyle = bA.oG, y4.fillRect(0, 0, l1, j)), y5(y4, i, j, 2);
		var l1 = (l1 = Math.floor(.25 * j)) < 2 ? 2 : l1,
			a6f = (y4.fillStyle = bA.nm, Math.floor((j - 4) * a7n[1] / a7o[1]));
		0 < a6f && y4.fillRect(2, j - 2 - a6f, l1, a6f), 0 < (a6f = Math.floor((j - 4) * a7n[0] / a7o[0])) && y4.fillRect(i - 2 - l1, j - 2 - a6f, l1, a6f);
		l1 = (l1 = Math.floor(j / 8)) < 2 ? 2 : l1, y7(y4, Math.floor(.4 * j), 0, j, l1, .5, !1), y7(y4, Math.floor(i - 1.4 * j), 0, j, l1, .5, !0), a6f = 1.1 * j / a2h[0].width;
		y4.imageSmoothingEnabled = !0, y4.setTransform(a6f, 0, 0, a6f, (i - a6f * a2h[0].width) / 2, -.05 * j), y4.drawImage(a2h[+a6V], 0, 0), y4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7z() {
		a7t = -1, a6V = ah.a80(), aN.a4C(257), aN.a6U(a6V), av.hX = !0, a71 = !0, a7q = 360;
		for (var fD, dr = 0, aB = al.k9 - 1; 0 <= aB; aB--) b9.g7.jW(al.kA[aB]) || (dr += ag.gZ[al.kA[aB]]);
		a6V ? a7o[0] = Math.max(bK.ds(3 * dr, 4), 1) : aD.hf ? 9 === aD.kQ && 8 === bf.kV[bg.kg()] ? a7o[0] = Math.max(dr, 1) : (fD = bK.ds(100 * bg.ke(), aD.js), fD = bK.ht(200 - 2 * fD, 40, 100), fD = bK.ds(fD * dr, 100), a7o[0] = Math.max(fD,
			1)) : a7o[0] = Math.max(bK.ds(3 * dr, 5), 1), a7o[1] = Math.max(dr - a7o[0], 1)
	}

	function a7v() {
		a7s = be.k5(), a71 = !0, a7q = a7m = 0, a7p = [], av.hX = !1, aN.zz(247), a7n[0] = a7n[1] = 0, aN.a4C(673)
	}

	function y0() {
		return aR.a69(aN.a65()) ? __fx.settings.keybindButtons ? aR.eu - 2 * (j + bb.gap) : aR.eu - j - bb.gap : bB.a69(aN.a68()) ? bB.y0() - j - bb.gap : h.j - j - bj.a4w() * bb.gap
	}
	this.dc = function() {
		for (var aB = 0; aB < 2; aB++) a2h[aB] = b9.canvas.yc(ab.get(3), 8 - aB, bA.or), a2h[aB] = b9.canvas.a2j(a2h[aB])
	}, this.db = function() {
		a7s = -1e4, a7r = a7u = 0, a7t = -1, this.hX = !1, a71 = a6V = !1, a7n = [a7m = a7q = 0, 0], a7o = [1, 1], a7p = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, y4 = canvas.getContext("2d", {
			alpha: !0
		}), mT()
	}, this.mS = function() {
		a71 && mT()
	}, this.gy = function(es, eu) {
		return !!this.hX && !(es < h.i - this.i - bb.gap || eu < y0() || (aD.gu || this.hY(aD.eV) && (aM.gv && aM.a1y(), b7.hB.hZ(es > h.i - bb.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j1 = function() {
		0 < a7r ? 0 === --a7r && a7v() : this.hX ? 180 == --a7q && 3 * a7n[0] < a7o[0] ? a7v() : a7n[0] >= a7o[0] ? a6V ? bQ.zU.zn() : bQ.zU.zr() : a7n[1] >= a7o[1] ? a7r = 4 : a7q <= 0 && a7v() : ! function() {
			var a82 = be.k5();
			if (a82 % 40 == 14) {
				if (a7u) return !(a82 < a7u) && !(a82 < a7s + 535) && (a7u = a82 + 1071, b9.g7.a3G()) ? (a7z(), 1) : 0;
				(1 === al.k9 || (aD.hf ? bg.ke() : ag.gZ[li[0]]) >= bK.ds(96 * aD.js, 100)) && (a7u = a82 + 535)
			}
			return
		}() && 0 <= a7t && (aN.yL(250, L(107, [ag.a0R[a7t]]), 673, a7t, bA.ng, bA.nd, -1, !0), a7z())
	}, this.zt = function() {
		this.hX && a7n[0] < a7o[0] && a7v()
	}, this.q7 = function(player, a83) {
		var a84 = L(a83 ? 108 : 109, [ag.a0R[player]]),
			a84 = (aN.yL(450, a84, 257, player, a83 ? bA.ny : bA.oD, bA.nd, -1, !0), a7p.push(player), a71 = !0, aD.kS ? Math.max(a7o[0], a7o[1]) : ag.gZ[player]),
			a84 = Math.max(a84, 1);
		a83 ? a7n[0] += a84 : a7n[1] += a84, player === aD.eV && (a7m = a83 ? 1 : -1)
	}, this.ud = function() {
		var eu;
		this.hX && (eu = y0(), ue.drawImage(canvas, h.i - this.i - bb.gap, eu))
	}, this.ha = function(player) {
		return !(!aD.kS && be.k5() < a7s + 140 || 0 !== a7q || !b9.g7.gw(1) || !b9.g7.gx(player) || 10 <= jt[player] && !b9.g7.a3a(player, 9))
	}, this.hY = function(gJ) {
		if (!b9.g7.gw(1)) return !1;
		if (!b9.g7.gx(gJ)) return !1;
		if (!this.hX) return !1;
		for (var aB = a7p.length - 1; 0 <= aB; aB--)
			if (a7p[aB] === gJ) return !1;
		return !0
	}, this.hW = function(player) {
		a7t = player
	}
}

function cH() {
	var i, es, a85, canvas, y4, hX, iL, a43, a5X, a71, a86 = 11 / 12;

	function a88() {
		var a78 = Math.floor(iL * (i - 2 * a85)),
			a8B = 1 + Math.floor(.0625 * aR.j),
			a8C = 1 + Math.floor(.3 * aR.j),
			a8D = Math.floor(.55 * aR.j);
		y4.clearRect(0, 0, i, aR.j), y4.fillStyle = bA.nc, y4.fillRect(0, 0, a85, aR.j), y4.fillRect(a85 + a78, 0, i - a85 - a78, aR.j), y4.fillStyle = iL < 1 / 3 ? "rgba(" + Math.floor(3 * iL * 130) + ",130,0,0.85)" : iL < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iL - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iL - 2 / 3) * 130) + ",0.85)", y4.fillRect(a85, 0, a78, aR.j), y4.fillStyle = bA.ng, y4.fillRect(0, 0, i, 1), y4.fillRect(0, aR.j - 1, i, 1), y4
			.fillRect(0, 0, 1, aR.j), y4.fillRect(a85, 0, 1, aR.j), y4.fillRect(a85 + a78, 0, 1, aR.j), y4.fillRect(i - a85, 0, 1, aR.j), y4.fillRect(i - 1, 0, 1, aR.j), y4.fillRect(Math.floor(.25 * aR.j) + a8C, Math.floor((aR.j - a8B) / 2), aR.j -
				2 * a8C, a8B), y4.fillRect(Math.floor(i - 1.25 * aR.j) + a8C, Math.floor((aR.j - a8B) / 2), aR.j - 2 * a8C - a8C % 2, a8B), y4.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8B) / 2), a8C, a8B, aR.j - 2 * a8C - a8C % 2),
			a43 = b9.g7.iK(aD.eV, aR.hF()), y4.fillText(b9.rW.z9(a43) + " (" + b9.rW.a3w(100 * iL, +(iL < .1)) + ")", Math.floor(.5 * i), a8D)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iL = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a1u(arg1);

	function a8I(a2G) {
		return !(1 < a2G && 1 === iL || (1 < a2G && a2G * iL - iL < 1 / 1024 ? a2G = (iL + 1 / 1024) / iL : a2G < 1 && iL - a2G * iL < 1 / 1024 && (a2G = (iL - 1 / 1024) / iL), iL = bK.ht(iL * a2G, 1 / 1024, 1), a88(), 0))
	}

	function a8J(lL) {
		return iL !== (iL = bK.ht((lL - es - a85) / (i - 2 * a85), 1 / 1024, 1)) && (a88(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a88(), be.dj = !0
	}, this.eu = 0, this.gz = !1, this.db = function() {
		hX = !aD.h9 && !aD.gu, a71 = !1, iL = .5, a43 = 0, this.gz = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hu() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hv), i = h.i - 4 * bb.gap - this.j) : (i = Math.floor((a0.a1.hu() ? .65 : .389) * h.hv), i += 12 - i % 12, this.j = Math.floor(i / 12)), a85 = Math.floor(3 * this.j / 2), a5X =
			b9.qX.sL(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, ue), canvas.height = this.j, (y4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5X, b9.qX.textBaseline(y4, 1), b9.qX.textAlign(y4, 1), this.a87(), a88()
	}, this.a87 = function() {
		es = a0.a1.hu() && h.i < .8 * h.j ? this.j + 3 * bb.gap : Math.floor((h.i - i) / 2), this.eu = h.j - this.j - bj.a4w() * bb.gap
	}, this.mS = function() {
		a71 && (a71 = !1, a88())
	}, this.hX = function() {
		return !(!hX || aM.gv && es < Math.floor(bb.gap + 5.5 * this.j))
	}, this.a69 = function(a8E) {
		return !!this.hX() && es + i > h.i - a8E - bb.gap
	}, this.a4A = function() {
		hX = !aD.gu
	}, this.a7v = function() {
		hX = !1
	}, this.hF = function() {
		return bK.ht(Math.floor(1024 * iL + .5) - 1, 0, 1023)
	}, this.a1r = function(lL, lM) {
		return this.hX() && es < lL && lL < es + i && lM > this.eu
	}, this.gy = function(lL, lM) {
		if (!this.hX()) return !1;
		if (!(__fx.settings.keybindButtons && lM > this.eu - Math.floor(bb.gap / 4) - this.j && lM < this.eu - Math.floor(bb.gap / 4) && __fx.mobileKeybinds.click(lL - es))) {
			if (!aR.a1r(lL, lM)) return !1;
			aS.nB = !1, ! function(s8, lL, lM) {
				if (function(lL, lM) {
						return es < lL && lL < es + a85 && lM > aR.eu
					}(lL, lM)) return a8I(a86);
				if (function(lL, lM) {
						return es + i - a85 < lL && lL < es + i && lM > aR.eu
					}(lL, lM)) return a8I(1 / a86);
				return s8.gz = !0, a8J(lL)
			}(this, lL, lM) || (be.dj = !0)
		}
		return !0
	}, this.a1u = function(nI) {
		0 !== aD.zs && this.hX() && a8I(nI) && (be.dj = !0)
	}, this.a1Q = function(deltaY) {
		var nI;
		return !(0 === deltaY || !this.hX()) && a8I(nI = 0 < deltaY ? (nI = 400 / (400 + deltaY)) < a86 ? a86 : nI : 1 / a86 < (nI = (400 - deltaY) / 400) ? 1 / a86 : nI)
	}, this.a1N = function(lL) {
		return !!this.gz && a8J(lL)
	}, this.a1n = function() {
		this.gz = !1
	}, this.j1 = function() {
		this.hX() && a43 !== b9.g7.iK(aD.eV, this.hF()) && (a71 = !0)
	}, this.ud = function() {
		this.hX() && (ue.drawImage(canvas, es, this.eu), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(ue, es, this.eu)
	}
}

function cy() {
	var canvas, y4, a8K, font, a8L = 0,
		a8M = !1,
		a8N = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8O = 5;

	function a8V() {
		if (a8M) {
			var aB, el = a8N.length,
				a8D = Math.floor(.5 * a8K.j),
				j = el * a8D,
				es = Math.floor(Math.floor(a8K.es) + .3 * a8K.i - .5),
				eu = Math.floor(Math.floor(a8K.eu) - j),
				i = Math.floor(.4 * a8K.i + 2.5);
			for (ue.fillStyle = bA.nc, ue.fillRect(es, eu, i, j), ue.fillStyle = bA.o5, ue.fillRect(es, eu + a8O * a8D, i, a8D), ue.fillStyle = bA.ng, ue.fillRect(es, eu, 2, j), ue.fillRect(es, eu, i, 2), ue.fillRect(es + i - 2, eu, 2, j), aB =
				1; aB < el; aB++) ue.fillRect(es, eu + aB * a8D, i, 2);
			for (ue.fillStyle = bA.ng, b9.qX.textAlign(ue, 1), b9.qX.textBaseline(ue, 1), ue.font = b9.qX.sL(0, .6 * a8D), es += .5 * i, aB = 0; aB < el; aB++) ue.fillText(a8d(aB), es, eu + (aB + .6) * a8D)
		}
		ue.drawImage(canvas, Math.floor(a8K.es), Math.floor(a8K.eu))
	}

	function mT(s8) {
		var es, n6, n7, a8D;
		y4.clearRect(0, 0, Math.floor(a8K.i), Math.floor(a8K.j)), y4.fillStyle = bA.nc, y4.fillRect(0, 0, Math.floor(a8K.i), Math.floor(a8K.j)), aD.n9 && (y4.fillStyle = bA.o5, y4.fillRect(0, 0, Math.floor(.3 * a8K.i), Math.floor(a8K.j))), y4
			.fillStyle = bA.ng, y4.fillText("Hide UI", .15 * a8K.i, .5 * a8K.j), y4.fillRect(Math.floor(.3 * a8K.i - .5), 0, 2, Math.floor(a8K.j)), es = .5 * a8K.i, y4.fillText("Replay Speed", es, .31 * a8K.j), y4.fillText(a8d(a8O), es, .69 * a8K.j),
			y4.fillRect(Math.floor(.7 * a8K.i - .5), 0, 2, Math.floor(a8K.j)), s8.a4i ? (es = Math.floor(.02 * a8K.i), s8 = Math.floor(.025 * a8K.i), n6 = Math.floor(.85 * a8K.i - es - .5 * s8), n7 = Math.floor(.25 * a8K.j), a8D = Math.floor(a8K.j) -
				2 * n7, y4.fillRect(n6, n7, es, a8D), y4.fillRect(n6 + es + s8, n7, es, a8D)) : function() {
				var i = Math.floor(.46 * a8K.j),
					j = Math.floor(.23 * a8K.j),
					es = Math.floor(.85 * a8K.i - .5 * i + i / 12),
					eu = Math.floor(.5 * a8K.j - j);
				y4.beginPath(), y4.moveTo(es, eu), y4.lineTo(es + i, eu + j), y4.lineTo(es, eu + (j << 1)), y4.fill()
			}(), y4.fillRect(0, 0, Math.floor(a8K.i), 2), y4.fillRect(0, 0, 2, Math.floor(a8K.j)), y4.fillRect(0, Math.floor(a8K.j) - 2, Math.floor(a8K.i), 2), y4.fillRect(Math.floor(a8K.i - 2), 0, 2, Math.floor(a8K.j))
	}

	function a8d(aB) {
		return 5 === aB ? "Normal" : "" + a8N[aB]
	}
	this.a4i = !1, this.db = function() {
		aD.gu && (a8O = 5, this.a4i = !1, a8M = !1, a8K = new r8([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8P = function() {
		return a8N[a8O]
	}, this.y0 = function() {
		return a8K.eu
	}, this.a69 = function(a8E) {
		return !!aD.gu && a8K.es + a8K.i > h.i - a8E - bb.gap
	}, this.resize = function() {
		aD.gu && (a8K.resize(), a8K.eu -= (bj.a4w() - 1) * bb.gap, font = b9.qX.sL(0, .3 * a8K.j), (canvas = document.createElement("canvas")).width = Math.floor(a8K.i), canvas.height = Math.floor(a8K.j), (y4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b9.qX.textAlign(y4, 1), b9.qX.textBaseline(y4, 1), mT(this))
	}, this.a1x = function(a8Q) {
		0 === aD.zs || t.hX() || a8Q !== aD.n9 && (aD.n9 = a8Q, bg.resize(), be.dj = !0, aD.gu) && (a8L = be.eK + 2e3, mT(this))
	}, this.gy = function(es, eu) {
		if (!aD.gu) return !1;
		if (es < a8K.es || eu < a8K.eu || es > a8K.es + a8K.i) return a8M && function(s8, es, eu) {
			var el = a8N.length,
				a8D = Math.floor(.5 * a8K.j),
				j = el * a8D,
				n6 = Math.floor(Math.floor(a8K.es) + .3 * a8K.i - .5),
				j = Math.floor(Math.floor(a8K.eu) - j),
				i = Math.floor(.4 * a8K.i + 2.5);
			return a8M = !1, be.dj = !0, es < n6 || n6 + i < es || eu < j || (a8O = a8U(0, Math.floor((eu - j) / a8D), el - 1), mT(s8)), !0
		}(this, es, eu);
		if ((es -= a8K.es) < .3 * a8K.i) a8M = !1, this.a1x(!aD.n9);
		else {
			if (es < .7 * a8K.i) return a8M = !a8M, be.dj = !0;
			this.a1z(!1)
		}
		return !0
	}, this.a1z = function(a8S) {
		2 === aD.zs ? (this.a1x(!1), t.u(3)) : (a8M = !1, this.a4i = !this.a4i, this.a4i ? (aM.gv && aM.a1y(), a0.a1.setState(1)) : a8S || aM.a5d(), be.dj = !0, mT(this))
	}, this.a8T = function() {
		this.a4i = !1, aM.a5d(), be.dj = !0, mT(this)
	}, this.a1g = function(es, eu) {
		return !!aD.n9 && (0 <= aM.gy(es, eu) || (aD.gu ? ((be.eK > a8L || !this.gy(es, eu)) && aS.gy(es, eu), be.dj = !0, a8L = be.eK + 2e3) : aS.gy(es, eu)), !0)
	}, this.j1 = function() {
		aD.gu && aD.n9 && be.eK > a8L - 1e3 && be.eK < a8L && (be.dj = !0)
	}, this.a00 = function() {
		aD.gu && (this.a4i = !1, be.dj = !0, mT(this))
	}, this.ud = function() {
		if (aD.gu) {
			if (aD.n9) {
				if (be.eK > a8L) return;
				if (be.eK > a8L - 1e3) return ue.globalAlpha = a8U(0, (1e3 - (be.eK - (a8L - 1e3))) / 1e3, 1), a8V(), void(ue.globalAlpha = 1)
			}
			a8V()
		}
	}
}

function cI() {
	var a8e, a8f, i, es, eu, a8g, a8h;
	this.db = function() {
		a8e = new Array(2), a8f = new Array(2), this.nB = !1, a8h = a8g = iN = iM = 0, hw = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.hu() ? .072 : .0502) * h.hv)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8e[aB] = document.createElement("canvas"), a8e[aB].width = i, a8e[aB].height = i, a8f[aB] = a8e[aB].getContext("2d", {
			alpha: !0
		});
		this.a87(),
			function() {
				for (var a8y = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8f[aB].clearRect(0, 0, i, i), a8f[aB].fillStyle = bA.nZ, a8f[aB].beginPath(), a8f[aB].arc(i / 2, i / 2, i / 2 - a8y, 0, 2 * Math.PI), a8f[aB].fill(), a8f[aB]
					.lineWidth = a8y, a8f[aB].fillStyle = bA.ng, a8f[aB].strokeStyle = bA.ng, a8f[aB].beginPath(), a8f[aB].arc(i / 2, i / 2, i / 2 - a8y, 0, 2 * Math.PI), a8f[aB].stroke(), y7(a8f[aB], 0, 0, i, a8y, .3, 0 === aB)
			}()
	}, this.xz = function() {
		return -iM / hw
	}, this.y0 = function() {
		return -iN / hw
	}, this.nL = function(a8l, i2) {
		iM = hw * a8l - i2
	}, this.nM = function(a8m, i3) {
		iN = hw * a8m - i3
	}, this.gy = function(a8k, a6A) {
		return aD.n9 || ! function(a8k, a6A) {
			return Math.pow(a8k - (es + i / 2), 2) + Math.pow(a6A - (eu + i / 2), 2) < i * i / 4 || Math.pow(a8k - (es + i / 2), 2) + Math.pow(a6A - (eu + 2 * i), 2) < i * i / 4
		}(a8k, a6A) || bi.eI.data[8].value ? (aH.nO() && (this.nB = !0, a8g = a8k, a8h = a6A), !1) : a6A < eu + 1.25 * i ? this.a1Q(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1Q(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1N = function(a8k, a6A) {
		var a8n, a8o, i5, i8;
		return !aH.nO() || (a8n = iM, a8o = iN, iM += i5 = a8g - a8k, iN += i8 = a8h - a6A, af.a1N(i5, i8), this.a8p(), a8g = a8k, a8h = a6A, a8n !== iM) || a8o !== iN
	}, this.a1Q = function(lL, lM, deltaY) {
		var nI;
		if (aH.nO()) {
			if (0 < deltaY) nI = (nI = 500 / (500 + deltaY)) < .5 ? .5 : nI;
			else {
				if (!(deltaY < 0)) return !1;
				nI = 2 < (nI = (500 - deltaY) / 500) ? 2 : nI
			}
			this.a8q(lL, lM, nI), be.dj = !0
		}
		return !0
	}, this.a8q = function(es, eu, eP) {
		var a2G;
		eP = a2G = (a2G = 1024 < (a2G = eP) * hw ? 1024 / hw : a2G) * hw < .125 ? .125 / hw : a2G, af.zoom(eP, es, eu),
			function(a2G, lL, lM) {
				hw *= a2G, iM = (iM + lL) * a2G - lL, iN = (iN + lM) * a2G - lM, aS.a8p()
			}(eP, es, eu)
	}, this.a8p = function() {
		var a8t = h.i / 16,
			a8u = 0,
			a8v = h.j / 16,
			a8w = 0;
		iM < -h.i + a8t && (a8u = -h.i + a8t - iM), iM > hw * bR.ew - a8t && (a8u = hw * bR.ew - a8t - iM), iN < -h.j + a8v && (a8w = -h.j + a8v - iN), iN > hw * bR.ex - a8v && (a8w = hw * bR.ex - a8v - iN), iM += a8u, iN += a8w, bZ.nN(), af.a8x(
			a8u, a8w)
	}, this.a87 = function() {
		es = h.i - i - bb.gap, eu = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ud = function() {
		bi.eI.data[8].value || (ue.drawImage(a8e[0], es, eu), ue.drawImage(a8e[1], es, Math.floor(eu + 3 * i / 2)))
	}
}

function cJ() {
	var g, a8z, a90, a91, gap, a92, a93, a94, a95, a96, a5X, a97, gq, a98, a78, a99, a9A;

	function a9E() {
		a91 = Math.floor(.2 * (a0.a1.hu() ? .07 : .035) * h.hv), a91 = a67(a0.a1.hu() ? 3 : 1, a91);
		var a9H = h.i / (g.length + gap);
		a91 = a91 < a9H ? a9H : a91, a78 = Math.floor((1 - gap) * a91), a8z = 0, a9I()
	}

	function a9I() {
		a8z = (a8z = a8z < -20 ? -20 : a8z) > (g.length - 15) * a91 ? (g.length - 15) * a91 : a8z, a93 = Math.floor(a8z / a91), a94 = (a94 = a93 + Math.floor(h.i / a91)) > g.length - 1 ? g.length - 1 : a94, a93 = (a93 = a94 < a93 ? a94 : a93) < 0 ?
			0 : a93;
		var l1 = a94;
		a92 = a90 / g[l1];
		for (var aB = a94 - 1; a93 <= aB; aB--) g[aB] > g[l1] && (l1 = aB, a92 = a90 / Math.pow(g[aB], a98))
	}

	function a9L(es) {
		es = Math.floor((a8z + h.i - es - gap * a91) / a91);
		return (es = es < -1 ? -1 : -1 === es ? 0 : es > g.length - 1 ? -1 : es) !== a95 && (a95 = es, -1 === a99 && 0 === a95 && aT.a9B && (a99 = setInterval(a9M, 100)), 1)
	}

	function a9N(aB) {
		var a9P = Math.floor(a92 * Math.pow(g[aB], a98));
		ue.fillRect(a8z + h.i - (aB + 1) * a91, h.j - a9P, a78, a9P)
	}

	function a9M() {
		var gJ;
		0 !== (a95 = 8 === aa.a14() ? -1 : a95) ? (a9A = (new Date).getTime(), clearInterval(a99), a99 = -1) : (gJ = g[1] / 864e3, -1 !== a9A && (gJ += ((new Date).getTime() - a9A) * g[1] / 864e5, a9A = -1), 0 < gJ && (g[0] += Math.floor(gJ), be
			.dj = !0))
	}
	this.a9B = !1, this.db = function() {
		a9A = a99 = -1, a95 = -(a98 = 1), this.a9C = !1, gq = 0, a97 = new Date, a8z = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a90 = Math.floor(.15 * h.j), a96 = (a96 = Math.floor((a0.a1.hu() ? .018 : .0137) * h.hv)) < 2 ? 2 : a96, a5X = b9.qX.sL(1, a96), a9E()
	}, this.a9F = function(a9G) {
		var aB;
		for (this.a9B = !0, aB = 0; aB < a9G.length; aB++) g.unshift(a9G[aB]);
		a9E(), be.dj = !0
	}, this.a9J = function() {
		a9I()
	}, this.a1N = function(es, eu) {
		eu > h.j - .6 * a90 ? this.a9C ? es !== gq && (a8z += es - gq, gq = es, a9I(), a9L(es), this.a9C = -1 !== a95, be.dj = !0) : a9L(es) && (be.dj = !0) : this.rY()
	}, this.rY = function() {
		-1 !== a95 && (this.a9C = !1, a95 = -1, be.dj = !0)
	}, this.a1Q = function(es, deltaY) {
		-1 !== a95 && (a8z += Math.floor(deltaY), a9I(), a9L(es), be.dj = !0)
	}, this.gy = function(es, eu) {
		this.a1N(es, eu), -1 !== a95 && (gq = es, this.a9C = !0)
	}, this.a1m = function() {
		-1 !== a95 && (this.a9C = !1)
	}, this.ud = function() {
		ue.fillStyle = bA.nj;
		for (var a9Q, month, dr, st, a9T, a9U, n7, a9V, a9W, aB = a94; a93 <= aB; aB--) a9N(aB);
		this.a9B && 0 === a93 && (ue.fillStyle = bA.oG, a9N(0)), -1 !== a95 && (ue.fillStyle = bA.ni, a9N(a95)), -1 !== a95 && (ue.font = a5X, b9.qX.textBaseline(ue, 2), (dr = new Date).setTime(a97.getTime() - 1e3 * a95 * 60 * 60 * 24), month =
			"month", a9Q = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dr), a9Q = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dr)), a9Q = a9Q + ", " + dr.getUTCDate() + " " + month + " " + dr.getFullYear(), month = 1 === g[a95] ? L(110) : L(111), month = b9.rW.z9(g[a95]) + " " + month, dr = Math.floor(ue.measureText(a9Q).width), st = Math
			.floor(ue.measureText(month).width), a9T = Math.floor(.5 * (dr + a96)), a9U = (a9U = a8z + h.i - (a95 + 1) * a91) < a9T ? a9T : a9U > h.i - a9T ? h.i - a9T : a9U, n7 = h.j - Math.floor(a92 * Math.pow(g[a95], a98)), a9V = Math
			.floor(1.1 * a96), a9W = n7 > h.j - a9V ? h.j - a9V : n7, ue.fillStyle = bA.nd, ue.fillRect(h.i - st - a96, a9W - a9V, st + a96, a9V), ue.fillRect(a9U - a9T, h.j - a9V, dr + a96, a9V), ue.fillStyle = bA.ng, b9.qX.textAlign(ue, 2),
			ue.fillText(month, Math.floor(h.i - .5 * a96), a9W), b9.qX.textAlign(ue, 1), ue.fillText(a9Q, a9U, h.j), ue.strokeStyle = bA.nk, ue.lineWidth = 1, ue.beginPath(), ue.moveTo(0, n7), ue.lineTo(h.i, n7), ue.closePath(), ue.stroke())
	}
}

function cK() {
	var a5X, i, eu, a9X, a9Y, canvas, y4, a71, a3M, a9Z, a9a, a9b, a9c;
	this.es = 0, this.j = 0, this.db = function() {
		a9Y = aD.a4I, a9a = "rgba(0,100,0,0.8)", a9b = "rgba(150,0,0,0.8)", a71 = a9Z = !0, a3M = ag.gn[aD.eV], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hu() ? .305 : .24) * h.hv), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5X = b9.qX.sL(1, Math.floor(.8 * this.j)), a9c = Math.floor(.5 * this.j), bR.wN.font = a5X, eu = bb.gap, a9X = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (y4 = canvas.getContext("2d", {
			alpha: !0
		})).font = a5X, b9.qX.textBaseline(y4, 1), b9.qX.textAlign(y4, 1), this.a9d()
	}, this.a7U = function() {
		return a0.a1.hu() && h.i < 1.2 * h.j
	}, this.a87 = function() {
		this.a7U() ? this.es = h.i - i - bb.gap : this.es = Math.floor(aV.a9e() + (h.i - aV.a9e() - aW.i - i) / 2 - .5 * bb.gap)
	}, this.mS = function() {
		a71 && (a71 = !1, this.a9d())
	}, this.a9d = function() {
		y4.clearRect(0, 0, i, this.j), y4.fillStyle = a9Z ? a9a : a9b, y4.fillRect(0, 0, i, this.j), y4.fillStyle = bA.ni, this.a9f(), this.a9g(), y4.fillStyle = ag.gn[aD.eV] >= ae.jo(aD.eV) ? bA.oD : bA.ng, y4.fillText(b9.rW.z9(a3M), Math.floor(
			i / 2), a9c), y4.fillStyle = bA.ng, y4.fillRect(0, 0, i, 1), y4.fillRect(0, 0, 1, this.j), y4.fillRect(0, this.j - 1, i, 1), y4.fillRect(i - 1, 0, 1, this.j)
	}, this.a9f = function() {
		var f6 = be.k5() % 100,
			f6 = (f6 = 9 - bK.ds(f6 -= f6 % 10, 10), Math.floor(f6 * (this.j - a9X) / 9));
		y4.fillRect(0, f6, a9X, this.j - f6), y4.fillRect(i - a9X, f6, a9X, this.j - f6)
	}, this.a9g = function() {
		y4.fillRect(a9X, this.j - a9X, Math.floor((i - 2 * a9X) * ag.gn[aD.eV] / a9Y), a9X)
	}, this.j1 = function() {
		var gJ = aD.eV;
		b9.g7.gx(gJ) && (gJ = ag.gn[gJ] - ag.a3L[gJ], a3M !== gJ ? (a9Y = a67(gJ, a9Y), a9Z = a3M < gJ && 10 <= gJ, a3M = gJ, a71 = !0) : be.k5() % 10 == 9 && (a71 = !0))
	}, this.ud = function() {
		0 === ag.mg[aD.eV] || aD.h9 || 2 === ag.a3D[aD.eV] || ue.drawImage(canvas, this.es, eu)
	}
}

function cL() {
	var a9h, a9i, a9j, a9k, a9l, a9m, a9n, a9o, a9p, a9q, a9r, a9s, a9t, a9u, a9v, a9w, a9x, a9y, a9z, aA0, aA1, aA2, position, aA3, aA4, aA5, aA6, aA7 = 1,
		aA8 = 1,
		aA9 = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.eV;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jt[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jt[aD.eV]);
	}

	function aAB() {
		a9n.clearRect(0, 0, a9h, a7k),
			a9n.fillStyle = bA.oW,
			a9n.fillRect(0, 0, a9h, a9s),
			a9n.fillStyle = bA.nc,
			a9n.fillRect(0, a9s, a9h, a7k - a9s);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jt[aD.eV]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aA2 = -1;
		if (__fx.leaderboardFilter.enabled && aA2 >= __fx.leaderboardFilter.filteredLeaderboard.length) aA2 = -1;
		playerPos >= position && aAD(playerPos - position, bA.o5),
			0 !== jt[aD.eV] && 0 === position && aAD(0, bA.oc),
			-1 !== aA2 && aAD(aA2, bA.nh),
			a9n.fillStyle = bA.nc,
			//console.log("drawing", aA2),
			a9n.clearRect(0, a7k - __fx.leaderboardFilter.tabBarOffset, a9h, __fx.leaderboardFilter.tabBarOffset);
		a9n.fillRect(0, a7k - __fx.leaderboardFilter.tabBarOffset, a9h, __fx.leaderboardFilter.tabBarOffset);
		a9n.fillStyle = bA.ng,
			a9n.fillRect(0, a9s, a9h, 1),
			a9n.fillRect(0, a7k - __fx.leaderboardFilter.tabBarOffset, a9h, 1),
			__fx.leaderboardFilter.drawTabs(a9n, a9h, a7k - __fx.leaderboardFilter.tabBarOffset, bA.o5),
			a9n.fillRect(0, 0, a9h, bb.yq),
			a9n.fillRect(0, 0, bb.yq, a7k),
			a9n.fillRect(a9h - bb.yq, 0, bb.yq, a7k),
			a9n.fillRect(0, a7k - bb.yq, a9h, bb.yq), a9n.font = a9i, b9.qX.textBaseline(a9n, 1), b9.qX.textAlign(a9n, 1), a9n.fillText(aA9, Math.floor((a9h + a9s - 22) / 2), Math.floor(a9q + a9j / 2));
		__fx.playerList.drawButton(a9n, 12, 12, a9s - 22);
		var f4, gK = playerPos < position + a9l - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9l)
				position = (result.length > a9l ? result.length : a9l) - a9l;
			//if (position >= result.length) position = result.length - 1;
			for (a9n.font = a9k, b9.qX.textAlign(a9n, 0), f4 = a9l - gK; 0 <= f4; f4--) {
				const pos = result[f4 + position];
				if (pos !== undefined)
					aAE(li[pos]), aAF(f4, pos, li[pos]);
			}
			for (b9.qX.textAlign(a9n, 2), f4 = a9l - gK; 0 <= f4; f4--) {
				const pos = result[f4 + position];
				if (pos !== undefined)
					aAE(li[pos]), aAG(f4, li[pos]);
			}
		} else {
			for (a9n.font = a9k, b9.qX.textAlign(a9n, 0), f4 = a9l - gK; 0 <= f4; f4--)
				aAE(li[f4 + position]), aAF(f4, f4 + position, li[f4 + position]);
			for (b9.qX.textAlign(a9n, 2), f4 = a9l - gK; 0 <= f4; f4--)
				aAE(li[f4 + position]), aAG(f4, li[f4 + position]);
		}
		2 == gK && (aAE(aD.eV), b9.qX.textAlign(a9n, 0), aAF(a9l - 1, jt[aD.eV], aD.eV), b9.qX.textAlign(a9n, 2), aAG(a9l - 1, aD.eV)), 0 === position && (gK = .7 * a9t / ab.get(4).height, a9n.setTransform(gK, 0, 0, gK, Math.floor(a9u + .58 * a9t +
			.5 * gK * ab.get(4).width), Math.floor(a9q + a9j + .4 * a9t)), a9n.imageSmoothingEnabled = !0, a9n.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), a9n.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAE(player) {
		aD.hf && (a9n.fillStyle = bf.aAI[bf.aAJ[player]])
	}

	function aAD(aB, aAK) {
		a9n.fillStyle = aAK, aB = a9l - 1 < aB ? a9l - 1 : aB;
		aAK = Math.floor((aB === a9l - 1 ? 2 : 0 === aB ? 1.15 : 1) * a9t), aAK = aB === a9l - 2 ? Math.floor(a9s + 9.15 * a9t) - Math.floor(a9s + 8.15 * a9t) : aAK;
		a9n.fillRect(0, Math.floor(a9s + (aB + (0 === aB ? 0 : .15)) * a9t), a9h, aAK)
	}

	function aAF(aAM, a3c, aB) {
		a9n.fillText(a9y[a3c], a9u, Math.floor(a9q + a9j + (aAM + .5) * a9t)), 1 === ag.a3D[aB] && (a9n.font = "italic " + a9k);
		a3c = Math.floor(a9q + a9j + (aAM + .5) * a9t);
		a9n.fillText(ag.a0R[aB], a9v, a3c), 0 !== ag.a3D[aB] && (a9n.font = a9k), aB < aD.k8 && 2 !== ag.a3D[aB] || a9n.fillRect(a9v, a3c + .35 * aA7, a9x[aB], Math.max(1, .1 * aA7))
	}

	function aAG(aAM, aB) {
		a9n.fillText(ag.gZ[aB], a9w, Math.floor(a9q + a9j + (aAM + .5) * a9t))
	}

	function aAV(eu) {
		return (eu -= bb.gap + a9s) < 0 ? Math.floor(eu / a9t) - 1 : eu < (a9l - 1) * a9t ? Math.floor(eu / a9t) : eu < a7k - a9s ? a9l - 1 : (eu -= a7k - a9s, a9l + Math.floor(eu / a9t))
	}

	function yp(es, eu) {
		return es >= bb.gap && es < bb.gap + a9h && eu >= bb.gap && eu < bb.gap + a7k
	}
	this.db = function() {
			var aB;
			for (aA4 = !1, aA6 = aA5 = aA3 = 0, aA2 = -1, a9l = a0.a1.hu() ? 6 : 10, aA8 = (position = 0) === (aA8 = bi.eI.data[11].value) ? 10 : 1 === aA8 ? 5 : 1, aA1 = !1, a9z = new Uint16Array(a9l + 1), aA0 = new Uint32Array(a9l + 1), a9p = aD
				.ei, li = new Uint16Array(a9p), jt = new Uint16Array(a9p), aB = a9p - 1; 0 <= aB; aB--) li[aB] = aB, jt[aB] = aB;
			this.resize(!0), a9x = new Uint16Array(aD.ei);
			var aAA = Math.floor(a9h - a9v - a9u - a9o);
			for (a9y = new Array(aD.ei), a9n.font = a9k, aB = aD.ei - 1; 0 <= aB; aB--) a9y[aB] = aB + 1 + ".", ag.a0R[aB] = b9.y4.a2t(ag.a0W[aB], a9k, aAA), a9x[aB] = Math.floor(a9n.measureText(ag.a0R[aB]).width);
			aAB()
		}, this.resize = function(db) {
			if (a7k = a0.a1.hu() ? (a9h = Math.floor(.335 * h.hv), Math.floor(a9l * a9h / 8)) : (a9h = Math.floor(.27 * h.hv), Math.floor(a9l * a9h / 10)), a9h = Math.floor(.97 * a9h), (a9m = document.createElement("canvas")).width = a9h, a9m
				.height = a7k, a9n = a9m.getContext("2d", {
					alpha: !0
				}), a9q = .025 * a9h, a9j = .16 * a9h, a9r = 0 * a9h, a9s = Math.floor(.45 * a9q + a9j), a9t = (a7k - a9j - 2 * a9q - a9r) / a9l,
				a9m.height = a7k += a9t, __fx.leaderboardFilter.tabBarOffset = Math.floor(a9t * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7k - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9h,
				a9i = b9.qX.sL(1, Math.floor(.55 * a9j)), aA7 = Math.floor((a0.a1.hu() ? .67 : .72) * a9t), a9k = b9.qX.sL(0, aA7), a9n.font = a9k, a9u = Math.floor(.04 * a9h), a9v = Math.floor((a0.a1.hu() ? .195 : .18) * a9h), a9o = Math.floor(a9n
					.measureText("00920600").width), a9n.font = a9i, a9w = a9h - a9u, !db) {
				a9n.font = a9k;
				for (var aB = aD.ei - 1; 0 <= aB; aB--) a9x[aB] = Math.floor(a9n.measureText(ag.a0R[aB]).width);
				aAB()
			}
			aA9 = b9.y4.a2t(L(112), a9i, .96 * a9h)
		}, this.a9e = function() {
			return a9h
		}, this.mS = function(bt, aAC) {
			(aAC || aA1 && (bt || be.k5() % aA8 == 0)) && (aA1 = !1, aAB())
		}, this.j1 = function() {
			! function() {
				for (var f4 = a9p - 1; 0 <= f4; f4--) 0 === ag.mg[li[f4]] && ! function(f4) {
					var aAT = li[f4];
					a9p--;
					for (var aB = f4; aB < a9p; aB++) li[aB] = li[aB + 1], jt[li[aB]] = aB;
					li[a9p] = aAT, jt[li[a9p]] = a9p
				}(f4)
			}();
			for (var aAR, nO = a9p - 1, f4 = 0; f4 < nO; f4++) ag.gZ[li[f4]] < ag.gZ[li[f4 + 1]] && (aAR = li[f4], li[f4] = li[f4 + 1], li[f4 + 1] = aAR, jt[li[f4]] = f4, jt[li[f4 + 1]] = f4 + 1);
			! function() {
				for (var dr = aA1, gK = (aA1 = !0, jt[aD.eV] >= a9l - 1 ? a9l - 2 : a9l - 1), aB = gK; 0 <= aB; aB--)
					if (a9z[aB] !== li[aB] || aA0[aB] !== ag.gZ[li[aB]]) return;
				(gK != a9l - 2 || a9z[a9l] === jt[aD.eV] && aA0[a9l] === ag.gZ[aD.eV]) && (aA1 = dr)
			}();
			for (var aB = a9l - 1; 0 <= aB; aB--) a9z[aB] = li[aB], aA0[aB] = ag.gZ[li[aB]];
			a9z[a9l] = jt[aD.eV], aA0[a9l] = ag.gZ[aD.eV];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gy = function(es, eu) {
			return !!yp(es, eu) && ((__fx.utils.isPointInRectangle(es, eu, bb.gap + 12, bb.gap + 12, a9s - 22, a9s - 22) && __fx.playerList.display(ag.a0W), true) &&
				!(eu - bb.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(es - bb.gap)) && (aA3 = be.eK, aA4 = !0, aA5 = aA6 = aAV(eu), bI.a20() && (es = a8U(-1, aA6, a9l), aA2 !== (es = es === a9l ?
					-1 : es)) && (aA2 = es, aAB(), be.dj = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAB(), be.dj = !0;
		},
		this.a1N = function(es, eu) {
			if (__fx.utils.isPointInRectangle(es, eu, bb.gap + 12, bb.gap + 12, a9s - 22, a9s - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAB(), be.dj = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAB(), be.dj = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(es, eu, bb.gap, bb.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), es - bb.gap
				)) return;
			var dr, aAU = aAV(eu);
			return aA4 ? (dr = position, (position = a8U(0, position += aA5 - aAU, aD.ei - a9l)) !== dr && (aAU = (aAU = a8U(-1, aA5 = aAU, a9l)) !== a9l && yp(es, eu) ? aAU : -1, aA2 = aAU, aAB(), be.dj = !0), !0) : (aAU = (aAU = a8U(-1, aAU,
				a9l)) === a9l || !yp(es, eu) || bI.a20() ? -1 : aAU, aA2 !== aAU && (aA2 = aAU, aAB(), be.dj = !0))
		}, this.a1m = function(es, eu) {
			if (!aA4) return !1;
			aA4 = !1;
			var aAU = aAV(eu);
			var isEmptySpace = false;
			return bI.a20() && -1 !== aA2 && (aA2 = -1, aAB(), be.dj = !0), be.eK - aA3 < 350 && aA6 === aAU && -1 !== (aAU = (aAU = a8U(-1, aAU, a9l)) !== a9l && yp(es, eu) ? aAU : -1) && (es = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					li[__fx.leaderboardFilter.filteredLeaderboard[aAU + position] ?? (isEmptySpace = true, jt[aD.eV])]) : li[aAU + position]), aAU === a9l - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jt[aD.eV]) >=
				position + a9l - 1 && (es = aD.eV), !isEmptySpace && aD.hf && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(es, ag.a0W, aD.kS), 0 !== ag.mg[es] && !isEmptySpace) && aH.n1(es, 800, !1, 0), !0
		}, this.a1Q = function(es, eu, deltaY) {
			var aAW;
			return !(aA4 || aD.n9 || (aAW = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !yp(es, eu)) || (es = (es = a8U(-1, aAV(eu), a9l)) === a9l || bI.a20() ? -1 : es, 0 < deltaY ? position < aD.ei - a9l && (position += Math.min(aD.ei - a9l -
				position, aAW), aA2 = es, aAB(), be.dj = !0) : 0 < position && (position -= Math.min(position, aAW), aA2 = es, aAB(), be.dj = !0), 0))
		}, this.ud = function() {
			ue.drawImage(a9m, bb.gap, bb.gap)
		}
}

function cM() {
	var canvas, y4, es, eu, a9P, aAX, gap, aAY, fontSize, aAZ, aAa, aAb, aAc, aAd, aAe, aAf, aAg, aAh;

	function aAl() {
		y4.clearRect(0, 0, aW.i, aW.j), y4.fillStyle = bA.nd, y4.fillRect(0, 0, aW.i, aW.j), y4.fillStyle = bA.o0, eP = 0 < aAf ? aAf : Math.sqrt(aAc[4] / 1e4), y4.fillRect(0, aW.j - a9P - 1, Math.floor(eP * aW.i), a9P), y4.fillStyle = bA.ng, y4
			.fillRect(0, 0, aW.i, 1), y4.fillRect(0, 0, 1, aW.j), y4.fillRect(aW.i - 1, 0, 1, aW.j), y4.fillRect(0, aW.j - 1, aW.i, 1), y4.fillRect(0, aW.j - a9P - 1, aW.i, 1);
		for (var eP, aAn, dr = 0, aB = 0; aB < aAb.length; aB++) aAd[aB] ? (b9.qX.textAlign(y4, 0), aAn = Math.floor((aAX - a9P + 2 * aAY) * (aB - dr + 1) / (aAb.length + 1) - .7 * aAY), y4.fillText(aAb[aB], gap, aAn), b9.qX.textAlign(y4, 2), 5 ===
			aB && 0 !== ag.mg[aD.eV] && ag.gn[aD.eV] >= ae.jo(aD.eV) ? (y4.fillStyle = bA.oa, y4.fillText(aAj(aB), aW.i - gap, aAn), y4.fillStyle = bA.ng) : y4.fillText(aAj(aB), aW.i - gap, aAn)) : dr++
	}

	function aAj(aB) {
		return aB < 3 ? aAc[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? b9.rW.a3w(aAc[aB] / 100, 2) : aB < 7 ? b9.rW.z9(aAc[aB]) : aB === 7 ? aW.aAo(aAc[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gZ, aD.eV) : __fx.utils.getDensity(aD.eV)
	}

	function aAi() {
		ag.gZ[aD.eV] !== aAc[6] && (aAc[6] = ag.gZ[aD.eV], aAZ++)
	}
	this.db = function() {
		aAf = aAg = 0, (aAa = new Array(8))[0] = L(113), aAa[1] = aD.kS ? L(114) : L(115), aAa[2] = L(116), aAa[3] = L(117), aAa[4] = L(118), aAa[5] = L(119, 0, "Interest"), aAa[6] = L(120), aAa[7] = L(121),
			aAa.push("Max Troops", "Density"), // add aAa
			(aAb = new Array(aAa.length)).fill(""), (aAc = new Array(aAa.length))[0] = aD.kS ? 0 : aD.k8, aAc[1] = aD.kS ? al.k9 : aD.kU, aAc[2] = aD.zu, aAc[3] = 0, aAc[4] = bK.ds(1e4 * ag.gZ[0], Math.max(aD.js, 1)), aAc[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bK.ds(700 * aD.data.iIncomeValue, 64) : bK.ds(700 * aD.data.iIncomeData[aD.eV], 64), aAc[6] = 0, aAi(), aAc[7] = 0, aAe = aAj(6), aAd = new Array(aAa.length);
		for (var aB = aAa.length - 1; 0 <= aB; aB--) aAd[aB] = !0;
		aAh = 0, aAh = aD.kS ? (aAd[0] = !1, aAd[2] = !1, aAd[3] = !1, 3) : (aAd[3] = !1, 1), aAZ = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hu() ? .1646 : .126) * 1.25 * h.hv), this.j = Math.floor(1.18 * this.i), a9P = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAY = .04 * this.i, aAX = this.j, this.j -= Math.floor(aAh * (this.j -
			2 * a9P) / aAa.length), fontSize = Math.floor(.7 * (aAX - a9P) / aAa.length);
		var a5X = b9.qX.sL(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5X, i) {
				for (var aB = 0; aB < aAb.length; aB++) aAb[aB] = b9.y4.a2t(aAa[aB], a5X, i)
			}((y4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5X, .575 * this.i), b9.qX.textBaseline(y4, 1), y4.lineWidth = 1, this.a4B(), this.a87(), aU.a87(), aAl()
	}, this.a87 = function() {
		es = h.i - this.i - bb.gap
	}, this.aAm = function() {
		eu = bb.gap
	}, this.a4B = function() {
		eu = bb.gap + (aU.a7U() && 0 !== ag.mg[aD.eV] && !aD.h9 ? aU.j + bb.gap : 0)
	}, this.mS = function(bt) {
		(bt || 100 <= aAZ) && (aAZ = 0, aAl())
	}, this.a4s = function() {
		return aAc[7]
	}, this.aAo = function(value) {
		var l1 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l1) / 1e3);
		return value < 10 ? l1 + ":0" + value : l1 + ":" + value
	}, this.j1 = function() {
		var aAz, per;
		aAd[0] && aD.zv - aD.zu !== aAc[0] && (aAc[0] = aD.zv - aD.zu, aAZ++), al.k9 - aAc[0] !== aAc[1] && (aAc[1] = al.k9 - aAc[0], aAZ++), this.mK(), (aAz = ae.aB0(aD.eV)) !== aAc[5] && (aAc[5] = aAz, aAZ++), aAi(), aAc[7] += be.aB1, aAz =
			aAj(7), aAe !== aAz && (aAe = aAz, aAZ += 100), aAz = aD.hf ? bg.ke() : ag.gZ[li[0]], per = bK.ds(1e4 * aAz, Math.max(aD.js, 1)), aAc[3] = aAz, aAc[4] !== per && (aAZ++, aAc[4] = per), 8 === aD.kQ && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!b9.g7.gx(aB)) return bQ.zU.zr(), 1;
				return
			}() || aAc[3] < aD.js || ! function() {
				for (var aB = al.k9 - 1; 0 <= aB; aB--)
					if (0 < ag.gD[al.kA[aB]].length) return;
				return 1
			}() || bM.kv.aAy().length || bQ.zU.zr()
	}, this.mK = function() {
		aAd[2] && aD.zu !== aAc[2] && (aAc[2] = aD.zu, aAZ++)
	}, this.aAv = function() {
		return aAc[3] === aD.js
	}, this.aB2 = function(aB) {
		var t9, aB3, dr;
		return 2 !== aD.zs && (aB % 2 == 1 && (aV.mS(1, 1), be.dj = !0), aB === aD.a4K ? (aAf = 0, aAl(), !1) : (-1 !== aB || 0 !== aAg) && (aB3 = aAf, aAf = aD.gu ? aB / aD.a4K : (dr = performance.now(), 0 <= aB && (t9 = dr - 392 * aB, aAg =
			0 === aB || t9 < aAg ? t9 : aAg), 1 < (aAf = (dr - aAg) / (392 * aD.a4K)) ? 1 : aAf), aAl(), aAf !== aB3))
	}, this.ud = function() {
		ue.drawImage(canvas, es, eu)
	}
}

function cN() {
	var hX, aB4, i, j, a8D, aB5, aB6, a7V, canvas, mt, aB7;

	function y0() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bb.gap ? h.j - j - 4 * bb.gap - aR.j : h.j - j - 2 * bb.gap
	}
	this.db = function() {
		aB7 = hX = !1, a8D = .61, aB5 = .07, aB6 = .09, mt = a7V = j = 0
	}, this.resize = function() {
		var y4, n6, f6, aBC, aBD, a5c;
		hX && (i = aB8(i = a0.a1.hu() ? Math.floor(.69 * h.hv) : Math.floor(.5 * h.hv), a67(h.i - 2 * bb.gap, 10)), i = aB8(i, Math.floor(3.57 * a67(h.j - 2 * bb.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, y4 = canvas.getContext("2d", {
				alpha: !0
			}), n6 = Math.floor(1 + j / 40), y4.clearRect(0, 0, i, j), y4.fillStyle = bA.nd, y4.fillRect(n6, n6, i - 2 * n6, j - 2 * n6), y4.lineJoin = "bevel", y4.lineWidth = 2 * n6, y4.strokeStyle = bA.ng, y4.strokeRect(n6, n6, i - 2 * n6,
				j - 2 * n6), y4.imageSmoothingEnabled = !1, f6 = ab.get(aB4), aBC = f6.width, a5c = (1 === aB4 ? .85 : 21 === aB4 ? .666 : .9) * a8D * j / (aBD = f6.height), y4.setTransform(a5c, 0, 0, a5c, Math.floor((i - a5c * aBC) / 2),
				Math.floor((j - a5c * aBD) / 2)), y4.drawImage(f6, 0, 0), y4.setTransform(1, 0, 0, 1, Math.floor(i - aB6 * j - aB5 * j - n6), Math.floor(n6 + aB5 * j)),
			function(y4, el) {
				y4.lineWidth = Math.floor(1 + j / 80), y4.strokeStyle = bA.ng, y4.beginPath(), y4.moveTo(0, 0), y4.lineTo(el, el), y4.moveTo(0, el), y4.lineTo(el, 0), y4.stroke()
			}(y4, Math.floor(aB6 * j)), y4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fD, aBA, a80, aBB) {
		hX || aBB && aB7 || (aB4 = a80 ? 21 : fD ? 1 : 2, hX = aB7 = !0, this.resize(), aL.ro(), aR.a7v(), mt = be.eK, a7V = aBA ? 1 : 0)
	}, this.j1 = function() {
		!hX || 1 <= a7V || (a7V = 1 < (a7V += 5e-4 * (be.eK - mt)) ? 1 : a7V, mt = be.eK, be.dj = !0)
	}, this.gy = function(es, eu) {
		return !(!hX || a7V <= 0 || (es -= Math.floor((h.i - i) / 2), eu -= y0(), es < 0) || eu < 0 || i < es || j < eu || (i - j / 3 < es && eu < j / 3 && (hX = !1, be.dj = !0), 0))
	}, this.ud = function() {
		!hX || a7V <= 0 || (ue.globalAlpha = a7V, ue.drawImage(canvas, Math.floor((h.i - i) / 2), y0()), ue.globalAlpha = 1)
	}
}

function dL() {
	var aBF, aBG = new Uint8Array(5),
		aBH = new Uint8Array(5);
	this.aBI = new aBJ, this.db = function() {
		for (var fD = bi.eI.data[119].value, aB = 0; aB < aBG.length; aB++) aBG[aB] = (fD >> 2 * aB) % 4
	}, this.a4W = function() {
		aBF = [L(122), "", L(123, [bW.aBK[28]]), L(124, [bW.aBK[26]]), L(125, [bW.aBK[0]])], this.aBI.db()
	}, this.j1 = function() {
		this.aBI.j1()
	}, this.a5G = function(id) {
		1 < id && bI.qz() || ! function(e6) {
			if (3 === aBG[e6] || 1 === aBH[e6]) return;
			if (aBH[e6] = 1, !(Math.random() < .6)) {
				aBG[e6]++;
				for (var fD = 0, aB = 0; aB < aBG.length; aB++) fD += aBG[aB] << 2 * aB;
				bi.ry.rz(119, fD)
			}
			return 1
		}(id) || aN.a6D(aBF[id])
	}
}

function aBJ() {
	var aBM;
	this.db = function() {
		aBM = !1
	}, this.j1 = function() {
		var gJ;
		if (function() {
				if (!aBM) {
					if (be.k5() % 30 != 9) return;
					if (!b9.g7.ld(90)) return;
					aBM = !0
				}
				return 1
			}() && (! function() {
				var qP = aN.a6Z(956);
				if (qP) {
					if (b9.g7.l4(qP.player)) return 1;
					aN.a6Y(956, 0)
				}
				return
			}() && (-1 === (gJ = (aD.hf ? function() {
				var id = bg.kg(),
					el = al.k9;
				if (bf.kV[id])
					for (var zg = al.kA, ej = bf.ej, aB = 0; aB < el; aB++) {
						var gJ = zg[aB];
						if (ej[gJ] !== id) return gJ
					} else if (1 < el) return li[el - 1];
				return -1
			} : function() {
				for (var aBU = al.k9, l0 = al.kA, aBV = jt, aB = 0; aB < aBU; aB++) {
					var gJ = l0[aB];
					if (0 !== aBV[gJ]) return gJ
				}
				return -1
			})()) ? ! function() {
				var qP = aN.a6Z(957);
				if (qP && qP.a63) {
					if (ac.ec(qP.a63.eX << 2)) return 1;
					aN.a6Y(957, 0)
				}
				return
			}() : (aN.yL(0, L(126, [ag.a0R[gJ]]), 956, gJ, bA.ng, bA.nd, -1, !0), 0)))) {
			var el = an.ij.lG;
			if (0 !== el)
				for (var eI = an.ij.eI, aB = 0; aB < el; aB++) {
					var eX = eI[aB];
					if (ac.ec(eX << 2)) return void aN.yL(0, L(127, [bL.et(eX), bL.ev(eX)]), 957, 0, bA.ng, bA.nd, -1, !0, void 0, {
						f4: 1,
						eX: eX
					})
				}
		}
	}
}

function dM() {
	this.aBW = new aBX, this.db = function() {
		this.aBW.resize()
	}
}

function aBX() {
	this.resize = function() {
		var aB, aBY = document.head.querySelector("style#ss");
		if (aBY)
			for (aB = aBY.sheet.cssRules.length - 1; 0 <= aB; aB--) aBY.sheet.deleteRule(0);
		else(aBY = document.createElement("style")).id = "ss", document.head.appendChild(aBY);
		var a8L = "::-webkit-scrollbar",
			aBZ = b9.qX.qg(bb.sN),
			hh = b9.qX.qg(Math.max(b9.qX.rq(.012), 8));
		try {
			aBY.sheet.insertRule(a8L + "{width:" + hh + ";height:" + hh + ";}", aBY.sheet.cssRules.length), aBY.sheet.insertRule(a8L + "-thumb{background-color:white;}", aBY.sheet.cssRules.length), aBY.sheet.insertRule(a8L +
				"-track{background:" + bA.nc + ";}", aBY.sheet.cssRules.length), aBY.sheet.insertRule(a8L + "-track:horizontal{border-top:" + aBZ + " solid white;}", aBY.sheet.cssRules.length), aBY.sheet.insertRule(a8L +
				"-track:vertical{border-left:" + aBZ + " solid white;}", aBY.sheet.cssRules.length), aBY.sheet.insertRule(a8L + "-button{display:none;}", aBY.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBY.sheet.cssRules.length - 1; 0 <= aB; aB--) aBY.sheet.deleteRule(0)
		}
	}
}

function dK() {
	this.aBa = !1, this.nW = !1, this.a4F = !1, this.aBb = [0, 0, 0, 0], this.aBc = function() {
		var n6, n7, nJ, nK;
		this.a4F = this.a4F || this.nW, (this.nW || this.aBa && this.a4F) && (n6 = bZ.aBd[0], n7 = bZ.aBd[1], nJ = bZ.aBd[2], nK = bZ.aBd[3], n6 = n6 < this.aBb[0] ? this.aBb[0] : n6, n7 = n7 < this.aBb[1] ? this.aBb[1] : n7, nJ = nJ > this.aBb[
				2] ? this.aBb[2] : nJ, nK = nK > this.aBb[3] ? this.aBb[3] : nK, this.nW = !1, this.aBa = !1, n6 === this.aBb[0] && n7 === this.aBb[1] && nJ === this.aBb[2] && nK === this.aBb[3] ? this.a4G() : n6 <= nJ && n7 <= nK && a4Y
			.putImageData(a4Z, 0, 0, n6, n7, nJ - n6 + 1, nK - n7 + 1))
	}, this.a4G = function() {
		this.a4F && this.aBb[2] >= this.aBb[0] && this.aBb[3] >= this.aBb[1] && a4Y.putImageData(a4Z, 0, 0, this.aBb[0], this.aBb[1], this.aBb[2] - this.aBb[0] + 1, this.aBb[3] - this.aBb[1] + 1), this.a4F = !1
	}, this.a03 = function() {
		this.aBb[2] >= this.aBb[0] && this.aBb[3] >= this.aBb[1] && a4Y.putImageData(a4Z, 0, 0, this.aBb[0], this.aBb[1], this.aBb[2] - this.aBb[0] + 1, this.aBb[3] - this.aBb[1] + 1), this.a4F = !1
	}, this.db = function() {
		var es, eu;
		this.aBa = !1, this.nW = !1, this.a4F = !1, this.aBb[0] = bR.ew, this.aBb[1] = bR.ex, this.aBb[2] = this.aBb[3] = 0;
		loop: for (es = 1; es < bR.ew - 1; es++)
			for (eu = bR.ex - 2; 1 < eu; eu--)
				if (1 === aBe[ac.xX(es, eu) + 2]) {
					this.aBb[0] = es;
					break loop
				} loop: for (eu = 1; eu < bR.ex - 1; eu++)
			for (es = bR.ew - 2; 1 < es; es--)
				if (1 === aBe[ac.xX(es, eu) + 2]) {
					this.aBb[1] = eu;
					break loop
				} loop: for (es = bR.ew - 2; 0 < es; es--)
			for (eu = bR.ex - 2; 1 < eu; eu--)
				if (1 === aBe[ac.xX(es, eu) + 2]) {
					this.aBb[2] = es;
					break loop
				} loop: for (eu = bR.ex - 2; 0 < eu; eu--)
			for (es = bR.ew - 2; 1 < es; es--)
				if (1 === aBe[ac.xX(es, eu) + 2]) {
					this.aBb[3] = eu;
					break loop
				}
	}
}

function L(value, aBf, vB) {
	var qE = "number" == typeof value ? b6.aBg[value] : value;
	if (vB && b6.aBh() && (qE = vB), aBf)
		for (var el = aBf.length, aB = 0; aB < el; aB++)
			for (var f4 = 0; f4 < 3; f4++) qE = qE.replace("{" + (10 * f4 + aB) + "}", aBf[aB]);
	return qE
}

function c1() {
	this.data = new aBi;
	var aBj = (new aBk).L84,
		aBl = (this.aBg = aBj, !1);
	this.db = function() {
		var el, g;
		aBl = !1, "en" !== bi.eI.data[12].value.split("-")[0].toLowerCase() ? bi.eI.data[12].value === bi.eI.data[145].value && 0 < bi.eI.data[146].value && (el = bi.eI.data[146].value, (g = bi.qo.vH(el, !1)).length === el) && !!b9.qf.a2W(g) &&
			function(g) {
				for (var el = g.length, j = 0; j < el; j++) g[j] = g[j].replace("&#39;", "'");
				var aBr = bi.qo.vH(el, !0);
				if (el !== aBr.length) return !1;
				if (!b9.qf.a2W(aBr)) return !1;
				for (var l1 = aBj.length, a9G = new Array(l1), aBs = l1 === el, gE = Math.min(el, l1), aB = 0; aB < l1; aB++)
					if (a9G[aB] = aBj[aB], aB < el && aBr[aB] === a9G[aB]) a9G[aB] = g[aB];
					else {
						aBs = !1;
						for (var f5 = 0; f5 < gE; f5++)
							if (aBr[f5] === a9G[aB]) {
								a9G[aB] = g[f5];
								break
							}
					} return b6.aBg = a9G, aBs
			}(g) || (aBl = !0) : b6.aBg = aBj
	}, this.dd = function() {
		bf.dc(), aE.dc(), bd.dc(), bc.dc(), aO.db(), bn = new dw
	}, this.aBh = function() {
		return this.aBg === aBj || !aBj.length
	}, this.aBt = function() {
		var aBu;
		aBl && (aBl = !1, 0 !== aBj.length) && (aBu = bi.eI.data[12].value, az.aBv.aBw(0, aBu.slice(0, 20)))
	}, this.aBx = function(g) {
		g.length === aBj.length && (this.aBg = g, bi.ry.rz(145, bi.eI.data[12].value), bi.ry.rz(146, g.length), bi.qo.vN(g, !1), bi.qo.vN(aBj, !0), 0 === aa.a14()) && 5 === t.sl && t.y.aBy()
	}, this.aBz = function() {
		var aC0, g = navigator.languages;
		return g && g.length ? (aC0 = Math.max(b6.data.aC1(g[0]), 0), 1 === g.length ? [aC0, aC0] : [aC0, Math.max(b6.data.aC1(g[1]), 0)]) : [0, 0]
	}
}

function aBi() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aC2 = function() {
		for (var aC3 = [], g = this.g, el = g.length, aB = 0; aB < el; aB++) aC3.push(g[aB]);
		var aC4 = bi.eI.data[12].vB;
		for (aB = 0; aB < el; aB++)
			if (aC3[aB] === aC4) {
				aC3.splice(aB, 1), el--;
				break
			} aC3.sort(), el++, aC3.unshift(aC4);
		try {
			if ("undefined" == typeof Intl) return aC3;
			for (aB = 0; aB < el; aB++) {
				var qE = new Intl.DisplayNames([aC3[aB]], {
					type: "language"
				}).of(aC3[aB]);
				qE !== aC3[aB] && (aC3[aB] = aC3[aB] + ": " + qE)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aC3
	}, this.aC6 = function(aC7) {
		for (var qE = bi.eI.data[12].value, el = aC7.length, aB = 0; aB < el; aB++)
			if (qE === aC7[aB].split(":")[0]) return aB;
		return 0
	}, this.aC1 = function(aC8) {
		if (!aC8 || aC8.length < 2) return 0;
		aC8 = aC8.split("-")[0].toLowerCase();
		for (var g = this.g, el = g.length, aB = 0; aB < el; aB++)
			if (aC8 === g[aB]) return aB;
		return -1
	}
}

function aBk() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Top 100 players receive a daily gold payout.", "Team {0}", "Team {0} has won the game!",
		"You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.",
		"You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.",
		"{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}",
		"Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.",
		"A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.",
		"{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.",
		"{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY",
		"THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold",
		"Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "🔑 Show Account", "🚨 Moderation Actions",
		"🚩 Report User", "💬 Mention", "Loading", "{0} has defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
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

function dh() {
	var es, eu, j, ti, aC9, aCA, aCB, aCC, aCD, i, a38, aCE;
	this.hX = !1, this.db = function(qE, aCF) {
		if (1 === a0.id && 13 <= a0.dt && a0.dt < 18) return aCF ? void(a38 = qE) : a38 !== qE ? void 0 : void a0.vF.saveString(200, qE);
		aCF && (a38 = qE, (aCE = document.createElement("a")).appendChild(document.createTextNode(a38)), this.hX = !0, aCE.title = a38, aCE.target = "_blank", aCE.href = a38, aCE.style.textAlign = "center", aCE.style.color = bA.ng, aCE.style
			.position = "absolute", aCE.style.padding = "0px", aCE.style.margin = "0px", this.resize(), document.body.appendChild(aCE), be.dj = !0)
	}, this.ro = function() {
		return !(!this.hX || (document.body.removeChild(aCE), this.hX = !1))
	}, this.gy = function(i2, i3) {
		return !!this.hX && ((i2 < es || i3 < eu || es + i < i2 || eu + j < i3 || es + i - ti < i2 && i3 < eu + ti) && (be.dj = !0, this.hX = !1, document.body.removeChild(aCE)), !0)
	}, this.resize = function() {
		var a5X, aCG;
		this.hX && (aCC = Math.floor(.8 * (a0.a1.hu() ? h.i > h.j ? .6 : .55 : .4) * h.hv), ti = Math.floor(.15 * aCC), aC9 = Math.floor(.35 * ti), aCA = Math.floor(.5 * ti), aCB = Math.floor(2.5 * aCA), j = ti + aC9 + 3 * aCA, a5X = b9.qX.sL(1,
			aC9 / h.k), aCD = Math.floor(h.k * aQ.measureText(a38, a5X)), aCG = i = (aCC < aCD ? aCD : aCC) + 2 * aCB, i = Math.min(i, h.i - 2 * (a0.a1.hu() ? 2 : 1) * bb.gap), a5X = b9.qX.sL(1, i / aCG * aC9 / h.k), aCD = Math.floor(h
			.k * aQ.measureText(a38, a5X)), es = Math.floor((h.i - i) / 2), eu = Math.floor((h.j - j) / 2), aCE.style.font = a5X, aCE.style.top = Math.floor((eu + 1.4 * aCA + ti) / h.k) + "px", aCE.style.left = Math.floor((es + (i -
			aCD) / 2) / h.k) + "px")
	}, this.ud = function() {
		this.hX && (ue.fillStyle = bA.nd, ue.fillRect(es, eu + ti, i, j - ti), ue.fillStyle = bA.om, ue.fillRect(es, eu, i, ti), ue.fillStyle = bA.ng, ue.lineWidth = bb.yq, ue.strokeStyle = bA.ng, ue.strokeRect(es, eu, i, j), ue.fillRect(es, eu +
			ti, i, bb.yq), ue.font = b9.qX.sL(1, .48 * ti), b9.qX.textAlign(ue, 1), b9.qX.textBaseline(ue, 1), ue.fillText("You are leaving Territorial.io!", Math.floor(es + (i - .5 * ti) / 2), Math.floor(eu + .55 * ti)), aM.a5i(Math
			.floor(es + i - .8 * ti), Math.floor(eu + .25 * ti), Math.floor(.5 * ti)), ue.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function df() {
	var gap, aAa, es = [0, 0, 0, 0, 0],
		eu = [0, 0, 0, 0, 0],
		nI = [1, 1, 1, 1, 1],
		fD = [!0, !0, !0, !1, !1],
		f6 = (this.fY = [!0, !0, !0, !1, !1], null);
	this.aCH = function(a2h, aCI) {
		f6 = a2h, fD = aCI, aAa = [bJ.aCJ, bJ.a0x, bJ.aCK, bJ.aCK, bJ.aCL], this.db()
	}, this.db = function() {
		if (ab.tD()) {
			var aB, ss = Math.floor((a0.a1.hu() ? .261 : .195) * h.hv),
				st = Math.floor(.9 * ss),
				a8D = Math.floor(.17 * st);
			if (gap = a0.a1.hu() ? 2 * bb.gap : bb.gap, nI[0] = ss / f6[0].width, nI[1] = st / f6[1].width, nI[2] = a8D / f6[2].height, nI[3] = a8D / f6[3].height, nI[4] = a8D / f6[4].height, nI[2] *= 1.7, nI[3] *= 1.07, es[0] = gap, es[1] = gap,
				es[2] = gap, es[3] = gap, es[4] = Math.floor(2 * gap + nI[3] * f6[3].width), eu[0] = gap, eu[1] = eu[0] + gap + nI[0] * f6[0].height, eu[2] = eu[1] + gap + nI[1] * f6[1].height, eu[3] = eu[2] + gap + nI[2] * f6[2].height, eu[4] =
				eu[3], !fD[0])
				for (aB = 0; aB < 5; aB++) eu[aB] -= nI[0] * f6[0].height + gap;
			if (!fD[1])
				for (aB = 2; aB < 5; aB++) eu[aB] -= nI[1] * f6[1].height + gap
		}
	}, this.hX = function() {
		return !(7 === aa.a14() && a0.a1.hu())
	}, this.gy = function(i2, i3) {
		if (f6 && this.hX())
			for (var aB = fD.length - 1; 0 <= aB; aB--)
				if (fD[aB] && this.fY[aB] && es[aB] < i2 && eu[aB] < i3 && i2 < es[aB] + nI[aB] * f6[aB].width && i3 < eu[aB] + nI[aB] * f6[aB].height) return t.u(9, t.sl, new aCM("You are leaving Territorial.io.", b9.qX.a37(aAa[aB]))), !0;
		return !1
	}, this.ud = function() {
		if (f6 && this.hX()) {
			var aB;
			for (ue.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fD[aB] && this.fY[aB] && (ue.setTransform(nI[aB], 0, 0, nI[aB], es[aB], eu[aB]), ue.drawImage(f6[aB], 0, 0));
			ue.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dV() {
	this.aCN = 0, this.aCO = null, this.tr = null, this.kv = null, this.y = null, this.uD = null, this.tp = null, this.message = null, this.aCP = null, this.rn = null, this.aCQ = new aCR, this.a11 = 0, this.a97 = 0, this.db = function() {
		this.a97 = be.eK, this.aCN = bF.so.w9(bi.eI.data[105].value), this.tr = new aCS, this.kv = new aCT, this.y = new aCU, this.uD = new aCV, this.tp = new aCW, this.message = new aCX, this.aCP = new aCY, this.rn = new aCZ, this.y.db(), bo
		.db(), this.a11 = 1, a0.a1.setState(1), aa.setState(0)
	}, this.u7 = function() {
		this.rn && this.rn.u7(), this.aCO = null, this.tr = null, this.kv = null, this.y = null, this.uD = null, this.tp = null, this.message = null, this.aCP = null, this.rn = null, this.a11 = 0, bo.u7(), a0.a1.setState(0)
	}
}

function aCS() {
	function aCu(g, t5, t6) {
		var aCv = g[t5];
		g[t5] = g[t6], g[t6] = aCv
	}
	this.ts = [
		[],
		[],
		[],
		[]
	], this.tt = [0, 0, 0, 0], this.aCa = [], this.aCb = function(aCc, sj, username, ty, a3c, aCd, elo, color, vh, aCe) {
		this.ts[aCc].push(this.aCf(sj, username, ty, a3c, aCd, elo, color, vh, aCe)), bm.aCN === sj && (bm.aCO = this.ts[aCc][this.ts[aCc].length - 1]), bm.y.aCg += 29 === t.sl && bm.y.rb[0] === aCc && 1 === bm.y.rb[2]
	}, this.aCf = function(sj, username, ty, a3c, aCd, elo, color, vh, aCe) {
		return {
			sj: sj,
			username: username,
			ty: ty,
			a3c: a3c,
			aCd: aCd,
			elo: elo,
			color: color,
			vh: vh,
			aCe: aCe
		}
	}, this.aCh = function(e6, aCc, ty, a3c, aCd, elo, vh) {
		e6 = this.ts[aCc][e6];
		e6.ty = ty, e6.a3c = a3c, e6.aCd = aCd, e6.elo = elo, e6.vh = vh, bm.y.aCg += 29 === t.sl && bm.y.rb[0] === aCc && 1 === bm.y.rb[2]
	}, this.aCi = function(e6, aCc, aCj) {
		var e6 = this.ts[aCc][e6],
			aCk = e6.username,
			aCl = "Redacted " + bE.so.z9(e6.sj, 2);
		e6.username = aCj ? "[" + b9.rW.a0Z(aCk) + "] " + aCl : aCl, aCk.indexOf("Redacted") < 0 && (e6.aCm = aCk, e6.aCn = 3), bm.y.aCg += 29 === t.sl && bm.y.rb[0] === aCc && 1 === bm.y.rb[2]
	}, this.aCo = function(e6, aCp, aCq) {
		var player = this.ts[aCp][e6];
		this.aCr(e6, aCp), this.ts[aCq].push(player), bm.y.aCg += 29 === t.sl && bm.y.rb[0] === aCq && 1 === bm.y.rb[2]
	}, this.aCr = function(e6, aCp) {
		var tr = this.ts[aCp];
		this.aCa.push(tr[e6]), 1e3 < this.aCa.length && this.aCa.shift(), e6 >= this.tt[aCp] ? tr[e6] = tr[tr.length - 1] : (this.tt[aCp]--, 2 === aCp ? (tr.splice(this.tt[aCp] + 1, 0, tr[tr.length - 1]), tr.splice(e6, 1)) : (tr[e6] = tr[this.tt[
			aCp]], tr[this.tt[aCp]] = tr[tr.length - 1])), tr.pop(), bm.y.aCg += 29 === t.sl && bm.y.rb[0] === aCp && 1 === bm.y.rb[2]
	}, this.aCs = function(e6, ra) {
		bm.y.aCg += 29 === t.sl && bm.y.rb[0] === ra && 1 === bm.y.rb[2];
		var tr = this.ts[ra],
			qP = tr[e6];
		if (2 === ra)
			if (e6 >= this.tt[ra]) {
				for (var aCt = this.tt[ra], elo = qP.elo; aCt && elo > tr[aCt - 1].elo;) aCt--;
				tr[e6] = tr[this.tt[ra]], tr.splice(this.tt[ra]++, 1), tr.splice(aCt, 0, qP)
			} else tr.splice(this.tt[ra]--, 0, qP), tr.splice(e6, 1);
		else e6 >= this.tt[ra] ? aCu(tr, this.tt[ra]++, e6) : aCu(tr, --this.tt[ra], e6)
	}, this.aCw = function(sj) {
		for (var ts = this.ts, el = ts.length, aB = 0; aB < el; aB++)
			for (var tr = ts[aB], l1 = tr.length, f4 = 0; f4 < l1; f4++)
				if (sj === tr[f4].sj) return tr[f4];
		return null
	}
}

function aCR() {
	this.dk = function(e6) {
		if ((tt = bm.tr.tt[e6]) < 2) return !1;
		var rc = bm.y.rd[e6],
			aCx = 9 === rc.aCy ? 333 : 512,
			tt = Math.min(tt, aCx);
		8 === rc.aCy && (tt -= tt % 2);
		aCx = bm.tr.ts[e6].splice(0, tt), bm.tr.tt[e6] -= tt, tt = function(aCz) {
			if (bm.aCO) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var el = aCz.length, sj = bm.aCO.sj, aB = 0; aB < el; aB++)
					if (aCz[aB].sj === sj) return aB
			}
			return -1
		}(aCx);
		return -1 === tt ? (bm.tr.aCa = bm.tr.aCa.concat(aCx), 1e3 < bm.tr.aCa.length && bm.tr.aCa.splice(0, bm.tr.aCa.length - 1e3), bm.y.aCg += 29 === t.sl && bm.y.rb[0] === e6 && 1 === bm.y.rb[2], !1) : (8 === rc.aCy && (rc.aD2 = (rc.aD2 + (
			tt >> 1)) % 1024, e6 = tt - tt % 2, tt %= 2, aCx = aCx.slice(e6, 2 + e6)), aw.db(rc, aCx, tt), !0)
	}, this.aD3 = function(rc, aCz, aD0) {
		var eo = aD.data = new a4L,
			aD7 = (eo.spawningSeed = rc.spawningSeed, rc.aCy < 7 ? (eo.gameMode = 1, eo.numberTeams = rc.aCy + 2) : 9 === rc.aCy ? (eo.gameMode = eo.isZombieMode = 1, eo.numberTeams = 2) : (eo.gameMode = 0, eo.battleRoyaleMode = 7 === rc.aCy ?
				0 : 10 === rc.aCy ? 1 : 2), eo.selectedPlayer = aD0, eo.isContest = rc.aD4, eo.mapType = bR.aD5(rc.eR) ? 0 : 1, bR.aD6(eo, rc.eR), eo.mapSeed = rc.mapSeed, eo.humanCount = aCz.length);
		eo.selectableSpawn = 1 === eo.gameMode || aD7 < 100, eo.colorsData = new Uint32Array(aD7), eo.playerNamesData = new Array(aD7);
		for (var aB = 0; aB < aD7; aB++) eo.colorsData[aB] = aCz[aB].color, eo.playerNamesData[aB] = aCz[aB].username;
		if (2 === eo.battleRoyaleMode)
			for (eo.elo = new Uint16Array(aD7), aB = 0; aB < aD7; aB++) eo.elo[aB] = aCz[aB].elo;
		aa.setState(8), bR.a7(rc.eR, eo.mapSeed), aD.a4Q(), aD.a4O = 2
	}
}

function aCT() {
	var dx = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aD8 = [bA.nu, bA.nu, bA.nv, bA.oO, bA.oP, bA.oB, bA.oU, bA.nv, bA.oo, bA.od, bA.oq],
		aD9 = [
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
		aDA = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aDN(re, sj, aDP) {
		for (var f5 = re.length - 1; 0 <= f5; f5--) {
			var qP = re[f5];
			0 === qP.id && qP.sj === sj && (qP.r = "[Redacted Message]", aDP) && (qP.aDQ = 1)
		}
	}
	this.rj = function(aDB) {
		var aDC, a0a;
		return aDB.id < 5 && (aDC = "@" + bE.so.z9(aDB.sj, 5)), 0 === aDB.id ? aDC + ": " + aDB.r : 1 === aDB.id ? (a0a = "@" + bE.so.z9(aDB.target, 5), 0 === aDB.aDD ? 32768 <= aDB.value ? aDC + " voted with " + (aDB.value - 32768 + 1) +
				" gold against " + a0a + " to weaken the latter's admin position. 📉" : aDC + " voted with " + (aDB.value + 1) + " gold for " + a0a + " to strengthen the latter's admin position. 💪" : 1 === aDB.aDD ? aDC + " sent " + Math.floor(
					aDB.value / 100) + " 🧈 gold to " + a0a + "." : aDC + " voted with " + (aDB.value / 10).toFixed(1) + " points for " + a0a + " to acknowledge the latter as clan leader. ✅") : 2 === aDB.id ? 0 === aDB.aDD ? aDC +
			" was 🔇 muted for 1 Hour." : 1 === aDB.aDD ? "The username of " + aDC + " was ✂️ redacted. Duration: 1 Day" : aDC + " 👢 was kicked." : 3 === aDB.id ? aDC + bn.e9(aDB.aDD, bn.e3[aDB.aDD][aDB.value]) + "@" + bE.so.z9(aDB.target, 5) +
			bn.eB(aDB.aDD, bn.e3[aDB.aDD][aDB.value]) : 4 === aDB.id ? aDC + bn.e9(5, bn.e3[5][aDB.aDD]) + "@" + bE.so.z9(aDB.target, 5) + bn.eB(5, bn.e3[5][aDB.aDD]) : 5 === aDB.id ? aDA[aDB.aDD] : 6 === aDB.id ? "You are about to mention " +
			aDB.value + " player" + (1 === aDB.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDB.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.ri = function(aDB, a6l) {
		return {
			aDB: aDB,
			r: a6l,
			aDE: 0,
			fontSize: 1,
			rm: 0,
			aDF: aDB.id ? bA.oN : bA.ng
		}
	}, this.tw = function(player, ra) {
		return (2 === ra ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.tx = function(ty) {
		return aD8[ty]
	}, this.aDG = function(ty, a3c) {
		return ty < 3 || 7 === ty ? aD9[ty][0] : 4 === ty ? aD9[ty][a3c < 1 ? 0 : a3c < 10 ? 1 : 2] : aD9[ty][a3c < 10 ? 0 : 1]
	}, this.aDH = function(a3c) {
		return 0 === a3c
	}, this.aCw = function(ra, sj) {
		for (var ts = bm.tr.ts, tr = ts[ra], el = tr.length, aB = 0; aB < el; aB++)
			if (sj === tr[aB].sj) return tr[aB];
		for (var f5 = 0; f5 < ts.length; f5++)
			if (ra !== f5)
				for (el = (tr = ts[f5]).length, aB = 0; aB < el; aB++)
					if (sj === tr[aB].sj) return tr[aB];
		return null
	}, this.tz = function(qP) {
		return !!bm.aCO && qP.sj === bm.aCO.sj
	}, this.aDI = function(tr, aDJ, aDK) {
		var a0X = [];
		loop: for (var aB = aDJ; aB < aDK; aB++) {
			var a0Y = b9.rW.a0Z(tr[aB].username);
			if (a0Y) {
				for (var f5 = a0X.length - 1; 0 <= f5; f5--)
					if (a0Y === a0X[f5].name) {
						a0X[f5].gE++;
						continue loop
					} a0X.push({
					name: a0Y,
					gE: 1
				})
			}
		}
		if (a0X.sort(function(f4, f5) {
				return f5.gE - f4.gE
			}), 0 === a0X.length) return "";
		for (var qE = a0X[0].name + ": " + a0X[0].gE, aB = 1; aB < a0X.length; aB++) qE += "   " + a0X[aB].name + ": " + a0X[aB].gE;
		return qE
	}, this.aDL = function(ty, a3c, aCd) {
		return 0 === dx[ty].length ? "Rank: " + (a3c + 1) : dx[ty] + " Rank: " + (a3c + 1) + (3 !== ty && aCd < 100 ? "   " + dx[3] + " Rank: " + (aCd + 1) : "")
	}, this.aDM = function(sj) {
		for (var rd = bm.y.rd, aB = 0; aB < rd.length; aB++) aDN(rd[aB].re, sj);
		aDN(bm.message.aDO(), sj, 1), bm.rn.aDM(sj)
	}
}

function aCW() {
	var sE = 0,
		aDR = 0,
		aDS = 0,
		aDT = null,
		aDU = null;

	function aDX(qP, aDY, aDZ) {
		var qE = qP.username;
		return (qE += "   " + bm.kv.aDL(qP.ty, qP.a3c, qP.aCd)) + function(qP) {
			qP = qP.vh;
			if (qP < 1e3) return "   Gold: " + qP;
			if ((qP %= 1024) < 1e3) return "   Gold: " + qP + "k";
			return "   Gold: " + (qP - 999) + "M"
		}(qP) + ("   IP: " + bE.so.z9(qP.aCe, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aDZ ? aDR : aDW(qP, aDY)])
	}

	function aDW(qP, aDY) {
		return aDR = aDY || bm.tr.aCw(qP.sj) ? 1 : 0
	}
	this.aDV = function() {
		!sE || aDR === aDW(aDU) && aDS === aDU.vh || (aDS = aDU.vh, aDT.show(-1, -1, aDX(aDU, 0, 1), 1, 1))
	}, this.u0 = function(e, qP, aDY) {
		var a8K = e.target.getBoundingClientRect();
		this.show(a8K.left, a8K.top, qP, 0, aDY), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bm.tp && bm.tp.ro(1)
		})
	}, this.show = function(es, eu, qP, sI, aDY) {
		aDT = aDT || new sC, aDS = (aDU = qP).vh, aDT.show(es, eu, aDX(qP, aDY), sI), sE = 1
	}, this.ro = function(sO) {
		aDT && aDT.ro(sO) && (sE = 0, aDU = null)
	}
}

function aCU() {
	function aDe(aDh) {
		bm.y.aCg && 1 === bm.y.rb[2] && t.a4u(29).aDi(), bm.y.aCg = 0, t.a4u(29).aDj(), 0 !== bm.y.rd[bm.y.rb[0]].tc && !aDh || t.a4u(29).aDk(), bm.tp.aDV()
	}
	this.rd = new Array(4), this.rb = [0, 0, 1, 0], this.aCg = 0, this.aDb = [0, 0], this.db = function() {
		for (var aB = 0; aB < this.rd.length; aB++) this.rd[aB] = new aDc;
		this.rb[0] = bi.eI.data[158].value
	}, this.aDd = function() {
		aDe(!0)
	}, this.aDf = function() {
		for (var aB = 0; aB < bm.y.rd.length; aB++) {
			var rc = bm.y.rd[aB];
			0 === rc.tc ? rc.aDl = 0 : (rc.aDm = Math.max(rc.aDm - rc.aDl % 2, 0), rc.aDl++)
		}
		aDe(!1)
	}, this.aDn = function(ra) {
		this.rb[0] !== ra || this.rb[2] || t.a4u(29).aDo()
	}
}

function aCY() {
	var aDp = 0,
		aDq = "",
		aDr = 0,
		aDs = 0,
		aDt = 0;

	function aDv(a6l) {
		az.aE6.aE7(3, a6l)
	}

	function aE4(gE) {
		aDp = 1, bm.message.aE8({
			id: 6,
			value: gE
		})
	}

	function aDy(r) {
		var aEB = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEB)
	}
	this.zw = function(r) {
		var aDu, g, aE0;
		if (aDp) return aDp = 0, "yes" === (aDu = r.toLowerCase()) || "y" === aDu ? void aDv(aDq) : void bm.message.aE8({
			id: 5,
			aDD: 7
		});
		!(r.indexOf("@") < 0) && (aDu = aDy(r)) ? (aDq = r, g = function(aDx) {
			for (var el = aDx.length, aE9 = [0, 0, 0, 0], aB = 0; aB < el; aB++)
				for (var i = aDx[aB], f4 = 0; f4 < 4; f4++) i === "@room" + (f4 + 1) && (aE9[f4] = 1);
			if ((aDs = b9.qf.a2L(aE9)) % 4 == 0) return b9.qf.a2d(bm.tr.ts);
			for (f4 = 0; f4 < 4; f4++) aE9[f4] = aE9[f4] ? bm.tr.ts[f4] : [];
			return b9.qf.a2d(aE9)
		}(aDu), function(aDx, aE0, r) {
			if (!aDr) return;
			for (var el = aE0.length, aB = 0; aB < el; aB++) 2 === aE0[aB].id && (r = r.replace(aDx[aE0[aB].e6], "@" + aE0[aB].fD));
			return aDp = 1, aDv((aDq = r).slice(0, 126) + "|"), 1
		}(aDu, aE0 = function(aDx) {
			for (var aE0 = [], el = (aDt = aDr = 0, aDx.length), aB = 0; aB < el; aB++) {
				var i = aDx[aB],
					l1 = i.length;
				b9.rW.startsWith(i, "@[") ? l1 <= 9 && b9.rW.a3B(i, "]") && aE0.push({
					id: 0,
					fD: i.substring(2, l1 - 1).toUpperCase()
				}) : 6 === l1 ? b9.rW.startsWith(i, "@room") || (aDt++, aE0.push({
					id: 1,
					fD: bF.so.w9(i.substring(1))
				})) : 1 < l1 && l1 < 5 && 0 <= (l1 = b6.data.aC1(i.substring(1))) && (aE0.push({
					id: 2,
					fD: l1,
					e6: aB
				}), aDr = 1)
			}
			return aE0
		}(aDu), r) || (0 === aE0.length ? aDs || function(aDx) {
			for (var el = aDx.length, aB = 0; aB < el; aB++) {
				var i = aDx[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aDu) ? aE4(g.length) : aDv(r) : aDu.length === aDt ? aDv(r) : (function(g, aE0) {
			var l1 = aE0.length;
			if (0 === l1) return;
			var el = g.length;
			loop: for (var aB = el - 1; 0 <= aB; aB--) {
				for (var f4 = 0; f4 < l1; f4++)
					if (0 === aE0[f4].id) {
						if (aE0[f4].fD === b9.rW.a0Z(g[aB].username)) continue loop
					} else if (1 === aE0[f4].id && aE0[f4].fD === g[aB].sj) continue loop;
				g[aB] = g[--el], g.pop()
			}
		}(g, aE0), aE4(g.length)))) : aDv(r)
	}, this.aEC = function(r) {
		var aDx = aDy(r);
		if (aDx)
			for (var a5 = new RegExp("^[0-9]+$"), el = aDx.length, aB = 0; aB < el; aB++) {
				var i = aDx[aB].substring(1),
					l1 = i.length;
				1 <= l1 && l1 <= 3 && a5.test(i) && (l1 = parseInt(i, 10), !isNaN(l1)) && 0 <= l1 && l1 < b6.data.g.length && (r = r.replace("@" + i, "@" + b6.data.g[l1]))
			}
		return r
	}
}

function aCX() {
	var aED, aEE = [],
		aEF = -1,
		aEG = 0,
		aEH = 0;

	function aEL() {
		aEG = be.eK, (3 === this.u4 ? (aEH = 1, aEK) : (aEF = (aEE.length + aEF + 2 * this.u4 - 1) % aEE.length, aEJ))()
	}

	function aEJ() {
		0 !== aEE.length && (aEH = 0, aED && aED.u7(), (aED = new u1(aEL)).rz(aEF, aEE.length), aED.show(aEE[aEF]), bm.message.resize())
	}

	function aEK() {
		aED && aED.u7(), (aED = new u8(aEJ)).rz(aEE.length), aED.show(), bm.message.resize()
	}
	this.aE8 = function(aDB) {
		var qP;
		2 === aDB.id && 3 === aDB.aDD ? bm.kv.aDM(aDB.sj) : (qP = bm.kv.ri(aDB, bm.kv.rj(aDB)), (5 !== aDB.id && 6 !== aDB.id || (t.a4u(29).aEI().rl(qP), 5 === aDB.id)) && (qP = be.eK < aEG + 2e4, aEF !== aEE.length - 1 && qP || (aEF = aEE
			.length), aEE.push(aDB), bi.eI.data[14].value || bo.play(), aED) && (bi.eI.data[13].value || aEH && qP ? aED.rz(aEE.length) : aEJ()))
	}, this.show = function() {
		aEK()
	}, this.ro = function() {
		aEF = aEE.length - 1, aED && aED.u7(), aED = null
	}, this.resize = function() {
		aED && aED.resize()
	}, this.aDO = function() {
		return aEE
	}
}

function aCV() {
	var aEM = null,
		aEN = null,
		aEO = 0,
		aEP = 0,
		aEQ = null;

	function aES() {
		0 !== aEN.ty && (bm.uD.ro(), t.u(8, 29, new sm(25, {
			sn: 0,
			sj: bE.so.z9(aEN.sj, 5),
			sk: 0
		}, 29)))
	}

	function aET() {
		var es = aEM.es,
			eu = aEM.eu;
		bm.uD.ro(), aEM = new u9([new w("Kick User", function() {
			aEZ(0, 0)
		}, aEc(0, 0)), new w("Block Chat", aEa, aEc(1, 0)), new w("Censor Username", aEb, aEc(2, 0))]), aEY(es, eu), aEO = 2, aEP = 1
	}

	function aEc(id, e6) {
		var e5, aCd;
		return !bm.aCO || bm.kv.tz(aEN) || (e5 = aEN.a3c) <= (aCd = bm.aCO.aCd) || 1 - bn.e4(id, aCd, e6) ? 1 : 4 === aEN.ty ? 50 <= e5 ? +(e5 <= aCd) : 20 <= e5 ? +(e5 / 2 <= aCd) : +(e5 / 3 <= aCd) : 0
	}

	function aEW() {
		return !bm.aCO || bm.kv.tz(aEN) ? 1 : 0
	}

	function aEV() {
		var es = aEM.es,
			eu = aEM.eu,
			aEd = (bm.uD.ro(), aEW());
		aEM = new u9([new w(bn.e3[5][0], function() {
			aEZ(5, 0)
		}, aEd), new w(bn.e3[5][1], function() {
			aEZ(5, 1)
		}, aEd), new w(bn.e3[5][2], function() {
			aEZ(5, 2)
		}, aEd), new w(aEN.aCd < 100 ? "Stealth Report" : bn.e3[5][3], function() {
			aEZ(5, 3)
		}, aEd)]), aEY(es, eu), aEP = aEO = 2
	}

	function aEX() {
		29 === t.sl && t.a4t().aCP(bE.so.z9(aEN.sj, 5))
	}

	function aEZ(id, value) {
		az.aE6.aE7(5, {
			id: id,
			value: value,
			sj: aEN.sj
		})
	}

	function aEa() {
		var es = aEM.es,
			eu = aEM.eu;
		bm.uD.ro(), aEM = new u9([new w(bn.e3[1][0], function() {
			aEZ(1, 0)
		}, aEc(1, 0)), new w(bn.e3[1][1], function() {
			aEZ(1, 1)
		}, aEc(1, 1)), new w(bn.e3[1][2], function() {
			aEZ(1, 2)
		}, aEc(1, 2)), new w(bn.e3[1][3], function() {
			aEZ(1, 3)
		}, aEc(1, 3)), new w(bn.e3[1][4], function() {
			aEZ(1, 4)
		}, aEc(1, 4))]), aEY(es, eu), aEO = 3, aEP = 1
	}

	function aEb() {
		var es = aEM.es,
			eu = aEM.eu;
		bm.uD.ro(), aEM = new u9([new w(bn.e3[2][0], function() {
			aEZ(2, 0)
		}, aEc(2, 0)), new w(bn.e3[2][1], function() {
			aEZ(2, 1)
		}, aEc(2, 1)), new w(bn.e3[2][2], function() {
			aEZ(2, 2)
		}, aEc(2, 2))]), aEY(es, eu), aEO = 3, aEP = 2
	}

	function aEY(es, eu, uF) {
		aEM.show(es, eu, uF), bm.tp.show(aEM.es, aEM.eu, aEN, 1)
	}
	this.aER = function(e, qP) {
		aEO = 1, aEN = qP, aEM = new u9([new w(L(128), aES, 0 === aEN.ty ? 1 : 0), new w(L(129), aET, function() {
			if (!bm.aCO) return 1;
			if (bm.kv.tz(aEN)) return 1;
			if (100 <= bm.aCO.aCd) return 1;
			if (bm.aCO.aCd >= aEN.a3c) return 1;
			return 0
		}()), new w(L(130, 0, "🚩 Report"), aEV, aEW()), new w(L(131), aEX, 0)]), aEY((aEQ = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aEQ.clientY, 1)
	}, this.a1v = function(code) {
		if (29 !== t.sl) return !1;
		if (!aEN) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ro();
			else if (b9.rW.startsWith(code, "Numpad") || b9.rW.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aEO) this.aER(aEQ, aEN);
				else {
					if (!aEM) return !1;
					1 === aEO ? code <= 1 ? aES() : 2 === code ? aET() : 3 === code ? aEV() : (aEX(), this.ro()) : 2 === aEO ? 1 === aEP ? code <= 1 ? (aEZ(0, 0), this.ro()) : (2 === code ? aEa : aEb)() : (aEZ(5, bK.ht(code - 1, 0, 3)), this
					.ro()) : (aEZ(aEP, bK.ht(code - 1, 0, bn.e3[aEP].length - 1)), this.ro())
				}
		}
		return !0
	}, this.ro = function() {
		aEO = 0, aEM && aEM.ro(), aEM = null, bm.tp.ro()
	}
}

function aDc() {
	this.tc = 0, this.eR = 0, this.mapSeed = 0, this.aCy = 0, this.aEg = 0, this.aEh = 0, this.aD4 = 0, this.aDm = 0, this.spawningSeed = 0, this.a19 = 0, this.aD2 = 0, this.re = [], this.rf = 1048575, this.aDl = 0, this.aEi = [{
		eR: 0,
		mapSeed: 0,
		aCy: 0,
		eK: 100,
		aD4: 0
	}, {
		eR: 1,
		mapSeed: 0,
		aCy: 1,
		eK: 200,
		aD4: 0
	}, {
		eR: 2,
		mapSeed: 0,
		aCy: 2,
		eK: 300,
		aD4: 0
	}, {
		eR: 3,
		mapSeed: 0,
		aCy: 3,
		eK: 400,
		aD4: 0
	}, {
		eR: 0,
		mapSeed: 0,
		aCy: 9,
		eK: 500,
		aD4: 0
	}, {
		eR: 1,
		mapSeed: 0,
		aCy: 10,
		eK: 600,
		aD4: 0
	}, {
		eR: 2,
		mapSeed: 0,
		aCy: 8,
		eK: 700,
		aD4: 0
	}, {
		eR: 3,
		mapSeed: 0,
		aCy: 3,
		eK: 800,
		aD4: 0
	}]
}

function aCZ() {
	var aEj = [],
		sy = [],
		aEk = [];

	function aEm(qP) {
		for (var r = qP.r, aEl = [];;) {
			var f6 = function aEo(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qE = r.substring(position + 1, position + 6);
				if (5 !== qE.length) return aEo(r, position + 1);
				if (b9.rW.startsWith(qE, "room")) return aEo(r, position + 1);
				var aEv = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aEv.test(qE)) return aEo(r, position + 1);
				aEv = r.substring(position + 6, position + 7);
				if (1 !== aEv.length) return position;
				qE = new RegExp("^[ :!.]+$");
				if (!qE.test(aEv)) return aEo(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f6) {
				aEl.push(aEp(r, qP));
				break
			}
			0 === f6 ? aEl.push(aEq(r.substring(1, 6), qP, f6)) : (aEl.push(aEp(r.substring(0, f6), qP)), aEl.push(aEq(r.substring(f6 + 1, f6 + 6), qP, f6))), r = r.substring(f6 + 6)
		}
		return aEl
	}

	function aEq(qE, qP, f6) {
		var aEr = function(qE) {
				var sj = bF.so.w9(qE),
					aEr = bm.tr.aCw(sj);
				if (aEr) {
					for (aEj.push(aEr); 75 < aEj.length;) aEj.shift();
					return aEr
				}
				for (var aCa = bm.tr.aCa, aB = aCa.length - 1; 0 <= aB; aB--)
					if (aEr = aCa[aB], sj === aEr.sj) return aEj.push(aEr), aEr;
				for (aB = aEj.length - 1; 0 <= aB; aB--)
					if (aEr = aEj[aB], sj === aEr.sj) return aEj.push(aEr), aEr;
				return bm.tr.aCf(sj, qE, 1, 999999, 999999, 0, 0, 0, 0)
			}(qE),
			qE = (0 === f6 && 0 === qP.aDB.id && qP.rm && (qP.fontSize = bm.kv.aDG(aEr.ty, aEr.a3c), qP.aDE = bm.kv.aDH(aEr.a3c)), document.createElement("span"));
		return qE.textContent = function(aEr, qP, f6) {
			if (aEr.aCn) return aEr.aCn--, f6 = 2 === qP.aDB.id || (3 === qP.aDB.id || 4 === qP.aDB.id) && 0 !== f6, aEr.username + (f6 ? " (" + aEr.aCm + ")" : "");
			if (qP.aDB.aDQ) return "Redacted " + bE.so.z9(aEr.sj, 2);
			return aEr.username
		}(aEr, qP, f6), qE.style.display = "inline-block", qE.style.color = bm.kv.tx(aEr.ty), qE.style.cursor = "pointer", qE.style.margin = "0", qE.style.font = "inherit", qE.style.minWidth = qE.style.minHeight = "1em", bm.kv.tz(aEr) && (qE
			.style.textDecoration = "underline"), bm.kv.aDH(aEr.a3c) && (qE.style.fontWeight = "bold"), qE.onclick = function(e) {
			bm.uD.aER(e, aEr)
		}, bI.qz() || (qE.onmouseover = function(e) {
			bm.tp.u0(e, aEr)
		}), sy.push(qE), qE
	}

	function aEp(r, qP) {
		var rV = document.createElement("span");
		return rV.textContent = r, rV.style.color = qP.aDF, rV.style.margin = "0", rV.style.font = "inherit", rV
	}

	function aF0(aEr, aCl, sj) {
		sj !== aEr.sj || aEr.aCm || (aEr.aCm = aEr.username, aEr.aCn = 3, aEr.username = aCl)
	}
	this.u7 = function() {
		for (var aB = 0; aB < sy.length; aB++) sy[aB].onclick = sy[aB].onmouseover = null;
		aEk = sy = null
	}, this.transform = function(qP) {
		for (var qC = document.createElement("div"), aEl = aEm(qP), aB = 0; aB < aEl.length; aB++) qC.appendChild(aEl[aB]);
		0 === qP.aDB.id && (qC.vx143 = qP.aDB, aEk.push(qC)), qC.style.margin = "0.6em 0.6em", qP.rm && (qC.style.marginLeft = qC.style.marginRight = "inherit"), qC.style.font = "inherit";
		var aEn = 0 < qP.aDB.id;
		return qP.aDE && (qC.style.fontWeight = "bold"), aEn && (qC.style.paddingLeft = "0.7em"), aEn && (qC.style.fontStyle = "italic"), qC.style.fontSize = qP.fontSize.toFixed(2) + "em", qC
	}, this.aEy = function(aEz) {
		if (aEz && (2 === aEz.id && 1 === aEz.aDD || 3 === aEz.id && 2 === aEz.aDD)) {
			var sj = 3 === aEz.id ? aEz.target : aEz.sj;
			if (!bm.tr.aCw(sj)) {
				for (var aCl = "Redacted " + bE.so.z9(sj, 2), aCa = bm.tr.aCa, aB = aCa.length - 1; 0 <= aB; aB--) aF0(aCa[aB], aCl, sj);
				for (aB = aEj.length - 1; 0 <= aB; aB--) aF0(aEj[aB], aCl, sj)
			}
		}
	}, this.aDM = function(sj) {
		for (var aF1 = aEk, aB = aF1.length - 1; 0 <= aB; aB--) {
			var eo = aF1[aB];
			if (eo.vx143.sj === sj) {
				for (; eo.firstChild;) eo.removeChild(eo.firstChild);
				eo.vx143.r = "[Redacted Message]";
				for (var aEl = aEm(bm.kv.ri(eo.vx143, bm.kv.rj(eo.vx143))), f4 = 0; f4 < aEl.length; f4++) eo.appendChild(aEl[f4]);
				aF1.splice(aB, 1)
			}
		}
	}
}

function cO() {
	var aF2, aF3, aF4;

	function aF9(aB) {
		var button = aY.r6[aB],
			es = button.es,
			eu = button.eu,
			i = button.i,
			j = button.j;
		ue.fillStyle = button.aF7, ue.fillRect(es, eu, i, j), aB === aF2 && (ue.fillStyle = aF4, ue.fillRect(es, eu, i, j)), ue.lineWidth = bb.yq, ue.strokeStyle = aF3, ue.strokeRect(es, eu, i, j),
			function(button) {
				var es = button.es,
					eu = button.eu,
					i = button.i,
					j = button.j;
				b9.qX.textAlign(ue, 1), b9.qX.textBaseline(ue, 1), ue.font = button.font, ue.fillStyle = aF3, ue.fillText(button.a6l, Math.floor(es + i / 2), Math.floor(eu + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.eu = 0, this.gap = 0, this.db = function() {
		aF2 = -1, aF3 = bA.ng, aF4 = "rgba(255,255,255,0.16)", this.r6 = new Array(7), this.j = Math.floor((a0.a1.hu() ? .123 : .093) * h.hv), this.i = Math.floor((a0.a1.hu() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aF5 = Math.floor(.26 * this.j),
			aF6 = b9.qX.sL(1, aF5);
		this.r6[0] = {
			es: 0,
			eu: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a6l: "Multiplayer",
			font: aF6,
			aF7: "rgba(22,88,22,0.8)",
			fontSize: aF5
		}, aF5 = Math.floor(.18 * this.j), aF6 = b9.qX.sL(1, aF5), this.r6[1] = {
			es: 0,
			eu: 0,
			i: this.i - this.r6[0].i - this.gap,
			j: this.j,
			a6l: "Single Player",
			font: aF6,
			aF7: "rgba(22,88,88,0.8)",
			fontSize: aF5
		}, this.r6[2] = {
			es: 0,
			eu: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6l: "",
			font: this.r6[1].font,
			aF7: "rgba(100,0,0,0.8)",
			fontSize: this.r6[1].fontSize
		}, this.r6[3] = {
			es: 0,
			eu: 0,
			i: this.i,
			j: this.j,
			a6l: "Back",
			font: this.r6[0].font,
			aF7: "rgba(0,0,0,0.8)",
			fontSize: this.r6[0].fontSize
		}, this.r6[4] = {
			es: 0,
			eu: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6l: "The game was updated!",
			font: this.r6[1].font,
			aF7: "rgba(100,0,0,0.8)",
			fontSize: this.r6[1].fontSize
		}, this.r6[5] = {
			es: 0,
			eu: 0,
			i: this.r6[0].i,
			j: Math.floor(.8 * this.j),
			a6l: "Reload",
			font: this.r6[0].font,
			aF7: "rgba(0,100,0,0.8)",
			fontSize: this.r6[0].fontSize
		}, this.r6[6] = {
			es: 0,
			eu: 0,
			i: this.r6[1].i,
			j: this.r6[5].j,
			a6l: "Back",
			font: this.r6[0].font,
			aF7: "rgba(0,0,0,0.8)",
			fontSize: this.r6[0].fontSize
		}, this.a9J()
	}, this.a9J = function() {
		this.eu = Math.floor(.54 * h.j), this.r6[0].es = Math.floor(.5 * h.i - .5 * this.i), this.r6[1].es = this.r6[0].es + this.r6[0].i + this.gap, this.r6[2].es = this.r6[3].es = this.r6[0].es, this.r6[4].es = this.r6[5].es = this.r6[0].es,
			this.r6[6].es = this.r6[1].es, this.r6[0].eu = Math.floor(.54 * h.j), this.r6[1].eu = this.r6[0].eu, this.r6[2].eu = Math.floor((h.j - this.r6[2].j - this.r6[3].j - this.gap) / 2), this.r6[3].eu = this.r6[2].eu + this.r6[2].j + this
			.gap, this.r6[4].eu = Math.floor((h.j - this.r6[4].j - this.r6[5].j - this.gap) / 2), this.r6[5].eu = this.r6[6].eu = this.r6[4].eu + this.r6[4].j + this.gap
	}, this.aF8 = function() {
		aF9(0), aF9(1)
	}, this.aFA = function() {
		aF9(2), aF9(3)
	}, this.aFB = function() {
		aF9(4), aF9(5), aF9(6)
	}, this.a1N = function(es, eu, mS) {
		var aB = -1;
		return 0 === aa.a14() ? aB = this.a1r(es, eu, 0, 2) : 3 === aa.a14() ? aB = this.a1r(es, eu, 3, 1) : 5 === aa.a14() && (aB = this.a1r(es, eu, 5, 2)), aF2 !== aB && (aF2 = aB, mS) && (be.dj = !0), -1 !== aB && (aT.rY(), !0)
	}, this.a1r = function(es, eu, aFC, size) {
		for (var aB = aFC; aB < aFC + size; aB++)
			if (es >= this.r6[aB].es && eu >= this.r6[aB].eu && es <= this.r6[aB].es + this.r6[aB].i && eu <= this.r6[aB].eu + this.r6[aB].j) return aB;
		return -1
	}
}

function cP() {
	var aFE, aFF, a6w, aFG, aFH, aFI, aFJ, aFK, aFL, a6v, aFM, aFN, aFO, aFP = 1;

	function aFR(aFS) {
		!aFS && 1 === aFO && aFP ? (aFP = 0, az.y.close(aFO, 3280)) : aFO = (aFO + 1) % az.y.aFT, aFN = be.eK, az.y.aFU(aFO, 4) && az.aE6.aFV(aFO)
	}

	function aFW() {
		if (0 !== aFO) return 1 === aFO && __fx.customLobby.isActive() ? (o.a1C(3249), __fx.customLobby.setActive(!1)) : void aFR();
		o.a1C(3249)
	}

	function aFb(eu, a91, tc) {
		var n6 = Math.floor((h.i - aFG) / 2) + aFJ,
			nJ = n6 + Math.floor(tc * (aFG - 2 * aFJ));
		ue.lineWidth = a91, ue.beginPath(), ue.moveTo(n6, eu), ue.lineTo(nJ, eu), ue.lineTo(Math.floor(n6 - aFJ + tc * aFG), eu + a6w), ue.lineTo(n6 - aFJ, eu + a6w), ue.closePath()
	}
	this.aFQ = 1, this.db = function() {
		aa.setState(6), aFE = 0, aFF = 1, aFK = "rgba(0,220,120,0.4)", aFL = "rgba(0,0,0,0.8)", this.resize(), be.dj = !0, aFP = 1, aFO = this.aFQ - 1, aFR(1)
	}, this.resize = function() {
		aFG = Math.floor((a0.a1.hu() ? .5 : .25) * h.hv), aFH = aFG + 12, a6w = Math.floor(.125 * aFG), aFJ = 3 * a6w, aFI = Math.floor(.225 * aFG), aFM = Math.floor(.3 * a6w), a6v = b9.qX.sL(0, aFM)
	}, this.a18 = function(a0z) {
		a0z === aFO && aFW()
	}, this.gy = function(es, eu) {
		var n6 = Math.floor((h.i - aFH) / 2),
			n7 = Math.floor(.5 * (h.j - bb.gap - a6w - aFI)) + a6w + bb.gap;
		return n6 < es && es < n6 + aFH && n7 < eu && eu < n7 + aFI && (this.a22(), aY.a1N(es, eu, !1), !0)
	}, this.a22 = function() {
		az.y.a1D(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.j1 = function() {
		6 === aa.a14() && (be.eK > aFN + 12e3 && aFW(), 100 < (aFE += .07 * aFF * (aFE < 16 ? 5 + aFE : 84 < aFE ? 105 - aFE : 17)) ? (aFE = 100, aFF = -1) : aFE < 0 && (aFE = 0, aFF = 1), aFK = "rgba(0," + Math.floor(190 - 1.9 * aFE) + "," +
			Math.floor(120 - 1.2 * aFE) + "," + (.4 + .004 * aFE) + ")", aFL = "rgba(0," + Math.floor(1.9 * aFE) + "," + Math.floor(1.2 * aFE) + "," + (.8 - .004 * aFE) + ")", be.dj = !0)
	}, this.ud = function() {
		var es = Math.floor((h.i - aFH) / 2),
			eu = Math.floor(.5 * (h.j - bb.gap - a6w - aFI));
		! function(title, eu, a91, tc) {
			ue.fillStyle = aFL, aFb(eu, a91, 1), ue.fill(), ue.fillStyle = aFK, aFb(eu, a91, tc), ue.fill(), ue.strokeStyle = bA.ng, aFb(eu, a91, 1), ue.stroke(),
				function(aFd, eu) {
					b9.qX.textAlign(ue, 1), b9.qX.textBaseline(ue, 1), ue.font = a6v, ue.fillStyle = bA.ng, ue.fillText(aFd, Math.floor(.5 * h.i), Math.floor(eu + .58 * a6w))
				}(title, eu)
		}(L(132), eu, 3, aFE / 100),
		function(es, eu, i, j, a6l) {
			ue.fillStyle = bA.nb, ue.fillRect(es, eu, i, j), ue.lineWidth = 3, ue.strokeStyle = bA.ng, ue.strokeRect(es, eu, i, j);
			var el = Math.floor(.3 * j);
			b9.qX.textAlign(ue, 1), b9.qX.textBaseline(ue, 1), ue.font = b9.qX.sL(0, el), ue.fillStyle = bA.ng, ue.fillText(a6l, Math.floor(es + i / 2), Math.floor(eu + j / 2 + .1 * el))
		}(es, eu + a6w + bb.gap, aFH, aFI, L(36))
	}
}

function cQ() {
	var a0v = 0;
	this.db = function() {
		aY.db(), a0v = 0
	}, this.setState = function(aFe) {
		a0v = aFe
	}, this.a14 = function() {
		return a0v
	}, this.aFf = function() {
		this.setState(8), t.x()
	}, this.a1v = function(e) {
		if (!bR.wP) return !1;
		if (!(be.eK < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aFg()) return !0;
				if ("Enter" === e.key) {
					if (0 === a0v) return !0;
					if (7 === a0v) return !0
				}
			}
			return !1
		}
	}, this.aFh = function() {
		bY.resize()
	}, this.aFg = function() {
		return !!bY.ro()
	}, this.gy = function(es, eu) {
		!bR.wP || bY.gy(es, eu) || 6 === a0v && aZ.gy(es, eu) || bX.gy(es, eu) || aT.gy(es, eu)
	}, this.a1N = function(es, eu) {
		!aT.a9C && aY.a1N(es, eu, !0) || aT.a1N(es, eu)
	}, this.click = function(es, eu) {
		aT.a1m()
	}, this.a1Q = function(es, eu, deltaY) {}, this.aFi = function() {
		aY.a9J(), be.dj = !0
	}, this.ud = function() {
		8 !== a0v && 10 !== a0v && (ue.imageSmoothingEnabled = !0, this.xy(), 0 !== a0v && (aT.ud(), aO.ud(), this.aFj(), bX.ud()), 0 !== a0v && 6 === a0v && aZ.ud(), bY.ud(), t.ud())
	}, this.xy = function() {
		var aFl, aFk;
		if (__fx.makeMainMenuTransparent) ue.clearRect(0, 0, h.i, h.j);
		else bR.wP ? (aFk = h.i / bR.ew, aFl = h.j / bR.ex, ue.setTransform(aFk = aFl < aFk ? aFk : aFl, 0, 0, aFk, Math.floor((h.i - aFk * bR.ew) / 2), Math.floor((h.j - aFk * bR.ex) / 2)), ue.drawImage(bR.wR, 0, 0), ue.setTransform(1, 0, 0, 1,
			0, 0), ue.fillStyle = bA.nb) : ue.fillStyle = bA.nX, ue.fillRect(0, 0, h.i, h.j)
	}, this.aFj = function() {
		var eu = Math.floor(.3 * h.j),
			canvas = ab.aFm("territorial.io"),
			hm = (hm = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hm,
			es = (ue.globalAlpha = .15, ue.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hm * canvas.width))),
			es = Math.floor(es / hm),
			eu = Math.floor(eu - .5 * canvas.height * hm),
			eu = Math.floor(eu / hm);
		ue.setTransform(hm, 0, 0, hm, es, eu), ue.drawImage(canvas, es, eu), ue.setTransform(1, 0, 0, 1, 0, 0), ue.globalAlpha = 1, ue.imageSmoothingEnabled = !0
	}
}

function cp() {
	this.aD2 = 0;
	var aFo, aFp, aFq, aFr, aFs, aFt = this.aFn = 0;

	function aFw() {
		aFr = aFs = null, aFt = 0
	}
	this.db = function(rc, aCz, aD0) {
		t.x(), bm.u7(), aa.setState(10), aFr = rc, aFs = aCz, aFt = aD0, this.aD2 = rc.aD2, this.aFn = aD0, aFo = 0, aFp = be.eK + 4500, az.y.a19 = rc.a19, az.y.a12 === rc.a19 ? (console.log("direct pass"), aFq = 0) : (console.log(
			"delayed pass"), az.y.close(az.y.a12, 3247), aFq = 2, az.y.aFU(rc.a19, 5) && az.p1.aFu()), ue.imageSmoothingEnabled = !0, aa.xy();
		aCz = ab.aFm("loading"), aD0 = (a0.a1.hu() ? .396 : .25) * h.hv / aCz.width;
		ue.setTransform(aD0, 0, 0, aD0, Math.floor((h.i - aD0 * aCz.width) / 2), Math.floor((h.j - aD0 * aCz.height) / 2)), ue.imageSmoothingEnabled = !1, ue.drawImage(aCz, 0, 0), ue.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mQ = function() {
		0 < aFq && be.eK > aFp && (aFq--, aFp += 4500, 0 === be.aFx) && 0 === be.k5() && az.y.aFU(az.y.a19, 5)
	}, this.aFy = function() {
		return 10 === aa.a14() && (bm.aCQ.aD3(aFr, aFs, aFt), aFw(), !0)
	}, this.aFz = function() {
		10 === aa.a14() && 2 <= ++aFo && (bm.aCQ.aD3(aFr, aFs, aFt), aFw())
	}
}

function cR() {
	var aG1, canvas, a0D, aG2;

	function aG8(e6, name, aG9, qE) {
		a0D[e6] = name, canvas[e6] = new Image, canvas[e6].onload = function() {
			! function(e6, aG9) {
				var a3h, a3i = null;
				7 === aG9 ? a3h = b9.a28.a3k : 8 === aG9 ? (a3h = b9.a28.a3n, a3i = .1) : 3 === aG9 ? (a3h = b9.a28.a3l, a3i = .06) : 5 === aG9 ? a3h = b9.a28.a3o : 6 === aG9 ? a3h = b9.a28.a3j : 4 === aG9 && (a3h = b9.a28.a3p);
				canvas[e6] = b9.a28.a3g(canvas[e6], a3h, a3i)
			}(e6, aG9), aGB()
		}, canvas[e6].onerror = function(e) {
			console.error("Error loading image at index", e6, "Error:", e), aGB()
		}, canvas[e6].src = "data:image/png;base64," + qE
	}

	function aGB() {
		aG1--, aG5()
	}

	function aG5() {
		0 === aG1 && (aG1 = -1, aG7(), be.dj = !0, canvas[7] = aG2, canvas[8] = aG2, canvas[9] = aG2, canvas[10] = aG2, 5 === t.sl) && t.a4t().aGD.resize()
	}

	function aG7() {
		aL.a55(), bX.aCH([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wU = new yN, aj.wU.db(), av.dc()
	}
	this.db = function() {
		if (void 0 === canvas) {
			aG1 = 23, canvas = new Array(aG1), a0D = new Array(aG1), (aG2 = document.createElement("canvas")).width = 1;
			for (var aB = aG1 - (aG2.height = 1); 0 <= aB; aB--) canvas[aB] = aG2;
			aG7(), aG8(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aG8(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aG8(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG8(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aG8(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aG8(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aG8(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aG8(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG8(8,
					"googleplay", 3,
					"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"
					), aG8(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aG8(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG8(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG8(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG8(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG8(14, "bestPlayer", 5,
					"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"
					), aG8(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aG8(16, "apple", 3,
					"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"
					), aG8(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aG8(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aG8(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aG8(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aG8(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aG8(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e6) {
		return canvas[e6]
	}, this.aFm = function(name) {
		for (var aB = a0D.length - 1; 0 <= aB; aB--)
			if (a0D[aB] === name) return canvas[aB];
		return aG2
	}, this.tD = function() {
		return aG1 <= 0
	}, this.aG4 = function() {
		aG1 = 0, aG5()
	}
}

function cS() {
	var aGG, aGH, aGI, aGJ, aGK, aGL, aGM, aGN, aGO, aGP, aGE = [
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
		aGF = [
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

	function aGV(jP, nO) {
		for (var aB = jP; aB < nO; aB++) aGG[aB] = 4 * bK.ds(64 * ax.random(), ax.value(100)), aGH[aB] = 4 * bK.ds(64 * ax.random(), ax.value(100)), aGI[aB] = 4 * bK.ds(64 * ax.random(), ax.value(100))
	}

	function aGU(jP, nO) {
		for (var colorsData = aD.data.colorsData, aB = jP; aB < nO; aB++) {
			var fD = colorsData[aB];
			aGG[aB] = 4 * (fD >> 12), aGH[aB] = 4 * (fD >> 6 & 63), aGI[aB] = 4 * (63 & fD)
		}
	}

	function aGg(eP, aGi) {
		aBe[eP] = 0, aBe[eP + 1] = 0, aBe[eP + 2] = aGi, aBe[eP + 3] = 0, aGj(eP)
	}

	function aGj(eP) {
		var es;
		ba.nW || (es = ac.xz(eP), eP = ac.y0(eP), ba.nW = es >= bZ.aBd[0] && es <= bZ.aBd[2] && eP >= bZ.aBd[1] && eP <= bZ.aBd[3])
	}
	this.en = new Int32Array(4), this.dc = function() {
		var en = this.en;
		en[0] = -4 * bR.ew, en[1] = 4, en[2] = -en[0], en[3] = -en[1]
	}, this.db = function() {
		if (aGG = new Uint8Array(aD.ei), aGH = new Uint8Array(aD.ei), aGI = new Uint8Array(aD.ei), aGJ = new Uint8Array(aD.ei), aGK = new Uint8Array(aD.ei), aGL = new Uint8Array(aD.ei), aGM = new Uint8Array(aD.ei), aGN = new Uint8Array(aD.ei),
			aGO = new Uint8Array(aD.ei), aGP = new Uint8Array(aD.ei), this.a8A = new Uint8Array(aD.ei), aD.hf)
			for (var aAJ = bf.aAJ, aB = aD.ei - 1; 0 <= aB; aB--) {
				var f6 = aAJ[aB],
					l1 = bK.ds((aGF[f6][3] + 1) * ax.random(), ax.value(100));
				aGG[aB] = aGE[f6][0] + l1 * aGF[f6][0], aGH[aB] = aGE[f6][1] + l1 * aGF[f6][1], aGI[aB] = aGE[f6][2] + l1 * aGF[f6][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aGU(0, aD.k8), aGV(aD.k8, aD.ei)) : aGV(0, aD.ei) : aGU(0, aD.ei);
		! function() {
			var aB, eo;
			for (aB = aD.ei - 1; 0 <= aB; aB--) eo = bK.ds(aGG[aB] + aGH[aB] + aGI[aB], 3), aGG[aB] += aGb(eo - aGG[aB], 2), aGH[aB] += aGb(eo - aGH[aB], 2), aGI[aB] += aGb(eo - aGI[aB], 2), aGG[aB] -= aGG[aB] % 4, aGH[aB] -= aGH[aB] % 4, aGI[
				aB] -= aGI[aB] % 4
		}(),
		function() {
			for (var aB = aD.ei - 1; 0 <= aB; aB--) aGG[aB] += bK.ds(aB, 128), aGH[aB] += bK.ds(aB % 128, 32), aGI[aB] += bK.ds(aB % 32, 8), aGJ[aB] = aB % 8
		}(), this.aGY(),
			function() {
				for (var aB = aD.ei - 1; 0 <= aB; aB--) aGK[aB] = aGG[aB] < 32 ? aGG[aB] + 32 : aGG[aB] - 32, aGL[aB] = aGH[aB] < 32 ? aGH[aB] + 32 : aGH[aB] - 32, aGM[aB] = aGI[aB] < 32 ? aGI[aB] + 32 : aGI[aB] - 32
			}(),
			function() {
				for (var aB = aD.ei - 1; 0 <= aB; aB--) aGN[aB] = 235 < aGG[aB] ? aGG[aB] - 20 : aGG[aB] + 20, aGO[aB] = 235 < aGH[aB] ? aGH[aB] - 20 : aGH[aB] + 20, aGP[aB] = 235 < aGI[aB] ? aGI[aB] - 20 : aGI[aB] + 20
			}()
	}, this.a73 = function(player) {
		var g = bN.fK;
		return g[0] = aGG[player], g[1] = aGH[player], g[2] = aGI[player], g
	}, this.aGY = function() {
		for (var aB = aD.ei - 1; 0 <= aB; aB--) this.a8A[aB] = aGG[aB] + aGH[aB] + aGI[aB] < 280 ? 0 : 1
	}, this.xz = function(eP) {
		return bK.ds(eP, 4) % bR.ew
	}, this.y0 = function(eP) {
		return bK.ds(eP, 4 * bR.ew)
	}, this.xX = function(es, eu) {
		return Math.floor(4 * (eu * bR.ew + es))
	}, this.xn = function(eP) {
		var en = this.en;
		return this.aGc(eP + en[0]) || this.aGc(eP + en[1]) || this.aGc(eP + en[2]) || this.aGc(eP + en[3])
	}, this.fA = function(eP) {
		var en = this.en;
		return this.eq(eP + en[0]) || this.eq(eP + en[1]) || this.eq(eP + en[2]) || this.eq(eP + en[3])
	}, this.xl = function(eP, player) {
		var en = this.en;
		return this.aGd(eP + en[0], player) || this.aGd(eP + en[1], player) || this.aGd(eP + en[2], player) || this.aGd(eP + en[3], player)
	}, this.gL = function(eP) {
		return 208 <= aBe[eP + 3]
	}, this.xt = function(player, eP) {
		return this.gL(eP) && this.xw(player, eP)
	}, this.xw = function(player, eP) {
		return player === this.ed(eP)
	}, this.aGe = function(eP) {
		return 208 <= aBe[eP + 3] && aBe[eP + 3] < 224
	}, this.jK = function(eP) {
		return 224 <= aBe[eP + 3] && aBe[eP + 3] < 248
	}, this.xm = function(eP) {
		for (var en = this.en, aB = 3; 0 <= aB; aB--)
			if (this.hz(eP + en[aB])) return !0;
		return !1
	}, this.eg = function(eP) {
		return this.gL(eP) || this.ec(eP)
	}, this.hz = function(eP) {
		return 0 === aBe[eP + 3] && 2 === aBe[eP + 2]
	}, this.ec = function(eP) {
		return 0 === aBe[eP + 3] && 1 === aBe[eP + 2]
	}, this.wc = function(eP) {
		return 0 === aBe[eP + 3] && 3 === aBe[eP + 2]
	}, this.eq = function(eP) {
		return 0 === aBe[eP + 3] && 5 === aBe[eP + 2]
	}, this.aGc = function(eP) {
		return 0 === aBe[eP + 3] && 3 <= aBe[eP + 2]
	}, this.eT = function(eP) {
		return (aBe[eP] >> 1 << 8) + aBe[eP + 1]
	}, this.aGf = function(eP) {
		return 1 & aBe[eP]
	}, this.aGd = function(eP, player) {
		return this.ec(eP) || this.gL(eP) && player !== this.ed(eP)
	}, this.ed = function(eP) {
		return aBe[eP] % 4 * 128 + aBe[eP + 1] % 4 * 32 + aBe[eP + 2] % 4 * 8 + aBe[eP + 3] % 8
	}, this.xu = function(eP) {
		aGg(eP, 1)
	}, this.aGh = function(eP) {
		aGg(eP, 2)
	}, this.xY = function(eP, player) {
		aBe[eP] = aGG[player], aBe[eP + 1] = aGH[player], aBe[eP + 2] = aGI[player], aBe[eP + 3] = 208 + aGJ[player], aGj(eP)
	}, this.gG = function(eP, player) {
		aBe[eP] = aGK[player], aBe[eP + 1] = aGL[player], aBe[eP + 2] = aGM[player], aBe[eP + 3] = 224 + aGJ[player], aGj(eP)
	}, this.jL = function(eP, player) {
		aBe[eP] = aGN[player], aBe[eP + 1] = aGO[player], aBe[eP + 2] = aGP[player], aBe[eP + 3] = 248 + aGJ[player], aGj(eP)
	}
}

function cq() {
	var aGk = 0,
		aGm = new Uint16Array(64);

	function aGo(a59) {
		aGk -= 2;
		for (var aB = a59; aB < aGk; aB += 2) aGm[aB] = aGm[aB + 2], aGm[aB + 1] = aGm[aB + 3]
	}
	this.db = function() {
		aGk = 0
	}, this.j1 = function() {
		var aB, jI, iL;
		if (0 !== aGk)
			if (0 === ag.mg[aD.eV]) aGk = 0;
			else if (0 === ad.fs(aD.eV)) aGk = 0;
		else
			for (aB = aGk - 2; 0 <= aB; aB -= 2)(jI = aGm[aB]) < aD.ei && 0 === ag.mg[jI] ? aGo(aB) : (iL = aGm[aB + 1], (jI >= aD.ei && br.aGp(aD.eV) || jI < aD.ei && br.aGq(aD.eV, jI)) && (b7.hB.hI(iL, jI), aGo(aB)))
	}, this.hJ = function(jI, iL) {
		! function(jI, iL) {
			for (var aB = 0; aB < aGk; aB += 2)
				if (aGm[aB] === jI) return aGm[aB + 1] = Math.min(aGm[aB + 1] + iL, 1023), 1;
			return
		}(jI, iL) && 64 !== aGk && (aGm[aGk] = jI, aGm[aGk + 1] = iL, aGk += 2)
	}
}

function cT() {
	function aGx(player) {
		var dr;
		b9.g7.a3H(player) && (dr = ag.gn[player] - ag.a3L[player] + ad.aGz(player), bc.gB(player, Math.abs(dr), dr < 0 ? 18 : 12)), ag.gn[player] = 0, ag.a3L[player] = 0
	}

	function aH6() {
		aX.show(!1, !1, !1, !0), aW.aAm(), bQ.zd.a0N()
	}

	function aGu(player, aH5) {
		for (var aB = aH5.length - 1; 0 <= aB; aB--) ad.aH8(aH5[aB], player)
	}

	function aGw(player) {
		for (var ib = ag.ib, ic = ag.ic, ie = ag.ie, ig = ag.ig, n6 = ib[player], n7 = ie[player], ew = bR.ew, gZ = ag.gZ, es = ic[player]; n6 <= es; es--)
			for (var eu = ig[player]; n7 <= eu; eu--) {
				var gJ = 4 * (eu * ew + es);
				ac.xt(player, gJ) && (ac.xu(gJ), gZ[player]--)
			}
		ic[player] = ig[player] = 0, ib[player] = ie[player] = Math.max(ew, bR.ex)
	}
	this.dk = function(gJ) {
		var player, dr = ag.gZ[gJ];
		bM.y.pp[gJ] ? dr && (aGu(player = gJ, ad.aGv(player)), aGw(player), aF.g9(player), ad.clear(player), aGx(player), function(player) {
			ag.xT[player] = 0, ag.gD[player] = [], ag.gR[player] = [], ag.gS[player] = [], ag.fB[player] = []
		}(player)) : !dr && ag.gD[gJ].length || this.aGt(gJ)
	}, this.aGt = function(player) {
		! function(player) {
			b9.g7.jW(player) || (ag.yK[player] = bh.a0h.aH4(), aD.zu++);
			var aH5 = ad.aGv(player);
			0 === aH5.length ? b9.g7.a3E(player) && aH6() : (aGu(player, aH5), function(player, aH5) {
				var aHA = aH5[function(aH5) {
					var aB, e6 = 0;
					for (aB = aH5.length - 1; 1 <= aB; aB--) ag.gZ[aH5[aB]] > ag.gZ[aH5[e6]] && (e6 = aB);
					return e6
				}(aH5)];
				9 === aD.kQ && (1 === bf.ej[player] ? ax.k0(8) && ay.aHB(aHA) : aE.hU[player] && (aN.a6Y(765, 0), aN.yL(280, L(133, [ag.a0R[aHA], ag.a0R[player]]), 765, aHA, bA.nX, bA.op, -1, !0)));
				if (b9.g7.a3E(player)) aH6(), aN.a04(aHA, 1);
				else {
					for (var aB = aH5.length - 1; 0 <= aB; aB--)
						if (b9.g7.a3H(aH5[aB]) && (bc.mc[4 - b9.g7.jW(player)]++, b9.g7.a3E(aH5[aB]))) return aN.a04(player, 0);
					b9.g7.jW(player) || aN.a6I(0, player, aHA)
				}
			}(player, aH5))
		}(player), aGw(player), aGx(player),
			function(player) {
				ag.mg[player] = 0, ag.gD[player] = null, ag.gR[player] = null, ag.gS[player] = null, ag.fB[player] = null
			}(player), aF.g9(player), ad.clear(player), bM.aH2.aH3(player)
	}
}

function cv() {
	var input;

	function aHC(e) {
		(e = e.target.files) && 0 < e.length && b5.aHF(e[0])
	}

	function aHJ(e) {
		var f6 = new Image;
		f6.onload = aHK, f6.src = e.target.result
	}

	function aHK(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bR.aHM || j > bR.aHM || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bR.aHM + ".", a0.vF ? a0.vF.showToast(e) : alert(e)) : 20 === t.sl && t.a4t().aHK(canvas)
	}
	this.db = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHC
	}, this.u7 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHD = function() {
		input.click()
	}, this.aHF = function(aHG) {
		var g = aHG.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHJ, g.readAsDataURL(aHG))
	}
}

function ct() {
	this.aHO = null, this.db = function() {
		10 !== aD.kQ ? this.aHO = null : this.aHO = new Uint32Array(aD.ei)
	}, this.j1 = function() {
		10 === aD.kQ && this.kv()
	}, this.kv = function() {
		for (var gJ, target, aAz, aHO = this.aHO, zg = al.kA, a3M = ag.gn, aB = al.k9 - 1; 0 <= aB; aB--)(gJ = zg[aB]) >= aD.k8 || (target = Math.max(bK.ds(a3M[gJ], 4), 2048), aAz = Math.max(ae.aB0(gJ), 100), aHO[gJ] += bK.ds(aAz * target, 1e4),
			aHO[gJ] > target && (aHO[gJ] = target))
	}, this.a3S = function(player, hU) {
		return hU > this.aHO[player] ? (hU = this.aHO[player], this.aHO[player] = 0) : this.aHO[player] -= hU, hU
	}
}

function dU() {
	function aHQ(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aHY, g.readAsText(e))
	}

	function aHY(e) {
		var aHc;
		aD.zs || (e = JSON.parse(e.target.result), aHc = aD.data = new a4L, aHd(e, aHc, "mapType", 0, 2), aHd(e, aHc, "mapProceduralIndex", 0, 255), aHd(e, aHc, "mapRealisticIndex", 0, 255), aHd(e, aHc, "mapSeed", 0, 16383), function(aHb, aHc, gK,
				max) {
				aHb = aHb[gK];
				aHc[gK] = aHj(aHb) ? aHb.slice(0, max) : aHc[gK]
			}(e, aHc, "mapName", 20), function(aHb, aHc, gK) {
				var aHL;
				2 === aHc.mapType && (!aHj(aHb = aHb[gK]) || aHb.length <= 20 ? aHc.mapType = 0 : ((aHL = new Image).onload = function() {
					b8.aHk.aHl(aHL, 1), aHL.onload = null, aHL = null
				}, aHL.src = aHb))
			}(e, aHc, "canvas"), aHd(e, aHc, "passableWater", 0, 1), aHd(e, aHc, "passableMountains", 0, 1), aHd(e, aHc, "playerCount", 1, 512), aHd(e, aHc, "humanCount", 1, 1), aHd(e, aHc, "selectedPlayer", 0, 0), aHd(e, aHc, "gameMode", 0, 1),
			aHd(e, aHc, "playerMode", 0, 0), aHd(e, aHc, "battleRoyaleMode", 0, 0), aHd(e, aHc, "numberTeams", 0, 8), aHd(e, aHc, "isZombieMode", 0, 0), aHd(e, aHc, "isContest", 0, 0), aHd(e, aHc, "isReplay", 0, 0), aHg(e, aHc, "elo", 16, 2,
				16383), aHd(e, aHc, "colorsType", 0, 1), aHd(e, aHc, "colorsPersonalized", 0, 1), aHg(e, aHc, "colorsData", 32, 512, 262143), aHd(e, aHc, "selectableColor", 0, 1), aHg(e, aHc, "teamPlayerCount", 16, 9, 512), aHd(e, aHc,
				"neutralBots", 0, 1), aHd(e, aHc, "botDifficultyType", 0, 3), aHd(e, aHc, "botDifficultyValue", 0, 15), aHg(e, aHc, "botDifficultyTeam", 8, 9, 15), aHg(e, aHc, "botDifficultyData", 8, 512, 15), aHd(e, aHc, "spawningType", 0, 2),
			aHd(e, aHc, "spawningSeed", 0, 16383), aHg(e, aHc, "spawningData", 16, 1024, 4095), aHd(e, aHc, "selectableSpawn", 0, 1), aHd(e, aHc, "playerNamesType", 0, 2),
			function(aHb, aHc, gK, size, max) {
				var a2T = aHb[gK];
				if (Array.isArray(a2T)) {
					for (var a2U = new Array(size), el = Math.min(a2T.length, size), aB = 0; aB < el; aB++) a2U[aB] = aHj(a2T[aB]) ? a2T[aB].slice(0, max) : "";
					aHc[gK] = a2U
				}
			}(e, aHc, "playerNamesData", 512, 20), aHd(e, aHc, "selectableName", 0, 1), aHd(e, aHc, "aIncomeType", 0, 2), aHd(e, aHc, "aIncomeValue", 0, 255), aHg(e, aHc, "aIncomeData", 8, 512, 255), aHd(e, aHc, "tIncomeType", 0, 2), aHd(e, aHc,
				"tIncomeValue", 0, 255), aHg(e, aHc, "tIncomeData", 8, 512, 255), aHd(e, aHc, "iIncomeType", 0, 2), aHd(e, aHc, "iIncomeValue", 0, 255), aHg(e, aHc, "iIncomeData", 8, 512, 255), aHd(e, aHc, "sResourcesType", 0, 2), aHd(e, aHc,
				"sResourcesValue", 0, 2047), aHg(e, aHc, "sResourcesData", 16, 512, 2047), t.x(), t.y.aHa[0] = 0, t.u(19))
	}

	function aHd(aHb, aHc, gK, min, max) {
		aHb = aHb[gK];
		aHc[gK] = "number" == typeof aHb && min <= aHb && aHb <= max ? Math.floor(aHb) : aHc[gK]
	}

	function aHj(qE) {
		return "string" == typeof qE
	}

	function aHg(aHb, aHc, gK, aHm, size, max) {
		var a2T = aHb[gK];
		if (Array.isArray(a2T)) {
			for (var a2U = new(8 === aHm ? Uint8Array : 16 === aHm ? Uint16Array : Uint32Array)(size), el = Math.min(a2T.length, size), aB = 0; aB < el; aB++) a2U[aB] = bK.ht(a2T[aB], 0, max);
			aHc[gK] = a2U
		}
	}
	this.aHP = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aHQ, input.click()
	}, this.aHR = function() {
		for (var aHU, aCE, a4r = aD.data, keys = Object.keys(a4r), aHS = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a4r[key] instanceof Uint8Array || a4r[key] instanceof Uint16Array || a4r[key] instanceof Uint32Array ? aHS[key] = Array.from(a4r[key]) : aHS[key] = a4r[key]
		}
		aHS.canvas = 2 === aHS.mapType && aHS.canvas ? aHS.canvas.toDataURL() : null, aHU = aHS, aHU = JSON.stringify(aHU, null, 2), aHU = new Blob([aHU], {
			type: "application/json"
		}), (aCE = document.createElement("a")).href = URL.createObjectURL(aHU), aCE.download = "tt_scenario.json", aCE.click()
	}
}

function cW() {
	var aHn, aHo, size, jI, hU, aHp;

	function aHq(player) {
		return player < aD.k8 ? aHn * player : aHn * aD.k8 + aHo * (player - aD.k8)
	}
	this.db = function() {
		aHn = aD.k8 < 16 ? 12 : 8, aHo = 4;
		var el = aHq(aD.ei);
		size = new Uint8Array(aD.ei), jI = new Uint16Array(el), hU = new Uint32Array(el), aHp = new Uint8Array(el)
	}, this.q5 = function(a7f, aHr) {
		var aHs = this.go(a7f, aHr),
			aHr = (this.gm(a7f, aHr, 0), b9.g7.gA(a7f, aHs));
		bc.gB(a7f, aHs - aHr, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aH8 = function(player, aHr) {
		var aHv, aHr = function(player, aHr) {
			var aB, l1 = aHq(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jI[l1 + aB] === aHr) return aB;
			return size[player]
		}(player, aHr);
		aHr !== size[player] && (aHv = hU[aHq(player) + aHr], this.gC(player, aHr), this.jF(player, aHv, aD.ei))
	}, this.jU = function(player, aHr) {
		for (var l1 = aHq(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jI[l1 + aB] === aHr) return !0;
		return !1
	}, this.jm = function(player) {
		return player < aD.k8 ? size[player] < aHn : size[player] < aHo
	}, this.fs = function(player) {
		return size[player]
	}, this.fx = function(player, aB) {
		return jI[aHq(player) + aB]
	}, this.fy = function(player, aB) {
		return hU[aHq(player) + aB]
	}, this.go = function(player, aHr) {
		for (var l1 = aHq(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jI[l1 + aB] === aHr) return hU[l1 + aB];
		return 0
	}, this.aGz = function(player) {
		for (var l1 = aHq(player), fD = 0, aB = size[player] - 1; 0 <= aB; aB--) fD += hU[l1 + aB];
		return fD
	}, this.gm = function(player, aHr, aHv) {
		for (var l1 = aHq(player), aB = size[player] - 1; 0 <= aB; aB--) jI[l1 + aB] === aHr && (hU[l1 + aB] = aHv)
	}, this.gX = function(player, aB, aHv) {
		hU[aHq(player) + aB] = Math.max(aHv, 0)
	}, this.gY = function(player, aB) {
		aHp[aHq(player) + aB] = 0
	}, this.fz = function(player, aB) {
		return aHp[aHq(player) + aB]
	}, this.jF = function(player, aHv, aHr) {
		b9.g7.a3H(aHr) && bc.mc[6 - b9.g7.jW(player)]++;
		for (var l1 = aHq(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jI[l1 + aB] === aHr) return hU[l1 + aB] += aHv, void(hU[l1 + aB] = hU[l1 + aB] > aD.a3O ? aD.a3O : hU[l1 + aB]);
		jI[l1 + size[player]] = aHr, hU[l1 + size[player]] = aHv, aHp[l1 + size[player]] = 1, size[player]++, player < aD.k8 && (aHr === aD.eV ? aN.a04(player, 5) : player === aD.eV && af.a6K(aHr))
	}, this.gC = function(player, e6) {
		var f4, l1;
		if (0 !== size[player])
			for (l1 = aHq(player), size[player]--, f4 = e6; f4 < size[player]; f4++) jI[l1 + f4] = jI[l1 + f4 + 1], hU[l1 + f4] = hU[l1 + f4 + 1], aHp[l1 + f4] = aHp[l1 + f4 + 1]
	}, this.aGv = function(player) {
		for (var f4, l1, aH5 = [], aB = al.k9 - 1; 0 <= aB; aB--)
			for (l1 = aHq(al.kA[aB]), f4 = size[al.kA[aB]] - 1; 0 <= f4; f4--)
				if (jI[l1 + f4] === player) {
					aH5.push(al.kA[aB]);
					break
				} return aH5
	}
}

function cX() {
	var aHw;

	function aHy(player) {
		var e5, jn;
		return b9.g7.jW(player) && player < aD.k8 ? 0 : (e5 = aHw[bK.ds((aD.ei - 1) * ag.gZ[player], aD.js)], be.k5() < 1920 && (e5 = Math.max(bK.ds(100 * (13440 - 6 * be.k5()), 1920), e5)), jn = ae.jo(player), ag.gn[player] > jn && (e5 -= bK.ds(2 *
			e5 * (ag.gn[player] - jn), jn)), Math.min(Math.max(e5, 0), 700))
	}

	function aIA(nI) {
		for (var gZ = ag.gZ, kA = al.kA, aB = al.k9 - 1; 0 <= aB; aB--) {
			var gJ = kA[aB];
			b9.g7.gA(gJ, bK.ds(nI * gZ[gJ], 32))
		}
	}

	function aI7() {
		var wV = aD.eV;
		bN.fH[0] = ag.gn[wV] - ag.a3L[wV]
	}

	function aI9(e6) {
		var wV = aD.eV;
		bc.mc[e6] += ag.gn[wV] - ag.a3L[wV] - bN.fH[0]
	}
	this.di = function() {
		for (var el = aD.ei, aB = (aHw = new Uint16Array(el), 0); aB < el; aB++) aHw[aB] = 100 + aHx(bK.ds(25600 * aB, el - 4), 9)
	}, this.db = function() {
		0 === aD.data.iIncomeType ? this.aB0 = aHy : 1 === aD.data.iIncomeType ? this.aB0 = function(player) {
			return bK.ds(aD.data.iIncomeValue * aHy(player), 64)
		} : this.aB0 = function(player) {
			return bK.ds(aD.data.iIncomeData[player] * aHy(player), 64)
		}
	}, this.j1 = function() {
		if (be.k5() % 10 == 9 && (function() {
				aI7();
				for (var kA = al.kA, gn = ag.gn, aB = al.k9 - 1; 0 <= aB; aB--) {
					var gJ = kA[aB],
						aI8 = bK.ds(ae.aB0(gJ) * gn[gJ], 1e4);
					b9.g7.gA(gJ, Math.max(aI8, 1))
				}
				aI9(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aI7(), 1 === aD.data.aIncomeType)
						for (var gZ = ag.gZ, kA = al.kA, nI = aD.data.aIncomeValue, aB = al.k9 - 1; 0 <= aB; aB--) {
							var gJ = kA[aB];
							b9.g7.gA(gJ, bK.ds(nI * gZ[gJ], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gZ = ag.gZ, kA = al.kA, nI = aD.data.aIncomeData, aB = al.k9 - 1; 0 <= aB; aB--) {
								var gJ = kA[aB];
								b9.g7.gA(gJ, bK.ds(nI[gJ] * gZ[gJ], 128))
							}
						}();
					aI9(18)
				}
			}(), be.k5() % 100 == 99)) {
			if (aI7(), 0 === aD.data.tIncomeType) aIA(32);
			else if (1 === aD.data.tIncomeType) aIA(aD.data.tIncomeValue);
			else
				for (var gZ = ag.gZ, kA = al.kA, nI = aD.data.tIncomeData, aB = al.k9 - 1; 0 <= aB; aB--) {
					var gJ = kA[aB];
					b9.g7.gA(gJ, bK.ds(nI[gJ] * gZ[gJ], 32))
				}
			aI9(8)
		}
	}, this.jo = function(player) {
		return Math.min(100 * ag.gZ[player], aD.a4H)
	}, this.p4 = function(player, p5) {
		player !== aD.eV && p5 !== aD.eV && bp.yL(ag.a0R[player] + " has supported " + ag.a0R[p5] + " with " + bN.fI[0] + " ressource" + (1 === bN.fI[0] ? "." : "s.")), b9.g7.gA(p5, bN.fI[0]), bc.pR(player, p5), af.aI0(player, bN.fI[0] + bN.fI[
			1]), af.pS(p5, bN.fI[0]), b9.g7.mH(player)
	}, this.aI1 = function() {
		for (var el = al.k9, zg = al.kA, l1 = 0, a3M = ag.gn, aB = 0; aB < el; aB++) l1 += a3M[zg[aB]];
		return l1
	}, this.aI2 = function(aI3) {
		for (var gJ, el = al.k9, zg = al.kA, l1 = 0, a3M = ag.gn, ej = bf.ej, aB = 0; aB < el; aB++) ej[gJ = zg[aB]] === aI3 && (l1 += a3M[gJ]);
		return l1
	}
}

function cZ() {
	var aIE, aIF, aIG, aIH, aII, aIJ, aIK, aIL, aIM, aIN, aIO, aIP, aIQ, aIR, aIS, aIT, aIU, aIV, aIX, aIY, aC7, aIZ, aIa, aIh, aIi, aIW = null,
		aIc = 0,
		aId = !1,
		aIe = new Float32Array(4),
		aIf = 0,
		aIg = !0,
		aA8 = 400,
		aIj = 0;

	function qa() {
		aIM = Math.floor(+h.hv), aIN = Math.floor(.5 * aIM)
	}

	function aIk() {
		var aB, aIp;
		for (ue.font = b9.qX.sL(1, 100 * aIO), aIp = 80 / Math.floor(ue.measureText(b9.rW.z9(aD.a3O)).width), ue.font = b9.qX.sL(1, 100), aB = aD.ei - 1; 0 <= aB; aB--) aIL[aB] = 100 / Math.floor(ue.measureText(ag.a0R[aB]).width), aIK[aB] = Math.min(
			aIp, aIL[aB])
	}

	function aIq(aB) {
		return !aIj || (aB = ag.gn[aB]) < 1e6 ? 1 : aB < 1e7 ? aIe[0] : aIe[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aIo(hn) {
		aIV = !1, aIU = 1, aIS = aIT = 0, aIg && (b9.qX.textAlign(hn, 1), b9.qX.textBaseline(hn, 1));
		for (var aIw, aIx, aB, aIy, fontSize, aIz, n6 = iM / hw, n7 = iN / hw, nJ = (h.i + iM) / hw, nK = (h.j + iN) / hw, aJ0 = 0 !== ag.mg[aD.eV] && !b9.g7.jW(aD.eV), f4 = al.k9 - 1; 0 <= f4; f4--) aB = al.kA[f4], (fontSize = Math.floor(aIR * hw *
			aIq(aB) * aIK[aB] * aII[aB])) < aIQ || aIM <= fontSize || aIG[aB] + aII[aB] > n6 && aIG[aB] < nJ && aIH[aB] + aIJ[aB] > n7 && aIH[aB] < nK && (aIw = Math.floor(h.i * (aIG[aB] + aII[aB] / 2 - n6) / (nJ - n6)), aIx = Math.floor(h.j * (
			aIH[aB] + aIJ[aB] / 2 - n7) / (nK - n7) - .1 * fontSize), aIy = ac.a8A[aB], hn.font = b9.qX.sL(1 === ag.a3D[aB] ? 4 : 1, fontSize), hn.fillStyle = aJ1(fontSize, aIy % 2), aIj ? aJ2(hn, aB, fontSize, aIw, aIx, aIy) : aJ3(aB,
			fontSize, aIw, aIx, hn), aIV = !0, 0 < aC7[aB] ? function(aIw, aIx, fontSize, aB, hn) {
			0 === jt[aB] ? aj.rn.z0(aIY[aB]) ? (function(aIw, aIx, fontSize, player, pG, hn) {
				for (var x2 = aIx, hm = (hn.globalAlpha = aJB(fontSize), aIq(player) * (aIj ? aIf : aIL[player])), x1 = aIw - .5 * fontSize / hm - .9 * fontSize, f5 = 0; f5 < 2; f5++) hn.fillText(aj.rn.ys(pG), x1, x2), x1 = aIw + .5 *
					fontSize / hm + .9 * fontSize;
				hn.globalAlpha = 1
			}(aIw, aIx, fontSize, aB, aIY[aB], hn), aJ5(aIw, aIx, fontSize, 0, 0, hn)) : aj.rn.z2(aIY[aB]) ? (aJE(aIw, aIx, fontSize, aIY[aB], 0, hn), aJ5(aIw, aIx, fontSize, 0, 1, hn)) : (aJE(aIw, aIx, fontSize, aIY[aB], 1, hn), aJ5(aIw,
				aIx, fontSize, 1, 0, hn)) : aJE(aIw, aIx, fontSize, aIY[aB], 0, hn)
		}(aIw, aIx, fontSize, aB, hn) : 0 === jt[aB] && aJ5(aIw, aIx, fontSize, 0, 0, hn), aJ0 && (0 < aC7[aB + aD.ei] || 0 < aC7[aB + 2 * aD.ei] || 0 < aC7[aB + 3 * aD.ei] || 0 < aC7[aB + 4 * aD.ei]) && function(aIw, aIx, fontSize, aB, hn) {
			var f6, gE = -1;
			for (f6 = 4; 1 <= f6; f6--) 0 < aC7[aB + f6 * aD.ei] && gE++;
			for (f6 = 1; f6 < 5; f6++) 0 < aC7[aB + f6 * aD.ei] && (! function(aIw, aIx, fontSize, f6, aB, aJ9, dr, hn) {
				var a2h;
				if (1 === f6) {
					aB = aIY[aB + aD.ei];
					if (!aj.rn.z1(aB)) return function(aIw, aIx, fontSize, pG, aJ9, hn) {
						hn.globalAlpha = aJB(fontSize);
						aIw -= .534 * aJ9 * fontSize, aJ9 = aIx + 1.59 * fontSize;
						hn.font = b9.qX.sL(0, .785 * fontSize), hn.fillText(aj.rn.ys(pG), aIw, aJ9), hn.globalAlpha = 1
					}(aIw, aIx, fontSize, aB, aJ9, hn);
					a2h = aj.wU.yR[aB - 1024 + aj.rn.yd]
				} else a2h = 2 === f6 ? aL.a57()[4].canvas[+(dr < 255)] : (3 === f6 ? aL.a57()[5] : aL.a57()[6]).canvas[0];
				aB = aj.wU.yS, dr = .8 * fontSize / aB, f6 = aIw - .5 * dr * aB - .534 * aJ9 * fontSize, aIw = aIx + 1.4 * dr * aB;
				hn.setTransform(dr, 0, 0, dr, f6, aIw), hn.globalAlpha = aJB(fontSize), hn.drawImage(a2h, 0, 0), hn.globalAlpha = 1, hn.setTransform(1, 0, 0, 1, 0, 0)
			}(aIw, aIx, fontSize, f6, aB, gE, aC7[aB + f6 * aD.ei], hn), gE -= 2)
		}(aIw, aIx, fontSize, aB, hn), (aIz = aIO * fontSize) < aIQ || (hn.font = b9.qX.sL(1, aIz), aIx += Math.floor(.78 * fontSize), aIj ? aJ3(aB, aIz, aIw, aIx, hn) : aJ2(hn, aB, aIz, aIw, aIx, aIy)))
	}

	function aJ3(aB, fontSize, es, eu, hn) {
		var ___id = aB;
		var showName = aB < aD.k8 || !__fx.settings.hideBotNames;
		if (showName) hn.fillText(ag.a0R[aB], es, eu), aB < aD.k8 && 2 !== ag.a3D[aB] || (aB = fontSize / aIL[aB], hn.fillRect(es - .5 * aB, eu + b9.qX.yt * fontSize, aB, Math.max(1, .1 * fontSize)));
		aIj && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hn.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hn.fillText(__fx.utils.getDensity(___id), es, showName ? eu + fontSize : eu)
		);
	}

	function aJ2(hn, aB, fontSize, aIw, aIx, aIy) {
		var ___id = aB;
		aB = b9.rW.z9(ag.gn[aB]);
		aIy >> 1 & 1 ? (hn.lineWidth = .05 * fontSize, hn.strokeStyle = aJ1(fontSize, aIy % 2), hn.strokeText(aB, aIw, aIx)) : (1 < aIy && (hn.lineWidth = .12 * fontSize, hn.strokeStyle = aJ1(fontSize, aIy), hn.strokeText(aB, aIw, aIx)), hn.fillText(
			aB, aIw, aIx));
		aIj || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hn.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hn.fillText(__fx.utils.getDensity(___id), aIw, aIx + fontSize))
	}

	function aJ5(aIw, aIx, fontSize, aJ9, aJA, hn) {
		var a5c = .95 * fontSize / aIa,
			aIw = aIw - .5 * a5c * aIZ + .8 * aJ9 * fontSize,
			aJ9 = aIx - 1.76 * a5c * aIa - (.35 - b9.qX.yt + .7) * aJA * fontSize;
		hn.setTransform(a5c, 0, 0, a5c, aIw, aJ9), hn.globalAlpha = aJB(fontSize), hn.drawImage(ab.get(4), 0, 0), hn.globalAlpha = 1, hn.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJE(aIw, aIx, fontSize, pG, aJ9, hn) {
		var hh, x1, a5c;
		hn.globalAlpha = aJB(fontSize), aj.rn.z1(pG) ? (hh = aj.wU.yS, hn.setTransform(a5c = 1.1 * fontSize / hh, 0, 0, a5c, x1 = aIw - .5 * a5c * hh - .8 * aJ9 * fontSize, a5c = aIx - 1.55 * a5c * hh), hn.drawImage(aj.wU.yR[pG - 1024 + aj.rn.yd], 0,
			0), hn.setTransform(1, 0, 0, 1, 0, 0)) : (x1 = aIw - .8 * aJ9 * fontSize, a5c = aIx - (.35 - b9.qX.yt + 1) * fontSize, hn.fillText(aj.rn.ys(pG), x1, a5c)), hn.globalAlpha = 1
	}

	function aJ1(fontSize, aIy) {
		return aIN <= fontSize && fontSize < aIM ? bf.aJG[aIy] + aJB(fontSize).toFixed(3) + ")" : bf.aJH[aIy]
	}

	function aJB(fontSize) {
		return aIN <= fontSize && fontSize < aIM ? 1 - (fontSize - aIN) / (aIM - aIN) : 1
	}

	function aJQ(hm, i) {
		return 1 + Math.floor(aIP * hm * i)
	}

	function aJN(aB) {
		for (var left = aIG[aB], f4 = aIG[aB] - ag.ib[aB] - 1; 0 <= f4; f4--)
			if (!aJS(aB, --left, aIH[aB], aIJ[aB])) {
				left++;
				break
			} var right = aIG[aB];
		for (f4 = ag.ic[aB] - aIG[aB] - aII[aB]; 0 <= f4; f4--)
			if (!aJS(aB, ++right + aII[aB] - 1, aIH[aB], aIJ[aB])) {
				right--;
				break
			} var es = Math.floor((left + right) / 2),
			top = aIH[aB];
		for (f4 = aIH[aB] - ag.ie[aB] - 1; 0 <= f4; f4--)
			if (!aJT(aB, es, --top, aII[aB])) {
				top++;
				break
			} var bottom = aIH[aB];
		for (f4 = ag.ig[aB] - aIH[aB] - aIJ[aB]; 0 <= f4; f4--)
			if (!aJT(aB, es, ++bottom + aIJ[aB] - 1, aII[aB])) {
				bottom--;
				break
			} var eu = Math.floor((top + bottom) / 2);
		aJK(aB, es, eu, aII[aB], aIJ[aB]) && (aIG[aB] = es, aIH[aB] = eu)
	}

	function aJK(player, es, eu, i, j) {
		eo = Math.floor(.2 * i);
		for (var eo, f6 = es + i - 1; es <= f6; f6--)
			if (!aJS(player, f6, eu, j)) return;
		for (f6 = eu + j - 1 - (eo = (eo = Math.floor(.25 * j)) < 1 ? 1 : eo); eu + eo <= f6; f6--)
			if (!aJT(player, es, f6, i)) return;
		return 1
	}

	function aJS(player, es, eu, j) {
		return ac.xt(player, 4 * (eu * bR.ew + es)) && ac.xt(player, 4 * ((eu + j - 1) * bR.ew + es))
	}

	function aJT(player, es, eu, i) {
		return ac.xt(player, 4 * (eu * bR.ew + es)) && ac.xt(player, 4 * (eu * bR.ew + es + i - 1))
	}
	this.db = function() {
		if (aIj = bi.eI.data[7].value || 8 === aD.kQ, aA8 = 0 === (aA8 = bi.eI.data[11].value) ? 280 : 1 === aA8 ? 187 : 112, aIV = !1, aIR = .88, aIO = .5, aIP = 1.8, aIQ = 12 - 3 * bi.eI.data[9].value, aIF = aIE = 0, aIG = new Uint16Array(aD
				.ei), aIH = new Uint16Array(aD.ei), aII = new Uint16Array(aD.ei), aIJ = new Uint16Array(aD.ei), aIK = new Float32Array(aD.ei), aIL = new Float32Array(aD.ei), aIY = new Uint16Array(2 * aD.ei), aC7 = new Uint8Array(5 * aD.ei), aIh =
			new Uint8Array(aD.ei), aIi = new Uint8Array(aD.ei), aIg || (aIW = aIW || document.createElement("canvas")), qa(), aIT = aIS = 0, aIU = 1, aIj) {
			var aB, aIp;
			for (aIk(), ue.font = b9.qX.sL(1, 100), aIp = 100 / Math.floor(ue.measureText("900 000").width), aB = aD.ei - 1; 0 <= aB; aB--) aIK[aB] = Math.min(aIp, 2 * aIL[aB]);
			aIf = aIp, aIe[0] = 100 / (aIp * Math.floor(ue.measureText("5 000 000").width)), aIe[1] = 100 / (aIp * Math.floor(ue.measureText("50 000 000").width)), aIe[2] = 100 / (aIp * Math.floor(ue.measureText("500 000 000").width)), aIe[3] =
				100 / (aIp * Math.floor(ue.measureText("1 000 000 000").width))
		} else aIk();
		! function() {
			var aB;
			for (aB = aD.ei - 1; 0 <= aB; aB--) ag.gZ[aB] < 12 ? (aIG[aB] = ag.ib[aB] + 1, aIH[aB] = ag.ie[aB] + 1, aII[aB] = 1, aIJ[aB] = 1) : (aIG[aB] = ag.ib[aB], aIH[aB] = ag.ie[aB] + 1, aII[aB] = 4, aIJ[aB] = 2);
			if (aD.h9)
				for (aB = 0; aB < aD.k8; aB++) aII[aB] = 0;
			aIZ = ab.get(4).width, aIa = ab.get(4).height
		}()
	}, this.aI0 = function(gJ, a6a) {
		a6a > 18 * ag.gZ[gJ] ? (aIi[gJ] = 6, ac.a8A[gJ] = 2 + ac.a8A[gJ] % 2) : (aIh[gJ] = 4, (ac.a8A[gJ] < 2 || 3 < ac.a8A[gJ]) && (ac.a8A[gJ] = 6 + ac.a8A[gJ] % 2))
	}, this.pS = function(gJ, a6a) {
		a6a > 6 * ag.gZ[gJ] ? (aIi[gJ] = 6, ac.a8A[gJ] = 4 + ac.a8A[gJ] % 2) : (aIh[gJ] = 4, (ac.a8A[gJ] < 4 || 5 < ac.a8A[gJ]) && (ac.a8A[gJ] = 8 + ac.a8A[gJ] % 2))
	}, this.resize = function() {
		qa(), aIg || aIo(aIX)
	}, this.a4D = function() {
		for (var aB = 0; aB < aD.k8; aB++) ag.ic[aB] - ag.ib[aB] != 3 || ag.ig[aB] - ag.ie[aB] != 3 ? (aIG[aB] = ag.ib[aB] + (ag.ic[aB] !== ag.ib[aB] ? 1 : 0), aIH[aB] = ag.ie[aB], aII[aB] = 1, aIJ[aB] = 1) : (aIG[aB] = ag.ib[aB], aIH[aB] = ag
			.ie[aB] + 1, aII[aB] = 4, aIJ[aB] = 2)
	}, this.q6 = function(player, e6, aIr) {
		! function(player, e6, aIr) {
			player += e6 * aD.ei;
			0 === e6 ? aIY[player] === aIr && 0 < aC7[player] ? aC7[player] = 0 : (aIY[player] = aIr, aC7[player] = aj.rn.z0(aIr) ? 255 : 64) : 1 === e6 ? (aC7[player] = 64, aIY[player] = aIr) : aC7[player] = aIr
		}(player, e6, aIr), 2 === aD.zs && this.mS(!0)
	}, this.ud = function() {
		aIg ? aIo(ue) : aIV && (1 !== aIU ? (ue.imageSmoothingEnabled = !0, ue.setTransform(aIU, 0, 0, aIU, 0, 0), ue.drawImage(aIW, -aIS / aIU, -aIT / aIU), ue.setTransform(1, 0, 0, 1, 0, 0), ue.imageSmoothingEnabled = !1) : ue.drawImage(aIW, -
			aIS, -aIT))
	}, this.a8x = function(i5, i8) {
		aIS += i5, aIT += i8
	}, this.a1N = function(i5, i8) {
		af.a8x(i5, i8)
	}, this.zoom = function(a2G, lL, lM) {
		aIU *= a2G, aIS = (aIS + lL) * a2G - lL, aIT = (aIT + lM) * a2G - lM
	}, this.mS = function(bt) {
		return !aIg && !(!aId && !bt && be.eK < aIc + (1 === aIU && 0 === aIS && 0 === aIT && (aD.a4h() || aD.h9 || 2 === aD.zs) ? 1e3 : aA8) || (aId = !1, aIc = be.eK, aIo(aIX), 0))
	}, this.aIu = function(aB) {
		return aIq(aB) * aIK[aB]
	}, this.aIv = function(player) {
		return aIK[player]
	}, this.j1 = function() {
		be.k5() % 10 == 9 && (aId = aD.a4j() && !aD.a4h()), !aD.a4h() && 4 <= ++aIF && function() {
			var aB, f4, f5;
			for (aIF = 0, f5 = 4; 1 <= f5; f5--)
				for (f4 = al.k9 - 1; 0 <= f4; f4--) aB = al.kA[f4] + f5 * aD.ei, 0 < aC7[aB] && aC7[aB] < 255 && aC7[aB]--;
			if (2 !== aD.zs)
				for (f4 = al.k9 - 1; 0 <= f4; f4--) aB = al.kA[f4], 0 < aC7[aB] && aC7[aB] < 255 && aC7[aB]--
		}();
		var aB, f4, el = Math.floor(.1 * al.k9);
		for (el = (el = el < 8 ? 8 : el) > al.k9 ? al.k9 : el, aB = aIE + el - 1; aIE <= aB; aB--) f4 = aB % al.k9, ! function(aB) {
			var hm = aIq(aB) * aIK[aB];
			0 < aII[aB] && aJK(aB, aIG[aB], aIH[aB], aII[aB], aIJ[aB]) ? ! function(aB) {
				for (var es, eu, i, j, eP = !1, f5 = 0; f5 < 8; f5++) {
					if (i = aII[aB] + 2, j = aIJ[aB] + 2, i > ag.ic[aB] - ag.ib[aB] + 1 || j > ag.ig[aB] - ag.ie[aB] + 1) return eP;
					if (es = aIG[aB] - 1, eu = aIH[aB] - 1, !aJK(aB, es, eu, i, j)) return eP;
					aIG[aB] = es, aIH[aB] = eu, aII[aB] = i, aIJ[aB] = j, eP = !0
				}
				return eP
			}(aB) && function(aB, hm) {
				for (var es, eu, i, j, eP = !1, aCG = aII[aB], nI = 1 + Math.floor(.02 * aCG), f5 = 1; f5 < 5; f5++) {
					if ((i = aCG + f5 * nI) > ag.ic[aB] - ag.ib[aB] + 1) return eP;
					if ((j = aJQ(hm, i)) > ag.ig[aB] - ag.ie[aB] + 1) return eP;
					es = ag.ib[aB] + Math.floor(Math.random() * (ag.ic[aB] - ag.ib[aB] + 2 - i)), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - j)), aJK(aB, es, eu, i, j) && (aIG[aB] = es, aIH[aB] = eu, aII[
						aB] = i, aIJ[aB] = j, eP = !0)
				}
				return eP
			}(aB, hm) && aJN(aB) : ! function(aB, hm) {
				var j, es = aIG[aB] + 1,
					eu = aIH[aB] + 1,
					i = aII[aB] - 2;
				for (;;) {
					if (i < 1) {
						aII[aB] = 0;
						break
					}
					if (j = aJQ(hm, i), aJK(aB, es, eu, i, j)) return aIG[aB] = es, aIH[aB] = eu, aII[aB] = i, aIJ[aB] = j, 1;
					es++, eu++, i -= 2
				}
				return
			}(aB, hm) ? function(aB, hm) {
				var es, eu, i, j, f5, nO, jP = ag.ic[aB] - ag.ib[aB] + 1,
					aJR = Math.floor(.02 * jP);
				for (nO = -6 * (aJR = aJR < 1 ? 1 : aJR), f5 = jP; nO <= f5; f5 -= aJR)
					if (j = aJQ(hm, i = 0 < f5 ? f5 : 1), es = ag.ib[aB] + Math.floor(Math.random() * (ag.ic[aB] - ag.ib[aB] + 2 - i)), eu = ag.ie[aB] + Math.floor(Math.random() * (ag.ig[aB] - ag.ie[aB] + 2 - j)), aJK(aB, es, eu, i, j))
						return aIG[aB] = es, aIH[aB] = eu, aII[aB] = i, aIJ[aB] = j
			}(aB, hm) : aJN(aB)
		}(al.kA[f4]);
		aIE = (aIE += el) % al.k9
	}, this.mN = function() {
		var aB, gJ, yy, yz;
		if (be.k5() % 4 == 1)
			for (aB = al.k9 - 1; 0 <= aB; aB--) gJ = al.kA[aB], ac.a8A[gJ] < 2 || ((yy = Math.max(aIh[gJ] - 1, 0)) === (yz = Math.max(aIi[gJ] - 1, 0)) ? 0 === yy && (ac.a8A[gJ] %= 2) : 0 === yz && ac.a8A[gJ] < 6 && (ac.a8A[gJ] += 4), aIh[gJ] =
				yy, aIi[gJ] = yz)
	}, this.a6K = function(player) {
		var aB = player + 2 * aD.ei,
			dr = aC7[aB];
		return 0 < dr && (aN.zz(50, player), aC7[aB] = 0, 255 === dr)
	}, this.a5M = function(player) {
		return 255 === aC7[player + 2 * aD.ei]
	}
}

function cb() {
	var aJU, aJV, aJW;
	this.db = function() {
		aJU =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJV =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aJW = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6c = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJX = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aJU.length - 1; 0 <= aB; aB--)
			for (var f4 = a6c.length - 1; 0 <= f4; f4--) aJU[aB] = aJU[aB].replace(a6c[f4], aJX[f4]);
		if (__fx.settings.realisticNames) aJU = realisticNames;
	}, this.a4T = function() {
		var el = aD.k8,
			a0R = ag.a0R,
			a0W = ag.a0W,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < el)
			for (var aB = 0; aB < el; aB++) a0R[aB] = a0W[aB] = "Player " + ax.jQ(1e3);
		else
			for (aB = 0; aB < el; aB++) a0R[aB] = a0W[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kQ) {
			for (var e5 = ax.random(), aJd = aJW, aJe = aJV, hU = aE.hU, el = aJd.length, l1 = aD.data.teamPlayerCount[7], a0R = ag.a0R, a0W = ag.a0W, aB = l1 - 1; aB >= aD.k8; aB--) a0R[aB] = a0W[aB] = aJd[(aB + e5) % el];
			for (el = aJe.length - 1, aB = l1; aB < aD.ei; aB++) a0R[aB] = a0W[aB] = aJe[hU[aB] ? el : aB % el]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var el = aD.ei, a0R = ag.a0R, a0W = ag.a0W, playerNamesData = aD.data.playerNamesData, aB = aD.k8; aB < el; aB++) a0R[aB] = a0W[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var a0R = ag.a0R, a0W = ag.a0W, aB = aD.k8; aB < aD.ei; aB++) a0R[aB] = a0W[aB] = "Bot " + ax.jQ(1e3)
		} : function() {
			for (var aJf = aJU, el = aJf.length, e5 = ax.random(), a0R = ag.a0R, a0W = ag.a0W, aB = aD.k8; aB < aD.ei; aB++) a0R[aB] = a0W[aB] = aJf[(aB + e5) % el]
		})()
	}
}

function cu() {
	this.aJg = [], this.aJh = [], this.db = function() {
		this.aJg = [], this.aJh = []
	}, this.j1 = function() {
		0 <= this.aJg.length && this.aJi(this.aJg), 0 <= this.aJh.length && this.aJi(this.aJh)
	}, this.aJi = function(g) {
		for (var f5 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eK--, g[aB].eK <= 0) {
				f5 = aB;
				break
			} for (aB = f5; 0 <= aB; aB--) g.shift()
	}, this.a5F = function(id, zg, aJj) {
		return this.f7(this.aJg, id, zg, aJj)
	}, this.aJk = function(id, zg, aJj) {
		return this.f7(this.aJh, id, zg, aJj)
	}, this.f7 = function(g, id, zg, aJj) {
		return ! function(g, id, zg) {
			var aB, hd;
			for (aB = zg.length - 1; 0 <= aB; aB--)
				for (hd = g.length - 1; 0 <= hd; hd--)
					if (g[hd].player === zg[aB] && id === g[hd].id) return 1;
			return
		}(g, id, zg) && (aJj && function(g, id, zg) {
			var aB;
			for (aB = zg.length - 1; 0 <= aB; aB--) g.push({
				player: zg[aB],
				id: id,
				eK: 384
			})
		}(g, id, zg), !0)
	}
}

function ca() {
	this.a0W = new Array(aD.ei), this.a0R = new Array(aD.ei), this.a3D = new Uint8Array(aD.ei), this.mg = new Uint8Array(aD.ei), this.ib = new Uint16Array(aD.ei), this.ie = new Uint16Array(aD.ei), this.ic = new Uint16Array(aD.ei), this.ig =
		new Uint16Array(aD.ei), this.gZ = new Uint32Array(aD.ei), this.xT = new Uint32Array(aD.ei), this.gn = new Uint32Array(aD.ei), this.gD = null, this.gR = null, this.gS = null, this.fB = null, this.pw = new Uint16Array(aD.ei), this.jA =
		new Uint16Array(aD.ei), this.jB = new Uint16Array(aD.ei), this.yK = new Uint16Array(aD.ei), this.a0P = new Uint8Array(aD.ei), this.a3L = new Uint16Array(aD.ei), this.db = function() {
			this.a0W.fill(""), this.a0R.fill(""), this.a3D.fill(0), this.mg.fill(0), this.ib.fill(0), this.ie.fill(0), this.ic.fill(0), this.ig.fill(0), this.gZ.fill(0), this.xT.fill(0), this.gn.fill(0), this.gD = new Array(aD.ei), this.gR =
				new Array(aD.ei), this.gS = new Array(aD.ei), this.fB = new Array(aD.ei), this.pw.fill(0), this.jA.fill(0), this.jB.fill(0), this.yK.fill(0), this.a0P.fill(0), this.a3L.fill(0)
		}
}

function cs() {
	this.aCb = function(player) {
		aG.mf(player), aD.zu++, ag.a3D[player] = 2, ag.yK[player] = bh.a0h.aH4(), player === aD.eV && (aX.show(!1, !1), aW.aAm(), bQ.zd.a0N()), af.a6K(player)
	}
}

function cU() {
	this.kA = null, this.k9 = 0, this.a4X = function() {
		for (this.k9 = 0, aB = aD.ei - 1; 0 <= aB; aB--) 0 !== ag.mg[aB] && this.k9++;
		this.kA = new Uint16Array(this.k9);
		for (var el = 0, aB = 0; aB < aD.ei; aB++) 0 !== ag.mg[aB] && (this.kA[el++] = aB)
	}, this.mM = function() {
		for (var gZ = ag.gZ, xT = ag.xT, a0P = ag.a0P, kA = al.kA, aB = al.k9 - 1; 0 <= aB; aB--) {
			var dr, gJ = kA[aB];
			gZ[gJ] <= bK.ds(xT[gJ], 4) ? ak.dk(gJ) : gZ[gJ] >= xT[gJ] ? (dr = gZ[gJ], 250 <= (xT[gJ] = dr) && (a0P[gJ] = 1)) : xT[gJ] -= Math.max(1, bK.ds(xT[gJ] - gZ[gJ], 1e3))
		}
		this.aJo()
	}, this.aJo = function() {
		for (var mg = ag.mg, l0 = this.kA, aBU = this.k9, aB = aBU - 1; 0 <= aB; aB--) 0 === mg[l0[aB]] && (l0[aB] = l0[--aBU]);
		this.k9 = aBU
	}
}

function cc() {
	var aJp;
	this.kZ = null, this.kY = 0, this.db = function() {
		aJp = [], 9 === aD.kQ && this.aJq()
	}, this.aJq = function() {
		this.kZ = [0, 0, 0, 0, 0, 0], this.kY = 0, aD.k8 <= 8 ? (this.kY = 256 - bK.ds(325 * aD.k8, 100), this.kZ[0] = aD.ei - aD.k8 - this.kY) : aD.k8 <= 12 ? (this.kY = 230 - 6 * (aD.k8 - 8), this.kZ[0] = aD.ei - aD.k8 - this.kY) : aD.k8 <=
			23 ? (this.kY = 256 - bK.ds(256 * aD.k8, 60), this.kZ[5] = bK.ds(aD.k8 - 7, 6), this.kZ[0] = aD.ei - aD.k8 - this.kY - this.kZ[5]) : aD.k8 <= 46 ? (this.kY = 256 - bK.ds(256 * aD.k8, 60), this.kZ[5] = 3 + bK.ds(37 * (aD.k8 - 23),
				100), this.kZ[0] = aD.ei - aD.k8 - this.kY - this.kZ[5]) : aD.k8 <= 56 ? (this.kY = 60 - 6 * (aD.k8 - 46), this.kZ[5] = 11 + bK.ds(46 * (aD.k8 - 46), 100), this.kZ[0] = aD.ei - aD.k8 - this.kY - this.kZ[5]) : (this.kZ[5] = Math
				.min(16 + bK.ds(61 * (aD.k8 - 56), 100), 179), this.kZ[0] = 512 - aD.k8 - this.kZ[5]), aD.kU = aD.ei - aD.k8, aD.data.numberTeams = (0 < aD.k8) + (0 < aD.kU), aD.data.playerCount = aD.wz = aD.k8 + aD.kU, aD.data.teamPlayerCount =
			new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.k8 + this.kY, aD.kU - this.kY]), aD.a4M.a4R()
	}, this.aHB = function(player) {
		aJp.push({
			player: player,
			gE: 14 + ax.jQ(20)
		})
	}, this.j1 = function() {
		if (9 === aD.kQ)
			for (var aB = aJp.length - 1; 0 <= aB; aB--) --aJp[aB].gE <= 0 && (af.q6(aJp[aB].player, 0, aj.rn.yg + aj.rn.yu), aJp.splice(aB))
	}
}

function d9() {
	function aK5() {
		return {
			ew: bR.ew,
			ex: bR.ex,
			wR: bR.wR,
			wN: bR.wN,
			wO: bR.wO,
			wS: bR.wS,
			eR: bR.eR,
			mapSeed: bR.mapSeed,
			wP: bR.wP
		}
	}

	function aJx(aB) {
		return 1 !== aB && bR.aD5(aB) && aB !== bR.aK7()
	}
	this.aJs = 22, this.aHM = 4096, this.ew = 0, this.ex = 0, this.wR = null, this.wN = null, this.wO = null, this.wS = null, this.eR = 0, this.mapSeed = 0, this.wP = !1, this.wQ = new aJt, this.wH = new aJu, this.a6i = new aJv, this.db =
function() {
		this.wH.db()
	}, this.a7 = function(map, aJw) {
		((map %= this.aJs) !== this.eR || aJx(this.eR) && aJw !== this.mapSeed) && (this.wP = !1, this.wQ.aJy(), ax.a4S(map), this.eR = map, this.mapSeed = aJw, aJx(map) && (bR.wH.wI[map].aJz = aJw), this.aD5(this.eR) ? (map = bR.wH.wI[this.eR],
			this.ew = map.i, this.ex = map.j, ax.a4S(map.aJz), ap.a7([this.ew, this.ex, map.ml, map.mi]), aK1(), ao.aK2(), ap.aK3()) : aK0())
	}, this.aK4 = function(map, aJw) {
		var fU = aK5(),
			map = (this.a7(map, aJw), this.wQ.aJy(), aK5());
		return aJw = fU, bR.ew = aJw.ew, bR.ex = aJw.ex, bR.wR = aJw.wR, bR.wN = aJw.wN, bR.wO = aJw.wO, bR.wS = aJw.wS, bR.eR = aJw.eR, bR.mapSeed = aJw.mapSeed, bR.wP = aJw.wP, map
	}, this.a4n = function(canvas) {
		canvas && this.wR !== canvas && (this.ew = canvas.width, this.ex = canvas.height, this.wR = canvas, this.wN = this.wR.getContext("2d", {
			alpha: !1
		}), this.hk = this.wN.getImageData(0, 0, this.ew, this.ex), this.wS = this.hk.data, this.eR = this.aK7(), this.mapSeed = 0, bR.wH.wI[this.eR].name = aD.data.mapName)
	}, this.eQ = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aK7()
	}, this.aK8 = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aK9 = function(aB) {
		return 1 === aB
	}, this.aK7 = function() {
		return this.aJs
	}, this.aD5 = function(aB) {
		return void 0 === this.wH.wI[aB].aKA
	}, this.a4m = function(qP) {
		return 0 === qP.mapType ? qP.mapProceduralIndex < 10 ? qP.mapProceduralIndex : 10 + qP.mapProceduralIndex : 1 === qP.mapType ? qP.mapRealisticIndex + 10 : void 0
	}, this.aD6 = function(qP, aKB) {
		0 === qP.mapType ? qP.mapProceduralIndex = aKB < 10 ? aKB : aKB - 10 : 1 === qP.mapType && (qP.mapRealisticIndex = aKB - 10)
	}
}

function aJt() {
	function aKK() {
		bR.wQ.j1()
	}

	function aKQ(gJ, aKP) {
		0 < aKP && (bR.wS[gJ] += aKP, bR.wS[gJ + 1] += aKP, bR.wS[gJ + 2] += aKP)
	}

	function hz(gJ) {
		return bR.wS[gJ + 2] > bR.wS[gJ] && bR.wS[gJ + 2] > bR.wS[gJ + 1]
	}
	this.a99 = -1, this.a0v = 0, this.aKC = 0, this.aKD = 8, this.aKE = 32, this.aKF = 8, this.aKG = 32, this.aKH = [0, 0], this.a8A = [0, 0, 0, 0], this.iV = null, this.aKI = !0, this.aKJ = !1, this.aJy = function() {
		-1 !== this.a99 && clearTimeout(this.a99), this.a99 = -1, this.iV = null, ap.aK3()
	}, this.db = function() {
		7 === aa.a14() || this.aKJ || (this.aKI = !0, this.a0v = 0, this.aKC = 1, this.aKH = [bR.wH.wI[bR.eR].wj[0], bR.wH.wI[bR.eR].wk[0]], this.a8A = [bR.wH.wI[bR.eR].aKA[3], bR.wH.wI[bR.eR].aKA[4], bR.wH.wI[bR.eR].aKA[5], bR.wH.wI[bR.eR].aKA[
			6]], this.aKD = bR.wH.wI[bR.eR].aKA[7], this.aKE = bR.wH.wI[bR.eR].aKA[8], this.aKF = bR.wH.wI[bR.eR].aKA[9], this.aKG = bR.wH.wI[bR.eR].aKA[10], this.aKI ? this.a99 = setTimeout(aKK, 16) : this.j1())
	}, this.j1 = function() {
		if (8 === aa.a14() && aH.my()) this.a99 = setTimeout(aKK, 16);
		else {
			if (0 === this.a0v) {
				var aJz = ax.aKL();
				if (ax.a4S(bR.wH.wI[bR.eR].aKA[2]), ap.a7([bR.ew, bR.ex, bR.wH.wI[bR.eR].aKA[0], bR.wH.wI[bR.eR].aKA[1]]), ax.a4S(aJz), this.iV = ap.aKM(), this.a0v++, this.aKI) return void(this.a99 = setTimeout(aKK, 16))
			}
			for (var gJ, eX, aJz = this.aKI ? 10 : 1e6, aJz = bR.ex - this.aKC - 1 < aJz ? bR.ex - this.aKC - 1 : aJz, xg = this.aKC + aJz, eu = this.aKC; eu < xg; eu++)
				for (var es = 1; es < bR.ew - 1; es++) hz(gJ = 4 * (eX = es + eu * bR.ew)) ? this.aKN(gJ, eX, 1) : (this.aKN(gJ, eX, 0), function(es, eu, gJ) {
					return 1 < es && hz(gJ - 4) || es < bR.ew - 2 && hz(gJ + 4) || 1 < eu && hz(gJ - 4 * bR.ew) || eu < bR.ex - 2 && hz(gJ + 4 * bR.ew)
				}(es, eu, gJ) && this.aKO(es, eu));
			this.aKC = xg, this.aKC >= bR.ex - 1 ? (bR.wN.putImageData(bR.wO, 0, 0, 1, 1, bR.ew - 2, bR.ex - 2), be.dj = !0, this.aJy()) : this.aKI && (this.a99 = setTimeout(aKK, 16))
		}
	}, this.aKN = function(gJ, eX, e6) {
		aKQ(gJ, Math.floor(this.aKH[e6] + this.a8A[e6] * this.iV[eX] / 1e4) - bR.wS[gJ])
	}, this.aKR = function(gJ, e5, aKS, e6, a8A) {
		aKQ(gJ, Math.floor(this.aKH[e6] + (1 - e5 / aKS) * a8A) - bR.wS[gJ])
	}, this.aKO = function(lL, lM) {
		for (var gJ, e5, aKS, a8z = lL - this.aKE, aKT = lM - this.aKE, xh = lL + this.aKE, xg = lM + this.aKE, a8z = a8z < 1 ? 1 : a8z, xh = xh > bR.ew - 2 ? bR.ew - 2 : xh, xg = xg > bR.ex - 2 ? bR.ex - 2 : xg, eu = aKT < 1 ? 1 : aKT; eu <=
			xg; eu++)
			for (var es = a8z; es <= xh; es++) hz(gJ = 4 * (es + eu * bR.ew)) ? (aKS = this.aKD + (this.aKE - this.aKD) * this.iV[es + bR.ew * eu] / 1e4, Math.abs(lL - es) > aKS || Math.abs(lM - eu) > aKS || aKS <= (e5 = Math.sqrt((lL - es) * (
				lL - es) + (lM - eu) * (lM - eu))) || this.aKR(gJ, e5, aKS, 1, this.a8A[3])) : (aKS = this.aKF + (this.aKG - this.aKF) * this.iV[es + bR.ew * eu] / 1e4, Math.abs(lL - es) > aKS || Math.abs(lM - eu) > aKS || aKS <= (e5 = Math
				.sqrt((lL - es) * (lL - es) + (lM - eu) * (lM - eu))) || this.aKR(gJ, e5, aKS, 0, this.a8A[2]))
	}
}

function aK1() {
	var uN = aKU(bR.eR);
	uN && aKV(uN[0], uN[1], uN[2], uN[3], uN[4])
}

function aKU(eR) {
	return 2 === eR ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eR ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eR ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eR ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eR ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aKV(aKW, aKX, aKY, aKZ, aKa) {
	for (var es, eu, aKc, aKd, a2G, aKf, i4 = aKW.length - 1, aKb = bR.ew + bR.ex, el = (aKb *= aKb, aKY.length), aKe = Array(el), aB = el - 1; 0 <= aB; aB--) aKe[aB] = aKY[aB] * aKY[aB];
	var aKg = new Array(el),
		aC4 = new Array(el),
		aKh = new Array(el),
		fD = ap.aKM();
	if (void 0 === aKa)
		for (aKa = new Array(el), aB = el - 1; 0 <= aB; aB--) aKa[aB] = 0;
	for (aB = 1; aB < el; aB++) aKg[aB] = aKe[aB] - aKe[aB - 1], aC4[aB] = aKZ[aB] - aKZ[aB - 1], aKh[aB] = aKa[aB] - aKa[aB - 1];
	for (es = bR.ew - 1; 0 <= es; es--)
		for (eu = bR.ex - 1; 0 <= eu; eu--) {
			for (aKc = aKb, aB = i4; 0 <= aB; aB--) aKc = (aKd = (es - aKW[aB]) * (es - aKW[aB]) + (eu - aKX[aB]) * (eu - aKX[aB])) < aKc ? aKd : aKc;
			for (a2G = aKZ[el - 1], aKf = aKa[el - 1], aB = 1; aB < el; aB++)
				if (aKc < aKe[aB]) {
					a2G = aKZ[aB - 1] + aGb((aKc - aKe[aB - 1]) * aC4[aB], aKg[aB]), aKf = aKa[aB - 1] + aGb((aKc - aKe[aB - 1]) * aKh[aB], aKg[aB]);
					break
				} aKi(bR.ew * eu + es, a2G, aKf, fD)
		}
}

function aKi(e6, a2G, aKf, fD) {
	a2G < 500 ? fD[e6] = bK.ds(fD[e6] * a2G * 2, 1e3) : 500 < a2G && (fD[e6] += bK.ds(2 * (1e4 - fD[e6]) * (a2G - 500), 1e3)), fD[e6] += bK.ds(aKf * (10 * a2G - fD[e6]), 1e3)
}

function ce() {
	var aKj;

	function aKt(a2h, hm, es, eu, globalAlpha) {
		bR.wN.save(), bR.wN.globalAlpha = globalAlpha, bR.wN.imageSmoothingEnabled = !1, bR.wN.scale(hm, hm), bR.wN.drawImage(a2h, Math.floor(es * (bR.ew / hm - a2h.width)), Math.floor(eu * (bR.ex / hm - a2h.height))), bR.wN.restore()
	}
	this.a6f = 0, this.a6g = 0, this.a6h = 0, this.a6i = 0, this.db = function() {
		(aKj = new Array(bR.aJs))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e5: [220, 250, 255, 220],
			t9: [190, 220, 0, 0],
			f5: [170, 200, 0, 0]
		}, aKj[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e5: [25, 0, 100, 0, 25],
			t9: [25, 0, 0, 0, 25],
			f5: [25, 0, 0, 0, 25]
		}, aKj[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e5: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			t9: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f5: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aKj[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e5: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			t9: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f5: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aKj[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e5: [10, 10, 20, 10, 10, 170, 212],
			t9: [20, 20, 60, 100, 100, 110, 170],
			f5: [70, 70, 160, 30, 30, 60, 120]
		}, aKj[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e5: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			t9: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f5: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aKj[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e5: [10, 10, 60, 255, 255, 200, 200],
			t9: [10, 10, 60, 255, 255, 200, 200],
			f5: [80, 80, 255, 255, 255, 200, 200]
		}, aKj[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e5: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			t9: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f5: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aKj[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e5: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			t9: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f5: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aKj[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e5: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			t9: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f5: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aKj[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e5: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			t9: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f5: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aKj[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e5: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			t9: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f5: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aK2 = function() {
		var aKs, aB, f4, fU, hk = function() {
				var hk;
				return bR.wR = document.createElement("canvas"), bR.wR.width = bR.ew, bR.wR.height = bR.ex, bR.wN = bR.wR.getContext("2d", {
					alpha: !1
				}), hk = bR.wN.getImageData(0, 0, bR.ew, bR.ex), bR.wS = hk.data, hk
			}(),
			i = aKj[bR.eR].i,
			e5 = aKj[bR.eR].e5,
			t9 = aKj[bR.eR].t9,
			f5 = aKj[bR.eR].f5,
			fD = ap.aKM(),
			el = i.length - 2,
			aKn = new Array(1 + el),
			aKo = new Array(1 + el),
			aKp = new Array(1 + el),
			aKq = new Array(1 + el);
		for (f4 = el; 0 <= f4; f4--) aKn[f4] = i[f4 + 1] - i[f4], aKo[f4] = e5[f4 + 1] - e5[f4], aKp[f4] = t9[f4 + 1] - t9[f4], aKq[f4] = f5[f4 + 1] - f5[f4];
		for (aB = bR.ew * bR.ex - 1; 0 <= aB; aB--)
			for (f4 = el; 0 <= f4; f4--)
				if (fD[aB] >= i[f4]) {
					fU = fD[aB] - i[f4], bR.wS[4 * aB] = e5[f4] + aGb(aKo[f4] * fU, aKn[f4]), bR.wS[4 * aB + 1] = t9[f4] + aGb(aKp[f4] * fU, aKn[f4]), bR.wS[4 * aB + 2] = f5[f4] + aGb(aKq[f4] * fU, aKn[f4]), bR.wS[4 * aB + 3] = 255;
					break
				} bR.wN.putImageData(hk, 0, 0), bR.aK9(bR.eR) && ab.tD() && bR.aK9(bR.eR) && (hk = ab.aFm("arena"), aKs = ab.aFm("territorial.io"), aKt(hk, 5, .5, .5, .1), aKt(aKs, 2, .5, .45, .1)), bR.wP = !0, be.dj = !0
	}, this.a4V = function() {
		for (var gJ, es, eu, aKu, hb, fW, a6g = 0, i = bR.ew, j = bR.ex, fU = i * j * 4, aKv = aBe, aKw = bR.wS, aB = i - 1; 0 <= aB; aB--) aKv[(gJ = aB << 2) + 2] = aKv[fU - gJ - 2] = 3;
		for (fU = 4 * i, aB = j - 1; 0 <= aB; aB--) aKv[(gJ = aB * fU) + 2] = aKv[gJ + fU - 2] = 3;
		for (aKu = i - 1, hb = j - 1, eu = 1; eu < hb; eu++)
			for (fU = eu * i, es = 1; es < aKu; es++) fW = 1 - (aKw[(gJ = fU + es << 2) + 2] > aKw[gJ + 1] && aKw[gJ + 2] > aKw[gJ]), aKv[gJ + 2] = 6 - 5 * fW, a6g += fW;
		this.a6f = (i - 2) * (j - 2), this.a6i = 0, bR.eQ(bR.eR) && (bR.a6i.aKx(), bR.a6i.aKy(4, 5)), this.a6g = aD.js = a6g - this.a6i, this.a6h = this.a6f - this.a6g - this.a6i, this.a6h && (bR.a6i.aKy(6, 2), bR.a6i.aKz())
	}
}

function aK0() {
	var qE;
	10 === bR.eR ? qE =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bR.eR ? qE =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bR.eR ? qE =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bR.eR ? qE =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bR.eR ? qE =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bR.eR ? qE =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bR.eR ? qE =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bR.eR ? qE =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bR.eR ? qE =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bR.eR && (qE =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new wA).wC(qE)
}

function aJu() {
	this.wI = null, this.aL0 = null, this.aL1 = null, this.db = function() {
		var aL2 = [120, 105, 92],
			cos = [12, 12, 60],
			aL3 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aL4 = [140, 130, 120],
			aL5 = [12, 12, 76],
			aL6 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aL7 = [130, 117, 106],
			aL8 = [12, 12, 68],
			aL9 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wI = new Array(bR.aJs + 1), this.wI[0] = {
			name: L(134),
			i: 230,
			j: 230,
			ml: 1e3,
			mi: 2e3,
			aJz: 173
		}, this.wI[1] = {
			name: L(135),
			i: 800,
			j: 800,
			ml: 100,
			mi: 50,
			aJz: 43
		}, this.wI[2] = {
			name: L(136),
			i: 512,
			j: 512,
			ml: 128,
			mi: 32,
			aJz: 0
		}, this.wI[3] = {
			name: L(137) + " 1",
			i: 960,
			j: 960,
			ml: 60,
			mi: 8,
			aJz: 0
		}, this.wI[4] = {
			name: L(138),
			i: 900,
			j: 900,
			ml: 100,
			mi: 5,
			aJz: 0
		}, this.wI[5] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			ml: 100,
			mi: 40,
			aJz: 0
		}, this.wI[6] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			ml: 100,
			mi: 20,
			aJz: 0
		}, this.wI[7] = {
			name: L(141),
			i: 1024,
			j: 1024,
			ml: 128,
			mi: 32,
			aJz: 0
		}, this.wI[8] = {
			name: L(142),
			i: 820,
			j: 820,
			ml: 200,
			mi: 100,
			aJz: 0
		}, this.wI[9] = {
			name: L(143),
			i: 1024,
			j: 1024,
			ml: 128,
			mi: 32,
			aJz: 0
		}, this.wI[10] = {
			name: L(144),
			wj: aL4,
			wk: aL5,
			aKA: aL6
		}, this.wI[11] = {
			name: L(145),
			wj: aL7,
			wk: aL8,
			aKA: aL9
		}, this.wI[12] = {
			name: L(146),
			wj: aL7,
			wk: aL8,
			aKA: aL9
		}, this.wI[13] = {
			name: L(147),
			wj: aL2,
			wk: cos,
			aKA: aL3
		}, this.wI[14] = {
			name: L(148),
			wj: aL2,
			wk: cos,
			aKA: aL3
		}, this.wI[15] = {
			name: L(149),
			wj: aL4,
			wk: aL5,
			aKA: aL6
		}, this.wI[16] = {
			name: L(150),
			wj: aL4,
			wk: aL5,
			aKA: aL6
		}, this.wI[17] = {
			name: L(151),
			wj: aL2,
			wk: cos,
			aKA: aL3
		}, this.wI[18] = {
			name: L(152),
			wj: aL7,
			wk: aL8,
			aKA: aL9
		}, this.wI[19] = {
			name: L(153),
			wj: aL2,
			wk: cos,
			aKA: aL3
		}, this.wI[20] = {
			name: L(154),
			i: 1024,
			j: 1024,
			ml: 128,
			mi: 32,
			aJz: 0
		}, this.wI[21] = {
			name: L(137) + " 2",
			i: 940,
			j: 940,
			ml: 80,
			mi: 8,
			aJz: 0
		}, this.wI[bR.aJs] = {
			name: ""
		}, this.aL0 = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aL0[aB] = aB;
		for (this.aL0[10] = 20, this.aL0[11] = 21, this.aL1 = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aL1[aB] = 10 + aB
	}
}

function aJv() {
	this.aKx = function() {
		for (var gJ, es, fU, aKv = aBe, aKw = bR.wS, i = bR.ew, aKu = i - 1, hb = bR.ex - 1, gE = 0, eu = 1; eu < hb; eu++)
			for (fU = eu * i, es = 1; es < aKu; es++) aKw[gJ = fU + es << 2] === aKw[1 + gJ] && aKw[gJ] === aKw[2 + gJ] && (gE++, aKv[2 + gJ] = 4);
		ao.a6i = gE
	}, this.aKy = function(aLA, aLB) {
		for (var aKv = aBe, i = bR.ew, aKu = i - 1, hb = bR.ex - 1, id = 0, eu = 1; eu < hb; eu++)
			for (var fU = eu * i, es = 1; es < aKu; es++) {
				var eP = 2 + (fU + es << 2);
				aKv[eP] === aLA && (! function(eP, id, aLA, aLB) {
					var el = 1,
						aKv = aBe,
						en = ac.en,
						a2T = [eP],
						aLD = id >> 8 << 1,
						aLE = 255 & id;
					aKv[eP - 2] = aLD, aKv[eP - 1] = aLE, aKv[eP] = 5;
					for (; el;) {
						for (var a2U = [], aB = 0; aB < el; aB++)
							for (var ea = a2T[aB], eo = 3; 0 <= eo; eo--) {
								var ep = ea + en[eo];
								aKv[ep] === aLA && (aKv[ep - 2] = aLD, aKv[ep - 1] = aLE, aKv[ep] = aLB, a2U.push(ep))
							}
						el = (a2T = a2U).length
					}
				}(eP, id, aLA, aLB), id = (id + 1) % 32768)
			}
	}, this.aKz = function() {
		for (var aKv = aBe, i = bR.ew, aKu = i - 3, hb = bR.ex - 3, aLG = 12 * i, eu = 3; eu < hb; eu++)
			for (var fU = eu * i, es = 3; es < aKu; es++) {
				var eP = 2 + (fU + es << 2);
				2 !== aKv[eP] || 2 === aKv[eP - 12] && 2 === aKv[12 + eP] && 2 === aKv[eP - aLG] && 2 === aKv[eP + aLG] || (aKv[eP - 2] = 1 | aKv[eP - 2])
			}
	}
}

function a4U() {
	(y2 = void 0 === y2 ? document.createElement("canvas") : y2).width = bR.ew, y2.height = bR.ex, a4Y = y2.getContext("2d", {
		alpha: !0
	}), a4Z = aBe = null, a4Z = a4Y.getImageData(0, 0, bR.ew, bR.ex), aBe = a4Z.data, b9.qf.wT(aBe)
}

function cf() {
	var fD, i, j, max, aLH, mi, aLJ, aLK, aLL, aLM, aLN, aLO, aLP, aLQ, aLI = 1e4;

	function aLX(aLW, ml, el) {
		var aB;
		for (aLJ[0] = aLW, aB = 1; aB < el; aB++) aLJ[aB] = aLJ[aB - 1] + ml, ml = aLJ[aB] >= aLI ? (aLJ[aB] = aLI - 1, -ml) : aLJ[aB] < 0 ? (aLJ[aB] = 0, -ml) : (ml += 16384 <= ax.random() ? mi : -mi) < -aLH ? -aLH : aLH < ml ? aLH : ml
	}

	function aLZ(es, eu, aLa, el) {
		(aLa ? function(es, eu, el) {
			var aB;
			for (aB = 0; aB < el; aB++) fD[eu * i + es + aB] = aLJ[aB]
		} : function(es, eu, el) {
			var aB;
			for (aB = 0; aB < el; aB++) fD[eu * i + es + aB * i] = aLJ[aB]
		})(es, eu, el)
	}

	function aLd(value, el) {
		var aB, aJR, eP, jO = value - aLJ[el - 1];
		if (0 != jO) {
			for (aJR = 1 + bK.ds(Math.abs(jO), el - 1), aJR = jO < 0 ? -aJR : aJR, aLJ[el - 1] = value, eP = (eP = el - 1 - bK.ds(Math.abs(jO), Math.abs(aJR))) < 1 ? 1 : el - 2 < eP ? el - 2 : eP, aB = el - 2; eP <= aB; aB--) aLJ[aB] += jO - (el -
				1 - aB) * aJR;
			(jO < 0 ? function(el) {
				var aB;
				for (aB = el - 2; 1 <= aB; aB--) aLJ[aB] < 0 && (aLJ[aB] = -aLJ[aB] - 1)
			} : function(el) {
				var aB;
				for (aB = el - 2; 1 <= aB; aB--) aLJ[aB] >= aLI && (aLJ[aB] = 2 * aLI - aLJ[aB] - 1)
			})(el)
		}
	}

	function aLg(a2T, a2U, el) {
		for (var aB = 0; aB < el; aB++) a2T[aB] = a2U[aB]
	}

	function aLh(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aLi(a59, gap, hc) {
		aLK.push(a59), aLL.push(gap), aLM.push(hc)
	}
	this.a7 = function(a3i) {
		! function(a3i) {
			var aB;
			for (i = a3i[0], j = a3i[1], aLH = a3i[2], mi = a3i[3], fD = new Int16Array(i * j), max = j < i ? i : j, aLJ = new Int16Array(max), aLK = [], aLL = [], aLM = [], aLN = new Array(i), aLO = new Array(j), aB = i - 1; 0 <= aB; aB--) aLN[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aLO[aB] = !1;
			aLP = new Int16Array(i), aLQ = new Int16Array(j)
		}(a3i),
		function(el) {
			var aLW = ax.random() % aLI,
				ml = ax.random() % (2 * aLH + 1) - aLH;
			aLX(aLW, ml, el)
		}(max), aLg(aLQ, aLJ, j), aLZ(0, 0, !0, i);
		var es, eu, a3i = fD[0],
			el = max,
			ml = ax.random() % (2 * aLH + 1) - aLH;
		for (aLX(a3i, ml, el), aLg(aLP, aLJ, i), aLZ(0, 0, !1, j), aLh(aLP), aLh(aLQ), aLX(fD[i - 1], aLP[i - 1], j), aLZ(i - 1, 0, !1, j), aLX(fD[i * (j - 1)], aLQ[j - 1], i), aLd(fD[i * j - 1], i), aLZ(0, j - 1, !0, i), aLN[i - 1] = aLN[0] = !
			0, aLO[j - 1] = aLO[0] = !0, aLi(0, i, !0), aLi(0, j, !1), ! function() {
				var aLk, a59;
				for (;;) {
					if (aLk = function() {
							var aB, aLk = aLK.length - 1;
							for (aB = aLk - 1; 0 <= aB; aB--) aLL[aB] > aLL[aLk] && (aLk = aB);
							return aLk
						}(), aLL[aLk] < 5) return;
					a59 = aLK[aLk] + bK.ds(aLL[aLk], 2), (aLM[aLk] ? function(es) {
						var el, aLn, aB, aFC = 0,
							aLo = 0;
						for (; aLo < j - 1;) {
							for (aB = aFC + 1; aB < j; aB++)
								if (aLO[aB]) {
									aLo = aB;
									break
								} el = aLo - aFC + 1, aLX(fD[es + i * aFC], 0 === aFC ? aLP[es] : aLJ[aLn - 1] - aLJ[aLn - 2], el), aLd(fD[aLo * i + es], el), aLZ(es, aFC, !1, el), aLn = el, aFC = aLo
						}
						aLN[es] = !0
					} : function(eu) {
						var el, aLn, aB, aFC = 0,
							aLo = 0;
						for (; aLo < i - 1;) {
							for (aB = aFC + 1; aB < i; aB++)
								if (aLN[aB]) {
									aLo = aB;
									break
								} el = aLo - aFC + 1, aLX(fD[eu * i + aFC], 0 === aFC ? aLQ[eu] : aLJ[aLn - 1] - aLJ[aLn - 2], el), aLd(fD[eu * i + aLo], el), aLZ(aFC, eu, !0, el), aLn = el, aFC = aLo
						}
						aLO[eu] = !0
					})(a59), aLi(a59, aLK[aLk] + aLL[aLk] - a59, aLM[aLk]), aLL[aLk] = a59 - aLK[aLk] + 1
				}
			}(), es = 0; es < i; es++)
			if (!aLN[es])
				for (eu = 0; eu < j; eu++) aLO[eu] || ! function(es, eu) {
					var value = fD[eu * i + es - 1] + fD[(eu - 1) * i + es],
						a6t = 2;
					aLN[es + 1] && (a6t++, value += fD[eu * i + es + 1]);
					aLO[eu + 1] && (a6t++, value += fD[(eu + 1) * i + es]);
					fD[eu * i + es] = bK.ds(value, a6t)
				}(es, eu)
	}, this.aKM = function() {
		return fD
	}, this.aK3 = function() {
		fD = null
	}
}

function aGb(f4, f5) {
	return 0 <= f4 ? bK.ds(f4, f5) : -bK.ds(-f4, f5)
}

function jf(fD) {
	return fD * fD
}

function a67(f4, f5) {
	return f5 < f4 ? f4 : f5
}

function aB8(f4, f5) {
	return f4 < f5 ? f4 : f5
}

function a8U(f4, fD, f5) {
	return fD < f4 ? f4 : f5 < fD ? f5 : fD
}

function aLq(fD, el) {
	for (var f6 = bK.ds(fD + 1, 2), aB = 0; aB < el; aB++) f6 = bK.ds(f6 + bK.ds(fD, f6), 2);
	return f6
}

function aHx(fD, el) {
	return fD < 1 ? 0 : aLq(fD, el)
}

function aLr(n6, n7, ss, a8D, nJ, nK, st, ta) {
	return !(n6 + ss <= nJ || n7 + a8D <= nK || nJ + st <= n6 || nK + ta <= n7)
}

function aLs(n6, n7, ss, a8D, nJ, nK, st, ta) {
	return n6 <= nJ && n7 <= nK && nJ + st <= n6 + ss && nK + ta <= n7 + a8D
}

function wK(fD) {
	return Math.floor(!!fD * (1 + Math.log2(fD + .5)))
}

function bw() {
	this.ds = function(f4, f5) {
		return Math.floor((f4 + .5) / f5)
	}, this.aLt = function(f4, f5) {
		return Math.floor(f4 * (f5 + .5))
	}, this.sqrt = function(fD) {
		return ~~Math.sqrt(fD + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ht = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aLu = function(fU, fW, fY) {
		return Math.max(Math.min(fU, fW), fY)
	}, this.aLv = function(aLw, aLx, es, eu) {
		es -= aLw, aLw = eu - aLx, eu = 0;
		return 0 == es ? eu = 0 <= aLw ? Math.PI : 0 : (eu = Math.atan(aLw / es), eu += 0 < es ? .5 * Math.PI : 1.5 * Math.PI), eu
	}, this.log2 = function(fD) {
		return Math.floor(!!fD * (1 + Math.log2(fD + .5)))
	}, this.log10 = function(fD) {
		return Math.floor(Math.log10(fD + .5))
	}, this.aLz = function(aM0, aM1, aM2, aM3, aM4) {
		return aM2 - aM4 < aM0 && aM0 < aM2 + aM4 && aM3 - aM4 < aM1 && aM1 < aM3 + aM4
	}, this.xH = function(a8u, a8w) {
		return a8u * a8u + a8w * a8w
	}
}

function dB() {
	this.y = new aM5, this.sl = 0;
	var aM6 = new Array(31);

	function aMA() {
		for (var el = aM6.length, aB = 0; aB < el; aB++) aM6[aB] = null
	}
	this.db = function() {
		for (var aM7, aM8 = document.body.firstChild; aM8;) {
			if (aM7 = aM8.nextSibling, document.body.contains(aM8) && ("DIV" === aM8.tagName || "INPUT" === aM8.tagName || "BUTTON" === aM8.tagName)) try {
				document.body.removeChild(aM8)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aM8 = aM7
		}
	}, this.u = function(e6, aM9, a3i) {
		void 0 === aM9 && (aM9 = this.sl), be.dj = !0, 0 === e6 && (0 === aa.a14() ? e6 = 5 : a0.a1.setState(13)), this.ro(), this.sl === e6 && (aM9 = aM6[e6].aM9, aM6[e6] = null), this.sl = e6;
		var l1 = aM6[e6];
		if (!l1 || 4 === e6 || 7 === e6 || 8 === e6 || 9 === e6 || 10 === e6 || 11 === e6 || 13 === e6 || 15 === e6 || 18 === e6 || 20 <= e6 && e6 <= 28 || 32 === e6 || 33 === e6) {
			if (0 === e6) return void aMA();
			1 === e6 ? l1 = new aMB : 2 === e6 ? l1 = new aMC : 3 === e6 ? l1 = new aMD : 4 === e6 || 9 === e6 || 10 === e6 || 11 === e6 || 13 === e6 || 33 === e6 ? l1 = a3i : 5 === e6 ? l1 = new aME : 6 === e6 ? l1 = new aMF : 7 === e6 ? l1 =
				new aMG(t.y.aMH) : 8 === e6 ? l1 = a3i : 12 === e6 ? l1 = new aMI : 14 === e6 ? l1 = new aMJ : 15 === e6 ? l1 = new aMG(t.y.aMK) : 16 === e6 ? l1 = new aML : 17 === e6 ? l1 = new aMM : 18 === e6 ? l1 = new aMN : 19 === e6 ? l1 =
				new aMO : 20 === e6 ? l1 = new aMP : 21 === e6 ? l1 = new aMQ : 22 === e6 ? l1 = new aMR : 23 === e6 ? l1 = new aMS : 24 === e6 ? l1 = new aMT : 25 === e6 ? l1 = new aMU : 26 === e6 ? l1 = new aMV : 27 === e6 ? l1 = new aMW :
				28 === e6 ? l1 = new aMX : 29 === e6 ? l1 = new aMY : 30 === e6 && (l1 = new aMZ), l1.aM9 = aM9, aM6[e6] = l1
		}
		l1.show(a3i)
	}, this.a13 = function() {
		this.hX() && this.aMa(this.a4t().aM9)
	}, this.aMa = function(e6) {
		this.hX() && (aM6[e6] ? (this.ro(), be.dj = !0, this.sl = e6, aM6[e6].show()) : this.u(e6))
	}, this.ro = function() {
		this.hX() && aM6[this.sl].ro()
	}, this.x = function() {
		this.hX() && (aM6[this.sl].ro(), aMA(), this.sl = 0, a0.a1.setState(13))
	}, this.ud = function() {
		var l1;
		this.hX() && (l1 = aM6[this.sl]).ud && l1.ud()
	}, this.resize = function() {
		if (!this.hX()) return !1;
		aM6[this.sl].resize()
	}, this.gy = function(es, eu) {
		var l1;
		this.hX() && (l1 = aM6[this.sl]).gy && l1.gy(es, eu)
	}, this.a1N = function(es, eu) {
		var l1;
		this.hX() && (l1 = aM6[this.sl]).a1N && l1.a1N(es, eu)
	}, this.a1l = function() {
		var l1;
		this.hX() && (l1 = aM6[this.sl]).a1l && l1.a1l()
	}, this.a1Q = function(lL, lM, deltaY) {
		var l1;
		this.hX() && (l1 = aM6[this.sl]).a1Q && l1.a1Q(lL, lM, deltaY)
	}, this.a1v = function(code) {
		var l1;
		return !!this.hX() && ((l1 = aM6[this.sl]).a1v && l1.a1v(code), !0)
	}, this.j1 = function() {
		var l1;
		this.hX() && (l1 = aM6[this.sl]) && l1.j1 && l1.j1()
	}, this.hX = function() {
		return 0 < this.sl
	}, this.a4t = function() {
		return aM6[this.sl]
	}, this.a4u = function(e6) {
		return aM6[e6]
	}, this.aMb = function() {
		return aM6
	}
}

function aMG(data) {
	var aMc, aMd;
	this.show = function() {
		data.aMe && bH.aNV("account", data.sj), aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aMd.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(data.username, [new w("⬅️ " + L(36), function() {
		bH.clear(), t.a13()
	}), new w(data.aMe ? "🔄 " + L(155) : L(156), function() {
		t.u(8, t.a4t().aM9, new sm(25, {
			sn: 0,
			sj: data.sj,
			sk: data.sk
		}))
	}, 0, 0, 1)]), aMd = new qQ(aMc.uU, function() {
		var qS = [];
		qS.push(function() {
				var aMv = new qA,
					rK = (aMv.qD(L(205)), new rL({
						value: data.username,
						e6: -1
					}));
				rK.e.readOnly = !0, aMv.qO(rK), aMv.qO(new s1([new w(L(174), function(e) {
					return b9.qX.a39(rK.e), b9.qX.a3A(e), !0
				}).button])), data.aMe || aMv.qF(L(206));
				return aMv
			}()),
			function(qS) {
				var aMv, qG, aBs, aNE, aN4;
				data.aMe || ((aMv = new qA).qD(L(207)), (qG = aMv.qF(data.aND.length + " / 160")).style.textAlign = "center", aBs = !0, (aNE = new um(0, 1, function(e) {
					e = e.target.value.length;
					qG.textContent = e + " / 160", 160 < e ? aBs && (aBs = !1, aN4.qr(1), aN4.button.style.color = bA.ng) : aBs || (aBs = !0, aN4.qr(0), aN4.button.style.color = bA.od)
				})).e.rows = 6, aNE.e.style.fontSize = "1em", aNE.ut(data.aND), aMv.qO(aNE), aN4 = new w(L(208), function() {
					if (!aBs) return !0;
					t.u(8, t.a4t().aM9, new sm(29, {
						sn: 1,
						qE: aNE.uv().substring(0, 160)
					}))
				}, 0, 0, 1), aMv.qO(new s1([aN4.button])), 0 !== data.aNF && (aMv.qO(new s1([new w(L(1 === data.aNF ? 210 : 211), function() {
					t.u(8, t.a4t().aM9, new sm(29, {
						sn: 0,
						qE: ""
					}))
				}, 0, 0, 1).button])), aMv.qF(1 === data.aNF ? L(212, [data.aNH - 1]) : L(213, [data.aNH - 1]))), aMv.qF(L(209, [data.aNG])), qS.push(aMv))
			}(qS),
			function(qS) {
				var aMv;
				data.aMe && 0 !== data.aNF && ((aMv = new qA).qD(L(214)), aMv.qH(data.aND), aMv.qO(new s1([new w(L(215, 0, "Report"), function(e) {
					return az.y.aN0(0) && (b9.qX.a3A(e), az.aN2.aNI({
						sn: 5,
						sj: data.sj
					})), !0
				}, 0, 0, 1).button])), qS.push(aMv))
			}(qS), qS.push(function() {
				var aMv = new qA,
					aMw = (aMv.qD(L(157)), [L(158), L(159), L(160), L(161), L(162)]),
					e5 = data.aMx;
				aMv.qJ(L(163) + b9.rW.a3z(data.vh, .01, 2) + "<br>" + L(164) + (e5 + 1) + " / " + data.vg + "<br>" + L(165) + aMw[e5 < 10 ? 0 : e5 < 50 ? 1 : e5 < 200 ? 2 : e5 < 1e3 ? 3 : 4]), data.aMe || (aMv.qF(L(166)), aMv.qF(L(167)),
					aMv.qF(L(168)));
				return aMv
			}()), data.aMe && qS.push(function() {
				var aMv = new qA,
					rK = (aMv.qD(L(169)), new rL({
						value: bi.eI.data[147].value,
						e6: -1
					}, 1, void 0, function(e) {
						bi.ry.rz(147, aMy(e.target.value))
					})),
					aMz = (aMv.qO(rK), new w(L(14), function(e) {
						return rK.e.readOnly && az.y.aN0(0) && (b9.qX.a3A(e), aN1(), az.aN2.aN3({
							sn: 0,
							sj: data.sj,
							value: parseInt(bi.eI.data[147].value, 10)
						})), !0
					}, 1)),
					aN4 = new w(L(170), function(e) {
						return e.textContent === L(170) ? (e.textContent = L(171), rK.e.readOnly = !0, aMz.qr(0), aMz.button.style.color = bA.od, bi.ry.rz(147, rK.e.value), aMy(bi.eI.data[147].value)) : aN1(), !0
					}),
					qG = (aMv.qO(new s1([aN4.button])), aMv.qF()),
					aMy = function(fD) {
						fD = b9.g7.a3f(fD, 2, 1e6);
						var aN5 = Math.max(1, 1 + Math.floor(.01 * (fD - 100)));
						qG.textContent = L(172, [fD, bi.eI.data[105].value, aN5, data.sj, fD - aN5])
					},
					aN1 = function() {
						aN4.button.textContent = L(170), rK.e.readOnly = !1, aMz.qr(1), aMz.button.style.color = bA.ng
					};
				return aMy(bi.eI.data[147].value), aMv.qO(new s1([aMz.button])), aMv
			}());
		qS.push(function() {
			var aMv = new qA,
				rK = (aMv.qD(L(173)), new rL({
					value: data.sj,
					e6: -1
				}));
			return rK.e.readOnly = !0, aMv.qO(rK), aMv.qO(new s1([new w(L(174), function(e) {
				return b9.qX.a39(rK.e), b9.qX.a3A(e), !0
			}).button])), aMv
		}()), data.aMe || (qS.push(function() {
			var aMv = new qA,
				aN6 = (aMv.qD(L(175)), new rL(bi.eI.data[106]));
			return aN6.e.readOnly = !0, aN6.e.type = "password", aMv.qO(aN6), aMv.qO(new s1([new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aN6.e.type = "text") : (e.textContent = L(176), aN6.e.type = "password"), !0
			}).button, new w(L(174), function(e) {
				return b9.qX.a39(aN6.e), b9.qX.a3A(e), !0
			}).button])), aMv.qO(new s1([new w(L(178), function() {
				t.u(8, t.a4t().aM9, new sm(15))
			}).button])), aMv.qD(L(179), "0.8em"), aMv.qF(L(180)), aMv.qF(L(181)), aMv.qF(L(182)), aMv
		}()), qS.push(function() {
			var aMv = new qA;
			return aMv.qD(L(183)), aMv.qO(new s1([new w(L(184), function() {
				t.u(6, t.a4t().aM9)
			}).button])), aMv.qO(new s1([new w(L(185), function() {
				bi.ry.rz(105, ""), t.u(8, t.a4t().aM9, new sm(18))
			}).button])), aMv.qO(new s1([new w(L(186) + bi.eI.data[105].value, function() {
				t.u(4, 0, new v(L(187), L(188), !0, [new w("⬅️ " + L(36), function() {
					t.u(7, t.a4u(7).aM9)
				})]))
			}, bA.oL).button])), aMv
		}()), qS.push(function() {
			function aN8(e6) {
				for (var aB = 0; aB < 2; aB++) aN7[aB].qr(0 === e6 ? bA.ns : 0 === aB ? bA.oL : bA.o3)
			}
			var qM, aN7, aMv = new qA;
			aMv.qD(L(189)), aMv.qF(L(190)), bi.y.vR();
			return aN7 = [new w(L(191), function() {
				var e6 = Math.min(bi.eI.data[117].value, qM.qN.length - 1);
				if (!(e6 < 1)) {
					qM.qN[e6].remove(), qM.qN.splice(e6, 1);
					for (var aB = e6; aB < qM.qN.length; aB++) qM.qN[aB].name = "" + aB;
					bi.y.vU(e6), e6 = bi.eI.data[117].value, qM.qN[e6].textContent = qM.qN[e6].textContent.replace("⚪", "🟢"), aN8(e6)
				}
			}, bA.ns), new w(L(192), function() {
				var e6 = Math.min(bi.eI.data[117].value, qM.qN.length - 1);
				e6 < 1 || (e6 = bi.y.vV(e6), bi.ry.rz(105, e6.sj), bi.ry.rz(106, e6.password), t.u(8, t.a4t().aM9, new sm(18)))
			}, bA.ns)], (qM = new uJ(bi.eI.data[117], aN8)).qN[0].style.marginTop = "0.5em", aMv.qL(qM), aMv.qO(new s1([aN7[1].button])), aMv.qO(new s1([aN7[0].button])), aMv
		}()));
		return qS.push(function() {
				var aMv = new qA,
					aMw = (aMv.qD(L(196)), [L(197), L(198), L(199), L(200)]),
					e5 = data.aN9;
				return aMv.qJ(L(201) + (data.a0J / 100).toFixed(2) + "<br>" + L(164) + (e5 + 1) + " / " + data.vg + "<br>" + L(165) + aMw[e5 < 10 ? 0 : e5 < 50 ? 1 : e5 < 200 ? 2 : 3]), aMv
			}()), qS.push(function() {
				var aMv = new qA;
				return aMv.qD(L(193)), aMv.qJ(L(194) + b9.rW.a3z(data.vd, .1, 1) + "<br>" + L(164) + (data.ve + 1) + " / " + data.vg + "<br>" + L(195) + data.vf), aMv
			}()),
			function(qS) {
				var aMv = new qA,
					aNJ = data.vk,
					aNK = (aMv.qD(L(216)), aMv.qJ(L(217, [data.vi.length ? "[" + data.vi + "]" : "-"])), aMv.qJ(L(218, [b9.rW.a3z(aNJ, .01, 2)])), aMv.qJ(L(219, [data.vm + 1 + " / " + data.vg])), data.vn),
					aNL = (aMv.qJ(L(220, [b9.rW.a3z(aNK, .1, 1)])), data.vp);
				aMv.qJ(L(221, [aNL])), aMv.qJ(L(222, [b9.rW.a3z(aNK / Math.max(aNL, 1), .1, 2)])), aNJ = data.vl, aMv.qD(L(223), "0.8em"), aMv.qJ(L(217, [data.vj.length ? "[" + data.vj + "]" : "-"])), aMv.qJ(L(218, [b9.rW.a3z(aNJ, .01, 2)])),
					aNK = data.vo, aMv.qJ(L(220, [b9.rW.a3z(aNK, .1, 1)])), aNL = data.vq, aMv.qJ(L(221, [aNL])), aMv.qJ(L(222, [b9.rW.a3z(aNK / Math.max(aNL, 1), .1, 2)])), data.aMe || (aMv.qF(L(224)), aMv.qF(L(225)));
				qS.push(aMv)
			}(qS),
			function(qS) {
				var aMv = new qA;
				aMv.qD(L(226)), aMv.qJ(L(201) + (data.aNM / 10).toFixed(1) + "<br>" + L(165) + (data.aNN.length ? L(227, [data.aNN]) : L(228))), data.aMe ? (aMv.qO(new s1([new w(L(229), function(e) {
					return az.y.aN0(0) && (b9.qX.a3A(e), az.aN2.aNI({
						sn: 4,
						sj: data.sj
					})), !0
				}, 0, 0, 1).button])), aMv.qF(L(230)), aMv.qF(L(231))) : aMv.qF(L(232));
				qS.push(aMv)
			}(qS), qS.push(function() {
				var aMv = new qA;
				if (aMv.qD(L(202)), aMv.qJ(L(203) + data.aNA + "<br>" + L(164) + (data.aNB + 1) + " / " + data.vg + "<br>" + L(165) + bn.e8(data.aNB)), data.aMe) {
					var rK = new rL({
							value: bi.eI.data[157].value,
							e6: -1
						}, 1, void 0, function(e) {
							bi.ry.rz(157, aMy(e.target.value))
						}),
						aN4 = (rK.e.style.marginTop = "0.6em", aMv.qO(rK), new w(L(170), function(e) {
							return e.textContent === L(170) ? (e.textContent = L(171), rK.e.readOnly = !0, aNC[0].qr(0), aNC[1].qr(0), aNC[0].button.style.color = bA.od, aNC[1].button.style.color = bA.od, aMy(bi.eI.data[157]
								.value)) : aN1(), !0
						})),
						aNC = (aMv.qO(new s1([aN4.button])), [new w("−", function(e) {
							return rK.e.readOnly && az.y.aN0(0) && (b9.qX.a3A(e), aN1(), az.aN2.aN3({
								sn: 2,
								sj: data.sj,
								value: bK.ht(parseInt(bi.eI.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rK.e.readOnly && az.y.aN0(0) && (b9.qX.a3A(e), aN1(), az.aN2.aN3({
								sn: 1,
								sj: data.sj,
								value: bK.ht(parseInt(bi.eI.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qG = aMv.qF(),
						aMy = function(fD) {
							return fD = b9.g7.a3f(fD, 3, 32767), qG.textContent = L(204, [fD - 1, fD, bi.eI.data[105].value]), fD
						};
					aMv.qO(new s1([aNC[0].button, aNC[1].button]));
					for (var aB = 0; aB < 2; aB++) aNC[aB].button.style.fontSize = "1.6em";
					var aN1 = function() {
						aN4.button.textContent = L(170), rK.e.readOnly = !1, aNC[0].qr(1), aNC[1].qr(1), aNC[0].button.style.color = bA.ng, aNC[1].button.style.color = bA.ng
					};
					aMy(bi.eI.data[157].value)
				}
				return aMv
			}()),
			function(qS) {
				var aMv, a38;
				data.aMe && !data.aNO || (0 === a0.id || data.aMe || data.aNO) && ((aMv = new qA).qD("Patreon"), !data.aMe && data.aNP ? aMv.qO(new s1([new w(L(176), function() {
					az.aN2.aNI({
						sn: 7,
						sj: data.sj
					}), data.aNP = 0, t.u(7)
				}).button])) : data.aNO ? (aMv.qJ(L(233, [(data.aNQ / 100).toFixed(2)]) + "<br>" + L(234, [1 + data.aNR + " / " + data.aNS]) + "<br>" + L(235, [data.aNT ? L(236) : L(237)])), data.aMe || aMv.qO(new s1([new w(L(238),
					function() {
						az.aN2.aNI({
							sn: 8,
							sj: data.sj
						}), data.aNO = 0, bi.ry.rz(160, 0), t.u(7)
					}).button]))) : (aMv.qJ(L(239), "0.75em").style.marginBottom = "0.3em", aMv.qJ("  • " + L(240), "0.75em").style.whiteSpace = "pre", aMv.qJ("  • " + L(241), "0.75em").style.whiteSpace = "pre", aMv.qJ("  • " + L(
						242), "0.75em").style.whiteSpace = "pre", aMv.qJ(L(243), "0.75em").style.marginTop = "1.0em", aMv.qJ(L(244), "0.75em").style.marginTop = "1.0em", aMv.qJ("<a href='" + bJ.aNU +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a38 = "https://www.patreon.com/oauth2/authorize?state=" + data.sj +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aMv.qJ(L(245), "0.75em").style.marginTop = "1.0em", aMv.qJ("<a href='" + a38 +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aMe || (aMv.qO(new sB), aMv.qO(new s1([new w(L(177), function() {
						az.aN2.aNI({
							sn: 6,
							sj: data.sj
						}), data.aNP = 1, t.u(7)
					}).button])), aMv.qJ(L(246), "0.75em").style.marginTop = "0.75em")), qS.push(aMv))
			}(qS), qS
	}())
}

function aMR() {
	var aNW, aNX, aNY, qS;

	function aNZ() {
		aNb(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		2 === aD.data.aIncomeType ? (b9.qf.a2X(aNY.uv(), aD.data.aIncomeData, 255), b9.qf.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(247), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), aMv.qL(new uJ({
			uN: [L(249), L(250), L(251)],
			value: aD.data.aIncomeType
		}, function(e6) {
			aNb(), 2 !== e6 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ei)), aD.data.aIncomeType = e6, t.u(22)
		})), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv;
		1 === aD.data.aIncomeType && ((aMv = new qA).qD("Value"), aMv.qO(new rL({
			e6: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bK.ht(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qS.push(aMv))
	}(qS), function(qS) {
		var aMv;
		2 === aD.data.aIncomeType && ((aMv = new qA).qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.aIncomeData, 4)), aMv.qO(aNY), qS.push(aMv))
	}(qS), qS))
}

function aMU() {
	var aNW, aNX, aNY;

	function aNZ() {
		aNb(), 3 !== aD.data.botDifficultyType || b9.qf.a2L(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		3 === aD.data.botDifficultyType && b9.qf.a2X(aNY.uv(), aD.data.botDifficultyData, aE.kJ.length - 1)
	}

	function aNg(qS, e6) {
		var aMv = new qA,
			value = (aMv.qD(e6 < 0 ? L(61) : L(60) + " " + bf.a0D[e6 % 9]), 0 <= e6 && (aMv.qJ(L(254) + ": " + aD.data.teamPlayerCount[e6]).style.marginBottom = "1em"), e6 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e6]);
		aMv.qL(new uJ({
			uN: aE.kJ,
			value: value
		}, function(hd) {
			e6 < 0 ? aD.data.botDifficultyValue = hd : aD.data.botDifficultyTeam[e6] = hd
		})), qS.push(aMv)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(61), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, function() {
		var qS = [];
		if (function(qS) {
				var aMv = new qA,
					uN = (aMv.qD(L(248)), [L(250), L(252), L(253), L(251)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uN.splice(2, 1));
				aMv.qL(new uJ({
					uN: uN,
					value: value
				}, function(e6) {
					aNb(), aD.data.botDifficultyType = e6, 0 === aD.data.gameMode && 2 === e6 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ei)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qS.push(aMv)
			}(qS), 0 === aD.data.botDifficultyType) aNg(qS, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aNg(qS, aB);
		else 3 === aD.data.botDifficultyType && ! function(qS) {
			var aMv = new qA;
			aMv.qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.botDifficultyData, 8)), aMv.qO(aNY), qS.push(aMv)
		}(qS);
		return qS
	}())
}

function aNh(data) {
	var aMc, aNi, aNj, aNk, aNl, aNm, aNn, colors, aNo, aNp, aNq = 0,
		aNr = 0,
		aNs = !1,
		aNt = !1,
		aNu = [1, 5, 60, 240, 1440, 10080, 43200];

	function aOO(lL, lM) {
		! function(lL, lM) {
			return aNi < lL && lL < aNi + aNk && aNj < lM && lM < aNj + aNl
		}(aNq = lL, aNr = lM) ? (aNs && (be.dj = !0), aNs = !1) : (aNs = !0, be.dj = !0)
	}
	this.show = function() {
		aNt = bi.eI.data[127].value, aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize();
		var f6 = h.k,
			uc = aMc.uZ(),
			aO3 = f6 * uc.ub,
			f6 = f6 * uc.rr;
		aNm = b9.qX.tA(.06), aNn = b9.qX.tA(.04), aNi = b9.qX.tA(.06), aNj = f6 + aNm, aNk = h.i - aNi - aNn, aNl = aO3 + f6 - aNj - aNn
	}, this.ud = function() {
		aMc.ud(),
			function() {
				var aB, aO0, gE, es, f4, g = data.data,
					aO7 = 1,
					aO8 = .125,
					aO9 = aNt ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aO0 = g[aB].aO0, gE = aO0.length, aO7 = Math.max(gE, aO7), f4 = 0; f4 < gE; f4++) aO8 = Math.max(aO0[f4], aO8), aO9 = Math.min(aO0[f4], aO9);
				var n7 = aNj + aNl,
					xq = aNl / (aO8 - aO9),
					xp = 1 / (aO7 - 1);
				for (ue.lineWidth = bb.yq, aB = 0; aB < g.length; aB++) {
					for (aO0 = g[aB].aO0, gE = aO0.length, es = aNi, ue.beginPath(), ue.moveTo(es + aNk, n7 - xq * (aO0[gE - 1] - aO9)), f4 = gE - 2; 0 <= f4; f4--) ue.lineTo(es + xp * f4 * aNk, n7 - xq * (aO0[f4] - aO9));
					ue.strokeStyle = colors[aB], ue.stroke()
				}(function(aO9, aO8, n7, xq) {
					ue.font = b9.qX.sL(0, .25 * aNi), b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 2), ue.fillStyle = colors[0];
					for (var es = .92 * aNi, aB = 0; aB < 3; aB++) {
						var fD = aO9 + aB * (aO8 - aO9) / 2;
						ue.fillText((fD / 1e3).toFixed(3), es, n7 - xq * (fD - aO9))
					}
				})(aO9, aO8, n7, xq),
				function(aO7) {
					var eu = aNj + aNl + .15 * aNn;
					ue.font = b9.qX.sL(0, Math.min(.4 * aNn, .028 * h.i)), b9.qX.textBaseline(ue, 0), b9.qX.textAlign(ue, 2), ue.fillStyle = colors[0], ue.fillText(b9.a2C.a2z(aNo), aNi + aNk, eu), b9.qX.textAlign(ue, 0), ue.fillText(b9.a2C.a2z(
						new Date(aNp.getTime() - 6e4 * (aO7 - 1) * aNu[data.aNz])), aNi, eu)
				}(aO7),
				function(aO7, aO9, aO8) {
					if (aNs && !(aO7 < 2)) {
						for (var a8L, e6 = (aNq - aNi) / aNk * (aO7 - 1), aOC = Math.floor(e6), aOD = Math.floor(1 + e6), aOE = e6 - aOC, aOF = 1e5, aOG = -1, aOH = -1, aOI = aO8 - (aO8 - aO9) * (aNr - aNj) / aNl, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aC4, aO0 = g[aB].aO0;
							aO0.length <= aOD || (aO0 = aO0[aOC] + aOE * (aO0[aOD] - aO0[aOC]), (aC4 = Math.abs(aOI - aO0)) < aOF && (aOF = aC4, aOG = aB, aOH = aO0))
						} - 1 !== aOG && (aO8 = aNj + aNl - (aOH - aO9) / (aO8 - aO9) * aNl, ue.lineWidth = .5 * bb.yq, ue.strokeStyle = colors[aOG], ue.beginPath(), ue.moveTo(aNi, aO8), ue.lineTo(aNq, aO8), ue.lineTo(aNq, aNj + aNl), ue
						.stroke(), ue.beginPath(), ue.arc(aNq, aO8, .1 * aNi, 0, 2 * Math.PI), ue.fillStyle = colors[aOG], ue.fill(), aO9 = aNj + aNl + .15 * aNn, b9.qX.textAlign(ue, 1), a8L = aO7 - 2 < e6 ? (a8L = aNp.getTime() - 6e4 * aNu[
								data.aNz], new Date(a8L + (e6 - (aO7 - 2)) * (aNo.getTime() - a8L))) : new Date(aNp.getTime() - 6e4 * (aO7 - e6 - 1) * aNu[data.aNz]), aO7 = b9.a2C.a2z(a8L), e6 = b9.qX.measureText(aO7), a8L = bK.ht(aNq, aNi +
								.5 * e6, aNi + aNk - .5 * e6), ue.fillStyle = b9.color.nY(70, 50, 20), ue.fillRect(a8L - .52 * e6, aNj + aNl, 1.04 * e6, .55 * aNn), ue.fillStyle = colors[0], ue.fillText(aO7, a8L, aO9), ue.font = b9.qX.sL(0,
								.25 * aNi), b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 2), a8L = .92 * aNi, aO7 = (aOH / 1e3).toFixed(3), e6 = b9.qX.measureText(aO7), aO9 = a8L - 1.04 * e6, ue.fillStyle = b9.color.nY(70, 50, 20), ue
							.fillRect(aO9, aO8 - .1625 * aNi, aNi - aO9, .275 * aNi), ue.fillStyle = colors[aOG], ue.fillText(aO7, a8L, aO8))
					}
				}(aO7, aO9, aO8)
			}(), ue.lineWidth = bb.yq, ue.strokeStyle = bA.ng, ue.beginPath(), ue.moveTo(aNi, aNj), ue.lineTo(aNi, aNj + aNl), ue.lineTo(aNi + aNk, aNj + aNl), ue.stroke();
		var aB, fontSize = .5 * aNm,
			g = (ue.font = b9.qX.sL(0, fontSize), b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 0), data.data),
			el = g.length,
			eu = aNj - .5 * aNm,
			qE = "";
		for (aB = 0; aB < el; aB++) qE += g[aB].name + "  ";
		qE = qE.trim();
		var aOL = b9.qX.measureText(qE),
			es = .5 * (h.i - aOL);
		for (aOL > h.i && (es = 0, ue.font = b9.qX.sL(0, h.i / aOL * fontSize)), aB = 0; aB < el; aB++) ue.fillStyle = colors[aB], ue.fillText(g[aB].name, es, eu), es += b9.qX.measureText(g[aB].name + "  ")
	}, this.gy = function(lL, lM) {
		aOO(lL, lM)
	}, this.a1N = function(lL, lM) {
		aOO(lL, lM)
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	};
	var aB, dr, a2x, hd, eo = data.data,
		el = eo.length,
		max = 1;
	for (aB = 0; aB < el; aB++) max = Math.max(max, eo[aB].aO0.length);
	for (aB = 0; aB < el; aB++)
		for (; eo[aB].aO0.length < max;) eo[aB].aO0.unshift(0);
	dr = new Date, a2x = 6e4 * dr.getTimezoneOffset(), hd = dr.getTime() - a2x, aNo = new Date(hd), 6 === data.aNz ? function(dr, a2x) {
		var aO2 = dr.getUTCFullYear(),
			dr = dr.getUTCMonth() + 1;
		aNp = dr < 12 ? new Date(Date.UTC(aO2, dr) - a2x) : new Date(Date.UTC(aO2 + 1, 0) - a2x)
	}(dr, a2x) : (a2x = 6e4 * aNu[data.aNz], aNp = data.aNz <= 4 ? new Date(hd + a2x - dr.getTime() % a2x) : new Date(hd + a2x - (dr.getTime() + 2592e5) % a2x)), hd = b9.color, colors = [bA.ng, hd.nY(255, 0, 0), hd.nY(0, 200, 0), hd.nY(80, 80,
		255), hd.nY(255, 255, 0), hd.nY(255, 0, 255), hd.nY(0, 255, 255), hd.nY(255, 140, 0), hd.nY(128, 128, 128), hd.nY(0, 255, 140)], aMc = new uO(L(255) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aNz] + ", " + b9.a2C.a2w(aNo), [
		new w("⬅️ " + L(36), function() {
			t.u(1)
		}), new w(L(256), function() {
			t.u(14)
		})
	], !1)
}

function aMJ() {
	var aMc, aMd, qS;
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aMd.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(L(257), [new w("⬅️ " + L(36), function() {
		t.aMa(13)
	})]), aMd = new qQ(aMc.uU, ((qS = []).push(function() {
		var aMv = new qA,
			aN4 = (aMv.qD(L(258)), aMv.qF(L(259)), new w(L(260), function() {
				bi.ry.rz(130, 0), t.y.aOT()
			}, 0, 0, 1)),
			rK = new rL(bi.eI.data[126], 0, function() {
				aN4.button.click()
			});
		return aMv.qO(rK), rK.e.placeholder = "a,b,c", rK.e.style.marginTop = "0.5em", aMv.qO(new s1([aN4.button])), aMv
	}()), qS.push(function() {
		var aMv = new qA,
			aN4 = new w(L(260), function() {
				bi.ry.rz(130, 1), t.y.aOT()
			}, 0, 0, 1),
			aOU = new rL(bi.eI.data[129], 1, function() {
				aOU.e.focus()
			}),
			aOV = new rL(bi.eI.data[128], 1, function() {
				aN4.button.click()
			});
		return aMv.qD(L(261)), aMv.qO(aOV), aOV.e.style.marginBottom = "0.5em", aMv.qD(L(262)), aMv.qO(aOU), aMv.qO(new s1([aN4.button])), aMv
	}()), qS.push(function() {
		var aMv = new qA;
		return aMv.qD(L(263)), bi.eI.data[125].uN = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aMv.qL(new uJ(bi.eI.data[125])), aMv
	}()), qS.push(function() {
		var aMv = new qA;
		return aMv.qD(L(264)), aMv.qO(new rv(bi.eI.data[127], L(265))), aMv
	}()), qS))
}

function aMI() {
	var aMc, aOW, aNk, aOX, aOY, aOZ, colors = [0, 0, 0],
		aOa = -1;

	function aOd(aB) {
		var aOe = aOW.eu + aB * (bb.gap + aOZ);
		ue.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", ue.fillRect(aOX, aOe, colors[aB] * aOY, aOZ), ue.strokeStyle = bA.ng, ue.strokeRect(aOX, aOe, aOY,
			aOZ), ue.fillStyle = bA.ng, ue.font = b9.qX.sL(0, .32 * aOZ), b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 0), ue.fillText(L(0 === aB ? 268 : 1 === aB ? 269 : 270) + aOb(aB), aOX + bb.gap, aOe + .53 * aOZ)
	}

	function aOb(aB, aOf) {
		return aOf = aOf || 256, bK.ht(Math.floor(aOf * colors[aB]), 0, aOf - 1)
	}

	function a1r(lL, lM) {
		return !(lL < aOX || lM < aOW.eu || lL > aOW.es + aOW.i || lM > aOW.eu + aOW.j)
	}
	this.show = function() {
		var fD = bi.eI.data[121].value;
		colors[0] = (fD >> 12) / 63, colors[1] = (fD >> 6 & 63) / 63, colors[2] = (63 & fD) / 63, aMc.show(), this.resize()
	}, this.ro = function() {
		bi.ry.rz(121, (aOb(0, 64) << 12) + (aOb(1, 64) << 6) + aOb(2, 64)), aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aOW.resize();
		var f6 = h.k,
			uc = aMc.uZ(),
			aOc = (aOW.eu = Math.max(aOW.eu, f6 * uc.rr + bb.gap), f6 * uc.ub - 2 * bb.gap);
		aOW.j = Math.min(aOW.j, aOc), aOW.i = 2 * aOW.j, aOW.eu = f6 * uc.rr + .5 * (f6 * uc.ub - aOW.j), aOW.es = .5 * (h.i - aOW.i), aNk = .25 * aOW.i, aOX = aOW.es + aNk + bb.gap, aOY = aOW.i - aNk - bb.gap, aOZ = (aOW.j - 2 * bb.gap) / 3
	}, this.ud = function() {
		var e5, t9, f5;
		aMc.ud(), ue.lineWidth = bb.yq, e5 = aOb(0), t9 = aOb(1), f5 = aOb(2), ue.fillStyle = "rgb(" + e5 + "," + t9 + "," + f5 + ")", ue.fillRect(aOW.es, aOW.eu, aNk, aOW.j), ue.strokeStyle = bA.ng, ue.strokeRect(aOW.es, aOW.eu, aNk, aOW.j), ue
			.fillStyle = e5 + t9 + f5 < 306 && t9 < 150 ? bA.ng : bA.nX, b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 1), ue.font = b9.qX.sL(0, .1 * aOW.j), ue.rotate(-Math.PI / 2), ue.fillText(L(267), -aOW.eu - .5 * aOW.j, aOW.es + .5 * aNk),
			ue.setTransform(1, 0, 0, 1, 0, 0), aOd(0), aOd(1), aOd(2)
	}, this.gy = function(lL, lM) {
		a1r(lL, lM) && (aOa = bK.ht(Math.floor((lM - aOW.eu) / (aOZ + .75 * bb.gap)), 0, 2), colors[aOa] = bK.ht((lL - aOX) / aOY, 0, 1), be.dj = !0)
	}, this.a1N = function(lL) {
		-1 !== aOa && (colors[aOa] = bK.ht((lL - aOX) / aOY, 0, 1), be.dj = !0)
	}, this.a1Q = function(lL, lM, deltaY) {
		a1r(lL, lM) && (lL = bK.ht(Math.floor((lM - aOW.eu) / (aOZ + .75 * bb.gap)), 0, 2), colors[lL] = bK.ht(colors[lL] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), be.dj = !0)
	}, this.a1l = function() {
		0 <= aOa && (aOa = -1, be.dj = !0)
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(L(266), [new w("⬅️ " + L(36), function() {
		t.y.aBy()
	})], !1), aOW = new r8([.5, .25], [.5, .5], 1)
}

function aMQ() {
	var aNW, aNX, aNY, r6;

	function aNZ() {
		aNb(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aMb()[19] = null, t.a13()
	}

	function aOg() {
		aNb(), t.u(21)
	}

	function aNb() {
		1 === aD.data.gameMode ? aD.a4M.a4R() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && b9.qf.a2X(aNY.uv(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, r6 = [new w("⬅️ " + L(36), aNZ)], 1 === aD.data.gameMode && r6.push(new w(L(271), aOg, 1, 1)), aNW = new uO(L(272), r6), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), 0 === aD.data.gameMode && (aMv.qL(new uJ({
			uN: [L(273), L(251)],
			value: aD.data.colorsType
		}, function(e6) {
			aNb(), aD.data.colorsType = e6, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ei || (aD.data.colorsData = new Uint32Array(aD.ei)), t.u(21)
		})), aMv.qO(new sB));
		aMv.qO(new rv({
			value: aD.data.selectableColor
		}, L(274), function(value) {
			aD.data.selectableColor = value
		})), qS.push(aMv)
	}(r6 = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qS) {
		var aMv = new qA;
		aMv.qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.colorsData, 1)), aMv.qO(aNY), qS.push(aMv)
	}(r6) : (aD.a4M.a4R(), r6.push(function() {
		var aMv = new qA;
		aMv.qD(L(254));
		for (var aB = 0; aB < bf.a0D.length; aB++) {
			var hd = (aB + 1) % bf.a0D.length,
				e = aMv.qJ((0 == hd ? "" : "Team ") + bf.a0D[hd]);
			aB && (e.style.marginTop = "0.5em"), aMv.qO(new rL({
				e6: -1,
				value: aD.data.teamPlayerCount[hd]
			}, 1, 0, function(e) {
				aNW.uV[1].qr(0);
				var playerCount = bK.ht(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aOi] = playerCount
			})).e.aOi = hd
		}
		return aMv
	}())), r6))
}

function sm(id, a3i, aOj) {
	var aMc, aOk;

	function aOp() {
		aOk.qT.innerHTML += "<br>" + L(277)
	}

	function aOo() {
		bC.a7(48), bC.a8(24, Math.floor(bK.pow(24) * Math.random())), bC.a8(24, Math.floor(bK.pow(24) * Math.random())), bG.db(bC.aC), bi.ry.rz(110, bE.so.sp(bE.so.sq(8))), az.aN2.aP3()
	}
	this.aOl = !0, this.aOm = id, this.show = function() {
		aMc.show(), this.resize(), 15 === id ? (az.y.aOn(id) ? aOo : aOp)() : 16 === id ? az.y.aOn(id) ? az.aBv.aOq(2) : aOp() : 17 === id ? az.y.aOn(id) ? az.aBv.aOq(3) : aOp() : 18 === id ? (az.y.close(0, 3253), az.y.aFU(0, id), aOp()) : 21 ===
			id ? az.y.aOn(id) ? az.aOr.aOs(a3i.t4, a3i.t5, a3i.t6) : aOp() : 22 === id ? az.y.aOn(id) ? az.aOr.aOt(a3i.t4, a3i.aOu, a3i.aOv) : aOp() : 23 === id ? az.y.aOn(id) ? az.aOr.aOw(a3i.aNz, a3i.a0X) : aOp() : 24 === id ? az.y.aOn(id) ? az
			.aOr.aOx(a3i.aNz, a3i.t5, a3i.t6) : aOp() : 25 === id ? az.y.aOn(id) ? az.aN2.aNI(a3i) : aOp() : 28 === id ? az.y.aOn(id) ? az.aOr.aOy(a3i.t4, a3i.aOu, a3i.aOv) : aOp() : 29 === id && (az.y.aOn(id) ? az.aN2.aOz(a3i) : aOp())
	}, this.aP0 = function() {
		15 === id ? aOo() : 16 === id ? az.aBv.aOq(2) : 17 === id ? az.aBv.aOq(3) : 18 === id ? t.u(8, this.aM9, new sm(16)) : 21 === id ? az.aOr.aOs(a3i.t4, a3i.t5, a3i.t6) : 22 === id ? az.aOr.aOt(a3i.t4, a3i.aOu, a3i.aOv) : 23 === id ? az.aOr
			.aOw(a3i.aNz, a3i.a0X) : 24 === id ? az.aOr.aOx(a3i.aNz, a3i.t5, a3i.t6) : 25 === id ? az.aN2.aNI(a3i) : 28 === id ? az.aOr.aOy(a3i.t4, a3i.aOu, a3i.aOv) : 29 === id ? az.aN2.aOz(a3i) : 1e3 === id && (this.aOm = id = 25, az.aN2.aNI(
				a3i))
	}, this.aP1 = function(code, bt, data) {
		!bt && code !== id || (15 === code || 16 === code ? t.u(7, this.aM9) : 17 === code ? (az.y.close(0, 3252), bi.y.vU(0), bi.eI.data[117].uN && 0 < bi.eI.data[117].uN.length ? (bt = bi.y.vV(0), bi.ry.rz(105, bt.sj), bi.ry.rz(106, bt
			.password), t.u(8, this.aM9, new sm(16))) : (bi.ry.rz(105, ""), t.y.aBy())) : 21 === code ? t.u(10, this.aM9, new aP2(data)) : 23 === code ? t.u(13, this.aM9, new aNh({
			data: data,
			aNz: a3i.aNz
		})) : 25 === code && (t.y.aMK.sj = a3i.sj, t.u(15, this.aM9)))
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aOk.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(L(275), [new w("⬅️ " + L(36), function() {
		aOj ? t.u(29) : t.y.aBy()
	})]), aOk = new s0(aMc.uU, L(276))
}

function aMO() {
	var aNW, aNX, qS;

	function aP6() {
		var gE;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4M.a4R()), gE = b9.qf.a2R(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gE) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aNZ() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aP8(), aD.data.canvas = null, t.u(5, 5)
	}

	function aP8() {
		b8.pr.db(), bi.ry.rz(156, b8.a4d.zK())
	}

	function aP4() {
		aD.data.isReplay = 0, aP8(), aD.a4M.a4o(), aa.aFf(), aD.a4M.a4l(), aD.data.canvas = 2 === aD.data.mapType ? bR.wR : null, aD.a4Q(), aD.a4O = 1
	}

	function aPK() {
		aP6();
		for (var g = [aPB(), aPC(), aPD()], aB = 3; aB < 6; aB++) aNX.qT.removeChild(aNX.qU[aB].qC), aNX.qU[aB] = g[aB - 3], aNX.qT.appendChild(aNX.qU[aB].qC);
		aNX.resize()
	}

	function aPB() {
		var aPL, aMv = new qA;
		return aMv.qD(L(272)), aPL = 0 === aD.data.gameMode ? [L(273), L(251)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aMv.qJ(aPL), aMv.qO(new s1([new w(L(281), function() {
			t.u(21)
		}).button])), aMv
	}

	function aPC() {
		var aMv = new qA,
			g = (aMv.qD(L(61)), [L(250) + ": " + aE.kJ[aD.data.botDifficultyValue], L(252), L(253), L(251)]);
		return aMv.qJ(g[aD.data.botDifficultyType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(25)
		}).button])), aMv
	}

	function aPD() {
		var aMv = new qA,
			g = (aMv.qD("Spawning"), [L(273), L(283), L(251)]);
		return aMv.qJ(g[aD.data.spawningType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(24)
		}).button])), aMv
	}
	this.show = function() {
		aNW.show(), this.resize(), aNW.uU.scrollTop = t.y.aHa[0]
	}, this.ro = function() {
		t.y.aHa[0] = aNW.uU.scrollTop, aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO("🔧 " + L(278), [new w("⬅️ " + L(36), aNZ), new w(L(279), aP4)]), aP6(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bR.wR : 1 === aD.data.mapType ? aD.data.canvas = bR.aK4(bR.a4m(aD.data), 0).wR : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bR.aK4(bR.a4m(aD.data), aD.data.mapSeed).wR)), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA,
			a2h = (aMv.qD(L(280)), aD.data.canvas);
		a2h.style.width = "100%", aMv.qO({
			e: a2h
		}), aMv.qO(new s1([new w(L(281), function() {
			t.u(20)
		}).button])), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv = new qA;
		aMv.qD(L(254)), aMv.qO(new rL({
			e6: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bK.ht(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = b9.qf.a2R(aD.data.teamPlayerCount, 0), aD.a4M.a4R(), b9.qf.a2R(aD.data.teamPlayerCount, 0) !== e) && aPK()
		})), qS.push(aMv)
	}(qS), function(qS) {
		var aMv = new qA;
		aMv.qD(L(282)), aMv.qL(new uJ({
			uN: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e6) {
			aD.data.gameMode !== e6 && (aD.data.gameMode = e6, aPK())
		})), qS.push(aMv)
	}(qS), qS.push(aPB()), qS.push(aPC()), qS.push(aPD()), function(qS) {
		var aMv = new qA,
			g = (aMv.qD(L(284)), [L(285), L(286), L(251)]);
		aMv.qJ(g[aD.data.playerNamesType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(23)
		}).button])), qS.push(aMv)
	}(qS), function(qS) {
		var aMv = new qA,
			g = (aMv.qD(L(247)), [L(249), L(250) + ": " + aD.data.aIncomeValue, L(251)]);
		aMv.qJ(g[aD.data.aIncomeType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(22)
		}).button])), qS.push(aMv)
	}(qS), function(qS) {
		var aMv = new qA,
			g = (aMv.qD(L(287)), [L(249), L(250) + ": " + aD.data.tIncomeValue, L(251)]);
		aMv.qJ(g[aD.data.tIncomeType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(26)
		}).button])), qS.push(aMv)
	}(qS), function(qS) {
		var aMv = new qA,
			g = (aMv.qD(L(288)), [L(249), L(250) + ": " + aD.data.iIncomeValue, L(251)]);
		aMv.qJ(g[aD.data.iIncomeType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(27)
		}).button])), qS.push(aMv)
	}(qS), function(qS) {
		var aMv = new qA,
			g = (aMv.qD(L(289)), [L(249), L(250) + ": " + aD.data.sResourcesValue, L(251)]);
		aMv.qJ(g[aD.data.sResourcesType]), aMv.qO(new s1([new w(L(281), function() {
			t.u(28)
		}).button])), qS.push(aMv)
	}(qS), function(qS) {
		var aMv = new qA;
		aMv.qD(L(290)), aMv.qO(new s1([new w(L(291), function() {
			t.x(), aD.a4M.a4p(), t.y.aHa[0] = 0, t.u(19)
		}).button])), aMv.qO(new s1([new w(L(292), function() {
			bl.aHP()
		}).button])), aMv.qO(new s1([new w(L(293), function() {
			return bl.aHR(), !0
		}).button])), qS.push(aMv)
	}(qS), qS))
}

function aMZ() {
	var aNW, rQ = !0;

	function rh(rg, a4r) {
		var qC = document.createElement("div"),
			aPN = document.createElement("span"),
			aPO = document.createElement("span");
		aPN.textContent = aW.aAo(a4r.eK) + ":", aPN.style.color = bA.nv, aPN.style.paddingRight = "0.4em", aPN.style.display = "table-cell", aPN.style.width = "6ch", aPN.style.textAlign = "end", qC.appendChild(aPN), aPO.textContent = a4r.qE, qC
			.appendChild(aPO), qC.style.display = "table", a4r.pG && function(qC, pG) {
				{
					var aHL;
					pG >= 1024 - aj.rn.yd ? ((aHL = document.createElement("img")).src = aj.wU.yR[pG - 1024 + aj.rn.yd].toDataURL(), aHL.style.width = "1.5em", aHL.style.height = "1.5em", aHL.style.verticalAlign = "middle", qC.appendChild(aHL)) : ((
						aHL = document.createElement("span")).textContent = aj.rn.ys(pG), aHL.style.display = "inline-block", aHL.style.fontSize = "1.5em", aHL.style.lineHeight = "1em", aHL.style.verticalAlign = "middle", qC.appendChild(aHL))
				}
			}(qC, a4r.pG), rg.appendChild(qC)
	}

	function rk() {
		rQ && (aNW.uU.scrollTop = aNW.uU.scrollHeight)
	}
	this.clear = function() {
		aNW.uU.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a5k = bp.a4v(), el = a5k.length, rg = document.createDocumentFragment(), aB = 0; aB < el; aB++) rh(rg, a5k[aB]);
		aNW.uU.appendChild(rg), rk(), aNW.show(), this.resize(), rQ = !0, rk()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNW.uU.style.padding = "0.4em " + b9.qX.qg(bb.qd)
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, this.yL = function(a4r) {
		var rg = document.createDocumentFragment();
		rh(rg, a4r), aNW.uU.appendChild(rg), rk()
	}, (aNW = new uO(L(294), [new w("⬅️ " + L(36), function() {
		t.aMa(1)
	})])).uU.style.overflowY = "auto", aNW.uU.addEventListener("scroll", function() {
		rQ = aNW.uU.scrollTop >= aNW.uU.scrollHeight - aNW.uU.clientHeight - 2
	})
}

function aMW() {
	var aNW, aNX, aNY, qS;

	function aNZ() {
		aNb(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		2 === aD.data.iIncomeType && b9.qf.a2X(aNY.uv(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(288), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), aMv.qL(new uJ({
			uN: [L(249), L(250), L(251)],
			value: aD.data.iIncomeType
		}, function(e6) {
			aNb(), 2 !== e6 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ei), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e6, t.u(27)
		})), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv;
		1 === aD.data.iIncomeType && ((aMv = new qA).qD("Value"), aMv.qO(new rL({
			e6: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bK.ht(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qS.push(aMv))
	}(qS), function(qS) {
		var aMv;
		2 === aD.data.iIncomeType && ((aMv = new qA).qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.iIncomeData, 4)), aMv.qO(aNY), qS.push(aMv))
	}(qS), qS))
}

function aME() {
	var aPQ, aPR, aOW, rK, aPS;
	this.aGD = new su, aOW = new r8([.45, .27], [.5, .5], 2 / 3), aPR = [new w("⚔️<br>" + L(295), function() {
			aPT(0)
		}, bA.o9), new w("🗡️<br>" + L(278), function() {
			aPT(1)
		}, bA.oR), new w("🔑<br>" + L(296), function() {
			aPT(2)
		}, bA.oj), new w("☰<br>" + L(297), function() {
			aPT(3)
		}, bA.nt), new w("", function() {
			t.u(12)
		}, bA.nc, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rK = new rL(bi.eI.data[122]);
	for (var aB = 0; aB < aPR.length; aB++) aPR[aB].button.style.position = "absolute";

	function aPT(e6) {
		a0.a1.setState(10), ab.tD() || ab.aG4(), 0 === e6 ? t.y.a4g() : 1 === e6 ? (b8.aHk.wC(bi.eI.data[156].value, 1) || aD.a4M.a4p(), t.u(19)) : 2 === e6 ? 0 !== a0.id || bi.eI.data[140].value ? t.u(8, t.sl, new sm(16)) : t.y.aPU(t.sl, 16) : 3 ===
			e6 && t.u(1)
	}
	rK.e.style.position = "absolute", rK.e.style.textAlign = "center", rK.e.placeholder = L(298), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGD.show(), aPR[4].qr(b9.color.a2o(bi.eI.data[121].value)), this.resize(), document.body.appendChild(rK.e);
		for (var aB = 0; aB < aPR.length; aB++) document.body.appendChild(aPR[aB].button);
		1 !== a0.id || a0.dt < 5 || (aPS && be.eK > aPS + 144e5 ? a0.vF.setState(14) : aPS = be.eK)
	}, this.ro = function() {
		this.aGD.ro(), document.body.removeChild(rK.e);
		for (var aB = 0; aB < aPR.length; aB++) document.body.removeChild(aPR[aB].button)
	}, this.resize = function() {
		this.aGD.resize(), this.aGD.resize(), aOW.resize();
		var gap = .5 * bb.gap,
			ti = 10 / 99 * .84 * aOW.i,
			aPX = .16 * aOW.j,
			a8t = .19 * aOW.i,
			es = aOW.es + a8t,
			ti = aOW.eu + ti + 3 * gap,
			i = .5 * (aOW.i - gap) - a8t,
			a8t = aOW.i - 2 * a8t - aPX - gap,
			a8t = (b9.qX.tB(rK.e, es, ti, a8t, aPX), b9.qX.tB(aPR[4].button, es + a8t + gap, ti, aPX, aPX), .5 * (aOW.eu + aOW.j - (ti += aPX + gap) - gap));
		b9.qX.tB(aPR[0].button, es, ti, i, a8t), b9.qX.tB(aPR[1].button, es + i + gap, ti, i, a8t), b9.qX.tB(aPR[2].button, es, ti + a8t + gap, i, a8t), b9.qX.tB(aPR[3].button, es + i + gap, ti + a8t + gap, i, a8t);
		b9.qX.tB(aPR[5].button, es, ti + a8t * 2 + gap * 2, i * 2 + gap, a8t / 3);
		b9.qX.tB(aPR[6].button, es, ti + a8t * 2.33 + gap * 3, i * 2 + gap, a8t / 3);
		for (var aB = 0; aB < aPR.length; aB++) aPR[aB].button.style.font = b9.qX.sL(0, b9.qX.a34(.065 * aOW.j)), b9.qX.qh(aPR[aB].button, 5);
		rK.e.style.font = b9.qX.sL(0, b9.qX.a34(.08 * aOW.j)), b9.qX.qh(rK.e, 5)
	}, this.ud = function() {
		if (aa.aFj(), aT.ud(), aO.ud(), bX.ud(), ab.tD()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aOW.i * 0.03);
				ue.font = b9.qX.sL(1, size);
				ue.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = ue.measureText(text).width;
				ue.textAlign = "left";
				ue.textBaseline = "middle";
				ue.fillText(text, ue.canvas.width - textLength - size / 2, size);
			};
			ue.imageSmoothingEnabled = !1;
			var f6 = ab.aFm("territorial.io"),
				nI = .84 * aOW.i / f6.width;
			ue.setTransform(nI, 0, 0, nI, aOW.es + .08 * aOW.i, aOW.eu), aPQ = aPQ || b9.a28.a3g(f6, b9.a28.a3m, [0, 0, 0]);
			for (var es = -1; es <= 1; es += 2)
				for (var eu = -1; eu <= 1; eu += 2) ue.drawImage(aPQ, es, eu);
			ue.drawImage(f6, 0, 0), ue.imageSmoothingEnabled = !0;
			var yz = ab.aFm("logo"),
				aPZ = .6666 * nI * f6.height / yz.height,
				nJ = .5 * h.i,
				nK = aOW.eu + .5 * nI * f6.height - .5 * aPZ * yz.height;
			ue.setTransform(aPZ, 0, 0, aPZ, nJ - .6 * nI * f6.width, nK), ue.drawImage(yz, 0, 0), ue.setTransform(aPZ, 0, 0, aPZ, nJ + .6 * nI * f6.width - aPZ * yz.width, nK), ue.drawImage(yz, 0, 0), ue.setTransform(1, 0, 0, 1, 0, 0), ue
				.imageSmoothingEnabled = !0
		}
	}
}

function aML() {
	var aMc, aPa, aPb, uP;

	function aPc(aB) {
		t.u(8, t.sl, new sm(21, {
			t4: aB,
			t5: 0,
			t6: 10
		}))
	}
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aPa.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aPb = [new w(L(299), function() {
		aPc(1)
	}, 0, 0, 1), new w(L(300), function() {
		aPc(2)
	}, 0, 0, 1), new w(L(301), function() {
		aPc(3)
	}, 0, 0, 1), new w(L(302), function() {
		aPc(0)
	}, 0, 0, 1), new w(L(303), function() {
		aPc(9)
	}, 0, 0, 1), new w(L(304), function() {
		aPc(10)
	}, 0, 0, 1), new w(L(305), function() {
		aPc(11)
	}, 0, 0, 1)], uP = [new w("⬅️ " + L(36), function() {
		t.a13()
	})], aMc = new uO(L(306), uP), aPa = new r5(aPb, aMc.uU)
}

function aCM(title, qK, aPd) {
	var aMc, aOk;
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aOk.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aPd = aPd || [new w("⬅️ " + L(36), function() {
		t.a13()
	}, bA.oL)], aMc = new uO(title, aPd), aOk = new s0(aMc.uU, qK), b9.qX.textAlign(aMc.uU.style, 1)
}

function aP2(data) {
	var aMc, aPe, f6, sb;

	function aPf(jO) {
		var el = data.data.length;
		if (el) {
			for (var t5, max = min = parseInt(data.data[0][0]), aB = 1; aB < el; aB++) var aEA = parseInt(data.data[aB][0]),
				min = Math.min(aEA, min),
				max = Math.max(aEA, max);
			t5 = jO < 0 ? min + jO : max + 1, t.u(8, t.a4t().aM9, new sm(21, {
				t4: data.t4,
				t5: t5,
				t6: t5 + Math.abs(jO)
			}))
		}
	}
	this.show = function() {
			aMc.show(), this.resize()
		}, this.ro = function() {
			aMc.ro()
		}, this.resize = function() {
			aMc.resize(), aPe.resize()
		}, this.a1v = function(f6) {
			2 === f6 && aMc.uV[0].qo()
		}, f6 = data.data.length ? 0 : 1, f6 = [new w("⬅️ " + L(36), function() {
			t.a13()
		}), new w(L(307), function() {
			aPf(-10)
		}, f6, 0, 1), new w(L(308), function() {
			aPf(10)
		}, f6, 0, 1), new w(L(256), function() {
			t.u(11, 10, new aPg({
				t4: data.t4
			}))
		})], sb = [L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(304), L(305), L(319)], aMc = new uO(sb[data.t4], f6),
		function() {
			var aB, eo = {
					sV: []
				},
				sV = eo.sV,
				aPi = data.data,
				el = aPi.length;
			el && 0 === aPi[0][0] && 0 <= (e6 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t4]) && (t.y.t7[e6] = aPi[0][1]);
			var nI = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t4],
				a3s = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t4],
				e6 = [
					[L(320), L(321) + " ↗", L(322)],
					[L(320), L(323), L(324), L(325) + " ↗"],
					[L(320), L(321) + " ↗", L(324)],
					[L(320), L(321) + " ↗", L(324)],
					[L(326), L(327), L(328) + " ↗", L(329) + " ↗", L(118)],
					[L(326), L(327), L(330) + " ↗", L(331) + " ↗", L(332)],
					[L(326), L(327), L(333) + " ↗", L(334) + " ↗", L(335)],
					[L(326), L(327), L(330) + " ↗", L(331) + " ↗", L(336)],
					[L(326), L(327), L(328) + " ↗", L(329) + " ↗", L(118)],
					[L(320), L(321) + " ↗", L(324)],
					[L(320), L(321) + " ↗", L(337)],
					[L(320), L(321) + " ↗", L(324)],
					[L(326), L(327), L(338) + " ↗", L(339) + " ↗", L(340)]
				];
			if (eo.sb = e6[data.t4], eo.sg = [
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
				][data.t4], 0 === data.t4 || 2 === data.t4 || 3 === data.t4 || 9 === data.t4 || 10 === data.t4 || 11 === data.t4)
				for (aB = 0; aB < el; aB++) sV.push([{
					fD: aPi[aB][0] + 1 + ".",
					dr: 0
				}, {
					fD: aPi[aB][1],
					dr: 1,
					sj: aPi[aB][4],
					sk: aPi[aB][3]
				}, {
					fD: (nI * aPi[aB][2]).toFixed(a3s),
					dr: 0
				}]);
			else if (12 === data.t4)
				for (aB = 0; aB < el; aB++) {
					var aPl = aPi[aB][3];
					sV.push([{
						fD: "" + aPi[aB][0],
						dr: 0
					}, {
						fD: "" + aPi[aB][4],
						dr: 0
					}, {
						fD: aPi[aB][5],
						dr: 1,
						sj: aPi[aB][1],
						sk: 0
					}, {
						fD: aPi[aB][6],
						dr: 1,
						sj: aPi[aB][2],
						sk: 0
					}, {
						fD: bn.eC(aPl % 16, aPl >> 4),
						dr: 0
					}])
				} else if (1 === data.t4)
					for (aB = 0; aB < el; aB++) sV.push([{
						fD: aPi[aB][0] + 1 + ".",
						dr: 0
					}, {
						fD: aPi[aB][1],
						dr: 0
					}, {
						fD: (nI * aPi[aB][2]).toFixed(a3s),
						dr: 0
					}, {
						fD: aPi[aB][3],
						dr: 1,
						sj: aPi[aB][5],
						sk: aPi[aB][4]
					}]);
				else if (4 === data.t4 || 5 === data.t4 || 6 === data.t4 || 7 === data.t4 || 8 === data.t4)
				for (aB = 0; aB < el; aB++) {
					var aPm = aPi[aB][5];
					4 === data.t4 || 8 === data.t4 ? "100%" === (aPm = (aPm % 64 * 100 / (aPm >> 6)).toFixed(0) + "%") && (4 === data.t4 ? aPm += " (" + L(341) + ")" : aPm += " (" + L(342) + ")") : 5 === data.t4 ? 32768 <= aPm && (aPm = -(aPm -
						32768)) : aPm = (nI * aPm).toFixed(a3s), sV.push([{
						fD: "" + aPi[aB][0],
						dr: 0
					}, {
						fD: "" + aPi[aB][6],
						dr: 0
					}, {
						fD: aPi[aB][7],
						dr: 1,
						sj: aPi[aB][1],
						sk: aPi[aB][2]
					}, {
						fD: aPi[aB][8],
						dr: 1,
						sj: aPi[aB][3],
						sk: aPi[aB][4]
					}, {
						fD: "" + aPm,
						dr: 0
					}])
				}
			aPe = new sU(aMc.uU, eo)
		}()
}

function aPg(a3i) {
	var aMc, aMd, qS;
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aMd.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(L(343), [new w("⬅️ " + L(36), function() {
		t.aMa(10)
	})]), aMd = new qQ(aMc.uU, ((qS = []).push(function() {
		var aN4, aMv = new qA,
			aOU = new rL(bi.eI.data[132], 1, function() {
				aN4.button.click()
			}),
			aOV = new rL(bi.eI.data[131], 1, function() {
				aOU.e.focus()
			});
		aMv.qD(L(261)), aMv.qO(aOV), aOV.e.style.marginBottom = "0.8em", aMv.qD(L(262)), aMv.qO(aOU);
		return aN4 = new w(L(260), function() {
			t5 = Math.floor(aOV.e.value), t6 = Math.floor(aOU.e.value);
			var t6, t5 = {
				a2P: Math.min(t5, t6),
				aLk: Math.max(t5, t6)
			};
			t.u(8, t.a4u(10).aM9, new sm(21, {
				t4: a3i.t4,
				t5: t5.a2P,
				t6: t5.aLk
			}))
		}, 0, 0, 1), aMv.qO(new s1([aN4.button])), aMv
	}()), qS.push(function() {
		var aN4, aMv = new qA,
			aOU = new rL(bi.eI.data[134], 1, function() {
				aN4.button.click()
			}),
			aOV = new rL(bi.eI.data[133], 0, function() {
				aOU.e.focus()
			});
		return aMv.qD(1 === a3i.t4 ? L(344) : L(345)), aMv.qO(aOV), aOV.e.style.marginBottom = "0.8em", aMv.qD(L(346)), aMv.qO(aOU), aN4 = new w(L(260), function() {
			var aOu = aOV.e.value.slice(0, 20),
				aOv = Math.abs(Math.floor(aOU.e.value));
			t.u(8, t.a4u(10).aM9, new sm(22, {
				t4: a3i.t4,
				aOu: aOu,
				aOv: aOv
			}))
		}, 0, 0, 1), aMv.qO(new s1([aN4.button])), aMv
	}()), qS.push(function() {
		var aN4, aMv = new qA,
			aOU = new rL(bi.eI.data[152], 1, function() {
				aN4.button.click()
			}),
			aOV = new rL(bi.eI.data[151], 0, function() {
				aOU.e.focus()
			});
		return aMv.qD(L(347)), aMv.qO(aOV), aOV.e.style.marginBottom = "0.8em", aMv.qD(L(346)), aMv.qO(aOU), aN4 = new w(L(260), function() {
			var aOu = aOV.e.value.slice(0, 5),
				aOv = Math.abs(Math.floor(aOU.e.value));
			t.u(8, t.a4u(10).aM9, new sm(28, {
				t4: a3i.t4,
				aOu: aOu,
				aOv: aOv
			}))
		}, 0, 0, 1), aMv.qO(new s1([aN4.button])), aMv
	}()), qS))
}

function aMY() {
	var aPq, tH, aPt, tG, tJ, aPr = [new Array(4), [], new Array(2), new Array(2)],
		aPs = new Array(4),
		aPu = new Array(2),
		aPv = [L(60), L(303), L(348), L(349)];

	function aDv() {
		var a6l = aPq.tU.rK.e.value.trim().slice(0, 127);
		a6l.length < 1 || (aPq.tU.rK.e.value = "", bm.aCP.zw(a6l))
	}

	function aPy(aQ0) {
		bm.y.rb[3] = 1 - bm.y.rb[3], aPz(3, 1, bm.y.rb[3]), aQ0 && az.aE6.aE7(4), bm.y.rb[3] && bi.ry.rz(158, bm.y.rb[0])
	}

	function aPw(f4, f5) {
		bm.y.rb[f4] !== f5 && (0 === f4 && bm.y.rb[3] && aPy(0), aPz(f4, bm.y.rb[f4], 0), aPz(f4, f5, 1), bm.y.rb[f4] = f5, 0 === f4 ? (az.aE6.aE7(2, f5), bm.y.rb[2] ? (aPq.tV.mT(), aPq.tU.rY(1)) : aPq.tU.rY(0), t.a4t().aDk(), t.a4t().aDj()) : 2 ===
			f4 && (0 === f5 ? (az.aE6.aE7(0), aPq.tU.mT(), aPq.td()) : (az.aE6.aE7(1), aPq.tV.mT(), aPq.te())))
	}

	function aPz(f4, f5, color) {
		aPq.tX[f4].r6[f5].qr(color ? bA.o5 : bA.os)
	}

	function aQ3(aCy) {
		return aCy < 7 ? aCy + 2 + " " + L(356) : 7 === aCy || 10 === aCy ? L(303) + " (Full-Sending: " + L(7 === aCy ? 357 : 358) + ")" : 8 === aCy ? "1v1" : L(359)
	}

	function aQ4(fD) {
		var a6o = bK.ds(fD, 60),
			fD = fD % 60;
		return (a6o < 10 ? "0" : "") + a6o + ":" + (fD < 10 ? "0" : "") + fD
	}
	this.aEI = function() {
		return aPq.tU
	}, this.aCP = function(sj) {
		aPw(2, 0);
		var qE = aPq.tU.rK.e.value,
			sj = "@" + sj + " ";
		qE.length && !b9.rW.a3B(qE, " ") && (sj = " " + sj), aPq.tU.rK.e.value = qE += sj, aPq.tU.rK.e.focus()
	}, this.aDi = function() {
		aPq.tV.mT()
	}, this.aDk = function() {
		var aQ2 = bm.y.rb[0],
			aQ2 = bm.y.rd[aQ2];
		bR.a7(aQ2.eR, aQ2.mapSeed), tH.r6[0].button.textContent = L(280) + ": " + bR.wH.wI[aQ2.eR].name, tH.r6[1].button.textContent = L(282, 0, "Mode") + ": " + aQ3(aQ2.aCy), tH.r6[2].button.textContent = L(353) + ": " + bR.wH.wI[aQ2.aEg].name,
			tH.r6[3].button.textContent = L(354, 0, "Next Mode") + ": " + aQ3(aQ2.aEh), tH.r6[4].button.textContent = L(355) + ": " + aQ4(aQ2.aDm), tH.resize()
	}, this.aDj = function() {
		var aQ2 = bm.y.rb[0],
			rc = bm.y.rd[aQ2];
		aPq.tb(rc.tc);
		for (var aB = 0; aB < bm.tr.ts.length; aB++) aPr[0][aB].rV.textContent = "" + bm.tr.ts[aB].length;
		var tr = bm.tr.ts[aQ2],
			aQ5 = tr.length,
			aQ6 = bm.tr.tt[aQ2];
		aPr[2][1].rV.textContent = "" + aQ5, aPr[3][1].rV.textContent = "" + aQ6, tH.r6[4].button.textContent = L(355) + ": " + aQ4(rc.aDm);
		for (aB = 0; aB < 4; aB++) {
			var aQ7 = bm.y.rd[aB];
			aPs[aB] ? 0 === aQ7.tc && (aPs[aB].rV.textContent = bR.wH.wI[aQ7.eR].name) : aPs[aB] = new rU(bR.wH.wI[aQ7.eR].name, tG.r6[aB].button, 1, 1), b9.rW.startsWith(aPv[aB], "🏆 ") ? aQ7.aD4 || (aPv[aB] = aPv[aB].substring(3), tG.r6[aB]
				.button.textContent = aPv[aB], tG.r6[aB].button.appendChild(aPr[0][aB].rV), tG.r6[aB].button.appendChild(aPs[aB].rV)) : aQ7.aD4 && (aPv[aB] = "🏆 " + aPv[aB], tG.r6[aB].button.textContent = aPv[aB], tG.r6[aB].button
				.appendChild(aPr[0][aB].rV), tG.r6[aB].button.appendChild(aPs[aB].rV))
		}
		var rc = "",
			aQ9 = "";
		0 === aQ2 && (rc = bm.kv.aDI(tr, 0, aQ5), aQ9 = bm.kv.aDI(tr, 0, aQ6)), aPt[0].rV.textContent = rc, aPt[1].rV.textContent = aQ9, aPu[1].rV.textContent = "MP: " + bm.y.aDb[0] + "   SP: " + bm.y.aDb[1] + "   Lobby: " + b9.qf.a2c(bm.tr.ts)
	}, this.aDo = function() {
		aPq.tU.mT()
	}, this.show = function() {
		aPq.show(), this.resize(), bm.message.show()
	}, this.ro = function() {
		aPq.ro(), bm.uD.ro(), bm.tp.ro(), bm.message.ro()
	}, this.resize = function() {
		aPq.resize(1 - bm.y.rb[2]), bm.message.resize()
	}, this.a1v = function(f6) {
		2 === f6 ? bm.y.rb[3] ? aPy(1) : aPq.tX[3].r6[0].qo() : f6 < 2 && aPy(1)
	}, tG = new s4([new w(aPv[0], function() {
		return aPw(0, 0), 2
	}), new w(aPv[1], function() {
		return aPw(0, 1), 2
	}), new w(aPv[2], function() {
		return aPw(0, 2), 2
	}), new w(aPv[3], function() {
		return aPw(0, 3), 2
	})], bA.os), tH = new s4([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bA.ot, 1);
	var aPx = new s4([new w(L(350), function() {
		return aPw(2, 0), 2
	}), new w(L(114), function() {
		return aPw(2, 1), 2
	})], bA.os);
	tJ = new s4([new w(L(351), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bm.u7(), az.y.a1D(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bm.u7(), az.y.a1D(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(352), function() {
		return aPy(1), 2
	})], bA.os), aPq = new tF(tG, tH, aPx, tJ, aDv, bm.uD.aER);
	for (var aB = 0; aB < 4; aB++) aPr[0][aB] = new rU("0", tG.r6[aB].button);
	aPr[2][1] = new rU("0", aPx.r6[1].button), aPr[3][1] = new rU("0", tJ.r6[1].button), aPt = [new rU("", aPx.r6[1].button, 1, 1), new rU("", tJ.r6[1].button, 1, 1)], aPz(0, bm.y.rb[0], 1), aPz(2, bm.y.rb[2], 1), (aPu = [new rU(L(254), aPq.tf(), 1,
		0), new rU("", aPq.tf(), 1, 1)])[0].rV.style.fontSize = "0.4em", aPu[1].rV.style.fontSize = "0.4em"
}

function aMF() {
	var aMc, aMd, qS;
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aMd.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(L(360), [new w("⬅️ " + L(36), function() {
		t.u(7, t.a4u(7).aM9)
	}), new w(L(192), function() {
		bi.ry.rz(105, bF.so.w1(aMd.qU[0].qB[0].e.value, 5)), bi.ry.rz(106, bF.so.w1(aMd.qU[1].qB[0].e.value, 8)), t.u(8, t.a4u(7).aM9, new sm(18))
	})]), aMd = new qQ(aMc.uU, ((qS = []).push(function() {
		var aMv = new qA;
		return aMv.qD(L(173)), aMv.qO(new rL({
			value: "",
			e6: -1
		})), aMv
	}()), qS.push(function() {
		var aMv = new qA,
			aN6 = (aMv.qD(L(175)), new rL({
				value: "",
				e6: -1
			}));
		return aN6.e.type = "password", aMv.qO(aN6), aMv.qO(new s1([new w(L(176), function(e) {
			return e.textContent === L(176) ? (e.textContent = L(177), aN6.e.type = "text") : (e.textContent = L(176), aN6.e.type = "password"), !0
		}).button])), aMv
	}()), qS))
}

function aMM() {
	var aMc, aPa, aPb, uP;

	function aPc(aB) {
		t.u(8, t.sl, new sm(21, {
			t4: aB,
			t5: 0,
			t6: 10
		}))
	}
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aPa.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aPb = [new w(L(314), function() {
		aPc(5)
	}, 0, 0, 1), new w(L(315), function() {
		aPc(6)
	}, 0, 0, 1), new w(L(316), function() {
		aPc(7)
	}, 0, 0, 1), new w(L(319), function() {
		aPc(12)
	}, 0, 0, 1)], uP = [new w("⬅️ " + L(36), function() {
		t.a13()
	})], aMc = new uO(L(361), uP), aPa = new r5(aPb, aMc.uU)
}

function aM5() {
	this.eI = {}, this.t7 = new Array(7), this.aMK = null, this.aMH = null, this.sS = 0, this.aHa = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4g = function() {
		t.x(), aZ.db()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.db()
	}), this.aBy = function() {
		t.u(0 === aa.a14() ? 5 : 0)
	}, this.aOT = function() {
		if (1 === bi.eI.data[130].value) t.u(8, t.a4t().aM9, new sm(24, {
			aNz: bi.eI.data[125].value,
			t5: bi.eI.data[128].value,
			t6: bi.eI.data[129].value
		}));
		else {
			for (var g = (g = bi.eI.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a4t().aM9, new sm(23, {
				aNz: bi.eI.data[125].value,
				a0X: g
			}))
		}
	}, this.aPU = function(aM9, target) {
		t.u(4, aM9, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bJ.aQB +
			"' target='_blank'>" + bJ.aQB + "</a>", !1, [new w("⬅️ " + L(36), function() {
				t.u(aM9)
			}), new w("✅ Accept", function() {
				bi.ry.rz(140, 1), 0 === target ? t.u(2, aM9) : t.u(8, aM9, new sm(target))
			})]))
	}, this.aQC = function() {
		for (var aB = 0; aB < 7; aB++) this.t7[aB] = bF.vs.vw(bG.pe(5));
		this.t7[1] = "[" + this.t7[1] + "]", 5 === t.sl && (t.a4t().aGD.rz(this.t7), t.a4t().resize())
	}
}

function aMP() {
	var aNW, aNX, aQD, qS;

	function aNZ() {
		b5.u7(), t.aMb()[19] = null, t.a13()
	}

	function aQK() {
		aQN(), aQL()
	}

	function aQN() {
		aQD.qC.lastChild && aQD.qC.removeChild(aQD.qC.lastChild)
	}

	function aQL() {
		var aQO = bR.a4m(aD.data);
		aD.data.canvas = bR.aK4(aQO, aD.data.mapSeed).wR, aQM()
	}

	function aQM() {
		var a2h = aD.data.canvas;
		a2h.style.width = "100%", aQD.qC.appendChild(a2h)
	}
	this.aHK = function(a2h) {
		aD.data.canvas && aQN(), aD.data.canvas = a2h, aQM()
	}, this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(280), [new w("⬅️ " + L(36), aNZ)]), 2 === aD.data.mapType && b5.db(), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), aMv.qL(new uJ({
			uN: [L(362), L(363), L(364)],
			value: aD.data.mapType
		}, function(e6) {
			2 === (aD.data.mapType = e6) ? (b5.db(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b5.u7()), t.u(20)
		})), 2 <= aD.data.mapType && (aMv.qO(new sB), aMv.qO(new rv({
			value: aD.data.passableWater
		}, L(365), function(value) {
			aD.data.passableWater = value
		})), aMv.qO(new rv({
			value: aD.data.passableMountains
		}, L(366), function(value) {
			aD.data.passableMountains = value
		})));
		qS.push(aMv)
	}(qS = []), function(qS) {
		if (0 === aD.data.mapType) {
			for (var aMv = new qA, uN = (aMv.qD(L(280)), []), aB = 0; aB < bR.wH.aL0.length; aB++) uN.push(bR.wH.wI[bR.wH.aL0[aB]].name);
			aMv.qL(new uJ({
				uN: uN,
				value: aD.data.mapProceduralIndex
			}, function(e6) {
				aD.data.mapProceduralIndex = e6, aQK()
			})), qS.push(aMv)
		}
	}(qS), function(qS) {
		if (1 === aD.data.mapType) {
			for (var aMv = new qA, uN = (aMv.qD(L(280)), []), aB = 0; aB < bR.wH.aL1.length; aB++) uN.push(bR.wH.wI[bR.wH.aL1[aB]].name);
			aMv.qL(new uJ({
				uN: uN,
				value: aD.data.mapRealisticIndex
			}, function(e6) {
				aD.data.mapRealisticIndex = e6, aQK()
			})), qS.push(aMv)
		}
	}(qS), function(qS) {
		var aMv;
		2 === aD.data.mapType && ((aMv = new qA).qD(L(280)), aMv.qO(new s1([new w(L(367), function() {
			return b5.aHD(), !0
		}).button])), qS.push(aMv))
	}(qS), function(qS) {
		(aQD = new qA).qD(L(368)), 2 !== aD.data.mapType ? aQL() : aD.data.canvas && aQM();
		qS.push(aQD)
	}(qS), function(qS) {
		var aMv, rK, aN4;
		0 === aD.data.mapType && ((aMv = new qA).qD("Seed"), rK = new rL({
			e6: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aQK())
		}), aN4 = new w(L(273), function(e) {
			var aJz = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aJz) return rK.e.value = aD.data.mapSeed = aJz, aQK(), !0
		}), aMv.qO(rK), aMv.qO(new s1([aN4.button])), qS.push(aMv))
	}(qS), function(qS) {
		var aMv, rK;
		2 === aD.data.mapType && ((aMv = new qA).qD(L(369)), rK = new rL({
			e6: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aMv.qO(rK), qS.push(aMv))
	}(qS), qS))
}

function v(title, qK, aQP, aPd) {
	var aMc, aOk;
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aOk.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aPd = aPd || [new w("⬅️ " + L(36), function() {
		t.a13()
	})], aMc = new uO(title, aPd), aOk = new s0(aMc.uU, qK), aQP && b9.qX.textAlign(aMc.uU.style, 1)
}

function aMS() {
	var aNW, aNX, aNY, qS;

	function aNZ() {
		aNb(), 2 === aD.data.playerNamesType && 1 === b9.qf.a2L(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		2 === aD.data.playerNamesType && b9.qf.a2Z(aNY.uv(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(284), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), aMv.qL(new uJ({
			uN: [L(285), L(286), L(251)],
			value: aD.data.playerNamesType
		}, function(e6) {
			aNb(), aD.data.playerNamesType = e6, t.u(23)
		})), aMv.qO(new sB), aMv.qO(new rv({
			value: aD.data.selectableName
		}, L(370), function(value) {
			aD.data.selectableName = value
		})), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv;
		2 === aD.data.playerNamesType && ((aMv = new qA).qD("Data"), aNY = new um(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ei || (aD.data.playerNamesData = new Array(aD.ei), aD.data.playerNamesData
			.fill("")), aNY.ut(b9.rW.a45(aD.data.playerNamesData, 1, '"')), aMv.qO(aNY), qS.push(aMv))
	}(qS), qS))
}

function aMD() {
	var aNW, ur;

	function aQQ() {
		t.x();
		var qE = b8.aQU(ur.uv());
		(aD.zs && 0 < qE.length && qE === b8.pr.a4c || b8.aHk.wC(qE)) && b8.aQV()
	}
	this.show = function(aQR) {
		this.aQS(aQR), aNW.show(), this.resize()
	}, this.aQS = function(aQR) {
		0 === aD.zs ? aQR ? ur.ut(aQR) : aD.a4P.length && ur.ut(aD.a4P) : (aD.gu || (b8.pr.a4c = b8.a4d.zK()), ur.ut(b8.aQT(b8.pr.a4c)))
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), ur.resize()
	}, this.a1v = function(f6) {
		2 === f6 ? aNW.uV[0].qo() : aQQ()
	}, aNW = new uO(L(371), [new w("⬅️ " + L(36), function() {
		t.aMa(1)
	}), new w(L(372), function() {
		ur.uw()
	}), new w(L(373), function() {
		ur.ux()
	}), new w(L(374), function() {
		ur.clear()
	}), new w(L(375), function() {
		aQQ()
	})]), ur = new um(L(376)), aNW.uU.appendChild(ur.e)
}

function aMC() {
	var aMc, aMd, qS, aBu, aMv;

	function aQW() {
		var eK;
		aBu !== bi.eI.data[12].value ? (b6.db(), b6.aBt(), eK = be.eK, t.u(4, 1, new v(L(379), L(380), !1, [new w("⬅️ " + L(36), function() {
			t.u(1)
		}), new w("🔄 Reload", function() {
			be.eK < eK + 1500 || a0.a1.a2()
		}, bA.o3)]))) : t.u(1)
	}
	this.show = function() {
			aBu = bi.eI.data[12].value, aMc.show(), this.resize()
		}, this.ro = function() {
			aMc.ro()
		}, this.resize = function() {
			aMc.resize(), aMd.resize()
		}, this.a1v = function(f6) {
			2 === f6 && aMc.uV[0].qo()
		}, aMc = new uO(L(377), [new w("⬅️ " + L(36), aQW), new w(L(378), function() {
			t.x(), bi.ry.vZ(), t.u(2)
		})]), qS = [], (aMv = new qA).qD(L(381)), aMv.qF(L(382)), qS.push(aMv),
		function(qS) {
			var aMv = new qA,
				g = (aMv.qD(L(403)), b6.data.aC2());
			aMv.qL(new uJ({
				uN: g,
				value: b6.data.aC6(g)
			}, function(e6) {
				return bi.ry.rz(12, g[e6].split(":")[0]), !0
			})), qS.push(aMv)
		}(qS),
		function(qS) {
			var aMv = new qA,
				aQZ = (aMv.qD(L(401)), []);
			aMv.qO(new s1([new w(L(402), function(e) {
				bW.aQa();
				for (var aB = 0; aB < aQZ.length; aB++) aQZ[aB].e.value = bW.aBK[aB];
				return b9.qX.a3A(e), !0
			}).button]));
			for (var aB = 0; aB < bW.aQb.length; aB++) {
				aMv.qF(bW.aQb[aB]);
				for (var f4 = 0; f4 < 2; f4++) {
					var e6 = 2 * aB + f4,
						rK = new rL({
							value: bW.aBK[e6],
							e6: -1
						});
					rK.e.aQc = e6, aQZ.push(rK), rK.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bW.aQd(e.target.aQc, code)
					}), f4 && (rK.e.style.marginLeft = "4%"), rK.e.style.width = "48%", aMv.qO(rK)
				}
			}
			qS.push(aMv)
		}(qS), (aMv = new qA).qD(L(23)), aMv.qL(new uJ({
			uN: ["1", "2"],
			value: aZ.aFQ - 1
		}, function(aB) {
			aZ.aFQ = aB + 1
		})), qS.push(aMv), (aMv = new qA).qD(L(383)), bi.eI.data[1].uN = [L(384), L(385), L(386), L(387)], aMv.qL(new uJ(bi.eI.data[1])), qS.push(aMv), (aMv = new qA).qD(L(388)), bi.eI.data[9].uN = [L(385), L(389), L(390)], aMv.qL(new uJ(bi.eI.data[
			9])), qS.push(aMv), (aMv = new qA).qD(L(391)), bi.eI.data[11].uN = [L(392), L(9), L(393)], aMv.qL(new uJ(bi.eI.data[11])), qS.push(aMv), (aMv = new qA).qD(L(394)), aMv.qO(new rv(bi.eI.data[2])), qS.push(aMv), (aMv = new qA).qD(L(395)),
		aMv.qO(new rv(bi.eI.data[7])), qS.push(aMv), (aMv = new qA).qD(L(396)), aMv.qO(new rv(bi.eI.data[8])), qS.push(aMv), (aMv = new qA).qD(L(397)), aMv.qO(new rL(bi.eI.data[5])), qS.push(aMv), (aMv = new qA).qD(L(398)), aMv.qO(new rv(bi.eI.data[
			13], L(399))), aMv.qO(new rv(bi.eI.data[14], L(400))), qS.push(aMv), aMd = new qQ(aMc.uU, qS)
}

function aMT() {
	var aNW, aNX, aNY, qS;

	function aNZ() {
		aNb(), 2 !== aD.data.spawningType || b9.qf.a2L(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		2 === aD.data.spawningType && b9.qf.a2X(aNY.uv(), aD.data.spawningData, bR.aHM - 1)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(404), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA,
			uN = (aMv.qD(L(248)), [L(273), L(283), L(251)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uN.splice(1, 1), 0 < value) && (value = 1);
		aMv.qL(new uJ({
			uN: uN,
			value: value
		}, function(e6) {
			aNb(), aD.data.spawningType = e6, 0 === aD.data.gameMode && 1 === e6 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ei)), t.u(24)
		})), aMv.qO(new sB), aMv.qO(new rv({
			value: aD.data.selectableSpawn
		}, L(405), function(value) {
			aD.data.selectableSpawn = value
		})), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv = new qA;
		aMv.qD("Seed"), aMv.qO(new rL({
			e6: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qS.push(aMv)
	}(qS), function(qS) {
		var aMv;
		2 === aD.data.spawningType && ((aMv = new qA).qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.spawningData, 2)), aMv.qO(aNY), qS.push(aMv))
	}(qS), qS))
}

function aMB() {
	var aMc, aPa, aPb, uP;

	function aQe(id) {
		0 !== a0.id || bi.eI.data[140].value ? 0 === id ? t.u(8, 1, new sm(16)) : t.u(2) : t.y.aPU(t.sl, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aMc.show(), this.resize(), this.j1()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aPa.resize()
	}, this.j1 = function() {
		8 === aa.a14() && (2 <= bc.aQj ? aPb[2].qp === bA.ns && aPb[2].qr(0) : aPb[2].qp !== bA.ns && aPb[2].qr(bA.ns), !aD.gu && aM.q8(aD.eV) ? aPb[1].qp === bA.ns && aPb[1].qr(0) : aPb[1].qp !== bA.ns && aPb[1].qr(bA.ns), !aD.gu && av.ha(aD
			.eV) ? aPb[0].qp === bA.ns && aPb[0].qr(0) : aPb[0].qp !== bA.ns && aPb[0].qr(bA.ns))
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aPb = [new w(L(406), function() {
		aQe(0)
	}), new w(L(306), function() {
		t.u(16)
	}), new w(L(361), function() {
		t.u(17)
	}), new w(L(407), function() {
		t.y.aOT()
	}, 0, 0, 1), new w(L(371), function() {
		t.u(3, 1)
	}), new w(L(408), function() {
		t.u(18)
	}), new w(L(377), function() {
		aQe(1)
	}), new w(L(409), function() {
		var sb = ["Patreon", L(418), L(419), "YouTube Tutorial", "Discord", L(420), L(299), L(421), L(302), L(422), "Terms", "Privacy"],
			a36 = [bJ.aNU, bJ.aCJ, bJ.a0x, "https://www.youtube.com/watch?v=6QBmA9N1668", bJ.aCK, bJ.aQk, bJ.aQl, bJ.a0e, bJ.aQm, bJ.aQn, bJ.aQo, bJ.aQB];
		1 === a0.id ? (sb.splice(2, 1), sb.splice(0, 1), a36.splice(2, 1), a36.splice(0, 1)) : 2 === a0.id && (sb.splice(1, 1), sb.splice(0, 1), a36.splice(1, 1), a36.splice(0, 1)), t.u(4, 1, new v(L(409), b9.qX.a35(sb, a36), !1, [new w(
			"⬅️ " + L(36),
			function() {
				t.u(1)
			})]))
	}), new w(L(410), function() {
		t.u(4, 1, new v(L(410), l.dt + "<br><a href='" + bJ.aQk + "' target='_blank'>" + bJ.aQk + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(36), function() {
				t.u(1)
			})]))
	}), new w(L(411), function() {
		t.u(4, 1, new v(L(411), L(423) + "<br>" + L(424), !1, [new w("⬅️ " + L(36), function() {
			t.u(1)
		}), new w(L(425), function() {
			a0.a1.a0r(), t.u(1)
		})]))
	}), new w(L(412), function() {
		a0.a1.a0s(), t.u(4, 1, new v(L(426), L(427) + " <a href='" + bJ.aQB + "' target='_blank'>" + bJ.aQB + "</a>", !1, [new w("⬅️ " + L(36), function() {
			t.u(1)
		})]))
	})], uP = [new w("⬅️ " + L(36), function() {
		t.y.aBy()
	})], 8 === aa.a14() && (aPb.unshift(new w(L(294), function() {
		t.u(30)
	})), aPb.unshift(new w(L(415), function() {
		2 <= bc.aQj && (t.x(), bd.a1y(), be.dj = !0)
	}, 0, 1)), aPb.unshift(new w(L(416), function() {
		!aD.gu && aM.q8(aD.eV) && (b7.hB.pL(), t.x(), aM.gv) && aM.a1y()
	}, 0, 1)), aPb.unshift(new w(L(417), function() {
		!aD.gu && av.ha(aD.eV) && (bU.a5G(2), b7.hB.hW(), t.x(), aM.gv) && aM.a1y()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dt && aPb.push(new w(L(413), function() {
		a0.a1.a0t()
	})), aMc = new uO(L(414), uP), aPa = new r5(aPb, aMc.uU)
}

function aMX() {
	var aNW, aNX, aNY, qS;

	function aNZ() {
		aNb(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		2 === aD.data.sResourcesType && b9.qf.a2X(aNY.uv(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(289), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), aMv.qL(new uJ({
			uN: [L(249), L(250), L(251)],
			value: aD.data.sResourcesType
		}, function(e6) {
			aNb(), 2 !== e6 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ei)), aD.data.sResourcesType = e6, t.u(28)
		})), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv;
		1 === aD.data.sResourcesType && ((aMv = new qA).qD("Value"), aMv.qO(new rL({
			e6: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bK.ht(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qS.push(aMv))
	}(qS), function(qS) {
		var aMv;
		2 === aD.data.sResourcesType && ((aMv = new qA).qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.sResourcesData, 2)), aMv.qO(aNY), qS.push(aMv))
	}(qS), qS))
}

function aMV() {
	var aNW, aNX, aNY, qS;

	function aNZ() {
		aNb(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aMb()[19] = null, t.a13()
	}

	function aNb() {
		2 === aD.data.tIncomeType && b9.qf.a2X(aNY.uv(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aNW.show(), this.resize()
	}, this.ro = function() {
		aNW.ro()
	}, this.resize = function() {
		aNW.resize(), aNX.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aNW.uV[0].qo()
	}, aNW = new uO(L(287), [new w("⬅️ " + L(36), aNZ)]), aNX = new qQ(aNW.uU, (function(qS) {
		var aMv = new qA;
		aMv.qD(L(248)), aMv.qL(new uJ({
			uN: [L(249), L(250), L(251)],
			value: aD.data.tIncomeType
		}, function(e6) {
			aNb(), 2 !== e6 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ei), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e6, t.u(26)
		})), qS.push(aMv)
	}(qS = []), function(qS) {
		var aMv;
		1 === aD.data.tIncomeType && ((aMv = new qA).qD("Value"), aMv.qO(new rL({
			e6: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bK.ht(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qS.push(aMv))
	}(qS), function(qS) {
		var aMv;
		2 === aD.data.tIncomeType && ((aMv = new qA).qD("Data"), (aNY = new um(0, 1, 0, 1)).ut(b9.rW.a45(aD.data.tIncomeData, 4)), aMv.qO(aNY), qS.push(aMv))
	}(qS), qS))
}

function aMN() {
	var aMc, aMd, qS;
	this.show = function() {
		aMc.show(), this.resize()
	}, this.ro = function() {
		aMc.ro()
	}, this.resize = function() {
		aMc.resize(), aMd.resize()
	}, this.a1v = function(f6) {
		2 === f6 && aMc.uV[0].qo()
	}, aMc = new uO(L(408), [new w("⬅️ " + L(36), function() {
		t.a13()
	})]), aMd = new qQ(aMc.uU, ((qS = []).push(function() {
		function aN1() {
			aQt.button.textContent = L(170), aQr.e.readOnly = !1, aQs.e.readOnly = !1, aMz.qr(1), aMz.button.style.color = bA.ng
		}
		var aMv = new qA,
			aQq = (aMv.qD(L(428)), new rL({
				value: bi.eI.data[105].value,
				e6: -1
			})),
			aQr = (aQq.e.readOnly = !0, aMv.qO(aQq), aMv.qD(L(331), "0.8em"), new rL(bi.eI.data[148])),
			aQr = new rL(bi.eI.data[148], 0, void 0, function(e) {
				aMy(bi.eI.data[149].value, e.target.value)
			}),
			aQs = (aMv.qO(aQr), aMv.qD(L(335), "0.8em"), new rL(bi.eI.data[149], 1, void 0, function(e) {
				aMy(e.target.value, bi.eI.data[148].value)
			})),
			aQt = (aMv.qO(aQs), new w(L(170), function(e) {
				return e.textContent === L(170) ? (e.textContent = L(171), aQr.e.readOnly = !0, aQs.e.readOnly = !0, aMz.qr(0), aMz.button.style.color = bA.od, bi.ry.rz(149, aQs.e.value), aMy(bi.eI.data[149].value, bi.eI.data[
					148].value)) : aN1(), !0
			})),
			aMz = (aMv.qO(new s1([aQt.button])), new w(L(14), function(e) {
				return aQr.e.readOnly && az.y.aN0(0) && (b9.qX.a3A(e), aN1(), az.aN2.aN3({
					sn: 0,
					sj: bi.eI.data[148].value,
					value: parseInt(bi.eI.data[149].value, 10)
				})), !0
			}, 1)),
			qG = aMv.qF(),
			aMy = (aMv.qF(L(429)).style.fontWeight = "bold", function(fD, qE) {
				fD = b9.g7.a3f(fD, 2, 1e6);
				var aN5 = Math.max(1, 1 + Math.floor(.01 * (fD - 100)));
				qG.textContent = L(172, [fD, bi.eI.data[105].value, aN5, qE, fD - aN5])
			});
		return aMv.qO(new s1([aMz.button])), aMy(bi.eI.data[149].value, bi.eI.data[148].value), aMv
	}()), qS))
}

function bv() {
	"function" != typeof Math.log2 && (Math.log2 = function(es) {
		return Math.log(es) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(es) {
		return Math.log(es) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(es) {
		return 0 < es ? 1 : es < 0 ? -1 : 0
	})
}

function cg() {
	var a99, aQv, aQw, aQx, aQu = !1;

	function aQy() {
		aQu = !0, a99 = -1, aQv = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aQv[aB] = !1;
		var xH = Math.floor(1 + .02 * h.min);
		aQw = new Array(4), (aQx = new Array(4))[1] = aQx[3] = aQw[0] = aQw[2] = 0, aQx[0] = aQw[3] = -xH, aQw[1] = aQx[2] = xH
	}

	function aQz() {
		if (-1 !== a99)
			if (0 !== aD.zs && aH.nO()) {
				for (var aR0 = !1, aB = 3; 0 <= aB; aB--) aQv[aB] && (aR0 = !0, iM += aQw[aB], iN += aQx[aB], af.a1N(aQw[aB], aQx[aB]), aS.a8p());
				aR0 ? be.dj = !0 : aq.nE()
			} else aq.nE()
	}
	this.a1t = function(e6) {
		0 !== aD.zs && aH.nO() && (aQu || aQy(), aQv[e6] = !0, -1 === a99) && (a99 = setInterval(aQz, 20), aQz())
	}, this.a1w = function(e6) {
		if (0 !== aD.zs && (aQu || aQy(), aQv[e6] = !1, -1 !== a99)) {
			for (var aR0 = !1, aB = 3; 0 <= aB; aB--) aR0 = aR0 || aQv[aB];
			aR0 || this.nE()
		}
	}, this.nE = function() {
		if (aQu && -1 !== a99) {
			for (var aB = 3; 0 <= aB; aB--) aQv[aB] = !1;
			clearInterval(a99), a99 = -1
		}
	}
}

function ch() {
	this.y = new aR1, this.mO = new aR2, this.p1 = new aR3, this.aE6 = new aR4, this.aBv = new aR5, this.aN2 = new aR6, this.pd = new aR7, this.aOr = new aR8, this.a6Q = new aR9, this.aRA = new aRB, this.aRC = new aRD, this.aRE = new aRF, this.aRG =
		new aRH, this.db = function() {
			this.y.db()
		}
}

function aR1() {
	var aRI, aRK;
	this.aFT = 5, this.aRJ = null;

	function aRR(aB) {
		return aRK[aB].aQu && aRI[aB].aRR()
	}

	function aRT(a0z) {
		aRK[a0z].eK = be.eK, aRK[a0z].aRM = !1
	}
	this.a19 = 0, this.a12 = 0, this.db = function() {
		this.aRJ = new Array(this.aFT);
		this.aRJ[0] = "territorial.io";
		var aJz = ax.aKL(0);
		ax.a4S(0);
		for (var aB = 1; aB < this.aFT; aB++) this.aRJ[aB] = aK.zQ() + ".territorial.io";
		for (ax.a4S(aJz), aRI = new Array(this.aFT), aRK = new Array(this.aFT), aB = this.aFT - 1; 0 <= aB; aB--) aRK[aB] = {
			aQu: !1,
			eK: 0,
			aRM: !1
		};
		this.aFU(0, 0)
	}, this.aRN = function(aB) {
		return aRI[aB]
	}, this.j1 = function() {
		for (var aB = this.aFT - 1; 0 <= aB; aB--) this.aN0(aB) && be.eK > aRK[aB].eK + 15e3 && az.p1.aRO(aB, aRK[aB].aRM);
		!this.aN0(0) && be.eK > aRK[0].eK + 8e3 && (aRK[0].eK = be.eK, this.aFU(0, 0))
	}, this.aOn = function(id) {
		return this.aFU(0, id) && this.aRP(0)
	}, this.aFU = function(a0z, aM9) {
		if (aRK[a0z].aQu) {
			if (aRI[a0z].aRR()) return aRI[a0z].aRS(aM9), aRI[a0z].aN0();
			aRI[a0z].ro()
		}
		return this.aRQ(a0z, aM9), !1
	}, this.aRQ = function(a0z, aM9) {
		aRK[a0z].aQu = !0, aRT(a0z), aRI[a0z] = new aRU, aRI[a0z].db(a0z, aM9)
	}, this.aRS = function(a0z, aM9) {
		aRR(a0z) && aRI[a0z].aRS(aM9)
	}, this.aRV = function(a0z, aM9) {
		az.aBv.aRW(a0z)
	}, this.aRP = function(aB) {
		return this.aN0(aB) && aRI[aB].aRP()
	}, this.aRX = function(aB) {
		aRI[aB].aRX()
	}, this.aN0 = function(aB) {
		return aRK[aB].aQu && aRI[aB].aN0()
	}, this.send = function(a0z, aC) {
		aRT(a0z), aRI[a0z].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a1e = function(a0z) {
		8 === aa.a14() && (aRK[a0z].aRM = !0, az.mO.aRY = !0)
	}, this.close = function(a0z, aRZ) {
		aRR(a0z) && aRI[a0z].close(aRZ)
	}, this.aRa = function(a0z, aRZ) {
		o.a1C(aRZ), aRR(a0z) && aRI[a0z].close(aRZ)
	}, this.a1D = function(aRZ) {
		for (var aB = this.aFT - 1; 0 <= aB; aB--) this.close(aB, aRZ)
	}, this.aRb = function(a0z, aRZ) {
		for (var aB = this.aFT - 1; 0 <= aB; aB--) aB !== a0z && this.close(aB, aRZ)
	}, this.a4e = function() {
		this.close(this.a19, 3246)
	}, this.aRc = function(a0z, e) {
		aRI[a0z].ro(), o.a0y(a0z, e.code)
	}
}

function aR2() {
	this.aRY = !1, this.j1 = function() {
		be.k5() % 250 != 249 || aD.gu || (az.aBv.aRd(+(this.aRY && ag.mg[aD.eV]), al.k9 + bM.y.lx), this.aRY = !1)
	}
}

function aR9() {
	function aS4(aS5) {
		var eo = aD.data,
			aS5 = (eo.selectedPlayer = bG.pe(aS5), eo.spawningSeed = bG.pe(14), bG.pe(4)),
			aS5 = (aS5 < 7 ? (eo.gameMode = 1, eo.numberTeams = aS5 + 2) : 9 === aS5 ? (eo.gameMode = eo.isZombieMode = 1, eo.numberTeams = 2) : (eo.gameMode = 0, eo.battleRoyaleMode = 7 === aS5 ? 0 : 10 === aS5 ? 1 : 2), eo.isContest = bG.pe(1), bG
				.pe(6));
		return eo.mapType = bR.aD5(aS5) ? 0 : 1, bR.aD6(eo, aS5), eo.mapSeed = bG.pe(14), aS5
	}
	this.aRf = function(a0z, aC) {
		bG.db(aC), 0 === bG.size ? az.y.aRa(a0z, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bG.pe(1) ? function(a0z) {
			var aRj = bG.pe(6);
			0 === aRj ? function(a0z) {
					if (0 === a0z && 8 !== aa.a14()) {
						t.y.aQC();
						for (var aRw = bG.pe(12), aRx = bG.pe(6), g = new Array(aRw), aB = 0; aB < aRw; aB++) g[aB] = bG.pe(aRx);
						aT.a9F(g)
					}
				}(a0z) : 2 === aRj ? az.aRA.aRl(a0z) : 3 === aRj || 4 === aRj ? aw.db() : 9 === aRj ? az.aRC.aRm(a0z) : 10 === aRj ? az.aRE.aRn() : 11 === aRj ? az.aRC.aRo(a0z) : 12 === aRj ? az.aRE.aRp() : 13 === aRj ? az.aRG.aRq() :
				14 === aRj ? az.aRG.aRr() : 15 === aRj ? az.aRC.aRs() : 16 === aRj ? az.aRA.aRt(a0z) : 17 === aRj ? az.aRA.aRu(a0z) : 19 === aRj && az.aRA.aRv(a0z)
		} : function(a0z) {
			if (8 !== aa.a14() && !aw.aFy()) return;
			if (a0z !== az.y.a19) az.y.aRa(a0z, 3244);
			else if (0 === bG.pe(1)) be.a01.aS6(bG.aC);
			else {
				var aB, a0z = bG.pe(2);
				if (0 === a0z) {
					var pG, p1 = bG.pe(9);
					0 !== ag.mg[p1] && 0 !== ag.mg[aD.eV] && (pG = bG.pe(10), aN.pF(p1, aD.eV, pG), af.q6(p1, 1, pG))
				} else if (1 === a0z) ! function() {
					var p1 = bG.pe(9);
					0 !== ag.mg[p1] && 0 !== ag.mg[aD.eV] && b4.aJk(0, [p1], !0) && aN.pW(p1, 1)
				}();
				else if (2 === a0z) ! function() {
					var p1 = bG.pe(9),
						target = bG.pe(9);
					0 !== ag.mg[p1] && 0 !== ag.mg[target] && 0 !== ag.mg[aD.eV] && b4.aJk(1, [p1], !0) && (af.q6(p1, 3, 96), af.q6(target, 4, 96), aN.a6X(p1, target))
				}();
				else if (l.a9 && !l.aA) {
					var el = 540;
					for (bC.a7(17287), bC.a8(1, 0), bC.a8(6, 10), el = Math.min(b7.oy.pg.length, 540), aB = 0; aB < el; aB++) bC.aSC(32, b7.oy.pg[aB]);
					az.y.send(az.y.a19, bC.aC)
				}
			}
		})(a0z), be.aRi())
	}, this.aRy = function(aC) {
		if (bG.db(aC), bG.e6 = 1, 3 === bG.pe(6)) {
			bG.e6 += 20;
			var eo = aD.data = new a4L,
				aC = aS4(9),
				aD7 = eo.humanCount = bG.pe(9) + 1;
			eo.selectableSpawn = 1 === eo.gameMode || aD7 < 100, eo.colorsData = new Uint32Array(aD7), eo.playerNamesData = new Array(aD7);
			for (var aB = 0; aB < aD7; aB++) bG.e6++, eo.colorsData[aB] = bG.pe(18), eo.playerNamesData[aB] = bF.vs.vw(bG.pe(5));
			aa.aFf(), bR.a7(aC, eo.mapSeed), aD.a4Q()
		} else ! function() {
			bG.e6 += 20;
			var eo = aD.data = new a4L,
				aS3 = aS4(1);
			eo.humanCount = 2;
			eo.selectableSpawn = 1, eo.elo = new Uint16Array(2), eo.colorsData = new Uint32Array(2), eo.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bG.e6++, eo.colorsData[aB] = bG.pe(18), eo.elo[aB] = bG.pe(14), eo.playerNamesData[aB] = bF.vs.vw(bG.pe(5));
			aa.aFf(), bR.a7(aS3, eo.mapSeed), aD.a4Q()
		}()
	}, this.aS1 = function() {
		bG.e6 = 1;
		var aRj = bG.pe(6),
			aS2 = bG.pe(10);
		return az.y.a12 === aS2 ? (az.y.a19 = aS2, !1) : (az.y.close(az.y.a12, 3247), az.y.a19 = aS2, aw.aD2 = bG.pe(10), aw.aFn = bG.pe(3 === aRj ? 9 : 1), az.y.aFU(aS2, 5) && az.p1.aFu(), !0)
	}
}

function aRF() {
	this.aRn = function() {
		bi.y.vQ(), bi.ry.rz(105, bE.so.sp(bE.so.sq(5))), bi.ry.rz(106, bE.so.sp(bE.so.sq(8))), bi.ry.rz(109, bG.pe(30)), bi.ry.rz(108, bi.eI.data[109].value), bi.ry.rz(111, bi.eI.data[109].value + 1), bi.ry.rz(107, 0), bi.ry.rz(110, "")
	}, this.aRp = function() {
		var data;
		bG.size < bC.aSD(29) ? az.y.aRa(0, 3254) : ((data = {
			sk: bG.pe(30),
			vd: bG.pe(16),
			ve: bG.pe(30),
			vf: bG.pe(30),
			vg: bG.pe(30),
			vh: bG.aSE(32),
			username: bF.vu.wC(5),
			vi: bF.vu.wC(3),
			vj: bF.vu.wC(3),
			vk: bG.aSE(32),
			vl: bG.aSE(32),
			vm: bG.pe(30),
			vn: bG.aSE(32),
			vo: bG.aSE(32),
			vp: bG.aSE(32),
			vq: bG.aSE(32),
			aNA: bG.aSE(32),
			aNB: bG.aSE(30),
			aNM: bG.aSE(32),
			aNN: bF.vu.wC(3),
			aNF: bG.aSE(2),
			aNG: bG.aSE(10),
			aND: bF.vu.wC(8),
			aNH: bG.aSE(5),
			aMx: bG.pe(30),
			aN9: bG.pe(30),
			a0J: bG.aSE(32),
			aNO: bG.pe(1),
			aNP: bG.pe(1)
		}).aNO && (data.aNQ = bG.aSE(32), data.aNR = bG.pe(30), data.aNS = bG.pe(30), data.aNT = bG.pe(1)), 8 === t.sl && (25 === t.a4t().aOm ? (data.aMe = !0, t.y.aMK = data, t.a4t().aP1(25, !1)) : (data.aMe = !1, bi.ry.rz(160, +(data
			.aNO && data.aNT)), data.sj = bi.eI.data[105].value, t.y.aMH = data, bi.ry.vc(data), t.a4t().aP1(16, !0))))
	}
}

function aRH() {
	this.aRq = function() {
		var aB;
		if (bG.size < bC.aSD(23)) az.y.aRa(0, 3259);
		else {
			var t4 = bG.pe(6),
				el = bG.pe(10),
				data = [];
			if (9 === t4 || 10 === t4 || 11 === t4) {
				for (aB = 0; aB < el; aB++) data.push([bG.pe(30), bF.vu.wC(5), bG.aSE(32), 0, bG.pe(30)]);
				8 === t.sl && t.a4t().aP1(21, !0, {
					t4: t4,
					data: data
				})
			} else if (12 === t4) {
				for (aB = 0; aB < el; aB++) data.push([bG.pe(20), bG.pe(30), bG.pe(30), bG.aSE(32), bG.pe(30), bF.vu.wC(5), bF.vu.wC(5)]);
				8 === t.sl && t.a4t().aP1(21, !0, {
					t4: t4,
					data: data
				})
			} else {
				var hi = bG.pe(16);
				if (bG.aSF(39 + 16 * hi + el * (0 === t4 ? 111 : 1 === t4 ? 101 : 2 === t4 || 3 === t4 ? 127 : 212))) {
					if (0 === t4)
						for (aB = 0; aB < el; aB++) data.push([bG.pe(30), bF.vs.vw(bG.pe(5)), bG.pe(16), bG.pe(30), bG.pe(30)]);
					else if (1 === t4)
						for (aB = 0; aB < el; aB++) data.push([bG.pe(16), bF.vs.vw(bG.pe(3)), bG.pe(16), bF.vs.vw(bG.pe(5)), bG.pe(31), bG.pe(30)]);
					else if (2 === t4 || 3 === t4)
						for (aB = 0; aB < el; aB++) data.push([bG.pe(30), bF.vs.vw(bG.pe(5)), bG.aSE(32), bG.pe(30), bG.pe(30)]);
					else
						for (aB = 0; aB < el; aB++) data.push([bG.pe(20), bG.pe(30), bG.pe(30), bG.pe(30), bG.pe(30), bG.aSE(32), bG.pe(30), bF.vs.vw(bG.pe(5)), bF.vs.vw(bG.pe(5))]);
					8 === t.sl && t.a4t().aP1(21, !0, {
						t4: t4,
						data: data
					})
				} else az.y.aRa(0, 3260)
			}
		}
	}, this.aRr = function() {
		if (bG.size < bC.aSD(29)) az.y.aRa(0, 3265);
		else {
			var aSG = bG.pe(4),
				aSH = bG.pe(7),
				aSI = bG.pe(11);
			if (bG.aSF(29 + 16 * aSH + 16 * aSI + 11 * aSG)) {
				for (var data = [], aB = 0; aB < aSG; aB++) {
					for (var a0Y = bF.vs.vw(bG.pe(3)), aSJ = bG.pe(8), aO0 = [], f4 = 0; f4 < aSJ; f4++) aO0.push(bG.pe(16));
					data.push({
						name: "[" + a0Y + "]",
						aO0: aO0
					})
				}
				8 === t.sl && t.a4t().aP1(23, !0, data)
			} else az.y.aRa(0, 3266)
		}
	}
}

function aRB() {
	function aSL() {
		var id = bG.pe(3);
		return 0 === id ? {
			id: id,
			sj: bG.pe(30),
			r: bm.aCP.aEC(bF.vu.wC(7))
		} : 1 === id ? {
			id: id,
			sj: bG.pe(30),
			aDD: bG.pe(3),
			value: bG.pe(30),
			target: bG.pe(30)
		} : 2 === id ? {
			id: id,
			sj: bG.pe(30),
			aDD: bG.pe(3)
		} : 3 === id ? {
			id: id,
			sj: bG.pe(30),
			aDD: bG.pe(3),
			value: bG.pe(4),
			target: bG.pe(30)
		} : 4 === id ? {
			id: id,
			sj: bG.pe(30),
			aDD: bG.pe(3),
			target: bG.pe(30)
		} : 5 === id ? {
			id: id,
			aDD: bG.pe(6)
		} : 6 === id ? {
			id: id,
			value: bG.pe(17)
		} : null
	}
	this.aRl = function(a0z) {
		if (a0z !== az.y.a12) az.y.close(a0z, 3239);
		else if (6 !== aa.a14()) az.y.close(a0z, 3271);
		else {
			bm.db();
			for (var aB = 0; aB < 4; aB++) {
				var rc = bm.y.rd[aB],
					playerCount = (rc.tc = bG.pe(10), rc.eR = bG.pe(6), rc.mapSeed = bG.pe(14), rc.aCy = bG.pe(4), rc.aEg = bG.pe(6), rc.aEh = bG.pe(4), rc.aD4 = bG.pe(1), rc.aDm = bG.pe(12), rc.spawningSeed = bG.pe(14), bG.pe(16));
				bm.tr.tt[aB] = bG.pe(16);
				for (var f4 = 0; f4 < playerCount; f4++) bm.tr.aCb(aB, bG.pe(30), bF.vu.wC(5), bG.pe(4), bG.pe(30), bG.pe(7), bG.pe(16), bG.pe(18), bG.pe(11), bG.pe(12))
			}
			t.u(29), bm.y.aDd(!0)
		}
	}, this.aRt = function(a0z) {
		if (a0z !== az.y.a12) az.y.close(a0z, 3239);
		else if (bm.a11) {
			bm.y.aDb[0] = bG.pe(20), bm.y.aDb[1] = bG.pe(20);
			for (var aSK = bG.pe(16), f4 = 0; f4 < aSK; f4++) {
				var id = bG.pe(3);
				0 === id ? bm.tr.aCb(bG.pe(2), bG.pe(30), bF.vu.wC(5), 0, 1234566, 127, 0, bG.pe(18), 0, bG.pe(12)) : 1 === id ? bm.tr.aCs(bG.pe(16), bG.pe(2)) : 2 === id ? bm.tr.aCo(bG.pe(16), bG.pe(2), bG.pe(2)) : 3 === id ? bm.tr.aCr(bG.pe(
					16), bG.pe(2)) : 4 === id ? bm.tr.aCh(bG.pe(16), bG.pe(2), bG.pe(4), bG.pe(30), bG.pe(7), bG.pe(16), bG.pe(11)) : 5 === id && bm.tr.aCi(bG.pe(16), bG.pe(2), bG.pe(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rc = bm.y.rd[aB];
				if (rc.tc = bG.pe(10), 0 === rc.tc) {
					if (rc.a19 = bG.pe(10), rc.aD2 = bG.pe(10), bm.aCQ.dk(aB)) return;
					rc.eR = bG.pe(6), rc.mapSeed = bG.pe(14), rc.aCy = bG.pe(4), rc.aEg = bG.pe(6), rc.aEh = bG.pe(4), rc.aD4 = bG.pe(1), rc.aDm = bG.pe(12), rc.spawningSeed = bG.pe(14), rc.aEi.push(rc.aEi[0]), rc.aEi.shift()
				}
			}
			bm.y.aDf()
		} else az.y.close(a0z, 3251)
	}, this.aRu = function(a0z) {
		if (a0z !== az.y.a12) az.y.close(a0z, 3272);
		else if (bm.a11) {
			for (var ra = bG.pe(4), rc = bm.y.rd[ra], re = rc.re, u6 = (rc.rf = bG.pe(20), bG.pe(6)), aB = 0; aB < u6; aB++) {
				var aEz = aSL();
				bm.rn.aEy(aEz), re.push(aEz)
			}
			bm.y.aDn(ra)
		} else az.y.close(a0z, 3273)
	}, this.aRv = function(a0z) {
		a0z !== az.y.a12 ? az.y.close(a0z, 3276) : bm.a11 ? bm.message.aE8(aSL()) : az.y.close(a0z, 3277)
	}
}

function aRD() {
	this.aRm = function(a0z) {
		var aS8, r3;
		bG.aSF(70) ? (aS8 = bG.pe(3), r3 = bh.aSM.j1(bG.pe(30), bG.pe(30)), az.aBv.aSN(a0z, r3, aS8), 0 < aS8 || (0 === a0z && 0 === bi.eI.data[105].value.length ? az.aBv.aOq(0) : az.aN2.aSO(a0z), 4 === az.y.aRN(a0z).aSP() ? 6 === aa.a14() && az
			.aE6.aFV(a0z) : 5 !== az.y.aRN(a0z).aSP() || 8 !== aa.a14() && 10 !== aa.a14() || az.p1.aFu())) : az.y.aRa(a0z, 3269)
	}, this.aRo = function(a0z) {
		var id = bG.pe(6);
		1 === id ? (bi.ry.rz(160, bG.pe(30)), az.y.aRX(a0z), aT.a9B || az.aBv.aOq(1), b6.aBt(), 8 === t.sl && t.a4t().aP0()) : 21 === id ? 8 === t.sl && t.a4t().aP1(17) : 22 === id && (bi.ry.rz(106, bi.eI.data[110].value), bi.ry.rz(110, ""),
			8 === t.sl) && t.a4t().aP1(15)
	}, this.aRs = function() {
		var el = bG.pe(16),
			aSQ = bG.pe(16);
		if (bG.aSF(55 + 10 * el + 16 * aSQ)) {
			for (var g = [], aB = 0; aB < el; aB++) g.push(bF.vs.vw(bG.pe(10)));
			b6.aBx(g)
		} else az.y.aRa(0, 3270)
	}
}

function aR3() {
	this.aRO = function(a0z, aRM) {
		bC.a7(8), bC.a8(1, 0), bC.a8(6, 4), bC.a8(1, aRM ? 1 : 0), az.y.send(a0z, bC.aC)
	}, this.aFu = function() {
		bC.a7(58), bC.a8(1, 0), bC.a8(6, 5), bC.a8(8, az.y.a12), bC.a8(10, aw.aD2), bC.a8(9, aw.aFn), bC.a8(10, l.dv), bC.a8(14, l.dn), az.y.send(az.y.a19, bC.aC)
	}, this.p2 = function(eX) {
		bC.a7(27), bC.a8(1, 1), bC.a8(4, 0), bC.a8(22, eX), az.y.send(az.y.a19, bC.aC)
	}, this.p3 = function(iL, jI) {
		bC.a7(25), bC.a8(1, 1), bC.a8(4, 1), bC.a8(10, iL), bC.a8(10, jI), az.y.send(az.y.a19, bC.aC)
	}, this.p7 = function(iL, p5) {
		bC.a7(24), bC.a8(1, 1), bC.a8(4, 2), bC.a8(10, iL), bC.a8(9, p5), az.y.send(az.y.a19, bC.aC)
	}, this.p9 = function(iL, p8) {
		bC.a7(42), bC.a8(1, 1), bC.a8(4, 3), bC.a8(10, iL), bC.a8(27, p8), az.y.send(az.y.a19, bC.aC)
	}, this.pB = function(iL, n3) {
		bC.a7(31), bC.a8(1, 1), bC.a8(4, 4), bC.a8(10, iL), bC.a8(16, n3), az.y.send(az.y.a19, bC.aC)
	}, this.pE = function(jI) {
		bC.a7(15), bC.a8(1, 1), bC.a8(4, 5), bC.a8(10, jI), az.y.send(az.y.a19, bC.aC)
	}, this.pI = function(e6) {
		bC.a7(15), bC.a8(1, 1), bC.a8(4, 6), bC.a8(10, e6), az.y.send(az.y.a19, bC.aC)
	}, this.pK = function(pJ) {
		bC.a7(6), bC.a8(1, 1), bC.a8(4, 7), bC.a8(1, pJ), az.y.send(az.y.a19, bC.aC)
	}, this.pM = function() {
		bC.a7(5), bC.a8(1, 1), bC.a8(4, 8), az.y.send(az.y.a19, bC.aC)
	}, this.pN = function(iL, eX, jI) {
		bC.a7(47), bC.a8(1, 1), bC.a8(4, 10), bC.a8(10, iL), bC.a8(10, jI), bC.a8(22, eX), az.y.send(az.y.a19, bC.aC)
	}, this.pU = function(aSR, aSS) {
		bC.a7(24), bC.a8(1, 1), bC.a8(4, 15), bC.a8(9, aSS), bC.a8(10, aSR), az.y.send(az.y.a19, bC.aC)
	}, this.pX = function(a6Q) {
		bC.a7(14), bC.a8(1, 1), bC.a8(4, 14), bC.a8(9, a6Q), az.y.send(az.y.a19, bC.aC)
	}, this.pb = function(aST, target) {
		var aB, el = aST.length;
		for (bC.a7(14 + 9 * el), bC.a8(1, 1), bC.a8(4, 13), bC.a8(9, target), aB = 0; aB < el; aB++) bC.a8(9, aST[aB]);
		az.y.send(az.y.a19, bC.aC)
	}
}

function aR6() {
	this.aSU = function() {
		bC.a7(39), bC.a8(1, 0), bC.a8(6, 16), az.aBv.aSV(), az.y.send(0, bC.aC)
	}, this.aSO = function(a0z) {
		bC.a7(115), bC.a8(1, 0), bC.a8(6, 17), bF.so.w8(bi.eI.data[105].value, 5), bF.so.w8(bi.eI.data[106].value, 8), bC.a8(30, bi.eI.data[109].value), az.y.send(a0z, bC.aC)
	}, this.aP3 = function() {
		bC.a7(55), bC.a8(1, 0), bC.a8(6, 18), bF.so.w7(bi.eI.data[110].value), az.y.send(0, bC.aC)
	}, this.aOz = function(a3i) {
		var el = a3i.qE.length;
		bC.a7(21 + 16 * el), bC.a8(1, 0), bC.a8(6, 29), bC.a8(6, a3i.sn), bC.a8(8, el), bE.vs.w7(a3i.qE), az.y.send(0, bC.aC)
	}, this.aNI = function(data) {
		bC.a7(43), bC.a8(1, 0), bC.a8(6, 25), bC.a8(6, data.sn), bF.so.w8(data.sj, 5), az.y.send(0, bC.aC)
	}, this.aN3 = function(data) {
		bC.a7(75), bC.a8(1, 0), bC.a8(6, 27), bC.a8(6, data.sn), bF.so.w8(data.sj, 5), bC.aSC(32, data.value), az.y.send(0, bC.aC)
	}
}

function aR7() {
	this.pc = function() {
		for (var el = aD.k8, zh = bQ.result.zh, l1 = zh.length, yK = (bC.a7(17 + 16 * el + 33 * l1), bC.a8(1, 1), bC.a8(4, 12), bC.a8(10, l1), bC.a8(1, +(2 === aD.zp)), bC.a8(1, aD.a09 % 2), ag.yK), aB = 0; aB < el; aB++) bC.a8(16, yK[aB]);
		for (var gZ = ag.gZ, aB = 0; aB < l1; aB++) {
			var gJ = zh[aB];
			bC.a8(9, gJ), bC.a8(24, gZ[gJ])
		}
		az.y.send(az.y.a19, bC.aC)
	}
}

function aR8() {
	this.aOs = function(t4, t5, t6) {
		bC.a7(75), bC.a8(1, 0), bC.a8(6, 21), bC.a8(6, t4), bC.a8(1, +(t5 < 0)), bC.a8(1, +(t6 < 0)), bC.a8(30, Math.abs(t5)), bC.a8(30, Math.abs(t6)), az.y.send(0, bC.aC)
	}, this.aOt = function(t4, aOu, aOv) {
		bC.a7(18 + 16 * aOu.length + 30), bC.a8(1, 0), bC.a8(6, 22), bC.a8(6, t4), az.aBv.aSX(aOu), bC.a8(30, aOv), az.y.send(0, bC.aC)
	}, this.aOy = function(t4, aOu, aOv) {
		bC.a7(73), bC.a8(1, 0), bC.a8(6, 28), bC.a8(6, t4), bF.so.w8(aOu, 5), bC.a8(30, aOv), az.y.send(0, bC.aC)
	}, this.aOw = function(aNz, a0X) {
		for (var el = a0X.length, hi = 0, aB = 0; aB < el; aB++) hi += a0X[aB].length;
		for (bC.a7(21 + 3 * el + 16 * hi), bC.a8(1, 0), bC.a8(6, 23), bC.a8(3, aNz), bC.a8(4, el), bC.a8(7, hi), aB = 0; aB < el; aB++) bC.a8(3, a0X[aB].length), bE.vs.w7(a0X[aB]);
		az.y.send(0, bC.aC)
	}, this.aOx = function(aNz, t5, t6) {
		bC.a7(52), bC.a8(1, 0), bC.a8(6, 24), bC.a8(3, aNz), bC.a8(1, +(t5 < 0)), bC.a8(1, +(t6 < 0)), bC.a8(20, Math.abs(t5)), bC.a8(20, Math.abs(t6)), az.y.send(0, bC.aC)
	}
}

function aR4() {
	this.aFV = function(a0z) {
		var username = bi.eI.data[122].value.slice(0, 20),
			username = (bC.a7(24 + 16 * username.length + 18 + 18), bC.a8(1, 0), bC.a8(6, 1), bC.a8(10, l.dv), bC.a8(2, bi.eI.data[158].value), az.aBv.aSX(username), b9.color.a2m(bi.y.vX())),
			username = (bC.a8(6, username[0]), bC.a8(6, username[1]), bC.a8(6, username[2]), b6.aBz());
		bC.a8(9, username[0]), bC.a8(9, username[1]), az.y.a12 = a0z, az.y.send(a0z, bC.aC)
	}, this.aE7 = function(aSa, a3i) {
		bD.db(), bD.a8(1, 0), bD.a8(6, 2), bD.a8(3, aSa), 2 === aSa ? bD.a8(2, a3i) : 3 === aSa ? bE.vu.zK(a3i, 7, bD) : 5 === aSa && (bD.a8(3, a3i.id), bD.a8(3, a3i.value), bD.a8(30, a3i.sj)), az.y.send(az.y.a12, bD.aSb())
	}
}

function aR5() {
	this.aRW = function(a0z) {
		bC.a7(39), bC.a8(1, 0), bC.a8(6, 13), bC.a8(14, l.dn), bC.a8(4, a0.id), bC.a8(7, a0.dt), bC.a8(1, +l.a9), bC.a8(1, +l.aA), bC.a8(5, (new Date).getHours() % 24), az.y.send(a0z, bC.aC)
	}, this.aSN = function(a0z, r3, aS8) {
		bC.a7(70), bC.a8(1, 0), bC.a8(6, 14), bC.a8(3, aS8), bC.a8(30, r3[0]), bC.a8(30, r3[1]), az.y.send(a0z, bC.aC)
	}, this.aOq = function(id) {
		bC.a7(13), bC.a8(1, 0), bC.a8(6, 15), bC.a8(6, id), az.y.send(0, bC.aC)
	}, this.aBw = function(id, qE) {
		var el = Math.min(qE.length, 63);
		bC.a7(19 + 16 * el), bC.a8(1, 0), bC.a8(6, 26), bC.a8(6, id), bC.a8(6, el), bE.vs.w7(qE), az.y.send(0, bC.aC)
	}, this.aSd = function(aS2, qP) {
		bC.a7(7 + 26 * qP.length), bC.a8(1, 0), bC.a8(6, 9);
		for (var aB = 0; aB < qP.length; aB++) bC.a8(16, qP[aB][0]), bC.a8(10, qP[aB][1]);
		az.y.send(aS2, bC.aC)
	}, this.aRd = function(aSe, aSf) {
		bC.a7(20), bC.a8(1, 0), bC.a8(6, 19), bC.a8(1, aSe), bC.a8(12, aSf), az.y.send(az.y.a19, bC.aC)
	}, this.aSX = function(username) {
		bC.a8(5, username.length), bE.vs.w7(username)
	}
}

function aRU() {
	var a0z, aM9, aSg, aSh = ["wss://", "/s50/", "/s51/", "/s52/"],
		aSi = 0;

	function aRV() {
		az.y.aRV(a0z, aM9)
	}

	function aSm(e) {
		az.a6Q.aRf(a0z, new Uint8Array(e.data))
	}

	function aSn() {}

	function aRc(e) {
		az.y.aRc(a0z, e)
	}
	this.db = function(e6, aSj) {
		a0z = e6, aM9 = aSj, e6 = l.dp ? "ws://localhost:" + (7130 + a0z) + "/" : aSh[0] + az.y.aRJ[a0z] + aSh[1 + l.dq], (aSg = new WebSocket(__fx.customLobby.isActive() && 1 === a0z ? __fx.customLobby.getSocketURL() : e6)).binaryType =
			"arraybuffer", aSg.onopen = aRV, aSg.onmessage = aSm, aSg.onclose = aRc, aSg.onerror = aSn
	}, this.aSl = function() {
		return aSg.readyState === aSg.CONNECTING
	}, this.aN0 = function() {
		return aSg.readyState === aSg.OPEN
	}, this.aRP = function() {
		return aSi
	}, this.aRX = function() {
		aSi = 1
	}, this.aRR = function() {
		return this.aSl() || this.aN0()
	}, this.aRS = function(aSj) {
		aM9 = aSj
	}, this.aSP = function() {
		return aM9
	}, this.send = function(aC) {
		this.aN0() && aSg.send(aC)
	}, this.close = function(aRZ) {
		this.aRR() && (aSg.close(aRZ), this.ro())
	}, this.ro = function() {
		aSg.onopen = null, aSg.onmessage = null, aSg.onclose = null, aSg.onerror = null
	}
}

function dI() {
	var aSo = !1,
		a6m = 0,
		i = 0,
		ss = 0,
		gap = 0,
		canvas = null,
		y4 = null,
		a2M = null;

	function aSq() {
		for (var aSw, aSu = 0, el = 0, f6 = Math.floor(i / 2), e5 = Math.floor(ss / 2), aSv = 1.5 * Math.PI, aB = aD.x6; 0 <= aB; aB--) el += a2M[aB], 0 === a2M[aB] && aSu++;
		if (aSo = !1, y4.clearRect(0, 0, i, i), y4.fillStyle = bA.nd, y4.fillRect(0, 0, i, i), y4.fillStyle = bA.ng, y4.fillRect(0, 0, i, gap), y4.fillRect(0, 0, gap, i), y4.fillRect(i - gap, 0, gap, i), y4.fillRect(0, i - gap, i, gap), 0 < el)
			if (aSu === aD.x6) {
				for (aB = aD.x6; 0 <= aB; aB--)
					if (0 < a2M[aB]) {
						! function(aB, f6, e5) {
							y4.fillStyle = bf.aT3[bf.kV[aB]], y4.beginPath(), y4.arc(f6, f6, e5, 0, 2 * Math.PI), y4.fill()
						}(aB, f6, e5);
						break
					}!
				function(f6) {
					var fontSize = f6 / 3;
					y4.font = b9.qX.sL(1, fontSize), y4.fillStyle = bA.ng, y4.fillText("100%", f6, f6 + .1 * fontSize)
				}(f6)
			} else {
				for (aB = 0; aB <= aD.x6; aB++) 0 < a2M[aB] && (! function(aB, f6, e5, aSv, aSw) {
					y4.fillStyle = bf.aT3[bf.kV[aB]], y4.beginPath(), y4.arc(f6, f6, e5, aSv, aSw), y4.lineTo(f6, f6), y4.fill()
				}(aB, f6, e5, aSv, aSw = aSv + 2 * Math.PI * a2M[aB] / el), function(f6, e5, aSv, aSw) {
					var fD = (aSw - aSv) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e5 * Math.min(fD, .37);
					fontSize < 8 || (aSv = (aSv + aSw) / 2, aSw = (__fx.settings.detailedTeamPercentage ? (100 * fD).toFixed(2) : Math.floor(100 * fD + .5)) + "%", e5 *= .525 - Math.max(.6 * (fD - .7), 0), y4.font = b9.qX.sL(1, fontSize), y4
						.fillStyle = bA.ng, y4.fillText(aSw, f6 + Math.cos(aSv) * e5, f6 + Math.cos(aSv + 1.5 * Math.PI) * e5))
				}(f6, e5, aSv, aSw), 0 !== aB && aT1(f6, e5, aSv), aSv = aSw);
				aT1(f6, e5, 1.5 * Math.PI)
			}!
		function(f6, e5) {
			y4.beginPath(), y4.arc(f6, f6, e5, 0, 2 * Math.PI), y4.stroke()
		}(f6, e5)
	}

	function aT1(f6, e5, aT4) {
		y4.beginPath(), y4.moveTo(f6, f6), y4.lineTo(f6 + Math.cos(aT4) * e5, f6 + Math.cos(aT4 + 1.5 * Math.PI) * e5), y4.stroke()
	}
	this.db = function() {
		if (aD.hf) {
			a6m = 0, a2M = new Uint32Array(aD.x6 + 1);
			for (var aB = aD.x6; 0 <= aB; aB--) a2M[aB] = 0;
			for (aB = al.k9 - 1; 0 <= aB; aB--) a2M[bf.ej[al.kA[aB]]] += 1;
			this.resize()
		} else a2M = y4 = canvas = null
	}, this.a7j = function() {
		return i
	}, this.resize = function() {
		aD.hf && (i = Math.floor(a0.a1.hu() && !aD.n9 ? .18 * h.min : .13 * h.hv), i = (i *= 1 + (.5 + .2 * a0.a1.hu()) * aD.n9) + i % 2, ss = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, y4 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), y4.lineWidth = gap, y4.strokeStyle = bA.ng, b9.qX.textAlign(y4, 1), b9.qX.textBaseline(y4, 1), aSq())
	}, this.ke = function() {
		var dr, kf = this.kg();
		return bf.kV[kf] || (kf = function() {
			for (var kf = -1, aB = aD.x6; 1 <= aB; aB--)(-1 === kf || a2M[aB] > a2M[kf]) && (kf = aB);
			return kf
		}(), dr = ag.gZ[li[0]], -1 !== kf && a2M[kf] > dr) ? a2M[kf] : dr
	}, this.a0m = function() {
		return a6m = 31, this.j1(), this.kg()
	}, this.kg = function() {
		for (var kf = 0, aB = aD.x6; 0 < aB; aB--) a2M[aB] > a2M[kf] && (kf = aB);
		return kf
	}, this.lg = function(aSs) {
		for (var gE = 0, kA = al.kA, ej = bf.ej, el = al.k9, fP = bN.fP, aB = 0; aB < el; aB++) {
			var gJ = kA[aB];
			ej[gJ] === aSs && (fP[gE++] = gJ)
		}
		bN.fG[0] = gE
	}, this.kh = function(aSs) {
		for (var gE = 0, kA = al.kA, ej = bf.ej, el = al.k9, fP = bN.fP, aB = 0; aB < el; aB++) {
			var gJ = kA[aB];
			ej[gJ] !== aSs && (fP[gE++] = gJ)
		}
		bN.fG[0] = gE
	}, this.a3F = function() {
		for (var gE = 0, aB = aD.x6; 0 <= aB; aB--) gE += 0 < a2M[aB];
		return gE
	}, this.j1 = function() {
		if (aD.hf && 32 <= ++a6m) {
			a6m = 0;
			for (var aB = aD.x6; 0 <= aB; aB--) a2M[aB] = 0;
			for (aB = al.k9 - 1; 0 <= aB; aB--) a2M[bf.ej[al.kA[aB]]] += ag.gZ[al.kA[aB]];
			aSo = !0
		}
	}, this.mT = function() {
		aD.hf && aSo && aSq()
	}, this.ud = function() {
		aD.hf && (aD.n9 ? ue.drawImage(canvas, bb.gap, bb.gap) : ue.drawImage(canvas, bb.gap, a7k + 2 * bb.gap))
	}
}

function dY() {
	function aTA(es, el, eu, zU, a90, fC) {
		if (!(eu < 1 || a90 < eu))
			for (var aB = 0; aB <= el; aB++) {
				var eP = bL.iP(es, eu);
				if (zU(eP)) return eP >> 2;
				es += fC
			}
		return -1
	}

	function aTE(eu, el, es, zU, aT8, fC) {
		if (!(es < 1 || aT8 < es)) {
			el = Math.max(el, 0);
			for (var aB = 0; aB <= el; aB++) {
				var eP = bL.iP(es, eu);
				if (zU(eP)) return eP >> 2;
				eu += fC
			}
		}
		return -1
	}

	function aTI(iC, iD, aT5) {
		return -1 !== iD && (-1 === iC || bL.iE(iD, aT5) < bL.iE(iC, aT5)) ? iD : iC
	}
	this.hA = function(aT5) {
		return this.zw(aT5, function(eP) {
			return ac.eg(eP)
		})
	}, this.hG = function(aT5) {
		return this.zw(aT5, function(eP) {
			return ac.aGd(eP, aD.eV)
		})
	}, this.zw = function(aT5, zU) {
		return function(aT5, aT6, zU) {
			for (var h0 = bL.et(aT5), h2 = bL.ev(aT5), aT8 = bR.ew - 2, a90 = bR.ex - 2, aT9 = -1, eo = 0; eo < aT6; eo++) {
				var a8z = Math.max(h0 - eo, 1),
					aKT = Math.max(h2 - eo, 1),
					xh = Math.min(h0 + eo, aT8),
					xg = Math.min(h2 + eo, a90),
					iC = aTA(h0, xh - h0, h2 - eo, zU, a90, 1),
					iD = aTA(h0 - 1, h0 - a8z - 1, h2 - eo, zU, a90, -1),
					xh = aTA(h0, xh - h0, h2 + eo, zU, a90, 1),
					a8z = aTA(h0 - 1, h0 - a8z - 1, h2 + eo, zU, a90, -1),
					aTD = aTE(h2, xg - h2 - 1, h0 - eo, zU, aT8, 1),
					aTF = aTE(h2 - 1, h2 - aKT - 2, h0 - eo, zU, aT8, -1),
					xg = aTE(h2, xg - h2 - 1, h0 + eo, zU, aT8, 1),
					aKT = aTE(h2 - 1, h2 - aKT - 2, h0 + eo, zU, aT8, -1);
				if (aT9 = aTI(aT9, iC, aT5), aT9 = aTI(aT9, iD, aT5), aT9 = aTI(aT9, xh, aT5), aT9 = aTI(aT9, a8z, aT5), aT9 = aTI(aT9, aTD, aT5), aT9 = aTI(aT9, aTF, aT5), aT9 = aTI(aT9, xg, aT5), 0 <= (aT9 = aTI(aT9, aKT, aT5)) && eo *
					eo >= bL.iE(aT9, aT5)) return aT9
			}
			return -1
		}(aT5, bL.hs(), zU)
	}
}

function d1() {
	function aTK(key) {
		var aQR;
		return "undefined" == typeof URLSearchParams || (aQR = window.location.search, "string" != typeof(aQR = new URLSearchParams(aQR).get(key))) || aQR.length < 1 ? null : aQR
	}
	this.dk = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aTK("account");
				if (!value && !(value = aTK("a"))) return void bH.clear();
				return bH.clear(), t.u(8, t.sl, new sm(1e3, {
					sn: 0,
					sj: value,
					sk: 0
				})), 1
			}()) {
			var value = aTK("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a0w = new URL(window.location.href);
		a0w.search = "";
		try {
			return history.replaceState(null, "", a0w.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aNV = function(key, value) {
		if (0 === a0.id) try {
			var a0w = new URL(window.location.href),
				gJ = a0w.searchParams;
			gJ.set(key, value), a0w.search = gJ.toString(), history.replaceState(null, "", a0w.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ci() {
	var aTM, g;
	this.db = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bK.ds(32768 * aB, 100);
		this.a4S(0)
	}, this.value = function(gJ) {
		return g[gJ]
	}, this.aKL = function() {
		return bK.ds(aTM - 1, 2)
	}, this.a4S = function(aJz) {
		aTM = 2 * aJz % 32768 + 1
	}, this.random = function() {
		return aTM = 167 * aTM % 32768
	}, this.jQ = function(mb) {
		return bK.ds(mb * this.random(), 32768)
	}, this.k0 = function(gJ) {
		return 0 !== gJ && this.random() < this.value(gJ)
	}, this.ii = function(f4, f5) {
		return f4 + this.jQ(f5 - f4)
	}
}

function cx() {
	this.pr = new aTN, this.a4d = new aTO, this.aHk = new aTP, this.db = function() {
		aD.gu || this.pr.db()
	}, this.j1 = function() {
		aD.gu || (this.pr.j1(), 3 !== t.sl) || be.k5() % 15 != 5 && 2 !== aD.zs || t.a4t().aQS()
	}, this.aQV = function() {
		0 === aD.zs && aa.aFf(), aD.a4M.a4l(), aD.data.canvas = null, az.y.close(az.y.a19, 3257), az.y.a19 = 0, aD.data.isReplay = 1, aD.a4Q()
	}, this.aQU = function(qE) {
		var aB = qE.indexOf("=");
		return 0 <= aB ? qE.substring(aB + 1) : qE
	}, this.aQT = function(qE) {
		return "https://territorial.io/?replay=" + qE
	}
}

function aTN() {
	this.aTR = null, this.aTS = null, this.aTT = null, this.aTU = null, this.aTV = null, this.aTW = null, this.a4c = "";
	var aTX = 0;
	this.db = function() {
		this.aTR = [], this.aTS = [], this.aTT = [], this.aTU = [], this.aTV = [0], this.aTW = [0], aTX = 0, this.a4c = ""
	}, this.ps = function(id, fU, fW, fY) {
		aD.gu || 2 === aD.zs || (0 === this.aTV[aTX] && (this.aTW[aTX] ? (this.aTV.push(1), this.aTW.push(0), aTX++) : this.aTV[aTX] = 1), this.aTR.push(id), this.aTS.push(fU), this.aTT.push(void 0 === fW ? 0 : fW), this.aTU.push(void 0 === fY ?
			0 : fY), this.aTW[aTX]++)
	}, this.j1 = function() {
		0 === this.aTV[aTX] ? this.aTW[aTX]++ : (this.aTV.push(0), this.aTW.push(0), aTX++)
	}
}

function aTP() {
	var aTY = 0;

	function aTc(qE, id) {
		aTY || (id ? 1 === id ? aN.a5s = L(431) + ": " + qE : t.u(4, 3, new v(L(432), qE, 1)) : t.u(4, 3, new v("⚠️ " + L(430), qE, 1)))
	}
	this.wC = function(qE, aTZ) {
		var qP;
		return aTY = aTZ, bF.so.w4(bF.so.w2(bF.so.w0(qE))), aN.a5s = "", !(! function() {
			if (bG.size < 10) aTc("File Too Small");
			else {
				var aTe = bG.pe(12),
					aSf = (aTe !== l.rVersion && aTc("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aTe) + ("   Compatible at territorial.io/" + aTe), 1), bG.pe(12)),
					aTf = bG.pe(31);
				if (aTf !== bG.size) aTc("Size Error: " + aTf + " " + bG.size);
				else if (function(j, aTe) {
						for (var gJ = bG.aC, el = bG.size, aSf = aTe, aB = 3; aB < el; aB++) aSf = aSf + gJ[aB] & 4095;
						return aSf === j || (aTc("Hash Error: " + aSf + " " + j + " " + el), !1)
					}(aSf, aTe)) return 1
			}
			return
		}() || (aTZ = bG, (qP = aD.data = new a4L).mapType = aTZ.pe(2), qP.mapProceduralIndex = aTZ.pe(8), qP.mapRealisticIndex = aTZ.pe(8), qP.mapSeed = aTZ.pe(14), qP.mapName = aTZ.aTh(5), 2 === qP.mapType && aTZ.aTi(), qP
			.passableWater = aTZ.pe(1), qP.passableMountains = aTZ.pe(1), qP.playerCount = aTZ.pe(10), qP.humanCount = aTZ.pe(10), qP.selectedPlayer = aTZ.pe(9), qP.gameMode = aTZ.pe(1), qP.playerMode = aTZ.pe(2), qP.battleRoyaleMode =
			aTZ.pe(2), qP.numberTeams = aTZ.pe(4), qP.isZombieMode = aTZ.pe(1), qP.isContest = aTZ.pe(1), qP.isReplay = aTZ.pe(1), qP.elo = aTZ.aTj(2, 14, 2), qP.colorsType = aTZ.pe(1), qP.colorsPersonalized = aTZ.pe(1), qP.colorsData =
			aTZ.aTj(10, 18, 512), qP.selectableColor = aTZ.pe(1), qP.teamPlayerCount = aTZ.aTj(4, 10, 9), qP.neutralBots = aTZ.pe(1), qP.botDifficultyType = aTZ.pe(2), qP.botDifficultyValue = aTZ.pe(4), qP.botDifficultyTeam = aTZ.aTj(4,
				4, 9), qP.botDifficultyData = aTZ.aTj(10, 4, 512), qP.spawningType = aTZ.pe(2), qP.spawningSeed = aTZ.pe(14), qP.spawningData = aTZ.aTj(11, 12, 1024), qP.selectableSpawn = aTZ.pe(1), qP.playerNamesType = aTZ.pe(2), qP
			.playerNamesData = aTZ.aTk(10, 5, 512), qP.selectableName = aTZ.pe(1), qP.aIncomeType = aTZ.pe(2), qP.aIncomeValue = aTZ.pe(8), qP.aIncomeData = aTZ.aTj(10, 8, 512), qP.tIncomeType = aTZ.pe(2), qP.tIncomeValue = aTZ.pe(8), qP
			.tIncomeData = aTZ.aTj(10, 8, 512), qP.iIncomeType = aTZ.pe(2), qP.iIncomeValue = aTZ.pe(8), qP.iIncomeData = aTZ.aTj(10, 8, 512), qP.sResourcesType = aTZ.pe(2), qP.sResourcesValue = aTZ.pe(11), qP.sResourcesData = aTZ.aTj(10,
				11, 512), ! function() {
				var i4 = bG,
					wD = i4.pe(5),
					aTl = i4.pe(30),
					aTm = i4.pe(30);
				if (aTl + aTm > 8 * i4.size) return void aTc("Corrupted File");
				return function(el) {
						var aTp = new Uint8Array(el),
							aTq = new Uint16Array(el),
							aTr = new Uint32Array(el),
							aTs = new Uint32Array(el);
						b8.pr.aTR = aTp, b8.pr.aTS = aTq, b8.pr.aTT = aTr, b8.pr.aTU = aTs;
						for (var aB = 0; aB < el; aB++) {
							var id = bG.pe(4);
							aTp[aB] = id, aTq[aB] = bG.pe(9), 0 === id ? aTr[aB] = bG.pe(22) : 1 === id ? (aTr[aB] = bG.pe(10), aTs[aB] = bG.pe(10)) : 2 === id ? (aTr[aB] = bG.pe(10), aTs[aB] = bG.pe(9)) : 3 === id ? (aTr[aB] = bG.pe(10),
								aTs[aB] = bG.pe(27)) : 4 === id ? (aTr[aB] = bG.pe(10), aTs[aB] = bG.pe(16)) : 5 === id || 6 === id ? aTr[aB] = bG.pe(10) : 7 === id ? aTr[aB] = bG.pe(1) : 10 === id && (aTr[aB] = bG.pe(20), aTs[aB] =
								bG.pe(22))
						}
					}(aTl),
					function(el, wD) {
						var aTV = new Uint8Array(el),
							aTW = new Array(el);
						aTW.fill(0), b8.pr.aTV = aTV, b8.pr.aTW = aTW;
						for (var aB = 0; aB < el; aB++) aTV[aB] = bG.pe(1), aTW[aB] = bG.pe(wD)
					}(aTm, wD), 1
			}()) || (bG.e6 < 8 * bG.size - 13 || bG.e6 > 8 * bG.size ? (aTc("Out Of Bounds Error: " + bG.e6 + " " + 8 * bG.size), 1) : (b8.pr.a4c = qE, 2 === aD.data.mapType && (aTc("Load base64 image...", 2), 1))))
	}, this.aHl = function(aHL, aTd) {
		var a2h = document.createElement("canvas"),
			hn = a2h.getContext("2d");
		if (a2h.width = aHL.width, a2h.height = aHL.height, hn.drawImage(aHL, 0, 0), aD.data.canvas = a2h, aTY || aTd) return aD.zs ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b8.aQV()
	}
}

function aTO() {
	this.zK = function() {
		var wD = function() {
				for (var aTW = b8.pr.aTW, el = aTW.length, max = 0, aB = 0; aB < el; aB++) max = Math.max(max, aTW[aB]);
				return wK(Math.max(max, 1))
			}(),
			i = (qP = aD.data, (i = bD).db(), i.a8(12, l.rVersion), i.e6 += 43, i.a8(2, qP.mapType), i.a8(8, qP.mapProceduralIndex), i.a8(8, qP.mapRealisticIndex), i.a8(14, qP.mapSeed), i.aTz(qP.mapName, 5), 2 === qP.mapType && i.aU0(qP.canvas),
				i.a8(1, qP.passableWater), i.a8(1, qP.passableMountains), i.a8(10, qP.playerCount), i.a8(10, qP.humanCount), i.a8(9, qP.selectedPlayer), i.a8(1, qP.gameMode), i.a8(2, qP.playerMode), i.a8(2, qP.battleRoyaleMode), i.a8(4, qP
					.numberTeams), i.a8(1, qP.isZombieMode), i.a8(1, qP.isContest), i.a8(1, qP.isReplay), i.di(qP.elo, 2, 14), i.a8(1, qP.colorsType), i.a8(1, qP.colorsPersonalized), i.di(qP.colorsData, 10, 18), i.a8(1, qP.selectableColor), i.di(
					qP.teamPlayerCount, 4, 10), i.a8(1, qP.neutralBots), i.a8(2, qP.botDifficultyType), i.a8(4, qP.botDifficultyValue), i.di(qP.botDifficultyTeam, 4, 4), i.di(qP.botDifficultyData, 10, 4), i.a8(2, qP.spawningType), i.a8(14, qP
					.spawningSeed), i.di(qP.spawningData, 11, 12), i.a8(1, qP.selectableSpawn), i.a8(2, qP.playerNamesType), i.aU1(qP.playerNamesData, 10, 5), i.a8(1, qP.selectableName), i.a8(2, qP.aIncomeType), i.a8(8, qP.aIncomeValue), i.di(qP
					.aIncomeData, 10, 8), i.a8(2, qP.tIncomeType), i.a8(8, qP.tIncomeValue), i.di(qP.tIncomeData, 10, 8), i.a8(2, qP.iIncomeType), i.a8(8, qP.iIncomeValue), i.di(qP.iIncomeData, 10, 8), i.a8(2, qP.sResourcesType), i.a8(11, qP
					.sResourcesValue), i.di(qP.sResourcesData, 10, 11), ! function(wD) {
					var i = bD,
						aTR = b8.pr.aTR,
						fU = b8.pr.aTS,
						fW = b8.pr.aTT,
						fY = b8.pr.aTU,
						el = aTR.length;
					i.a8(5, wD), i.a8(30, el), i.a8(30, b8.pr.aTW.length);
					for (var aB = 0; aB < el; aB++) {
						var f6 = aTR[aB];
						i.a8(4, f6), i.a8(9, fU[aB]), 0 === f6 ? i.a8(22, fW[aB]) : 1 === f6 ? (i.a8(10, fW[aB]), i.a8(10, fY[aB])) : 2 === f6 ? (i.a8(10, fW[aB]), i.a8(9, fY[aB])) : 3 === f6 ? (i.a8(10, fW[aB]), i.a8(27, fY[aB])) : 4 === f6 ? (i
							.a8(10, fW[aB]), i.a8(16, fY[aB])) : 5 === f6 || 6 === f6 ? i.a8(10, fW[aB]) : 7 === f6 ? i.a8(1, fW[aB]) : 10 === f6 && (i.a8(20, fW[aB]), i.a8(22, fY[aB]))
					}
				}(wD), ! function(wD) {
					for (var i = bD, aTV = b8.pr.aTV, aTW = b8.pr.aTW, el = aTV.length, aB = 0; aB < el; aB++) i.a8(1, aTV[aB]), i.a8(wD, aTW[aB])
				}(wD), bD.e6),
			qP = bK.ds(i - 1, 6) + 1,
			wD = (bC.aSD(6 * qP) !== bD.g.length && bD.g.push(0), ! function() {
				var i = bD;
				i.e6 = 24, i.a8(31, i.g.length), i.e6 = 12, i.a8(12, function() {
					for (var g = bD.g, el = g.length, aSf = l.rVersion, aB = 3; aB < el; aB++) aSf = aSf + g[aB] & 4095;
					return aSf
				}())
			}(), bG.db(bD.g), bE.so.sp(bE.so.sq(qP)));
		return bG.u7(), bD.db(), wD
	}
}

function cn() {
	var f6, bt = !1,
		aU3 = !1,
		aU4 = -1e4,
		aU5 = -1,
		aU6 = 0;

	function resize(aUA) {
		f6 = 0, ab.tD() && (aU8(aUA) || bt) && (bt = !1, bb.resize(), bV.aBW.resize(), aY.db(), bX.db(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.zs ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bB.resize(), av.resize(), aP.resize(), aQ.resize(), aL.resize(), bd.resize(), af.resize(), aX.resize(), bg.resize(), aS.a8p()) : (aa.aFh(), aa.aFi()), be.dj = !0)
	}

	function aU7(fD) {
		return fD && 128 < fD ? Math.floor(fD) : 128
	}

	function aU8(aUA) {
		var i, j, aUC, ss, a8D;
		if (!(0 < h.sT)) return ss = aU7(document.documentElement.clientWidth), a8D = aU7(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = ss, j = a8D, aUC = 0 !== a0.id || i < j ?
			700 : 1200, aUC = Math.min(aUC / ((i + j) / 2), 1), aUC = 0 === bi.eI.data[1].value ? 2 * aUC / 3 : Math.min(aUC + (bi.eI.data[1].value - 1) * (1 - aUC) / 2, 1), h.k = (window.devicePixelRatio || 1) * aUC, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aUA && !aU3 ? (aU3 = !0, document.body.removeChild(a1M)) : aU3 && (aU3 = !1, document.body.appendChild(a1M)), i = Math.floor(.5 + ss * h.k), j = Math.floor(.5 + a8D * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = aB8(i, j), h.max = a67(i, j), h.hv = bK.ds(i + j, 2), h.ua = i / j, a1M.width = i, a1M.height = j, a1M.style.width = ss + "px", a1M.style.height = a8D + "px", aU5 = be.eK + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hv = 0, this.ua = 1, this.k = 1, this.sT = 0, this.dc = function() {
		this.i = aU7(document.documentElement.clientWidth) + 2, this.j = aU7(document.documentElement.clientHeight) + 2
	}, this.db = function() {
		f6 = 1, a1M = document.getElementById("canvasA"), (ue = a1M.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aU8(0)
	}, this.j1 = function() {
		50 <= ++f6 && resize(0), -1 === aU5 || be.eK < aU5 || (aU5 = -1, 2e3 * ++aU6 >= be.eK + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dm = function(jO) {
		bt = !0, resize(jO)
	}, this.a21 = function() {
		aU4 + 1e3 > be.eK || (aU4 = be.eK, resize(0))
	}
}

function dF() {
	this.aSM = new aUE, this.a0h = new aUF
}

function aUF() {
	this.a0i = function() {
		for (var gJ, el = al.k9, zg = al.kA, yK = ag.yK, a82 = this.aH4(), aB = 0; aB < el; aB++) gJ = zg[aB], b9.g7.jW(gJ) || (yK[gJ] = a82);
		var pw = ag.pw,
			jA = ag.jA,
			jB = ag.jB,
			a0P = ag.a0P,
			el = aD.k8;
		for (aB = 0; aB < el; aB++)(0 === a0P[aB] || jB[aB] < 1 || 2 * pw[aB] > 3 * (jA[aB] + jB[aB])) && (yK[aB] = 0);
		var a0f = 0;
		for (aB = 0; aB < el; aB++) a0f += 0 < yK[aB];
		return a0f
	}, this.aH4 = function() {
		return Math.min(65535, be.k5())
	}
}

function aUE() {
	function aUJ(g, fD, hd) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fD >> (aB + hd) % 30 & 1)) % 256
	}
	this.j1 = function(aUG, aUH) {
		var g = new Uint8Array(256);
		return function(g, aUG, aUH) {
				var aB, aUL = 3 + (4 + aUG) % 32768,
					aUM = 12 + aUH % 32768,
					aUN = 17 + ((aUG & aUH) + (aUG | aUH) + aUG) % 32768;
				for (aB = 0; aB < 256; aB++) aUL = 1 + aUL * aUM % aUN, g[aB] = aUL % 256
			}(g, aUG, aUH), aUJ(g, aUG, 2), aUJ(g, aUH, 7),
			function(g) {
				var aB, fD, e6 = 0;
				for (aB = 0; aB < 3e4; aB++) fD = g[e6], g[e6] = (fD + aB + g[(e6 + aB) % 256]) % 256, e6 = (fD + aB + e6 + (fD & e6)) % 256
			}(g),
			function(g) {
				var aB, a8D = 1,
					ta = 1;
				for (aB = 0; aB < 256; aB += 2) a8D = (1 + a8D) * (g[aB] + 1) % 1073741824, ta = (1 + ta) * (g[aB + 1] + 1) % 1073741824;
				return [a8D, ta]
			}(g)
	}
}

function ck() {
	var aUO, aUP, hz, aUQ;
	this.db = function() {
		var aB, es, eu, aSY, aUR, i, j, y4, hk, wU, fD, gJ, f1, f4, aUU;
		if (function() {
				if (hz = !0, aUQ = "rgb(" + bR.wS[0] + "," + bR.wS[1] + "," + bR.wS[2] + ")", bR.aK8(bR.eR)) return 1;
				return hz = !1, 0
			}()) aUP = null;
		else {
			for (aUO = bK.ds(96, 4), aUR = 1 === bR.eR ? (aSY = 0, 160) : (aSY = 128, 32), aUQ = "rgb(" + aSY + "," + aSY + "," + aSY + ")", aUP = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aUP[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bR.ew : aUO, j = aB % 2 == 0 ? aUO : bR.ex + 2 * aUO, aUP[aB].width = i, aUP[aB].height = j, wU = (hk = (y4 = aUP[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (eu = aUO - 1; 0 <= eu; eu--)
						for (fD = aUR + Math.floor((eu + 1) * (aSY - aUR) / (aUO + 1)), es = i - 1; 0 <= es; es--) wU[gJ = 4 * ((0 === aB ? aUO - eu - 1 : eu) * i + es)] = fD, wU[gJ + 1] = fD, wU[gJ + 2] = fD, wU[gJ + 3] = 255;
				else {
					for (es = aUO - 1; 0 <= es; es--)
						for (fD = aUR + Math.floor((es + 1) * (aSY - aUR) / (aUO + 1)), eu = j - 1 - aUO; aUO <= eu; eu--) wU[gJ = 4 * (eu * i + (3 === aB ? aUO - es - 1 : es))] = fD, wU[gJ + 1] = fD, wU[gJ + 2] = fD, wU[gJ + 3] = 255;
					for (f4 = 1; 0 <= f4; f4--)
						for (es = aUO - 1; 0 <= es; es--)
							for (eu = aUO - 1; 0 <= eu; eu--) f1 = (Math.pow(es * es + eu * eu, .5) + 1) / (aUO + 1), fD = aUR + Math.floor((1 < f1 ? 1 : f1) * (aSY - aUR)), wU[gJ = 4 * ((0 === f4 ? aUO - eu - 1 : eu + f4 * (j - aUO)) * i + (
								1 === aB ? es : aUO - es - 1))] = fD, wU[gJ + 1] = fD, wU[gJ + 2] = fD, wU[gJ + 3] = 255
				}
				y4.putImageData(hk, 0, 0)
			}
			aUU = aUR, bR.wN.fillStyle = "rgb(" + aUU + "," + aUU + "," + aUU + ")", bR.wN.fillRect(0, 0, bR.ew, 1), bR.wN.fillRect(0, bR.ex - 1, bR.ew, 1), bR.wN.fillRect(0, 0, 1, bR.ex), bR.wN.fillRect(bR.ew - 1, 0, 1, bR.ex)
		}
	}, this.xy = function() {
		var f4 = hz ? 0 : -aUO;
		aLs(f4, f4, bR.ew - 2 * f4, bR.ex - 2 * f4, bZ.aUV, bZ.aUW, bZ.aUX, bZ.aUY) || (ue.fillStyle = aUQ, ue.fillRect(0, 0, h.i, h.j))
	}, this.ud = function() {
		hz || (aLr(0, -aUO, bR.ew, aUO, bZ.aUV, bZ.aUW, bZ.aUX, bZ.aUY) && ue.drawImage(aUP[0], bZ.aUZ, bZ.aUa - aUO), aLr(bR.ew, -aUO, aUO, bR.ex + 2 * aUO, bZ.aUV, bZ.aUW, bZ.aUX, bZ.aUY) && ue.drawImage(aUP[1], bZ.aUZ + bR.ew, bZ.aUa - aUO),
			aLr(0, bR.ex, bR.ew, aUO, bZ.aUV, bZ.aUW, bZ.aUX, bZ.aUY) && ue.drawImage(aUP[2], bZ.aUZ, bZ.aUa + bR.ex), aLr(-aUO, -aUO, aUO, bR.ex + 2 * aUO, bZ.aUV, bZ.aUW, bZ.aUX, bZ.aUY) && ue.drawImage(aUP[3], bZ.aUZ - aUO, bZ.aUa - aUO))
	}
}

function d4() {
	this.aH2 = new aUb, this.y1 = new aUc, this.y = new aUd, this.iV = new aUe, this.aUU = new aUf, this.m2 = new aUg, this.jw = new aUh, this.kt = new aUi, this.aUj = new aUk, this.aUl = new aUm, this.mD = new aUn, this.hL = new aUo, this.lS =
		new aUp, this.kv = new aUq, this.hO = new aUr, this.m6 = new aUs, this.q4 = new aUt, this.db = function() {
			this.lS.db(), this.y1.db(), this.y.db(), this.iV.db(), this.aUU.db(), this.aUl.db(), this.m6.db()
		}, this.ud = function() {
			this.aUl.ud(), this.y1.ud()
		}
}

function aUh() {
	this.j1 = function(player) {
		return !!bM.mD.mE(player) && !(bM.y.pp[player] >= Math.max(3 * an.performance.lK, aE.kM[aE.hU[player]]) || !b9.g7.mF(player, aE.kK[aE.hU[player]], 32, 0)) && (aW.aAv() ? function(player) {
			var aUw = bM.kv.aAy(),
				el = aUw.length;
			if (0 === el) return !1;
			aUw = aUw[ax.jQ(el)], el = bM.y.m0[aUw];
			if (bM.m6.m7(player, el)) return !1;
			return !! function(player, m9) {
				var m9 = bL.iT(bM.y.mC[m9]),
					h0 = bL.et(m9),
					m9 = bL.ev(m9),
					n6 = ag.ib[player],
					n7 = ag.ie[player],
					nJ = ag.ic[player],
					player = ag.ig[player],
					nJ = Math.max(h0 - nJ, n6 - h0),
					n6 = Math.max(m9 - player, n7 - m9);
				return nJ < 100 && n6 < 100
			}(player, aUw) && !!bM.hO.q3(player, el, 1) && (b9.g7.mH(player), bM.y.mI(player), !0)
		}(player) : !!(an.ix.j1(player) || an.il.j1(player) || an.io.j1(player)) && (function(player) {
			bN.fN[1] = 4, b9.g7.mH(player), bM.y.mI(player)
		}(player), !0))
	}
}

function aUs() {
	var aUz = 0,
		aV0 = null;
	this.db = function() {
		null === aV0 && (aV0 = new Uint16Array(2 * bM.y.kM)), aUz = 0
	}, this.jF = function(aV1, m6) {
		var aV2 = aV0;
		aV2[aUz++] = aV1, aV2[aUz++] = m6
	}, this.m7 = function(player, m5) {
		for (var aV2 = aV0, el = aUz, aB = 0; aB < el; aB += 2)
			if (aV2[aB] === m5 && bM.kv.aV3(aV2[aB + 1]) && player === bM.y.m1[bN.fN[2]] >> 3) return !0;
		return !1
	}, this.aV4 = function(aV5) {
		var m2 = bM.y.ly[aV5];
		if (!(m2 < 64)) {
			var m5 = bM.y.m0[aV5],
				aV2 = aV0,
				el = aUz;
			for (let aB = el - 2; 0 <= aB; aB -= 2)
				if (aV2[aB] === m5) {
					{
						aVA = void 0;
						var aVA = aV2[aB + 1];
						bM.kv.aV3(aVA) && bM.m6.aVI(bN.fN[2])
					}
					aV2[aB] = aV2[el - 2], aV2[aB + 1] = aV2[el - 1], el -= 2
				} aUz = el
		}
	}, this.aV7 = function(aV8, aV9) {
		for (var aVA = bM.y.m0[aV8], m5 = -1, aV2 = aV0, el = aUz, aB = 1; aB < el; aB += 2)
			if (aV2[aB] === aVA) {
				m5 = aV2[aB - 1];
				break
			} if (-1 === m5) return !1;
		if (!bM.kv.aV3(m5)) return !1;
		var aV5 = bN.fN[2],
			lR = bM.y.lz[aV5];
		if (aV9 === lR[lR.length - 1]) bM.y.lz[aV8] = bM.lS.aVB(bM.y.lz[aV8], bM.lS.la(lR));
		else {
			var aVC = bM.kv.aVD(lR, aV9);
			if (-1 === aVC) return !1;
			var aVE = bM.y.mB[aV5];
			aVC === aVE ? (aV5 = bL.iT(bM.y.mC[aV5]), bM.y.lz[aV8] = bM.lS.aVG(bM.y.lz[aV8], lR, aVC, aV9, bL.iB(lR[aVC], aV9) > bL.iB(lR[aVC], aV5))) : bM.y.lz[aV8] = bM.lS.aVG(bM.y.lz[aV8], lR, aVC, aV9, aVE < aVC)
		}
		return !0
	}, this.aVI = function(aVJ) {
		var lR, l1 = bM.y,
			m2 = l1.ly[aVJ];
		return m2 % 64 != 5 && (lR = l1.lz[aVJ], l1.aVK[aVJ] = 65535 - l1.aVK[aVJ], l1.mB[aVJ] = lR.length - l1.mB[aVJ] - 2, l1.lz[aVJ] = bM.lS.la(lR), l1.ly[aVJ] = m2 - m2 % 64 + 5, !0)
	}
}

function aUn() {
	this.mE = function(player) {
		return !!aD.data.passableWater && bM.y.lx !== bM.y.kM && bM.y.pp[player] !== bM.y.aVL && 0 !== ag.gS[player].length
	}, this.pz = function(aT5) {
		var m2 = bN.fN[1];
		return !(4 <= m2 || !bM.kv.aVM(bL.eb(aT5))) && ac.eg(bL.eb(bL.iX(aT5, m2)))
	}
}

function aUb() {
	this.aH3 = function(player) {
		for (var a7S = bM.y.a7S, t5 = player << 3, aB = t5 + bM.y.pp[player] - 1; t5 <= aB; aB--) this.aVN(a7S[aB])
	}, this.aVN = function(aVO) {
		var y = bM.y,
			aVP = y.lx - 1,
			aVQ = y.m1[aVO],
			aVR = y.aVS[aVO],
			aVT = y.mC[aVO];
		y.lx = aVP, y.m1[aVO] = y.m1[aVP], y.mC[aVO] = y.mC[aVP], y.aVK[aVO] = y.aVK[aVP], y.a6P[aVO] = y.a6P[aVP], y.aVS[aVO] = y.aVS[aVP], y.m0[aVO] = y.m0[aVP], y.ly[aVO] = y.ly[aVP], y.aVU[aVO] = y.aVU[aVP], y.lz[aVO] = y.lz[aVP], y.mB[aVO] =
			y.mB[aVP], y.a7S[y.m1[aVO]] = aVO,
			function(aT4) {
				var player = aT4 >> 3,
					y = bM.y,
					el = y.pp[player] - 1,
					aVX = (player << 3) + el;
				y.pp[player] = el, aVX !== aT4 && (y.a7S[aT4] = y.a7S[aVX], y.m1[y.a7S[aT4]] = aT4)
			}(aVQ), bM.iV.iV[bL.iU(y.mC[aVO])][y.aVS[aVO]] = aVO, aVP = bL.iU(aVT), aVQ = aVR, aVP = bM.iV.iV[aVP], y = aVP.pop(), aVQ !== aVP.length && (aVP[aVQ] = y, bM.y.aVS[y] = aVQ)
	}
}

function aUc() {
	var aVZ, aVa = 8,
		aVb = null;

	function aVg(wU, eX, e6) {
		eX *= 4;
		wU[eX] = 255, wU[1 + eX] = 255, wU[2 + eX] = e6, wU[3 + eX] = 255
	}

	function aVi(hn, aUQ) {
		var es, eu, i5, eX, aVk, aVl, hh = aVa,
			hk = b9.qX.getImageData(hn, hh, hh),
			wU = hk.data,
			l1 = (hh >> 1) - .5,
			aVn = b9.qf.a2F(aUQ, .5);
		for (b9.qf.a2H(aUQ, aVn, 300) || b9.qf.a2J(aUQ, 100), eu = 0; eu < hh; eu++)
			for (es = 0; es < hh; es++) aVl = (hh - 1.5) * (hh - 1.5) / 4, wU[eX = 4 * (eu * hh + es)] = (aVk = (i5 = (i5 = es - l1) * i5 + (i5 = eu - l1) * i5) <= (hh - 4.5) * (hh - 4.5) / 4 ? aVn : aUQ)[0], wU[1 + eX] = aVk[1], wU[2 + eX] = aVk[2],
				wU[3 + eX] = aVl < i5 ? 0 : 255;
		hn.putImageData(hk, 0, 0)
	}
	this.db = function() {
		var e6, hh, a2h, hn, hk, wU;
		(aVZ = aVZ || new Array(aD.ei)).fill(null), e6 = 255, hh = aVa + 4, a2h = b9.qX.wJ(hh, hh), hn = b9.qX.getContext(a2h, !0), hk = b9.qX.getImageData(hn, hh, hh), aVg(wU = hk.data, hh + 1, e6), aVg(wU, hh + 2, e6), aVg(wU, 2 * hh + 1, e6),
			aVg(wU, 2 * hh - 3, e6), aVg(wU, 2 * hh - 2, e6), aVg(wU, 3 * hh - 2, e6), aVg(wU, hh * (hh - 3) + 1, e6), aVg(wU, hh * (hh - 2) + 1, e6), aVg(wU, hh * (hh - 2) + 2, e6), aVg(wU, hh * (hh - 2) - 2, e6), aVg(wU, hh * (hh - 1) - 3, e6),
			aVg(wU, hh * (hh - 1) - 2, e6), hn.putImageData(hk, 0, 0), aVb = a2h,
			function() {
				if (aD.hf)
					for (var a2h = new Array(bf.kV.length), el = aD.ei, aVe = aVZ, aAJ = bf.aAJ, aB = 0; aB < el; aB++) {
						var a59 = aAJ[aB];
						a2h[a59] || (a2h[a59] = function(a59) {
							var a2h = b9.qX.wJ(aVa, aVa),
								hn = b9.qX.getContext(a2h, !0),
								g = bN.fK;
							return g.set(bf.aVj[a59]), aVi(hn, g), a2h
						}(a59)), aVe[aB] = a2h[a59]
					}
			}()
	}, this.ud = function() {
		var aB, player, aVo, aM0, hU, i4, aVq, aVs, aVt, mC = bM.y.mC,
			m1 = bM.y.m1,
			a6P = bM.y.a6P,
			aVU = bM.y.aVU,
			aVu = aVZ,
			aVv = aD.eV,
			el = bM.y.lx,
			aVw = h.i,
			aVx = h.j,
			aVy = bR.ew << 4,
			ea = hw,
			eP = ea / aVa,
			n6 = iM / ea,
			n7 = iN / ea,
			i5 = (aVw + iM) / ea - n6,
			i8 = (aVx + iN) / ea - n7,
			hn = ue;
		for (hn.imageSmoothingEnabled = ea < 9, b9.qX.textAlign(hn, 1), b9.qX.textBaseline(hn, 1), aB = 0; aB < el; aB++) player = m1[aB] >> 3, hU = a6P[aB], aVo = .9 + .1 * Math.log10(hU), aM0 = (i4 = mC[aB]) % aVy / 16 - aVo, i4 = aVx * (Math
			.floor(i4 / aVy) / 16 - aVo - n7) / i8, aVq = -2 * (aVt = ea * aVo) * (1 + (aVs = +(player === aVv)) / 8), aVs = aVs * aVt / 4, (aVt = aVw * (aM0 - n6) / i5) < aVq || i4 < aVq || aVw + aVs < aVt || aVx + aVs < i4 || (aM0 = 2 *
			aVo * eP, aVq = aVo * ea, null === (aVs = aVu[player]) && (aVu[player] = aVs = function(player) {
				var a2h = b9.qX.wJ(aVa, aVa);
				return aVi(b9.qX.getContext(a2h, !0), ac.a73(player)), a2h
			}(player)), player === aVv && (hn.setTransform(aM0, 0, 0, aM0, aVt - 2 * aM0, i4 - 2 * aM0), hn.drawImage(aVb, 0, 0)), hn.setTransform(aM0, 0, 0, aM0, aVt, i4), hn.drawImage(aVs, 0, 0), (aVo = Math.floor(function(hU) {
				if (hU < 1e3) return .42;
				if (hU < 1e4) return .34;
				if (hU < 1e6) return .26;
				if (hU < 1e8) return .19;
				return .15
			}(hU) * aVq)) < 6) || (hn.setTransform(1, 0, 0, 1, 0, 0), hn.fillStyle = aVU[aB] ? bA.oE : bA.ng, hn.font = b9.qX.sL(1, aVo), hn.fillText(b9.rW.z9(hU), aVt + aVq, i4 + aVq + .1 * aVo));
		hn.imageSmoothingEnabled = !1, hn.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aUm() {
	var aW1;
	this.db = function() {
		if (aD.hf) {
			var hb = 1 - aD.x7;
			aW1 = new Array(bf.kV.length);
			for (var aB = aD.x6 - 1; 0 <= aB; aB--) {
				var a59 = bf.kV[aB + hb];
				aW1[a59] = bO.y.aW3(20, bf.aW4[a59])
			}
			9 === aD.kQ && (aW1[1] = bO.y.aW3(20, bf.aW4[1]))
		} else aW1 = [bO.y.aW3(20, bf.aW4[7])]
	}, this.ud = function() {
		var nQ = hw;
		if (!(5 <= nQ)) {
			var aVw = h.i,
				aVx = h.j,
				n6 = iM / nQ,
				n7 = iN / nQ,
				nJ = (aVw + iM) / nQ,
				nK = (aVx + iN) / nQ,
				gK = -20 * nQ,
				aW6 = .5 * gK,
				aVy = bR.ew << 4,
				el = bM.y.lx,
				mC = bM.y.mC,
				m1 = bM.y.m1,
				aAJ = bf.aAJ,
				a2h = aW1,
				hn = ue;
			3 < nQ && (hn.globalAlpha = .5 * (5 - nQ));
			for (var aB = 0; aB < el; aB++) {
				var i4 = mC[aB],
					es = aVw * (i4 % aVy / 16 - n6) / (nJ - n6) + aW6,
					i4 = aVx * (Math.floor(i4 / aVy) / 16 - n7) / (nK - n7) + aW6;
				aVw < es || aVx < i4 || es < gK || i4 < gK || (hn.setTransform(nQ, 0, 0, nQ, es, i4), hn.drawImage(a2h[aAJ[m1[aB] >> 3]], 0, 0))
			}
			hn.globalAlpha = 1, hn.setTransform(nQ, 0, 0, nQ, 0, 0)
		}
	}
}

function aUq() {
	this.aW9 = function(player, id) {
		for (var aWA = ag.gS[player], el = aWA.length, aB = 0; aB < el; aB++)
			if (bL.hx(aWA[aB], id)) return !0;
		return !1
	}, this.aWB = function(player, eX) {
		for (var iD, aWC, eP, aWA = ag.gS[player], el = aWA.length, i = bR.ew, aWE = bL.et(eX), aWF = bL.ev(eX), er = -1, min = bR.ew * bR.ew + bR.ex * bR.ex, id = ac.eT(bL.eb(eX)), aB = 0; aB < el; aB++)(aWC = (aWC = aWE - (iD = (eP = aWA[
			aB]) >> 2) % i) * aWC + (aWC = aWF - ~~((.5 + iD) / i)) * aWC) < min && bL.hx(eP, id) && (min = aWC, er = iD);
		return er
	}, this.kw = function(iC, iD) {
		for (var id = ac.eT(bL.eb(iD)), hy = bL.hq, eP = bL.eb(iC), aWG = -1, aB = 0; aB < 4; aB++) {
			var ea = eP + hy[aB];
			ac.hz(ea) && ac.eT(ea) === id && (-1 === aWG || bL.iE(bL.eZ(ea), iD) < bL.iE(aWG, iD)) && (aWG = bL.eZ(ea))
		}
		return aWG
	}, this.lV = function(player, eX) {
		for (var hy = bL.hq, eP = bL.eb(eX), aB = 0; aB < 4; aB++) {
			var ea = eP + hy[aB];
			if (ac.gL(ea) && ac.xw(player, ea)) return !0
		}
		return !1
	}, this.lW = function(player, eX) {
		for (var hy = bL.hq, eP = bL.eb(eX), aB = 0; aB < 4; aB++) {
			var ea = eP + hy[aB];
			if (ac.ec(ea)) return !0;
			if (ac.gL(ea)) {
				ea = ac.ed(ea);
				if (player !== ea && br.ee(player, ea)) return !0
			}
		}
		return !1
	}, this.m3 = function(eX) {
		for (var hy = bL.hq, eP = bL.eb(eX), aB = 0; aB < 4; aB++) {
			var ea = eP + hy[aB];
			if (ac.gL(ea)) {
				ea = ac.ed(ea);
				if (b9.g7.jW(ea)) return ea
			}
		}
		return -1
	}, this.aVM = function(eP) {
		if (ac.hz(eP))
			for (var hy = bL.hq, aB = 0; aB < 4; aB++)
				if (ac.eg(eP + hy[aB])) return !0;
		return !1
	}, this.n5 = function(player, id) {
		for (var t5 = player << 3, t6 = t5 + bM.y.pp[player], m0 = bM.y.m0, a7S = bM.y.a7S, aB = t5; aB < t6; aB++) {
			var a7T = a7S[aB];
			if (m0[a7T] === id) return a7T
		}
		return -1
	}, this.nA = function(player) {
		return 0 === bM.y.pp[player] ? -1 : bM.y.a7S[player << 3]
	}, this.a5R = function(lL, lM) {
		var el = bM.y.lx;
		if (el < 1) return -1;
		for (var mC = bM.y.mC, aWH = 80, aOG = -1, aB = 0; aB < el; aB++) {
			var f1 = bL.i1(lL, lM, mC[aB]);
			f1 < aWH && (aWH = f1, aOG = aB)
		}
		return function(aB, lL, lM) {
			if (aB < 0) return;
			var aWO = bM.y.mC[aB],
				aWP = bL.i7(aWO),
				aWO = bL.iA(aWO),
				aB = 20 * (.9 + .1 * Math.log10(bM.y.a6P[aB]));
			return aB = Math.max(aB, bL.iO(b9.qX.tA(.02, 1.7))), bK.aLz(bL.i6(lL), bL.i9(lM), aWP, aWO, aB)
		}(aOG, lL, lM) ? aOG : -1
	}, this.aV3 = function(n3) {
		for (var el = bM.y.lx, m0 = bM.y.m0, aB = 0; aB < el; aB++)
			if (m0[aB] === n3) return bN.fN[2] = aB, !0;
		return !1
	}, this.aGz = function(player) {
		for (var t5 = player << 3, t6 = t5 + bM.y.pp[player], a7S = bM.y.a7S, a6P = bM.y.a6P, hU = 0, aB = t5; aB < t6; aB++) hU += a6P[a7S[aB]];
		return hU
	}, this.aWJ = function(player, aVJ) {
		aVJ = bM.y.lz[aVJ];
		return this.lV(player, aVJ[aVJ.length - 1])
	}, this.aWK = function(iC, iD, f1, aWL) {
		var iG = bL.et(iC),
			iC = bL.ev(iC),
			iI = bL.et(iD),
			iD = bL.ev(iD),
			iI = (f1 = Math.max(f1, 1), iI - iG),
			iD = iD - iC,
			i5 = bK.ds(Math.abs(iI) * aWL, f1),
			aWL = bK.ds(Math.abs(iD) * aWL, f1);
		return bL.f9(iG + Math.sign(iI) * i5, iC + Math.sign(iD) * aWL)
	}, this.aVD = function(lR, eX) {
		for (var el = lR.length - 1, es = bL.et(eX), eu = bL.ev(eX), aB = 0; aB < el; aB++) {
			var iC = lR[aB],
				iD = lR[aB + 1],
				n6 = bL.et(iC),
				iC = bL.ev(iC),
				nJ = bL.et(iD),
				iD = bL.ev(iD);
			if (!(es !== n6 && es !== nJ && Math.sign(es - n6) === Math.sign(es - nJ) || eu !== iC && eu !== iD && Math.sign(eu - iC) === Math.sign(eu - iD))) {
				if (n6 === nJ || iC === iD) return aB;
				if (Math.abs(es - n6) === Math.abs(eu - iC) && Math.abs(es - nJ) === Math.abs(eu - iD)) return aB
			}
		}
		return -1
	}, this.aAy = function() {
		for (var aWR = li[0], m1 = bM.y.m1, lx = bM.y.lx, g = [], aB = 0; aB < lx; aB++) b9.g7.kk(aWR, m1[aB] >> 3) && g.push(aB);
		return g
	}, this.lT = function(player, lR) {
		for (var t5 = player << 3, t6 = t5 + bM.y.pp[player], a7S = bM.y.a7S, lz = bM.y.lz, hD = lR[0], kj = lR[lR.length - 1], aB = t5; aB < t6; aB++) {
			var gJ = lz[a7S[aB]];
			if (gJ[0] === hD && gJ[gJ.length - 1] === kj) return !0
		}
		return !1
	}
}

function aUr() {
	function aWU(player, aVJ) {
		aVJ = bL.iT(bM.y.mC[aVJ]), aVJ = ac.eT(bL.eb(aVJ));
		return !!bM.kv.aW9(player, aVJ)
	}

	function aWS(player) {
		return bM.mD.mE(player) && !bM.lS.lY()
	}
	this.hP = function(player, eX) {
		return !!aWS(player) && -1 !== (eX = function(player, eX) {
			for (var el = bM.y.lx, mC = bM.y.mC, m1 = bM.y.m1, aWH = bL.hs(), aOG = -1, aB = 0; aB < el; aB++) {
				var f1 = bL.iB(eX, bL.iT(mC[aB]));
				f1 < aWH && b9.g7.kk(player, m1[aB] >> 3) && (aWH = f1, aOG = aB)
			}
			return aOG
		}(player, eX)) && !!aWU(player, eX) && (bN.fN[3] = bM.y.m0[eX], !0)
	}, this.pA = function(player, n3) {
		return !!aWS(player) && !!bM.kv.aV3(n3) && !!aWU(player, bN.fN[2])
	}, this.q3 = function(player, n3, aWV) {
		return !! function(player, n3, aWV) {
			if (aWS(player) && bM.kv.aV3(n3)) {
				n3 = bN.fN[2];
				if (b9.g7.kk(player, bM.y.m1[n3] >> 3)) {
					if (function(player, aVJ) {
							return bM.kv.aWJ(player, aVJ) && (bN.g[0] = bM.lS.la(bM.y.lz[aVJ]), bN.fN[1] = 6, !0)
						}(player, n3)) return 1;
					var aUy = bL.iT(bM.y.mC[n3]),
						aWZ = bM.kv.aWB(player, aUy);
					if (-1 !== aWZ) {
						aWZ = bL.iB(aWZ, aUy);
						if (!(aWV && 120 < aWZ)) {
							aWV = function(aVJ, aWa, aUy) {
								var lR = bM.y.lz[aVJ],
									aVJ = bM.y.mB[aVJ],
									aWc = bL.iB(aUy, lR[aVJ + 1]);
								if (aWa <= aWc) return bM.kv.aWK(aUy, lR[aVJ + 1], aWc, aWa);
								for (var f1 = aWa - aWc, el = lR.length - 1, aB = aVJ + 1; aB < el; aB++) {
									var aWd = bL.iB(lR[aB], lR[aB + 1]);
									if (f1 <= aWd) return bM.kv.aWK(lR[aB], lR[aB + 1], aWd, f1);
									f1 -= aWd
								}
								return lR[el]
							}(n3, aWZ, aUy);
							if (bM.kt.q0(player, aWV, 1)) return bN.fN[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n3, aWV) && (player = bN.fN[2], bM.y.ly[player] = 64 + bM.y.ly[player] % 64, bM.m6.jF(n3, bM.y.mG), !0)
	}
}

function aUg() {
	function aWi(player, hU, aWg, aUy) {
		var jI;
		if (ac.ec(aWg)) jI = aD.ei;
		else {
			if ((jI = ac.ed(aWg)) === player) return void bc.gB(player, hU - b9.g7.gA(player, hU), 12);
			if (!br.ee(player, jI)) return void b7.kB.pP(player, jI, hU)
		}
		ad.jU(player, jI) || ad.jm(player) ? (ag.gD[player].push(aUy << 2), ad.jF(player, hU, jI), aF.jG(player, !0)) : bc.gB(player, hU, 12)
	}
	this.j1 = function() {
		for (var ly = bM.y.ly, mC = bM.y.mC, aVK = bM.y.aVK, aB = bM.y.lx - 1; 0 <= aB; aB--) 65535 === aVK[aB] && function(aB, aUy, hc) {
			if (6 === hc) {
				if (bM.m6.aV7(aB, aUy)) return bM.y.mB[aB]++, bM.y.aVK[aB] = 0, 0
			} else {
				var player = bM.y.m1[aB] >> 3,
					aB = bM.y.a6P[aB];
				bc.aWh(player), hc < 4 ? aWi(player, aB, aUy + bL.hp[hc] << 2, aUy) : 4 === hc ? function(player, hU, aUy) {
					var aB, ep, hy = bL.hq,
						ea = bL.eb(aUy);
					for (aB = 0; aB < 4; aB++)
						if (ep = ea + hy[aB], ac.ec(ep)) return aWi(player, hU, ep, aUy);
					for (aB = 0; aB < 4; aB++)
						if (ep = ea + hy[aB], ac.gL(ep) && !ac.xw(player, ep)) return aWi(player, hU, ep, aUy);
					for (aB = 0; aB < 4; aB++)
						if (ep = ea + hy[aB], ac.gL(ep)) return aWi(player, hU, ep, aUy)
				}(player, aB, aUy) : 5 === hc && function(player, hU, aUy) {
					var aB, ep, hy = bL.hq,
						ea = bL.eb(aUy);
					for (aB = 0; aB < 4; aB++)
						if (ep = ea + hy[aB], ac.gL(ep) && ac.xw(player, ep)) return aWi(player, hU, ep, aUy);
					for (aB = 0; aB < 4; aB++)
						if (ep = ea + hy[aB], ac.gL(ep)) return aWi(player, hU, ep, aUy);
					for (aB = 0; aB < 4; aB++)
						if (ep = ea + hy[aB], ac.ec(ep)) return aWi(player, hU, ep, aUy)
				}(player, aB, aUy)
			}
			return 1
		}(aB, bL.iT(mC[aB]), ly[aB] % 64) && (bM.m6.aV4(aB), bM.aH2.aVN(aB))
	}, this.aWf = function(player, eX, hc, n3) {
		if (!(4 <= hc)) {
			var aVv = aD.eV;
			if (b9.g7.gx(aVv) && br.ee(player, aVv) && player !== aVv && 0 !== ag.gS[aVv].length) {
				var aWg = eX + bL.hp[hc] << 2;
				if (ac.ec(aWg) || br.ee(player, ac.ed(aWg))) {
					for (var ez = !1, aB = 0; aB < 4; aB++)
						if (aWg = eX + bL.hp[aB] << 2, ac.eg(aWg) && !ac.ec(aWg) && ac.ed(aWg) === aVv) {
							ez = !0;
							break
						} ez && (aN.a6Y(719, 0), aN.yL(180, L(433, [ag.a0R[player]]), 719, player, bA.oD, bA.nd, -1, !0, void 0, {
						f5: 1,
						n3: n3
					}))
				}
			}
		}
	}
}

function aUd() {
	this.kM = 512, this.aVL = 8, this.lx = 0, this.mG = 0, this.m1 = new Uint16Array(this.kM), this.mC = new Uint32Array(this.kM), this.aVK = new Uint16Array(this.kM), this.a6P = new Uint32Array(this.kM), this.aVS = new Uint16Array(this.kM), this
		.m0 = new Uint16Array(this.kM), this.ly = new Uint8Array(this.kM), this.aVU = new Uint8Array(this.kM), this.lz = new Array(this.kM), this.mB = new Uint16Array(this.kM), this.pp = new Uint8Array(aD.ei), this.a7S = new Uint16Array(this.aVL * aD
			.ei), this.db = function() {
			this.lx = 0, this.mG = 0, this.pp.fill(0), this.lz.fill(null)
		}, this.mI = function(player) {
			var hU = bN.fI[0],
				m2 = bN.fN[1],
				lR = bN.g[0],
				aWl = this.mG,
				el = this.lx,
				aWm = bL.iS(lR[0]),
				aWn = this.pp[player],
				aWo = (player << 3) + aWn;
			this.m1[el] = aWo, this.mC[el] = aWm, this.aVK[el] = 0, hU < 60 ? (b9.g7.g8(player, 60 - hU), this.a6P[el] = 60) : this.a6P[el] = hU, this.aVS[el] = bM.iV.mI(el, bL.iU(aWm)), this.m0[el] = aWl, this.ly[el] = m2, this.aVU[el] = 0, this.lz[
				el] = lR, this.mB[el] = 0, this.mG = (aWl + 1) % 65536, this.pp[player] = aWn + 1, this.a7S[aWo] = el, this.lx++, bM.m2.aWf(player, lR[lR.length - 1], m2, aWl)
		}, this.j1 = function() {
			bM.m2.j1();
			for (var gJ = aD.eV, dr = bM.kv.aGz(gJ), s8 = (! function(s8) {
					for (var aWt, mC = s8.mC, a6P = s8.a6P, aVU = s8.aVU, aVK = s8.aVK, aVS = s8.aVS, lz = s8.lz, mB = s8.mB, s8 = s8.lx, aVy = bR.ew << 4, aB = s8 - 1; 0 <= aB; aB--) {
						var aWu = mC[aB],
							lR = lz[aB],
							aWv = mB[aB],
							aWm = bL.iS(lR[aWv]),
							aWw = bL.iS(lR[aWv + 1]),
							aWx = aWm % aVy,
							aWm = ~~((aWm + .5) / aVy),
							aWz = aWw % aVy,
							aX0 = ~~((aWw + .5) / aVy),
							aX1 = aWz - aWx,
							aX2 = aX0 - aWm,
							eo = Math.max(~~Math.sqrt(aX1 * aX1 + aX2 * aX2 + .5), 1),
							aX3 = a6P[aB],
							aX3 = (aX3 = aVU[aB] ? 4e4 : 25e4 + Math.min(20 * aX3, 3e5) + Math.min(aX3 >> 3, 5e4), aVK[aB] + Math.max(~~((aX3 + .5) / eo), 1));
						65535 <= aX3 ? aWv + 2 < lR.length ? (mB[aB] = aWv + 1, mC[aB] = aWt = function(aB, aX4, aWx, aWy, aWv, eo, lR, aVy) {
							aX4 = Math.min(aX4 - 65535, 65535);
							var lR = bL.iS(lR[aWv + 2]),
								aWv = lR % aVy - aWx,
								lR = ~~((lR + .5) / aVy) - aWy,
								aX7 = Math.max(~~Math.sqrt(aWv * aWv + lR * lR + .5), 1);
							return aX4 = Math.min(Math.floor((eo * aX4 + .5) / aX7), 65534), bM.y.aVK[aB] = aX4, aWx + bK.ds(aX4 * aWv, 65535) + aVy * (aWy + bK.ds(aX4 * lR, 65535))
						}(aB, aX3, aWz, aX0, aWv, eo, lR, aVy)) : (mC[aB] = aWt = aWw, aVK[aB] = 65535) : (aVK[aB] = aX3, mC[aB] = aWt = aWx + bK.ds(aX3 * aX1, 65535) + aVy * (aWm + bK.ds(aX3 * aX2, 65535))), aVS[aB] = bM.iV.aX6(aVS[aB],
							aWu, aWt)
					}
				}(this), ! function(s8) {
					if (be.k5() % 2 == 1) {
						var aB, hd, l1, f5, f6, aX8, yn, aX9, hD, n6, n7, aWm, aXA, a8u, aXC, kj, el = s8.lx,
							mC = s8.mC,
							m1 = s8.m1,
							a6P = s8.a6P,
							aVU = s8.aVU,
							iV = bM.iV.iV,
							aXE = iV.length,
							aXF = bM.iV.aXF,
							aVy = bR.ew << 4,
							aXG = aD.hf,
							aSs = bf.ej,
							gK = (el - 1) * (bK.ds(be.k5(), 2) % 2);
						for (aB = 0; aB < el; aB++)
							for (hd = Math.abs(aB - gK), aWm = mC[hd], l1 = bL.iU(aWm), hD = m1[hd] >> 3, n6 = aWm % aVy, n7 = ~~((aWm + .5) / aVy), aXC = a6P[hd], f5 = 0; f5 < 9; f5++)
								if (!((aX8 = l1 + aXF[f5]) < 0 || aXE <= aX8))
									for (aX9 = iV[aX8], yn = aX9.length, f6 = 0; f6 < yn; f6++) aXA = aX9[f6], kj = m1[aXA] >> 3, hD == kj || aXG && aSs[hD] === aSs[kj] && aSs[hD] || (kj = mC[aXA], (a8u = n6 - kj % aVy) * a8u + (a8u = n7 - ~~
										((kj + .5) / aVy)) * a8u < 14400 && (kj = a6P[aXA], a8u = kj <= aXC ? Math.max(1, bK.ds(kj + bK.ds(aXC - kj, 10), 10)) : Math.max(1, bK.ds(aXC, 10)), a6P[aXA] = Math.max(kj - a8u, 0), aVU[aXA] =
										4))
					}
				}(this), ! function(s8) {
					if (be.k5() % 5 == 3)
						for (var a6P = s8.a6P, el = s8.lx, aB = 0; aB < el; aB++) {
							var hU = a6P[aB];
							a6P[aB] = Math.max(hU - Math.max(1, hU >> 7), 0)
						}
				}(this), this), a6P = s8.a6P, aVU = s8.aVU, aB = s8.lx - 1; 0 <= aB; aB--) aVU[aB] = aVU[aB] >> 1, 0 === a6P[aB] && (bM.m6.aV4(aB), bM.aH2.aVN(aB));
			bc.gB(gJ, dr - bM.kv.aGz(gJ), 15)
		}
}

function aUe() {
	this.aXH = 32, this.es = 0, this.eu = 0, this.iW = 0, this.aXI = 0, this.aXJ = 4, this.iV = null, this.aXF = new Int16Array(9), this.db = function() {
		this.iW = 1 + bK.ds(bR.ew - 1, this.aXH), this.aXI = 1 + bK.ds(bR.ex - 1, this.aXH), this.iV = new Array(this.iW * this.aXI), b9.qf.a2E(this.iV);
		var es, eu, aXF = this.aXF,
			i = this.iW;
		for (es = -1; es <= 1; es++)
			for (eu = -1; eu <= 1; eu++) aXF[3 * (1 + eu) + 1 + es] = eu * i + es
	}, this.mI = function(aXL, aB) {
		return this.iV[aB].push(aXL), this.iV[aB].length - 1
	}, this.aX6 = function(aXM, aWm, aWw) {
		var aXN, aXO, aWm = bL.iU(aWm),
			aWw = bL.iU(aWw);
		return aWm === aWw ? aXM : (aXN = this.iV[aWm].pop(), this.iV[aWm].length === aXM ? this.mI(aXN, aWw) : (aXO = this.iV[aWm][aXM], this.iV[aWm][aXM] = aXN, bM.y.aVS[aXN] = aXM, this.mI(aXO, aWw)))
	}
}

function aUi() {
	this.ku = function(player, aXP) {
		return -1 !== aXP && !!bM.kv.lW(player, aXP) && this.q0(player, aXP, 0)
	}, this.q0 = function(player, aXP, aXQ) {
		player = function(player, aXP, aXQ) {
			var aWZ = bM.kv.aWB(player, aXP);
			if (-1 === aWZ) return -1;
			aWZ = bM.kv.kw(aWZ, aXP);
			if (-1 === aWZ) return -1;
			var lP = bM.lS.lX(aWZ, aXP);
			if (0 <= lP) return lP;
			if (bM.lS.lY()) return -1;
			if (0 <= (lP = bM.lS.lX(aXP, aWZ))) return bM.lS.lZ(bM.lS.la(bM.lS.get(lP)));
			if (aWZ === aXP) return bM.lS.lZ(new Uint32Array([aWZ, aXP]));
			if (0 <= (lP = bM.aUj.q0(aWZ, aXP))) return lP;
			return aXQ ? function(aXU, player) {
				var fS = bN.fS,
					eI = (fS.fill(0), [aXU]),
					hr = (fS[aXU] = 1, bL.hr),
					aXV = -1,
					el = eI.length;
				for (; - 1 === aXV && el;) {
					for (var g = [], aB = 0; aB < el; aB++)
						for (var eX = eI[aB], a43 = fS[eX], eo = 0; eo < 8; eo++) {
							var w3, a0b, er = eX + hr[eo],
								eP = 4 * er;
							ac.hz(eP) ? (w3 = fS[er], a0b = a43 + 5 + ((1 & eo) << 1), 0 === w3 ? (g.push(er), fS[er] = a0b) : fS[er] = Math.min(a0b, w3)) : -1 === aXV && eo % 2 == 0 && ac.xt(player, eP) && (aXV = eX)
						}
					el = (eI = g).length
				}
				return -1 !== aXV ? function(iC, aXX) {
					var hr = bL.hr,
						aXY = -1,
						hc = 0,
						mc = [];
					for (; aXX !== iC;)(hc = function(eX, hc) {
						var fS = bN.fS,
							hr = bL.hr,
							a43 = fS[eX];
						if (a43 - fS[eX + hr[hc]] != 5 + ((1 & hc) << 1))
							for (var f4 = 0; f4 < 8; f4++) {
								var eo = f4 + hc + 6 & 7;
								if (a43 - fS[eX + hr[eo]] == 5 + ((1 & eo) << 1)) return eo
							}
						return hc
					}(aXX, hc)) !== aXY && (mc.push(aXX), aXY = hc), aXX += hr[hc];
					mc.push(iC);
					var lP = bM.lS.lX(mc[0], iC);
					if (0 <= lP) return lP;
					return bM.lS.lZ(new Uint32Array(mc))
				}(aXU, aXV) : -1
			}(aXP, player) : -1
		}(player, aXP, aXQ);
		return -1 !== player && (bN.g[0] = bM.lS.get(player), !0)
	}
}

function aUk() {
	function aXa(h0, iH, iJ) {
		for (var jP = Math.min(iH, iJ), nO = Math.max(iH, iJ), eu = jP + 1; eu < nO; eu++)
			if (!ac.hz(bL.iP(h0, eu))) return;
		return 1
	}

	function aXb(h2, iG, iI) {
		for (var jP = Math.min(iG, iI), nO = Math.max(iG, iI), es = jP + 1; es < nO; es++)
			if (!ac.hz(bL.iP(es, h2))) return;
		return 1
	}

	function aXc(iG, iH, iI, iJ, aXS, aXP) {
		for (var el = Math.min(Math.abs(iI - iG), Math.abs(iJ - iH)), i5 = Math.sign(iI - iG), i8 = Math.sign(iJ - iH), aB = 0; aB < el; aB++)
			if (!ac.hz(bL.iP(iG += i5, iH += i8))) return null;
		return iG === iI ? aXa(iG, iH, iJ) ? new Uint32Array([aXS, bL.f9(iG, iH), aXP]) : null : aXb(iH, iG, iI) ? new Uint32Array([aXS, bL.f9(iG, iH), aXP]) : null
	}
	this.q0 = function(aXS, aXP) {
		aXS = function(aXS, aXP) {
			var iG = bL.et(aXS),
				iH = bL.ev(aXS),
				iI = bL.et(aXP),
				iJ = bL.ev(aXP);
			if (iG === iI) {
				if (aXa(iG, iH, iJ)) return new Uint32Array([aXS, aXP])
			} else {
				if (iH !== iJ) return aXc(iG, iH, iI, iJ, aXS, aXP) || aXc(iI, iJ, iG, iH, aXS, aXP);
				if (aXb(iH, iG, iI)) return new Uint32Array([aXS, aXP])
			}
			return null
		}(aXS, aXP);
		return null === aXS ? -1 : bM.lS.lZ(aXS)
	}
}

function aUp() {
	var aXd = [];
	this.db = function() {
		aXd = []
	}, this.lY = function() {
		return 65536 === aXd.length
	}, this.lX = function(aXS, aXP) {
		for (var lS = aXd, el = lS.length, aB = 0; aB < el; aB++) {
			var gJ = lS[aB];
			if (gJ[0] === aXS && gJ[gJ.length - 1] === aXP) return aB
		}
		return -1
	}, this.la = function(lR) {
		var aXe = new Uint32Array(lR.length);
		return aXe.set(lR), aXe.reverse()
	}, this.aVB = function(hD, kj) {
		var gE = hD.length - 1,
			aXf = new Uint32Array(gE + kj.length);
		return aXf.set(hD, 0), aXf.set(kj, gE), aXf
	}, this.aVG = function(hD, kj, aAM, eX, aXg) {
		aXg && (aAM = (kj = this.la(kj)).length - aAM - 2);
		aXg = kj.subarray(aAM + 1 + (eX === kj[aAM + 1])), eX = new Uint32Array(hD.length + aXg.length);
		return eX.set(hD, 0), eX.set(aXg, hD.length), eX
	}, this.lZ = function(lR) {
		return aXd.push(lR), aXd.length - 1
	}, this.get = function(aB) {
		return aXd[aB]
	}, this.lU = function() {
		return aXd
	}, this.aXi = function(aXS, aXP) {
		return null
	}
}

function aUt() {
	this.j1 = function(player, n3) {
		player = bM.kv.n5(player, n3);
		return !(player < 0 || !bM.m6.aVI(player) || (bM.m6.aV4(player), 0))
	}
}

function aUf() {
	var yS = 32,
		yR = new Array(2);

	function wJ(f6) {
		var es, eu, eX, i8, i5, hh = yS,
			a2h = b9.qX.wJ(hh, hh),
			hn = b9.qX.getContext(a2h, !0),
			hk = b9.qX.getImageData(hn, hh, hh),
			wU = hk.data,
			l1 = (hh >> 1) - .5,
			l2 = Math.sqrt(l1 * l1);
		for (wU.fill(255), eu = 0; eu < hh; eu++)
			for (es = 0; es < hh; es++) i5 = es - l1, i8 = eu - l1, eX = 4 * (eu * hh + es), i5 = 714 * (l2 - Math.sqrt(i5 * i5 + i8 * i8)) / l2, wU[2 + eX] = f6, wU[3 + eX] = 255 < i5 ? 0 : i5;
		return hn.putImageData(hk, 0, 0), a2h
	}
	this.aXj = -1, this.db = function() {
		this.aXj = -1, yR[0] || (yR[0] = wJ(255), yR[1] = wJ(0))
	}, this.aXk = function(hn, eP, es, eu, e5, aB) {
		b9.g7.gx(aD.eV) && (hn.setTransform(eP *= 4 / 3 * .625, 0, 0, eP, es - (e5 *= 4 / 3), eu - e5), hn.drawImage(yR[+(bM.y.m0[aB] === this.aXj)], 0, 0))
	}
}

function aUo() {
	function aTA(es, el, eu, aXl, a90, fC, player) {
		if (!(eu < 1 || a90 < eu))
			for (var aB = 0; aB <= el; aB++) {
				var eP = bL.iP(es, eu);
				if (bM.kv.aVM(eP) && !b9.qf.has(aXl, ac.eT(eP)) && ac.xl(eP, player)) return eP >> 2;
				es += fC
			}
		return -1
	}

	function aTE(eu, el, es, aXl, aT8, fC, player) {
		if (!(es < 1 || aT8 < es)) {
			el = Math.max(el, 0);
			for (var aB = 0; aB <= el; aB++) {
				var eP = bL.iP(es, eu);
				if (bM.kv.aVM(eP) && !b9.qf.has(aXl, ac.eT(eP)) && ac.xl(eP, player)) return eP >> 2;
				eu += fC
			}
		}
		return -1
	}

	function aTI(iC, iD, aT5) {
		return -1 !== iD && (-1 === iC || bL.iE(iD, aT5) < bL.iE(iC, aT5)) ? iD : iC
	}
	this.hM = function(player, aT5) {
		if (bM.mD.mE(player))
			for (var aT6 = bL.hs(), aXl = [];;) {
				var aXV = function(aT5, aT6, aXl, player) {
					for (var h0 = bL.et(aT5), h2 = bL.ev(aT5), aT8 = bR.ew - 2, a90 = bR.ex - 2, aT9 = -1, eo = 0; eo < aT6; eo++) {
						var a8z = Math.max(h0 - eo, 1),
							aKT = Math.max(h2 - eo, 1),
							xh = Math.min(h0 + eo, aT8),
							xg = Math.min(h2 + eo, a90),
							iC = aTA(h0, xh - h0, h2 - eo, aXl, a90, 1, player),
							iD = aTA(h0 - 1, h0 - a8z - 1, h2 - eo, aXl, a90, -1, player),
							xh = aTA(h0, xh - h0, h2 + eo, aXl, a90, 1, player),
							a8z = aTA(h0 - 1, h0 - a8z - 1, h2 + eo, aXl, a90, -1, player),
							aTD = aTE(h2, xg - h2 - 1, h0 - eo, aXl, aT8, 1, player),
							aTF = aTE(h2 - 1, h2 - aKT - 2, h0 - eo, aXl, aT8, -1, player),
							xg = aTE(h2, xg - h2 - 1, h0 + eo, aXl, aT8, 1, player),
							aKT = aTE(h2 - 1, h2 - aKT - 2, h0 + eo, aXl, aT8, -1, player);
						if (aT9 = aTI(aT9, iC, aT5), aT9 = aTI(aT9, iD, aT5), aT9 = aTI(aT9, xh, aT5), aT9 = aTI(aT9, a8z, aT5), aT9 = aTI(aT9, aTD, aT5), aT9 = aTI(aT9, aTF, aT5), aT9 = aTI(aT9, xg, aT5), 0 <= (aT9 = aTI(aT9, aKT, aT5)) &&
							eo * eo >= bL.iE(aT9, aT5)) return aT9
					}
					return -1
				}(aT5, aT6, aXl, player);
				if (-1 === aXV) break;
				var id = ac.eT(bL.eb(aXV));
				if (bM.kv.aW9(player, id)) return !! function(player, aXV, aT5) {
					for (var hc = bL.iZ(aXV, aT5), aB = 0; aB < 4; aB++) {
						var eX = bL.iX(aXV, hc);
						if (ac.aGd(bL.eb(eX), player)) return bN.fN[6] = hc, 1;
						hc = (hc + 1) % 4
					}
					return
				}(player, aXV, aT5) && (bN.fN[7] = aXV, !0);
				aXl.push(id)
			}
		return !1
	}
}

function de() {
	this.aQb = [L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448), L(449)];
	var aXo = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBK = new Array(aXo.length), this.db = function() {
		var g = bi.eI.data[155].value.split(";"),
			l1 = g.length;
		if (function() {
				for (var el = aXo.length, aB = 0; aB < el; aB++) bW.aBK[aB] = aXo[aB]
			}(), !(l1 > aXo.length))
			for (var aB = 0; aB < l1; aB++) g[aB].length && (this.aBK[aB] = g[aB])
	}, this.aQd = function(e6, code) {
		for (var aBK = this.aBK, aXq = aXo, qE = (aBK[e6] = code, ""), el = aBK.length, aXr = [], aB = 0; aB < el; aB++) aXr.push(aBK[aB] === aXq[aB] ? "" : aBK[aB]);
		el--;
		for (aB = 0; aB < el; aB++) qE += aXr[aB] + ";";
		bi.ry.rz(155, qE += aXr[el])
	}, this.aQa = function() {
		bi.ry.rz(155, ""), this.db()
	}, this.f6 = function(code, e6) {
		return code === this.aBK[e6] || code === this.aBK[e6 + 1]
	}
}

function dW() {
	var aXs = new Array(1),
		aXt = new Array(1),
		aXu = 20,
		eJ = 0,
		aXv = !1;

	function aXx() {
		aXu++, bo.play()
	}
	this.db = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aXt[aB] = 0, aXs[aB] = document.createElement("audio"), aXs[aB].src = src, aXs[aB].setAttribute("preload", "auto"), aXs[aB].setAttribute("controls", "none"), aXs[aB].style.display = "none", aXs[aB].onpause = function() {
					aXt[aB] = 1
				}, aXs[aB].oncanplaythrough = function() {
					aXt[aB] = 0 === aXt[aB] ? 1 : aXt[aB]
				}, document.body.appendChild(aXs[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aXv = !0
		}
	}, this.u7 = function() {
		if (aXv) {
			aXv = !1;
			for (var aB = 0; 0 <= aB; aB--) aXs[aB].onpause = null, aXs[aB].oncanplaythrough = null, document.body.removeChild(aXs[aB]), aXs[aB] = null
		}
	}, this.play = function() {
		if (aXv) {
			var dr = performance.now();
			if (eJ + 66 < dr)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aXt[aB]) return eJ = dr, aXt[aB] = 2, void aXs[aB].play();
			0 < aXu && (aXu--, setTimeout(aXx, 66))
		}
	}
}

function cY() {
	this.a80 = function() {
		var aY0;
		return !(al.k9 < 3 || ag.gZ[li[0]] >= aD.js >> 1) && (aD.hf ? (aY0 = ae.aI1(), !(2 * ae.aI2(bg.kg()) >= aY0)) : function() {
			var aY0 = ae.aI1();
			if (2 * ag.gn[li[0]] >= aY0) return !1;
			return !0
		}())
	}
}

function c9() {
	this.db = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aWn = aD.k8, gn = ag.gn, aB = 0; aB < aWn; aB++) gn[aB] = 512;
			var aWo = aD.wz,
				kL = aE.kL,
				hU = aE.hU;
			for (aB = aWn; aB < aWo; aB++) gn[aB] = kL[hU[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var el = aD.wz, gn = ag.gn, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < el; aB++) gn[aB] = sResourcesValue
		} : function() {
			for (var el = aD.wz, gn = ag.gn, sResourcesData = aD.data.sResourcesData, aB = 0; aB < el; aB++) gn[aB] = sResourcesData[aB]
		})();
		bc.mc[8] = ag.gn[aD.eV]
	}
}

function dN() {
	var aGl = 501,
		aY6 = (this.aY5 = new Uint32Array(aGl), this.a3M = new Uint32Array(aGl), this.aAz = new Uint16Array(aGl), this.aQj = 0, 1),
		aY7 = 0;

	function aYA(self) {
		self.max.fill(0)
	}

	function aYC(self, aB) {
		self.max[0] = Math.max(self.aY5[aB], self.max[0]), self.max[1] = Math.max(self.a3M[aB], self.max[1]), self.max[2] = Math.max(self.aAz[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aY8 = 0, this.mc = new Array(21), this.aY9 = null, this.dc = function() {
		this.aY9 = [L(450), L(451), L(452), L(453), L(454), L(455), L(456), L(457), L(287), L(288), L(458), L(459), L(460), L(461), "", L(462), L(463), L(464), L(247), L(465), L(466)]
	}, this.db = function() {
		this.aQj = 0, aY6 = 1, this.aY8 = 0, aY7 = 0, aYA(this), this.mc.fill(0)
	}, this.px = function(player, iL) {
		b9.g7.a3H(player) && (this.mc[0] += iL + 1, this.mc[1]++, this.mc[12] += bN.fI[1])
	}, this.pR = function(player, p5) {
		__fx.donationsTracker.logDonation(player, p5, bN.fI[0]);
		player === aD.eV && (aN.pR(bN.fI[0], bN.fI[1], p5), this.mc[12] += bN.fI[1], this.mc[16] += bN.fI[0]), p5 === aD.eV && (aN.a6d(bN.fI[0], player), this.mc[10] += bN.fI[0])
	}, this.q1 = function(player) {
		b9.g7.a3H(player) && (this.mc[2]++, this.mc[12] += bN.fI[1])
	}, this.q9 = function(player) {
		b9.g7.a3H(player) && (this.mc[19]++, this.mc[12] += bN.fI[1])
	}, this.aWh = function(player) {
		b9.g7.a3H(player) && this.mc[20]++
	}, this.gB = function(player, a43, e6) {
		b9.g7.a3H(player) && (this.mc[e6] += a43)
	}, this.j1 = function() {
		var self;
		this.aY8 || 0 < aY7-- || ((self = this).aY5[self.aQj] = ag.gZ[aD.eV], self.a3M[self.aQj] = ag.gn[aD.eV], self.aAz[self.aQj] = ae.aB0(aD.eV), aYC(self, self.aQj), self.aQj++, self.aQj === aGl && function(self) {
			aYA(self), aYC(self, 0), self.aQj = 1 + bK.ds(aGl, 2);
			for (var aB = 1; aB < self.aQj; aB++) self.aY5[aB] = self.aY5[2 * aB], self.a3M[aB] = self.a3M[2 * aB], self.aAz[aB] = self.aAz[2 * aB], aYC(self, aB);
			aY6 *= 2
		}(self), aY7 = aY6 - 1, bd.mT(), 0 === ag.mg[aD.eV] && (self.aY8 = be.k5()))
	}
}

function dO() {
	this.i = 0, this.j = 0, this.ss = 0, this.st = 0, this.aYE = 0, this.aYF = 0, this.a8D = 0, this.ta = 0;
	var aYH = this.aYG = 0;
	this.aYI = 0, this.aYJ = 0, this.aYK = 0, this.a7Z = 0, this.e6 = 0, this.aAa = null, this.hX = !1, this.aYL = -1, this.aYM = !1, this.aYN = [0, 0], this.dc = function() {
		this.aAa = [L(467), L(120, 0, "Balance"), L(119, 0, "Interest"), L(468)]
	}, this.db = function() {
		this.hX = !1, this.aYL = -1, this.aYM = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eo = a0.a1.hu() && h.i < h.j ? 1 : a0.a1.hu() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eo * this.i), this.i -= a0.a1.hu() && h.i < h.j ? 2 * bb.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7Z = Math.floor(this.j / 150), this.a7Z = Math.max(this.a7Z, 1.5), this.ss = Math.floor(1 + .02 * this
			.i), this.st = Math.floor(1 + .04 * this.i), this.a8D = this.st, aYH = Math.floor(.75 * this.a8D), this.ta = Math.floor(1 + .075 * this.i), this.aYI = Math.floor(1 + .1125 * this.i), this.aYJ = Math.floor(this.i * (a0.a1.hu() ? .03 :
				.029)), this.aYJ = Math.max(this.aYJ, 4), this.aYK = Math.floor(.035 * this.i), this.aYK = Math.max(this.aYK, 4), this.aYG = this.j - 2 * this.a8D - this.ta - this.aYI, this.hX && this.aYO()
	}, this.gy = function(lL, lM) {
		var x2, x1;
		return !!this.hX && (x1 = lL, x2 = lM, lL -= bK.ds(h.i - this.i, 2), lM -= bK.ds(h.j - this.j, 2), lL < 0 || lM < 0 || lL >= this.i || lM >= this.j || lL >= this.i - this.aYI && lM < this.aYI ? -1 !== aM.gy(x1, x2) || bB.gy(x1, x2) ||
			this.ro() : lM < this.aYI || (lM < this.j - this.ta ? (this.aYM = !0, this.aYL = (lL - 2 * this.ss - this.aYE) / this.aYF, 3 !== this.e6 && (be.dj = !0)) : (x1 = (x1 = Math.floor(lL / (this.i / this.aAa.length))) < 0 ? 0 : x1 >=
				this.aAa.length ? this.aAa.length - 1 : x1) !== this.e6 && (this.e6 = x1, this.aYO(), be.dj = !0)), !0)
	}, this.a1N = function(lL, lM) {
		return this.aYN[0] = lL, this.aYN[1] = lM, !(!this.hX || !this.aYM || (lL -= bK.ds(h.i - this.i, 2), lM = this.aYL, this.aYL = (lL - 2 * this.ss - this.aYE) / this.aYF, (0 <= this.aYL && this.aYL <= 1 || 0 <= lM && lM <= 1) && (be.dj = !
			0), 0))
	}, this.a1m = function() {
		this.aYM && (this.aYM = !1)
	}, this.a1y = function() {
		this.hX ? this.ro() : this.show()
	}, this.show = function() {
		bc.aQj < 2 || (this.hX = !0, this.aYO())
	}, this.ro = function() {
		this.hX = !1, this.aYL = -1, be.dj = !0
	}, this.aYO = function() {
		this.e6 < 2 ? this.aYE = aQ.measureText(b9.rW.z9(bc.max[this.e6]), b9.qX.sL(0, this.aYJ)) : 2 === this.e6 && (this.aYE = aQ.measureText(b9.rW.a3w(6, 2), b9.qX.sL(0, this.aYJ))), this.aYF = this.i - 2 * this.ss - this.aYE - this.st
	}, this.mT = function() {
		this.hX && this.aYO()
	}, this.ud = function() {
		this.hX && this.a8V()
	}, this.a8V = function() {
		var es = bK.ds(h.i - this.i, 2),
			eu = bK.ds(h.j - this.j, 2);
		ue.setTransform(1, 0, 0, 1, es, eu), ue.fillStyle = bA.nd, ue.fillRect(0, this.aYI, this.i, this.j - this.aYI), this.aYP(), this.aPY(), ue.strokeRect(0, 0, this.i, this.j), b9.qX.textAlign(ue, 2), ue.font = b9.qX.sL(0, this.aYJ), 0 ===
			this.e6 ? this.aYQ(bc.aY5, es, eu) : 1 === this.e6 ? this.aYQ(bc.a3M, es, eu) : 2 === this.e6 ? this.aYR(es, eu) : 3 === this.e6 && (this.aYS(es, eu), this.aYT(es, eu)), aM.a5i(Math.floor(es + this.i - .725 * this.aYI), Math.floor(
				eu + .275 * this.aYI), Math.floor(.45 * this.aYI)), ue.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aYP = function() {
		var aB, dr;
		for (ue.lineWidth = this.a7Z, b9.qX.textBaseline(ue, 1), b9.qX.textAlign(ue, 1), ue.strokeStyle = bA.ng, ue.font = b9.qX.sL(1, this.aYK), dr = this.i / this.aAa.length, ue.fillStyle = bA.o2, ue.fillRect(this.e6 * dr, this.j - this.ta, dr,
				this.ta), ue.fillStyle = bA.ng, ue.fillRect(0, this.j - this.ta - .5 * this.a7Z, this.i, this.a7Z), aB = 1; aB <= 3; aB++) ue.fillRect(aB * dr, this.j - this.ta, this.a7Z, this.ta);
		for (aB = this.aAa.length - 1; 0 <= aB; aB--) ue.fillText(b9.y4.a2t(this.aAa[aB], 0, .9 * dr), (aB + .5) * dr, this.j - .46 * this.ta)
	}, this.aPY = function() {
		ue.fillStyle = bA.oS, ue.fillRect(0, 0, this.i, this.aYI), ue.fillStyle = bA.ng, ue.fillRect(0, this.aYI - .5 * this.a7Z, this.i, this.a7Z), ue.font = b9.qX.sL(1, .39 * this.aYI), ue.fillText(b9.y4.a2t(L(469), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aYI))
	}, this.aYQ = function(g, es, eu) {
		var l1 = bc.max[this.e6],
			a2G = (ue.setTransform(1, 0, 0, 1, es + 2 * this.ss + this.aYE, eu + this.a8D + this.aYI), ue.lineWidth = 2, this.aYG / Math.sqrt(l1));
		ue.beginPath(), ue.moveTo(this.aYF, this.aYG - a2G * Math.sqrt(g[bc.aQj - 1]));
		for (var aB = bc.aQj - 2; 0 <= aB; aB--) ue.lineTo(aB * this.aYF / (bc.aQj - 1), this.aYG - a2G * Math.sqrt(g[aB]));
		ue.stroke();
		es = this.a5i(g, a2G, .5);
		es < .95 && ue.fillText(b9.rW.z9(l1), -this.ss, 0), .05 < Math.abs(es - .5) && ue.fillText(b9.rW.z9(Math.floor(l1 / 4)), -this.ss, Math.floor(this.aYG / 2)), .05 < es && ue.fillText("0", -this.ss, this.aYG)
	}, this.aYR = function(es, eu) {
		ue.setTransform(1, 0, 0, 1, es + 2 * this.ss + this.aYE, eu + this.a8D + this.aYI), ue.lineWidth = 2;
		var a2G = this.aYG / Math.max(bc.max[this.e6], 1);
		ue.beginPath(), ue.moveTo(this.aYF, this.aYG - a2G * bc.aAz[bc.aQj - 1]);
		for (var aB = bc.aQj - 2; 0 <= aB; aB--) ue.lineTo(aB * this.aYF / (bc.aQj - 1), this.aYG - a2G * bc.aAz[aB]);
		ue.stroke();
		es = this.a5i(bc.aAz, a2G, 1), eu = bc.max[this.e6] / 100;
		es < .95 && ue.fillText(b9.rW.a3w(eu, 2), -this.ss, 0), .05 < Math.abs(es - .5) && ue.fillText(b9.rW.a3w(eu / 2, 2), -this.ss, Math.floor(this.aYG / 2)), .05 < es && ue.fillText(b9.rW.a3w(0, 2), -this.ss, this.aYG)
	}, this.aYS = function(es, eu) {
		ue.setTransform(1, 0, 0, 1, es + .34 * this.i, eu + 2 * aYH + this.aYI), b9.qX.textAlign(ue, 2);
		for (var aAL = this.j - 4 * aYH - this.ta - this.aYI, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) ue.fillText(b9.y4.a2t(bc.aY9[g[aB]], 0, .31 * this.i), 0, aB * aAL / 9);
		var fD = bc.mc;
		for (ue.setTransform(1, 0, 0, 1, es + .39 * this.i, eu + 2 * aYH + this.aYI), b9.qX.textAlign(ue, 0), ue.fillText(b9.rW.a3w(100 * fD[0] / (1024 * Math.max(fD[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) ue.fillText(fD[g[aB]].toString(), 0,
			aB * aAL / 9);
		ue.fillText(b9.rW.a3w(100 * (1 - ag.gZ[aD.eV] / fD[7]), 0), 0, aAL)
	}, this.aYT = function(es, eu) {
		ue.setTransform(1, 0, 0, 1, es + .79 * this.i, eu + 2 * aYH + this.aYI), b9.qX.textAlign(ue, 2);
		var aB, aAL = this.j - 4 * aYH - this.ta - this.aYI;
		for (ue.fillStyle = bA.nx, aB = 2; 0 <= aB; aB--) ue.fillText(b9.y4.a2t(bc.aY9[aB + 8], 0, .31 * this.i), 0, aB * aAL / 9);
		ue.fillText(b9.y4.a2t(bc.aY9[18], 0, .31 * this.i), 0, 3 * aAL / 9), ue.fillStyle = bA.nw, ue.fillText(b9.y4.a2t(bc.aY9[11], 0, .31 * this.i), 0, 4 * aAL / 9), ue.fillStyle = bA.oF, ue.fillText(b9.y4.a2t(bc.aY9[13], 0, .31 * this.i), 0,
				5 * aAL / 9), ue.fillText(b9.y4.a2t(bc.aY9[15], 0, .31 * this.i), 0, 6 * aAL / 9), ue.fillText(b9.y4.a2t(bc.aY9[16], 0, .31 * this.i), 0, 7 * aAL / 9), ue.fillText(b9.y4.a2t(bc.aY9[12], 0, .31 * this.i), 0, 8 * aAL / 9), ue
			.fillStyle = bA.oE, ue.fillText(b9.y4.a2t(bc.aY9[17], 0, .31 * this.i), 0, aAL), ue.fillStyle = bA.nx;
		var fD = bc.mc,
			aEA = fD[8] + fD[9] + fD[10] + fD[18],
			aEA = b9.rW.z9(aEA),
			aOL = ue.measureText(aEA).width,
			es = (ue.setTransform(1, 0, 0, 1, es + .83 * this.i + aOL, eu + 2 * aYH + this.aYI), ue.fillText(b9.rW.z9(fD[8]), 0, 0), ue.fillText(b9.rW.z9(fD[9]), 0, aAL / 9), ue.fillText(b9.rW.z9(fD[10]), 0, 2 * aAL / 9), ue.fillText(b9.rW.z9(fD[
				18]), 0, 3 * aAL / 9), ue.fillStyle = bA.nw, ue.fillText(aEA, 0, 4 * aAL / 9), ue.fillStyle = bA.oF, ue.fillText(b9.rW.z9(fD[13]), 0, 5 * aAL / 9), ue.fillText(b9.rW.z9(fD[15]), 0, 6 * aAL / 9), ue.fillText(b9.rW.z9(fD[16]),
				0, 7 * aAL / 9), ue.fillText(b9.rW.z9(fD[12]), 0, 8 * aAL / 9), fD[12] + fD[13] + fD[15] + fD[16]);
		ue.fillStyle = bA.oE, ue.fillText(b9.rW.z9(es), 0, aAL), ue.fillStyle = bA.ng
	}, this.a5i = function(g, a2G, a98) {
		var aB, e, fU;
		return this.aYL < 0 || 1 < this.aYL ? .25 : (aB = this.aYL * (bc.aQj - 1), fU = g[e = Math.floor(aB)], fU += (aB - e) * (g[e < bc.aQj - 1 ? e + 1 : e] - fU), ue.strokeStyle = bA.nj, .04 < this.aYL && this.aYV(0, this.aYG - a2G * Math.pow(
				fU, a98), aB * this.aYF / (bc.aQj - 1), this.aYG - a2G * Math.pow(fU, a98)), .04 < fU / bc.max[this.e6] && this.aYV(aB * this.aYF / (bc.aQj - 1), this.aYG, aB * this.aYF / (bc.aQj - 1), this.aYG - a2G * Math.pow(fU, a98)), ue
			.fillStyle = bA.oH, ue.beginPath(), ue.arc(aB * this.aYF / (bc.aQj - 1), this.aYG - a2G * Math.pow(fU, a98), Math.max(2, .014 * this.j), 0, 2 * Math.PI), ue.fill(), g = this.aYL * be.aB1, g = 0 === ag.mg[aD.eV] ? Math.floor(g * bc
				.aY8) : Math.floor(g * be.k5()), ue.fillStyle = bA.ng, ue.fillText(1 === a98 ? b9.rW.a3w(fU / 100, 2) : b9.rW.z9(Math.floor(fU)), -this.ss, this.aYG - a2G * Math.pow(fU, a98)), b9.qX.textAlign(ue, 1), ue.fillText(aW.aAo(g),
				aB * this.aYF / (bc.aQj - 1), this.aYG + this.aYJ - (a0.a1.hu() ? 2 : 0) - this.a7Z), b9.qX.textAlign(ue, 2), a2G * Math.pow(fU, a98) / this.aYG)
	}, this.aYV = function(n6, n7, nJ, nK) {
		ue.beginPath(), ue.moveTo(n6, n7), ue.lineTo(nJ, nK), ue.stroke()
	}
}

function bx() {
	this.aYW = "https://", this.aYX = this.aYW + "territorial.io/", this.aQk = this.aYX + "changelog", this.aQo = this.aYX + "terms", this.aYY = this.aYX + "cookie_policy", this.aQB = this.aYX + "privacy", this.aQn = this.aYX + "tutorial", this.aQm =
		this.aYX + "players", this.aQl = this.aYX + "clans", this.a0e = this.aYX + "clan-results", this.aNU = "https://patreon.com/c/territorial", this.aCJ = this.aYW + "play.google.com/store/apps/details?id=territorial.io", this.a0x = this.aYW +
		"apps.apple.com/app/id1581110913", this.aYZ = this.aYW + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCK = this.aYW + "discord.gg/pthqvpTXmh", this.aCL = this.aYW + "www.instagram.com/davidtschacher/", this.yh =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d6() {
	this.y = new aYa, this.y1 = new aYb, this.db = function() {
		this.y.db()
	}, this.j1 = function() {
		0 !== this.y.a6m && this.y.a6m--
	}
}

function aYb() {
	this.ud = function() {
		if (0 !== bO.y.a6m && (ue.globalAlpha = Math.min(bO.y.a6m / 580, 1), ue.drawImage(bO.y.aYe, 1 + aS.xz(), 1 + aS.y0()), ue.globalAlpha = 1, aD.h9)) {
			for (var n6 = iM / hw, n7 = iN / hw, nJ = (h.i + iM) / hw, nK = (h.j + iN) / hw, gK = bO.y.aYf * hw, aYg = bO.y.aYg, aB = aD.k8 - 1; 0 <= aB; aB--) ! function(aB, gK, n6, n7, nJ, nK, aYg) {
				var highlight;
				0 === ag.mg[aB] || 0 === ag.gZ[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gK *= 2), nJ = h.i * ((ag.ib[aB] + ag.ic[aB] + 1) / 2 - n6) / (nJ - n6) - .5 * gK, n6 = h.j * ((ag.ie[
					aB] + ag.ig[aB] + 1) / 2 - n7) / (nK - n7) - .5 * gK, nJ > h.i) || n6 > h.j || nJ < -gK || n6 < -gK || (highlight ? ue.setTransform(2 * hw, 0, 0, 2 * hw, nJ, n6) : ue.setTransform(hw, 0, 0, hw, nJ, n6), ue.drawImage(
					aYg[aD.hf ? bf.ej[aB] : 1], 0, 0))
			}(aB, gK, n6, n7, nJ, nK, aYg);
			ue.setTransform(hw, 0, 0, hw, 0, 0)
		}
	}
}

function aYa() {
	this.aYf = 28, this.a6m = 0, this.aYe = null;
	var aYi = this.aYg = null;

	function aYl(hh, aYm) {
		var es, eu, eX, i5, a2h = b9.qX.wJ(hh, hh),
			hn = b9.qX.getContext(a2h, !0),
			hk = b9.qX.getImageData(hn, hh, hh),
			wU = hk.data,
			l1 = (hh >> 1) - .5,
			aYn = .5 + l1;
		for (aYn *= aYn, eu = 0; eu < hh; eu++)
			for (es = 0; es < hh; es++) i5 = (i5 = es - l1) * i5 + (i5 = eu - l1) * i5, wU[eX = 4 * (eu * hh + es)] = aYm[0], wU[1 + eX] = aYm[1], wU[2 + eX] = aYm[2], wU[3 + eX] = (aYn - i5) * aYm[3] / aYn;
		return hn.putImageData(hk, 0, 0), a2h
	}

	function aXk(aB, hn, a2h, hh) {
		var highlight, es, eu;
		0 !== ag.mg[aB] && 0 !== ag.gZ[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hh *= 2), es = ag.ib[aB] + ag.ic[aB] + 1 - hh - 2 >> 1, eu = ag.ie[aB] + ag.ig[aB] + 1 - hh - 2 >> 1, highlight ? hn
			.drawImage(a2h[aD.hf ? 9 === aD.kQ && 5 === aE.hU[aB] ? 3 : bf.ej[aB] : aB < aD.k8 ? 1 : 0], es, eu, hh, hh) : hn.drawImage(a2h[aD.hf ? 9 === aD.kQ && 5 === aE.hU[aB] ? 3 : bf.ej[aB] : aB < aD.k8 ? 1 : 0], es, eu))
	}
	this.db = function() {
		var s8;
		this.a6m = 700,
			function(s8) {
				var hh = s8.aYf;
				if (s8.aYg = [], aYi = [], aD.hf) {
					for (var aB = 0; aB <= aD.x6; aB++) s8.aYg.push(aYl(hh, bf.aW4[bf.kV[aB]])), aYi.push(aYl(hh >> 1, bf.aW4[bf.kV[aB]]));
					9 === aD.kQ && aYi.push(aYl(hh, bf.aW4[1]))
				} else s8.aYg.push(aYl(hh, bf.aW4[7])), s8.aYg.push(aYl(hh, bf.aW4[4])), aYi.push(aYl(hh >> 1, bf.aW4[7]))
			}(this),
			function(s8, aYo) {
				var aB, aYe = s8.aYe,
					hn = b9.qX.getContext(aYe, !0),
					el = aD.ei,
					hh = s8.aYf >> 1;
				hn.imageSmoothingEnabled = !1, hn.setTransform(1, 0, 0, 1, 0, 0), aYo && hn.clearRect(0, 0, aYe.width, aYe.height);
				if (9 === aD.kQ) {
					hh <<= 1;
					s8 = ay.kZ[5];
					for (aB = el - s8; aB < el; aB++) aXk(aB, hn, aYi, hh);
					el -= s8, hh >>= 1
				}
				for (aB = aD.k8; aB < el; aB++) aXk(aB, hn, aYi, hh)
			}(this, null !== (s8 = this).aYe && s8.aYe.width === bR.ew - 2 && s8.aYe.height === bR.ex - 2 || (s8.aYe = b9.qX.wJ(bR.ew - 2, bR.ex - 2), !1)), aD.h9 || this.a4E()
	}, this.aW3 = aYl, this.a4E = function() {
		for (var el = aD.k8, hh = this.aYf, aYg = this.aYg, hn = b9.qX.getContext(this.aYe, !0), aB = 0; aB < el; aB++) aXk(aB, hn, aYg, hh)
	}
}

function d7() {
	function aYr() {
		8 === aD.kQ && 1 === aD.zs && bQ.zU.zr()
	}

	function aYq(player) {
		aD.h9 ? (ak.aGt(player), al.aJo(), aD.kS && aD.pt.j1()) : b2.aCb(player)
	}
	this.pL = function(player) {
		aN.a04(player, player === aD.eV ? 21 : 22), aYq(player), aYr()
	}, this.pq = function(player) {
		1 === aD.zs && 0 !== ag.mg[player] && 2 !== ag.a3D[player] && aYq(player), aD.zv--, aD.zu--, aN.a04(player, 4), b9.g7.gw(2) && aW.mS(!0), aYr()
	}
}

function dH() {
	this.aT3 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAI = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bA.ng, "rgb(170,170,170)"
	], this.aYs = [bA.ng, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bA.ng, bA.nX], this.aYt = [bA.nX, bA.ng, bA.ng, bA.ng, bA.nX, bA.nX, bA.nX, bA.nX, bA.ng];
	var aYu = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJG = ["rgba(" + aYu[0] + ",", "rgba(" + aYu[1] + ",", "rgba(" + aYu[2] + ",", "rgba(" + aYu[3] + ",", "rgba(" + aYu[4] + ",", "rgba(" + aYu[5] + ",", "rgba(" + aYu[6] + ",", "rgba(" + aYu[7] + ",", "rgba(" + aYu[8] + ",", "rgba(" + aYu[9] +
			","
		], this.aJH = ["rgb(" + aYu[0] + ")", "rgb(" + aYu[1] + ")", "rgb(" + aYu[2] + ")", "rgb(" + aYu[3] + ")", "rgb(" + aYu[4] + ")", "rgb(" + aYu[5] + ")", "rgb(" + aYu[6] + ")", "rgb(" + aYu[7] + ")", "rgb(" + aYu[8] + ")", "rgb(" + aYu[9] +
			")"
		], this.a0D = null, this.aW4 = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aVj = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kV = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.ej = new Uint8Array(aD.ei), this.aAJ = new Uint8Array(aD.ei), this.xC = new Uint16Array(aD.ei), this.xD = new Uint16Array(this.kV.length + 1), this.xE = new Uint16Array(this.kV.length), this.dc =
		function() {
			this.a0D = [L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478)]
		}, this.db = function() {
			if (this.ej.fill(0), this.aAJ.fill(0), this.aYv(), aD.hf) {
				if (9 === aD.kQ) {
					for (var ej = bf.ej, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) ej[aB] = 1;
					var el = aD.ei;
					for (aB = aD.data.teamPlayerCount[7]; aB < el; aB++) ej[aB] = 2;
					bf.kV[1] = 7, bf.kV[2] = 8
				} else aD.kS ? function() {
					var aVj = bf.aVj,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.k8 - 1; 0 <= aB; aB--) colorsData[aB] = ax.jQ(262144);
					var aZ6 = 0,
						f1 = 768,
						aSY = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var eo = 0, f5 = 0; f5 < 3; f5++) eo += Math.abs(aVj[aB][f5] - aSY[f5]);
							eo < f1 && (aZ6 = aB, f1 = eo)
						} var aZ7 = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aZ7[aB] = teamPlayerCount[aB];
					var kV = bf.kV,
						aZ8 = new Uint8Array(9),
						gE = (kV[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aZ7[aB] && (aZ8[aB] = gE, kV[gE++] = aB);
					var jP = aD.k8,
						ej = bf.ej;
					aZ7[aZ6] ? (aZ7[aZ6]--, ej[0] = aZ8[aZ6]) : jP = 0;
					var f6 = 0;
					for (aB = jP; aB < aD.wz; aB++) {
						var hd = kV[f6];
						if (aZ7[hd]) aZ7[hd]--, ej[aB] = aZ8[hd];
						else if (aB--, 9 <= ++f6) return console.log("error 325")
					}
				}() : this.j1();
				! function() {
					for (var el = aD.ei, xC = bf.xC, xD = bf.xD, xE = bf.xE, ej = bf.ej, kV = bf.kV, x5 = kV.length, eI = new Array(x5), aB = 0; aB < x5; aB++) eI[aB] = [];
					for (aB = 0; aB < el; aB++) eI[kV[ej[aB]]].push(aB);
					for (aB = 1; aB <= x5; aB++) xD[aB] = xD[aB - 1] + eI[aB - 1].length;
					for (aB = 0; aB < x5; aB++)
						for (var gE = eI[aB].length, l1 = xD[aB], hd = 0; hd < gE; hd++) xC[hd + l1] = eI[aB][hd];
					var k8 = aD.k8;
					for (aB = 0; aB < x5; aB++)
						for (gE = eI[aB].length, l1 = xD[aB], hd = 0; hd < gE; hd++)
							if (xC[hd + l1] >= k8) {
								xE[aB] = hd;
								break
							}
				}(), ! function() {
					for (var el = aD.ei, ej = bf.ej, aAJ = bf.aAJ, kV = bf.kV, aB = 0; aB < el; aB++) aAJ[aB] = kV[ej[aB]];
					9 === aD.kQ && aAJ.fill(1, el - ay.kZ[5])
				}()
			}
		}, this.aYv = function() {
			for (var aB = this.kV.length - 1; 0 <= aB; aB--) this.kV[aB] = aB
		}, this.j1 = function() {
			var yy = new Uint8Array(aD.k8),
				yz = new Uint8Array(aD.k8),
				aZ0 = new Uint16Array(8),
				aZ1 = new Uint16Array(this.kV.length);
			this.aZ2(yy, yz, aZ0, 1), this.aGT(aZ0), this.aZ3(aZ1, yy, yz), this.aZ4(yy, yz, aZ1), this.aZ5()
		}, this.aZ2 = function(yy, yz, aZ7, aZ9) {
			for (var f5, e, aZA, el = this.kV.length - aZ9, g = new Uint16Array(el), aVj = this.aVj, colorsData = aD.data.colorsData, aB = aD.k8 - 1; 0 <= aB; aB--) {
				for (f5 = el; aZ9 <= f5; f5--) g[f5 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aVj[f5][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aVj[f5][1]) + Math.abs(4 * (63 & colorsData[aB]) - aVj[f5][2]);
				for (aZA = 768, f5 = el - 1; 0 <= f5; f5--) g[e = (f5 + aB) % el] < aZA && (aZA = g[e], yy[aB] = e);
				for (aZ7[yy[aB]] += 4, aZA = 768, f5 = el - 1; 0 <= f5; f5--) g[e = (f5 + aB) % el] < aZA && e !== yy[aB] && (aZA = g[e], yz[aB] = e);
				aZ7[yz[aB]]++
			}
		}, this.aGT = function(aZ7) {
			for (var f5, l3, el = this.kV.length - 1, aB = el; 0 <= aB; aB--) this.kV[aB] = aB;
			for (aB = el - 1; 0 <= aB; aB--) aZ7[aB]++;
			for (aB = 1; aB <= el; aB++) {
				for (l3 = 0, f5 = 1; f5 < el; f5++) aZ7[f5] > aZ7[l3] && (l3 = f5);
				aZ7[l3] = 0, this.kV[aB] = l3 + 1
			}
		}, this.aZ3 = function(aZ1, yy, yz) {
			var f5, a0Y, f6, eo, e, nI, t9, aZB = this.kV.length - 1,
				r0 = new Uint16Array(aZB),
				aZC = [],
				aZD = 0,
				a0X = [],
				aZE = [];
			loop: for (var aB = 0; aB < aD.k8; aB++)
				if (null !== (a0Y = b9.rW.a0Z(ag.a0W[aB]))) {
					for (f5 = a0X.length - 1; 0 <= f5; f5--)
						if (a0Y === a0X[f5]) {
							aZE[f5].push(aB), aZD = Math.max(aZD, aZE[f5].length);
							continue loop
						} a0X.push(a0Y), aZC.push(!1), aZE.push([aB]), aZD = Math.max(aZD, 1)
				}
			for (; 2 < aD.x6 && aZD > bK.ds(aD.k8, aD.x6);) aD.x6--, aD.kQ--;
			for (f5 = a0X.length - 1; 0 <= f5; f5--) {
				for (eo = -1, f6 = a0X.length - 1; 0 <= f6; f6--) !aZC[f6] && (-1 === eo || aZE[f6].length > aZE[eo].length) && (eo = f6);
				for (f6 = aZB - 1; 0 <= f6; f6--) r0[f6] = 1;
				for (f6 = aZE[eo].length - 1; 0 <= f6; f6--) r0[yy[aZE[eo][f6]]] += 3, r0[yz[aZE[eo][f6]]]++;
				for (aB = aZB - 1; 0 <= aB; aB--) {
					for (e = eo % aZB, f6 = aZB - 1; 0 <= f6; f6--) r0[f6] > r0[e] && (e = f6);
					for (nI = -1, f6 = aD.x6; 0 < f6; f6--)
						if (this.kV[f6] === e + 1) {
							nI = f6;
							break
						} if (r0[e] = 0, -1 !== nI) {
						for (t9 = 0, f6 = aD.x6; 0 < f6; f6--) aZ1[nI] > aZ1[f6] && t9++;
						if (t9 !== aD.x6 - 1) {
							for (f6 = aZE[eo].length - 1; 0 <= f6; f6--) aZ1[nI]++, this.ej[aZE[eo][f6]] = nI;
							break
						}
					}
				}
				aZC[eo] = !0
			}
		}, this.aZ4 = function(yy, yz, aZ1) {
			for (var aB, i4, el = this.kV.length - 1, border = bK.ds(aD.k8, aD.x6), aZF = (0 < aD.k8 % aD.x6 && border++, new Uint8Array(1 + el)), f5 = el; 1 <= f5; f5--) aZF[this.kV[f5]] = f5;
			for (aB = 0; aB < aD.k8; aB++) i4 = aZF[yy[aB] + 1], 0 === this.ej[aB] && i4 <= aD.x6 && aZ1[i4] < border && (aZ1[i4]++, this.ej[aB] = i4);
			for (aB = 0; aB < aD.k8; aB++) i4 = aZF[yz[aB] + 1], 0 === this.ej[aB] && i4 <= aD.x6 && aZ1[i4] < border && (aZ1[i4]++, this.ej[aB] = i4);
			for (f5 = aD.x6; 1 <= f5; f5--)
				for (aB = aD.k8 - 1; 0 <= aB && !(aZ1[f5] >= border); aB--) 0 === this.ej[aB] && (aZ1[f5]++, this.ej[aB] = f5)
		}, this.aZ5 = function() {
			for (var aB = aD.k8; aB < aD.ei; aB++) this.ej[aB] = 1 + aB % aD.x6
		}
}

function dZ() {
	this.ga = function() {
		for (var es, eu, aB = fh - 1; 0 <= aB; aB--) es = bK.ds(fj[aB], 4) % bR.ew, eu = bK.ds(fj[aB], 4 * bR.ew), ag.ib[fc] = Math.min(es, ag.ib[fc]), ag.ie[fc] = Math.min(eu, ag.ie[fc]), ag.ic[fc] = Math.max(es, ag.ic[fc]), ag.ig[fc] = Math
			.max(eu, ag.ig[fc])
	}, this.fv = function() {
		var eo, gJ, aB, el = ag.gD[fc].length,
			en = ac.en;
		loop: for (aB = el - 1; 0 <= aB; aB--) {
			for (eo = 3; 0 <= eo; eo--)
				if (gJ = ag.gD[fc][aB] + en[eo], ac.ec(gJ) || ac.gL(gJ) && ac.ed(gJ) !== fc) {
					ac.jL(ag.gD[fc][aB], fc);
					continue loop
				} ag.gD[fc][aB] = ag.gD[fc][el - 1], ag.gD[fc].pop(), el--
		}
	}, this.fw = function() {
		var player = fc,
			gR = ag.gR,
			gS = ag.gS,
			fB = ag.fB,
			el = gR[player].length,
			en = ac.en;
		loop: for (var aB = el - 1; 0 <= aB; aB--) {
			for (var aZG = !1, aZH = !1, eo = 3; 0 <= eo; eo--) {
				var gJ = gR[player][aB] + en[eo];
				if (ac.aGd(gJ, player)) continue loop;
				aZG = aZG || ac.hz(gJ), aZH = aZH || ac.aGc(gJ)
			}
			aZG ? gS[player].push(gR[player][aB]) : aZH ? fB[player].push(gR[player][aB]) : ac.xY(gR[player][aB], player), gR[player][aB] = gR[player][el - 1], gR[player].pop(), el--
		}
	}, this.gP = function() {
		ag.gZ[fg] -= fh
	}, this.gQ = function(border) {
		for (var el = border.length, aB = el - 1; 0 <= aB; aB--) ac.xt(fg, border[aB]) || (border[aB] = border[el - 1], border.pop(), el--)
	}, this.gT = function(border) {
		for (var el = border.length, aB = el - 1; 0 <= aB; aB--) !ac.xt(fg, border[aB]) && ac.eg(border[aB]) && (border[aB] = border[el - 1], border.pop(), el--)
	}, this.gU = function(border) {
		for (var eo, gJ, el = border.length, en = ac.en, aB = el - 1; 0 <= aB; aB--)
			for (eo = 3; 0 <= eo; eo--)
				if (gJ = border[aB] + en[eo], ac.aGd(gJ, fg)) {
					ag.gR[fg].push(border[aB]), border[aB] = border[el - 1], border.pop(), el--;
					break
				}
	}, this.gV = function() {
		for (var eo, gJ, en = ac.en, aB = fh - 1; 0 <= aB; aB--)
			for (eo = 3; 0 <= eo; eo--) gJ = fj[aB] + en[eo], ac.xw(fg, gJ) && ac.aGe(gJ) && (ag.gR[fg].push(gJ), ac.gG(gJ, fg))
	}, this.gW = function() {
		var es, eu;
		loop: for (; ag.ie[fg] < ag.ig[fg];) {
			for (es = ag.ic[fg]; es >= ag.ib[fg]; es--)
				if (ac.xt(fg, 4 * (ag.ie[fg] * bR.ew + es))) break loop;
			ag.ie[fg]++
		}
		loop: for (; ag.ie[fg] < ag.ig[fg];) {
			for (es = ag.ic[fg]; es >= ag.ib[fg]; es--)
				if (ac.xt(fg, 4 * (ag.ig[fg] * bR.ew + es))) break loop;
			ag.ig[fg]--
		}
		loop: for (; ag.ib[fg] < ag.ic[fg];) {
			for (eu = ag.ig[fg]; eu >= ag.ie[fg]; eu--)
				if (ac.xt(fg, 4 * (eu * bR.ew + ag.ib[fg]))) break loop;
			ag.ib[fg]++
		}
		loop: for (; ag.ib[fg] < ag.ic[fg];) {
			for (eu = ag.ig[fg]; eu >= ag.ie[fg]; eu--)
				if (ac.xt(fg, 4 * (eu * bR.ew + ag.ic[fg]))) break loop;
			ag.ic[fg]--
		}
	}, this.ee = function(player, jI) {
		return 0 === bf.ej[player] || bf.ej[player] !== bf.ej[jI]
	}, this.hH = function(player) {
		for (var aB, gK, el = ag.gR[player].length, en = ac.en, eo = 3; 0 <= eo; eo--)
			for (gK = en[eo], aB = 0; aB < el; aB++)
				if (ac.ec(ag.gR[player][aB] + gK)) return !0;
		return !1
	}, this.aGp = function(player) {
		for (var aB, gK, el = ag.gR[player].length, en = ac.en, eo = 3; 0 <= eo; eo--)
			for (gK = en[eo], aB = 0; aB < el; aB++)
				if (ac.jK(ag.gR[player][aB]) && ac.ec(ag.gR[player][aB] + gK)) return !0;
		return !1
	}, this.hK = function(a3I, a3J) {
		for (var aB, dr, gK, gJ, aWn = ag.gR[a3I].length, aWo = ag.gR[a3J].length, en = (aWo < aWn && (dr = a3I, a3I = a3J, a3J = dr, dr = aWn, aWn = aWo, 0), ac.en), eo = 3; 0 <= eo; eo--)
			for (gK = en[eo], aB = 0; aB < aWn; aB++)
				if (gJ = ag.gR[a3I][aB] + gK, ac.gL(gJ) && ac.ed(gJ) === a3J) return !0;
		return !1
	}, this.aGq = function(a3I, a3J) {
		for (var aB, gK, gJ, aWn = ag.gR[a3I].length, en = ac.en, eo = 3; 0 <= eo; eo--)
			for (gK = en[eo], aB = 0; aB < aWn; aB++)
				if (ac.jK(ag.gR[a3I][aB]) && (gJ = ag.gR[a3I][aB] + gK, ac.gL(gJ)) && ac.ed(gJ) === a3J) return !0;
		return !1
	}
}

function dT() {
	this.q2 = new aZI
}

function aZI() {
	this.hN = function(player) {
		b9.g7.a3E(player) && aN.yL(80, L(479), 637, 0, bA.oV, bA.nd, -1, !1)
	}, this.hQ = function(player) {
		b9.g7.a3E(player) && aN.yL(80, L(480), 637, 0, bA.oV, bA.nd, -1, !1)
	}
}

function aZJ() {
	this.aZK = 0, this.j1 = function() {
		aO.j1(), aZ.j1(), h.j1(), az.y.j1(), aw.aFz(), be.dj && (be.dj = !1, aa.ud())
	}
}

function aZL() {
	this.eK = be.eK, this.e6 = 0, this.aZK = 0, this.aFx = 0, this.aZM = null, this.aZN = 7, this.a6n = 0, this.db = function() {
		this.aFx = 0, this.aZM = [], this.e6 = 0, this.aZK = 0
	}, this.aS6 = function(aC) {
		if (aD.h9) this.aB2(aC);
		else if (this.aZM.push(aC), 2 === aD.zs) {
			for (var aB = 0; aB < this.aZM.length; aB++) b7.oy.j1(this.aZM[aB]);
			this.aZM = []
		}
	}, this.aB2 = function(aC) {
		2 !== aD.zs && (b7.oy.j1(aC), b8.j1(), aW.aB2(this.aFx), this.aFx === aD.a4K ? (aD.pt.j1(), this.aFx = 0, this.e6 = 0, this.aZK = 0, this.eK = be.eK) : (this.aFx++, af.a4D(), af.mS(!0), ba.aBc()))
	}, this.j1 = function() {
		h.j1(), aD.h9 ? (be.dj = aW.aB2(-1) || be.dj, mU()) : (0 !== this.e6 || be.eK >= this.eK && (this.eK += be.aB1 * Math.floor(1 + (be.eK - this.eK) / be.aB1), 2 === aD.zs ? mJ() : this.aZO(), this.e6++, 27 < be.eK - this.a6n)) && this
		.aZP(), mP(), be.dj && (be.dj = !1, xx()), this.a6n = be.eK
	}, this.aZP = function() {
		be.dj = !0, mR(), this.e6 = 0
	}, this.aZO = function() {
		var vL, aB;
		if (this.aZK !== 7 * this.aFx) mL(), ba.aBc();
		else {
			vL = !1;
			loop: for (; this.aZQ() && (vL = !0, mL(), 2 !== aD.zs) && 0 < this.aZM.length;)
				for (aB = this.aZN - 2; 0 <= aB; aB--)
					if (mL(), 2 === aD.zs) break loop;
			vL ? ba.aBc() : (mJ(), ba.a4G())
		}
	}, this.aZQ = function() {
		return 0 < this.aZM.length && (this.aFx++, b7.oy.j1(this.aZM[0]), this.aZM.shift(), !0)
	}
}

function aZR() {
	var aZS, aZT, aZU, aFx, aZV, e6 = 0,
		eK = be.eK;

	function aZY() {
		! function() {
			if (!aD.h9) return;
			if (aD.kS) return;
			if (2 !== aD.zs)
				if (aZV % 7 != 0) aZV++;
				else if (aFx === aD.a4K) {
				if (!aZb()) return;
				aW.aB2(aFx), aD.pt.j1()
			} else {
				if (!aZb()) return;
				aZV++, aFx++, af.a4D(), af.mS(!0)
			}
			return 1
		}() && aZb() && mL()
	}

	function aZZ() {
		e6 = 0, (aD.h9 ? (be.dj = aW.aB2(aFx - (aZV % 7 == 0 ? 0 : 1) + aZV % 7 / 7) || be.dj, mU) : aM.gv || !bB.a4i ? mU : (be.dj = !0, mR))()
	}

	function aZb() {
		var aB, el, aZc = b8.pr.aTR,
			fU = b8.pr.aTS,
			fW = b8.pr.aTT,
			fY = b8.pr.aTU,
			aZd = b8.pr.aTV,
			aZe = b8.pr.aTW;
		if (!(aZS >= aZe.length)) {
			if (aZe = aZe[aZS], aZd[aZS]) {
				for (el = aZT + aZe, aB = aZT; aB < el; aB++) b7.oy.pf(aZc[aB], fU[aB], fW[aB], fY[aB]);
				aZT += aZe, aZS++
			} else ++aZU >= aZe && (aZS++, aZU = 0);
			return 1
		}
		aN.a1A("Replay file smaller than expected."), bB.a1z(!1), aD.zs = 2
	}
	this.aZK = 0, this.db = function() {
		aZV = aFx = aZU = aZT = aZS = 0
	}, this.j1 = function() {
		var aXE;
		h.j1(), bB.a8P() < 1.7 ? 0 === e6 ? be.eK >= eK && (aXE = be.aB1 / bB.a8P(), eK += aXE * Math.floor(1 + (be.eK - eK) / aXE), 2 === aD.zs || aM.gv || !bB.a4i ? mJ() : (aZY(), ba.aBc()), e6++) : aZZ() : function() {
			var aXE;
			if (be.eK >= eK)
				if (2 === aD.zs || aM.gv || !bB.a4i) mJ(), eK = be.eK;
				else {
					for (aXE = be.aB1 / bB.a8P(), 16 < (be.eK - eK) / aXE && (eK = be.eK - 16 * aXE); be.eK >= eK && 2 !== aD.zs;) eK += aXE, aZY();
					ba.aBc()
				} aZZ()
		}(), mP(), be.dj && (be.dj = !1, xx())
	}, this.a02 = function() {
		b8.pr.aTW.length - aZS <= 2 || aN.a1A("Replay file larger than expected.")
	}
}

function aZf() {
	var e6 = 0,
		eK = be.eK;
	this.aZK = 0, this.j1 = function() {
		h.j1(), aD.h9 ? mU() : 0 === e6 ? be.eK >= eK && (eK += be.aB1 * Math.floor(1 + (be.eK - eK) / be.aB1), 2 === aD.zs || aM.gv ? mJ() : (mL(), ba.aBc()), e6++) : ((aM.gv ? mU : (be.dj = !0, mR))(), e6 = 0), mP(), be.dj && (be.dj = !1, xx())
	}
}

function dP() {
	this.a01 = null, this.dj = !1, this.eK = 0, this.aB1 = 56;
	var aZg = 0;

	function aZh() {
		be.eK = aZg = performance.now(), be.a01.j1(), window.requestAnimationFrame(aZh)
	}
	this.db = function() {
		this.a4f(), window.requestAnimationFrame(aZh), this.eK = performance.now()
	}, this.a4W = function() {
		aD.gu ? (this.a01 = new aZR, this.a01.db()) : aD.kS ? this.a01 = new aZf : (this.a01 = new aZL, this.a01.db())
	}, this.a4f = function() {
		this.a01 = new aZJ, this.dj = !0
	}, this.j1 = function() {
		this.a01.aZK++
	}, this.k5 = function() {
		return this.a01.aZK
	}, this.aRi = function() {
		var dr = performance.now();
		dr < aZg + 1e3 || (this.eK = dr, this.a01.j1())
	}
}

function cr() {
	var aFN = 0,
		aZi = !0;

	function aZj(id) {
		id = [L(481), L(482), L(483), L(484)][id];
		aN.a6T(id)
	}
	this.j1 = function() {
		var dr, a6p;
		be.eK < aFN || (aFN = be.eK + 5e3, aD.gu) || aD.kS || b9.g7.gx(aD.eV) || (dr = new Date, a6p = dr.getUTCSeconds(), aZi ? a6p < 50 && (aZi = !1) : a6p < 50 || (aZi = !0, (a6p = (dr.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a6p || 20 ==
			a6p || 40 == a6p ? aD.kQ < 7 && aZj(0) : 10 == a6p || 30 == a6p || 50 == a6p ? 7 !== aD.kQ && 10 !== aD.kQ || aZj(1) : 5 == a6p || 25 == a6p || 45 == a6p ? 8 === aD.kQ && aZj(2) : 35 == a6p && 9 === aD.kQ && aZj(3))))
	}
}

function cl() {
	var n6, n7, nJ, nK, aZk = 0,
		aZl = 0;

	function aZn() {
		return Math.pow(Math.pow(nJ - n6, 2) + Math.pow(nK - n7, 2), .5)
	}

	function aZm(e) {
		n6 = h.k * e.touches[0].clientX, n7 = h.k * e.touches[0].clientY, nJ = h.k * e.touches[1].clientX, nK = h.k * e.touches[1].clientY
	}
	this.a1R = function(e) {
		return 1 < e.touches.length ? (aZl = be.eK, aZk = 3, aZm(e), aL.ro(), !0) : (aZk = 0, !1)
	}, this.a1S = function(e) {
		var aKc, i2, i3;
		return 0 !== aD.zs && 1 < e.touches.length && (aZk = Math.max(aZk - 1, 0), aH.nO() && (aKc = aZn(), aZm(e), e = aZn(), i2 = Math.floor((n6 + nJ) / 2), i3 = Math.floor((n7 + nK) / 2), aS.a8q(i2, i3, Math.max(.125, e) / Math.max(.125,
			aKc)), be.dj = !0), !0)
	}, this.a1p = function() {
		var es, eu;
		return !!(aZk && (aZk = 0, be.eK < aZl + 500)) && (es = (n6 + nJ) / 2, eu = (n7 + nK) / 2, aL.a1j(es, eu), aL.click(es, eu, !0) && (be.dj = !0), !0)
	}
}

function d0() {
	this.size = 0, this.e6 = 0, this.aC = null, this.db = function(aC) {
		this.e6 = 0, this.aC = aC, this.size = aC.length
	}, this.u7 = function() {
		this.aC = null
	}, this.pe = function(size) {
		for (var fD = 0, aC = this.aC, nO = this.e6 + size - 1, aB = this.e6; aB <= nO; aB++) fD |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nO - aB;
		return this.e6 += size, this.e6 > 8 * this.size && console.error("Unwrapper Overflow"), fD
	}, this.aSE = function(size) {
		var f5 = size >> 1;
		return (1 << f5) * this.pe(size - f5) + this.pe(f5)
	}, this.aSF = function(aZo) {
		return this.size === bC.aSD(aZo)
	}, this.aTj = function(wl, aZp, aZq) {
		var gE = this.pe(wl);
		if (!gE) return null;
		for (var wl = Math.max(gE, aZq), g = new(aZp <= 8 ? Uint8Array : aZp <= 16 ? Uint16Array : Uint32Array)(wl), aB = 0; aB < gE; aB++) g[aB] = this.pe(aZp);
		aZq = g[gE - 1];
		return aZq && g.fill(aZq, gE), g
	}, this.aTk = function(wl, aZr, aZq) {
		var gE = this.pe(wl);
		if (!gE) return null;
		for (var wl = Math.max(gE, aZq), g = new Array(wl), aB = 0; aB < gE; aB++) g[aB] = this.aTh(aZr);
		return g.fill(g[gE - 1], gE), g
	}, this.aTh = function(wl) {
		return bF.vs.vw(this.pe(wl))
	}, this.aTi = function() {
		var qE = bE.so.sp(bE.so.sq(this.pe(30))),
			qE = b9.rW.a48(qE, "_", "/");
		qE = b9.rW.a48(qE, "-", "+");
		for (var aZs = "";
			(qE.length + aZs.length) % 4;) aZs += "=";
		qE = "data:image/png;base64," + qE + aZs;
		var aHL = new Image;
		aHL.onload = function() {
			b8.aHk.aHl(aHL), aHL.onload = null, aHL = null
		}, aHL.src = qE
	}
}

function dJ() {
	this.aUZ = 0, this.aUa = 0, this.aUV = 0, this.aUW = 0, this.aUX = 0, this.aUY = 0, this.aBd = [0, 0, 0, 0], this.nN = function() {
		this.aUZ = aS.xz(), this.aUa = aS.y0(), this.aUV = -this.aUZ, this.aUW = -this.aUa, this.aUX = h.i / hw, this.aUY = h.j / hw, this.aBd[0] = Math.floor(this.aUV), this.aBd[1] = Math.floor(this.aUW), this.aBd[2] = Math.floor(this.aBd[0] +
			this.aUX + 1), this.aBd[3] = Math.floor(this.aBd[1] + this.aUY + 1), ba.aBa = !0
	}
}

function cm() {
	var a7V, mt;
	this.db = function() {
		a7V = 1, mt = 0
	}, this.j1 = function() {
		0 < a7V && (mt = 0 === mt ? be.eK + 16 : mt, a7V = (a7V -= .001 * (be.eK - mt)) < 0 ? 0 : a7V, mt = be.eK, be.dj = !0)
	}, this.ud = function() {
		0 < a7V && (ue.fillStyle = "rgba(0,0,0," + a7V + ")", ue.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e6 = 0, this.aC = null, this.db = function(aC) {
		this.e6 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aZo) {
		return this.db(new Uint8Array(this.aSD(aZo))), this.aC
	}, this.u7 = function() {
		this.aC = null
	}, this.a8 = function(size, a6t) {
		for (var aC = this.aC, nO = this.e6 + size - 1, aB = this.e6; aB <= nO; aB++) aC[aB >> 3] |= (a6t >> nO - aB & 1) << 7 - (7 & aB);
		this.e6 += size, this.e6 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aSC = function(size, a6t) {
		var f5 = size >> 1,
			eo = 1 << f5;
		this.a8(size - f5, bK.ds(a6t, eo)), this.a8(f5, a6t % eo)
	}, this.aZv = function(size) {
		for (var aC = this.aC, nO = this.e6 + size, aB = this.e6; aB < nO; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aSD = function(aZo) {
		return aZo + 7 >> 3
	}, this.aZw = function(g, jP, nO, aZx) {
		for (var aB = jP; aB < nO; aB++) this.a8(aZx, g[aB])
	}
}

function cz() {
	this.db = function() {
		this.g = [], this.e6 = 0
	}, this.aSb = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aZy, value) {
		for (var g = this.g, nO = this.e6 + aZy - 1, aZz = 1 + (nO >> 3); g.length < aZz;) g.push(0);
		for (var aB = this.e6; aB <= nO; aB++) g[aB >> 3] |= (value >> nO - aB & 1) << 7 - (7 & aB);
		this.e6 += aZy
	}, this.di = function(g, wl, aZp) {
		var aa0 = b9.qf.a2b(g);
		this.a8(wl, aa0);
		for (var aB = 0; aB < aa0; aB++) this.a8(aZp, g[aB])
	}, this.aU1 = function(g, wl, aZr) {
		var aa0 = b9.qf.a2b(g);
		this.a8(wl, aa0);
		for (var aB = 0; aB < aa0; aB++) this.aTz(g[aB], aZr)
	}, this.aTz = function(qE, wl) {
		var el = qE.length;
		this.a8(wl, el);
		for (var aB = 0; aB < el; aB++) this.a8(16, qE.charCodeAt(aB))
	}, this.aU0 = function(a2h) {
		var aa1 = (a2h = a2h.toDataURL()).split(",");
		if (aa1.length < 2) console.log("error 266");
		else {
			a2h = b9.rW.a48(a2h = aa1[aa1.length - 1], "/", "_"), a2h = b9.rW.a48(a2h, "\\+", "-");
			var a2h = b9.rW.a48(a2h, "=", ""),
				w5 = bF.so.w2(a2h),
				el = w5.length;
			this.a8(30, el);
			for (var aB = 0; aB < el; aB++) this.a8(6, w5[aB])
		}
	}
}
a(), self.aiCommand746 = function(fD) {
	0 === fD ? bs() : 1 !== fD || !a0 || 1 !== a0.id || a0.dt < 14 || bI.fE()
}, setTimeout(bs, 1e4), window.onload = function() {
	bs()
};