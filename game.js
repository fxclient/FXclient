var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fq, fr, fs, ft, fu, fv, fw, fx, fy, fz, g0, g1, g2, iB, ib, ic,
	a8g, lw, k6, a2I, vR, yy, aCm, a5T, a5U, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "rgb(", "<br>", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span", "Data", "0.5em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "' target='_blank'>",
		"undefined", "pre", "break-word", "</a>", "50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number",
		"nowrap", "mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload",
		"wheel", "translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo",
		"loading", "keydown", "italic ", "https://", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon",
		"Interest", "False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room", "<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>",
		"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "255,255,255", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ",
		" / 180", " / 160", " -> "
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
	this.dq = 1117, this.n = 2151, this.rVersion = 17, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dw = "13 Dec 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
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
		return !(!eS || bf.eQ < eT) && (__fx.settings.hidePropagandaPopup ? void 0 : (eT = bf.eQ + 6e4, (new ea).show(eS.eb, eS.colors, eS.id), !(eS = null)))
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
		if (!this.lZ && bf.kI() % 30 == 7 && bA.gM.ls(90) && (ao.performance.lZ = 1)) {
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
		.no(0, 40, 90, .75), this.om = eZ.no(0, 0, 255, .6), this.on = eZ.nm(200, 200, 255), this.oo = eZ.no(50, 50, 255, .83), this.op = eZ.no(20, 90, 150, .75), this.oq = eZ.nm(255, 120, 100), this.or = eZ.no(255, 255, 0, .5), this.os = eZ.no(255,
			255, 150, .2), this.ot = eZ.nm(255, 255, 0), this.ou = eZ.nm(255, 255, 200), this.ov = eZ.no(200, 200, 0, .6), this.ow = eZ.no(140, 120, 0, .75), this.ox = eZ.no(180, 160, 40, .75), this.oy = eZ.no(70, 50, 20, .85), this.oz = eZ.no(30,
			30, 0, .85), this.p0 = eZ.no(60, 60, 0, .85), this.p1 = eZ.nm(255, 255, 100), this.p2 = eZ.nm(255, 255, 140), this.p3 = eZ.no(255, 140, 0, .75), this.p4 = eZ.no(70, 40, 0, .85), this.p5 = eZ.nm(255, 150, 0), this.p6 = eZ.no(255, 200, 80,
			.85), this.p7 = eZ.no(0, 0, 0, 0), this.p8 = eZ.no(255, 255, 255, 0), this.p9 = eZ.no(254, 254, 254, 0)
}

function cy() {
	this.hQ = new pA, this.gM = new pB, this.pC = new pD, this.pE = new pF, this.kN = new pG
}

function pA() {
	this.hR = function(en) {
		aD.kf ? b8.pC.hR(aD.el, en) : b0.pH.pI(en)
	}, this.hX = function(ia, jU) {
		aD.kf ? b8.pC.hX(aD.el, ia, jU) : b0.pH.pJ(ia, jU)
	}, this.pK = function(ia, pL) {
		aD.kf ? b8.pC.pM(aD.el, ia, pL) : b0.pH.pN(ia, pL)
	}, this.hc = function(ia, en) {
		en = (en << 3) + bO.fc[6];
		aD.kf ? b8.pC.hc(aD.el, ia, en) : bN.mR.mS(aD.el) && b0.pH.pP(ia, en)
	}, this.hf = function(ia) {
		849 === ia && (ia = 850);
		var nH = bO.fc[3];
		aD.kf ? b8.pC.hf(aD.el, ia, nH) : bN.hd.pQ(aD.el, nH) && b0.pH.pR(ia, nH)
	}, this.pS = function(nH) {
		aD.kf ? b8.pC.pS(aD.el, nH) : b0.pH.pR(849, nH)
	}, this.pT = function(jU) {
		aD.kf ? b8.pC.pT(aD.el, jU) : b0.pH.pU(jU)
	}, this.pV = function(pW) {
		aD.kf ? b8.pC.pX(aD.el, pW) : b0.pH.pY(pW)
	}, this.ho = function(pZ) {
		aD.kf ? b8.pC.ho(aD.el, pZ) : b0.pH.pa(pZ)
	}, this.pb = function() {
		aD.kf ? b8.pC.pb(aD.el) : b0.pH.pc()
	}, this.hl = function() {
		aD.kf ? b8.pC.hl(aD.el) : b0.pH.pU(513)
	}, this.hT = function(ia, en, jU) {
		aD.kf ? b8.pC.hT(aD.el, ia, en, jU) : b0.pH.pd(ia, en, jU)
	}
}

function pG() {
	this.kO = function(player, pL, hj) {
		bA.gM.pe(player, hj, pL) && (ae.pK(player, pL), !bA.gM.ji(pL)) && ao.j8.jx[pL] && ao.j8.jx[pL]--
	}, this.pf = function(player, pL, hj) {
		bA.gM.pg(hj, pL) ? an.eY(pL, bO.fX[0]) && (bq.ph(player, pL, bO.fX[0], 1), bA.gM.gP(pL, bO.fX[0]), bd.pi(player, pL), af.pj(pL, bO.fX[0])) : bd.gQ(player, hj, 12)
	}
}

function pB() {
	this.pk = function(pW, player) {
		aN.pV(aD.el, player, pW), b0.pH.pl(pW, player)
	}, this.pm = function(player) {
		aN.pn(player, 0), b0.pH.po(player)
	}, this.pp = function(pq, player) {
		aN.pr(pq, player), b0.pH.ps(pq, player)
	}, this.pt = function() {
		aD.kf || aD.h9 || b0.pu.pt()
	}
}

function pF() {
	this.eU = function(aC) {
		var id, fj, nc;
		for (bH.dd(aC), bH.e9 += 2, nc = 8 * bH.size; bH.e9 + 8 <= nc;) id = bH.pv(4), fj = bH.pv(9), 0 === id ? this.pw(id, fj, bH.pv(22)) : 1 === id ? this.pw(id, fj, bH.pv(10), bH.pv(10)) : 2 === id ? this.pw(id, fj, bH.pv(10), bH.pv(9)) :
			3 === id ? this.pw(id, fj, bH.pv(10), bH.pv(27)) : 4 === id ? this.pw(id, fj, bH.pv(10), bH.pv(16)) : 5 === id || 6 === id ? this.pw(id, fj, bH.pv(10)) : 7 === id ? this.pw(id, fj, bH.pv(1)) : 10 === id ? this.pw(id, fj, bH.pv(20), bH
				.pv(22)) : this.pw(id, fj)
	}, this.px = [], this.py = function() {
		for (var q0 = 0, q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, aB = 0; aB < 512; aB++) q0 += ag.mu[aB], q1 += ag.go[aB], q2 += ag.h2[aB], q3 += bN.y.kP[aB];
		q4 += bN.y.mB, q5 += al.kr, this.px.push(q2 % 1073741824 * 4 + (q0 + q1 + q3 + q4 + q5) % 4)
	}, this.pw = function(id, fj, fl, fn) {
		0 === id ? b8.pC.hR(fj, fl) : 1 === id ? b8.pC.hX(fj, fl, fn) : 2 === id ? b8.pC.pM(fj, fl, fn) : 3 === id ? b8.pC.hc(fj, fl, fn) : 4 === id ? b8.pC.hf(fj, fl, fn) : 5 === id ? b8.pC.pT(fj, fl) : 6 === id ? b8.pC.pX(fj, fl) : 7 === id ?
			b8.pC.ho(fj, fl) : 8 === id ? b8.pC.pb(fj) : 9 === id ? b8.pC.q6(fj) : 10 === id && b8.pC.hT(fj, fl >> 10, fn, fl % 1024)
	}
}

function pD() {
	this.hR = function(player, en) {
		bA.gM.hB(0) && bA.gM.hC(player) && bM.ih(en) && (b9.q7.q8(0, player, en), aD.q9.eY(player, en))
	}, this.hX = function(player, ia, jU) {
		bA.gM.hB(1) && bA.gM.hC(player) && bA.gM.qA(player, jU) && bA.gM.mT(player, ia, 12, 0) && bA.gM.qB(player, jU) && ((jU = ad.jg(player, bO.ex[0])) || ad.jz(player)) && (ag.qC[player]++, b9.q7.q8(1, player, ia, bO.ex[0]), ao.j6.jK(player,
			jU)) && (bA.gM.mV(player), bd.qD(player, ia), ao.j6.jQ(player))
	}, this.pM = function(player, ia, pL) {
		bA.gM.hB(1) && bA.gM.hC(player) && aD.hu && bA.gM.qA(player, pL) && bA.gM.qE(player, pL) && bA.gM.pe(player, bA.gM.iZ(player, ia), pL) && an.eY(pL, bO.fX[0]) && (b9.q7.q8(2, player, ia, pL), ae.pK(player, pL))
	}, this.hc = function(player, ia, pO) {
		bO.fc[1] = 7 & pO;
		var en = pO >> 3;
		bA.gM.hB(1) && bA.gM.hC(player) && bM.ih(en) && bN.mR.mS(player) && bN.mR.qF(en) && bA.gM.mT(player, ia, 32, 0) && bN.l8.qG(player, en, 1) && (bd.qH(player), b9.q7.q8(3, player, ia, pO), bA.gM.mV(player), bl.qI.hc(player), bN.y.mW(
			player))
	}, this.hf = function(player, ia, nH) {
		849 === ia ? this.pS(player, nH) : bA.gM.hB(1) && bA.gM.hC(player) && bA.gM.mT(player, ia, 32, 0) && bN.hd.qJ(player, nH) && (bd.qH(player), b9.q7.q8(4, player, ia, nH), bA.gM.mV(player), bl.qI.hf(player), bN.y.mW(player))
	}, this.pS = function(player, nH) {
		bA.gM.hB(1) && bA.gM.hC(player) && bN.qK.eU(player, nH) && b9.q7.q8(4, player, 849, nH)
	}, this.pT = function(player, jU) {
		513 === jU ? this.hl(player) : bA.gM.hB(1) && bA.gM.hC(player) && (jU = Math.min(jU, aD.ey), ad.jg(player, jU)) && (b9.q7.q8(5, player, jU), ad.qL(player, jU))
	}, this.pX = function(player, pW) {
		(bA.gM.hB(1) || bA.gM.hB(2)) && bA.gM.hC(player) && (pW = bL.i8(pW, 0, 1023), b9.q7.q8(6, player, pW), af.qM(player, 0, pW))
	}, this.ho = function(player, pZ) {
		aw.hn(player) && (b9.q7.q8(7, player, pZ), aw.qN(player, pZ))
	}, this.pb = function(player) {
		(bA.gM.hB(0) || bA.gM.hB(1)) && bA.gM.hC(player) && aM.qO(player) && (b9.q7.q8(8, player), bQ.pb(player))
	}, this.q6 = function(player) {
		b9.q7.q8(9, player), bQ.q6(player)
	}, this.hl = function(player) {
		aw.hp(player) && (b9.q7.q8(5, player, 513), aw.hl(player))
	}, this.hT = function(player, ia, en, jU) {
		bA.gM.hB(1) && bA.gM.hC(player) && bA.gM.qA(player, jU) && bA.gM.qB(player, jU) && bM.ih(en) && am.ec.ev(player, en) && (ad.jg(player, bO.ex[0]) || ad.jz(player)) && (b9.q7.q8(10, player, (ia << 10) + bO.ex[0], en), jU = bA.gM.lX(player,
			ia), ag.gS[player].push(bO.f2[0]), ad.eY(player, jU, bO.ex[0]), aF.jS(player, !0), bd.qP(player))
	}
}

function qQ() {
	var qS;
	this.qR = [], this.qS = document.createElement("div"), this.qT = function(qU, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qU, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qS.appendChild(
			title), title
	}, this.qV = function(qU, marginBottom) {
		var qW = document.createElement("p");
		return qW.textContent = qU, qW.style.fontSize = "0.75em", qW.style.lineHeight = "1.2em", qW.style.marginBottom = marginBottom || "0", this.qS.appendChild(qW), qW
	}, this.qX = function(qU) {
		var qY = document.createElement("p");
		return qY.textContent = qU, qY.style.fontSize = "1em", qY.style.marginBottom = "0", qY.style.whiteSpace = "pre-wrap", qY.style.overflowWrap = "break-word", this.qS.appendChild(qY), qY
	}, this.qZ = function(qa, fontSize) {
		var qS = document.createElement("div");
		return qS.innerHTML = qa, qS.style.fontSize = fontSize || "1em", qS.style.lineHeight = "1.2em", this.qS.appendChild(qS), qS
	}, this.qb = function(qc) {
		for (var qd = qc.qd, f1 = qd.length, aB = 0; aB < f1; aB++) this.qS.appendChild(qd[aB])
	}, this.qe = function(qf) {
		return this.qR.push(qf), this.qS.appendChild(qf.e), qf
	}, this.resize = function() {
		for (var f1 = this.qR.length, aB = 0; aB < f1; aB++) this.qR[aB].resize && this.qR[aB].resize()
	}, (qS = this.qS).style.position = "absolute", qS.style.height = "auto", qS.style.padding = "0.5em"
}

function qg(qh, qi) {
	var qS = document.createElement("div");

	function qq() {
		var aB, qr, j, gZ, f4, qm = h.k * qS.offsetWidth,
			qs = new Float64Array(function(qm) {
				var i = .25 * bA.qn.qo(.6) * h.iA;
				return Math.max(Math.floor(qm / i), 1)
			}(qm)),
			qt = bc.qt,
			qu = (qm - (qs.length + 1) * bc.gap) / (qs.length * h.k);
		for (qs.fill(qt), aB = 0; aB < qi.length; aB++) qr = (f4 = qi[aB].qS).style, j = bA.qv.min(qs), gZ = qs.indexOf(j), qr.top = bA.qn.qw(j), qr.left = bA.qn.qw(qt + gZ * (qu + qt)), qr.width = bA.qn.qw(qu), bA.qn.qx(f4, 5), qs[gZ] += f4
			.offsetHeight + 3 * qt;
		qS.style.height = bA.qn.qw(bA.qv.max(qs) - 2 * qt)
	}
	this.qj = qS, this.qk = qi, this.resize = function() {
		var aB;
		for (aB = 0; aB < qi.length; aB++) qi[aB].resize();
		qq(), qq()
	}, qS.style.width = "100%", qS.style.maxWidth = "100%", qh.style.lineHeight = "1.5em", qh.style.overflowX = "hidden", qh.style.overflowY = "auto";
	for (var aB = 0; aB < qi.length; aB++) qS.appendChild(qi[aB].qS);
	qh.appendChild(qS)
}

function w(qy, qz, r0, r1, r2) {
	var self, r3 = document.createElement("button");

	function rA() {
		var rG;
		bJ.rF() || (rG = bA.color.rH(r0), !1 !== r1 && 0 < rG[0] && rG[0] < 255 && rG[0] === rG[1] && rG[0] === rG[2]) || (128 < rG[0] && 128 < rG[1] && 128 < rG[2] ? r3.style.backgroundColor = bA.color.rI(r0, -50) : r3.style.backgroundColor = bA
			.color.rI(r0, rG[3] && rG[3] < 120 ? 150 : 50))
	}

	function r9() {
		if (r1) {
			var rG = bA.color.rH(r0);
			if (rG[0] === rG[1] && rG[0] === rG[2]) return
		}
		qz && ((rG = qz(this)) ? 2 === rG && rA() : rK(this))
	}

	function rC() {
		this.style.backgroundColor = r0
	}

	function rB() {
		rK(this)
	}

	function rK(f4) {
		f4.style.backgroundColor = r0, f4.blur()
	}
	this.button = r3, this.r4 = qz, this.r5 = r0, this.r8 = function(rD) {
		rD = 1.1 - Math.min(.01 * qy.length, .6) + .2 * rD;
		r3.style.fontSize = rD.toFixed(1) + "em"
	}, this.r7 = function(eZ) {
		eZ ? 1 === eZ ? eZ = bB.o6 : 2 === eZ && (r1 = 1, eZ = bB.o6) : (r1 = 0, eZ = bB.nq), this.r5 = r0 = eZ, r3.style.backgroundColor = eZ
	}, self = this, r3.innerHTML = qy, r3.style.color = r2 ? bB.ot : bB.nu, r3.style.userSelect = "none", r3.style.outline = "none", r3.style.overflowWrap = "break-word", self.r7(r0), r3.style.border = "none", r3.style.font = "inherit", self.r8(
		0), r3.style.padding = "0em 0.3em", r3.onclick = r9, r3.addEventListener("mouseover", rA), r3.addEventListener("mouseout", rB), r3.addEventListener("focus", rA), r3.addEventListener("blur", rC)
}

function rL(rM, qh) {
	var qS;
	this.resize = function() {
		for (var aB = 0; aB < rM.length; aB++) bA.qn.qx(rM[aB].button);
		qS.style.gap = qS.style.padding = bA.qn.qw(bc.qt)
	}, (qS = document.createElement("div")).style.display = "grid", qS.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qS.style.overflowY = "auto", qS.style.gridAutoRows = "5.3em", qS.style.maxHeight = "100%";
	for (var aB = 0; aB < rM.length; aB++) rM[aB].r8(1), qS.appendChild(rM[aB].button);
	qh.appendChild(qS)
}

function rO(rP, rQ, rR) {
	this.f8 = 0, this.fA = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qn.qo(rR || .5) * rP[1] * h.iA, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rP[0] / rP[1]), h.i - 2 * bc.gap), this.j = rP[1] * this.i / rP[0], this.f8 = bc.gap + rQ[0] * (h.i - this.i - 2 * bc.gap), this.fA = bc
			.gap + rQ[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rS = function() {
		return this.f8 + .5 * this.i
	}
}

function rT(rU, rV) {
	var re, self, rW = document.createElement("div"),
		rX = document.createElement("div"),
		rY = document.createElement("div"),
		rZ = null,
		rf = (this.ra = new rb({
			value: "",
			e9: -1
		}, 0, rc, function(e) {
			e.target.value = bA.rm.rn(e.target.value), rZ.rl.textContent = 127 - e.target.value.length
		}), 0),
		rg = 1,
		rh = 0,
		ri = 1048575;

	function rc() {
		rU(), rZ.rl.textContent = 127
	}

	function rx(rw, qf) {
		qf && (qf.s2 = 1, rw.appendChild(bn.s3.transform(qf)))
	}

	function s0(bu) {
		rg ? rW.scrollTop = rW.scrollHeight : bu && (rW.scrollTop = rh)
	}
	this.ro = function(rp) {
			ri = 1048575, rX.textContent = "", rp || this.mh()
		}, this.mh = function() {
			var rq = bn.y.rr[0],
				rq = bn.y.rt[rq],
				ru = rq.ru,
				f1 = ru.length,
				jb = 1048575 === ri ? 0 : f1 - (rq.rv - ri + 1048575) % 1048575;
			if (ri = rq.rv, !(f1 <= (jb = Math.max(jb, 0)))) {
				for (var rw = document.createDocumentFragment(), aB = jb; aB < f1; aB++) rx(rw, bn.lA.ry(ru[aB], bn.lA.rz(ru[aB])));
				rX.appendChild(rw), s0()
			}
		}, this.s1 = function(r) {
			var rw = document.createDocumentFragment();
			rx(rw, r), rX.appendChild(rw), s0()
		}, this.show = function(qh) {
			qh.appendChild(rW), qh.appendChild(rY), this.resize(qh)
		}, this.s4 = function(qh) {
			t.removeChild(qh, rW), t.removeChild(qh, rY)
		}, this.resize = function(qh) {
			rf = qh ? qh.offsetHeight : rf;
			var qh = bA.qn.s6(.04, .75),
				s7 = Math.max(qh, rf - qh),
				s8 = h.i / h.k,
				s9 = .7 * s8,
				sA = bA.qn.qw(rf - qh - s7),
				s7 = (rY.style.height = bA.qn.qw(qh), rW.style.height = bA.qn.qw(s7), h.j > h.i || a0.a1.i9() ? (rY.style.top = sA, rW.style.top = bA.qn.qw(rf - s7), bA.qn.qx(rW, 8)) : (rW.style.top = sA, rY.style.top = bA.qn.qw(rf - qh), bA.qn.qx(
						rW, 2)), this.ra.e.style.width = bA.qn.qw(s9), this.ra.e.style.fontSize = re.button.style.fontSize = bA.qn.qw(.5 * qh), bA.qn.qx(this.ra.e, 6), re.button.style.left = bA.qn.qw(s9), re.button.style.width = bA.qn.qw(s8 - s9),
					.385 * qh);
			a0.a1.i9() && (s7 *= .8 - .12 * (h.i > h.j)), rX.style.marginLeft = rX.style.marginRight = bA.qn.qw(.5 * s7), rX.style.fontSize = bA.qn.qw(s7), s0(1)
		}, (self = this).ra.e.rj = 127, rW.style.position = "absolute", rW.style.left = "0", rW.style.width = "100%", rW.style.overflowX = "hidden", rW.style.overflowY = "auto", rW.style.font = "inherit", rW.style.backgroundColor = bB.ns, rW
		.addEventListener("scroll", function() {
			rh = rW.scrollTop, rg = rh < rW.scrollHeight - rW.clientHeight - 2 ? 0 : 1
		}), rX.style.font = "inherit", rY.style.position = "absolute", rY.style.left = "0", rY.style.width = "100%", self.ra.e.setAttribute("placeholder", L(13)), self.ra.e.style.position = "absolute", self.ra.e.style.top = "0", self.ra.e.style
		.left = "0", self.ra.e.style.height = "100%", self.ra.e.style.backgroundColor = bB.np, self.ra.e.style.textAlign = "center", (re = new w(L(14), rc)).button.top = "0", re.button.style.position = "absolute", re.button.style.height = "100%", re
		.r7(bB.p8), rZ = new rk("127", re.button, 1, 1), rW.appendChild(rX), rY.appendChild(self.ra.e), rY.appendChild(re.button)
}

function sC(sD, qy, sE) {
	function click() {
		var value = 1 - sD.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qy, void 0 !== sD.e9 ? bj.sF.sG(sD.e9, value) : sD.value = value, sE && sE(value)
	}
	var e;
	qy = qy || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sD.value ? "🟩 " : "⬜ ") + qy, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sH(qh, qa) {
	var qS = document.createElement("div");
	this.qj = qS, this.resize = function() {
		qS.style.padding = bA.qn.qw(bc.qt), qS.style.lineHeight = bA.qn.qw(bA.qn.s6(.035))
	}, qh.style.overflowX = "hidden", qh.style.overflowY = "auto", qS.innerHTML = qa, qh.appendChild(qS)
}

function sI(sJ) {
	var qS = document.createElement("div");
	this.e = qS, this.sK = sJ, this.resize = function() {
		for (var f1 = sJ.length, aB = 1; aB < f1; aB++) bA.qn.qx(sJ[aB], 4)
	};
	var aB, f1 = sJ.length;
	for (qS.style.width = "100%", qS.style.height = "2.7em", qS.style.marginTop = "0.6em", qS.style.border = "inherit", aB = 0; aB < f1; aB++) sJ[aB].style.verticalAlign = "top", sJ[aB].style.width = (100 / f1).toFixed(2) + "%", sJ[aB].style.height =
		"100%", sJ[aB].style.fontSize = "0.75em", qS.appendChild(sJ[aB])
}

function sL(sM, r0, sN) {
	this.qS = document.createElement("div"), this.rM = sM;
	var sO = 0;
	this.resize = function(qh, sQ) {
		var f1 = sM.length;
		if (!sN)
			for (var aB = 1; aB < f1; aB++) bA.qn.qx(sM[aB].button, 4);
		for (var sR = 0, aB = 0; aB < f1; aB++) sR += sM[aB].button.offsetWidth;
		if (qh && (sO = qh.offsetWidth), sQ && sR < sO)
			for (aB = 0; aB < f1; aB++) sM[aB].button.style.width = (100 * sM[aB].button.offsetWidth / sR).toFixed(2) + "%";
		else
			for (aB = 0; aB < f1; aB++) sM[aB].button.style.width = "auto";
		sQ || this.resize(qh, 1)
	};
	var sP = this;
	sP.qS.style.height = sP.qS.style.maxHeight = "100%";
	for (var aB = 0; aB < sM.length; aB++) sM[aB].r7(r0), sM[aB].button.style.height = "100%", sM[aB].button.style.padding = "0.0em 0.9em", sP.qS.appendChild(sM[aB].button)
}

function sS() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qn.qx(this.e, 8, bB.o3)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sT() {
	var sY, sZ, sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = 0,
		sX = 0;
	this.show = function(f8, fA, qU, sa, sb, eZ) {
			if (sW) {
				if (!sa) return;
				this.s4()
			}
			f8 === fA && -1 === f8 ? (f8 = sY, fA = sZ) : (sY = f8, sZ = fA);
			var sc = Math.floor(bA.qn.s6(.018)),
				sb = (f8 = Math.max(sc + 2, f8), sb || (sX = sa), sW = 1, h.i / h.k),
				sa = (sU.style.whiteSpace = "pre", sU.textContent = qU, bA.qn.qx(sU, 5), sU.style.font = bA.qn.se(0, bA.qn.s6(.015)), sU.style.padding = "0.3em 0.6em", sU.style.left = f8 + "px", sU.style.top = "0px", document.body.appendChild(sU),
					f8 + sU.offsetWidth - sb),
				qU = (0 < sa && (f8 -= sa, f8 = Math.max(sc + 1, f8), sU.style.left = f8 + "px", f8 < sc + 2) && (sU.style.whiteSpace = "pre-wrap"), sU.offsetHeight);
			sU.style.top = fA - qU + sX * bc.sg + "px", f8 -= sc, sV.style.backgroundColor = bA.color.nm(eZ >> 12 << 2, (eZ >> 6 & 63) << 2, (63 & eZ) << 2), sV.style.left = f8 + "px", sV.style.top = sU.style.top, sV.style.width = sc + "px", sV.style
				.height = qU + "px", bA.qn.qx(sV, 4), bA.qn.qx(sV, 8), bA.qn.qx(sV, 2), document.body.appendChild(sV)
		}, this.s4 = function(sh) {
			if (sW) {
				if (sh && sX) return 0;
				sW = 0, t.removeChild(document.body, sU), t.removeChild(document.body, sV)
			}
			return 1
		}, sU.style.position = "absolute", sU.style.backgroundColor = bB.nq, sU.style.color = bB.nu, sU.style.pointerEvents = "none", sU.style.zIndex = "5", sU.style.maxWidth = "100%", sV.style.position = "absolute", sV.style.color = bB.nu, sV.style
		.pointerEvents = "none", sV.style.zIndex = "5"
}

function rb(si, type, sj, sk) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sl++, e.value = si.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.nu, e.style.backgroundColor = bB.nn, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sm++
		}), e.addEventListener("blur", function() {
			h.sm--, -1 !== si.e9 && bj.sF.sG(si.e9, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== si.e9 && bj.sF.sG(si.e9, e.value), sj ? sj() : e.blur())
		}), sk && e.addEventListener("input", function(qf) {
			sk(qf)
		})
}

function sn(qh, data) {
	var f1 = data.so.length,
		sp = document.createElement("div"),
		sq = document.createElement("div"),
		sr = document.createElement("div"),
		ss = new Array(f1),
		qi = new Array(f1),
		st = new Array(data.su.length),
		sv = bA.color.no(70, 70, 0, .35);

	function rI() {
		this.style.backgroundColor = bA.color.rI(sv, 160)
	}

	function t0() {
		this.style.backgroundColor = sv
	}

	function qq() {
		var fK;
		for (qh.style.font = bA.qn.se(0, bA.qn.tA(.026, .5, .03)), aB = 1; aB < st.length; aB++) bA.qn.qx(st[aB], 4);
		if (bA.qn.qx(sp, 2), f1) {
			for (var hS, tB = sp.offsetWidth, tC = sr.offsetWidth, aB = 0; aB < st.length; aB++) hS = .01 * data.sz[aB] * tC, st[aB].style.width = (100 * hS / tB).toFixed(2) + "%";
			var lG = data.so[0].length;
			for (aB = 0; aB < f1; aB++)
				for (bA.qn.qx(ss[aB], 2), fK = 1; fK < lG; fK++) bA.qn.qx(qi[aB][fK], 4);
			sq.sw && (sq.scrollTop = sq.sw)
		}
	}
	this.resize = function() {
			qq(), qq()
		}, qh.style.display = "flex", qh.style.flexDirection = "column", sq.style.overflowX = "hidden", sq.style.overflowY = "auto", sq.addEventListener("scroll", function() {
			this.sw = this.scrollTop
		}),
		function() {
			var f4, aB, so = data.so,
				lG = f1 ? so[0].length : 0;
			for (aB = 0; aB < f1; aB++) {
				ss[aB] = document.createElement("div"), ss[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.no(130, 130, 130, .35) : bB.nt
				}(aB), ss[aB].style.width = "100%", ss[aB].style.display = "flex", qi[aB] = new Array(lG);
				for (var fK = 0; fK < lG; fK++) qi[aB][fK] = f4 = document.createElement("div"), f4.style.display = "flex", f4.style.justifyContent = "center", f4.style.wordBreak = "break-all", f4.style.padding = "0.4em 0em", f4.style.width = data
					.sz[fK] + "%", f4.innerHTML = so[aB][fK].fS, 1 === so[aB][fK].dt && (f4.name = "" + aB, f4.style.color = bB.ot, f4.style.backgroundColor = sv, f4.addEventListener("mouseover", rI), f4.addEventListener("mouseout", t0), function(f4,
						t2, t3) {
						2147483647 !== t3 && f4.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, t2), bH.dd(bD.aC), this.style.backgroundColor = sv, t.u(8, t.t4, new t5(25, {
								t6: 0,
								t2: bF.t7.t8(bF.t7.t9(5)),
								t3: t3
							}))
						})
					}(f4, so[aB][fK].t2, so[aB][fK].t3)), ss[aB].appendChild(f4)
			}
			for (sp.style.display = "flex", sp.style.backgroundColor = bA.color.no(0, 120, 0, .35), aB = 0; aB < st.length; aB++) st[aB] = f4 = document.createElement("div"), f4.style.display = "flex", f4.style.justifyContent = "center", f4.style
				.wordBreak = "break-all", f4.style.padding = "0.4em 0em", f4.style.width = data.sz[aB] + "%", f4.innerHTML = data.su[aB], sp.appendChild(f4)
		}();
	for (var aB = 0; aB < f1; aB++) sr.appendChild(ss[aB]);
	sq.appendChild(sr), qh.appendChild(sp), qh.appendChild(sq)
}

function tD() {
	var tH, tI, tE = document.createElement("div"),
		tF = document.createElement("div"),
		tG = document.createElement("div"),
		sr = document.createElement("div"),
		rM = [],
		e4 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tJ = [1, 2, 3, 0, 9, 10, 11];

	function tL(aB) {
		t.u(8, 0, new t5(21, {
			tN: tJ[aB],
			tO: 0,
			tP: 10
		}))
	}
	this.show = function() {
			this.sG(t.y.tQ), document.body.appendChild(tE)
		}, this.s4 = function() {
			t.removeChild(document.body, tE)
		}, this.sG = function(tQ) {
			for (var tR = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rM.length; aB++) {
				var i = tQ[aB];
				tH[tR[aB]][1].rl.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tS = bc.gap,
				j = bA.qn.tT(.085),
				i = Math.min(4 * j, h.i - 2 * tS),
				f1 = rM.length;
			for (bA.qn.tU(tE, tS, h.j - tS - j, i, j), bA.qn.qx(tE), bA.qn.qx(tF, 6), aB = 0; aB < f1 - 1; aB++) bA.qn.qx(rM[aB].button, 6);
			for (aB = 0; aB < f1; aB++) tH[aB][0].resize(), tH[aB][1].resize();
			for (rM[0].f8 = 0, rM[0].button.style.left = bA.qn.qw(rM[0].f8), rM[0].button.style.width = bA.qn.tV(1.7 * j), aB = 1; aB < f1; aB++) rM[aB].f8 = rM[aB - 1].f8 + rM[aB - 1].button.offsetWidth, rM[aB].button.style.left = bA.qn.qw(rM[aB]
				.f8);
			if (!tI) {
				if (!ab.tW()) return;
				(tI = ab.get(14)).style.width = "24%", tI.style.position = "absolute", tF.appendChild(tI)
			}
			tI.style.left = bA.qn.qw(0), tI.style.top = "7%", tG.tX && (tG.scrollLeft = tG.tX)
		}, tE.style.position = "absolute", tF.style.width = "25%", tF.style.height = "100%", tF.style.backgroundColor = bB.nq, tG.style.position = "absolute", tG.style.width = "75%", tG.style.height = "100%", tG.style.backgroundColor = bB.nq, tG
		.style.top = tG.style.right = bA.qn.qw(0), bA.qn.tK(tG), sr.style.height = sr.style.maxHeight = "100%", rM.push(new w("", function() {
			tL(0)
		}, bB.oe)), rM.push(new w("", function() {
			tL(1)
		}, bB.og)), rM.push(new w("", function() {
			tL(2)
		}, bB.oX)), rM.push(new w("", function() {
			tL(3)
		}, bB.oI)), rM.push(new w("", function() {
			tL(4)
		}, bB.p4)), rM.push(new w("", function() {
			tL(5)
		}, bB.p0)), rM.push(new w("", function() {
			tL(6)
		}, bB.p4)), tH = new Array(rM.length);
	for (var aB = 0; aB < rM.length; aB++) rM[aB].button.style.position = "absolute", tH[aB] = [new tM(e4[aB], rM[aB].button, .25, .45), new tM("", rM[aB].button, .53, .84, 1)], rM[aB].button.style.height = rM[aB].button.style.maxHeight = "100%", rM[
		aB].button.top = bA.qn.qw(0), sr.appendChild(rM[aB].button);
	tG.appendChild(sr), tE.appendChild(tF), tE.appendChild(tG)
}

function tY(tZ, ta, tb, tc, rU, rV) {
	var td = document.createElement("div"),
		te = document.createElement("div"),
		tf = document.createElement("div"),
		tg = document.createElement("div"),
		th = document.createElement("div"),
		ti = document.createElement("div"),
		tj = document.createElement("div"),
		tk = document.createElement("div"),
		tl = document.createElement("span"),
		tm = document.createElement("div");
	this.tn = new rT(rU, rV), this.tp = new tq(rV), this.tr = [tZ, ta, tb, tc], this.tv = function(tw) {
		tw = (tw / 10).toFixed(1) + "%";
		tk.style.width = tw, tl.innerHTML = tw
	}, this.tx = function() {
		this.tp.s4(ti), this.tn.show(ti)
	}, this.ty = function() {
		this.tn.s4(ti), this.tp.show(ti)
	}, this.tz = function() {
		return te
	}, this.show = function() {
		document.body.appendChild(td)
	}, this.s4 = function() {
		t.removeChild(document.body, td)
	}, this.resize = function(u0) {
		var u1 = 1 - .4 * a0.a1.i9() * (h.i > 1.6 * h.j),
			u2 = bA.qn.s6(.05 * u1),
			u3 = h.j > h.i,
			u4 = bA.qn.s6(.06 * u1 + .03 * u3),
			u5 = bA.qn.s6(.08 * u1 + .03 * u3),
			u6 = bA.qn.s6(.04 + .02 * u3),
			u3 = bA.qn.s6(.02 * u1 + .01 * u3),
			u8 = bA.qn.s6(.025);
		td.style.font = bA.qn.se(0, u8), u1 < 1 && (u8 = bA.qn.se(0, u1 * u8), tf.style.font = u8, th.style.font = u8, tm.style.font = u8, tj.style.font = u8, tg.style.font = u8), te.style.height = bA.qn.qw(u2), te.style.font = bA.qn.se(0, .72 *
				u2), bA.qn.qx(te, 2), tf.style.top = bA.qn.qw(u2), tf.style.height = bA.qn.qw(u5), bA.qn.qx(tf, 2), tg.style.font = bA.qn.se(0, u1 * bA.qn.s6(.02)), tg.style.top = bA.qn.qw(u2 + u5), tg.style.height = bA.qn.qw(u6), bA.qn.qx(tg,
			2), th.style.top = bA.qn.qw(u2 + u5 + u6), th.style.height = bA.qn.qw(u4), bA.qn.qx(th, 2), ti.style.top = bA.qn.qw(u2 + u5 + u6 + u4), ti.style.height = bA.qn.qw(h.j / h.k - u2 - u5 - 2 * u4 - u6 - u3), tj.style.top = bA.qn.qw(h.j /
				h.k - u4 - u3), tj.style.height = bA.qn.qw(u3), bA.qn.qx(tj, 8), tl.style.font = bA.qn.se(0, .8 * u3), tm.style.top = bA.qn.qw(h.j / h.k - u4), tm.style.height = bA.qn.qw(u4), bA.qn.qx(tm, 8), tZ.resize(tf), ta.resize(tf), tb
			.resize(tf), tc.resize(tf), u0 ? this.tn.resize(ti) : this.tp.resize()
	};
	rU = this;
	td.style.position = "absolute", td.style.top = "0", td.style.left = "0", td.style.width = "100%", td.style.height = "100%", td.style.backgroundColor = bB.nt, bJ.rF() || (td.style.backdropFilter = "blur(4px)", td.style.webkitBackdropFilter =
		"blur(4px)"), te.style.position = "absolute", te.style.top = "0", te.style.left = "0", te.style.width = "100%", te.style.display = "flex", te.style.alignItems = "center";
	for (var g = [tf, tg, th, tm], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qn.tK(g[aB]);
	ti.style.position = "absolute", ti.style.left = "0", ti.style.width = "100%", ti.style.font = "inherit", tj.style.position = "absolute", tj.style.left = "0", tj.style.width = "100%", tk.style.position = "absolute", tk.style.top = "0", tk.style
		.left = "0", tk.style.height = "100%", tk.style.width = "50%", tk.style.backgroundColor = bB.oG, tl.innerHTML = "", tl.style.position = "absolute", tl.style.top = "50%", tl.style.left = "50%", tl.style.transform = "translate(-50%, -50%)", te
		.appendChild(function() {
			var tu = document.createElement("h1");
			return tu.textContent = L(23), tu.style.margin = "0 auto 0.15em auto", tu.style.fontFamily = "Arial Black, Trebuchet MS", tu.style.fontSize = "inherit", tu.style.fontWeight = "inherit", tu
		}()), tf.appendChild(tZ.qS), tg.appendChild(ta.qS), th.appendChild(tb.qS), tj.appendChild(tk), tj.appendChild(tl), tm.appendChild(tc.qS), td.appendChild(te), td.appendChild(tf), td.appendChild(tg), td.appendChild(th), td.appendChild(ti), td
		.appendChild(tj), td.appendChild(tm), rU.tp.show(ti)
}

function tq(rV) {
	var td = document.createElement("div"),
		ti = document.createElement("div");
	this.mh = function() {
			ti.textContent = "", bn.uA.uB && bn.uA.s4(1);
			for (var rw = document.createDocumentFragment(), uC = bn.y.rr[0], uD = bn.uD.uE[uC], uF = bn.uD.uF[uC], aB = 0; aB < uD.length; aB++) ! function(rw, qf, uH, uC) {
				var rl = document.createElement("span");
				rl.textContent = (uH ? "🟢 " : "⚪ ") + bn.lA.uI(qf, uC), rl.style.color = bn.lA.uJ(qf.uK), rl.style.cursor = "pointer", rl.style.margin = "0.2em 0.2em 0.2em 0.2em", rl.style.width = rl.style.maxWidth = 2 === uC ? "10em" : "9em",
					rl.style.height = rl.style.maxHeight = "1.4em", rl.style.whiteSpace = "nowrap", rl.style.overflow = "hidden", rl.style.textOverflow = "ellipsis", rl.style.font = "inherit", rl.style.display = "inline-block", bn.lA.uL(qf) && (
						rl.style.textDecoration = "underline"), qf.uM && (rl.style.textDecorationLine = "underline", rl.style.textDecorationStyle = "dotted");
				rl.onclick = function(e) {
					rV(e, qf)
				}, bJ.rF() || (rl.onmouseover = function(e) {
					bn.uA.uN(e.target, qf, 1)
				}), rw.appendChild(rl)
			}(rw, uD[aB], aB < uF, uC);
			ti.appendChild(rw)
		}, this.show = function(qh) {
			qh.appendChild(td)
		}, this.s4 = function(qh) {
			t.removeChild(qh, td)
		}, this.resize = function() {
			ti.style.fontSize = bA.qn.qw(bA.qn.s6(.02, .3))
		}, td.style.top = "0", td.style.left = "0", td.style.width = td.style.height = "100%", td.style.overflowX = "hidden", td.style.overflowY = "auto", td.style.font = "inherit", ti.style.font = "inherit", ti.style.margin = "0.4em", td
		.appendChild(ti)
}

function uO(uP) {
	var td = document.createElement("div"),
		rY = document.createElement("div"),
		uQ = [];

	function rA() {
		bJ.rF() || (this.style.backgroundColor = bA.color.rI(bB.nq, 50))
	}

	function rB() {
		this.style.backgroundColor = bB.nq
	}
	this.sG = function(uS, uT) {
			uQ[2].textContent = uS + 1 + " / " + uT
		}, this.show = function(qf) {
			qf = bn.lA.ry(qf, bn.lA.rz(qf)), rY.appendChild(bn.s3.transform(qf)), document.body.appendChild(td)
		}, this.resize = function() {
			var j = bA.qn.s6(.03, .5);
			td.style.width = 10 * j + "px", td.style.font = bA.qn.se(1, .75 * j), bA.qn.qx(td, 4), rY.style.top = j + "px", rY.style.font = bA.qn.se(0, .55 * j), bA.qn.qx(rY, 2), td.style.height = j + rY.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qn.qx(uQ[aB], 6), uQ[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uQ[aB].style.height = j + "px", bA.qn.qx(uQ[aB], 2);
			uQ[2].style.width = 4 * j + "px", uQ[1].style.left = 2 * j + "px", uQ[2].style.left = 4 * j + "px", uQ[3].style.left = 8 * j + "px"
		}, this.uU = function() {
			for (var aB = 0; aB < 4; aB++) uQ[aB].onclick = null, uQ[aB].onmouseover = null, uQ[aB].onmouseout = null;
			t.removeChild(document.body, td), td = rY = uQ = null
		}, td.style.position = "absolute", td.style.color = bB.nu, td.style.zIndex = "3", td.style.right = "0", td.style.top = "0", rY.style.position = "absolute", rY.style.height = "auto", rY.style.color = bB.nu, rY.style.backgroundColor = bB.nq, rY
		.style.left = "0", rY.style.width = "100%", rY.style.overflowWrap = "break-word", td.appendChild(rY);
	for (var aB = 0; aB < 4; aB++) uQ[aB] = document.createElement("div"), uQ[aB].style.position = "absolute", uQ[aB].style.backgroundColor = bB.nq, uQ[aB].style.color = bB.nu, uQ[aB].style.top = "0", uQ[aB].style.display = "flex", uQ[aB].style
		.justifyContent = "center", uQ[aB].style.alignItems = "center", uQ[aB].style.userSelect = "none", uQ[aB].style.outline = "none", uQ[aB].style.font = "inherit", 2 !== (uQ[aB].uR = aB) && (uQ[aB].onclick = uP, uQ[aB].onmouseover = rA, uQ[aB]
			.onmouseout = rB), td.appendChild(uQ[aB]);
	uQ[0].textContent = "◀", uQ[1].textContent = "▶", uQ[3].textContent = "✖"
}

function uV(uP) {
	var sU = document.createElement("div");

	function rA() {
		bJ.rF() || (sU.style.backgroundColor = bA.color.rI(bB.nq, 50))
	}

	function rB() {
		sU.style.backgroundColor = bB.nq
	}
	this.sG = function(uT) {
			sU.textContent = uT
		}, this.show = function() {
			document.body.appendChild(sU)
		}, this.resize = function() {
			var j = bA.qn.s6(.03, .5);
			sU.style.width = 2 * j + "px", sU.style.height = j + "px", sU.style.font = bA.qn.se(1, .75 * j), bA.qn.qx(sU, 4), bA.qn.qx(sU, 2)
		}, this.uU = function() {
			sU.onclick = null, sU.onmouseover = null, sU.onmouseout = null, t.removeChild(document.body, sU), sU = null
		}, sU.style.position = "absolute", rB(), sU.style.color = bB.nu, sU.style.zIndex = "3", sU.style.right = "0", sU.style.top = "0", sU.style.display = "flex", sU.style.justifyContent = "center", sU.style.alignItems = "center", sU.style
		.userSelect = "none", sU.style.outline = "none", sU.onclick = uP, sU.onmouseover = rA, sU.onmouseout = rB
}

function uW(sM) {
	var td = document.createElement("div"),
		uX = document.createElement("div"),
		sW = (this.f8 = 0, this.fA = 0);

	function uZ() {
		bn.ua.s4()
	}
	this.rM = sM, this.show = function(f8, fA, uc) {
		if (sW) return [0, 0];
		sW = 1, this.f8 = f8, this.fA = fA,
			function(self, uc) {
				var i = bA.qn.s6(.16, .7),
					j = sM.length * i / 3,
					ue = h.i / h.k,
					uf = h.j / h.k,
					nW = Math.min(1, Math.min(ue / i, uf / j));
				i *= nW, j *= nW, uc && (self.f8 += bA.qn.s6(.03, .5)), self.f8 = bL.i8(self.f8, 0, ue - i), self.fA = bL.i8(self.fA, 0, uf - j), uX.style.left = self.f8 + "px", uX.style.top = self.fA + "px", uX.style.width = i + "px", uX.style
					.height = j + "px", uX.style.font = bA.qn.se(0, .3 * j / sM.length), bA.qn.qx(uX, 5);
				for (var aB = 1; aB < sM.length; aB++) bA.qn.qx(sM[aB].button, 8)
			}(this, uc), document.body.appendChild(td)
	}, this.s4 = function() {
		sW && (sW = 0, td.removeEventListener("click", uZ), t.removeChild(document.body, td))
	};
	for (var aB = 0; aB < sM.length; aB++) new rk("" + (1 + aB), sM[aB].button, 0, 1);
	td.style.position = "fixed", td.style.top = "0", td.style.left = "0", td.style.width = "100%", td.style.height = "100%", td.style.zIndex = "5", uX.style.position = "absolute",
		function() {
			for (var ub = (100 / sM.length).toFixed(2) + "%", aB = 0; aB < sM.length; aB++) sM[aB].button.style.width = "100%", sM[aB].button.style.height = sM[aB].button.style.maxHeight = ub, sM[aB].button.style.padding = "0.0em 0.9em", uX
				.appendChild(sM[aB].button)
		}(), td.appendChild(uX), td.addEventListener("click", uZ)
}

function ea() {
	var ug, uh, ui;

	function up(aB) {
		return bA.color.nm(uh[aB][0], uh[aB][1], uh[aB][2])
	}

	function uv(fK, fL) {
		return bA.color.v5(uh[fK], uh[fL]), up(fL)
	}

	function un() {
		ug && (ug.remove(), ug = null)
	}
	this.show = function(eb, colors, id) {
		0 <= (ui = id) && b0.y.eV(0) && b0.eW.uj(0, id), eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = (eb = eb.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			uh = colors, (ug = document.createElement("div")).style.position = "fixed", ug.style.top = "0", ug.style.left = "0", ug.style.width = "100%", ug.style.height = "100%", ug.style.backgroundColor = bA.color.no(uh[0][0], uh[0][1], uh[0][
				2], .6), ug.style.zIndex = "6", ug.onclick = function(e) {
				e.target === ug && un()
			},
			function(eb) {
				var hw, uo = document.createElement("div");
				uo.style.position = "absolute", uo.style.display = "flex", uo.style.flexDirection = "column", uo.style.top = "50%", uo.style.left = "50%", uo.style.backgroundColor = up(2), hw = a0.a1.i9() ? bA.qn.uq(h.min) : bA.qn.s6(.4);
				hw = Math.max(hw, 200), uo.style.width = bA.qn.qw(hw), uo.style.height = bA.qn.qw(hw), uo.style.transform = "translate(-50%, -50%)",
					function(uo, hw) {
						var uu = document.createElement("div");
						uu.style.flex = "0 0 10%", uu.style.overflow = "hidden", uu.style.backgroundColor = up(1), uu.style.color = uv(1, 7), uu.style.font = bA.qn.se(1, .05 * hw), uu.style.display = "flex", uu.style.alignItems = "center", uu
							.style.justifyContent = "center", uu.innerHTML = L(24), uo.appendChild(uu)
					}(uo, hw),
					function(uo, eb, hw) {
						var uw = document.createElement("div");
						uw.style.flex = "0 0 70%", uw.style.overflowY = "auto", uw.style.overflowX = "hidden", uw.style.whiteSpace = "pre-wrap", uw.style.wordWrap = "break-word", uw.style.padding = bA.qn.qw(.02 * hw), uw.style.backgroundColor =
							up(2), uw.style.color = uv(2, 8), uw.style.font = bA.qn.se(0, .07 * hw), uw.innerHTML = eb, uw.innerHTML = "<style>a { color: inherit; }</style>" + uw.innerHTML, uo.appendChild(uw)
					}(uo, eb, hw),
					function(uo, hw) {
						var ux = document.createElement("div"),
							uy = (ux.style.display = "flex", ux.style.flexDirection = "row", ux.style.justifyContent = "space-between", ux.style.alignItems = "stretch", ux.style.backgroundColor = up(3), ux.style.flex = "1", ux.style.padding = bA
								.qn.qw(.01 * hw), ux.style.gap = bA.qn.qw(.01 * hw), document.createElement("div")),
							uz = (uy.style.flex = "0 0 60%", uy.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								un()
							}, up(4), !1)),
							uz = (uz.button.style.width = "100%", uz.button.style.height = "100%", uz.button.style.color = uv(4, 9), uz.button.style.font = bA.qn.se(1, .05 * hw), uy.appendChild(uz.button), document.createElement("div")),
							v1 = (uz.style.flex = "0 0 15%", uz.style.height = "100%", uz.style.backgroundColor = up(5), document.createElement("div")),
							v2 = (v1.style.flex = "1", v1.style.height = "100%", new w(L(26), function(e) {
								return bA.qn.v3(e), ui < 0 || b0.y.eV(0) && (b0.eW.uj(1, ui), ui = -1), !0
							}, up(6), !1));
						v2.button.style.width = "100%", v2.button.style.height = "100%", v2.button.style.color = uv(6, 10), v2.button.style.font = bA.qn.se(1, .035 * hw), v1.appendChild(v2.button), ux.appendChild(uy), ux.appendChild(uz), ux
							.appendChild(v1), uo.appendChild(ux)
					}(uo, hw), ug.appendChild(uo)
			}(eb), document.body.appendChild(ug)
	}
}

function v6(si, v7) {
	this.qd = [];
	var v8 = this.qd;

	function click() {
		for (var aB = 0; aB < v8.length; aB++) v8[aB].textContent = v8[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e9 = parseInt(this.name);
		void 0 !== si.e9 && bj.sF.sG(si.e9, e9), v7 && v7(e9)
	}
	for (var v9, f1 = si.vA.length, aB = 0; aB < f1; aB++)(v9 = document.createElement("p")).textContent = "⚪ " + si.vA[aB], v9.style.margin = "0", v9.name = "" + aB, v9.style.cursor = "pointer", v9.style.fontSize = "1em", v9.addEventListener(
		"click", click), v8.push(v9);
	v8[si.value].textContent = v8[si.value].textContent.replace("⚪", "🟢")
}

function vB(title, vC, vD) {
	var tE = document.createElement("div"),
		vE = document.createElement("div"),
		sr = document.createElement("div"),
		vF = document.createElement("div"),
		vG = document.createElement("div");
	this.vH = sr, this.vI = vC, this.show = function() {
			!1 !== vD ? document.body.appendChild(tE) : (document.body.appendChild(vE), document.body.appendChild(vF))
		}, this.s4 = function() {
			!1 !== vD ? t.removeChild(document.body, tE) : (t.removeChild(document.body, vE), t.removeChild(document.body, vF))
		}, this.vM = function() {
			var s7 = bA.qn.s6(.1),
				s5 = bA.qn.s6(.08 + .04 * (h.vN < 1), .3);
			return {
				s7: s7,
				s5: s5,
				vO: h.j / h.k - s7 - s5
			}
		}, this.resize = function(sQ) {
			var f1 = vC.length,
				vP = this.vM(),
				s7 = vP.s7,
				s5 = vP.s5;
			for (vE.style.height = bA.qn.qw(s7), bA.qn.qx(vE, 2), vF.style.top = bA.qn.qw(h.j / h.k - s5), vF.style.height = bA.qn.qw(s5), bA.qn.qx(vF, 8), sr.style.top = bA.qn.qw(s7), sr.style.height = sr.style.maxHeight = bA.qn.qw(vP.vO), vE.style
				.font = bA.qn.se(0, bA.qn.s6(.02, .15)), vF.style.font = bA.qn.se(0, bA.qn.s6(.02, .7)), sr.style.font = bA.qn.se(0, bA.qn.s6(.02, .35)), aB = 1; aB < f1; aB++) bA.qn.qx(vC[aB].button, 4);
			for (var sR = 0, aB = 0; aB < f1; aB++) sR += vC[aB].button.offsetWidth;
			if (sQ && sR < vF.offsetWidth)
				for (aB = 0; aB < f1; aB++) vC[aB].button.style.width = (100 * vC[aB].button.offsetWidth / sR).toFixed(2) + "%";
			else
				for (aB = 0; aB < f1; aB++) vC[aB].button.style.width = "auto";
			vF.tX && (vF.scrollLeft = vF.tX), sQ || this.resize(!0)
		}, this.vQ = function() {
			var vP = this.vM(),
				eZ = h.k;
			vR.fillStyle = bB.nq, vR.fillRect(0, eZ * vP.s7, h.i, eZ * vP.vO)
		}, tE.style.position = "absolute", tE.style.top = "0", tE.style.left = "0", tE.style.width = "100%", tE.style.height = "100%", vE.style.position = "absolute", vE.style.top = "0", vE.style.left = "0", vE.style.width = "100%", vE.style
		.display = "flex", vE.style.backgroundColor = bB.nq, vF.style.position = "absolute", vF.style.left = "0", vF.style.width = "100%", bA.qn.tK(vF), vG.style.height = vG.style.maxHeight = "100%", sr.style.position = "absolute", sr.style.width =
		"100%", sr.style.backgroundColor = bB.nq,
		function() {
			for (var aB = 0; aB < vC.length; aB++) vC[aB].button.style.height = "100%", vC[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vC.length; aB++) vG.appendChild(vC[aB].button);
	vE.appendChild(function() {
		var vL = document.createElement("h1");
		return vL.textContent = title, vL.style.margin = "auto", vL.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vL.style.fontFamily = "Arial Black, Trebuchet MS", vL
	}()), vF.appendChild(vG), !1 !== vD && (tE.appendChild(sr), tE.appendChild(vE), tE.appendChild(vF))
}

function rk(vS, vT, vU, vV) {
	var self;
	this.rl = document.createElement("span"), (self = this).rl.textContent = vS, self.rl.style.color = bB.nu, self.rl.style.position = "absolute", self.rl.style.font = "inherit", vV ? self.rl.style.bottom = "0.06em" : self.rl.style.top = "0.12em",
		vU ? self.rl.style.left = "0.2em" : self.rl.style.right = "0.2em", self.rl.style.fontSize = "0.6em", self.rl.style.pointerEvents = "none", self.rl.style.whiteSpace = "pre", vT.style.position = "relative", vT.style.overflow = "hidden", vT
		.appendChild(self.rl)
}

function tM(vS, vT, vW, vX, vY) {
	var self;
	this.rl = document.createElement("span"), this.resize = function() {
			this.rl.style.fontSize = ((vX - vW) * vT.offsetHeight).toFixed(1) + "px"
		}, (self = this).rl.textContent = vS, self.rl.style.color = bB.nu, self.rl.style.font = "inherit", self.rl.style.margin = "0.1em 0.6em", self.rl.style.pointerEvents = "none", vY && (self.rl.style.fontWeight = "bold"), self.rl.style
		.whiteSpace = "nowrap", self.rl.style.display = "block", vT.appendChild(self.rl)
}

function vZ(va, vb, vc, vd) {
	var ve = document.createElement("textarea"),
		vf = (this.e = ve, !0);

	function vk() {
		ve.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vb && bA.qn.qx(ve, 5)
		}, this.vg = function(eb) {
			ve.value = eb
		}, this.vh = function() {
			return ve.value
		}, this.vi = function() {
			ve.select()
		}, this.clear = function() {
			ve.value = ""
		}, this.vj = function() {
			vf && navigator.clipboard ? (ve.select(), navigator.clipboard.writeText(ve.value).catch(function() {
				vf = !1, vk()
			})) : vk()
		}, ve.setAttribute("id", "textArea" + t.y.sl++), ve.setAttribute("autocomplete", "off"), va && ve.setAttribute("placeholder", va), ve.style.top = "0", ve.style.left = "0", ve.style.width = "100%", ve.style.height = "100%", ve.style
		.userSelect = "none", ve.style.outline = "none", ve.style.resize = "none", ve.style.border = "none", ve.style.color = bB.nu, ve.style.backgroundColor = bB.nn, vd ? (ve.style.fontSize = "1em", ve.rows = 6, ve.style.padding = "0.25em") : (ve
			.style.padding = "0.45em", ve.style.fontSize = "1.2em"), vc && ve.addEventListener("input", function(e) {
			vc(e)
		}), ve.addEventListener("focus", function() {
			h.sm++
		}), ve.addEventListener("blur", function() {
			h.sm--
		})
}

function dI() {
	this.r4 = new vl, this.eN = new vm, this.sF = new vn, this.y = new vo, this.vp = new vq, this.dd = function() {
		this.eN.dd(), (new vr).dd(), this.vp.dd(), this.y.vs()
	}
}

function vm() {
	function vt(aB, type, vz, dw) {
		bj.eN.data.push({
			e9: aB,
			type: type || 0,
			value: vz || 0,
			vz: vz || 0,
			dw: dw || 0
		})
	}

	function vu(aB, type, vz, dw) {
		bj.eN.data.push({
			e9: aB,
			type: type,
			value: vz || "",
			vz: vz || "",
			dw: dw || 0
		})
	}

	function vv(nc) {
		for (var aB = bj.eN.data.length; aB < nc; aB++) bj.eN.data.push(null)
	}
	this.data = [], this.dd = function() {
		vt(0, 1, 0, 5), vt(1, 1, 1), vt(2, 0), vu(3, 2), vt(4, 1), vu(5, 2, "Trebuchet MS", 1), vt(6, 0), vt(7, 0, 0), vt(8, 0), vt(9, 1, 1), vt(10, 1), vt(11, 1, 1), vu(12, 2, navigator.language), vt(13), vt(14), vv(100), vu(100, 2), vu(101, 2),
			vu(102, 2), vu(103, 2), vu(104, 2), vu(105, 2), vu(106, 2), vt(107), vt(108), vt(109), vu(110, 2), vt(111), vt(112), vt(113), vu(114, 2), vt(115), vu(116, 2), vt(117, 1), vu(118, 2, "", 2), vt(119, 1, 0, 1), vu(120, 2), vt(121, 1, ~~(
				262144 * Math.random())), vu(122, 2, "Player " + Math.floor(1e3 * Math.random())), vt(123), vu(124), vt(125, 1), vu(126, 2), vt(127, 0, 1), vt(128), vt(129), vt(130), vt(131), vt(132), vu(133, 2), vt(134, 0, 5), vu(135, 2), vu(
				136, 2), vt(137), vt(138), vt(139), vt(140), vt(141), vt(142), vt(143), vt(144), vu(145, 2), vt(146), vt(147), vu(148, 2), vt(149), vt(150, 0, 1), vu(151, 2), vt(152, 0, 5), vt(153, 1), vt(154, 1), vu(155, 2), vu(156, 2), vt(157),
			vt(158), vt(159), vt(160), vu(161, 2), vt(162, 0, 1024), vu(163, 2, "0,0,0"), vu(164, 2, "100,100,100"), vu(165, 2, "30,30,30"), vu(166, 2, "70,70,70"), vu(167, 2, "100,100,100"), vu(168, 2, "85,85,85"), vu(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) vu(170 + aB, 2, "255,255,255");
		vu(174, 2), vu(175, 2), vt(176, 0, 200), vv(180), vt(180, 0), vt(181, 0)
	}, this.sG = function(e9, value) {
		this.data[e9].value = value
	}, this.vw = function(e9, value) {
		this.sG(e9, value);
		var value = String(value),
			f1 = value.length;
		5e4 < f1 ? console.log("storage value too large: index " + e9 + " size " + f1) : (bj.r4.save(e9, value), bj.r4.save(e9, String(this.data[e9].dw), !0))
	}, this.vx = function(e9) {
		return Number(this.data[e9].value)
	}, this.vy = function(e9) {
		return String(this.data[e9].value)
	}
}

function vq() {
	var w0 = [];

	function w4(t2) {
		w0.unshift(t2), bj.sF.sG(161, w0.join(";"))
	}

	function w3(t2) {
		for (var w6 = w0, f1 = w6.length, aB = 0; aB < f1; aB++)
			if (w6[aB] === t2) return w6.splice(aB, 1), bj.sF.sG(161, w6.join(";")), 1
	}
	this.dd = function() {
		var qU = bj.eN.data[161].value;
		qU.length && (w0 = qU.split(";"))
	}, this.get = function() {
		return w0
	}, this.w1 = function() {
		return {
			vA: w0,
			value: 0
		}
	}, this.uM = function(t2) {
		return bA.qv.has(w0, t2)
	}, this.w2 = function(t2) {
		return w3(t2) ? 0 : (w4(t2), 1)
	}, this.mh = function(t2) {
		w3(t2) && w4(t2)
	}, this.w5 = function(e9) {
		e9 < w0.length && (w0.splice(e9, 1), bj.sF.sG(161, w0.join(";")))
	}
}

function vl() {
	this.w7 = function(e9, dw) {
		return Number(this.w8(e9, dw))
	}, this.w8 = function(e9, dw) {
		var fS = null;
		return 0 === a0.id ? a0.w9 && (fS = a0.w9.getItem((dw ? "v" : "d") + e9)) : 1 === a0.id ? fS = a0.wA.loadString((dw ? 1e3 : 2e3) + e9) : 2 === a0.id && (fS = a0.wB[(dw ? "v" : "d") + e9]), fS && 0 !== fS.length ? fS : null
	}, this.wC = function(f1, wD) {
		var g = [],
			wE = wD ? "e" : "l";
		if (0 === a0.id) {
			if (a0.w9)
				for (aB = 0; aB < f1; aB++) g.push(a0.w9.getItem(wE + aB))
		} else if (1 === a0.id)
			for (var wF = wD ? 5e3 : 3e3, aB = 0; aB < f1; aB++) g.push(a0.wA.loadString(wF + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f1; aB++) g.push(a0.wB[wE + aB]);
		return g
	}, this.save = function(e9, value, dw) {
		var wG = (dw ? "v" : "d") + e9;
		if (0 === a0.id) {
			if (a0.w9 && bj.eN.data[140].value) try {
				a0.w9.setItem(wG, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wA.saveString((dw ? 1e3 : 2e3) + e9, value) : 2 === a0.id && (a0.wB[wG] = value, a0.wH.postMessage(wG + " " + value))
	}, this.wI = function(g, wD) {
		var f1 = g.length,
			wE = wD ? "e" : "l";
		if (0 === a0.id) {
			if (a0.w9 && bj.eN.data[140].value) try {
				for (aB = 0; aB < f1; aB++) a0.w9.setItem(wE + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wF = wD ? 5e3 : 3e3, aB = 0; aB < f1; aB++) a0.wA.saveString(wF + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f1; aB++) a0.wB[wE + aB] = g[aB], a0.wH.postMessage(wE + aB + " " + g[aB])
	}
}

function vr() {
	this.dd = function() {
		! function() {
			var data = bj.eN.data;
			0 === data[2].dw && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vz = 1);
			0 === data[100].dw && (data[100].value = data[100].vz = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fS, data = bj.eN.data,
			f1 = data.length;
		for (aB = 0; aB < f1; aB++) data[aB] && data[aB].dw === bj.r4.w7(aB, !0) && (fS = bj.r4.w8(aB), data[aB].value = null === fS ? data[aB].vz : 2 === data[aB].type ? fS : Number(fS))
	}
}

function vo() {
	function wO(g) {
		if (0 === g.length) bj.sF.sG(116, "");
		else {
			for (var wR = g[0], aB = 1; aB < g.length; aB++) wR += ";" + g[aB];
			bj.sF.sG(116, wR)
		}
	}
	this.wL = function() {
		bj.eN.data[110].value.length && (bj.eN.data[106].value = bj.eN.data[110], bj.sF.sG(110, ""), this.wM())
	}, this.wM = function() {
		var g = bj.eN.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eN.data[106].value), g.unshift(bj.eN.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wN = [], aB = 0; aB < g.length; aB += 2) wN.push(g[aB]);
		wO(g), bj.eN.data[117].value = 0, bj.eN.data[117].vA = wN
	}, this.wP = function(e9) {
		bj.eN.data[117].vA.splice(e9, 1), bj.eN.data[117].value = Math.min(e9, bj.eN.data[117].vA.length - 1);
		var g = bj.eN.data[116].value.split(";");
		g.splice(2 * e9, 2), wO(g)
	}, this.wQ = function(e9) {
		var g = bj.eN.data[116].value.split(";");
		return {
			t2: g[2 * e9],
			password: g[2 * e9 + 1]
		}
	}, this.wS = function() {
		var fS = bL.i8(bj.eN.data[121].value, -1, 262143);
		return fS = -1 === fS ? ~~(262144 * Math.random()) : fS
	}, this.vs = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qU = g[aB].trim(),
				wT = qU.indexOf("="),
				wT = 0 <= wT ? qU.substring(0, wT) : qU;
			document.cookie = wT + "=;expires=0;path=/", document.cookie = wT + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wT + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function vn() {
	this.sG = function(e9, value) {
		2 !== bj.eN.data[e9].type && (value = Math.floor(value)), bj.eN.data[e9].value !== value && (bj.eN.vw(e9, value), 0 === e9 ? (t.x(), b7.dd(), t.u(2)) : 1 === e9 ? h.dp(1) : 2 === e9 ? h.dp(0) : 5 === e9 && (bA.qn.wU(), h.dp(0)))
	}, this.wV = function() {
		for (var data = bj.eN.data, aB = 0; aB < 100; aB++) data[aB] && bj.eN.vw(aB, data[aB].vz);
		bA.qn.wU(), h.dp(1)
	}, this.wW = function() {
		for (var data = bj.eN.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eN.sG(aB, data[aB].vz)
	}, this.wX = function() {
		for (var fL = bj.eN, aB = 128; aB < 135; aB++) fL.vw(aB, fL.data[aB].vz)
	}, this.wY = function(data) {
		bj.sF.sG(109, data.t3), bj.sF.sG(107, data.wZ), bj.sF.sG(108, data.wa), bj.sF.sG(112, data.wb), bj.sF.sG(111, data.wc), bj.sF.sG(113, data.wd), bj.sF.sG(135, data.we), bj.sF.sG(136, data.wf), bj.sF.sG(137, data.wg), bj.sF.sG(138, data
			.wh), bj.sF.sG(139, data.wi), bj.sF.sG(141, data.wj), bj.sF.sG(142, data.wk), bj.sF.sG(143, data.wl), bj.sF.sG(144, data.wm)
	}
}

function c4() {
	this.t7 = new wn, this.wo = new wp, this.wq = new wr, this.dd = function() {
		this.t7.dd()
	}
}

function wp() {
	this.ws = function(size) {
		for (var wt = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wt.pv(16)));
		return g.join("")
	}, this.wu = function(qU) {
		return 20 < (qU = qU.trim()).length ? qU.substring(0, 20) : qU
	}
}

function wn() {
	var wv = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (wv[50] = 37, aB = 0; aB < 10; aB++) wv[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) wv[aB + 20] = aB + 11, wv[aB + 52] = aB + 38
	}, this.ww = function(qU) {
		return qU.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.wx = function(qU, size) {
		if ((qU = this.ww(qU)).length > size) return qU.substring(0, size);
		for (; qU.length < size;) qU = "-" + qU;
		return qU
	}, this.wy = function(qU) {
		for (var wz = wv, f1 = qU.length, g = new Uint8Array(f1), aB = 0; aB < f1; aB++) g[aB] = wz[qU.charCodeAt(aB) - 45];
		return g
	}, this.x0 = function(x1) {
		bD.a7(6 * x1.length), this.x2(x1), bH.dd(bD.aC)
	}, this.x2 = function(x1) {
		for (var f1 = x1.length, i = bD, aB = 0; aB < f1; aB++) i.a8(6, x1[aB])
	}, this.x3 = function(qU) {
		this.x2(this.wy(qU))
	}, this.x4 = function(qU, size) {
		this.x2(this.wy(this.wx(qU, size)))
	}, this.x5 = function(qU, size) {
		for (var g = this.wy(this.wx(qU, size)), fS = 0, nW = 1, aB = g.length - 1; 0 <= aB; aB--) fS += nW * g[aB], nW *= 64;
		return fS
	}
}

function x6() {
	var i, j, x7;

	function xX(hS, f4, xV, xC, xQ) {
		f4 = xW(hS, f4 + 1 + 2 * xC & 3);
		! function(hS, ky) {
			return 1 < Math.abs(hS % i - ky % i) || 1 < Math.abs(xa(hS) - xa(ky))
		}(hS, f4) && 0 === xQ[f4 << 2] && (xQ[f4 << 2] = xV)
	}

	function xa(gY) {
		return Math.floor((gY + .5) / i) % j
	}

	function xW(gY, f4) {
		return gY + x7[f4]
	}
	this.x8 = function(qU) {
		var aB, x9, f1, xA, wt = bH;
		for (bG.t7.x0(bG.t7.wy(qU)), bS.xD.xE[bS.eh].i = bS.fC = i = wt.pv(12), bS.xD.xE[bS.eh].j = bS.fD = j = wt.pv(12), x7 = [-i, -1, i, 1], bS.xN = document.createElement("canvas"), bS.xN.width = bS.fC, bS.xN.height = bS.fD, bS.xJ = bS.xN
			.getContext("2d", {
				alpha: !1
			}), bS.xK = bS.xO = null, bS.xK = bS.xJ.getImageData(0, 0, bS.fC, bS.fD), bS.xO = bS.xK.data, bA.qv.xP(bS.xO), f1 = wt.pv(12), x9 = wt.pv(5), xA = xG(i * j - 1), aB = 0; aB < f1; aB++) ! function(lG, gY, xB, xC) {
			var aB, f4, wt = bH,
				xQ = bS.xO,
				xR = gY,
				xS = gY,
				xT = 0,
				xU = 1 + xB,
				xV = 2 - xB;
			for (xQ[gY << 2] = xU, aB = 0; aB < lG; aB++) f4 = wt.pv(2), gY = xW(gY, f4), xQ[gY << 2] === xU ? xT % 2 == 1 && xX(xS, xT + 2 * xC + 3, xV, xC, xQ) : xQ[gY << 2] = xU, xX(gY, f4, xV, xC, xQ), xX(xS, f4, xV, xC, xQ), xS = gY,
				xT = f4;
			xW(gY, 0) === xR ? (xX(gY, 0, xV, xC, xQ), xX(xR, 0, xV, xC, xQ)) : xW(gY, 1) === xR && (xX(gY, 0, xV, xC, xQ), xX(xR, 2, xV, xC, xQ));
			0 === lG && (xX(xR, 0, xV, xC, xQ), xX(xR, 2, xV, xC, xQ))
		}(wt.pv(x9), wt.pv(xA), 1 === wt.pv(1), 1 === wt.pv(1));
		var f8, fA, hs, xb, xc, xd, xQ = bS.xO,
			xe = !0,
			xf = bS.xD.xE[bS.eh].xf,
			xg = bS.xD.xE[bS.eh].xg;
		for (fA = 0; fA < j; fA++)
			for (xb = !0, xc = xe, f8 = xd = 0; f8 < i; f8++) hs = 4 * fA * i + 4 * f8, xd <= f8 && 0 < xQ[hs] && (xc = 2 === xQ[hs], xb) && (xb = !1, xc !== xe) ? (xe = xc, xd = f8 + 1, f8 = -1) : (xc ? (xQ[hs] = xg[0], xQ[1 + hs] = xg[1], xQ[
				2 + hs] = xg[2]) : (xQ[hs] = xf[0], xQ[1 + hs] = xf[1], xQ[2 + hs] = xf[2]), xQ[3 + hs] = 255);
		bS.xJ.putImageData(bS.xK, 0, 0), bS.xL = !0, bS.xM.dd(), bf.dl = !0
	}
}

function wr() {
	this.x8 = function(xh) {
		for (var wt = bH, size = wt.pv(xh), xi = 7 + 9 * wt.pv(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wt.pv(xi)));
		return g.join("")
	}
}

function c9() {
	var sY, sZ, xj, xk, xl, xm, xn, xo, xp, xq;

	function xs() {
		var xv = aD.xv;
		for (xp = xv; xp < aD.ey; xp++) xr();
		for (xp = aD.hO ? aD.kL : 0; xp < xv; xp++) {
			if (!xw()) {
				for (var fL = aD.y0 = xp; fL < xv; fL++) xp = fL, xr();
				return
			}
			xz(xm + sY * xl + bL.du(xl, 2), xn + sZ * xl + bL.du(xl, 2))
		}
	}

	function yS(player) {
		for (var it = ag.it, iv = ag.iv, iu = ag.iu, iw = ag.iw, fA = iv[player]; fA <= iw[player]; fA++)
			for (var f8 = it[player]; f8 <= iu[player]; f8++) {
				var ef = ac.yT(f8, fA);
				ac.ga(ef) && (ac.jW(ef) ? ac.gV(ef, player) : ac.yU(ef, player))
			}
	}

	function yR(g, tO, tP) {
		var dt = g[tO];
		g[tO] = g[tP], g[tP] = dt
	}

	function xw() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sY = bL.du(xj * ay.random(), ay.value(100)), sZ = bL.du(xk * ay.random(), ay.value(100)), yZ()) return 1;
			return
		}() || function() {
			var iK, iN, fK, xy, fL, xx;
			for (iK = bL.du(xj * ay.random(), ay.value(100)), iN = bL.du(xk * ay.random(), ay.value(100)), fK = 40; 1 <= fK; fK--)
				for (xy = xk - fK; 0 <= xy; xy -= 40)
					for (sZ = (xy + iN) % xk, fL = 40; 1 <= fL; fL--)
						for (xx = xj - fL; 0 <= xx; xx -= 40)
							if (sY = (xx + iK) % xj, yZ()) return 1;
			return
		}()
	}

	function yZ() {
		for (var gY, yb, gap = bL.du(xl - xo, 2), yc = xn + sZ * xl + gap, yd = xm + sY * xl + gap, ya = yc + xo - 1; yc <= ya; ya--)
			for (yb = yd + xo - 1; yd <= yb; yb--)
				if (gY = ac.yT(yb, ya), !ac.ew(gY) || ac.jW(gY)) return;
		return 1
	}

	function xz(xx, xy) {
		xr(), ye(xx - 2, xy - 2)
	}

	function xr() {
		ag.mu[xp] = 0, ag.go[xp] = ag.yP[xp] = 0, ag.gS[xp] = [], ag.gg[xp] = [], ag.gh[xp] = [], ag.fQ[xp] = [], ag.it[xp] = ag.iv[xp] = ag.iu[xp] = ag.iw[xp] = 0
	}

	function ye(xx, xy) {
		var gY, aB, yf, yg;
		for (ag.mu[xp] = 1, ag.it[xp] = xx + 10, ag.iv[xp] = xy + 10, ag.iw[xp] = ag.iu[xp] = 0, yf = xx; yf < xx + 4; yf++)
			for (yg = xy; yg < xy + 4; yg++)(xx < yf && yf < xx + 3 || xy < yg && yg < xy + 3) && (gY = ac.yT(yf, yg), ac.ew(gY)) && (ag.it[xp] = Math.min(yf, ag.it[xp]), ag.iu[xp] = Math.max(yf, ag.iu[xp]), ag.iv[xp] = Math.min(yg, ag.iv[xp]), ag
				.iw[xp] = Math.max(yg, ag.iw[xp]), xq[ag.go[xp]] = gY, ag.go[xp]++, ac.yU(gY, xp));
		for (ag.yP[xp] = ag.go[xp], aB = ag.go[xp] - 1; 0 <= aB; aB--) ac.yh(xq[aB], xp) ? (ac.gV(xq[aB], xp), ag.gg[xp].push(xq[aB])) : ac.yi(xq[aB]) ? (ac.gV(xq[aB], xp), ag.gh[xp].push(xq[aB])) : ac.yj(xq[aB]) && (ac.gV(xq[aB], xp), ag.fQ[xp]
			.push(xq[aB]))
	}
	this.dd = function() {
		if (xq = new Array(12), xo = 6, xl = 10, xj = bL.du(bS.fC, xl), xk = bL.du(bS.fD, xl), xm = bL.du(bS.fC - xl * xj, 2), xn = bL.du(bS.fD - xl * xk, 2), aD.hO)
			for (var aB = 0; aB < aD.kL; aB++) xp = aB, xr(), ag.mu[xp] = 1;
		(0 === aD.data.spawningType ? xs : 1 === aD.data.spawningType ? (xs(), function() {
			var y1 = aD.y2;
			aD.y3 || y1++;
			if (!(y1 < 3)) {
				for (var data = aD.data, jb = (aD.hO ? aD.kL : 0) + data.teamPlayerCount[0], nc = aD.y0, y4 = new Uint32Array(y1), y5 = new Uint32Array(y1), y6 = new Uint16Array(y1), y7 = new Uint16Array(y1), ez = bg.ez, it = ag.it, iv =
						ag.iv, iu = ag.iu, iw = ag.iw, ff = bO.ff, fg = bO.fg, aB = jb; aB < nc; aB++) ff[aB] = it[aB] + iu[aB] >> 1, fg[aB] = iv[aB] + iw[aB] >> 1;
				for (aB = jb; aB < nc; aB++) {
					var id = ez[aB];
					y4[id] += ff[aB], y5[id] += fg[aB]
				}
				var ki = bg.ki;
				for (aB = 1; aB < y1; aB++) {
					var gT = Math.max(data.teamPlayerCount[ki[aB]], 1);
					y6[aB] = bL.du(y4[aB], gT), y7[aB] = bL.du(y5[aB], gT)
				}
				var y8 = bg.y8,
					y9 = bg.y9,
					yA = bg.yA,
					fe = bO.fe;
				for (aB = 0; aB < 512; aB++) fe[aB] = aB;
				for (var e8 = 0; e8 < 2 + (4 <= y1); e8++)
					for (aB = jb; aB < nc; aB++) {
						for (var hS = aB, yB = fe[hS], yC = 1, fH = bL.yD(ff[yB] - y6[1], fg[yB] - y7[1]), fK = 2; fK < y1; fK++) {
							var yE = bL.yD(ff[yB] - y6[fK], fg[yB] - y7[fK]);
							yE < fH && (fH = yE, yC = fK)
						}
						var yF = ez[hS];
						if (yC !== yF) {
							if (2 === e8 && 4 <= y1) {
								var yG = Math.max((yC + 1) % y1, 1),
									yH = bL.yD(ff[yB] - y6[yG], fg[yB] - y7[yG]);
								for (fK = 1; fK < y1; fK++) yE = bL.yD(ff[yB] - y6[fK], fg[yB] - y7[fK]), fH < yE && yE < yH && (yH = yE, yG = fK);
								yG !== yF && bL.yD(y6[yF] - y6[yG], y7[yF] - y7[yG]) < bL.yD(y6[yF] - y6[yC], y7[yF] - y7[yC]) && (yC = yG)
							}
							var yI = ki[yC],
								yJ = y9[yI] + (aD.hO ? 0 : yA[yI]),
								ky = y8[yJ],
								yK = fe[ky],
								yL = y9[yI + 1];
							fH = bL.yD(ff[yK] - y6[yF], fg[yK] - y7[yF]);
							for (var eZ = yJ + 1; eZ < yL; eZ++) {
								var yM = y8[eZ],
									yN = fe[yM];
								(yE = bL.yD(ff[yN] - y6[yF], fg[yN] - y7[yF])) < fH && (fH = yE, ky = yM)
							}
							ky < jb || nc <= ky || (yK = fe[ky], y4[yF] += ff[yK] - ff[yB], y5[yF] += fg[yK] - fg[yB], y4[yC] += ff[yB] - ff[yK], y5[yC] += fg[yB] - fg[yK], gT = data.teamPlayerCount[ki[yF]], y6[yF] = bL.du(y4[yF], gT),
								y7[yF] = bL.du(y5[yF], gT), gT = data.teamPlayerCount[yI], y6[yC] = bL.du(y4[yC], gT), y7[yC] = bL.du(y5[yC], gT), fe[hS] = yK, fe[ky] = yB)
						}
					}! function() {
						for (var fe = bO.fe, it = ag.it, iv = ag.iv, iu = ag.iu, iw = ag.iw, go = ag.go, yP = ag.yP, gg = ag.gg, gh = ag.gh, fQ = ag.fQ, aB = 0; aB < 512; aB++) {
							var yQ = fe[aB];
							if (yQ !== aB) {
								yR(it, aB, yQ), yR(iv, aB, yQ), yR(iu, aB, yQ), yR(iw, aB, yQ), yR(go, aB, yQ), yR(yP, aB, yQ), yR(gg, aB, yQ), yR(gh, aB, yQ), yR(fQ, aB, yQ), yS(aB), yS(yQ), fe[aB] = aB;
								for (var j = yQ, gZ = fe[j]; gZ !== aB;) gZ = fe[j = gZ];
								fe[j] = yQ
							}
						}
					}()
			}
		}) : function() {
			var xv = aD.xv;
			for (xp = xv; xp < aD.ey; xp++) xr();
			for (xp = aD.hO ? aD.kL : 0; xp < xv; xp++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							xx = spawningData[2 * xp] + 1,
							spawningData = spawningData[2 * xp + 1] + 1;
						if (3 < xx && xx < bS.fC - 5 && 3 < spawningData && spawningData < bS.fD - 5 && ac.ew(ac.yT(xx, spawningData)) && function(xx, xy) {
								var gY, yb, ya;
								for (ya = xy; xy - 6 < ya; ya--)
									for (yb = xx; xx - 6 < yb; yb--)
										if (gY = ac.yT(yb, ya), ac.jW(gY)) return;
								return 1
							}(xx + 3, spawningData + 3)) return xz(xx + 1, spawningData + 1), 1;
						return
					}()) {
					if (!xw()) {
						for (var fL = aD.y0 = xp; fL < xv; fL++) xp = fL, xr();
						return
					}
					var xx = xm + sY * xl + bL.du(xl, 2),
						xy = xn + sZ * xl + bL.du(xl, 2);
					xz(xx, xy)
				}
		})(), bd.mq[7] = ag.go[aD.el]
	}, this.yk = function(jU, yl, ym) {
		var aB, xx, xy, gY, sY, sZ;
		for (xp = jU, aB = 0; aB < 20; aB++)
			for (xx = yl + aB; yl - aB <= xx; xx--)
				for (xy = ym + aB; ym - aB <= xy; xy--)
					if ((xx === yl + aB || xx === yl - aB || xy === ym + aB || xy === ym - aB) && 3 < xx && xx < bS.fC - 5 && 3 < xy && xy < bS.fD - 5 && ac.ew(ac.yT(xx, xy)) && function(xx, xy) {
							var gY, yb, ya;
							for (ya = xy; xy - 6 < ya; ya--)
								for (yb = xx; xx - 6 < yb; yb--)
									if (gY = ac.yT(yb, ya), ac.jW(gY) && !ac.ys(xp, gY)) return;
							return 1
						}(xx + 3, xy + 3)) {
						if (0 < ag.go[xp]) {
							for (sZ = sY = gY = void 0, sY = ag.iu[xp]; sY >= ag.it[xp]; sY--)
								for (sZ = ag.iw[xp]; sZ >= ag.iv[xp]; sZ--) gY = 4 * (sZ * bS.fC + sY), ac.yp(xp, gY) && (ac.yq(gY), ag.go[xp]--);
							xr()
						}
						return ye(xx - 1, xy - 1), !0
					} return !1
	}, this.yr = function(jU) {
		xp = jU, xw() ? xz(xm + sY * xl + bL.du(xl, 2), xn + sZ * xl + bL.du(xl, 2)) : xr()
	}
}

function yt() {
	at.yu(), vR.setTransform(iB, 0, 0, iB, 0, 0), vR.imageSmoothingEnabled = iB < 3, vR.drawImage(bS.xN, aS.yv(), aS.yw()), bP.yx.vQ(), vR.drawImage(yy, aS.yv(), aS.yw()), at.vQ(), bN.vQ(), af.vQ(), (aD.nN ? (bh.vQ(), bC) : (aN.vQ(), aV.vQ(), aR
	.vQ(), bC.vQ(), aw.vQ(), aW.vQ(), aS.vQ(), aQ.vQ(), bh.vQ(), aU.vQ(), aP.vQ(), aM.vQ(), aL.vQ(), aX.vQ(), be.vQ(), av)).vQ(), t.vQ()
}

function yz(z0, i, j) {
	z0.clearRect(0, 0, i, j), z0.fillStyle = bB.nr, z0.fillRect(0, 0, i, j)
}

function z1(z0, i, j, z2) {
	z0.fillStyle = bB.nu, z0.fillRect(0, 0, i, z2), z0.fillRect(0, 0, z2, j), z0.fillRect(i - z2, 0, z2, j), z0.fillRect(0, j - z2, i, z2)
}

function z3(z0, f8, fA, hw, z2, gY, z4) {
	z0.fillStyle = bB.nu;
	var gY = Math.floor(hw * gY),
		tC = (gY += (gY - z2) % 2, Math.floor((gY - z2) / 2)),
		hw = Math.floor((hw - gY) / 2);
	z0.fillRect(f8 + hw, fA + hw + tC, gY, z2), z4 && z0.fillRect(f8 + hw + tC, fA + hw, z2, gY)
}

function z6() {
	this.dd = function() {
		8 === aD.kd && aN.z7()
	}, this.z8 = function(z9) {
		var elo = aD.data.elo,
			ja = (elo[z9] - elo[1 - z9]) / 10,
			ja = 8 / (1 + Math.pow(2, ja / 32)),
			ja = Math.floor(10 * ja + .5),
			zB = elo[z9] + ja,
			zB = this.zD(zB),
			elo = this.zD(elo[1 - z9] - ja);
		0 === z9 ? aN.zF(zB, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zF(elo, zB, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.zD = function(elo) {
		return 16e3 === (elo = bL.i8(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.s3 = new zG, this.xQ = new zH
}

function zH() {
	this.hm = !1;
	this.zL = [], this.zM = 100;
	var nK, nL, gap, hw, zI, zK, zN = 0,
		zO = new Array(9),
		zP = [],
		zQ = [],
		zR = 0,
		zS = 0,
		zT = 0,
		zU = 0;

	function zg() {
		zO.sort(function(fK, fL) {
			return fL.kQ - fK.kQ
		});
		for (var qU = "" + zO[0].pW, aB = 1; aB < 9; aB++) qU += "," + zO[aB].pW;
		for (aB = 0; aB < 9; aB++) qU += "," + zO[aB].kQ;
		bj.eN.vw(120, qU)
	}
	this.dd = function() {
		for (var zV = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zV.length; aB++) {
			var color = 6 === zV[aB] ? bB.oK : bB.ns;
			this.zL.push(bA.canvas.zW(ab.get(3), zV[aB], color))
		}
		for (aB = 0; aB < aj.s3.zX; aB++) zQ.push(aj.s3.zY - aj.s3.zX + aB);
		for (aB = 0; aB < aj.s3.zZ; aB++) zQ.push(aj.s3.za + aB);
		var zb = aj.s3.zc(bK.zb);
		for (aB = 0; aB < zb.length; aB++) zQ.push(zb[aB]);
		! function() {
			var aB, g = bj.eN.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zO[aB] = {
					pW: 1015 + aB,
					kQ: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fS = parseInt(g[aB]),
						eZ = (fS = 0 <= fS && fS < aj.s3.zY ? fS : 0, parseInt(g[aB + 9]));
					eZ = 0 <= eZ && eZ < 1e3 ? eZ : 0, zO[aB] = {
						pW: fS,
						kQ: eZ
					}
				}
		}()
	}, this.show = function(la, lb, zh) {
		var aB;
		if (zR = la, zS = lb, zN = zh || 0, this.hm = !0, zP = [], 0 === zN)
			for (aB = 0; aB < 9; aB++) zP.push(zO[aB].pW);
		else {
			var fL = 49 * zN,
				zh = fL - 49;
			for (zh >= zQ.length && (zN = 1, zh = 0, fL = 49), aB = zh = (fL = Math.min(fL, zQ.length)) - 49; aB < fL; aB++) zP.push(zQ[aB])
		}
		zP.push(1024);
		zh = zP.length, hw = Math.floor((a0.a1.i9() ? .075 : .0468) * h.iA), gap = Math.floor(hw / 3), (zT = 10 * (zI = hw + gap)) > h.i && (zT = h.i, gap = (zI = zT / 10) - (hw = 3 * zI / 4)), zK = bL.du(zh, 10) + !!(zh % 10), (zU = zK * zI) > h
			.j && (zU = h.j, gap = (zI = zU / zK) - (hw = 3 * zI / 4)), zh = .5 * gap;
		nK = Math.min(Math.max(la - .5 * zT + zh, zh), h.i - zT + zh), nL = Math.min(Math.max(lb - .5 * zU + zh, zh), h.j - zU + zh)
	}, this.hD = function(la, lb, player) {
		if (!this.hm) return !1;
		if (this.zj(la, lb)) {
			la = bL.i8(bL.du(la - nK + .5 * gap, zI), 0, 9);
			if ((la += 10 * bL.i8(bL.du(lb - nL + .5 * gap, zI), 0, 9)) >= zP.length) return aL.s4(), !0;
			lb = zP[la];
			if (1024 === lb) return this.show(zR, zS, zN + 1), !0;
			! function(pW) {
				for (var aB = 0; aB < 9; aB++) zO[aB].kQ = Math.floor(.99 * zO[aB].kQ);
				for (aB = 0; aB < 9; aB++)
					if (pW === zO[aB].pW) return zO[aB].kQ = Math.min(zO[aB].kQ + 30, 999), zg();
				zO.splice(5, 0, {
					pW: pW,
					kQ: Math.max(zO[4].kQ, 30)
				}), zO.pop(), zg()
			}(lb), player === aD.el ? b8.hQ.pV(lb) : b8.gM.pk(lb, player)
		}
		return aL.s4(), !0
	}, this.zj = function(la, lb) {
		return !(la < nK - .5 * gap || lb < nL - .5 * gap || nK + zT - .5 * gap <= la || nL + zU - .5 * gap <= lb)
	}, this.vQ = function() {
		vR.fillStyle = bB.nr, vR.fillRect(nK - .5 * gap, nL - .5 * gap, zT, zU);
		for (var hs = .5 * bc.zk, f1 = (vR.lineWidth = bc.zk, vR.strokeStyle = vR.fillStyle = bB.nu, vR.strokeRect(nK - .5 * gap + hs, nL - .5 * gap + hs, zT - 2 * hs, zU - 2 * hs), vR.imageSmoothingEnabled = !0, zP.length), aB = 0; aB <
			f1; aB++) this.zl(zP[aB], vR, nK + aB % 10 * zI, nL + bL.du(aB, 10) * zI, hw);
		vR.imageSmoothingEnabled = !1
	}, this.zl = function(pW, i2, f8, fA, hw) {
		var ef;
		pW >= 1024 - aj.s3.zX ? (ef = hw / this.zM, i2.setTransform(ef, 0, 0, ef, f8, fA), i2.drawImage(this.zL[pW - 1024 + aj.s3.zX], 0, 0), i2.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qn.textAlign(i2, 1), bA.qn.textBaseline(i2, 1), i2.font = bA.qn
			.se(0, .89 * hw), i2.fillText(aj.s3.zm(pW), f8 + .5 * hw, fA + (.35 - bA.qn.zn + .56) * hw))
	}
}

function zG() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.zX = 13, this.zZ = this.emojis.length, this.za = 676, this.zY = 1024, this.zo = this.emojis.indexOf("💀"), this.zp = this.zo + 1, this.zq = this.emojis.indexOf("🥇"), this.zr = this.emojis.indexOf("😊"), this.zm = function(fS) {
		return fS < this.za ? String.fromCharCode(55356, 56806 + bL.du(fS, 26), 55356, 56806 + fS % 26) : this.emojis[Math.min(fS - this.za, this.zZ - 1)]
	}, this.zc = function(qU) {
		for (var f1 = qU.length - 2, g = [], aB = 0; aB < f1; aB++) {
			var zs = qU.charCodeAt(aB) - 56806,
				zt = qU.charCodeAt(aB + 2) - 56806;
			0 <= zs && zs < 26 && 0 <= zt && zt < 26 && (g.push(26 * zs + zt), aB += 3)
		}
		return g
	}, this.zu = function(fS) {
		return fS < this.za
	}, this.zv = function(fS) {
		return fS >= 1024 - this.zX
	}, this.zw = function(fS) {
		return fS >= this.za && fS < this.za + this.zp
	}
}

function c3() {
	this.t7 = new zx, this.wo = new zy, this.wq = new zz, this.dd = function() {
		this.t7.dd()
	}
}

function zy() {
	this.x3 = function(qU) {
		for (var f1 = qU.length, i = bD, aB = 0; aB < f1; aB++) i.a8(16, qU.charCodeAt(aB))
	}
}

function zx() {
	var a00 = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (a00[0] = 45, a00[37] = 95, aB = 0; aB < 10; aB++) a00[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a00[aB + 11] = 65 + aB, a00[aB + 38] = 97 + aB
	}, this.t9 = function(a01) {
		for (var wt = bH, x1 = new Uint8Array(a01), aB = 0; aB < a01; aB++) x1[aB] = wt.pv(6);
		return x1
	}, this.t8 = function(x1) {
		for (var f1 = x1.length, a02 = a00, g = [], aB = 0; aB < f1; aB++) g.push(String.fromCharCode(a02[x1[aB]]));
		return g.join("")
	}, this.a03 = function(value, a04) {
		for (var a02 = a00, g = [], aB = 0; aB < a04; aB++) g.push(String.fromCharCode(a02[value >> 6 * (a04 - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var a05, a06, a07;
	a05 = [32, 65, 191, 913, 931], a06 = [64, 127, 688, 930, 1155], a07 = new Array(a05.length + 1);
	for (var aB = 0; aB < a07.length; aB++) {
		a07[aB] = 0;
		for (var fK = aB - 1; 0 <= fK; fK--) a07[aB] += a06[fK] - a05[fK]
	}

	function a0D(eZ) {
		for (var aB = a05.length - 1; 0 <= aB; aB--)
			if (eZ >= a05[aB] && eZ < a06[aB]) return aB;
		return -1
	}
	this.wu = function(qU) {
		return 0 !== (qU = qU.trim()).indexOf("Bot ") && 0 !== qU.indexOf("[Bot] ") && function(qU, a0A, a0B) {
			var f1 = (qU = qU.trim()).length;
			if (f1 < a0A || a0B < f1) return !1;
			for (var eZ, a0C = 0, aB = 0; aB < f1; aB++)
				if (eZ = qU.charCodeAt(aB), a0C += 65 <= eZ && eZ <= 90 || 1040 <= eZ && eZ <= 1071 ? 1 : 0, -1 === a0D(eZ)) return !1;
			if (3 < a0C && a0C > Math.floor(f1 / 2)) return !1;
			return !0
		}(qU, 3, 20)
	}, this.a0E = function(qU) {
		for (var f1 = (qU = qU.trim()).length, g = [], aB = 0; aB < f1; aB++) {
			var eZ, gY = a0D(eZ = qU.charCodeAt(aB));
			g.push(a07[gY] + eZ - a05[gY])
		}
		return g
	}, this.x8 = function(g) {
		for (var eZ, fL, qU = "", f1 = g.length, aB = 0; aB < f1; aB++)
			for (fL = 1; fL < a07.length; fL++)
				if (g[aB] < a07[fL]) {
					eZ = a05[fL - 1] + g[aB] - a07[fL - 1], qU += String.fromCharCode(eZ);
					break
				} return qU
	}, this.a0F = function(qU) {
		for (var g = this.a0E(qU), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0G = function(qU) {
		for (var g = new Array(Math.floor(qU.length / 3)), aB = 0; aB < qU.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qU.substring(aB, aB + 3));
		return this.x8(g)
	}, this.a0H = function(qU) {
		for (var fS, g = [qU.length], aB = 0; aB < qU.length; aB++) g[aB] = qU.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qU.length; aB++) aB === qU.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fS = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fS + (fS < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0I = function(qU) {
		for (var eZ, result = "", aB = 0; aB < qU.length; aB++) 48 <= (eZ = qU.charCodeAt(aB)) && eZ < 58 ? result += String.fromCharCode(eZ) : 65 <= eZ && eZ < 75 ? result += "0" + (eZ - 65).toString() : 75 <= eZ && eZ < 91 ? result += (eZ - 65)
			.toString() : 97 <= eZ && eZ < 123 && (result += (eZ - 71).toString());
		return result
	}, this.a0J = function(qU) {
		for (var f1 = qU.length, g = [], aB = 0; aB < f1; aB++)(eZ = qU.charCodeAt(aB)) < 58 ? g.push(qU[aB]) : (eZ -= eZ < 91 ? 65 : 71, g.push(String(bL.du(eZ, 10))), g.push(String(eZ - 10 * bL.du(eZ, 10))));
		var f1 = g.length - 2,
			eZ = 0,
			x1 = [];
		for (aB = 0; aB < f1; aB += 3) x1[eZ++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return x1
	}, this.a0K = function() {
		for (var e8, a0L = "", aB = 0; aB < 6; aB++) e8 = 48 + ay.random() % 36, e8 += 58 <= e8 ? 39 : 0, a0L += String.fromCharCode(e8);
		return a0L
	}
}

function zz() {
	this.a0E = function(qU, xh, a0M) {
		for (var a0N = [], f1 = qU.length, max = 0, aB = 0; aB < f1; aB++) {
			var fS = qU.charCodeAt(aB);
			a0N.push(fS), max = Math.max(max, fS)
		}
		var xi = max < 128 ? 7 : 16;
		for (a0M.a8(xh, f1), a0M.a8(1, +(16 == xi)), aB = 0; aB < f1; aB++) a0M.a8(xi, a0N[aB])
	}
}

function dA() {
	this.a0O = new a0P, this.result = new a0Q, this.a0R = new a0S, this.a0T = new a0U, this.a0V = new a0W, this.a0X = new a0Y, this.dd = function() {
		this.result.dd()
	}
}

function a0S() {
	this.a0Z = function() {
		for (var f1 = al.kr, a0a = al.kw, a0b = [], aB = 0; aB < f1; aB++) {
			var gY = a0a[aB];
			bA.gM.a0c(gY) && a0b.push(gY)
		}
		return a0b
	}, this.a0d = function() {
		if (0 === bg.ki[aD.a0e]) return this.a0f();
		bh.kM(aD.a0e);
		for (var a0b = [], f1 = bO.fV[0], fe = bO.fe, aB = 0; aB < f1; aB++) {
			var gY = fe[aB];
			bA.gM.a0c(gY) && a0b.push(gY)
		}
		return a0b
	}, this.a0f = function() {
		var gY = lw[0];
		return bA.gM.a0c(gY) ? [gY] : []
	}, this.a0g = function(a0b) {
		for (var f1 = a0b.length, dt = 0, go = ag.go, aB = 0; aB < f1; aB++) dt += go[a0b[aB]];
		return dt
	}
}

function a0P() {
	function a0i() {
		if (2 === aD.a0m) return 1;
		aw.a0n(), aD.a0m = 2, aD.a0o = aD.a0p
	}

	function a0k() {
		bR.a0V.a0q(), aX.show(1 === aD.a0r, !1, 2 === aD.a0r), bR.result.a0q(), bR.a0X.eU(), bR.a0T.eU(), bR.a0T.a0s(), aN.a0t(!0), aN.a0u(247), aN.a0u(956), aN.a0u(957), aV.mg(!0), aW.mg(!0), aw.mg(), bC.a0v(), aD.h9 && bf.a0w.a0x(), bf.dl = !0, bb
			.a0y(), a0.a1.setState(0)
	}
	this.a0h = function() {
		a0i() || (aD.a0j = 2, a0k())
	}, this.a0l = function() {
		a0i() || (aD.a0j = 1, a0k())
	}
}

function a0U() {
	this.eU = function() {
		var a16;
		2 === aD.a0j ? (aN.a0z(0, 59), aH.nT(2700)) : aD.kd < 7 ? (a16 = bg.ki[aD.a0e], a16 = bg.a18[a16], aQ.a19(L(27, [a16]), 2, 1, 12), aN.a1A(0, L(28, [a16]), 40, 0, bB.nu, bB.nr, -1, !1), aH.nT(2700)) : 8 === aD.kd ? (aD.a0r ? aN.a0z(aD.a14,
			2) : aN.a0z(1 - aD.el, 3), aD.a15.z8(aD.a14), aH.nF(aD.a14, 2700, !1, 0)) : 9 === aD.kd ? (aN.a1B(), aH.nT(2700)) : (aN.a1C(aD.a14), aH.nF(aD.a14, 2700, !1, 0))
	}, this.a0s = function() {
		var qU;
		aD.h9 || (qU = aD.kd < 7 ? "territorial.io/log/team" : 8 === aD.kd ? "territorial.io/log/1v1" : 9 === aD.kd ? "territorial.io/log/zombies" : "territorial.io/log/br", aN.a1A(720, qU, 736, 0, bB.nu, bB.oI, -1, !1))
	}
}

function a0Y() {
	function a1M() {
		var tS;
		return 8 === aD.kd ? 0 : (tS = Math.floor(ag.a1N[aD.el] / 50), (tS = Math.min(tS, 200)) / 100)
	}

	function a1E() {
		var tS = a1M();
		0 !== tS && aN.a1A(440, L(29, [tS.toFixed(2)]), 40, 0, bB.oC, bB.nr, -1, !1)
	}
	this.eU = function() {
		var a1F;
		0 === bR.result.a1D || 0 === bR.result.a0b.length || 8 === aD.kd ? bA.gM.hC(aD.el) && a1E() : (function(a1F) {
			7 !== aD.kd && 10 !== aD.kd || 0 !== aD.a0r && a1F && aN.a1A(600, L(33, [a1F.toFixed(2)]), 40, 0, bB.nu, bB.nr, -1, !1)
		}(a1F = function() {
			aN.a1A(520, L(30), 40, 0, bB.nu, bB.nr, -1, !1);
			for (var a0b = bR.result.a0b, f1 = a0b.length, go = ag.go, g = [], aB = 0; aB < f1; aB++) {
				var gY = a0b[aB];
				g.push({
					gY: gY,
					dt: go[gY]
				})
			}
			g.sort((fK, fL) => fL.dt - fK.dt);
			var a18 = ag.a1O,
				dt = bR.result.a1P,
				tS = bR.result.a1D,
				qU = "",
				a1F = 0;
			for (aB = 0; aB < f1; aB++) {
				var hk = g[aB].dt * tS / (100 * dt),
					a1R = a18[g[aB].gY] + ": " + hk.toFixed(2) + "   ";
				g[aB].gY === aD.el && (a1F = hk), 2 < aB && 4 !== f1 ? 3 === aB && (qU += "(" + L(31, [f1 - 3]) + ")") : qU += a1R
			}
			aN.a1A(560, bA.rm.a1S(qU), 40, 0, bB.oC, bB.nr, -1, !1), a1F ? aN.a1A(580, L(32, [a1F.toFixed(2) + " + " + a1M().toFixed(2)]), 40, 0, bB.oC, bB.nr, -1, !1) : bA.gM.hC(aD.el) && a1E();
			return a1F
		}()), 2 === aD.a0j || 7 <= aD.kd || function(a1F) {
			var a0b = bR.result.a0b,
				f1 = a0b.length,
				a1T = ag.a1T,
				go = ag.go,
				a1U = [];
			loop: for (var aB = 0; aB < f1; aB++) {
				var gY = a0b[aB],
					a1V = bA.rm.a1W(a1T[gY]);
				if (null !== a1V) {
					for (var a1X = go[gY], fL = a1U.length - 1; 0 <= fL; fL--)
						if (a1V === a1U[fL].name) {
							a1U[fL].dt += a1X, a1U[fL].g.push({
								gY: gY,
								dt: a1X
							});
							continue loop
						} a1U.push({
						name: a1V,
						dt: a1X,
						g: [{
							gY: gY,
							dt: a1X
						}]
					})
				}
			}
			if (0 !== a1U.length) {
				a1U.sort((fK, fL) => fL.dt - fK.dt);
				var g = a1U[0].g,
					a1Y = (g.sort((fK, fL) => fL.dt - fK.dt), "[" + a1U[0].name + "]"),
					a1Z = 512 * bR.result.a1D / 26214400,
					lG = (aN.a1A(0, L(34, [a1Y, a1Z.toFixed(4)]), 40, 0, bB.nu, bB.nr, -1, !1), g.length),
					wz = a1U[0].dt,
					a1a = 1e4 * a1Z;
				for (aB = 0; aB < lG; aB++)
					if (g[aB].gY === aD.el) {
						aN.a1A(600, L(35, [(a1a * g[aB].dt / (10 * wz)).toFixed(2)]), 40, 0, bB.nu, bB.nr, -1, !1), aN.a1A(640, L(36, [(.2 * a1F).toFixed(2), a1Y]), 40, 0, bB.nu, bB.nr, -1, !1);
						break
					}
			}
		}(a1F))
	}, this.a1J = function() {
		var a1K, xR;
		aD.kf || (a1K = ag, xR = aD.el, 0 === a1K.a1L[xR]) || a1K.jP[xR] < 1 || 2 * a1K.qC[xR] > 3 * (a1K.jO[xR] + a1K.jP[xR]) || a1E()
	}
}

function a0Q() {
	this.dd = function() {
		this.a1b = 0, this.a0b = [], this.a1P = 0, this.a1D = 0
	}, this.a0q = function() {
		var sP;
		aD.kf || (sP = this, 2 === aD.a0j ? sP.a0b = bR.a0R.a0Z() : aD.hu ? sP.a0b = bR.a0R.a0d() : sP.a0b = bR.a0R.a0f(), sP.a1b = bi.a1d.a1e(), sP.a1P = Math.max(1, bR.a0R.a0g(sP.a0b)), b8.gM.pt(), 8 === aD.kd ? bR.result.a1D = 0 : sP.a1D =
			100 * bR.result.a1b * (1 + aD.a1g))
	}
}

function a0W() {
	this.a0q = function() {
		if (2 === aD.a0j) aD.a0r = 2;
		else {
			if (8 === aD.kd) bA.gM.ji(0) || 0 === ag.mu[0] ? aD.a14 = 1 : bA.gM.ji(1) || 0 === ag.mu[1] ? aD.a14 = 0 : aD.a14 = +(ag.go[1] > ag.go[0]);
			else {
				if (aD.hu) {
					var kt = bh.a1i();
					if (aD.a0e = kt, bg.ki[kt]) return void(aD.a0r = +(bg.ez[aD.el] === kt))
				}
				aD.a14 = lw[0]
			}
			aD.a0r = +(aD.a14 === aD.el)
		}
	}
}

function dF() {
	this.id = 0, this.dw = 0, this.w9 = null, this.wA = null, this.wB = null, this.wH = null, this.a1 = new a1j, this.dd = function() {
		var self, dw;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dw = Android.getVersion()) < 12 || (self.dw = dw, self.id = 1, self.wA = Android),
			function(self) {
				var dw;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wB = mwIOSdataX, self.wH = window.webkit.messageHandlers.iosCommandA, dw = self
					.wB.version, self.dw = dw ? Number(dw) : 0)
			}(this),
			function(self) {
				var w9;
				try {
					if (!(w9 = window.localStorage)) return;
					w9.setItem("tls7", "1"), w9.removeItem("tls7")
				} catch (error) {
					return
				}
				self.w9 = w9
			}(this)
	}
}

function a1j() {
	this.a1n = function() {
		bj.sF.wV(), bj.sF.wW(), b0.y.close(0, 3255), 0 === a0.id ? a0.w9 && a0.w9.clear() : 1 === a0.id ? a0.wA.saveString(199, "") : 2 === a0.id && a0.wH.postMessage("clear")
	}, this.a1o = function() {
		2 === a0.id ? a0.wH.postMessage("showConsentForm") : 1 === a0.id && a0.wA.setState(7)
	}, this.a1p = function() {
		this.setState(14)
	}, this.i9 = function() {
		return 1 === bj.eN.vx(2)
	}, this.a1q = function() {
		bj.eN.vw(102, "")
	}, this.setState = function(a1r) {
		1 === a0.id && 5 <= a0.dw && a0.wA.setState(a1r)
	}, this.a2 = function() {
		var a1s;
		1 === a0.id && 7 <= a0.dw ? a0.wA.setState(5) : ((a1s = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1s.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dw < 17 || a0.wA.saveString(23, document.documentElement.outerHTML)
	}, this.eL = function() {
		0 !== a0.id && (1 === a0.id ? a0.wA.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dw ? a0.wH.postMessage("prepare ad 2904813909") : a0.wH.postMessage("loadAds 2904813909")))
	}, this.eR = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && 0 !== a0.dw && (a0.wH.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dw < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1t + "' target='_blank'>" + bK
			.a1t + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oZ)]))
	}
}

function dU() {
	function a1w(e) {
		lf(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a1z()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.oH)]))
	}

	function a27(e) {
		lf(e), t.u(4, 5, new v(L(38), a23(e), !0))
	}

	function a23(e) {
		var qU = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qU : 4527 === e ? "Player already in lobby" + qU : 4530 === e ? "Lobby Timeout" + qU : 4528 === e ? "Lobby Kick: Another login detected." + qU : 4540 === e ?
			"You have been kicked." + qU : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qU : 4555 === e ? "Invalid Account Error. Please Try Again." + qU : 4557 <= e && e <= 4560 ?
			"Please try again later!" + qU : "Unknown error" + qU
	}

	function lf(e) {
		a21(e), t.y.z()
	}

	function a21(e) {
		var a1r = aa.a20();
		6 === a1r ? b0.y.a29(e) : bn.a1x ? (t.x(), bn.uU(), b0.y.close(b0.y.a1y, 3256)) : 8 === a1r && aD.a2A(!0)
	}
	this.p = [], this.a1u = function(a1v, e) {
		if (this.p.push(e), 8 === t.t4 && 0 === a1v)
			if (4211 === e) a1w(e);
			else {
				if (bn.a1x && (4495 === e || 4480 === e) && b0.y.a1y !== a1v) return void t.a1z();
				if (8 !== aa.a20() && a21(), 4480 === e) return bj.sF.wX(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a23(e), !0))
			}
		else {
			var a1r = aa.a20();
			if (6 === a1r) {
				if (4211 === e) return void a1w(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560)) return void aZ.a24(a1v)
			} else {
				if (!bn.a1x) return 8 === a1r ? void(a1v !== b0.y.a25 || aD.kf || 1 !== aD.a0m || aD.h9 || aN.a26(L(39, [e]))) : void 0;
				if (a1v !== b0.y.a1y) return
			}
			a27(e)
		}
	}, this.a28 = function(e) {
		this.p.push(e), 8 === aa.a20() ? aD.kf || 1 !== aD.a0m || aN.a26(L(39, [e])) : a27(e)
	}, this.s = function() {
		this.p.push(3268), lf(3268)
	}
}

function d4() {
	var a2B, a2C, a2D = -15e3,
		a2E = !1;

	function hD(e) {
		a2Y() || (a2E = !0, a2Z(e, 1), b0.y.a2a(b0.y.a25), a2b(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2N(e) {
		a2D = bf.eQ, a2Z(e, 1), b0.y.a2a(b0.y.a25), 0 < e.touches.length && (a2B = Math.floor(h.k * e.touches[0].clientX), a2C = Math.floor(h.k * e.touches[0].clientY), au.a2N(e) || a2b(a2B, a2C))
	}

	function a2b(f8, fA) {
		t.hD(f8, fA), 0 === aD.a0m ? aa.hD(f8, fA) : bC.a2c(f8, fA) || be.hD(f8, fA) || aX.hD(f8, fA) || aL.a2d(f8, fA) || aP.hD(f8, fA) || 0 <= aM.hD(f8, fA) || aw.hD(f8, fA) || bJ.a2e(f8, fA) || aL.a2f(f8, fA)
	}

	function a2J(e) {
		a2Y() || (a2E = !0, a2Z(e, 1), a2g(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2O(e) {
		a2D = bf.eQ, a2Z(e, 1), 0 < e.touches.length && (a2B = Math.floor(h.k * e.touches[0].clientX), a2C = Math.floor(h.k * e.touches[0].clientY), au.a2O(e) || a2g(a2B, a2C))
	}

	function a2g(f8, fA) {
		t.a2J(f8, fA), 0 === aD.a0m ? aa.a2J(f8, fA) : (bT.h7(f8, fA), be.a2J(f8, fA) || (aM.a2J(f8, fA), aL.hm() ? aL.a2J(f8, fA) : aR.hE ? aR.a2J(f8) && (bf.dl = !0) : (aV.a2J(f8, fA), aS.nP && aS.a2J(f8, fA) && (bf.dl = !0))))
	}

	function a2L(e) {
		a2Y() || (a2Z(e, 1), a2h(), 0 === aD.a0m ? (aa.click(-1024, -1024), aT.ro()) : (aV.a2i(-1024, -1024), aM.a2J(-1024, -1024), aR.a2j(), aS.nP = !1))
	}

	function a2K(e) {
		a2Y() || (a2Z(e, 1), a2k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a2H && (bJ.a2H = !1, e.preventDefault()))
	}

	function click(e) {
		a2Y() || a2Z(e, 1)
	}

	function a2P(e) {
		a2D = bf.eQ, a2Z(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a0m ? aS.nP = !1 : au.a2l() || (a2k(a2B, a2C, !1), bJ.a2H && (bJ.a2H = !1, e.preventDefault()))
	}

	function a2Q(e) {
		a2D = bf.eQ, a2Z(e, 1), a2k(a2B, a2C, !1), bJ.a2H && (bJ.a2H = !1, e.preventDefault())
	}

	function a2R(e) {}

	function a2S(e) {}

	function a2T(e) {
		a2Y() || a2Z(e, 0)
	}

	function a2k(f8, fA, a2m) {
		a2h(), 0 === aD.a0m ? aa.click(f8, fA) : (aV.a2i(f8, fA), be.a2i(), aR.a2j(), aS.nP = !1, aL.click(f8, fA, a2m) ? bf.dl = !0 : aM.a2K(f8, fA))
	}

	function a2h() {
		t.a2h()
	}

	function a2M(e) {
		var f8, fA, deltaY;
		a2Y() || (a2Z(e, 1), b0.y.a2a(b0.y.a25), f8 = Math.floor(h.k * e.clientX), fA = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2M(f8, fA, deltaY), 0 === aD.a0m ? aa.a2M(f8, fA, deltaY) : aV.a2M(f8, fA,
			deltaY) || (aR.a2n(f8, fA) ? aR.a2M(deltaY) && (bf.dl = !0) : aS.a2M(f8, fA, deltaY)))
	}

	function a2U(e) {
		a2Z(e, 0)
	}

	function a2Z(e, id) {
		0 === id && t.hm() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a20() && e.preventDefault()
	}

	function a2V(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2Y() || 0 < h.sm || (e = e.code) && e.length && (bX.eZ(e, 18) ? ar.a2p(3) : bX.eZ(e, 22) ? ar.a2p(0) : bX.eZ(e, 20) ? ar.a2p(1) : bX.eZ(e, 24) ? ar.a2p(2) : bX.eZ(e, 10) ? aR.a2q(31 / 32) : bX.eZ(e, 8) ? aR.a2q(32 / 31) : bX.eZ(e, 6) ? aR
			.a2q(7 / 8) : bX.eZ(e, 4) ? aR.a2q(8 / 7) : bX.eZ(e, 14) ? 0 !== aD.a0m && aS.a2M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.eZ(e, 16) ? 0 !== aD.a0m && aS.a2M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.eZ(e, 0) ?
			aD.a0m && bT.h8(0) : bX.eZ(e, 2) ? aD.a0m && bT.h8(1) : bX.eZ(e, 30) ? aD.a0m && bT.h8(2) : bX.eZ(e, 26) ? aD.a0m && bT.hg() : bX.eZ(e, 28) && aD.a0m && bT.hl())
	}

	function a2W(e) {
		if (!a2Y() && !(0 < h.sm || bf.eQ < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2r(1) || "Space" === code && t.a2r(0))) return bn.a1x ? bn.ua.a2r(code) ? void 0 : void("Escape" === code && bJ.fT()) : void(8 !== aa.a20() && aa.a2r(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fT() : bX.eZ(code, 18) ? ar.a2s(3) : bX.eZ(code, 22) ? ar.a2s(0) : bX.eZ(code, 20) ? ar.a2s(1) : bX.eZ(code, 24) ? ar.a2s(2) : bX.eZ(code, 12) ? bC.a2t(!aD.nN) : "Space" === code && aD.a0m && (aM.hA && aM.a2u(), aD
					.h9) && bC.a2v(!1))
		}
	}

	function a2X() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a2Y() {
		return a2D + 15e3 > bf.eQ
	}

	function resize() {
		h.a2x()
	}
	this.a2F = 0, this.a2G = "", this.a2H = !1, this.dd = function() {
		a2I.addEventListener("mousedown", hD, {
			passive: !1
		}), a2I.addEventListener("mousemove", a2J, {
			passive: !1
		}), a2I.addEventListener("mouseup", a2K, {
			passive: !1
		}), a2I.addEventListener("click", click, {
			passive: !1
		}), a2I.addEventListener("mouseleave", a2L, {
			passive: !1
		}), a2I.addEventListener("wheel", a2M, {
			passive: !1
		}), a2I.addEventListener("touchstart", a2N, {
			passive: !1
		}), a2I.addEventListener("touchmove", a2O, {
			passive: !1
		}), a2I.addEventListener("touchend", a2P, {
			passive: !1
		}), a2I.addEventListener("touchcancel", a2Q, {
			passive: !1
		}), a2I.addEventListener("dragover", a2R), a2I.addEventListener("drop", a2S), a2I.addEventListener("dblclick", a2T), document.addEventListener("contextmenu", a2U), document.addEventListener("keydown", a2V), document.addEventListener(
			"keyup", a2W), document.addEventListener("visibilitychange", a2X), window.addEventListener("resize", resize)
	}, this.a2e = function(f8, fA) {
		return !!bC.hD(f8, fA) || !!(aV.hD(f8, fA) || aS.hD(f8, fA) || aR.hD(f8, fA) || aN.hD(f8, fA))
	}, this.a2w = a2Y, this.rF = function() {
		return !a2E || 0 < a2D
	}, this.fT = function() {
		if (!t.hm()) return 8 === aa.a20() ? aD.nN ? void bC.a2t(!1) : be.hm ? void be.a2u() : void aM.a2u() : void(7 !== aa.a20() && 6 === aa.a20() && aZ.a2y());
		t.a2r(2)
	}
}

function bz() {
	this.qn = new a2z, this.qv = new a30, this.gM = new a31, this.rm = new a32, this.z0 = new a33, this.a34 = new a35, this.canvas = new a36, this.color = new a37, this.a38 = new a39, this.dd = function() {
		this.qn.wU()
	}
}

function a30() {
	this.xP = function(g) {
		g.fill(0)
	}, this.a3A = function(g) {
		for (var f1 = g.length, aB = 0; aB < f1; aB++) g[aB] = []
	}, this.a3B = function(zs, a3C) {
		for (var zt = bO.fa, aB = 0; aB < 3; aB++) zt[aB] = a3C * zs[aB];
		return zt
	}, this.a3D = function(zs, zt, a3E) {
		for (var ja = 0, aB = 0; aB < 3; aB++) ja += Math.abs(zs[aB] - zt[aB]);
		return a3E <= ja
	}, this.a3F = function(zs, a3G) {
		for (var aB = 0; aB < 3; aB++) zs[aB] = bL.i8(zs[aB] + a3G, 0, 255);
		return zs
	}, this.a3H = function(g, tO, tP) {
		tP = tP || g.length - 1;
		for (var a3I = 0, aB = tO = tO || 0; aB <= tP; aB++) a3I += g[aB];
		return a3I
	}, this.a3J = function(g, a3K) {
		for (var aB, a3L, f1 = g.length, a3M = [], fK = f1 - 1; 0 <= fK; fK--) {
			for (aB = a3L = 0; aB < f1; aB++) a3K(g[aB]) < a3K(g[a3L]) && (a3L = aB);
			f1--, a3M.push(g[a3L]), g[a3L] = g[f1], g.pop()
		}
		return a3M
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
	}, this.a3N = function(g, fS) {
		for (var f1 = g.length, gT = 0, aB = 0; aB < f1; aB++) gT += g[aB] > fS;
		return gT
	}, this.a3O = function(a3P, a3Q, min) {
		for (var f1 = a3Q[0], aB = f1 - 1; 0 <= aB; aB--) a3P[aB] < min && (a3P[aB] = a3P[--f1]);
		a3Q[0] = f1
	}, this.a3R = function(g, f1, value) {
		for (var aB = 0; aB < f1; aB++) g[aB] -= value
	}, this.a3S = function(g) {
		for (var f1 = g.length, aB = 0; aB < f1; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3T = function(qU, g, a3U) {
		g.fill(0);
		for (var tS = qU.split(","), f1 = Math.min(tS.length, g.length), aB = 0; aB < f1; aB++) g[aB] = Math.min(parseInt(tS[aB]), a3U)
	}, this.a3V = function(qU, g, rj) {
		g.fill("");
		for (var tS = qU.split('"'), f1 = Math.min(tS.length, 2 * g.length), hs = 0, aB = 1; aB < f1; aB += 2) g[hs++] = tS[aB].slice(0, rj)
	}, this.a3W = function(g, gT) {
		if (0 === gT) g.fill(0);
		else {
			var a3I = this.a3H(g),
				f1 = g.length;
			if (0 === a3I) g.fill(bL.du(gT, f1));
			else
				for (var aB = 0; aB < f1; aB++) g[aB] = bL.du(gT * g[aB], a3I);
			if (0 === (a3I = this.a3H(g))) g[1] = gT;
			else
				for (var hs = 0; a3I++ < gT;) g[hs = (hs + 1) % f1] && g[hs]++
		}
	}, this.a3X = function(g) {
		if (!g) return 0;
		var f1 = g.length;
		if (0 === f1) return 0;
		for (var fS = g[f1 - 1], aB = f1 - 2; 0 <= aB; aB--)
			if (g[aB] !== fS) return aB + 2;
		return 1
	}, this.a3Y = function(g) {
		for (var a3I = 0, aB = 0; aB < g.length; aB++) a3I += g[aB].length;
		return a3I
	}, this.a3Z = function(a3a) {
		for (var g = [], aB = 0; aB < a3a.length; aB++) g = g.concat(a3a[aB]);
		return g
	}, this.has = function(g, fS) {
		for (var f1 = g.length, aB = 0; aB < f1; aB++)
			if (g[aB] === fS) return !0;
		return !1
	}
}

function a36() {
	this.zW = function(a3b, e9, a3c) {
		var hw = a3b.height,
			a3d = bA.qn.xF(hw, hw),
			i2 = bA.qn.getContext(a3d);
		return function(i, i2, a3c) {
			i2.fillStyle = a3c, i2.beginPath(), i2.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), i2.fill()
		}(hw, i2, a3c), i2.drawImage(a3b, -e9 * hw, 0), a3d
	}, this.a3f = function(a3g) {
		var i2, hz, hw = a3g.height;
		return a3g.width === hw && (hz = (i2 = bA.qn.getContext(a3g, !0)).getImageData(0, 0, hw, hw), bA.a34.a3h(hz.data, hw, hw, .9), i2.putImageData(hz, 0, 0)), a3g
	}
}

function a37() {
	this.a3i = function(fS) {
		return [fS >> 12 & 63, fS >> 6 & 63, 63 & fS]
	}, this.a3j = function(fS) {
		for (var g = this.a3i(fS), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a3k = function(fS) {
		fS = this.a3j(fS);
		return bA.color.nm(fS[0], fS[1], fS[2])
	}, this.a3l = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nm = function(e8, tS, fL) {
		return "rgb(" + e8 + "," + tS + "," + fL + ")"
	}, this.no = function(e8, tS, fL, fK) {
		return "rgba(" + e8 + "," + tS + "," + fL + "," + fK.toFixed(3) + ")"
	}, this.rH = function(eZ) {
		for (var g = eZ.split("(")[1].split(","), fZ = bO.fZ, aB = 0; aB < 3; aB++) fZ[aB] = parseInt(g[aB]);
		return 4 === g.length ? fZ[3] = 255 * parseFloat(g[3].slice(0, -1)) : fZ[3] = 255, fZ
	}, this.rI = function(a3m, f4) {
		for (var g = a3m.slice(a3m.indexOf("(") + 1, a3m.indexOf(")")).split(","), fZ = bO.fZ, aB = 0; aB < 3; aB++) fZ[aB] = bL.i8(parseInt(g[aB].trim(), 10) + f4, 0, 255);
		return 3 === g.length ? this.nm(fZ[0], fZ[1], fZ[2]) : (a3m = parseFloat(g[3].trim()), this.no(fZ[0], fZ[1], fZ[2], a3m = 0 === a3m ? .3 : a3m))
	}, this.v5 = function(a3n, a3o) {
		for (var ja = 0, aB = 0; aB < 3; aB++) ja += Math.abs(a3o[aB] - a3n[aB]);
		if (!(240 <= ja))
			for (aB = 0; aB < 3; aB++) a3o[aB] = a3n[aB] + (a3n[aB] < 128 ? 80 : -80)
	}, this.a3p = function(g) {
		for (var qU = "#", aB = 0; aB < 3; aB++) {
			var e8 = g[aB].toString(16);
			qU += 1 === e8.length ? "0" + e8 : e8
		}
		return qU
	}, this.a3q = function(qU) {
		var e8, tS;
		return qU.length < 7 ? bB.nl : (e8 = parseInt(qU.slice(1, 3), 16), tS = parseInt(qU.slice(3, 5), 16), qU = parseInt(qU.slice(5, 7), 16), this.nm(e8, tS, qU))
	}
}

function a33() {
	this.a3r = function(qU, font, maxWidth) {
		if (font && (vR.font = font), vR.measureText(qU).width <= maxWidth) return qU;
		for (var aB = qU.length - 1; 1 <= aB; aB--)
			if (qU = qU.substring(0, aB), vR.measureText(qU + "...").width <= maxWidth) return qU + "...";
		return "..."
	}
}

function a39() {
	var a3t = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a3u = function(eQ) {
		var a3w, qU = new Date(eQ.getTime() - 6e4 * eQ.getTimezoneOffset()).toUTCString();
		return qU.length < 12 || (qU = qU.substring(5, qU.length), 0 === (eQ = eQ.getTimezoneOffset())) ? qU : (a3w = (eQ < 0 ? "+" : "-") + bL.du(Math.abs(eQ), 60), 0 == (eQ = Math.abs(eQ) % 60) ? qU + a3w : qU + a3w + ":" + (eQ < 10 ? "0" :
			"") + eQ)
	}, this.a3x = function(eQ) {
		var qU = eQ.toUTCString();
		return qU.length < 12 ? qU : function(eQ) {
			return a3t[eQ.getUTCDay()]
		}(eQ) + ", " + qU.substring(5, qU.length - 4)
	}
}

function a2z() {
	var a3z = null;
	this.zn = 0, this.wU = function() {
		var fS = bj.eN.data[5].value;
		a3z = "px " + fS, "Trebuchet MS" !== fS && (a3z += ", Trebuchet MS"), this.zn = hv(32, 32, ["a", "b", "m"], 200, a3z)
	}, this.xF = function(i, j) {
		var eZ = document.createElement("canvas");
		return eZ.width = i, eZ.height = j, eZ
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(z0, i, j) {
		return z0.getImageData(0, 0, i, j)
	}, this.se = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a3z : 1 === type ? "bold " + size + a3z : 2 === type ? "lighter " + size + a3z : 3 === type ? "italic " + size + a3z : 4 === type ? "oblique " + size + a3z : 5 === type ? "small-caps " +
			size + a3z : "small-caps bold " + size + a3z
	}, this.textAlign = function(i2, id) {
		i2.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i2, id) {
		i2.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qx = function(e, code, color) {
		color = this.qw(bc.sg) + " solid " + (color || bB.nu);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tU = function(e, f8, fA, i, j) {
		e = e.style;
		e.left = this.tV(f8), e.top = this.tV(fA), e.width = this.tV(i), e.height = this.tV(j)
	}, this.qo = function(fS) {
		return 1 + fS * a0.a1.i9()
	}, this.s6 = function(nW, gZ) {
		return nW * this.qo(void 0 === gZ ? .5 : gZ) * h.iA / h.k
	}, this.tT = function(nW, gZ) {
		return nW * this.qo(void 0 === gZ ? .5 : gZ) * h.iA
	}, this.tA = function(nW, gZ, a40) {
		return this.qo(gZ) * Math.min(nW * h.iA, a40 * h.i) / h.k
	}, this.qw = function(fS) {
		return fS.toFixed(1) + "px"
	}, this.tV = function(fS) {
		return this.uq(fS).toFixed(1) + "px"
	}, this.uq = function(fS) {
		return fS / h.k
	}, this.a42 = function(su, a43) {
		for (var qU = "<ul>", f1 = su.length, aB = 0; aB < f1; aB++) qU += "<li>" + su[aB] + ": <a href='" + a43[aB] + "' target='_blank'>" + a43[aB] + "</a></li>";
		return qU += "</ul>"
	}, this.a44 = function(a45) {
		return "<a href='" + a45 + "' target='_blank'>" + a45 + "</a>"
	}, this.a46 = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.v3 = function(e) {
		var dt = e.textContent;
		bA.rm.a47(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qU) {
		return vR.measureText(qU).width
	}, this.tK = function(a48) {
		a48.style.overflowX = "auto", a48.style.overflowY = "hidden", a48.style.whiteSpace = "nowrap", a48.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tX = this.scrollLeft, e.preventDefault())
		}), a48.addEventListener("scroll", function() {
			this.tX = this.scrollLeft
		})
	}
}

function a31() {
	this.hB = function(a1r) {
		return 0 === a1r ? 1 === aD.a0m && aD.hO : 1 === a1r ? 1 === aD.a0m && !aD.hO : 2 === aD.a0m
	}, this.hC = function(player) {
		return 0 !== ag.mu[player] && 2 !== ag.a49[player]
	}, this.a4A = function(player) {
		return player === aD.el && 2 !== ag.a49[player]
	}, this.kz = function(player, jU) {
		return player !== jU && (0 === bg.ez[player] || bg.ez[player] !== bg.ez[jU])
	}, this.m6 = function() {
		return al.kr < 2 ? 0 : aD.hu ? 1 < bh.a4B() : ag.go[lw[1]]
	}, this.a4C = function() {
		var kr = al.kr;
		if (0 !== kr) {
			if (!aD.hu) return !this.ji(lw[0]);
			for (var ez = bg.ez, kt = bh.ku(), kw = al.kw, aB = kr - 1; 0 <= aB; aB--) {
				var gY = kw[aB];
				if (ez[gY] === kt && !this.ji(gY)) return 1
			}
		}
		return 0
	}, this.a4D = function(player) {
		return player === aD.el
	}, this.a4E = function(jU, nW) {
		return ag.h2[aD.el] < nW * ag.h2[jU]
	}, this.ji = function(player) {
		return player >= aD.kL || 2 === ag.a49[player]
	}, this.lJ = function(player) {
		return 0 !== ag.mu[player]
	}, this.a0c = function(player) {
		return player < aD.kL
	}, this.qA = function(a4F, a4G) {
		return a4F !== a4G
	}, this.gP = function(player, fS) {
		var min;
		return fS = this.a4H(player, fS), ag.h2[player] += fS, ag.a4I[player] && (min = Math.min(ag.a4I[player], ag.h2[player]), ag.a4I[player] -= min, ag.h2[player] -= min), fS
	}, this.a4H = function(player, fS) {
		var a4J = ag.h2[player];
		return fS = Math.min(fS, ag.go[player] * aD.a4K - a4J), fS = Math.min(fS, aD.a4L - a4J), Math.max(fS, 0)
	}, this.mT = function(player, ia, a4M, a4N) {
		var a4J = ag.h2[player],
			ia = bL.du(a4J * (ia + 1), 1024),
			a4M = bL.du(a4M * a4J, 1024),
			ia = Math.min(ia, a4J - a4M);
		return 10 === aD.kd && (ia = b4.a4P(player, ia)), bO.fX[0] = ia, bO.fX[1] = a4M, a4N <= ia
	}, this.pe = function(player, pM, pL) {
		var player = ag.h2[player],
			a4O = bL.du(64 * player, 1024);
		return pM = Math.min(pM, player - a4O), pM = this.a4H(pL, pM), bO.fX[0] = pM, bO.fX[1] = a4O, 1 <= pM
	}, this.a4Q = function(player, pM, pL) {
		var player = ag.h2[player],
			a4O = bL.du(64 * player, 1024);
		return pM = Math.min(pM, player - a4O), this.a4H(pL, pM)
	}, this.pg = function(pM, pL) {
		return pM = this.a4H(pL, pM), bO.fX[0] = pM, bO.fX[1] = 0, 1 <= pM
	}, this.iZ = function(player, a4R) {
		return bL.du(ag.h2[player] * (a4R + 1), 1024)
	}, this.a4S = function(player, a4M) {
		a4M = bL.du(a4M * ag.h2[player], 1024);
		bO.fX[1] = a4M, ag.h2[player] -= a4M
	}, this.gN = function(player, a4T) {
		var fl, fn, fL = ag.h2[player];
		return a4T <= fL ? ag.h2[player] -= a4T : (ag.h2[player] = 0, fn = ag.a4I[player] + (fl = 5 * ((fL = a4T - fL) >> 2)), bd.gQ(player, fl - fL, 12), fn <= aD.a4U ? ag.a4I[player] = fn : (ag.a4I[player] = aD.a4U, bd.gQ(player, fn - aD.a4U,
			18))), a4T
	}, this.lX = function(player, ia) {
		var h2 = ag.h2,
			a4J = h2[player],
			ia = bL.du(a4J * (ia + 1), 1024),
			a4O = Math.max(bL.du(a4J, 10), 1e3);
		return (ia = Math.min(ia, a4J - a4O)) < 0 ? (h2[player] = 0, a4O = Math.min(1e3, a4J + aD.a4U - ag.a4I[player]), bO.fX[1] = a4O, ag.a4I[player] += a4O - a4J, 0) : (bO.fX[1] = a4O, 10 === aD.kd && (ia = b4.a4P(player, ia)), h2[player] -=
			a4O + ia, ia)
	}, this.mV = function(player) {
		ag.h2[player] -= bO.fX[0] + bO.fX[1]
	}, this.qB = function(player, jU) {
		return (jU = Math.min(jU, aD.ey)) < aD.ey && 0 === ag.mu[jU] && (jU = aD.ey), (bO.ex[0] = jU) === aD.ey || bs.eu(player, jU)
	}, this.qE = function(player, pL) {
		return 0 !== ag.mu[pL] && !bs.eu(player, pL)
	}, this.a4V = function(player, a4W) {
		for (var gY, f1 = al.kr, a4X = 0, a4Y = lw, aB = 0; aB < f1; aB++)
			if (gY = a4Y[aB], !this.ji(gY)) {
				if (player === gY) return !0;
				if (++a4X > a4W) return !1
			} return !1
	}, this.ls = function(gY) {
		var a4Z = aD.hu ? bh.ks() : ag.go[lw[0]];
		return a4Z >= bL.du(gY * aD.k5, 100)
	}, this.a4a = function(fS, min, max) {
		return Math.floor(bL.i8(isNaN(fS) ? 0 : Number(fS), min, max))
	}
}

function a35() {
	this.a4b = function(canvas, a4c, a4d) {
		var i = canvas.width,
			j = canvas.height,
			eZ = bA.qn.xF(i, j),
			i2 = bA.qn.getContext(eZ, !0),
			canvas = (i2.drawImage(canvas, 0, 0), i2.getImageData(0, 0, i, j));
		return a4c(canvas.data, i, j, a4d), i2.putImageData(canvas, 0, 0), eZ
	}, this.a4e = function(xQ, i, j) {
		for (var f8 = i - 1; 0 <= f8; f8--)
			for (var fA = j - 1; 0 <= fA; fA--) {
				var aB = 4 * (f8 + fA * i);
				xQ[3 + aB] = xQ[aB], xQ[aB] = xQ[1 + aB] = xQ[2 + aB] = 255
			}
	}, this.a4f = function(xQ, i, j) {
		for (var f8 = i - 1; 0 <= f8; f8--)
			for (var fA = j - 1; 0 <= fA; fA--) {
				var aB = 4 * (f8 + fA * i);
				xQ[1 + aB] > xQ[2 + aB] + 10 && (xQ[3 + aB] = xQ[aB], xQ[1 + aB] = xQ[2 + aB])
			}
	}, this.a4g = function(xQ, i, j, a4d) {
		for (var gap = Math.floor(Math.min(i, j) * a4d), f8 = 0; f8 < i; f8++)
			for (var aB, fA = 0; fA < j; fA++)(f8 < gap || fA < gap || i - gap <= f8 || j - gap <= fA) && (xQ[3 + (aB = 4 * (f8 + fA * i))] = 255 - 255 * (xQ[1 + aB] - xQ[aB]) / (255 - xQ[aB]))
	}, this.a4h = function(xQ, i, j, a4d) {
		for (var f8 = i - 1; 0 <= f8; f8--)
			for (var fA = j - 1; 0 <= fA; fA--) {
				var aB = 4 * (f8 + fA * i);
				xQ[aB] = a4d[0], xQ[1 + aB] = a4d[1], xQ[2 + aB] = a4d[2]
			}
	}, this.a4i = function(xQ, i, j, a4d) {
		for (var gap = Math.floor(i * a4d), f8 = 0; f8 < i; f8++)
			for (var aB, fA = 0; fA < j; fA++)(f8 < gap || fA < gap || i - gap <= f8 || j - gap <= fA) && (xQ[aB = 4 * (f8 + fA * i)] = xQ[1 + aB] = xQ[2 + aB] = 0)
	}, this.a4j = function(xQ, i, j) {
		for (var fA, aB, f8 = i - 1; 0 <= f8; f8--)
			for (fA = j - 1; 0 <= fA; fA--) 200 < xQ[1 + (aB = 4 * (f8 + fA * i))] && xQ[1 + aB] - 20 > xQ[aB] && xQ[1 + aB] - 20 > xQ[2 + aB] ? xQ[aB] + xQ[2 + aB] < 40 ? xQ[3 + aB] = 0 : (xQ[3 + aB] = xQ[aB], xQ[aB] = 255, xQ[1 + aB] = 255, xQ[
				2 + aB] = 255) : xQ[aB] < 50 && xQ[1 + aB] < 50 && xQ[2 + aB] < 50 && (xQ[aB] + xQ[1 + aB] + xQ[2 + aB] < 50 ? xQ[3 + aB] = 180 : xQ[3 + aB] = 180 + Math.floor(75 * (xQ[aB] + xQ[1 + aB] + xQ[2 + aB] - 50) / 100))
	}, this.a4k = function(xQ, i, j) {
		for (var fA, aB, f8 = i - 1; 0 <= f8; f8--)
			for (fA = j - 1; 0 <= fA; fA--) xQ[1 + (aB = 4 * (f8 + fA * i))] > xQ[aB] + 20 && xQ[1 + aB] > xQ[2 + aB] + 20 && xQ[aB] + xQ[2] < 40 && (xQ[3 + aB] = 255 - xQ[1 + aB], xQ[aB] = xQ[1 + aB] = xQ[2 + aB] = xQ[aB])
	}, this.a3h = function(xQ, i, j, a4d) {
		for (var e8 = i >> 1, f8 = 0; f8 < i; f8++)
			for (var fA = 0; fA < j; fA++) Math.sqrt((f8 - e8) * (f8 - e8) + (fA - e8) * (fA - e8)) > a4d * e8 && (xQ[4 * (f8 + fA * i) + 3] = 0)
	}
}

function a32() {
	var a4l = {
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
		a4m = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rn = function(eb) {
		return eb.replace(a4m, function(match) {
			return a4l[match] || match
		})
	}, this.a03 = function(fS) {
		var aB, a4n, a4o, a4p, a4q;
		if (fS < 0) return "-" + this.a03(Math.abs(fS));
		if (fS < 1e3) return fS.toString();
		for (a4n = Math.floor(Math.log(fS + .5) / Math.log(10)) + 1, a4o = Math.floor((a4n - 1) / 3), a4q = (a4p = fS.toString()).substring(a4n - 3, a4n), aB = 1; aB < a4o; aB++) a4q = a4p.substring(a4n - 3 * (aB + 1), a4n - 3 * aB) + " " + a4q;
		return a4p.substring(0, a4n - 3 * a4o) + " " + a4q
	}, this.a4r = function(gY, a4n) {
		return gY.toFixed(a4n) + "%"
	}, this.a4s = function(fS, a4t) {
		return fS.toFixed(bL.i8(Math.floor((void 0 === a4t ? 3 : a4t) - Math.log10(Math.max(fS, 1))), 0, 8))
	}, this.a4u = function(fS, nW, a4n) {
		return (fS * nW).toFixed(a4n)
	}, this.a1W = function(username) {
		var f5, eq = username.indexOf("[");
		return !(eq < 0) && 1 < (f5 = username.indexOf("]")) - eq && f5 - eq <= 8 ? username.substring(eq + 1, f5).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1W;
	this.a4v = function(qU) {
		for (var fK = Math.floor(.5 * qU.length + .5), nc = Math.floor(.5 * (fK - 1)), aB = 0; aB < nc; aB++)
			for (var fL = -1; fL < 2; fL += 2) {
				var eZ = fK + fL * aB;
				if (" " === qU[eZ]) return [this.a1S(qU.substring(0, eZ)), this.a4w(qU.substring(eZ))]
			}
		return [qU.substring(0, fK), qU.substring(fK)]
	}, this.a4w = function(qU) {
		for (var f1 = qU.length, aB = 0; aB < f1; aB++)
			if (" " !== qU[aB]) return qU.substring(aB);
		return qU
	}, this.a1S = function(qU) {
		for (var aB = qU.length - 1; 0 <= aB; aB--)
			if (" " !== qU[aB]) return qU.substring(0, aB + 1);
		return qU
	}, this.a4x = function(qU, a4y) {
		return qU.split("(")[0] + "(🧈 " + a4y.toFixed(2) + ")"
	}, this.startsWith = function(qU, a4z) {
		return qU.substring(0, a4z.length) === a4z
	}, this.a47 = function(qU, a4z) {
		var f1 = qU.length;
		return qU.substring(f1 - a4z.length, f1) === a4z
	}, this.a50 = function(g, a51, a52) {
		var qU = "",
			f1 = g.length - 1;
		a52 = a52 || "";
		for (var aB = 0; aB < f1; aB++) qU += a52 + g[aB] + a52 + ",", (aB + 1) % a51 == 0 && (qU += "\n");
		return qU += a52 + g[f1] + a52
	}, this.a53 = function(qU, zs, zt) {
		return qU.replace(new RegExp(zs, "g"), zt)
	}
}

function a54() {
	this.eY = function(player, en) {
		aI.yk(player, bM.f9(en), bM.fB(en)) && (bf.dl = !0), aD.kf && this.eU()
	}, this.eU = function() {
		aD.hO = !1;
		for (var aB = 0; aB < aD.kL; aB++) 0 !== ag.mu[aB] && 0 === ag.go[aB] && aI.yr(aB);
		0 !== ag.mu[aD.el] ? (bd.mq[7] = ag.go[aD.el], bd.mq[8] = ag.h2[aD.el], aR.a55(), aW.a56(), aD.h9 || aH.nE(ag.it[aD.el] - 5, ag.iv[aD.el] - 5, ag.iu[aD.el] + 5, ag.iw[aD.el] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a57(18), af.a58(),
			af.mg(!0), bP.y.a59(), aL.s4(), aD.q9 = null, bb.a5A = !0, bb.a5B(), aD.kf && a0.a1.setState(1)
	}
}

function c1() {
	this.ey = 512, this.a4L = 15e8, this.a5C = 1e9, this.a4U = 5e4, this.a5D = 512, this.gK = 2, this.el = 0, this.kL = 0, this.a0p = 0, this.kh = 0, this.a0o = 0, this.xv = 512, this.y0 = 512, this.a4K = 150, this.kf = !0, this.h9 = 0, this.a0m = 0,
		this.k5 = 0, this.nN = !1, this.hO = 0, this.a5E = 0, this.hu = !1, this.y2 = 0, this.y3 = 0, this.kd = 0, this.a1g = 0, this.q9 = null, this.a15 = new z6, this.a5F = 30, this.a0j = 0, this.a0r = 0, this.a14 = 0, this.a0e = 0, this.data =
		new a5G, this.a5H = new a5I, this.a5J = 0, this.a5K = "", this.a5L = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0p = this.kL = this.data.humanCount, this.kf = 1 === this.a0p, this.nN = !1, this.h9 = this.data.isReplay, this.kd = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1g = this.data.isContest, this.hu = this.kd < 7 || 9 === this.kd, this.kd = 10 === this.kd && this.kf ? 7 : this.kd, this.kd = 8 === this.kd && 2 !== this.kL ? 7 : this.kd, az.dd(),
				this.y2 = this.data.numberTeams, this.data.teamPlayerCount ? this.y3 = +(0 < this.data.teamPlayerCount[0]) : (this.y3 = 0, this.hu && this.kf && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.y2 + 1), aD.a5H.a5M())), this.a5F = this.kL <= 2 ? 30 : this.kL <= 50 ? 40 : 50, this.a5E = this.hO = this.data.selectableSpawn, this.q9 = this.hO ? new a54 : null, 1 === l.ds ? this.xv = this.kL : this.xv = this.data
				.playerCount, this.y0 = this.xv, this.kh = this.xv - this.kL, this.a0o = 0, this.el = this.data.selectedPlayer, this.a0j = 0, this.a0r = 0, this.a14 = 0, this.a0e = 0, ay.a5N(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai
				.a5O(), b8.pE.px = [], bg.dd(), this.a0m = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a5P(), ac.de(), ap.a5Q(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a5R(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a5S(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a5T.putImageData(a5U, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), g3(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a15.dd(), bf.a5R(), aH.nD(), 0 === ag.mu[aD.el] && aX.show(!1, !0), af.mg(!0), av.dd(), bf.dl = !0, this.h9 || this.kf && this.hO || a0.a1.setState(1), this.a5J = 0
		}, this.a2A = function(eP) {
			b9.q7.a5W.length ? this.a5K = b9.q7.a5W : this.a5K = b9.a5X.a0E(), b0.y.a5Y(), bq.clear(), this.a0m = 0, bf.a5Z(), a0.a1.setState(0), aa.setState(0), bU.eH.show(eP), 2 === this.a5J ? t.y.a5a() : 1 === this.a5J ? t.u(19) : t.u(5, 5)
		}, this.a5b = function() {
			return this.h9 ? aM.hA || !bC.a5c : this.kf && (aM.hA || this.hO)
		}, this.a5d = function() {
			return 1 === this.a0m && !this.hO
		}
}

function a5G() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5e = null
}

function a5I() {
	this.a5M = function() {
		var a5f = aD.data;
		bA.qv.a3W(a5f.teamPlayerCount, a5f.playerCount), a5f.numberTeams = bA.qv.a3N(a5f.teamPlayerCount, 0), a5f.teamPlayerCount[0] && a5f.teamPlayerCount[7] && (a5f.teamPlayerCount[7] = 0, this.a5M())
	}, this.a5g = function() {
		var a5f = aD.data;
		a5f.mapType < 2 ? bS.a7(bS.a5h(a5f), a5f.mapSeed) : bS.a5i(a5f.canvas)
	}, this.a5j = function() {
		var a5f = aD.data;
		a5f.colorsData || (a5f.colorsData = new Uint32Array(1)), a5f.selectableColor && (a5f.colorsData[0] = bj.y.wS()), a5f.selectableName && (a5f.playerNamesData || (a5f.playerNamesData = new Array(1)), a5f.playerNamesData[0] = bj.eN.data[122]
			.value), a5f.a5e = new Uint32Array(1), a5f.a5e[0] = bG.t7.x5(bj.eN.data[105].value, 5)
	}, this.a5k = function() {
		aD.data = new a5G, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ey), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a5l = [];
	this.ph = function(player, pL, a5m, a5n) {
		player === aD.el || pL === aD.el || !a5n && bA.gM.ji(player) || bA.gM.ji(pL) || this.a1A(ag.a1O[player] + " supported " + ag.a1O[pL] + " with " + bA.rm.a03(a5m) + " ressource" + (1 === a5m ? "." : "s."))
	}, this.a1A = function(qU, pW) {
		qU = {
			eQ: aW.a5p(),
			qU: qU,
			pW: pW
		};
		a5l.push(qU), 30 === t.t4 && t.a5q().a1A(qU)
	}, this.clear = function() {
		a5l = [];
		var tS = t.a5r(30);
		tS && tS.clear()
	}, this.a5s = function() {
		return a5l
	}
}

function dT() {
	this.zk = 0, this.gap = 0, this.sg = 0, this.qt = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.zk = .0022 * bA.qn.qo(.5) * h.iA, this.sg = this.zk / h.k, this.gap = Math.max(Math.floor((a0.a1.i9() ? .0114 : .01296) * h.iA), 2), this.qt = this.gap / h.k
	}
}

function dS() {
	this.a5t = function() {
		return a0.a1.i9() ? 2 : 1
	}
}

function cC() {
	var rM, f8, fA, a5u, a5v, a5w, eQ, a5x, a5y, a5z, a60, gap, zoom, pq, a61;

	function a6F(la, lb, ef) {
		ac.ew(ef) || -1 === (la = bN.lA.a6O(la, lb)) ? aN.a6N(ef) : aN.a6P(la)
	}

	function a6B(a5x) {
		for (var aB = pq.length - 1; 0 <= aB; aB--)
			if (pq[aB] === a5x) return 1
	}

	function a69(a66) {
		var aB, f1;
		if (-1 !== a66)
			for (f1 = rM.length, aB = 0; aB < f1; aB++)
				if (rM[aB].hm && rM[aB].f8 + 1 === a66 % 4 && rM[aB].fA + 1 === a66 >> 2) return aB;
		return -1
	}

	function a67(la, lb) {
		var tS = gap / 2;
		return la < f8 - a5u - 3 * tS || f8 + 3 * a5u + 5 * tS < la || lb < fA - a5u - 3 * tS || fA + 2 * a5u + 3 * tS < lb ? -1 : 4 * (lb < fA - tS ? 0 : lb < fA + a5u + tS ? 1 : 2) + (la < f8 - tS ? 0 : la < f8 + a5u + tS ? 1 : la < f8 + 2 * a5u +
			3 * tS ? 2 : 3)
	}
	this.a62 = function() {
		var aB, fL, a65 = [bB.oK, bB.oY, bB.ns, bB.ov, bB.om];
		for (rM = new Array(10), aB = 0; aB < 10; aB++) rM[aB] = {
			id: aB,
			hm: !1,
			lI: 0,
			canvas: [],
			f8: 0,
			fA: 0
		};
		for (rM[0].colors = [0, 1, 2, 3], rM[0].f8 = 0, rM[0].fA = 0, rM[1].colors = [1, 4], rM[1].f8 = 1, rM[1].fA = 0, rM[2].colors = [0, 1], rM[2].f8 = -1, rM[2].fA = 0, rM[3].colors = [0], rM[3].f8 = 0, rM[3].fA = 0, rM[4].colors = [0, 2],
			rM[4].f8 = 1, rM[4].fA = 1, rM[5].colors = [3], rM[5].f8 = 0, rM[5].fA = -1, rM[6].id = 20, rM[6].colors = [0], rM[6].f8 = 1, rM[6].fA = -1, rM[7].id = 21, rM[7].colors = [0], rM[7].f8 = 0, rM[7].fA = 1, rM[8].id = 16, rM[8]
			.colors = [0], rM[8].f8 = 0, rM[8].fA = 0, rM[9].id = 10, rM[9].colors = [4], rM[9].f8 = 2, rM[9].fA = 0, aB = 0; aB < 10; aB++)
			for (fL = 0; fL < rM[aB].colors.length; fL++) rM[aB].canvas.push(function(id, a3c) {
				if (id < 20) return bA.canvas.zW(ab.get(3), id, a3c);
				var a3c = ab.get(3).height,
					a3d = bA.qn.xF(a3c, a3c),
					i2 = bA.qn.getContext(a3d);
				20 === id ? i2.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xQ.zl(aj.s3.za + aj.s3.zr, i2, 0, 0, a3c);
				return a3d
			}(rM[aB].id, a65[rM[aB].colors[fL]]))
	}, this.a64 = function() {
		return rM
	}, this.dd = function() {
		pq = [], f8 = fA = eQ = 0, a5v = a5w = -1e3, this.resize()
	}, this.resize = function() {
		a5u = Math.floor((a0.a1.i9() ? .075 : .0468) * h.iA), zoom = a5u / ab.get(3).height, gap = Math.floor(a5u / 3)
	}, this.a2d = function(la, lb) {
		return !!this.hm() && (bf.dl = !0, !!aj.xQ.hD(la, lb, a5y) || (la = function(la, lb) {
			a5w = a5v = -1e3;
			var a68 = a69(a67(la, lb));
			if (-1 === a68) return 0;
			if (1 !== rM[a68].colors[rM[a68].lI])
				if (5 === a68) {
					if (! function() {
							var dt = performance.now();
							a61 + 4e3 < dt && (pq = []);
							a61 = dt
						}(), a6B(a5x)) return 1;
					pq.push(a5x), 16 < pq.length && pq.shift()
				} else if (6 === a68) {
				for (var aB = pq.length - 1; 0 <= aB; aB--) 0 === ag.mu[pq[aB]] && pq.splice(aB, 1);
				0 < pq.length && (b5.a6C(1, pq, !0) && b8.gM.pp(pq, a5x), pq = [])
			} else if (2 === a68) an.he(a5x) && b8.hQ.pK(aR.hU(), a5x);
			else if (3 === a68) aD.hO && b8.hQ.hR(a5z);
			else if (0 === a68)
				if (0 === rM[0].lI) {
					if (aD.a5E && aW.a5p() < 350) return 1;
					bV.a6D(4), b8.hQ.hX(aR.hU(), a5x)
				} else b1.hY(a5x, aR.hU());
			else if (1 === a68) b8.hQ.hc(aR.hU(), a5z);
			else if (9 === a68) b8.hQ.hf(aR.hU());
			else {
				if (7 === a68) return bV.a6D(0), aj.xQ.show(la, lb), 2;
				if (4 === a68) b5.a6C(0, [a5x], !0) && b8.gM.pm(a5x);
				else {
					if (8 !== a68) return 0;
					b8.hQ.hT(aR.hU(), a60, a5x)
				}
			}
			return 1
		}(la, lb), this.s4(), 2 === la && (aj.xQ.hm = !0), 0 < la))
	}, this.a2f = function(la, lb) {
		this.hm() || (a5v = la, a5w = lb, eQ = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.hG(mouseX),
			coordY = bM.hI(mouseY),
			coord = bM.fO(coordX, coordY),
			coord = bM.er(coord);
		bM.hJ(coordX, coordY) && a6F(mouseX, mouseY, coord)
	}, this.click = function(la, lb, a2m) {
		var hF = bM.hG(la),
			hH = bM.hI(lb),
			en = bM.fO(hF, hH),
			ef = bM.er(en);
		return !(!bM.hJ(hF, hH) || (hF = (a0.a1.i9() ? .025 : .0144) * h.iA, hH = performance.now(), Math.abs(la - a5v) > hF) || Math.abs(lb - a5w) > hF || eQ + 500 < hH) && (eQ = hH, a2m ? (a6F(la, lb, ef), !1) : aM.hA || this.hm() || !bA.gM.hC(
			aD.el) || aD.h9 ? (this.s4(), !1) : (aD.hO ? 0 <= (a5z = br.hP(en)) && (rM[3].hm = !0) : 2 === aD.a0m ? ac.ga(ef) && (a5x = ac.et(ef), bA.gM.ji(a5x) || (rM[0].hm = !0, rM[0].lI = 1, rM[7].hm = !0)) : (bN.hd.he(aD.el, en) && (
			rM[0].hm = !0, rM[0].lI = 1, rM[1].hm = !0, rM[1].lI = 0, rM[9].hm = !0, rM[9].lI = 0), bN.ha.hb(aD.el, en) && (rM[0].hm = !0, rM[0].lI = 1, rM[1].hm = !0, rM[1].lI = 1, a5z = bO.fc[7]), ac.f6(ef) ? (a60 = am.ec.ee(
			ef)) && (hF = bM.er(a60), rM[8].hm = !0, a5x = ac.es(hF) ? aD.ey : ac.et(hF)) : (ac.yp(aD.el, ef) && (a5y = aD.el, rM[0].hm = !0, rM[0].lI = 1, rM[7].hm = !0), -1 !== (hH = br.hV(en)) && (ac.es(hH << 2) ? (a5x = aD.ey,
			bs.hW(aD.el) ? (rM[0].hm = !0, rM[0].lI = 0) : ad.g7(aD.el) && (rM[0].hm = !0, rM[0].lI = 3)) : (a5x = ac.et(hH << 2), rM[0].lI = 1, rM[5].hm = function(a5x) {
			return !bA.gM.ji(a5x) && !a6B(a5x) && b5.a6C(1, [a5x], !1)
		}(a5x), rM[7].hm || bA.gM.ji(a5x) || (a5y = a5x, rM[7].hm = !0), rM[4].hm = !bA.gM.ji(a5x) && !af.a6J(a5x) && b5.a6C(0, [a5x], !1), rM[6].hm = function(a5x) {
			if (0 === pq.length) return !1;
			if (performance.now() > a61 + 4e3) return !(pq = []);
			return !a6B(a5x) && ! function(a5x) {
				var aB;
				if (aD.hu)
					for (aB = pq.length - 1; 0 <= aB; aB--)
						if (!bs.eu(a5x, pq[aB])) return 1;
				return
			}(a5x)
		}(a5x), bs.eu(a5x, aD.el) ? (bs.hZ(aD.el, a5x) ? (rM[0].lI = 0, rM[0].hm = !0) : ad.g7(aD.el) && (rM[0].lI = 3, rM[0].hm = !0), rM[0].hm = this.a6L()) : (rM[2].hm = !0, an.he(a5x) ? rM[2].lI = 0 : rM[2].lI = 1,
			rM[0].hm = !0))))), this.a6G(la, lb)))
	}, this.a6G = function(la, lb) {
		return f8 = la - Math.floor(a5u / 2), fA = lb - Math.floor(a5u / 2), !!this.hm()
	}, this.a2J = function(la, lb) {
		return !!this.hm() && (aj.xQ.hm ? !aj.xQ.zj(la, lb) && (aj.xQ.hm = !1, bf.dl = !0) : function(sP, la, lb) {
			la = a67(la, lb);
			if (0 <= a69(la)) return !1;
			if ((1 === la || 6 === la) && 0 <= a69(2)) return !1;
			if ((6 === la || 9 === la) && 0 <= a69(10)) return !1;
			return sP.s4(), bf.dl = !0
		}(this, la, lb))
	}, this.s4 = function() {
		for (var aB = rM.length - 1; 0 <= aB; aB--) rM[aB].hm = !1, rM[aB].lI = 0;
		aj.xQ.hm = !1
	}, this.hm = function() {
		return this.a6L() || aj.xQ.hm
	}, this.a6L = function() {
		for (var f1 = rM.length, aB = 0; aB < f1; aB++)
			if (rM[aB].hm) return !0;
		return !1
	}, this.vQ = function() {
		if (this.hm())
			if (aj.xQ.hm) aj.xQ.vQ();
			else {
				var aB, i2 = vR,
					fL = rM,
					f1 = fL.length,
					a6T = (a5u + gap) / zoom;
				for (i2.imageSmoothingEnabled = !0, i2.setTransform(zoom, 0, 0, zoom, f8, fA), aB = 0; aB < f1; aB++) fL[aB].hm && vR.drawImage(fL[aB].canvas[fL[aB].lI], fL[aB].f8 * a6T, fL[aB].fA * a6T);
				i2.imageSmoothingEnabled = !1, i2.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a6U, a6V, a6W, a6X = -1;

	function a6Y() {
		console.log("gblRefreshButton " + a6V);
		var a6Z, z0 = canvas.getContext("2d", {
			alpha: !0
		});
		z0.clearRect(0, 0, j, j), z0.fillStyle = bB.nq, z0.fillRect(0, 0, j, j), 9 === a6V && (z0.fillStyle = bB.nv, z0.fillRect(0, 0, j, j)), z0.fillStyle = bB.nu, z0.fillRect(0, 0, j, 1), z0.fillRect(0, 0, 1, j), z0.fillRect(0, j - 1, j, 1), z0
			.fillRect(j - 1, 0, 1, j), a6Z = .9 * j / ab.get(0).width, z0.imageSmoothingEnabled = !0, z0.setTransform(a6Z, 0, 0, a6Z, Math.floor((j - a6Z * ab.get(0).width) / 2), Math.floor((j - a6Z * ab.get(0).height) / 2)), z0.drawImage(ab.get(0),
				0, 0), z0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6b(la, lb) {
		if (!aM.hA) return la <= j + bc.gap && lb >= aR.fA ? 9 : -1;
		if (la <= 4 * j + bc.gap) {
			if (lb >= aR.fA) return 0;
			if (lb >= aR.fA - j - a6W * bc.gap) return 2
		} else if (la <= 7 * j + bc.gap && lb >= aR.fA - j - a6W * bc.gap) return 1;
		return -1
	}
	this.hA = !1, this.dd = function() {
		a6V = -1, this.hA = !1, a6W = a0.a1.i9() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6U = bA.qn.se(1, (a0.a1.i9() ? .5 : .45) * j), a6Y()
	}, this.a2u = function() {
		this.hA = !this.hA, this.hA ? (bC.a2t(!1), aD.h9 && bC.a5c && bC.a2v(!0), this.a6a(), 9 === a6V && (a6V = 0)) : (a6V = -1, a6Y(), !aD.kf || 1 !== aD.a0m || aD.hO || aD.h9 || a0.a1.setState(1)), bf.dl = !0
	}, this.a6a = function() {
		(aD.kf || aD.h9) && 1 === aD.a0m && (aV.mg(!0), aD.hO || setTimeout(function() {
			bb.a0y()
		}, 0), a0.a1.setState(0))
	}, this.hD = function(la, lb) {
		return 0 <= (a6X = a6b(la, lb)) || !aM.hA || aD.kf || aD.h9 || be.hm || aM.a2u(), a6X
	}, this.a2J = function(la, lb) {
		la = a6b(la, lb);
		la !== a6V && (console.log("mouseMove " + la), a6V = la, this.hA || a6Y(), bf.dl = !0)
	}, this.a2K = function(la, lb) {
		la = a6b(la, lb);
		return -1 !== la && a6X === la && (this.hA ? aD.nN ? (0 <= la && bC.a2t(!1), !aD.h9) : (0 === la ? aD.a2A() : 1 === la ? this.a2u() : 2 === la && t.u(1, 0), !0) : 9 === la && (this.a2u(), !0))
	}, this.vQ = function() {
		var i;
		this.hA ? (i = Math.floor(5.5 * j), vR.setTransform(1, 0, 0, 1, bc.gap, aR.fA), vR.fillStyle = bB.nq, vR.fillRect(0, 0, i, j), 0 === a6V ? (vR.fillStyle = bB.nv, vR.fillRect(0, 0, 4 * j, j)) : 1 === a6V && (vR.fillStyle = bB.nv, vR
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vR.fillStyle = bB.nu, vR.fillRect(0, 0, i, 1), vR.fillRect(0, 0, 1, j), vR.fillRect(4 * j, 0, 1, j), vR.fillRect(0, j - 1, i, 1), vR.fillRect(i - 1, 0, 1, j), vR.font = a6U, bA.qn
			.textBaseline(vR, 1), bA.qn.textAlign(vR, 1), vR.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a6f(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.fA + .3 * j, i), i = 1, vR.setTransform(1, 0, 0, 1, bc.gap, aR.fA - i * a6W * bc.gap - i *
				j), vR.fillStyle = bB.nq, vR.fillRect(0, 0, 4 * j, j), a6V === i + 1 && (vR.fillStyle = bB.nv, vR.fillRect(0, 0, 4 * j, j)), vR.fillStyle = bB.nu, vR.fillRect(0, 0, 4 * j, 1), vR.fillRect(0, 0, 1, j), vR.fillRect(4 * j, 0, 1,
				j), vR.fillRect(0, j - 1, 4 * j, 1), vR.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), vR.setTransform(1, 0, 0, 1, 0, 0)) : vR.drawImage(canvas, bc.gap, aR.fA)
	}, this.qO = function(player) {
		return 0 !== ag.mu[player] && 2 !== aD.a0m && !bA.gM.ji(player)
	}, this.a6f = function(f8, fA, f1) {
		vR.setTransform(1, 0, 0, 1, f8, fA), vR.lineWidth = bc.zk, vR.strokeStyle = bB.nu, vR.beginPath(), vR.moveTo(0, 0), vR.lineTo(f1, f1), vR.moveTo(0, f1), vR.lineTo(f1, 0), vR.stroke()
	}
}

function cE() {
	var a6h, j, a6i, a6j, a6k, a6l, a6m, a6n, a6o;

	function yw() {
		return aR.a76(aN.a72()) ? aw.hm ? __fx.settings.keybindButtons ? aR.fA - 2 * aR.j - 3 * a6i : aR.fA - aR.j - 2 * a6i : __fx.settings.keybindButtons ? aR.fA - aR.j - 2 * a6i : aR.fA - a6i : bC.a76(aN.a75()) ? aw.hm ? bC.yw() - aR.j - 2 * a6i :
			bC.yw() - a6i : aw.hm ? h.j - aR.j - (bk.a5t() + 1) * a6i : h.j - bk.a5t() * bc.gap
	}

	function a6t(dt, qU, id, gY, a6w, a6x, ky, a6y, a6z, a70, a7A) {
		var aB, z0, a3d, qf, a7B = void 0 !== a6z,
			i = Math.floor(aQ.measureText(qU, aN.a6U) + 1.5 * a6j + (a7B ? j : 1.5 * a6j));
		if (bf.dl = !0, a7A || bq.a1A(qU, a6z), i + 2 * a6i + aR.j > h.i && !a7B && 50 !== id && 20 < qU.length) a6t(dt, (a7A = bA.rm.a4v(qU))[0], id, gY, a6w, a6x, ky, a6y, a6z, a70, !0), a6t(dt, a7A[1], id, gY, a6w, a6x, ky, a6y, a6z, a70, !0);
		else if (a7A = i + (50 === id ? a6k : 0), (a3d = document.createElement("canvas")).width = i, a3d.height = j, (z0 = a3d.getContext("2d", {
				alpha: !0
			})).font = aN.a6U, bA.qn.textBaseline(z0, 1), bA.qn.textAlign(z0, 0), z0.clearRect(0, 0, i, j), z0.fillStyle = a6x, z0.fillRect(0, 0, i, j), z0.fillStyle = a6w, z0.fillText(qU, Math.floor(1.5 * a6j), Math.floor(j / 2)), a7B && (z0
				.imageSmoothingEnabled = !0, aj.xQ.zl(a6z, z0, i - j, 0, j)), 0 === (qf = {
				eQ: dt,
				qU: qU,
				id: id,
				player: gY,
				canvas: a3d,
				a6w: a6w,
				a6x: a6x,
				i: i,
				a73: a7A,
				ky: ky,
				a6y: a6y,
				a6z: a6z,
				a70: a70
			}).eQ || 0 < a6h.length && 0 < a6h[0].eQ) a6h.unshift(qf);
		else {
			for (aB = 1; aB < a6h.length; aB++)
				if (0 < a6h[aB].eQ) return void a6h.splice(aB, 0, qf);
			a6h.push(qf)
		}
	}

	function a6u(e8, tS, fL) {
		return "rgb(" + e8 + "," + tS + "," + fL + ")"
	}

	function a7C(id, gT) {
		for (var f1 = a6h.length, aB = 0; aB < f1; aB++) a6h[aB].id === id && gT-- <= 0 && (a6h.splice(aB, 1), aB--, f1--)
	}

	function a7D(id, player) {
		for (var fF = !1, aB = a6h.length - 1; 0 <= aB; aB--) a6h[aB].id !== id || player !== aD.ey && a6h[aB].player !== player || (a6h.splice(aB, 1), fF = !0);
		return fF
	}

	function a7Z(qU) {
		a6t(340, qU, 6, 0, a6u(215, 245, 255), bB.nr, -1, !1)
	}
	this.a6p = "", this.dd = function() {
		var self;
		a6n = 0, a6m = a0.a1.i9() ? 7 : 12, a6l = {
			a0a: [0, 0, 0],
			a6q: [0, 0, 0],
			eG: [220, 180, 180],
			vP: [0, 0, 0],
			eZ: [0, 0, 0]
		}, a6h = [], this.resize(), aD.hO && this.a0z(0, 18), bS.xD.xE[bS.eh].name.length && a7Z(L(86, [bS.xD.xE[bS.eh].name])), a7Z(L(87, [bS.fC - 2 + "x" + (bS.fD - 2)])), a7Z(L(88, [bA.rm.a03(ap.a7a)])), ap.a7a !== ap.a7b && a7Z(L(89, [bA
			.rm.a03(ap.a7b) + " (" + bA.rm.a4r(100 * ap.a7b / ap.a7a, 1) + ")"
		])), 0 < ap.a7c && a7Z(L(66, [bA.rm.a03(ap.a7c) + " (" + bA.rm.a4r(100 * ap.a7c / ap.a7a, 1) + ")"])), 0 < ap.a7d && a7Z(L(90, [bA.rm.a03(ap.a7d) + " (" + bA.rm.a4r(100 * ap.a7d / ap.a7a, 1) + ")"])), 10 === aD.kd && a6t(120, L(91),
			6, 0, a6u(235, 255, 120), bB.nr, -1, !1), 0 !== (self = this).a6p.length && (a6t(200, self.a6p, 0, 0, bB.nu, bB.nr, -1, !1), self.a6p = ""), aD.a1g && a6t(340, L(44), 6, 0, a6u(255, 200, 0), bB.nr, -1, !1)
	}, this.resize = function() {
		var a6v, aB;
		if (j = (j = Math.floor((a0.a1.i9() ? .031 : .0249) * h.iA)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6U = bA.qn.se(1, this.fontSize), a6i = bc.gap, a6j = Math.floor(j / 5), 0 < a6h.length)
			for (a6v = a6h, a6h = [], aB = a6v.length - 1; 0 <= aB; aB--) a6t(a6v[aB].eQ, a6v[aB].qU, a6v[aB].id, a6v[aB].player, a6v[aB].a6w, a6v[aB].a6x, a6v[aB].ky, a6v[aB].a6y, a6v[aB].a6z, a6v[aB].a70, !0);
		this.a71()
	}, this.a71 = function() {
		a6o = document.createElement("canvas");
		var qU = L(45),
			z0 = (a6k = aQ.measureText(qU, this.a6U) + 5 * a6j, a6o.height = j, a6o.width = a6k, a6o.getContext("2d", {
				alpha: !0
			}));
		z0.font = this.a6U, bA.qn.textBaseline(z0, 1), bA.qn.textAlign(z0, 1), z0.clearRect(0, 0, a6k, j), z0.fillStyle = bB.oH, z0.fillRect(0, 0, a6k, j), z0.fillStyle = bB.nu, z0.fillText(qU, Math.floor(a6k / 2), Math.floor(j / 2))
	}, this.a72 = function() {
		var f1;
		return aw.hm ? aw.i : 0 === (f1 = a6h.length) ? 0 : 1 === f1 ? a6h[0].a73 : a74(a6h[0].a73, a6h[1].a73)
	}, this.a75 = function() {
		var f1 = a6h.length;
		return aw.hm ? f1 ? a74(aw.i, a6h[0].a73) : aw.i : 0 === f1 ? 0 : 1 === f1 ? a6h[0].a73 : 2 === f1 ? a74(a6h[0].a73, a6h[1].a73) : a74(a74(a6h[0].a73, a6h[1].a73), a6h[2].a73)
	}, this.hD = function(f8, fA) {
		for (var nK, a77, a78 = yw(), aB = a6h.length - 1; 0 <= aB; aB--)
			if ((a77 = a78 - (aB + 1) * j) <= fA && fA < a77 + j) return 50 === a6h[aB].id ? f8 >= h.i - a6k - a6i - a6h[aB].i && (f8 >= h.i - a6k - a6i ? b8.gM.pm(a6h[aB].player) : aH.nF(a6h[aB].player, 800, !1, 0), !0) : f8 >= h.i - a6h[aB].i -
				a6i && (736 === a6h[aB].id ? window.open("https://" + a6h[aB].qU, "_blank") : a6h[aB].a6y && (a6h[aB].a70 && a6h[aB].a70.fK ? (a77 = a6h[aB].a70.en, nK = bM.f9(a77) - 10, a77 = bM.fB(a77) - 10, aH.nE(nK, a77, 19 + nK, 19 +
					a77)) : a6h[aB].a70 && a6h[aB].a70.fL ? aH.nG(a6h[aB].player, a6h[aB].a70.nH) : (aH.nF(a6h[aB].player, 800, !1, 0), 0 <= a6h[aB].ky && (nK = a6h[aB].ky, a6h[aB].ky = a6h[aB].player, a6h[aB].player = nK))), !0);
		return !1
	}, this.a1A = function(dt, qU, id, gY, a6w, a6x, ky, a6y, a6z, a70) {
		a6t(dt, qU, id, gY, a6w, a6x, ky, a6y, a6z, a70)
	}, this.a79 = function(r) {
		a6t(300, r, 252, 0, bB.nu, bB.nr, -1, !1)
	}, this.a57 = function(id) {
		for (var aB = a6h.length - 1; 0 <= aB; aB--) a6h[aB].id === id && (a6h[aB].eQ = 1)
	}, this.a0z = function(player, id) {
		0 === id ? (aQ.eY(player, 0), a7C(423, 2), a6t(160, L(46, [ag.a1O[player]]), 423, player, "rgb(10,220,10)", bB.nr, -1, !1)) : 1 === id ? (a7D(50, aD.ey), aQ.eY(player, 1), a6t(360, L(47, [ag.a1O[player]]), 0, player, bB.oa, bB.nr, -1, !
				0), aH.nF(player, 2700, !1, 0)) : 2 === id ? (aQ.eY(player, 2), a6t(0, L(48), 0, player, "rgb(10,255,255)", bB.nr, -1, !0), aH.nF(player, 2700, !1, 0)) : 3 === id ? (aQ.eY(player, 2), a6t(0, L(49, [ag.a1O[player]]), 0, player, bB
				.nu, bB.nr, -1, !0), aH.nF(player, 2700, !1, 0)) : 4 === id ? this.a7E(1, player, player) : 5 === id ? bA.gM.ji(aD.el) || (function(id, mp) {
				var aB, a7O = 0,
					f1 = a6h.length;
				for (aB = 0; aB < f1; aB++)
					if (a6h[aB].id === id && mp <= ++a7O) return a6h.splice(aB, 1)
			}(1, 5), af.a7G(player) && a6t(180, L(50, [ag.a1O[player]]), 1, player, a6u(255, 200, 180), bB.nr, -1, !0), bA.gM.a4E(player, 10) && (a7C(573, 0), a6t(180, L(51, [ag.a1O[player]]), 573, player, bB.oa, bB.nr, -1, !0))) : 18 === id ?
			a6t(255, L(52), 18, 0, bB.nu, bB.nr, -1, !1) : 21 === id ? a6t(220, L(53), id, 0, bB.nu, bB.nr, -1, !1) : 22 === id ? this.a7E(2, player, player) : 59 === id && a6t(0, L(54), id, 0, bB.ou, bB.nr, 0, !1)
	}, this.a26 = function(r) {
		a6t(200, L(55, [r]), 94, 0, bB.nu, bB.oW, -1, !1)
	}, this.a1C = function(a7H) {
		if (aD.el === a7H && !aD.kf && !aD.kL)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a6t(0, "Your Win Count is now " + __fx.wins.count, 3, a7H, bB.nu, bB.nr, -1, !0);
		ag.go[a7H] && (aQ.eY(a7H, 2), aD.kL < 100 ? a6t(0, L(49, [ag.a1O[a7H]]), 3, a7H, bB.nu, bB.nr, -1, !0) : a6t(0, L(56, [ag.a1O[a7H]]), 3, a7H, bB.nu, bB.nr, -1, !0))
	}, this.a6N = function(ef) {
		var qU, a7J, a7I = "(" + bM.f9(ef >> 2) + ", " + bM.fB(ef >> 2) + ")",
			a6y = !1,
			player = 0;
		ac.ew(ef) ? ac.es(ef) ? a7I = L(57, [a7I]) : (player = ac.et(ef), aD.h9 && !1 === __fx.hoveringTooltip.active && (aD.el = player), qU = L(58, [bA.z0.a3r(ag.a1T[player], bA.qn.se(0, 10), 150)]) + "   ", qU = (qU += L(59, [bA.rm.a03(ag.h2[
				player])]) + "   ") + L(60, [bA.rm.a03(ag.go[player])]) + "   ", aD.hu && (a7J = bg.a18[bg.ki[bg.ez[player]]], qU += L(61) + ": " + a7J + "   "), bA.gM.ji(player) && (qU += L(62) + ": " + aE.kW[aE.hj[player]] + "   "), a7I =
			qU = (qU += L(63, [player]) + "   ") + L(64, [a7I]), a6y = !0) : a7I = ac.f6(ef) ? L(65, [a7I]) + "   #" + ac.ej(ef) : L(66, [a7I]), bf.dl = !0, a7C(55, 0), a6t(220, a7I, 55, player, bB.nu, bB.nr, -1, a6y, void 0, void 0, !0)
	}, this.a6P = function(a7K) {
		var lG = bN.y,
			player = lG.mF[a7K] >> 3,
			qU = (bf.dl = !0, a7C(55, 0), L(67, [ag.a1O[player]]) + "   ");
		a6t(220, qU += L(59, [bA.rm.a03(lG.a7L[a7K])]), 55, player, bB.nu, bB.nr, -1, !0)
	}, this.pV = function(pH, a7M, pW) {
		pH === aD.el ? a6t(175, " " + L(68, [ag.a1O[a7M]]) + ": ", 1001, a7M, a6u(200, 255, 210), bB.nr, -1, !0, pW) : this.a7N(pH, pW)
	}, this.a7N = function(pH, pW) {
		a7C(1e3, 0), a6t(175, ag.a1O[pH] + ": ", 1e3, pH, bB.nu, "rgba(5,60,25,0.9)", -1, !0, pW)
	}, this.a1B = function() {
		var r;
		aD.a0r ? (r = L(69), aQ.a19(L(70), 2, 1, 12), a6t(0, r, 40, 0, "rgb(10,220,10)", bB.nr, -1, !1)) : (r = L(71), aQ.a19(L(72), 2, 0, 16), a6t(0, r, 41, 0, bB.nu, bB.nr, -1, !1))
	}, this.z7 = function() {
		var gT = ag.a1O,
			f4 = aD.data;
		a6t(300, gT[0] + " [" + aD.a15.zD(f4.elo[0]) + "] vs " + gT[1] + " [" + aD.a15.zD(f4.elo[1]) + "]", 65, 0, bB.nl, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7P = function(r) {
		a6t(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7Q = function(a7R) {
		a6t(0, L(a7R ? 73 : 74), 247, 0, bB.ot, bB.nr, -1, !1)
	}, this.zF = function(zC, zE, a7S) {
		var f4 = aD.data,
			gT = ag.a1O;
		a6t(0, gT[0] + ": " + aD.a15.zD(f4.elo[0]) + " -> " + zC, 66, 0, bB.nu, a7S[0], -1, !1), a6t(0, gT[1] + ": " + aD.a15.zD(f4.elo[1]) + " -> " + zE, 66, 1, bB.nu, a7S[1], -1, !1)
	}, this.pn = function(player, id) {
		0 === id ? a7D(50, player) ? (a6t(128, L(75, [ag.a1O[player]]), 52, player, a6u(180, 255, 180), bB.nr, -1, !0), af.qM(player, 2, 255)) : a6t(384, L(76, [ag.a1O[player]]), 51, player, a6u(210, 210, 255), bB.nr, -1, !0) : a7D(51, player) ?
			(a6t(128, L(77, [ag.a1O[player]]), 52, player, bB.nu, "rgba(60,120,10,0.9)", -1, !0), af.qM(player, 2, 255)) : (a6t(384, L(78, [ag.a1O[player]]), 50, player, bB.nu, "rgba(90,90,90,0.9)", -1, !0), af.qM(player, 2, 96))
	}, this.pr = function(a0a, target) {
		var color = a6u(210, 255, 210);
		1 < a0a.length ? a6t(230, L(79, [a0a.length, ag.a1O[target]]), 66, target, color, bB.nr, -1, !0) : a6t(230, L(80, [ag.a1O[a0a[0]], ag.a1O[target]]), 66, a0a[0], color, bB.nr, target, !0)
	}, this.a7T = function(player, target) {
		a6t(230, L(81, [ag.a1O[player], ag.a1O[target]]), 66, player, bB.nu, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7U = function(id, gT) {
		a7C(id, gT)
	}, this.a0u = function(id, player) {
		a7D(id, void 0 === player ? aD.ey : player)
	}, this.a7V = function(id) {
		for (var aB = a6h.length - 1; 0 <= aB; aB--)
			if (a6h[aB].id === id) return a6h[aB];
		return null
	}, this.pi = function(a5m, a7W, player) {
		2 !== ag.a49[aD.el] && a6t(200, 1 === a5m ? L(82, [ag.a1O[player]]) : L(83, [bA.rm.a03(a5m), ag.a1O[player]]), 30, player, "rgb(190,255,190)", bB.nr, -1, !0)
	}, this.a7Y = function(a5m, player) {
		2 !== ag.a49[aD.el] && (a7C(31, 0), a5m = " (" + bA.rm.a03(a5m) + ") 💸", a6t(150, a5m = bA.gM.ji(player) ? L(84) + a5m : L(85, [ag.a1O[player]]) + a5m, 31, player, bB.nl, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a0t = function(bu) {
		for (var eZ = bf.kI(), aB = 2; 0 <= aB; aB--) 0 < a6l.vP[aB] && (bu || a6l.eZ[aB] < eZ - 220) && this.a7e(aB)
	}, this.a7e = function(id) {
		var qU, f1 = a6l.vP[id],
			player = a6l.a0a[id];
		a6l.vP[id] = 0, 1 === f1 ? (0 === id ? qU = L(92, [ag.a1O[player], ag.a1O[a6l.a6q[0]]]) : 1 === id ? qU = L(93, [ag.a1O[player]]) : 2 === id ? qU = L(94, [ag.a1O[player]]) : 3 === id && (qU = L(95, [ag.a1O[player]])), a7C(7, 0), a6t(a6l
			.eG[id], qU, 7, a6l.a6q[id], bB.nu, bB.nr, -1, !0)) : (qU = L(0 === id ? 96 : 1 === id ? 97 : 98, [f1]), a7C(7, 0), a6t(a6l.eG[id], qU, 7, player, bB.nu, bB.nr, -1, !1))
	}, this.a7E = function(id, hS, ky) {
		var eZ = bf.kI(),
			f1 = a6l.vP[id] + 1;
		a6l.vP[id]++, a6l.a0a[id] = hS, a6l.a6q[id] = ky, 1 === f1 && (a6l.eZ[id] = eZ), (1 === f1 && (aD.a0p < 32 || 2 === aD.a0m) || 1 < f1 && (a6l.eZ[id] < eZ - 140 || 2 === aD.a0m)) && this.a7e(id)
	}, this.eU = function() {
		b2.eU();
		for (var ja = (ja = a6h.length - a6m) <= 1 ? 1 : ja * ja, aB = a6h.length - 1; 0 <= aB; aB--) 0 < a6h[aB].eQ && (a6h[aB].eQ -= ja, a6h[aB].eQ <= 0) && (bf.dl = !0, a6h.splice(aB, 1));
		! function() {
			var gT, aB;
			if (128 !== a6n && !(++a6n < 128))
				for (gT = 5, aB = al.kr - 1; 0 <= aB; aB--) 1 === ag.a49[al.kw[aB]] && 0 < gT-- && a6t(240, L(95, [ag.a1O[al.kw[aB]]]), 1, al.kw[aB], bB.nl, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0t(!1)
	}, this.vQ = function() {
		for (var xy, fA = yw(), aB = a6h.length - 1; 0 <= aB; aB--) xy = fA - (aB + 1) * j, 50 === a6h[aB].id ? (vR.drawImage(a6h[aB].canvas, h.i - a6h[aB].i - a6k - a6i, xy), vR.drawImage(a6o, h.i - a6k - a6i, xy)) : vR.drawImage(a6h[aB].canvas,
			h.i - a6h[aB].i - a6i, xy)
	}
}

function cF() {
	var a7h, a7i, vS = "",
		xj = 0,
		xk = 0,
		a7g = -1,
		e4 = ["Team", "Zombie", "BR", "1v1"];

	function a7j() {
		for (var dt = new Date, a7k = dt.getUTCMinutes(), dt = dt.getUTCSeconds(), a7m = [], a7n = 0, aB = 0; aB < 6; aB++) a7m.push(a7n), a7m.push(a7n + 2), a7m.push(a7n + 5), a7m.push(a7n + 7), a7n += 10;
		for (var f1 = a7m.length, aB = 1; aB < f1 && !(a7k < a7m[aB]); aB++);
		aB %= f1;
		dt = (a7m[0] = 60) * (a7m[aB] - a7k) - dt;
		return dt !== a7g && (vS = e4[aB % 4] + " " + a7i + ": " + a7p(Math.floor(dt / 60)) + ":" + a7p(dt % 60), a7g = dt, xj = aQ.measureText(vS, a7h), xj += Math.floor(.4 * xk), 1)
	}

	function a7p(a7q) {
		return a7q < 10 ? "0" + a7q : String(a7q)
	}
	this.dd = function() {
		a7i = L(99)
	}, this.resize = function() {
		xj = Math.floor((a0.a1.i9() ? .53 : .36) * h.iA), xk = Math.floor(.065 * xj), a7h = bA.qn.se(1, Math.floor(.9 * xk)), a7g += 1e3, a7j()
	}, this.eU = function() {
		a7j() && (bf.dl = !0)
	}, this.vQ = function() {
		vR.lineWidth = 1 + Math.floor(xk / 15), vR.translate(h.i - xk, Math.floor(.5 * (h.j + xj))), vR.rotate(-Math.PI / 2), vR.fillStyle = bB.nu, vR.fillRect(0, 0, xj, xk), vR.strokeStyle = bB.nl, vR.strokeRect(0, 0, xj, xk + 10), vR
			.fillStyle = bB.nl, vR.font = a7h, bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 1), vR.fillText(vS, Math.floor(xj / 2), Math.floor(.59 * xk)), vR.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a5l, a7r, a7s, xk, a7t, a7u = 0,
		a7v = 0;

	function a7x(aB) {
		var a7z = !0,
			zs = bB.nu,
			i = (1 === a5l[aB].id ? a5l[aB].z0.fillStyle = bB.oo : a5l[aB].jU === aD.ey ? a5l[aB].z0.fillStyle = bB.o5 : (ac.a80(a5l[aB].jU), a5l[aB].z0.fillStyle = bA.color.no(bO.fZ[0], bO.fZ[1], bO.fZ[2], .87), 400 < bA.qv.a3H(bO.fZ, 0, 2) && (
				a7z = !1, zs = bB.nl)), a5l[aB].canvas.width),
			tB = (a5l[aB].z0.clearRect(0, 0, i, xk), a5l[aB].z0.fillRect(0, 0, i, xk), a5l[aB].z0.fillStyle = zs, ! function(z0, i, xk) {
				z0.fillRect(0, 0, i, 1), z0.fillRect(0, xk - 1, i, 1), z0.fillRect(0, 0, 1, xk), z0.fillRect(i - 1, 0, 1, xk)
			}(a5l[aB].z0, i, xk), a7r + 2 * xk < i && (a5l[aB].z0.fillRect(i - a7r - xk, 0, 1, xk), a5l[aB].z0.fillText(ag.a1O[a5l[aB].jU], Math.floor((i - a7r) / 2), Math.floor(.57 * xk))), 0 !== a5l[aB].id ? 0 : xk);
		a5l[aB].z0.fillText(bA.rm.a03(a5l[aB].hj), Math.floor(i - a7r / 2 - tB), Math.floor(.57 * xk)),
			function(aB, i, tB, a7z) {
				a5l[aB].z0.fillStyle = a7z ? bB.nw : bB.ns;
				a7z = Math.floor(a7r * a5l[aB].hj / a5l[aB].a86);
				a5l[aB].z0.fillRect(Math.floor(i - a7r - tB), xk - a7t, a7z, a7t)
			}(aB, i, tB, a7z), 0 === a5l[aB].id ? (a83(aB, i, a7z, zs), function(aB, i, a7z) {
				a5l[aB].z0.strokeStyle = a7z ? bB.oC : bB.oM, a5l[aB].z0.fillRect(xk, 0, 1, xk);
				a7z = i - xk;
				a5l[aB].z0.beginPath(), a5l[aB].z0.moveTo(Math.floor(.3 * xk + a7z), Math.floor(xk / 2)), a5l[aB].z0.lineTo(Math.floor(xk - .3 * xk + 0 + a7z), Math.floor(xk / 2)), a5l[aB].z0.stroke(), a5l[aB].z0.beginPath(), a5l[aB].z0.moveTo(
					Math.floor(xk / 2 + a7z), Math.floor(.3 * xk)), a5l[aB].z0.lineTo(Math.floor(xk / 2 + a7z), Math.floor(xk - .3 * xk + 0)), a5l[aB].z0.stroke()
			}(aB, i, a7z)) : a83(aB, 2 * xk, a7z, zs)
	}

	function a83(aB, i, a7z, zs) {
		a5l[aB].z0.strokeStyle = a5l[aB].a87 ? bB.o3 : a7z ? bB.oS : bB.oT, a5l[aB].z0.fillStyle = zs, a5l[aB].z0.fillRect(i - xk, 0, 1, xk), a5l[aB].z0.lineWidth = Math.max(Math.floor(xk / 12), 3), a5l[aB].z0.lineCap = "round";
		a7z = .35;
		i = xk + 1, a5l[aB].z0.beginPath(), a5l[aB].z0.moveTo(Math.floor(i - a7z * xk + 0), Math.floor(a7z * xk)), a5l[aB].z0.lineTo(Math.floor(i - xk + a7z * xk), Math.floor(xk - a7z * xk + 0)), a5l[aB].z0.stroke(), a5l[aB].z0.beginPath(), a5l[aB]
			.z0.moveTo(Math.floor(i - xk + a7z * xk), Math.floor(a7z * xk)), a5l[aB].z0.lineTo(Math.floor(i - a7z * xk + 0), Math.floor(xk - a7z * xk + 0)), a5l[aB].z0.stroke()
	}

	function a8J(g, a8H) {
		for (var hj, aB = a8H - 1; 0 <= aB; aB--) hj = ad.gD(aD.el, aB), g[aB].hj !== hj && (g[aB].hj = hj, g[aB].a86 = Math.max(hj, g[aB].a86), g[aB].a7y = !0)
	}

	function a8N(g, a8L) {
		for (var tO = aD.el << 3, a7L = bN.y.a7L, mC = bN.y.mC, a8P = bN.y.a8P, aB = a8L - 1; 0 <= aB; aB--) {
			var a8Q = a8P[tO + aB],
				hj = a7L[a8Q];
			g[aB].hj !== hj ? (g[aB].hj = hj, g[aB].a86 = Math.max(hj, g[aB].a86), g[aB].a7y = !0) : g[aB].a87 || mC[a8Q] % 64 != 5 || (g[aB].a87 = !0, g[aB].a7y = !0)
		}
	}

	function a7w(a5o) {
		a5o.canvas = document.createElement("canvas"), bS.xJ.font = a7s;
		var i = a7r;
		a5o.jU < aD.ey && 0 === a5o.id && (i += Math.floor(bS.xJ.measureText(ag.a1O[a5o.jU] + "000").width)), i += xk, 0 === a5o.id && (i += xk), a5o.canvas.width = i, a5o.canvas.height = xk, a5o.z0 = a5o.canvas.getContext("2d", {
			alpha: !0
		}), a5o.z0.font = a7s, bA.qn.textBaseline(a5o.z0, 1), bA.qn.textAlign(a5o.z0, 1)
	}

	function a8D(aB) {
		return aU.a8R() ? h.i - a5l[aB].canvas.width - bc.gap : aU.f8
	}

	function a8E(aB) {
		return Math.floor(2 * bc.gap + (aU.a8R() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * xk))
	}
	this.dd = function() {
		a7u = a7v = 0, a5l = [], this.resize()
	}, this.resize = function() {
		a7s = aN.a6U, xk = aN.fontSize + 5, xk = Math.floor(1.25 * xk), a0.a1.i9() && (xk = Math.floor(1.25 * xk)), a7t = Math.floor(.15 * xk), bS.xJ.font = a7s, a7r = Math.floor(bS.xJ.measureText("02 000 000 0000").width);
		for (var aB = a5l.length - 1; 0 <= aB; aB--) a7w(a5l[aB]), a7x(aB)
	}, this.mg = function() {
		for (var aB = a5l.length - 1; 0 <= aB; aB--) a5l[aB].a7y && (a5l[aB].a7y = !1, a7x(aB))
	}, this.hD = function(la, lb) {
		if (2 !== aD.a0m && 0 !== ag.mu[aD.el] && !aD.h9 && !bA.gM.ji(aD.el))
			for (var a88, a89, a8A, a8B = a0.a1.i9() ? xk : 0, a8C = a0.a1.i9() ? Math.floor(.15 * xk) : 0, aB = a5l.length - 1; 0 <= aB; aB--)
				if (a88 = a8D(aB), a89 = a8E(aB), a8A = a5l[aB].canvas.width, a89 - a8C <= lb && lb <= a89 + xk + a8C) {
					if (a88 - a8B <= la && la <= a88 + xk + a8B) return a5l[aB].a87 || (a5l[aB].a7y = !0, a5l[aB].a87 = !0, 0 === a5l[aB].id ? b8.hQ.pT(a5l[aB].jU) : b8.hQ.pS(a5l[aB].jU)), !0;
					if (0 === a5l[aB].id && a88 + a8A - xk - a8B <= la && la <= a88 + a8A + a8B) return bV.a6D(3), b8.hQ.hX(aR.hU(), a5l[aB].jU), !0
				} return !1
	}, this.eU = function() {
		var a3P, a3Q, g, a8H;
		0 === ag.mu[aD.el] || bA.gM.ji(aD.el) && !aD.h9 || (a3P = a5l.slice(0, a7u), a3Q = a5l.slice(a7u, a7u + a7v), g = a3P, a8H = ad.g7(aD.el), function(g, a8H) {
			if (a7u !== a8H) return 1;
			for (var aB = a8H - 1; 0 <= aB; aB--)
				if (g[aB].jU !== ad.gC(aD.el, aB)) return 1;
			return
		}(g, a8H) ? a8J(g = function(g, a8H) {
			var aB, jU, fL, hj, a6v = [];
			loop: for (aB = 0; aB < a8H; aB++) {
				for (jU = ad.gC(aD.el, aB), fL = 0; fL < g.length; fL++)
					if (g[fL].jU === jU) {
						a6v.push(g.splice(fL, 1)[0]);
						continue loop
					} hj = ad.gD(aD.el, aB), a7w(hj = {
					jU: jU,
					hj: hj,
					a86: hj,
					id: 0,
					a7y: !0,
					a87: !1,
					canvas: null,
					z0: null
				}), a6v.push(hj)
			}
			return a6v
		}(g, a8H), a8H) : a8J(g, a8H), a3P = g, a3Q = function(g) {
			var a8L = bN.y.kP[aD.el];
			return function(g, a8L) {
				if (a7v !== a8L) return 1;
				for (var tO = aD.el << 3, mE = bN.y.mE, a8P = bN.y.a8P, aB = a8L - 1; 0 <= aB; aB--) {
					var a8Q = a8P[tO + aB];
					if (g[aB].jU !== mE[a8Q]) return 1
				}
				return
			}(g, a8L) ? a8N(g = function(g, a8L) {
				var aB, jU, fL, a6v = [],
					tO = aD.el << 3,
					mE = bN.y.mE,
					a7L = bN.y.a7L,
					a8P = bN.y.a8P;
				loop: for (aB = 0; aB < a8L; aB++) {
					var a8Q = a8P[tO + aB];
					for (jU = mE[a8Q], fL = 0; fL < g.length; fL++)
						if (g[fL].jU === jU) {
							a6v.push(g.splice(fL, 1)[0]);
							continue loop
						} a8Q = a7L[a8Q], a7w(a8Q = {
						jU: jU,
						hj: a8Q,
						a86: a8Q,
						id: 1,
						a7y: !0,
						a87: !1,
						canvas: null,
						z0: null
					}), a6v.push(a8Q)
				}
				return a6v
			}(g, a8L), a8L) : a8N(g, a8L), g
		}(a3Q), a7u = a3P.length, a7v = a3Q.length, a5l = a3P.concat(a3Q))
	}, this.vQ = function() {
		if (0 !== ag.mu[aD.el] && (!bA.gM.ji(aD.el) || aD.h9))
			for (var aB = a5l.length - 1; 0 <= aB; aB--) vR.drawImage(a5l[aB].canvas, a8D(aB), a8E(aB))
	}
}

function cH() {
	var a6h, kQ, a8S, a8T, j, a6U, fontSize, a8U, a8V, a8W, a8X, canvas, z0, n7, a8Y;

	function vh(aB) {
		return L(0 === aB ? 100 : 1 === aB ? 101 : 2 === aB ? 102 : 103)
	}

	function a8f() {
		aD.hu ? a8g + 4 * bc.gap + j + bh.a8h() > aR.fA ? vR.drawImage(canvas, 2 * bc.gap + bh.a8h(), a8g + 2 * bc.gap) : vR.drawImage(canvas, bc.gap, a8g + 3 * bc.gap + bh.a8h()) : vR.drawImage(canvas, bc.gap, a8g + 2 * bc.gap)
	}

	function a8Z() {
		canvas.width = a6h[0].width + a8W, canvas.height = j + a8W, (z0 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6h[0].width + a8W, j + a8W), z0.translate(Math.floor(a8W / 2), Math.floor(a8W / 2)), z0.lineWidth = a8W, z0.fillStyle = 1 === a6h[0].a8e ? bB.nz : bB.nr, a8i(), z0.fill(), z0.strokeStyle = 1 === a6h[0].a8e ? bB.nl :
			bB.nu, a8i(), z0.stroke(), bA.qn.textAlign(z0, 1), bA.qn.textBaseline(z0, 1), z0.fillStyle = 1 === a6h[0].a8e ? bB.nl : bB.nu, z0.font = a6U[0], z0.fillText(vh(a6h[0].a8d), Math.floor(a6h[0].width / 2), Math.floor(.72 * a8U[0] * j)), z0
			.font = a6U[1], z0.fillText(a6h[0].qU, Math.floor(a6h[0].width / 2), Math.floor((a8U[0] + .48 * a8U[1]) * j))
	}

	function a8i() {
		z0.beginPath(), z0.moveTo(a8X, 0), z0.lineTo(a6h[0].width - a8X, 0), z0.lineTo(a6h[0].width, a8X), z0.lineTo(a6h[0].width, j - a8X), z0.lineTo(a6h[0].width - a8X, j), z0.lineTo(a8X, j), z0.lineTo(0, j - a8X), z0.lineTo(0, a8X), z0.closePath()
	}
	this.dd = function() {
		kQ = 4, a8S = a8T = n7 = 0, a6h = [], a6U = new Array(2), fontSize = new Array(2), (a8U = new Array(2))[0] = .3, a8U[1] = .7, a8V = new Array(4), canvas = document.createElement("canvas"), a8Y = bf.eQ + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.i9() ? .062 : .047) * h.iA), fontSize[0] = Math.floor(.85 * a8U[0] * j), fontSize[1] = Math.floor(.85 * a8U[1] * j), a6U[0] = bA.qn.se(1, fontSize[0]), a6U[1] = bA.qn.se(1, fontSize[1]), aB = a8V.length -
			1; 0 <= aB; aB--) a8V[aB] = this.measureText(vh(aB) + "000", a6U[0]);
		if (a8W = Math.floor(1 + .05 * j), a8X = Math.floor(.2 * j), 0 < a6h.length) {
			for (aB = a6h.length - 1; 0 <= aB; aB--) i = this.measureText(a6h[aB].qU + "00", a6U[1]), a6h[aB].width = i < a8V[aB] ? a8V[aB] : i;
			a8Z()
		}
	}, this.eU = function() {
		0 !== kQ && (4 === kQ ? bf.eQ > a8Y && (kQ = 0, 1 === aD.a0m) && aQ.a19(bS.xD.xE[bS.eh].name, 3, 1, 9) : (1 === kQ ? (0 === a8S && (a8Z(), a8S = 1e-4), 1 <= (a8S += .002 * (bf.eQ - n7)) && (a8T = 0, kQ = 2, a8S = 1), bf.dl = !0) : 2 ===
			kQ ? ((a8T += (bf.eQ - n7) / 1e3) > a6h[0].eG || 1 < a8T && 1 < a6h.length) && (kQ = 3) : 3 === kQ && ((a8S -= .002 * (bf.eQ - n7)) <= 0 && (a8S = 0, a6h.shift(), kQ = 0 < a6h.length ? 1 : 0), bf.dl = !0), n7 = bf.eQ))
	}, this.measureText = function(qU, a6U) {
		return vR.font = a6U, Math.floor(vR.measureText(qU).width)
	}, this.eY = function(a8c, aB) {
		this.a19(ag.a1O[a8c], aB, 1, 0 === aB ? 3 : 7)
	}, this.a19 = function(qU, a8d, a8e, eG) {
		var i;
		qU.length && (i = (i = this.measureText(qU + "00", a6U[1])) < a8V[a8d] ? a8V[a8d] : i, a6h.push({
			qU: qU,
			width: i,
			a8d: a8d,
			a8e: a8e,
			eG: eG
		}), 0 === kQ) && (a8S = 0, kQ = 1, n7 = bf.eQ)
	}, this.vQ = function() {
		0 !== kQ && 0 !== a8S && (a8S < 1 ? (vR.globalAlpha = a8S, a8f(), vR.globalAlpha = 1) : a8f())
	}
}

function cq() {
	var j, canvas, z0, a8j, a8k, a8l, a8m, a7y, a8n, a8o, a8p, a8q, a7R = !1,
		a3d = (this.hm = !1, this.i = 0, new Array(2)),
		a8r = 0;

	function mh() {
		var i = aw.i,
			lG = (a7y = !1, yz(z0, i, j), Math.floor(i / 2));
		1 === a8j ? (z0.fillStyle = bB.oE, z0.fillRect(lG, 0, lG, j)) : -1 === a8j && (z0.fillStyle = bB.oU, z0.fillRect(0, 0, lG, j)), z1(z0, i, j, 2);
		var lG = (lG = Math.floor(.25 * j)) < 2 ? 2 : lG,
			a7a = (z0.fillStyle = bB.o0, Math.floor((j - 4) * a8k[1] / a8l[1]));
		0 < a7a && z0.fillRect(2, j - 2 - a7a, lG, a7a), 0 < (a7a = Math.floor((j - 4) * a8k[0] / a8l[0])) && z0.fillRect(i - 2 - lG, j - 2 - a7a, lG, a7a);
		lG = (lG = Math.floor(j / 8)) < 2 ? 2 : lG, z3(z0, Math.floor(.4 * j), 0, j, lG, .5, !1), z3(z0, Math.floor(i - 1.4 * j), 0, j, lG, .5, !0), a7a = 1.1 * j / a3d[0].width;
		z0.imageSmoothingEnabled = !0, z0.setTransform(a7a, 0, 0, a7a, (i - a7a * a3d[0].width) / 2, -.05 * j), z0.drawImage(a3d[+a7R], 0, 0), z0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8w() {
		a8q = -1, a7R = ah.a8x(), aN.a57(257), aN.a7Q(a7R), aw.hm = !0, a7y = !0, a8n = 360;
		for (var fS, dt = 0, aB = al.kr - 1; 0 <= aB; aB--) bA.gM.ji(al.kw[aB]) || (dt += ag.go[al.kw[aB]]);
		a7R ? a8l[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hu ? (fS = 9 === aD.kd && 8 === bg.ki[bh.ku()] ? 80 : (fS = bL.du(100 * bh.ks(), aD.k5), bL.i8(200 - 2 * fS, 40, 100)), fS = bL.du(fS * dt, 100), a8l[0] = Math.max(fS, 1)) : 8 === aD.kd ? a8l[
			0] = Math.max(bL.du(3 * dt, 4), 1) : a8l[0] = Math.max(bL.du(3 * dt, 5), 1), a8l[1] = Math.max(dt - a8l[0], 1)
	}

	function a8s() {
		a8p = bf.kI(), a7y = !0, a8n = a8j = 0, a8m = [], aw.hm = !1, aN.a0u(247), a8k[0] = a8k[1] = 0, aN.a57(673)
	}

	function yw() {
		return aR.a76(aN.a72()) ? __fx.settings.keybindButtons ? aR.fA - 2 * (j + bc.gap) : aR.fA - j - bc.gap : bC.a76(aN.a75()) ? bC.yw() - j - bc.gap : h.j - j - bk.a5t() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a3d[aB] = bA.canvas.zW(ab.get(3), 8 - aB, bB.p7), a3d[aB] = bA.canvas.a3f(a3d[aB])
	}, this.dd = function() {
		a8p = -1e4, a8o = a8r = 0, a8q = -1, this.hm = !1, a7y = a7R = !1, a8k = [a8j = a8n = 0, 0], a8l = [1, 1], a8m = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, z0 = canvas.getContext("2d", {
			alpha: !0
		}), mh()
	}, this.mg = function() {
		a7y && mh()
	}, this.hD = function(f8, fA) {
		return !!this.hm && !(f8 < h.i - this.i - bc.gap || fA < yw() || (aD.h9 || this.hn(aD.el) && (aM.hA && aM.a2u(), b8.hQ.ho(f8 > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eU = function() {
		0 < a8o ? 0 === --a8o && a8s() : this.hm ? 180 == --a8n && 3 * a8k[0] < a8l[0] ? a8s() : a8k[0] >= a8l[0] ? a7R ? bR.a0O.a0h() : bR.a0O.a0l() : a8k[1] >= a8l[1] ? a8o = 4 : a8n <= 0 && a8s() : ! function() {
			var a8z = bf.kI();
			if (a8z % 40 == 14) {
				if (a8r) return !(a8z < a8r) && !(a8z < a8p + 535) && (a8r = a8z + 1071, bA.gM.a4C()) ? (a8w(), 1) : 0;
				(1 === al.kr || (aD.hu ? bh.ks() : ag.go[lw[0]]) >= bL.du(96 * aD.k5, 100)) && (a8r = a8z + 535)
			}
			return
		}() && 0 <= a8q && (aN.a1A(250, L(104, [ag.a1O[a8q]]), 673, a8q, bB.nu, bB.nr, -1, !0), a8w())
	}, this.a0n = function() {
		this.hm && a8k[0] < a8l[0] && a8s()
	}, this.qN = function(player, a90) {
		var a91 = L(a90 ? 105 : 106, [ag.a1O[player]]),
			a91 = (aN.a1A(450, a91, 257, player, a90 ? bB.oC : bB.oR, bB.nr, -1, !0), a8m.push(player), a7y = !0, aD.kf ? Math.max(a8l[0], a8l[1]) : ag.go[player]),
			a91 = Math.max(a91, 1);
		a90 ? a8k[0] += a91 : a8k[1] += a91, player === aD.el && (a8j = a90 ? 1 : -1)
	}, this.vQ = function() {
		var fA;
		this.hm && (fA = yw(), vR.drawImage(canvas, h.i - this.i - bc.gap, fA))
	}, this.hp = function(player) {
		if (0 !== a8n) return !1;
		if (!bA.gM.hB(1)) return !1;
		if (!bA.gM.hC(player)) return !1;
		if (10 <= k6[player] && !bA.gM.a4V(player, 9)) return !1;
		if (!aD.kf) {
			player = bf.kI();
			if (player < a8p + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.hn = function(gY) {
		if (!bA.gM.hB(1)) return !1;
		if (!bA.gM.hC(gY)) return !1;
		if (!this.hm) return !1;
		for (var aB = a8m.length - 1; 0 <= aB; aB--)
			if (a8m[aB] === gY) return !1;
		return !0
	}, this.hl = function(player) {
		a8q = player
	}
}

function cI() {
	var i, f8, a93, canvas, z0, hm, ia, a4y, a6U, a7y, a94 = 11 / 12;

	function a96() {
		var a85 = Math.floor(ia * (i - 2 * a93)),
			a99 = 1 + Math.floor(.0625 * aR.j),
			a9A = 1 + Math.floor(.3 * aR.j),
			a9B = Math.floor(.55 * aR.j);
		z0.clearRect(0, 0, i, aR.j), z0.fillStyle = bB.nq, z0.fillRect(0, 0, a93, aR.j), z0.fillRect(a93 + a85, 0, i - a93 - a85, aR.j), z0.fillStyle = ia < 1 / 3 ? "rgba(" + Math.floor(3 * ia * 130) + ",130,0,0.85)" : ia < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ia - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ia - 2 / 3) * 130) + ",0.85)", z0.fillRect(a93, 0, a85, aR.j), z0.fillStyle = bB.nu, z0.fillRect(0, 0, i, 1), z0.fillRect(0, aR.j - 1, i, 1), z0
			.fillRect(0, 0, 1, aR.j), z0.fillRect(a93, 0, 1, aR.j), z0.fillRect(a93 + a85, 0, 1, aR.j), z0.fillRect(i - a93, 0, 1, aR.j), z0.fillRect(i - 1, 0, 1, aR.j), z0.fillRect(Math.floor(.25 * aR.j) + a9A, Math.floor((aR.j - a99) / 2), aR.j -
				2 * a9A, a99), z0.fillRect(Math.floor(i - 1.25 * aR.j) + a9A, Math.floor((aR.j - a99) / 2), aR.j - 2 * a9A - a9A % 2, a99), z0.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a99) / 2), a9A, a99, aR.j - 2 * a9A - a9A % 2),
			a4y = bA.gM.iZ(aD.el, aR.hU()), z0.fillText(bA.rm.a03(a4y) + " (" + bA.rm.a4r(100 * ia, +(ia < .1)) + ")", Math.floor(.5 * i), a9B)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ia = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2q(arg1);

	function a9G(a3C) {
		return !(1 < a3C && 1 === ia || (1 < a3C && a3C * ia - ia < 1 / 1024 ? a3C = (ia + 1 / 1024) / ia : a3C < 1 && ia - a3C * ia < 1 / 1024 && (a3C = (ia - 1 / 1024) / ia), ia = bL.i8(ia * a3C, 1 / 1024, 1), a96(), 0))
	}

	function a9H(la) {
		return ia !== (ia = bL.i8((la - f8 - a93) / (i - 2 * a93), 1 / 1024, 1)) && (a96(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a96(), bf.dl = !0
	}, this.fA = 0, this.hE = !1, this.dd = function() {
		hm = !aD.hO && !aD.h9, a7y = !1, ia = .5, a4y = 0, this.hE = !1, this.resize()
	}, this.resize = function() {
		a0.a1.i9() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iA), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.i9() ? .65 : .389) * h.iA), i += 12 - i % 12, this.j = Math.floor(i / 12)), a93 = Math.floor(3 * this.j / 2), a6U =
			bA.qn.se(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vR), canvas.height = this.j, (z0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6U, bA.qn.textBaseline(z0, 1), bA.qn.textAlign(z0, 1), this.a95(), a96()
	}, this.a95 = function() {
		f8 = a0.a1.i9() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.fA = h.j - this.j - bk.a5t() * bc.gap
	}, this.mg = function() {
		a7y && (a7y = !1, a96())
	}, this.hm = function() {
		return !(!hm || aM.hA && f8 < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a76 = function(a9C) {
		return !!this.hm() && f8 + i > h.i - a9C - bc.gap
	}, this.a55 = function() {
		hm = !aD.h9
	}, this.a8s = function() {
		hm = !1
	}, this.hU = function() {
		return bL.i8(Math.floor(1024 * ia + .5) - 1, 0, 1023)
	}, this.a2n = function(la, lb) {
		return this.hm() && f8 < la && la < f8 + i && lb > this.fA
	}, this.hD = function(la, lb) {
		if (!this.hm()) return !1;
		if (!(__fx.settings.keybindButtons && lb > this.fA - Math.floor(bc.gap / 4) - this.j && lb < this.fA - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(la - f8))) {
			if (!aR.a2n(la, lb)) return !1;
			aS.nP = !1, ! function(sP, la, lb) {
				if (function(la, lb) {
						return f8 < la && la < f8 + a93 && lb > aR.fA
					}(la, lb)) return a9G(a94);
				if (function(la, lb) {
						return f8 + i - a93 < la && la < f8 + i && lb > aR.fA
					}(la, lb)) return a9G(1 / a94);
				return sP.hE = !0, a9H(la)
			}(this, la, lb) || (bf.dl = !0)
		}
		return !0
	}, this.a2q = function(nW) {
		0 !== aD.a0m && this.hm() && a9G(nW) && (bf.dl = !0)
	}, this.a2M = function(deltaY) {
		var nW;
		return !(0 === deltaY || !this.hm()) && a9G(nW = 0 < deltaY ? (nW = 400 / (400 + deltaY)) < a94 ? a94 : nW : 1 / a94 < (nW = (400 - deltaY) / 400) ? 1 / a94 : nW)
	}, this.a2J = function(la) {
		return !!this.hE && a9H(la)
	}, this.a2j = function() {
		this.hE = !1
	}, this.eU = function() {
		this.hm() && a4y !== bA.gM.iZ(aD.el, this.hU()) && (a7y = !0)
	}, this.vQ = function() {
		this.hm() && (vR.drawImage(canvas, f8, this.fA), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vR, f8, this.fA)
	}
}

function d0() {
	var canvas, z0, a9I, font, a9J = 0,
		a9K = !1,
		a9L = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9M = 5;

	function a9T() {
		if (a9K) {
			var aB, f1 = a9L.length,
				a9B = Math.floor(.5 * a9I.j),
				j = f1 * a9B,
				f8 = Math.floor(Math.floor(a9I.f8) + .3 * a9I.i - .5),
				fA = Math.floor(Math.floor(a9I.fA) - j),
				i = Math.floor(.4 * a9I.i + 2.5);
			for (vR.fillStyle = bB.nq, vR.fillRect(f8, fA, i, j), vR.fillStyle = bB.oJ, vR.fillRect(f8, fA + a9M * a9B, i, a9B), vR.fillStyle = bB.nu, vR.fillRect(f8, fA, 2, j), vR.fillRect(f8, fA, i, 2), vR.fillRect(f8 + i - 2, fA, 2, j), aB =
				1; aB < f1; aB++) vR.fillRect(f8, fA + aB * a9B, i, 2);
			for (vR.fillStyle = bB.nu, bA.qn.textAlign(vR, 1), bA.qn.textBaseline(vR, 1), vR.font = bA.qn.se(0, .6 * a9B), f8 += .5 * i, aB = 0; aB < f1; aB++) vR.fillText(a9b(aB), f8, fA + (aB + .6) * a9B)
		}
		vR.drawImage(canvas, Math.floor(a9I.f8), Math.floor(a9I.fA))
	}

	function mh(sP) {
		var f8, nK, nL, a9B;
		z0.clearRect(0, 0, Math.floor(a9I.i), Math.floor(a9I.j)), z0.fillStyle = bB.nq, z0.fillRect(0, 0, Math.floor(a9I.i), Math.floor(a9I.j)), aD.nN && (z0.fillStyle = bB.oJ, z0.fillRect(0, 0, Math.floor(.3 * a9I.i), Math.floor(a9I.j))), z0
			.fillStyle = bB.nu, z0.fillText("Hide UI", .15 * a9I.i, .5 * a9I.j), z0.fillRect(Math.floor(.3 * a9I.i - .5), 0, 2, Math.floor(a9I.j)), f8 = .5 * a9I.i, z0.fillText("Replay Speed", f8, .31 * a9I.j), z0.fillText(a9b(a9M), f8, .69 * a9I.j),
			z0.fillRect(Math.floor(.7 * a9I.i - .5), 0, 2, Math.floor(a9I.j)), sP.a5c ? (f8 = Math.floor(.02 * a9I.i), sP = Math.floor(.025 * a9I.i), nK = Math.floor(.85 * a9I.i - f8 - .5 * sP), nL = Math.floor(.25 * a9I.j), a9B = Math.floor(a9I.j) -
				2 * nL, z0.fillRect(nK, nL, f8, a9B), z0.fillRect(nK + f8 + sP, nL, f8, a9B)) : function() {
				var i = Math.floor(.46 * a9I.j),
					j = Math.floor(.23 * a9I.j),
					f8 = Math.floor(.85 * a9I.i - .5 * i + i / 12),
					fA = Math.floor(.5 * a9I.j - j);
				z0.beginPath(), z0.moveTo(f8, fA), z0.lineTo(f8 + i, fA + j), z0.lineTo(f8, fA + (j << 1)), z0.fill()
			}(), z0.fillRect(0, 0, Math.floor(a9I.i), 2), z0.fillRect(0, 0, 2, Math.floor(a9I.j)), z0.fillRect(0, Math.floor(a9I.j) - 2, Math.floor(a9I.i), 2), z0.fillRect(Math.floor(a9I.i - 2), 0, 2, Math.floor(a9I.j))
	}

	function a9b(aB) {
		return 5 === aB ? "Normal" : "" + a9L[aB]
	}
	this.a5c = !1, this.dd = function() {
		aD.h9 && (a9M = 5, this.a5c = !1, a9K = !1, a9I = new rO([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9N = function() {
		return a9L[a9M]
	}, this.yw = function() {
		return a9I.fA
	}, this.a76 = function(a9C) {
		return !!aD.h9 && a9I.f8 + a9I.i > h.i - a9C - bc.gap
	}, this.resize = function() {
		aD.h9 && (a9I.resize(), a9I.fA -= (bk.a5t() - 1) * bc.gap, font = bA.qn.se(0, .3 * a9I.j), (canvas = document.createElement("canvas")).width = Math.floor(a9I.i), canvas.height = Math.floor(a9I.j), (z0 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qn.textAlign(z0, 1), bA.qn.textBaseline(z0, 1), mh(this))
	}, this.a2t = function(a9O) {
		0 === aD.a0m || t.hm() || a9O !== aD.nN && (aD.nN = a9O, bh.resize(), bf.dl = !0, aD.h9) && (a9J = bf.eQ + 2e3, mh(this))
	}, this.hD = function(f8, fA) {
		if (!aD.h9) return !1;
		if (f8 < a9I.f8 || fA < a9I.fA || f8 > a9I.f8 + a9I.i) return a9K && function(sP, f8, fA) {
			var f1 = a9L.length,
				a9B = Math.floor(.5 * a9I.j),
				j = f1 * a9B,
				nK = Math.floor(Math.floor(a9I.f8) + .3 * a9I.i - .5),
				j = Math.floor(Math.floor(a9I.fA) - j),
				i = Math.floor(.4 * a9I.i + 2.5);
			return a9K = !1, bf.dl = !0, f8 < nK || nK + i < f8 || fA < j || (a9M = a9S(0, Math.floor((fA - j) / a9B), f1 - 1), mh(sP)), !0
		}(this, f8, fA);
		if ((f8 -= a9I.f8) < .3 * a9I.i) a9K = !1, this.a2t(!aD.nN);
		else {
			if (f8 < .7 * a9I.i) return a9K = !a9K, bf.dl = !0;
			this.a2v(!1)
		}
		return !0
	}, this.a2v = function(a9Q) {
		2 === aD.a0m ? (this.a2t(!1), t.u(3)) : (a9K = !1, this.a5c = !this.a5c, this.a5c ? (aM.hA && aM.a2u(), a0.a1.setState(1)) : a9Q || aM.a6a(), bf.dl = !0, mh(this))
	}, this.a9R = function() {
		this.a5c = !1, aM.a6a(), bf.dl = !0, mh(this)
	}, this.a2c = function(f8, fA) {
		return !!aD.nN && (0 <= aM.hD(f8, fA) || (aD.h9 ? ((bf.eQ > a9J || !this.hD(f8, fA)) && aS.hD(f8, fA), bf.dl = !0, a9J = bf.eQ + 2e3) : aS.hD(f8, fA)), !0)
	}, this.eU = function() {
		aD.h9 && aD.nN && bf.eQ > a9J - 1e3 && bf.eQ < a9J && (bf.dl = !0)
	}, this.a0v = function() {
		aD.h9 && (this.a5c = !1, bf.dl = !0, mh(this))
	}, this.vQ = function() {
		if (aD.h9) {
			if (aD.nN) {
				if (bf.eQ > a9J) return;
				if (bf.eQ > a9J - 1e3) return vR.globalAlpha = a9S(0, (1e3 - (bf.eQ - (a9J - 1e3))) / 1e3, 1), a9T(), void(vR.globalAlpha = 1)
			}
			a9T()
		}
	}
}

function cJ() {
	var a9c, a9d, i, f8, fA, a9e, a9f;
	this.dd = function() {
		a9c = new Array(2), a9d = new Array(2), this.nP = !1, a9f = a9e = ic = ib = 0, iB = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.i9() ? .072 : .0502) * h.iA)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a9c[aB] = document.createElement("canvas"), a9c[aB].width = i, a9c[aB].height = i, a9d[aB] = a9c[aB].getContext("2d", {
			alpha: !0
		});
		this.a95(),
			function() {
				for (var a9w = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a9d[aB].clearRect(0, 0, i, i), a9d[aB].fillStyle = bB.nn, a9d[aB].beginPath(), a9d[aB].arc(i / 2, i / 2, i / 2 - a9w, 0, 2 * Math.PI), a9d[aB].fill(), a9d[aB]
					.lineWidth = a9w, a9d[aB].fillStyle = bB.nu, a9d[aB].strokeStyle = bB.nu, a9d[aB].beginPath(), a9d[aB].arc(i / 2, i / 2, i / 2 - a9w, 0, 2 * Math.PI), a9d[aB].stroke(), z3(a9d[aB], 0, 0, i, a9w, .3, 0 === aB)
			}()
	}, this.yv = function() {
		return -ib / iB
	}, this.yw = function() {
		return -ic / iB
	}, this.nZ = function(a9j, iH) {
		ib = iB * a9j - iH
	}, this.na = function(a9k, iI) {
		ic = iB * a9k - iI
	}, this.hD = function(a9i, a77) {
		return aD.nN || ! function(a9i, a77) {
			return Math.pow(a9i - (f8 + i / 2), 2) + Math.pow(a77 - (fA + i / 2), 2) < i * i / 4 || Math.pow(a9i - (f8 + i / 2), 2) + Math.pow(a77 - (fA + 2 * i), 2) < i * i / 4
		}(a9i, a77) || bj.eN.data[8].value ? (aH.nc() && (this.nP = !0, a9e = a9i, a9f = a77), !1) : a77 < fA + 1.25 * i ? this.a2M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2J = function(a9i, a77) {
		var a9l, a9m, iK, iN;
		return !aH.nc() || (a9l = ib, a9m = ic, ib += iK = a9e - a9i, ic += iN = a9f - a77, af.a2J(iK, iN), this.a9n(), a9e = a9i, a9f = a77, a9l !== ib) || a9m !== ic
	}, this.a2M = function(la, lb, deltaY) {
		var nW;
		if (aH.nc()) {
			if (0 < deltaY) nW = (nW = 500 / (500 + deltaY)) < .5 ? .5 : nW;
			else {
				if (!(deltaY < 0)) return !1;
				nW = 2 < (nW = (500 - deltaY) / 500) ? 2 : nW
			}
			this.a9o(la, lb, nW), bf.dl = !0
		}
		return !0
	}, this.a9o = function(f8, fA, ef) {
		var a3C;
		ef = a3C = (a3C = 1024 < (a3C = ef) * iB ? 1024 / iB : a3C) * iB < .125 ? .125 / iB : a3C, af.zoom(ef, f8, fA),
			function(a3C, la, lb) {
				iB *= a3C, ib = (ib + la) * a3C - la, ic = (ic + lb) * a3C - lb, aS.a9n()
			}(ef, f8, fA)
	}, this.a9n = function() {
		var a9r = h.i / 16,
			a9s = 0,
			a9t = h.j / 16,
			a9u = 0;
		ib < -h.i + a9r && (a9s = -h.i + a9r - ib), ib > iB * bS.fC - a9r && (a9s = iB * bS.fC - a9r - ib), ic < -h.j + a9t && (a9u = -h.j + a9t - ic), ic > iB * bS.fD - a9t && (a9u = iB * bS.fD - a9t - ic), ib += a9s, ic += a9u, ba.nb(), af.a9v(
			a9s, a9u)
	}, this.a95 = function() {
		f8 = h.i - i - bc.gap, fA = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vQ = function() {
		bj.eN.data[8].value || (vR.drawImage(a9c[0], f8, fA), vR.drawImage(a9c[1], f8, Math.floor(fA + 3 * i / 2)))
	}
}

function cK() {
	var g, a9x, a9y, a9z, gap, aA0, aA1, aA2, aA3, aA4, a6U, aA5, h5, aA6, a85, aA7, aA8;

	function aAC() {
		a9z = Math.floor(.2 * (a0.a1.i9() ? .07 : .035) * h.iA), a9z = a74(a0.a1.i9() ? 3 : 1, a9z);
		var aAF = h.i / (g.length + gap);
		a9z = a9z < aAF ? aAF : a9z, a85 = Math.floor((1 - gap) * a9z), a9x = 0, aAG()
	}

	function aAG() {
		a9x = (a9x = a9x < -20 ? -20 : a9x) > (g.length - 15) * a9z ? (g.length - 15) * a9z : a9x, aA1 = Math.floor(a9x / a9z), aA2 = (aA2 = aA1 + Math.floor(h.i / a9z)) > g.length - 1 ? g.length - 1 : aA2, aA1 = (aA1 = aA2 < aA1 ? aA2 : aA1) < 0 ?
			0 : aA1;
		var lG = aA2;
		aA0 = a9y / g[lG];
		for (var aB = aA2 - 1; aA1 <= aB; aB--) g[aB] > g[lG] && (lG = aB, aA0 = a9y / Math.pow(g[aB], aA6))
	}

	function aAJ(f8) {
		f8 = Math.floor((a9x + h.i - f8 - gap * a9z) / a9z);
		return (f8 = f8 < -1 ? -1 : -1 === f8 ? 0 : f8 > g.length - 1 ? -1 : f8) !== aA3 && (aA3 = f8, -1 === aA7 && 0 === aA3 && aT.aA9 && (aA7 = setInterval(aAK, 100)), 1)
	}

	function aAL(aB) {
		var aAN = Math.floor(aA0 * Math.pow(g[aB], aA6));
		vR.fillRect(a9x + h.i - (aB + 1) * a9z, h.j - aAN, a85, aAN)
	}

	function aAK() {
		var gY;
		0 !== (aA3 = 8 === aa.a20() ? -1 : aA3) ? (aA8 = (new Date).getTime(), clearInterval(aA7), aA7 = -1) : (gY = g[1] / 864e3, -1 !== aA8 && (gY += ((new Date).getTime() - aA8) * g[1] / 864e5, aA8 = -1), 0 < gY && (g[0] += Math.floor(gY), bf
			.dl = !0))
	}
	this.aA9 = !1, this.dd = function() {
		aA8 = aA7 = -1, aA3 = -(aA6 = 1), this.aAA = !1, h5 = 0, aA5 = new Date, a9x = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a9y = Math.floor(.15 * h.j), aA4 = (aA4 = Math.floor((a0.a1.i9() ? .018 : .0137) * h.iA)) < 2 ? 2 : aA4, a6U = bA.qn.se(1, aA4), aAC()
	}, this.aAD = function(aAE) {
		var aB;
		for (this.aA9 = !0, aB = 0; aB < aAE.length; aB++) g.unshift(aAE[aB]);
		aAC(), bf.dl = !0
	}, this.aAH = function() {
		aAG()
	}, this.a2J = function(f8, fA) {
		fA > h.j - .6 * a9y ? this.aAA ? f8 !== h5 && (a9x += f8 - h5, h5 = f8, aAG(), aAJ(f8), this.aAA = -1 !== aA3, bf.dl = !0) : aAJ(f8) && (bf.dl = !0) : this.ro()
	}, this.ro = function() {
		-1 !== aA3 && (this.aAA = !1, aA3 = -1, bf.dl = !0)
	}, this.a2M = function(f8, deltaY) {
		-1 !== aA3 && (a9x += Math.floor(deltaY), aAG(), aAJ(f8), bf.dl = !0)
	}, this.hD = function(f8, fA) {
		this.a2J(f8, fA), -1 !== aA3 && (h5 = f8, this.aAA = !0)
	}, this.a2i = function() {
		-1 !== aA3 && (this.aAA = !1)
	}, this.vQ = function() {
		vR.fillStyle = bB.nx;
		for (var aAO, month, dt, tC, aAR, aAS, nL, aAT, aAU, aB = aA2; aA1 <= aB; aB--) aAL(aB);
		this.aA9 && 0 === aA1 && (vR.fillStyle = bB.oU, aAL(0)), -1 !== aA3 && (vR.fillStyle = bB.nw, aAL(aA3)), -1 !== aA3 && (vR.font = a6U, bA.qn.textBaseline(vR, 2), (dt = new Date).setTime(aA5.getTime() - 1e3 * aA3 * 60 * 60 * 24), month =
			"month", aAO = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), aAO = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), aAO = aAO + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[aA3] ? L(107) : L(108), month = bA.rm.a03(g[aA3]) + " " + month, dt = Math.floor(vR.measureText(aAO).width), tC = Math
			.floor(vR.measureText(month).width), aAR = Math.floor(.5 * (dt + aA4)), aAS = (aAS = a9x + h.i - (aA3 + 1) * a9z) < aAR ? aAR : aAS > h.i - aAR ? h.i - aAR : aAS, nL = h.j - Math.floor(aA0 * Math.pow(g[aA3], aA6)), aAT = Math
			.floor(1.1 * aA4), aAU = nL > h.j - aAT ? h.j - aAT : nL, vR.fillStyle = bB.nr, vR.fillRect(h.i - tC - aA4, aAU - aAT, tC + aA4, aAT), vR.fillRect(aAS - aAR, h.j - aAT, dt + aA4, aAT), vR.fillStyle = bB.nu, bA.qn.textAlign(vR, 2),
			vR.fillText(month, Math.floor(h.i - .5 * aA4), aAU), bA.qn.textAlign(vR, 1), vR.fillText(aAO, aAS, h.j), vR.strokeStyle = bB.ny, vR.lineWidth = 1, vR.beginPath(), vR.moveTo(0, nL), vR.lineTo(h.i, nL), vR.closePath(), vR.stroke())
	}
}

function cL() {
	var a6U, i, fA, aAV, aAW, aAX, canvas, z0, a7y, a4J, aAY, aAZ, aAa, aAb;
	this.f8 = 0, this.j = 0, this.dd = function() {
		aAX = aD.a5D, aAZ = "rgba(0,100,0,0.8)", aAa = "rgba(150,0,0,0.8)", a7y = aAY = !0, a4J = ag.h2[aD.el], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.i9() ? .305 : .24) * h.iA), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6U = bA.qn.se(1, Math.floor(.8 * this.j)), aAW = bA.qn.se(1, Math.floor(.45 * this.j)), aAb = Math.floor(.5 * this.j), bS.xJ
			.font = a6U, fA = bc.gap, aAV = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, z0 = canvas.getContext("2d", {
				alpha: !0
			}), bA.qn.textBaseline(z0, 1), bA.qn.textAlign(z0, 1), this.aAc()
	}, this.a8R = function() {
		return a0.a1.i9() && h.i < 1.2 * h.j
	}, this.a95 = function() {
		this.a8R() ? this.f8 = h.i - i - bc.gap : this.f8 = Math.floor(aV.aAd() + (h.i - aV.aAd() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mg = function() {
		a7y && (a7y = !1, this.aAc())
	}, this.aAc = function() {
		z0.font = a6U, z0.clearRect(0, 0, i, this.j), z0.fillStyle = aAY ? aAZ : aAa, z0.fillRect(0, 0, i, this.j), z0.fillStyle = bB.nw;
		var eZ = this.aAe(),
			aAg = (this.aAf(), z0.fillStyle = ag.h2[aD.el] >= ae.k1(aD.el) ? bB.oR : bB.nu, bA.rm.a03(a4J)),
			aAg = (z0.fillText(aAg, Math.floor(i / 2), aAb), z0.measureText(aAg).width),
			eZ = (z0.font = aAW, z0.fillStyle = 9 === eZ ? bB.p1 : bB.nu, ae.aAi),
			aAj = "+" + eZ,
			tC = z0.measureText(aAj).width,
			aAk = Math.floor(this.j / 12),
			aAg = .5 * (i + aAg) + aAk;
		(aAg + tC + aAV <= i || 1e3 <= eZ && (aAj = "+" + Math.floor(eZ / 1e3) + "K", aAg + (tC = z0.measureText(aAj).width) + aAV <= i)) && z0.fillText(aAj, Math.floor(aAg + .5 * tC), Math.floor(.3 * this.j)), z0.fillStyle = bB.nu, z0.fillRect(
			0, 0, i, 1), z0.fillRect(0, 0, 1, this.j), z0.fillRect(0, this.j - 1, i, 1), z0.fillRect(i - 1, 0, 1, this.j)
	}, this.aAe = function() {
		var eZ = bf.kI() % 100,
			xy = (eZ = 9 - bL.du(eZ -= eZ % 10, 10), Math.floor(eZ * (this.j - aAV) / 9));
		return z0.fillRect(0, xy, aAV, this.j - xy), z0.fillRect(i - aAV, xy, aAV, this.j - xy), eZ
	}, this.aAf = function() {
		z0.fillRect(aAV, this.j - aAV, Math.floor((i - 2 * aAV) * ag.h2[aD.el] / aAX), aAV)
	}, this.eU = function() {
		var gY = aD.el;
		bA.gM.hC(gY) && (gY = ag.h2[gY] - ag.a4I[gY], a4J !== gY ? (aAX = a74(gY, aAX), aAY = a4J < gY && 10 <= gY, a4J = gY, a7y = !0) : bf.kI() % 10 == 9 && (a7y = !0))
	}, this.vQ = function() {
		0 === ag.mu[aD.el] || aD.hO || 2 === ag.a49[aD.el] || vR.drawImage(canvas, this.f8, fA)
	}
}

function cM() {
	var aAl, aAm, aAn, aAo, aAp, aAq, aAr, aAs, aAt, aAu, aAv, aAw, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB5, aB6, position, aB7, aB8, aB9, aBA, aBB, aBC = 1,
		aBD = 1,
		aBE = "";
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

	function aBG() {
		aAr.clearRect(0, 0, aAl, a8g),
			aAr.fillStyle = aBB ? bB.op : bB.ol,
			aAr.fillRect(0, 0, aAl, aAw),
			aAr.fillStyle = bB.nq,
			aAr.fillRect(0, aAw, aAl, a8g - aAw);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			k6[aD.el]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aB6 = -1;
		if (__fx.leaderboardFilter.enabled && aB6 >= __fx.leaderboardFilter.filteredLeaderboard.length) aB6 = -1;
		playerPos >= position && aBI(playerPos - position, bB.oJ),
			0 !== k6[aD.el] && 0 === position && aBI(0, bB.os),
			-1 !== aB6 && aBI(aB6, bB.nv),
			aAr.fillStyle = bB.nq,
			//console.log("drawing", aB6),
			aAr.clearRect(0, a8g - __fx.leaderboardFilter.tabBarOffset, aAl, __fx.leaderboardFilter.tabBarOffset);
		aAr.fillRect(0, a8g - __fx.leaderboardFilter.tabBarOffset, aAl, __fx.leaderboardFilter.tabBarOffset);
		aAr.fillStyle = bB.nu,
			aAr.fillRect(0, aAw, aAl, 1),
			aAr.fillRect(0, a8g - __fx.leaderboardFilter.tabBarOffset, aAl, 1),
			__fx.leaderboardFilter.drawTabs(aAr, aAl, a8g - __fx.leaderboardFilter.tabBarOffset, bB.oJ),
			aAr.fillRect(0, 0, aAl, bc.zk),
			aAr.fillRect(0, 0, bc.zk, a8g),
			aAr.fillRect(aAl - bc.zk, 0, bc.zk, a8g),
			aAr.fillRect(0, a8g - bc.zk, aAl, bc.zk), aAr.font = aAm, bA.qn.textBaseline(aAr, 1), bA.qn.textAlign(aAr, 1), aAr.fillText(aBE, Math.floor((aAl + aAw - 22) / 2), Math.floor(aAu + aAn / 2));
		__fx.playerList.drawButton(aAr, 12, 12, aAw - 22);
		var fK, gZ = playerPos < position + aAp - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aAp)
				position = (result.length > aAp ? result.length : aAp) - aAp;
			//if (position >= result.length) position = result.length - 1;
			for (aAr.font = aAo, bA.qn.textAlign(aAr, 0), fK = aAp - gZ; 0 <= fK; fK--) {
				const pos = result[fK + position];
				if (pos !== undefined)
					aBJ(lw[pos]), aBK(fK, pos, lw[pos]);
			}
			for (bA.qn.textAlign(aAr, 2), fK = aAp - gZ; 0 <= fK; fK--) {
				const pos = result[fK + position];
				if (pos !== undefined)
					aBJ(lw[pos]), aBL(fK, lw[pos]);
			}
		} else {
			for (aAr.font = aAo, bA.qn.textAlign(aAr, 0), fK = aAp - gZ; 0 <= fK; fK--)
				aBJ(lw[fK + position]), aBK(fK, fK + position, lw[fK + position]);
			for (bA.qn.textAlign(aAr, 2), fK = aAp - gZ; 0 <= fK; fK--)
				aBJ(lw[fK + position]), aBL(fK, lw[fK + position]);
		}
		2 == gZ && (aBJ(aD.el), bA.qn.textAlign(aAr, 0), aBK(aAp - 1, k6[aD.el], aD.el), bA.qn.textAlign(aAr, 2), aBL(aAp - 1, aD.el)), 0 === position && (gZ = .7 * aAx / ab.get(4).height, aAr.setTransform(gZ, 0, 0, gZ, Math.floor(aAy + .58 * aAx +
			.5 * gZ * ab.get(4).width), Math.floor(aAu + aAn + .4 * aAx)), aAr.imageSmoothingEnabled = !0, aAr.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aAr.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBJ(player) {
		aD.hu && (aAr.fillStyle = bg.aBN[bg.aBO[player]])
	}

	function aBI(aB, aBP) {
		aAr.fillStyle = aBP, aB = aAp - 1 < aB ? aAp - 1 : aB;
		aBP = Math.floor((aB === aAp - 1 ? 2 : 0 === aB ? 1.15 : 1) * aAx), aBP = aB === aAp - 2 ? Math.floor(aAw + 9.15 * aAx) - Math.floor(aAw + 8.15 * aAx) : aBP;
		aAr.fillRect(0, Math.floor(aAw + (aB + (0 === aB ? 0 : .15)) * aAx), aAl, aBP)
	}

	function aBK(wT, a4X, aB) {
		aAr.fillText(aB2[a4X], aAy, Math.floor(aAu + aAn + (wT + .5) * aAx)), 1 === ag.a49[aB] && (aAr.font = "italic " + aAo);
		a4X = Math.floor(aAu + aAn + (wT + .5) * aAx);
		aAr.fillText(ag.a1O[aB], aAz, a4X), 0 !== ag.a49[aB] && (aAr.font = aAo), aB < aD.kL && 2 !== ag.a49[aB] || aAr.fillRect(aAz, a4X + .35 * aBC, aB1[aB], Math.max(1, .1 * aBC))
	}

	function aBL(wT, aB) {
		aAr.fillText(ag.go[aB], aB0, Math.floor(aAu + aAn + (wT + .5) * aAx))
	}
	this.dd = function() {
		var aB;
		for (aBA = aB9 = aB7 = 0, aBB = aB8 = !1, aB6 = -1, aAp = a0.a1.i9() ? 6 : 10, aBD = (position = 0) === (aBD = bj.eN.data[11].value) ? 10 : 1 === aBD ? 5 : 1, aB5 = !1, aB3 = new Uint16Array(aAp + 1), aB4 = new Uint32Array(aAp + 1), aAt =
			aD.ey, lw = new Uint16Array(aAt), k6 = new Uint16Array(aAt), aB = aAt - 1; 0 <= aB; aB--) lw[aB] = aB, k6[aB] = aB;
		this.resize(!0), aB1 = new Uint16Array(aD.ey);
		var aBF = Math.floor(aAl - aAz - aAy - aAs);
		for (aB2 = new Array(aD.ey), aAr.font = aAo, aB = aD.ey - 1; 0 <= aB; aB--) aB2[aB] = aB + 1 + ".", ag.a1O[aB] = bA.z0.a3r(ag.a1T[aB], aAo, aBF), aB1[aB] = Math.floor(aAr.measureText(ag.a1O[aB]).width);
		aBG()
	}, this.resize = function(dd) {
		if (a8g = a0.a1.i9() ? (aAl = Math.floor(.335 * h.iA), Math.floor(aAp * aAl / 8)) : (aAl = Math.floor(.27 * h.iA), Math.floor(aAp * aAl / 10)), aAl = Math.floor(.97 * aAl), (aAq = document.createElement("canvas")).width = aAl, aAq
			.height = a8g, aAr = aAq.getContext("2d", {
				alpha: !0
			}), aAu = .025 * aAl, aAn = .16 * aAl, aAv = 0 * aAl, aAw = Math.floor(.45 * aAu + aAn), aAx = (a8g - aAn - 2 * aAu - aAv) / aAp,
			aAq.height = a8g += aAx, __fx.leaderboardFilter.tabBarOffset = Math.floor(aAx * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8g - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aAl,
			aAm = bA.qn.se(1, Math.floor(.55 * aAn)), aBC = Math.floor((a0.a1.i9() ? .67 : .72) * aAx), aAo = bA.qn.se(0, aBC), aAr.font = aAo, aAy = Math.floor(.04 * aAl), aAz = Math.floor((a0.a1.i9() ? .195 : .18) * aAl), aAs = Math.floor(aAr
				.measureText("00920600").width), aAr.font = aAm, aB0 = aAl - aAy, !dd) {
			aAr.font = aAo;
			for (var aB = aD.ey - 1; 0 <= aB; aB--) aB1[aB] = Math.floor(aAr.measureText(ag.a1O[aB]).width);
			aBG()
		}
		aBE = bA.z0.a3r(L(109), aAm, .96 * aAl)
	}, this.aAd = function() {
		return aAl
	}, this.mg = function(bu, aBH) {
		(aBH || aB5 && (bu || bf.kI() % aBD == 0)) && (aB5 = !1, aBG())
	}, this.eU = function() {
		! function() {
			for (var fK = aAt - 1; 0 <= fK; fK--) 0 === ag.mu[lw[fK]] && ! function(fK) {
				var aBX = lw[fK];
				aAt--;
				for (var aB = fK; aB < aAt; aB++) lw[aB] = lw[aB + 1], k6[lw[aB]] = aB;
				lw[aAt] = aBX, k6[lw[aAt]] = aAt
			}(fK)
		}();
		for (var aBV, nc = aAt - 1, fK = 0; fK < nc; fK++) ag.go[lw[fK]] < ag.go[lw[fK + 1]] && (aBV = lw[fK], lw[fK] = lw[fK + 1], lw[fK + 1] = aBV, k6[lw[fK]] = fK, k6[lw[fK + 1]] = fK + 1);
		! function() {
			for (var dt = aB5, gZ = (aB5 = !0, k6[aD.el] >= aAp - 1 ? aAp - 2 : aAp - 1), aB = gZ; 0 <= aB; aB--)
				if (aB3[aB] !== lw[aB] || aB4[aB] !== ag.go[lw[aB]]) return;
			(gZ != aAp - 2 || aB3[aAp] === k6[aD.el] && aB4[aAp] === ag.go[aD.el]) && (aB5 = dt)
		}();
		for (var aB = aAp - 1; 0 <= aB; aB--) aB3[aB] = lw[aB], aB4[aB] = ag.go[lw[aB]];
		aB3[aAp] = k6[aD.el], aB4[aAp] = ag.go[aD.el];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hD = function(f8, fA) {
		if (zj(f8, fA)) {
			if (__fx.utils.isPointInRectangle(f8, fA, bc.gap + 12, bc.gap + 12, aAw - 22, aAw - 22)) __fx.playerList.display(ag.a1T);
			else {
				if (fA - bc.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(f8 - bc.gap);
				f8 = aBZ(fA);
				0 <= f8 ? (aB7 = bf.eQ, aB8 = !0, aB9 = aBA = f8, bJ.a2w() && (f8 = a9S(-1, aBA, aAp), aB6 !== (f8 = f8 === aAp ? -1 : f8)) && (aB6 = f8, aBG(), bf.dl = !0)) : (aBB && (aBB = !1, aBG(), bf.dl = !0), t.u(10, 0, new aBa({
					aBb: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBG(), bf.dl = !0
	};

	function aBZ(fA) {
		return (fA -= bc.gap + aAw) < 0 ? Math.floor(fA / aAx) - 1 : fA < (aAp - 1) * aAx ? Math.floor(fA / aAx) : fA < a8g - aAw ? aAp - 1 : (fA -= a8g - aAw, aAp + Math.floor(fA / aAx))
	}

	function zj(f8, fA) {
		return f8 >= bc.gap && f8 < bc.gap + aAl && fA >= bc.gap && fA < bc.gap + a8g
	}
	this.a2J = function(f8, fA) {
		var dt, aBY;
		if (__fx.utils.isPointInRectangle(f8, fA, bc.gap + 12, bc.gap + 12, aAw - 22, aAw - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(f8, fA, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), f8 - bc.gap)) return aBY = aBZ(fA), f8 = zj(f8, fA), fA = !(!(aBY < 0 && f8) || bJ.a2w()), aB8 ? (dt = position, (position = a9S(0, position += aB9 - aBY, aD.ey - aAp)) !== dt ? (aBB = fA,
			aBY = a9S(-1, aB9 = aBY, aAp), aB6 = aBY = aBY !== aAp && f8 ? aBY : -1, aBG(), bf.dl = !0) : aBB !== fA && (aBB = fA, aBG(), bf.dl = !0), !0) : (aBY = (aBY = a9S(-1, aBY, aAp)) === aAp || !f8 || bJ.a2w() ? -1 : aBY, (aB6 !==
			aBY || aBB !== fA) && (aB6 = aBY, aBB = fA, aBG(), bf.dl = !0))
	}, this.a2i = function(f8, fA) {
		if (!aB8) return !1;
		aB8 = !1;
		var aBY = aBZ(fA);
		var isEmptySpace = false;
		return bJ.a2w() && -1 !== aB6 && (aB6 = -1, aBG(), bf.dl = !0), bf.eQ - aB7 < 350 && aBA === aBY && -1 !== (aBY = (aBY = a9S(-1, aBY, aAp)) !== aAp && zj(f8, fA) ? aBY : -1) && (f8 = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				lw[__fx.leaderboardFilter.filteredLeaderboard[aBY + position] ?? (isEmptySpace = true, k6[aD.el])]) : lw[aBY + position]), aBY === aAp - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : k6[aD.el]) >=
			position + aAp - 1 && (f8 = aD.el), !isEmptySpace && aD.hu && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(f8, ag.a1T, aD.kf), 0 !== ag.mu[f8] && !isEmptySpace) && aH.nF(f8, 800, !1, 0), !0
	}, this.a2M = function(f8, fA, deltaY) {
		var aBe;
		return !(aB8 || aD.nN || (aBe = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !zj(f8, fA)) || (f8 = (f8 = a9S(-1, aBZ(fA), aAp)) === aAp || bJ.a2w() ? -1 : f8, 0 < deltaY ? position < aD.ey - aAp && (position += Math.min(aD.ey - aAp -
			position, aBe), aB6 = f8, aBG(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aBe), aB6 = f8, aBG(), bf.dl = !0), 0))
	}, this.vQ = function() {
		vR.drawImage(aAq, bc.gap, bc.gap)
	}
}

function cN() {
	var canvas, z0, f8, fA, aAN, aBf, gap, aBg, fontSize, aBh, aBi, aBj, aBk, aBl, aBm, aBn, aBo, aBp;

	function aBt() {
		z0.clearRect(0, 0, aW.i, aW.j), z0.fillStyle = bB.nr, z0.fillRect(0, 0, aW.i, aW.j), z0.fillStyle = bB.oE, ef = 0 < aBn ? aBn : aBk[4] / 1e4, z0.fillRect(0, aW.j - aAN - 1, Math.floor(ef * aW.i), aAN), z0.fillStyle = bB.nu, z0.fillRect(0, 0,
			aW.i, 1), z0.fillRect(0, 0, 1, aW.j), z0.fillRect(aW.i - 1, 0, 1, aW.j), z0.fillRect(0, aW.j - 1, aW.i, 1), z0.fillRect(0, aW.j - aAN - 1, aW.i, 1);
		for (var ef, aBv, dt = 0, aB = 0; aB < aBj.length; aB++) aBl[aB] ? (bA.qn.textAlign(z0, 0), aBv = Math.floor((aBf - aAN + 2 * aBg) * (aB - dt + 1) / (aBj.length + 1) - .7 * aBg), z0.fillText(aBj[aB], gap, aBv), bA.qn.textAlign(z0, 2), 5 ===
			aB && 0 !== ag.mu[aD.el] && ag.h2[aD.el] >= ae.k1(aD.el) ? (z0.fillStyle = bB.oq, z0.fillText(aBr(aB), aW.i - gap, aBv), z0.fillStyle = bB.nu) : z0.fillText(aBr(aB), aW.i - gap, aBv)) : dt++
	}

	function aBr(aB) {
		return aB < 3 ? aBk[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rm.a4r(aBk[aB] / 100, 2) : aB < 7 ? bA.rm.a03(aBk[aB]) : aB === 7 ? aW.aBw(aBk[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.go, aD.el) : __fx.utils.getDensity(aD.el)
	}

	function aBq() {
		ag.go[aD.el] !== aBk[6] && (aBk[6] = ag.go[aD.el], aBh++)
	}
	this.dd = function() {
		aBn = aBo = 0, (aBi = new Array(8))[0] = L(110), aBi[1] = aD.kf ? L(111) : L(112), aBi[2] = L(113), aBi[3] = L(114), aBi[4] = L(115), aBi[5] = L(116, 0, "Interest"), aBi[6] = L(117), aBi[7] = L(118),
			aBi.push("Max Troops", "Density"), // add aBi
			(aBj = new Array(aBi.length)).fill(""), (aBk = new Array(aBi.length))[0] = aD.kf ? 0 : aD.kL, aBk[1] = aD.kf ? al.kr : aD.kh, aBk[2] = aD.a0o, aBk[3] = 0, aBk[4] = bL.du(1e4 * ag.go[0], Math.max(aD.k5, 1)), aBk[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.el], 64), aBk[6] = 0, aBq(), aBk[7] = 0, aBm = aBr(6), (aBl = new Array(aBi.length)).fill(!0), aBp = 0, aBp =
			aD.kf ? (aBl[0] = !1, aBl[2] = !1, aBl[3] = !1, 3) : (aBl[3] = !1, 1), aBh = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.i9() ? .1646 : .126) * 1.25 * h.iA), this.j = Math.floor(1.18 * this.i), aAN = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aBg = .04 * this.i, aBf = this.j, this.j -= Math.floor(aBp * (this.j -
			2 * aAN) / aBi.length), fontSize = Math.floor(.7 * (aBf - aAN) / aBi.length);
		var a6U = bA.qn.se(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6U, i) {
				for (var aB = 0; aB < aBj.length; aB++) aBj[aB] = bA.z0.a3r(aBi[aB], a6U, i)
			}((z0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6U, .575 * this.i), bA.qn.textBaseline(z0, 1), z0.lineWidth = 1, this.a56(), this.a95(), aU.a95(), aBt()
	}, this.a95 = function() {
		f8 = h.i - this.i - bc.gap
	}, this.aBu = function() {
		fA = bc.gap
	}, this.a56 = function() {
		fA = bc.gap + (aU.a8R() && 0 !== ag.mu[aD.el] && !aD.hO ? aU.j + bc.gap : 0)
	}, this.mg = function(bu) {
		(bu || 100 <= aBh) && (aBh = 0, aBt())
	}, this.a5p = function() {
		return aBk[7]
	}, this.aBw = function(value) {
		var lG = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lG) / 1e3);
		return value < 10 ? lG + ":0" + value : lG + ":" + value
	}, this.eU = function() {
		var aC7, per;
		aBl[0] && aD.a0p - aD.a0o !== aBk[0] && (aBk[0] = aD.a0p - aD.a0o, aBh++), al.kr - aBk[0] !== aBk[1] && (aBk[1] = al.kr - aBk[0], aBh++), this.mY(), (aC7 = ae.aC8(aD.el)) !== aBk[5] && (aBk[5] = aC7, aBh++), aBq(), aBk[7] += bf.aC9, aC7 =
			aBr(7), aBm !== aC7 && (aBm = aC7, aBh += 100), aC7 = aD.hu ? bh.ks() : ag.go[lw[0]], per = bL.du(1e4 * aC7, Math.max(aD.k5, 1)), aBk[3] = aC7, aBk[4] !== per && (aBh++, aBk[4] = per), 8 === aD.kd && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gM.hC(aB)) return bR.a0O.a0l(), 1;
				return
			}() || aBk[3] < aD.k5 || ! function() {
				for (var aB = al.kr - 1; 0 <= aB; aB--)
					if (0 < ag.gS[al.kw[aB]].length) return;
				return 1
			}() || bN.lA.aC6().length || aD.hu && bh.ks(1) < aD.k5 || bR.a0O.a0l()
	}, this.mY = function() {
		aBl[2] && aD.a0o !== aBk[2] && (aBk[2] = aD.a0o, aBh += 2 === aD.a0m ? 100 : 1)
	}, this.aC3 = function() {
		return aBk[3] === aD.k5
	}, this.aCA = function(aB) {
		var tS, aCB, dt;
		return 2 !== aD.a0m && (aB % 2 == 1 && (aV.mg(1, 1), bf.dl = !0), aB === aD.a5F ? (aBn = 0, aBt(), !1) : (-1 !== aB || 0 !== aBo) && (aCB = aBn, aBn = aD.h9 ? aB / aD.a5F : (dt = performance.now(), 0 <= aB && (tS = dt - 392 * aB, aBo =
			0 === aB || tS < aBo ? tS : aBo), 1 < (aBn = (dt - aBo) / (392 * aD.a5F)) ? 1 : aBn), aBt(), aBn !== aCB))
	}, this.vQ = function() {
		vR.drawImage(canvas, f8, fA)
	}
}

function cO() {
	var hm, aCC, i, j, a9B, aCD, aCE, a8S, canvas, n7, aCF;

	function yw() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aCF = hm = !1, a9B = .61, aCD = .07, aCE = .09, n7 = a8S = j = 0
	}, this.resize = function() {
		var z0, nK, eZ, aCK, aCL, a6Z;
		hm && (i = aCG(i = a0.a1.i9() ? Math.floor(.69 * h.iA) : Math.floor(.5 * h.iA), a74(h.i - 2 * bc.gap, 10)), i = aCG(i, Math.floor(3.57 * a74(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, z0 = canvas.getContext("2d", {
				alpha: !0
			}), nK = Math.floor(1 + j / 40), z0.clearRect(0, 0, i, j), z0.fillStyle = bB.nr, z0.fillRect(nK, nK, i - 2 * nK, j - 2 * nK), z0.lineJoin = "bevel", z0.lineWidth = 2 * nK, z0.strokeStyle = bB.nu, z0.strokeRect(nK, nK, i - 2 * nK,
				j - 2 * nK), z0.imageSmoothingEnabled = !1, eZ = ab.get(aCC), aCK = eZ.width, a6Z = (1 === aCC ? .85 : 21 === aCC ? .666 : .9) * a9B * j / (aCL = eZ.height), z0.setTransform(a6Z, 0, 0, a6Z, Math.floor((i - a6Z * aCK) / 2),
				Math.floor((j - a6Z * aCL) / 2)), z0.drawImage(eZ, 0, 0), z0.setTransform(1, 0, 0, 1, Math.floor(i - aCE * j - aCD * j - nK), Math.floor(nK + aCD * j)),
			function(z0, f1) {
				z0.lineWidth = Math.floor(1 + j / 80), z0.strokeStyle = bB.nu, z0.beginPath(), z0.moveTo(0, 0), z0.lineTo(f1, f1), z0.moveTo(0, f1), z0.lineTo(f1, 0), z0.stroke()
			}(z0, Math.floor(aCE * j)), z0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fS, aCI, a8x, aCJ) {
		hm || aCJ && aCF || (aCC = a8x ? 21 : fS ? 1 : 2, hm = aCF = !0, this.resize(), aL.s4(), aR.a8s(), n7 = bf.eQ, a8S = aCI ? 1 : 0)
	}, this.eU = function() {
		!hm || 1 <= a8S || (a8S = 1 < (a8S += 5e-4 * (bf.eQ - n7)) ? 1 : a8S, n7 = bf.eQ, bf.dl = !0)
	}, this.hD = function(f8, fA) {
		return !(!hm || a8S <= 0 || (f8 -= Math.floor((h.i - i) / 2), fA -= yw(), f8 < 0) || fA < 0 || i < f8 || j < fA || (i - j / 3 < f8 && fA < j / 3 && (hm = !1, bf.dl = !0), 0))
	}, this.vQ = function() {
		!hm || a8S <= 0 || (vR.globalAlpha = a8S, vR.drawImage(canvas, Math.floor((h.i - i) / 2), yw()), vR.globalAlpha = 1)
	}
}

function dN() {
	var aCN, aCO = new Uint8Array(5),
		aCP = new Uint8Array(5);
	this.aCQ = new aCR, this.dd = function() {
		for (var fS = bj.eN.data[119].value, aB = 0; aB < aCO.length; aB++) aCO[aB] = (fS >> 2 * aB) % 4
	}, this.a5R = function() {
		aCN = [L(119), "", L(120, [bX.aCS[28]]), L(121, [bX.aCS[26]]), L(122, [bX.aCS[0]])], this.aCQ.dd()
	}, this.eU = function() {
		this.aCQ.eU()
	}, this.a6D = function(id) {
		1 < id && bJ.rF() || ! function(e9) {
			if (3 === aCO[e9] || 1 === aCP[e9]) return;
			if (aCP[e9] = 1, !(Math.random() < .6)) {
				aCO[e9]++;
				for (var fS = 0, aB = 0; aB < aCO.length; aB++) fS += aCO[aB] << 2 * aB;
				bj.sF.sG(119, fS)
			}
			return 1
		}(id) || aN.a79(aCN[id])
	}
}

function aCR() {
	var aCU;
	this.dd = function() {
		aCU = !1
	}, this.eU = function() {
		var gY;
		if (function() {
				if (!aCU) {
					if (bf.kI() % 30 != 9) return;
					if (!bA.gM.ls(90)) return;
					aCU = !0
				}
				return 1
			}() && (! function() {
				var qf = aN.a7V(956);
				if (qf) {
					if (bA.gM.lJ(qf.player)) return 1;
					aN.a7U(956, 0)
				}
				return
			}() && (-1 === (gY = (aD.hu ? function() {
				var id = bh.ku(),
					f1 = al.kr;
				if (bg.ki[id])
					for (var a0a = al.kw, ez = bg.ez, aB = 0; aB < f1; aB++) {
						var gY = a0a[aB];
						if (ez[gY] !== id) return gY
					} else if (1 < f1) return lw[f1 - 1];
				return -1
			} : function() {
				for (var aCc = al.kr, lF = al.kw, aCd = k6, aB = 0; aB < aCc; aB++) {
					var gY = lF[aB];
					if (0 !== aCd[gY]) return gY
				}
				return -1
			})()) ? ! function() {
				var qf = aN.a7V(957);
				if (qf && qf.a70) {
					if (ac.es(qf.a70.en << 2)) return 1;
					aN.a7U(957, 0)
				}
				return
			}() : (aN.a1A(0, L(123, [ag.a1O[gY]]), 956, gY, bB.nu, bB.nr, -1, !0), 0)))) {
			var f1 = ao.iz.lV;
			if (0 !== f1)
				for (var eN = ao.iz.eN, aB = 0; aB < f1; aB++) {
					var en = eN[aB];
					if (ac.es(en << 2)) return void aN.a1A(0, L(124, [bM.f9(en), bM.fB(en)]), 957, 0, bB.nu, bB.nr, -1, !0, void 0, {
						fK: 1,
						en: en
					})
				}
		}
	}
}

function dO() {
	this.aCe = new aCf, this.dd = function() {
		this.aCe.resize()
	}
}

function aCf() {
	this.resize = function() {
		var aB, aCg = document.head.querySelector("style#ss");
		if (aCg)
			for (aB = aCg.sheet.cssRules.length - 1; 0 <= aB; aB--) aCg.sheet.deleteRule(0);
		else(aCg = document.createElement("style")).id = "ss", document.head.appendChild(aCg);
		var a9J = "::-webkit-scrollbar",
			aCh = bA.qn.qw(bc.sg),
			hw = bA.qn.qw(Math.max(bA.qn.s6(.012), 8));
		try {
			aCg.sheet.insertRule(a9J + "{width:" + hw + ";height:" + hw + ";}", aCg.sheet.cssRules.length), aCg.sheet.insertRule(a9J + "-thumb{background-color:white;}", aCg.sheet.cssRules.length), aCg.sheet.insertRule(a9J +
				"-track{background:" + bB.nq + ";}", aCg.sheet.cssRules.length), aCg.sheet.insertRule(a9J + "-track:horizontal{border-top:" + aCh + " solid white;}", aCg.sheet.cssRules.length), aCg.sheet.insertRule(a9J +
				"-track:vertical{border-left:" + aCh + " solid white;}", aCg.sheet.cssRules.length), aCg.sheet.insertRule(a9J + "-button{display:none;}", aCg.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aCg.sheet.cssRules.length - 1; 0 <= aB; aB--) aCg.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aCi = !1, this.nk = !1, this.a5A = !1, this.aCj = [0, 0, 0, 0], this.aCk = function() {
		var nK, nL, nX, nY;
		this.a5A = this.a5A || this.nk, (this.nk || this.aCi && this.a5A) && (nK = ba.aCl[0], nL = ba.aCl[1], nX = ba.aCl[2], nY = ba.aCl[3], nK = nK < this.aCj[0] ? this.aCj[0] : nK, nL = nL < this.aCj[1] ? this.aCj[1] : nL, nX = nX > this.aCj[
				2] ? this.aCj[2] : nX, nY = nY > this.aCj[3] ? this.aCj[3] : nY, this.nk = !1, this.aCi = !1, nK === this.aCj[0] && nL === this.aCj[1] && nX === this.aCj[2] && nY === this.aCj[3] ? this.a5B() : nK <= nX && nL <= nY && a5T
			.putImageData(a5U, 0, 0, nK, nL, nX - nK + 1, nY - nL + 1))
	}, this.a5B = function() {
		this.a5A && this.aCj[2] >= this.aCj[0] && this.aCj[3] >= this.aCj[1] && a5T.putImageData(a5U, 0, 0, this.aCj[0], this.aCj[1], this.aCj[2] - this.aCj[0] + 1, this.aCj[3] - this.aCj[1] + 1), this.a5A = !1
	}, this.a0y = function() {
		this.aCj[2] >= this.aCj[0] && this.aCj[3] >= this.aCj[1] && a5T.putImageData(a5U, 0, 0, this.aCj[0], this.aCj[1], this.aCj[2] - this.aCj[0] + 1, this.aCj[3] - this.aCj[1] + 1), this.a5A = !1
	}, this.dd = function() {
		var f8, fA;
		this.aCi = !1, this.nk = !1, this.a5A = !1, this.aCj[0] = bS.fC, this.aCj[1] = bS.fD, this.aCj[2] = this.aCj[3] = 0;
		loop: for (f8 = 1; f8 < bS.fC - 1; f8++)
			for (fA = bS.fD - 2; 1 < fA; fA--)
				if (1 === aCm[ac.yT(f8, fA) + 2]) {
					this.aCj[0] = f8;
					break loop
				} loop: for (fA = 1; fA < bS.fD - 1; fA++)
			for (f8 = bS.fC - 2; 1 < f8; f8--)
				if (1 === aCm[ac.yT(f8, fA) + 2]) {
					this.aCj[1] = fA;
					break loop
				} loop: for (f8 = bS.fC - 2; 0 < f8; f8--)
			for (fA = bS.fD - 2; 1 < fA; fA--)
				if (1 === aCm[ac.yT(f8, fA) + 2]) {
					this.aCj[2] = f8;
					break loop
				} loop: for (fA = bS.fD - 2; 0 < fA; fA--)
			for (f8 = bS.fC - 2; 1 < f8; f8--)
				if (1 === aCm[ac.yT(f8, fA) + 2]) {
					this.aCj[3] = fA;
					break loop
				}
	}
}

function L(value, aCn, vz, aCo) {
	var qU = "number" == typeof value ? b7.aCp[value] : value;
	if (vz && b7.aCq() && (qU = vz), !aCn) return aCo ? qU.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qU;
	for (var f1 = aCn.length, aB = 0; aB < f1; aB++)
		for (var fK = 0; fK < 3; fK++) qU = qU.replace("{" + (10 * fK + aB) + "}", aCn[aB]);
	return qU
}

function c2() {
	this.data = new aCr;
	var aCs = (new aCt).L84,
		aCv = (this.aCp = aCs, !(this.aCu = "en"));
	this.dd = function() {
		var qU, g;
		aCv = !1, ("en" === (qU = bj.eN.data[12].value).split("-")[0].toLowerCase() ? (b7.aCp = aCs, b7.aCu = qU, 1) : bj.eN.data[12].value === bj.eN.data[145].value && 0 < bj.eN.data[146].value && (qU = bj.eN.data[146].value, (g = bj.r4.wC(qU, !
			1)).length === qU) && !!bA.qv.a3S(g) && function(g) {
			for (var f1 = g.length, j = 0; j < f1; j++) g[j] = g[j].replace("&#39;", "'");
			var aD1 = bj.r4.wC(f1, !0);
			if (f1 !== aD1.length) return !1;
			if (!bA.qv.a3S(aD1)) return !1;
			for (var lG = aCs.length, aAE = new Array(lG), aD2 = lG === f1, gT = Math.min(f1, lG), aB = 0; aB < lG; aB++)
				if (aAE[aB] = aCs[aB], aB < f1 && aD1[aB] === aAE[aB]) aAE[aB] = g[aB];
				else {
					aD2 = !1;
					for (var fL = 0; fL < gT; fL++)
						if (aD1[fL] === aAE[aB]) {
							aAE[aB] = g[fL];
							break
						}
				} return b7.aCp = aAE, b7.aCu = bj.eN.data[12].value, aD2
		}(g)) || (aCv = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dz
	}, this.aCq = function() {
		return this.aCp === aCs || !aCs.length
	}, this.aD3 = function() {
		var aD4;
		return !!aCv && (aCv = !1, 0 !== aCs.length) && (aD4 = bj.eN.data[12].value, b0.eW.aD5(0, aD4.slice(0, 20)), !0)
	}, this.aD6 = function(g) {
		g.length !== aCs.length ? 8 === t.t4 && t.a5q().aD7(30, 0, 1) : (this.aCp = g, this.aCu = bj.eN.data[12].value, bj.sF.sG(145, this.aCu), bj.sF.sG(146, g.length), bj.r4.wI(g, !1), bj.r4.wI(aCs, !0), 8 === t.t4 ? t.a5q().aD7(30) : 0 === aa
			.a20() && 5 === t.t4 && t.y.aD8())
	}, this.aD9 = function() {
		var aDA, g = navigator.languages;
		return g && g.length ? (aDA = Math.max(b7.data.aDB(g[0]), 0), 1 === g.length ? [aDA, aDA] : [aDA, Math.max(b7.data.aDB(g[1]), 0)]) : [0, 0]
	}
}

function aCr() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDC = function() {
		for (var aDD = [], g = this.g, f1 = g.length, aB = 0; aB < f1; aB++) aDD.push(g[aB]);
		var aDE = bj.eN.data[12].vz;
		for (aB = 0; aB < f1; aB++)
			if (aDD[aB] === aDE) {
				aDD.splice(aB, 1), f1--;
				break
			} aDD.sort(), f1++, aDD.unshift(aDE);
		try {
			if ("undefined" == typeof Intl) return aDD;
			for (aB = 0; aB < f1; aB++) {
				var qU = new Intl.DisplayNames([aDD[aB]], {
					type: "language"
				}).of(aDD[aB]);
				qU !== aDD[aB] && (aDD[aB] = aDD[aB] + ": " + qU)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDD
	}, this.aDG = function(aDH) {
		for (var qU = bj.eN.data[12].value, f1 = aDH.length, aB = 0; aB < f1; aB++)
			if (qU === aDH[aB].split(":")[0]) return aB;
		return 0
	}, this.aDB = function(aDI) {
		if (aDI && !(aDI.length < 2)) {
			aDI = aDI.split("-")[0].toLowerCase();
			for (var g = this.g, f1 = g.length, aB = 0; aB < f1; aB++)
				if (aDI === g[aB]) return aB
		}
		return -1
	}
}

function aCt() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Propaganda", "Close {button}", "Report Abuse", "Team {0}", "Team {0} won the game!",
		"You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "This is a contest!",
		"Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️", "Choose your start position!",
		"You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}",
		"Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus",
		"If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.", "You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.",
		"{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.", "You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.",
		"You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.",
		"{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.", "{10} players left the game.", "{10} players surrendered.", "Contest", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY",
		"MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time",
		"Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention",
		"Loading", "{0} defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America",
		"South America", "Asia", "Australia", "Island Kingdom", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer",
		"Worker", "Peasant", "Serf", "Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Bio", "Upload Bio", "Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).",
		"Auto Renew is on. The subscription will renew in {10} day(s).", "The monthly fee is currently {10} gold.", "Buy", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}", "Total Points: {0}",
		"Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive", "Unlink Account",
		"Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings",
		"Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer",
		"My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Index", "Username", "Account", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader",
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}",
		"Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links", "Propaganda Text", "Reset",
		"Language", "Launch Campaign", "Gold Investment", "Launch", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account",
		"📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App",
		"Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dj() {
	var f8, fA, j, u2, aDJ, aDK, aDL, aDM, aDN, i, a45, aDO;
	this.hm = !1, this.dd = function(qU, aDP) {
		if (1 === a0.id && 13 <= a0.dw && a0.dw < 18) return aDP ? void(a45 = qU) : a45 !== qU ? void 0 : void a0.wA.saveString(200, qU);
		aDP && (a45 = qU, (aDO = document.createElement("a")).appendChild(document.createTextNode(a45)), this.hm = !0, aDO.title = a45, aDO.target = "_blank", aDO.href = a45, aDO.style.textAlign = "center", aDO.style.color = bB.nu, aDO.style
			.position = "absolute", aDO.style.padding = "0px", aDO.style.margin = "0px", this.resize(), document.body.appendChild(aDO), bf.dl = !0)
	}, this.s4 = function() {
		return !(!this.hm || (t.removeChild(document.body, aDO), this.hm = !1))
	}, this.hD = function(iH, iI) {
		return !!this.hm && ((iH < f8 || iI < fA || f8 + i < iH || fA + j < iI || f8 + i - u2 < iH && iI < fA + u2) && (bf.dl = !0, this.hm = !1, t.removeChild(document.body, aDO)), !0)
	}, this.resize = function() {
		var a6U, aDQ;
		this.hm && (aDM = Math.floor(.8 * (a0.a1.i9() ? h.i > h.j ? .6 : .55 : .4) * h.iA), u2 = Math.floor(.15 * aDM), aDJ = Math.floor(.35 * u2), aDK = Math.floor(.5 * u2), aDL = Math.floor(2.5 * aDK), j = u2 + aDJ + 3 * aDK, a6U = bA.qn.se(1,
			aDJ / h.k), aDN = Math.floor(h.k * aQ.measureText(a45, a6U)), aDQ = i = (aDM < aDN ? aDN : aDM) + 2 * aDL, i = Math.min(i, h.i - 2 * (a0.a1.i9() ? 2 : 1) * bc.gap), a6U = bA.qn.se(1, i / aDQ * aDJ / h.k), aDN = Math.floor(h
			.k * aQ.measureText(a45, a6U)), f8 = Math.floor((h.i - i) / 2), fA = Math.floor((h.j - j) / 2), aDO.style.font = a6U, aDO.style.top = Math.floor((fA + 1.4 * aDK + u2) / h.k) + "px", aDO.style.left = Math.floor((f8 + (i -
			aDN) / 2) / h.k) + "px")
	}, this.vQ = function() {
		this.hm && (vR.fillStyle = bB.nr, vR.fillRect(f8, fA + u2, i, j - u2), vR.fillStyle = bB.p3, vR.fillRect(f8, fA, i, u2), vR.fillStyle = bB.nu, vR.lineWidth = bc.zk, vR.strokeStyle = bB.nu, vR.strokeRect(f8, fA, i, j), vR.fillRect(f8, fA +
			u2, i, bc.zk), vR.font = bA.qn.se(1, .48 * u2), bA.qn.textAlign(vR, 1), bA.qn.textBaseline(vR, 1), vR.fillText(L(125), Math.floor(f8 + (i - .5 * u2) / 2), Math.floor(fA + .55 * u2)), aM.a6f(Math.floor(f8 + i - .8 * u2), Math
			.floor(fA + .25 * u2), Math.floor(.5 * u2)), vR.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aBi, f8 = [0, 0, 0, 0, 0],
		fA = [0, 0, 0, 0, 0],
		nW = [1, 1, 1, 1, 1],
		fS = [!0, !0, !0, !1, !1],
		eZ = (this.fn = [!0, !0, !0, !1, !1], null);
	this.aDR = function(a3d, aDS) {
		eZ = a3d, fS = aDS, aBi = [bK.aDT, bK.a1t, bK.aDU, bK.aDU, bK.aDV], this.dd()
	}, this.dd = function() {
		if (ab.tW()) {
			var aB, tB = Math.floor((a0.a1.i9() ? .261 : .195) * h.iA),
				tC = Math.floor(.9 * tB),
				a9B = Math.floor(.17 * tC);
			if (gap = a0.a1.i9() ? 2 * bc.gap : bc.gap, nW[0] = tB / eZ[0].width, nW[1] = tC / eZ[1].width, nW[2] = a9B / eZ[2].height, nW[3] = a9B / eZ[3].height, nW[4] = a9B / eZ[4].height, nW[2] *= 1.7, nW[3] *= 1.07, f8[0] = gap, f8[1] = gap,
				f8[2] = gap, f8[3] = gap, f8[4] = Math.floor(2 * gap + nW[3] * eZ[3].width), fA[0] = gap, fA[1] = fA[0] + gap + nW[0] * eZ[0].height, fA[2] = fA[1] + gap + nW[1] * eZ[1].height, fA[3] = fA[2] + gap + nW[2] * eZ[2].height, fA[4] =
				fA[3], !fS[0])
				for (aB = 0; aB < 5; aB++) fA[aB] -= nW[0] * eZ[0].height + gap;
			if (!fS[1])
				for (aB = 2; aB < 5; aB++) fA[aB] -= nW[1] * eZ[1].height + gap
		}
	}, this.hm = function() {
		return !(7 === aa.a20() && a0.a1.i9())
	}, this.hD = function(iH, iI) {
		if (eZ && this.hm())
			for (var aB = fS.length - 1; 0 <= aB; aB--)
				if (fS[aB] && this.fn[aB] && f8[aB] < iH && fA[aB] < iI && iH < f8[aB] + nW[aB] * eZ[aB].width && iI < fA[aB] + nW[aB] * eZ[aB].height) return t.u(9, t.t4, new aDW(L(126), bA.qn.a44(aBi[aB]))), !0;
		return !1
	}, this.vQ = function() {
		if (eZ && this.hm()) {
			var aB;
			for (vR.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fS[aB] && this.fn[aB] && (vR.setTransform(nW[aB], 0, 0, nW[aB], f8[aB], fA[aB]), vR.drawImage(eZ[aB], 0, 0));
			vR.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aDX = 0, this.aDY = null, this.uD = null, this.lA = null, this.y = null, this.ua = null, this.uA = null, this.message = null, this.aDZ = null, this.s3 = null, this.aDa = null, this.aDb = new aDc, this.a1x = 0, this.aA5 = 0, this.dd =
		function() {
			this.aA5 = bf.eQ, this.aDX = bG.t7.x5(bj.eN.data[105].value, 5), this.uD = new aDd, this.lA = new aDe, this.y = new aDf, this.ua = new aDg, this.uA = new aDh, this.message = new aDi, this.aDZ = new aDj, this.s3 = new aDk, this.aDa =
				new aDl, this.y.dd(), bp.dd(), this.a1x = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uU = function() {
			this.s3 && this.s3.uU(), this.aDY = null, this.uD = null, this.lA = null, this.y = null, this.ua = null, this.uA = null, this.message = null, this.aDZ = null, this.s3 = null, this.aDa = null, this.a1x = 0, bp.uU(), a0.a1.setState(0)
		}
}

function aDd() {
	function aE8(g, tO, tP) {
		var aE9 = g[tO];
		g[tO] = g[tP], g[tP] = aE9
	}
	this.uE = [
		[],
		[],
		[],
		[]
	], this.uF = [0, 0, 0, 0], this.aDm = [], this.aDn = function(aDo, t2, username, uK, a4X, aDp, elo, color, wd, aDq) {
		username = this.aDs(t2, username, uK, a4X, aDp, elo, color, wd, aDq);
		this.uE[aDo].push(username), bn.aDX === t2 && (bn.aDY = username), bn.aDa.aDt(t2) && (username.uM = 1), bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === aDo && 1 === bn.y.rr[2]
	}, this.aDs = function(t2, username, uK, a4X, aDp, elo, color, wd, aDq) {
		return {
			t2: t2,
			username: username,
			uK: uK,
			a4X: a4X,
			aDp: aDp,
			elo: elo,
			color: color,
			wd: wd,
			aDq: aDq
		}
	}, this.aDv = function(e9, aDo, uK, a4X, aDp, elo, wd, color) {
		e9 = this.uE[aDo][e9];
		e9.uK = uK, e9.a4X = a4X, e9.aDp = aDp, e9.elo = elo, e9.wd = wd, e9.color = color, bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === aDo && 1 === bn.y.rr[2]
	}, this.aDw = function(e9, aDo, aDx) {
		var e9 = this.uE[aDo][e9],
			aDy = e9.username,
			aDz = "Redacted " + bF.t7.a03(e9.t2, 2);
		e9.username = aDx ? "[" + bA.rm.a1W(aDy) + "] " + aDz : aDz, aDy.indexOf("Redacted") < 0 && (e9.aE0 = aDy), bn.s3.aE1(e9.t2), bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === aDo && 1 === bn.y.rr[2]
	}, this.aE2 = function(e9, aE3, aE4) {
		var player = this.uE[aE3][e9];
		this.aE5(e9, aE3), this.uE[aE4].push(player), bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === aE4 && 1 === bn.y.rr[2]
	}, this.aE5 = function(e9, aE3) {
		var uD = this.uE[aE3];
		this.aDm.push(uD[e9]), 1e3 < this.aDm.length && this.aDm.shift(), e9 >= this.uF[aE3] ? uD[e9] = uD[uD.length - 1] : (this.uF[aE3]--, 2 === aE3 ? (uD.splice(this.uF[aE3] + 1, 0, uD[uD.length - 1]), uD.splice(e9, 1)) : (uD[e9] = uD[this.uF[
			aE3]], uD[this.uF[aE3]] = uD[uD.length - 1])), uD.pop(), bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === aE3 && 1 === bn.y.rr[2]
	}, this.aE6 = function(e9, rq) {
		bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === rq && 1 === bn.y.rr[2];
		var uD = this.uE[rq],
			qf = uD[e9];
		if (2 === rq)
			if (e9 >= this.uF[rq]) {
				bn.aDa.join(qf);
				for (var aE7 = this.uF[rq], elo = qf.elo; aE7 && elo > uD[aE7 - 1].elo;) aE7--;
				uD[e9] = uD[this.uF[rq]], uD.splice(this.uF[rq]++, 1), uD.splice(aE7, 0, qf)
			} else uD.splice(this.uF[rq]--, 0, qf), uD.splice(e9, 1);
		else e9 >= this.uF[rq] ? (bn.aDa.join(qf), aE8(uD, this.uF[rq]++, e9)) : aE8(uD, --this.uF[rq], e9)
	}, this.aEA = function(t2) {
		for (var uE = this.uE, f1 = uE.length, aB = 0; aB < f1; aB++)
			for (var uD = uE[aB], lG = uD.length, fK = 0; fK < lG; fK++)
				if (t2 === uD[fK].t2) return uD[fK];
		return null
	}
}

function aDl() {
	var aEB = [],
		aEC = [],
		aED = 0;

	function aEE(g, a7X, aEI, aEJ) {
		var f1 = g.length;
		if (0 === f1) return "";
		var qU = "@" + g[0];
		if (1 === f1) return qU + a7X + aEJ;
		for (var aB = 1; aB < f1 - 1; aB++) qU += ", @" + g[aB];
		return qU + " and @" + g[f1 - 1] + aEI + aEJ
	}
	this.dd = function() {
		var qU = aEE(aEC, " is", " are", " in the lobby!");
		qU.length && bn.message.aEF({
			id: 7,
			r: qU
		}), aEB = [], aEC = [], aED = 0
	}, this.aDt = function(aEG) {
		return bn.aDX !== aEG && (aEG = bF.t7.a03(aEG, 5), !!bj.vp.uM(aEG)) && (aEC.push(aEG), !0)
	}, this.join = function(player) {
		bn.aDX !== player.t2 && (player = bF.t7.a03(player.t2, 5), bj.vp.uM(player)) && aEB.push(player)
	}, this.aEH = function() {
		var a7X, aEI;
		++aED < 3 || (aED = 0, a7X = aEE(aEC, "", "", " entered the lobby!"), (a7X = (aEI = aEE(aEB, "", "", " joined a game!")).length ? a7X.length ? a7X + " " + aEI : aEI : a7X).length && bn.message.aEF({
			id: 7,
			r: a7X
		}), aEB = [], aEC = [])
	}
}

function aDc() {
	this.dm = function(e9) {
		if ((uF = bn.uD.uF[e9]) < 2) return !1;
		var rs = bn.y.rt[e9],
			aEK = 9 === rs.aEL ? 333 : 512,
			uF = Math.min(uF, aEK);
		8 === rs.aEL && (uF -= uF % 2);
		aEK = bn.uD.uE[e9].splice(0, uF), bn.uD.uF[e9] -= uF, uF = function(aEM) {
			if (bn.aDY)
				for (var f1 = aEM.length, t2 = bn.aDY.t2, aB = 0; aB < f1; aB++)
					if (aEM[aB].t2 === t2) return aB;
			return -1
		}(aEK);
		return -1 === uF ? (bn.uD.aDm = bn.uD.aDm.concat(aEK), 1e3 < bn.uD.aDm.length && bn.uD.aDm.splice(0, bn.uD.aDm.length - 1e3), bn.y.aDu += 29 === t.t4 && bn.y.rr[0] === e9 && 1 === bn.y.rr[2], !1) : (8 === rs.aEL && (rs.aEP = (rs.aEP + (
			uF >> 1)) % 1024, e9 = uF - uF % 2, uF %= 2, aEK = aEK.slice(e9, 2 + e9)), ax.dd(rs, aEK, uF), !0)
	}, this.aEQ = function(rs, aEM, aEN) {
		var f4 = aD.data = new a5G,
			aEU = (f4.spawningSeed = rs.spawningSeed, rs.aEL < 7 ? (f4.gameMode = 1, f4.numberTeams = rs.aEL + 2) : 9 === rs.aEL ? (f4.gameMode = f4.isZombieMode = 1, f4.numberTeams = 2) : (f4.gameMode = 0, f4.battleRoyaleMode = 7 === rs.aEL ?
				0 : 10 === rs.aEL ? 1 : 2), f4.selectedPlayer = aEN, f4.isContest = rs.aER, f4.mapType = bS.aES(rs.eh) ? 0 : 1, bS.aET(f4, rs.eh), f4.mapSeed = rs.mapSeed, f4.humanCount = aEM.length);
		f4.selectableSpawn = 1 === f4.gameMode || aEU < 100, f4.colorsData = new Uint32Array(aEU), f4.playerNamesData = new Array(aEU), f4.a5e = new Uint32Array(aEU);
		for (var aB = 0; aB < aEU; aB++) f4.colorsData[aB] = aEM[aB].color, f4.playerNamesData[aB] = aEM[aB].username, f4.a5e[aB] = aEM[aB].t2;
		if (2 === f4.battleRoyaleMode)
			for (f4.elo = new Uint16Array(aEU), aB = 0; aB < aEU; aB++) f4.elo[aB] = aEM[aB].elo;
		aa.setState(8), bS.a7(rs.eh, f4.mapSeed), aD.a5L(), aD.a5J = 2
	}
}

function aDe() {
	var e0 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEV = [bB.o8, bB.o8, bB.o9, bB.oc, bB.od, bB.oP, bB.oj, bB.o9, bB.p5, bB.ot, bB.p2],
		aEW = [
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
		aEX = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aEl(ru, t2, aEn) {
		for (var fL = ru.length - 1; 0 <= fL; fL--) {
			var qf = ru[fL];
			0 === qf.id && qf.t2 === t2 && (qf.r = "[Redacted Message]", aEn) && (qf.aEo = 1)
		}
	}
	this.rz = function(aEY) {
		var aEZ, a1X;
		return aEY.id < 5 && (aEZ = "@" + bF.t7.a03(aEY.t2, 5)), 0 === aEY.id ? aEZ + ": " + aEY.r : 1 === aEY.id ? (a1X = "@" + bF.t7.a03(aEY.target, 5), 0 === aEY.aEa ? 32768 <= aEY.value ? aEZ + " voted with " + (aEY.value - 32768 + 1) +
				" gold against " + a1X + " to weaken the latter's admin position. 📉" : aEZ + " voted with " + (aEY.value + 1) + " gold for " + a1X + " to strengthen the latter's admin position. 💪" : 1 === aEY.aEa ? aEZ + " sent " + Math.floor(
					aEY.value / 100) + " 🧈 gold to " + a1X + "." : aEZ + " voted with " + (aEY.value / 10).toFixed(1) + " points for " + a1X + " to acknowledge the latter as clan leader. ✅") : 2 === aEY.id ? 0 === aEY.aEa ? aEZ +
			" was 🔇 muted for 1 Hour." : 1 === aEY.aEa ? "The username of " + aEZ + " was ✂️ redacted. Duration: 1 Day" : aEZ + " 👢 was kicked." : 3 === aEY.id ? aEZ + bo.eC(aEY.aEa, bo.e6[aEY.aEa][aEY.value]) + "@" + bF.t7.a03(aEY.target, 5) +
			bo.eE(aEY.aEa, bo.e6[aEY.aEa][aEY.value]) : 4 === aEY.id ? aEZ + bo.eC(5, bo.e6[5][aEY.aEa]) + "@" + bF.t7.a03(aEY.target, 5) + bo.eE(5, bo.e6[5][aEY.aEa]) : 5 === aEY.id ? aEX[aEY.aEa] : 6 === aEY.id ? "You are about to mention " +
			aEY.value + " player" + (1 === aEY.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEY.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEY.id ? aEY.r : void 0
	}, this.ry = function(aEY, aEb) {
		return {
			aEY: aEY,
			r: aEb,
			aEc: 0,
			fontSize: 1,
			s2: 0,
			aEd: aEY.id ? bB.ob : bB.nu
		}
	}, this.uI = function(player, rq) {
		return (2 === rq ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uJ = function(uK) {
		return aEV[uK]
	}, this.aEe = function(uK, a4X) {
		return uK < 3 || 7 === uK ? aEW[uK][0] : 4 === uK ? aEW[uK][a4X < 1 ? 0 : a4X < 10 ? 1 : 2] : aEW[uK][a4X < 10 ? 0 : 1]
	}, this.aEf = function(a4X) {
		return 0 === a4X
	}, this.aEA = function(rq, t2) {
		for (var uE = bn.uD.uE, uD = uE[rq], f1 = uD.length, aB = 0; aB < f1; aB++)
			if (t2 === uD[aB].t2) return uD[aB];
		for (var fL = 0; fL < uE.length; fL++)
			if (rq !== fL)
				for (f1 = (uD = uE[fL]).length, aB = 0; aB < f1; aB++)
					if (t2 === uD[aB].t2) return uD[aB];
		return null
	}, this.uL = function(qf) {
		return !!bn.aDY && qf.t2 === bn.aDY.t2
	}, this.aEg = function(uD, aEh, aEi) {
		var a1U = [];
		loop: for (var aB = aEh; aB < aEi; aB++) {
			var a1V = bA.rm.a1W(uD[aB].username);
			if (a1V) {
				for (var fL = a1U.length - 1; 0 <= fL; fL--)
					if (a1V === a1U[fL].name) {
						a1U[fL].gT++;
						continue loop
					} a1U.push({
					name: a1V,
					gT: 1
				})
			}
		}
		if (a1U.sort(function(fK, fL) {
				return fL.gT - fK.gT
			}), 0 === a1U.length) return "";
		for (var qU = a1U[0].name + ": " + a1U[0].gT, aB = 1; aB < a1U.length; aB++) qU += "   " + a1U[aB].name + ": " + a1U[aB].gT;
		return qU
	}, this.aEj = function(uK, a4X, aDp) {
		return 0 === e0[uK].length ? "Rank: " + (a4X + 1) : e0[uK] + " Rank: " + (a4X + 1) + (3 !== uK && aDp < 100 ? "   " + e0[3] + " Rank: " + (aDp + 1) : "")
	}, this.aEk = function(t2) {
		for (var rt = bn.y.rt, aB = 0; aB < rt.length; aB++) aEl(rt[aB].ru, t2);
		aEl(bn.message.aEm(), t2, 1), bn.s3.aEk(t2)
	}
}

function aDh() {
	var sW = 0,
		aEp = 0,
		aEq = 0,
		aEr = null,
		aEs = null;

	function aEv(qf, aEw, aEx) {
		var qU = qf.username;
		return (qU += "   " + bn.lA.aEj(qf.uK, qf.a4X, qf.aDp)) + function(qf) {
			qf = qf.wd;
			if (qf < 1e3) return "   Gold: " + qf;
			if ((qf %= 1024) < 1e3) return "   Gold: " + qf + "k";
			return "   Gold: " + (qf - 999) + "M"
		}(qf) + ("   IP: " + bF.t7.a03(qf.aDq, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aEx ? aEp : aEu(qf, aEw)])
	}

	function aEu(qf, aEw) {
		return aEp = aEw || bn.uD.aEA(qf.t2) ? 1 : 0
	}
	this.uB = 0, this.aEt = function() {
		!sW || aEp === aEu(aEs) && aEq === aEs.wd || (aEq = aEs.wd, aEr.show(-1, -1, aEv(aEs, 0, 1), 1, 1, aEs.color))
	}, this.uN = function(e, qf, aEw) {
		var a9I = e.getBoundingClientRect();
		this.show(a9I.left, a9I.top, qf, 0, aEw), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bn.uA && bn.uA.s4(1)
		}), this.uB = aEw
	}, this.show = function(f8, fA, qf, sa, aEw) {
		aEr = aEr || new sT, aEq = (aEs = qf).wd, aEr.show(f8, fA, aEv(qf, aEw), sa, 0, aEs.color), sW = 1
	}, this.s4 = function(sh) {
		this.uB = 0, aEr && aEr.s4(sh) && (sW = 0, aEs = null)
	}
}

function aDf() {
	function aF2(aF4) {
		bn.y.aDu && 1 === bn.y.rr[2] && t.a5r(29).aF5(), bn.y.aDu = 0, t.a5r(29).aF6(), 0 !== bn.y.rt[bn.y.rr[0]].tw && !aF4 || t.a5r(29).aF7(), bn.uA.aEt()
	}
	this.rt = new Array(4), this.rr = [0, 0, 1, 0], this.aDu = 0, this.aEz = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rt.length; aB++) this.rt[aB] = new aF0;
		this.rr[0] = bj.eN.data[158].value
	}, this.aF1 = function() {
		aF2(!0), bn.aDa.dd()
	}, this.aEH = function() {
		bn.aDa.aEH();
		for (var aB = 0; aB < bn.y.rt.length; aB++) {
			var rs = bn.y.rt[aB];
			0 === rs.tw ? rs.aF8 = 0 : (rs.aF9 = Math.max(rs.aF9 - rs.aF8 % 2, 0), rs.aF8++)
		}
		aF2(!1)
	}, this.aFA = function(rq) {
		this.rr[0] !== rq || this.rr[2] || t.a5r(29).aFB()
	}
}

function aDj() {
	var aFC = 0,
		aFD = "",
		aFE = 0,
		aFF = 0,
		aFG = 0;

	function aFI(aEb) {
		b0.aFT.aFU(3, aEb)
	}

	function aFR(gT) {
		aFC = 1, bn.message.aEF({
			id: 6,
			value: gT
		})
	}

	function aFL(r) {
		var aFX = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFX)
	}
	this.a0q = function(r) {
		var aFH, g, aFN;
		if (aFC) return aFC = 0, "yes" === (aFH = r.toLowerCase()) || "y" === aFH ? void aFI(aFD) : void bn.message.aEF({
			id: 5,
			aEa: 7
		});
		!(r.indexOf("@") < 0) && (aFH = aFL(r)) ? (aFD = r, g = function(aFK) {
			for (var f1 = aFK.length, aFV = [0, 0, 0, 0], aB = 0; aB < f1; aB++)
				for (var i = aFK[aB], fK = 0; fK < 4; fK++) i === "@room" + (fK + 1) && (aFV[fK] = 1);
			if ((aFF = bA.qv.a3H(aFV)) % 4 == 0) return bA.qv.a3Z(bn.uD.uE);
			for (fK = 0; fK < 4; fK++) aFV[fK] = aFV[fK] ? bn.uD.uE[fK] : [];
			return bA.qv.a3Z(aFV)
		}(aFH), function(aFK, aFN, r) {
			if (!aFE) return;
			for (var f1 = aFN.length, aB = 0; aB < f1; aB++) 2 === aFN[aB].id && (r = r.replace(aFK[aFN[aB].e9], "@" + aFN[aB].fS));
			return aFC = 1, aFI((aFD = r).slice(0, 126) + "|"), 1
		}(aFH, aFN = function(aFK) {
			for (var aFN = [], f1 = (aFG = aFE = 0, aFK.length), aB = 0; aB < f1; aB++) {
				var i = aFK[aB],
					lG = i.length;
				bA.rm.startsWith(i, "@[") ? lG <= 9 && bA.rm.a47(i, "]") && aFN.push({
					id: 0,
					fS: i.substring(2, lG - 1).toUpperCase()
				}) : 6 === lG ? bA.rm.startsWith(i, "@room") || (aFG++, aFN.push({
					id: 1,
					fS: bG.t7.x5(i.substring(1), 5)
				})) : 1 < lG && lG < 5 && 0 <= (lG = b7.data.aDB(i.substring(1))) && (aFN.push({
					id: 2,
					fS: lG,
					e9: aB
				}), aFE = 1)
			}
			return aFN
		}(aFH), r) || (0 === aFN.length ? aFF || function(aFK) {
			for (var f1 = aFK.length, aB = 0; aB < f1; aB++) {
				var i = aFK[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFH) ? aFR(g.length) : aFI(r) : aFH.length === aFG ? aFI(r) : (function(g, aFN) {
			var lG = aFN.length;
			if (0 === lG) return;
			var f1 = g.length;
			loop: for (var aB = f1 - 1; 0 <= aB; aB--) {
				for (var fK = 0; fK < lG; fK++)
					if (0 === aFN[fK].id) {
						if (aFN[fK].fS === bA.rm.a1W(g[aB].username)) continue loop
					} else if (1 === aFN[fK].id && aFN[fK].fS === g[aB].t2) continue loop;
				g[aB] = g[--f1], g.pop()
			}
		}(g, aFN), aFR(g.length)))) : aFI(r)
	}, this.aFY = function(r) {
		var aFK = aFL(r);
		if (aFK)
			for (var a5 = new RegExp("^[0-9]+$"), f1 = aFK.length, aB = 0; aB < f1; aB++) {
				var i = aFK[aB].substring(1),
					lG = i.length;
				1 <= lG && lG <= 3 && a5.test(i) && (lG = parseInt(i, 10), !isNaN(lG)) && 0 <= lG && lG < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[lG]))
			}
		return r
	}
}

function aDi() {
	var aFZ, aFa = [],
		aFb = -1,
		aFc = 0,
		aFd = 0;

	function aFi() {
		aFc = bf.eQ, (3 === this.uR ? aFh : (aFb = (aFa.length + aFb + 2 * this.uR - 1) % aFa.length, aFg))()
	}

	function aFg() {
		0 !== aFa.length && (aFd = 0, aFZ && aFZ.uU(), (aFZ = new uO(aFi)).sG(aFb, aFa.length), aFZ.show(aFa[aFb]), bn.message.resize())
	}

	function aFh() {
		aFd = 1, aFZ && aFZ.uU(), (aFZ = new uV(aFg)).sG(aFa.length), aFZ.show(), bn.message.resize()
	}
	this.aEF = function(aEY) {
		var qf;
		2 === aEY.id && 3 === aEY.aEa ? bn.lA.aEk(aEY.t2) : (qf = bn.lA.ry(aEY, bn.lA.rz(aEY)), (5 !== aEY.id && 6 !== aEY.id || (t.a5r(29).aFe().s1(qf), 5 === aEY.id)) && (qf = bf.eQ < aFc + 2e4, aFb !== aFa.length - 1 && qf || (aFb = aFa
			.length), aFa.push(aEY), bj.eN.data[14].value || 7 === aEY.id || bp.play(), aFZ) && (aFd && (bj.eN.data[13].value || qf) ? aFZ.sG(aFa.length) : aFg()))
	}, this.show = function() {
		aFh()
	}, this.s4 = function() {
		aFb = aFa.length - 1, aFZ && aFZ.uU(), aFZ = null
	}, this.resize = function() {
		aFZ && aFZ.resize()
	}, this.aEm = function() {
		return aFa
	}
}

function aDg() {
	var aFj = null,
		aFk = null,
		aFl = 0,
		aFm = 0,
		aFn = null;

	function aFp() {
		0 !== aFk.uK && (bn.ua.s4(), t.u(8, 29, new t5(25, {
			t6: 0,
			t2: bF.t7.a03(aFk.t2, 5),
			t3: 0
		}, 29)))
	}

	function aFr() {
		return !bn.aDY || bn.lA.uL(aFk) ? 1 : 0
	}

	function aFq() {
		var f8 = aFj.f8,
			fA = aFj.fA,
			aG0 = (bn.ua.s4(), aFr());
		aFj = new uW([new w(bo.e6[5][0], function() {
			aFu(5, 0)
		}, aG0), new w(bo.e6[5][1], function() {
			aFu(5, 1)
		}, aG0), new w(bo.e6[5][2], function() {
			aFu(5, 2)
		}, aG0), new w(bo.e6[5][3], function() {
			aFu(5, 3)
		}, aG0)]), aFt(f8, fA), aFm = aFl = 2
	}

	function aFs() {
		29 === t.t4 && t.a5q().aDZ(bF.t7.a03(aFk.t2, 5))
	}

	function aFu(id, value) {
		5 === id && b0.aG1.aG2({
			t6: 3,
			t2: bF.t7.a03(aFk.t2, 5),
			value: value
		})
	}

	function aFt(f8, fA, uc) {
		aFj.show(f8, fA, uc), bn.uA.show(aFj.f8, aFj.fA, aFk, 1)
	}
	this.aFo = function(e, qf) {
		aFl = 1, aFk = qf, aFj = new uW([new w(L(127), aFp, 0 === qf.uK ? 1 : 0), new w(L(128), aFq, aFr()), new w(L(129), aFs, 0)]), aFt((aFn = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aFn.clientY, 1)
	}, this.a2r = function(code) {
		if (29 !== t.t4) return !1;
		if (!aFk) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.s4();
			else if (bA.rm.startsWith(code, "Numpad") || bA.rm.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aFl) this.aFo(aFn, aFk);
				else {
					if (!aFj) return !1;
					1 === aFl ? code <= 1 ? aFp() : 2 === code ? aFq() : (aFs(), this.s4()) : (aFu(aFm, bL.i8(code - 1, 0, bo.e6[aFm].length - 1)), this.s4())
				}
		}
		return !0
	}, this.s4 = function() {
		aFl = 0, aFj && aFj.s4(), aFj = null, bn.uA.s4()
	}
}

function aF0() {
	this.tw = 0, this.eh = 0, this.mapSeed = 0, this.aEL = 0, this.aG5 = 0, this.aG6 = 0, this.aER = 0, this.aF9 = 0, this.spawningSeed = 0, this.a25 = 0, this.aEP = 0, this.ru = [], this.rv = 1048575, this.aF8 = 0, this.aG7 = [{
		eh: 0,
		mapSeed: 0,
		aEL: 0,
		eQ: 100,
		aER: 0
	}, {
		eh: 1,
		mapSeed: 0,
		aEL: 1,
		eQ: 200,
		aER: 0
	}, {
		eh: 2,
		mapSeed: 0,
		aEL: 2,
		eQ: 300,
		aER: 0
	}, {
		eh: 3,
		mapSeed: 0,
		aEL: 3,
		eQ: 400,
		aER: 0
	}, {
		eh: 0,
		mapSeed: 0,
		aEL: 9,
		eQ: 500,
		aER: 0
	}, {
		eh: 1,
		mapSeed: 0,
		aEL: 10,
		eQ: 600,
		aER: 0
	}, {
		eh: 2,
		mapSeed: 0,
		aEL: 8,
		eQ: 700,
		aER: 0
	}, {
		eh: 3,
		mapSeed: 0,
		aEL: 3,
		eQ: 800,
		aER: 0
	}]
}

function aDk() {
	var aG8 = [],
		tH = [],
		aG9 = [];

	function aGB(qf) {
		for (var r = qf.r, aGA = [];;) {
			var eZ = function aGD(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qU = r.substring(position + 1, position + 6);
				if (5 !== qU.length) return aGD(r, position + 1);
				if (bA.rm.startsWith(qU, "room")) return aGD(r, position + 1);
				var aGK = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGK.test(qU)) return aGD(r, position + 1);
				aGK = r.substring(position + 6, position + 7);
				if (1 !== aGK.length) return position;
				qU = new RegExp("^[ :!.]+$");
				if (!qU.test(aGK)) return aGD(r, position + 1);
				return position
			}(r, 0);
			if (-1 === eZ) {
				aGA.push(aGE(r, qf));
				break
			}
			0 === eZ ? aGA.push(aGF(r.substring(1, 6), qf, eZ)) : (aGA.push(aGE(r.substring(0, eZ), qf)), aGA.push(aGF(r.substring(eZ + 1, eZ + 6), qf, eZ))), r = r.substring(eZ + 6)
		}
		return aGA
	}

	function aGF(qU, qf, eZ) {
		var aDr = function(qU) {
				var t2 = bG.t7.x5(qU, 5),
					aDr = bn.uD.aEA(t2);
				if (aDr) {
					for (aG8.push(aDr); 75 < aG8.length;) aG8.shift();
					return aDr
				}
				for (var aDm = bn.uD.aDm, aB = aDm.length - 1; 0 <= aB; aB--)
					if (aDr = aDm[aB], t2 === aDr.t2) return aG8.push(aDr), aDr;
				for (aB = aG8.length - 1; 0 <= aB; aB--)
					if (aDr = aG8[aB], t2 === aDr.t2) return aG8.push(aDr), aDr;
				return bn.uD.aDs(t2, qU, 1, 999999, 999999, 0, 0, 0, 0)
			}(qU),
			qU = (0 === eZ && 0 === qf.aEY.id && qf.s2 && (qf.fontSize = bn.lA.aEe(aDr.uK, aDr.a4X), qf.aEc = bn.lA.aEf(aDr.a4X)), document.createElement("span"));
		return qU.textContent = function(aDr, qf, eZ) {
			if (aDr.aGI) return aDr.aGI--, eZ = 2 === qf.aEY.id || (3 === qf.aEY.id || 4 === qf.aEY.id) && 0 !== eZ, aDr.username + (eZ ? " (" + aDr.aE0 + ")" : "");
			if (qf.aEY.aEo) return "Redacted " + bF.t7.a03(aDr.t2, 2);
			return aDr.username
		}(aDr, qf, eZ), qU.style.display = "inline-block", qU.style.color = bn.lA.uJ(aDr.uK), qU.style.cursor = "pointer", qU.style.margin = "0", qU.style.font = "inherit", qU.style.minWidth = qU.style.minHeight = "1em", bn.lA.uL(aDr) && (qU
			.style.textDecoration = "underline"), aDr.uM && (qU.style.textDecorationLine = "underline", qU.style.textDecorationStyle = "dotted"), bn.lA.aEf(aDr.a4X) && (qU.style.fontWeight = "bold"), qU.onclick = function(e) {
			bn.ua.aFo(e, aDr)
		}, bJ.rF() || (qU.onmouseover = function(e) {
			bn.uA.uN(e.target, aDr)
		}), tH.push(qU), qU
	}

	function aGE(r, qf) {
		var rl = document.createElement("span");
		return rl.textContent = r, rl.style.color = qf.aEd, rl.style.margin = "0", rl.style.font = "inherit", rl
	}

	function aGP(aDr, aDz, t2) {
		t2 !== aDr.t2 || aDr.aE0 || (aDr.aE0 = aDr.username, aDr.username = aDz)
	}
	this.uU = function() {
		for (var aB = 0; aB < tH.length; aB++) tH[aB].onclick = tH[aB].onmouseover = null;
		aG9 = tH = null
	}, this.transform = function(qf) {
		for (var qS = document.createElement("div"), aGA = aGB(qf), aB = 0; aB < aGA.length; aB++) qS.appendChild(aGA[aB]);
		0 === qf.aEY.id && (qS.vx143 = qf.aEY, aG9.push(qS)), qS.style.margin = "0.6em 0.6em", qf.s2 && (qS.style.marginLeft = qS.style.marginRight = "inherit"), qS.style.font = "inherit";
		var aGC = 0 < qf.aEY.id;
		return qf.aEc && (qS.style.fontWeight = "bold"), aGC && (qS.style.paddingLeft = "0.7em"), aGC && (qS.style.fontStyle = "italic"), qS.style.fontSize = qf.fontSize.toFixed(2) + "em", qS
	}, this.aGN = function(aGO) {
		if (aGO && (2 === aGO.id && 1 === aGO.aEa || 3 === aGO.id && 2 === aGO.aEa)) {
			var t2 = 3 === aGO.id ? aGO.target : aGO.t2;
			if (!bn.uD.aEA(t2)) {
				for (var aDz = "Redacted " + bF.t7.a03(t2, 2), aDm = bn.uD.aDm, aB = aDm.length - 1; 0 <= aB; aB--) aGP(aDm[aB], aDz, t2);
				for (aB = aG8.length - 1; 0 <= aB; aB--) aGP(aG8[aB], aDz, t2)
			}
		}
	}, this.aE1 = function(t2) {
		for (var aGQ = aG9, aB = aGQ.length - 1; 0 <= aB; aB--) {
			var f4 = aGQ[aB];
			if (f4.vx143.t2 === t2) {
				for (; f4.firstChild;) t.removeChild(f4, f4.firstChild);
				for (var aGA = aGB(bn.lA.ry(f4.vx143, bn.lA.rz(f4.vx143))), fK = 0; fK < aGA.length; fK++) f4.appendChild(aGA[fK]);
				aGQ.splice(aB, 1)
			}
		}
	}, this.aEk = function(t2) {
		for (var aGQ = aG9, aB = aGQ.length - 1; 0 <= aB; aB--) {
			var f4 = aGQ[aB];
			if (f4.vx143.t2 === t2) {
				for (; f4.firstChild;) t.removeChild(f4, f4.firstChild);
				f4.vx143.r = "[Redacted Message]";
				for (var aGA = aGB(bn.lA.ry(f4.vx143, bn.lA.rz(f4.vx143))), fK = 0; fK < aGA.length; fK++) f4.appendChild(aGA[fK]);
				aGQ.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aGR, aGS, aGT;

	function aGY(aB) {
		var button = aY.rM[aB],
			f8 = button.f8,
			fA = button.fA,
			i = button.i,
			j = button.j;
		vR.fillStyle = button.aGW, vR.fillRect(f8, fA, i, j), aB === aGR && (vR.fillStyle = aGT, vR.fillRect(f8, fA, i, j)), vR.lineWidth = bc.zk, vR.strokeStyle = aGS, vR.strokeRect(f8, fA, i, j),
			function(button) {
				var f8 = button.f8,
					fA = button.fA,
					i = button.i,
					j = button.j;
				bA.qn.textAlign(vR, 1), bA.qn.textBaseline(vR, 1), vR.font = button.font, vR.fillStyle = aGS, vR.fillText(button.aEb, Math.floor(f8 + i / 2), Math.floor(fA + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fA = 0, this.gap = 0, this.dd = function() {
		aGR = -1, aGS = bB.nu, aGT = "rgba(255,255,255,0.16)", this.rM = new Array(7), this.j = Math.floor((a0.a1.i9() ? .123 : .093) * h.iA), this.i = Math.floor((a0.a1.i9() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGU = Math.floor(.26 * this.j),
			aGV = bA.qn.se(1, aGU);
		this.rM[0] = {
			f8: 0,
			fA: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEb: "Multiplayer",
			font: aGV,
			aGW: "rgba(22,88,22,0.8)",
			fontSize: aGU
		}, aGU = Math.floor(.18 * this.j), aGV = bA.qn.se(1, aGU), this.rM[1] = {
			f8: 0,
			fA: 0,
			i: this.i - this.rM[0].i - this.gap,
			j: this.j,
			aEb: "Single Player",
			font: aGV,
			aGW: "rgba(22,88,88,0.8)",
			fontSize: aGU
		}, this.rM[2] = {
			f8: 0,
			fA: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEb: "",
			font: this.rM[1].font,
			aGW: "rgba(100,0,0,0.8)",
			fontSize: this.rM[1].fontSize
		}, this.rM[3] = {
			f8: 0,
			fA: 0,
			i: this.i,
			j: this.j,
			aEb: "Back",
			font: this.rM[0].font,
			aGW: "rgba(0,0,0,0.8)",
			fontSize: this.rM[0].fontSize
		}, this.rM[4] = {
			f8: 0,
			fA: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEb: "The game was updated!",
			font: this.rM[1].font,
			aGW: "rgba(100,0,0,0.8)",
			fontSize: this.rM[1].fontSize
		}, this.rM[5] = {
			f8: 0,
			fA: 0,
			i: this.rM[0].i,
			j: Math.floor(.8 * this.j),
			aEb: "Reload",
			font: this.rM[0].font,
			aGW: "rgba(0,100,0,0.8)",
			fontSize: this.rM[0].fontSize
		}, this.rM[6] = {
			f8: 0,
			fA: 0,
			i: this.rM[1].i,
			j: this.rM[5].j,
			aEb: "Back",
			font: this.rM[0].font,
			aGW: "rgba(0,0,0,0.8)",
			fontSize: this.rM[0].fontSize
		}, this.aAH()
	}, this.aAH = function() {
		this.fA = Math.floor(.54 * h.j), this.rM[0].f8 = Math.floor(.5 * h.i - .5 * this.i), this.rM[1].f8 = this.rM[0].f8 + this.rM[0].i + this.gap, this.rM[2].f8 = this.rM[3].f8 = this.rM[0].f8, this.rM[4].f8 = this.rM[5].f8 = this.rM[0].f8,
			this.rM[6].f8 = this.rM[1].f8, this.rM[0].fA = Math.floor(.54 * h.j), this.rM[1].fA = this.rM[0].fA, this.rM[2].fA = Math.floor((h.j - this.rM[2].j - this.rM[3].j - this.gap) / 2), this.rM[3].fA = this.rM[2].fA + this.rM[2].j + this
			.gap, this.rM[4].fA = Math.floor((h.j - this.rM[4].j - this.rM[5].j - this.gap) / 2), this.rM[5].fA = this.rM[6].fA = this.rM[4].fA + this.rM[4].j + this.gap
	}, this.aGX = function() {
		aGY(0), aGY(1)
	}, this.aGZ = function() {
		aGY(2), aGY(3)
	}, this.aGa = function() {
		aGY(4), aGY(5), aGY(6)
	}, this.a2J = function(f8, fA, mg) {
		var aB = -1;
		return 0 === aa.a20() ? aB = this.a2n(f8, fA, 0, 2) : 3 === aa.a20() ? aB = this.a2n(f8, fA, 3, 1) : 5 === aa.a20() && (aB = this.a2n(f8, fA, 5, 2)), aGR !== aB && (aGR = aB, mg) && (bf.dl = !0), -1 !== aB && (aT.ro(), !0)
	}, this.a2n = function(f8, fA, aGb, size) {
		for (var aB = aGb; aB < aGb + size; aB++)
			if (f8 >= this.rM[aB].f8 && fA >= this.rM[aB].fA && f8 <= this.rM[aB].f8 + this.rM[aB].i && fA <= this.rM[aB].fA + this.rM[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aGd, aGe, a7t, aGf, aGg, aGh, aGi, aGj, aGk, a7s, aGl, aGm, aGn, aGo = 1;

	function aGq(aGr) {
		!aGr && 1 === aGn && aGo ? (aGo = 0, b0.y.close(aGn, 3280)) : aGn = (aGn + 1) % b0.y.aGs, aGm = bf.eQ, b0.y.aGt(aGn, 4) && b0.aFT.aGu(aGn)
	}

	function aGv() {
		0 === aGn ? o.a28(3249) : aGq()
	}

	function aH0(fA, a9z, tw) {
		var nK = Math.floor((h.i - aGf) / 2) + aGi,
			nX = nK + Math.floor(tw * (aGf - 2 * aGi));
		vR.lineWidth = a9z, vR.beginPath(), vR.moveTo(nK, fA), vR.lineTo(nX, fA), vR.lineTo(Math.floor(nK - aGi + tw * aGf), fA + a7t), vR.lineTo(nK - aGi, fA + a7t), vR.closePath()
	}
	this.aGp = 1, this.dd = function() {
		aa.setState(6), aGd = 0, aGe = 1, aGj = "rgba(0,220,120,0.4)", aGk = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aGo = 1, aGn = this.aGp - 1, aGq(1)
	}, this.resize = function() {
		aGf = Math.floor((a0.a1.i9() ? .5 : .25) * h.iA), aGg = aGf + 12, a7t = Math.floor(.125 * aGf), aGi = 3 * a7t, aGh = Math.floor(.225 * aGf), aGl = Math.floor(.3 * a7t), a7s = bA.qn.se(0, aGl)
	}, this.a24 = function(a1v) {
		a1v === aGn && aGv()
	}, this.hD = function(f8, fA) {
		var nK = Math.floor((h.i - aGg) / 2),
			nL = Math.floor(.5 * (h.j - bc.gap - a7t - aGh)) + a7t + bc.gap;
		return nK < f8 && f8 < nK + aGg && nL < fA && fA < nL + aGh && (this.a2y(), aY.a2J(f8, fA, !1), !0)
	}, this.a2y = function() {
		b0.y.a29(3260), t.y.z()
	}, this.eU = function() {
		6 === aa.a20() && (bf.eQ > aGm + 12e3 && aGv(), 100 < (aGd += .07 * aGe * (aGd < 16 ? 5 + aGd : 84 < aGd ? 105 - aGd : 17)) ? (aGd = 100, aGe = -1) : aGd < 0 && (aGd = 0, aGe = 1), aGj = "rgba(0," + Math.floor(190 - 1.9 * aGd) + "," +
			Math.floor(120 - 1.2 * aGd) + "," + (.4 + .004 * aGd) + ")", aGk = "rgba(0," + Math.floor(1.9 * aGd) + "," + Math.floor(1.2 * aGd) + "," + (.8 - .004 * aGd) + ")", bf.dl = !0)
	}, this.vQ = function() {
		var f8 = Math.floor((h.i - aGg) / 2),
			fA = Math.floor(.5 * (h.j - bc.gap - a7t - aGh));
		! function(title, fA, a9z, tw) {
			vR.fillStyle = aGk, aH0(fA, a9z, 1), vR.fill(), vR.fillStyle = aGj, aH0(fA, a9z, tw), vR.fill(), vR.strokeStyle = bB.nu, aH0(fA, a9z, 1), vR.stroke(),
				function(aH2, fA) {
					bA.qn.textAlign(vR, 1), bA.qn.textBaseline(vR, 1), vR.font = a7s, vR.fillStyle = bB.nu, vR.fillText(aH2, Math.floor(.5 * h.i), Math.floor(fA + .58 * a7t))
				}(title, fA)
		}(L(130), fA, 3, aGd / 100),
		function(f8, fA, i, j, aEb) {
			vR.fillStyle = bB.np, vR.fillRect(f8, fA, i, j), vR.lineWidth = 3, vR.strokeStyle = bB.nu, vR.strokeRect(f8, fA, i, j);
			var f1 = Math.floor(.3 * j);
			bA.qn.textAlign(vR, 1), bA.qn.textBaseline(vR, 1), vR.font = bA.qn.se(0, f1), vR.fillStyle = bB.nu, vR.fillText(aEb, Math.floor(f8 + i / 2), Math.floor(fA + j / 2 + .1 * f1))
		}(f8, fA + a7t + bc.gap, aGg, aGh, L(37))
	}
}

function cR() {
	var a1r = 0;
	this.dd = function() {
		aY.dd(), a1r = 0
	}, this.setState = function(aH3) {
		a1r = aH3
	}, this.a20 = function() {
		return a1r
	}, this.aH4 = function() {
		this.setState(8), t.x()
	}, this.a2r = function(e) {
		if (!bS.xL) return !1;
		if (!(bf.eQ < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aH5()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1r) return !0;
					if (7 === a1r) return !0
				}
			}
			return !1
		}
	}, this.aH6 = function() {
		bZ.resize()
	}, this.aH5 = function() {
		return !!bZ.s4()
	}, this.hD = function(f8, fA) {
		!bS.xL || bZ.hD(f8, fA) || 6 === a1r && aZ.hD(f8, fA) || bY.hD(f8, fA) || aT.hD(f8, fA)
	}, this.a2J = function(f8, fA) {
		!aT.aAA && aY.a2J(f8, fA, !0) || aT.a2J(f8, fA)
	}, this.click = function(f8, fA) {
		aT.a2i()
	}, this.a2M = function(f8, fA, deltaY) {}, this.aH7 = function() {
		aY.aAH(), bf.dl = !0
	}, this.vQ = function() {
		8 !== a1r && 10 !== a1r && (vR.imageSmoothingEnabled = !0, this.yu(), 0 !== a1r && (aT.vQ(), aO.vQ(), this.aH8(), bY.vQ()), 0 !== a1r && 6 === a1r && aZ.vQ(), bZ.vQ(), t.vQ())
	}, this.yu = function() {
		var aHA, aH9;
		if (__fx.makeMainMenuTransparent) vR.clearRect(0, 0, h.i, h.j);
		else bS.xL ? (aH9 = h.i / bS.fC, aHA = h.j / bS.fD, vR.setTransform(aH9 = aHA < aH9 ? aH9 : aHA, 0, 0, aH9, Math.floor((h.i - aH9 * bS.fC) / 2), Math.floor((h.j - aH9 * bS.fD) / 2)), vR.drawImage(bS.xN, 0, 0), vR.setTransform(1, 0, 0, 1,
			0, 0), vR.fillStyle = bB.np) : vR.fillStyle = bB.nl, vR.fillRect(0, 0, h.i, h.j)
	}, this.aH8 = function() {
		var fA = Math.floor(.3 * h.j),
			canvas = ab.aHB("territorial.io"),
			i1 = (i1 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i1,
			f8 = (vR.globalAlpha = .15, vR.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i1 * canvas.width))),
			f8 = Math.floor(f8 / i1),
			fA = Math.floor(fA - .5 * canvas.height * i1),
			fA = Math.floor(fA / i1);
		vR.setTransform(i1, 0, 0, i1, f8, fA), vR.drawImage(canvas, f8, fA), vR.setTransform(1, 0, 0, 1, 0, 0), vR.globalAlpha = 1, vR.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aEP = 0;
	var aHD, aHE, aHF, aHG, aHH, aHI = this.aHC = 0;

	function aHL() {
		aHG = aHH = null, aHI = 0
	}
	this.dd = function(rs, aEM, aEN) {
		t.x(), bn.uU(), aa.setState(10), aHG = rs, aHH = aEM, aHI = aEN, this.aEP = rs.aEP, this.aHC = aEN, aHD = 0, aHE = bf.eQ + 4500, b0.y.a25 = rs.a25, b0.y.a1y === rs.a25 ? (console.log("direct pass"), aHF = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a1y, 3247), aHF = 2, b0.y.aGt(rs.a25, 5) && b0.pH.aHJ()), vR.imageSmoothingEnabled = !0, aa.yu();
		aEM = ab.aHB("loading"), aEN = (a0.a1.i9() ? .396 : .25) * h.iA / aEM.width;
		vR.setTransform(aEN, 0, 0, aEN, Math.floor((h.i - aEN * aEM.width) / 2), Math.floor((h.j - aEN * aEM.height) / 2)), vR.imageSmoothingEnabled = !1, vR.drawImage(aEM, 0, 0), vR.setTransform(1, 0, 0, 1, 0, 0)
	}, this.me = function() {
		0 < aHF && bf.eQ > aHE && (aHF--, aHE += 4500, 0 === bf.aHM) && 0 === bf.kI() && b0.y.aGt(b0.y.a25, 5)
	}, this.aHN = function() {
		return 10 === aa.a20() && (bn.aDb.aEQ(aHG, aHH, aHI), aHL(), !0)
	}, this.aHO = function() {
		10 === aa.a20() && 2 <= ++aHD && (bn.aDb.aEQ(aHG, aHH, aHI), aHL())
	}
}

function cS() {
	var aHQ, canvas, a18, aHR;

	function aHX(e9, name, aHY, qU) {
		a18[e9] = name, canvas[e9] = new Image, canvas[e9].onload = function() {
			! function(e9, aHY) {
				var a4c, a4d = null;
				7 === aHY ? a4c = bA.a34.a4f : 8 === aHY ? (a4c = bA.a34.a4i, a4d = .1) : 3 === aHY ? (a4c = bA.a34.a4g, a4d = .06) : 5 === aHY ? a4c = bA.a34.a4j : 6 === aHY ? a4c = bA.a34.a4e : 4 === aHY && (a4c = bA.a34.a4k);
				canvas[e9] = bA.a34.a4b(canvas[e9], a4c, a4d)
			}(e9, aHY), aHa()
		}, canvas[e9].onerror = function(e) {
			console.error("Error loading image at index", e9, "Error:", e), aHa()
		}, canvas[e9].src = "data:image/png;base64," + qU
	}

	function aHa() {
		aHQ--, aHU()
	}

	function aHU() {
		0 === aHQ && (aHQ = -1, aHW(), bf.dl = !0, canvas[7] = aHR, canvas[8] = aHR, canvas[9] = aHR, canvas[10] = aHR, 5 === t.t4) && t.a5q().aHc.resize()
	}

	function aHW() {
		aL.a62(), bY.aDR([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xQ = new zH, aj.xQ.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aHQ = 23, canvas = new Array(aHQ), a18 = new Array(aHQ), (aHR = document.createElement("canvas")).width = 1;
			for (var aB = aHQ - (aHR.height = 1); 0 <= aB; aB--) canvas[aB] = aHR;
			aHW(), aHX(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHX(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHX(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHX(3, "orders", 6,
					"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"
					), aHX(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHX(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHX(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHX(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHX(8,
					"googleplay", 3,
					"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"
					), aHX(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHX(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHX(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHX(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHX(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHX(14, "bestPlayer", 5,
					"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"
					), aHX(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHX(16, "apple", 3,
					"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"
					), aHX(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHX(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHX(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHX(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHX(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHX(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e9) {
		return canvas[e9]
	}, this.aHB = function(name) {
		for (var aB = a18.length - 1; 0 <= aB; aB--)
			if (a18[aB] === name) return canvas[aB];
		return aHR
	}, this.tW = function() {
		return aHQ <= 0
	}, this.aHT = function() {
		aHQ = 0, aHU()
	}
}

function cT() {
	var aHf, aHg, aHh, aHi, aHj, aHk, aHl, aHm, aHn, aHo, aHd = [
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
		aHe = [
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

	function aHu(jb, nc) {
		for (var aB = jb; aB < nc; aB++) aHf[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aHg[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aHh[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aHt(jb, nc) {
		for (var colorsData = aD.data.colorsData, aB = jb; aB < nc; aB++) {
			var fS = colorsData[aB];
			aHf[aB] = 4 * (fS >> 12), aHg[aB] = 4 * (fS >> 6 & 63), aHh[aB] = 4 * (63 & fS)
		}
	}

	function aIF(ef, aIH) {
		aCm[ef] = 0, aCm[ef + 1] = 0, aCm[ef + 2] = aIH, aCm[ef + 3] = 0, aII(ef)
	}

	function aII(ef) {
		var f8;
		bb.nk || (f8 = ac.yv(ef), ef = ac.yw(ef), bb.nk = f8 >= ba.aCl[0] && f8 <= ba.aCl[2] && ef >= ba.aCl[1] && ef <= ba.aCl[3])
	}
	this.f3 = new Int32Array(4), this.de = function() {
		var f3 = this.f3;
		f3[0] = -4 * bS.fC, f3[1] = 4, f3[2] = -f3[0], f3[3] = -f3[1]
	}, this.dd = function() {
		if (aHf ? (aHf.fill(0), aHg.fill(0), aHh.fill(0), aHi.fill(0), aHj.fill(0), aHk.fill(0), aHl.fill(0), aHm.fill(0), aHn.fill(0), aHo.fill(0), this.a98.fill(0)) : (aHf = new Uint8Array(aD.ey), aHg = new Uint8Array(aD.ey), aHh =
				new Uint8Array(aD.ey), aHi = new Uint8Array(aD.ey), aHj = new Uint8Array(aD.ey), aHk = new Uint8Array(aD.ey), aHl = new Uint8Array(aD.ey), aHm = new Uint8Array(aD.ey), aHn = new Uint8Array(aD.ey), aHo = new Uint8Array(aD.ey), this
				.a98 = new Uint8Array(aD.ey)), aD.hu)
			for (var aBO = bg.aBO, aB = aD.ey - 1; 0 <= aB; aB--) {
				var eZ = aBO[aB],
					lG = bL.du((aHe[eZ][3] + 1) * ay.random(), ay.value(100));
				aHf[aB] = aHd[eZ][0] + lG * aHe[eZ][0], aHg[aB] = aHd[eZ][1] + lG * aHe[eZ][1], aHh[aB] = aHd[eZ][2] + lG * aHe[eZ][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aHt(0, aD.kL), aHu(aD.kL, aD.ey)) : aHu(0, aD.ey) : aHt(0, aD.ey);
		! function() {
			var aB, f4;
			for (aB = aD.ey - 1; 0 <= aB; aB--) f4 = bL.du(aHf[aB] + aHg[aB] + aHh[aB], 3), aHf[aB] += aI0(f4 - aHf[aB], 2), aHg[aB] += aI0(f4 - aHg[aB], 2), aHh[aB] += aI0(f4 - aHh[aB], 2), aHf[aB] -= aHf[aB] % 4, aHg[aB] -= aHg[aB] % 4, aHh[
				aB] -= aHh[aB] % 4
		}(),
		function() {
			for (var f1 = aD.ey, aI1 = aHf, aI2 = aHg, aI3 = aHh, aI4 = aHi, aB = 0; aB < f1; aB++) aI1[aB] += aB >> 7, aI2[aB] += aB >> 5 & 3, aI3[aB] += aB >> 3 & 3, aI4[aB] = 7 & aB
		}(), this.aHx(),
			function() {
				for (var f1 = aD.ey, aI5 = aHj, aI6 = aHk, aI7 = aHl, aI1 = aHf, aI2 = aHg, aI3 = aHh, aB = 0; aB < f1; aB++) {
					var e8 = aI1[aB],
						tS = aI2[aB],
						fL = aI3[aB];
					60 <= e8 + tS + fL ? (aI5[aB] = Math.max(e8 - 40, 3 & e8), aI6[aB] = Math.max(tS - 40, 3 & tS), aI7[aB] = Math.max(fL - 40, 3 & fL)) : (aI5[aB] = e8 + 40, aI6[aB] = tS + 40, aI7[aB] = fL + 40)
				}
			}(),
			function() {
				for (var f1 = aD.ey, aI8 = aHm, aI9 = aHn, aIA = aHo, aI1 = aHf, aI2 = aHg, aI3 = aHh, aB = 0; aB < f1; aB++) {
					var e8 = aI1[aB],
						tS = aI2[aB],
						fL = aI3[aB];
					688 <= e8 + tS + fL ? (aI8[aB] = e8 - 88, aI9[aB] = tS - 88, aIA[aB] = fL - 88) : (aI8[aB] = Math.min(e8 + 88, 252 + (3 & e8)), aI9[aB] = Math.min(tS + 88, 252 + (3 & tS)), aIA[aB] = Math.min(fL + 88, 252 + (3 & fL)))
				}
			}()
	}, this.a80 = function(player) {
		var g = bO.fZ;
		return g[0] = aHf[player], g[1] = aHg[player], g[2] = aHh[player], g
	}, this.aHx = function() {
		for (var aB = aD.ey - 1; 0 <= aB; aB--) this.a98[aB] = aHf[aB] + aHg[aB] + aHh[aB] < 280 ? 0 : 1
	}, this.yv = function(ef) {
		return bL.du(ef, 4) % bS.fC
	}, this.yw = function(ef) {
		return bL.du(ef, 4 * bS.fC)
	}, this.yT = function(f8, fA) {
		return Math.floor(4 * (fA * bS.fC + f8))
	}, this.yj = function(ef) {
		var f3 = this.f3;
		return this.aIB(ef + f3[0]) || this.aIB(ef + f3[1]) || this.aIB(ef + f3[2]) || this.aIB(ef + f3[3])
	}, this.fP = function(ef) {
		var f3 = this.f3;
		return this.f6(ef + f3[0]) || this.f6(ef + f3[1]) || this.f6(ef + f3[2]) || this.f6(ef + f3[3])
	}, this.yh = function(ef, player) {
		var f3 = this.f3;
		return this.aIC(ef + f3[0], player) || this.aIC(ef + f3[1], player) || this.aIC(ef + f3[2], player) || this.aIC(ef + f3[3], player)
	}, this.ga = function(ef) {
		return 208 <= aCm[ef + 3]
	}, this.yp = function(player, ef) {
		return this.ga(ef) && this.ys(player, ef)
	}, this.ys = function(player, ef) {
		return player === this.et(ef)
	}, this.aID = function(ef) {
		return 208 <= aCm[ef + 3] && aCm[ef + 3] < 224
	}, this.jW = function(ef) {
		return 224 <= aCm[ef + 3] && aCm[ef + 3] < 248
	}, this.yi = function(ef) {
		for (var f3 = this.f3, aB = 3; 0 <= aB; aB--)
			if (this.iE(ef + f3[aB])) return !0;
		return !1
	}, this.ew = function(ef) {
		return this.ga(ef) || this.es(ef)
	}, this.iE = function(ef) {
		return 0 === aCm[ef + 3] && 2 === aCm[ef + 2]
	}, this.es = function(ef) {
		return 0 === aCm[ef + 3] && 1 === aCm[ef + 2]
	}, this.xY = function(ef) {
		return 0 === aCm[ef + 3] && 3 === aCm[ef + 2]
	}, this.f6 = function(ef) {
		return 0 === aCm[ef + 3] && 5 === aCm[ef + 2]
	}, this.aIB = function(ef) {
		return 0 === aCm[ef + 3] && 3 <= aCm[ef + 2]
	}, this.ej = function(ef) {
		return (aCm[ef] >> 1 << 8) + aCm[ef + 1]
	}, this.aIE = function(ef) {
		return 1 & aCm[ef]
	}, this.aIC = function(ef, player) {
		return this.es(ef) || this.ga(ef) && player !== this.et(ef)
	}, this.et = function(ef) {
		return aCm[ef] % 4 * 128 + aCm[ef + 1] % 4 * 32 + aCm[ef + 2] % 4 * 8 + aCm[ef + 3] % 8
	}, this.yq = function(ef) {
		aIF(ef, 1)
	}, this.aIG = function(ef) {
		aIF(ef, 2)
	}, this.yU = function(ef, player) {
		aCm[ef] = aHf[player], aCm[ef + 1] = aHg[player], aCm[ef + 2] = aHh[player], aCm[ef + 3] = 208 + aHi[player], aII(ef)
	}, this.gV = function(ef, player) {
		aCm[ef] = aHj[player], aCm[ef + 1] = aHk[player], aCm[ef + 2] = aHl[player], aCm[ef + 3] = 224 + aHi[player], aII(ef)
	}, this.jX = function(ef, player) {
		aCm[ef] = aHm[player], aCm[ef + 1] = aHn[player], aCm[ef + 2] = aHo[player], aCm[ef + 3] = 248 + aHi[player], aII(ef)
	}
}

function cs() {
	var aIJ = 0,
		aIL = new Uint16Array(64);

	function w3(a66) {
		aIJ -= 2;
		for (var aB = a66; aB < aIJ; aB += 2) aIL[aB] = aIL[aB + 2], aIL[aB + 1] = aIL[aB + 3]
	}
	this.dd = function() {
		aIJ = 0
	}, this.eU = function() {
		var aB, jU, ia;
		if (0 !== aIJ)
			if (0 === ag.mu[aD.el]) aIJ = 0;
			else if (0 === ad.g7(aD.el)) aIJ = 0;
		else
			for (aB = aIJ - 2; 0 <= aB; aB -= 2)(jU = aIL[aB]) < aD.ey && 0 === ag.mu[jU] ? w3(aB) : (ia = aIL[aB + 1], (jU >= aD.ey && bs.aIN(aD.el) || jU < aD.ey && bs.aIO(aD.el, jU)) && (b8.hQ.hX(ia, jU), w3(aB)))
	}, this.hY = function(jU, ia) {
		! function(jU, ia) {
			for (var aB = 0; aB < aIJ; aB += 2)
				if (aIL[aB] === jU) return aIL[aB + 1] = Math.min(aIL[aB + 1] + ia, 1023), 1;
			return
		}(jU, ia) && 64 !== aIJ && (aIL[aIJ] = jU, aIL[aIJ + 1] = ia, aIJ += 2)
	}
}

function cU() {
	function aIV(player) {
		var dt;
		bA.gM.a4D(player) && (dt = ag.h2[player] - ag.a4I[player] + ad.aIX(player), bd.gQ(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.h2[player] = 0, ag.a4I[player] = 0
	}

	function aIe() {
		aX.show(!1, !1, !1, !0), aW.aBu(), bR.a0X.a1J()
	}

	function aIS(player, aId) {
		for (var aB = aId.length - 1; 0 <= aB; aB--) ad.aIg(aId[aB], player)
	}

	function aIU(player) {
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
					ac.yp(player, gY) && ac.yq(gY)
				}
		}
		iu[player] = iw[player] = 0, it[player] = iv[player] = Math.max(fC, bS.fD)
	}
	this.dm = function(gY) {
		var player, dt = ag.go[gY] + ag.yP[gY];
		bN.y.kP[gY] ? dt && (aIS(player = gY, ad.aIT(player)), aIU(player), aF.gO(player), ad.clear(player), aIV(player), function(player) {
			ag.yP[player] = 0, ag.gS[player] = [], ag.gg[player] = [], ag.gh[player] = [], ag.fQ[player] = []
		}(player)) : !dt && ag.gS[gY].length || this.aIR(gY)
	}, this.aIR = function(player) {
		! function(player) {
			bA.gM.ji(player) || (ag.a1N[player] = bi.a1d.aIc(), aD.a0o++);
			var aId = ad.aIT(player);
			0 === aId.length ? bA.gM.a4A(player) && aIe() : (aIS(player, aId), function(player, aId) {
				var aIi = aId[function(aId) {
					var aB, e9 = 0;
					for (aB = aId.length - 1; 1 <= aB; aB--) ag.go[aId[aB]] > ag.go[aId[e9]] && (e9 = aB);
					return e9
				}(aId)];
				9 === aD.kd && (1 === bg.ez[player] ? ay.kD(8) && az.aIj(aIi) : aE.hj[player] && (aN.a7U(765, 0), aN.a1A(280, L(131, [ag.a1O[aIi], ag.a1O[player]]), 765, aIi, bB.nl, bB.p6, -1, !0)));
				if (bA.gM.a4A(player)) aIe(), aN.a0z(aIi, 1);
				else {
					for (var aB = aId.length - 1; 0 <= aB; aB--)
						if (bA.gM.a4D(aId[aB]) && (bd.mq[4 - bA.gM.ji(player)]++, bA.gM.a4A(aId[aB]))) return aN.a0z(player, 0);
					bA.gM.ji(player) || aN.a7E(0, player, aIi)
				}
			}(player, aId))
		}(player), aIU(player), aIV(player),
			function(player) {
				ag.mu[player] = 0, ag.gS[player] = null, ag.gg[player] = null, ag.gh[player] = null, ag.fQ[player] = null
			}(player), aF.gO(player), ad.clear(player), bN.aIa.aIb(player)
	}
}

function cx() {
	var input;

	function aIk(e) {
		(e = e.target.files) && 0 < e.length && b6.aIn(e[0])
	}

	function aIr(e) {
		var eZ = new Image;
		eZ.onload = aIs, eZ.src = e.target.result
	}

	function aIs(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aIu = bj.eN.data[162].value,
			max = Math.min(bS.aIv, aIu),
			aIu = (max = a0.id || bJ.rF() ? Math.min(1400, aIu) : max) / Math.max(i, j);
		if (aIu < 1 && (i = Math.floor(aIu * i + .125), j = Math.floor(aIu * j + .125)), max < i || max < j || i < 10 || j < 10) aIu = "Invalid Image Dimensions!", a0.wA ? a0.wA.showToast(aIu) : alert(aIu);
		else {
			for (var max = document.createElement("canvas"), aIu = (max.width = i, max.height = j, max.getContext("2d")), aIx = document.createElement("canvas"), aIy = (aIx.width = e.width, aIx.height = e.height, aIx.getContext("2d")), e = (aIy
					.drawImage(e, 0, 0), aIy.getImageData(0, 0, aIx.width, aIx.height)), aIy = aIu.createImageData(i, j), src = e.data, aJ1 = aIy.data, a9j = aIx.width / i, a9k = aIx.height / j, fA = 0; fA < j; fA++)
				for (var f8 = 0; f8 < i; f8++) {
					var aJ2 = Math.floor(f8 * a9j),
						aJ2 = 4 * (Math.floor(fA * a9k) * aIx.width + aJ2),
						aJ5 = 4 * (fA * i + f8);
					aJ1[aJ5] = src[aJ2], aJ1[1 + aJ5] = src[1 + aJ2], aJ1[2 + aJ5] = src[2 + aJ2], aJ1[3 + aJ5] = 255
				}
			aIu.putImageData(aIy, 0, 0), 20 === t.t4 && t.a5q().aIs(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aIk
	}, this.uU = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aIl = function() {
		input.click()
	}, this.aIn = function(aIo) {
		var g = aIo.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aIr, g.readAsDataURL(aIo))
	}
}

function cv() {
	this.aJ6 = null, this.dd = function() {
		10 !== aD.kd ? this.aJ6 = null : this.aJ6 = new Uint32Array(aD.ey)
	}, this.eU = function() {
		10 === aD.kd && this.lA()
	}, this.lA = function() {
		for (var gY, target, aC7, aJ6 = this.aJ6, a0a = al.kw, a4J = ag.h2, aB = al.kr - 1; 0 <= aB; aB--)(gY = a0a[aB]) >= aD.kL || (target = Math.max(bL.du(a4J[gY], 4), 2048), aC7 = Math.max(ae.aC8(gY), 100), aJ6[gY] += bL.du(aC7 * target,
			1e4), aJ6[gY] > target && (aJ6[gY] = target))
	}, this.a4P = function(player, hj) {
		return hj > this.aJ6[player] ? (hj = this.aJ6[player], this.aJ6[player] = 0) : this.aJ6[player] -= hj, hj
	}
}

function dW() {
	function aJ8(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aJG, g.readAsText(e))
	}

	function aJG(e) {
		var aJK;
		aD.a0m || (e = JSON.parse(e.target.result), aJK = aD.data = new a5G, aJL(e, aJK, "mapType", 0, 2), aJL(e, aJK, "mapProceduralIndex", 0, 255), aJL(e, aJK, "mapRealisticIndex", 0, 255), aJL(e, aJK, "mapSeed", 0, 16383), function(aJJ, aJK, gZ,
				max) {
				aJJ = aJJ[gZ];
				aJK[gZ] = aJR(aJJ) ? aJJ.slice(0, max) : aJK[gZ]
			}(e, aJK, "mapName", 20), function(aJJ, aJK, gZ) {
				var aIt;
				2 === aJK.mapType && (!aJR(aJJ = aJJ[gZ]) || aJJ.length <= 20 ? aJK.mapType = 0 : ((aIt = new Image).onload = function() {
					b9.aJS.aJT(aIt, 1), aIt.onload = null, aIt = null
				}, aIt.src = aJJ))
			}(e, aJK, "canvas"), aJL(e, aJK, "passableWater", 0, 1), aJL(e, aJK, "passableMountains", 0, 1), aJL(e, aJK, "playerCount", 1, 512), aJL(e, aJK, "humanCount", 1, 1), aJL(e, aJK, "selectedPlayer", 0, 0), aJL(e, aJK, "gameMode", 0, 1),
			aJL(e, aJK, "playerMode", 0, 0), aJL(e, aJK, "battleRoyaleMode", 0, 0), aJL(e, aJK, "numberTeams", 0, 8), aJL(e, aJK, "isZombieMode", 0, 0), aJL(e, aJK, "isContest", 0, 0), aJL(e, aJK, "isReplay", 0, 0), aJO(e, aJK, "elo", 16, 2,
				16383), aJL(e, aJK, "colorsType", 0, 1), aJL(e, aJK, "colorsPersonalized", 0, 1), aJO(e, aJK, "colorsData", 32, 512, 262143), aJL(e, aJK, "selectableColor", 0, 1), aJO(e, aJK, "teamPlayerCount", 16, 9, 512), aJL(e, aJK,
				"neutralBots", 0, 1), aJL(e, aJK, "botDifficultyType", 0, 3), aJL(e, aJK, "botDifficultyValue", 0, 15), aJO(e, aJK, "botDifficultyTeam", 8, 9, 15), aJO(e, aJK, "botDifficultyData", 8, 512, 15), aJL(e, aJK, "spawningType", 0, 2),
			aJL(e, aJK, "spawningSeed", 0, 16383), aJO(e, aJK, "spawningData", 16, 1024, 4095), aJL(e, aJK, "selectableSpawn", 0, 1), aJL(e, aJK, "playerNamesType", 0, 2),
			function(aJJ, aJK, gZ, size, max) {
				var a3P = aJJ[gZ];
				if (Array.isArray(a3P)) {
					for (var a3Q = new Array(size), f1 = Math.min(a3P.length, size), aB = 0; aB < f1; aB++) a3Q[aB] = aJR(a3P[aB]) ? a3P[aB].slice(0, max) : "";
					a3Q.fill("", f1), aJK[gZ] = a3Q
				}
			}(e, aJK, "playerNamesData", 512, 20), aJL(e, aJK, "selectableName", 0, 1), aJL(e, aJK, "aIncomeType", 0, 2), aJL(e, aJK, "aIncomeValue", 0, 255), aJO(e, aJK, "aIncomeData", 8, 512, 255), aJL(e, aJK, "tIncomeType", 0, 2), aJL(e, aJK,
				"tIncomeValue", 0, 255), aJO(e, aJK, "tIncomeData", 8, 512, 255), aJL(e, aJK, "iIncomeType", 0, 2), aJL(e, aJK, "iIncomeValue", 0, 255), aJO(e, aJK, "iIncomeData", 8, 512, 255), aJL(e, aJK, "sResourcesType", 0, 2), aJL(e, aJK,
				"sResourcesValue", 0, 2047), aJO(e, aJK, "sResourcesData", 16, 512, 2047), t.x(), t.y.aJI[0] = 0, t.u(19))
	}

	function aJL(aJJ, aJK, gZ, min, max) {
		aJJ = aJJ[gZ];
		aJK[gZ] = "number" == typeof aJJ && min <= aJJ && aJJ <= max ? Math.floor(aJJ) : aJK[gZ]
	}

	function aJR(qU) {
		return "string" == typeof qU
	}

	function aJO(aJJ, aJK, gZ, aJU, size, max) {
		var a3P = aJJ[gZ];
		if (Array.isArray(a3P)) {
			for (var a3Q = new(8 === aJU ? Uint8Array : 16 === aJU ? Uint16Array : Uint32Array)(size), f1 = Math.min(a3P.length, size), aB = 0; aB < f1; aB++) a3Q[aB] = bL.i8(a3P[aB], 0, max);
			aJK[gZ] = a3Q
		}
	}
	this.aJ7 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJ8, input.click()
	}, this.aJ9 = function() {
		for (var aJC, aDO, a5o = aD.data, keys = Object.keys(a5o), aJA = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a5o[key] instanceof Uint8Array || a5o[key] instanceof Uint16Array || a5o[key] instanceof Uint32Array ? aJA[key] = Array.from(a5o[key]) : aJA[key] = a5o[key]
		}
		aJA.canvas = 2 === aJA.mapType && aJA.canvas ? aJA.canvas.toDataURL() : null, aJC = aJA, aJC = JSON.stringify(aJC, null, 2), aJC = new Blob([aJC], {
			type: "application/json"
		}), (aDO = document.createElement("a")).href = URL.createObjectURL(aJC), aDO.download = "tt_scenario.json", aDO.click()
	}
}

function cY() {
	var aJV, aJW, size, jU, hj, aJX;

	function aJY(player) {
		return player < aD.kL ? aJV * player : aJV * aD.kL + aJW * (player - aD.kL)
	}
	this.dd = function() {
		aJV = aD.kL < 16 ? 12 : 8, aJW = 4;
		var f1 = aJY(aD.ey);
		size = new Uint8Array(aD.ey), jU = new Uint16Array(f1), hj = new Uint32Array(f1), aJX = new Uint8Array(f1)
	}, this.qL = function(a8c, aJZ) {
		var aJa = this.h3(a8c, aJZ),
			aJZ = (this.h1(a8c, aJZ, 0), bA.gM.gP(a8c, aJa));
		bd.gQ(a8c, aJa - aJZ, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aIg = function(player, aJZ) {
		var aJd, aJZ = function(player, aJZ) {
			var aB, lG = aJY(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jU[lG + aB] === aJZ) return aB;
			return size[player]
		}(player, aJZ);
		aJZ !== size[player] && (aJd = hj[aJY(player) + aJZ], this.gR(player, aJZ), this.eY(player, aJd, aD.ey))
	}, this.jg = function(player, aJZ) {
		for (var lG = aJY(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jU[lG + aB] === aJZ) return !0;
		return !1
	}, this.jz = function(player) {
		return player < aD.kL ? size[player] < aJV : size[player] < aJW
	}, this.g7 = function(player) {
		return size[player]
	}, this.gC = function(player, aB) {
		return jU[aJY(player) + aB]
	}, this.gD = function(player, aB) {
		return hj[aJY(player) + aB]
	}, this.h3 = function(player, aJZ) {
		for (var lG = aJY(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jU[lG + aB] === aJZ) return hj[lG + aB];
		return 0
	}, this.aIX = function(player) {
		for (var lG = aJY(player), fS = 0, aB = size[player] - 1; 0 <= aB; aB--) fS += hj[lG + aB];
		return fS
	}, this.h1 = function(player, aJZ, aJd) {
		for (var lG = aJY(player), aB = size[player] - 1; 0 <= aB; aB--) jU[lG + aB] === aJZ && (hj[lG + aB] = aJd)
	}, this.gm = function(player, aB, aJd) {
		hj[aJY(player) + aB] = Math.max(aJd, 0)
	}, this.gn = function(player, aB) {
		aJX[aJY(player) + aB] = 0
	}, this.gE = function(player, aB) {
		return aJX[aJY(player) + aB]
	}, this.eY = function(player, aJd, aJZ) {
		ao.j8.jx[player] = ao.j8.jx[aJZ] = 8, bA.gM.a4D(aJZ) && bd.mq[6 - bA.gM.ji(player)]++;
		for (var lG = aJY(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jU[lG + aB] === aJZ) return hj[lG + aB] += aJd, void(hj[lG + aB] = hj[lG + aB] > aD.a4L ? aD.a4L : hj[lG + aB]);
		jU[lG + size[player]] = aJZ, hj[lG + size[player]] = aJd, aJX[lG + size[player]] = 1, size[player]++, aJZ === aD.el ? aN.a0z(player, 5) : player < aD.kL && player === aD.el && af.a7G(aJZ)
	}, this.gR = function(player, e9) {
		var fK, lG;
		if (0 !== size[player])
			for (lG = aJY(player), size[player]--, fK = e9; fK < size[player]; fK++) jU[lG + fK] = jU[lG + fK + 1], hj[lG + fK] = hj[lG + fK + 1], aJX[lG + fK] = aJX[lG + fK + 1]
	}, this.aIT = function(player) {
		for (var fK, lG, aId = [], aB = al.kr - 1; 0 <= aB; aB--)
			for (lG = aJY(al.kw[aB]), fK = size[al.kw[aB]] - 1; 0 <= fK; fK--)
				if (jU[lG + fK] === player) {
					aId.push(al.kw[aB]);
					break
				} return aId
	}
}

function cZ() {
	var aJe;

	function aJg(player) {
		var e8, k0;
		return bA.gM.ji(player) && player < aD.kL ? 0 : (e8 = aJe[bL.du((aD.ey - 1) * ag.go[player], aD.k5)], bf.kI() < 1920 && (e8 = Math.max(bL.du(100 * (13440 - 6 * bf.kI()), 1920), e8)), k0 = ae.k1(player), ag.h2[player] > k0 && (e8 -= bL.du(2 *
			e8 * (ag.h2[player] - k0), k0)), Math.min(Math.max(e8, 0), 700))
	}

	function aJs(nW) {
		for (var go = ag.go, kw = al.kw, aB = al.kr - 1; 0 <= aB; aB--) {
			var gY = kw[aB];
			bA.gM.gP(gY, bL.du(nW * go[gY], 32))
		}
	}

	function aJp() {
		var xR = aD.el;
		bO.fW[0] = ag.h2[xR] - ag.a4I[xR]
	}

	function aJr(e9) {
		var xR = aD.el,
			xR = ag.h2[xR] - ag.a4I[xR] - bO.fW[0];
		ae.aAi += xR, bd.mq[e9] += xR
	}
	this.aAi = 0, this.dk = function() {
		for (var f1 = aD.ey, aB = (aJe = new Uint16Array(f1), 0); aB < f1; aB++) aJe[aB] = 100 + aJf(bL.du(25600 * aB, f1 - 4), 9)
	}, this.dd = function() {
		(this.aAi = 0) === aD.data.iIncomeType ? this.aC8 = aJg : 1 === aD.data.iIncomeType ? this.aC8 = function(player) {
			return bL.du(aD.data.iIncomeValue * aJg(player), 64)
		} : this.aC8 = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aJg(player), 64)
		}
	}, this.eU = function() {
		if (bf.kI() % 10 == 9 && (ae.aAi = 0, function() {
				aJp();
				for (var kw = al.kw, h2 = ag.h2, aB = al.kr - 1; 0 <= aB; aB--) {
					var gY = kw[aB],
						aJq = bL.du(ae.aC8(gY) * h2[gY], 1e4);
					bA.gM.gP(gY, Math.max(aJq, 1))
				}
				aJr(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aJp(), 1 === aD.data.aIncomeType)
						for (var go = ag.go, kw = al.kw, nW = aD.data.aIncomeValue, aB = al.kr - 1; 0 <= aB; aB--) {
							var gY = kw[aB];
							bA.gM.gP(gY, bL.du(nW * go[gY], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var go = ag.go, kw = al.kw, nW = aD.data.aIncomeData, aB = al.kr - 1; 0 <= aB; aB--) {
								var gY = kw[aB];
								bA.gM.gP(gY, bL.du(nW[gY] * go[gY], 128))
							}
						}();
					aJr(18)
				}
			}(), bf.kI() % 100 == 99)) {
			if (aJp(), 0 === aD.data.tIncomeType) aJs(32);
			else if (1 === aD.data.tIncomeType) aJs(aD.data.tIncomeValue);
			else
				for (var go = ag.go, kw = al.kw, nW = aD.data.tIncomeData, aB = al.kr - 1; 0 <= aB; aB--) {
					var gY = kw[aB];
					bA.gM.gP(gY, bL.du(nW[gY] * go[gY], 32))
				}
			aJr(8)
		}
	}, this.k1 = function(player) {
		return Math.min(100 * ag.go[player], aD.a5C)
	}, this.pK = function(player, pL) {
		bq.ph(player, pL, bO.fX[0], 0), bA.gM.gP(pL, bO.fX[0]), bd.pi(player, pL), af.aJi(player, bO.fX[0] + bO.fX[1]), af.pj(pL, bO.fX[0]), bA.gM.mV(player)
	}, this.aJj = function() {
		for (var f1 = al.kr, a0a = al.kw, lG = 0, a4J = ag.h2, aB = 0; aB < f1; aB++) lG += a4J[a0a[aB]];
		return lG
	}, this.aJk = function(aJl) {
		for (var gY, f1 = al.kr, a0a = al.kw, lG = 0, a4J = ag.h2, ez = bg.ez, aB = 0; aB < f1; aB++) ez[gY = a0a[aB]] === aJl && (lG += a4J[gY]);
		return lG
	}
}

function cb() {
	var aJw, aJx, aJy, aJz, aK0, aK1, aK2, aK3, aK4, aK5, aK6, aK7, aK8, aK9, aKA, aKB, aKC, aKD, aKF, aKG, aDH, aKH, aKI, aKP, aKQ, aKE = null,
		aKK = 0,
		aKL = !1,
		aKM = new Float32Array(4),
		aKN = 0,
		aKO = !0,
		aBD = 400,
		aKR = 0;

	function qq() {
		aK4 = Math.floor(+h.iA), aK5 = Math.floor(.5 * aK4)
	}

	function aKS() {
		var aB, aKX;
		for (vR.font = bA.qn.se(1, 100 * aK6), aKX = 80 / Math.floor(vR.measureText(bA.rm.a03(aD.a4L)).width), vR.font = bA.qn.se(1, 100), aB = aD.ey - 1; 0 <= aB; aB--) aK3[aB] = 100 / Math.floor(vR.measureText(ag.a1O[aB]).width), aK2[aB] = Math
			.min(aKX, aK3[aB])
	}

	function aKY(aB) {
		return !aKR || (aB = ag.h2[aB]) < 1e6 ? 1 : aB < 1e7 ? aKM[0] : aKM[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aKW(i2) {
		aKD = !1, aKC = 1, aKA = aKB = 0, aKO && (bA.qn.textAlign(i2, 1), bA.qn.textBaseline(i2, 1));
		for (var aKe, aKf, aB, aKg, fontSize, aKh, nK = ib / iB, nL = ic / iB, nX = (h.i + ib) / iB, nY = (h.j + ic) / iB, aKi = 0 !== ag.mu[aD.el] && !bA.gM.ji(aD.el), fK = al.kr - 1; 0 <= fK; fK--) aB = al.kw[fK], (fontSize = Math.floor(aK9 * iB *
			aKY(aB) * aK2[aB] * aK0[aB])) < aK8 || aK4 <= fontSize || aJy[aB] + aK0[aB] > nK && aJy[aB] < nX && aJz[aB] + aK1[aB] > nL && aJz[aB] < nY && (aKe = Math.floor(h.i * (aJy[aB] + aK0[aB] / 2 - nK) / (nX - nK)), aKf = Math.floor(h.j * (
			aJz[aB] + aK1[aB] / 2 - nL) / (nY - nL) - .1 * fontSize), aKg = ac.a98[aB], i2.font = bA.qn.se(1 === ag.a49[aB] ? 4 : 1, fontSize), i2.fillStyle = aKj(fontSize, aKg % 2), aKR ? aKk(i2, aB, fontSize, aKe, aKf, aKg) : aKl(aB,
			fontSize, aKe, aKf, i2), aKD = !0, 0 < aDH[aB] ? function(aKe, aKf, fontSize, aB, i2) {
			0 === k6[aB] ? aj.s3.zu(aKG[aB]) ? (function(aKe, aKf, fontSize, player, pW, i2) {
				for (var xy = aKf, i1 = (i2.globalAlpha = aKt(fontSize), aKY(player) * (aKR ? aKN : aK3[player])), xx = aKe - .5 * fontSize / i1 - .9 * fontSize, fL = 0; fL < 2; fL++) i2.fillText(aj.s3.zm(pW), xx, xy), xx = aKe + .5 *
					fontSize / i1 + .9 * fontSize;
				i2.globalAlpha = 1
			}(aKe, aKf, fontSize, aB, aKG[aB], i2), aKn(aKe, aKf, fontSize, 0, 0, i2)) : aj.s3.zw(aKG[aB]) ? (aKw(aKe, aKf, fontSize, aKG[aB], 0, i2), aKn(aKe, aKf, fontSize, 0, 1, i2)) : (aKw(aKe, aKf, fontSize, aKG[aB], 1, i2), aKn(aKe,
				aKf, fontSize, 1, 0, i2)) : aKw(aKe, aKf, fontSize, aKG[aB], 0, i2)
		}(aKe, aKf, fontSize, aB, i2) : 0 === k6[aB] && aKn(aKe, aKf, fontSize, 0, 0, i2), aKi && (0 < aDH[aB + aD.ey] || 0 < aDH[aB + 2 * aD.ey] || 0 < aDH[aB + 3 * aD.ey] || 0 < aDH[aB + 4 * aD.ey]) && function(aKe, aKf, fontSize, aB, i2) {
			var eZ, gT = -1;
			for (eZ = 4; 1 <= eZ; eZ--) 0 < aDH[aB + eZ * aD.ey] && gT++;
			for (eZ = 1; eZ < 5; eZ++) 0 < aDH[aB + eZ * aD.ey] && (! function(aKe, aKf, fontSize, eZ, aB, aKr, dt, i2) {
				var a3d;
				if (1 === eZ) {
					aB = aKG[aB + aD.ey];
					if (!aj.s3.zv(aB)) return function(aKe, aKf, fontSize, pW, aKr, i2) {
						i2.globalAlpha = aKt(fontSize);
						aKe -= .534 * aKr * fontSize, aKr = aKf + 1.59 * fontSize;
						i2.font = bA.qn.se(0, .785 * fontSize), i2.fillText(aj.s3.zm(pW), aKe, aKr), i2.globalAlpha = 1
					}(aKe, aKf, fontSize, aB, aKr, i2);
					a3d = aj.xQ.zL[aB - 1024 + aj.s3.zX]
				} else a3d = 2 === eZ ? aL.a64()[4].canvas[+(dt < 255)] : (3 === eZ ? aL.a64()[5] : aL.a64()[6]).canvas[0];
				aB = aj.xQ.zM, dt = .8 * fontSize / aB, eZ = aKe - .5 * dt * aB - .534 * aKr * fontSize, aKe = aKf + 1.4 * dt * aB;
				i2.setTransform(dt, 0, 0, dt, eZ, aKe), i2.globalAlpha = aKt(fontSize), i2.drawImage(a3d, 0, 0), i2.globalAlpha = 1, i2.setTransform(1, 0, 0, 1, 0, 0)
			}(aKe, aKf, fontSize, eZ, aB, gT, aDH[aB + eZ * aD.ey], i2), gT -= 2)
		}(aKe, aKf, fontSize, aB, i2), (aKh = aK6 * fontSize) < aK8 || (i2.font = bA.qn.se(1, aKh), aKf += Math.floor(.78 * fontSize), aKR ? aKl(aB, aKh, aKe, aKf, i2) : aKk(i2, aB, aKh, aKe, aKf, aKg)))
	}

	function aKl(aB, fontSize, f8, fA, i2) {
		var ___id = aB;
		var showName = aB < aD.kL || !__fx.settings.hideBotNames;
		if (showName) i2.fillText(ag.a1O[aB], f8, fA), aB < aD.kL && 2 !== ag.a49[aB] || (aB = fontSize / aK3[aB], i2.fillRect(f8 - .5 * aB, fA + bA.qn.zn * fontSize, aB, Math.max(1, .1 * fontSize)));
		aKR && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i2.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i2.fillText(__fx.utils.getDensity(___id), f8, showName ? fA + fontSize : fA)
		);
	}

	function aKk(i2, aB, fontSize, aKe, aKf, aKg) {
		var ___id = aB;
		aB = bA.rm.a03(ag.h2[aB]);
		aKg >> 1 & 1 ? (i2.lineWidth = .05 * fontSize, i2.strokeStyle = aKj(fontSize, aKg % 2), i2.strokeText(aB, aKe, aKf)) : (1 < aKg && (i2.lineWidth = .12 * fontSize, i2.strokeStyle = aKj(fontSize, aKg), i2.strokeText(aB, aKe, aKf)), i2.fillText(
			aB, aKe, aKf));
		aKR || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i2.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), i2.fillText(__fx.utils.getDensity(___id), aKe, aKf + fontSize))
	}

	function aKn(aKe, aKf, fontSize, aKr, aKs, i2) {
		var a6Z = .95 * fontSize / aKI,
			aKe = aKe - .5 * a6Z * aKH + .8 * aKr * fontSize,
			aKr = aKf - 1.76 * a6Z * aKI - (.35 - bA.qn.zn + .7) * aKs * fontSize;
		i2.setTransform(a6Z, 0, 0, a6Z, aKe, aKr), i2.globalAlpha = aKt(fontSize), i2.drawImage(ab.get(4), 0, 0), i2.globalAlpha = 1, i2.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aKw(aKe, aKf, fontSize, pW, aKr, i2) {
		var hw, xx, a6Z;
		i2.globalAlpha = aKt(fontSize), aj.s3.zv(pW) ? (hw = aj.xQ.zM, i2.setTransform(a6Z = 1.1 * fontSize / hw, 0, 0, a6Z, xx = aKe - .5 * a6Z * hw - .8 * aKr * fontSize, a6Z = aKf - 1.55 * a6Z * hw), i2.drawImage(aj.xQ.zL[pW - 1024 + aj.s3.zX], 0,
			0), i2.setTransform(1, 0, 0, 1, 0, 0)) : (xx = aKe - .8 * aKr * fontSize, a6Z = aKf - (.35 - bA.qn.zn + 1) * fontSize, i2.fillText(aj.s3.zm(pW), xx, a6Z)), i2.globalAlpha = 1
	}

	function aKj(fontSize, aKg) {
		return aK5 <= fontSize && fontSize < aK4 ? bg.aKy[aKg] + aKt(fontSize).toFixed(3) + ")" : bg.aKz[aKg]
	}

	function aKt(fontSize) {
		return aK5 <= fontSize && fontSize < aK4 ? 1 - (fontSize - aK5) / (aK4 - aK5) : 1
	}

	function aL8(i1, i) {
		return 1 + Math.floor(aK7 * i1 * i)
	}

	function aL5(aB) {
		for (var left = aJy[aB], fK = aJy[aB] - ag.it[aB] - 1; 0 <= fK; fK--)
			if (!aLA(aB, --left, aJz[aB], aK1[aB])) {
				left++;
				break
			} var right = aJy[aB];
		for (fK = ag.iu[aB] - aJy[aB] - aK0[aB]; 0 <= fK; fK--)
			if (!aLA(aB, ++right + aK0[aB] - 1, aJz[aB], aK1[aB])) {
				right--;
				break
			} var f8 = Math.floor((left + right) / 2),
			top = aJz[aB];
		for (fK = aJz[aB] - ag.iv[aB] - 1; 0 <= fK; fK--)
			if (!aLB(aB, f8, --top, aK0[aB])) {
				top++;
				break
			} var bottom = aJz[aB];
		for (fK = ag.iw[aB] - aJz[aB] - aK1[aB]; 0 <= fK; fK--)
			if (!aLB(aB, f8, ++bottom + aK1[aB] - 1, aK0[aB])) {
				bottom--;
				break
			} var fA = Math.floor((top + bottom) / 2);
		aL2(aB, f8, fA, aK0[aB], aK1[aB]) && (aJy[aB] = f8, aJz[aB] = fA)
	}

	function aL2(player, f8, fA, i, j) {
		f4 = Math.floor(.2 * i);
		for (var f4, eZ = f8 + i - 1; f8 <= eZ; eZ--)
			if (!aLA(player, eZ, fA, j)) return;
		for (eZ = fA + j - 1 - (f4 = (f4 = Math.floor(.25 * j)) < 1 ? 1 : f4); fA + f4 <= eZ; eZ--)
			if (!aLB(player, f8, eZ, i)) return;
		return 1
	}

	function aLA(player, f8, fA, j) {
		return ac.yp(player, 4 * (fA * bS.fC + f8)) && ac.yp(player, 4 * ((fA + j - 1) * bS.fC + f8))
	}

	function aLB(player, f8, fA, i) {
		return ac.yp(player, 4 * (fA * bS.fC + f8)) && ac.yp(player, 4 * (fA * bS.fC + f8 + i - 1))
	}
	this.dd = function() {
		if (aKR = bj.eN.data[7].value || 8 === aD.kd, aBD = 0 === (aBD = bj.eN.data[11].value) ? 280 : 1 === aBD ? 187 : 112, aKD = !1, aK9 = .88, aK6 = .5, aK7 = 1.8, aK8 = 12 - 3 * bj.eN.data[9].value, aJx = aJw = 0, aJy = new Uint16Array(aD
				.ey), aJz = new Uint16Array(aD.ey), aK0 = new Uint16Array(aD.ey), aK1 = new Uint16Array(aD.ey), aK2 = new Float32Array(aD.ey), aK3 = new Float32Array(aD.ey), aKG = new Uint16Array(2 * aD.ey), aDH = new Uint8Array(5 * aD.ey), aKP =
			new Uint8Array(aD.ey), aKQ = new Uint8Array(aD.ey), aKO || (aKE = aKE || document.createElement("canvas")), qq(), aKB = aKA = 0, aKC = 1, aKR) {
			var aB, aKX;
			for (aKS(), vR.font = bA.qn.se(1, 100), aKX = 100 / Math.floor(vR.measureText("900 000").width), aB = aD.ey - 1; 0 <= aB; aB--) aK2[aB] = Math.min(aKX, 2 * aK3[aB]);
			aKN = aKX, aKM[0] = 100 / (aKX * Math.floor(vR.measureText("5 000 000").width)), aKM[1] = 100 / (aKX * Math.floor(vR.measureText("50 000 000").width)), aKM[2] = 100 / (aKX * Math.floor(vR.measureText("500 000 000").width)), aKM[3] =
				100 / (aKX * Math.floor(vR.measureText("1 000 000 000").width))
		} else aKS();
		! function() {
			var aB;
			for (aB = aD.ey - 1; 0 <= aB; aB--) ag.go[aB] < 12 ? (aJy[aB] = ag.it[aB] + 1, aJz[aB] = ag.iv[aB] + 1, aK0[aB] = 1, aK1[aB] = 1) : (aJy[aB] = ag.it[aB], aJz[aB] = ag.iv[aB] + 1, aK0[aB] = 4, aK1[aB] = 2);
			if (aD.hO)
				for (aB = 0; aB < aD.kL; aB++) aK0[aB] = 0;
			aKH = ab.get(4).width, aKI = ab.get(4).height
		}()
	}, this.aJi = function(gY, a5m) {
		a5m > 18 * ag.go[gY] ? (aKQ[gY] = 6, ac.a98[gY] = 2 + ac.a98[gY] % 2) : (aKP[gY] = 4, (ac.a98[gY] < 2 || 3 < ac.a98[gY]) && (ac.a98[gY] = 6 + ac.a98[gY] % 2))
	}, this.pj = function(gY, a5m) {
		a5m > 6 * ag.go[gY] ? (aKQ[gY] = 6, ac.a98[gY] = 4 + ac.a98[gY] % 2) : (aKP[gY] = 4, (ac.a98[gY] < 4 || 5 < ac.a98[gY]) && (ac.a98[gY] = 8 + ac.a98[gY] % 2))
	}, this.resize = function() {
		qq(), aKO || aKW(aKF)
	}, this.a58 = function() {
		for (var aB = 0; aB < aD.kL; aB++) ag.iu[aB] - ag.it[aB] != 3 || ag.iw[aB] - ag.iv[aB] != 3 ? (aJy[aB] = ag.it[aB] + (ag.iu[aB] !== ag.it[aB] ? 1 : 0), aJz[aB] = ag.iv[aB], aK0[aB] = 1, aK1[aB] = 1) : (aJy[aB] = ag.it[aB], aJz[aB] = ag
			.iv[aB] + 1, aK0[aB] = 4, aK1[aB] = 2)
	}, this.qM = function(player, e9, aKZ) {
		! function(player, e9, aKZ) {
			player += e9 * aD.ey;
			0 === e9 ? aKG[player] === aKZ && 0 < aDH[player] ? aDH[player] = 0 : (aKG[player] = aKZ, aDH[player] = aj.s3.zu(aKZ) ? 255 : 64) : 1 === e9 ? (aDH[player] = 64, aKG[player] = aKZ) : aDH[player] = aKZ
		}(player, e9, aKZ), 2 === aD.a0m && this.mg(!0)
	}, this.vQ = function() {
		aKO ? aKW(vR) : aKD && (1 !== aKC ? (vR.imageSmoothingEnabled = !0, vR.setTransform(aKC, 0, 0, aKC, 0, 0), vR.drawImage(aKE, -aKA / aKC, -aKB / aKC), vR.setTransform(1, 0, 0, 1, 0, 0), vR.imageSmoothingEnabled = !1) : vR.drawImage(aKE, -
			aKA, -aKB))
	}, this.a9v = function(iK, iN) {
		aKA += iK, aKB += iN
	}, this.a2J = function(iK, iN) {
		af.a9v(iK, iN)
	}, this.zoom = function(a3C, la, lb) {
		aKC *= a3C, aKA = (aKA + la) * a3C - la, aKB = (aKB + lb) * a3C - lb
	}, this.mg = function(bu) {
		return !aKO && !(!aKL && !bu && bf.eQ < aKK + (1 === aKC && 0 === aKA && 0 === aKB && (aD.a5b() || aD.hO || 2 === aD.a0m) ? 1e3 : aBD) || (aKL = !1, aKK = bf.eQ, aKW(aKF), 0))
	}, this.aKc = function(aB) {
		return aKY(aB) * aK2[aB]
	}, this.aKd = function(player) {
		return aK2[player]
	}, this.eU = function() {
		bf.kI() % 10 == 9 && (aKL = aD.a5d() && !aD.a5b()), !aD.a5b() && 4 <= ++aJx && function() {
			var aB, fK, fL;
			for (aJx = 0, fL = 4; 1 <= fL; fL--)
				for (fK = al.kr - 1; 0 <= fK; fK--) aB = al.kw[fK] + fL * aD.ey, 0 < aDH[aB] && aDH[aB] < 255 && aDH[aB]--;
			if (2 !== aD.a0m)
				for (fK = al.kr - 1; 0 <= fK; fK--) aB = al.kw[fK], 0 < aDH[aB] && aDH[aB] < 255 && aDH[aB]--
		}();
		var aB, fK, f1 = Math.floor(.1 * al.kr);
		for (f1 = (f1 = f1 < 8 ? 8 : f1) > al.kr ? al.kr : f1, aB = aJw + f1 - 1; aJw <= aB; aB--) fK = aB % al.kr, ! function(aB) {
			var i1 = aKY(aB) * aK2[aB];
			0 < aK0[aB] && aL2(aB, aJy[aB], aJz[aB], aK0[aB], aK1[aB]) ? ! function(aB) {
				for (var f8, fA, i, j, ef = !1, fL = 0; fL < 8; fL++) {
					if (i = aK0[aB] + 2, j = aK1[aB] + 2, i > ag.iu[aB] - ag.it[aB] + 1 || j > ag.iw[aB] - ag.iv[aB] + 1) return ef;
					if (f8 = aJy[aB] - 1, fA = aJz[aB] - 1, !aL2(aB, f8, fA, i, j)) return ef;
					aJy[aB] = f8, aJz[aB] = fA, aK0[aB] = i, aK1[aB] = j, ef = !0
				}
				return ef
			}(aB) && function(aB, i1) {
				for (var f8, fA, i, j, ef = !1, aDQ = aK0[aB], nW = 1 + Math.floor(.02 * aDQ), fL = 1; fL < 5; fL++) {
					if ((i = aDQ + fL * nW) > ag.iu[aB] - ag.it[aB] + 1) return ef;
					if ((j = aL8(i1, i)) > ag.iw[aB] - ag.iv[aB] + 1) return ef;
					f8 = ag.it[aB] + Math.floor(Math.random() * (ag.iu[aB] - ag.it[aB] + 2 - i)), fA = ag.iv[aB] + Math.floor(Math.random() * (ag.iw[aB] - ag.iv[aB] + 2 - j)), aL2(aB, f8, fA, i, j) && (aJy[aB] = f8, aJz[aB] = fA, aK0[
						aB] = i, aK1[aB] = j, ef = !0)
				}
				return ef
			}(aB, i1) && aL5(aB) : ! function(aB, i1) {
				var j, f8 = aJy[aB] + 1,
					fA = aJz[aB] + 1,
					i = aK0[aB] - 2;
				for (;;) {
					if (i < 1) {
						aK0[aB] = 0;
						break
					}
					if (j = aL8(i1, i), aL2(aB, f8, fA, i, j)) return aJy[aB] = f8, aJz[aB] = fA, aK0[aB] = i, aK1[aB] = j, 1;
					f8++, fA++, i -= 2
				}
				return
			}(aB, i1) ? function(aB, i1) {
				var f8, fA, i, j, fL, nc, jb = ag.iu[aB] - ag.it[aB] + 1,
					aL9 = Math.floor(.02 * jb);
				for (nc = -6 * (aL9 = aL9 < 1 ? 1 : aL9), fL = jb; nc <= fL; fL -= aL9)
					if (j = aL8(i1, i = 0 < fL ? fL : 1), f8 = ag.it[aB] + Math.floor(Math.random() * (ag.iu[aB] - ag.it[aB] + 2 - i)), fA = ag.iv[aB] + Math.floor(Math.random() * (ag.iw[aB] - ag.iv[aB] + 2 - j)), aL2(aB, f8, fA, i, j))
						return aJy[aB] = f8, aJz[aB] = fA, aK0[aB] = i, aK1[aB] = j
			}(aB, i1) : aL5(aB)
		}(al.kw[fK]);
		aJw = (aJw += f1) % al.kr
	}, this.mb = function() {
		var aB, gY, zs, zt;
		if (bf.kI() % 4 == 1)
			for (aB = al.kr - 1; 0 <= aB; aB--) gY = al.kw[aB], ac.a98[gY] < 2 || ((zs = Math.max(aKP[gY] - 1, 0)) === (zt = Math.max(aKQ[gY] - 1, 0)) ? 0 === zs && (ac.a98[gY] %= 2) : 0 === zt && ac.a98[gY] < 6 && (ac.a98[gY] += 4), aKP[gY] =
				zs, aKQ[gY] = zt)
	}, this.a7G = function(player) {
		var aB = player + 2 * aD.ey,
			dt = aDH[aB];
		return 0 < dt && (aN.a0u(50, player), aDH[aB] = 0, 255 === dt)
	}, this.a6J = function(player) {
		return 255 === aDH[player + 2 * aD.ey]
	}
}

function cd() {
	var aLC, aLD, aLE;
	this.dd = function() {
		aLC =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aLD =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aLE = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7X = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEI = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aLC.length - 1; 0 <= aB; aB--)
			for (var fK = a7X.length - 1; 0 <= fK; fK--) aLC[aB] = aLC[aB].replace(a7X[fK], aEI[fK]);
		if (__fx.settings.realisticNames) aLC = realisticNames;
	}, this.a5O = function() {
		var f1 = aD.kL,
			a1O = ag.a1O,
			a1T = ag.a1T,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f1)
			for (var aB = 0; aB < f1; aB++) a1O[aB] = a1T[aB] = "Player " + ay.jc(1e3);
		else
			for (aB = 0; aB < f1; aB++) a1O[aB] = a1T[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kd) {
			for (var e8 = ay.random(), aLK = aLE, aLL = aLD, hj = aE.hj, f1 = aLK.length, lG = aD.data.teamPlayerCount[7], a1O = ag.a1O, a1T = ag.a1T, aB = lG - 1; aB >= aD.kL; aB--) a1O[aB] = a1T[aB] = aLK[(aB + e8) % f1];
			for (f1 = aLL.length - 1, aB = lG; aB < aD.ey; aB++) a1O[aB] = a1T[aB] = aLL[hj[aB] ? f1 : aB % f1]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f1 = aD.ey, a1O = ag.a1O, a1T = ag.a1T, playerNamesData = aD.data.playerNamesData, aB = aD.kL; aB < f1; aB++) a1O[aB] = a1T[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var a1O = ag.a1O, a1T = ag.a1T, aB = aD.kL; aB < aD.ey; aB++) a1O[aB] = a1T[aB] = "Bot " + ay.jc(1e3)
		} : function() {
			for (var aLM = aLC, f1 = aLM.length, e8 = ay.random(), a1O = ag.a1O, a1T = ag.a1T, aB = aD.kL; aB < aD.ey; aB++) a1O[aB] = a1T[aB] = aLM[(aB + e8) % f1]
		})()
	}
}

function cw() {
	this.aLN = [], this.aLO = [], this.dd = function() {
		this.aLN = [], this.aLO = []
	}, this.eU = function() {
		0 <= this.aLN.length && this.aLP(this.aLN), 0 <= this.aLO.length && this.aLP(this.aLO)
	}, this.aLP = function(g) {
		for (var fL = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eQ--, g[aB].eQ <= 0) {
				fL = aB;
				break
			} for (aB = fL; 0 <= aB; aB--) g.shift()
	}, this.a6C = function(id, a0a, aLQ) {
		return this.fM(this.aLN, id, a0a, aLQ)
	}, this.aLR = function(id, a0a, aLQ) {
		return this.fM(this.aLO, id, a0a, aLQ)
	}, this.fM = function(g, id, a0a, aLQ) {
		return ! function(g, id, a0a) {
			var aB, hs;
			for (aB = a0a.length - 1; 0 <= aB; aB--)
				for (hs = g.length - 1; 0 <= hs; hs--)
					if (g[hs].player === a0a[aB] && id === g[hs].id) return 1;
			return
		}(g, id, a0a) && (aLQ && function(g, id, a0a) {
			var aB;
			for (aB = a0a.length - 1; 0 <= aB; aB--) g.push({
				player: a0a[aB],
				id: id,
				eQ: 384
			})
		}(g, id, a0a), !0)
	}
}

function cc() {
	this.a1T = new Array(aD.ey), this.a1O = new Array(aD.ey), this.a49 = new Uint8Array(aD.ey), this.mu = new Uint8Array(aD.ey), this.it = new Uint16Array(aD.ey), this.iv = new Uint16Array(aD.ey), this.iu = new Uint16Array(aD.ey), this.iw =
		new Uint16Array(aD.ey), this.go = new Uint32Array(aD.ey), this.yP = new Uint32Array(aD.ey), this.h2 = new Uint32Array(aD.ey), this.gS = null, this.gg = null, this.gh = null, this.fQ = null, this.qC = new Uint16Array(aD.ey), this.jO =
		new Uint16Array(aD.ey), this.jP = new Uint16Array(aD.ey), this.a1N = new Uint16Array(aD.ey), this.a1L = new Uint8Array(aD.ey), this.a4I = new Uint16Array(aD.ey), this.dd = function() {
			this.a1T.fill(""), this.a1O.fill(""), this.a49.fill(0), this.mu.fill(0), this.it.fill(0), this.iv.fill(0), this.iu.fill(0), this.iw.fill(0), this.go.fill(0), this.yP.fill(0), this.h2.fill(0), this.gS = new Array(aD.ey), this.gg =
				new Array(aD.ey), this.gh = new Array(aD.ey), this.fQ = new Array(aD.ey), this.qC.fill(0), this.jO.fill(0), this.jP.fill(0), this.a1N.fill(0), this.a1L.fill(0), this.a4I.fill(0)
		}
}

function cu() {
	this.aDn = function(player) {
		aG.mt(player), aD.a0o++, ag.a49[player] = 2, ag.a1N[player] = bi.a1d.aIc(), player === aD.el && (aX.show(!1, !1), aW.aBu(), bR.a0X.a1J()), af.a7G(player)
	}
}

function cV() {
	this.kw = null, this.kr = 0, this.a5S = function() {
		for (this.kr = 0, aB = aD.ey - 1; 0 <= aB; aB--) 0 !== ag.mu[aB] && this.kr++;
		this.kw = new Uint16Array(this.kr);
		for (var f1 = 0, aB = 0; aB < aD.ey; aB++) 0 !== ag.mu[aB] && (this.kw[f1++] = aB)
	}, this.ma = function() {
		for (var go = ag.go, yP = ag.yP, a1L = ag.a1L, kw = al.kw, aB = al.kr - 1; 0 <= aB; aB--) {
			var gY = kw[aB],
				dt = go[gY],
				lG = yP[gY];
			dt <= bL.du(lG, 4) ? ak.dm(gY) : lG <= dt ? 250 <= (yP[gY] = dt) && (a1L[gY] = 1) : yP[gY] = lG - Math.max(1, bL.du(lG - dt, 1e3))
		}
		this.aLV()
	}, this.aLV = function() {
		for (var mu = ag.mu, lF = this.kw, aCc = this.kr, aB = aCc - 1; 0 <= aB; aB--) 0 === mu[lF[aB]] && (lF[aB] = lF[--aCc]);
		this.kr = aCc
	}
}

function cW() {
	var aLW = new Uint16Array(aD.ey),
		aLX = 0;

	function aLb(a7M, aLZ) {
		var eZ = bf.kI();
		return 3213 <= eZ ? 4 + bL.du(100 * aLZ, ae.k1(a7M)) : (a7M = 1 + bL.du(aD.k5, 300), eZ < 357 ? 2 + bL.du(100 * aLZ, a7M) : eZ < 714 ? 2 + bL.du(100 * aLZ, 4 * a7M) : eZ < 1071 ? 2 + bL.du(100 * aLZ, 10 * a7M) : eZ < 2142 ? 2 + bL.du(100 *
			aLZ, 30 * a7M) : 2 + bL.du(100 * aLZ, 100 * a7M))
	}

	function aLa(a7M) {
		return aD.kf || 7 <= aD.kd || 4284 <= bf.kI() || bA.gM.ji(a7M)
	}
	this.dd = function() {
		aLW.fill(0), aLX = 15
	}, this.he = function(pL) {
		var player = aD.el;
		return !!bA.gM.qE(player, pL) && !(!bA.gM.pe(player, bA.gM.iZ(player, aR.hU()), pL) || (player = pL, pL = bO.fX[0], !aLa(player) && aLW[player] + aLb(player, pL) > aLX))
	}, this.eY = function(a7M, aLZ) {
		if (!aLa(a7M)) {
			aLZ = aLb(a7M, aLZ);
			if (aLW[a7M] + aLZ > aLX) return !1;
			aLW[a7M] += aLZ
		}
		return !0
	}, this.eU = function() {
		bf.kI() % 100 == 99 && (bf.kI() < 1071 ? aLX += 4 : bf.kI() < 2142 ? aLX += 6 : bf.kI() < 3213 ? aLX += 8 : aLX += 10)
	}
}

function ce() {
	var aLc;
	this.km = null, this.kl = 0, this.dd = function() {
		aLc = [], 9 === aD.kd && this.aLd()
	}, this.aLd = function() {
		this.km = [0, 0, 0, 0, 0, 0];
		for (var aLe = [256, 227, 170, 148, 100, this.kl = 0, 0, 0], aLf = [0, 8, 24, 30, 46, 70, 256, 333], aLg = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kL, aB = 1; aB < aLe.length; aB++)
			if (j <= aLf[aB]) {
				this.kl = aLe[aB - 1] - bL.du((j - aLf[aB - 1]) * (aLe[aB - 1] - aLe[aB]), aLf[aB] - aLf[aB - 1]), this.km[5] = aLg[aB - 1] - bL.du((j - aLf[aB - 1]) * (aLg[aB - 1] - aLg[aB]), aLf[aB] - aLf[aB - 1]), this.km[0] = aD.ey - j - this
					.kl - this.km[5];
				break
			} aD.kh = aD.ey - aD.kL, aD.data.numberTeams = (0 < aD.kL) + (0 < aD.kh), aD.data.playerCount = aD.xv = aD.kL + aD.kh, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kL + this.kl, aD.kh - this.kl]), aD.a5H.a5M()
	}, this.aIj = function(player) {
		aLc.push({
			player: player,
			gT: 14 + ay.jc(20)
		})
	}, this.eU = function() {
		if (9 === aD.kd)
			for (var aB = aLc.length - 1; 0 <= aB; aB--) --aLc[aB].gT <= 0 && (af.qM(aLc[aB].player, 0, aj.s3.za + aj.s3.zo), aLc.splice(aB))
	}
}

function dB() {
	function aLw() {
		return {
			fC: bS.fC,
			fD: bS.fD,
			xN: bS.xN,
			xJ: bS.xJ,
			xK: bS.xK,
			xO: bS.xO,
			eh: bS.eh,
			mapSeed: bS.mapSeed,
			xL: bS.xL
		}
	}

	function aLo(aB) {
		return 1 !== aB && bS.aES(aB) && aB !== bS.aLy()
	}
	this.aLi = 24, this.aLj = 12, this.aIv = 4096, this.fC = 0, this.fD = 0, this.xN = null, this.xJ = null, this.xK = null, this.xO = null, this.eh = 0, this.mapSeed = 0, this.xL = !1, this.xM = new aLk, this.xD = new aLl, this.a7d = new aLm, this
		.dd = function() {
			this.xD.dd()
		}, this.a7 = function(map, aLn) {
			((map %= this.aLi) !== this.eh || aLo(this.eh) && aLn !== this.mapSeed) && (this.xL = !1, this.xM.aLp(), ay.a5N(map), this.eh = map, this.mapSeed = aLn, aLo(map) && (bS.xD.xE[map].aLq = aLn), this.aES(this.eh) ? (map = bS.xD.xE[this.eh],
				this.fC = map.i, this.fD = map.j, ay.a5N(map.aLq), aq.a7([this.fC, this.fD, map.mz, map.mw]), aLs(), ap.aLt(), aq.aLu()) : aLr())
		}, this.aLv = function(map, aLn) {
			var fj = aLw(),
				map = (this.a7(map, aLn), this.xM.aLp(), aLw());
			return aLn = fj, bS.fC = aLn.fC, bS.fD = aLn.fD, bS.xN = aLn.xN, bS.xJ = aLn.xJ, bS.xK = aLn.xK, bS.xO = aLn.xO, bS.eh = aLn.eh, bS.mapSeed = aLn.mapSeed, bS.xL = aLn.xL, map
		}, this.a5i = function(canvas) {
			canvas && this.xN !== canvas && (this.fC = canvas.width, this.fD = canvas.height, this.xN = canvas, this.xJ = this.xN.getContext("2d", {
				alpha: !1
			}), this.hz = this.xJ.getImageData(0, 0, this.fC, this.fD), this.xO = this.hz.data, this.eh = this.aLy(), this.mapSeed = 0, bS.xD.xE[this.eh].name = aD.data.mapName)
		}, this.eg = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aLy()
		}, this.aLz = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aM0 = function(aB) {
			return 1 === aB
		}, this.aLy = function() {
			return this.aLi
		}, this.aES = function(aB) {
			return void 0 === this.xD.xE[aB].aM1
		}, this.a5h = function(qf) {
			return 0 === qf.mapType ? qf.mapProceduralIndex < 10 ? qf.mapProceduralIndex : 10 + qf.mapProceduralIndex : 1 === qf.mapType ? 10 <= qf.mapRealisticIndex ? 22 + qf.mapRealisticIndex - 10 : qf.mapRealisticIndex + 10 : void 0
		}, this.aET = function(qf, aM2) {
			0 === qf.mapType ? qf.mapProceduralIndex = aM2 < 10 ? aM2 : aM2 - 10 : 1 === qf.mapType && (qf.mapRealisticIndex = aM2 - (22 <= aM2 ? 12 : 10))
		}
}

function aLk() {
	function aMB() {
		bS.xM.eU()
	}

	function aMH(gY, aMG) {
		0 < aMG && (bS.xO[gY] += aMG, bS.xO[gY + 1] += aMG, bS.xO[gY + 2] += aMG)
	}

	function iE(gY) {
		return bS.xO[gY + 2] > bS.xO[gY] && bS.xO[gY + 2] > bS.xO[gY + 1]
	}
	this.aA7 = -1, this.a1r = 0, this.aM3 = 0, this.aM4 = 8, this.aM5 = 32, this.aM6 = 8, this.aM7 = 32, this.aM8 = [0, 0], this.a98 = [0, 0, 0, 0], this.im = null, this.aM9 = !0, this.aMA = !1, this.aLp = function() {
		-1 !== this.aA7 && clearTimeout(this.aA7), this.aA7 = -1, this.im = null, aq.aLu()
	}, this.dd = function() {
		7 === aa.a20() || this.aMA || (this.aM9 = !0, this.a1r = 0, this.aM3 = 1, this.aM8 = [bS.xD.xE[bS.eh].xf[0], bS.xD.xE[bS.eh].xg[0]], this.a98 = [bS.xD.xE[bS.eh].aM1[3], bS.xD.xE[bS.eh].aM1[4], bS.xD.xE[bS.eh].aM1[5], bS.xD.xE[bS.eh].aM1[
			6]], this.aM4 = bS.xD.xE[bS.eh].aM1[7], this.aM5 = bS.xD.xE[bS.eh].aM1[8], this.aM6 = bS.xD.xE[bS.eh].aM1[9], this.aM7 = bS.xD.xE[bS.eh].aM1[10], this.aM9 ? this.aA7 = setTimeout(aMB, 16) : this.eU())
	}, this.eU = function() {
		if (8 === aa.a20() && aH.nC()) this.aA7 = setTimeout(aMB, 16);
		else {
			if (0 === this.a1r) {
				var aLq = ay.aMC();
				if (ay.a5N(bS.xD.xE[bS.eh].aM1[2]), aq.a7([bS.fC, bS.fD, bS.xD.xE[bS.eh].aM1[0], bS.xD.xE[bS.eh].aM1[1]]), ay.a5N(aLq), this.im = aq.aMD(), this.a1r++, this.aM9) return void(this.aA7 = setTimeout(aMB, 16))
			}
			for (var gY, en, aLq = this.aM9 ? 10 : 1e6, aLq = bS.fD - this.aM3 - 1 < aLq ? bS.fD - this.aM3 - 1 : aLq, yc = this.aM3 + aLq, fA = this.aM3; fA < yc; fA++)
				for (var f8 = 1; f8 < bS.fC - 1; f8++) iE(gY = 4 * (en = f8 + fA * bS.fC)) ? this.aME(gY, en, 1) : (this.aME(gY, en, 0), function(f8, fA, gY) {
					return 1 < f8 && iE(gY - 4) || f8 < bS.fC - 2 && iE(gY + 4) || 1 < fA && iE(gY - 4 * bS.fC) || fA < bS.fD - 2 && iE(gY + 4 * bS.fC)
				}(f8, fA, gY) && this.aMF(f8, fA));
			this.aM3 = yc, this.aM3 >= bS.fD - 1 ? (bS.xJ.putImageData(bS.xK, 0, 0, 1, 1, bS.fC - 2, bS.fD - 2), bf.dl = !0, this.aLp()) : this.aM9 && (this.aA7 = setTimeout(aMB, 16))
		}
	}, this.aME = function(gY, en, e9) {
		aMH(gY, Math.floor(this.aM8[e9] + this.a98[e9] * this.im[en] / 1e4) - bS.xO[gY])
	}, this.aMI = function(gY, e8, aMJ, e9, a98) {
		aMH(gY, Math.floor(this.aM8[e9] + (1 - e8 / aMJ) * a98) - bS.xO[gY])
	}, this.aMF = function(la, lb) {
		for (var gY, e8, aMJ, a9x = la - this.aM5, aMK = lb - this.aM5, yd = la + this.aM5, yc = lb + this.aM5, a9x = a9x < 1 ? 1 : a9x, yd = yd > bS.fC - 2 ? bS.fC - 2 : yd, yc = yc > bS.fD - 2 ? bS.fD - 2 : yc, fA = aMK < 1 ? 1 : aMK; fA <=
			yc; fA++)
			for (var f8 = a9x; f8 <= yd; f8++) iE(gY = 4 * (f8 + fA * bS.fC)) ? (aMJ = this.aM4 + (this.aM5 - this.aM4) * this.im[f8 + bS.fC * fA] / 1e4, Math.abs(la - f8) > aMJ || Math.abs(lb - fA) > aMJ || aMJ <= (e8 = Math.sqrt((la - f8) * (
				la - f8) + (lb - fA) * (lb - fA))) || this.aMI(gY, e8, aMJ, 1, this.a98[3])) : (aMJ = this.aM6 + (this.aM7 - this.aM6) * this.im[f8 + bS.fC * fA] / 1e4, Math.abs(la - f8) > aMJ || Math.abs(lb - fA) > aMJ || aMJ <= (e8 = Math
				.sqrt((la - f8) * (la - f8) + (lb - fA) * (lb - fA))) || this.aMI(gY, e8, aMJ, 0, this.a98[2]))
	}
}

function aLs() {
	var vA = aML(bS.eh);
	vA && aMM(vA[0], vA[1], vA[2], vA[3], vA[4])
}

function aML(eh) {
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

function aMM(aMN, aMO, aMP, aMQ, aMR) {
	for (var f8, fA, aMT, aMU, a3C, aMW, iJ = aMN.length - 1, aMS = bS.fC + bS.fD, f1 = (aMS *= aMS, aMP.length), aMV = Array(f1), aB = f1 - 1; 0 <= aB; aB--) aMV[aB] = aMP[aB] * aMP[aB];
	var aMX = new Array(f1),
		aDE = new Array(f1),
		aMY = new Array(f1),
		fS = aq.aMD();
	if (void 0 === aMR)
		for (aMR = new Array(f1), aB = f1 - 1; 0 <= aB; aB--) aMR[aB] = 0;
	for (aB = 1; aB < f1; aB++) aMX[aB] = aMV[aB] - aMV[aB - 1], aDE[aB] = aMQ[aB] - aMQ[aB - 1], aMY[aB] = aMR[aB] - aMR[aB - 1];
	for (f8 = bS.fC - 1; 0 <= f8; f8--)
		for (fA = bS.fD - 1; 0 <= fA; fA--) {
			for (aMT = aMS, aB = iJ; 0 <= aB; aB--) aMT = (aMU = (f8 - aMN[aB]) * (f8 - aMN[aB]) + (fA - aMO[aB]) * (fA - aMO[aB])) < aMT ? aMU : aMT;
			for (a3C = aMQ[f1 - 1], aMW = aMR[f1 - 1], aB = 1; aB < f1; aB++)
				if (aMT < aMV[aB]) {
					a3C = aMQ[aB - 1] + aI0((aMT - aMV[aB - 1]) * aDE[aB], aMX[aB]), aMW = aMR[aB - 1] + aI0((aMT - aMV[aB - 1]) * aMY[aB], aMX[aB]);
					break
				} aMZ(bS.fC * fA + f8, a3C, aMW, fS)
		}
}

function aMZ(e9, a3C, aMW, fS) {
	a3C < 500 ? fS[e9] = bL.du(fS[e9] * a3C * 2, 1e3) : 500 < a3C && (fS[e9] += bL.du(2 * (1e4 - fS[e9]) * (a3C - 500), 1e3)), fS[e9] += bL.du(aMW * (10 * a3C - fS[e9]), 1e3)
}

function cg() {
	var aMa;

	function aMk(a3d, i1, f8, fA, globalAlpha) {
		bS.xJ.save(), bS.xJ.globalAlpha = globalAlpha, bS.xJ.imageSmoothingEnabled = !1, bS.xJ.scale(i1, i1), bS.xJ.drawImage(a3d, Math.floor(f8 * (bS.fC / i1 - a3d.width)), Math.floor(fA * (bS.fD / i1 - a3d.height))), bS.xJ.restore()
	}
	this.a7a = 0, this.a7b = 0, this.a7c = 0, this.a7d = 0, this.dd = function() {
		(aMa = new Array(bS.aLi))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e8: [220, 250, 255, 220],
			tS: [190, 220, 0, 0],
			fL: [170, 200, 0, 0]
		}, aMa[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e8: [25, 0, 100, 0, 25],
			tS: [25, 0, 0, 0, 25],
			fL: [25, 0, 0, 0, 25]
		}, aMa[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e8: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tS: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fL: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMa[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e8: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tS: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fL: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMa[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e8: [10, 10, 20, 10, 10, 170, 212],
			tS: [20, 20, 60, 100, 100, 110, 170],
			fL: [70, 70, 160, 30, 30, 60, 120]
		}, aMa[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e8: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tS: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fL: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMa[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e8: [10, 10, 60, 255, 255, 200, 200],
			tS: [10, 10, 60, 255, 255, 200, 200],
			fL: [80, 80, 255, 255, 255, 200, 200]
		}, aMa[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e8: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tS: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fL: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMa[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e8: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tS: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fL: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMa[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e8: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tS: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fL: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMa[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e8: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tS: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fL: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMa[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e8: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tS: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fL: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aLt = function() {
		var aMj, aB, fK, fj, hz = function() {
				var hz;
				return bS.xN = document.createElement("canvas"), bS.xN.width = bS.fC, bS.xN.height = bS.fD, bS.xJ = bS.xN.getContext("2d", {
					alpha: !1
				}), hz = bS.xJ.getImageData(0, 0, bS.fC, bS.fD), bS.xO = hz.data, hz
			}(),
			i = aMa[bS.eh].i,
			e8 = aMa[bS.eh].e8,
			tS = aMa[bS.eh].tS,
			fL = aMa[bS.eh].fL,
			fS = aq.aMD(),
			f1 = i.length - 2,
			aMe = new Array(1 + f1),
			aMf = new Array(1 + f1),
			aMg = new Array(1 + f1),
			aMh = new Array(1 + f1);
		for (fK = f1; 0 <= fK; fK--) aMe[fK] = i[fK + 1] - i[fK], aMf[fK] = e8[fK + 1] - e8[fK], aMg[fK] = tS[fK + 1] - tS[fK], aMh[fK] = fL[fK + 1] - fL[fK];
		for (aB = bS.fC * bS.fD - 1; 0 <= aB; aB--)
			for (fK = f1; 0 <= fK; fK--)
				if (fS[aB] >= i[fK]) {
					fj = fS[aB] - i[fK], bS.xO[4 * aB] = e8[fK] + aI0(aMf[fK] * fj, aMe[fK]), bS.xO[4 * aB + 1] = tS[fK] + aI0(aMg[fK] * fj, aMe[fK]), bS.xO[4 * aB + 2] = fL[fK] + aI0(aMh[fK] * fj, aMe[fK]), bS.xO[4 * aB + 3] = 255;
					break
				} bS.xJ.putImageData(hz, 0, 0), bS.aM0(bS.eh) && ab.tW() && bS.aM0(bS.eh) && (hz = ab.aHB("arena"), aMj = ab.aHB("territorial.io"), aMk(hz, 5, .5, .5, .1), aMk(aMj, 2, .5, .45, .1)), bS.xL = !0, bf.dl = !0
	}, this.a5Q = function() {
		for (var gY, f8, fA, aMl, hq, fl, a7b = 0, i = bS.fC, j = bS.fD, fj = i * j * 4, aMm = aCm, aMn = bS.xO, aB = i - 1; 0 <= aB; aB--) aMm[(gY = aB << 2) + 2] = aMm[fj - gY - 2] = 3;
		for (fj = 4 * i, aB = j - 1; 0 <= aB; aB--) aMm[(gY = aB * fj) + 2] = aMm[gY + fj - 2] = 3;
		for (aMl = i - 1, hq = j - 1, fA = 1; fA < hq; fA++)
			for (fj = fA * i, f8 = 1; f8 < aMl; f8++) fl = 1 - (aMn[(gY = fj + f8 << 2) + 2] > aMn[gY + 1] && aMn[gY + 2] > aMn[gY]), aMm[gY + 2] = 6 - 5 * fl, a7b += fl;
		this.a7a = (i - 2) * (j - 2), this.a7d = 0, bS.eg(bS.eh) && (bS.a7d.aMo(), bS.a7d.aMp(4, 5)), this.a7b = aD.k5 = a7b - this.a7d, this.a7c = this.a7a - this.a7b - this.a7d, this.a7c && (bS.a7d.aMp(6, 2), bS.a7d.aMq())
	}
}

function aLr() {
	var qU;
	10 === bS.eh ? qU =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.eh ? qU =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.eh ? qU =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.eh ? qU =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.eh ? qU =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.eh ? qU =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.eh ? qU =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.eh ? qU =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.eh ? qU =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.eh ? qU =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.eh ? qU =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.eh && (qU =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new x6).x8(qU)
}

function aLl() {
	this.xE = null, this.aMr = null, this.aMs = null, this.dd = function() {
		var aMt = [120, 105, 92],
			cos = [12, 12, 60],
			aMu = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aMv = [140, 130, 120],
			aMw = [12, 12, 76],
			aMx = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aMy = [130, 117, 106],
			aMz = [12, 12, 68],
			aN0 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xE = new Array(bS.aLi + 1), this.xE[0] = {
			name: L(132),
			i: 230,
			j: 230,
			mz: 1e3,
			mw: 2e3,
			aLq: 173
		}, this.xE[1] = {
			name: L(133),
			i: 800,
			j: 800,
			mz: 100,
			mw: 50,
			aLq: 43
		}, this.xE[2] = {
			name: L(134),
			i: 512,
			j: 512,
			mz: 128,
			mw: 32,
			aLq: 0
		}, this.xE[3] = {
			name: L(135) + " 1",
			i: 960,
			j: 960,
			mz: 60,
			mw: 8,
			aLq: 0
		}, this.xE[4] = {
			name: L(136),
			i: 900,
			j: 900,
			mz: 100,
			mw: 5,
			aLq: 0
		}, this.xE[5] = {
			name: L(137),
			i: 1e3,
			j: 1e3,
			mz: 100,
			mw: 40,
			aLq: 0
		}, this.xE[6] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mz: 100,
			mw: 20,
			aLq: 0
		}, this.xE[7] = {
			name: L(139),
			i: 1024,
			j: 1024,
			mz: 128,
			mw: 32,
			aLq: 0
		}, this.xE[8] = {
			name: L(140),
			i: 820,
			j: 820,
			mz: 200,
			mw: 100,
			aLq: 0
		}, this.xE[9] = {
			name: L(141),
			i: 1024,
			j: 1024,
			mz: 128,
			mw: 32,
			aLq: 0
		}, this.xE[10] = {
			name: L(142),
			xf: aMv,
			xg: aMw,
			aM1: aMx
		}, this.xE[11] = {
			name: L(143),
			xf: aMy,
			xg: aMz,
			aM1: aN0
		}, this.xE[12] = {
			name: L(144),
			xf: aMy,
			xg: aMz,
			aM1: aN0
		}, this.xE[13] = {
			name: L(145),
			xf: aMt,
			xg: cos,
			aM1: aMu
		}, this.xE[14] = {
			name: L(146),
			xf: aMt,
			xg: cos,
			aM1: aMu
		}, this.xE[15] = {
			name: L(147),
			xf: aMv,
			xg: aMw,
			aM1: aMx
		}, this.xE[16] = {
			name: L(148),
			xf: aMv,
			xg: aMw,
			aM1: aMx
		}, this.xE[17] = {
			name: L(149),
			xf: aMt,
			xg: cos,
			aM1: aMu
		}, this.xE[18] = {
			name: L(150),
			xf: aMy,
			xg: aMz,
			aM1: aN0
		}, this.xE[19] = {
			name: L(151),
			xf: aMt,
			xg: cos,
			aM1: aMu
		}, this.xE[20] = {
			name: L(152),
			i: 1024,
			j: 1024,
			mz: 128,
			mw: 32,
			aLq: 0
		}, this.xE[21] = {
			name: L(135) + " 2",
			i: 940,
			j: 940,
			mz: 80,
			mw: 8,
			aLq: 0
		}, this.xE[22] = {
			name: L(153),
			xf: aMy,
			xg: aMz,
			aM1: aN0
		}, this.xE[23] = {
			name: L(154),
			xf: aMv,
			xg: aMw,
			aM1: aMx
		}, this.xE[bS.aLi] = {
			name: ""
		}, this.aMr = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aMr[aB] = aB;
		for (this.aMr[10] = 20, this.aMr[11] = 21, this.aMs = new Uint8Array(bS.aLj), aB = 0; aB < 10; aB++) this.aMs[aB] = 10 + aB;
		this.aMs[10] = 22, this.aMs[11] = 23
	}
}

function aLm() {
	this.aMo = function() {
		for (var gY, f8, fj, aMm = aCm, aMn = bS.xO, i = bS.fC, aMl = i - 1, hq = bS.fD - 1, gT = 0, fA = 1; fA < hq; fA++)
			for (fj = fA * i, f8 = 1; f8 < aMl; f8++) aMn[gY = fj + f8 << 2] === aMn[1 + gY] && aMn[gY] === aMn[2 + gY] && (gT++, aMm[2 + gY] = 4);
		ap.a7d = gT
	}, this.aMp = function(aN1, aN2) {
		for (var aMm = aCm, i = bS.fC, aMl = i - 1, hq = bS.fD - 1, id = 0, fA = 1; fA < hq; fA++)
			for (var fj = fA * i, f8 = 1; f8 < aMl; f8++) {
				var ef = 2 + (fj + f8 << 2);
				aMm[ef] === aN1 && (! function(ef, id, aN1, aN2) {
					var f1 = 1,
						aMm = aCm,
						f3 = ac.f3,
						a3P = [ef],
						aN4 = id >> 8 << 1,
						aN5 = 255 & id;
					aMm[ef - 2] = aN4, aMm[ef - 1] = aN5, aMm[ef] = 5;
					for (; f1;) {
						for (var a3Q = [], aB = 0; aB < f1; aB++)
							for (var eq = a3P[aB], f4 = 3; 0 <= f4; f4--) {
								var f5 = eq + f3[f4];
								aMm[f5] === aN1 && (aMm[f5 - 2] = aN4, aMm[f5 - 1] = aN5, aMm[f5] = aN2, a3Q.push(f5))
							}
						f1 = (a3P = a3Q).length
					}
				}(ef, id, aN1, aN2), id = (id + 1) % 32768)
			}
	}, this.aMq = function() {
		for (var aMm = aCm, i = bS.fC, aMl = i - 3, hq = bS.fD - 3, aN7 = 12 * i, fA = 3; fA < hq; fA++)
			for (var fj = fA * i, f8 = 3; f8 < aMl; f8++) {
				var ef = 2 + (fj + f8 << 2);
				2 !== aMm[ef] || 2 === aMm[ef - 12] && 2 === aMm[12 + ef] && 2 === aMm[ef - aN7] && 2 === aMm[ef + aN7] || (aMm[ef - 2] = 1 | aMm[ef - 2])
			}
	}
}

function a5P() {
	(yy = void 0 === yy ? document.createElement("canvas") : yy).width = bS.fC, yy.height = bS.fD, a5T = yy.getContext("2d", {
		alpha: !0
	}), a5U = aCm = null, a5U = a5T.getImageData(0, 0, bS.fC, bS.fD), aCm = a5U.data, bA.qv.xP(aCm)
}

function ch() {
	var fS, i, j, max, aN8, mw, aNA, aNB, aNC, aND, aNE, aNF, aNG, aNH, aN9 = 1e4;

	function aNO(aNN, mz, f1) {
		var aB;
		for (aNA[0] = aNN, aB = 1; aB < f1; aB++) aNA[aB] = aNA[aB - 1] + mz, mz = aNA[aB] >= aN9 ? (aNA[aB] = aN9 - 1, -mz) : aNA[aB] < 0 ? (aNA[aB] = 0, -mz) : (mz += 16384 <= ay.random() ? mw : -mw) < -aN8 ? -aN8 : aN8 < mz ? aN8 : mz
	}

	function aNQ(f8, fA, aNR, f1) {
		(aNR ? function(f8, fA, f1) {
			var aB;
			for (aB = 0; aB < f1; aB++) fS[fA * i + f8 + aB] = aNA[aB]
		} : function(f8, fA, f1) {
			var aB;
			for (aB = 0; aB < f1; aB++) fS[fA * i + f8 + aB * i] = aNA[aB]
		})(f8, fA, f1)
	}

	function aNU(value, f1) {
		var aB, aL9, ef, ja = value - aNA[f1 - 1];
		if (0 != ja) {
			for (aL9 = 1 + bL.du(Math.abs(ja), f1 - 1), aL9 = ja < 0 ? -aL9 : aL9, aNA[f1 - 1] = value, ef = (ef = f1 - 1 - bL.du(Math.abs(ja), Math.abs(aL9))) < 1 ? 1 : f1 - 2 < ef ? f1 - 2 : ef, aB = f1 - 2; ef <= aB; aB--) aNA[aB] += ja - (f1 -
				1 - aB) * aL9;
			(ja < 0 ? function(f1) {
				var aB;
				for (aB = f1 - 2; 1 <= aB; aB--) aNA[aB] < 0 && (aNA[aB] = -aNA[aB] - 1)
			} : function(f1) {
				var aB;
				for (aB = f1 - 2; 1 <= aB; aB--) aNA[aB] >= aN9 && (aNA[aB] = 2 * aN9 - aNA[aB] - 1)
			})(f1)
		}
	}

	function aNX(a3P, a3Q, f1) {
		for (var aB = 0; aB < f1; aB++) a3P[aB] = a3Q[aB]
	}

	function aNY(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aNZ(a66, gap, hr) {
		aNB.push(a66), aNC.push(gap), aND.push(hr)
	}
	this.a7 = function(a4d) {
		! function(a4d) {
			var aB;
			for (i = a4d[0], j = a4d[1], aN8 = a4d[2], mw = a4d[3], fS = new Int16Array(i * j), max = j < i ? i : j, aNA = new Int16Array(max), aNB = [], aNC = [], aND = [], aNE = new Array(i), aNF = new Array(j), aB = i - 1; 0 <= aB; aB--) aNE[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aNF[aB] = !1;
			aNG = new Int16Array(i), aNH = new Int16Array(j)
		}(a4d),
		function(f1) {
			var aNN = ay.random() % aN9,
				mz = ay.random() % (2 * aN8 + 1) - aN8;
			aNO(aNN, mz, f1)
		}(max), aNX(aNH, aNA, j), aNQ(0, 0, !0, i);
		var f8, fA, a4d = fS[0],
			f1 = max,
			mz = ay.random() % (2 * aN8 + 1) - aN8;
		for (aNO(a4d, mz, f1), aNX(aNG, aNA, i), aNQ(0, 0, !1, j), aNY(aNG), aNY(aNH), aNO(fS[i - 1], aNG[i - 1], j), aNQ(i - 1, 0, !1, j), aNO(fS[i * (j - 1)], aNH[j - 1], i), aNU(fS[i * j - 1], i), aNQ(0, j - 1, !0, i), aNE[i - 1] = aNE[0] = !
			0, aNF[j - 1] = aNF[0] = !0, aNZ(0, i, !0), aNZ(0, j, !1), ! function() {
				var aNb, a66;
				for (;;) {
					if (aNb = function() {
							var aB, aNb = aNB.length - 1;
							for (aB = aNb - 1; 0 <= aB; aB--) aNC[aB] > aNC[aNb] && (aNb = aB);
							return aNb
						}(), aNC[aNb] < 5) return;
					a66 = aNB[aNb] + bL.du(aNC[aNb], 2), (aND[aNb] ? function(f8) {
						var f1, aNe, aB, aGb = 0,
							aNf = 0;
						for (; aNf < j - 1;) {
							for (aB = aGb + 1; aB < j; aB++)
								if (aNF[aB]) {
									aNf = aB;
									break
								} f1 = aNf - aGb + 1, aNO(fS[f8 + i * aGb], 0 === aGb ? aNG[f8] : aNA[aNe - 1] - aNA[aNe - 2], f1), aNU(fS[aNf * i + f8], f1), aNQ(f8, aGb, !1, f1), aNe = f1, aGb = aNf
						}
						aNE[f8] = !0
					} : function(fA) {
						var f1, aNe, aB, aGb = 0,
							aNf = 0;
						for (; aNf < i - 1;) {
							for (aB = aGb + 1; aB < i; aB++)
								if (aNE[aB]) {
									aNf = aB;
									break
								} f1 = aNf - aGb + 1, aNO(fS[fA * i + aGb], 0 === aGb ? aNH[fA] : aNA[aNe - 1] - aNA[aNe - 2], f1), aNU(fS[fA * i + aNf], f1), aNQ(aGb, fA, !0, f1), aNe = f1, aGb = aNf
						}
						aNF[fA] = !0
					})(a66), aNZ(a66, aNB[aNb] + aNC[aNb] - a66, aND[aNb]), aNC[aNb] = a66 - aNB[aNb] + 1
				}
			}(), f8 = 0; f8 < i; f8++)
			if (!aNE[f8])
				for (fA = 0; fA < j; fA++) aNF[fA] || ! function(f8, fA) {
					var value = fS[fA * i + f8 - 1] + fS[(fA - 1) * i + f8],
						a7q = 2;
					aNE[f8 + 1] && (a7q++, value += fS[fA * i + f8 + 1]);
					aNF[fA + 1] && (a7q++, value += fS[(fA + 1) * i + f8]);
					fS[fA * i + f8] = bL.du(value, a7q)
				}(f8, fA)
	}, this.aMD = function() {
		return fS
	}, this.aLu = function() {
		fS = null
	}
}

function aI0(fK, fL) {
	return 0 <= fK ? bL.du(fK, fL) : -bL.du(-fK, fL)
}

function jr(fS) {
	return fS * fS
}

function a74(fK, fL) {
	return fL < fK ? fK : fL
}

function aCG(fK, fL) {
	return fK < fL ? fK : fL
}

function a9S(fK, fS, fL) {
	return fS < fK ? fK : fL < fS ? fL : fS
}

function aNh(fS, f1) {
	for (var eZ = bL.du(fS + 1, 2), aB = 0; aB < f1; aB++) eZ = bL.du(eZ + bL.du(fS, eZ), 2);
	return eZ
}

function aJf(fS, f1) {
	return fS < 1 ? 0 : aNh(fS, f1)
}

function aNi(nK, nL, tB, a9B, nX, nY, tC, tu) {
	return !(nK + tB <= nX || nL + a9B <= nY || nX + tC <= nK || nY + tu <= nL)
}

function aNj(nK, nL, tB, a9B, nX, nY, tC, tu) {
	return nK <= nX && nL <= nY && nX + tC <= nK + tB && nY + tu <= nL + a9B
}

function xG(fS) {
	return Math.floor(!!fS * (1 + Math.log2(fS + .5)))
}

function bx() {
	this.du = function(fK, fL) {
		return Math.floor((fK + .5) / fL)
	}, this.aNk = function(fK, fL) {
		return Math.floor(fK * (fL + .5))
	}, this.sqrt = function(fS) {
		return ~~Math.sqrt(fS + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.i8 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aNl = function(fj, fl, fn) {
		return Math.max(Math.min(fj, fl), fn)
	}, this.aNm = function(aNn, aNo, f8, fA) {
		f8 -= aNn, aNn = fA - aNo, fA = 0;
		return 0 == f8 ? fA = 0 <= aNn ? Math.PI : 0 : (fA = Math.atan(aNn / f8), fA += 0 < f8 ? .5 * Math.PI : 1.5 * Math.PI), fA
	}, this.log2 = function(fS) {
		return Math.floor(!!fS * (1 + Math.log2(fS + .5)))
	}, this.log10 = function(fS) {
		return Math.floor(Math.log10(fS + .5))
	}, this.aNq = function(aNr, aNs, aNt, aNu, aNv) {
		return aNt - aNv < aNr && aNr < aNt + aNv && aNu - aNv < aNs && aNs < aNu + aNv
	}, this.yD = function(a9s, a9u) {
		return a9s * a9s + a9u * a9u
	}
}

function dD() {
	this.y = new aNw, this.t4 = 0;
	var aNx = new Array(32);

	function aO1() {
		for (var f1 = aNx.length, aB = 0; aB < f1; aB++) aNx[aB] = null
	}
	this.dd = function() {
		for (var aNy, aNz = document.body.firstChild; aNz;) aNy = aNz.nextSibling, !document.body.contains(aNz) || "DIV" !== aNz.tagName && "INPUT" !== aNz.tagName && "BUTTON" !== aNz.tagName || t.removeChild(document.body, aNz), aNz = aNy
	}, this.u = function(e9, aO0, a4d) {
		void 0 === aO0 && (aO0 = this.t4), bf.dl = !0, 0 === e9 && (0 === aa.a20() ? e9 = 5 : a0.a1.setState(13)), this.s4(), this.t4 === e9 && (aO0 = aNx[e9].aO0, aNx[e9] = null), this.t4 = e9;
		var lG = aNx[e9];
		if (!lG || 4 === e9 || 7 === e9 || 8 === e9 || 9 === e9 || 10 === e9 || 11 === e9 || 13 === e9 || 15 === e9 || 18 === e9 || 20 <= e9 && e9 <= 28 || 32 === e9 || 33 === e9) {
			if (0 === e9) return void aO1();
			1 === e9 ? lG = new aO2 : 2 === e9 ? lG = new aO3 : 3 === e9 ? lG = new aO4 : 4 === e9 || 9 === e9 || 10 === e9 || 11 === e9 || 13 === e9 || 33 === e9 ? lG = a4d : 5 === e9 ? lG = new aO5 : 6 === e9 ? lG = new aO6 : 7 === e9 ? lG =
				new aO7(t.y.aO8) : 8 === e9 ? lG = a4d : 12 === e9 ? lG = new aO9 : 14 === e9 ? lG = new aOA : 15 === e9 ? lG = new aO7(t.y.aOB) : 16 === e9 ? lG = new aOC : 17 === e9 ? lG = new aOD : 18 === e9 ? lG = new aOE : 19 === e9 ? lG =
				new aOF : 20 === e9 ? lG = new aOG : 21 === e9 ? lG = new aOH : 22 === e9 ? lG = new aOI : 23 === e9 ? lG = new aOJ : 24 === e9 ? lG = new aOK : 25 === e9 ? lG = new aOL : 26 === e9 ? lG = new aOM : 27 === e9 ? lG = new aON :
				28 === e9 ? lG = new aOO : 29 === e9 ? lG = new aOP : 30 === e9 ? lG = new aOQ : 31 === e9 && (lG = new aOR), lG.aO0 = aO0, aNx[e9] = lG
		}
		lG.show(a4d)
	}, this.a1z = function() {
		this.hm() && this.aOS(this.a5q().aO0)
	}, this.aOS = function(e9) {
		this.hm() && (aNx[e9] ? (this.s4(), bf.dl = !0, this.t4 = e9, aNx[e9].show()) : this.u(e9))
	}, this.s4 = function() {
		this.hm() && aNx[this.t4].s4()
	}, this.x = function() {
		this.hm() && (aNx[this.t4].s4(), aO1(), this.t4 = 0, a0.a1.setState(13))
	}, this.vQ = function() {
		var lG;
		this.hm() && (lG = aNx[this.t4]).vQ && lG.vQ()
	}, this.resize = function() {
		if (!this.hm()) return !1;
		aNx[this.t4].resize()
	}, this.hD = function(f8, fA) {
		var lG;
		this.hm() && (lG = aNx[this.t4]).hD && lG.hD(f8, fA)
	}, this.a2J = function(f8, fA) {
		var lG;
		this.hm() && (lG = aNx[this.t4]).a2J && lG.a2J(f8, fA)
	}, this.a2h = function() {
		var lG;
		this.hm() && (lG = aNx[this.t4]).a2h && lG.a2h()
	}, this.a2M = function(la, lb, deltaY) {
		var lG;
		this.hm() && (lG = aNx[this.t4]).a2M && lG.a2M(la, lb, deltaY)
	}, this.a2r = function(code) {
		var lG;
		return !!this.hm() && ((lG = aNx[this.t4]).a2r && lG.a2r(code), !0)
	}, this.eU = function() {
		var lG;
		this.hm() && (lG = aNx[this.t4]) && lG.eU && lG.eU()
	}, this.hm = function() {
		return 0 < this.t4
	}, this.a5q = function() {
		return aNx[this.t4]
	}, this.a5r = function(e9) {
		return aNx[e9]
	}, this.aOT = function() {
		return aNx
	}, this.removeChild = function(ux, a48) {
		try {
			ux.removeChild(a48)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aO7(data) {
	var aOU, aOV;
	this.show = function() {
		data.aOW && bI.aPO("account", data.t2), aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aOV.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a1z()
	}), new w(data.aOW ? "🔄 " + L(155) : L(156), function() {
		t.u(8, data.aOW ? t.a5q().aO0 : void 0, new t5(25, {
			t6: 0,
			t2: data.t2,
			t3: data.t3
		}))
	}, 0, 0, 1)]), aOV = new qg(aOU.vH, function() {
		var qi = [];
		qi.push(function() {
				var aOo = new qQ,
					a1X = (aOo.qT(L(213)), data.aP4);
				a1X < 1 ? (aOo.qZ(L(214)), 0 === data.aP5 ? aOo.qV(L(215)) : 1 === data.aP5 ? aOo.qV(L(216)) : 2 === data.aP5 ? aOo.qV(L(217)) : 3 === data.aP5 ? aOo.qV(L(218)) : 4 === data.aP5 ? aOo.qV(L(219)) : 5 === data.aP5 ? aOo.qV(
					L(220)) : 6 === data.aP5 ? aOo.qV(L(221)) : aOo.qV(L(222))) : (aOo.qZ(L(223)), a1X = a1X < 2 ? L(224) : a1X < 61 ? 2 === a1X ? L(225) : L(226, [a1X - 1]) : a1X < 84 ? 61 === a1X ? L(227) : L(228, [a1X - 60]) :
					a1X < 255 ? 84 === a1X ? L(229) : L(230, [a1X - 83]) : L(231), aOo.qV(a1X));
				{
					var qW, aOs;
					aOo.qe(new sS), data.aOW && (qW = aOo.qV(), aOo.qe(new sI([new w(bj.vp.uM(data.t2) ? L(232) : L(233), function(e) {
						return bj.vp.w2(data.t2) ? (e.textContent = L(232), aOs(1)) : (e.textContent = L(233), aOs(0)), !0
					}).button])), aOs = function(fS) {
						qW.textContent = fS ? L(234) : ""
					}, bj.vp.uM(data.t2) && aOs(1), aOo.qe(new sS))
				}
				var ra = new rb({
					value: data.username,
					e9: -1
				});
				ra.e.readOnly = !0, aOo.qe(ra), aOo.qe(new sI([new w(L(179), function(e) {
					return bA.qn.a46(ra.e), bA.qn.v3(e), !0
				}).button])), data.aOW ? (aOo.qe(new sS), aOo.qZ("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", aOo.qe(new sI([new w(L(236),
					function(e) {
						return b0.aG1.aG2({
							t6: 3,
							t2: data.t2,
							value: 0
						}), bA.qn.v3(e), !0
					}, bB.oZ).button])), aOo.qe(new sI([new w(L(237), function(e) {
					return b0.aG1.aG2({
						t6: 3,
						t2: data.t2,
						value: 1
					}), bA.qn.v3(e), !0
				}, bB.oZ).button])), aOo.qe(new sI([new w("Cheater", function(e) {
					return b0.aG1.aG2({
						t6: 3,
						t2: data.t2,
						value: 2
					}), bA.qn.v3(e), !0
				}, bB.oZ).button])), aOo.qe(new sI([new w("False Reporter", function(e) {
					return b0.aG1.aG2({
						t6: 3,
						t2: data.t2,
						value: 3
					}), bA.qn.v3(e), !0
				}, bB.oZ).button]))) : aOo.qV(L(235));
				return aOo
			}()),
			function(qi) {
				var aOo, qW, aD2, aP7, aOt, aOv, aOu;
				data.aOW || ((aOo = new qQ).qT(L(238)), (qW = aOo.qV(data.aP6.length + " / 160")).style.textAlign = "center", aD2 = !0, (aP7 = new vZ(0, 1, function(e) {
					e = e.target.value.length;
					qW.textContent = e + " / 160", 160 < e ? aD2 && (aD2 = !1, aOv.r7(1)) : aD2 || (aD2 = !0, aOv.r7(0))
				})).e.rows = 6, aP7.e.style.fontSize = "1em", aP7.vg(data.aP6), aOo.qe(aP7), 0 !== data.aP8 ? (aOv = new w(L(239), function() {
					if (!aD2) return !0;
					t.u(8, t.a5q().aO0, new t5(29, {
						t6: 1,
						qU: aP7.vh().substring(0, 160)
					}))
				}, 0, 0, 1), aOo.qe(new sI([aOv.button])), aOo.qe(new sI([new w(1 === data.aP8 ? L(240) : L(241), function() {
					t.u(8, t.a5q().aO0, new t5(29, {
						t6: 0,
						qU: ""
					}))
				}, 0, 0, 1).button])), aOo.qV(1 === data.aP8 ? L(242, [data.aP9 - 1]) : L(243, [data.aP9 - 1])), aOo.qV(L(244, [data.aPA]))) : (aOt = new w(L(245), function() {
					if (!aP7.e.readOnly) return !0;
					t.u(8, t.a5q().aO0, new t5(29, {
						t6: 1,
						qU: aP7.vh().substring(0, 160)
					}))
				}, 1), aOv = new w(L(176), function(e) {
					if (e.textContent === L(176)) {
						if (!aD2) return !0;
						e.textContent = L(177), aP7.e.readOnly = !0, aOt.r7(0), aOt.button.style.color = bB.ot
					} else aOu();
					return !0
				}), aOo.qe(new sI([aOv.button])), aOo.qV(L(244, [data.aPA])), aOu = function() {
					aOv.button.textContent = L(176), aP7.e.readOnly = !1, aOt.r7(1), aOt.button.style.color = bB.nu
				}, aOo.qe(new sI([aOt.button]))), qi.push(aOo))
			}(qi),
			function(qi) {
				var aOo;
				data.aOW && 0 !== data.aP8 && ((aOo = new qQ).qT(L(246)), aOo.qX(data.aP6), aOo.qe(new sI([new w(L(247, 0, "Report"), function(e) {
					return b0.y.eV(0) && (bA.qn.v3(e), b0.aG1.aPB({
						t6: 5,
						t2: data.t2
					})), !0
				}, 0, 0, 1).button])), qi.push(aOo))
			}(qi), qi.push(function() {
				var aOo = new qQ,
					aOp = (aOo.qT(L(157)), aOo.qZ("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(158), L(159), L(160), L(161), L(162), L(163), L(164),
						L(165), L(166), L(167), L(168), L(169), L(170), L(171)
					]),
					e8 = data.aOq;
				return aOo.qZ(L(172) + bA.rm.a4u(data.wd, .01, 2) + "<br>" + L(173) + (e8 + 1) + " / " + data.wc + "<br>" + L(174) + aOp[function(e8, wd) {
					if (e8 < 10) return 0;
					if (e8 < 30) return 1;
					if (e8 < 60) return 2;
					if (3e4 <= (wd = bL.du(wd, 100))) return 3;
					if (12e3 <= wd) return 4;
					if (7e3 <= wd) return 5;
					if (3e3 <= wd) return 6;
					if (1e3 <= wd) return 7;
					if (500 <= wd) return 8;
					if (200 <= wd) return 9;
					if (70 <= wd) return 10;
					if (20 <= wd) return 11;
					if (3 <= wd) return 12;
					return 13
				}(e8, data.wd)]), aOo
			}()), data.aOW && qi.push(function() {
				var aOo = new qQ,
					ra = (aOo.qT(L(175)), aOo.qZ("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new rb({
						value: bj.eN.data[147].value,
						e9: -1
					}, 1, void 0, function(e) {
						bj.sF.sG(147, aOs(e.target.value))
					})),
					aOt = (aOo.qe(ra), new w(L(14), function(e) {
						return ra.e.readOnly && b0.y.eV(0) && (bA.qn.v3(e), aOu(), b0.aG1.aG2({
							t6: 0,
							t2: data.t2,
							value: parseInt(bj.eN.data[147].value, 10)
						})), !0
					}, 1)),
					aOv = new w(L(176), function(e) {
						return e.textContent === L(176) ? (e.textContent = L(177), ra.e.readOnly = !0, aOt.r7(0), aOt.button.style.color = bB.ot, bj.sF.sG(147, ra.e.value), aOs(bj.eN.data[147].value)) : aOu(), !0
					}),
					qW = (aOo.qe(new sI([aOv.button])), aOo.qV()),
					aOs = function(fS) {
						qW.innerHTML = t.y.aOw(fS, bj.eN.data[105].value, data.t2)
					},
					aOu = function() {
						aOv.button.textContent = L(176), ra.e.readOnly = !1, aOt.r7(1), aOt.button.style.color = bB.nu
					};
				return aOs(bj.eN.data[147].value), aOo.qe(new sI([aOt.button])), aOo
			}());
		qi.push(function() {
			var aOo = new qQ,
				ra = (aOo.qT(L(178)), new rb({
					value: data.t2,
					e9: -1
				}));
			return ra.e.readOnly = !0, aOo.qe(ra), aOo.qe(new sI([new w(L(179), function(e) {
				return bA.qn.a46(ra.e), bA.qn.v3(e), !0
			}).button])), aOo
		}()), data.aOW || (qi.push(function() {
			var aOo = new qQ,
				aOx = (aOo.qT(L(180)), new rb(bj.eN.data[106]));
			return aOx.e.readOnly = !0, aOx.e.type = "password", aOo.qe(aOx), aOo.qe(new sI([new w(L(181), function(e) {
				return e.textContent === L(181) ? (e.textContent = L(182), aOx.e.type = "text") : (e.textContent = L(181), aOx.e.type = "password"), !0
			}).button, new w(L(179), function(e) {
				return bA.qn.a46(aOx.e), bA.qn.v3(e), !0
			}).button])), aOo.qe(new sI([new w(L(183), function() {
				t.u(8, t.a5q().aO0, new t5(15))
			}).button])), aOo.qT(L(184), "0.8em"), aOo.qV(L(185)), aOo.qV(L(186)), aOo.qV(L(187)), aOo
		}()), qi.push(function() {
			var aOo = new qQ;
			return aOo.qT(L(188)), aOo.qe(new sI([new w(L(189), function() {
				t.u(6, t.a5q().aO0)
			}).button])), aOo.qe(new sI([new w(L(190), function() {
				bj.sF.sG(105, ""), t.u(8, t.a5q().aO0, new t5(18))
			}).button])), aOo.qe(new sI([new w(L(191) + bj.eN.data[105].value, function() {
				t.u(4, 0, new v(L(192), L(193), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a5r(7).aO0)
				})]))
			}, bB.oZ).button])), aOo
		}()), qi.push(function() {
			function aOz(e9) {
				aOy[0].r7(0 === e9 ? bB.o6 : bB.oH), aOy[1].r7(0 === e9 ? bB.o6 : bB.oZ), aOy[2].r7(e9 === qc.qd.length - 1 || e9 < 5 ? bB.o6 : bB.oZ)
			}
			var qc, aOy, aOo = new qQ;
			aOo.qT(L(198)), aOo.qV(L(199)), bj.y.wM();
			return aOy = [new w(L(200), function() {
				var e9 = Math.min(bj.eN.data[117].value, qc.qd.length - 1);
				e9 < 1 || (e9 = bj.y.wQ(e9), bj.sF.sG(105, e9.t2), bj.sF.sG(106, e9.password), t.u(8, t.a5q().aO0, new t5(18)))
			}, bB.o6, 1), new w(L(196), function() {
				var e9 = Math.min(bj.eN.data[117].value, qc.qd.length - 1);
				if (!(e9 < 1)) {
					qc.qd[e9].remove(), qc.qd.splice(e9, 1);
					for (var aB = e9; aB < qc.qd.length; aB++) qc.qd[aB].name = "" + aB;
					bj.y.wP(e9), e9 = bj.eN.data[117].value, qc.qd[e9].textContent = qc.qd[e9].textContent.replace("⚪", "🟢"), aOz(e9)
				}
			}, bB.o6, 1), new w(L(197), function() {
				var e9 = Math.min(bj.eN.data[117].value, qc.qd.length - 1);
				if (e9 !== qc.qd.length - 1) {
					for (var aB = qc.qd.length - 1; e9 < aB; aB--) qc.qd[aB].remove(), qc.qd.splice(aB, 1), bj.y.wP(aB);
					aOz(e9)
				}
			}, bB.o6, 1)], qc = new v6(bj.eN.data[117], aOz), aOz(0), qc.qd[0].style.marginTop = "0.5em", aOo.qb(qc), aOo.qe(new sI([aOy[0].button])), aOo.qe(new sI([aOy[1].button])), aOo.qe(new sI([aOy[2].button])), aOo
		}()));
		return qi.push(function() {
				var aOo = new qQ,
					aOp = (aOo.qT(L(204)), [L(205), L(206), L(207), L(208)]),
					e8 = data.aP0;
				return aOo.qZ(L(209) + (data.a1F / 100).toFixed(2) + "<br>" + L(173) + (e8 + 1) + " / " + data.wc + "<br>" + L(174) + aOp[e8 < 10 ? 0 : e8 < 50 ? 1 : e8 < 200 ? 2 : 3]), aOo
			}()), qi.push(function() {
				var aOo = new qQ;
				return aOo.qT(L(201)), aOo.qZ(L(202) + bA.rm.a4u(data.wZ, .1, 1) + "<br>" + L(173) + (data.wa + 1) + " / " + data.wc + "<br>" + L(203) + data.wb), aOo
			}()),
			function(qi) {
				var aOo = new qQ,
					aPC = data.wg,
					aPD = (aOo.qT(L(248)), aOo.qZ(L(249, [data.we.length ? "[" + data.we + "]" : "-"])), aOo.qZ(L(250, [bA.rm.a4u(aPC, .01, 2)])), aOo.qZ(L(251, [data.wi + 1 + " / " + data.wc])), data.wj),
					aPE = (aOo.qZ(L(252, [bA.rm.a4u(aPD, .1, 1)])), data.wl);
				aOo.qZ(L(253, [aPE])), aOo.qZ(L(254, [bA.rm.a4u(aPD / Math.max(aPE, 1), .1, 2)])), aPC = data.wh, aOo.qT(L(255), "0.8em"), aOo.qZ(L(249, [data.wf.length ? "[" + data.wf + "]" : "-"])), aOo.qZ(L(250, [bA.rm.a4u(aPC, .01, 2)])),
					aPD = data.wk, aOo.qZ(L(252, [bA.rm.a4u(aPD, .1, 1)])), aPE = data.wm, aOo.qZ(L(253, [aPE])), aOo.qZ(L(254, [bA.rm.a4u(aPD / Math.max(aPE, 1), .1, 2)])), aOo.qZ(
						"<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", qi.push(aOo)
			}(qi),
			function(qi) {
				var aOo = new qQ;
				aOo.qT(L(256)), aOo.qZ(L(209) + (data.aPF / 10).toFixed(1) + "<br>" + L(174) + (data.aPG.length ? L(257, [data.aPG]) : L(258))), data.aOW && aOo.qe(new sI([new w(L(259), function(e) {
					return b0.y.eV(0) && (bA.qn.v3(e), b0.aG1.aPB({
						t6: 4,
						t2: data.t2
					})), !0
				}, 0, 0, 1).button]));
				aOo.qZ("<a href='https://territorial.io/wiki/clans' target='_blank'>territorial.io/wiki/clans</a>", "0.75em").style.marginTop = "0.8em", qi.push(aOo)
			}(qi), qi.push(function() {
				var aOo = new qQ;
				if (aOo.qT(L(210)), aOo.qZ(L(211) + data.aP1 + "<br>" + L(173) + (data.aP2 + 1) + " / " + data.wc + "<br>" + L(174) + bo.eB(data.aP2)), data.aOW) {
					var ra = new rb({
							value: bj.eN.data[157].value,
							e9: -1
						}, 1, void 0, function(e) {
							bj.sF.sG(157, aOs(e.target.value))
						}),
						aOv = (ra.e.style.marginTop = "0.6em", aOo.qe(ra), new w(L(176), function(e) {
							return e.textContent === L(176) ? (e.textContent = L(177), ra.e.readOnly = !0, aP3[0].r7(0), aP3[1].r7(0), aP3[0].button.style.color = bB.ot, aP3[1].button.style.color = bB.ot, aOs(bj.eN.data[157]
								.value)) : aOu(), !0
						})),
						aP3 = (aOo.qe(new sI([aOv.button])), [new w("−", function(e) {
							return ra.e.readOnly && b0.y.eV(0) && (bA.qn.v3(e), aOu(), b0.aG1.aG2({
								t6: 2,
								t2: data.t2,
								value: bL.i8(parseInt(bj.eN.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return ra.e.readOnly && b0.y.eV(0) && (bA.qn.v3(e), aOu(), b0.aG1.aG2({
								t6: 1,
								t2: data.t2,
								value: bL.i8(parseInt(bj.eN.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qW = aOo.qV(),
						aOs = function(fS) {
							return fS = bA.gM.a4a(fS, 3, 32767), qW.textContent = L(212, [fS - 1, fS, bj.eN.data[105].value]), fS
						};
					aOo.qe(new sI([aP3[0].button, aP3[1].button]));
					for (var aB = 0; aB < 2; aB++) aP3[aB].button.style.fontSize = "1.6em";
					var aOu = function() {
						aOv.button.textContent = L(176), ra.e.readOnly = !1, aP3[0].r7(1), aP3[1].r7(1), aP3[0].button.style.color = bB.nu, aP3[1].button.style.color = bB.nu
					};
					aOs(bj.eN.data[157].value)
				}
				return aOo
			}()),
			function(qi) {
				var aOo, a45;
				data.aOW && !data.aPH || (0 === a0.id || data.aOW || data.aPH) && ((aOo = new qQ).qT("Patreon"), !data.aOW && data.aPI ? aOo.qe(new sI([new w(L(181), function() {
					b0.aG1.aPB({
						t6: 7,
						t2: data.t2
					}), data.aPI = 0, t.u(7)
				}).button])) : data.aPH ? (aOo.qZ(L(260, [(data.aPJ / 100).toFixed(2)]) + "<br>" + L(261, [1 + data.aPK + " / " + data.aPL]) + "<br>" + L(262, [data.aPM ? L(263) : L(264)])), data.aOW || aOo.qe(new sI([new w(L(265),
					function() {
						b0.aG1.aPB({
							t6: 8,
							t2: data.t2
						}), data.aPH = 0, bj.sF.sG(160, 0), t.u(7)
					}).button]))) : (aOo.qZ(L(266), "0.75em").style.marginBottom = "0.3em", aOo.qZ("  • " + L(267), "0.75em").style.whiteSpace = "pre", aOo.qZ("  • " + L(268), "0.75em").style.whiteSpace = "pre", aOo.qZ("  • " + L(
						269), "0.75em").style.whiteSpace = "pre", aOo.qZ(L(270), "0.75em").style.marginTop = "1.0em", aOo.qZ(L(271), "0.75em").style.marginTop = "1.0em", aOo.qZ("<a href='" + bK.aPN +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a45 = "https://www.patreon.com/oauth2/authorize?state=" + data.t2 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aOo.qZ(L(272), "0.75em").style.marginTop = "1.0em", aOo.qZ("<a href='" + a45 +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aOW || (aOo.qe(new sS), aOo.qe(new sI([new w(L(182), function() {
						b0.aG1.aPB({
							t6: 6,
							t2: data.t2
						}), data.aPI = 1, t.u(7)
					}).button])), aOo.qZ(L(273), "0.75em").style.marginTop = "0.75em")), qi.push(aOo))
			}(qi),
			function(qi) {
				var aOo, qc, aOy, e9, aOz;
				data.aOW || bj.vp.get().length && ((aOo = new qQ).qT(L(194)), e9 = 0, aOz = function() {
					var aCg = bj.vp.get().length;
					aOy[0].r7(e9 === aCg ? bB.o6 : bB.oH), aOy[1].r7(e9 === aCg ? bB.o6 : bB.oZ), aOy[2].r7(e9 === aCg || aCg - 1 <= e9 || e9 < 5 ? bB.o6 : bB.oZ)
				}, aOy = [new w(L(195), function() {
					t.u(8, void 0, new t5(25, {
						t6: 0,
						t2: bj.vp.get()[e9],
						t3: 0
					}))
				}, bB.o6, 1), new w(L(196), function() {
					bj.vp.w5(e9), qc.qd[e9].remove(), qc.qd.splice(e9, 1);
					for (var aB = e9; aB < qc.qd.length; aB++) qc.qd[aB].name = "" + aB;
					bj.vp.get().length && (e9 = Math.max(e9 - 1, 0), qc.qd[e9].textContent = qc.qd[e9].textContent.replace("⚪", "🟢")), aOz()
				}, bB.o6, 1), new w(L(197), function() {
					for (var hs = qc.qd.length - 1; e9 < hs; hs--) bj.vp.w5(hs), qc.qd[hs].remove(), qc.qd.splice(hs, 1);
					aOz()
				}, bB.o6, 1)], aOz(), (qc = new v6(bj.vp.w1(), function(aB) {
					e9 = aB, aOz()
				})).qd[0].style.marginTop = "0.5em", aOo.qb(qc), aOo.qe(new sI([aOy[0].button])), aOo.qe(new sI([aOy[1].button])), aOo.qe(new sI([aOy[2].button])), qi.push(aOo))
			}(qi), qi
	}())
}

function aOI() {
	var aPP, aPQ, aPR, qi;

	function aPS() {
		aPU(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		2 === aD.data.aIncomeType ? (bA.qv.a3T(aPR.vh(), aD.data.aIncomeData, 255), bA.qv.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(274), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), aOo.qb(new v6({
			vA: [L(276), L(277), L(278)],
			value: aD.data.aIncomeType
		}, function(e9) {
			aPU(), 2 !== e9 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ey)), aD.data.aIncomeType = e9, t.u(22)
		})), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo;
		1 === aD.data.aIncomeType && ((aOo = new qQ).qT("Value"), aOo.qe(new rb({
			e9: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qi.push(aOo))
	}(qi), function(qi) {
		var aOo;
		2 === aD.data.aIncomeType && ((aOo = new qQ).qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.aIncomeData, 4)), aOo.qe(aPR), qi.push(aOo))
	}(qi), qi))
}

function aOL() {
	var aPP, aPQ, aPR;

	function aPS() {
		aPU(), 3 !== aD.data.botDifficultyType || bA.qv.a3H(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		3 === aD.data.botDifficultyType && bA.qv.a3T(aPR.vh(), aD.data.botDifficultyData, aE.kW.length - 1)
	}

	function aPZ(qi, e9) {
		var aOo = new qQ,
			value = (aOo.qT(e9 < 0 ? L(62) : L(61) + " " + bg.a18[e9 % 9]), 0 <= e9 && (aOo.qZ(L(281) + ": " + aD.data.teamPlayerCount[e9]).style.marginBottom = "1em"), e9 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e9]);
		aOo.qb(new v6({
			vA: aE.kW,
			value: value
		}, function(hs) {
			e9 < 0 ? aD.data.botDifficultyValue = hs : aD.data.botDifficultyTeam[e9] = hs
		})), qi.push(aOo)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(62), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, function() {
		var qi = [];
		if (function(qi) {
				var aOo = new qQ,
					vA = (aOo.qT(L(275)), [L(277), L(279), L(280), L(278)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), vA.splice(2, 1));
				aOo.qb(new v6({
					vA: vA,
					value: value
				}, function(e9) {
					aPU(), aD.data.botDifficultyType = e9, 0 === aD.data.gameMode && 2 === e9 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ey)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qi.push(aOo)
			}(qi), 0 === aD.data.botDifficultyType) aPZ(qi, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aPZ(qi, aB);
		else 3 === aD.data.botDifficultyType && ! function(qi) {
			var aOo = new qQ;
			aOo.qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.botDifficultyData, 8)), aOo.qe(aPR), qi.push(aOo)
		}(qi);
		return qi
	}())
}

function aPa(data) {
	var aOU, aPb, aPc, aPd, aPe, aPf, aPg, colors, aPh, aPi, aPj = 0,
		aPk = 0,
		aPl = !1,
		aPm = !1,
		aPn = [1, 5, 60, 240, 1440, 10080, 43200];

	function aQH(la, lb) {
		! function(la, lb) {
			return aPb < la && la < aPb + aPd && aPc < lb && lb < aPc + aPe
		}(aPj = la, aPk = lb) ? (aPl && (bf.dl = !0), aPl = !1) : (aPl = !0, bf.dl = !0)
	}
	this.show = function() {
		aPm = bj.eN.data[127].value, aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize();
		var eZ = h.k,
			vP = aOU.vM(),
			aPw = eZ * vP.vO,
			eZ = eZ * vP.s7;
		aPf = bA.qn.tT(.06), aPg = bA.qn.tT(.04), aPb = bA.qn.tT(.06), aPc = eZ + aPf, aPd = h.i - aPb - aPg, aPe = aPw + eZ - aPc - aPg
	}, this.vQ = function() {
		aOU.vQ(),
			function() {
				var aB, aPt, gT, f8, fK, g = data.data,
					aQ0 = 1,
					aQ1 = .125,
					aQ2 = aPm ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aPt = g[aB].aPt, gT = aPt.length, aQ0 = Math.max(gT, aQ0), fK = 0; fK < gT; fK++) aQ1 = Math.max(aPt[fK], aQ1), aQ2 = Math.min(aPt[fK], aQ2);
				var nL = aPc + aPe,
					ym = aPe / (aQ1 - aQ2),
					yl = 1 / (aQ0 - 1);
				for (vR.lineWidth = bc.zk, aB = 0; aB < g.length; aB++) {
					for (aPt = g[aB].aPt, gT = aPt.length, f8 = aPb, vR.beginPath(), vR.moveTo(f8 + aPd, nL - ym * (aPt[gT - 1] - aQ2)), fK = gT - 2; 0 <= fK; fK--) vR.lineTo(f8 + yl * fK * aPd, nL - ym * (aPt[fK] - aQ2));
					vR.strokeStyle = colors[aB], vR.stroke()
				}(function(aQ2, aQ1, nL, ym) {
					vR.font = bA.qn.se(0, .25 * aPb), bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 2), vR.fillStyle = colors[0];
					for (var f8 = .92 * aPb, aB = 0; aB < 3; aB++) {
						var fS = aQ2 + aB * (aQ1 - aQ2) / 2;
						vR.fillText((fS / 1e3).toFixed(3), f8, nL - ym * (fS - aQ2))
					}
				})(aQ2, aQ1, nL, ym),
				function(aQ0) {
					var fA = aPc + aPe + .15 * aPg;
					vR.font = bA.qn.se(0, Math.min(.4 * aPg, .028 * h.i)), bA.qn.textBaseline(vR, 0), bA.qn.textAlign(vR, 2), vR.fillStyle = colors[0], vR.fillText(bA.a38.a3x(aPh), aPb + aPd, fA), bA.qn.textAlign(vR, 0), vR.fillText(bA.a38.a3x(
						new Date(aPi.getTime() - 6e4 * (aQ0 - 1) * aPn[data.aPs])), aPb, fA)
				}(aQ0),
				function(aQ0, aQ2, aQ1) {
					if (aPl && !(aQ0 < 2)) {
						for (var a9J, e9 = (aPj - aPb) / aPd * (aQ0 - 1), aQ5 = Math.floor(e9), aQ6 = Math.floor(1 + e9), aQ7 = e9 - aQ5, aQ8 = 1e5, aQ9 = -1, aQA = -1, aQB = aQ1 - (aQ1 - aQ2) * (aPk - aPc) / aPe, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDE, aPt = g[aB].aPt;
							aPt.length <= aQ6 || (aPt = aPt[aQ5] + aQ7 * (aPt[aQ6] - aPt[aQ5]), (aDE = Math.abs(aQB - aPt)) < aQ8 && (aQ8 = aDE, aQ9 = aB, aQA = aPt))
						} - 1 !== aQ9 && (aQ1 = aPc + aPe - (aQA - aQ2) / (aQ1 - aQ2) * aPe, vR.lineWidth = .5 * bc.zk, vR.strokeStyle = colors[aQ9], vR.beginPath(), vR.moveTo(aPb, aQ1), vR.lineTo(aPj, aQ1), vR.lineTo(aPj, aPc + aPe), vR
						.stroke(), vR.beginPath(), vR.arc(aPj, aQ1, .1 * aPb, 0, 2 * Math.PI), vR.fillStyle = colors[aQ9], vR.fill(), aQ2 = aPc + aPe + .15 * aPg, bA.qn.textAlign(vR, 1), a9J = aQ0 - 2 < e9 ? (a9J = aPi.getTime() - 6e4 * aPn[
								data.aPs], new Date(a9J + (e9 - (aQ0 - 2)) * (aPh.getTime() - a9J))) : new Date(aPi.getTime() - 6e4 * (aQ0 - e9 - 1) * aPn[data.aPs]), aQ0 = bA.a38.a3x(a9J), e9 = bA.qn.measureText(aQ0), a9J = bL.i8(aPj, aPb +
								.5 * e9, aPb + aPd - .5 * e9), vR.fillStyle = bA.color.nm(70, 50, 20), vR.fillRect(a9J - .52 * e9, aPc + aPe, 1.04 * e9, .55 * aPg), vR.fillStyle = colors[0], vR.fillText(aQ0, a9J, aQ2), vR.font = bA.qn.se(0,
								.25 * aPb), bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 2), a9J = .92 * aPb, aQ0 = (aQA / 1e3).toFixed(3), e9 = bA.qn.measureText(aQ0), aQ2 = a9J - 1.04 * e9, vR.fillStyle = bA.color.nm(70, 50, 20), vR
							.fillRect(aQ2, aQ1 - .1625 * aPb, aPb - aQ2, .275 * aPb), vR.fillStyle = colors[aQ9], vR.fillText(aQ0, a9J, aQ1))
					}
				}(aQ0, aQ2, aQ1)
			}(), vR.lineWidth = bc.zk, vR.strokeStyle = bB.nu, vR.beginPath(), vR.moveTo(aPb, aPc), vR.lineTo(aPb, aPc + aPe), vR.lineTo(aPb + aPd, aPc + aPe), vR.stroke();
		var aB, fontSize = .5 * aPf,
			g = (vR.font = bA.qn.se(0, fontSize), bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 0), data.data),
			f1 = g.length,
			fA = aPc - .5 * aPf,
			qU = "";
		for (aB = 0; aB < f1; aB++) qU += g[aB].name + "  ";
		qU = qU.trim();
		var aQE = bA.qn.measureText(qU),
			f8 = .5 * (h.i - aQE);
		for (aQE > h.i && (f8 = 0, vR.font = bA.qn.se(0, h.i / aQE * fontSize)), aB = 0; aB < f1; aB++) vR.fillStyle = colors[aB], vR.fillText(g[aB].name, f8, fA), f8 += bA.qn.measureText(g[aB].name + "  ")
	}, this.hD = function(la, lb) {
		aQH(la, lb)
	}, this.a2J = function(la, lb) {
		aQH(la, lb)
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	};
	var aB, dt, a3v, hs, f4 = data.data,
		f1 = f4.length,
		max = 1;
	for (aB = 0; aB < f1; aB++) max = Math.max(max, f4[aB].aPt.length);
	for (aB = 0; aB < f1; aB++)
		for (; f4[aB].aPt.length < max;) f4[aB].aPt.unshift(0);
	dt = new Date, a3v = 6e4 * dt.getTimezoneOffset(), hs = dt.getTime() - a3v, aPh = new Date(hs), 6 === data.aPs ? function(dt, a3v) {
		var aPv = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aPi = dt < 12 ? new Date(Date.UTC(aPv, dt) - a3v) : new Date(Date.UTC(aPv + 1, 0) - a3v)
	}(dt, a3v) : (a3v = 6e4 * aPn[data.aPs], aPi = data.aPs <= 4 ? new Date(hs + a3v - dt.getTime() % a3v) : new Date(hs + a3v - (dt.getTime() + 2592e5) % a3v)), hs = bA.color, colors = [bB.nu, hs.nm(255, 0, 0), hs.nm(0, 200, 0), hs.nm(80, 80,
		255), hs.nm(255, 255, 0), hs.nm(255, 0, 255), hs.nm(0, 255, 255), hs.nm(255, 140, 0), hs.nm(128, 128, 128), hs.nm(0, 255, 140)], aOU = new vB(L(282) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aPs] + ", " + bA.a38.a3u(aPh), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(283), function() {
			t.u(14)
		})
	], !1)
}

function aOA() {
	var aOU, aOV, qi;
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aOV.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(L(284), [new w("⬅️ " + L(37), function() {
		t.aOS(13)
	})]), aOV = new qg(aOU.vH, ((qi = []).push(function() {
		var aOo = new qQ,
			aOv = (aOo.qT(L(285)), aOo.qV(L(286)), new w(L(287), function() {
				bj.sF.sG(130, 0), t.y.aQM()
			}, 0, 0, 1)),
			ra = new rb(bj.eN.data[126], 0, function() {
				aOv.button.click()
			});
		return aOo.qe(ra), ra.e.placeholder = "a,b,c", ra.e.style.marginTop = "0.5em", aOo.qe(new sI([aOv.button])), aOo
	}()), qi.push(function() {
		var aOo = new qQ,
			aOv = new w(L(287), function() {
				bj.sF.sG(130, 1), t.y.aQM()
			}, 0, 0, 1),
			aQN = new rb(bj.eN.data[129], 1, function() {
				aQN.e.focus()
			}),
			aQO = new rb(bj.eN.data[128], 1, function() {
				aOv.button.click()
			});
		return aOo.qT(L(288)), aOo.qe(aQO), aQO.e.style.marginBottom = "0.5em", aOo.qT(L(289)), aOo.qe(aQN), aOo.qe(new sI([aOv.button])), aOo
	}()), qi.push(function() {
		var aOo = new qQ;
		return aOo.qT(L(290)), bj.eN.data[125].vA = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aOo.qb(new v6(bj.eN.data[125])), aOo
	}()), qi.push(function() {
		var aOo = new qQ;
		return aOo.qT(L(291)), aOo.qe(new sC(bj.eN.data[127], L(292))), aOo
	}()), qi))
}

function aO9() {
	var aOU, aQP, aPd, aQQ, aQR, aQS, colors = [0, 0, 0],
		aQT = -1;

	function aQW(aB) {
		var aQX = aQP.fA + aB * (bc.gap + aQS);
		vR.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vR.fillRect(aQQ, aQX, colors[aB] * aQR, aQS), vR.strokeStyle = bB.nu, vR.strokeRect(aQQ, aQX, aQR,
			aQS), vR.fillStyle = bB.nu, vR.font = bA.qn.se(0, .32 * aQS), bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 0), vR.fillText(L(0 === aB ? 295 : 1 === aB ? 296 : 297) + aQU(aB), aQQ + bc.gap, aQX + .53 * aQS)
	}

	function aQU(aB, aQY) {
		return aQY = aQY || 256, bL.i8(Math.floor(aQY * colors[aB]), 0, aQY - 1)
	}

	function a2n(la, lb) {
		return !(la < aQQ || lb < aQP.fA || la > aQP.f8 + aQP.i || lb > aQP.fA + aQP.j)
	}
	this.show = function() {
		var fS = bj.eN.data[121].value;
		colors[0] = (fS >> 12) / 63, colors[1] = (fS >> 6 & 63) / 63, colors[2] = (63 & fS) / 63, aOU.show(), this.resize()
	}, this.s4 = function() {
		bj.sF.sG(121, (aQU(0, 64) << 12) + (aQU(1, 64) << 6) + aQU(2, 64)), aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aQP.resize();
		var eZ = h.k,
			vP = aOU.vM(),
			aQV = (aQP.fA = Math.max(aQP.fA, eZ * vP.s7 + bc.gap), eZ * vP.vO - 2 * bc.gap);
		aQP.j = Math.min(aQP.j, aQV), aQP.i = 2 * aQP.j, aQP.fA = eZ * vP.s7 + .5 * (eZ * vP.vO - aQP.j), aQP.f8 = .5 * (h.i - aQP.i), aPd = .25 * aQP.i, aQQ = aQP.f8 + aPd + bc.gap, aQR = aQP.i - aPd - bc.gap, aQS = (aQP.j - 2 * bc.gap) / 3
	}, this.vQ = function() {
		var e8, tS, fL;
		aOU.vQ(), vR.lineWidth = bc.zk, e8 = aQU(0), tS = aQU(1), fL = aQU(2), vR.fillStyle = "rgb(" + e8 + "," + tS + "," + fL + ")", vR.fillRect(aQP.f8, aQP.fA, aPd, aQP.j), vR.strokeStyle = bB.nu, vR.strokeRect(aQP.f8, aQP.fA, aPd, aQP.j), vR
			.fillStyle = e8 + tS + fL < 306 && tS < 150 ? bB.nu : bB.nl, bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 1), vR.font = bA.qn.se(0, .1 * aQP.j), vR.rotate(-Math.PI / 2), vR.fillText(L(294), -aQP.fA - .5 * aQP.j, aQP.f8 + .5 * aPd),
			vR.setTransform(1, 0, 0, 1, 0, 0), aQW(0), aQW(1), aQW(2)
	}, this.hD = function(la, lb) {
		a2n(la, lb) && (aQT = bL.i8(Math.floor((lb - aQP.fA) / (aQS + .75 * bc.gap)), 0, 2), colors[aQT] = bL.i8((la - aQQ) / aQR, 0, 1), bf.dl = !0)
	}, this.a2J = function(la) {
		-1 !== aQT && (colors[aQT] = bL.i8((la - aQQ) / aQR, 0, 1), bf.dl = !0)
	}, this.a2M = function(la, lb, deltaY) {
		a2n(la, lb) && (la = bL.i8(Math.floor((lb - aQP.fA) / (aQS + .75 * bc.gap)), 0, 2), colors[la] = bL.i8(colors[la] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a2h = function() {
		0 <= aQT && (aQT = -1, bf.dl = !0)
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(L(293), [new w("⬅️ " + L(37), function() {
		t.y.aD8()
	})], !1), aQP = new rO([.5, .25], [.5, .5], 1)
}

function aOH() {
	var aPP, aPQ, aPR, rM;

	function aPS() {
		aPU(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aOT()[19] = null, t.a1z()
	}

	function aQZ() {
		aPU(), t.u(21)
	}

	function aPU() {
		1 === aD.data.gameMode ? aD.a5H.a5M() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qv.a3T(aPR.vh(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, rM = [new w("⬅️ " + L(37), aPS)], 1 === aD.data.gameMode && rM.push(new w(L(298), aQZ, 1, 1)), aPP = new vB(L(299), rM), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), 0 === aD.data.gameMode && (aOo.qb(new v6({
			vA: [L(300), L(278)],
			value: aD.data.colorsType
		}, function(e9) {
			aPU(), aD.data.colorsType = e9, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ey || (aD.data.colorsData = new Uint32Array(aD.ey)), t.u(21)
		})), aOo.qe(new sS));
		aOo.qe(new sC({
			value: aD.data.selectableColor
		}, L(301), function(value) {
			aD.data.selectableColor = value
		})), qi.push(aOo)
	}(rM = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qi) {
		var aOo = new qQ;
		aOo.qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.colorsData, 1)), aOo.qe(aPR), qi.push(aOo)
	}(rM) : (aD.a5H.a5M(), rM.push(function() {
		var aOo = new qQ;
		aOo.qT(L(281));
		for (var aB = 0; aB < bg.a18.length; aB++) {
			var hs = (aB + 1) % bg.a18.length,
				e = aOo.qZ((0 == hs ? "" : "Team ") + bg.a18[hs]);
			aB && (e.style.marginTop = "0.5em"), aOo.qe(new rb({
				e9: -1,
				value: aD.data.teamPlayerCount[hs]
			}, 1, 0, function(e) {
				aPP.vI[1].r7(0);
				var playerCount = bL.i8(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aQb] = playerCount
			})).e.aQb = hs
		}
		return aOo
	}())), rM))
}

function t5(id, a4d, aQc) {
	var aOU, aQd;

	function aQi() {
		aQd.qj.innerHTML += "<br>" + L(304)
	}

	function aQs() {
		var fL = 1;
		t.u(4, 1, new v(L(305), L(306), !1, [new w("🔄 Reload", function() {
			fL && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fL = 0
		}, bB.oH)]))
	}

	function aQh() {
		bD.a7(90), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bH.dd(bD.aC), bj.sF.sG(110, bF.t7.t8(bF.t7.t9(15))), b0.aG1.aQu()
	}
	this.aQe = !0, this.aQf = id, this.show = function() {
		aOU.show(), this.resize(), 15 === id ? (b0.y.aQg(id) ? aQh : aQi)() : 16 === id ? b0.y.aQg(id) ? b0.eW.eX(2) : aQi() : 17 === id ? b0.y.aQg(id) ? b0.eW.eX(3) : aQi() : 18 === id ? (b0.y.close(0, 3253), b0.y.aGt(0, id), aQi()) : 21 ===
			id ? b0.y.aQg(id) ? b0.aQj.aQk(a4d.tN, a4d.tO, a4d.tP) : aQi() : 22 === id ? b0.y.aQg(id) ? b0.aQj.aQl(a4d.tN, a4d.aQm, a4d.aQn) : aQi() : 23 === id ? b0.y.aQg(id) ? b0.aQj.aQo(a4d.aPs, a4d.a1U) : aQi() : 24 === id ? b0.y.aQg(id) ? b0
			.aQj.aQp(a4d.aPs, a4d.tO, a4d.tP) : aQi() : 25 === id ? b0.y.aQg(id) ? b0.aG1.aPB(a4d) : aQi() : 28 === id ? b0.y.aQg(id) ? b0.aQj.aQq(a4d.tN, a4d.aQm, a4d.aQn) : aQi() : 29 === id ? b0.y.aQg(id) ? b0.aG1.aQr(a4d) : aQi() : 30 ===
			id && (b0.y.aQg(id) ? b7.aD3() || aQs() : aQi())
	}, this.aQt = function() {
		15 === id ? aQh() : 16 === id ? b0.eW.eX(2) : 17 === id ? b0.eW.eX(3) : 18 === id ? t.u(8, this.aO0, new t5(16)) : 21 === id ? b0.aQj.aQk(a4d.tN, a4d.tO, a4d.tP) : 22 === id ? b0.aQj.aQl(a4d.tN, a4d.aQm, a4d.aQn) : 23 === id ? b0.aQj.aQo(
			a4d.aPs, a4d.a1U) : 24 === id ? b0.aQj.aQp(a4d.aPs, a4d.tO, a4d.tP) : 25 === id ? b0.aG1.aPB(a4d) : 28 === id ? b0.aQj.aQq(a4d.tN, a4d.aQm, a4d.aQn) : 29 === id ? b0.aG1.aQr(a4d) : 30 === id ? b7.aD3() || aQs() : 1e3 === id && (
			this.aQf = id = 25, b0.aG1.aPB(a4d))
	}, this.aD7 = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aO0) : 17 === code ? (b0.y.close(0, 3252), bj.y.wP(0), bj.eN.data[117].vA && 0 < bj.eN.data[117].vA.length ? (bu = bj.y.wQ(0), bj.sF.sG(105, bu.t2), bj.sF.sG(106, bu
			.password), t.u(8, this.aO0, new t5(16))) : (bj.sF.sG(105, ""), t.y.aD8())) : 21 === code ? t.u(10, this.aO0, new aBa(data)) : 23 === code ? t.u(13, this.aO0, new aPa({
			data: data,
			aPs: a4d.aPs
		})) : 25 === code ? (t.y.aOB.t2 = a4d.t2, bj.vp.mh(a4d.t2), t.u(15, this.aO0)) : 30 === code && (data ? t.u(1) : aQs()))
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aQd.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(L(302), [new w("⬅️ " + L(37), function() {
		aQc ? t.u(29) : t.y.aD8()
	})]), aQd = new sH(aOU.vH, L(303))
}

function aOF() {
	var aPP, aPQ, qi;

	function aQx() {
		var gT;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5H.a5M()), gT = bA.qv.a3N(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gT) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aPS() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aQz(), aD.data.canvas = null, t.u(5, 5)
	}

	function aQz() {
		b9.q7.dd(), bj.sF.sG(156, b9.a5X.a0E())
	}

	function aQv() {
		aD.data.isReplay = 0, aQz(), aD.a5H.a5j(), aa.aH4(), aD.a5H.a5g(), aD.data.canvas = 2 === aD.data.mapType ? bS.xN : null, aD.a5L(), aD.a5J = 1
	}

	function aRB() {
		aQx();
		for (var g = [aR2(), aR3(), aR4()], aB = 3; aB < 6; aB++) t.removeChild(aPQ.qj, aPQ.qk[aB].qS), aPQ.qk[aB] = g[aB - 3], aPQ.qj.appendChild(aPQ.qk[aB].qS);
		aPQ.resize()
	}

	function aR2() {
		var aRC, aOo = new qQ;
		return aOo.qT(L(299)), aRC = 0 === aD.data.gameMode ? [L(300), L(278)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aOo.qZ(aRC), aOo.qe(new sI([new w(L(310), function() {
			t.u(21)
		}).button])), aOo
	}

	function aR3() {
		var aOo = new qQ,
			g = (aOo.qT(L(62)), [L(277) + ": " + aE.kW[aD.data.botDifficultyValue], L(279), L(280), L(278)]);
		return aOo.qZ(g[aD.data.botDifficultyType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(25)
		}).button])), aOo
	}

	function aR4() {
		var aOo = new qQ,
			g = (aOo.qT("Spawning"), [L(300), L(312), L(278)]);
		return aOo.qZ(g[aD.data.spawningType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(24)
		}).button])), aOo
	}
	this.show = function() {
		aPP.show(), this.resize(), aPP.vH.scrollTop = t.y.aJI[0]
	}, this.s4 = function() {
		t.y.aJI[0] = aPP.vH.scrollTop, aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB("🔧 " + L(307), [new w("⬅️ " + L(37), aPS), new w(L(308), aQv)]), aQx(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.xN : 1 === aD.data.mapType ? aD.data.canvas = bS.aLv(bS.a5h(aD.data), 0).xN : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aLv(bS.a5h(aD.data), aD.data.mapSeed).xN)), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ,
			a3d = (aOo.qT(L(309)), aD.data.canvas);
		a3d.style.width = "100%", aOo.qe({
			e: a3d
		}), aOo.qe(new sI([new w(L(310), function() {
			t.u(20)
		}).button])), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo = new qQ;
		aOo.qT(L(281)), aOo.qe(new rb({
			e9: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.i8(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qv.a3N(aD.data.teamPlayerCount, 0), aD.a5H.a5M(), bA.qv.a3N(aD.data.teamPlayerCount, 0) !== e) && aRB()
		})), qi.push(aOo)
	}(qi), function(qi) {
		var aOo = new qQ;
		aOo.qT(L(311)), aOo.qb(new v6({
			vA: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e9) {
			aD.data.gameMode !== e9 && (aD.data.gameMode = e9, aRB())
		})), qi.push(aOo)
	}(qi), qi.push(aR2()), qi.push(aR3()), qi.push(aR4()), function(qi) {
		var aOo = new qQ,
			g = (aOo.qT(L(313)), [L(314), L(315), L(278)]);
		aOo.qZ(g[aD.data.playerNamesType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(23)
		}).button])), qi.push(aOo)
	}(qi), function(qi) {
		var aOo = new qQ,
			g = (aOo.qT(L(274)), [L(276), L(277) + ": " + aD.data.aIncomeValue, L(278)]);
		aOo.qZ(g[aD.data.aIncomeType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(22)
		}).button])), qi.push(aOo)
	}(qi), function(qi) {
		var aOo = new qQ,
			g = (aOo.qT(L(316)), [L(276), L(277) + ": " + aD.data.tIncomeValue, L(278)]);
		aOo.qZ(g[aD.data.tIncomeType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(26)
		}).button])), qi.push(aOo)
	}(qi), function(qi) {
		var aOo = new qQ,
			g = (aOo.qT(L(317)), [L(276), L(277) + ": " + aD.data.iIncomeValue, L(278)]);
		aOo.qZ(g[aD.data.iIncomeType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(27)
		}).button])), qi.push(aOo)
	}(qi), function(qi) {
		var aOo = new qQ,
			g = (aOo.qT(L(318)), [L(276), L(277) + ": " + aD.data.sResourcesValue, L(278)]);
		aOo.qZ(g[aD.data.sResourcesType]), aOo.qe(new sI([new w(L(310), function() {
			t.u(28)
		}).button])), qi.push(aOo)
	}(qi), function(qi) {
		var aOo = new qQ;
		aOo.qT(L(319)), aOo.qe(new sI([new w(L(320), function() {
			t.x(), aD.a5H.a5k(), t.y.aJI[0] = 0, t.u(19)
		}).button])), aOo.qe(new sI([new w(L(321), function() {
			bm.aJ7()
		}).button])), aOo.qe(new sI([new w(L(322), function() {
			return bm.aJ9(), !0
		}).button])), qi.push(aOo)
	}(qi), qi))
}

function aOQ() {
	var aPP, rg = !0;

	function rx(rw, a5o) {
		var qS = document.createElement("div"),
			aRE = document.createElement("span"),
			aRF = document.createElement("span");
		aRE.textContent = aW.aBw(a5o.eQ) + ":", aRE.style.color = bB.o9, aRE.style.paddingRight = "0.4em", aRE.style.display = "table-cell", aRE.style.width = "6ch", aRE.style.textAlign = "end", qS.appendChild(aRE), aRF.textContent = a5o.qU, qS
			.appendChild(aRF), qS.style.display = "table", a5o.pW && function(qS, pW) {
				{
					var aIt;
					pW >= 1024 - aj.s3.zX ? ((aIt = document.createElement("img")).src = aj.xQ.zL[pW - 1024 + aj.s3.zX].toDataURL(), aIt.style.width = "1.5em", aIt.style.height = "1.5em", aIt.style.verticalAlign = "middle", qS.appendChild(aIt)) : ((
						aIt = document.createElement("span")).textContent = aj.s3.zm(pW), aIt.style.display = "inline-block", aIt.style.fontSize = "1.5em", aIt.style.lineHeight = "1em", aIt.style.verticalAlign = "middle", qS.appendChild(aIt))
				}
			}(qS, a5o.pW), rw.appendChild(qS)
	}

	function s0() {
		rg && (aPP.vH.scrollTop = aPP.vH.scrollHeight)
	}
	this.clear = function() {
		aPP.vH.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a6h = bq.a5s(), f1 = a6h.length, rw = document.createDocumentFragment(), aB = 0; aB < f1; aB++) rx(rw, a6h[aB]);
		aPP.vH.appendChild(rw), s0(), aPP.show(), this.resize(), rg = !0, s0()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPP.vH.style.padding = "0.4em " + bA.qn.qw(bc.qt)
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, this.a1A = function(a5o) {
		var rw = document.createDocumentFragment();
		rx(rw, a5o), aPP.vH.appendChild(rw), s0()
	}, (aPP = new vB(L(323), [new w("⬅️ " + L(37), function() {
		t.aOS(1)
	})])).vH.style.overflowY = "auto", aPP.vH.addEventListener("scroll", function() {
		rg = aPP.vH.scrollTop >= aPP.vH.scrollHeight - aPP.vH.clientHeight - 2
	})
}

function aON() {
	var aPP, aPQ, aPR, qi;

	function aPS() {
		aPU(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		2 === aD.data.iIncomeType && bA.qv.a3T(aPR.vh(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(317), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), aOo.qb(new v6({
			vA: [L(276), L(277), L(278)],
			value: aD.data.iIncomeType
		}, function(e9) {
			aPU(), 2 !== e9 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ey), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e9, t.u(27)
		})), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo;
		1 === aD.data.iIncomeType && ((aOo = new qQ).qT("Value"), aOo.qe(new rb({
			e9: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qi.push(aOo))
	}(qi), function(qi) {
		var aOo;
		2 === aD.data.iIncomeType && ((aOo = new qQ).qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.iIncomeData, 4)), aOo.qe(aPR), qi.push(aOo))
	}(qi), qi))
}

function aO5() {
	var aRH, aRI, aQP, ra, aRJ;
	this.aHc = new tD, aQP = new rO([.45, .27], [.5, .5], 2 / 3), aRI = [new w("⚔️<br>" + L(324), function() {
			aRK(0)
		}, bB.oN), new w("🗡️<br>" + L(307), function() {
			aRK(1)
		}, bB.og), new w("🔑<br>" + L(325), function() {
			aRK(2)
		}, bB.oy), new w("☰<br>" + L(326), function() {
			aRK(3)
		}, bB.o7), new w("", function() {
			t.u(12)
		}, bB.nq, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], ra = new rb(bj.eN.data[122]);
	for (var aB = 0; aB < aRI.length; aB++) aRI[aB].button.style.position = "absolute";

	function aRK(e9) {
		a0.a1.setState(10), ab.tW() || ab.aHT(), 0 === e9 ? t.y.a5a() : 1 === e9 ? (b9.aJS.x8(bj.eN.data[156].value, 1) || aD.a5H.a5k(), t.u(19)) : 2 === e9 ? 0 !== a0.id || bj.eN.data[140].value ? t.u(8, t.t4, new t5(16)) : t.y.aRL(t.t4, 16) : 3 ===
			e9 && t.u(1)
	}
	ra.e.style.position = "absolute", ra.e.style.textAlign = "center", ra.e.placeholder = L(327), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aHc.show(), aRI[4].r7(bA.color.a3k(bj.eN.data[121].value)), this.resize(), document.body.appendChild(ra.e);
		for (var aB = 0; aB < aRI.length; aB++) document.body.appendChild(aRI[aB].button);
		1 !== a0.id || a0.dw < 5 || (aRJ && bf.eQ > aRJ + 144e5 ? a0.wA.setState(14) : aRJ = bf.eQ)
	}, this.s4 = function() {
		this.aHc.s4(), t.removeChild(document.body, ra.e);
		for (var aB = 0; aB < aRI.length; aB++) t.removeChild(document.body, aRI[aB].button)
	}, this.resize = function() {
		this.aHc.resize(), this.aHc.resize(), aQP.resize();
		var gap = .5 * bc.gap,
			u2 = 10 / 99 * .84 * aQP.i,
			aRO = .16 * aQP.j,
			a9r = .19 * aQP.i,
			f8 = aQP.f8 + a9r,
			u2 = aQP.fA + u2 + 3 * gap,
			i = .5 * (aQP.i - gap) - a9r,
			a9r = aQP.i - 2 * a9r - aRO - gap,
			a9r = (bA.qn.tU(ra.e, f8, u2, a9r, aRO), bA.qn.tU(aRI[4].button, f8 + a9r + gap, u2, aRO, aRO), .5 * (aQP.fA + aQP.j - (u2 += aRO + gap) - gap));
		bA.qn.tU(aRI[0].button, f8, u2, i, a9r), bA.qn.tU(aRI[1].button, f8 + i + gap, u2, i, a9r), bA.qn.tU(aRI[2].button, f8, u2 + a9r + gap, i, a9r), bA.qn.tU(aRI[3].button, f8 + i + gap, u2 + a9r + gap, i, a9r);
		bA.qn.tU(aRI[5].button, f8, u2 + a9r * 2 + gap * 2, i * 2 + gap, a9r / 3);
		bA.qn.tU(aRI[6].button, f8, u2 + a9r * 2.33 + gap * 3, i * 2 + gap, a9r / 3);
		for (var aB = 0; aB < aRI.length; aB++) aRI[aB].button.style.font = bA.qn.se(0, bA.qn.uq(.065 * aQP.j)), bA.qn.qx(aRI[aB].button, 5);
		ra.e.style.font = bA.qn.se(0, bA.qn.uq(.08 * aQP.j)), bA.qn.qx(ra.e, 5)
	}, this.vQ = function() {
		if (aa.aH8(), aT.vQ(), f1 = Math.floor((a0.a1.i9() ? .018 : .0137) * h.iA), vR.font = bA.qn.se(0, Math.max(5, f1)), bA.qn.textBaseline(vR, 0), bA.qn.textAlign(vR, 2), vR.fillStyle = bB.nu, vR.fillText(l.dw, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vR.measureText(text).width, f1 = Math.max(5, f1), vR.textAlign = "left", vR.textBaseline = "middle", vR.fillText(text, vR.canvas.width - textLength - f1 / 2, 2 * f1), aO.vQ(), bY.vQ(), ab.tW()) {
			vR.imageSmoothingEnabled = !1;
			var text = ab.aHB("territorial.io"),
				textLength = .84 * aQP.i / text.width;
			vR.setTransform(textLength, 0, 0, textLength, aQP.f8 + .08 * aQP.i, aQP.fA), aRH = aRH || bA.a34.a4b(text, bA.a34.a4h, [0, 0, 0]);
			for (var f8 = -1; f8 <= 1; f8 += 2)
				for (var fA = -1; fA <= 1; fA += 2) vR.drawImage(aRH, f8, fA);
			vR.drawImage(text, 0, 0), vR.imageSmoothingEnabled = !0;
			var f1 = ab.aHB("logo"),
				aRR = .6666 * textLength * text.height / f1.height,
				nX = .5 * h.i,
				nY = aQP.fA + .5 * textLength * text.height - .5 * aRR * f1.height;
			vR.setTransform(aRR, 0, 0, aRR, nX - .6 * textLength * text.width, nY), vR.drawImage(f1, 0, 0), vR.setTransform(aRR, 0, 0, aRR, nX + .6 * textLength * text.width - aRR * f1.width, nY), vR.drawImage(f1, 0, 0), vR.setTransform(1, 0, 0,
				1, 0, 0), vR.imageSmoothingEnabled = !0
		}
	}
}

function aOC() {
	var aOU, aRS, aRT, vC;

	function aRU(aB) {
		t.u(8, t.t4, new t5(21, {
			tN: aB,
			tO: 0,
			tP: 10
		}))
	}
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aRS.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aRT = [new w(L(328), function() {
		aRU(1)
	}, 0, 0, 1), new w(L(329), function() {
		aRU(2)
	}, 0, 0, 1), new w(L(330), function() {
		aRU(3)
	}, 0, 0, 1), new w(L(331), function() {
		aRU(0)
	}, 0, 0, 1), new w(L(332), function() {
		aRU(9)
	}, 0, 0, 1), new w(L(333), function() {
		aRU(10)
	}, 0, 0, 1), new w(L(334), function() {
		aRU(11)
	}, 0, 0, 1)], vC = [new w("⬅️ " + L(37), function() {
		t.a1z()
	})], aOU = new vB(L(335), vC), aRS = new rL(aRT, aOU.vH)
}

function aDW(title, qa, aRV) {
	var aOU, aQd;
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aQd.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aRV = aRV || [new w("⬅️ " + L(37), function() {
		t.a1z()
	}, bB.oZ)], aOU = new vB(title, aRV), aQd = new sH(aOU.vH, qa), bA.qn.textAlign(aOU.vH.style, 1)
}

function aBa(data) {
	var aOU, aRW;

	function aRY(ja) {
		var f1 = data.data.length;
		if (f1) {
			for (var tO, max = min = parseInt(data.data[0][0]), aB = 1; aB < f1; aB++) var aFW = parseInt(data.data[aB][0]),
				min = Math.min(aFW, min),
				max = Math.max(aFW, max);
			tO = ja < 0 ? min + ja : max + 1, t.u(8, t.a5q().aO0, new t5(21, {
				tN: data.tN,
				tO: tO,
				tP: tO + Math.abs(ja)
			}))
		}
	}
	if (this.show = function() {
			aOU.show(), this.resize()
		}, this.s4 = function() {
			aOU.s4()
		}, this.resize = function() {
			aOU.resize(), aRW.resize()
		}, this.a2r = function(eZ) {
			2 === eZ && aOU.vI[0].r4()
		}, data.aBb) {
		aOU = new vB(L(111), [new w("⬅️ " + L(37), function() {
			t.a1z()
		})]);
		var f4 = {
				so: [],
				su: [L(348), L(349), L(350) + " ↗"],
				sz: [12, 50, 38]
			},
			a5e = aD.data.a5e;
		if (a5e)
			for (var f1 = a5e.length, so = f4.so, a1O = ag.a1O, aB = 0; aB < f1; aB++) so.push([{
				fS: aB + 1 + ".",
				dt: 0
			}, {
				fS: a1O[aB],
				dt: 0
			}, {
				fS: bF.t7.a03(a5e[aB], 5),
				dt: 1,
				t2: a5e[aB],
				t3: 0
			}]);
		aRW = new sn(aOU.vH, f4)
	} else {
		var f4 = data.data.length ? 0 : 1,
			aRV = [new w("⬅️ " + L(37), function() {
				t.a1z()
			}), new w(L(336), function() {
				aRY(-10)
			}, f4, 0, 1), new w(L(337), function() {
				aRY(10)
			}, f4, 0, 1), new w(L(283), function() {
				t.u(11, 10, new aRZ({
					tN: data.tN
				}))
			})],
			su = [L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(345), L(346), L(347), L(333), L(334), "Audit Log"];
		aOU = new vB(su[data.tN], aRV), ! function() {
			var aB, f4 = {
					so: []
				},
				so = f4.so,
				aRb = data.data,
				f1 = aRb.length;
			f1 && 0 === aRb[0][0] && 0 <= (e9 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tN]) && (t.y.tQ[e9] = aRb[0][1]);
			var nW = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tN],
				a4n = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tN],
				e9 = [
					[L(351), L(352) + " ↗", L(353)],
					[L(351), L(354), L(355), L(356) + " ↗"],
					[L(351), L(352) + " ↗", L(355)],
					[L(351), L(352) + " ↗", L(355)],
					[L(348), L(357), L(358) + " ↗", L(359) + " ↗", L(115)],
					[L(348), L(357), L(360) + " ↗", L(361) + " ↗", L(362)],
					[L(348), L(357), L(363) + " ↗", L(364) + " ↗", L(365)],
					[L(348), L(357), L(360) + " ↗", L(361) + " ↗", L(366)],
					[L(348), L(357), L(358) + " ↗", L(359) + " ↗", L(115)],
					[L(351), L(352) + " ↗", L(355)],
					[L(351), L(352) + " ↗", L(367)],
					[L(351), L(352) + " ↗", L(355)],
					[L(348), L(357), L(358) + " ↗", L(359) + " ↗", L(368)]
				];
			if (f4.su = e9[data.tN], f4.sz = [
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
				][data.tN], 0 === data.tN || 2 === data.tN || 3 === data.tN || 9 === data.tN || 10 === data.tN || 11 === data.tN)
				for (aB = 0; aB < f1; aB++) so.push([{
					fS: aRb[aB][0] + 1 + ".",
					dt: 0
				}, {
					fS: aRb[aB][1],
					dt: 1,
					t2: aRb[aB][4],
					t3: aRb[aB][3]
				}, {
					fS: (nW * aRb[aB][2]).toFixed(a4n),
					dt: 0
				}]);
			else if (12 === data.tN)
				for (aB = 0; aB < f1; aB++) {
					var aRe = aRb[aB][3];
					so.push([{
						fS: "" + aRb[aB][0],
						dt: 0
					}, {
						fS: "" + aRb[aB][4],
						dt: 0
					}, {
						fS: aRb[aB][5],
						dt: 1,
						t2: aRb[aB][1],
						t3: 0
					}, {
						fS: aRb[aB][6],
						dt: 1,
						t2: aRb[aB][2],
						t3: 0
					}, {
						fS: bo.eF(aRe),
						dt: 0
					}])
				} else if (1 === data.tN)
					for (aB = 0; aB < f1; aB++) so.push([{
						fS: aRb[aB][0] + 1 + ".",
						dt: 0
					}, {
						fS: aRb[aB][1],
						dt: 0
					}, {
						fS: (nW * aRb[aB][2]).toFixed(a4n),
						dt: 0
					}, {
						fS: aRb[aB][3],
						dt: 1,
						t2: aRb[aB][5],
						t3: aRb[aB][4]
					}]);
				else if (4 === data.tN || 5 === data.tN || 6 === data.tN || 7 === data.tN || 8 === data.tN)
				for (aB = 0; aB < f1; aB++) {
					var aRf = aRb[aB][5];
					4 === data.tN || 8 === data.tN ? "100%" === (aRf = (aRf % 64 * 100 / (aRf >> 6)).toFixed(0) + "%") && (4 === data.tN ? aRf += " (" + L(369) + ")" : aRf += " (" + L(370) + ")") : 5 === data.tN ? 32768 <= aRf && (aRf = -(aRf -
						32768)) : aRf = (nW * aRf).toFixed(a4n), so.push([{
						fS: "" + aRb[aB][0],
						dt: 0
					}, {
						fS: "" + aRb[aB][6],
						dt: 0
					}, {
						fS: aRb[aB][7],
						dt: 1,
						t2: aRb[aB][1],
						t3: aRb[aB][2]
					}, {
						fS: aRb[aB][8],
						dt: 1,
						t2: aRb[aB][3],
						t3: aRb[aB][4]
					}, {
						fS: "" + aRf,
						dt: 0
					}])
				}
			aRW = new sn(aOU.vH, f4)
		}()
	}
}

function aRZ(a4d) {
	var aOU, aOV, qi;
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aOV.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(L(371), [new w("⬅️ " + L(37), function() {
		t.aOS(10)
	})]), aOV = new qg(aOU.vH, ((qi = []).push(function() {
		var aOv, aOo = new qQ,
			aQN = new rb(bj.eN.data[132], 1, function() {
				aOv.button.click()
			}),
			aQO = new rb(bj.eN.data[131], 1, function() {
				aQN.e.focus()
			});
		aOo.qT(L(288)), aOo.qe(aQO), aQO.e.style.marginBottom = "0.8em", aOo.qT(L(289)), aOo.qe(aQN);
		return aOv = new w(L(287), function() {
			tO = Math.floor(aQO.e.value), tP = Math.floor(aQN.e.value);
			var tP, tO = {
				a3L: Math.min(tO, tP),
				aNb: Math.max(tO, tP)
			};
			t.u(8, t.a5r(10).aO0, new t5(21, {
				tN: a4d.tN,
				tO: tO.a3L,
				tP: tO.aNb
			}))
		}, 0, 0, 1), aOo.qe(new sI([aOv.button])), aOo
	}()), qi.push(function() {
		var aOv, aOo = new qQ,
			aQN = new rb(bj.eN.data[134], 1, function() {
				aOv.button.click()
			}),
			aQO = new rb(bj.eN.data[133], 0, function() {
				aQN.e.focus()
			});
		return aOo.qT(1 === a4d.tN ? L(372) : L(373)), aOo.qe(aQO), aQO.e.style.marginBottom = "0.8em", aOo.qT(L(374)), aOo.qe(aQN), aOv = new w(L(287), function() {
			var aQm = aQO.e.value.slice(0, 20),
				aQn = Math.abs(Math.floor(aQN.e.value));
			t.u(8, t.a5r(10).aO0, new t5(22, {
				tN: a4d.tN,
				aQm: aQm,
				aQn: aQn
			}))
		}, 0, 0, 1), aOo.qe(new sI([aOv.button])), aOo
	}()), qi.push(function() {
		var aOv, aOo = new qQ,
			aQN = new rb(bj.eN.data[152], 1, function() {
				aOv.button.click()
			}),
			aQO = new rb(bj.eN.data[151], 0, function() {
				aQN.e.focus()
			});
		return aOo.qT(L(375)), aOo.qe(aQO), aQO.e.style.marginBottom = "0.8em", aOo.qT(L(374)), aOo.qe(aQN), aOv = new w(L(287), function() {
			var aQm = aQO.e.value.slice(0, 5),
				aQn = Math.abs(Math.floor(aQN.e.value));
			t.u(8, t.a5r(10).aO0, new t5(28, {
				tN: a4d.tN,
				aQm: aQm,
				aQn: aQn
			}))
		}, 0, 0, 1), aOo.qe(new sI([aOv.button])), aOo
	}()), qi))
}

function aOP() {
	var aRj, ta, aRm, tZ, tc, aRk = [new Array(4), [], new Array(2), new Array(2)],
		aRl = new Array(4),
		aRn = new Array(2),
		aRo = [L(61), L(332), L(376), L(377)];

	function aFI() {
		var aEb;
		!bn.a1x || (aEb = aRj.tn.ra.e.value.trim().slice(0, 127)).length < 1 || (aRj.tn.ra.e.value = "", bn.aDZ.a0q(aEb))
	}

	function aRr(aRt) {
		bn.y.rr[3] = 1 - bn.y.rr[3], aRs(3, 1, bn.y.rr[3]), aRt && b0.aFT.aFU(4), bn.y.rr[3] && bj.sF.sG(158, bn.y.rr[0])
	}

	function aRp(fK, fL) {
		bn.y.rr[fK] !== fL && (0 === fK && bn.y.rr[3] && aRr(0), aRs(fK, bn.y.rr[fK], 0), aRs(fK, fL, 1), bn.y.rr[fK] = fL, 0 === fK ? (b0.aFT.aFU(2, fL), bn.y.rr[2] ? (aRj.tp.mh(), aRj.tn.ro(1)) : aRj.tn.ro(0), t.a5q().aF7(), t.a5q().aF6()) : 2 ===
			fK && (0 === fL ? (b0.aFT.aFU(0), aRj.tn.mh(), aRj.tx()) : (b0.aFT.aFU(1), aRj.tp.mh(), aRj.ty())))
	}

	function aRs(fK, fL, color) {
		aRj.tr[fK].rM[fL].r7(color ? bB.oJ : bB.p8)
	}

	function aRw(aEL) {
		return aEL < 7 ? aEL + 2 + " " + L(383) : 7 === aEL || 10 === aEL ? L(332) + " (Full-Sending: " + L(7 === aEL ? 384 : 385) + ")" : 8 === aEL ? "1v1" : L(386)
	}

	function aRx(fS) {
		var a7k = bL.du(fS, 60),
			fS = fS % 60;
		return (a7k < 10 ? "0" : "") + a7k + ":" + (fS < 10 ? "0" : "") + fS
	}
	this.aFe = function() {
		return aRj.tn
	}, this.aDZ = function(t2) {
		aRp(2, 0);
		var qU = aRj.tn.ra.e.value,
			t2 = "@" + t2 + " ";
		qU.length && !bA.rm.a47(qU, " ") && (t2 = " " + t2), aRj.tn.ra.e.value = qU += t2, aRj.tn.ra.e.focus()
	}, this.aF5 = function() {
		aRj.tp.mh()
	}, this.aF7 = function() {
		var aRv = bn.y.rr[0],
			aRv = bn.y.rt[aRv];
		bS.a7(aRv.eh, aRv.mapSeed), ta.rM[0].button.textContent = L(309) + ": " + bS.xD.xE[aRv.eh].name, ta.rM[1].button.textContent = L(311, 0, "Mode") + ": " + aRw(aRv.aEL), ta.rM[2].button.textContent = L(380) + ": " + bS.xD.xE[aRv.aG5].name,
			ta.rM[3].button.textContent = L(381, 0, "Next Mode") + ": " + aRw(aRv.aG6), ta.rM[4].button.textContent = L(382) + ": " + aRx(aRv.aF9), ta.resize()
	}, this.aF6 = function() {
		var aRv = bn.y.rr[0],
			rs = bn.y.rt[aRv];
		aRj.tv(rs.tw);
		for (var aB = 0; aB < bn.uD.uE.length; aB++) aRk[0][aB].rl.textContent = "" + bn.uD.uE[aB].length;
		var uD = bn.uD.uE[aRv],
			aRy = uD.length,
			aRz = bn.uD.uF[aRv];
		aRk[2][1].rl.textContent = "" + aRy, aRk[3][1].rl.textContent = "" + aRz, ta.rM[4].button.textContent = L(382) + ": " + aRx(rs.aF9);
		for (aB = 0; aB < 4; aB++) {
			var aS0 = bn.y.rt[aB];
			aRl[aB] ? 0 === aS0.tw && (aRl[aB].rl.textContent = bS.xD.xE[aS0.eh].name) : aRl[aB] = new rk(bS.xD.xE[aS0.eh].name, tZ.rM[aB].button, 1, 1), bA.rm.startsWith(aRo[aB], "🏆 ") ? aS0.aER || (aRo[aB] = aRo[aB].substring(3), tZ.rM[aB]
				.button.textContent = aRo[aB], tZ.rM[aB].button.appendChild(aRk[0][aB].rl), tZ.rM[aB].button.appendChild(aRl[aB].rl)) : aS0.aER && (aRo[aB] = "🏆 " + aRo[aB], tZ.rM[aB].button.textContent = aRo[aB], tZ.rM[aB].button
				.appendChild(aRk[0][aB].rl), tZ.rM[aB].button.appendChild(aRl[aB].rl))
		}
		var rs = "",
			aS2 = "";
		0 === aRv && (rs = bn.lA.aEg(uD, 0, aRy), aS2 = bn.lA.aEg(uD, 0, aRz)), aRm[0].rl.textContent = rs, aRm[1].rl.textContent = aS2, aRn[1].rl.textContent = "MP: " + bn.y.aEz[0] + "   SP: " + bn.y.aEz[1] + "   Lobby: " + bA.qv.a3Y(bn.uD.uE)
	}, this.aFB = function() {
		aRj.tn.mh()
	}, this.show = function() {
		aRj.show(), this.resize(), bn.message.show()
	}, this.s4 = function() {
		aRj.s4(), bn.ua.s4(), bn.uA.s4(), bn.message.s4()
	}, this.resize = function() {
		aRj.resize(1 - bn.y.rr[2]), bn.message.resize()
	}, this.a2r = function(eZ) {
		2 === eZ ? bn.y.rr[3] ? aRr(1) : aRj.tr[3].rM[0].r4() : eZ < 2 && aRr(1)
	}, tZ = new sL([new w(aRo[0], function() {
		return aRp(0, 0), 2
	}), new w(aRo[1], function() {
		return aRp(0, 1), 2
	}), new w(aRo[2], function() {
		return aRp(0, 2), 2
	}), new w(aRo[3], function() {
		return aRp(0, 3), 2
	})], bB.p8), ta = new sL([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.p9, 1);
	var aRq = new sL([new w(L(378), function() {
		return aRp(2, 0), 2
	}), new w(L(111), function() {
		return aRp(2, 1), 2
	})], bB.p8);
	tc = new sL([new w(L(25, 0, 0, 1), function() {
		t.x(), bn.uU(), b0.y.a29(3240), t.u(5, 5)
	}), new w(L(379), function() {
		return aRr(1), 2
	})], bB.p8), aRj = new tY(tZ, ta, aRq, tc, aFI, bn.ua.aFo);
	for (var aB = 0; aB < 4; aB++) aRk[0][aB] = new rk("0", tZ.rM[aB].button);
	aRk[2][1] = new rk("0", aRq.rM[1].button), aRk[3][1] = new rk("0", tc.rM[1].button), aRm = [new rk("", aRq.rM[1].button, 1, 1), new rk("", tc.rM[1].button, 1, 1)], aRs(0, bn.y.rr[0], 1), aRs(2, bn.y.rr[2], 1), (aRn = [new rk(L(281), aRj.tz(), 1,
		0), new rk("", aRj.tz(), 1, 1)])[0].rl.style.fontSize = "0.4em", aRn[1].rl.style.fontSize = "0.4em"
}

function aO6() {
	var aOU, aOV, qi;
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aOV.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(L(387), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a5r(7).aO0)
	}), new w(L(200), function() {
		bj.sF.sG(105, bG.t7.wx(aOV.qk[0].qR[0].e.value, 5)), bj.sF.sG(106, bG.t7.wx(aOV.qk[1].qR[0].e.value, 15)), t.u(8, t.a5r(7).aO0, new t5(18))
	})]), aOV = new qg(aOU.vH, ((qi = []).push(function() {
		var aOo = new qQ;
		return aOo.qT(L(178)), aOo.qe(new rb({
			value: "",
			e9: -1
		})), aOo
	}()), qi.push(function() {
		var aOo = new qQ,
			aOx = (aOo.qT(L(180)), new rb({
				value: "",
				e9: -1
			}));
		return aOx.e.type = "password", aOo.qe(aOx), aOo.qe(new sI([new w(L(181), function(e) {
			return e.textContent === L(181) ? (e.textContent = L(182), aOx.e.type = "text") : (e.textContent = L(181), aOx.e.type = "password"), !0
		}).button])), aOo
	}()), qi.push(function() {
		var aOo = new qQ;
		return aOo.qT(L(184)), aOo.qV(L(388)), aOo.qV(L(389)), aOo.qV(L(390)), aOo
	}()), qi))
}

function aOD() {
	var aOU, aRS, aRT, vC;

	function aRU(aB) {
		t.u(8, t.t4, new t5(21, {
			tN: aB,
			tO: 0,
			tP: 10
		}))
	}
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aRS.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aRT = [new w(L(343), function() {
		aRU(5)
	}, 0, 0, 1), new w(L(344), function() {
		aRU(6)
	}, 0, 0, 1), new w(L(345), function() {
		aRU(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aRU(12)
	}, 0, 0, 1)], vC = [new w("⬅️ " + L(37), function() {
		t.a1z()
	})], aOU = new vB(L(391), vC), aRS = new rL(aRT, aOU.vH)
}

function aNw() {
	this.eN = {}, this.tQ = new Array(7), this.aOB = null, this.aO8 = null, this.sl = 0, this.aJI = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5a = function() {
		t.x(), aZ.dd()
	}, this.aD8 = function() {
		t.u(0 === aa.a20() ? 5 : 0)
	}, this.aQM = function() {
		if (1 === bj.eN.data[130].value) t.u(8, t.a5q().aO0, new t5(24, {
			aPs: bj.eN.data[125].value,
			tO: bj.eN.data[128].value,
			tP: bj.eN.data[129].value
		}));
		else {
			for (var g = (g = bj.eN.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5q().aO0, new t5(23, {
				aPs: bj.eN.data[125].value,
				a1U: g
			}))
		}
	}, this.aRL = function(aO0, target) {
		t.u(4, aO0, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aS5 +
			"' target='_blank'>" + bK.aS5 + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aO0)
			}), new w("✅ Accept", function() {
				bj.sF.sG(140, 1), 0 === target ? t.u(2, aO0) : t.u(8, aO0, new t5(target))
			})]))
	}, this.aS6 = function() {
		for (var aB = 0; aB < 7; aB++) this.tQ[aB] = bG.wo.ws(bH.pv(5));
		this.tQ[1] = "[" + this.tQ[1] + "]", 5 === t.t4 && (t.a5q().aHc.sG(this.tQ), t.a5q().resize())
	}, this.aOw = function(fS, pH, a7M) {
		fS = bA.gM.a4a(fS, 1, 1e6);
		var aS7 = Math.max(1, 1 + Math.floor(.01 * (fS - 100))),
			pH = L(392, [pH]);
		return (pH += "<br>") + L(393, [a7M]) + "<br>" + L(394, [aS7 < 20 ? fS + aS7 + "–" + (fS + 20) : fS + aS7]) + "<br>" + L(395, [fS])
	}
}

function aOG() {
	var aPP, aPQ, aS8, qi;

	function aPS() {
		b6.uU(), t.aOT()[19] = null, t.a1z()
	}

	function aSF() {
		aSI(), aSG()
	}

	function aSI() {
		aS8.qS.lastChild && t.removeChild(aS8.qS, aS8.qS.lastChild)
	}

	function aSG() {
		var aSJ = bS.a5h(aD.data);
		aD.data.canvas = bS.aLv(aSJ, aD.data.mapSeed).xN, aSH()
	}

	function aSH() {
		var a3d = aD.data.canvas;
		a3d.style.width = "100%", aS8.qS.appendChild(a3d)
	}
	this.aIs = function(a3d) {
		aD.data.canvas && aSI(), aD.data.canvas = a3d, aSH()
	}, this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(309), [new w("⬅️ " + L(37), aPS)]), 2 === aD.data.mapType && b6.dd(), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), aOo.qb(new v6({
			vA: [L(396), L(397), L(398)],
			value: aD.data.mapType
		}, function(e9) {
			2 === (aD.data.mapType = e9) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uU()), t.u(20)
		})), 2 <= aD.data.mapType && (aOo.qe(new sS), aOo.qe(new sC({
			value: aD.data.passableWater
		}, L(399), function(value) {
			aD.data.passableWater = value
		})), aOo.qe(new sC({
			value: aD.data.passableMountains
		}, L(400), function(value) {
			aD.data.passableMountains = value
		})));
		qi.push(aOo)
	}(qi = []), function(qi) {
		if (0 === aD.data.mapType) {
			for (var aOo = new qQ, vA = (aOo.qT(L(309)), []), aB = 0; aB < bS.xD.aMr.length; aB++) vA.push(bS.xD.xE[bS.xD.aMr[aB]].name);
			aOo.qb(new v6({
				vA: vA,
				value: aD.data.mapProceduralIndex
			}, function(e9) {
				aD.data.mapProceduralIndex = e9, aSF()
			})), qi.push(aOo)
		}
	}(qi), function(qi) {
		if (1 === aD.data.mapType) {
			for (var aOo = new qQ, vA = (aOo.qT(L(309)), []), aB = 0; aB < bS.xD.aMs.length; aB++) vA.push(bS.xD.xE[bS.xD.aMs[aB]].name);
			aOo.qb(new v6({
				vA: vA,
				value: aD.data.mapRealisticIndex
			}, function(e9) {
				aD.data.mapRealisticIndex = e9, aSF()
			})), qi.push(aOo)
		}
	}(qi), function(qi) {
		var aOo;
		2 === aD.data.mapType && ((aOo = new qQ).qT(L(401)), aOo.qe(new rb(bj.eN.data[162], 1)), aOo.qT(L(402), "0.8em"), aOo.qe(new sI([new w(L(403), function() {
			return b6.aIl(), !0
		}).button])), qi.push(aOo))
	}(qi), function(qi) {
		var aOo, ra;
		2 === aD.data.mapType && ((aOo = new qQ).qT(L(404)), ra = new rb({
			e9: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aOo.qe(ra), qi.push(aOo))
	}(qi), function(qi) {
		var aOo, ra, aOv;
		0 === aD.data.mapType && ((aOo = new qQ).qT("Seed"), ra = new rb({
			e9: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aSF())
		}), aOv = new w(L(300), function(e) {
			var aLq = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aLq) return ra.e.value = aD.data.mapSeed = aLq, aSF(), !0
		}), aOo.qe(ra), aOo.qe(new sI([aOv.button])), qi.push(aOo))
	}(qi), function(qi) {
		(aS8 = new qQ).qT(L(405)), 2 !== aD.data.mapType ? aSG() : aD.data.canvas && aSH();
		qi.push(aS8)
	}(qi), qi))
}

function v(title, qa, aSK, aRV) {
	var aOU, aQd;
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aQd.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aRV = aRV || [new w("⬅️ " + L(37), function() {
		t.a1z()
	})], aOU = new vB(title, aRV), aQd = new sH(aOU.vH, qa), aSK && bA.qn.textAlign(aOU.vH.style, 1)
}

function aOJ() {
	var aPP, aPQ, aPR, qi;

	function aPS() {
		aPU(), 2 === aD.data.playerNamesType && 1 === bA.qv.a3H(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		2 === aD.data.playerNamesType && bA.qv.a3V(aPR.vh(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(313), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), aOo.qb(new v6({
			vA: [L(314), L(315), L(278)],
			value: aD.data.playerNamesType
		}, function(e9) {
			aPU(), aD.data.playerNamesType = e9, t.u(23)
		})), aOo.qe(new sS), aOo.qe(new sC({
			value: aD.data.selectableName
		}, L(406), function(value) {
			aD.data.selectableName = value
		})), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo;
		2 === aD.data.playerNamesType && ((aOo = new qQ).qT("Data"), aPR = new vZ(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ey || (aD.data.playerNamesData = new Array(aD.ey), aD.data.playerNamesData
			.fill("")), aPR.vg(bA.rm.a50(aD.data.playerNamesData, 1, '"')), aOo.qe(aPR), qi.push(aOo))
	}(qi), qi))
}

function aOR() {
	var aPP, aPQ, qi;

	function aSQ() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bj.eN.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fK = 0; fK < 3; fK++) fK < g.length && (colors[aB][fK] = Number(g[fK]))
		}
		return colors
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(407), [new w("⬅️ " + L(37), function() {
		t.a1z()
	})]), aPQ = new qg(aPP.vH, ((qi = []).push(function() {
		var aOo = new qQ;
		return aOo.qT(L(408)), aOo.qZ("<a href='https://territorial.io/wiki/propaganda' target='_blank'>territorial.io/wiki/propaganda</a>", "0.75em").style.marginBottom = "0.8em", aOo.qZ(
			"<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aOo
	}()), qi.push(function() {
		var aOo = new qQ,
			eb = (aOo.qT(L(409)), bj.eN.data[174].value),
			qW = aOo.qV(eb.length + " / 180"),
			aP7 = (qW.style.textAlign = "center", new vZ(0, 1, function(e) {
				var e = e.target.value,
					gT = e.length;
				qW.textContent = gT + " / 180", gT <= 180 && bj.sF.sG(174, e)
			}));
		return aP7.e.rows = 6, aP7.e.style.fontSize = "1em", aP7.vg(eb), aOo.qe(aP7), aOo
	}()), qi.push(function() {
		var aOo = new qQ;
		aOo.qT(L(299));
		for (var aB = 0; aB < 11; aB++) {
			var iJ = aOo.qe(new rb(bj.eN.data[163 + aB]));
			aB && (iJ.e.style.marginTop = "0.6em")
		}
		return aOo.qe(new sI([new w(L(410), function() {
			for (var data = bj.eN.data, aB = 163; aB < 174; aB++) data[aB] && bj.eN.vw(aB, data[aB].vz);
			t.a1z(), t.aOT()[31] = null, t.u(31)
		}).button])), aOo
	}()), qi.push(function() {
		var aOo = new qQ;
		return aOo.qT("Targeting"), aOo.qZ(L(411)), aOo.qe(new rb(bj.eN.data[175], 0, 0)), aOo
	}()), qi.push(function() {
		var aOo = new qQ;
		return aOo.qT(L(405)), aOo.qe(new sI([new w(L(181), function() {
			(new ea).show(bj.eN.data[174].value, aSQ(), -1)
		}).button])), aOo
	}()), qi.push(function() {
		var aOo = new qQ,
			aSR = (aOo.qT(L(412)), aOo.qZ(L(413)), new rb(bj.eN.data[176], 1, 0)),
			aSS = (aOo.qe(aSR), new w(L(414), function(e) {
				return aST.button.textContent === L(177) && b0.y.eV(0) && (bA.qn.v3(e), aOu(), b0.aG1.aSU(bj.eN.data[176].value, aSQ(), bj.eN.data[175].value, bj.eN.data[174].value)), !0
			}, 1)),
			aOu = function() {
				aST.button.textContent = L(176), aSS.r7(1), aSS.button.style.color = bB.nu
			},
			aST = new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aSS.r7(0), aSS.button.style.color = bB.ot) : aOu(), !0
			});
		return aOo.qe(new sI([aST.button, aSS.button])), aOo
	}()), qi))
}

function aO4() {
	var aPP, ve;

	function aSV() {
		t.x();
		var qU = b9.aSZ(ve.vh());
		(aD.a0m && 0 < qU.length && qU === b9.q7.a5W || b9.aJS.x8(qU)) && b9.aSa()
	}
	this.show = function(aSW) {
		this.aSX(aSW), aPP.show(), this.resize()
	}, this.aSX = function(aSW) {
		0 === aD.a0m ? aSW ? ve.vg(aSW) : aD.a5K.length && ve.vg(aD.a5K) : (aD.h9 || (b9.q7.a5W = b9.a5X.a0E()), ve.vg(b9.aSY(b9.q7.a5W)))
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), ve.resize()
	}, this.a2r = function(eZ) {
		2 === eZ ? aPP.vI[0].r4() : aSV()
	}, aPP = new vB(L(415), [new w("⬅️ " + L(37), function() {
		t.aOS(1)
	}), new w(L(416), function() {
		ve.vi()
	}), new w(L(417), function() {
		ve.vj()
	}), new w(L(418), function() {
		ve.clear()
	}), new w(L(419), function() {
		aSV()
	})]), ve = new vZ(L(420)), aPP.vH.appendChild(ve.e)
}

function aO3() {
	var aOU, aOV, qi, aOo;

	function aSb() {
		b7.aCu !== bj.eN.data[12].value ? (b7.dd(), t.u(8, 1, new t5(30))) : t.u(1)
	}
	this.show = function() {
			aOU.show(), this.resize()
		}, this.s4 = function() {
			aOU.s4()
		}, this.resize = function() {
			aOU.resize(), aOV.resize()
		}, this.a2r = function(eZ) {
			2 === eZ && aOU.vI[0].r4()
		}, aOU = new vB(L(421), [new w("⬅️ " + L(37), aSb), new w(L(422), function() {
			t.x(), bj.sF.wV(), t.u(2)
		})]), qi = [], (aOo = new qQ).qT(L(423)), aOo.qV(L(424)), qi.push(aOo),
		function(qi) {
			var aOo = new qQ,
				g = (aOo.qT(L(411)), b7.data.aDC());
			aOo.qb(new v6({
				vA: g,
				value: b7.data.aDG(g)
			}, function(e9) {
				return bj.sF.sG(12, g[e9].split(":")[0]), !0
			})), qi.push(aOo)
		}(qi),
		function(qi) {
			var aOo = new qQ,
				aSe = (aOo.qT(L(443)), []);
			aOo.qe(new sI([new w(L(410), function(e) {
				bX.aSf();
				for (var aB = 0; aB < aSe.length; aB++) aSe[aB].e.value = bX.aCS[aB];
				return bA.qn.v3(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aSg.length; aB++) {
				aOo.qV(bX.aSg[aB]);
				for (var fK = 0; fK < 2; fK++) {
					var e9 = 2 * aB + fK,
						ra = new rb({
							value: bX.aCS[e9],
							e9: -1
						});
					ra.e.aSh = e9, aSe.push(ra), ra.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aSi(e.target.aSh, code)
					}), fK && (ra.e.style.marginLeft = "4%"), ra.e.style.width = "48%", aOo.qe(ra)
				}
			}
			qi.push(aOo)
		}(qi), (aOo = new qQ).qT(L(23)), aOo.qb(new v6({
			vA: ["1", "2"],
			value: aZ.aGp - 1
		}, function(aB) {
			aZ.aGp = aB + 1
		})), qi.push(aOo), (aOo = new qQ).qT(L(425)), bj.eN.data[1].vA = [L(426), L(427), L(428), L(429)], aOo.qb(new v6(bj.eN.data[1])), qi.push(aOo), (aOo = new qQ).qT(L(430)), bj.eN.data[9].vA = [L(427), L(431), L(432)], aOo.qb(new v6(bj.eN.data[
			9])), qi.push(aOo), (aOo = new qQ).qT(L(433)), bj.eN.data[11].vA = [L(434), L(9), L(435)], aOo.qb(new v6(bj.eN.data[11])), qi.push(aOo), (aOo = new qQ).qT(L(436)), aOo.qe(new sC(bj.eN.data[2])), qi.push(aOo), (aOo = new qQ).qT(L(437)),
		aOo.qe(new sC(bj.eN.data[7])), qi.push(aOo), (aOo = new qQ).qT(L(438)), aOo.qe(new sC(bj.eN.data[8])), qi.push(aOo), (aOo = new qQ).qT(L(439)), aOo.qe(new rb(bj.eN.data[5])), qi.push(aOo), (aOo = new qQ).qT(L(440)), aOo.qe(new sC(bj.eN.data[
			13], L(441))), aOo.qe(new sC(bj.eN.data[14], L(442))), qi.push(aOo), aOV = new qg(aOU.vH, qi)
}

function aOK() {
	var aPP, aPQ, aPR, qi;

	function aPS() {
		aPU(), 2 !== aD.data.spawningType || bA.qv.a3H(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		2 === aD.data.spawningType && bA.qv.a3T(aPR.vh(), aD.data.spawningData, bS.aIv - 1)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(444), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ,
			vA = (aOo.qT(L(275)), [L(300), L(312), L(278)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (vA.splice(1, 1), 0 < value) && (value = 1);
		aOo.qb(new v6({
			vA: vA,
			value: value
		}, function(e9) {
			aPU(), aD.data.spawningType = e9, 0 === aD.data.gameMode && 1 === e9 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ey)), t.u(24)
		})), aOo.qe(new sS), aOo.qe(new sC({
			value: aD.data.selectableSpawn
		}, L(445), function(value) {
			aD.data.selectableSpawn = value
		})), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo = new qQ;
		aOo.qT("Seed"), aOo.qe(new rb({
			e9: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qi.push(aOo)
	}(qi), function(qi) {
		var aOo;
		2 === aD.data.spawningType && ((aOo = new qQ).qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.spawningData, 2)), aOo.qe(aPR), qi.push(aOo))
	}(qi), qi))
}

function aO2() {
	var aOU, aRS, aRT, vC;

	function aSj(id) {
		0 !== a0.id || bj.eN.data[140].value ? 0 === id ? t.u(8, 1, new t5(16)) : t.u(2) : t.y.aRL(t.t4, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aOU.show(), this.resize(), this.eU()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aRS.resize()
	}, this.eU = function() {
		8 === aa.a20() && (2 <= bd.aSo ? aRT[2].r5 === bB.o6 && aRT[2].r7(0) : aRT[2].r5 !== bB.o6 && aRT[2].r7(bB.o6), !aD.h9 && aM.qO(aD.el) ? aRT[1].r5 === bB.o6 && aRT[1].r7(0) : aRT[1].r5 !== bB.o6 && aRT[1].r7(bB.o6), !aD.h9 && aw.hp(aD
			.el) ? aRT[0].r5 === bB.o6 && aRT[0].r7(0) : aRT[0].r5 !== bB.o6 && aRT[0].r7(bB.o6))
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aRT = [new w(L(446), function() {
		aSj(0)
	}), new w(L(335), function() {
		t.u(16)
	}), new w(L(391), function() {
		t.u(17)
	}), new w(L(447), function() {
		t.y.aQM()
	}, 0, 0, 1), new w(L(415), function() {
		t.u(3, 1)
	}), new w(L(448), function() {
		t.u(18)
	}), new w(L(407), function() {
		t.u(31)
	}), new w(L(421), function() {
		aSj(1)
	}), new w(L(449), function() {
		var su = ["Patreon", L(458), L(459), "YouTube Tutorial", "Discord", L(460), L(328), L(461), L(331), L(462), "Terms", "Privacy"],
			a43 = [bK.aPN, bK.aDT, bK.a1t, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aDU, bK.aSp, bK.aSq, bK.aSr, bK.aSs, bK.aSt, bK.aSu, bK.aS5];
		1 === a0.id ? (su.splice(2, 1), su.splice(0, 1), a43.splice(2, 1), a43.splice(0, 1)) : 2 === a0.id && (su.splice(1, 1), su.splice(0, 1), a43.splice(1, 1), a43.splice(0, 1)), t.u(4, 1, new v(L(449), bA.qn.a42(su, a43), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(450), function() {
		t.u(4, 1, new v(L(450), l.dw + "<br><a href='" + bK.aSp + "' target='_blank'>" + bK.aSp + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(451), function() {
		t.u(4, 1, new v(L(451), L(463) + "<br>" + L(464), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(465), function() {
			a0.a1.a1n(), t.u(1)
		})]))
	}), new w(L(452), function() {
		a0.a1.a1o(), t.u(4, 1, new v(L(466), L(467) + " <a href='" + bK.aS5 + "' target='_blank'>" + bK.aS5 + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], vC = [new w("⬅️ " + L(37), function() {
		t.y.aD8()
	})], 8 === aa.a20() && (aRT.unshift(new w(L(323), function() {
		t.u(30)
	})), aRT.unshift(new w(L(455), function() {
		2 <= bd.aSo && (t.x(), be.a2u(), bf.dl = !0)
	}, 0, 1)), aRT.unshift(new w(L(456), function() {
		!aD.h9 && aM.qO(aD.el) && (b8.hQ.pb(), t.x(), aM.hA) && aM.a2u()
	}, 0, 1)), aRT.unshift(new w(L(457), function() {
		!aD.h9 && aw.hp(aD.el) && (bV.a6D(2), b8.hQ.hl(), t.x(), aM.hA) && aM.a2u()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dw && aRT.push(new w(L(453), function() {
		a0.a1.a1p()
	})), aOU = new vB(L(454), vC), aRS = new rL(aRT, aOU.vH)
}

function aOO() {
	var aPP, aPQ, aPR, qi;

	function aPS() {
		aPU(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		2 === aD.data.sResourcesType && bA.qv.a3T(aPR.vh(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(318), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), aOo.qb(new v6({
			vA: [L(276), L(277), L(278)],
			value: aD.data.sResourcesType
		}, function(e9) {
			aPU(), 2 !== e9 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ey)), aD.data.sResourcesType = e9, t.u(28)
		})), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo;
		1 === aD.data.sResourcesType && ((aOo = new qQ).qT("Value"), aOo.qe(new rb({
			e9: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qi.push(aOo))
	}(qi), function(qi) {
		var aOo;
		2 === aD.data.sResourcesType && ((aOo = new qQ).qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.sResourcesData, 2)), aOo.qe(aPR), qi.push(aOo))
	}(qi), qi))
}

function aOM() {
	var aPP, aPQ, aPR, qi;

	function aPS() {
		aPU(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aOT()[19] = null, t.a1z()
	}

	function aPU() {
		2 === aD.data.tIncomeType && bA.qv.a3T(aPR.vh(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aPP.show(), this.resize()
	}, this.s4 = function() {
		aPP.s4()
	}, this.resize = function() {
		aPP.resize(), aPQ.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aPP.vI[0].r4()
	}, aPP = new vB(L(316), [new w("⬅️ " + L(37), aPS)]), aPQ = new qg(aPP.vH, (function(qi) {
		var aOo = new qQ;
		aOo.qT(L(275)), aOo.qb(new v6({
			vA: [L(276), L(277), L(278)],
			value: aD.data.tIncomeType
		}, function(e9) {
			aPU(), 2 !== e9 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ey), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e9, t.u(26)
		})), qi.push(aOo)
	}(qi = []), function(qi) {
		var aOo;
		1 === aD.data.tIncomeType && ((aOo = new qQ).qT("Value"), aOo.qe(new rb({
			e9: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i8(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qi.push(aOo))
	}(qi), function(qi) {
		var aOo;
		2 === aD.data.tIncomeType && ((aOo = new qQ).qT("Data"), (aPR = new vZ(0, 1, 0, 1)).vg(bA.rm.a50(aD.data.tIncomeData, 4)), aOo.qe(aPR), qi.push(aOo))
	}(qi), qi))
}

function aOE() {
	var aOU, aOV, qi;
	this.show = function() {
		aOU.show(), this.resize()
	}, this.s4 = function() {
		aOU.s4()
	}, this.resize = function() {
		aOU.resize(), aOV.resize()
	}, this.a2r = function(eZ) {
		2 === eZ && aOU.vI[0].r4()
	}, aOU = new vB(L(448), [new w("⬅️ " + L(37), function() {
		t.a1z()
	})]), aOV = new qg(aOU.vH, ((qi = []).push(function() {
		function aOu() {
			aST.button.textContent = L(176), aSx.e.readOnly = !1, aSy.e.readOnly = !1, aOt.r7(1), aOt.button.style.color = bB.nu
		}
		var aOo = new qQ,
			aSw = (aOo.qZ("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", aOo.qT(L(468)), new rb({
				value: bj.eN.data[105].value,
				e9: -1
			})),
			aSx = (aSw.e.readOnly = !0, aOo.qe(aSw), aOo.qT(L(361), "0.8em"), new rb(bj.eN.data[148], 0, void 0, function(e) {
				aOs(bj.eN.data[149].value, e.target.value)
			})),
			aSy = (aOo.qe(aSx), aOo.qT(L(365), "0.8em"), new rb(bj.eN.data[149], 1, void 0, function(e) {
				aOs(e.target.value, bj.eN.data[148].value)
			})),
			aST = (aOo.qe(aSy), new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aSx.e.readOnly = !0, aSy.e.readOnly = !0, aOt.r7(0), aOt.button.style.color = bB.ot, bj.sF.sG(149, aSy.e.value), aOs(bj.eN.data[149].value, bj.eN.data[
					148].value)) : aOu(), !0
			})),
			aOt = (aOo.qe(new sI([aST.button])), new w(L(14), function(e) {
				return aSx.e.readOnly && b0.y.eV(0) && (bA.qn.v3(e), aOu(), b0.aG1.aG2({
					t6: 0,
					t2: bj.eN.data[148].value,
					value: parseInt(bj.eN.data[149].value, 10)
				})), !0
			}, 1)),
			qW = aOo.qV(),
			aOs = (aOo.qV(L(469)).style.fontWeight = "bold", function(fS, qU) {
				qW.innerHTML = t.y.aOw(fS, bj.eN.data[105].value, qU)
			});
		return aOo.qe(new sI([aOt.button])), aOs(bj.eN.data[149].value, bj.eN.data[148].value), aOo
	}()), qi))
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
	var aA7, aT0, aT1, aT2, aSz = !1;

	function aT3() {
		aSz = !0, aA7 = -1, aT0 = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aT0[aB] = !1;
		var yD = Math.floor(1 + .02 * h.min);
		aT1 = new Array(4), (aT2 = new Array(4))[1] = aT2[3] = aT1[0] = aT1[2] = 0, aT2[0] = aT1[3] = -yD, aT1[1] = aT2[2] = yD
	}

	function aT4() {
		if (-1 !== aA7)
			if (0 !== aD.a0m && aH.nc()) {
				for (var aT5 = !1, aB = 3; 0 <= aB; aB--) aT0[aB] && (aT5 = !0, ib += aT1[aB], ic += aT2[aB], af.a2J(aT1[aB], aT2[aB]), aS.a9n());
				aT5 ? bf.dl = !0 : ar.nS()
			} else ar.nS()
	}
	this.a2p = function(e9) {
		0 !== aD.a0m && aH.nc() && (aSz || aT3(), aT0[e9] = !0, -1 === aA7) && (aA7 = setInterval(aT4, 20), aT4())
	}, this.a2s = function(e9) {
		if (0 !== aD.a0m && (aSz || aT3(), aT0[e9] = !1, -1 !== aA7)) {
			for (var aT5 = !1, aB = 3; 0 <= aB; aB--) aT5 = aT5 || aT0[aB];
			aT5 || this.nS()
		}
	}, this.nS = function() {
		if (aSz && -1 !== aA7) {
			for (var aB = 3; 0 <= aB; aB--) aT0[aB] = !1;
			clearInterval(aA7), aA7 = -1
		}
	}
}

function cj() {
	this.y = new aT6, this.mc = new aT7, this.pH = new aT8, this.aFT = new aT9, this.eW = new aTA, this.aG1 = new aTB, this.pu = new aTC, this.aQj = new aTD, this.a7M = new aTE, this.aTF = new aTG, this.aTH = new aTI, this.aTJ = new aTK, this.aTL =
		new aTM, this.dd = function() {
			this.y.dd()
		}
}

function aT6() {
	var aTN, aTP;
	this.aGs = 5, this.aTO = null;

	function aTX(aB) {
		return aTP[aB].aSz && aTN[aB].aTX()
	}

	function aTU(a1v) {
		aTP[a1v].eQ = bf.eQ, aTP[a1v].aTR = !1
	}
	this.a25 = 0, this.a1y = 0, this.dd = function() {
		this.aTO = new Array(this.aGs);
		this.aTO[0] = "territorial.io";
		var aLq = ay.aMC(0);
		ay.a5N(0);
		for (var aB = 1; aB < this.aGs; aB++) this.aTO[aB] = aK.a0K() + ".territorial.io";
		for (ay.a5N(aLq), aTN = new Array(this.aGs), aTP = new Array(this.aGs), aB = this.aGs - 1; 0 <= aB; aB--) aTP[aB] = {
			aSz: !1,
			eQ: 0,
			aTR: !1
		};
		this.aGt(0, 0)
	}, this.aTS = function(aB) {
		return aTN[aB]
	}, this.eU = function() {
		for (var aB = this.aGs - 1; 0 <= aB; aB--) this.eV(aB) && bf.eQ > aTP[aB].eQ + 15e3 && (b0.pH.aTT(aB, aTP[aB].aTR), aTU(aB));
		!this.eV(0) && bf.eQ > aTP[0].eQ + 8e3 && (aTP[0].eQ = bf.eQ, this.aGt(0, 0))
	}, this.aQg = function(id) {
		return this.aGt(0, id) && this.aTV(0)
	}, this.aGt = function(a1v, aO0) {
		if (aTP[a1v].aSz) {
			if (aTN[a1v].aTX()) return aTN[a1v].aTY(aO0), aTN[a1v].eV();
			aTN[a1v].s4()
		}
		return this.aTW(a1v, aO0), !1
	}, this.aTW = function(a1v, aO0) {
		aTP[a1v].aSz = !0, aTU(a1v), aTN[a1v] = new aTZ, aTN[a1v].dd(a1v, aO0)
	}, this.aTY = function(a1v, aO0) {
		aTX(a1v) && aTN[a1v].aTY(aO0)
	}, this.aTa = function(a1v, aO0) {
		b0.eW.aTb(a1v)
	}, this.aTV = function(aB) {
		return this.eV(aB) && aTN[aB].aTV()
	}, this.aTc = function(aB) {
		aTN[aB].aTc()
	}, this.eV = function(aB) {
		return aTP[aB].aSz && aTN[aB].eV()
	}, this.send = function(a1v, aC) {
		0 !== a1v && aTU(a1v), aTN[a1v].send(aC)
	}, this.a2a = function(a1v) {
		8 === aa.a20() && (aTP[a1v].aTR = !0, b0.mc.aTd = !0)
	}, this.close = function(a1v, aTe) {
		aTX(a1v) && aTN[a1v].close(aTe)
	}, this.aTf = function(a1v, aTe) {
		o.a28(aTe), aTX(a1v) && aTN[a1v].close(aTe)
	}, this.a29 = function(aTe) {
		for (var aB = this.aGs - 1; 0 <= aB; aB--) this.close(aB, aTe)
	}, this.aTg = function(a1v, aTe) {
		for (var aB = this.aGs - 1; 0 <= aB; aB--) aB !== a1v && this.close(aB, aTe)
	}, this.a5Y = function() {
		0 === this.a25 && (aD.kf || aD.h9) || this.close(this.a25, 3246)
	}, this.aTh = function(a1v, e) {
		aTN[a1v].s4(), o.a1u(a1v, e.code)
	}
}

function aT7() {
	this.aTd = !1, this.eU = function() {
		bf.kI() % 250 != 249 || aD.h9 || (b0.eW.aTi(+(this.aTd && ag.mu[aD.el]), al.kr + bN.y.mB), this.aTd = !1)
	}
}

function aTE() {
	this.aTk = function(a1v, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aTf(a1v, 3205) : ((0 === bH.pv(1) ? function(a1v) {
			var aTo = bH.pv(6);
			0 === aTo ? function(a1v) {
					if (0 === a1v && 8 !== aa.a20()) {
						t.y.aS6();
						for (var aU3 = bH.pv(12), aU4 = bH.pv(6), g = new Array(aU3), aB = 0; aB < aU3; aB++) g[aB] = bH.pv(aU4);
						aT.aAD(g)
					}
				}(a1v) : 2 === aTo ? b0.aTF.aTq(a1v) : 3 === aTo || 4 === aTo ? ax.dd() : 5 === aTo ? b0.aTH.aTr() : 9 === aTo ? b0.aTH.aTs(a1v) : 10 === aTo ? b0.aTJ.aTt() : 11 === aTo ? b0.aTH.aTu(a1v) : 12 === aTo ? b0.aTJ.aTv() :
				13 === aTo ? b0.aTL.aTw() : 14 === aTo ? b0.aTL.aTx() : 15 === aTo ? b0.aTH.aTy() : 16 === aTo ? b0.aTF.aTz(a1v) : 17 === aTo ? b0.aTF.aU0(a1v) : 19 === aTo ? b0.aTF.aU1(a1v) : 20 === aTo && b0.aTH.aU2(a1v)
		} : function(a1v) {
			if (8 !== aa.a20() && !ax.aHN()) return;
			if (a1v !== b0.y.a25) b0.y.aTf(a1v, 3244);
			else if (0 === bH.pv(1)) bf.a0w.aU7(bH.aC);
			else {
				var aB, a1v = bH.pv(2);
				if (0 === a1v) {
					var pW, pH = bH.pv(9);
					0 !== ag.mu[pH] && 0 !== ag.mu[aD.el] && (pW = bH.pv(10), aN.pV(pH, aD.el, pW), af.qM(pH, 1, pW))
				} else if (1 === a1v) ! function() {
					var pH = bH.pv(9);
					0 !== ag.mu[pH] && 0 !== ag.mu[aD.el] && b5.aLR(0, [pH], !0) && aN.pn(pH, 1)
				}();
				else if (2 === a1v) ! function() {
					var pH = bH.pv(9),
						target = bH.pv(9);
					0 !== ag.mu[pH] && 0 !== ag.mu[target] && 0 !== ag.mu[aD.el] && b5.aLR(1, [pH], !0) && (af.qM(pH, 3, 96), af.qM(target, 4, 96), aN.a7T(pH, target))
				}();
				else if (l.a9 && !l.aA) {
					var f1 = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), f1 = Math.min(b8.pE.px.length, 540), aB = 0; aB < f1; aB++) bD.aUD(32, b8.pE.px[aB]);
					b0.y.send(b0.y.a25, bD.aC)
				}
			}
		})(a1v), bf.aTn())
	}, this.aU5 = function() {
		bH.e9 = 1;
		var aTo = bH.pv(6),
			aU6 = bH.pv(10);
		return b0.y.a1y === aU6 ? (b0.y.a25 = aU6, !1) : (b0.y.close(b0.y.a1y, 3247), b0.y.a25 = aU6, ax.aEP = bH.pv(10), ax.aHC = bH.pv(3 === aTo ? 9 : 1), b0.y.aGt(aU6, 5) && b0.pH.aHJ(), !0)
	}
}

function aTK() {
	this.aTt = function() {
		bj.y.wL(), bj.sF.sG(105, bF.t7.t8(bF.t7.t9(5))), bj.sF.sG(106, bF.t7.t8(bF.t7.t9(15))), bj.sF.sG(109, 0), bj.sF.sG(108, bj.eN.data[109].value), bj.sF.sG(111, bj.eN.data[109].value + 1), bj.sF.sG(107, 0), bj.sF.sG(110, "")
	}, this.aTv = function() {
		var data;
		bH.size < bD.aUE(29) ? b0.y.aTf(0, 3254) : ((data = {
			t3: bH.pv(30),
			wZ: bH.pv(16),
			wa: bH.pv(30),
			wb: bH.pv(30),
			wc: bH.pv(30),
			wd: bH.aUF(32),
			username: bG.wq.x8(5),
			we: bG.wq.x8(3),
			wf: bG.wq.x8(3),
			wg: bH.aUF(32),
			wh: bH.aUF(32),
			wi: bH.pv(30),
			wj: bH.aUF(32),
			wk: bH.aUF(32),
			wl: bH.aUF(32),
			wm: bH.aUF(32),
			aP1: bH.aUF(32),
			aP2: bH.aUF(30),
			aPF: bH.aUF(32),
			aPG: bG.wq.x8(3),
			aP8: bH.aUF(2),
			aPA: bH.aUF(10),
			aP6: bG.wq.x8(8),
			aP9: bH.aUF(5),
			aOq: bH.pv(30),
			aP0: bH.pv(30),
			a1F: bH.aUF(32),
			aP5: bH.pv(3),
			aP4: bH.pv(8),
			aPH: bH.pv(1),
			aPI: bH.pv(1)
		}).aPH && (data.aPJ = bH.aUF(32), data.aPK = bH.pv(30), data.aPL = bH.pv(30), data.aPM = bH.pv(1)), 8 === t.t4 && (25 === t.a5q().aQf ? (data.aOW = !0, t.y.aOB = data, t.a5q().aD7(25, !1)) : (data.aOW = !1, bj.sF.sG(160, +(data
			.aPH && data.aPM)), data.t2 = bj.eN.data[105].value, t.y.aO8 = data, bj.sF.wY(data), t.a5q().aD7(16, !0))))
	}
}

function aTM() {
	this.aTw = function() {
		var aB;
		if (bH.size < bD.aUE(23)) b0.y.aTf(0, 3259);
		else {
			var tN = bH.pv(6),
				f1 = bH.pv(10),
				data = [];
			if (9 === tN || 10 === tN || 11 === tN) {
				for (aB = 0; aB < f1; aB++) data.push([bH.pv(30), bG.wq.x8(5), bH.aUF(32), 0, bH.pv(30)]);
				8 === t.t4 && t.a5q().aD7(21, !0, {
					tN: tN,
					data: data
				})
			} else if (12 === tN) {
				for (aB = 0; aB < f1; aB++) data.push([bH.pv(20), bH.pv(30), bH.pv(30), bH.aUF(32), bH.pv(30), bG.wq.x8(5), bG.wq.x8(5)]);
				8 === t.t4 && t.a5q().aD7(21, !0, {
					tN: tN,
					data: data
				})
			} else {
				var hx = bH.pv(16);
				if (bH.aUG(39 + 16 * hx + f1 * (0 === tN ? 111 : 1 === tN ? 101 : 2 === tN || 3 === tN ? 127 : 212))) {
					if (0 === tN)
						for (aB = 0; aB < f1; aB++) data.push([bH.pv(30), bG.wo.ws(bH.pv(5)), bH.pv(16), bH.pv(30), bH.pv(30)]);
					else if (1 === tN)
						for (aB = 0; aB < f1; aB++) data.push([bH.pv(16), bG.wo.ws(bH.pv(3)), bH.pv(16), bG.wo.ws(bH.pv(5)), bH.pv(31), bH.pv(30)]);
					else if (2 === tN || 3 === tN)
						for (aB = 0; aB < f1; aB++) data.push([bH.pv(30), bG.wo.ws(bH.pv(5)), bH.aUF(32), bH.pv(30), bH.pv(30)]);
					else
						for (aB = 0; aB < f1; aB++) data.push([bH.pv(20), bH.pv(30), bH.pv(30), bH.pv(30), bH.pv(30), bH.aUF(32), bH.pv(30), bG.wo.ws(bH.pv(5)), bG.wo.ws(bH.pv(5))]);
					8 === t.t4 && t.a5q().aD7(21, !0, {
						tN: tN,
						data: data
					})
				} else b0.y.aTf(0, 3260)
			}
		}
	}, this.aTx = function() {
		if (bH.size < bD.aUE(29)) b0.y.aTf(0, 3265);
		else {
			var aUH = bH.pv(4),
				aUI = bH.pv(7),
				aUJ = bH.pv(11);
			if (bH.aUG(29 + 16 * aUI + 16 * aUJ + 11 * aUH)) {
				for (var data = [], aB = 0; aB < aUH; aB++) {
					for (var a1V = bG.wo.ws(bH.pv(3)), aUK = bH.pv(8), aPt = [], fK = 0; fK < aUK; fK++) aPt.push(bH.pv(16));
					data.push({
						name: "[" + a1V + "]",
						aPt: aPt
					})
				}
				8 === t.t4 && t.a5q().aD7(23, !0, data)
			} else b0.y.aTf(0, 3266)
		}
	}
}

function aTG() {
	function aUM() {
		var id = bH.pv(3);
		return 0 === id ? {
			id: id,
			t2: bH.pv(30),
			r: bn.aDZ.aFY(bG.wq.x8(7))
		} : 1 === id ? {
			id: id,
			t2: bH.pv(30),
			aEa: bH.pv(3),
			value: bH.pv(30),
			target: bH.pv(30)
		} : 2 === id ? {
			id: id,
			t2: bH.pv(30),
			aEa: bH.pv(3)
		} : 3 === id ? {
			id: id,
			t2: bH.pv(30),
			aEa: bH.pv(3),
			value: bH.pv(4),
			target: bH.pv(30)
		} : 4 === id ? {
			id: id,
			t2: bH.pv(30),
			aEa: bH.pv(3),
			target: bH.pv(30)
		} : 5 === id ? {
			id: id,
			aEa: bH.pv(6)
		} : 6 === id ? {
			id: id,
			value: bH.pv(17)
		} : null
	}
	this.aTq = function(a1v) {
		if (a1v !== b0.y.a1y) b0.y.close(a1v, 3239);
		else if (6 !== aa.a20()) b0.y.close(a1v, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rs = bn.y.rt[aB],
					playerCount = (rs.tw = bH.pv(10), rs.eh = bH.pv(6), rs.mapSeed = bH.pv(14), rs.aEL = bH.pv(4), rs.aG5 = bH.pv(6), rs.aG6 = bH.pv(4), rs.aER = bH.pv(1), rs.aF9 = bH.pv(12), rs.spawningSeed = bH.pv(14), bH.pv(16));
				bn.uD.uF[aB] = bH.pv(16);
				for (var fK = 0; fK < playerCount; fK++) bn.uD.aDn(aB, bH.pv(30), bG.wq.x8(5), bH.pv(4), bH.pv(30), bH.pv(7), bH.pv(16), bH.pv(18), bH.pv(11), bH.pv(12))
			}
			t.u(29), bn.y.aF1(!0)
		}
	}, this.aTz = function(a1v) {
		if (a1v !== b0.y.a1y) b0.y.close(a1v, 3239);
		else if (bn.a1x) {
			bn.y.aEz[0] = bH.pv(20), bn.y.aEz[1] = bH.pv(20);
			for (var aUL = bH.pv(16), fK = 0; fK < aUL; fK++) {
				var id = bH.pv(3);
				0 === id ? bn.uD.aDn(bH.pv(2), bH.pv(30), bG.wq.x8(5), 0, 1234566, 127, 0, bH.pv(18), 0, bH.pv(12)) : 1 === id ? bn.uD.aE6(bH.pv(16), bH.pv(2)) : 2 === id ? bn.uD.aE2(bH.pv(16), bH.pv(2), bH.pv(2)) : 3 === id ? bn.uD.aE5(bH.pv(
					16), bH.pv(2)) : 4 === id ? bn.uD.aDv(bH.pv(16), bH.pv(2), bH.pv(4), bH.pv(30), bH.pv(7), bH.pv(16), bH.pv(11), bH.pv(18)) : 5 === id && bn.uD.aDw(bH.pv(16), bH.pv(2), bH.pv(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rs = bn.y.rt[aB];
				if (rs.tw = bH.pv(10), 0 === rs.tw) {
					if (rs.a25 = bH.pv(10), rs.aEP = bH.pv(10), bn.aDb.dm(aB)) return;
					rs.eh = bH.pv(6), rs.mapSeed = bH.pv(14), rs.aEL = bH.pv(4), rs.aG5 = bH.pv(6), rs.aG6 = bH.pv(4), rs.aER = bH.pv(1), rs.aF9 = bH.pv(12), rs.spawningSeed = bH.pv(14), rs.aG7.push(rs.aG7[0]), rs.aG7.shift()
				}
			}
			bn.y.aEH()
		} else b0.y.close(a1v, 3251)
	}, this.aU0 = function(a1v) {
		if (a1v !== b0.y.a1y) b0.y.close(a1v, 3272);
		else if (bn.a1x) {
			for (var rq = bH.pv(4), rs = bn.y.rt[rq], ru = rs.ru, uT = (rs.rv = bH.pv(20), bH.pv(6)), aB = 0; aB < uT; aB++) {
				var aGO = aUM();
				bn.s3.aGN(aGO), ru.push(aGO)
			}
			bn.y.aFA(rq)
		} else b0.y.close(a1v, 3273)
	}, this.aU1 = function(a1v) {
		a1v !== b0.y.a1y ? b0.y.close(a1v, 3276) : bn.a1x ? bn.message.aEF(aUM()) : b0.y.close(a1v, 3277)
	}
}

function aTI() {
	this.aTr = function() {
		for (var id = bH.pv(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bH.pv(8), bH.pv(8), bH.pv(8)]);
		var eb = bG.wq.x8(8);
		bU.eJ.eY({
			id: id,
			colors: colors,
			eb: eb
		})
	}, this.aU2 = function(a1v) {
		var f4 = bH.pv(5),
			f4 = bi.aUN.aUO(f4, bH.pv(30), bH.pv(30), bH.pv(30));
		b0.eW.aUP(a1v, f4)
	}, this.aTs = function(a1v) {
		var aU9, rJ, aUQ;
		bH.aUG(165) ? (aU9 = bH.pv(3), rJ = bi.aUN.eU(bH.pv(30), bH.pv(30)), aUQ = bi.aUN.aUO(bH.pv(5), bH.pv(30), bH.pv(30), bH.pv(30)), b0.eW.aUR(a1v, rJ, aUQ, aU9), 0 < aU9 || (0 === a1v && 0 === bj.eN.data[105].value.length ? b0.eW.eX(0) : b0
			.aG1.aUS(a1v), 4 === b0.y.aTS(a1v).aUT() ? 6 === aa.a20() && b0.aFT.aGu(a1v) : 5 !== b0.y.aTS(a1v).aUT() || 8 !== aa.a20() && 10 !== aa.a20() || b0.pH.aHJ())) : b0.y.aTf(a1v, 3269)
	}, this.aTu = function(a1v) {
		var id = bH.pv(6);
		1 === id ? (bj.sF.sG(160, bH.pv(30)), b0.y.aTc(a1v), aT.aA9 || b0.eW.eX(1), b7.aD3(), 8 === t.t4 && t.a5q().aQt()) : 21 === id ? 8 === t.t4 && t.a5q().aD7(17) : 22 === id && (bj.sF.sG(106, bj.eN.data[110].value), bj.sF.sG(110, ""), 8 ===
			t.t4) && t.a5q().aD7(15)
	}, this.aTy = function() {
		var f1 = bH.pv(16),
			aUU = bH.pv(16);
		if (bH.aUG(55 + 10 * f1 + 16 * aUU)) {
			for (var g = [], aB = 0; aB < f1; aB++) g.push(bG.wo.ws(bH.pv(10)));
			b7.aD6(g)
		} else b0.y.aTf(0, 3270)
	}
}

function aT8() {
	this.aTT = function(a1v, aTR) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aTR ? 1 : 0), bD.a8(3, 0 === aD.a0m ? bn.a1x ? 6 : 0 : aD.h9 ? 1 : aD.kf ? 7 : aD.kd < 7 ? 2 : 8 === aD.kd ? 4 : 9 === aD.kd ? 5 : 3), b0.y.send(a1v, bD.aC)
	}, this.aHJ = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a1y), bD.a8(10, ax.aEP), bD.a8(9, ax.aHC), bD.a8(10, l.dy), bD.a8(14, l.dq), b0.y.send(b0.y.a25, bD.aC)
	}, this.pI = function(en) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, en), b0.y.send(b0.y.a25, bD.aC)
	}, this.pJ = function(ia, jU) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, ia), bD.a8(10, jU), b0.y.send(b0.y.a25, bD.aC)
	}, this.pN = function(ia, pL) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, ia), bD.a8(9, pL), b0.y.send(b0.y.a25, bD.aC)
	}, this.pP = function(ia, pO) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, ia), bD.a8(27, pO), b0.y.send(b0.y.a25, bD.aC)
	}, this.pR = function(ia, nH) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, ia), bD.a8(16, nH), b0.y.send(b0.y.a25, bD.aC)
	}, this.pU = function(jU) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jU), b0.y.send(b0.y.a25, bD.aC)
	}, this.pY = function(e9) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e9), b0.y.send(b0.y.a25, bD.aC)
	}, this.pa = function(pZ) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pZ), b0.y.send(b0.y.a25, bD.aC)
	}, this.pc = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a25, bD.aC)
	}, this.pd = function(ia, en, jU) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, ia), bD.a8(10, jU), bD.a8(22, en), b0.y.send(b0.y.a25, bD.aC)
	}, this.pl = function(aUV, aUW) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aUW), bD.a8(10, aUV), b0.y.send(b0.y.a25, bD.aC)
	}, this.po = function(a7M) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a7M), b0.y.send(b0.y.a25, bD.aC)
	}, this.ps = function(aUX, target) {
		var aB, f1 = aUX.length;
		for (bD.a7(14 + 9 * f1), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < f1; aB++) bD.a8(9, aUX[aB]);
		b0.y.send(b0.y.a25, bD.aC)
	}
}

function aTB() {
	this.aUY = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.eW.aUZ(), b0.y.send(0, bD.aC)
	}, this.aUS = function(a1v) {
		bD.a7(127), bD.a8(1, 0), bD.a8(6, 17), bG.t7.x4(bj.eN.data[105].value, 5), bG.t7.x4(bj.eN.data[106].value, 15), b0.y.send(a1v, bD.aC)
	}, this.aQu = function() {
		bD.a7(97), bD.a8(1, 0), bD.a8(6, 18), bG.t7.x4(bj.eN.data[110].value, 15), b0.y.send(0, bD.aC)
	}, this.aQr = function(a4d) {
		var f1 = a4d.qU.length;
		bD.a7(21 + 16 * f1), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a4d.t6), bD.a8(8, f1), bF.wo.x3(a4d.qU), b0.y.send(0, bD.aC)
	}, this.aSU = function(wd, colors, aUb, eb) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 16), bE.a8(20, Math.min(wd, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fK = 0; fK < 3; fK++) bE.a8(8, colors[aB][fK]);
		wd = b7.data.aDB(aUb.trim());
		bE.a8(8, -1 === wd ? 255 : wd), bF.wq.a0E(eb.trim().substring(0, 180), 8, bE), b0.y.send(0, bE.aUc())
	}, this.aPB = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.t6), bG.t7.x4(data.t2, 5), b0.y.send(0, bD.aC)
	}, this.aG2 = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.t6), bG.t7.x4(data.t2, 5), bD.aUD(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aTC() {
	this.pt = function() {
		for (var f1 = aD.kL, a0b = bR.result.a0b, lG = a0b.length, a1N = (bD.a7(17 + 16 * f1 + 33 * lG), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, lG), bD.a8(1, +(2 === aD.a0j)), bD.a8(1, aD.a14 % 2), ag.a1N), aB = 0; aB < f1; aB++) bD.a8(16, a1N[
		aB]);
		for (var go = ag.go, aB = 0; aB < lG; aB++) {
			var gY = a0b[aB];
			bD.a8(9, gY), bD.a8(24, go[gY])
		}
		b0.y.send(b0.y.a25, bD.aC)
	}
}

function aTD() {
	this.aQk = function(tN, tO, tP) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tN), bD.a8(1, +(tO < 0)), bD.a8(1, +(tP < 0)), bD.a8(30, Math.abs(tO)), bD.a8(30, Math.abs(tP)), b0.y.send(0, bD.aC)
	}, this.aQl = function(tN, aQm, aQn) {
		bD.a7(18 + 16 * aQm.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tN), b0.eW.aUd(aQm), bD.a8(30, aQn), b0.y.send(0, bD.aC)
	}, this.aQq = function(tN, aQm, aQn) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tN), bG.t7.x4(aQm, 5), bD.a8(30, aQn), b0.y.send(0, bD.aC)
	}, this.aQo = function(aPs, a1U) {
		for (var f1 = a1U.length, hx = 0, aB = 0; aB < f1; aB++) hx += a1U[aB].length;
		for (bD.a7(21 + 3 * f1 + 16 * hx), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aPs), bD.a8(4, f1), bD.a8(7, hx), aB = 0; aB < f1; aB++) bD.a8(3, a1U[aB].length), bF.wo.x3(a1U[aB]);
		b0.y.send(0, bD.aC)
	}, this.aQp = function(aPs, tO, tP) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aPs), bD.a8(1, +(tO < 0)), bD.a8(1, +(tP < 0)), bD.a8(20, Math.abs(tO)), bD.a8(20, Math.abs(tP)), b0.y.send(0, bD.aC)
	}
}

function aT9() {
	this.aGu = function(a1v) {
		var username = bj.eN.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + bi.aUe.pv()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dy), bD.a8(2, bj.eN.data[158].value), b0.eW.aUd(username), bA.color.a3i(bj.y.wS()));
		bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), bi.aUe.a0E(), b0.y.a1y = a1v, b0.y.send(a1v, bD.aC)
	}, this.aFU = function(aUg, a4d) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aUg), 2 === aUg ? bE.a8(2, a4d) : 3 === aUg ? bF.wq.a0E(a4d, 7, bE) : 5 === aUg && (bE.a8(3, a4d.id), bE.a8(3, a4d.value), bE.a8(30, a4d.t2)), b0.y.send(b0.y.a1y, bE.aUc())
	}
}

function aTA() {
	this.aTb = function(a1v) {
		var aUl;
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dw), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), aUl = b7.aD9(), bD.a8(8, aUl[0]), bD.a8(8, aUl[1]), b0.y.send(a1v, bD.aC)
	}, this.aUR = function(a1v, rJ, aUQ, aU9) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aU9), bD.a8(30, rJ[0]), bD.a8(30, rJ[1]), bD.a8(30, aUQ), b0.y.send(a1v, bD.aC)
	}, this.aUP = function(a1v, rJ) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, rJ), b0.y.send(a1v, bD.aC)
	}, this.eX = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.uj = function(id, value) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 3), bD.a8(6, id), bD.a8(30, value), b0.y.send(0, bD.aC)
	}, this.aD5 = function(id, qU) {
		var f1 = Math.min(qU.length, 63);
		bD.a7(19 + 16 * f1), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, f1), bF.wo.x3(qU), b0.y.send(0, bD.aC)
	}, this.aUi = function(aU6, qf) {
		bD.a7(7 + 26 * qf.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qf.length; aB++) bD.a8(16, qf[aB][0]), bD.a8(10, qf[aB][1]);
		b0.y.send(aU6, bD.aC)
	}, this.aTi = function(aUj, aUk) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aUj), bD.a8(12, aUk), b0.y.send(b0.y.a25, bD.aC)
	}, this.aUd = function(username) {
		bD.a8(5, username.length), bF.wo.x3(username)
	}
}

function aTZ() {
	var a1v, aO0, aUm, aUn = ["wss://", "/s50/", "/s51/", "/s52/"],
		aUo = 0;

	function aTa() {
		b0.y.aTa(a1v, aO0)
	}

	function aUs(e) {
		b0.a7M.aTk(a1v, new Uint8Array(e.data))
	}

	function aUt() {}

	function aTh(e) {
		b0.y.aTh(a1v, e)
	}
	this.dd = function(e9, aUp) {
		a1v = e9, aO0 = aUp, e9 = l.dr ? "ws://localhost:" + (7130 + a1v) + "/" : aUn[0] + b0.y.aTO[a1v] + aUn[1 + l.ds], (aUm = new WebSocket(e9)).binaryType = "arraybuffer", aUm.onopen = aTa, aUm.onmessage = aUs, aUm.onclose = aTh, aUm
			.onerror = aUt
	}, this.aUr = function() {
		return aUm.readyState === aUm.CONNECTING
	}, this.eV = function() {
		return aUm.readyState === aUm.OPEN
	}, this.aTV = function() {
		return aUo
	}, this.aTc = function() {
		aUo = 1
	}, this.aTX = function() {
		return this.aUr() || this.eV()
	}, this.aTY = function(aUp) {
		aO0 = aUp
	}, this.aUT = function() {
		return aO0
	}, this.send = function(aC) {
		this.eV() && aUm.send(aC)
	}, this.close = function(aTe) {
		this.aTX() && (aUm.close(aTe), this.s4())
	}, this.s4 = function() {
		aUm.onopen = null, aUm.onmessage = null, aUm.onclose = null, aUm.onerror = null
	}
}

function dK() {
	var gap, aUu = !1,
		aUv = 0,
		i = 0,
		tB = 0,
		canvas = null,
		z0 = null,
		a3I = null;

	function aUz() {
		for (var aB = aD.y2; 0 <= aB; aB--) a3I[aB] = 0;
		for (aB = al.kr - 1; 0 <= aB; aB--) a3I[bg.ez[al.kw[aB]]] += ag.go[al.kw[aB]];
		aUu = !0
	}

	function aUx() {
		for (var aV4, aV2 = 0, f1 = 0, eZ = Math.floor(i / 2), e8 = Math.floor(tB / 2), aV3 = 1.5 * Math.PI, aB = aD.y2; 0 <= aB; aB--) f1 += a3I[aB], 0 === a3I[aB] && aV2++;
		if (aUu = !1, z0.clearRect(0, 0, i, i), 0 < f1)
			if (aV2 === aD.y2) {
				for (aB = aD.y2; 0 <= aB; aB--)
					if (0 < a3I[aB]) {
						! function(aB, eZ, e8) {
							z0.fillStyle = bg.aVB[bg.ki[aB]], z0.beginPath(), z0.arc(eZ, eZ, e8, 0, 2 * Math.PI), z0.fill()
						}(aB, eZ, e8);
						break
					}!
				function(eZ) {
					var fontSize = eZ / 3;
					z0.font = bA.qn.se(1, fontSize), z0.fillStyle = bB.nu, z0.fillText("100%", eZ, eZ + .1 * fontSize)
				}(eZ)
			} else {
				for (aB = 0; aB <= aD.y2; aB++) 0 < a3I[aB] && (! function(aB, eZ, e8, aV3, aV4) {
					z0.fillStyle = bg.aVB[bg.ki[aB]], z0.beginPath(), z0.arc(eZ, eZ, e8, aV3, aV4), z0.lineTo(eZ, eZ), z0.fill()
				}(aB, eZ, e8, aV3, aV4 = aV3 + 2 * Math.PI * a3I[aB] / f1), function(eZ, e8, aV3, aV4) {
					var fS = (aV4 - aV3) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e8 * Math.min(fS, .37);
					fontSize < 8 || (aV3 = (aV3 + aV4) / 2, aV4 = (__fx.settings.detailedTeamPercentage ? (100 * fS).toFixed(2) : Math.floor(100 * fS + .5)) + "%", e8 *= .525 - Math.max(.6 * (fS - .7), 0), z0.font = bA.qn.se(1, fontSize), z0
						.fillStyle = bB.nu, z0.fillText(aV4, eZ + Math.cos(aV3) * e8, eZ + Math.cos(aV3 + 1.5 * Math.PI) * e8))
				}(eZ, e8, aV3, aV4), 0 !== aB && aV9(eZ, e8, aV3), aV3 = aV4);
				aV9(eZ, e8, 1.5 * Math.PI)
			}!
		function(eZ, e8) {
			z0.beginPath(), z0.arc(eZ, eZ, e8, 0, 2 * Math.PI), z0.stroke()
		}(eZ, e8)
	}

	function aV9(eZ, e8, aVC) {
		z0.beginPath(), z0.moveTo(eZ, eZ), z0.lineTo(eZ + Math.cos(aVC) * e8, eZ + Math.cos(aVC + 1.5 * Math.PI) * e8), z0.stroke()
	}
	this.dd = function() {
		if (aD.hu) {
			aUv = 0, a3I = new Uint32Array(aD.y2 + 1);
			for (var aB = aD.y2; 0 <= aB; aB--) a3I[aB] = 0;
			for (aB = al.kr - 1; 0 <= aB; aB--) a3I[bg.ez[al.kw[aB]]] += 1;
			this.resize()
		} else a3I = z0 = canvas = null
	}, this.a8h = function() {
		return i
	}, this.resize = function() {
		aD.hu && (i = Math.floor(.95 * (a0.a1.i9() && !aD.nN ? .18 * h.min : .13 * h.iA)), i = (i *= 1 + (.5 + .2 * a0.a1.i9()) * aD.nN) + i % 2, gap = Math.max(1, .015 * i), tB = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (z0 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, z0.strokeStyle = bB.nu, bA.qn.textAlign(z0, 1), bA.qn.textBaseline(z0, 1), aUx())
	}, this.ks = function(aUy) {
		aUy && aUz();
		var dt, aUy = this.ku();
		return bg.ki[aUy] || (aUy = function() {
			for (var kt = -1, aB = aD.y2; 1 <= aB; aB--)(-1 === kt || a3I[aB] > a3I[kt]) && (kt = aB);
			return kt
		}(), dt = ag.go[lw[0]], -1 !== aUy && a3I[aUy] > dt) ? a3I[aUy] : dt
	}, this.a1i = function() {
		return aUv = 31, this.eU(), this.ku()
	}, this.ku = function() {
		for (var kt = 0, aB = aD.y2; 0 < aB; aB--) a3I[aB] > a3I[kt] && (kt = aB);
		return kt
	}, this.kM = function(aV1) {
		for (var gT = 0, kw = al.kw, ez = bg.ez, f1 = al.kr, fe = bO.fe, aB = 0; aB < f1; aB++) {
			var gY = kw[aB];
			ez[gY] === aV1 && (fe[gT++] = gY)
		}
		bO.fV[0] = gT
	}, this.kv = function(aV1) {
		for (var gT = 0, kw = al.kw, ez = bg.ez, f1 = al.kr, fe = bO.fe, aB = 0; aB < f1; aB++) {
			var gY = kw[aB];
			ez[gY] !== aV1 && (fe[gT++] = gY)
		}
		bO.fV[0] = gT
	}, this.a4B = function() {
		for (var gT = 0, aB = aD.y2; 0 <= aB; aB--) gT += 0 < a3I[aB];
		return gT
	}, this.eU = function() {
		aD.hu && 32 <= ++aUv && (aUv = 0, aUz())
	}, this.mh = function() {
		aD.hu && aUu && aUx()
	}, this.vQ = function() {
		aD.hu && (aD.nN ? vR.drawImage(canvas, bc.gap, bc.gap) : vR.drawImage(canvas, bc.gap, a8g + 2 * bc.gap))
	}
}

function da() {
	function aVI(f8, f1, fA, a0O, a9y, fR) {
		if (!(fA < 1 || a9y < fA))
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (a0O(ef)) return ef >> 2;
				f8 += fR
			}
		return -1
	}

	function aVM(fA, f1, f8, a0O, aVG, fR) {
		if (!(f8 < 1 || aVG < f8)) {
			f1 = Math.max(f1, 0);
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (a0O(ef)) return ef >> 2;
				fA += fR
			}
		}
		return -1
	}

	function aVQ(iR, iS, aVD) {
		return -1 !== iS && (-1 === iR || bM.iT(iS, aVD) < bM.iT(iR, aVD)) ? iS : iR
	}
	this.hP = function(aVD) {
		return this.a0q(aVD, function(ef) {
			return ac.ew(ef)
		})
	}, this.hV = function(aVD) {
		return this.a0q(aVD, function(ef) {
			return ac.aIC(ef, aD.el)
		})
	}, this.a0q = function(aVD, a0O) {
		return function(aVD, aVE, a0O) {
			for (var hF = bM.f9(aVD), hH = bM.fB(aVD), aVG = bS.fC - 2, a9y = bS.fD - 2, aVH = -1, f4 = 0; f4 < aVE; f4++) {
				var a9x = Math.max(hF - f4, 1),
					aMK = Math.max(hH - f4, 1),
					yd = Math.min(hF + f4, aVG),
					yc = Math.min(hH + f4, a9y),
					iR = aVI(hF, yd - hF, hH - f4, a0O, a9y, 1),
					iS = aVI(hF - 1, hF - a9x - 1, hH - f4, a0O, a9y, -1),
					yd = aVI(hF, yd - hF, hH + f4, a0O, a9y, 1),
					a9x = aVI(hF - 1, hF - a9x - 1, hH + f4, a0O, a9y, -1),
					aVL = aVM(hH, yc - hH - 1, hF - f4, a0O, aVG, 1),
					aVN = aVM(hH - 1, hH - aMK - 2, hF - f4, a0O, aVG, -1),
					yc = aVM(hH, yc - hH - 1, hF + f4, a0O, aVG, 1),
					aMK = aVM(hH - 1, hH - aMK - 2, hF + f4, a0O, aVG, -1);
				if (aVH = aVQ(aVH, iR, aVD), aVH = aVQ(aVH, iS, aVD), aVH = aVQ(aVH, yd, aVD), aVH = aVQ(aVH, a9x, aVD), aVH = aVQ(aVH, aVL, aVD), aVH = aVQ(aVH, aVN, aVD), aVH = aVQ(aVH, yc, aVD), 0 <= (aVH = aVQ(aVH, aMK, aVD)) && f4 *
					f4 >= bM.iT(aVH, aVD)) return aVH
			}
			return -1
		}(aVD, bM.i7(), a0O)
	}
}

function d3() {
	function aVS(key) {
		var aSW;
		return "undefined" == typeof URLSearchParams || (aSW = window.location.search, "string" != typeof(aSW = new URLSearchParams(aSW).get(key))) || aSW.length < 1 ? null : aSW
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aVS("account");
				if (!value && !(value = aVS("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.t4, new t5(1e3, {
					t6: 0,
					t2: value,
					t3: 0
				})), 1
			}()) {
			var value = aVS("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1s = new URL(window.location.href);
		a1s.search = "";
		try {
			return history.replaceState(null, "", a1s.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aPO = function(key, value) {
		if (0 === a0.id) try {
			var a1s = new URL(window.location.href),
				gY = a1s.searchParams;
			gY.set(key, value), a1s.search = gY.toString(), history.replaceState(null, "", a1s.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aVU, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a5N(0)
	}, this.value = function(gY) {
		return g[gY]
	}, this.aMC = function() {
		return bL.du(aVU - 1, 2)
	}, this.a5N = function(aLq) {
		aVU = 2 * aLq % 32768 + 1
	}, this.random = function() {
		return aVU = 167 * aVU % 32768
	}, this.jc = function(mp) {
		return bL.du(mp * this.random(), 32768)
	}, this.kD = function(gY) {
		return 0 !== gY && this.random() < this.value(gY)
	}, this.iy = function(fK, fL) {
		return fK + this.jc(fL - fK)
	}
}

function cz() {
	this.q7 = new aVV, this.a5X = new aVW, this.aJS = new aVX, this.dd = function() {
		aD.h9 || this.q7.dd()
	}, this.eU = function() {
		aD.h9 || (this.q7.eU(), 3 !== t.t4) || bf.kI() % 15 != 5 && 2 !== aD.a0m || t.a5q().aSX()
	}, this.aSa = function() {
		0 === aD.a0m && aa.aH4(), aD.a5H.a5g(), aD.data.canvas = null, b0.y.close(b0.y.a25, 3257), b0.y.a25 = 0, aD.data.isReplay = 1, aD.a5L()
	}, this.aSZ = function(qU) {
		var aB = qU.indexOf("=");
		return 0 <= aB ? qU.substring(aB + 1) : qU
	}, this.aSY = function(qU) {
		return qU
	}
}

function aVV() {
	this.aVZ = null, this.aVa = null, this.aVb = null, this.aVc = null, this.aVd = null, this.aVe = null, this.a5W = "";
	var aVf = 0;
	this.dd = function() {
		this.aVZ = [], this.aVa = [], this.aVb = [], this.aVc = [], this.aVd = [0], this.aVe = [0], aVf = 0, this.a5W = ""
	}, this.q8 = function(id, fj, fl, fn) {
		aD.h9 || 2 === aD.a0m || (0 === this.aVd[aVf] && (this.aVe[aVf] ? (this.aVd.push(1), this.aVe.push(0), aVf++) : this.aVd[aVf] = 1), this.aVZ.push(id), this.aVa.push(fj), this.aVb.push(void 0 === fl ? 0 : fl), this.aVc.push(void 0 === fn ?
			0 : fn), this.aVe[aVf]++)
	}, this.eU = function() {
		0 === this.aVd[aVf] ? this.aVe[aVf]++ : (this.aVd.push(0), this.aVe.push(0), aVf++)
	}
}

function aVX() {
	var aVg = 0;

	function aVk(qU, id) {
		aVg || (id ? 1 === id ? aN.a6p = L(471) + ": " + qU : t.u(4, 3, new v(L(472), qU, 1)) : t.u(4, 3, new v("⚠️ " + L(470), qU, 1)))
	}
	this.x8 = function(qU, aVh) {
		var iJ, qf;
		return aVg = aVh, bG.t7.x0(bG.t7.wy(bG.t7.ww(qU))), aN.a6p = "", !! function() {
			if (bH.size < 10) aVk("File Too Small");
			else {
				var aVm = bH.pv(12),
					aUk = (aVm !== l.rVersion && aVk("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aVm) + ("   Compatible at territorial.io/" + aVm), 1), bH.pv(12)),
					aVn = bH.pv(31);
				if (aVn !== bH.size) aVk("Size Error: " + aVn + " " + bH.size);
				else if (function(j, aVm) {
						for (var gY = bH.aC, f1 = bH.size, aUk = aVm, aB = 3; aB < f1; aB++) aUk = aUk + gY[aB] & 4095;
						return aUk === j || (aVk("Hash Error: " + aUk + " " + j + " " + f1), !1)
					}(aUk, aVm)) return 1
			}
			return
		}() && (iJ = bH, (qf = aD.data = new a5G).mapType = iJ.pv(2), qf.mapProceduralIndex = iJ.pv(8), qf.mapRealisticIndex = iJ.pv(8), qf.mapSeed = iJ.pv(14), qf.mapName = iJ.aVp(5), 2 === qf.mapType && iJ.aVq(), qf.passableWater = iJ.pv(
			1), qf.passableMountains = iJ.pv(1), qf.playerCount = iJ.pv(10), qf.humanCount = iJ.pv(10), qf.selectedPlayer = iJ.pv(9), qf.gameMode = iJ.pv(1), qf.playerMode = iJ.pv(2), qf.battleRoyaleMode = iJ.pv(2), qf.numberTeams = iJ.pv(4),
			qf.isZombieMode = iJ.pv(1), qf.isContest = iJ.pv(1), qf.isReplay = iJ.pv(1), qf.elo = iJ.aVr(2, 14, 2), qf.colorsType = iJ.pv(1), qf.colorsPersonalized = iJ.pv(1), qf.colorsData = iJ.aVr(10, 18, 512), qf.selectableColor = iJ.pv(
			1), qf.teamPlayerCount = iJ.aVr(4, 10, 9), qf.neutralBots = iJ.pv(1), qf.botDifficultyType = iJ.pv(2), qf.botDifficultyValue = iJ.pv(4), qf.botDifficultyTeam = iJ.aVr(4, 4, 9), qf.botDifficultyData = iJ.aVr(10, 4, 512), qf
			.spawningType = iJ.pv(2), qf.spawningSeed = iJ.pv(14), qf.spawningData = iJ.aVr(11, 12, 1024), qf.selectableSpawn = iJ.pv(1), qf.playerNamesType = iJ.pv(2), qf.playerNamesData = iJ.aVs(10, 5, 512), qf.selectableName = iJ.pv(1), qf
			.aIncomeType = iJ.pv(2), qf.aIncomeValue = iJ.pv(8), qf.aIncomeData = iJ.aVr(10, 8, 512), qf.tIncomeType = iJ.pv(2), qf.tIncomeValue = iJ.pv(8), qf.tIncomeData = iJ.aVr(10, 8, 512), qf.iIncomeType = iJ.pv(2), qf.iIncomeValue = iJ
			.pv(8), qf.iIncomeData = iJ.aVr(10, 8, 512), qf.sResourcesType = iJ.pv(2), qf.sResourcesValue = iJ.pv(11), qf.sResourcesData = iJ.aVr(10, 11, 512), qf.a5e = iJ.aVr(10, 30, 0), !! function() {
				var iJ = bH,
					x9 = iJ.pv(5),
					aVt = iJ.pv(30),
					aVu = iJ.pv(30);
				if (aVt + aVu > 8 * iJ.size) return void aVk("Corrupted File");
				return function(f1) {
						var aVx = new Uint8Array(f1),
							aVy = new Uint16Array(f1),
							aVz = new Uint32Array(f1),
							aW0 = new Uint32Array(f1);
						b9.q7.aVZ = aVx, b9.q7.aVa = aVy, b9.q7.aVb = aVz, b9.q7.aVc = aW0;
						for (var aB = 0; aB < f1; aB++) {
							var id = bH.pv(4);
							aVx[aB] = id, aVy[aB] = bH.pv(9), 0 === id ? aVz[aB] = bH.pv(22) : 1 === id ? (aVz[aB] = bH.pv(10), aW0[aB] = bH.pv(10)) : 2 === id ? (aVz[aB] = bH.pv(10), aW0[aB] = bH.pv(9)) : 3 === id ? (aVz[aB] = bH.pv(10),
								aW0[aB] = bH.pv(27)) : 4 === id ? (aVz[aB] = bH.pv(10), aW0[aB] = bH.pv(16)) : 5 === id || 6 === id ? aVz[aB] = bH.pv(10) : 7 === id ? aVz[aB] = bH.pv(1) : 10 === id && (aVz[aB] = bH.pv(20), aW0[aB] = bH
								.pv(22))
						}
					}(aVt),
					function(f1, x9) {
						var aVd = new Uint8Array(f1),
							aVe = new Array(f1);
						aVe.fill(0), b9.q7.aVd = aVd, b9.q7.aVe = aVe;
						for (var aB = 0; aB < f1; aB++) aVd[aB] = bH.pv(1), aVe[aB] = bH.pv(x9)
					}(aVu, x9), 1
			}()) && (bH.e9 < 8 * bH.size - 13 || bH.e9 > 8 * bH.size ? (aVk("Out Of Bounds Error: " + bH.e9 + " " + 8 * bH.size), !1) : (b9.q7.a5W = qU, 2 !== aD.data.mapType || (aVk("Load base64 image...", 2), aVh)))
	}, this.aJT = function(aIt, aVl) {
		var a3d = document.createElement("canvas"),
			i2 = a3d.getContext("2d");
		if (a3d.width = aIt.width, a3d.height = aIt.height, i2.drawImage(aIt, 0, 0), aD.data.canvas = a3d, aVg || aVl) return aD.a0m ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aSa()
	}
}

function aVW() {
	this.a0E = function() {
		var x9 = function() {
				for (var aVe = b9.q7.aVe, f1 = aVe.length, max = 0, aB = 0; aB < f1; aB++) max = Math.max(max, aVe[aB]);
				return xG(Math.max(max, 1))
			}(),
			i = (qf = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e9 += 43, i.a8(2, qf.mapType), i.a8(8, qf.mapProceduralIndex), i.a8(8, qf.mapRealisticIndex), i.a8(14, qf.mapSeed), i.aW7(qf.mapName, 5), 2 === qf.mapType && i.aW8(qf.canvas),
				i.a8(1, qf.passableWater), i.a8(1, qf.passableMountains), i.a8(10, qf.playerCount), i.a8(10, qf.humanCount), i.a8(9, qf.selectedPlayer), i.a8(1, qf.gameMode), i.a8(2, qf.playerMode), i.a8(2, qf.battleRoyaleMode), i.a8(4, qf
					.numberTeams), i.a8(1, qf.isZombieMode), i.a8(1, qf.isContest), i.a8(1, qf.isReplay), i.dk(qf.elo, 2, 14), i.a8(1, qf.colorsType), i.a8(1, qf.colorsPersonalized), i.dk(qf.colorsData, 10, 18), i.a8(1, qf.selectableColor), i.dk(
					qf.teamPlayerCount, 4, 10), i.a8(1, qf.neutralBots), i.a8(2, qf.botDifficultyType), i.a8(4, qf.botDifficultyValue), i.dk(qf.botDifficultyTeam, 4, 4), i.dk(qf.botDifficultyData, 10, 4), i.a8(2, qf.spawningType), i.a8(14, qf
					.spawningSeed), i.dk(qf.spawningData, 11, 12), i.a8(1, qf.selectableSpawn), i.a8(2, qf.playerNamesType), i.aW9(qf.playerNamesData, 10, 5), i.a8(1, qf.selectableName), i.a8(2, qf.aIncomeType), i.a8(8, qf.aIncomeValue), i.dk(qf
					.aIncomeData, 10, 8), i.a8(2, qf.tIncomeType), i.a8(8, qf.tIncomeValue), i.dk(qf.tIncomeData, 10, 8), i.a8(2, qf.iIncomeType), i.a8(8, qf.iIncomeValue), i.dk(qf.iIncomeData, 10, 8), i.a8(2, qf.sResourcesType), i.a8(11, qf
					.sResourcesValue), i.dk(qf.sResourcesData, 10, 11), i.dk(qf.a5e, 10, 30), ! function(x9) {
					var i = bE,
						aVZ = b9.q7.aVZ,
						fj = b9.q7.aVa,
						fl = b9.q7.aVb,
						fn = b9.q7.aVc,
						f1 = aVZ.length;
					i.a8(5, x9), i.a8(30, f1), i.a8(30, b9.q7.aVe.length);
					for (var aB = 0; aB < f1; aB++) {
						var eZ = aVZ[aB];
						i.a8(4, eZ), i.a8(9, fj[aB]), 0 === eZ ? i.a8(22, fl[aB]) : 1 === eZ ? (i.a8(10, fl[aB]), i.a8(10, fn[aB])) : 2 === eZ ? (i.a8(10, fl[aB]), i.a8(9, fn[aB])) : 3 === eZ ? (i.a8(10, fl[aB]), i.a8(27, fn[aB])) : 4 === eZ ? (i
							.a8(10, fl[aB]), i.a8(16, fn[aB])) : 5 === eZ || 6 === eZ ? i.a8(10, fl[aB]) : 7 === eZ ? i.a8(1, fl[aB]) : 10 === eZ && (i.a8(20, fl[aB]), i.a8(22, fn[aB]))
					}
				}(x9), ! function(x9) {
					for (var i = bE, aVd = b9.q7.aVd, aVe = b9.q7.aVe, f1 = aVd.length, aB = 0; aB < f1; aB++) i.a8(1, aVd[aB]), i.a8(x9, aVe[aB])
				}(x9), bE.e9),
			qf = bL.du(i - 1, 6) + 1,
			x9 = (bD.aUE(6 * qf) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e9 = 24, i.a8(31, i.g.length), i.e9 = 12, i.a8(12, function() {
					for (var g = bE.g, f1 = g.length, aUk = l.rVersion, aB = 3; aB < f1; aB++) aUk = aUk + g[aB] & 4095;
					return aUk
				}())
			}(), bH.dd(bE.g), bF.t7.t8(bF.t7.t9(qf)));
		return bH.uU(), bE.dd(), x9
	}
}

function cp() {
	var eZ, bu = !1,
		aWB = !1,
		aWC = -1e4,
		aWD = -1,
		aWE = 0;

	function resize(aWI) {
		eZ = 0, ab.tW() && (aWG(aWI) || bu) && (bu = !1, bc.resize(), bW.aCe.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a0m ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a9n()) : (aa.aH6(), aa.aH7()), bf.dl = !0)
	}

	function aWF(fS) {
		return fS && 128 < fS ? Math.floor(fS) : 128
	}

	function aWG(aWI) {
		var i, j, aWK, tB, a9B;
		if (!(0 < h.sm)) return tB = aWF(document.documentElement.clientWidth), a9B = aWF(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tB, j = a9B, aWK = 0 !== a0.id || i < j ?
			700 : 1200, aWK = Math.min(aWK / ((i + j) / 2), 1), aWK = 0 === bj.eN.data[1].value ? 2 * aWK / 3 : Math.min(aWK + (bj.eN.data[1].value - 1) * (1 - aWK) / 2, 1), h.k = (window.devicePixelRatio || 1) * aWK, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aWI && !aWB ? (aWB = !0, t.removeChild(document.body, a2I)) : aWB && (aWB = !1, document.body.appendChild(a2I)), i = Math.floor(.5 + tB * h.k), j = Math.floor(.5 + a9B * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCG(i, j), h.max = a74(i, j), h.iA = bL.du(i + j, 2), h.vN = i / j, a2I.width = i, a2I.height = j, a2I.style.width = tB + "px", a2I.style.height = a9B + "px", aWD = bf.eQ + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iA = 0, this.vN = 1, this.k = 1, this.sm = 0, this.de = function() {
		this.i = aWF(document.documentElement.clientWidth) + 2, this.j = aWF(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		eZ = 1, a2I = document.getElementById("canvasA"), 2 === a0.id && (a2I.style.webkitUserSelect = "none"), (vR = a2I.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aWG(0)
	}, this.eU = function() {
		50 <= ++eZ && resize(0), -1 === aWD || bf.eQ < aWD || (aWD = -1, 2e3 * ++aWE >= bf.eQ + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(ja) {
		bu = !0, resize(ja)
	}, this.a2x = function() {
		aWC + 1e3 > bf.eQ || (aWC = bf.eQ, resize(0))
	}
}

function dH() {
	this.aUN = new aWM, this.a1d = new aWN, this.aUe = new aWO
}

function aWO() {
	this.pv = function() {
		return 69
	}, this.a0E = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aWN() {
	this.a1e = function() {
		for (var gY, f1 = al.kr, a0a = al.kw, a1N = ag.a1N, a8z = this.aIc(), aB = 0; aB < f1; aB++) gY = a0a[aB], bA.gM.ji(gY) || (a1N[gY] = a8z);
		var qC = ag.qC,
			jO = ag.jO,
			jP = ag.jP,
			a1L = ag.a1L,
			f1 = aD.kL;
		for (aB = 0; aB < f1; aB++)(0 === a1L[aB] || jP[aB] < 1 || 2 * qC[aB] > 3 * (jO[aB] + jP[aB])) && (a1N[aB] = 0);
		var a1b = 0;
		for (aB = 0; aB < f1; aB++) a1b += 0 < a1N[aB];
		return a1b
	}, this.aIc = function() {
		return Math.min(65535, bf.kI())
	}
}

function aWM() {
	function aWS(g, fS, hs) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fS >> (aB + hs) % 30 & 1)) % 256
	}
	this.eU = function(aWP, aWQ) {
		var g = new Uint8Array(256);
		return function(g, aWP, aWQ) {
				var aB, aWU = 3 + (4 + aWP) % 32768,
					aWV = 12 + aWQ % 32768,
					aWW = 17 + ((aWP & aWQ) + (aWP | aWQ) + aWP) % 32768;
				for (aB = 0; aB < 256; aB++) aWU = 1 + aWU * aWV % aWW, g[aB] = aWU % 256
			}(g, aWP, aWQ), aWS(g, aWP, 2), aWS(g, aWQ, 7),
			function(g) {
				var aB, fS, e9 = 0;
				for (aB = 0; aB < 3e4; aB++) fS = g[e9], g[e9] = (fS + aB + g[(e9 + aB) % 256]) % 256, e9 = (fS + aB + e9 + (fS & e9)) % 256
			}(g),
			function(g) {
				var aB, a9B = 1,
					tu = 1;
				for (aB = 0; aB < 256; aB += 2) a9B = (1 + a9B) * (g[aB] + 1) % 1073741824, tu = (1 + tu) * (g[aB + 1] + 1) % 1073741824;
				return [a9B, tu]
			}(g)
	}, this.aUO = function(aWX, aWY, aWZ, result) {
		for (var gT = 1 << aWX, aB = 0; aB < gT; aB++)
			if (this.aWa(aB, aWY, aWZ) === result) return aB;
		return 0
	}, this.aWa = function(aWb, aWY, aWZ) {
		for (var yB = aWY + aWb, yK = aWZ + aWb, fS = yB + yK & 2147483647, fK = 1; fK <= 16; fK++) fS = (fS = (fS ^ fS >> fK) >>> 1 + (3 & yB)) * (7 + (1023 & (yB | yK))) & 1073741823, yK >>= 1 + (1 & (yB >>= 1 + (1 & (fS += 65535 & yK))));
		return fS &= 1073741823
	}
}

function cm() {
	var aWc, aWd, iE, aWe;
	this.dd = function() {
		var aB, f8, fA, aUf, aWf, i, j, z0, hz, xQ, fS, gY, fH, fK, aWi;
		if (function() {
				if (iE = !0, aWe = "rgb(" + bS.xO[0] + "," + bS.xO[1] + "," + bS.xO[2] + ")", bS.aLz(bS.eh)) return 1;
				return iE = !1, 0
			}()) aWd = null;
		else {
			for (aWc = bL.du(96, 4), aWf = 1 === bS.eh ? (aUf = 0, 160) : (aUf = 128, 32), aWe = "rgb(" + aUf + "," + aUf + "," + aUf + ")", aWd = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aWd[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.fC : aWc, j = aB % 2 == 0 ? aWc : bS.fD + 2 * aWc, aWd[aB].width = i, aWd[aB].height = j, xQ = (hz = (z0 = aWd[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fA = aWc - 1; 0 <= fA; fA--)
						for (fS = aWf + Math.floor((fA + 1) * (aUf - aWf) / (aWc + 1)), f8 = i - 1; 0 <= f8; f8--) xQ[gY = 4 * ((0 === aB ? aWc - fA - 1 : fA) * i + f8)] = fS, xQ[gY + 1] = fS, xQ[gY + 2] = fS, xQ[gY + 3] = 255;
				else {
					for (f8 = aWc - 1; 0 <= f8; f8--)
						for (fS = aWf + Math.floor((f8 + 1) * (aUf - aWf) / (aWc + 1)), fA = j - 1 - aWc; aWc <= fA; fA--) xQ[gY = 4 * (fA * i + (3 === aB ? aWc - f8 - 1 : f8))] = fS, xQ[gY + 1] = fS, xQ[gY + 2] = fS, xQ[gY + 3] = 255;
					for (fK = 1; 0 <= fK; fK--)
						for (f8 = aWc - 1; 0 <= f8; f8--)
							for (fA = aWc - 1; 0 <= fA; fA--) fH = (Math.pow(f8 * f8 + fA * fA, .5) + 1) / (aWc + 1), fS = aWf + Math.floor((1 < fH ? 1 : fH) * (aUf - aWf)), xQ[gY = 4 * ((0 === fK ? aWc - fA - 1 : fA + fK * (j - aWc)) * i + (
								1 === aB ? f8 : aWc - f8 - 1))] = fS, xQ[gY + 1] = fS, xQ[gY + 2] = fS, xQ[gY + 3] = 255
				}
				z0.putImageData(hz, 0, 0)
			}
			aWi = aWf, bS.xJ.fillStyle = "rgb(" + aWi + "," + aWi + "," + aWi + ")", bS.xJ.fillRect(0, 0, bS.fC, 1), bS.xJ.fillRect(0, bS.fD - 1, bS.fC, 1), bS.xJ.fillRect(0, 0, 1, bS.fD), bS.xJ.fillRect(bS.fC - 1, 0, 1, bS.fD)
		}
	}, this.yu = function() {
		var fK = iE ? 0 : -aWc;
		aNj(fK, fK, bS.fC - 2 * fK, bS.fD - 2 * fK, ba.aWj, ba.aWk, ba.aWl, ba.aWm) || (vR.fillStyle = aWe, vR.fillRect(0, 0, h.i, h.j))
	}, this.vQ = function() {
		iE || (aNi(0, -aWc, bS.fC, aWc, ba.aWj, ba.aWk, ba.aWl, ba.aWm) && vR.drawImage(aWd[0], ba.aWn, ba.aWo - aWc), aNi(bS.fC, -aWc, aWc, bS.fD + 2 * aWc, ba.aWj, ba.aWk, ba.aWl, ba.aWm) && vR.drawImage(aWd[1], ba.aWn + bS.fC, ba.aWo - aWc),
			aNi(0, bS.fD, bS.fC, aWc, ba.aWj, ba.aWk, ba.aWl, ba.aWm) && vR.drawImage(aWd[2], ba.aWn, ba.aWo + bS.fD), aNi(-aWc, -aWc, aWc, bS.fD + 2 * aWc, ba.aWj, ba.aWk, ba.aWl, ba.aWm) && vR.drawImage(aWd[3], ba.aWn - aWc, ba.aWo - aWc))
	}
}

function d6() {
	this.aIa = new aWp, this.yx = new aWq, this.y = new aWr, this.im = new aWs, this.aWi = new aWt, this.mG = new aWu, this.k9 = new aWv, this.l8 = new aWw, this.aWx = new aWy, this.aWz = new aX0, this.mR = new aX1, this.ha = new aX2, this.lh =
		new aX3, this.lA = new aX4, this.hd = new aX5, this.mK = new aX6, this.qK = new aX7, this.dd = function() {
			this.lh.dd(), this.yx.dd(), this.y.dd(), this.im.dd(), this.aWi.dd(), this.aWz.dd(), this.mK.dd()
		}, this.vQ = function() {
			this.aWz.vQ(), this.yx.vQ()
		}
}

function aWv() {
	this.eU = function(player) {
		return !!bN.mR.mS(player) && !(bN.y.kP[player] >= Math.max(3 * ao.performance.lZ, aE.kZ[aE.hj[player]]) || !bA.gM.mT(player, aE.kX[aE.hj[player]], 32, 0)) && (aW.aC3() ? function(player) {
			var aXA = bN.lA.aC6(),
				f1 = aXA.length;
			if (0 === f1) return !1;
			aXA = aXA[ay.jc(f1)], f1 = bN.y.mE[aXA];
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
			}(player, aXA) && !!bN.hd.qJ(player, f1, 1) && (bA.gM.mV(player), bN.y.mW(player), !0)
		}(player) : !!(ao.jC.eU(player) || ao.j1.eU(player) || ao.j3.eU(player)) && (function(player) {
			bO.fc[1] = 4, bA.gM.mV(player), bN.y.mW(player)
		}(player), !0))
	}
}

function aX6() {
	var aXD = 0,
		aXE = null;
	this.dd = function() {
		null === aXE && (aXE = new Uint16Array(2 * bN.y.kZ)), aXD = 0
	}, this.eY = function(aXF, mK) {
		var aXG = aXE;
		aXG[aXD++] = aXF, aXG[aXD++] = mK
	}, this.mL = function(player, mJ) {
		for (var aXG = aXE, f1 = aXD, aB = 0; aB < f1; aB += 2)
			if (aXG[aB] === mJ && bN.lA.aXH(aXG[aB + 1]) && player === bN.y.mF[bO.fc[2]] >> 3) return !0;
		return !1
	}, this.aXI = function(aXJ) {
		var mG = bN.y.mC[aXJ];
		if (!(mG < 64)) {
			for (var mJ = bN.y.mE[aXJ], aXG = aXE, f1 = aXD, aB = f1 - 2; 0 <= aB; aB -= 2)
				if (aXG[aB] === mJ) {
					{
						aXO = void 0;
						var aXO = aXG[aB + 1];
						bN.lA.aXH(aXO) && bN.mK.aXW(bO.fc[2])
					}
					aXG[aB] = aXG[f1 - 2], aXG[aB + 1] = aXG[f1 - 1], f1 -= 2
				} aXD = f1
		}
	}, this.aXL = function(aXM, aXN) {
		for (var aXO = bN.y.mE[aXM], mJ = -1, aXG = aXE, f1 = aXD, aB = 1; aB < f1; aB += 2)
			if (aXG[aB] === aXO) {
				mJ = aXG[aB - 1];
				break
			} if (-1 === mJ) return !1;
		if (!bN.lA.aXH(mJ)) return !1;
		var aXJ = bO.fc[2],
			lg = bN.y.mD[aXJ];
		if (aXN === lg[lg.length - 1]) bN.y.mD[aXM] = bN.lh.aXP(bN.y.mD[aXM], bN.lh.lp(lg));
		else {
			var aXQ = bN.lA.aXR(lg, aXN);
			if (-1 === aXQ) return !1;
			var aXS = bN.y.mP[aXJ];
			aXQ === aXS ? (aXJ = bM.ik(bN.y.mQ[aXJ]), bN.y.mD[aXM] = bN.lh.aXU(bN.y.mD[aXM], lg, aXQ, aXN, bM.iQ(lg[aXQ], aXN) > bM.iQ(lg[aXQ], aXJ))) : bN.y.mD[aXM] = bN.lh.aXU(bN.y.mD[aXM], lg, aXQ, aXN, aXS < aXQ)
		}
		return !0
	}, this.aXW = function(aXX) {
		var lg, lG = bN.y,
			mG = lG.mC[aXX];
		return mG % 64 != 5 && (lg = lG.mD[aXX], lG.aXY[aXX] = 65535 - lG.aXY[aXX], lG.mP[aXX] = lg.length - lG.mP[aXX] - 2, lG.mD[aXX] = bN.lh.lp(lg), lG.mC[aXX] = mG - mG % 64 + 5, !0)
	}
}

function aX1() {
	this.mS = function(player) {
		return !!aD.data.passableWater && bN.y.mB !== bN.y.kZ && bN.y.kP[player] !== bN.y.aXZ && 0 !== ag.gh[player].length
	}, this.qF = function(aVD) {
		var mG = bO.fc[1];
		return !(4 <= mG || !bN.lA.aXa(bM.er(aVD))) && ac.ew(bM.er(bM.ip(aVD, mG)))
	}
}

function aWp() {
	this.aIb = function(player) {
		for (var a8P = bN.y.a8P, tO = player << 3, aB = tO + bN.y.kP[player] - 1; tO <= aB; aB--) this.aXb(a8P[aB])
	}, this.aXb = function(aXc) {
		var y = bN.y,
			aXd = y.mB - 1,
			aXe = y.mF[aXc],
			aXf = y.aXg[aXc],
			aXh = y.mQ[aXc];
		y.mB = aXd, y.mF[aXc] = y.mF[aXd], y.mQ[aXc] = y.mQ[aXd], y.aXY[aXc] = y.aXY[aXd], y.a7L[aXc] = y.a7L[aXd], y.aXg[aXc] = y.aXg[aXd], y.mE[aXc] = y.mE[aXd], y.mC[aXc] = y.mC[aXd], y.aXi[aXc] = y.aXi[aXd], y.mD[aXc] = y.mD[aXd], y.mP[aXc] =
			y.mP[aXd], y.a8P[y.mF[aXc]] = aXc,
			function(aVC) {
				var player = aVC >> 3,
					y = bN.y,
					f1 = y.kP[player] - 1,
					aXl = (player << 3) + f1;
				y.kP[player] = f1, aXl !== aVC && (y.a8P[aVC] = y.a8P[aXl], y.mF[y.a8P[aVC]] = aVC)
			}(aXe), bN.im.im[bM.il(y.mQ[aXc])][y.aXg[aXc]] = aXc, aXd = bM.il(aXh), aXe = aXf, aXd = bN.im.im[aXd], y = aXd.pop(), aXe !== aXd.length && (aXd[aXe] = y, bN.y.aXg[y] = aXe)
	}
}

function aWq() {
	var aXn, aXo = 8,
		aXp = null;

	function aXu(xQ, en, e9) {
		en *= 4;
		xQ[en] = 255, xQ[1 + en] = 255, xQ[2 + en] = e9, xQ[3 + en] = 255
	}

	function aXw(i2, aWe) {
		var f8, fA, iK, en, aXy, aXz, hw = aXo,
			hz = bA.qn.getImageData(i2, hw, hw),
			xQ = hz.data,
			lG = (hw >> 1) - .5,
			aY1 = bA.qv.a3B(aWe, .5);
		for (bA.qv.a3D(aWe, aY1, 300) || bA.qv.a3F(aWe, 100), fA = 0; fA < hw; fA++)
			for (f8 = 0; f8 < hw; f8++) aXz = (hw - 1.5) * (hw - 1.5) / 4, xQ[en = 4 * (fA * hw + f8)] = (aXy = (iK = (iK = f8 - lG) * iK + (iK = fA - lG) * iK) <= (hw - 4.5) * (hw - 4.5) / 4 ? aY1 : aWe)[0], xQ[1 + en] = aXy[1], xQ[2 + en] = aXy[2],
				xQ[3 + en] = aXz < iK ? 0 : 255;
		i2.putImageData(hz, 0, 0)
	}
	this.dd = function() {
		var e9, hw, a3d, i2, hz, xQ;
		(aXn = aXn || new Array(aD.ey)).fill(null), e9 = 255, hw = aXo + 4, a3d = bA.qn.xF(hw, hw), i2 = bA.qn.getContext(a3d, !0), hz = bA.qn.getImageData(i2, hw, hw), aXu(xQ = hz.data, hw + 1, e9), aXu(xQ, hw + 2, e9), aXu(xQ, 2 * hw + 1, e9),
			aXu(xQ, 2 * hw - 3, e9), aXu(xQ, 2 * hw - 2, e9), aXu(xQ, 3 * hw - 2, e9), aXu(xQ, hw * (hw - 3) + 1, e9), aXu(xQ, hw * (hw - 2) + 1, e9), aXu(xQ, hw * (hw - 2) + 2, e9), aXu(xQ, hw * (hw - 2) - 2, e9), aXu(xQ, hw * (hw - 1) - 3, e9),
			aXu(xQ, hw * (hw - 1) - 2, e9), i2.putImageData(hz, 0, 0), aXp = a3d,
			function() {
				if (aD.hu)
					for (var a3d = new Array(bg.ki.length), f1 = aD.ey, aXs = aXn, aBO = bg.aBO, aB = 0; aB < f1; aB++) {
						var a66 = aBO[aB];
						a3d[a66] || (a3d[a66] = function(a66) {
							var a3d = bA.qn.xF(aXo, aXo),
								i2 = bA.qn.getContext(a3d, !0),
								g = bO.fZ;
							return g.set(bg.aXx[a66]), aXw(i2, g), a3d
						}(a66)), aXs[aB] = a3d[a66]
					}
			}()
	}, this.vQ = function() {
		var aB, player, aY2, aNr, hj, iJ, aY4, aY6, aY7, mQ = bN.y.mQ,
			mF = bN.y.mF,
			a7L = bN.y.a7L,
			aXi = bN.y.aXi,
			aY8 = aXn,
			aY9 = aD.el,
			f1 = bN.y.mB,
			aYA = h.i,
			aYB = h.j,
			aYC = bS.fC << 4,
			eq = iB,
			ef = eq / aXo,
			nK = ib / eq,
			nL = ic / eq,
			iK = (aYA + ib) / eq - nK,
			iN = (aYB + ic) / eq - nL,
			i2 = vR;
		for (i2.imageSmoothingEnabled = eq < 9, bA.qn.textAlign(i2, 1), bA.qn.textBaseline(i2, 1), aB = 0; aB < f1; aB++) player = mF[aB] >> 3, hj = a7L[aB], aY2 = .9 + .1 * Math.log10(hj), aNr = (iJ = mQ[aB]) % aYC / 16 - aY2, iJ = aYB * (Math
			.floor(iJ / aYC) / 16 - aY2 - nL) / iN, aY4 = -2 * (aY7 = eq * aY2) * (1 + (aY6 = +(player === aY9)) / 8), aY6 = aY6 * aY7 / 4, (aY7 = aYA * (aNr - nK) / iK) < aY4 || iJ < aY4 || aYA + aY6 < aY7 || aYB + aY6 < iJ || (aNr = 2 *
			aY2 * ef, aY4 = aY2 * eq, null === (aY6 = aY8[player]) && (aY8[player] = aY6 = function(player) {
				var a3d = bA.qn.xF(aXo, aXo);
				return aXw(bA.qn.getContext(a3d, !0), ac.a80(player)), a3d
			}(player)), player === aY9 && (i2.setTransform(aNr, 0, 0, aNr, aY7 - 2 * aNr, iJ - 2 * aNr), i2.drawImage(aXp, 0, 0)), i2.setTransform(aNr, 0, 0, aNr, aY7, iJ), i2.drawImage(aY6, 0, 0), (aY2 = Math.floor(function(hj) {
				if (hj < 1e3) return .42;
				if (hj < 1e4) return .34;
				if (hj < 1e6) return .26;
				if (hj < 1e8) return .19;
				return .15
			}(hj) * aY4)) < 6) || (i2.setTransform(1, 0, 0, 1, 0, 0), i2.fillStyle = aXi[aB] ? bB.oS : bB.nu, i2.font = bA.qn.se(1, aY2), i2.fillText(bA.rm.a03(hj), aY7 + aY4, iJ + aY4 + .1 * aY2));
		i2.imageSmoothingEnabled = !1, i2.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aX0() {
	var aYF;
	this.dd = function() {
		if (aD.hu) {
			var hq = 1 - aD.y3;
			aYF = new Array(bg.ki.length);
			for (var aB = aD.y2 - 1; 0 <= aB; aB--) {
				var a66 = bg.ki[aB + hq];
				aYF[a66] = bP.y.aYH(20, bg.aYI[a66])
			}
			9 === aD.kd && (aYF[1] = bP.y.aYH(20, bg.aYI[1]))
		} else aYF = [bP.y.aYH(20, bg.aYI[7])]
	}, this.vQ = function() {
		var ne = iB;
		if (!(5 <= ne)) {
			var aYA = h.i,
				aYB = h.j,
				nK = ib / ne,
				nL = ic / ne,
				nX = (aYA + ib) / ne,
				nY = (aYB + ic) / ne,
				gZ = -20 * ne,
				aYK = .5 * gZ,
				aYC = bS.fC << 4,
				f1 = bN.y.mB,
				mQ = bN.y.mQ,
				mF = bN.y.mF,
				aBO = bg.aBO,
				a3d = aYF,
				i2 = vR;
			3 < ne && (i2.globalAlpha = .5 * (5 - ne));
			for (var aB = 0; aB < f1; aB++) {
				var iJ = mQ[aB],
					f8 = aYA * (iJ % aYC / 16 - nK) / (nX - nK) + aYK,
					iJ = aYB * (Math.floor(iJ / aYC) / 16 - nL) / (nY - nL) + aYK;
				aYA < f8 || aYB < iJ || f8 < gZ || iJ < gZ || (i2.setTransform(ne, 0, 0, ne, f8, iJ), i2.drawImage(a3d[aBO[mF[aB] >> 3]], 0, 0))
			}
			i2.globalAlpha = 1, i2.setTransform(ne, 0, 0, ne, 0, 0)
		}
	}
}

function aX4() {
	this.aYN = function(player, id) {
		for (var aYO = ag.gh[player], f1 = aYO.length, aB = 0; aB < f1; aB++)
			if (bM.iC(aYO[aB], id)) return !0;
		return !1
	}, this.aYP = function(player, en) {
		for (var iS, aYQ, ef, aYO = ag.gh[player], f1 = aYO.length, i = bS.fC, aYS = bM.f9(en), aYT = bM.fB(en), f7 = -1, min = bS.fC * bS.fC + bS.fD * bS.fD, id = ac.ej(bM.er(en)), aB = 0; aB < f1; aB++)(aYQ = (aYQ = aYS - (iS = (ef = aYO[
			aB]) >> 2) % i) * aYQ + (aYQ = aYT - ~~((.5 + iS) / i)) * aYQ) < min && bM.iC(ef, id) && (min = aYQ, f7 = iS);
		return f7
	}, this.lB = function(iR, iS) {
		for (var id = ac.ej(bM.er(iS)), iD = bM.i5, ef = bM.er(iR), aYU = -1, aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			ac.iE(eq) && ac.ej(eq) === id && (-1 === aYU || bM.iT(bM.ep(eq), iS) < bM.iT(aYU, iS)) && (aYU = bM.ep(eq))
		}
		return aYU
	}, this.lk = function(player, en) {
		for (var iD = bM.i5, ef = bM.er(en), aB = 0; aB < 4; aB++) {
			var eq = ef + iD[aB];
			if (ac.ga(eq) && ac.ys(player, eq)) return !0
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
	}, this.aXa = function(ef) {
		if (ac.iE(ef))
			for (var iD = bM.i5, aB = 0; aB < 4; aB++)
				if (ac.ew(ef + iD[aB])) return !0;
		return !1
	}, this.nJ = function(player, id) {
		for (var tO = player << 3, tP = tO + bN.y.kP[player], mE = bN.y.mE, a8P = bN.y.a8P, aB = tO; aB < tP; aB++) {
			var a8Q = a8P[aB];
			if (mE[a8Q] === id) return a8Q
		}
		return -1
	}, this.nO = function(player) {
		return 0 === bN.y.kP[player] ? -1 : bN.y.a8P[player << 3]
	}, this.a6O = function(la, lb) {
		var f1 = bN.y.mB;
		if (f1 < 1) return -1;
		for (var mQ = bN.y.mQ, aYV = 80, aQ9 = -1, aB = 0; aB < f1; aB++) {
			var fH = bM.iG(la, lb, mQ[aB]);
			fH < aYV && (aYV = fH, aQ9 = aB)
		}
		return function(aB, la, lb) {
			if (aB < 0) return;
			var aYc = bN.y.mQ[aB],
				aYd = bM.iM(aYc),
				aYc = bM.iP(aYc),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a7L[aB]));
			return aB = Math.max(aB, bM.ie(bA.qn.tT(.02, 1.7))), bL.aNq(bM.iL(la), bM.iO(lb), aYd, aYc, aB)
		}(aQ9, la, lb) ? aQ9 : -1
	}, this.aXH = function(nH) {
		for (var f1 = bN.y.mB, mE = bN.y.mE, aB = 0; aB < f1; aB++)
			if (mE[aB] === nH) return bO.fc[2] = aB, !0;
		return !1
	}, this.aIX = function(player) {
		for (var tO = player << 3, tP = tO + bN.y.kP[player], a8P = bN.y.a8P, a7L = bN.y.a7L, hj = 0, aB = tO; aB < tP; aB++) hj += a7L[a8P[aB]];
		return hj
	}, this.aYX = function(player, aXX) {
		aXX = bN.y.mD[aXX];
		return this.lk(player, aXX[aXX.length - 1])
	}, this.aYY = function(iR, iS, fH, aYZ) {
		var iV = bM.f9(iR),
			iR = bM.fB(iR),
			iX = bM.f9(iS),
			iS = bM.fB(iS),
			iX = (fH = Math.max(fH, 1), iX - iV),
			iS = iS - iR,
			iK = bL.du(Math.abs(iX) * aYZ, fH),
			aYZ = bL.du(Math.abs(iS) * aYZ, fH);
		return bM.fO(iV + Math.sign(iX) * iK, iR + Math.sign(iS) * aYZ)
	}, this.aXR = function(lg, en) {
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
	}, this.aC6 = function() {
		for (var aYf = lw[0], mF = bN.y.mF, mB = bN.y.mB, g = [], aB = 0; aB < mB; aB++) bA.gM.kz(aYf, mF[aB] >> 3) && g.push(aB);
		return g
	}, this.li = function(player, lg) {
		for (var tO = player << 3, tP = tO + bN.y.kP[player], a8P = bN.y.a8P, mD = bN.y.mD, hS = lg[0], ky = lg[lg.length - 1], aB = tO; aB < tP; aB++) {
			var gY = mD[a8P[aB]];
			if (gY[0] === hS && gY[gY.length - 1] === ky) return !0
		}
		return !1
	}
}

function aX5() {
	function aYi(player, aXX) {
		aXX = bM.ik(bN.y.mQ[aXX]), aXX = ac.ej(bM.er(aXX));
		return !!bN.lA.aYN(player, aXX)
	}

	function aYg(player) {
		return bN.mR.mS(player) && !bN.lh.ln()
	}
	this.he = function(player, en) {
		return !!aYg(player) && -1 !== (en = function(player, en) {
			for (var f1 = bN.y.mB, mQ = bN.y.mQ, mF = bN.y.mF, aYV = bM.i7(), aQ9 = -1, aB = 0; aB < f1; aB++) {
				var fH = bM.iQ(en, bM.ik(mQ[aB]));
				fH < aYV && bA.gM.kz(player, mF[aB] >> 3) && (aYV = fH, aQ9 = aB)
			}
			return aQ9
		}(player, en)) && !!aYi(player, en) && (bO.fc[3] = bN.y.mE[en], !0)
	}, this.pQ = function(player, nH) {
		return !!aYg(player) && !!bN.lA.aXH(nH) && !!aYi(player, bO.fc[2])
	}, this.qJ = function(player, nH, aYj) {
		return !! function(player, nH, aYj) {
			if (aYg(player) && bN.lA.aXH(nH)) {
				nH = bO.fc[2];
				if (bA.gM.kz(player, bN.y.mF[nH] >> 3)) {
					if (function(player, aXX) {
							return bN.lA.aYX(player, aXX) && (bO.g[0] = bN.lh.lp(bN.y.mD[aXX]), bO.fc[1] = 6, !0)
						}(player, nH)) return 1;
					var aXC = bM.ik(bN.y.mQ[nH]),
						aYn = bN.lA.aYP(player, aXC);
					if (-1 !== aYn) {
						aYn = bM.iQ(aYn, aXC);
						if (!(aYj && 120 < aYn)) {
							aYj = function(aXX, aYo, aXC) {
								var lg = bN.y.mD[aXX],
									aXX = bN.y.mP[aXX],
									aYq = bM.iQ(aXC, lg[aXX + 1]);
								if (aYo <= aYq) return bN.lA.aYY(aXC, lg[aXX + 1], aYq, aYo);
								for (var fH = aYo - aYq, f1 = lg.length - 1, aB = aXX + 1; aB < f1; aB++) {
									var aYr = bM.iQ(lg[aB], lg[aB + 1]);
									if (fH <= aYr) return bN.lA.aYY(lg[aB], lg[aB + 1], aYr, fH);
									fH -= aYr
								}
								return lg[f1]
							}(nH, aYn, aXC);
							if (bN.l8.qG(player, aYj, 1)) return bO.fc[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nH, aYj) && (player = bO.fc[2], bN.y.mC[player] = 64 + bN.y.mC[player] % 64, bN.mK.eY(nH, bN.y.mU), !0)
	}
}

function aWu() {
	function aYw(player, hj, aYu, aXC) {
		var jU;
		if (ac.es(aYu)) jU = aD.ey;
		else {
			if ((jU = ac.et(aYu)) === player) return void bd.gQ(player, hj - bA.gM.gP(player, hj), 12);
			if (!bs.eu(player, jU)) return void b8.kN.pf(player, jU, hj)
		}
		ad.jg(player, jU) || ad.jz(player) ? (ag.gS[player].push(aXC << 2), ad.eY(player, hj, jU), aF.jS(player, !0)) : bd.gQ(player, hj, 12)
	}
	this.eU = function() {
		for (var mC = bN.y.mC, mQ = bN.y.mQ, aXY = bN.y.aXY, aB = bN.y.mB - 1; 0 <= aB; aB--) 65535 === aXY[aB] && function(aB, aXC, hr) {
			if (6 === hr) {
				if (bN.mK.aXL(aB, aXC)) return bN.y.mP[aB]++, bN.y.aXY[aB] = 0, 0
			} else {
				var player = bN.y.mF[aB] >> 3,
					aB = bN.y.a7L[aB];
				bd.aYv(player), hr < 4 ? aYw(player, aB, aXC + bM.i4[hr] << 2, aXC) : 4 === hr ? function(player, hj, aXC) {
					var aB, f5, iD = bM.i5,
						eq = bM.er(aXC);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.es(f5)) return aYw(player, hj, f5, aXC);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5) && !ac.ys(player, f5)) return aYw(player, hj, f5, aXC);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5)) return aYw(player, hj, f5, aXC)
				}(player, aB, aXC) : 5 === hr && function(player, hj, aXC) {
					var aB, f5, iD = bM.i5,
						eq = bM.er(aXC);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5) && ac.ys(player, f5)) return aYw(player, hj, f5, aXC);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.ga(f5)) return aYw(player, hj, f5, aXC);
					for (aB = 0; aB < 4; aB++)
						if (f5 = eq + iD[aB], ac.es(f5)) return aYw(player, hj, f5, aXC)
				}(player, aB, aXC)
			}
			return 1
		}(aB, bM.ik(mQ[aB]), mC[aB] % 64) && (bN.mK.aXI(aB), bN.aIa.aXb(aB))
	}, this.aYt = function(player, en, hr, nH, hj) {
		if (!(5 <= hr)) {
			var aY9 = aD.el;
			if (bA.gM.hC(aY9) && bs.eu(player, aY9) && player !== aY9 && 0 !== ag.gh[aY9].length && bA.gM.a4E(player, 5)) {
				for (var aYu, fF = !1, aB = 0; aB < 4; aB++)
					if (aYu = en + bM.i4[aB] << 2, ac.ew(aYu) && !ac.es(aYu) && ac.et(aYu) === aY9) {
						fF = !0;
						break
					} fF && (aN.a7U(719, 0), hr = hj < 25e3 ? L(473) + " (" + bA.rm.a03(hj) + ") ⛵" : L(474) + " (" + bA.rm.a03(hj) + ") 🚢", aN.a1A(180, hr, 719, player, bB.oR, bB.nr, -1, !0, void 0, {
					fL: 1,
					nH: nH
				}))
			}
		}
	}
}

function aWr() {
	this.kZ = 512, this.aXZ = 8, this.mB = 0, this.mU = 0, this.mF = new Uint16Array(this.kZ), this.mQ = new Uint32Array(this.kZ), this.aXY = new Uint16Array(this.kZ), this.a7L = new Uint32Array(this.kZ), this.aXg = new Uint16Array(this.kZ), this
		.mE = new Uint16Array(this.kZ), this.mC = new Uint8Array(this.kZ), this.aXi = new Uint8Array(this.kZ), this.mD = new Array(this.kZ), this.mP = new Uint16Array(this.kZ), this.kP = new Uint8Array(aD.ey), this.a8P = new Uint16Array(this.aXZ * aD
			.ey), this.dd = function() {
			this.mB = 0, this.mU = 0, this.kP.fill(0), this.mD.fill(null)
		}, this.mW = function(player) {
			var hj = bO.fX[0],
				mG = bO.fc[1],
				lg = bO.g[0],
				aYz = this.mU,
				f1 = this.mB,
				aZ0 = bM.ij(lg[0]),
				aZ1 = this.kP[player],
				aZ2 = (player << 3) + aZ1;
			this.mF[f1] = aZ2, this.mQ[f1] = aZ0, this.aXY[f1] = 0, hj < 60 && (bA.gM.gN(player, 60 - hj), hj = 60), this.a7L[f1] = hj, this.aXg[f1] = bN.im.mW(f1, bM.il(aZ0)), this.mE[f1] = aYz, this.mC[f1] = mG, this.aXi[f1] = 0, this.mD[f1] = lg,
				this.mP[f1] = 0, this.mU = (aYz + 1) % 65536, this.kP[player] = aZ1 + 1, this.a8P[aZ2] = f1, this.mB++, bN.mG.aYt(player, lg[lg.length - 1], mG, aYz, hj)
		}, this.eU = function() {
			bN.mG.eU();
			for (var gY = aD.el, dt = bN.lA.aIX(gY), sP = (! function(sP) {
					for (var aZ7, mQ = sP.mQ, a7L = sP.a7L, aXi = sP.aXi, aXY = sP.aXY, aXg = sP.aXg, mD = sP.mD, mP = sP.mP, sP = sP.mB, aYC = bS.fC << 4, aB = sP - 1; 0 <= aB; aB--) {
						var aZ8 = mQ[aB],
							lg = mD[aB],
							aZ9 = mP[aB],
							aZ0 = bM.ij(lg[aZ9]),
							aZA = bM.ij(lg[aZ9 + 1]),
							aZB = aZ0 % aYC,
							aZ0 = ~~((aZ0 + .5) / aYC),
							aZD = aZA % aYC,
							aZE = ~~((aZA + .5) / aYC),
							aZF = aZD - aZB,
							aZG = aZE - aZ0,
							f4 = Math.max(~~Math.sqrt(aZF * aZF + aZG * aZG + .5), 1),
							aZH = a7L[aB],
							aZH = (aZH = aXi[aB] ? 4e4 : 25e4 + Math.min(20 * aZH, 3e5) + Math.min(aZH >> 3, 5e4), aXY[aB] + Math.max(~~((aZH + .5) / f4), 1));
						65535 <= aZH ? aZ9 + 2 < lg.length ? (mP[aB] = aZ9 + 1, mQ[aB] = aZ7 = function(aB, aZI, aZB, aZC, aZ9, f4, lg, aYC) {
							aZI = Math.min(aZI - 65535, 65535);
							var lg = bM.ij(lg[aZ9 + 2]),
								aZ9 = lg % aYC - aZB,
								lg = ~~((lg + .5) / aYC) - aZC,
								aZL = Math.max(~~Math.sqrt(aZ9 * aZ9 + lg * lg + .5), 1);
							return aZI = Math.min(Math.floor((f4 * aZI + .5) / aZL), 65534), bN.y.aXY[aB] = aZI, aZB + bL.du(aZI * aZ9, 65535) + aYC * (aZC + bL.du(aZI * lg, 65535))
						}(aB, aZH, aZD, aZE, aZ9, f4, lg, aYC)) : (mQ[aB] = aZ7 = aZA, aXY[aB] = 65535) : (aXY[aB] = aZH, mQ[aB] = aZ7 = aZB + bL.du(aZH * aZF, 65535) + aYC * (aZ0 + bL.du(aZH * aZG, 65535))), aXg[aB] = bN.im.aZK(aXg[aB],
							aZ8, aZ7)
					}
				}(this), ! function(sP) {
					if (bf.kI() % 2 == 1) {
						var aB, hs, lG, fL, eZ, aZM, zh, aZN, hS, nK, nL, aZ0, aZO, a9s, aZQ, ky, f1 = sP.mB,
							mQ = sP.mQ,
							mF = sP.mF,
							a7L = sP.a7L,
							aXi = sP.aXi,
							im = bN.im.im,
							aZS = im.length,
							aZT = bN.im.aZT,
							aYC = bS.fC << 4,
							aZU = aD.hu,
							aV1 = bg.ez,
							gZ = (f1 - 1) * (bL.du(bf.kI(), 2) % 2);
						for (aB = 0; aB < f1; aB++)
							for (hs = Math.abs(aB - gZ), aZ0 = mQ[hs], lG = bM.il(aZ0), hS = mF[hs] >> 3, nK = aZ0 % aYC, nL = ~~((aZ0 + .5) / aYC), aZQ = a7L[hs], fL = 0; fL < 9; fL++)
								if (!((aZM = lG + aZT[fL]) < 0 || aZS <= aZM))
									for (aZN = im[aZM], zh = aZN.length, eZ = 0; eZ < zh; eZ++) aZO = aZN[eZ], ky = mF[aZO] >> 3, hS == ky || aZU && aV1[hS] === aV1[ky] && aV1[hS] || (ky = mQ[aZO], (a9s = nK - ky % aYC) * a9s + (a9s = nL - ~~
										((ky + .5) / aYC)) * a9s < 14400 && (ky = a7L[aZO], a9s = ky <= aZQ ? Math.max(1, bL.du(ky + bL.du(aZQ - ky, 10), 10)) : Math.max(1, bL.du(aZQ, 10)), a7L[aZO] = Math.max(ky - a9s, 0), aXi[aZO] =
										4))
					}
				}(this), ! function(sP) {
					if (bf.kI() % 5 == 3)
						for (var a7L = sP.a7L, f1 = sP.mB, aB = 0; aB < f1; aB++) {
							var hj = a7L[aB];
							a7L[aB] = Math.max(hj - Math.max(1, hj >> 7), 0)
						}
				}(this), this), a7L = sP.a7L, aXi = sP.aXi, aB = sP.mB - 1; 0 <= aB; aB--) aXi[aB] = aXi[aB] >> 1, 0 === a7L[aB] && (bN.mK.aXI(aB), bN.aIa.aXb(aB));
			bd.gQ(gY, dt - bN.lA.aIX(gY), 15)
		}
}

function aWs() {
	this.aZV = 32, this.f8 = 0, this.fA = 0, this.io = 0, this.aZW = 0, this.aZX = 4, this.im = null, this.aZT = new Int16Array(9), this.dd = function() {
		this.io = 1 + bL.du(bS.fC - 1, this.aZV), this.aZW = 1 + bL.du(bS.fD - 1, this.aZV), this.im = new Array(this.io * this.aZW), bA.qv.a3A(this.im);
		var f8, fA, aZT = this.aZT,
			i = this.io;
		for (f8 = -1; f8 <= 1; f8++)
			for (fA = -1; fA <= 1; fA++) aZT[3 * (1 + fA) + 1 + f8] = fA * i + f8
	}, this.mW = function(aZZ, aB) {
		return this.im[aB].push(aZZ), this.im[aB].length - 1
	}, this.aZK = function(aZa, aZ0, aZA) {
		var aZb, aZc, aZ0 = bM.il(aZ0),
			aZA = bM.il(aZA);
		return aZ0 === aZA ? aZa : (aZb = this.im[aZ0].pop(), this.im[aZ0].length === aZa ? this.mW(aZb, aZA) : (aZc = this.im[aZ0][aZa], this.im[aZ0][aZa] = aZb, bN.y.aXg[aZb] = aZa, this.mW(aZc, aZA)))
	}
}

function aWw() {
	this.l9 = function(player, aZd) {
		return -1 !== aZd && !!bN.lA.ll(player, aZd) && this.qG(player, aZd, 0)
	}, this.qG = function(player, aZd, aZe) {
		player = function(player, aZd, aZe) {
			var aYn = bN.lA.aYP(player, aZd);
			if (-1 === aYn) return -1;
			aYn = bN.lA.lB(aYn, aZd);
			if (-1 === aYn) return -1;
			var le = bN.lh.lm(aYn, aZd);
			if (0 <= le) return le;
			if (bN.lh.ln()) return -1;
			if (0 <= (le = bN.lh.lm(aZd, aYn))) return bN.lh.lo(bN.lh.lp(bN.lh.get(le)));
			if (aYn === aZd) return bN.lh.lo(new Uint32Array([aYn, aZd]));
			if (0 <= (le = bN.aWx.qG(aYn, aZd))) return le;
			return aZe ? function(aZi, player) {
				var fh = bO.fh,
					eN = (fh.fill(0), [aZi]),
					i6 = (fh[aZi] = 1, bM.i6),
					aZj = -1,
					f1 = eN.length;
				for (; - 1 === aZj && f1;) {
					for (var g = [], aB = 0; aB < f1; aB++)
						for (var en = eN[aB], a4y = fh[en], f4 = 0; f4 < 8; f4++) {
							var wz, a1Y, f7 = en + i6[f4],
								ef = 4 * f7;
							ac.iE(ef) ? (wz = fh[f7], a1Y = a4y + 5 + ((1 & f4) << 1), 0 === wz ? (g.push(f7), fh[f7] = a1Y) : fh[f7] = Math.min(a1Y, wz)) : -1 === aZj && f4 % 2 == 0 && ac.yp(player, ef) && (aZj = en)
						}
					f1 = (eN = g).length
				}
				return -1 !== aZj ? function(iR, aZl) {
					var i6 = bM.i6,
						aZm = -1,
						hr = 0,
						mq = [];
					for (; aZl !== iR;)(hr = function(en, hr) {
						var fh = bO.fh,
							i6 = bM.i6,
							a4y = fh[en];
						if (a4y - fh[en + i6[hr]] != 5 + ((1 & hr) << 1))
							for (var fK = 0; fK < 8; fK++) {
								var f4 = fK + hr + 6 & 7;
								if (a4y - fh[en + i6[f4]] == 5 + ((1 & f4) << 1)) return f4
							}
						return hr
					}(aZl, hr)) !== aZm && (mq.push(aZl), aZm = hr), aZl += i6[hr];
					mq.push(iR);
					var le = bN.lh.lm(mq[0], iR);
					if (0 <= le) return le;
					return bN.lh.lo(new Uint32Array(mq))
				}(aZi, aZj) : -1
			}(aZd, player) : -1
		}(player, aZd, aZe);
		return -1 !== player && (bO.g[0] = bN.lh.get(player), !0)
	}
}

function aWy() {
	function aZo(hF, iW, iY) {
		for (var jb = Math.min(iW, iY), nc = Math.max(iW, iY), fA = jb + 1; fA < nc; fA++)
			if (!ac.iE(bM.ig(hF, fA))) return;
		return 1
	}

	function aZp(hH, iV, iX) {
		for (var jb = Math.min(iV, iX), nc = Math.max(iV, iX), f8 = jb + 1; f8 < nc; f8++)
			if (!ac.iE(bM.ig(f8, hH))) return;
		return 1
	}

	function aZq(iV, iW, iX, iY, aZg, aZd) {
		for (var f1 = Math.min(Math.abs(iX - iV), Math.abs(iY - iW)), iK = Math.sign(iX - iV), iN = Math.sign(iY - iW), aB = 0; aB < f1; aB++)
			if (!ac.iE(bM.ig(iV += iK, iW += iN))) return null;
		return iV === iX ? aZo(iV, iW, iY) ? new Uint32Array([aZg, bM.fO(iV, iW), aZd]) : null : aZp(iW, iV, iX) ? new Uint32Array([aZg, bM.fO(iV, iW), aZd]) : null
	}
	this.qG = function(aZg, aZd) {
		aZg = function(aZg, aZd) {
			var iV = bM.f9(aZg),
				iW = bM.fB(aZg),
				iX = bM.f9(aZd),
				iY = bM.fB(aZd);
			if (iV === iX) {
				if (aZo(iV, iW, iY)) return new Uint32Array([aZg, aZd])
			} else {
				if (iW !== iY) return aZq(iV, iW, iX, iY, aZg, aZd) || aZq(iX, iY, iV, iW, aZg, aZd);
				if (aZp(iW, iV, iX)) return new Uint32Array([aZg, aZd])
			}
			return null
		}(aZg, aZd);
		return null === aZg ? -1 : bN.lh.lo(aZg)
	}
}

function aX3() {
	var aZr = [];
	this.dd = function() {
		aZr = []
	}, this.ln = function() {
		return 65536 === aZr.length
	}, this.lm = function(aZg, aZd) {
		for (var lh = aZr, f1 = lh.length, aB = 0; aB < f1; aB++) {
			var gY = lh[aB];
			if (gY[0] === aZg && gY[gY.length - 1] === aZd) return aB
		}
		return -1
	}, this.lp = function(lg) {
		var aZs = new Uint32Array(lg.length);
		return aZs.set(lg), aZs.reverse()
	}, this.aXP = function(hS, ky) {
		var gT = hS.length - 1,
			aZt = new Uint32Array(gT + ky.length);
		return aZt.set(hS, 0), aZt.set(ky, gT), aZt
	}, this.aXU = function(hS, ky, wT, en, aZu) {
		aZu && (wT = (ky = this.lp(ky)).length - wT - 2);
		aZu = ky.subarray(wT + 1 + (en === ky[wT + 1])), en = new Uint32Array(hS.length + aZu.length);
		return en.set(hS, 0), en.set(aZu, hS.length), en
	}, this.lo = function(lg) {
		return aZr.push(lg), aZr.length - 1
	}, this.get = function(aB) {
		return aZr[aB]
	}, this.lj = function() {
		return aZr
	}, this.aZw = function(aZg, aZd) {
		return null
	}
}

function aX7() {
	this.eU = function(player, nH) {
		player = bN.lA.nJ(player, nH);
		return !(player < 0 || !bN.mK.aXW(player) || (bN.mK.aXI(player), 0))
	}
}

function aWt() {
	var zM = 32,
		zL = new Array(2);

	function xF(eZ) {
		var f8, fA, en, iN, iK, hw = zM,
			a3d = bA.qn.xF(hw, hw),
			i2 = bA.qn.getContext(a3d, !0),
			hz = bA.qn.getImageData(i2, hw, hw),
			xQ = hz.data,
			lG = (hw >> 1) - .5,
			lH = Math.sqrt(lG * lG);
		for (xQ.fill(255), fA = 0; fA < hw; fA++)
			for (f8 = 0; f8 < hw; f8++) iK = f8 - lG, iN = fA - lG, en = 4 * (fA * hw + f8), iK = 714 * (lH - Math.sqrt(iK * iK + iN * iN)) / lH, xQ[2 + en] = eZ, xQ[3 + en] = 255 < iK ? 0 : iK;
		return i2.putImageData(hz, 0, 0), a3d
	}
	this.aZx = -1, this.dd = function() {
		this.aZx = -1, zL[0] || (zL[0] = xF(255), zL[1] = xF(0))
	}, this.aZy = function(i2, ef, f8, fA, e8, aB) {
		bA.gM.hC(aD.el) && (i2.setTransform(ef *= 4 / 3 * .625, 0, 0, ef, f8 - (e8 *= 4 / 3), fA - e8), i2.drawImage(zL[+(bN.y.mE[aB] === this.aZx)], 0, 0))
	}
}

function aX2() {
	function aVI(f8, f1, fA, aZz, a9y, fR, player) {
		if (!(fA < 1 || a9y < fA))
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (bN.lA.aXa(ef) && !bA.qv.has(aZz, ac.ej(ef)) && ac.yh(ef, player)) return ef >> 2;
				f8 += fR
			}
		return -1
	}

	function aVM(fA, f1, f8, aZz, aVG, fR, player) {
		if (!(f8 < 1 || aVG < f8)) {
			f1 = Math.max(f1, 0);
			for (var aB = 0; aB <= f1; aB++) {
				var ef = bM.ig(f8, fA);
				if (bN.lA.aXa(ef) && !bA.qv.has(aZz, ac.ej(ef)) && ac.yh(ef, player)) return ef >> 2;
				fA += fR
			}
		}
		return -1
	}

	function aVQ(iR, iS, aVD) {
		return -1 !== iS && (-1 === iR || bM.iT(iS, aVD) < bM.iT(iR, aVD)) ? iS : iR
	}
	this.hb = function(player, aVD) {
		if (bN.mR.mS(player))
			for (var aVE = bM.i7(), aZz = [];;) {
				var aZj = function(aVD, aVE, aZz, player) {
					for (var hF = bM.f9(aVD), hH = bM.fB(aVD), aVG = bS.fC - 2, a9y = bS.fD - 2, aVH = -1, f4 = 0; f4 < aVE; f4++) {
						var a9x = Math.max(hF - f4, 1),
							aMK = Math.max(hH - f4, 1),
							yd = Math.min(hF + f4, aVG),
							yc = Math.min(hH + f4, a9y),
							iR = aVI(hF, yd - hF, hH - f4, aZz, a9y, 1, player),
							iS = aVI(hF - 1, hF - a9x - 1, hH - f4, aZz, a9y, -1, player),
							yd = aVI(hF, yd - hF, hH + f4, aZz, a9y, 1, player),
							a9x = aVI(hF - 1, hF - a9x - 1, hH + f4, aZz, a9y, -1, player),
							aVL = aVM(hH, yc - hH - 1, hF - f4, aZz, aVG, 1, player),
							aVN = aVM(hH - 1, hH - aMK - 2, hF - f4, aZz, aVG, -1, player),
							yc = aVM(hH, yc - hH - 1, hF + f4, aZz, aVG, 1, player),
							aMK = aVM(hH - 1, hH - aMK - 2, hF + f4, aZz, aVG, -1, player);
						if (aVH = aVQ(aVH, iR, aVD), aVH = aVQ(aVH, iS, aVD), aVH = aVQ(aVH, yd, aVD), aVH = aVQ(aVH, a9x, aVD), aVH = aVQ(aVH, aVL, aVD), aVH = aVQ(aVH, aVN, aVD), aVH = aVQ(aVH, yc, aVD), 0 <= (aVH = aVQ(aVH, aMK, aVD)) &&
							f4 * f4 >= bM.iT(aVH, aVD)) return aVH
					}
					return -1
				}(aVD, aVE, aZz, player);
				if (-1 === aZj) break;
				var id = ac.ej(bM.er(aZj));
				if (bN.lA.aYN(player, id)) return !! function(player, aZj, aVD) {
					for (var hr = bM.ir(aZj, aVD), aB = 0; aB < 4; aB++) {
						var en = bM.ip(aZj, hr);
						if (ac.aIC(bM.er(en), player)) return bO.fc[6] = hr, 1;
						hr = (hr + 1) % 4
					}
					return
				}(player, aZj, aVD) && (bO.fc[7] = aZj, !0);
				aZz.push(id)
			}
		return !1
	}
}

function dg() {
	this.aSg = [L(475), L(476), L(477), L(478), L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490)];
	var aa2 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCS = new Array(aa2.length), this.dd = function() {
		var g = bj.eN.data[155].value.split(";"),
			lG = g.length;
		if (function() {
				for (var f1 = aa2.length, aB = 0; aB < f1; aB++) bX.aCS[aB] = aa2[aB]
			}(), !(lG > aa2.length))
			for (var aB = 0; aB < lG; aB++) g[aB].length && (this.aCS[aB] = g[aB])
	}, this.aSi = function(e9, code) {
		for (var aCS = this.aCS, aa4 = aa2, qU = (aCS[e9] = code, ""), f1 = aCS.length, aa5 = [], aB = 0; aB < f1; aB++) aa5.push(aCS[aB] === aa4[aB] ? "" : aCS[aB]);
		f1--;
		for (aB = 0; aB < f1; aB++) qU += aa5[aB] + ";";
		bj.sF.sG(155, qU += aa5[f1])
	}, this.aSf = function() {
		bj.sF.sG(155, ""), this.dd()
	}, this.eZ = function(code, e9) {
		return code === this.aCS[e9] || code === this.aCS[e9 + 1]
	}
}

function dY() {
	var aa6 = new Array(1),
		aa7 = new Array(1),
		aa8 = 20,
		eO = 0,
		aa9 = !1;

	function aaB() {
		aa8++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aa7[aB] = 0, aa6[aB] = document.createElement("audio"), aa6[aB].src = src, aa6[aB].setAttribute("preload", "auto"), aa6[aB].setAttribute("controls", "none"), aa6[aB].style.display = "none", aa6[aB].onpause = function() {
					aa7[aB] = 1
				}, aa6[aB].oncanplaythrough = function() {
					aa7[aB] = 0 === aa7[aB] ? 1 : aa7[aB]
				}, document.body.appendChild(aa6[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aa9 = !0
		}
	}, this.uU = function() {
		if (aa9) {
			aa9 = !1;
			for (var aB = 0; 0 <= aB; aB--) aa6[aB].onpause = null, aa6[aB].oncanplaythrough = null, t.removeChild(document.body, aa6[aB]), aa6[aB] = null
		}
	}, this.play = function() {
		if (aa9) {
			var dt = performance.now();
			if (eO + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aa7[aB]) return eO = dt, aa7[aB] = 2, void aa6[aB].play();
			0 < aa8 && (aa8--, setTimeout(aaB, 66))
		}
	}
}

function ca() {
	this.a8x = function() {
		var aaE;
		return !(al.kr < 3 || ag.go[lw[0]] >= aD.k5 >> 1) && (aD.hu ? 9 !== aD.kd && (aaE = ae.aJj(), !(2 * ae.aJk(bh.ku()) >= aaE)) : function() {
			if (8 === aD.kd) return !1;
			var aaE = ae.aJj();
			if (2 * ag.h2[lw[0]] >= aaE) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aZ1 = aD.kL, h2 = ag.h2, aB = 0; aB < aZ1; aB++) h2[aB] = 512;
			var aZ2 = aD.xv,
				kY = aE.kY,
				hj = aE.hj;
			for (aB = aZ1; aB < aZ2; aB++) h2[aB] = kY[hj[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f1 = aD.xv, h2 = ag.h2, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f1; aB++) h2[aB] = sResourcesValue
		} : function() {
			for (var f1 = aD.xv, h2 = ag.h2, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f1; aB++) h2[aB] = sResourcesData[aB]
		})();
		bd.mq[8] = ag.h2[aD.el]
	}
}

function dP() {
	var aIK = 501,
		aaK = (this.aaJ = new Uint32Array(aIK), this.a4J = new Uint32Array(aIK), this.aC7 = new Uint16Array(aIK), this.aSo = 0, 1),
		uh = 0;

	function aaN(self) {
		self.max.fill(0)
	}

	function aaP(self, aB) {
		self.max[0] = Math.max(self.aaJ[aB], self.max[0]), self.max[1] = Math.max(self.a4J[aB], self.max[1]), self.max[2] = Math.max(self.aC7[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aaL = 0, this.mq = new Array(21), this.aaM = null, this.de = function() {
		this.aaM = [L(491), L(492), L(493), L(494), L(495), L(496), L(497), L(498), L(316), L(317), L(499), L(500), L(501), L(502), "", L(503), L(504), L(505), L(274), L(506), L(507)]
	}, this.dd = function() {
		this.aSo = 0, aaK = 1, this.aaL = 0, uh = 0, aaN(this), this.mq.fill(0)
	}, this.qD = function(player, ia) {
		bA.gM.a4D(player) && (this.mq[0] += ia + 1, this.mq[1]++, this.mq[12] += bO.fX[1])
	}, this.pi = function(player, pL) {
		__fx.donationsTracker.logDonation(player, pL, bO.fX[0]);
		player === aD.el && (aN.pi(bO.fX[0], bO.fX[1], pL), this.mq[12] += bO.fX[1], this.mq[16] += bO.fX[0]), pL === aD.el && (aN.a7Y(bO.fX[0], player), this.mq[10] += bO.fX[0])
	}, this.qH = function(player) {
		bA.gM.a4D(player) && (this.mq[2]++, this.mq[12] += bO.fX[1])
	}, this.qP = function(player) {
		bA.gM.a4D(player) && (this.mq[19]++, this.mq[12] += bO.fX[1])
	}, this.aYv = function(player) {
		bA.gM.a4D(player) && this.mq[20]++
	}, this.gQ = function(player, a4y, e9) {
		bA.gM.a4D(player) && (this.mq[e9] += a4y)
	}, this.eU = function() {
		var self;
		this.aaL || 0 < uh-- || ((self = this).aaJ[self.aSo] = ag.go[aD.el], self.a4J[self.aSo] = ag.h2[aD.el], self.aC7[self.aSo] = ae.aC8(aD.el), aaP(self, self.aSo), self.aSo++, self.aSo === aIK && function(self) {
			aaN(self), aaP(self, 0), self.aSo = 1 + bL.du(aIK, 2);
			for (var aB = 1; aB < self.aSo; aB++) self.aaJ[aB] = self.aaJ[2 * aB], self.a4J[aB] = self.a4J[2 * aB], self.aC7[aB] = self.aC7[2 * aB], aaP(self, aB);
			aaK *= 2
		}(self), uh = aaK - 1, be.mh(), 0 === ag.mu[aD.el] && (self.aaL = bf.kI()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.tB = 0, this.tC = 0, this.aaR = 0, this.aaS = 0, this.a9B = 0, this.tu = 0;
	var aaU = this.aaT = 0;
	this.aaV = 0, this.aaW = 0, this.aaX = 0, this.a8W = 0, this.e9 = 0, this.aBi = null, this.hm = !1, this.aaY = -1, this.aaZ = !1, this.aaa = [0, 0], this.de = function() {
		this.aBi = [L(508), L(117, 0, "Balance"), L(116, 0, "Interest"), L(509)]
	}, this.dd = function() {
		this.hm = !1, this.aaY = -1, this.aaZ = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var f4 = a0.a1.i9() && h.i < h.j ? 1 : a0.a1.i9() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(f4 * this.i), this.i -= a0.a1.i9() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8W = Math.floor(this.j / 150), this.a8W = Math.max(this.a8W, 1.5), this.tB = Math.floor(1 + .02 * this
			.i), this.tC = Math.floor(1 + .04 * this.i), this.a9B = this.tC, aaU = Math.floor(.75 * this.a9B), this.tu = Math.floor(1 + .075 * this.i), this.aaV = Math.floor(1 + .1125 * this.i), this.aaW = Math.floor(this.i * (a0.a1.i9() ? .03 :
				.029)), this.aaW = Math.max(this.aaW, 4), this.aaX = Math.floor(.035 * this.i), this.aaX = Math.max(this.aaX, 4), this.aaT = this.j - 2 * this.a9B - this.tu - this.aaV, this.hm && this.aab()
	}, this.hD = function(la, lb) {
		var xy, xx;
		return !!this.hm && (xx = la, xy = lb, la -= bL.du(h.i - this.i, 2), lb -= bL.du(h.j - this.j, 2), la < 0 || lb < 0 || la >= this.i || lb >= this.j || la >= this.i - this.aaV && lb < this.aaV ? -1 !== aM.hD(xx, xy) || bC.hD(xx, xy) ||
			this.s4() : lb < this.aaV || (lb < this.j - this.tu ? (this.aaZ = !0, this.aaY = (la - 2 * this.tB - this.aaR) / this.aaS, 3 !== this.e9 && (bf.dl = !0)) : (xx = (xx = Math.floor(la / (this.i / this.aBi.length))) < 0 ? 0 : xx >=
				this.aBi.length ? this.aBi.length - 1 : xx) !== this.e9 && (this.e9 = xx, this.aab(), bf.dl = !0)), !0)
	}, this.a2J = function(la, lb) {
		return this.aaa[0] = la, this.aaa[1] = lb, !(!this.hm || !this.aaZ || (la -= bL.du(h.i - this.i, 2), lb = this.aaY, this.aaY = (la - 2 * this.tB - this.aaR) / this.aaS, (0 <= this.aaY && this.aaY <= 1 || 0 <= lb && lb <= 1) && (bf.dl = !
			0), 0))
	}, this.a2i = function() {
		this.aaZ && (this.aaZ = !1)
	}, this.a2u = function() {
		this.hm ? this.s4() : this.show()
	}, this.show = function() {
		bd.aSo < 2 || (this.hm = !0, this.aab())
	}, this.s4 = function() {
		this.hm = !1, this.aaY = -1, bf.dl = !0
	}, this.aab = function() {
		this.e9 < 2 ? this.aaR = aQ.measureText(bA.rm.a03(bd.max[this.e9]), bA.qn.se(0, this.aaW)) : 2 === this.e9 && (this.aaR = aQ.measureText(bA.rm.a4r(6, 2), bA.qn.se(0, this.aaW))), this.aaS = this.i - 2 * this.tB - this.aaR - this.tC
	}, this.mh = function() {
		this.hm && this.aab()
	}, this.vQ = function() {
		this.hm && this.a9T()
	}, this.a9T = function() {
		var f8 = bL.du(h.i - this.i, 2),
			fA = bL.du(h.j - this.j, 2);
		vR.setTransform(1, 0, 0, 1, f8, fA), vR.fillStyle = bB.nr, vR.fillRect(0, this.aaV, this.i, this.j - this.aaV), this.aac(), this.aRQ(), vR.strokeRect(0, 0, this.i, this.j), bA.qn.textAlign(vR, 2), vR.font = bA.qn.se(0, this.aaW), 0 ===
			this.e9 ? this.aad(bd.aaJ, f8, fA) : 1 === this.e9 ? this.aad(bd.a4J, f8, fA) : 2 === this.e9 ? this.aae(f8, fA) : 3 === this.e9 && (this.aaf(f8, fA), this.aag(f8, fA)), aM.a6f(Math.floor(f8 + this.i - .725 * this.aaV), Math.floor(
				fA + .275 * this.aaV), Math.floor(.45 * this.aaV)), vR.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aac = function() {
		var aB, dt;
		for (vR.lineWidth = this.a8W, bA.qn.textBaseline(vR, 1), bA.qn.textAlign(vR, 1), vR.strokeStyle = bB.nu, vR.font = bA.qn.se(1, this.aaX), dt = this.i / this.aBi.length, vR.fillStyle = bB.oG, vR.fillRect(this.e9 * dt, this.j - this.tu, dt,
				this.tu), vR.fillStyle = bB.nu, vR.fillRect(0, this.j - this.tu - .5 * this.a8W, this.i, this.a8W), aB = 1; aB <= 3; aB++) vR.fillRect(aB * dt, this.j - this.tu, this.a8W, this.tu);
		for (aB = this.aBi.length - 1; 0 <= aB; aB--) vR.fillText(bA.z0.a3r(this.aBi[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.tu)
	}, this.aRQ = function() {
		vR.fillStyle = bB.oh, vR.fillRect(0, 0, this.i, this.aaV), vR.fillStyle = bB.nu, vR.fillRect(0, this.aaV - .5 * this.a8W, this.i, this.a8W), vR.font = bA.qn.se(1, .39 * this.aaV), vR.fillText(bA.z0.a3r(L(510), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aaV))
	}, this.aad = function(g, f8, fA) {
		var lG = bd.max[this.e9],
			a3C = (vR.setTransform(1, 0, 0, 1, f8 + 2 * this.tB + this.aaR, fA + this.a9B + this.aaV), vR.lineWidth = 2, this.aaT / Math.sqrt(lG));
		vR.beginPath(), vR.moveTo(this.aaS, this.aaT - a3C * Math.sqrt(g[bd.aSo - 1]));
		for (var aB = bd.aSo - 2; 0 <= aB; aB--) vR.lineTo(aB * this.aaS / (bd.aSo - 1), this.aaT - a3C * Math.sqrt(g[aB]));
		vR.stroke();
		f8 = this.a6f(g, a3C, .5);
		f8 < .95 && vR.fillText(bA.rm.a03(lG), -this.tB, 0), .05 < Math.abs(f8 - .5) && vR.fillText(bA.rm.a03(Math.floor(lG / 4)), -this.tB, Math.floor(this.aaT / 2)), .05 < f8 && vR.fillText("0", -this.tB, this.aaT)
	}, this.aae = function(f8, fA) {
		vR.setTransform(1, 0, 0, 1, f8 + 2 * this.tB + this.aaR, fA + this.a9B + this.aaV), vR.lineWidth = 2;
		var a3C = this.aaT / Math.max(bd.max[this.e9], 1);
		vR.beginPath(), vR.moveTo(this.aaS, this.aaT - a3C * bd.aC7[bd.aSo - 1]);
		for (var aB = bd.aSo - 2; 0 <= aB; aB--) vR.lineTo(aB * this.aaS / (bd.aSo - 1), this.aaT - a3C * bd.aC7[aB]);
		vR.stroke();
		f8 = this.a6f(bd.aC7, a3C, 1), fA = bd.max[this.e9] / 100;
		f8 < .95 && vR.fillText(bA.rm.a4r(fA, 2), -this.tB, 0), .05 < Math.abs(f8 - .5) && vR.fillText(bA.rm.a4r(fA / 2, 2), -this.tB, Math.floor(this.aaT / 2)), .05 < f8 && vR.fillText(bA.rm.a4r(0, 2), -this.tB, this.aaT)
	}, this.aaf = function(f8, fA) {
		vR.setTransform(1, 0, 0, 1, f8 + .34 * this.i, fA + 2 * aaU + this.aaV), bA.qn.textAlign(vR, 2);
		for (var aBQ = this.j - 4 * aaU - this.tu - this.aaV, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vR.fillText(bA.z0.a3r(bd.aaM[g[aB]], 0, .31 * this.i), 0, aB * aBQ / 9);
		var fS = bd.mq;
		for (vR.setTransform(1, 0, 0, 1, f8 + .39 * this.i, fA + 2 * aaU + this.aaV), bA.qn.textAlign(vR, 0), vR.fillText(bA.rm.a4r(100 * fS[0] / (1024 * Math.max(fS[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vR.fillText(fS[g[aB]].toString(), 0,
			aB * aBQ / 9);
		vR.fillText(bA.rm.a4r(100 * (1 - ag.go[aD.el] / fS[7]), 0), 0, aBQ)
	}, this.aag = function(f8, fA) {
		vR.setTransform(1, 0, 0, 1, f8 + .79 * this.i, fA + 2 * aaU + this.aaV), bA.qn.textAlign(vR, 2);
		var aB, aBQ = this.j - 4 * aaU - this.tu - this.aaV;
		for (vR.fillStyle = bB.oB, aB = 2; 0 <= aB; aB--) vR.fillText(bA.z0.a3r(bd.aaM[aB + 8], 0, .31 * this.i), 0, aB * aBQ / 9);
		vR.fillText(bA.z0.a3r(bd.aaM[18], 0, .31 * this.i), 0, 3 * aBQ / 9), vR.fillStyle = bB.oA, vR.fillText(bA.z0.a3r(bd.aaM[11], 0, .31 * this.i), 0, 4 * aBQ / 9), vR.fillStyle = bB.oT, vR.fillText(bA.z0.a3r(bd.aaM[13], 0, .31 * this.i), 0,
				5 * aBQ / 9), vR.fillText(bA.z0.a3r(bd.aaM[15], 0, .31 * this.i), 0, 6 * aBQ / 9), vR.fillText(bA.z0.a3r(bd.aaM[16], 0, .31 * this.i), 0, 7 * aBQ / 9), vR.fillText(bA.z0.a3r(bd.aaM[12], 0, .31 * this.i), 0, 8 * aBQ / 9), vR
			.fillStyle = bB.oS, vR.fillText(bA.z0.a3r(bd.aaM[17], 0, .31 * this.i), 0, aBQ), vR.fillStyle = bB.oB;
		var fS = bd.mq,
			aFW = fS[8] + fS[9] + fS[10] + fS[18],
			aFW = bA.rm.a03(aFW),
			aQE = vR.measureText(aFW).width,
			f8 = (vR.setTransform(1, 0, 0, 1, f8 + .83 * this.i + aQE, fA + 2 * aaU + this.aaV), vR.fillText(bA.rm.a03(fS[8]), 0, 0), vR.fillText(bA.rm.a03(fS[9]), 0, aBQ / 9), vR.fillText(bA.rm.a03(fS[10]), 0, 2 * aBQ / 9), vR.fillText(bA.rm
				.a03(fS[18]), 0, 3 * aBQ / 9), vR.fillStyle = bB.oA, vR.fillText(aFW, 0, 4 * aBQ / 9), vR.fillStyle = bB.oT, vR.fillText(bA.rm.a03(fS[13]), 0, 5 * aBQ / 9), vR.fillText(bA.rm.a03(fS[15]), 0, 6 * aBQ / 9), vR.fillText(bA.rm
				.a03(fS[16]), 0, 7 * aBQ / 9), vR.fillText(bA.rm.a03(fS[12]), 0, 8 * aBQ / 9), fS[12] + fS[13] + fS[15] + fS[16]);
		vR.fillStyle = bB.oS, vR.fillText(bA.rm.a03(f8), 0, aBQ), vR.fillStyle = bB.nu
	}, this.a6f = function(g, a3C, aA6) {
		var aB, e, fj;
		return this.aaY < 0 || 1 < this.aaY ? .25 : (aB = this.aaY * (bd.aSo - 1), fj = g[e = Math.floor(aB)], fj += (aB - e) * (g[e < bd.aSo - 1 ? e + 1 : e] - fj), vR.strokeStyle = bB.nx, .04 < this.aaY && this.aai(0, this.aaT - a3C * Math.pow(
				fj, aA6), aB * this.aaS / (bd.aSo - 1), this.aaT - a3C * Math.pow(fj, aA6)), .04 < fj / bd.max[this.e9] && this.aai(aB * this.aaS / (bd.aSo - 1), this.aaT, aB * this.aaS / (bd.aSo - 1), this.aaT - a3C * Math.pow(fj, aA6)), vR
			.fillStyle = bB.oV, vR.beginPath(), vR.arc(aB * this.aaS / (bd.aSo - 1), this.aaT - a3C * Math.pow(fj, aA6), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vR.fill(), g = this.aaY * bf.aC9, g = 0 === ag.mu[aD.el] ? Math.floor(g * bd
				.aaL) : Math.floor(g * bf.kI()), vR.fillStyle = bB.nu, vR.fillText(1 === aA6 ? bA.rm.a4r(fj / 100, 2) : bA.rm.a03(Math.floor(fj)), -this.tB, this.aaT - a3C * Math.pow(fj, aA6)), bA.qn.textAlign(vR, 1), vR.fillText(aW.aBw(g),
				aB * this.aaS / (bd.aSo - 1), this.aaT + this.aaW - (a0.a1.i9() ? 2 : 0) - this.a8W), bA.qn.textAlign(vR, 2), a3C * Math.pow(fj, aA6) / this.aaT)
	}, this.aai = function(nK, nL, nX, nY) {
		vR.beginPath(), vR.moveTo(nK, nL), vR.lineTo(nX, nY), vR.stroke()
	}
}

function by() {
	this.aaj = "https://", this.aak = this.aaj + "territorial.io/", this.aSp = this.aak + "changelog", this.aSu = this.aak + "terms", this.aal = this.aak + "cookie_policy", this.aS5 = this.aak + "privacy", this.aSt = this.aak + "tutorial", this.aSs =
		this.aak + "players", this.aSq = this.aak + "clans", this.aSr = this.aak + "clan-results", this.aPN = "https://patreon.com/c/territorial", this.aDT = this.aaj + "play.google.com/store/apps/details?id=territorial.io", this.a1t = this.aaj +
		"apps.apple.com/app/id1581110913", this.aam = this.aaj + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aDU = this.aaj + "discord.gg/pthqvpTXmh", this.aDV = this.aaj + "www.instagram.com/davidtschacher/", this.zb =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aan, this.yx = new aao, this.dd = function() {
		this.y.dd()
	}, this.eU = function() {
		0 !== this.y.aUv && this.y.aUv--
	}
}

function aao() {
	this.vQ = function() {
		if (0 !== bP.y.aUv && (vR.globalAlpha = Math.min(bP.y.aUv / 580, 1), vR.drawImage(bP.y.aar, 1 + aS.yv(), 1 + aS.yw()), vR.globalAlpha = 1, aD.hO)) {
			for (var nK = ib / iB, nL = ic / iB, nX = (h.i + ib) / iB, nY = (h.j + ic) / iB, gZ = bP.y.aas * iB, aat = bP.y.aat, aB = aD.kL - 1; 0 <= aB; aB--) ! function(aB, gZ, nK, nL, nX, nY, aat) {
				var highlight;
				0 === ag.mu[aB] || 0 === ag.go[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gZ *= 2), nX = h.i * ((ag.it[aB] + ag.iu[aB] + 1) / 2 - nK) / (nX - nK) - .5 * gZ, nK = h.j * ((ag.iv[
					aB] + ag.iw[aB] + 1) / 2 - nL) / (nY - nL) - .5 * gZ, nX > h.i) || nK > h.j || nX < -gZ || nK < -gZ || (highlight ? vR.setTransform(2 * iB, 0, 0, 2 * iB, nX, nK) : vR.setTransform(iB, 0, 0, iB, nX, nK), vR.drawImage(
					aat[aD.hu ? bg.ez[aB] : 1], 0, 0))
			}(aB, gZ, nK, nL, nX, nY, aat);
			vR.setTransform(iB, 0, 0, iB, 0, 0)
		}
	}
}

function aan() {
	this.aas = 28, this.aUv = 0, this.aar = null;
	var aav = this.aat = null;

	function aay(hw, aaz) {
		var f8, fA, en, iK, a3d = bA.qn.xF(hw, hw),
			i2 = bA.qn.getContext(a3d, !0),
			hz = bA.qn.getImageData(i2, hw, hw),
			xQ = hz.data,
			lG = (hw >> 1) - .5,
			ab0 = .5 + lG;
		for (ab0 *= ab0, fA = 0; fA < hw; fA++)
			for (f8 = 0; f8 < hw; f8++) iK = (iK = f8 - lG) * iK + (iK = fA - lG) * iK, xQ[en = 4 * (fA * hw + f8)] = aaz[0], xQ[1 + en] = aaz[1], xQ[2 + en] = aaz[2], xQ[3 + en] = (ab0 - iK) * aaz[3] / ab0;
		return i2.putImageData(hz, 0, 0), a3d
	}

	function aZy(aB, i2, a3d, hw) {
		var highlight, f8, fA;
		0 !== ag.mu[aB] && 0 !== ag.go[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hw *= 2), f8 = ag.it[aB] + ag.iu[aB] + 1 - hw - 2 >> 1, fA = ag.iv[aB] + ag.iw[aB] + 1 - hw - 2 >> 1, highlight ? i2
			.drawImage(a3d[aD.hu ? 9 === aD.kd && 5 === aE.hj[aB] ? 3 : bg.ez[aB] : aB < aD.kL ? 1 : 0], f8, fA, hw, hw) : i2.drawImage(a3d[aD.hu ? 9 === aD.kd && 5 === aE.hj[aB] ? 3 : bg.ez[aB] : aB < aD.kL ? 1 : 0], f8, fA))
	}
	this.dd = function() {
		var sP;
		this.aUv = 700,
			function(sP) {
				var hw = sP.aas;
				if (sP.aat = [], aav = [], aD.hu) {
					for (var aB = 0; aB <= aD.y2; aB++) sP.aat.push(aay(hw, bg.aYI[bg.ki[aB]])), aav.push(aay(hw >> 1, bg.aYI[bg.ki[aB]]));
					9 === aD.kd && aav.push(aay(hw, bg.aYI[1]))
				} else sP.aat.push(aay(hw, bg.aYI[7])), sP.aat.push(aay(hw, bg.aYI[4])), aav.push(aay(hw >> 1, bg.aYI[7]))
			}(this),
			function(sP, ab1) {
				var aB, aar = sP.aar,
					i2 = bA.qn.getContext(aar, !0),
					f1 = aD.ey,
					hw = sP.aas >> 1;
				i2.imageSmoothingEnabled = !1, i2.setTransform(1, 0, 0, 1, 0, 0), ab1 && i2.clearRect(0, 0, aar.width, aar.height);
				if (9 === aD.kd) {
					hw <<= 1;
					sP = az.km[5];
					for (aB = f1 - sP; aB < f1; aB++) aZy(aB, i2, aav, hw);
					f1 -= sP, hw >>= 1
				}
				for (aB = aD.kL; aB < f1; aB++) aZy(aB, i2, aav, hw)
			}(this, null !== (sP = this).aar && sP.aar.width === bS.fC - 2 && sP.aar.height === bS.fD - 2 || (sP.aar = bA.qn.xF(bS.fC - 2, bS.fD - 2), !1)), aD.hO || this.a59()
	}, this.aYH = aay, this.a59 = function() {
		for (var f1 = aD.kL, hw = this.aas, aat = this.aat, i2 = bA.qn.getContext(this.aar, !0), aB = 0; aB < f1; aB++) aZy(aB, i2, aat, hw)
	}
}

function d9() {
	function ab4() {
		8 === aD.kd && 1 === aD.a0m && bR.a0O.a0l()
	}

	function ab3(player) {
		aD.hO ? (ak.aIR(player), al.aLV(), aD.kf && aD.q9.eU()) : b3.aDn(player)
	}
	this.pb = function(player) {
		aN.a0z(player, player === aD.el ? 21 : 22), ab3(player), ab4()
	}, this.q6 = function(player) {
		1 === aD.a0m && 0 !== ag.mu[player] && 2 !== ag.a49[player] && ab3(player), aD.a0p--, aD.a0o--, aN.a0z(player, 4), bA.gM.hB(2) && aW.mg(!0), ab4()
	}
}

function dJ() {
	this.aVB = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBN = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nu, "rgb(170,170,170)"
	], this.ab5 = [bB.nu, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nu, bB.nl], this.ab6 = [bB.nl, bB.nu, bB.nu, bB.nu, bB.nl, bB.nl, bB.nl, bB.nl, bB.nu];
	var aLf = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aKy = ["rgba(" + aLf[0] + ",", "rgba(" + aLf[1] + ",", "rgba(" + aLf[2] + ",", "rgba(" + aLf[3] + ",", "rgba(" + aLf[4] + ",", "rgba(" + aLf[5] + ",", "rgba(" + aLf[6] + ",", "rgba(" + aLf[7] + ",", "rgba(" + aLf[8] + ",", "rgba(" + aLf[9] +
			","
		], this.aKz = ["rgb(" + aLf[0] + ")", "rgb(" + aLf[1] + ")", "rgb(" + aLf[2] + ")", "rgb(" + aLf[3] + ")", "rgb(" + aLf[4] + ")", "rgb(" + aLf[5] + ")", "rgb(" + aLf[6] + ")", "rgb(" + aLf[7] + ")", "rgb(" + aLf[8] + ")", "rgb(" + aLf[9] +
			")"
		], this.a18 = null, this.aYI = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aXx = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.ki = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.ez = new Uint8Array(aD.ey), this.aBO = new Uint8Array(aD.ey), this.y8 = new Uint16Array(aD.ey), this.y9 = new Uint16Array(this.ki.length + 1), this.yA = new Uint16Array(this.ki.length), this.de =
		function() {
			this.a18 = [L(511), L(512), L(513), L(514), L(515), L(516), L(517), L(518), L(519)]
		}, this.dd = function() {
			if (this.ez.fill(0), this.aBO.fill(0), this.ab7(), aD.hu) {
				if (9 === aD.kd) {
					for (var ez = bg.ez, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) ez[aB] = 1;
					var f1 = aD.ey;
					for (aB = aD.data.teamPlayerCount[7]; aB < f1; aB++) ez[aB] = 2;
					bg.ki[1] = 7, bg.ki[2] = 8
				} else aD.kf ? function() {
					var aXx = bg.aXx,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kL - 1; 0 <= aB; aB--) colorsData[aB] = ay.jc(262144);
					var abI = 0,
						fH = 768,
						aUf = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var f4 = 0, fL = 0; fL < 3; fL++) f4 += Math.abs(aXx[aB][fL] - aUf[fL]);
							f4 < fH && (abI = aB, fH = f4)
						} var abJ = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) abJ[aB] = teamPlayerCount[aB];
					var ki = bg.ki,
						abK = new Uint8Array(9),
						gT = (ki[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) abJ[aB] && (abK[aB] = gT, ki[gT++] = aB);
					var jb = aD.kL,
						ez = bg.ez;
					abJ[abI] ? (abJ[abI]--, ez[0] = abK[abI]) : jb = 0;
					var eZ = 0;
					for (aB = jb; aB < aD.xv; aB++) {
						var hs = ki[eZ];
						if (abJ[hs]) abJ[hs]--, ez[aB] = abK[hs];
						else if (aB--, 9 <= ++eZ) return console.log("error 325")
					}
				}() : this.eU();
				! function() {
					for (var f1 = aD.ey, y8 = bg.y8, y9 = bg.y9, yA = bg.yA, ez = bg.ez, ki = bg.ki, y1 = ki.length, eN = new Array(y1), aB = 0; aB < y1; aB++) eN[aB] = [];
					for (aB = 0; aB < f1; aB++) eN[ki[ez[aB]]].push(aB);
					for (aB = 1; aB <= y1; aB++) y9[aB] = y9[aB - 1] + eN[aB - 1].length;
					for (aB = 0; aB < y1; aB++)
						for (var gT = eN[aB].length, lG = y9[aB], hs = 0; hs < gT; hs++) y8[hs + lG] = eN[aB][hs];
					var kL = aD.kL;
					for (aB = 0; aB < y1; aB++)
						for (gT = eN[aB].length, lG = y9[aB], hs = 0; hs < gT; hs++)
							if (y8[hs + lG] >= kL) {
								yA[aB] = hs;
								break
							}
				}(), ! function() {
					for (var f1 = aD.ey, ez = bg.ez, aBO = bg.aBO, ki = bg.ki, aB = 0; aB < f1; aB++) aBO[aB] = ki[ez[aB]];
					9 === aD.kd && aBO.fill(1, f1 - az.km[5])
				}()
			}
		}, this.ab7 = function() {
			for (var aB = this.ki.length - 1; 0 <= aB; aB--) this.ki[aB] = aB
		}, this.eU = function() {
			var zs = new Uint8Array(aD.kL),
				zt = new Uint8Array(aD.kL),
				abC = new Uint16Array(8),
				abD = new Uint16Array(this.ki.length);
			this.abE(zs, zt, abC, 1), this.aHs(abC), this.abF(abD, zs, zt), this.abG(zs, zt, abD), this.abH()
		}, this.abE = function(zs, zt, abJ, abL) {
			for (var fL, e, abM, f1 = this.ki.length - abL, g = new Uint16Array(f1), aXx = this.aXx, colorsData = aD.data.colorsData, aB = aD.kL - 1; 0 <= aB; aB--) {
				for (fL = f1; abL <= fL; fL--) g[fL - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aXx[fL][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aXx[fL][1]) + Math.abs(4 * (63 & colorsData[aB]) - aXx[fL][2]);
				for (abM = 768, fL = f1 - 1; 0 <= fL; fL--) g[e = (fL + aB) % f1] < abM && (abM = g[e], zs[aB] = e);
				for (abJ[zs[aB]] += 4, abM = 768, fL = f1 - 1; 0 <= fL; fL--) g[e = (fL + aB) % f1] < abM && e !== zs[aB] && (abM = g[e], zt[aB] = e);
				abJ[zt[aB]]++
			}
		}, this.aHs = function(abJ) {
			for (var fL, lI, f1 = this.ki.length - 1, aB = f1; 0 <= aB; aB--) this.ki[aB] = aB;
			for (aB = f1 - 1; 0 <= aB; aB--) abJ[aB]++;
			for (aB = 1; aB <= f1; aB++) {
				for (lI = 0, fL = 1; fL < f1; fL++) abJ[fL] > abJ[lI] && (lI = fL);
				abJ[lI] = 0, this.ki[aB] = lI + 1
			}
		}, this.abF = function(abD, zs, zt) {
			var fL, a1V, eZ, f4, e, nW, tS, abN = this.ki.length - 1,
				rG = new Uint16Array(abN),
				abO = [],
				abP = 0,
				a1U = [],
				abQ = [];
			loop: for (var aB = 0; aB < aD.kL; aB++)
				if (null !== (a1V = bA.rm.a1W(ag.a1T[aB]))) {
					for (fL = a1U.length - 1; 0 <= fL; fL--)
						if (a1V === a1U[fL]) {
							abQ[fL].push(aB), abP = Math.max(abP, abQ[fL].length);
							continue loop
						} a1U.push(a1V), abO.push(!1), abQ.push([aB]), abP = Math.max(abP, 1)
				}
			for (; 2 < aD.y2 && abP > bL.du(aD.kL, aD.y2);) aD.y2--, aD.kd--;
			for (fL = a1U.length - 1; 0 <= fL; fL--) {
				for (f4 = -1, eZ = a1U.length - 1; 0 <= eZ; eZ--) !abO[eZ] && (-1 === f4 || abQ[eZ].length > abQ[f4].length) && (f4 = eZ);
				for (eZ = abN - 1; 0 <= eZ; eZ--) rG[eZ] = 1;
				for (eZ = abQ[f4].length - 1; 0 <= eZ; eZ--) rG[zs[abQ[f4][eZ]]] += 3, rG[zt[abQ[f4][eZ]]]++;
				for (aB = abN - 1; 0 <= aB; aB--) {
					for (e = f4 % abN, eZ = abN - 1; 0 <= eZ; eZ--) rG[eZ] > rG[e] && (e = eZ);
					for (nW = -1, eZ = aD.y2; 0 < eZ; eZ--)
						if (this.ki[eZ] === e + 1) {
							nW = eZ;
							break
						} if (rG[e] = 0, -1 !== nW) {
						for (tS = 0, eZ = aD.y2; 0 < eZ; eZ--) abD[nW] > abD[eZ] && tS++;
						if (tS !== aD.y2 - 1) {
							for (eZ = abQ[f4].length - 1; 0 <= eZ; eZ--) abD[nW]++, this.ez[abQ[f4][eZ]] = nW;
							break
						}
					}
				}
				abO[f4] = !0
			}
		}, this.abG = function(zs, zt, abD) {
			for (var aB, iJ, f1 = this.ki.length - 1, border = bL.du(aD.kL, aD.y2), abR = (0 < aD.kL % aD.y2 && border++, new Uint8Array(1 + f1)), fL = f1; 1 <= fL; fL--) abR[this.ki[fL]] = fL;
			for (aB = 0; aB < aD.kL; aB++) iJ = abR[zs[aB] + 1], 0 === this.ez[aB] && iJ <= aD.y2 && abD[iJ] < border && (abD[iJ]++, this.ez[aB] = iJ);
			for (aB = 0; aB < aD.kL; aB++) iJ = abR[zt[aB] + 1], 0 === this.ez[aB] && iJ <= aD.y2 && abD[iJ] < border && (abD[iJ]++, this.ez[aB] = iJ);
			for (fL = aD.y2; 1 <= fL; fL--)
				for (aB = aD.kL - 1; 0 <= aB && !(abD[fL] >= border); aB--) 0 === this.ez[aB] && (abD[fL]++, this.ez[aB] = fL)
		}, this.abH = function() {
			for (var aB = aD.kL; aB < aD.ey; aB++) this.ez[aB] = 1 + aB % aD.y2
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
			for (var abS = !1, abT = !1, f4 = 3; 0 <= f4; f4--) {
				var gY = gg[player][aB] + f3[f4];
				if (ac.aIC(gY, player)) continue loop;
				abS = abS || ac.iE(gY), abT = abT || ac.aIB(gY)
			}
			abS ? gh[player].push(gg[player][aB]) : abT ? fQ[player].push(gg[player][aB]) : ac.yU(gg[player][aB], player), gg[player][aB] = gg[player][f1 - 1], gg[player].pop(), f1--
		}
	}, this.ge = function() {
		ag.go[fv] -= fw
	}, this.gf = function(border) {
		for (var f1 = border.length, aB = f1 - 1; 0 <= aB; aB--) ac.yp(fv, border[aB]) || (border[aB] = border[f1 - 1], border.pop(), f1--)
	}, this.gi = function(border) {
		for (var f1 = border.length, aB = f1 - 1; 0 <= aB; aB--) !ac.yp(fv, border[aB]) && ac.ew(border[aB]) && (border[aB] = border[f1 - 1], border.pop(), f1--)
	}, this.gj = function(border) {
		for (var f4, gY, f1 = border.length, f3 = ac.f3, aB = f1 - 1; 0 <= aB; aB--)
			for (f4 = 3; 0 <= f4; f4--)
				if (gY = border[aB] + f3[f4], ac.aIC(gY, fv)) {
					ag.gg[fv].push(border[aB]), border[aB] = border[f1 - 1], border.pop(), f1--;
					break
				}
	}, this.gk = function() {
		for (var f4, gY, f3 = ac.f3, aB = fw - 1; 0 <= aB; aB--)
			for (f4 = 3; 0 <= f4; f4--) gY = fy[aB] + f3[f4], ac.ys(fv, gY) && ac.aID(gY) && (ag.gg[fv].push(gY), ac.gV(gY, fv))
	}, this.gl = function() {
		var f8, fA;
		loop: for (; ag.iv[fv] < ag.iw[fv];) {
			for (f8 = ag.iu[fv]; f8 >= ag.it[fv]; f8--)
				if (ac.yp(fv, 4 * (ag.iv[fv] * bS.fC + f8))) break loop;
			ag.iv[fv]++
		}
		loop: for (; ag.iv[fv] < ag.iw[fv];) {
			for (f8 = ag.iu[fv]; f8 >= ag.it[fv]; f8--)
				if (ac.yp(fv, 4 * (ag.iw[fv] * bS.fC + f8))) break loop;
			ag.iw[fv]--
		}
		loop: for (; ag.it[fv] < ag.iu[fv];) {
			for (fA = ag.iw[fv]; fA >= ag.iv[fv]; fA--)
				if (ac.yp(fv, 4 * (fA * bS.fC + ag.it[fv]))) break loop;
			ag.it[fv]++
		}
		loop: for (; ag.it[fv] < ag.iu[fv];) {
			for (fA = ag.iw[fv]; fA >= ag.iv[fv]; fA--)
				if (ac.yp(fv, 4 * (fA * bS.fC + ag.iu[fv]))) break loop;
			ag.iu[fv]--
		}
	}, this.eu = function(player, jU) {
		return 0 === bg.ez[player] || bg.ez[player] !== bg.ez[jU]
	}, this.hW = function(player) {
		for (var aB, gZ, f1 = ag.gg[player].length, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < f1; aB++)
				if (ac.es(ag.gg[player][aB] + gZ)) return !0;
		return !1
	}, this.aIN = function(player) {
		for (var aB, gZ, f1 = ag.gg[player].length, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < f1; aB++)
				if (ac.jW(ag.gg[player][aB]) && ac.es(ag.gg[player][aB] + gZ)) return !0;
		return !1
	}, this.hZ = function(a4F, a4G) {
		for (var aB, dt, gZ, gY, aZ1 = ag.gg[a4F].length, aZ2 = ag.gg[a4G].length, f3 = (aZ2 < aZ1 && (dt = a4F, a4F = a4G, a4G = dt, dt = aZ1, aZ1 = aZ2, 0), ac.f3), f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < aZ1; aB++)
				if (gY = ag.gg[a4F][aB] + gZ, ac.ga(gY) && ac.et(gY) === a4G) return !0;
		return !1
	}, this.aIO = function(a4F, a4G) {
		for (var aB, gZ, gY, aZ1 = ag.gg[a4F].length, f3 = ac.f3, f4 = 3; 0 <= f4; f4--)
			for (gZ = f3[f4], aB = 0; aB < aZ1; aB++)
				if (ac.jW(ag.gg[a4F][aB]) && (gY = ag.gg[a4F][aB] + gZ, ac.ga(gY)) && ac.et(gY) === a4G) return !0;
		return !1
	}
}

function dV() {
	this.qI = new abU
}

function abU() {
	this.hc = function(player) {
		bA.gM.a4A(player) && aN.a1A(80, L(520), 637, 0, bB.ok, bB.nr, -1, !1)
	}, this.hf = function(player) {
		bA.gM.a4A(player) && aN.a1A(80, L(521), 637, 0, bB.ok, bB.nr, -1, !1)
	}
}

function abV() {
	this.abW = 0, this.eU = function() {
		aO.eU(), aZ.eU(), h.eU(), b0.y.eU(), ax.aHO(), bU.eJ.eU(), bf.dl && (bf.dl = !1, aa.vQ())
	}
}

function abX() {
	this.eQ = bf.eQ, this.e9 = 0, this.abW = 0, this.aHM = 0, this.abY = null, this.abZ = 7, this.aba = 0, this.dd = function() {
		this.aHM = 0, this.abY = [], this.e9 = 0, this.abW = 0
	}, this.aU7 = function(aC) {
		if (aD.hO) this.aCA(aC);
		else if (this.abY.push(aC), 2 === aD.a0m) {
			for (var aB = 0; aB < this.abY.length; aB++) b8.pE.eU(this.abY[aB]);
			this.abY = []
		}
	}, this.aCA = function(aC) {
		2 !== aD.a0m && (b8.pE.eU(aC), b9.eU(), aW.aCA(this.aHM), this.aHM === aD.a5F ? (aD.q9.eU(), this.aHM = 0, this.e9 = 0, this.abW = 0, this.eQ = bf.eQ) : (this.aHM++, af.a58(), af.mg(!0), bb.aCk()))
	}, this.eU = function() {
		h.eU(), aD.hO ? (bf.dl = aW.aCA(-1) || bf.dl, mi()) : (0 !== this.e9 || bf.eQ >= this.eQ && (this.eQ += bf.aC9 * Math.floor(1 + (bf.eQ - this.eQ) / bf.aC9), 2 === aD.a0m ? mX() : this.abb(), this.e9++, 27 < bf.eQ - this.aba)) && this
		.abc(), md(), bf.dl && (bf.dl = !1, yt()), this.aba = bf.eQ
	}, this.abc = function() {
		bf.dl = !0, mf(), this.e9 = 0
	}, this.abb = function() {
		var wG, aB;
		if (this.abW !== 7 * this.aHM) mZ(), bb.aCk();
		else {
			wG = !1;
			loop: for (; this.abd() && (wG = !0, mZ(), 2 !== aD.a0m) && 0 < this.abY.length;)
				for (aB = this.abZ - 2; 0 <= aB; aB--)
					if (mZ(), 2 === aD.a0m) break loop;
			wG ? bb.aCk() : (mX(), bb.a5B())
		}
	}, this.abd = function() {
		return 0 < this.abY.length && (this.aHM++, b8.pE.eU(this.abY[0]), this.abY.shift(), !0)
	}
}

function abe() {
	var abf, abg, abh, aHM, abi, e9 = 0,
		eQ = bf.eQ;

	function abl() {
		! function() {
			if (!aD.hO) return;
			if (aD.kf) return;
			if (2 !== aD.a0m)
				if (abi % 7 != 0) abi++;
				else if (aHM === aD.a5F) {
				if (!abo()) return;
				aW.aCA(aHM), aD.q9.eU()
			} else {
				if (!abo()) return;
				abi++, aHM++, af.a58(), af.mg(!0)
			}
			return 1
		}() && abo() && mZ()
	}

	function abm() {
		e9 = 0, (aD.hO ? (bf.dl = aW.aCA(aHM - (abi % 7 == 0 ? 0 : 1) + abi % 7 / 7) || bf.dl, mi) : aM.hA || !bC.a5c ? mi : (bf.dl = !0, mf))()
	}

	function abo() {
		var aB, f1, abp = b9.q7.aVZ,
			fj = b9.q7.aVa,
			fl = b9.q7.aVb,
			fn = b9.q7.aVc,
			abq = b9.q7.aVd,
			abr = b9.q7.aVe;
		if (!(abf >= abr.length)) {
			if (abr = abr[abf], abq[abf]) {
				for (f1 = abg + abr, aB = abg; aB < f1; aB++) b8.pE.pw(abp[aB], fj[aB], fl[aB], fn[aB]);
				abg += abr, abf++
			} else ++abh >= abr && (abf++, abh = 0);
			return 1
		}
		aN.a26("Replay file smaller than expected."), bC.a2v(!1), aD.a0m = 2
	}
	this.abW = 0, this.dd = function() {
		abi = aHM = abh = abg = abf = 0
	}, this.eU = function() {
		var aZS;
		h.eU(), bC.a9N() < 1.7 ? 0 === e9 ? bf.eQ >= eQ && (aZS = bf.aC9 / bC.a9N(), eQ += aZS * Math.floor(1 + (bf.eQ - eQ) / aZS), 2 === aD.a0m || aM.hA || !bC.a5c ? mX() : (abl(), bb.aCk()), e9++) : abm() : function() {
			var aZS;
			if (bf.eQ >= eQ)
				if (2 === aD.a0m || aM.hA || !bC.a5c) mX(), eQ = bf.eQ;
				else {
					for (aZS = bf.aC9 / bC.a9N(), 16 < (bf.eQ - eQ) / aZS && (eQ = bf.eQ - 16 * aZS); bf.eQ >= eQ && 2 !== aD.a0m;) eQ += aZS, abl();
					bb.aCk()
				} abm()
		}(), md(), bf.dl && (bf.dl = !1, yt())
	}, this.a0x = function() {
		b9.q7.aVe.length - abf <= 2 || aN.a26("Replay file larger than expected.")
	}
}

function abt() {
	var e9 = 0,
		eQ = bf.eQ;
	this.abW = 0, this.eU = function() {
		h.eU(), aD.hO ? mi() : 0 === e9 ? bf.eQ >= eQ && (eQ += bf.aC9 * Math.floor(1 + (bf.eQ - eQ) / bf.aC9), 2 === aD.a0m || aM.hA ? mX() : (mZ(), bb.aCk()), e9++) : ((aM.hA ? mi : (bf.dl = !0, mf))(), e9 = 0), md(), bf.dl && (bf.dl = !1,
		yt())
	}
}

function dR() {
	this.a0w = null, this.dl = !1, this.eQ = 0, this.aC9 = 56;
	var abu = 0;

	function abv() {
		bf.eQ = abu = performance.now(), bf.a0w.eU(), window.requestAnimationFrame(abv)
	}
	this.dd = function() {
		this.a5Z(), window.requestAnimationFrame(abv), this.eQ = performance.now()
	}, this.a5R = function() {
		aD.h9 ? (this.a0w = new abe, this.a0w.dd()) : aD.kf ? this.a0w = new abt : (this.a0w = new abX, this.a0w.dd())
	}, this.a5Z = function() {
		this.a0w = new abV, this.dl = !0
	}, this.eU = function() {
		this.a0w.abW++
	}, this.kI = function() {
		return this.a0w.abW
	}, this.aTn = function() {
		var dt = performance.now();
		dt < abu + 1e3 || (this.eQ = dt, this.a0w.eU())
	}
}

function ct() {
	var aGm = 0,
		abw = !0;

	function abx(id) {
		id = [L(522), L(523), L(524), L(525)][id];
		aN.a7P(id)
	}
	this.eU = function() {
		var dt, a7l;
		bf.eQ < aGm || (aGm = bf.eQ + 3e3, aD.h9) || aD.kf || bA.gM.hC(aD.el) || (dt = new Date, a7l = dt.getUTCSeconds(), abw ? a7l < 43 && (abw = !1) : a7l < 43 || (aGm += 52e3, abw = !0, (a7l = (dt.getUTCMinutes() + 1) % 60) % 10 == 0 ? aD
			.kd < 7 && abx(0) : a7l % 10 == 5 ? 7 !== aD.kd && 10 !== aD.kd || abx(1) : a7l % 10 == 7 ? 8 === aD.kd && abx(2) : a7l % 10 == 2 && 9 === aD.kd && abx(3)))
	}
}

function cn() {
	var nK, nL, nX, nY, aby = 0,
		abz = 0;

	function ac1() {
		return Math.pow(Math.pow(nX - nK, 2) + Math.pow(nY - nL, 2), .5)
	}

	function ac0(e) {
		nK = h.k * e.touches[0].clientX, nL = h.k * e.touches[0].clientY, nX = h.k * e.touches[1].clientX, nY = h.k * e.touches[1].clientY
	}
	this.a2N = function(e) {
		return 1 < e.touches.length ? (abz = bf.eQ, aby = 3, ac0(e), aL.s4(), !0) : (aby = 0, !1)
	}, this.a2O = function(e) {
		var aMT, iH, iI;
		return 0 !== aD.a0m && 1 < e.touches.length && (aby = Math.max(aby - 1, 0), aH.nc() && (aMT = ac1(), ac0(e), e = ac1(), iH = Math.floor((nK + nX) / 2), iI = Math.floor((nL + nY) / 2), aS.a9o(iH, iI, Math.max(.125, e) / Math.max(.125,
			aMT)), bf.dl = !0), !0)
	}, this.a2l = function() {
		var f8, fA;
		return !!(aby && (aby = 0, bf.eQ < abz + 500)) && (f8 = (nK + nX) / 2, fA = (nL + nY) / 2, aL.a2f(f8, fA), aL.click(f8, fA, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e9 = 0, this.aC = null, this.dd = function(aC) {
		this.e9 = 0, this.aC = aC, this.size = aC.length
	}, this.uU = function() {
		this.aC = null
	}, this.pv = function(size) {
		for (var fS = 0, aC = this.aC, nc = this.e9 + size - 1, aB = this.e9; aB <= nc; aB++) fS |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nc - aB;
		return this.e9 += size, this.e9 > 8 * this.size && console.error("Unwrapper Overflow"), fS
	}, this.aUF = function(size) {
		var fL = size >> 1;
		return (1 << fL) * this.pv(size - fL) + this.pv(fL)
	}, this.aUG = function(ac2) {
		return this.size === bD.aUE(ac2)
	}, this.aVr = function(xh, ac3, ac4) {
		var gT = this.pv(xh);
		if (!gT) return null;
		for (var xh = Math.max(gT, ac4), g = new(ac3 <= 8 ? Uint8Array : ac3 <= 16 ? Uint16Array : Uint32Array)(xh), aB = 0; aB < gT; aB++) g[aB] = this.pv(ac3);
		ac4 = g[gT - 1];
		return ac4 && g.fill(ac4, gT), g
	}, this.aVs = function(xh, ac5, ac4) {
		var gT = this.pv(xh);
		if (!gT) return null;
		for (var xh = Math.max(gT, ac4), g = new Array(xh), aB = 0; aB < gT; aB++) g[aB] = this.aVp(ac5);
		return g.fill(g[gT - 1], gT), g
	}, this.aVp = function(xh) {
		return bG.wo.ws(this.pv(xh))
	}, this.aVq = function() {
		var qU = bF.t7.t8(bF.t7.t9(this.pv(30))),
			qU = bA.rm.a53(qU, "_", "/");
		qU = bA.rm.a53(qU, "-", "+");
		for (var ac6 = "";
			(qU.length + ac6.length) % 4;) ac6 += "=";
		qU = "data:image/png;base64," + qU + ac6;
		var aIt = new Image;
		aIt.onload = function() {
			b9.aJS.aJT(aIt), aIt.onload = null, aIt = null
		}, aIt.src = qU
	}
}

function dL() {
	this.aWn = 0, this.aWo = 0, this.aWj = 0, this.aWk = 0, this.aWl = 0, this.aWm = 0, this.aCl = [0, 0, 0, 0], this.nb = function() {
		this.aWn = aS.yv(), this.aWo = aS.yw(), this.aWj = -this.aWn, this.aWk = -this.aWo, this.aWl = h.i / iB, this.aWm = h.j / iB, this.aCl[0] = Math.floor(this.aWj), this.aCl[1] = Math.floor(this.aWk), this.aCl[2] = Math.floor(this.aCl[0] +
			this.aWl + 1), this.aCl[3] = Math.floor(this.aCl[1] + this.aWm + 1), bb.aCi = !0
	}
}

function co() {
	var a8S, n7;
	this.dd = function() {
		a8S = 1, n7 = 0
	}, this.eU = function() {
		0 < a8S && (n7 = 0 === n7 ? bf.eQ + 16 : n7, a8S = (a8S -= .001 * (bf.eQ - n7)) < 0 ? 0 : a8S, n7 = bf.eQ, bf.dl = !0)
	}, this.vQ = function() {
		0 < a8S && (vR.fillStyle = "rgba(0,0,0," + a8S + ")", vR.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e9 = 0, this.aC = null, this.dd = function(aC) {
		this.e9 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(ac2) {
		return this.dd(new Uint8Array(this.aUE(ac2))), this.aC
	}, this.uU = function() {
		this.aC = null
	}, this.a8 = function(size, a7q) {
		for (var aC = this.aC, nc = this.e9 + size - 1, aB = this.e9; aB <= nc; aB++) aC[aB >> 3] |= (a7q >> nc - aB & 1) << 7 - (7 & aB);
		this.e9 += size, this.e9 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aUD = function(size, a7q) {
		var fL = size >> 1,
			f4 = 1 << fL;
		this.a8(size - fL, bL.du(a7q, f4)), this.a8(fL, a7q % f4)
	}, this.ac9 = function(size) {
		for (var aC = this.aC, nc = this.e9 + size, aB = this.e9; aB < nc; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aUE = function(ac2) {
		return ac2 + 7 >> 3
	}, this.acA = function(g, jb, nc, acB) {
		for (var aB = jb; aB < nc; aB++) this.a8(acB, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e9 = 0
	}, this.aUc = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(acC, value) {
		for (var g = this.g, nc = this.e9 + acC - 1, acD = 1 + (nc >> 3); g.length < acD;) g.push(0);
		for (var aB = this.e9; aB <= nc; aB++) g[aB >> 3] |= (value >> nc - aB & 1) << 7 - (7 & aB);
		this.e9 += acC
	}, this.dk = function(g, xh, ac3) {
		var acE = bA.qv.a3X(g);
		this.a8(xh, acE);
		for (var aB = 0; aB < acE; aB++) this.a8(ac3, g[aB])
	}, this.aW9 = function(g, xh, ac5) {
		var acE = bA.qv.a3X(g);
		this.a8(xh, acE);
		for (var aB = 0; aB < acE; aB++) this.aW7(g[aB], ac5)
	}, this.aW7 = function(qU, xh) {
		var f1 = qU.length;
		this.a8(xh, f1);
		for (var aB = 0; aB < f1; aB++) this.a8(16, qU.charCodeAt(aB))
	}, this.aW8 = function(a3d) {
		var acF = (a3d = a3d.toDataURL()).split(",");
		if (acF.length < 2) console.log("error 266");
		else {
			a3d = bA.rm.a53(a3d = acF[acF.length - 1], "/", "_"), a3d = bA.rm.a53(a3d, "\\+", "-");
			var a3d = bA.rm.a53(a3d, "=", ""),
				x1 = bG.t7.wy(a3d),
				f1 = x1.length;
			this.a8(30, f1);
			for (var aB = 0; aB < f1; aB++) this.a8(6, x1[aB])
		}
	}
}
a(), self.aiCommand746 = function(fS) {
	0 === fS ? bt() : 1 !== fS || !a0 || 1 !== a0.id || a0.dw < 14 || bJ.fT()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};