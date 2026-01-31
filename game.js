var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, fr, fs, ft, fu, fv, fw, fx, fy, fz, g0, g1, g2, g3, iC, ic, ie,
	a8k, lx, k7, a2M, vS, z1, aCp, a5X, a5Y, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "0.75em", "inherit", "<br>", "rgb(", "center", "auto", "0.8em", "rgba(", "flex", "   ", "hidden", "1em", "span", "Data", "territorial.io", "0.5em",
		" / ", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined", "pre", "break-word",
		"50%", "0.6em", "underline", "scroll", "pointer", "password", "middle", "function", "bold", "Value", "Escape", "Enter", "1.5em", "0.4em", "' target='_blank'>", "text", "string", "rgba(0,0,0,0.8)", "pre-wrap", "number", "nowrap", "mouseleave",
		"inline-block", "game.territorial.io", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "</a>", "1v1", "100,100,100", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload",
		"wheel", "translate(-50%, -50%)", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "placeholder", "mouseover", "mouseout", "long", "logo",
		"loading", "keydown", "italic ", "fixed", "file", "error", "en-US", "dotted", "data:image/png;base64,", "column", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest",
		"False Reporter", "Cheater", "Bot ", "Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room", "255,255,255", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0,0,0", "/wiki/transactions", "/wiki/clans",
		"/privacy", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 180", " / 160", " -> "
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
		.df(), (bX = new dg).dd(), bA.dd(), bV.dd(), b0.dd(), bF.dd(), bG.dd(), bS.dd(), t.dd(), bY = new dh, h.dd(), bf.dd(), bc.dd(), bW.dd(), bZ = new di, ay.dd(), ae.dj(), bU.dd(), ap.dd(), aa.dd(), aT.dd(), ai.dd(), bJ.dd(), ab.dd(), bf
		.dk = !0, setTimeout(function() {
			bS.a7(2, 14071)
		}, 0), t.u(5, 5), bI.dl() || a0.a1.dm(), h.dn(), l.m = 1)
}

function dG() {
	this.dp = 1117, this.n = 2155, this.rVersion = 17, this.dq = 0, this.dd = function() {
		this.dr = 2;
		var ds = bL.dt(this.n, 10) % 100,
			ds = (this.dv = "31 Jan 2026 [" + bL.dt(this.n, 1e3) + "." + (ds < 10 ? "0" : "") + ds + "." + this.n % 10 + "]", window.location.hostname.toLowerCase());
		this.a9 = !0, this.dx = 0 <= ds.indexOf("game.territorial.io"), this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dz = (new Date).getTime() % 1048576
	}, this.m = 0
}

function e0() {
	var e1 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e2 = [100, 60, 30, 15, 6, 1],
		e3 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e4 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		e6 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e7 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.e8 = function(id, e9, eA) {
		e9 = this.eB(e9);
		return +(e3[e9][id] > eA)
	}, this.eB = function(e9) {
		for (var aB = 0; aB < e2.length; aB++)
			if (e2[aB] <= e9) return aB;
		return e2.length
	}, this.eC = function(e9) {
		return e1[this.eB(e9)]
	}, this.eD = function(id, eE) {
		return e4[id].replace(new RegExp("x", "g"), eE)
	}, this.eF = function(id, eE) {
		return e6[id].replace(new RegExp("x", "g"), eE)
	}, this.eG = function(id, eH) {
		return this.e7[5][id]
	}
}

function dE() {
	this.eI = new eJ, this.eK = new eL, this.dd = function() {
		a0.a1.eM()
	}, this.eN = function() {
		return bj.eO.data[160].value
	}
}

function eJ() {
	var eP = 12e3;
	this.show = function(eQ) {
		return !eQ && !bU.eN() && (0 === a0.id ? bU.eK.show() : !(bf.eR < eP) && (eQ = 1 === a0.id ? 3e5 : 36e4, eP = bf.eR + eQ, 2 === l.dr) && a0.a1.eS(Math.floor(eQ)))
	}
}

function eL() {
	var eT = null,
		eP = 2e4,
		eU = 0;
	this.eV = function() {
		bf.eR < eP || (eP = bf.eR + 1e4, 0 !== a0.id) || eT || bU.eN() || (b0.y.eW(0) ? __fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() || b0.eX.eY(5) : eP = bf.eR + 1e3)
	}, this.eZ = function(ea) {
		eT = ea
	}, this.show = function() {
		return !(!eT || bf.eR < eU) && (__fx.settings.hidePropagandaPopup || __fx.customLobby.isActive() ? void 0 : (eU = bf.eR + 6e4, (new eb).show(eT.ec, eT.colors, eT.id), !(eT = null)))
	}
}

function cX() {
	this.ed = new ee
}

function ee() {
	this.ef = function(eg) {
		var ej;
		return bS.eh(bS.ei) && aD.data.passableMountains && (ej = ac.ek(eg), this.el(aD.em, ej) || this.en(aD.em, ej)) && 0 !== (ej = function(f8) {
			for (var f9 = bM.fA(f8), fB = bM.fC(f8), max = Math.max(bS.fD, bS.fE) - 2, fF = max * max, fG = !1, fH = 0, fI = 0; fI < max; fI++) {
				var fJ, eo = function(f9, fB, fI) {
					for (var aB = 0; aB <= fI; aB++)
						for (var fL = -1; fL < 2; fL += 2)
							for (var fM = -1; fM < 2; fM += 2)
								for (var ea = 0; ea < 2; ea++) {
									var eg = function(f9, fB) {
										if (bM.fO(f9, fB)) {
											f9 = bM.fP(f9, fB), fB = bM.es(f9);
											if (ac.ex(fB) && ac.fQ(fB)) return f9
										}
										return 0
									}(f9 + ea * fL * aB + (1 - ea) * fM * fI, fB + ea * fM * fI + (1 - ea) * fL * aB);
									if (eg) return eg
								}
					return 0
				}(f9, fB, fI);
				eo && (fJ = bM.fK(f9, fB, eo)) < fF && (fH = eo, fF = fJ, fG || (fG = !0, max = Math.floor(Math.sqrt(fJ)) + 1))
			}
			return fH
		}(bM.eq(eg))) && (eg = bM.es(ej), ac.et(eg) || (eg = ac.eu(eg)) !== aD.em && bs.ev(eg, aD.em)) ? ej : 0
	}, this.ew = function(player, eo) {
		eo = bM.es(eo);
		if (ac.ex(eo)) {
			if (ac.et(eo)) bO.ey[0] = aD.ez;
			else if (ac.eu(eo) !== bO.ey[0]) return !1;
			for (var f0 = function(eg) {
					var f4 = ac.f4,
						f0 = [];
					loop: for (var f5 = 3; 0 <= f5; f5--) {
						var f6 = eg + f4[f5];
						if (ac.f7(f6)) {
							for (var id = ac.ek(f6), aB = 0; aB < f0.length; aB++)
								if (id === f0[aB]) continue loop;
							bO.f3[f0.length] = f6, f0.push(id)
						}
					}
					return f0
				}(eo), f2 = f0.length, aB = 0; aB < f2; aB++)
				if (this.el(player, f0[aB]) || this.en(player, f0[aB])) return bO.f3[0] = bO.f3[aB], !0
		}
		return !1
	}, this.el = function(player, ej) {
		for (var fR = ag.fR[player], f2 = fR.length, fS = Math.max(bL.dt(f2, 12), 1), f4 = ac.f4, aB = 0; aB < f2; aB += fS)
			for (var er = fR[aB], f5 = 3; 0 <= f5; f5--) {
				var f6 = er + f4[f5];
				if (ac.f7(f6) && ej === ac.ek(f6)) return !0
			}
		return !1
	}, this.en = function(player, ej) {
		for (var fR = ag.fR[player], f2 = fR.length, f4 = ac.f4, aB = 0; aB < f2; aB++)
			for (var er = fR[aB], f5 = 3; 0 <= f5; f5--) {
				var f6 = er + f4[f5];
				if (ac.f7(f6) && ej === ac.ek(f6)) return !0
			}
		return !1
	}
}

function d7() {
	this.g = new Array(4), this.fV = new Uint16Array(2), this.fW = new Uint16Array(2), this.fX = new Int32Array(2), this.fY = new Uint32Array(2), this.fZ = new Uint32Array(2), this.fa = new Uint8Array(4), this.fb = new Uint8Array(4), this.f3 =
		new Uint32Array(4), this.fc = new Uint32Array(5), this.ey = new Uint32Array(8), this.fd = new Uint32Array(8), this.fe = new Uint16Array(16), this.ff = new Uint16Array(512), this.fg = new Uint16Array(512), this.fh = new Uint16Array(512), this
		.fi = new Uint16Array(0), this.dd = function() {
			var f2 = bS.fD * bS.fE;
			this.fi.length !== f2 && (this.fi = new Uint16Array(f2))
		}, this.fj = function(g, fk) {
			return g[0] = fk, g
		}, this.fl = function(g, fk, fm) {
			return g[0] = fk, g[1] = fm, g
		}, this.fn = function(g, fk, fm, fo) {
			return g[0] = fk, g[1] = fm, g[2] = fo, g
		}, this.fp = function(g, fk, fm, fo, fq) {
			return g[0] = fk, g[1] = fm, g[2] = fo, g[3] = fq, g
		}
}

function g4() {
	fx = 0, fy = 2048, fz = new Uint32Array(4 * fy), g0 = 0, g1 = new Uint32Array(fy), g2 = new Uint8Array(bS.fD * bS.fE)
}

function g5(player) {
	fs = player, g3 = !1, g6(), g7();
	for (var aB = ad.g8(fs) - 1; 0 <= aB; aB--) fr = aB, g9();
	g3 && gA()
}

function gA() {
	bs.gB(), bs.gC()
}

function g9() {
	fw = ad.gD(fs, fr), ft = ad.gE(fs, fr), fu = ad.gF(fs, fr), gG(), (0 !== fx && (gI(), gJ()) ? gK : gH)()
}

function gJ() {
	if (!((fv = bL.dt(ft, fx)) > aD.gL)) {
		if (!fu) return !1;
		var gM = fx * (1 + aD.gL);
		ft += bA.gN.gO(fs, gM - ft), fv = bL.dt(ft, fx)
	}
	return !0
}

function gI() {
	for (var aB = fx - 1; 0 <= aB; aB--) g2[bL.dt(fz[aB], 4)] = 0
}

function gH() {
	1 === ad.g8(fs) && aF.gP(fs);
	var ds = bA.gN.gQ(fs, ft);
	bd.gR(fs, ft - ds, 12), ad.gS(fs, fr)
}

function g6() {
	for (var player = fs, gT = ag.gT, f2 = Math.min(gT[player].length, fy), gU = 0, gV = g1, aB = f2 - 1; 0 <= aB; aB--) gV[gU++] = gT[player][aB];
	g0 = gU
}

function g7() {
	for (var aB = ag.gT[fs].length - 1; 0 <= aB; aB--) ac.ex(ag.gT[fs][aB]) && ac.gW(ag.gT[fs][aB], fs);
	ag.gT[fs] = []
}

function gG() {
	fx = 0, (fw === aD.ez ? gX : gY)()
}

function gY() {
	for (var gZ, ga, aB, f4 = ac.f4, f5 = 3; 0 <= f5; f5--)
		for (aB = g0 - 1; 0 <= aB; aB--) gZ = g1[aB] + f4[f5], ga = bL.dt(gZ, 4), 0 === g2[ga] && ac.gb(gZ) && ac.eu(gZ) === fw && (g2[ga] = 1, fz[fx++] = gZ)
}

function gX() {
	for (var gZ, ga, aB, f4 = ac.f4, f5 = 3; 0 <= f5; f5--)
		for (aB = g0 - 1; 0 <= aB; aB--) gZ = g1[aB] + f4[f5], ga = bL.dt(gZ, 4), 0 === g2[ga] && ac.et(gZ) && (g2[ga] = 1, fz[fx++] = gZ)
}

function gK() {
	gc() ? (gd(), fw !== aD.ez && ge()) : gH()
}

function ge() {
	bs.gf(), bs.gg(ag.gh[fw]), bs.gg(ag.gi[fw]), bS.eh(bS.ei) && bs.gg(ag.fR[fw]), bs.gj(ag.gT[fw]), bs.gk(ag.gi[fw]), bs.gk(ag.fR[fw]), bs.gl(), bs.gm()
}

function gd() {
	g3 = !0, ad.gn(fs, fr, ft), ad.go(fs, fr), ag.gp[fs] += fx, bs.gq(), gr()
}

function gc() {
	return (fw === aD.ez ? gs : gt)()
}

function gt() {
	var gu = fx * aD.gL,
		gv = gw(),
		gx = gy(),
		gv = gu + 2 * gv + gx,
		h0 = fv * fx;
	return gv < h0 ? (ft -= gv, bd.gR(fs, gv, 13), h1(gv - gu, gx), !0) : fu && 0 === gx ? (ft -= h0, h0 += bA.gN.gO(fs, gv - h0 + 1), bd.gR(fs, h0, 13), h1(h0 - gu, 0), !0) : (ft -= h0, bd.gR(fs, h0, 13), h1(h0 - gu, gx), !1)
}

function h1(h0, gx) {
	if (0 < gx) {
		if (h0 <= gx) return bd.gR(fw, h0, 13), void ad.h2(fw, fs, gx - h0);
		ad.h2(fw, fs, 0), h0 -= gx
	}
	h0 = bL.dt(h0, 2), h0 = Math.min(ag.h3[fw], h0), bd.gR(fw, h0, 13), ag.h3[fw] -= h0
}

function gy() {
	return ad.h4(fw, fs)
}

function gw() {
	return bL.dt(fx * ag.h3[fw], 1 + bL.dt(10 * ag.gp[fw], 16))
}

function gs() {
	var h5 = fx * aD.gL;
	return ft -= h5, bd.gR(fs, h5, 13), !0
}

function gr() {
	for (var aB = fx - 1; 0 <= aB; aB--) ag.gT[fs].push(fz[aB]), ag.gh[fs].push(fz[aB]), ac.gW(fz[aB], fs)
}

function dC() {
	var h6 = 0,
		h7 = 0;
	this.h8 = function(f9, fB) {
		h6 = f9, h7 = fB
	}, this.h9 = function(code) {
		var hG, hI, eo;
		aD.hA || aM.hB || (bA.gN.hC(0) || bA.gN.hC(1)) && bA.gN.hD(aD.em) && (aR.hE(h6, h7) ? aR.hF = !1 : aP.hE(h6, h7) || (hG = bM.hH(h6), hI = bM.hJ(h7), eo = bM.fP(hG, hI), bM.hK(hG, hI) && (0 === code ? function(eo) {
			var hO, eg, er;
			aD.hP ? -1 !== (hO = br.hQ(eo)) && b8.hR.hS(eo) : (eg = bM.es(eo), ac.f7(eg) ? (hO = am.ed.ef(eg)) && (er = bM.es(hO), er = ac.et(er) ? aD.ez : ac.eu(er), b8.hR.hU(aR.hV(), hO, er)) : (hO = br.hW(eo)) < 0 || (eg = bM
				.es(hO), ac.et(eg) ? bs.hX(aD.em) ? b8.hR.hY(aR.hV(), aD.ez) : ad.g8(aD.em) && b1.hZ(aD.ez, aR.hV()) : (er = ac.eu(eg), bs.ev(er, aD.em) && (bs.ha(aD.em, er) ? b8.hR.hY(aR.hV(), er) : ad.g8(aD.em) && b1.hZ(
					er, aR.hV())))))
		}(eo) : 1 === code ? function(eo) {
			bN.hb.hc(aD.em, eo) && b8.hR.hd(aR.hV(), bO.fd[7])
		}(eo) : 2 === code && function(eo) {
			bN.he.hf(aD.em, eo) && b8.hR.hg(aR.hV())
		}(eo))))
	}, this.hh = function() {
		if (!aD.hA && !aM.hB && bA.gN.hC(1)) {
			var gZ = aD.em;
			if (bA.gN.hD(gZ)) {
				var f2 = ad.g8(gZ);
				if (f2 < 1) ! function() {
					var gZ = aD.em;
					if (bs.hX(gZ)) b8.hR.hY(aR.hV(), aD.ez);
					else
						for (var f4 = ac.f4, gh = ag.gh, f2 = gh[gZ].length, hr = Math.floor(Math.random() * f2), aB = 0; aB < f2; aB++)
							for (var hs = 3; 0 <= hs; hs--) {
								var ht = gh[gZ][(aB + hr) % f2] + f4[hs];
								if (ac.gb(ht)) {
									ht = ac.eu(ht);
									if (ht !== gZ && (!aD.hv || bs.ev(gZ, ht))) return b8.hR.hY(aR.hV(), ht)
								}
							}
				}();
				else {
					for (var hj = 0, hk = ad.gE(gZ, 0), aB = 1; aB < f2; aB++) {
						var hl = ad.gE(gZ, aB);
						hl < hk && (hk = hl, hj = aB)
					}
					b8.hR.hY(aR.hV(), ad.gD(gZ, hj))
				}
			}
		}
	}, this.hm = function() {
		if (!aD.hA && !aM.hB && bA.gN.hD(aD.em) && bA.gN.hC(1)) return aw.hn ? aw.ho(aD.em) ? void b8.hR.hp(1) : void 0 : void(aw.hq(aD.em) && b8.hR.hm())
	}
}

function hw(hx, size, hy, hz, font) {
	var aB, i2 = .2,
		canvas = document.createElement("canvas"),
		i3 = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hx, canvas.height = hx, i3.font = size + font, i3.textAlign = "center", i3.textBaseline = "middle", i3.fillStyle = "red", aB = 0; aB < hy.length; aB++) i3.fillText(hy[aB], .5 * hx, .5 * hx);
	return -1 < (canvas = function(i0) {
		var aB, e9, f5 = i0.data;
		for (aB = f5.length - 4; 0 <= aB; aB -= 4)
			if (e9 = f5[aB], hz <= e9) return Math.floor(aB / (4 * hx));
		return -1
	}(i3.getImageData(0, 0, hx, hx))) && (i2 = (canvas - .5 * hx + .1 * size) / size), Math.max(i2, 0)
}

function d5() {
	this.i5 = new Int16Array(4), this.i6 = new Int16Array(4), this.i7 = null, this.dd = function() {
		var aB;
		for (this.i5[0] = -bS.fD, this.i5[1] = 1, this.i5[2] = bS.fD, this.i5[3] = -1, this.i7 = new Int16Array([-bS.fD, 1 - bS.fD, 1, bS.fD + 1, bS.fD, bS.fD - 1, -1, -bS.fD - 1]), aB = 0; aB < 4; aB++) this.i6[aB] = 4 * this.i5[aB]
	}, this.i8 = function() {
		return bL.i9(Math.floor(.15 * (1 + .25 * a0.a1.iA()) * h.iB / iC), 4, 128)
	}, this.iD = function(eg, id) {
		for (var iE = this.i6, aB = 0; aB < 4; aB++) {
			var er = eg + iE[aB];
			if (ac.iF(er) && ac.ek(er) === id) return !0
		}
		return !1
	}, this.iG = function(player, eg) {
		return !ac.et(eg) && player === ac.eu(eg)
	}, this.fK = function(hG, hI, eo) {
		return (hG -= this.fA(eo)) * hG + (hI -= this.fC(eo)) * hI
	}, this.iH = function(iI, iJ, iK) {
		iI = this.iM(iI) - this.iN(iK), iJ = this.iP(iJ) - this.iQ(iK);
		return Math.sqrt(iI * iI + iJ * iJ)
	}, this.iR = function(iS, iT) {
		var iL = this.fA(iS) - this.fA(iT),
			iS = this.fC(iS) - this.fC(iT);
		return ~~Math.sqrt(iL * iL + iS * iS + .5)
	}, this.iU = function(iS, iT) {
		var iL = this.fA(iS) - this.fA(iT),
			iS = this.fC(iS) - this.fC(iT);
		return iL * iL + iS * iS
	}, this.iV = function(iW, iX, iY, iZ) {
		return (iW -= iY) * iW + (iX -= iZ) * iX
	}, this.ia = function(gZ, ib) {
		return bL.dt(ib * ag.h3[gZ], 1e3)
	}, this.iM = function(iI) {
		return 16 * (iI + ic) / iC
	}, this.iP = function(iJ) {
		return 16 * (iJ + ie) / iC
	}, this.ig = function(f5) {
		return 16 * f5 / iC
	}, this.hH = function(iI) {
		return Math.floor((iI + ic) / iC)
	}, this.hJ = function(iJ) {
		return Math.floor((iJ + ie) / iC)
	}, this.hK = function(hG, hI) {
		return 1 <= hG && 1 <= hI && hG < bS.fD - 1 && hI < bS.fE - 1
	}, this.fA = function(eo) {
		return eo % bS.fD
	}, this.fC = function(eo) {
		return bL.dt(eo, bS.fD)
	}, this.fP = function(hG, hI) {
		return hI * bS.fD + hG
	}, this.ih = function(hG, hI) {
		return 4 * this.fP(hG, hI)
	}, this.ii = function(eo) {
		return this.fO(this.fA(eo), this.fC(eo))
	}, this.fO = function(hG, hI) {
		return 0 < hG && hG < bS.fD - 1 && 0 < hI && hI < bS.fE - 1
	}, this.es = function(eo) {
		return eo << 2
	}, this.eq = function(eg) {
		return eg >> 2
	}, this.ij = function(eo) {
		return bS.fD * this.fC(eo) * 256 + (this.fA(eo) << 4)
	}, this.ik = function(eo) {
		return this.ij(eo) + 8 + (bS.fD << 7)
	}, this.il = function(iK) {
		return bS.fD * (this.iQ(iK) >> 4) + (this.iN(iK) >> 4)
	}, this.im = function(iK) {
		iK = this.il(iK);
		return (this.fA(iK) >> 5) + bN.io.ip * (this.fC(iK) >> 5)
	}, this.iN = function(iK) {
		return iK % (bS.fD << 4)
	}, this.iQ = function(iK) {
		return bL.dt(iK, bS.fD << 4)
	}, this.iq = function(eo, hs) {
		return eo + this.i5[hs]
	}, this.ir = function(eg, hs) {
		return eg + this.i6[hs]
	}, this.is = function(iS, iT) {
		var iL = this.fA(iT) - this.fA(iS),
			iT = this.fC(iT) - this.fC(iS);
		return Math.abs(iL) >= Math.abs(iT) ? 1 + 2 * (iL < 0) : 2 * (0 < iT)
	}, this.it = function(player) {
		return this.fP(ag.iu[player] + ag.iv[player] >> 1, ag.iw[player] + ag.ix[player] >> 1)
	}, this.iy = function(player) {
		return this.fP(ay.iz(ag.iu[player], ag.iv[player]), ay.iz(ag.iw[player], ag.ix[player]))
	}
}

function cl() {
	this.j0 = new j1, this.j2 = new j3, this.j4 = new j5, this.performance = new j6, this.j7 = new j8, this.j9 = new jA, this.jB = new jC, this.jD = new jE, this.jF = new jG, this.dd = function() {
		this.j0.dd(), this.j4.dd(), this.performance.dd(), this.j7.dd(), this.j9.dd()
	}, this.eV = function() {
		this.performance.eV(), this.j0.eV(), this.j4.jH()
	}
}

function j8() {
	var jI, jK = new Uint16Array(8);

	function jS(size, player) {
		for (var aB = ag.gT[player].length - 1; size <= aB; aB--) ac.jY(ag.gT[player][aB], player)
	}
	this.dd = function() {
		jI = 0
	}, this.jL = function(player, jM) {
		return bO.ey[1] = ag.gT[player].length, bO.ey[0] === aD.ez ? ao.j7.jN(player) : this.jO(player, bO.ey[0]), (0 !== bO.ey[1] || 0 !== ag.gT[player].length) && !(!jM && bO.ey[1] === ag.gT[player].length || (bO.ey[0] === aD.ez ? ag.jP[
			player]++ : ag.jQ[player]++, 0))
	}, this.jR = function(player) {
		jS(bO.ey[1], player), ad.eZ(player, bO.fY[0], bO.ey[0]), aF.jT(player, !1)
	}, this.jU = function(player, jV, f2, hk) {
		var jW = bL.dt(12 * ag.h3[player], 1024);
		hk -= hk >= bL.dt(ag.h3[player], 2) ? jW : 0, jS(f2, player), ad.eZ(player, hk, jV), ag.h3[player] -= hk + jW, aF.jT(player, !1)
	}, this.jO = function(player, jV) {
		for (var hs, f4 = ac.f4, aB = ag.gh[player].length - 1; 0 <= aB; aB--)
			if (ac.jX(ag.gh[player][aB]))
				for (hs = 3; 0 <= hs; hs--)
					if (ac.gb(ag.gh[player][aB] + f4[hs]) && ac.eu(ag.gh[player][aB] + f4[hs]) === jV) {
						ag.gT[player].push(ag.gh[player][aB]);
						break
					}
	}, this.jN = function(player) {
		for (var f4 = ac.f4, aB = ag.gh[player].length - 1; 0 <= aB; aB--)
			if (ac.jX(ag.gh[player][aB]))
				for (var hs = 3; 0 <= hs; hs--)
					if (ac.et(ag.gh[player][aB] + f4[hs])) {
						ag.gT[player].push(ag.gh[player][aB]);
						break
					}
	}, this.jZ = function(player, ja) {
		var aB, fL, hs, hu, f2 = ag.gh[player].length,
			jb = 256 <= f2 ? 12 : 32 <= f2 ? 6 : 1,
			jc = f2 - 1 - ay.jd(jb),
			f4 = ac.f4;
		jI = 0;
		loop: for (aB = jc; 0 <= aB; aB -= jb)
			for (hs = 3; 0 <= hs; hs--)
				if ((hu = ac.et(ag.gh[player][aB] + f4[hs]) ? aD.ez : ac.eu(ag.gh[player][aB] + f4[hs])) === aD.ez || ac.gb(ag.gh[player][aB] + f4[hs]) && hu !== player && (ja || bs.ev(player, hu))) {
					for (fL = jI - 1; 0 <= fL; fL--)
						if (jK[fL] === hu) continue loop;
					if (jK[jI] = hu, 8 <= ++jI) return !0
				}
		return 0 < jI
	}, this.je = function(player, ja) {
		var aB, hs, hu, f4 = ac.f4;
		for (jI = 0, aB = ag.gh[player].length - 1; 0 <= aB; aB--)
			for (hs = 3; 0 <= hs; hs--)
				if ((hu = ac.et(ag.gh[player][aB] + f4[hs]) ? aD.ez : ac.eu(ag.gh[player][aB] + f4[hs])) === aD.ez || ac.gb(ag.gh[player][aB] + f4[hs]) && hu !== player && (ja || bs.ev(player, hu))) return jK[jI++] = hu, !0;
		return !1
	}, this.jf = function() {
		for (var fM, aB = jI - 1; 0 <= aB; aB--)
			if (jK[aB] === aD.ez) {
				for (jI--, fM = aB; fM < jI; fM++) jK[fM] = jK[fM + 1];
				return !0
			} return !1
	}, this.jg = function(player) {
		for (var fM, aB = jI - 1; 0 <= aB; aB--)
			if (ad.jh(player, jK[aB]))
				for (jI--, fM = aB; fM < jI; fM++) jK[fM] = jK[fM + 1];
		return 0 === jI
	}, this.ji = function() {
		for (var aB = jI - 1; 0 <= aB; aB--)
			if (bA.gN.jj(jK[aB])) return !0;
		return !1
	}, this.jk = function() {
		for (var aB = jI - 1; 0 <= aB; aB--) bA.gN.jj(jK[aB]) || (jK[aB] = jK[--jI]);
		return 0 < jI
	}, this.jl = function(player) {
		for (var fM, jm = jK[0], jn = ag.h3[jm] + ad.h4(jm, player), aB = jI - 1; 1 <= aB; aB--)(fM = ag.h3[jK[aB]] + ad.h4(jK[aB], player)) < jn && (jm = jK[aB], jn = fM);
		return jm
	}, this.jo = function(player) {
		var j, jp = jK[0];
		if (1 !== jI)
			for (var jq = bL.dt(ag.iv[player] + ag.iu[player], 2), jr = bL.dt(ag.ix[player] + ag.iw[player], 2), fI = js(jq - bL.dt(ag.iv[jp] + ag.iu[jp], 2)) + js(jr - bL.dt(ag.ix[jp] + ag.iw[jp], 2)), aB = jI - 1; 1 <= aB; aB--)(j = js(jq - bL
				.dt(ag.iv[jK[aB]] + ag.iu[jK[aB]], 2)) + js(jr - bL.dt(ag.ix[jK[aB]] + ag.iw[jK[aB]], 2))) < fI && (fI = j, jp = jK[aB]);
		return jp
	}, this.jt = function() {
		for (var ju = jK, jv = ju[0], h3 = ag.h3, jw = h3[jv], aB = jI - 1; 1 <= aB; aB--) {
			var gZ = ju[aB],
				fM = h3[gZ];
			jw < fM && (jv = gZ, jw = fM)
		}
		return jv
	}, this.jx = function() {
		return jK[ay.jd(jI)]
	}
}

function jA() {
	function kD(player, jV, k3) {
		3 <= k3 && 2142 < bf.kJ() && (jV === aD.ez || ag.h3[jV] < bL.dt(ag.h3[player], 20)) && aE.k8(player, 20)
	}

	function kG(player, hk, jV, k3) {
		3 <= k3 && k3 < 6 && bL.dt(ag.h3[player], 8) > ag.h3[jV] && (hk = Math.max(bL.dt(11 * ag.h3[jV], 5), bL.dt(ag.h3[player], 10)));
		k3 = ag.gT[player].length;
		ao.j7.jO(player, jV), ao.j7.jU(player, jV, k3, hk)
	}

	function kC(player, hk) {
		var jV = aD.ez,
			f2 = ag.gT[player].length;
		ao.j7.jN(player), ag.gT[player].length !== f2 && ao.j7.jU(player, jV, f2, hk)
	}
	this.jy = new Uint8Array(aD.ez), this.dd = function() {
		this.jy.fill(0)
	}, this.jz = function(player, hk) {
		var k1, k3, k4, k5;
		ad.k0(player) && (k1 = ae.k2(player), 3 <= (k3 = aE.hk[player]) && k3 < 6 && (hk = Math.max(ag.h3[player] - k1, hk)), k4 = ag.gi[player].length, k5 = ag.gh[player].length, 30 * ag.gp[player] > aD.k6 && k7[player] < 10 && 100 * k5 <= k4 &&
			aE.k8(player, 10), aD.hv ? function(player, hk, k3, k1) {
				var jV;
				if (ao.j7.jZ(player, !1) || ao.j7.je(player, !1)) {
					if (!ao.j7.jg(player))
						if (ao.j7.jf()) kC(player, hk), kD(player, aD.ez, k3);
						else {
							if (ay.kE(aE.kF[k3])) jV = ao.j7.jl(player);
							else {
								if (ao.j7.ji() && ay.kE(aE.kH[k3]) && ao.j7.jk(), 6 === k3) return kG(player, hk, ao.j7.jx(), k3);
								jV = ao.j7.jo(player)
							}
							kG(player, hk, jV, k3), kD(player, jV, k3)
						}
				} else bN.kA.eV(player) || ao.jB.eV(player) || ! function(player, hk, k3, k1) {
					var jy = ao.j9.jy;
					jy[player] = 0;
					var kK = bg.f0[player];
					if (0 !== kK) {
						var kL = ag.h3[player],
							gp = ag.gp;
						if (player < aD.kM && (hk = kL), !(kL < gp[player] || 5 === k3 && kL < k1 || 4 === k3 && kL < bL.dt(k1, 2))) {
							bh.kN(kK);
							for (var f2 = bO.fW[0], ff = bO.ff, aB = ay.jd(f2), fM = 0; fM < f2; fM++) {
								var ea = ff[(fM + aB) % f2];
								if (jy[ea]) return b8.kO.kP(player, ea, hk)
							}
							var kQ = bN.y.kQ;
							for (fM = 0; fM < f2; fM++)
								if (ea = ff[(fM + aB) % f2], kQ[ea] && ea !== player) return b8.kO.kP(player, ea, hk)
						}
					}
				}(player, hk, k3, k1)
			}(player, hk, k3, k1) : (!k5 || k4 && (k4 < k5 && !ay.jd(10) || 100 * k5 <= k4 && ay.jd(3) || !ay.jd(8))) && bN.kA.eV(player) || function(player, hk, k3) {
				ao.j7.jZ(player, !0) || ao.j7.je(player, !0) ? ao.j7.jg(player) || (ao.j7.jf() ? kC(player, hk) : ay.kE(aE.kF[k3]) ? kG(player, hk, ao.j7.jl(player), k3) : 5 === k3 ? kG(player, hk, ao.j7.jt(), k3) : (ao.j7.ji() && ay.kE(aE
					.kH[k3]) && ao.j7.jk(), kG(player, hk, 6 === k3 ? ao.j7.jx() : ao.j7.jo(player), k3))) : ao.jB.eV(player)
			}(player, hk, k3))
	}
}

function c5() {
	var kR = new Uint8Array(aD.ez),
		kS = new Uint16Array(aD.ez),
		kT = new Uint16Array(aD.ez),
		kU = new Uint8Array(aD.ez),
		kV = (this.hk = new Uint8Array(aD.ez), new Uint16Array(aD.ez)),
		kW = new Uint16Array(aD.ez);

	function kl(aB) {
		kR[aB] = 1 + bL.dt(kV[aB] * ay.random(), 10 * ay.value(100))
	}
	this.kX = null, this.kH = [97, 94, 70, 40, 20, 0, 100], this.kY = [500, 450, 400, 300, 80, 50, 100], this.kF = [0, 0, 5, 25, 50, 100, 0], this.kZ = [60, 74, 112, 200, 256, 512, 512], this.ka = [1, 2, 3, 4, 6, 8, 1], this.kb = [500, 450, 400, 300,
		80, 50, 100
	], this.kc = [100, 150, 250, 400, 600, 1e3, 100], this.de = function() {
		this.kX = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dd = function() {
		kR.fill(0), kS.fill(0), kT.fill(0), kU.fill(0), this.hk.fill(0), kV.fill(0), kW.fill(0);
		var kd = aD.kM;
		if (9 === aD.ke) this.kf();
		else if (__fx.customLobby.isActive())
			for (aB = aD.ki - 1; 0 <= aB; aB--) this.hk[aB + kd] = __fx.customLobby.gameInfo.difficulty;
		else if (aD.kg)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.ki - 1; 0 <= aB; aB--) {
					var ht = aB + kd;
					this.hk[ht] = aD.data.botDifficultyData[ht]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.ki - 1; 0 <= aB; aB--) this.hk[ht = aB + kd] = aD.data.botDifficultyTeam[bg.kj[bg.f0[ht]]];
				else if (1 === aD.data.botDifficultyType) {
			var kk = this.kX.length;
			for (aB = aD.ki - 1; 0 <= aB; aB--) this.hk[aB + kd] = aB % kk
		} else
			for (kk = aD.data.botDifficultyValue, aB = aD.ki - 1; 0 <= aB; aB--) this.hk[aB + kd] = kk;
		else
			for (var kh = 8 === aD.ke ? 1 : 0, aB = aD.ki - 1; 0 <= aB; aB--) this.hk[aB + kd] = kh;
		for (aB = 0; aB < kd; aB++) this.hk[aB] = 6;
		var f2 = aD.ez;
		for (aB = 0; aB < f2; aB++) this.hk[aB] <= 2 ? (kU[aB] = 5, kV[aB] = kW[aB] = 1040, 0 === this.hk[aB] ? (kS[aB] = 980, kT[aB] = 980) : 1 === this.hk[aB] ? (kS[aB] = 980, kT[aB] = 920, kV[aB] = kW[aB] = 1100) : (kS[aB] = 825, kT[aB] =
			750)) : this.hk[aB] <= 4 ? (kU[aB] = 1 + ay.jd(20), 3 === this.hk[aB] ? (kS[aB] = kT[aB] = 500, kV[aB] = kW[aB] = 1e3) : (kW[aB] = 250 + ay.jd(1501), kV[aB] = 500 + ay.jd(501), kS[aB] = 300 + ay.jd(201), kT[aB] = 100 + ay.jd(
			201))) : this.hk[aB] <= 5 ? (kV[aB] = 1e3, kW[aB] = 1e3, kU[aB] = 35 + ay.jd(16), kS[aB] = 300 + ay.jd(201), kT[aB] = 50 + ay.jd(101)) : (kV[aB] = kW[aB] = 800, kU[aB] = 5, kS[aB] = 10, kT[aB] = 250), kl(aB)
	}, this.kf = function() {
		for (var eg = az.km, kd = aD.kM, aB = eg - 1; 0 <= aB; aB--) this.hk[aB + kd] = 0;
		for (var fM = 0; fM < 6; fM++) {
			for (aB = eg + az.kn[fM] - 1; eg <= aB; aB--) this.hk[aB + kd] = fM;
			eg += az.kn[fM]
		}
	}, this.k8 = function(gZ, value) {
		kR[gZ] = Math.min(value, kR[gZ])
	}, this.eV = function(gZ) {
		0 == --kR[gZ] && ! function(gZ) {
			(function(gZ) {
				kV[gZ] !== kW[gZ] && (kV[gZ] += kV[gZ] < kW[gZ] ? 3 : -3);
				kS[gZ] !== kT[gZ] && (kS[gZ] += kS[gZ] < kT[gZ] ? kU[gZ] : -kU[gZ], kS[gZ] = (Math.abs(kS[gZ] - kT[gZ]) <= kU[gZ] ? kT : kS)[gZ]);
				kR[gZ] = bL.dt(kV[gZ], 10)
			})(gZ), ao.j9.jz(gZ, bL.dt(kS[gZ] * ag.h3[gZ], 1e3))
		}(gZ)
	}, this.kq = function(gZ, gU) {
		kV[gZ] = kW[gZ] = gU
	}
}

function j5() {
	var kr = new Uint16Array(aD.ez);

	function l6(player, l4) {
		for (var f2 = bO.fW[0], fe = bO.fe, lI = -1, lJ = aD.ez, aB = 0; aB < f2; aB++) {
			var fI, gZ = fe[aB];
			bs.ev(player, gZ) && (fI = bM.iU(l4, bM.it(gZ)), -1 === lI || fI < lI) && (lI = fI, lJ = gZ)
		}
		return lJ
	}

	function l8(l5, l4) {
		if (l5 === aD.ez) return 0;
		var gi = ag.gi[l5],
			lH = gi.length;
		if (0 === lH) return 0;
		for (var f2 = Math.min(lH, 10), lJ = 0, lI = bM.iU(gi[lJ] >> 2, l4), aB = 0; aB < f2; aB++) {
			var ht = ay.jd(lH),
				fI = bM.iU(gi[ht] >> 2, l4);
			fI < lI && (lI = fI, lJ = ht)
		}
		return gi[lJ] >> 2
	}

	function lD(player, l4, jV, lL) {
		var lM;
		(lL === aD.ez || (lM = bM.it(jV), lL = bM.it(lL), bM.iU(l4, lM) < bM.iU(l4, lL))) && (kr[player] = jV)
	}
	this.dd = function() {
		kr.fill(aD.ez)
	}, this.jH = function() {
		if (bf.kJ() % 109 == 9 && !(al.ks < 20) && aD.hv && !(bh.kt() < bL.dt(8 * aD.k6, 10))) {
			var ku = bh.kv();
			if (bg.kj[ku]) {
				bh.kw(ku);
				var f2 = bO.fW[0];
				if (0 !== f2)
					for (var g = bO.ff, kx = al.kx, ks = al.ks, ky = kr, ht = ay.jd(f2), aB = 0; aB < ks; aB++) {
						var hT = kx[aB],
							kz = g[ht];
						bA.gN.l0(hT, kz) && 512 === ky[hT] && (ky[hT] = kz, ht = (ht + 1) % f2)
					}
			}
		}
	}, this.eV = function(player) {
		var l4, l7, l5, l1 = function(player) {
			var jV = kr[player];
			if (jV !== aD.ez) {
				if (bA.gN.lK(jV) && ag.gi[jV]) return jV;
				kr[player] = aD.ez
			}
			return aD.ez
		}(player);
		return function(player) {
			for (var lG = al.kx, lH = al.ks, f2 = Math.min(lH, lH < 17 && 5 === ay.jd(20) ? 1 : 16), ga = ay.jd(lH), fe = bO.fe, gi = ag.gi, gU = 0, aB = 0; aB < f2; aB++) {
				var gZ = lG[(aB + ga) % lH];
				gZ !== player && gi[gZ].length && (fe[gU++] = gZ)
			}
			bO.fW[0] = gU
		}(player), 0 !== bO.fW[0] && (0 < (l7 = l8(l5 = l6(player, l4 = bM.iy(player)), l4)) && bN.l9.lA(player, bN.lB.lC(l7, l4)) ? (lD(player, l4, l5, l1), !0) : 0 < (l5 = function(player, l4) {
			for (var f2 = bO.fW[0], fe = bO.fe, ky = kr, ga = 0, aB = 0; aB < f2; aB++) {
				var gZ = fe[aB],
					gZ = ky[gZ];
				gZ !== aD.ez && bA.gN.lK(gZ) && player !== gZ && bs.ev(player, gZ) && (fe[ga++] = gZ)
			}
			return 0 !== (bO.fW[0] = ga) ? l8(l6(player, l4), l4) : 0
		}(player, l4)) && bN.l9.lA(player, bN.lB.lC(l5, l4)) ? (lD(player, l4, ac.eu(l5 << 2), l1), !0) : !!(0 < (l7 = l8(l1, l4)) && bN.l9.lA(player, bN.lB.lC(l7, l4))))
	}
}

function jC() {
	function lQ(player) {
		for (var fR = ag.fR[player], f2 = fR.length, fS = Math.max(bL.dt(f2, 12), 1), f4 = ac.f4, e9 = ay.jd(f2), aB = 0; aB < f2; aB += fS)
			for (var er = fR[(aB + e9) % f2], f5 = 3; 0 <= f5; f5--) {
				var f6 = er + f4[f5];
				if (ac.f7(f6)) return {
					eg: f6,
					id: ac.ek(f6),
					gZ: player
				}
			}
		return null
	}

	function lV(player, lX) {
		var hk = bA.gN.lY(player, aE.kb[aE.hk[player]]);
		ag.gT[player].push(lX.eg), ad.eZ(player, hk, lX.gZ), aF.jT(player, !0)
	}
	this.eV = function(player) {
		return !!bS.eh(bS.ei) && !!aD.data.passableMountains && 0 !== ag.fR[player].length && function(player) {
			var lP = lQ(player);
			if (null === lP) return !1;
			! function(player) {
				for (var kx = al.kx, ks = al.ks, f2 = Math.min(ks, 12), ga = ay.jd(ks), fe = bO.fe, fR = ag.fR, gU = 0, aB = 0; aB < f2; aB++) {
					var gZ = kx[(aB + ga) % ks];
					gZ !== player && fR[gZ].length && bs.ev(player, gZ) && (fe[gU++] = gZ)
				}
				bO.fW[0] = gU
			}(player);
			var lS = function(ej) {
				for (var f2 = bO.fW[0], fe = bO.fe, aB = 0; aB < f2; aB++) {
					var lX = lQ(fe[aB]);
					if (null !== lX && lX.id === ej) return lX
				}
				return null
			}(lP.id);
			return null !== lS ? (lV(player, lS), !0) : function(player, ej) {
				var f2 = ao.j0.lW;
				if (0 !== f2)
					for (var eg = ao.j0.eO[ay.jd(f2)] << 2, f4 = ac.f4, f5 = ay.jd(4);;) {
						if (eg += f4[f5], ac.f7(eg)) {
							if (ac.ek(eg) === ej) return lV(player, {
								eg: eg,
								gZ: aD.ez
							}), !0;
							break
						}
						if (!ac.et(eg)) break
					}
				return !1
			}(player, lP.id)
		}(player)
	}
}

function j3() {
	this.eV = function(player) {
		return bN.l9.lA(player, function(player) {
			var f2 = ao.j0.lW;
			if (0 === f2) return -1;
			for (var lH = Math.min(f2, ao.performance.la ? f2 : 10), eO = ao.j0.eO, jc = bL.dt(ay.random() * f2, ay.value(100)), e = jc + lH, lb = ay.iz(ag.iu[player], ag.iv[player]), lc = ay.iz(ag.iw[player], ag.ix[player]), lJ = -1,
					fI = bM.iV(0, 0, bS.fD, bS.fE), aB = jc; aB < e; aB++) {
				var ga = aB % f2,
					ld = bM.fK(lb, lc, eO[ga]);
				ld < fI && (fI = ld, lJ = ga)
			}
			return -1 !== lJ ? function(eo, lb, lc) {
				var hG = bM.fA(eo),
					hI = bM.fC(eo),
					iL = lb - hG,
					iO = lc - hI;
				Math.abs(iL) >= Math.abs(iO) ? (iO = 0, iL = Math.sign(iL)) : (iL = 0, iO = Math.sign(iO));
				iL === iO && (iL = 1);
				for (;;) {
					if (hG += iL, hI += iO, !bM.fO(hG, hI)) break;
					if (eo = bM.fP(hG, hI), ac.iF(bM.es(eo))) return eo
				}
				return -1
			}(eO[lJ], lb, lc) : -1
		}(player))
	}
}

function jE() {
	this.eV = function(player) {
		var lf = function(player) {
			for (var li = bN.li.lk(), f2 = li.length, lH = Math.min(f2, 32), ht = ay.jd(f2), aB = 0; aB < lH; aB++) {
				var lf = (aB + ht) % f2,
					lh = li[lf],
					iS = lh[0],
					iT = lh[lh.length - 1];
				if (bN.lB.ll(player, iS) && bN.lB.lm(player, iT)) return lf;
				if (bN.lB.ll(player, iT) && bN.lB.lm(player, iS)) return 0 <= (lf = bN.li.ln(iT, iS)) ? lf : bN.li.lo() ? -1 : bN.li.lp(bN.li.lq(lh))
			}
			return -1
		}(player);
		return -1 !== lf && (lf = bN.li.get(lf), !bN.lB.lj(player, lf)) && (bO.g[0] = lf, !0)
	}
}

function j6() {
	this.la = 0, this.dd = function() {
		this.la = 0
	}, this.eV = function() {
		if (!this.la && bf.kJ() % 30 == 7 && bA.gN.lt(90) && (ao.performance.la = 1)) {
			if (aD.hv) {
				var ku = bh.kv();
				if (bg.kj[ku]) {
					bh.kN(ku);
					var g = bO.ff,
						f2 = bO.fW[0];
					if (0 !== f2)
						for (var lw = Math.min(100 + 10 * (f2 - 1), 400), aB = 0; aB < f2; aB++) aE.kq(g[aB], lw)
				}
			}
			aE.kq(lx[0], 100)
		}
	}
}

function j1() {
	var ly = 0,
		lz = 0,
		m0 = 300,
		m1 = 300,
		m2 = 0;
	this.lW = 0, this.eO = new Uint32Array(512), this.dd = function() {
		lz = ly = 0, this.lW = 0, m2 = 0
	}, this.eV = function() {
		if (function() {
				var f2 = ao.j0.lW;
				if (0 === f2) return 1;
				var eO = ao.j0.eO;
				if (bf.kJ() % 35 == 6) {
					for (var aB = f2 - 1; 0 <= aB; aB--) ac.et(eO[aB] << 2) || (f2--, eO[aB] = eO[f2]);
					ao.j0.lW = f2
				}
				return f2 < eO.length
			}())
			if (m0 <= ly) {
				var m6 = ao.j0.lW;
				if (m6) {
					if (bf.kJ() % 350 != 1) return;
					if (m2 !== m6) return void(m2 = m6);
					if (!bA.gN.jj(lx[0])) return
				} else if (bf.kJ() % 12 != 8) return;
				bA.gN.m7() || ao.j0.dd()
			} else {
				var aB, i = bS.fD,
					m8 = i - 2,
					m6 = m8 * (bS.fE - 2),
					m9 = m0,
					eO = ao.j0.eO,
					lH = ao.j0.lW,
					mA = eO.length,
					ga = Math.min(lz + m9 * ((1 + 19 * ao.performance.la) * m1), m6);
				for (aB = lz; aB < ga; aB += m9) {
					var eg = 4 * (aB % m8 + (bL.dt(aB, m8) + 1) * i + 1);
					if (ac.et(eg) && (eO[lH] = eg >> 2, ++lH === mA)) {
						aB += m9;
						break
					}
				}(lz = aB) >= m6 && (lz = ++ly), ao.j0.lW = lH
			}
	}
}

function jG() {
	this.eV = function() {
		if (bf.kJ() % 51 == 45)
			for (var f2 = bN.y.mC, mD = bN.y.mD, mE = bN.y.mE, mF = bN.y.mF, mG = bN.y.mG, kc = aE.kc, hk = aE.hk, aB = 0; aB < f2; aB++) {
				var lh, player, mK, mH = mD[aB];
				mH % 64 == 6 || (lh = mE[aB], (player = bN.lB.mI(lh[lh.length - 1])) < 0) || !bA.gN.l0(player, mG[aB] >> 3) || ay.jd(1e3) >= kc[hk[player]] || ! function(mO, lh) {
					for (var f2 = lh.length - 1, mP = bN.y.mQ[mO], fI = 0, aB = mP + 1; aB < f2; aB++) fI += bM.iR(lh[aB], lh[aB + 1]);
					return (fI += bM.iR(bM.il(bN.y.mR[mO]), lh[mP + 1])) <= 60
				}(aB, lh) || (mK = mF[aB], 64 <= mH && bN.mL.mM(player, mK)) || function(player, lh, mK, mO, mH) {
					bN.mS.mT(player) && bA.gN.mU(player, aE.kY[aE.hk[player]], 32, 0) && (bN.y.mD[mO] = 64 + mH % 64, bN.mL.eZ(mK, bN.y.mV), bO.g[0] = bN.li.lq(lh), bO.fd[1] = 6, bA.gN.mW(player), bN.y.mX(player))
				}(player, lh, mK, aB, mH)
			}
	}
}

function mY() {
	aN.eV(), af.eV(), aW.mZ(), b0.y.eV()
}

function ma() {
	b1.eV(), aG.eV(), an.eV(), ae.eV(), b4.eV(), aF.eV(), ao.eV(), bN.y.eV(), al.mb(), aV.eV(), az.eV(), bV.eV(), af.eV(), af.mc(), aW.eV(), bP.eV(), aU.eV(), aP.eV(), aN.eV(), b5.eV(), aR.eV(), aw.eV(), bd.eV(), bh.eV(), b0.y.eV(), b0.md.eV(), t
	.eV(), bU.eK.eV(), b9.eV(), bf.eV()
}

function me() {
	aH.eV(), aX.eV(), aQ.eV(), av.eV(), bC.eV(), ax.mf()
}

function mg() {
	aV.mh(!1), aP.mh(), aW.mh(!1), aU.mh(), aR.mh(), aw.mh(), af.mh(!1), bh.mi()
}

function mj() {
	af.mh(!1) && (bf.dk = !0), b0.y.eV()
}

function c6() {
	var mk, ml, mm;

	function mo(mq) {
		for (var aB = mk - 1; 0 <= aB; aB--) 0 === mm[ml[aB]] && ag.gp[ml[aB]] >= mq && g5(ml[aB])
	}

	function mn(player) {
		var ds;
		64 === mm[player] ? mm[player] = 6 : (ds = ag.gp[player], mm[player] = ds < 1e3 ? 3 : ds < 1e4 ? 2 : ds < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		mk = 0, ml = new Uint16Array(aD.ez), mm = new Uint8Array(aD.ez)
	}, this.eV = function() {
		for (var aB = mk - 1; 0 <= aB; aB--) 64 === mm[ml[aB]] ? mn(ml[aB]) : 0 == mm[ml[aB]]-- && (mn(ml[aB]), g5(ml[aB]));
		16e4 <= ag.gp[lx[0]] && (mo(16e4), 3e5 <= ag.gp[lx[0]]) && mo(3e5), bA.gN.lK(aD.em) && (bd.mr[7] = Math.max(ag.gp[aD.em], bd.mr[7]))
	}, this.gP = function(player) {
		for (var fL, aB = mk - 1; 0 <= aB; aB--)
			if (player === ml[aB]) {
				for (mk--, fL = aB; fL < mk; fL++) ml[fL] = ml[fL + 1];
				return
			}
	}, this.jT = function(player, ms) {
		for (var aB = mk - 1; 0 <= aB; aB--)
			if (player === ml[aB]) return;
		ml[mk++] = player, mm[player] = ms ? 2 : 64
	}
}

function c7() {
	var size, kA;
	this.dd = function() {
		size = aD.ki, kA = new Uint16Array(aD.ez);
		for (var kM = aD.kM, aB = aD.ki - 1; 0 <= aB; aB--) kA[aB] = kM + aB
	}, this.eV = function() {
		ao.jF.eV();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.mv[kA[aB]]) {
				fL = void 0;
				var fL = aB;
				size--, kA[fL] = kA[size]
			} else aE.eV(kA[aB])
	}, this.mu = function(gZ) {
		kA[size++] = gZ
	}
}

function c8() {
	var mx, my, mz, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, nA = !1,
		nB = !1;

	function nC(eH) {
		n8 = bf.eR, mz = n0 = my = 0, n1 = (n9 = 33) / eH, mx = 1 / (eH / n9 / 4), n2 = (h.i / 2 + ic) / iC, n3 = (h.j / 2 + ie) / iC, n4 = iC
	}

	function nJ(aB) {
		var nL; - 1 !== aB && (aB = bM.il(bN.y.mR[aB]), nL = bM.fA(aB) - 15, aB = bM.fC(aB) - 15, aH.nF(nL, aB, 29 + nL, 29 + aB))
	}

	function nW(eE) {
		Math.abs(Math.log(n7 / n4)) < .125 && (n7 = eE * n4)
	}

	function nV(nL, nM, nY, nZ) {
		n5 = (nL + nY + 1) / 2, n6 = (nM + nZ + 1) / 2;
		nY = h.i / (nY - nL + 1), nL = h.j / (nZ - nM + 1);
		n7 = .9 * (nY < nL ? nY : nL)
	}
	this.nD = function() {
		return nA
	}, this.nE = function() {
		nC(1), this.nF(0, 0, bS.fD - 1, bS.fE - 1), aD.hP || aD.hA || this.nG(aD.em, 3e3, !0, .3)
	}, this.nH = function(player, nI) {
		nJ(bN.lB.nK(player, nI))
	}, this.nG = function(player, eH, nN, zoom) {
		aD.nO || nA && !nN && nB || (0 === ag.gp[player] ? nJ(bN.lB.nP(player)) : (aS.nQ = !1, nB = nN, nC(eH), function(player) {
			n5 = (ag.iu[player] + ag.iv[player] + 1) / 2, n6 = (ag.iw[player] + ag.ix[player] + 1) / 2
		}(player), function(zoom, player) {
			var iL = ag.iv[player] - ag.iu[player] + 1,
				player = ag.ix[player] - ag.iw[player] + 1,
				fL = h.i / iL,
				fM = h.j / player,
				fL = (n7 = fL < fM ? fL : fM, 0 !== zoom ? zoom : iL < 20 && player < 20 ? .5 : .9);
			n7 *= fL, nW(7 / 8)
		}(zoom, player), nA = !0, ar.nT()))
	}, this.nU = function(eH) {
		aD.hA || aD.nO || (aS.nQ = !1, nB = !1, nC(eH), nV(0, 0, bS.fD - 1, bS.fE - 1), nW(7 / 8), nA = !0, ar.nT())
	}, this.nF = function(nL, nM, nY, nZ) {
		nA = !1, nV(nL, nM, nY, nZ), iC = n7, aS.na(n5, h.i / 2), aS.nb(n6, h.j / 2), ba.nc(), bf.dk = !0
	}, this.nd = function() {
		return !(nA && nB || (nA = !1))
	}, this.eV = function() {
		var ng, nh, f5, nk;
		nA && (my < .5 ? n0 < n1 && (n0 += n1 * mx, mz = my) : 1 - mz < my && (n0 = (n0 -= n1 * mx) < n1 * mx ? n1 * mx : n0), n8 = n8 >= bf.eR ? bf.eR - 1 : n8, f5 = bf.eR - n8, my = 1e3 < f5 || 1 < (my += n0 * f5 / n9) ? 1 : my, n8 = bf.eR,
			f5 = iC, ng = ic, nh = ie, f5 = (iC = n4 * Math.pow(n7 / n4, my)) / f5, nk = 1 - (n4 * Math.pow(n7 / n4, 1 - my) - n4) / (n7 - n4), aS.na(n2 + nk * (n5 - n2), h.i / 2), aS.nb(n3 + nk * (n6 - n3), h.j / 2), af.zoom(f5, (ng * f5 -
				ic) / (1 - f5), (nh * f5 - ie) / (1 - f5)), ba.nc(), 1 <= my && (nA = !1, bb.nl = !0), bf.dk = !0)
	}
}

function c0() {
	var ea = bA.color;
	this.nm = ea.nn(0, 0, 0), this.no = ea.np(0, 0, 0, .7), this.nq = ea.np(0, 0, 0, .5), this.nr = ea.np(0, 0, 0, .85), this.ns = ea.np(0, 0, 0, .75), this.nt = ea.np(0, 0, 0, .6), this.nu = ea.np(0, 0, 0, .35), this.nv = ea.nn(255, 255, 255), this
		.nw = ea.np(255, 255, 255, .3), this.nx = ea.np(255, 255, 255, .6), this.ny = ea.np(255, 255, 255, .4), this.nz = ea.np(255, 255, 255, .25), this.o0 = ea.np(255, 255, 255, .85), this.o1 = ea.np(255, 255, 255, .75), this.o2 = ea.np(255, 255,
			255, .15), this.o3 = ea.np(255, 255, 255, .11), this.o4 = ea.nn(128, 128, 128), this.o5 = ea.np(64, 64, 64, .75), this.o6 = ea.np(88, 88, 88, .83), this.o7 = ea.np(60, 60, 60, .85), this.o8 = ea.np(80, 60, 60, .85), this.o9 = ea.nn(170,
			170, 170), this.oA = ea.nn(200, 235, 245), this.oB = ea.nn(30, 255, 30), this.oC = ea.nn(0, 200, 0), this.oD = ea.nn(128, 255, 128), this.oE = ea.np(10, 65, 10, .75), this.oF = ea.np(0, 255, 0, .6), this.oG = ea.np(0, 255, 0, .5), this
		.oH = ea.np(0, 200, 0, .5), this.oI = ea.np(0, 100, 0, .75), this.oJ = ea.np(0, 60, 0, .8), this.oK = ea.np(0, 255, 0, .3), this.oL = ea.np(0, 180, 0, .6), this.oM = ea.np(0, 120, 0, .85), this.oN = ea.nn(0, 120, 0), this.oO = ea.np(0, 70, 0,
			.85), this.oP = ea.nn(190, 230, 190), this.oQ = ea.nn(0, 255, 0), this.oR = ea.nn(255, 120, 120), this.oS = ea.nn(255, 160, 160), this.oT = ea.nn(255, 70, 70), this.oU = ea.nn(230, 0, 0), this.oV = ea.np(220, 0, 0, .6), this.oW = ea.np(
			255, 100, 100, .8), this.oX = ea.np(100, 0, 0, .85), this.oY = ea.np(60, 0, 0, .85), this.oZ = ea.np(200, 0, 0, .6), this.oa = ea.np(120, 0, 0, .85), this.ob = ea.nn(255, 70, 10), this.oc = ea.nn(230, 190, 190), this.od = ea.nn(255, 0,
		0), this.oe = ea.nn(255, 0, 255), this.og = ea.np(60, 0, 60, .85), this.oh = ea.np(0, 60, 60, .85), this.oi = ea.np(10, 60, 60, .9), this.oj = ea.np(0, 96, 96, .75), this.ok = ea.nn(0, 255, 255), this.ol = ea.nn(160, 160, 255), this.om = ea
		.np(0, 40, 90, .75), this.on = ea.np(0, 0, 255, .6), this.oo = ea.nn(200, 200, 255), this.op = ea.np(50, 50, 255, .83), this.oq = ea.np(20, 90, 150, .75), this.or = ea.nn(255, 120, 100), this.os = ea.np(255, 255, 0, .5), this.ot = ea.np(255,
			255, 150, .2), this.ou = ea.nn(255, 255, 0), this.ov = ea.nn(255, 255, 200), this.ow = ea.np(200, 200, 0, .6), this.ox = ea.np(140, 120, 0, .75), this.oy = ea.np(180, 160, 40, .75), this.oz = ea.np(70, 50, 20, .85), this.p0 = ea.np(30,
			30, 0, .85), this.p1 = ea.np(60, 60, 0, .85), this.p2 = ea.nn(255, 255, 100), this.p3 = ea.nn(255, 255, 140), this.p4 = ea.np(255, 140, 0, .75), this.p5 = ea.np(70, 40, 0, .85), this.p6 = ea.nn(255, 150, 0), this.p7 = ea.np(255, 200, 80,
			.85), this.p8 = ea.np(0, 0, 0, 0), this.p9 = ea.np(255, 255, 255, 0), this.pA = ea.np(254, 254, 254, 0)
}

function cy() {
	this.hR = new pB, this.gN = new pC, this.pD = new pE, this.pF = new pG, this.kO = new pH
}

function pB() {
	this.hS = function(eo) {
		aD.kg ? b8.pD.hS(aD.em, eo) : b0.pI.pJ(eo)
	}, this.hY = function(ib, jV) {
		aD.kg ? b8.pD.hY(aD.em, ib, jV) : b0.pI.pK(ib, jV)
	}, this.pL = function(ib, pM) {
		aD.kg ? b8.pD.pN(aD.em, ib, pM) : b0.pI.pO(ib, pM)
	}, this.hd = function(ib, eo) {
		eo = (eo << 3) + bO.fd[6];
		aD.kg ? b8.pD.hd(aD.em, ib, eo) : bN.mS.mT(aD.em) && b0.pI.pQ(ib, eo)
	}, this.hg = function(ib) {
		849 === ib && (ib = 850);
		var nI = bO.fd[3];
		aD.kg ? b8.pD.hg(aD.em, ib, nI) : bN.he.pR(aD.em, nI) && b0.pI.pS(ib, nI)
	}, this.pT = function(nI) {
		aD.kg ? b8.pD.pT(aD.em, nI) : b0.pI.pS(849, nI)
	}, this.pU = function(jV) {
		aD.kg ? b8.pD.pU(aD.em, jV) : b0.pI.pV(jV)
	}, this.pW = function(pX) {
		aD.kg ? b8.pD.pY(aD.em, pX) : b0.pI.pZ(pX)
	}, this.hp = function(pa) {
		aD.kg ? b8.pD.hp(aD.em, pa) : b0.pI.pb(pa)
	}, this.pc = function() {
		aD.kg ? b8.pD.pc(aD.em) : b0.pI.pd()
	}, this.hm = function() {
		aD.kg ? b8.pD.hm(aD.em) : b0.pI.pV(513)
	}, this.hU = function(ib, eo, jV) {
		aD.kg ? b8.pD.hU(aD.em, ib, eo, jV) : b0.pI.pe(ib, eo, jV)
	}
}

function pH() {
	this.kP = function(player, pM, hk) {
		bA.gN.pf(player, hk, pM) && (ae.pL(player, pM), !bA.gN.jj(pM)) && ao.j9.jy[pM] && ao.j9.jy[pM]--
	}, this.pg = function(player, pM, hk) {
		bA.gN.ph(hk, pM) ? an.eZ(pM, bO.fY[0]) && (bq.pi(player, pM, bO.fY[0], 1), bA.gN.gQ(pM, bO.fY[0]), bd.pj(player, pM), af.pk(pM, bO.fY[0])) : bd.gR(player, hk, 12)
	}
}

function pC() {
	this.pl = function(pX, player) {
		aN.pW(aD.em, player, pX), b0.pI.pm(pX, player)
	}, this.pn = function(player) {
		aN.po(player, 0), b0.pI.pp(player)
	}, this.pq = function(pr, player) {
		aN.ps(pr, player), b0.pI.pt(pr, player)
	}, this.pu = function() {
		aD.kg || aD.hA || b0.pv.pu()
	}
}

function pG() {
	this.eV = function(aC) {
		var id, fk, nd;
		for (bH.dd(aC), bH.eA += 2, nd = 8 * bH.size; bH.eA + 8 <= nd;) id = bH.pw(4), fk = bH.pw(9), 0 === id ? this.px(id, fk, bH.pw(22)) : 1 === id ? this.px(id, fk, bH.pw(10), bH.pw(10)) : 2 === id ? this.px(id, fk, bH.pw(10), bH.pw(9)) :
			3 === id ? this.px(id, fk, bH.pw(10), bH.pw(27)) : 4 === id ? this.px(id, fk, bH.pw(10), bH.pw(16)) : 5 === id || 6 === id ? this.px(id, fk, bH.pw(10)) : 7 === id ? this.px(id, fk, bH.pw(1)) : 10 === id ? this.px(id, fk, bH.pw(20), bH
				.pw(22)) : this.px(id, fk)
	}, this.py = [], this.pz = function() {
		for (var q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0, q6 = 0, aB = 0; aB < 512; aB++) q1 += ag.mv[aB], q2 += ag.gp[aB], q3 += ag.h3[aB], q4 += bN.y.kQ[aB];
		q5 += bN.y.mC, q6 += al.ks, this.py.push(q3 % 1073741824 * 4 + (q1 + q2 + q4 + q5 + q6) % 4)
	}, this.px = function(id, fk, fm, fo) {
		0 === id ? b8.pD.hS(fk, fm) : 1 === id ? b8.pD.hY(fk, fm, fo) : 2 === id ? b8.pD.pN(fk, fm, fo) : 3 === id ? b8.pD.hd(fk, fm, fo) : 4 === id ? b8.pD.hg(fk, fm, fo) : 5 === id ? b8.pD.pU(fk, fm) : 6 === id ? b8.pD.pY(fk, fm) : 7 === id ?
			b8.pD.hp(fk, fm) : 8 === id ? b8.pD.pc(fk) : 9 === id ? b8.pD.q7(fk) : 10 === id && b8.pD.hU(fk, fm >> 10, fo, fm % 1024)
	}
}

function pE() {
	this.hS = function(player, eo) {
		bA.gN.hC(0) && bA.gN.hD(player) && bM.ii(eo) && (b9.q8.q9(0, player, eo), aD.qA.eZ(player, eo))
	}, this.hY = function(player, ib, jV) {
		bA.gN.hC(1) && bA.gN.hD(player) && bA.gN.qB(player, jV) && bA.gN.mU(player, ib, 12, 0) && bA.gN.qC(player, jV) && ((jV = ad.jh(player, bO.ey[0])) || ad.k0(player)) && (ag.qD[player]++, b9.q8.q9(1, player, ib, bO.ey[0]), ao.j7.jL(player,
			jV)) && (bA.gN.mW(player), bd.qE(player, ib), ao.j7.jR(player))
	}, this.pN = function(player, ib, pM) {
		bA.gN.hC(1) && bA.gN.hD(player) && aD.hv && bA.gN.qB(player, pM) && bA.gN.qF(player, pM) && bA.gN.pf(player, bA.gN.ia(player, ib), pM) && an.eZ(pM, bO.fY[0]) && (b9.q8.q9(2, player, ib, pM), ae.pL(player, pM))
	}, this.hd = function(player, ib, pP) {
		bO.fd[1] = 7 & pP;
		var eo = pP >> 3;
		bA.gN.hC(1) && bA.gN.hD(player) && bM.ii(eo) && bN.mS.mT(player) && bN.mS.qG(eo) && bA.gN.mU(player, ib, 32, 0) && bN.l9.qH(player, eo, 1) && (bd.qI(player), b9.q8.q9(3, player, ib, pP), bA.gN.mW(player), bl.qJ.hd(player), bN.y.mX(
			player))
	}, this.hg = function(player, ib, nI) {
		849 === ib ? this.pT(player, nI) : bA.gN.hC(1) && bA.gN.hD(player) && bA.gN.mU(player, ib, 32, 0) && bN.he.qK(player, nI) && (bd.qI(player), b9.q8.q9(4, player, ib, nI), bA.gN.mW(player), bl.qJ.hg(player), bN.y.mX(player))
	}, this.pT = function(player, nI) {
		bA.gN.hC(1) && bA.gN.hD(player) && bN.qL.eV(player, nI) && b9.q8.q9(4, player, 849, nI)
	}, this.pU = function(player, jV) {
		513 === jV ? this.hm(player) : bA.gN.hC(1) && bA.gN.hD(player) && (jV = Math.min(jV, aD.ez), ad.jh(player, jV)) && (b9.q8.q9(5, player, jV), ad.qM(player, jV))
	}, this.pY = function(player, pX) {
		(bA.gN.hC(1) || bA.gN.hC(2)) && bA.gN.hD(player) && (pX = bL.i9(pX, 0, 1023), b9.q8.q9(6, player, pX), af.qN(player, 0, pX))
	}, this.hp = function(player, pa) {
		aw.ho(player) && (b9.q8.q9(7, player, pa), aw.qO(player, pa))
	}, this.pc = function(player) {
		(bA.gN.hC(0) || bA.gN.hC(1)) && bA.gN.hD(player) && aM.qP(player) && (b9.q8.q9(8, player), bQ.pc(player))
	}, this.q7 = function(player) {
		b9.q8.q9(9, player), bQ.q7(player)
	}, this.hm = function(player) {
		aw.hq(player) && (b9.q8.q9(5, player, 513), aw.hm(player))
	}, this.hU = function(player, ib, eo, jV) {
		bA.gN.hC(1) && bA.gN.hD(player) && bA.gN.qB(player, jV) && bA.gN.qC(player, jV) && bM.ii(eo) && am.ed.ew(player, eo) && (ad.jh(player, bO.ey[0]) || ad.k0(player)) && (b9.q8.q9(10, player, (ib << 10) + bO.ey[0], eo), jV = bA.gN.lY(player,
			ib), ag.gT[player].push(bO.f3[0]), ad.eZ(player, jV, bO.ey[0]), aF.jT(player, !0), bd.qQ(player))
	}
}

function qR() {
	var qT;
	this.qS = [], this.qT = document.createElement("div"), this.qU = function(qV, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qV, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qT.appendChild(
			title), title
	}, this.qW = function(qV, marginBottom) {
		var qX = document.createElement("p");
		return qX.textContent = qV, qX.style.fontSize = "0.75em", qX.style.lineHeight = "1.2em", qX.style.marginBottom = marginBottom || "0", this.qT.appendChild(qX), qX
	}, this.qY = function(qV) {
		var qZ = document.createElement("p");
		return qZ.textContent = qV, qZ.style.fontSize = "1em", qZ.style.marginBottom = "0", qZ.style.whiteSpace = "pre-wrap", qZ.style.overflowWrap = "break-word", this.qT.appendChild(qZ), qZ
	}, this.qa = function(qb, fontSize) {
		var qT = document.createElement("div");
		return qT.innerHTML = qb, qT.style.fontSize = fontSize || "1em", qT.style.lineHeight = "1.2em", this.qT.appendChild(qT), qT
	}, this.qc = function(qd) {
		for (var qe = qd.qe, f2 = qe.length, aB = 0; aB < f2; aB++) this.qT.appendChild(qe[aB])
	}, this.qf = function(qg) {
		return this.qS.push(qg), this.qT.appendChild(qg.e), qg
	}, this.resize = function() {
		for (var f2 = this.qS.length, aB = 0; aB < f2; aB++) this.qS[aB].resize && this.qS[aB].resize()
	}, (qT = this.qT).style.position = "absolute", qT.style.height = "auto", qT.style.padding = "0.5em"
}

function qh(qi, qj) {
	var qT = document.createElement("div");

	function qr() {
		var aB, qs, j, ga, f5, qn = h.k * qT.offsetWidth,
			qt = new Float64Array(function(qn) {
				var i = .25 * bA.qo.qp(.6) * h.iB;
				return Math.max(Math.floor(qn / i), 1)
			}(qn)),
			qu = bc.qu,
			qv = (qn - (qt.length + 1) * bc.gap) / (qt.length * h.k);
		for (qt.fill(qu), aB = 0; aB < qj.length; aB++) qs = (f5 = qj[aB].qT).style, j = bA.qw.min(qt), ga = qt.indexOf(j), qs.top = bA.qo.qx(j), qs.left = bA.qo.qx(qu + ga * (qv + qu)), qs.width = bA.qo.qx(qv), bA.qo.qy(f5, 5), qt[ga] += f5
			.offsetHeight + 3 * qu;
		qT.style.height = bA.qo.qx(bA.qw.max(qt) - 2 * qu)
	}
	this.qk = qT, this.ql = qj, this.resize = function() {
		var aB;
		for (aB = 0; aB < qj.length; aB++) qj[aB].resize();
		qr(), qr()
	}, qT.style.width = "100%", qT.style.maxWidth = "100%", qi.style.lineHeight = "1.5em", qi.style.overflowX = "hidden", qi.style.overflowY = "auto";
	for (var aB = 0; aB < qj.length; aB++) qT.appendChild(qj[aB].qT);
	qi.appendChild(qT)
}

function w(qz, r0, r1, r2, r3) {
	var self, r4 = document.createElement("button");

	function rB() {
		var rH;
		bJ.rG() || (rH = bA.color.rI(r1), !1 !== r2 && 0 < rH[0] && rH[0] < 255 && rH[0] === rH[1] && rH[0] === rH[2]) || (128 < rH[0] && 128 < rH[1] && 128 < rH[2] ? r4.style.backgroundColor = bA.color.rJ(r1, -50) : r4.style.backgroundColor = bA
			.color.rJ(r1, rH[3] && rH[3] < 120 ? 150 : 50))
	}

	function rA() {
		if (r2) {
			var rH = bA.color.rI(r1);
			if (rH[0] === rH[1] && rH[0] === rH[2]) return
		}
		r0 && ((rH = r0(this)) ? 2 === rH && rB() : rL(this))
	}

	function rD() {
		this.style.backgroundColor = r1
	}

	function rC() {
		rL(this)
	}

	function rL(f5) {
		f5.style.backgroundColor = r1, f5.blur()
	}
	this.button = r4, this.r5 = r0, this.r6 = r1, this.r9 = function(rE) {
		rE = 1.1 - Math.min(.01 * qz.length, .6) + .2 * rE;
		r4.style.fontSize = rE.toFixed(1) + "em"
	}, this.r8 = function(ea) {
		ea ? 1 === ea ? ea = bB.o7 : 2 === ea && (r2 = 1, ea = bB.o7) : (r2 = 0, ea = bB.nr), this.r6 = r1 = ea, r4.style.backgroundColor = ea
	}, self = this, r4.innerHTML = qz, r4.style.color = r3 ? bB.ou : bB.nv, r4.style.userSelect = "none", r4.style.outline = "none", r4.style.overflowWrap = "break-word", self.r8(r1), r4.style.border = "none", r4.style.font = "inherit", self.r9(
		0), r4.style.padding = "0em 0.3em", r4.onclick = rA, r4.addEventListener("mouseover", rB), r4.addEventListener("mouseout", rC), r4.addEventListener("focus", rB), r4.addEventListener("blur", rD)
}

function rM(rN, qi) {
	var qT;
	this.resize = function() {
		for (var aB = 0; aB < rN.length; aB++) bA.qo.qy(rN[aB].button);
		qT.style.gap = qT.style.padding = bA.qo.qx(bc.qu)
	}, (qT = document.createElement("div")).style.display = "grid", qT.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qT.style.overflowY = "auto", qT.style.gridAutoRows = "5.3em", qT.style.maxHeight = "100%";
	for (var aB = 0; aB < rN.length; aB++) rN[aB].r9(1), qT.appendChild(rN[aB].button);
	qi.appendChild(qT)
}

function rP(rQ, rR, rS) {
	this.f9 = 0, this.fB = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qo.qp(rS || .5) * rQ[1] * h.iB, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rQ[0] / rQ[1]), h.i - 2 * bc.gap), this.j = rQ[1] * this.i / rQ[0], this.f9 = bc.gap + rR[0] * (h.i - this.i - 2 * bc.gap), this.fB = bc
			.gap + rR[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rT = function() {
		return this.f9 + .5 * this.i
	}
}

function rU(rV, rW) {
	var rf, self, rX = document.createElement("div"),
		rY = document.createElement("div"),
		rZ = document.createElement("div"),
		ra = null,
		rg = (this.rb = new rc({
			value: "",
			eA: -1
		}, 0, rd, function(e) {
			e.target.value = bA.rn.ro(e.target.value), ra.rm.textContent = 127 - e.target.value.length
		}), 0),
		rh = 1,
		ri = 0,
		rj = 1048575;

	function rd() {
		rV(), ra.rm.textContent = 127
	}

	function ry(rx, qg) {
		qg && (qg.s3 = 1, rx.appendChild(bn.s4.transform(qg)))
	}

	function s1(bu) {
		rh ? rX.scrollTop = rX.scrollHeight : bu && (rX.scrollTop = ri)
	}
	this.rp = function(rq) {
			rj = 1048575, rY.textContent = "", rq || this.mi()
		}, this.mi = function() {
			var rr = bn.y.rs[0],
				rr = bn.y.ru[rr],
				rv = rr.rv,
				f2 = rv.length,
				jc = 1048575 === rj ? 0 : f2 - (rr.rw - rj + 1048575) % 1048575;
			if (rj = rr.rw, !(f2 <= (jc = Math.max(jc, 0)))) {
				for (var rx = document.createDocumentFragment(), aB = jc; aB < f2; aB++) ry(rx, bn.lB.rz(rv[aB], bn.lB.s0(rv[aB])));
				rY.appendChild(rx), s1()
			}
		}, this.s2 = function(r) {
			var rx = document.createDocumentFragment();
			ry(rx, r), rY.appendChild(rx), s1()
		}, this.show = function(qi) {
			qi.appendChild(rX), qi.appendChild(rZ), this.resize(qi)
		}, this.s5 = function(qi) {
			t.removeChild(qi, rX), t.removeChild(qi, rZ)
		}, this.resize = function(qi) {
			rg = qi ? qi.offsetHeight : rg;
			var qi = bA.qo.s7(.04, .75),
				s8 = Math.max(qi, rg - qi),
				s9 = h.i / h.k,
				sA = .7 * s9,
				sB = bA.qo.qx(rg - qi - s8),
				s8 = (rZ.style.height = bA.qo.qx(qi), rX.style.height = bA.qo.qx(s8), h.j > h.i || a0.a1.iA() ? (rZ.style.top = sB, rX.style.top = bA.qo.qx(rg - s8), bA.qo.qy(rX, 8)) : (rX.style.top = sB, rZ.style.top = bA.qo.qx(rg - qi), bA.qo.qy(
						rX, 2)), this.rb.e.style.width = bA.qo.qx(sA), this.rb.e.style.fontSize = rf.button.style.fontSize = bA.qo.qx(.5 * qi), bA.qo.qy(this.rb.e, 6), rf.button.style.left = bA.qo.qx(sA), rf.button.style.width = bA.qo.qx(s9 - sA),
					.385 * qi);
			a0.a1.iA() && (s8 *= .8 - .12 * (h.i > h.j)), rY.style.marginLeft = rY.style.marginRight = bA.qo.qx(.5 * s8), rY.style.fontSize = bA.qo.qx(s8), s1(1)
		}, (self = this).rb.e.rk = 127, rX.style.position = "absolute", rX.style.left = "0", rX.style.width = "100%", rX.style.overflowX = "hidden", rX.style.overflowY = "auto", rX.style.font = "inherit", rX.style.backgroundColor = bB.nt, rX
		.addEventListener("scroll", function() {
			ri = rX.scrollTop, rh = ri < rX.scrollHeight - rX.clientHeight - 2 ? 0 : 1
		}), rY.style.font = "inherit", rZ.style.position = "absolute", rZ.style.left = "0", rZ.style.width = "100%", self.rb.e.setAttribute("placeholder", L(13)), self.rb.e.style.position = "absolute", self.rb.e.style.top = "0", self.rb.e.style
		.left = "0", self.rb.e.style.height = "100%", self.rb.e.style.backgroundColor = bB.nq, self.rb.e.style.textAlign = "center", (rf = new w(L(14), rd)).button.top = "0", rf.button.style.position = "absolute", rf.button.style.height = "100%", rf
		.r8(bB.p9), ra = new rl("127", rf.button, 1, 1), rX.appendChild(rY), rZ.appendChild(self.rb.e), rZ.appendChild(rf.button)
}

function sD(sE, qz, sF) {
	function click() {
		var value = 1 - sE.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qz, void 0 !== sE.eA ? bj.sG.sH(sE.eA, value) : sE.value = value, sF && sF(value)
	}
	var e;
	qz = qz || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (sE.value ? "🟩 " : "⬜ ") + qz, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function sI(qi, qb) {
	var qT = document.createElement("div");
	this.qk = qT, this.resize = function() {
		qT.style.padding = bA.qo.qx(bc.qu), qT.style.lineHeight = bA.qo.qx(bA.qo.s7(.035))
	}, qi.style.overflowX = "hidden", qi.style.overflowY = "auto", qT.innerHTML = qb, qi.appendChild(qT)
}

function sJ(sK) {
	var qT = document.createElement("div");
	this.e = qT, this.sL = sK, this.resize = function() {
		for (var f2 = sK.length, aB = 1; aB < f2; aB++) bA.qo.qy(sK[aB], 4)
	};
	var aB, f2 = sK.length;
	for (qT.style.width = "100%", qT.style.height = "2.7em", qT.style.marginTop = "0.6em", qT.style.border = "inherit", aB = 0; aB < f2; aB++) sK[aB].style.verticalAlign = "top", sK[aB].style.width = (100 / f2).toFixed(2) + "%", sK[aB].style.height =
		"100%", sK[aB].style.fontSize = "0.75em", qT.appendChild(sK[aB])
}

function sM(sN, r1, sO) {
	this.qT = document.createElement("div"), this.rN = sN;
	var sP = 0;
	this.resize = function(qi, sR) {
		var f2 = sN.length;
		if (!sO)
			for (var aB = 1; aB < f2; aB++) bA.qo.qy(sN[aB].button, 4);
		for (var sS = 0, aB = 0; aB < f2; aB++) sS += sN[aB].button.offsetWidth;
		if (qi && (sP = qi.offsetWidth), sR && sS < sP)
			for (aB = 0; aB < f2; aB++) sN[aB].button.style.width = (100 * sN[aB].button.offsetWidth / sS).toFixed(2) + "%";
		else
			for (aB = 0; aB < f2; aB++) sN[aB].button.style.width = "auto";
		sR || this.resize(qi, 1)
	};
	var sQ = this;
	sQ.qT.style.height = sQ.qT.style.maxHeight = "100%";
	for (var aB = 0; aB < sN.length; aB++) sN[aB].r8(r1), sN[aB].button.style.height = "100%", sN[aB].button.style.padding = "0.0em 0.9em", sQ.qT.appendChild(sN[aB].button)
}

function sT() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qo.qy(this.e, 8, bB.o4)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sU() {
	var sZ, sa, sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = 0,
		sY = 0;
	this.show = function(f9, fB, qV, sb, sc, ea) {
			if (sX) {
				if (!sb) return;
				this.s5()
			}
			f9 === fB && -1 === f9 ? (f9 = sZ, fB = sa) : (sZ = f9, sa = fB);
			var sd = Math.floor(bA.qo.s7(.018)),
				sc = (f9 = Math.max(sd + 2, f9), sc || (sY = sb), sX = 1, h.i / h.k),
				sb = (sV.style.whiteSpace = "pre", sV.textContent = qV, bA.qo.qy(sV, 5), sV.style.font = bA.qo.sf(0, bA.qo.s7(.015)), sV.style.padding = "0.3em 0.6em", sV.style.left = f9 + "px", sV.style.top = "0px", document.body.appendChild(sV),
					f9 + sV.offsetWidth - sc),
				qV = (0 < sb && (f9 -= sb, f9 = Math.max(sd + 1, f9), sV.style.left = f9 + "px", f9 < sd + 2) && (sV.style.whiteSpace = "pre-wrap"), sV.offsetHeight);
			sV.style.top = fB - qV + sY * bc.sh + "px", f9 -= sd, sW.style.backgroundColor = bA.color.nn(ea >> 12 << 2, (ea >> 6 & 63) << 2, (63 & ea) << 2), sW.style.left = f9 + "px", sW.style.top = sV.style.top, sW.style.width = sd + "px", sW.style
				.height = qV + "px", bA.qo.qy(sW, 4), bA.qo.qy(sW, 8), bA.qo.qy(sW, 2), document.body.appendChild(sW)
		}, this.s5 = function(si) {
			if (sX) {
				if (si && sY) return 0;
				sX = 0, t.removeChild(document.body, sV), t.removeChild(document.body, sW)
			}
			return 1
		}, sV.style.position = "absolute", sV.style.backgroundColor = bB.nr, sV.style.color = bB.nv, sV.style.pointerEvents = "none", sV.style.zIndex = "5", sV.style.maxWidth = "100%", sW.style.position = "absolute", sW.style.color = bB.nv, sW.style
		.pointerEvents = "none", sW.style.zIndex = "5"
}

function rc(sj, type, sk, sl) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sm++, e.value = sj.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.nv, e.style.backgroundColor = bB.no, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sn++
		}), e.addEventListener("blur", function() {
			h.sn--, -1 !== sj.eA && bj.sG.sH(sj.eA, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sj.eA && bj.sG.sH(sj.eA, e.value), sk ? sk() : e.blur())
		}), sl && e.addEventListener("input", function(qg) {
			sl(qg)
		})
}

function so(qi, data) {
	var f2 = data.sp.length,
		sq = document.createElement("div"),
		sr = document.createElement("div"),
		ss = document.createElement("div"),
		st = new Array(f2),
		qj = new Array(f2),
		su = new Array(data.sv.length),
		sw = bA.color.np(70, 70, 0, .35);

	function rJ() {
		this.style.backgroundColor = bA.color.rJ(sw, 160)
	}

	function t1() {
		this.style.backgroundColor = sw
	}

	function qr() {
		var fL;
		for (qi.style.font = bA.qo.sf(0, bA.qo.tB(.026, .5, .03)), aB = 1; aB < su.length; aB++) bA.qo.qy(su[aB], 4);
		if (bA.qo.qy(sq, 2), f2) {
			for (var hT, tC = sq.offsetWidth, tD = ss.offsetWidth, aB = 0; aB < su.length; aB++) hT = .01 * data.t0[aB] * tD, su[aB].style.width = (100 * hT / tC).toFixed(2) + "%";
			var lH = data.sp[0].length;
			for (aB = 0; aB < f2; aB++)
				for (bA.qo.qy(st[aB], 2), fL = 1; fL < lH; fL++) bA.qo.qy(qj[aB][fL], 4);
			sr.sx && (sr.scrollTop = sr.sx)
		}
	}
	this.resize = function() {
			qr(), qr()
		}, qi.style.display = "flex", qi.style.flexDirection = "column", sr.style.overflowX = "hidden", sr.style.overflowY = "auto", sr.addEventListener("scroll", function() {
			this.sx = this.scrollTop
		}),
		function() {
			var f5, aB, sp = data.sp,
				lH = f2 ? sp[0].length : 0;
			for (aB = 0; aB < f2; aB++) {
				st[aB] = document.createElement("div"), st[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.np(130, 130, 130, .35) : bB.nu
				}(aB), st[aB].style.width = "100%", st[aB].style.display = "flex", qj[aB] = new Array(lH);
				for (var fL = 0; fL < lH; fL++) qj[aB][fL] = f5 = document.createElement("div"), f5.style.display = "flex", f5.style.justifyContent = "center", f5.style.wordBreak = "break-all", f5.style.padding = "0.4em 0em", f5.style.width = data
					.t0[fL] + "%", f5.innerHTML = sp[aB][fL].fT, 1 === sp[aB][fL].ds && (f5.name = "" + aB, f5.style.color = bB.ou, f5.style.backgroundColor = sw, f5.addEventListener("mouseover", rJ), f5.addEventListener("mouseout", t1), function(f5,
						t3, t4) {
						2147483647 !== t4 && f5.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, t3), bH.dd(bD.aC), this.style.backgroundColor = sw, t.u(8, t.t5, new t6(25, {
								t7: 0,
								t3: bF.t8.t9(bF.t8.tA(5)),
								t4: t4
							}))
						})
					}(f5, sp[aB][fL].t3, sp[aB][fL].t4)), st[aB].appendChild(f5)
			}
			for (sq.style.display = "flex", sq.style.backgroundColor = bA.color.np(0, 120, 0, .35), aB = 0; aB < su.length; aB++) su[aB] = f5 = document.createElement("div"), f5.style.display = "flex", f5.style.justifyContent = "center", f5.style
				.wordBreak = "break-all", f5.style.padding = "0.4em 0em", f5.style.width = data.t0[aB] + "%", f5.innerHTML = data.sv[aB], sq.appendChild(f5)
		}();
	for (var aB = 0; aB < f2; aB++) ss.appendChild(st[aB]);
	sr.appendChild(ss), qi.appendChild(sq), qi.appendChild(sr)
}

function tE() {
	var tI, tJ, tF = document.createElement("div"),
		tG = document.createElement("div"),
		tH = document.createElement("div"),
		ss = document.createElement("div"),
		rN = [],
		e5 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		tK = [1, 2, 3, 0, 9, 10, 11];

	function tM(aB) {
		t.u(8, 0, new t6(21, {
			tO: tK[aB],
			tP: 0,
			tQ: 10
		}))
	}
	this.show = function() {
			this.sH(t.y.tR), document.body.appendChild(tF)
		}, this.s5 = function() {
			t.removeChild(document.body, tF)
		}, this.sH = function(tR) {
			for (var tS = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rN.length; aB++) {
				var i = tR[aB];
				tI[tS[aB]][1].rm.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tT = bc.gap,
				j = bA.qo.tU(.085),
				i = Math.min(4 * j, h.i - 2 * tT),
				f2 = rN.length;
			for (bA.qo.tV(tF, tT, h.j - tT - j, i, j), bA.qo.qy(tF), bA.qo.qy(tG, 6), aB = 0; aB < f2 - 1; aB++) bA.qo.qy(rN[aB].button, 6);
			for (aB = 0; aB < f2; aB++) tI[aB][0].resize(), tI[aB][1].resize();
			for (rN[0].f9 = 0, rN[0].button.style.left = bA.qo.qx(rN[0].f9), rN[0].button.style.width = bA.qo.tW(1.7 * j), aB = 1; aB < f2; aB++) rN[aB].f9 = rN[aB - 1].f9 + rN[aB - 1].button.offsetWidth, rN[aB].button.style.left = bA.qo.qx(rN[aB]
				.f9);
			if (!tJ) {
				if (!ab.tX()) return;
				(tJ = ab.get(14)).style.width = "24%", tJ.style.position = "absolute", tG.appendChild(tJ)
			}
			tJ.style.left = bA.qo.qx(0), tJ.style.top = "7%", tH.tY && (tH.scrollLeft = tH.tY)
		}, tF.style.position = "absolute", tG.style.width = "25%", tG.style.height = "100%", tG.style.backgroundColor = bB.nr, tH.style.position = "absolute", tH.style.width = "75%", tH.style.height = "100%", tH.style.backgroundColor = bB.nr, tH
		.style.top = tH.style.right = bA.qo.qx(0), bA.qo.tL(tH), ss.style.height = ss.style.maxHeight = "100%", rN.push(new w("", function() {
			tM(0)
		}, bB.og)), rN.push(new w("", function() {
			tM(1)
		}, bB.oh)), rN.push(new w("", function() {
			tM(2)
		}, bB.oY)), rN.push(new w("", function() {
			tM(3)
		}, bB.oJ)), rN.push(new w("", function() {
			tM(4)
		}, bB.p5)), rN.push(new w("", function() {
			tM(5)
		}, bB.p1)), rN.push(new w("", function() {
			tM(6)
		}, bB.p5)), tI = new Array(rN.length);
	for (var aB = 0; aB < rN.length; aB++) rN[aB].button.style.position = "absolute", tI[aB] = [new tN(e5[aB], rN[aB].button, .25, .45), new tN("", rN[aB].button, .53, .84, 1)], rN[aB].button.style.height = rN[aB].button.style.maxHeight = "100%", rN[
		aB].button.top = bA.qo.qx(0), ss.appendChild(rN[aB].button);
	tH.appendChild(ss), tF.appendChild(tG), tF.appendChild(tH)
}

function tZ(ta, tb, tc, td, rV, rW) {
	var te = document.createElement("div"),
		tf = document.createElement("div"),
		tg = document.createElement("div"),
		th = document.createElement("div"),
		ti = document.createElement("div"),
		tj = document.createElement("div"),
		tk = document.createElement("div"),
		tl = document.createElement("div"),
		tm = document.createElement("span"),
		tn = document.createElement("div");
	this.tp = new rU(rV, rW), this.tq = new tr(rW), this.ts = [ta, tb, tc, td], this.tw = function(tx) {
		tx = (tx / 10).toFixed(1) + "%";
		tl.style.width = tx, tm.innerHTML = tx
	}, this.ty = function() {
		this.tq.s5(tj), this.tp.show(tj)
	}, this.tz = function() {
		this.tp.s5(tj), this.tq.show(tj)
	}, this.u0 = function() {
		return tf
	}, this.show = function() {
		document.body.appendChild(te)
	}, this.s5 = function() {
		t.removeChild(document.body, te)
	}, this.resize = function(u1) {
		var u2 = 1 - .4 * a0.a1.iA() * (h.i > 1.6 * h.j),
			u3 = bA.qo.s7(.05 * u2),
			u4 = h.j > h.i,
			u5 = bA.qo.s7(.06 * u2 + .03 * u4),
			u6 = bA.qo.s7(.08 * u2 + .03 * u4),
			u7 = bA.qo.s7(.04 + .02 * u4),
			u4 = bA.qo.s7(.02 * u2 + .01 * u4),
			u9 = bA.qo.s7(.025);
		te.style.font = bA.qo.sf(0, u9), u2 < 1 && (u9 = bA.qo.sf(0, u2 * u9), tg.style.font = u9, ti.style.font = u9, tn.style.font = u9, tk.style.font = u9, th.style.font = u9), tf.style.height = bA.qo.qx(u3), tf.style.font = bA.qo.sf(0, .72 *
				u3), bA.qo.qy(tf, 2), tg.style.top = bA.qo.qx(u3), tg.style.height = bA.qo.qx(u6), bA.qo.qy(tg, 2), th.style.font = bA.qo.sf(0, u2 * bA.qo.s7(.02)), th.style.top = bA.qo.qx(u3 + u6), th.style.height = bA.qo.qx(u7), bA.qo.qy(th,
			2), ti.style.top = bA.qo.qx(u3 + u6 + u7), ti.style.height = bA.qo.qx(u5), bA.qo.qy(ti, 2), tj.style.top = bA.qo.qx(u3 + u6 + u7 + u5), tj.style.height = bA.qo.qx(h.j / h.k - u3 - u6 - 2 * u5 - u7 - u4), tk.style.top = bA.qo.qx(h.j /
				h.k - u5 - u4), tk.style.height = bA.qo.qx(u4), bA.qo.qy(tk, 8), tm.style.font = bA.qo.sf(0, .8 * u4), tn.style.top = bA.qo.qx(h.j / h.k - u5), tn.style.height = bA.qo.qx(u5), bA.qo.qy(tn, 8), ta.resize(tg), tb.resize(tg), tc
			.resize(tg), td.resize(tg), u1 ? this.tp.resize(tj) : this.tq.resize()
	};
	rV = this;
	te.style.position = "absolute", te.style.top = "0", te.style.left = "0", te.style.width = "100%", te.style.height = "100%", te.style.backgroundColor = bB.nu, bJ.rG() || (te.style.backdropFilter = "blur(4px)", te.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (te.style.display = "none"), tf.style.position = "absolute", tf.style.top = "0", tf.style.left = "0", tf.style.width = "100%", tf.style.display = "flex", tf.style.alignItems = "center";
	for (var g = [tg, th, ti, tn], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qo.tL(g[aB]);
	tj.style.position = "absolute", tj.style.left = "0", tj.style.width = "100%", tj.style.font = "inherit", tk.style.position = "absolute", tk.style.left = "0", tk.style.width = "100%", tl.style.position = "absolute", tl.style.top = "0", tl.style
		.left = "0", tl.style.height = "100%", tl.style.width = "50%", tl.style.backgroundColor = bB.oH, tm.innerHTML = "", tm.style.position = "absolute", tm.style.top = "50%", tm.style.left = "50%", tm.style.transform = "translate(-50%, -50%)", tf
		.appendChild(function() {
			var tv = document.createElement("h1");
			return tv.textContent = L(23), tv.style.margin = "0 auto 0.15em auto", tv.style.fontFamily = "Arial Black, Trebuchet MS", tv.style.fontSize = "inherit", tv.style.fontWeight = "inherit", tv
		}()), tg.appendChild(ta.qT), th.appendChild(tb.qT), ti.appendChild(tc.qT), tk.appendChild(tl), tk.appendChild(tm), tn.appendChild(td.qT), te.appendChild(tf), te.appendChild(tg), te.appendChild(th), te.appendChild(ti), te.appendChild(tj), te
		.appendChild(tk), te.appendChild(tn), rV.tq.show(tj)
}

function tr(rW) {
	var te = document.createElement("div"),
		tj = document.createElement("div");
	this.mi = function() {
			tj.textContent = "", bn.uB.uC && bn.uB.s5(1);
			for (var rx = document.createDocumentFragment(), uD = bn.y.rs[0], uE = bn.uE.uF[uD], uG = bn.uE.uG[uD], aB = 0; aB < uE.length; aB++) ! function(rx, qg, uI, uD) {
				var rm = document.createElement("span");
				rm.textContent = (uI ? "🟢 " : "⚪ ") + bn.lB.uJ(qg, uD), rm.style.color = bn.lB.uK(qg.uL), rm.style.cursor = "pointer", rm.style.margin = "0.2em 0.2em 0.2em 0.2em", rm.style.width = rm.style.maxWidth = 2 === uD ? "10em" : "9em",
					rm.style.height = rm.style.maxHeight = "1.4em", rm.style.whiteSpace = "nowrap", rm.style.overflow = "hidden", rm.style.textOverflow = "ellipsis", rm.style.font = "inherit", rm.style.display = "inline-block", bn.lB.uM(qg) && (
						rm.style.textDecoration = "underline"), qg.uN && (rm.style.textDecorationLine = "underline", rm.style.textDecorationStyle = "dotted");
				rm.onclick = function(e) {
					rW(e, qg)
				}, bJ.rG() || (rm.onmouseover = function(e) {
					bn.uB.uO(e.target, qg, 1)
				}), rx.appendChild(rm)
			}(rx, uE[aB], aB < uG, uD);
			tj.appendChild(rx)
		}, this.show = function(qi) {
			qi.appendChild(te)
		}, this.s5 = function(qi) {
			t.removeChild(qi, te)
		}, this.resize = function() {
			tj.style.fontSize = bA.qo.qx(bA.qo.s7(.02, .3))
		}, te.style.top = "0", te.style.left = "0", te.style.width = te.style.height = "100%", te.style.overflowX = "hidden", te.style.overflowY = "auto", te.style.font = "inherit", tj.style.font = "inherit", tj.style.margin = "0.4em", te
		.appendChild(tj)
}

function uP(uQ) {
	var te = document.createElement("div"),
		rZ = document.createElement("div"),
		uR = [];

	function rB() {
		bJ.rG() || (this.style.backgroundColor = bA.color.rJ(bB.nr, 50))
	}

	function rC() {
		this.style.backgroundColor = bB.nr
	}
	this.sH = function(uT, uU) {
			uR[2].textContent = uT + 1 + " / " + uU
		}, this.show = function(qg) {
			qg = bn.lB.rz(qg, bn.lB.s0(qg)), rZ.appendChild(bn.s4.transform(qg)), document.body.appendChild(te)
		}, this.resize = function() {
			var j = bA.qo.s7(.03, .5);
			te.style.width = 10 * j + "px", te.style.font = bA.qo.sf(1, .75 * j), bA.qo.qy(te, 4), rZ.style.top = j + "px", rZ.style.font = bA.qo.sf(0, .55 * j), bA.qo.qy(rZ, 2), te.style.height = j + rZ.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qo.qy(uR[aB], 6), uR[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uR[aB].style.height = j + "px", bA.qo.qy(uR[aB], 2);
			uR[2].style.width = 4 * j + "px", uR[1].style.left = 2 * j + "px", uR[2].style.left = 4 * j + "px", uR[3].style.left = 8 * j + "px"
		}, this.uV = function() {
			for (var aB = 0; aB < 4; aB++) uR[aB].onclick = null, uR[aB].onmouseover = null, uR[aB].onmouseout = null;
			t.removeChild(document.body, te), te = rZ = uR = null
		}, te.style.position = "absolute", te.style.color = bB.nv, te.style.zIndex = "3", te.style.right = "0", te.style.top = "0", rZ.style.position = "absolute", rZ.style.height = "auto", rZ.style.color = bB.nv, rZ.style.backgroundColor = bB.nr, rZ
		.style.left = "0", rZ.style.width = "100%", rZ.style.overflowWrap = "break-word", te.appendChild(rZ);
	for (var aB = 0; aB < 4; aB++) uR[aB] = document.createElement("div"), uR[aB].style.position = "absolute", uR[aB].style.backgroundColor = bB.nr, uR[aB].style.color = bB.nv, uR[aB].style.top = "0", uR[aB].style.display = "flex", uR[aB].style
		.justifyContent = "center", uR[aB].style.alignItems = "center", uR[aB].style.userSelect = "none", uR[aB].style.outline = "none", uR[aB].style.font = "inherit", 2 !== (uR[aB].uS = aB) && (uR[aB].onclick = uQ, uR[aB].onmouseover = rB, uR[aB]
			.onmouseout = rC), te.appendChild(uR[aB]);
	uR[0].textContent = "◀", uR[1].textContent = "▶", uR[3].textContent = "✖"
}

function uW(uQ) {
	var sV = document.createElement("div");

	function rB() {
		bJ.rG() || (sV.style.backgroundColor = bA.color.rJ(bB.nr, 50))
	}

	function rC() {
		sV.style.backgroundColor = bB.nr
	}
	this.sH = function(uU) {
			sV.textContent = uU
		}, this.show = function() {
			document.body.appendChild(sV)
		}, this.resize = function() {
			var j = bA.qo.s7(.03, .5);
			sV.style.width = 2 * j + "px", sV.style.height = j + "px", sV.style.font = bA.qo.sf(1, .75 * j), bA.qo.qy(sV, 4), bA.qo.qy(sV, 2)
		}, this.uV = function() {
			sV.onclick = null, sV.onmouseover = null, sV.onmouseout = null, t.removeChild(document.body, sV), sV = null
		}, sV.style.position = "absolute", rC(), sV.style.color = bB.nv, sV.style.zIndex = "3", sV.style.right = "0", sV.style.top = "0", sV.style.display = "flex", sV.style.justifyContent = "center", sV.style.alignItems = "center", sV.style
		.userSelect = "none", sV.style.outline = "none", sV.onclick = uQ, sV.onmouseover = rB, sV.onmouseout = rC
}

function uX(sN) {
	var te = document.createElement("div"),
		uY = document.createElement("div"),
		sX = (this.f9 = 0, this.fB = 0);

	function ua() {
		bn.ub.s5()
	}
	this.rN = sN, this.show = function(f9, fB, ud) {
		if (sX) return [0, 0];
		sX = 1, this.f9 = f9, this.fB = fB,
			function(self, ud) {
				var i = bA.qo.s7(.16, .7),
					j = sN.length * i / 3,
					uf = h.i / h.k,
					ug = h.j / h.k,
					nX = Math.min(1, Math.min(uf / i, ug / j));
				i *= nX, j *= nX, ud && (self.f9 += bA.qo.s7(.03, .5)), self.f9 = bL.i9(self.f9, 0, uf - i), self.fB = bL.i9(self.fB, 0, ug - j), uY.style.left = self.f9 + "px", uY.style.top = self.fB + "px", uY.style.width = i + "px", uY.style
					.height = j + "px", uY.style.font = bA.qo.sf(0, .3 * j / sN.length), bA.qo.qy(uY, 5);
				for (var aB = 1; aB < sN.length; aB++) bA.qo.qy(sN[aB].button, 8)
			}(this, ud), document.body.appendChild(te)
	}, this.s5 = function() {
		sX && (sX = 0, te.removeEventListener("click", ua), t.removeChild(document.body, te))
	};
	for (var aB = 0; aB < sN.length; aB++) new rl("" + (1 + aB), sN[aB].button, 0, 1);
	te.style.position = "fixed", te.style.top = "0", te.style.left = "0", te.style.width = "100%", te.style.height = "100%", te.style.zIndex = "5", uY.style.position = "absolute",
		function() {
			for (var uc = (100 / sN.length).toFixed(2) + "%", aB = 0; aB < sN.length; aB++) sN[aB].button.style.width = "100%", sN[aB].button.style.height = sN[aB].button.style.maxHeight = uc, sN[aB].button.style.padding = "0.0em 0.9em", uY
				.appendChild(sN[aB].button)
		}(), te.appendChild(uY), te.addEventListener("click", ua)
}

function eb() {
	var uh, ui, uj;

	function uq(aB) {
		return bA.color.nn(ui[aB][0], ui[aB][1], ui[aB][2])
	}

	function uw(fL, fM) {
		return bA.color.v6(ui[fL], ui[fM]), uq(fM)
	}

	function uo() {
		uh && (uh.remove(), uh = null)
	}
	this.show = function(ec, colors, id) {
		0 <= (uj = id) && b0.y.eW(0) && b0.eX.uk(0, id), ec = (ec = (ec = (ec = (ec = (ec = (ec = (ec = (ec = (ec = (ec = (ec = ec.trim()).replace(new RegExp("[<>]", "g"), "")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?discord\\.gg\\/([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://discord.gg/$1' target='_blank'>discord.gg/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/watch?v=$1' target='_blank'>youtube.com/watch?v=$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/@([A-Za-z0-9_-]+)\\b", "g"), "<a href='https://youtube.com/@$1' target='_blank'>youtube.com/@$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?tiktok\\.com\\/(@[A-Za-z0-9._-]+\\/video\\/([0-9]+))\\b", "g"), "<a href='https://tiktok.com/$1' target='_blank'>tiktok.com/$1</a>")).replace(new RegExp(
				"\\b(?:https?:\\/\\/)?(?:www\\.)?t\\.me\\/([A-Za-z0-9_]+)\\b", "g"), "<a href='https://t.me/$1' target='_blank'>t.me/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?x\\.com\\/([A-Za-z0-9_]+)\\b",
				"g"), "<a href='https://x.com/$1' target='_blank'>x.com/$1</a>")).replace(new RegExp("\\b(?:https?:\\/\\/)?(?:www\\.)?patreon\\.com\\/([A-Za-z0-9_-]+)\\b", "g"),
				"<a href='https://patreon.com/$1' target='_blank'>patreon.com/$1</a>")).replace(new RegExp("\\r?\\n", "g"), "<br>")).replace(new RegExp("\\*\\*(.*?)\\*\\*", "g"), "<b>$1</b>")).replace(new RegExp("\\*(.*?)\\*", "g"), "<i>$1</i>"),
			ui = colors, (uh = document.createElement("div")).style.position = "fixed", uh.style.top = "0", uh.style.left = "0", uh.style.width = "100%", uh.style.height = "100%", uh.style.backgroundColor = bA.color.np(ui[0][0], ui[0][1], ui[0][
				2], .6), uh.style.zIndex = "6", uh.onclick = function(e) {
				e.target === uh && uo()
			},
			function(ec) {
				var hx, up = document.createElement("div");
				up.style.position = "absolute", up.style.display = "flex", up.style.flexDirection = "column", up.style.top = "50%", up.style.left = "50%", up.style.backgroundColor = uq(2), hx = a0.a1.iA() ? bA.qo.ur(h.min) : bA.qo.s7(.4);
				hx = Math.max(hx, 200), up.style.width = bA.qo.qx(hx), up.style.height = bA.qo.qx(hx), up.style.transform = "translate(-50%, -50%)",
					function(up, hx) {
						var uv = document.createElement("div");
						uv.style.flex = "0 0 10%", uv.style.overflow = "hidden", uv.style.backgroundColor = uq(1), uv.style.color = uw(1, 7), uv.style.font = bA.qo.sf(1, .05 * hx), uv.style.display = "flex", uv.style.alignItems = "center", uv
							.style.justifyContent = "center", uv.innerHTML = L(24), up.appendChild(uv)
					}(up, hx),
					function(up, ec, hx) {
						var ux = document.createElement("div");
						ux.style.flex = "0 0 70%", ux.style.overflowY = "auto", ux.style.overflowX = "hidden", ux.style.whiteSpace = "pre-wrap", ux.style.wordWrap = "break-word", ux.style.padding = bA.qo.qx(.02 * hx), ux.style.backgroundColor =
							uq(2), ux.style.color = uw(2, 8), ux.style.font = bA.qo.sf(0, .07 * hx), ux.innerHTML = ec, ux.innerHTML = "<style>a { color: inherit; }</style>" + ux.innerHTML, up.appendChild(ux)
					}(up, ec, hx),
					function(up, hx) {
						var uy = document.createElement("div"),
							uz = (uy.style.display = "flex", uy.style.flexDirection = "row", uy.style.justifyContent = "space-between", uy.style.alignItems = "stretch", uy.style.backgroundColor = uq(3), uy.style.flex = "1", uy.style.padding = bA
								.qo.qx(.01 * hx), uy.style.gap = bA.qo.qx(.01 * hx), document.createElement("div")),
							v0 = (uz.style.flex = "0 0 60%", uz.style.height = "100%", new w(L(25, 0, 0, 1), function() {
								uo()
							}, uq(4), !1)),
							v0 = (v0.button.style.width = "100%", v0.button.style.height = "100%", v0.button.style.color = uw(4, 9), v0.button.style.font = bA.qo.sf(1, .05 * hx), uz.appendChild(v0.button), document.createElement("div")),
							v2 = (v0.style.flex = "0 0 15%", v0.style.height = "100%", v0.style.backgroundColor = uq(5), document.createElement("div")),
							v3 = (v2.style.flex = "1", v2.style.height = "100%", new w(L(26), function(e) {
								return bA.qo.v4(e), uj < 0 || b0.y.eW(0) && (b0.eX.uk(1, uj), uj = -1), !0
							}, uq(6), !1));
						v3.button.style.width = "100%", v3.button.style.height = "100%", v3.button.style.color = uw(6, 10), v3.button.style.font = bA.qo.sf(1, .035 * hx), v2.appendChild(v3.button), uy.appendChild(uz), uy.appendChild(v0), uy
							.appendChild(v2), up.appendChild(uy)
					}(up, hx), uh.appendChild(up)
			}(ec), document.body.appendChild(uh)
	}
}

function v7(sj, v8) {
	this.qe = [];
	var v9 = this.qe;

	function click() {
		for (var aB = 0; aB < v9.length; aB++) v9[aB].textContent = v9[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var eA = parseInt(this.name);
		void 0 !== sj.eA && bj.sG.sH(sj.eA, eA), v8 && v8(eA)
	}
	for (var vA, f2 = sj.vB.length, aB = 0; aB < f2; aB++)(vA = document.createElement("p")).textContent = "⚪ " + sj.vB[aB], vA.style.margin = "0", vA.name = "" + aB, vA.style.cursor = "pointer", vA.style.fontSize = "1em", vA.addEventListener(
		"click", click), v9.push(vA);
	v9[sj.value].textContent = v9[sj.value].textContent.replace("⚪", "🟢")
}

function vC(title, vD, vE) {
	var tF = document.createElement("div"),
		vF = document.createElement("div"),
		ss = document.createElement("div"),
		vG = document.createElement("div"),
		vH = document.createElement("div");
	this.vI = ss, this.vJ = vD, this.show = function() {
			!1 !== vE ? document.body.appendChild(tF) : (document.body.appendChild(vF), document.body.appendChild(vG))
		}, this.s5 = function() {
			!1 !== vE ? t.removeChild(document.body, tF) : (t.removeChild(document.body, vF), t.removeChild(document.body, vG))
		}, this.vN = function() {
			var s8 = bA.qo.s7(.1),
				s6 = bA.qo.s7(.08 + .04 * (h.vO < 1), .3);
			return {
				s8: s8,
				s6: s6,
				vP: h.j / h.k - s8 - s6
			}
		}, this.resize = function(sR) {
			var f2 = vD.length,
				vQ = this.vN(),
				s8 = vQ.s8,
				s6 = vQ.s6;
			for (vF.style.height = bA.qo.qx(s8), bA.qo.qy(vF, 2), vG.style.top = bA.qo.qx(h.j / h.k - s6), vG.style.height = bA.qo.qx(s6), bA.qo.qy(vG, 8), ss.style.top = bA.qo.qx(s8), ss.style.height = ss.style.maxHeight = bA.qo.qx(vQ.vP), vF.style
				.font = bA.qo.sf(0, bA.qo.s7(.02, .15)), vG.style.font = bA.qo.sf(0, bA.qo.s7(.02, .7)), ss.style.font = bA.qo.sf(0, bA.qo.s7(.02, .35)), aB = 1; aB < f2; aB++) bA.qo.qy(vD[aB].button, 4);
			for (var sS = 0, aB = 0; aB < f2; aB++) sS += vD[aB].button.offsetWidth;
			if (sR && sS < vG.offsetWidth)
				for (aB = 0; aB < f2; aB++) vD[aB].button.style.width = (100 * vD[aB].button.offsetWidth / sS).toFixed(2) + "%";
			else
				for (aB = 0; aB < f2; aB++) vD[aB].button.style.width = "auto";
			vG.tY && (vG.scrollLeft = vG.tY), sR || this.resize(!0)
		}, this.vR = function() {
			var vQ = this.vN(),
				ea = h.k;
			vS.fillStyle = bB.nr, vS.fillRect(0, ea * vQ.s8, h.i, ea * vQ.vP)
		}, tF.style.position = "absolute", tF.style.top = "0", tF.style.left = "0", tF.style.width = "100%", tF.style.height = "100%", vF.style.position = "absolute", vF.style.top = "0", vF.style.left = "0", vF.style.width = "100%", vF.style
		.display = "flex", vF.style.backgroundColor = bB.nr, vG.style.position = "absolute", vG.style.left = "0", vG.style.width = "100%", bA.qo.tL(vG), vH.style.height = vH.style.maxHeight = "100%", ss.style.position = "absolute", ss.style.width =
		"100%", ss.style.backgroundColor = bB.nr,
		function() {
			for (var aB = 0; aB < vD.length; aB++) vD[aB].button.style.height = "100%", vD[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < vD.length; aB++) vH.appendChild(vD[aB].button);
	vF.appendChild(function() {
		var vM = document.createElement("h1");
		return vM.textContent = title, vM.style.margin = "auto", vM.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", vM.style.fontFamily = "Arial Black, Trebuchet MS", vM
	}()), vG.appendChild(vH), !1 !== vE && (tF.appendChild(ss), tF.appendChild(vF), tF.appendChild(vG))
}

function rl(vT, vU, vV, vW) {
	var self;
	this.rm = document.createElement("span"), (self = this).rm.textContent = vT, self.rm.style.color = bB.nv, self.rm.style.position = "absolute", self.rm.style.font = "inherit", vW ? self.rm.style.bottom = "0.06em" : self.rm.style.top = "0.12em",
		vV ? self.rm.style.left = "0.2em" : self.rm.style.right = "0.2em", self.rm.style.fontSize = "0.6em", self.rm.style.pointerEvents = "none", self.rm.style.whiteSpace = "pre", vU.style.position = "relative", vU.style.overflow = "hidden", vU
		.appendChild(self.rm)
}

function tN(vT, vU, vX, vY, vZ) {
	var self;
	this.rm = document.createElement("span"), this.resize = function() {
			this.rm.style.fontSize = ((vY - vX) * vU.offsetHeight).toFixed(1) + "px"
		}, (self = this).rm.textContent = vT, self.rm.style.color = bB.nv, self.rm.style.font = "inherit", self.rm.style.margin = "0.1em 0.6em", self.rm.style.pointerEvents = "none", vZ && (self.rm.style.fontWeight = "bold"), self.rm.style
		.whiteSpace = "nowrap", self.rm.style.display = "block", vU.appendChild(self.rm)
}

function va(vb, vc, vd, ve) {
	var vf = document.createElement("textarea"),
		vg = (this.e = vf, !0);

	function vl() {
		vf.select(), document.execCommand("copy")
	}
	this.resize = function() {
			vc && bA.qo.qy(vf, 5)
		}, this.vh = function(ec) {
			vf.value = ec
		}, this.vi = function() {
			return vf.value
		}, this.vj = function() {
			vf.select()
		}, this.clear = function() {
			vf.value = ""
		}, this.vk = function() {
			vg && navigator.clipboard ? (vf.select(), navigator.clipboard.writeText(vf.value).catch(function() {
				vg = !1, vl()
			})) : vl()
		}, vf.setAttribute("id", "textArea" + t.y.sm++), vf.setAttribute("autocomplete", "off"), vb && vf.setAttribute("placeholder", vb), vf.style.top = "0", vf.style.left = "0", vf.style.width = "100%", vf.style.height = "100%", vf.style
		.userSelect = "none", vf.style.outline = "none", vf.style.resize = "none", vf.style.border = "none", vf.style.color = bB.nv, vf.style.backgroundColor = bB.no, ve ? (vf.style.fontSize = "1em", vf.rows = 6, vf.style.padding = "0.25em") : (vf
			.style.padding = "0.45em", vf.style.fontSize = "1.2em"), vd && vf.addEventListener("input", function(e) {
			vd(e)
		}), vf.addEventListener("focus", function() {
			h.sn++
		}), vf.addEventListener("blur", function() {
			h.sn--
		})
}

function dI() {
	this.r5 = new vm, this.eO = new vn, this.sG = new vo, this.y = new vp, this.vq = new vr, this.dd = function() {
		this.eO.dd(), (new vs).dd(), this.vq.dd(), this.y.vt()
	}
}

function vn() {
	function vu(aB, type, w0, dv) {
		bj.eO.data.push({
			eA: aB,
			type: type || 0,
			value: w0 || 0,
			w0: w0 || 0,
			dv: dv || 0
		})
	}

	function vv(aB, type, w0, dv) {
		bj.eO.data.push({
			eA: aB,
			type: type,
			value: w0 || "",
			w0: w0 || "",
			dv: dv || 0
		})
	}

	function vw(nd) {
		for (var aB = bj.eO.data.length; aB < nd; aB++) bj.eO.data.push(null)
	}
	this.data = [], this.dd = function() {
		vu(0, 1, 0, 5), vu(1, 1, 1), vu(2, 0), vv(3, 2), vu(4, 1), vv(5, 2, "Trebuchet MS", 1), vu(6, 0), vu(7, 0, 0), vu(8, 0), vu(9, 1, 1), vu(10, 1), vu(11, 1, 1), vv(12, 2, navigator.language), vu(13), vu(14), vw(100), vv(100, 2), vv(101, 2),
			vv(102, 2), vv(103, 2), vv(104, 2), vv(105, 2), vv(106, 2), vu(107), vu(108), vu(109), vv(110, 2), vu(111), vu(112), vu(113), vv(114, 2), vu(115), vv(116, 2), vu(117, 1), vv(118, 2, "", 2), vu(119, 1, 0, 1), vv(120, 2), vu(121, 1, ~~(
				262144 * Math.random())), vv(122, 2, "Player " + Math.floor(1e3 * Math.random())), vu(123), vv(124), vu(125, 1), vv(126, 2), vu(127, 0, 1), vu(128), vu(129), vu(130), vu(131), vu(132), vv(133, 2), vu(134, 0, 5), vv(135, 2), vv(
				136, 2), vu(137), vu(138), vu(139), vu(140), vu(141), vu(142), vu(143), vu(144), vv(145, 2), vu(146), vu(147), vv(148, 2), vu(149), vu(150, 0, 1), vv(151, 2), vu(152, 0, 5), vu(153, 1), vu(154, 1), vv(155, 2), vv(156, 2), vu(157),
			vu(158), vu(159), vu(160), vv(161, 2), vu(162, 0, 1024), vv(163, 2, "0,0,0"), vv(164, 2, "100,100,100"), vv(165, 2, "30,30,30"), vv(166, 2, "70,70,70"), vv(167, 2, "100,100,100"), vv(168, 2, "85,85,85"), vv(169, 2, "100,100,100");
		for (var aB = 0; aB < 4; aB++) vv(170 + aB, 2, "255,255,255");
		vv(174, 2), vv(175, 2), vu(176, 0, 200), vw(180), vu(180, 0), vu(181, 0)
	}, this.sH = function(eA, value) {
		this.data[eA].value = value
	}, this.vx = function(eA, value) {
		this.sH(eA, value);
		var value = String(value),
			f2 = value.length;
		5e4 < f2 ? console.log("storage value too large: index " + eA + " size " + f2) : (bj.r5.save(eA, value), bj.r5.save(eA, String(this.data[eA].dv), !0))
	}, this.vy = function(eA) {
		return Number(this.data[eA].value)
	}, this.vz = function(eA) {
		return String(this.data[eA].value)
	}
}

function vr() {
	var w1 = [];

	function w5(t3) {
		w1.unshift(t3), bj.sG.sH(161, w1.join(";"))
	}

	function w4(t3) {
		for (var w7 = w1, f2 = w7.length, aB = 0; aB < f2; aB++)
			if (w7[aB] === t3) return w7.splice(aB, 1), bj.sG.sH(161, w7.join(";")), 1
	}
	this.dd = function() {
		var qV = bj.eO.data[161].value;
		qV.length && (w1 = qV.split(";"))
	}, this.get = function() {
		return w1
	}, this.w2 = function() {
		return {
			vB: w1,
			value: 0
		}
	}, this.uN = function(t3) {
		return bA.qw.has(w1, t3)
	}, this.w3 = function(t3) {
		return w4(t3) ? 0 : (w5(t3), 1)
	}, this.mi = function(t3) {
		w4(t3) && w5(t3)
	}, this.w6 = function(eA) {
		eA < w1.length && (w1.splice(eA, 1), bj.sG.sH(161, w1.join(";")))
	}
}

function vm() {
	this.w8 = function(eA, dv) {
		return Number(this.w9(eA, dv))
	}, this.w9 = function(eA, dv) {
		var fT = null;
		return 0 === a0.id ? a0.wA && (fT = a0.wA.getItem((dv ? "v" : "d") + eA)) : 1 === a0.id ? fT = a0.wB.loadString((dv ? 1e3 : 2e3) + eA) : 2 === a0.id && (fT = a0.wC[(dv ? "v" : "d") + eA]), fT && 0 !== fT.length ? fT : null
	}, this.wD = function(f2, wE) {
		var g = [],
			wF = wE ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wA)
				for (aB = 0; aB < f2; aB++) g.push(a0.wA.getItem(wF + aB))
		} else if (1 === a0.id)
			for (var wG = wE ? 5e3 : 3e3, aB = 0; aB < f2; aB++) g.push(a0.wB.loadString(wG + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < f2; aB++) g.push(a0.wC[wF + aB]);
		return g
	}, this.save = function(eA, value, dv) {
		var wH = (dv ? "v" : "d") + eA;
		if (0 === a0.id) {
			if (a0.wA && bj.eO.data[140].value) try {
				a0.wA.setItem(wH, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.wB.saveString((dv ? 1e3 : 2e3) + eA, value) : 2 === a0.id && (a0.wC[wH] = value, a0.wI.postMessage(wH + " " + value))
	}, this.wJ = function(g, wE) {
		var f2 = g.length,
			wF = wE ? "e" : "l";
		if (0 === a0.id) {
			if (a0.wA && bj.eO.data[140].value) try {
				for (aB = 0; aB < f2; aB++) a0.wA.setItem(wF + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var wG = wE ? 5e3 : 3e3, aB = 0; aB < f2; aB++) a0.wB.saveString(wG + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < f2; aB++) a0.wC[wF + aB] = g[aB], a0.wI.postMessage(wF + aB + " " + g[aB])
	}
}

function vs() {
	this.dd = function() {
		! function() {
			var data = bj.eO.data;
			0 === data[2].dv && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].w0 = 1);
			0 === data[100].dv && (data[100].value = data[100].w0 = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, data = bj.eO.data,
			f2 = data.length;
		for (aB = 0; aB < f2; aB++) {
			var wM = bj.r5.w8(aB, !0);
			data[aB] && data[aB].dv === wM && (null === (wM = bj.r5.w9(aB)) ? data[aB].value = data[aB].w0 : 2 === data[aB].type ? data[aB].value = wM : (wM = Number(wM), isNaN(wM) ? data[aB].value = data[aB].w0 : data[aB].value = wM))
		}
	}
}

function vp() {
	function wR(g) {
		if (0 === g.length) bj.sG.sH(116, "");
		else {
			for (var wU = g[0], aB = 1; aB < g.length; aB++) wU += ";" + g[aB];
			bj.sG.sH(116, wU)
		}
	}
	this.wO = function() {
		bj.eO.data[110].value.length && (bj.eO.data[106].value = bj.eO.data[110], bj.sG.sH(110, ""), this.wP())
	}, this.wP = function() {
		var g = bj.eO.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eO.data[106].value), g.unshift(bj.eO.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var wQ = [], aB = 0; aB < g.length; aB += 2) wQ.push(g[aB]);
		wR(g), bj.eO.data[117].value = 0, bj.eO.data[117].vB = wQ
	}, this.wS = function(eA) {
		bj.eO.data[117].vB.splice(eA, 1), bj.eO.data[117].value = Math.min(eA, bj.eO.data[117].vB.length - 1);
		var g = bj.eO.data[116].value.split(";");
		g.splice(2 * eA, 2), wR(g)
	}, this.wT = function(eA) {
		var g = bj.eO.data[116].value.split(";");
		return {
			t3: g[2 * eA],
			password: g[2 * eA + 1]
		}
	}, this.wV = function() {
		var fT = bL.i9(bj.eO.data[121].value, -1, 262143);
		return fT = -1 === fT ? ~~(262144 * Math.random()) : fT
	}, this.vt = function() {
		for (var g = document.cookie.split(";"), aB = 0; aB < g.length; aB++) {
			var qV = g[aB].trim(),
				wW = qV.indexOf("="),
				wW = 0 <= wW ? qV.substring(0, wW) : qV;
			document.cookie = wW + "=;expires=0;path=/", document.cookie = wW + "=;expires=0;path=/;domain=" + location.hostname, document.cookie = wW + "=;expires=0;path=/;domain=." + location.hostname
		}
	}
}

function vo() {
	this.sH = function(eA, value) {
		2 !== bj.eO.data[eA].type && (value = Math.floor(value)), bj.eO.data[eA].value !== value && (bj.eO.vx(eA, value), 0 === eA ? (t.x(), b7.dd(), t.u(2)) : 1 === eA ? h.dn(1) : 2 === eA ? h.dn(0) : 5 === eA && (bA.qo.wX(), h.dn(0)))
	}, this.wY = function() {
		for (var data = bj.eO.data, aB = 0; aB < 100; aB++) data[aB] && bj.eO.vx(aB, data[aB].w0);
		bA.qo.wX(), h.dn(1)
	}, this.wZ = function() {
		for (var data = bj.eO.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eO.sH(aB, data[aB].w0)
	}, this.wa = function() {
		for (var fM = bj.eO, aB = 128; aB < 135; aB++) fM.vx(aB, fM.data[aB].w0)
	}, this.wb = function(data) {
		bj.sG.sH(109, data.t4), bj.sG.sH(107, data.wc), bj.sG.sH(108, data.wd), bj.sG.sH(112, data.we), bj.sG.sH(111, data.wf), bj.sG.sH(113, data.wg), bj.sG.sH(135, data.wh), bj.sG.sH(136, data.wi), bj.sG.sH(137, data.wj), bj.sG.sH(138, data
			.wk), bj.sG.sH(139, data.wl), bj.sG.sH(141, data.wm), bj.sG.sH(142, data.wn), bj.sG.sH(143, data.wo), bj.sG.sH(144, data.wp)
	}
}

function c4() {
	this.t8 = new wq, this.wr = new ws, this.wt = new wu, this.dd = function() {
		this.t8.dd()
	}
}

function ws() {
	this.wv = function(size) {
		for (var ww = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(ww.pw(16)));
		return g.join("")
	}, this.wx = function(qV) {
		return 20 < (qV = qV.trim()).length ? qV.substring(0, 20) : qV
	}
}

function wq() {
	var wy = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (wy[50] = 37, aB = 0; aB < 10; aB++) wy[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) wy[aB + 20] = aB + 11, wy[aB + 52] = aB + 38
	}, this.wz = function(qV) {
		return qV.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.x0 = function(qV, size) {
		if ((qV = this.wz(qV)).length > size) return qV.substring(0, size);
		for (; qV.length < size;) qV = "-" + qV;
		return qV
	}, this.x1 = function(qV) {
		for (var x2 = wy, f2 = qV.length, g = new Uint8Array(f2), aB = 0; aB < f2; aB++) g[aB] = x2[qV.charCodeAt(aB) - 45];
		return g
	}, this.x3 = function(x4) {
		bD.a7(6 * x4.length), this.x5(x4), bH.dd(bD.aC)
	}, this.x5 = function(x4) {
		for (var f2 = x4.length, i = bD, aB = 0; aB < f2; aB++) i.a8(6, x4[aB])
	}, this.x6 = function(qV) {
		this.x5(this.x1(qV))
	}, this.x7 = function(qV, size) {
		this.x5(this.x1(this.x0(qV, size)))
	}, this.x8 = function(qV, size) {
		for (var g = this.x1(this.x0(qV, size)), fT = 0, nX = 1, aB = g.length - 1; 0 <= aB; aB--) fT += nX * g[aB], nX *= 64;
		return fT
	}
}

function x9() {
	var i, j, xA;

	function xa(hT, f5, xY, xF, xT) {
		f5 = xZ(hT, f5 + 1 + 2 * xF & 3);
		! function(hT, kz) {
			return 1 < Math.abs(hT % i - kz % i) || 1 < Math.abs(xd(hT) - xd(kz))
		}(hT, f5) && 0 === xT[f5 << 2] && (xT[f5 << 2] = xY)
	}

	function xd(gZ) {
		return Math.floor((gZ + .5) / i) % j
	}

	function xZ(gZ, f5) {
		return gZ + xA[f5]
	}
	this.xB = function(qV) {
		var aB, xC, f2, xD, ww = bH;
		for (bG.t8.x3(bG.t8.x1(qV)), bS.xG.xH[bS.ei].i = bS.fD = i = ww.pw(12), bS.xG.xH[bS.ei].j = bS.fE = j = ww.pw(12), xA = [-i, -1, i, 1], bS.xQ = document.createElement("canvas"), bS.xQ.width = bS.fD, bS.xQ.height = bS.fE, bS.xM = bS.xQ
			.getContext("2d", {
				alpha: !1
			}), bS.xN = bS.xR = null, bS.xN = bS.xM.getImageData(0, 0, bS.fD, bS.fE), bS.xR = bS.xN.data, bA.qw.xS(bS.xR), f2 = ww.pw(12), xC = ww.pw(5), xD = xJ(i * j - 1), aB = 0; aB < f2; aB++) ! function(lH, gZ, xE, xF) {
			var aB, f5, ww = bH,
				xT = bS.xR,
				xU = gZ,
				xV = gZ,
				xW = 0,
				xX = 1 + xE,
				xY = 2 - xE;
			for (xT[gZ << 2] = xX, aB = 0; aB < lH; aB++) f5 = ww.pw(2), gZ = xZ(gZ, f5), xT[gZ << 2] === xX ? xW % 2 == 1 && xa(xV, xW + 2 * xF + 3, xY, xF, xT) : xT[gZ << 2] = xX, xa(gZ, f5, xY, xF, xT), xa(xV, f5, xY, xF, xT), xV = gZ,
				xW = f5;
			xZ(gZ, 0) === xU ? (xa(gZ, 0, xY, xF, xT), xa(xU, 0, xY, xF, xT)) : xZ(gZ, 1) === xU && (xa(gZ, 0, xY, xF, xT), xa(xU, 2, xY, xF, xT));
			0 === lH && (xa(xU, 0, xY, xF, xT), xa(xU, 2, xY, xF, xT))
		}(ww.pw(xC), ww.pw(xD), 1 === ww.pw(1), 1 === ww.pw(1));
		var f9, fB, ht, xe, xf, xg, xT = bS.xR,
			xh = !0,
			xi = bS.xG.xH[bS.ei].xi,
			xj = bS.xG.xH[bS.ei].xj;
		for (fB = 0; fB < j; fB++)
			for (xe = !0, xf = xh, f9 = xg = 0; f9 < i; f9++) ht = 4 * fB * i + 4 * f9, xg <= f9 && 0 < xT[ht] && (xf = 2 === xT[ht], xe) && (xe = !1, xf !== xh) ? (xh = xf, xg = f9 + 1, f9 = -1) : (xf ? (xT[ht] = xj[0], xT[1 + ht] = xj[1], xT[
				2 + ht] = xj[2]) : (xT[ht] = xi[0], xT[1 + ht] = xi[1], xT[2 + ht] = xi[2]), xT[3 + ht] = 255);
		bS.xM.putImageData(bS.xN, 0, 0), bS.xO = !0, bS.xP.dd(), bf.dk = !0
	}
}

function wu() {
	this.xB = function(xk) {
		for (var ww = bH, size = ww.pw(xk), xl = 7 + 9 * ww.pw(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(ww.pw(xl)));
		return g.join("")
	}
}

function c9() {
	var sZ, sa, xm, xn, xo, xp, xq, xr, xs, xt;

	function xv() {
		var xy = aD.xy;
		for (xs = xy; xs < aD.ez; xs++) xu();
		for (xs = aD.hP ? aD.kM : 0; xs < xy; xs++) {
			if (!xz()) {
				for (var fM = aD.y3 = xs; fM < xy; fM++) xs = fM, xu();
				return
			}
			y2(xp + sZ * xo + bL.dt(xo, 2), xq + sa * xo + bL.dt(xo, 2))
		}
	}

	function yV(player) {
		for (var iu = ag.iu, iw = ag.iw, iv = ag.iv, ix = ag.ix, fB = iw[player]; fB <= ix[player]; fB++)
			for (var f9 = iu[player]; f9 <= iv[player]; f9++) {
				var eg = ac.yW(f9, fB);
				ac.gb(eg) && (ac.jX(eg) ? ac.gW(eg, player) : ac.yX(eg, player))
			}
	}

	function yU(g, tP, tQ) {
		var ds = g[tP];
		g[tP] = g[tQ], g[tQ] = ds
	}

	function xz() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sZ = bL.dt(xm * ay.random(), ay.value(100)), sa = bL.dt(xn * ay.random(), ay.value(100)), yc()) return 1;
			return
		}() || function() {
			var iL, iO, fL, y1, fM, y0;
			for (iL = bL.dt(xm * ay.random(), ay.value(100)), iO = bL.dt(xn * ay.random(), ay.value(100)), fL = 40; 1 <= fL; fL--)
				for (y1 = xn - fL; 0 <= y1; y1 -= 40)
					for (sa = (y1 + iO) % xn, fM = 40; 1 <= fM; fM--)
						for (y0 = xm - fM; 0 <= y0; y0 -= 40)
							if (sZ = (y0 + iL) % xm, yc()) return 1;
			return
		}()
	}

	function yc() {
		for (var gZ, ye, gap = bL.dt(xo - xr, 2), yf = xq + sa * xo + gap, yg = xp + sZ * xo + gap, yd = yf + xr - 1; yf <= yd; yd--)
			for (ye = yg + xr - 1; yg <= ye; ye--)
				if (gZ = ac.yW(ye, yd), !ac.ex(gZ) || ac.jX(gZ)) return;
		return 1
	}

	function y2(y0, y1) {
		xu(), yh(y0 - 2, y1 - 2)
	}

	function xu() {
		ag.mv[xs] = 0, ag.gp[xs] = ag.yS[xs] = 0, ag.gT[xs] = [], ag.gh[xs] = [], ag.gi[xs] = [], ag.fR[xs] = [], ag.iu[xs] = ag.iw[xs] = ag.iv[xs] = ag.ix[xs] = 0
	}

	function yh(y0, y1) {
		var gZ, aB, yi, yj;
		for (ag.mv[xs] = 1, ag.iu[xs] = y0 + 10, ag.iw[xs] = y1 + 10, ag.ix[xs] = ag.iv[xs] = 0, yi = y0; yi < y0 + 4; yi++)
			for (yj = y1; yj < y1 + 4; yj++)(y0 < yi && yi < y0 + 3 || y1 < yj && yj < y1 + 3) && (gZ = ac.yW(yi, yj), ac.ex(gZ)) && (ag.iu[xs] = Math.min(yi, ag.iu[xs]), ag.iv[xs] = Math.max(yi, ag.iv[xs]), ag.iw[xs] = Math.min(yj, ag.iw[xs]), ag
				.ix[xs] = Math.max(yj, ag.ix[xs]), xt[ag.gp[xs]] = gZ, ag.gp[xs]++, ac.yX(gZ, xs));
		for (ag.yS[xs] = ag.gp[xs], aB = ag.gp[xs] - 1; 0 <= aB; aB--) ac.yk(xt[aB], xs) ? (ac.gW(xt[aB], xs), ag.gh[xs].push(xt[aB])) : ac.yl(xt[aB]) ? (ac.gW(xt[aB], xs), ag.gi[xs].push(xt[aB])) : ac.ym(xt[aB]) && (ac.gW(xt[aB], xs), ag.fR[xs]
			.push(xt[aB]))
	}
	this.dd = function() {
		if (xt = new Array(12), xr = 6, xo = 10, xm = bL.dt(bS.fD, xo), xn = bL.dt(bS.fE, xo), xp = bL.dt(bS.fD - xo * xm, 2), xq = bL.dt(bS.fE - xo * xn, 2), aD.hP)
			for (var aB = 0; aB < aD.kM; aB++) xs = aB, xu(), ag.mv[xs] = 1;
		(0 === aD.data.spawningType ? xv : 1 === aD.data.spawningType ? (xv(), function() {
			var y4 = aD.y5;
			aD.y6 || y4++;
			if (!(y4 < 3)) {
				for (var data = aD.data, jc = (aD.hP ? aD.kM : 0) + data.teamPlayerCount[0], nd = aD.y3, y7 = new Uint32Array(y4), y8 = new Uint32Array(y4), y9 = new Uint16Array(y4), yA = new Uint16Array(y4), f0 = bg.f0, iu = ag.iu, iw =
						ag.iw, iv = ag.iv, ix = ag.ix, fg = bO.fg, fh = bO.fh, aB = jc; aB < nd; aB++) fg[aB] = iu[aB] + iv[aB] >> 1, fh[aB] = iw[aB] + ix[aB] >> 1;
				for (aB = jc; aB < nd; aB++) {
					var id = f0[aB];
					y7[id] += fg[aB], y8[id] += fh[aB]
				}
				var kj = bg.kj;
				for (aB = 1; aB < y4; aB++) {
					var gU = Math.max(data.teamPlayerCount[kj[aB]], 1);
					y9[aB] = bL.dt(y7[aB], gU), yA[aB] = bL.dt(y8[aB], gU)
				}
				var yB = bg.yB,
					yC = bg.yC,
					yD = bg.yD,
					ff = bO.ff;
				for (aB = 0; aB < 512; aB++) ff[aB] = aB;
				for (var e9 = 0; e9 < 2 + (4 <= y4); e9++)
					for (aB = jc; aB < nd; aB++) {
						for (var hT = aB, yE = ff[hT], yF = 1, fI = bL.yG(fg[yE] - y9[1], fh[yE] - yA[1]), fL = 2; fL < y4; fL++) {
							var yH = bL.yG(fg[yE] - y9[fL], fh[yE] - yA[fL]);
							yH < fI && (fI = yH, yF = fL)
						}
						var yI = f0[hT];
						if (yF !== yI) {
							if (2 === e9 && 4 <= y4) {
								var yJ = Math.max((yF + 1) % y4, 1),
									yK = bL.yG(fg[yE] - y9[yJ], fh[yE] - yA[yJ]);
								for (fL = 1; fL < y4; fL++) yH = bL.yG(fg[yE] - y9[fL], fh[yE] - yA[fL]), fI < yH && yH < yK && (yK = yH, yJ = fL);
								yJ !== yI && bL.yG(y9[yI] - y9[yJ], yA[yI] - yA[yJ]) < bL.yG(y9[yI] - y9[yF], yA[yI] - yA[yF]) && (yF = yJ)
							}
							var yL = kj[yF],
								yM = yC[yL] + (aD.hP ? 0 : yD[yL]),
								kz = yB[yM],
								yN = ff[kz],
								yO = yC[yL + 1];
							fI = bL.yG(fg[yN] - y9[yI], fh[yN] - yA[yI]);
							for (var ea = yM + 1; ea < yO; ea++) {
								var yP = yB[ea],
									yQ = ff[yP];
								(yH = bL.yG(fg[yQ] - y9[yI], fh[yQ] - yA[yI])) < fI && (fI = yH, kz = yP)
							}
							kz < jc || nd <= kz || (yN = ff[kz], y7[yI] += fg[yN] - fg[yE], y8[yI] += fh[yN] - fh[yE], y7[yF] += fg[yE] - fg[yN], y8[yF] += fh[yE] - fh[yN], gU = data.teamPlayerCount[kj[yI]], y9[yI] = bL.dt(y7[yI], gU),
								yA[yI] = bL.dt(y8[yI], gU), gU = data.teamPlayerCount[yL], y9[yF] = bL.dt(y7[yF], gU), yA[yF] = bL.dt(y8[yF], gU), ff[hT] = yN, ff[kz] = yE)
						}
					}! function() {
						for (var ff = bO.ff, iu = ag.iu, iw = ag.iw, iv = ag.iv, ix = ag.ix, gp = ag.gp, yS = ag.yS, gh = ag.gh, gi = ag.gi, fR = ag.fR, aB = 0; aB < 512; aB++) {
							var yT = ff[aB];
							if (yT !== aB) {
								yU(iu, aB, yT), yU(iw, aB, yT), yU(iv, aB, yT), yU(ix, aB, yT), yU(gp, aB, yT), yU(yS, aB, yT), yU(gh, aB, yT), yU(gi, aB, yT), yU(fR, aB, yT), yV(aB), yV(yT), ff[aB] = aB;
								for (var j = yT, ga = ff[j]; ga !== aB;) ga = ff[j = ga];
								ff[j] = yT
							}
						}
					}()
			}
		}) : function() {
			var xy = aD.xy;
			for (xs = xy; xs < aD.ez; xs++) xu();
			for (xs = aD.hP ? aD.kM : 0; xs < xy; xs++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							y0 = spawningData[2 * xs] + 1,
							spawningData = spawningData[2 * xs + 1] + 1;
						if (3 < y0 && y0 < bS.fD - 5 && 3 < spawningData && spawningData < bS.fE - 5 && ac.ex(ac.yW(y0, spawningData)) && function(y0, y1) {
								var gZ, ye, yd;
								for (yd = y1; y1 - 6 < yd; yd--)
									for (ye = y0; y0 - 6 < ye; ye--)
										if (gZ = ac.yW(ye, yd), ac.jX(gZ)) return;
								return 1
							}(y0 + 3, spawningData + 3)) return y2(y0 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!xz()) {
						for (var fM = aD.y3 = xs; fM < xy; fM++) xs = fM, xu();
						return
					}
					var y0 = xp + sZ * xo + bL.dt(xo, 2),
						y1 = xq + sa * xo + bL.dt(xo, 2);
					y2(y0, y1)
				}
		})(), bd.mr[7] = ag.gp[aD.em]
	}, this.yn = function(jV, yo, yp) {
		var aB, y0, y1, gZ, sZ, sa;
		for (xs = jV, aB = 0; aB < 20; aB++)
			for (y0 = yo + aB; yo - aB <= y0; y0--)
				for (y1 = yp + aB; yp - aB <= y1; y1--)
					if ((y0 === yo + aB || y0 === yo - aB || y1 === yp + aB || y1 === yp - aB) && 3 < y0 && y0 < bS.fD - 5 && 3 < y1 && y1 < bS.fE - 5 && ac.ex(ac.yW(y0, y1)) && function(y0, y1) {
							var gZ, ye, yd;
							for (yd = y1; y1 - 6 < yd; yd--)
								for (ye = y0; y0 - 6 < ye; ye--)
									if (gZ = ac.yW(ye, yd), ac.jX(gZ) && !ac.yv(xs, gZ)) return;
							return 1
						}(y0 + 3, y1 + 3)) {
						if (0 < ag.gp[xs]) {
							for (sa = sZ = gZ = void 0, sZ = ag.iv[xs]; sZ >= ag.iu[xs]; sZ--)
								for (sa = ag.ix[xs]; sa >= ag.iw[xs]; sa--) gZ = 4 * (sa * bS.fD + sZ), ac.ys(xs, gZ) && (ac.yt(gZ), ag.gp[xs]--);
							xu()
						}
						return yh(y0 - 1, y1 - 1), !0
					} return !1
	}, this.yu = function(jV) {
		xs = jV, xz() ? y2(xp + sZ * xo + bL.dt(xo, 2), xq + sa * xo + bL.dt(xo, 2)) : xu()
	}
}

function yw() {
	at.yx(), vS.setTransform(iC, 0, 0, iC, 0, 0), vS.imageSmoothingEnabled = iC < 3, vS.drawImage(bS.xQ, aS.yy(), aS.yz()), bP.z0.vR(), vS.drawImage(z1, aS.yy(), aS.yz()), at.vR(), bN.vR(), af.vR(), (aD.nO ? (bh.vR(), bC) : (aN.vR(), aV.vR(), aR
	.vR(), bC.vR(), aw.vR(), aW.vR(), aS.vR(), aQ.vR(), bh.vR(), aU.vR(), aP.vR(), aM.vR(), aL.vR(), aX.vR(), be.vR(), av)).vR(), t.vR()
}

function z2(z3, i, j) {
	z3.clearRect(0, 0, i, j), z3.fillStyle = bB.ns, z3.fillRect(0, 0, i, j)
}

function z4(z3, i, j, z5) {
	z3.fillStyle = bB.nv, z3.fillRect(0, 0, i, z5), z3.fillRect(0, 0, z5, j), z3.fillRect(i - z5, 0, z5, j), z3.fillRect(0, j - z5, i, z5)
}

function z6(z3, f9, fB, hx, z5, gZ, z7) {
	z3.fillStyle = bB.nv;
	var gZ = Math.floor(hx * gZ),
		tD = (gZ += (gZ - z5) % 2, Math.floor((gZ - z5) / 2)),
		hx = Math.floor((hx - gZ) / 2);
	z3.fillRect(f9 + hx, fB + hx + tD, gZ, z5), z7 && z3.fillRect(f9 + hx + tD, fB + hx, z5, gZ)
}

function z9() {
	this.dd = function() {
		8 === aD.ke && aN.zA()
	}, this.zB = function(zC) {
		var elo = aD.data.elo,
			jb = (elo[zC] - elo[1 - zC]) / 10,
			jb = 8 / (1 + Math.pow(2, jb / 32)),
			jb = Math.floor(10 * jb + .5),
			zE = elo[zC] + jb,
			zE = this.zG(zE),
			elo = this.zG(elo[1 - zC] - jb);
		0 === zC ? aN.zI(zE, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.zI(elo, zE, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.zG = function(elo) {
		return 16e3 === (elo = bL.i9(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.s4 = new zJ, this.xT = new zK
}

function zK() {
	this.hn = !1;
	this.zO = [], this.zP = 100;
	var nL, nM, gap, hx, zL, zN, zQ = 0,
		zR = new Array(9),
		zS = [],
		zT = [],
		zU = 0,
		zV = 0,
		zW = 0,
		zX = 0;

	function zj() {
		zR.sort(function(fL, fM) {
			return fM.kR - fL.kR
		});
		for (var qV = "" + zR[0].pX, aB = 1; aB < 9; aB++) qV += "," + zR[aB].pX;
		for (aB = 0; aB < 9; aB++) qV += "," + zR[aB].kR;
		bj.eO.vx(120, qV)
	}
	this.dd = function() {
		for (var zY = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < zY.length; aB++) {
			var color = 6 === zY[aB] ? bB.oL : bB.nt;
			this.zO.push(bA.canvas.zZ(ab.get(3), zY[aB], color))
		}
		for (aB = 0; aB < aj.s4.za; aB++) zT.push(aj.s4.zb - aj.s4.za + aB);
		for (aB = 0; aB < aj.s4.zc; aB++) zT.push(aj.s4.zd + aB);
		var ze = aj.s4.zf(bK.ze);
		for (aB = 0; aB < ze.length; aB++) zT.push(ze[aB]);
		! function() {
			var aB, g = bj.eO.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) zR[aB] = {
					pX: 1015 + aB,
					kR: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fT = parseInt(g[aB]),
						ea = (fT = 0 <= fT && fT < aj.s4.zb ? fT : 0, parseInt(g[aB + 9]));
					ea = 0 <= ea && ea < 1e3 ? ea : 0, zR[aB] = {
						pX: fT,
						kR: ea
					}
				}
		}()
	}, this.show = function(lb, lc, zk) {
		var aB;
		if (zU = lb, zV = lc, zQ = zk || 0, this.hn = !0, zS = [], 0 === zQ)
			for (aB = 0; aB < 9; aB++) zS.push(zR[aB].pX);
		else {
			var fM = 49 * zQ,
				zk = fM - 49;
			for (zk >= zT.length && (zQ = 1, zk = 0, fM = 49), aB = zk = (fM = Math.min(fM, zT.length)) - 49; aB < fM; aB++) zS.push(zT[aB])
		}
		zS.push(1024);
		zk = zS.length, hx = Math.floor((a0.a1.iA() ? .075 : .0468) * h.iB), gap = Math.floor(hx / 3), (zW = 10 * (zL = hx + gap)) > h.i && (zW = h.i, gap = (zL = zW / 10) - (hx = 3 * zL / 4)), zN = bL.dt(zk, 10) + !!(zk % 10), (zX = zN * zL) > h
			.j && (zX = h.j, gap = (zL = zX / zN) - (hx = 3 * zL / 4)), zk = .5 * gap;
		nL = Math.min(Math.max(lb - .5 * zW + zk, zk), h.i - zW + zk), nM = Math.min(Math.max(lc - .5 * zX + zk, zk), h.j - zX + zk)
	}, this.hE = function(lb, lc, player) {
		if (!this.hn) return !1;
		if (this.zm(lb, lc)) {
			lb = bL.i9(bL.dt(lb - nL + .5 * gap, zL), 0, 9);
			if ((lb += 10 * bL.i9(bL.dt(lc - nM + .5 * gap, zL), 0, 9)) >= zS.length) return aL.s5(), !0;
			lc = zS[lb];
			if (1024 === lc) return this.show(zU, zV, zQ + 1), !0;
			! function(pX) {
				for (var aB = 0; aB < 9; aB++) zR[aB].kR = Math.floor(.99 * zR[aB].kR);
				for (aB = 0; aB < 9; aB++)
					if (pX === zR[aB].pX) return zR[aB].kR = Math.min(zR[aB].kR + 30, 999), zj();
				zR.splice(5, 0, {
					pX: pX,
					kR: Math.max(zR[4].kR, 30)
				}), zR.pop(), zj()
			}(lc), player === aD.em ? b8.hR.pW(lc) : b8.gN.pl(lc, player)
		}
		return aL.s5(), !0
	}, this.zm = function(lb, lc) {
		return !(lb < nL - .5 * gap || lc < nM - .5 * gap || nL + zW - .5 * gap <= lb || nM + zX - .5 * gap <= lc)
	}, this.vR = function() {
		vS.fillStyle = bB.ns, vS.fillRect(nL - .5 * gap, nM - .5 * gap, zW, zX);
		for (var ht = .5 * bc.zn, f2 = (vS.lineWidth = bc.zn, vS.strokeStyle = vS.fillStyle = bB.nv, vS.strokeRect(nL - .5 * gap + ht, nM - .5 * gap + ht, zW - 2 * ht, zX - 2 * ht), vS.imageSmoothingEnabled = !0, zS.length), aB = 0; aB <
			f2; aB++) this.zo(zS[aB], vS, nL + aB % 10 * zL, nM + bL.dt(aB, 10) * zL, hx);
		vS.imageSmoothingEnabled = !1
	}, this.zo = function(pX, i3, f9, fB, hx) {
		var eg;
		pX >= 1024 - aj.s4.za ? (eg = hx / this.zP, i3.setTransform(eg, 0, 0, eg, f9, fB), i3.drawImage(this.zO[pX - 1024 + aj.s4.za], 0, 0), i3.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qo.textAlign(i3, 1), bA.qo.textBaseline(i3, 1), i3.font = bA.qo
			.sf(0, .89 * hx), i3.fillText(aj.s4.zp(pX), f9 + .5 * hx, fB + (.35 - bA.qo.zq + .56) * hx))
	}
}

function zJ() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.za = 13, this.zc = this.emojis.length, this.zd = 676, this.zb = 1024, this.zr = this.emojis.indexOf("💀"), this.zs = this.zr + 1, this.zt = this.emojis.indexOf("🥇"), this.zu = this.emojis.indexOf("😊"), this.zp = function(fT) {
		return fT < this.zd ? String.fromCharCode(55356, 56806 + bL.dt(fT, 26), 55356, 56806 + fT % 26) : this.emojis[Math.min(fT - this.zd, this.zc - 1)]
	}, this.zf = function(qV) {
		for (var f2 = qV.length - 2, g = [], aB = 0; aB < f2; aB++) {
			var zv = qV.charCodeAt(aB) - 56806,
				zw = qV.charCodeAt(aB + 2) - 56806;
			0 <= zv && zv < 26 && 0 <= zw && zw < 26 && (g.push(26 * zv + zw), aB += 3)
		}
		return g
	}, this.zx = function(fT) {
		return fT < this.zd
	}, this.zy = function(fT) {
		return fT >= 1024 - this.za
	}, this.zz = function(fT) {
		return fT >= this.zd && fT < this.zd + this.zs
	}
}

function c3() {
	this.t8 = new a00, this.wr = new a01, this.wt = new a02, this.dd = function() {
		this.t8.dd()
	}
}

function a01() {
	this.x6 = function(qV) {
		for (var f2 = qV.length, i = bD, aB = 0; aB < f2; aB++) i.a8(16, qV.charCodeAt(aB))
	}
}

function a00() {
	var a03 = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (a03[0] = 45, a03[37] = 95, aB = 0; aB < 10; aB++) a03[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) a03[aB + 11] = 65 + aB, a03[aB + 38] = 97 + aB
	}, this.tA = function(a04) {
		for (var ww = bH, x4 = new Uint8Array(a04), aB = 0; aB < a04; aB++) x4[aB] = ww.pw(6);
		return x4
	}, this.t9 = function(x4) {
		for (var f2 = x4.length, a05 = a03, g = [], aB = 0; aB < f2; aB++) g.push(String.fromCharCode(a05[x4[aB]]));
		return g.join("")
	}, this.a06 = function(value, a07) {
		for (var a05 = a03, g = [], aB = 0; aB < a07; aB++) g.push(String.fromCharCode(a05[value >> 6 * (a07 - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var a08, a09, a0A;
	a08 = [32, 65, 191, 913, 931], a09 = [64, 127, 688, 930, 1155], a0A = new Array(a08.length + 1);
	for (var aB = 0; aB < a0A.length; aB++) {
		a0A[aB] = 0;
		for (var fL = aB - 1; 0 <= fL; fL--) a0A[aB] += a09[fL] - a08[fL]
	}

	function a0G(ea) {
		for (var aB = a08.length - 1; 0 <= aB; aB--)
			if (ea >= a08[aB] && ea < a09[aB]) return aB;
		return -1
	}
	this.wx = function(qV) {
		return 0 !== (qV = qV.trim()).indexOf("Bot ") && 0 !== qV.indexOf("[Bot] ") && function(qV, a0D, a0E) {
			var f2 = (qV = qV.trim()).length;
			if (f2 < a0D || a0E < f2) return !1;
			for (var ea, a0F = 0, aB = 0; aB < f2; aB++)
				if (ea = qV.charCodeAt(aB), a0F += 65 <= ea && ea <= 90 || 1040 <= ea && ea <= 1071 ? 1 : 0, -1 === a0G(ea)) return !1;
			if (3 < a0F && a0F > Math.floor(f2 / 2)) return !1;
			return !0
		}(qV, 3, 20)
	}, this.a0H = function(qV) {
		for (var f2 = (qV = qV.trim()).length, g = [], aB = 0; aB < f2; aB++) {
			var ea, gZ = a0G(ea = qV.charCodeAt(aB));
			g.push(a0A[gZ] + ea - a08[gZ])
		}
		return g
	}, this.xB = function(g) {
		for (var ea, fM, qV = "", f2 = g.length, aB = 0; aB < f2; aB++)
			for (fM = 1; fM < a0A.length; fM++)
				if (g[aB] < a0A[fM]) {
					ea = a08[fM - 1] + g[aB] - a0A[fM - 1], qV += String.fromCharCode(ea);
					break
				} return qV
	}, this.a0I = function(qV) {
		for (var g = this.a0H(qV), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.a0J = function(qV) {
		for (var g = new Array(Math.floor(qV.length / 3)), aB = 0; aB < qV.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qV.substring(aB, aB + 3));
		return this.xB(g)
	}, this.a0K = function(qV) {
		for (var fT, g = [qV.length], aB = 0; aB < qV.length; aB++) g[aB] = qV.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qV.length; aB++) aB === qV.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fT = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fT + (fT < 26 ? 65 : 71)), aB++);
		return result
	}, this.a0L = function(qV) {
		for (var ea, result = "", aB = 0; aB < qV.length; aB++) 48 <= (ea = qV.charCodeAt(aB)) && ea < 58 ? result += String.fromCharCode(ea) : 65 <= ea && ea < 75 ? result += "0" + (ea - 65).toString() : 75 <= ea && ea < 91 ? result += (ea - 65)
			.toString() : 97 <= ea && ea < 123 && (result += (ea - 71).toString());
		return result
	}, this.a0M = function(qV) {
		for (var f2 = qV.length, g = [], aB = 0; aB < f2; aB++)(ea = qV.charCodeAt(aB)) < 58 ? g.push(qV[aB]) : (ea -= ea < 91 ? 65 : 71, g.push(String(bL.dt(ea, 10))), g.push(String(ea - 10 * bL.dt(ea, 10))));
		var f2 = g.length - 2,
			ea = 0,
			x4 = [];
		for (aB = 0; aB < f2; aB += 3) x4[ea++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return x4
	}, this.a0N = function() {
		for (var e9, a0O = "", aB = 0; aB < 6; aB++) e9 = 48 + ay.random() % 36, e9 += 58 <= e9 ? 39 : 0, a0O += String.fromCharCode(e9);
		return a0O
	}
}

function a02() {
	this.a0H = function(qV, xk, a0P) {
		for (var a0Q = [], f2 = qV.length, max = 0, aB = 0; aB < f2; aB++) {
			var fT = qV.charCodeAt(aB);
			a0Q.push(fT), max = Math.max(max, fT)
		}
		var xl = max < 128 ? 7 : 16;
		for (a0P.a8(xk, f2), a0P.a8(1, +(16 == xl)), aB = 0; aB < f2; aB++) a0P.a8(xl, a0Q[aB])
	}
}

function dA() {
	this.a0R = new a0S, this.result = new a0T, this.a0U = new a0V, this.a0W = new a0X, this.a0Y = new a0Z, this.a0a = new a0b, this.dd = function() {
		this.result.dd()
	}
}

function a0V() {
	this.a0c = function() {
		for (var f2 = al.ks, a0d = al.kx, a0e = [], aB = 0; aB < f2; aB++) {
			var gZ = a0d[aB];
			bA.gN.a0f(gZ) && a0e.push(gZ)
		}
		return a0e
	}, this.a0g = function() {
		if (0 === bg.kj[aD.a0h]) return this.a0i();
		bh.kN(aD.a0h);
		for (var a0e = [], f2 = bO.fW[0], ff = bO.ff, aB = 0; aB < f2; aB++) {
			var gZ = ff[aB];
			bA.gN.a0f(gZ) && a0e.push(gZ)
		}
		return a0e
	}, this.a0i = function() {
		var gZ = lx[0];
		return bA.gN.a0f(gZ) ? [gZ] : []
	}, this.a0j = function(a0e) {
		for (var f2 = a0e.length, ds = 0, gp = ag.gp, aB = 0; aB < f2; aB++) ds += gp[a0e[aB]];
		return ds
	}
}

function a0S() {
	function a0l() {
		if (2 === aD.a0p) return 1;
		aw.a0q(), aD.a0p = 2, aD.a0r = aD.a0s
	}

	function a0n() {
		bR.a0Y.a0t(), aX.show(1 === aD.a0u, !1, 2 === aD.a0u), bR.result.a0t(), bR.a0a.eV(), bR.a0W.eV(), bR.a0W.a0v(), aN.a0w(!0), aN.a0x(247), aN.a0x(956), aN.a0x(957), aV.mh(!0), aW.mh(!0), aw.mh(), bC.a0y(), aD.hA && bf.a0z.a10(), bf.dk = !0, bb
			.a11(), a0.a1.setState(0)
	}
	this.a0k = function() {
		a0l() || (aD.a0m = 2, a0n())
	}, this.a0o = function() {
		a0l() || (aD.a0m = 1, a0n())
	}
}

function a0X() {
	this.eV = function() {
		var a19;
		2 === aD.a0m ? (aN.a12(0, 59), aH.nU(2700)) : aD.ke < 7 ? (a19 = bg.kj[aD.a0h], a19 = bg.a1B[a19], aQ.a1C(L(27, [a19]), 2, 1, 12), aN.a1D(0, L(28, [a19]), 40, 0, bB.nv, bB.ns, -1, !1), aH.nU(2700)) : 8 === aD.ke ? (aD.a0u ? aN.a12(aD.a17,
			2) : aN.a12(1 - aD.em, 3), aD.a18.zB(aD.a17), aH.nG(aD.a17, 2700, !1, 0)) : 9 === aD.ke ? (aN.a1E(), aH.nU(2700)) : (aN.a1F(aD.a17), aH.nG(aD.a17, 2700, !1, 0))
	}, this.a0v = function() {
		var qV;
		aD.hA || (qV = b0.y.a1G(), aD.ke < 7 ? qV += "/log/team" : 8 === aD.ke ? qV += "/log/1v1" : 9 === aD.ke ? qV += "/log/zombies" : qV += "/log/br", aN.a1D(720, qV, 736, 0, bB.nv, bB.oJ, -1, !1))
	}
}

function a0b() {
	function a1Q() {
		var tT;
		return 8 === aD.ke ? 0 : (tT = Math.floor(ag.a1R[aD.em] / 50), (tT = Math.min(tT, 200)) / 100)
	}

	function a1I() {
		var tT = a1Q();
		0 !== tT && aN.a1D(440, L(29, [tT.toFixed(2)]), 40, 0, bB.oD, bB.ns, -1, !1)
	}
	this.eV = function() {
		var a1J;
		0 === bR.result.a1H || 0 === bR.result.a0e.length || 8 === aD.ke ? bA.gN.hD(aD.em) && a1I() : (function(a1J) {
			7 !== aD.ke && 10 !== aD.ke || 0 !== aD.a0u && a1J && aN.a1D(600, L(33, [a1J.toFixed(2)]), 40, 0, bB.nv, bB.ns, -1, !1)
		}(a1J = function() {
			aN.a1D(520, L(30), 40, 0, bB.nv, bB.ns, -1, !1);
			for (var a0e = bR.result.a0e, f2 = a0e.length, gp = ag.gp, g = [], aB = 0; aB < f2; aB++) {
				var gZ = a0e[aB];
				g.push({
					gZ: gZ,
					ds: gp[gZ]
				})
			}
			g.sort((fL, fM) => fM.ds - fL.ds);
			var a1B = ag.a1S,
				ds = bR.result.a1T,
				tT = bR.result.a1H,
				qV = "",
				a1J = 0;
			for (aB = 0; aB < f2; aB++) {
				var hl = g[aB].ds * tT / (100 * ds),
					a1V = a1B[g[aB].gZ] + ": " + hl.toFixed(2) + "   ";
				g[aB].gZ === aD.em && (a1J = hl), 2 < aB && 4 !== f2 ? 3 === aB && (qV += "(" + L(31, [f2 - 3]) + ")") : qV += a1V
			}
			aN.a1D(560, bA.rn.a1W(qV), 40, 0, bB.oD, bB.ns, -1, !1), a1J ? aN.a1D(580, L(32, [a1J.toFixed(2) + " + " + a1Q().toFixed(2)]), 40, 0, bB.oD, bB.ns, -1, !1) : bA.gN.hD(aD.em) && a1I();
			return a1J
		}()), 2 === aD.a0m || 7 <= aD.ke || function(a1J) {
			var a0e = bR.result.a0e,
				f2 = a0e.length,
				a1X = ag.a1X,
				gp = ag.gp,
				a1Y = [];
			loop: for (var aB = 0; aB < f2; aB++) {
				var gZ = a0e[aB],
					a1Z = bA.rn.a1a(a1X[gZ]);
				if (null !== a1Z) {
					for (var a1b = gp[gZ], fM = a1Y.length - 1; 0 <= fM; fM--)
						if (a1Z === a1Y[fM].name) {
							a1Y[fM].ds += a1b, a1Y[fM].g.push({
								gZ: gZ,
								ds: a1b
							});
							continue loop
						} a1Y.push({
						name: a1Z,
						ds: a1b,
						g: [{
							gZ: gZ,
							ds: a1b
						}]
					})
				}
			}
			if (0 !== a1Y.length) {
				a1Y.sort((fL, fM) => fM.ds - fL.ds);
				var g = a1Y[0].g,
					a1c = (g.sort((fL, fM) => fM.ds - fL.ds), "[" + a1Y[0].name + "]"),
					a1d = 512 * bR.result.a1H / 26214400,
					lH = (aN.a1D(0, L(34, [a1c, a1d.toFixed(4)]), 40, 0, bB.nv, bB.ns, -1, !1), g.length),
					x2 = a1Y[0].ds,
					a1e = 1e4 * a1d;
				for (aB = 0; aB < lH; aB++)
					if (g[aB].gZ === aD.em) {
						aN.a1D(600, L(35, [(a1e * g[aB].ds / (10 * x2)).toFixed(2)]), 40, 0, bB.nv, bB.ns, -1, !1), aN.a1D(640, L(36, [(.2 * a1J).toFixed(2), a1c]), 40, 0, bB.nv, bB.ns, -1, !1);
						break
					}
			}
		}(a1J))
	}, this.a1N = function() {
		var a1O, xU;
		aD.kg || (a1O = ag, xU = aD.em, 0 === a1O.a1P[xU]) || a1O.jQ[xU] < 1 || 2 * a1O.qD[xU] > 3 * (a1O.jP[xU] + a1O.jQ[xU]) || a1I()
	}
}

function a0T() {
	this.dd = function() {
		this.a1f = 0, this.a0e = [], this.a1T = 0, this.a1H = 0
	}, this.a0t = function() {
		var sQ;
		aD.kg || (sQ = this, 2 === aD.a0m ? sQ.a0e = bR.a0U.a0c() : aD.hv ? sQ.a0e = bR.a0U.a0g() : sQ.a0e = bR.a0U.a0i(), sQ.a1f = bi.a1h.a1i(), sQ.a1T = Math.max(1, bR.a0U.a0j(sQ.a0e)), b8.gN.pu(), 8 === aD.ke ? bR.result.a1H = 0 : sQ.a1H =
			100 * bR.result.a1f * (1 + aD.a1k))
	}
}

function a0Z() {
	this.a0t = function() {
		if (2 === aD.a0m) aD.a0u = 2;
		else {
			if (8 === aD.ke) bA.gN.jj(0) || 0 === ag.mv[0] ? aD.a17 = 1 : bA.gN.jj(1) || 0 === ag.mv[1] ? aD.a17 = 0 : aD.a17 = +(ag.gp[1] > ag.gp[0]);
			else {
				if (aD.hv) {
					var ku = bh.a1m();
					if (aD.a0h = ku, bg.kj[ku]) return void(aD.a0u = +(bg.f0[aD.em] === ku))
				}
				aD.a17 = lx[0]
			}
			aD.a0u = +(aD.a17 === aD.em)
		}
	}
}

function dF() {
	this.id = 0, this.dv = 0, this.wA = null, this.wB = null, this.wC = null, this.wI = null, this.a1 = new a1n, this.dd = function() {
		var self, dv;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dv = Android.getVersion()) < 12 || (self.dv = dv, self.id = 1, self.wB = Android),
			function(self) {
				var dv;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.wC = mwIOSdataX, self.wI = window.webkit.messageHandlers.iosCommandA, dv = self
					.wC.version, self.dv = dv ? Number(dv) : 0)
			}(this),
			function(self) {
				var wA;
				try {
					if (!(wA = window.localStorage)) return;
					wA.setItem("tls7", "1"), wA.removeItem("tls7")
				} catch (error) {
					return
				}
				self.wA = wA
			}(this)
	}
}

function a1n() {
	this.a1r = function() {
		bj.sG.wY(), bj.sG.wZ(), b0.y.close(0, 3255), 0 === a0.id ? a0.wA && a0.wA.clear() : 1 === a0.id ? a0.wB.saveString(199, "") : 2 === a0.id && a0.wI.postMessage("clear")
	}, this.a1s = function() {
		2 === a0.id ? a0.wI.postMessage("showConsentForm") : 1 === a0.id && a0.wB.setState(7)
	}, this.a1t = function() {
		this.setState(14)
	}, this.iA = function() {
		return 1 === bj.eO.vy(2)
	}, this.a1u = function() {
		bj.eO.vx(102, "")
	}, this.setState = function(a1v) {
		1 === a0.id && 5 <= a0.dv && a0.wB.setState(a1v)
	}, this.a2 = function() {
		var a1w;
		1 === a0.id && 7 <= a0.dv ? a0.wB.setState(5) : ((a1w = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1w.toString())
	}, this.eM = function() {
		0 !== a0.id && (1 === a0.id ? a0.wB.prepareAd("8646194357") : 2 === a0.id && (0 === a0.dv ? a0.wI.postMessage("prepare ad 2904813909") : a0.wI.postMessage("loadAds 2904813909")))
	}, this.eS = function(ds) {
		return 0 !== a0.id && (1 === a0.id ? 12 <= a0.dv && (a0.wB.presentAd(ds), !0) : 2 === a0.id && 0 !== a0.dv && (a0.wI.postMessage("showAd"), !0))
	}, this.dm = function() {
		2 === a0.id && a0.dv < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1x + "' target='_blank'>" + bK
			.a1x + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oa)]))
	}
}

function dU() {
	function a20(e) {
		lg(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a23()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.oI)]))
	}

	function a2B(e) {
		lg(e), t.u(4, 5, new v(L(38), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a27(e), !0))
	}

	function a27(e) {
		var qV = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qV : 4527 === e ? "Player already in lobby" + qV : 4530 === e ? "Lobby Timeout" + qV : 4528 === e ? "Lobby Kick: Another login detected." + qV : 4540 === e ?
			"You have been kicked." + qV : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qV : 4555 === e ? "Invalid Account Error. Please Try Again." + qV : 4557 <= e && e <= 4560 ?
			"Please try again later!" + qV : "Unknown error" + qV
	}

	function lg(e) {
		a25(e), t.y.z()
	}

	function a25(e) {
		var a1v = aa.a24();
		6 === a1v ? b0.y.a2D(e) : bn.a21 ? (t.x(), bn.uV(), b0.y.close(b0.y.a22, 3256)) : 8 === a1v && aD.a2E(!0)
	}
	this.p = [], this.a1y = function(a1z, e) {
		if (1 === a1z && __fx.customLobby.isActive() && 6 !== aa.a24() && __fx.customLobby.setActive(!1), this.p.push(e), 8 === t.t5 && 0 === a1z)
			if (4211 === e) a20(e);
			else {
				if (bn.a21 && (4495 === e || 4480 === e) && b0.y.a22 !== a1z) return void t.a23();
				if (8 !== aa.a24() && a25(), 4480 === e) return bj.sG.wa(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a27(e), !0))
			}
		else {
			var a1v = aa.a24();
			if (6 === a1v) {
				if (4211 === e) return void a20(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560)) return void aZ.a28(a1z)
			} else {
				if (!bn.a21) return 8 === a1v ? void(a1z !== b0.y.a29 || aD.kg || 1 !== aD.a0p || aD.hA || aN.a2A(L(39, [e]))) : void 0;
				if (a1z !== b0.y.a22) return
			}
			a2B(e)
		}
	}, this.a2C = function(e) {
		this.p.push(e), 8 === aa.a24() ? aD.kg || 1 !== aD.a0p || aN.a2A(L(39, [e])) : a2B(e)
	}, this.s = function() {
		this.p.push(3268), lg(3268)
	}
}

function d4() {
	var a2F, a2G, a2H = -15e3,
		a2I = !1;

	function hE(e) {
		a2c() || (a2I = !0, a2d(e, 1), b0.y.a2e(b0.y.a29), a2f(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2R(e) {
		a2H = bf.eR, a2d(e, 1), b0.y.a2e(b0.y.a29), 0 < e.touches.length && (a2F = Math.floor(h.k * e.touches[0].clientX), a2G = Math.floor(h.k * e.touches[0].clientY), au.a2R(e) || a2f(a2F, a2G))
	}

	function a2f(f9, fB) {
		t.hE(f9, fB), 0 === aD.a0p ? aa.hE(f9, fB) : bC.a2g(f9, fB) || be.hE(f9, fB) || aX.hE(f9, fB) || aL.a2h(f9, fB) || aP.hE(f9, fB) || 0 <= aM.hE(f9, fB) || aw.hE(f9, fB) || bJ.a2i(f9, fB) || aL.a2j(f9, fB)
	}

	function a2N(e) {
		a2c() || (a2I = !0, a2d(e, 1), a2k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a2S(e) {
		a2H = bf.eR, a2d(e, 1), 0 < e.touches.length && (a2F = Math.floor(h.k * e.touches[0].clientX), a2G = Math.floor(h.k * e.touches[0].clientY), au.a2S(e) || a2k(a2F, a2G))
	}

	function a2k(f9, fB) {
		t.a2N(f9, fB), 0 === aD.a0p ? aa.a2N(f9, fB) : (bT.h8(f9, fB), be.a2N(f9, fB) || (aM.a2N(f9, fB), aL.hn() ? aL.a2N(f9, fB) : aR.hF ? aR.a2N(f9) && (bf.dk = !0) : (aV.a2N(f9, fB), aS.nQ && aS.a2N(f9, fB) && (bf.dk = !0))))
	}

	function a2P(e) {
		a2c() || (a2d(e, 1), a2l(), 0 === aD.a0p ? (aa.click(-1024, -1024), aT.rp()) : (aV.a2m(-1024, -1024), aM.a2N(-1024, -1024), aR.a2n(), aS.nQ = !1))
	}

	function a2O(e) {
		a2c() || (a2d(e, 1), a2o(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a2L && (bJ.a2L = !1, e.preventDefault()))
	}

	function click(e) {
		a2c() || a2d(e, 1)
	}

	function a2T(e) {
		a2H = bf.eR, a2d(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a0p ? aS.nQ = !1 : au.a2p() || (a2o(a2F, a2G, !1), bJ.a2L && (bJ.a2L = !1, e.preventDefault()))
	}

	function a2U(e) {
		a2H = bf.eR, a2d(e, 1), a2o(a2F, a2G, !1), bJ.a2L && (bJ.a2L = !1, e.preventDefault())
	}

	function a2V(e) {}

	function a2W(e) {}

	function a2X(e) {
		a2c() || a2d(e, 0)
	}

	function a2o(f9, fB, a2q) {
		a2l(), 0 === aD.a0p ? aa.click(f9, fB) : (aV.a2m(f9, fB), be.a2m(), aR.a2n(), aS.nQ = !1, aL.click(f9, fB, a2q) ? bf.dk = !0 : aM.a2O(f9, fB))
	}

	function a2l() {
		t.a2l()
	}

	function a2Q(e) {
		var f9, fB, deltaY;
		a2c() || (a2d(e, 1), b0.y.a2e(b0.y.a29), f9 = Math.floor(h.k * e.clientX), fB = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a2Q(f9, fB, deltaY), 0 === aD.a0p ? aa.a2Q(f9, fB, deltaY) : aV.a2Q(f9, fB,
			deltaY) || (aR.a2r(f9, fB) ? aR.a2Q(deltaY) && (bf.dk = !0) : aS.a2Q(f9, fB, deltaY)))
	}

	function a2Y(e) {
		a2d(e, 0)
	}

	function a2d(e, id) {
		0 === id && t.hn() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a24() && e.preventDefault()
	}

	function a2Z(e) {
		if (__fx.keybindHandler(e.key)) return;
		a2c() || 0 < h.sn || (e = e.code) && e.length && (bX.ea(e, 18) ? ar.a2t(3) : bX.ea(e, 22) ? ar.a2t(0) : bX.ea(e, 20) ? ar.a2t(1) : bX.ea(e, 24) ? ar.a2t(2) : bX.ea(e, 10) ? aR.a2u(31 / 32) : bX.ea(e, 8) ? aR.a2u(32 / 31) : bX.ea(e, 6) ? aR
			.a2u(7 / 8) : bX.ea(e, 4) ? aR.a2u(8 / 7) : bX.ea(e, 14) ? 0 !== aD.a0p && aS.a2Q(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.ea(e, 16) ? 0 !== aD.a0p && aS.a2Q(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.ea(e, 0) ?
			aD.a0p && bT.h9(0) : bX.ea(e, 2) ? aD.a0p && bT.h9(1) : bX.ea(e, 30) ? aD.a0p && bT.h9(2) : bX.ea(e, 26) ? aD.a0p && bT.hh() : bX.ea(e, 28) && aD.a0p && bT.hm())
	}

	function a2a(e) {
		if (!a2c() && !(0 < h.sn || bf.eR < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2v(1) || "Space" === code && t.a2v(0))) return bn.a21 ? bn.ub.a2v(code) ? void 0 : void("Escape" === code && bJ.fU()) : void(8 !== aa.a24() && aa.a2v(e) ? bf.dk = !0 : "Escape" ===
				code ? bJ.fU() : bX.ea(code, 18) ? ar.a2w(3) : bX.ea(code, 22) ? ar.a2w(0) : bX.ea(code, 20) ? ar.a2w(1) : bX.ea(code, 24) ? ar.a2w(2) : bX.ea(code, 12) ? bC.a2x(!aD.nO) : "Space" === code && aD.a0p && (aM.hB && aM.a2y(), aD
					.hA) && bC.a2z(!1))
		}
	}

	function a2b() {
		"hidden" !== document.visibilityState && (bf.dk = !0)
	}

	function a2c() {
		return a2H + 15e3 > bf.eR
	}

	function resize() {
		h.a31()
	}
	this.a2J = 0, this.a2K = "", this.a2L = !1, this.dd = function() {
		a2M.addEventListener("mousedown", hE, {
			passive: !1
		}), a2M.addEventListener("mousemove", a2N, {
			passive: !1
		}), a2M.addEventListener("mouseup", a2O, {
			passive: !1
		}), a2M.addEventListener("click", click, {
			passive: !1
		}), a2M.addEventListener("mouseleave", a2P, {
			passive: !1
		}), a2M.addEventListener("wheel", a2Q, {
			passive: !1
		}), a2M.addEventListener("touchstart", a2R, {
			passive: !1
		}), a2M.addEventListener("touchmove", a2S, {
			passive: !1
		}), a2M.addEventListener("touchend", a2T, {
			passive: !1
		}), a2M.addEventListener("touchcancel", a2U, {
			passive: !1
		}), a2M.addEventListener("dragover", a2V), a2M.addEventListener("drop", a2W), a2M.addEventListener("dblclick", a2X), document.addEventListener("contextmenu", a2Y), document.addEventListener("keydown", a2Z), document.addEventListener(
			"keyup", a2a), document.addEventListener("visibilitychange", a2b), window.addEventListener("resize", resize)
	}, this.a2i = function(f9, fB) {
		return !!bC.hE(f9, fB) || !!(aV.hE(f9, fB) || aS.hE(f9, fB) || aR.hE(f9, fB) || aN.hE(f9, fB))
	}, this.a30 = a2c, this.rG = function() {
		return !a2I || 0 < a2H
	}, this.fU = function() {
		if (!t.hn()) return 8 === aa.a24() ? aD.nO ? void bC.a2x(!1) : be.hn ? void be.a2y() : void aM.a2y() : void(7 !== aa.a24() && 6 === aa.a24() && aZ.a32());
		t.a2v(2)
	}
}

function bz() {
	this.qo = new a33, this.qw = new a34, this.gN = new a35, this.rn = new a36, this.z3 = new a37, this.a38 = new a39, this.canvas = new a3A, this.color = new a3B, this.a3C = new a3D, this.dd = function() {
		this.qo.wX()
	}
}

function a34() {
	this.xS = function(g) {
		g.fill(0)
	}, this.a3E = function(g) {
		for (var f2 = g.length, aB = 0; aB < f2; aB++) g[aB] = []
	}, this.a3F = function(zv, a3G) {
		for (var zw = bO.fb, aB = 0; aB < 3; aB++) zw[aB] = a3G * zv[aB];
		return zw
	}, this.a3H = function(zv, zw, a3I) {
		for (var jb = 0, aB = 0; aB < 3; aB++) jb += Math.abs(zv[aB] - zw[aB]);
		return a3I <= jb
	}, this.a3J = function(zv, a3K) {
		for (var aB = 0; aB < 3; aB++) zv[aB] = bL.i9(zv[aB] + a3K, 0, 255);
		return zv
	}, this.a3L = function(g, tP, tQ) {
		tQ = tQ || g.length - 1;
		for (var a3M = 0, aB = tP = tP || 0; aB <= tQ; aB++) a3M += g[aB];
		return a3M
	}, this.a3N = function(g, a3O) {
		for (var aB, a3P, f2 = g.length, a3Q = [], fL = f2 - 1; 0 <= fL; fL--) {
			for (aB = a3P = 0; aB < f2; aB++) a3O(g[aB]) < a3O(g[a3P]) && (a3P = aB);
			f2--, a3Q.push(g[a3P]), g[a3P] = g[f2], g.pop()
		}
		return a3Q
	}, this.min = function(g) {
		var aB, fT, f2 = g.length;
		if (0 === f2) return 0;
		for (fT = g[0], aB = 1; aB < f2; aB++) fT = Math.min(fT, g[aB]);
		return fT
	}, this.max = function(g) {
		var f2 = g.length;
		if (0 === f2) return 0;
		for (var fT = g[0], aB = 1; aB < f2; aB++) fT = Math.max(fT, g[aB]);
		return fT
	}, this.a3R = function(g, fT) {
		for (var f2 = g.length, gU = 0, aB = 0; aB < f2; aB++) gU += g[aB] > fT;
		return gU
	}, this.a3S = function(a3T, a3U, min) {
		for (var f2 = a3U[0], aB = f2 - 1; 0 <= aB; aB--) a3T[aB] < min && (a3T[aB] = a3T[--f2]);
		a3U[0] = f2
	}, this.a3V = function(g, f2, value) {
		for (var aB = 0; aB < f2; aB++) g[aB] -= value
	}, this.a3W = function(g) {
		for (var f2 = g.length, aB = 0; aB < f2; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a3X = function(qV, g, a3Y) {
		g.fill(0);
		for (var tT = qV.split(","), f2 = Math.min(tT.length, g.length), aB = 0; aB < f2; aB++) g[aB] = Math.min(parseInt(tT[aB]), a3Y)
	}, this.a3Z = function(qV, g, rk) {
		g.fill("");
		for (var tT = qV.split('"'), f2 = Math.min(tT.length, 2 * g.length), ht = 0, aB = 1; aB < f2; aB += 2) g[ht++] = tT[aB].slice(0, rk)
	}, this.a3a = function(g, gU) {
		if (0 === gU) g.fill(0);
		else {
			var a3M = this.a3L(g),
				f2 = g.length;
			if (0 === a3M) g.fill(bL.dt(gU, f2));
			else
				for (var aB = 0; aB < f2; aB++) g[aB] = bL.dt(gU * g[aB], a3M);
			if (0 === (a3M = this.a3L(g))) g[1] = gU;
			else
				for (var ht = 0; a3M++ < gU;) g[ht = (ht + 1) % f2] && g[ht]++
		}
	}, this.a3b = function(g) {
		if (!g) return 0;
		var f2 = g.length;
		if (0 === f2) return 0;
		for (var fT = g[f2 - 1], aB = f2 - 2; 0 <= aB; aB--)
			if (g[aB] !== fT) return aB + 2;
		return 1
	}, this.a3c = function(g) {
		for (var a3M = 0, aB = 0; aB < g.length; aB++) a3M += g[aB].length;
		return a3M
	}, this.a3d = function(a3e) {
		for (var g = [], aB = 0; aB < a3e.length; aB++) g = g.concat(a3e[aB]);
		return g
	}, this.has = function(g, fT) {
		for (var f2 = g.length, aB = 0; aB < f2; aB++)
			if (g[aB] === fT) return !0;
		return !1
	}
}

function a3A() {
	this.zZ = function(a3f, eA, a3g) {
		var hx = a3f.height,
			a3h = bA.qo.xI(hx, hx),
			i3 = bA.qo.getContext(a3h);
		return function(i, i3, a3g) {
			i3.fillStyle = a3g, i3.beginPath(), i3.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), i3.fill()
		}(hx, i3, a3g), i3.drawImage(a3f, -eA * hx, 0), a3h
	}, this.a3j = function(a3k) {
		var i3, i0, hx = a3k.height;
		return a3k.width === hx && (i0 = (i3 = bA.qo.getContext(a3k, !0)).getImageData(0, 0, hx, hx), bA.a38.a3l(i0.data, hx, hx, .9), i3.putImageData(i0, 0, 0)), a3k
	}
}

function a3B() {
	this.a3m = function(fT) {
		return [fT >> 12 & 63, fT >> 6 & 63, 63 & fT]
	}, this.a3n = function(fT) {
		for (var g = this.a3m(fT), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a3o = function(fT) {
		fT = this.a3n(fT);
		return bA.color.nn(fT[0], fT[1], fT[2])
	}, this.a3p = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nn = function(e9, tT, fM) {
		return "rgb(" + e9 + "," + tT + "," + fM + ")"
	}, this.np = function(e9, tT, fM, fL) {
		return "rgba(" + e9 + "," + tT + "," + fM + "," + fL.toFixed(3) + ")"
	}, this.rI = function(ea) {
		for (var g = ea.split("(")[1].split(","), fa = bO.fa, aB = 0; aB < 3; aB++) fa[aB] = parseInt(g[aB]);
		return 4 === g.length ? fa[3] = 255 * parseFloat(g[3].slice(0, -1)) : fa[3] = 255, fa
	}, this.rJ = function(a3q, f5) {
		for (var g = a3q.slice(a3q.indexOf("(") + 1, a3q.indexOf(")")).split(","), fa = bO.fa, aB = 0; aB < 3; aB++) fa[aB] = bL.i9(parseInt(g[aB].trim(), 10) + f5, 0, 255);
		return 3 === g.length ? this.nn(fa[0], fa[1], fa[2]) : (a3q = parseFloat(g[3].trim()), this.np(fa[0], fa[1], fa[2], a3q = 0 === a3q ? .3 : a3q))
	}, this.v6 = function(a3r, a3s) {
		for (var jb = 0, aB = 0; aB < 3; aB++) jb += Math.abs(a3s[aB] - a3r[aB]);
		if (!(240 <= jb))
			for (aB = 0; aB < 3; aB++) a3s[aB] = a3r[aB] + (a3r[aB] < 128 ? 80 : -80)
	}, this.a3t = function(g) {
		for (var qV = "#", aB = 0; aB < 3; aB++) {
			var e9 = g[aB].toString(16);
			qV += 1 === e9.length ? "0" + e9 : e9
		}
		return qV
	}, this.a3u = function(qV) {
		var e9, tT;
		return qV.length < 7 ? bB.nm : (e9 = parseInt(qV.slice(1, 3), 16), tT = parseInt(qV.slice(3, 5), 16), qV = parseInt(qV.slice(5, 7), 16), this.nn(e9, tT, qV))
	}
}

function a37() {
	this.a3v = function(qV, font, maxWidth) {
		if (font && (vS.font = font), vS.measureText(qV).width <= maxWidth) return qV;
		for (var aB = qV.length - 1; 1 <= aB; aB--)
			if (qV = qV.substring(0, aB), vS.measureText(qV + "...").width <= maxWidth) return qV + "...";
		return "..."
	}
}

function a3D() {
	var a3x = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a3y = function(eR) {
		var a40, qV = new Date(eR.getTime() - 6e4 * eR.getTimezoneOffset()).toUTCString();
		return qV.length < 12 || (qV = qV.substring(5, qV.length), 0 === (eR = eR.getTimezoneOffset())) ? qV : (a40 = (eR < 0 ? "+" : "-") + bL.dt(Math.abs(eR), 60), 0 == (eR = Math.abs(eR) % 60) ? qV + a40 : qV + a40 + ":" + (eR < 10 ? "0" :
			"") + eR)
	}, this.a41 = function(eR) {
		var qV = eR.toUTCString();
		return qV.length < 12 ? qV : function(eR) {
			return a3x[eR.getUTCDay()]
		}(eR) + ", " + qV.substring(5, qV.length - 4)
	}
}

function a33() {
	var a43 = null;
	this.zq = 0, this.wX = function() {
		var fT = bj.eO.data[5].value;
		a43 = "px " + fT, "Trebuchet MS" !== fT && (a43 += ", Trebuchet MS"), this.zq = hw(32, 32, ["a", "b", "m"], 200, a43)
	}, this.xI = function(i, j) {
		var ea = document.createElement("canvas");
		return ea.width = i, ea.height = j, ea
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(z3, i, j) {
		return z3.getImageData(0, 0, i, j)
	}, this.sf = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a43 : 1 === type ? "bold " + size + a43 : 2 === type ? "lighter " + size + a43 : 3 === type ? "italic " + size + a43 : 4 === type ? "oblique " + size + a43 : 5 === type ? "small-caps " +
			size + a43 : "small-caps bold " + size + a43
	}, this.textAlign = function(i3, id) {
		i3.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(i3, id) {
		i3.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qy = function(e, code, color) {
		color = this.qx(bc.sh) + " solid " + (color || bB.nv);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tV = function(e, f9, fB, i, j) {
		e = e.style;
		e.left = this.tW(f9), e.top = this.tW(fB), e.width = this.tW(i), e.height = this.tW(j)
	}, this.qp = function(fT) {
		return 1 + fT * a0.a1.iA()
	}, this.s7 = function(nX, ga) {
		return nX * this.qp(void 0 === ga ? .5 : ga) * h.iB / h.k
	}, this.tU = function(nX, ga) {
		return nX * this.qp(void 0 === ga ? .5 : ga) * h.iB
	}, this.tB = function(nX, ga, a44) {
		return this.qp(ga) * Math.min(nX * h.iB, a44 * h.i) / h.k
	}, this.qx = function(fT) {
		return fT.toFixed(1) + "px"
	}, this.tW = function(fT) {
		return this.ur(fT).toFixed(1) + "px"
	}, this.ur = function(fT) {
		return fT / h.k
	}, this.a46 = function(sv, a47) {
		for (var qV = "<ul>", f2 = sv.length, aB = 0; aB < f2; aB++) qV += "<li>" + sv[aB] + ": <a href='" + a47[aB] + "' target='_blank'>" + a47[aB] + "</a></li>";
		return qV += "</ul>"
	}, this.a48 = function(a49) {
		return "<a href='" + a49 + "' target='_blank'>" + a49 + "</a>"
	}, this.a4A = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.v4 = function(e) {
		var ds = e.textContent;
		bA.rn.a4B(ds, "✔") || (1 === ds.length ? e.textContent = "✔" : e.textContent = ds + " ✔", setTimeout(function() {
			e.textContent = ds
		}, 500))
	}, this.measureText = function(qV) {
		return vS.measureText(qV).width
	}, this.tL = function(a4C) {
		a4C.style.overflowX = "auto", a4C.style.overflowY = "hidden", a4C.style.whiteSpace = "nowrap", a4C.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tY = this.scrollLeft, e.preventDefault())
		}), a4C.addEventListener("scroll", function() {
			this.tY = this.scrollLeft
		})
	}
}

function a35() {
	this.hC = function(a1v) {
		return 0 === a1v ? 1 === aD.a0p && aD.hP : 1 === a1v ? 1 === aD.a0p && !aD.hP : 2 === aD.a0p
	}, this.hD = function(player) {
		return 0 !== ag.mv[player] && 2 !== ag.a4D[player]
	}, this.a4E = function(player) {
		return player === aD.em && 2 !== ag.a4D[player]
	}, this.l0 = function(player, jV) {
		return player !== jV && (0 === bg.f0[player] || bg.f0[player] !== bg.f0[jV])
	}, this.m7 = function() {
		return al.ks < 2 ? 0 : aD.hv ? 1 < bh.a4F() : ag.gp[lx[1]]
	}, this.a4G = function() {
		var ks = al.ks;
		if (0 !== ks) {
			if (!aD.hv) return !this.jj(lx[0]);
			for (var f0 = bg.f0, ku = bh.kv(), kx = al.kx, aB = ks - 1; 0 <= aB; aB--) {
				var gZ = kx[aB];
				if (f0[gZ] === ku && !this.jj(gZ)) return 1
			}
		}
		return 0
	}, this.a4H = function(player) {
		return player === aD.em
	}, this.a4I = function(jV, nX) {
		return ag.h3[aD.em] < nX * ag.h3[jV]
	}, this.jj = function(player) {
		return player >= aD.kM || 2 === ag.a4D[player]
	}, this.lK = function(player) {
		return 0 !== ag.mv[player]
	}, this.a0f = function(player) {
		return player < aD.kM
	}, this.qB = function(a4J, a4K) {
		return a4J !== a4K
	}, this.gQ = function(player, fT) {
		var min;
		return fT = this.a4L(player, fT), ag.h3[player] += fT, ag.a4M[player] && (min = Math.min(ag.a4M[player], ag.h3[player]), ag.a4M[player] -= min, ag.h3[player] -= min), fT
	}, this.a4L = function(player, fT) {
		var a4N = ag.h3[player];
		return fT = Math.min(fT, ag.gp[player] * aD.a4O - a4N), fT = Math.min(fT, aD.a4P - a4N), Math.max(fT, 0)
	}, this.mU = function(player, ib, a4Q, a4R) {
		var a4N = ag.h3[player],
			ib = bL.dt(a4N * (ib + 1), 1024),
			a4Q = bL.dt(a4Q * a4N, 1024),
			ib = Math.min(ib, a4N - a4Q);
		return 10 === aD.ke && (ib = b4.a4T(player, ib)), bO.fY[0] = ib, bO.fY[1] = a4Q, a4R <= ib
	}, this.pf = function(player, pN, pM) {
		var player = ag.h3[player],
			a4S = bL.dt(64 * player, 1024);
		return pN = Math.min(pN, player - a4S), pN = this.a4L(pM, pN), bO.fY[0] = pN, bO.fY[1] = a4S, 1 <= pN
	}, this.a4U = function(player, pN, pM) {
		var player = ag.h3[player],
			a4S = bL.dt(64 * player, 1024);
		return pN = Math.min(pN, player - a4S), this.a4L(pM, pN)
	}, this.ph = function(pN, pM) {
		return pN = this.a4L(pM, pN), bO.fY[0] = pN, bO.fY[1] = 0, 1 <= pN
	}, this.ia = function(player, a4V) {
		return bL.dt(ag.h3[player] * (a4V + 1), 1024)
	}, this.a4W = function(player, a4Q) {
		a4Q = bL.dt(a4Q * ag.h3[player], 1024);
		bO.fY[1] = a4Q, ag.h3[player] -= a4Q
	}, this.gO = function(player, a4X) {
		var fm, fo, fM = ag.h3[player];
		return a4X <= fM ? ag.h3[player] -= a4X : (ag.h3[player] = 0, fo = ag.a4M[player] + (fm = 5 * ((fM = a4X - fM) >> 2)), bd.gR(player, fm - fM, 12), fo <= aD.a4Y ? ag.a4M[player] = fo : (ag.a4M[player] = aD.a4Y, bd.gR(player, fo - aD.a4Y,
			18))), a4X
	}, this.lY = function(player, ib) {
		var h3 = ag.h3,
			a4N = h3[player],
			ib = bL.dt(a4N * (ib + 1), 1024),
			a4S = Math.max(bL.dt(a4N, 10), 1e3);
		return (ib = Math.min(ib, a4N - a4S)) < 0 ? (h3[player] = 0, a4S = Math.min(1e3, a4N + aD.a4Y - ag.a4M[player]), bO.fY[1] = a4S, ag.a4M[player] += a4S - a4N, 0) : (bO.fY[1] = a4S, 10 === aD.ke && (ib = b4.a4T(player, ib)), h3[player] -=
			a4S + ib, ib)
	}, this.mW = function(player) {
		ag.h3[player] -= bO.fY[0] + bO.fY[1]
	}, this.qC = function(player, jV) {
		return (jV = Math.min(jV, aD.ez)) < aD.ez && 0 === ag.mv[jV] && (jV = aD.ez), (bO.ey[0] = jV) === aD.ez || bs.ev(player, jV)
	}, this.qF = function(player, pM) {
		return 0 !== ag.mv[pM] && !bs.ev(player, pM)
	}, this.a4Z = function(player, a4a) {
		for (var gZ, f2 = al.ks, a4b = 0, a4c = lx, aB = 0; aB < f2; aB++)
			if (gZ = a4c[aB], !this.jj(gZ)) {
				if (player === gZ) return !0;
				if (++a4b > a4a) return !1
			} return !1
	}, this.lt = function(gZ) {
		var a4d = aD.hv ? bh.kt() : ag.gp[lx[0]];
		return a4d >= bL.dt(gZ * aD.k6, 100)
	}, this.a4e = function(fT, min, max) {
		return Math.floor(bL.i9(isNaN(fT) ? 0 : Number(fT), min, max))
	}
}

function a39() {
	this.a4f = function(canvas, a4g, a4h) {
		var i = canvas.width,
			j = canvas.height,
			ea = bA.qo.xI(i, j),
			i3 = bA.qo.getContext(ea, !0),
			canvas = (i3.drawImage(canvas, 0, 0), i3.getImageData(0, 0, i, j));
		return a4g(canvas.data, i, j, a4h), i3.putImageData(canvas, 0, 0), ea
	}, this.a4i = function(xT, i, j) {
		for (var f9 = i - 1; 0 <= f9; f9--)
			for (var fB = j - 1; 0 <= fB; fB--) {
				var aB = 4 * (f9 + fB * i);
				xT[3 + aB] = xT[aB], xT[aB] = xT[1 + aB] = xT[2 + aB] = 255
			}
	}, this.a4j = function(xT, i, j) {
		for (var f9 = i - 1; 0 <= f9; f9--)
			for (var fB = j - 1; 0 <= fB; fB--) {
				var aB = 4 * (f9 + fB * i);
				xT[1 + aB] > xT[2 + aB] + 10 && (xT[3 + aB] = xT[aB], xT[1 + aB] = xT[2 + aB])
			}
	}, this.a4k = function(xT, i, j, a4h) {
		for (var gap = Math.floor(Math.min(i, j) * a4h), f9 = 0; f9 < i; f9++)
			for (var aB, fB = 0; fB < j; fB++)(f9 < gap || fB < gap || i - gap <= f9 || j - gap <= fB) && (xT[3 + (aB = 4 * (f9 + fB * i))] = 255 - 255 * (xT[1 + aB] - xT[aB]) / (255 - xT[aB]))
	}, this.a4l = function(xT, i, j, a4h) {
		for (var f9 = i - 1; 0 <= f9; f9--)
			for (var fB = j - 1; 0 <= fB; fB--) {
				var aB = 4 * (f9 + fB * i);
				xT[aB] = a4h[0], xT[1 + aB] = a4h[1], xT[2 + aB] = a4h[2]
			}
	}, this.a4m = function(xT, i, j, a4h) {
		for (var gap = Math.floor(i * a4h), f9 = 0; f9 < i; f9++)
			for (var aB, fB = 0; fB < j; fB++)(f9 < gap || fB < gap || i - gap <= f9 || j - gap <= fB) && (xT[aB = 4 * (f9 + fB * i)] = xT[1 + aB] = xT[2 + aB] = 0)
	}, this.a4n = function(xT, i, j) {
		for (var fB, aB, f9 = i - 1; 0 <= f9; f9--)
			for (fB = j - 1; 0 <= fB; fB--) 200 < xT[1 + (aB = 4 * (f9 + fB * i))] && xT[1 + aB] - 20 > xT[aB] && xT[1 + aB] - 20 > xT[2 + aB] ? xT[aB] + xT[2 + aB] < 40 ? xT[3 + aB] = 0 : (xT[3 + aB] = xT[aB], xT[aB] = 255, xT[1 + aB] = 255, xT[
				2 + aB] = 255) : xT[aB] < 50 && xT[1 + aB] < 50 && xT[2 + aB] < 50 && (xT[aB] + xT[1 + aB] + xT[2 + aB] < 50 ? xT[3 + aB] = 180 : xT[3 + aB] = 180 + Math.floor(75 * (xT[aB] + xT[1 + aB] + xT[2 + aB] - 50) / 100))
	}, this.a4o = function(xT, i, j) {
		for (var fB, aB, f9 = i - 1; 0 <= f9; f9--)
			for (fB = j - 1; 0 <= fB; fB--) xT[1 + (aB = 4 * (f9 + fB * i))] > xT[aB] + 20 && xT[1 + aB] > xT[2 + aB] + 20 && xT[aB] + xT[2] < 40 && (xT[3 + aB] = 255 - xT[1 + aB], xT[aB] = xT[1 + aB] = xT[2 + aB] = xT[aB])
	}, this.a3l = function(xT, i, j, a4h) {
		for (var e9 = i >> 1, f9 = 0; f9 < i; f9++)
			for (var fB = 0; fB < j; fB++) Math.sqrt((f9 - e9) * (f9 - e9) + (fB - e9) * (fB - e9)) > a4h * e9 && (xT[4 * (f9 + fB * i) + 3] = 0)
	}
}

function a36() {
	var a4p = {
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
		a4q = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.ro = function(ec) {
		return ec.replace(a4q, function(match) {
			return a4p[match] || match
		})
	}, this.a06 = function(fT) {
		var aB, a4r, a4s, a4t, a4u;
		if (fT < 0) return "-" + this.a06(Math.abs(fT));
		if (fT < 1e3) return fT.toString();
		for (a4r = Math.floor(Math.log(fT + .5) / Math.log(10)) + 1, a4s = Math.floor((a4r - 1) / 3), a4u = (a4t = fT.toString()).substring(a4r - 3, a4r), aB = 1; aB < a4s; aB++) a4u = a4t.substring(a4r - 3 * (aB + 1), a4r - 3 * aB) + " " + a4u;
		return a4t.substring(0, a4r - 3 * a4s) + " " + a4u
	}, this.a4v = function(gZ, a4r) {
		return gZ.toFixed(a4r) + "%"
	}, this.a4w = function(fT, a4x) {
		return fT.toFixed(bL.i9(Math.floor((void 0 === a4x ? 3 : a4x) - Math.log10(Math.max(fT, 1))), 0, 8))
	}, this.a4y = function(fT, nX, a4r) {
		return (fT * nX).toFixed(a4r)
	}, this.a1a = function(username) {
		var f6, er = username.indexOf("[");
		return !(er < 0) && 1 < (f6 = username.indexOf("]")) - er && f6 - er <= 8 ? username.substring(er + 1, f6).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a1a;
	this.a4z = function(qV) {
		for (var fL = Math.floor(.5 * qV.length + .5), nd = Math.floor(.5 * (fL - 1)), aB = 0; aB < nd; aB++)
			for (var fM = -1; fM < 2; fM += 2) {
				var ea = fL + fM * aB;
				if (" " === qV[ea]) return [this.a1W(qV.substring(0, ea)), this.a50(qV.substring(ea))]
			}
		return [qV.substring(0, fL), qV.substring(fL)]
	}, this.a50 = function(qV) {
		for (var f2 = qV.length, aB = 0; aB < f2; aB++)
			if (" " !== qV[aB]) return qV.substring(aB);
		return qV
	}, this.a1W = function(qV) {
		for (var aB = qV.length - 1; 0 <= aB; aB--)
			if (" " !== qV[aB]) return qV.substring(0, aB + 1);
		return qV
	}, this.a51 = function(qV, a52) {
		return qV.split("(")[0] + "(🧈 " + a52.toFixed(2) + ")"
	}, this.startsWith = function(qV, a53) {
		return qV.substring(0, a53.length) === a53
	}, this.a4B = function(qV, a53) {
		var f2 = qV.length;
		return qV.substring(f2 - a53.length, f2) === a53
	}, this.a54 = function(g, a55, a56) {
		var qV = "",
			f2 = g.length - 1;
		a56 = a56 || "";
		for (var aB = 0; aB < f2; aB++) qV += a56 + g[aB] + a56 + ",", (aB + 1) % a55 == 0 && (qV += "\n");
		return qV += a56 + g[f2] + a56
	}, this.a57 = function(qV, zv, zw) {
		return qV.replace(new RegExp(zv, "g"), zw)
	}
}

function a58() {
	this.eZ = function(player, eo) {
		aI.yn(player, bM.fA(eo), bM.fC(eo)) && (bf.dk = !0), aD.kg && this.eV()
	}, this.eV = function() {
		aD.hP = !1;
		for (var aB = 0; aB < aD.kM; aB++) 0 !== ag.mv[aB] && 0 === ag.gp[aB] && aI.yu(aB);
		0 !== ag.mv[aD.em] ? (bd.mr[7] = ag.gp[aD.em], bd.mr[8] = ag.h3[aD.em], aR.a59(), aW.a5A(), aD.hA || aH.nF(ag.iu[aD.em] - 5, ag.iw[aD.em] - 5, ag.iv[aD.em] + 5, ag.ix[aD.em] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a5B(18), af.a5C(),
			af.mh(!0), bP.y.a5D(), aL.s5(), aD.qA = null, bb.a5E = !0, bb.a5F(), aD.kg && a0.a1.setState(1)
	}
}

function c1() {
	this.ez = 512, this.a4P = 15e8, this.a5G = 1e9, this.a4Y = 5e4, this.a5H = 512, this.gL = 2, this.em = 0, this.kM = 0, this.a0s = 0, this.ki = 0, this.a0r = 0, this.xy = 512, this.y3 = 512, this.a4O = 150, this.kg = !0, this.hA = 0, this.a0p = 0,
		this.k6 = 0, this.nO = !1, this.hP = 0, this.a5I = 0, this.hv = !1, this.y5 = 0, this.y6 = 0, this.ke = 0, this.a1k = 0, this.qA = null, this.a18 = new z9, this.a5J = 30, this.a0m = 0, this.a0u = 0, this.a17 = 0, this.a0h = 0, this.data =
		new a5K, this.a5L = new a5M, this.a5N = 0, this.a5O = "", this.a5P = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0s = this.kM = this.data.humanCount, this.kg = 1 === this.a0s && !__fx.customLobby.isActive(), this.nO = !1, this.hA = this.data.isReplay, this.ke = 0 === this.data.gameMode ? [7, 10, 8][this.data
					.battleRoyaleMode
				] : this.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.a1k = this.data.isContest, this.hv = this.ke < 7 || 9 === this.ke, this.ke = 10 === this.ke && this.kg ? 7 : this.ke, this.ke = 8 === this.ke && 2 !== this.kM ? 7 : this
				.ke, az.dd(), this.y5 = this.data.numberTeams, this.data.teamPlayerCount ? this.y6 = +(0 < this.data.teamPlayerCount[0]) : (this.y6 = 0, this.hv && this.kg && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount
					.fill(1, 1, this.y5 + 1), aD.a5L.a5Q())), this.a5J = this.kM <= 2 ? 30 : this.kM <= 50 ? 40 : 50, this.a5I = this.hP = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.qA =
				this.hP ? new a58 : null, this.xy = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.kM) : 1 === l.dr ? this.xy = this.kM : this.xy = this.data.playerCount,
				this.y3 = this.xy, this.ki = this.xy - this.kM, this.a0r = 0, this.em = this.data.selectedPlayer, this.a0m = 0, this.a0u = 0, this.a17 = 0, this.a0h = 0, ay.a5R(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai.a5S(), b8.pF
				.py = [], bg.dd(), this.a0p = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a5T(), ac.de(), ap.a5U(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a5V(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a5W(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a5X.putImageData(a5Y, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), g4(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a18.dd(), bf.a5V(), aH.nE(), 0 === ag.mv[aD.em] && aX.show(!1, !0), af.mh(!0), av.dd(), bf.dk = !0, this.hA || this.kg && this.hP || a0.a1.setState(1), this.a5N = 0
		}, this.a2E = function(eQ) {
			b9.q8.a5a.length ? this.a5O = b9.q8.a5a : this.a5O = b9.a5b.a0H(), !1 === __fx.customLobby.isActive() && b0.y.a5c(), bq.clear(), this.a0p = 0, bf.a5d(), a0.a1.setState(0), aa.setState(0), __fx.customLobby.isActive() || bU.eI.show(eQ),
				__fx.customLobby.isActive() ? __fx.customLobby.rejoinLobby() : 2 === this.a5N ? t.y.a5e() : 1 === this.a5N ? t.u(19) : t.u(5, 5)
		}, this.a5f = function() {
			return this.hA ? aM.hB || !bC.a5g : this.kg && (aM.hB || this.hP)
		}, this.a5h = function() {
			return 1 === this.a0p && !this.hP
		}
}

function a5K() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null, this.a5i = null
}

function a5M() {
	this.a5Q = function() {
		var a5j = aD.data;
		bA.qw.a3a(a5j.teamPlayerCount, a5j.playerCount), a5j.numberTeams = bA.qw.a3R(a5j.teamPlayerCount, 0), a5j.teamPlayerCount[0] && a5j.teamPlayerCount[7] && (a5j.teamPlayerCount[7] = 0, this.a5Q())
	}, this.a5k = function() {
		var a5j = aD.data;
		a5j.mapType < 2 ? bS.a7(bS.a5l(a5j), a5j.mapSeed) : bS.a5m(a5j.canvas)
	}, this.a5n = function() {
		var a5j = aD.data;
		a5j.colorsData || (a5j.colorsData = new Uint32Array(1)), a5j.selectableColor && (a5j.colorsData[0] = bj.y.wV()), a5j.selectableName && (a5j.playerNamesData || (a5j.playerNamesData = new Array(1)), a5j.playerNamesData[0] = bj.eO.data[122]
			.value), a5j.a5i = new Uint32Array(1), a5j.a5i[0] = bG.t8.x8(bj.eO.data[105].value, 5)
	}, this.a5o = function() {
		aD.data = new a5K, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ez), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a5p = [];
	this.pi = function(player, pM, a5q, a5r) {
		player === aD.em || pM === aD.em || !a5r && bA.gN.jj(player) || bA.gN.jj(pM) || this.a1D(ag.a1S[player] + " supported " + ag.a1S[pM] + " with " + bA.rn.a06(a5q) + " ressource" + (1 === a5q ? "." : "s."))
	}, this.a1D = function(qV, pX) {
		qV = {
			eR: aW.a5t(),
			qV: qV,
			pX: pX
		};
		a5p.push(qV), 30 === t.t5 && t.a5u().a1D(qV)
	}, this.clear = function() {
		a5p = [];
		var tT = t.a5v(30);
		tT && tT.clear()
	}, this.a5w = function() {
		return a5p
	}
}

function dT() {
	this.zn = 0, this.gap = 0, this.sh = 0, this.qu = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.zn = .0022 * bA.qo.qp(.5) * h.iB, this.sh = this.zn / h.k, this.gap = Math.max(Math.floor((a0.a1.iA() ? .0114 : .01296) * h.iB), 2), this.qu = this.gap / h.k
	}
}

function dS() {
	this.a5x = function() {
		return a0.a1.iA() ? 2 : 1
	}
}

function cC() {
	var rN, f9, fB, a5y, a5z, a60, eR, a61, a62, a63, a64, gap, zoom, pr, a65;

	function a6J(lb, lc, eg) {
		ac.ex(eg) || -1 === (lb = bN.lB.a6S(lb, lc)) ? aN.a6R(eg) : aN.a6T(lb)
	}

	function a6F(a61) {
		for (var aB = pr.length - 1; 0 <= aB; aB--)
			if (pr[aB] === a61) return 1
	}

	function a6D(a6A) {
		var aB, f2;
		if (-1 !== a6A)
			for (f2 = rN.length, aB = 0; aB < f2; aB++)
				if (rN[aB].hn && rN[aB].f9 + 1 === a6A % 4 && rN[aB].fB + 1 === a6A >> 2) return aB;
		return -1
	}

	function a6B(lb, lc) {
		var tT = gap / 2;
		return lb < f9 - a5y - 3 * tT || f9 + 3 * a5y + 5 * tT < lb || lc < fB - a5y - 3 * tT || fB + 2 * a5y + 3 * tT < lc ? -1 : 4 * (lc < fB - tT ? 0 : lc < fB + a5y + tT ? 1 : 2) + (lb < f9 - tT ? 0 : lb < f9 + a5y + tT ? 1 : lb < f9 + 2 * a5y +
			3 * tT ? 2 : 3)
	}
	this.a66 = function() {
		var aB, fM, a69 = [bB.oL, bB.oZ, bB.nt, bB.ow, bB.on];
		for (rN = new Array(10), aB = 0; aB < 10; aB++) rN[aB] = {
			id: aB,
			hn: !1,
			lJ: 0,
			canvas: [],
			f9: 0,
			fB: 0
		};
		for (rN[0].colors = [0, 1, 2, 3], rN[0].f9 = 0, rN[0].fB = 0, rN[1].colors = [1, 4], rN[1].f9 = 1, rN[1].fB = 0, rN[2].colors = [0, 1], rN[2].f9 = -1, rN[2].fB = 0, rN[3].colors = [0], rN[3].f9 = 0, rN[3].fB = 0, rN[4].colors = [0, 2],
			rN[4].f9 = 1, rN[4].fB = 1, rN[5].colors = [3], rN[5].f9 = 0, rN[5].fB = -1, rN[6].id = 20, rN[6].colors = [0], rN[6].f9 = 1, rN[6].fB = -1, rN[7].id = 21, rN[7].colors = [0], rN[7].f9 = 0, rN[7].fB = 1, rN[8].id = 16, rN[8]
			.colors = [0], rN[8].f9 = 0, rN[8].fB = 0, rN[9].id = 10, rN[9].colors = [4], rN[9].f9 = 2, rN[9].fB = 0, aB = 0; aB < 10; aB++)
			for (fM = 0; fM < rN[aB].colors.length; fM++) rN[aB].canvas.push(function(id, a3g) {
				if (id < 20) return bA.canvas.zZ(ab.get(3), id, a3g);
				var a3g = ab.get(3).height,
					a3h = bA.qo.xI(a3g, a3g),
					i3 = bA.qo.getContext(a3h);
				20 === id ? i3.drawImage(ab.get(18), 0, 0) : 21 === id && aj.xT.zo(aj.s4.zd + aj.s4.zu, i3, 0, 0, a3g);
				return a3h
			}(rN[aB].id, a69[rN[aB].colors[fM]]))
	}, this.a68 = function() {
		return rN
	}, this.dd = function() {
		pr = [], f9 = fB = eR = 0, a5z = a60 = -1e3, this.resize()
	}, this.resize = function() {
		a5y = Math.floor((a0.a1.iA() ? .075 : .0468) * h.iB), zoom = a5y / ab.get(3).height, gap = Math.floor(a5y / 3)
	}, this.a2h = function(lb, lc) {
		return !!this.hn() && (bf.dk = !0, !!aj.xT.hE(lb, lc, a62) || (lb = function(lb, lc) {
			a60 = a5z = -1e3;
			var a6C = a6D(a6B(lb, lc));
			if (-1 === a6C) return 0;
			if (1 !== rN[a6C].colors[rN[a6C].lJ])
				if (5 === a6C) {
					if (! function() {
							var ds = performance.now();
							a65 + 4e3 < ds && (pr = []);
							a65 = ds
						}(), a6F(a61)) return 1;
					pr.push(a61), 16 < pr.length && pr.shift()
				} else if (6 === a6C) {
				for (var aB = pr.length - 1; 0 <= aB; aB--) 0 === ag.mv[pr[aB]] && pr.splice(aB, 1);
				0 < pr.length && (b5.a6G(1, pr, !0) && b8.gN.pq(pr, a61), pr = [])
			} else if (2 === a6C) an.hf(a61) && b8.hR.pL(aR.hV(), a61);
			else if (3 === a6C) aD.hP && b8.hR.hS(a63);
			else if (0 === a6C)
				if (0 === rN[0].lJ) {
					if (aD.a5I && aW.a5t() < 350) return 1;
					bV.a6H(4), b8.hR.hY(aR.hV(), a61)
				} else b1.hZ(a61, aR.hV());
			else if (1 === a6C) b8.hR.hd(aR.hV(), a63);
			else if (9 === a6C) b8.hR.hg(aR.hV());
			else {
				if (7 === a6C) return bV.a6H(0), aj.xT.show(lb, lc), 2;
				if (4 === a6C) b5.a6G(0, [a61], !0) && b8.gN.pn(a61);
				else {
					if (8 !== a6C) return 0;
					b8.hR.hU(aR.hV(), a64, a61)
				}
			}
			return 1
		}(lb, lc), this.s5(), 2 === lb && (aj.xT.hn = !0), 0 < lb))
	}, this.a2j = function(lb, lc) {
		this.hn() || (a5z = lb, a60 = lc, eR = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.hH(mouseX),
			coordY = bM.hJ(mouseY),
			coord = bM.fP(coordX, coordY),
			coord = bM.es(coord);
		bM.hK(coordX, coordY) && a6J(mouseX, mouseY, coord)
	}, this.click = function(lb, lc, a2q) {
		var hG = bM.hH(lb),
			hI = bM.hJ(lc),
			eo = bM.fP(hG, hI),
			eg = bM.es(eo);
		return !(!bM.hK(hG, hI) || (hG = (a0.a1.iA() ? .025 : .0144) * h.iB, hI = performance.now(), Math.abs(lb - a5z) > hG) || Math.abs(lc - a60) > hG || eR + 500 < hI) && (eR = hI, a2q ? (a6J(lb, lc, eg), !1) : aM.hB || this.hn() || !bA.gN.hD(
			aD.em) || aD.hA ? (this.s5(), !1) : (aD.hP ? 0 <= (a63 = br.hQ(eo)) && (rN[3].hn = !0) : 2 === aD.a0p ? ac.gb(eg) && (a61 = ac.eu(eg), bA.gN.jj(a61) || (rN[0].hn = !0, rN[0].lJ = 1, rN[7].hn = !0)) : (bN.he.hf(aD.em, eo) && (
			rN[0].hn = !0, rN[0].lJ = 1, rN[1].hn = !0, rN[1].lJ = 0, rN[9].hn = !0, rN[9].lJ = 0), bN.hb.hc(aD.em, eo) && (rN[0].hn = !0, rN[0].lJ = 1, rN[1].hn = !0, rN[1].lJ = 1, a63 = bO.fd[7]), ac.f7(eg) ? (a64 = am.ed.ef(
			eg)) && (hG = bM.es(a64), rN[8].hn = !0, a61 = ac.et(hG) ? aD.ez : ac.eu(hG)) : (ac.ys(aD.em, eg) && (a62 = aD.em, rN[0].hn = !0, rN[0].lJ = 1, rN[7].hn = !0), -1 !== (hI = br.hW(eo)) && (ac.et(hI << 2) ? (a61 = aD.ez,
			bs.hX(aD.em) ? (rN[0].hn = !0, rN[0].lJ = 0) : ad.g8(aD.em) && (rN[0].hn = !0, rN[0].lJ = 3)) : (a61 = ac.eu(hI << 2), rN[0].lJ = 1, rN[5].hn = function(a61) {
			return !bA.gN.jj(a61) && !a6F(a61) && b5.a6G(1, [a61], !1)
		}(a61), rN[7].hn || bA.gN.jj(a61) || (a62 = a61, rN[7].hn = !0), rN[4].hn = !bA.gN.jj(a61) && !af.a6N(a61) && b5.a6G(0, [a61], !1), rN[6].hn = function(a61) {
			if (0 === pr.length) return !1;
			if (performance.now() > a65 + 4e3) return !(pr = []);
			return !a6F(a61) && ! function(a61) {
				var aB;
				if (aD.hv)
					for (aB = pr.length - 1; 0 <= aB; aB--)
						if (!bs.ev(a61, pr[aB])) return 1;
				return
			}(a61)
		}(a61), bs.ev(a61, aD.em) ? (bs.ha(aD.em, a61) ? (rN[0].lJ = 0, rN[0].hn = !0) : ad.g8(aD.em) && (rN[0].lJ = 3, rN[0].hn = !0), rN[0].hn = this.a6P()) : (rN[2].hn = !0, an.hf(a61) ? rN[2].lJ = 0 : rN[2].lJ = 1,
			rN[0].hn = !0))))), this.a6K(lb, lc)))
	}, this.a6K = function(lb, lc) {
		return f9 = lb - Math.floor(a5y / 2), fB = lc - Math.floor(a5y / 2), !!this.hn()
	}, this.a2N = function(lb, lc) {
		return !!this.hn() && (aj.xT.hn ? !aj.xT.zm(lb, lc) && (aj.xT.hn = !1, bf.dk = !0) : function(sQ, lb, lc) {
			lb = a6B(lb, lc);
			if (0 <= a6D(lb)) return !1;
			if ((1 === lb || 6 === lb) && 0 <= a6D(2)) return !1;
			if ((6 === lb || 9 === lb) && 0 <= a6D(10)) return !1;
			return sQ.s5(), bf.dk = !0
		}(this, lb, lc))
	}, this.s5 = function() {
		for (var aB = rN.length - 1; 0 <= aB; aB--) rN[aB].hn = !1, rN[aB].lJ = 0;
		aj.xT.hn = !1
	}, this.hn = function() {
		return this.a6P() || aj.xT.hn
	}, this.a6P = function() {
		for (var f2 = rN.length, aB = 0; aB < f2; aB++)
			if (rN[aB].hn) return !0;
		return !1
	}, this.vR = function() {
		if (this.hn())
			if (aj.xT.hn) aj.xT.vR();
			else {
				var aB, i3 = vS,
					fM = rN,
					f2 = fM.length,
					a6X = (a5y + gap) / zoom;
				for (i3.imageSmoothingEnabled = !0, i3.setTransform(zoom, 0, 0, zoom, f9, fB), aB = 0; aB < f2; aB++) fM[aB].hn && vS.drawImage(fM[aB].canvas[fM[aB].lJ], fM[aB].f9 * a6X, fM[aB].fB * a6X);
				i3.imageSmoothingEnabled = !1, i3.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a6Y, a6Z, a6a, a6b = -1;

	function a6c() {
		var a6d, z3 = canvas.getContext("2d", {
			alpha: !0
		});
		z3.clearRect(0, 0, j, j), z3.fillStyle = bB.nr, z3.fillRect(0, 0, j, j), 9 === a6Z && (z3.fillStyle = bB.nw, z3.fillRect(0, 0, j, j)), z3.fillStyle = bB.nv, z3.fillRect(0, 0, j, 1), z3.fillRect(0, 0, 1, j), z3.fillRect(0, j - 1, j, 1), z3
			.fillRect(j - 1, 0, 1, j), a6d = .9 * j / ab.get(0).width, z3.imageSmoothingEnabled = !0, z3.setTransform(a6d, 0, 0, a6d, Math.floor((j - a6d * ab.get(0).width) / 2), Math.floor((j - a6d * ab.get(0).height) / 2)), z3.drawImage(ab.get(0),
				0, 0), z3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6f(lb, lc) {
		if (!aM.hB) return lb <= j + bc.gap && lc >= aR.fB ? 9 : -1;
		if (lb <= 4 * j + bc.gap) {
			if (lc >= aR.fB) return 0;
			if (lc >= aR.fB - j - a6a * bc.gap) return 2
		} else if (lb <= 7 * j + bc.gap && lc >= aR.fB - j - a6a * bc.gap) return 1;
		return -1
	}
	this.hB = !1, this.dd = function() {
		a6Z = -1, this.hB = !1, a6a = a0.a1.iA() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a6Y = bA.qo.sf(1, (a0.a1.iA() ? .5 : .45) * j), a6c()
	}, this.a2y = function() {
		this.hB = !this.hB, this.hB ? (bC.a2x(!1), aD.hA && bC.a5g && bC.a2z(!0), this.a6e(), 9 === a6Z && (a6Z = 0)) : (a6Z = -1, a6c(), !aD.kg || 1 !== aD.a0p || aD.hP || aD.hA || a0.a1.setState(1)), bf.dk = !0
	}, this.a6e = function() {
		(aD.kg || aD.hA) && 1 === aD.a0p && (aV.mh(!0), aD.hP || setTimeout(function() {
			bb.a11()
		}, 0), a0.a1.setState(0))
	}, this.hE = function(lb, lc) {
		return 0 <= (a6b = a6f(lb, lc)) || !aM.hB || aD.kg || aD.hA || be.hn || aM.a2y(), a6b
	}, this.a2N = function(lb, lc) {
		lb = a6f(lb, lc);
		lb !== a6Z && (a6Z = lb, this.hB || a6c(), bf.dk = !0)
	}, this.a2O = function(lb, lc) {
		lb = a6f(lb, lc);
		return -1 !== lb && a6b === lb && (this.hB ? aD.nO ? (0 <= lb && bC.a2x(!1), !aD.hA) : (0 === lb ? aD.a2E() : 1 === lb ? this.a2y() : 2 === lb && t.u(1, 0), !0) : 9 === lb && (this.a2y(), !0))
	}, this.vR = function() {
		var i;
		this.hB ? (i = Math.floor(5.5 * j), vS.setTransform(1, 0, 0, 1, bc.gap, aR.fB), vS.fillStyle = bB.nr, vS.fillRect(0, 0, i, j), 0 === a6Z ? (vS.fillStyle = bB.nw, vS.fillRect(0, 0, 4 * j, j)) : 1 === a6Z && (vS.fillStyle = bB.nw, vS
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), vS.fillStyle = bB.nv, vS.fillRect(0, 0, i, 1), vS.fillRect(0, 0, 1, j), vS.fillRect(4 * j, 0, 1, j), vS.fillRect(0, j - 1, i, 1), vS.fillRect(i - 1, 0, 1, j), vS.font = a6Y, bA.qo
			.textBaseline(vS, 1), bA.qo.textAlign(vS, 1), vS.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a6j(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.fB + .3 * j, i), i = 1, vS.setTransform(1, 0, 0, 1, bc.gap, aR.fB - i * a6a * bc.gap - i *
				j), vS.fillStyle = bB.nr, vS.fillRect(0, 0, 4 * j, j), a6Z === i + 1 && (vS.fillStyle = bB.nw, vS.fillRect(0, 0, 4 * j, j)), vS.fillStyle = bB.nv, vS.fillRect(0, 0, 4 * j, 1), vS.fillRect(0, 0, 1, j), vS.fillRect(4 * j, 0, 1,
				j), vS.fillRect(0, j - 1, 4 * j, 1), vS.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), vS.setTransform(1, 0, 0, 1, 0, 0)) : vS.drawImage(canvas, bc.gap, aR.fB)
	}, this.qP = function(player) {
		return 0 !== ag.mv[player] && 2 !== aD.a0p && !bA.gN.jj(player)
	}, this.a6j = function(f9, fB, f2) {
		vS.setTransform(1, 0, 0, 1, f9, fB), vS.lineWidth = bc.zn, vS.strokeStyle = bB.nv, vS.beginPath(), vS.moveTo(0, 0), vS.lineTo(f2, f2), vS.moveTo(0, f2), vS.lineTo(f2, 0), vS.stroke()
	}
}

function cE() {
	var a6l, j, a6m, a6n, a6o, a6p, a6q, a6r, a6s;

	function yz() {
		return aR.a7A(aN.a76()) ? aw.hn ? __fx.settings.keybindButtons ? aR.fB - 2 * aR.j - 3 * a6m : aR.fB - aR.j - 2 * a6m : __fx.settings.keybindButtons ? aR.fB - aR.j - 2 * a6m : aR.fB - a6m : bC.a7A(aN.a79()) ? aw.hn ? bC.yz() - aR.j - 2 * a6m :
			bC.yz() - a6m : aw.hn ? h.j - aR.j - (bk.a5x() + 1) * a6m : h.j - bk.a5x() * bc.gap
	}

	function a6x(ds, qV, id, gZ, a70, a71, kz, a72, a73, a74, a7E) {
		var aB, z3, a3h, qg, a7F = void 0 !== a73,
			i = Math.floor(aQ.measureText(qV, aN.a6Y) + 1.5 * a6n + (a7F ? j : 1.5 * a6n));
		if (bf.dk = !0, a7E || bq.a1D(qV, a73), i + 2 * a6m + aR.j > h.i && !a7F && 50 !== id && 20 < qV.length) a6x(ds, (a7E = bA.rn.a4z(qV))[0], id, gZ, a70, a71, kz, a72, a73, a74, !0), a6x(ds, a7E[1], id, gZ, a70, a71, kz, a72, a73, a74, !0);
		else if (a7E = i + (50 === id ? a6o : 0), (a3h = document.createElement("canvas")).width = i, a3h.height = j, (z3 = a3h.getContext("2d", {
				alpha: !0
			})).font = aN.a6Y, bA.qo.textBaseline(z3, 1), bA.qo.textAlign(z3, 0), z3.clearRect(0, 0, i, j), z3.fillStyle = a71, z3.fillRect(0, 0, i, j), z3.fillStyle = a70, z3.fillText(qV, Math.floor(1.5 * a6n), Math.floor(j / 2)), a7F && (z3
				.imageSmoothingEnabled = !0, aj.xT.zo(a73, z3, i - j, 0, j)), 0 === (qg = {
				eR: ds,
				qV: qV,
				id: id,
				player: gZ,
				canvas: a3h,
				a70: a70,
				a71: a71,
				i: i,
				a77: a7E,
				kz: kz,
				a72: a72,
				a73: a73,
				a74: a74
			}).eR || 0 < a6l.length && 0 < a6l[0].eR) a6l.unshift(qg);
		else {
			for (aB = 1; aB < a6l.length; aB++)
				if (0 < a6l[aB].eR) return void a6l.splice(aB, 0, qg);
			a6l.push(qg)
		}
	}

	function a6y(e9, tT, fM) {
		return "rgb(" + e9 + "," + tT + "," + fM + ")"
	}

	function a7G(id, gU) {
		for (var f2 = a6l.length, aB = 0; aB < f2; aB++) a6l[aB].id === id && gU-- <= 0 && (a6l.splice(aB, 1), aB--, f2--)
	}

	function a7H(id, player) {
		for (var fG = !1, aB = a6l.length - 1; 0 <= aB; aB--) a6l[aB].id !== id || player !== aD.ez && a6l[aB].player !== player || (a6l.splice(aB, 1), fG = !0);
		return fG
	}

	function a7d(qV) {
		a6x(340, qV, 6, 0, a6y(215, 245, 255), bB.ns, -1, !1)
	}
	this.a6t = "", this.dd = function() {
		var self;
		a6r = 0, a6q = a0.a1.iA() ? 7 : 12, a6p = {
			a0d: [0, 0, 0],
			a6u: [0, 0, 0],
			eH: [220, 180, 180],
			vQ: [0, 0, 0],
			ea: [0, 0, 0]
		}, a6l = [], this.resize(), aD.hP && this.a12(0, 18), bS.xG.xH[bS.ei].name.length && a7d(L(86, [bS.xG.xH[bS.ei].name])), a7d(L(87, [bS.fD - 2 + "x" + (bS.fE - 2)])), a7d(L(88, [bA.rn.a06(ap.a7e)])), ap.a7e !== ap.a7f && a7d(L(89, [bA
			.rn.a06(ap.a7f) + " (" + bA.rn.a4v(100 * ap.a7f / ap.a7e, 1) + ")"
		])), 0 < ap.a7g && a7d(L(66, [bA.rn.a06(ap.a7g) + " (" + bA.rn.a4v(100 * ap.a7g / ap.a7e, 1) + ")"])), 0 < ap.a7h && a7d(L(90, [bA.rn.a06(ap.a7h) + " (" + bA.rn.a4v(100 * ap.a7h / ap.a7e, 1) + ")"])), 10 === aD.ke && a6x(120, L(91),
			6, 0, a6y(235, 255, 120), bB.ns, -1, !1), 0 !== (self = this).a6t.length && (a6x(200, self.a6t, 0, 0, bB.nv, bB.ns, -1, !1), self.a6t = ""), aD.a1k && a6x(340, L(44), 6, 0, a6y(255, 200, 0), bB.ns, -1, !1)
	}, this.resize = function() {
		var a6z, aB;
		if (j = (j = Math.floor((a0.a1.iA() ? .031 : .0249) * h.iB)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a6Y = bA.qo.sf(1, this.fontSize), a6m = bc.gap, a6n = Math.floor(j / 5), 0 < a6l.length)
			for (a6z = a6l, a6l = [], aB = a6z.length - 1; 0 <= aB; aB--) a6x(a6z[aB].eR, a6z[aB].qV, a6z[aB].id, a6z[aB].player, a6z[aB].a70, a6z[aB].a71, a6z[aB].kz, a6z[aB].a72, a6z[aB].a73, a6z[aB].a74, !0);
		this.a75()
	}, this.a75 = function() {
		a6s = document.createElement("canvas");
		var qV = L(45),
			z3 = (a6o = aQ.measureText(qV, this.a6Y) + 5 * a6n, a6s.height = j, a6s.width = a6o, a6s.getContext("2d", {
				alpha: !0
			}));
		z3.font = this.a6Y, bA.qo.textBaseline(z3, 1), bA.qo.textAlign(z3, 1), z3.clearRect(0, 0, a6o, j), z3.fillStyle = bB.oI, z3.fillRect(0, 0, a6o, j), z3.fillStyle = bB.nv, z3.fillText(qV, Math.floor(a6o / 2), Math.floor(j / 2))
	}, this.a76 = function() {
		var f2;
		return aw.hn ? aw.i : 0 === (f2 = a6l.length) ? 0 : 1 === f2 ? a6l[0].a77 : a78(a6l[0].a77, a6l[1].a77)
	}, this.a79 = function() {
		var f2 = a6l.length;
		return aw.hn ? f2 ? a78(aw.i, a6l[0].a77) : aw.i : 0 === f2 ? 0 : 1 === f2 ? a6l[0].a77 : 2 === f2 ? a78(a6l[0].a77, a6l[1].a77) : a78(a78(a6l[0].a77, a6l[1].a77), a6l[2].a77)
	}, this.hE = function(f9, fB) {
		for (var nL, a7B, a7C = yz(), aB = a6l.length - 1; 0 <= aB; aB--)
			if ((a7B = a7C - (aB + 1) * j) <= fB && fB < a7B + j) return 50 === a6l[aB].id ? f9 >= h.i - a6o - a6m - a6l[aB].i && (f9 >= h.i - a6o - a6m ? b8.gN.pn(a6l[aB].player) : aH.nG(a6l[aB].player, 800, !1, 0), !0) : f9 >= h.i - a6l[aB].i -
				a6m && (736 === a6l[aB].id ? window.open("https://" + a6l[aB].qV, "_blank") : a6l[aB].a72 && (a6l[aB].a74 && a6l[aB].a74.fL ? (a7B = a6l[aB].a74.eo, nL = bM.fA(a7B) - 10, a7B = bM.fC(a7B) - 10, aH.nF(nL, a7B, 19 + nL, 19 +
					a7B)) : a6l[aB].a74 && a6l[aB].a74.fM ? aH.nH(a6l[aB].player, a6l[aB].a74.nI) : (aH.nG(a6l[aB].player, 800, !1, 0), 0 <= a6l[aB].kz && (nL = a6l[aB].kz, a6l[aB].kz = a6l[aB].player, a6l[aB].player = nL))), !0);
		return !1
	}, this.a1D = function(ds, qV, id, gZ, a70, a71, kz, a72, a73, a74) {
		a6x(ds, qV, id, gZ, a70, a71, kz, a72, a73, a74)
	}, this.a7D = function(r) {
		a6x(300, r, 252, 0, bB.nv, bB.ns, -1, !1)
	}, this.a5B = function(id) {
		for (var aB = a6l.length - 1; 0 <= aB; aB--) a6l[aB].id === id && (a6l[aB].eR = 1)
	}, this.a12 = function(player, id) {
		0 === id ? (aQ.eZ(player, 0), a7G(423, 2), a6x(160, L(46, [ag.a1S[player]]), 423, player, "rgb(10,220,10)", bB.ns, -1, !1)) : 1 === id ? (a7H(50, aD.ez), aQ.eZ(player, 1), a6x(360, L(47, [ag.a1S[player]]), 0, player, bB.ob, bB.ns, -1, !
				0), aH.nG(player, 2700, !1, 0)) : 2 === id ? (aQ.eZ(player, 2), a6x(0, L(48), 0, player, "rgb(10,255,255)", bB.ns, -1, !0), aH.nG(player, 2700, !1, 0)) : 3 === id ? (aQ.eZ(player, 2), a6x(0, L(49, [ag.a1S[player]]), 0, player, bB
				.nv, bB.ns, -1, !0), aH.nG(player, 2700, !1, 0)) : 4 === id ? this.a7I(1, player, player) : 5 === id ? bA.gN.jj(aD.em) || (function(id, mq) {
				var aB, a7S = 0,
					f2 = a6l.length;
				for (aB = 0; aB < f2; aB++)
					if (a6l[aB].id === id && mq <= ++a7S) return a6l.splice(aB, 1)
			}(1, 5), af.a7K(player) && a6x(180, L(50, [ag.a1S[player]]), 1, player, a6y(255, 200, 180), bB.ns, -1, !0), bA.gN.a4I(player, 10) && (a7G(573, 0), a6x(180, L(51, [ag.a1S[player]]), 573, player, bB.ob, bB.ns, -1, !0))) : 18 === id ?
			a6x(255, L(52), 18, 0, bB.nv, bB.ns, -1, !1) : 21 === id ? a6x(220, L(53), id, 0, bB.nv, bB.ns, -1, !1) : 22 === id ? this.a7I(2, player, player) : 59 === id && a6x(0, L(54), id, 0, bB.ov, bB.ns, 0, !1)
	}, this.a2A = function(r) {
		a6x(200, L(55, [r]), 94, 0, bB.nv, bB.oX, -1, !1)
	}, this.a1F = function(a7L) {
		if (aD.em === a7L && !aD.kg && !aD.hA)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a6x(0, "Your Win Count is now " + __fx.wins.count, 3, a7L, bB.nv, bB.ns, -1, !0);
		ag.gp[a7L] && (aQ.eZ(a7L, 2), aD.kM < 100 ? a6x(0, L(49, [ag.a1S[a7L]]), 3, a7L, bB.nv, bB.ns, -1, !0) : a6x(0, L(56, [ag.a1S[a7L]]), 3, a7L, bB.nv, bB.ns, -1, !0))
	}, this.a6R = function(eg) {
		var qV, a7N, a7M = "(" + bM.fA(eg >> 2) + ", " + bM.fC(eg >> 2) + ")",
			a72 = !1,
			player = 0;
		ac.ex(eg) ? ac.et(eg) ? a7M = L(57, [a7M]) : (player = ac.eu(eg), aD.hA && !1 === __fx.hoveringTooltip.active && (aD.em = player), qV = L(58, [bA.z3.a3v(ag.a1X[player], bA.qo.sf(0, 10), 150)]) + "   ", qV = (qV += L(59, [bA.rn.a06(ag.h3[
				player])]) + "   ") + L(60, [bA.rn.a06(ag.gp[player])]) + "   ", aD.hv && (a7N = bg.a1B[bg.kj[bg.f0[player]]], qV += L(61) + ": " + a7N + "   "), bA.gN.jj(player) && (qV += L(62) + ": " + aE.kX[aE.hk[player]] + "   "), a7M =
			qV = (qV += L(63, [player]) + "   ") + L(64, [a7M]), a72 = !0) : a7M = ac.f7(eg) ? L(65, [a7M]) + "   #" + ac.ek(eg) : L(66, [a7M]), bf.dk = !0, a7G(55, 0), a6x(220, a7M, 55, player, bB.nv, bB.ns, -1, a72, void 0, void 0, !0)
	}, this.a6T = function(a7O) {
		var lH = bN.y,
			player = lH.mG[a7O] >> 3,
			qV = (bf.dk = !0, a7G(55, 0), L(67, [ag.a1S[player]]) + "   ");
		a6x(220, qV += L(59, [bA.rn.a06(lH.a7P[a7O])]), 55, player, bB.nv, bB.ns, -1, !0)
	}, this.pW = function(pI, a7Q, pX) {
		pI === aD.em ? a6x(175, " " + L(68, [ag.a1S[a7Q]]) + ": ", 1001, a7Q, a6y(200, 255, 210), bB.ns, -1, !0, pX) : this.a7R(pI, pX)
	}, this.a7R = function(pI, pX) {
		a7G(1e3, 0), a6x(175, ag.a1S[pI] + ": ", 1e3, pI, bB.nv, "rgba(5,60,25,0.9)", -1, !0, pX)
	}, this.a1E = function() {
		var r;
		aD.a0u ? (r = L(69), aQ.a1C(L(70), 2, 1, 12), a6x(0, r, 40, 0, "rgb(10,220,10)", bB.ns, -1, !1)) : (r = L(71), aQ.a1C(L(72), 2, 0, 16), a6x(0, r, 41, 0, bB.nv, bB.ns, -1, !1))
	}, this.zA = function() {
		var gU = ag.a1S,
			f5 = aD.data;
		a6x(300, gU[0] + " [" + aD.a18.zG(f5.elo[0]) + "] vs " + gU[1] + " [" + aD.a18.zG(f5.elo[1]) + "]", 65, 0, bB.nm, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a7T = function(r) {
		a6x(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a7U = function(a7V) {
		a6x(0, L(a7V ? 73 : 74), 247, 0, bB.ou, bB.ns, -1, !1)
	}, this.zI = function(zF, zH, a7W) {
		var f5 = aD.data,
			gU = ag.a1S;
		a6x(0, gU[0] + ": " + aD.a18.zG(f5.elo[0]) + " -> " + zF, 66, 0, bB.nv, a7W[0], -1, !1), a6x(0, gU[1] + ": " + aD.a18.zG(f5.elo[1]) + " -> " + zH, 66, 1, bB.nv, a7W[1], -1, !1)
	}, this.po = function(player, id) {
		0 === id ? a7H(50, player) ? (a6x(128, L(75, [ag.a1S[player]]), 52, player, a6y(180, 255, 180), bB.ns, -1, !0), af.qN(player, 2, 255)) : a6x(384, L(76, [ag.a1S[player]]), 51, player, a6y(210, 210, 255), bB.ns, -1, !0) : a7H(51, player) ?
			(a6x(128, L(77, [ag.a1S[player]]), 52, player, bB.nv, "rgba(60,120,10,0.9)", -1, !0), af.qN(player, 2, 255)) : (a6x(384, L(78, [ag.a1S[player]]), 50, player, bB.nv, "rgba(90,90,90,0.9)", -1, !0), af.qN(player, 2, 96))
	}, this.ps = function(a0d, target) {
		var color = a6y(210, 255, 210);
		1 < a0d.length ? a6x(230, L(79, [a0d.length, ag.a1S[target]]), 66, target, color, bB.ns, -1, !0) : a6x(230, L(80, [ag.a1S[a0d[0]], ag.a1S[target]]), 66, a0d[0], color, bB.ns, target, !0)
	}, this.a7X = function(player, target) {
		a6x(230, L(81, [ag.a1S[player], ag.a1S[target]]), 66, player, bB.nv, "rgba(75,65,5,0.9)", target, !0)
	}, this.a7Y = function(id, gU) {
		a7G(id, gU)
	}, this.a0x = function(id, player) {
		a7H(id, void 0 === player ? aD.ez : player)
	}, this.a7Z = function(id) {
		for (var aB = a6l.length - 1; 0 <= aB; aB--)
			if (a6l[aB].id === id) return a6l[aB];
		return null
	}, this.pj = function(a5q, a7a, player) {
		2 !== ag.a4D[aD.em] && a6x(200, 1 === a5q ? L(82, [ag.a1S[player]]) : L(83, [bA.rn.a06(a5q), ag.a1S[player]]), 30, player, "rgb(190,255,190)", bB.ns, -1, !0)
	}, this.a7c = function(a5q, player) {
		2 !== ag.a4D[aD.em] && (a7G(31, 0), a5q = " (" + bA.rn.a06(a5q) + ") 💸", a6x(150, a5q = bA.gN.jj(player) ? L(84) + a5q : L(85, [ag.a1S[player]]) + a5q, 31, player, bB.nm, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a0w = function(bu) {
		for (var ea = bf.kJ(), aB = 2; 0 <= aB; aB--) 0 < a6p.vQ[aB] && (bu || a6p.ea[aB] < ea - 220) && this.a7i(aB)
	}, this.a7i = function(id) {
		var qV, f2 = a6p.vQ[id],
			player = a6p.a0d[id];
		a6p.vQ[id] = 0, 1 === f2 ? (0 === id ? qV = L(92, [ag.a1S[player], ag.a1S[a6p.a6u[0]]]) : 1 === id ? qV = L(93, [ag.a1S[player]]) : 2 === id ? qV = L(94, [ag.a1S[player]]) : 3 === id && (qV = L(95, [ag.a1S[player]])), a7G(7, 0), a6x(a6p
			.eH[id], qV, 7, a6p.a6u[id], bB.nv, bB.ns, -1, !0)) : (qV = L(0 === id ? 96 : 1 === id ? 97 : 98, [f2]), a7G(7, 0), a6x(a6p.eH[id], qV, 7, player, bB.nv, bB.ns, -1, !1))
	}, this.a7I = function(id, hT, kz) {
		var ea = bf.kJ(),
			f2 = a6p.vQ[id] + 1;
		a6p.vQ[id]++, a6p.a0d[id] = hT, a6p.a6u[id] = kz, 1 === f2 && (a6p.ea[id] = ea), (1 === f2 && (aD.a0s < 32 || 2 === aD.a0p) || 1 < f2 && (a6p.ea[id] < ea - 140 || 2 === aD.a0p)) && this.a7i(id)
	}, this.eV = function() {
		b2.eV();
		for (var jb = (jb = a6l.length - a6q) <= 1 ? 1 : jb * jb, aB = a6l.length - 1; 0 <= aB; aB--) 0 < a6l[aB].eR && (a6l[aB].eR -= jb, a6l[aB].eR <= 0) && (bf.dk = !0, a6l.splice(aB, 1));
		! function() {
			var gU, aB;
			if (128 !== a6r && !(++a6r < 128))
				for (gU = 5, aB = al.ks - 1; 0 <= aB; aB--) 1 === ag.a4D[al.kx[aB]] && 0 < gU-- && a6x(240, L(95, [ag.a1S[al.kx[aB]]]), 1, al.kx[aB], bB.nm, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0w(!1)
	}, this.vR = function() {
		for (var y1, fB = yz(), aB = a6l.length - 1; 0 <= aB; aB--) y1 = fB - (aB + 1) * j, 50 === a6l[aB].id ? (vS.drawImage(a6l[aB].canvas, h.i - a6l[aB].i - a6o - a6m, y1), vS.drawImage(a6s, h.i - a6o - a6m, y1)) : vS.drawImage(a6l[aB].canvas,
			h.i - a6l[aB].i - a6m, y1)
	}
}

function cF() {
	var a7l, a7m, vT = "",
		xm = 0,
		xn = 0,
		a7k = -1,
		e5 = ["Team", "Zombie", "BR", "1v1"];

	function a7n() {
		for (var ds = new Date, a7o = ds.getUTCMinutes(), ds = ds.getUTCSeconds(), a7q = [], a7r = 0, aB = 0; aB < 6; aB++) a7q.push(a7r), a7q.push(a7r + 2), a7q.push(a7r + 5), a7q.push(a7r + 7), a7r += 10;
		for (var f2 = a7q.length, aB = 1; aB < f2 && !(a7o < a7q[aB]); aB++);
		aB %= f2;
		ds = (a7q[0] = 60) * (a7q[aB] - a7o) - ds;
		return ds !== a7k && (vT = e5[aB % 4] + " " + a7m + ": " + a7t(Math.floor(ds / 60)) + ":" + a7t(ds % 60), a7k = ds, xm = aQ.measureText(vT, a7l), xm += Math.floor(.4 * xn), 1)
	}

	function a7t(a7u) {
		return a7u < 10 ? "0" + a7u : String(a7u)
	}
	this.dd = function() {
		a7m = L(99)
	}, this.resize = function() {
		xm = Math.floor((a0.a1.iA() ? .53 : .36) * h.iB), xn = Math.floor(.065 * xm), a7l = bA.qo.sf(1, Math.floor(.9 * xn)), a7k += 1e3, a7n()
	}, this.eV = function() {
		a7n() && (bf.dk = !0)
	}, this.vR = function(fB) {
		vS.lineWidth = 1 + Math.floor(xn / 15), vS.translate(h.i - xn, fB + xm), vS.rotate(-Math.PI / 2), vS.fillStyle = bB.nv, vS.fillRect(0, 0, xm, xn), vS.strokeStyle = bB.nm, vS.strokeRect(0, 0, xm, xn + 10), vS.fillStyle = bB.nm, vS.font =
			a7l, bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 1), vS.fillText(vT, Math.floor(xm / 2), Math.floor(.59 * xn)), vS.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a5p, a7v, a7w, xn, a7x, a7y = 0,
		a7z = 0;

	function a81(aB) {
		var a83 = !0,
			zv = bB.nv,
			i = (1 === a5p[aB].id ? a5p[aB].z3.fillStyle = bB.op : a5p[aB].jV === aD.ez ? a5p[aB].z3.fillStyle = bB.o6 : (ac.a84(a5p[aB].jV), a5p[aB].z3.fillStyle = bA.color.np(bO.fa[0], bO.fa[1], bO.fa[2], .87), 400 < bA.qw.a3L(bO.fa, 0, 2) && (
				a83 = !1, zv = bB.nm)), a5p[aB].canvas.width),
			tC = (a5p[aB].z3.clearRect(0, 0, i, xn), a5p[aB].z3.fillRect(0, 0, i, xn), a5p[aB].z3.fillStyle = zv, ! function(z3, i, xn) {
				z3.fillRect(0, 0, i, 1), z3.fillRect(0, xn - 1, i, 1), z3.fillRect(0, 0, 1, xn), z3.fillRect(i - 1, 0, 1, xn)
			}(a5p[aB].z3, i, xn), a7v + 2 * xn < i && (a5p[aB].z3.fillRect(i - a7v - xn, 0, 1, xn), a5p[aB].z3.fillText(ag.a1S[a5p[aB].jV], Math.floor((i - a7v) / 2), Math.floor(.57 * xn))), 0 !== a5p[aB].id ? 0 : xn);
		a5p[aB].z3.fillText(bA.rn.a06(a5p[aB].hk), Math.floor(i - a7v / 2 - tC), Math.floor(.57 * xn)),
			function(aB, i, tC, a83) {
				a5p[aB].z3.fillStyle = a83 ? bB.nx : bB.nt;
				a83 = Math.floor(a7v * a5p[aB].hk / a5p[aB].a8A);
				a5p[aB].z3.fillRect(Math.floor(i - a7v - tC), xn - a7x, a83, a7x)
			}(aB, i, tC, a83), 0 === a5p[aB].id ? (a87(aB, i, a83, zv), function(aB, i, a83) {
				a5p[aB].z3.strokeStyle = a83 ? bB.oD : bB.oN, a5p[aB].z3.fillRect(xn, 0, 1, xn);
				a83 = i - xn;
				a5p[aB].z3.beginPath(), a5p[aB].z3.moveTo(Math.floor(.3 * xn + a83), Math.floor(xn / 2)), a5p[aB].z3.lineTo(Math.floor(xn - .3 * xn + 0 + a83), Math.floor(xn / 2)), a5p[aB].z3.stroke(), a5p[aB].z3.beginPath(), a5p[aB].z3.moveTo(
					Math.floor(xn / 2 + a83), Math.floor(.3 * xn)), a5p[aB].z3.lineTo(Math.floor(xn / 2 + a83), Math.floor(xn - .3 * xn + 0)), a5p[aB].z3.stroke()
			}(aB, i, a83)) : a87(aB, 2 * xn, a83, zv)
	}

	function a87(aB, i, a83, zv) {
		a5p[aB].z3.strokeStyle = a5p[aB].a8B ? bB.o4 : a83 ? bB.oT : bB.oU, a5p[aB].z3.fillStyle = zv, a5p[aB].z3.fillRect(i - xn, 0, 1, xn), a5p[aB].z3.lineWidth = Math.max(Math.floor(xn / 12), 3), a5p[aB].z3.lineCap = "round";
		a83 = .35;
		i = xn + 1, a5p[aB].z3.beginPath(), a5p[aB].z3.moveTo(Math.floor(i - a83 * xn + 0), Math.floor(a83 * xn)), a5p[aB].z3.lineTo(Math.floor(i - xn + a83 * xn), Math.floor(xn - a83 * xn + 0)), a5p[aB].z3.stroke(), a5p[aB].z3.beginPath(), a5p[aB]
			.z3.moveTo(Math.floor(i - xn + a83 * xn), Math.floor(a83 * xn)), a5p[aB].z3.lineTo(Math.floor(i - a83 * xn + 0), Math.floor(xn - a83 * xn + 0)), a5p[aB].z3.stroke()
	}

	function a8N(g, a8L) {
		for (var hk, aB = a8L - 1; 0 <= aB; aB--) hk = ad.gE(aD.em, aB), g[aB].hk !== hk && (g[aB].hk = hk, g[aB].a8A = Math.max(hk, g[aB].a8A), g[aB].a82 = !0)
	}

	function a8R(g, a8P) {
		for (var tP = aD.em << 3, a7P = bN.y.a7P, mD = bN.y.mD, a8T = bN.y.a8T, aB = a8P - 1; 0 <= aB; aB--) {
			var a8U = a8T[tP + aB],
				hk = a7P[a8U];
			g[aB].hk !== hk ? (g[aB].hk = hk, g[aB].a8A = Math.max(hk, g[aB].a8A), g[aB].a82 = !0) : g[aB].a8B || mD[a8U] % 64 != 5 || (g[aB].a8B = !0, g[aB].a82 = !0)
		}
	}

	function a80(a5s) {
		a5s.canvas = document.createElement("canvas"), bS.xM.font = a7w;
		var i = a7v;
		a5s.jV < aD.ez && 0 === a5s.id && (i += Math.floor(bS.xM.measureText(ag.a1S[a5s.jV] + "000").width)), i += xn, 0 === a5s.id && (i += xn), a5s.canvas.width = i, a5s.canvas.height = xn, a5s.z3 = a5s.canvas.getContext("2d", {
			alpha: !0
		}), a5s.z3.font = a7w, bA.qo.textBaseline(a5s.z3, 1), bA.qo.textAlign(a5s.z3, 1)
	}

	function a8H(aB) {
		return aU.a8V() ? h.i - a5p[aB].canvas.width - bc.gap : aU.f9
	}

	function a8I(aB) {
		return Math.floor(2 * bc.gap + (aU.a8V() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * xn))
	}
	this.dd = function() {
		a7y = a7z = 0, a5p = [], this.resize()
	}, this.resize = function() {
		a7w = aN.a6Y, xn = aN.fontSize + 5, xn = Math.floor(1.25 * xn), a0.a1.iA() && (xn = Math.floor(1.25 * xn)), a7x = Math.floor(.15 * xn), bS.xM.font = a7w, a7v = Math.floor(bS.xM.measureText("02 000 000 0000").width);
		for (var aB = a5p.length - 1; 0 <= aB; aB--) a80(a5p[aB]), a81(aB)
	}, this.mh = function() {
		for (var aB = a5p.length - 1; 0 <= aB; aB--) a5p[aB].a82 && (a5p[aB].a82 = !1, a81(aB))
	}, this.hE = function(lb, lc) {
		if (2 !== aD.a0p && 0 !== ag.mv[aD.em] && !aD.hA && !bA.gN.jj(aD.em))
			for (var a8C, a8D, a8E, a8F = a0.a1.iA() ? xn : 0, a8G = a0.a1.iA() ? Math.floor(.15 * xn) : 0, aB = a5p.length - 1; 0 <= aB; aB--)
				if (a8C = a8H(aB), a8D = a8I(aB), a8E = a5p[aB].canvas.width, a8D - a8G <= lc && lc <= a8D + xn + a8G) {
					if (a8C - a8F <= lb && lb <= a8C + xn + a8F) return a5p[aB].a8B || (a5p[aB].a82 = !0, a5p[aB].a8B = !0, 0 === a5p[aB].id ? b8.hR.pU(a5p[aB].jV) : b8.hR.pT(a5p[aB].jV)), !0;
					if (0 === a5p[aB].id && a8C + a8E - xn - a8F <= lb && lb <= a8C + a8E + a8F) return bV.a6H(3), b8.hR.hY(aR.hV(), a5p[aB].jV), !0
				} return !1
	}, this.eV = function() {
		var a3T, a3U, g, a8L;
		0 === ag.mv[aD.em] || bA.gN.jj(aD.em) && !aD.hA || (a3T = a5p.slice(0, a7y), a3U = a5p.slice(a7y, a7y + a7z), g = a3T, a8L = ad.g8(aD.em), function(g, a8L) {
			if (a7y !== a8L) return 1;
			for (var aB = a8L - 1; 0 <= aB; aB--)
				if (g[aB].jV !== ad.gD(aD.em, aB)) return 1;
			return
		}(g, a8L) ? a8N(g = function(g, a8L) {
			var aB, jV, fM, hk, a6z = [];
			loop: for (aB = 0; aB < a8L; aB++) {
				for (jV = ad.gD(aD.em, aB), fM = 0; fM < g.length; fM++)
					if (g[fM].jV === jV) {
						a6z.push(g.splice(fM, 1)[0]);
						continue loop
					} hk = ad.gE(aD.em, aB), a80(hk = {
					jV: jV,
					hk: hk,
					a8A: hk,
					id: 0,
					a82: !0,
					a8B: !1,
					canvas: null,
					z3: null
				}), a6z.push(hk)
			}
			return a6z
		}(g, a8L), a8L) : a8N(g, a8L), a3T = g, a3U = function(g) {
			var a8P = bN.y.kQ[aD.em];
			return function(g, a8P) {
				if (a7z !== a8P) return 1;
				for (var tP = aD.em << 3, mF = bN.y.mF, a8T = bN.y.a8T, aB = a8P - 1; 0 <= aB; aB--) {
					var a8U = a8T[tP + aB];
					if (g[aB].jV !== mF[a8U]) return 1
				}
				return
			}(g, a8P) ? a8R(g = function(g, a8P) {
				var aB, jV, fM, a6z = [],
					tP = aD.em << 3,
					mF = bN.y.mF,
					a7P = bN.y.a7P,
					a8T = bN.y.a8T;
				loop: for (aB = 0; aB < a8P; aB++) {
					var a8U = a8T[tP + aB];
					for (jV = mF[a8U], fM = 0; fM < g.length; fM++)
						if (g[fM].jV === jV) {
							a6z.push(g.splice(fM, 1)[0]);
							continue loop
						} a8U = a7P[a8U], a80(a8U = {
						jV: jV,
						hk: a8U,
						a8A: a8U,
						id: 1,
						a82: !0,
						a8B: !1,
						canvas: null,
						z3: null
					}), a6z.push(a8U)
				}
				return a6z
			}(g, a8P), a8P) : a8R(g, a8P), g
		}(a3U), a7y = a3T.length, a7z = a3U.length, a5p = a3T.concat(a3U))
	}, this.vR = function() {
		if (0 !== ag.mv[aD.em] && (!bA.gN.jj(aD.em) || aD.hA))
			for (var aB = a5p.length - 1; 0 <= aB; aB--) vS.drawImage(a5p[aB].canvas, a8H(aB), a8I(aB))
	}
}

function cH() {
	var a6l, kR, a8W, a8X, j, a6Y, fontSize, a8Y, a8Z, a8a, a8b, canvas, z3, n8, a8c;

	function vi(aB) {
		return L(0 === aB ? 100 : 1 === aB ? 101 : 2 === aB ? 102 : 103)
	}

	function a8j() {
		aD.hv ? a8k + 4 * bc.gap + j + bh.a8l() > aR.fB ? vS.drawImage(canvas, 2 * bc.gap + bh.a8l(), a8k + 2 * bc.gap) : vS.drawImage(canvas, bc.gap, a8k + 3 * bc.gap + bh.a8l()) : vS.drawImage(canvas, bc.gap, a8k + 2 * bc.gap)
	}

	function a8d() {
		canvas.width = a6l[0].width + a8a, canvas.height = j + a8a, (z3 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a6l[0].width + a8a, j + a8a), z3.translate(Math.floor(a8a / 2), Math.floor(a8a / 2)), z3.lineWidth = a8a, z3.fillStyle = 1 === a6l[0].a8i ? bB.o0 : bB.ns, a8m(), z3.fill(), z3.strokeStyle = 1 === a6l[0].a8i ? bB.nm :
			bB.nv, a8m(), z3.stroke(), bA.qo.textAlign(z3, 1), bA.qo.textBaseline(z3, 1), z3.fillStyle = 1 === a6l[0].a8i ? bB.nm : bB.nv, z3.font = a6Y[0], z3.fillText(vi(a6l[0].a8h), Math.floor(a6l[0].width / 2), Math.floor(.72 * a8Y[0] * j)), z3
			.font = a6Y[1], z3.fillText(a6l[0].qV, Math.floor(a6l[0].width / 2), Math.floor((a8Y[0] + .48 * a8Y[1]) * j))
	}

	function a8m() {
		z3.beginPath(), z3.moveTo(a8b, 0), z3.lineTo(a6l[0].width - a8b, 0), z3.lineTo(a6l[0].width, a8b), z3.lineTo(a6l[0].width, j - a8b), z3.lineTo(a6l[0].width - a8b, j), z3.lineTo(a8b, j), z3.lineTo(0, j - a8b), z3.lineTo(0, a8b), z3.closePath()
	}
	this.dd = function() {
		kR = 4, a8W = a8X = n8 = 0, a6l = [], a6Y = new Array(2), fontSize = new Array(2), (a8Y = new Array(2))[0] = .3, a8Y[1] = .7, a8Z = new Array(4), canvas = document.createElement("canvas"), a8c = bf.eR + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.iA() ? .062 : .047) * h.iB), fontSize[0] = Math.floor(.85 * a8Y[0] * j), fontSize[1] = Math.floor(.85 * a8Y[1] * j), a6Y[0] = bA.qo.sf(1, fontSize[0]), a6Y[1] = bA.qo.sf(1, fontSize[1]), aB = a8Z.length -
			1; 0 <= aB; aB--) a8Z[aB] = this.measureText(vi(aB) + "000", a6Y[0]);
		if (a8a = Math.floor(1 + .05 * j), a8b = Math.floor(.2 * j), 0 < a6l.length) {
			for (aB = a6l.length - 1; 0 <= aB; aB--) i = this.measureText(a6l[aB].qV + "00", a6Y[1]), a6l[aB].width = i < a8Z[aB] ? a8Z[aB] : i;
			a8d()
		}
	}, this.eV = function() {
		0 !== kR && (4 === kR ? bf.eR > a8c && (kR = 0, 1 === aD.a0p) && aQ.a1C(bS.xG.xH[bS.ei].name, 3, 1, 9) : (1 === kR ? (0 === a8W && (a8d(), a8W = 1e-4), 1 <= (a8W += .002 * (bf.eR - n8)) && (a8X = 0, kR = 2, a8W = 1), bf.dk = !0) : 2 ===
			kR ? ((a8X += (bf.eR - n8) / 1e3) > a6l[0].eH || 1 < a8X && 1 < a6l.length) && (kR = 3) : 3 === kR && ((a8W -= .002 * (bf.eR - n8)) <= 0 && (a8W = 0, a6l.shift(), kR = 0 < a6l.length ? 1 : 0), bf.dk = !0), n8 = bf.eR))
	}, this.measureText = function(qV, a6Y) {
		return vS.font = a6Y, Math.floor(vS.measureText(qV).width)
	}, this.eZ = function(a8g, aB) {
		this.a1C(ag.a1S[a8g], aB, 1, 0 === aB ? 3 : 7)
	}, this.a1C = function(qV, a8h, a8i, eH) {
		var i;
		qV.length && (i = (i = this.measureText(qV + "00", a6Y[1])) < a8Z[a8h] ? a8Z[a8h] : i, a6l.push({
			qV: qV,
			width: i,
			a8h: a8h,
			a8i: a8i,
			eH: eH
		}), 0 === kR) && (a8W = 0, kR = 1, n8 = bf.eR)
	}, this.vR = function() {
		0 !== kR && 0 !== a8W && (a8W < 1 ? (vS.globalAlpha = a8W, a8j(), vS.globalAlpha = 1) : a8j())
	}
}

function cq() {
	var j, canvas, z3, a8n, a8o, a8p, a8q, a82, a8r, a8s, a8t, a8u, a7V = !1,
		a3h = (this.hn = !1, this.i = 0, new Array(2)),
		a8v = 0;

	function mi() {
		var i = aw.i,
			lH = (a82 = !1, z2(z3, i, j), Math.floor(i / 2));
		1 === a8n ? (z3.fillStyle = bB.oF, z3.fillRect(lH, 0, lH, j)) : -1 === a8n && (z3.fillStyle = bB.oV, z3.fillRect(0, 0, lH, j)), z4(z3, i, j, 2);
		var lH = (lH = Math.floor(.25 * j)) < 2 ? 2 : lH,
			a7e = (z3.fillStyle = bB.o1, Math.floor((j - 4) * a8o[1] / a8p[1]));
		0 < a7e && z3.fillRect(2, j - 2 - a7e, lH, a7e), 0 < (a7e = Math.floor((j - 4) * a8o[0] / a8p[0])) && z3.fillRect(i - 2 - lH, j - 2 - a7e, lH, a7e);
		lH = (lH = Math.floor(j / 8)) < 2 ? 2 : lH, z6(z3, Math.floor(.4 * j), 0, j, lH, .5, !1), z6(z3, Math.floor(i - 1.4 * j), 0, j, lH, .5, !0), a7e = 1.1 * j / a3h[0].width;
		z3.imageSmoothingEnabled = !0, z3.setTransform(a7e, 0, 0, a7e, (i - a7e * a3h[0].width) / 2, -.05 * j), z3.drawImage(a3h[+a7V], 0, 0), z3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a90() {
		a8u = -1, a7V = ah.a91(), aN.a5B(257), aN.a7U(a7V), aw.hn = !0, a82 = !0, a8r = 360;
		for (var fT, ds = 0, aB = al.ks - 1; 0 <= aB; aB--) bA.gN.jj(al.kx[aB]) || (ds += ag.gp[al.kx[aB]]);
		a7V ? a8p[0] = Math.max(bL.dt(3 * ds, 4), 1) : aD.hv ? (fT = 9 === aD.ke && 8 === bg.kj[bh.kv()] ? 80 : (fT = bL.dt(100 * bh.kt(), aD.k6), bL.i9(200 - 2 * fT, 40, 100)), fT = bL.dt(fT * ds, 100), a8p[0] = Math.max(fT, 1)) : 8 === aD.ke ? a8p[
			0] = Math.max(bL.dt(3 * ds, 4), 1) : a8p[0] = Math.max(bL.dt(3 * ds, 5), 1), a8p[1] = Math.max(ds - a8p[0], 1)
	}

	function a8w() {
		a8t = bf.kJ(), a82 = !0, a8r = a8n = 0, a8q = [], aw.hn = !1, aN.a0x(247), a8o[0] = a8o[1] = 0, aN.a5B(673)
	}

	function yz() {
		return aR.a7A(aN.a76()) ? __fx.settings.keybindButtons ? aR.fB - 2 * (j + bc.gap) : aR.fB - j - bc.gap : bC.a7A(aN.a79()) ? bC.yz() - j - bc.gap : h.j - j - bk.a5x() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a3h[aB] = bA.canvas.zZ(ab.get(3), 8 - aB, bB.p8), a3h[aB] = bA.canvas.a3j(a3h[aB])
	}, this.dd = function() {
		a8t = -1e4, a8s = a8v = 0, a8u = -1, this.hn = !1, a82 = a7V = !1, a8o = [a8n = a8r = 0, 0], a8p = [1, 1], a8q = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, z3 = canvas.getContext("2d", {
			alpha: !0
		}), mi()
	}, this.mh = function() {
		a82 && mi()
	}, this.hE = function(f9, fB) {
		return !!this.hn && !(f9 < h.i - this.i - bc.gap || fB < yz() || (aD.hA || this.ho(aD.em) && (aM.hB && aM.a2y(), b8.hR.hp(f9 > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.eV = function() {
		0 < a8s ? 0 === --a8s && a8w() : this.hn ? 180 == --a8r && 3 * a8o[0] < a8p[0] ? a8w() : a8o[0] >= a8p[0] ? a7V ? bR.a0R.a0k() : bR.a0R.a0o() : a8o[1] >= a8p[1] ? a8s = 4 : a8r <= 0 && a8w() : ! function() {
			var a93 = bf.kJ();
			if (a93 % 40 == 14) {
				if (a8v) return !(a93 < a8v) && !(a93 < a8t + 535) && (a8v = a93 + 1071, bA.gN.a4G()) ? (a90(), 1) : 0;
				(1 === al.ks || (aD.hv ? bh.kt() : ag.gp[lx[0]]) >= bL.dt(96 * aD.k6, 100)) && (a8v = a93 + 535)
			}
			return
		}() && 0 <= a8u && (aN.a1D(250, L(104, [ag.a1S[a8u]]), 673, a8u, bB.nv, bB.ns, -1, !0), a90())
	}, this.a0q = function() {
		this.hn && a8o[0] < a8p[0] && a8w()
	}, this.qO = function(player, a94) {
		var a95 = L(a94 ? 105 : 106, [ag.a1S[player]]),
			a95 = (aN.a1D(450, a95, 257, player, a94 ? bB.oD : bB.oS, bB.ns, -1, !0), a8q.push(player), a82 = !0, aD.kg ? Math.max(a8p[0], a8p[1]) : ag.gp[player]),
			a95 = Math.max(a95, 1);
		a94 ? a8o[0] += a95 : a8o[1] += a95, player === aD.em && (a8n = a94 ? 1 : -1)
	}, this.vR = function() {
		var fB;
		this.hn && (fB = yz(), vS.drawImage(canvas, h.i - this.i - bc.gap, fB))
	}, this.hq = function(player) {
		if (0 !== a8r) return !1;
		if (!bA.gN.hC(1)) return !1;
		if (!bA.gN.hD(player)) return !1;
		if (10 <= k7[player] && !bA.gN.a4Z(player, 9)) return !1;
		if (!aD.kg) {
			player = bf.kJ();
			if (player < a8t + 100) return !!void 0;
			if (player < 1607) return !!void 0
		}
		return !!1
	}, this.ho = function(gZ) {
		if (!bA.gN.hC(1)) return !1;
		if (!bA.gN.hD(gZ)) return !1;
		if (!this.hn) return !1;
		for (var aB = a8q.length - 1; 0 <= aB; aB--)
			if (a8q[aB] === gZ) return !1;
		return !0
	}, this.hm = function(player) {
		a8u = player
	}
}

function cI() {
	var i, f9, a97, canvas, z3, hn, ib, a52, a6Y, a82, a98 = 11 / 12;

	function a9A() {
		var a89 = Math.floor(ib * (i - 2 * a97)),
			a9D = 1 + Math.floor(.0625 * aR.j),
			a9E = 1 + Math.floor(.3 * aR.j),
			a9F = Math.floor(.55 * aR.j);
		z3.clearRect(0, 0, i, aR.j), z3.fillStyle = bB.nr, z3.fillRect(0, 0, a97, aR.j), z3.fillRect(a97 + a89, 0, i - a97 - a89, aR.j), z3.fillStyle = ib < 1 / 3 ? "rgba(" + Math.floor(3 * ib * 130) + ",130,0,0.85)" : ib < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (ib - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (ib - 2 / 3) * 130) + ",0.85)", z3.fillRect(a97, 0, a89, aR.j), z3.fillStyle = bB.nv, z3.fillRect(0, 0, i, 1), z3.fillRect(0, aR.j - 1, i, 1), z3
			.fillRect(0, 0, 1, aR.j), z3.fillRect(a97, 0, 1, aR.j), z3.fillRect(a97 + a89, 0, 1, aR.j), z3.fillRect(i - a97, 0, 1, aR.j), z3.fillRect(i - 1, 0, 1, aR.j), z3.fillRect(Math.floor(.25 * aR.j) + a9E, Math.floor((aR.j - a9D) / 2), aR.j -
				2 * a9E, a9D), z3.fillRect(Math.floor(i - 1.25 * aR.j) + a9E, Math.floor((aR.j - a9D) / 2), aR.j - 2 * a9E - a9E % 2, a9D), z3.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a9D) / 2), a9E, a9D, aR.j - 2 * a9E - a9E % 2),
			a52 = bA.gN.ia(aD.em, aR.hV()), z3.fillText(bA.rn.a06(a52) + " (" + bA.rn.a4v(100 * ib, +(ib < .1)) + ")", Math.floor(.5 * i), a9F)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		ib = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2u(arg1);

	function a9K(a3G) {
		return !(1 < a3G && 1 === ib || (1 < a3G && a3G * ib - ib < 1 / 1024 ? a3G = (ib + 1 / 1024) / ib : a3G < 1 && ib - a3G * ib < 1 / 1024 && (a3G = (ib - 1 / 1024) / ib), ib = bL.i9(ib * a3G, 1 / 1024, 1), a9A(), 0))
	}

	function a9L(lb) {
		return ib !== (ib = bL.i9((lb - f9 - a97) / (i - 2 * a97), 1 / 1024, 1)) && (a9A(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a9A(), bf.dk = !0
	}, this.fB = 0, this.hF = !1, this.dd = function() {
		hn = !aD.hP && !aD.hA, a82 = !1, ib = .5, a52 = 0, this.hF = !1, this.resize()
	}, this.resize = function() {
		a0.a1.iA() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.iB), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.iA() ? .65 : .389) * h.iB), i += 12 - i % 12, this.j = Math.floor(i / 12)), a97 = Math.floor(3 * this.j / 2), a6Y =
			bA.qo.sf(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, vS), canvas.height = this.j, (z3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6Y, bA.qo.textBaseline(z3, 1), bA.qo.textAlign(z3, 1), this.a99(), a9A()
	}, this.a99 = function() {
		f9 = a0.a1.iA() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.fB = h.j - this.j - bk.a5x() * bc.gap
	}, this.mh = function() {
		a82 && (a82 = !1, a9A())
	}, this.hn = function() {
		return !(!hn || aM.hB && f9 < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a7A = function(a9G) {
		return !!this.hn() && f9 + i > h.i - a9G - bc.gap
	}, this.a59 = function() {
		hn = !aD.hA
	}, this.a8w = function() {
		hn = !1
	}, this.hV = function() {
		return bL.i9(Math.floor(1024 * ib + .5) - 1, 0, 1023)
	}, this.a2r = function(lb, lc) {
		return this.hn() && f9 < lb && lb < f9 + i && lc > this.fB
	}, this.hE = function(lb, lc) {
		if (!this.hn()) return !1;
		if (!(__fx.settings.keybindButtons && lc > this.fB - Math.floor(bc.gap / 4) - this.j && lc < this.fB - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lb - f9))) {
			if (!aR.a2r(lb, lc)) return !1;
			aS.nQ = !1, ! function(sQ, lb, lc) {
				if (function(lb, lc) {
						return f9 < lb && lb < f9 + a97 && lc > aR.fB
					}(lb, lc)) return a9K(a98);
				if (function(lb, lc) {
						return f9 + i - a97 < lb && lb < f9 + i && lc > aR.fB
					}(lb, lc)) return a9K(1 / a98);
				return sQ.hF = !0, a9L(lb)
			}(this, lb, lc) || (bf.dk = !0)
		}
		return !0
	}, this.a2u = function(nX) {
		0 !== aD.a0p && this.hn() && a9K(nX) && (bf.dk = !0)
	}, this.a2Q = function(deltaY) {
		var nX;
		return !(0 === deltaY || !this.hn()) && a9K(nX = 0 < deltaY ? (nX = 400 / (400 + deltaY)) < a98 ? a98 : nX : 1 / a98 < (nX = (400 - deltaY) / 400) ? 1 / a98 : nX)
	}, this.a2N = function(lb) {
		return !!this.hF && a9L(lb)
	}, this.a2n = function() {
		this.hF = !1
	}, this.eV = function() {
		this.hn() && a52 !== bA.gN.ia(aD.em, this.hV()) && (a82 = !0)
	}, this.vR = function() {
		this.hn() && (vS.drawImage(canvas, f9, this.fB), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(vS, f9, this.fB)
	}
}

function d0() {
	var canvas, z3, a9M, font, a9N = 0,
		a9O = !1,
		a9P = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a9Q = 5;

	function a9X() {
		if (a9O) {
			var aB, f2 = a9P.length,
				a9F = Math.floor(.5 * a9M.j),
				j = f2 * a9F,
				f9 = Math.floor(Math.floor(a9M.f9) + .3 * a9M.i - .5),
				fB = Math.floor(Math.floor(a9M.fB) - j),
				i = Math.floor(.4 * a9M.i + 2.5);
			for (vS.fillStyle = bB.nr, vS.fillRect(f9, fB, i, j), vS.fillStyle = bB.oK, vS.fillRect(f9, fB + a9Q * a9F, i, a9F), vS.fillStyle = bB.nv, vS.fillRect(f9, fB, 2, j), vS.fillRect(f9, fB, i, 2), vS.fillRect(f9 + i - 2, fB, 2, j), aB =
				1; aB < f2; aB++) vS.fillRect(f9, fB + aB * a9F, i, 2);
			for (vS.fillStyle = bB.nv, bA.qo.textAlign(vS, 1), bA.qo.textBaseline(vS, 1), vS.font = bA.qo.sf(0, .6 * a9F), f9 += .5 * i, aB = 0; aB < f2; aB++) vS.fillText(a9f(aB), f9, fB + (aB + .6) * a9F)
		}
		vS.drawImage(canvas, Math.floor(a9M.f9), Math.floor(a9M.fB))
	}

	function mi(sQ) {
		var f9, nL, nM, a9F;
		z3.clearRect(0, 0, Math.floor(a9M.i), Math.floor(a9M.j)), z3.fillStyle = bB.nr, z3.fillRect(0, 0, Math.floor(a9M.i), Math.floor(a9M.j)), aD.nO && (z3.fillStyle = bB.oK, z3.fillRect(0, 0, Math.floor(.3 * a9M.i), Math.floor(a9M.j))), z3
			.fillStyle = bB.nv, z3.fillText("Hide UI", .15 * a9M.i, .5 * a9M.j), z3.fillRect(Math.floor(.3 * a9M.i - .5), 0, 2, Math.floor(a9M.j)), f9 = .5 * a9M.i, z3.fillText("Replay Speed", f9, .31 * a9M.j), z3.fillText(a9f(a9Q), f9, .69 * a9M.j),
			z3.fillRect(Math.floor(.7 * a9M.i - .5), 0, 2, Math.floor(a9M.j)), sQ.a5g ? (f9 = Math.floor(.02 * a9M.i), sQ = Math.floor(.025 * a9M.i), nL = Math.floor(.85 * a9M.i - f9 - .5 * sQ), nM = Math.floor(.25 * a9M.j), a9F = Math.floor(a9M.j) -
				2 * nM, z3.fillRect(nL, nM, f9, a9F), z3.fillRect(nL + f9 + sQ, nM, f9, a9F)) : function() {
				var i = Math.floor(.46 * a9M.j),
					j = Math.floor(.23 * a9M.j),
					f9 = Math.floor(.85 * a9M.i - .5 * i + i / 12),
					fB = Math.floor(.5 * a9M.j - j);
				z3.beginPath(), z3.moveTo(f9, fB), z3.lineTo(f9 + i, fB + j), z3.lineTo(f9, fB + (j << 1)), z3.fill()
			}(), z3.fillRect(0, 0, Math.floor(a9M.i), 2), z3.fillRect(0, 0, 2, Math.floor(a9M.j)), z3.fillRect(0, Math.floor(a9M.j) - 2, Math.floor(a9M.i), 2), z3.fillRect(Math.floor(a9M.i - 2), 0, 2, Math.floor(a9M.j))
	}

	function a9f(aB) {
		return 5 === aB ? "Normal" : "" + a9P[aB]
	}
	this.a5g = !1, this.dd = function() {
		aD.hA && (a9Q = 5, this.a5g = !1, a9O = !1, a9M = new rP([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a9R = function() {
		return a9P[a9Q]
	}, this.yz = function() {
		return a9M.fB
	}, this.a7A = function(a9G) {
		return !!aD.hA && a9M.f9 + a9M.i > h.i - a9G - bc.gap
	}, this.resize = function() {
		aD.hA && (a9M.resize(), a9M.fB -= (bk.a5x() - 1) * bc.gap, font = bA.qo.sf(0, .3 * a9M.j), (canvas = document.createElement("canvas")).width = Math.floor(a9M.i), canvas.height = Math.floor(a9M.j), (z3 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qo.textAlign(z3, 1), bA.qo.textBaseline(z3, 1), mi(this))
	}, this.a2x = function(a9S) {
		0 === aD.a0p || t.hn() || a9S !== aD.nO && (aD.nO = a9S, bh.resize(), bf.dk = !0, aD.hA) && (a9N = bf.eR + 2e3, mi(this))
	}, this.hE = function(f9, fB) {
		if (!aD.hA) return !1;
		if (f9 < a9M.f9 || fB < a9M.fB || f9 > a9M.f9 + a9M.i) return a9O && function(sQ, f9, fB) {
			var f2 = a9P.length,
				a9F = Math.floor(.5 * a9M.j),
				j = f2 * a9F,
				nL = Math.floor(Math.floor(a9M.f9) + .3 * a9M.i - .5),
				j = Math.floor(Math.floor(a9M.fB) - j),
				i = Math.floor(.4 * a9M.i + 2.5);
			return a9O = !1, bf.dk = !0, f9 < nL || nL + i < f9 || fB < j || (a9Q = a9W(0, Math.floor((fB - j) / a9F), f2 - 1), mi(sQ)), !0
		}(this, f9, fB);
		if ((f9 -= a9M.f9) < .3 * a9M.i) a9O = !1, this.a2x(!aD.nO);
		else {
			if (f9 < .7 * a9M.i) return a9O = !a9O, bf.dk = !0;
			this.a2z(!1)
		}
		return !0
	}, this.a2z = function(a9U) {
		2 === aD.a0p ? (this.a2x(!1), t.u(3)) : (a9O = !1, this.a5g = !this.a5g, this.a5g ? (aM.hB && aM.a2y(), a0.a1.setState(1)) : a9U || aM.a6e(), bf.dk = !0, mi(this))
	}, this.a9V = function() {
		this.a5g = !1, aM.a6e(), bf.dk = !0, mi(this)
	}, this.a2g = function(f9, fB) {
		return !!aD.nO && (0 <= aM.hE(f9, fB) || (aD.hA ? ((bf.eR > a9N || !this.hE(f9, fB)) && aS.hE(f9, fB), bf.dk = !0, a9N = bf.eR + 2e3) : aS.hE(f9, fB)), !0)
	}, this.eV = function() {
		aD.hA && aD.nO && bf.eR > a9N - 1e3 && bf.eR < a9N && (bf.dk = !0)
	}, this.a0y = function() {
		aD.hA && (this.a5g = !1, bf.dk = !0, mi(this))
	}, this.vR = function() {
		if (aD.hA) {
			if (aD.nO) {
				if (bf.eR > a9N) return;
				if (bf.eR > a9N - 1e3) return vS.globalAlpha = a9W(0, (1e3 - (bf.eR - (a9N - 1e3))) / 1e3, 1), a9X(), void(vS.globalAlpha = 1)
			}
			a9X()
		}
	}
}

function cJ() {
	var a9g, a9h, i, f9, fB, a9i, a9j;
	this.dd = function() {
		a9g = new Array(2), a9h = new Array(2), this.nQ = !1, a9j = a9i = ie = ic = 0, iC = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.iA() ? .072 : .0502) * h.iB)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a9g[aB] = document.createElement("canvas"), a9g[aB].width = i, a9g[aB].height = i, a9h[aB] = a9g[aB].getContext("2d", {
			alpha: !0
		});
		this.a99(),
			function() {
				for (var aA0 = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a9h[aB].clearRect(0, 0, i, i), a9h[aB].fillStyle = bB.no, a9h[aB].beginPath(), a9h[aB].arc(i / 2, i / 2, i / 2 - aA0, 0, 2 * Math.PI), a9h[aB].fill(), a9h[aB]
					.lineWidth = aA0, a9h[aB].fillStyle = bB.nv, a9h[aB].strokeStyle = bB.nv, a9h[aB].beginPath(), a9h[aB].arc(i / 2, i / 2, i / 2 - aA0, 0, 2 * Math.PI), a9h[aB].stroke(), z6(a9h[aB], 0, 0, i, aA0, .3, 0 === aB)
			}()
	}, this.yy = function() {
		return -ic / iC
	}, this.yz = function() {
		return -ie / iC
	}, this.na = function(a9n, iI) {
		ic = iC * a9n - iI
	}, this.nb = function(a9o, iJ) {
		ie = iC * a9o - iJ
	}, this.hE = function(a9m, a7B) {
		return aD.nO || ! function(a9m, a7B) {
			return Math.pow(a9m - (f9 + i / 2), 2) + Math.pow(a7B - (fB + i / 2), 2) < i * i / 4 || Math.pow(a9m - (f9 + i / 2), 2) + Math.pow(a7B - (fB + 2 * i), 2) < i * i / 4
		}(a9m, a7B) || bj.eO.data[8].value ? (aH.nd() && (this.nQ = !0, a9i = a9m, a9j = a7B), !1) : a7B < fB + 1.25 * i ? this.a2Q(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a2Q(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a2N = function(a9m, a7B) {
		var a9p, a9q, iL, iO;
		return !aH.nd() || (a9p = ic, a9q = ie, ic += iL = a9i - a9m, ie += iO = a9j - a7B, af.a2N(iL, iO), this.a9r(), a9i = a9m, a9j = a7B, a9p !== ic) || a9q !== ie
	}, this.a2Q = function(lb, lc, deltaY) {
		var nX;
		if (aH.nd()) {
			if (0 < deltaY) nX = (nX = 500 / (500 + deltaY)) < .5 ? .5 : nX;
			else {
				if (!(deltaY < 0)) return !1;
				nX = 2 < (nX = (500 - deltaY) / 500) ? 2 : nX
			}
			this.a9s(lb, lc, nX), bf.dk = !0
		}
		return !0
	}, this.a9s = function(f9, fB, eg) {
		var a3G;
		eg = a3G = (a3G = 1024 < (a3G = eg) * iC ? 1024 / iC : a3G) * iC < .125 ? .125 / iC : a3G, af.zoom(eg, f9, fB),
			function(a3G, lb, lc) {
				iC *= a3G, ic = (ic + lb) * a3G - lb, ie = (ie + lc) * a3G - lc, aS.a9r()
			}(eg, f9, fB)
	}, this.a9r = function() {
		var a9v = h.i / 16,
			a9w = 0,
			a9x = h.j / 16,
			a9y = 0;
		ic < -h.i + a9v && (a9w = -h.i + a9v - ic), ic > iC * bS.fD - a9v && (a9w = iC * bS.fD - a9v - ic), ie < -h.j + a9x && (a9y = -h.j + a9x - ie), ie > iC * bS.fE - a9x && (a9y = iC * bS.fE - a9x - ie), ic += a9w, ie += a9y, ba.nc(), af.a9z(
			a9w, a9y)
	}, this.a99 = function() {
		f9 = h.i - i - bc.gap, fB = Math.floor(h.j / 2 - 1.25 * i)
	}, this.vR = function() {
		bj.eO.data[8].value || (vS.drawImage(a9g[0], f9, fB), vS.drawImage(a9g[1], f9, Math.floor(fB + 3 * i / 2)))
	}
}

function cK() {
	var g, aA1, aA2, aA3, gap, aA4, aA5, aA6, aA7, aA8, a6Y, aA9, h6, aAA, a89, aAB, aAC;

	function aAG() {
		aA3 = Math.floor(.2 * (a0.a1.iA() ? .07 : .035) * h.iB), aA3 = a78(a0.a1.iA() ? 3 : 1, aA3);
		var aAJ = h.i / (g.length + gap);
		aA3 = aA3 < aAJ ? aAJ : aA3, a89 = Math.floor((1 - gap) * aA3), aA1 = 0, aAK()
	}

	function aAK() {
		aA1 = (aA1 = aA1 < -20 ? -20 : aA1) > (g.length - 15) * aA3 ? (g.length - 15) * aA3 : aA1, aA5 = Math.floor(aA1 / aA3), aA6 = (aA6 = aA5 + Math.floor(h.i / aA3)) > g.length - 1 ? g.length - 1 : aA6, aA5 = (aA5 = aA6 < aA5 ? aA6 : aA5) < 0 ?
			0 : aA5;
		var lH = aA6;
		aA4 = aA2 / g[lH];
		for (var aB = aA6 - 1; aA5 <= aB; aB--) g[aB] > g[lH] && (lH = aB, aA4 = aA2 / Math.pow(g[aB], aAA))
	}

	function aAN(f9) {
		f9 = Math.floor((aA1 + h.i - f9 - gap * aA3) / aA3);
		return (f9 = f9 < -1 ? -1 : -1 === f9 ? 0 : f9 > g.length - 1 ? -1 : f9) !== aA7 && (aA7 = f9, -1 === aAB && 0 === aA7 && aT.aAD && (aAB = setInterval(aAO, 100)), 1)
	}

	function aAP(aB) {
		var aAR = Math.floor(aA4 * Math.pow(g[aB], aAA));
		vS.fillRect(aA1 + h.i - (aB + 1) * aA3, h.j - aAR, a89, aAR)
	}

	function aAO() {
		var gZ;
		0 !== (aA7 = 8 === aa.a24() ? -1 : aA7) ? (aAC = (new Date).getTime(), clearInterval(aAB), aAB = -1) : (gZ = g[1] / 864e3, -1 !== aAC && (gZ += ((new Date).getTime() - aAC) * g[1] / 864e5, aAC = -1), 0 < gZ && (g[0] += Math.floor(gZ), bf
			.dk = !0))
	}
	this.aAD = !1, this.dd = function() {
		aAC = aAB = -1, aA7 = -(aAA = 1), this.aAE = !1, h6 = 0, aA9 = new Date, aA1 = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		aA2 = Math.floor(.15 * h.j), aA8 = (aA8 = Math.floor((a0.a1.iA() ? .018 : .0137) * h.iB)) < 2 ? 2 : aA8, a6Y = bA.qo.sf(1, aA8), aAG()
	}, this.aAH = function(aAI) {
		var aB;
		for (this.aAD = !0, aB = 0; aB < aAI.length; aB++) g.unshift(aAI[aB]);
		aAG(), bf.dk = !0
	}, this.aAL = function() {
		aAK()
	}, this.a2N = function(f9, fB) {
		fB > h.j - .6 * aA2 ? this.aAE ? f9 !== h6 && (aA1 += f9 - h6, h6 = f9, aAK(), aAN(f9), this.aAE = -1 !== aA7, bf.dk = !0) : aAN(f9) && (bf.dk = !0) : this.rp()
	}, this.rp = function() {
		-1 !== aA7 && (this.aAE = !1, aA7 = -1, bf.dk = !0)
	}, this.a2Q = function(f9, deltaY) {
		-1 !== aA7 && (aA1 += Math.floor(deltaY), aAK(), aAN(f9), bf.dk = !0)
	}, this.hE = function(f9, fB) {
		this.a2N(f9, fB), -1 !== aA7 && (h6 = f9, this.aAE = !0)
	}, this.a2m = function() {
		-1 !== aA7 && (this.aAE = !1)
	}, this.vR = function() {
		vS.fillStyle = bB.ny;
		for (var aAS, month, ds, tD, aAV, aAW, nM, aAX, aAY, aB = aA6; aA5 <= aB; aB--) aAP(aB);
		this.aAD && 0 === aA5 && (vS.fillStyle = bB.oV, aAP(0)), -1 !== aA7 && (vS.fillStyle = bB.nx, aAP(aA7)), -1 !== aA7 && (vS.font = a6Y, bA.qo.textBaseline(vS, 2), (ds = new Date).setTime(aA9.getTime() - 1e3 * aA7 * 60 * 60 * 24), month =
			"month", aAS = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(ds), aAS = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(ds)), aAS = aAS + ", " + ds.getUTCDate() + " " + month + " " + ds.getFullYear(), month = 1 === g[aA7] ? L(107) : L(108), month = bA.rn.a06(g[aA7]) + " " + month, ds = Math.floor(vS.measureText(aAS).width), tD = Math
			.floor(vS.measureText(month).width), aAV = Math.floor(.5 * (ds + aA8)), aAW = (aAW = aA1 + h.i - (aA7 + 1) * aA3) < aAV ? aAV : aAW > h.i - aAV ? h.i - aAV : aAW, nM = h.j - Math.floor(aA4 * Math.pow(g[aA7], aAA)), aAX = Math
			.floor(1.1 * aA8), aAY = nM > h.j - aAX ? h.j - aAX : nM, vS.fillStyle = bB.ns, vS.fillRect(h.i - tD - aA8, aAY - aAX, tD + aA8, aAX), vS.fillRect(aAW - aAV, h.j - aAX, ds + aA8, aAX), vS.fillStyle = bB.nv, bA.qo.textAlign(vS, 2),
			vS.fillText(month, Math.floor(h.i - .5 * aA8), aAY), bA.qo.textAlign(vS, 1), vS.fillText(aAS, aAW, h.j), vS.strokeStyle = bB.nz, vS.lineWidth = 1, vS.beginPath(), vS.moveTo(0, nM), vS.lineTo(h.i, nM), vS.closePath(), vS.stroke())
	}
}

function cL() {
	var a6Y, i, fB, aAZ, aAa, aAb, canvas, z3, a82, a4N, aAc, aAd, aAe, aAf;
	this.f9 = 0, this.j = 0, this.dd = function() {
		aAb = aD.a5H, aAd = "rgba(0,100,0,0.8)", aAe = "rgba(150,0,0,0.8)", a82 = aAc = !0, a4N = ag.h3[aD.em], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.iA() ? .305 : .24) * h.iB), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a6Y = bA.qo.sf(1, Math.floor(.8 * this.j)), aAa = bA.qo.sf(1, Math.floor(.45 * this.j)), aAf = Math.floor(.5 * this.j), bS.xM
			.font = a6Y, fB = bc.gap, aAZ = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, z3 = canvas.getContext("2d", {
				alpha: !0
			}), bA.qo.textBaseline(z3, 1), bA.qo.textAlign(z3, 1), this.aAg()
	}, this.a8V = function() {
		return a0.a1.iA() && h.i < 1.2 * h.j
	}, this.a99 = function() {
		this.a8V() ? this.f9 = h.i - i - bc.gap : this.f9 = Math.floor(aV.aAh() + (h.i - aV.aAh() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mh = function() {
		a82 && (a82 = !1, this.aAg())
	}, this.aAg = function() {
		z3.font = a6Y, z3.clearRect(0, 0, i, this.j), z3.fillStyle = aAc ? aAd : aAe, z3.fillRect(0, 0, i, this.j), z3.fillStyle = bB.nx;
		var ea = this.aAi(),
			aAk = (this.aAj(), z3.fillStyle = ag.h3[aD.em] >= ae.k2(aD.em) ? bB.oS : bB.nv, bA.rn.a06(a4N)),
			aAk = (z3.fillText(aAk, Math.floor(i / 2), aAf), z3.measureText(aAk).width),
			ea = (z3.font = aAa, z3.fillStyle = 9 === ea ? bB.p2 : bB.nv, ae.aAm),
			aAn = "+" + ea,
			tD = z3.measureText(aAn).width,
			aAo = Math.floor(this.j / 12),
			aAk = .5 * (i + aAk) + aAo;
		(aAk + tD + aAZ <= i || 1e3 <= ea && (aAn = "+" + Math.floor(ea / 1e3) + "K", aAk + (tD = z3.measureText(aAn).width) + aAZ <= i)) && z3.fillText(aAn, Math.floor(aAk + .5 * tD), Math.floor(.3 * this.j)), z3.fillStyle = bB.nv, z3.fillRect(
			0, 0, i, 1), z3.fillRect(0, 0, 1, this.j), z3.fillRect(0, this.j - 1, i, 1), z3.fillRect(i - 1, 0, 1, this.j)
	}, this.aAi = function() {
		var ea = bf.kJ() % 100,
			y1 = (ea = 9 - bL.dt(ea -= ea % 10, 10), Math.floor(ea * (this.j - aAZ) / 9));
		return z3.fillRect(0, y1, aAZ, this.j - y1), z3.fillRect(i - aAZ, y1, aAZ, this.j - y1), ea
	}, this.aAj = function() {
		z3.fillRect(aAZ, this.j - aAZ, Math.floor((i - 2 * aAZ) * ag.h3[aD.em] / aAb), aAZ)
	}, this.eV = function() {
		var gZ = aD.em;
		bA.gN.hD(gZ) && (gZ = ag.h3[gZ] - ag.a4M[gZ], a4N !== gZ ? (aAb = a78(gZ, aAb), aAc = a4N < gZ && 10 <= gZ, a4N = gZ, a82 = !0) : bf.kJ() % 10 == 9 && (a82 = !0))
	}, this.vR = function() {
		0 === ag.mv[aD.em] || aD.hP || 2 === ag.a4D[aD.em] || vS.drawImage(canvas, this.f9, fB)
	}
}

function cM() {
	var aAp, aAq, aAr, aAs, aAt, aAu, aAv, aAw, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB5, aB6, aB7, aB8, aB9, aBA, position, aBB, aBC, aBD, aBE, aBF, aBG = 1,
		aBH = 1,
		aBI = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.em;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => k7[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(k7[aD.em]);
	}

	function aBK() {
		aAv.clearRect(0, 0, aAp, a8k),
			aAv.fillStyle = aBF ? bB.oq : bB.om,
			aAv.fillRect(0, 0, aAp, aB0),
			aAv.fillStyle = bB.nr,
			aAv.fillRect(0, aB0, aAp, a8k - aB0);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			k7[aD.em]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aBA = -1;
		if (__fx.leaderboardFilter.enabled && aBA >= __fx.leaderboardFilter.filteredLeaderboard.length) aBA = -1;
		playerPos >= position && aBM(playerPos - position, bB.oK),
			0 !== k7[aD.em] && 0 === position && aBM(0, bB.ot),
			-1 !== aBA && aBM(aBA, bB.nw),
			aAv.fillStyle = bB.nr,
			//console.log("drawing", aBA),
			aAv.clearRect(0, a8k - __fx.leaderboardFilter.tabBarOffset, aAp, __fx.leaderboardFilter.tabBarOffset);
		aAv.fillRect(0, a8k - __fx.leaderboardFilter.tabBarOffset, aAp, __fx.leaderboardFilter.tabBarOffset);
		aAv.fillStyle = bB.nv,
			aAv.fillRect(0, aB0, aAp, 1),
			aAv.fillRect(0, a8k - __fx.leaderboardFilter.tabBarOffset, aAp, 1),
			__fx.leaderboardFilter.drawTabs(aAv, aAp, a8k - __fx.leaderboardFilter.tabBarOffset, bB.oK),
			aAv.fillRect(0, 0, aAp, bc.zn),
			aAv.fillRect(0, 0, bc.zn, a8k),
			aAv.fillRect(aAp - bc.zn, 0, bc.zn, a8k),
			aAv.fillRect(0, a8k - bc.zn, aAp, bc.zn), aAv.font = aAq, bA.qo.textBaseline(aAv, 1), bA.qo.textAlign(aAv, 1), aAv.fillText(aBI, Math.floor((aAp + aB0 - 22) / 2), Math.floor(aAy + aAr / 2));
		__fx.playerList.drawButton(aAv, 12, 12, aB0 - 22);
		var fL, ga = playerPos < position + aAt - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aAt)
				position = (result.length > aAt ? result.length : aAt) - aAt;
			//if (position >= result.length) position = result.length - 1;
			for (aAv.font = aAs, bA.qo.textAlign(aAv, 0), fL = aAt - ga; 0 <= fL; fL--) {
				const pos = result[fL + position];
				if (pos !== undefined)
					aBN(lx[pos]), aBO(fL, pos, lx[pos]);
			}
			for (bA.qo.textAlign(aAv, 2), fL = aAt - ga; 0 <= fL; fL--) {
				const pos = result[fL + position];
				if (pos !== undefined)
					aBN(lx[pos]), aBP(fL, lx[pos]);
			}
		} else {
			for (aAv.font = aAs, bA.qo.textAlign(aAv, 0), fL = aAt - ga; 0 <= fL; fL--)
				aBN(lx[fL + position]), aBO(fL, fL + position, lx[fL + position]);
			for (bA.qo.textAlign(aAv, 2), fL = aAt - ga; 0 <= fL; fL--)
				aBN(lx[fL + position]), aBP(fL, lx[fL + position]);
		}
		2 == ga && (aBN(aD.em), bA.qo.textAlign(aAv, 0), aBO(aAt - 1, k7[aD.em], aD.em), bA.qo.textAlign(aAv, 2), aBP(aAt - 1, aD.em)), 0 === position && (ga = .7 * aB1 / ab.get(4).height, aAv.setTransform(ga, 0, 0, ga, Math.floor(aB2 + .58 * aB1 +
			.5 * ga * ab.get(4).width), Math.floor(aAy + aAr + .4 * aB1)), aAv.imageSmoothingEnabled = !0, aAv.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aAv.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aBN(player) {
		aD.hv && (aAv.fillStyle = bg.aBR[bg.aBS[player]])
	}

	function aBM(aB, aBT) {
		aAv.fillStyle = aBT, aB = aAt - 1 < aB ? aAt - 1 : aB;
		aBT = Math.floor((aB === aAt - 1 ? 2 : 0 === aB ? 1.15 : 1) * aB1), aBT = aB === aAt - 2 ? Math.floor(aB0 + 9.15 * aB1) - Math.floor(aB0 + 8.15 * aB1) : aBT;
		aAv.fillRect(0, Math.floor(aB0 + (aB + (0 === aB ? 0 : .15)) * aB1), aAp, aBT)
	}

	function aBO(wW, a4b, aB) {
		aAv.fillText(aB6[a4b], aB2, Math.floor(aAy + aAr + (wW + .5) * aB1)), 1 === ag.a4D[aB] && (aAv.font = "italic " + aAs);
		a4b = Math.floor(aAy + aAr + (wW + .5) * aB1);
		aAv.fillText(ag.a1S[aB], aB3, a4b), 0 !== ag.a4D[aB] && (aAv.font = aAs), aB < aD.kM && 2 !== ag.a4D[aB] || aAv.fillRect(aB3, a4b + .35 * aBG, aB5[aB], Math.max(1, .1 * aBG))
	}

	function aBP(wW, aB) {
		aAv.fillText(ag.gp[aB], aB4, Math.floor(aAy + aAr + (wW + .5) * aB1))
	}
	this.dd = function() {
		var aB;
		for (aBE = aBD = aBB = 0, aBF = aBC = !1, aBA = -1, aAt = a0.a1.iA() ? 6 : 10, aBH = (position = 0) === (aBH = bj.eO.data[11].value) ? 10 : 1 === aBH ? 5 : 1, aB9 = !1, aB7 = new Uint16Array(aAt + 1), aB8 = new Uint32Array(aAt + 1), aAx =
			aD.ez, lx = new Uint16Array(aAx), k7 = new Uint16Array(aAx), aB = aAx - 1; 0 <= aB; aB--) lx[aB] = aB, k7[aB] = aB;
		this.resize(!0), aB5 = new Uint16Array(aD.ez);
		var aBJ = Math.floor(aAp - aB3 - aB2 - aAw);
		for (aB6 = new Array(aD.ez), aAv.font = aAs, aB = aD.ez - 1; 0 <= aB; aB--) aB6[aB] = aB + 1 + ".", ag.a1S[aB] = bA.z3.a3v(ag.a1X[aB], aAs, aBJ), aB5[aB] = Math.floor(aAv.measureText(ag.a1S[aB]).width);
		aBK()
	}, this.resize = function(dd) {
		if (a8k = a0.a1.iA() ? (aAp = Math.floor(.335 * h.iB), Math.floor(aAt * aAp / 8)) : (aAp = Math.floor(.27 * h.iB), Math.floor(aAt * aAp / 10)), aAp = Math.floor(.97 * aAp), (aAu = document.createElement("canvas")).width = aAp, aAu
			.height = a8k, aAv = aAu.getContext("2d", {
				alpha: !0
			}), aAy = .025 * aAp, aAr = .16 * aAp, aAz = 0 * aAp, aB0 = Math.floor(.45 * aAy + aAr), aB1 = (a8k - aAr - 2 * aAy - aAz) / aAt,
			aAu.height = a8k += aB1, __fx.leaderboardFilter.tabBarOffset = Math.floor(aB1 * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a8k - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aAp,
			aAq = bA.qo.sf(1, Math.floor(.55 * aAr)), aBG = Math.floor((a0.a1.iA() ? .67 : .72) * aB1), aAs = bA.qo.sf(0, aBG), aAv.font = aAs, aB2 = Math.floor(.04 * aAp), aB3 = Math.floor((a0.a1.iA() ? .195 : .18) * aAp), aAw = Math.floor(aAv
				.measureText("00920600").width), aAv.font = aAq, aB4 = aAp - aB2, !dd) {
			aAv.font = aAs;
			for (var aB = aD.ez - 1; 0 <= aB; aB--) aB5[aB] = Math.floor(aAv.measureText(ag.a1S[aB]).width);
			aBK()
		}
		aBI = bA.z3.a3v(L(109), aAq, .96 * aAp)
	}, this.aAh = function() {
		return aAp
	}, this.mh = function(bu, aBL) {
		(aBL || aB9 && (bu || bf.kJ() % aBH == 0)) && (aB9 = !1, aBK())
	}, this.eV = function() {
		! function() {
			for (var fL = aAx - 1; 0 <= fL; fL--) 0 === ag.mv[lx[fL]] && ! function(fL) {
				var aBb = lx[fL];
				aAx--;
				for (var aB = fL; aB < aAx; aB++) lx[aB] = lx[aB + 1], k7[lx[aB]] = aB;
				lx[aAx] = aBb, k7[lx[aAx]] = aAx
			}(fL)
		}();
		for (var aBZ, nd = aAx - 1, fL = 0; fL < nd; fL++) ag.gp[lx[fL]] < ag.gp[lx[fL + 1]] && (aBZ = lx[fL], lx[fL] = lx[fL + 1], lx[fL + 1] = aBZ, k7[lx[fL]] = fL, k7[lx[fL + 1]] = fL + 1);
		! function() {
			for (var ds = aB9, ga = (aB9 = !0, k7[aD.em] >= aAt - 1 ? aAt - 2 : aAt - 1), aB = ga; 0 <= aB; aB--)
				if (aB7[aB] !== lx[aB] || aB8[aB] !== ag.gp[lx[aB]]) return;
			(ga != aAt - 2 || aB7[aAt] === k7[aD.em] && aB8[aAt] === ag.gp[aD.em]) && (aB9 = ds)
		}();
		for (var aB = aAt - 1; 0 <= aB; aB--) aB7[aB] = lx[aB], aB8[aB] = ag.gp[lx[aB]];
		aB7[aAt] = k7[aD.em], aB8[aAt] = ag.gp[aD.em];
		leaderboardHasChanged = true;
	}, __fx.leaderboardFilter.scrollToTop = function() {
		position = 0
	}, this.hE = function(f9, fB) {
		if (zm(f9, fB)) {
			if (__fx.utils.isPointInRectangle(f9, fB, bc.gap + 12, bc.gap + 12, aB0 - 22, aB0 - 22)) __fx.playerList.display(ag.a1X);
			else {
				if (fB - bc.gap > __fx.leaderboardFilter.verticalClickThreshold) return __fx.leaderboardFilter.handleMouseDown(f9 - bc.gap);
				f9 = aBd(fB);
				0 <= f9 ? (aBB = bf.eR, aBC = !0, aBD = aBE = f9, bJ.a30() && (f9 = a9W(-1, aBE, aAt), aBA !== (f9 = f9 === aAt ? -1 : f9)) && (aBA = f9, aBK(), bf.dk = !0)) : (aBF && (aBF = !1, aBK(), bf.dk = !0), t.u(10, 0, new aBe({
					aBf: 1
				})))
			}
			return !0
		}
		return !1
	};
	var repaintLb = __fx.leaderboardFilter.repaintLeaderboard = function() {
		aBK(), bf.dk = !0
	};

	function aBd(fB) {
		return (fB -= bc.gap + aB0) < 0 ? Math.floor(fB / aB1) - 1 : fB < (aAt - 1) * aB1 ? Math.floor(fB / aB1) : fB < a8k - aB0 ? aAt - 1 : (fB -= a8k - aB0, aAt + Math.floor(fB / aB1))
	}

	function zm(f9, fB) {
		return f9 >= bc.gap && f9 < bc.gap + aAp && fB >= bc.gap && fB < bc.gap + a8k
	}
	this.a2N = function(f9, fB) {
		var ds, aBc;
		if (__fx.utils.isPointInRectangle(f9, fB, bc.gap + 12, bc.gap + 12, aB0 - 22, aB0 - 22) ? !1 === __fx.playerList.hoveringOverButton && (__fx.playerList.hoveringOverButton = !0, repaintLb()) : !0 === __fx.playerList.hoveringOverButton && (
				__fx.playerList.hoveringOverButton = !1, repaintLb()), !__fx.leaderboardFilter.setHovering(__fx.utils.isPointInRectangle(f9, fB, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth,
				__fx.leaderboardFilter.tabBarOffset), f9 - bc.gap)) return aBc = aBd(fB), f9 = zm(f9, fB), fB = !(!(aBc < 0 && f9) || bJ.a30()), aBC ? (ds = position, (position = a9W(0, position += aBD - aBc, aD.ez - aAt)) !== ds ? (aBF = fB,
			aBc = a9W(-1, aBD = aBc, aAt), aBA = aBc = aBc !== aAt && f9 ? aBc : -1, aBK(), bf.dk = !0) : aBF !== fB && (aBF = fB, aBK(), bf.dk = !0), !0) : (aBc = (aBc = a9W(-1, aBc, aAt)) === aAt || !f9 || bJ.a30() ? -1 : aBc, (aBA !==
			aBc || aBF !== fB) && (aBA = aBc, aBF = fB, aBK(), bf.dk = !0))
	}, this.a2m = function(f9, fB) {
		if (!aBC) return !1;
		aBC = !1;
		var aBc = aBd(fB);
		var isEmptySpace = false;
		return bJ.a30() && -1 !== aBA && (aBA = -1, aBK(), bf.dk = !0), bf.eR - aBB < 350 && aBE === aBc && -1 !== (aBc = (aBc = a9W(-1, aBc, aAt)) !== aAt && zm(f9, fB) ? aBc : -1) && (f9 = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
				lx[__fx.leaderboardFilter.filteredLeaderboard[aBc + position] ?? (isEmptySpace = true, k7[aD.em])]) : lx[aBc + position]), aBc === aAt - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : k7[aD.em]) >=
			position + aAt - 1 && (f9 = aD.em), !isEmptySpace && aD.hv && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(f9, ag.a1X, aD.kg), 0 !== ag.mv[f9] && !isEmptySpace) && aH.nG(f9, 800, !1, 0), !0
	}, this.a2Q = function(f9, fB, deltaY) {
		var aBi;
		return !(aBC || aD.nO || (aBi = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !zm(f9, fB)) || (f9 = (f9 = a9W(-1, aBd(fB), aAt)) === aAt || bJ.a30() ? -1 : f9, 0 < deltaY ? position < aD.ez - aAt && (position += Math.min(aD.ez - aAt -
			position, aBi), aBA = f9, aBK(), bf.dk = !0) : 0 < position && (position -= Math.min(position, aBi), aBA = f9, aBK(), bf.dk = !0), 0))
	}, this.vR = function() {
		vS.drawImage(aAu, bc.gap, bc.gap)
	}
}

function cN() {
	var canvas, z3, f9, fB, aAR, aBj, gap, aBk, fontSize, aBl, aBm, aBn, aBo, aBp, aBq, aBr, aBs, aBt;

	function aBx() {
		z3.clearRect(0, 0, aW.i, aW.j), z3.fillStyle = bB.ns, z3.fillRect(0, 0, aW.i, aW.j), z3.fillStyle = bB.oF, eg = 0 < aBr ? aBr : aBo[4] / 1e4, z3.fillRect(0, aW.j - aAR - 1, Math.floor(eg * aW.i), aAR), z3.fillStyle = bB.nv, z3.fillRect(0, 0,
			aW.i, 1), z3.fillRect(0, 0, 1, aW.j), z3.fillRect(aW.i - 1, 0, 1, aW.j), z3.fillRect(0, aW.j - 1, aW.i, 1), z3.fillRect(0, aW.j - aAR - 1, aW.i, 1);
		for (var eg, aBz, ds = 0, aB = 0; aB < aBn.length; aB++) aBp[aB] ? (bA.qo.textAlign(z3, 0), aBz = Math.floor((aBj - aAR + 2 * aBk) * (aB - ds + 1) / (aBn.length + 1) - .7 * aBk), z3.fillText(aBn[aB], gap, aBz), bA.qo.textAlign(z3, 2), 5 ===
			aB && 0 !== ag.mv[aD.em] && ag.h3[aD.em] >= ae.k2(aD.em) ? (z3.fillStyle = bB.or, z3.fillText(aBv(aB), aW.i - gap, aBz), z3.fillStyle = bB.nv) : z3.fillText(aBv(aB), aW.i - gap, aBz)) : ds++
	}

	function aBv(aB) {
		return aB < 3 ? aBo[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rn.a4v(aBo[aB] / 100, 2) : aB < 7 ? bA.rn.a06(aBo[aB]) : aB === 7 ? aW.aC0(aBo[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gp, aD.em) : __fx.utils.getDensity(aD.em)
	}

	function aBu() {
		ag.gp[aD.em] !== aBo[6] && (aBo[6] = ag.gp[aD.em], aBl++)
	}
	this.dd = function() {
		aBr = aBs = 0, (aBm = new Array(8))[0] = L(110), aBm[1] = aD.kg ? L(111) : L(112), aBm[2] = L(113), aBm[3] = L(114), aBm[4] = L(115), aBm[5] = L(116, 0, "Interest"), aBm[6] = L(117), aBm[7] = L(118),
			aBm.push("Max Troops", "Density"), // add aBm
			(aBn = new Array(aBm.length)).fill(""), (aBo = new Array(aBm.length))[0] = aD.kg ? 0 : aD.kM, aBo[1] = aD.kg ? al.ks : aD.ki, aBo[2] = aD.a0r, aBo[3] = 0, aBo[4] = bL.dt(1e4 * ag.gp[0], Math.max(aD.k6, 1)), aBo[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.dt(700 * aD.data.iIncomeValue, 64) : bL.dt(700 * aD.data.iIncomeData[aD.em], 64), aBo[6] = 0, aBu(), aBo[7] = 0, aBq = aBv(6), (aBp = new Array(aBm.length)).fill(!0), aBt = 0, aBt =
			aD.kg ? (aBp[0] = !1, aBp[2] = !1, aBp[3] = !1, 3) : (aBp[3] = !1, 1), aBl = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.iA() ? .1646 : .126) * 1.25 * h.iB), this.j = Math.floor(1.18 * this.i), aAR = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aBk = .04 * this.i, aBj = this.j, this.j -= Math.floor(aBt * (this.j -
			2 * aAR) / aBm.length), fontSize = Math.floor(.7 * (aBj - aAR) / aBm.length);
		var a6Y = bA.qo.sf(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a6Y, i) {
				for (var aB = 0; aB < aBn.length; aB++) aBn[aB] = bA.z3.a3v(aBm[aB], a6Y, i)
			}((z3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a6Y, .575 * this.i), bA.qo.textBaseline(z3, 1), z3.lineWidth = 1, this.a5A(), this.a99(), aU.a99(), aBx()
	}, this.a99 = function() {
		f9 = h.i - this.i - bc.gap
	}, this.aBy = function() {
		fB = bc.gap
	}, this.a5A = function() {
		fB = bc.gap + (aU.a8V() && 0 !== ag.mv[aD.em] && !aD.hP ? aU.j + bc.gap : 0)
	}, this.mh = function(bu) {
		(bu || 100 <= aBl) && (aBl = 0, aBx())
	}, this.a5t = function() {
		return aBo[7]
	}, this.aC0 = function(value) {
		var lH = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * lH) / 1e3);
		return value < 10 ? lH + ":0" + value : lH + ":" + value
	}, this.eV = function() {
		var aCB, per;
		aBp[0] && aD.a0s - aD.a0r !== aBo[0] && (aBo[0] = aD.a0s - aD.a0r, aBl++), al.ks - aBo[0] !== aBo[1] && (aBo[1] = al.ks - aBo[0], aBl++), this.mZ(), (aCB = ae.aCC(aD.em)) !== aBo[5] && (aBo[5] = aCB, aBl++), aBu(), aBo[7] += bf.aCD, aCB =
			aBv(7), aBq !== aCB && (aBq = aCB, aBl += 100), aCB = aD.hv ? bh.kt() : ag.gp[lx[0]], per = bL.dt(1e4 * aCB, Math.max(aD.k6, 1)), aBo[3] = aCB, aBo[4] !== per && (aBl++, aBo[4] = per), 8 === aD.ke && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gN.hD(aB)) return bR.a0R.a0o(), 1;
				return
			}() || aBo[3] < aD.k6 || ! function() {
				for (var aB = al.ks - 1; 0 <= aB; aB--)
					if (0 < ag.gT[al.kx[aB]].length) return;
				return 1
			}() || bN.lB.aCA().length || aD.hv && bh.kt(1) < aD.k6 || bR.a0R.a0o()
	}, this.mZ = function() {
		aBp[2] && aD.a0r !== aBo[2] && (aBo[2] = aD.a0r, aBl += 2 === aD.a0p ? 100 : 1)
	}, this.aC7 = function() {
		return aBo[3] === aD.k6
	}, this.aCE = function(aB) {
		var tT, aCF, ds;
		return 2 !== aD.a0p && (aB % 2 == 1 && (aV.mh(1, 1), bf.dk = !0), aB === aD.a5J ? (aBr = 0, aBx(), !1) : (-1 !== aB || 0 !== aBs) && (aCF = aBr, aBr = aD.hA ? aB / aD.a5J : (ds = performance.now(), 0 <= aB && (tT = ds - 392 * aB, aBs =
			0 === aB || tT < aBs ? tT : aBs), 1 < (aBr = (ds - aBs) / (392 * aD.a5J)) ? 1 : aBr), aBx(), aBr !== aCF))
	}, this.vR = function() {
		vS.drawImage(canvas, f9, fB)
	}
}

function cO() {
	var hn, aCG, i, j, a9F, aCH, aCI, a8W, canvas, n8, aCJ;

	function yz() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aCJ = hn = !1, a9F = .61, aCH = .07, aCI = .09, n8 = a8W = j = 0
	}, this.resize = function() {
		var z3, nL, ea, aCO, aCP, a6d;
		hn && (i = aCK(i = a0.a1.iA() ? Math.floor(.69 * h.iB) : Math.floor(.5 * h.iB), a78(h.i - 2 * bc.gap, 10)), i = aCK(i, Math.floor(3.57 * a78(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, z3 = canvas.getContext("2d", {
				alpha: !0
			}), nL = Math.floor(1 + j / 40), z3.clearRect(0, 0, i, j), z3.fillStyle = bB.ns, z3.fillRect(nL, nL, i - 2 * nL, j - 2 * nL), z3.lineJoin = "bevel", z3.lineWidth = 2 * nL, z3.strokeStyle = bB.nv, z3.strokeRect(nL, nL, i - 2 * nL,
				j - 2 * nL), z3.imageSmoothingEnabled = !1, ea = ab.get(aCG), aCO = ea.width, a6d = (1 === aCG ? .85 : 21 === aCG ? .666 : .9) * a9F * j / (aCP = ea.height), z3.setTransform(a6d, 0, 0, a6d, Math.floor((i - a6d * aCO) / 2),
				Math.floor((j - a6d * aCP) / 2)), z3.drawImage(ea, 0, 0), z3.setTransform(1, 0, 0, 1, Math.floor(i - aCI * j - aCH * j - nL), Math.floor(nL + aCH * j)),
			function(z3, f2) {
				z3.lineWidth = Math.floor(1 + j / 80), z3.strokeStyle = bB.nv, z3.beginPath(), z3.moveTo(0, 0), z3.lineTo(f2, f2), z3.moveTo(0, f2), z3.lineTo(f2, 0), z3.stroke()
			}(z3, Math.floor(aCI * j)), z3.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fT, aCM, a91, aCN) {
		hn || aCN && aCJ || (aCG = a91 ? 21 : fT ? 1 : 2, hn = aCJ = !0, this.resize(), aL.s5(), aR.a8w(), n8 = bf.eR, a8W = aCM ? 1 : 0)
	}, this.eV = function() {
		!hn || 1 <= a8W || (a8W = 1 < (a8W += 5e-4 * (bf.eR - n8)) ? 1 : a8W, n8 = bf.eR, bf.dk = !0)
	}, this.hE = function(f9, fB) {
		return !(!hn || a8W <= 0 || (f9 -= Math.floor((h.i - i) / 2), fB -= yz(), f9 < 0) || fB < 0 || i < f9 || j < fB || (i - j / 3 < f9 && fB < j / 3 && (hn = !1, bf.dk = !0), 0))
	}, this.vR = function() {
		!hn || a8W <= 0 || (vS.globalAlpha = a8W, vS.drawImage(canvas, Math.floor((h.i - i) / 2), yz()), vS.globalAlpha = 1)
	}
}

function dN() {
	var aCR, aCS = new Uint8Array(5),
		aCT = new Uint8Array(5);
	this.aCU = new aCV, this.dd = function() {
		for (var fT = bj.eO.data[119].value, aB = 0; aB < aCS.length; aB++) aCS[aB] = (fT >> 2 * aB) % 4
	}, this.a5V = function() {
		aCR = [L(119), "", L(120, [bX.aCW[28]]), L(121, [bX.aCW[26]]), L(122, [bX.aCW[0]])], this.aCU.dd()
	}, this.eV = function() {
		this.aCU.eV()
	}, this.a6H = function(id) {
		1 < id && bJ.rG() || ! function(eA) {
			if (3 === aCS[eA] || 1 === aCT[eA]) return;
			if (aCT[eA] = 1, !(Math.random() < .6)) {
				aCS[eA]++;
				for (var fT = 0, aB = 0; aB < aCS.length; aB++) fT += aCS[aB] << 2 * aB;
				bj.sG.sH(119, fT)
			}
			return 1
		}(id) || aN.a7D(aCR[id])
	}
}

function aCV() {
	var aCY;
	this.dd = function() {
		aCY = !1
	}, this.eV = function() {
		var gZ;
		if (function() {
				if (!aCY) {
					if (bf.kJ() % 30 != 9) return;
					if (!bA.gN.lt(90)) return;
					aCY = !0
				}
				return 1
			}() && (! function() {
				var qg = aN.a7Z(956);
				if (qg) {
					if (bA.gN.lK(qg.player)) return 1;
					aN.a7Y(956, 0)
				}
				return
			}() && (-1 === (gZ = (aD.hv ? function() {
				var id = bh.kv(),
					f2 = al.ks;
				if (bg.kj[id])
					for (var a0d = al.kx, f0 = bg.f0, aB = 0; aB < f2; aB++) {
						var gZ = a0d[aB];
						if (f0[gZ] !== id) return gZ
					} else if (1 < f2) return lx[f2 - 1];
				return -1
			} : function() {
				for (var aCg = al.ks, lG = al.kx, aCh = k7, aB = 0; aB < aCg; aB++) {
					var gZ = lG[aB];
					if (0 !== aCh[gZ]) return gZ
				}
				return -1
			})()) ? ! function() {
				var qg = aN.a7Z(957);
				if (qg && qg.a74) {
					if (ac.et(qg.a74.eo << 2)) return 1;
					aN.a7Y(957, 0)
				}
				return
			}() : (aN.a1D(0, L(123, [ag.a1S[gZ]]), 956, gZ, bB.nv, bB.ns, -1, !0), 0)))) {
			var f2 = ao.j0.lW;
			if (0 !== f2)
				for (var eO = ao.j0.eO, aB = 0; aB < f2; aB++) {
					var eo = eO[aB];
					if (ac.et(eo << 2)) return void aN.a1D(0, L(124, [bM.fA(eo), bM.fC(eo)]), 957, 0, bB.nv, bB.ns, -1, !0, void 0, {
						fL: 1,
						eo: eo
					})
				}
		}
	}
}

function dO() {
	this.aCi = new aCj, this.dd = function() {
		this.aCi.resize()
	}
}

function aCj() {
	this.resize = function() {
		var aB, aCk = document.head.querySelector("style#ss");
		if (aCk)
			for (aB = aCk.sheet.cssRules.length - 1; 0 <= aB; aB--) aCk.sheet.deleteRule(0);
		else(aCk = document.createElement("style")).id = "ss", document.head.appendChild(aCk);
		var a9N = "::-webkit-scrollbar",
			dw = bA.qo.qx(bc.sh),
			hx = bA.qo.qx(Math.max(bA.qo.s7(.012), 8));
		try {
			aCk.sheet.insertRule(a9N + "{width:" + hx + ";height:" + hx + ";}", aCk.sheet.cssRules.length), aCk.sheet.insertRule(a9N + "-thumb{background-color:white;}", aCk.sheet.cssRules.length), aCk.sheet.insertRule(a9N +
				"-track{background:" + bB.nr + ";}", aCk.sheet.cssRules.length), aCk.sheet.insertRule(a9N + "-track:horizontal{border-top:" + dw + " solid white;}", aCk.sheet.cssRules.length), aCk.sheet.insertRule(a9N +
				"-track:vertical{border-left:" + dw + " solid white;}", aCk.sheet.cssRules.length), aCk.sheet.insertRule(a9N + "-button{display:none;}", aCk.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aCk.sheet.cssRules.length - 1; 0 <= aB; aB--) aCk.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aCl = !1, this.nl = !1, this.a5E = !1, this.aCm = [0, 0, 0, 0], this.aCn = function() {
		var nL, nM, nY, nZ;
		this.a5E = this.a5E || this.nl, (this.nl || this.aCl && this.a5E) && (nL = ba.aCo[0], nM = ba.aCo[1], nY = ba.aCo[2], nZ = ba.aCo[3], nL = nL < this.aCm[0] ? this.aCm[0] : nL, nM = nM < this.aCm[1] ? this.aCm[1] : nM, nY = nY > this.aCm[
				2] ? this.aCm[2] : nY, nZ = nZ > this.aCm[3] ? this.aCm[3] : nZ, this.nl = !1, this.aCl = !1, nL === this.aCm[0] && nM === this.aCm[1] && nY === this.aCm[2] && nZ === this.aCm[3] ? this.a5F() : nL <= nY && nM <= nZ && a5X
			.putImageData(a5Y, 0, 0, nL, nM, nY - nL + 1, nZ - nM + 1))
	}, this.a5F = function() {
		this.a5E && this.aCm[2] >= this.aCm[0] && this.aCm[3] >= this.aCm[1] && a5X.putImageData(a5Y, 0, 0, this.aCm[0], this.aCm[1], this.aCm[2] - this.aCm[0] + 1, this.aCm[3] - this.aCm[1] + 1), this.a5E = !1
	}, this.a11 = function() {
		this.aCm[2] >= this.aCm[0] && this.aCm[3] >= this.aCm[1] && a5X.putImageData(a5Y, 0, 0, this.aCm[0], this.aCm[1], this.aCm[2] - this.aCm[0] + 1, this.aCm[3] - this.aCm[1] + 1), this.a5E = !1
	}, this.dd = function() {
		var f9, fB;
		this.aCl = !1, this.nl = !1, this.a5E = !1, this.aCm[0] = bS.fD, this.aCm[1] = bS.fE, this.aCm[2] = this.aCm[3] = 0;
		loop: for (f9 = 1; f9 < bS.fD - 1; f9++)
			for (fB = bS.fE - 2; 1 < fB; fB--)
				if (1 === aCp[ac.yW(f9, fB) + 2]) {
					this.aCm[0] = f9;
					break loop
				} loop: for (fB = 1; fB < bS.fE - 1; fB++)
			for (f9 = bS.fD - 2; 1 < f9; f9--)
				if (1 === aCp[ac.yW(f9, fB) + 2]) {
					this.aCm[1] = fB;
					break loop
				} loop: for (f9 = bS.fD - 2; 0 < f9; f9--)
			for (fB = bS.fE - 2; 1 < fB; fB--)
				if (1 === aCp[ac.yW(f9, fB) + 2]) {
					this.aCm[2] = f9;
					break loop
				} loop: for (fB = bS.fE - 2; 0 < fB; fB--)
			for (f9 = bS.fD - 2; 1 < f9; f9--)
				if (1 === aCp[ac.yW(f9, fB) + 2]) {
					this.aCm[3] = fB;
					break loop
				}
	}
}

function L(value, aCq, w0, aCr) {
	var qV = "number" == typeof value ? b7.aCs[value] : value;
	if (w0 && b7.aCt() && (qV = w0), !aCq) return aCr ? qV.replace(new RegExp("\\s*\\{.*?\\}\\s*", "g"), " ").trim() : qV;
	for (var f2 = aCq.length, aB = 0; aB < f2; aB++)
		for (var fL = 0; fL < 3; fL++) qV = qV.replace("{" + (10 * fL + aB) + "}", aCq[aB]);
	return qV
}

function c2() {
	this.data = new aCu;
	var aCv = (new aCw).L84,
		aCy = (this.aCs = aCv, !(this.aCx = "en"));
	this.dd = function() {
		var qV, g;
		aCy = !1, ("en" === (qV = bj.eO.data[12].value).split("-")[0].toLowerCase() ? (b7.aCs = aCv, b7.aCx = qV, 1) : bj.eO.data[12].value === bj.eO.data[145].value && 0 < bj.eO.data[146].value && (qV = bj.eO.data[146].value, (g = bj.r5.wD(qV, !
			1)).length === qV) && !!bA.qw.a3W(g) && function(g) {
			for (var f2 = g.length, j = 0; j < f2; j++) g[j] = g[j].replace("&#39;", "'");
			var aD4 = bj.r5.wD(f2, !0);
			if (f2 !== aD4.length) return !1;
			if (!bA.qw.a3W(aD4)) return !1;
			for (var lH = aCv.length, aAI = new Array(lH), aD5 = lH === f2, gU = Math.min(f2, lH), aB = 0; aB < lH; aB++)
				if (aAI[aB] = aCv[aB], aB < f2 && aD4[aB] === aAI[aB]) aAI[aB] = g[aB];
				else {
					aD5 = !1;
					for (var fM = 0; fM < gU; fM++)
						if (aD4[fM] === aAI[aB]) {
							aAI[aB] = g[fM];
							break
						}
				} return b7.aCs = aAI, b7.aCx = bj.eO.data[12].value, aD5
		}(g)) || (aCy = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new e0
	}, this.aCt = function() {
		return this.aCs === aCv || !aCv.length
	}, this.aD6 = function() {
		var aD7;
		return !!aCy && (aCy = !1, 0 !== aCv.length) && (aD7 = bj.eO.data[12].value, b0.eX.aD8(0, aD7.slice(0, 20)), !0)
	}, this.aD9 = function(g) {
		g.length !== aCv.length ? 8 === t.t5 && t.a5u().aDA(30, 0, 1) : (this.aCs = g, this.aCx = bj.eO.data[12].value, bj.sG.sH(145, this.aCx), bj.sG.sH(146, g.length), bj.r5.wJ(g, !1), bj.r5.wJ(aCv, !0), 8 === t.t5 ? t.a5u().aDA(30) : 0 === aa
			.a24() && 5 === t.t5 && t.y.aDB())
	}, this.aDC = function() {
		var wM, g = navigator.languages;
		return g && g.length ? (wM = Math.max(b7.data.aDD(g[0]), 0), 1 === g.length ? [wM, wM] : [wM, Math.max(b7.data.aDD(g[1]), 0)]) : [0, 0]
	}
}

function aCu() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aDE = function() {
		for (var aDF = [], g = this.g, f2 = g.length, aB = 0; aB < f2; aB++) aDF.push(g[aB]);
		var aDG = bj.eO.data[12].w0;
		for (aB = 0; aB < f2; aB++)
			if (aDF[aB] === aDG) {
				aDF.splice(aB, 1), f2--;
				break
			} aDF.sort(), f2++, aDF.unshift(aDG);
		try {
			if ("undefined" == typeof Intl) return aDF;
			for (aB = 0; aB < f2; aB++) {
				var qV = new Intl.DisplayNames([aDF[aB]], {
					type: "language"
				}).of(aDF[aB]);
				qV !== aDF[aB] && (aDF[aB] = aDF[aB] + ": " + qV)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aDF
	}, this.aDI = function(aDJ) {
		for (var qV = bj.eO.data[12].value, f2 = aDJ.length, aB = 0; aB < f2; aB++)
			if (qV === aDJ[aB].split(":")[0]) return aB;
		return 0
	}, this.aDD = function(aDK) {
		if (aDK && !(aDK.length < 2)) {
			aDK = aDK.split("-")[0].toLowerCase();
			for (var g = this.g, f2 = g.length, aB = 0; aB < f2; aB++)
				if (aDK === g[aB]) return aB
		}
		return -1
	}
}

function aCw() {
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
		"Account Name Search", "1v1", "Zombie", "Chat", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official domain is territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the official Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}",
		"Gold to be Received: {10}", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Links",
		"Propaganda Text", "Reset", "Language", "Launch Campaign", "Gold Investment", "Launch", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay data here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Multiplayer Connection", "Automatic (recommended)", "Direct", "Via Proxy",
		"Shortcut Keys", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics",
		"🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Upcoming Team Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function di() {
	var f9, fB, j, u3, aDL, aDM, aDN, aDO, aDP, i, a49, aDQ;
	this.hn = !1, this.dd = function(qV, aDR) {
		if (1 === a0.id && 13 <= a0.dv && a0.dv < 18) return aDR ? void(a49 = qV) : a49 !== qV ? void 0 : void a0.wB.saveString(200, qV);
		aDR && (a49 = qV, (aDQ = document.createElement("a")).appendChild(document.createTextNode(a49)), this.hn = !0, aDQ.title = a49, aDQ.target = "_blank", aDQ.href = a49, aDQ.style.textAlign = "center", aDQ.style.color = bB.nv, aDQ.style
			.position = "absolute", aDQ.style.padding = "0px", aDQ.style.margin = "0px", this.resize(), document.body.appendChild(aDQ), bf.dk = !0)
	}, this.s5 = function() {
		return !(!this.hn || (t.removeChild(document.body, aDQ), this.hn = !1))
	}, this.hE = function(iI, iJ) {
		return !!this.hn && ((iI < f9 || iJ < fB || f9 + i < iI || fB + j < iJ || f9 + i - u3 < iI && iJ < fB + u3) && (bf.dk = !0, this.hn = !1, t.removeChild(document.body, aDQ)), !0)
	}, this.resize = function() {
		var a6Y, aDS;
		this.hn && (aDO = Math.floor(.8 * (a0.a1.iA() ? h.i > h.j ? .6 : .55 : .4) * h.iB), u3 = Math.floor(.15 * aDO), aDL = Math.floor(.35 * u3), aDM = Math.floor(.5 * u3), aDN = Math.floor(2.5 * aDM), j = u3 + aDL + 3 * aDM, a6Y = bA.qo.sf(1,
			aDL / h.k), aDP = Math.floor(h.k * aQ.measureText(a49, a6Y)), aDS = i = (aDO < aDP ? aDP : aDO) + 2 * aDN, i = Math.min(i, h.i - 2 * (a0.a1.iA() ? 2 : 1) * bc.gap), a6Y = bA.qo.sf(1, i / aDS * aDL / h.k), aDP = Math.floor(h
			.k * aQ.measureText(a49, a6Y)), f9 = Math.floor((h.i - i) / 2), fB = Math.floor((h.j - j) / 2), aDQ.style.font = a6Y, aDQ.style.top = Math.floor((fB + 1.4 * aDM + u3) / h.k) + "px", aDQ.style.left = Math.floor((f9 + (i -
			aDP) / 2) / h.k) + "px")
	}, this.vR = function() {
		this.hn && (vS.fillStyle = bB.ns, vS.fillRect(f9, fB + u3, i, j - u3), vS.fillStyle = bB.p4, vS.fillRect(f9, fB, i, u3), vS.fillStyle = bB.nv, vS.lineWidth = bc.zn, vS.strokeStyle = bB.nv, vS.strokeRect(f9, fB, i, j), vS.fillRect(f9, fB +
			u3, i, bc.zn), vS.font = bA.qo.sf(1, .48 * u3), bA.qo.textAlign(vS, 1), bA.qo.textBaseline(vS, 1), vS.fillText(L(125), Math.floor(f9 + (i - .5 * u3) / 2), Math.floor(fB + .55 * u3)), aM.a6j(Math.floor(f9 + i - .8 * u3), Math
			.floor(fB + .25 * u3), Math.floor(.5 * u3)), vS.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aBm, f9 = [0, 0, 0, 0, 0],
		fB = [0, 0, 0, 0, 0],
		nX = [1, 1, 1, 1, 1],
		fT = [!0, !0, !0, !1, !1],
		ea = (this.fo = [!0, !0, !0, !1, !1], null);
	this.aDT = function(a3h, aDU) {
		ea = a3h, fT = aDU, aBm = [bK.aDV, bK.a1x, bK.aDW, bK.aDW, bK.aDX], this.dd()
	}, this.dd = function() {
		if (ab.tX()) {
			var aB, tC = Math.floor((a0.a1.iA() ? .261 : .195) * h.iB),
				tD = Math.floor(.9 * tC),
				a9F = Math.floor(.17 * tD);
			if (gap = a0.a1.iA() ? 2 * bc.gap : bc.gap, nX[0] = tC / ea[0].width, nX[1] = tD / ea[1].width, nX[2] = a9F / ea[2].height, nX[3] = a9F / ea[3].height, nX[4] = a9F / ea[4].height, nX[2] *= 1.7, nX[3] *= 1.07, f9[0] = gap, f9[1] = gap,
				f9[2] = gap, f9[3] = gap, f9[4] = Math.floor(2 * gap + nX[3] * ea[3].width), fB[0] = gap, fB[1] = fB[0] + gap + nX[0] * ea[0].height, fB[2] = fB[1] + gap + nX[1] * ea[1].height, fB[3] = fB[2] + gap + nX[2] * ea[2].height, fB[4] =
				fB[3], !fT[0])
				for (aB = 0; aB < 5; aB++) fB[aB] -= nX[0] * ea[0].height + gap;
			if (!fT[1])
				for (aB = 2; aB < 5; aB++) fB[aB] -= nX[1] * ea[1].height + gap
		}
	}, this.hn = function() {
		return !(7 === aa.a24() && a0.a1.iA())
	}, this.hE = function(iI, iJ) {
		if (ea && this.hn())
			for (var aB = fT.length - 1; 0 <= aB; aB--)
				if (fT[aB] && this.fo[aB] && f9[aB] < iI && fB[aB] < iJ && iI < f9[aB] + nX[aB] * ea[aB].width && iJ < fB[aB] + nX[aB] * ea[aB].height) return t.u(9, t.t5, new aDY(L(126), bA.qo.a48(aBm[aB]))), !0;
		return !1
	}, this.vR = function() {
		if (ea && this.hn()) {
			var aB;
			for (vS.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fT[aB] && this.fo[aB] && (vS.setTransform(nX[aB], 0, 0, nX[aB], f9[aB], fB[aB]), vS.drawImage(ea[aB], 0, 0));
			vS.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aDZ = 0, this.aDa = null, this.uE = null, this.lB = null, this.y = null, this.ub = null, this.uB = null, this.message = null, this.aDb = null, this.s4 = null, this.aDc = null, this.aDd = new aDe, this.a21 = 0, this.aA9 = 0, this.dd =
		function() {
			this.aA9 = bf.eR, this.aDZ = bG.t8.x8(bj.eO.data[105].value, 5), this.uE = new aDf, this.lB = new aDg, this.y = new aDh, this.ub = new aDi, this.uB = new aDj, this.message = new aDk, this.aDb = new aDl, this.s4 = new aDm, this.aDc =
				new aDn, this.y.dd(), bp.dd(), this.a21 = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uV = function() {
			this.s4 && this.s4.uV(), this.aDa = null, this.uE = null, this.lB = null, this.y = null, this.ub = null, this.uB = null, this.message = null, this.aDb = null, this.s4 = null, this.aDc = null, this.a21 = 0, bp.uV(), a0.a1.setState(0)
		}
}

function aDf() {
	function aEA(g, tP, tQ) {
		var aEB = g[tP];
		g[tP] = g[tQ], g[tQ] = aEB
	}
	this.uF = [
		[],
		[],
		[],
		[]
	], this.uG = [0, 0, 0, 0], this.aDo = [], this.aDp = function(aDq, t3, username, uL, a4b, aDr, elo, color, wg, aDs) {
		username = this.aDu(t3, username, uL, a4b, aDr, elo, color, wg, aDs);
		this.uF[aDq].push(username), bn.aDZ === t3 && (bn.aDa = username), bn.aDc.aDv(t3) && (username.uN = 1), bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === aDq && 1 === bn.y.rs[2]
	}, this.aDu = function(t3, username, uL, a4b, aDr, elo, color, wg, aDs) {
		return {
			t3: t3,
			username: username,
			uL: uL,
			a4b: a4b,
			aDr: aDr,
			elo: elo,
			color: color,
			wg: wg,
			aDs: aDs
		}
	}, this.aDx = function(eA, aDq, uL, a4b, aDr, elo, wg, color) {
		eA = this.uF[aDq][eA];
		eA.uL = uL, eA.a4b = a4b, eA.aDr = aDr, eA.elo = elo, eA.wg = wg, eA.color = color, bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === aDq && 1 === bn.y.rs[2]
	}, this.aDy = function(eA, aDq, aDz) {
		var eA = this.uF[aDq][eA],
			aE0 = eA.username,
			aE1 = "Redacted " + bF.t8.a06(eA.t3, 2);
		eA.username = aDz ? "[" + bA.rn.a1a(aE0) + "] " + aE1 : aE1, aE0.indexOf("Redacted") < 0 && (eA.aE2 = aE0), bn.s4.aE3(eA.t3), bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === aDq && 1 === bn.y.rs[2]
	}, this.aE4 = function(eA, aE5, aE6) {
		var player = this.uF[aE5][eA];
		this.aE7(eA, aE5), this.uF[aE6].push(player), bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === aE6 && 1 === bn.y.rs[2]
	}, this.aE7 = function(eA, aE5) {
		var uE = this.uF[aE5];
		this.aDo.push(uE[eA]), 1e3 < this.aDo.length && this.aDo.shift(), eA >= this.uG[aE5] ? uE[eA] = uE[uE.length - 1] : (this.uG[aE5]--, 2 === aE5 ? (uE.splice(this.uG[aE5] + 1, 0, uE[uE.length - 1]), uE.splice(eA, 1)) : (uE[eA] = uE[this.uG[
			aE5]], uE[this.uG[aE5]] = uE[uE.length - 1])), uE.pop(), bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === aE5 && 1 === bn.y.rs[2]
	}, this.aE8 = function(eA, rr) {
		bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === rr && 1 === bn.y.rs[2];
		var uE = this.uF[rr],
			qg = uE[eA];
		if (2 === rr)
			if (eA >= this.uG[rr]) {
				bn.aDc.join(qg);
				for (var aE9 = this.uG[rr], elo = qg.elo; aE9 && elo > uE[aE9 - 1].elo;) aE9--;
				uE[eA] = uE[this.uG[rr]], uE.splice(this.uG[rr]++, 1), uE.splice(aE9, 0, qg)
			} else uE.splice(this.uG[rr]--, 0, qg), uE.splice(eA, 1);
		else eA >= this.uG[rr] ? (bn.aDc.join(qg), aEA(uE, this.uG[rr]++, eA)) : aEA(uE, --this.uG[rr], eA)
	}, this.aEC = function(t3) {
		for (var uF = this.uF, f2 = uF.length, aB = 0; aB < f2; aB++)
			for (var uE = uF[aB], lH = uE.length, fL = 0; fL < lH; fL++)
				if (t3 === uE[fL].t3) return uE[fL];
		return null
	}
}

function aDn() {
	var aED = [],
		aEE = [],
		aEF = 0;

	function aEG(g, a7b, aEK, aEL) {
		var f2 = g.length;
		if (0 === f2) return "";
		var qV = "@" + g[0];
		if (1 === f2) return qV + a7b + aEL;
		for (var aB = 1; aB < f2 - 1; aB++) qV += ", @" + g[aB];
		return qV + " and @" + g[f2 - 1] + aEK + aEL
	}
	this.dd = function() {
		var qV = aEG(aEE, " is", " are", " in the lobby!");
		qV.length && bn.message.aEH({
			id: 7,
			r: qV
		}), aED = [], aEE = [], aEF = 0
	}, this.aDv = function(aEI) {
		return bn.aDZ !== aEI && (aEI = bF.t8.a06(aEI, 5), !!bj.vq.uN(aEI)) && (aEE.push(aEI), !0)
	}, this.join = function(player) {
		bn.aDZ !== player.t3 && (player = bF.t8.a06(player.t3, 5), bj.vq.uN(player)) && aED.push(player)
	}, this.aEJ = function() {
		var a7b, aEK;
		++aEF < 3 || (aEF = 0, a7b = aEG(aEE, "", "", " entered the lobby!"), (a7b = (aEK = aEG(aED, "", "", " joined a game!")).length ? a7b.length ? a7b + " " + aEK : aEK : a7b).length && bn.message.aEH({
			id: 7,
			r: a7b
		}), aED = [], aEE = [])
	}
}

function aDe() {
	this.dl = function(eA) {
		if ((uG = bn.uE.uG[eA]) < 2 && !__fx.customLobby.isActive()) return !1;
		var rt = bn.y.ru[eA],
			aEM = 9 === rt.aEN ? 333 : 512,
			uG = Math.min(uG, aEM);
		8 === rt.aEN && (uG -= uG % 2);
		aEM = bn.uE.uF[eA].splice(0, uG), bn.uE.uG[eA] -= uG, uG = function(aEO) {
			if (bn.aDa) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var f2 = aEO.length, t3 = bn.aDa.t3, aB = 0; aB < f2; aB++)
					if (aEO[aB].t3 === t3) return aB
			}
			return -1
		}(aEM);
		return -1 === uG ? (bn.uE.aDo = bn.uE.aDo.concat(aEM), 1e3 < bn.uE.aDo.length && bn.uE.aDo.splice(0, bn.uE.aDo.length - 1e3), bn.y.aDw += 29 === t.t5 && bn.y.rs[0] === eA && 1 === bn.y.rs[2], !1) : (8 === rt.aEN && (rt.aER = (rt.aER + (
			uG >> 1)) % 1024, eA = uG - uG % 2, uG %= 2, aEM = aEM.slice(eA, 2 + eA)), ax.dd(rt, aEM, uG), !0)
	}, this.aES = function(rt, aEO, aEP) {
		var f5 = aD.data = new a5K,
			aEW = (f5.spawningSeed = rt.spawningSeed, rt.aEN < 7 ? (f5.gameMode = 1, f5.numberTeams = rt.aEN + 2) : 9 === rt.aEN ? (f5.gameMode = f5.isZombieMode = 1, f5.numberTeams = 2) : (f5.gameMode = 0, f5.battleRoyaleMode = 7 === rt.aEN ?
				0 : 10 === rt.aEN ? 1 : 2), f5.selectedPlayer = aEP, f5.isContest = rt.aET, f5.mapType = bS.aEU(rt.ei) ? 0 : 1, bS.aEV(f5, rt.ei), f5.mapSeed = rt.mapSeed, f5.humanCount = aEO.length);
		f5.selectableSpawn = 1 === f5.gameMode || aEW < 100, f5.colorsData = new Uint32Array(aEW), f5.playerNamesData = new Array(aEW), f5.a5i = new Uint32Array(aEW);
		for (var aB = 0; aB < aEW; aB++) f5.colorsData[aB] = aEO[aB].color, f5.playerNamesData[aB] = aEO[aB].username, f5.a5i[aB] = aEO[aB].t3;
		if (2 === f5.battleRoyaleMode)
			for (f5.elo = new Uint16Array(aEW), aB = 0; aB < aEW; aB++) f5.elo[aB] = aEO[aB].elo;
		aa.setState(8), bS.a7(rt.ei, f5.mapSeed), aD.a5P(), aD.a5N = 2
	}
}

function aDg() {
	var e1 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aEX = [bB.o9, bB.o9, bB.oA, bB.od, bB.oe, bB.oQ, bB.ok, bB.oA, bB.p6, bB.ou, bB.p3],
		aEY = [
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
		aEZ = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aEn(rv, t3, aEp) {
		for (var fM = rv.length - 1; 0 <= fM; fM--) {
			var qg = rv[fM];
			0 === qg.id && qg.t3 === t3 && (qg.r = "[Redacted Message]", aEp) && (qg.aEq = 1)
		}
	}
	this.s0 = function(aEa) {
		var aEb, a1b;
		return aEa.id < 5 && (aEb = "@" + bF.t8.a06(aEa.t3, 5)), 0 === aEa.id ? aEb + ": " + aEa.r : 1 === aEa.id ? (a1b = "@" + bF.t8.a06(aEa.target, 5), 0 === aEa.aEc ? 32768 <= aEa.value ? aEb + " voted with " + (aEa.value - 32768 + 1) +
				" gold against " + a1b + " to weaken the latter's admin position. 📉" : aEb + " voted with " + (aEa.value + 1) + " gold for " + a1b + " to strengthen the latter's admin position. 💪" : 1 === aEa.aEc ? aEb + " sent " + Math.floor(
					aEa.value / 100) + " 🧈 gold to " + a1b + "." : aEb + " voted with " + (aEa.value / 10).toFixed(1) + " points for " + a1b + " to acknowledge the latter as clan leader. ✅") : 2 === aEa.id ? 0 === aEa.aEc ? aEb +
			" was 🔇 muted for 1 Hour." : 1 === aEa.aEc ? "The username of " + aEb + " was ✂️ redacted. Duration: 1 Day" : aEb + " 👢 was kicked." : 3 === aEa.id ? aEb + bo.eD(aEa.aEc, bo.e7[aEa.aEc][aEa.value]) + "@" + bF.t8.a06(aEa.target, 5) +
			bo.eF(aEa.aEc, bo.e7[aEa.aEc][aEa.value]) : 4 === aEa.id ? aEb + bo.eD(5, bo.e7[5][aEa.aEc]) + "@" + bF.t8.a06(aEa.target, 5) + bo.eF(5, bo.e7[5][aEa.aEc]) : 5 === aEa.id ? aEZ[aEa.aEc] : 6 === aEa.id ? "You are about to mention " +
			aEa.value + " player" + (1 === aEa.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aEa.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aEa.id ? aEa.r : void 0
	}, this.rz = function(aEa, aEd) {
		return {
			aEa: aEa,
			r: aEd,
			aEe: 0,
			fontSize: 1,
			s3: 0,
			aEf: aEa.id ? bB.oc : bB.nv
		}
	}, this.uJ = function(player, rr) {
		return (2 === rr ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.uK = function(uL) {
		return aEX[uL]
	}, this.aEg = function(uL, a4b) {
		return uL < 3 || 7 === uL ? aEY[uL][0] : 4 === uL ? aEY[uL][a4b < 1 ? 0 : a4b < 10 ? 1 : 2] : aEY[uL][a4b < 10 ? 0 : 1]
	}, this.aEh = function(a4b) {
		return 0 === a4b
	}, this.aEC = function(rr, t3) {
		for (var uF = bn.uE.uF, uE = uF[rr], f2 = uE.length, aB = 0; aB < f2; aB++)
			if (t3 === uE[aB].t3) return uE[aB];
		for (var fM = 0; fM < uF.length; fM++)
			if (rr !== fM)
				for (f2 = (uE = uF[fM]).length, aB = 0; aB < f2; aB++)
					if (t3 === uE[aB].t3) return uE[aB];
		return null
	}, this.uM = function(qg) {
		return !!bn.aDa && qg.t3 === bn.aDa.t3
	}, this.aEi = function(uE, aEj, aEk) {
		var a1Y = [];
		loop: for (var aB = aEj; aB < aEk; aB++) {
			var a1Z = bA.rn.a1a(uE[aB].username);
			if (a1Z) {
				for (var fM = a1Y.length - 1; 0 <= fM; fM--)
					if (a1Z === a1Y[fM].name) {
						a1Y[fM].gU++;
						continue loop
					} a1Y.push({
					name: a1Z,
					gU: 1
				})
			}
		}
		if (a1Y.sort(function(fL, fM) {
				return fM.gU - fL.gU
			}), 0 === a1Y.length) return "";
		for (var qV = a1Y[0].name + ": " + a1Y[0].gU, aB = 1; aB < a1Y.length; aB++) qV += "   " + a1Y[aB].name + ": " + a1Y[aB].gU;
		return qV
	}, this.aEl = function(uL, a4b, aDr) {
		return 0 === e1[uL].length ? "Rank: " + (a4b + 1) : e1[uL] + " Rank: " + (a4b + 1) + (3 !== uL && aDr < 100 ? "   " + e1[3] + " Rank: " + (aDr + 1) : "")
	}, this.aEm = function(t3) {
		for (var ru = bn.y.ru, aB = 0; aB < ru.length; aB++) aEn(ru[aB].rv, t3);
		aEn(bn.message.aEo(), t3, 1), bn.s4.aEm(t3)
	}
}

function aDj() {
	var sX = 0,
		aEr = 0,
		aEs = 0,
		aEt = null,
		aEu = null;

	function aEx(qg, aEy, aEz) {
		var qV = qg.username;
		return (qV += "   " + bn.lB.aEl(qg.uL, qg.a4b, qg.aDr)) + function(qg) {
			qg = qg.wg;
			if (qg < 1e3) return "   Gold: " + qg;
			if ((qg %= 1024) < 1e3) return "   Gold: " + qg + "k";
			return "   Gold: " + (qg - 999) + "M"
		}(qg) + ("   IP: " + bF.t8.a06(qg.aDs, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aEz ? aEr : aEw(qg, aEy)])
	}

	function aEw(qg, aEy) {
		return aEr = aEy || bn.uE.aEC(qg.t3) ? 1 : 0
	}
	this.uC = 0, this.aEv = function() {
		!sX || aEr === aEw(aEu) && aEs === aEu.wg || (aEs = aEu.wg, aEt.show(-1, -1, aEx(aEu, 0, 1), 1, 1, aEu.color))
	}, this.uO = function(e, qg, aEy) {
		var a9M = e.getBoundingClientRect();
		this.show(a9M.left, a9M.top, qg, 0, aEy), e.addEventListener("mouseleave", function remove() {
			e.removeEventListener("mouseleave", remove), bn.uB && bn.uB.s5(1)
		}), this.uC = aEy
	}, this.show = function(f9, fB, qg, sb, aEy) {
		aEt = aEt || new sU, aEs = (aEu = qg).wg, aEt.show(f9, fB, aEx(qg, aEy), sb, 0, aEu.color), sX = 1
	}, this.s5 = function(si) {
		this.uC = 0, aEt && aEt.s5(si) && (sX = 0, aEu = null)
	}
}

function aDh() {
	function aF4(aF6) {
		bn.y.aDw && 1 === bn.y.rs[2] && t.a5v(29).aF7(), bn.y.aDw = 0, t.a5v(29).aF8(), 0 !== bn.y.ru[bn.y.rs[0]].tx && !aF6 || t.a5v(29).aF9(), bn.uB.aEv()
	}
	this.ru = new Array(4), this.rs = [0, 0, 1, 0], this.aDw = 0, this.aF1 = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.ru.length; aB++) this.ru[aB] = new aF2;
		this.rs[0] = bj.eO.data[158].value
	}, this.aF3 = function() {
		aF4(!0), bn.aDc.dd()
	}, this.aEJ = function() {
		bn.aDc.aEJ();
		for (var aB = 0; aB < bn.y.ru.length; aB++) {
			var rt = bn.y.ru[aB];
			0 === rt.tx ? rt.aFA = 0 : (rt.aFB = Math.max(rt.aFB - rt.aFA % 2, 0), rt.aFA++)
		}
		aF4(!1)
	}, this.aFC = function(rr) {
		this.rs[0] !== rr || this.rs[2] || t.a5v(29).aFD()
	}
}

function aDl() {
	var aFE = 0,
		aFF = "",
		aFG = 0,
		aFH = 0,
		aFI = 0;

	function aFK(aEd) {
		b0.aFV.aFW(3, aEd)
	}

	function aFT(gU) {
		aFE = 1, bn.message.aEH({
			id: 6,
			value: gU
		})
	}

	function aFN(r) {
		var aFZ = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aFZ)
	}
	this.a0t = function(r) {
		var aFJ, g, aFP;
		if (aFE) return aFE = 0, "yes" === (aFJ = r.toLowerCase()) || "y" === aFJ ? void aFK(aFF) : void bn.message.aEH({
			id: 5,
			aEc: 7
		});
		!(r.indexOf("@") < 0) && (aFJ = aFN(r)) ? (aFF = r, g = function(aFM) {
			for (var f2 = aFM.length, aFX = [0, 0, 0, 0], aB = 0; aB < f2; aB++)
				for (var i = aFM[aB], fL = 0; fL < 4; fL++) i === "@room" + (fL + 1) && (aFX[fL] = 1);
			if ((aFH = bA.qw.a3L(aFX)) % 4 == 0) return bA.qw.a3d(bn.uE.uF);
			for (fL = 0; fL < 4; fL++) aFX[fL] = aFX[fL] ? bn.uE.uF[fL] : [];
			return bA.qw.a3d(aFX)
		}(aFJ), function(aFM, aFP, r) {
			if (!aFG) return;
			for (var f2 = aFP.length, aB = 0; aB < f2; aB++) 2 === aFP[aB].id && (r = r.replace(aFM[aFP[aB].eA], "@" + aFP[aB].fT));
			return aFE = 1, aFK((aFF = r).slice(0, 126) + "|"), 1
		}(aFJ, aFP = function(aFM) {
			for (var aFP = [], f2 = (aFI = aFG = 0, aFM.length), aB = 0; aB < f2; aB++) {
				var i = aFM[aB],
					lH = i.length;
				bA.rn.startsWith(i, "@[") ? lH <= 9 && bA.rn.a4B(i, "]") && aFP.push({
					id: 0,
					fT: i.substring(2, lH - 1).toUpperCase()
				}) : 6 === lH ? bA.rn.startsWith(i, "@room") || (aFI++, aFP.push({
					id: 1,
					fT: bG.t8.x8(i.substring(1), 5)
				})) : 1 < lH && lH < 5 && 0 <= (lH = b7.data.aDD(i.substring(1))) && (aFP.push({
					id: 2,
					fT: lH,
					eA: aB
				}), aFG = 1)
			}
			return aFP
		}(aFJ), r) || (0 === aFP.length ? aFH || function(aFM) {
			for (var f2 = aFM.length, aB = 0; aB < f2; aB++) {
				var i = aFM[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aFJ) ? aFT(g.length) : aFK(r) : aFJ.length === aFI ? aFK(r) : (function(g, aFP) {
			var lH = aFP.length;
			if (0 === lH) return;
			var f2 = g.length;
			loop: for (var aB = f2 - 1; 0 <= aB; aB--) {
				for (var fL = 0; fL < lH; fL++)
					if (0 === aFP[fL].id) {
						if (aFP[fL].fT === bA.rn.a1a(g[aB].username)) continue loop
					} else if (1 === aFP[fL].id && aFP[fL].fT === g[aB].t3) continue loop;
				g[aB] = g[--f2], g.pop()
			}
		}(g, aFP), aFT(g.length)))) : aFK(r)
	}, this.aFa = function(r) {
		var aFM = aFN(r);
		if (aFM)
			for (var a5 = new RegExp("^[0-9]+$"), f2 = aFM.length, aB = 0; aB < f2; aB++) {
				var i = aFM[aB].substring(1),
					lH = i.length;
				1 <= lH && lH <= 3 && a5.test(i) && (lH = parseInt(i, 10), !isNaN(lH)) && 0 <= lH && lH < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[lH]))
			}
		return r
	}
}

function aDk() {
	var aFb, aFc = [],
		aFd = -1,
		aFe = 0,
		aFf = 0;

	function aFk() {
		aFe = bf.eR, (3 === this.uS ? aFj : (aFd = (aFc.length + aFd + 2 * this.uS - 1) % aFc.length, aFi))()
	}

	function aFi() {
		0 !== aFc.length && (aFf = 0, aFb && aFb.uV(), (aFb = new uP(aFk)).sH(aFd, aFc.length), aFb.show(aFc[aFd]), bn.message.resize())
	}

	function aFj() {
		aFf = 1, aFb && aFb.uV(), (aFb = new uW(aFi)).sH(aFc.length), aFb.show(), bn.message.resize()
	}
	this.aEH = function(aEa) {
		var qg;
		2 === aEa.id && 3 === aEa.aEc ? bn.lB.aEm(aEa.t3) : (qg = bn.lB.rz(aEa, bn.lB.s0(aEa)), (5 !== aEa.id && 6 !== aEa.id || (t.a5v(29).aFg().s2(qg), 5 === aEa.id)) && (qg = bf.eR < aFe + 2e4, aFd !== aFc.length - 1 && qg || (aFd = aFc
			.length), aFc.push(aEa), bj.eO.data[14].value || 7 === aEa.id || bp.play(), aFb) && (aFf && (bj.eO.data[13].value || qg) ? aFb.sH(aFc.length) : aFi()))
	}, this.show = function() {
		aFj()
	}, this.s5 = function() {
		aFd = aFc.length - 1, aFb && aFb.uV(), aFb = null
	}, this.resize = function() {
		aFb && aFb.resize()
	}, this.aEo = function() {
		return aFc
	}
}

function aDi() {
	var aFl = null,
		aFm = null,
		aFn = 0,
		aFo = 0,
		aFp = null;

	function aFr() {
		0 !== aFm.uL && (bn.ub.s5(), t.u(8, 29, new t6(25, {
			t7: 0,
			t3: bF.t8.a06(aFm.t3, 5),
			t4: 0
		}, 29)))
	}

	function aFt() {
		return !bn.aDa || bn.lB.uM(aFm) ? 1 : 0
	}

	function aFs() {
		var f9 = aFl.f9,
			fB = aFl.fB,
			aG2 = (bn.ub.s5(), aFt());
		aFl = new uX([new w(bo.e7[5][0], function() {
			aFw(5, 0)
		}, aG2), new w(bo.e7[5][1], function() {
			aFw(5, 1)
		}, aG2), new w(bo.e7[5][2], function() {
			aFw(5, 2)
		}, aG2), new w(bo.e7[5][3], function() {
			aFw(5, 3)
		}, aG2)]), aFv(f9, fB), aFo = aFn = 2
	}

	function aFu() {
		29 === t.t5 && t.a5u().aDb(bF.t8.a06(aFm.t3, 5))
	}

	function aFw(id, value) {
		5 === id && b0.aG3.aG4({
			t7: 3,
			t3: bF.t8.a06(aFm.t3, 5),
			value: value
		})
	}

	function aFv(f9, fB, ud) {
		aFl.show(f9, fB, ud), bn.uB.show(aFl.f9, aFl.fB, aFm, 1)
	}
	this.aFq = function(e, qg) {
		aFn = 1, aFm = qg, aFl = new uX([new w(L(127), aFr, 0 === qg.uL ? 1 : 0), new w(L(128), aFs, aFt()), new w(L(129), aFu, 0)]), aFv((aFp = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aFp.clientY, 1)
	}, this.a2v = function(code) {
		if (29 !== t.t5) return !1;
		if (!aFm) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.s5();
			else if (bA.rn.startsWith(code, "Numpad") || bA.rn.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aFn) this.aFq(aFp, aFm);
				else {
					if (!aFl) return !1;
					1 === aFn ? code <= 1 ? aFr() : 2 === code ? aFs() : (aFu(), this.s5()) : (aFw(aFo, bL.i9(code - 1, 0, bo.e7[aFo].length - 1)), this.s5())
				}
		}
		return !0
	}, this.s5 = function() {
		aFn = 0, aFl && aFl.s5(), aFl = null, bn.uB.s5()
	}
}

function aF2() {
	this.tx = 0, this.ei = 0, this.mapSeed = 0, this.aEN = 0, this.aG7 = 0, this.aG8 = 0, this.aET = 0, this.aFB = 0, this.spawningSeed = 0, this.a29 = 0, this.aER = 0, this.rv = [], this.rw = 1048575, this.aFA = 0, this.aG9 = [{
		ei: 0,
		mapSeed: 0,
		aEN: 0,
		eR: 100,
		aET: 0
	}, {
		ei: 1,
		mapSeed: 0,
		aEN: 1,
		eR: 200,
		aET: 0
	}, {
		ei: 2,
		mapSeed: 0,
		aEN: 2,
		eR: 300,
		aET: 0
	}, {
		ei: 3,
		mapSeed: 0,
		aEN: 3,
		eR: 400,
		aET: 0
	}, {
		ei: 0,
		mapSeed: 0,
		aEN: 9,
		eR: 500,
		aET: 0
	}, {
		ei: 1,
		mapSeed: 0,
		aEN: 10,
		eR: 600,
		aET: 0
	}, {
		ei: 2,
		mapSeed: 0,
		aEN: 8,
		eR: 700,
		aET: 0
	}, {
		ei: 3,
		mapSeed: 0,
		aEN: 3,
		eR: 800,
		aET: 0
	}]
}

function aDm() {
	var aGA = [],
		tI = [],
		aGB = [];

	function aGD(qg) {
		for (var r = qg.r, aGC = [];;) {
			var ea = function aGF(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qV = r.substring(position + 1, position + 6);
				if (5 !== qV.length) return aGF(r, position + 1);
				if (bA.rn.startsWith(qV, "room")) return aGF(r, position + 1);
				var aGM = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aGM.test(qV)) return aGF(r, position + 1);
				aGM = r.substring(position + 6, position + 7);
				if (1 !== aGM.length) return position;
				qV = new RegExp("^[ :!.]+$");
				if (!qV.test(aGM)) return aGF(r, position + 1);
				return position
			}(r, 0);
			if (-1 === ea) {
				aGC.push(aGG(r, qg));
				break
			}
			0 === ea ? aGC.push(aGH(r.substring(1, 6), qg, ea)) : (aGC.push(aGG(r.substring(0, ea), qg)), aGC.push(aGH(r.substring(ea + 1, ea + 6), qg, ea))), r = r.substring(ea + 6)
		}
		return aGC
	}

	function aGH(qV, qg, ea) {
		var aDt = function(qV) {
				var t3 = bG.t8.x8(qV, 5),
					aDt = bn.uE.aEC(t3);
				if (aDt) {
					for (aGA.push(aDt); 75 < aGA.length;) aGA.shift();
					return aDt
				}
				for (var aDo = bn.uE.aDo, aB = aDo.length - 1; 0 <= aB; aB--)
					if (aDt = aDo[aB], t3 === aDt.t3) return aGA.push(aDt), aDt;
				for (aB = aGA.length - 1; 0 <= aB; aB--)
					if (aDt = aGA[aB], t3 === aDt.t3) return aGA.push(aDt), aDt;
				return bn.uE.aDu(t3, qV, 1, 999999, 999999, 0, 0, 0, 0)
			}(qV),
			qV = (0 === ea && 0 === qg.aEa.id && qg.s3 && (qg.fontSize = bn.lB.aEg(aDt.uL, aDt.a4b), qg.aEe = bn.lB.aEh(aDt.a4b)), document.createElement("span"));
		return qV.textContent = function(aDt, qg, ea) {
			if (aDt.aGK) return aDt.aGK--, ea = 2 === qg.aEa.id || (3 === qg.aEa.id || 4 === qg.aEa.id) && 0 !== ea, aDt.username + (ea ? " (" + aDt.aE2 + ")" : "");
			if (qg.aEa.aEq) return "Redacted " + bF.t8.a06(aDt.t3, 2);
			return aDt.username
		}(aDt, qg, ea), qV.style.display = "inline-block", qV.style.color = bn.lB.uK(aDt.uL), qV.style.cursor = "pointer", qV.style.margin = "0", qV.style.font = "inherit", qV.style.minWidth = qV.style.minHeight = "1em", bn.lB.uM(aDt) && (qV
			.style.textDecoration = "underline"), aDt.uN && (qV.style.textDecorationLine = "underline", qV.style.textDecorationStyle = "dotted"), bn.lB.aEh(aDt.a4b) && (qV.style.fontWeight = "bold"), qV.onclick = function(e) {
			bn.ub.aFq(e, aDt)
		}, bJ.rG() || (qV.onmouseover = function(e) {
			bn.uB.uO(e.target, aDt)
		}), tI.push(qV), qV
	}

	function aGG(r, qg) {
		var rm = document.createElement("span");
		return rm.textContent = r, rm.style.color = qg.aEf, rm.style.margin = "0", rm.style.font = "inherit", rm
	}

	function aGR(aDt, aE1, t3) {
		t3 !== aDt.t3 || aDt.aE2 || (aDt.aE2 = aDt.username, aDt.username = aE1)
	}
	this.uV = function() {
		for (var aB = 0; aB < tI.length; aB++) tI[aB].onclick = tI[aB].onmouseover = null;
		aGB = tI = null
	}, this.transform = function(qg) {
		for (var qT = document.createElement("div"), aGC = aGD(qg), aB = 0; aB < aGC.length; aB++) qT.appendChild(aGC[aB]);
		0 === qg.aEa.id && (qT.vx143 = qg.aEa, aGB.push(qT)), qT.style.margin = "0.6em 0.6em", qg.s3 && (qT.style.marginLeft = qT.style.marginRight = "inherit"), qT.style.font = "inherit";
		var aGE = 0 < qg.aEa.id;
		return qg.aEe && (qT.style.fontWeight = "bold"), aGE && (qT.style.paddingLeft = "0.7em"), aGE && (qT.style.fontStyle = "italic"), qT.style.fontSize = qg.fontSize.toFixed(2) + "em", qT
	}, this.aGP = function(aGQ) {
		if (aGQ && (2 === aGQ.id && 1 === aGQ.aEc || 3 === aGQ.id && 2 === aGQ.aEc)) {
			var t3 = 3 === aGQ.id ? aGQ.target : aGQ.t3;
			if (!bn.uE.aEC(t3)) {
				for (var aE1 = "Redacted " + bF.t8.a06(t3, 2), aDo = bn.uE.aDo, aB = aDo.length - 1; 0 <= aB; aB--) aGR(aDo[aB], aE1, t3);
				for (aB = aGA.length - 1; 0 <= aB; aB--) aGR(aGA[aB], aE1, t3)
			}
		}
	}, this.aE3 = function(t3) {
		for (var aGS = aGB, aB = aGS.length - 1; 0 <= aB; aB--) {
			var f5 = aGS[aB];
			if (f5.vx143.t3 === t3) {
				for (; f5.firstChild;) t.removeChild(f5, f5.firstChild);
				for (var aGC = aGD(bn.lB.rz(f5.vx143, bn.lB.s0(f5.vx143))), fL = 0; fL < aGC.length; fL++) f5.appendChild(aGC[fL]);
				aGS.splice(aB, 1)
			}
		}
	}, this.aEm = function(t3) {
		for (var aGS = aGB, aB = aGS.length - 1; 0 <= aB; aB--) {
			var f5 = aGS[aB];
			if (f5.vx143.t3 === t3) {
				for (; f5.firstChild;) t.removeChild(f5, f5.firstChild);
				f5.vx143.r = "[Redacted Message]";
				for (var aGC = aGD(bn.lB.rz(f5.vx143, bn.lB.s0(f5.vx143))), fL = 0; fL < aGC.length; fL++) f5.appendChild(aGC[fL]);
				aGS.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aGT, aGU, aGV;

	function aGa(aB) {
		var button = aY.rN[aB],
			f9 = button.f9,
			fB = button.fB,
			i = button.i,
			j = button.j;
		vS.fillStyle = button.aGY, vS.fillRect(f9, fB, i, j), aB === aGT && (vS.fillStyle = aGV, vS.fillRect(f9, fB, i, j)), vS.lineWidth = bc.zn, vS.strokeStyle = aGU, vS.strokeRect(f9, fB, i, j),
			function(button) {
				var f9 = button.f9,
					fB = button.fB,
					i = button.i,
					j = button.j;
				bA.qo.textAlign(vS, 1), bA.qo.textBaseline(vS, 1), vS.font = button.font, vS.fillStyle = aGU, vS.fillText(button.aEd, Math.floor(f9 + i / 2), Math.floor(fB + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.fB = 0, this.gap = 0, this.dd = function() {
		aGT = -1, aGU = bB.nv, aGV = "rgba(255,255,255,0.16)", this.rN = new Array(7), this.j = Math.floor((a0.a1.iA() ? .123 : .093) * h.iB), this.i = Math.floor((a0.a1.iA() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aGW = Math.floor(.26 * this.j),
			aGX = bA.qo.sf(1, aGW);
		this.rN[0] = {
			f9: 0,
			fB: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			aEd: "Multiplayer",
			font: aGX,
			aGY: "rgba(22,88,22,0.8)",
			fontSize: aGW
		}, aGW = Math.floor(.18 * this.j), aGX = bA.qo.sf(1, aGW), this.rN[1] = {
			f9: 0,
			fB: 0,
			i: this.i - this.rN[0].i - this.gap,
			j: this.j,
			aEd: "Single Player",
			font: aGX,
			aGY: "rgba(22,88,88,0.8)",
			fontSize: aGW
		}, this.rN[2] = {
			f9: 0,
			fB: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEd: "",
			font: this.rN[1].font,
			aGY: "rgba(100,0,0,0.8)",
			fontSize: this.rN[1].fontSize
		}, this.rN[3] = {
			f9: 0,
			fB: 0,
			i: this.i,
			j: this.j,
			aEd: "Back",
			font: this.rN[0].font,
			aGY: "rgba(0,0,0,0.8)",
			fontSize: this.rN[0].fontSize
		}, this.rN[4] = {
			f9: 0,
			fB: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			aEd: "The game was updated!",
			font: this.rN[1].font,
			aGY: "rgba(100,0,0,0.8)",
			fontSize: this.rN[1].fontSize
		}, this.rN[5] = {
			f9: 0,
			fB: 0,
			i: this.rN[0].i,
			j: Math.floor(.8 * this.j),
			aEd: "Reload",
			font: this.rN[0].font,
			aGY: "rgba(0,100,0,0.8)",
			fontSize: this.rN[0].fontSize
		}, this.rN[6] = {
			f9: 0,
			fB: 0,
			i: this.rN[1].i,
			j: this.rN[5].j,
			aEd: "Back",
			font: this.rN[0].font,
			aGY: "rgba(0,0,0,0.8)",
			fontSize: this.rN[0].fontSize
		}, this.aAL()
	}, this.aAL = function() {
		this.fB = Math.floor(.54 * h.j), this.rN[0].f9 = Math.floor(.5 * h.i - .5 * this.i), this.rN[1].f9 = this.rN[0].f9 + this.rN[0].i + this.gap, this.rN[2].f9 = this.rN[3].f9 = this.rN[0].f9, this.rN[4].f9 = this.rN[5].f9 = this.rN[0].f9,
			this.rN[6].f9 = this.rN[1].f9, this.rN[0].fB = Math.floor(.54 * h.j), this.rN[1].fB = this.rN[0].fB, this.rN[2].fB = Math.floor((h.j - this.rN[2].j - this.rN[3].j - this.gap) / 2), this.rN[3].fB = this.rN[2].fB + this.rN[2].j + this
			.gap, this.rN[4].fB = Math.floor((h.j - this.rN[4].j - this.rN[5].j - this.gap) / 2), this.rN[5].fB = this.rN[6].fB = this.rN[4].fB + this.rN[4].j + this.gap
	}, this.aGZ = function() {
		aGa(0), aGa(1)
	}, this.aGb = function() {
		aGa(2), aGa(3)
	}, this.aGc = function() {
		aGa(4), aGa(5), aGa(6)
	}, this.a2N = function(f9, fB, mh) {
		var aB = -1;
		return 0 === aa.a24() ? aB = this.a2r(f9, fB, 0, 2) : 3 === aa.a24() ? aB = this.a2r(f9, fB, 3, 1) : 5 === aa.a24() && (aB = this.a2r(f9, fB, 5, 2)), aGT !== aB && (aGT = aB, mh) && (bf.dk = !0), -1 !== aB && (aT.rp(), !0)
	}, this.a2r = function(f9, fB, aGd, size) {
		for (var aB = aGd; aB < aGd + size; aB++)
			if (f9 >= this.rN[aB].f9 && fB >= this.rN[aB].fB && f9 <= this.rN[aB].f9 + this.rN[aB].i && fB <= this.rN[aB].fB + this.rN[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aGf, aGg, a7x, aGh, aGi, aGj, aGk, aGl, aGm, a7w, aGn, aGo, aGp, aGq = 1,
		aGr = 0,
		aGs = 0;

	function aGw(aGx) {
		aGx ? aGp = (aGp + 1) % b0.y.aGy : (b0.y.close(aGp, 3280), aGq ? aGq = 0 : (aGs = 1 - aGs, 0 === (aGr = (aGr + 1) % 2) && (aGp = (aGp + 1) % b0.y.aGy, b0.y.close(aGp, 3280)))), aGo = bf.eR, aZ.aGv = aGs, b0.y.aGz(aGp, 4, 1) && b0.aFV.aH0(aGp)
	}

	function aH1() {
		if (0 !== aGp) return 1 === aGp && __fx.customLobby.isActive() ? (o.a2C(3249), __fx.customLobby.setActive(!1)) : void aGw();
		o.a2C(3249)
	}

	function aH6(fB, aA3, tx) {
		var nL = Math.floor((h.i - aGh) / 2) + aGk,
			nY = nL + Math.floor(tx * (aGh - 2 * aGk));
		vS.lineWidth = aA3, vS.beginPath(), vS.moveTo(nL, fB), vS.lineTo(nY, fB), vS.lineTo(Math.floor(nL - aGk + tx * aGh), fB + a7x), vS.lineTo(nL - aGk, fB + a7x), vS.closePath()
	}
	this.aGt = 1, this.aGu = 0, this.aGv = 0, this.dd = function() {
		aa.setState(6), aGf = 0, aGg = 1, aGl = "rgba(0,220,120,0.4)", aGm = "rgba(0,0,0,0.8)", this.resize(), bf.dk = !0, aGq = 1, aGr = 0, aGp = this.aGt - 1, aGs = 0 === this.aGu ? l.dx ? 1 : 0 : this.aGu - 1, aGw(1)
	}, this.resize = function() {
		aGh = Math.floor((a0.a1.iA() ? .5 : .25) * h.iB), aGi = aGh + 12, a7x = Math.floor(.125 * aGh), aGk = 3 * a7x, aGj = Math.floor(.225 * aGh), aGn = Math.floor(.3 * a7x), a7w = bA.qo.sf(0, aGn)
	}, this.a28 = function(a1z) {
		a1z === aGp && aH1()
	}, this.hE = function(f9, fB) {
		var nL = Math.floor((h.i - aGi) / 2),
			nM = Math.floor(.5 * (h.j - bc.gap - a7x - aGj)) + a7x + bc.gap;
		return nL < f9 && f9 < nL + aGi && nM < fB && fB < nM + aGj && (this.a32(), aY.a2N(f9, fB, !1), !0)
	}, this.a32 = function() {
		b0.y.a2D(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.eV = function() {
		6 === aa.a24() && (bf.eR > aGo + 12e3 && aH1(), 100 < (aGf += .07 * aGg * (aGf < 16 ? 5 + aGf : 84 < aGf ? 105 - aGf : 17)) ? (aGf = 100, aGg = -1) : aGf < 0 && (aGf = 0, aGg = 1), aGl = "rgba(0," + Math.floor(190 - 1.9 * aGf) + "," +
			Math.floor(120 - 1.2 * aGf) + "," + (.4 + .004 * aGf) + ")", aGm = "rgba(0," + Math.floor(1.9 * aGf) + "," + Math.floor(1.2 * aGf) + "," + (.8 - .004 * aGf) + ")", bf.dk = !0)
	}, this.vR = function() {
		var f9 = Math.floor((h.i - aGi) / 2),
			fB = Math.floor(.5 * (h.j - bc.gap - a7x - aGj));
		! function(title, fB, aA3, tx) {
			vS.fillStyle = aGm, aH6(fB, aA3, 1), vS.fill(), vS.fillStyle = aGl, aH6(fB, aA3, tx), vS.fill(), vS.strokeStyle = bB.nv, aH6(fB, aA3, 1), vS.stroke(),
				function(aH8, fB) {
					bA.qo.textAlign(vS, 1), bA.qo.textBaseline(vS, 1), vS.font = a7w, vS.fillStyle = bB.nv, vS.fillText(aH8, Math.floor(.5 * h.i), Math.floor(fB + .58 * a7x))
				}(title, fB)
		}(L(130), fB, 3, aGf / 100),
		function(f9, fB, i, j, aEd) {
			vS.fillStyle = bB.nq, vS.fillRect(f9, fB, i, j), vS.lineWidth = 3, vS.strokeStyle = bB.nv, vS.strokeRect(f9, fB, i, j);
			var f2 = Math.floor(.3 * j);
			bA.qo.textAlign(vS, 1), bA.qo.textBaseline(vS, 1), vS.font = bA.qo.sf(0, f2), vS.fillStyle = bB.nv, vS.fillText(aEd, Math.floor(f9 + i / 2), Math.floor(fB + j / 2 + .1 * f2))
		}(f9, fB + a7x + bc.gap, aGi, aGj, L(37))
	}
}

function cR() {
	var a1v = 0;
	this.dd = function() {
		aY.dd(), a1v = 0
	}, this.setState = function(aH9) {
		a1v = aH9
	}, this.a24 = function() {
		return a1v
	}, this.aHA = function() {
		this.setState(8), t.x()
	}, this.a2v = function(e) {
		if (!bS.xO) return !1;
		if (!(bf.eR < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aHB()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1v) return !0;
					if (7 === a1v) return !0
				}
			}
			return !1
		}
	}, this.aHC = function() {
		bZ.resize()
	}, this.aHB = function() {
		return !!bZ.s5()
	}, this.hE = function(f9, fB) {
		!bS.xO || bZ.hE(f9, fB) || 6 === a1v && aZ.hE(f9, fB) || bY.hE(f9, fB) || aT.hE(f9, fB)
	}, this.a2N = function(f9, fB) {
		!aT.aAE && aY.a2N(f9, fB, !0) || aT.a2N(f9, fB)
	}, this.click = function(f9, fB) {
		aT.a2m()
	}, this.a2Q = function(f9, fB, deltaY) {}, this.aHD = function() {
		aY.aAL(), bf.dk = !0
	}, this.vR = function() {
		8 !== a1v && 10 !== a1v && (vS.imageSmoothingEnabled = !0, this.yx(), 0 !== a1v && (aT.vR(), aO.vR(), this.aHE(), bY.vR()), 0 !== a1v && 6 === a1v && aZ.vR(), bZ.vR(), t.vR())
	}, this.yx = function() {
		var aHG, aHF;
		if (__fx.makeMainMenuTransparent) vS.clearRect(0, 0, h.i, h.j);
		else bS.xO ? (aHF = h.i / bS.fD, aHG = h.j / bS.fE, vS.setTransform(aHF = aHG < aHF ? aHF : aHG, 0, 0, aHF, Math.floor((h.i - aHF * bS.fD) / 2), Math.floor((h.j - aHF * bS.fE) / 2)), vS.drawImage(bS.xQ, 0, 0), vS.setTransform(1, 0, 0, 1,
			0, 0), vS.fillStyle = bB.nq) : vS.fillStyle = bB.nm, vS.fillRect(0, 0, h.i, h.j)
	}, this.aHE = function() {
		var fB = Math.floor(.3 * h.j),
			canvas = ab.aHH("territorial.io"),
			i2 = (i2 = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : i2,
			f9 = (vS.globalAlpha = .15, vS.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - i2 * canvas.width))),
			f9 = Math.floor(f9 / i2),
			fB = Math.floor(fB - .5 * canvas.height * i2),
			fB = Math.floor(fB / i2);
		vS.setTransform(i2, 0, 0, i2, f9, fB), vS.drawImage(canvas, f9, fB), vS.setTransform(1, 0, 0, 1, 0, 0), vS.globalAlpha = 1, vS.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aER = 0;
	var aHJ, aHK, aHL, aHM, aHN, aHO = this.aHI = 0;

	function aHR() {
		aHM = aHN = null, aHO = 0
	}
	this.dd = function(rt, aEO, aEP) {
		t.x(), bn.uV(), aa.setState(10), aHM = rt, aHN = aEO, aHO = aEP, this.aER = rt.aER, this.aHI = aEP, aHJ = 0, aHK = bf.eR + 4500, b0.y.a29 = rt.a29, b0.y.a22 === rt.a29 ? (console.log("direct pass"), aHL = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a22, 3247), aHL = 2, b0.y.aGz(rt.a29, 5, 2) && b0.pI.aHP()), vS.imageSmoothingEnabled = !0, aa.yx();
		aEO = ab.aHH("loading"), aEP = (a0.a1.iA() ? .396 : .25) * h.iB / aEO.width;
		vS.setTransform(aEP, 0, 0, aEP, Math.floor((h.i - aEP * aEO.width) / 2), Math.floor((h.j - aEP * aEO.height) / 2)), vS.imageSmoothingEnabled = !1, vS.drawImage(aEO, 0, 0), vS.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mf = function() {
		0 < aHL && bf.eR > aHK && (aHL--, aHK += 4500, 0 === bf.aHS) && 0 === bf.kJ() && b0.y.aGz(b0.y.a29, 5, 2)
	}, this.aHT = function() {
		return 10 === aa.a24() && (bn.aDd.aES(aHM, aHN, aHO), aHR(), !0)
	}, this.aHU = function() {
		10 === aa.a24() && 2 <= ++aHJ && (bn.aDd.aES(aHM, aHN, aHO), aHR())
	}
}

function cS() {
	var aHW, canvas, a1B, aHX;

	function aHd(eA, name, aHe, qV) {
		a1B[eA] = name, canvas[eA] = new Image, canvas[eA].onload = function() {
			! function(eA, aHe) {
				var a4g, a4h = null;
				7 === aHe ? a4g = bA.a38.a4j : 8 === aHe ? (a4g = bA.a38.a4m, a4h = .1) : 3 === aHe ? (a4g = bA.a38.a4k, a4h = .06) : 5 === aHe ? a4g = bA.a38.a4n : 6 === aHe ? a4g = bA.a38.a4i : 4 === aHe && (a4g = bA.a38.a4o);
				canvas[eA] = bA.a38.a4f(canvas[eA], a4g, a4h)
			}(eA, aHe), aHg()
		}, canvas[eA].onerror = function(e) {
			console.error("Error loading image at index", eA, "Error:", e), aHg()
		}, canvas[eA].src = "data:image/png;base64," + qV
	}

	function aHg() {
		aHW--, aHa()
	}

	function aHa() {
		0 === aHW && (aHW = -1, aHc(), bf.dk = !0, canvas[7] = aHX, canvas[8] = aHX, canvas[9] = aHX, canvas[10] = aHX, 5 === t.t5) && t.a5u().aHi.resize()
	}

	function aHc() {
		aL.a66(), bY.aDT([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.xT = new zK, aj.xT.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aHW = 23, canvas = new Array(aHW), a1B = new Array(aHW), (aHX = document.createElement("canvas")).width = 1;
			for (var aB = aHW - (aHX.height = 1); 0 <= aB; aB--) canvas[aB] = aHX;
			aHc(), aHd(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aHd(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aHd(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHd(3, "orders", 6,
					"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"
					), aHd(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aHd(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aHd(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aHd(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHd(8,
					"googleplay", 3,
					"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"
					), aHd(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aHd(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHd(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHd(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHd(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aHd(14, "bestPlayer", 5,
					"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"
					), aHd(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aHd(16, "apple", 3,
					"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"
					), aHd(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aHd(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aHd(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aHd(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aHd(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aHd(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(eA) {
		return canvas[eA]
	}, this.aHH = function(name) {
		for (var aB = a1B.length - 1; 0 <= aB; aB--)
			if (a1B[aB] === name) return canvas[aB];
		return aHX
	}, this.tX = function() {
		return aHW <= 0
	}, this.aHZ = function() {
		aHW = 0, aHa()
	}
}

function cT() {
	var aHl, aHm, aHn, aHo, aHp, aHq, aHr, aHs, aHt, aHu, aHj = [
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
		aHk = [
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

	function aI0(jc, nd) {
		for (var aB = jc; aB < nd; aB++) aHl[aB] = 4 * bL.dt(64 * ay.random(), ay.value(100)), aHm[aB] = 4 * bL.dt(64 * ay.random(), ay.value(100)), aHn[aB] = 4 * bL.dt(64 * ay.random(), ay.value(100))
	}

	function aHz(jc, nd) {
		for (var colorsData = aD.data.colorsData, aB = jc; aB < nd; aB++) {
			var fT = colorsData[aB];
			aHl[aB] = 4 * (fT >> 12), aHm[aB] = 4 * (fT >> 6 & 63), aHn[aB] = 4 * (63 & fT)
		}
	}

	function aIL(eg, aIN) {
		aCp[eg] = 0, aCp[eg + 1] = 0, aCp[eg + 2] = aIN, aCp[eg + 3] = 0, aIO(eg)
	}

	function aIO(eg) {
		var f9;
		bb.nl || (f9 = ac.yy(eg), eg = ac.yz(eg), bb.nl = f9 >= ba.aCo[0] && f9 <= ba.aCo[2] && eg >= ba.aCo[1] && eg <= ba.aCo[3])
	}
	this.f4 = new Int32Array(4), this.de = function() {
		var f4 = this.f4;
		f4[0] = -4 * bS.fD, f4[1] = 4, f4[2] = -f4[0], f4[3] = -f4[1]
	}, this.dd = function() {
		if (aHl ? (aHl.fill(0), aHm.fill(0), aHn.fill(0), aHo.fill(0), aHp.fill(0), aHq.fill(0), aHr.fill(0), aHs.fill(0), aHt.fill(0), aHu.fill(0), this.a9C.fill(0)) : (aHl = new Uint8Array(aD.ez), aHm = new Uint8Array(aD.ez), aHn =
				new Uint8Array(aD.ez), aHo = new Uint8Array(aD.ez), aHp = new Uint8Array(aD.ez), aHq = new Uint8Array(aD.ez), aHr = new Uint8Array(aD.ez), aHs = new Uint8Array(aD.ez), aHt = new Uint8Array(aD.ez), aHu = new Uint8Array(aD.ez), this
				.a9C = new Uint8Array(aD.ez)), aD.hv)
			for (var aBS = bg.aBS, aB = aD.ez - 1; 0 <= aB; aB--) {
				var ea = aBS[aB],
					lH = bL.dt((aHk[ea][3] + 1) * ay.random(), ay.value(100));
				aHl[aB] = aHj[ea][0] + lH * aHk[ea][0], aHm[aB] = aHj[ea][1] + lH * aHk[ea][1], aHn[aB] = aHj[ea][2] + lH * aHk[ea][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aHz(0, aD.kM), aI0(aD.kM, aD.ez)) : aI0(0, aD.ez) : aHz(0, aD.ez);
		! function() {
			var aB, f5;
			for (aB = aD.ez - 1; 0 <= aB; aB--) f5 = bL.dt(aHl[aB] + aHm[aB] + aHn[aB], 3), aHl[aB] += aI6(f5 - aHl[aB], 2), aHm[aB] += aI6(f5 - aHm[aB], 2), aHn[aB] += aI6(f5 - aHn[aB], 2), aHl[aB] -= aHl[aB] % 4, aHm[aB] -= aHm[aB] % 4, aHn[
				aB] -= aHn[aB] % 4
		}(),
		function() {
			for (var f2 = aD.ez, aI7 = aHl, aI8 = aHm, aI9 = aHn, aIA = aHo, aB = 0; aB < f2; aB++) aI7[aB] += aB >> 7, aI8[aB] += aB >> 5 & 3, aI9[aB] += aB >> 3 & 3, aIA[aB] = 7 & aB
		}(), this.aI3(),
			function() {
				for (var f2 = aD.ez, aIB = aHp, aIC = aHq, aID = aHr, aI7 = aHl, aI8 = aHm, aI9 = aHn, aB = 0; aB < f2; aB++) {
					var e9 = aI7[aB],
						tT = aI8[aB],
						fM = aI9[aB];
					60 <= e9 + tT + fM ? (aIB[aB] = Math.max(e9 - 40, 3 & e9), aIC[aB] = Math.max(tT - 40, 3 & tT), aID[aB] = Math.max(fM - 40, 3 & fM)) : (aIB[aB] = e9 + 40, aIC[aB] = tT + 40, aID[aB] = fM + 40)
				}
			}(),
			function() {
				for (var f2 = aD.ez, aIE = aHs, aIF = aHt, aIG = aHu, aI7 = aHl, aI8 = aHm, aI9 = aHn, aB = 0; aB < f2; aB++) {
					var e9 = aI7[aB],
						tT = aI8[aB],
						fM = aI9[aB];
					688 <= e9 + tT + fM ? (aIE[aB] = e9 - 88, aIF[aB] = tT - 88, aIG[aB] = fM - 88) : (aIE[aB] = Math.min(e9 + 88, 252 + (3 & e9)), aIF[aB] = Math.min(tT + 88, 252 + (3 & tT)), aIG[aB] = Math.min(fM + 88, 252 + (3 & fM)))
				}
			}()
	}, this.a84 = function(player) {
		var g = bO.fa;
		return g[0] = aHl[player], g[1] = aHm[player], g[2] = aHn[player], g
	}, this.aI3 = function() {
		for (var aB = aD.ez - 1; 0 <= aB; aB--) this.a9C[aB] = aHl[aB] + aHm[aB] + aHn[aB] < 280 ? 0 : 1
	}, this.yy = function(eg) {
		return bL.dt(eg, 4) % bS.fD
	}, this.yz = function(eg) {
		return bL.dt(eg, 4 * bS.fD)
	}, this.yW = function(f9, fB) {
		return Math.floor(4 * (fB * bS.fD + f9))
	}, this.ym = function(eg) {
		var f4 = this.f4;
		return this.aIH(eg + f4[0]) || this.aIH(eg + f4[1]) || this.aIH(eg + f4[2]) || this.aIH(eg + f4[3])
	}, this.fQ = function(eg) {
		var f4 = this.f4;
		return this.f7(eg + f4[0]) || this.f7(eg + f4[1]) || this.f7(eg + f4[2]) || this.f7(eg + f4[3])
	}, this.yk = function(eg, player) {
		var f4 = this.f4;
		return this.aII(eg + f4[0], player) || this.aII(eg + f4[1], player) || this.aII(eg + f4[2], player) || this.aII(eg + f4[3], player)
	}, this.gb = function(eg) {
		return 208 <= aCp[eg + 3]
	}, this.ys = function(player, eg) {
		return this.gb(eg) && this.yv(player, eg)
	}, this.yv = function(player, eg) {
		return player === this.eu(eg)
	}, this.aIJ = function(eg) {
		return 208 <= aCp[eg + 3] && aCp[eg + 3] < 224
	}, this.jX = function(eg) {
		return 224 <= aCp[eg + 3] && aCp[eg + 3] < 248
	}, this.yl = function(eg) {
		for (var f4 = this.f4, aB = 3; 0 <= aB; aB--)
			if (this.iF(eg + f4[aB])) return !0;
		return !1
	}, this.ex = function(eg) {
		return this.gb(eg) || this.et(eg)
	}, this.iF = function(eg) {
		return 0 === aCp[eg + 3] && 2 === aCp[eg + 2]
	}, this.et = function(eg) {
		return 0 === aCp[eg + 3] && 1 === aCp[eg + 2]
	}, this.xb = function(eg) {
		return 0 === aCp[eg + 3] && 3 === aCp[eg + 2]
	}, this.f7 = function(eg) {
		return 0 === aCp[eg + 3] && 5 === aCp[eg + 2]
	}, this.aIH = function(eg) {
		return 0 === aCp[eg + 3] && 3 <= aCp[eg + 2]
	}, this.ek = function(eg) {
		return (aCp[eg] >> 1 << 8) + aCp[eg + 1]
	}, this.aIK = function(eg) {
		return 1 & aCp[eg]
	}, this.aII = function(eg, player) {
		return this.et(eg) || this.gb(eg) && player !== this.eu(eg)
	}, this.eu = function(eg) {
		return aCp[eg] % 4 * 128 + aCp[eg + 1] % 4 * 32 + aCp[eg + 2] % 4 * 8 + aCp[eg + 3] % 8
	}, this.yt = function(eg) {
		aIL(eg, 1)
	}, this.aIM = function(eg) {
		aIL(eg, 2)
	}, this.yX = function(eg, player) {
		aCp[eg] = aHl[player], aCp[eg + 1] = aHm[player], aCp[eg + 2] = aHn[player], aCp[eg + 3] = 208 + aHo[player], aIO(eg)
	}, this.gW = function(eg, player) {
		aCp[eg] = aHp[player], aCp[eg + 1] = aHq[player], aCp[eg + 2] = aHr[player], aCp[eg + 3] = 224 + aHo[player], aIO(eg)
	}, this.jY = function(eg, player) {
		aCp[eg] = aHs[player], aCp[eg + 1] = aHt[player], aCp[eg + 2] = aHu[player], aCp[eg + 3] = 248 + aHo[player], aIO(eg)
	}
}

function cs() {
	var aIP = 0,
		aIR = new Uint16Array(64);

	function w4(a6A) {
		aIP -= 2;
		for (var aB = a6A; aB < aIP; aB += 2) aIR[aB] = aIR[aB + 2], aIR[aB + 1] = aIR[aB + 3]
	}
	this.dd = function() {
		aIP = 0
	}, this.eV = function() {
		var aB, jV, ib;
		if (0 !== aIP)
			if (0 === ag.mv[aD.em]) aIP = 0;
			else if (0 === ad.g8(aD.em)) aIP = 0;
		else
			for (aB = aIP - 2; 0 <= aB; aB -= 2)(jV = aIR[aB]) < aD.ez && 0 === ag.mv[jV] ? w4(aB) : (ib = aIR[aB + 1], (jV >= aD.ez && bs.aIT(aD.em) || jV < aD.ez && bs.aIU(aD.em, jV)) && (b8.hR.hY(ib, jV), w4(aB)))
	}, this.hZ = function(jV, ib) {
		! function(jV, ib) {
			for (var aB = 0; aB < aIP; aB += 2)
				if (aIR[aB] === jV) return aIR[aB + 1] = Math.min(aIR[aB + 1] + ib, 1023), 1;
			return
		}(jV, ib) && 64 !== aIP && (aIR[aIP] = jV, aIR[aIP + 1] = ib, aIP += 2)
	}
}

function cU() {
	function aIb(player) {
		var ds;
		bA.gN.a4H(player) && (ds = ag.h3[player] - ag.a4M[player] + ad.aId(player), bd.gR(player, Math.abs(ds), ds < 0 ? 18 : 12)), ag.h3[player] = 0, ag.a4M[player] = 0
	}

	function aIk() {
		aX.show(!1, !1, !1, !0), aW.aBy(), bR.a0a.a1N()
	}

	function aIY(player, aIj) {
		for (var aB = aIj.length - 1; 0 <= aB; aB--) ad.aIm(aIj[aB], player)
	}

	function aIa(player) {
		var iu = ag.iu,
			iv = ag.iv,
			iw = ag.iw,
			ix = ag.ix,
			fD = bS.fD;
		if (ag.gp[player]) {
			ag.gp[player] = 0;
			for (var nL = iu[player], nM = iw[player], f9 = iv[player]; nL <= f9; f9--)
				for (var fB = ix[player]; nM <= fB; fB--) {
					var gZ = 4 * (fB * fD + f9);
					ac.ys(player, gZ) && ac.yt(gZ)
				}
		}
		iv[player] = ix[player] = 0, iu[player] = iw[player] = Math.max(fD, bS.fE)
	}
	this.dl = function(gZ) {
		var player, ds = ag.gp[gZ] + ag.yS[gZ];
		bN.y.kQ[gZ] ? ds && (aIY(player = gZ, ad.aIZ(player)), aIa(player), aF.gP(player), ad.clear(player), aIb(player), function(player) {
			ag.yS[player] = 0, ag.gT[player] = [], ag.gh[player] = [], ag.gi[player] = [], ag.fR[player] = []
		}(player)) : !ds && ag.gT[gZ].length || this.aIX(gZ)
	}, this.aIX = function(player) {
		! function(player) {
			bA.gN.jj(player) || (ag.a1R[player] = bi.a1h.aIi(), aD.a0r++);
			var aIj = ad.aIZ(player);
			0 === aIj.length ? bA.gN.a4E(player) && aIk() : (aIY(player, aIj), function(player, aIj) {
				var aIo = aIj[function(aIj) {
					var aB, eA = 0;
					for (aB = aIj.length - 1; 1 <= aB; aB--) ag.gp[aIj[aB]] > ag.gp[aIj[eA]] && (eA = aB);
					return eA
				}(aIj)];
				9 === aD.ke && (1 === bg.f0[player] ? ay.kE(8) && az.aIp(aIo) : aE.hk[player] && (aN.a7Y(765, 0), aN.a1D(280, L(131, [ag.a1S[aIo], ag.a1S[player]]), 765, aIo, bB.nm, bB.p7, -1, !0)));
				if (bA.gN.a4E(player)) aIk(), aN.a12(aIo, 1);
				else {
					for (var aB = aIj.length - 1; 0 <= aB; aB--)
						if (bA.gN.a4H(aIj[aB]) && (bd.mr[4 - bA.gN.jj(player)]++, bA.gN.a4E(aIj[aB]))) return aN.a12(player, 0);
					bA.gN.jj(player) || aN.a7I(0, player, aIo)
				}
			}(player, aIj))
		}(player), aIa(player), aIb(player),
			function(player) {
				ag.mv[player] = 0, ag.gT[player] = null, ag.gh[player] = null, ag.gi[player] = null, ag.fR[player] = null
			}(player), aF.gP(player), ad.clear(player), bN.aIg.aIh(player)
	}
}

function cx() {
	var input;

	function aIq(e) {
		(e = e.target.files) && 0 < e.length && b6.aIt(e[0])
	}

	function aIx(e) {
		var ea = new Image;
		ea.onload = aIy, ea.src = e.target.result
	}

	function aIy(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aJ0 = bj.eO.data[162].value,
			max = Math.min(bS.aJ1, aJ0),
			aJ0 = (max = a0.id || bJ.rG() ? Math.min(1400, aJ0) : max) / Math.max(i, j);
		if (aJ0 < 1 && (i = Math.floor(aJ0 * i + .125), j = Math.floor(aJ0 * j + .125)), max < i || max < j || i < 10 || j < 10) aJ0 = "Invalid Image Dimensions!", a0.wB ? a0.wB.showToast(aJ0) : alert(aJ0);
		else {
			for (var max = document.createElement("canvas"), aJ0 = (max.width = i, max.height = j, max.getContext("2d")), aJ3 = document.createElement("canvas"), aJ4 = (aJ3.width = e.width, aJ3.height = e.height, aJ3.getContext("2d")), e = (aJ4
					.drawImage(e, 0, 0), aJ4.getImageData(0, 0, aJ3.width, aJ3.height)), aJ4 = aJ0.createImageData(i, j), src = e.data, aJ7 = aJ4.data, a9n = aJ3.width / i, a9o = aJ3.height / j, fB = 0; fB < j; fB++)
				for (var f9 = 0; f9 < i; f9++) {
					var aJ8 = Math.floor(f9 * a9n),
						aJ8 = 4 * (Math.floor(fB * a9o) * aJ3.width + aJ8),
						aJB = 4 * (fB * i + f9);
					aJ7[aJB] = src[aJ8], aJ7[1 + aJB] = src[1 + aJ8], aJ7[2 + aJB] = src[2 + aJ8], aJ7[3 + aJB] = 255
				}
			aJ0.putImageData(aJ4, 0, 0), 20 === t.t5 && t.a5u().aIy(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aIq
	}, this.uV = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aIr = function() {
		input.click()
	}, this.aIt = function(aIu) {
		var g = aIu.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aIx, g.readAsDataURL(aIu))
	}
}

function cv() {
	this.aJC = null, this.dd = function() {
		10 !== aD.ke ? this.aJC = null : this.aJC = new Uint32Array(aD.ez)
	}, this.eV = function() {
		10 === aD.ke && this.lB()
	}, this.lB = function() {
		for (var gZ, target, aCB, aJC = this.aJC, a0d = al.kx, a4N = ag.h3, aB = al.ks - 1; 0 <= aB; aB--)(gZ = a0d[aB]) >= aD.kM || (target = Math.max(bL.dt(a4N[gZ], 4), 2048), aCB = Math.max(ae.aCC(gZ), 100), aJC[gZ] += bL.dt(aCB * target,
			1e4), aJC[gZ] > target && (aJC[gZ] = target))
	}, this.a4T = function(player, hk) {
		return hk > this.aJC[player] ? (hk = this.aJC[player], this.aJC[player] = 0) : this.aJC[player] -= hk, hk
	}
}

function dW() {
	function aJE(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aJM, g.readAsText(e))
	}

	function aJM(e) {
		var aJQ;
		aD.a0p || (e = JSON.parse(e.target.result), aJQ = aD.data = new a5K, aJR(e, aJQ, "mapType", 0, 2), aJR(e, aJQ, "mapProceduralIndex", 0, 255), aJR(e, aJQ, "mapRealisticIndex", 0, 255), aJR(e, aJQ, "mapSeed", 0, 16383), function(aJP, aJQ, ga,
				max) {
				aJP = aJP[ga];
				aJQ[ga] = aJX(aJP) ? aJP.slice(0, max) : aJQ[ga]
			}(e, aJQ, "mapName", 20), function(aJP, aJQ, ga) {
				var aIz;
				2 === aJQ.mapType && (!aJX(aJP = aJP[ga]) || aJP.length <= 20 ? aJQ.mapType = 0 : ((aIz = new Image).onload = function() {
					b9.aJY.aJZ(aIz, 1), aIz.onload = null, aIz = null
				}, aIz.src = aJP))
			}(e, aJQ, "canvas"), aJR(e, aJQ, "passableWater", 0, 1), aJR(e, aJQ, "passableMountains", 0, 1), aJR(e, aJQ, "playerCount", 1, 512), aJR(e, aJQ, "humanCount", 1, 1), aJR(e, aJQ, "selectedPlayer", 0, 0), aJR(e, aJQ, "gameMode", 0, 1),
			aJR(e, aJQ, "playerMode", 0, 0), aJR(e, aJQ, "battleRoyaleMode", 0, 0), aJR(e, aJQ, "numberTeams", 0, 8), aJR(e, aJQ, "isZombieMode", 0, 0), aJR(e, aJQ, "isContest", 0, 0), aJR(e, aJQ, "isReplay", 0, 0), aJU(e, aJQ, "elo", 16, 2,
				16383), aJR(e, aJQ, "colorsType", 0, 1), aJR(e, aJQ, "colorsPersonalized", 0, 1), aJU(e, aJQ, "colorsData", 32, 512, 262143), aJR(e, aJQ, "selectableColor", 0, 1), aJU(e, aJQ, "teamPlayerCount", 16, 9, 512), aJR(e, aJQ,
				"neutralBots", 0, 1), aJR(e, aJQ, "botDifficultyType", 0, 3), aJR(e, aJQ, "botDifficultyValue", 0, 15), aJU(e, aJQ, "botDifficultyTeam", 8, 9, 15), aJU(e, aJQ, "botDifficultyData", 8, 512, 15), aJR(e, aJQ, "spawningType", 0, 2),
			aJR(e, aJQ, "spawningSeed", 0, 16383), aJU(e, aJQ, "spawningData", 16, 1024, 4095), aJR(e, aJQ, "selectableSpawn", 0, 1), aJR(e, aJQ, "playerNamesType", 0, 2),
			function(aJP, aJQ, ga, size, max) {
				var a3T = aJP[ga];
				if (Array.isArray(a3T)) {
					for (var a3U = new Array(size), f2 = Math.min(a3T.length, size), aB = 0; aB < f2; aB++) a3U[aB] = aJX(a3T[aB]) ? a3T[aB].slice(0, max) : "";
					a3U.fill("", f2), aJQ[ga] = a3U
				}
			}(e, aJQ, "playerNamesData", 512, 20), aJR(e, aJQ, "selectableName", 0, 1), aJR(e, aJQ, "aIncomeType", 0, 2), aJR(e, aJQ, "aIncomeValue", 0, 255), aJU(e, aJQ, "aIncomeData", 8, 512, 255), aJR(e, aJQ, "tIncomeType", 0, 2), aJR(e, aJQ,
				"tIncomeValue", 0, 255), aJU(e, aJQ, "tIncomeData", 8, 512, 255), aJR(e, aJQ, "iIncomeType", 0, 2), aJR(e, aJQ, "iIncomeValue", 0, 255), aJU(e, aJQ, "iIncomeData", 8, 512, 255), aJR(e, aJQ, "sResourcesType", 0, 2), aJR(e, aJQ,
				"sResourcesValue", 0, 2047), aJU(e, aJQ, "sResourcesData", 16, 512, 2047), t.x(), t.y.aJO[0] = 0, t.u(19))
	}

	function aJR(aJP, aJQ, ga, min, max) {
		aJP = aJP[ga];
		aJQ[ga] = "number" == typeof aJP && min <= aJP && aJP <= max ? Math.floor(aJP) : aJQ[ga]
	}

	function aJX(qV) {
		return "string" == typeof qV
	}

	function aJU(aJP, aJQ, ga, aJa, size, max) {
		var a3T = aJP[ga];
		if (Array.isArray(a3T)) {
			for (var a3U = new(8 === aJa ? Uint8Array : 16 === aJa ? Uint16Array : Uint32Array)(size), f2 = Math.min(a3T.length, size), aB = 0; aB < f2; aB++) a3U[aB] = bL.i9(a3T[aB], 0, max);
			aJQ[ga] = a3U
		}
	}
	this.aJD = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aJE, input.click()
	}, this.aJF = function() {
		for (var aJI, aDQ, a5s = aD.data, keys = Object.keys(a5s), aJG = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a5s[key] instanceof Uint8Array || a5s[key] instanceof Uint16Array || a5s[key] instanceof Uint32Array ? aJG[key] = Array.from(a5s[key]) : aJG[key] = a5s[key]
		}
		aJG.canvas = 2 === aJG.mapType && aJG.canvas ? aJG.canvas.toDataURL() : null, aJI = aJG, aJI = JSON.stringify(aJI, null, 2), aJI = new Blob([aJI], {
			type: "application/json"
		}), (aDQ = document.createElement("a")).href = URL.createObjectURL(aJI), aDQ.download = "tt_scenario.json", aDQ.click()
	}
}

function cY() {
	var aJb, aJc, size, jV, hk, aJd;

	function aJe(player) {
		return player < aD.kM ? aJb * player : aJb * aD.kM + aJc * (player - aD.kM)
	}
	this.dd = function() {
		aJb = aD.kM < 16 ? 12 : 8, aJc = 4;
		var f2 = aJe(aD.ez);
		size = new Uint8Array(aD.ez), jV = new Uint16Array(f2), hk = new Uint32Array(f2), aJd = new Uint8Array(f2)
	}, this.qM = function(a8g, aJf) {
		var aJg = this.h4(a8g, aJf),
			aJf = (this.h2(a8g, aJf, 0), bA.gN.gQ(a8g, aJg));
		bd.gR(a8g, aJg - aJf, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aIm = function(player, aJf) {
		var aJj, aJf = function(player, aJf) {
			var aB, lH = aJe(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jV[lH + aB] === aJf) return aB;
			return size[player]
		}(player, aJf);
		aJf !== size[player] && (aJj = hk[aJe(player) + aJf], this.gS(player, aJf), this.eZ(player, aJj, aD.ez))
	}, this.jh = function(player, aJf) {
		for (var lH = aJe(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jV[lH + aB] === aJf) return !0;
		return !1
	}, this.k0 = function(player) {
		return player < aD.kM ? size[player] < aJb : size[player] < aJc
	}, this.g8 = function(player) {
		return size[player]
	}, this.gD = function(player, aB) {
		return jV[aJe(player) + aB]
	}, this.gE = function(player, aB) {
		return hk[aJe(player) + aB]
	}, this.h4 = function(player, aJf) {
		for (var lH = aJe(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jV[lH + aB] === aJf) return hk[lH + aB];
		return 0
	}, this.aId = function(player) {
		for (var lH = aJe(player), fT = 0, aB = size[player] - 1; 0 <= aB; aB--) fT += hk[lH + aB];
		return fT
	}, this.h2 = function(player, aJf, aJj) {
		for (var lH = aJe(player), aB = size[player] - 1; 0 <= aB; aB--) jV[lH + aB] === aJf && (hk[lH + aB] = aJj)
	}, this.gn = function(player, aB, aJj) {
		hk[aJe(player) + aB] = Math.max(aJj, 0)
	}, this.go = function(player, aB) {
		aJd[aJe(player) + aB] = 0
	}, this.gF = function(player, aB) {
		return aJd[aJe(player) + aB]
	}, this.eZ = function(player, aJj, aJf) {
		ao.j9.jy[player] = ao.j9.jy[aJf] = 8, bA.gN.a4H(aJf) && bd.mr[6 - bA.gN.jj(player)]++;
		for (var lH = aJe(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jV[lH + aB] === aJf) return hk[lH + aB] += aJj, void(hk[lH + aB] = hk[lH + aB] > aD.a4P ? aD.a4P : hk[lH + aB]);
		jV[lH + size[player]] = aJf, hk[lH + size[player]] = aJj, aJd[lH + size[player]] = 1, size[player]++, aJf === aD.em ? aN.a12(player, 5) : player < aD.kM && player === aD.em && af.a7K(aJf)
	}, this.gS = function(player, eA) {
		var fL, lH;
		if (0 !== size[player])
			for (lH = aJe(player), size[player]--, fL = eA; fL < size[player]; fL++) jV[lH + fL] = jV[lH + fL + 1], hk[lH + fL] = hk[lH + fL + 1], aJd[lH + fL] = aJd[lH + fL + 1]
	}, this.aIZ = function(player) {
		for (var fL, lH, aIj = [], aB = al.ks - 1; 0 <= aB; aB--)
			for (lH = aJe(al.kx[aB]), fL = size[al.kx[aB]] - 1; 0 <= fL; fL--)
				if (jV[lH + fL] === player) {
					aIj.push(al.kx[aB]);
					break
				} return aIj
	}
}

function cZ() {
	var aJk;

	function aJm(player) {
		var e9, k1;
		return bA.gN.jj(player) && player < aD.kM ? 0 : (e9 = aJk[bL.dt((aD.ez - 1) * ag.gp[player], aD.k6)], bf.kJ() < 1920 && (e9 = Math.max(bL.dt(100 * (13440 - 6 * bf.kJ()), 1920), e9)), k1 = ae.k2(player), ag.h3[player] > k1 && (e9 -= bL.dt(2 *
			e9 * (ag.h3[player] - k1), k1)), Math.min(Math.max(e9, 0), 700))
	}

	function aJy(nX) {
		for (var gp = ag.gp, kx = al.kx, aB = al.ks - 1; 0 <= aB; aB--) {
			var gZ = kx[aB];
			bA.gN.gQ(gZ, bL.dt(nX * gp[gZ], 32))
		}
	}

	function aJv() {
		var xU = aD.em;
		bO.fX[0] = ag.h3[xU] - ag.a4M[xU]
	}

	function aJx(eA) {
		var xU = aD.em,
			xU = ag.h3[xU] - ag.a4M[xU] - bO.fX[0];
		ae.aAm += xU, bd.mr[eA] += xU
	}
	this.aAm = 0, this.dj = function() {
		for (var f2 = aD.ez, aB = (aJk = new Uint16Array(f2), 0); aB < f2; aB++) aJk[aB] = 100 + aJl(bL.dt(25600 * aB, f2 - 4), 9)
	}, this.dd = function() {
		(this.aAm = 0) === aD.data.iIncomeType ? this.aCC = aJm : 1 === aD.data.iIncomeType ? this.aCC = function(player) {
			return bL.dt(aD.data.iIncomeValue * aJm(player), 64)
		} : this.aCC = function(player) {
			return bL.dt(aD.data.iIncomeData[player] * aJm(player), 64)
		}
	}, this.eV = function() {
		if (bf.kJ() % 10 == 9 && (ae.aAm = 0, function() {
				aJv();
				for (var kx = al.kx, h3 = ag.h3, aB = al.ks - 1; 0 <= aB; aB--) {
					var gZ = kx[aB],
						aJw = bL.dt(ae.aCC(gZ) * h3[gZ], 1e4);
					bA.gN.gQ(gZ, Math.max(aJw, 1))
				}
				aJx(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aJv(), 1 === aD.data.aIncomeType)
						for (var gp = ag.gp, kx = al.kx, nX = aD.data.aIncomeValue, aB = al.ks - 1; 0 <= aB; aB--) {
							var gZ = kx[aB];
							bA.gN.gQ(gZ, bL.dt(nX * gp[gZ], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gp = ag.gp, kx = al.kx, nX = aD.data.aIncomeData, aB = al.ks - 1; 0 <= aB; aB--) {
								var gZ = kx[aB];
								bA.gN.gQ(gZ, bL.dt(nX[gZ] * gp[gZ], 128))
							}
						}();
					aJx(18)
				}
			}(), bf.kJ() % 100 == 99)) {
			if (aJv(), 0 === aD.data.tIncomeType) aJy(32);
			else if (1 === aD.data.tIncomeType) aJy(aD.data.tIncomeValue);
			else
				for (var gp = ag.gp, kx = al.kx, nX = aD.data.tIncomeData, aB = al.ks - 1; 0 <= aB; aB--) {
					var gZ = kx[aB];
					bA.gN.gQ(gZ, bL.dt(nX[gZ] * gp[gZ], 32))
				}
			aJx(8)
		}
	}, this.k2 = function(player) {
		return Math.min(100 * ag.gp[player], aD.a5G)
	}, this.pL = function(player, pM) {
		bq.pi(player, pM, bO.fY[0], 0), bA.gN.gQ(pM, bO.fY[0]), bd.pj(player, pM), af.aJo(player, bO.fY[0] + bO.fY[1]), af.pk(pM, bO.fY[0]), bA.gN.mW(player)
	}, this.aJp = function() {
		for (var f2 = al.ks, a0d = al.kx, lH = 0, a4N = ag.h3, aB = 0; aB < f2; aB++) lH += a4N[a0d[aB]];
		return lH
	}, this.aJq = function(aJr) {
		for (var gZ, f2 = al.ks, a0d = al.kx, lH = 0, a4N = ag.h3, f0 = bg.f0, aB = 0; aB < f2; aB++) f0[gZ = a0d[aB]] === aJr && (lH += a4N[gZ]);
		return lH
	}
}

function cb() {
	var aK2, aK3, aK4, aK5, aK6, aK7, aK8, aK9, aKA, aKB, aKC, aKD, aKE, aKF, aKG, aKH, aKI, aKJ, aKL, aKM, aDJ, aKN, aKO, aKV, aKW, aKK = null,
		aKQ = 0,
		aKR = !1,
		aKS = new Float32Array(4),
		aKT = 0,
		aKU = !0,
		aBH = 400,
		aKX = 0;

	function qr() {
		aKA = Math.floor(+h.iB), aKB = Math.floor(.5 * aKA)
	}

	function aKY() {
		var aB, aKd;
		for (vS.font = bA.qo.sf(1, 100 * aKC), aKd = 80 / Math.floor(vS.measureText(bA.rn.a06(aD.a4P)).width), vS.font = bA.qo.sf(1, 100), aB = aD.ez - 1; 0 <= aB; aB--) aK9[aB] = 100 / Math.floor(vS.measureText(ag.a1S[aB]).width), aK8[aB] = Math
			.min(aKd, aK9[aB])
	}

	function aKe(aB) {
		return !aKX || (aB = ag.h3[aB]) < 1e6 ? 1 : aB < 1e7 ? aKS[0] : aKS[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aKc(i3) {
		aKJ = !1, aKI = 1, aKG = aKH = 0, aKU && (bA.qo.textAlign(i3, 1), bA.qo.textBaseline(i3, 1));
		for (var aKk, aKl, aB, aKm, fontSize, aKn, nL = ic / iC, nM = ie / iC, nY = (h.i + ic) / iC, nZ = (h.j + ie) / iC, aKo = 0 !== ag.mv[aD.em] && !bA.gN.jj(aD.em), fL = al.ks - 1; 0 <= fL; fL--) aB = al.kx[fL], (fontSize = Math.floor(aKF * iC *
			aKe(aB) * aK8[aB] * aK6[aB])) < aKE || aKA <= fontSize || aK4[aB] + aK6[aB] > nL && aK4[aB] < nY && aK5[aB] + aK7[aB] > nM && aK5[aB] < nZ && (aKk = Math.floor(h.i * (aK4[aB] + aK6[aB] / 2 - nL) / (nY - nL)), aKl = Math.floor(h.j * (
			aK5[aB] + aK7[aB] / 2 - nM) / (nZ - nM) - .1 * fontSize), aKm = ac.a9C[aB], i3.font = bA.qo.sf(1 === ag.a4D[aB] ? 4 : 1, fontSize), i3.fillStyle = aKp(fontSize, aKm % 2), aKX ? aKq(i3, aB, fontSize, aKk, aKl, aKm) : aKr(aB,
			fontSize, aKk, aKl, i3), aKJ = !0, 0 < aDJ[aB] ? function(aKk, aKl, fontSize, aB, i3) {
			0 === k7[aB] ? aj.s4.zx(aKM[aB]) ? (function(aKk, aKl, fontSize, player, pX, i3) {
				for (var y1 = aKl, i2 = (i3.globalAlpha = aKz(fontSize), aKe(player) * (aKX ? aKT : aK9[player])), y0 = aKk - .5 * fontSize / i2 - .9 * fontSize, fM = 0; fM < 2; fM++) i3.fillText(aj.s4.zp(pX), y0, y1), y0 = aKk + .5 *
					fontSize / i2 + .9 * fontSize;
				i3.globalAlpha = 1
			}(aKk, aKl, fontSize, aB, aKM[aB], i3), aKt(aKk, aKl, fontSize, 0, 0, i3)) : aj.s4.zz(aKM[aB]) ? (aL2(aKk, aKl, fontSize, aKM[aB], 0, i3), aKt(aKk, aKl, fontSize, 0, 1, i3)) : (aL2(aKk, aKl, fontSize, aKM[aB], 1, i3), aKt(aKk,
				aKl, fontSize, 1, 0, i3)) : aL2(aKk, aKl, fontSize, aKM[aB], 0, i3)
		}(aKk, aKl, fontSize, aB, i3) : 0 === k7[aB] && aKt(aKk, aKl, fontSize, 0, 0, i3), aKo && (0 < aDJ[aB + aD.ez] || 0 < aDJ[aB + 2 * aD.ez] || 0 < aDJ[aB + 3 * aD.ez] || 0 < aDJ[aB + 4 * aD.ez]) && function(aKk, aKl, fontSize, aB, i3) {
			var ea, gU = -1;
			for (ea = 4; 1 <= ea; ea--) 0 < aDJ[aB + ea * aD.ez] && gU++;
			for (ea = 1; ea < 5; ea++) 0 < aDJ[aB + ea * aD.ez] && (! function(aKk, aKl, fontSize, ea, aB, aKx, ds, i3) {
				var a3h;
				if (1 === ea) {
					aB = aKM[aB + aD.ez];
					if (!aj.s4.zy(aB)) return function(aKk, aKl, fontSize, pX, aKx, i3) {
						i3.globalAlpha = aKz(fontSize);
						aKk -= .534 * aKx * fontSize, aKx = aKl + 1.59 * fontSize;
						i3.font = bA.qo.sf(0, .785 * fontSize), i3.fillText(aj.s4.zp(pX), aKk, aKx), i3.globalAlpha = 1
					}(aKk, aKl, fontSize, aB, aKx, i3);
					a3h = aj.xT.zO[aB - 1024 + aj.s4.za]
				} else a3h = 2 === ea ? aL.a68()[4].canvas[+(ds < 255)] : (3 === ea ? aL.a68()[5] : aL.a68()[6]).canvas[0];
				aB = aj.xT.zP, ds = .8 * fontSize / aB, ea = aKk - .5 * ds * aB - .534 * aKx * fontSize, aKk = aKl + 1.4 * ds * aB;
				i3.setTransform(ds, 0, 0, ds, ea, aKk), i3.globalAlpha = aKz(fontSize), i3.drawImage(a3h, 0, 0), i3.globalAlpha = 1, i3.setTransform(1, 0, 0, 1, 0, 0)
			}(aKk, aKl, fontSize, ea, aB, gU, aDJ[aB + ea * aD.ez], i3), gU -= 2)
		}(aKk, aKl, fontSize, aB, i3), (aKn = aKC * fontSize) < aKE || (i3.font = bA.qo.sf(1, aKn), aKl += Math.floor(.78 * fontSize), aKX ? aKr(aB, aKn, aKk, aKl, i3) : aKq(i3, aB, aKn, aKk, aKl, aKm)))
	}

	function aKr(aB, fontSize, f9, fB, i3) {
		var ___id = aB;
		var showName = aB < aD.kM || !__fx.settings.hideBotNames;
		if (showName) i3.fillText(ag.a1S[aB], f9, fB), aB < aD.kM && 2 !== ag.a4D[aB] || (aB = fontSize / aK9[aB], i3.fillRect(f9 - .5 * aB, fB + bA.qo.zq * fontSize, aB, Math.max(1, .1 * fontSize)));
		aKX && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (i3.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			i3.fillText(__fx.utils.getDensity(___id), f9, showName ? fB + fontSize : fB)
		);
	}

	function aKq(i3, aB, fontSize, aKk, aKl, aKm) {
		var ___id = aB;
		aB = bA.rn.a06(ag.h3[aB]);
		aKm >> 1 & 1 ? (i3.lineWidth = .05 * fontSize, i3.strokeStyle = aKp(fontSize, aKm % 2), i3.strokeText(aB, aKk, aKl)) : (1 < aKm && (i3.lineWidth = .12 * fontSize, i3.strokeStyle = aKp(fontSize, aKm), i3.strokeText(aB, aKk, aKl)), i3.fillText(
			aB, aKk, aKl));
		aKX || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (i3.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), i3.fillText(__fx.utils.getDensity(___id), aKk, aKl + fontSize))
	}

	function aKt(aKk, aKl, fontSize, aKx, aKy, i3) {
		var a6d = .95 * fontSize / aKO,
			aKk = aKk - .5 * a6d * aKN + .8 * aKx * fontSize,
			aKx = aKl - 1.76 * a6d * aKO - (.35 - bA.qo.zq + .7) * aKy * fontSize;
		i3.setTransform(a6d, 0, 0, a6d, aKk, aKx), i3.globalAlpha = aKz(fontSize), i3.drawImage(ab.get(4), 0, 0), i3.globalAlpha = 1, i3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aL2(aKk, aKl, fontSize, pX, aKx, i3) {
		var hx, y0, a6d;
		i3.globalAlpha = aKz(fontSize), aj.s4.zy(pX) ? (hx = aj.xT.zP, i3.setTransform(a6d = 1.1 * fontSize / hx, 0, 0, a6d, y0 = aKk - .5 * a6d * hx - .8 * aKx * fontSize, a6d = aKl - 1.55 * a6d * hx), i3.drawImage(aj.xT.zO[pX - 1024 + aj.s4.za], 0,
			0), i3.setTransform(1, 0, 0, 1, 0, 0)) : (y0 = aKk - .8 * aKx * fontSize, a6d = aKl - (.35 - bA.qo.zq + 1) * fontSize, i3.fillText(aj.s4.zp(pX), y0, a6d)), i3.globalAlpha = 1
	}

	function aKp(fontSize, aKm) {
		return aKB <= fontSize && fontSize < aKA ? bg.aL4[aKm] + aKz(fontSize).toFixed(3) + ")" : bg.aL5[aKm]
	}

	function aKz(fontSize) {
		return aKB <= fontSize && fontSize < aKA ? 1 - (fontSize - aKB) / (aKA - aKB) : 1
	}

	function aLE(i2, i) {
		return 1 + Math.floor(aKD * i2 * i)
	}

	function aLB(aB) {
		for (var left = aK4[aB], fL = aK4[aB] - ag.iu[aB] - 1; 0 <= fL; fL--)
			if (!aLG(aB, --left, aK5[aB], aK7[aB])) {
				left++;
				break
			} var right = aK4[aB];
		for (fL = ag.iv[aB] - aK4[aB] - aK6[aB]; 0 <= fL; fL--)
			if (!aLG(aB, ++right + aK6[aB] - 1, aK5[aB], aK7[aB])) {
				right--;
				break
			} var f9 = Math.floor((left + right) / 2),
			top = aK5[aB];
		for (fL = aK5[aB] - ag.iw[aB] - 1; 0 <= fL; fL--)
			if (!aLH(aB, f9, --top, aK6[aB])) {
				top++;
				break
			} var bottom = aK5[aB];
		for (fL = ag.ix[aB] - aK5[aB] - aK7[aB]; 0 <= fL; fL--)
			if (!aLH(aB, f9, ++bottom + aK7[aB] - 1, aK6[aB])) {
				bottom--;
				break
			} var fB = Math.floor((top + bottom) / 2);
		aL8(aB, f9, fB, aK6[aB], aK7[aB]) && (aK4[aB] = f9, aK5[aB] = fB)
	}

	function aL8(player, f9, fB, i, j) {
		f5 = Math.floor(.2 * i);
		for (var f5, ea = f9 + i - 1; f9 <= ea; ea--)
			if (!aLG(player, ea, fB, j)) return;
		for (ea = fB + j - 1 - (f5 = (f5 = Math.floor(.25 * j)) < 1 ? 1 : f5); fB + f5 <= ea; ea--)
			if (!aLH(player, f9, ea, i)) return;
		return 1
	}

	function aLG(player, f9, fB, j) {
		return ac.ys(player, 4 * (fB * bS.fD + f9)) && ac.ys(player, 4 * ((fB + j - 1) * bS.fD + f9))
	}

	function aLH(player, f9, fB, i) {
		return ac.ys(player, 4 * (fB * bS.fD + f9)) && ac.ys(player, 4 * (fB * bS.fD + f9 + i - 1))
	}
	this.dd = function() {
		if (aKX = bj.eO.data[7].value || 8 === aD.ke, aBH = 0 === (aBH = bj.eO.data[11].value) ? 280 : 1 === aBH ? 187 : 112, aKJ = !1, aKF = .88, aKC = .5, aKD = 1.8, aKE = 12 - 3 * bj.eO.data[9].value, aK3 = aK2 = 0, aK4 = new Uint16Array(aD
				.ez), aK5 = new Uint16Array(aD.ez), aK6 = new Uint16Array(aD.ez), aK7 = new Uint16Array(aD.ez), aK8 = new Float32Array(aD.ez), aK9 = new Float32Array(aD.ez), aKM = new Uint16Array(2 * aD.ez), aDJ = new Uint8Array(5 * aD.ez), aKV =
			new Uint8Array(aD.ez), aKW = new Uint8Array(aD.ez), aKU || (aKK = aKK || document.createElement("canvas")), qr(), aKH = aKG = 0, aKI = 1, aKX) {
			var aB, aKd;
			for (aKY(), vS.font = bA.qo.sf(1, 100), aKd = 100 / Math.floor(vS.measureText("900 000").width), aB = aD.ez - 1; 0 <= aB; aB--) aK8[aB] = Math.min(aKd, 2 * aK9[aB]);
			aKT = aKd, aKS[0] = 100 / (aKd * Math.floor(vS.measureText("5 000 000").width)), aKS[1] = 100 / (aKd * Math.floor(vS.measureText("50 000 000").width)), aKS[2] = 100 / (aKd * Math.floor(vS.measureText("500 000 000").width)), aKS[3] =
				100 / (aKd * Math.floor(vS.measureText("1 000 000 000").width))
		} else aKY();
		! function() {
			var aB;
			for (aB = aD.ez - 1; 0 <= aB; aB--) ag.gp[aB] < 12 ? (aK4[aB] = ag.iu[aB] + 1, aK5[aB] = ag.iw[aB] + 1, aK6[aB] = 1, aK7[aB] = 1) : (aK4[aB] = ag.iu[aB], aK5[aB] = ag.iw[aB] + 1, aK6[aB] = 4, aK7[aB] = 2);
			if (aD.hP)
				for (aB = 0; aB < aD.kM; aB++) aK6[aB] = 0;
			aKN = ab.get(4).width, aKO = ab.get(4).height
		}()
	}, this.aJo = function(gZ, a5q) {
		a5q > 18 * ag.gp[gZ] ? (aKW[gZ] = 6, ac.a9C[gZ] = 2 + ac.a9C[gZ] % 2) : (aKV[gZ] = 4, (ac.a9C[gZ] < 2 || 3 < ac.a9C[gZ]) && (ac.a9C[gZ] = 6 + ac.a9C[gZ] % 2))
	}, this.pk = function(gZ, a5q) {
		a5q > 6 * ag.gp[gZ] ? (aKW[gZ] = 6, ac.a9C[gZ] = 4 + ac.a9C[gZ] % 2) : (aKV[gZ] = 4, (ac.a9C[gZ] < 4 || 5 < ac.a9C[gZ]) && (ac.a9C[gZ] = 8 + ac.a9C[gZ] % 2))
	}, this.resize = function() {
		qr(), aKU || aKc(aKL)
	}, this.a5C = function() {
		for (var aB = 0; aB < aD.kM; aB++) ag.iv[aB] - ag.iu[aB] != 3 || ag.ix[aB] - ag.iw[aB] != 3 ? (aK4[aB] = ag.iu[aB] + (ag.iv[aB] !== ag.iu[aB] ? 1 : 0), aK5[aB] = ag.iw[aB], aK6[aB] = 1, aK7[aB] = 1) : (aK4[aB] = ag.iu[aB], aK5[aB] = ag
			.iw[aB] + 1, aK6[aB] = 4, aK7[aB] = 2)
	}, this.qN = function(player, eA, aKf) {
		! function(player, eA, aKf) {
			player += eA * aD.ez;
			0 === eA ? aKM[player] === aKf && 0 < aDJ[player] ? aDJ[player] = 0 : (aKM[player] = aKf, aDJ[player] = aj.s4.zx(aKf) ? 255 : 64) : 1 === eA ? (aDJ[player] = 64, aKM[player] = aKf) : aDJ[player] = aKf
		}(player, eA, aKf), 2 === aD.a0p && this.mh(!0)
	}, this.vR = function() {
		aKU ? aKc(vS) : aKJ && (1 !== aKI ? (vS.imageSmoothingEnabled = !0, vS.setTransform(aKI, 0, 0, aKI, 0, 0), vS.drawImage(aKK, -aKG / aKI, -aKH / aKI), vS.setTransform(1, 0, 0, 1, 0, 0), vS.imageSmoothingEnabled = !1) : vS.drawImage(aKK, -
			aKG, -aKH))
	}, this.a9z = function(iL, iO) {
		aKG += iL, aKH += iO
	}, this.a2N = function(iL, iO) {
		af.a9z(iL, iO)
	}, this.zoom = function(a3G, lb, lc) {
		aKI *= a3G, aKG = (aKG + lb) * a3G - lb, aKH = (aKH + lc) * a3G - lc
	}, this.mh = function(bu) {
		return !aKU && !(!aKR && !bu && bf.eR < aKQ + (1 === aKI && 0 === aKG && 0 === aKH && (aD.a5f() || aD.hP || 2 === aD.a0p) ? 1e3 : aBH) || (aKR = !1, aKQ = bf.eR, aKc(aKL), 0))
	}, this.aKi = function(aB) {
		return aKe(aB) * aK8[aB]
	}, this.aKj = function(player) {
		return aK8[player]
	}, this.eV = function() {
		bf.kJ() % 10 == 9 && (aKR = aD.a5h() && !aD.a5f()), !aD.a5f() && 4 <= ++aK3 && function() {
			var aB, fL, fM;
			for (aK3 = 0, fM = 4; 1 <= fM; fM--)
				for (fL = al.ks - 1; 0 <= fL; fL--) aB = al.kx[fL] + fM * aD.ez, 0 < aDJ[aB] && aDJ[aB] < 255 && aDJ[aB]--;
			if (2 !== aD.a0p)
				for (fL = al.ks - 1; 0 <= fL; fL--) aB = al.kx[fL], 0 < aDJ[aB] && aDJ[aB] < 255 && aDJ[aB]--
		}();
		var aB, fL, f2 = Math.floor(.1 * al.ks);
		for (f2 = (f2 = f2 < 8 ? 8 : f2) > al.ks ? al.ks : f2, aB = aK2 + f2 - 1; aK2 <= aB; aB--) fL = aB % al.ks, ! function(aB) {
			var i2 = aKe(aB) * aK8[aB];
			0 < aK6[aB] && aL8(aB, aK4[aB], aK5[aB], aK6[aB], aK7[aB]) ? ! function(aB) {
				for (var f9, fB, i, j, eg = !1, fM = 0; fM < 8; fM++) {
					if (i = aK6[aB] + 2, j = aK7[aB] + 2, i > ag.iv[aB] - ag.iu[aB] + 1 || j > ag.ix[aB] - ag.iw[aB] + 1) return eg;
					if (f9 = aK4[aB] - 1, fB = aK5[aB] - 1, !aL8(aB, f9, fB, i, j)) return eg;
					aK4[aB] = f9, aK5[aB] = fB, aK6[aB] = i, aK7[aB] = j, eg = !0
				}
				return eg
			}(aB) && function(aB, i2) {
				for (var f9, fB, i, j, eg = !1, aDS = aK6[aB], nX = 1 + Math.floor(.02 * aDS), fM = 1; fM < 5; fM++) {
					if ((i = aDS + fM * nX) > ag.iv[aB] - ag.iu[aB] + 1) return eg;
					if ((j = aLE(i2, i)) > ag.ix[aB] - ag.iw[aB] + 1) return eg;
					f9 = ag.iu[aB] + Math.floor(Math.random() * (ag.iv[aB] - ag.iu[aB] + 2 - i)), fB = ag.iw[aB] + Math.floor(Math.random() * (ag.ix[aB] - ag.iw[aB] + 2 - j)), aL8(aB, f9, fB, i, j) && (aK4[aB] = f9, aK5[aB] = fB, aK6[
						aB] = i, aK7[aB] = j, eg = !0)
				}
				return eg
			}(aB, i2) && aLB(aB) : ! function(aB, i2) {
				var j, f9 = aK4[aB] + 1,
					fB = aK5[aB] + 1,
					i = aK6[aB] - 2;
				for (;;) {
					if (i < 1) {
						aK6[aB] = 0;
						break
					}
					if (j = aLE(i2, i), aL8(aB, f9, fB, i, j)) return aK4[aB] = f9, aK5[aB] = fB, aK6[aB] = i, aK7[aB] = j, 1;
					f9++, fB++, i -= 2
				}
				return
			}(aB, i2) ? function(aB, i2) {
				var f9, fB, i, j, fM, nd, jc = ag.iv[aB] - ag.iu[aB] + 1,
					aLF = Math.floor(.02 * jc);
				for (nd = -6 * (aLF = aLF < 1 ? 1 : aLF), fM = jc; nd <= fM; fM -= aLF)
					if (j = aLE(i2, i = 0 < fM ? fM : 1), f9 = ag.iu[aB] + Math.floor(Math.random() * (ag.iv[aB] - ag.iu[aB] + 2 - i)), fB = ag.iw[aB] + Math.floor(Math.random() * (ag.ix[aB] - ag.iw[aB] + 2 - j)), aL8(aB, f9, fB, i, j))
						return aK4[aB] = f9, aK5[aB] = fB, aK6[aB] = i, aK7[aB] = j
			}(aB, i2) : aLB(aB)
		}(al.kx[fL]);
		aK2 = (aK2 += f2) % al.ks
	}, this.mc = function() {
		var aB, gZ, zv, zw;
		if (bf.kJ() % 4 == 1)
			for (aB = al.ks - 1; 0 <= aB; aB--) gZ = al.kx[aB], ac.a9C[gZ] < 2 || ((zv = Math.max(aKV[gZ] - 1, 0)) === (zw = Math.max(aKW[gZ] - 1, 0)) ? 0 === zv && (ac.a9C[gZ] %= 2) : 0 === zw && ac.a9C[gZ] < 6 && (ac.a9C[gZ] += 4), aKV[gZ] =
				zv, aKW[gZ] = zw)
	}, this.a7K = function(player) {
		var aB = player + 2 * aD.ez,
			ds = aDJ[aB];
		return 0 < ds && (aN.a0x(50, player), aDJ[aB] = 0, 255 === ds)
	}, this.a6N = function(player) {
		return 255 === aDJ[player + 2 * aD.ez]
	}
}

function cd() {
	var aLI, aLJ, aLK;
	this.dd = function() {
		aLI =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aLJ =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aLK = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a7b = ["K ", " Y", "E ", " Z", " z", " s", "S "], aEK = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aLI.length - 1; 0 <= aB; aB--)
			for (var fL = a7b.length - 1; 0 <= fL; fL--) aLI[aB] = aLI[aB].replace(a7b[fL], aEK[fL]);
		if (__fx.settings.realisticNames) aLI = realisticNames;
	}, this.a5S = function() {
		var f2 = aD.kM,
			a1S = ag.a1S,
			a1X = ag.a1X,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < f2)
			for (var aB = 0; aB < f2; aB++) a1S[aB] = a1X[aB] = "Player " + ay.jd(1e3);
		else
			for (aB = 0; aB < f2; aB++) a1S[aB] = a1X[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.ke) {
			for (var e9 = ay.random(), aLQ = aLK, aLR = aLJ, hk = aE.hk, f2 = aLQ.length, lH = aD.data.teamPlayerCount[7], a1S = ag.a1S, a1X = ag.a1X, aB = lH - 1; aB >= aD.kM; aB--) a1S[aB] = a1X[aB] = aLQ[(aB + e9) % f2];
			for (f2 = aLR.length - 1, aB = lH; aB < aD.ez; aB++) a1S[aB] = a1X[aB] = aLR[hk[aB] ? f2 : aB % f2]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var f2 = aD.ez, a1S = ag.a1S, a1X = ag.a1X, playerNamesData = aD.data.playerNamesData, aB = aD.kM; aB < f2; aB++) a1S[aB] = a1X[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var a1S = ag.a1S, a1X = ag.a1X, aB = aD.kM; aB < aD.ez; aB++) a1S[aB] = a1X[aB] = "Bot " + ay.jd(1e3)
		} : function() {
			for (var aLS = aLI, f2 = aLS.length, e9 = ay.random(), a1S = ag.a1S, a1X = ag.a1X, aB = aD.kM; aB < aD.ez; aB++) a1S[aB] = a1X[aB] = aLS[(aB + e9) % f2]
		})()
	}
}

function cw() {
	this.aLT = [], this.aLU = [], this.dd = function() {
		this.aLT = [], this.aLU = []
	}, this.eV = function() {
		0 <= this.aLT.length && this.aLV(this.aLT), 0 <= this.aLU.length && this.aLV(this.aLU)
	}, this.aLV = function(g) {
		for (var fM = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eR--, g[aB].eR <= 0) {
				fM = aB;
				break
			} for (aB = fM; 0 <= aB; aB--) g.shift()
	}, this.a6G = function(id, a0d, aLW) {
		return this.fN(this.aLT, id, a0d, aLW)
	}, this.aLX = function(id, a0d, aLW) {
		return this.fN(this.aLU, id, a0d, aLW)
	}, this.fN = function(g, id, a0d, aLW) {
		return ! function(g, id, a0d) {
			var aB, ht;
			for (aB = a0d.length - 1; 0 <= aB; aB--)
				for (ht = g.length - 1; 0 <= ht; ht--)
					if (g[ht].player === a0d[aB] && id === g[ht].id) return 1;
			return
		}(g, id, a0d) && (aLW && function(g, id, a0d) {
			var aB;
			for (aB = a0d.length - 1; 0 <= aB; aB--) g.push({
				player: a0d[aB],
				id: id,
				eR: 384
			})
		}(g, id, a0d), !0)
	}
}

function cc() {
	this.a1X = new Array(aD.ez), this.a1S = new Array(aD.ez), this.a4D = new Uint8Array(aD.ez), this.mv = new Uint8Array(aD.ez), this.iu = new Uint16Array(aD.ez), this.iw = new Uint16Array(aD.ez), this.iv = new Uint16Array(aD.ez), this.ix =
		new Uint16Array(aD.ez), this.gp = new Uint32Array(aD.ez), this.yS = new Uint32Array(aD.ez), this.h3 = new Uint32Array(aD.ez), this.gT = null, this.gh = null, this.gi = null, this.fR = null, this.qD = new Uint16Array(aD.ez), this.jP =
		new Uint16Array(aD.ez), this.jQ = new Uint16Array(aD.ez), this.a1R = new Uint16Array(aD.ez), this.a1P = new Uint8Array(aD.ez), this.a4M = new Uint16Array(aD.ez), this.dd = function() {
			this.a1X.fill(""), this.a1S.fill(""), this.a4D.fill(0), this.mv.fill(0), this.iu.fill(0), this.iw.fill(0), this.iv.fill(0), this.ix.fill(0), this.gp.fill(0), this.yS.fill(0), this.h3.fill(0), this.gT = new Array(aD.ez), this.gh =
				new Array(aD.ez), this.gi = new Array(aD.ez), this.fR = new Array(aD.ez), this.qD.fill(0), this.jP.fill(0), this.jQ.fill(0), this.a1R.fill(0), this.a1P.fill(0), this.a4M.fill(0)
		}
}

function cu() {
	this.aDp = function(player) {
		aG.mu(player), aD.a0r++, ag.a4D[player] = 2, ag.a1R[player] = bi.a1h.aIi(), player === aD.em && (aX.show(!1, !1), aW.aBy(), bR.a0a.a1N()), af.a7K(player)
	}
}

function cV() {
	this.kx = null, this.ks = 0, this.a5W = function() {
		for (this.ks = 0, aB = aD.ez - 1; 0 <= aB; aB--) 0 !== ag.mv[aB] && this.ks++;
		this.kx = new Uint16Array(this.ks);
		for (var f2 = 0, aB = 0; aB < aD.ez; aB++) 0 !== ag.mv[aB] && (this.kx[f2++] = aB)
	}, this.mb = function() {
		for (var gp = ag.gp, yS = ag.yS, a1P = ag.a1P, kx = al.kx, aB = al.ks - 1; 0 <= aB; aB--) {
			var gZ = kx[aB],
				ds = gp[gZ],
				lH = yS[gZ];
			ds <= bL.dt(lH, 4) ? ak.dl(gZ) : lH <= ds ? 250 <= (yS[gZ] = ds) && (a1P[gZ] = 1) : yS[gZ] = lH - Math.max(1, bL.dt(lH - ds, 1e3))
		}
		this.aLb()
	}, this.aLb = function() {
		for (var mv = ag.mv, lG = this.kx, aCg = this.ks, aB = aCg - 1; 0 <= aB; aB--) 0 === mv[lG[aB]] && (lG[aB] = lG[--aCg]);
		this.ks = aCg
	}
}

function cW() {
	var aLc = new Uint16Array(aD.ez),
		aLd = 0;

	function aLh(a7Q, aLf) {
		var ea = bf.kJ();
		return 3213 <= ea ? 4 + bL.dt(100 * aLf, ae.k2(a7Q)) : (a7Q = 1 + bL.dt(aD.k6, 300), ea < 357 ? 2 + bL.dt(100 * aLf, a7Q) : ea < 714 ? 2 + bL.dt(100 * aLf, 4 * a7Q) : ea < 1071 ? 2 + bL.dt(100 * aLf, 10 * a7Q) : ea < 2142 ? 2 + bL.dt(100 *
			aLf, 30 * a7Q) : 2 + bL.dt(100 * aLf, 100 * a7Q))
	}

	function aLg(a7Q) {
		return aD.kg || 7 <= aD.ke || 4284 <= bf.kJ() || bA.gN.jj(a7Q)
	}
	this.dd = function() {
		aLc.fill(0), aLd = 15
	}, this.hf = function(pM) {
		var player = aD.em;
		return !!bA.gN.qF(player, pM) && !(!bA.gN.pf(player, bA.gN.ia(player, aR.hV()), pM) || (player = pM, pM = bO.fY[0], !aLg(player) && aLc[player] + aLh(player, pM) > aLd))
	}, this.eZ = function(a7Q, aLf) {
		if (!aLg(a7Q)) {
			aLf = aLh(a7Q, aLf);
			if (aLc[a7Q] + aLf > aLd) return !1;
			aLc[a7Q] += aLf
		}
		return !0
	}, this.eV = function() {
		bf.kJ() % 100 == 99 && (bf.kJ() < 1071 ? aLd += 4 : bf.kJ() < 2142 ? aLd += 6 : bf.kJ() < 3213 ? aLd += 8 : aLd += 10)
	}
}

function ce() {
	var aLi;
	this.kn = null, this.km = 0, this.dd = function() {
		aLi = [], 9 === aD.ke && this.aLj()
	}, this.aLj = function() {
		this.kn = [0, 0, 0, 0, 0, 0];
		for (var aLk = [256, 227, 170, 148, 100, this.km = 0, 0, 0], aLl = [0, 8, 24, 30, 46, 70, 256, 333], aLm = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kM, aB = 1; aB < aLk.length; aB++)
			if (j <= aLl[aB]) {
				this.km = aLk[aB - 1] - bL.dt((j - aLl[aB - 1]) * (aLk[aB - 1] - aLk[aB]), aLl[aB] - aLl[aB - 1]), this.kn[5] = aLm[aB - 1] - bL.dt((j - aLl[aB - 1]) * (aLm[aB - 1] - aLm[aB]), aLl[aB] - aLl[aB - 1]), this.kn[0] = aD.ez - j - this
					.km - this.kn[5];
				break
			} aD.ki = aD.ez - aD.kM, aD.data.numberTeams = (0 < aD.kM) + (0 < aD.ki), aD.data.playerCount = aD.xy = aD.kM + aD.ki, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kM + this.km, aD.ki - this.km]), aD.a5L.a5Q()
	}, this.aIp = function(player) {
		aLi.push({
			player: player,
			gU: 14 + ay.jd(20)
		})
	}, this.eV = function() {
		if (9 === aD.ke)
			for (var aB = aLi.length - 1; 0 <= aB; aB--) --aLi[aB].gU <= 0 && (af.qN(aLi[aB].player, 0, aj.s4.zd + aj.s4.zr), aLi.splice(aB))
	}
}

function dB() {
	function aM2() {
		return {
			fD: bS.fD,
			fE: bS.fE,
			xQ: bS.xQ,
			xM: bS.xM,
			xN: bS.xN,
			xR: bS.xR,
			ei: bS.ei,
			mapSeed: bS.mapSeed,
			xO: bS.xO
		}
	}

	function aLu(aB) {
		return 1 !== aB && bS.aEU(aB) && aB !== bS.aM4()
	}
	this.aLo = 24, this.aLp = 12, this.aJ1 = 4096, this.fD = 0, this.fE = 0, this.xQ = null, this.xM = null, this.xN = null, this.xR = null, this.ei = 0, this.mapSeed = 0, this.xO = !1, this.xP = new aLq, this.xG = new aLr, this.a7h = new aLs, this
		.dd = function() {
			this.xG.dd()
		}, this.a7 = function(map, aLt) {
			((map %= this.aLo) !== this.ei || aLu(this.ei) && aLt !== this.mapSeed) && (this.xO = !1, this.xP.aLv(), ay.a5R(map), this.ei = map, this.mapSeed = aLt, aLu(map) && (bS.xG.xH[map].aLw = aLt), this.aEU(this.ei) ? (map = bS.xG.xH[this.ei],
				this.fD = map.i, this.fE = map.j, ay.a5R(map.aLw), aq.a7([this.fD, this.fE, map.n0, map.mx]), aLy(), ap.aLz(), aq.aM0()) : aLx())
		}, this.aM1 = function(map, aLt) {
			var fk = aM2(),
				map = (this.a7(map, aLt), this.xP.aLv(), aM2());
			return aLt = fk, bS.fD = aLt.fD, bS.fE = aLt.fE, bS.xQ = aLt.xQ, bS.xM = aLt.xM, bS.xN = aLt.xN, bS.xR = aLt.xR, bS.ei = aLt.ei, bS.mapSeed = aLt.mapSeed, bS.xO = aLt.xO, map
		}, this.a5m = function(canvas) {
			canvas && this.xQ !== canvas && (this.fD = canvas.width, this.fE = canvas.height, this.xQ = canvas, this.xM = this.xQ.getContext("2d", {
				alpha: !1
			}), this.i0 = this.xM.getImageData(0, 0, this.fD, this.fE), this.xR = this.i0.data, this.ei = this.aM4(), this.mapSeed = 0, bS.xG.xH[this.ei].name = aD.data.mapName)
		}, this.eh = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aM4()
		}, this.aM5 = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aM6 = function(aB) {
			return 1 === aB
		}, this.aM4 = function() {
			return this.aLo
		}, this.aEU = function(aB) {
			return void 0 === this.xG.xH[aB].aM7
		}, this.a5l = function(qg) {
			return 0 === qg.mapType ? qg.mapProceduralIndex < 10 ? qg.mapProceduralIndex : 10 + qg.mapProceduralIndex : 1 === qg.mapType ? 10 <= qg.mapRealisticIndex ? 22 + qg.mapRealisticIndex - 10 : qg.mapRealisticIndex + 10 : void 0
		}, this.aEV = function(qg, aM8) {
			0 === qg.mapType ? qg.mapProceduralIndex = aM8 < 10 ? aM8 : aM8 - 10 : 1 === qg.mapType && (qg.mapRealisticIndex = aM8 - (22 <= aM8 ? 12 : 10))
		}
}

function aLq() {
	function aMH() {
		bS.xP.eV()
	}

	function aMN(gZ, aMM) {
		0 < aMM && (bS.xR[gZ] += aMM, bS.xR[gZ + 1] += aMM, bS.xR[gZ + 2] += aMM)
	}

	function iF(gZ) {
		return bS.xR[gZ + 2] > bS.xR[gZ] && bS.xR[gZ + 2] > bS.xR[gZ + 1]
	}
	this.aAB = -1, this.a1v = 0, this.aM9 = 0, this.aMA = 8, this.aMB = 32, this.aMC = 8, this.aMD = 32, this.aME = [0, 0], this.a9C = [0, 0, 0, 0], this.io = null, this.aMF = !0, this.aMG = !1, this.aLv = function() {
		-1 !== this.aAB && clearTimeout(this.aAB), this.aAB = -1, this.io = null, aq.aM0()
	}, this.dd = function() {
		7 === aa.a24() || this.aMG || (this.aMF = !0, this.a1v = 0, this.aM9 = 1, this.aME = [bS.xG.xH[bS.ei].xi[0], bS.xG.xH[bS.ei].xj[0]], this.a9C = [bS.xG.xH[bS.ei].aM7[3], bS.xG.xH[bS.ei].aM7[4], bS.xG.xH[bS.ei].aM7[5], bS.xG.xH[bS.ei].aM7[
			6]], this.aMA = bS.xG.xH[bS.ei].aM7[7], this.aMB = bS.xG.xH[bS.ei].aM7[8], this.aMC = bS.xG.xH[bS.ei].aM7[9], this.aMD = bS.xG.xH[bS.ei].aM7[10], this.aMF ? this.aAB = setTimeout(aMH, 16) : this.eV())
	}, this.eV = function() {
		if (8 === aa.a24() && aH.nD()) this.aAB = setTimeout(aMH, 16);
		else {
			if (0 === this.a1v) {
				var aLw = ay.aMI();
				if (ay.a5R(bS.xG.xH[bS.ei].aM7[2]), aq.a7([bS.fD, bS.fE, bS.xG.xH[bS.ei].aM7[0], bS.xG.xH[bS.ei].aM7[1]]), ay.a5R(aLw), this.io = aq.aMJ(), this.a1v++, this.aMF) return void(this.aAB = setTimeout(aMH, 16))
			}
			for (var gZ, eo, aLw = this.aMF ? 10 : 1e6, aLw = bS.fE - this.aM9 - 1 < aLw ? bS.fE - this.aM9 - 1 : aLw, yf = this.aM9 + aLw, fB = this.aM9; fB < yf; fB++)
				for (var f9 = 1; f9 < bS.fD - 1; f9++) iF(gZ = 4 * (eo = f9 + fB * bS.fD)) ? this.aMK(gZ, eo, 1) : (this.aMK(gZ, eo, 0), function(f9, fB, gZ) {
					return 1 < f9 && iF(gZ - 4) || f9 < bS.fD - 2 && iF(gZ + 4) || 1 < fB && iF(gZ - 4 * bS.fD) || fB < bS.fE - 2 && iF(gZ + 4 * bS.fD)
				}(f9, fB, gZ) && this.aML(f9, fB));
			this.aM9 = yf, this.aM9 >= bS.fE - 1 ? (bS.xM.putImageData(bS.xN, 0, 0, 1, 1, bS.fD - 2, bS.fE - 2), bf.dk = !0, this.aLv()) : this.aMF && (this.aAB = setTimeout(aMH, 16))
		}
	}, this.aMK = function(gZ, eo, eA) {
		aMN(gZ, Math.floor(this.aME[eA] + this.a9C[eA] * this.io[eo] / 1e4) - bS.xR[gZ])
	}, this.aMO = function(gZ, e9, aMP, eA, a9C) {
		aMN(gZ, Math.floor(this.aME[eA] + (1 - e9 / aMP) * a9C) - bS.xR[gZ])
	}, this.aML = function(lb, lc) {
		for (var gZ, e9, aMP, aA1 = lb - this.aMB, aMQ = lc - this.aMB, yg = lb + this.aMB, yf = lc + this.aMB, aA1 = aA1 < 1 ? 1 : aA1, yg = yg > bS.fD - 2 ? bS.fD - 2 : yg, yf = yf > bS.fE - 2 ? bS.fE - 2 : yf, fB = aMQ < 1 ? 1 : aMQ; fB <=
			yf; fB++)
			for (var f9 = aA1; f9 <= yg; f9++) iF(gZ = 4 * (f9 + fB * bS.fD)) ? (aMP = this.aMA + (this.aMB - this.aMA) * this.io[f9 + bS.fD * fB] / 1e4, Math.abs(lb - f9) > aMP || Math.abs(lc - fB) > aMP || aMP <= (e9 = Math.sqrt((lb - f9) * (
				lb - f9) + (lc - fB) * (lc - fB))) || this.aMO(gZ, e9, aMP, 1, this.a9C[3])) : (aMP = this.aMC + (this.aMD - this.aMC) * this.io[f9 + bS.fD * fB] / 1e4, Math.abs(lb - f9) > aMP || Math.abs(lc - fB) > aMP || aMP <= (e9 = Math
				.sqrt((lb - f9) * (lb - f9) + (lc - fB) * (lc - fB))) || this.aMO(gZ, e9, aMP, 0, this.a9C[2]))
	}
}

function aLy() {
	var vB = aMR(bS.ei);
	vB && aMS(vB[0], vB[1], vB[2], vB[3], vB[4])
}

function aMR(ei) {
	return 2 === ei ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === ei ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === ei ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === ei ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === ei ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aMS(aMT, aMU, aMV, aMW, aMX) {
	for (var f9, fB, aMZ, aMa, a3G, aMc, iK = aMT.length - 1, aMY = bS.fD + bS.fE, f2 = (aMY *= aMY, aMV.length), aMb = Array(f2), aB = f2 - 1; 0 <= aB; aB--) aMb[aB] = aMV[aB] * aMV[aB];
	var aMd = new Array(f2),
		aDG = new Array(f2),
		aMe = new Array(f2),
		fT = aq.aMJ();
	if (void 0 === aMX)
		for (aMX = new Array(f2), aB = f2 - 1; 0 <= aB; aB--) aMX[aB] = 0;
	for (aB = 1; aB < f2; aB++) aMd[aB] = aMb[aB] - aMb[aB - 1], aDG[aB] = aMW[aB] - aMW[aB - 1], aMe[aB] = aMX[aB] - aMX[aB - 1];
	for (f9 = bS.fD - 1; 0 <= f9; f9--)
		for (fB = bS.fE - 1; 0 <= fB; fB--) {
			for (aMZ = aMY, aB = iK; 0 <= aB; aB--) aMZ = (aMa = (f9 - aMT[aB]) * (f9 - aMT[aB]) + (fB - aMU[aB]) * (fB - aMU[aB])) < aMZ ? aMa : aMZ;
			for (a3G = aMW[f2 - 1], aMc = aMX[f2 - 1], aB = 1; aB < f2; aB++)
				if (aMZ < aMb[aB]) {
					a3G = aMW[aB - 1] + aI6((aMZ - aMb[aB - 1]) * aDG[aB], aMd[aB]), aMc = aMX[aB - 1] + aI6((aMZ - aMb[aB - 1]) * aMe[aB], aMd[aB]);
					break
				} aMf(bS.fD * fB + f9, a3G, aMc, fT)
		}
}

function aMf(eA, a3G, aMc, fT) {
	a3G < 500 ? fT[eA] = bL.dt(fT[eA] * a3G * 2, 1e3) : 500 < a3G && (fT[eA] += bL.dt(2 * (1e4 - fT[eA]) * (a3G - 500), 1e3)), fT[eA] += bL.dt(aMc * (10 * a3G - fT[eA]), 1e3)
}

function cg() {
	var aMg;

	function aMq(a3h, i2, f9, fB, globalAlpha) {
		bS.xM.save(), bS.xM.globalAlpha = globalAlpha, bS.xM.imageSmoothingEnabled = !1, bS.xM.scale(i2, i2), bS.xM.drawImage(a3h, Math.floor(f9 * (bS.fD / i2 - a3h.width)), Math.floor(fB * (bS.fE / i2 - a3h.height))), bS.xM.restore()
	}
	this.a7e = 0, this.a7f = 0, this.a7g = 0, this.a7h = 0, this.dd = function() {
		(aMg = new Array(bS.aLo))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e9: [220, 250, 255, 220],
			tT: [190, 220, 0, 0],
			fM: [170, 200, 0, 0]
		}, aMg[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e9: [25, 0, 100, 0, 25],
			tT: [25, 0, 0, 0, 25],
			fM: [25, 0, 0, 0, 25]
		}, aMg[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e9: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tT: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			fM: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aMg[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e9: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tT: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			fM: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aMg[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e9: [10, 10, 20, 10, 10, 170, 212],
			tT: [20, 20, 60, 100, 100, 110, 170],
			fM: [70, 70, 160, 30, 30, 60, 120]
		}, aMg[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e9: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tT: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			fM: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aMg[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e9: [10, 10, 60, 255, 255, 200, 200],
			tT: [10, 10, 60, 255, 255, 200, 200],
			fM: [80, 80, 255, 255, 255, 200, 200]
		}, aMg[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e9: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tT: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			fM: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aMg[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e9: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tT: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			fM: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aMg[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e9: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tT: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			fM: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aMg[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e9: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tT: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			fM: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aMg[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e9: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tT: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			fM: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aLz = function() {
		var aMp, aB, fL, fk, i0 = function() {
				var i0;
				return bS.xQ = document.createElement("canvas"), bS.xQ.width = bS.fD, bS.xQ.height = bS.fE, bS.xM = bS.xQ.getContext("2d", {
					alpha: !1
				}), i0 = bS.xM.getImageData(0, 0, bS.fD, bS.fE), bS.xR = i0.data, i0
			}(),
			i = aMg[bS.ei].i,
			e9 = aMg[bS.ei].e9,
			tT = aMg[bS.ei].tT,
			fM = aMg[bS.ei].fM,
			fT = aq.aMJ(),
			f2 = i.length - 2,
			aMk = new Array(1 + f2),
			aMl = new Array(1 + f2),
			aMm = new Array(1 + f2),
			aMn = new Array(1 + f2);
		for (fL = f2; 0 <= fL; fL--) aMk[fL] = i[fL + 1] - i[fL], aMl[fL] = e9[fL + 1] - e9[fL], aMm[fL] = tT[fL + 1] - tT[fL], aMn[fL] = fM[fL + 1] - fM[fL];
		for (aB = bS.fD * bS.fE - 1; 0 <= aB; aB--)
			for (fL = f2; 0 <= fL; fL--)
				if (fT[aB] >= i[fL]) {
					fk = fT[aB] - i[fL], bS.xR[4 * aB] = e9[fL] + aI6(aMl[fL] * fk, aMk[fL]), bS.xR[4 * aB + 1] = tT[fL] + aI6(aMm[fL] * fk, aMk[fL]), bS.xR[4 * aB + 2] = fM[fL] + aI6(aMn[fL] * fk, aMk[fL]), bS.xR[4 * aB + 3] = 255;
					break
				} bS.xM.putImageData(i0, 0, 0), bS.aM6(bS.ei) && ab.tX() && bS.aM6(bS.ei) && (i0 = ab.aHH("arena"), aMp = ab.aHH("territorial.io"), aMq(i0, 5, .5, .5, .1), aMq(aMp, 2, .5, .45, .1)), bS.xO = !0, bf.dk = !0
	}, this.a5U = function() {
		for (var gZ, f9, fB, aMr, hr, fm, a7f = 0, i = bS.fD, j = bS.fE, fk = i * j * 4, aMs = aCp, aMt = bS.xR, aB = i - 1; 0 <= aB; aB--) aMs[(gZ = aB << 2) + 2] = aMs[fk - gZ - 2] = 3;
		for (fk = 4 * i, aB = j - 1; 0 <= aB; aB--) aMs[(gZ = aB * fk) + 2] = aMs[gZ + fk - 2] = 3;
		for (aMr = i - 1, hr = j - 1, fB = 1; fB < hr; fB++)
			for (fk = fB * i, f9 = 1; f9 < aMr; f9++) fm = 1 - (aMt[(gZ = fk + f9 << 2) + 2] > aMt[gZ + 1] && aMt[gZ + 2] > aMt[gZ]), aMs[gZ + 2] = 6 - 5 * fm, a7f += fm;
		this.a7e = (i - 2) * (j - 2), this.a7h = 0, bS.eh(bS.ei) && (bS.a7h.aMu(), bS.a7h.aMv(4, 5)), this.a7f = aD.k6 = a7f - this.a7h, this.a7g = this.a7e - this.a7f - this.a7h, this.a7g && (bS.a7h.aMv(6, 2), bS.a7h.aMw())
	}
}

function aLx() {
	var qV;
	10 === bS.ei ? qV =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.ei ? qV =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.ei ? qV =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.ei ? qV =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.ei ? qV =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.ei ? qV =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.ei ? qV =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.ei ? qV =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.ei ? qV =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.ei ? qV =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.ei ? qV =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.ei && (qV =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new x9).xB(qV)
}

function aLr() {
	this.xH = null, this.aMx = null, this.aMy = null, this.dd = function() {
		var aMz = [120, 105, 92],
			cos = [12, 12, 60],
			aN0 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aN1 = [140, 130, 120],
			aN2 = [12, 12, 76],
			aN3 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aN4 = [130, 117, 106],
			aN5 = [12, 12, 68],
			aN6 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.xH = new Array(bS.aLo + 1), __fx.customLobby.setMapInfo(this.xH), this.xH[0] = {
			name: L(132),
			i: 230,
			j: 230,
			n0: 1e3,
			mx: 2e3,
			aLw: 173
		}, this.xH[1] = {
			name: L(133),
			i: 800,
			j: 800,
			n0: 100,
			mx: 50,
			aLw: 43
		}, this.xH[2] = {
			name: L(134),
			i: 512,
			j: 512,
			n0: 128,
			mx: 32,
			aLw: 0
		}, this.xH[3] = {
			name: L(135) + " 1",
			i: 960,
			j: 960,
			n0: 60,
			mx: 8,
			aLw: 0
		}, this.xH[4] = {
			name: L(136),
			i: 900,
			j: 900,
			n0: 100,
			mx: 5,
			aLw: 0
		}, this.xH[5] = {
			name: L(137),
			i: 1e3,
			j: 1e3,
			n0: 100,
			mx: 40,
			aLw: 0
		}, this.xH[6] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			n0: 100,
			mx: 20,
			aLw: 0
		}, this.xH[7] = {
			name: L(139),
			i: 1024,
			j: 1024,
			n0: 128,
			mx: 32,
			aLw: 0
		}, this.xH[8] = {
			name: L(140),
			i: 820,
			j: 820,
			n0: 200,
			mx: 100,
			aLw: 0
		}, this.xH[9] = {
			name: L(141),
			i: 1024,
			j: 1024,
			n0: 128,
			mx: 32,
			aLw: 0
		}, this.xH[10] = {
			name: L(142),
			xi: aN1,
			xj: aN2,
			aM7: aN3
		}, this.xH[11] = {
			name: L(143),
			xi: aN4,
			xj: aN5,
			aM7: aN6
		}, this.xH[12] = {
			name: L(144),
			xi: aN4,
			xj: aN5,
			aM7: aN6
		}, this.xH[13] = {
			name: L(145),
			xi: aMz,
			xj: cos,
			aM7: aN0
		}, this.xH[14] = {
			name: L(146),
			xi: aMz,
			xj: cos,
			aM7: aN0
		}, this.xH[15] = {
			name: L(147),
			xi: aN1,
			xj: aN2,
			aM7: aN3
		}, this.xH[16] = {
			name: L(148),
			xi: aN1,
			xj: aN2,
			aM7: aN3
		}, this.xH[17] = {
			name: L(149),
			xi: aMz,
			xj: cos,
			aM7: aN0
		}, this.xH[18] = {
			name: L(150),
			xi: aN4,
			xj: aN5,
			aM7: aN6
		}, this.xH[19] = {
			name: L(151),
			xi: aMz,
			xj: cos,
			aM7: aN0
		}, this.xH[20] = {
			name: L(152),
			i: 1024,
			j: 1024,
			n0: 128,
			mx: 32,
			aLw: 0
		}, this.xH[21] = {
			name: L(135) + " 2",
			i: 940,
			j: 940,
			n0: 80,
			mx: 8,
			aLw: 0
		}, this.xH[22] = {
			name: L(153),
			xi: aN4,
			xj: aN5,
			aM7: aN6
		}, this.xH[23] = {
			name: L(154),
			xi: aN1,
			xj: aN2,
			aM7: aN3
		}, this.xH[bS.aLo] = {
			name: ""
		}, this.aMx = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aMx[aB] = aB;
		for (this.aMx[10] = 20, this.aMx[11] = 21, this.aMy = new Uint8Array(bS.aLp), aB = 0; aB < 10; aB++) this.aMy[aB] = 10 + aB;
		this.aMy[10] = 22, this.aMy[11] = 23
	}
}

function aLs() {
	this.aMu = function() {
		for (var gZ, f9, fk, aMs = aCp, aMt = bS.xR, i = bS.fD, aMr = i - 1, hr = bS.fE - 1, gU = 0, fB = 1; fB < hr; fB++)
			for (fk = fB * i, f9 = 1; f9 < aMr; f9++) aMt[gZ = fk + f9 << 2] === aMt[1 + gZ] && aMt[gZ] === aMt[2 + gZ] && (gU++, aMs[2 + gZ] = 4);
		ap.a7h = gU
	}, this.aMv = function(aN7, aN8) {
		for (var aMs = aCp, i = bS.fD, aMr = i - 1, hr = bS.fE - 1, id = 0, fB = 1; fB < hr; fB++)
			for (var fk = fB * i, f9 = 1; f9 < aMr; f9++) {
				var eg = 2 + (fk + f9 << 2);
				aMs[eg] === aN7 && (! function(eg, id, aN7, aN8) {
					var f2 = 1,
						aMs = aCp,
						f4 = ac.f4,
						a3T = [eg],
						aNA = id >> 8 << 1,
						aNB = 255 & id;
					aMs[eg - 2] = aNA, aMs[eg - 1] = aNB, aMs[eg] = 5;
					for (; f2;) {
						for (var a3U = [], aB = 0; aB < f2; aB++)
							for (var er = a3T[aB], f5 = 3; 0 <= f5; f5--) {
								var f6 = er + f4[f5];
								aMs[f6] === aN7 && (aMs[f6 - 2] = aNA, aMs[f6 - 1] = aNB, aMs[f6] = aN8, a3U.push(f6))
							}
						f2 = (a3T = a3U).length
					}
				}(eg, id, aN7, aN8), id = (id + 1) % 32768)
			}
	}, this.aMw = function() {
		for (var aMs = aCp, i = bS.fD, aMr = i - 3, hr = bS.fE - 3, aND = 12 * i, fB = 3; fB < hr; fB++)
			for (var fk = fB * i, f9 = 3; f9 < aMr; f9++) {
				var eg = 2 + (fk + f9 << 2);
				2 !== aMs[eg] || 2 === aMs[eg - 12] && 2 === aMs[12 + eg] && 2 === aMs[eg - aND] && 2 === aMs[eg + aND] || (aMs[eg - 2] = 1 | aMs[eg - 2])
			}
	}
}

function a5T() {
	(z1 = void 0 === z1 ? document.createElement("canvas") : z1).width = bS.fD, z1.height = bS.fE, a5X = z1.getContext("2d", {
		alpha: !0
	}), a5Y = aCp = null, a5Y = a5X.getImageData(0, 0, bS.fD, bS.fE), aCp = a5Y.data, bA.qw.xS(aCp)
}

function ch() {
	var fT, i, j, max, aNE, mx, aNG, aNH, aNI, aNJ, aNK, aNL, aNM, aNN, aNF = 1e4;

	function aNU(aNT, n0, f2) {
		var aB;
		for (aNG[0] = aNT, aB = 1; aB < f2; aB++) aNG[aB] = aNG[aB - 1] + n0, n0 = aNG[aB] >= aNF ? (aNG[aB] = aNF - 1, -n0) : aNG[aB] < 0 ? (aNG[aB] = 0, -n0) : (n0 += 16384 <= ay.random() ? mx : -mx) < -aNE ? -aNE : aNE < n0 ? aNE : n0
	}

	function aNW(f9, fB, aNX, f2) {
		(aNX ? function(f9, fB, f2) {
			var aB;
			for (aB = 0; aB < f2; aB++) fT[fB * i + f9 + aB] = aNG[aB]
		} : function(f9, fB, f2) {
			var aB;
			for (aB = 0; aB < f2; aB++) fT[fB * i + f9 + aB * i] = aNG[aB]
		})(f9, fB, f2)
	}

	function aNa(value, f2) {
		var aB, aLF, eg, jb = value - aNG[f2 - 1];
		if (0 != jb) {
			for (aLF = 1 + bL.dt(Math.abs(jb), f2 - 1), aLF = jb < 0 ? -aLF : aLF, aNG[f2 - 1] = value, eg = (eg = f2 - 1 - bL.dt(Math.abs(jb), Math.abs(aLF))) < 1 ? 1 : f2 - 2 < eg ? f2 - 2 : eg, aB = f2 - 2; eg <= aB; aB--) aNG[aB] += jb - (f2 -
				1 - aB) * aLF;
			(jb < 0 ? function(f2) {
				var aB;
				for (aB = f2 - 2; 1 <= aB; aB--) aNG[aB] < 0 && (aNG[aB] = -aNG[aB] - 1)
			} : function(f2) {
				var aB;
				for (aB = f2 - 2; 1 <= aB; aB--) aNG[aB] >= aNF && (aNG[aB] = 2 * aNF - aNG[aB] - 1)
			})(f2)
		}
	}

	function aNd(a3T, a3U, f2) {
		for (var aB = 0; aB < f2; aB++) a3T[aB] = a3U[aB]
	}

	function aNe(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aNf(a6A, gap, hs) {
		aNH.push(a6A), aNI.push(gap), aNJ.push(hs)
	}
	this.a7 = function(a4h) {
		! function(a4h) {
			var aB;
			for (i = a4h[0], j = a4h[1], aNE = a4h[2], mx = a4h[3], fT = new Int16Array(i * j), max = j < i ? i : j, aNG = new Int16Array(max), aNH = [], aNI = [], aNJ = [], aNK = new Array(i), aNL = new Array(j), aB = i - 1; 0 <= aB; aB--) aNK[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aNL[aB] = !1;
			aNM = new Int16Array(i), aNN = new Int16Array(j)
		}(a4h),
		function(f2) {
			var aNT = ay.random() % aNF,
				n0 = ay.random() % (2 * aNE + 1) - aNE;
			aNU(aNT, n0, f2)
		}(max), aNd(aNN, aNG, j), aNW(0, 0, !0, i);
		var f9, fB, a4h = fT[0],
			f2 = max,
			n0 = ay.random() % (2 * aNE + 1) - aNE;
		for (aNU(a4h, n0, f2), aNd(aNM, aNG, i), aNW(0, 0, !1, j), aNe(aNM), aNe(aNN), aNU(fT[i - 1], aNM[i - 1], j), aNW(i - 1, 0, !1, j), aNU(fT[i * (j - 1)], aNN[j - 1], i), aNa(fT[i * j - 1], i), aNW(0, j - 1, !0, i), aNK[i - 1] = aNK[0] = !
			0, aNL[j - 1] = aNL[0] = !0, aNf(0, i, !0), aNf(0, j, !1), ! function() {
				var aNh, a6A;
				for (;;) {
					if (aNh = function() {
							var aB, aNh = aNH.length - 1;
							for (aB = aNh - 1; 0 <= aB; aB--) aNI[aB] > aNI[aNh] && (aNh = aB);
							return aNh
						}(), aNI[aNh] < 5) return;
					a6A = aNH[aNh] + bL.dt(aNI[aNh], 2), (aNJ[aNh] ? function(f9) {
						var f2, aNk, aB, aGd = 0,
							aNl = 0;
						for (; aNl < j - 1;) {
							for (aB = aGd + 1; aB < j; aB++)
								if (aNL[aB]) {
									aNl = aB;
									break
								} f2 = aNl - aGd + 1, aNU(fT[f9 + i * aGd], 0 === aGd ? aNM[f9] : aNG[aNk - 1] - aNG[aNk - 2], f2), aNa(fT[aNl * i + f9], f2), aNW(f9, aGd, !1, f2), aNk = f2, aGd = aNl
						}
						aNK[f9] = !0
					} : function(fB) {
						var f2, aNk, aB, aGd = 0,
							aNl = 0;
						for (; aNl < i - 1;) {
							for (aB = aGd + 1; aB < i; aB++)
								if (aNK[aB]) {
									aNl = aB;
									break
								} f2 = aNl - aGd + 1, aNU(fT[fB * i + aGd], 0 === aGd ? aNN[fB] : aNG[aNk - 1] - aNG[aNk - 2], f2), aNa(fT[fB * i + aNl], f2), aNW(aGd, fB, !0, f2), aNk = f2, aGd = aNl
						}
						aNL[fB] = !0
					})(a6A), aNf(a6A, aNH[aNh] + aNI[aNh] - a6A, aNJ[aNh]), aNI[aNh] = a6A - aNH[aNh] + 1
				}
			}(), f9 = 0; f9 < i; f9++)
			if (!aNK[f9])
				for (fB = 0; fB < j; fB++) aNL[fB] || ! function(f9, fB) {
					var value = fT[fB * i + f9 - 1] + fT[(fB - 1) * i + f9],
						a7u = 2;
					aNK[f9 + 1] && (a7u++, value += fT[fB * i + f9 + 1]);
					aNL[fB + 1] && (a7u++, value += fT[(fB + 1) * i + f9]);
					fT[fB * i + f9] = bL.dt(value, a7u)
				}(f9, fB)
	}, this.aMJ = function() {
		return fT
	}, this.aM0 = function() {
		fT = null
	}
}

function aI6(fL, fM) {
	return 0 <= fL ? bL.dt(fL, fM) : -bL.dt(-fL, fM)
}

function js(fT) {
	return fT * fT
}

function a78(fL, fM) {
	return fM < fL ? fL : fM
}

function aCK(fL, fM) {
	return fL < fM ? fL : fM
}

function a9W(fL, fT, fM) {
	return fT < fL ? fL : fM < fT ? fM : fT
}

function aNn(fT, f2) {
	for (var ea = bL.dt(fT + 1, 2), aB = 0; aB < f2; aB++) ea = bL.dt(ea + bL.dt(fT, ea), 2);
	return ea
}

function aJl(fT, f2) {
	return fT < 1 ? 0 : aNn(fT, f2)
}

function aNo(nL, nM, tC, a9F, nY, nZ, tD, tv) {
	return !(nL + tC <= nY || nM + a9F <= nZ || nY + tD <= nL || nZ + tv <= nM)
}

function aNp(nL, nM, tC, a9F, nY, nZ, tD, tv) {
	return nL <= nY && nM <= nZ && nY + tD <= nL + tC && nZ + tv <= nM + a9F
}

function xJ(fT) {
	return Math.floor(!!fT * (1 + Math.log2(fT + .5)))
}

function bx() {
	this.dt = function(fL, fM) {
		return Math.floor((fL + .5) / fM)
	}, this.aNq = function(fL, fM) {
		return Math.floor(fL * (fM + .5))
	}, this.sqrt = function(fT) {
		return ~~Math.sqrt(fT + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.i9 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aNr = function(fk, fm, fo) {
		return Math.max(Math.min(fk, fm), fo)
	}, this.aNs = function(aNt, aNu, f9, fB) {
		f9 -= aNt, aNt = fB - aNu, fB = 0;
		return 0 == f9 ? fB = 0 <= aNt ? Math.PI : 0 : (fB = Math.atan(aNt / f9), fB += 0 < f9 ? .5 * Math.PI : 1.5 * Math.PI), fB
	}, this.log2 = function(fT) {
		return Math.floor(!!fT * (1 + Math.log2(fT + .5)))
	}, this.log10 = function(fT) {
		return Math.floor(Math.log10(fT + .5))
	}, this.aNw = function(aNx, aNy, aNz, aO0, aO1) {
		return aNz - aO1 < aNx && aNx < aNz + aO1 && aO0 - aO1 < aNy && aNy < aO0 + aO1
	}, this.yG = function(a9w, a9y) {
		return a9w * a9w + a9y * a9y
	}
}

function dD() {
	this.y = new aO2, this.t5 = 0;
	var aO3 = new Array(32);

	function aO7() {
		for (var f2 = aO3.length, aB = 0; aB < f2; aB++) aO3[aB] = null
	}
	this.dd = function() {
		for (var aO4, aO5 = document.body.firstChild; aO5;) aO4 = aO5.nextSibling, !document.body.contains(aO5) || "DIV" !== aO5.tagName && "INPUT" !== aO5.tagName && "BUTTON" !== aO5.tagName || t.removeChild(document.body, aO5), aO5 = aO4
	}, this.u = function(eA, aO6, a4h) {
		void 0 === aO6 && (aO6 = this.t5), bf.dk = !0, 0 === eA && (0 === aa.a24() ? eA = 5 : a0.a1.setState(13)), this.s5(), this.t5 === eA && (aO6 = aO3[eA].aO6, aO3[eA] = null), this.t5 = eA;
		var lH = aO3[eA];
		if (!lH || 4 === eA || 7 === eA || 8 === eA || 9 === eA || 10 === eA || 11 === eA || 13 === eA || 15 === eA || 18 === eA || 20 <= eA && eA <= 28 || 32 === eA || 33 === eA) {
			if (0 === eA) return void aO7();
			1 === eA ? lH = new aO8 : 2 === eA ? lH = new aO9 : 3 === eA ? lH = new aOA : 4 === eA || 9 === eA || 10 === eA || 11 === eA || 13 === eA || 33 === eA ? lH = a4h : 5 === eA ? lH = new aOB : 6 === eA ? lH = new aOC : 7 === eA ? lH =
				new aOD(t.y.aOE) : 8 === eA ? lH = a4h : 12 === eA ? lH = new aOF : 14 === eA ? lH = new aOG : 15 === eA ? lH = new aOD(t.y.aOH) : 16 === eA ? lH = new aOI : 17 === eA ? lH = new aOJ : 18 === eA ? lH = new aOK : 19 === eA ? lH =
				new aOL : 20 === eA ? lH = new aOM : 21 === eA ? lH = new aON : 22 === eA ? lH = new aOO : 23 === eA ? lH = new aOP : 24 === eA ? lH = new aOQ : 25 === eA ? lH = new aOR : 26 === eA ? lH = new aOS : 27 === eA ? lH = new aOT :
				28 === eA ? lH = new aOU : 29 === eA ? lH = new aOV : 30 === eA ? lH = new aOW : 31 === eA && (lH = new aOX), lH.aO6 = aO6, aO3[eA] = lH
		}
		lH.show(a4h)
	}, this.a23 = function() {
		this.hn() && this.aOY(this.a5u().aO6)
	}, this.aOY = function(eA) {
		this.hn() && (aO3[eA] ? (this.s5(), bf.dk = !0, this.t5 = eA, aO3[eA].show()) : this.u(eA))
	}, this.s5 = function() {
		this.hn() && aO3[this.t5].s5()
	}, this.x = function() {
		this.hn() && (aO3[this.t5].s5(), aO7(), this.t5 = 0, a0.a1.setState(13))
	}, this.vR = function() {
		var lH;
		this.hn() && (lH = aO3[this.t5]).vR && lH.vR()
	}, this.resize = function() {
		if (!this.hn()) return !1;
		aO3[this.t5].resize()
	}, this.hE = function(f9, fB) {
		var lH;
		this.hn() && (lH = aO3[this.t5]).hE && lH.hE(f9, fB)
	}, this.a2N = function(f9, fB) {
		var lH;
		this.hn() && (lH = aO3[this.t5]).a2N && lH.a2N(f9, fB)
	}, this.a2l = function() {
		var lH;
		this.hn() && (lH = aO3[this.t5]).a2l && lH.a2l()
	}, this.a2Q = function(lb, lc, deltaY) {
		var lH;
		this.hn() && (lH = aO3[this.t5]).a2Q && lH.a2Q(lb, lc, deltaY)
	}, this.a2v = function(code) {
		var lH;
		return !!this.hn() && ((lH = aO3[this.t5]).a2v && lH.a2v(code), !0)
	}, this.eV = function() {
		var lH;
		this.hn() && (lH = aO3[this.t5]) && lH.eV && lH.eV()
	}, this.hn = function() {
		return 0 < this.t5
	}, this.a5u = function() {
		return aO3[this.t5]
	}, this.a5v = function(eA) {
		return aO3[eA]
	}, this.aOZ = function() {
		return aO3
	}, this.removeChild = function(uy, a4C) {
		try {
			uy.removeChild(a4C)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aOD(data) {
	var aOa, aOb;
	this.show = function() {
		data.aOc && bI.aPV("account", data.t3), aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aOb.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a23()
	}), new w(data.aOc ? "🔄 " + L(155) : L(156), function() {
		t.u(8, data.aOc ? t.a5u().aO6 : void 0, new t6(25, {
			t7: 0,
			t3: data.t3,
			t4: data.t4
		}))
	}, 0, 0, 1)]), aOb = new qh(aOa.vI, function() {
		var qj = [];
		qj.push(function() {
				var aOu = new qR,
					a1b = (aOu.qU(L(213)), data.aPB);
				a1b < 1 ? (aOu.qa(L(214)), 0 === data.aPC ? aOu.qW(L(215)) : 1 === data.aPC ? aOu.qW(L(216)) : 2 === data.aPC ? aOu.qW(L(217)) : 3 === data.aPC ? aOu.qW(L(218)) : 4 === data.aPC ? aOu.qW(L(219)) : 5 === data.aPC ? aOu.qW(
					L(220)) : 6 === data.aPC ? aOu.qW(L(221)) : aOu.qW(L(222))) : (aOu.qa(L(223)), a1b = a1b < 2 ? L(224) : a1b < 61 ? 2 === a1b ? L(225) : L(226, [a1b - 1]) : a1b < 84 ? 61 === a1b ? L(227) : L(228, [a1b - 60]) :
					a1b < 255 ? 84 === a1b ? L(229) : L(230, [a1b - 83]) : L(231), aOu.qW(a1b));
				{
					var qX, aOz;
					aOu.qf(new sT), data.aOc && (qX = aOu.qW(), aOu.qf(new sJ([new w(bj.vq.uN(data.t3) ? L(232) : L(233), function(e) {
						return bj.vq.w3(data.t3) ? (e.textContent = L(232), aOz(1)) : (e.textContent = L(233), aOz(0)), !0
					}).button])), aOz = function(fT) {
						qX.textContent = fT ? L(234) : ""
					}, bj.vq.uN(data.t3) && aOz(1), aOu.qf(new sT))
				}
				var rb = new rc({
					value: data.username,
					eA: -1
				});
				rb.e.readOnly = !0, aOu.qf(rb), aOu.qf(new sJ([new w(L(179), function(e) {
					return bA.qo.a4A(rb.e), bA.qo.v4(e), !0
				}).button])), data.aOc ? (aOu.qf(new sT), aOu.qa(b0.y.aOv("/wiki/reports"), "0.75em").style.marginBottom = "0.8em", aOu.qf(new sJ([new w(L(236), function(e) {
					return b0.aG3.aG4({
						t7: 3,
						t3: data.t3,
						value: 0
					}), bA.qo.v4(e), !0
				}, bB.oa).button])), aOu.qf(new sJ([new w(L(237), function(e) {
					return b0.aG3.aG4({
						t7: 3,
						t3: data.t3,
						value: 1
					}), bA.qo.v4(e), !0
				}, bB.oa).button])), aOu.qf(new sJ([new w("Cheater", function(e) {
					return b0.aG3.aG4({
						t7: 3,
						t3: data.t3,
						value: 2
					}), bA.qo.v4(e), !0
				}, bB.oa).button])), aOu.qf(new sJ([new w("False Reporter", function(e) {
					return b0.aG3.aG4({
						t7: 3,
						t3: data.t3,
						value: 3
					}), bA.qo.v4(e), !0
				}, bB.oa).button]))) : aOu.qW(L(235));
				return aOu
			}()),
			function(qj) {
				var aOu, qX, aD5, aPE, aP0, aP2, aP1;
				data.aOc || ((aOu = new qR).qU(L(238)), (qX = aOu.qW(data.aPD.length + " / 160")).style.textAlign = "center", aD5 = !0, (aPE = new va(0, 1, function(e) {
					e = e.target.value.length;
					qX.textContent = e + " / 160", 160 < e ? aD5 && (aD5 = !1, aP2.r8(1)) : aD5 || (aD5 = !0, aP2.r8(0))
				})).e.rows = 6, aPE.e.style.fontSize = "1em", aPE.vh(data.aPD), aOu.qf(aPE), 0 !== data.aPF ? (aP2 = new w(L(239), function() {
					if (!aD5) return !0;
					t.u(8, t.a5u().aO6, new t6(29, {
						t7: 1,
						qV: aPE.vi().substring(0, 160)
					}))
				}, 0, 0, 1), aOu.qf(new sJ([aP2.button])), aOu.qf(new sJ([new w(1 === data.aPF ? L(240) : L(241), function() {
					t.u(8, t.a5u().aO6, new t6(29, {
						t7: 0,
						qV: ""
					}))
				}, 0, 0, 1).button])), aOu.qW(1 === data.aPF ? L(242, [data.aPG - 1]) : L(243, [data.aPG - 1])), aOu.qW(L(244, [data.aPH]))) : (aP0 = new w(L(245), function() {
					if (!aPE.e.readOnly) return !0;
					t.u(8, t.a5u().aO6, new t6(29, {
						t7: 1,
						qV: aPE.vi().substring(0, 160)
					}))
				}, 1), aP2 = new w(L(176), function(e) {
					if (e.textContent === L(176)) {
						if (!aD5) return !0;
						e.textContent = L(177), aPE.e.readOnly = !0, aP0.r8(0), aP0.button.style.color = bB.ou
					} else aP1();
					return !0
				}), aOu.qf(new sJ([aP2.button])), aOu.qW(L(244, [data.aPH])), aP1 = function() {
					aP2.button.textContent = L(176), aPE.e.readOnly = !1, aP0.r8(1), aP0.button.style.color = bB.nv
				}, aOu.qf(new sJ([aP0.button]))), qj.push(aOu))
			}(qj),
			function(qj) {
				var aOu;
				data.aOc && 0 !== data.aPF && ((aOu = new qR).qU(L(246)), aOu.qY(data.aPD), aOu.qf(new sJ([new w(L(247, 0, "Report"), function(e) {
					return b0.y.eW(0) && (bA.qo.v4(e), b0.aG3.aPI({
						t7: 5,
						t3: data.t3
					})), !0
				}, 0, 0, 1).button])), qj.push(aOu))
			}(qj), qj.push(function() {
				var aOu = new qR,
					aOw = (aOu.qU(L(157)), aOu.qa(b0.y.aOv("/wiki/gold"), "0.75em").style.marginBottom = "0.8em", [L(158), L(159), L(160), L(161), L(162), L(163), L(164), L(165), L(166), L(167), L(168), L(169), L(170), L(171)]),
					e9 = data.aOx;
				return aOu.qa(L(172) + bA.rn.a4y(data.wg, .01, 2) + "<br>" + L(173) + (e9 + 1) + " / " + data.wf + "<br>" + L(174) + aOw[function(e9, wg) {
					if (e9 < 10) return 0;
					if (e9 < 30) return 1;
					if (e9 < 60) return 2;
					if (3e4 <= (wg = bL.dt(wg, 100))) return 3;
					if (12e3 <= wg) return 4;
					if (7e3 <= wg) return 5;
					if (3e3 <= wg) return 6;
					if (1e3 <= wg) return 7;
					if (500 <= wg) return 8;
					if (200 <= wg) return 9;
					if (70 <= wg) return 10;
					if (20 <= wg) return 11;
					if (3 <= wg) return 12;
					return 13
				}(e9, data.wg)]), aOu
			}()), data.aOc && qj.push(function() {
				var aOu = new qR,
					rb = (aOu.qU(L(175)), aOu.qa(b0.y.aOv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", new rc({
						value: bj.eO.data[147].value,
						eA: -1
					}, 1, void 0, function(e) {
						bj.sG.sH(147, aOz(e.target.value))
					})),
					aP0 = (aOu.qf(rb), new w(L(14), function(e) {
						return rb.e.readOnly && b0.y.eW(0) && (bA.qo.v4(e), aP1(), b0.aG3.aG4({
							t7: 0,
							t3: data.t3,
							value: parseInt(bj.eO.data[147].value, 10)
						})), !0
					}, 1)),
					aP2 = new w(L(176), function(e) {
						return e.textContent === L(176) ? (e.textContent = L(177), rb.e.readOnly = !0, aP0.r8(0), aP0.button.style.color = bB.ou, bj.sG.sH(147, rb.e.value), aOz(bj.eO.data[147].value)) : aP1(), !0
					}),
					qX = (aOu.qf(new sJ([aP2.button])), aOu.qW()),
					aOz = function(fT) {
						qX.innerHTML = t.y.aP3(fT, bj.eO.data[105].value, data.t3)
					},
					aP1 = function() {
						aP2.button.textContent = L(176), rb.e.readOnly = !1, aP0.r8(1), aP0.button.style.color = bB.nv
					};
				return aOz(bj.eO.data[147].value), aOu.qf(new sJ([aP0.button])), aOu
			}());
		qj.push(function() {
			var aOu = new qR,
				rb = (aOu.qU(L(178)), new rc({
					value: data.t3,
					eA: -1
				}));
			return rb.e.readOnly = !0, aOu.qf(rb), aOu.qf(new sJ([new w(L(179), function(e) {
				return bA.qo.a4A(rb.e), bA.qo.v4(e), !0
			}).button])), aOu
		}()), data.aOc || (qj.push(function() {
			var aOu = new qR,
				aP4 = (aOu.qU(L(180)), new rc(bj.eO.data[106]));
			return aP4.e.readOnly = !0, aP4.e.type = "password", aOu.qf(aP4), aOu.qf(new sJ([new w(L(181), function(e) {
				return e.textContent === L(181) ? (e.textContent = L(182), aP4.e.type = "text") : (e.textContent = L(181), aP4.e.type = "password"), !0
			}).button, new w(L(179), function(e) {
				return bA.qo.a4A(aP4.e), bA.qo.v4(e), !0
			}).button])), aOu.qf(new sJ([new w(L(183), function() {
				t.u(8, t.a5u().aO6, new t6(15))
			}).button])), aOu.qU(L(184), "0.8em"), aOu.qW(L(185)), aOu.qW(L(186)), aOu.qW(L(187)), aOu
		}()), qj.push(function() {
			var aOu = new qR;
			return aOu.qU(L(188)), aOu.qf(new sJ([new w(L(189), function() {
				t.u(6, t.a5u().aO6)
			}).button])), aOu.qf(new sJ([new w(L(190), function() {
				bj.sG.sH(105, ""), t.u(8, t.a5u().aO6, new t6(18))
			}).button])), aOu.qf(new sJ([new w(L(191) + bj.eO.data[105].value, function() {
				t.u(4, 0, new v(L(192), L(193), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a5v(7).aO6)
				})]))
			}, bB.oa).button])), aOu
		}()), qj.push(function() {
			function aP6(eA) {
				aP5[0].r8(0 === eA ? bB.o7 : bB.oI), aP5[1].r8(0 === eA ? bB.o7 : bB.oa), aP5[2].r8(eA === qd.qe.length - 1 || eA < 5 ? bB.o7 : bB.oa)
			}
			var qd, aP5, aOu = new qR;
			aOu.qU(L(198)), aOu.qW(L(199)), bj.y.wP();
			return aP5 = [new w(L(200), function() {
				var eA = Math.min(bj.eO.data[117].value, qd.qe.length - 1);
				eA < 1 || (eA = bj.y.wT(eA), bj.sG.sH(105, eA.t3), bj.sG.sH(106, eA.password), t.u(8, t.a5u().aO6, new t6(18)))
			}, bB.o7, 1), new w(L(196), function() {
				var eA = Math.min(bj.eO.data[117].value, qd.qe.length - 1);
				if (!(eA < 1)) {
					qd.qe[eA].remove(), qd.qe.splice(eA, 1);
					for (var aB = eA; aB < qd.qe.length; aB++) qd.qe[aB].name = "" + aB;
					bj.y.wS(eA), eA = bj.eO.data[117].value, qd.qe[eA].textContent = qd.qe[eA].textContent.replace("⚪", "🟢"), aP6(eA)
				}
			}, bB.o7, 1), new w(L(197), function() {
				var eA = Math.min(bj.eO.data[117].value, qd.qe.length - 1);
				if (eA !== qd.qe.length - 1) {
					for (var aB = qd.qe.length - 1; eA < aB; aB--) qd.qe[aB].remove(), qd.qe.splice(aB, 1), bj.y.wS(aB);
					aP6(eA)
				}
			}, bB.o7, 1)], qd = new v7(bj.eO.data[117], aP6), aP6(0), qd.qe[0].style.marginTop = "0.5em", aOu.qc(qd), aOu.qf(new sJ([aP5[0].button])), aOu.qf(new sJ([aP5[1].button])), aOu.qf(new sJ([aP5[2].button])), aOu
		}()));
		return qj.push(function() {
				var aOu = new qR,
					aOw = (aOu.qU(L(204)), [L(205), L(206), L(207), L(208)]),
					e9 = data.aP7;
				return aOu.qa(L(209) + (data.a1J / 100).toFixed(2) + "<br>" + L(173) + (e9 + 1) + " / " + data.wf + "<br>" + L(174) + aOw[e9 < 10 ? 0 : e9 < 50 ? 1 : e9 < 200 ? 2 : 3]), aOu
			}()), qj.push(function() {
				var aOu = new qR;
				return aOu.qU(L(201)), aOu.qa(L(202) + bA.rn.a4y(data.wc, .1, 1) + "<br>" + L(173) + (data.wd + 1) + " / " + data.wf + "<br>" + L(203) + data.we), aOu
			}()),
			function(qj) {
				var aOu = new qR,
					aPJ = data.wj,
					aPK = (aOu.qU(L(248)), aOu.qa(L(249, [data.wh.length ? "[" + data.wh + "]" : "-"])), aOu.qa(L(250, [bA.rn.a4y(aPJ, .01, 2)])), aOu.qa(L(251, [data.wl + 1 + " / " + data.wf])), data.wm),
					aPL = (aOu.qa(L(252, [bA.rn.a4y(aPK, .1, 1)])), data.wo);
				aOu.qa(L(253, [aPL])), aOu.qa(L(254, [bA.rn.a4y(aPK / Math.max(aPL, 1), .1, 2)])), aPJ = data.wk, aOu.qU(L(255), "0.8em"), aOu.qa(L(249, [data.wi.length ? "[" + data.wi + "]" : "-"])), aOu.qa(L(250, [bA.rn.a4y(aPJ, .01, 2)])),
					aPK = data.wn, aOu.qa(L(252, [bA.rn.a4y(aPK, .1, 1)])), aPL = data.wp, aOu.qa(L(253, [aPL])), aOu.qa(L(254, [bA.rn.a4y(aPK / Math.max(aPL, 1), .1, 2)])), aOu.qa(b0.y.aOv("/wiki/clans"), "0.75em").style.marginTop = "0.8em",
					qj.push(aOu)
			}(qj),
			function(qj) {
				var aOu = new qR;
				aOu.qU(L(256)), aOu.qa(L(209) + (data.aPM / 10).toFixed(1) + "<br>" + L(174) + (data.aPN.length ? L(257, [data.aPN]) : L(258))), data.aOc && aOu.qf(new sJ([new w(L(259), function(e) {
					return b0.y.eW(0) && (bA.qo.v4(e), b0.aG3.aPI({
						t7: 4,
						t3: data.t3
					})), !0
				}, 0, 0, 1).button]));
				aOu.qa(b0.y.aOv("/wiki/clans"), "0.75em").style.marginTop = "0.8em", qj.push(aOu)
			}(qj), qj.push(function() {
				var aOu = new qR;
				if (aOu.qU(L(210)), aOu.qa(L(211) + data.aP8 + "<br>" + L(173) + (data.aP9 + 1) + " / " + data.wf + "<br>" + L(174) + bo.eC(data.aP9)), data.aOc) {
					var rb = new rc({
							value: bj.eO.data[157].value,
							eA: -1
						}, 1, void 0, function(e) {
							bj.sG.sH(157, aOz(e.target.value))
						}),
						aP2 = (rb.e.style.marginTop = "0.6em", aOu.qf(rb), new w(L(176), function(e) {
							return e.textContent === L(176) ? (e.textContent = L(177), rb.e.readOnly = !0, aPA[0].r8(0), aPA[1].r8(0), aPA[0].button.style.color = bB.ou, aPA[1].button.style.color = bB.ou, aOz(bj.eO.data[157]
								.value)) : aP1(), !0
						})),
						aPA = (aOu.qf(new sJ([aP2.button])), [new w("−", function(e) {
							return rb.e.readOnly && b0.y.eW(0) && (bA.qo.v4(e), aP1(), b0.aG3.aG4({
								t7: 2,
								t3: data.t3,
								value: bL.i9(parseInt(bj.eO.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rb.e.readOnly && b0.y.eW(0) && (bA.qo.v4(e), aP1(), b0.aG3.aG4({
								t7: 1,
								t3: data.t3,
								value: bL.i9(parseInt(bj.eO.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qX = aOu.qW(),
						aOz = function(fT) {
							return fT = bA.gN.a4e(fT, 3, 32767), qX.textContent = L(212, [fT - 1, fT, bj.eO.data[105].value]), fT
						};
					aOu.qf(new sJ([aPA[0].button, aPA[1].button]));
					for (var aB = 0; aB < 2; aB++) aPA[aB].button.style.fontSize = "1.6em";
					var aP1 = function() {
						aP2.button.textContent = L(176), rb.e.readOnly = !1, aPA[0].r8(1), aPA[1].r8(1), aPA[0].button.style.color = bB.nv, aPA[1].button.style.color = bB.nv
					};
					aOz(bj.eO.data[157].value)
				}
				return aOu
			}()),
			function(qj) {
				var aOu, a49;
				data.aOc && !data.aPO || (0 === a0.id || data.aOc || data.aPO) && ((aOu = new qR).qU("Patreon"), !data.aOc && data.aPP ? aOu.qf(new sJ([new w(L(181), function() {
					b0.aG3.aPI({
						t7: 7,
						t3: data.t3
					}), data.aPP = 0, t.u(7)
				}).button])) : data.aPO ? (aOu.qa(L(260, [(data.aPQ / 100).toFixed(2)]) + "<br>" + L(261, [1 + data.aPR + " / " + data.aPS]) + "<br>" + L(262, [data.aPT ? L(263) : L(264)])), data.aOc || aOu.qf(new sJ([new w(L(265),
					function() {
						b0.aG3.aPI({
							t7: 8,
							t3: data.t3
						}), data.aPO = 0, bj.sG.sH(160, 0), t.u(7)
					}).button]))) : (aOu.qa(L(266), "0.75em").style.marginBottom = "0.3em", aOu.qa("  • " + L(267), "0.75em").style.whiteSpace = "pre", aOu.qa("  • " + L(268), "0.75em").style.whiteSpace = "pre", aOu.qa("  • " + L(
						269), "0.75em").style.whiteSpace = "pre", aOu.qa(L(270), "0.75em").style.marginTop = "1.0em", aOu.qa(L(271), "0.75em").style.marginTop = "1.0em", aOu.qa("<a href='" + bK.aPU +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a49 = "https://www.patreon.com/oauth2/authorize?state=" + data.t3 +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://" + b0.y.a1G() + "/", aOu.qa(L(272), "0.75em").style.marginTop = "1.0em", aOu.qa("<a href='" +
						a49 + "' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aOc || (aOu.qf(new sT), aOu.qf(new sJ([new w(L(182), function() {
						b0.aG3.aPI({
							t7: 6,
							t3: data.t3
						}), data.aPP = 1, t.u(7)
					}).button])), aOu.qa(L(273), "0.75em").style.marginTop = "0.75em")), qj.push(aOu))
			}(qj),
			function(qj) {
				var aOu, qd, aP5, eA, aP6;
				data.aOc || bj.vq.get().length && ((aOu = new qR).qU(L(194)), eA = 0, aP6 = function() {
					var aCk = bj.vq.get().length;
					aP5[0].r8(eA === aCk ? bB.o7 : bB.oI), aP5[1].r8(eA === aCk ? bB.o7 : bB.oa), aP5[2].r8(eA === aCk || aCk - 1 <= eA || eA < 5 ? bB.o7 : bB.oa)
				}, aP5 = [new w(L(195), function() {
					t.u(8, void 0, new t6(25, {
						t7: 0,
						t3: bj.vq.get()[eA],
						t4: 0
					}))
				}, bB.o7, 1), new w(L(196), function() {
					bj.vq.w6(eA), qd.qe[eA].remove(), qd.qe.splice(eA, 1);
					for (var aB = eA; aB < qd.qe.length; aB++) qd.qe[aB].name = "" + aB;
					bj.vq.get().length && (eA = Math.max(eA - 1, 0), qd.qe[eA].textContent = qd.qe[eA].textContent.replace("⚪", "🟢")), aP6()
				}, bB.o7, 1), new w(L(197), function() {
					for (var ht = qd.qe.length - 1; eA < ht; ht--) bj.vq.w6(ht), qd.qe[ht].remove(), qd.qe.splice(ht, 1);
					aP6()
				}, bB.o7, 1)], aP6(), (qd = new v7(bj.vq.w2(), function(aB) {
					eA = aB, aP6()
				})).qe[0].style.marginTop = "0.5em", aOu.qc(qd), aOu.qf(new sJ([aP5[0].button])), aOu.qf(new sJ([aP5[1].button])), aOu.qf(new sJ([aP5[2].button])), qj.push(aOu))
			}(qj), qj
	}())
}

function aOO() {
	var aPW, aPX, aPY, qj;

	function aPZ() {
		aPb(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		2 === aD.data.aIncomeType ? (bA.qw.a3X(aPY.vi(), aD.data.aIncomeData, 255), bA.qw.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(274), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), aOu.qc(new v7({
			vB: [L(276), L(277), L(278)],
			value: aD.data.aIncomeType
		}, function(eA) {
			aPb(), 2 !== eA || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ez)), aD.data.aIncomeType = eA, t.u(22)
		})), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu;
		1 === aD.data.aIncomeType && ((aOu = new qR).qU("Value"), aOu.qf(new rc({
			eA: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i9(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qj.push(aOu))
	}(qj), function(qj) {
		var aOu;
		2 === aD.data.aIncomeType && ((aOu = new qR).qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.aIncomeData, 4)), aOu.qf(aPY), qj.push(aOu))
	}(qj), qj))
}

function aOR() {
	var aPW, aPX, aPY;

	function aPZ() {
		aPb(), 3 !== aD.data.botDifficultyType || bA.qw.a3L(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		3 === aD.data.botDifficultyType && bA.qw.a3X(aPY.vi(), aD.data.botDifficultyData, aE.kX.length - 1)
	}

	function aPg(qj, eA) {
		var aOu = new qR,
			value = (aOu.qU(eA < 0 ? L(62) : L(61) + " " + bg.a1B[eA % 9]), 0 <= eA && (aOu.qa(L(281) + ": " + aD.data.teamPlayerCount[eA]).style.marginBottom = "1em"), eA < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[eA]);
		aOu.qc(new v7({
			vB: aE.kX,
			value: value
		}, function(ht) {
			eA < 0 ? aD.data.botDifficultyValue = ht : aD.data.botDifficultyTeam[eA] = ht
		})), qj.push(aOu)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(62), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, function() {
		var qj = [];
		if (function(qj) {
				var aOu = new qR,
					vB = (aOu.qU(L(275)), [L(277), L(279), L(280), L(278)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), vB.splice(2, 1));
				aOu.qc(new v7({
					vB: vB,
					value: value
				}, function(eA) {
					aPb(), aD.data.botDifficultyType = eA, 0 === aD.data.gameMode && 2 === eA && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ez)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qj.push(aOu)
			}(qj), 0 === aD.data.botDifficultyType) aPg(qj, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aPg(qj, aB);
		else 3 === aD.data.botDifficultyType && ! function(qj) {
			var aOu = new qR;
			aOu.qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.botDifficultyData, 8)), aOu.qf(aPY), qj.push(aOu)
		}(qj);
		return qj
	}())
}

function aPh(data) {
	var aOa, aPi, aPj, aPk, aPl, aPm, aPn, colors, aPo, aPp, aPq = 0,
		aPr = 0,
		aPs = !1,
		aPt = !1,
		aPu = [1, 5, 60, 240, 1440, 10080, 43200];

	function aQO(lb, lc) {
		! function(lb, lc) {
			return aPi < lb && lb < aPi + aPk && aPj < lc && lc < aPj + aPl
		}(aPq = lb, aPr = lc) ? (aPs && (bf.dk = !0), aPs = !1) : (aPs = !0, bf.dk = !0)
	}
	this.show = function() {
		aPt = bj.eO.data[127].value, aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize();
		var ea = h.k,
			vQ = aOa.vN(),
			aQ3 = ea * vQ.vP,
			ea = ea * vQ.s8;
		aPm = bA.qo.tU(.06), aPn = bA.qo.tU(.04), aPi = bA.qo.tU(.06), aPj = ea + aPm, aPk = h.i - aPi - aPn, aPl = aQ3 + ea - aPj - aPn
	}, this.vR = function() {
		aOa.vR(),
			function() {
				var aB, aQ0, gU, f9, fL, g = data.data,
					aQ7 = 1,
					aQ8 = .125,
					aQ9 = aPt ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aQ0 = g[aB].aQ0, gU = aQ0.length, aQ7 = Math.max(gU, aQ7), fL = 0; fL < gU; fL++) aQ8 = Math.max(aQ0[fL], aQ8), aQ9 = Math.min(aQ0[fL], aQ9);
				var nM = aPj + aPl,
					yp = aPl / (aQ8 - aQ9),
					yo = 1 / (aQ7 - 1);
				for (vS.lineWidth = bc.zn, aB = 0; aB < g.length; aB++) {
					for (aQ0 = g[aB].aQ0, gU = aQ0.length, f9 = aPi, vS.beginPath(), vS.moveTo(f9 + aPk, nM - yp * (aQ0[gU - 1] - aQ9)), fL = gU - 2; 0 <= fL; fL--) vS.lineTo(f9 + yo * fL * aPk, nM - yp * (aQ0[fL] - aQ9));
					vS.strokeStyle = colors[aB], vS.stroke()
				}(function(aQ9, aQ8, nM, yp) {
					vS.font = bA.qo.sf(0, .25 * aPi), bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 2), vS.fillStyle = colors[0];
					for (var f9 = .92 * aPi, aB = 0; aB < 3; aB++) {
						var fT = aQ9 + aB * (aQ8 - aQ9) / 2;
						vS.fillText((fT / 1e3).toFixed(3), f9, nM - yp * (fT - aQ9))
					}
				})(aQ9, aQ8, nM, yp),
				function(aQ7) {
					var fB = aPj + aPl + .15 * aPn;
					vS.font = bA.qo.sf(0, Math.min(.4 * aPn, .028 * h.i)), bA.qo.textBaseline(vS, 0), bA.qo.textAlign(vS, 2), vS.fillStyle = colors[0], vS.fillText(bA.a3C.a41(aPo), aPi + aPk, fB), bA.qo.textAlign(vS, 0), vS.fillText(bA.a3C.a41(
						new Date(aPp.getTime() - 6e4 * (aQ7 - 1) * aPu[data.aPz])), aPi, fB)
				}(aQ7),
				function(aQ7, aQ9, aQ8) {
					if (aPs && !(aQ7 < 2)) {
						for (var a9N, eA = (aPq - aPi) / aPk * (aQ7 - 1), aQC = Math.floor(eA), aQD = Math.floor(1 + eA), aQE = eA - aQC, aQF = 1e5, aQG = -1, aQH = -1, aQI = aQ8 - (aQ8 - aQ9) * (aPr - aPj) / aPl, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aDG, aQ0 = g[aB].aQ0;
							aQ0.length <= aQD || (aQ0 = aQ0[aQC] + aQE * (aQ0[aQD] - aQ0[aQC]), (aDG = Math.abs(aQI - aQ0)) < aQF && (aQF = aDG, aQG = aB, aQH = aQ0))
						} - 1 !== aQG && (aQ8 = aPj + aPl - (aQH - aQ9) / (aQ8 - aQ9) * aPl, vS.lineWidth = .5 * bc.zn, vS.strokeStyle = colors[aQG], vS.beginPath(), vS.moveTo(aPi, aQ8), vS.lineTo(aPq, aQ8), vS.lineTo(aPq, aPj + aPl), vS
						.stroke(), vS.beginPath(), vS.arc(aPq, aQ8, .1 * aPi, 0, 2 * Math.PI), vS.fillStyle = colors[aQG], vS.fill(), aQ9 = aPj + aPl + .15 * aPn, bA.qo.textAlign(vS, 1), a9N = aQ7 - 2 < eA ? (a9N = aPp.getTime() - 6e4 * aPu[
								data.aPz], new Date(a9N + (eA - (aQ7 - 2)) * (aPo.getTime() - a9N))) : new Date(aPp.getTime() - 6e4 * (aQ7 - eA - 1) * aPu[data.aPz]), aQ7 = bA.a3C.a41(a9N), eA = bA.qo.measureText(aQ7), a9N = bL.i9(aPq, aPi +
								.5 * eA, aPi + aPk - .5 * eA), vS.fillStyle = bA.color.nn(70, 50, 20), vS.fillRect(a9N - .52 * eA, aPj + aPl, 1.04 * eA, .55 * aPn), vS.fillStyle = colors[0], vS.fillText(aQ7, a9N, aQ9), vS.font = bA.qo.sf(0,
								.25 * aPi), bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 2), a9N = .92 * aPi, aQ7 = (aQH / 1e3).toFixed(3), eA = bA.qo.measureText(aQ7), aQ9 = a9N - 1.04 * eA, vS.fillStyle = bA.color.nn(70, 50, 20), vS
							.fillRect(aQ9, aQ8 - .1625 * aPi, aPi - aQ9, .275 * aPi), vS.fillStyle = colors[aQG], vS.fillText(aQ7, a9N, aQ8))
					}
				}(aQ7, aQ9, aQ8)
			}(), vS.lineWidth = bc.zn, vS.strokeStyle = bB.nv, vS.beginPath(), vS.moveTo(aPi, aPj), vS.lineTo(aPi, aPj + aPl), vS.lineTo(aPi + aPk, aPj + aPl), vS.stroke();
		var aB, fontSize = .5 * aPm,
			g = (vS.font = bA.qo.sf(0, fontSize), bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 0), data.data),
			f2 = g.length,
			fB = aPj - .5 * aPm,
			qV = "";
		for (aB = 0; aB < f2; aB++) qV += g[aB].name + "  ";
		qV = qV.trim();
		var aQL = bA.qo.measureText(qV),
			f9 = .5 * (h.i - aQL);
		for (aQL > h.i && (f9 = 0, vS.font = bA.qo.sf(0, h.i / aQL * fontSize)), aB = 0; aB < f2; aB++) vS.fillStyle = colors[aB], vS.fillText(g[aB].name, f9, fB), f9 += bA.qo.measureText(g[aB].name + "  ")
	}, this.hE = function(lb, lc) {
		aQO(lb, lc)
	}, this.a2N = function(lb, lc) {
		aQO(lb, lc)
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	};
	var aB, ds, a3z, ht, f5 = data.data,
		f2 = f5.length,
		max = 1;
	for (aB = 0; aB < f2; aB++) max = Math.max(max, f5[aB].aQ0.length);
	for (aB = 0; aB < f2; aB++)
		for (; f5[aB].aQ0.length < max;) f5[aB].aQ0.unshift(0);
	ds = new Date, a3z = 6e4 * ds.getTimezoneOffset(), ht = ds.getTime() - a3z, aPo = new Date(ht), 6 === data.aPz ? function(ds, a3z) {
		var aQ2 = ds.getUTCFullYear(),
			ds = ds.getUTCMonth() + 1;
		aPp = ds < 12 ? new Date(Date.UTC(aQ2, ds) - a3z) : new Date(Date.UTC(aQ2 + 1, 0) - a3z)
	}(ds, a3z) : (a3z = 6e4 * aPu[data.aPz], aPp = data.aPz <= 4 ? new Date(ht + a3z - ds.getTime() % a3z) : new Date(ht + a3z - (ds.getTime() + 2592e5) % a3z)), ht = bA.color, colors = [bB.nv, ht.nn(255, 0, 0), ht.nn(0, 200, 0), ht.nn(80, 80,
		255), ht.nn(255, 255, 0), ht.nn(255, 0, 255), ht.nn(0, 255, 255), ht.nn(255, 140, 0), ht.nn(128, 128, 128), ht.nn(0, 255, 140)], aOa = new vC(L(282) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aPz] + ", " + bA.a3C.a3y(aPo), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(283), function() {
			t.u(14)
		})
	], !1)
}

function aOG() {
	var aOa, aOb, qj;
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aOb.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(L(284), [new w("⬅️ " + L(37), function() {
		t.aOY(13)
	})]), aOb = new qh(aOa.vI, ((qj = []).push(function() {
		var aOu = new qR,
			aP2 = (aOu.qU(L(285)), aOu.qW(L(286)), new w(L(287), function() {
				bj.sG.sH(130, 0), t.y.aQT()
			}, 0, 0, 1)),
			rb = new rc(bj.eO.data[126], 0, function() {
				aP2.button.click()
			});
		return aOu.qf(rb), rb.e.placeholder = "a,b,c", rb.e.style.marginTop = "0.5em", aOu.qf(new sJ([aP2.button])), aOu
	}()), qj.push(function() {
		var aOu = new qR,
			aP2 = new w(L(287), function() {
				bj.sG.sH(130, 1), t.y.aQT()
			}, 0, 0, 1),
			aQU = new rc(bj.eO.data[129], 1, function() {
				aQU.e.focus()
			}),
			aQV = new rc(bj.eO.data[128], 1, function() {
				aP2.button.click()
			});
		return aOu.qU(L(288)), aOu.qf(aQV), aQV.e.style.marginBottom = "0.5em", aOu.qU(L(289)), aOu.qf(aQU), aOu.qf(new sJ([aP2.button])), aOu
	}()), qj.push(function() {
		var aOu = new qR;
		return aOu.qU(L(290)), bj.eO.data[125].vB = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aOu.qc(new v7(bj.eO.data[125])), aOu
	}()), qj.push(function() {
		var aOu = new qR;
		return aOu.qU(L(291)), aOu.qf(new sD(bj.eO.data[127], L(292))), aOu
	}()), qj))
}

function aOF() {
	var aOa, aQW, aPk, aQX, aQY, aQZ, colors = [0, 0, 0],
		aQa = -1;

	function aQd(aB) {
		var aQe = aQW.fB + aB * (bc.gap + aQZ);
		vS.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", vS.fillRect(aQX, aQe, colors[aB] * aQY, aQZ), vS.strokeStyle = bB.nv, vS.strokeRect(aQX, aQe, aQY,
			aQZ), vS.fillStyle = bB.nv, vS.font = bA.qo.sf(0, .32 * aQZ), bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 0), vS.fillText(L(0 === aB ? 295 : 1 === aB ? 296 : 297) + aQb(aB), aQX + bc.gap, aQe + .53 * aQZ)
	}

	function aQb(aB, aQf) {
		return aQf = aQf || 256, bL.i9(Math.floor(aQf * colors[aB]), 0, aQf - 1)
	}

	function a2r(lb, lc) {
		return !(lb < aQX || lc < aQW.fB || lb > aQW.f9 + aQW.i || lc > aQW.fB + aQW.j)
	}
	this.show = function() {
		var fT = bj.eO.data[121].value;
		colors[0] = (fT >> 12) / 63, colors[1] = (fT >> 6 & 63) / 63, colors[2] = (63 & fT) / 63, aOa.show(), this.resize()
	}, this.s5 = function() {
		bj.sG.sH(121, (aQb(0, 64) << 12) + (aQb(1, 64) << 6) + aQb(2, 64)), aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aQW.resize();
		var ea = h.k,
			vQ = aOa.vN(),
			aQc = (aQW.fB = Math.max(aQW.fB, ea * vQ.s8 + bc.gap), ea * vQ.vP - 2 * bc.gap);
		aQW.j = Math.min(aQW.j, aQc), aQW.i = 2 * aQW.j, aQW.fB = ea * vQ.s8 + .5 * (ea * vQ.vP - aQW.j), aQW.f9 = .5 * (h.i - aQW.i), aPk = .25 * aQW.i, aQX = aQW.f9 + aPk + bc.gap, aQY = aQW.i - aPk - bc.gap, aQZ = (aQW.j - 2 * bc.gap) / 3
	}, this.vR = function() {
		var e9, tT, fM;
		aOa.vR(), vS.lineWidth = bc.zn, e9 = aQb(0), tT = aQb(1), fM = aQb(2), vS.fillStyle = "rgb(" + e9 + "," + tT + "," + fM + ")", vS.fillRect(aQW.f9, aQW.fB, aPk, aQW.j), vS.strokeStyle = bB.nv, vS.strokeRect(aQW.f9, aQW.fB, aPk, aQW.j), vS
			.fillStyle = e9 + tT + fM < 306 && tT < 150 ? bB.nv : bB.nm, bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 1), vS.font = bA.qo.sf(0, .1 * aQW.j), vS.rotate(-Math.PI / 2), vS.fillText(L(294), -aQW.fB - .5 * aQW.j, aQW.f9 + .5 * aPk),
			vS.setTransform(1, 0, 0, 1, 0, 0), aQd(0), aQd(1), aQd(2)
	}, this.hE = function(lb, lc) {
		a2r(lb, lc) && (aQa = bL.i9(Math.floor((lc - aQW.fB) / (aQZ + .75 * bc.gap)), 0, 2), colors[aQa] = bL.i9((lb - aQX) / aQY, 0, 1), bf.dk = !0)
	}, this.a2N = function(lb) {
		-1 !== aQa && (colors[aQa] = bL.i9((lb - aQX) / aQY, 0, 1), bf.dk = !0)
	}, this.a2Q = function(lb, lc, deltaY) {
		a2r(lb, lc) && (lb = bL.i9(Math.floor((lc - aQW.fB) / (aQZ + .75 * bc.gap)), 0, 2), colors[lb] = bL.i9(colors[lb] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dk = !0)
	}, this.a2l = function() {
		0 <= aQa && (aQa = -1, bf.dk = !0)
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(L(293), [new w("⬅️ " + L(37), function() {
		t.y.aDB()
	})], !1), aQW = new rP([.5, .25], [.5, .5], 1)
}

function aON() {
	var aPW, aPX, aPY, rN;

	function aPZ() {
		aPb(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aOZ()[19] = null, t.a23()
	}

	function aQg() {
		aPb(), t.u(21)
	}

	function aPb() {
		1 === aD.data.gameMode ? aD.a5L.a5Q() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.qw.a3X(aPY.vi(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, rN = [new w("⬅️ " + L(37), aPZ)], 1 === aD.data.gameMode && rN.push(new w(L(298), aQg, 1, 1)), aPW = new vC(L(299), rN), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), 0 === aD.data.gameMode && (aOu.qc(new v7({
			vB: [L(300), L(278)],
			value: aD.data.colorsType
		}, function(eA) {
			aPb(), aD.data.colorsType = eA, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ez || (aD.data.colorsData = new Uint32Array(aD.ez)), t.u(21)
		})), aOu.qf(new sT));
		aOu.qf(new sD({
			value: aD.data.selectableColor
		}, L(301), function(value) {
			aD.data.selectableColor = value
		})), qj.push(aOu)
	}(rN = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qj) {
		var aOu = new qR;
		aOu.qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.colorsData, 1)), aOu.qf(aPY), qj.push(aOu)
	}(rN) : (aD.a5L.a5Q(), rN.push(function() {
		var aOu = new qR;
		aOu.qU(L(281));
		for (var aB = 0; aB < bg.a1B.length; aB++) {
			var ht = (aB + 1) % bg.a1B.length,
				e = aOu.qa((0 == ht ? "" : "Team ") + bg.a1B[ht]);
			aB && (e.style.marginTop = "0.5em"), aOu.qf(new rc({
				eA: -1,
				value: aD.data.teamPlayerCount[ht]
			}, 1, 0, function(e) {
				aPW.vJ[1].r8(0);
				var playerCount = bL.i9(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aQi] = playerCount
			})).e.aQi = ht
		}
		return aOu
	}())), rN))
}

function t6(id, a4h, aQj) {
	var aOa, aQk;

	function aQp() {
		aQk.qk.innerHTML += "<br>" + L(304)
	}

	function aQz() {
		var fM = 1;
		t.u(4, 1, new v(L(305), L(306), !1, [new w("🔄 Reload", function() {
			fM && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), fM = 0
		}, bB.oI)]))
	}

	function aQo() {
		bD.a7(90), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bD.a8(30, Math.floor(bL.pow(30) * Math.random())), bH.dd(bD.aC), bj.sG.sH(110, bF.t8.t9(bF.t8.tA(15))), b0.aG3.aR1()
	}
	this.aQl = !0, this.aQm = id, this.show = function() {
		aOa.show(), this.resize(), 15 === id ? (b0.y.aQn(id) ? aQo : aQp)() : 16 === id ? b0.y.aQn(id) ? b0.eX.eY(2) : aQp() : 17 === id ? b0.y.aQn(id) ? b0.eX.eY(3) : aQp() : 18 === id ? (b0.y.close(0, 3253), b0.y.aGz(0, id, 0), aQp()) : 21 ===
			id ? b0.y.aQn(id) ? b0.aQq.aQr(a4h.tO, a4h.tP, a4h.tQ) : aQp() : 22 === id ? b0.y.aQn(id) ? b0.aQq.aQs(a4h.tO, a4h.aQt, a4h.aQu) : aQp() : 23 === id ? b0.y.aQn(id) ? b0.aQq.aQv(a4h.aPz, a4h.a1Y) : aQp() : 24 === id ? b0.y.aQn(id) ? b0
			.aQq.aQw(a4h.aPz, a4h.tP, a4h.tQ) : aQp() : 25 === id ? b0.y.aQn(id) ? b0.aG3.aPI(a4h) : aQp() : 28 === id ? b0.y.aQn(id) ? b0.aQq.aQx(a4h.tO, a4h.aQt, a4h.aQu) : aQp() : 29 === id ? b0.y.aQn(id) ? b0.aG3.aQy(a4h) : aQp() : 30 ===
			id && (b0.y.aQn(id) ? b7.aD6() || aQz() : aQp())
	}, this.aR0 = function() {
		15 === id ? aQo() : 16 === id ? b0.eX.eY(2) : 17 === id ? b0.eX.eY(3) : 18 === id ? t.u(8, this.aO6, new t6(16)) : 21 === id ? b0.aQq.aQr(a4h.tO, a4h.tP, a4h.tQ) : 22 === id ? b0.aQq.aQs(a4h.tO, a4h.aQt, a4h.aQu) : 23 === id ? b0.aQq.aQv(
			a4h.aPz, a4h.a1Y) : 24 === id ? b0.aQq.aQw(a4h.aPz, a4h.tP, a4h.tQ) : 25 === id ? b0.aG3.aPI(a4h) : 28 === id ? b0.aQq.aQx(a4h.tO, a4h.aQt, a4h.aQu) : 29 === id ? b0.aG3.aQy(a4h) : 30 === id ? b7.aD6() || aQz() : 1e3 === id && (
			this.aQm = id = 25, b0.aG3.aPI(a4h))
	}, this.aDA = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aO6) : 17 === code ? (b0.y.close(0, 3252), bj.y.wS(0), bj.eO.data[117].vB && 0 < bj.eO.data[117].vB.length ? (bu = bj.y.wT(0), bj.sG.sH(105, bu.t3), bj.sG.sH(106, bu
			.password), t.u(8, this.aO6, new t6(16))) : (bj.sG.sH(105, ""), t.y.aDB())) : 21 === code ? t.u(10, this.aO6, new aBe(data)) : 23 === code ? t.u(13, this.aO6, new aPh({
			data: data,
			aPz: a4h.aPz
		})) : 25 === code ? (t.y.aOH.t3 = a4h.t3, bj.vq.mi(a4h.t3), t.u(15, this.aO6)) : 30 === code && (data ? t.u(1) : aQz()))
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aQk.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(L(302), [new w("⬅️ " + L(37), function() {
		aQj ? t.u(29) : t.y.aDB()
	})]), aQk = new sI(aOa.vI, L(303))
}

function aOL() {
	var aPW, aPX, qj;

	function aR4() {
		var gU;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a5L.a5Q()), gU = bA.qw.a3R(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gU) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aPZ() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aR6(), aD.data.canvas = null, t.u(5, 5)
	}

	function aR6() {
		b9.q8.dd(), bj.sG.sH(156, b9.a5b.a0H())
	}

	function aR2() {
		aD.data.isReplay = 0, aR6(), aD.a5L.a5n(), aa.aHA(), aD.a5L.a5k(), aD.data.canvas = 2 === aD.data.mapType ? bS.xQ : null, aD.a5P(), aD.a5N = 1
	}

	function aRI() {
		aR4();
		for (var g = [aR9(), aRA(), aRB()], aB = 3; aB < 6; aB++) t.removeChild(aPX.qk, aPX.ql[aB].qT), aPX.ql[aB] = g[aB - 3], aPX.qk.appendChild(aPX.ql[aB].qT);
		aPX.resize()
	}

	function aR9() {
		var aRJ, aOu = new qR;
		return aOu.qU(L(299)), aRJ = 0 === aD.data.gameMode ? [L(300), L(278)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aOu.qa(aRJ), aOu.qf(new sJ([new w(L(310), function() {
			t.u(21)
		}).button])), aOu
	}

	function aRA() {
		var aOu = new qR,
			g = (aOu.qU(L(62)), [L(277) + ": " + aE.kX[aD.data.botDifficultyValue], L(279), L(280), L(278)]);
		return aOu.qa(g[aD.data.botDifficultyType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(25)
		}).button])), aOu
	}

	function aRB() {
		var aOu = new qR,
			g = (aOu.qU("Spawning"), [L(300), L(312), L(278)]);
		return aOu.qa(g[aD.data.spawningType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(24)
		}).button])), aOu
	}
	this.show = function() {
		aPW.show(), this.resize(), aPW.vI.scrollTop = t.y.aJO[0]
	}, this.s5 = function() {
		t.y.aJO[0] = aPW.vI.scrollTop, aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC("🔧 " + L(307), [new w("⬅️ " + L(37), aPZ), new w(L(308), aR2)]), aR4(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.xQ : 1 === aD.data.mapType ? aD.data.canvas = bS.aM1(bS.a5l(aD.data), 0).xQ : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aM1(bS.a5l(aD.data), aD.data.mapSeed).xQ)), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR,
			a3h = (aOu.qU(L(309)), aD.data.canvas);
		a3h.style.width = "100%", aOu.qf({
			e: a3h
		}), aOu.qf(new sJ([new w(L(310), function() {
			t.u(20)
		}).button])), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu = new qR;
		aOu.qU(L(281)), aOu.qf(new rc({
			eA: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.i9(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.qw.a3R(aD.data.teamPlayerCount, 0), aD.a5L.a5Q(), bA.qw.a3R(aD.data.teamPlayerCount, 0) !== e) && aRI()
		})), qj.push(aOu)
	}(qj), function(qj) {
		var aOu = new qR;
		aOu.qU(L(311)), aOu.qc(new v7({
			vB: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(eA) {
			aD.data.gameMode !== eA && (aD.data.gameMode = eA, aRI())
		})), qj.push(aOu)
	}(qj), qj.push(aR9()), qj.push(aRA()), qj.push(aRB()), function(qj) {
		var aOu = new qR,
			g = (aOu.qU(L(313)), [L(314), L(315), L(278)]);
		aOu.qa(g[aD.data.playerNamesType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(23)
		}).button])), qj.push(aOu)
	}(qj), function(qj) {
		var aOu = new qR,
			g = (aOu.qU(L(274)), [L(276), L(277) + ": " + aD.data.aIncomeValue, L(278)]);
		aOu.qa(g[aD.data.aIncomeType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(22)
		}).button])), qj.push(aOu)
	}(qj), function(qj) {
		var aOu = new qR,
			g = (aOu.qU(L(316)), [L(276), L(277) + ": " + aD.data.tIncomeValue, L(278)]);
		aOu.qa(g[aD.data.tIncomeType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(26)
		}).button])), qj.push(aOu)
	}(qj), function(qj) {
		var aOu = new qR,
			g = (aOu.qU(L(317)), [L(276), L(277) + ": " + aD.data.iIncomeValue, L(278)]);
		aOu.qa(g[aD.data.iIncomeType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(27)
		}).button])), qj.push(aOu)
	}(qj), function(qj) {
		var aOu = new qR,
			g = (aOu.qU(L(318)), [L(276), L(277) + ": " + aD.data.sResourcesValue, L(278)]);
		aOu.qa(g[aD.data.sResourcesType]), aOu.qf(new sJ([new w(L(310), function() {
			t.u(28)
		}).button])), qj.push(aOu)
	}(qj), function(qj) {
		var aOu = new qR;
		aOu.qU(L(319)), aOu.qf(new sJ([new w(L(320), function() {
			t.x(), aD.a5L.a5o(), t.y.aJO[0] = 0, t.u(19)
		}).button])), aOu.qf(new sJ([new w(L(321), function() {
			bm.aJD()
		}).button])), aOu.qf(new sJ([new w(L(322), function() {
			return bm.aJF(), !0
		}).button])), qj.push(aOu)
	}(qj), qj))
}

function aOW() {
	var aPW, rh = !0;

	function ry(rx, a5s) {
		var qT = document.createElement("div"),
			aRL = document.createElement("span"),
			aRM = document.createElement("span");
		aRL.textContent = aW.aC0(a5s.eR) + ":", aRL.style.color = bB.oA, aRL.style.paddingRight = "0.4em", aRL.style.display = "table-cell", aRL.style.width = "6ch", aRL.style.textAlign = "end", qT.appendChild(aRL), aRM.textContent = a5s.qV, qT
			.appendChild(aRM), qT.style.display = "table", a5s.pX && function(qT, pX) {
				{
					var aIz;
					pX >= 1024 - aj.s4.za ? ((aIz = document.createElement("img")).src = aj.xT.zO[pX - 1024 + aj.s4.za].toDataURL(), aIz.style.width = "1.5em", aIz.style.height = "1.5em", aIz.style.verticalAlign = "middle", qT.appendChild(aIz)) : ((
						aIz = document.createElement("span")).textContent = aj.s4.zp(pX), aIz.style.display = "inline-block", aIz.style.fontSize = "1.5em", aIz.style.lineHeight = "1em", aIz.style.verticalAlign = "middle", qT.appendChild(aIz))
				}
			}(qT, a5s.pX), rx.appendChild(qT)
	}

	function s1() {
		rh && (aPW.vI.scrollTop = aPW.vI.scrollHeight)
	}
	this.clear = function() {
		aPW.vI.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a6l = bq.a5w(), f2 = a6l.length, rx = document.createDocumentFragment(), aB = 0; aB < f2; aB++) ry(rx, a6l[aB]);
		aPW.vI.appendChild(rx), s1(), aPW.show(), this.resize(), rh = !0, s1()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPW.vI.style.padding = "0.4em " + bA.qo.qx(bc.qu)
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, this.a1D = function(a5s) {
		var rx = document.createDocumentFragment();
		ry(rx, a5s), aPW.vI.appendChild(rx), s1()
	}, (aPW = new vC(L(323), [new w("⬅️ " + L(37), function() {
		t.aOY(1)
	})])).vI.style.overflowY = "auto", aPW.vI.addEventListener("scroll", function() {
		rh = aPW.vI.scrollTop >= aPW.vI.scrollHeight - aPW.vI.clientHeight - 2
	})
}

function aOT() {
	var aPW, aPX, aPY, qj;

	function aPZ() {
		aPb(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		2 === aD.data.iIncomeType && bA.qw.a3X(aPY.vi(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(317), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), aOu.qc(new v7({
			vB: [L(276), L(277), L(278)],
			value: aD.data.iIncomeType
		}, function(eA) {
			aPb(), 2 !== eA || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ez), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = eA, t.u(27)
		})), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu;
		1 === aD.data.iIncomeType && ((aOu = new qR).qU("Value"), aOu.qf(new rc({
			eA: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i9(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qj.push(aOu))
	}(qj), function(qj) {
		var aOu;
		2 === aD.data.iIncomeType && ((aOu = new qR).qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.iIncomeData, 4)), aOu.qf(aPY), qj.push(aOu))
	}(qj), qj))
}

function aOB() {
	var aRO, aRP, aQW, rb, aRQ, sa = 0;
	this.aHi = new tE, aQW = new rP([.45, .27], [.5, .5], 2 / 3), aRP = [new w("⚔️<br>" + L(324), function() {
			__fx.isCustomLobbyVersion ? alert("This version is for use with custom lobbies only. For normal multiplayer, use the version at https://fxclient.github.io/FXclient/") : aRR(0)
		}, __fx.isCustomLobbyVersion ? "rgba(50, 50, 50, 0.6)" : bB.oO), new w("🗡️<br>" + L(307), function() {
			aRR(1)
		}, bB.oh), new w("🔑<br>" + L(325), function() {
			aRR(2)
		}, bB.oz), new w("☰<br>" + L(326), function() {
			aRR(3)
		}, bB.o8), new w("", function() {
			t.u(12)
		}, bB.nr, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rb = new rc(bj.eO.data[122]);
	for (var aB = 0; aB < aRP.length; aB++) aRP[aB].button.style.position = "absolute";

	function aRR(eA) {
		a0.a1.setState(10), ab.tX() || ab.aHZ(), 0 === eA ? t.y.a5e() : 1 === eA ? (b9.aJY.xB(bj.eO.data[156].value, 1) || aD.a5L.a5o(), t.u(19)) : 2 === eA ? 0 !== a0.id || bj.eO.data[140].value ? t.u(8, t.t5, new t6(16)) : t.y.aRS(t.t5, 16) : 3 ===
			eA && t.u(1)
	}
	rb.e.style.position = "absolute", rb.e.style.textAlign = "center", rb.e.placeholder = L(327), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aHi.show(), aRP[4].r8(bA.color.a3o(bj.eO.data[121].value)), this.resize(), document.body.appendChild(rb.e);
		for (var aB = 0; aB < aRP.length; aB++) document.body.appendChild(aRP[aB].button);
		1 !== a0.id || a0.dv < 5 || (aRQ && bf.eR > aRQ + 144e5 ? a0.wB.setState(14) : aRQ = bf.eR)
	}, this.s5 = function() {
		this.aHi.s5(), t.removeChild(document.body, rb.e);
		for (var aB = 0; aB < aRP.length; aB++) t.removeChild(document.body, aRP[aB].button)
	}, this.resize = function() {
		this.aHi.resize(), this.aHi.resize(), aQW.resize();
		var gap = .5 * bc.gap,
			u3 = 10 / 99 * .84 * aQW.i,
			aRV = .16 * aQW.j,
			a9v = .19 * aQW.i,
			f9 = aQW.f9 + a9v,
			u3 = aQW.fB + u3 + 3 * gap,
			i = .5 * (aQW.i - gap) - a9v,
			a9v = aQW.i - 2 * a9v - aRV - gap,
			a9v = (bA.qo.tV(rb.e, f9, u3, a9v, aRV), bA.qo.tV(aRP[4].button, f9 + a9v + gap, u3, aRV, aRV), sa = u3, .5 * (aQW.fB + aQW.j - (u3 += aRV + gap) - gap));
		bA.qo.tV(aRP[0].button, f9, u3, i, a9v), bA.qo.tV(aRP[1].button, f9 + i + gap, u3, i, a9v), bA.qo.tV(aRP[2].button, f9, u3 + a9v + gap, i, a9v), bA.qo.tV(aRP[3].button, f9 + i + gap, u3 + a9v + gap, i, a9v);
		bA.qo.tV(aRP[5].button, f9, u3 + a9v * 2 + gap * 2, i * 2 + gap, a9v / 3);
		bA.qo.tV(aRP[6].button, f9, u3 + a9v * 2.33 + gap * 3, i * 2 + gap, a9v / 3);
		for (var aB = 0; aB < aRP.length; aB++) aRP[aB].button.style.font = bA.qo.sf(0, bA.qo.ur(.065 * aQW.j)), bA.qo.qy(aRP[aB].button, 5);
		rb.e.style.font = bA.qo.sf(0, bA.qo.ur(.08 * aQW.j)), bA.qo.qy(rb.e, 5)
	}, this.vR = function() {
		if (aa.aHE(), aT.vR(), f2 = Math.floor((a0.a1.iA() ? .018 : .0137) * h.iB), vS.font = bA.qo.sf(0, Math.max(5, f2)), bA.qo.textBaseline(vS, 0), bA.qo.textAlign(vS, 2), vS.fillStyle = bB.nv, vS.fillText(l.dv, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = vS.measureText(text).width, f2 = Math.max(5, f2), vS.textAlign = "left", vS.textBaseline = "middle", vS.fillText(text, vS.canvas.width - textLength - f2 / 2, 2 * f2), aO.vR(sa), bY.vR(), ab.tX()) {
			vS.imageSmoothingEnabled = !1;
			var text = ab.aHH("territorial.io"),
				textLength = .84 * aQW.i / text.width;
			vS.setTransform(textLength, 0, 0, textLength, aQW.f9 + .08 * aQW.i, aQW.fB), aRO = aRO || bA.a38.a4f(text, bA.a38.a4l, [0, 0, 0]);
			for (var f9 = -1; f9 <= 1; f9 += 2)
				for (var fB = -1; fB <= 1; fB += 2) vS.drawImage(aRO, f9, fB);
			vS.drawImage(text, 0, 0), vS.imageSmoothingEnabled = !0;
			var f2 = ab.aHH("logo"),
				aRY = .6666 * textLength * text.height / f2.height,
				nY = .5 * h.i,
				nZ = aQW.fB + .5 * textLength * text.height - .5 * aRY * f2.height;
			vS.setTransform(aRY, 0, 0, aRY, nY - .6 * textLength * text.width, nZ), vS.drawImage(f2, 0, 0), vS.setTransform(aRY, 0, 0, aRY, nY + .6 * textLength * text.width - aRY * f2.width, nZ), vS.drawImage(f2, 0, 0), vS.setTransform(1, 0, 0,
				1, 0, 0), vS.imageSmoothingEnabled = !0
		}
	}
}

function aOI() {
	var aOa, aRZ, aRa, vD;

	function aRb(aB) {
		t.u(8, t.t5, new t6(21, {
			tO: aB,
			tP: 0,
			tQ: 10
		}))
	}
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aRZ.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aRa = [new w(L(328), function() {
		aRb(1)
	}, 0, 0, 1), new w(L(329), function() {
		aRb(2)
	}, 0, 0, 1), new w(L(330), function() {
		aRb(3)
	}, 0, 0, 1), new w(L(331), function() {
		aRb(0)
	}, 0, 0, 1), new w(L(332), function() {
		aRb(9)
	}, 0, 0, 1), new w(L(333), function() {
		aRb(10)
	}, 0, 0, 1), new w(L(334), function() {
		aRb(11)
	}, 0, 0, 1)], vD = [new w("⬅️ " + L(37), function() {
		t.a23()
	})], aOa = new vC(L(335), vD), aRZ = new rM(aRa, aOa.vI)
}

function aDY(title, qb, aRc) {
	var aOa, aQk;
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aQk.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aRc = aRc || [new w("⬅️ " + L(37), function() {
		t.a23()
	}, bB.oa)], aOa = new vC(title, aRc), aQk = new sI(aOa.vI, qb), bA.qo.textAlign(aOa.vI.style, 1)
}

function aBe(data) {
	var aOa, aRd;

	function aRf(jb) {
		var f2 = data.data.length;
		if (f2) {
			for (var tP, max = min = parseInt(data.data[0][0]), aB = 1; aB < f2; aB++) var aFY = parseInt(data.data[aB][0]),
				min = Math.min(aFY, min),
				max = Math.max(aFY, max);
			tP = jb < 0 ? min + jb : max + 1, t.u(8, t.a5u().aO6, new t6(21, {
				tO: data.tO,
				tP: tP,
				tQ: tP + Math.abs(jb)
			}))
		}
	}
	if (this.show = function() {
			aOa.show(), this.resize()
		}, this.s5 = function() {
			aOa.s5()
		}, this.resize = function() {
			aOa.resize(), aRd.resize()
		}, this.a2v = function(ea) {
			2 === ea && aOa.vJ[0].r5()
		}, data.aBf) {
		aOa = new vC(L(111), [new w("⬅️ " + L(37), function() {
			t.a23()
		})]);
		var f5 = {
				sp: [],
				sv: [L(348), L(349), L(350) + " ↗"],
				t0: [12, 50, 38]
			},
			a5i = aD.data.a5i;
		if (a5i)
			for (var f2 = a5i.length, sp = f5.sp, a1S = ag.a1S, aB = 0; aB < f2; aB++) sp.push([{
				fT: aB + 1 + ".",
				ds: 0
			}, {
				fT: a1S[aB],
				ds: 0
			}, {
				fT: bF.t8.a06(a5i[aB], 5),
				ds: 1,
				t3: a5i[aB],
				t4: 0
			}]);
		aRd = new so(aOa.vI, f5)
	} else {
		var f5 = data.data.length ? 0 : 1,
			aRc = [new w("⬅️ " + L(37), function() {
				t.a23()
			}), new w(L(336), function() {
				aRf(-10)
			}, f5, 0, 1), new w(L(337), function() {
				aRf(10)
			}, f5, 0, 1), new w(L(283), function() {
				t.u(11, 10, new aRg({
					tO: data.tO
				}))
			})],
			sv = [L(338), L(339), L(340), L(341), L(342), L(343), L(344), L(345), L(346), L(347), L(333), L(334), "Audit Log"];
		aOa = new vC(sv[data.tO], aRc), ! function() {
			var aB, f5 = {
					sp: []
				},
				sp = f5.sp,
				aRi = data.data,
				f2 = aRi.length;
			f2 && 0 === aRi[0][0] && 0 <= (eA = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tO]) && (t.y.tR[eA] = aRi[0][1]);
			var nX = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tO],
				a4r = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tO],
				eA = [
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
			if (f5.sv = eA[data.tO], f5.t0 = [
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
				][data.tO], 0 === data.tO || 2 === data.tO || 3 === data.tO || 9 === data.tO || 10 === data.tO || 11 === data.tO)
				for (aB = 0; aB < f2; aB++) sp.push([{
					fT: aRi[aB][0] + 1 + ".",
					ds: 0
				}, {
					fT: aRi[aB][1],
					ds: 1,
					t3: aRi[aB][4],
					t4: aRi[aB][3]
				}, {
					fT: (nX * aRi[aB][2]).toFixed(a4r),
					ds: 0
				}]);
			else if (12 === data.tO)
				for (aB = 0; aB < f2; aB++) {
					var aRl = aRi[aB][3];
					sp.push([{
						fT: "" + aRi[aB][0],
						ds: 0
					}, {
						fT: "" + aRi[aB][4],
						ds: 0
					}, {
						fT: aRi[aB][5],
						ds: 1,
						t3: aRi[aB][1],
						t4: 0
					}, {
						fT: aRi[aB][6],
						ds: 1,
						t3: aRi[aB][2],
						t4: 0
					}, {
						fT: bo.eG(aRl),
						ds: 0
					}])
				} else if (1 === data.tO)
					for (aB = 0; aB < f2; aB++) sp.push([{
						fT: aRi[aB][0] + 1 + ".",
						ds: 0
					}, {
						fT: aRi[aB][1],
						ds: 0
					}, {
						fT: (nX * aRi[aB][2]).toFixed(a4r),
						ds: 0
					}, {
						fT: aRi[aB][3],
						ds: 1,
						t3: aRi[aB][5],
						t4: aRi[aB][4]
					}]);
				else if (4 === data.tO || 5 === data.tO || 6 === data.tO || 7 === data.tO || 8 === data.tO)
				for (aB = 0; aB < f2; aB++) {
					var aRm = aRi[aB][5];
					4 === data.tO || 8 === data.tO ? "100%" === (aRm = (aRm % 64 * 100 / (aRm >> 6)).toFixed(0) + "%") && (4 === data.tO ? aRm += " (" + L(369) + ")" : aRm += " (" + L(370) + ")") : 5 === data.tO ? 32768 <= aRm && (aRm = -(aRm -
						32768)) : aRm = (nX * aRm).toFixed(a4r), sp.push([{
						fT: "" + aRi[aB][0],
						ds: 0
					}, {
						fT: "" + aRi[aB][6],
						ds: 0
					}, {
						fT: aRi[aB][7],
						ds: 1,
						t3: aRi[aB][1],
						t4: aRi[aB][2]
					}, {
						fT: aRi[aB][8],
						ds: 1,
						t3: aRi[aB][3],
						t4: aRi[aB][4]
					}, {
						fT: "" + aRm,
						ds: 0
					}])
				}
			aRd = new so(aOa.vI, f5)
		}()
	}
}

function aRg(a4h) {
	var aOa, aOb, qj;
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aOb.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(L(371), [new w("⬅️ " + L(37), function() {
		t.aOY(10)
	})]), aOb = new qh(aOa.vI, ((qj = []).push(function() {
		var aP2, aOu = new qR,
			aQU = new rc(bj.eO.data[132], 1, function() {
				aP2.button.click()
			}),
			aQV = new rc(bj.eO.data[131], 1, function() {
				aQU.e.focus()
			});
		aOu.qU(L(288)), aOu.qf(aQV), aQV.e.style.marginBottom = "0.8em", aOu.qU(L(289)), aOu.qf(aQU);
		return aP2 = new w(L(287), function() {
			tP = Math.floor(aQV.e.value), tQ = Math.floor(aQU.e.value);
			var tQ, tP = {
				a3P: Math.min(tP, tQ),
				aNh: Math.max(tP, tQ)
			};
			t.u(8, t.a5v(10).aO6, new t6(21, {
				tO: a4h.tO,
				tP: tP.a3P,
				tQ: tP.aNh
			}))
		}, 0, 0, 1), aOu.qf(new sJ([aP2.button])), aOu
	}()), qj.push(function() {
		var aP2, aOu = new qR,
			aQU = new rc(bj.eO.data[134], 1, function() {
				aP2.button.click()
			}),
			aQV = new rc(bj.eO.data[133], 0, function() {
				aQU.e.focus()
			});
		return aOu.qU(1 === a4h.tO ? L(372) : L(373)), aOu.qf(aQV), aQV.e.style.marginBottom = "0.8em", aOu.qU(L(374)), aOu.qf(aQU), aP2 = new w(L(287), function() {
			var aQt = aQV.e.value.slice(0, 20),
				aQu = Math.abs(Math.floor(aQU.e.value));
			t.u(8, t.a5v(10).aO6, new t6(22, {
				tO: a4h.tO,
				aQt: aQt,
				aQu: aQu
			}))
		}, 0, 0, 1), aOu.qf(new sJ([aP2.button])), aOu
	}()), qj.push(function() {
		var aP2, aOu = new qR,
			aQU = new rc(bj.eO.data[152], 1, function() {
				aP2.button.click()
			}),
			aQV = new rc(bj.eO.data[151], 0, function() {
				aQU.e.focus()
			});
		return aOu.qU(L(375)), aOu.qf(aQV), aQV.e.style.marginBottom = "0.8em", aOu.qU(L(374)), aOu.qf(aQU), aP2 = new w(L(287), function() {
			var aQt = aQV.e.value.slice(0, 5),
				aQu = Math.abs(Math.floor(aQU.e.value));
			t.u(8, t.a5v(10).aO6, new t6(28, {
				tO: a4h.tO,
				aQt: aQt,
				aQu: aQu
			}))
		}, 0, 0, 1), aOu.qf(new sJ([aP2.button])), aOu
	}()), qj))
}

function aOV() {
	var aRq, tb, aRt, ta, td, aRr = [new Array(4), [], new Array(2), new Array(2)],
		aRs = new Array(4),
		aRu = new Array(2),
		aRv = [L(61), L(332), L(376), L(377)];

	function aFK() {
		var aEd;
		!bn.a21 || (aEd = aRq.tp.rb.e.value.trim().slice(0, 127)).length < 1 || (aRq.tp.rb.e.value = "", bn.aDb.a0t(aEd))
	}

	function aRy(aS0) {
		bn.y.rs[3] = 1 - bn.y.rs[3], aRz(3, 1, bn.y.rs[3]), aS0 && b0.aFV.aFW(4), bn.y.rs[3] && bj.sG.sH(158, bn.y.rs[0])
	}

	function aRw(fL, fM) {
		bn.y.rs[fL] !== fM && (0 === fL && bn.y.rs[3] && aRy(0), aRz(fL, bn.y.rs[fL], 0), aRz(fL, fM, 1), bn.y.rs[fL] = fM, 0 === fL ? (b0.aFV.aFW(2, fM), bn.y.rs[2] ? (aRq.tq.mi(), aRq.tp.rp(1)) : aRq.tp.rp(0), t.a5u().aF9(), t.a5u().aF8()) : 2 ===
			fL && (0 === fM ? (b0.aFV.aFW(0), aRq.tp.mi(), aRq.ty()) : (b0.aFV.aFW(1), aRq.tq.mi(), aRq.tz())))
	}

	function aRz(fL, fM, color) {
		aRq.ts[fL].rN[fM].r8(color ? bB.oK : bB.p9)
	}

	function aS3(aEN) {
		return aEN < 7 ? aEN + 2 + " " + L(383) : 7 === aEN || 10 === aEN ? L(332) + " (Full-Sending: " + L(7 === aEN ? 384 : 385) + ")" : 8 === aEN ? "1v1" : L(386)
	}

	function aS4(fT) {
		var a7o = bL.dt(fT, 60),
			fT = fT % 60;
		return (a7o < 10 ? "0" : "") + a7o + ":" + (fT < 10 ? "0" : "") + fT
	}
	this.aFg = function() {
		return aRq.tp
	}, this.aDb = function(t3) {
		aRw(2, 0);
		var qV = aRq.tp.rb.e.value,
			t3 = "@" + t3 + " ";
		qV.length && !bA.rn.a4B(qV, " ") && (t3 = " " + t3), aRq.tp.rb.e.value = qV += t3, aRq.tp.rb.e.focus()
	}, this.aF7 = function() {
		aRq.tq.mi()
	}, this.aF9 = function() {
		var aS2 = bn.y.rs[0],
			aS2 = bn.y.ru[aS2];
		bS.a7(aS2.ei, aS2.mapSeed), tb.rN[0].button.textContent = L(309) + ": " + bS.xG.xH[aS2.ei].name, tb.rN[1].button.textContent = L(311, 0, "Mode") + ": " + aS3(aS2.aEN), tb.rN[2].button.textContent = L(380) + ": " + bS.xG.xH[aS2.aG7].name,
			tb.rN[3].button.textContent = L(381, 0, "Next Mode") + ": " + aS3(aS2.aG8), tb.rN[4].button.textContent = L(382) + ": " + aS4(aS2.aFB), tb.resize()
	}, this.aF8 = function() {
		var aS2 = bn.y.rs[0],
			rt = bn.y.ru[aS2];
		aRq.tw(rt.tx);
		for (var aB = 0; aB < bn.uE.uF.length; aB++) aRr[0][aB].rm.textContent = "" + bn.uE.uF[aB].length;
		var uE = bn.uE.uF[aS2],
			aS5 = uE.length,
			aS6 = bn.uE.uG[aS2];
		aRr[2][1].rm.textContent = "" + aS5, aRr[3][1].rm.textContent = "" + aS6, tb.rN[4].button.textContent = L(382) + ": " + aS4(rt.aFB);
		for (aB = 0; aB < 4; aB++) {
			var aS7 = bn.y.ru[aB];
			aRs[aB] ? 0 === aS7.tx && (aRs[aB].rm.textContent = bS.xG.xH[aS7.ei].name) : aRs[aB] = new rl(bS.xG.xH[aS7.ei].name, ta.rN[aB].button, 1, 1), bA.rn.startsWith(aRv[aB], "🏆 ") ? aS7.aET || (aRv[aB] = aRv[aB].substring(3), ta.rN[aB]
				.button.textContent = aRv[aB], ta.rN[aB].button.appendChild(aRr[0][aB].rm), ta.rN[aB].button.appendChild(aRs[aB].rm)) : aS7.aET && (aRv[aB] = "🏆 " + aRv[aB], ta.rN[aB].button.textContent = aRv[aB], ta.rN[aB].button
				.appendChild(aRr[0][aB].rm), ta.rN[aB].button.appendChild(aRs[aB].rm))
		}
		var rt = "",
			aS9 = "";
		0 === aS2 && (rt = bn.lB.aEi(uE, 0, aS5), aS9 = bn.lB.aEi(uE, 0, aS6)), aRt[0].rm.textContent = rt, aRt[1].rm.textContent = aS9, aRu[1].rm.textContent = "MP: " + bn.y.aF1[0] + "   SP: " + bn.y.aF1[1] + "   Lobby: " + bA.qw.a3c(bn.uE.uF)
	}, this.aFD = function() {
		aRq.tp.mi()
	}, this.show = function() {
		aRq.show(), this.resize(), bn.message.show()
	}, this.s5 = function() {
		aRq.s5(), bn.ub.s5(), bn.uB.s5(), bn.message.s5()
	}, this.resize = function() {
		aRq.resize(1 - bn.y.rs[2]), bn.message.resize()
	}, this.a2v = function(ea) {
		2 === ea ? bn.y.rs[3] ? aRy(1) : aRq.ts[3].rN[0].r5() : ea < 2 && aRy(1)
	}, ta = new sM([new w(aRv[0], function() {
		return aRw(0, 0), 2
	}), new w(aRv[1], function() {
		return aRw(0, 1), 2
	}), new w(aRv[2], function() {
		return aRw(0, 2), 2
	}), new w(aRv[3], function() {
		return aRw(0, 3), 2
	})], bB.p9), tb = new sM([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.pA, 1);
	var aRx = new sM([new w(L(378), function() {
		return aRw(2, 0), 2
	}), new w(L(111), function() {
		return aRw(2, 1), 2
	})], bB.p9);
	td = new sM([new w(L(25, 0, 0, 1), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bn.uV(), b0.y.a2D(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bn.uV(), b0.y.a2D(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(379), function() {
		return aRy(1), 2
	})], bB.p9), aRq = new tZ(ta, tb, aRx, td, aFK, bn.ub.aFq);
	for (var aB = 0; aB < 4; aB++) aRr[0][aB] = new rl("0", ta.rN[aB].button);
	aRr[2][1] = new rl("0", aRx.rN[1].button), aRr[3][1] = new rl("0", td.rN[1].button), aRt = [new rl("", aRx.rN[1].button, 1, 1), new rl("", td.rN[1].button, 1, 1)], aRz(0, bn.y.rs[0], 1), aRz(2, bn.y.rs[2], 1), (aRu = [new rl(L(281), aRq.u0(), 1,
		0), new rl("", aRq.u0(), 1, 1)])[0].rm.style.fontSize = "0.4em", aRu[1].rm.style.fontSize = "0.4em"
}

function aOC() {
	var aOa, aOb, qj;
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aOb.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(L(387), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a5v(7).aO6)
	}), new w(L(200), function() {
		bj.sG.sH(105, bG.t8.x0(aOb.ql[0].qS[0].e.value, 5)), bj.sG.sH(106, bG.t8.x0(aOb.ql[1].qS[0].e.value, 15)), t.u(8, t.a5v(7).aO6, new t6(18))
	})]), aOb = new qh(aOa.vI, ((qj = []).push(function() {
		var aOu = new qR;
		return aOu.qU(L(178)), aOu.qf(new rc({
			value: "",
			eA: -1
		})), aOu
	}()), qj.push(function() {
		var aOu = new qR,
			aP4 = (aOu.qU(L(180)), new rc({
				value: "",
				eA: -1
			}));
		return aP4.e.type = "password", aOu.qf(aP4), aOu.qf(new sJ([new w(L(181), function(e) {
			return e.textContent === L(181) ? (e.textContent = L(182), aP4.e.type = "text") : (e.textContent = L(181), aP4.e.type = "password"), !0
		}).button])), aOu
	}()), qj.push(function() {
		var aOu = new qR;
		return aOu.qU(L(184)), aOu.qW(L(388)), aOu.qW(L(389)), aOu.qW(L(390)), aOu
	}()), qj))
}

function aOJ() {
	var aOa, aRZ, aRa, vD;

	function aRb(aB) {
		t.u(8, t.t5, new t6(21, {
			tO: aB,
			tP: 0,
			tQ: 10
		}))
	}
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aRZ.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aRa = [new w(L(343), function() {
		aRb(5)
	}, 0, 0, 1), new w(L(344), function() {
		aRb(6)
	}, 0, 0, 1), new w(L(345), function() {
		aRb(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aRb(12)
	}, 0, 0, 1)], vD = [new w("⬅️ " + L(37), function() {
		t.a23()
	})], aOa = new vC(L(391), vD), aRZ = new rM(aRa, aOa.vI)
}

function aO2() {
	this.eO = {}, this.tR = new Array(7), this.aOH = null, this.aOE = null, this.sm = 0, this.aJO = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a5e = function() {
		t.x(), aZ.dd()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dd()
	}), this.aDB = function() {
		t.u(0 === aa.a24() ? 5 : 0)
	}, this.aQT = function() {
		if (1 === bj.eO.data[130].value) t.u(8, t.a5u().aO6, new t6(24, {
			aPz: bj.eO.data[125].value,
			tP: bj.eO.data[128].value,
			tQ: bj.eO.data[129].value
		}));
		else {
			for (var g = (g = bj.eO.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5u().aO6, new t6(23, {
				aPz: bj.eO.data[125].value,
				a1Y: g
			}))
		}
	}, this.aRS = function(aO6, target) {
		t.u(4, aO6, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: " + b0.y.aOv(
				"/privacy"), !1, [new w("⬅️ " + L(37), function() {
				t.u(aO6)
			}), new w("✅ Accept", function() {
				bj.sG.sH(140, 1), 0 === target ? t.u(2, aO6) : t.u(8, aO6, new t6(target))
			})]))
	}, this.aSC = function() {
		for (var aB = 0; aB < 7; aB++) this.tR[aB] = bG.wr.wv(bH.pw(5));
		this.tR[1] = "[" + this.tR[1] + "]", 5 === t.t5 && (t.a5u().aHi.sH(this.tR), t.a5u().resize())
	}, this.aP3 = function(fT, pI, a7Q) {
		fT = bA.gN.a4e(fT, 1, 1e6);
		var aSD = Math.max(1, 1 + Math.floor(.01 * (fT - 100))),
			pI = L(392, [pI]);
		return (pI += "<br>") + L(393, [a7Q]) + "<br>" + L(394, [aSD < 20 ? fT + aSD + "–" + (fT + 20) : fT + aSD]) + "<br>" + L(395, [fT])
	}
}

function aOM() {
	var aPW, aPX, aSE, qj;

	function aPZ() {
		b6.uV(), t.aOZ()[19] = null, t.a23()
	}

	function aSL() {
		aSO(), aSM()
	}

	function aSO() {
		aSE.qT.lastChild && t.removeChild(aSE.qT, aSE.qT.lastChild)
	}

	function aSM() {
		var aSP = bS.a5l(aD.data);
		aD.data.canvas = bS.aM1(aSP, aD.data.mapSeed).xQ, aSN()
	}

	function aSN() {
		var a3h = aD.data.canvas;
		a3h.style.width = "100%", aSE.qT.appendChild(a3h)
	}
	this.aIy = function(a3h) {
		aD.data.canvas && aSO(), aD.data.canvas = a3h, aSN()
	}, this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(309), [new w("⬅️ " + L(37), aPZ)]), 2 === aD.data.mapType && b6.dd(), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), aOu.qc(new v7({
			vB: [L(396), L(397), L(398)],
			value: aD.data.mapType
		}, function(eA) {
			2 === (aD.data.mapType = eA) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uV()), t.u(20)
		})), 2 <= aD.data.mapType && (aOu.qf(new sT), aOu.qf(new sD({
			value: aD.data.passableWater
		}, L(399), function(value) {
			aD.data.passableWater = value
		})), aOu.qf(new sD({
			value: aD.data.passableMountains
		}, L(400), function(value) {
			aD.data.passableMountains = value
		})));
		qj.push(aOu)
	}(qj = []), function(qj) {
		if (0 === aD.data.mapType) {
			for (var aOu = new qR, vB = (aOu.qU(L(309)), []), aB = 0; aB < bS.xG.aMx.length; aB++) vB.push(bS.xG.xH[bS.xG.aMx[aB]].name);
			aOu.qc(new v7({
				vB: vB,
				value: aD.data.mapProceduralIndex
			}, function(eA) {
				aD.data.mapProceduralIndex = eA, aSL()
			})), qj.push(aOu)
		}
	}(qj), function(qj) {
		if (1 === aD.data.mapType) {
			for (var aOu = new qR, vB = (aOu.qU(L(309)), []), aB = 0; aB < bS.xG.aMy.length; aB++) vB.push(bS.xG.xH[bS.xG.aMy[aB]].name);
			aOu.qc(new v7({
				vB: vB,
				value: aD.data.mapRealisticIndex
			}, function(eA) {
				aD.data.mapRealisticIndex = eA, aSL()
			})), qj.push(aOu)
		}
	}(qj), function(qj) {
		var aOu;
		2 === aD.data.mapType && ((aOu = new qR).qU(L(401)), aOu.qf(new rc(bj.eO.data[162], 1)), aOu.qU(L(402), "0.8em"), aOu.qf(new sJ([new w(L(403), function() {
			return b6.aIr(), !0
		}).button])), qj.push(aOu))
	}(qj), function(qj) {
		var aOu, rb;
		2 === aD.data.mapType && ((aOu = new qR).qU(L(404)), rb = new rc({
			eA: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aOu.qf(rb), qj.push(aOu))
	}(qj), function(qj) {
		var aOu, rb, aP2;
		0 === aD.data.mapType && ((aOu = new qR).qU("Seed"), rb = new rc({
			eA: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aSL())
		}), aP2 = new w(L(300), function(e) {
			var aLw = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aLw) return rb.e.value = aD.data.mapSeed = aLw, aSL(), !0
		}), aOu.qf(rb), aOu.qf(new sJ([aP2.button])), qj.push(aOu))
	}(qj), function(qj) {
		(aSE = new qR).qU(L(405)), 2 !== aD.data.mapType ? aSM() : aD.data.canvas && aSN();
		qj.push(aSE)
	}(qj), qj))
}

function v(title, qb, aSQ, aRc) {
	var aOa, aQk;
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aQk.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aRc = aRc || [new w("⬅️ " + L(37), function() {
		t.a23()
	})], aOa = new vC(title, aRc), aQk = new sI(aOa.vI, qb), aSQ && bA.qo.textAlign(aOa.vI.style, 1)
}

function aOP() {
	var aPW, aPX, aPY, qj;

	function aPZ() {
		aPb(), 2 === aD.data.playerNamesType && 1 === bA.qw.a3L(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		2 === aD.data.playerNamesType && bA.qw.a3Z(aPY.vi(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(313), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), aOu.qc(new v7({
			vB: [L(314), L(315), L(278)],
			value: aD.data.playerNamesType
		}, function(eA) {
			aPb(), aD.data.playerNamesType = eA, t.u(23)
		})), aOu.qf(new sT), aOu.qf(new sD({
			value: aD.data.selectableName
		}, L(406), function(value) {
			aD.data.selectableName = value
		})), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu;
		2 === aD.data.playerNamesType && ((aOu = new qR).qU("Data"), aPY = new va(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ez || (aD.data.playerNamesData = new Array(aD.ez), aD.data.playerNamesData
			.fill("")), aPY.vh(bA.rn.a54(aD.data.playerNamesData, 1, '"')), aOu.qf(aPY), qj.push(aOu))
	}(qj), qj))
}

function aOX() {
	var aPW, aPX, qj;

	function aSW() {
		for (var colors = new Array(11), aB = 0; aB < 11; aB++) {
			var g = bj.eO.data[163 + aB].value.split(",");
			colors[aB] = new Uint8Array(3);
			for (var fL = 0; fL < 3; fL++) fL < g.length && (colors[aB][fL] = Number(g[fL]))
		}
		return colors
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(407), [new w("⬅️ " + L(37), function() {
		t.a23()
	})]), aPX = new qh(aPW.vI, ((qj = []).push(function() {
		var aOu = new qR;
		return aOu.qU(L(408)), aOu.qa(b0.y.aOv("/wiki/propaganda"), "0.75em").style.marginBottom = "0.8em", aOu.qa("<a href='https://tt-propagandio.vercel.app/' target='_blank'>Unofficial Propaganda Generator</a>", "0.75em"), aOu
	}()), qj.push(function() {
		var aOu = new qR,
			ec = (aOu.qU(L(409)), bj.eO.data[174].value),
			qX = aOu.qW(ec.length + " / 180"),
			aPE = (qX.style.textAlign = "center", new va(0, 1, function(e) {
				var e = e.target.value,
					gU = e.length;
				qX.textContent = gU + " / 180", gU <= 180 && bj.sG.sH(174, e)
			}));
		return aPE.e.rows = 6, aPE.e.style.fontSize = "1em", aPE.vh(ec), aOu.qf(aPE), aOu
	}()), qj.push(function() {
		var aOu = new qR;
		aOu.qU(L(299));
		for (var aB = 0; aB < 11; aB++) {
			var iK = aOu.qf(new rc(bj.eO.data[163 + aB]));
			aB && (iK.e.style.marginTop = "0.6em")
		}
		return aOu.qf(new sJ([new w(L(410), function() {
			for (var data = bj.eO.data, aB = 163; aB < 174; aB++) data[aB] && bj.eO.vx(aB, data[aB].w0);
			t.a23(), t.aOZ()[31] = null, t.u(31)
		}).button])), aOu
	}()), qj.push(function() {
		var aOu = new qR;
		return aOu.qU("Targeting"), aOu.qa(L(411)), aOu.qf(new rc(bj.eO.data[175], 0, 0)), aOu
	}()), qj.push(function() {
		var aOu = new qR;
		return aOu.qU(L(405)), aOu.qf(new sJ([new w(L(181), function() {
			(new eb).show(bj.eO.data[174].value, aSW(), -1)
		}).button])), aOu
	}()), qj.push(function() {
		var aOu = new qR,
			aSX = (aOu.qU(L(412)), aOu.qa(L(413)), new rc(bj.eO.data[176], 1, 0)),
			aSY = (aOu.qf(aSX), new w(L(414), function(e) {
				return aSZ.button.textContent === L(177) && b0.y.eW(0) && (bA.qo.v4(e), aP1(), b0.aG3.aSa(bj.eO.data[176].value, aSW(), bj.eO.data[175].value, bj.eO.data[174].value)), !0
			}, 1)),
			aP1 = function() {
				aSZ.button.textContent = L(176), aSY.r8(1), aSY.button.style.color = bB.nv
			},
			aSZ = new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aSY.r8(0), aSY.button.style.color = bB.ou) : aP1(), !0
			});
		return aOu.qf(new sJ([aSZ.button, aSY.button])), aOu
	}()), qj))
}

function aOA() {
	var aPW, vf;

	function aSb() {
		t.x();
		var qV = b9.aSf(vf.vi());
		(aD.a0p && 0 < qV.length && qV === b9.q8.a5a || b9.aJY.xB(qV)) && b9.aSg()
	}
	this.show = function(aSc) {
		this.aSd(aSc), aPW.show(), this.resize()
	}, this.aSd = function(aSc) {
		0 === aD.a0p ? aSc ? vf.vh(aSc) : aD.a5O.length && vf.vh(aD.a5O) : (aD.hA || (b9.q8.a5a = b9.a5b.a0H()), vf.vh(b9.aSe(b9.q8.a5a)))
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), vf.resize()
	}, this.a2v = function(ea) {
		2 === ea ? aPW.vJ[0].r5() : aSb()
	}, aPW = new vC(L(415), [new w("⬅️ " + L(37), function() {
		t.aOY(1)
	}), new w(L(416), function() {
		vf.vj()
	}), new w(L(417), function() {
		vf.vk()
	}), new w(L(418), function() {
		vf.clear()
	}), new w(L(419), function() {
		aSb()
	})]), vf = new va(L(420)), aPW.vI.appendChild(vf.e)
}

function aO9() {
	var aOa, aOb, qj, aOu;

	function aSh() {
		b7.aCx !== bj.eO.data[12].value ? (b7.dd(), t.u(8, 1, new t6(30))) : t.u(1)
	}
	this.show = function() {
			aOa.show(), this.resize()
		}, this.s5 = function() {
			aOa.s5()
		}, this.resize = function() {
			aOa.resize(), aOb.resize()
		}, this.a2v = function(ea) {
			2 === ea && aOa.vJ[0].r5()
		}, aOa = new vC(L(421), [new w("⬅️ " + L(37), aSh), new w(L(422), function() {
			t.x(), bj.sG.wY(), t.u(2)
		})]), qj = [], (aOu = new qR).qU(L(423)), aOu.qW(L(424)), qj.push(aOu),
		function(qj) {
			var aOu = new qR,
				g = (aOu.qU(L(411)), b7.data.aDE());
			aOu.qc(new v7({
				vB: g,
				value: b7.data.aDI(g)
			}, function(eA) {
				return bj.sG.sH(12, g[eA].split(":")[0]), !0
			})), qj.push(aOu)
		}(qj),
		function(qj) {
			var aOu = new qR,
				aSk = (aOu.qU(L(447)), []);
			aOu.qf(new sJ([new w(L(410), function(e) {
				bX.aSl();
				for (var aB = 0; aB < aSk.length; aB++) aSk[aB].e.value = bX.aCW[aB];
				return bA.qo.v4(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aSm.length; aB++) {
				aOu.qW(bX.aSm[aB]);
				for (var fL = 0; fL < 2; fL++) {
					var eA = 2 * aB + fL,
						rb = new rc({
							value: bX.aCW[eA],
							eA: -1
						});
					rb.e.aSn = eA, aSk.push(rb), rb.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aSo(e.target.aSn, code)
					}), fL && (rb.e.style.marginLeft = "4%"), rb.e.style.width = "48%", aOu.qf(rb)
				}
			}
			qj.push(aOu)
		}(qj), (aOu = new qR).qU(L(23)), aOu.qc(new v7({
			vB: ["1", "2"],
			value: aZ.aGt - 1
		}, function(aB) {
			aZ.aGt = aB + 1
		})), qj.push(aOu), (aOu = new qR).qU(L(425)), bj.eO.data[1].vB = [L(426), L(427), L(428), L(429)], aOu.qc(new v7(bj.eO.data[1])), qj.push(aOu), (aOu = new qR).qU(L(430)), bj.eO.data[9].vB = [L(427), L(431), L(432)], aOu.qc(new v7(bj.eO.data[
			9])), qj.push(aOu), (aOu = new qR).qU(L(433)), bj.eO.data[11].vB = [L(434), L(9), L(435)], aOu.qc(new v7(bj.eO.data[11])), qj.push(aOu), (aOu = new qR).qU(L(436)), aOu.qf(new sD(bj.eO.data[2])), qj.push(aOu), (aOu = new qR).qU(L(437)),
		aOu.qf(new sD(bj.eO.data[7])), qj.push(aOu), (aOu = new qR).qU(L(438)), aOu.qf(new sD(bj.eO.data[8])), qj.push(aOu), (aOu = new qR).qU(L(439)), aOu.qf(new rc(bj.eO.data[5])), qj.push(aOu), (aOu = new qR).qU(L(440)), aOu.qf(new sD(bj.eO.data[
			13], L(441))), aOu.qf(new sD(bj.eO.data[14], L(442))), qj.push(aOu), (aOu = new qR).qU(L(443)), aOu.qc(new v7({
			vB: [L(444), L(445), L(446)],
			value: aZ.aGu
		}, function(aB) {
			aZ.aGu = aB
		})), qj.push(aOu), aOb = new qh(aOa.vI, qj)
}

function aOQ() {
	var aPW, aPX, aPY, qj;

	function aPZ() {
		aPb(), 2 !== aD.data.spawningType || bA.qw.a3L(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		2 === aD.data.spawningType && bA.qw.a3X(aPY.vi(), aD.data.spawningData, bS.aJ1 - 1)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(448), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR,
			vB = (aOu.qU(L(275)), [L(300), L(312), L(278)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (vB.splice(1, 1), 0 < value) && (value = 1);
		aOu.qc(new v7({
			vB: vB,
			value: value
		}, function(eA) {
			aPb(), aD.data.spawningType = eA, 0 === aD.data.gameMode && 1 === eA && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ez)), t.u(24)
		})), aOu.qf(new sT), aOu.qf(new sD({
			value: aD.data.selectableSpawn
		}, L(449), function(value) {
			aD.data.selectableSpawn = value
		})), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu = new qR;
		aOu.qU("Seed"), aOu.qf(new rc({
			eA: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qj.push(aOu)
	}(qj), function(qj) {
		var aOu;
		2 === aD.data.spawningType && ((aOu = new qR).qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.spawningData, 2)), aOu.qf(aPY), qj.push(aOu))
	}(qj), qj))
}

function aO8() {
	var aOa, aRZ, aRa, vD;

	function aSp(id) {
		0 !== a0.id || bj.eO.data[140].value ? 0 === id ? t.u(8, 1, new t6(16)) : t.u(2) : t.y.aRS(t.t5, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aOa.show(), this.resize(), this.eV()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aRZ.resize()
	}, this.eV = function() {
		8 === aa.a24() && (2 <= bd.aSu ? aRa[2].r6 === bB.o7 && aRa[2].r8(0) : aRa[2].r6 !== bB.o7 && aRa[2].r8(bB.o7), !aD.hA && aM.qP(aD.em) ? aRa[1].r6 === bB.o7 && aRa[1].r8(0) : aRa[1].r6 !== bB.o7 && aRa[1].r8(bB.o7), !aD.hA && aw.hq(aD
			.em) ? aRa[0].r6 === bB.o7 && aRa[0].r8(0) : aRa[0].r6 !== bB.o7 && aRa[0].r8(bB.o7))
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aRa = [new w(L(450), function() {
		aSp(0)
	}), new w(L(335), function() {
		t.u(16)
	}), new w(L(391), function() {
		t.u(17)
	}), new w(L(451), function() {
		t.y.aQT()
	}, 0, 0, 1), new w(L(415), function() {
		t.u(3, 1)
	}), new w(L(452), function() {
		t.u(18)
	}), new w(L(407), function() {
		t.u(31)
	}), new w(L(421), function() {
		aSp(1)
	}), new w(L(453), function() {
		var sv = ["Patreon", L(462), L(463), "YouTube Tutorial", "Discord", L(464), L(328), L(465), L(331), L(466), "Terms", "Privacy"],
			a47 = [bK.aPU, bK.aDV, bK.a1x, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aDW, bK.aSv, bK.aSw, bK.aSx, bK.aSy, bK.aSz, bK.aT0, bK.aT1];
		if (b0.y.aT2(0))
			for (var aB = 0; aB < a47.length; aB++) a47[aB] = a47[aB].replace("https://territorial.io", "https://game.territorial.io");
		1 === a0.id ? (sv.splice(2, 1), sv.splice(0, 1), a47.splice(2, 1), a47.splice(0, 1)) : 2 === a0.id && (sv.splice(1, 1), sv.splice(0, 1), a47.splice(1, 1), a47.splice(0, 1)), t.u(4, 1, new v(L(453), bA.qo.a46(sv, a47), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(454), function() {
		t.u(4, 1, new v(L(454), l.dv + "<br>" + b0.y.aOv("/changelog") + "<br><br><l>FX Client v" + __fx.version +
			"<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a><br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></l>", !0, [new w("⬅️ " + L(37),
				function() {
					t.u(1)
				})]))
	}), new w(L(455), function() {
		t.u(4, 1, new v(L(455), L(467) + "<br>" + L(468), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(469), function() {
			a0.a1.a1r(), t.u(1)
		})]))
	}), new w(L(456), function() {
		a0.a1.a1s(), t.u(4, 1, new v(L(470), L(471) + " " + b0.y.aOv("/privacy"), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], vD = [new w("⬅️ " + L(37), function() {
		t.y.aDB()
	})], 8 === aa.a24() && (aRa.unshift(new w(L(323), function() {
		t.u(30)
	})), aRa.unshift(new w(L(459), function() {
		2 <= bd.aSu && (t.x(), be.a2y(), bf.dk = !0)
	}, 0, 1)), aRa.unshift(new w(L(460), function() {
		!aD.hA && aM.qP(aD.em) && (b8.hR.pc(), t.x(), aM.hB) && aM.a2y()
	}, 0, 1)), aRa.unshift(new w(L(461), function() {
		!aD.hA && aw.hq(aD.em) && (bV.a6H(2), b8.hR.hm(), t.x(), aM.hB) && aM.a2y()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dv && aRa.push(new w(L(457), function() {
		a0.a1.a1t()
	})), aOa = new vC(L(458), vD), aRZ = new rM(aRa, aOa.vI)
}

function aOU() {
	var aPW, aPX, aPY, qj;

	function aPZ() {
		aPb(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		2 === aD.data.sResourcesType && bA.qw.a3X(aPY.vi(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(318), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), aOu.qc(new v7({
			vB: [L(276), L(277), L(278)],
			value: aD.data.sResourcesType
		}, function(eA) {
			aPb(), 2 !== eA || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ez)), aD.data.sResourcesType = eA, t.u(28)
		})), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu;
		1 === aD.data.sResourcesType && ((aOu = new qR).qU("Value"), aOu.qf(new rc({
			eA: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.i9(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qj.push(aOu))
	}(qj), function(qj) {
		var aOu;
		2 === aD.data.sResourcesType && ((aOu = new qR).qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.sResourcesData, 2)), aOu.qf(aPY), qj.push(aOu))
	}(qj), qj))
}

function aOS() {
	var aPW, aPX, aPY, qj;

	function aPZ() {
		aPb(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aOZ()[19] = null, t.a23()
	}

	function aPb() {
		2 === aD.data.tIncomeType && bA.qw.a3X(aPY.vi(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aPW.show(), this.resize()
	}, this.s5 = function() {
		aPW.s5()
	}, this.resize = function() {
		aPW.resize(), aPX.resize()
	}, this.a2v = function(ea) {
		2 === ea && aPW.vJ[0].r5()
	}, aPW = new vC(L(316), [new w("⬅️ " + L(37), aPZ)]), aPX = new qh(aPW.vI, (function(qj) {
		var aOu = new qR;
		aOu.qU(L(275)), aOu.qc(new v7({
			vB: [L(276), L(277), L(278)],
			value: aD.data.tIncomeType
		}, function(eA) {
			aPb(), 2 !== eA || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ez), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = eA, t.u(26)
		})), qj.push(aOu)
	}(qj = []), function(qj) {
		var aOu;
		1 === aD.data.tIncomeType && ((aOu = new qR).qU("Value"), aOu.qf(new rc({
			eA: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.i9(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qj.push(aOu))
	}(qj), function(qj) {
		var aOu;
		2 === aD.data.tIncomeType && ((aOu = new qR).qU("Data"), (aPY = new va(0, 1, 0, 1)).vh(bA.rn.a54(aD.data.tIncomeData, 4)), aOu.qf(aPY), qj.push(aOu))
	}(qj), qj))
}

function aOK() {
	var aOa, aOb, qj;
	this.show = function() {
		aOa.show(), this.resize()
	}, this.s5 = function() {
		aOa.s5()
	}, this.resize = function() {
		aOa.resize(), aOb.resize()
	}, this.a2v = function(ea) {
		2 === ea && aOa.vJ[0].r5()
	}, aOa = new vC(L(452), [new w("⬅️ " + L(37), function() {
		t.a23()
	})]), aOb = new qh(aOa.vI, ((qj = []).push(function() {
		function aP1() {
			aSZ.button.textContent = L(176), aT5.e.readOnly = !1, aT6.e.readOnly = !1, aP0.r8(1), aP0.button.style.color = bB.nv
		}
		var aOu = new qR,
			aT4 = (aOu.qa(b0.y.aOv("/wiki/transactions"), "0.75em").style.marginBottom = "0.8em", aOu.qU(L(472)), new rc({
				value: bj.eO.data[105].value,
				eA: -1
			})),
			aT5 = (aT4.e.readOnly = !0, aOu.qf(aT4), aOu.qU(L(361), "0.8em"), new rc(bj.eO.data[148], 0, void 0, function(e) {
				aOz(bj.eO.data[149].value, e.target.value)
			})),
			aT6 = (aOu.qf(aT5), aOu.qU(L(365), "0.8em"), new rc(bj.eO.data[149], 1, void 0, function(e) {
				aOz(e.target.value, bj.eO.data[148].value)
			})),
			aSZ = (aOu.qf(aT6), new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aT5.e.readOnly = !0, aT6.e.readOnly = !0, aP0.r8(0), aP0.button.style.color = bB.ou, bj.sG.sH(149, aT6.e.value), aOz(bj.eO.data[149].value, bj.eO.data[
					148].value)) : aP1(), !0
			})),
			aP0 = (aOu.qf(new sJ([aSZ.button])), new w(L(14), function(e) {
				return aT5.e.readOnly && b0.y.eW(0) && (bA.qo.v4(e), aP1(), b0.aG3.aG4({
					t7: 0,
					t3: bj.eO.data[148].value,
					value: parseInt(bj.eO.data[149].value, 10)
				})), !0
			}, 1)),
			qX = aOu.qW(),
			aOz = (aOu.qW(L(473)).style.fontWeight = "bold", function(fT, qV) {
				qX.innerHTML = t.y.aP3(fT, bj.eO.data[105].value, qV)
			});
		return aOu.qf(new sJ([aP0.button])), aOz(bj.eO.data[149].value, bj.eO.data[148].value), aOu
	}()), qj))
}

function bw() {
	"function" != typeof Math.log2 && (Math.log2 = function(f9) {
		return Math.log(f9) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(f9) {
		return Math.log(f9) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(f9) {
		return 0 < f9 ? 1 : f9 < 0 ? -1 : 0
	})
}

function ci() {
	var aAB, aT8, aT9, aTA, aT7 = !1;

	function aTB() {
		aT7 = !0, aAB = -1, aT8 = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aT8[aB] = !1;
		var yG = Math.floor(1 + .02 * h.min);
		aT9 = new Array(4), (aTA = new Array(4))[1] = aTA[3] = aT9[0] = aT9[2] = 0, aTA[0] = aT9[3] = -yG, aT9[1] = aTA[2] = yG
	}

	function aTC() {
		if (-1 !== aAB)
			if (0 !== aD.a0p && aH.nd()) {
				for (var aTD = !1, aB = 3; 0 <= aB; aB--) aT8[aB] && (aTD = !0, ic += aT9[aB], ie += aTA[aB], af.a2N(aT9[aB], aTA[aB]), aS.a9r());
				aTD ? bf.dk = !0 : ar.nT()
			} else ar.nT()
	}
	this.a2t = function(eA) {
		0 !== aD.a0p && aH.nd() && (aT7 || aTB(), aT8[eA] = !0, -1 === aAB) && (aAB = setInterval(aTC, 20), aTC())
	}, this.a2w = function(eA) {
		if (0 !== aD.a0p && (aT7 || aTB(), aT8[eA] = !1, -1 !== aAB)) {
			for (var aTD = !1, aB = 3; 0 <= aB; aB--) aTD = aTD || aT8[aB];
			aTD || this.nT()
		}
	}, this.nT = function() {
		if (aT7 && -1 !== aAB) {
			for (var aB = 3; 0 <= aB; aB--) aT8[aB] = !1;
			clearInterval(aAB), aAB = -1
		}
	}
}

function cj() {
	this.y = new aTE, this.md = new aTF, this.pI = new aTG, this.aFV = new aTH, this.eX = new aTI, this.aG3 = new aTJ, this.pv = new aTK, this.aQq = new aTL, this.a7Q = new aTM, this.aTN = new aTO, this.aTP = new aTQ, this.aTR = new aTS, this.aTT =
		new aTU, this.dd = function() {
			this.y.dd()
		}
}

function aTE() {
	var aTW, aTX;
	this.aGy = 5, this.aTV = null, this.a29 = 0, this.a22 = 0;

	function aTf() {
		return 0 === aZ.aGu ? l.dx ? 1 : 0 : aZ.aGu - 1
	}

	function aTi(a1z, aO6, aTh) {
		aTX[a1z].aT7 = !0, aTc(a1z), aTW[a1z] = new aTl, aTW[a1z].dd(a1z, aO6, aTh)
	}

	function aTj(aB) {
		return aTX[aB].aT7 && aTW[aB].aTj()
	}

	function aTc(a1z) {
		aTX[a1z].eR = bf.eR, aTX[a1z].aTZ = !1
	}
	this.dd = function() {
		this.aTV = new Array(this.aGy);
		this.aTV[0] = "territorial.io";
		var aLw = ay.aMI(0);
		ay.a5R(0);
		for (var aB = 1; aB < this.aGy; aB++) this.aTV[aB] = aK.a0N() + ".territorial.io";
		for (ay.a5R(aLw), aTW = new Array(this.aGy), aTX = new Array(this.aGy), aB = this.aGy - 1; 0 <= aB; aB--) aTX[aB] = {
			aT7: !1,
			eR: 0,
			aTZ: !1
		};
		this.aGz(0, 0, 0)
	}, this.aTa = function(aB) {
		return aTW[aB]
	}, this.eV = function() {
		for (var aB = this.aGy - 1; 0 <= aB; aB--) this.eW(aB) && bf.eR > aTX[aB].eR + 15e3 && (b0.pI.aTb(aB, aTX[aB].aTZ), aTc(aB));
		!this.eW(0) && bf.eR > aTX[0].eR + 8e3 && (aTX[0].eR = bf.eR, this.aGz(0, 0, 0))
	}, this.aQn = function(id) {
		return this.aGz(0, id, 0) && this.aTd(0)
	}, this.aT2 = function(aTe) {
		return aTe ? aZ.aGv : aTf()
	}, this.a1G = function() {
		return aTf() ? "game.territorial.io" : "territorial.io"
	}, this.aOv = function(aTg) {
		aTg = this.a1G() + aTg;
		return "<a href='https://" + aTg + "' target='_blank'>" + aTg + "</a>"
	}, this.aGz = function(a1z, aO6, aTe) {
		aTe = this.aT2(aTe);
		if (aTX[a1z].aT7) {
			if (aTW[a1z].aTj()) return aTW[a1z].aTk(aO6), aTW[a1z].eW();
			aTW[a1z].s5()
		}
		return aTi(a1z, aO6, aTe), !1
	}, this.aTm = function(a1z, aO6) {
		b0.eX.aTn(a1z)
	}, this.aTd = function(aB) {
		return this.eW(aB) && aTW[aB].aTd()
	}, this.aTo = function(aB) {
		aTW[aB].aTo()
	}, this.eW = function(aB) {
		return aTX[aB].aT7 && aTW[aB].eW()
	}, this.send = function(a1z, aC) {
		0 !== a1z && aTc(a1z), aTW[a1z].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a2e = function(a1z) {
		8 === aa.a24() && (aTX[a1z].aTZ = !0, b0.md.aTp = !0)
	}, this.close = function(a1z, aTq) {
		aTj(a1z) && aTW[a1z].close(aTq)
	}, this.aTr = function(a1z, aTq) {
		o.a2C(aTq), aTj(a1z) && aTW[a1z].close(aTq)
	}, this.a2D = function(aTq) {
		for (var aB = this.aGy - 1; 0 <= aB; aB--) this.close(aB, aTq)
	}, this.aTs = function(a1z, aTq) {
		for (var aB = this.aGy - 1; 0 <= aB; aB--) aB !== a1z && this.close(aB, aTq)
	}, this.a5c = function() {
		0 === this.a29 && (aD.kg || aD.hA) || this.close(this.a29, 3246)
	}, this.aTt = function(a1z, e) {
		aTW[a1z].s5(), o.a1y(a1z, e.code)
	}
}

function aTF() {
	this.aTp = !1, this.eV = function() {
		bf.kJ() % 250 != 249 || aD.hA || (b0.eX.aTu(+(this.aTp && ag.mv[aD.em]), al.ks + bN.y.mC), this.aTp = !1)
	}
}

function aTM() {
	this.aTw = function(a1z, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aTr(a1z, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bH.pw(1) ? function(a1z) {
			var aU0 = bH.pw(6);
			0 === aU0 ? function(a1z) {
					if (0 === a1z && 8 !== aa.a24()) {
						t.y.aSC();
						for (var aUF = bH.pw(12), aUG = bH.pw(6), g = new Array(aUF), aB = 0; aB < aUF; aB++) g[aB] = bH.pw(aUG);
						aT.aAH(g)
					}
				}(a1z) : 2 === aU0 ? b0.aTN.aU2(a1z) : 3 === aU0 || 4 === aU0 ? ax.dd() : 5 === aU0 ? b0.aTP.aU3() : 9 === aU0 ? b0.aTP.aU4(a1z) : 10 === aU0 ? b0.aTR.aU5() : 11 === aU0 ? b0.aTP.aU6(a1z) : 12 === aU0 ? b0.aTR.aU7() :
				13 === aU0 ? b0.aTT.aU8() : 14 === aU0 ? b0.aTT.aU9() : 15 === aU0 ? b0.aTP.aUA() : 16 === aU0 ? b0.aTN.aUB(a1z) : 17 === aU0 ? b0.aTN.aUC(a1z) : 19 === aU0 ? b0.aTN.aUD(a1z) : 20 === aU0 && b0.aTP.aUE(a1z)
		} : function(a1z) {
			if (8 !== aa.a24() && !ax.aHT()) return;
			if (a1z !== b0.y.a29) b0.y.aTr(a1z, 3244);
			else if (0 === bH.pw(1)) bf.a0z.aUH(bH.aC);
			else {
				var aB, a1z = bH.pw(2);
				if (0 === a1z) {
					var pX, pI = bH.pw(9);
					0 !== ag.mv[pI] && 0 !== ag.mv[aD.em] && (pX = bH.pw(10), aN.pW(pI, aD.em, pX), af.qN(pI, 1, pX))
				} else if (1 === a1z) ! function() {
					var pI = bH.pw(9);
					0 !== ag.mv[pI] && 0 !== ag.mv[aD.em] && b5.aLX(0, [pI], !0) && aN.po(pI, 1)
				}();
				else if (2 === a1z) ! function() {
					var pI = bH.pw(9),
						target = bH.pw(9);
					0 !== ag.mv[pI] && 0 !== ag.mv[target] && 0 !== ag.mv[aD.em] && b5.aLX(1, [pI], !0) && (af.qN(pI, 3, 96), af.qN(target, 4, 96), aN.a7X(pI, target))
				}();
				else if (l.a9 && !l.aA) {
					var f2 = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), f2 = Math.min(b8.pF.py.length, 540), aB = 0; aB < f2; aB++) bD.aUN(32, b8.pF.py[aB]);
					b0.y.send(b0.y.a29, bD.aC)
				}
			}
		})(a1z), bf.aTz())
	}
}

function aTS() {
	this.aU5 = function() {
		bj.y.wO(), bj.sG.sH(105, bF.t8.t9(bF.t8.tA(5))), bj.sG.sH(106, bF.t8.t9(bF.t8.tA(15))), bj.sG.sH(109, 0), bj.sG.sH(108, bj.eO.data[109].value), bj.sG.sH(111, bj.eO.data[109].value + 1), bj.sG.sH(107, 0), bj.sG.sH(110, "")
	}, this.aU7 = function() {
		var data;
		bH.size < bD.aUO(29) ? b0.y.aTr(0, 3254) : ((data = {
			t4: bH.pw(30),
			wc: bH.pw(16),
			wd: bH.pw(30),
			we: bH.pw(30),
			wf: bH.pw(30),
			wg: bH.aUP(32),
			username: bG.wt.xB(5),
			wh: bG.wt.xB(3),
			wi: bG.wt.xB(3),
			wj: bH.aUP(32),
			wk: bH.aUP(32),
			wl: bH.pw(30),
			wm: bH.aUP(32),
			wn: bH.aUP(32),
			wo: bH.aUP(32),
			wp: bH.aUP(32),
			aP8: bH.aUP(32),
			aP9: bH.aUP(30),
			aPM: bH.aUP(32),
			aPN: bG.wt.xB(3),
			aPF: bH.aUP(2),
			aPH: bH.aUP(10),
			aPD: bG.wt.xB(8),
			aPG: bH.aUP(5),
			aOx: bH.pw(30),
			aP7: bH.pw(30),
			a1J: bH.aUP(32),
			aPC: bH.pw(3),
			aPB: bH.pw(8),
			aPO: bH.pw(1),
			aPP: bH.pw(1)
		}).aPO && (data.aPQ = bH.aUP(32), data.aPR = bH.pw(30), data.aPS = bH.pw(30), data.aPT = bH.pw(1)), 8 === t.t5 && (25 === t.a5u().aQm ? (data.aOc = !0, t.y.aOH = data, t.a5u().aDA(25, !1)) : (data.aOc = !1, bj.sG.sH(160, +(data
			.aPO && data.aPT)), data.t3 = bj.eO.data[105].value, t.y.aOE = data, bj.sG.wb(data), t.a5u().aDA(16, !0))))
	}
}

function aTU() {
	this.aU8 = function() {
		var aB;
		if (bH.size < bD.aUO(23)) b0.y.aTr(0, 3259);
		else {
			var tO = bH.pw(6),
				f2 = bH.pw(10),
				data = [];
			if (9 === tO || 10 === tO || 11 === tO) {
				for (aB = 0; aB < f2; aB++) data.push([bH.pw(30), bG.wt.xB(5), bH.aUP(32), 0, bH.pw(30)]);
				8 === t.t5 && t.a5u().aDA(21, !0, {
					tO: tO,
					data: data
				})
			} else if (12 === tO) {
				for (aB = 0; aB < f2; aB++) data.push([bH.pw(20), bH.pw(30), bH.pw(30), bH.aUP(32), bH.pw(30), bG.wt.xB(5), bG.wt.xB(5)]);
				8 === t.t5 && t.a5u().aDA(21, !0, {
					tO: tO,
					data: data
				})
			} else {
				var hy = bH.pw(16);
				if (bH.aUQ(39 + 16 * hy + f2 * (0 === tO ? 111 : 1 === tO ? 101 : 2 === tO || 3 === tO ? 127 : 212))) {
					if (0 === tO)
						for (aB = 0; aB < f2; aB++) data.push([bH.pw(30), bG.wr.wv(bH.pw(5)), bH.pw(16), bH.pw(30), bH.pw(30)]);
					else if (1 === tO)
						for (aB = 0; aB < f2; aB++) data.push([bH.pw(16), bG.wr.wv(bH.pw(3)), bH.pw(16), bG.wr.wv(bH.pw(5)), bH.pw(31), bH.pw(30)]);
					else if (2 === tO || 3 === tO)
						for (aB = 0; aB < f2; aB++) data.push([bH.pw(30), bG.wr.wv(bH.pw(5)), bH.aUP(32), bH.pw(30), bH.pw(30)]);
					else
						for (aB = 0; aB < f2; aB++) data.push([bH.pw(20), bH.pw(30), bH.pw(30), bH.pw(30), bH.pw(30), bH.aUP(32), bH.pw(30), bG.wr.wv(bH.pw(5)), bG.wr.wv(bH.pw(5))]);
					8 === t.t5 && t.a5u().aDA(21, !0, {
						tO: tO,
						data: data
					})
				} else b0.y.aTr(0, 3260)
			}
		}
	}, this.aU9 = function() {
		if (bH.size < bD.aUO(29)) b0.y.aTr(0, 3265);
		else {
			var aUR = bH.pw(4),
				aUS = bH.pw(7),
				aUT = bH.pw(11);
			if (bH.aUQ(29 + 16 * aUS + 16 * aUT + 11 * aUR)) {
				for (var data = [], aB = 0; aB < aUR; aB++) {
					for (var a1Z = bG.wr.wv(bH.pw(3)), aUU = bH.pw(8), aQ0 = [], fL = 0; fL < aUU; fL++) aQ0.push(bH.pw(16));
					data.push({
						name: "[" + a1Z + "]",
						aQ0: aQ0
					})
				}
				8 === t.t5 && t.a5u().aDA(23, !0, data)
			} else b0.y.aTr(0, 3266)
		}
	}
}

function aTO() {
	function aUW() {
		var id = bH.pw(3);
		return 0 === id ? {
			id: id,
			t3: bH.pw(30),
			r: bn.aDb.aFa(bG.wt.xB(7))
		} : 1 === id ? {
			id: id,
			t3: bH.pw(30),
			aEc: bH.pw(3),
			value: bH.pw(30),
			target: bH.pw(30)
		} : 2 === id ? {
			id: id,
			t3: bH.pw(30),
			aEc: bH.pw(3)
		} : 3 === id ? {
			id: id,
			t3: bH.pw(30),
			aEc: bH.pw(3),
			value: bH.pw(4),
			target: bH.pw(30)
		} : 4 === id ? {
			id: id,
			t3: bH.pw(30),
			aEc: bH.pw(3),
			target: bH.pw(30)
		} : 5 === id ? {
			id: id,
			aEc: bH.pw(6)
		} : 6 === id ? {
			id: id,
			value: bH.pw(17)
		} : null
	}
	this.aU2 = function(a1z) {
		if (a1z !== b0.y.a22) b0.y.close(a1z, 3239);
		else if (6 !== aa.a24()) b0.y.close(a1z, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var rt = bn.y.ru[aB],
					playerCount = (rt.tx = bH.pw(10), rt.ei = bH.pw(6), rt.mapSeed = bH.pw(14), rt.aEN = bH.pw(4), rt.aG7 = bH.pw(6), rt.aG8 = bH.pw(4), rt.aET = bH.pw(1), rt.aFB = bH.pw(12), rt.spawningSeed = bH.pw(14), bH.pw(16));
				bn.uE.uG[aB] = bH.pw(16);
				for (var fL = 0; fL < playerCount; fL++) bn.uE.aDp(aB, bH.pw(30), bG.wt.xB(5), bH.pw(4), bH.pw(30), bH.pw(7), bH.pw(16), bH.pw(18), bH.pw(11), bH.pw(12))
			}
			t.u(29), bn.y.aF3(!0)
		}
	}, this.aUB = function(a1z) {
		if (a1z !== b0.y.a22) b0.y.close(a1z, 3239);
		else if (bn.a21) {
			bn.y.aF1[0] = bH.pw(20), bn.y.aF1[1] = bH.pw(20);
			for (var aUV = bH.pw(16), fL = 0; fL < aUV; fL++) {
				var id = bH.pw(3);
				0 === id ? bn.uE.aDp(bH.pw(2), bH.pw(30), bG.wt.xB(5), 0, 1234566, 127, 0, bH.pw(18), 0, bH.pw(12)) : 1 === id ? bn.uE.aE8(bH.pw(16), bH.pw(2)) : 2 === id ? bn.uE.aE4(bH.pw(16), bH.pw(2), bH.pw(2)) : 3 === id ? bn.uE.aE7(bH.pw(
					16), bH.pw(2)) : 4 === id ? bn.uE.aDx(bH.pw(16), bH.pw(2), bH.pw(4), bH.pw(30), bH.pw(7), bH.pw(16), bH.pw(11), bH.pw(18)) : 5 === id && bn.uE.aDy(bH.pw(16), bH.pw(2), bH.pw(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var rt = bn.y.ru[aB];
				if (rt.tx = bH.pw(10), 0 === rt.tx) {
					if (rt.a29 = bH.pw(10), rt.aER = bH.pw(10), bn.aDd.dl(aB)) return;
					rt.ei = bH.pw(6), rt.mapSeed = bH.pw(14), rt.aEN = bH.pw(4), rt.aG7 = bH.pw(6), rt.aG8 = bH.pw(4), rt.aET = bH.pw(1), rt.aFB = bH.pw(12), rt.spawningSeed = bH.pw(14), rt.aG9.push(rt.aG9[0]), rt.aG9.shift()
				}
			}
			bn.y.aEJ()
		} else b0.y.close(a1z, 3251)
	}, this.aUC = function(a1z) {
		if (a1z !== b0.y.a22) b0.y.close(a1z, 3272);
		else if (bn.a21) {
			for (var rr = bH.pw(4), rt = bn.y.ru[rr], rv = rt.rv, uU = (rt.rw = bH.pw(20), bH.pw(6)), aB = 0; aB < uU; aB++) {
				var aGQ = aUW();
				bn.s4.aGP(aGQ), rv.push(aGQ)
			}
			bn.y.aFC(rr)
		} else b0.y.close(a1z, 3273)
	}, this.aUD = function(a1z) {
		a1z !== b0.y.a22 ? b0.y.close(a1z, 3276) : bn.a21 ? bn.message.aEH(aUW()) : b0.y.close(a1z, 3277)
	}
}

function aTQ() {
	this.aU3 = function() {
		for (var id = bH.pw(20), colors = new Array(11), aB = 0; aB < 11; aB++) colors[aB] = new Uint8Array([bH.pw(8), bH.pw(8), bH.pw(8)]);
		var ec = bG.wt.xB(8);
		bU.eK.eZ({
			id: id,
			colors: colors,
			ec: ec
		})
	}, this.aUE = function(a1z) {
		var f5 = bH.pw(5),
			f5 = bi.aUX.aUY(f5, bH.pw(30), bH.pw(30), bH.pw(30));
		b0.eX.aUZ(a1z, f5)
	}, this.aU4 = function(a1z) {
		var aUJ, rK, aUa;
		bH.aUQ(165) ? (aUJ = bH.pw(3), rK = bi.aUX.eV(bH.pw(30), bH.pw(30)), aUa = bi.aUX.aUY(bH.pw(5), bH.pw(30), bH.pw(30), bH.pw(30)), b0.eX.aUb(a1z, rK, aUa, aUJ), 0 < aUJ || (0 === a1z && 0 === bj.eO.data[105].value.length ? b0.eX.eY(0) : b0
			.aG3.aUc(a1z), 4 === b0.y.aTa(a1z).aUd() ? 6 === aa.a24() && b0.aFV.aH0(a1z) : 5 !== b0.y.aTa(a1z).aUd() || 8 !== aa.a24() && 10 !== aa.a24() || b0.pI.aHP())) : b0.y.aTr(a1z, 3269)
	}, this.aU6 = function(a1z) {
		var id = bH.pw(6);
		1 === id ? (bj.sG.sH(160, bH.pw(30)), b0.y.aTo(a1z), aT.aAD || b0.eX.eY(1), b7.aD6(), 8 === t.t5 && t.a5u().aR0()) : 21 === id ? 8 === t.t5 && t.a5u().aDA(17) : 22 === id && (bj.sG.sH(106, bj.eO.data[110].value), bj.sG.sH(110, ""), 8 ===
			t.t5) && t.a5u().aDA(15)
	}, this.aUA = function() {
		var f2 = bH.pw(16),
			aUe = bH.pw(16);
		if (bH.aUQ(55 + 10 * f2 + 16 * aUe)) {
			for (var g = [], aB = 0; aB < f2; aB++) g.push(bG.wr.wv(bH.pw(10)));
			b7.aD9(g)
		} else b0.y.aTr(0, 3270)
	}
}

function aTG() {
	this.aTb = function(a1z, aTZ) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aTZ ? 1 : 0), bD.a8(3, 0 === aD.a0p ? bn.a21 ? 6 : 0 : aD.hA ? 1 : aD.kg ? 7 : aD.ke < 7 ? 2 : 8 === aD.ke ? 4 : 9 === aD.ke ? 5 : 3), b0.y.send(a1z, bD.aC)
	}, this.aHP = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a22), bD.a8(10, ax.aER), bD.a8(9, ax.aHI), bD.a8(10, l.dz), bD.a8(14, l.dp), b0.y.send(b0.y.a29, bD.aC)
	}, this.pJ = function(eo) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eo), b0.y.send(b0.y.a29, bD.aC)
	}, this.pK = function(ib, jV) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, ib), bD.a8(10, jV), b0.y.send(b0.y.a29, bD.aC)
	}, this.pO = function(ib, pM) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, ib), bD.a8(9, pM), b0.y.send(b0.y.a29, bD.aC)
	}, this.pQ = function(ib, pP) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, ib), bD.a8(27, pP), b0.y.send(b0.y.a29, bD.aC)
	}, this.pS = function(ib, nI) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, ib), bD.a8(16, nI), b0.y.send(b0.y.a29, bD.aC)
	}, this.pV = function(jV) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jV), b0.y.send(b0.y.a29, bD.aC)
	}, this.pZ = function(eA) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, eA), b0.y.send(b0.y.a29, bD.aC)
	}, this.pb = function(pa) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pa), b0.y.send(b0.y.a29, bD.aC)
	}, this.pd = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a29, bD.aC)
	}, this.pe = function(ib, eo, jV) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, ib), bD.a8(10, jV), bD.a8(22, eo), b0.y.send(b0.y.a29, bD.aC)
	}, this.pm = function(aUf, aUg) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aUg), bD.a8(10, aUf), b0.y.send(b0.y.a29, bD.aC)
	}, this.pp = function(a7Q) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a7Q), b0.y.send(b0.y.a29, bD.aC)
	}, this.pt = function(aUh, target) {
		var aB, f2 = aUh.length;
		for (bD.a7(14 + 9 * f2), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < f2; aB++) bD.a8(9, aUh[aB]);
		b0.y.send(b0.y.a29, bD.aC)
	}
}

function aTJ() {
	this.aUi = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.eX.aUj(), b0.y.send(0, bD.aC)
	}, this.aUc = function(a1z) {
		bD.a7(127), bD.a8(1, 0), bD.a8(6, 17), bG.t8.x7(bj.eO.data[105].value, 5), bG.t8.x7(bj.eO.data[106].value, 15), b0.y.send(a1z, bD.aC)
	}, this.aR1 = function() {
		bD.a7(97), bD.a8(1, 0), bD.a8(6, 18), bG.t8.x7(bj.eO.data[110].value, 15), b0.y.send(0, bD.aC)
	}, this.aQy = function(a4h) {
		var f2 = a4h.qV.length;
		bD.a7(21 + 16 * f2), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a4h.t7), bD.a8(8, f2), bF.wr.x6(a4h.qV), b0.y.send(0, bD.aC)
	}, this.aSa = function(wg, colors, aUl, ec) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 16), bE.a8(20, Math.min(wg, 1e6));
		for (var aB = 0; aB < 11; aB++)
			for (var fL = 0; fL < 3; fL++) bE.a8(8, colors[aB][fL]);
		wg = b7.data.aDD(aUl.trim());
		bE.a8(8, -1 === wg ? 255 : wg), bF.wt.a0H(ec.trim().substring(0, 180), 8, bE), b0.y.send(0, bE.aUm())
	}, this.aPI = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.t7), bG.t8.x7(data.t3, 5), b0.y.send(0, bD.aC)
	}, this.aG4 = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.t7), bG.t8.x7(data.t3, 5), bD.aUN(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aTK() {
	this.pu = function() {
		for (var f2 = aD.kM, a0e = bR.result.a0e, lH = a0e.length, a1R = (bD.a7(17 + 16 * f2 + 33 * lH), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, lH), bD.a8(1, +(2 === aD.a0m)), bD.a8(1, aD.a17 % 2), ag.a1R), aB = 0; aB < f2; aB++) bD.a8(16, a1R[
		aB]);
		for (var gp = ag.gp, aB = 0; aB < lH; aB++) {
			var gZ = a0e[aB];
			bD.a8(9, gZ), bD.a8(24, gp[gZ])
		}
		b0.y.send(b0.y.a29, bD.aC)
	}
}

function aTL() {
	this.aQr = function(tO, tP, tQ) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tO), bD.a8(1, +(tP < 0)), bD.a8(1, +(tQ < 0)), bD.a8(30, Math.abs(tP)), bD.a8(30, Math.abs(tQ)), b0.y.send(0, bD.aC)
	}, this.aQs = function(tO, aQt, aQu) {
		bD.a7(18 + 16 * aQt.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tO), b0.eX.aUn(aQt), bD.a8(30, aQu), b0.y.send(0, bD.aC)
	}, this.aQx = function(tO, aQt, aQu) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tO), bG.t8.x7(aQt, 5), bD.a8(30, aQu), b0.y.send(0, bD.aC)
	}, this.aQv = function(aPz, a1Y) {
		for (var f2 = a1Y.length, hy = 0, aB = 0; aB < f2; aB++) hy += a1Y[aB].length;
		for (bD.a7(21 + 3 * f2 + 16 * hy), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aPz), bD.a8(4, f2), bD.a8(7, hy), aB = 0; aB < f2; aB++) bD.a8(3, a1Y[aB].length), bF.wr.x6(a1Y[aB]);
		b0.y.send(0, bD.aC)
	}, this.aQw = function(aPz, tP, tQ) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aPz), bD.a8(1, +(tP < 0)), bD.a8(1, +(tQ < 0)), bD.a8(20, Math.abs(tP)), bD.a8(20, Math.abs(tQ)), b0.y.send(0, bD.aC)
	}
}

function aTH() {
	this.aH0 = function(a1z) {
		var username = bj.eO.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + bi.aUo.pw()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dz), bD.a8(2, bj.eO.data[158].value), b0.eX.aUn(username), bA.color.a3m(bj.y.wV()));
		bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), bi.aUo.a0H(), b0.y.a22 = a1z, b0.y.send(a1z, bD.aC)
	}, this.aFW = function(aUq, a4h) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aUq), 2 === aUq ? bE.a8(2, a4h) : 3 === aUq ? bF.wt.a0H(a4h, 7, bE) : 5 === aUq && (bE.a8(3, a4h.id), bE.a8(3, a4h.value), bE.a8(30, a4h.t3)), b0.y.send(b0.y.a22, bE.aUm())
	}
}

function aTI() {
	this.aTn = function(a1z) {
		var aUw;
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dp), bD.a8(4, a0.id), bD.a8(7, a0.dv), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), aUw = b7.aDC(), bD.a8(8, aUw[0]), bD.a8(8, aUw[1]), b0.y.send(a1z, bD.aC)
	}, this.aUb = function(a1z, rK, aUa, aUJ) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aUJ), bD.a8(30, rK[0]), bD.a8(30, rK[1]), bD.a8(30, aUa), b0.y.send(a1z, bD.aC)
	}, this.aUZ = function(a1z, rK) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, rK), b0.y.send(a1z, bD.aC)
	}, this.eY = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.uk = function(id, value) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 3), bD.a8(6, id), bD.a8(30, value), b0.y.send(0, bD.aC)
	}, this.aD8 = function(id, qV) {
		var f2 = Math.min(qV.length, 63);
		bD.a7(19 + 16 * f2), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, f2), bF.wr.x6(qV), b0.y.send(0, bD.aC)
	}, this.aUs = function(aUt, qg) {
		bD.a7(7 + 26 * qg.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qg.length; aB++) bD.a8(16, qg[aB][0]), bD.a8(10, qg[aB][1]);
		b0.y.send(aUt, bD.aC)
	}, this.aTu = function(aUu, aUv) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aUu), bD.a8(12, aUv), b0.y.send(b0.y.a29, bD.aC)
	}, this.aUn = function(username) {
		bD.a8(5, username.length), bF.wr.x6(username)
	}
}

function aTl() {
	var aUx, aUy, b, aUz = ["wss://", "/s50/", "/s51/", "/s52/"],
		aV0 = 0;

	function aTm() {
		b0.y.aTm(aUx, aUy)
	}

	function aV3(e) {
		b0.a7Q.aTw(aUx, new Uint8Array(e.data))
	}

	function aV4() {}

	function aTt(e) {
		b0.y.aTt(aUx, e)
	}
	this.dd = function(eA, aO6, aTh) {
		aUx = eA, aUy = aO6,
			function(aTh) {
				aTh = __fx.customLobby.isActive() ? __fx.customLobby.getSocketURL() : l.dq ? "ws://localhost:" + (7130 + aUx) + "/" : aTh ? aUz[0] + "game.territorial.io/x0" + aUx + "/" : aUz[0] + b0.y.aTV[aUx] + aUz[1 + l.dr];
				(b = new WebSocket(aTh)).binaryType = "arraybuffer", b.onopen = aTm, b.onmessage = aV3, b.onclose = aTt, b.onerror = aV4
			}(aTh)
	}, this.aV2 = function() {
		return b.readyState === b.CONNECTING
	}, this.eW = function() {
		return b.readyState === b.OPEN
	}, this.aTd = function() {
		return aV0
	}, this.aTo = function() {
		aV0 = 1
	}, this.aTj = function() {
		return this.aV2() || this.eW()
	}, this.aTk = function(aO6) {
		aUy = aO6
	}, this.aUd = function() {
		return aUy
	}, this.send = function(aC) {
		this.eW() && b.send(aC)
	}, this.close = function(aTq) {
		this.aTj() && (this.s5(), b.close(aTq))
	}, this.s5 = function() {
		b.onopen = null, b.onmessage = null, b.onclose = null, b.onerror = null
	}
}

function dK() {
	var gap, aV5 = !1,
		aV6 = 0,
		i = 0,
		tC = 0,
		canvas = null,
		z3 = null,
		a3M = null;

	function aVA() {
		for (var aB = aD.y5; 0 <= aB; aB--) a3M[aB] = 0;
		for (aB = al.ks - 1; 0 <= aB; aB--) a3M[bg.f0[al.kx[aB]]] += ag.gp[al.kx[aB]];
		aV5 = !0
	}

	function aV8() {
		for (var aVF, aVD = 0, f2 = 0, ea = Math.floor(i / 2), e9 = Math.floor(tC / 2), aVE = 1.5 * Math.PI, aB = aD.y5; 0 <= aB; aB--) f2 += a3M[aB], 0 === a3M[aB] && aVD++;
		if (aV5 = !1, z3.clearRect(0, 0, i, i), 0 < f2)
			if (aVD === aD.y5) {
				for (aB = aD.y5; 0 <= aB; aB--)
					if (0 < a3M[aB]) {
						! function(aB, ea, e9) {
							z3.fillStyle = bg.aVM[bg.kj[aB]], z3.beginPath(), z3.arc(ea, ea, e9, 0, 2 * Math.PI), z3.fill()
						}(aB, ea, e9);
						break
					}!
				function(ea) {
					var fontSize = ea / 3;
					z3.font = bA.qo.sf(1, fontSize), z3.fillStyle = bB.nv, z3.fillText("100%", ea, ea + .1 * fontSize)
				}(ea)
			} else {
				for (aB = 0; aB <= aD.y5; aB++) 0 < a3M[aB] && (! function(aB, ea, e9, aVE, aVF) {
					z3.fillStyle = bg.aVM[bg.kj[aB]], z3.beginPath(), z3.arc(ea, ea, e9, aVE, aVF), z3.lineTo(ea, ea), z3.fill()
				}(aB, ea, e9, aVE, aVF = aVE + 2 * Math.PI * a3M[aB] / f2), function(ea, e9, aVE, aVF) {
					var fT = (aVF - aVE) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e9 * Math.min(fT, .37);
					fontSize < 8 || (aVE = (aVE + aVF) / 2, aVF = (__fx.settings.detailedTeamPercentage ? (100 * fT).toFixed(2) : Math.floor(100 * fT + .5)) + "%", e9 *= .525 - Math.max(.6 * (fT - .7), 0), z3.font = bA.qo.sf(1, fontSize), z3
						.fillStyle = bB.nv, z3.fillText(aVF, ea + Math.cos(aVE) * e9, ea + Math.cos(aVE + 1.5 * Math.PI) * e9))
				}(ea, e9, aVE, aVF), 0 !== aB && aVK(ea, e9, aVE), aVE = aVF);
				aVK(ea, e9, 1.5 * Math.PI)
			}!
		function(ea, e9) {
			z3.beginPath(), z3.arc(ea, ea, e9, 0, 2 * Math.PI), z3.stroke()
		}(ea, e9)
	}

	function aVK(ea, e9, aVN) {
		z3.beginPath(), z3.moveTo(ea, ea), z3.lineTo(ea + Math.cos(aVN) * e9, ea + Math.cos(aVN + 1.5 * Math.PI) * e9), z3.stroke()
	}
	this.dd = function() {
		if (aD.hv) {
			aV6 = 0, a3M = new Uint32Array(aD.y5 + 1);
			for (var aB = aD.y5; 0 <= aB; aB--) a3M[aB] = 0;
			for (aB = al.ks - 1; 0 <= aB; aB--) a3M[bg.f0[al.kx[aB]]] += 1;
			this.resize()
		} else a3M = z3 = canvas = null
	}, this.a8l = function() {
		return i
	}, this.resize = function() {
		aD.hv && (i = Math.floor(.95 * (a0.a1.iA() && !aD.nO ? .18 * h.min : .13 * h.iB)), i = (i *= 1 + (.5 + .2 * a0.a1.iA()) * aD.nO) + i % 2, gap = Math.max(1, .015 * i), tC = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (z3 = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, z3.strokeStyle = bB.nv, bA.qo.textAlign(z3, 1), bA.qo.textBaseline(z3, 1), aV8())
	}, this.kt = function(aV9) {
		aV9 && aVA();
		var ds, aV9 = this.kv();
		return bg.kj[aV9] || (aV9 = function() {
			for (var ku = -1, aB = aD.y5; 1 <= aB; aB--)(-1 === ku || a3M[aB] > a3M[ku]) && (ku = aB);
			return ku
		}(), ds = ag.gp[lx[0]], -1 !== aV9 && a3M[aV9] > ds) ? a3M[aV9] : ds
	}, this.a1m = function() {
		return aV6 = 31, this.eV(), this.kv()
	}, this.kv = function() {
		for (var ku = 0, aB = aD.y5; 0 < aB; aB--) a3M[aB] > a3M[ku] && (ku = aB);
		return ku
	}, this.kN = function(aVC) {
		for (var gU = 0, kx = al.kx, f0 = bg.f0, f2 = al.ks, ff = bO.ff, aB = 0; aB < f2; aB++) {
			var gZ = kx[aB];
			f0[gZ] === aVC && (ff[gU++] = gZ)
		}
		bO.fW[0] = gU
	}, this.kw = function(aVC) {
		for (var gU = 0, kx = al.kx, f0 = bg.f0, f2 = al.ks, ff = bO.ff, aB = 0; aB < f2; aB++) {
			var gZ = kx[aB];
			f0[gZ] !== aVC && (ff[gU++] = gZ)
		}
		bO.fW[0] = gU
	}, this.a4F = function() {
		for (var gU = 0, aB = aD.y5; 0 <= aB; aB--) gU += 0 < a3M[aB];
		return gU
	}, this.eV = function() {
		aD.hv && 32 <= ++aV6 && (aV6 = 0, aVA())
	}, this.mi = function() {
		aD.hv && aV5 && aV8()
	}, this.vR = function() {
		aD.hv && (aD.nO ? vS.drawImage(canvas, bc.gap, bc.gap) : vS.drawImage(canvas, bc.gap, a8k + 2 * bc.gap))
	}
}

function da() {
	function aVT(f9, f2, fB, a0R, aA2, fS) {
		if (!(fB < 1 || aA2 < fB))
			for (var aB = 0; aB <= f2; aB++) {
				var eg = bM.ih(f9, fB);
				if (a0R(eg)) return eg >> 2;
				f9 += fS
			}
		return -1
	}

	function aVX(fB, f2, f9, a0R, aVR, fS) {
		if (!(f9 < 1 || aVR < f9)) {
			f2 = Math.max(f2, 0);
			for (var aB = 0; aB <= f2; aB++) {
				var eg = bM.ih(f9, fB);
				if (a0R(eg)) return eg >> 2;
				fB += fS
			}
		}
		return -1
	}

	function aVb(iS, iT, aVO) {
		return -1 !== iT && (-1 === iS || bM.iU(iT, aVO) < bM.iU(iS, aVO)) ? iT : iS
	}
	this.hQ = function(aVO) {
		return this.a0t(aVO, function(eg) {
			return ac.ex(eg)
		})
	}, this.hW = function(aVO) {
		return this.a0t(aVO, function(eg) {
			return ac.aII(eg, aD.em)
		})
	}, this.a0t = function(aVO, a0R) {
		return function(aVO, aVP, a0R) {
			for (var hG = bM.fA(aVO), hI = bM.fC(aVO), aVR = bS.fD - 2, aA2 = bS.fE - 2, aVS = -1, f5 = 0; f5 < aVP; f5++) {
				var aA1 = Math.max(hG - f5, 1),
					aMQ = Math.max(hI - f5, 1),
					yg = Math.min(hG + f5, aVR),
					yf = Math.min(hI + f5, aA2),
					iS = aVT(hG, yg - hG, hI - f5, a0R, aA2, 1),
					iT = aVT(hG - 1, hG - aA1 - 1, hI - f5, a0R, aA2, -1),
					yg = aVT(hG, yg - hG, hI + f5, a0R, aA2, 1),
					aA1 = aVT(hG - 1, hG - aA1 - 1, hI + f5, a0R, aA2, -1),
					aVW = aVX(hI, yf - hI - 1, hG - f5, a0R, aVR, 1),
					aVY = aVX(hI - 1, hI - aMQ - 2, hG - f5, a0R, aVR, -1),
					yf = aVX(hI, yf - hI - 1, hG + f5, a0R, aVR, 1),
					aMQ = aVX(hI - 1, hI - aMQ - 2, hG + f5, a0R, aVR, -1);
				if (aVS = aVb(aVS, iS, aVO), aVS = aVb(aVS, iT, aVO), aVS = aVb(aVS, yg, aVO), aVS = aVb(aVS, aA1, aVO), aVS = aVb(aVS, aVW, aVO), aVS = aVb(aVS, aVY, aVO), aVS = aVb(aVS, yf, aVO), 0 <= (aVS = aVb(aVS, aMQ, aVO)) && f5 *
					f5 >= bM.iU(aVS, aVO)) return aVS
			}
			return -1
		}(aVO, bM.i8(), a0R)
	}
}

function d3() {
	function aVd(key) {
		var aSc;
		return "undefined" == typeof URLSearchParams || (aSc = window.location.search, "string" != typeof(aSc = new URLSearchParams(aSc).get(key))) || aSc.length < 1 ? null : aSc
	}
	this.dl = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aVd("account");
				if (!value && !(value = aVd("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.t5, new t6(1e3, {
					t7: 0,
					t3: value,
					t4: 0
				})), 1
			}()) {
			var value = aVd("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1w = new URL(window.location.href);
		a1w.search = "";
		try {
			return history.replaceState(null, "", a1w.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aPV = function(key, value) {
		if (0 === a0.id) try {
			var a1w = new URL(window.location.href),
				gZ = a1w.searchParams;
			gZ.set(key, value), a1w.search = gZ.toString(), history.replaceState(null, "", a1w.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aVf, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.dt(32768 * aB, 100);
		this.a5R(0)
	}, this.value = function(gZ) {
		return g[gZ]
	}, this.aMI = function() {
		return bL.dt(aVf - 1, 2)
	}, this.a5R = function(aLw) {
		aVf = 2 * aLw % 32768 + 1
	}, this.random = function() {
		return aVf = 167 * aVf % 32768
	}, this.jd = function(mq) {
		return bL.dt(mq * this.random(), 32768)
	}, this.kE = function(gZ) {
		return 0 !== gZ && this.random() < this.value(gZ)
	}, this.iz = function(fL, fM) {
		return fL + this.jd(fM - fL)
	}
}

function cz() {
	this.q8 = new aVg, this.a5b = new aVh, this.aJY = new aVi, this.dd = function() {
		aD.hA || this.q8.dd()
	}, this.eV = function() {
		aD.hA || (this.q8.eV(), 3 !== t.t5) || bf.kJ() % 15 != 5 && 2 !== aD.a0p || t.a5u().aSd()
	}, this.aSg = function() {
		0 === aD.a0p && aa.aHA(), aD.a5L.a5k(), aD.data.canvas = null, b0.y.close(b0.y.a29, 3257), b0.y.a29 = 0, aD.data.isReplay = 1, aD.a5P()
	}, this.aSf = function(qV) {
		var aB = qV.indexOf("=");
		return 0 <= aB ? qV.substring(aB + 1) : qV
	}, this.aSe = function(qV) {
		return qV
	}
}

function aVg() {
	this.aVk = null, this.aVl = null, this.aVm = null, this.aVn = null, this.aVo = null, this.aVp = null, this.a5a = "";
	var aVq = 0;
	this.dd = function() {
		this.aVk = [], this.aVl = [], this.aVm = [], this.aVn = [], this.aVo = [0], this.aVp = [0], aVq = 0, this.a5a = ""
	}, this.q9 = function(id, fk, fm, fo) {
		aD.hA || 2 === aD.a0p || (0 === this.aVo[aVq] && (this.aVp[aVq] ? (this.aVo.push(1), this.aVp.push(0), aVq++) : this.aVo[aVq] = 1), this.aVk.push(id), this.aVl.push(fk), this.aVm.push(void 0 === fm ? 0 : fm), this.aVn.push(void 0 === fo ?
			0 : fo), this.aVp[aVq]++)
	}, this.eV = function() {
		0 === this.aVo[aVq] ? this.aVp[aVq]++ : (this.aVo.push(0), this.aVp.push(0), aVq++)
	}
}

function aVi() {
	var aVr = 0;

	function aVv(qV, id) {
		aVr || (id ? 1 === id ? aN.a6t = L(475) + ": " + qV : t.u(4, 3, new v(L(476), qV, 1)) : t.u(4, 3, new v("⚠️ " + L(474), qV, 1)))
	}
	this.xB = function(qV, aVs) {
		var iK, qg;
		return aVr = aVs, bG.t8.x3(bG.t8.x1(bG.t8.wz(qV))), aN.a6t = "", !! function() {
			if (bH.size < 10) aVv("File Too Small");
			else {
				var aVx = bH.pw(12),
					r = (aVx !== l.rVersion && (r = "Incompatible Version   Required: " + l.rVersion, aVv(r = (r += "   Found: " + aVx) + ("   Compatible at " + b0.y.a1G() + "/" + aVx), 1)), bH.pw(12)),
					aVy = bH.pw(31);
				if (aVy !== bH.size) aVv("Size Error: " + aVy + " " + bH.size);
				else if (function(j, aVx) {
						for (var gZ = bH.aC, f2 = bH.size, aUv = aVx, aB = 3; aB < f2; aB++) aUv = aUv + gZ[aB] & 4095;
						return aUv === j || (aVv("Hash Error: " + aUv + " " + j + " " + f2), !1)
					}(r, aVx)) return 1
			}
			return
		}() && (iK = bH, (qg = aD.data = new a5K).mapType = iK.pw(2), qg.mapProceduralIndex = iK.pw(8), qg.mapRealisticIndex = iK.pw(8), qg.mapSeed = iK.pw(14), qg.mapName = iK.aW0(5), 2 === qg.mapType && iK.aW1(), qg.passableWater = iK.pw(
			1), qg.passableMountains = iK.pw(1), qg.playerCount = iK.pw(10), qg.humanCount = iK.pw(10), qg.selectedPlayer = iK.pw(9), qg.gameMode = iK.pw(1), qg.playerMode = iK.pw(2), qg.battleRoyaleMode = iK.pw(2), qg.numberTeams = iK.pw(4),
			qg.isZombieMode = iK.pw(1), qg.isContest = iK.pw(1), qg.isReplay = iK.pw(1), qg.elo = iK.aW2(2, 14, 2), qg.colorsType = iK.pw(1), qg.colorsPersonalized = iK.pw(1), qg.colorsData = iK.aW2(10, 18, 512), qg.selectableColor = iK.pw(
			1), qg.teamPlayerCount = iK.aW2(4, 10, 9), qg.neutralBots = iK.pw(1), qg.botDifficultyType = iK.pw(2), qg.botDifficultyValue = iK.pw(4), qg.botDifficultyTeam = iK.aW2(4, 4, 9), qg.botDifficultyData = iK.aW2(10, 4, 512), qg
			.spawningType = iK.pw(2), qg.spawningSeed = iK.pw(14), qg.spawningData = iK.aW2(11, 12, 1024), qg.selectableSpawn = iK.pw(1), qg.playerNamesType = iK.pw(2), qg.playerNamesData = iK.aW3(10, 5, 512), qg.selectableName = iK.pw(1), qg
			.aIncomeType = iK.pw(2), qg.aIncomeValue = iK.pw(8), qg.aIncomeData = iK.aW2(10, 8, 512), qg.tIncomeType = iK.pw(2), qg.tIncomeValue = iK.pw(8), qg.tIncomeData = iK.aW2(10, 8, 512), qg.iIncomeType = iK.pw(2), qg.iIncomeValue = iK
			.pw(8), qg.iIncomeData = iK.aW2(10, 8, 512), qg.sResourcesType = iK.pw(2), qg.sResourcesValue = iK.pw(11), qg.sResourcesData = iK.aW2(10, 11, 512), qg.a5i = iK.aW2(10, 30, 0), !! function() {
				var iK = bH,
					xC = iK.pw(5),
					aW4 = iK.pw(30),
					aW5 = iK.pw(30);
				if (aW4 + aW5 > 8 * iK.size) return void aVv("Corrupted File");
				return function(f2) {
						var aW8 = new Uint8Array(f2),
							aW9 = new Uint16Array(f2),
							aWA = new Uint32Array(f2),
							aWB = new Uint32Array(f2);
						b9.q8.aVk = aW8, b9.q8.aVl = aW9, b9.q8.aVm = aWA, b9.q8.aVn = aWB;
						for (var aB = 0; aB < f2; aB++) {
							var id = bH.pw(4);
							aW8[aB] = id, aW9[aB] = bH.pw(9), 0 === id ? aWA[aB] = bH.pw(22) : 1 === id ? (aWA[aB] = bH.pw(10), aWB[aB] = bH.pw(10)) : 2 === id ? (aWA[aB] = bH.pw(10), aWB[aB] = bH.pw(9)) : 3 === id ? (aWA[aB] = bH.pw(10),
								aWB[aB] = bH.pw(27)) : 4 === id ? (aWA[aB] = bH.pw(10), aWB[aB] = bH.pw(16)) : 5 === id || 6 === id ? aWA[aB] = bH.pw(10) : 7 === id ? aWA[aB] = bH.pw(1) : 10 === id && (aWA[aB] = bH.pw(20), aWB[aB] = bH
								.pw(22))
						}
					}(aW4),
					function(f2, xC) {
						var aVo = new Uint8Array(f2),
							aVp = new Array(f2);
						aVp.fill(0), b9.q8.aVo = aVo, b9.q8.aVp = aVp;
						for (var aB = 0; aB < f2; aB++) aVo[aB] = bH.pw(1), aVp[aB] = bH.pw(xC)
					}(aW5, xC), 1
			}()) && (bH.eA < 8 * bH.size - 13 || bH.eA > 8 * bH.size ? (aVv("Out Of Bounds Error: " + bH.eA + " " + 8 * bH.size), !1) : (b9.q8.a5a = qV, 2 !== aD.data.mapType || (aVv("Load base64 image...", 2), aVs)))
	}, this.aJZ = function(aIz, aVw) {
		var a3h = document.createElement("canvas"),
			i3 = a3h.getContext("2d");
		if (a3h.width = aIz.width, a3h.height = aIz.height, i3.drawImage(aIz, 0, 0), aD.data.canvas = a3h, aVr || aVw) return aD.a0p ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aSg()
	}
}

function aVh() {
	this.a0H = function() {
		var xC = function() {
				for (var aVp = b9.q8.aVp, f2 = aVp.length, max = 0, aB = 0; aB < f2; aB++) max = Math.max(max, aVp[aB]);
				return xJ(Math.max(max, 1))
			}(),
			i = (qg = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.eA += 43, i.a8(2, qg.mapType), i.a8(8, qg.mapProceduralIndex), i.a8(8, qg.mapRealisticIndex), i.a8(14, qg.mapSeed), i.aWI(qg.mapName, 5), 2 === qg.mapType && i.aWJ(qg.canvas),
				i.a8(1, qg.passableWater), i.a8(1, qg.passableMountains), i.a8(10, qg.playerCount), i.a8(10, qg.humanCount), i.a8(9, qg.selectedPlayer), i.a8(1, qg.gameMode), i.a8(2, qg.playerMode), i.a8(2, qg.battleRoyaleMode), i.a8(4, qg
					.numberTeams), i.a8(1, qg.isZombieMode), i.a8(1, qg.isContest), i.a8(1, qg.isReplay), i.dj(qg.elo, 2, 14), i.a8(1, qg.colorsType), i.a8(1, qg.colorsPersonalized), i.dj(qg.colorsData, 10, 18), i.a8(1, qg.selectableColor), i.dj(
					qg.teamPlayerCount, 4, 10), i.a8(1, qg.neutralBots), i.a8(2, qg.botDifficultyType), i.a8(4, qg.botDifficultyValue), i.dj(qg.botDifficultyTeam, 4, 4), i.dj(qg.botDifficultyData, 10, 4), i.a8(2, qg.spawningType), i.a8(14, qg
					.spawningSeed), i.dj(qg.spawningData, 11, 12), i.a8(1, qg.selectableSpawn), i.a8(2, qg.playerNamesType), i.aWK(qg.playerNamesData, 10, 5), i.a8(1, qg.selectableName), i.a8(2, qg.aIncomeType), i.a8(8, qg.aIncomeValue), i.dj(qg
					.aIncomeData, 10, 8), i.a8(2, qg.tIncomeType), i.a8(8, qg.tIncomeValue), i.dj(qg.tIncomeData, 10, 8), i.a8(2, qg.iIncomeType), i.a8(8, qg.iIncomeValue), i.dj(qg.iIncomeData, 10, 8), i.a8(2, qg.sResourcesType), i.a8(11, qg
					.sResourcesValue), i.dj(qg.sResourcesData, 10, 11), i.dj(qg.a5i, 10, 30), ! function(xC) {
					var i = bE,
						aVk = b9.q8.aVk,
						fk = b9.q8.aVl,
						fm = b9.q8.aVm,
						fo = b9.q8.aVn,
						f2 = aVk.length;
					i.a8(5, xC), i.a8(30, f2), i.a8(30, b9.q8.aVp.length);
					for (var aB = 0; aB < f2; aB++) {
						var ea = aVk[aB];
						i.a8(4, ea), i.a8(9, fk[aB]), 0 === ea ? i.a8(22, fm[aB]) : 1 === ea ? (i.a8(10, fm[aB]), i.a8(10, fo[aB])) : 2 === ea ? (i.a8(10, fm[aB]), i.a8(9, fo[aB])) : 3 === ea ? (i.a8(10, fm[aB]), i.a8(27, fo[aB])) : 4 === ea ? (i
							.a8(10, fm[aB]), i.a8(16, fo[aB])) : 5 === ea || 6 === ea ? i.a8(10, fm[aB]) : 7 === ea ? i.a8(1, fm[aB]) : 10 === ea && (i.a8(20, fm[aB]), i.a8(22, fo[aB]))
					}
				}(xC), ! function(xC) {
					for (var i = bE, aVo = b9.q8.aVo, aVp = b9.q8.aVp, f2 = aVo.length, aB = 0; aB < f2; aB++) i.a8(1, aVo[aB]), i.a8(xC, aVp[aB])
				}(xC), bE.eA),
			qg = bL.dt(i - 1, 6) + 1,
			xC = (bD.aUO(6 * qg) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.eA = 24, i.a8(31, i.g.length), i.eA = 12, i.a8(12, function() {
					for (var g = bE.g, f2 = g.length, aUv = l.rVersion, aB = 3; aB < f2; aB++) aUv = aUv + g[aB] & 4095;
					return aUv
				}())
			}(), bH.dd(bE.g), bF.t8.t9(bF.t8.tA(qg)));
		return bH.uV(), bE.dd(), xC
	}
}

function cp() {
	var ea, bu = !1,
		aWM = !1,
		aWN = -1e4,
		aWO = -1,
		aWP = 0;

	function resize(aWT) {
		ea = 0, ab.tX() && (aWR(aWT) || bu) && (bu = !1, bc.resize(), bW.aCi.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a0p ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a9r()) : (aa.aHC(), aa.aHD()), bf.dk = !0)
	}

	function aWQ(fT) {
		return fT && 128 < fT ? Math.floor(fT) : 128
	}

	function aWR(aWT) {
		var i, j, aWV, tC, a9F;
		if (!(0 < h.sn)) return tC = aWQ(document.documentElement.clientWidth), a9F = aWQ(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = tC, j = a9F, aWV = 0 !== a0.id || i < j ?
			700 : 1200, aWV = Math.min(aWV / ((i + j) / 2), 1), aWV = 0 === bj.eO.data[1].value ? 2 * aWV / 3 : Math.min(aWV + (bj.eO.data[1].value - 1) * (1 - aWV) / 2, 1), h.k = (window.devicePixelRatio || 1) * aWV, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aWT && !aWM ? (aWM = !0, t.removeChild(document.body, a2M)) : aWM && (aWM = !1, document.body.appendChild(a2M)), i = Math.floor(.5 + tC * h.k), j = Math.floor(.5 + a9F * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aCK(i, j), h.max = a78(i, j), h.iB = bL.dt(i + j, 2), h.vO = i / j, a2M.width = i, a2M.height = j, a2M.style.width = tC + "px", a2M.style.height = a9F + "px", aWO = bf.eR + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.iB = 0, this.vO = 1, this.k = 1, this.sn = 0, this.de = function() {
		this.i = aWQ(document.documentElement.clientWidth) + 2, this.j = aWQ(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		ea = 1, a2M = document.getElementById("canvasA"), 2 === a0.id && (a2M.style.webkitUserSelect = "none"), (vS = a2M.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aWR(0)
	}, this.eV = function() {
		50 <= ++ea && resize(0), -1 === aWO || bf.eR < aWO || (aWO = -1, 2e3 * ++aWP >= bf.eR + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dn = function(jb) {
		bu = !0, resize(jb)
	}, this.a31 = function() {
		aWN + 1e3 > bf.eR || (aWN = bf.eR, resize(0))
	}
}

function dH() {
	this.aUX = new aWX, this.a1h = new aWY, this.aUo = new aWZ
}

function aWZ() {
	this.pw = function() {
		return 69
	}, this.a0H = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aWY() {
	this.a1i = function() {
		for (var gZ, f2 = al.ks, a0d = al.kx, a1R = ag.a1R, a93 = this.aIi(), aB = 0; aB < f2; aB++) gZ = a0d[aB], bA.gN.jj(gZ) || (a1R[gZ] = a93);
		var qD = ag.qD,
			jP = ag.jP,
			jQ = ag.jQ,
			a1P = ag.a1P,
			f2 = aD.kM;
		for (aB = 0; aB < f2; aB++)(0 === a1P[aB] || jQ[aB] < 1 || 2 * qD[aB] > 3 * (jP[aB] + jQ[aB])) && (a1R[aB] = 0);
		var a1f = 0;
		for (aB = 0; aB < f2; aB++) a1f += 0 < a1R[aB];
		return a1f
	}, this.aIi = function() {
		return Math.min(65535, bf.kJ())
	}
}

function aWX() {
	function aWd(g, fT, ht) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fT >> (aB + ht) % 30 & 1)) % 256
	}
	this.eV = function(aWa, aWb) {
		var g = new Uint8Array(256);
		return function(g, aWa, aWb) {
				var aB, aWf = 3 + (4 + aWa) % 32768,
					aWg = 12 + aWb % 32768,
					aWh = 17 + ((aWa & aWb) + (aWa | aWb) + aWa) % 32768;
				for (aB = 0; aB < 256; aB++) aWf = 1 + aWf * aWg % aWh, g[aB] = aWf % 256
			}(g, aWa, aWb), aWd(g, aWa, 2), aWd(g, aWb, 7),
			function(g) {
				var aB, fT, eA = 0;
				for (aB = 0; aB < 3e4; aB++) fT = g[eA], g[eA] = (fT + aB + g[(eA + aB) % 256]) % 256, eA = (fT + aB + eA + (fT & eA)) % 256
			}(g),
			function(g) {
				var aB, a9F = 1,
					tv = 1;
				for (aB = 0; aB < 256; aB += 2) a9F = (1 + a9F) * (g[aB] + 1) % 1073741824, tv = (1 + tv) * (g[aB + 1] + 1) % 1073741824;
				return [a9F, tv]
			}(g)
	}, this.aUY = function(aWi, aWj, aWk, result) {
		for (var gU = 1 << aWi, aB = 0; aB < gU; aB++)
			if (this.aWl(aB, aWj, aWk) === result) return aB;
		return 0
	}, this.aWl = function(aWm, aWj, aWk) {
		for (var yE = aWj + aWm, yN = aWk + aWm, fT = yE + yN & 2147483647, fL = 1; fL <= 16; fL++) fT = (fT = (fT ^ fT >> fL) >>> 1 + (3 & yE)) * (7 + (1023 & (yE | yN))) & 1073741823, yN >>= 1 + (1 & (yE >>= 1 + (1 & (fT += 65535 & yN))));
		return fT &= 1073741823
	}
}

function cm() {
	var aWn, aWo, iF, aWp;
	this.dd = function() {
		var aB, f9, fB, aUp, aWq, i, j, z3, i0, xT, fT, gZ, fI, fL, aWt;
		if (function() {
				if (iF = !0, aWp = "rgb(" + bS.xR[0] + "," + bS.xR[1] + "," + bS.xR[2] + ")", bS.aM5(bS.ei)) return 1;
				return iF = !1, 0
			}()) aWo = null;
		else {
			for (aWn = bL.dt(96, 4), aWq = 1 === bS.ei ? (aUp = 0, 160) : (aUp = 128, 32), aWp = "rgb(" + aUp + "," + aUp + "," + aUp + ")", aWo = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aWo[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.fD : aWn, j = aB % 2 == 0 ? aWn : bS.fE + 2 * aWn, aWo[aB].width = i, aWo[aB].height = j, xT = (i0 = (z3 = aWo[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (fB = aWn - 1; 0 <= fB; fB--)
						for (fT = aWq + Math.floor((fB + 1) * (aUp - aWq) / (aWn + 1)), f9 = i - 1; 0 <= f9; f9--) xT[gZ = 4 * ((0 === aB ? aWn - fB - 1 : fB) * i + f9)] = fT, xT[gZ + 1] = fT, xT[gZ + 2] = fT, xT[gZ + 3] = 255;
				else {
					for (f9 = aWn - 1; 0 <= f9; f9--)
						for (fT = aWq + Math.floor((f9 + 1) * (aUp - aWq) / (aWn + 1)), fB = j - 1 - aWn; aWn <= fB; fB--) xT[gZ = 4 * (fB * i + (3 === aB ? aWn - f9 - 1 : f9))] = fT, xT[gZ + 1] = fT, xT[gZ + 2] = fT, xT[gZ + 3] = 255;
					for (fL = 1; 0 <= fL; fL--)
						for (f9 = aWn - 1; 0 <= f9; f9--)
							for (fB = aWn - 1; 0 <= fB; fB--) fI = (Math.pow(f9 * f9 + fB * fB, .5) + 1) / (aWn + 1), fT = aWq + Math.floor((1 < fI ? 1 : fI) * (aUp - aWq)), xT[gZ = 4 * ((0 === fL ? aWn - fB - 1 : fB + fL * (j - aWn)) * i + (
								1 === aB ? f9 : aWn - f9 - 1))] = fT, xT[gZ + 1] = fT, xT[gZ + 2] = fT, xT[gZ + 3] = 255
				}
				z3.putImageData(i0, 0, 0)
			}
			aWt = aWq, bS.xM.fillStyle = "rgb(" + aWt + "," + aWt + "," + aWt + ")", bS.xM.fillRect(0, 0, bS.fD, 1), bS.xM.fillRect(0, bS.fE - 1, bS.fD, 1), bS.xM.fillRect(0, 0, 1, bS.fE), bS.xM.fillRect(bS.fD - 1, 0, 1, bS.fE)
		}
	}, this.yx = function() {
		var fL = iF ? 0 : -aWn;
		aNp(fL, fL, bS.fD - 2 * fL, bS.fE - 2 * fL, ba.aWu, ba.aWv, ba.aWw, ba.aWx) || (vS.fillStyle = aWp, vS.fillRect(0, 0, h.i, h.j))
	}, this.vR = function() {
		iF || (aNo(0, -aWn, bS.fD, aWn, ba.aWu, ba.aWv, ba.aWw, ba.aWx) && vS.drawImage(aWo[0], ba.aWy, ba.aWz - aWn), aNo(bS.fD, -aWn, aWn, bS.fE + 2 * aWn, ba.aWu, ba.aWv, ba.aWw, ba.aWx) && vS.drawImage(aWo[1], ba.aWy + bS.fD, ba.aWz - aWn),
			aNo(0, bS.fE, bS.fD, aWn, ba.aWu, ba.aWv, ba.aWw, ba.aWx) && vS.drawImage(aWo[2], ba.aWy, ba.aWz + bS.fE), aNo(-aWn, -aWn, aWn, bS.fE + 2 * aWn, ba.aWu, ba.aWv, ba.aWw, ba.aWx) && vS.drawImage(aWo[3], ba.aWy - aWn, ba.aWz - aWn))
	}
}

function d6() {
	this.aIg = new aX0, this.z0 = new aX1, this.y = new aX2, this.io = new aX3, this.aWt = new aX4, this.mH = new aX5, this.kA = new aX6, this.l9 = new aX7, this.aX8 = new aX9, this.aXA = new aXB, this.mS = new aXC, this.hb = new aXD, this.li =
		new aXE, this.lB = new aXF, this.he = new aXG, this.mL = new aXH, this.qL = new aXI, this.dd = function() {
			this.li.dd(), this.z0.dd(), this.y.dd(), this.io.dd(), this.aWt.dd(), this.aXA.dd(), this.mL.dd()
		}, this.vR = function() {
			this.aXA.vR(), this.z0.vR()
		}
}

function aX6() {
	this.eV = function(player) {
		return !!bN.mS.mT(player) && !(bN.y.kQ[player] >= Math.max(3 * ao.performance.la, aE.ka[aE.hk[player]]) || !bA.gN.mU(player, aE.kY[aE.hk[player]], 32, 0)) && (aW.aC7() ? function(player) {
			var aXL = bN.lB.aCA(),
				f2 = aXL.length;
			if (0 === f2) return !1;
			aXL = aXL[ay.jd(f2)], f2 = bN.y.mF[aXL];
			if (bN.mL.mM(player, f2)) return !1;
			return !! function(player, mO) {
				var mO = bM.il(bN.y.mR[mO]),
					hG = bM.fA(mO),
					mO = bM.fC(mO),
					nL = ag.iu[player],
					nM = ag.iw[player],
					nY = ag.iv[player],
					player = ag.ix[player],
					nY = Math.max(hG - nY, nL - hG),
					nL = Math.max(mO - player, nM - mO);
				return nY < 100 && nL < 100
			}(player, aXL) && !!bN.he.qK(player, f2, 1) && (bA.gN.mW(player), bN.y.mX(player), !0)
		}(player) : !!(ao.jD.eV(player) || ao.j2.eV(player) || ao.j4.eV(player)) && (function(player) {
			bO.fd[1] = 4, bA.gN.mW(player), bN.y.mX(player)
		}(player), !0))
	}
}

function aXH() {
	var aXO = 0,
		aXP = null;
	this.dd = function() {
		null === aXP && (aXP = new Uint16Array(2 * bN.y.ka)), aXO = 0
	}, this.eZ = function(aXQ, mL) {
		var aXR = aXP;
		aXR[aXO++] = aXQ, aXR[aXO++] = mL
	}, this.mM = function(player, mK) {
		for (var aXR = aXP, f2 = aXO, aB = 0; aB < f2; aB += 2)
			if (aXR[aB] === mK && bN.lB.aXS(aXR[aB + 1]) && player === bN.y.mG[bO.fd[2]] >> 3) return !0;
		return !1
	}, this.aXT = function(aXU) {
		var mH = bN.y.mD[aXU];
		if (!(mH < 64)) {
			for (var mK = bN.y.mF[aXU], aXR = aXP, f2 = aXO, aB = f2 - 2; 0 <= aB; aB -= 2)
				if (aXR[aB] === mK) {
					{
						aXZ = void 0;
						var aXZ = aXR[aB + 1];
						bN.lB.aXS(aXZ) && bN.mL.aXh(bO.fd[2])
					}
					aXR[aB] = aXR[f2 - 2], aXR[aB + 1] = aXR[f2 - 1], f2 -= 2
				} aXO = f2
		}
	}, this.aXW = function(aXX, aXY) {
		for (var aXZ = bN.y.mF[aXX], mK = -1, aXR = aXP, f2 = aXO, aB = 1; aB < f2; aB += 2)
			if (aXR[aB] === aXZ) {
				mK = aXR[aB - 1];
				break
			} if (-1 === mK) return !1;
		if (!bN.lB.aXS(mK)) return !1;
		var aXU = bO.fd[2],
			lh = bN.y.mE[aXU];
		if (aXY === lh[lh.length - 1]) bN.y.mE[aXX] = bN.li.aXa(bN.y.mE[aXX], bN.li.lq(lh));
		else {
			var aXb = bN.lB.aXc(lh, aXY);
			if (-1 === aXb) return !1;
			var aXd = bN.y.mQ[aXU];
			aXb === aXd ? (aXU = bM.il(bN.y.mR[aXU]), bN.y.mE[aXX] = bN.li.aXf(bN.y.mE[aXX], lh, aXb, aXY, bM.iR(lh[aXb], aXY) > bM.iR(lh[aXb], aXU))) : bN.y.mE[aXX] = bN.li.aXf(bN.y.mE[aXX], lh, aXb, aXY, aXd < aXb)
		}
		return !0
	}, this.aXh = function(aXi) {
		var lh, lH = bN.y,
			mH = lH.mD[aXi];
		return mH % 64 != 5 && (lh = lH.mE[aXi], lH.aXj[aXi] = 65535 - lH.aXj[aXi], lH.mQ[aXi] = lh.length - lH.mQ[aXi] - 2, lH.mE[aXi] = bN.li.lq(lh), lH.mD[aXi] = mH - mH % 64 + 5, !0)
	}
}

function aXC() {
	this.mT = function(player) {
		return !!aD.data.passableWater && bN.y.mC !== bN.y.ka && bN.y.kQ[player] !== bN.y.aXk && 0 !== ag.gi[player].length
	}, this.qG = function(aVO) {
		var mH = bO.fd[1];
		return !(4 <= mH || !bN.lB.aXl(bM.es(aVO))) && ac.ex(bM.es(bM.iq(aVO, mH)))
	}
}

function aX0() {
	this.aIh = function(player) {
		for (var a8T = bN.y.a8T, tP = player << 3, aB = tP + bN.y.kQ[player] - 1; tP <= aB; aB--) this.aXm(a8T[aB])
	}, this.aXm = function(aXn) {
		var y = bN.y,
			aXo = y.mC - 1,
			aXp = y.mG[aXn],
			aXq = y.aXr[aXn],
			aXs = y.mR[aXn];
		y.mC = aXo, y.mG[aXn] = y.mG[aXo], y.mR[aXn] = y.mR[aXo], y.aXj[aXn] = y.aXj[aXo], y.a7P[aXn] = y.a7P[aXo], y.aXr[aXn] = y.aXr[aXo], y.mF[aXn] = y.mF[aXo], y.mD[aXn] = y.mD[aXo], y.aXt[aXn] = y.aXt[aXo], y.mE[aXn] = y.mE[aXo], y.mQ[aXn] =
			y.mQ[aXo], y.a8T[y.mG[aXn]] = aXn,
			function(aVN) {
				var player = aVN >> 3,
					y = bN.y,
					f2 = y.kQ[player] - 1,
					aXw = (player << 3) + f2;
				y.kQ[player] = f2, aXw !== aVN && (y.a8T[aVN] = y.a8T[aXw], y.mG[y.a8T[aVN]] = aVN)
			}(aXp), bN.io.io[bM.im(y.mR[aXn])][y.aXr[aXn]] = aXn, aXo = bM.im(aXs), aXp = aXq, aXo = bN.io.io[aXo], y = aXo.pop(), aXp !== aXo.length && (aXo[aXp] = y, bN.y.aXr[y] = aXp)
	}
}

function aX1() {
	var aXy, aXz = 8,
		aY0 = null;

	function aY5(xT, eo, eA) {
		eo *= 4;
		xT[eo] = 255, xT[1 + eo] = 255, xT[2 + eo] = eA, xT[3 + eo] = 255
	}

	function aY7(i3, aWp) {
		var f9, fB, iL, eo, aY9, aYA, hx = aXz,
			i0 = bA.qo.getImageData(i3, hx, hx),
			xT = i0.data,
			lH = (hx >> 1) - .5,
			aYC = bA.qw.a3F(aWp, .5);
		for (bA.qw.a3H(aWp, aYC, 300) || bA.qw.a3J(aWp, 100), fB = 0; fB < hx; fB++)
			for (f9 = 0; f9 < hx; f9++) aYA = (hx - 1.5) * (hx - 1.5) / 4, xT[eo = 4 * (fB * hx + f9)] = (aY9 = (iL = (iL = f9 - lH) * iL + (iL = fB - lH) * iL) <= (hx - 4.5) * (hx - 4.5) / 4 ? aYC : aWp)[0], xT[1 + eo] = aY9[1], xT[2 + eo] = aY9[2],
				xT[3 + eo] = aYA < iL ? 0 : 255;
		i3.putImageData(i0, 0, 0)
	}
	this.dd = function() {
		var eA, hx, a3h, i3, i0, xT;
		(aXy = aXy || new Array(aD.ez)).fill(null), eA = 255, hx = aXz + 4, a3h = bA.qo.xI(hx, hx), i3 = bA.qo.getContext(a3h, !0), i0 = bA.qo.getImageData(i3, hx, hx), aY5(xT = i0.data, hx + 1, eA), aY5(xT, hx + 2, eA), aY5(xT, 2 * hx + 1, eA),
			aY5(xT, 2 * hx - 3, eA), aY5(xT, 2 * hx - 2, eA), aY5(xT, 3 * hx - 2, eA), aY5(xT, hx * (hx - 3) + 1, eA), aY5(xT, hx * (hx - 2) + 1, eA), aY5(xT, hx * (hx - 2) + 2, eA), aY5(xT, hx * (hx - 2) - 2, eA), aY5(xT, hx * (hx - 1) - 3, eA),
			aY5(xT, hx * (hx - 1) - 2, eA), i3.putImageData(i0, 0, 0), aY0 = a3h,
			function() {
				if (aD.hv)
					for (var a3h = new Array(bg.kj.length), f2 = aD.ez, aY3 = aXy, aBS = bg.aBS, aB = 0; aB < f2; aB++) {
						var a6A = aBS[aB];
						a3h[a6A] || (a3h[a6A] = function(a6A) {
							var a3h = bA.qo.xI(aXz, aXz),
								i3 = bA.qo.getContext(a3h, !0),
								g = bO.fa;
							return g.set(bg.aY8[a6A]), aY7(i3, g), a3h
						}(a6A)), aY3[aB] = a3h[a6A]
					}
			}()
	}, this.vR = function() {
		var aB, player, aYD, aNx, hk, iK, aYF, aYH, aYI, mR = bN.y.mR,
			mG = bN.y.mG,
			a7P = bN.y.a7P,
			aXt = bN.y.aXt,
			aYJ = aXy,
			aYK = aD.em,
			f2 = bN.y.mC,
			aYL = h.i,
			aYM = h.j,
			aYN = bS.fD << 4,
			er = iC,
			eg = er / aXz,
			nL = ic / er,
			nM = ie / er,
			iL = (aYL + ic) / er - nL,
			iO = (aYM + ie) / er - nM,
			i3 = vS;
		for (i3.imageSmoothingEnabled = er < 9, bA.qo.textAlign(i3, 1), bA.qo.textBaseline(i3, 1), aB = 0; aB < f2; aB++) player = mG[aB] >> 3, hk = a7P[aB], aYD = .9 + .1 * Math.log10(hk), aNx = (iK = mR[aB]) % aYN / 16 - aYD, iK = aYM * (Math
			.floor(iK / aYN) / 16 - aYD - nM) / iO, aYF = -2 * (aYI = er * aYD) * (1 + (aYH = +(player === aYK)) / 8), aYH = aYH * aYI / 4, (aYI = aYL * (aNx - nL) / iL) < aYF || iK < aYF || aYL + aYH < aYI || aYM + aYH < iK || (aNx = 2 *
			aYD * eg, aYF = aYD * er, null === (aYH = aYJ[player]) && (aYJ[player] = aYH = function(player) {
				var a3h = bA.qo.xI(aXz, aXz);
				return aY7(bA.qo.getContext(a3h, !0), ac.a84(player)), a3h
			}(player)), player === aYK && (i3.setTransform(aNx, 0, 0, aNx, aYI - 2 * aNx, iK - 2 * aNx), i3.drawImage(aY0, 0, 0)), i3.setTransform(aNx, 0, 0, aNx, aYI, iK), i3.drawImage(aYH, 0, 0), (aYD = Math.floor(function(hk) {
				if (hk < 1e3) return .42;
				if (hk < 1e4) return .34;
				if (hk < 1e6) return .26;
				if (hk < 1e8) return .19;
				return .15
			}(hk) * aYF)) < 6) || (i3.setTransform(1, 0, 0, 1, 0, 0), i3.fillStyle = aXt[aB] ? bB.oT : bB.nv, i3.font = bA.qo.sf(1, aYD), i3.fillText(bA.rn.a06(hk), aYI + aYF, iK + aYF + .1 * aYD));
		i3.imageSmoothingEnabled = !1, i3.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aXB() {
	var aYQ;
	this.dd = function() {
		if (aD.hv) {
			var hr = 1 - aD.y6;
			aYQ = new Array(bg.kj.length);
			for (var aB = aD.y5 - 1; 0 <= aB; aB--) {
				var a6A = bg.kj[aB + hr];
				aYQ[a6A] = bP.y.aYS(20, bg.aYT[a6A])
			}
			9 === aD.ke && (aYQ[1] = bP.y.aYS(20, bg.aYT[1]))
		} else aYQ = [bP.y.aYS(20, bg.aYT[7])]
	}, this.vR = function() {
		var nf = iC;
		if (!(5 <= nf)) {
			var aYL = h.i,
				aYM = h.j,
				nL = ic / nf,
				nM = ie / nf,
				nY = (aYL + ic) / nf,
				nZ = (aYM + ie) / nf,
				ga = -20 * nf,
				aYV = .5 * ga,
				aYN = bS.fD << 4,
				f2 = bN.y.mC,
				mR = bN.y.mR,
				mG = bN.y.mG,
				aBS = bg.aBS,
				a3h = aYQ,
				i3 = vS;
			3 < nf && (i3.globalAlpha = .5 * (5 - nf));
			for (var aB = 0; aB < f2; aB++) {
				var iK = mR[aB],
					f9 = aYL * (iK % aYN / 16 - nL) / (nY - nL) + aYV,
					iK = aYM * (Math.floor(iK / aYN) / 16 - nM) / (nZ - nM) + aYV;
				aYL < f9 || aYM < iK || f9 < ga || iK < ga || (i3.setTransform(nf, 0, 0, nf, f9, iK), i3.drawImage(a3h[aBS[mG[aB] >> 3]], 0, 0))
			}
			i3.globalAlpha = 1, i3.setTransform(nf, 0, 0, nf, 0, 0)
		}
	}
}

function aXF() {
	this.aYY = function(player, id) {
		for (var aYZ = ag.gi[player], f2 = aYZ.length, aB = 0; aB < f2; aB++)
			if (bM.iD(aYZ[aB], id)) return !0;
		return !1
	}, this.aYa = function(player, eo) {
		for (var iT, aYb, eg, aYZ = ag.gi[player], f2 = aYZ.length, i = bS.fD, aYd = bM.fA(eo), aYe = bM.fC(eo), f8 = -1, min = bS.fD * bS.fD + bS.fE * bS.fE, id = ac.ek(bM.es(eo)), aB = 0; aB < f2; aB++)(aYb = (aYb = aYd - (iT = (eg = aYZ[
			aB]) >> 2) % i) * aYb + (aYb = aYe - ~~((.5 + iT) / i)) * aYb) < min && bM.iD(eg, id) && (min = aYb, f8 = iT);
		return f8
	}, this.lC = function(iS, iT) {
		for (var id = ac.ek(bM.es(iT)), iE = bM.i6, eg = bM.es(iS), aYf = -1, aB = 0; aB < 4; aB++) {
			var er = eg + iE[aB];
			ac.iF(er) && ac.ek(er) === id && (-1 === aYf || bM.iU(bM.eq(er), iT) < bM.iU(aYf, iT)) && (aYf = bM.eq(er))
		}
		return aYf
	}, this.ll = function(player, eo) {
		for (var iE = bM.i6, eg = bM.es(eo), aB = 0; aB < 4; aB++) {
			var er = eg + iE[aB];
			if (ac.gb(er) && ac.yv(player, er)) return !0
		}
		return !1
	}, this.lm = function(player, eo) {
		for (var iE = bM.i6, eg = bM.es(eo), aB = 0; aB < 4; aB++) {
			var er = eg + iE[aB];
			if (ac.et(er)) return !0;
			if (ac.gb(er)) {
				er = ac.eu(er);
				if (player !== er && bs.ev(player, er)) return !0
			}
		}
		return !1
	}, this.mI = function(eo) {
		for (var iE = bM.i6, eg = bM.es(eo), aB = 0; aB < 4; aB++) {
			var er = eg + iE[aB];
			if (ac.gb(er)) {
				er = ac.eu(er);
				if (bA.gN.jj(er)) return er
			}
		}
		return -1
	}, this.aXl = function(eg) {
		if (ac.iF(eg))
			for (var iE = bM.i6, aB = 0; aB < 4; aB++)
				if (ac.ex(eg + iE[aB])) return !0;
		return !1
	}, this.nK = function(player, id) {
		for (var tP = player << 3, tQ = tP + bN.y.kQ[player], mF = bN.y.mF, a8T = bN.y.a8T, aB = tP; aB < tQ; aB++) {
			var a8U = a8T[aB];
			if (mF[a8U] === id) return a8U
		}
		return -1
	}, this.nP = function(player) {
		return 0 === bN.y.kQ[player] ? -1 : bN.y.a8T[player << 3]
	}, this.a6S = function(lb, lc) {
		var f2 = bN.y.mC;
		if (f2 < 1) return -1;
		for (var mR = bN.y.mR, aYg = 80, aQG = -1, aB = 0; aB < f2; aB++) {
			var fI = bM.iH(lb, lc, mR[aB]);
			fI < aYg && (aYg = fI, aQG = aB)
		}
		return function(aB, lb, lc) {
			if (aB < 0) return;
			var aYn = bN.y.mR[aB],
				aYo = bM.iN(aYn),
				aYn = bM.iQ(aYn),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a7P[aB]));
			return aB = Math.max(aB, bM.ig(bA.qo.tU(.02, 1.7))), bL.aNw(bM.iM(lb), bM.iP(lc), aYo, aYn, aB)
		}(aQG, lb, lc) ? aQG : -1
	}, this.aXS = function(nI) {
		for (var f2 = bN.y.mC, mF = bN.y.mF, aB = 0; aB < f2; aB++)
			if (mF[aB] === nI) return bO.fd[2] = aB, !0;
		return !1
	}, this.aId = function(player) {
		for (var tP = player << 3, tQ = tP + bN.y.kQ[player], a8T = bN.y.a8T, a7P = bN.y.a7P, hk = 0, aB = tP; aB < tQ; aB++) hk += a7P[a8T[aB]];
		return hk
	}, this.aYi = function(player, aXi) {
		aXi = bN.y.mE[aXi];
		return this.ll(player, aXi[aXi.length - 1])
	}, this.aYj = function(iS, iT, fI, aYk) {
		var iW = bM.fA(iS),
			iS = bM.fC(iS),
			iY = bM.fA(iT),
			iT = bM.fC(iT),
			iY = (fI = Math.max(fI, 1), iY - iW),
			iT = iT - iS,
			iL = bL.dt(Math.abs(iY) * aYk, fI),
			aYk = bL.dt(Math.abs(iT) * aYk, fI);
		return bM.fP(iW + Math.sign(iY) * iL, iS + Math.sign(iT) * aYk)
	}, this.aXc = function(lh, eo) {
		for (var f2 = lh.length - 1, f9 = bM.fA(eo), fB = bM.fC(eo), aB = 0; aB < f2; aB++) {
			var iS = lh[aB],
				iT = lh[aB + 1],
				nL = bM.fA(iS),
				iS = bM.fC(iS),
				nY = bM.fA(iT),
				iT = bM.fC(iT);
			if (!(f9 !== nL && f9 !== nY && Math.sign(f9 - nL) === Math.sign(f9 - nY) || fB !== iS && fB !== iT && Math.sign(fB - iS) === Math.sign(fB - iT))) {
				if (nL === nY || iS === iT) return aB;
				if (Math.abs(f9 - nL) === Math.abs(fB - iS) && Math.abs(f9 - nY) === Math.abs(fB - iT)) return aB
			}
		}
		return -1
	}, this.aCA = function() {
		for (var aYq = lx[0], mG = bN.y.mG, mC = bN.y.mC, g = [], aB = 0; aB < mC; aB++) bA.gN.l0(aYq, mG[aB] >> 3) && g.push(aB);
		return g
	}, this.lj = function(player, lh) {
		for (var tP = player << 3, tQ = tP + bN.y.kQ[player], a8T = bN.y.a8T, mE = bN.y.mE, hT = lh[0], kz = lh[lh.length - 1], aB = tP; aB < tQ; aB++) {
			var gZ = mE[a8T[aB]];
			if (gZ[0] === hT && gZ[gZ.length - 1] === kz) return !0
		}
		return !1
	}
}

function aXG() {
	function aYt(player, aXi) {
		aXi = bM.il(bN.y.mR[aXi]), aXi = ac.ek(bM.es(aXi));
		return !!bN.lB.aYY(player, aXi)
	}

	function aYr(player) {
		return bN.mS.mT(player) && !bN.li.lo()
	}
	this.hf = function(player, eo) {
		return !!aYr(player) && -1 !== (eo = function(player, eo) {
			for (var f2 = bN.y.mC, mR = bN.y.mR, mG = bN.y.mG, aYg = bM.i8(), aQG = -1, aB = 0; aB < f2; aB++) {
				var fI = bM.iR(eo, bM.il(mR[aB]));
				fI < aYg && bA.gN.l0(player, mG[aB] >> 3) && (aYg = fI, aQG = aB)
			}
			return aQG
		}(player, eo)) && !!aYt(player, eo) && (bO.fd[3] = bN.y.mF[eo], !0)
	}, this.pR = function(player, nI) {
		return !!aYr(player) && !!bN.lB.aXS(nI) && !!aYt(player, bO.fd[2])
	}, this.qK = function(player, nI, aYu) {
		return !! function(player, nI, aYu) {
			if (aYr(player) && bN.lB.aXS(nI)) {
				nI = bO.fd[2];
				if (bA.gN.l0(player, bN.y.mG[nI] >> 3)) {
					if (function(player, aXi) {
							return bN.lB.aYi(player, aXi) && (bO.g[0] = bN.li.lq(bN.y.mE[aXi]), bO.fd[1] = 6, !0)
						}(player, nI)) return 1;
					var aXN = bM.il(bN.y.mR[nI]),
						aYy = bN.lB.aYa(player, aXN);
					if (-1 !== aYy) {
						aYy = bM.iR(aYy, aXN);
						if (!(aYu && 120 < aYy)) {
							aYu = function(aXi, aYz, aXN) {
								var lh = bN.y.mE[aXi],
									aXi = bN.y.mQ[aXi],
									aZ1 = bM.iR(aXN, lh[aXi + 1]);
								if (aYz <= aZ1) return bN.lB.aYj(aXN, lh[aXi + 1], aZ1, aYz);
								for (var fI = aYz - aZ1, f2 = lh.length - 1, aB = aXi + 1; aB < f2; aB++) {
									var aZ2 = bM.iR(lh[aB], lh[aB + 1]);
									if (fI <= aZ2) return bN.lB.aYj(lh[aB], lh[aB + 1], aZ2, fI);
									fI -= aZ2
								}
								return lh[f2]
							}(nI, aYy, aXN);
							if (bN.l9.qH(player, aYu, 1)) return bO.fd[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, nI, aYu) && (player = bO.fd[2], bN.y.mD[player] = 64 + bN.y.mD[player] % 64, bN.mL.eZ(nI, bN.y.mV), !0)
	}
}

function aX5() {
	function aZ7(player, hk, aZ5, aXN) {
		var jV;
		if (ac.et(aZ5)) jV = aD.ez;
		else {
			if ((jV = ac.eu(aZ5)) === player) return void bd.gR(player, hk - bA.gN.gQ(player, hk), 12);
			if (!bs.ev(player, jV)) return void b8.kO.pg(player, jV, hk)
		}
		ad.jh(player, jV) || ad.k0(player) ? (ag.gT[player].push(aXN << 2), ad.eZ(player, hk, jV), aF.jT(player, !0)) : bd.gR(player, hk, 12)
	}
	this.eV = function() {
		for (var mD = bN.y.mD, mR = bN.y.mR, aXj = bN.y.aXj, aB = bN.y.mC - 1; 0 <= aB; aB--) 65535 === aXj[aB] && function(aB, aXN, hs) {
			if (6 === hs) {
				if (bN.mL.aXW(aB, aXN)) return bN.y.mQ[aB]++, bN.y.aXj[aB] = 0, 0
			} else {
				var player = bN.y.mG[aB] >> 3,
					aB = bN.y.a7P[aB];
				bd.aZ6(player), hs < 4 ? aZ7(player, aB, aXN + bM.i5[hs] << 2, aXN) : 4 === hs ? function(player, hk, aXN) {
					var aB, f6, iE = bM.i6,
						er = bM.es(aXN);
					for (aB = 0; aB < 4; aB++)
						if (f6 = er + iE[aB], ac.et(f6)) return aZ7(player, hk, f6, aXN);
					for (aB = 0; aB < 4; aB++)
						if (f6 = er + iE[aB], ac.gb(f6) && !ac.yv(player, f6)) return aZ7(player, hk, f6, aXN);
					for (aB = 0; aB < 4; aB++)
						if (f6 = er + iE[aB], ac.gb(f6)) return aZ7(player, hk, f6, aXN)
				}(player, aB, aXN) : 5 === hs && function(player, hk, aXN) {
					var aB, f6, iE = bM.i6,
						er = bM.es(aXN);
					for (aB = 0; aB < 4; aB++)
						if (f6 = er + iE[aB], ac.gb(f6) && ac.yv(player, f6)) return aZ7(player, hk, f6, aXN);
					for (aB = 0; aB < 4; aB++)
						if (f6 = er + iE[aB], ac.gb(f6)) return aZ7(player, hk, f6, aXN);
					for (aB = 0; aB < 4; aB++)
						if (f6 = er + iE[aB], ac.et(f6)) return aZ7(player, hk, f6, aXN)
				}(player, aB, aXN)
			}
			return 1
		}(aB, bM.il(mR[aB]), mD[aB] % 64) && (bN.mL.aXT(aB), bN.aIg.aXm(aB))
	}, this.aZ4 = function(player, eo, hs, nI, hk) {
		if (!(5 <= hs)) {
			var aYK = aD.em;
			if (bA.gN.hD(aYK) && bs.ev(player, aYK) && player !== aYK && 0 !== ag.gi[aYK].length && bA.gN.a4I(player, 5)) {
				for (var aZ5, fG = !1, aB = 0; aB < 4; aB++)
					if (aZ5 = eo + bM.i5[aB] << 2, ac.ex(aZ5) && !ac.et(aZ5) && ac.eu(aZ5) === aYK) {
						fG = !0;
						break
					} fG && (aN.a7Y(719, 0), hs = hk < 25e3 ? L(477) + " (" + bA.rn.a06(hk) + ") ⛵" : L(478) + " (" + bA.rn.a06(hk) + ") 🚢", aN.a1D(180, hs, 719, player, bB.oS, bB.ns, -1, !0, void 0, {
					fM: 1,
					nI: nI
				}))
			}
		}
	}
}

function aX2() {
	this.ka = 512, this.aXk = 8, this.mC = 0, this.mV = 0, this.mG = new Uint16Array(this.ka), this.mR = new Uint32Array(this.ka), this.aXj = new Uint16Array(this.ka), this.a7P = new Uint32Array(this.ka), this.aXr = new Uint16Array(this.ka), this
		.mF = new Uint16Array(this.ka), this.mD = new Uint8Array(this.ka), this.aXt = new Uint8Array(this.ka), this.mE = new Array(this.ka), this.mQ = new Uint16Array(this.ka), this.kQ = new Uint8Array(aD.ez), this.a8T = new Uint16Array(this.aXk * aD
			.ez), this.dd = function() {
			this.mC = 0, this.mV = 0, this.kQ.fill(0), this.mE.fill(null)
		}, this.mX = function(player) {
			var hk = bO.fY[0],
				mH = bO.fd[1],
				lh = bO.g[0],
				aZA = this.mV,
				f2 = this.mC,
				aZB = bM.ik(lh[0]),
				aZC = this.kQ[player],
				aZD = (player << 3) + aZC;
			this.mG[f2] = aZD, this.mR[f2] = aZB, this.aXj[f2] = 0, hk < 60 && (bA.gN.gO(player, 60 - hk), hk = 60), this.a7P[f2] = hk, this.aXr[f2] = bN.io.mX(f2, bM.im(aZB)), this.mF[f2] = aZA, this.mD[f2] = mH, this.aXt[f2] = 0, this.mE[f2] = lh,
				this.mQ[f2] = 0, this.mV = (aZA + 1) % 65536, this.kQ[player] = aZC + 1, this.a8T[aZD] = f2, this.mC++, bN.mH.aZ4(player, lh[lh.length - 1], mH, aZA, hk)
		}, this.eV = function() {
			bN.mH.eV();
			for (var gZ = aD.em, ds = bN.lB.aId(gZ), sQ = (! function(sQ) {
					for (var aZI, mR = sQ.mR, a7P = sQ.a7P, aXt = sQ.aXt, aXj = sQ.aXj, aXr = sQ.aXr, mE = sQ.mE, mQ = sQ.mQ, sQ = sQ.mC, aYN = bS.fD << 4, aB = sQ - 1; 0 <= aB; aB--) {
						var aZJ = mR[aB],
							lh = mE[aB],
							aZK = mQ[aB],
							aZB = bM.ik(lh[aZK]),
							aZL = bM.ik(lh[aZK + 1]),
							aZM = aZB % aYN,
							aZB = ~~((aZB + .5) / aYN),
							aZO = aZL % aYN,
							aZP = ~~((aZL + .5) / aYN),
							aZQ = aZO - aZM,
							aZR = aZP - aZB,
							f5 = Math.max(~~Math.sqrt(aZQ * aZQ + aZR * aZR + .5), 1),
							aZS = a7P[aB],
							aZS = (aZS = aXt[aB] ? 4e4 : 25e4 + Math.min(20 * aZS, 3e5) + Math.min(aZS >> 3, 5e4), aXj[aB] + Math.max(~~((aZS + .5) / f5), 1));
						65535 <= aZS ? aZK + 2 < lh.length ? (mQ[aB] = aZK + 1, mR[aB] = aZI = function(aB, aZT, aZM, aZN, aZK, f5, lh, aYN) {
							aZT = Math.min(aZT - 65535, 65535);
							var lh = bM.ik(lh[aZK + 2]),
								aZK = lh % aYN - aZM,
								lh = ~~((lh + .5) / aYN) - aZN,
								aZW = Math.max(~~Math.sqrt(aZK * aZK + lh * lh + .5), 1);
							return aZT = Math.min(Math.floor((f5 * aZT + .5) / aZW), 65534), bN.y.aXj[aB] = aZT, aZM + bL.dt(aZT * aZK, 65535) + aYN * (aZN + bL.dt(aZT * lh, 65535))
						}(aB, aZS, aZO, aZP, aZK, f5, lh, aYN)) : (mR[aB] = aZI = aZL, aXj[aB] = 65535) : (aXj[aB] = aZS, mR[aB] = aZI = aZM + bL.dt(aZS * aZQ, 65535) + aYN * (aZB + bL.dt(aZS * aZR, 65535))), aXr[aB] = bN.io.aZV(aXr[aB],
							aZJ, aZI)
					}
				}(this), ! function(sQ) {
					if (bf.kJ() % 2 == 1) {
						var aB, ht, lH, fM, ea, aZX, zk, aZY, hT, nL, nM, aZB, aZZ, a9w, aZb, kz, f2 = sQ.mC,
							mR = sQ.mR,
							mG = sQ.mG,
							a7P = sQ.a7P,
							aXt = sQ.aXt,
							io = bN.io.io,
							aZd = io.length,
							aZe = bN.io.aZe,
							aYN = bS.fD << 4,
							aZf = aD.hv,
							aVC = bg.f0,
							ga = (f2 - 1) * (bL.dt(bf.kJ(), 2) % 2);
						for (aB = 0; aB < f2; aB++)
							for (ht = Math.abs(aB - ga), aZB = mR[ht], lH = bM.im(aZB), hT = mG[ht] >> 3, nL = aZB % aYN, nM = ~~((aZB + .5) / aYN), aZb = a7P[ht], fM = 0; fM < 9; fM++)
								if (!((aZX = lH + aZe[fM]) < 0 || aZd <= aZX))
									for (aZY = io[aZX], zk = aZY.length, ea = 0; ea < zk; ea++) aZZ = aZY[ea], kz = mG[aZZ] >> 3, hT == kz || aZf && aVC[hT] === aVC[kz] && aVC[hT] || (kz = mR[aZZ], (a9w = nL - kz % aYN) * a9w + (a9w = nM - ~~
										((kz + .5) / aYN)) * a9w < 14400 && (kz = a7P[aZZ], a9w = kz <= aZb ? Math.max(1, bL.dt(kz + bL.dt(aZb - kz, 10), 10)) : Math.max(1, bL.dt(aZb, 10)), a7P[aZZ] = Math.max(kz - a9w, 0), aXt[aZZ] =
										4))
					}
				}(this), ! function(sQ) {
					if (bf.kJ() % 5 == 3)
						for (var a7P = sQ.a7P, f2 = sQ.mC, aB = 0; aB < f2; aB++) {
							var hk = a7P[aB];
							a7P[aB] = Math.max(hk - Math.max(1, hk >> 7), 0)
						}
				}(this), this), a7P = sQ.a7P, aXt = sQ.aXt, aB = sQ.mC - 1; 0 <= aB; aB--) aXt[aB] = aXt[aB] >> 1, 0 === a7P[aB] && (bN.mL.aXT(aB), bN.aIg.aXm(aB));
			bd.gR(gZ, ds - bN.lB.aId(gZ), 15)
		}
}

function aX3() {
	this.aZg = 32, this.f9 = 0, this.fB = 0, this.ip = 0, this.aZh = 0, this.aZi = 4, this.io = null, this.aZe = new Int16Array(9), this.dd = function() {
		this.ip = 1 + bL.dt(bS.fD - 1, this.aZg), this.aZh = 1 + bL.dt(bS.fE - 1, this.aZg), this.io = new Array(this.ip * this.aZh), bA.qw.a3E(this.io);
		var f9, fB, aZe = this.aZe,
			i = this.ip;
		for (f9 = -1; f9 <= 1; f9++)
			for (fB = -1; fB <= 1; fB++) aZe[3 * (1 + fB) + 1 + f9] = fB * i + f9
	}, this.mX = function(aZk, aB) {
		return this.io[aB].push(aZk), this.io[aB].length - 1
	}, this.aZV = function(aZl, aZB, aZL) {
		var aZm, aZn, aZB = bM.im(aZB),
			aZL = bM.im(aZL);
		return aZB === aZL ? aZl : (aZm = this.io[aZB].pop(), this.io[aZB].length === aZl ? this.mX(aZm, aZL) : (aZn = this.io[aZB][aZl], this.io[aZB][aZl] = aZm, bN.y.aXr[aZm] = aZl, this.mX(aZn, aZL)))
	}
}

function aX7() {
	this.lA = function(player, aZo) {
		return -1 !== aZo && !!bN.lB.lm(player, aZo) && this.qH(player, aZo, 0)
	}, this.qH = function(player, aZo, aZp) {
		player = function(player, aZo, aZp) {
			var aYy = bN.lB.aYa(player, aZo);
			if (-1 === aYy) return -1;
			aYy = bN.lB.lC(aYy, aZo);
			if (-1 === aYy) return -1;
			var lf = bN.li.ln(aYy, aZo);
			if (0 <= lf) return lf;
			if (bN.li.lo()) return -1;
			if (0 <= (lf = bN.li.ln(aZo, aYy))) return bN.li.lp(bN.li.lq(bN.li.get(lf)));
			if (aYy === aZo) return bN.li.lp(new Uint32Array([aYy, aZo]));
			if (0 <= (lf = bN.aX8.qH(aYy, aZo))) return lf;
			return aZp ? function(aZt, player) {
				var fi = bO.fi,
					eO = (fi.fill(0), [aZt]),
					i7 = (fi[aZt] = 1, bM.i7),
					aZu = -1,
					f2 = eO.length;
				for (; - 1 === aZu && f2;) {
					for (var g = [], aB = 0; aB < f2; aB++)
						for (var eo = eO[aB], a52 = fi[eo], f5 = 0; f5 < 8; f5++) {
							var x2, a1c, f8 = eo + i7[f5],
								eg = 4 * f8;
							ac.iF(eg) ? (x2 = fi[f8], a1c = a52 + 5 + ((1 & f5) << 1), 0 === x2 ? (g.push(f8), fi[f8] = a1c) : fi[f8] = Math.min(a1c, x2)) : -1 === aZu && f5 % 2 == 0 && ac.ys(player, eg) && (aZu = eo)
						}
					f2 = (eO = g).length
				}
				return -1 !== aZu ? function(iS, aZw) {
					var i7 = bM.i7,
						aZx = -1,
						hs = 0,
						mr = [];
					for (; aZw !== iS;)(hs = function(eo, hs) {
						var fi = bO.fi,
							i7 = bM.i7,
							a52 = fi[eo];
						if (a52 - fi[eo + i7[hs]] != 5 + ((1 & hs) << 1))
							for (var fL = 0; fL < 8; fL++) {
								var f5 = fL + hs + 6 & 7;
								if (a52 - fi[eo + i7[f5]] == 5 + ((1 & f5) << 1)) return f5
							}
						return hs
					}(aZw, hs)) !== aZx && (mr.push(aZw), aZx = hs), aZw += i7[hs];
					mr.push(iS);
					var lf = bN.li.ln(mr[0], iS);
					if (0 <= lf) return lf;
					return bN.li.lp(new Uint32Array(mr))
				}(aZt, aZu) : -1
			}(aZo, player) : -1
		}(player, aZo, aZp);
		return -1 !== player && (bO.g[0] = bN.li.get(player), !0)
	}
}

function aX9() {
	function aZz(hG, iX, iZ) {
		for (var jc = Math.min(iX, iZ), nd = Math.max(iX, iZ), fB = jc + 1; fB < nd; fB++)
			if (!ac.iF(bM.ih(hG, fB))) return;
		return 1
	}

	function aa0(hI, iW, iY) {
		for (var jc = Math.min(iW, iY), nd = Math.max(iW, iY), f9 = jc + 1; f9 < nd; f9++)
			if (!ac.iF(bM.ih(f9, hI))) return;
		return 1
	}

	function aa1(iW, iX, iY, iZ, aZr, aZo) {
		for (var f2 = Math.min(Math.abs(iY - iW), Math.abs(iZ - iX)), iL = Math.sign(iY - iW), iO = Math.sign(iZ - iX), aB = 0; aB < f2; aB++)
			if (!ac.iF(bM.ih(iW += iL, iX += iO))) return null;
		return iW === iY ? aZz(iW, iX, iZ) ? new Uint32Array([aZr, bM.fP(iW, iX), aZo]) : null : aa0(iX, iW, iY) ? new Uint32Array([aZr, bM.fP(iW, iX), aZo]) : null
	}
	this.qH = function(aZr, aZo) {
		aZr = function(aZr, aZo) {
			var iW = bM.fA(aZr),
				iX = bM.fC(aZr),
				iY = bM.fA(aZo),
				iZ = bM.fC(aZo);
			if (iW === iY) {
				if (aZz(iW, iX, iZ)) return new Uint32Array([aZr, aZo])
			} else {
				if (iX !== iZ) return aa1(iW, iX, iY, iZ, aZr, aZo) || aa1(iY, iZ, iW, iX, aZr, aZo);
				if (aa0(iX, iW, iY)) return new Uint32Array([aZr, aZo])
			}
			return null
		}(aZr, aZo);
		return null === aZr ? -1 : bN.li.lp(aZr)
	}
}

function aXE() {
	var aa2 = [];
	this.dd = function() {
		aa2 = []
	}, this.lo = function() {
		return 65536 === aa2.length
	}, this.ln = function(aZr, aZo) {
		for (var li = aa2, f2 = li.length, aB = 0; aB < f2; aB++) {
			var gZ = li[aB];
			if (gZ[0] === aZr && gZ[gZ.length - 1] === aZo) return aB
		}
		return -1
	}, this.lq = function(lh) {
		var aa3 = new Uint32Array(lh.length);
		return aa3.set(lh), aa3.reverse()
	}, this.aXa = function(hT, kz) {
		var gU = hT.length - 1,
			aa4 = new Uint32Array(gU + kz.length);
		return aa4.set(hT, 0), aa4.set(kz, gU), aa4
	}, this.aXf = function(hT, kz, wW, eo, aa5) {
		aa5 && (wW = (kz = this.lq(kz)).length - wW - 2);
		aa5 = kz.subarray(wW + 1 + (eo === kz[wW + 1])), eo = new Uint32Array(hT.length + aa5.length);
		return eo.set(hT, 0), eo.set(aa5, hT.length), eo
	}, this.lp = function(lh) {
		return aa2.push(lh), aa2.length - 1
	}, this.get = function(aB) {
		return aa2[aB]
	}, this.lk = function() {
		return aa2
	}, this.aa7 = function(aZr, aZo) {
		return null
	}
}

function aXI() {
	this.eV = function(player, nI) {
		player = bN.lB.nK(player, nI);
		return !(player < 0 || !bN.mL.aXh(player) || (bN.mL.aXT(player), 0))
	}
}

function aX4() {
	var zP = 32,
		zO = new Array(2);

	function xI(ea) {
		var f9, fB, eo, iO, iL, hx = zP,
			a3h = bA.qo.xI(hx, hx),
			i3 = bA.qo.getContext(a3h, !0),
			i0 = bA.qo.getImageData(i3, hx, hx),
			xT = i0.data,
			lH = (hx >> 1) - .5,
			lI = Math.sqrt(lH * lH);
		for (xT.fill(255), fB = 0; fB < hx; fB++)
			for (f9 = 0; f9 < hx; f9++) iL = f9 - lH, iO = fB - lH, eo = 4 * (fB * hx + f9), iL = 714 * (lI - Math.sqrt(iL * iL + iO * iO)) / lI, xT[2 + eo] = ea, xT[3 + eo] = 255 < iL ? 0 : iL;
		return i3.putImageData(i0, 0, 0), a3h
	}
	this.aa8 = -1, this.dd = function() {
		this.aa8 = -1, zO[0] || (zO[0] = xI(255), zO[1] = xI(0))
	}, this.aa9 = function(i3, eg, f9, fB, e9, aB) {
		bA.gN.hD(aD.em) && (i3.setTransform(eg *= 4 / 3 * .625, 0, 0, eg, f9 - (e9 *= 4 / 3), fB - e9), i3.drawImage(zO[+(bN.y.mF[aB] === this.aa8)], 0, 0))
	}
}

function aXD() {
	function aVT(f9, f2, fB, aaA, aA2, fS, player) {
		if (!(fB < 1 || aA2 < fB))
			for (var aB = 0; aB <= f2; aB++) {
				var eg = bM.ih(f9, fB);
				if (bN.lB.aXl(eg) && !bA.qw.has(aaA, ac.ek(eg)) && ac.yk(eg, player)) return eg >> 2;
				f9 += fS
			}
		return -1
	}

	function aVX(fB, f2, f9, aaA, aVR, fS, player) {
		if (!(f9 < 1 || aVR < f9)) {
			f2 = Math.max(f2, 0);
			for (var aB = 0; aB <= f2; aB++) {
				var eg = bM.ih(f9, fB);
				if (bN.lB.aXl(eg) && !bA.qw.has(aaA, ac.ek(eg)) && ac.yk(eg, player)) return eg >> 2;
				fB += fS
			}
		}
		return -1
	}

	function aVb(iS, iT, aVO) {
		return -1 !== iT && (-1 === iS || bM.iU(iT, aVO) < bM.iU(iS, aVO)) ? iT : iS
	}
	this.hc = function(player, aVO) {
		if (bN.mS.mT(player))
			for (var aVP = bM.i8(), aaA = [];;) {
				var aZu = function(aVO, aVP, aaA, player) {
					for (var hG = bM.fA(aVO), hI = bM.fC(aVO), aVR = bS.fD - 2, aA2 = bS.fE - 2, aVS = -1, f5 = 0; f5 < aVP; f5++) {
						var aA1 = Math.max(hG - f5, 1),
							aMQ = Math.max(hI - f5, 1),
							yg = Math.min(hG + f5, aVR),
							yf = Math.min(hI + f5, aA2),
							iS = aVT(hG, yg - hG, hI - f5, aaA, aA2, 1, player),
							iT = aVT(hG - 1, hG - aA1 - 1, hI - f5, aaA, aA2, -1, player),
							yg = aVT(hG, yg - hG, hI + f5, aaA, aA2, 1, player),
							aA1 = aVT(hG - 1, hG - aA1 - 1, hI + f5, aaA, aA2, -1, player),
							aVW = aVX(hI, yf - hI - 1, hG - f5, aaA, aVR, 1, player),
							aVY = aVX(hI - 1, hI - aMQ - 2, hG - f5, aaA, aVR, -1, player),
							yf = aVX(hI, yf - hI - 1, hG + f5, aaA, aVR, 1, player),
							aMQ = aVX(hI - 1, hI - aMQ - 2, hG + f5, aaA, aVR, -1, player);
						if (aVS = aVb(aVS, iS, aVO), aVS = aVb(aVS, iT, aVO), aVS = aVb(aVS, yg, aVO), aVS = aVb(aVS, aA1, aVO), aVS = aVb(aVS, aVW, aVO), aVS = aVb(aVS, aVY, aVO), aVS = aVb(aVS, yf, aVO), 0 <= (aVS = aVb(aVS, aMQ, aVO)) &&
							f5 * f5 >= bM.iU(aVS, aVO)) return aVS
					}
					return -1
				}(aVO, aVP, aaA, player);
				if (-1 === aZu) break;
				var id = ac.ek(bM.es(aZu));
				if (bN.lB.aYY(player, id)) return !! function(player, aZu, aVO) {
					for (var hs = bM.is(aZu, aVO), aB = 0; aB < 4; aB++) {
						var eo = bM.iq(aZu, hs);
						if (ac.aII(bM.es(eo), player)) return bO.fd[6] = hs, 1;
						hs = (hs + 1) % 4
					}
					return
				}(player, aZu, aVO) && (bO.fd[7] = aZu, !0);
				aaA.push(id)
			}
		return !1
	}
}

function dg() {
	this.aSm = [L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491), L(492), L(493), L(494)];
	var aaD = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aCW = new Array(aaD.length), this.dd = function() {
		var g = bj.eO.data[155].value.split(";"),
			lH = g.length;
		if (function() {
				for (var f2 = aaD.length, aB = 0; aB < f2; aB++) bX.aCW[aB] = aaD[aB]
			}(), !(lH > aaD.length))
			for (var aB = 0; aB < lH; aB++) g[aB].length && (this.aCW[aB] = g[aB])
	}, this.aSo = function(eA, code) {
		for (var aCW = this.aCW, aaF = aaD, qV = (aCW[eA] = code, ""), f2 = aCW.length, aaG = [], aB = 0; aB < f2; aB++) aaG.push(aCW[aB] === aaF[aB] ? "" : aCW[aB]);
		f2--;
		for (aB = 0; aB < f2; aB++) qV += aaG[aB] + ";";
		bj.sG.sH(155, qV += aaG[f2])
	}, this.aSl = function() {
		bj.sG.sH(155, ""), this.dd()
	}, this.ea = function(code, eA) {
		return code === this.aCW[eA] || code === this.aCW[eA + 1]
	}
}

function dY() {
	var aaH = new Array(1),
		aaI = new Array(1),
		aaJ = 20,
		eP = 0,
		aaK = !1;

	function aaM() {
		aaJ++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aaI[aB] = 0, aaH[aB] = document.createElement("audio"), aaH[aB].src = src, aaH[aB].setAttribute("preload", "auto"), aaH[aB].setAttribute("controls", "none"), aaH[aB].style.display = "none", aaH[aB].onpause = function() {
					aaI[aB] = 1
				}, aaH[aB].oncanplaythrough = function() {
					aaI[aB] = 0 === aaI[aB] ? 1 : aaI[aB]
				}, document.body.appendChild(aaH[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aaK = !0
		}
	}, this.uV = function() {
		if (aaK) {
			aaK = !1;
			for (var aB = 0; 0 <= aB; aB--) aaH[aB].onpause = null, aaH[aB].oncanplaythrough = null, t.removeChild(document.body, aaH[aB]), aaH[aB] = null
		}
	}, this.play = function() {
		if (aaK) {
			var ds = performance.now();
			if (eP + 66 < ds)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aaI[aB]) return eP = ds, aaI[aB] = 2, void aaH[aB].play();
			0 < aaJ && (aaJ--, setTimeout(aaM, 66))
		}
	}
}

function ca() {
	this.a91 = function() {
		var aaP;
		return !(al.ks < 3 || ag.gp[lx[0]] >= aD.k6 >> 1) && (aD.hv ? 9 !== aD.ke && (aaP = ae.aJp(), !(2 * ae.aJq(bh.kv()) >= aaP)) : function() {
			if (8 === aD.ke) return !1;
			var aaP = ae.aJp();
			if (2 * ag.h3[lx[0]] >= aaP) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aZC = aD.kM, h3 = ag.h3, aB = 0; aB < aZC; aB++) h3[aB] = 512;
			var aZD = aD.xy,
				kZ = aE.kZ,
				hk = aE.hk;
			for (aB = aZC; aB < aZD; aB++) h3[aB] = kZ[hk[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var f2 = aD.xy, h3 = ag.h3, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < f2; aB++) h3[aB] = sResourcesValue
		} : function() {
			for (var f2 = aD.xy, h3 = ag.h3, sResourcesData = aD.data.sResourcesData, aB = 0; aB < f2; aB++) h3[aB] = sResourcesData[aB]
		})();
		bd.mr[8] = ag.h3[aD.em]
	}
}

function dP() {
	var aIQ = 501,
		aaV = (this.aaU = new Uint32Array(aIQ), this.a4N = new Uint32Array(aIQ), this.aCB = new Uint16Array(aIQ), this.aSu = 0, 1),
		ui = 0;

	function aaY(self) {
		self.max.fill(0)
	}

	function aaa(self, aB) {
		self.max[0] = Math.max(self.aaU[aB], self.max[0]), self.max[1] = Math.max(self.a4N[aB], self.max[1]), self.max[2] = Math.max(self.aCB[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aaW = 0, this.mr = new Array(21), this.aaX = null, this.de = function() {
		this.aaX = [L(495), L(496), L(497), L(498), L(499), L(500), L(501), L(502), L(316), L(317), L(503), L(504), L(505), L(506), "", L(507), L(508), L(509), L(274), L(510), L(511)]
	}, this.dd = function() {
		this.aSu = 0, aaV = 1, this.aaW = 0, ui = 0, aaY(this), this.mr.fill(0)
	}, this.qE = function(player, ib) {
		bA.gN.a4H(player) && (this.mr[0] += ib + 1, this.mr[1]++, this.mr[12] += bO.fY[1])
	}, this.pj = function(player, pM) {
		__fx.donationsTracker.logDonation(player, pM, bO.fY[0]);
		player === aD.em && (aN.pj(bO.fY[0], bO.fY[1], pM), this.mr[12] += bO.fY[1], this.mr[16] += bO.fY[0]), pM === aD.em && (aN.a7c(bO.fY[0], player), this.mr[10] += bO.fY[0])
	}, this.qI = function(player) {
		bA.gN.a4H(player) && (this.mr[2]++, this.mr[12] += bO.fY[1])
	}, this.qQ = function(player) {
		bA.gN.a4H(player) && (this.mr[19]++, this.mr[12] += bO.fY[1])
	}, this.aZ6 = function(player) {
		bA.gN.a4H(player) && this.mr[20]++
	}, this.gR = function(player, a52, eA) {
		bA.gN.a4H(player) && (this.mr[eA] += a52)
	}, this.eV = function() {
		var self;
		this.aaW || 0 < ui-- || ((self = this).aaU[self.aSu] = ag.gp[aD.em], self.a4N[self.aSu] = ag.h3[aD.em], self.aCB[self.aSu] = ae.aCC(aD.em), aaa(self, self.aSu), self.aSu++, self.aSu === aIQ && function(self) {
			aaY(self), aaa(self, 0), self.aSu = 1 + bL.dt(aIQ, 2);
			for (var aB = 1; aB < self.aSu; aB++) self.aaU[aB] = self.aaU[2 * aB], self.a4N[aB] = self.a4N[2 * aB], self.aCB[aB] = self.aCB[2 * aB], aaa(self, aB);
			aaV *= 2
		}(self), ui = aaV - 1, be.mi(), 0 === ag.mv[aD.em] && (self.aaW = bf.kJ()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.tC = 0, this.tD = 0, this.aac = 0, this.aad = 0, this.a9F = 0, this.tv = 0;
	var aaf = this.aae = 0;
	this.aag = 0, this.aah = 0, this.aai = 0, this.a8a = 0, this.eA = 0, this.aBm = null, this.hn = !1, this.aaj = -1, this.aak = !1, this.aal = [0, 0], this.de = function() {
		this.aBm = [L(512), L(117, 0, "Balance"), L(116, 0, "Interest"), L(513)]
	}, this.dd = function() {
		this.hn = !1, this.aaj = -1, this.aak = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var f5 = a0.a1.iA() && h.i < h.j ? 1 : a0.a1.iA() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(f5 * this.i), this.i -= a0.a1.iA() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a8a = Math.floor(this.j / 150), this.a8a = Math.max(this.a8a, 1.5), this.tC = Math.floor(1 + .02 * this
			.i), this.tD = Math.floor(1 + .04 * this.i), this.a9F = this.tD, aaf = Math.floor(.75 * this.a9F), this.tv = Math.floor(1 + .075 * this.i), this.aag = Math.floor(1 + .1125 * this.i), this.aah = Math.floor(this.i * (a0.a1.iA() ? .03 :
				.029)), this.aah = Math.max(this.aah, 4), this.aai = Math.floor(.035 * this.i), this.aai = Math.max(this.aai, 4), this.aae = this.j - 2 * this.a9F - this.tv - this.aag, this.hn && this.aam()
	}, this.hE = function(lb, lc) {
		var y1, y0;
		return !!this.hn && (y0 = lb, y1 = lc, lb -= bL.dt(h.i - this.i, 2), lc -= bL.dt(h.j - this.j, 2), lb < 0 || lc < 0 || lb >= this.i || lc >= this.j || lb >= this.i - this.aag && lc < this.aag ? -1 !== aM.hE(y0, y1) || bC.hE(y0, y1) ||
			this.s5() : lc < this.aag || (lc < this.j - this.tv ? (this.aak = !0, this.aaj = (lb - 2 * this.tC - this.aac) / this.aad, 3 !== this.eA && (bf.dk = !0)) : (y0 = (y0 = Math.floor(lb / (this.i / this.aBm.length))) < 0 ? 0 : y0 >=
				this.aBm.length ? this.aBm.length - 1 : y0) !== this.eA && (this.eA = y0, this.aam(), bf.dk = !0)), !0)
	}, this.a2N = function(lb, lc) {
		return this.aal[0] = lb, this.aal[1] = lc, !(!this.hn || !this.aak || (lb -= bL.dt(h.i - this.i, 2), lc = this.aaj, this.aaj = (lb - 2 * this.tC - this.aac) / this.aad, (0 <= this.aaj && this.aaj <= 1 || 0 <= lc && lc <= 1) && (bf.dk = !
			0), 0))
	}, this.a2m = function() {
		this.aak && (this.aak = !1)
	}, this.a2y = function() {
		this.hn ? this.s5() : this.show()
	}, this.show = function() {
		bd.aSu < 2 || (this.hn = !0, this.aam())
	}, this.s5 = function() {
		this.hn = !1, this.aaj = -1, bf.dk = !0
	}, this.aam = function() {
		this.eA < 2 ? this.aac = aQ.measureText(bA.rn.a06(bd.max[this.eA]), bA.qo.sf(0, this.aah)) : 2 === this.eA && (this.aac = aQ.measureText(bA.rn.a4v(6, 2), bA.qo.sf(0, this.aah))), this.aad = this.i - 2 * this.tC - this.aac - this.tD
	}, this.mi = function() {
		this.hn && this.aam()
	}, this.vR = function() {
		this.hn && this.a9X()
	}, this.a9X = function() {
		var f9 = bL.dt(h.i - this.i, 2),
			fB = bL.dt(h.j - this.j, 2);
		vS.setTransform(1, 0, 0, 1, f9, fB), vS.fillStyle = bB.ns, vS.fillRect(0, this.aag, this.i, this.j - this.aag), this.aan(), this.aRX(), vS.strokeRect(0, 0, this.i, this.j), bA.qo.textAlign(vS, 2), vS.font = bA.qo.sf(0, this.aah), 0 ===
			this.eA ? this.aao(bd.aaU, f9, fB) : 1 === this.eA ? this.aao(bd.a4N, f9, fB) : 2 === this.eA ? this.aap(f9, fB) : 3 === this.eA && (this.aaq(f9, fB), this.aar(f9, fB)), aM.a6j(Math.floor(f9 + this.i - .725 * this.aag), Math.floor(
				fB + .275 * this.aag), Math.floor(.45 * this.aag)), vS.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aan = function() {
		var aB, ds;
		for (vS.lineWidth = this.a8a, bA.qo.textBaseline(vS, 1), bA.qo.textAlign(vS, 1), vS.strokeStyle = bB.nv, vS.font = bA.qo.sf(1, this.aai), ds = this.i / this.aBm.length, vS.fillStyle = bB.oH, vS.fillRect(this.eA * ds, this.j - this.tv, ds,
				this.tv), vS.fillStyle = bB.nv, vS.fillRect(0, this.j - this.tv - .5 * this.a8a, this.i, this.a8a), aB = 1; aB <= 3; aB++) vS.fillRect(aB * ds, this.j - this.tv, this.a8a, this.tv);
		for (aB = this.aBm.length - 1; 0 <= aB; aB--) vS.fillText(bA.z3.a3v(this.aBm[aB], 0, .9 * ds), (aB + .5) * ds, this.j - .46 * this.tv)
	}, this.aRX = function() {
		vS.fillStyle = bB.oi, vS.fillRect(0, 0, this.i, this.aag), vS.fillStyle = bB.nv, vS.fillRect(0, this.aag - .5 * this.a8a, this.i, this.a8a), vS.font = bA.qo.sf(1, .39 * this.aag), vS.fillText(bA.z3.a3v(L(514), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aag))
	}, this.aao = function(g, f9, fB) {
		var lH = bd.max[this.eA],
			a3G = (vS.setTransform(1, 0, 0, 1, f9 + 2 * this.tC + this.aac, fB + this.a9F + this.aag), vS.lineWidth = 2, this.aae / Math.sqrt(lH));
		vS.beginPath(), vS.moveTo(this.aad, this.aae - a3G * Math.sqrt(g[bd.aSu - 1]));
		for (var aB = bd.aSu - 2; 0 <= aB; aB--) vS.lineTo(aB * this.aad / (bd.aSu - 1), this.aae - a3G * Math.sqrt(g[aB]));
		vS.stroke();
		f9 = this.a6j(g, a3G, .5);
		f9 < .95 && vS.fillText(bA.rn.a06(lH), -this.tC, 0), .05 < Math.abs(f9 - .5) && vS.fillText(bA.rn.a06(Math.floor(lH / 4)), -this.tC, Math.floor(this.aae / 2)), .05 < f9 && vS.fillText("0", -this.tC, this.aae)
	}, this.aap = function(f9, fB) {
		vS.setTransform(1, 0, 0, 1, f9 + 2 * this.tC + this.aac, fB + this.a9F + this.aag), vS.lineWidth = 2;
		var a3G = this.aae / Math.max(bd.max[this.eA], 1);
		vS.beginPath(), vS.moveTo(this.aad, this.aae - a3G * bd.aCB[bd.aSu - 1]);
		for (var aB = bd.aSu - 2; 0 <= aB; aB--) vS.lineTo(aB * this.aad / (bd.aSu - 1), this.aae - a3G * bd.aCB[aB]);
		vS.stroke();
		f9 = this.a6j(bd.aCB, a3G, 1), fB = bd.max[this.eA] / 100;
		f9 < .95 && vS.fillText(bA.rn.a4v(fB, 2), -this.tC, 0), .05 < Math.abs(f9 - .5) && vS.fillText(bA.rn.a4v(fB / 2, 2), -this.tC, Math.floor(this.aae / 2)), .05 < f9 && vS.fillText(bA.rn.a4v(0, 2), -this.tC, this.aae)
	}, this.aaq = function(f9, fB) {
		vS.setTransform(1, 0, 0, 1, f9 + .34 * this.i, fB + 2 * aaf + this.aag), bA.qo.textAlign(vS, 2);
		for (var aBU = this.j - 4 * aaf - this.tv - this.aag, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) vS.fillText(bA.z3.a3v(bd.aaX[g[aB]], 0, .31 * this.i), 0, aB * aBU / 9);
		var fT = bd.mr;
		for (vS.setTransform(1, 0, 0, 1, f9 + .39 * this.i, fB + 2 * aaf + this.aag), bA.qo.textAlign(vS, 0), vS.fillText(bA.rn.a4v(100 * fT[0] / (1024 * Math.max(fT[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) vS.fillText(fT[g[aB]].toString(), 0,
			aB * aBU / 9);
		vS.fillText(bA.rn.a4v(100 * (1 - ag.gp[aD.em] / fT[7]), 0), 0, aBU)
	}, this.aar = function(f9, fB) {
		vS.setTransform(1, 0, 0, 1, f9 + .79 * this.i, fB + 2 * aaf + this.aag), bA.qo.textAlign(vS, 2);
		var aB, aBU = this.j - 4 * aaf - this.tv - this.aag;
		for (vS.fillStyle = bB.oC, aB = 2; 0 <= aB; aB--) vS.fillText(bA.z3.a3v(bd.aaX[aB + 8], 0, .31 * this.i), 0, aB * aBU / 9);
		vS.fillText(bA.z3.a3v(bd.aaX[18], 0, .31 * this.i), 0, 3 * aBU / 9), vS.fillStyle = bB.oB, vS.fillText(bA.z3.a3v(bd.aaX[11], 0, .31 * this.i), 0, 4 * aBU / 9), vS.fillStyle = bB.oU, vS.fillText(bA.z3.a3v(bd.aaX[13], 0, .31 * this.i), 0,
				5 * aBU / 9), vS.fillText(bA.z3.a3v(bd.aaX[15], 0, .31 * this.i), 0, 6 * aBU / 9), vS.fillText(bA.z3.a3v(bd.aaX[16], 0, .31 * this.i), 0, 7 * aBU / 9), vS.fillText(bA.z3.a3v(bd.aaX[12], 0, .31 * this.i), 0, 8 * aBU / 9), vS
			.fillStyle = bB.oT, vS.fillText(bA.z3.a3v(bd.aaX[17], 0, .31 * this.i), 0, aBU), vS.fillStyle = bB.oC;
		var fT = bd.mr,
			aFY = fT[8] + fT[9] + fT[10] + fT[18],
			aFY = bA.rn.a06(aFY),
			aQL = vS.measureText(aFY).width,
			f9 = (vS.setTransform(1, 0, 0, 1, f9 + .83 * this.i + aQL, fB + 2 * aaf + this.aag), vS.fillText(bA.rn.a06(fT[8]), 0, 0), vS.fillText(bA.rn.a06(fT[9]), 0, aBU / 9), vS.fillText(bA.rn.a06(fT[10]), 0, 2 * aBU / 9), vS.fillText(bA.rn
				.a06(fT[18]), 0, 3 * aBU / 9), vS.fillStyle = bB.oB, vS.fillText(aFY, 0, 4 * aBU / 9), vS.fillStyle = bB.oU, vS.fillText(bA.rn.a06(fT[13]), 0, 5 * aBU / 9), vS.fillText(bA.rn.a06(fT[15]), 0, 6 * aBU / 9), vS.fillText(bA.rn
				.a06(fT[16]), 0, 7 * aBU / 9), vS.fillText(bA.rn.a06(fT[12]), 0, 8 * aBU / 9), fT[12] + fT[13] + fT[15] + fT[16]);
		vS.fillStyle = bB.oT, vS.fillText(bA.rn.a06(f9), 0, aBU), vS.fillStyle = bB.nv
	}, this.a6j = function(g, a3G, aAA) {
		var aB, e, fk;
		return this.aaj < 0 || 1 < this.aaj ? .25 : (aB = this.aaj * (bd.aSu - 1), fk = g[e = Math.floor(aB)], fk += (aB - e) * (g[e < bd.aSu - 1 ? e + 1 : e] - fk), vS.strokeStyle = bB.ny, .04 < this.aaj && this.aat(0, this.aae - a3G * Math.pow(
				fk, aAA), aB * this.aad / (bd.aSu - 1), this.aae - a3G * Math.pow(fk, aAA)), .04 < fk / bd.max[this.eA] && this.aat(aB * this.aad / (bd.aSu - 1), this.aae, aB * this.aad / (bd.aSu - 1), this.aae - a3G * Math.pow(fk, aAA)), vS
			.fillStyle = bB.oW, vS.beginPath(), vS.arc(aB * this.aad / (bd.aSu - 1), this.aae - a3G * Math.pow(fk, aAA), Math.max(2, .014 * this.j), 0, 2 * Math.PI), vS.fill(), g = this.aaj * bf.aCD, g = 0 === ag.mv[aD.em] ? Math.floor(g * bd
				.aaW) : Math.floor(g * bf.kJ()), vS.fillStyle = bB.nv, vS.fillText(1 === aAA ? bA.rn.a4v(fk / 100, 2) : bA.rn.a06(Math.floor(fk)), -this.tC, this.aae - a3G * Math.pow(fk, aAA)), bA.qo.textAlign(vS, 1), vS.fillText(aW.aC0(g),
				aB * this.aad / (bd.aSu - 1), this.aae + this.aah - (a0.a1.iA() ? 2 : 0) - this.a8a), bA.qo.textAlign(vS, 2), a3G * Math.pow(fk, aAA) / this.aae)
	}, this.aat = function(nL, nM, nY, nZ) {
		vS.beginPath(), vS.moveTo(nL, nM), vS.lineTo(nY, nZ), vS.stroke()
	}
}

function by() {
	this.aSv = "https://territorial.io/changelog", this.aT0 = "https://territorial.io/terms", this.aT1 = "https://territorial.io/privacy", this.aSz = "https://territorial.io/tutorial", this.aSy = "https://territorial.io/players", this.aSw =
		"https://territorial.io/clans", this.aSx = "https://territorial.io/clan-results", this.aPU = "https://patreon.com/c/territorial", this.aDV = "https://play.google.com/store/apps/details?id=territorial.io", this.a1x =
		"https://apps.apple.com/app/id1581110913", this.aDW = "https://discord.gg/pthqvpTXmh", this.aDX = "https://www.instagram.com/davidtschacher/", this.ze =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aau, this.z0 = new aav, this.dd = function() {
		this.y.dd()
	}, this.eV = function() {
		0 !== this.y.aV6 && this.y.aV6--
	}
}

function aav() {
	this.vR = function() {
		if (0 !== bP.y.aV6 && (vS.globalAlpha = Math.min(bP.y.aV6 / 580, 1), vS.drawImage(bP.y.aay, 1 + aS.yy(), 1 + aS.yz()), vS.globalAlpha = 1, aD.hP)) {
			for (var nL = ic / iC, nM = ie / iC, nY = (h.i + ic) / iC, nZ = (h.j + ie) / iC, ga = bP.y.aaz * iC, ab0 = bP.y.ab0, aB = aD.kM - 1; 0 <= aB; aB--) ! function(aB, ga, nL, nM, nY, nZ, ab0) {
				var highlight;
				0 === ag.mv[aB] || 0 === ag.gp[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (ga *= 2), nY = h.i * ((ag.iu[aB] + ag.iv[aB] + 1) / 2 - nL) / (nY - nL) - .5 * ga, nL = h.j * ((ag.iw[
					aB] + ag.ix[aB] + 1) / 2 - nM) / (nZ - nM) - .5 * ga, nY > h.i) || nL > h.j || nY < -ga || nL < -ga || (highlight ? vS.setTransform(2 * iC, 0, 0, 2 * iC, nY, nL) : vS.setTransform(iC, 0, 0, iC, nY, nL), vS.drawImage(
					ab0[aD.hv ? bg.f0[aB] : 1], 0, 0))
			}(aB, ga, nL, nM, nY, nZ, ab0);
			vS.setTransform(iC, 0, 0, iC, 0, 0)
		}
	}
}

function aau() {
	this.aaz = 28, this.aV6 = 0, this.aay = null;
	var ab2 = this.ab0 = null;

	function ab5(hx, ab6) {
		var f9, fB, eo, iL, a3h = bA.qo.xI(hx, hx),
			i3 = bA.qo.getContext(a3h, !0),
			i0 = bA.qo.getImageData(i3, hx, hx),
			xT = i0.data,
			lH = (hx >> 1) - .5,
			ab7 = .5 + lH;
		for (ab7 *= ab7, fB = 0; fB < hx; fB++)
			for (f9 = 0; f9 < hx; f9++) iL = (iL = f9 - lH) * iL + (iL = fB - lH) * iL, xT[eo = 4 * (fB * hx + f9)] = ab6[0], xT[1 + eo] = ab6[1], xT[2 + eo] = ab6[2], xT[3 + eo] = (ab7 - iL) * ab6[3] / ab7;
		return i3.putImageData(i0, 0, 0), a3h
	}

	function aa9(aB, i3, a3h, hx) {
		var highlight, f9, fB;
		0 !== ag.mv[aB] && 0 !== ag.gp[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hx *= 2), f9 = ag.iu[aB] + ag.iv[aB] + 1 - hx - 2 >> 1, fB = ag.iw[aB] + ag.ix[aB] + 1 - hx - 2 >> 1, highlight ? i3
			.drawImage(a3h[aD.hv ? 9 === aD.ke && 5 === aE.hk[aB] ? 3 : bg.f0[aB] : aB < aD.kM ? 1 : 0], f9, fB, hx, hx) : i3.drawImage(a3h[aD.hv ? 9 === aD.ke && 5 === aE.hk[aB] ? 3 : bg.f0[aB] : aB < aD.kM ? 1 : 0], f9, fB))
	}
	this.dd = function() {
		var sQ;
		this.aV6 = 700,
			function(sQ) {
				var hx = sQ.aaz;
				if (sQ.ab0 = [], ab2 = [], aD.hv) {
					for (var aB = 0; aB <= aD.y5; aB++) sQ.ab0.push(ab5(hx, bg.aYT[bg.kj[aB]])), ab2.push(ab5(hx >> 1, bg.aYT[bg.kj[aB]]));
					9 === aD.ke && ab2.push(ab5(hx, bg.aYT[1]))
				} else sQ.ab0.push(ab5(hx, bg.aYT[7])), sQ.ab0.push(ab5(hx, bg.aYT[4])), ab2.push(ab5(hx >> 1, bg.aYT[7]))
			}(this),
			function(sQ, ab8) {
				var aB, aay = sQ.aay,
					i3 = bA.qo.getContext(aay, !0),
					f2 = aD.ez,
					hx = sQ.aaz >> 1;
				i3.imageSmoothingEnabled = !1, i3.setTransform(1, 0, 0, 1, 0, 0), ab8 && i3.clearRect(0, 0, aay.width, aay.height);
				if (9 === aD.ke) {
					hx <<= 1;
					sQ = az.kn[5];
					for (aB = f2 - sQ; aB < f2; aB++) aa9(aB, i3, ab2, hx);
					f2 -= sQ, hx >>= 1
				}
				for (aB = aD.kM; aB < f2; aB++) aa9(aB, i3, ab2, hx)
			}(this, null !== (sQ = this).aay && sQ.aay.width === bS.fD - 2 && sQ.aay.height === bS.fE - 2 || (sQ.aay = bA.qo.xI(bS.fD - 2, bS.fE - 2), !1)), aD.hP || this.a5D()
	}, this.aYS = ab5, this.a5D = function() {
		for (var f2 = aD.kM, hx = this.aaz, ab0 = this.ab0, i3 = bA.qo.getContext(this.aay, !0), aB = 0; aB < f2; aB++) aa9(aB, i3, ab0, hx)
	}
}

function d9() {
	function abB() {
		8 === aD.ke && 1 === aD.a0p && bR.a0R.a0o()
	}

	function abA(player) {
		aD.hP ? (ak.aIX(player), al.aLb(), aD.kg && aD.qA.eV()) : b3.aDp(player)
	}
	this.pc = function(player) {
		aN.a12(player, player === aD.em ? 21 : 22), abA(player), abB()
	}, this.q7 = function(player) {
		1 === aD.a0p && 0 !== ag.mv[player] && 2 !== ag.a4D[player] && abA(player), aD.a0s--, aD.a0r--, aN.a12(player, 4), bA.gN.hC(2) && aW.mh(!0), abB()
	}
}

function dJ() {
	this.aVM = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aBR = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nv, "rgb(170,170,170)"
	], this.abC = [bB.nv, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nv, bB.nm], this.abD = [bB.nm, bB.nv, bB.nv, bB.nv, bB.nm, bB.nm, bB.nm, bB.nm, bB.nv];
	var aLl = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aL4 = ["rgba(" + aLl[0] + ",", "rgba(" + aLl[1] + ",", "rgba(" + aLl[2] + ",", "rgba(" + aLl[3] + ",", "rgba(" + aLl[4] + ",", "rgba(" + aLl[5] + ",", "rgba(" + aLl[6] + ",", "rgba(" + aLl[7] + ",", "rgba(" + aLl[8] + ",", "rgba(" + aLl[9] +
			","
		], this.aL5 = ["rgb(" + aLl[0] + ")", "rgb(" + aLl[1] + ")", "rgb(" + aLl[2] + ")", "rgb(" + aLl[3] + ")", "rgb(" + aLl[4] + ")", "rgb(" + aLl[5] + ")", "rgb(" + aLl[6] + ")", "rgb(" + aLl[7] + ")", "rgb(" + aLl[8] + ")", "rgb(" + aLl[9] +
			")"
		], this.a1B = null, this.aYT = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aY8 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kj = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.f0 = new Uint8Array(aD.ez), this.aBS = new Uint8Array(aD.ez), this.yB = new Uint16Array(aD.ez), this.yC = new Uint16Array(this.kj.length + 1), this.yD = new Uint16Array(this.kj.length), this.de =
		function() {
			this.a1B = [L(515), L(516), L(517), L(518), L(519), L(520), L(521), L(522), L(523)]
		}, this.dd = function() {
			if (this.f0.fill(0), this.aBS.fill(0), this.abE(), aD.hv) {
				if (9 === aD.ke) {
					for (var f0 = bg.f0, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) f0[aB] = 1;
					var f2 = aD.ez;
					for (aB = aD.data.teamPlayerCount[7]; aB < f2; aB++) f0[aB] = 2;
					bg.kj[1] = 7, bg.kj[2] = 8
				} else aD.kg ? function() {
					var aY8 = bg.aY8,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kM - 1; 0 <= aB; aB--) colorsData[aB] = ay.jd(262144);
					var abP = 0,
						fI = 768,
						aUp = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var f5 = 0, fM = 0; fM < 3; fM++) f5 += Math.abs(aY8[aB][fM] - aUp[fM]);
							f5 < fI && (abP = aB, fI = f5)
						} var abQ = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) abQ[aB] = teamPlayerCount[aB];
					var kj = bg.kj,
						abR = new Uint8Array(9),
						gU = (kj[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) abQ[aB] && (abR[aB] = gU, kj[gU++] = aB);
					var jc = aD.kM,
						f0 = bg.f0;
					abQ[abP] ? (abQ[abP]--, f0[0] = abR[abP]) : jc = 0;
					var ea = 0;
					for (aB = jc; aB < aD.xy; aB++) {
						var ht = kj[ea];
						if (abQ[ht]) abQ[ht]--, f0[aB] = abR[ht];
						else if (aB--, 9 <= ++ea) return console.log("error 325")
					}
				}() : this.eV();
				! function() {
					for (var f2 = aD.ez, yB = bg.yB, yC = bg.yC, yD = bg.yD, f0 = bg.f0, kj = bg.kj, y4 = kj.length, eO = new Array(y4), aB = 0; aB < y4; aB++) eO[aB] = [];
					for (aB = 0; aB < f2; aB++) eO[kj[f0[aB]]].push(aB);
					for (aB = 1; aB <= y4; aB++) yC[aB] = yC[aB - 1] + eO[aB - 1].length;
					for (aB = 0; aB < y4; aB++)
						for (var gU = eO[aB].length, lH = yC[aB], ht = 0; ht < gU; ht++) yB[ht + lH] = eO[aB][ht];
					var kM = aD.kM;
					for (aB = 0; aB < y4; aB++)
						for (gU = eO[aB].length, lH = yC[aB], ht = 0; ht < gU; ht++)
							if (yB[ht + lH] >= kM) {
								yD[aB] = ht;
								break
							}
				}(), ! function() {
					for (var f2 = aD.ez, f0 = bg.f0, aBS = bg.aBS, kj = bg.kj, aB = 0; aB < f2; aB++) aBS[aB] = kj[f0[aB]];
					9 === aD.ke && aBS.fill(1, f2 - az.kn[5])
				}()
			}
		}, this.abE = function() {
			for (var aB = this.kj.length - 1; 0 <= aB; aB--) this.kj[aB] = aB
		}, this.eV = function() {
			var zv = new Uint8Array(aD.kM),
				zw = new Uint8Array(aD.kM),
				abJ = new Uint16Array(8),
				abK = new Uint16Array(this.kj.length);
			this.abL(zv, zw, abJ, 1), this.aHy(abJ), this.abM(abK, zv, zw), this.abN(zv, zw, abK), this.abO()
		}, this.abL = function(zv, zw, abQ, abS) {
			for (var fM, e, abT, f2 = this.kj.length - abS, g = new Uint16Array(f2), aY8 = this.aY8, colorsData = aD.data.colorsData, aB = aD.kM - 1; 0 <= aB; aB--) {
				for (fM = f2; abS <= fM; fM--) g[fM - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aY8[fM][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aY8[fM][1]) + Math.abs(4 * (63 & colorsData[aB]) - aY8[fM][2]);
				for (abT = 768, fM = f2 - 1; 0 <= fM; fM--) g[e = (fM + aB) % f2] < abT && (abT = g[e], zv[aB] = e);
				for (abQ[zv[aB]] += 4, abT = 768, fM = f2 - 1; 0 <= fM; fM--) g[e = (fM + aB) % f2] < abT && e !== zv[aB] && (abT = g[e], zw[aB] = e);
				abQ[zw[aB]]++
			}
		}, this.aHy = function(abQ) {
			for (var fM, lJ, f2 = this.kj.length - 1, aB = f2; 0 <= aB; aB--) this.kj[aB] = aB;
			for (aB = f2 - 1; 0 <= aB; aB--) abQ[aB]++;
			for (aB = 1; aB <= f2; aB++) {
				for (lJ = 0, fM = 1; fM < f2; fM++) abQ[fM] > abQ[lJ] && (lJ = fM);
				abQ[lJ] = 0, this.kj[aB] = lJ + 1
			}
		}, this.abM = function(abK, zv, zw) {
			var fM, a1Z, ea, f5, e, nX, tT, abU = this.kj.length - 1,
				rH = new Uint16Array(abU),
				abV = [],
				abW = 0,
				a1Y = [],
				abX = [];
			loop: for (var aB = 0; aB < aD.kM; aB++)
				if (null !== (a1Z = bA.rn.a1a(ag.a1X[aB]))) {
					for (fM = a1Y.length - 1; 0 <= fM; fM--)
						if (a1Z === a1Y[fM]) {
							abX[fM].push(aB), abW = Math.max(abW, abX[fM].length);
							continue loop
						} a1Y.push(a1Z), abV.push(!1), abX.push([aB]), abW = Math.max(abW, 1)
				}
			for (; 2 < aD.y5 && abW > bL.dt(aD.kM, aD.y5);) aD.y5--, aD.ke--;
			for (fM = a1Y.length - 1; 0 <= fM; fM--) {
				for (f5 = -1, ea = a1Y.length - 1; 0 <= ea; ea--) !abV[ea] && (-1 === f5 || abX[ea].length > abX[f5].length) && (f5 = ea);
				for (ea = abU - 1; 0 <= ea; ea--) rH[ea] = 1;
				for (ea = abX[f5].length - 1; 0 <= ea; ea--) rH[zv[abX[f5][ea]]] += 3, rH[zw[abX[f5][ea]]]++;
				for (aB = abU - 1; 0 <= aB; aB--) {
					for (e = f5 % abU, ea = abU - 1; 0 <= ea; ea--) rH[ea] > rH[e] && (e = ea);
					for (nX = -1, ea = aD.y5; 0 < ea; ea--)
						if (this.kj[ea] === e + 1) {
							nX = ea;
							break
						} if (rH[e] = 0, -1 !== nX) {
						for (tT = 0, ea = aD.y5; 0 < ea; ea--) abK[nX] > abK[ea] && tT++;
						if (tT !== aD.y5 - 1) {
							for (ea = abX[f5].length - 1; 0 <= ea; ea--) abK[nX]++, this.f0[abX[f5][ea]] = nX;
							break
						}
					}
				}
				abV[f5] = !0
			}
		}, this.abN = function(zv, zw, abK) {
			for (var aB, iK, f2 = this.kj.length - 1, border = bL.dt(aD.kM, aD.y5), abY = (0 < aD.kM % aD.y5 && border++, new Uint8Array(1 + f2)), fM = f2; 1 <= fM; fM--) abY[this.kj[fM]] = fM;
			for (aB = 0; aB < aD.kM; aB++) iK = abY[zv[aB] + 1], 0 === this.f0[aB] && iK <= aD.y5 && abK[iK] < border && (abK[iK]++, this.f0[aB] = iK);
			for (aB = 0; aB < aD.kM; aB++) iK = abY[zw[aB] + 1], 0 === this.f0[aB] && iK <= aD.y5 && abK[iK] < border && (abK[iK]++, this.f0[aB] = iK);
			for (fM = aD.y5; 1 <= fM; fM--)
				for (aB = aD.kM - 1; 0 <= aB && !(abK[fM] >= border); aB--) 0 === this.f0[aB] && (abK[fM]++, this.f0[aB] = fM)
		}, this.abO = function() {
			for (var aB = aD.kM; aB < aD.ez; aB++) this.f0[aB] = 1 + aB % aD.y5
		}
}

function db() {
	this.gq = function() {
		for (var f9, fB, aB = fx - 1; 0 <= aB; aB--) f9 = bL.dt(fz[aB], 4) % bS.fD, fB = bL.dt(fz[aB], 4 * bS.fD), ag.iu[fs] = Math.min(f9, ag.iu[fs]), ag.iw[fs] = Math.min(fB, ag.iw[fs]), ag.iv[fs] = Math.max(f9, ag.iv[fs]), ag.ix[fs] = Math
			.max(fB, ag.ix[fs])
	}, this.gB = function() {
		var f5, gZ, aB, f2 = ag.gT[fs].length,
			f4 = ac.f4;
		loop: for (aB = f2 - 1; 0 <= aB; aB--) {
			for (f5 = 3; 0 <= f5; f5--)
				if (gZ = ag.gT[fs][aB] + f4[f5], ac.et(gZ) || ac.gb(gZ) && ac.eu(gZ) !== fs) {
					ac.jY(ag.gT[fs][aB], fs);
					continue loop
				} ag.gT[fs][aB] = ag.gT[fs][f2 - 1], ag.gT[fs].pop(), f2--
		}
	}, this.gC = function() {
		var player = fs,
			gh = ag.gh,
			gi = ag.gi,
			fR = ag.fR,
			f2 = gh[player].length,
			f4 = ac.f4;
		loop: for (var aB = f2 - 1; 0 <= aB; aB--) {
			for (var abZ = !1, aba = !1, f5 = 3; 0 <= f5; f5--) {
				var gZ = gh[player][aB] + f4[f5];
				if (ac.aII(gZ, player)) continue loop;
				abZ = abZ || ac.iF(gZ), aba = aba || ac.aIH(gZ)
			}
			abZ ? gi[player].push(gh[player][aB]) : aba ? fR[player].push(gh[player][aB]) : ac.yX(gh[player][aB], player), gh[player][aB] = gh[player][f2 - 1], gh[player].pop(), f2--
		}
	}, this.gf = function() {
		ag.gp[fw] -= fx
	}, this.gg = function(border) {
		for (var f2 = border.length, aB = f2 - 1; 0 <= aB; aB--) ac.ys(fw, border[aB]) || (border[aB] = border[f2 - 1], border.pop(), f2--)
	}, this.gj = function(border) {
		for (var f2 = border.length, aB = f2 - 1; 0 <= aB; aB--) !ac.ys(fw, border[aB]) && ac.ex(border[aB]) && (border[aB] = border[f2 - 1], border.pop(), f2--)
	}, this.gk = function(border) {
		for (var f5, gZ, f2 = border.length, f4 = ac.f4, aB = f2 - 1; 0 <= aB; aB--)
			for (f5 = 3; 0 <= f5; f5--)
				if (gZ = border[aB] + f4[f5], ac.aII(gZ, fw)) {
					ag.gh[fw].push(border[aB]), border[aB] = border[f2 - 1], border.pop(), f2--;
					break
				}
	}, this.gl = function() {
		for (var f5, gZ, f4 = ac.f4, aB = fx - 1; 0 <= aB; aB--)
			for (f5 = 3; 0 <= f5; f5--) gZ = fz[aB] + f4[f5], ac.yv(fw, gZ) && ac.aIJ(gZ) && (ag.gh[fw].push(gZ), ac.gW(gZ, fw))
	}, this.gm = function() {
		var f9, fB;
		loop: for (; ag.iw[fw] < ag.ix[fw];) {
			for (f9 = ag.iv[fw]; f9 >= ag.iu[fw]; f9--)
				if (ac.ys(fw, 4 * (ag.iw[fw] * bS.fD + f9))) break loop;
			ag.iw[fw]++
		}
		loop: for (; ag.iw[fw] < ag.ix[fw];) {
			for (f9 = ag.iv[fw]; f9 >= ag.iu[fw]; f9--)
				if (ac.ys(fw, 4 * (ag.ix[fw] * bS.fD + f9))) break loop;
			ag.ix[fw]--
		}
		loop: for (; ag.iu[fw] < ag.iv[fw];) {
			for (fB = ag.ix[fw]; fB >= ag.iw[fw]; fB--)
				if (ac.ys(fw, 4 * (fB * bS.fD + ag.iu[fw]))) break loop;
			ag.iu[fw]++
		}
		loop: for (; ag.iu[fw] < ag.iv[fw];) {
			for (fB = ag.ix[fw]; fB >= ag.iw[fw]; fB--)
				if (ac.ys(fw, 4 * (fB * bS.fD + ag.iv[fw]))) break loop;
			ag.iv[fw]--
		}
	}, this.ev = function(player, jV) {
		return 0 === bg.f0[player] || bg.f0[player] !== bg.f0[jV]
	}, this.hX = function(player) {
		for (var aB, ga, f2 = ag.gh[player].length, f4 = ac.f4, f5 = 3; 0 <= f5; f5--)
			for (ga = f4[f5], aB = 0; aB < f2; aB++)
				if (ac.et(ag.gh[player][aB] + ga)) return !0;
		return !1
	}, this.aIT = function(player) {
		for (var aB, ga, f2 = ag.gh[player].length, f4 = ac.f4, f5 = 3; 0 <= f5; f5--)
			for (ga = f4[f5], aB = 0; aB < f2; aB++)
				if (ac.jX(ag.gh[player][aB]) && ac.et(ag.gh[player][aB] + ga)) return !0;
		return !1
	}, this.ha = function(a4J, a4K) {
		for (var aB, ds, ga, gZ, aZC = ag.gh[a4J].length, aZD = ag.gh[a4K].length, f4 = (aZD < aZC && (ds = a4J, a4J = a4K, a4K = ds, ds = aZC, aZC = aZD, 0), ac.f4), f5 = 3; 0 <= f5; f5--)
			for (ga = f4[f5], aB = 0; aB < aZC; aB++)
				if (gZ = ag.gh[a4J][aB] + ga, ac.gb(gZ) && ac.eu(gZ) === a4K) return !0;
		return !1
	}, this.aIU = function(a4J, a4K) {
		for (var aB, ga, gZ, aZC = ag.gh[a4J].length, f4 = ac.f4, f5 = 3; 0 <= f5; f5--)
			for (ga = f4[f5], aB = 0; aB < aZC; aB++)
				if (ac.jX(ag.gh[a4J][aB]) && (gZ = ag.gh[a4J][aB] + ga, ac.gb(gZ)) && ac.eu(gZ) === a4K) return !0;
		return !1
	}
}

function dV() {
	this.qJ = new abb
}

function abb() {
	this.hd = function(player) {
		bA.gN.a4E(player) && aN.a1D(80, L(524), 637, 0, bB.ol, bB.ns, -1, !1)
	}, this.hg = function(player) {
		bA.gN.a4E(player) && aN.a1D(80, L(525), 637, 0, bB.ol, bB.ns, -1, !1)
	}
}

function abc() {
	this.abd = 0, this.eV = function() {
		aO.eV(), aZ.eV(), h.eV(), b0.y.eV(), ax.aHU(), bU.eK.eV(), bf.dk && (bf.dk = !1, aa.vR())
	}
}

function abe() {
	this.eR = bf.eR, this.eA = 0, this.abd = 0, this.aHS = 0, this.abf = null, this.abg = 7, this.abh = 0, this.dd = function() {
		this.aHS = 0, this.abf = [], this.eA = 0, this.abd = 0
	}, this.aUH = function(aC) {
		if (aD.hP) this.aCE(aC);
		else if (this.abf.push(aC), 2 === aD.a0p) {
			for (var aB = 0; aB < this.abf.length; aB++) b8.pF.eV(this.abf[aB]);
			this.abf = []
		}
	}, this.aCE = function(aC) {
		2 !== aD.a0p && (b8.pF.eV(aC), b9.eV(), aW.aCE(this.aHS), this.aHS === aD.a5J ? (aD.qA.eV(), this.aHS = 0, this.eA = 0, this.abd = 0, this.eR = bf.eR) : (this.aHS++, af.a5C(), af.mh(!0), bb.aCn()))
	}, this.eV = function() {
		h.eV(), aD.hP ? (bf.dk = aW.aCE(-1) || bf.dk, mj()) : (0 !== this.eA || bf.eR >= this.eR && (this.eR += bf.aCD * Math.floor(1 + (bf.eR - this.eR) / bf.aCD), 2 === aD.a0p ? mY() : this.abi(), this.eA++, 27 < bf.eR - this.abh)) && this
		.abj(), me(), bf.dk && (bf.dk = !1, yw()), this.abh = bf.eR
	}, this.abj = function() {
		bf.dk = !0, mg(), this.eA = 0
	}, this.abi = function() {
		var wH, aB;
		if (this.abd !== 7 * this.aHS) ma(), bb.aCn();
		else {
			wH = !1;
			loop: for (; this.abk() && (wH = !0, ma(), 2 !== aD.a0p) && 0 < this.abf.length;)
				for (aB = this.abg - 2; 0 <= aB; aB--)
					if (ma(), 2 === aD.a0p) break loop;
			wH ? bb.aCn() : (mY(), bb.a5F())
		}
	}, this.abk = function() {
		return 0 < this.abf.length && (this.aHS++, b8.pF.eV(this.abf[0]), this.abf.shift(), !0)
	}
}

function abl() {
	var abm, abn, abo, aHS, abp, eA = 0,
		eR = bf.eR;

	function abt() {
		! function() {
			if (!aD.hP) return;
			if (aD.kg) return;
			if (2 !== aD.a0p)
				if (abp % 7 != 0) abp++;
				else if (aHS === aD.a5J) {
				if (!abw()) return;
				aW.aCE(aHS), aD.qA.eV()
			} else {
				if (!abw()) return;
				abp++, aHS++, af.a5C(), af.mh(!0)
			}
			return 1
		}() && abw() && ma()
	}

	function abu() {
		eA = 0, (aD.hP ? (bf.dk = aW.aCE(aHS - (abp % 7 == 0 ? 0 : 1) + abp % 7 / 7) || bf.dk, mj) : aM.hB || !bC.a5g ? mj : (bf.dk = !0, mg))()
	}

	function abw() {
		var aB, f2, abx = b9.q8.aVk,
			fk = b9.q8.aVl,
			fm = b9.q8.aVm,
			fo = b9.q8.aVn,
			aby = b9.q8.aVo,
			abz = b9.q8.aVp;
		if (!(abm >= abz.length)) {
			if (abz = abz[abm], aby[abm]) {
				for (f2 = abn + abz, aB = abn; aB < f2; aB++) b8.pF.px(abx[aB], fk[aB], fm[aB], fo[aB]);
				abn += abz, abm++
			} else ++abo >= abz && (abm++, abo = 0);
			return 1
		}
		aN.a2A("Replay file smaller than expected."), bC.a2z(!1), aD.a0p = 2
	}
	this.abd = 0, this.dd = function() {
		abp = aHS = abo = abn = abm = 0
	}, this.eV = function() {
		var aZd;
		h.eV(), bC.a9R() < 1.7 ? 0 === eA ? bf.eR >= eR && (aZd = bf.aCD / bC.a9R(), eR += aZd * Math.floor(1 + (bf.eR - eR) / aZd), 2 === aD.a0p || aM.hB || !bC.a5g ? mY() : (abt(), bb.aCn()), eA++) : abu() : function() {
			var aZd;
			if (bf.eR >= eR)
				if (2 === aD.a0p || aM.hB || !bC.a5g) mY(), eR = bf.eR;
				else {
					for (aZd = bf.aCD / bC.a9R(), 16 < (bf.eR - eR) / aZd && (eR = bf.eR - 16 * aZd); bf.eR >= eR && 2 !== aD.a0p;) eR += aZd, abt();
					bb.aCn()
				} abu()
		}(), me(), bf.dk && (bf.dk = !1, yw())
	}, this.a10 = function() {
		b9.q8.aVp.length - abm <= 2 || aN.a2A("Replay file larger than expected.")
	}
}

function ac0() {
	var eA = 0,
		eR = bf.eR;
	this.abd = 0, this.eV = function() {
		h.eV(), aD.hP ? mj() : 0 === eA ? bf.eR >= eR && (eR += bf.aCD * Math.floor(1 + (bf.eR - eR) / bf.aCD), 2 === aD.a0p || aM.hB ? mY() : (ma(), bb.aCn()), eA++) : ((aM.hB ? mj : (bf.dk = !0, mg))(), eA = 0), me(), bf.dk && (bf.dk = !1,
		yw())
	}
}

function dR() {
	this.a0z = null, this.dk = !1, this.eR = 0, this.aCD = 56;
	var ac1 = 0;

	function ac2() {
		bf.eR = ac1 = performance.now(), bf.a0z.eV(), window.requestAnimationFrame(ac2)
	}
	this.dd = function() {
		this.a5d(), window.requestAnimationFrame(ac2), this.eR = performance.now()
	}, this.a5V = function() {
		aD.hA ? (this.a0z = new abl, this.a0z.dd()) : aD.kg ? this.a0z = new ac0 : (this.a0z = new abe, this.a0z.dd())
	}, this.a5d = function() {
		this.a0z = new abc, this.dk = !0
	}, this.eV = function() {
		this.a0z.abd++
	}, this.kJ = function() {
		return this.a0z.abd
	}, this.aTz = function() {
		var ds = performance.now();
		ds < ac1 + 1e3 || (this.eR = ds, this.a0z.eV())
	}
}

function ct() {
	var aGo = 0,
		ac3 = !0;

	function ac4(id) {
		id = [L(526), L(527), L(528), L(529)][id];
		aN.a7T(id)
	}
	this.eV = function() {
		var ds, a7p;
		bf.eR < aGo || (aGo = bf.eR + 3e3, aD.hA) || aD.kg || bA.gN.hD(aD.em) || (ds = new Date, a7p = ds.getUTCSeconds(), ac3 ? a7p < 43 && (ac3 = !1) : a7p < 43 || (aGo += 52e3, ac3 = !0, (a7p = (ds.getUTCMinutes() + 1) % 60) % 10 == 0 ? aD
			.ke < 7 && ac4(0) : a7p % 10 == 5 ? 7 !== aD.ke && 10 !== aD.ke || ac4(1) : a7p % 10 == 7 ? 8 === aD.ke && ac4(2) : a7p % 10 == 2 && 9 === aD.ke && ac4(3)))
	}
}

function cn() {
	var nL, nM, nY, nZ, ac5 = 0,
		ac6 = 0;

	function ac8() {
		return Math.pow(Math.pow(nY - nL, 2) + Math.pow(nZ - nM, 2), .5)
	}

	function ac7(e) {
		nL = h.k * e.touches[0].clientX, nM = h.k * e.touches[0].clientY, nY = h.k * e.touches[1].clientX, nZ = h.k * e.touches[1].clientY
	}
	this.a2R = function(e) {
		return 1 < e.touches.length ? (ac6 = bf.eR, ac5 = 3, ac7(e), aL.s5(), !0) : (ac5 = 0, !1)
	}, this.a2S = function(e) {
		var aMZ, iI, iJ;
		return 0 !== aD.a0p && 1 < e.touches.length && (ac5 = Math.max(ac5 - 1, 0), aH.nd() && (aMZ = ac8(), ac7(e), e = ac8(), iI = Math.floor((nL + nY) / 2), iJ = Math.floor((nM + nZ) / 2), aS.a9s(iI, iJ, Math.max(.125, e) / Math.max(.125,
			aMZ)), bf.dk = !0), !0)
	}, this.a2p = function() {
		var f9, fB;
		return !!(ac5 && (ac5 = 0, bf.eR < ac6 + 500)) && (f9 = (nL + nY) / 2, fB = (nM + nZ) / 2, aL.a2j(f9, fB), aL.click(f9, fB, !0) && (bf.dk = !0), !0)
	}
}

function d2() {
	this.size = 0, this.eA = 0, this.aC = null, this.dd = function(aC) {
		this.eA = 0, this.aC = aC, this.size = aC.length
	}, this.uV = function() {
		this.aC = null
	}, this.pw = function(size) {
		for (var fT = 0, aC = this.aC, nd = this.eA + size - 1, aB = this.eA; aB <= nd; aB++) fT |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nd - aB;
		return this.eA += size, this.eA > 8 * this.size && console.error("Unwrapper Overflow"), fT
	}, this.aUP = function(size) {
		var fM = size >> 1;
		return (1 << fM) * this.pw(size - fM) + this.pw(fM)
	}, this.aUQ = function(ac9) {
		return this.size === bD.aUO(ac9)
	}, this.aW2 = function(xk, acA, acB) {
		var gU = this.pw(xk);
		if (!gU) return null;
		for (var xk = Math.max(gU, acB), g = new(acA <= 8 ? Uint8Array : acA <= 16 ? Uint16Array : Uint32Array)(xk), aB = 0; aB < gU; aB++) g[aB] = this.pw(acA);
		acB = g[gU - 1];
		return acB && g.fill(acB, gU), g
	}, this.aW3 = function(xk, acC, acB) {
		var gU = this.pw(xk);
		if (!gU) return null;
		for (var xk = Math.max(gU, acB), g = new Array(xk), aB = 0; aB < gU; aB++) g[aB] = this.aW0(acC);
		return g.fill(g[gU - 1], gU), g
	}, this.aW0 = function(xk) {
		return bG.wr.wv(this.pw(xk))
	}, this.aW1 = function() {
		var qV = bF.t8.t9(bF.t8.tA(this.pw(30))),
			qV = bA.rn.a57(qV, "_", "/");
		qV = bA.rn.a57(qV, "-", "+");
		for (var acD = "";
			(qV.length + acD.length) % 4;) acD += "=";
		qV = "data:image/png;base64," + qV + acD;
		var aIz = new Image;
		aIz.onload = function() {
			b9.aJY.aJZ(aIz), aIz.onload = null, aIz = null
		}, aIz.src = qV
	}
}

function dL() {
	this.aWy = 0, this.aWz = 0, this.aWu = 0, this.aWv = 0, this.aWw = 0, this.aWx = 0, this.aCo = [0, 0, 0, 0], this.nc = function() {
		this.aWy = aS.yy(), this.aWz = aS.yz(), this.aWu = -this.aWy, this.aWv = -this.aWz, this.aWw = h.i / iC, this.aWx = h.j / iC, this.aCo[0] = Math.floor(this.aWu), this.aCo[1] = Math.floor(this.aWv), this.aCo[2] = Math.floor(this.aCo[0] +
			this.aWw + 1), this.aCo[3] = Math.floor(this.aCo[1] + this.aWx + 1), bb.aCl = !0
	}
}

function co() {
	var a8W, n8;
	this.dd = function() {
		a8W = 1, n8 = 0
	}, this.eV = function() {
		0 < a8W && (n8 = 0 === n8 ? bf.eR + 16 : n8, a8W = (a8W -= .001 * (bf.eR - n8)) < 0 ? 0 : a8W, n8 = bf.eR, bf.dk = !0)
	}, this.vR = function() {
		0 < a8W && (vS.fillStyle = "rgba(0,0,0," + a8W + ")", vS.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.eA = 0, this.aC = null, this.dd = function(aC) {
		this.eA = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(ac9) {
		return this.dd(new Uint8Array(this.aUO(ac9))), this.aC
	}, this.uV = function() {
		this.aC = null
	}, this.a8 = function(size, a7u) {
		for (var aC = this.aC, nd = this.eA + size - 1, aB = this.eA; aB <= nd; aB++) aC[aB >> 3] |= (a7u >> nd - aB & 1) << 7 - (7 & aB);
		this.eA += size, this.eA > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aUN = function(size, a7u) {
		var fM = size >> 1,
			f5 = 1 << fM;
		this.a8(size - fM, bL.dt(a7u, f5)), this.a8(fM, a7u % f5)
	}, this.acG = function(size) {
		for (var aC = this.aC, nd = this.eA + size, aB = this.eA; aB < nd; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aUO = function(ac9) {
		return ac9 + 7 >> 3
	}, this.acH = function(g, jc, nd, acI) {
		for (var aB = jc; aB < nd; aB++) this.a8(acI, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.eA = 0
	}, this.aUm = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(acJ, value) {
		for (var g = this.g, nd = this.eA + acJ - 1, acK = 1 + (nd >> 3); g.length < acK;) g.push(0);
		for (var aB = this.eA; aB <= nd; aB++) g[aB >> 3] |= (value >> nd - aB & 1) << 7 - (7 & aB);
		this.eA += acJ
	}, this.dj = function(g, xk, acA) {
		var acL = bA.qw.a3b(g);
		this.a8(xk, acL);
		for (var aB = 0; aB < acL; aB++) this.a8(acA, g[aB])
	}, this.aWK = function(g, xk, acC) {
		var acL = bA.qw.a3b(g);
		this.a8(xk, acL);
		for (var aB = 0; aB < acL; aB++) this.aWI(g[aB], acC)
	}, this.aWI = function(qV, xk) {
		var f2 = qV.length;
		this.a8(xk, f2);
		for (var aB = 0; aB < f2; aB++) this.a8(16, qV.charCodeAt(aB))
	}, this.aWJ = function(a3h) {
		var acM = (a3h = a3h.toDataURL()).split(",");
		if (acM.length < 2) console.log("error 266");
		else {
			a3h = bA.rn.a57(a3h = acM[acM.length - 1], "/", "_"), a3h = bA.rn.a57(a3h, "\\+", "-");
			var a3h = bA.rn.a57(a3h, "=", ""),
				x4 = bG.t8.x1(a3h),
				f2 = x4.length;
			this.a8(30, f2);
			for (var aB = 0; aB < f2; aB++) this.a8(6, x4[aB])
		}
	}
}
a(), self.aiCommand746 = function(fT) {
	0 === fT ? bt() : 1 !== fT || !a0 || 1 !== a0.id || a0.dv < 14 || bJ.fU()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};