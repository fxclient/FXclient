var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fq, fr, fs, ft, fu, fv, fw, fx, fy, fz, g0, g1, g2, iB, ib, ic,
	a8X, lw, k6, a2B, vL, yq, aCa, a5M, a5N, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "0.75em", "rgb(", "<br>", "center", "auto", "rgba(", "flex", "0.8em", "   ", "hidden", "1em", "span", "Data", "0.5em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "' target='_blank'>",
		"undefined", "pre", "break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number",
		"nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "wheel",
		"translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo", "loading",
		"keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest",
		"False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room", "<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "255,255,255", "1v1",
		"1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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
	this.dq = 1114, this.n = 2134, this.rVersion = 15, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dw = "3 Nov 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dy = (new Date).getTime() % 1048576
	}, this.m = 0
}

function dz() {
	var e0 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e1 = [100, 60, 30, 15, 6, 1],
		e2 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e3 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		e5 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e6 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.e7 = function(id, e8, e9) {
		e8 = this.eA(e8);
		return +(e2[e8][id] > e9)
	}, this.eA = function(e8) {
		for (var aB = 0; aB < e1.length; aB++)
			if (e1[aB] <= e8) return aB;
		return e1.length
	}, this.eB = function(e8) {
		return e0[this.eA(e8)]
	}, this.eC = function(id, eD) {
		return e3[id].replace(new RegExp("x", "g"), eD)
	}, this.eE = function(id, eD) {
		return e5[id].replace(new RegExp("x", "g"), eD)
	}, this.eF = function(id, eG) {
		return this.e6[5][id]
	}
}

function dE() {
	this.eH = new eI, this.eJ = new eK, this.dd = function() {
		a0.a1.eL()
	}, this.eM = function() {
		return bj.eN.data[160].value
	}
}

function eI() {
	var eO = 12e3;
	this.show = function(eP) {
		return !eP && !bU.eM() && (0 === a0.id ? bU.eJ.show() : 2 === a0.id && !(bf.eQ < eO) && (eO = bf.eQ + 3e5, 2 === l.ds) && a0.a1.eR(Math.floor(3e5)))
	}
}

function eK() {
	var eS = null,
		eO = 2e4,
		eT = 0;
	this.eU = function() {
		bf.eQ < eO || (eO = bf.eQ + 1e4, 0 !== a0.id) || eS || bU.eM() || (b0.y.eV(0) ? b0.eW.eX(5) : eO = bf.eQ + 1e3)
	}, this.eY = function(eZ) {
		eS = eZ
	}, this.show = function() {
		return !!eS && !(bf.eQ < eT || (eT = bf.eQ + 6e4, (new ea).show(eS.eb, eS.colors, eS.id), eS = null))
	}
}

function cX() {
	this.ec = new ed
}

function ed() {
	this.ee = function(ef) {
		var ei;
		return bS.eg(bS.eh) && aD.data.passableMountains && (ei = ac.ej(ef), this.ek(aD.el, ei) || this.em(aD.el, ei)) && 0 !== (ei = function(f7) {
			for (var f8 = bM.f9(f7), fA = bM.fB(f7), max = Math.max(bS.fC, bS.fD) - 2, fE = max * max, fF = !1, fG = 0, fH = 0; fH < max; fH++) {
				var fI, en = function(f8, fA, fH) {
					for (var aB = 0; aB <= fH; aB++)
						for (var fK = -1; fK < 2; fK += 2)
							for (var fL = -1; fL < 2; fL += 2)
								for (var eZ = 0; eZ < 2; eZ++) {
									var ef = function(f8, fA) {
										if (bM.fN(f8, fA)) {
											f8 = bM.fO(f8, fA), fA = bM.er(f8);
											if (ac.ew(fA) && ac.fP(fA)) return f8
										}
										return 0
									}(f8 + eZ * fK * aB + (1 - eZ) * fL * fH, fA + eZ * fL * fH + (1 - eZ) * fK * aB);
									if (ef) return ef
								}
					return 0
				}(f8, fA, fH);
				en && (fI = bM.fJ(f8, fA, en)) < fE && (fG = en, fE = fI, fF || (fF = !0, max = Math.floor(Math.sqrt(fI)) + 1))
			}
			return fG
		}(bM.ep(ef))) && (ef = bM.er(ei), ac.es(ef) || (ef = ac.et(ef)) !== aD.el && bs.eu(ef, aD.el)) ? ei : 0
	}, this.ev = function(player, en) {
		en = bM.er(en);
		if (ac.ew(en)) {
			if (ac.es(en)) bO.ex[0] = aD.ey;
			else if (ac.et(en) !== bO.ex[0]) return !1;
			for (var ez = function(ef) {
					var f3 = ac.f3,
						ez = [];
					loop: for (var f4 = 3; 0 <= f4; f4--) {
						var f5 = ef + f3[f4];
						if (ac.f6(f5)) {
							for (var id = ac.ej(f5), aB = 0; aB < ez.length; aB++)
								if (id === ez[aB]) continue loop;
							bO.f2[ez.length] = f5, ez.push(id)
						}
					}
					return ez
				}(en), f1 = ez.length, aB = 0; aB < f1; aB++)
				if (this.ek(player, ez[aB]) || this.em(player, ez[aB])) return bO.f2[0] = bO.f2[aB], !0
		}
		return !1
	}, this.ek = function(player, ei) {
		for (var fQ = ag.fQ[player], f1 = fQ.length, fR = Math.max(bL.du(f1, 12), 1), f3 = ac.f3, aB = 0; aB < f1; aB += fR)
			for (var eq = fQ[aB], f4 = 3; 0 <= f4; f4--) {
				var f5 = eq + f3[f4];
				if (ac.f6(f5) && ei === ac.ej(f5)) return !0
			}
		return !1
	}, this.em = function(player, ei) {
		for (var fQ = ag.fQ[player], f1 = fQ.length, f3 = ac.f3, aB = 0; aB < f1; aB++)
			for (var eq = fQ[aB], f4 = 3; 0 <= f4; f4--) {
				var f5 = eq + f3[f4];
				if (ac.f6(f5) && ei === ac.ej(f5)) return !0
			}
		return !1
	}
}

function d7() {
	this.g = new Array(4), this.fU = new Uint16Array(2), this.fV = new Uint16Array(2), this.fW = new Int32Array(2), this.fX = new Uint32Array(2), this.fY = new Uint32Array(2), this.fZ = new Uint8Array(4), this.fa = new Uint8Array(4), this.f2 =
		new Uint32Array(4), this.fb = new Uint32Array(5), this.ex = new Uint32Array(8), this.fc = new Uint32Array(8), this.fd = new Uint16Array(16), this.fe = new Uint16Array(512), this.ff = new Uint16Array(512), this.fg = new Uint16Array(512), this
		.fh = new Uint16Array(0), this.dd = function() {
			var f1 = bS.fC * bS.fD;
			this.fh.length !== f1 && (this.fh = new Uint16Array(f1))
		}, this.fi = function(g, fj) {
			return g[0] = fj, g
		}, this.fk = function(g, fj, fl) {
			return g[0] = fj, g[1] = fl, g
		}, this.fm = function(g, fj, fl, fn) {
			return g[0] = fj, g[1] = fl, g[2] = fn, g
		}, this.fo = function(g, fj, fl, fn, fp) {
			return g[0] = fj, g[1] = fl, g[2] = fn, g[3] = fp, g
		}
}

function g3() {
	fw = 0, fx = 2048, fy = new Uint32Array(4 * fx), fz = 0, g0 = new Uint32Array(fx), g1 = new Uint8Array(bS.fC * bS.fD)
}

function g4(player) {
	fr = player, g2 = !1, g5(), g6();
	for (var aB = ad.g7(fr) - 1; 0 <= aB; aB--) fq = aB, g8();
	g2 && g9()
}

function g9() {
	bs.gA(), bs.gB()
}

function g8() {
	fv = ad.gC(fr, fq), fs = ad.gD(fr, fq), ft = ad.gE(fr, fq), gF(), (0 !== fw && (gH(), gI()) ? gJ : gG)()
}

function gI() {
	if (!((fu = bL.du(fs, fw)) > aD.gK)) {
		if (!ft) return !1;
		var gL = fw * (1 + aD.gK);
		fs += bA.gM.gN(fr, gL - fs), fu = bL.du(fs, fw)
	}
	return !0
}

function gH() {
	for (var aB = fw - 1; 0 <= aB; aB--) g1[bL.du(fy[aB], 4)] = 0
}

function gG() {
	1 === ad.g7(fr) && aF.gO(fr);
	var dt = bA.gM.gP(fr, fs);
	bd.gQ(fr, fs - dt, 12), ad.gR(fr, fq)
}

function g5() {
	for (var player = fr, gS = ag.gS, f1 = Math.min(gS[player].length, fx), gT = 0, gU = g0, aB = f1 - 1; 0 <= aB; aB--) gU[gT++] = gS[player][aB];
	fz = gT
}

function g6() {
	for (var aB = ag.gS[fr].length - 1; 0 <= aB; aB--) ac.ew(ag.gS[fr][aB]) && ac.gV(ag.gS[fr][aB], fr);
	ag.gS[fr] = []
}

function gF() {
	fw = 0, (fv === aD.ey ? gW : gX)()
}

function gX() {
	for (var gY, gZ, aB, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
		for (aB = fz - 1; 0 <= aB; aB--) gY = g0[aB] + f3[f4], gZ = bL.du(gY, 4), 0 === g1[gZ] && ac.ga(gY) && ac.et(gY) === fv && (g1[gZ] = 1, fy[fw++] = gY)
}

function gW() {
	for (var gY, gZ, aB, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
		for (aB = fz - 1; 0 <= aB; aB--) gY = g0[aB] + f3[f4], gZ = bL.du(gY, 4), 0 === g1[gZ] && ac.es(gY) && (g1[gZ] = 1, fy[fw++] = gY)
}

function gJ() {
	gb() ? (gc(), fv !== aD.ey && gd()) : gG()
}

function gd() {
	bs.ge(), bs.gf(ag.gg[fv]), bs.gf(ag.gh[fv]), bS.eg(bS.eh) && bs.gf(ag.fQ[fv]), bs.gi(ag.gS[fv]), bs.gj(ag.gh[fv]), bs.gj(ag.fQ[fv]), bs.gk(), bs.gl()
}

function gc() {
	g2 = !0, ad.gm(fr, fq, fs), ad.gn(fr, fq), ag.go[fr] += fw, bs.gp(), gq()
}

function gb() {
	return (fv === aD.ey ? gr : gs)()
}

function gs() {
	var gt = fw * aD.gK,
		gu = gv(),
		gw = gx(),
		gu = gt + 2 * gu + gw,
		gz = fu * fw;
	return gu < gz ? (fs -= gu, bd.gQ(fr, gu, 13), h0(gu - gt, gw), !0) : ft && 0 === gw ? (fs -= gz, gz += bA.gM.gN(fr, gu - gz + 1), bd.gQ(fr, gz, 13), h0(gz - gt, 0), !0) : (fs -= gz, bd.gQ(fr, gz, 13), h0(gz - gt, gw), !1)
}

function h0(gz, gw) {
	if (0 < gw) {
		if (gz <= gw) return bd.gQ(fv, gz, 13), void ad.h1(fv, fr, gw - gz);
		ad.h1(fv, fr, 0), gz -= gw
	}
	gz = bL.du(gz, 2), gz = Math.min(ag.h2[fv], gz), bd.gQ(fv, gz, 13), ag.h2[fv] -= gz
}

function gx() {
	return ad.h3(fv, fr)
}

function gv() {
	return bL.du(fw * ag.h2[fv], 1 + bL.du(10 * ag.go[fv], 16))
}

function gr() {
	var h4 = fw * aD.gK;
	return fs -= h4, bd.gQ(fr, h4, 13), !0
}

function gq() {
	for (var aB = fw - 1; 0 <= aB; aB--) ag.gS[fr].push(fy[aB]), ag.gg[fr].push(fy[aB]), ac.gV(fy[aB], fr)
}

function dC() {
	var h5 = 0,
		h6 = 0;
	this.h7 = function(f8, fA) {
		h5 = f8, h6 = fA
	}, this.h8 = function(code) {
		var hF, hH, en;
		aD.h9 || aM.hA || (bA.gM.hB(0) || bA.gM.hB(1)) && bA.gM.hC(aD.el) && (aR.hD(h5, h6) ? aR.hE = !1 : aP.hD(h5, h6) || (hF = bM.hG(h5), hH = bM.hI(h6), en = bM.fO(hF, hH), bM.hJ(hF, hH) && (0 === code ? function(en) {
			var hN, ef, eq;
			aD.hO ? -1 !== (hN = br.hP(en)) && b8.hQ.hR(en) : (ef = bM.er(en), ac.f6(ef) ? (hN = am.ec.ee(ef)) && (eq = bM.er(hN), eq = ac.es(eq) ? aD.ey : ac.et(eq), b8.hQ.hT(aR.hU(), hN, eq)) : (hN = br.hV(en)) < 0 || (ef = bM
				.er(hN), ac.es(ef) ? bs.hW(aD.el) ? b8.hQ.hX(aR.hU(), aD.ey) : ad.g7(aD.el) && b1.hY(aD.ey, aR.hU()) : (eq = ac.et(ef), bs.eu(eq, aD.el) && (bs.hZ(aD.el, eq) ? b8.hQ.hX(aR.hU(), eq) : ad.g7(aD.el) && b1.hY(
					eq, aR.hU())))))
		}(en) : 1 === code ? function(en) {
			bN.ha.hb(aD.el, en) && b8.hQ.hc(aR.hU(), bO.fc[7])
		}(en) : 2 === code && function(en) {
			bN.hd.he(aD.el, en) && b8.hQ.hf(aR.hU())
		}(en))))
	}, this.hg = function() {
		if (!aD.h9 && !aM.hA && bA.gM.hB(1)) {
			var gY = aD.el;
			if (bA.gM.hC(gY)) {
				var f1 = ad.g7(gY);
				if (f1 < 1) ! function() {
					var gY = aD.el;
					if (bs.hW(gY)) b8.hQ.hX(aR.hU(), aD.ey);
					else
						for (var f3 = ac.f3, gg = ag.gg, f1 = gg[gY].length, hq = Math.floor(Math.random() * f1), aB = 0; aB < f1; aB++)
							for (var hr = 3; 0 <= hr; hr--) {
								var hs = gg[gY][(aB + hq) % f1] + f3[hr];
								if (ac.ga(hs)) {
									hs = ac.et(hs);
									if (hs !== gY && (!aD.hu || bs.eu(gY, hs))) return b8.hQ.hX(aR.hU(), hs)
								}
							}
				}();
				else {
					for (var hi = 0, hj = ad.gD(gY, 0), aB = 1; aB < f1; aB++) {
						var hk = ad.gD(gY, aB);
						hk < hj && (hj = hk, hi = aB)
					}
					b8.hQ.hX(aR.hU(), ad.gC(gY, hi))
				}
			}
		}
	}, this.hl = function() {
		if (!aD.h9 && !aM.hA && bA.gM.hC(aD.el) && bA.gM.hB(1)) return aw.hm ? aw.hn(aD.el) ? void b8.hQ.ho(1) : void 0 : void(aw.hp(aD.el) && b8.hQ.hl())
	}
}

function hv(hw, size, hx, hy, font) {
	var aB, i1 = .2,
		canvas = document.createElement("canvas"),
		i2 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hw, canvas.height = hw, i2.font = size + font, i2.textAlign = "center", i2.textBaseline = "middle", i2.fillStyle = "red", aB = 0; aB < hx.length; aB++) i2.fillText(hx[aB], .5 * hw, .5 * hw);
	return -1 < (canvas = function(hz) {
		var aB, e8, f4 = hz.data;
		for (aB = f4.length - 4; 0 <= aB; aB -= 4)
			if (e8 = f4[aB], hy <= e8) return Math.floor(aB / (4 * hw));
		return -1
	}(i2.getImageData(0, 0, hw, hw))) && (i1 = (canvas - .5 * hw + .1 * size) / size), Math.max(i1, 0)
}

function d5() {
	this.i4 = new Int16Array(4), this.i5 = new Int16Array(4), this.i6 = null, this.dd = function() {
		var aB;
		for (this.i4[0] = -bS.fC, this.i4[1] = 1, this.i4[2] = bS.fC, this.i4[3] = -1, this.i6 = new Int16Array([-bS.fC, 1 - bS.fC, 1, bS.fC + 1, bS.fC, bS.fC - 1, -1, -bS.fC - 1]), aB = 0; aB < 4; aB++) this.i5[aB] = 4 * this.i4[aB]
	}, this.i7 = function() {
		return bL.i8(Math.floor(.15 * (1 + .25 * a0.a1.i9()) * h.iA / iB), 4, 128)
	}, this.iC = function(ef, id) {
		for (var iD = this.i5, aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			if (ac.iE(eq) && ac.ej(eq) === id) return !0
		}
		return !1
	}, this.iF = function(player, ef) {
		return !ac.es(ef) && player === ac.et(ef)
	}, this.fJ = function(hF, hH, en) {
		return (hF -= this.f9(en)) * hF + (hH -= this.fB(en)) * hH
	}, this.iG = function(iH, iI, iJ) {
		iH = this.iL(iH) - this.iM(iJ), iI = this.iO(iI) - this.iP(iJ);
		return Math.sqrt(iH * iH + iI * iI)
	}, this.iQ = function(iR, iS) {
		var iK = this.f9(iR) - this.f9(iS),
			iR = this.fB(iR) - this.fB(iS);
		return ~~Math.sqrt(iK * iK + iR * iR + .5)
	}, this.iT = function(iR, iS) {
		var iK = this.f9(iR) - this.f9(iS),
			iR = this.fB(iR) - this.fB(iS);
		return iK * iK + iR * iR
	}, this.iU = function(iV, iW, iX, iY) {
		return (iV -= iX) * iV + (iW -= iY) * iW
	}, this.iZ = function(gY, ia) {
		return bL.du(ia * ag.h2[gY], 1e3)
	}, this.iL = function(iH) {
		return 16 * (iH + ib) / iB
	}, this.iO = function(iI) {
		return 16 * (iI + ic) / iB
	}, this.ie = function(f4) {
		return 16 * f4 / iB
	}, this.hG = function(iH) {
		return Math.floor((iH + ib) / iB)
	}, this.hI = function(iI) {
		return Math.floor((iI + ic) / iB)
	}, this.hJ = function(hF, hH) {
		return 1 <= hF && 1 <= hH && hF < bS.fC - 1 && hH < bS.fD - 1
	}, this.f9 = function(en) {
		return en % bS.fC
	}, this.fB = function(en) {
		return bL.du(en, bS.fC)
	}, this.fO = function(hF, hH) {
		return hH * bS.fC + hF
	}, this.ig = function(hF, hH) {
		return 4 * this.fO(hF, hH)
	}, this.ih = function(en) {
		return this.fN(this.f9(en), this.fB(en))
	}, this.fN = function(hF, hH) {
		return 0 < hF && hF < bS.fC - 1 && 0 < hH && hH < bS.fD - 1
	}, this.er = function(en) {
		return en << 2
	}, this.ep = function(ef) {
		return ef >> 2
	}, this.ii = function(en) {
		return bS.fC * this.fB(en) * 256 + (this.f9(en) << 4)
	}, this.ij = function(en) {
		return this.ii(en) + 8 + (bS.fC << 7)
	}, this.ik = function(iJ) {
		return bS.fC * (this.iP(iJ) >> 4) + (this.iM(iJ) >> 4)
	}, this.il = function(iJ) {
		iJ = this.ik(iJ);
		return (this.f9(iJ) >> 5) + bN.im.io * (this.fB(iJ) >> 5)
	}, this.iM = function(iJ) {
		return iJ % (bS.fC << 4)
	}, this.iP = function(iJ) {
		return bL.du(iJ, bS.fC << 4)
	}, this.ip = function(en, hr) {
		return en + this.i4[hr]
	}, this.iq = function(ef, hr) {
		return ef + this.i5[hr]
	}, this.ir = function(iR, iS) {
		var iK = this.f9(iS) - this.f9(iR),
			iS = this.fB(iS) - this.fB(iR);
		return Math.abs(iK) >= Math.abs(iS) ? 1 + 2 * (iK < 0) : 2 * (0 < iS)
	}, this.is = function(player) {
		return this.fO(ag.it[player] + ag.iu[player] >> 1, ag.iv[player] + ag.iw[player] >> 1)
	}, this.ix = function(player) {
		return this.fO(ay.iy(ag.it[player], ag.iu[player]), ay.iy(ag.iv[player], ag.iw[player]))
	}
}

function cl() {
	this.iz = new j0, this.j1 = new j2, this.j3 = new j4, this.performance = new j5, this.j6 = new j7, this.j8 = new j9, this.jA = new jB, this.jC = new jD, this.jE = new jF, this.dd = function() {
		this.iz.dd(), this.j3.dd(), this.performance.dd(), this.j6.dd(), this.j8.dd()
	}, this.eU = function() {
		this.performance.eU(), this.iz.eU(), this.j3.jG()
	}
}

function j7() {
	var jH, jJ = new Uint16Array(8);

	function jR(size, player) {
		for (var aB = ag.gS[player].length - 1; size <= aB; aB--) ac.jX(ag.gS[player][aB], player)
	}
	this.dd = function() {
		jH = 0
	}, this.jK = function(player, jL) {
		return bO.ex[1] = ag.gS[player].length, bO.ex[0] === aD.ey ? ao.j6.jM(player) : this.jN(player, bO.ex[0]), (0 !== bO.ex[1] || 0 !== ag.gS[player].length) && !(!jL && bO.ex[1] === ag.gS[player].length || (bO.ex[0] === aD.ey ? ag.jO[
			player]++ : ag.jP[player]++, 0))
	}, this.jQ = function(player) {
		jR(bO.ex[1], player), ad.eY(player, bO.fX[0], bO.ex[0]), aF.jS(player, !1)
	}, this.jT = function(player, jU, f1, hj) {
		var jV = bL.du(12 * ag.h2[player], 1024);
		hj -= hj >= bL.du(ag.h2[player], 2) ? jV : 0, jR(f1, player), ad.eY(player, hj, jU), ag.h2[player] -= hj + jV, aF.jS(player, !1)
	}, this.jN = function(player, jU) {
		for (var hr, f3 = ac.f3, aB = ag.gg[player].length - 1; 0 <= aB; aB--)
			if (ac.jW(ag.gg[player][aB]))
				for (hr = 3; 0 <= hr; hr--)
					if (ac.ga(ag.gg[player][aB] + f3[hr]) && ac.et(ag.gg[player][aB] + f3[hr]) === jU) {
						ag.gS[player].push(ag.gg[player][aB]);
						break
					}
	}, this.jM = function(player) {
		for (var f3 = ac.f3, aB = ag.gg[player].length - 1; 0 <= aB; aB--)
			if (ac.jW(ag.gg[player][aB]))
				for (var hr = 3; 0 <= hr; hr--)
					if (ac.es(ag.gg[player][aB] + f3[hr])) {
						ag.gS[player].push(ag.gg[player][aB]);
						break
					}
	}, this.jY = function(player, jZ) {
		var aB, fK, hr, ht, f1 = ag.gg[player].length,
			ja = 256 <= f1 ? 12 : 32 <= f1 ? 6 : 1,
			jb = f1 - 1 - ay.jc(ja),
			f3 = ac.f3;
		jH = 0;
		loop: for (aB = jb; 0 <= aB; aB -= ja)
			for (hr = 3; 0 <= hr; hr--)
				if ((ht = ac.es(ag.gg[player][aB] + f3[hr]) ? aD.ey : ac.et(ag.gg[player][aB] + f3[hr])) === aD.ey || ac.ga(ag.gg[player][aB] + f3[hr]) && ht !== player && (jZ || bs.eu(player, ht))) {
					for (fK = jH - 1; 0 <= fK; fK--)
						if (jJ[fK] === ht) continue loop;
					if (jJ[jH] = ht, 8 <= ++jH) return !0
				}
		return 0 < jH
	}, this.jd = function(player, jZ) {
		var aB, hr, ht, f3 = ac.f3;
		for (jH = 0, aB = ag.gg[player].length - 1; 0 <= aB; aB--)
			for (hr = 3; 0 <= hr; hr--)
				if ((ht = ac.es(ag.gg[player][aB] + f3[hr]) ? aD.ey : ac.et(ag.gg[player][aB] + f3[hr])) === aD.ey || ac.ga(ag.gg[player][aB] + f3[hr]) && ht !== player && (jZ || bs.eu(player, ht))) return jJ[jH++] = ht, !0;
		return !1
	}, this.je = function() {
		for (var fL, aB = jH - 1; 0 <= aB; aB--)
			if (jJ[aB] === aD.ey) {
				for (jH--, fL = aB; fL < jH; fL++) jJ[fL] = jJ[fL + 1];
				return !0
			} return !1
	}, this.jf = function(player) {
		for (var fL, aB = jH - 1; 0 <= aB; aB--)
			if (ad.jg(player, jJ[aB]))
				for (jH--, fL = aB; fL < jH; fL++) jJ[fL] = jJ[fL + 1];
		return 0 === jH
	}, this.jh = function() {
		for (var aB = jH - 1; 0 <= aB; aB--)
			if (bA.gM.ji(jJ[aB])) return !0;
		return !1
	}, this.jj = function() {
		for (var aB = jH - 1; 0 <= aB; aB--) bA.gM.ji(jJ[aB]) || (jJ[aB] = jJ[--jH]);
		return 0 < jH
	}, this.jk = function(player) {
		for (var fL, jl = jJ[0], jm = ag.h2[jl] + ad.h3(jl, player), aB = jH - 1; 1 <= aB; aB--)(fL = ag.h2[jJ[aB]] + ad.h3(jJ[aB], player)) < jm && (jl = jJ[aB], jm = fL);
		return jl
	}, this.jn = function(player) {
		var j, jo = jJ[0];
		if (1 !== jH)
			for (var jp = bL.du(ag.iu[player] + ag.it[player], 2), jq = bL.du(ag.iw[player] + ag.iv[player], 2), fH = jr(jp - bL.du(ag.iu[jo] + ag.it[jo], 2)) + jr(jq - bL.du(ag.iw[jo] + ag.iv[jo], 2)), aB = jH - 1; 1 <= aB; aB--)(j = jr(jp - bL
				.du(ag.iu[jJ[aB]] + ag.it[jJ[aB]], 2)) + jr(jq - bL.du(ag.iw[jJ[aB]] + ag.iv[jJ[aB]], 2))) < fH && (fH = j, jo = jJ[aB]);
		return jo
	}, this.js = function() {
		for (var jt = jJ, ju = jt[0], h2 = ag.h2, jv = h2[ju], aB = jH - 1; 1 <= aB; aB--) {
			var gY = jt[aB],
				fL = h2[gY];
			jv < fL && (ju = gY, jv = fL)
		}
		return ju
	}, this.jw = function() {
		return jJ[ay.jc(jH)]
	}
}

function j9() {
	function kC(player, jU, k2) {
		3 <= k2 && 2142 < bf.kI() && (jU === aD.ey || ag.h2[jU] < bL.du(ag.h2[player], 20)) && aE.k7(player, 20)
	}

	function kF(player, hj, jU, k2) {
		3 <= k2 && k2 < 6 && bL.du(ag.h2[player], 8) > ag.h2[jU] && (hj = Math.max(bL.du(11 * ag.h2[jU], 5), bL.du(ag.h2[player], 10)));
		k2 = ag.gS[player].length;
		ao.j6.jN(player, jU), ao.j6.jT(player, jU, k2, hj)
	}

	function kB(player, hj) {
		var jU = aD.ey,
			f1 = ag.gS[player].length;
		ao.j6.jM(player), ag.gS[player].length !== f1 && ao.j6.jT(player, jU, f1, hj)
	}
	this.jx = new Uint8Array(aD.ey), this.dd = function() {
		this.jx.fill(0)
	}, this.jy = function(player, hj) {
		var k0, k2, k3, k4;
		ad.jz(player) && (k0 = ae.k1(player), 3 <= (k2 = aE.hj[player]) && k2 < 6 && (hj = Math.max(ag.h2[player] - k0, hj)), k3 = ag.gh[player].length, k4 = ag.gg[player].length, 30 * ag.go[player] > aD.k5 && k6[player] < 10 && 100 * k4 <= k3 &&
			aE.k7(player, 10), aD.hu ? function(player, hj, k2, k0) {
				var jU;
				if (ao.j6.jY(player, !1) || ao.j6.jd(player, !1)) {
					if (!ao.j6.jf(player))
						if (ao.j6.je()) kB(player, hj), kC(player, aD.ey, k2);
						else {
							if (ay.kD(aE.kE[k2])) jU = ao.j6.jk(player);
							else {
								if (ao.j6.jh() && ay.kD(aE.kG[k2]) && ao.j6.jj(), 6 === k2) return kF(player, hj, ao.j6.jw(), k2);
								jU = ao.j6.jn(player)
							}
							kF(player, hj, jU, k2), kC(player, jU, k2)
						}
				} else bN.k9.eU(player) || ao.jA.eU(player) || ! function(player, hj, k2, k0) {
					var jx = ao.j8.jx;
					jx[player] = 0;
					var kJ = bg.ez[player];
					if (0 !== kJ) {
						var kK = ag.h2[player],
							go = ag.go;
						if (player < aD.kL && (hj = kK), !(kK < go[player] || 5 === k2 && kK < k0 || 4 === k2 && kK < bL.du(k0, 2))) {
							bh.kM(kJ);
							for (var f1 = bO.fV[0], fe = bO.fe, aB = ay.jc(f1), fL = 0; fL < f1; fL++) {
								var eZ = fe[(fL + aB) % f1];
								if (jx[eZ]) return b8.kN.kO(player, eZ, hj)
							}
							var kP = bN.y.kP;
							for (fL = 0; fL < f1; fL++)
								if (eZ = fe[(fL + aB) % f1], kP[eZ] && eZ !== player) return b8.kN.kO(player, eZ, hj)
						}
					}
				}(player, hj, k2, k0)
			}(player, hj, k2, k0) : (!k4 || k3 && (k3 < k4 && !ay.jc(10) || 100 * k4 <= k3 && ay.jc(3) || !ay.jc(8))) && bN.k9.eU(player) || function(player, hj, k2) {
				ao.j6.jY(player, !0) || ao.j6.jd(player, !0) ? ao.j6.jf(player) || (ao.j6.je() ? kB(player, hj) : ay.kD(aE.kE[k2]) ? kF(player, hj, ao.j6.jk(player), k2) : 5 === k2 ? kF(player, hj, ao.j6.js(), k2) : (ao.j6.jh() && ay.kD(aE
					.kG[k2]) && ao.j6.jj(), kF(player, hj, 6 === k2 ? ao.j6.jw() : ao.j6.jn(player), k2))) : ao.jA.eU(player)
			}(player, hj, k2))
	}
}

function c5() {
	var kQ = new Uint8Array(aD.ey),
		kR = new Uint16Array(aD.ey),
		kS = new Uint16Array(aD.ey),
		kT = new Uint8Array(aD.ey),
		kU = (this.hj = new Uint8Array(aD.ey), new Uint16Array(aD.ey)),
		kV = new Uint16Array(aD.ey);

	function kk(aB) {
		kQ[aB] = 1 + bL.du(kU[aB] * ay.random(), 10 * ay.value(100))
	}
	this.kW = null, this.kG = [97, 94, 70, 40, 20, 0, 100], this.kX = [500, 450, 400, 300, 80, 50, 100], this.kE = [0, 0, 5, 25, 50, 100, 0], this.kY = [60, 74, 112, 200, 256, 512, 512], this.kZ = [1, 2, 3, 4, 6, 8, 1], this.ka = [500, 450, 400, 300,
		80, 50, 100
	], this.kb = [100, 150, 250, 400, 600, 1e3, 100], this.de = function() {
		this.kW = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dd = function() {
		kQ.fill(0), kR.fill(0), kS.fill(0), kT.fill(0), this.hj.fill(0), kU.fill(0), kV.fill(0);
		var kc = aD.kL;
		if (9 === aD.kd) this.ke();
		else if (aD.kf)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kh - 1; 0 <= aB; aB--) {
					var hs = aB + kc;
					this.hj[hs] = aD.data.botDifficultyData[hs]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kh - 1; 0 <= aB; aB--) this.hj[hs = aB + kc] = aD.data.botDifficultyTeam[bg.ki[bg.ez[hs]]];
				else if (1 === aD.data.botDifficultyType) {
			var kj = this.kW.length;
			for (aB = aD.kh - 1; 0 <= aB; aB--) this.hj[aB + kc] = aB % kj
		} else
			for (kj = aD.data.botDifficultyValue, aB = aD.kh - 1; 0 <= aB; aB--) this.hj[aB + kc] = kj;
		else
			for (var kg = 8 === aD.kd ? 1 : 0, aB = aD.kh - 1; 0 <= aB; aB--) this.hj[aB + kc] = kg;
		for (aB = 0; aB < kc; aB++) this.hj[aB] = 6;
		var f1 = aD.ey;
		for (aB = 0; aB < f1; aB++) this.hj[aB] <= 2 ? (kT[aB] = 5, kU[aB] = kV[aB] = 1040, 0 === this.hj[aB] ? (kR[aB] = 980, kS[aB] = 980) : 1 === this.hj[aB] ? (kR[aB] = 980, kS[aB] = 920, kU[aB] = kV[aB] = 1100) : (kR[aB] = 825, kS[aB] =
			750)) : this.hj[aB] <= 4 ? (kT[aB] = 1 + ay.jc(20), 3 === this.hj[aB] ? (kR[aB] = kS[aB] = 500, kU[aB] = kV[aB] = 1e3) : (kV[aB] = 250 + ay.jc(1501), kU[aB] = 500 + ay.jc(501), kR[aB] = 300 + ay.jc(201), kS[aB] = 100 + ay.jc(
			201))) : this.hj[aB] <= 5 ? (kU[aB] = 1e3, kV[aB] = 1e3, kT[aB] = 35 + ay.jc(16), kR[aB] = 300 + ay.jc(201), kS[aB] = 50 + ay.jc(101)) : (kU[aB] = kV[aB] = 800, kT[aB] = 5, kR[aB] = 10, kS[aB] = 250), kk(aB)
	}, this.ke = function() {
		for (var ef = az.kl, kc = aD.kL, aB = ef - 1; 0 <= aB; aB--) this.hj[aB + kc] = 0;
		for (var fL = 0; fL < 6; fL++) {
			for (aB = ef + az.km[fL] - 1; ef <= aB; aB--) this.hj[aB + kc] = fL;
			ef += az.km[fL]
		}
	}, this.k7 = function(gY, value) {
		kQ[gY] = Math.min(value, kQ[gY])
	}, this.eU = function(gY) {
		0 == --kQ[gY] && ! function(gY) {
			(function(gY) {
				kU[gY] !== kV[gY] && (kU[gY] += kU[gY] < kV[gY] ? 3 : -3);
				kR[gY] !== kS[gY] && (kR[gY] += kR[gY] < kS[gY] ? kT[gY] : -kT[gY], kR[gY] = (Math.abs(kR[gY] - kS[gY]) <= kT[gY] ? kS : kR)[gY]);
				kQ[gY] = bL.du(kU[gY], 10)
			})(gY), ao.j8.jy(gY, bL.du(kR[gY] * ag.h2[gY], 1e3))
		}(gY)
	}, this.kp = function(gY, gT) {
		kU[gY] = kV[gY] = gT
	}
}

function j4() {
	var kq = new Uint16Array(aD.ey);

	function l5(player, l3) {
		for (var f1 = bO.fV[0], fd = bO.fd, lH = -1, lI = aD.ey, aB = 0; aB < f1; aB++) {
			var fH, gY = fd[aB];
			bs.eu(player, gY) && (fH = bM.iT(l3, bM.is(gY)), -1 === lH || fH < lH) && (lH = fH, lI = gY)
		}
		return lI
	}

	function l7(l4, l3) {
		if (l4 === aD.ey) return 0;
		var gh = ag.gh[l4],
			lG = gh.length;
		if (0 === lG) return 0;
		for (var f1 = Math.min(lG, 10), lI = 0, lH = bM.iT(gh[lI] >> 2, l3), aB = 0; aB < f1; aB++) {
			var hs = ay.jc(lG),
				fH = bM.iT(gh[hs] >> 2, l3);
			fH < lH && (lH = fH, lI = hs)
		}
		return gh[lI] >> 2
	}

	function lC(player, l3, jU, lK) {
		var lL;
		(lK === aD.ey || (lL = bM.is(jU), lK = bM.is(lK), bM.iT(l3, lL) < bM.iT(l3, lK))) && (kq[player] = jU)
	}
	this.dd = function() {
		kq.fill(aD.ey)
	}, this.jG = function() {
		if (bf.kI() % 109 == 9 && !(al.kr < 20) && aD.hu && !(bh.ks() < bL.du(8 * aD.k5, 10))) {
			var kt = bh.ku();
			if (bg.ki[kt]) {
				bh.kv(kt);
				var f1 = bO.fV[0];
				if (0 !== f1)
					for (var g = bO.fe, kw = al.kw, kr = al.kr, kx = kq, hs = ay.jc(f1), aB = 0; aB < kr; aB++) {
						var hS = kw[aB],
							ky = g[hs];
						bA.gM.kz(hS, ky) && 512 === kx[hS] && (kx[hS] = ky, hs = (hs + 1) % f1)
					}
			}
		}
	}, this.eU = function(player) {
		var l3, l6, l4, l0 = function(player) {
			var jU = kq[player];
			if (jU !== aD.ey) {
				if (bA.gM.lJ(jU) && ag.gh[jU]) return jU;
				kq[player] = aD.ey
			}
			return aD.ey
		}(player);
		return function(player) {
			for (var lF = al.kw, lG = al.kr, f1 = Math.min(lG, lG < 17 && 5 === ay.jc(20) ? 1 : 16), gZ = ay.jc(lG), fd = bO.fd, gh = ag.gh, gT = 0, aB = 0; aB < f1; aB++) {
				var gY = lF[(aB + gZ) % lG];
				gY !== player && gh[gY].length && (fd[gT++] = gY)
			}
			bO.fV[0] = gT
		}(player), 0 !== bO.fV[0] && (0 < (l6 = l7(l4 = l5(player, l3 = bM.ix(player)), l3)) && bN.l8.l9(player, bN.lA.lB(l6, l3)) ? (lC(player, l3, l4, l0), !0) : 0 < (l4 = function(player, l3) {
			for (var f1 = bO.fV[0], fd = bO.fd, kx = kq, gZ = 0, aB = 0; aB < f1; aB++) {
				var gY = fd[aB],
					gY = kx[gY];
				gY !== aD.ey && bA.gM.lJ(gY) && player !== gY && bs.eu(player, gY) && (fd[gZ++] = gY)
			}
			return 0 !== (bO.fV[0] = gZ) ? l7(l5(player, l3), l3) : 0
		}(player, l3)) && bN.l8.l9(player, bN.lA.lB(l4, l3)) ? (lC(player, l3, ac.et(l4 << 2), l0), !0) : !!(0 < (l6 = l7(l0, l3)) && bN.l8.l9(player, bN.lA.lB(l6, l3))))
	}
}

function jB() {
	function lP(player) {
		for (var fQ = ag.fQ[player], f1 = fQ.length, fR = Math.max(bL.du(f1, 12), 1), f3 = ac.f3, e8 = ay.jc(f1), aB = 0; aB < f1; aB += fR)
			for (var eq = fQ[(aB + e8) % f1], f4 = 3; 0 <= f4; f4--) {
				var f5 = eq + f3[f4];
				if (ac.f6(f5)) return {
					ef: f5,
					id: ac.ej(f5),
					gY: player
				}
			}
		return null
	}

	function lU(player, lW) {
		var hj = bA.gM.lX(player, aE.ka[aE.hj[player]]);
		ag.gS[player].push(lW.ef), ad.eY(player, hj, lW.gY), aF.jS(player, !0)
	}
	this.eU = function(player) {
		return !!bS.eg(bS.eh) && !!aD.data.passableMountains && 0 !== ag.fQ[player].length && function(player) {
			var lO = lP(player);
			if (null === lO) return !1;
			! function(player) {
				for (var kw = al.kw, kr = al.kr, f1 = Math.min(kr, 12), gZ = ay.jc(kr), fd = bO.fd, fQ = ag.fQ, gT = 0, aB = 0; aB < f1; aB++) {
					var gY = kw[(aB + gZ) % kr];
					gY !== player && fQ[gY].length && bs.eu(player, gY) && (fd[gT++] = gY)
				}
				bO.fV[0] = gT
			}(player);
			var lR = function(ei) {
				for (var f1 = bO.fV[0], fd = bO.fd, aB = 0; aB < f1; aB++) {
					var lW = lP(fd[aB]);
					if (null !== lW && lW.id === ei) return lW
				}
				return null
			}(lO.id);
			return null !== lR ? (lU(player, lR), !0) : function(player, ei) {
				var f1 = ao.iz.lV;
				if (0 !== f1)
					for (var ef = ao.iz.eN[ay.jc(f1)] << 2, f3 = ac.f3, f4 = ay.jc(4);;) {
						if (ef += f3[f4], ac.f6(ef)) {
							if (ac.ej(ef) === ei) return lU(player, {
								ef: ef,
								gY: aD.ey
							}), !0;
							break
						}
						if (!ac.es(ef)) break
					}
				return !1
			}(player, lO.id)
		}(player)
	}
}

function j2() {
	this.eU = function(player) {
		return bN.l8.l9(player, function(player) {
			var f1 = ao.iz.lV;
			if (0 === f1) return -1;
			for (var lG = Math.min(f1, ao.performance.lZ ? f1 : 10), eN = ao.iz.eN, jb = bL.du(ay.random() * f1, ay.value(100)), e = jb + lG, la = ay.iy(ag.it[player], ag.iu[player]), lb = ay.iy(ag.iv[player], ag.iw[player]), lI = -1,
					fH = bM.iU(0, 0, bS.fC, bS.fD), aB = jb; aB < e; aB++) {
				var gZ = aB % f1,
					lc = bM.fJ(la, lb, eN[gZ]);
				lc < fH && (fH = lc, lI = gZ)
			}
			return -1 !== lI ? function(en, la, lb) {
				var hF = bM.f9(en),
					hH = bM.fB(en),
					iK = la - hF,
					iN = lb - hH;
				Math.abs(iK) >= Math.abs(iN) ? (iN = 0, iK = Math.sign(iK)) : (iK = 0, iN = Math.sign(iN));
				iK === iN && (iK = 1);
				for (;;) {
					if (hF += iK, hH += iN, !bM.fN(hF, hH)) break;
					if (en = bM.fO(hF, hH), ac.iE(bM.er(en))) return en
				}
				return -1
			}(eN[lI], la, lb) : -1
		}(player))
	}
}

function jD() {
	this.eU = function(player) {
		var le = function(player) {
			for (var lh = bN.lh.lj(), f1 = lh.length, lG = Math.min(f1, 32), hs = ay.jc(f1), aB = 0; aB < lG; aB++) {
				var le = (aB + hs) % f1,
					lg = lh[le],
					iR = lg[0],
					iS = lg[lg.length - 1];
				if (bN.lA.lk(player, iR) && bN.lA.ll(player, iS)) return le;
				if (bN.lA.lk(player, iS) && bN.lA.ll(player, iR)) return 0 <= (le = bN.lh.lm(iS, iR)) ? le : bN.lh.ln() ? -1 : bN.lh.lo(bN.lh.lp(lg))
			}
			return -1
		}(player);
		return -1 !== le && (le = bN.lh.get(le), !bN.lA.li(player, le)) && (bO.g[0] = le, !0)
	}
}

function j5() {
	this.lZ = 0, this.dd = function() {
		this.lZ = 0
	}, this.eU = function() {
		if (!this.lZ && bf.kI() % 30 == 7 && bA.gM.ls(80) && (ao.performance.lZ = 1)) {
			if (aD.hu) {
				var kt = bh.ku();
				if (bg.ki[kt]) {
					bh.kM(kt);
					var g = bO.fe,
						f1 = bO.fV[0];
					if (0 !== f1)
						for (var lv = Math.min(100 + 10 * (f1 - 1), 400), aB = 0; aB < f1; aB++) aE.kp(g[aB], lv)
				}
			}
			aE.kp(lw[0], 100)
		}
	}
}

function j0() {
	var lx = 0,
		ly = 0,
		lz = 300,
		m0 = 300,
		m1 = 0;
	this.lV = 0, this.eN = new Uint32Array(512), this.dd = function() {
		ly = lx = 0, this.lV = 0, m1 = 0
	}, this.eU = function() {
		if (function() {
				var f1 = ao.iz.lV;
				if (0 === f1) return 1;
				var eN = ao.iz.eN;
				if (bf.kI() % 35 == 6) {
					for (var aB = f1 - 1; 0 <= aB; aB--) ac.es(eN[aB] << 2) || (f1--, eN[aB] = eN[f1]);
					ao.iz.lV = f1
				}
				return f1 < eN.length
			}())
			if (lz <= lx) {
				var m5 = ao.iz.lV;
				if (m5) {
					if (bf.kI() % 350 != 1) return;
					if (m1 !== m5) return void(m1 = m5);
					if (!bA.gM.ji(lw[0])) return
				} else if (bf.kI() % 12 != 8) return;
				bA.gM.m6() || ao.iz.dd()
			} else {
				var aB, i = bS.fC,
					m7 = i - 2,
					m5 = m7 * (bS.fD - 2),
					m8 = lz,
					eN = ao.iz.eN,
					lG = ao.iz.lV,
					m9 = eN.length,
					gZ = Math.min(ly + m8 * ((1 + 19 * ao.performance.lZ) * m0), m5);
				for (aB = ly; aB < gZ; aB += m8) {
					var ef = 4 * (aB % m7 + (bL.du(aB, m7) + 1) * i + 1);
					if (ac.es(ef) && (eN[lG] = ef >> 2, ++lG === m9)) {
						aB += m8;
						break
					}
				}(ly = aB) >= m5 && (ly = ++lx), ao.iz.lV = lG
			}
	}
}

function jF() {
	this.eU = function() {
		if (bf.kI() % 51 == 45)
			for (var f1 = bN.y.mB, mC = bN.y.mC, mD = bN.y.mD, mE = bN.y.mE, mF = bN.y.mF, kb = aE.kb, hj = aE.hj, aB = 0; aB < f1; aB++) {
				var lg, player, mJ, mG = mC[aB];
				mG % 64 == 6 || (lg = mD[aB], (player = bN.lA.mH(lg[lg.length - 1])) < 0) || !bA.gM.kz(player, mF[aB] >> 3) || ay.jc(1e3) >= kb[hj[player]] || ! function(mN, lg) {
					for (var f1 = lg.length - 1, mO = bN.y.mP[mN], fH = 0, aB = mO + 1; aB < f1; aB++) fH += bM.iQ(lg[aB], lg[aB + 1]);
					return (fH += bM.iQ(bM.ik(bN.y.mQ[mN]), lg[mO + 1])) <= 60
				}(aB, lg) || (mJ = mE[aB], 64 <= mG && bN.mK.mL(player, mJ)) || function(player, lg, mJ, mN, mG) {
					bN.mR.mS(player) && bA.gM.mT(player, aE.kX[aE.hj[player]], 32, 0) && (bN.y.mC[mN] = 64 + mG % 64, bN.mK.eY(mJ, bN.y.mU), bO.g[0] = bN.lh.lp(lg), bO.fc[1] = 6, bA.gM.mV(player), bN.y.mW(player))
				}(player, lg, mJ, aB, mG)
			}
	}
}

function mX() {
	aN.eU(), af.eU(), aW.mY(), b0.y.eU()
}

function mZ() {
	b1.eU(), aG.eU(), an.eU(), ae.eU(), b4.eU(), aF.eU(), ao.eU(), bN.y.eU(), al.ma(), aV.eU(), az.eU(), bV.eU(), af.eU(), af.mb(), aW.eU(), bP.eU(), aU.eU(), aP.eU(), aN.eU(), b5.eU(), aR.eU(), aw.eU(), bd.eU(), bh.eU(), b0.y.eU(), b0.mc.eU(), t
	.eU(), bU.eJ.eU(), b9.eU(), bf.eU()
}

function md() {
	aH.eU(), aX.eU(), aQ.eU(), av.eU(), bC.eU(), ax.me()
}

function mf() {
	aV.mg(!1), aP.mg(), aW.mg(!1), aU.mg(), aR.mg(), aw.mg(), af.mg(!1), bh.mh()
}

function mi() {
	af.mg(!1) && (bf.dl = !0), b0.y.eU()
}

function c6() {
	var mj, mk, ml;

	function mn(mp) {
		for (var aB = mj - 1; 0 <= aB; aB--) 0 === ml[mk[aB]] && ag.go[mk[aB]] >= mp && g4(mk[aB])
	}

	function mm(player) {
		var dt;
		64 === ml[player] ? ml[player] = 6 : (dt = ag.go[player], ml[player] = dt < 1e3 ? 3 : dt < 1e4 ? 2 : dt < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		mj = 0, mk = new Uint16Array(aD.ey), ml = new Uint8Array(aD.ey)
	}, this.eU = function() {
		for (var aB = mj - 1; 0 <= aB; aB--) 64 === ml[mk[aB]] ? mm(mk[aB]) : 0 == ml[mk[aB]]-- && (mm(mk[aB]), g4(mk[aB]));
		16e4 <= ag.go[lw[0]] && (mn(16e4), 3e5 <= ag.go[lw[0]]) && mn(3e5), bA.gM.lJ(aD.el) && (bd.mq[7] = Math.max(ag.go[aD.el], bd.mq[7]))
	}, this.gO = function(player) {
		for (var fK, aB = mj - 1; 0 <= aB; aB--)
			if (player === mk[aB]) {
				for (mj--, fK = aB; fK < mj; fK++) mk[fK] = mk[fK + 1];
				return
			}
	}, this.jS = function(player, mr) {
		for (var aB = mj - 1; 0 <= aB; aB--)
			if (player === mk[aB]) return;
		mk[mj++] = player, ml[player] = mr ? 2 : 64
	}
}

function c7() {
	var size, k9;
	this.dd = function() {
		size = aD.kh, k9 = new Uint16Array(aD.ey);
		for (var kL = aD.kL, aB = aD.kh - 1; 0 <= aB; aB--) k9[aB] = kL + aB
	}, this.eU = function() {
		ao.jE.eU();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.mu[k9[aB]]) {
				fK = void 0;
				var fK = aB;
				size--, k9[fK] = k9[size]
			} else aE.eU(k9[aB])
	}, this.mt = function(gY) {
		k9[size++] = gY
	}
}

function c8() {
	var mw, mx, my, mz, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9 = !1,
		nA = !1;

	function nB(eG) {
		n7 = bf.eQ, my = mz = mx = 0, n0 = (n8 = 33) / eG, mw = 1 / (eG / n8 / 4), n1 = (h.i / 2 + ib) / iB, n2 = (h.j / 2 + ic) / iB, n3 = iB
	}

	function nI(aB) {
		var nK; - 1 !== aB && (aB = bM.ik(bN.y.mQ[aB]), nK = bM.f9(aB) - 15, aB = bM.fB(aB) - 15, aH.nE(nK, aB, 29 + nK, 29 + aB))
	}

	function nV(eD) {
		Math.abs(Math.log(n6 / n3)) < .125 && (n6 = eD * n3)
	}

	function nU(nK, nL, nX, nY) {
		n4 = (nK + nX + 1) / 2, n5 = (nL + nY + 1) / 2;
		nX = h.i / (nX - nK + 1), nK = h.j / (nY - nL + 1);
		n6 = .9 * (nX < nK ? nX : nK)
	}
	this.nC = function() {
		return n9
	}, this.nD = function() {
		nB(1), this.nE(0, 0, bS.fC - 1, bS.fD - 1), aD.hO || aD.h9 || this.nF(aD.el, 3e3, !0, .3)
	}, this.nG = function(player, nH) {
		nI(bN.lA.nJ(player, nH))
	}, this.nF = function(player, eG, nM, zoom) {
		aD.nN || n9 && !nM && nA || (0 === ag.go[player] ? nI(bN.lA.nO(player)) : (aS.nP = !1, nA = nM, nB(eG), function(player) {
			n4 = (ag.it[player] + ag.iu[player] + 1) / 2, n5 = (ag.iv[player] + ag.iw[player] + 1) / 2
		}(player), function(zoom, player) {
			var iK = ag.iu[player] - ag.it[player] + 1,
				player = ag.iw[player] - ag.iv[player] + 1,
				fK = h.i / iK,
				fL = h.j / player,
				fK = (n6 = fK < fL ? fK : fL, 0 !== zoom ? zoom : iK < 20 && player < 20 ? .5 : .9);
			n6 *= fK, nV(7 / 8)
		}(zoom, player), n9 = !0, ar.nS()))
	}, this.nT = function(eG) {
		aD.h9 || aD.nN || (aS.nP = !1, nA = !1, nB(eG), nU(0, 0, bS.fC - 1, bS.fD - 1), nV(7 / 8), n9 = !0, ar.nS())
	}, this.nE = function(nK, nL, nX, nY) {
		n9 = !1, nU(nK, nL, nX, nY), iB = n6, aS.nZ(n4, h.i / 2), aS.na(n5, h.j / 2), ba.nb(), bf.dl = !0
	}, this.nc = function() {
		return !(n9 && nA || (n9 = !1))
	}, this.eU = function() {
		var nf, ng, f4, nj;
		n9 && (mx < .5 ? mz < n0 && (mz += n0 * mw, my = mx) : 1 - my < mx && (mz = (mz -= n0 * mw) < n0 * mw ? n0 * mw : mz), n7 = n7 >= bf.eQ ? bf.eQ - 1 : n7, f4 = bf.eQ - n7, mx = 1e3 < f4 || 1 < (mx += mz * f4 / n8) ? 1 : mx, n7 = bf.eQ,
			f4 = iB, nf = ib, ng = ic, f4 = (iB = n3 * Math.pow(n6 / n3, mx)) / f4, nj = 1 - (n3 * Math.pow(n6 / n3, 1 - mx) - n3) / (n6 - n3), aS.nZ(n1 + nj * (n4 - n1), h.i / 2), aS.na(n2 + nj * (n5 - n2), h.j / 2), af.zoom(f4, (nf * f4 -
				ib) / (1 - f4), (ng * f4 - ic) / (1 - f4)), ba.nb(), 1 <= mx && (n9 = !1, bb.nk = !0), bf.dl = !0)
	}
}

function c0() {
	var eZ = bA.color;
	this.nl = eZ.nm(0, 0, 0), this.nn = eZ.no(0, 0, 0, .7), this.np = eZ.no(0, 0, 0, .5), this.nq = eZ.no(0, 0, 0, .85), this.nr = eZ.no(0, 0, 0, .75), this.ns = eZ.no(0, 0, 0, .6), this.nt = eZ.no(0, 0, 0, .35), this.nu = eZ.nm(255, 255, 255), this
		.nv = eZ.no(255, 255, 255, .3), this.nw = eZ.no(255, 255, 255, .6), this.nx = eZ.no(255, 255, 255, .4), this.ny = eZ.no(255, 255, 255, .25), this.nz = eZ.no(255, 255, 255, .85), this.o0 = eZ.no(255, 255, 255, .75), this.o1 = eZ.no(255, 255,
			255, .15), this.o2 = eZ.no(255, 255, 255, .11), this.o3 = eZ.nm(128, 128, 128), this.o4 = eZ.no(64, 64, 64, .75), this.o5 = eZ.no(88, 88, 88, .83), this.o6 = eZ.no(60, 60, 60, .85), this.o7 = eZ.no(80, 60, 60, .85), this.o8 = eZ.nm(170,
			170, 170), this.o9 = eZ.nm(200, 235, 245), this.oA = eZ.nm(30, 255, 30), this.oB = eZ.nm(0, 200, 0), this.oC = eZ.nm(128, 255, 128), this.oD = eZ.no(10, 65, 10, .75), this.oE = eZ.no(0, 255, 0, .6), this.oF = eZ.no(0, 255, 0, .5), this
		.oG = eZ.no(0, 200, 0, .5), this.oH = eZ.no(0, 100, 0, .75), this.oI = eZ.no(0, 60, 0, .8), this.oJ = eZ.no(0, 255, 0, .3), this.oK = eZ.no(0, 180, 0, .6), this.oL = eZ.no(0, 120, 0, .85), this.oM = eZ.nm(0, 120, 0), this.oN = eZ.no(0, 70, 0,
			.85), this.oO = eZ.nm(190, 230, 190), this.oP = eZ.nm(0, 255, 0), this.oQ = eZ.nm(255, 120, 120), this.oR = eZ.nm(255, 160, 160), this.oS = eZ.nm(255, 70, 70), this.oT = eZ.nm(230, 0, 0), this.oU = eZ.no(220, 0, 0, .6), this.oV = eZ.no(
			255, 100, 100, .8), this.oW = eZ.no(100, 0, 0, .85), this.oX = eZ.no(60, 0, 0, .85), this.oY = eZ.no(200, 0, 0, .6), this.oZ = eZ.no(120, 0, 0, .85), this.oa = eZ.nm(255, 70, 10), this.ob = eZ.nm(230, 190, 190), this.oc = eZ.nm(255, 0,
		0), this.od = eZ.nm(255, 0, 255), this.oe = eZ.no(60, 0, 60, .85), this.og = eZ.no(0, 60, 60, .85), this.oh = eZ.no(10, 60, 60, .9), this.oi = eZ.no(0, 96, 96, .75), this.oj = eZ.nm(0, 255, 255), this.ok = eZ.nm(160, 160, 255), this.ol = eZ
		.no(0, 40, 90, .75), this.om = eZ.no(0, 0, 255, .6), this.on = eZ.nm(200, 200, 255), this.oo = eZ.no(50, 50, 255, .83), this.op = eZ.nm(255, 120, 100), this.oq = eZ.no(255, 255, 0, .5), this.or = eZ.no(255, 255, 150, .2), this.os = eZ.nm(255,
			255, 0), this.ot = eZ.nm(255, 255, 200), this.ou = eZ.no(200, 200, 0, .6), this.ov = eZ.no(140, 120, 0, .75), this.ow = eZ.no(180, 160, 40, .75), this.ox = eZ.no(70, 50, 20, .85), this.oy = eZ.no(30, 30, 0, .85), this.oz = eZ.no(60, 60,
			0, .85), this.p0 = eZ.nm(255, 255, 100), this.p1 = eZ.nm(255, 255, 140), this.p2 = eZ.no(255, 140, 0, .75), this.p3 = eZ.no(70, 40, 0, .85), this.p4 = eZ.nm(255, 150, 0), this.p5 = eZ.no(255, 200, 80, .85), this.p6 = eZ.no(0, 0, 0, 0),
		this.p7 = eZ.no(255, 255, 255, 0), this.p8 = eZ.no(254, 254, 254, 0)
}

function cy() {
	this.hQ = new p9, this.gM = new pA, this.pB = new pC, this.pD = new pE, this.kN = new pF
}

function p9() {
	this.hR = function(en) {
		aD.kf ? b8.pB.hR(aD.el, en) : b0.pG.pH(en)
	}, this.hX = function(ia, jU) {
		aD.kf ? b8.pB.hX(aD.el, ia, jU) : b0.pG.pI(ia, jU)
	}, this.pJ = function(ia, pK) {
		aD.kf ? b8.pB.pL(aD.el, ia, pK) : b0.pG.pM(ia, pK)
	}, this.hc = function(ia, en) {
		en = (en << 3) + bO.fc[6];
		aD.kf ? b8.pB.hc(aD.el, ia, en) : bN.mR.mS(aD.el) && b0.pG.pO(ia, en)
	}, this.hf = function(ia) {
		849 === ia && (ia = 850);
		var nH = bO.fc[3];
		aD.kf ? b8.pB.hf(aD.el, ia, nH) : bN.hd.pP(aD.el, nH) && b0.pG.pQ(ia, nH)
	}, this.pR = function(nH) {
		aD.kf ? b8.pB.pR(aD.el, nH) : b0.pG.pQ(849, nH)
	}, this.pS = function(jU) {
		aD.kf ? b8.pB.pS(aD.el, jU) : b0.pG.pT(jU)
	}, this.pU = function(pV) {
		aD.kf ? b8.pB.pW(aD.el, pV) : b0.pG.pX(pV)
	}, this.ho = function(pY) {
		aD.kf ? b8.pB.ho(aD.el, pY) : b0.pG.pZ(pY)
	}, this.pa = function() {
		aD.kf ? b8.pB.pa(aD.el) : b0.pG.pb()
	}, this.hl = function() {
		aD.kf ? b8.pB.hl(aD.el) : b0.pG.pT(513)
	}, this.hT = function(ia, en, jU) {
		aD.kf ? b8.pB.hT(aD.el, ia, en, jU) : b0.pG.pc(ia, en, jU)
	}
}

function pF() {
	this.kO = function(player, pK, hj) {
		bA.gM.pd(player, hj, pK) && (ae.pJ(player, pK), !bA.gM.ji(pK)) && ao.j8.jx[pK] && ao.j8.jx[pK]--
	}, this.pe = function(player, pK, hj) {
		bA.gM.pf(hj, pK) ? an.eY(pK, bO.fX[0]) && (bq.pg(player, pK, bO.fX[0], 1), bA.gM.gP(pK, bO.fX[0]), bd.ph(player, pK), af.pi(pK, bO.fX[0])) : bd.gQ(player, hj, 12)
	}
}

function pA() {
	this.pj = function(pV, player) {
		aN.pU(aD.el, player, pV), b0.pG.pk(pV, player)
	}, this.pl = function(player) {
		aN.pm(player, 0), b0.pG.pn(player)
	}, this.po = function(pp, player) {
		aN.pq(pp, player), b0.pG.pr(pp, player)
	}, this.ps = function() {
		aD.kf || aD.h9 || b0.pt.ps()
	}
}

function pE() {
	this.eU = function(aC) {
		var id, fj, nc;
		for (bH.dd(aC), bH.e9 += 2, nc = 8 * bH.size; bH.e9 + 8 <= nc;) id = bH.pu(4), fj = bH.pu(9), 0 === id ? this.pv(id, fj, bH.pu(22)) : 1 === id ? this.pv(id, fj, bH.pu(10), bH.pu(10)) : 2 === id ? this.pv(id, fj, bH.pu(10), bH.pu(9)) :
			3 === id ? this.pv(id, fj, bH.pu(10), bH.pu(27)) : 4 === id ? this.pv(id, fj, bH.pu(10), bH.pu(16)) : 5 === id || 6 === id ? this.pv(id, fj, bH.pu(10)) : 7 === id ? this.pv(id, fj, bH.pu(1)) : 10 === id ? this.pv(id, fj, bH.pu(20), bH
				.pu(22)) : this.pv(id, fj)
	}, this.pw = [], this.px = function() {
		for (var pz = 0, q0 = 0, q1 = 0, q2 = 0, q3 = 0, q4 = 0, aB = 0; aB < 512; aB++) pz += ag.mu[aB], q0 += ag.go[aB], q1 += ag.h2[aB], q2 += bN.y.kP[aB];
		q3 += bN.y.mB, q4 += al.kr, this.pw.push(q1 % 1073741824 * 4 + (pz + q0 + q2 + q3 + q4) % 4)
	}, this.pv = function(id, fj, fl, fn) {
		0 === id ? b8.pB.hR(fj, fl) : 1 === id ? b8.pB.hX(fj, fl, fn) : 2 === id ? b8.pB.pL(fj, fl, fn) : 3 === id ? b8.pB.hc(fj, fl, fn) : 4 === id ? b8.pB.hf(fj, fl, fn) : 5 === id ? b8.pB.pS(fj, fl) : 6 === id ? b8.pB.pW(fj, fl) : 7 === id ?
			b8.pB.ho(fj, fl) : 8 === id ? b8.pB.pa(fj) : 9 === id ? b8.pB.q5(fj) : 10 === id && b8.pB.hT(fj, fl >> 10, fn, fl % 1024)
	}
}

function pC() {
	this.hR = function(player, en) {
		bA.gM.hB(0) && bA.gM.hC(player) && bM.ih(en) && (b9.q6.q7(0, player, en), aD.q8.eY(player, en))
	}, this.hX = function(player, ia, jU) {
		bA.gM.hB(1) && bA.gM.hC(player) && bA.gM.q9(player, jU) && bA.gM.mT(player, ia, 12, 0) && bA.gM.qA(player, jU) && ((jU = ad.jg(player, bO.ex[0])) || ad.jz(player)) && (ag.qB[player]++, b9.q6.q7(1, player, ia, bO.ex[0]), ao.j6.jK(player,
			jU)) && (bA.gM.mV(player), bd.qC(player, ia), ao.j6.jQ(player))
	}, this.pL = function(player, ia, pK) {
		bA.gM.hB(1) && bA.gM.hC(player) && aD.hu && bA.gM.q9(player, pK) && bA.gM.qD(player, pK) && bA.gM.pd(player, bA.gM.iZ(player, ia), pK) && an.eY(pK, bO.fX[0]) && (b9.q6.q7(2, player, ia, pK), ae.pJ(player, pK))
	}, this.hc = function(player, ia, pN) {
		bO.fc[1] = 7 & pN;
		var en = pN >> 3;
		bA.gM.hB(1) && bA.gM.hC(player) && bM.ih(en) && bN.mR.mS(player) && bN.mR.qE(en) && bA.gM.mT(player, ia, 32, 0) && bN.l8.qF(player, en, 1) && (bd.qG(player), b9.q6.q7(3, player, ia, pN), bA.gM.mV(player), bl.qH.hc(player), bN.y.mW(
			player))
	}, this.hf = function(player, ia, nH) {
		849 === ia ? this.pR(player, nH) : bA.gM.hB(1) && bA.gM.hC(player) && bA.gM.mT(player, ia, 32, 0) && bN.hd.qI(player, nH) && (bd.qG(player), b9.q6.q7(4, player, ia, nH), bA.gM.mV(player), bl.qH.hf(player), bN.y.mW(player))
	}, this.pR = function(player, nH) {
		bA.gM.hB(1) && bA.gM.hC(player) && bN.qJ.eU(player, nH) && b9.q6.q7(4, player, 849, nH)
	}, this.pS = function(player, jU) {
		513 === jU ? this.hl(player) : bA.gM.hB(1) && bA.gM.hC(player) && (jU = Math.min(jU, aD.ey), ad.jg(player, jU)) && (b9.q6.q7(5, player, jU), ad.qK(player, jU))
	}, this.pW = function(player, pV) {
		(bA.gM.hB(1) || bA.gM.hB(2)) && bA.gM.hC(player) && (pV = bL.i8(pV, 0, 1023), b9.q6.q7(6, player, pV), af.qL(player, 0, pV))
	}, this.ho = function(player, pY) {
		aw.hn(player) && (b9.q6.q7(7, player, pY), aw.qM(player, pY))
	}, this.pa = function(player) {
		(bA.gM.hB(0) || bA.gM.hB(1)) && bA.gM.hC(player) && aM.qN(player) && (b9.q6.q7(8, player), bQ.pa(player))
	}, this.q5 = function(player) {
		b9.q6.q7(9, player), bQ.q5(player)
	}, this.hl = function(player) {
		aw.hp(player) && (b9.q6.q7(5, player, 513), aw.hl(player))
	}, this.hT = function(player, ia, en, jU) {
		bA.gM.hB(1) && bA.gM.hC(player) && bA.gM.q9(player, jU) && bA.gM.qA(player, jU) && bM.ih(en) && am.ec.ev(player, en) && (ad.jg(player, bO.ex[0]) || ad.jz(player)) && (b9.q6.q7(10, player, (ia << 10) + bO.ex[0], en), jU = bA.gM.lX(player,
			ia), ag.gS[player].push(bO.f2[0]), ad.eY(player, jU, bO.ex[0]), aF.jS(player, !0), bd.qO(player))
	}
}

function qP() {
	var qR;
	this.qQ = [], this.qR = document.createElement("div"), this.qS = function(qT, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qT, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qR.appendChild(
			title), title
	}, this.qU = function(qT, marginBottom) {
		var qV = document.createElement("p");
		return qV.textContent = qT, qV.style.fontSize = "0.75em", qV.style.lineHeight = "1.2em", qV.style.marginBottom = marginBottom || "0", this.qR.appendChild(qV), qV
	}, this.qW = function(qT) {
		var qX = document.createElement("p");
		return qX.textContent = qT, qX.style.fontSize = "1em", qX.style.marginBottom = "0", qX.style.whiteSpace = "pre-wrap", qX.style.overflowWrap = "break-word", this.qR.appendChild(qX), qX
	}, this.qY = function(qZ, fontSize) {
		var qR = document.createElement("div");
		return qR.innerHTML = qZ, qR.style.fontSize = fontSize || "1em", qR.style.lineHeight = "1.2em", this.qR.appendChild(qR), qR
	}, this.qa = function(qb) {
		for (var qc = qb.qc, f1 = qc.length, aB = 0; aB < f1; aB++) this.qR.appendChild(qc[aB])
	}, this.qd = function(qe) {
		return this.qQ.push(qe), this.qR.appendChild(qe.e), qe
	}, this.resize = function() {
		for (var f1 = this.qQ.length, aB = 0; aB < f1; aB++) this.qQ[aB].resize && this.qQ[aB].resize()
	}, (qR = this.qR).style.position = "absolute", qR.style.height = "auto", qR.style.padding = "0.5em"
}

function qf(qg, qh) {
	var qR = document.createElement("div");

	function qp() {
		var aB, qq, j, gZ, f4, ql = h.k * qR.offsetWidth,
			qr = new Float64Array(function(ql) {
				var i = .25 * bA.qm.qn(.6) * h.iA;
				return Math.max(Math.floor(ql / i), 1)
			}(ql)),
			qs = bc.qs,
			qt = (ql - (qr.length + 1) * bc.gap) / (qr.length * h.k);
		for (qr.fill(qs), aB = 0; aB < qh.length; aB++) qq = (f4 = qh[aB].qR).style, j = bA.qu.min(qr), gZ = qr.indexOf(j), qq.top = bA.qm.qv(j), qq.left = bA.qm.qv(qs + gZ * (qt + qs)), qq.width = bA.qm.qv(qt), bA.qm.qw(f4, 5), qr[gZ] += f4
			.offsetHeight + 3 * qs;
		qR.style.height = bA.qm.qv(bA.qu.max(qr) - 2 * qs)
	}
	this.qi = qR, this.qj = qh, this.resize = function() {
		var aB;
		for (aB = 0; aB < qh.length; aB++) qh[aB].resize();
		qp(), qp()
	}, qR.style.width = "100%", qR.style.maxWidth = "100%", qg.style.lineHeight = "1.5em", qg.style.overflowX = "hidden", qg.style.overflowY = "auto";
	for (var aB = 0; aB < qh.length; aB++) qR.appendChild(qh[aB].qR);
	qg.appendChild(qR)
}

function w(qx, qy, qz, r0, r1) {
	var self, r2 = document.createElement("button");

	function r9() {
		var rF;
		bJ.rE() || (rF = bA.color.rG(qz), !1 !== r0 && 0 < rF[0] && rF[0] < 255 && rF[0] === rF[1] && rF[0] === rF[2]) || (128 < rF[0] && 128 < rF[1] && 128 < rF[2] ? r2.style.backgroundColor = bA.color.rH(qz, -50) : r2.style.backgroundColor = bA
			.color.rH(qz, rF[3] && rF[3] < 120 ? 150 : 50))
	}

	function r8() {
		if (r0) {
			var rF = bA.color.rG(qz);
			if (rF[0] === rF[1] && rF[0] === rF[2]) return
		}
		qy && ((rF = qy(this)) ? 2 === rF && r9() : rJ(this))
	}

	function rB() {
		this.style.backgroundColor = qz
	}

	function rA() {
		rJ(this)
	}

	function rJ(f4) {
		f4.style.backgroundColor = qz, f4.blur()
	}
	this.button = r2, this.r3 = qy, this.r4 = qz, this.r7 = function(rC) {
		rC = 1.1 - Math.min(.01 * qx.length, .6) + .2 * rC;
		r2.style.fontSize = rC.toFixed(1) + "em"
	}, this.r6 = function(eZ) {
		eZ ? 1 === eZ ? eZ = bB.o6 : 2 === eZ && (r0 = 1, eZ = bB.o6) : (r0 = 0, eZ = bB.nq), this.r4 = qz = eZ, r2.style.backgroundColor = eZ
	}, self = this, r2.innerHTML = qx, r2.style.color = r1 ? bB.os : bB.nu, r2.style.userSelect = "none", r2.style.outline = "none", r2.style.overflowWrap = "break-word", self.r6(qz), r2.style.border = "none", r2.style.font = "inherit", self.r7(
		0), r2.style.padding = "0em 0.3em", r2.onclick = r8, r2.addEventListener("mouseover", r9), r2.addEventListener("mouseout", rA), r2.addEventListener("focus", r9), r2.addEventListener("blur", rB)
}

function rK(rL, qg) {
	var qR;
	this.resize = function() {
		for (var aB = 0; aB < rL.length; aB++) bA.qm.qw(rL[aB].button);
		qR.style.gap = qR.style.padding = bA.qm.qv(bc.qs)
	}, (qR = document.createElement("div")).style.display = "grid", qR.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qR.style.overflowY = "auto", qR.style.gridAutoRows = "5.3em", qR.style.maxHeight = "100%";
	for (var aB = 0; aB < rL.length; aB++) rL[aB].r7(1), qR.appendChild(rL[aB].button);
	qg.appendChild(qR)
}

function rN(rO, rP, rQ) {
	this.f8 = 0, this.fA = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qm.qn(rQ || .5) * rO[1] * h.iA, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rO[0] / rO[1]), h.i - 2 * bc.gap), this.j = rO[1] * this.i / rO[0], this.f8 = bc.gap + rP[0] * (h.i - this.i - 2 * bc.gap), this.fA = bc
			.gap + rP[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rR = function() {
		return this.f8 + .5 * this.i
	}
}

function rS(rT, rU) {
	var rd, self, rV = document.createElement("div"),
		rW = document.createElement("div"),
		rX = document.createElement("div"),
		rY = null,
		re = (this.rZ = new ra({
			value: "",
			e9: -1
		}, 0, rb, function(e) {
			e.target.value = bA.rl.rm(e.target.value), rY.rk.textContent = 127 - e.target.value.length
		}), 0),
		rf = 1,
		rg = 0,
		rh = 1048575;

	function rb() {
		rT(), rY.rk.textContent = 127
	}

	function rw(rv, qe) {
		qe && (qe.s1 = 1, rv.appendChild(bn.s2.transform(qe)))
	}

	function rz(bu) {
		rf ? rV.scrollTop = rV.scrollHeight : bu && (rV.scrollTop = rg)
	}
	this.rn = function(ro) {
			rh = 1048575, rW.textContent = "", ro || this.mh()
		}, this.mh = function() {
			var rp = bn.y.rq[0],
				rp = bn.y.rs[rp],
				rt = rp.rt,
				f1 = rt.length,
				jb = 1048575 === rh ? 0 : f1 - (rp.ru - rh + 1048575) % 1048575;
			if (rh = rp.ru, !(f1 <= (jb = Math.max(jb, 0)))) {
				for (var rv = document.createDocumentFragment(), aB = jb; aB < f1; aB++) rw(rv, bn.lA.rx(rt[aB], bn.lA.ry(rt[aB])));
				rW.appendChild(rv), rz()
			}
		}, this.s0 = function(r) {
			var rv = document.createDocumentFragment();
			rw(rv, r), rW.appendChild(rv), rz()
		}, this.show = function(qg) {
			qg.appendChild(rV), qg.appendChild(rX), this.resize(qg)
		}, this.s3 = function(qg) {
			t.removeChild(qg, rV), t.removeChild(qg, rX)
		}, this.resize = function(qg) {
			re = qg ? qg.offsetHeight : re;
			var qg = bA.qm.s5(.04, .75),
				s6 = Math.max(qg, re - qg),
				s7 = h.i / h.k,
				s8 = .7 * s7,
				s9 = bA.qm.qv(re - qg - s6),
				s6 = (rX.style.height = bA.qm.qv(qg), rV.style.height = bA.qm.qv(s6), h.j > h.i || a0.a1.i9() ? (rX.style.top = s9, rV.style.top = bA.qm.qv(re - s6), bA.qm.qw(rV, 8)) : (rV.style.top = s9, rX.style.top = bA.qm.qv(re - qg), bA.qm.qw(
						rV, 2)), this.rZ.e.style.width = bA.qm.qv(s8), this.rZ.e.style.fontSize = rd.button.style.fontSize = bA.qm.qv(.5 * qg), bA.qm.qw(this.rZ.e, 6), rd.button.style.left = bA.qm.qv(s8), rd.button.style.width = bA.qm.qv(s7 - s8),
					.385 * qg);
			a0.a1.i9() && (s6 *= .8 - .12 * (h.i > h.j)), rW.style.marginLeft = rW.style.marginRight = bA.qm.qv(.5 * s6), rW.style.fontSize = bA.qm.qv(s6), rz(1)
		}, (self = this).rZ.e.ri = 127, rV.style.position = "absolute", rV.style.left = "0", rV.style.width = "100%", rV.style.overflowX = "hidden", rV.style.overflowY = "auto", rV.style.font = "inherit", rV.style.backgroundColor = bB.ns, rV
		.addEventListener("scroll", function() {
			rg = rV.scrollTop, rf = rg < rV.scrollHeight - rV.clientHeight - 2 ? 0 : 1
		}), rW.style.font = "inherit", rX.style.position = "absolute", rX.style.left = "0", rX.style.width = "100%", self.rZ.e.setAttribute("placeholder", L(13)), self.rZ.e.style.position = "absolute", self.rZ.e.style.top = "0", self.rZ.e.style
		.left = "0", self.rZ.e.style.height = "100%", self.rZ.e.style.backgroundColor = bB.np, self.rZ.e.style.textAlign = "center", (rd = new w(L(14), rb)).button.top = "0", rd.button.style.position = "absolute", rd.button.style.height = "100%", rd
		.r6(bB.p7), rY = new rj("127", rd.button, 1, 1), rV.appendChild(rW), rX.appendChild(self.rZ.e), rX.appendChild(rd.button)
}

function sB(sC, qx, sD) {
	function click() {
		var value = 1 - sC.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qx, void 0 !== sC.e9 ? bj.sE.sF(sC.e9, value) : sC.value = value, sD && sD(value)
	}
	var e;
	qx = qx || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sC.value ? "🟩 " : "⬜ ") + qx, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sG(qg, qZ) {
	var qR = document.createElement("div");
	this.qi = qR, this.resize = function() {
		qR.style.padding = bA.qm.qv(bc.qs), qR.style.lineHeight = bA.qm.qv(bA.qm.s5(.035))
	}, qg.style.overflowX = "hidden", qg.style.overflowY = "auto", qR.innerHTML = qZ, qg.appendChild(qR)
}

function sH(sI) {
	var qR = document.createElement("div");
	this.e = qR, this.sJ = sI, this.resize = function() {
		for (var f1 = sI.length, aB = 1; aB < f1; aB++) bA.qm.qw(sI[aB], 4)
	};
	var aB, f1 = sI.length;
	for (qR.style.width = "100%", qR.style.height = "2.7em", qR.style.marginTop = "0.6em", qR.style.border = "inherit", aB = 0; aB < f1; aB++) sI[aB].style.verticalAlign = "top", sI[aB].style.width = (100 / f1).toFixed(2) + "%", sI[aB].style.height =
		"100%", sI[aB].style.fontSize = "0.75em", qR.appendChild(sI[aB])
}

function sK(sL, qz, sM) {
	this.qR = document.createElement("div"), this.rL = sL;
	var sN = 0;
	this.resize = function(qg, sP) {
		var f1 = sL.length;
		if (!sM)
			for (var aB = 1; aB < f1; aB++) bA.qm.qw(sL[aB].button, 4);
		for (var sQ = 0, aB = 0; aB < f1; aB++) sQ += sL[aB].button.offsetWidth;
		if (qg && (sN = qg.offsetWidth), sP && sQ < sN)
			for (aB = 0; aB < f1; aB++) sL[aB].button.style.width = (100 * sL[aB].button.offsetWidth / sQ).toFixed(2) + "%";
		else
			for (aB = 0; aB < f1; aB++) sL[aB].button.style.width = "auto";
		sP || this.resize(qg, 1)
	};
	var sO = this;
	sO.qR.style.height = sO.qR.style.maxHeight = "100%";
	for (var aB = 0; aB < sL.length; aB++) sL[aB].r6(qz), sL[aB].button.style.height = "100%", sL[aB].button.style.padding = "0.0em 0.9em", sO.qR.appendChild(sL[aB].button)
}

function sR() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qm.qw(this.e, 8, bB.o3)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sS() {
	var sW, sX, sT = document.createElement("div"),
		sU = 0,
		sV = 0;
	this.show = function(f8, fA, qT, sY, sZ) {
		if (sU) {
			if (!sY) return;
			this.s3()
		}
		f8 === fA && -1 === f8 ? (f8 = sW, fA = sX) : (sW = f8, sX = fA), sZ || (sV = sY), sU = 1;
		sZ = h.i / h.k, sT.style.whiteSpace = "pre", sT.textContent = qT, bA.qm.qw(sT, 5), sT.style.font = bA.qm.sb(0, bA.qm.s5(.015)), sT.style.padding = "0.3em 0.6em", sT.style.left = f8 + "px", sT.style.top = "0px", document.body.appendChild(
			sT), sY = f8 + sT.offsetWidth - sZ;
		0 < sY && (sT.style.left = (qT = f8 - sY) + "px", qT < 5) && (sT.style.whiteSpace = "pre-wrap"), sT.style.top = fA - sT.offsetHeight + sV * bc.sd + "px"
	}, this.s3 = function(se) {
		if (sU) {
			if (se && sV) return 0;
			sU = 0, t.removeChild(document.body, sT)
		}
		return 1
	}, sT.style.position = "absolute", sT.style.backgroundColor = bB.nq, sT.style.color = bB.nu, sT.style.pointerEvents = "none", sT.style.zIndex = "5", sT.style.maxWidth = "100%"
}

function ra(sf, type, sg, sh) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.si++, e.value = sf.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.nu, e.style.backgroundColor = bB.nn, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sj++
		}), e.addEventListener("blur", function() {
			h.sj--, -1 !== sf.e9 && bj.sE.sF(sf.e9, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sf.e9 && bj.sE.sF(sf.e9, e.value), sg ? sg() : e.blur())
		}), sh && e.addEventListener("input", function(qe) {
			sh(qe)
		})
}

function sk(qg, data) {
	var f1 = data.sl.length,
		sm = document.createElement("div"),
		sn = document.createElement("div"),
		so = document.createElement("div"),
		sp = new Array(f1),
		qh = new Array(f1),
		sq = new Array(data.sr.length),
		ss = bA.color.no(70, 70, 0, .35);

	function rH() {
		this.style.backgroundColor = bA.color.rH(ss, 160)
	}

	function sx() {
		this.style.backgroundColor = ss
	}

	function qp() {
		var fK;
		for (qg.style.font = bA.qm.sb(0, bA.qm.t7(.026, .5, .03)), aB = 1; aB < sq.length; aB++) bA.qm.qw(sq[aB], 4);
		if (bA.qm.qw(sm, 2), f1) {
			for (var hS, t8 = sm.offsetWidth, t9 = so.offsetWidth, aB = 0; aB < sq.length; aB++) hS = .01 * data.sw[aB] * t9, sq[aB].style.width = (100 * hS / t8).toFixed(2) + "%";
			var lG = data.sl[0].length;
			for (aB = 0; aB < f1; aB++)
				for (bA.qm.qw(sp[aB], 2), fK = 1; fK < lG; fK++) bA.qm.qw(qh[aB][fK], 4);
			sn.st && (sn.scrollTop = sn.st)
		}
	}
	this.resize = function() {
			qp(), qp()
		}, qg.style.display = "flex", qg.style.flexDirection = "column", sn.style.overflowX = "hidden", sn.style.overflowY = "auto", sn.addEventListener("scroll", function() {
			this.st = this.scrollTop
		}),
		function() {
			var f4, aB, sl = data.sl,
				lG = f1 ? sl[0].length : 0;
			for (aB = 0; aB < f1; aB++) {
				sp[aB] = document.createElement("div"), sp[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.no(130, 130, 130, .35) : bB.nt
				}(aB), sp[aB].style.width = "100%", sp[aB].style.display = "flex", qh[aB] = new Array(lG);
				for (var fK = 0; fK < lG; fK++) qh[aB][fK] = f4 = document.createElement("div"), f4.style.display = "flex", f4.style.justifyContent = "center", f4.style.wordBreak = "break-all", f4.style.padding = "0.4em 0em", f4.style.width = data
					.sw[fK] + "%", f4.innerHTML = sl[aB][fK].fS, 1 === sl[aB][fK].dt && (f4.name = "" + aB, f4.style.color = bB.os, f4.style.backgroundColor = ss, f4.addEventListener("mouseover", rH), f4.addEventListener("mouseout", sx), function(f4,
						sz, t0) {
						2147483647 !== t0 && f4.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, sz), bH.dd(bD.aC), this.style.backgroundColor = ss, t.u(8, t.t1, new t2(25, {
								t3: 0,
								sz: bF.t4.t5(bF.t4.t6(5)),
								t0: t0
							}))
						})
					}(f4, sl[aB][fK].sz, sl[aB][fK].t0)), sp[aB].appendChild(f4)
			}
			for (sm.style.display = "flex", sm.style.backgroundColor = bA.color.no(0, 120, 0, .35), aB = 0; aB < sq.length; aB++) sq[aB] = f4 = document.createElement("div"), f4.style.display = "flex", f4.style.justifyContent = "center", f4.style
				.wordBreak = "break-all", f4.style.padding = "0.4em 0em", f4.style.width = data.sw[aB] + "%", f4.innerHTML = data.sr[aB], sm.appendChild(f4)
		}();
	for (var aB = 0; aB < f1; aB++) so.appendChild(sp[aB]);
	sn.appendChild(so), qg.appendChild(sm), qg.appendChild(sn)
}

function tA() {
	var tE, tF, tB = document.createElement("div"),
		tC = document.createElement("div"),
		tD = document.createElement("div"),
		so = document.createElement("div"),
		rL = [],
		e4 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tG = [1, 2, 3, 0, 9, 10, 11];

	function tI(aB) {
		t.u(8, 0, new t2(21, {
			tK: tG[aB],
			tL: 0,
			tM: 10
		}))
	}
	this.show = function() {
			this.sF(t.y.tN), document.body.appendChild(tB)
		}, this.s3 = function() {
			t.removeChild(document.body, tB)
		}, this.sF = function(tN) {
			for (var tO = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rL.length; aB++) {
				var i = tN[aB];
				tE[tO[aB]][1].rk.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tP = bc.gap,
				j = bA.qm.tQ(.085),
				i = Math.min(4 * j, h.i - 2 * tP),
				f1 = rL.length;
			for (bA.qm.tR(tB, tP, h.j - tP - j, i, j), bA.qm.qw(tB), bA.qm.qw(tC, 6), aB = 0; aB < f1 - 1; aB++) bA.qm.qw(rL[aB].button, 6);
			for (aB = 0; aB < f1; aB++) tE[aB][0].resize(), tE[aB][1].resize();
			for (rL[0].f8 = 0, rL[0].button.style.left = bA.qm.qv(rL[0].f8), rL[0].button.style.width = bA.qm.tS(1.7 * j), aB = 1; aB < f1; aB++) rL[aB].f8 = rL[aB - 1].f8 + rL[aB - 1].button.offsetWidth, rL[aB].button.style.left = bA.qm.qv(rL[aB]
				.f8);
			if (!tF) {
				if (!ab.tT()) return;
				(tF = ab.get(14)).style.width = "24%", tF.style.position = "absolute", tC.appendChild(tF)
			}
			tF.style.left = bA.qm.qv(0), tF.style.top = "7%", tD.tU && (tD.scrollLeft = tD.tU)
		}, tB.style.position = "absolute", tC.style.width = "25%", tC.style.height = "100%", tC.style.backgroundColor = bB.nq, tD.style.position = "absolute", tD.style.width = "75%", tD.style.height = "100%", tD.style.backgroundColor = bB.nq, tD
		.style.top = tD.style.right = bA.qm.qv(0), bA.qm.tH(tD), so.style.height = so.style.maxHeight = "100%", rL.push(new w("", function() {
			tI(0)
		}, bB.oe)), rL.push(new w("", function() {
			tI(1)
		}, bB.og)), rL.push(new w("", function() {
			tI(2)
		}, bB.oX)), rL.push(new w("", function() {
			tI(3)
		}, bB.oI)), rL.push(new w("", function() {
			tI(4)
		}, bB.p3)), rL.push(new w("", function() {
			tI(5)
		}, bB.oz)), rL.push(new w("", function() {
			tI(6)
		}, bB.p3)), tE = new Array(rL.length);
	for (var aB = 0; aB < rL.length; aB++) rL[aB].button.style.position = "absolute", tE[aB] = [new tJ(e4[aB], rL[aB].button, .25, .45), new tJ("", rL[aB].button, .53, .84, 1)], rL[aB].button.style.height = rL[aB].button.style.maxHeight = "100%", rL[
		aB].button.top = bA.qm.qv(0), so.appendChild(rL[aB].button);
	tD.appendChild(so), tB.appendChild(tC), tB.appendChild(tD)
}

function tV(tW, tX, tY, tZ, rT, rU) {
	var ta = document.createElement("div"),
		tb = document.createElement("div"),
		tc = document.createElement("div"),
		td = document.createElement("div"),
		te = document.createElement("div"),
		tf = document.createElement("div"),
		tg = document.createElement("div"),
		th = document.createElement("div"),
		ti = document.createElement("span"),
		tj = document.createElement("div");
	this.tk = new rS(rT, rU), this.tl = new tm(rU), this.tn = [tW, tX, tY, tZ], this.tr = function(ts) {
		ts = (ts / 10).toFixed(1) + "%";
		th.style.width = ts, ti.innerHTML = ts
	}, this.tt = function() {
		this.tl.s3(tf), this.tk.show(tf)
	}, this.tu = function() {
		this.tk.s3(tf), this.tl.show(tf)
	}, this.tv = function() {
		return tb
	}, this.show = function() {
		document.body.appendChild(ta)
	}, this.s3 = function() {
		t.removeChild(document.body, ta)
	}, this.resize = function(tw) {
		var tx = 1 - .4 * a0.a1.i9() * (h.i > 1.6 * h.j),
			ty = bA.qm.s5(.05 * tx),
			tz = h.j > h.i,
			u0 = bA.qm.s5(.07 * tx + .03 * tz),
			u1 = bA.qm.s5(.04 + .02 * tz),
			tz = bA.qm.s5(.02 * tx + .01 * tz),
			u3 = bA.qm.s5(.025);
		ta.style.font = bA.qm.sb(0, u3), tx < 1 && (u3 = bA.qm.sb(0, tx * u3), tc.style.font = u3, te.style.font = u3, tj.style.font = u3, tg.style.font = u3, td.style.font = u3), tb.style.height = bA.qm.qv(ty), tb.style.font = bA.qm.sb(0, .72 *
				ty), bA.qm.qw(tb, 2), tc.style.top = bA.qm.qv(ty), tc.style.height = bA.qm.qv(u0), bA.qm.qw(tc, 2), td.style.font = bA.qm.sb(0, tx * bA.qm.s5(.02)), td.style.top = bA.qm.qv(ty + u0), td.style.height = bA.qm.qv(u1), bA.qm.qw(td,
			2), te.style.top = bA.qm.qv(ty + u0 + u1), te.style.height = bA.qm.qv(u0), bA.qm.qw(te, 2), tf.style.top = bA.qm.qv(ty + u0 + u1 + u0), tf.style.height = bA.qm.qv(h.j / h.k - ty - 3 * u0 - u1 - tz), tg.style.top = bA.qm.qv(h.j / h.k -
				u0 - tz), tg.style.height = bA.qm.qv(tz), bA.qm.qw(tg, 8), ti.style.font = bA.qm.sb(0, .8 * tz), tj.style.top = bA.qm.qv(h.j / h.k - u0), tj.style.height = bA.qm.qv(u0), bA.qm.qw(tj, 8), tW.resize(tc), tX.resize(tc), tY.resize(
			tc), tZ.resize(tc), tw ? this.tk.resize(tf) : this.tl.resize()
	};
	rT = this;
	ta.style.position = "absolute", ta.style.top = "0", ta.style.left = "0", ta.style.width = "100%", ta.style.height = "100%", ta.style.backgroundColor = bB.nt, bJ.rE() || (ta.style.backdropFilter = "blur(4px)", ta.style.webkitBackdropFilter =
		"blur(4px)"), tb.style.position = "absolute", tb.style.top = "0", tb.style.left = "0", tb.style.width = "100%", tb.style.display = "flex", tb.style.alignItems = "center";
	for (var g = [tc, td, te, tj], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qm.tH(g[aB]);
	tf.style.position = "absolute", tf.style.left = "0", tf.style.width = "100%", tf.style.font = "inherit", tg.style.position = "absolute", tg.style.left = "0", tg.style.width = "100%", th.style.position = "absolute", th.style.top = "0", th.style
		.left = "0", th.style.height = "100%", th.style.width = "50%", th.style.backgroundColor = bB.oG, ti.innerHTML = "", ti.style.position = "absolute", ti.style.top = "50%", ti.style.left = "50%", ti.style.transform = "translate(-50%, -50%)", tb
		.appendChild(function() {
			var tq = document.createElement("h1");
			return tq.textContent = L(23), tq.style.margin = "0 auto 0.15em auto", tq.style.fontFamily = "Arial Black, Trebuchet MS", tq.style.fontSize = "inherit", tq.style.fontWeight = "inherit", tq
		}()), tc.appendChild(tW.qR), td.appendChild(tX.qR), te.appendChild(tY.qR), tg.appendChild(th), tg.appendChild(ti), tj.appendChild(tZ.qR), ta.appendChild(tb), ta.appendChild(tc), ta.appendChild(td), ta.appendChild(te), ta.appendChild(tf), ta
		.appendChild(tg), ta.appendChild(tj), rT.tl.show(tf)
}

function tm(rU) {
	var ta = document.createElement("div"),
		tf = document.createElement("div");
	this.mh = function() {
			tf.textContent = "", bn.u5.s3(1);
			for (var rv = document.createDocumentFragment(), u6 = bn.y.rq[0], u7 = bn.u7.u8[u6], u9 = bn.u7.u9[u6], aB = 0; aB < u7.length; aB++) ! function(rv, qe, uB, u6) {
				var rk = document.createElement("span");
				rk.textContent = (uB ? "🟢 " : "⚪ ") + bn.lA.uC(qe, u6), rk.style.color = bn.lA.uD(qe.uE), rk.style.cursor = "pointer", rk.style.margin = "0.2em 0.2em 0.2em 0.2em", rk.style.width = rk.style.maxWidth = 2 === u6 ? "10em" : "9em",
					rk.style.height = rk.style.maxHeight = "1.4em", rk.style.whiteSpace = "nowrap", rk.style.overflow = "hidden", rk.style.textOverflow = "ellipsis", rk.style.font = "inherit", rk.style.display = "inline-block", bn.lA.uF(qe) && (
						rk.style.textDecoration = "underline"), qe.uG && (rk.style.textDecorationLine = "underline", rk.style.textDecorationStyle = "dotted");
				rk.onclick = function(e) {
					rU(e, qe)
				}, bJ.rE() || (rk.onmouseover = function(e) {
					bn.u5.uH(e, qe, 1)
				}), rv.appendChild(rk)
			}(rv, u7[aB], aB < u9, u6);
			tf.appendChild(rv)
		}, this.show = function(qg) {
			qg.appendChild(ta)
		}, this.s3 = function(qg) {
			t.removeChild(qg, ta)
		}, this.resize = function() {
			tf.style.fontSize = bA.qm.qv(bA.qm.s5(.02, .3))
		}, ta.style.top = "0", ta.style.left = "0", ta.style.width = ta.style.height = "100%", ta.style.overflowX = "hidden", ta.style.overflowY = "auto", ta.style.font = "inherit", tf.style.font = "inherit", tf.style.margin = "0.4em", ta
		.appendChild(tf)
}

function uI(uJ) {
	var ta = document.createElement("div"),
		rX = document.createElement("div"),
		uK = [];

	function r9() {
		bJ.rE() || (this.style.backgroundColor = bA.color.rH(bB.nq, 50))
	}

	function rA() {
		this.style.backgroundColor = bB.nq
	}
	this.sF = function(uM, uN) {
			uK[2].textContent = uM + 1 + " / " + uN
		}, this.show = function(qe) {
			rX.appendChild(bn.s2.transform(bn.lA.rx(qe, bn.lA.ry(qe)))), document.body.appendChild(ta)
		}, this.resize = function() {
			var j = bA.qm.s5(.03, .5);
			ta.style.width = 10 * j + "px", ta.style.font = bA.qm.sb(1, .75 * j), bA.qm.qw(ta, 4), rX.style.top = j + "px", rX.style.font = bA.qm.sb(0, .55 * j), bA.qm.qw(rX, 2), ta.style.height = j + rX.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qm.qw(uK[aB], 6), uK[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uK[aB].style.height = j + "px", bA.qm.qw(uK[aB], 2);
			uK[2].style.width = 4 * j + "px", uK[1].style.left = 2 * j + "px", uK[2].style.left = 4 * j + "px", uK[3].style.left = 8 * j + "px"
		}, this.uO = function() {
			for (var aB = 0; aB < 4; aB++) uK[aB].onclick = null, uK[aB].onmouseover = null, uK[aB].onmouseout = null;
			t.removeChild(document.body, ta), ta = rX = uK = null
		}, ta.style.position = "absolute", ta.style.color = bB.nu, ta.style.zIndex = "3", ta.style.right = "0", ta.style.top = "0", rX.style.position = "absolute", rX.style.height = "auto", rX.style.color = bB.nu, rX.style.backgroundColor = bB.nq, rX
		.style.left = "0", rX.style.width = "100%", rX.style.overflowWrap = "break-word", ta.appendChild(rX);
	for (var aB = 0; aB < 4; aB++) uK[aB] = document.createElement("div"), uK[aB].style.position = "absolute", uK[aB].style.backgroundColor = bB.nq, uK[aB].style.color = bB.nu, uK[aB].style.top = "0", uK[aB].style.display = "flex", uK[aB].style
		.justifyContent = "center", uK[aB].style.alignItems = "center", uK[aB].style.userSelect = "none", uK[aB].style.outline = "none", uK[aB].style.font = "inherit", 2 !== (uK[aB].uL = aB) && (uK[aB].onclick = uJ, uK[aB].onmouseover = r9, uK[aB]
			.onmouseout = rA), ta.appendChild(uK[aB]);
	uK[0].textContent = "◀", uK[1].textContent = "▶", uK[3].textContent = "✖"
}

function uP(uJ) {
	var sT = document.createElement("div");

	function r9() {
		bJ.rE() || (sT.style.backgroundColor = bA.color.rH(bB.nq, 50))
	}

	function rA() {
		sT.style.backgroundColor = bB.nq
	}
	this.sF = function(uN) {
			sT.textContent = uN
		}, this.show = function() {
			document.body.appendChild(sT)
		}, this.resize = function() {
			var j = bA.qm.s5(.03, .5);
			sT.style.width = 2 * j + "px", sT.style.height = j + "px", sT.style.font = bA.qm.sb(1, .75 * j), bA.qm.qw(sT, 4), bA.qm.qw(sT, 2)
		}, this.uO = function() {
			sT.onclick = null, sT.onmouseover = null, sT.onmouseout = null, t.removeChild(document.body, sT), sT = null
		}, sT.style.position = "absolute", rA(), sT.style.color = bB.nu, sT.style.zIndex = "3", sT.style.right = "0", sT.style.top = "0", sT.style.display = "flex", sT.style.justifyContent = "center", sT.style.alignItems = "center", sT.style
		.userSelect = "none", sT.style.outline = "none", sT.onclick = uJ, sT.onmouseover = r9, sT.onmouseout = rA
}

function uQ(sL) {
	var ta = document.createElement("div"),
		uR = document.createElement("div"),
		sU = (this.f8 = 0, this.fA = 0);

	function uT() {
		bn.uU.s3()
	}
	this.rL = sL, this.show = function(f8, fA, uW) {
		if (sU) return [0, 0];
		sU = 1, this.f8 = f8, this.fA = fA,
			function(self, uW) {
				var i = bA.qm.s5(.16, .7),
					j = sL.length * i / 3,
					uY = h.i / h.k,
					uZ = h.j / h.k,
					nW = Math.min(1, Math.min(uY / i, uZ / j));
				i *= nW, j *= nW, uW && (self.f8 += bA.qm.s5(.03, .5)), self.f8 = bL.i8(self.f8, 0, uY - i), self.fA = bL.i8(self.fA, 0, uZ - j), uR.style.left = self.f8 + "px", uR.style.top = self.fA + "px", uR.style.width = i + "px", uR.style
					.height = j + "px", uR.style.font = bA.qm.sb(0, .3 * j / sL.length), bA.qm.qw(uR, 5);
				for (var aB = 1; aB < sL.length; aB++) bA.qm.qw(sL[aB].button, 8)
			}(this, uW), document.body.appendChild(ta)
	}, this.s3 = function() {
		sU && (sU = 0, ta.removeEventListener("click", uT), t.removeChild(document.body, ta))
	};
	for (var aB = 0; aB < sL.length; aB++) new rj("" + (1 + aB), sL[aB].button, 0, 1);
	ta.style.position = "fixed", ta.style.top = "0", ta.style.left = "0", ta.style.width = "100%", ta.style.height = "100%", ta.style.zIndex = "5", uR.style.position = "absolute",
		function() {
			for (var uV = (100 / sL.length).toFixed(2) + "%", aB = 0; aB < sL.length; aB++) sL[aB].button.style.width = "100%", sL[aB].button.style.height = sL[aB].button.style.maxHeight = uV, sL[aB].button.style.padding = "0.0em 0.9em", uR
				.appendChild(sL[aB].button)
		}(), ta.appendChild(uR), ta.addEventListener("click", uT)
}

function ea() {
	var ua, ub, uc;

	function uj(aB) {
		return bA.color.nm(ub[aB][0], ub[aB][1], ub[aB][2])
	}

	function up(fK, fL) {
		return bA.color.uz(ub[fK], ub[fL]), uj(fL)
	}

	function uh() {
		ua && (ua.remove(), ua = null)
	}
	this.show = function(eb, colors, id) {
		0 <= (uc = id) && b0.y.eV(0) && b0.eW.ud(0, id), eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = eb.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			ub = colors, (ua = document.createElement("div")).style.position = "fixed", ua.style.top = "0", ua.style.left = "0", ua.style.width = "100%", ua.style.height = "100%", ua.style.backgroundColor = bA.color.no(ub[0][0], ub[0][1], ub[0][
				2], .6), ua.style.zIndex = "6", ua.onclick = function(e) {
				e.target === ua && uh()
			},
			function(eb) {
				var hw, ui = document.createElement("div");
				ui.style.position = "absolute", ui.style.display = "flex", ui.style.flexDirection = "column", ui.style.top = "50%", ui.style.left = "50%", ui.style.backgroundColor = uj(2), hw = a0.a1.i9() ? bA.qm.uk(h.min) : bA.qm.s5(.4);
				hw = Math.max(hw, 200), ui.style.width = bA.qm.qv(hw), ui.style.height = bA.qm.qv(hw), ui.style.transform = "translate(-50%, -50%)",
					function(ui, hw) {
						var uo = document.createElement("div");
						uo.style.flex = "0 0 10%", uo.style.overflow = "hidden", uo.style.backgroundColor = uj(1), uo.style.color = up(1, 7), uo.style.font = bA.qm.sb(1, .05 * hw), uo.style.display = "flex", uo.style.alignItems = "center", uo
							.style.justifyContent = "center", uo.innerHTML = L(24), ui.appendChild(uo)
					}(ui, hw),
					function(ui, eb, hw) {
						var uq = document.createElement("div");
						uq.style.flex = "0 0 70%", uq.style.overflowY = "auto", uq.style.overflowX = "hidden", uq.style.whiteSpace = "pre-wrap", uq.style.wordWrap = "break-word", uq.style.padding = bA.qm.qv(.02 * hw), uq.style.backgroundColor =
							uj(2), uq.style.color = up(2, 8), uq.style.font = bA.qm.sb(0, .07 * hw), uq.innerHTML = eb, uq.innerHTML = "<style>a { color: inherit; }</style>" + uq.innerHTML, ui.appendChild(uq)
					}(ui, eb, hw),
					function(ui, hw) {
						var ur = document.createElement("div"),
							us = (ur.style.display = "flex", ur.style.flexDirection = "row", ur.style.justifyContent = "space-between", ur.style.alignItems = "stretch", ur.style.backgroundColor = uj(3), ur.style.flex = "1", ur.style.padding = bA
								.qm.qv(.01 * hw), ur.style.gap = bA.qm.qv(.01 * hw), document.createElement("div")),
							ut = (us.style.flex = "0 0 60%", us.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								uh()
							}, uj(4), !1)),
							ut = (ut.button.style.width = "100%", ut.button.style.height = "100%", ut.button.style.color = up(4, 9), ut.button.style.font = bA.qm.sb(1, .05 * hw), us.appendChild(ut.button), document.createElement("div")),
							uv = (ut.style.flex = "0 0 15%", ut.style.height = "100%", ut.style.backgroundColor = uj(5), document.createElement("div")),
							uw = (uv.style.flex = "1", uv.style.height = "100%", new w(L(26), function(e) {
								return bA.qm.ux(e), uc < 0 || b0.y.eV(0) && (b0.eW.ud(1, uc), uc = -1), !0
							}, uj(6), !1));
						uw.button.style.width = "100%", uw.button.style.height = "100%", uw.button.style.color = up(6, 10), uw.button.style.font = bA.qm.sb(1, .035 * hw), uv.appendChild(uw.button), ur.appendChild(us), ur.appendChild(ut), ur
							.appendChild(uv), ui.appendChild(ur)
					}(ui, hw), ua.appendChild(ui)
			}(eb), document.body.appendChild(ua)
	}
}

function v0(sf, v1) {
	this.qc = [];
	var v2 = this.qc;

	function click() {
		for (var aB = 0; aB < v2.length; aB++) v2[aB].textContent = v2[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e9 = parseInt(this.name);
		void 0 !== sf.e9 && bj.sE.sF(sf.e9, e9), v1 && v1(e9)
	}
	for (var v3, f1 = sf.v4.length, aB = 0; aB < f1; aB++)(v3 = document.createElement("p")).textContent = "⚪ " + sf.v4[aB], v3.style.margin = "0", v3.name = "" + aB, v3.style.cursor = "pointer", v3.style.fontSize = "1em", v3.addEventListener(
		"click", click), v2.push(v3);
	v2[sf.value].textContent = v2[sf.value].textContent.replace("⚪", "🟢")
}

function v5(title, v6, v7) {
	var tB = document.createElement("div"),
		v8 = document.createElement("div"),
		so = document.createElement("div"),
		v9 = document.createElement("div"),
		vA = document.createElement("div");
	this.vB = so, this.vC = v6, this.show = function() {
			!1 !== v7 ? document.body.appendChild(tB) : (document.body.appendChild(v8), document.body.appendChild(v9))
		}, this.s3 = function() {
			!1 !== v7 ? t.removeChild(document.body, tB) : (t.removeChild(document.body, v8), t.removeChild(document.body, v9))
		}, this.vG = function() {
			var s6 = bA.qm.s5(.1),
				s4 = bA.qm.s5(.08 + .04 * (h.vH < 1), .3);
			return {
				s6: s6,
				s4: s4,
				vI: h.j / h.k - s6 - s4
			}
		}, this.resize = function(sP) {
			var f1 = v6.length,
				vJ = this.vG(),
				s6 = vJ.s6,
				s4 = vJ.s4;
			for (v8.style.height = bA.qm.qv(s6), bA.qm.qw(v8, 2), v9.style.top = bA.qm.qv(h.j / h.k - s4), v9.style.height = bA.qm.qv(s4), bA.qm.qw(v9, 8), so.style.top = bA.qm.qv(s6), so.style.height = so.style.maxHeight = bA.qm.qv(vJ.vI), v8.style
				.font = bA.qm.sb(0, bA.qm.s5(.02, .15)), v9.style.font = bA.qm.sb(0, bA.qm.s5(.02, .7)), so.style.font = bA.qm.sb(0, bA.qm.s5(.02, .35)), aB = 1; aB < f1; aB++) bA.qm.qw(v6[aB].button, 4);
			for (var sQ = 0, aB = 0; aB < f1; aB++) sQ += v6[aB].button.offsetWidth;
			if (sP && sQ < v9.offsetWidth)
				for (aB = 0; aB < f1; aB++) v6[aB].button.style.width = (100 * v6[aB].button.offsetWidth / sQ).toFixed(2) + "%";
			else
				for (aB = 0; aB < f1; aB++) v6[aB].button.style.width = "auto";
			v9.tU && (v9.scrollLeft = v9.tU), sP || this.resize(!0)
		}, this.vK = function() {
			var vJ = this.vG(),
				eZ = h.k;
			vL.fillStyle = bB.nq, vL.fillRect(0, eZ * vJ.s6, h.i, eZ * vJ.vI)
		}, tB.style.position = "absolute", tB.style.top = "0", tB.style.left = "0", tB.style.width = "100%", tB.style.height = "100%", v8.style.position = "absolute", v8.style.top = "0", v8.style.left = "0", v8.style.width = "100%", v8.style
		.display = "flex", v8.style.backgroundColor = bB.nq, v9.style.position = "absolute", v9.style.left = "0", v9.style.width = "100%", bA.qm.tH(v9), vA.style.height = vA.style.maxHeight = "100%", so.style.position = "absolute", so.style.width =
		"100%", so.style.backgroundColor = bB.nq,
		function() {
			for (var aB = 0; aB < v6.length; aB++) v6[aB].button.style.height = "100%", v6[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < v6.length; aB++) vA.appendChild(v6[aB].button);
	v8.appendChild(function() {
		var vF = document.createElement("h1");
		return vF.textContent = title, vF.style.margin = "auto", vF.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vF.style.fontFamily = "Arial Black, Trebuchet MS", vF
	}()), v9.appendChild(vA), !1 !== v7 && (tB.appendChild(so), tB.appendChild(v8), tB.appendChild(v9))
}

function rj(vM, vN, vO, vP) {
	var self;
	this.rk = document.createElement("span"), (self = this).rk.textContent = vM, self.rk.style.color = bB.nu, self.rk.style.position = "absolute", self.rk.style.font = "inherit", vP ? self.rk.style.bottom = "0.06em" : self.rk.style.top = "0.12em",
		vO ? self.rk.style.left = "0.2em" : self.rk.style.right = "0.2em", self.rk.style.fontSize = "0.6em", self.rk.style.pointerEvents = "none", self.rk.style.whiteSpace = "pre", vN.style.position = "relative", vN.style.overflow = "hidden", vN
		.appendChild(self.rk)
}

function tJ(vM, vN, vQ, vR, vS) {
	var self;
	this.rk = document.createElement("span"), this.resize = function() {
			this.rk.style.fontSize = ((vR - vQ) * vN.offsetHeight).toFixed(1) + "px"
		}, (self = this).rk.textContent = vM, self.rk.style.color = bB.nu, self.rk.style.font = "inherit", self.rk.style.margin = "0.1em 0.6em", self.rk.style.pointerEvents = "none", vS && (self.rk.style.fontWeight = "bold"), self.rk.style
		.whiteSpace = "nowrap", self.rk.style.display = "block", vN.appendChild(self.rk)
}

function vT(vU, vV, vW, vX) {
	var vY = document.createElement("textarea"),
		vZ = (this.e = vY, !0);

	function ve() {
		vY.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vV && bA.qm.qw(vY, 5)
		}, this.va = function(eb) {
			vY.value = eb
		}, this.vb = function() {
			return vY.value
		}, this.vc = function() {
			vY.select()
		}, this.clear = function() {
			vY.value = ""
		}, this.vd = function() {
			vZ && navigator.clipboard ? (vY.select(), navigator.clipboard.writeText(vY.value).catch(function() {
				vZ = !1, ve()
			})) : ve()
		}, vY.setAttribute("id", "textArea" + t.y.si++), vY.setAttribute("autocomplete", "off"), vU && vY.setAttribute("placeholder", vU), vY.style.top = "0", vY.style.left = "0", vY.style.width = "100%", vY.style.height = "100%", vY.style
		.userSelect = "none", vY.style.outline = "none", vY.style.resize = "none", vY.style.border = "none", vY.style.color = bB.nu, vY.style.backgroundColor = bB.nn, vX ? (vY.style.fontSize = "1em", vY.rows = 6, vY.style.padding = "0.25em") : (vY
			.style.padding = "0.45em", vY.style.fontSize = "1.2em"), vW && vY.addEventListener("input", function(e) {
			vW(e)
		}), vY.addEventListener("focus", function() {
			h.sj++
		}), vY.addEventListener("blur", function() {
			h.sj--
		})
}

function dI() {
	this.r3 = new vf, this.eN = new vg, this.sE = new vh, this.y = new vi, this.vj = new vk, this.dd = function() {
		this.eN.dd(), (new vl).dd(), this.vj.dd()
	}
}

function vg() {
	function vm(aB, type, vs, dw) {
		bj.eN.data.push({
			e9: aB,
			type: type || 0,
			value: vs || 0,
			vs: vs || 0,
			dw: dw || 0
		})
	}

	function vn(aB, type, vs, dw) {
		bj.eN.data.push({
			e9: aB,
			type: type,
			value: vs || "",
			vs: vs || "",
			dw: dw || 0
		})
	}

	function vo(nc) {
		for (var aB = bj.eN.data.length; aB < nc; aB++) bj.eN.data.push(null)
	}
	this.data = [], this.dd = function() {
		vm(0, 1, 0, 5), vm(1, 1, 1), vm(2, 0), vn(3, 2), vm(4, 1), vn(5, 2, "Trebuchet MS", 1), vm(6, 0), vm(7, 0, 0), vm(8, 0), vm(9, 1, 1), vm(10, 1), vm(11, 1, 1), vn(12, 2, navigator.language), vm(13), vm(14), vo(100), vn(100, 2), vn(101, 2),
			vn(102, 2), vn(103, 2), vn(104, 2), vn(105, 2), vn(106, 2), vm(107), vm(108), vm(109), vn(110, 2), vm(111), vm(112), vm(113), vn(114, 2), vm(115), vn(116, 2), vm(117, 1), vn(118, 2, "", 2), vm(119, 1, 0, 1), vn(120, 2), vm(121, 1, ~~(
				262144 * Math.random())), vn(122, 2, "Player " + Math.floor(1e3 * Math.random())), vm(123), vn(124), vm(125, 1), vn(126, 2), vm(127, 0, 1), vm(128), vm(129), vm(130), vm(131), vm(132), vn(133, 2), vm(134, 0, 5), vn(135, 2), vn(
				136, 2), vm(137), vm(138), vm(139), vm(140), vm(141), vm(142), vm(143), vm(144), vn(145, 2), vm(146), vm(147), vn(148, 2), vm(149), vm(150, 0, 1), vn(151, 2), vm(152, 0, 5), vm(153, 1), vm(154, 1), vn(155, 2), vn(156, 2), vm(157),
			vm(158), vm(159), vm(160), vn(161, 2), vm(162, 0, 1024), vn(163, 2, "0,0,0"), vn(164, 2, "100,100,100"), vn(165, 2, "30,30,30"), vn(166, 2, "70,70,70"), vn(167, 2, "100,100,100"), vn(168, 2, "85,85,85"), vn(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) vn(170 + aB, 2, "255,255,255");
		vn(174, 2), vn(175, 2), vm(176, 0, 200), vo(180), vm(180, 0), vm(181, 0)
	}, this.sF = function(e9, value) {
		this.data[e9].value = value
	}, this.vp = function(e9, value) {
		this.sF(e9, value);
		var value = String(value),
			f1 = value.length;
		5e4 < f1 ? console.log("storage value too large: index " + e9 + " size " + f1) : (bj.r3.save(e9, value), bj.r3.save(e9, String(this.data[e9].dw), !0))
	}, this.vq = function(e9) {
		return Number(this.data[e9].value)
	}, this.vr = function(e9) {
		return String(this.data[e9].value)
	}
}

function vk() {
	var vt = [];

	function vx(sz) {
		vt.unshift(sz), bj.sE.sF(161, vt.join(";"))
	}

	function vw(sz) {
		for (var vz = vt, f1 = vz.length, aB = 0; aB < f1; aB++)
			if (vz[aB] === sz) return vz.splice(aB, 1), bj.sE.sF(161, vz.join(";")), 1
	}
	this.dd = function() {
		var qT = bj.eN.data[161].value;
		qT.length && (vt = qT.split(";"))
	}, this.get = function() {
		return vt
	}, this.vu = function() {
		return {
			v4: vt,
			value: 0
		}
	}, this.uG = function(sz) {
		return bA.qu.has(vt, sz)
	}, this.vv = function(sz) {
		return vw(sz) ? 0 : (vx(sz), 1)
	}, this.mh = function(sz) {
		vw(sz) && vx(sz)
	}, this.vy = function(e9) {
		e9 < vt.length && (vt.splice(e9, 1), bj.sE.sF(161, vt.join(";")))
	}
}

function vf() {
	this.w0 = function(e9, dw) {
		return Number(this.w1(e9, dw))
	}, this.w1 = function(e9, dw) {
		var fS = null;
		return 0 === a0.id ? a0.w2 && (fS = a0.w2.getItem((dw ? "v" : "d") + e9)) : 1 === a0.id ? fS = a0.w3.loadString((dw ? 1e3 : 2e3) + e9) : 2 === a0.id && (fS = a0.w4[(dw ? "v" : "d") + e9]), fS && 0 !== fS.length ? fS : null
	}, this.w5 = function(f1, w6) {
		var g = [],
			w7 = w6 ? "e" : "l";
		if (0 === a0.id) {
			if (a0.w2)
				for (aB = 0; aB < f1; aB++) g.push(a0.w2.getItem(w7 + aB))
		} else if (1 === a0.id)
			for (var w8 = w6 ? 5e3 : 3e3, aB = 0; aB < f1; aB++) g.push(a0.w3.loadString(w8 + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f1; aB++) g.push(a0.w4[w7 + aB]);
		return g
	}, this.save = function(e9, value, dw) {
		var w9 = (dw ? "v" : "d") + e9;
		if (0 === a0.id) {
			if (a0.w2 && bj.eN.data[140].value) try {
				a0.w2.setItem(w9, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.w3.saveString((dw ? 1e3 : 2e3) + e9, value) : 2 === a0.id && (a0.w4[w9] = value, a0.wA.postMessage(w9 + " " + value))
	}, this.wB = function(g, w6) {
		var f1 = g.length,
			w7 = w6 ? "e" : "l";
		if (0 === a0.id) {
			if (a0.w2 && bj.eN.data[140].value) try {
				for (aB = 0; aB < f1; aB++) a0.w2.setItem(w7 + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var w8 = w6 ? 5e3 : 3e3, aB = 0; aB < f1; aB++) a0.w3.saveString(w8 + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f1; aB++) a0.w4[w7 + aB] = g[aB], a0.wA.postMessage(w7 + aB + " " + g[aB])
	}
}

function vl() {
	this.dd = function() {
		! function() {
			var data = bj.eN.data;
			0 === data[2].dw && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vs = 1);
			0 === data[100].dw && (data[100].value = data[100].vs = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fS, data = bj.eN.data,
			f1 = data.length;
		for (aB = 0; aB < f1; aB++) data[aB] && data[aB].dw === bj.r3.w0(aB, !0) && (fS = bj.r3.w1(aB), data[aB].value = null === fS ? data[aB].vs : 2 === data[aB].type ? fS : Number(fS))
	}
}

function vi() {
	function wH(g) {
		if (0 === g.length) bj.sE.sF(116, "");
		else {
			for (var wK = g[0], aB = 1; aB < g.length; aB++) wK += ";" + g[aB];
			bj.sE.sF(116, wK)
		}
	}
	this.wE = function() {
		bj.eN.data[110].value.length && (bj.eN.data[106].value = bj.eN.data[110], bj.sE.sF(110, ""), this.wF())
	}, this.wF = function() {
		var g = bj.eN.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eN.data[106].value), g.unshift(bj.eN.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wG = [], aB = 0; aB < g.length; aB += 2) wG.push(g[aB]);
		wH(g), bj.eN.data[117].value = 0, bj.eN.data[117].v4 = wG
	}, this.wI = function(e9) {
		bj.eN.data[117].v4.splice(e9, 1), bj.eN.data[117].value = Math.min(e9, bj.eN.data[117].v4.length - 1);
		var g = bj.eN.data[116].value.split(";");
		g.splice(2 * e9, 2), wH(g)
	}, this.wJ = function(e9) {
		var g = bj.eN.data[116].value.split(";");
		return {
			sz: g[2 * e9],
			password: g[2 * e9 + 1]
		}
	}, this.wL = function() {
		var fS = bL.i8(bj.eN.data[121].value, -1, 262143);
		return fS = -1 === fS ? ~~(262144 * Math.random()) : fS
	}
}

function vh() {
	this.sF = function(e9, value) {
		2 !== bj.eN.data[e9].type && (value = Math.floor(value)), bj.eN.data[e9].value !== value && (bj.eN.vp(e9, value), 0 === e9 ? (t.x(), b7.dd(), t.u(2)) : 1 === e9 ? h.dp(1) : 2 === e9 ? h.dp(0) : 5 === e9 && (bA.qm.wM(), h.dp(0)))
	}, this.wN = function() {
		for (var data = bj.eN.data, aB = 0; aB < 100; aB++) data[aB] && bj.eN.vp(aB, data[aB].vs);
		bA.qm.wM(), h.dp(1)
	}, this.wO = function() {
		for (var data = bj.eN.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eN.sF(aB, data[aB].vs)
	}, this.wP = function() {
		for (var fL = bj.eN, aB = 128; aB < 135; aB++) fL.vp(aB, fL.data[aB].vs)
	}, this.wQ = function(data) {
		bj.sE.sF(109, data.t0), bj.sE.sF(107, data.wR), bj.sE.sF(108, data.wS), bj.sE.sF(112, data.wT), bj.sE.sF(111, data.wU), bj.sE.sF(113, data.wV), bj.sE.sF(135, data.wW), bj.sE.sF(136, data.wX), bj.sE.sF(137, data.wY), bj.sE.sF(138, data
			.wZ), bj.sE.sF(139, data.wa), bj.sE.sF(141, data.wb), bj.sE.sF(142, data.wc), bj.sE.sF(143, data.wd), bj.sE.sF(144, data.we)
	}
}

function c4() {
	this.t4 = new wf, this.wg = new wh, this.wi = new wj, this.dd = function() {
		this.t4.dd()
	}
}

function wh() {
	this.wk = function(size) {
		for (var wl = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wl.pu(16)));
		return g.join("")
	}, this.wm = function(qT) {
		return 20 < (qT = qT.trim()).length ? qT.substring(0, 20) : qT
	}
}

function wf() {
	var wn = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (wn[50] = 37, aB = 0; aB < 10; aB++) wn[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) wn[aB + 20] = aB + 11, wn[aB + 52] = aB + 38
	}, this.wo = function(qT) {
		return qT.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.wp = function(qT, size) {
		if ((qT = this.wo(qT)).length > size) return qT.substring(0, size);
		for (; qT.length < size;) qT = "-" + qT;
		return qT
	}, this.wq = function(qT) {
		for (var wr = wn, f1 = qT.length, g = new Uint8Array(f1), aB = 0; aB < f1; aB++) g[aB] = wr[qT.charCodeAt(aB) - 45];
		return g
	}, this.ws = function(wt) {
		bD.a7(6 * wt.length), this.wu(wt), bH.dd(bD.aC)
	}, this.wu = function(wt) {
		for (var f1 = wt.length, i = bD, aB = 0; aB < f1; aB++) i.a8(6, wt[aB])
	}, this.wv = function(qT) {
		this.wu(this.wq(qT))
	}, this.ww = function(qT, size) {
		this.wu(this.wq(this.wp(qT, size)))
	}, this.wx = function(qT, size) {
		for (var g = this.wq(this.wp(qT, size)), fS = 0, nW = 1, aB = g.length - 1; 0 <= aB; aB--) fS += nW * g[aB], nW *= 64;
		return fS
	}
}

function wy() {
	var i, j, wz;

	function xP(hS, f4, xN, x4, xI) {
		f4 = xO(hS, f4 + 1 + 2 * x4 & 3);
		! function(hS, ky) {
			return 1 < Math.abs(hS % i - ky % i) || 1 < Math.abs(xS(hS) - xS(ky))
		}(hS, f4) && 0 === xI[f4 << 2] && (xI[f4 << 2] = xN)
	}

	function xS(gY) {
		return Math.floor((gY + .5) / i) % j
	}

	function xO(gY, f4) {
		return gY + wz[f4]
	}
	this.x0 = function(qT) {
		var aB, x1, f1, x2, wl = bH;
		for (bG.t4.ws(bG.t4.wq(qT)), bS.x5.x6[bS.eh].i = bS.fC = i = wl.pu(12), bS.x5.x6[bS.eh].j = bS.fD = j = wl.pu(12), wz = [-i, -1, i, 1], bS.xF = document.createElement("canvas"), bS.xF.width = bS.fC, bS.xF.height = bS.fD, bS.xB = bS.xF
			.getContext("2d", {
				alpha: !1
			}), bS.xC = bS.xG = null, bS.xC = bS.xB.getImageData(0, 0, bS.fC, bS.fD), bS.xG = bS.xC.data, bA.qu.xH(bS.xG), f1 = wl.pu(12), x1 = wl.pu(5), x2 = x8(i * j - 1), aB = 0; aB < f1; aB++) ! function(lG, gY, x3, x4) {
			var aB, f4, wl = bH,
				xI = bS.xG,
				xJ = gY,
				xK = gY,
				xL = 0,
				xM = 1 + x3,
				xN = 2 - x3;
			for (xI[gY << 2] = xM, aB = 0; aB < lG; aB++) f4 = wl.pu(2), gY = xO(gY, f4), xI[gY << 2] === xM ? xL % 2 == 1 && xP(xK, xL + 2 * x4 + 3, xN, x4, xI) : xI[gY << 2] = xM, xP(gY, f4, xN, x4, xI), xP(xK, f4, xN, x4, xI), xK = gY,
				xL = f4;
			xO(gY, 0) === xJ ? (xP(gY, 0, xN, x4, xI), xP(xJ, 0, xN, x4, xI)) : xO(gY, 1) === xJ && (xP(gY, 0, xN, x4, xI), xP(xJ, 2, xN, x4, xI));
			0 === lG && (xP(xJ, 0, xN, x4, xI), xP(xJ, 2, xN, x4, xI))
		}(wl.pu(x1), wl.pu(x2), 1 === wl.pu(1), 1 === wl.pu(1));
		var f8, fA, hs, xT, xU, xV, xI = bS.xG,
			xW = !0,
			xX = bS.x5.x6[bS.eh].xX,
			xY = bS.x5.x6[bS.eh].xY;
		for (fA = 0; fA < j; fA++)
			for (xT = !0, xU = xW, f8 = xV = 0; f8 < i; f8++) hs = 4 * fA * i + 4 * f8, xV <= f8 && 0 < xI[hs] && (xU = 2 === xI[hs], xT) && (xT = !1, xU !== xW) ? (xW = xU, xV = f8 + 1, f8 = -1) : (xU ? (xI[hs] = xY[0], xI[1 + hs] = xY[1], xI[
				2 + hs] = xY[2]) : (xI[hs] = xX[0], xI[1 + hs] = xX[1], xI[2 + hs] = xX[2]), xI[3 + hs] = 255);
		bS.xB.putImageData(bS.xC, 0, 0), bS.xD = !0, bS.xE.dd(), bf.dl = !0
	}
}

function wj() {
	this.x0 = function(xZ) {
		for (var wl = bH, size = wl.pu(xZ), xa = 7 + 9 * wl.pu(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wl.pu(xa)));
		return g.join("")
	}
}

function c9() {
	var sW, sX, xb, xc, xd, xe, xf, xg, xh, xi;

	function xk() {
		var xn = aD.xn;
		for (xh = xn; xh < aD.ey; xh++) xj();
		for (xh = aD.hO ? aD.kL : 0; xh < xn; xh++) {
			if (!xo()) {
				for (var fL = aD.xs = xh; fL < xn; fL++) xh = fL, xj();
				return
			}
			xr(xe + sW * xd + bL.du(xd, 2), xf + sX * xd + bL.du(xd, 2))
		}
	}

	function yK(player) {
		for (var it = ag.it, iv = ag.iv, iu = ag.iu, iw = ag.iw, fA = iv[player]; fA <= iw[player]; fA++)
			for (var f8 = it[player]; f8 <= iu[player]; f8++) {
				var ef = ac.yL(f8, fA);
				ac.ga(ef) && (ac.jW(ef) ? ac.gV(ef, player) : ac.yM(ef, player))
			}
	}

	function yJ(g, tL, tM) {
		var dt = g[tL];
		g[tL] = g[tM], g[tM] = dt
	}

	function xo() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sW = bL.du(xb * ay.random(), ay.value(100)), sX = bL.du(xc * ay.random(), ay.value(100)), yR()) return 1;
			return
		}() || function() {
			var iK, iN, fK, xq, fL, xp;
			for (iK = bL.du(xb * ay.random(), ay.value(100)), iN = bL.du(xc * ay.random(), ay.value(100)), fK = 40; 1 <= fK; fK--)
				for (xq = xc - fK; 0 <= xq; xq -= 40)
					for (sX = (xq + iN) % xc, fL = 40; 1 <= fL; fL--)
						for (xp = xb - fL; 0 <= xp; xp -= 40)
							if (sW = (xp + iK) % xb, yR()) return 1;
			return
		}()
	}

	function yR() {
		for (var gY, yT, gap = bL.du(xd - xg, 2), yU = xf + sX * xd + gap, yV = xe + sW * xd + gap, yS = yU + xg - 1; yU <= yS; yS--)
			for (yT = yV + xg - 1; yV <= yT; yT--)
				if (gY = ac.yL(yT, yS), !ac.ew(gY) || ac.jW(gY)) return;
		return 1
	}

	function xr(xp, xq) {
		xj(), yW(xp - 2, xq - 2)
	}

	function xj() {
		ag.mu[xh] = 0, ag.go[xh] = ag.yH[xh] = 0, ag.gS[xh] = [], ag.gg[xh] = [], ag.gh[xh] = [], ag.fQ[xh] = [], ag.it[xh] = ag.iv[xh] = ag.iu[xh] = ag.iw[xh] = 0
	}

	function yW(xp, xq) {
		var gY, aB, yX, yY;
		for (ag.mu[xh] = 1, ag.it[xh] = xp + 10, ag.iv[xh] = xq + 10, ag.iw[xh] = ag.iu[xh] = 0, yX = xp; yX < xp + 4; yX++)
			for (yY = xq; yY < xq + 4; yY++)(xp < yX && yX < xp + 3 || xq < yY && yY < xq + 3) && (gY = ac.yL(yX, yY), ac.ew(gY)) && (ag.it[xh] = Math.min(yX, ag.it[xh]), ag.iu[xh] = Math.max(yX, ag.iu[xh]), ag.iv[xh] = Math.min(yY, ag.iv[xh]), ag
				.iw[xh] = Math.max(yY, ag.iw[xh]), xi[ag.go[xh]] = gY, ag.go[xh]++, ac.yM(gY, xh));
		for (ag.yH[xh] = ag.go[xh], aB = ag.go[xh] - 1; 0 <= aB; aB--) ac.yZ(xi[aB], xh) ? (ac.gV(xi[aB], xh), ag.gg[xh].push(xi[aB])) : ac.ya(xi[aB]) ? (ac.gV(xi[aB], xh), ag.gh[xh].push(xi[aB])) : ac.yb(xi[aB]) && (ac.gV(xi[aB], xh), ag.fQ[xh]
			.push(xi[aB]))
	}
	this.dd = function() {
		if (xi = new Array(12), xg = 6, xd = 10, xb = bL.du(bS.fC, xd), xc = bL.du(bS.fD, xd), xe = bL.du(bS.fC - xd * xb, 2), xf = bL.du(bS.fD - xd * xc, 2), aD.hO)
			for (var aB = 0; aB < aD.kL; aB++) xh = aB, xj(), ag.mu[xh] = 1;
		(0 === aD.data.spawningType ? xk : 1 === aD.data.spawningType ? (xk(), function() {
			var xt = aD.xu;
			aD.xv || xt++;
			if (!(xt < 3)) {
				for (var data = aD.data, jb = (aD.hO ? aD.kL : 0) + data.teamPlayerCount[0], nc = aD.xs, xw = new Uint32Array(xt), xx = new Uint32Array(xt), xy = new Uint16Array(xt), xz = new Uint16Array(xt), ez = bg.ez, it = ag.it, iv =
						ag.iv, iu = ag.iu, iw = ag.iw, ff = bO.ff, fg = bO.fg, aB = jb; aB < nc; aB++) ff[aB] = it[aB] + iu[aB] >> 1, fg[aB] = iv[aB] + iw[aB] >> 1;
				for (aB = jb; aB < nc; aB++) {
					var id = ez[aB];
					xw[id] += ff[aB], xx[id] += fg[aB]
				}
				var ki = bg.ki;
				for (aB = 1; aB < xt; aB++) {
					var gT = Math.max(data.teamPlayerCount[ki[aB]], 1);
					xy[aB] = bL.du(xw[aB], gT), xz[aB] = bL.du(xx[aB], gT)
				}
				var y0 = bg.y0,
					y1 = bg.y1,
					y2 = bg.y2,
					fe = bO.fe;
				for (aB = 0; aB < 512; aB++) fe[aB] = aB;
				for (var e8 = 0; e8 < 2 + (4 <= xt); e8++)
					for (aB = jb; aB < nc; aB++) {
						for (var hS = aB, y3 = fe[hS], y4 = 1, fH = bL.y5(ff[y3] - xy[1], fg[y3] - xz[1]), fK = 2; fK < xt; fK++) {
							var y6 = bL.y5(ff[y3] - xy[fK], fg[y3] - xz[fK]);
							y6 < fH && (fH = y6, y4 = fK)
						}
						var y7 = ez[hS];
						if (y4 !== y7) {
							if (2 === e8 && 4 <= xt) {
								var y8 = Math.max((y4 + 1) % xt, 1),
									y9 = bL.y5(ff[y3] - xy[y8], fg[y3] - xz[y8]);
								for (fK = 1; fK < xt; fK++) y6 = bL.y5(ff[y3] - xy[fK], fg[y3] - xz[fK]), fH < y6 && y6 < y9 && (y9 = y6, y8 = fK);
								y8 !== y7 && bL.y5(xy[y7] - xy[y8], xz[y7] - xz[y8]) < bL.y5(xy[y7] - xy[y4], xz[y7] - xz[y4]) && (y4 = y8)
							}
							var yA = ki[y4],
								yB = y1[yA] + (aD.hO ? 0 : y2[yA]),
								ky = y0[yB],
								yC = fe[ky],
								yD = y1[yA + 1];
							fH = bL.y5(ff[yC] - xy[y7], fg[yC] - xz[y7]);
							for (var eZ = yB + 1; eZ < yD; eZ++) {
								var yE = y0[eZ],
									yF = fe[yE];
								(y6 = bL.y5(ff[yF] - xy[y7], fg[yF] - xz[y7])) < fH && (fH = y6, ky = yE)
							}
							ky < jb || nc <= ky || (yC = fe[ky], xw[y7] += ff[yC] - ff[y3], xx[y7] += fg[yC] - fg[y3], xw[y4] += ff[y3] - ff[yC], xx[y4] += fg[y3] - fg[yC], gT = data.teamPlayerCount[ki[y7]], xy[y7] = bL.du(xw[y7], gT),
								xz[y7] = bL.du(xx[y7], gT), gT = data.teamPlayerCount[yA], xy[y4] = bL.du(xw[y4], gT), xz[y4] = bL.du(xx[y4], gT), fe[hS] = yC, fe[ky] = y3)
						}
					}! function() {
						for (var fe = bO.fe, it = ag.it, iv = ag.iv, iu = ag.iu, iw = ag.iw, go = ag.go, yH = ag.yH, gg = ag.gg, gh = ag.gh, fQ = ag.fQ, aB = 0; aB < 512; aB++) {
							var yI = fe[aB];
							if (yI !== aB) {
								yJ(it, aB, yI), yJ(iv, aB, yI), yJ(iu, aB, yI), yJ(iw, aB, yI), yJ(go, aB, yI), yJ(yH, aB, yI), yJ(gg, aB, yI), yJ(gh, aB, yI), yJ(fQ, aB, yI), yK(aB), yK(yI), fe[aB] = aB;
								for (var j = yI, gZ = fe[j]; gZ !== aB;) gZ = fe[j = gZ];
								fe[j] = yI
							}
						}
					}()
			}
		}) : function() {
			var xn = aD.xn;
			for (xh = xn; xh < aD.ey; xh++) xj();
			for (xh = aD.hO ? aD.kL : 0; xh < xn; xh++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							xp = spawningData[2 * xh] + 1,
							spawningData = spawningData[2 * xh + 1] + 1;
						if (3 < xp && xp < bS.fC - 5 && 3 < spawningData && spawningData < bS.fD - 5 && ac.ew(ac.yL(xp, spawningData)) && function(xp, xq) {
								var gY, yT, yS;
								for (yS = xq; xq - 6 < yS; yS--)
									for (yT = xp; xp - 6 < yT; yT--)
										if (gY = ac.yL(yT, yS), ac.jW(gY)) return;
								return 1
							}(xp + 3, spawningData + 3)) return xr(xp + 1, spawningData + 1), 1;
						return
					}()) {
					if (!xo()) {
						for (var fL = aD.xs = xh; fL < xn; fL++) xh = fL, xj();
						return
					}
					var xp = xe + sW * xd + bL.du(xd, 2),
						xq = xf + sX * xd + bL.du(xd, 2);
					xr(xp, xq)
				}
		})(), bd.mq[7] = ag.go[aD.el]
	}, this.yc = function(jU, yd, ye) {
		var aB, xp, xq, gY, sW, sX;
		for (xh = jU, aB = 0; aB < 20; aB++)
			for (xp = yd + aB; yd - aB <= xp; xp--)
				for (xq = ye + aB; ye - aB <= xq; xq--)
					if ((xp === yd + aB || xp === yd - aB || xq === ye + aB || xq === ye - aB) && 3 < xp && xp < bS.fC - 5 && 3 < xq && xq < bS.fD - 5 && ac.ew(ac.yL(xp, xq)) && function(xp, xq) {
							var gY, yT, yS;
							for (yS = xq; xq - 6 < yS; yS--)
								for (yT = xp; xp - 6 < yT; yT--)
									if (gY = ac.yL(yT, yS), ac.jW(gY) && !ac.yk(xh, gY)) return;
							return 1
						}(xp + 3, xq + 3)) {
						if (0 < ag.go[xh]) {
							for (sX = sW = gY = void 0, sW = ag.iu[xh]; sW >= ag.it[xh]; sW--)
								for (sX = ag.iw[xh]; sX >= ag.iv[xh]; sX--) gY = 4 * (sX * bS.fC + sW), ac.yh(xh, gY) && (ac.yi(gY), ag.go[xh]--);
							xj()
						}
						return yW(xp - 1, xq - 1), !0
					} return !1
	}, this.yj = function(jU) {
		xh = jU, xo() ? xr(xe + sW * xd + bL.du(xd, 2), xf + sX * xd + bL.du(xd, 2)) : xj()
	}
}

function yl() {
	at.ym(), vL.setTransform(iB, 0, 0, iB, 0, 0), vL.imageSmoothingEnabled = iB < 3, vL.drawImage(bS.xF, aS.yn(), aS.yo()), bP.yp.vK(), vL.drawImage(yq, aS.yn(), aS.yo()), at.vK(), bN.vK(), af.vK(), (aD.nN ? (bh.vK(), bC) : (aN.vK(), aV.vK(), aR
	.vK(), bC.vK(), aw.vK(), aW.vK(), aS.vK(), aQ.vK(), bh.vK(), aU.vK(), aP.vK(), aM.vK(), aL.vK(), aX.vK(), be.vK(), av)).vK(), t.vK()
}

function yr(ys, i, j) {
	ys.clearRect(0, 0, i, j), ys.fillStyle = bB.nr, ys.fillRect(0, 0, i, j)
}

function yt(ys, i, j, yu) {
	ys.fillStyle = bB.nu, ys.fillRect(0, 0, i, yu), ys.fillRect(0, 0, yu, j), ys.fillRect(i - yu, 0, yu, j), ys.fillRect(0, j - yu, i, yu)
}

function yv(ys, f8, fA, hw, yu, gY, yw) {
	ys.fillStyle = bB.nu;
	var gY = Math.floor(hw * gY),
		t9 = (gY += (gY - yu) % 2, Math.floor((gY - yu) / 2)),
		hw = Math.floor((hw - gY) / 2);
	ys.fillRect(f8 + hw, fA + hw + t9, gY, yu), yw && ys.fillRect(f8 + hw + t9, fA + hw, yu, gY)
}

function yy() {
	this.dd = function() {
		8 === aD.kd && aN.yz()
	}, this.z0 = function(z1) {
		var elo = aD.data.elo,
			ja = (elo[z1] - elo[1 - z1]) / 10,
			ja = 8 / (1 + Math.pow(2, ja / 32)),
			ja = Math.floor(10 * ja + .5),
			z3 = elo[z1] + ja,
			z4 = this.z5(z3),
			elo = this.z5(elo[1 - z1] - ja),
			ja = (0 === z1 ? aN.z7(z4, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.z7(elo, z4, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.z9) * z3 / 500).toFixed(2));
		z1 === aD.el ? aN.zA(640, L(27, [ja]), 40, 0, bB.nu, bB.nr, -1, !1) : aN.zA(640, L(28, [ag.zB[z1], ja]), 40, 0, bB.nu, bB.nr, -1, !1)
	}, this.z5 = function(elo) {
		return 16e3 === (elo = bL.i8(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.s2 = new zC, this.xI = new zD
}

function zD() {
	this.hm = !1;
	this.zH = [], this.zI = 100;
	var nK, nL, gap, hw, zE, zG, zJ = 0,
		zK = new Array(9),
		zL = [],
		zM = [],
		zN = 0,
		zO = 0,
		zP = 0,
		zQ = 0;

	function zc() {
		zK.sort(function(fK, fL) {
			return fL.kQ - fK.kQ
		});
		for (var qT = "" + zK[0].pV, aB = 1; aB < 9; aB++) qT += "," + zK[aB].pV;
		for (aB = 0; aB < 9; aB++) qT += "," + zK[aB].kQ;
		bj.eN.vp(120, qT)
	}
	this.dd = function() {
		for (var zR = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zR.length; aB++) {
			var color = 6 === zR[aB] ? bB.oK : bB.ns;
			this.zH.push(bA.canvas.zS(ab.get(3), zR[aB], color))
		}
		for (aB = 0; aB < aj.s2.zT; aB++) zM.push(aj.s2.zU - aj.s2.zT + aB);
		for (aB = 0; aB < aj.s2.zV; aB++) zM.push(aj.s2.zW + aB);
		var zX = aj.s2.zY(bK.zX);
		for (aB = 0; aB < zX.length; aB++) zM.push(zX[aB]);
		! function() {
			var aB, g = bj.eN.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zK[aB] = {
					pV: 1015 + aB,
					kQ: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fS = parseInt(g[aB]),
						eZ = (fS = 0 <= fS && fS < aj.s2.zU ? fS : 0, parseInt(g[aB + 9]));
					eZ = 0 <= eZ && eZ < 1e3 ? eZ : 0, zK[aB] = {
						pV: fS,
						kQ: eZ
					}
				}
		}()
	}, this.show = function(la, lb, zd) {
		var aB;
		if (zN = la, zO = lb, zJ = zd || 0, this.hm = !0, zL = [], 0 === zJ)
			for (aB = 0; aB < 9; aB++) zL.push(zK[aB].pV);
		else {
			var fL = 49 * zJ,
				zd = fL - 49;
			for (zd >= zM.length && (zJ = 1, zd = 0, fL = 49), aB = zd = (fL = Math.min(fL, zM.length)) - 49; aB < fL; aB++) zL.push(zM[aB])
		}
		zL.push(1024);
		zd = zL.length, hw = Math.floor((a0.a1.i9() ? .075 : .0468) * h.iA), gap = Math.floor(hw / 3), (zP = 10 * (zE = hw + gap)) > h.i && (zP = h.i, gap = (zE = zP / 10) - (hw = 3 * zE / 4)), zG = bL.du(zd, 10) + !!(zd % 10), (zQ = zG * zE) > h
			.j && (zQ = h.j, gap = (zE = zQ / zG) - (hw = 3 * zE / 4)), zd = .5 * gap;
		nK = Math.min(Math.max(la - .5 * zP + zd, zd), h.i - zP + zd), nL = Math.min(Math.max(lb - .5 * zQ + zd, zd), h.j - zQ + zd)
	}, this.hD = function(la, lb, player) {
		if (!this.hm) return !1;
		if (this.zf(la, lb)) {
			la = bL.i8(bL.du(la - nK + .5 * gap, zE), 0, 9);
			if ((la += 10 * bL.i8(bL.du(lb - nL + .5 * gap, zE), 0, 9)) >= zL.length) return aL.s3(), !0;
			lb = zL[la];
			if (1024 === lb) return this.show(zN, zO, zJ + 1), !0;
			! function(pV) {
				for (var aB = 0; aB < 9; aB++) zK[aB].kQ = Math.floor(.99 * zK[aB].kQ);
				for (aB = 0; aB < 9; aB++)
					if (pV === zK[aB].pV) return zK[aB].kQ = Math.min(zK[aB].kQ + 30, 999), zc();
				zK.splice(5, 0, {
					pV: pV,
					kQ: Math.max(zK[4].kQ, 30)
				}), zK.pop(), zc()
			}(lb), player === aD.el ? b8.hQ.pU(lb) : b8.gM.pj(lb, player)
		}
		return aL.s3(), !0
	}, this.zf = function(la, lb) {
		return !(la < nK - .5 * gap || lb < nL - .5 * gap || nK + zP - .5 * gap <= la || nL + zQ - .5 * gap <= lb)
	}, this.vK = function() {
		vL.fillStyle = bB.nr, vL.fillRect(nK - .5 * gap, nL - .5 * gap, zP, zQ);
		for (var hs = .5 * bc.zg, f1 = (vL.lineWidth = bc.zg, vL.strokeStyle = vL.fillStyle = bB.nu, vL.strokeRect(nK - .5 * gap + hs, nL - .5 * gap + hs, zP - 2 * hs, zQ - 2 * hs), vL.imageSmoothingEnabled = !0, zL.length), aB = 0; aB <
			f1; aB++) this.zh(zL[aB], vL, nK + aB % 10 * zE, nL + bL.du(aB, 10) * zE, hw);
		vL.imageSmoothingEnabled = !1
	}, this.zh = function(pV, i2, f8, fA, hw) {
		var ef;
		pV >= 1024 - aj.s2.zT ? (ef = hw / this.zI, i2.setTransform(ef, 0, 0, ef, f8, fA), i2.drawImage(this.zH[pV - 1024 + aj.s2.zT], 0, 0), i2.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qm.textAlign(i2, 1), bA.qm.textBaseline(i2, 1), i2.font = bA.qm
			.sb(0, .89 * hw), i2.fillText(aj.s2.zi(pV), f8 + .5 * hw, fA + (.35 - bA.qm.zj + .56) * hw))
	}
}

function zC() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zT = 13, this.zV = this.emojis.length, this.zW = 676, this.zU = 1024, this.zk = this.emojis.indexOf("💀"), this.zl = this.zk + 1, this.zm = this.emojis.indexOf("🥇"), this.zn = this.emojis.indexOf("😊"), this.zi = function(fS) {
		return fS < this.zW ? String.fromCharCode(55356, 56806 + bL.du(fS, 26), 55356, 56806 + fS % 26) : this.emojis[Math.min(fS - this.zW, this.zV - 1)]
	}, this.zY = function(qT) {
		for (var f1 = qT.length - 2, g = [], aB = 0; aB < f1; aB++) {
			var zo = qT.charCodeAt(aB) - 56806,
				zp = qT.charCodeAt(aB + 2) - 56806;
			0 <= zo && zo < 26 && 0 <= zp && zp < 26 && (g.push(26 * zo + zp), aB += 3)
		}
		return g
	}, this.zq = function(fS) {
		return fS < this.zW
	}, this.zr = function(fS) {
		return fS >= 1024 - this.zT
	}, this.zs = function(fS) {
		return fS >= this.zW && fS < this.zW + this.zl
	}
}

function c3() {
	this.t4 = new zt, this.wg = new zu, this.wi = new zv, this.dd = function() {
		this.t4.dd()
	}
}

function zu() {
	this.wv = function(qT) {
		for (var f1 = qT.length, i = bD, aB = 0; aB < f1; aB++) i.a8(16, qT.charCodeAt(aB))
	}
}

function zt() {
	var zw = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zw[0] = 45, zw[37] = 95, aB = 0; aB < 10; aB++) zw[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zw[aB + 11] = 65 + aB, zw[aB + 38] = 97 + aB
	}, this.t6 = function(zx) {
		for (var wl = bH, wt = new Uint8Array(zx), aB = 0; aB < zx; aB++) wt[aB] = wl.pu(6);
		return wt
	}, this.t5 = function(wt) {
		for (var f1 = wt.length, zy = zw, g = [], aB = 0; aB < f1; aB++) g.push(String.fromCharCode(zy[wt[aB]]));
		return g.join("")
	}, this.zz = function(value, a00) {
		for (var zy = zw, g = [], aB = 0; aB < a00; aB++) g.push(String.fromCharCode(zy[value >> 6 * (a00 - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var a01, a02, a03;
	a01 = [32, 65, 191, 913, 931], a02 = [64, 127, 688, 930, 1155], a03 = new Array(a01.length + 1);
	for (var aB = 0; aB < a03.length; aB++) {
		a03[aB] = 0;
		for (var fK = aB - 1; 0 <= fK; fK--) a03[aB] += a02[fK] - a01[fK]
	}

	function a09(eZ) {
		for (var aB = a01.length - 1; 0 <= aB; aB--)
			if (eZ >= a01[aB] && eZ < a02[aB]) return aB;
		return -1
	}
	this.wm = function(qT) {
		return 0 !== (qT = qT.trim()).indexOf("Bot ") && 0 !== qT.indexOf("[Bot] ") && function(qT, a06, a07) {
			var f1 = (qT = qT.trim()).length;
			if (f1 < a06 || a07 < f1) return !1;
			for (var eZ, a08 = 0, aB = 0; aB < f1; aB++)
				if (eZ = qT.charCodeAt(aB), a08 += 65 <= eZ && eZ <= 90 || 1040 <= eZ && eZ <= 1071 ? 1 : 0, -1 === a09(eZ)) return !1;
			if (3 < a08 && a08 > Math.floor(f1 / 2)) return !1;
			return !0
		}(qT, 3, 20)
	}, this.a0A = function(qT) {
		for (var f1 = (qT = qT.trim()).length, g = [], aB = 0; aB < f1; aB++) {
			var eZ, gY = a09(eZ = qT.charCodeAt(aB));
			g.push(a03[gY] + eZ - a01[gY])
		}
		return g
	}, this.x0 = function(g) {
		for (var eZ, fL, qT = "", f1 = g.length, aB = 0; aB < f1; aB++)
			for (fL = 1; fL < a03.length; fL++)
				if (g[aB] < a03[fL]) {
					eZ = a01[fL - 1] + g[aB] - a03[fL - 1], qT += String.fromCharCode(eZ);
					break
				} return qT
	}, this.a0B = function(qT) {
		for (var g = this.a0A(qT), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0C = function(qT) {
		for (var g = new Array(Math.floor(qT.length / 3)), aB = 0; aB < qT.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qT.substring(aB, aB + 3));
		return this.x0(g)
	}, this.a0D = function(qT) {
		for (var fS, g = [qT.length], aB = 0; aB < qT.length; aB++) g[aB] = qT.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qT.length; aB++) aB === qT.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fS = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fS + (fS < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0E = function(qT) {
		for (var eZ, result = "", aB = 0; aB < qT.length; aB++) 48 <= (eZ = qT.charCodeAt(aB)) && eZ < 58 ? result += String.fromCharCode(eZ) : 65 <= eZ && eZ < 75 ? result += "0" + (eZ - 65).toString() : 75 <= eZ && eZ < 91 ? result += (eZ - 65)
			.toString() : 97 <= eZ && eZ < 123 && (result += (eZ - 71).toString());
		return result
	}, this.a0F = function(qT) {
		for (var f1 = qT.length, g = [], aB = 0; aB < f1; aB++)(eZ = qT.charCodeAt(aB)) < 58 ? g.push(qT[aB]) : (eZ -= eZ < 91 ? 65 : 71, g.push(String(bL.du(eZ, 10))), g.push(String(eZ - 10 * bL.du(eZ, 10))));
		var f1 = g.length - 2,
			eZ = 0,
			wt = [];
		for (aB = 0; aB < f1; aB += 3) wt[eZ++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return wt
	}, this.a0G = function() {
		for (var e8, a0H = "", aB = 0; aB < 6; aB++) e8 = 48 + ay.random() % 36, e8 += 58 <= e8 ? 39 : 0, a0H += String.fromCharCode(e8);
		return a0H
	}
}

function zv() {
	this.a0A = function(qT, xZ, a0I) {
		for (var a0J = [], f1 = qT.length, max = 0, aB = 0; aB < f1; aB++) {
			var fS = qT.charCodeAt(aB);
			a0J.push(fS), max = Math.max(max, fS)
		}
		var xa = max < 128 ? 7 : 16;
		for (a0I.a8(xZ, f1), a0I.a8(1, +(16 == xa)), aB = 0; aB < f1; aB++) a0I.a8(xa, a0J[aB])
	}
}

function dA() {
	this.a0K = new a0L, this.result = new a0M, this.a0N = new a0O, this.a0P = new a0Q, this.a0R = new a0S, this.a0T = new a0U, this.dd = function() {
		this.result.dd()
	}
}

function a0O() {
	this.a0V = function() {
		for (var f1 = al.kr, a0W = al.kw, a0X = [], aB = 0; aB < f1; aB++) {
			var gY = a0W[aB];
			bA.gM.a0Y(gY) && a0X.push(gY)
		}
		return a0X
	}, this.a0Z = function() {
		if (0 === bg.ki[aD.a0a]) return this.a0b();
		bh.kM(aD.a0a);
		for (var a0X = [], f1 = bO.fV[0], fe = bO.fe, aB = 0; aB < f1; aB++) {
			var gY = fe[aB];
			bA.gM.a0Y(gY) && a0X.push(gY)
		}
		return a0X
	}, this.a0b = function() {
		var gY = lw[0];
		return bA.gM.a0Y(gY) ? [gY] : []
	}, this.a0c = function(a0X) {
		for (var f1 = a0X.length, dt = 0, go = ag.go, aB = 0; aB < f1; aB++) dt += go[a0X[aB]];
		return dt
	}
}

function a0L() {
	function a0e() {
		if (2 === aD.a0i) return 1;
		aw.a0j(), aD.a0i = 2, aD.a0k = aD.a0l
	}

	function a0g() {
		bR.a0R.a0m(), aX.show(1 === aD.a0n, !1, 2 === aD.a0n), bR.result.a0m(), bR.a0T.eU(), bR.a0P.eU(), aN.a0o(!0), aN.a0p(247), aN.a0p(956), aN.a0p(957), aV.mg(!0), aW.mg(!0), aw.mg(), bC.a0q(), aD.h9 && bf.a0r.a0s(), bf.dl = !0, bb.a0t(), a0.a1
			.setState(0)
	}
	this.a0d = function() {
		a0e() || (aD.a0f = 2, a0g())
	}, this.a0h = function() {
		a0e() || (aD.a0f = 1, a0g())
	}
}

function a0Q() {
	this.eU = function() {
		var a11;
		2 === aD.a0f ? (aN.a0u(0, 59), aH.nT(2700)) : aD.kd < 7 ? (a11 = bg.ki[aD.a0a], a11 = bg.a13[a11], aQ.a14(L(29, [a11]), 2, 1, 12), aN.zA(0, L(30, [a11]), 40, 0, bB.nu, bB.nr, -1, !1), aH.nT(2700)) : 8 === aD.kd ? (aD.a0n ? aN.a0u(aD.a0z,
			2) : aN.a0u(1 - aD.el, 3), aD.a10.z0(aD.a0z), aH.nF(aD.a0z, 2700, !1, 0)) : 9 === aD.kd ? (aN.a15(), aH.nT(2700)) : (aN.a16(aD.a0z), aH.nF(aD.a0z, 2700, !1, 0))
	}
}

function a0U() {
	function a1G() {
		var tP;
		return 8 === aD.kd ? 0 : (tP = Math.floor(ag.a1H[aD.el] / 50), (tP = Math.min(tP, 400)) / 100)
	}

	function a18() {
		var tP = a1G();
		0 !== tP && aN.zA(440, L(31, [tP.toFixed(2)]), 40, 0, bB.oC, bB.nr, -1, !1)
	}
	this.eU = function() {
		var a19;
		0 === bR.result.a17 || 0 === bR.result.a0X.length || 8 === aD.kd ? bA.gM.hC(aD.el) && a18() : (function(a19) {
			7 !== aD.kd && 10 !== aD.kd || 0 !== aD.a0n && a19 && aN.zA(600, L(35, [a19.toFixed(2)]), 40, 0, bB.nu, bB.nr, -1, !1)
		}(a19 = function() {
			aN.zA(520, L(32), 40, 0, bB.nu, bB.nr, -1, !1);
			for (var a0X = bR.result.a0X, f1 = a0X.length, go = ag.go, g = [], aB = 0; aB < f1; aB++) {
				var gY = a0X[aB];
				g.push({
					gY: gY,
					dt: go[gY]
				})
			}
			g.sort((fK, fL) => fL.dt - fK.dt);
			var a13 = ag.zB,
				dt = bR.result.a1I,
				tP = bR.result.a17,
				qT = "",
				a19 = 0;
			for (aB = 0; aB < f1; aB++) {
				var hk = g[aB].dt * tP / (100 * dt),
					a1K = a13[g[aB].gY] + ": " + hk.toFixed(2) + "   ";
				g[aB].gY === aD.el && (a19 = hk), 2 < aB && 4 !== f1 ? 3 === aB && (qT += "(" + L(33, [f1 - 3]) + ")") : qT += a1K
			}
			aN.zA(560, bA.rl.a1L(qT), 40, 0, bB.oC, bB.nr, -1, !1), a19 ? aN.zA(580, L(34, [a19.toFixed(2) + " + " + a1G().toFixed(2)]), 40, 0, bB.oC, bB.nr, -1, !1) : bA.gM.hC(aD.el) && a18();
			return a19
		}()), 2 === aD.a0f || 7 <= aD.kd || function(a19) {
			var a0X = bR.result.a0X,
				f1 = a0X.length,
				a1M = ag.a1M,
				go = ag.go,
				a1N = [];
			loop: for (var aB = 0; aB < f1; aB++) {
				var gY = a0X[aB],
					a1O = bA.rl.a1P(a1M[gY]);
				if (null !== a1O) {
					for (var a1Q = go[gY], fL = a1N.length - 1; 0 <= fL; fL--)
						if (a1O === a1N[fL].name) {
							a1N[fL].dt += a1Q, a1N[fL].g.push({
								gY: gY,
								dt: a1Q
							});
							continue loop
						} a1N.push({
						name: a1O,
						dt: a1Q,
						g: [{
							gY: gY,
							dt: a1Q
						}]
					})
				}
			}
			if (0 !== a1N.length) {
				a1N.sort((fK, fL) => fL.dt - fK.dt);
				var g = a1N[0].g,
					a1R = (g.sort((fK, fL) => fL.dt - fK.dt), "[" + a1N[0].name + "]"),
					a1S = 512 * bR.result.a17 / 26214400,
					lG = (aN.zA(0, L(36, [a1R, a1S.toFixed(4)]), 40, 0, bB.nu, bB.nr, -1, !1), g.length),
					wr = a1N[0].dt,
					a1T = 1e4 * a1S;
				for (aB = 0; aB < lG; aB++)
					if (g[aB].gY === aD.el) {
						aN.zA(600, L(37, [(a1T * g[aB].dt / (10 * wr)).toFixed(2)]), 40, 0, bB.nu, bB.nr, -1, !1), aN.zA(640, L(38, [(.2 * a19).toFixed(2), a1R]), 40, 0, bB.nu, bB.nr, -1, !1);
						break
					} aD.h9 || aN.zA(720, L(39) + bK.a1U, 736, 0, bB.nu, bB.oI, -1, !1)
			}
		}(a19))
	}, this.a1D = function() {
		var a1E, xJ;
		aD.kf || (a1E = ag, xJ = aD.el, 0 === a1E.a1F[xJ]) || a1E.jP[xJ] < 1 || 2 * a1E.qB[xJ] > 3 * (a1E.jO[xJ] + a1E.jP[xJ]) || a18()
	}
}

function a0M() {
	this.dd = function() {
		this.a1V = 0, this.a0X = [], this.a1I = 0, this.a17 = 0
	}, this.a0m = function() {
		var sO;
		aD.kf || (sO = this, 2 === aD.a0f ? sO.a0X = bR.a0N.a0V() : aD.hu ? sO.a0X = bR.a0N.a0Z() : sO.a0X = bR.a0N.a0b(), sO.a1V = bi.a1X.a1Y(), sO.a1I = Math.max(1, bR.a0N.a0c(sO.a0X)), b8.gM.ps(), 8 === aD.kd ? bR.result.a17 = 0 : sO.a17 =
			100 * bR.result.a1V * (1 + aD.z9))
	}
}

function a0S() {
	this.a0m = function() {
		if (2 === aD.a0f) aD.a0n = 2;
		else {
			if (8 === aD.kd) bA.gM.ji(0) || 0 === ag.mu[0] ? aD.a0z = 1 : bA.gM.ji(1) || 0 === ag.mu[1] ? aD.a0z = 0 : aD.a0z = +(ag.go[1] > ag.go[0]);
			else {
				if (aD.hu) {
					var kt = bh.a1b();
					if (aD.a0a = kt, bg.ki[kt]) return void(aD.a0n = +(bg.ez[aD.el] === kt))
				}
				aD.a0z = lw[0]
			}
			aD.a0n = +(aD.a0z === aD.el)
		}
	}
}

function dF() {
	this.id = 0, this.dw = 0, this.w2 = null, this.w3 = null, this.w4 = null, this.wA = null, this.a1 = new a1c, this.dd = function() {
		var self, dw;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dw = Android.getVersion()) < 12 || (self.dw = dw, self.id = 1, self.w3 = Android),
			function(self) {
				var dw;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.w4 = mwIOSdataX, self.wA = window.webkit.messageHandlers.iosCommandA, dw = self
					.w4.version, self.dw = dw ? Number(dw) : 0)
			}(this),
			function(self) {
				var w2;
				try {
					if (!(w2 = window.localStorage)) return;
					w2.setItem("tls7", "1"), w2.removeItem("tls7")
				} catch (error) {
					return
				}
				self.w2 = w2
			}(this)
	}
}

function a1c() {
	this.a1g = function() {
		bj.sE.wN(), bj.sE.wO(), b0.y.close(0, 3255), 0 === a0.id ? a0.w2 && a0.w2.clear() : 1 === a0.id ? a0.w3.saveString(199, "") : 2 === a0.id && a0.wA.postMessage("clear")
	}, this.a1h = function() {
		2 === a0.id ? a0.wA.postMessage("showConsentForm") : 1 === a0.id && a0.w3.setState(7)
	}, this.a1i = function() {
		this.setState(14)
	}, this.i9 = function() {
		return 1 === bj.eN.vq(2)
	}, this.a1j = function() {
		bj.eN.vp(102, "")
	}, this.setState = function(a1k) {
		1 === a0.id && 5 <= a0.dw && a0.w3.setState(a1k)
	}, this.a2 = function() {
		var a1l;
		1 === a0.id && 7 <= a0.dw ? a0.w3.setState(5) : ((a1l = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1l.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dw < 17 || a0.w3.saveString(23, document.documentElement.outerHTML)
	}, this.eL = function() {
		0 !== a0.id && (1 === a0.id ? a0.w3.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dw ? a0.wA.postMessage("prepare ad 2904813909") : a0.wA.postMessage("loadAds 2904813909")))
	}, this.eR = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && 0 !== a0.dw && (a0.wA.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dw < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1m + "' target='_blank'>" + bK
			.a1m + "</a>", !0, [new w("⬅️ " + L(40), function() {
				t.u(0)
			}, bB.oZ)]))
	}
}

function dU() {
	function a1p(e) {
		lf(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(40), function() {
				t.a1s()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.oH)]))
	}

	function a20(e) {
		lf(e), t.u(4, 5, new v(L(41), a1w(e), !0))
	}

	function a1w(e) {
		var qT = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qT : 4527 === e ? "Player already in lobby" + qT : 4530 === e ? "Lobby Timeout" + qT : 4528 === e ? "Lobby Kick: Another login detected." + qT : 4540 === e ?
			"You have been kicked." + qT : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qT : 4555 === e ? "Invalid Account Error. Please Try Again." + qT : 4557 <= e && e <= 4560 ?
			"Please try again later!" + qT : "Unknown error" + qT
	}

	function lf(e) {
		a1u(e), t.y.z()
	}

	function a1u(e) {
		var a1k = aa.a1t();
		6 === a1k ? b0.y.a22(e) : bn.a1q ? (t.x(), bn.uO(), b0.y.close(b0.y.a1r, 3256)) : 8 === a1k && aD.a23(!0)
	}
	this.p = [], this.a1n = function(a1o, e) {
		if (this.p.push(e), 8 === t.t1 && 0 === a1o)
			if (4211 === e) a1p(e);
			else {
				if (bn.a1q && (4495 === e || 4480 === e) && b0.y.a1r !== a1o) return void t.a1s();
				if (8 !== aa.a1t() && a1u(), 4480 === e) return bj.sE.wP(), void t.u(4, 0, new v(L(43), L(44), !0));
				t.u(4, 0, new v(L(41), a1w(e), !0))
			}
		else {
			var a1k = aa.a1t();
			if (6 === a1k) {
				if (4211 === e) return void a1p(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560)) return void aZ.a1x(a1o)
			} else {
				if (!bn.a1q) return 8 === a1k ? void(a1o !== b0.y.a1y || aD.kf || 1 !== aD.a0i || aD.h9 || aN.a1z(L(42, [e]))) : void 0;
				if (a1o !== b0.y.a1r) return
			}
			a20(e)
		}
	}, this.a21 = function(e) {
		this.p.push(e), 8 === aa.a1t() ? aD.kf || 1 !== aD.a0i || aN.a1z(L(42, [e])) : a20(e)
	}, this.s = function() {
		this.p.push(3268), lf(3268)
	}
}

function d4() {
	var a24, a25, a26 = -15e3,
		a27 = !1;

	function hD(e) {
		a2R() || (a27 = !0, a2S(e, 1), b0.y.a2T(b0.y.a1y), a2U(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2G(e) {
		a26 = bf.eQ, a2S(e, 1), b0.y.a2T(b0.y.a1y), 0 < e.touches.length && (a24 = Math.floor(h.k * e.touches[0].clientX), a25 = Math.floor(h.k * e.touches[0].clientY), au.a2G(e) || a2U(a24, a25))
	}

	function a2U(f8, fA) {
		t.hD(f8, fA), 0 === aD.a0i ? aa.hD(f8, fA) : bC.a2V(f8, fA) || be.hD(f8, fA) || aX.hD(f8, fA) || aL.a2W(f8, fA) || aP.hD(f8, fA) || 0 <= aM.hD(f8, fA) || aw.hD(f8, fA) || bJ.a2X(f8, fA) || aL.a2Y(f8, fA)
	}

	function a2C(e) {
		a2R() || (a27 = !0, a2S(e, 1), a2Z(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2H(e) {
		a26 = bf.eQ, a2S(e, 1), 0 < e.touches.length && (a24 = Math.floor(h.k * e.touches[0].clientX), a25 = Math.floor(h.k * e.touches[0].clientY), au.a2H(e) || a2Z(a24, a25))
	}

	function a2Z(f8, fA) {
		t.a2C(f8, fA), 0 === aD.a0i ? aa.a2C(f8, fA) : (bT.h7(f8, fA), be.a2C(f8, fA) || (aM.a2C(f8, fA), aL.hm() ? aL.a2C(f8, fA) : aR.hE ? aR.a2C(f8) && (bf.dl = !0) : (aV.a2C(f8, fA), aS.nP && aS.a2C(f8, fA) && (bf.dl = !0))))
	}

	function a2E(e) {
		a2R() || (a2S(e, 1), a2a(), 0 === aD.a0i ? (aa.click(-1024, -1024), aT.rn()) : (aV.a2b(-1024, -1024), aM.a2C(-1024, -1024), aR.a2c(), aS.nP = !1))
	}

	function a2D(e) {
		a2R() || (a2S(e, 1), a2d(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a2A && (bJ.a2A = !1, e.preventDefault()))
	}

	function click(e) {
		a2R() || a2S(e, 1)
	}

	function a2I(e) {
		a26 = bf.eQ, a2S(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a0i ? aS.nP = !1 : au.a2e() || (a2d(a24, a25, !1), bJ.a2A && (bJ.a2A = !1, e.preventDefault()))
	}

	function a2J(e) {
		a26 = bf.eQ, a2S(e, 1), a2d(a24, a25, !1), bJ.a2A && (bJ.a2A = !1, e.preventDefault())
	}

	function a2K(e) {}

	function a2L(e) {}

	function a2M(e) {
		a2R() || a2S(e, 0)
	}

	function a2d(f8, fA, a2f) {
		a2a(), 0 === aD.a0i ? aa.click(f8, fA) : (aV.a2b(f8, fA), be.a2b(), aR.a2c(), aS.nP = !1, aL.click(f8, fA, a2f) ? bf.dl = !0 : aM.a2D(f8, fA))
	}

	function a2a() {
		t.a2a()
	}

	function a2F(e) {
		var f8, fA, deltaY;
		a2R() || (a2S(e, 1), b0.y.a2T(b0.y.a1y), f8 = Math.floor(h.k * e.clientX), fA = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2F(f8, fA, deltaY), 0 === aD.a0i ? aa.a2F(f8, fA, deltaY) : aV.a2F(f8, fA,
			deltaY) || (aR.a2g(f8, fA) ? aR.a2F(deltaY) && (bf.dl = !0) : aS.a2F(f8, fA, deltaY)))
	}

	function a2N(e) {
		a2S(e, 0)
	}

	function a2S(e, id) {
		0 === id && t.hm() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a1t() && e.preventDefault()
	}

	function a2O(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2R() || 0 < h.sj || (e = e.code) && e.length && (bX.eZ(e, 18) ? ar.a2i(3) : bX.eZ(e, 22) ? ar.a2i(0) : bX.eZ(e, 20) ? ar.a2i(1) : bX.eZ(e, 24) ? ar.a2i(2) : bX.eZ(e, 10) ? aR.a2j(31 / 32) : bX.eZ(e, 8) ? aR.a2j(32 / 31) : bX.eZ(e, 6) ? aR
			.a2j(7 / 8) : bX.eZ(e, 4) ? aR.a2j(8 / 7) : bX.eZ(e, 14) ? 0 !== aD.a0i && aS.a2F(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.eZ(e, 16) ? 0 !== aD.a0i && aS.a2F(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.eZ(e, 0) ?
			aD.a0i && bT.h8(0) : bX.eZ(e, 2) ? aD.a0i && bT.h8(1) : bX.eZ(e, 30) ? aD.a0i && bT.h8(2) : bX.eZ(e, 26) ? aD.a0i && bT.hg() : bX.eZ(e, 28) && aD.a0i && bT.hl())
	}

	function a2P(e) {
		if (!a2R() && !(0 < h.sj || bf.eQ < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2k(1) || "Space" === code && t.a2k(0))) return bn.a1q ? bn.uU.a2k(code) ? void 0 : void("Escape" === code && bJ.fT()) : void(8 !== aa.a1t() && aa.a2k(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fT() : bX.eZ(code, 18) ? ar.a2l(3) : bX.eZ(code, 22) ? ar.a2l(0) : bX.eZ(code, 20) ? ar.a2l(1) : bX.eZ(code, 24) ? ar.a2l(2) : bX.eZ(code, 12) ? bC.a2m(!aD.nN) : "Space" === code && aD.a0i && (aM.hA && aM.a2n(), aD
					.h9) && bC.a2o(!1))
		}
	}

	function a2Q() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a2R() {
		return a26 + 15e3 > bf.eQ
	}

	function resize() {
		h.a2q()
	}
	this.a28 = 0, this.a29 = "", this.a2A = !1, this.dd = function() {
		a2B.addEventListener("mousedown", hD, {
			passive: !1
		}), a2B.addEventListener("mousemove", a2C, {
			passive: !1
		}), a2B.addEventListener("mouseup", a2D, {
			passive: !1
		}), a2B.addEventListener("click", click, {
			passive: !1
		}), a2B.addEventListener("mouseleave", a2E, {
			passive: !1
		}), a2B.addEventListener("wheel", a2F, {
			passive: !1
		}), a2B.addEventListener("touchstart", a2G, {
			passive: !1
		}), a2B.addEventListener("touchmove", a2H, {
			passive: !1
		}), a2B.addEventListener("touchend", a2I, {
			passive: !1
		}), a2B.addEventListener("touchcancel", a2J, {
			passive: !1
		}), a2B.addEventListener("dragover", a2K), a2B.addEventListener("drop", a2L), a2B.addEventListener("dblclick", a2M), document.addEventListener("contextmenu", a2N), document.addEventListener("keydown", a2O), document.addEventListener(
			"keyup", a2P), document.addEventListener("visibilitychange", a2Q), window.addEventListener("resize", resize)
	}, this.a2X = function(f8, fA) {
		return !!bC.hD(f8, fA) || !!(aV.hD(f8, fA) || aS.hD(f8, fA) || aR.hD(f8, fA) || aN.hD(f8, fA))
	}, this.a2p = a2R, this.rE = function() {
		return !a27 || 0 < a26
	}, this.fT = function() {
		if (!t.hm()) return 8 === aa.a1t() ? aD.nN ? void bC.a2m(!1) : be.hm ? void be.a2n() : void aM.a2n() : void(7 !== aa.a1t() && 6 === aa.a1t() && aZ.a2r());
		t.a2k(2)
	}
}

function bz() {
	this.qm = new a2s, this.qu = new a2t, this.gM = new a2u, this.rl = new a2v, this.ys = new a2w, this.a2x = new a2y, this.canvas = new a2z, this.color = new a30, this.a31 = new a32, this.dd = function() {
		this.qm.wM()
	}
}

function a2t() {
	this.xH = function(g) {
		g.fill(0)
	}, this.a33 = function(g) {
		for (var f1 = g.length, aB = 0; aB < f1; aB++) g[aB] = []
	}, this.a34 = function(zo, a35) {
		for (var zp = bO.fa, aB = 0; aB < 3; aB++) zp[aB] = a35 * zo[aB];
		return zp
	}, this.a36 = function(zo, zp, a37) {
		for (var ja = 0, aB = 0; aB < 3; aB++) ja += Math.abs(zo[aB] - zp[aB]);
		return a37 <= ja
	}, this.a38 = function(zo, a39) {
		for (var aB = 0; aB < 3; aB++) zo[aB] = bL.i8(zo[aB] + a39, 0, 255);
		return zo
	}, this.a3A = function(g, tL, tM) {
		tM = tM || g.length - 1;
		for (var a3B = 0, aB = tL = tL || 0; aB <= tM; aB++) a3B += g[aB];
		return a3B
	}, this.a3C = function(g, a3D) {
		for (var aB, a3E, f1 = g.length, a3F = [], fK = f1 - 1; 0 <= fK; fK--) {
			for (aB = a3E = 0; aB < f1; aB++) a3D(g[aB]) < a3D(g[a3E]) && (a3E = aB);
			f1--, a3F.push(g[a3E]), g[a3E] = g[f1], g.pop()
		}
		return a3F
	}, this.min = function(g) {
		var aB, fS, f1 = g.length;
		if (0 === f1) return 0;
		for (fS = g[0], aB = 1; aB < f1; aB++) fS = Math.min(fS, g[aB]);
		return fS
	}, this.max = function(g) {
		var f1 = g.length;
		if (0 === f1) return 0;
		for (var fS = g[0], aB = 1; aB < f1; aB++) fS = Math.max(fS, g[aB]);
		return fS
	}, this.a3G = function(g, fS) {
		for (var f1 = g.length, gT = 0, aB = 0; aB < f1; aB++) gT += g[aB] > fS;
		return gT
	}, this.a3H = function(a3I, a3J, min) {
		for (var f1 = a3J[0], aB = f1 - 1; 0 <= aB; aB--) a3I[aB] < min && (a3I[aB] = a3I[--f1]);
		a3J[0] = f1
	}, this.a3K = function(g, f1, value) {
		for (var aB = 0; aB < f1; aB++) g[aB] -= value
	}, this.a3L = function(g) {
		for (var f1 = g.length, aB = 0; aB < f1; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3M = function(qT, g, a3N) {
		g.fill(0);
		for (var tP = qT.split(","), f1 = Math.min(tP.length, g.length), aB = 0; aB < f1; aB++) g[aB] = Math.min(parseInt(tP[aB]), a3N)
	}, this.a3O = function(qT, g, ri) {
		g.fill("");
		for (var tP = qT.split('"'), f1 = Math.min(tP.length, 2 * g.length), hs = 0, aB = 1; aB < f1; aB += 2) g[hs++] = tP[aB].slice(0, ri)
	}, this.a3P = function(g, gT) {
		if (0 === gT) g.fill(0);
		else {
			var a3B = this.a3A(g),
				f1 = g.length;
			if (0 === a3B) g.fill(bL.du(gT, f1));
			else
				for (var aB = 0; aB < f1; aB++) g[aB] = bL.du(gT * g[aB], a3B);
			if (0 === (a3B = this.a3A(g))) g[1] = gT;
			else
				for (var hs = 0; a3B++ < gT;) g[hs = (hs + 1) % f1] && g[hs]++
		}
	}, this.a3Q = function(g) {
		if (!g) return 0;
		var f1 = g.length;
		if (0 === f1) return 0;
		for (var fS = g[f1 - 1], aB = f1 - 2; 0 <= aB; aB--)
			if (g[aB] !== fS) return aB + 2;
		return 1
	}, this.a3R = function(g) {
		for (var a3B = 0, aB = 0; aB < g.length; aB++) a3B += g[aB].length;
		return a3B
	}, this.a3S = function(a3T) {
		for (var g = [], aB = 0; aB < a3T.length; aB++) g = g.concat(a3T[aB]);
		return g
	}, this.has = function(g, fS) {
		for (var f1 = g.length, aB = 0; aB < f1; aB++)
			if (g[aB] === fS) return !0;
		return !1
	}
}

function a2z() {
	this.zS = function(a3U, e9, a3V) {
		var hw = a3U.height,
			a3W = bA.qm.x7(hw, hw),
			i2 = bA.qm.getContext(a3W);
		return function(i, i2, a3V) {
			i2.fillStyle = a3V, i2.beginPath(), i2.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), i2.fill()
		}(hw, i2, a3V), i2.drawImage(a3U, -e9 * hw, 0), a3W
	}, this.a3Y = function(a3Z) {
		var i2, hz, hw = a3Z.height;
		return a3Z.width === hw && (hz = (i2 = bA.qm.getContext(a3Z, !0)).getImageData(0, 0, hw, hw), bA.a2x.a3a(hz.data, hw, hw, .9), i2.putImageData(hz, 0, 0)), a3Z
	}
}

function a30() {
	this.a3b = function(fS) {
		return [fS >> 12 & 63, fS >> 6 & 63, 63 & fS]
	}, this.a3c = function(fS) {
		for (var g = this.a3b(fS), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a3d = function(fS) {
		fS = this.a3c(fS);
		return bA.color.nm(fS[0], fS[1], fS[2])
	}, this.a3e = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nm = function(e8, tP, fL) {
		return "rgb(" + e8 + "," + tP + "," + fL + ")"
	}, this.no = function(e8, tP, fL, fK) {
		return "rgba(" + e8 + "," + tP + "," + fL + "," + fK.toFixed(3) + ")"
	}, this.rG = function(eZ) {
		for (var g = eZ.split("(")[1].split(","), fZ = bO.fZ, aB = 0; aB < 3; aB++) fZ[aB] = parseInt(g[aB]);
		return 4 === g.length ? fZ[3] = 255 * parseFloat(g[3].slice(0, -1)) : fZ[3] = 255, fZ
	}, this.rH = function(a3f, f4) {
		for (var g = a3f.slice(a3f.indexOf("(") + 1, a3f.indexOf(")")).split(","), fZ = bO.fZ, aB = 0; aB < 3; aB++) fZ[aB] = bL.i8(parseInt(g[aB].trim(), 10) + f4, 0, 255);
		return 3 === g.length ? this.nm(fZ[0], fZ[1], fZ[2]) : (a3f = parseFloat(g[3].trim()), this.no(fZ[0], fZ[1], fZ[2], a3f = 0 === a3f ? .3 : a3f))
	}, this.uz = function(a3g, a3h) {
		for (var ja = 0, aB = 0; aB < 3; aB++) ja += Math.abs(a3h[aB] - a3g[aB]);
		if (!(240 <= ja))
			for (aB = 0; aB < 3; aB++) a3h[aB] = a3g[aB] + (a3g[aB] < 128 ? 80 : -80)
	}, this.a3i = function(g) {
		for (var qT = "#", aB = 0; aB < 3; aB++) {
			var e8 = g[aB].toString(16);
			qT += 1 === e8.length ? "0" + e8 : e8
		}
		return qT
	}, this.a3j = function(qT) {
		var e8, tP;
		return qT.length < 7 ? bB.nl : (e8 = parseInt(qT.slice(1, 3), 16), tP = parseInt(qT.slice(3, 5), 16), qT = parseInt(qT.slice(5, 7), 16), this.nm(e8, tP, qT))
	}
}

function a2w() {
	this.a3k = function(qT, font, maxWidth) {
		if (font && (vL.font = font), vL.measureText(qT).width <= maxWidth) return qT;
		for (var aB = qT.length - 1; 1 <= aB; aB--)
			if (qT = qT.substring(0, aB), vL.measureText(qT + "...").width <= maxWidth) return qT + "...";
		return "..."
	}
}

function a32() {
	var a3m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a3n = function(eQ) {
		var a3p, qT = new Date(eQ.getTime() - 6e4 * eQ.getTimezoneOffset()).toUTCString();
		return qT.length < 12 || (qT = qT.substring(5, qT.length), 0 === (eQ = eQ.getTimezoneOffset())) ? qT : (a3p = (eQ < 0 ? "+" : "-") + bL.du(Math.abs(eQ), 60), 0 == (eQ = Math.abs(eQ) % 60) ? qT + a3p : qT + a3p + ":" + (eQ < 10 ? "0" :
			"") + eQ)
	}, this.a3q = function(eQ) {
		var qT = eQ.toUTCString();
		return qT.length < 12 ? qT : function(eQ) {
			return a3m[eQ.getUTCDay()]
		}(eQ) + ", " + qT.substring(5, qT.length - 4)
	}
}

function a2s() {
	var a3s = null;
	this.zj = 0, this.wM = function() {
		var fS = bj.eN.data[5].value;
		a3s = "px " + fS, "Trebuchet MS" !== fS && (a3s += ", Trebuchet MS"), this.zj = hv(32, 32, ["a", "b", "m"], 200, a3s)
	}, this.x7 = function(i, j) {
		var eZ = document.createElement("canvas");
		return eZ.width = i, eZ.height = j, eZ
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(ys, i, j) {
		return ys.getImageData(0, 0, i, j)
	}, this.sb = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a3s : 1 === type ? "bold " + size + a3s : 2 === type ? "lighter " + size + a3s : 3 === type ? "italic " + size + a3s : 4 === type ? "oblique " + size + a3s : 5 === type ? "small-caps " +
			size + a3s : "small-caps bold " + size + a3s
	}, this.textAlign = function(i2, id) {
		i2.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i2, id) {
		i2.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qw = function(e, code, color) {
		color = this.qv(bc.sd) + " solid " + (color || bB.nu);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tR = function(e, f8, fA, i, j) {
		e = e.style;
		e.left = this.tS(f8), e.top = this.tS(fA), e.width = this.tS(i), e.height = this.tS(j)
	}, this.qn = function(fS) {
		return 1 + fS * a0.a1.i9()
	}, this.s5 = function(nW, gZ) {
		return nW * this.qn(void 0 === gZ ? .5 : gZ) * h.iA / h.k
	}, this.tQ = function(nW, gZ) {
		return nW * this.qn(void 0 === gZ ? .5 : gZ) * h.iA
	}, this.t7 = function(nW, gZ, a3t) {
		return this.qn(gZ) * Math.min(nW * h.iA, a3t * h.i) / h.k
	}, this.qv = function(fS) {
		return fS.toFixed(1) + "px"
	}, this.tS = function(fS) {
		return this.uk(fS).toFixed(1) + "px"
	}, this.uk = function(fS) {
		return fS / h.k
	}, this.a3v = function(sr, a3w) {
		for (var qT = "<ul>", f1 = sr.length, aB = 0; aB < f1; aB++) qT += "<li>" + sr[aB] + ": <a href='" + a3w[aB] + "' target='_blank'>" + a3w[aB] + "</a></li>";
		return qT += "</ul>"
	}, this.a3x = function(a3y) {
		return "<a href='" + a3y + "' target='_blank'>" + a3y + "</a>"
	}, this.a3z = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.ux = function(e) {
		var dt = e.textContent;
		bA.rl.a40(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qT) {
		return vL.measureText(qT).width
	}, this.tH = function(a41) {
		a41.style.overflowX = "auto", a41.style.overflowY = "hidden", a41.style.whiteSpace = "nowrap", a41.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tU = this.scrollLeft, e.preventDefault())
		}), a41.addEventListener("scroll", function() {
			this.tU = this.scrollLeft
		})
	}
}

function a2u() {
	this.hB = function(a1k) {
		return 0 === a1k ? 1 === aD.a0i && aD.hO : 1 === a1k ? 1 === aD.a0i && !aD.hO : 2 === aD.a0i
	}, this.hC = function(player) {
		return 0 !== ag.mu[player] && 2 !== ag.a42[player]
	}, this.a43 = function(player) {
		return player === aD.el && 2 !== ag.a42[player]
	}, this.kz = function(player, jU) {
		return player !== jU && (0 === bg.ez[player] || bg.ez[player] !== bg.ez[jU])
	}, this.m6 = function() {
		return al.kr < 2 ? 0 : aD.hu ? 1 < bh.a44() : ag.go[lw[1]]
	}, this.a45 = function() {
		var kr = al.kr;
		if (0 !== kr) {
			if (!aD.hu) return !this.ji(lw[0]);
			for (var ez = bg.ez, kt = bh.ku(), kw = al.kw, aB = kr - 1; 0 <= aB; aB--) {
				var gY = kw[aB];
				if (ez[gY] === kt && !this.ji(gY)) return 1
			}
		}
		return 0
	}, this.a46 = function(player) {
		return player === aD.el
	}, this.a47 = function(jU, nW) {
		return ag.h2[aD.el] < nW * ag.h2[jU]
	}, this.ji = function(player) {
		return player >= aD.kL || 2 === ag.a42[player]
	}, this.lJ = function(player) {
		return 0 !== ag.mu[player]
	}, this.a0Y = function(player) {
		return player < aD.kL
	}, this.q9 = function(a48, a49) {
		return a48 !== a49
	}, this.gP = function(player, fS) {
		var min;
		return fS = this.a4A(player, fS), ag.h2[player] += fS, ag.a4B[player] && (min = Math.min(ag.a4B[player], ag.h2[player]), ag.a4B[player] -= min, ag.h2[player] -= min), fS
	}, this.a4A = function(player, fS) {
		var a4C = ag.h2[player];
		return fS = Math.min(fS, ag.go[player] * aD.a4D - a4C), fS = Math.min(fS, aD.a4E - a4C), Math.max(fS, 0)
	}, this.mT = function(player, ia, a4F, a4G) {
		var a4C = ag.h2[player],
			ia = bL.du(a4C * (ia + 1), 1024),
			a4F = bL.du(a4F * a4C, 1024),
			ia = Math.min(ia, a4C - a4F);
		return 10 === aD.kd && (ia = b4.a4I(player, ia)), bO.fX[0] = ia, bO.fX[1] = a4F, a4G <= ia
	}, this.pd = function(player, pL, pK) {
		var player = ag.h2[player],
			a4H = bL.du(64 * player, 1024);
		return pL = Math.min(pL, player - a4H), pL = this.a4A(pK, pL), bO.fX[0] = pL, bO.fX[1] = a4H, 1 <= pL
	}, this.a4J = function(player, pL, pK) {
		var player = ag.h2[player],
			a4H = bL.du(64 * player, 1024);
		return pL = Math.min(pL, player - a4H), this.a4A(pK, pL)
	}, this.pf = function(pL, pK) {
		return pL = this.a4A(pK, pL), bO.fX[0] = pL, bO.fX[1] = 0, 1 <= pL
	}, this.iZ = function(player, a4K) {
		return bL.du(ag.h2[player] * (a4K + 1), 1024)
	}, this.a4L = function(player, a4F) {
		a4F = bL.du(a4F * ag.h2[player], 1024);
		bO.fX[1] = a4F, ag.h2[player] -= a4F
	}, this.gN = function(player, a4M) {
		var fl, fn, fL = ag.h2[player];
		return a4M <= fL ? ag.h2[player] -= a4M : (ag.h2[player] = 0, fn = ag.a4B[player] + (fl = 5 * ((fL = a4M - fL) >> 2)), bd.gQ(player, fl - fL, 12), fn <= aD.a4N ? ag.a4B[player] = fn : (ag.a4B[player] = aD.a4N, bd.gQ(player, fn - aD.a4N,
			18))), a4M
	}, this.lX = function(player, ia) {
		var h2 = ag.h2,
			a4C = h2[player],
			ia = bL.du(a4C * (ia + 1), 1024),
			a4H = Math.max(bL.du(a4C, 10), 1e3);
		return (ia = Math.min(ia, a4C - a4H)) < 0 ? (h2[player] = 0, a4H = Math.min(1e3, a4C + aD.a4N - ag.a4B[player]), bO.fX[1] = a4H, ag.a4B[player] += a4H - a4C, 0) : (bO.fX[1] = a4H, 10 === aD.kd && (ia = b4.a4I(player, ia)), h2[player] -=
			a4H + ia, ia)
	}, this.mV = function(player) {
		ag.h2[player] -= bO.fX[0] + bO.fX[1]
	}, this.qA = function(player, jU) {
		return (jU = Math.min(jU, aD.ey)) < aD.ey && 0 === ag.mu[jU] && (jU = aD.ey), (bO.ex[0] = jU) === aD.ey || bs.eu(player, jU)
	}, this.qD = function(player, pK) {
		return 0 !== ag.mu[pK] && !bs.eu(player, pK)
	}, this.a4O = function(player, a4P) {
		for (var gY, f1 = al.kr, a4Q = 0, a4R = lw, aB = 0; aB < f1; aB++)
			if (gY = a4R[aB], !this.ji(gY)) {
				if (player === gY) return !0;
				if (++a4Q > a4P) return !1
			} return !1
	}, this.ls = function(gY) {
		var a4S = aD.hu ? bh.ks() : ag.go[lw[0]];
		return a4S >= bL.du(gY * aD.k5, 100)
	}, this.a4T = function(fS, min, max) {
		return Math.floor(bL.i8(isNaN(fS) ? 0 : Number(fS), min, max))
	}
}

function a2y() {
	this.a4U = function(canvas, a4V, a4W) {
		var i = canvas.width,
			j = canvas.height,
			eZ = bA.qm.x7(i, j),
			i2 = bA.qm.getContext(eZ, !0),
			canvas = (i2.drawImage(canvas, 0, 0), i2.getImageData(0, 0, i, j));
		return a4V(canvas.data, i, j, a4W), i2.putImageData(canvas, 0, 0), eZ
	}, this.a4X = function(xI, i, j) {
		for (var f8 = i - 1; 0 <= f8; f8--)
			for (var fA = j - 1; 0 <= fA; fA--) {
				var aB = 4 * (f8 + fA * i);
				xI[3 + aB] = xI[aB], xI[aB] = xI[1 + aB] = xI[2 + aB] = 255
			}
	}, this.a4Y = function(xI, i, j) {
		for (var f8 = i - 1; 0 <= f8; f8--)
			for (var fA = j - 1; 0 <= fA; fA--) {
				var aB = 4 * (f8 + fA * i);
				xI[1 + aB] > xI[2 + aB] + 10 && (xI[3 + aB] = xI[aB], xI[1 + aB] = xI[2 + aB])
			}
	}, this.a4Z = function(xI, i, j, a4W) {
		for (var gap = Math.floor(Math.min(i, j) * a4W), f8 = 0; f8 < i; f8++)
			for (var aB, fA = 0; fA < j; fA++)(f8 < gap || fA < gap || i - gap <= f8 || j - gap <= fA) && (xI[3 + (aB = 4 * (f8 + fA * i))] = 255 - 255 * (xI[1 + aB] - xI[aB]) / (255 - xI[aB]))
	}, this.a4a = function(xI, i, j, a4W) {
		for (var f8 = i - 1; 0 <= f8; f8--)
			for (var fA = j - 1; 0 <= fA; fA--) {
				var aB = 4 * (f8 + fA * i);
				xI[aB] = a4W[0], xI[1 + aB] = a4W[1], xI[2 + aB] = a4W[2]
			}
	}, this.a4b = function(xI, i, j, a4W) {
		for (var gap = Math.floor(i * a4W), f8 = 0; f8 < i; f8++)
			for (var aB, fA = 0; fA < j; fA++)(f8 < gap || fA < gap || i - gap <= f8 || j - gap <= fA) && (xI[aB = 4 * (f8 + fA * i)] = xI[1 + aB] = xI[2 + aB] = 0)
	}, this.a4c = function(xI, i, j) {
		for (var fA, aB, f8 = i - 1; 0 <= f8; f8--)
			for (fA = j - 1; 0 <= fA; fA--) 200 < xI[1 + (aB = 4 * (f8 + fA * i))] && xI[1 + aB] - 20 > xI[aB] && xI[1 + aB] - 20 > xI[2 + aB] ? xI[aB] + xI[2 + aB] < 40 ? xI[3 + aB] = 0 : (xI[3 + aB] = xI[aB], xI[aB] = 255, xI[1 + aB] = 255, xI[
				2 + aB] = 255) : xI[aB] < 50 && xI[1 + aB] < 50 && xI[2 + aB] < 50 && (xI[aB] + xI[1 + aB] + xI[2 + aB] < 50 ? xI[3 + aB] = 180 : xI[3 + aB] = 180 + Math.floor(75 * (xI[aB] + xI[1 + aB] + xI[2 + aB] - 50) / 100))
	}, this.a4d = function(xI, i, j) {
		for (var fA, aB, f8 = i - 1; 0 <= f8; f8--)
			for (fA = j - 1; 0 <= fA; fA--) xI[1 + (aB = 4 * (f8 + fA * i))] > xI[aB] + 20 && xI[1 + aB] > xI[2 + aB] + 20 && xI[aB] + xI[2] < 40 && (xI[3 + aB] = 255 - xI[1 + aB], xI[aB] = xI[1 + aB] = xI[2 + aB] = xI[aB])
	}, this.a3a = function(xI, i, j, a4W) {
		for (var e8 = i >> 1, f8 = 0; f8 < i; f8++)
			for (var fA = 0; fA < j; fA++) Math.sqrt((f8 - e8) * (f8 - e8) + (fA - e8) * (fA - e8)) > a4W * e8 && (xI[4 * (f8 + fA * i) + 3] = 0)
	}
}

function a2v() {
	var a4e = {
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
		a4f = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rm = function(eb) {
		return eb.replace(a4f, function(match) {
			return a4e[match] || match
		})
	}, this.zz = function(fS) {
		var aB, a4g, a4h, a4i, a4j;
		if (fS < 0) return "-" + this.zz(Math.abs(fS));
		if (fS < 1e3) return fS.toString();
		for (a4g = Math.floor(Math.log(fS + .5) / Math.log(10)) + 1, a4h = Math.floor((a4g - 1) / 3), a4j = (a4i = fS.toString()).substring(a4g - 3, a4g), aB = 1; aB < a4h; aB++) a4j = a4i.substring(a4g - 3 * (aB + 1), a4g - 3 * aB) + " " + a4j;
		return a4i.substring(0, a4g - 3 * a4h) + " " + a4j
	}, this.a4k = function(gY, a4g) {
		return gY.toFixed(a4g) + "%"
	}, this.a4l = function(fS, a4m) {
		return fS.toFixed(bL.i8(Math.floor((void 0 === a4m ? 3 : a4m) - Math.log10(Math.max(fS, 1))), 0, 8))
	}, this.a4n = function(fS, nW, a4g) {
		return (fS * nW).toFixed(a4g)
	}, this.a1P = function(username) {
		var f5, eq = username.indexOf("[");
		return !(eq < 0) && 1 < (f5 = username.indexOf("]")) - eq && f5 - eq <= 8 ? username.substring(eq + 1, f5).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1P;
	this.a4o = function(qT) {
		for (var fK = Math.floor(.5 * qT.length + .5), nc = Math.floor(.5 * (fK - 1)), aB = 0; aB < nc; aB++)
			for (var fL = -1; fL < 2; fL += 2) {
				var eZ = fK + fL * aB;
				if (" " === qT[eZ]) return [this.a1L(qT.substring(0, eZ)), this.a4p(qT.substring(eZ))]
			}
		return [qT.substring(0, fK), qT.substring(fK)]
	}, this.a4p = function(qT) {
		for (var f1 = qT.length, aB = 0; aB < f1; aB++)
			if (" " !== qT[aB]) return qT.substring(aB);
		return qT
	}, this.a1L = function(qT) {
		for (var aB = qT.length - 1; 0 <= aB; aB--)
			if (" " !== qT[aB]) return qT.substring(0, aB + 1);
		return qT
	}, this.a4q = function(qT, a4r) {
		return qT.split("(")[0] + "(🧈 " + a4r.toFixed(2) + ")"
	}, this.startsWith = function(qT, a4s) {
		return qT.substring(0, a4s.length) === a4s
	}, this.a40 = function(qT, a4s) {
		var f1 = qT.length;
		return qT.substring(f1 - a4s.length, f1) === a4s
	}, this.a4t = function(g, a4u, a4v) {
		var qT = "",
			f1 = g.length - 1;
		a4v = a4v || "";
		for (var aB = 0; aB < f1; aB++) qT += a4v + g[aB] + a4v + ",", (aB + 1) % a4u == 0 && (qT += "\n");
		return qT += a4v + g[f1] + a4v
	}, this.a4w = function(qT, zo, zp) {
		return qT.replace(new RegExp(zo, "g"), zp)
	}
}

function a4x() {
	this.eY = function(player, en) {
		aI.yc(player, bM.f9(en), bM.fB(en)) && (bf.dl = !0), aD.kf && this.eU()
	}, this.eU = function() {
		aD.hO = !1;
		for (var aB = 0; aB < aD.kL; aB++) 0 !== ag.mu[aB] && 0 === ag.go[aB] && aI.yj(aB);
		0 !== ag.mu[aD.el] ? (bd.mq[7] = ag.go[aD.el], bd.mq[8] = ag.h2[aD.el], aR.a4y(), aW.a4z(), aD.h9 || aH.nE(ag.it[aD.el] - 5, ag.iv[aD.el] - 5, ag.iu[aD.el] + 5, ag.iw[aD.el] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a50(18), af.a51(),
			af.mg(!0), bP.y.a52(), aL.s3(), aD.q8 = null, bb.a53 = !0, bb.a54(), aD.kf && a0.a1.setState(1)
	}
}

function c1() {
	this.ey = 512, this.a4E = 15e8, this.a55 = 1e9, this.a4N = 5e4, this.a56 = 512, this.gK = 2, this.el = 0, this.kL = 0, this.a0l = 0, this.kh = 0, this.a0k = 0, this.xn = 512, this.xs = 512, this.a4D = 150, this.kf = !0, this.h9 = 0, this.a0i = 0,
		this.k5 = 0, this.nN = !1, this.hO = 0, this.a57 = 0, this.hu = !1, this.xu = 0, this.xv = 0, this.kd = 0, this.z9 = 0, this.q8 = null, this.a10 = new yy, this.a58 = 30, this.a0f = 0, this.a0n = 0, this.a0z = 0, this.a0a = 0, this.data =
		new a59, this.a5A = new a5B, this.a5C = 0, this.a5D = "", this.a5E = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0l = this.kL = this.data.humanCount, this.kf = 1 === this.a0l, this.nN = !1, this.h9 = this.data.isReplay, this.kd = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.z9 = this.data.isContest, this.hu = this.kd < 7 || 9 === this.kd, this.kd = 10 === this.kd && this.kf ? 7 : this.kd, this.kd = 8 === this.kd && 2 !== this.kL ? 7 : this.kd, az.dd(),
				this.xu = this.data.numberTeams, this.data.teamPlayerCount ? this.xv = +(0 < this.data.teamPlayerCount[0]) : (this.xv = 0, this.hu && this.kf && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.xu + 1), aD.a5A.a5F())), this.a58 = this.kL <= 2 ? 30 : this.kL <= 50 ? 40 : 50, this.a57 = this.hO = this.data.selectableSpawn, this.q8 = this.hO ? new a4x : null, 1 === l.ds ? this.xn = this.kL : this.xn = this.data
				.playerCount, this.xs = this.xn, this.kh = this.xn - this.kL, this.a0k = 0, this.el = this.data.selectedPlayer, this.a0f = 0, this.a0n = 0, this.a0z = 0, this.a0a = 0, ay.a5G(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai
				.a5H(), b8.pD.pw = [], bg.dd(), this.a0i = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a5I(), ac.de(), ap.a5J(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a5K(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a5L(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a5M.putImageData(a5N, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), g3(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a10.dd(), bf.a5K(), aH.nD(), 0 === ag.mu[aD.el] && aX.show(!1, !0), af.mg(!0), av.dd(), bf.dl = !0, this.h9 || this.kf && this.hO || a0.a1.setState(1), this.a5C = 0
		}, this.a23 = function(eP) {
			b9.q6.a5P.length ? this.a5D = b9.q6.a5P : this.a5D = b9.a5Q.a0A(), b0.y.a5R(), bq.clear(), this.a0i = 0, bf.a5S(), a0.a1.setState(0), aa.setState(0), bU.eH.show(eP), 2 === this.a5C ? t.y.a5T() : 1 === this.a5C ? t.u(19) : t.u(5, 5)
		}, this.a5U = function() {
			return this.h9 ? aM.hA || !bC.a5V : this.kf && (aM.hA || this.hO)
		}, this.a5W = function() {
			return 1 === this.a0i && !this.hO
		}
}

function a59() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a5B() {
	this.a5F = function() {
		var a5X = aD.data;
		bA.qu.a3P(a5X.teamPlayerCount, a5X.playerCount), a5X.numberTeams = bA.qu.a3G(a5X.teamPlayerCount, 0), a5X.teamPlayerCount[0] && a5X.teamPlayerCount[7] && (a5X.teamPlayerCount[7] = 0, this.a5F())
	}, this.a5Y = function() {
		var a5X = aD.data;
		a5X.mapType < 2 ? bS.a7(bS.a5Z(a5X), a5X.mapSeed) : bS.a5a(a5X.canvas)
	}, this.a5b = function() {
		var a5X = aD.data;
		a5X.colorsData || (a5X.colorsData = new Uint32Array(1)), a5X.selectableColor && (a5X.colorsData[0] = bj.y.wL()), a5X.selectableName && (a5X.playerNamesData || (a5X.playerNamesData = new Array(1)), a5X.playerNamesData[0] = bj.eN.data[122]
			.value)
	}, this.a5c = function() {
		aD.data = new a59, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ey), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a5d = [];
	this.pg = function(player, pK, a5e, a5f) {
		player === aD.el || pK === aD.el || !a5f && bA.gM.ji(player) || bA.gM.ji(pK) || this.zA(ag.zB[player] + " supported " + ag.zB[pK] + " with " + bA.rl.zz(a5e) + " ressource" + (1 === a5e ? "." : "s."))
	}, this.zA = function(qT, pV) {
		qT = {
			eQ: aW.a5h(),
			qT: qT,
			pV: pV
		};
		a5d.push(qT), 30 === t.t1 && t.a5i().zA(qT)
	}, this.clear = function() {
		a5d = [];
		var tP = t.a5j(30);
		tP && tP.clear()
	}, this.a5k = function() {
		return a5d
	}
}

function dT() {
	this.zg = 0, this.gap = 0, this.sd = 0, this.qs = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.zg = .0022 * bA.qm.qn(.5) * h.iA, this.sd = this.zg / h.k, this.gap = Math.max(Math.floor((a0.a1.i9() ? .0114 : .01296) * h.iA), 2), this.qs = this.gap / h.k
	}
}

function dS() {
	this.a5l = function() {
		return a0.a1.i9() ? 2 : 1
	}
}

function cC() {
	var rL, f8, fA, a5m, a5n, a5o, eQ, a5p, a5q, a5r, a5s, gap, zoom, pp, a5t;

	function a67(la, lb, ef) {
		ac.ew(ef) || -1 === (la = bN.lA.a6G(la, lb)) ? aN.a6F(ef) : aN.a6H(la)
	}

	function a63(a5p) {
		for (var aB = pp.length - 1; 0 <= aB; aB--)
			if (pp[aB] === a5p) return 1
	}

	function a61(a5y) {
		var aB, f1;
		if (-1 !== a5y)
			for (f1 = rL.length, aB = 0; aB < f1; aB++)
				if (rL[aB].hm && rL[aB].f8 + 1 === a5y % 4 && rL[aB].fA + 1 === a5y >> 2) return aB;
		return -1
	}

	function a5z(la, lb) {
		var tP = gap / 2;
		return la < f8 - a5m - 3 * tP || f8 + 3 * a5m + 5 * tP < la || lb < fA - a5m - 3 * tP || fA + 2 * a5m + 3 * tP < lb ? -1 : 4 * (lb < fA - tP ? 0 : lb < fA + a5m + tP ? 1 : 2) + (la < f8 - tP ? 0 : la < f8 + a5m + tP ? 1 : la < f8 + 2 * a5m +
			3 * tP ? 2 : 3)
	}
	this.a5u = function() {
		var aB, fL, a5x = [bB.oK, bB.oY, bB.ns, bB.ou, bB.om];
		for (rL = new Array(10), aB = 0; aB < 10; aB++) rL[aB] = {
			id: aB,
			hm: !1,
			lI: 0,
			canvas: [],
			f8: 0,
			fA: 0
		};
		for (rL[0].colors = [0, 1, 2, 3], rL[0].f8 = 0, rL[0].fA = 0, rL[1].colors = [1, 4], rL[1].f8 = 1, rL[1].fA = 0, rL[2].colors = [0, 1], rL[2].f8 = -1, rL[2].fA = 0, rL[3].colors = [0], rL[3].f8 = 0, rL[3].fA = 0, rL[4].colors = [0, 2],
			rL[4].f8 = 1, rL[4].fA = 1, rL[5].colors = [3], rL[5].f8 = 0, rL[5].fA = -1, rL[6].id = 20, rL[6].colors = [0], rL[6].f8 = 1, rL[6].fA = -1, rL[7].id = 21, rL[7].colors = [0], rL[7].f8 = 0, rL[7].fA = 1, rL[8].id = 16, rL[8]
			.colors = [0], rL[8].f8 = 0, rL[8].fA = 0, rL[9].id = 10, rL[9].colors = [4], rL[9].f8 = 2, rL[9].fA = 0, aB = 0; aB < 10; aB++)
			for (fL = 0; fL < rL[aB].colors.length; fL++) rL[aB].canvas.push(function(id, a3V) {
				if (id < 20) return bA.canvas.zS(ab.get(3), id, a3V);
				var a3V = ab.get(3).height,
					a3W = bA.qm.x7(a3V, a3V),
					i2 = bA.qm.getContext(a3W);
				20 === id ? i2.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xI.zh(aj.s2.zW + aj.s2.zn, i2, 0, 0, a3V);
				return a3W
			}(rL[aB].id, a5x[rL[aB].colors[fL]]))
	}, this.a5w = function() {
		return rL
	}, this.dd = function() {
		pp = [], f8 = fA = eQ = 0, a5n = a5o = -1e3, this.resize()
	}, this.resize = function() {
		a5m = Math.floor((a0.a1.i9() ? .075 : .0468) * h.iA), zoom = a5m / ab.get(3).height, gap = Math.floor(a5m / 3)
	}, this.a2W = function(la, lb) {
		return !!this.hm() && (bf.dl = !0, !!aj.xI.hD(la, lb, a5q) || (la = function(la, lb) {
			a5o = a5n = -1e3;
			var a60 = a61(a5z(la, lb));
			if (-1 === a60) return 0;
			if (1 !== rL[a60].colors[rL[a60].lI])
				if (5 === a60) {
					if (! function() {
							var dt = performance.now();
							a5t + 4e3 < dt && (pp = []);
							a5t = dt
						}(), a63(a5p)) return 1;
					pp.push(a5p), 16 < pp.length && pp.shift()
				} else if (6 === a60) {
				for (var aB = pp.length - 1; 0 <= aB; aB--) 0 === ag.mu[pp[aB]] && pp.splice(aB, 1);
				0 < pp.length && (b5.a64(1, pp, !0) && b8.gM.po(pp, a5p), pp = [])
			} else if (2 === a60) an.he(a5p) && b8.hQ.pJ(aR.hU(), a5p);
			else if (3 === a60) aD.hO && b8.hQ.hR(a5r);
			else if (0 === a60)
				if (0 === rL[0].lI) {
					if (aD.a57 && aW.a5h() < 350) return 1;
					bV.a65(4), b8.hQ.hX(aR.hU(), a5p)
				} else b1.hY(a5p, aR.hU());
			else if (1 === a60) b8.hQ.hc(aR.hU(), a5r);
			else if (9 === a60) b8.hQ.hf(aR.hU());
			else {
				if (7 === a60) return bV.a65(0), aj.xI.show(la, lb), 2;
				if (4 === a60) b5.a64(0, [a5p], !0) && b8.gM.pl(a5p);
				else {
					if (8 !== a60) return 0;
					b8.hQ.hT(aR.hU(), a5s, a5p)
				}
			}
			return 1
		}(la, lb), this.s3(), 2 === la && (aj.xI.hm = !0), 0 < la))
	}, this.a2Y = function(la, lb) {
		this.hm() || (a5n = la, a5o = lb, eQ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.hG(mouseX),
			coordY = bM.hI(mouseY),
			coord = bM.fO(coordX, coordY),
			coord = bM.er(coord);
		bM.hJ(coordX, coordY) && a67(mouseX, mouseY, coord)
	}, this.click = function(la, lb, a2f) {
		var hF = bM.hG(la),
			hH = bM.hI(lb),
			en = bM.fO(hF, hH),
			ef = bM.er(en);
		return !(!bM.hJ(hF, hH) || (hF = (a0.a1.i9() ? .025 : .0144) * h.iA, hH = performance.now(), Math.abs(la - a5n) > hF) || Math.abs(lb - a5o) > hF || eQ + 500 < hH) && (eQ = hH, a2f ? (a67(la, lb, ef), !1) : aM.hA || this.hm() || !bA.gM.hC(
			aD.el) || aD.h9 ? (this.s3(), !1) : (aD.hO ? 0 <= (a5r = br.hP(en)) && (rL[3].hm = !0) : 2 === aD.a0i ? ac.ga(ef) && (a5p = ac.et(ef), bA.gM.ji(a5p) || (rL[0].hm = !0, rL[0].lI = 1, rL[7].hm = !0)) : (bN.hd.he(aD.el, en) && (
			rL[0].hm = !0, rL[0].lI = 1, rL[1].hm = !0, rL[1].lI = 0, rL[9].hm = !0, rL[9].lI = 0), bN.ha.hb(aD.el, en) && (rL[0].hm = !0, rL[0].lI = 1, rL[1].hm = !0, rL[1].lI = 1, a5r = bO.fc[7]), ac.f6(ef) ? (a5s = am.ec.ee(
			ef)) && (hF = bM.er(a5s), rL[8].hm = !0, a5p = ac.es(hF) ? aD.ey : ac.et(hF)) : (ac.yh(aD.el, ef) && (a5q = aD.el, rL[0].hm = !0, rL[0].lI = 1, rL[7].hm = !0), -1 !== (hH = br.hV(en)) && (ac.es(hH << 2) ? (a5p = aD.ey,
			bs.hW(aD.el) ? (rL[0].hm = !0, rL[0].lI = 0) : ad.g7(aD.el) && (rL[0].hm = !0, rL[0].lI = 3)) : (a5p = ac.et(hH << 2), rL[0].lI = 1, rL[5].hm = function(a5p) {
			return !bA.gM.ji(a5p) && !a63(a5p) && b5.a64(1, [a5p], !1)
		}(a5p), rL[7].hm || bA.gM.ji(a5p) || (a5q = a5p, rL[7].hm = !0), rL[4].hm = !bA.gM.ji(a5p) && !af.a6B(a5p) && b5.a64(0, [a5p], !1), rL[6].hm = function(a5p) {
			if (0 === pp.length) return !1;
			if (performance.now() > a5t + 4e3) return !(pp = []);
			return !a63(a5p) && ! function(a5p) {
				var aB;
				if (aD.hu)
					for (aB = pp.length - 1; 0 <= aB; aB--)
						if (!bs.eu(a5p, pp[aB])) return 1;
				return
			}(a5p)
		}(a5p), bs.eu(a5p, aD.el) ? (bs.hZ(aD.el, a5p) ? (rL[0].lI = 0, rL[0].hm = !0) : ad.g7(aD.el) && (rL[0].lI = 3, rL[0].hm = !0), rL[0].hm = this.a6D()) : (rL[2].hm = !0, an.he(a5p) ? rL[2].lI = 0 : rL[2].lI = 1,
			rL[0].hm = !0))))), this.a68(la, lb)))
	}, this.a68 = function(la, lb) {
		return f8 = la - Math.floor(a5m / 2), fA = lb - Math.floor(a5m / 2), !!this.hm()
	}, this.a2C = function(la, lb) {
		return !!this.hm() && (aj.xI.hm ? !aj.xI.zf(la, lb) && (aj.xI.hm = !1, bf.dl = !0) : function(sO, la, lb) {
			la = a5z(la, lb);
			if (0 <= a61(la)) return !1;
			if ((1 === la || 6 === la) && 0 <= a61(2)) return !1;
			if ((6 === la || 9 === la) && 0 <= a61(10)) return !1;
			return sO.s3(), bf.dl = !0
		}(this, la, lb))
	}, this.s3 = function() {
		for (var aB = rL.length - 1; 0 <= aB; aB--) rL[aB].hm = !1, rL[aB].lI = 0;
		aj.xI.hm = !1
	}, this.hm = function() {
		return this.a6D() || aj.xI.hm
	}, this.a6D = function() {
		for (var f1 = rL.length, aB = 0; aB < f1; aB++)
			if (rL[aB].hm) return !0;
		return !1
	}, this.vK = function() {
		if (this.hm())
			if (aj.xI.hm) aj.xI.vK();
			else {
				var aB, i2 = vL,
					fL = rL,
					f1 = fL.length,
					a6L = (a5m + gap) / zoom;
				for (i2.imageSmoothingEnabled = !0, i2.setTransform(zoom, 0, 0, zoom, f8, fA), aB = 0; aB < f1; aB++) fL[aB].hm && vL.drawImage(fL[aB].canvas[fL[aB].lI], fL[aB].f8 * a6L, fL[aB].fA * a6L);
				i2.imageSmoothingEnabled = !1, i2.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a6M, a6N, a6O, a6P = -1;

	function a6Q() {
		var a6R, ys = canvas.getContext("2d", {
			alpha: !0
		});
		ys.clearRect(0, 0, j, j), ys.fillStyle = bB.nq, ys.fillRect(0, 0, j, j), 0 === a6N && (ys.fillStyle = bB.nv, ys.fillRect(0, 0, j, j)), ys.fillStyle = bB.nu, ys.fillRect(0, 0, j, 1), ys.fillRect(0, 0, 1, j), ys.fillRect(0, j - 1, j, 1), ys
			.fillRect(j - 1, 0, 1, j), a6R = .9 * j / ab.get(0).width, ys.imageSmoothingEnabled = !0, ys.setTransform(a6R, 0, 0, a6R, Math.floor((j - a6R * ab.get(0).width) / 2), Math.floor((j - a6R * ab.get(0).height) / 2)), ys.drawImage(ab.get(0),
				0, 0), ys.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6T(la, lb) {
		if (!aM.hA) return la <= j + bc.gap && lb >= aR.fA ? 9 : -1;
		if (la <= 4 * j + bc.gap) {
			if (lb >= aR.fA) return 0;
			if (lb >= aR.fA - j - a6O * bc.gap) return 2
		} else if (la <= 7 * j + bc.gap && lb >= aR.fA - j - a6O * bc.gap) return 1;
		return -1
	}
	this.hA = !1, this.dd = function() {
		a6N = -1, this.hA = !1, a6O = a0.a1.i9() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6M = bA.qm.sb(1, (a0.a1.i9() ? .5 : .45) * j), a6Q()
	}, this.a2n = function() {
		this.hA = !this.hA, this.hA ? (bC.a2m(!1), aD.h9 && bC.a5V && bC.a2o(!0), this.a6S()) : (a6N = -1, a6Q(), !aD.kf || 1 !== aD.a0i || aD.hO || aD.h9 || a0.a1.setState(1)), bf.dl = !0
	}, this.a6S = function() {
		(aD.kf || aD.h9) && 1 === aD.a0i && (aV.mg(!0), aD.hO || setTimeout(function() {
			bb.a0t()
		}, 0), a0.a1.setState(0))
	}, this.hD = function(la, lb) {
		return 0 <= (a6P = a6T(la, lb)) || !aM.hA || aD.kf || aD.h9 || be.hm || aM.a2n(), a6P
	}, this.a2C = function(la, lb) {
		la = a6T(la, lb);
		la !== a6N && (a6N = la, this.hA || a6Q(), bf.dl = !0)
	}, this.a2D = function(la, lb) {
		la = a6T(la, lb);
		return -1 !== la && a6P === la && (this.hA ? aD.nN ? (0 <= la && bC.a2m(!1), !aD.h9) : (0 === la ? aD.a23() : 1 === la ? this.a2n() : 2 === la && t.u(1, 0), !0) : 9 === la && (this.a2n(), !0))
	}, this.vK = function() {
		var i;
		this.hA ? (i = Math.floor(5.5 * j), vL.setTransform(1, 0, 0, 1, bc.gap, aR.fA), vL.fillStyle = bB.nq, vL.fillRect(0, 0, i, j), 0 === a6N ? (vL.fillStyle = bB.nv, vL.fillRect(0, 0, 4 * j, j)) : 1 === a6N && (vL.fillStyle = bB.nv, vL
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vL.fillStyle = bB.nu, vL.fillRect(0, 0, i, 1), vL.fillRect(0, 0, 1, j), vL.fillRect(4 * j, 0, 1, j), vL.fillRect(0, j - 1, i, 1), vL.fillRect(i - 1, 0, 1, j), vL.font = a6M, bA.qm
			.textBaseline(vL, 1), bA.qm.textAlign(vL, 1), vL.fillText(L(45), 2 * j, .54 * j), i = .4 * j, aM.a6X(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.fA + .3 * j, i), i = 1, vL.setTransform(1, 0, 0, 1, bc.gap, aR.fA - i * a6O * bc.gap - i *
				j), vL.fillStyle = bB.nq, vL.fillRect(0, 0, 4 * j, j), a6N === i + 1 && (vL.fillStyle = bB.nv, vL.fillRect(0, 0, 4 * j, j)), vL.fillStyle = bB.nu, vL.fillRect(0, 0, 4 * j, 1), vL.fillRect(0, 0, 1, j), vL.fillRect(4 * j, 0, 1,
				j), vL.fillRect(0, j - 1, 4 * j, 1), vL.fillText(L(0 === i ? 45 : 46), 2 * j, .54 * j), vL.setTransform(1, 0, 0, 1, 0, 0)) : vL.drawImage(canvas, bc.gap, aR.fA)
	}, this.qN = function(player) {
		return 0 !== ag.mu[player] && 2 !== aD.a0i && !bA.gM.ji(player)
	}, this.a6X = function(f8, fA, f1) {
		vL.setTransform(1, 0, 0, 1, f8, fA), vL.lineWidth = bc.zg, vL.strokeStyle = bB.nu, vL.beginPath(), vL.moveTo(0, 0), vL.lineTo(f1, f1), vL.moveTo(0, f1), vL.lineTo(f1, 0), vL.stroke()
	}
}

function cE() {
	var a6Z, j, a6a, a6b, a6c, a6d, a6e, a6f, a6g;

	function yo() {
		return aR.a6y(aN.a6u()) ? aw.hm ? __fx.settings.keybindButtons ? aR.fA - 2 * aR.j - 3 * a6a : aR.fA - aR.j - 2 * a6a : __fx.settings.keybindButtons ? aR.fA - aR.j - 2 * a6a : aR.fA - a6a : bC.a6y(aN.a6x()) ? aw.hm ? bC.yo() - aR.j - 2 * a6a :
			bC.yo() - a6a : aw.hm ? h.j - aR.j - (bk.a5l() + 1) * a6a : h.j - bk.a5l() * bc.gap
	}

	function a6l(dt, qT, id, gY, a6o, a6p, ky, a6q, a6r, a6s, a73) {
		var aB, ys, a3W, qe, a74 = void 0 !== a6r,
			i = Math.floor(aQ.measureText(qT, aN.a6M) + 1.5 * a6b + (a74 ? j : 1.5 * a6b));
		if (bf.dl = !0, a73 || bq.zA(qT, a6r), i + 2 * a6a + aR.j > h.i && !a74 && 50 !== id && 20 < qT.length) a6l(dt, (a73 = bA.rl.a4o(qT))[0], id, gY, a6o, a6p, ky, a6q, a6r, a6s, !0), a6l(dt, a73[1], id, gY, a6o, a6p, ky, a6q, a6r, a6s, !0);
		else if (a73 = i + (50 === id ? a6c : 0), (a3W = document.createElement("canvas")).width = i, a3W.height = j, (ys = a3W.getContext("2d", {
				alpha: !0
			})).font = aN.a6M, bA.qm.textBaseline(ys, 1), bA.qm.textAlign(ys, 0), ys.clearRect(0, 0, i, j), ys.fillStyle = a6p, ys.fillRect(0, 0, i, j), ys.fillStyle = a6o, ys.fillText(qT, Math.floor(1.5 * a6b), Math.floor(j / 2)), a74 && (ys
				.imageSmoothingEnabled = !0, aj.xI.zh(a6r, ys, i - j, 0, j)), 0 === (qe = {
				eQ: dt,
				qT: qT,
				id: id,
				player: gY,
				canvas: a3W,
				a6o: a6o,
				a6p: a6p,
				i: i,
				a6v: a73,
				ky: ky,
				a6q: a6q,
				a6r: a6r,
				a6s: a6s
			}).eQ || 0 < a6Z.length && 0 < a6Z[0].eQ) a6Z.unshift(qe);
		else {
			for (aB = 1; aB < a6Z.length; aB++)
				if (0 < a6Z[aB].eQ) return void a6Z.splice(aB, 0, qe);
			a6Z.push(qe)
		}
	}

	function a6m(e8, tP, fL) {
		return "rgb(" + e8 + "," + tP + "," + fL + ")"
	}

	function a75(id, gT) {
		for (var f1 = a6Z.length, aB = 0; aB < f1; aB++) a6Z[aB].id === id && gT-- <= 0 && (a6Z.splice(aB, 1), aB--, f1--)
	}

	function a76(id, player) {
		for (var fF = !1, aB = a6Z.length - 1; 0 <= aB; aB--) a6Z[aB].id !== id || player !== aD.ey && a6Z[aB].player !== player || (a6Z.splice(aB, 1), fF = !0);
		return fF
	}

	function a7S(qT) {
		a6l(340, qT, 6, 0, a6m(215, 245, 255), bB.nr, -1, !1)
	}
	this.a6h = "", this.dd = function() {
		var self;
		a6f = 0, a6e = a0.a1.i9() ? 7 : 12, a6d = {
			a0W: [0, 0, 0],
			a6i: [0, 0, 0],
			eG: [220, 180, 180],
			vJ: [0, 0, 0],
			eZ: [0, 0, 0]
		}, a6Z = [], this.resize(), aD.hO && this.a0u(0, 18), bS.x5.x6[bS.eh].name.length && a7S(L(89, [bS.x5.x6[bS.eh].name])), a7S(L(90, [bS.fC - 2 + "x" + (bS.fD - 2)])), a7S(L(91, [bA.rl.zz(ap.a7T)])), ap.a7T !== ap.a7U && a7S(L(92, [bA
			.rl.zz(ap.a7U) + " (" + bA.rl.a4k(100 * ap.a7U / ap.a7T, 1) + ")"
		])), 0 < ap.a7V && a7S(L(69, [bA.rl.zz(ap.a7V) + " (" + bA.rl.a4k(100 * ap.a7V / ap.a7T, 1) + ")"])), 0 < ap.a7W && a7S(L(93, [bA.rl.zz(ap.a7W) + " (" + bA.rl.a4k(100 * ap.a7W / ap.a7T, 1) + ")"])), 10 === aD.kd && a6l(120, L(94), 6,
			0, a6m(235, 255, 120), bB.nr, -1, !1), 0 !== (self = this).a6h.length && (a6l(200, self.a6h, 0, 0, bB.nu, bB.nr, -1, !1), self.a6h = ""), aD.z9 && a6l(340, L(47), 6, 0, a6m(255, 200, 0), bB.nr, -1, !1)
	}, this.resize = function() {
		var a6n, aB;
		if (j = (j = Math.floor((a0.a1.i9() ? .031 : .0249) * h.iA)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6M = bA.qm.sb(1, this.fontSize), a6a = bc.gap, a6b = Math.floor(j / 5), 0 < a6Z.length)
			for (a6n = a6Z, a6Z = [], aB = a6n.length - 1; 0 <= aB; aB--) a6l(a6n[aB].eQ, a6n[aB].qT, a6n[aB].id, a6n[aB].player, a6n[aB].a6o, a6n[aB].a6p, a6n[aB].ky, a6n[aB].a6q, a6n[aB].a6r, a6n[aB].a6s, !0);
		this.a6t()
	}, this.a6t = function() {
		a6g = document.createElement("canvas");
		var qT = L(48),
			ys = (a6c = aQ.measureText(qT, this.a6M) + 5 * a6b, a6g.height = j, a6g.width = a6c, a6g.getContext("2d", {
				alpha: !0
			}));
		ys.font = this.a6M, bA.qm.textBaseline(ys, 1), bA.qm.textAlign(ys, 1), ys.clearRect(0, 0, a6c, j), ys.fillStyle = bB.oH, ys.fillRect(0, 0, a6c, j), ys.fillStyle = bB.nu, ys.fillText(qT, Math.floor(a6c / 2), Math.floor(j / 2))
	}, this.a6u = function() {
		var f1;
		return aw.hm ? aw.i : 0 === (f1 = a6Z.length) ? 0 : 1 === f1 ? a6Z[0].a6v : a6w(a6Z[0].a6v, a6Z[1].a6v)
	}, this.a6x = function() {
		var f1 = a6Z.length;
		return aw.hm ? f1 ? a6w(aw.i, a6Z[0].a6v) : aw.i : 0 === f1 ? 0 : 1 === f1 ? a6Z[0].a6v : 2 === f1 ? a6w(a6Z[0].a6v, a6Z[1].a6v) : a6w(a6w(a6Z[0].a6v, a6Z[1].a6v), a6Z[2].a6v)
	}, this.hD = function(f8, fA) {
		for (var nK, a6z, a70 = yo(), aB = a6Z.length - 1; 0 <= aB; aB--)
			if ((a6z = a70 - (aB + 1) * j) <= fA && fA < a6z + j) return 50 === a6Z[aB].id ? f8 >= h.i - a6c - a6a - a6Z[aB].i && (f8 >= h.i - a6c - a6a ? b8.gM.pl(a6Z[aB].player) : aH.nF(a6Z[aB].player, 800, !1, 0), !0) : f8 >= h.i - a6Z[aB].i -
				a6a && (736 === a6Z[aB].id ? (a6z = a6Z[aB].qT.split(" "), window.open(a6z[a6z.length - 1], "_blank")) : a6Z[aB].a6q && (a6Z[aB].a6s && a6Z[aB].a6s.fK ? (a6z = a6Z[aB].a6s.en, nK = bM.f9(a6z) - 10, a6z = bM.fB(a6z) - 10, aH
					.nE(nK, a6z, 19 + nK, 19 + a6z)) : a6Z[aB].a6s && a6Z[aB].a6s.fL ? aH.nG(a6Z[aB].player, a6Z[aB].a6s.nH) : (aH.nF(a6Z[aB].player, 800, !1, 0), 0 <= a6Z[aB].ky && (nK = a6Z[aB].ky, a6Z[aB].ky = a6Z[aB].player, a6Z[
					aB].player = nK))), !0);
		return !1
	}, this.zA = function(dt, qT, id, gY, a6o, a6p, ky, a6q, a6r, a6s) {
		a6l(dt, qT, id, gY, a6o, a6p, ky, a6q, a6r, a6s)
	}, this.a72 = function(r) {
		a6l(300, r, 252, 0, bB.nu, bB.nr, -1, !1)
	}, this.a50 = function(id) {
		for (var aB = a6Z.length - 1; 0 <= aB; aB--) a6Z[aB].id === id && (a6Z[aB].eQ = 1)
	}, this.a0u = function(player, id) {
		0 === id ? (aQ.eY(player, 0), a75(423, 2), a6l(160, L(49, [ag.zB[player]]), 423, player, "rgb(10,220,10)", bB.nr, -1, !1)) : 1 === id ? (a76(50, aD.ey), aQ.eY(player, 1), a6l(360, L(50, [ag.zB[player]]), 0, player, bB.oa, bB.nr, -1, !0),
			aH.nF(player, 2700, !1, 0)) : 2 === id ? (aQ.eY(player, 2), a6l(0, L(51), 0, player, "rgb(10,255,255)", bB.nr, -1, !0), aH.nF(player, 2700, !1, 0)) : 3 === id ? (aQ.eY(player, 2), a6l(0, L(52, [ag.zB[player]]), 0, player, bB.nu,
			bB.nr, -1, !0), aH.nF(player, 2700, !1, 0)) : 4 === id ? this.a77(1, player, player) : 5 === id ? bA.gM.ji(aD.el) || (function(id, mp) {
			var aB, a7H = 0,
				f1 = a6Z.length;
			for (aB = 0; aB < f1; aB++)
				if (a6Z[aB].id === id && mp <= ++a7H) return a6Z.splice(aB, 1)
		}(1, 5), af.a79(player) && a6l(180, L(53, [ag.zB[player]]), 1, player, a6m(255, 200, 180), bB.nr, -1, !0), bA.gM.a47(player, 10) && (a75(573, 0), a6l(180, L(54, [ag.zB[player]]), 573, player, bB.oa, bB.nr, -1, !0))) : 18 === id ? a6l(
			255, L(55), 18, 0, bB.nu, bB.nr, -1, !1) : 21 === id ? a6l(220, L(56), id, 0, bB.nu, bB.nr, -1, !1) : 22 === id ? this.a77(2, player, player) : 59 === id && a6l(0, L(57), id, 0, bB.ot, bB.nr, 0, !1)
	}, this.a1z = function(r) {
		a6l(200, L(58, [r]), 94, 0, bB.nu, bB.oW, -1, !1)
	}, this.a16 = function(a7A) {
		if (aD.el === a7A && !aD.kf && !aD.kL)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a6l(0, "Your Win Count is now " + __fx.wins.count, 3, a7A, bB.nu, bB.nr, -1, !0);
		ag.go[a7A] && (aQ.eY(a7A, 2), aD.kL < 100 ? a6l(0, L(52, [ag.zB[a7A]]), 3, a7A, bB.nu, bB.nr, -1, !0) : a6l(0, L(59, [ag.zB[a7A]]), 3, a7A, bB.nu, bB.nr, -1, !0))
	}, this.a6F = function(ef) {
		var qT, a7C, a7B = "(" + bM.f9(ef >> 2) + ", " + bM.fB(ef >> 2) + ")",
			a6q = !1,
			player = 0;
		ac.ew(ef) ? ac.es(ef) ? a7B = L(60, [a7B]) : (player = ac.et(ef), aD.h9 && !1 === __fx.hoveringTooltip.active && (aD.el = player), qT = L(61, [bA.ys.a3k(ag.a1M[player], bA.qm.sb(0, 10), 150)]) + "   ", qT = (qT += L(62, [bA.rl.zz(ag.h2[
				player])]) + "   ") + L(63, [bA.rl.zz(ag.go[player])]) + "   ", aD.hu && (a7C = bg.a13[bg.ki[bg.ez[player]]], qT += L(64) + ": " + a7C + "   "), bA.gM.ji(player) && (qT += L(65) + ": " + aE.kW[aE.hj[player]] + "   "), a7B =
			qT = (qT += L(66, [player]) + "   ") + L(67, [a7B]), a6q = !0) : a7B = ac.f6(ef) ? L(68, [a7B]) + "   #" + ac.ej(ef) : L(69, [a7B]), bf.dl = !0, a75(55, 0), a6l(220, a7B, 55, player, bB.nu, bB.nr, -1, a6q, void 0, void 0, !0)
	}, this.a6H = function(a7D) {
		var lG = bN.y,
			player = lG.mF[a7D] >> 3,
			qT = (bf.dl = !0, a75(55, 0), L(70, [ag.zB[player]]) + "   ");
		a6l(220, qT += L(62, [bA.rl.zz(lG.a7E[a7D])]), 55, player, bB.nu, bB.nr, -1, !0)
	}, this.pU = function(pG, a7F, pV) {
		pG === aD.el ? a6l(175, " " + L(71, [ag.zB[a7F]]) + ": ", 1001, a7F, a6m(200, 255, 210), bB.nr, -1, !0, pV) : this.a7G(pG, pV)
	}, this.a7G = function(pG, pV) {
		a75(1e3, 0), a6l(175, ag.zB[pG] + ": ", 1e3, pG, bB.nu, "rgba(5,60,25,0.9)", -1, !0, pV)
	}, this.a15 = function() {
		var r;
		aD.a0n ? (r = L(72), aQ.a14(L(73), 2, 1, 12), a6l(0, r, 40, 0, "rgb(10,220,10)", bB.nr, -1, !1)) : (r = L(74), aQ.a14(L(75), 2, 0, 16), a6l(0, r, 41, 0, bB.nu, bB.nr, -1, !1))
	}, this.yz = function() {
		var gT = ag.zB,
			f4 = aD.data;
		a6l(300, gT[0] + " [" + aD.a10.z5(f4.elo[0]) + "] vs " + gT[1] + " [" + aD.a10.z5(f4.elo[1]) + "]", 65, 0, bB.nl, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7I = function(r) {
		a6l(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7J = function(a7K) {
		a6l(0, L(a7K ? 76 : 77), 247, 0, bB.os, bB.nr, -1, !1)
	}, this.z7 = function(z4, z6, a7L) {
		var f4 = aD.data,
			gT = ag.zB;
		a6l(0, gT[0] + ": " + aD.a10.z5(f4.elo[0]) + " -> " + z4, 66, 0, bB.nu, a7L[0], -1, !1), a6l(0, gT[1] + ": " + aD.a10.z5(f4.elo[1]) + " -> " + z6, 66, 1, bB.nu, a7L[1], -1, !1)
	}, this.pm = function(player, id) {
		0 === id ? a76(50, player) ? (a6l(128, L(78, [ag.zB[player]]), 52, player, a6m(180, 255, 180), bB.nr, -1, !0), af.qL(player, 2, 255)) : a6l(384, L(79, [ag.zB[player]]), 51, player, a6m(210, 210, 255), bB.nr, -1, !0) : a76(51, player) ? (
			a6l(128, L(80, [ag.zB[player]]), 52, player, bB.nu, "rgba(60,120,10,0.9)", -1, !0), af.qL(player, 2, 255)) : (a6l(384, L(81, [ag.zB[player]]), 50, player, bB.nu, "rgba(90,90,90,0.9)", -1, !0), af.qL(player, 2, 96))
	}, this.pq = function(a0W, target) {
		var color = a6m(210, 255, 210);
		1 < a0W.length ? a6l(230, L(82, [a0W.length, ag.zB[target]]), 66, target, color, bB.nr, -1, !0) : a6l(230, L(83, [ag.zB[a0W[0]], ag.zB[target]]), 66, a0W[0], color, bB.nr, target, !0)
	}, this.a7M = function(player, target) {
		a6l(230, L(84, [ag.zB[player], ag.zB[target]]), 66, player, bB.nu, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7N = function(id, gT) {
		a75(id, gT)
	}, this.a0p = function(id, player) {
		a76(id, void 0 === player ? aD.ey : player)
	}, this.a7O = function(id) {
		for (var aB = a6Z.length - 1; 0 <= aB; aB--)
			if (a6Z[aB].id === id) return a6Z[aB];
		return null
	}, this.ph = function(a5e, a7P, player) {
		2 !== ag.a42[aD.el] && a6l(200, 1 === a5e ? L(85, [ag.zB[player]]) : L(86, [bA.rl.zz(a5e), ag.zB[player]]), 30, player, "rgb(190,255,190)", bB.nr, -1, !0)
	}, this.a7R = function(a5e, player) {
		2 !== ag.a42[aD.el] && (a75(31, 0), a5e = " (" + bA.rl.zz(a5e) + ") 💸", a6l(150, a5e = bA.gM.ji(player) ? L(87) + a5e : L(88, [ag.zB[player]]) + a5e, 31, player, bB.nl, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a0o = function(bu) {
		for (var eZ = bf.kI(), aB = 2; 0 <= aB; aB--) 0 < a6d.vJ[aB] && (bu || a6d.eZ[aB] < eZ - 220) && this.a7X(aB)
	}, this.a7X = function(id) {
		var qT, f1 = a6d.vJ[id],
			player = a6d.a0W[id];
		a6d.vJ[id] = 0, 1 === f1 ? (0 === id ? qT = L(95, [ag.zB[player], ag.zB[a6d.a6i[0]]]) : 1 === id ? qT = L(96, [ag.zB[player]]) : 2 === id ? qT = L(97, [ag.zB[player]]) : 3 === id && (qT = L(98, [ag.zB[player]])), a75(7, 0), a6l(a6d.eG[
			id], qT, 7, a6d.a6i[id], bB.nu, bB.nr, -1, !0)) : (qT = L(0 === id ? 99 : 1 === id ? 100 : 101, [f1]), a75(7, 0), a6l(a6d.eG[id], qT, 7, player, bB.nu, bB.nr, -1, !1))
	}, this.a77 = function(id, hS, ky) {
		var eZ = bf.kI(),
			f1 = a6d.vJ[id] + 1;
		a6d.vJ[id]++, a6d.a0W[id] = hS, a6d.a6i[id] = ky, 1 === f1 && (a6d.eZ[id] = eZ), (1 === f1 && (aD.a0l < 32 || 2 === aD.a0i) || 1 < f1 && (a6d.eZ[id] < eZ - 140 || 2 === aD.a0i)) && this.a7X(id)
	}, this.eU = function() {
		b2.eU();
		for (var ja = (ja = a6Z.length - a6e) <= 1 ? 1 : ja * ja, aB = a6Z.length - 1; 0 <= aB; aB--) 0 < a6Z[aB].eQ && (a6Z[aB].eQ -= ja, a6Z[aB].eQ <= 0) && (bf.dl = !0, a6Z.splice(aB, 1));
		! function() {
			var gT, aB;
			if (128 !== a6f && !(++a6f < 128))
				for (gT = 5, aB = al.kr - 1; 0 <= aB; aB--) 1 === ag.a42[al.kw[aB]] && 0 < gT-- && a6l(240, L(98, [ag.zB[al.kw[aB]]]), 1, al.kw[aB], bB.nl, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0o(!1)
	}, this.vK = function() {
		for (var xq, fA = yo(), aB = a6Z.length - 1; 0 <= aB; aB--) xq = fA - (aB + 1) * j, 50 === a6Z[aB].id ? (vL.drawImage(a6Z[aB].canvas, h.i - a6Z[aB].i - a6c - a6a, xq), vL.drawImage(a6g, h.i - a6c - a6a, xq)) : vL.drawImage(a6Z[aB].canvas,
			h.i - a6Z[aB].i - a6a, xq)
	}
}

function cF() {
	var a7Z, a7a, a7b, i, j, font, qT;

	function a7g(a7h) {
		return a7h < 10 ? "0" + a7h : String(a7h)
	}
	this.dd = function() {
		qT = L(102)
	}, this.resize = function() {
		i = Math.floor((a0.a1.i9() ? .53 : .36) * h.iA), j = Math.floor(.065 * i), font = bA.qm.sb(1, Math.floor(.9 * j)), a7b--, this.setTime()
	}, this.eU = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a7c = dt.getUTCMinutes(), a7d = dt.getUTCSeconds(), a7e = [0, 10, 20, 25, 30, 35, 40, 45, 50], a7f = (a7a = 3600 - 60 * a7c - a7d, a7a %= 300, 300), aB = 0; aB < a7e.length; aB++)
			if ((60 * a7c + a7d + a7a) % 3600 == 60 * a7e[aB]) {
				a7f = 0;
				break
			} return a7a += a7f, a7Z = qT + a7g(Math.floor(a7a / 60)) + ":" + a7g(a7a % 60), a7b !== (a7b = 60 * a7c + a7d) && (i = aQ.measureText(a7Z, font), i += Math.floor(.4 * j), !0)
	}, this.vK = function() {
		vL.lineWidth = 1 + Math.floor(j / 15), vL.translate(h.i - j, Math.floor(.5 * (h.j + i))), vL.rotate(-Math.PI / 2), vL.fillStyle = bB.nu, vL.fillRect(0, 0, i, j), vL.strokeStyle = bB.nl, vL.strokeRect(0, 0, i, j + 10), vL.fillStyle = bB
			.nl, vL.font = font, bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 1), vL.fillText(a7Z, Math.floor(i / 2), Math.floor(.59 * j)), vL.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a5d, a7i, a7j, xc, a7k, a7l = 0,
		a7m = 0;

	function a7o(aB) {
		var a7q = !0,
			zo = bB.nu,
			i = (1 === a5d[aB].id ? a5d[aB].ys.fillStyle = bB.oo : a5d[aB].jU === aD.ey ? a5d[aB].ys.fillStyle = bB.o5 : (ac.a7r(a5d[aB].jU), a5d[aB].ys.fillStyle = bA.color.no(bO.fZ[0], bO.fZ[1], bO.fZ[2], .87), 400 < bA.qu.a3A(bO.fZ, 0, 2) && (
				a7q = !1, zo = bB.nl)), a5d[aB].canvas.width),
			t8 = (a5d[aB].ys.clearRect(0, 0, i, xc), a5d[aB].ys.fillRect(0, 0, i, xc), a5d[aB].ys.fillStyle = zo, ! function(ys, i, xc) {
				ys.fillRect(0, 0, i, 1), ys.fillRect(0, xc - 1, i, 1), ys.fillRect(0, 0, 1, xc), ys.fillRect(i - 1, 0, 1, xc)
			}(a5d[aB].ys, i, xc), a7i + 2 * xc < i && (a5d[aB].ys.fillRect(i - a7i - xc, 0, 1, xc), a5d[aB].ys.fillText(ag.zB[a5d[aB].jU], Math.floor((i - a7i) / 2), Math.floor(.57 * xc))), 0 !== a5d[aB].id ? 0 : xc);
		a5d[aB].ys.fillText(bA.rl.zz(a5d[aB].hj), Math.floor(i - a7i / 2 - t8), Math.floor(.57 * xc)),
			function(aB, i, t8, a7q) {
				a5d[aB].ys.fillStyle = a7q ? bB.nw : bB.ns;
				a7q = Math.floor(a7i * a5d[aB].hj / a5d[aB].a7x);
				a5d[aB].ys.fillRect(Math.floor(i - a7i - t8), xc - a7k, a7q, a7k)
			}(aB, i, t8, a7q), 0 === a5d[aB].id ? (a7u(aB, i, a7q, zo), function(aB, i, a7q) {
				a5d[aB].ys.strokeStyle = a7q ? bB.oC : bB.oM, a5d[aB].ys.fillRect(xc, 0, 1, xc);
				a7q = i - xc;
				a5d[aB].ys.beginPath(), a5d[aB].ys.moveTo(Math.floor(.3 * xc + a7q), Math.floor(xc / 2)), a5d[aB].ys.lineTo(Math.floor(xc - .3 * xc + 0 + a7q), Math.floor(xc / 2)), a5d[aB].ys.stroke(), a5d[aB].ys.beginPath(), a5d[aB].ys.moveTo(
					Math.floor(xc / 2 + a7q), Math.floor(.3 * xc)), a5d[aB].ys.lineTo(Math.floor(xc / 2 + a7q), Math.floor(xc - .3 * xc + 0)), a5d[aB].ys.stroke()
			}(aB, i, a7q)) : a7u(aB, 2 * xc, a7q, zo)
	}

	function a7u(aB, i, a7q, zo) {
		a5d[aB].ys.strokeStyle = a5d[aB].a7y ? bB.o3 : a7q ? bB.oS : bB.oT, a5d[aB].ys.fillStyle = zo, a5d[aB].ys.fillRect(i - xc, 0, 1, xc), a5d[aB].ys.lineWidth = Math.max(Math.floor(xc / 12), 3), a5d[aB].ys.lineCap = "round";
		a7q = .35;
		i = xc + 1, a5d[aB].ys.beginPath(), a5d[aB].ys.moveTo(Math.floor(i - a7q * xc + 0), Math.floor(a7q * xc)), a5d[aB].ys.lineTo(Math.floor(i - xc + a7q * xc), Math.floor(xc - a7q * xc + 0)), a5d[aB].ys.stroke(), a5d[aB].ys.beginPath(), a5d[aB]
			.ys.moveTo(Math.floor(i - xc + a7q * xc), Math.floor(a7q * xc)), a5d[aB].ys.lineTo(Math.floor(i - a7q * xc + 0), Math.floor(xc - a7q * xc + 0)), a5d[aB].ys.stroke()
	}

	function a8A(g, a88) {
		for (var hj, aB = a88 - 1; 0 <= aB; aB--) hj = ad.gD(aD.el, aB), g[aB].hj !== hj && (g[aB].hj = hj, g[aB].a7x = Math.max(hj, g[aB].a7x), g[aB].a7p = !0)
	}

	function a8E(g, a8C) {
		for (var tL = aD.el << 3, a7E = bN.y.a7E, mC = bN.y.mC, a8G = bN.y.a8G, aB = a8C - 1; 0 <= aB; aB--) {
			var a8H = a8G[tL + aB],
				hj = a7E[a8H];
			g[aB].hj !== hj ? (g[aB].hj = hj, g[aB].a7x = Math.max(hj, g[aB].a7x), g[aB].a7p = !0) : g[aB].a7y || mC[a8H] % 64 != 5 || (g[aB].a7y = !0, g[aB].a7p = !0)
		}
	}

	function a7n(a5g) {
		a5g.canvas = document.createElement("canvas"), bS.xB.font = a7j;
		var i = a7i;
		a5g.jU < aD.ey && 0 === a5g.id && (i += Math.floor(bS.xB.measureText(ag.zB[a5g.jU] + "000").width)), i += xc, 0 === a5g.id && (i += xc), a5g.canvas.width = i, a5g.canvas.height = xc, a5g.ys = a5g.canvas.getContext("2d", {
			alpha: !0
		}), a5g.ys.font = a7j, bA.qm.textBaseline(a5g.ys, 1), bA.qm.textAlign(a5g.ys, 1)
	}

	function a84(aB) {
		return aU.a8I() ? h.i - a5d[aB].canvas.width - bc.gap : aU.f8
	}

	function a85(aB) {
		return Math.floor(2 * bc.gap + (aU.a8I() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * xc))
	}
	this.dd = function() {
		a7l = a7m = 0, a5d = [], this.resize()
	}, this.resize = function() {
		a7j = aN.a6M, xc = aN.fontSize + 5, xc = Math.floor(1.25 * xc), a0.a1.i9() && (xc = Math.floor(1.25 * xc)), a7k = Math.floor(.15 * xc), bS.xB.font = a7j, a7i = Math.floor(bS.xB.measureText("02 000 000 0000").width);
		for (var aB = a5d.length - 1; 0 <= aB; aB--) a7n(a5d[aB]), a7o(aB)
	}, this.mg = function() {
		for (var aB = a5d.length - 1; 0 <= aB; aB--) a5d[aB].a7p && (a5d[aB].a7p = !1, a7o(aB))
	}, this.hD = function(la, lb) {
		if (2 !== aD.a0i && 0 !== ag.mu[aD.el] && !aD.h9 && !bA.gM.ji(aD.el))
			for (var a7z, a80, a81, a82 = a0.a1.i9() ? xc : 0, a83 = a0.a1.i9() ? Math.floor(.15 * xc) : 0, aB = a5d.length - 1; 0 <= aB; aB--)
				if (a7z = a84(aB), a80 = a85(aB), a81 = a5d[aB].canvas.width, a80 - a83 <= lb && lb <= a80 + xc + a83) {
					if (a7z - a82 <= la && la <= a7z + xc + a82) return a5d[aB].a7y || (a5d[aB].a7p = !0, a5d[aB].a7y = !0, 0 === a5d[aB].id ? b8.hQ.pS(a5d[aB].jU) : b8.hQ.pR(a5d[aB].jU)), !0;
					if (0 === a5d[aB].id && a7z + a81 - xc - a82 <= la && la <= a7z + a81 + a82) return bV.a65(3), b8.hQ.hX(aR.hU(), a5d[aB].jU), !0
				} return !1
	}, this.eU = function() {
		var a3I, a3J, g, a88;
		0 === ag.mu[aD.el] || bA.gM.ji(aD.el) && !aD.h9 || (a3I = a5d.slice(0, a7l), a3J = a5d.slice(a7l, a7l + a7m), g = a3I, a88 = ad.g7(aD.el), function(g, a88) {
			if (a7l !== a88) return 1;
			for (var aB = a88 - 1; 0 <= aB; aB--)
				if (g[aB].jU !== ad.gC(aD.el, aB)) return 1;
			return
		}(g, a88) ? a8A(g = function(g, a88) {
			var aB, jU, fL, hj, a6n = [];
			loop: for (aB = 0; aB < a88; aB++) {
				for (jU = ad.gC(aD.el, aB), fL = 0; fL < g.length; fL++)
					if (g[fL].jU === jU) {
						a6n.push(g.splice(fL, 1)[0]);
						continue loop
					} hj = ad.gD(aD.el, aB), a7n(hj = {
					jU: jU,
					hj: hj,
					a7x: hj,
					id: 0,
					a7p: !0,
					a7y: !1,
					canvas: null,
					ys: null
				}), a6n.push(hj)
			}
			return a6n
		}(g, a88), a88) : a8A(g, a88), a3I = g, a3J = function(g) {
			var a8C = bN.y.kP[aD.el];
			return function(g, a8C) {
				if (a7m !== a8C) return 1;
				for (var tL = aD.el << 3, mE = bN.y.mE, a8G = bN.y.a8G, aB = a8C - 1; 0 <= aB; aB--) {
					var a8H = a8G[tL + aB];
					if (g[aB].jU !== mE[a8H]) return 1
				}
				return
			}(g, a8C) ? a8E(g = function(g, a8C) {
				var aB, jU, fL, a6n = [],
					tL = aD.el << 3,
					mE = bN.y.mE,
					a7E = bN.y.a7E,
					a8G = bN.y.a8G;
				loop: for (aB = 0; aB < a8C; aB++) {
					var a8H = a8G[tL + aB];
					for (jU = mE[a8H], fL = 0; fL < g.length; fL++)
						if (g[fL].jU === jU) {
							a6n.push(g.splice(fL, 1)[0]);
							continue loop
						} a8H = a7E[a8H], a7n(a8H = {
						jU: jU,
						hj: a8H,
						a7x: a8H,
						id: 1,
						a7p: !0,
						a7y: !1,
						canvas: null,
						ys: null
					}), a6n.push(a8H)
				}
				return a6n
			}(g, a8C), a8C) : a8E(g, a8C), g
		}(a3J), a7l = a3I.length, a7m = a3J.length, a5d = a3I.concat(a3J))
	}, this.vK = function() {
		if (0 !== ag.mu[aD.el] && (!bA.gM.ji(aD.el) || aD.h9))
			for (var aB = a5d.length - 1; 0 <= aB; aB--) vL.drawImage(a5d[aB].canvas, a84(aB), a85(aB))
	}
}

function cH() {
	var a6Z, kQ, a8J, a8K, j, a6M, fontSize, a8L, a8M, a8N, a8O, canvas, ys, n7, a8P;

	function vb(aB) {
		return L(0 === aB ? 103 : 1 === aB ? 104 : 2 === aB ? 105 : 106)
	}

	function a8W() {
		aD.hu ? a8X + 4 * bc.gap + j + bh.a8Y() > aR.fA ? vL.drawImage(canvas, 2 * bc.gap + bh.a8Y(), a8X + 2 * bc.gap) : vL.drawImage(canvas, bc.gap, a8X + 3 * bc.gap + bh.a8Y()) : vL.drawImage(canvas, bc.gap, a8X + 2 * bc.gap)
	}

	function a8Q() {
		canvas.width = a6Z[0].width + a8N, canvas.height = j + a8N, (ys = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6Z[0].width + a8N, j + a8N), ys.translate(Math.floor(a8N / 2), Math.floor(a8N / 2)), ys.lineWidth = a8N, ys.fillStyle = 1 === a6Z[0].a8V ? bB.nz : bB.nr, a8Z(), ys.fill(), ys.strokeStyle = 1 === a6Z[0].a8V ? bB.nl :
			bB.nu, a8Z(), ys.stroke(), bA.qm.textAlign(ys, 1), bA.qm.textBaseline(ys, 1), ys.fillStyle = 1 === a6Z[0].a8V ? bB.nl : bB.nu, ys.font = a6M[0], ys.fillText(vb(a6Z[0].a8U), Math.floor(a6Z[0].width / 2), Math.floor(.72 * a8L[0] * j)), ys
			.font = a6M[1], ys.fillText(a6Z[0].qT, Math.floor(a6Z[0].width / 2), Math.floor((a8L[0] + .48 * a8L[1]) * j))
	}

	function a8Z() {
		ys.beginPath(), ys.moveTo(a8O, 0), ys.lineTo(a6Z[0].width - a8O, 0), ys.lineTo(a6Z[0].width, a8O), ys.lineTo(a6Z[0].width, j - a8O), ys.lineTo(a6Z[0].width - a8O, j), ys.lineTo(a8O, j), ys.lineTo(0, j - a8O), ys.lineTo(0, a8O), ys.closePath()
	}
	this.dd = function() {
		kQ = 4, a8J = a8K = n7 = 0, a6Z = [], a6M = new Array(2), fontSize = new Array(2), (a8L = new Array(2))[0] = .3, a8L[1] = .7, a8M = new Array(4), canvas = document.createElement("canvas"), a8P = bf.eQ + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.i9() ? .062 : .047) * h.iA), fontSize[0] = Math.floor(.85 * a8L[0] * j), fontSize[1] = Math.floor(.85 * a8L[1] * j), a6M[0] = bA.qm.sb(1, fontSize[0]), a6M[1] = bA.qm.sb(1, fontSize[1]), aB = a8M.length -
			1; 0 <= aB; aB--) a8M[aB] = this.measureText(vb(aB) + "000", a6M[0]);
		if (a8N = Math.floor(1 + .05 * j), a8O = Math.floor(.2 * j), 0 < a6Z.length) {
			for (aB = a6Z.length - 1; 0 <= aB; aB--) i = this.measureText(a6Z[aB].qT + "00", a6M[1]), a6Z[aB].width = i < a8M[aB] ? a8M[aB] : i;
			a8Q()
		}
	}, this.eU = function() {
		0 !== kQ && (4 === kQ ? bf.eQ > a8P && (kQ = 0, 1 === aD.a0i) && aQ.a14(bS.x5.x6[bS.eh].name, 3, 1, 9) : (1 === kQ ? (0 === a8J && (a8Q(), a8J = 1e-4), 1 <= (a8J += .002 * (bf.eQ - n7)) && (a8K = 0, kQ = 2, a8J = 1), bf.dl = !0) : 2 ===
			kQ ? ((a8K += (bf.eQ - n7) / 1e3) > a6Z[0].eG || 1 < a8K && 1 < a6Z.length) && (kQ = 3) : 3 === kQ && ((a8J -= .002 * (bf.eQ - n7)) <= 0 && (a8J = 0, a6Z.shift(), kQ = 0 < a6Z.length ? 1 : 0), bf.dl = !0), n7 = bf.eQ))
	}, this.measureText = function(qT, a6M) {
		return vL.font = a6M, Math.floor(vL.measureText(qT).width)
	}, this.eY = function(a8T, aB) {
		this.a14(ag.zB[a8T], aB, 1, 0 === aB ? 3 : 7)
	}, this.a14 = function(qT, a8U, a8V, eG) {
		var i;
		qT.length && (i = (i = this.measureText(qT + "00", a6M[1])) < a8M[a8U] ? a8M[a8U] : i, a6Z.push({
			qT: qT,
			width: i,
			a8U: a8U,
			a8V: a8V,
			eG: eG
		}), 0 === kQ) && (a8J = 0, kQ = 1, n7 = bf.eQ)
	}, this.vK = function() {
		0 !== kQ && 0 !== a8J && (a8J < 1 ? (vL.globalAlpha = a8J, a8W(), vL.globalAlpha = 1) : a8W())
	}
}

function cq() {
	var j, canvas, ys, a8a, a8b, a8c, a8d, a7p, a8e, a8f, a8g, a8h, a7K = !1,
		a3W = (this.hm = !1, this.i = 0, new Array(2)),
		a8i = 0;

	function mh() {
		var i = aw.i,
			lG = (a7p = !1, yr(ys, i, j), Math.floor(i / 2));
		1 === a8a ? (ys.fillStyle = bB.oE, ys.fillRect(lG, 0, lG, j)) : -1 === a8a && (ys.fillStyle = bB.oU, ys.fillRect(0, 0, lG, j)), yt(ys, i, j, 2);
		var lG = (lG = Math.floor(.25 * j)) < 2 ? 2 : lG,
			a7T = (ys.fillStyle = bB.o0, Math.floor((j - 4) * a8b[1] / a8c[1]));
		0 < a7T && ys.fillRect(2, j - 2 - a7T, lG, a7T), 0 < (a7T = Math.floor((j - 4) * a8b[0] / a8c[0])) && ys.fillRect(i - 2 - lG, j - 2 - a7T, lG, a7T);
		lG = (lG = Math.floor(j / 8)) < 2 ? 2 : lG, yv(ys, Math.floor(.4 * j), 0, j, lG, .5, !1), yv(ys, Math.floor(i - 1.4 * j), 0, j, lG, .5, !0), a7T = 1.1 * j / a3W[0].width;
		ys.imageSmoothingEnabled = !0, ys.setTransform(a7T, 0, 0, a7T, (i - a7T * a3W[0].width) / 2, -.05 * j), ys.drawImage(a3W[+a7K], 0, 0), ys.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8n() {
		a8h = -1, a7K = ah.a8o(), aN.a50(257), aN.a7J(a7K), aw.hm = !0, a7p = !0, a8e = 360;
		for (var fS, dt = 0, aB = al.kr - 1; 0 <= aB; aB--) bA.gM.ji(al.kw[aB]) || (dt += ag.go[al.kw[aB]]);
		a7K ? a8c[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hu ? 9 === aD.kd && 8 === bg.ki[bh.ku()] ? a8c[0] = Math.max(dt, 1) : (fS = bL.du(100 * bh.ks(), aD.k5), fS = bL.i8(200 - 2 * fS, 40, 100), fS = bL.du(fS * dt, 100), a8c[0] = Math.max(fS,
			1)) : 8 === aD.kd ? a8c[0] = Math.max(bL.du(3 * dt, 4), 1) : a8c[0] = Math.max(bL.du(3 * dt, 5), 1), a8c[1] = Math.max(dt - a8c[0], 1)
	}

	function a8j() {
		a8g = bf.kI(), a7p = !0, a8e = a8a = 0, a8d = [], aw.hm = !1, aN.a0p(247), a8b[0] = a8b[1] = 0, aN.a50(673)
	}

	function yo() {
		return aR.a6y(aN.a6u()) ? __fx.settings.keybindButtons ? aR.fA - 2 * (j + bc.gap) : aR.fA - j - bc.gap : bC.a6y(aN.a6x()) ? bC.yo() - j - bc.gap : h.j - j - bk.a5l() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a3W[aB] = bA.canvas.zS(ab.get(3), 8 - aB, bB.p6), a3W[aB] = bA.canvas.a3Y(a3W[aB])
	}, this.dd = function() {
		a8g = -1e4, a8f = a8i = 0, a8h = -1, this.hm = !1, a7p = a7K = !1, a8b = [a8a = a8e = 0, 0], a8c = [1, 1], a8d = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, ys = canvas.getContext("2d", {
			alpha: !0
		}), mh()
	}, this.mg = function() {
		a7p && mh()
	}, this.hD = function(f8, fA) {
		return !!this.hm && !(f8 < h.i - this.i - bc.gap || fA < yo() || (aD.h9 || this.hn(aD.el) && (aM.hA && aM.a2n(), b8.hQ.ho(f8 > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eU = function() {
		0 < a8f ? 0 === --a8f && a8j() : this.hm ? 180 == --a8e && 3 * a8b[0] < a8c[0] ? a8j() : a8b[0] >= a8c[0] ? a7K ? bR.a0K.a0d() : bR.a0K.a0h() : a8b[1] >= a8c[1] ? a8f = 4 : a8e <= 0 && a8j() : ! function() {
			var a8q = bf.kI();
			if (a8q % 40 == 14) {
				if (a8i) return !(a8q < a8i) && !(a8q < a8g + 535) && (a8i = a8q + 1071, bA.gM.a45()) ? (a8n(), 1) : 0;
				(1 === al.kr || (aD.hu ? bh.ks() : ag.go[lw[0]]) >= bL.du(96 * aD.k5, 100)) && (a8i = a8q + 535)
			}
			return
		}() && 0 <= a8h && (aN.zA(250, L(107, [ag.zB[a8h]]), 673, a8h, bB.nu, bB.nr, -1, !0), a8n())
	}, this.a0j = function() {
		this.hm && a8b[0] < a8c[0] && a8j()
	}, this.qM = function(player, a8r) {
		var a8s = L(a8r ? 108 : 109, [ag.zB[player]]),
			a8s = (aN.zA(450, a8s, 257, player, a8r ? bB.oC : bB.oR, bB.nr, -1, !0), a8d.push(player), a7p = !0, aD.kf ? Math.max(a8c[0], a8c[1]) : ag.go[player]),
			a8s = Math.max(a8s, 1);
		a8r ? a8b[0] += a8s : a8b[1] += a8s, player === aD.el && (a8a = a8r ? 1 : -1)
	}, this.vK = function() {
		var fA;
		this.hm && (fA = yo(), vL.drawImage(canvas, h.i - this.i - bc.gap, fA))
	}, this.hp = function(player) {
		return 0 === a8e && !!bA.gM.hB(1) && !!bA.gM.hC(player) && !(10 <= k6[player] && !bA.gM.a4O(player, 9) || !aD.kf && ((player = bf.kI()) < a8g + 100 || player < 1607 || 9 === aD.kd && !bh.a8u()))
	}, this.hn = function(gY) {
		if (!bA.gM.hB(1)) return !1;
		if (!bA.gM.hC(gY)) return !1;
		if (!this.hm) return !1;
		for (var aB = a8d.length - 1; 0 <= aB; aB--)
			if (a8d[aB] === gY) return !1;
		return !0
	}, this.hl = function(player) {
		a8h = player
	}
}

function cI() {
	var i, f8, a8v, canvas, ys, hm, ia, a4r, a6M, a7p, a8w = 11 / 12;

	function a8y() {
		var a7w = Math.floor(ia * (i - 2 * a8v)),
			a91 = 1 + Math.floor(.0625 * aR.j),
			a92 = 1 + Math.floor(.3 * aR.j),
			a93 = Math.floor(.55 * aR.j);
		ys.clearRect(0, 0, i, aR.j), ys.fillStyle = bB.nq, ys.fillRect(0, 0, a8v, aR.j), ys.fillRect(a8v + a7w, 0, i - a8v - a7w, aR.j), ys.fillStyle = ia < 1 / 3 ? "rgba(" + Math.floor(3 * ia * 130) + ",130,0,0.85)" : ia < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ia - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ia - 2 / 3) * 130) + ",0.85)", ys.fillRect(a8v, 0, a7w, aR.j), ys.fillStyle = bB.nu, ys.fillRect(0, 0, i, 1), ys.fillRect(0, aR.j - 1, i, 1), ys
			.fillRect(0, 0, 1, aR.j), ys.fillRect(a8v, 0, 1, aR.j), ys.fillRect(a8v + a7w, 0, 1, aR.j), ys.fillRect(i - a8v, 0, 1, aR.j), ys.fillRect(i - 1, 0, 1, aR.j), ys.fillRect(Math.floor(.25 * aR.j) + a92, Math.floor((aR.j - a91) / 2), aR.j -
				2 * a92, a91), ys.fillRect(Math.floor(i - 1.25 * aR.j) + a92, Math.floor((aR.j - a91) / 2), aR.j - 2 * a92 - a92 % 2, a91), ys.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a91) / 2), a92, a91, aR.j - 2 * a92 - a92 % 2),
			a4r = bA.gM.iZ(aD.el, aR.hU()), ys.fillText(bA.rl.zz(a4r) + " (" + bA.rl.a4k(100 * ia, +(ia < .1)) + ")", Math.floor(.5 * i), a93)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ia = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2j(arg1);

	function a98(a35) {
		return !(1 < a35 && 1 === ia || (1 < a35 && a35 * ia - ia < 1 / 1024 ? a35 = (ia + 1 / 1024) / ia : a35 < 1 && ia - a35 * ia < 1 / 1024 && (a35 = (ia - 1 / 1024) / ia), ia = bL.i8(ia * a35, 1 / 1024, 1), a8y(), 0))
	}

	function a99(la) {
		return ia !== (ia = bL.i8((la - f8 - a8v) / (i - 2 * a8v), 1 / 1024, 1)) && (a8y(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8y(), bf.dl = !0
	}, this.fA = 0, this.hE = !1, this.dd = function() {
		hm = !aD.hO && !aD.h9, a7p = !1, ia = .5, a4r = 0, this.hE = !1, this.resize()
	}, this.resize = function() {
		a0.a1.i9() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iA), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.i9() ? .65 : .389) * h.iA), i += 12 - i % 12, this.j = Math.floor(i / 12)), a8v = Math.floor(3 * this.j / 2), a6M =
			bA.qm.sb(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vL), canvas.height = this.j, (ys = canvas.getContext("2d", {
				alpha: !0
			})).font = a6M, bA.qm.textBaseline(ys, 1), bA.qm.textAlign(ys, 1), this.a8x(), a8y()
	}, this.a8x = function() {
		f8 = a0.a1.i9() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.fA = h.j - this.j - bk.a5l() * bc.gap
	}, this.mg = function() {
		a7p && (a7p = !1, a8y())
	}, this.hm = function() {
		return !(!hm || aM.hA && f8 < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6y = function(a94) {
		return !!this.hm() && f8 + i > h.i - a94 - bc.gap
	}, this.a4y = function() {
		hm = !aD.h9
	}, this.a8j = function() {
		hm = !1
	}, this.hU = function() {
		return bL.i8(Math.floor(1024 * ia + .5) - 1, 0, 1023)
	}, this.a2g = function(la, lb) {
		return this.hm() && f8 < la && la < f8 + i && lb > this.fA
	}, this.hD = function(la, lb) {
		if (!this.hm()) return !1;
		if (!(__fx.settings.keybindButtons && lb > this.fA - Math.floor(bc.gap / 4) - this.j && lb < this.fA - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(la - f8))) {
			if (!aR.a2g(la, lb)) return !1;
			aS.nP = !1, ! function(sO, la, lb) {
				if (function(la, lb) {
						return f8 < la && la < f8 + a8v && lb > aR.fA
					}(la, lb)) return a98(a8w);
				if (function(la, lb) {
						return f8 + i - a8v < la && la < f8 + i && lb > aR.fA
					}(la, lb)) return a98(1 / a8w);
				return sO.hE = !0, a99(la)
			}(this, la, lb) || (bf.dl = !0)
		}
		return !0
	}, this.a2j = function(nW) {
		0 !== aD.a0i && this.hm() && a98(nW) && (bf.dl = !0)
	}, this.a2F = function(deltaY) {
		var nW;
		return !(0 === deltaY || !this.hm()) && a98(nW = 0 < deltaY ? (nW = 400 / (400 + deltaY)) < a8w ? a8w : nW : 1 / a8w < (nW = (400 - deltaY) / 400) ? 1 / a8w : nW)
	}, this.a2C = function(la) {
		return !!this.hE && a99(la)
	}, this.a2c = function() {
		this.hE = !1
	}, this.eU = function() {
		this.hm() && a4r !== bA.gM.iZ(aD.el, this.hU()) && (a7p = !0)
	}, this.vK = function() {
		this.hm() && (vL.drawImage(canvas, f8, this.fA), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vL, f8, this.fA)
	}
}

function d0() {
	var canvas, ys, a9A, font, a9B = 0,
		a9C = !1,
		a9D = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9E = 5;

	function a9L() {
		if (a9C) {
			var aB, f1 = a9D.length,
				a93 = Math.floor(.5 * a9A.j),
				j = f1 * a93,
				f8 = Math.floor(Math.floor(a9A.f8) + .3 * a9A.i - .5),
				fA = Math.floor(Math.floor(a9A.fA) - j),
				i = Math.floor(.4 * a9A.i + 2.5);
			for (vL.fillStyle = bB.nq, vL.fillRect(f8, fA, i, j), vL.fillStyle = bB.oJ, vL.fillRect(f8, fA + a9E * a93, i, a93), vL.fillStyle = bB.nu, vL.fillRect(f8, fA, 2, j), vL.fillRect(f8, fA, i, 2), vL.fillRect(f8 + i - 2, fA, 2, j), aB =
				1; aB < f1; aB++) vL.fillRect(f8, fA + aB * a93, i, 2);
			for (vL.fillStyle = bB.nu, bA.qm.textAlign(vL, 1), bA.qm.textBaseline(vL, 1), vL.font = bA.qm.sb(0, .6 * a93), f8 += .5 * i, aB = 0; aB < f1; aB++) vL.fillText(a9T(aB), f8, fA + (aB + .6) * a93)
		}
		vL.drawImage(canvas, Math.floor(a9A.f8), Math.floor(a9A.fA))
	}

	function mh(sO) {
		var f8, nK, nL, a93;
		ys.clearRect(0, 0, Math.floor(a9A.i), Math.floor(a9A.j)), ys.fillStyle = bB.nq, ys.fillRect(0, 0, Math.floor(a9A.i), Math.floor(a9A.j)), aD.nN && (ys.fillStyle = bB.oJ, ys.fillRect(0, 0, Math.floor(.3 * a9A.i), Math.floor(a9A.j))), ys
			.fillStyle = bB.nu, ys.fillText("Hide UI", .15 * a9A.i, .5 * a9A.j), ys.fillRect(Math.floor(.3 * a9A.i - .5), 0, 2, Math.floor(a9A.j)), f8 = .5 * a9A.i, ys.fillText("Replay Speed", f8, .31 * a9A.j), ys.fillText(a9T(a9E), f8, .69 * a9A.j),
			ys.fillRect(Math.floor(.7 * a9A.i - .5), 0, 2, Math.floor(a9A.j)), sO.a5V ? (f8 = Math.floor(.02 * a9A.i), sO = Math.floor(.025 * a9A.i), nK = Math.floor(.85 * a9A.i - f8 - .5 * sO), nL = Math.floor(.25 * a9A.j), a93 = Math.floor(a9A.j) -
				2 * nL, ys.fillRect(nK, nL, f8, a93), ys.fillRect(nK + f8 + sO, nL, f8, a93)) : function() {
				var i = Math.floor(.46 * a9A.j),
					j = Math.floor(.23 * a9A.j),
					f8 = Math.floor(.85 * a9A.i - .5 * i + i / 12),
					fA = Math.floor(.5 * a9A.j - j);
				ys.beginPath(), ys.moveTo(f8, fA), ys.lineTo(f8 + i, fA + j), ys.lineTo(f8, fA + (j << 1)), ys.fill()
			}(), ys.fillRect(0, 0, Math.floor(a9A.i), 2), ys.fillRect(0, 0, 2, Math.floor(a9A.j)), ys.fillRect(0, Math.floor(a9A.j) - 2, Math.floor(a9A.i), 2), ys.fillRect(Math.floor(a9A.i - 2), 0, 2, Math.floor(a9A.j))
	}

	function a9T(aB) {
		return 5 === aB ? "Normal" : "" + a9D[aB]
	}
	this.a5V = !1, this.dd = function() {
		aD.h9 && (a9E = 5, this.a5V = !1, a9C = !1, a9A = new rN([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9F = function() {
		return a9D[a9E]
	}, this.yo = function() {
		return a9A.fA
	}, this.a6y = function(a94) {
		return !!aD.h9 && a9A.f8 + a9A.i > h.i - a94 - bc.gap
	}, this.resize = function() {
		aD.h9 && (a9A.resize(), a9A.fA -= (bk.a5l() - 1) * bc.gap, font = bA.qm.sb(0, .3 * a9A.j), (canvas = document.createElement("canvas")).width = Math.floor(a9A.i), canvas.height = Math.floor(a9A.j), (ys = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qm.textAlign(ys, 1), bA.qm.textBaseline(ys, 1), mh(this))
	}, this.a2m = function(a9G) {
		0 === aD.a0i || t.hm() || a9G !== aD.nN && (aD.nN = a9G, bh.resize(), bf.dl = !0, aD.h9) && (a9B = bf.eQ + 2e3, mh(this))
	}, this.hD = function(f8, fA) {
		if (!aD.h9) return !1;
		if (f8 < a9A.f8 || fA < a9A.fA || f8 > a9A.f8 + a9A.i) return a9C && function(sO, f8, fA) {
			var f1 = a9D.length,
				a93 = Math.floor(.5 * a9A.j),
				j = f1 * a93,
				nK = Math.floor(Math.floor(a9A.f8) + .3 * a9A.i - .5),
				j = Math.floor(Math.floor(a9A.fA) - j),
				i = Math.floor(.4 * a9A.i + 2.5);
			return a9C = !1, bf.dl = !0, f8 < nK || nK + i < f8 || fA < j || (a9E = a9K(0, Math.floor((fA - j) / a93), f1 - 1), mh(sO)), !0
		}(this, f8, fA);
		if ((f8 -= a9A.f8) < .3 * a9A.i) a9C = !1, this.a2m(!aD.nN);
		else {
			if (f8 < .7 * a9A.i) return a9C = !a9C, bf.dl = !0;
			this.a2o(!1)
		}
		return !0
	}, this.a2o = function(a9I) {
		2 === aD.a0i ? (this.a2m(!1), t.u(3)) : (a9C = !1, this.a5V = !this.a5V, this.a5V ? (aM.hA && aM.a2n(), a0.a1.setState(1)) : a9I || aM.a6S(), bf.dl = !0, mh(this))
	}, this.a9J = function() {
		this.a5V = !1, aM.a6S(), bf.dl = !0, mh(this)
	}, this.a2V = function(f8, fA) {
		return !!aD.nN && (0 <= aM.hD(f8, fA) || (aD.h9 ? ((bf.eQ > a9B || !this.hD(f8, fA)) && aS.hD(f8, fA), bf.dl = !0, a9B = bf.eQ + 2e3) : aS.hD(f8, fA)), !0)
	}, this.eU = function() {
		aD.h9 && aD.nN && bf.eQ > a9B - 1e3 && bf.eQ < a9B && (bf.dl = !0)
	}, this.a0q = function() {
		aD.h9 && (this.a5V = !1, bf.dl = !0, mh(this))
	}, this.vK = function() {
		if (aD.h9) {
			if (aD.nN) {
				if (bf.eQ > a9B) return;
				if (bf.eQ > a9B - 1e3) return vL.globalAlpha = a9K(0, (1e3 - (bf.eQ - (a9B - 1e3))) / 1e3, 1), a9L(), void(vL.globalAlpha = 1)
			}
			a9L()
		}
	}
}

function cJ() {
	var a9U, a9V, i, f8, fA, a9W, a9X;
	this.dd = function() {
		a9U = new Array(2), a9V = new Array(2), this.nP = !1, a9X = a9W = ic = ib = 0, iB = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.i9() ? .072 : .0502) * h.iA)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a9U[aB] = document.createElement("canvas"), a9U[aB].width = i, a9U[aB].height = i, a9V[aB] = a9U[aB].getContext("2d", {
			alpha: !0
		});
		this.a8x(),
			function() {
				for (var a9o = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a9V[aB].clearRect(0, 0, i, i), a9V[aB].fillStyle = bB.nn, a9V[aB].beginPath(), a9V[aB].arc(i / 2, i / 2, i / 2 - a9o, 0, 2 * Math.PI), a9V[aB].fill(), a9V[aB]
					.lineWidth = a9o, a9V[aB].fillStyle = bB.nu, a9V[aB].strokeStyle = bB.nu, a9V[aB].beginPath(), a9V[aB].arc(i / 2, i / 2, i / 2 - a9o, 0, 2 * Math.PI), a9V[aB].stroke(), yv(a9V[aB], 0, 0, i, a9o, .3, 0 === aB)
			}()
	}, this.yn = function() {
		return -ib / iB
	}, this.yo = function() {
		return -ic / iB
	}, this.nZ = function(a9b, iH) {
		ib = iB * a9b - iH
	}, this.na = function(a9c, iI) {
		ic = iB * a9c - iI
	}, this.hD = function(a9a, a6z) {
		return aD.nN || ! function(a9a, a6z) {
			return Math.pow(a9a - (f8 + i / 2), 2) + Math.pow(a6z - (fA + i / 2), 2) < i * i / 4 || Math.pow(a9a - (f8 + i / 2), 2) + Math.pow(a6z - (fA + 2 * i), 2) < i * i / 4
		}(a9a, a6z) || bj.eN.data[8].value ? (aH.nc() && (this.nP = !0, a9W = a9a, a9X = a6z), !1) : a6z < fA + 1.25 * i ? this.a2F(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2F(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2C = function(a9a, a6z) {
		var a9d, a9e, iK, iN;
		return !aH.nc() || (a9d = ib, a9e = ic, ib += iK = a9W - a9a, ic += iN = a9X - a6z, af.a2C(iK, iN), this.a9f(), a9W = a9a, a9X = a6z, a9d !== ib) || a9e !== ic
	}, this.a2F = function(la, lb, deltaY) {
		var nW;
		if (aH.nc()) {
			if (0 < deltaY) nW = (nW = 500 / (500 + deltaY)) < .5 ? .5 : nW;
			else {
				if (!(deltaY < 0)) return !1;
				nW = 2 < (nW = (500 - deltaY) / 500) ? 2 : nW
			}
			this.a9g(la, lb, nW), bf.dl = !0
		}
		return !0
	}, this.a9g = function(f8, fA, ef) {
		var a35;
		ef = a35 = (a35 = 1024 < (a35 = ef) * iB ? 1024 / iB : a35) * iB < .125 ? .125 / iB : a35, af.zoom(ef, f8, fA),
			function(a35, la, lb) {
				iB *= a35, ib = (ib + la) * a35 - la, ic = (ic + lb) * a35 - lb, aS.a9f()
			}(ef, f8, fA)
	}, this.a9f = function() {
		var a9j = h.i / 16,
			a9k = 0,
			a9l = h.j / 16,
			a9m = 0;
		ib < -h.i + a9j && (a9k = -h.i + a9j - ib), ib > iB * bS.fC - a9j && (a9k = iB * bS.fC - a9j - ib), ic < -h.j + a9l && (a9m = -h.j + a9l - ic), ic > iB * bS.fD - a9l && (a9m = iB * bS.fD - a9l - ic), ib += a9k, ic += a9m, ba.nb(), af.a9n(
			a9k, a9m)
	}, this.a8x = function() {
		f8 = h.i - i - bc.gap, fA = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vK = function() {
		bj.eN.data[8].value || (vL.drawImage(a9U[0], f8, fA), vL.drawImage(a9U[1], f8, Math.floor(fA + 3 * i / 2)))
	}
}

function cK() {
	var g, a9p, a9q, a9r, gap, a9s, a9t, a9u, a9v, a9w, a6M, a9x, h5, a9y, a7w, a9z, aA0;

	function aA4() {
		a9r = Math.floor(.2 * (a0.a1.i9() ? .07 : .035) * h.iA), a9r = a6w(a0.a1.i9() ? 3 : 1, a9r);
		var aA7 = h.i / (g.length + gap);
		a9r = a9r < aA7 ? aA7 : a9r, a7w = Math.floor((1 - gap) * a9r), a9p = 0, aA8()
	}

	function aA8() {
		a9p = (a9p = a9p < -20 ? -20 : a9p) > (g.length - 15) * a9r ? (g.length - 15) * a9r : a9p, a9t = Math.floor(a9p / a9r), a9u = (a9u = a9t + Math.floor(h.i / a9r)) > g.length - 1 ? g.length - 1 : a9u, a9t = (a9t = a9u < a9t ? a9u : a9t) < 0 ?
			0 : a9t;
		var lG = a9u;
		a9s = a9q / g[lG];
		for (var aB = a9u - 1; a9t <= aB; aB--) g[aB] > g[lG] && (lG = aB, a9s = a9q / Math.pow(g[aB], a9y))
	}

	function aAB(f8) {
		f8 = Math.floor((a9p + h.i - f8 - gap * a9r) / a9r);
		return (f8 = f8 < -1 ? -1 : -1 === f8 ? 0 : f8 > g.length - 1 ? -1 : f8) !== a9v && (a9v = f8, -1 === a9z && 0 === a9v && aT.aA1 && (a9z = setInterval(aAC, 100)), 1)
	}

	function aAD(aB) {
		var aAF = Math.floor(a9s * Math.pow(g[aB], a9y));
		vL.fillRect(a9p + h.i - (aB + 1) * a9r, h.j - aAF, a7w, aAF)
	}

	function aAC() {
		var gY;
		0 !== (a9v = 8 === aa.a1t() ? -1 : a9v) ? (aA0 = (new Date).getTime(), clearInterval(a9z), a9z = -1) : (gY = g[1] / 864e3, -1 !== aA0 && (gY += ((new Date).getTime() - aA0) * g[1] / 864e5, aA0 = -1), 0 < gY && (g[0] += Math.floor(gY), bf
			.dl = !0))
	}
	this.aA1 = !1, this.dd = function() {
		aA0 = a9z = -1, a9v = -(a9y = 1), this.aA2 = !1, h5 = 0, a9x = new Date, a9p = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a9q = Math.floor(.15 * h.j), a9w = (a9w = Math.floor((a0.a1.i9() ? .018 : .0137) * h.iA)) < 2 ? 2 : a9w, a6M = bA.qm.sb(1, a9w), aA4()
	}, this.aA5 = function(aA6) {
		var aB;
		for (this.aA1 = !0, aB = 0; aB < aA6.length; aB++) g.unshift(aA6[aB]);
		aA4(), bf.dl = !0
	}, this.aA9 = function() {
		aA8()
	}, this.a2C = function(f8, fA) {
		fA > h.j - .6 * a9q ? this.aA2 ? f8 !== h5 && (a9p += f8 - h5, h5 = f8, aA8(), aAB(f8), this.aA2 = -1 !== a9v, bf.dl = !0) : aAB(f8) && (bf.dl = !0) : this.rn()
	}, this.rn = function() {
		-1 !== a9v && (this.aA2 = !1, a9v = -1, bf.dl = !0)
	}, this.a2F = function(f8, deltaY) {
		-1 !== a9v && (a9p += Math.floor(deltaY), aA8(), aAB(f8), bf.dl = !0)
	}, this.hD = function(f8, fA) {
		this.a2C(f8, fA), -1 !== a9v && (h5 = f8, this.aA2 = !0)
	}, this.a2b = function() {
		-1 !== a9v && (this.aA2 = !1)
	}, this.vK = function() {
		vL.fillStyle = bB.nx;
		for (var aAG, month, dt, t9, aAJ, aAK, nL, aAL, aAM, aB = a9u; a9t <= aB; aB--) aAD(aB);
		this.aA1 && 0 === a9t && (vL.fillStyle = bB.oU, aAD(0)), -1 !== a9v && (vL.fillStyle = bB.nw, aAD(a9v)), -1 !== a9v && (vL.font = a6M, bA.qm.textBaseline(vL, 2), (dt = new Date).setTime(a9x.getTime() - 1e3 * a9v * 60 * 60 * 24), month =
			"month", aAG = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), aAG = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), aAG = aAG + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a9v] ? L(110) : L(111), month = bA.rl.zz(g[a9v]) + " " + month, dt = Math.floor(vL.measureText(aAG).width), t9 = Math
			.floor(vL.measureText(month).width), aAJ = Math.floor(.5 * (dt + a9w)), aAK = (aAK = a9p + h.i - (a9v + 1) * a9r) < aAJ ? aAJ : aAK > h.i - aAJ ? h.i - aAJ : aAK, nL = h.j - Math.floor(a9s * Math.pow(g[a9v], a9y)), aAL = Math
			.floor(1.1 * a9w), aAM = nL > h.j - aAL ? h.j - aAL : nL, vL.fillStyle = bB.nr, vL.fillRect(h.i - t9 - a9w, aAM - aAL, t9 + a9w, aAL), vL.fillRect(aAK - aAJ, h.j - aAL, dt + a9w, aAL), vL.fillStyle = bB.nu, bA.qm.textAlign(vL, 2),
			vL.fillText(month, Math.floor(h.i - .5 * a9w), aAM), bA.qm.textAlign(vL, 1), vL.fillText(aAG, aAK, h.j), vL.strokeStyle = bB.ny, vL.lineWidth = 1, vL.beginPath(), vL.moveTo(0, nL), vL.lineTo(h.i, nL), vL.closePath(), vL.stroke())
	}
}

function cL() {
	var a6M, i, fA, aAN, aAO, aAP, canvas, ys, a7p, a4C, aAQ, aAR, aAS, aAT;
	this.f8 = 0, this.j = 0, this.dd = function() {
		aAP = aD.a56, aAR = "rgba(0,100,0,0.8)", aAS = "rgba(150,0,0,0.8)", a7p = aAQ = !0, a4C = ag.h2[aD.el], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.i9() ? .305 : .24) * h.iA), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6M = bA.qm.sb(1, Math.floor(.8 * this.j)), aAO = bA.qm.sb(1, Math.floor(.45 * this.j)), aAT = Math.floor(.5 * this.j), bS.xB
			.font = a6M, fA = bc.gap, aAN = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, ys = canvas.getContext("2d", {
				alpha: !0
			}), bA.qm.textBaseline(ys, 1), bA.qm.textAlign(ys, 1), this.aAU()
	}, this.a8I = function() {
		return a0.a1.i9() && h.i < 1.2 * h.j
	}, this.a8x = function() {
		this.a8I() ? this.f8 = h.i - i - bc.gap : this.f8 = Math.floor(aV.aAV() + (h.i - aV.aAV() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mg = function() {
		a7p && (a7p = !1, this.aAU())
	}, this.aAU = function() {
		ys.font = a6M, ys.clearRect(0, 0, i, this.j), ys.fillStyle = aAQ ? aAR : aAS, ys.fillRect(0, 0, i, this.j), ys.fillStyle = bB.nw;
		var eZ = this.aAW(),
			aAY = (this.aAX(), ys.fillStyle = ag.h2[aD.el] >= ae.k1(aD.el) ? bB.oR : bB.nu, bA.rl.zz(a4C)),
			aAY = (ys.fillText(aAY, Math.floor(i / 2), aAT), ys.measureText(aAY).width),
			eZ = (ys.font = aAO, ys.fillStyle = 9 === eZ ? bB.p0 : bB.nu, ae.aAa),
			aAb = "+" + eZ,
			t9 = ys.measureText(aAb).width,
			aAc = Math.floor(this.j / 12),
			aAY = .5 * (i + aAY) + aAc;
		(aAY + t9 + aAN <= i || 1e3 <= eZ && (aAb = "+" + Math.floor(eZ / 1e3) + "K", aAY + (t9 = ys.measureText(aAb).width) + aAN <= i)) && ys.fillText(aAb, Math.floor(aAY + .5 * t9), Math.floor(.3 * this.j)), ys.fillStyle = bB.nu, ys.fillRect(
			0, 0, i, 1), ys.fillRect(0, 0, 1, this.j), ys.fillRect(0, this.j - 1, i, 1), ys.fillRect(i - 1, 0, 1, this.j)
	}, this.aAW = function() {
		var eZ = bf.kI() % 100,
			xq = (eZ = 9 - bL.du(eZ -= eZ % 10, 10), Math.floor(eZ * (this.j - aAN) / 9));
		return ys.fillRect(0, xq, aAN, this.j - xq), ys.fillRect(i - aAN, xq, aAN, this.j - xq), eZ
	}, this.aAX = function() {
		ys.fillRect(aAN, this.j - aAN, Math.floor((i - 2 * aAN) * ag.h2[aD.el] / aAP), aAN)
	}, this.eU = function() {
		var gY = aD.el;
		bA.gM.hC(gY) && (gY = ag.h2[gY] - ag.a4B[gY], a4C !== gY ? (aAP = a6w(gY, aAP), aAQ = a4C < gY && 10 <= gY, a4C = gY, a7p = !0) : bf.kI() % 10 == 9 && (a7p = !0))
	}, this.vK = function() {
		0 === ag.mu[aD.el] || aD.hO || 2 === ag.a42[aD.el] || vL.drawImage(canvas, this.f8, fA)
	}
}

function cM() {
	var aAd, aAe, aAf, aAg, aAh, aAi, aAj, aAk, aAl, aAm, aAn, aAo, aAp, aAq, aAr, aAs, aAt, aAu, aAv, aAw, aAx, aAy, position, aAz, aB0, aB1, aB2, aB3 = 1,
		aB4 = 1,
		aB5 = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.el;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => k6[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(k6[aD.el]);
	}

	function aB7() {
		aAj.clearRect(0, 0, aAd, a8X),
			aAj.fillStyle = bB.ol,
			aAj.fillRect(0, 0, aAd, aAo),
			aAj.fillStyle = bB.nq,
			aAj.fillRect(0, aAo, aAd, a8X - aAo);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			k6[aD.el]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aAy = -1;
		if (__fx.leaderboardFilter.enabled && aAy >= __fx.leaderboardFilter.filteredLeaderboard.length) aAy = -1;
		playerPos >= position && aB9(playerPos - position, bB.oJ),
			0 !== k6[aD.el] && 0 === position && aB9(0, bB.or),
			-1 !== aAy && aB9(aAy, bB.nv),
			aAj.fillStyle = bB.nq,
			//console.log("drawing", aAy),
			aAj.clearRect(0, a8X - __fx.leaderboardFilter.tabBarOffset, aAd, __fx.leaderboardFilter.tabBarOffset);
		aAj.fillRect(0, a8X - __fx.leaderboardFilter.tabBarOffset, aAd, __fx.leaderboardFilter.tabBarOffset);
		aAj.fillStyle = bB.nu,
			aAj.fillRect(0, aAo, aAd, 1),
			aAj.fillRect(0, a8X - __fx.leaderboardFilter.tabBarOffset, aAd, 1),
			__fx.leaderboardFilter.drawTabs(aAj, aAd, a8X - __fx.leaderboardFilter.tabBarOffset, bB.oJ),
			aAj.fillRect(0, 0, aAd, bc.zg),
			aAj.fillRect(0, 0, bc.zg, a8X),
			aAj.fillRect(aAd - bc.zg, 0, bc.zg, a8X),
			aAj.fillRect(0, a8X - bc.zg, aAd, bc.zg), aAj.font = aAe, bA.qm.textBaseline(aAj, 1), bA.qm.textAlign(aAj, 1), aAj.fillText(aB5, Math.floor((aAd + aAo - 22) / 2), Math.floor(aAm + aAf / 2));
		__fx.playerList.drawButton(aAj, 12, 12, aAo - 22);
		var fK, gZ = playerPos < position + aAh - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aAh)
				position = (result.length > aAh ? result.length : aAh) - aAh;
			//if (position >= result.length) position = result.length - 1;
			for (aAj.font = aAg, bA.qm.textAlign(aAj, 0), fK = aAh - gZ; 0 <= fK; fK--) {
				const pos = result[fK + position];
				if (pos !== undefined)
					aBA(lw[pos]), aBB(fK, pos, lw[pos]);
			}
			for (bA.qm.textAlign(aAj, 2), fK = aAh - gZ; 0 <= fK; fK--) {
				const pos = result[fK + position];
				if (pos !== undefined)
					aBA(lw[pos]), aBC(fK, lw[pos]);
			}
		} else {
			for (aAj.font = aAg, bA.qm.textAlign(aAj, 0), fK = aAh - gZ; 0 <= fK; fK--)
				aBA(lw[fK + position]), aBB(fK, fK + position, lw[fK + position]);
			for (bA.qm.textAlign(aAj, 2), fK = aAh - gZ; 0 <= fK; fK--)
				aBA(lw[fK + position]), aBC(fK, lw[fK + position]);
		}
		2 == gZ && (aBA(aD.el), bA.qm.textAlign(aAj, 0), aBB(aAh - 1, k6[aD.el], aD.el), bA.qm.textAlign(aAj, 2), aBC(aAh - 1, aD.el)), 0 === position && (gZ = .7 * aAp / ab.get(4).height, aAj.setTransform(gZ, 0, 0, gZ, Math.floor(aAq + .58 * aAp +
			.5 * gZ * ab.get(4).width), Math.floor(aAm + aAf + .4 * aAp)), aAj.imageSmoothingEnabled = !0, aAj.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aAj.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBA(player) {
		aD.hu && (aAj.fillStyle = bg.aBE[bg.aBF[player]])
	}

	function aB9(aB, aBG) {
		aAj.fillStyle = aBG, aB = aAh - 1 < aB ? aAh - 1 : aB;
		aBG = Math.floor((aB === aAh - 1 ? 2 : 0 === aB ? 1.15 : 1) * aAp), aBG = aB === aAh - 2 ? Math.floor(aAo + 9.15 * aAp) - Math.floor(aAo + 8.15 * aAp) : aBG;
		aAj.fillRect(0, Math.floor(aAo + (aB + (0 === aB ? 0 : .15)) * aAp), aAd, aBG)
	}

	function aBB(aBI, a4Q, aB) {
		aAj.fillText(aAu[a4Q], aAq, Math.floor(aAm + aAf + (aBI + .5) * aAp)), 1 === ag.a42[aB] && (aAj.font = "italic " + aAg);
		a4Q = Math.floor(aAm + aAf + (aBI + .5) * aAp);
		aAj.fillText(ag.zB[aB], aAr, a4Q), 0 !== ag.a42[aB] && (aAj.font = aAg), aB < aD.kL && 2 !== ag.a42[aB] || aAj.fillRect(aAr, a4Q + .35 * aB3, aAt[aB], Math.max(1, .1 * aB3))
	}

	function aBC(aBI, aB) {
		aAj.fillText(ag.go[aB], aAs, Math.floor(aAm + aAf + (aBI + .5) * aAp))
	}

	function aBR(fA) {
		return (fA -= bc.gap + aAo) < 0 ? Math.floor(fA / aAp) - 1 : fA < (aAh - 1) * aAp ? Math.floor(fA / aAp) : fA < a8X - aAo ? aAh - 1 : (fA -= a8X - aAo, aAh + Math.floor(fA / aAp))
	}

	function zf(f8, fA) {
		return f8 >= bc.gap && f8 < bc.gap + aAd && fA >= bc.gap && fA < bc.gap + a8X
	}
	this.dd = function() {
			var aB;
			for (aB0 = !1, aB2 = aB1 = aAz = 0, aAy = -1, aAh = a0.a1.i9() ? 6 : 10, aB4 = (position = 0) === (aB4 = bj.eN.data[11].value) ? 10 : 1 === aB4 ? 5 : 1, aAx = !1, aAv = new Uint16Array(aAh + 1), aAw = new Uint32Array(aAh + 1), aAl = aD
				.ey, lw = new Uint16Array(aAl), k6 = new Uint16Array(aAl), aB = aAl - 1; 0 <= aB; aB--) lw[aB] = aB, k6[aB] = aB;
			this.resize(!0), aAt = new Uint16Array(aD.ey);
			var aB6 = Math.floor(aAd - aAr - aAq - aAk);
			for (aAu = new Array(aD.ey), aAj.font = aAg, aB = aD.ey - 1; 0 <= aB; aB--) aAu[aB] = aB + 1 + ".", ag.zB[aB] = bA.ys.a3k(ag.a1M[aB], aAg, aB6), aAt[aB] = Math.floor(aAj.measureText(ag.zB[aB]).width);
			aB7()
		}, this.resize = function(dd) {
			if (a8X = a0.a1.i9() ? (aAd = Math.floor(.335 * h.iA), Math.floor(aAh * aAd / 8)) : (aAd = Math.floor(.27 * h.iA), Math.floor(aAh * aAd / 10)), aAd = Math.floor(.97 * aAd), (aAi = document.createElement("canvas")).width = aAd, aAi
				.height = a8X, aAj = aAi.getContext("2d", {
					alpha: !0
				}), aAm = .025 * aAd, aAf = .16 * aAd, aAn = 0 * aAd, aAo = Math.floor(.45 * aAm + aAf), aAp = (a8X - aAf - 2 * aAm - aAn) / aAh,
				aAi.height = a8X += aAp, __fx.leaderboardFilter.tabBarOffset = Math.floor(aAp * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8X - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aAd,
				aAe = bA.qm.sb(1, Math.floor(.55 * aAf)), aB3 = Math.floor((a0.a1.i9() ? .67 : .72) * aAp), aAg = bA.qm.sb(0, aB3), aAj.font = aAg, aAq = Math.floor(.04 * aAd), aAr = Math.floor((a0.a1.i9() ? .195 : .18) * aAd), aAk = Math.floor(aAj
					.measureText("00920600").width), aAj.font = aAe, aAs = aAd - aAq, !dd) {
				aAj.font = aAg;
				for (var aB = aD.ey - 1; 0 <= aB; aB--) aAt[aB] = Math.floor(aAj.measureText(ag.zB[aB]).width);
				aB7()
			}
			aB5 = bA.ys.a3k(L(112), aAe, .96 * aAd)
		}, this.aAV = function() {
			return aAd
		}, this.mg = function(bu, aB8) {
			(aB8 || aAx && (bu || bf.kI() % aB4 == 0)) && (aAx = !1, aB7())
		}, this.eU = function() {
			! function() {
				for (var fK = aAl - 1; 0 <= fK; fK--) 0 === ag.mu[lw[fK]] && ! function(fK) {
					var aBP = lw[fK];
					aAl--;
					for (var aB = fK; aB < aAl; aB++) lw[aB] = lw[aB + 1], k6[lw[aB]] = aB;
					lw[aAl] = aBP, k6[lw[aAl]] = aAl
				}(fK)
			}();
			for (var aBN, nc = aAl - 1, fK = 0; fK < nc; fK++) ag.go[lw[fK]] < ag.go[lw[fK + 1]] && (aBN = lw[fK], lw[fK] = lw[fK + 1], lw[fK + 1] = aBN, k6[lw[fK]] = fK, k6[lw[fK + 1]] = fK + 1);
			! function() {
				for (var dt = aAx, gZ = (aAx = !0, k6[aD.el] >= aAh - 1 ? aAh - 2 : aAh - 1), aB = gZ; 0 <= aB; aB--)
					if (aAv[aB] !== lw[aB] || aAw[aB] !== ag.go[lw[aB]]) return;
				(gZ != aAh - 2 || aAv[aAh] === k6[aD.el] && aAw[aAh] === ag.go[aD.el]) && (aAx = dt)
			}();
			for (var aB = aAh - 1; 0 <= aB; aB--) aAv[aB] = lw[aB], aAw[aB] = ag.go[lw[aB]];
			aAv[aAh] = k6[aD.el], aAw[aAh] = ag.go[aD.el];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.hD = function(f8, fA) {
			return !!zf(f8, fA) && ((__fx.utils.isPointInRectangle(f8, fA, bc.gap + 12, bc.gap + 12, aAo - 22, aAo - 22) && __fx.playerList.display(ag.a1M), true) &&
				!(fA - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(f8 - bc.gap)) && (aAz = bf.eQ, aB0 = !0, aB1 = aB2 = aBR(fA), bJ.a2p() && (f8 = a9K(-1, aB2, aAh), aAy !== (f8 = f8 === aAh ?
					-1 : f8)) && (aAy = f8, aB7(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aB7(), bf.dl = !0;
		},
		this.a2C = function(f8, fA) {
			if (__fx.utils.isPointInRectangle(f8, fA, bc.gap + 12, bc.gap + 12, aAo - 22, aAo - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aB7(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aB7(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(f8, fA, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), f8 - bc.gap
				)) return;
			var dt, aBQ = aBR(fA);
			return aB0 ? (dt = position, (position = a9K(0, position += aB1 - aBQ, aD.ey - aAh)) !== dt && (aBQ = (aBQ = a9K(-1, aB1 = aBQ, aAh)) !== aAh && zf(f8, fA) ? aBQ : -1, aAy = aBQ, aB7(), bf.dl = !0), !0) : (aBQ = (aBQ = a9K(-1, aBQ,
				aAh)) === aAh || !zf(f8, fA) || bJ.a2p() ? -1 : aBQ, aAy !== aBQ && (aAy = aBQ, aB7(), bf.dl = !0))
		}, this.a2b = function(f8, fA) {
			if (!aB0) return !1;
			aB0 = !1;
			var aBQ = aBR(fA);
			var isEmptySpace = false;
			return bJ.a2p() && -1 !== aAy && (aAy = -1, aB7(), bf.dl = !0), bf.eQ - aAz < 350 && aB2 === aBQ && -1 !== (aBQ = (aBQ = a9K(-1, aBQ, aAh)) !== aAh && zf(f8, fA) ? aBQ : -1) && (f8 = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lw[__fx.leaderboardFilter.filteredLeaderboard[aBQ + position] ?? (isEmptySpace = true, k6[aD.el])]) : lw[aBQ + position]), aBQ === aAh - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : k6[aD.el]) >=
				position + aAh - 1 && (f8 = aD.el), !isEmptySpace && aD.hu && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(f8, ag.a1M, aD.kf), 0 !== ag.mu[f8] && !isEmptySpace) && aH.nF(f8, 800, !1, 0), !0
		}, this.a2F = function(f8, fA, deltaY) {
			var aBS;
			return !(aB0 || aD.nN || (aBS = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !zf(f8, fA)) || (f8 = (f8 = a9K(-1, aBR(fA), aAh)) === aAh || bJ.a2p() ? -1 : f8, 0 < deltaY ? position < aD.ey - aAh && (position += Math.min(aD.ey - aAh -
				position, aBS), aAy = f8, aB7(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aBS), aAy = f8, aB7(), bf.dl = !0), 0))
		}, this.vK = function() {
			vL.drawImage(aAi, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, ys, f8, fA, aAF, aBT, gap, aBU, fontSize, aBV, aBW, aBX, aBY, aBZ, aBa, aBb, aBc, aBd;

	function aBh() {
		ys.clearRect(0, 0, aW.i, aW.j), ys.fillStyle = bB.nr, ys.fillRect(0, 0, aW.i, aW.j), ys.fillStyle = bB.oE, ef = 0 < aBb ? aBb : Math.sqrt(aBY[4] / 1e4), ys.fillRect(0, aW.j - aAF - 1, Math.floor(ef * aW.i), aAF), ys.fillStyle = bB.nu, ys
			.fillRect(0, 0, aW.i, 1), ys.fillRect(0, 0, 1, aW.j), ys.fillRect(aW.i - 1, 0, 1, aW.j), ys.fillRect(0, aW.j - 1, aW.i, 1), ys.fillRect(0, aW.j - aAF - 1, aW.i, 1);
		for (var ef, aBj, dt = 0, aB = 0; aB < aBX.length; aB++) aBZ[aB] ? (bA.qm.textAlign(ys, 0), aBj = Math.floor((aBT - aAF + 2 * aBU) * (aB - dt + 1) / (aBX.length + 1) - .7 * aBU), ys.fillText(aBX[aB], gap, aBj), bA.qm.textAlign(ys, 2), 5 ===
			aB && 0 !== ag.mu[aD.el] && ag.h2[aD.el] >= ae.k1(aD.el) ? (ys.fillStyle = bB.op, ys.fillText(aBf(aB), aW.i - gap, aBj), ys.fillStyle = bB.nu) : ys.fillText(aBf(aB), aW.i - gap, aBj)) : dt++
	}

	function aBf(aB) {
		return aB < 3 ? aBY[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rl.a4k(aBY[aB] / 100, 2) : aB < 7 ? bA.rl.zz(aBY[aB]) : aB === 7 ? aW.aBk(aBY[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.go, aD.el) : __fx.utils.getDensity(aD.el)
	}

	function aBe() {
		ag.go[aD.el] !== aBY[6] && (aBY[6] = ag.go[aD.el], aBV++)
	}
	this.dd = function() {
		aBb = aBc = 0, (aBW = new Array(8))[0] = L(113), aBW[1] = aD.kf ? L(114) : L(115), aBW[2] = L(116), aBW[3] = L(117), aBW[4] = L(118), aBW[5] = L(119, 0, "Interest"), aBW[6] = L(120), aBW[7] = L(121),
			aBW.push("Max Troops", "Density"), // add aBW
			(aBX = new Array(aBW.length)).fill(""), (aBY = new Array(aBW.length))[0] = aD.kf ? 0 : aD.kL, aBY[1] = aD.kf ? al.kr : aD.kh, aBY[2] = aD.a0k, aBY[3] = 0, aBY[4] = bL.du(1e4 * ag.go[0], Math.max(aD.k5, 1)), aBY[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.el], 64), aBY[6] = 0, aBe(), aBY[7] = 0, aBa = aBf(6), (aBZ = new Array(aBW.length)).fill(!0), aBd = 0, aBd =
			aD.kf ? (aBZ[0] = !1, aBZ[2] = !1, aBZ[3] = !1, 3) : (aBZ[3] = !1, 1), aBV = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.i9() ? .1646 : .126) * 1.25 * h.iA), this.j = Math.floor(1.18 * this.i), aAF = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aBU = .04 * this.i, aBT = this.j, this.j -= Math.floor(aBd * (this.j -
			2 * aAF) / aBW.length), fontSize = Math.floor(.7 * (aBT - aAF) / aBW.length);
		var a6M = bA.qm.sb(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6M, i) {
				for (var aB = 0; aB < aBX.length; aB++) aBX[aB] = bA.ys.a3k(aBW[aB], a6M, i)
			}((ys = canvas.getContext("2d", {
				alpha: !0
			})).font = a6M, .575 * this.i), bA.qm.textBaseline(ys, 1), ys.lineWidth = 1, this.a4z(), this.a8x(), aU.a8x(), aBh()
	}, this.a8x = function() {
		f8 = h.i - this.i - bc.gap
	}, this.aBi = function() {
		fA = bc.gap
	}, this.a4z = function() {
		fA = bc.gap + (aU.a8I() && 0 !== ag.mu[aD.el] && !aD.hO ? aU.j + bc.gap : 0)
	}, this.mg = function(bu) {
		(bu || 100 <= aBV) && (aBV = 0, aBh())
	}, this.a5h = function() {
		return aBY[7]
	}, this.aBk = function(value) {
		var lG = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lG) / 1e3);
		return value < 10 ? lG + ":0" + value : lG + ":" + value
	}, this.eU = function() {
		var aBv, per;
		aBZ[0] && aD.a0l - aD.a0k !== aBY[0] && (aBY[0] = aD.a0l - aD.a0k, aBV++), al.kr - aBY[0] !== aBY[1] && (aBY[1] = al.kr - aBY[0], aBV++), this.mY(), (aBv = ae.aBw(aD.el)) !== aBY[5] && (aBY[5] = aBv, aBV++), aBe(), aBY[7] += bf.aBx, aBv =
			aBf(7), aBa !== aBv && (aBa = aBv, aBV += 100), aBv = aD.hu ? bh.ks() : ag.go[lw[0]], per = bL.du(1e4 * aBv, Math.max(aD.k5, 1)), aBY[3] = aBv, aBY[4] !== per && (aBV++, aBY[4] = per), 8 === aD.kd && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gM.hC(aB)) return bR.a0K.a0h(), 1;
				return
			}() || aBY[3] < aD.k5 || ! function() {
				for (var aB = al.kr - 1; 0 <= aB; aB--)
					if (0 < ag.gS[al.kw[aB]].length) return;
				return 1
			}() || bN.lA.aBu().length || bR.a0K.a0h()
	}, this.mY = function() {
		aBZ[2] && aD.a0k !== aBY[2] && (aBY[2] = aD.a0k, aBV += 2 === aD.a0i ? 100 : 1)
	}, this.aBr = function() {
		return aBY[3] === aD.k5
	}, this.aBy = function(aB) {
		var tP, aBz, dt;
		return 2 !== aD.a0i && (aB % 2 == 1 && (aV.mg(1, 1), bf.dl = !0), aB === aD.a58 ? (aBb = 0, aBh(), !1) : (-1 !== aB || 0 !== aBc) && (aBz = aBb, aBb = aD.h9 ? aB / aD.a58 : (dt = performance.now(), 0 <= aB && (tP = dt - 392 * aB, aBc =
			0 === aB || tP < aBc ? tP : aBc), 1 < (aBb = (dt - aBc) / (392 * aD.a58)) ? 1 : aBb), aBh(), aBb !== aBz))
	}, this.vK = function() {
		vL.drawImage(canvas, f8, fA)
	}
}

function cO() {
	var hm, aC0, i, j, a93, aC1, aC2, a8J, canvas, n7, aC3;

	function yo() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aC3 = hm = !1, a93 = .61, aC1 = .07, aC2 = .09, n7 = a8J = j = 0
	}, this.resize = function() {
		var ys, nK, eZ, aC8, aC9, a6R;
		hm && (i = aC4(i = a0.a1.i9() ? Math.floor(.69 * h.iA) : Math.floor(.5 * h.iA), a6w(h.i - 2 * bc.gap, 10)), i = aC4(i, Math.floor(3.57 * a6w(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, ys = canvas.getContext("2d", {
				alpha: !0
			}), nK = Math.floor(1 + j / 40), ys.clearRect(0, 0, i, j), ys.fillStyle = bB.nr, ys.fillRect(nK, nK, i - 2 * nK, j - 2 * nK), ys.lineJoin = "bevel", ys.lineWidth = 2 * nK, ys.strokeStyle = bB.nu, ys.strokeRect(nK, nK, i - 2 * nK,
				j - 2 * nK), ys.imageSmoothingEnabled = !1, eZ = ab.get(aC0), aC8 = eZ.width, a6R = (1 === aC0 ? .85 : 21 === aC0 ? .666 : .9) * a93 * j / (aC9 = eZ.height), ys.setTransform(a6R, 0, 0, a6R, Math.floor((i - a6R * aC8) / 2),
				Math.floor((j - a6R * aC9) / 2)), ys.drawImage(eZ, 0, 0), ys.setTransform(1, 0, 0, 1, Math.floor(i - aC2 * j - aC1 * j - nK), Math.floor(nK + aC1 * j)),
			function(ys, f1) {
				ys.lineWidth = Math.floor(1 + j / 80), ys.strokeStyle = bB.nu, ys.beginPath(), ys.moveTo(0, 0), ys.lineTo(f1, f1), ys.moveTo(0, f1), ys.lineTo(f1, 0), ys.stroke()
			}(ys, Math.floor(aC2 * j)), ys.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fS, aC6, a8o, aC7) {
		hm || aC7 && aC3 || (aC0 = a8o ? 21 : fS ? 1 : 2, hm = aC3 = !0, this.resize(), aL.s3(), aR.a8j(), n7 = bf.eQ, a8J = aC6 ? 1 : 0)
	}, this.eU = function() {
		!hm || 1 <= a8J || (a8J = 1 < (a8J += 5e-4 * (bf.eQ - n7)) ? 1 : a8J, n7 = bf.eQ, bf.dl = !0)
	}, this.hD = function(f8, fA) {
		return !(!hm || a8J <= 0 || (f8 -= Math.floor((h.i - i) / 2), fA -= yo(), f8 < 0) || fA < 0 || i < f8 || j < fA || (i - j / 3 < f8 && fA < j / 3 && (hm = !1, bf.dl = !0), 0))
	}, this.vK = function() {
		!hm || a8J <= 0 || (vL.globalAlpha = a8J, vL.drawImage(canvas, Math.floor((h.i - i) / 2), yo()), vL.globalAlpha = 1)
	}
}

function dN() {
	var aCB, aCC = new Uint8Array(5),
		aCD = new Uint8Array(5);
	this.aCE = new aCF, this.dd = function() {
		for (var fS = bj.eN.data[119].value, aB = 0; aB < aCC.length; aB++) aCC[aB] = (fS >> 2 * aB) % 4
	}, this.a5K = function() {
		aCB = [L(122), "", L(123, [bX.aCG[28]]), L(124, [bX.aCG[26]]), L(125, [bX.aCG[0]])], this.aCE.dd()
	}, this.eU = function() {
		this.aCE.eU()
	}, this.a65 = function(id) {
		1 < id && bJ.rE() || ! function(e9) {
			if (3 === aCC[e9] || 1 === aCD[e9]) return;
			if (aCD[e9] = 1, !(Math.random() < .6)) {
				aCC[e9]++;
				for (var fS = 0, aB = 0; aB < aCC.length; aB++) fS += aCC[aB] << 2 * aB;
				bj.sE.sF(119, fS)
			}
			return 1
		}(id) || aN.a72(aCB[id])
	}
}

function aCF() {
	var aCI;
	this.dd = function() {
		aCI = !1
	}, this.eU = function() {
		var gY;
		if (function() {
				if (!aCI) {
					if (bf.kI() % 30 != 9) return;
					if (!bA.gM.ls(90)) return;
					aCI = !0
				}
				return 1
			}() && (! function() {
				var qe = aN.a7O(956);
				if (qe) {
					if (bA.gM.lJ(qe.player)) return 1;
					aN.a7N(956, 0)
				}
				return
			}() && (-1 === (gY = (aD.hu ? function() {
				var id = bh.ku(),
					f1 = al.kr;
				if (bg.ki[id])
					for (var a0W = al.kw, ez = bg.ez, aB = 0; aB < f1; aB++) {
						var gY = a0W[aB];
						if (ez[gY] !== id) return gY
					} else if (1 < f1) return lw[f1 - 1];
				return -1
			} : function() {
				for (var aCQ = al.kr, lF = al.kw, aCR = k6, aB = 0; aB < aCQ; aB++) {
					var gY = lF[aB];
					if (0 !== aCR[gY]) return gY
				}
				return -1
			})()) ? ! function() {
				var qe = aN.a7O(957);
				if (qe && qe.a6s) {
					if (ac.es(qe.a6s.en << 2)) return 1;
					aN.a7N(957, 0)
				}
				return
			}() : (aN.zA(0, L(126, [ag.zB[gY]]), 956, gY, bB.nu, bB.nr, -1, !0), 0)))) {
			var f1 = ao.iz.lV;
			if (0 !== f1)
				for (var eN = ao.iz.eN, aB = 0; aB < f1; aB++) {
					var en = eN[aB];
					if (ac.es(en << 2)) return void aN.zA(0, L(127, [bM.f9(en), bM.fB(en)]), 957, 0, bB.nu, bB.nr, -1, !0, void 0, {
						fK: 1,
						en: en
					})
				}
		}
	}
}

function dO() {
	this.aCS = new aCT, this.dd = function() {
		this.aCS.resize()
	}
}

function aCT() {
	this.resize = function() {
		var aB, aCU = document.head.querySelector("style#ss");
		if (aCU)
			for (aB = aCU.sheet.cssRules.length - 1; 0 <= aB; aB--) aCU.sheet.deleteRule(0);
		else(aCU = document.createElement("style")).id = "ss", document.head.appendChild(aCU);
		var a9B = "::-webkit-scrollbar",
			aCV = bA.qm.qv(bc.sd),
			hw = bA.qm.qv(Math.max(bA.qm.s5(.012), 8));
		try {
			aCU.sheet.insertRule(a9B + "{width:" + hw + ";height:" + hw + ";}", aCU.sheet.cssRules.length), aCU.sheet.insertRule(a9B + "-thumb{background-color:white;}", aCU.sheet.cssRules.length), aCU.sheet.insertRule(a9B +
				"-track{background:" + bB.nq + ";}", aCU.sheet.cssRules.length), aCU.sheet.insertRule(a9B + "-track:horizontal{border-top:" + aCV + " solid white;}", aCU.sheet.cssRules.length), aCU.sheet.insertRule(a9B +
				"-track:vertical{border-left:" + aCV + " solid white;}", aCU.sheet.cssRules.length), aCU.sheet.insertRule(a9B + "-button{display:none;}", aCU.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aCU.sheet.cssRules.length - 1; 0 <= aB; aB--) aCU.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aCW = !1, this.nk = !1, this.a53 = !1, this.aCX = [0, 0, 0, 0], this.aCY = function() {
		var nK, nL, nX, nY;
		this.a53 = this.a53 || this.nk, (this.nk || this.aCW && this.a53) && (nK = ba.aCZ[0], nL = ba.aCZ[1], nX = ba.aCZ[2], nY = ba.aCZ[3], nK = nK < this.aCX[0] ? this.aCX[0] : nK, nL = nL < this.aCX[1] ? this.aCX[1] : nL, nX = nX > this.aCX[
				2] ? this.aCX[2] : nX, nY = nY > this.aCX[3] ? this.aCX[3] : nY, this.nk = !1, this.aCW = !1, nK === this.aCX[0] && nL === this.aCX[1] && nX === this.aCX[2] && nY === this.aCX[3] ? this.a54() : nK <= nX && nL <= nY && a5M
			.putImageData(a5N, 0, 0, nK, nL, nX - nK + 1, nY - nL + 1))
	}, this.a54 = function() {
		this.a53 && this.aCX[2] >= this.aCX[0] && this.aCX[3] >= this.aCX[1] && a5M.putImageData(a5N, 0, 0, this.aCX[0], this.aCX[1], this.aCX[2] - this.aCX[0] + 1, this.aCX[3] - this.aCX[1] + 1), this.a53 = !1
	}, this.a0t = function() {
		this.aCX[2] >= this.aCX[0] && this.aCX[3] >= this.aCX[1] && a5M.putImageData(a5N, 0, 0, this.aCX[0], this.aCX[1], this.aCX[2] - this.aCX[0] + 1, this.aCX[3] - this.aCX[1] + 1), this.a53 = !1
	}, this.dd = function() {
		var f8, fA;
		this.aCW = !1, this.nk = !1, this.a53 = !1, this.aCX[0] = bS.fC, this.aCX[1] = bS.fD, this.aCX[2] = this.aCX[3] = 0;
		loop: for (f8 = 1; f8 < bS.fC - 1; f8++)
			for (fA = bS.fD - 2; 1 < fA; fA--)
				if (1 === aCa[ac.yL(f8, fA) + 2]) {
					this.aCX[0] = f8;
					break loop
				} loop: for (fA = 1; fA < bS.fD - 1; fA++)
			for (f8 = bS.fC - 2; 1 < f8; f8--)
				if (1 === aCa[ac.yL(f8, fA) + 2]) {
					this.aCX[1] = fA;
					break loop
				} loop: for (f8 = bS.fC - 2; 0 < f8; f8--)
			for (fA = bS.fD - 2; 1 < fA; fA--)
				if (1 === aCa[ac.yL(f8, fA) + 2]) {
					this.aCX[2] = f8;
					break loop
				} loop: for (fA = bS.fD - 2; 0 < fA; fA--)
			for (f8 = bS.fC - 2; 1 < f8; f8--)
				if (1 === aCa[ac.yL(f8, fA) + 2]) {
					this.aCX[3] = fA;
					break loop
				}
	}
}

function L(value, aCb, vs, aCc) {
	var qT = "number" == typeof value ? b7.aCd[value] : value;
	if (vs && b7.aCe() && (qT = vs), !aCb) return aCc ? qT.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qT;
	for (var f1 = aCb.length, aB = 0; aB < f1; aB++)
		for (var fK = 0; fK < 3; fK++) qT = qT.replace("{" + (10 * fK + aB) + "}", aCb[aB]);
	return qT
}

function c2() {
	this.data = new aCf;
	var aCg = (new aCh).L84,
		aCj = (this.aCd = aCg, !(this.aCi = "en"));
	this.dd = function() {
		var qT, g;
		aCj = !1, ("en" === (qT = bj.eN.data[12].value).split("-")[0].toLowerCase() ? (b7.aCd = aCg, b7.aCi = qT, 1) : bj.eN.data[12].value === bj.eN.data[145].value && 0 < bj.eN.data[146].value && (qT = bj.eN.data[146].value, (g = bj.r3.w5(qT, !
			1)).length === qT) && !!bA.qu.a3L(g) && function(g) {
			for (var f1 = g.length, j = 0; j < f1; j++) g[j] = g[j].replace("&#39;", "'");
			var aCp = bj.r3.w5(f1, !0);
			if (f1 !== aCp.length) return !1;
			if (!bA.qu.a3L(aCp)) return !1;
			for (var lG = aCg.length, aA6 = new Array(lG), aCq = lG === f1, gT = Math.min(f1, lG), aB = 0; aB < lG; aB++)
				if (aA6[aB] = aCg[aB], aB < f1 && aCp[aB] === aA6[aB]) aA6[aB] = g[aB];
				else {
					aCq = !1;
					for (var fL = 0; fL < gT; fL++)
						if (aCp[fL] === aA6[aB]) {
							aA6[aB] = g[fL];
							break
						}
				} return b7.aCd = aA6, b7.aCi = bj.eN.data[12].value, aCq
		}(g)) || (aCj = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dz
	}, this.aCe = function() {
		return this.aCd === aCg || !aCg.length
	}, this.aCr = function() {
		var aCs;
		return !!aCj && (aCj = !1, 0 !== aCg.length) && (aCs = bj.eN.data[12].value, b0.eW.aCt(0, aCs.slice(0, 20)), !0)
	}, this.aCu = function(g) {
		g.length !== aCg.length ? 8 === t.t1 && t.a5i().aCv(30, 0, 1) : (this.aCd = g, this.aCi = bj.eN.data[12].value, bj.sE.sF(145, this.aCi), bj.sE.sF(146, g.length), bj.r3.wB(g, !1), bj.r3.wB(aCg, !0), 8 === t.t1 ? t.a5i().aCv(30) : 0 === aa
			.a1t() && 5 === t.t1 && t.y.aCw())
	}, this.aCx = function() {
		var aCy, g = navigator.languages;
		return g && g.length ? (aCy = Math.max(b7.data.aCz(g[0]), 0), 1 === g.length ? [aCy, aCy] : [aCy, Math.max(b7.data.aCz(g[1]), 0)]) : [0, 0]
	}
}

function aCf() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aD0 = function() {
		for (var aD1 = [], g = this.g, f1 = g.length, aB = 0; aB < f1; aB++) aD1.push(g[aB]);
		var aD2 = bj.eN.data[12].vs;
		for (aB = 0; aB < f1; aB++)
			if (aD1[aB] === aD2) {
				aD1.splice(aB, 1), f1--;
				break
			} aD1.sort(), f1++, aD1.unshift(aD2);
		try {
			if ("undefined" == typeof Intl) return aD1;
			for (aB = 0; aB < f1; aB++) {
				var qT = new Intl.DisplayNames([aD1[aB]], {
					type: "language"
				}).of(aD1[aB]);
				qT !== aD1[aB] && (aD1[aB] = aD1[aB] + ": " + qT)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aD1
	}, this.aD4 = function(aD5) {
		for (var qT = bj.eN.data[12].value, f1 = aD5.length, aB = 0; aB < f1; aB++)
			if (qT === aD5[aB].split(":")[0]) return aB;
		return 0
	}, this.aCz = function(aD6) {
		if (aD6 && !(aD6.length < 2)) {
			aD6 = aD6.split("-")[0].toLowerCase();
			for (var g = this.g, f1 = g.length, aB = 0; aB < f1; aB++)
				if (aD6 === g[aB]) return aB
		}
		return -1
	}
}

function aCh() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}",
		"Team {0} won the game!", "You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!",
		"Clan {0} gained {11} points. ✨", "You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.",
		"{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}",
		"Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Next Contest: ", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.",
		"second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Loading", "{0} defeated {1}!",
		"White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia",
		"Australia", "Island Kingdom", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf",
		"Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew",
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
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago",
		"Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}",
		"Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Tutorial", "Propaganda Text", "Reset",
		"Language", "Launch Campaign", "Gold Investment", "Launch", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account",
		"📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App",
		"Changelog", "Clan Results", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?", "Please make sure to safely store passwords before performing this action.",
		"🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "Incoming Boat!", "Incoming Ship!",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered",
		"Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks",
		"Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Alliance Contest!",
		"Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dj() {
	var f8, fA, j, ty, aD7, aD8, aD9, aDA, aDB, i, a3y, aDC;
	this.hm = !1, this.dd = function(qT, aDD) {
		if (1 === a0.id && 13 <= a0.dw && a0.dw < 18) return aDD ? void(a3y = qT) : a3y !== qT ? void 0 : void a0.w3.saveString(200, qT);
		aDD && (a3y = qT, (aDC = document.createElement("a")).appendChild(document.createTextNode(a3y)), this.hm = !0, aDC.title = a3y, aDC.target = "_blank", aDC.href = a3y, aDC.style.textAlign = "center", aDC.style.color = bB.nu, aDC.style
			.position = "absolute", aDC.style.padding = "0px", aDC.style.margin = "0px", this.resize(), document.body.appendChild(aDC), bf.dl = !0)
	}, this.s3 = function() {
		return !(!this.hm || (t.removeChild(document.body, aDC), this.hm = !1))
	}, this.hD = function(iH, iI) {
		return !!this.hm && ((iH < f8 || iI < fA || f8 + i < iH || fA + j < iI || f8 + i - ty < iH && iI < fA + ty) && (bf.dl = !0, this.hm = !1, t.removeChild(document.body, aDC)), !0)
	}, this.resize = function() {
		var a6M, aDE;
		this.hm && (aDA = Math.floor(.8 * (a0.a1.i9() ? h.i > h.j ? .6 : .55 : .4) * h.iA), ty = Math.floor(.15 * aDA), aD7 = Math.floor(.35 * ty), aD8 = Math.floor(.5 * ty), aD9 = Math.floor(2.5 * aD8), j = ty + aD7 + 3 * aD8, a6M = bA.qm.sb(1,
			aD7 / h.k), aDB = Math.floor(h.k * aQ.measureText(a3y, a6M)), aDE = i = (aDA < aDB ? aDB : aDA) + 2 * aD9, i = Math.min(i, h.i - 2 * (a0.a1.i9() ? 2 : 1) * bc.gap), a6M = bA.qm.sb(1, i / aDE * aD7 / h.k), aDB = Math.floor(h
			.k * aQ.measureText(a3y, a6M)), f8 = Math.floor((h.i - i) / 2), fA = Math.floor((h.j - j) / 2), aDC.style.font = a6M, aDC.style.top = Math.floor((fA + 1.4 * aD8 + ty) / h.k) + "px", aDC.style.left = Math.floor((f8 + (i -
			aDB) / 2) / h.k) + "px")
	}, this.vK = function() {
		this.hm && (vL.fillStyle = bB.nr, vL.fillRect(f8, fA + ty, i, j - ty), vL.fillStyle = bB.p2, vL.fillRect(f8, fA, i, ty), vL.fillStyle = bB.nu, vL.lineWidth = bc.zg, vL.strokeStyle = bB.nu, vL.strokeRect(f8, fA, i, j), vL.fillRect(f8, fA +
			ty, i, bc.zg), vL.font = bA.qm.sb(1, .48 * ty), bA.qm.textAlign(vL, 1), bA.qm.textBaseline(vL, 1), vL.fillText(L(128), Math.floor(f8 + (i - .5 * ty) / 2), Math.floor(fA + .55 * ty)), aM.a6X(Math.floor(f8 + i - .8 * ty), Math
			.floor(fA + .25 * ty), Math.floor(.5 * ty)), vL.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aBW, f8 = [0, 0, 0, 0, 0],
		fA = [0, 0, 0, 0, 0],
		nW = [1, 1, 1, 1, 1],
		fS = [!0, !0, !0, !1, !1],
		eZ = (this.fn = [!0, !0, !0, !1, !1], null);
	this.aDF = function(a3W, aDG) {
		eZ = a3W, fS = aDG, aBW = [bK.aDH, bK.a1m, bK.aDI, bK.aDI, bK.aDJ], this.dd()
	}, this.dd = function() {
		if (ab.tT()) {
			var aB, t8 = Math.floor((a0.a1.i9() ? .261 : .195) * h.iA),
				t9 = Math.floor(.9 * t8),
				a93 = Math.floor(.17 * t9);
			if (gap = a0.a1.i9() ? 2 * bc.gap : bc.gap, nW[0] = t8 / eZ[0].width, nW[1] = t9 / eZ[1].width, nW[2] = a93 / eZ[2].height, nW[3] = a93 / eZ[3].height, nW[4] = a93 / eZ[4].height, nW[2] *= 1.7, nW[3] *= 1.07, f8[0] = gap, f8[1] = gap,
				f8[2] = gap, f8[3] = gap, f8[4] = Math.floor(2 * gap + nW[3] * eZ[3].width), fA[0] = gap, fA[1] = fA[0] + gap + nW[0] * eZ[0].height, fA[2] = fA[1] + gap + nW[1] * eZ[1].height, fA[3] = fA[2] + gap + nW[2] * eZ[2].height, fA[4] =
				fA[3], !fS[0])
				for (aB = 0; aB < 5; aB++) fA[aB] -= nW[0] * eZ[0].height + gap;
			if (!fS[1])
				for (aB = 2; aB < 5; aB++) fA[aB] -= nW[1] * eZ[1].height + gap
		}
	}, this.hm = function() {
		return !(7 === aa.a1t() && a0.a1.i9())
	}, this.hD = function(iH, iI) {
		if (eZ && this.hm())
			for (var aB = fS.length - 1; 0 <= aB; aB--)
				if (fS[aB] && this.fn[aB] && f8[aB] < iH && fA[aB] < iI && iH < f8[aB] + nW[aB] * eZ[aB].width && iI < fA[aB] + nW[aB] * eZ[aB].height) return t.u(9, t.t1, new aDK(L(129), bA.qm.a3x(aBW[aB]))), !0;
		return !1
	}, this.vK = function() {
		if (eZ && this.hm()) {
			var aB;
			for (vL.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fS[aB] && this.fn[aB] && (vL.setTransform(nW[aB], 0, 0, nW[aB], f8[aB], fA[aB]), vL.drawImage(eZ[aB], 0, 0));
			vL.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aDL = 0, this.aDM = null, this.u7 = null, this.lA = null, this.y = null, this.uU = null, this.u5 = null, this.message = null, this.aDN = null, this.s2 = null, this.aDO = null, this.aDP = new aDQ, this.a1q = 0, this.a9x = 0, this.dd =
		function() {
			this.a9x = bf.eQ, this.aDL = bG.t4.wx(bj.eN.data[105].value), this.u7 = new aDR, this.lA = new aDS, this.y = new aDT, this.uU = new aDU, this.u5 = new aDV, this.message = new aDW, this.aDN = new aDX, this.s2 = new aDY, this.aDO = new aDZ,
				this.y.dd(), bp.dd(), this.a1q = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uO = function() {
			this.s2 && this.s2.uO(), this.aDM = null, this.u7 = null, this.lA = null, this.y = null, this.uU = null, this.u5 = null, this.message = null, this.aDN = null, this.s2 = null, this.aDO = null, this.a1q = 0, bp.uO(), a0.a1.setState(0)
		}
}

function aDR() {
	function aDw(g, tL, tM) {
		var aDx = g[tL];
		g[tL] = g[tM], g[tM] = aDx
	}
	this.u8 = [
		[],
		[],
		[],
		[]
	], this.u9 = [0, 0, 0, 0], this.aDa = [], this.aDb = function(aDc, sz, username, uE, a4Q, aDd, elo, color, wV, aDe) {
		username = this.aDg(sz, username, uE, a4Q, aDd, elo, color, wV, aDe);
		this.u8[aDc].push(username), bn.aDL === sz && (bn.aDM = username), bn.aDO.aDh(sz) && (username.uG = 1), bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === aDc && 1 === bn.y.rq[2]
	}, this.aDg = function(sz, username, uE, a4Q, aDd, elo, color, wV, aDe) {
		return {
			sz: sz,
			username: username,
			uE: uE,
			a4Q: a4Q,
			aDd: aDd,
			elo: elo,
			color: color,
			wV: wV,
			aDe: aDe
		}
	}, this.aDj = function(e9, aDc, uE, a4Q, aDd, elo, wV) {
		e9 = this.u8[aDc][e9];
		e9.uE = uE, e9.a4Q = a4Q, e9.aDd = aDd, e9.elo = elo, e9.wV = wV, bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === aDc && 1 === bn.y.rq[2]
	}, this.aDk = function(e9, aDc, aDl) {
		var e9 = this.u8[aDc][e9],
			aDm = e9.username,
			aDn = "Redacted " + bF.t4.zz(e9.sz, 2);
		e9.username = aDl ? "[" + bA.rl.a1P(aDm) + "] " + aDn : aDn, aDm.indexOf("Redacted") < 0 && (e9.aDo = aDm), bn.s2.aDp(e9.sz), bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === aDc && 1 === bn.y.rq[2]
	}, this.aDq = function(e9, aDr, aDs) {
		var player = this.u8[aDr][e9];
		this.aDt(e9, aDr), this.u8[aDs].push(player), bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === aDs && 1 === bn.y.rq[2]
	}, this.aDt = function(e9, aDr) {
		var u7 = this.u8[aDr];
		this.aDa.push(u7[e9]), 1e3 < this.aDa.length && this.aDa.shift(), e9 >= this.u9[aDr] ? u7[e9] = u7[u7.length - 1] : (this.u9[aDr]--, 2 === aDr ? (u7.splice(this.u9[aDr] + 1, 0, u7[u7.length - 1]), u7.splice(e9, 1)) : (u7[e9] = u7[this.u9[
			aDr]], u7[this.u9[aDr]] = u7[u7.length - 1])), u7.pop(), bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === aDr && 1 === bn.y.rq[2]
	}, this.aDu = function(e9, rp) {
		bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === rp && 1 === bn.y.rq[2];
		var u7 = this.u8[rp],
			qe = u7[e9];
		if (2 === rp)
			if (e9 >= this.u9[rp]) {
				bn.aDO.join(qe);
				for (var aDv = this.u9[rp], elo = qe.elo; aDv && elo > u7[aDv - 1].elo;) aDv--;
				u7[e9] = u7[this.u9[rp]], u7.splice(this.u9[rp]++, 1), u7.splice(aDv, 0, qe)
			} else u7.splice(this.u9[rp]--, 0, qe), u7.splice(e9, 1);
		else e9 >= this.u9[rp] ? (bn.aDO.join(qe), aDw(u7, this.u9[rp]++, e9)) : aDw(u7, --this.u9[rp], e9)
	}, this.aDy = function(sz) {
		for (var u8 = this.u8, f1 = u8.length, aB = 0; aB < f1; aB++)
			for (var u7 = u8[aB], lG = u7.length, fK = 0; fK < lG; fK++)
				if (sz === u7[fK].sz) return u7[fK];
		return null
	}
}

function aDZ() {
	var aDz = [],
		aE0 = [],
		aE1 = 0;

	function aE2(g, a7Q, aE6, aE7) {
		var f1 = g.length;
		if (0 === f1) return "";
		var qT = "@" + g[0];
		if (1 === f1) return qT + a7Q + aE7;
		for (var aB = 1; aB < f1 - 1; aB++) qT += ", @" + g[aB];
		return qT + " and @" + g[f1 - 1] + aE6 + aE7
	}
	this.dd = function() {
		var qT = aE2(aE0, " is", " are", " in the lobby!");
		qT.length && bn.message.aE3({
			id: 7,
			r: qT
		}), aDz = [], aE0 = [], aE1 = 0
	}, this.aDh = function(aE4) {
		return bn.aDL !== aE4 && (aE4 = bF.t4.zz(aE4, 5), !!bj.vj.uG(aE4)) && (aE0.push(aE4), !0)
	}, this.join = function(player) {
		bn.aDL !== player.sz && (player = bF.t4.zz(player.sz, 5), bj.vj.uG(player)) && aDz.push(player)
	}, this.aE5 = function() {
		var a7Q, aE6;
		++aE1 < 3 || (aE1 = 0, a7Q = aE2(aE0, "", "", " entered the lobby!"), (a7Q = (aE6 = aE2(aDz, "", "", " joined a game!")).length ? a7Q.length ? a7Q + " " + aE6 : aE6 : a7Q).length && bn.message.aE3({
			id: 7,
			r: a7Q
		}), aDz = [], aE0 = [])
	}
}

function aDQ() {
	this.dm = function(e9) {
		if ((u9 = bn.u7.u9[e9]) < 2) return !1;
		var rr = bn.y.rs[e9],
			aE8 = 9 === rr.aE9 ? 333 : 512,
			u9 = Math.min(u9, aE8);
		8 === rr.aE9 && (u9 -= u9 % 2);
		aE8 = bn.u7.u8[e9].splice(0, u9), bn.u7.u9[e9] -= u9, u9 = function(aEA) {
			if (bn.aDM)
				for (var f1 = aEA.length, sz = bn.aDM.sz, aB = 0; aB < f1; aB++)
					if (aEA[aB].sz === sz) return aB;
			return -1
		}(aE8);
		return -1 === u9 ? (bn.u7.aDa = bn.u7.aDa.concat(aE8), 1e3 < bn.u7.aDa.length && bn.u7.aDa.splice(0, bn.u7.aDa.length - 1e3), bn.y.aDi += 29 === t.t1 && bn.y.rq[0] === e9 && 1 === bn.y.rq[2], !1) : (8 === rr.aE9 && (rr.aED = (rr.aED + (
			u9 >> 1)) % 1024, e9 = u9 - u9 % 2, u9 %= 2, aE8 = aE8.slice(e9, 2 + e9)), ax.dd(rr, aE8, u9), !0)
	}, this.aEE = function(rr, aEA, aEB) {
		var f4 = aD.data = new a59,
			aEI = (f4.spawningSeed = rr.spawningSeed, rr.aE9 < 7 ? (f4.gameMode = 1, f4.numberTeams = rr.aE9 + 2) : 9 === rr.aE9 ? (f4.gameMode = f4.isZombieMode = 1, f4.numberTeams = 2) : (f4.gameMode = 0, f4.battleRoyaleMode = 7 === rr.aE9 ?
				0 : 10 === rr.aE9 ? 1 : 2), f4.selectedPlayer = aEB, f4.isContest = rr.aEF, f4.mapType = bS.aEG(rr.eh) ? 0 : 1, bS.aEH(f4, rr.eh), f4.mapSeed = rr.mapSeed, f4.humanCount = aEA.length);
		f4.selectableSpawn = 1 === f4.gameMode || aEI < 100, f4.colorsData = new Uint32Array(aEI), f4.playerNamesData = new Array(aEI);
		for (var aB = 0; aB < aEI; aB++) f4.colorsData[aB] = aEA[aB].color, f4.playerNamesData[aB] = aEA[aB].username;
		if (2 === f4.battleRoyaleMode)
			for (f4.elo = new Uint16Array(aEI), aB = 0; aB < aEI; aB++) f4.elo[aB] = aEA[aB].elo;
		aa.setState(8), bS.a7(rr.eh, f4.mapSeed), aD.a5E(), aD.a5C = 2
	}
}

function aDS() {
	var e0 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEJ = [bB.o8, bB.o8, bB.o9, bB.oc, bB.od, bB.oP, bB.oj, bB.o9, bB.p4, bB.os, bB.p1],
		aEK = [
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
		aEL = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aEY(rt, sz, aEa) {
		for (var fL = rt.length - 1; 0 <= fL; fL--) {
			var qe = rt[fL];
			0 === qe.id && qe.sz === sz && (qe.r = "[Redacted Message]", aEa) && (qe.aEb = 1)
		}
	}
	this.ry = function(aEM) {
		var aEN, a1Q;
		return aEM.id < 5 && (aEN = "@" + bF.t4.zz(aEM.sz, 5)), 0 === aEM.id ? aEN + ": " + aEM.r : 1 === aEM.id ? (a1Q = "@" + bF.t4.zz(aEM.target, 5), 0 === aEM.aEO ? 32768 <= aEM.value ? aEN + " voted with " + (aEM.value - 32768 + 1) +
				" gold against " + a1Q + " to weaken the latter's admin position. 📉" : aEN + " voted with " + (aEM.value + 1) + " gold for " + a1Q + " to strengthen the latter's admin position. 💪" : 1 === aEM.aEO ? aEN + " sent " + Math.floor(
					aEM.value / 100) + " 🧈 gold to " + a1Q + "." : aEN + " voted with " + (aEM.value / 10).toFixed(1) + " points for " + a1Q + " to acknowledge the latter as clan leader. ✅") : 2 === aEM.id ? 0 === aEM.aEO ? aEN +
			" was 🔇 muted for 1 Hour." : 1 === aEM.aEO ? "The username of " + aEN + " was ✂️ redacted. Duration: 1 Day" : aEN + " 👢 was kicked." : 3 === aEM.id ? aEN + bo.eC(aEM.aEO, bo.e6[aEM.aEO][aEM.value]) + "@" + bF.t4.zz(aEM.target, 5) +
			bo.eE(aEM.aEO, bo.e6[aEM.aEO][aEM.value]) : 4 === aEM.id ? aEN + bo.eC(5, bo.e6[5][aEM.aEO]) + "@" + bF.t4.zz(aEM.target, 5) + bo.eE(5, bo.e6[5][aEM.aEO]) : 5 === aEM.id ? aEL[aEM.aEO] : 6 === aEM.id ? "You are about to mention " +
			aEM.value + " player" + (1 === aEM.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEM.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEM.id ? aEM.r : void 0
	}, this.rx = function(aEM, a7Z) {
		return {
			aEM: aEM,
			r: a7Z,
			aEP: 0,
			fontSize: 1,
			s1: 0,
			aEQ: aEM.id ? bB.ob : bB.nu
		}
	}, this.uC = function(player, rp) {
		return (2 === rp ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uD = function(uE) {
		return aEJ[uE]
	}, this.aER = function(uE, a4Q) {
		return uE < 3 || 7 === uE ? aEK[uE][0] : 4 === uE ? aEK[uE][a4Q < 1 ? 0 : a4Q < 10 ? 1 : 2] : aEK[uE][a4Q < 10 ? 0 : 1]
	}, this.aES = function(a4Q) {
		return 0 === a4Q
	}, this.aDy = function(rp, sz) {
		for (var u8 = bn.u7.u8, u7 = u8[rp], f1 = u7.length, aB = 0; aB < f1; aB++)
			if (sz === u7[aB].sz) return u7[aB];
		for (var fL = 0; fL < u8.length; fL++)
			if (rp !== fL)
				for (f1 = (u7 = u8[fL]).length, aB = 0; aB < f1; aB++)
					if (sz === u7[aB].sz) return u7[aB];
		return null
	}, this.uF = function(qe) {
		return !!bn.aDM && qe.sz === bn.aDM.sz
	}, this.aET = function(u7, aEU, aEV) {
		var a1N = [];
		loop: for (var aB = aEU; aB < aEV; aB++) {
			var a1O = bA.rl.a1P(u7[aB].username);
			if (a1O) {
				for (var fL = a1N.length - 1; 0 <= fL; fL--)
					if (a1O === a1N[fL].name) {
						a1N[fL].gT++;
						continue loop
					} a1N.push({
					name: a1O,
					gT: 1
				})
			}
		}
		if (a1N.sort(function(fK, fL) {
				return fL.gT - fK.gT
			}), 0 === a1N.length) return "";
		for (var qT = a1N[0].name + ": " + a1N[0].gT, aB = 1; aB < a1N.length; aB++) qT += "   " + a1N[aB].name + ": " + a1N[aB].gT;
		return qT
	}, this.aEW = function(uE, a4Q, aDd) {
		return 0 === e0[uE].length ? "Rank: " + (a4Q + 1) : e0[uE] + " Rank: " + (a4Q + 1) + (3 !== uE && aDd < 100 ? "   " + e0[3] + " Rank: " + (aDd + 1) : "")
	}, this.aEX = function(sz) {
		for (var rs = bn.y.rs, aB = 0; aB < rs.length; aB++) aEY(rs[aB].rt, sz);
		aEY(bn.message.aEZ(), sz, 1), bn.s2.aEX(sz)
	}
}

function aDV() {
	var sU = 0,
		aEc = 0,
		aEd = 0,
		aEe = null,
		aEf = null;

	function aEi(qe, aEj, aEk) {
		var qT = qe.username;
		return (qT += "   " + bn.lA.aEW(qe.uE, qe.a4Q, qe.aDd)) + function(qe) {
			qe = qe.wV;
			if (qe < 1e3) return "   Gold: " + qe;
			if ((qe %= 1024) < 1e3) return "   Gold: " + qe + "k";
			return "   Gold: " + (qe - 999) + "M"
		}(qe) + ("   IP: " + bF.t4.zz(qe.aDe, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aEk ? aEc : aEh(qe, aEj)])
	}

	function aEh(qe, aEj) {
		return aEc = aEj || bn.u7.aDy(qe.sz) ? 1 : 0
	}
	this.aEg = function() {
		!sU || aEc === aEh(aEf) && aEd === aEf.wV || (aEd = aEf.wV, aEe.show(-1, -1, aEi(aEf, 0, 1), 1, 1))
	}, this.uH = function(e, qe, aEj) {
		var a9A = e.target.getBoundingClientRect();
		this.show(a9A.left, a9A.top, qe, 0, aEj), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.u5 && bn.u5.s3(1)
		})
	}, this.show = function(f8, fA, qe, sY, aEj) {
		aEe = aEe || new sS, aEd = (aEf = qe).wV, aEe.show(f8, fA, aEi(qe, aEj), sY), sU = 1
	}, this.s3 = function(se) {
		aEe && aEe.s3(se) && (sU = 0, aEf = null)
	}
}

function aDT() {
	function aEp(aEr) {
		bn.y.aDi && 1 === bn.y.rq[2] && t.a5j(29).aEs(), bn.y.aDi = 0, t.a5j(29).aEt(), 0 !== bn.y.rs[bn.y.rq[0]].ts && !aEr || t.a5j(29).aEu(), bn.u5.aEg()
	}
	this.rs = new Array(4), this.rq = [0, 0, 1, 0], this.aDi = 0, this.aEm = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rs.length; aB++) this.rs[aB] = new aEn;
		this.rq[0] = bj.eN.data[158].value
	}, this.aEo = function() {
		aEp(!0), bn.aDO.dd()
	}, this.aE5 = function() {
		bn.aDO.aE5();
		for (var aB = 0; aB < bn.y.rs.length; aB++) {
			var rr = bn.y.rs[aB];
			0 === rr.ts ? rr.aEv = 0 : (rr.aEw = Math.max(rr.aEw - rr.aEv % 2, 0), rr.aEv++)
		}
		aEp(!1)
	}, this.aEx = function(rp) {
		this.rq[0] !== rp || this.rq[2] || t.a5j(29).aEy()
	}
}

function aDX() {
	var aEz = 0,
		aF0 = "",
		aF1 = 0,
		aF2 = 0,
		aF3 = 0;

	function aF5(a7Z) {
		b0.aFG.aFH(3, a7Z)
	}

	function aFE(gT) {
		aEz = 1, bn.message.aE3({
			id: 6,
			value: gT
		})
	}

	function aF8(r) {
		var aFK = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFK)
	}
	this.a0m = function(r) {
		var aF4, g, aFA;
		if (aEz) return aEz = 0, "yes" === (aF4 = r.toLowerCase()) || "y" === aF4 ? void aF5(aF0) : void bn.message.aE3({
			id: 5,
			aEO: 7
		});
		!(r.indexOf("@") < 0) && (aF4 = aF8(r)) ? (aF0 = r, g = function(aF7) {
			for (var f1 = aF7.length, aFI = [0, 0, 0, 0], aB = 0; aB < f1; aB++)
				for (var i = aF7[aB], fK = 0; fK < 4; fK++) i === "@room" + (fK + 1) && (aFI[fK] = 1);
			if ((aF2 = bA.qu.a3A(aFI)) % 4 == 0) return bA.qu.a3S(bn.u7.u8);
			for (fK = 0; fK < 4; fK++) aFI[fK] = aFI[fK] ? bn.u7.u8[fK] : [];
			return bA.qu.a3S(aFI)
		}(aF4), function(aF7, aFA, r) {
			if (!aF1) return;
			for (var f1 = aFA.length, aB = 0; aB < f1; aB++) 2 === aFA[aB].id && (r = r.replace(aF7[aFA[aB].e9], "@" + aFA[aB].fS));
			return aEz = 1, aF5((aF0 = r).slice(0, 126) + "|"), 1
		}(aF4, aFA = function(aF7) {
			for (var aFA = [], f1 = (aF3 = aF1 = 0, aF7.length), aB = 0; aB < f1; aB++) {
				var i = aF7[aB],
					lG = i.length;
				bA.rl.startsWith(i, "@[") ? lG <= 9 && bA.rl.a40(i, "]") && aFA.push({
					id: 0,
					fS: i.substring(2, lG - 1).toUpperCase()
				}) : 6 === lG ? bA.rl.startsWith(i, "@room") || (aF3++, aFA.push({
					id: 1,
					fS: bG.t4.wx(i.substring(1))
				})) : 1 < lG && lG < 5 && 0 <= (lG = b7.data.aCz(i.substring(1))) && (aFA.push({
					id: 2,
					fS: lG,
					e9: aB
				}), aF1 = 1)
			}
			return aFA
		}(aF4), r) || (0 === aFA.length ? aF2 || function(aF7) {
			for (var f1 = aF7.length, aB = 0; aB < f1; aB++) {
				var i = aF7[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aF4) ? aFE(g.length) : aF5(r) : aF4.length === aF3 ? aF5(r) : (function(g, aFA) {
			var lG = aFA.length;
			if (0 === lG) return;
			var f1 = g.length;
			loop: for (var aB = f1 - 1; 0 <= aB; aB--) {
				for (var fK = 0; fK < lG; fK++)
					if (0 === aFA[fK].id) {
						if (aFA[fK].fS === bA.rl.a1P(g[aB].username)) continue loop
					} else if (1 === aFA[fK].id && aFA[fK].fS === g[aB].sz) continue loop;
				g[aB] = g[--f1], g.pop()
			}
		}(g, aFA), aFE(g.length)))) : aF5(r)
	}, this.aFL = function(r) {
		var aF7 = aF8(r);
		if (aF7)
			for (var a5 = new RegExp("^[0-9]+$"), f1 = aF7.length, aB = 0; aB < f1; aB++) {
				var i = aF7[aB].substring(1),
					lG = i.length;
				1 <= lG && lG <= 3 && a5.test(i) && (lG = parseInt(i, 10), !isNaN(lG)) && 0 <= lG && lG < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[lG]))
			}
		return r
	}
}

function aDW() {
	var aFM, aFN = [],
		aFO = -1,
		aFP = 0,
		aFQ = 0;

	function aFV() {
		aFP = bf.eQ, (3 === this.uL ? aFU : (aFO = (aFN.length + aFO + 2 * this.uL - 1) % aFN.length, aFT))()
	}

	function aFT() {
		0 !== aFN.length && (aFQ = 0, aFM && aFM.uO(), (aFM = new uI(aFV)).sF(aFO, aFN.length), aFM.show(aFN[aFO]), bn.message.resize())
	}

	function aFU() {
		aFQ = 1, aFM && aFM.uO(), (aFM = new uP(aFT)).sF(aFN.length), aFM.show(), bn.message.resize()
	}
	this.aE3 = function(aEM) {
		var qe;
		2 === aEM.id && 3 === aEM.aEO ? bn.lA.aEX(aEM.sz) : (qe = bn.lA.rx(aEM, bn.lA.ry(aEM)), (5 !== aEM.id && 6 !== aEM.id || (t.a5j(29).aFR().s0(qe), 5 === aEM.id)) && (qe = bf.eQ < aFP + 2e4, aFO !== aFN.length - 1 && qe || (aFO = aFN
			.length), aFN.push(aEM), bj.eN.data[14].value || 7 === aEM.id || bp.play(), aFM) && (aFQ && (bj.eN.data[13].value || qe) ? aFM.sF(aFN.length) : aFT()))
	}, this.show = function() {
		aFU()
	}, this.s3 = function() {
		aFO = aFN.length - 1, aFM && aFM.uO(), aFM = null
	}, this.resize = function() {
		aFM && aFM.resize()
	}, this.aEZ = function() {
		return aFN
	}
}

function aDU() {
	var aFW = null,
		aFX = null,
		aFY = 0,
		aFZ = 0,
		aFa = null;

	function aFc() {
		0 !== aFX.uE && (bn.uU.s3(), t.u(8, 29, new t2(25, {
			t3: 0,
			sz: bF.t4.zz(aFX.sz, 5),
			t0: 0
		}, 29)))
	}

	function aFe() {
		return !bn.aDM || bn.lA.uF(aFX) ? 1 : 0
	}

	function aFd() {
		var f8 = aFW.f8,
			fA = aFW.fA,
			aFn = (bn.uU.s3(), aFe());
		aFW = new uQ([new w(bo.e6[5][0], function() {
			aFh(5, 0)
		}, aFn), new w(bo.e6[5][1], function() {
			aFh(5, 1)
		}, aFn), new w(bo.e6[5][2], function() {
			aFh(5, 2)
		}, aFn), new w(bo.e6[5][3], function() {
			aFh(5, 3)
		}, aFn)]), aFg(f8, fA), aFZ = aFY = 2
	}

	function aFf() {
		29 === t.t1 && t.a5i().aDN(bF.t4.zz(aFX.sz, 5))
	}

	function aFh(id, value) {
		5 === id && b0.aFo.aFp({
			t3: 3,
			sz: bF.t4.zz(aFX.sz, 5),
			value: value
		})
	}

	function aFg(f8, fA, uW) {
		aFW.show(f8, fA, uW), bn.u5.show(aFW.f8, aFW.fA, aFX, 1)
	}
	this.aFb = function(e, qe) {
		aFY = 1, aFX = qe, aFW = new uQ([new w(L(130), aFc, 0 === qe.uE ? 1 : 0), new w(L(131), aFd, aFe()), new w(L(132), aFf, 0)]), aFg((aFa = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aFa.clientY, 1)
	}, this.a2k = function(code) {
		if (29 !== t.t1) return !1;
		if (!aFX) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.s3();
			else if (bA.rl.startsWith(code, "Numpad") || bA.rl.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aFY) this.aFb(aFa, aFX);
				else {
					if (!aFW) return !1;
					1 === aFY ? code <= 1 ? aFc() : 2 === code ? aFd() : (aFf(), this.s3()) : (aFh(aFZ, bL.i8(code - 1, 0, bo.e6[aFZ].length - 1)), this.s3())
				}
		}
		return !0
	}, this.s3 = function() {
		aFY = 0, aFW && aFW.s3(), aFW = null, bn.u5.s3()
	}
}

function aEn() {
	this.ts = 0, this.eh = 0, this.mapSeed = 0, this.aE9 = 0, this.aFs = 0, this.aFt = 0, this.aEF = 0, this.aEw = 0, this.spawningSeed = 0, this.a1y = 0, this.aED = 0, this.rt = [], this.ru = 1048575, this.aEv = 0, this.aFu = [{
		eh: 0,
		mapSeed: 0,
		aE9: 0,
		eQ: 100,
		aEF: 0
	}, {
		eh: 1,
		mapSeed: 0,
		aE9: 1,
		eQ: 200,
		aEF: 0
	}, {
		eh: 2,
		mapSeed: 0,
		aE9: 2,
		eQ: 300,
		aEF: 0
	}, {
		eh: 3,
		mapSeed: 0,
		aE9: 3,
		eQ: 400,
		aEF: 0
	}, {
		eh: 0,
		mapSeed: 0,
		aE9: 9,
		eQ: 500,
		aEF: 0
	}, {
		eh: 1,
		mapSeed: 0,
		aE9: 10,
		eQ: 600,
		aEF: 0
	}, {
		eh: 2,
		mapSeed: 0,
		aE9: 8,
		eQ: 700,
		aEF: 0
	}, {
		eh: 3,
		mapSeed: 0,
		aE9: 3,
		eQ: 800,
		aEF: 0
	}]
}

function aDY() {
	var aFv = [],
		tE = [],
		aFw = [];

	function aFy(qe) {
		for (var r = qe.r, aFx = [];;) {
			var eZ = function aG0(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qT = r.substring(position + 1, position + 6);
				if (5 !== qT.length) return aG0(r, position + 1);
				if (bA.rl.startsWith(qT, "room")) return aG0(r, position + 1);
				var aG7 = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aG7.test(qT)) return aG0(r, position + 1);
				aG7 = r.substring(position + 6, position + 7);
				if (1 !== aG7.length) return position;
				qT = new RegExp("^[ :!.]+$");
				if (!qT.test(aG7)) return aG0(r, position + 1);
				return position
			}(r, 0);
			if (-1 === eZ) {
				aFx.push(aG1(r, qe));
				break
			}
			0 === eZ ? aFx.push(aG2(r.substring(1, 6), qe, eZ)) : (aFx.push(aG1(r.substring(0, eZ), qe)), aFx.push(aG2(r.substring(eZ + 1, eZ + 6), qe, eZ))), r = r.substring(eZ + 6)
		}
		return aFx
	}

	function aG2(qT, qe, eZ) {
		var aDf = function(qT) {
				var sz = bG.t4.wx(qT),
					aDf = bn.u7.aDy(sz);
				if (aDf) {
					for (aFv.push(aDf); 75 < aFv.length;) aFv.shift();
					return aDf
				}
				for (var aDa = bn.u7.aDa, aB = aDa.length - 1; 0 <= aB; aB--)
					if (aDf = aDa[aB], sz === aDf.sz) return aFv.push(aDf), aDf;
				for (aB = aFv.length - 1; 0 <= aB; aB--)
					if (aDf = aFv[aB], sz === aDf.sz) return aFv.push(aDf), aDf;
				return bn.u7.aDg(sz, qT, 1, 999999, 999999, 0, 0, 0, 0)
			}(qT),
			qT = (0 === eZ && 0 === qe.aEM.id && qe.s1 && (qe.fontSize = bn.lA.aER(aDf.uE, aDf.a4Q), qe.aEP = bn.lA.aES(aDf.a4Q)), document.createElement("span"));
		return qT.textContent = function(aDf, qe, eZ) {
			if (aDf.aG5) return aDf.aG5--, eZ = 2 === qe.aEM.id || (3 === qe.aEM.id || 4 === qe.aEM.id) && 0 !== eZ, aDf.username + (eZ ? " (" + aDf.aDo + ")" : "");
			if (qe.aEM.aEb) return "Redacted " + bF.t4.zz(aDf.sz, 2);
			return aDf.username
		}(aDf, qe, eZ), qT.style.display = "inline-block", qT.style.color = bn.lA.uD(aDf.uE), qT.style.cursor = "pointer", qT.style.margin = "0", qT.style.font = "inherit", qT.style.minWidth = qT.style.minHeight = "1em", bn.lA.uF(aDf) && (qT
			.style.textDecoration = "underline"), aDf.uG && (qT.style.textDecorationLine = "underline", qT.style.textDecorationStyle = "dotted"), bn.lA.aES(aDf.a4Q) && (qT.style.fontWeight = "bold"), qT.onclick = function(e) {
			bn.uU.aFb(e, aDf)
		}, bJ.rE() || (qT.onmouseover = function(e) {
			bn.u5.uH(e, aDf)
		}), tE.push(qT), qT
	}

	function aG1(r, qe) {
		var rk = document.createElement("span");
		return rk.textContent = r, rk.style.color = qe.aEQ, rk.style.margin = "0", rk.style.font = "inherit", rk
	}

	function aGC(aDf, aDn, sz) {
		sz !== aDf.sz || aDf.aDo || (aDf.aDo = aDf.username, aDf.username = aDn)
	}
	this.uO = function() {
		for (var aB = 0; aB < tE.length; aB++) tE[aB].onclick = tE[aB].onmouseover = null;
		aFw = tE = null
	}, this.transform = function(qe) {
		for (var qR = document.createElement("div"), aFx = aFy(qe), aB = 0; aB < aFx.length; aB++) qR.appendChild(aFx[aB]);
		0 === qe.aEM.id && (qR.vx143 = qe.aEM, aFw.push(qR)), qR.style.margin = "0.6em 0.6em", qe.s1 && (qR.style.marginLeft = qR.style.marginRight = "inherit"), qR.style.font = "inherit";
		var aFz = 0 < qe.aEM.id;
		return qe.aEP && (qR.style.fontWeight = "bold"), aFz && (qR.style.paddingLeft = "0.7em"), aFz && (qR.style.fontStyle = "italic"), qR.style.fontSize = qe.fontSize.toFixed(2) + "em", qR
	}, this.aGA = function(aGB) {
		if (aGB && (2 === aGB.id && 1 === aGB.aEO || 3 === aGB.id && 2 === aGB.aEO)) {
			var sz = 3 === aGB.id ? aGB.target : aGB.sz;
			if (!bn.u7.aDy(sz)) {
				for (var aDn = "Redacted " + bF.t4.zz(sz, 2), aDa = bn.u7.aDa, aB = aDa.length - 1; 0 <= aB; aB--) aGC(aDa[aB], aDn, sz);
				for (aB = aFv.length - 1; 0 <= aB; aB--) aGC(aFv[aB], aDn, sz)
			}
		}
	}, this.aDp = function(sz) {
		for (var aGD = aFw, aB = aGD.length - 1; 0 <= aB; aB--) {
			var f4 = aGD[aB];
			if (f4.vx143.sz === sz) {
				for (; f4.firstChild;) t.removeChild(f4, f4.firstChild);
				for (var aFx = aFy(bn.lA.rx(f4.vx143, bn.lA.ry(f4.vx143))), fK = 0; fK < aFx.length; fK++) f4.appendChild(aFx[fK]);
				aGD.splice(aB, 1)
			}
		}
	}, this.aEX = function(sz) {
		for (var aGD = aFw, aB = aGD.length - 1; 0 <= aB; aB--) {
			var f4 = aGD[aB];
			if (f4.vx143.sz === sz) {
				for (; f4.firstChild;) t.removeChild(f4, f4.firstChild);
				f4.vx143.r = "[Redacted Message]";
				for (var aFx = aFy(bn.lA.rx(f4.vx143, bn.lA.ry(f4.vx143))), fK = 0; fK < aFx.length; fK++) f4.appendChild(aFx[fK]);
				aGD.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aGE, aGF, aGG;

	function aGL(aB) {
		var button = aY.rL[aB],
			f8 = button.f8,
			fA = button.fA,
			i = button.i,
			j = button.j;
		vL.fillStyle = button.aGJ, vL.fillRect(f8, fA, i, j), aB === aGE && (vL.fillStyle = aGG, vL.fillRect(f8, fA, i, j)), vL.lineWidth = bc.zg, vL.strokeStyle = aGF, vL.strokeRect(f8, fA, i, j),
			function(button) {
				var f8 = button.f8,
					fA = button.fA,
					i = button.i,
					j = button.j;
				bA.qm.textAlign(vL, 1), bA.qm.textBaseline(vL, 1), vL.font = button.font, vL.fillStyle = aGF, vL.fillText(button.a7Z, Math.floor(f8 + i / 2), Math.floor(fA + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fA = 0, this.gap = 0, this.dd = function() {
		aGE = -1, aGF = bB.nu, aGG = "rgba(255,255,255,0.16)", this.rL = new Array(7), this.j = Math.floor((a0.a1.i9() ? .123 : .093) * h.iA), this.i = Math.floor((a0.a1.i9() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGH = Math.floor(.26 * this.j),
			aGI = bA.qm.sb(1, aGH);
		this.rL[0] = {
			f8: 0,
			fA: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a7Z: "Multiplayer",
			font: aGI,
			aGJ: "rgba(22,88,22,0.8)",
			fontSize: aGH
		}, aGH = Math.floor(.18 * this.j), aGI = bA.qm.sb(1, aGH), this.rL[1] = {
			f8: 0,
			fA: 0,
			i: this.i - this.rL[0].i - this.gap,
			j: this.j,
			a7Z: "Single Player",
			font: aGI,
			aGJ: "rgba(22,88,88,0.8)",
			fontSize: aGH
		}, this.rL[2] = {
			f8: 0,
			fA: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a7Z: "",
			font: this.rL[1].font,
			aGJ: "rgba(100,0,0,0.8)",
			fontSize: this.rL[1].fontSize
		}, this.rL[3] = {
			f8: 0,
			fA: 0,
			i: this.i,
			j: this.j,
			a7Z: "Back",
			font: this.rL[0].font,
			aGJ: "rgba(0,0,0,0.8)",
			fontSize: this.rL[0].fontSize
		}, this.rL[4] = {
			f8: 0,
			fA: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a7Z: "The game was updated!",
			font: this.rL[1].font,
			aGJ: "rgba(100,0,0,0.8)",
			fontSize: this.rL[1].fontSize
		}, this.rL[5] = {
			f8: 0,
			fA: 0,
			i: this.rL[0].i,
			j: Math.floor(.8 * this.j),
			a7Z: "Reload",
			font: this.rL[0].font,
			aGJ: "rgba(0,100,0,0.8)",
			fontSize: this.rL[0].fontSize
		}, this.rL[6] = {
			f8: 0,
			fA: 0,
			i: this.rL[1].i,
			j: this.rL[5].j,
			a7Z: "Back",
			font: this.rL[0].font,
			aGJ: "rgba(0,0,0,0.8)",
			fontSize: this.rL[0].fontSize
		}, this.aA9()
	}, this.aA9 = function() {
		this.fA = Math.floor(.54 * h.j), this.rL[0].f8 = Math.floor(.5 * h.i - .5 * this.i), this.rL[1].f8 = this.rL[0].f8 + this.rL[0].i + this.gap, this.rL[2].f8 = this.rL[3].f8 = this.rL[0].f8, this.rL[4].f8 = this.rL[5].f8 = this.rL[0].f8,
			this.rL[6].f8 = this.rL[1].f8, this.rL[0].fA = Math.floor(.54 * h.j), this.rL[1].fA = this.rL[0].fA, this.rL[2].fA = Math.floor((h.j - this.rL[2].j - this.rL[3].j - this.gap) / 2), this.rL[3].fA = this.rL[2].fA + this.rL[2].j + this
			.gap, this.rL[4].fA = Math.floor((h.j - this.rL[4].j - this.rL[5].j - this.gap) / 2), this.rL[5].fA = this.rL[6].fA = this.rL[4].fA + this.rL[4].j + this.gap
	}, this.aGK = function() {
		aGL(0), aGL(1)
	}, this.aGM = function() {
		aGL(2), aGL(3)
	}, this.aGN = function() {
		aGL(4), aGL(5), aGL(6)
	}, this.a2C = function(f8, fA, mg) {
		var aB = -1;
		return 0 === aa.a1t() ? aB = this.a2g(f8, fA, 0, 2) : 3 === aa.a1t() ? aB = this.a2g(f8, fA, 3, 1) : 5 === aa.a1t() && (aB = this.a2g(f8, fA, 5, 2)), aGE !== aB && (aGE = aB, mg) && (bf.dl = !0), -1 !== aB && (aT.rn(), !0)
	}, this.a2g = function(f8, fA, aGO, size) {
		for (var aB = aGO; aB < aGO + size; aB++)
			if (f8 >= this.rL[aB].f8 && fA >= this.rL[aB].fA && f8 <= this.rL[aB].f8 + this.rL[aB].i && fA <= this.rL[aB].fA + this.rL[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aGQ, aGR, a7k, aGS, aGT, aGU, aGV, aGW, aGX, a7j, aGY, aGZ, aGa, aGb = 1;

	function aGd(aGe) {
		!aGe && 1 === aGa && aGb ? (aGb = 0, b0.y.close(aGa, 3280)) : aGa = (aGa + 1) % b0.y.aGf, aGZ = bf.eQ, b0.y.aGg(aGa, 4) && b0.aFG.aGh(aGa)
	}

	function aGi() {
		0 === aGa ? o.a21(3249) : aGd()
	}

	function aGn(fA, a9r, ts) {
		var nK = Math.floor((h.i - aGS) / 2) + aGV,
			nX = nK + Math.floor(ts * (aGS - 2 * aGV));
		vL.lineWidth = a9r, vL.beginPath(), vL.moveTo(nK, fA), vL.lineTo(nX, fA), vL.lineTo(Math.floor(nK - aGV + ts * aGS), fA + a7k), vL.lineTo(nK - aGV, fA + a7k), vL.closePath()
	}
	this.aGc = 1, this.dd = function() {
		aa.setState(6), aGQ = 0, aGR = 1, aGW = "rgba(0,220,120,0.4)", aGX = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aGb = 1, aGa = this.aGc - 1, aGd(1)
	}, this.resize = function() {
		aGS = Math.floor((a0.a1.i9() ? .5 : .25) * h.iA), aGT = aGS + 12, a7k = Math.floor(.125 * aGS), aGV = 3 * a7k, aGU = Math.floor(.225 * aGS), aGY = Math.floor(.3 * a7k), a7j = bA.qm.sb(0, aGY)
	}, this.a1x = function(a1o) {
		a1o === aGa && aGi()
	}, this.hD = function(f8, fA) {
		var nK = Math.floor((h.i - aGT) / 2),
			nL = Math.floor(.5 * (h.j - bc.gap - a7k - aGU)) + a7k + bc.gap;
		return nK < f8 && f8 < nK + aGT && nL < fA && fA < nL + aGU && (this.a2r(), aY.a2C(f8, fA, !1), !0)
	}, this.a2r = function() {
		b0.y.a22(3260), t.y.z()
	}, this.eU = function() {
		6 === aa.a1t() && (bf.eQ > aGZ + 12e3 && aGi(), 100 < (aGQ += .07 * aGR * (aGQ < 16 ? 5 + aGQ : 84 < aGQ ? 105 - aGQ : 17)) ? (aGQ = 100, aGR = -1) : aGQ < 0 && (aGQ = 0, aGR = 1), aGW = "rgba(0," + Math.floor(190 - 1.9 * aGQ) + "," +
			Math.floor(120 - 1.2 * aGQ) + "," + (.4 + .004 * aGQ) + ")", aGX = "rgba(0," + Math.floor(1.9 * aGQ) + "," + Math.floor(1.2 * aGQ) + "," + (.8 - .004 * aGQ) + ")", bf.dl = !0)
	}, this.vK = function() {
		var f8 = Math.floor((h.i - aGT) / 2),
			fA = Math.floor(.5 * (h.j - bc.gap - a7k - aGU));
		! function(title, fA, a9r, ts) {
			vL.fillStyle = aGX, aGn(fA, a9r, 1), vL.fill(), vL.fillStyle = aGW, aGn(fA, a9r, ts), vL.fill(), vL.strokeStyle = bB.nu, aGn(fA, a9r, 1), vL.stroke(),
				function(aGp, fA) {
					bA.qm.textAlign(vL, 1), bA.qm.textBaseline(vL, 1), vL.font = a7j, vL.fillStyle = bB.nu, vL.fillText(aGp, Math.floor(.5 * h.i), Math.floor(fA + .58 * a7k))
				}(title, fA)
		}(L(133), fA, 3, aGQ / 100),
		function(f8, fA, i, j, a7Z) {
			vL.fillStyle = bB.np, vL.fillRect(f8, fA, i, j), vL.lineWidth = 3, vL.strokeStyle = bB.nu, vL.strokeRect(f8, fA, i, j);
			var f1 = Math.floor(.3 * j);
			bA.qm.textAlign(vL, 1), bA.qm.textBaseline(vL, 1), vL.font = bA.qm.sb(0, f1), vL.fillStyle = bB.nu, vL.fillText(a7Z, Math.floor(f8 + i / 2), Math.floor(fA + j / 2 + .1 * f1))
		}(f8, fA + a7k + bc.gap, aGT, aGU, L(40))
	}
}

function cR() {
	var a1k = 0;
	this.dd = function() {
		aY.dd(), a1k = 0
	}, this.setState = function(aGq) {
		a1k = aGq
	}, this.a1t = function() {
		return a1k
	}, this.aGr = function() {
		this.setState(8), t.x()
	}, this.a2k = function(e) {
		if (!bS.xD) return !1;
		if (!(bf.eQ < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aGs()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1k) return !0;
					if (7 === a1k) return !0
				}
			}
			return !1
		}
	}, this.aGt = function() {
		bZ.resize()
	}, this.aGs = function() {
		return !!bZ.s3()
	}, this.hD = function(f8, fA) {
		!bS.xD || bZ.hD(f8, fA) || 6 === a1k && aZ.hD(f8, fA) || bY.hD(f8, fA) || aT.hD(f8, fA)
	}, this.a2C = function(f8, fA) {
		!aT.aA2 && aY.a2C(f8, fA, !0) || aT.a2C(f8, fA)
	}, this.click = function(f8, fA) {
		aT.a2b()
	}, this.a2F = function(f8, fA, deltaY) {}, this.aGu = function() {
		aY.aA9(), bf.dl = !0
	}, this.vK = function() {
		8 !== a1k && 10 !== a1k && (vL.imageSmoothingEnabled = !0, this.ym(), 0 !== a1k && (aT.vK(), aO.vK(), this.aGv(), bY.vK()), 0 !== a1k && 6 === a1k && aZ.vK(), bZ.vK(), t.vK())
	}, this.ym = function() {
		var aGx, aGw;
		if (__fx.makeMainMenuTransparent) vL.clearRect(0, 0, h.i, h.j);
		else bS.xD ? (aGw = h.i / bS.fC, aGx = h.j / bS.fD, vL.setTransform(aGw = aGx < aGw ? aGw : aGx, 0, 0, aGw, Math.floor((h.i - aGw * bS.fC) / 2), Math.floor((h.j - aGw * bS.fD) / 2)), vL.drawImage(bS.xF, 0, 0), vL.setTransform(1, 0, 0, 1,
			0, 0), vL.fillStyle = bB.np) : vL.fillStyle = bB.nl, vL.fillRect(0, 0, h.i, h.j)
	}, this.aGv = function() {
		var fA = Math.floor(.3 * h.j),
			canvas = ab.aGy("territorial.io"),
			i1 = (i1 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i1,
			f8 = (vL.globalAlpha = .15, vL.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i1 * canvas.width))),
			f8 = Math.floor(f8 / i1),
			fA = Math.floor(fA - .5 * canvas.height * i1),
			fA = Math.floor(fA / i1);
		vL.setTransform(i1, 0, 0, i1, f8, fA), vL.drawImage(canvas, f8, fA), vL.setTransform(1, 0, 0, 1, 0, 0), vL.globalAlpha = 1, vL.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aED = 0;
	var aH0, aH1, aH2, aH3, aH4, aH5 = this.aGz = 0;

	function aH8() {
		aH3 = aH4 = null, aH5 = 0
	}
	this.dd = function(rr, aEA, aEB) {
		t.x(), bn.uO(), aa.setState(10), aH3 = rr, aH4 = aEA, aH5 = aEB, this.aED = rr.aED, this.aGz = aEB, aH0 = 0, aH1 = bf.eQ + 4500, b0.y.a1y = rr.a1y, b0.y.a1r === rr.a1y ? (console.log("direct pass"), aH2 = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a1r, 3247), aH2 = 2, b0.y.aGg(rr.a1y, 5) && b0.pG.aH6()), vL.imageSmoothingEnabled = !0, aa.ym();
		aEA = ab.aGy("loading"), aEB = (a0.a1.i9() ? .396 : .25) * h.iA / aEA.width;
		vL.setTransform(aEB, 0, 0, aEB, Math.floor((h.i - aEB * aEA.width) / 2), Math.floor((h.j - aEB * aEA.height) / 2)), vL.imageSmoothingEnabled = !1, vL.drawImage(aEA, 0, 0), vL.setTransform(1, 0, 0, 1, 0, 0)
	}, this.me = function() {
		0 < aH2 && bf.eQ > aH1 && (aH2--, aH1 += 4500, 0 === bf.aH9) && 0 === bf.kI() && b0.y.aGg(b0.y.a1y, 5)
	}, this.aHA = function() {
		return 10 === aa.a1t() && (bn.aDP.aEE(aH3, aH4, aH5), aH8(), !0)
	}, this.aHB = function() {
		10 === aa.a1t() && 2 <= ++aH0 && (bn.aDP.aEE(aH3, aH4, aH5), aH8())
	}
}

function cS() {
	var aHD, canvas, a13, aHE;

	function aHK(e9, name, aHL, qT) {
		a13[e9] = name, canvas[e9] = new Image, canvas[e9].onload = function() {
			! function(e9, aHL) {
				var a4V, a4W = null;
				7 === aHL ? a4V = bA.a2x.a4Y : 8 === aHL ? (a4V = bA.a2x.a4b, a4W = .1) : 3 === aHL ? (a4V = bA.a2x.a4Z, a4W = .06) : 5 === aHL ? a4V = bA.a2x.a4c : 6 === aHL ? a4V = bA.a2x.a4X : 4 === aHL && (a4V = bA.a2x.a4d);
				canvas[e9] = bA.a2x.a4U(canvas[e9], a4V, a4W)
			}(e9, aHL), aHN()
		}, canvas[e9].onerror = function(e) {
			console.error("Error loading image at index", e9, "Error:", e), aHN()
		}, canvas[e9].src = "data:image/png;base64," + qT
	}

	function aHN() {
		aHD--, aHH()
	}

	function aHH() {
		0 === aHD && (aHD = -1, aHJ(), bf.dl = !0, canvas[7] = aHE, canvas[8] = aHE, canvas[9] = aHE, canvas[10] = aHE, 5 === t.t1) && t.a5i().aHP.resize()
	}

	function aHJ() {
		aL.a5u(), bY.aDF([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xI = new zD, aj.xI.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aHD = 23, canvas = new Array(aHD), a13 = new Array(aHD), (aHE = document.createElement("canvas")).width = 1;
			for (var aB = aHD - (aHE.height = 1); 0 <= aB; aB--) canvas[aB] = aHE;
			aHJ(), aHK(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHK(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHK(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHK(3, "orders", 6,
					"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"
					), aHK(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHK(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHK(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7baaqvsBAAAqqlhw4bxhz/8Ie6+++7o0KFDdg5FarPNNovnnnsuBgwYkJ0C8L0aNmwYjz32WOy+++7ZKdSiioqKuOmmm+Lwww/PTgEAAAAAAAAAoI4w3AMAAAAAAAAAALXsN7/5Tbz99tvZGSxGq1at4vTTT09t6NmzZ2y99dapDfyf999/P4YPH56dAcAy6tWrV6y99trZGSyBf/7zn3HqqadmZ1CLTj311HjrrbeyM/geG2+8cXYCAADVsNVWW8U//vGPOOyww6JBgwbZORS58vLyOO+88+Lxxx+Ptm3bZucA/Ffjxo3j2Wefjd69e2enkKBJkyZxzTXXRL9+/bJTAAAAAAAAAACoAwz3AAAAAAAAAABAgosuuig7gWo49NBDo7Q072VWp5xySpSVlaXdn//nggsuiKqqquwMAJbRfvvtl53AEvj666/j5JNP9hhcZKqqquLUU0+NysrK7BS+o2XLlrHVVltlZwAAsAjDhw+PRx55JNZbb73sFPiWbbfdNl5++eXYe++9s1MAomHDhvHoo4/GZpttlp1CokaNGsWll15qvAcAAAAAAAAAAMM9AAAAAAAAAACQ4YYbboixY8dmZ7AYa665Zhx33HEp9+7SpUvssMMOKffm28aMGRPXX399dgYANaBnz57ZCSyBW2+9NZ544onsDBKMGjUq7r333uwMvsdOO+2UnQAAwPdo2bJlPPbYYzF06NBo0qRJdg58r7Zt28btt98el156aXYKUMQaNmwYTzzxhHFiIsJ4DwAAAAAAAAAA/8dwDwAAAAAAAAAAJDn33HNj/vz52RksRt++fVPue/rpp8cKK6yQcm/+n6qqqhg2bFh2BgA1oHPnzvGjH/0oO4Nq+vTTT+OUU07JziDRKaecEtOnT8/O4Dt+/OMfZycAAPAd2223Xbz88sux3XbbZafAYjVo0CCOP/74eOqpp6Jt27bZOUCRKS0tjYceeshoD9/SqFGjuPjii+Oggw7KTgEAAAAAAAAAIInhHgAAAAAAAAAASHLffffFc889l53BYmywwQa1fkhPu3btYrfddqvVe/L9HnvssXjkkUeyMwCoAQcccECUlJRkZ1BNF198sdGWIjdx4sS49tprszP4jq5du2YnAACwkFNPPTUefPDBWHPNNbNTYIn87Gc/ixdffDF69+6dnQIUkVtuuSW233777AzqoCZNmsRVV10VO+64Y3YKAAAAAAAAAAAJDPcAAAAAAAAAAECis88+OyorK7MzWIz+/fvX6v0GDx4czZs3r9V78r/mzJkTQ4YMyc4AoIb06tUrO4Fqev311+Oiiy7KzqAOGDJkSLz//vvZGSykdevWsckmm2RnAAAUvdLS0rjpppvi/PPPj8aNG2fnwFJZY4014v77749+/fplpwBF4LLLLos+ffpkZ1CHrbjiinHTTTfFxhtvnJ0CAAAAAAAAAEAtM9wDAAAAAAAAAACJ/vKXv8Sjjz6ancFibLrpprHTTjvVyr3Ky8tjn332qZV7sWgjR46M1157LTsDgBpQXl7usL16orKy0nAe/1VZWRlXXHFFdgbfsd1222UnAAAUtTZt2sTzzz8fhxxySJSUlGTnwDJp3rx5XHHFFXHJJZdkpwAF7Pjjj49jjz02O4N6oFWrVjFy5Mho2bJldgoAAAAAAAAAALXIcA8AAAAAAAAAACQbPnx4zJ07NzuDRSgpKYkTTzyxVu41aNCgWGWVVWrlXvywzz//PE4//fTsDABqyAEHHBCNGzfOzqAannjiiXj44YezM6hDLrvsshg/fnx2Bgv58Y9/nJ0AAFC0Ntlkk3j++edj8803z06BGlNWVhYnnHBC3HvvvVFa6q3vQM3aZZdd4rzzzjN2R7V17NjRYxIAAAAAAAAAQJHxShEAAAAAAAAAAEg2ZsyYuP/++7MzWIxtttkmevTosVzvUVZWFgcddNByvQfVc8MNN8SkSZOyMwCoIdtuu212AtUwb968OPvss7MzqIMuv/zy7AQW0qVLl+wEAICitMcee8QjjzwSHTp0yE6B5WLPPfeM5557Llq0aJGdAhSITp06xQ033BBNmjTJTqGe6dmzZ1x77bXZGQAAAAAAAAAA1BLDPQAAAAAAAAAAUAecccYZMXPmzOwMFqGsrCwGDBiwXO8xYMCAaNu27XK9B4v34YcfxqBBg7IzAKhBm2yySXYC1fDII4/Eiy++mJ1BHXTdddfFuHHjsjNYoEOHDtGsWbPsDACAotK3b9+47bbbDJpQ8LbYYot45plnDFQBy6y0tDRuu+22aN26dXYK9dQvf/nLOOaYY7IzAAAAAAAAAACoBYZ7AAAAAAAAAACgDnj33Xfj9ttvz85gMXbeeefo1KnTcrv+4YcfvtyuTfVdcsklUVlZmZ0BQA3p0aNHtG/fPjuDxZg7d24MGTIkO4M67IYbbshOYIEGDRrELrvskp0BAFA0Bg4cGFdffXU0adIkOwVqRefOnePJJ5+Mrl27ZqcA9dgNN9wQPXr0yM6gHispKYlzzz03Nt544+wUAAAAAAAAAACWM8M9AAAAAAAAAABQRwwdOjSmTZuWncEiNG7cOAYNGrRcrt2/f//o2LHjcrk21ff666/HZZddlp0BQA36xS9+kZ1ANTzwwAMxbty47AzqsCuvvDI++OCD7AwW6N69e3YCAEBROP/882PEiBHRoEGD7BSoVWuttVY89thjscUWW2SnAPXQYYcdFoccckh2BgWgvLw8/vCHP0RpqaNZAAAAAAAAAAAKmVeHAAAAAAAAAABAHTFlypT4/e9/n53BYuy1117RsmXLGr/ukUceWePXZMnMnz8/zj777OwMAGrYlltumZ3AYnz99ddxzjnnZGdQx1VVVcUf//jH7AwW6NKlS3YCAEDBu+SSS+K0006LkpKS7BRI0aZNm7jvvvuM9wBLpEOHDnHhhRcaWqHGdOvWLa688srsDAAAAAAAAAAAliOvNgIAAAAAAAAAgDpk2LBh8cknn2RnsAjl5eUxaNCgGr1mnz59YsMNN6zRa7Lk/vrXv8Z9992XnQFADSotLY1u3bplZ7AYjz/+eIwbNy47g3rgwgsvjOnTp2dnEBHrrLNOdgIAQEG74YYb4oQTTsjOgHStW7eO++67L7bddtvsFKCeuPHGG2PVVVfNzqDA9O3bN/baa6/sDAAAAAAAAAAAlhPDPQAAAAAAAAAAUIfMmTMnrrrqquwMFqNPnz7RuHHjGrvescceW2PXYunMmzcvzjjjjOwMAGrYbrvtFiuuuGJ2BotQVVUVv/nNb7IzqCdmzZoVDz/8cHYGEbHmmmtGWVlZdgYAQEG64YYb4pe//GV2BtQZrVu3jttvvz222GKL7BSgjhs8eHD89Kc/zc6gADVo0CAuvfTSqKioyE4BAAAAAAAAAGA5MNwDAAAAAAAAAAB1zAUXXBDvvfdedgaL0KpVqxgwYECNXGvHHXeMzTffvEauxdK7995748UXX8zOAKCGbbfddtkJLMbzzz8fzz33XHYG9ciVV14ZVVVV2RlFr1GjRrHNNttkZwAAFJxrr73WaA98j1VXXTXuu+++6N69e3YKUEd17tw5TjnllOwMCli7du3i8ssvz84AAAAAAAAAAGA5MNwDAAAAAAAAAAB1TFVVVVx88cXZGSzGoYceWiPXOfnkk6OkpKRGrsXSmTFjRgwaNCg7A4DloEePHtkJLIaDDllSo0ePjldeeSU7g4jYZJNNshMAAArKJZdcEkceeWR2BtRZrVu3jvvvvz86d+6cnQLUQVdffXWstNJK2RkUuP333z922WWX7AwAAAAAAAAAAGqY4R4AAAAAAAAAAKiDfve738Xrr7+encEirLXWWnH88ccv0zW22GKL6NWrVw0VsbRuvvnmmDBhQnYGADWsYcOGscEGG2RnsAj//Oc/47777svOoB669957sxOIiB/96EfZCQAABeOss86KE044ITsD6rw11lgj7r///mjTpk12ClCHHHvssbHVVltlZ1AEGjRoEBdddFGUljqqBQAAAAAAAACgkHg1CAAAAAAAAAAA1FHnn39+dgKL0bdv32X6+lNPPTXKyspqqIal8Z///CcGDBiQnQHAcrD33ntHkyZNsjNYhLvuuis7gXrqmmuuiRkzZmRnFL2OHTtmJwAAFIRTTjklBg4cmJ0B9cY666wTo0aNisaNG2enAHVARUVFDBo0KDuDIrLeeuvFRRddlJ0BAAAAAAAAAEANMtwDAAAAAAAAAAB11F133RUvvPBCdgaL0KVLlzjwwAOX6mvXX3/92GmnnWq4iCV1+eWXx5w5c7IzAFgOevbsmZ3AIkyfPj0uueSS7AzqqVmzZsUzzzyTnVH0Vl999ewEAIB677DDDosRI0YYeIcl1L179/jTn/6UnQHUAZdeemm0adMmO4Mic+SRR8a6666bnQEAAAAAAAAAQA0x3AMAAAAAAAAAAHXY8OHDo6qqKjuDRejfv/9Sfd3AgQNjhRVWqOEalsSbb74ZF1xwQXYGAMvJxhtvnJ3AIvz5z3+OWbNmZWdQj915553ZCUVvtdVWc8A8AMAy2GGHHeLyyy+PRo0aZadAvbTtttvG9ddfn50BJNpss81i//33z86gCDVr1szzzAAAAAAAAAAABcRwDwAAAAAAAAAA1GFPPPFEPPHEE9kZLMJmm20WO+644xJ9Tdu2bWPPPfdcTkVU14gRI7ITAFiOOnfunJ3AD6iqqoqrr746O4N67o477ojPPvssO6OoNWzYMH7yk59kZwAA1Etdu3aNm2++OZo3b56dAvXaEUccEYMHD87OAJKce+65BvBIs+uuu8Z2222XnQEAAAAAAAAAQA0w3AMAAAAAAAAAAHXcGWecEfPmzcvO4AeUlJTESSedtERfM2jQIAcyJnv++efj9ttvz84AYDnZcccdo7y8PDuDHzB27Nh44YUXsjMoAM8991x2QtHr1q1bdgIAQL1TUVERd999d7Rq1So7BQrC0KFDY++9987OAGrZvvvuG1tvvXV2BkWsrKwszjrrrOwMAAAAAAAAAABqgOEeAAAAAAAAAACo41555ZV48MEHszNYhG222SZ69OhRrc8tLy+P/fbbbzkXsSiVlZVxxhlnZGcAsBz16tUrO4FFeOCBB7ITKBCjRo3KTih6HTt2zE4AAKh37r333lh33XWzM6BgNGrUKK6++uro2rVrdgpQi04//fQoKSnJzqDIbbbZZtG3b9/sDAAAAAAAAAAAlpHhHgAAAAAAAAAAqAcGDRoUs2fPzs7gB5SVlcWAAQOq9bkDBw6MFi1aLOciFuVPf/pTPP3009kZACxH3bp1y07gB8yePTuuvvrq7AwKxB//+Mf44osvsjOKWrt27bITAADqlWuvvdbYLCwHq666atx+++3RuHHj7BSgFhx55JGx0UYbZWdARESceOKJ2QkAAAAAAAAAACwjwz0AAAAAAAAAAFAPvPvuu3HnnXdmZ7AIO++8c3Tq1GmRn1NWVhYHHXRQLRXxfWbPnh0DBw7MzgBgOevcuXN2Aj/g2WefjenTp2dnUCAqKytj7Nix2RlFbbXVVstOAACoN4499tjo27dvdgYUrA022CBuvfXW7AygFpxwwgnZCfBfnTt3jqOOOio7AwAAAAAAAACAZWC4BwAAAAAAAAAA6omBAwc65LwOa9y4cQwaNGiRn3PqqafG6quvXktFfJ9bb7013n777ewMAJaj9u3be7ytw0aOHJmdQIF57rnnshOKmuEeAIDq+elPfxrnnntulJSUZKdAQdtrr73itNNOy84AlqOjjjrKcDt1zvHHH5+dAAAAAAAAAADAMjDcAwAAAAAAAAAA9cSUKVPixhtvzM5gEfbcc89o2bLlD/73ww8/vBZr+K4pU6Y4sA+gCOy6664OQq6jPv300/jjH/+YnUGBueeee2L+/PnZGUVr1VVXzU4AAKjzWrRoETfeeGM0b948OwWKwhlnnBFbb711dgawnPzqV7/KToD/0blz5zjqqKOyMwAAAAAAAAAAWEqGewAAAAAAAAAAoB4ZPHhwfPrpp9kZ/ICVVlopBg4c+L3/7eijj4511lmnlotY2NVXXx0zZszIzgBgOdtkk02yE/gBTz/9dFRVVWVnUGDGjRsX77//fnZG0WrevPkix0sBAIi4+eabo0OHDtkZUDSaNm0av/vd76Jx48bZKUAN69OnT3Tr1i07A77Xsccem50AAAAAAAAAAMBSMtwDAAAAAAAAAAD1yJw5c+Kaa67JzmAR+vTpE+uvv3506tTpWx/9+vXLTitq7733Xpx99tnZGQDUgg022CA7gR/wwAMPZCdQoP7xj39kJxS1jTbaKDsBAKDOGjx4cOy8887ZGVB01l133fjDH/6QnQHUMMMo1GVdunSJvffeOzsDAAAAAAAAAIClYLgHAAAAAAAAAADqmREjRsSECROyM/gBrVu3jvHjx8fbb7/9rY9u3bplpxW1888/P6qqqrIzAKgFHTp0yE7ge3z22Wdx1113ZWdQoEaPHp2dUNTWXnvt7AQAgDqpV69eMWjQoOwMKFr77bdfHHHEEdkZQA3p2bNnbLbZZtkZsEj9+vXLTgAAAAAAAAAAYCkY7gEAAAAAAAAAgHqmqqoqLrnkkuwMqDdefvnl+P3vf5+dAUAt6Nq1a7Ro0SI7g+/x3HPPZSdQwEaNGpWdUNRWX3317AQAgDqnYcOGcc0110STJk2yU6BolZSUxLnnnhvt2rXLTgFqwHHHHRelpY7HoG7baqutYuONN87OAAAAAAAAAABgCXllEgAAAAAAAAAA1ENXXHFF/POf/8zOgDqvqqoqzjzzzOwMAGrJNttsk53AD3j44YezEyhg48ePj4kTJ2ZnFK02bdpkJwAA1DnXX399rLvuutkZUPRatmwZ1113XXYGsIzatGkTO++8c3YGLFaDBg3i5JNPzs4AAAAAAAAAAGAJGe4BAAAAAAAAAIB66oILLshOgDrv0UcfjUcffTQ7A4BastFGG2Un8D2mT58eN998c3YGBe6tt97KTihaK6+8cnYCAECdcsABB8SBBx6YnQEssOOOO8Zxxx2XnQEsgxNOOCGaNWuWnQHV8vOf/zzKy8uzMwAAAAAAAAAAWAKGewAAAAAAAAAAoJ669dZbY/To0dkZUGfNmTMnBg8enJ0BQC1ab731shP4Hq+++mpUVlZmZ1Dgxo8fn51QtAz3AAD8Py1atIgLL7wwysrKslOAhQwdOjTatWuXnQEspT322CM7AaqtvLw8TjjhhOwMAAAAAAAAAACWgOEeAAAAAAAAAACox0aMGBFVVVXZGVAn3XXXXfH6669nZwBQizp06JCdwPd4+umnsxMoAmPGjMlOKFqGewAA/p9rr7022rZtm50BfMeqq64aV155ZXYGsBR22mkng+3UO3vuuWd2AgAAAAAAAAAAS8BwDwAAAAAAAAAA1GMPP/xwPPXUU9kZUOdMmzYtTjvttOwMAGpRu3btolWrVtkZfMf8+fPjrrvuys6gCDz66KNGTZOUl5dnJwAA1Al9+vSJPfbYIzsD+AE///nP48ADD8zOAJbQEUcckZ0AS6xbt26x5ZZbZmcAAAAAAAAAAFBNhnsAAAAAAAAAAKCeGz58eMybNy87A+qU66+/PqZMmZKdAUAt2mabbbIT+B5vv/12vPvuu9kZFIEpU6bEpEmTsjOKUvPmzbMTAADSNWvWLC644IIoLfW2XairSkpK4uyzz46GDRtmpwDVVFZWFr169crOgCVWUlISRx55ZHYGAAAAAAAAAADV5BXAAAAAAAAAAABQzz3//PMxatSo7AyoMz788MMYMmRIdgYAtWzDDTfMTuB7vPTSS9kJFJGPPvooO6EoNW3aNDsBACDdFVdcEe3atcvOABZjrbXWiosuuig7A6imvn37xsorr5ydAUtlp512MuoIAAAAAAAAAFBPeJUHAAAAAAAAAAAUgGHDhsXs2bOzM6BOuOiii6KysjI7A4Batu6662Yn8D0ef/zx7ASKyIQJE7ITilKzZs2yEwAAUvXu3TsOPPDA7Aygmo444ojYeOONszOAathzzz2zE2CptWrVKg4//PDsDAAAAAAAAAAAqsFwDwAAAAAAAAAAFIBx48bFPffck50B6f7+97/HlVdemZ0BQIIOHTpkJ/Ads2bNipEjR2ZnUETee++97ISiVFZWFm3atMnOAABIc9FFF0XDhg2zM4Bqatq0aVx44YXZGcB3XHfddTF58uRvffTu3Ts7C5bJ7rvvnp0AAAAAAAAAAEA1GO4BAAAAAAAAAIACMWTIkPjiiy+yMyDN/Pnz4+yzz87OACBJ+/btsxP4jn/9619RWVmZnUEReeONN7ITila7du2yEwAAUpx++unRrVu37AxgCW2zzTaxzz77ZGcAC6moqIhVV131Wx9lZWXZWbBMevbs6f9jAAAAAAAAAIB6wHAPAAAAAAAAAAAUiIkTJ8Yf//jH7AxI85e//CXuv//+7AwAEnTt2jWaN2+encF3vPbaa9kJFJl//vOf2QlFq2nTptkJAAC1rmXLlnHSSSdlZwBLoaSkJIYNG5adAUCBq6ioiMMOOyw7AwAAAAAAAACAxTDcAwAAAAAAAAAABWTo0KExefLk7AyodV9//XUMHTo0OwOAJJtttll2At/j6aefzk6gyIwbNy7mzp2bnVGUWrVqlZ0AAFDrLr744mjZsmV2BrCUOnfuHAMGDMjOAKDA7b777tkJAAAAAAAAAAAshuEeAAAAAAAAAAAoIDNmzIjrr78+OwNq3b333hujR4/OzgAgyfrrr5+dwHfMnTs37r///uwMitCUKVOyE4pS48aNsxMAAGrVZpttFvvuu292BrCMjj32WD/PALBc9ezZM8rKyrIzAAAAAAAAAABYBMM9AAAAAAAAAABQYM4888z48MMPszOg1syYMSMGDhyYnQFAoo4dO2Yn8B3/+te/Ys6cOdkZFCHDPTmaNm2anQAAUKvOOeecaNSoUXYGsIxWX331GD58eHYGAAWsoqIi+vTpk50BAAAAAAAAAMAiNMgOAAAAAAAAAAAAalZlZWVcfvnlcdFFF2WnQK248cYbjVUBFLk111wzO4HveP3117MTKFK77LJLNG/ePDuj6EycODE7AQCg1uyzzz7Rq1ev7AyghhxxxBFx0UUXGYIFYLnZYYcd4tZbb83OAAAAAAAAAADgBxjuAQAAAAAAAACAAvTb3/42+vbtG+uvv352CixXn3zySQwcODA7A4Bkq6++enYC3/Hqq69mJ1CkJk2alJ0AAECBGzJkSJSUlGRnADVklVVWiTPPPDP69++fnQJAgdpss82yEwAAAAAAAAAAWITS7AAAAAAAAAAAAGD5+M1vfpOdAMvdpZdeGnPmzMnOACBRs2bNYtVVV83O4Dsef/zx7AQAAIAa169fv+jatWt2BlDD+vTpEy1btszOAKBAdezYMbp06ZKdAQAAAAAAAADADzDcAwAAAAAAAAAABerGG2+MMWPGZGfAcjN+/Pi46KKLsjMASLbllltGSUlJdgYLmTRpUrz99tvZGQAAADXupJNOyk4AloOKioo488wzszMAKFAlJSWx3377ZWcAAAAAAAAAAPADDPcAAAAAAAAAAEABO+ecc2L+/PnZGbBcnHPOOdkJANQBXbt2zU7gO4z2AAAAhWjAgAGxzjrrZGcAy0mfPn2iRYsW2RkAFKiePXtmJwAAAAAAAAAA8AMM9wAAAAAAAAAAQAF78MEH45lnnsnOgBr33HPPxR133JGdAUAd0KFDh+wEvuONN97ITgAAAKhRpaWlcfTRR2dnAMtRRUVFDB48ODsDgAK10UYbZScAAAAAAAAAAPADDPcAAAAAAAAAAECBO/PMM6OysjI7A2rMN998E0OHDs3OAKCOWGONNbIT+I5XXnklOwEAAKBGnXrqqbHWWmtlZwDLWZ8+faJx48bZGQAUoJVWWil23HHH7AwAAAAAAAAAAL6H4R4AAAAAAAAAAChwzz77bPz5z3/OzoAa89BDD8Wzzz6bnQFAHdG2bdvsBBYyf/78ePLJJ7MzAAAAakxpaWkcffTR2RnUgsrKypg+fXr85z//iQ8++OBbH5MmTYovvvgiKisrszNZjlq3bh0DBgzIzgCgQG2zzTbZCQAAAAAAAAAAfI8G2QEAAAAAAAAAAMDyd8YZZ8T2228fK6ywQnYKLJNZs2Y5NA+Ab2ndunV2AguZPHlyfPLJJ9kZAAAANeaEE06ItdZaKzuDGlJZWRkfffRRvPfee/H222/HhAkT4u2334433ngj3n///Wpdo0OHDtG1a9fo1KlTrLXWWrHOOutEhw4don379tGoUaPl/CdgeTv44INj+PDh2RkAFKAePXpkJwAAAAAAAAAA8D0M9wAAAAAAAAAAQBF4/fXX4957740DDjggOwWWyS233BLvvvtudgYAdUjLli2zE1jIhAkTshMAAABq1JFHHpmdwDKYP39+vPvuu/Hyyy/Hc889F/fff39MmTJlma75/vvvf+/IT3l5eey+++7Rs2fP2GKLLeJHP/pRlJWVLdO9qH0dOnSIvn37xg033JCdAkCB2WCDDbITAAAAAAAAAAD4HqXZAQAAAAAAAAAAQO0YNGhQzJw5MzsDltrkyZPj9NNPz84AoA5Zf/31Y4UVVsjOYCHvvfdedgIAAECNOeyww2L99dfPzmApjB8/Pi6++OLYZJNNYr311ouDDz44rrvuumUe7VmUGTNmxC233BJHH310bLjhhtGxY8cYPnx4vPLKK1FZWbnc7kvNO+KII7ITAChAq666amy11VbZGQAAAAAAAAAAfIfhHgAAAAAAAAAAKBIffvhh3HLLLdkZsNSuuuqqmDFjRnYGAHXIhhtumJ3Ad/zrX//KTgAAAKgxv/rVr7ITWAJffvlljBw5Mrbeeuvo0qVLnHrqqfHaa6+l9Xz44YcxfPjw2GyzzaJbt25x/fXXx+TJk9N6qL5NN900tt566+wMAApQr169shMAAAAAAAAAAPgOwz0AAAAAAAAAAFBEBg8eHFOnTs3OgCX2zjvvxDnnnJOdAUAd07Fjx+wEvmPMmDHZCQAAADVixx13jE022SQ7g2qYMmVKXHrppdGhQ4fYf//949lnn81O+h/jx4+Po48+OlZfffUYNGhQTJgwITuJRSgpKYn+/ftnZwBQgLp165adAAAAAAAAAADAdxjuAQAAAAAAAACAIjJ9+vS44YYbsjNgiV1wwQVRVVWVnQFAHbP66qtnJ7CQefPmxV//+tfsDAAAgBpx7LHHRklJSXYGizB9+vS48MILY80114yTTz45pk6dmp20WJWVlXH++edHp06dYvDgwTFp0qTsJH7ADjvsEBUVFdkZABSY9dZbLzsBAAAAAAAAAIDvMNwDAAAAAAAAAABFZsiQITFx4sTsDKi20aNHxx/+8IfsDADqoNatW2cnsJBJkybFvHnzsjMAAACW2brrrhu9e/fOzuAHfPPNN3H77bdHly5d4vTTT485c+ZkJy2xqqqqOO+882L99deP3/3udzF37tzsJL6jefPmceqpp2ZnAFBg1l577SgrK8vOAAAAAAAAAABgIYZ7AAAAAAAAAACgyFRWVsZVV12VnQHVUllZGWeeeWZ2BgB1lOGeuuWTTz7JTgAAAKgRv/71r2OFFVbIzuB7jB8/Pn7+85/HQQcdVBA/h86YMSOOOeaY2G677eK1117LzuE79tprr+wEAApM48aNY+edd87OAAAAAAAAAABgIYZ7AAAAAAAAAACgCF1wwQXxzjvvZGfAYj366KPx2GOPZWcAUEetssoq2Qks5MMPP8xOAAAAWGZlZWWx++67Z2fwHd98801cddVVseGGGxbk74yff/75+PGPfxxXXHFFfPPNN9k5LLDeeuvFTjvtlJ0BQIHZfPPNsxMAAAAAAAAAAFiI4R4AAAAAAAAAAChSF110UXYCLNJXX30VgwYNys4AoA4z3FO3TJgwITsBAABgmR1//PHRqlWr7AwW8sknn8R+++0Xxx13XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHK(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHK(8,
					"googleplay", 3,
					"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"
					), aHK(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHK(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHK(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHK(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHK(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHK(14, "bestPlayer", 5,
					"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"
					), aHK(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHK(16, "apple", 3,
					"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"
					), aHK(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHK(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHK(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHK(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHK(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHK(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e9) {
		return canvas[e9]
	}, this.aGy = function(name) {
		for (var aB = a13.length - 1; 0 <= aB; aB--)
			if (a13[aB] === name) return canvas[aB];
		return aHE
	}, this.tT = function() {
		return aHD <= 0
	}, this.aHG = function() {
		aHD = 0, aHH()
	}
}

function cT() {
	var aHS, aHT, aHU, aHV, aHW, aHX, aHY, aHZ, aHa, aHb, aHQ = [
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
		aHR = [
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

	function aHh(jb, nc) {
		for (var aB = jb; aB < nc; aB++) aHS[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aHT[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aHU[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aHg(jb, nc) {
		for (var colorsData = aD.data.colorsData, aB = jb; aB < nc; aB++) {
			var fS = colorsData[aB];
			aHS[aB] = 4 * (fS >> 12), aHT[aB] = 4 * (fS >> 6 & 63), aHU[aB] = 4 * (63 & fS)
		}
	}

	function aHs(ef, aHu) {
		aCa[ef] = 0, aCa[ef + 1] = 0, aCa[ef + 2] = aHu, aCa[ef + 3] = 0, aHv(ef)
	}

	function aHv(ef) {
		var f8;
		bb.nk || (f8 = ac.yn(ef), ef = ac.yo(ef), bb.nk = f8 >= ba.aCZ[0] && f8 <= ba.aCZ[2] && ef >= ba.aCZ[1] && ef <= ba.aCZ[3])
	}
	this.f3 = new Int32Array(4), this.de = function() {
		var f3 = this.f3;
		f3[0] = -4 * bS.fC, f3[1] = 4, f3[2] = -f3[0], f3[3] = -f3[1]
	}, this.dd = function() {
		if (aHS = new Uint8Array(aD.ey), aHT = new Uint8Array(aD.ey), aHU = new Uint8Array(aD.ey), aHV = new Uint8Array(aD.ey), aHW = new Uint8Array(aD.ey), aHX = new Uint8Array(aD.ey), aHY = new Uint8Array(aD.ey), aHZ = new Uint8Array(aD.ey),
			aHa = new Uint8Array(aD.ey), aHb = new Uint8Array(aD.ey), this.a90 = new Uint8Array(aD.ey), aD.hu)
			for (var aBF = bg.aBF, aB = aD.ey - 1; 0 <= aB; aB--) {
				var eZ = aBF[aB],
					lG = bL.du((aHR[eZ][3] + 1) * ay.random(), ay.value(100));
				aHS[aB] = aHQ[eZ][0] + lG * aHR[eZ][0], aHT[aB] = aHQ[eZ][1] + lG * aHR[eZ][1], aHU[aB] = aHQ[eZ][2] + lG * aHR[eZ][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aHg(0, aD.kL), aHh(aD.kL, aD.ey)) : aHh(0, aD.ey) : aHg(0, aD.ey);
		! function() {
			var aB, f4;
			for (aB = aD.ey - 1; 0 <= aB; aB--) f4 = bL.du(aHS[aB] + aHT[aB] + aHU[aB], 3), aHS[aB] += aHn(f4 - aHS[aB], 2), aHT[aB] += aHn(f4 - aHT[aB], 2), aHU[aB] += aHn(f4 - aHU[aB], 2), aHS[aB] -= aHS[aB] % 4, aHT[aB] -= aHT[aB] % 4, aHU[
				aB] -= aHU[aB] % 4
		}(),
		function() {
			for (var aB = aD.ey - 1; 0 <= aB; aB--) aHS[aB] += bL.du(aB, 128), aHT[aB] += bL.du(aB % 128, 32), aHU[aB] += bL.du(aB % 32, 8), aHV[aB] = aB % 8
		}(), this.aHk(),
			function() {
				for (var aB = aD.ey - 1; 0 <= aB; aB--) aHW[aB] = aHS[aB] < 32 ? aHS[aB] + 32 : aHS[aB] - 32, aHX[aB] = aHT[aB] < 32 ? aHT[aB] + 32 : aHT[aB] - 32, aHY[aB] = aHU[aB] < 32 ? aHU[aB] + 32 : aHU[aB] - 32
			}(),
			function() {
				for (var aB = aD.ey - 1; 0 <= aB; aB--) aHZ[aB] = 235 < aHS[aB] ? aHS[aB] - 20 : aHS[aB] + 20, aHa[aB] = 235 < aHT[aB] ? aHT[aB] - 20 : aHT[aB] + 20, aHb[aB] = 235 < aHU[aB] ? aHU[aB] - 20 : aHU[aB] + 20
			}()
	}, this.a7r = function(player) {
		var g = bO.fZ;
		return g[0] = aHS[player], g[1] = aHT[player], g[2] = aHU[player], g
	}, this.aHk = function() {
		for (var aB = aD.ey - 1; 0 <= aB; aB--) this.a90[aB] = aHS[aB] + aHT[aB] + aHU[aB] < 280 ? 0 : 1
	}, this.yn = function(ef) {
		return bL.du(ef, 4) % bS.fC
	}, this.yo = function(ef) {
		return bL.du(ef, 4 * bS.fC)
	}, this.yL = function(f8, fA) {
		return Math.floor(4 * (fA * bS.fC + f8))
	}, this.yb = function(ef) {
		var f3 = this.f3;
		return this.aHo(ef + f3[0]) || this.aHo(ef + f3[1]) || this.aHo(ef + f3[2]) || this.aHo(ef + f3[3])
	}, this.fP = function(ef) {
		var f3 = this.f3;
		return this.f6(ef + f3[0]) || this.f6(ef + f3[1]) || this.f6(ef + f3[2]) || this.f6(ef + f3[3])
	}, this.yZ = function(ef, player) {
		var f3 = this.f3;
		return this.aHp(ef + f3[0], player) || this.aHp(ef + f3[1], player) || this.aHp(ef + f3[2], player) || this.aHp(ef + f3[3], player)
	}, this.ga = function(ef) {
		return 208 <= aCa[ef + 3]
	}, this.yh = function(player, ef) {
		return this.ga(ef) && this.yk(player, ef)
	}, this.yk = function(player, ef) {
		return player === this.et(ef)
	}, this.aHq = function(ef) {
		return 208 <= aCa[ef + 3] && aCa[ef + 3] < 224
	}, this.jW = function(ef) {
		return 224 <= aCa[ef + 3] && aCa[ef + 3] < 248
	}, this.ya = function(ef) {
		for (var f3 = this.f3, aB = 3; 0 <= aB; aB--)
			if (this.iE(ef + f3[aB])) return !0;
		return !1
	}, this.ew = function(ef) {
		return this.ga(ef) || this.es(ef)
	}, this.iE = function(ef) {
		return 0 === aCa[ef + 3] && 2 === aCa[ef + 2]
	}, this.es = function(ef) {
		return 0 === aCa[ef + 3] && 1 === aCa[ef + 2]
	}, this.xQ = function(ef) {
		return 0 === aCa[ef + 3] && 3 === aCa[ef + 2]
	}, this.f6 = function(ef) {
		return 0 === aCa[ef + 3] && 5 === aCa[ef + 2]
	}, this.aHo = function(ef) {
		return 0 === aCa[ef + 3] && 3 <= aCa[ef + 2]
	}, this.ej = function(ef) {
		return (aCa[ef] >> 1 << 8) + aCa[ef + 1]
	}, this.aHr = function(ef) {
		return 1 & aCa[ef]
	}, this.aHp = function(ef, player) {
		return this.es(ef) || this.ga(ef) && player !== this.et(ef)
	}, this.et = function(ef) {
		return aCa[ef] % 4 * 128 + aCa[ef + 1] % 4 * 32 + aCa[ef + 2] % 4 * 8 + aCa[ef + 3] % 8
	}, this.yi = function(ef) {
		aHs(ef, 1)
	}, this.aHt = function(ef) {
		aHs(ef, 2)
	}, this.yM = function(ef, player) {
		aCa[ef] = aHS[player], aCa[ef + 1] = aHT[player], aCa[ef + 2] = aHU[player], aCa[ef + 3] = 208 + aHV[player], aHv(ef)
	}, this.gV = function(ef, player) {
		aCa[ef] = aHW[player], aCa[ef + 1] = aHX[player], aCa[ef + 2] = aHY[player], aCa[ef + 3] = 224 + aHV[player], aHv(ef)
	}, this.jX = function(ef, player) {
		aCa[ef] = aHZ[player], aCa[ef + 1] = aHa[player], aCa[ef + 2] = aHb[player], aCa[ef + 3] = 248 + aHV[player], aHv(ef)
	}
}

function cs() {
	var aHw = 0,
		aHy = new Uint16Array(64);

	function vw(a5y) {
		aHw -= 2;
		for (var aB = a5y; aB < aHw; aB += 2) aHy[aB] = aHy[aB + 2], aHy[aB + 1] = aHy[aB + 3]
	}
	this.dd = function() {
		aHw = 0
	}, this.eU = function() {
		var aB, jU, ia;
		if (0 !== aHw)
			if (0 === ag.mu[aD.el]) aHw = 0;
			else if (0 === ad.g7(aD.el)) aHw = 0;
		else
			for (aB = aHw - 2; 0 <= aB; aB -= 2)(jU = aHy[aB]) < aD.ey && 0 === ag.mu[jU] ? vw(aB) : (ia = aHy[aB + 1], (jU >= aD.ey && bs.aI0(aD.el) || jU < aD.ey && bs.aI1(aD.el, jU)) && (b8.hQ.hX(ia, jU), vw(aB)))
	}, this.hY = function(jU, ia) {
		! function(jU, ia) {
			for (var aB = 0; aB < aHw; aB += 2)
				if (aHy[aB] === jU) return aHy[aB + 1] = Math.min(aHy[aB + 1] + ia, 1023), 1;
			return
		}(jU, ia) && 64 !== aHw && (aHy[aHw] = jU, aHy[aHw + 1] = ia, aHw += 2)
	}
}

function cU() {
	function aI8(player) {
		var dt;
		bA.gM.a46(player) && (dt = ag.h2[player] - ag.a4B[player] + ad.aIA(player), bd.gQ(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.h2[player] = 0, ag.a4B[player] = 0
	}

	function aIH() {
		aX.show(!1, !1, !1, !0), aW.aBi(), bR.a0T.a1D()
	}

	function aI5(player, aIG) {
		for (var aB = aIG.length - 1; 0 <= aB; aB--) ad.aIJ(aIG[aB], player)
	}

	function aI7(player) {
		var it = ag.it,
			iu = ag.iu,
			iv = ag.iv,
			iw = ag.iw,
			fC = bS.fC;
		if (ag.go[player]) {
			ag.go[player] = 0;
			for (var nK = it[player], nL = iv[player], f8 = iu[player]; nK <= f8; f8--)
				for (var fA = iw[player]; nL <= fA; fA--) {
					var gY = 4 * (fA * fC + f8);
					ac.yh(player, gY) && ac.yi(gY)
				}
		}
		iu[player] = iw[player] = 0, it[player] = iv[player] = Math.max(fC, bS.fD)
	}
	this.dm = function(gY) {
		var player, dt = ag.go[gY] + ag.yH[gY];
		bN.y.kP[gY] ? dt && (aI5(player = gY, ad.aI6(player)), aI7(player), aF.gO(player), ad.clear(player), aI8(player), function(player) {
			ag.yH[player] = 0, ag.gS[player] = [], ag.gg[player] = [], ag.gh[player] = [], ag.fQ[player] = []
		}(player)) : !dt && ag.gS[gY].length || this.aI4(gY)
	}, this.aI4 = function(player) {
		! function(player) {
			bA.gM.ji(player) || (ag.a1H[player] = bi.a1X.aIF(), aD.a0k++);
			var aIG = ad.aI6(player);
			0 === aIG.length ? bA.gM.a43(player) && aIH() : (aI5(player, aIG), function(player, aIG) {
				var aIL = aIG[function(aIG) {
					var aB, e9 = 0;
					for (aB = aIG.length - 1; 1 <= aB; aB--) ag.go[aIG[aB]] > ag.go[aIG[e9]] && (e9 = aB);
					return e9
				}(aIG)];
				9 === aD.kd && (1 === bg.ez[player] ? ay.kD(8) && az.aIM(aIL) : aE.hj[player] && (aN.a7N(765, 0), aN.zA(280, L(134, [ag.zB[aIL], ag.zB[player]]), 765, aIL, bB.nl, bB.p5, -1, !0)));
				if (bA.gM.a43(player)) aIH(), aN.a0u(aIL, 1);
				else {
					for (var aB = aIG.length - 1; 0 <= aB; aB--)
						if (bA.gM.a46(aIG[aB]) && (bd.mq[4 - bA.gM.ji(player)]++, bA.gM.a43(aIG[aB]))) return aN.a0u(player, 0);
					bA.gM.ji(player) || aN.a77(0, player, aIL)
				}
			}(player, aIG))
		}(player), aI7(player), aI8(player),
			function(player) {
				ag.mu[player] = 0, ag.gS[player] = null, ag.gg[player] = null, ag.gh[player] = null, ag.fQ[player] = null
			}(player), aF.gO(player), ad.clear(player), bN.aID.aIE(player)
	}
}

function cx() {
	var input;

	function aIN(e) {
		(e = e.target.files) && 0 < e.length && b6.aIQ(e[0])
	}

	function aIU(e) {
		var eZ = new Image;
		eZ.onload = aIV, eZ.src = e.target.result
	}

	function aIV(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aIX = bj.eN.data[162].value,
			max = Math.min(bS.aIY, aIX),
			aIX = (max = a0.id || bJ.rE() ? Math.min(1400, aIX) : max) / Math.max(i, j);
		if (aIX < 1 && (i = Math.floor(aIX * i + .125), j = Math.floor(aIX * j + .125)), max < i || max < j || i < 10 || j < 10) aIX = "Invalid Image Dimensions!", a0.w3 ? a0.w3.showToast(aIX) : alert(aIX);
		else {
			for (var max = document.createElement("canvas"), aIX = (max.width = i, max.height = j, max.getContext("2d")), aIa = document.createElement("canvas"), aIb = (aIa.width = e.width, aIa.height = e.height, aIa.getContext("2d")), e = (aIb
					.drawImage(e, 0, 0), aIb.getImageData(0, 0, aIa.width, aIa.height)), aIb = aIX.createImageData(i, j), src = e.data, aIe = aIb.data, a9b = aIa.width / i, a9c = aIa.height / j, fA = 0; fA < j; fA++)
				for (var f8 = 0; f8 < i; f8++) {
					var aIf = Math.floor(f8 * a9b),
						aIf = 4 * (Math.floor(fA * a9c) * aIa.width + aIf),
						aIi = 4 * (fA * i + f8);
					aIe[aIi] = src[aIf], aIe[1 + aIi] = src[1 + aIf], aIe[2 + aIi] = src[2 + aIf], aIe[3 + aIi] = 255
				}
			aIX.putImageData(aIb, 0, 0), 20 === t.t1 && t.a5i().aIV(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aIN
	}, this.uO = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aIO = function() {
		input.click()
	}, this.aIQ = function(aIR) {
		var g = aIR.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aIU, g.readAsDataURL(aIR))
	}
}

function cv() {
	this.aIj = null, this.dd = function() {
		10 !== aD.kd ? this.aIj = null : this.aIj = new Uint32Array(aD.ey)
	}, this.eU = function() {
		10 === aD.kd && this.lA()
	}, this.lA = function() {
		for (var gY, target, aBv, aIj = this.aIj, a0W = al.kw, a4C = ag.h2, aB = al.kr - 1; 0 <= aB; aB--)(gY = a0W[aB]) >= aD.kL || (target = Math.max(bL.du(a4C[gY], 4), 2048), aBv = Math.max(ae.aBw(gY), 100), aIj[gY] += bL.du(aBv * target,
			1e4), aIj[gY] > target && (aIj[gY] = target))
	}, this.a4I = function(player, hj) {
		return hj > this.aIj[player] ? (hj = this.aIj[player], this.aIj[player] = 0) : this.aIj[player] -= hj, hj
	}
}

function dW() {
	function aIl(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aIt, g.readAsText(e))
	}

	function aIt(e) {
		var aIx;
		aD.a0i || (e = JSON.parse(e.target.result), aIx = aD.data = new a59, aIy(e, aIx, "mapType", 0, 2), aIy(e, aIx, "mapProceduralIndex", 0, 255), aIy(e, aIx, "mapRealisticIndex", 0, 255), aIy(e, aIx, "mapSeed", 0, 16383), function(aIw, aIx, gZ,
				max) {
				aIw = aIw[gZ];
				aIx[gZ] = aJ4(aIw) ? aIw.slice(0, max) : aIx[gZ]
			}(e, aIx, "mapName", 20), function(aIw, aIx, gZ) {
				var aIW;
				2 === aIx.mapType && (!aJ4(aIw = aIw[gZ]) || aIw.length <= 20 ? aIx.mapType = 0 : ((aIW = new Image).onload = function() {
					b9.aJ5.aJ6(aIW, 1), aIW.onload = null, aIW = null
				}, aIW.src = aIw))
			}(e, aIx, "canvas"), aIy(e, aIx, "passableWater", 0, 1), aIy(e, aIx, "passableMountains", 0, 1), aIy(e, aIx, "playerCount", 1, 512), aIy(e, aIx, "humanCount", 1, 1), aIy(e, aIx, "selectedPlayer", 0, 0), aIy(e, aIx, "gameMode", 0, 1),
			aIy(e, aIx, "playerMode", 0, 0), aIy(e, aIx, "battleRoyaleMode", 0, 0), aIy(e, aIx, "numberTeams", 0, 8), aIy(e, aIx, "isZombieMode", 0, 0), aIy(e, aIx, "isContest", 0, 0), aIy(e, aIx, "isReplay", 0, 0), aJ1(e, aIx, "elo", 16, 2,
				16383), aIy(e, aIx, "colorsType", 0, 1), aIy(e, aIx, "colorsPersonalized", 0, 1), aJ1(e, aIx, "colorsData", 32, 512, 262143), aIy(e, aIx, "selectableColor", 0, 1), aJ1(e, aIx, "teamPlayerCount", 16, 9, 512), aIy(e, aIx,
				"neutralBots", 0, 1), aIy(e, aIx, "botDifficultyType", 0, 3), aIy(e, aIx, "botDifficultyValue", 0, 15), aJ1(e, aIx, "botDifficultyTeam", 8, 9, 15), aJ1(e, aIx, "botDifficultyData", 8, 512, 15), aIy(e, aIx, "spawningType", 0, 2),
			aIy(e, aIx, "spawningSeed", 0, 16383), aJ1(e, aIx, "spawningData", 16, 1024, 4095), aIy(e, aIx, "selectableSpawn", 0, 1), aIy(e, aIx, "playerNamesType", 0, 2),
			function(aIw, aIx, gZ, size, max) {
				var a3I = aIw[gZ];
				if (Array.isArray(a3I)) {
					for (var a3J = new Array(size), f1 = Math.min(a3I.length, size), aB = 0; aB < f1; aB++) a3J[aB] = aJ4(a3I[aB]) ? a3I[aB].slice(0, max) : "";
					a3J.fill("", f1), aIx[gZ] = a3J
				}
			}(e, aIx, "playerNamesData", 512, 20), aIy(e, aIx, "selectableName", 0, 1), aIy(e, aIx, "aIncomeType", 0, 2), aIy(e, aIx, "aIncomeValue", 0, 255), aJ1(e, aIx, "aIncomeData", 8, 512, 255), aIy(e, aIx, "tIncomeType", 0, 2), aIy(e, aIx,
				"tIncomeValue", 0, 255), aJ1(e, aIx, "tIncomeData", 8, 512, 255), aIy(e, aIx, "iIncomeType", 0, 2), aIy(e, aIx, "iIncomeValue", 0, 255), aJ1(e, aIx, "iIncomeData", 8, 512, 255), aIy(e, aIx, "sResourcesType", 0, 2), aIy(e, aIx,
				"sResourcesValue", 0, 2047), aJ1(e, aIx, "sResourcesData", 16, 512, 2047), t.x(), t.y.aIv[0] = 0, t.u(19))
	}

	function aIy(aIw, aIx, gZ, min, max) {
		aIw = aIw[gZ];
		aIx[gZ] = "number" == typeof aIw && min <= aIw && aIw <= max ? Math.floor(aIw) : aIx[gZ]
	}

	function aJ4(qT) {
		return "string" == typeof qT
	}

	function aJ1(aIw, aIx, gZ, aJ7, size, max) {
		var a3I = aIw[gZ];
		if (Array.isArray(a3I)) {
			for (var a3J = new(8 === aJ7 ? Uint8Array : 16 === aJ7 ? Uint16Array : Uint32Array)(size), f1 = Math.min(a3I.length, size), aB = 0; aB < f1; aB++) a3J[aB] = bL.i8(a3I[aB], 0, max);
			aIx[gZ] = a3J
		}
	}
	this.aIk = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aIl, input.click()
	}, this.aIm = function() {
		for (var aIp, aDC, a5g = aD.data, keys = Object.keys(a5g), aIn = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a5g[key] instanceof Uint8Array || a5g[key] instanceof Uint16Array || a5g[key] instanceof Uint32Array ? aIn[key] = Array.from(a5g[key]) : aIn[key] = a5g[key]
		}
		aIn.canvas = 2 === aIn.mapType && aIn.canvas ? aIn.canvas.toDataURL() : null, aIp = aIn, aIp = JSON.stringify(aIp, null, 2), aIp = new Blob([aIp], {
			type: "application/json"
		}), (aDC = document.createElement("a")).href = URL.createObjectURL(aIp), aDC.download = "tt_scenario.json", aDC.click()
	}
}

function cY() {
	var aJ8, aJ9, size, jU, hj, aJA;

	function aJB(player) {
		return player < aD.kL ? aJ8 * player : aJ8 * aD.kL + aJ9 * (player - aD.kL)
	}
	this.dd = function() {
		aJ8 = aD.kL < 16 ? 12 : 8, aJ9 = 4;
		var f1 = aJB(aD.ey);
		size = new Uint8Array(aD.ey), jU = new Uint16Array(f1), hj = new Uint32Array(f1), aJA = new Uint8Array(f1)
	}, this.qK = function(a8T, aJC) {
		var aJD = this.h3(a8T, aJC),
			aJC = (this.h1(a8T, aJC, 0), bA.gM.gP(a8T, aJD));
		bd.gQ(a8T, aJD - aJC, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aIJ = function(player, aJC) {
		var aJG, aJC = function(player, aJC) {
			var aB, lG = aJB(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jU[lG + aB] === aJC) return aB;
			return size[player]
		}(player, aJC);
		aJC !== size[player] && (aJG = hj[aJB(player) + aJC], this.gR(player, aJC), this.eY(player, aJG, aD.ey))
	}, this.jg = function(player, aJC) {
		for (var lG = aJB(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jU[lG + aB] === aJC) return !0;
		return !1
	}, this.jz = function(player) {
		return player < aD.kL ? size[player] < aJ8 : size[player] < aJ9
	}, this.g7 = function(player) {
		return size[player]
	}, this.gC = function(player, aB) {
		return jU[aJB(player) + aB]
	}, this.gD = function(player, aB) {
		return hj[aJB(player) + aB]
	}, this.h3 = function(player, aJC) {
		for (var lG = aJB(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jU[lG + aB] === aJC) return hj[lG + aB];
		return 0
	}, this.aIA = function(player) {
		for (var lG = aJB(player), fS = 0, aB = size[player] - 1; 0 <= aB; aB--) fS += hj[lG + aB];
		return fS
	}, this.h1 = function(player, aJC, aJG) {
		for (var lG = aJB(player), aB = size[player] - 1; 0 <= aB; aB--) jU[lG + aB] === aJC && (hj[lG + aB] = aJG)
	}, this.gm = function(player, aB, aJG) {
		hj[aJB(player) + aB] = Math.max(aJG, 0)
	}, this.gn = function(player, aB) {
		aJA[aJB(player) + aB] = 0
	}, this.gE = function(player, aB) {
		return aJA[aJB(player) + aB]
	}, this.eY = function(player, aJG, aJC) {
		ao.j8.jx[player] = ao.j8.jx[aJC] = 8, bA.gM.a46(aJC) && bd.mq[6 - bA.gM.ji(player)]++;
		for (var lG = aJB(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jU[lG + aB] === aJC) return hj[lG + aB] += aJG, void(hj[lG + aB] = hj[lG + aB] > aD.a4E ? aD.a4E : hj[lG + aB]);
		jU[lG + size[player]] = aJC, hj[lG + size[player]] = aJG, aJA[lG + size[player]] = 1, size[player]++, aJC === aD.el ? aN.a0u(player, 5) : player < aD.kL && player === aD.el && af.a79(aJC)
	}, this.gR = function(player, e9) {
		var fK, lG;
		if (0 !== size[player])
			for (lG = aJB(player), size[player]--, fK = e9; fK < size[player]; fK++) jU[lG + fK] = jU[lG + fK + 1], hj[lG + fK] = hj[lG + fK + 1], aJA[lG + fK] = aJA[lG + fK + 1]
	}, this.aI6 = function(player) {
		for (var fK, lG, aIG = [], aB = al.kr - 1; 0 <= aB; aB--)
			for (lG = aJB(al.kw[aB]), fK = size[al.kw[aB]] - 1; 0 <= fK; fK--)
				if (jU[lG + fK] === player) {
					aIG.push(al.kw[aB]);
					break
				} return aIG
	}
}

function cZ() {
	var aJH;

	function aJJ(player) {
		var e8, k0;
		return bA.gM.ji(player) && player < aD.kL ? 0 : (e8 = aJH[bL.du((aD.ey - 1) * ag.go[player], aD.k5)], bf.kI() < 1920 && (e8 = Math.max(bL.du(100 * (13440 - 6 * bf.kI()), 1920), e8)), k0 = ae.k1(player), ag.h2[player] > k0 && (e8 -= bL.du(2 *
			e8 * (ag.h2[player] - k0), k0)), Math.min(Math.max(e8, 0), 700))
	}

	function aJV(nW) {
		for (var go = ag.go, kw = al.kw, aB = al.kr - 1; 0 <= aB; aB--) {
			var gY = kw[aB];
			bA.gM.gP(gY, bL.du(nW * go[gY], 32))
		}
	}

	function aJS() {
		var xJ = aD.el;
		bO.fW[0] = ag.h2[xJ] - ag.a4B[xJ]
	}

	function aJU(e9) {
		var xJ = aD.el,
			xJ = ag.h2[xJ] - ag.a4B[xJ] - bO.fW[0];
		ae.aAa += xJ, bd.mq[e9] += xJ
	}
	this.aAa = 0, this.dk = function() {
		for (var f1 = aD.ey, aB = (aJH = new Uint16Array(f1), 0); aB < f1; aB++) aJH[aB] = 100 + aJI(bL.du(25600 * aB, f1 - 4), 9)
	}, this.dd = function() {
		(this.aAa = 0) === aD.data.iIncomeType ? this.aBw = aJJ : 1 === aD.data.iIncomeType ? this.aBw = function(player) {
			return bL.du(aD.data.iIncomeValue * aJJ(player), 64)
		} : this.aBw = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aJJ(player), 64)
		}
	}, this.eU = function() {
		if (bf.kI() % 10 == 9 && (ae.aAa = 0, function() {
				aJS();
				for (var kw = al.kw, h2 = ag.h2, aB = al.kr - 1; 0 <= aB; aB--) {
					var gY = kw[aB],
						aJT = bL.du(ae.aBw(gY) * h2[gY], 1e4);
					bA.gM.gP(gY, Math.max(aJT, 1))
				}
				aJU(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aJS(), 1 === aD.data.aIncomeType)
						for (var go = ag.go, kw = al.kw, nW = aD.data.aIncomeValue, aB = al.kr - 1; 0 <= aB; aB--) {
							var gY = kw[aB];
							bA.gM.gP(gY, bL.du(nW * go[gY], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var go = ag.go, kw = al.kw, nW = aD.data.aIncomeData, aB = al.kr - 1; 0 <= aB; aB--) {
								var gY = kw[aB];
								bA.gM.gP(gY, bL.du(nW[gY] * go[gY], 128))
							}
						}();
					aJU(18)
				}
			}(), bf.kI() % 100 == 99)) {
			if (aJS(), 0 === aD.data.tIncomeType) aJV(32);
			else if (1 === aD.data.tIncomeType) aJV(aD.data.tIncomeValue);
			else
				for (var go = ag.go, kw = al.kw, nW = aD.data.tIncomeData, aB = al.kr - 1; 0 <= aB; aB--) {
					var gY = kw[aB];
					bA.gM.gP(gY, bL.du(nW[gY] * go[gY], 32))
				}
			aJU(8)
		}
	}, this.k1 = function(player) {
		return Math.min(100 * ag.go[player], aD.a55)
	}, this.pJ = function(player, pK) {
		bq.pg(player, pK, bO.fX[0], 0), bA.gM.gP(pK, bO.fX[0]), bd.ph(player, pK), af.aJL(player, bO.fX[0] + bO.fX[1]), af.pi(pK, bO.fX[0]), bA.gM.mV(player)
	}, this.aJM = function() {
		for (var f1 = al.kr, a0W = al.kw, lG = 0, a4C = ag.h2, aB = 0; aB < f1; aB++) lG += a4C[a0W[aB]];
		return lG
	}, this.aJN = function(aJO) {
		for (var gY, f1 = al.kr, a0W = al.kw, lG = 0, a4C = ag.h2, ez = bg.ez, aB = 0; aB < f1; aB++) ez[gY = a0W[aB]] === aJO && (lG += a4C[gY]);
		return lG
	}
}

function cb() {
	var aJZ, aJa, aJb, aJc, aJd, aJe, aJf, aJg, aJh, aJi, aJj, aJk, aJl, aJm, aJn, aJo, aJp, aJq, aJs, aJt, aD5, aJu, aJv, aK2, aK3, aJr = null,
		aJx = 0,
		aJy = !1,
		aJz = new Float32Array(4),
		aK0 = 0,
		aK1 = !0,
		aB4 = 400,
		aK4 = 0;

	function qp() {
		aJh = Math.floor(+h.iA), aJi = Math.floor(.5 * aJh)
	}

	function aK5() {
		var aB, aKA;
		for (vL.font = bA.qm.sb(1, 100 * aJj), aKA = 80 / Math.floor(vL.measureText(bA.rl.zz(aD.a4E)).width), vL.font = bA.qm.sb(1, 100), aB = aD.ey - 1; 0 <= aB; aB--) aJg[aB] = 100 / Math.floor(vL.measureText(ag.zB[aB]).width), aJf[aB] = Math.min(
			aKA, aJg[aB])
	}

	function aKB(aB) {
		return !aK4 || (aB = ag.h2[aB]) < 1e6 ? 1 : aB < 1e7 ? aJz[0] : aJz[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aK9(i2) {
		aJq = !1, aJp = 1, aJn = aJo = 0, aK1 && (bA.qm.textAlign(i2, 1), bA.qm.textBaseline(i2, 1));
		for (var aKH, aKI, aB, aKJ, fontSize, aKK, nK = ib / iB, nL = ic / iB, nX = (h.i + ib) / iB, nY = (h.j + ic) / iB, aKL = 0 !== ag.mu[aD.el] && !bA.gM.ji(aD.el), fK = al.kr - 1; 0 <= fK; fK--) aB = al.kw[fK], (fontSize = Math.floor(aJm * iB *
			aKB(aB) * aJf[aB] * aJd[aB])) < aJl || aJh <= fontSize || aJb[aB] + aJd[aB] > nK && aJb[aB] < nX && aJc[aB] + aJe[aB] > nL && aJc[aB] < nY && (aKH = Math.floor(h.i * (aJb[aB] + aJd[aB] / 2 - nK) / (nX - nK)), aKI = Math.floor(h.j * (
			aJc[aB] + aJe[aB] / 2 - nL) / (nY - nL) - .1 * fontSize), aKJ = ac.a90[aB], i2.font = bA.qm.sb(1 === ag.a42[aB] ? 4 : 1, fontSize), i2.fillStyle = aKM(fontSize, aKJ % 2), aK4 ? aKN(i2, aB, fontSize, aKH, aKI, aKJ) : aKO(aB,
			fontSize, aKH, aKI, i2), aJq = !0, 0 < aD5[aB] ? function(aKH, aKI, fontSize, aB, i2) {
			0 === k6[aB] ? aj.s2.zq(aJt[aB]) ? (function(aKH, aKI, fontSize, player, pV, i2) {
				for (var xq = aKI, i1 = (i2.globalAlpha = aKW(fontSize), aKB(player) * (aK4 ? aK0 : aJg[player])), xp = aKH - .5 * fontSize / i1 - .9 * fontSize, fL = 0; fL < 2; fL++) i2.fillText(aj.s2.zi(pV), xp, xq), xp = aKH + .5 *
					fontSize / i1 + .9 * fontSize;
				i2.globalAlpha = 1
			}(aKH, aKI, fontSize, aB, aJt[aB], i2), aKQ(aKH, aKI, fontSize, 0, 0, i2)) : aj.s2.zs(aJt[aB]) ? (aKZ(aKH, aKI, fontSize, aJt[aB], 0, i2), aKQ(aKH, aKI, fontSize, 0, 1, i2)) : (aKZ(aKH, aKI, fontSize, aJt[aB], 1, i2), aKQ(aKH,
				aKI, fontSize, 1, 0, i2)) : aKZ(aKH, aKI, fontSize, aJt[aB], 0, i2)
		}(aKH, aKI, fontSize, aB, i2) : 0 === k6[aB] && aKQ(aKH, aKI, fontSize, 0, 0, i2), aKL && (0 < aD5[aB + aD.ey] || 0 < aD5[aB + 2 * aD.ey] || 0 < aD5[aB + 3 * aD.ey] || 0 < aD5[aB + 4 * aD.ey]) && function(aKH, aKI, fontSize, aB, i2) {
			var eZ, gT = -1;
			for (eZ = 4; 1 <= eZ; eZ--) 0 < aD5[aB + eZ * aD.ey] && gT++;
			for (eZ = 1; eZ < 5; eZ++) 0 < aD5[aB + eZ * aD.ey] && (! function(aKH, aKI, fontSize, eZ, aB, aKU, dt, i2) {
				var a3W;
				if (1 === eZ) {
					aB = aJt[aB + aD.ey];
					if (!aj.s2.zr(aB)) return function(aKH, aKI, fontSize, pV, aKU, i2) {
						i2.globalAlpha = aKW(fontSize);
						aKH -= .534 * aKU * fontSize, aKU = aKI + 1.59 * fontSize;
						i2.font = bA.qm.sb(0, .785 * fontSize), i2.fillText(aj.s2.zi(pV), aKH, aKU), i2.globalAlpha = 1
					}(aKH, aKI, fontSize, aB, aKU, i2);
					a3W = aj.xI.zH[aB - 1024 + aj.s2.zT]
				} else a3W = 2 === eZ ? aL.a5w()[4].canvas[+(dt < 255)] : (3 === eZ ? aL.a5w()[5] : aL.a5w()[6]).canvas[0];
				aB = aj.xI.zI, dt = .8 * fontSize / aB, eZ = aKH - .5 * dt * aB - .534 * aKU * fontSize, aKH = aKI + 1.4 * dt * aB;
				i2.setTransform(dt, 0, 0, dt, eZ, aKH), i2.globalAlpha = aKW(fontSize), i2.drawImage(a3W, 0, 0), i2.globalAlpha = 1, i2.setTransform(1, 0, 0, 1, 0, 0)
			}(aKH, aKI, fontSize, eZ, aB, gT, aD5[aB + eZ * aD.ey], i2), gT -= 2)
		}(aKH, aKI, fontSize, aB, i2), (aKK = aJj * fontSize) < aJl || (i2.font = bA.qm.sb(1, aKK), aKI += Math.floor(.78 * fontSize), aK4 ? aKO(aB, aKK, aKH, aKI, i2) : aKN(i2, aB, aKK, aKH, aKI, aKJ)))
	}

	function aKO(aB, fontSize, f8, fA, i2) {
		var ___id = aB;
		var showName = aB < aD.kL || !__fx.settings.hideBotNames;
		if (showName) i2.fillText(ag.zB[aB], f8, fA), aB < aD.kL && 2 !== ag.a42[aB] || (aB = fontSize / aJg[aB], i2.fillRect(f8 - .5 * aB, fA + bA.qm.zj * fontSize, aB, Math.max(1, .1 * fontSize)));
		aK4 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i2.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i2.fillText(__fx.utils.getDensity(___id), f8, showName ? fA + fontSize : fA)
		);
	}

	function aKN(i2, aB, fontSize, aKH, aKI, aKJ) {
		var ___id = aB;
		aB = bA.rl.zz(ag.h2[aB]);
		aKJ >> 1 & 1 ? (i2.lineWidth = .05 * fontSize, i2.strokeStyle = aKM(fontSize, aKJ % 2), i2.strokeText(aB, aKH, aKI)) : (1 < aKJ && (i2.lineWidth = .12 * fontSize, i2.strokeStyle = aKM(fontSize, aKJ), i2.strokeText(aB, aKH, aKI)), i2.fillText(
			aB, aKH, aKI));
		aK4 || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i2.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), i2.fillText(__fx.utils.getDensity(___id), aKH, aKI + fontSize))
	}

	function aKQ(aKH, aKI, fontSize, aKU, aKV, i2) {
		var a6R = .95 * fontSize / aJv,
			aKH = aKH - .5 * a6R * aJu + .8 * aKU * fontSize,
			aKU = aKI - 1.76 * a6R * aJv - (.35 - bA.qm.zj + .7) * aKV * fontSize;
		i2.setTransform(a6R, 0, 0, a6R, aKH, aKU), i2.globalAlpha = aKW(fontSize), i2.drawImage(ab.get(4), 0, 0), i2.globalAlpha = 1, i2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aKZ(aKH, aKI, fontSize, pV, aKU, i2) {
		var hw, xp, a6R;
		i2.globalAlpha = aKW(fontSize), aj.s2.zr(pV) ? (hw = aj.xI.zI, i2.setTransform(a6R = 1.1 * fontSize / hw, 0, 0, a6R, xp = aKH - .5 * a6R * hw - .8 * aKU * fontSize, a6R = aKI - 1.55 * a6R * hw), i2.drawImage(aj.xI.zH[pV - 1024 + aj.s2.zT], 0,
			0), i2.setTransform(1, 0, 0, 1, 0, 0)) : (xp = aKH - .8 * aKU * fontSize, a6R = aKI - (.35 - bA.qm.zj + 1) * fontSize, i2.fillText(aj.s2.zi(pV), xp, a6R)), i2.globalAlpha = 1
	}

	function aKM(fontSize, aKJ) {
		return aJi <= fontSize && fontSize < aJh ? bg.aKb[aKJ] + aKW(fontSize).toFixed(3) + ")" : bg.aKc[aKJ]
	}

	function aKW(fontSize) {
		return aJi <= fontSize && fontSize < aJh ? 1 - (fontSize - aJi) / (aJh - aJi) : 1
	}

	function aKl(i1, i) {
		return 1 + Math.floor(aJk * i1 * i)
	}

	function aKi(aB) {
		for (var left = aJb[aB], fK = aJb[aB] - ag.it[aB] - 1; 0 <= fK; fK--)
			if (!aKn(aB, --left, aJc[aB], aJe[aB])) {
				left++;
				break
			} var right = aJb[aB];
		for (fK = ag.iu[aB] - aJb[aB] - aJd[aB]; 0 <= fK; fK--)
			if (!aKn(aB, ++right + aJd[aB] - 1, aJc[aB], aJe[aB])) {
				right--;
				break
			} var f8 = Math.floor((left + right) / 2),
			top = aJc[aB];
		for (fK = aJc[aB] - ag.iv[aB] - 1; 0 <= fK; fK--)
			if (!aKo(aB, f8, --top, aJd[aB])) {
				top++;
				break
			} var bottom = aJc[aB];
		for (fK = ag.iw[aB] - aJc[aB] - aJe[aB]; 0 <= fK; fK--)
			if (!aKo(aB, f8, ++bottom + aJe[aB] - 1, aJd[aB])) {
				bottom--;
				break
			} var fA = Math.floor((top + bottom) / 2);
		aKf(aB, f8, fA, aJd[aB], aJe[aB]) && (aJb[aB] = f8, aJc[aB] = fA)
	}

	function aKf(player, f8, fA, i, j) {
		f4 = Math.floor(.2 * i);
		for (var f4, eZ = f8 + i - 1; f8 <= eZ; eZ--)
			if (!aKn(player, eZ, fA, j)) return;
		for (eZ = fA + j - 1 - (f4 = (f4 = Math.floor(.25 * j)) < 1 ? 1 : f4); fA + f4 <= eZ; eZ--)
			if (!aKo(player, f8, eZ, i)) return;
		return 1
	}

	function aKn(player, f8, fA, j) {
		return ac.yh(player, 4 * (fA * bS.fC + f8)) && ac.yh(player, 4 * ((fA + j - 1) * bS.fC + f8))
	}

	function aKo(player, f8, fA, i) {
		return ac.yh(player, 4 * (fA * bS.fC + f8)) && ac.yh(player, 4 * (fA * bS.fC + f8 + i - 1))
	}
	this.dd = function() {
		if (aK4 = bj.eN.data[7].value || 8 === aD.kd, aB4 = 0 === (aB4 = bj.eN.data[11].value) ? 280 : 1 === aB4 ? 187 : 112, aJq = !1, aJm = .88, aJj = .5, aJk = 1.8, aJl = 12 - 3 * bj.eN.data[9].value, aJa = aJZ = 0, aJb = new Uint16Array(aD
				.ey), aJc = new Uint16Array(aD.ey), aJd = new Uint16Array(aD.ey), aJe = new Uint16Array(aD.ey), aJf = new Float32Array(aD.ey), aJg = new Float32Array(aD.ey), aJt = new Uint16Array(2 * aD.ey), aD5 = new Uint8Array(5 * aD.ey), aK2 =
			new Uint8Array(aD.ey), aK3 = new Uint8Array(aD.ey), aK1 || (aJr = aJr || document.createElement("canvas")), qp(), aJo = aJn = 0, aJp = 1, aK4) {
			var aB, aKA;
			for (aK5(), vL.font = bA.qm.sb(1, 100), aKA = 100 / Math.floor(vL.measureText("900 000").width), aB = aD.ey - 1; 0 <= aB; aB--) aJf[aB] = Math.min(aKA, 2 * aJg[aB]);
			aK0 = aKA, aJz[0] = 100 / (aKA * Math.floor(vL.measureText("5 000 000").width)), aJz[1] = 100 / (aKA * Math.floor(vL.measureText("50 000 000").width)), aJz[2] = 100 / (aKA * Math.floor(vL.measureText("500 000 000").width)), aJz[3] =
				100 / (aKA * Math.floor(vL.measureText("1 000 000 000").width))
		} else aK5();
		! function() {
			var aB;
			for (aB = aD.ey - 1; 0 <= aB; aB--) ag.go[aB] < 12 ? (aJb[aB] = ag.it[aB] + 1, aJc[aB] = ag.iv[aB] + 1, aJd[aB] = 1, aJe[aB] = 1) : (aJb[aB] = ag.it[aB], aJc[aB] = ag.iv[aB] + 1, aJd[aB] = 4, aJe[aB] = 2);
			if (aD.hO)
				for (aB = 0; aB < aD.kL; aB++) aJd[aB] = 0;
			aJu = ab.get(4).width, aJv = ab.get(4).height
		}()
	}, this.aJL = function(gY, a5e) {
		a5e > 18 * ag.go[gY] ? (aK3[gY] = 6, ac.a90[gY] = 2 + ac.a90[gY] % 2) : (aK2[gY] = 4, (ac.a90[gY] < 2 || 3 < ac.a90[gY]) && (ac.a90[gY] = 6 + ac.a90[gY] % 2))
	}, this.pi = function(gY, a5e) {
		a5e > 6 * ag.go[gY] ? (aK3[gY] = 6, ac.a90[gY] = 4 + ac.a90[gY] % 2) : (aK2[gY] = 4, (ac.a90[gY] < 4 || 5 < ac.a90[gY]) && (ac.a90[gY] = 8 + ac.a90[gY] % 2))
	}, this.resize = function() {
		qp(), aK1 || aK9(aJs)
	}, this.a51 = function() {
		for (var aB = 0; aB < aD.kL; aB++) ag.iu[aB] - ag.it[aB] != 3 || ag.iw[aB] - ag.iv[aB] != 3 ? (aJb[aB] = ag.it[aB] + (ag.iu[aB] !== ag.it[aB] ? 1 : 0), aJc[aB] = ag.iv[aB], aJd[aB] = 1, aJe[aB] = 1) : (aJb[aB] = ag.it[aB], aJc[aB] = ag
			.iv[aB] + 1, aJd[aB] = 4, aJe[aB] = 2)
	}, this.qL = function(player, e9, aKC) {
		! function(player, e9, aKC) {
			player += e9 * aD.ey;
			0 === e9 ? aJt[player] === aKC && 0 < aD5[player] ? aD5[player] = 0 : (aJt[player] = aKC, aD5[player] = aj.s2.zq(aKC) ? 255 : 64) : 1 === e9 ? (aD5[player] = 64, aJt[player] = aKC) : aD5[player] = aKC
		}(player, e9, aKC), 2 === aD.a0i && this.mg(!0)
	}, this.vK = function() {
		aK1 ? aK9(vL) : aJq && (1 !== aJp ? (vL.imageSmoothingEnabled = !0, vL.setTransform(aJp, 0, 0, aJp, 0, 0), vL.drawImage(aJr, -aJn / aJp, -aJo / aJp), vL.setTransform(1, 0, 0, 1, 0, 0), vL.imageSmoothingEnabled = !1) : vL.drawImage(aJr, -
			aJn, -aJo))
	}, this.a9n = function(iK, iN) {
		aJn += iK, aJo += iN
	}, this.a2C = function(iK, iN) {
		af.a9n(iK, iN)
	}, this.zoom = function(a35, la, lb) {
		aJp *= a35, aJn = (aJn + la) * a35 - la, aJo = (aJo + lb) * a35 - lb
	}, this.mg = function(bu) {
		return !aK1 && !(!aJy && !bu && bf.eQ < aJx + (1 === aJp && 0 === aJn && 0 === aJo && (aD.a5U() || aD.hO || 2 === aD.a0i) ? 1e3 : aB4) || (aJy = !1, aJx = bf.eQ, aK9(aJs), 0))
	}, this.aKF = function(aB) {
		return aKB(aB) * aJf[aB]
	}, this.aKG = function(player) {
		return aJf[player]
	}, this.eU = function() {
		bf.kI() % 10 == 9 && (aJy = aD.a5W() && !aD.a5U()), !aD.a5U() && 4 <= ++aJa && function() {
			var aB, fK, fL;
			for (aJa = 0, fL = 4; 1 <= fL; fL--)
				for (fK = al.kr - 1; 0 <= fK; fK--) aB = al.kw[fK] + fL * aD.ey, 0 < aD5[aB] && aD5[aB] < 255 && aD5[aB]--;
			if (2 !== aD.a0i)
				for (fK = al.kr - 1; 0 <= fK; fK--) aB = al.kw[fK], 0 < aD5[aB] && aD5[aB] < 255 && aD5[aB]--
		}();
		var aB, fK, f1 = Math.floor(.1 * al.kr);
		for (f1 = (f1 = f1 < 8 ? 8 : f1) > al.kr ? al.kr : f1, aB = aJZ + f1 - 1; aJZ <= aB; aB--) fK = aB % al.kr, ! function(aB) {
			var i1 = aKB(aB) * aJf[aB];
			0 < aJd[aB] && aKf(aB, aJb[aB], aJc[aB], aJd[aB], aJe[aB]) ? ! function(aB) {
				for (var f8, fA, i, j, ef = !1, fL = 0; fL < 8; fL++) {
					if (i = aJd[aB] + 2, j = aJe[aB] + 2, i > ag.iu[aB] - ag.it[aB] + 1 || j > ag.iw[aB] - ag.iv[aB] + 1) return ef;
					if (f8 = aJb[aB] - 1, fA = aJc[aB] - 1, !aKf(aB, f8, fA, i, j)) return ef;
					aJb[aB] = f8, aJc[aB] = fA, aJd[aB] = i, aJe[aB] = j, ef = !0
				}
				return ef
			}(aB) && function(aB, i1) {
				for (var f8, fA, i, j, ef = !1, aDE = aJd[aB], nW = 1 + Math.floor(.02 * aDE), fL = 1; fL < 5; fL++) {
					if ((i = aDE + fL * nW) > ag.iu[aB] - ag.it[aB] + 1) return ef;
					if ((j = aKl(i1, i)) > ag.iw[aB] - ag.iv[aB] + 1) return ef;
					f8 = ag.it[aB] + Math.floor(Math.random() * (ag.iu[aB] - ag.it[aB] + 2 - i)), fA = ag.iv[aB] + Math.floor(Math.random() * (ag.iw[aB] - ag.iv[aB] + 2 - j)), aKf(aB, f8, fA, i, j) && (aJb[aB] = f8, aJc[aB] = fA, aJd[
						aB] = i, aJe[aB] = j, ef = !0)
				}
				return ef
			}(aB, i1) && aKi(aB) : ! function(aB, i1) {
				var j, f8 = aJb[aB] + 1,
					fA = aJc[aB] + 1,
					i = aJd[aB] - 2;
				for (;;) {
					if (i < 1) {
						aJd[aB] = 0;
						break
					}
					if (j = aKl(i1, i), aKf(aB, f8, fA, i, j)) return aJb[aB] = f8, aJc[aB] = fA, aJd[aB] = i, aJe[aB] = j, 1;
					f8++, fA++, i -= 2
				}
				return
			}(aB, i1) ? function(aB, i1) {
				var f8, fA, i, j, fL, nc, jb = ag.iu[aB] - ag.it[aB] + 1,
					aKm = Math.floor(.02 * jb);
				for (nc = -6 * (aKm = aKm < 1 ? 1 : aKm), fL = jb; nc <= fL; fL -= aKm)
					if (j = aKl(i1, i = 0 < fL ? fL : 1), f8 = ag.it[aB] + Math.floor(Math.random() * (ag.iu[aB] - ag.it[aB] + 2 - i)), fA = ag.iv[aB] + Math.floor(Math.random() * (ag.iw[aB] - ag.iv[aB] + 2 - j)), aKf(aB, f8, fA, i, j))
						return aJb[aB] = f8, aJc[aB] = fA, aJd[aB] = i, aJe[aB] = j
			}(aB, i1) : aKi(aB)
		}(al.kw[fK]);
		aJZ = (aJZ += f1) % al.kr
	}, this.mb = function() {
		var aB, gY, zo, zp;
		if (bf.kI() % 4 == 1)
			for (aB = al.kr - 1; 0 <= aB; aB--) gY = al.kw[aB], ac.a90[gY] < 2 || ((zo = Math.max(aK2[gY] - 1, 0)) === (zp = Math.max(aK3[gY] - 1, 0)) ? 0 === zo && (ac.a90[gY] %= 2) : 0 === zp && ac.a90[gY] < 6 && (ac.a90[gY] += 4), aK2[gY] =
				zo, aK3[gY] = zp)
	}, this.a79 = function(player) {
		var aB = player + 2 * aD.ey,
			dt = aD5[aB];
		return 0 < dt && (aN.a0p(50, player), aD5[aB] = 0, 255 === dt)
	}, this.a6B = function(player) {
		return 255 === aD5[player + 2 * aD.ey]
	}
}

function cd() {
	var aKp, aKq, aKr;
	this.dd = function() {
		aKp =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aKq =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aKr = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7Q = ["K ", " Y", "E ", " Z", " z", " s", "S "], aE6 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aKp.length - 1; 0 <= aB; aB--)
			for (var fK = a7Q.length - 1; 0 <= fK; fK--) aKp[aB] = aKp[aB].replace(a7Q[fK], aE6[fK]);
		if (__fx.settings.realisticNames) aKp = realisticNames;
	}, this.a5H = function() {
		var f1 = aD.kL,
			zB = ag.zB,
			a1M = ag.a1M,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f1)
			for (var aB = 0; aB < f1; aB++) zB[aB] = a1M[aB] = "Player " + ay.jc(1e3);
		else
			for (aB = 0; aB < f1; aB++) zB[aB] = a1M[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kd) {
			for (var e8 = ay.random(), aKx = aKr, aKy = aKq, hj = aE.hj, f1 = aKx.length, lG = aD.data.teamPlayerCount[7], zB = ag.zB, a1M = ag.a1M, aB = lG - 1; aB >= aD.kL; aB--) zB[aB] = a1M[aB] = aKx[(aB + e8) % f1];
			for (f1 = aKy.length - 1, aB = lG; aB < aD.ey; aB++) zB[aB] = a1M[aB] = aKy[hj[aB] ? f1 : aB % f1]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f1 = aD.ey, zB = ag.zB, a1M = ag.a1M, playerNamesData = aD.data.playerNamesData, aB = aD.kL; aB < f1; aB++) zB[aB] = a1M[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var zB = ag.zB, a1M = ag.a1M, aB = aD.kL; aB < aD.ey; aB++) zB[aB] = a1M[aB] = "Bot " + ay.jc(1e3)
		} : function() {
			for (var aKz = aKp, f1 = aKz.length, e8 = ay.random(), zB = ag.zB, a1M = ag.a1M, aB = aD.kL; aB < aD.ey; aB++) zB[aB] = a1M[aB] = aKz[(aB + e8) % f1]
		})()
	}
}

function cw() {
	this.aL0 = [], this.aL1 = [], this.dd = function() {
		this.aL0 = [], this.aL1 = []
	}, this.eU = function() {
		0 <= this.aL0.length && this.aL2(this.aL0), 0 <= this.aL1.length && this.aL2(this.aL1)
	}, this.aL2 = function(g) {
		for (var fL = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eQ--, g[aB].eQ <= 0) {
				fL = aB;
				break
			} for (aB = fL; 0 <= aB; aB--) g.shift()
	}, this.a64 = function(id, a0W, aL3) {
		return this.fM(this.aL0, id, a0W, aL3)
	}, this.aL4 = function(id, a0W, aL3) {
		return this.fM(this.aL1, id, a0W, aL3)
	}, this.fM = function(g, id, a0W, aL3) {
		return ! function(g, id, a0W) {
			var aB, hs;
			for (aB = a0W.length - 1; 0 <= aB; aB--)
				for (hs = g.length - 1; 0 <= hs; hs--)
					if (g[hs].player === a0W[aB] && id === g[hs].id) return 1;
			return
		}(g, id, a0W) && (aL3 && function(g, id, a0W) {
			var aB;
			for (aB = a0W.length - 1; 0 <= aB; aB--) g.push({
				player: a0W[aB],
				id: id,
				eQ: 384
			})
		}(g, id, a0W), !0)
	}
}

function cc() {
	this.a1M = new Array(aD.ey), this.zB = new Array(aD.ey), this.a42 = new Uint8Array(aD.ey), this.mu = new Uint8Array(aD.ey), this.it = new Uint16Array(aD.ey), this.iv = new Uint16Array(aD.ey), this.iu = new Uint16Array(aD.ey), this.iw =
		new Uint16Array(aD.ey), this.go = new Uint32Array(aD.ey), this.yH = new Uint32Array(aD.ey), this.h2 = new Uint32Array(aD.ey), this.gS = null, this.gg = null, this.gh = null, this.fQ = null, this.qB = new Uint16Array(aD.ey), this.jO =
		new Uint16Array(aD.ey), this.jP = new Uint16Array(aD.ey), this.a1H = new Uint16Array(aD.ey), this.a1F = new Uint8Array(aD.ey), this.a4B = new Uint16Array(aD.ey), this.dd = function() {
			this.a1M.fill(""), this.zB.fill(""), this.a42.fill(0), this.mu.fill(0), this.it.fill(0), this.iv.fill(0), this.iu.fill(0), this.iw.fill(0), this.go.fill(0), this.yH.fill(0), this.h2.fill(0), this.gS = new Array(aD.ey), this.gg =
				new Array(aD.ey), this.gh = new Array(aD.ey), this.fQ = new Array(aD.ey), this.qB.fill(0), this.jO.fill(0), this.jP.fill(0), this.a1H.fill(0), this.a1F.fill(0), this.a4B.fill(0)
		}
}

function cu() {
	this.aDb = function(player) {
		aG.mt(player), aD.a0k++, ag.a42[player] = 2, ag.a1H[player] = bi.a1X.aIF(), player === aD.el && (aX.show(!1, !1), aW.aBi(), bR.a0T.a1D()), af.a79(player)
	}
}

function cV() {
	this.kw = null, this.kr = 0, this.a5L = function() {
		for (this.kr = 0, aB = aD.ey - 1; 0 <= aB; aB--) 0 !== ag.mu[aB] && this.kr++;
		this.kw = new Uint16Array(this.kr);
		for (var f1 = 0, aB = 0; aB < aD.ey; aB++) 0 !== ag.mu[aB] && (this.kw[f1++] = aB)
	}, this.ma = function() {
		for (var go = ag.go, yH = ag.yH, a1F = ag.a1F, kw = al.kw, aB = al.kr - 1; 0 <= aB; aB--) {
			var gY = kw[aB],
				dt = go[gY],
				lG = yH[gY];
			dt <= bL.du(lG, 4) ? ak.dm(gY) : lG <= dt ? 250 <= (yH[gY] = dt) && (a1F[gY] = 1) : yH[gY] = lG - Math.max(1, bL.du(lG - dt, 1e3))
		}
		this.aL8()
	}, this.aL8 = function() {
		for (var mu = ag.mu, lF = this.kw, aCQ = this.kr, aB = aCQ - 1; 0 <= aB; aB--) 0 === mu[lF[aB]] && (lF[aB] = lF[--aCQ]);
		this.kr = aCQ
	}
}

function cW() {
	var aL9 = new Uint16Array(aD.ey),
		aLA = 0;

	function aLE(a7F, aLC) {
		var eZ = bf.kI();
		return 3213 <= eZ ? 4 + bL.du(100 * aLC, ae.k1(a7F)) : (a7F = 1 + bL.du(aD.k5, 300), eZ < 357 ? 2 + bL.du(100 * aLC, a7F) : eZ < 714 ? 2 + bL.du(100 * aLC, 4 * a7F) : eZ < 1071 ? 2 + bL.du(100 * aLC, 10 * a7F) : eZ < 2142 ? 2 + bL.du(100 *
			aLC, 30 * a7F) : 2 + bL.du(100 * aLC, 100 * a7F))
	}

	function aLD(a7F) {
		return aD.kf || 7 <= aD.kd || 4284 <= bf.kI() || bA.gM.ji(a7F)
	}
	this.dd = function() {
		aL9.fill(0), aLA = 15
	}, this.he = function(pK) {
		var player = aD.el;
		return !!bA.gM.qD(player, pK) && !(!bA.gM.pd(player, bA.gM.iZ(player, aR.hU()), pK) || (player = pK, pK = bO.fX[0], !aLD(player) && aL9[player] + aLE(player, pK) > aLA))
	}, this.eY = function(a7F, aLC) {
		if (!aLD(a7F)) {
			aLC = aLE(a7F, aLC);
			if (aL9[a7F] + aLC > aLA) return !1;
			aL9[a7F] += aLC
		}
		return !0
	}, this.eU = function() {
		bf.kI() % 100 == 99 && (bf.kI() < 1071 ? aLA += 4 : bf.kI() < 2142 ? aLA += 6 : bf.kI() < 3213 ? aLA += 8 : aLA += 10)
	}
}

function ce() {
	var aLF;
	this.km = null, this.kl = 0, this.dd = function() {
		aLF = [], 9 === aD.kd && this.aLG()
	}, this.aLG = function() {
		this.km = [0, 0, 0, 0, 0, 0];
		for (var aLH = [256, 227, 170, 148, 100, this.kl = 0, 0, 0], aLI = [0, 8, 24, 30, 46, 70, 256, 333], aLJ = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kL, aB = 1; aB < aLH.length; aB++)
			if (j <= aLI[aB]) {
				this.kl = aLH[aB - 1] - bL.du((j - aLI[aB - 1]) * (aLH[aB - 1] - aLH[aB]), aLI[aB] - aLI[aB - 1]), this.km[5] = aLJ[aB - 1] - bL.du((j - aLI[aB - 1]) * (aLJ[aB - 1] - aLJ[aB]), aLI[aB] - aLI[aB - 1]), this.km[0] = aD.ey - j - this
					.kl - this.km[5];
				break
			} aD.kh = aD.ey - aD.kL, aD.data.numberTeams = (0 < aD.kL) + (0 < aD.kh), aD.data.playerCount = aD.xn = aD.kL + aD.kh, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kL + this.kl, aD.kh - this.kl]), aD.a5A.a5F()
	}, this.aIM = function(player) {
		aLF.push({
			player: player,
			gT: 14 + ay.jc(20)
		})
	}, this.eU = function() {
		if (9 === aD.kd)
			for (var aB = aLF.length - 1; 0 <= aB; aB--) --aLF[aB].gT <= 0 && (af.qL(aLF[aB].player, 0, aj.s2.zW + aj.s2.zk), aLF.splice(aB))
	}
}

function dB() {
	function aLZ() {
		return {
			fC: bS.fC,
			fD: bS.fD,
			xF: bS.xF,
			xB: bS.xB,
			xC: bS.xC,
			xG: bS.xG,
			eh: bS.eh,
			mapSeed: bS.mapSeed,
			xD: bS.xD
		}
	}

	function aLR(aB) {
		return 1 !== aB && bS.aEG(aB) && aB !== bS.aLb()
	}
	this.aLL = 24, this.aLM = 12, this.aIY = 4096, this.fC = 0, this.fD = 0, this.xF = null, this.xB = null, this.xC = null, this.xG = null, this.eh = 0, this.mapSeed = 0, this.xD = !1, this.xE = new aLN, this.x5 = new aLO, this.a7W = new aLP, this
		.dd = function() {
			this.x5.dd()
		}, this.a7 = function(map, aLQ) {
			((map %= this.aLL) !== this.eh || aLR(this.eh) && aLQ !== this.mapSeed) && (this.xD = !1, this.xE.aLS(), ay.a5G(map), this.eh = map, this.mapSeed = aLQ, aLR(map) && (bS.x5.x6[map].aLT = aLQ), this.aEG(this.eh) ? (map = bS.x5.x6[this.eh],
				this.fC = map.i, this.fD = map.j, ay.a5G(map.aLT), aq.a7([this.fC, this.fD, map.mz, map.mw]), aLV(), ap.aLW(), aq.aLX()) : aLU())
		}, this.aLY = function(map, aLQ) {
			var fj = aLZ(),
				map = (this.a7(map, aLQ), this.xE.aLS(), aLZ());
			return aLQ = fj, bS.fC = aLQ.fC, bS.fD = aLQ.fD, bS.xF = aLQ.xF, bS.xB = aLQ.xB, bS.xC = aLQ.xC, bS.xG = aLQ.xG, bS.eh = aLQ.eh, bS.mapSeed = aLQ.mapSeed, bS.xD = aLQ.xD, map
		}, this.a5a = function(canvas) {
			canvas && this.xF !== canvas && (this.fC = canvas.width, this.fD = canvas.height, this.xF = canvas, this.xB = this.xF.getContext("2d", {
				alpha: !1
			}), this.hz = this.xB.getImageData(0, 0, this.fC, this.fD), this.xG = this.hz.data, this.eh = this.aLb(), this.mapSeed = 0, bS.x5.x6[this.eh].name = aD.data.mapName)
		}, this.eg = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aLb()
		}, this.aLc = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aLd = function(aB) {
			return 1 === aB
		}, this.aLb = function() {
			return this.aLL
		}, this.aEG = function(aB) {
			return void 0 === this.x5.x6[aB].aLe
		}, this.a5Z = function(qe) {
			return 0 === qe.mapType ? qe.mapProceduralIndex < 10 ? qe.mapProceduralIndex : 10 + qe.mapProceduralIndex : 1 === qe.mapType ? 10 <= qe.mapRealisticIndex ? 22 + qe.mapRealisticIndex - 10 : qe.mapRealisticIndex + 10 : void 0
		}, this.aEH = function(qe, aLf) {
			0 === qe.mapType ? qe.mapProceduralIndex = aLf < 10 ? aLf : aLf - 10 : 1 === qe.mapType && (qe.mapRealisticIndex = aLf - (22 <= aLf ? 12 : 10))
		}
}

function aLN() {
	function aLo() {
		bS.xE.eU()
	}

	function aLu(gY, aLt) {
		0 < aLt && (bS.xG[gY] += aLt, bS.xG[gY + 1] += aLt, bS.xG[gY + 2] += aLt)
	}

	function iE(gY) {
		return bS.xG[gY + 2] > bS.xG[gY] && bS.xG[gY + 2] > bS.xG[gY + 1]
	}
	this.a9z = -1, this.a1k = 0, this.aLg = 0, this.aLh = 8, this.aLi = 32, this.aLj = 8, this.aLk = 32, this.aLl = [0, 0], this.a90 = [0, 0, 0, 0], this.im = null, this.aLm = !0, this.aLn = !1, this.aLS = function() {
		-1 !== this.a9z && clearTimeout(this.a9z), this.a9z = -1, this.im = null, aq.aLX()
	}, this.dd = function() {
		7 === aa.a1t() || this.aLn || (this.aLm = !0, this.a1k = 0, this.aLg = 1, this.aLl = [bS.x5.x6[bS.eh].xX[0], bS.x5.x6[bS.eh].xY[0]], this.a90 = [bS.x5.x6[bS.eh].aLe[3], bS.x5.x6[bS.eh].aLe[4], bS.x5.x6[bS.eh].aLe[5], bS.x5.x6[bS.eh].aLe[
			6]], this.aLh = bS.x5.x6[bS.eh].aLe[7], this.aLi = bS.x5.x6[bS.eh].aLe[8], this.aLj = bS.x5.x6[bS.eh].aLe[9], this.aLk = bS.x5.x6[bS.eh].aLe[10], this.aLm ? this.a9z = setTimeout(aLo, 16) : this.eU())
	}, this.eU = function() {
		if (8 === aa.a1t() && aH.nC()) this.a9z = setTimeout(aLo, 16);
		else {
			if (0 === this.a1k) {
				var aLT = ay.aLp();
				if (ay.a5G(bS.x5.x6[bS.eh].aLe[2]), aq.a7([bS.fC, bS.fD, bS.x5.x6[bS.eh].aLe[0], bS.x5.x6[bS.eh].aLe[1]]), ay.a5G(aLT), this.im = aq.aLq(), this.a1k++, this.aLm) return void(this.a9z = setTimeout(aLo, 16))
			}
			for (var gY, en, aLT = this.aLm ? 10 : 1e6, aLT = bS.fD - this.aLg - 1 < aLT ? bS.fD - this.aLg - 1 : aLT, yU = this.aLg + aLT, fA = this.aLg; fA < yU; fA++)
				for (var f8 = 1; f8 < bS.fC - 1; f8++) iE(gY = 4 * (en = f8 + fA * bS.fC)) ? this.aLr(gY, en, 1) : (this.aLr(gY, en, 0), function(f8, fA, gY) {
					return 1 < f8 && iE(gY - 4) || f8 < bS.fC - 2 && iE(gY + 4) || 1 < fA && iE(gY - 4 * bS.fC) || fA < bS.fD - 2 && iE(gY + 4 * bS.fC)
				}(f8, fA, gY) && this.aLs(f8, fA));
			this.aLg = yU, this.aLg >= bS.fD - 1 ? (bS.xB.putImageData(bS.xC, 0, 0, 1, 1, bS.fC - 2, bS.fD - 2), bf.dl = !0, this.aLS()) : this.aLm && (this.a9z = setTimeout(aLo, 16))
		}
	}, this.aLr = function(gY, en, e9) {
		aLu(gY, Math.floor(this.aLl[e9] + this.a90[e9] * this.im[en] / 1e4) - bS.xG[gY])
	}, this.aLv = function(gY, e8, aLw, e9, a90) {
		aLu(gY, Math.floor(this.aLl[e9] + (1 - e8 / aLw) * a90) - bS.xG[gY])
	}, this.aLs = function(la, lb) {
		for (var gY, e8, aLw, a9p = la - this.aLi, aLx = lb - this.aLi, yV = la + this.aLi, yU = lb + this.aLi, a9p = a9p < 1 ? 1 : a9p, yV = yV > bS.fC - 2 ? bS.fC - 2 : yV, yU = yU > bS.fD - 2 ? bS.fD - 2 : yU, fA = aLx < 1 ? 1 : aLx; fA <=
			yU; fA++)
			for (var f8 = a9p; f8 <= yV; f8++) iE(gY = 4 * (f8 + fA * bS.fC)) ? (aLw = this.aLh + (this.aLi - this.aLh) * this.im[f8 + bS.fC * fA] / 1e4, Math.abs(la - f8) > aLw || Math.abs(lb - fA) > aLw || aLw <= (e8 = Math.sqrt((la - f8) * (
				la - f8) + (lb - fA) * (lb - fA))) || this.aLv(gY, e8, aLw, 1, this.a90[3])) : (aLw = this.aLj + (this.aLk - this.aLj) * this.im[f8 + bS.fC * fA] / 1e4, Math.abs(la - f8) > aLw || Math.abs(lb - fA) > aLw || aLw <= (e8 = Math
				.sqrt((la - f8) * (la - f8) + (lb - fA) * (lb - fA))) || this.aLv(gY, e8, aLw, 0, this.a90[2]))
	}
}

function aLV() {
	var v4 = aLy(bS.eh);
	v4 && aLz(v4[0], v4[1], v4[2], v4[3], v4[4])
}

function aLy(eh) {
	return 2 === eh ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eh ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eh ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eh ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eh ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aLz(aM0, aM1, aM2, aM3, aM4) {
	for (var f8, fA, aM6, aM7, a35, aM9, iJ = aM0.length - 1, aM5 = bS.fC + bS.fD, f1 = (aM5 *= aM5, aM2.length), aM8 = Array(f1), aB = f1 - 1; 0 <= aB; aB--) aM8[aB] = aM2[aB] * aM2[aB];
	var aMA = new Array(f1),
		aD2 = new Array(f1),
		aMB = new Array(f1),
		fS = aq.aLq();
	if (void 0 === aM4)
		for (aM4 = new Array(f1), aB = f1 - 1; 0 <= aB; aB--) aM4[aB] = 0;
	for (aB = 1; aB < f1; aB++) aMA[aB] = aM8[aB] - aM8[aB - 1], aD2[aB] = aM3[aB] - aM3[aB - 1], aMB[aB] = aM4[aB] - aM4[aB - 1];
	for (f8 = bS.fC - 1; 0 <= f8; f8--)
		for (fA = bS.fD - 1; 0 <= fA; fA--) {
			for (aM6 = aM5, aB = iJ; 0 <= aB; aB--) aM6 = (aM7 = (f8 - aM0[aB]) * (f8 - aM0[aB]) + (fA - aM1[aB]) * (fA - aM1[aB])) < aM6 ? aM7 : aM6;
			for (a35 = aM3[f1 - 1], aM9 = aM4[f1 - 1], aB = 1; aB < f1; aB++)
				if (aM6 < aM8[aB]) {
					a35 = aM3[aB - 1] + aHn((aM6 - aM8[aB - 1]) * aD2[aB], aMA[aB]), aM9 = aM4[aB - 1] + aHn((aM6 - aM8[aB - 1]) * aMB[aB], aMA[aB]);
					break
				} aMC(bS.fC * fA + f8, a35, aM9, fS)
		}
}

function aMC(e9, a35, aM9, fS) {
	a35 < 500 ? fS[e9] = bL.du(fS[e9] * a35 * 2, 1e3) : 500 < a35 && (fS[e9] += bL.du(2 * (1e4 - fS[e9]) * (a35 - 500), 1e3)), fS[e9] += bL.du(aM9 * (10 * a35 - fS[e9]), 1e3)
}

function cg() {
	var aMD;

	function aMN(a3W, i1, f8, fA, globalAlpha) {
		bS.xB.save(), bS.xB.globalAlpha = globalAlpha, bS.xB.imageSmoothingEnabled = !1, bS.xB.scale(i1, i1), bS.xB.drawImage(a3W, Math.floor(f8 * (bS.fC / i1 - a3W.width)), Math.floor(fA * (bS.fD / i1 - a3W.height))), bS.xB.restore()
	}
	this.a7T = 0, this.a7U = 0, this.a7V = 0, this.a7W = 0, this.dd = function() {
		(aMD = new Array(bS.aLL))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e8: [220, 250, 255, 220],
			tP: [190, 220, 0, 0],
			fL: [170, 200, 0, 0]
		}, aMD[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e8: [25, 0, 100, 0, 25],
			tP: [25, 0, 0, 0, 25],
			fL: [25, 0, 0, 0, 25]
		}, aMD[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e8: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tP: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fL: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMD[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e8: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tP: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fL: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMD[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e8: [10, 10, 20, 10, 10, 170, 212],
			tP: [20, 20, 60, 100, 100, 110, 170],
			fL: [70, 70, 160, 30, 30, 60, 120]
		}, aMD[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e8: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tP: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fL: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMD[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e8: [10, 10, 60, 255, 255, 200, 200],
			tP: [10, 10, 60, 255, 255, 200, 200],
			fL: [80, 80, 255, 255, 255, 200, 200]
		}, aMD[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e8: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tP: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fL: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMD[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e8: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tP: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fL: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMD[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e8: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tP: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fL: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMD[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e8: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tP: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fL: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMD[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e8: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tP: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fL: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aLW = function() {
		var aMM, aB, fK, fj, hz = function() {
				var hz;
				return bS.xF = document.createElement("canvas"), bS.xF.width = bS.fC, bS.xF.height = bS.fD, bS.xB = bS.xF.getContext("2d", {
					alpha: !1
				}), hz = bS.xB.getImageData(0, 0, bS.fC, bS.fD), bS.xG = hz.data, hz
			}(),
			i = aMD[bS.eh].i,
			e8 = aMD[bS.eh].e8,
			tP = aMD[bS.eh].tP,
			fL = aMD[bS.eh].fL,
			fS = aq.aLq(),
			f1 = i.length - 2,
			aMH = new Array(1 + f1),
			aMI = new Array(1 + f1),
			aMJ = new Array(1 + f1),
			aMK = new Array(1 + f1);
		for (fK = f1; 0 <= fK; fK--) aMH[fK] = i[fK + 1] - i[fK], aMI[fK] = e8[fK + 1] - e8[fK], aMJ[fK] = tP[fK + 1] - tP[fK], aMK[fK] = fL[fK + 1] - fL[fK];
		for (aB = bS.fC * bS.fD - 1; 0 <= aB; aB--)
			for (fK = f1; 0 <= fK; fK--)
				if (fS[aB] >= i[fK]) {
					fj = fS[aB] - i[fK], bS.xG[4 * aB] = e8[fK] + aHn(aMI[fK] * fj, aMH[fK]), bS.xG[4 * aB + 1] = tP[fK] + aHn(aMJ[fK] * fj, aMH[fK]), bS.xG[4 * aB + 2] = fL[fK] + aHn(aMK[fK] * fj, aMH[fK]), bS.xG[4 * aB + 3] = 255;
					break
				} bS.xB.putImageData(hz, 0, 0), bS.aLd(bS.eh) && ab.tT() && bS.aLd(bS.eh) && (hz = ab.aGy("arena"), aMM = ab.aGy("territorial.io"), aMN(hz, 5, .5, .5, .1), aMN(aMM, 2, .5, .45, .1)), bS.xD = !0, bf.dl = !0
	}, this.a5J = function() {
		for (var gY, f8, fA, aMO, hq, fl, a7U = 0, i = bS.fC, j = bS.fD, fj = i * j * 4, aMP = aCa, aMQ = bS.xG, aB = i - 1; 0 <= aB; aB--) aMP[(gY = aB << 2) + 2] = aMP[fj - gY - 2] = 3;
		for (fj = 4 * i, aB = j - 1; 0 <= aB; aB--) aMP[(gY = aB * fj) + 2] = aMP[gY + fj - 2] = 3;
		for (aMO = i - 1, hq = j - 1, fA = 1; fA < hq; fA++)
			for (fj = fA * i, f8 = 1; f8 < aMO; f8++) fl = 1 - (aMQ[(gY = fj + f8 << 2) + 2] > aMQ[gY + 1] && aMQ[gY + 2] > aMQ[gY]), aMP[gY + 2] = 6 - 5 * fl, a7U += fl;
		this.a7T = (i - 2) * (j - 2), this.a7W = 0, bS.eg(bS.eh) && (bS.a7W.aMR(), bS.a7W.aMS(4, 5)), this.a7U = aD.k5 = a7U - this.a7W, this.a7V = this.a7T - this.a7U - this.a7W, this.a7V && (bS.a7W.aMS(6, 2), bS.a7W.aMT())
	}
}

function aLU() {
	var qT;
	10 === bS.eh ? qT =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.eh ? qT =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.eh ? qT =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.eh ? qT =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.eh ? qT =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.eh ? qT =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.eh ? qT =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.eh ? qT =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.eh ? qT =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.eh ? qT =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.eh ? qT =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.eh && (qT =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new wy).x0(qT)
}

function aLO() {
	this.x6 = null, this.aMU = null, this.aMV = null, this.dd = function() {
		var aMW = [120, 105, 92],
			cos = [12, 12, 60],
			aMX = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aMY = [140, 130, 120],
			aMZ = [12, 12, 76],
			aMa = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aMb = [130, 117, 106],
			aMc = [12, 12, 68],
			aMd = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.x6 = new Array(bS.aLL + 1), this.x6[0] = {
			name: L(135),
			i: 230,
			j: 230,
			mz: 1e3,
			mw: 2e3,
			aLT: 173
		}, this.x6[1] = {
			name: L(136),
			i: 800,
			j: 800,
			mz: 100,
			mw: 50,
			aLT: 43
		}, this.x6[2] = {
			name: L(137),
			i: 512,
			j: 512,
			mz: 128,
			mw: 32,
			aLT: 0
		}, this.x6[3] = {
			name: L(138) + " 1",
			i: 960,
			j: 960,
			mz: 60,
			mw: 8,
			aLT: 0
		}, this.x6[4] = {
			name: L(139),
			i: 900,
			j: 900,
			mz: 100,
			mw: 5,
			aLT: 0
		}, this.x6[5] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			mz: 100,
			mw: 40,
			aLT: 0
		}, this.x6[6] = {
			name: L(141),
			i: 1e3,
			j: 1e3,
			mz: 100,
			mw: 20,
			aLT: 0
		}, this.x6[7] = {
			name: L(142),
			i: 1024,
			j: 1024,
			mz: 128,
			mw: 32,
			aLT: 0
		}, this.x6[8] = {
			name: L(143),
			i: 820,
			j: 820,
			mz: 200,
			mw: 100,
			aLT: 0
		}, this.x6[9] = {
			name: L(144),
			i: 1024,
			j: 1024,
			mz: 128,
			mw: 32,
			aLT: 0
		}, this.x6[10] = {
			name: L(145),
			xX: aMY,
			xY: aMZ,
			aLe: aMa
		}, this.x6[11] = {
			name: L(146),
			xX: aMb,
			xY: aMc,
			aLe: aMd
		}, this.x6[12] = {
			name: L(147),
			xX: aMb,
			xY: aMc,
			aLe: aMd
		}, this.x6[13] = {
			name: L(148),
			xX: aMW,
			xY: cos,
			aLe: aMX
		}, this.x6[14] = {
			name: L(149),
			xX: aMW,
			xY: cos,
			aLe: aMX
		}, this.x6[15] = {
			name: L(150),
			xX: aMY,
			xY: aMZ,
			aLe: aMa
		}, this.x6[16] = {
			name: L(151),
			xX: aMY,
			xY: aMZ,
			aLe: aMa
		}, this.x6[17] = {
			name: L(152),
			xX: aMW,
			xY: cos,
			aLe: aMX
		}, this.x6[18] = {
			name: L(153),
			xX: aMb,
			xY: aMc,
			aLe: aMd
		}, this.x6[19] = {
			name: L(154),
			xX: aMW,
			xY: cos,
			aLe: aMX
		}, this.x6[20] = {
			name: L(155),
			i: 1024,
			j: 1024,
			mz: 128,
			mw: 32,
			aLT: 0
		}, this.x6[21] = {
			name: L(138) + " 2",
			i: 940,
			j: 940,
			mz: 80,
			mw: 8,
			aLT: 0
		}, this.x6[22] = {
			name: L(156),
			xX: aMb,
			xY: aMc,
			aLe: aMd
		}, this.x6[23] = {
			name: L(157),
			xX: aMY,
			xY: aMZ,
			aLe: aMa
		}, this.x6[bS.aLL] = {
			name: ""
		}, this.aMU = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aMU[aB] = aB;
		for (this.aMU[10] = 20, this.aMU[11] = 21, this.aMV = new Uint8Array(bS.aLM), aB = 0; aB < 10; aB++) this.aMV[aB] = 10 + aB;
		this.aMV[10] = 22, this.aMV[11] = 23
	}
}

function aLP() {
	this.aMR = function() {
		for (var gY, f8, fj, aMP = aCa, aMQ = bS.xG, i = bS.fC, aMO = i - 1, hq = bS.fD - 1, gT = 0, fA = 1; fA < hq; fA++)
			for (fj = fA * i, f8 = 1; f8 < aMO; f8++) aMQ[gY = fj + f8 << 2] === aMQ[1 + gY] && aMQ[gY] === aMQ[2 + gY] && (gT++, aMP[2 + gY] = 4);
		ap.a7W = gT
	}, this.aMS = function(aMe, aMf) {
		for (var aMP = aCa, i = bS.fC, aMO = i - 1, hq = bS.fD - 1, id = 0, fA = 1; fA < hq; fA++)
			for (var fj = fA * i, f8 = 1; f8 < aMO; f8++) {
				var ef = 2 + (fj + f8 << 2);
				aMP[ef] === aMe && (! function(ef, id, aMe, aMf) {
					var f1 = 1,
						aMP = aCa,
						f3 = ac.f3,
						a3I = [ef],
						aMh = id >> 8 << 1,
						aMi = 255 & id;
					aMP[ef - 2] = aMh, aMP[ef - 1] = aMi, aMP[ef] = 5;
					for (; f1;) {
						for (var a3J = [], aB = 0; aB < f1; aB++)
							for (var eq = a3I[aB], f4 = 3; 0 <= f4; f4--) {
								var f5 = eq + f3[f4];
								aMP[f5] === aMe && (aMP[f5 - 2] = aMh, aMP[f5 - 1] = aMi, aMP[f5] = aMf, a3J.push(f5))
							}
						f1 = (a3I = a3J).length
					}
				}(ef, id, aMe, aMf), id = (id + 1) % 32768)
			}
	}, this.aMT = function() {
		for (var aMP = aCa, i = bS.fC, aMO = i - 3, hq = bS.fD - 3, aMk = 12 * i, fA = 3; fA < hq; fA++)
			for (var fj = fA * i, f8 = 3; f8 < aMO; f8++) {
				var ef = 2 + (fj + f8 << 2);
				2 !== aMP[ef] || 2 === aMP[ef - 12] && 2 === aMP[12 + ef] && 2 === aMP[ef - aMk] && 2 === aMP[ef + aMk] || (aMP[ef - 2] = 1 | aMP[ef - 2])
			}
	}
}

function a5I() {
	(yq = void 0 === yq ? document.createElement("canvas") : yq).width = bS.fC, yq.height = bS.fD, a5M = yq.getContext("2d", {
		alpha: !0
	}), a5N = aCa = null, a5N = a5M.getImageData(0, 0, bS.fC, bS.fD), aCa = a5N.data, bA.qu.xH(aCa)
}

function ch() {
	var fS, i, j, max, aMl, mw, aMn, aMo, aMp, aMq, aMr, aMs, aMt, aMu, aMm = 1e4;

	function aN1(aN0, mz, f1) {
		var aB;
		for (aMn[0] = aN0, aB = 1; aB < f1; aB++) aMn[aB] = aMn[aB - 1] + mz, mz = aMn[aB] >= aMm ? (aMn[aB] = aMm - 1, -mz) : aMn[aB] < 0 ? (aMn[aB] = 0, -mz) : (mz += 16384 <= ay.random() ? mw : -mw) < -aMl ? -aMl : aMl < mz ? aMl : mz
	}

	function aN3(f8, fA, aN4, f1) {
		(aN4 ? function(f8, fA, f1) {
			var aB;
			for (aB = 0; aB < f1; aB++) fS[fA * i + f8 + aB] = aMn[aB]
		} : function(f8, fA, f1) {
			var aB;
			for (aB = 0; aB < f1; aB++) fS[fA * i + f8 + aB * i] = aMn[aB]
		})(f8, fA, f1)
	}

	function aN7(value, f1) {
		var aB, aKm, ef, ja = value - aMn[f1 - 1];
		if (0 != ja) {
			for (aKm = 1 + bL.du(Math.abs(ja), f1 - 1), aKm = ja < 0 ? -aKm : aKm, aMn[f1 - 1] = value, ef = (ef = f1 - 1 - bL.du(Math.abs(ja), Math.abs(aKm))) < 1 ? 1 : f1 - 2 < ef ? f1 - 2 : ef, aB = f1 - 2; ef <= aB; aB--) aMn[aB] += ja - (f1 -
				1 - aB) * aKm;
			(ja < 0 ? function(f1) {
				var aB;
				for (aB = f1 - 2; 1 <= aB; aB--) aMn[aB] < 0 && (aMn[aB] = -aMn[aB] - 1)
			} : function(f1) {
				var aB;
				for (aB = f1 - 2; 1 <= aB; aB--) aMn[aB] >= aMm && (aMn[aB] = 2 * aMm - aMn[aB] - 1)
			})(f1)
		}
	}

	function aNA(a3I, a3J, f1) {
		for (var aB = 0; aB < f1; aB++) a3I[aB] = a3J[aB]
	}

	function aNB(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aNC(a5y, gap, hr) {
		aMo.push(a5y), aMp.push(gap), aMq.push(hr)
	}
	this.a7 = function(a4W) {
		! function(a4W) {
			var aB;
			for (i = a4W[0], j = a4W[1], aMl = a4W[2], mw = a4W[3], fS = new Int16Array(i * j), max = j < i ? i : j, aMn = new Int16Array(max), aMo = [], aMp = [], aMq = [], aMr = new Array(i), aMs = new Array(j), aB = i - 1; 0 <= aB; aB--) aMr[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aMs[aB] = !1;
			aMt = new Int16Array(i), aMu = new Int16Array(j)
		}(a4W),
		function(f1) {
			var aN0 = ay.random() % aMm,
				mz = ay.random() % (2 * aMl + 1) - aMl;
			aN1(aN0, mz, f1)
		}(max), aNA(aMu, aMn, j), aN3(0, 0, !0, i);
		var f8, fA, a4W = fS[0],
			f1 = max,
			mz = ay.random() % (2 * aMl + 1) - aMl;
		for (aN1(a4W, mz, f1), aNA(aMt, aMn, i), aN3(0, 0, !1, j), aNB(aMt), aNB(aMu), aN1(fS[i - 1], aMt[i - 1], j), aN3(i - 1, 0, !1, j), aN1(fS[i * (j - 1)], aMu[j - 1], i), aN7(fS[i * j - 1], i), aN3(0, j - 1, !0, i), aMr[i - 1] = aMr[0] = !
			0, aMs[j - 1] = aMs[0] = !0, aNC(0, i, !0), aNC(0, j, !1), ! function() {
				var aNE, a5y;
				for (;;) {
					if (aNE = function() {
							var aB, aNE = aMo.length - 1;
							for (aB = aNE - 1; 0 <= aB; aB--) aMp[aB] > aMp[aNE] && (aNE = aB);
							return aNE
						}(), aMp[aNE] < 5) return;
					a5y = aMo[aNE] + bL.du(aMp[aNE], 2), (aMq[aNE] ? function(f8) {
						var f1, aNH, aB, aGO = 0,
							aNI = 0;
						for (; aNI < j - 1;) {
							for (aB = aGO + 1; aB < j; aB++)
								if (aMs[aB]) {
									aNI = aB;
									break
								} f1 = aNI - aGO + 1, aN1(fS[f8 + i * aGO], 0 === aGO ? aMt[f8] : aMn[aNH - 1] - aMn[aNH - 2], f1), aN7(fS[aNI * i + f8], f1), aN3(f8, aGO, !1, f1), aNH = f1, aGO = aNI
						}
						aMr[f8] = !0
					} : function(fA) {
						var f1, aNH, aB, aGO = 0,
							aNI = 0;
						for (; aNI < i - 1;) {
							for (aB = aGO + 1; aB < i; aB++)
								if (aMr[aB]) {
									aNI = aB;
									break
								} f1 = aNI - aGO + 1, aN1(fS[fA * i + aGO], 0 === aGO ? aMu[fA] : aMn[aNH - 1] - aMn[aNH - 2], f1), aN7(fS[fA * i + aNI], f1), aN3(aGO, fA, !0, f1), aNH = f1, aGO = aNI
						}
						aMs[fA] = !0
					})(a5y), aNC(a5y, aMo[aNE] + aMp[aNE] - a5y, aMq[aNE]), aMp[aNE] = a5y - aMo[aNE] + 1
				}
			}(), f8 = 0; f8 < i; f8++)
			if (!aMr[f8])
				for (fA = 0; fA < j; fA++) aMs[fA] || ! function(f8, fA) {
					var value = fS[fA * i + f8 - 1] + fS[(fA - 1) * i + f8],
						a7h = 2;
					aMr[f8 + 1] && (a7h++, value += fS[fA * i + f8 + 1]);
					aMs[fA + 1] && (a7h++, value += fS[(fA + 1) * i + f8]);
					fS[fA * i + f8] = bL.du(value, a7h)
				}(f8, fA)
	}, this.aLq = function() {
		return fS
	}, this.aLX = function() {
		fS = null
	}
}

function aHn(fK, fL) {
	return 0 <= fK ? bL.du(fK, fL) : -bL.du(-fK, fL)
}

function jr(fS) {
	return fS * fS
}

function a6w(fK, fL) {
	return fL < fK ? fK : fL
}

function aC4(fK, fL) {
	return fK < fL ? fK : fL
}

function a9K(fK, fS, fL) {
	return fS < fK ? fK : fL < fS ? fL : fS
}

function aNK(fS, f1) {
	for (var eZ = bL.du(fS + 1, 2), aB = 0; aB < f1; aB++) eZ = bL.du(eZ + bL.du(fS, eZ), 2);
	return eZ
}

function aJI(fS, f1) {
	return fS < 1 ? 0 : aNK(fS, f1)
}

function aNL(nK, nL, t8, a93, nX, nY, t9, tq) {
	return !(nK + t8 <= nX || nL + a93 <= nY || nX + t9 <= nK || nY + tq <= nL)
}

function aNM(nK, nL, t8, a93, nX, nY, t9, tq) {
	return nK <= nX && nL <= nY && nX + t9 <= nK + t8 && nY + tq <= nL + a93
}

function x8(fS) {
	return Math.floor(!!fS * (1 + Math.log2(fS + .5)))
}

function bx() {
	this.du = function(fK, fL) {
		return Math.floor((fK + .5) / fL)
	}, this.aNN = function(fK, fL) {
		return Math.floor(fK * (fL + .5))
	}, this.sqrt = function(fS) {
		return ~~Math.sqrt(fS + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.i8 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aNO = function(fj, fl, fn) {
		return Math.max(Math.min(fj, fl), fn)
	}, this.aNP = function(aNQ, aNR, f8, fA) {
		f8 -= aNQ, aNQ = fA - aNR, fA = 0;
		return 0 == f8 ? fA = 0 <= aNQ ? Math.PI : 0 : (fA = Math.atan(aNQ / f8), fA += 0 < f8 ? .5 * Math.PI : 1.5 * Math.PI), fA
	}, this.log2 = function(fS) {
		return Math.floor(!!fS * (1 + Math.log2(fS + .5)))
	}, this.log10 = function(fS) {
		return Math.floor(Math.log10(fS + .5))
	}, this.aNT = function(aNU, aNV, aNW, aNX, aNY) {
		return aNW - aNY < aNU && aNU < aNW + aNY && aNX - aNY < aNV && aNV < aNX + aNY
	}, this.y5 = function(a9k, a9m) {
		return a9k * a9k + a9m * a9m
	}
}

function dD() {
	this.y = new aNZ, this.t1 = 0;
	var aNa = new Array(32);

	function aNe() {
		for (var f1 = aNa.length, aB = 0; aB < f1; aB++) aNa[aB] = null
	}
	this.dd = function() {
		for (var aNb, aNc = document.body.firstChild; aNc;) aNb = aNc.nextSibling, !document.body.contains(aNc) || "DIV" !== aNc.tagName && "INPUT" !== aNc.tagName && "BUTTON" !== aNc.tagName || t.removeChild(document.body, aNc), aNc = aNb
	}, this.u = function(e9, aNd, a4W) {
		void 0 === aNd && (aNd = this.t1), bf.dl = !0, 0 === e9 && (0 === aa.a1t() ? e9 = 5 : a0.a1.setState(13)), this.s3(), this.t1 === e9 && (aNd = aNa[e9].aNd, aNa[e9] = null), this.t1 = e9;
		var lG = aNa[e9];
		if (!lG || 4 === e9 || 7 === e9 || 8 === e9 || 9 === e9 || 10 === e9 || 11 === e9 || 13 === e9 || 15 === e9 || 18 === e9 || 20 <= e9 && e9 <= 28 || 32 === e9 || 33 === e9) {
			if (0 === e9) return void aNe();
			1 === e9 ? lG = new aNf : 2 === e9 ? lG = new aNg : 3 === e9 ? lG = new aNh : 4 === e9 || 9 === e9 || 10 === e9 || 11 === e9 || 13 === e9 || 33 === e9 ? lG = a4W : 5 === e9 ? lG = new aNi : 6 === e9 ? lG = new aNj : 7 === e9 ? lG =
				new aNk(t.y.aNl) : 8 === e9 ? lG = a4W : 12 === e9 ? lG = new aNm : 14 === e9 ? lG = new aNn : 15 === e9 ? lG = new aNk(t.y.aNo) : 16 === e9 ? lG = new aNp : 17 === e9 ? lG = new aNq : 18 === e9 ? lG = new aNr : 19 === e9 ? lG =
				new aNs : 20 === e9 ? lG = new aNt : 21 === e9 ? lG = new aNu : 22 === e9 ? lG = new aNv : 23 === e9 ? lG = new aNw : 24 === e9 ? lG = new aNx : 25 === e9 ? lG = new aNy : 26 === e9 ? lG = new aNz : 27 === e9 ? lG = new aO0 :
				28 === e9 ? lG = new aO1 : 29 === e9 ? lG = new aO2 : 30 === e9 ? lG = new aO3 : 31 === e9 && (lG = new aO4), lG.aNd = aNd, aNa[e9] = lG
		}
		lG.show(a4W)
	}, this.a1s = function() {
		this.hm() && this.aO5(this.a5i().aNd)
	}, this.aO5 = function(e9) {
		this.hm() && (aNa[e9] ? (this.s3(), bf.dl = !0, this.t1 = e9, aNa[e9].show()) : this.u(e9))
	}, this.s3 = function() {
		this.hm() && aNa[this.t1].s3()
	}, this.x = function() {
		this.hm() && (aNa[this.t1].s3(), aNe(), this.t1 = 0, a0.a1.setState(13))
	}, this.vK = function() {
		var lG;
		this.hm() && (lG = aNa[this.t1]).vK && lG.vK()
	}, this.resize = function() {
		if (!this.hm()) return !1;
		aNa[this.t1].resize()
	}, this.hD = function(f8, fA) {
		var lG;
		this.hm() && (lG = aNa[this.t1]).hD && lG.hD(f8, fA)
	}, this.a2C = function(f8, fA) {
		var lG;
		this.hm() && (lG = aNa[this.t1]).a2C && lG.a2C(f8, fA)
	}, this.a2a = function() {
		var lG;
		this.hm() && (lG = aNa[this.t1]).a2a && lG.a2a()
	}, this.a2F = function(la, lb, deltaY) {
		var lG;
		this.hm() && (lG = aNa[this.t1]).a2F && lG.a2F(la, lb, deltaY)
	}, this.a2k = function(code) {
		var lG;
		return !!this.hm() && ((lG = aNa[this.t1]).a2k && lG.a2k(code), !0)
	}, this.eU = function() {
		var lG;
		this.hm() && (lG = aNa[this.t1]) && lG.eU && lG.eU()
	}, this.hm = function() {
		return 0 < this.t1
	}, this.a5i = function() {
		return aNa[this.t1]
	}, this.a5j = function(e9) {
		return aNa[e9]
	}, this.aO6 = function() {
		return aNa
	}, this.removeChild = function(ur, a41) {
		try {
			ur.removeChild(a41)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aNk(data) {
	var aO7, aO8;
	this.show = function() {
		data.aO9 && bI.aP1("account", data.sz), aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aO8.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(data.username, [new w("⬅️ " + L(40), function() {
		bI.clear(), t.a1s()
	}), new w(data.aO9 ? "🔄 " + L(158) : L(159), function() {
		t.u(8, data.aO9 ? t.a5i().aNd : void 0, new t2(25, {
			t3: 0,
			sz: data.sz,
			t0: data.t0
		}))
	}, 0, 0, 1)]), aO8 = new qf(aO7.vB, function() {
		var qh = [];
		qh.push(function() {
				var aOR = new qP,
					a1Q = (aOR.qS(L(216)), data.aOh);
				a1Q < 1 ? (aOR.qY(L(217)), 0 === data.aOi ? aOR.qU(L(218)) : 1 === data.aOi ? aOR.qU(L(219)) : 2 === data.aOi ? aOR.qU(L(220)) : 3 === data.aOi ? aOR.qU(L(221)) : 4 === data.aOi ? aOR.qU(L(222)) : 5 === data.aOi ? aOR.qU(
					L(223)) : 6 === data.aOi ? aOR.qU(L(224)) : aOR.qU(L(225))) : (aOR.qY(L(226)), a1Q = a1Q < 2 ? L(227) : a1Q < 61 ? 2 === a1Q ? L(228) : L(229, [a1Q - 1]) : a1Q < 84 ? 61 === a1Q ? L(230) : L(231, [a1Q - 60]) :
					a1Q < 255 ? 84 === a1Q ? L(232) : L(233, [a1Q - 83]) : L(234), aOR.qU(a1Q));
				{
					var qV, aOV;
					aOR.qd(new sR), data.aO9 && (qV = aOR.qU(), aOR.qd(new sH([new w(bj.vj.uG(data.sz) ? L(235) : L(236), function(e) {
						return bj.vj.vv(data.sz) ? (e.textContent = L(235), aOV(1)) : (e.textContent = L(236), aOV(0)), !0
					}).button])), aOV = function(fS) {
						qV.textContent = fS ? L(237) : ""
					}, bj.vj.uG(data.sz) && aOV(1), aOR.qd(new sR))
				}
				var rZ = new ra({
					value: data.username,
					e9: -1
				});
				rZ.e.readOnly = !0, aOR.qd(rZ), aOR.qd(new sH([new w(L(182), function(e) {
					return bA.qm.a3z(rZ.e), bA.qm.ux(e), !0
				}).button])), data.aO9 ? (aOR.qd(new sR), aOR.qY("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", aOR.qd(new sH([new w(L(239),
					function(e) {
						return b0.aFo.aFp({
							t3: 3,
							sz: data.sz,
							value: 0
						}), bA.qm.ux(e), !0
					}, bB.oZ).button])), aOR.qd(new sH([new w(L(240), function(e) {
					return b0.aFo.aFp({
						t3: 3,
						sz: data.sz,
						value: 1
					}), bA.qm.ux(e), !0
				}, bB.oZ).button])), aOR.qd(new sH([new w("Cheater", function(e) {
					return b0.aFo.aFp({
						t3: 3,
						sz: data.sz,
						value: 2
					}), bA.qm.ux(e), !0
				}, bB.oZ).button])), aOR.qd(new sH([new w("False Reporter", function(e) {
					return b0.aFo.aFp({
						t3: 3,
						sz: data.sz,
						value: 3
					}), bA.qm.ux(e), !0
				}, bB.oZ).button]))) : aOR.qU(L(238));
				return aOR
			}()),
			function(qh) {
				var aOR, qV, aCq, aOk, aOY;
				data.aO9 || ((aOR = new qP).qS(L(241)), (qV = aOR.qU(data.aOj.length + " / 160")).style.textAlign = "center", aCq = !0, (aOk = new vT(0, 1, function(e) {
					e = e.target.value.length;
					qV.textContent = e + " / 160", 160 < e ? aCq && (aCq = !1, aOY.r6(1), aOY.button.style.color = bB.nu) : aCq || (aCq = !0, aOY.r6(0), aOY.button.style.color = bB.os)
				})).e.rows = 6, aOk.e.style.fontSize = "1em", aOk.va(data.aOj), aOR.qd(aOk), aOY = new w(L(242), function() {
					if (!aCq) return !0;
					t.u(8, t.a5i().aNd, new t2(29, {
						t3: 1,
						qT: aOk.vb().substring(0, 160)
					}))
				}, 0, 0, 1), aOR.qd(new sH([aOY.button])), 0 !== data.aOl && (aOR.qd(new sH([new w(L(1 === data.aOl ? 244 : 245), function() {
					t.u(8, t.a5i().aNd, new t2(29, {
						t3: 0,
						qT: ""
					}))
				}, 0, 0, 1).button])), aOR.qU(1 === data.aOl ? L(246, [data.aOn - 1]) : L(247, [data.aOn - 1]))), aOR.qU(L(243, [data.aOm])), qh.push(aOR))
			}(qh),
			function(qh) {
				var aOR;
				data.aO9 && 0 !== data.aOl && ((aOR = new qP).qS(L(248)), aOR.qW(data.aOj), aOR.qd(new sH([new w(L(249, 0, "Report"), function(e) {
					return b0.y.eV(0) && (bA.qm.ux(e), b0.aFo.aOo({
						t3: 5,
						sz: data.sz
					})), !0
				}, 0, 0, 1).button])), qh.push(aOR))
			}(qh), qh.push(function() {
				var aOR = new qP,
					aOS = (aOR.qS(L(160)), aOR.qY("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(161), L(162), L(163), L(164), L(165), L(166), L(167),
						L(168), L(169), L(170), L(171), L(172), L(173), L(174)
					]),
					e8 = data.aOT;
				return aOR.qY(L(175) + bA.rl.a4n(data.wV, .01, 2) + "<br>" + L(176) + (e8 + 1) + " / " + data.wU + "<br>" + L(177) + aOS[function(e8, wV) {
					if (e8 < 10) return 0;
					if (e8 < 30) return 1;
					if (e8 < 60) return 2;
					if (3e4 <= (wV = bL.du(wV, 100))) return 3;
					if (12e3 <= wV) return 4;
					if (7e3 <= wV) return 5;
					if (3e3 <= wV) return 6;
					if (1e3 <= wV) return 7;
					if (500 <= wV) return 8;
					if (200 <= wV) return 9;
					if (70 <= wV) return 10;
					if (20 <= wV) return 11;
					if (3 <= wV) return 12;
					return 13
				}(e8, data.wV)]), aOR
			}()), data.aO9 && qh.push(function() {
				var aOR = new qP,
					rZ = (aOR.qS(L(178)), aOR.qY("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new ra({
						value: bj.eN.data[147].value,
						e9: -1
					}, 1, void 0, function(e) {
						bj.sE.sF(147, aOV(e.target.value))
					})),
					aOW = (aOR.qd(rZ), new w(L(14), function(e) {
						return rZ.e.readOnly && b0.y.eV(0) && (bA.qm.ux(e), aOX(), b0.aFo.aFp({
							t3: 0,
							sz: data.sz,
							value: parseInt(bj.eN.data[147].value, 10)
						})), !0
					}, 1)),
					aOY = new w(L(179), function(e) {
						return e.textContent === L(179) ? (e.textContent = L(180), rZ.e.readOnly = !0, aOW.r6(0), aOW.button.style.color = bB.os, bj.sE.sF(147, rZ.e.value), aOV(bj.eN.data[147].value)) : aOX(), !0
					}),
					qV = (aOR.qd(new sH([aOY.button])), aOR.qU()),
					aOV = function(fS) {
						qV.innerHTML = t.y.aOZ(fS, bj.eN.data[105].value, data.sz)
					},
					aOX = function() {
						aOY.button.textContent = L(179), rZ.e.readOnly = !1, aOW.r6(1), aOW.button.style.color = bB.nu
					};
				return aOV(bj.eN.data[147].value), aOR.qd(new sH([aOW.button])), aOR
			}());
		qh.push(function() {
			var aOR = new qP,
				rZ = (aOR.qS(L(181)), new ra({
					value: data.sz,
					e9: -1
				}));
			return rZ.e.readOnly = !0, aOR.qd(rZ), aOR.qd(new sH([new w(L(182), function(e) {
				return bA.qm.a3z(rZ.e), bA.qm.ux(e), !0
			}).button])), aOR
		}()), data.aO9 || (qh.push(function() {
			var aOR = new qP,
				aOa = (aOR.qS(L(183)), new ra(bj.eN.data[106]));
			return aOa.e.readOnly = !0, aOa.e.type = "password", aOR.qd(aOa), aOR.qd(new sH([new w(L(184), function(e) {
				return e.textContent === L(184) ? (e.textContent = L(185), aOa.e.type = "text") : (e.textContent = L(184), aOa.e.type = "password"), !0
			}).button, new w(L(182), function(e) {
				return bA.qm.a3z(aOa.e), bA.qm.ux(e), !0
			}).button])), aOR.qd(new sH([new w(L(186), function() {
				t.u(8, t.a5i().aNd, new t2(15))
			}).button])), aOR.qS(L(187), "0.8em"), aOR.qU(L(188)), aOR.qU(L(189)), aOR.qU(L(190)), aOR
		}()), qh.push(function() {
			var aOR = new qP;
			return aOR.qS(L(191)), aOR.qd(new sH([new w(L(192), function() {
				t.u(6, t.a5i().aNd)
			}).button])), aOR.qd(new sH([new w(L(193), function() {
				bj.sE.sF(105, ""), t.u(8, t.a5i().aNd, new t2(18))
			}).button])), aOR.qd(new sH([new w(L(194) + bj.eN.data[105].value, function() {
				t.u(4, 0, new v(L(195), L(196), !0, [new w("⬅️ " + L(40), function() {
					t.u(7, t.a5j(7).aNd)
				})]))
			}, bB.oZ).button])), aOR
		}()), qh.push(function() {
			function aOc(e9) {
				aOb[0].r6(0 === e9 ? bB.o6 : bB.oH), aOb[1].r6(0 === e9 ? bB.o6 : bB.oZ), aOb[2].r6(e9 === qb.qc.length - 1 || e9 < 5 ? bB.o6 : bB.oZ)
			}
			var qb, aOb, aOR = new qP;
			aOR.qS(L(201)), aOR.qU(L(202)), bj.y.wF();
			return aOb = [new w(L(203), function() {
				var e9 = Math.min(bj.eN.data[117].value, qb.qc.length - 1);
				e9 < 1 || (e9 = bj.y.wJ(e9), bj.sE.sF(105, e9.sz), bj.sE.sF(106, e9.password), t.u(8, t.a5i().aNd, new t2(18)))
			}, bB.o6, 1), new w(L(199), function() {
				var e9 = Math.min(bj.eN.data[117].value, qb.qc.length - 1);
				if (!(e9 < 1)) {
					qb.qc[e9].remove(), qb.qc.splice(e9, 1);
					for (var aB = e9; aB < qb.qc.length; aB++) qb.qc[aB].name = "" + aB;
					bj.y.wI(e9), e9 = bj.eN.data[117].value, qb.qc[e9].textContent = qb.qc[e9].textContent.replace("⚪", "🟢"), aOc(e9)
				}
			}, bB.o6, 1), new w(L(200), function() {
				var e9 = Math.min(bj.eN.data[117].value, qb.qc.length - 1);
				if (e9 !== qb.qc.length - 1) {
					for (var aB = qb.qc.length - 1; e9 < aB; aB--) qb.qc[aB].remove(), qb.qc.splice(aB, 1), bj.y.wI(aB);
					aOc(e9)
				}
			}, bB.o6, 1)], qb = new v0(bj.eN.data[117], aOc), aOc(0), qb.qc[0].style.marginTop = "0.5em", aOR.qa(qb), aOR.qd(new sH([aOb[0].button])), aOR.qd(new sH([aOb[1].button])), aOR.qd(new sH([aOb[2].button])), aOR
		}()));
		return qh.push(function() {
				var aOR = new qP,
					aOS = (aOR.qS(L(207)), [L(208), L(209), L(210), L(211)]),
					e8 = data.aOd;
				return aOR.qY(L(212) + (data.a19 / 100).toFixed(2) + "<br>" + L(176) + (e8 + 1) + " / " + data.wU + "<br>" + L(177) + aOS[e8 < 10 ? 0 : e8 < 50 ? 1 : e8 < 200 ? 2 : 3]), aOR
			}()), qh.push(function() {
				var aOR = new qP;
				return aOR.qS(L(204)), aOR.qY(L(205) + bA.rl.a4n(data.wR, .1, 1) + "<br>" + L(176) + (data.wS + 1) + " / " + data.wU + "<br>" + L(206) + data.wT), aOR
			}()),
			function(qh) {
				var aOR = new qP,
					aOp = data.wY,
					aOq = (aOR.qS(L(250)), aOR.qY(L(251, [data.wW.length ? "[" + data.wW + "]" : "-"])), aOR.qY(L(252, [bA.rl.a4n(aOp, .01, 2)])), aOR.qY(L(253, [data.wa + 1 + " / " + data.wU])), data.wb),
					aOr = (aOR.qY(L(254, [bA.rl.a4n(aOq, .1, 1)])), data.wd);
				aOR.qY(L(255, [aOr])), aOR.qY(L(256, [bA.rl.a4n(aOq / Math.max(aOr, 1), .1, 2)])), aOp = data.wZ, aOR.qS(L(257), "0.8em"), aOR.qY(L(251, [data.wX.length ? "[" + data.wX + "]" : "-"])), aOR.qY(L(252, [bA.rl.a4n(aOp, .01, 2)])),
					aOq = data.wc, aOR.qY(L(254, [bA.rl.a4n(aOq, .1, 1)])), aOr = data.we, aOR.qY(L(255, [aOr])), aOR.qY(L(256, [bA.rl.a4n(aOq / Math.max(aOr, 1), .1, 2)])), data.aO9 || (aOR.qU(L(258)), aOR.qU(L(259)));
				qh.push(aOR)
			}(qh),
			function(qh) {
				var aOR = new qP;
				aOR.qS(L(260)), aOR.qY(L(212) + (data.aOs / 10).toFixed(1) + "<br>" + L(177) + (data.aOt.length ? L(261, [data.aOt]) : L(262))), data.aO9 ? (aOR.qd(new sH([new w(L(263), function(e) {
					return b0.y.eV(0) && (bA.qm.ux(e), b0.aFo.aOo({
						t3: 4,
						sz: data.sz
					})), !0
				}, 0, 0, 1).button])), aOR.qU(L(264)), aOR.qU(L(265))) : aOR.qU(L(266));
				qh.push(aOR)
			}(qh), qh.push(function() {
				var aOR = new qP;
				if (aOR.qS(L(213)), aOR.qY(L(214) + data.aOe + "<br>" + L(176) + (data.aOf + 1) + " / " + data.wU + "<br>" + L(177) + bo.eB(data.aOf)), data.aO9) {
					var rZ = new ra({
							value: bj.eN.data[157].value,
							e9: -1
						}, 1, void 0, function(e) {
							bj.sE.sF(157, aOV(e.target.value))
						}),
						aOY = (rZ.e.style.marginTop = "0.6em", aOR.qd(rZ), new w(L(179), function(e) {
							return e.textContent === L(179) ? (e.textContent = L(180), rZ.e.readOnly = !0, aOg[0].r6(0), aOg[1].r6(0), aOg[0].button.style.color = bB.os, aOg[1].button.style.color = bB.os, aOV(bj.eN.data[157]
								.value)) : aOX(), !0
						})),
						aOg = (aOR.qd(new sH([aOY.button])), [new w("−", function(e) {
							return rZ.e.readOnly && b0.y.eV(0) && (bA.qm.ux(e), aOX(), b0.aFo.aFp({
								t3: 2,
								sz: data.sz,
								value: bL.i8(parseInt(bj.eN.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rZ.e.readOnly && b0.y.eV(0) && (bA.qm.ux(e), aOX(), b0.aFo.aFp({
								t3: 1,
								sz: data.sz,
								value: bL.i8(parseInt(bj.eN.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qV = aOR.qU(),
						aOV = function(fS) {
							return fS = bA.gM.a4T(fS, 3, 32767), qV.textContent = L(215, [fS - 1, fS, bj.eN.data[105].value]), fS
						};
					aOR.qd(new sH([aOg[0].button, aOg[1].button]));
					for (var aB = 0; aB < 2; aB++) aOg[aB].button.style.fontSize = "1.6em";
					var aOX = function() {
						aOY.button.textContent = L(179), rZ.e.readOnly = !1, aOg[0].r6(1), aOg[1].r6(1), aOg[0].button.style.color = bB.nu, aOg[1].button.style.color = bB.nu
					};
					aOV(bj.eN.data[157].value)
				}
				return aOR
			}()),
			function(qh) {
				var aOR, a3y;
				data.aO9 && !data.aOu || (0 === a0.id || data.aO9 || data.aOu) && ((aOR = new qP).qS("Patreon"), !data.aO9 && data.aOv ? aOR.qd(new sH([new w(L(184), function() {
					b0.aFo.aOo({
						t3: 7,
						sz: data.sz
					}), data.aOv = 0, t.u(7)
				}).button])) : data.aOu ? (aOR.qY(L(267, [(data.aOw / 100).toFixed(2)]) + "<br>" + L(268, [1 + data.aOx + " / " + data.aOy]) + "<br>" + L(269, [data.aOz ? L(270) : L(271)])), data.aO9 || aOR.qd(new sH([new w(L(272),
					function() {
						b0.aFo.aOo({
							t3: 8,
							sz: data.sz
						}), data.aOu = 0, bj.sE.sF(160, 0), t.u(7)
					}).button]))) : (aOR.qY(L(273), "0.75em").style.marginBottom = "0.3em", aOR.qY("  • " + L(274), "0.75em").style.whiteSpace = "pre", aOR.qY("  • " + L(275), "0.75em").style.whiteSpace = "pre", aOR.qY("  • " + L(
						276), "0.75em").style.whiteSpace = "pre", aOR.qY(L(277), "0.75em").style.marginTop = "1.0em", aOR.qY(L(278), "0.75em").style.marginTop = "1.0em", aOR.qY("<a href='" + bK.aP0 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3y = "https://www.patreon.com/oauth2/authorize?state=" + data.sz +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aOR.qY(L(279), "0.75em").style.marginTop = "1.0em", aOR.qY("<a href='" + a3y +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aO9 || (aOR.qd(new sR), aOR.qd(new sH([new w(L(185), function() {
						b0.aFo.aOo({
							t3: 6,
							sz: data.sz
						}), data.aOv = 1, t.u(7)
					}).button])), aOR.qY(L(280), "0.75em").style.marginTop = "0.75em")), qh.push(aOR))
			}(qh),
			function(qh) {
				var aOR, qb, aOb, e9, aOc;
				data.aO9 || bj.vj.get().length && ((aOR = new qP).qS(L(197)), e9 = 0, aOc = function() {
					var aCU = bj.vj.get().length;
					aOb[0].r6(e9 === aCU ? bB.o6 : bB.oH), aOb[1].r6(e9 === aCU ? bB.o6 : bB.oZ), aOb[2].r6(e9 === aCU || aCU - 1 <= e9 || e9 < 5 ? bB.o6 : bB.oZ)
				}, aOb = [new w(L(198), function() {
					t.u(8, void 0, new t2(25, {
						t3: 0,
						sz: bj.vj.get()[e9],
						t0: 0
					}))
				}, bB.o6, 1), new w(L(199), function() {
					bj.vj.vy(e9), qb.qc[e9].remove(), qb.qc.splice(e9, 1);
					for (var aB = e9; aB < qb.qc.length; aB++) qb.qc[aB].name = "" + aB;
					bj.vj.get().length && (e9 = Math.max(e9 - 1, 0), qb.qc[e9].textContent = qb.qc[e9].textContent.replace("⚪", "🟢")), aOc()
				}, bB.o6, 1), new w(L(200), function() {
					for (var hs = qb.qc.length - 1; e9 < hs; hs--) bj.vj.vy(hs), qb.qc[hs].remove(), qb.qc.splice(hs, 1);
					aOc()
				}, bB.o6, 1)], aOc(), (qb = new v0(bj.vj.vu(), function(aB) {
					e9 = aB, aOc()
				})).qc[0].style.marginTop = "0.5em", aOR.qa(qb), aOR.qd(new sH([aOb[0].button])), aOR.qd(new sH([aOb[1].button])), aOR.qd(new sH([aOb[2].button])), qh.push(aOR))
			}(qh), qh
	}())
}

function aNv() {
	var aP2, aP3, aP4, qh;

	function aP5() {
		aP7(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		2 === aD.data.aIncomeType ? (bA.qu.a3M(aP4.vb(), aD.data.aIncomeData, 255), bA.qu.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(281), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), aOR.qa(new v0({
			v4: [L(283), L(284), L(285)],
			value: aD.data.aIncomeType
		}, function(e9) {
			aP7(), 2 !== e9 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ey)), aD.data.aIncomeType = e9, t.u(22)
		})), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR;
		1 === aD.data.aIncomeType && ((aOR = new qP).qS("Value"), aOR.qd(new ra({
			e9: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qh.push(aOR))
	}(qh), function(qh) {
		var aOR;
		2 === aD.data.aIncomeType && ((aOR = new qP).qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.aIncomeData, 4)), aOR.qd(aP4), qh.push(aOR))
	}(qh), qh))
}

function aNy() {
	var aP2, aP3, aP4;

	function aP5() {
		aP7(), 3 !== aD.data.botDifficultyType || bA.qu.a3A(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		3 === aD.data.botDifficultyType && bA.qu.a3M(aP4.vb(), aD.data.botDifficultyData, aE.kW.length - 1)
	}

	function aPC(qh, e9) {
		var aOR = new qP,
			value = (aOR.qS(e9 < 0 ? L(65) : L(64) + " " + bg.a13[e9 % 9]), 0 <= e9 && (aOR.qY(L(288) + ": " + aD.data.teamPlayerCount[e9]).style.marginBottom = "1em"), e9 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e9]);
		aOR.qa(new v0({
			v4: aE.kW,
			value: value
		}, function(hs) {
			e9 < 0 ? aD.data.botDifficultyValue = hs : aD.data.botDifficultyTeam[e9] = hs
		})), qh.push(aOR)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(65), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, function() {
		var qh = [];
		if (function(qh) {
				var aOR = new qP,
					v4 = (aOR.qS(L(282)), [L(284), L(286), L(287), L(285)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), v4.splice(2, 1));
				aOR.qa(new v0({
					v4: v4,
					value: value
				}, function(e9) {
					aP7(), aD.data.botDifficultyType = e9, 0 === aD.data.gameMode && 2 === e9 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ey)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qh.push(aOR)
			}(qh), 0 === aD.data.botDifficultyType) aPC(qh, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aPC(qh, aB);
		else 3 === aD.data.botDifficultyType && ! function(qh) {
			var aOR = new qP;
			aOR.qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.botDifficultyData, 8)), aOR.qd(aP4), qh.push(aOR)
		}(qh);
		return qh
	}())
}

function aPD(data) {
	var aO7, aPE, aPF, aPG, aPH, aPI, aPJ, colors, aPK, aPL, aPM = 0,
		aPN = 0,
		aPO = !1,
		aPP = !1,
		aPQ = [1, 5, 60, 240, 1440, 10080, 43200];

	function aPu(la, lb) {
		! function(la, lb) {
			return aPE < la && la < aPE + aPG && aPF < lb && lb < aPF + aPH
		}(aPM = la, aPN = lb) ? (aPO && (bf.dl = !0), aPO = !1) : (aPO = !0, bf.dl = !0)
	}
	this.show = function() {
		aPP = bj.eN.data[127].value, aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize();
		var eZ = h.k,
			vJ = aO7.vG(),
			aPZ = eZ * vJ.vI,
			eZ = eZ * vJ.s6;
		aPI = bA.qm.tQ(.06), aPJ = bA.qm.tQ(.04), aPE = bA.qm.tQ(.06), aPF = eZ + aPI, aPG = h.i - aPE - aPJ, aPH = aPZ + eZ - aPF - aPJ
	}, this.vK = function() {
		aO7.vK(),
			function() {
				var aB, aPW, gT, f8, fK, g = data.data,
					aPd = 1,
					aPe = .125,
					aPf = aPP ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aPW = g[aB].aPW, gT = aPW.length, aPd = Math.max(gT, aPd), fK = 0; fK < gT; fK++) aPe = Math.max(aPW[fK], aPe), aPf = Math.min(aPW[fK], aPf);
				var nL = aPF + aPH,
					ye = aPH / (aPe - aPf),
					yd = 1 / (aPd - 1);
				for (vL.lineWidth = bc.zg, aB = 0; aB < g.length; aB++) {
					for (aPW = g[aB].aPW, gT = aPW.length, f8 = aPE, vL.beginPath(), vL.moveTo(f8 + aPG, nL - ye * (aPW[gT - 1] - aPf)), fK = gT - 2; 0 <= fK; fK--) vL.lineTo(f8 + yd * fK * aPG, nL - ye * (aPW[fK] - aPf));
					vL.strokeStyle = colors[aB], vL.stroke()
				}(function(aPf, aPe, nL, ye) {
					vL.font = bA.qm.sb(0, .25 * aPE), bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 2), vL.fillStyle = colors[0];
					for (var f8 = .92 * aPE, aB = 0; aB < 3; aB++) {
						var fS = aPf + aB * (aPe - aPf) / 2;
						vL.fillText((fS / 1e3).toFixed(3), f8, nL - ye * (fS - aPf))
					}
				})(aPf, aPe, nL, ye),
				function(aPd) {
					var fA = aPF + aPH + .15 * aPJ;
					vL.font = bA.qm.sb(0, Math.min(.4 * aPJ, .028 * h.i)), bA.qm.textBaseline(vL, 0), bA.qm.textAlign(vL, 2), vL.fillStyle = colors[0], vL.fillText(bA.a31.a3q(aPK), aPE + aPG, fA), bA.qm.textAlign(vL, 0), vL.fillText(bA.a31.a3q(
						new Date(aPL.getTime() - 6e4 * (aPd - 1) * aPQ[data.aPV])), aPE, fA)
				}(aPd),
				function(aPd, aPf, aPe) {
					if (aPO && !(aPd < 2)) {
						for (var a9B, e9 = (aPM - aPE) / aPG * (aPd - 1), aPi = Math.floor(e9), aPj = Math.floor(1 + e9), aPk = e9 - aPi, aPl = 1e5, aPm = -1, aPn = -1, aPo = aPe - (aPe - aPf) * (aPN - aPF) / aPH, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aD2, aPW = g[aB].aPW;
							aPW.length <= aPj || (aPW = aPW[aPi] + aPk * (aPW[aPj] - aPW[aPi]), (aD2 = Math.abs(aPo - aPW)) < aPl && (aPl = aD2, aPm = aB, aPn = aPW))
						} - 1 !== aPm && (aPe = aPF + aPH - (aPn - aPf) / (aPe - aPf) * aPH, vL.lineWidth = .5 * bc.zg, vL.strokeStyle = colors[aPm], vL.beginPath(), vL.moveTo(aPE, aPe), vL.lineTo(aPM, aPe), vL.lineTo(aPM, aPF + aPH), vL
						.stroke(), vL.beginPath(), vL.arc(aPM, aPe, .1 * aPE, 0, 2 * Math.PI), vL.fillStyle = colors[aPm], vL.fill(), aPf = aPF + aPH + .15 * aPJ, bA.qm.textAlign(vL, 1), a9B = aPd - 2 < e9 ? (a9B = aPL.getTime() - 6e4 * aPQ[
								data.aPV], new Date(a9B + (e9 - (aPd - 2)) * (aPK.getTime() - a9B))) : new Date(aPL.getTime() - 6e4 * (aPd - e9 - 1) * aPQ[data.aPV]), aPd = bA.a31.a3q(a9B), e9 = bA.qm.measureText(aPd), a9B = bL.i8(aPM, aPE +
								.5 * e9, aPE + aPG - .5 * e9), vL.fillStyle = bA.color.nm(70, 50, 20), vL.fillRect(a9B - .52 * e9, aPF + aPH, 1.04 * e9, .55 * aPJ), vL.fillStyle = colors[0], vL.fillText(aPd, a9B, aPf), vL.font = bA.qm.sb(0,
								.25 * aPE), bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 2), a9B = .92 * aPE, aPd = (aPn / 1e3).toFixed(3), e9 = bA.qm.measureText(aPd), aPf = a9B - 1.04 * e9, vL.fillStyle = bA.color.nm(70, 50, 20), vL
							.fillRect(aPf, aPe - .1625 * aPE, aPE - aPf, .275 * aPE), vL.fillStyle = colors[aPm], vL.fillText(aPd, a9B, aPe))
					}
				}(aPd, aPf, aPe)
			}(), vL.lineWidth = bc.zg, vL.strokeStyle = bB.nu, vL.beginPath(), vL.moveTo(aPE, aPF), vL.lineTo(aPE, aPF + aPH), vL.lineTo(aPE + aPG, aPF + aPH), vL.stroke();
		var aB, fontSize = .5 * aPI,
			g = (vL.font = bA.qm.sb(0, fontSize), bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 0), data.data),
			f1 = g.length,
			fA = aPF - .5 * aPI,
			qT = "";
		for (aB = 0; aB < f1; aB++) qT += g[aB].name + "  ";
		qT = qT.trim();
		var aPr = bA.qm.measureText(qT),
			f8 = .5 * (h.i - aPr);
		for (aPr > h.i && (f8 = 0, vL.font = bA.qm.sb(0, h.i / aPr * fontSize)), aB = 0; aB < f1; aB++) vL.fillStyle = colors[aB], vL.fillText(g[aB].name, f8, fA), f8 += bA.qm.measureText(g[aB].name + "  ")
	}, this.hD = function(la, lb) {
		aPu(la, lb)
	}, this.a2C = function(la, lb) {
		aPu(la, lb)
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	};
	var aB, dt, a3o, hs, f4 = data.data,
		f1 = f4.length,
		max = 1;
	for (aB = 0; aB < f1; aB++) max = Math.max(max, f4[aB].aPW.length);
	for (aB = 0; aB < f1; aB++)
		for (; f4[aB].aPW.length < max;) f4[aB].aPW.unshift(0);
	dt = new Date, a3o = 6e4 * dt.getTimezoneOffset(), hs = dt.getTime() - a3o, aPK = new Date(hs), 6 === data.aPV ? function(dt, a3o) {
		var aPY = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aPL = dt < 12 ? new Date(Date.UTC(aPY, dt) - a3o) : new Date(Date.UTC(aPY + 1, 0) - a3o)
	}(dt, a3o) : (a3o = 6e4 * aPQ[data.aPV], aPL = data.aPV <= 4 ? new Date(hs + a3o - dt.getTime() % a3o) : new Date(hs + a3o - (dt.getTime() + 2592e5) % a3o)), hs = bA.color, colors = [bB.nu, hs.nm(255, 0, 0), hs.nm(0, 200, 0), hs.nm(80, 80,
		255), hs.nm(255, 255, 0), hs.nm(255, 0, 255), hs.nm(0, 255, 255), hs.nm(255, 140, 0), hs.nm(128, 128, 128), hs.nm(0, 255, 140)], aO7 = new v5(L(289) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aPV] + ", " + bA.a31.a3n(aPK), [
		new w("⬅️ " + L(40), function() {
			t.u(1)
		}), new w(L(290), function() {
			t.u(14)
		})
	], !1)
}

function aNn() {
	var aO7, aO8, qh;
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aO8.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(L(291), [new w("⬅️ " + L(40), function() {
		t.aO5(13)
	})]), aO8 = new qf(aO7.vB, ((qh = []).push(function() {
		var aOR = new qP,
			aOY = (aOR.qS(L(292)), aOR.qU(L(293)), new w(L(294), function() {
				bj.sE.sF(130, 0), t.y.aPz()
			}, 0, 0, 1)),
			rZ = new ra(bj.eN.data[126], 0, function() {
				aOY.button.click()
			});
		return aOR.qd(rZ), rZ.e.placeholder = "a,b,c", rZ.e.style.marginTop = "0.5em", aOR.qd(new sH([aOY.button])), aOR
	}()), qh.push(function() {
		var aOR = new qP,
			aOY = new w(L(294), function() {
				bj.sE.sF(130, 1), t.y.aPz()
			}, 0, 0, 1),
			aQ0 = new ra(bj.eN.data[129], 1, function() {
				aQ0.e.focus()
			}),
			aQ1 = new ra(bj.eN.data[128], 1, function() {
				aOY.button.click()
			});
		return aOR.qS(L(295)), aOR.qd(aQ1), aQ1.e.style.marginBottom = "0.5em", aOR.qS(L(296)), aOR.qd(aQ0), aOR.qd(new sH([aOY.button])), aOR
	}()), qh.push(function() {
		var aOR = new qP;
		return aOR.qS(L(297)), bj.eN.data[125].v4 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aOR.qa(new v0(bj.eN.data[125])), aOR
	}()), qh.push(function() {
		var aOR = new qP;
		return aOR.qS(L(298)), aOR.qd(new sB(bj.eN.data[127], L(299))), aOR
	}()), qh))
}

function aNm() {
	var aO7, aQ2, aPG, aQ3, aQ4, aQ5, colors = [0, 0, 0],
		aQ6 = -1;

	function aQ9(aB) {
		var aQA = aQ2.fA + aB * (bc.gap + aQ5);
		vL.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vL.fillRect(aQ3, aQA, colors[aB] * aQ4, aQ5), vL.strokeStyle = bB.nu, vL.strokeRect(aQ3, aQA, aQ4,
			aQ5), vL.fillStyle = bB.nu, vL.font = bA.qm.sb(0, .32 * aQ5), bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 0), vL.fillText(L(0 === aB ? 302 : 1 === aB ? 303 : 304) + aQ7(aB), aQ3 + bc.gap, aQA + .53 * aQ5)
	}

	function aQ7(aB, aQB) {
		return aQB = aQB || 256, bL.i8(Math.floor(aQB * colors[aB]), 0, aQB - 1)
	}

	function a2g(la, lb) {
		return !(la < aQ3 || lb < aQ2.fA || la > aQ2.f8 + aQ2.i || lb > aQ2.fA + aQ2.j)
	}
	this.show = function() {
		var fS = bj.eN.data[121].value;
		colors[0] = (fS >> 12) / 63, colors[1] = (fS >> 6 & 63) / 63, colors[2] = (63 & fS) / 63, aO7.show(), this.resize()
	}, this.s3 = function() {
		bj.sE.sF(121, (aQ7(0, 64) << 12) + (aQ7(1, 64) << 6) + aQ7(2, 64)), aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aQ2.resize();
		var eZ = h.k,
			vJ = aO7.vG(),
			aQ8 = (aQ2.fA = Math.max(aQ2.fA, eZ * vJ.s6 + bc.gap), eZ * vJ.vI - 2 * bc.gap);
		aQ2.j = Math.min(aQ2.j, aQ8), aQ2.i = 2 * aQ2.j, aQ2.fA = eZ * vJ.s6 + .5 * (eZ * vJ.vI - aQ2.j), aQ2.f8 = .5 * (h.i - aQ2.i), aPG = .25 * aQ2.i, aQ3 = aQ2.f8 + aPG + bc.gap, aQ4 = aQ2.i - aPG - bc.gap, aQ5 = (aQ2.j - 2 * bc.gap) / 3
	}, this.vK = function() {
		var e8, tP, fL;
		aO7.vK(), vL.lineWidth = bc.zg, e8 = aQ7(0), tP = aQ7(1), fL = aQ7(2), vL.fillStyle = "rgb(" + e8 + "," + tP + "," + fL + ")", vL.fillRect(aQ2.f8, aQ2.fA, aPG, aQ2.j), vL.strokeStyle = bB.nu, vL.strokeRect(aQ2.f8, aQ2.fA, aPG, aQ2.j), vL
			.fillStyle = e8 + tP + fL < 306 && tP < 150 ? bB.nu : bB.nl, bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 1), vL.font = bA.qm.sb(0, .1 * aQ2.j), vL.rotate(-Math.PI / 2), vL.fillText(L(301), -aQ2.fA - .5 * aQ2.j, aQ2.f8 + .5 * aPG),
			vL.setTransform(1, 0, 0, 1, 0, 0), aQ9(0), aQ9(1), aQ9(2)
	}, this.hD = function(la, lb) {
		a2g(la, lb) && (aQ6 = bL.i8(Math.floor((lb - aQ2.fA) / (aQ5 + .75 * bc.gap)), 0, 2), colors[aQ6] = bL.i8((la - aQ3) / aQ4, 0, 1), bf.dl = !0)
	}, this.a2C = function(la) {
		-1 !== aQ6 && (colors[aQ6] = bL.i8((la - aQ3) / aQ4, 0, 1), bf.dl = !0)
	}, this.a2F = function(la, lb, deltaY) {
		a2g(la, lb) && (la = bL.i8(Math.floor((lb - aQ2.fA) / (aQ5 + .75 * bc.gap)), 0, 2), colors[la] = bL.i8(colors[la] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a2a = function() {
		0 <= aQ6 && (aQ6 = -1, bf.dl = !0)
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(L(300), [new w("⬅️ " + L(40), function() {
		t.y.aCw()
	})], !1), aQ2 = new rN([.5, .25], [.5, .5], 1)
}

function aNu() {
	var aP2, aP3, aP4, rL;

	function aP5() {
		aP7(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aO6()[19] = null, t.a1s()
	}

	function aQC() {
		aP7(), t.u(21)
	}

	function aP7() {
		1 === aD.data.gameMode ? aD.a5A.a5F() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qu.a3M(aP4.vb(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, rL = [new w("⬅️ " + L(40), aP5)], 1 === aD.data.gameMode && rL.push(new w(L(305), aQC, 1, 1)), aP2 = new v5(L(306), rL), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), 0 === aD.data.gameMode && (aOR.qa(new v0({
			v4: [L(307), L(285)],
			value: aD.data.colorsType
		}, function(e9) {
			aP7(), aD.data.colorsType = e9, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ey || (aD.data.colorsData = new Uint32Array(aD.ey)), t.u(21)
		})), aOR.qd(new sR));
		aOR.qd(new sB({
			value: aD.data.selectableColor
		}, L(308), function(value) {
			aD.data.selectableColor = value
		})), qh.push(aOR)
	}(rL = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qh) {
		var aOR = new qP;
		aOR.qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.colorsData, 1)), aOR.qd(aP4), qh.push(aOR)
	}(rL) : (aD.a5A.a5F(), rL.push(function() {
		var aOR = new qP;
		aOR.qS(L(288));
		for (var aB = 0; aB < bg.a13.length; aB++) {
			var hs = (aB + 1) % bg.a13.length,
				e = aOR.qY((0 == hs ? "" : "Team ") + bg.a13[hs]);
			aB && (e.style.marginTop = "0.5em"), aOR.qd(new ra({
				e9: -1,
				value: aD.data.teamPlayerCount[hs]
			}, 1, 0, function(e) {
				aP2.vC[1].r6(0);
				var playerCount = bL.i8(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aQE] = playerCount
			})).e.aQE = hs
		}
		return aOR
	}())), rL))
}

function t2(id, a4W, aQF) {
	var aO7, aQG;

	function aQL() {
		aQG.qi.innerHTML += "<br>" + L(311)
	}

	function aQV() {
		var fL = 1;
		t.u(4, 1, new v(L(312), L(313), !1, [new w("🔄 Reload", function() {
			fL && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fL = 0
		}, bB.oH)]))
	}

	function aQK() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.sE.sF(110, bF.t4.t5(bF.t4.t6(8))), b0.aFo.aQY()
	}
	this.aQH = !0, this.aQI = id, this.show = function() {
		aO7.show(), this.resize(), 15 === id ? (b0.y.aQJ(id) ? aQK : aQL)() : 16 === id ? b0.y.aQJ(id) ? b0.eW.eX(2) : aQL() : 17 === id ? b0.y.aQJ(id) ? b0.eW.eX(3) : aQL() : 18 === id ? (b0.y.close(0, 3253), b0.y.aGg(0, id), aQL()) : 21 ===
			id ? b0.y.aQJ(id) ? b0.aQM.aQN(a4W.tK, a4W.tL, a4W.tM) : aQL() : 22 === id ? b0.y.aQJ(id) ? b0.aQM.aQO(a4W.tK, a4W.aQP, a4W.aQQ) : aQL() : 23 === id ? b0.y.aQJ(id) ? b0.aQM.aQR(a4W.aPV, a4W.a1N) : aQL() : 24 === id ? b0.y.aQJ(id) ? b0
			.aQM.aQS(a4W.aPV, a4W.tL, a4W.tM) : aQL() : 25 === id ? b0.y.aQJ(id) ? b0.aFo.aOo(a4W) : aQL() : 28 === id ? b0.y.aQJ(id) ? b0.aQM.aQT(a4W.tK, a4W.aQP, a4W.aQQ) : aQL() : 29 === id ? b0.y.aQJ(id) ? b0.aFo.aQU(a4W) : aQL() : 30 ===
			id && (b0.y.aQJ(id) ? b7.aCr() || aQV() : aQL())
	}, this.aQW = function() {
		15 === id ? aQK() : 16 === id ? b0.eW.eX(2) : 17 === id ? b0.eW.eX(3) : 18 === id ? t.u(8, this.aNd, new t2(16)) : 21 === id ? b0.aQM.aQN(a4W.tK, a4W.tL, a4W.tM) : 22 === id ? b0.aQM.aQO(a4W.tK, a4W.aQP, a4W.aQQ) : 23 === id ? b0.aQM.aQR(
			a4W.aPV, a4W.a1N) : 24 === id ? b0.aQM.aQS(a4W.aPV, a4W.tL, a4W.tM) : 25 === id ? b0.aFo.aOo(a4W) : 28 === id ? b0.aQM.aQT(a4W.tK, a4W.aQP, a4W.aQQ) : 29 === id ? b0.aFo.aQU(a4W) : 30 === id ? b7.aCr() || aQV() : 1e3 === id && (
			this.aQI = id = 25, b0.aFo.aOo(a4W))
	}, this.aCv = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aNd) : 17 === code ? (b0.y.close(0, 3252), bj.y.wI(0), bj.eN.data[117].v4 && 0 < bj.eN.data[117].v4.length ? (bu = bj.y.wJ(0), bj.sE.sF(105, bu.sz), bj.sE.sF(106, bu
			.password), t.u(8, this.aNd, new t2(16))) : (bj.sE.sF(105, ""), t.y.aCw())) : 21 === code ? t.u(10, this.aNd, new aQX(data)) : 23 === code ? t.u(13, this.aNd, new aPD({
			data: data,
			aPV: a4W.aPV
		})) : 25 === code ? (t.y.aNo.sz = a4W.sz, bj.vj.mh(a4W.sz), t.u(15, this.aNd)) : 30 === code && (data ? t.u(1) : aQV()))
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aQG.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(L(309), [new w("⬅️ " + L(40), function() {
		aQF ? t.u(29) : t.y.aCw()
	})]), aQG = new sG(aO7.vB, L(310))
}

function aNs() {
	var aP2, aP3, qh;

	function aQb() {
		var gT;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5A.a5F()), gT = bA.qu.a3G(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gT) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aP5() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aQd(), aD.data.canvas = null, t.u(5, 5)
	}

	function aQd() {
		b9.q6.dd(), bj.sE.sF(156, b9.a5Q.a0A())
	}

	function aQZ() {
		aD.data.isReplay = 0, aQd(), aD.a5A.a5b(), aa.aGr(), aD.a5A.a5Y(), aD.data.canvas = 2 === aD.data.mapType ? bS.xF : null, aD.a5E(), aD.a5C = 1
	}

	function aQp() {
		aQb();
		for (var g = [aQg(), aQh(), aQi()], aB = 3; aB < 6; aB++) t.removeChild(aP3.qi, aP3.qj[aB].qR), aP3.qj[aB] = g[aB - 3], aP3.qi.appendChild(aP3.qj[aB].qR);
		aP3.resize()
	}

	function aQg() {
		var aQq, aOR = new qP;
		return aOR.qS(L(306)), aQq = 0 === aD.data.gameMode ? [L(307), L(285)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aOR.qY(aQq), aOR.qd(new sH([new w(L(317), function() {
			t.u(21)
		}).button])), aOR
	}

	function aQh() {
		var aOR = new qP,
			g = (aOR.qS(L(65)), [L(284) + ": " + aE.kW[aD.data.botDifficultyValue], L(286), L(287), L(285)]);
		return aOR.qY(g[aD.data.botDifficultyType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(25)
		}).button])), aOR
	}

	function aQi() {
		var aOR = new qP,
			g = (aOR.qS("Spawning"), [L(307), L(319), L(285)]);
		return aOR.qY(g[aD.data.spawningType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(24)
		}).button])), aOR
	}
	this.show = function() {
		aP2.show(), this.resize(), aP2.vB.scrollTop = t.y.aIv[0]
	}, this.s3 = function() {
		t.y.aIv[0] = aP2.vB.scrollTop, aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5("🔧 " + L(314), [new w("⬅️ " + L(40), aP5), new w(L(315), aQZ)]), aQb(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.xF : 1 === aD.data.mapType ? aD.data.canvas = bS.aLY(bS.a5Z(aD.data), 0).xF : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aLY(bS.a5Z(aD.data), aD.data.mapSeed).xF)), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP,
			a3W = (aOR.qS(L(316)), aD.data.canvas);
		a3W.style.width = "100%", aOR.qd({
			e: a3W
		}), aOR.qd(new sH([new w(L(317), function() {
			t.u(20)
		}).button])), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR = new qP;
		aOR.qS(L(288)), aOR.qd(new ra({
			e9: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.i8(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qu.a3G(aD.data.teamPlayerCount, 0), aD.a5A.a5F(), bA.qu.a3G(aD.data.teamPlayerCount, 0) !== e) && aQp()
		})), qh.push(aOR)
	}(qh), function(qh) {
		var aOR = new qP;
		aOR.qS(L(318)), aOR.qa(new v0({
			v4: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e9) {
			aD.data.gameMode !== e9 && (aD.data.gameMode = e9, aQp())
		})), qh.push(aOR)
	}(qh), qh.push(aQg()), qh.push(aQh()), qh.push(aQi()), function(qh) {
		var aOR = new qP,
			g = (aOR.qS(L(320)), [L(321), L(322), L(285)]);
		aOR.qY(g[aD.data.playerNamesType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(23)
		}).button])), qh.push(aOR)
	}(qh), function(qh) {
		var aOR = new qP,
			g = (aOR.qS(L(281)), [L(283), L(284) + ": " + aD.data.aIncomeValue, L(285)]);
		aOR.qY(g[aD.data.aIncomeType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(22)
		}).button])), qh.push(aOR)
	}(qh), function(qh) {
		var aOR = new qP,
			g = (aOR.qS(L(323)), [L(283), L(284) + ": " + aD.data.tIncomeValue, L(285)]);
		aOR.qY(g[aD.data.tIncomeType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(26)
		}).button])), qh.push(aOR)
	}(qh), function(qh) {
		var aOR = new qP,
			g = (aOR.qS(L(324)), [L(283), L(284) + ": " + aD.data.iIncomeValue, L(285)]);
		aOR.qY(g[aD.data.iIncomeType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(27)
		}).button])), qh.push(aOR)
	}(qh), function(qh) {
		var aOR = new qP,
			g = (aOR.qS(L(325)), [L(283), L(284) + ": " + aD.data.sResourcesValue, L(285)]);
		aOR.qY(g[aD.data.sResourcesType]), aOR.qd(new sH([new w(L(317), function() {
			t.u(28)
		}).button])), qh.push(aOR)
	}(qh), function(qh) {
		var aOR = new qP;
		aOR.qS(L(326)), aOR.qd(new sH([new w(L(327), function() {
			t.x(), aD.a5A.a5c(), t.y.aIv[0] = 0, t.u(19)
		}).button])), aOR.qd(new sH([new w(L(328), function() {
			bm.aIk()
		}).button])), aOR.qd(new sH([new w(L(329), function() {
			return bm.aIm(), !0
		}).button])), qh.push(aOR)
	}(qh), qh))
}

function aO3() {
	var aP2, rf = !0;

	function rw(rv, a5g) {
		var qR = document.createElement("div"),
			aQs = document.createElement("span"),
			aQt = document.createElement("span");
		aQs.textContent = aW.aBk(a5g.eQ) + ":", aQs.style.color = bB.o9, aQs.style.paddingRight = "0.4em", aQs.style.display = "table-cell", aQs.style.width = "6ch", aQs.style.textAlign = "end", qR.appendChild(aQs), aQt.textContent = a5g.qT, qR
			.appendChild(aQt), qR.style.display = "table", a5g.pV && function(qR, pV) {
				{
					var aIW;
					pV >= 1024 - aj.s2.zT ? ((aIW = document.createElement("img")).src = aj.xI.zH[pV - 1024 + aj.s2.zT].toDataURL(), aIW.style.width = "1.5em", aIW.style.height = "1.5em", aIW.style.verticalAlign = "middle", qR.appendChild(aIW)) : ((
						aIW = document.createElement("span")).textContent = aj.s2.zi(pV), aIW.style.display = "inline-block", aIW.style.fontSize = "1.5em", aIW.style.lineHeight = "1em", aIW.style.verticalAlign = "middle", qR.appendChild(aIW))
				}
			}(qR, a5g.pV), rv.appendChild(qR)
	}

	function rz() {
		rf && (aP2.vB.scrollTop = aP2.vB.scrollHeight)
	}
	this.clear = function() {
		aP2.vB.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a6Z = bq.a5k(), f1 = a6Z.length, rv = document.createDocumentFragment(), aB = 0; aB < f1; aB++) rw(rv, a6Z[aB]);
		aP2.vB.appendChild(rv), rz(), aP2.show(), this.resize(), rf = !0, rz()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP2.vB.style.padding = "0.4em " + bA.qm.qv(bc.qs)
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, this.zA = function(a5g) {
		var rv = document.createDocumentFragment();
		rw(rv, a5g), aP2.vB.appendChild(rv), rz()
	}, (aP2 = new v5(L(330), [new w("⬅️ " + L(40), function() {
		t.aO5(1)
	})])).vB.style.overflowY = "auto", aP2.vB.addEventListener("scroll", function() {
		rf = aP2.vB.scrollTop >= aP2.vB.scrollHeight - aP2.vB.clientHeight - 2
	})
}

function aO0() {
	var aP2, aP3, aP4, qh;

	function aP5() {
		aP7(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		2 === aD.data.iIncomeType && bA.qu.a3M(aP4.vb(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(324), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), aOR.qa(new v0({
			v4: [L(283), L(284), L(285)],
			value: aD.data.iIncomeType
		}, function(e9) {
			aP7(), 2 !== e9 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ey), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e9, t.u(27)
		})), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR;
		1 === aD.data.iIncomeType && ((aOR = new qP).qS("Value"), aOR.qd(new ra({
			e9: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qh.push(aOR))
	}(qh), function(qh) {
		var aOR;
		2 === aD.data.iIncomeType && ((aOR = new qP).qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.iIncomeData, 4)), aOR.qd(aP4), qh.push(aOR))
	}(qh), qh))
}

function aNi() {
	var aQv, aQw, aQ2, rZ, aQx;
	this.aHP = new tA, aQ2 = new rN([.45, .27], [.5, .5], 2 / 3), aQw = [new w("⚔️<br>" + L(331), function() {
			aQy(0)
		}, bB.oN), new w("🗡️<br>" + L(314), function() {
			aQy(1)
		}, bB.og), new w("🔑<br>" + L(332), function() {
			aQy(2)
		}, bB.ox), new w("☰<br>" + L(333), function() {
			aQy(3)
		}, bB.o7), new w("", function() {
			t.u(12)
		}, bB.nq, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rZ = new ra(bj.eN.data[122]);
	for (var aB = 0; aB < aQw.length; aB++) aQw[aB].button.style.position = "absolute";

	function aQy(e9) {
		a0.a1.setState(10), ab.tT() || ab.aHG(), 0 === e9 ? t.y.a5T() : 1 === e9 ? (b9.aJ5.x0(bj.eN.data[156].value, 1) || aD.a5A.a5c(), t.u(19)) : 2 === e9 ? 0 !== a0.id || bj.eN.data[140].value ? t.u(8, t.t1, new t2(16)) : t.y.aQz(t.t1, 16) : 3 ===
			e9 && t.u(1)
	}
	rZ.e.style.position = "absolute", rZ.e.style.textAlign = "center", rZ.e.placeholder = L(334), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aHP.show(), aQw[4].r6(bA.color.a3d(bj.eN.data[121].value)), this.resize(), document.body.appendChild(rZ.e);
		for (var aB = 0; aB < aQw.length; aB++) document.body.appendChild(aQw[aB].button);
		1 !== a0.id || a0.dw < 5 || (aQx && bf.eQ > aQx + 144e5 ? a0.w3.setState(14) : aQx = bf.eQ)
	}, this.s3 = function() {
		this.aHP.s3(), t.removeChild(document.body, rZ.e);
		for (var aB = 0; aB < aQw.length; aB++) t.removeChild(document.body, aQw[aB].button)
	}, this.resize = function() {
		this.aHP.resize(), this.aHP.resize(), aQ2.resize();
		var gap = .5 * bc.gap,
			ty = 10 / 99 * .84 * aQ2.i,
			aR2 = .16 * aQ2.j,
			a9j = .19 * aQ2.i,
			f8 = aQ2.f8 + a9j,
			ty = aQ2.fA + ty + 3 * gap,
			i = .5 * (aQ2.i - gap) - a9j,
			a9j = aQ2.i - 2 * a9j - aR2 - gap,
			a9j = (bA.qm.tR(rZ.e, f8, ty, a9j, aR2), bA.qm.tR(aQw[4].button, f8 + a9j + gap, ty, aR2, aR2), .5 * (aQ2.fA + aQ2.j - (ty += aR2 + gap) - gap));
		bA.qm.tR(aQw[0].button, f8, ty, i, a9j), bA.qm.tR(aQw[1].button, f8 + i + gap, ty, i, a9j), bA.qm.tR(aQw[2].button, f8, ty + a9j + gap, i, a9j), bA.qm.tR(aQw[3].button, f8 + i + gap, ty + a9j + gap, i, a9j);
		bA.qm.tR(aQw[5].button, f8, ty + a9j * 2 + gap * 2, i * 2 + gap, a9j / 3);
		bA.qm.tR(aQw[6].button, f8, ty + a9j * 2.33 + gap * 3, i * 2 + gap, a9j / 3);
		for (var aB = 0; aB < aQw.length; aB++) aQw[aB].button.style.font = bA.qm.sb(0, bA.qm.uk(.065 * aQ2.j)), bA.qm.qw(aQw[aB].button, 5);
		rZ.e.style.font = bA.qm.sb(0, bA.qm.uk(.08 * aQ2.j)), bA.qm.qw(rZ.e, 5)
	}, this.vK = function() {
		if (aa.aGv(), aT.vK(), f1 = Math.floor((a0.a1.i9() ? .018 : .0137) * h.iA), vL.font = bA.qm.sb(0, Math.max(5, f1)), bA.qm.textBaseline(vL, 0), bA.qm.textAlign(vL, 2), vL.fillStyle = bB.nu, vL.fillText(l.dw, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vL.measureText(text).width, f1 = Math.max(5, f1), vL.textAlign = "left", vL.textBaseline = "middle", vL.fillText(text, vL.canvas.width - textLength - f1 / 2, 2 * f1), aO.vK(), bY.vK(), ab.tT()) {
			vL.imageSmoothingEnabled = !1;
			var text = ab.aGy("territorial.io"),
				textLength = .84 * aQ2.i / text.width;
			vL.setTransform(textLength, 0, 0, textLength, aQ2.f8 + .08 * aQ2.i, aQ2.fA), aQv = aQv || bA.a2x.a4U(text, bA.a2x.a4a, [0, 0, 0]);
			for (var f8 = -1; f8 <= 1; f8 += 2)
				for (var fA = -1; fA <= 1; fA += 2) vL.drawImage(aQv, f8, fA);
			vL.drawImage(text, 0, 0), vL.imageSmoothingEnabled = !0;
			var f1 = ab.aGy("logo"),
				aR5 = .6666 * textLength * text.height / f1.height,
				nX = .5 * h.i,
				nY = aQ2.fA + .5 * textLength * text.height - .5 * aR5 * f1.height;
			vL.setTransform(aR5, 0, 0, aR5, nX - .6 * textLength * text.width, nY), vL.drawImage(f1, 0, 0), vL.setTransform(aR5, 0, 0, aR5, nX + .6 * textLength * text.width - aR5 * f1.width, nY), vL.drawImage(f1, 0, 0), vL.setTransform(1, 0, 0,
				1, 0, 0), vL.imageSmoothingEnabled = !0
		}
	}
}

function aNp() {
	var aO7, aR6, aR7, v6;

	function aR8(aB) {
		t.u(8, t.t1, new t2(21, {
			tK: aB,
			tL: 0,
			tM: 10
		}))
	}
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aR6.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aR7 = [new w(L(335), function() {
		aR8(1)
	}, 0, 0, 1), new w(L(336), function() {
		aR8(2)
	}, 0, 0, 1), new w(L(337), function() {
		aR8(3)
	}, 0, 0, 1), new w(L(338), function() {
		aR8(0)
	}, 0, 0, 1), new w(L(339), function() {
		aR8(9)
	}, 0, 0, 1), new w(L(340), function() {
		aR8(10)
	}, 0, 0, 1), new w(L(341), function() {
		aR8(11)
	}, 0, 0, 1)], v6 = [new w("⬅️ " + L(40), function() {
		t.a1s()
	})], aO7 = new v5(L(342), v6), aR6 = new rK(aR7, aO7.vB)
}

function aDK(title, qZ, aR9) {
	var aO7, aQG;
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aQG.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aR9 = aR9 || [new w("⬅️ " + L(40), function() {
		t.a1s()
	}, bB.oZ)], aO7 = new v5(title, aR9), aQG = new sG(aO7.vB, qZ), bA.qm.textAlign(aO7.vB.style, 1)
}

function aQX(data) {
	var aO7, aRA, eZ, sr;

	function aRB(ja) {
		var f1 = data.data.length;
		if (f1) {
			for (var tL, max = min = parseInt(data.data[0][0]), aB = 1; aB < f1; aB++) var aFJ = parseInt(data.data[aB][0]),
				min = Math.min(aFJ, min),
				max = Math.max(aFJ, max);
			tL = ja < 0 ? min + ja : max + 1, t.u(8, t.a5i().aNd, new t2(21, {
				tK: data.tK,
				tL: tL,
				tM: tL + Math.abs(ja)
			}))
		}
	}
	this.show = function() {
			aO7.show(), this.resize()
		}, this.s3 = function() {
			aO7.s3()
		}, this.resize = function() {
			aO7.resize(), aRA.resize()
		}, this.a2k = function(eZ) {
			2 === eZ && aO7.vC[0].r3()
		}, eZ = data.data.length ? 0 : 1, eZ = [new w("⬅️ " + L(40), function() {
			t.a1s()
		}), new w(L(343), function() {
			aRB(-10)
		}, eZ, 0, 1), new w(L(344), function() {
			aRB(10)
		}, eZ, 0, 1), new w(L(290), function() {
			t.u(11, 10, new aRC({
				tK: data.tK
			}))
		})], sr = [L(345), L(346), L(347), L(348), L(349), L(350), L(351), L(352), L(353), L(354), L(340), L(341), "Audit Log"], aO7 = new v5(sr[data.tK], eZ),
		function() {
			var aB, f4 = {
					sl: []
				},
				sl = f4.sl,
				aRE = data.data,
				f1 = aRE.length;
			f1 && 0 === aRE[0][0] && 0 <= (e9 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tK]) && (t.y.tN[e9] = aRE[0][1]);
			var nW = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tK],
				a4g = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tK],
				e9 = [
					[L(355), L(356) + " ↗", L(357)],
					[L(355), L(358), L(359), L(360) + " ↗"],
					[L(355), L(356) + " ↗", L(359)],
					[L(355), L(356) + " ↗", L(359)],
					[L(361), L(362), L(363) + " ↗", L(364) + " ↗", L(118)],
					[L(361), L(362), L(365) + " ↗", L(366) + " ↗", L(367)],
					[L(361), L(362), L(368) + " ↗", L(369) + " ↗", L(370)],
					[L(361), L(362), L(365) + " ↗", L(366) + " ↗", L(371)],
					[L(361), L(362), L(363) + " ↗", L(364) + " ↗", L(118)],
					[L(355), L(356) + " ↗", L(359)],
					[L(355), L(356) + " ↗", L(372)],
					[L(355), L(356) + " ↗", L(359)],
					[L(361), L(362), L(363) + " ↗", L(364) + " ↗", L(373)]
				];
			if (f4.sr = e9[data.tK], f4.sw = [
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
				][data.tK], 0 === data.tK || 2 === data.tK || 3 === data.tK || 9 === data.tK || 10 === data.tK || 11 === data.tK)
				for (aB = 0; aB < f1; aB++) sl.push([{
					fS: aRE[aB][0] + 1 + ".",
					dt: 0
				}, {
					fS: aRE[aB][1],
					dt: 1,
					sz: aRE[aB][4],
					t0: aRE[aB][3]
				}, {
					fS: (nW * aRE[aB][2]).toFixed(a4g),
					dt: 0
				}]);
			else if (12 === data.tK)
				for (aB = 0; aB < f1; aB++) {
					var aRH = aRE[aB][3];
					sl.push([{
						fS: "" + aRE[aB][0],
						dt: 0
					}, {
						fS: "" + aRE[aB][4],
						dt: 0
					}, {
						fS: aRE[aB][5],
						dt: 1,
						sz: aRE[aB][1],
						t0: 0
					}, {
						fS: aRE[aB][6],
						dt: 1,
						sz: aRE[aB][2],
						t0: 0
					}, {
						fS: bo.eF(aRH),
						dt: 0
					}])
				} else if (1 === data.tK)
					for (aB = 0; aB < f1; aB++) sl.push([{
						fS: aRE[aB][0] + 1 + ".",
						dt: 0
					}, {
						fS: aRE[aB][1],
						dt: 0
					}, {
						fS: (nW * aRE[aB][2]).toFixed(a4g),
						dt: 0
					}, {
						fS: aRE[aB][3],
						dt: 1,
						sz: aRE[aB][5],
						t0: aRE[aB][4]
					}]);
				else if (4 === data.tK || 5 === data.tK || 6 === data.tK || 7 === data.tK || 8 === data.tK)
				for (aB = 0; aB < f1; aB++) {
					var aRI = aRE[aB][5];
					4 === data.tK || 8 === data.tK ? "100%" === (aRI = (aRI % 64 * 100 / (aRI >> 6)).toFixed(0) + "%") && (4 === data.tK ? aRI += " (" + L(374) + ")" : aRI += " (" + L(375) + ")") : 5 === data.tK ? 32768 <= aRI && (aRI = -(aRI -
						32768)) : aRI = (nW * aRI).toFixed(a4g), sl.push([{
						fS: "" + aRE[aB][0],
						dt: 0
					}, {
						fS: "" + aRE[aB][6],
						dt: 0
					}, {
						fS: aRE[aB][7],
						dt: 1,
						sz: aRE[aB][1],
						t0: aRE[aB][2]
					}, {
						fS: aRE[aB][8],
						dt: 1,
						sz: aRE[aB][3],
						t0: aRE[aB][4]
					}, {
						fS: "" + aRI,
						dt: 0
					}])
				}
			aRA = new sk(aO7.vB, f4)
		}()
}

function aRC(a4W) {
	var aO7, aO8, qh;
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aO8.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(L(376), [new w("⬅️ " + L(40), function() {
		t.aO5(10)
	})]), aO8 = new qf(aO7.vB, ((qh = []).push(function() {
		var aOY, aOR = new qP,
			aQ0 = new ra(bj.eN.data[132], 1, function() {
				aOY.button.click()
			}),
			aQ1 = new ra(bj.eN.data[131], 1, function() {
				aQ0.e.focus()
			});
		aOR.qS(L(295)), aOR.qd(aQ1), aQ1.e.style.marginBottom = "0.8em", aOR.qS(L(296)), aOR.qd(aQ0);
		return aOY = new w(L(294), function() {
			tL = Math.floor(aQ1.e.value), tM = Math.floor(aQ0.e.value);
			var tM, tL = {
				a3E: Math.min(tL, tM),
				aNE: Math.max(tL, tM)
			};
			t.u(8, t.a5j(10).aNd, new t2(21, {
				tK: a4W.tK,
				tL: tL.a3E,
				tM: tL.aNE
			}))
		}, 0, 0, 1), aOR.qd(new sH([aOY.button])), aOR
	}()), qh.push(function() {
		var aOY, aOR = new qP,
			aQ0 = new ra(bj.eN.data[134], 1, function() {
				aOY.button.click()
			}),
			aQ1 = new ra(bj.eN.data[133], 0, function() {
				aQ0.e.focus()
			});
		return aOR.qS(1 === a4W.tK ? L(377) : L(378)), aOR.qd(aQ1), aQ1.e.style.marginBottom = "0.8em", aOR.qS(L(379)), aOR.qd(aQ0), aOY = new w(L(294), function() {
			var aQP = aQ1.e.value.slice(0, 20),
				aQQ = Math.abs(Math.floor(aQ0.e.value));
			t.u(8, t.a5j(10).aNd, new t2(22, {
				tK: a4W.tK,
				aQP: aQP,
				aQQ: aQQ
			}))
		}, 0, 0, 1), aOR.qd(new sH([aOY.button])), aOR
	}()), qh.push(function() {
		var aOY, aOR = new qP,
			aQ0 = new ra(bj.eN.data[152], 1, function() {
				aOY.button.click()
			}),
			aQ1 = new ra(bj.eN.data[151], 0, function() {
				aQ0.e.focus()
			});
		return aOR.qS(L(380)), aOR.qd(aQ1), aQ1.e.style.marginBottom = "0.8em", aOR.qS(L(379)), aOR.qd(aQ0), aOY = new w(L(294), function() {
			var aQP = aQ1.e.value.slice(0, 5),
				aQQ = Math.abs(Math.floor(aQ0.e.value));
			t.u(8, t.a5j(10).aNd, new t2(28, {
				tK: a4W.tK,
				aQP: aQP,
				aQQ: aQQ
			}))
		}, 0, 0, 1), aOR.qd(new sH([aOY.button])), aOR
	}()), qh))
}

function aO2() {
	var aRM, tX, aRP, tW, tZ, aRN = [new Array(4), [], new Array(2), new Array(2)],
		aRO = new Array(4),
		aRQ = new Array(2),
		aRR = [L(64), L(339), L(381), L(382)];

	function aF5() {
		var a7Z;
		!bn.a1q || (a7Z = aRM.tk.rZ.e.value.trim().slice(0, 127)).length < 1 || (aRM.tk.rZ.e.value = "", bn.aDN.a0m(a7Z))
	}

	function aRU(aRW) {
		bn.y.rq[3] = 1 - bn.y.rq[3], aRV(3, 1, bn.y.rq[3]), aRW && b0.aFG.aFH(4), bn.y.rq[3] && bj.sE.sF(158, bn.y.rq[0])
	}

	function aRS(fK, fL) {
		bn.y.rq[fK] !== fL && (0 === fK && bn.y.rq[3] && aRU(0), aRV(fK, bn.y.rq[fK], 0), aRV(fK, fL, 1), bn.y.rq[fK] = fL, 0 === fK ? (b0.aFG.aFH(2, fL), bn.y.rq[2] ? (aRM.tl.mh(), aRM.tk.rn(1)) : aRM.tk.rn(0), t.a5i().aEu(), t.a5i().aEt()) : 2 ===
			fK && (0 === fL ? (b0.aFG.aFH(0), aRM.tk.mh(), aRM.tt()) : (b0.aFG.aFH(1), aRM.tl.mh(), aRM.tu())))
	}

	function aRV(fK, fL, color) {
		aRM.tn[fK].rL[fL].r6(color ? bB.oJ : bB.p7)
	}

	function aRZ(aE9) {
		return aE9 < 7 ? aE9 + 2 + " " + L(388) : 7 === aE9 || 10 === aE9 ? L(339) + " (Full-Sending: " + L(7 === aE9 ? 389 : 390) + ")" : 8 === aE9 ? "1v1" : L(391)
	}

	function aRa(fS) {
		var a7c = bL.du(fS, 60),
			fS = fS % 60;
		return (a7c < 10 ? "0" : "") + a7c + ":" + (fS < 10 ? "0" : "") + fS
	}
	this.aFR = function() {
		return aRM.tk
	}, this.aDN = function(sz) {
		aRS(2, 0);
		var qT = aRM.tk.rZ.e.value,
			sz = "@" + sz + " ";
		qT.length && !bA.rl.a40(qT, " ") && (sz = " " + sz), aRM.tk.rZ.e.value = qT += sz, aRM.tk.rZ.e.focus()
	}, this.aEs = function() {
		aRM.tl.mh()
	}, this.aEu = function() {
		var aRY = bn.y.rq[0],
			aRY = bn.y.rs[aRY];
		bS.a7(aRY.eh, aRY.mapSeed), tX.rL[0].button.textContent = L(316) + ": " + bS.x5.x6[aRY.eh].name, tX.rL[1].button.textContent = L(318, 0, "Mode") + ": " + aRZ(aRY.aE9), tX.rL[2].button.textContent = L(385) + ": " + bS.x5.x6[aRY.aFs].name,
			tX.rL[3].button.textContent = L(386, 0, "Next Mode") + ": " + aRZ(aRY.aFt), tX.rL[4].button.textContent = L(387) + ": " + aRa(aRY.aEw), tX.resize()
	}, this.aEt = function() {
		var aRY = bn.y.rq[0],
			rr = bn.y.rs[aRY];
		aRM.tr(rr.ts);
		for (var aB = 0; aB < bn.u7.u8.length; aB++) aRN[0][aB].rk.textContent = "" + bn.u7.u8[aB].length;
		var u7 = bn.u7.u8[aRY],
			aRb = u7.length,
			aRc = bn.u7.u9[aRY];
		aRN[2][1].rk.textContent = "" + aRb, aRN[3][1].rk.textContent = "" + aRc, tX.rL[4].button.textContent = L(387) + ": " + aRa(rr.aEw);
		for (aB = 0; aB < 4; aB++) {
			var aRd = bn.y.rs[aB];
			aRO[aB] ? 0 === aRd.ts && (aRO[aB].rk.textContent = bS.x5.x6[aRd.eh].name) : aRO[aB] = new rj(bS.x5.x6[aRd.eh].name, tW.rL[aB].button, 1, 1), bA.rl.startsWith(aRR[aB], "🏆 ") ? aRd.aEF || (aRR[aB] = aRR[aB].substring(3), tW.rL[aB]
				.button.textContent = aRR[aB], tW.rL[aB].button.appendChild(aRN[0][aB].rk), tW.rL[aB].button.appendChild(aRO[aB].rk)) : aRd.aEF && (aRR[aB] = "🏆 " + aRR[aB], tW.rL[aB].button.textContent = aRR[aB], tW.rL[aB].button
				.appendChild(aRN[0][aB].rk), tW.rL[aB].button.appendChild(aRO[aB].rk))
		}
		var rr = "",
			aRf = "";
		0 === aRY && (rr = bn.lA.aET(u7, 0, aRb), aRf = bn.lA.aET(u7, 0, aRc)), aRP[0].rk.textContent = rr, aRP[1].rk.textContent = aRf, aRQ[1].rk.textContent = "MP: " + bn.y.aEm[0] + "   SP: " + bn.y.aEm[1] + "   Lobby: " + bA.qu.a3R(bn.u7.u8)
	}, this.aEy = function() {
		aRM.tk.mh()
	}, this.show = function() {
		aRM.show(), this.resize(), bn.message.show()
	}, this.s3 = function() {
		aRM.s3(), bn.uU.s3(), bn.u5.s3(), bn.message.s3()
	}, this.resize = function() {
		aRM.resize(1 - bn.y.rq[2]), bn.message.resize()
	}, this.a2k = function(eZ) {
		2 === eZ ? bn.y.rq[3] ? aRU(1) : aRM.tn[3].rL[0].r3() : eZ < 2 && aRU(1)
	}, tW = new sK([new w(aRR[0], function() {
		return aRS(0, 0), 2
	}), new w(aRR[1], function() {
		return aRS(0, 1), 2
	}), new w(aRR[2], function() {
		return aRS(0, 2), 2
	}), new w(aRR[3], function() {
		return aRS(0, 3), 2
	})], bB.p7), tX = new sK([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.p8, 1);
	var aRT = new sK([new w(L(383), function() {
		return aRS(2, 0), 2
	}), new w(L(114), function() {
		return aRS(2, 1), 2
	})], bB.p7);
	tZ = new sK([new w(L(25, 0, 0, 1), function() {
		t.x(), bn.uO(), b0.y.a22(3240), t.u(5, 5)
	}), new w(L(384), function() {
		return aRU(1), 2
	})], bB.p7), aRM = new tV(tW, tX, aRT, tZ, aF5, bn.uU.aFb);
	for (var aB = 0; aB < 4; aB++) aRN[0][aB] = new rj("0", tW.rL[aB].button);
	aRN[2][1] = new rj("0", aRT.rL[1].button), aRN[3][1] = new rj("0", tZ.rL[1].button), aRP = [new rj("", aRT.rL[1].button, 1, 1), new rj("", tZ.rL[1].button, 1, 1)], aRV(0, bn.y.rq[0], 1), aRV(2, bn.y.rq[2], 1), (aRQ = [new rj(L(288), aRM.tv(), 1,
		0), new rj("", aRM.tv(), 1, 1)])[0].rk.style.fontSize = "0.4em", aRQ[1].rk.style.fontSize = "0.4em"
}

function aNj() {
	var aO7, aO8, qh;
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aO8.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(L(392), [new w("⬅️ " + L(40), function() {
		t.u(7, t.a5j(7).aNd)
	}), new w(L(203), function() {
		bj.sE.sF(105, bG.t4.wp(aO8.qj[0].qQ[0].e.value, 5)), bj.sE.sF(106, bG.t4.wp(aO8.qj[1].qQ[0].e.value, 8)), t.u(8, t.a5j(7).aNd, new t2(18))
	})]), aO8 = new qf(aO7.vB, ((qh = []).push(function() {
		var aOR = new qP;
		return aOR.qS(L(181)), aOR.qd(new ra({
			value: "",
			e9: -1
		})), aOR
	}()), qh.push(function() {
		var aOR = new qP,
			aOa = (aOR.qS(L(183)), new ra({
				value: "",
				e9: -1
			}));
		return aOa.e.type = "password", aOR.qd(aOa), aOR.qd(new sH([new w(L(184), function(e) {
			return e.textContent === L(184) ? (e.textContent = L(185), aOa.e.type = "text") : (e.textContent = L(184), aOa.e.type = "password"), !0
		}).button])), aOR
	}()), qh.push(function() {
		var aOR = new qP;
		return aOR.qS(L(187)), aOR.qU(L(393)), aOR.qU(L(394)), aOR.qU(L(395)), aOR
	}()), qh))
}

function aNq() {
	var aO7, aR6, aR7, v6;

	function aR8(aB) {
		t.u(8, t.t1, new t2(21, {
			tK: aB,
			tL: 0,
			tM: 10
		}))
	}
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aR6.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aR7 = [new w(L(350), function() {
		aR8(5)
	}, 0, 0, 1), new w(L(351), function() {
		aR8(6)
	}, 0, 0, 1), new w(L(352), function() {
		aR8(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aR8(12)
	}, 0, 0, 1)], v6 = [new w("⬅️ " + L(40), function() {
		t.a1s()
	})], aO7 = new v5(L(396), v6), aR6 = new rK(aR7, aO7.vB)
}

function aNZ() {
	this.eN = {}, this.tN = new Array(7), this.aNo = null, this.aNl = null, this.si = 0, this.aIv = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5T = function() {
		t.x(), aZ.dd()
	}, this.aCw = function() {
		t.u(0 === aa.a1t() ? 5 : 0)
	}, this.aPz = function() {
		if (1 === bj.eN.data[130].value) t.u(8, t.a5i().aNd, new t2(24, {
			aPV: bj.eN.data[125].value,
			tL: bj.eN.data[128].value,
			tM: bj.eN.data[129].value
		}));
		else {
			for (var g = (g = bj.eN.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5i().aNd, new t2(23, {
				aPV: bj.eN.data[125].value,
				a1N: g
			}))
		}
	}, this.aQz = function(aNd, target) {
		t.u(4, aNd, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aRi +
			"' target='_blank'>" + bK.aRi + "</a>", !1, [new w("⬅️ " + L(40), function() {
				t.u(aNd)
			}), new w("✅ Accept", function() {
				bj.sE.sF(140, 1), 0 === target ? t.u(2, aNd) : t.u(8, aNd, new t2(target))
			})]))
	}, this.aRj = function() {
		for (var aB = 0; aB < 7; aB++) this.tN[aB] = bG.wg.wk(bH.pu(5));
		this.tN[1] = "[" + this.tN[1] + "]", 5 === t.t1 && (t.a5i().aHP.sF(this.tN), t.a5i().resize())
	}, this.aOZ = function(fS, pG, a7F) {
		fS = bA.gM.a4T(fS, 1, 1e6);
		var aRk = Math.max(1, 1 + Math.floor(.01 * (fS - 100))),
			pG = L(397, [pG]);
		return (pG += "<br>") + L(398, [a7F]) + "<br>" + L(399, [aRk < 20 ? fS + aRk + "–" + (fS + 20) : fS + aRk]) + "<br>" + L(400, [fS])
	}
}

function aNt() {
	var aP2, aP3, aRl, qh;

	function aP5() {
		b6.uO(), t.aO6()[19] = null, t.a1s()
	}

	function aRs() {
		aRv(), aRt()
	}

	function aRv() {
		aRl.qR.lastChild && t.removeChild(aRl.qR, aRl.qR.lastChild)
	}

	function aRt() {
		var aRw = bS.a5Z(aD.data);
		aD.data.canvas = bS.aLY(aRw, aD.data.mapSeed).xF, aRu()
	}

	function aRu() {
		var a3W = aD.data.canvas;
		a3W.style.width = "100%", aRl.qR.appendChild(a3W)
	}
	this.aIV = function(a3W) {
		aD.data.canvas && aRv(), aD.data.canvas = a3W, aRu()
	}, this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(316), [new w("⬅️ " + L(40), aP5)]), 2 === aD.data.mapType && b6.dd(), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), aOR.qa(new v0({
			v4: [L(401), L(402), L(403)],
			value: aD.data.mapType
		}, function(e9) {
			2 === (aD.data.mapType = e9) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uO()), t.u(20)
		})), 2 <= aD.data.mapType && (aOR.qd(new sR), aOR.qd(new sB({
			value: aD.data.passableWater
		}, L(404), function(value) {
			aD.data.passableWater = value
		})), aOR.qd(new sB({
			value: aD.data.passableMountains
		}, L(405), function(value) {
			aD.data.passableMountains = value
		})));
		qh.push(aOR)
	}(qh = []), function(qh) {
		if (0 === aD.data.mapType) {
			for (var aOR = new qP, v4 = (aOR.qS(L(316)), []), aB = 0; aB < bS.x5.aMU.length; aB++) v4.push(bS.x5.x6[bS.x5.aMU[aB]].name);
			aOR.qa(new v0({
				v4: v4,
				value: aD.data.mapProceduralIndex
			}, function(e9) {
				aD.data.mapProceduralIndex = e9, aRs()
			})), qh.push(aOR)
		}
	}(qh), function(qh) {
		if (1 === aD.data.mapType) {
			for (var aOR = new qP, v4 = (aOR.qS(L(316)), []), aB = 0; aB < bS.x5.aMV.length; aB++) v4.push(bS.x5.x6[bS.x5.aMV[aB]].name);
			aOR.qa(new v0({
				v4: v4,
				value: aD.data.mapRealisticIndex
			}, function(e9) {
				aD.data.mapRealisticIndex = e9, aRs()
			})), qh.push(aOR)
		}
	}(qh), function(qh) {
		var aOR;
		2 === aD.data.mapType && ((aOR = new qP).qS(L(406)), aOR.qd(new ra(bj.eN.data[162], 1)), aOR.qS(L(407), "0.8em"), aOR.qd(new sH([new w(L(408), function() {
			return b6.aIO(), !0
		}).button])), qh.push(aOR))
	}(qh), function(qh) {
		var aOR, rZ;
		2 === aD.data.mapType && ((aOR = new qP).qS(L(409)), rZ = new ra({
			e9: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aOR.qd(rZ), qh.push(aOR))
	}(qh), function(qh) {
		var aOR, rZ, aOY;
		0 === aD.data.mapType && ((aOR = new qP).qS("Seed"), rZ = new ra({
			e9: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aRs())
		}), aOY = new w(L(307), function(e) {
			var aLT = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aLT) return rZ.e.value = aD.data.mapSeed = aLT, aRs(), !0
		}), aOR.qd(rZ), aOR.qd(new sH([aOY.button])), qh.push(aOR))
	}(qh), function(qh) {
		(aRl = new qP).qS(L(410)), 2 !== aD.data.mapType ? aRt() : aD.data.canvas && aRu();
		qh.push(aRl)
	}(qh), qh))
}

function v(title, qZ, aRx, aR9) {
	var aO7, aQG;
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aQG.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aR9 = aR9 || [new w("⬅️ " + L(40), function() {
		t.a1s()
	})], aO7 = new v5(title, aR9), aQG = new sG(aO7.vB, qZ), aRx && bA.qm.textAlign(aO7.vB.style, 1)
}

function aNw() {
	var aP2, aP3, aP4, qh;

	function aP5() {
		aP7(), 2 === aD.data.playerNamesType && 1 === bA.qu.a3A(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		2 === aD.data.playerNamesType && bA.qu.a3O(aP4.vb(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(320), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), aOR.qa(new v0({
			v4: [L(321), L(322), L(285)],
			value: aD.data.playerNamesType
		}, function(e9) {
			aP7(), aD.data.playerNamesType = e9, t.u(23)
		})), aOR.qd(new sR), aOR.qd(new sB({
			value: aD.data.selectableName
		}, L(411), function(value) {
			aD.data.selectableName = value
		})), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR;
		2 === aD.data.playerNamesType && ((aOR = new qP).qS("Data"), aP4 = new vT(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ey || (aD.data.playerNamesData = new Array(aD.ey), aD.data.playerNamesData
			.fill("")), aP4.va(bA.rl.a4t(aD.data.playerNamesData, 1, '"')), aOR.qd(aP4), qh.push(aOR))
	}(qh), qh))
}

function aO4() {
	var aP2, aP3, qh;

	function aS3() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bj.eN.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fK = 0; fK < 3; fK++) fK < g.length && (colors[aB][fK] = Number(g[fK]))
		}
		return colors
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(412), [new w("⬅️ " + L(40), function() {
		t.a1s()
	})]), aP3 = new qf(aP2.vB, ((qh = []).push(function() {
		var aOR = new qP;
		return aOR.qS(L(413)), aOR.qY("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em"), aOR
	}()), qh.push(function() {
		var aOR = new qP,
			eb = (aOR.qS(L(414)), bj.eN.data[174].value),
			qV = aOR.qU(eb.length + " / 180"),
			aOk = (qV.style.textAlign = "center", new vT(0, 1, function(e) {
				var e = e.target.value,
					gT = e.length;
				qV.textContent = gT + " / 180", gT <= 180 && bj.sE.sF(174, e)
			}));
		return aOk.e.rows = 6, aOk.e.style.fontSize = "1em", aOk.va(eb), aOR.qd(aOk), aOR
	}()), qh.push(function() {
		var aOR = new qP;
		aOR.qS(L(306));
		for (var aB = 0; aB < 11; aB++) {
			var iJ = aOR.qd(new ra(bj.eN.data[163 + aB]));
			aB && (iJ.e.style.marginTop = "0.6em")
		}
		return aOR.qd(new sH([new w(L(415), function() {
			for (var data = bj.eN.data, aB = 163; aB < 174; aB++) data[aB] && bj.eN.vp(aB, data[aB].vs);
			t.a1s(), t.aO6()[31] = null, t.u(31)
		}).button])), aOR
	}()), qh.push(function() {
		var aOR = new qP;
		return aOR.qS("Targeting"), aOR.qY(L(416)), aOR.qd(new ra(bj.eN.data[175], 0, 0)), aOR
	}()), qh.push(function() {
		var aOR = new qP;
		return aOR.qS(L(410)), aOR.qd(new sH([new w(L(184), function() {
			(new ea).show(bj.eN.data[174].value, aS3(), -1)
		}).button])), aOR
	}()), qh.push(function() {
		var aOR = new qP,
			aS4 = (aOR.qS(L(417)), aOR.qY(L(418)), new ra(bj.eN.data[176], 1, 0)),
			aS5 = (aOR.qd(aS4), new w(L(419), function(e) {
				return aS6.button.textContent === L(180) && b0.y.eV(0) && (bA.qm.ux(e), aOX(), b0.aFo.aS7(bj.eN.data[176].value, aS3(), bj.eN.data[175].value, bj.eN.data[174].value)), !0
			}, 1)),
			aOX = function() {
				aS6.button.textContent = L(179), aS5.r6(1), aS5.button.style.color = bB.nu
			},
			aS6 = new w(L(179), function(e) {
				return e.textContent === L(179) ? (e.textContent = L(180), aS5.r6(0), aS5.button.style.color = bB.os) : aOX(), !0
			});
		return aOR.qd(new sH([aS6.button, aS5.button])), aOR
	}()), qh))
}

function aNh() {
	var aP2, vY;

	function aS8() {
		t.x();
		var qT = b9.aSC(vY.vb());
		(aD.a0i && 0 < qT.length && qT === b9.q6.a5P || b9.aJ5.x0(qT)) && b9.aSD()
	}
	this.show = function(aS9) {
		this.aSA(aS9), aP2.show(), this.resize()
	}, this.aSA = function(aS9) {
		0 === aD.a0i ? aS9 ? vY.va(aS9) : aD.a5D.length && vY.va(aD.a5D) : (aD.h9 || (b9.q6.a5P = b9.a5Q.a0A()), vY.va(b9.aSB(b9.q6.a5P)))
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), vY.resize()
	}, this.a2k = function(eZ) {
		2 === eZ ? aP2.vC[0].r3() : aS8()
	}, aP2 = new v5(L(420), [new w("⬅️ " + L(40), function() {
		t.aO5(1)
	}), new w(L(421), function() {
		vY.vc()
	}), new w(L(422), function() {
		vY.vd()
	}), new w(L(423), function() {
		vY.clear()
	}), new w(L(424), function() {
		aS8()
	})]), vY = new vT(L(425)), aP2.vB.appendChild(vY.e)
}

function aNg() {
	var aO7, aO8, qh, aOR;

	function aSE() {
		b7.aCi !== bj.eN.data[12].value ? (b7.dd(), t.u(8, 1, new t2(30))) : t.u(1)
	}
	this.show = function() {
			aO7.show(), this.resize()
		}, this.s3 = function() {
			aO7.s3()
		}, this.resize = function() {
			aO7.resize(), aO8.resize()
		}, this.a2k = function(eZ) {
			2 === eZ && aO7.vC[0].r3()
		}, aO7 = new v5(L(426), [new w("⬅️ " + L(40), aSE), new w(L(427), function() {
			t.x(), bj.sE.wN(), t.u(2)
		})]), qh = [], (aOR = new qP).qS(L(428)), aOR.qU(L(429)), qh.push(aOR),
		function(qh) {
			var aOR = new qP,
				g = (aOR.qS(L(416)), b7.data.aD0());
			aOR.qa(new v0({
				v4: g,
				value: b7.data.aD4(g)
			}, function(e9) {
				return bj.sE.sF(12, g[e9].split(":")[0]), !0
			})), qh.push(aOR)
		}(qh),
		function(qh) {
			var aOR = new qP,
				aSH = (aOR.qS(L(448)), []);
			aOR.qd(new sH([new w(L(415), function(e) {
				bX.aSI();
				for (var aB = 0; aB < aSH.length; aB++) aSH[aB].e.value = bX.aCG[aB];
				return bA.qm.ux(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aSJ.length; aB++) {
				aOR.qU(bX.aSJ[aB]);
				for (var fK = 0; fK < 2; fK++) {
					var e9 = 2 * aB + fK,
						rZ = new ra({
							value: bX.aCG[e9],
							e9: -1
						});
					rZ.e.aSK = e9, aSH.push(rZ), rZ.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aSL(e.target.aSK, code)
					}), fK && (rZ.e.style.marginLeft = "4%"), rZ.e.style.width = "48%", aOR.qd(rZ)
				}
			}
			qh.push(aOR)
		}(qh), (aOR = new qP).qS(L(23)), aOR.qa(new v0({
			v4: ["1", "2"],
			value: aZ.aGc - 1
		}, function(aB) {
			aZ.aGc = aB + 1
		})), qh.push(aOR), (aOR = new qP).qS(L(430)), bj.eN.data[1].v4 = [L(431), L(432), L(433), L(434)], aOR.qa(new v0(bj.eN.data[1])), qh.push(aOR), (aOR = new qP).qS(L(435)), bj.eN.data[9].v4 = [L(432), L(436), L(437)], aOR.qa(new v0(bj.eN.data[
			9])), qh.push(aOR), (aOR = new qP).qS(L(438)), bj.eN.data[11].v4 = [L(439), L(9), L(440)], aOR.qa(new v0(bj.eN.data[11])), qh.push(aOR), (aOR = new qP).qS(L(441)), aOR.qd(new sB(bj.eN.data[2])), qh.push(aOR), (aOR = new qP).qS(L(442)),
		aOR.qd(new sB(bj.eN.data[7])), qh.push(aOR), (aOR = new qP).qS(L(443)), aOR.qd(new sB(bj.eN.data[8])), qh.push(aOR), (aOR = new qP).qS(L(444)), aOR.qd(new ra(bj.eN.data[5])), qh.push(aOR), (aOR = new qP).qS(L(445)), aOR.qd(new sB(bj.eN.data[
			13], L(446))), aOR.qd(new sB(bj.eN.data[14], L(447))), qh.push(aOR), aO8 = new qf(aO7.vB, qh)
}

function aNx() {
	var aP2, aP3, aP4, qh;

	function aP5() {
		aP7(), 2 !== aD.data.spawningType || bA.qu.a3A(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		2 === aD.data.spawningType && bA.qu.a3M(aP4.vb(), aD.data.spawningData, bS.aIY - 1)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(449), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP,
			v4 = (aOR.qS(L(282)), [L(307), L(319), L(285)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (v4.splice(1, 1), 0 < value) && (value = 1);
		aOR.qa(new v0({
			v4: v4,
			value: value
		}, function(e9) {
			aP7(), aD.data.spawningType = e9, 0 === aD.data.gameMode && 1 === e9 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ey)), t.u(24)
		})), aOR.qd(new sR), aOR.qd(new sB({
			value: aD.data.selectableSpawn
		}, L(450), function(value) {
			aD.data.selectableSpawn = value
		})), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR = new qP;
		aOR.qS("Seed"), aOR.qd(new ra({
			e9: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qh.push(aOR)
	}(qh), function(qh) {
		var aOR;
		2 === aD.data.spawningType && ((aOR = new qP).qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.spawningData, 2)), aOR.qd(aP4), qh.push(aOR))
	}(qh), qh))
}

function aNf() {
	var aO7, aR6, aR7, v6;

	function aSM(id) {
		0 !== a0.id || bj.eN.data[140].value ? 0 === id ? t.u(8, 1, new t2(16)) : t.u(2) : t.y.aQz(t.t1, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aO7.show(), this.resize(), this.eU()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aR6.resize()
	}, this.eU = function() {
		8 === aa.a1t() && (2 <= bd.aSR ? aR7[2].r4 === bB.o6 && aR7[2].r6(0) : aR7[2].r4 !== bB.o6 && aR7[2].r6(bB.o6), !aD.h9 && aM.qN(aD.el) ? aR7[1].r4 === bB.o6 && aR7[1].r6(0) : aR7[1].r4 !== bB.o6 && aR7[1].r6(bB.o6), !aD.h9 && aw.hp(aD
			.el) ? aR7[0].r4 === bB.o6 && aR7[0].r6(0) : aR7[0].r4 !== bB.o6 && aR7[0].r6(bB.o6))
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aR7 = [new w(L(451), function() {
		aSM(0)
	}), new w(L(342), function() {
		t.u(16)
	}), new w(L(396), function() {
		t.u(17)
	}), new w(L(452), function() {
		t.y.aPz()
	}, 0, 0, 1), new w(L(420), function() {
		t.u(3, 1)
	}), new w(L(453), function() {
		t.u(18)
	}), new w(L(412), function() {
		t.u(31)
	}), new w(L(426), function() {
		aSM(1)
	}), new w(L(454), function() {
		var sr = ["Patreon", L(463), L(464), "YouTube Tutorial", "Discord", L(465), L(335), L(466), L(338), L(413), "Terms", "Privacy"],
			a3w = [bK.aP0, bK.aDH, bK.a1m, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aDI, bK.aSS, bK.aST, bK.a1U, bK.aSU, bK.aSV, bK.aSW, bK.aRi];
		1 === a0.id ? (sr.splice(2, 1), sr.splice(0, 1), a3w.splice(2, 1), a3w.splice(0, 1)) : 2 === a0.id && (sr.splice(1, 1), sr.splice(0, 1), a3w.splice(1, 1), a3w.splice(0, 1)), t.u(4, 1, new v(L(454), bA.qm.a3v(sr, a3w), !1, [new w(
			"⬅️ " + L(40),
			function() {
				t.u(1)
			})]))
	}), new w(L(455), function() {
		t.u(4, 1, new v(L(455), l.dw + "<br><a href='" + bK.aSS + "' target='_blank'>" + bK.aSS + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(40), function() {
				t.u(1)
			})]))
	}), new w(L(456), function() {
		t.u(4, 1, new v(L(456), L(467) + "<br>" + L(468), !1, [new w("⬅️ " + L(40), function() {
			t.u(1)
		}), new w(L(469), function() {
			a0.a1.a1g(), t.u(1)
		})]))
	}), new w(L(457), function() {
		a0.a1.a1h(), t.u(4, 1, new v(L(470), L(471) + " <a href='" + bK.aRi + "' target='_blank'>" + bK.aRi + "</a>", !1, [new w("⬅️ " + L(40), function() {
			t.u(1)
		})]))
	})], v6 = [new w("⬅️ " + L(40), function() {
		t.y.aCw()
	})], 8 === aa.a1t() && (aR7.unshift(new w(L(330), function() {
		t.u(30)
	})), aR7.unshift(new w(L(460), function() {
		2 <= bd.aSR && (t.x(), be.a2n(), bf.dl = !0)
	}, 0, 1)), aR7.unshift(new w(L(461), function() {
		!aD.h9 && aM.qN(aD.el) && (b8.hQ.pa(), t.x(), aM.hA) && aM.a2n()
	}, 0, 1)), aR7.unshift(new w(L(462), function() {
		!aD.h9 && aw.hp(aD.el) && (bV.a65(2), b8.hQ.hl(), t.x(), aM.hA) && aM.a2n()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dw && aR7.push(new w(L(458), function() {
		a0.a1.a1i()
	})), aO7 = new v5(L(459), v6), aR6 = new rK(aR7, aO7.vB)
}

function aO1() {
	var aP2, aP3, aP4, qh;

	function aP5() {
		aP7(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		2 === aD.data.sResourcesType && bA.qu.a3M(aP4.vb(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(325), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), aOR.qa(new v0({
			v4: [L(283), L(284), L(285)],
			value: aD.data.sResourcesType
		}, function(e9) {
			aP7(), 2 !== e9 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ey)), aD.data.sResourcesType = e9, t.u(28)
		})), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR;
		1 === aD.data.sResourcesType && ((aOR = new qP).qS("Value"), aOR.qd(new ra({
			e9: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qh.push(aOR))
	}(qh), function(qh) {
		var aOR;
		2 === aD.data.sResourcesType && ((aOR = new qP).qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.sResourcesData, 2)), aOR.qd(aP4), qh.push(aOR))
	}(qh), qh))
}

function aNz() {
	var aP2, aP3, aP4, qh;

	function aP5() {
		aP7(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aO6()[19] = null, t.a1s()
	}

	function aP7() {
		2 === aD.data.tIncomeType && bA.qu.a3M(aP4.vb(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aP2.show(), this.resize()
	}, this.s3 = function() {
		aP2.s3()
	}, this.resize = function() {
		aP2.resize(), aP3.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aP2.vC[0].r3()
	}, aP2 = new v5(L(323), [new w("⬅️ " + L(40), aP5)]), aP3 = new qf(aP2.vB, (function(qh) {
		var aOR = new qP;
		aOR.qS(L(282)), aOR.qa(new v0({
			v4: [L(283), L(284), L(285)],
			value: aD.data.tIncomeType
		}, function(e9) {
			aP7(), 2 !== e9 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ey), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e9, t.u(26)
		})), qh.push(aOR)
	}(qh = []), function(qh) {
		var aOR;
		1 === aD.data.tIncomeType && ((aOR = new qP).qS("Value"), aOR.qd(new ra({
			e9: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qh.push(aOR))
	}(qh), function(qh) {
		var aOR;
		2 === aD.data.tIncomeType && ((aOR = new qP).qS("Data"), (aP4 = new vT(0, 1, 0, 1)).va(bA.rl.a4t(aD.data.tIncomeData, 4)), aOR.qd(aP4), qh.push(aOR))
	}(qh), qh))
}

function aNr() {
	var aO7, aO8, qh;
	this.show = function() {
		aO7.show(), this.resize()
	}, this.s3 = function() {
		aO7.s3()
	}, this.resize = function() {
		aO7.resize(), aO8.resize()
	}, this.a2k = function(eZ) {
		2 === eZ && aO7.vC[0].r3()
	}, aO7 = new v5(L(453), [new w("⬅️ " + L(40), function() {
		t.a1s()
	})]), aO8 = new qf(aO7.vB, ((qh = []).push(function() {
		function aOX() {
			aS6.button.textContent = L(179), aSZ.e.readOnly = !1, aSa.e.readOnly = !1, aOW.r6(1), aOW.button.style.color = bB.nu
		}
		var aOR = new qP,
			aSY = (aOR.qY("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", aOR.qS(L(472)), new ra({
				value: bj.eN.data[105].value,
				e9: -1
			})),
			aSZ = (aSY.e.readOnly = !0, aOR.qd(aSY), aOR.qS(L(366), "0.8em"), new ra(bj.eN.data[148], 0, void 0, function(e) {
				aOV(bj.eN.data[149].value, e.target.value)
			})),
			aSa = (aOR.qd(aSZ), aOR.qS(L(370), "0.8em"), new ra(bj.eN.data[149], 1, void 0, function(e) {
				aOV(e.target.value, bj.eN.data[148].value)
			})),
			aS6 = (aOR.qd(aSa), new w(L(179), function(e) {
				return e.textContent === L(179) ? (e.textContent = L(180), aSZ.e.readOnly = !0, aSa.e.readOnly = !0, aOW.r6(0), aOW.button.style.color = bB.os, bj.sE.sF(149, aSa.e.value), aOV(bj.eN.data[149].value, bj.eN.data[
					148].value)) : aOX(), !0
			})),
			aOW = (aOR.qd(new sH([aS6.button])), new w(L(14), function(e) {
				return aSZ.e.readOnly && b0.y.eV(0) && (bA.qm.ux(e), aOX(), b0.aFo.aFp({
					t3: 0,
					sz: bj.eN.data[148].value,
					value: parseInt(bj.eN.data[149].value, 10)
				})), !0
			}, 1)),
			qV = aOR.qU(),
			aOV = (aOR.qU(L(473)).style.fontWeight = "bold", function(fS, qT) {
				qV.innerHTML = t.y.aOZ(fS, bj.eN.data[105].value, qT)
			});
		return aOR.qd(new sH([aOW.button])), aOV(bj.eN.data[149].value, bj.eN.data[148].value), aOR
	}()), qh))
}

function bw() {
	"function" != typeof Math.log2 && (Math.log2 = function(f8) {
		return Math.log(f8) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(f8) {
		return Math.log(f8) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(f8) {
		return 0 < f8 ? 1 : f8 < 0 ? -1 : 0
	})
}

function ci() {
	var a9z, aSc, aSd, aSe, aSb = !1;

	function aSf() {
		aSb = !0, a9z = -1, aSc = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aSc[aB] = !1;
		var y5 = Math.floor(1 + .02 * h.min);
		aSd = new Array(4), (aSe = new Array(4))[1] = aSe[3] = aSd[0] = aSd[2] = 0, aSe[0] = aSd[3] = -y5, aSd[1] = aSe[2] = y5
	}

	function aSg() {
		if (-1 !== a9z)
			if (0 !== aD.a0i && aH.nc()) {
				for (var aSh = !1, aB = 3; 0 <= aB; aB--) aSc[aB] && (aSh = !0, ib += aSd[aB], ic += aSe[aB], af.a2C(aSd[aB], aSe[aB]), aS.a9f());
				aSh ? bf.dl = !0 : ar.nS()
			} else ar.nS()
	}
	this.a2i = function(e9) {
		0 !== aD.a0i && aH.nc() && (aSb || aSf(), aSc[e9] = !0, -1 === a9z) && (a9z = setInterval(aSg, 20), aSg())
	}, this.a2l = function(e9) {
		if (0 !== aD.a0i && (aSb || aSf(), aSc[e9] = !1, -1 !== a9z)) {
			for (var aSh = !1, aB = 3; 0 <= aB; aB--) aSh = aSh || aSc[aB];
			aSh || this.nS()
		}
	}, this.nS = function() {
		if (aSb && -1 !== a9z) {
			for (var aB = 3; 0 <= aB; aB--) aSc[aB] = !1;
			clearInterval(a9z), a9z = -1
		}
	}
}

function cj() {
	this.y = new aSi, this.mc = new aSj, this.pG = new aSk, this.aFG = new aSl, this.eW = new aSm, this.aFo = new aSn, this.pt = new aSo, this.aQM = new aSp, this.a7F = new aSq, this.aSr = new aSs, this.aSt = new aSu, this.aSv = new aSw, this.aSx =
		new aSy, this.dd = function() {
			this.y.dd()
		}
}

function aSi() {
	var aSz, aT1;
	this.aGf = 5, this.aT0 = null;

	function aT9(aB) {
		return aT1[aB].aSb && aSz[aB].aT9()
	}

	function aT6(a1o) {
		aT1[a1o].eQ = bf.eQ, aT1[a1o].aT3 = !1
	}
	this.a1y = 0, this.a1r = 0, this.dd = function() {
		this.aT0 = new Array(this.aGf);
		this.aT0[0] = "territorial.io";
		var aLT = ay.aLp(0);
		ay.a5G(0);
		for (var aB = 1; aB < this.aGf; aB++) this.aT0[aB] = aK.a0G() + ".territorial.io";
		for (ay.a5G(aLT), aSz = new Array(this.aGf), aT1 = new Array(this.aGf), aB = this.aGf - 1; 0 <= aB; aB--) aT1[aB] = {
			aSb: !1,
			eQ: 0,
			aT3: !1
		};
		this.aGg(0, 0)
	}, this.aT4 = function(aB) {
		return aSz[aB]
	}, this.eU = function() {
		for (var aB = this.aGf - 1; 0 <= aB; aB--) this.eV(aB) && bf.eQ > aT1[aB].eQ + 15e3 && (b0.pG.aT5(aB, aT1[aB].aT3), aT6(aB));
		!this.eV(0) && bf.eQ > aT1[0].eQ + 8e3 && (aT1[0].eQ = bf.eQ, this.aGg(0, 0))
	}, this.aQJ = function(id) {
		return this.aGg(0, id) && this.aT7(0)
	}, this.aGg = function(a1o, aNd) {
		if (aT1[a1o].aSb) {
			if (aSz[a1o].aT9()) return aSz[a1o].aTA(aNd), aSz[a1o].eV();
			aSz[a1o].s3()
		}
		return this.aT8(a1o, aNd), !1
	}, this.aT8 = function(a1o, aNd) {
		aT1[a1o].aSb = !0, aT6(a1o), aSz[a1o] = new aTB, aSz[a1o].dd(a1o, aNd)
	}, this.aTA = function(a1o, aNd) {
		aT9(a1o) && aSz[a1o].aTA(aNd)
	}, this.aTC = function(a1o, aNd) {
		b0.eW.aTD(a1o)
	}, this.aT7 = function(aB) {
		return this.eV(aB) && aSz[aB].aT7()
	}, this.aTE = function(aB) {
		aSz[aB].aTE()
	}, this.eV = function(aB) {
		return aT1[aB].aSb && aSz[aB].eV()
	}, this.send = function(a1o, aC) {
		0 !== a1o && aT6(a1o), aSz[a1o].send(aC)
	}, this.a2T = function(a1o) {
		8 === aa.a1t() && (aT1[a1o].aT3 = !0, b0.mc.aTF = !0)
	}, this.close = function(a1o, aTG) {
		aT9(a1o) && aSz[a1o].close(aTG)
	}, this.aTH = function(a1o, aTG) {
		o.a21(aTG), aT9(a1o) && aSz[a1o].close(aTG)
	}, this.a22 = function(aTG) {
		for (var aB = this.aGf - 1; 0 <= aB; aB--) this.close(aB, aTG)
	}, this.aTI = function(a1o, aTG) {
		for (var aB = this.aGf - 1; 0 <= aB; aB--) aB !== a1o && this.close(aB, aTG)
	}, this.a5R = function() {
		0 === this.a1y && (aD.kf || aD.h9) || this.close(this.a1y, 3246)
	}, this.aTJ = function(a1o, e) {
		aSz[a1o].s3(), o.a1n(a1o, e.code)
	}
}

function aSj() {
	this.aTF = !1, this.eU = function() {
		bf.kI() % 250 != 249 || aD.h9 || (b0.eW.aTK(+(this.aTF && ag.mu[aD.el]), al.kr + bN.y.mB), this.aTF = !1)
	}
}

function aSq() {
	function aTn(aTo) {
		var f4 = aD.data,
			aTo = (f4.selectedPlayer = bH.pu(aTo), f4.spawningSeed = bH.pu(14), bH.pu(4)),
			aTo = (aTo < 7 ? (f4.gameMode = 1, f4.numberTeams = aTo + 2) : 9 === aTo ? (f4.gameMode = f4.isZombieMode = 1, f4.numberTeams = 2) : (f4.gameMode = 0, f4.battleRoyaleMode = 7 === aTo ? 0 : 10 === aTo ? 1 : 2), f4.isContest = bH.pu(1), bH
				.pu(6));
		return f4.mapType = bS.aEG(aTo) ? 0 : 1, bS.aEH(f4, aTo), f4.mapSeed = bH.pu(14), aTo
	}
	this.aTM = function(a1o, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aTH(a1o, 3205) : ((0 === bH.pu(1) ? function(a1o) {
			var aTQ = bH.pu(6);
			0 === aTQ ? function(a1o) {
					if (0 === a1o && 8 !== aa.a1t()) {
						t.y.aRj();
						for (var aTf = bH.pu(12), aTg = bH.pu(6), g = new Array(aTf), aB = 0; aB < aTf; aB++) g[aB] = bH.pu(aTg);
						aT.aA5(g)
					}
				}(a1o) : 2 === aTQ ? b0.aSr.aTS(a1o) : 3 === aTQ || 4 === aTQ ? ax.dd() : 5 === aTQ ? b0.aSt.aTT() : 9 === aTQ ? b0.aSt.aTU(a1o) : 10 === aTQ ? b0.aSv.aTV() : 11 === aTQ ? b0.aSt.aTW(a1o) : 12 === aTQ ? b0.aSv.aTX() :
				13 === aTQ ? b0.aSx.aTY() : 14 === aTQ ? b0.aSx.aTZ() : 15 === aTQ ? b0.aSt.aTa() : 16 === aTQ ? b0.aSr.aTb(a1o) : 17 === aTQ ? b0.aSr.aTc(a1o) : 19 === aTQ ? b0.aSr.aTd(a1o) : 20 === aTQ && b0.aSt.aTe(a1o)
		} : function(a1o) {
			if (8 !== aa.a1t() && !ax.aHA()) return;
			if (a1o !== b0.y.a1y) b0.y.aTH(a1o, 3244);
			else if (0 === bH.pu(1)) bf.a0r.aTp(bH.aC);
			else {
				var aB, a1o = bH.pu(2);
				if (0 === a1o) {
					var pV, pG = bH.pu(9);
					0 !== ag.mu[pG] && 0 !== ag.mu[aD.el] && (pV = bH.pu(10), aN.pU(pG, aD.el, pV), af.qL(pG, 1, pV))
				} else if (1 === a1o) ! function() {
					var pG = bH.pu(9);
					0 !== ag.mu[pG] && 0 !== ag.mu[aD.el] && b5.aL4(0, [pG], !0) && aN.pm(pG, 1)
				}();
				else if (2 === a1o) ! function() {
					var pG = bH.pu(9),
						target = bH.pu(9);
					0 !== ag.mu[pG] && 0 !== ag.mu[target] && 0 !== ag.mu[aD.el] && b5.aL4(1, [pG], !0) && (af.qL(pG, 3, 96), af.qL(target, 4, 96), aN.a7M(pG, target))
				}();
				else if (l.a9 && !l.aA) {
					var f1 = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), f1 = Math.min(b8.pD.pw.length, 540), aB = 0; aB < f1; aB++) bD.aTv(32, b8.pD.pw[aB]);
					b0.y.send(b0.y.a1y, bD.aC)
				}
			}
		})(a1o), bf.aTP())
	}, this.aTh = function(aC) {
		if (bH.dd(aC), bH.e9 = 1, 3 === bH.pu(6)) {
			bH.e9 += 20;
			var f4 = aD.data = new a59,
				aC = aTn(9),
				aEI = f4.humanCount = bH.pu(9) + 1;
			f4.selectableSpawn = 1 === f4.gameMode || aEI < 100, f4.colorsData = new Uint32Array(aEI), f4.playerNamesData = new Array(aEI);
			for (var aB = 0; aB < aEI; aB++) bH.e9++, f4.colorsData[aB] = bH.pu(18), f4.playerNamesData[aB] = bG.wg.wk(bH.pu(5));
			aa.aGr(), bS.a7(aC, f4.mapSeed), aD.a5E()
		} else ! function() {
			bH.e9 += 20;
			var f4 = aD.data = new a59,
				aTm = aTn(1);
			f4.humanCount = 2;
			f4.selectableSpawn = 1, f4.elo = new Uint16Array(2), f4.colorsData = new Uint32Array(2), f4.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e9++, f4.colorsData[aB] = bH.pu(18), f4.elo[aB] = bH.pu(14), f4.playerNamesData[aB] = bG.wg.wk(bH.pu(5));
			aa.aGr(), bS.a7(aTm, f4.mapSeed), aD.a5E()
		}()
	}, this.aTk = function() {
		bH.e9 = 1;
		var aTQ = bH.pu(6),
			aTl = bH.pu(10);
		return b0.y.a1r === aTl ? (b0.y.a1y = aTl, !1) : (b0.y.close(b0.y.a1r, 3247), b0.y.a1y = aTl, ax.aED = bH.pu(10), ax.aGz = bH.pu(3 === aTQ ? 9 : 1), b0.y.aGg(aTl, 5) && b0.pG.aH6(), !0)
	}
}

function aSw() {
	this.aTV = function() {
		bj.y.wE(), bj.sE.sF(105, bF.t4.t5(bF.t4.t6(5))), bj.sE.sF(106, bF.t4.t5(bF.t4.t6(8))), bj.sE.sF(109, bH.pu(30)), bj.sE.sF(108, bj.eN.data[109].value), bj.sE.sF(111, bj.eN.data[109].value + 1), bj.sE.sF(107, 0), bj.sE.sF(110, "")
	}, this.aTX = function() {
		var data;
		bH.size < bD.aTw(29) ? b0.y.aTH(0, 3254) : ((data = {
			t0: bH.pu(30),
			wR: bH.pu(16),
			wS: bH.pu(30),
			wT: bH.pu(30),
			wU: bH.pu(30),
			wV: bH.aTx(32),
			username: bG.wi.x0(5),
			wW: bG.wi.x0(3),
			wX: bG.wi.x0(3),
			wY: bH.aTx(32),
			wZ: bH.aTx(32),
			wa: bH.pu(30),
			wb: bH.aTx(32),
			wc: bH.aTx(32),
			wd: bH.aTx(32),
			we: bH.aTx(32),
			aOe: bH.aTx(32),
			aOf: bH.aTx(30),
			aOs: bH.aTx(32),
			aOt: bG.wi.x0(3),
			aOl: bH.aTx(2),
			aOm: bH.aTx(10),
			aOj: bG.wi.x0(8),
			aOn: bH.aTx(5),
			aOT: bH.pu(30),
			aOd: bH.pu(30),
			a19: bH.aTx(32),
			aOi: bH.pu(3),
			aOh: bH.pu(8),
			aOu: bH.pu(1),
			aOv: bH.pu(1)
		}).aOu && (data.aOw = bH.aTx(32), data.aOx = bH.pu(30), data.aOy = bH.pu(30), data.aOz = bH.pu(1)), 8 === t.t1 && (25 === t.a5i().aQI ? (data.aO9 = !0, t.y.aNo = data, t.a5i().aCv(25, !1)) : (data.aO9 = !1, bj.sE.sF(160, +(data
			.aOu && data.aOz)), data.sz = bj.eN.data[105].value, t.y.aNl = data, bj.sE.wQ(data), t.a5i().aCv(16, !0))))
	}
}

function aSy() {
	this.aTY = function() {
		var aB;
		if (bH.size < bD.aTw(23)) b0.y.aTH(0, 3259);
		else {
			var tK = bH.pu(6),
				f1 = bH.pu(10),
				data = [];
			if (9 === tK || 10 === tK || 11 === tK) {
				for (aB = 0; aB < f1; aB++) data.push([bH.pu(30), bG.wi.x0(5), bH.aTx(32), 0, bH.pu(30)]);
				8 === t.t1 && t.a5i().aCv(21, !0, {
					tK: tK,
					data: data
				})
			} else if (12 === tK) {
				for (aB = 0; aB < f1; aB++) data.push([bH.pu(20), bH.pu(30), bH.pu(30), bH.aTx(32), bH.pu(30), bG.wi.x0(5), bG.wi.x0(5)]);
				8 === t.t1 && t.a5i().aCv(21, !0, {
					tK: tK,
					data: data
				})
			} else {
				var hx = bH.pu(16);
				if (bH.aTy(39 + 16 * hx + f1 * (0 === tK ? 111 : 1 === tK ? 101 : 2 === tK || 3 === tK ? 127 : 212))) {
					if (0 === tK)
						for (aB = 0; aB < f1; aB++) data.push([bH.pu(30), bG.wg.wk(bH.pu(5)), bH.pu(16), bH.pu(30), bH.pu(30)]);
					else if (1 === tK)
						for (aB = 0; aB < f1; aB++) data.push([bH.pu(16), bG.wg.wk(bH.pu(3)), bH.pu(16), bG.wg.wk(bH.pu(5)), bH.pu(31), bH.pu(30)]);
					else if (2 === tK || 3 === tK)
						for (aB = 0; aB < f1; aB++) data.push([bH.pu(30), bG.wg.wk(bH.pu(5)), bH.aTx(32), bH.pu(30), bH.pu(30)]);
					else
						for (aB = 0; aB < f1; aB++) data.push([bH.pu(20), bH.pu(30), bH.pu(30), bH.pu(30), bH.pu(30), bH.aTx(32), bH.pu(30), bG.wg.wk(bH.pu(5)), bG.wg.wk(bH.pu(5))]);
					8 === t.t1 && t.a5i().aCv(21, !0, {
						tK: tK,
						data: data
					})
				} else b0.y.aTH(0, 3260)
			}
		}
	}, this.aTZ = function() {
		if (bH.size < bD.aTw(29)) b0.y.aTH(0, 3265);
		else {
			var aTz = bH.pu(4),
				aU0 = bH.pu(7),
				aU1 = bH.pu(11);
			if (bH.aTy(29 + 16 * aU0 + 16 * aU1 + 11 * aTz)) {
				for (var data = [], aB = 0; aB < aTz; aB++) {
					for (var a1O = bG.wg.wk(bH.pu(3)), aU2 = bH.pu(8), aPW = [], fK = 0; fK < aU2; fK++) aPW.push(bH.pu(16));
					data.push({
						name: "[" + a1O + "]",
						aPW: aPW
					})
				}
				8 === t.t1 && t.a5i().aCv(23, !0, data)
			} else b0.y.aTH(0, 3266)
		}
	}
}

function aSs() {
	function aU4() {
		var id = bH.pu(3);
		return 0 === id ? {
			id: id,
			sz: bH.pu(30),
			r: bn.aDN.aFL(bG.wi.x0(7))
		} : 1 === id ? {
			id: id,
			sz: bH.pu(30),
			aEO: bH.pu(3),
			value: bH.pu(30),
			target: bH.pu(30)
		} : 2 === id ? {
			id: id,
			sz: bH.pu(30),
			aEO: bH.pu(3)
		} : 3 === id ? {
			id: id,
			sz: bH.pu(30),
			aEO: bH.pu(3),
			value: bH.pu(4),
			target: bH.pu(30)
		} : 4 === id ? {
			id: id,
			sz: bH.pu(30),
			aEO: bH.pu(3),
			target: bH.pu(30)
		} : 5 === id ? {
			id: id,
			aEO: bH.pu(6)
		} : 6 === id ? {
			id: id,
			value: bH.pu(17)
		} : null
	}
	this.aTS = function(a1o) {
		if (a1o !== b0.y.a1r) b0.y.close(a1o, 3239);
		else if (6 !== aa.a1t()) b0.y.close(a1o, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rr = bn.y.rs[aB],
					playerCount = (rr.ts = bH.pu(10), rr.eh = bH.pu(6), rr.mapSeed = bH.pu(14), rr.aE9 = bH.pu(4), rr.aFs = bH.pu(6), rr.aFt = bH.pu(4), rr.aEF = bH.pu(1), rr.aEw = bH.pu(12), rr.spawningSeed = bH.pu(14), bH.pu(16));
				bn.u7.u9[aB] = bH.pu(16);
				for (var fK = 0; fK < playerCount; fK++) bn.u7.aDb(aB, bH.pu(30), bG.wi.x0(5), bH.pu(4), bH.pu(30), bH.pu(7), bH.pu(16), bH.pu(18), bH.pu(11), bH.pu(12))
			}
			t.u(29), bn.y.aEo(!0)
		}
	}, this.aTb = function(a1o) {
		if (a1o !== b0.y.a1r) b0.y.close(a1o, 3239);
		else if (bn.a1q) {
			bn.y.aEm[0] = bH.pu(20), bn.y.aEm[1] = bH.pu(20);
			for (var aU3 = bH.pu(16), fK = 0; fK < aU3; fK++) {
				var id = bH.pu(3);
				0 === id ? bn.u7.aDb(bH.pu(2), bH.pu(30), bG.wi.x0(5), 0, 1234566, 127, 0, bH.pu(18), 0, bH.pu(12)) : 1 === id ? bn.u7.aDu(bH.pu(16), bH.pu(2)) : 2 === id ? bn.u7.aDq(bH.pu(16), bH.pu(2), bH.pu(2)) : 3 === id ? bn.u7.aDt(bH.pu(
					16), bH.pu(2)) : 4 === id ? bn.u7.aDj(bH.pu(16), bH.pu(2), bH.pu(4), bH.pu(30), bH.pu(7), bH.pu(16), bH.pu(11)) : 5 === id && bn.u7.aDk(bH.pu(16), bH.pu(2), bH.pu(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rr = bn.y.rs[aB];
				if (rr.ts = bH.pu(10), 0 === rr.ts) {
					if (rr.a1y = bH.pu(10), rr.aED = bH.pu(10), bn.aDP.dm(aB)) return;
					rr.eh = bH.pu(6), rr.mapSeed = bH.pu(14), rr.aE9 = bH.pu(4), rr.aFs = bH.pu(6), rr.aFt = bH.pu(4), rr.aEF = bH.pu(1), rr.aEw = bH.pu(12), rr.spawningSeed = bH.pu(14), rr.aFu.push(rr.aFu[0]), rr.aFu.shift()
				}
			}
			bn.y.aE5()
		} else b0.y.close(a1o, 3251)
	}, this.aTc = function(a1o) {
		if (a1o !== b0.y.a1r) b0.y.close(a1o, 3272);
		else if (bn.a1q) {
			for (var rp = bH.pu(4), rr = bn.y.rs[rp], rt = rr.rt, uN = (rr.ru = bH.pu(20), bH.pu(6)), aB = 0; aB < uN; aB++) {
				var aGB = aU4();
				bn.s2.aGA(aGB), rt.push(aGB)
			}
			bn.y.aEx(rp)
		} else b0.y.close(a1o, 3273)
	}, this.aTd = function(a1o) {
		a1o !== b0.y.a1r ? b0.y.close(a1o, 3276) : bn.a1q ? bn.message.aE3(aU4()) : b0.y.close(a1o, 3277)
	}
}

function aSu() {
	this.aTT = function() {
		for (var id = bH.pu(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bH.pu(8), bH.pu(8), bH.pu(8)]);
		var eb = bG.wi.x0(8);
		bU.eJ.eY({
			id: id,
			colors: colors,
			eb: eb
		})
	}, this.aTe = function(a1o) {
		var f4 = bH.pu(5),
			f4 = bi.aU5.aU6(f4, bH.pu(30), bH.pu(30), bH.pu(30));
		b0.eW.aU7(a1o, f4)
	}, this.aTU = function(a1o) {
		var aTr, rI, aU8;
		bH.aTy(165) ? (aTr = bH.pu(3), rI = bi.aU5.eU(bH.pu(30), bH.pu(30)), aU8 = bi.aU5.aU6(bH.pu(5), bH.pu(30), bH.pu(30), bH.pu(30)), b0.eW.aU9(a1o, rI, aU8, aTr), 0 < aTr || (0 === a1o && 0 === bj.eN.data[105].value.length ? b0.eW.eX(0) : b0
			.aFo.aUA(a1o), 4 === b0.y.aT4(a1o).aUB() ? 6 === aa.a1t() && b0.aFG.aGh(a1o) : 5 !== b0.y.aT4(a1o).aUB() || 8 !== aa.a1t() && 10 !== aa.a1t() || b0.pG.aH6())) : b0.y.aTH(a1o, 3269)
	}, this.aTW = function(a1o) {
		var id = bH.pu(6);
		1 === id ? (bj.sE.sF(160, bH.pu(30)), b0.y.aTE(a1o), aT.aA1 || b0.eW.eX(1), b7.aCr(), 8 === t.t1 && t.a5i().aQW()) : 21 === id ? 8 === t.t1 && t.a5i().aCv(17) : 22 === id && (bj.sE.sF(106, bj.eN.data[110].value), bj.sE.sF(110, ""), 8 ===
			t.t1) && t.a5i().aCv(15)
	}, this.aTa = function() {
		var f1 = bH.pu(16),
			aUC = bH.pu(16);
		if (bH.aTy(55 + 10 * f1 + 16 * aUC)) {
			for (var g = [], aB = 0; aB < f1; aB++) g.push(bG.wg.wk(bH.pu(10)));
			b7.aCu(g)
		} else b0.y.aTH(0, 3270)
	}
}

function aSk() {
	this.aT5 = function(a1o, aT3) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aT3 ? 1 : 0), bD.a8(3, 0 === aD.a0i ? bn.a1q ? 6 : 0 : aD.h9 ? 1 : aD.kf ? 7 : aD.kd < 7 ? 2 : 8 === aD.kd ? 4 : 9 === aD.kd ? 5 : 3), b0.y.send(a1o, bD.aC)
	}, this.aH6 = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a1r), bD.a8(10, ax.aED), bD.a8(9, ax.aGz), bD.a8(10, l.dy), bD.a8(14, l.dq), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pH = function(en) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, en), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pI = function(ia, jU) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, ia), bD.a8(10, jU), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pM = function(ia, pK) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, ia), bD.a8(9, pK), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pO = function(ia, pN) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, ia), bD.a8(27, pN), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pQ = function(ia, nH) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, ia), bD.a8(16, nH), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pT = function(jU) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jU), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pX = function(e9) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e9), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pZ = function(pY) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pY), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pb = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pc = function(ia, en, jU) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, ia), bD.a8(10, jU), bD.a8(22, en), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pk = function(aUD, aUE) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aUE), bD.a8(10, aUD), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pn = function(a7F) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a7F), b0.y.send(b0.y.a1y, bD.aC)
	}, this.pr = function(aUF, target) {
		var aB, f1 = aUF.length;
		for (bD.a7(14 + 9 * f1), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < f1; aB++) bD.a8(9, aUF[aB]);
		b0.y.send(b0.y.a1y, bD.aC)
	}
}

function aSn() {
	this.aUG = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.eW.aUH(), b0.y.send(0, bD.aC)
	}, this.aUA = function(a1o) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.t4.ww(bj.eN.data[105].value, 5), bG.t4.ww(bj.eN.data[106].value, 8), bD.a8(30, bj.eN.data[109].value), b0.y.send(a1o, bD.aC)
	}, this.aQY = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.t4.wv(bj.eN.data[110].value), b0.y.send(0, bD.aC)
	}, this.aQU = function(a4W) {
		var f1 = a4W.qT.length;
		bD.a7(21 + 16 * f1), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a4W.t3), bD.a8(8, f1), bF.wg.wv(a4W.qT), b0.y.send(0, bD.aC)
	}, this.aS7 = function(wV, colors, aUJ, eb) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 16), bE.a8(20, Math.min(wV, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fK = 0; fK < 3; fK++) bE.a8(8, colors[aB][fK]);
		wV = b7.data.aCz(aUJ.trim());
		bE.a8(8, -1 === wV ? 255 : wV), bF.wi.a0A(eb.trim().substring(0, 180), 8, bE), b0.y.send(0, bE.aUK())
	}, this.aOo = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.t3), bG.t4.ww(data.sz, 5), b0.y.send(0, bD.aC)
	}, this.aFp = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.t3), bG.t4.ww(data.sz, 5), bD.aTv(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aSo() {
	this.ps = function() {
		for (var f1 = aD.kL, a0X = bR.result.a0X, lG = a0X.length, a1H = (bD.a7(17 + 16 * f1 + 33 * lG), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, lG), bD.a8(1, +(2 === aD.a0f)), bD.a8(1, aD.a0z % 2), ag.a1H), aB = 0; aB < f1; aB++) bD.a8(16, a1H[
		aB]);
		for (var go = ag.go, aB = 0; aB < lG; aB++) {
			var gY = a0X[aB];
			bD.a8(9, gY), bD.a8(24, go[gY])
		}
		b0.y.send(b0.y.a1y, bD.aC)
	}
}

function aSp() {
	this.aQN = function(tK, tL, tM) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tK), bD.a8(1, +(tL < 0)), bD.a8(1, +(tM < 0)), bD.a8(30, Math.abs(tL)), bD.a8(30, Math.abs(tM)), b0.y.send(0, bD.aC)
	}, this.aQO = function(tK, aQP, aQQ) {
		bD.a7(18 + 16 * aQP.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tK), b0.eW.aUL(aQP), bD.a8(30, aQQ), b0.y.send(0, bD.aC)
	}, this.aQT = function(tK, aQP, aQQ) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tK), bG.t4.ww(aQP, 5), bD.a8(30, aQQ), b0.y.send(0, bD.aC)
	}, this.aQR = function(aPV, a1N) {
		for (var f1 = a1N.length, hx = 0, aB = 0; aB < f1; aB++) hx += a1N[aB].length;
		for (bD.a7(21 + 3 * f1 + 16 * hx), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aPV), bD.a8(4, f1), bD.a8(7, hx), aB = 0; aB < f1; aB++) bD.a8(3, a1N[aB].length), bF.wg.wv(a1N[aB]);
		b0.y.send(0, bD.aC)
	}, this.aQS = function(aPV, tL, tM) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aPV), bD.a8(1, +(tL < 0)), bD.a8(1, +(tM < 0)), bD.a8(20, Math.abs(tL)), bD.a8(20, Math.abs(tM)), b0.y.send(0, bD.aC)
	}
}

function aSl() {
	this.aGh = function(a1o) {
		var username = bj.eN.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + bi.aUM.pu()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dy), bD.a8(2, bj.eN.data[158].value), b0.eW.aUL(username), bA.color.a3b(bj.y.wL()));
		bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), bi.aUM.a0A(), b0.y.a1r = a1o, b0.y.send(a1o, bD.aC)
	}, this.aFH = function(aUO, a4W) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aUO), 2 === aUO ? bE.a8(2, a4W) : 3 === aUO ? bF.wi.a0A(a4W, 7, bE) : 5 === aUO && (bE.a8(3, a4W.id), bE.a8(3, a4W.value), bE.a8(30, a4W.sz)), b0.y.send(b0.y.a1r, bE.aUK())
	}
}

function aSm() {
	this.aTD = function(a1o) {
		var aUT;
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dw), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), aUT = b7.aCx(), bD.a8(8, aUT[0]), bD.a8(8, aUT[1]), b0.y.send(a1o, bD.aC)
	}, this.aU9 = function(a1o, rI, aU8, aTr) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aTr), bD.a8(30, rI[0]), bD.a8(30, rI[1]), bD.a8(30, aU8), b0.y.send(a1o, bD.aC)
	}, this.aU7 = function(a1o, rI) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, rI), b0.y.send(a1o, bD.aC)
	}, this.eX = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.ud = function(id, value) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 3), bD.a8(6, id), bD.a8(30, value), b0.y.send(0, bD.aC)
	}, this.aCt = function(id, qT) {
		var f1 = Math.min(qT.length, 63);
		bD.a7(19 + 16 * f1), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, f1), bF.wg.wv(qT), b0.y.send(0, bD.aC)
	}, this.aUQ = function(aTl, qe) {
		bD.a7(7 + 26 * qe.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qe.length; aB++) bD.a8(16, qe[aB][0]), bD.a8(10, qe[aB][1]);
		b0.y.send(aTl, bD.aC)
	}, this.aTK = function(aUR, aUS) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aUR), bD.a8(12, aUS), b0.y.send(b0.y.a1y, bD.aC)
	}, this.aUL = function(username) {
		bD.a8(5, username.length), bF.wg.wv(username)
	}
}

function aTB() {
	var a1o, aNd, aUU, aUV = ["wss://", "/s50/", "/s51/", "/s52/"],
		aUW = 0;

	function aTC() {
		b0.y.aTC(a1o, aNd)
	}

	function aUa(e) {
		b0.a7F.aTM(a1o, new Uint8Array(e.data))
	}

	function aUb() {}

	function aTJ(e) {
		b0.y.aTJ(a1o, e)
	}
	this.dd = function(e9, aUX) {
		a1o = e9, aNd = aUX, e9 = l.dr ? "ws://localhost:" + (7130 + a1o) + "/" : aUV[0] + b0.y.aT0[a1o] + aUV[1 + l.ds], (aUU = new WebSocket(e9)).binaryType = "arraybuffer", aUU.onopen = aTC, aUU.onmessage = aUa, aUU.onclose = aTJ, aUU
			.onerror = aUb
	}, this.aUZ = function() {
		return aUU.readyState === aUU.CONNECTING
	}, this.eV = function() {
		return aUU.readyState === aUU.OPEN
	}, this.aT7 = function() {
		return aUW
	}, this.aTE = function() {
		aUW = 1
	}, this.aT9 = function() {
		return this.aUZ() || this.eV()
	}, this.aTA = function(aUX) {
		aNd = aUX
	}, this.aUB = function() {
		return aNd
	}, this.send = function(aC) {
		this.eV() && aUU.send(aC)
	}, this.close = function(aTG) {
		this.aT9() && (aUU.close(aTG), this.s3())
	}, this.s3 = function() {
		aUU.onopen = null, aUU.onmessage = null, aUU.onclose = null, aUU.onerror = null
	}
}

function dK() {
	var gap, aUc = !1,
		a7a = 0,
		i = 0,
		t8 = 0,
		canvas = null,
		ys = null,
		a3B = null;

	function aUe() {
		for (var aUk, aUi = 0, f1 = 0, eZ = Math.floor(i / 2), e8 = Math.floor(t8 / 2), aUj = 1.5 * Math.PI, aB = aD.xu; 0 <= aB; aB--) f1 += a3B[aB], 0 === a3B[aB] && aUi++;
		if (aUc = !1, ys.clearRect(0, 0, i, i), 0 < f1)
			if (aUi === aD.xu) {
				for (aB = aD.xu; 0 <= aB; aB--)
					if (0 < a3B[aB]) {
						! function(aB, eZ, e8) {
							ys.fillStyle = bg.aUr[bg.ki[aB]], ys.beginPath(), ys.arc(eZ, eZ, e8, 0, 2 * Math.PI), ys.fill()
						}(aB, eZ, e8);
						break
					}!
				function(eZ) {
					var fontSize = eZ / 3;
					ys.font = bA.qm.sb(1, fontSize), ys.fillStyle = bB.nu, ys.fillText("100%", eZ, eZ + .1 * fontSize)
				}(eZ)
			} else {
				for (aB = 0; aB <= aD.xu; aB++) 0 < a3B[aB] && (! function(aB, eZ, e8, aUj, aUk) {
					ys.fillStyle = bg.aUr[bg.ki[aB]], ys.beginPath(), ys.arc(eZ, eZ, e8, aUj, aUk), ys.lineTo(eZ, eZ), ys.fill()
				}(aB, eZ, e8, aUj, aUk = aUj + 2 * Math.PI * a3B[aB] / f1), function(eZ, e8, aUj, aUk) {
					var fS = (aUk - aUj) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e8 * Math.min(fS, .37);
					fontSize < 8 || (aUj = (aUj + aUk) / 2, aUk = (__fx.settings.detailedTeamPercentage ? (100 * fS).toFixed(2) : Math.floor(100 * fS + .5)) + "%", e8 *= .525 - Math.max(.6 * (fS - .7), 0), ys.font = bA.qm.sb(1, fontSize), ys
						.fillStyle = bB.nu, ys.fillText(aUk, eZ + Math.cos(aUj) * e8, eZ + Math.cos(aUj + 1.5 * Math.PI) * e8))
				}(eZ, e8, aUj, aUk), 0 !== aB && aUp(eZ, e8, aUj), aUj = aUk);
				aUp(eZ, e8, 1.5 * Math.PI)
			}!
		function(eZ, e8) {
			ys.beginPath(), ys.arc(eZ, eZ, e8, 0, 2 * Math.PI), ys.stroke()
		}(eZ, e8)
	}

	function aUp(eZ, e8, aUs) {
		ys.beginPath(), ys.moveTo(eZ, eZ), ys.lineTo(eZ + Math.cos(aUs) * e8, eZ + Math.cos(aUs + 1.5 * Math.PI) * e8), ys.stroke()
	}
	this.dd = function() {
		if (aD.hu) {
			a7a = 0, a3B = new Uint32Array(aD.xu + 1);
			for (var aB = aD.xu; 0 <= aB; aB--) a3B[aB] = 0;
			for (aB = al.kr - 1; 0 <= aB; aB--) a3B[bg.ez[al.kw[aB]]] += 1;
			this.resize()
		} else a3B = ys = canvas = null
	}, this.a8Y = function() {
		return i
	}, this.resize = function() {
		aD.hu && (i = Math.floor(.95 * (a0.a1.i9() && !aD.nN ? .18 * h.min : .13 * h.iA)), i = (i *= 1 + (.5 + .2 * a0.a1.i9()) * aD.nN) + i % 2, gap = Math.max(1, .015 * i), t8 = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (ys = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, ys.strokeStyle = bB.nu, bA.qm.textAlign(ys, 1), bA.qm.textBaseline(ys, 1), aUe())
	}, this.ks = function() {
		var dt, kt = this.ku();
		return bg.ki[kt] || (kt = function() {
			for (var kt = -1, aB = aD.xu; 1 <= aB; aB--)(-1 === kt || a3B[aB] > a3B[kt]) && (kt = aB);
			return kt
		}(), dt = ag.go[lw[0]], -1 !== kt && a3B[kt] > dt) ? a3B[kt] : dt
	}, this.a1b = function() {
		return a7a = 31, this.eU(), this.ku()
	}, this.ku = function() {
		for (var kt = 0, aB = aD.xu; 0 < aB; aB--) a3B[aB] > a3B[kt] && (kt = aB);
		return kt
	}, this.a8u = function() {
		return a3B[2] > 2 * a3B[1] || a3B[1] > 4 * a3B[2]
	}, this.kM = function(aUg) {
		for (var gT = 0, kw = al.kw, ez = bg.ez, f1 = al.kr, fe = bO.fe, aB = 0; aB < f1; aB++) {
			var gY = kw[aB];
			ez[gY] === aUg && (fe[gT++] = gY)
		}
		bO.fV[0] = gT
	}, this.kv = function(aUg) {
		for (var gT = 0, kw = al.kw, ez = bg.ez, f1 = al.kr, fe = bO.fe, aB = 0; aB < f1; aB++) {
			var gY = kw[aB];
			ez[gY] !== aUg && (fe[gT++] = gY)
		}
		bO.fV[0] = gT
	}, this.a44 = function() {
		for (var gT = 0, aB = aD.xu; 0 <= aB; aB--) gT += 0 < a3B[aB];
		return gT
	}, this.eU = function() {
		if (aD.hu && 32 <= ++a7a) {
			a7a = 0;
			for (var aB = aD.xu; 0 <= aB; aB--) a3B[aB] = 0;
			for (aB = al.kr - 1; 0 <= aB; aB--) a3B[bg.ez[al.kw[aB]]] += ag.go[al.kw[aB]];
			aUc = !0
		}
	}, this.mh = function() {
		aD.hu && aUc && aUe()
	}, this.vK = function() {
		aD.hu && (aD.nN ? vL.drawImage(canvas, bc.gap, bc.gap) : vL.drawImage(canvas, bc.gap, a8X + 2 * bc.gap))
	}
}

function da() {
	function aUy(f8, f1, fA, a0K, a9q, fR) {
		if (!(fA < 1 || a9q < fA))
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (a0K(ef)) return ef >> 2;
				f8 += fR
			}
		return -1
	}

	function aV2(fA, f1, f8, a0K, aUw, fR) {
		if (!(f8 < 1 || aUw < f8)) {
			f1 = Math.max(f1, 0);
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (a0K(ef)) return ef >> 2;
				fA += fR
			}
		}
		return -1
	}

	function aV6(iR, iS, aUt) {
		return -1 !== iS && (-1 === iR || bM.iT(iS, aUt) < bM.iT(iR, aUt)) ? iS : iR
	}
	this.hP = function(aUt) {
		return this.a0m(aUt, function(ef) {
			return ac.ew(ef)
		})
	}, this.hV = function(aUt) {
		return this.a0m(aUt, function(ef) {
			return ac.aHp(ef, aD.el)
		})
	}, this.a0m = function(aUt, a0K) {
		return function(aUt, aUu, a0K) {
			for (var hF = bM.f9(aUt), hH = bM.fB(aUt), aUw = bS.fC - 2, a9q = bS.fD - 2, aUx = -1, f4 = 0; f4 < aUu; f4++) {
				var a9p = Math.max(hF - f4, 1),
					aLx = Math.max(hH - f4, 1),
					yV = Math.min(hF + f4, aUw),
					yU = Math.min(hH + f4, a9q),
					iR = aUy(hF, yV - hF, hH - f4, a0K, a9q, 1),
					iS = aUy(hF - 1, hF - a9p - 1, hH - f4, a0K, a9q, -1),
					yV = aUy(hF, yV - hF, hH + f4, a0K, a9q, 1),
					a9p = aUy(hF - 1, hF - a9p - 1, hH + f4, a0K, a9q, -1),
					aV1 = aV2(hH, yU - hH - 1, hF - f4, a0K, aUw, 1),
					aV3 = aV2(hH - 1, hH - aLx - 2, hF - f4, a0K, aUw, -1),
					yU = aV2(hH, yU - hH - 1, hF + f4, a0K, aUw, 1),
					aLx = aV2(hH - 1, hH - aLx - 2, hF + f4, a0K, aUw, -1);
				if (aUx = aV6(aUx, iR, aUt), aUx = aV6(aUx, iS, aUt), aUx = aV6(aUx, yV, aUt), aUx = aV6(aUx, a9p, aUt), aUx = aV6(aUx, aV1, aUt), aUx = aV6(aUx, aV3, aUt), aUx = aV6(aUx, yU, aUt), 0 <= (aUx = aV6(aUx, aLx, aUt)) && f4 *
					f4 >= bM.iT(aUx, aUt)) return aUx
			}
			return -1
		}(aUt, bM.i7(), a0K)
	}
}

function d3() {
	function aV8(key) {
		var aS9;
		return "undefined" == typeof URLSearchParams || (aS9 = window.location.search, "string" != typeof(aS9 = new URLSearchParams(aS9).get(key))) || aS9.length < 1 ? null : aS9
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aV8("account");
				if (!value && !(value = aV8("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.t1, new t2(1e3, {
					t3: 0,
					sz: value,
					t0: 0
				})), 1
			}()) {
			var value = aV8("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1l = new URL(window.location.href);
		a1l.search = "";
		try {
			return history.replaceState(null, "", a1l.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aP1 = function(key, value) {
		if (0 === a0.id) try {
			var a1l = new URL(window.location.href),
				gY = a1l.searchParams;
			gY.set(key, value), a1l.search = gY.toString(), history.replaceState(null, "", a1l.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aVA, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a5G(0)
	}, this.value = function(gY) {
		return g[gY]
	}, this.aLp = function() {
		return bL.du(aVA - 1, 2)
	}, this.a5G = function(aLT) {
		aVA = 2 * aLT % 32768 + 1
	}, this.random = function() {
		return aVA = 167 * aVA % 32768
	}, this.jc = function(mp) {
		return bL.du(mp * this.random(), 32768)
	}, this.kD = function(gY) {
		return 0 !== gY && this.random() < this.value(gY)
	}, this.iy = function(fK, fL) {
		return fK + this.jc(fL - fK)
	}
}

function cz() {
	this.q6 = new aVB, this.a5Q = new aVC, this.aJ5 = new aVD, this.dd = function() {
		aD.h9 || this.q6.dd()
	}, this.eU = function() {
		aD.h9 || (this.q6.eU(), 3 !== t.t1) || bf.kI() % 15 != 5 && 2 !== aD.a0i || t.a5i().aSA()
	}, this.aSD = function() {
		0 === aD.a0i && aa.aGr(), aD.a5A.a5Y(), aD.data.canvas = null, b0.y.close(b0.y.a1y, 3257), b0.y.a1y = 0, aD.data.isReplay = 1, aD.a5E()
	}, this.aSC = function(qT) {
		var aB = qT.indexOf("=");
		return 0 <= aB ? qT.substring(aB + 1) : qT
	}, this.aSB = function(qT) {
		return "https://territorial.io/?replay=" + qT
	}
}

function aVB() {
	this.aVF = null, this.aVG = null, this.aVH = null, this.aVI = null, this.aVJ = null, this.aVK = null, this.a5P = "";
	var aVL = 0;
	this.dd = function() {
		this.aVF = [], this.aVG = [], this.aVH = [], this.aVI = [], this.aVJ = [0], this.aVK = [0], aVL = 0, this.a5P = ""
	}, this.q7 = function(id, fj, fl, fn) {
		aD.h9 || 2 === aD.a0i || (0 === this.aVJ[aVL] && (this.aVK[aVL] ? (this.aVJ.push(1), this.aVK.push(0), aVL++) : this.aVJ[aVL] = 1), this.aVF.push(id), this.aVG.push(fj), this.aVH.push(void 0 === fl ? 0 : fl), this.aVI.push(void 0 === fn ?
			0 : fn), this.aVK[aVL]++)
	}, this.eU = function() {
		0 === this.aVJ[aVL] ? this.aVK[aVL]++ : (this.aVJ.push(0), this.aVK.push(0), aVL++)
	}
}

function aVD() {
	var aVM = 0;

	function aVQ(qT, id) {
		aVM || (id ? 1 === id ? aN.a6h = L(475) + ": " + qT : t.u(4, 3, new v(L(476), qT, 1)) : t.u(4, 3, new v("⚠️ " + L(474), qT, 1)))
	}
	this.x0 = function(qT, aVN) {
		var iJ, qe;
		return aVM = aVN, bG.t4.ws(bG.t4.wq(bG.t4.wo(qT))), aN.a6h = "", !! function() {
			if (bH.size < 10) aVQ("File Too Small");
			else {
				var aVS = bH.pu(12),
					aUS = (aVS !== l.rVersion && aVQ("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aVS) + ("   Compatible at territorial.io/" + aVS), 1), bH.pu(12)),
					aVT = bH.pu(31);
				if (aVT !== bH.size) aVQ("Size Error: " + aVT + " " + bH.size);
				else if (function(j, aVS) {
						for (var gY = bH.aC, f1 = bH.size, aUS = aVS, aB = 3; aB < f1; aB++) aUS = aUS + gY[aB] & 4095;
						return aUS === j || (aVQ("Hash Error: " + aUS + " " + j + " " + f1), !1)
					}(aUS, aVS)) return 1
			}
			return
		}() && (iJ = bH, (qe = aD.data = new a59).mapType = iJ.pu(2), qe.mapProceduralIndex = iJ.pu(8), qe.mapRealisticIndex = iJ.pu(8), qe.mapSeed = iJ.pu(14), qe.mapName = iJ.aVV(5), 2 === qe.mapType && iJ.aVW(), qe.passableWater = iJ.pu(
			1), qe.passableMountains = iJ.pu(1), qe.playerCount = iJ.pu(10), qe.humanCount = iJ.pu(10), qe.selectedPlayer = iJ.pu(9), qe.gameMode = iJ.pu(1), qe.playerMode = iJ.pu(2), qe.battleRoyaleMode = iJ.pu(2), qe.numberTeams = iJ.pu(4),
			qe.isZombieMode = iJ.pu(1), qe.isContest = iJ.pu(1), qe.isReplay = iJ.pu(1), qe.elo = iJ.aVX(2, 14, 2), qe.colorsType = iJ.pu(1), qe.colorsPersonalized = iJ.pu(1), qe.colorsData = iJ.aVX(10, 18, 512), qe.selectableColor = iJ.pu(
			1), qe.teamPlayerCount = iJ.aVX(4, 10, 9), qe.neutralBots = iJ.pu(1), qe.botDifficultyType = iJ.pu(2), qe.botDifficultyValue = iJ.pu(4), qe.botDifficultyTeam = iJ.aVX(4, 4, 9), qe.botDifficultyData = iJ.aVX(10, 4, 512), qe
			.spawningType = iJ.pu(2), qe.spawningSeed = iJ.pu(14), qe.spawningData = iJ.aVX(11, 12, 1024), qe.selectableSpawn = iJ.pu(1), qe.playerNamesType = iJ.pu(2), qe.playerNamesData = iJ.aVY(10, 5, 512), qe.selectableName = iJ.pu(1), qe
			.aIncomeType = iJ.pu(2), qe.aIncomeValue = iJ.pu(8), qe.aIncomeData = iJ.aVX(10, 8, 512), qe.tIncomeType = iJ.pu(2), qe.tIncomeValue = iJ.pu(8), qe.tIncomeData = iJ.aVX(10, 8, 512), qe.iIncomeType = iJ.pu(2), qe.iIncomeValue = iJ
			.pu(8), qe.iIncomeData = iJ.aVX(10, 8, 512), qe.sResourcesType = iJ.pu(2), qe.sResourcesValue = iJ.pu(11), qe.sResourcesData = iJ.aVX(10, 11, 512), !! function() {
				var iJ = bH,
					x1 = iJ.pu(5),
					aVZ = iJ.pu(30),
					aVa = iJ.pu(30);
				if (aVZ + aVa > 8 * iJ.size) return void aVQ("Corrupted File");
				return function(f1) {
						var aVd = new Uint8Array(f1),
							aVe = new Uint16Array(f1),
							aVf = new Uint32Array(f1),
							aVg = new Uint32Array(f1);
						b9.q6.aVF = aVd, b9.q6.aVG = aVe, b9.q6.aVH = aVf, b9.q6.aVI = aVg;
						for (var aB = 0; aB < f1; aB++) {
							var id = bH.pu(4);
							aVd[aB] = id, aVe[aB] = bH.pu(9), 0 === id ? aVf[aB] = bH.pu(22) : 1 === id ? (aVf[aB] = bH.pu(10), aVg[aB] = bH.pu(10)) : 2 === id ? (aVf[aB] = bH.pu(10), aVg[aB] = bH.pu(9)) : 3 === id ? (aVf[aB] = bH.pu(10),
								aVg[aB] = bH.pu(27)) : 4 === id ? (aVf[aB] = bH.pu(10), aVg[aB] = bH.pu(16)) : 5 === id || 6 === id ? aVf[aB] = bH.pu(10) : 7 === id ? aVf[aB] = bH.pu(1) : 10 === id && (aVf[aB] = bH.pu(20), aVg[aB] = bH
								.pu(22))
						}
					}(aVZ),
					function(f1, x1) {
						var aVJ = new Uint8Array(f1),
							aVK = new Array(f1);
						aVK.fill(0), b9.q6.aVJ = aVJ, b9.q6.aVK = aVK;
						for (var aB = 0; aB < f1; aB++) aVJ[aB] = bH.pu(1), aVK[aB] = bH.pu(x1)
					}(aVa, x1), 1
			}()) && (bH.e9 < 8 * bH.size - 13 || bH.e9 > 8 * bH.size ? (aVQ("Out Of Bounds Error: " + bH.e9 + " " + 8 * bH.size), !1) : (b9.q6.a5P = qT, 2 !== aD.data.mapType || (aVQ("Load base64 image...", 2), aVN)))
	}, this.aJ6 = function(aIW, aVR) {
		var a3W = document.createElement("canvas"),
			i2 = a3W.getContext("2d");
		if (a3W.width = aIW.width, a3W.height = aIW.height, i2.drawImage(aIW, 0, 0), aD.data.canvas = a3W, aVM || aVR) return aD.a0i ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aSD()
	}
}

function aVC() {
	this.a0A = function() {
		var x1 = function() {
				for (var aVK = b9.q6.aVK, f1 = aVK.length, max = 0, aB = 0; aB < f1; aB++) max = Math.max(max, aVK[aB]);
				return x8(Math.max(max, 1))
			}(),
			i = (qe = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e9 += 43, i.a8(2, qe.mapType), i.a8(8, qe.mapProceduralIndex), i.a8(8, qe.mapRealisticIndex), i.a8(14, qe.mapSeed), i.aVn(qe.mapName, 5), 2 === qe.mapType && i.aVo(qe.canvas),
				i.a8(1, qe.passableWater), i.a8(1, qe.passableMountains), i.a8(10, qe.playerCount), i.a8(10, qe.humanCount), i.a8(9, qe.selectedPlayer), i.a8(1, qe.gameMode), i.a8(2, qe.playerMode), i.a8(2, qe.battleRoyaleMode), i.a8(4, qe
					.numberTeams), i.a8(1, qe.isZombieMode), i.a8(1, qe.isContest), i.a8(1, qe.isReplay), i.dk(qe.elo, 2, 14), i.a8(1, qe.colorsType), i.a8(1, qe.colorsPersonalized), i.dk(qe.colorsData, 10, 18), i.a8(1, qe.selectableColor), i.dk(
					qe.teamPlayerCount, 4, 10), i.a8(1, qe.neutralBots), i.a8(2, qe.botDifficultyType), i.a8(4, qe.botDifficultyValue), i.dk(qe.botDifficultyTeam, 4, 4), i.dk(qe.botDifficultyData, 10, 4), i.a8(2, qe.spawningType), i.a8(14, qe
					.spawningSeed), i.dk(qe.spawningData, 11, 12), i.a8(1, qe.selectableSpawn), i.a8(2, qe.playerNamesType), i.aVp(qe.playerNamesData, 10, 5), i.a8(1, qe.selectableName), i.a8(2, qe.aIncomeType), i.a8(8, qe.aIncomeValue), i.dk(qe
					.aIncomeData, 10, 8), i.a8(2, qe.tIncomeType), i.a8(8, qe.tIncomeValue), i.dk(qe.tIncomeData, 10, 8), i.a8(2, qe.iIncomeType), i.a8(8, qe.iIncomeValue), i.dk(qe.iIncomeData, 10, 8), i.a8(2, qe.sResourcesType), i.a8(11, qe
					.sResourcesValue), i.dk(qe.sResourcesData, 10, 11), ! function(x1) {
					var i = bE,
						aVF = b9.q6.aVF,
						fj = b9.q6.aVG,
						fl = b9.q6.aVH,
						fn = b9.q6.aVI,
						f1 = aVF.length;
					i.a8(5, x1), i.a8(30, f1), i.a8(30, b9.q6.aVK.length);
					for (var aB = 0; aB < f1; aB++) {
						var eZ = aVF[aB];
						i.a8(4, eZ), i.a8(9, fj[aB]), 0 === eZ ? i.a8(22, fl[aB]) : 1 === eZ ? (i.a8(10, fl[aB]), i.a8(10, fn[aB])) : 2 === eZ ? (i.a8(10, fl[aB]), i.a8(9, fn[aB])) : 3 === eZ ? (i.a8(10, fl[aB]), i.a8(27, fn[aB])) : 4 === eZ ? (i
							.a8(10, fl[aB]), i.a8(16, fn[aB])) : 5 === eZ || 6 === eZ ? i.a8(10, fl[aB]) : 7 === eZ ? i.a8(1, fl[aB]) : 10 === eZ && (i.a8(20, fl[aB]), i.a8(22, fn[aB]))
					}
				}(x1), ! function(x1) {
					for (var i = bE, aVJ = b9.q6.aVJ, aVK = b9.q6.aVK, f1 = aVJ.length, aB = 0; aB < f1; aB++) i.a8(1, aVJ[aB]), i.a8(x1, aVK[aB])
				}(x1), bE.e9),
			qe = bL.du(i - 1, 6) + 1,
			x1 = (bD.aTw(6 * qe) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e9 = 24, i.a8(31, i.g.length), i.e9 = 12, i.a8(12, function() {
					for (var g = bE.g, f1 = g.length, aUS = l.rVersion, aB = 3; aB < f1; aB++) aUS = aUS + g[aB] & 4095;
					return aUS
				}())
			}(), bH.dd(bE.g), bF.t4.t5(bF.t4.t6(qe)));
		return bH.uO(), bE.dd(), x1
	}
}

function cp() {
	var eZ, bu = !1,
		aVr = !1,
		aVs = -1e4,
		aVt = -1,
		aVu = 0;

	function resize(aVy) {
		eZ = 0, ab.tT() && (aVw(aVy) || bu) && (bu = !1, bc.resize(), bW.aCS.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a0i ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a9f()) : (aa.aGt(), aa.aGu()), bf.dl = !0)
	}

	function aVv(fS) {
		return fS && 128 < fS ? Math.floor(fS) : 128
	}

	function aVw(aVy) {
		var i, j, aW0, t8, a93;
		if (!(0 < h.sj)) return t8 = aVv(document.documentElement.clientWidth), a93 = aVv(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = t8, j = a93, aW0 = 0 !== a0.id || i < j ?
			700 : 1200, aW0 = Math.min(aW0 / ((i + j) / 2), 1), aW0 = 0 === bj.eN.data[1].value ? 2 * aW0 / 3 : Math.min(aW0 + (bj.eN.data[1].value - 1) * (1 - aW0) / 2, 1), h.k = (window.devicePixelRatio || 1) * aW0, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aVy && !aVr ? (aVr = !0, t.removeChild(document.body, a2B)) : aVr && (aVr = !1, document.body.appendChild(a2B)), i = Math.floor(.5 + t8 * h.k), j = Math.floor(.5 + a93 * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aC4(i, j), h.max = a6w(i, j), h.iA = bL.du(i + j, 2), h.vH = i / j, a2B.width = i, a2B.height = j, a2B.style.width = t8 + "px", a2B.style.height = a93 + "px", aVt = bf.eQ + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iA = 0, this.vH = 1, this.k = 1, this.sj = 0, this.de = function() {
		this.i = aVv(document.documentElement.clientWidth) + 2, this.j = aVv(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		eZ = 1, a2B = document.getElementById("canvasA"), 2 === a0.id && (a2B.style.webkitUserSelect = "none"), (vL = a2B.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aVw(0)
	}, this.eU = function() {
		50 <= ++eZ && resize(0), -1 === aVt || bf.eQ < aVt || (aVt = -1, 2e3 * ++aVu >= bf.eQ + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(ja) {
		bu = !0, resize(ja)
	}, this.a2q = function() {
		aVs + 1e3 > bf.eQ || (aVs = bf.eQ, resize(0))
	}
}

function dH() {
	this.aU5 = new aW2, this.a1X = new aW3, this.aUM = new aW4
}

function aW4() {
	this.pu = function() {
		return 69
	}, this.a0A = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aW3() {
	this.a1Y = function() {
		for (var gY, f1 = al.kr, a0W = al.kw, a1H = ag.a1H, a8q = this.aIF(), aB = 0; aB < f1; aB++) gY = a0W[aB], bA.gM.ji(gY) || (a1H[gY] = a8q);
		var qB = ag.qB,
			jO = ag.jO,
			jP = ag.jP,
			a1F = ag.a1F,
			f1 = aD.kL;
		for (aB = 0; aB < f1; aB++)(0 === a1F[aB] || jP[aB] < 1 || 2 * qB[aB] > 3 * (jO[aB] + jP[aB])) && (a1H[aB] = 0);
		var a1V = 0;
		for (aB = 0; aB < f1; aB++) a1V += 0 < a1H[aB];
		return a1V
	}, this.aIF = function() {
		return Math.min(65535, bf.kI())
	}
}

function aW2() {
	function aW8(g, fS, hs) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fS >> (aB + hs) % 30 & 1)) % 256
	}
	this.eU = function(aW5, aW6) {
		var g = new Uint8Array(256);
		return function(g, aW5, aW6) {
				var aB, aWA = 3 + (4 + aW5) % 32768,
					aWB = 12 + aW6 % 32768,
					aWC = 17 + ((aW5 & aW6) + (aW5 | aW6) + aW5) % 32768;
				for (aB = 0; aB < 256; aB++) aWA = 1 + aWA * aWB % aWC, g[aB] = aWA % 256
			}(g, aW5, aW6), aW8(g, aW5, 2), aW8(g, aW6, 7),
			function(g) {
				var aB, fS, e9 = 0;
				for (aB = 0; aB < 3e4; aB++) fS = g[e9], g[e9] = (fS + aB + g[(e9 + aB) % 256]) % 256, e9 = (fS + aB + e9 + (fS & e9)) % 256
			}(g),
			function(g) {
				var aB, a93 = 1,
					tq = 1;
				for (aB = 0; aB < 256; aB += 2) a93 = (1 + a93) * (g[aB] + 1) % 1073741824, tq = (1 + tq) * (g[aB + 1] + 1) % 1073741824;
				return [a93, tq]
			}(g)
	}, this.aU6 = function(aWD, aWE, aWF, result) {
		for (var gT = 1 << aWD, aB = 0; aB < gT; aB++)
			if (this.aWG(aB, aWE, aWF) === result) return aB;
		return 0
	}, this.aWG = function(aWH, aWE, aWF) {
		for (var y3 = aWE + aWH, yC = aWF + aWH, fS = y3 + yC & 2147483647, fK = 1; fK <= 16; fK++) fS = (fS = (fS ^ fS >> fK) >>> 1 + (3 & y3)) * (7 + (1023 & (y3 | yC))) & 1073741823, yC >>= 1 + (1 & (y3 >>= 1 + (1 & (fS += 65535 & yC))));
		return fS &= 1073741823
	}
}

function cm() {
	var aWI, aWJ, iE, aWK;
	this.dd = function() {
		var aB, f8, fA, aUN, aWL, i, j, ys, hz, xI, fS, gY, fH, fK, aWO;
		if (function() {
				if (iE = !0, aWK = "rgb(" + bS.xG[0] + "," + bS.xG[1] + "," + bS.xG[2] + ")", bS.aLc(bS.eh)) return 1;
				return iE = !1, 0
			}()) aWJ = null;
		else {
			for (aWI = bL.du(96, 4), aWL = 1 === bS.eh ? (aUN = 0, 160) : (aUN = 128, 32), aWK = "rgb(" + aUN + "," + aUN + "," + aUN + ")", aWJ = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aWJ[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.fC : aWI, j = aB % 2 == 0 ? aWI : bS.fD + 2 * aWI, aWJ[aB].width = i, aWJ[aB].height = j, xI = (hz = (ys = aWJ[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fA = aWI - 1; 0 <= fA; fA--)
						for (fS = aWL + Math.floor((fA + 1) * (aUN - aWL) / (aWI + 1)), f8 = i - 1; 0 <= f8; f8--) xI[gY = 4 * ((0 === aB ? aWI - fA - 1 : fA) * i + f8)] = fS, xI[gY + 1] = fS, xI[gY + 2] = fS, xI[gY + 3] = 255;
				else {
					for (f8 = aWI - 1; 0 <= f8; f8--)
						for (fS = aWL + Math.floor((f8 + 1) * (aUN - aWL) / (aWI + 1)), fA = j - 1 - aWI; aWI <= fA; fA--) xI[gY = 4 * (fA * i + (3 === aB ? aWI - f8 - 1 : f8))] = fS, xI[gY + 1] = fS, xI[gY + 2] = fS, xI[gY + 3] = 255;
					for (fK = 1; 0 <= fK; fK--)
						for (f8 = aWI - 1; 0 <= f8; f8--)
							for (fA = aWI - 1; 0 <= fA; fA--) fH = (Math.pow(f8 * f8 + fA * fA, .5) + 1) / (aWI + 1), fS = aWL + Math.floor((1 < fH ? 1 : fH) * (aUN - aWL)), xI[gY = 4 * ((0 === fK ? aWI - fA - 1 : fA + fK * (j - aWI)) * i + (
								1 === aB ? f8 : aWI - f8 - 1))] = fS, xI[gY + 1] = fS, xI[gY + 2] = fS, xI[gY + 3] = 255
				}
				ys.putImageData(hz, 0, 0)
			}
			aWO = aWL, bS.xB.fillStyle = "rgb(" + aWO + "," + aWO + "," + aWO + ")", bS.xB.fillRect(0, 0, bS.fC, 1), bS.xB.fillRect(0, bS.fD - 1, bS.fC, 1), bS.xB.fillRect(0, 0, 1, bS.fD), bS.xB.fillRect(bS.fC - 1, 0, 1, bS.fD)
		}
	}, this.ym = function() {
		var fK = iE ? 0 : -aWI;
		aNM(fK, fK, bS.fC - 2 * fK, bS.fD - 2 * fK, ba.aWP, ba.aWQ, ba.aWR, ba.aWS) || (vL.fillStyle = aWK, vL.fillRect(0, 0, h.i, h.j))
	}, this.vK = function() {
		iE || (aNL(0, -aWI, bS.fC, aWI, ba.aWP, ba.aWQ, ba.aWR, ba.aWS) && vL.drawImage(aWJ[0], ba.aWT, ba.aWU - aWI), aNL(bS.fC, -aWI, aWI, bS.fD + 2 * aWI, ba.aWP, ba.aWQ, ba.aWR, ba.aWS) && vL.drawImage(aWJ[1], ba.aWT + bS.fC, ba.aWU - aWI),
			aNL(0, bS.fD, bS.fC, aWI, ba.aWP, ba.aWQ, ba.aWR, ba.aWS) && vL.drawImage(aWJ[2], ba.aWT, ba.aWU + bS.fD), aNL(-aWI, -aWI, aWI, bS.fD + 2 * aWI, ba.aWP, ba.aWQ, ba.aWR, ba.aWS) && vL.drawImage(aWJ[3], ba.aWT - aWI, ba.aWU - aWI))
	}
}

function d6() {
	this.aID = new aWV, this.yp = new aWW, this.y = new aWX, this.im = new aWY, this.aWO = new aWZ, this.mG = new aWa, this.k9 = new aWb, this.l8 = new aWc, this.aWd = new aWe, this.aWf = new aWg, this.mR = new aWh, this.ha = new aWi, this.lh =
		new aWj, this.lA = new aWk, this.hd = new aWl, this.mK = new aWm, this.qJ = new aWn, this.dd = function() {
			this.lh.dd(), this.yp.dd(), this.y.dd(), this.im.dd(), this.aWO.dd(), this.aWf.dd(), this.mK.dd()
		}, this.vK = function() {
			this.aWf.vK(), this.yp.vK()
		}
}

function aWb() {
	this.eU = function(player) {
		return !!bN.mR.mS(player) && !(bN.y.kP[player] >= Math.max(3 * ao.performance.lZ, aE.kZ[aE.hj[player]]) || !bA.gM.mT(player, aE.kX[aE.hj[player]], 32, 0)) && (aW.aBr() ? function(player) {
			var aWq = bN.lA.aBu(),
				f1 = aWq.length;
			if (0 === f1) return !1;
			aWq = aWq[ay.jc(f1)], f1 = bN.y.mE[aWq];
			if (bN.mK.mL(player, f1)) return !1;
			return !! function(player, mN) {
				var mN = bM.ik(bN.y.mQ[mN]),
					hF = bM.f9(mN),
					mN = bM.fB(mN),
					nK = ag.it[player],
					nL = ag.iv[player],
					nX = ag.iu[player],
					player = ag.iw[player],
					nX = Math.max(hF - nX, nK - hF),
					nK = Math.max(mN - player, nL - mN);
				return nX < 100 && nK < 100
			}(player, aWq) && !!bN.hd.qI(player, f1, 1) && (bA.gM.mV(player), bN.y.mW(player), !0)
		}(player) : !!(ao.jC.eU(player) || ao.j1.eU(player) || ao.j3.eU(player)) && (function(player) {
			bO.fc[1] = 4, bA.gM.mV(player), bN.y.mW(player)
		}(player), !0))
	}
}

function aWm() {
	var aWt = 0,
		aWu = null;
	this.dd = function() {
		null === aWu && (aWu = new Uint16Array(2 * bN.y.kZ)), aWt = 0
	}, this.eY = function(aWv, mK) {
		var aWw = aWu;
		aWw[aWt++] = aWv, aWw[aWt++] = mK
	}, this.mL = function(player, mJ) {
		for (var aWw = aWu, f1 = aWt, aB = 0; aB < f1; aB += 2)
			if (aWw[aB] === mJ && bN.lA.aWx(aWw[aB + 1]) && player === bN.y.mF[bO.fc[2]] >> 3) return !0;
		return !1
	}, this.aWy = function(aWz) {
		var mG = bN.y.mC[aWz];
		if (!(mG < 64)) {
			for (var mJ = bN.y.mE[aWz], aWw = aWu, f1 = aWt, aB = f1 - 2; 0 <= aB; aB -= 2)
				if (aWw[aB] === mJ) {
					{
						aX4 = void 0;
						var aX4 = aWw[aB + 1];
						bN.lA.aWx(aX4) && bN.mK.aXC(bO.fc[2])
					}
					aWw[aB] = aWw[f1 - 2], aWw[aB + 1] = aWw[f1 - 1], f1 -= 2
				} aWt = f1
		}
	}, this.aX1 = function(aX2, aX3) {
		for (var aX4 = bN.y.mE[aX2], mJ = -1, aWw = aWu, f1 = aWt, aB = 1; aB < f1; aB += 2)
			if (aWw[aB] === aX4) {
				mJ = aWw[aB - 1];
				break
			} if (-1 === mJ) return !1;
		if (!bN.lA.aWx(mJ)) return !1;
		var aWz = bO.fc[2],
			lg = bN.y.mD[aWz];
		if (aX3 === lg[lg.length - 1]) bN.y.mD[aX2] = bN.lh.aX5(bN.y.mD[aX2], bN.lh.lp(lg));
		else {
			var aX6 = bN.lA.aX7(lg, aX3);
			if (-1 === aX6) return !1;
			var aX8 = bN.y.mP[aWz];
			aX6 === aX8 ? (aWz = bM.ik(bN.y.mQ[aWz]), bN.y.mD[aX2] = bN.lh.aXA(bN.y.mD[aX2], lg, aX6, aX3, bM.iQ(lg[aX6], aX3) > bM.iQ(lg[aX6], aWz))) : bN.y.mD[aX2] = bN.lh.aXA(bN.y.mD[aX2], lg, aX6, aX3, aX8 < aX6)
		}
		return !0
	}, this.aXC = function(aXD) {
		var lg, lG = bN.y,
			mG = lG.mC[aXD];
		return mG % 64 != 5 && (lg = lG.mD[aXD], lG.aXE[aXD] = 65535 - lG.aXE[aXD], lG.mP[aXD] = lg.length - lG.mP[aXD] - 2, lG.mD[aXD] = bN.lh.lp(lg), lG.mC[aXD] = mG - mG % 64 + 5, !0)
	}
}

function aWh() {
	this.mS = function(player) {
		return !!aD.data.passableWater && bN.y.mB !== bN.y.kZ && bN.y.kP[player] !== bN.y.aXF && 0 !== ag.gh[player].length
	}, this.qE = function(aUt) {
		var mG = bO.fc[1];
		return !(4 <= mG || !bN.lA.aXG(bM.er(aUt))) && ac.ew(bM.er(bM.ip(aUt, mG)))
	}
}

function aWV() {
	this.aIE = function(player) {
		for (var a8G = bN.y.a8G, tL = player << 3, aB = tL + bN.y.kP[player] - 1; tL <= aB; aB--) this.aXH(a8G[aB])
	}, this.aXH = function(aXI) {
		var y = bN.y,
			aXJ = y.mB - 1,
			aXK = y.mF[aXI],
			aXL = y.aXM[aXI],
			aXN = y.mQ[aXI];
		y.mB = aXJ, y.mF[aXI] = y.mF[aXJ], y.mQ[aXI] = y.mQ[aXJ], y.aXE[aXI] = y.aXE[aXJ], y.a7E[aXI] = y.a7E[aXJ], y.aXM[aXI] = y.aXM[aXJ], y.mE[aXI] = y.mE[aXJ], y.mC[aXI] = y.mC[aXJ], y.aXO[aXI] = y.aXO[aXJ], y.mD[aXI] = y.mD[aXJ], y.mP[aXI] =
			y.mP[aXJ], y.a8G[y.mF[aXI]] = aXI,
			function(aUs) {
				var player = aUs >> 3,
					y = bN.y,
					f1 = y.kP[player] - 1,
					aXR = (player << 3) + f1;
				y.kP[player] = f1, aXR !== aUs && (y.a8G[aUs] = y.a8G[aXR], y.mF[y.a8G[aUs]] = aUs)
			}(aXK), bN.im.im[bM.il(y.mQ[aXI])][y.aXM[aXI]] = aXI, aXJ = bM.il(aXN), aXK = aXL, aXJ = bN.im.im[aXJ], y = aXJ.pop(), aXK !== aXJ.length && (aXJ[aXK] = y, bN.y.aXM[y] = aXK)
	}
}

function aWW() {
	var aXT, aXU = 8,
		aXV = null;

	function aXa(xI, en, e9) {
		en *= 4;
		xI[en] = 255, xI[1 + en] = 255, xI[2 + en] = e9, xI[3 + en] = 255
	}

	function aXc(i2, aWK) {
		var f8, fA, iK, en, aXe, aXf, hw = aXU,
			hz = bA.qm.getImageData(i2, hw, hw),
			xI = hz.data,
			lG = (hw >> 1) - .5,
			aXh = bA.qu.a34(aWK, .5);
		for (bA.qu.a36(aWK, aXh, 300) || bA.qu.a38(aWK, 100), fA = 0; fA < hw; fA++)
			for (f8 = 0; f8 < hw; f8++) aXf = (hw - 1.5) * (hw - 1.5) / 4, xI[en = 4 * (fA * hw + f8)] = (aXe = (iK = (iK = f8 - lG) * iK + (iK = fA - lG) * iK) <= (hw - 4.5) * (hw - 4.5) / 4 ? aXh : aWK)[0], xI[1 + en] = aXe[1], xI[2 + en] = aXe[2],
				xI[3 + en] = aXf < iK ? 0 : 255;
		i2.putImageData(hz, 0, 0)
	}
	this.dd = function() {
		var e9, hw, a3W, i2, hz, xI;
		(aXT = aXT || new Array(aD.ey)).fill(null), e9 = 255, hw = aXU + 4, a3W = bA.qm.x7(hw, hw), i2 = bA.qm.getContext(a3W, !0), hz = bA.qm.getImageData(i2, hw, hw), aXa(xI = hz.data, hw + 1, e9), aXa(xI, hw + 2, e9), aXa(xI, 2 * hw + 1, e9),
			aXa(xI, 2 * hw - 3, e9), aXa(xI, 2 * hw - 2, e9), aXa(xI, 3 * hw - 2, e9), aXa(xI, hw * (hw - 3) + 1, e9), aXa(xI, hw * (hw - 2) + 1, e9), aXa(xI, hw * (hw - 2) + 2, e9), aXa(xI, hw * (hw - 2) - 2, e9), aXa(xI, hw * (hw - 1) - 3, e9),
			aXa(xI, hw * (hw - 1) - 2, e9), i2.putImageData(hz, 0, 0), aXV = a3W,
			function() {
				if (aD.hu)
					for (var a3W = new Array(bg.ki.length), f1 = aD.ey, aXY = aXT, aBF = bg.aBF, aB = 0; aB < f1; aB++) {
						var a5y = aBF[aB];
						a3W[a5y] || (a3W[a5y] = function(a5y) {
							var a3W = bA.qm.x7(aXU, aXU),
								i2 = bA.qm.getContext(a3W, !0),
								g = bO.fZ;
							return g.set(bg.aXd[a5y]), aXc(i2, g), a3W
						}(a5y)), aXY[aB] = a3W[a5y]
					}
			}()
	}, this.vK = function() {
		var aB, player, aXi, aNU, hj, iJ, aXk, aXm, aXn, mQ = bN.y.mQ,
			mF = bN.y.mF,
			a7E = bN.y.a7E,
			aXO = bN.y.aXO,
			aXo = aXT,
			aXp = aD.el,
			f1 = bN.y.mB,
			aXq = h.i,
			aXr = h.j,
			aXs = bS.fC << 4,
			eq = iB,
			ef = eq / aXU,
			nK = ib / eq,
			nL = ic / eq,
			iK = (aXq + ib) / eq - nK,
			iN = (aXr + ic) / eq - nL,
			i2 = vL;
		for (i2.imageSmoothingEnabled = eq < 9, bA.qm.textAlign(i2, 1), bA.qm.textBaseline(i2, 1), aB = 0; aB < f1; aB++) player = mF[aB] >> 3, hj = a7E[aB], aXi = .9 + .1 * Math.log10(hj), aNU = (iJ = mQ[aB]) % aXs / 16 - aXi, iJ = aXr * (Math
			.floor(iJ / aXs) / 16 - aXi - nL) / iN, aXk = -2 * (aXn = eq * aXi) * (1 + (aXm = +(player === aXp)) / 8), aXm = aXm * aXn / 4, (aXn = aXq * (aNU - nK) / iK) < aXk || iJ < aXk || aXq + aXm < aXn || aXr + aXm < iJ || (aNU = 2 *
			aXi * ef, aXk = aXi * eq, null === (aXm = aXo[player]) && (aXo[player] = aXm = function(player) {
				var a3W = bA.qm.x7(aXU, aXU);
				return aXc(bA.qm.getContext(a3W, !0), ac.a7r(player)), a3W
			}(player)), player === aXp && (i2.setTransform(aNU, 0, 0, aNU, aXn - 2 * aNU, iJ - 2 * aNU), i2.drawImage(aXV, 0, 0)), i2.setTransform(aNU, 0, 0, aNU, aXn, iJ), i2.drawImage(aXm, 0, 0), (aXi = Math.floor(function(hj) {
				if (hj < 1e3) return .42;
				if (hj < 1e4) return .34;
				if (hj < 1e6) return .26;
				if (hj < 1e8) return .19;
				return .15
			}(hj) * aXk)) < 6) || (i2.setTransform(1, 0, 0, 1, 0, 0), i2.fillStyle = aXO[aB] ? bB.oS : bB.nu, i2.font = bA.qm.sb(1, aXi), i2.fillText(bA.rl.zz(hj), aXn + aXk, iJ + aXk + .1 * aXi));
		i2.imageSmoothingEnabled = !1, i2.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aWg() {
	var aXv;
	this.dd = function() {
		if (aD.hu) {
			var hq = 1 - aD.xv;
			aXv = new Array(bg.ki.length);
			for (var aB = aD.xu - 1; 0 <= aB; aB--) {
				var a5y = bg.ki[aB + hq];
				aXv[a5y] = bP.y.aXx(20, bg.aXy[a5y])
			}
			9 === aD.kd && (aXv[1] = bP.y.aXx(20, bg.aXy[1]))
		} else aXv = [bP.y.aXx(20, bg.aXy[7])]
	}, this.vK = function() {
		var ne = iB;
		if (!(5 <= ne)) {
			var aXq = h.i,
				aXr = h.j,
				nK = ib / ne,
				nL = ic / ne,
				nX = (aXq + ib) / ne,
				nY = (aXr + ic) / ne,
				gZ = -20 * ne,
				aY0 = .5 * gZ,
				aXs = bS.fC << 4,
				f1 = bN.y.mB,
				mQ = bN.y.mQ,
				mF = bN.y.mF,
				aBF = bg.aBF,
				a3W = aXv,
				i2 = vL;
			3 < ne && (i2.globalAlpha = .5 * (5 - ne));
			for (var aB = 0; aB < f1; aB++) {
				var iJ = mQ[aB],
					f8 = aXq * (iJ % aXs / 16 - nK) / (nX - nK) + aY0,
					iJ = aXr * (Math.floor(iJ / aXs) / 16 - nL) / (nY - nL) + aY0;
				aXq < f8 || aXr < iJ || f8 < gZ || iJ < gZ || (i2.setTransform(ne, 0, 0, ne, f8, iJ), i2.drawImage(a3W[aBF[mF[aB] >> 3]], 0, 0))
			}
			i2.globalAlpha = 1, i2.setTransform(ne, 0, 0, ne, 0, 0)
		}
	}
}

function aWk() {
	this.aY3 = function(player, id) {
		for (var aY4 = ag.gh[player], f1 = aY4.length, aB = 0; aB < f1; aB++)
			if (bM.iC(aY4[aB], id)) return !0;
		return !1
	}, this.aY5 = function(player, en) {
		for (var iS, aY6, ef, aY4 = ag.gh[player], f1 = aY4.length, i = bS.fC, aY8 = bM.f9(en), aY9 = bM.fB(en), f7 = -1, min = bS.fC * bS.fC + bS.fD * bS.fD, id = ac.ej(bM.er(en)), aB = 0; aB < f1; aB++)(aY6 = (aY6 = aY8 - (iS = (ef = aY4[
			aB]) >> 2) % i) * aY6 + (aY6 = aY9 - ~~((.5 + iS) / i)) * aY6) < min && bM.iC(ef, id) && (min = aY6, f7 = iS);
		return f7
	}, this.lB = function(iR, iS) {
		for (var id = ac.ej(bM.er(iS)), iD = bM.i5, ef = bM.er(iR), aYA = -1, aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			ac.iE(eq) && ac.ej(eq) === id && (-1 === aYA || bM.iT(bM.ep(eq), iS) < bM.iT(aYA, iS)) && (aYA = bM.ep(eq))
		}
		return aYA
	}, this.lk = function(player, en) {
		for (var iD = bM.i5, ef = bM.er(en), aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			if (ac.ga(eq) && ac.yk(player, eq)) return !0
		}
		return !1
	}, this.ll = function(player, en) {
		for (var iD = bM.i5, ef = bM.er(en), aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			if (ac.es(eq)) return !0;
			if (ac.ga(eq)) {
				eq = ac.et(eq);
				if (player !== eq && bs.eu(player, eq)) return !0
			}
		}
		return !1
	}, this.mH = function(en) {
		for (var iD = bM.i5, ef = bM.er(en), aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			if (ac.ga(eq)) {
				eq = ac.et(eq);
				if (bA.gM.ji(eq)) return eq
			}
		}
		return -1
	}, this.aXG = function(ef) {
		if (ac.iE(ef))
			for (var iD = bM.i5, aB = 0; aB < 4; aB++)
				if (ac.ew(ef + iD[aB])) return !0;
		return !1
	}, this.nJ = function(player, id) {
		for (var tL = player << 3, tM = tL + bN.y.kP[player], mE = bN.y.mE, a8G = bN.y.a8G, aB = tL; aB < tM; aB++) {
			var a8H = a8G[aB];
			if (mE[a8H] === id) return a8H
		}
		return -1
	}, this.nO = function(player) {
		return 0 === bN.y.kP[player] ? -1 : bN.y.a8G[player << 3]
	}, this.a6G = function(la, lb) {
		var f1 = bN.y.mB;
		if (f1 < 1) return -1;
		for (var mQ = bN.y.mQ, aYB = 80, aPm = -1, aB = 0; aB < f1; aB++) {
			var fH = bM.iG(la, lb, mQ[aB]);
			fH < aYB && (aYB = fH, aPm = aB)
		}
		return function(aB, la, lb) {
			if (aB < 0) return;
			var aYI = bN.y.mQ[aB],
				aYJ = bM.iM(aYI),
				aYI = bM.iP(aYI),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a7E[aB]));
			return aB = Math.max(aB, bM.ie(bA.qm.tQ(.02, 1.7))), bL.aNT(bM.iL(la), bM.iO(lb), aYJ, aYI, aB)
		}(aPm, la, lb) ? aPm : -1
	}, this.aWx = function(nH) {
		for (var f1 = bN.y.mB, mE = bN.y.mE, aB = 0; aB < f1; aB++)
			if (mE[aB] === nH) return bO.fc[2] = aB, !0;
		return !1
	}, this.aIA = function(player) {
		for (var tL = player << 3, tM = tL + bN.y.kP[player], a8G = bN.y.a8G, a7E = bN.y.a7E, hj = 0, aB = tL; aB < tM; aB++) hj += a7E[a8G[aB]];
		return hj
	}, this.aYD = function(player, aXD) {
		aXD = bN.y.mD[aXD];
		return this.lk(player, aXD[aXD.length - 1])
	}, this.aYE = function(iR, iS, fH, aYF) {
		var iV = bM.f9(iR),
			iR = bM.fB(iR),
			iX = bM.f9(iS),
			iS = bM.fB(iS),
			iX = (fH = Math.max(fH, 1), iX - iV),
			iS = iS - iR,
			iK = bL.du(Math.abs(iX) * aYF, fH),
			aYF = bL.du(Math.abs(iS) * aYF, fH);
		return bM.fO(iV + Math.sign(iX) * iK, iR + Math.sign(iS) * aYF)
	}, this.aX7 = function(lg, en) {
		for (var f1 = lg.length - 1, f8 = bM.f9(en), fA = bM.fB(en), aB = 0; aB < f1; aB++) {
			var iR = lg[aB],
				iS = lg[aB + 1],
				nK = bM.f9(iR),
				iR = bM.fB(iR),
				nX = bM.f9(iS),
				iS = bM.fB(iS);
			if (!(f8 !== nK && f8 !== nX && Math.sign(f8 - nK) === Math.sign(f8 - nX) || fA !== iR && fA !== iS && Math.sign(fA - iR) === Math.sign(fA - iS))) {
				if (nK === nX || iR === iS) return aB;
				if (Math.abs(f8 - nK) === Math.abs(fA - iR) && Math.abs(f8 - nX) === Math.abs(fA - iS)) return aB
			}
		}
		return -1
	}, this.aBu = function() {
		for (var aYL = lw[0], mF = bN.y.mF, mB = bN.y.mB, g = [], aB = 0; aB < mB; aB++) bA.gM.kz(aYL, mF[aB] >> 3) && g.push(aB);
		return g
	}, this.li = function(player, lg) {
		for (var tL = player << 3, tM = tL + bN.y.kP[player], a8G = bN.y.a8G, mD = bN.y.mD, hS = lg[0], ky = lg[lg.length - 1], aB = tL; aB < tM; aB++) {
			var gY = mD[a8G[aB]];
			if (gY[0] === hS && gY[gY.length - 1] === ky) return !0
		}
		return !1
	}
}

function aWl() {
	function aYO(player, aXD) {
		aXD = bM.ik(bN.y.mQ[aXD]), aXD = ac.ej(bM.er(aXD));
		return !!bN.lA.aY3(player, aXD)
	}

	function aYM(player) {
		return bN.mR.mS(player) && !bN.lh.ln()
	}
	this.he = function(player, en) {
		return !!aYM(player) && -1 !== (en = function(player, en) {
			for (var f1 = bN.y.mB, mQ = bN.y.mQ, mF = bN.y.mF, aYB = bM.i7(), aPm = -1, aB = 0; aB < f1; aB++) {
				var fH = bM.iQ(en, bM.ik(mQ[aB]));
				fH < aYB && bA.gM.kz(player, mF[aB] >> 3) && (aYB = fH, aPm = aB)
			}
			return aPm
		}(player, en)) && !!aYO(player, en) && (bO.fc[3] = bN.y.mE[en], !0)
	}, this.pP = function(player, nH) {
		return !!aYM(player) && !!bN.lA.aWx(nH) && !!aYO(player, bO.fc[2])
	}, this.qI = function(player, nH, aYP) {
		return !! function(player, nH, aYP) {
			if (aYM(player) && bN.lA.aWx(nH)) {
				nH = bO.fc[2];
				if (bA.gM.kz(player, bN.y.mF[nH] >> 3)) {
					if (function(player, aXD) {
							return bN.lA.aYD(player, aXD) && (bO.g[0] = bN.lh.lp(bN.y.mD[aXD]), bO.fc[1] = 6, !0)
						}(player, nH)) return 1;
					var aWs = bM.ik(bN.y.mQ[nH]),
						aYT = bN.lA.aY5(player, aWs);
					if (-1 !== aYT) {
						aYT = bM.iQ(aYT, aWs);
						if (!(aYP && 120 < aYT)) {
							aYP = function(aXD, aYU, aWs) {
								var lg = bN.y.mD[aXD],
									aXD = bN.y.mP[aXD],
									aYW = bM.iQ(aWs, lg[aXD + 1]);
								if (aYU <= aYW) return bN.lA.aYE(aWs, lg[aXD + 1], aYW, aYU);
								for (var fH = aYU - aYW, f1 = lg.length - 1, aB = aXD + 1; aB < f1; aB++) {
									var aYX = bM.iQ(lg[aB], lg[aB + 1]);
									if (fH <= aYX) return bN.lA.aYE(lg[aB], lg[aB + 1], aYX, fH);
									fH -= aYX
								}
								return lg[f1]
							}(nH, aYT, aWs);
							if (bN.l8.qF(player, aYP, 1)) return bO.fc[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nH, aYP) && (player = bO.fc[2], bN.y.mC[player] = 64 + bN.y.mC[player] % 64, bN.mK.eY(nH, bN.y.mU), !0)
	}
}

function aWa() {
	function aYc(player, hj, aYa, aWs) {
		var jU;
		if (ac.es(aYa)) jU = aD.ey;
		else {
			if ((jU = ac.et(aYa)) === player) return void bd.gQ(player, hj - bA.gM.gP(player, hj), 12);
			if (!bs.eu(player, jU)) return void b8.kN.pe(player, jU, hj)
		}
		ad.jg(player, jU) || ad.jz(player) ? (ag.gS[player].push(aWs << 2), ad.eY(player, hj, jU), aF.jS(player, !0)) : bd.gQ(player, hj, 12)
	}
	this.eU = function() {
		for (var mC = bN.y.mC, mQ = bN.y.mQ, aXE = bN.y.aXE, aB = bN.y.mB - 1; 0 <= aB; aB--) 65535 === aXE[aB] && function(aB, aWs, hr) {
			if (6 === hr) {
				if (bN.mK.aX1(aB, aWs)) return bN.y.mP[aB]++, bN.y.aXE[aB] = 0, 0
			} else {
				var player = bN.y.mF[aB] >> 3,
					aB = bN.y.a7E[aB];
				bd.aYb(player), hr < 4 ? aYc(player, aB, aWs + bM.i4[hr] << 2, aWs) : 4 === hr ? function(player, hj, aWs) {
					var aB, f5, iD = bM.i5,
						eq = bM.er(aWs);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.es(f5)) return aYc(player, hj, f5, aWs);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5) && !ac.yk(player, f5)) return aYc(player, hj, f5, aWs);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5)) return aYc(player, hj, f5, aWs)
				}(player, aB, aWs) : 5 === hr && function(player, hj, aWs) {
					var aB, f5, iD = bM.i5,
						eq = bM.er(aWs);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5) && ac.yk(player, f5)) return aYc(player, hj, f5, aWs);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5)) return aYc(player, hj, f5, aWs);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.es(f5)) return aYc(player, hj, f5, aWs)
				}(player, aB, aWs)
			}
			return 1
		}(aB, bM.ik(mQ[aB]), mC[aB] % 64) && (bN.mK.aWy(aB), bN.aID.aXH(aB))
	}, this.aYZ = function(player, en, hr, nH, hj) {
		if (!(5 <= hr)) {
			var aXp = aD.el;
			if (bA.gM.hC(aXp) && bs.eu(player, aXp) && player !== aXp && 0 !== ag.gh[aXp].length && bA.gM.a47(player, 5)) {
				for (var aYa, fF = !1, aB = 0; aB < 4; aB++)
					if (aYa = en + bM.i4[aB] << 2, ac.ew(aYa) && !ac.es(aYa) && ac.et(aYa) === aXp) {
						fF = !0;
						break
					} fF && (aN.a7N(719, 0), hr = hj < 25e3 ? L(477) + " (" + bA.rl.zz(hj) + ") ⛵" : L(478) + " (" + bA.rl.zz(hj) + ") 🚢", aN.zA(180, hr, 719, player, bB.oR, bB.nr, -1, !0, void 0, {
					fL: 1,
					nH: nH
				}))
			}
		}
	}
}

function aWX() {
	this.kZ = 512, this.aXF = 8, this.mB = 0, this.mU = 0, this.mF = new Uint16Array(this.kZ), this.mQ = new Uint32Array(this.kZ), this.aXE = new Uint16Array(this.kZ), this.a7E = new Uint32Array(this.kZ), this.aXM = new Uint16Array(this.kZ), this
		.mE = new Uint16Array(this.kZ), this.mC = new Uint8Array(this.kZ), this.aXO = new Uint8Array(this.kZ), this.mD = new Array(this.kZ), this.mP = new Uint16Array(this.kZ), this.kP = new Uint8Array(aD.ey), this.a8G = new Uint16Array(this.aXF * aD
			.ey), this.dd = function() {
			this.mB = 0, this.mU = 0, this.kP.fill(0), this.mD.fill(null)
		}, this.mW = function(player) {
			var hj = bO.fX[0],
				mG = bO.fc[1],
				lg = bO.g[0],
				aYf = this.mU,
				f1 = this.mB,
				aYg = bM.ij(lg[0]),
				aYh = this.kP[player],
				aYi = (player << 3) + aYh;
			this.mF[f1] = aYi, this.mQ[f1] = aYg, this.aXE[f1] = 0, hj < 60 && (bA.gM.gN(player, 60 - hj), hj = 60), this.a7E[f1] = hj, this.aXM[f1] = bN.im.mW(f1, bM.il(aYg)), this.mE[f1] = aYf, this.mC[f1] = mG, this.aXO[f1] = 0, this.mD[f1] = lg,
				this.mP[f1] = 0, this.mU = (aYf + 1) % 65536, this.kP[player] = aYh + 1, this.a8G[aYi] = f1, this.mB++, bN.mG.aYZ(player, lg[lg.length - 1], mG, aYf, hj)
		}, this.eU = function() {
			bN.mG.eU();
			for (var gY = aD.el, dt = bN.lA.aIA(gY), sO = (! function(sO) {
					for (var aYn, mQ = sO.mQ, a7E = sO.a7E, aXO = sO.aXO, aXE = sO.aXE, aXM = sO.aXM, mD = sO.mD, mP = sO.mP, sO = sO.mB, aXs = bS.fC << 4, aB = sO - 1; 0 <= aB; aB--) {
						var aYo = mQ[aB],
							lg = mD[aB],
							aYp = mP[aB],
							aYg = bM.ij(lg[aYp]),
							aYq = bM.ij(lg[aYp + 1]),
							aYr = aYg % aXs,
							aYg = ~~((aYg + .5) / aXs),
							aYt = aYq % aXs,
							aYu = ~~((aYq + .5) / aXs),
							aYv = aYt - aYr,
							aYw = aYu - aYg,
							f4 = Math.max(~~Math.sqrt(aYv * aYv + aYw * aYw + .5), 1),
							aYx = a7E[aB],
							aYx = (aYx = aXO[aB] ? 4e4 : 25e4 + Math.min(20 * aYx, 3e5) + Math.min(aYx >> 3, 5e4), aXE[aB] + Math.max(~~((aYx + .5) / f4), 1));
						65535 <= aYx ? aYp + 2 < lg.length ? (mP[aB] = aYp + 1, mQ[aB] = aYn = function(aB, aYy, aYr, aYs, aYp, f4, lg, aXs) {
							aYy = Math.min(aYy - 65535, 65535);
							var lg = bM.ij(lg[aYp + 2]),
								aYp = lg % aXs - aYr,
								lg = ~~((lg + .5) / aXs) - aYs,
								aZ1 = Math.max(~~Math.sqrt(aYp * aYp + lg * lg + .5), 1);
							return aYy = Math.min(Math.floor((f4 * aYy + .5) / aZ1), 65534), bN.y.aXE[aB] = aYy, aYr + bL.du(aYy * aYp, 65535) + aXs * (aYs + bL.du(aYy * lg, 65535))
						}(aB, aYx, aYt, aYu, aYp, f4, lg, aXs)) : (mQ[aB] = aYn = aYq, aXE[aB] = 65535) : (aXE[aB] = aYx, mQ[aB] = aYn = aYr + bL.du(aYx * aYv, 65535) + aXs * (aYg + bL.du(aYx * aYw, 65535))), aXM[aB] = bN.im.aZ0(aXM[aB],
							aYo, aYn)
					}
				}(this), ! function(sO) {
					if (bf.kI() % 2 == 1) {
						var aB, hs, lG, fL, eZ, aZ2, zd, aZ3, hS, nK, nL, aYg, aZ4, a9k, aZ6, ky, f1 = sO.mB,
							mQ = sO.mQ,
							mF = sO.mF,
							a7E = sO.a7E,
							aXO = sO.aXO,
							im = bN.im.im,
							aZ8 = im.length,
							aZ9 = bN.im.aZ9,
							aXs = bS.fC << 4,
							aZA = aD.hu,
							aUg = bg.ez,
							gZ = (f1 - 1) * (bL.du(bf.kI(), 2) % 2);
						for (aB = 0; aB < f1; aB++)
							for (hs = Math.abs(aB - gZ), aYg = mQ[hs], lG = bM.il(aYg), hS = mF[hs] >> 3, nK = aYg % aXs, nL = ~~((aYg + .5) / aXs), aZ6 = a7E[hs], fL = 0; fL < 9; fL++)
								if (!((aZ2 = lG + aZ9[fL]) < 0 || aZ8 <= aZ2))
									for (aZ3 = im[aZ2], zd = aZ3.length, eZ = 0; eZ < zd; eZ++) aZ4 = aZ3[eZ], ky = mF[aZ4] >> 3, hS == ky || aZA && aUg[hS] === aUg[ky] && aUg[hS] || (ky = mQ[aZ4], (a9k = nK - ky % aXs) * a9k + (a9k = nL - ~~
										((ky + .5) / aXs)) * a9k < 14400 && (ky = a7E[aZ4], a9k = ky <= aZ6 ? Math.max(1, bL.du(ky + bL.du(aZ6 - ky, 10), 10)) : Math.max(1, bL.du(aZ6, 10)), a7E[aZ4] = Math.max(ky - a9k, 0), aXO[aZ4] =
										4))
					}
				}(this), ! function(sO) {
					if (bf.kI() % 5 == 3)
						for (var a7E = sO.a7E, f1 = sO.mB, aB = 0; aB < f1; aB++) {
							var hj = a7E[aB];
							a7E[aB] = Math.max(hj - Math.max(1, hj >> 7), 0)
						}
				}(this), this), a7E = sO.a7E, aXO = sO.aXO, aB = sO.mB - 1; 0 <= aB; aB--) aXO[aB] = aXO[aB] >> 1, 0 === a7E[aB] && (bN.mK.aWy(aB), bN.aID.aXH(aB));
			bd.gQ(gY, dt - bN.lA.aIA(gY), 15)
		}
}

function aWY() {
	this.aZB = 32, this.f8 = 0, this.fA = 0, this.io = 0, this.aZC = 0, this.aZD = 4, this.im = null, this.aZ9 = new Int16Array(9), this.dd = function() {
		this.io = 1 + bL.du(bS.fC - 1, this.aZB), this.aZC = 1 + bL.du(bS.fD - 1, this.aZB), this.im = new Array(this.io * this.aZC), bA.qu.a33(this.im);
		var f8, fA, aZ9 = this.aZ9,
			i = this.io;
		for (f8 = -1; f8 <= 1; f8++)
			for (fA = -1; fA <= 1; fA++) aZ9[3 * (1 + fA) + 1 + f8] = fA * i + f8
	}, this.mW = function(aZF, aB) {
		return this.im[aB].push(aZF), this.im[aB].length - 1
	}, this.aZ0 = function(aZG, aYg, aYq) {
		var aZH, aZI, aYg = bM.il(aYg),
			aYq = bM.il(aYq);
		return aYg === aYq ? aZG : (aZH = this.im[aYg].pop(), this.im[aYg].length === aZG ? this.mW(aZH, aYq) : (aZI = this.im[aYg][aZG], this.im[aYg][aZG] = aZH, bN.y.aXM[aZH] = aZG, this.mW(aZI, aYq)))
	}
}

function aWc() {
	this.l9 = function(player, aZJ) {
		return -1 !== aZJ && !!bN.lA.ll(player, aZJ) && this.qF(player, aZJ, 0)
	}, this.qF = function(player, aZJ, aZK) {
		player = function(player, aZJ, aZK) {
			var aYT = bN.lA.aY5(player, aZJ);
			if (-1 === aYT) return -1;
			aYT = bN.lA.lB(aYT, aZJ);
			if (-1 === aYT) return -1;
			var le = bN.lh.lm(aYT, aZJ);
			if (0 <= le) return le;
			if (bN.lh.ln()) return -1;
			if (0 <= (le = bN.lh.lm(aZJ, aYT))) return bN.lh.lo(bN.lh.lp(bN.lh.get(le)));
			if (aYT === aZJ) return bN.lh.lo(new Uint32Array([aYT, aZJ]));
			if (0 <= (le = bN.aWd.qF(aYT, aZJ))) return le;
			return aZK ? function(aZO, player) {
				var fh = bO.fh,
					eN = (fh.fill(0), [aZO]),
					i6 = (fh[aZO] = 1, bM.i6),
					aZP = -1,
					f1 = eN.length;
				for (; - 1 === aZP && f1;) {
					for (var g = [], aB = 0; aB < f1; aB++)
						for (var en = eN[aB], a4r = fh[en], f4 = 0; f4 < 8; f4++) {
							var wr, a1R, f7 = en + i6[f4],
								ef = 4 * f7;
							ac.iE(ef) ? (wr = fh[f7], a1R = a4r + 5 + ((1 & f4) << 1), 0 === wr ? (g.push(f7), fh[f7] = a1R) : fh[f7] = Math.min(a1R, wr)) : -1 === aZP && f4 % 2 == 0 && ac.yh(player, ef) && (aZP = en)
						}
					f1 = (eN = g).length
				}
				return -1 !== aZP ? function(iR, aZR) {
					var i6 = bM.i6,
						aZS = -1,
						hr = 0,
						mq = [];
					for (; aZR !== iR;)(hr = function(en, hr) {
						var fh = bO.fh,
							i6 = bM.i6,
							a4r = fh[en];
						if (a4r - fh[en + i6[hr]] != 5 + ((1 & hr) << 1))
							for (var fK = 0; fK < 8; fK++) {
								var f4 = fK + hr + 6 & 7;
								if (a4r - fh[en + i6[f4]] == 5 + ((1 & f4) << 1)) return f4
							}
						return hr
					}(aZR, hr)) !== aZS && (mq.push(aZR), aZS = hr), aZR += i6[hr];
					mq.push(iR);
					var le = bN.lh.lm(mq[0], iR);
					if (0 <= le) return le;
					return bN.lh.lo(new Uint32Array(mq))
				}(aZO, aZP) : -1
			}(aZJ, player) : -1
		}(player, aZJ, aZK);
		return -1 !== player && (bO.g[0] = bN.lh.get(player), !0)
	}
}

function aWe() {
	function aZU(hF, iW, iY) {
		for (var jb = Math.min(iW, iY), nc = Math.max(iW, iY), fA = jb + 1; fA < nc; fA++)
			if (!ac.iE(bM.ig(hF, fA))) return;
		return 1
	}

	function aZV(hH, iV, iX) {
		for (var jb = Math.min(iV, iX), nc = Math.max(iV, iX), f8 = jb + 1; f8 < nc; f8++)
			if (!ac.iE(bM.ig(f8, hH))) return;
		return 1
	}

	function aZW(iV, iW, iX, iY, aZM, aZJ) {
		for (var f1 = Math.min(Math.abs(iX - iV), Math.abs(iY - iW)), iK = Math.sign(iX - iV), iN = Math.sign(iY - iW), aB = 0; aB < f1; aB++)
			if (!ac.iE(bM.ig(iV += iK, iW += iN))) return null;
		return iV === iX ? aZU(iV, iW, iY) ? new Uint32Array([aZM, bM.fO(iV, iW), aZJ]) : null : aZV(iW, iV, iX) ? new Uint32Array([aZM, bM.fO(iV, iW), aZJ]) : null
	}
	this.qF = function(aZM, aZJ) {
		aZM = function(aZM, aZJ) {
			var iV = bM.f9(aZM),
				iW = bM.fB(aZM),
				iX = bM.f9(aZJ),
				iY = bM.fB(aZJ);
			if (iV === iX) {
				if (aZU(iV, iW, iY)) return new Uint32Array([aZM, aZJ])
			} else {
				if (iW !== iY) return aZW(iV, iW, iX, iY, aZM, aZJ) || aZW(iX, iY, iV, iW, aZM, aZJ);
				if (aZV(iW, iV, iX)) return new Uint32Array([aZM, aZJ])
			}
			return null
		}(aZM, aZJ);
		return null === aZM ? -1 : bN.lh.lo(aZM)
	}
}

function aWj() {
	var aZX = [];
	this.dd = function() {
		aZX = []
	}, this.ln = function() {
		return 65536 === aZX.length
	}, this.lm = function(aZM, aZJ) {
		for (var lh = aZX, f1 = lh.length, aB = 0; aB < f1; aB++) {
			var gY = lh[aB];
			if (gY[0] === aZM && gY[gY.length - 1] === aZJ) return aB
		}
		return -1
	}, this.lp = function(lg) {
		var aZY = new Uint32Array(lg.length);
		return aZY.set(lg), aZY.reverse()
	}, this.aX5 = function(hS, ky) {
		var gT = hS.length - 1,
			aZZ = new Uint32Array(gT + ky.length);
		return aZZ.set(hS, 0), aZZ.set(ky, gT), aZZ
	}, this.aXA = function(hS, ky, aBI, en, aZa) {
		aZa && (aBI = (ky = this.lp(ky)).length - aBI - 2);
		aZa = ky.subarray(aBI + 1 + (en === ky[aBI + 1])), en = new Uint32Array(hS.length + aZa.length);
		return en.set(hS, 0), en.set(aZa, hS.length), en
	}, this.lo = function(lg) {
		return aZX.push(lg), aZX.length - 1
	}, this.get = function(aB) {
		return aZX[aB]
	}, this.lj = function() {
		return aZX
	}, this.aZc = function(aZM, aZJ) {
		return null
	}
}

function aWn() {
	this.eU = function(player, nH) {
		player = bN.lA.nJ(player, nH);
		return !(player < 0 || !bN.mK.aXC(player) || (bN.mK.aWy(player), 0))
	}
}

function aWZ() {
	var zI = 32,
		zH = new Array(2);

	function x7(eZ) {
		var f8, fA, en, iN, iK, hw = zI,
			a3W = bA.qm.x7(hw, hw),
			i2 = bA.qm.getContext(a3W, !0),
			hz = bA.qm.getImageData(i2, hw, hw),
			xI = hz.data,
			lG = (hw >> 1) - .5,
			lH = Math.sqrt(lG * lG);
		for (xI.fill(255), fA = 0; fA < hw; fA++)
			for (f8 = 0; f8 < hw; f8++) iK = f8 - lG, iN = fA - lG, en = 4 * (fA * hw + f8), iK = 714 * (lH - Math.sqrt(iK * iK + iN * iN)) / lH, xI[2 + en] = eZ, xI[3 + en] = 255 < iK ? 0 : iK;
		return i2.putImageData(hz, 0, 0), a3W
	}
	this.aZd = -1, this.dd = function() {
		this.aZd = -1, zH[0] || (zH[0] = x7(255), zH[1] = x7(0))
	}, this.aZe = function(i2, ef, f8, fA, e8, aB) {
		bA.gM.hC(aD.el) && (i2.setTransform(ef *= 4 / 3 * .625, 0, 0, ef, f8 - (e8 *= 4 / 3), fA - e8), i2.drawImage(zH[+(bN.y.mE[aB] === this.aZd)], 0, 0))
	}
}

function aWi() {
	function aUy(f8, f1, fA, aZf, a9q, fR, player) {
		if (!(fA < 1 || a9q < fA))
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (bN.lA.aXG(ef) && !bA.qu.has(aZf, ac.ej(ef)) && ac.yZ(ef, player)) return ef >> 2;
				f8 += fR
			}
		return -1
	}

	function aV2(fA, f1, f8, aZf, aUw, fR, player) {
		if (!(f8 < 1 || aUw < f8)) {
			f1 = Math.max(f1, 0);
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (bN.lA.aXG(ef) && !bA.qu.has(aZf, ac.ej(ef)) && ac.yZ(ef, player)) return ef >> 2;
				fA += fR
			}
		}
		return -1
	}

	function aV6(iR, iS, aUt) {
		return -1 !== iS && (-1 === iR || bM.iT(iS, aUt) < bM.iT(iR, aUt)) ? iS : iR
	}
	this.hb = function(player, aUt) {
		if (bN.mR.mS(player))
			for (var aUu = bM.i7(), aZf = [];;) {
				var aZP = function(aUt, aUu, aZf, player) {
					for (var hF = bM.f9(aUt), hH = bM.fB(aUt), aUw = bS.fC - 2, a9q = bS.fD - 2, aUx = -1, f4 = 0; f4 < aUu; f4++) {
						var a9p = Math.max(hF - f4, 1),
							aLx = Math.max(hH - f4, 1),
							yV = Math.min(hF + f4, aUw),
							yU = Math.min(hH + f4, a9q),
							iR = aUy(hF, yV - hF, hH - f4, aZf, a9q, 1, player),
							iS = aUy(hF - 1, hF - a9p - 1, hH - f4, aZf, a9q, -1, player),
							yV = aUy(hF, yV - hF, hH + f4, aZf, a9q, 1, player),
							a9p = aUy(hF - 1, hF - a9p - 1, hH + f4, aZf, a9q, -1, player),
							aV1 = aV2(hH, yU - hH - 1, hF - f4, aZf, aUw, 1, player),
							aV3 = aV2(hH - 1, hH - aLx - 2, hF - f4, aZf, aUw, -1, player),
							yU = aV2(hH, yU - hH - 1, hF + f4, aZf, aUw, 1, player),
							aLx = aV2(hH - 1, hH - aLx - 2, hF + f4, aZf, aUw, -1, player);
						if (aUx = aV6(aUx, iR, aUt), aUx = aV6(aUx, iS, aUt), aUx = aV6(aUx, yV, aUt), aUx = aV6(aUx, a9p, aUt), aUx = aV6(aUx, aV1, aUt), aUx = aV6(aUx, aV3, aUt), aUx = aV6(aUx, yU, aUt), 0 <= (aUx = aV6(aUx, aLx, aUt)) &&
							f4 * f4 >= bM.iT(aUx, aUt)) return aUx
					}
					return -1
				}(aUt, aUu, aZf, player);
				if (-1 === aZP) break;
				var id = ac.ej(bM.er(aZP));
				if (bN.lA.aY3(player, id)) return !! function(player, aZP, aUt) {
					for (var hr = bM.ir(aZP, aUt), aB = 0; aB < 4; aB++) {
						var en = bM.ip(aZP, hr);
						if (ac.aHp(bM.er(en), player)) return bO.fc[6] = hr, 1;
						hr = (hr + 1) % 4
					}
					return
				}(player, aZP, aUt) && (bO.fc[7] = aZP, !0);
				aZf.push(id)
			}
		return !1
	}
}

function dg() {
	this.aSJ = [L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492), L(493), L(494)];
	var aZi = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCG = new Array(aZi.length), this.dd = function() {
		var g = bj.eN.data[155].value.split(";"),
			lG = g.length;
		if (function() {
				for (var f1 = aZi.length, aB = 0; aB < f1; aB++) bX.aCG[aB] = aZi[aB]
			}(), !(lG > aZi.length))
			for (var aB = 0; aB < lG; aB++) g[aB].length && (this.aCG[aB] = g[aB])
	}, this.aSL = function(e9, code) {
		for (var aCG = this.aCG, aZk = aZi, qT = (aCG[e9] = code, ""), f1 = aCG.length, aZl = [], aB = 0; aB < f1; aB++) aZl.push(aCG[aB] === aZk[aB] ? "" : aCG[aB]);
		f1--;
		for (aB = 0; aB < f1; aB++) qT += aZl[aB] + ";";
		bj.sE.sF(155, qT += aZl[f1])
	}, this.aSI = function() {
		bj.sE.sF(155, ""), this.dd()
	}, this.eZ = function(code, e9) {
		return code === this.aCG[e9] || code === this.aCG[e9 + 1]
	}
}

function dY() {
	var aZm = new Array(1),
		aZn = new Array(1),
		aZo = 20,
		eO = 0,
		aZp = !1;

	function aZr() {
		aZo++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aZn[aB] = 0, aZm[aB] = document.createElement("audio"), aZm[aB].src = src, aZm[aB].setAttribute("preload", "auto"), aZm[aB].setAttribute("controls", "none"), aZm[aB].style.display = "none", aZm[aB].onpause = function() {
					aZn[aB] = 1
				}, aZm[aB].oncanplaythrough = function() {
					aZn[aB] = 0 === aZn[aB] ? 1 : aZn[aB]
				}, document.body.appendChild(aZm[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aZp = !0
		}
	}, this.uO = function() {
		if (aZp) {
			aZp = !1;
			for (var aB = 0; 0 <= aB; aB--) aZm[aB].onpause = null, aZm[aB].oncanplaythrough = null, t.removeChild(document.body, aZm[aB]), aZm[aB] = null
		}
	}, this.play = function() {
		if (aZp) {
			var dt = performance.now();
			if (eO + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aZn[aB]) return eO = dt, aZn[aB] = 2, void aZm[aB].play();
			0 < aZo && (aZo--, setTimeout(aZr, 66))
		}
	}
}

function ca() {
	this.a8o = function() {
		var aZu;
		return !(al.kr < 3 || ag.go[lw[0]] >= aD.k5 >> 1) && (aD.hu ? 9 !== aD.kd && (aZu = ae.aJM(), !(2 * ae.aJN(bh.ku()) >= aZu)) : function() {
			if (8 === aD.kd) return !1;
			var aZu = ae.aJM();
			if (2 * ag.h2[lw[0]] >= aZu) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aYh = aD.kL, h2 = ag.h2, aB = 0; aB < aYh; aB++) h2[aB] = 512;
			var aYi = aD.xn,
				kY = aE.kY,
				hj = aE.hj;
			for (aB = aYh; aB < aYi; aB++) h2[aB] = kY[hj[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f1 = aD.xn, h2 = ag.h2, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f1; aB++) h2[aB] = sResourcesValue
		} : function() {
			for (var f1 = aD.xn, h2 = ag.h2, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f1; aB++) h2[aB] = sResourcesData[aB]
		})();
		bd.mq[8] = ag.h2[aD.el]
	}
}

function dP() {
	var aHx = 501,
		aa0 = (this.aZz = new Uint32Array(aHx), this.a4C = new Uint32Array(aHx), this.aBv = new Uint16Array(aHx), this.aSR = 0, 1),
		ub = 0;

	function aa3(self) {
		self.max.fill(0)
	}

	function aa5(self, aB) {
		self.max[0] = Math.max(self.aZz[aB], self.max[0]), self.max[1] = Math.max(self.a4C[aB], self.max[1]), self.max[2] = Math.max(self.aBv[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aa1 = 0, this.mq = new Array(21), this.aa2 = null, this.de = function() {
		this.aa2 = [L(495), L(496), L(497), L(498), L(499), L(500), L(501), L(502), L(323), L(324), L(503), L(504), L(505), L(506), "", L(507), L(508), L(509), L(281), L(510), L(511)]
	}, this.dd = function() {
		this.aSR = 0, aa0 = 1, this.aa1 = 0, ub = 0, aa3(this), this.mq.fill(0)
	}, this.qC = function(player, ia) {
		bA.gM.a46(player) && (this.mq[0] += ia + 1, this.mq[1]++, this.mq[12] += bO.fX[1])
	}, this.ph = function(player, pK) {
		__fx.donationsTracker.logDonation(player, pK, bO.fX[0]);
		player === aD.el && (aN.ph(bO.fX[0], bO.fX[1], pK), this.mq[12] += bO.fX[1], this.mq[16] += bO.fX[0]), pK === aD.el && (aN.a7R(bO.fX[0], player), this.mq[10] += bO.fX[0])
	}, this.qG = function(player) {
		bA.gM.a46(player) && (this.mq[2]++, this.mq[12] += bO.fX[1])
	}, this.qO = function(player) {
		bA.gM.a46(player) && (this.mq[19]++, this.mq[12] += bO.fX[1])
	}, this.aYb = function(player) {
		bA.gM.a46(player) && this.mq[20]++
	}, this.gQ = function(player, a4r, e9) {
		bA.gM.a46(player) && (this.mq[e9] += a4r)
	}, this.eU = function() {
		var self;
		this.aa1 || 0 < ub-- || ((self = this).aZz[self.aSR] = ag.go[aD.el], self.a4C[self.aSR] = ag.h2[aD.el], self.aBv[self.aSR] = ae.aBw(aD.el), aa5(self, self.aSR), self.aSR++, self.aSR === aHx && function(self) {
			aa3(self), aa5(self, 0), self.aSR = 1 + bL.du(aHx, 2);
			for (var aB = 1; aB < self.aSR; aB++) self.aZz[aB] = self.aZz[2 * aB], self.a4C[aB] = self.a4C[2 * aB], self.aBv[aB] = self.aBv[2 * aB], aa5(self, aB);
			aa0 *= 2
		}(self), ub = aa0 - 1, be.mh(), 0 === ag.mu[aD.el] && (self.aa1 = bf.kI()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.t8 = 0, this.t9 = 0, this.aa7 = 0, this.aa8 = 0, this.a93 = 0, this.tq = 0;
	var aaA = this.aa9 = 0;
	this.aaB = 0, this.aaC = 0, this.aaD = 0, this.a8N = 0, this.e9 = 0, this.aBW = null, this.hm = !1, this.aaE = -1, this.aaF = !1, this.aaG = [0, 0], this.de = function() {
		this.aBW = [L(512), L(120, 0, "Balance"), L(119, 0, "Interest"), L(513)]
	}, this.dd = function() {
		this.hm = !1, this.aaE = -1, this.aaF = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var f4 = a0.a1.i9() && h.i < h.j ? 1 : a0.a1.i9() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(f4 * this.i), this.i -= a0.a1.i9() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8N = Math.floor(this.j / 150), this.a8N = Math.max(this.a8N, 1.5), this.t8 = Math.floor(1 + .02 * this
			.i), this.t9 = Math.floor(1 + .04 * this.i), this.a93 = this.t9, aaA = Math.floor(.75 * this.a93), this.tq = Math.floor(1 + .075 * this.i), this.aaB = Math.floor(1 + .1125 * this.i), this.aaC = Math.floor(this.i * (a0.a1.i9() ? .03 :
				.029)), this.aaC = Math.max(this.aaC, 4), this.aaD = Math.floor(.035 * this.i), this.aaD = Math.max(this.aaD, 4), this.aa9 = this.j - 2 * this.a93 - this.tq - this.aaB, this.hm && this.aaH()
	}, this.hD = function(la, lb) {
		var xq, xp;
		return !!this.hm && (xp = la, xq = lb, la -= bL.du(h.i - this.i, 2), lb -= bL.du(h.j - this.j, 2), la < 0 || lb < 0 || la >= this.i || lb >= this.j || la >= this.i - this.aaB && lb < this.aaB ? -1 !== aM.hD(xp, xq) || bC.hD(xp, xq) ||
			this.s3() : lb < this.aaB || (lb < this.j - this.tq ? (this.aaF = !0, this.aaE = (la - 2 * this.t8 - this.aa7) / this.aa8, 3 !== this.e9 && (bf.dl = !0)) : (xp = (xp = Math.floor(la / (this.i / this.aBW.length))) < 0 ? 0 : xp >=
				this.aBW.length ? this.aBW.length - 1 : xp) !== this.e9 && (this.e9 = xp, this.aaH(), bf.dl = !0)), !0)
	}, this.a2C = function(la, lb) {
		return this.aaG[0] = la, this.aaG[1] = lb, !(!this.hm || !this.aaF || (la -= bL.du(h.i - this.i, 2), lb = this.aaE, this.aaE = (la - 2 * this.t8 - this.aa7) / this.aa8, (0 <= this.aaE && this.aaE <= 1 || 0 <= lb && lb <= 1) && (bf.dl = !
			0), 0))
	}, this.a2b = function() {
		this.aaF && (this.aaF = !1)
	}, this.a2n = function() {
		this.hm ? this.s3() : this.show()
	}, this.show = function() {
		bd.aSR < 2 || (this.hm = !0, this.aaH())
	}, this.s3 = function() {
		this.hm = !1, this.aaE = -1, bf.dl = !0
	}, this.aaH = function() {
		this.e9 < 2 ? this.aa7 = aQ.measureText(bA.rl.zz(bd.max[this.e9]), bA.qm.sb(0, this.aaC)) : 2 === this.e9 && (this.aa7 = aQ.measureText(bA.rl.a4k(6, 2), bA.qm.sb(0, this.aaC))), this.aa8 = this.i - 2 * this.t8 - this.aa7 - this.t9
	}, this.mh = function() {
		this.hm && this.aaH()
	}, this.vK = function() {
		this.hm && this.a9L()
	}, this.a9L = function() {
		var f8 = bL.du(h.i - this.i, 2),
			fA = bL.du(h.j - this.j, 2);
		vL.setTransform(1, 0, 0, 1, f8, fA), vL.fillStyle = bB.nr, vL.fillRect(0, this.aaB, this.i, this.j - this.aaB), this.aaI(), this.aR4(), vL.strokeRect(0, 0, this.i, this.j), bA.qm.textAlign(vL, 2), vL.font = bA.qm.sb(0, this.aaC), 0 ===
			this.e9 ? this.aaJ(bd.aZz, f8, fA) : 1 === this.e9 ? this.aaJ(bd.a4C, f8, fA) : 2 === this.e9 ? this.aaK(f8, fA) : 3 === this.e9 && (this.aaL(f8, fA), this.aaM(f8, fA)), aM.a6X(Math.floor(f8 + this.i - .725 * this.aaB), Math.floor(
				fA + .275 * this.aaB), Math.floor(.45 * this.aaB)), vL.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aaI = function() {
		var aB, dt;
		for (vL.lineWidth = this.a8N, bA.qm.textBaseline(vL, 1), bA.qm.textAlign(vL, 1), vL.strokeStyle = bB.nu, vL.font = bA.qm.sb(1, this.aaD), dt = this.i / this.aBW.length, vL.fillStyle = bB.oG, vL.fillRect(this.e9 * dt, this.j - this.tq, dt,
				this.tq), vL.fillStyle = bB.nu, vL.fillRect(0, this.j - this.tq - .5 * this.a8N, this.i, this.a8N), aB = 1; aB <= 3; aB++) vL.fillRect(aB * dt, this.j - this.tq, this.a8N, this.tq);
		for (aB = this.aBW.length - 1; 0 <= aB; aB--) vL.fillText(bA.ys.a3k(this.aBW[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.tq)
	}, this.aR4 = function() {
		vL.fillStyle = bB.oh, vL.fillRect(0, 0, this.i, this.aaB), vL.fillStyle = bB.nu, vL.fillRect(0, this.aaB - .5 * this.a8N, this.i, this.a8N), vL.font = bA.qm.sb(1, .39 * this.aaB), vL.fillText(bA.ys.a3k(L(514), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aaB))
	}, this.aaJ = function(g, f8, fA) {
		var lG = bd.max[this.e9],
			a35 = (vL.setTransform(1, 0, 0, 1, f8 + 2 * this.t8 + this.aa7, fA + this.a93 + this.aaB), vL.lineWidth = 2, this.aa9 / Math.sqrt(lG));
		vL.beginPath(), vL.moveTo(this.aa8, this.aa9 - a35 * Math.sqrt(g[bd.aSR - 1]));
		for (var aB = bd.aSR - 2; 0 <= aB; aB--) vL.lineTo(aB * this.aa8 / (bd.aSR - 1), this.aa9 - a35 * Math.sqrt(g[aB]));
		vL.stroke();
		f8 = this.a6X(g, a35, .5);
		f8 < .95 && vL.fillText(bA.rl.zz(lG), -this.t8, 0), .05 < Math.abs(f8 - .5) && vL.fillText(bA.rl.zz(Math.floor(lG / 4)), -this.t8, Math.floor(this.aa9 / 2)), .05 < f8 && vL.fillText("0", -this.t8, this.aa9)
	}, this.aaK = function(f8, fA) {
		vL.setTransform(1, 0, 0, 1, f8 + 2 * this.t8 + this.aa7, fA + this.a93 + this.aaB), vL.lineWidth = 2;
		var a35 = this.aa9 / Math.max(bd.max[this.e9], 1);
		vL.beginPath(), vL.moveTo(this.aa8, this.aa9 - a35 * bd.aBv[bd.aSR - 1]);
		for (var aB = bd.aSR - 2; 0 <= aB; aB--) vL.lineTo(aB * this.aa8 / (bd.aSR - 1), this.aa9 - a35 * bd.aBv[aB]);
		vL.stroke();
		f8 = this.a6X(bd.aBv, a35, 1), fA = bd.max[this.e9] / 100;
		f8 < .95 && vL.fillText(bA.rl.a4k(fA, 2), -this.t8, 0), .05 < Math.abs(f8 - .5) && vL.fillText(bA.rl.a4k(fA / 2, 2), -this.t8, Math.floor(this.aa9 / 2)), .05 < f8 && vL.fillText(bA.rl.a4k(0, 2), -this.t8, this.aa9)
	}, this.aaL = function(f8, fA) {
		vL.setTransform(1, 0, 0, 1, f8 + .34 * this.i, fA + 2 * aaA + this.aaB), bA.qm.textAlign(vL, 2);
		for (var aBH = this.j - 4 * aaA - this.tq - this.aaB, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vL.fillText(bA.ys.a3k(bd.aa2[g[aB]], 0, .31 * this.i), 0, aB * aBH / 9);
		var fS = bd.mq;
		for (vL.setTransform(1, 0, 0, 1, f8 + .39 * this.i, fA + 2 * aaA + this.aaB), bA.qm.textAlign(vL, 0), vL.fillText(bA.rl.a4k(100 * fS[0] / (1024 * Math.max(fS[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vL.fillText(fS[g[aB]].toString(), 0,
			aB * aBH / 9);
		vL.fillText(bA.rl.a4k(100 * (1 - ag.go[aD.el] / fS[7]), 0), 0, aBH)
	}, this.aaM = function(f8, fA) {
		vL.setTransform(1, 0, 0, 1, f8 + .79 * this.i, fA + 2 * aaA + this.aaB), bA.qm.textAlign(vL, 2);
		var aB, aBH = this.j - 4 * aaA - this.tq - this.aaB;
		for (vL.fillStyle = bB.oB, aB = 2; 0 <= aB; aB--) vL.fillText(bA.ys.a3k(bd.aa2[aB + 8], 0, .31 * this.i), 0, aB * aBH / 9);
		vL.fillText(bA.ys.a3k(bd.aa2[18], 0, .31 * this.i), 0, 3 * aBH / 9), vL.fillStyle = bB.oA, vL.fillText(bA.ys.a3k(bd.aa2[11], 0, .31 * this.i), 0, 4 * aBH / 9), vL.fillStyle = bB.oT, vL.fillText(bA.ys.a3k(bd.aa2[13], 0, .31 * this.i), 0,
				5 * aBH / 9), vL.fillText(bA.ys.a3k(bd.aa2[15], 0, .31 * this.i), 0, 6 * aBH / 9), vL.fillText(bA.ys.a3k(bd.aa2[16], 0, .31 * this.i), 0, 7 * aBH / 9), vL.fillText(bA.ys.a3k(bd.aa2[12], 0, .31 * this.i), 0, 8 * aBH / 9), vL
			.fillStyle = bB.oS, vL.fillText(bA.ys.a3k(bd.aa2[17], 0, .31 * this.i), 0, aBH), vL.fillStyle = bB.oB;
		var fS = bd.mq,
			aFJ = fS[8] + fS[9] + fS[10] + fS[18],
			aFJ = bA.rl.zz(aFJ),
			aPr = vL.measureText(aFJ).width,
			f8 = (vL.setTransform(1, 0, 0, 1, f8 + .83 * this.i + aPr, fA + 2 * aaA + this.aaB), vL.fillText(bA.rl.zz(fS[8]), 0, 0), vL.fillText(bA.rl.zz(fS[9]), 0, aBH / 9), vL.fillText(bA.rl.zz(fS[10]), 0, 2 * aBH / 9), vL.fillText(bA.rl.zz(fS[
				18]), 0, 3 * aBH / 9), vL.fillStyle = bB.oA, vL.fillText(aFJ, 0, 4 * aBH / 9), vL.fillStyle = bB.oT, vL.fillText(bA.rl.zz(fS[13]), 0, 5 * aBH / 9), vL.fillText(bA.rl.zz(fS[15]), 0, 6 * aBH / 9), vL.fillText(bA.rl.zz(fS[16]),
				0, 7 * aBH / 9), vL.fillText(bA.rl.zz(fS[12]), 0, 8 * aBH / 9), fS[12] + fS[13] + fS[15] + fS[16]);
		vL.fillStyle = bB.oS, vL.fillText(bA.rl.zz(f8), 0, aBH), vL.fillStyle = bB.nu
	}, this.a6X = function(g, a35, a9y) {
		var aB, e, fj;
		return this.aaE < 0 || 1 < this.aaE ? .25 : (aB = this.aaE * (bd.aSR - 1), fj = g[e = Math.floor(aB)], fj += (aB - e) * (g[e < bd.aSR - 1 ? e + 1 : e] - fj), vL.strokeStyle = bB.nx, .04 < this.aaE && this.aaO(0, this.aa9 - a35 * Math.pow(
				fj, a9y), aB * this.aa8 / (bd.aSR - 1), this.aa9 - a35 * Math.pow(fj, a9y)), .04 < fj / bd.max[this.e9] && this.aaO(aB * this.aa8 / (bd.aSR - 1), this.aa9, aB * this.aa8 / (bd.aSR - 1), this.aa9 - a35 * Math.pow(fj, a9y)), vL
			.fillStyle = bB.oV, vL.beginPath(), vL.arc(aB * this.aa8 / (bd.aSR - 1), this.aa9 - a35 * Math.pow(fj, a9y), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vL.fill(), g = this.aaE * bf.aBx, g = 0 === ag.mu[aD.el] ? Math.floor(g * bd
				.aa1) : Math.floor(g * bf.kI()), vL.fillStyle = bB.nu, vL.fillText(1 === a9y ? bA.rl.a4k(fj / 100, 2) : bA.rl.zz(Math.floor(fj)), -this.t8, this.aa9 - a35 * Math.pow(fj, a9y)), bA.qm.textAlign(vL, 1), vL.fillText(aW.aBk(g),
				aB * this.aa8 / (bd.aSR - 1), this.aa9 + this.aaC - (a0.a1.i9() ? 2 : 0) - this.a8N), bA.qm.textAlign(vL, 2), a35 * Math.pow(fj, a9y) / this.aa9)
	}, this.aaO = function(nK, nL, nX, nY) {
		vL.beginPath(), vL.moveTo(nK, nL), vL.lineTo(nX, nY), vL.stroke()
	}
}

function by() {
	this.aaP = "https://", this.aaQ = this.aaP + "territorial.io/", this.aSS = this.aaQ + "changelog", this.aSW = this.aaQ + "terms", this.aaR = this.aaQ + "cookie_policy", this.aRi = this.aaQ + "privacy", this.aSV = this.aaQ + "tutorial", this.aSU =
		this.aaQ + "players", this.aST = this.aaQ + "clans", this.a1U = this.aaQ + "clan-results", this.aP0 = "https://patreon.com/c/territorial", this.aDH = this.aaP + "play.google.com/store/apps/details?id=territorial.io", this.a1m = this.aaP +
		"apps.apple.com/app/id1581110913", this.aaS = this.aaP + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aDI = this.aaP + "discord.gg/pthqvpTXmh", this.aDJ = this.aaP + "www.instagram.com/davidtschacher/", this.zX =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aaT, this.yp = new aaU, this.dd = function() {
		this.y.dd()
	}, this.eU = function() {
		0 !== this.y.a7a && this.y.a7a--
	}
}

function aaU() {
	this.vK = function() {
		if (0 !== bP.y.a7a && (vL.globalAlpha = Math.min(bP.y.a7a / 580, 1), vL.drawImage(bP.y.aaX, 1 + aS.yn(), 1 + aS.yo()), vL.globalAlpha = 1, aD.hO)) {
			for (var nK = ib / iB, nL = ic / iB, nX = (h.i + ib) / iB, nY = (h.j + ic) / iB, gZ = bP.y.aaY * iB, aaZ = bP.y.aaZ, aB = aD.kL - 1; 0 <= aB; aB--) ! function(aB, gZ, nK, nL, nX, nY, aaZ) {
				var highlight;
				0 === ag.mu[aB] || 0 === ag.go[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gZ *= 2), nX = h.i * ((ag.it[aB] + ag.iu[aB] + 1) / 2 - nK) / (nX - nK) - .5 * gZ, nK = h.j * ((ag.iv[
					aB] + ag.iw[aB] + 1) / 2 - nL) / (nY - nL) - .5 * gZ, nX > h.i) || nK > h.j || nX < -gZ || nK < -gZ || (highlight ? vL.setTransform(2 * iB, 0, 0, 2 * iB, nX, nK) : vL.setTransform(iB, 0, 0, iB, nX, nK), vL.drawImage(
					aaZ[aD.hu ? bg.ez[aB] : 1], 0, 0))
			}(aB, gZ, nK, nL, nX, nY, aaZ);
			vL.setTransform(iB, 0, 0, iB, 0, 0)
		}
	}
}

function aaT() {
	this.aaY = 28, this.a7a = 0, this.aaX = null;
	var aab = this.aaZ = null;

	function aae(hw, aaf) {
		var f8, fA, en, iK, a3W = bA.qm.x7(hw, hw),
			i2 = bA.qm.getContext(a3W, !0),
			hz = bA.qm.getImageData(i2, hw, hw),
			xI = hz.data,
			lG = (hw >> 1) - .5,
			aag = .5 + lG;
		for (aag *= aag, fA = 0; fA < hw; fA++)
			for (f8 = 0; f8 < hw; f8++) iK = (iK = f8 - lG) * iK + (iK = fA - lG) * iK, xI[en = 4 * (fA * hw + f8)] = aaf[0], xI[1 + en] = aaf[1], xI[2 + en] = aaf[2], xI[3 + en] = (aag - iK) * aaf[3] / aag;
		return i2.putImageData(hz, 0, 0), a3W
	}

	function aZe(aB, i2, a3W, hw) {
		var highlight, f8, fA;
		0 !== ag.mu[aB] && 0 !== ag.go[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hw *= 2), f8 = ag.it[aB] + ag.iu[aB] + 1 - hw - 2 >> 1, fA = ag.iv[aB] + ag.iw[aB] + 1 - hw - 2 >> 1, highlight ? i2
			.drawImage(a3W[aD.hu ? 9 === aD.kd && 5 === aE.hj[aB] ? 3 : bg.ez[aB] : aB < aD.kL ? 1 : 0], f8, fA, hw, hw) : i2.drawImage(a3W[aD.hu ? 9 === aD.kd && 5 === aE.hj[aB] ? 3 : bg.ez[aB] : aB < aD.kL ? 1 : 0], f8, fA))
	}
	this.dd = function() {
		var sO;
		this.a7a = 700,
			function(sO) {
				var hw = sO.aaY;
				if (sO.aaZ = [], aab = [], aD.hu) {
					for (var aB = 0; aB <= aD.xu; aB++) sO.aaZ.push(aae(hw, bg.aXy[bg.ki[aB]])), aab.push(aae(hw >> 1, bg.aXy[bg.ki[aB]]));
					9 === aD.kd && aab.push(aae(hw, bg.aXy[1]))
				} else sO.aaZ.push(aae(hw, bg.aXy[7])), sO.aaZ.push(aae(hw, bg.aXy[4])), aab.push(aae(hw >> 1, bg.aXy[7]))
			}(this),
			function(sO, aah) {
				var aB, aaX = sO.aaX,
					i2 = bA.qm.getContext(aaX, !0),
					f1 = aD.ey,
					hw = sO.aaY >> 1;
				i2.imageSmoothingEnabled = !1, i2.setTransform(1, 0, 0, 1, 0, 0), aah && i2.clearRect(0, 0, aaX.width, aaX.height);
				if (9 === aD.kd) {
					hw <<= 1;
					sO = az.km[5];
					for (aB = f1 - sO; aB < f1; aB++) aZe(aB, i2, aab, hw);
					f1 -= sO, hw >>= 1
				}
				for (aB = aD.kL; aB < f1; aB++) aZe(aB, i2, aab, hw)
			}(this, null !== (sO = this).aaX && sO.aaX.width === bS.fC - 2 && sO.aaX.height === bS.fD - 2 || (sO.aaX = bA.qm.x7(bS.fC - 2, bS.fD - 2), !1)), aD.hO || this.a52()
	}, this.aXx = aae, this.a52 = function() {
		for (var f1 = aD.kL, hw = this.aaY, aaZ = this.aaZ, i2 = bA.qm.getContext(this.aaX, !0), aB = 0; aB < f1; aB++) aZe(aB, i2, aaZ, hw)
	}
}

function d9() {
	function aak() {
		8 === aD.kd && 1 === aD.a0i && bR.a0K.a0h()
	}

	function aaj(player) {
		aD.hO ? (ak.aI4(player), al.aL8(), aD.kf && aD.q8.eU()) : b3.aDb(player)
	}
	this.pa = function(player) {
		aN.a0u(player, player === aD.el ? 21 : 22), aaj(player), aak()
	}, this.q5 = function(player) {
		1 === aD.a0i && 0 !== ag.mu[player] && 2 !== ag.a42[player] && aaj(player), aD.a0l--, aD.a0k--, aN.a0u(player, 4), bA.gM.hB(2) && aW.mg(!0), aak()
	}
}

function dJ() {
	this.aUr = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBE = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nu, "rgb(170,170,170)"
	], this.aal = [bB.nu, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nu, bB.nl], this.aam = [bB.nl, bB.nu, bB.nu, bB.nu, bB.nl, bB.nl, bB.nl, bB.nl, bB.nu];
	var aLI = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aKb = ["rgba(" + aLI[0] + ",", "rgba(" + aLI[1] + ",", "rgba(" + aLI[2] + ",", "rgba(" + aLI[3] + ",", "rgba(" + aLI[4] + ",", "rgba(" + aLI[5] + ",", "rgba(" + aLI[6] + ",", "rgba(" + aLI[7] + ",", "rgba(" + aLI[8] + ",", "rgba(" + aLI[9] +
			","
		], this.aKc = ["rgb(" + aLI[0] + ")", "rgb(" + aLI[1] + ")", "rgb(" + aLI[2] + ")", "rgb(" + aLI[3] + ")", "rgb(" + aLI[4] + ")", "rgb(" + aLI[5] + ")", "rgb(" + aLI[6] + ")", "rgb(" + aLI[7] + ")", "rgb(" + aLI[8] + ")", "rgb(" + aLI[9] +
			")"
		], this.a13 = null, this.aXy = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aXd = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.ki = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.ez = new Uint8Array(aD.ey), this.aBF = new Uint8Array(aD.ey), this.y0 = new Uint16Array(aD.ey), this.y1 = new Uint16Array(this.ki.length + 1), this.y2 = new Uint16Array(this.ki.length), this.de =
		function() {
			this.a13 = [L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523)]
		}, this.dd = function() {
			if (this.ez.fill(0), this.aBF.fill(0), this.aan(), aD.hu) {
				if (9 === aD.kd) {
					for (var ez = bg.ez, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) ez[aB] = 1;
					var f1 = aD.ey;
					for (aB = aD.data.teamPlayerCount[7]; aB < f1; aB++) ez[aB] = 2;
					bg.ki[1] = 7, bg.ki[2] = 8
				} else aD.kf ? function() {
					var aXd = bg.aXd,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kL - 1; 0 <= aB; aB--) colorsData[aB] = ay.jc(262144);
					var aay = 0,
						fH = 768,
						aUN = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var f4 = 0, fL = 0; fL < 3; fL++) f4 += Math.abs(aXd[aB][fL] - aUN[fL]);
							f4 < fH && (aay = aB, fH = f4)
						} var aaz = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aaz[aB] = teamPlayerCount[aB];
					var ki = bg.ki,
						ab0 = new Uint8Array(9),
						gT = (ki[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aaz[aB] && (ab0[aB] = gT, ki[gT++] = aB);
					var jb = aD.kL,
						ez = bg.ez;
					aaz[aay] ? (aaz[aay]--, ez[0] = ab0[aay]) : jb = 0;
					var eZ = 0;
					for (aB = jb; aB < aD.xn; aB++) {
						var hs = ki[eZ];
						if (aaz[hs]) aaz[hs]--, ez[aB] = ab0[hs];
						else if (aB--, 9 <= ++eZ) return console.log("error 325")
					}
				}() : this.eU();
				! function() {
					for (var f1 = aD.ey, y0 = bg.y0, y1 = bg.y1, y2 = bg.y2, ez = bg.ez, ki = bg.ki, xt = ki.length, eN = new Array(xt), aB = 0; aB < xt; aB++) eN[aB] = [];
					for (aB = 0; aB < f1; aB++) eN[ki[ez[aB]]].push(aB);
					for (aB = 1; aB <= xt; aB++) y1[aB] = y1[aB - 1] + eN[aB - 1].length;
					for (aB = 0; aB < xt; aB++)
						for (var gT = eN[aB].length, lG = y1[aB], hs = 0; hs < gT; hs++) y0[hs + lG] = eN[aB][hs];
					var kL = aD.kL;
					for (aB = 0; aB < xt; aB++)
						for (gT = eN[aB].length, lG = y1[aB], hs = 0; hs < gT; hs++)
							if (y0[hs + lG] >= kL) {
								y2[aB] = hs;
								break
							}
				}(), ! function() {
					for (var f1 = aD.ey, ez = bg.ez, aBF = bg.aBF, ki = bg.ki, aB = 0; aB < f1; aB++) aBF[aB] = ki[ez[aB]];
					9 === aD.kd && aBF.fill(1, f1 - az.km[5])
				}()
			}
		}, this.aan = function() {
			for (var aB = this.ki.length - 1; 0 <= aB; aB--) this.ki[aB] = aB
		}, this.eU = function() {
			var zo = new Uint8Array(aD.kL),
				zp = new Uint8Array(aD.kL),
				aas = new Uint16Array(8),
				aat = new Uint16Array(this.ki.length);
			this.aau(zo, zp, aas, 1), this.aHf(aas), this.aav(aat, zo, zp), this.aaw(zo, zp, aat), this.aax()
		}, this.aau = function(zo, zp, aaz, ab1) {
			for (var fL, e, ab2, f1 = this.ki.length - ab1, g = new Uint16Array(f1), aXd = this.aXd, colorsData = aD.data.colorsData, aB = aD.kL - 1; 0 <= aB; aB--) {
				for (fL = f1; ab1 <= fL; fL--) g[fL - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aXd[fL][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aXd[fL][1]) + Math.abs(4 * (63 & colorsData[aB]) - aXd[fL][2]);
				for (ab2 = 768, fL = f1 - 1; 0 <= fL; fL--) g[e = (fL + aB) % f1] < ab2 && (ab2 = g[e], zo[aB] = e);
				for (aaz[zo[aB]] += 4, ab2 = 768, fL = f1 - 1; 0 <= fL; fL--) g[e = (fL + aB) % f1] < ab2 && e !== zo[aB] && (ab2 = g[e], zp[aB] = e);
				aaz[zp[aB]]++
			}
		}, this.aHf = function(aaz) {
			for (var fL, lI, f1 = this.ki.length - 1, aB = f1; 0 <= aB; aB--) this.ki[aB] = aB;
			for (aB = f1 - 1; 0 <= aB; aB--) aaz[aB]++;
			for (aB = 1; aB <= f1; aB++) {
				for (lI = 0, fL = 1; fL < f1; fL++) aaz[fL] > aaz[lI] && (lI = fL);
				aaz[lI] = 0, this.ki[aB] = lI + 1
			}
		}, this.aav = function(aat, zo, zp) {
			var fL, a1O, eZ, f4, e, nW, tP, ab3 = this.ki.length - 1,
				rF = new Uint16Array(ab3),
				ab4 = [],
				ab5 = 0,
				a1N = [],
				ab6 = [];
			loop: for (var aB = 0; aB < aD.kL; aB++)
				if (null !== (a1O = bA.rl.a1P(ag.a1M[aB]))) {
					for (fL = a1N.length - 1; 0 <= fL; fL--)
						if (a1O === a1N[fL]) {
							ab6[fL].push(aB), ab5 = Math.max(ab5, ab6[fL].length);
							continue loop
						} a1N.push(a1O), ab4.push(!1), ab6.push([aB]), ab5 = Math.max(ab5, 1)
				}
			for (; 2 < aD.xu && ab5 > bL.du(aD.kL, aD.xu);) aD.xu--, aD.kd--;
			for (fL = a1N.length - 1; 0 <= fL; fL--) {
				for (f4 = -1, eZ = a1N.length - 1; 0 <= eZ; eZ--) !ab4[eZ] && (-1 === f4 || ab6[eZ].length > ab6[f4].length) && (f4 = eZ);
				for (eZ = ab3 - 1; 0 <= eZ; eZ--) rF[eZ] = 1;
				for (eZ = ab6[f4].length - 1; 0 <= eZ; eZ--) rF[zo[ab6[f4][eZ]]] += 3, rF[zp[ab6[f4][eZ]]]++;
				for (aB = ab3 - 1; 0 <= aB; aB--) {
					for (e = f4 % ab3, eZ = ab3 - 1; 0 <= eZ; eZ--) rF[eZ] > rF[e] && (e = eZ);
					for (nW = -1, eZ = aD.xu; 0 < eZ; eZ--)
						if (this.ki[eZ] === e + 1) {
							nW = eZ;
							break
						} if (rF[e] = 0, -1 !== nW) {
						for (tP = 0, eZ = aD.xu; 0 < eZ; eZ--) aat[nW] > aat[eZ] && tP++;
						if (tP !== aD.xu - 1) {
							for (eZ = ab6[f4].length - 1; 0 <= eZ; eZ--) aat[nW]++, this.ez[ab6[f4][eZ]] = nW;
							break
						}
					}
				}
				ab4[f4] = !0
			}
		}, this.aaw = function(zo, zp, aat) {
			for (var aB, iJ, f1 = this.ki.length - 1, border = bL.du(aD.kL, aD.xu), ab7 = (0 < aD.kL % aD.xu && border++, new Uint8Array(1 + f1)), fL = f1; 1 <= fL; fL--) ab7[this.ki[fL]] = fL;
			for (aB = 0; aB < aD.kL; aB++) iJ = ab7[zo[aB] + 1], 0 === this.ez[aB] && iJ <= aD.xu && aat[iJ] < border && (aat[iJ]++, this.ez[aB] = iJ);
			for (aB = 0; aB < aD.kL; aB++) iJ = ab7[zp[aB] + 1], 0 === this.ez[aB] && iJ <= aD.xu && aat[iJ] < border && (aat[iJ]++, this.ez[aB] = iJ);
			for (fL = aD.xu; 1 <= fL; fL--)
				for (aB = aD.kL - 1; 0 <= aB && !(aat[fL] >= border); aB--) 0 === this.ez[aB] && (aat[fL]++, this.ez[aB] = fL)
		}, this.aax = function() {
			for (var aB = aD.kL; aB < aD.ey; aB++) this.ez[aB] = 1 + aB % aD.xu
		}
}

function db() {
	this.gp = function() {
		for (var f8, fA, aB = fw - 1; 0 <= aB; aB--) f8 = bL.du(fy[aB], 4) % bS.fC, fA = bL.du(fy[aB], 4 * bS.fC), ag.it[fr] = Math.min(f8, ag.it[fr]), ag.iv[fr] = Math.min(fA, ag.iv[fr]), ag.iu[fr] = Math.max(f8, ag.iu[fr]), ag.iw[fr] = Math
			.max(fA, ag.iw[fr])
	}, this.gA = function() {
		var f4, gY, aB, f1 = ag.gS[fr].length,
			f3 = ac.f3;
		loop: for (aB = f1 - 1; 0 <= aB; aB--) {
			for (f4 = 3; 0 <= f4; f4--)
				if (gY = ag.gS[fr][aB] + f3[f4], ac.es(gY) || ac.ga(gY) && ac.et(gY) !== fr) {
					ac.jX(ag.gS[fr][aB], fr);
					continue loop
				} ag.gS[fr][aB] = ag.gS[fr][f1 - 1], ag.gS[fr].pop(), f1--
		}
	}, this.gB = function() {
		var player = fr,
			gg = ag.gg,
			gh = ag.gh,
			fQ = ag.fQ,
			f1 = gg[player].length,
			f3 = ac.f3;
		loop: for (var aB = f1 - 1; 0 <= aB; aB--) {
			for (var ab8 = !1, ab9 = !1, f4 = 3; 0 <= f4; f4--) {
				var gY = gg[player][aB] + f3[f4];
				if (ac.aHp(gY, player)) continue loop;
				ab8 = ab8 || ac.iE(gY), ab9 = ab9 || ac.aHo(gY)
			}
			ab8 ? gh[player].push(gg[player][aB]) : ab9 ? fQ[player].push(gg[player][aB]) : ac.yM(gg[player][aB], player), gg[player][aB] = gg[player][f1 - 1], gg[player].pop(), f1--
		}
	}, this.ge = function() {
		ag.go[fv] -= fw
	}, this.gf = function(border) {
		for (var f1 = border.length, aB = f1 - 1; 0 <= aB; aB--) ac.yh(fv, border[aB]) || (border[aB] = border[f1 - 1], border.pop(), f1--)
	}, this.gi = function(border) {
		for (var f1 = border.length, aB = f1 - 1; 0 <= aB; aB--) !ac.yh(fv, border[aB]) && ac.ew(border[aB]) && (border[aB] = border[f1 - 1], border.pop(), f1--)
	}, this.gj = function(border) {
		for (var f4, gY, f1 = border.length, f3 = ac.f3, aB = f1 - 1; 0 <= aB; aB--)
			for (f4 = 3; 0 <= f4; f4--)
				if (gY = border[aB] + f3[f4], ac.aHp(gY, fv)) {
					ag.gg[fv].push(border[aB]), border[aB] = border[f1 - 1], border.pop(), f1--;
					break
				}
	}, this.gk = function() {
		for (var f4, gY, f3 = ac.f3, aB = fw - 1; 0 <= aB; aB--)
			for (f4 = 3; 0 <= f4; f4--) gY = fy[aB] + f3[f4], ac.yk(fv, gY) && ac.aHq(gY) && (ag.gg[fv].push(gY), ac.gV(gY, fv))
	}, this.gl = function() {
		var f8, fA;
		loop: for (; ag.iv[fv] < ag.iw[fv];) {
			for (f8 = ag.iu[fv]; f8 >= ag.it[fv]; f8--)
				if (ac.yh(fv, 4 * (ag.iv[fv] * bS.fC + f8))) break loop;
			ag.iv[fv]++
		}
		loop: for (; ag.iv[fv] < ag.iw[fv];) {
			for (f8 = ag.iu[fv]; f8 >= ag.it[fv]; f8--)
				if (ac.yh(fv, 4 * (ag.iw[fv] * bS.fC + f8))) break loop;
			ag.iw[fv]--
		}
		loop: for (; ag.it[fv] < ag.iu[fv];) {
			for (fA = ag.iw[fv]; fA >= ag.iv[fv]; fA--)
				if (ac.yh(fv, 4 * (fA * bS.fC + ag.it[fv]))) break loop;
			ag.it[fv]++
		}
		loop: for (; ag.it[fv] < ag.iu[fv];) {
			for (fA = ag.iw[fv]; fA >= ag.iv[fv]; fA--)
				if (ac.yh(fv, 4 * (fA * bS.fC + ag.iu[fv]))) break loop;
			ag.iu[fv]--
		}
	}, this.eu = function(player, jU) {
		return 0 === bg.ez[player] || bg.ez[player] !== bg.ez[jU]
	}, this.hW = function(player) {
		for (var aB, gZ, f1 = ag.gg[player].length, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < f1; aB++)
				if (ac.es(ag.gg[player][aB] + gZ)) return !0;
		return !1
	}, this.aI0 = function(player) {
		for (var aB, gZ, f1 = ag.gg[player].length, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < f1; aB++)
				if (ac.jW(ag.gg[player][aB]) && ac.es(ag.gg[player][aB] + gZ)) return !0;
		return !1
	}, this.hZ = function(a48, a49) {
		for (var aB, dt, gZ, gY, aYh = ag.gg[a48].length, aYi = ag.gg[a49].length, f3 = (aYi < aYh && (dt = a48, a48 = a49, a49 = dt, dt = aYh, aYh = aYi, 0), ac.f3), f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < aYh; aB++)
				if (gY = ag.gg[a48][aB] + gZ, ac.ga(gY) && ac.et(gY) === a49) return !0;
		return !1
	}, this.aI1 = function(a48, a49) {
		for (var aB, gZ, gY, aYh = ag.gg[a48].length, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < aYh; aB++)
				if (ac.jW(ag.gg[a48][aB]) && (gY = ag.gg[a48][aB] + gZ, ac.ga(gY)) && ac.et(gY) === a49) return !0;
		return !1
	}
}

function dV() {
	this.qH = new abA
}

function abA() {
	this.hc = function(player) {
		bA.gM.a43(player) && aN.zA(80, L(524), 637, 0, bB.ok, bB.nr, -1, !1)
	}, this.hf = function(player) {
		bA.gM.a43(player) && aN.zA(80, L(525), 637, 0, bB.ok, bB.nr, -1, !1)
	}
}

function abB() {
	this.abC = 0, this.eU = function() {
		aO.eU(), aZ.eU(), h.eU(), b0.y.eU(), ax.aHB(), bU.eJ.eU(), bf.dl && (bf.dl = !1, aa.vK())
	}
}

function abD() {
	this.eQ = bf.eQ, this.e9 = 0, this.abC = 0, this.aH9 = 0, this.abE = null, this.abF = 7, this.a7b = 0, this.dd = function() {
		this.aH9 = 0, this.abE = [], this.e9 = 0, this.abC = 0
	}, this.aTp = function(aC) {
		if (aD.hO) this.aBy(aC);
		else if (this.abE.push(aC), 2 === aD.a0i) {
			for (var aB = 0; aB < this.abE.length; aB++) b8.pD.eU(this.abE[aB]);
			this.abE = []
		}
	}, this.aBy = function(aC) {
		2 !== aD.a0i && (b8.pD.eU(aC), b9.eU(), aW.aBy(this.aH9), this.aH9 === aD.a58 ? (aD.q8.eU(), this.aH9 = 0, this.e9 = 0, this.abC = 0, this.eQ = bf.eQ) : (this.aH9++, af.a51(), af.mg(!0), bb.aCY()))
	}, this.eU = function() {
		h.eU(), aD.hO ? (bf.dl = aW.aBy(-1) || bf.dl, mi()) : (0 !== this.e9 || bf.eQ >= this.eQ && (this.eQ += bf.aBx * Math.floor(1 + (bf.eQ - this.eQ) / bf.aBx), 2 === aD.a0i ? mX() : this.abG(), this.e9++, 27 < bf.eQ - this.a7b)) && this
		.abH(), md(), bf.dl && (bf.dl = !1, yl()), this.a7b = bf.eQ
	}, this.abH = function() {
		bf.dl = !0, mf(), this.e9 = 0
	}, this.abG = function() {
		var w9, aB;
		if (this.abC !== 7 * this.aH9) mZ(), bb.aCY();
		else {
			w9 = !1;
			loop: for (; this.abI() && (w9 = !0, mZ(), 2 !== aD.a0i) && 0 < this.abE.length;)
				for (aB = this.abF - 2; 0 <= aB; aB--)
					if (mZ(), 2 === aD.a0i) break loop;
			w9 ? bb.aCY() : (mX(), bb.a54())
		}
	}, this.abI = function() {
		return 0 < this.abE.length && (this.aH9++, b8.pD.eU(this.abE[0]), this.abE.shift(), !0)
	}
}

function abJ() {
	var abK, abL, abM, aH9, abN, e9 = 0,
		eQ = bf.eQ;

	function abQ() {
		! function() {
			if (!aD.hO) return;
			if (aD.kf) return;
			if (2 !== aD.a0i)
				if (abN % 7 != 0) abN++;
				else if (aH9 === aD.a58) {
				if (!abT()) return;
				aW.aBy(aH9), aD.q8.eU()
			} else {
				if (!abT()) return;
				abN++, aH9++, af.a51(), af.mg(!0)
			}
			return 1
		}() && abT() && mZ()
	}

	function abR() {
		e9 = 0, (aD.hO ? (bf.dl = aW.aBy(aH9 - (abN % 7 == 0 ? 0 : 1) + abN % 7 / 7) || bf.dl, mi) : aM.hA || !bC.a5V ? mi : (bf.dl = !0, mf))()
	}

	function abT() {
		var aB, f1, abU = b9.q6.aVF,
			fj = b9.q6.aVG,
			fl = b9.q6.aVH,
			fn = b9.q6.aVI,
			abV = b9.q6.aVJ,
			abW = b9.q6.aVK;
		if (!(abK >= abW.length)) {
			if (abW = abW[abK], abV[abK]) {
				for (f1 = abL + abW, aB = abL; aB < f1; aB++) b8.pD.pv(abU[aB], fj[aB], fl[aB], fn[aB]);
				abL += abW, abK++
			} else ++abM >= abW && (abK++, abM = 0);
			return 1
		}
		aN.a1z("Replay file smaller than expected."), bC.a2o(!1), aD.a0i = 2
	}
	this.abC = 0, this.dd = function() {
		abN = aH9 = abM = abL = abK = 0
	}, this.eU = function() {
		var aZ8;
		h.eU(), bC.a9F() < 1.7 ? 0 === e9 ? bf.eQ >= eQ && (aZ8 = bf.aBx / bC.a9F(), eQ += aZ8 * Math.floor(1 + (bf.eQ - eQ) / aZ8), 2 === aD.a0i || aM.hA || !bC.a5V ? mX() : (abQ(), bb.aCY()), e9++) : abR() : function() {
			var aZ8;
			if (bf.eQ >= eQ)
				if (2 === aD.a0i || aM.hA || !bC.a5V) mX(), eQ = bf.eQ;
				else {
					for (aZ8 = bf.aBx / bC.a9F(), 16 < (bf.eQ - eQ) / aZ8 && (eQ = bf.eQ - 16 * aZ8); bf.eQ >= eQ && 2 !== aD.a0i;) eQ += aZ8, abQ();
					bb.aCY()
				} abR()
		}(), md(), bf.dl && (bf.dl = !1, yl())
	}, this.a0s = function() {
		b9.q6.aVK.length - abK <= 2 || aN.a1z("Replay file larger than expected.")
	}
}

function abX() {
	var e9 = 0,
		eQ = bf.eQ;
	this.abC = 0, this.eU = function() {
		h.eU(), aD.hO ? mi() : 0 === e9 ? bf.eQ >= eQ && (eQ += bf.aBx * Math.floor(1 + (bf.eQ - eQ) / bf.aBx), 2 === aD.a0i || aM.hA ? mX() : (mZ(), bb.aCY()), e9++) : ((aM.hA ? mi : (bf.dl = !0, mf))(), e9 = 0), md(), bf.dl && (bf.dl = !1,
		yl())
	}
}

function dR() {
	this.a0r = null, this.dl = !1, this.eQ = 0, this.aBx = 56;
	var abY = 0;

	function abZ() {
		bf.eQ = abY = performance.now(), bf.a0r.eU(), window.requestAnimationFrame(abZ)
	}
	this.dd = function() {
		this.a5S(), window.requestAnimationFrame(abZ), this.eQ = performance.now()
	}, this.a5K = function() {
		aD.h9 ? (this.a0r = new abJ, this.a0r.dd()) : aD.kf ? this.a0r = new abX : (this.a0r = new abD, this.a0r.dd())
	}, this.a5S = function() {
		this.a0r = new abB, this.dl = !0
	}, this.eU = function() {
		this.a0r.abC++
	}, this.kI = function() {
		return this.a0r.abC
	}, this.aTP = function() {
		var dt = performance.now();
		dt < abY + 1e3 || (this.eQ = dt, this.a0r.eU())
	}
}

function ct() {
	var aGZ = 0,
		aba = !0;

	function abb(id) {
		id = [L(526), L(527), L(528), L(529)][id];
		aN.a7I(id)
	}
	this.eU = function() {
		var dt, a7d;
		bf.eQ < aGZ || (aGZ = bf.eQ + 5e3, aD.h9) || aD.kf || bA.gM.hC(aD.el) || (dt = new Date, a7d = dt.getUTCSeconds(), aba ? a7d < 50 && (aba = !1) : a7d < 50 || (aba = !0, (a7d = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a7d || 20 ==
			a7d || 40 == a7d ? aD.kd < 7 && abb(0) : 10 == a7d || 30 == a7d || 50 == a7d ? 7 !== aD.kd && 10 !== aD.kd || abb(1) : 5 == a7d || 25 == a7d || 45 == a7d ? 8 === aD.kd && abb(2) : 35 == a7d && 9 === aD.kd && abb(3))))
	}
}

function cn() {
	var nK, nL, nX, nY, abc = 0,
		abd = 0;

	function abf() {
		return Math.pow(Math.pow(nX - nK, 2) + Math.pow(nY - nL, 2), .5)
	}

	function abe(e) {
		nK = h.k * e.touches[0].clientX, nL = h.k * e.touches[0].clientY, nX = h.k * e.touches[1].clientX, nY = h.k * e.touches[1].clientY
	}
	this.a2G = function(e) {
		return 1 < e.touches.length ? (abd = bf.eQ, abc = 3, abe(e), aL.s3(), !0) : (abc = 0, !1)
	}, this.a2H = function(e) {
		var aM6, iH, iI;
		return 0 !== aD.a0i && 1 < e.touches.length && (abc = Math.max(abc - 1, 0), aH.nc() && (aM6 = abf(), abe(e), e = abf(), iH = Math.floor((nK + nX) / 2), iI = Math.floor((nL + nY) / 2), aS.a9g(iH, iI, Math.max(.125, e) / Math.max(.125,
			aM6)), bf.dl = !0), !0)
	}, this.a2e = function() {
		var f8, fA;
		return !!(abc && (abc = 0, bf.eQ < abd + 500)) && (f8 = (nK + nX) / 2, fA = (nL + nY) / 2, aL.a2Y(f8, fA), aL.click(f8, fA, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e9 = 0, this.aC = null, this.dd = function(aC) {
		this.e9 = 0, this.aC = aC, this.size = aC.length
	}, this.uO = function() {
		this.aC = null
	}, this.pu = function(size) {
		for (var fS = 0, aC = this.aC, nc = this.e9 + size - 1, aB = this.e9; aB <= nc; aB++) fS |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nc - aB;
		return this.e9 += size, this.e9 > 8 * this.size && console.error("Unwrapper Overflow"), fS
	}, this.aTx = function(size) {
		var fL = size >> 1;
		return (1 << fL) * this.pu(size - fL) + this.pu(fL)
	}, this.aTy = function(abg) {
		return this.size === bD.aTw(abg)
	}, this.aVX = function(xZ, abh, abi) {
		var gT = this.pu(xZ);
		if (!gT) return null;
		for (var xZ = Math.max(gT, abi), g = new(abh <= 8 ? Uint8Array : abh <= 16 ? Uint16Array : Uint32Array)(xZ), aB = 0; aB < gT; aB++) g[aB] = this.pu(abh);
		abi = g[gT - 1];
		return abi && g.fill(abi, gT), g
	}, this.aVY = function(xZ, abj, abi) {
		var gT = this.pu(xZ);
		if (!gT) return null;
		for (var xZ = Math.max(gT, abi), g = new Array(xZ), aB = 0; aB < gT; aB++) g[aB] = this.aVV(abj);
		return g.fill(g[gT - 1], gT), g
	}, this.aVV = function(xZ) {
		return bG.wg.wk(this.pu(xZ))
	}, this.aVW = function() {
		var qT = bF.t4.t5(bF.t4.t6(this.pu(30))),
			qT = bA.rl.a4w(qT, "_", "/");
		qT = bA.rl.a4w(qT, "-", "+");
		for (var abk = "";
			(qT.length + abk.length) % 4;) abk += "=";
		qT = "data:image/png;base64," + qT + abk;
		var aIW = new Image;
		aIW.onload = function() {
			b9.aJ5.aJ6(aIW), aIW.onload = null, aIW = null
		}, aIW.src = qT
	}
}

function dL() {
	this.aWT = 0, this.aWU = 0, this.aWP = 0, this.aWQ = 0, this.aWR = 0, this.aWS = 0, this.aCZ = [0, 0, 0, 0], this.nb = function() {
		this.aWT = aS.yn(), this.aWU = aS.yo(), this.aWP = -this.aWT, this.aWQ = -this.aWU, this.aWR = h.i / iB, this.aWS = h.j / iB, this.aCZ[0] = Math.floor(this.aWP), this.aCZ[1] = Math.floor(this.aWQ), this.aCZ[2] = Math.floor(this.aCZ[0] +
			this.aWR + 1), this.aCZ[3] = Math.floor(this.aCZ[1] + this.aWS + 1), bb.aCW = !0
	}
}

function co() {
	var a8J, n7;
	this.dd = function() {
		a8J = 1, n7 = 0
	}, this.eU = function() {
		0 < a8J && (n7 = 0 === n7 ? bf.eQ + 16 : n7, a8J = (a8J -= .001 * (bf.eQ - n7)) < 0 ? 0 : a8J, n7 = bf.eQ, bf.dl = !0)
	}, this.vK = function() {
		0 < a8J && (vL.fillStyle = "rgba(0,0,0," + a8J + ")", vL.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e9 = 0, this.aC = null, this.dd = function(aC) {
		this.e9 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(abg) {
		return this.dd(new Uint8Array(this.aTw(abg))), this.aC
	}, this.uO = function() {
		this.aC = null
	}, this.a8 = function(size, a7h) {
		for (var aC = this.aC, nc = this.e9 + size - 1, aB = this.e9; aB <= nc; aB++) aC[aB >> 3] |= (a7h >> nc - aB & 1) << 7 - (7 & aB);
		this.e9 += size, this.e9 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aTv = function(size, a7h) {
		var fL = size >> 1,
			f4 = 1 << fL;
		this.a8(size - fL, bL.du(a7h, f4)), this.a8(fL, a7h % f4)
	}, this.abn = function(size) {
		for (var aC = this.aC, nc = this.e9 + size, aB = this.e9; aB < nc; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aTw = function(abg) {
		return abg + 7 >> 3
	}, this.abo = function(g, jb, nc, abp) {
		for (var aB = jb; aB < nc; aB++) this.a8(abp, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e9 = 0
	}, this.aUK = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(abq, value) {
		for (var g = this.g, nc = this.e9 + abq - 1, abr = 1 + (nc >> 3); g.length < abr;) g.push(0);
		for (var aB = this.e9; aB <= nc; aB++) g[aB >> 3] |= (value >> nc - aB & 1) << 7 - (7 & aB);
		this.e9 += abq
	}, this.dk = function(g, xZ, abh) {
		var abt = bA.qu.a3Q(g);
		this.a8(xZ, abt);
		for (var aB = 0; aB < abt; aB++) this.a8(abh, g[aB])
	}, this.aVp = function(g, xZ, abj) {
		var abt = bA.qu.a3Q(g);
		this.a8(xZ, abt);
		for (var aB = 0; aB < abt; aB++) this.aVn(g[aB], abj)
	}, this.aVn = function(qT, xZ) {
		var f1 = qT.length;
		this.a8(xZ, f1);
		for (var aB = 0; aB < f1; aB++) this.a8(16, qT.charCodeAt(aB))
	}, this.aVo = function(a3W) {
		var abu = (a3W = a3W.toDataURL()).split(",");
		if (abu.length < 2) console.log("error 266");
		else {
			a3W = bA.rl.a4w(a3W = abu[abu.length - 1], "/", "_"), a3W = bA.rl.a4w(a3W, "\\+", "-");
			var a3W = bA.rl.a4w(a3W, "=", ""),
				wt = bG.t4.wq(a3W),
				f1 = wt.length;
			this.a8(30, f1);
			for (var aB = 0; aB < f1; aB++) this.a8(6, wt[aB])
		}
	}
}
a(), self.aiCommand746 = function(fS) {
	0 === fS ? bt() : 1 !== fS || !a0 || 1 !== a0.id || a0.dw < 14 || bJ.fT()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};