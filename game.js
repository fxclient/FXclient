var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, h, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, t, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, a0, bh, bi, bj, o, bk, bl, bm, bn, bo, bp, fV, fW, fX, fY, fZ, fa, fb, fc, fd, fe, ff, fg, fh, iI, iH, iJ, a6l, lB, jh,
	a0X, tr, xE, aAZ, a3j, a3k, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"pre", "</a>", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "inline-block", "focus",
		"blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS",
		"rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ", "file", "error",
		"en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1",
		"1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
		window.removeEventListener("error", d);
		return alert("Error:\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message);
		c = "";
		try {
			var g;
			if (window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + function(e) {
					if (!e.error) return "NoStack";
					var stack = e.error.stack;
					if (!stack || !stack.length) return "NoStack";
					for (var match, a5 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a5.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
					return result.length ? result.join(" ") : "NoStack"
				}(e), performance.memory && ((g = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), g.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), g.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)), c =
					c + "|" + g.join(" ")), c = (c = h ? c + "|R" + h.i + "," + h.j + "," + h.k.toFixed(2) : c) + "|" + e.message, l && 1 === l.m) {
				if (c = l.n + "|" + o.p.join(",") + "|" + c, e.lineno < 43) return void q();
				var r = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
				r += "<br>Error Message: " + c, o.s(), t.u(4, 5, new v("🤖 Beep Boop! An error occurred.", r, !0, [new w("Close", function() {
					t.x(), t.y.z()
				}), new w("Reload", function() {
					a0.a1.a2()
				})]))
			}
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		q()
	})
}

function bq(br) {
	l && !br || (bt(), bK = new bu, bJ = new bv, b9 = new bw, bA = new bx, aD = new by, b6 = new bz, bE = new c0, bF = new c1, aE = new c2, aF = new c3, aG = new c4, aH = new c5, aI = new c6, aJ = new c7, aK = new c8, aL = new c9, aM = new cA, aN =
		new cB, aO = new cC, aP = new cD, aQ = new cE, aR = new cF, aS = new cG, aT = new cH, aU = new cI, aV = new cJ, aW = new cK, aX = new cL, aY = new cM, aZ = new cN, aa = new cO, ab = new cP, ac = new cQ, ak = new cR, al = new cS, am =
		new cT, ad = new cU, ae = new cV, ah = new cW, af = new cX, ag = new cY, ai = new cZ, ay = new ca, aj = new cb, ao = new cc, ap = new cd, aq = new ce, az = new cf, ax = new cg, an = new ch, ar = new ci, at = new cj, au = new ck, h =
		new cl, av = new cm, aw = new cn, b0 = new co, b1 = new cp, b2 = new cq, b3 = new cr, b4 = new cs, b5 = new ct, b7 = new cu, b8 = new cv, bB = new cw, bC = new a6, bD = new cx, bG = new cy, bH = new cz, bI = new d0, bL = new d1, bM =
		new d2, bN = new d3, bO = new d4, bP = new d5, bQ = new d6, bR = new d7, bS = new d8, t = new d9, bT = new dA, a0 = new dB, l = new dC, bh = new dD, bi = new dE, bf = new dF, bg = new dG, bZ = new dH, ba = new dI, bU = new dJ, bV =
		new dK, bc = new dL, bd = new dM, be = new dN, bj = new dO, bb = new dP, o = new dQ, bk = new dR, bl = new dS, bm = new dT, bo = new dU, bp = new dV, l.dX(), a0.dX(), h.dY(), bi.dX(), b6.dX(), b6.dZ(), (bW = new da).dX(), b9.dX(), bU
	.dX(), az.dX(), bE.dX(), bF.dX(), bR.dX(), t.dX(), bX = new db, h.dX(), a0.a1.dc(), be.dX(), bb.dX(), bV.dX(), bY = new dd, ax.dX(), ae.de(), bT.dX(), ao.dX(), aa.dX(), aT.dX(), ai.dX(), bI.dX(), ab.dX(), be.df = !0, setTimeout(function() {
			bR.a7(2, 14071)
		}, 0), t.u(5, 5), bH.dg() || a0.a1.dh(), h.di(), l.m = 1)
}

function dC() {
	this.dj = 1097, this.n = 2085, this.rVersion = 9, this.dk = 0, this.dX = function() {
		this.dl = 2;
		var dm = bK.dn(this.n, 10) % 100;
		this.dp = "26 June 2025 [" + bK.dn(this.n, 1e3) + "." + (dm < 10 ? "0" : "") + dm + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dr = (new Date).getTime() % 1024
	}, this.m = 0
}

function ds() {
	var dt = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		du = [100, 60, 30, 15, 6, 1],
		dv = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		dw = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		dx = ["👢 Kick", "🔇 Mute", "✂️ Username Redaction", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		dy = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.dz = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.e0 = function(id, e1, e2) {
		e1 = this.e3(e1);
		return +(dv[e1][id] > e2)
	}, this.e3 = function(e1) {
		for (var aB = 0; aB < du.length; aB++)
			if (du[aB] <= e1) return aB;
		return du.length
	}, this.e4 = function(e1) {
		return dt[this.e3(e1)]
	}, this.e5 = function(id, e6) {
		return dw[id].replace(new RegExp("x", "g"), e6)
	}, this.e7 = function(id, e6) {
		return dy[id].replace(new RegExp("x", "g"), e6)
	}, this.e8 = function(id, e9) {
		return dx[id] + (this.dz[id][e9].length ? " (" + this.dz[id][e9] + ")" : "")
	}
}

function dA() {
	this.eA = new eB, this.dX = function() {
		a0.a1.eC()
	}, this.eD = function() {
		return bi.eE.data[160].value
	}
}

function eB() {
	var eF = 2e4;
	this.show = function() {
		if (be.eG < eF) return !1;
		eF = be.eG + 135e4, 2 === l.dl && a0.a1.eH(Math.floor(135e4))
	}
}

function cT() {
	this.eI = new eJ
}

function eJ() {
	this.eK = function(eL) {
		var eO;
		return bR.eM(bR.eN) && aD.data.passableMountains && (eO = ac.eP(eL), this.eQ(aD.eR, eO) || this.eS(aD.eR, eO)) && 0 !== (eO = function(en) {
			for (var eo = bL.ep(en), eq = bL.er(en), max = Math.max(bR.es, bR.et) - 2, eu = max * max, ev = !1, ew = 0, ex = 0; ex < max; ex++) {
				var ey, eT = function(eo, eq, ex) {
					for (var aB = 0; aB <= ex; aB++)
						for (var f0 = -1; f0 < 2; f0 += 2)
							for (var f1 = -1; f1 < 2; f1 += 2)
								for (var f2 = 0; f2 < 2; f2++) {
									var eL = function(eo, eq) {
										if (bL.f4(eo, eq)) {
											eo = bL.f5(eo, eq), eq = bL.eX(eo);
											if (ac.ec(eq) && ac.f6(eq)) return eo
										}
										return 0
									}(eo + f2 * f0 * aB + (1 - f2) * f1 * ex, eq + f2 * f1 * ex + (1 - f2) * f0 * aB);
									if (eL) return eL
								}
					return 0
				}(eo, eq, ex);
				eT && (ey = bL.ez(eo, eq, eT)) < eu && (ew = eT, eu = ey, ev || (ev = !0, max = Math.floor(Math.sqrt(ey)) + 1))
			}
			return ew
		}(bL.eV(eL))) && (eL = bL.eX(eO), ac.eY(eL) || (eL = ac.eZ(eL)) !== aD.eR && ea(eL, aD.eR)) ? eO : 0
	}, this.eb = function(player, eT) {
		eT = bL.eX(eT);
		if (ac.ec(eT)) {
			if (ac.eY(eT)) bN.ed[0] = aD.ee;
			else if (ac.eZ(eT) !== bN.ed[0]) return !1;
			for (var ef = function(eL) {
					var ej = ac.ej,
						ef = [];
					loop: for (var ek = 3; 0 <= ek; ek--) {
						var el = eL + ej[ek];
						if (ac.em(el)) {
							for (var id = ac.eP(el), aB = 0; aB < ef.length; aB++)
								if (id === ef[aB]) continue loop;
							bN.ei[ef.length] = el, ef.push(id)
						}
					}
					return ef
				}(eT), eh = ef.length, aB = 0; aB < eh; aB++)
				if (this.eQ(player, ef[aB]) || this.eS(player, ef[aB])) return bN.ei[0] = bN.ei[aB], !0
		}
		return !1
	}, this.eQ = function(player, eO) {
		for (var f7 = ag.f7[player], eh = f7.length, f8 = Math.max(bK.dn(eh, 12), 1), ej = ac.ej, aB = 0; aB < eh; aB += f8)
			for (var eW = f7[aB], ek = 3; 0 <= ek; ek--) {
				var el = eW + ej[ek];
				if (ac.em(el) && eO === ac.eP(el)) return !0
			}
		return !1
	}, this.eS = function(player, eO) {
		for (var f7 = ag.f7[player], eh = f7.length, ej = ac.ej, aB = 0; aB < eh; aB++)
			for (var eW = f7[aB], ek = 3; 0 <= ek; ek--) {
				var el = eW + ej[ek];
				if (ac.em(el) && eO === ac.eP(el)) return !0
			}
		return !1
	}
}

function d3() {
	this.fB = new Uint16Array(2), this.fC = new Uint16Array(2), this.fD = new Int32Array(2), this.fE = new Uint32Array(2), this.fF = new Uint32Array(2), this.fG = new Uint8Array(4), this.fH = new Uint8Array(4), this.ei = new Uint32Array(4), this.fI =
		new Uint32Array(5), this.ed = new Uint32Array(8), this.fJ = new Uint16Array(16), this.fK = new Uint16Array(512), this.fL = new Uint16Array(512), this.fM = new Uint16Array(512), this.fN = function(g, fO) {
			return g[0] = fO, g
		}, this.fP = function(g, fO, fQ) {
			return g[0] = fO, g[1] = fQ, g
		}, this.fR = function(g, fO, fQ, fS) {
			return g[0] = fO, g[1] = fQ, g[2] = fS, g
		}, this.fT = function(g, fO, fQ, fS, fU) {
			return g[0] = fO, g[1] = fQ, g[2] = fS, g[3] = fU, g
		}
}

function fi() {
	fb = 0, fc = 2048, fd = new Uint32Array(4 * fc), fe = 0, ff = new Uint32Array(fc), fg = new Uint8Array(bR.es * bR.et)
}

function fj(player) {
	fW = player, fh = !1, fk(), fl();
	for (var aB = ad.fm(fW) - 1; 0 <= aB; aB--) 0 === ad.fn(fW, aB) && (fV = aB, fo());
	fh && fp()
}

function fp() {
	fq(), fr()
}

function fo() {
	fa = ad.fs(fW, fV), fX = ad.ft(fW, fV), fY = ad.fu(fW, fV), fv(), (0 !== fb && (fx(), fy()) ? fz : fw)()
}

function fy() {
	if (!((fZ = bK.dn(fX, fb)) > aD.g0)) {
		if (!fY) return !1;
		var g1 = fb * (1 + aD.g0);
		fX += b9.g2.g3(fW, g1 - fX), fZ = bK.dn(fX, fb)
	}
	return !0
}

function fx() {
	for (var aB = fb - 1; 0 <= aB; aB--) fg[bK.dn(fd[aB], 4)] = 0
}

function fw() {
	1 === ad.fm(fW) && aF.g4(fW);
	var dm = b9.g2.g5(fW, fX);
	bc.g6(fW, fX - dm, 12), ad.g7(fW, fV)
}

function fk() {
	for (var player = fW, g8 = ag.g8, eh = Math.min(g8[player].length, fc), g9 = 0, gA = ff, aB = eh - 1; 0 <= aB; aB--) gA[g9++] = g8[player][aB];
	fe = g9
}

function fl() {
	for (var aB = ag.g8[fW].length - 1; 0 <= aB; aB--) ac.ec(ag.g8[fW][aB]) && ac.gB(ag.g8[fW][aB], fW);
	ag.g8[fW] = []
}

function fv() {
	fb = 0, (fa === aD.ee ? gC : gD)()
}

function gD() {
	for (var gE, gF, aB, ej = ac.ej, ek = 3; 0 <= ek; ek--)
		for (aB = fe - 1; 0 <= aB; aB--) gE = ff[aB] + ej[ek], gF = bK.dn(gE, 4), 0 === fg[gF] && ac.gG(gE) && ac.eZ(gE) === fa && (fg[gF] = 1, fd[fb++] = gE)
}

function gC() {
	for (var gE, gF, aB, ej = ac.ej, ek = 3; 0 <= ek; ek--)
		for (aB = fe - 1; 0 <= aB; aB--) gE = ff[aB] + ej[ek], gF = bK.dn(gE, 4), 0 === fg[gF] && ac.eY(gE) && (fg[gF] = 1, fd[fb++] = gE)
}

function fz() {
	gH() ? (gI(), fa !== aD.ee && gJ()) : fw()
}

function gJ() {
	gK(), gL(ag.gM[fa]), gL(ag.gN[fa]), bR.eM(bR.eN) && gL(ag.f7[fa]), gO(ag.g8[fa]), gP(ag.gN[fa]), gP(ag.f7[fa]), gQ(), gR()
}

function gI() {
	fh = !0, ad.gS(fW, fV, fX), ad.gT(fW, fV), ag.gU[fW] += fb, gV(), gW()
}

function gH() {
	return (fa === aD.ee ? gX : gY)()
}

function gY() {
	var gZ = fb * aD.g0,
		ga = gb(),
		gc = gd(),
		ga = gZ + 2 * ga + gc,
		gf = fZ * fb;
	return ga < gf ? (fX -= ga, bc.g6(fW, ga, 13), gg(ga - gZ, gc), !0) : fY && 0 === gc ? (fX -= gf, gf += b9.g2.g3(fW, ga - gf + 1), bc.g6(fW, gf, 13), gg(gf - gZ, 0), !0) : (fX -= gf, bc.g6(fW, gf, 13), gg(gf - gZ, gc), !1)
}

function gg(gf, gc) {
	if (0 < gc) {
		if (gf <= gc) return bc.g6(fa, gf, 13), void ad.gh(fa, fW, gc - gf);
		ad.gh(fa, fW, 0), gf -= gc
	}
	gf = bK.dn(gf, 2), gf = Math.min(ag.gi[fa], gf), bc.g6(fa, gf, 13), ag.gi[fa] -= gf
}

function gd() {
	return ad.gj(fa, fW)
}

function gb() {
	return bK.dn(fb * ag.gi[fa], 1 + bK.dn(10 * ag.gU[fa], 16))
}

function gX() {
	var gk = fb * aD.g0;
	return fX -= gk, bc.g6(fW, gk, 13), !0
}

function gW() {
	for (var aB = fb - 1; 0 <= aB; aB--) ag.g8[fW].push(fd[aB]), ag.gM[fW].push(fd[aB]), ac.gB(fd[aB], fW)
}

function d8() {
	var gl = 0,
		gm = 0;
	this.gn = function(eo, eq) {
		gl = eo, gm = eq
	}, this.go = function(gp) {
		aD.gq || aM.gr || (b9.g2.gs(0) || b9.g2.gs(1)) && b9.g2.gt(aD.eR) && (aR.gu(gl, gm) ? aR.gv = !1 : aP.gu(gl, gm) || function(gp) {
			var gx = bL.gy(gl),
				gz = bL.h0(gm),
				eT = bL.f5(gx, gz),
				eL = bL.eX(eT);
			bL.h1(gx, gz) && (aD.h2 ? ac.ec(eL) && b7.h3.h4(eT) : ac.em(eL) ? gp || (gx = am.eI.eK(eL)) && (gz = bL.eX(gx), gz = ac.eY(gz) ? aD.ee : ac.eZ(gz), b7.h3.h7(aR.h8(), gx, gz)) : ac.h9(eL) || gp ? bM.hA.hB(aD.eR, eT) && b7.h3
				.hC(aR.h8(), eT) : ac.eY(eL) ? hD(aD.eR) ? b7.h3.hE(aR.h8(), aD.ee) : hF(aD.eR, aD.ee) ? b0.hG(aD.ee, aR.h8()) : bM.hA.hB(aD.eR, eT) && b7.h3.hC(aR.h8(), eT) : (gx = ac.eZ(eL)) !== aD.eR && (ea(gx, aD.eR) ? hH(aD.eR,
					gx) ? b7.h3.hE(aR.h8(), gx) : hF(aD.eR, gx) ? b0.hG(gx, aR.h8()) : bM.hA.hB(aD.eR, eT) && b7.h3.hC(aR.h8(), eT) : bM.hA.hB(aD.eR, eT) && b7.h3.hC(aR.h8(), eT)))
		}(gp))
	}, this.hI = function() {
		if (!aD.gq && !aM.gr && b9.g2.gs(1)) {
			var gE = aD.eR;
			if (b9.g2.gt(gE)) {
				var eh = ad.fm(gE);
				if (eh < 1) ! function() {
					var gE = aD.eR;
					if (hD(gE)) b7.h3.hE(aR.h8(), aD.ee);
					else
						for (var ej = ac.ej, gM = ag.gM, eh = gM[gE].length, hS = Math.floor(Math.random() * eh), aB = 0; aB < eh; aB++)
							for (var hT = 3; 0 <= hT; hT--) {
								var hU = gM[gE][(aB + hS) % eh] + ej[hT];
								if (ac.gG(hU)) {
									hU = ac.eZ(hU);
									if (hU !== gE && (!aD.hW || ea(gE, hU))) return b7.h3.hE(aR.h8(), hU)
								}
							}
				}();
				else {
					for (var hK = 0, hL = ad.ft(gE, 0), aB = 1; aB < eh; aB++) {
						var hM = ad.ft(gE, aB);
						hM < hL && (hL = hM, hK = aB)
					}
					b7.h3.hE(aR.h8(), ad.fs(gE, hK))
				}
			}
		}
	}, this.hN = function() {
		if (!aD.gq && !aM.gr && b9.g2.gt(aD.eR) && b9.g2.gs(1)) return av.hO ? av.hP(aD.eR) ? void b7.h3.hQ(1) : void 0 : void(av.hR(aD.eR) && b7.h3.hN())
	}
}

function hX(hY, size, hZ, ha, font) {
	var aB, hd = .2,
		canvas = document.createElement("canvas"),
		he = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hY, canvas.height = hY, he.font = size + font, he.textAlign = "center", he.textBaseline = "middle", he.fillStyle = "red", aB = 0; aB < hZ.length; aB++) he.fillText(hZ[aB], .5 * hY, .5 * hY);
	return -1 < (canvas = function(hb) {
		var aB, e1, ek = hb.data;
		for (aB = ek.length - 4; 0 <= aB; aB -= 4)
			if (e1 = ek[aB], ha <= e1) return Math.floor(aB / (4 * hY));
		return -1
	}(he.getImageData(0, 0, hY, hY))) && (hd = (canvas - .5 * hY + .1 * size) / size), Math.max(hd, 0)
}

function d1() {
	this.hg = new Int16Array(4), this.hh = new Int16Array(4), this.dX = function() {
		var aB;
		for (this.hg[0] = -bR.es, this.hg[1] = 1, this.hg[2] = bR.es, this.hg[3] = -1, aB = 0; aB < 4; aB++) this.hh[aB] = 4 * this.hg[aB]
	}, this.hi = function(h5, hj) {
		var hk = this.ep(hj) - this.ep(h5),
			hj = this.er(hj) - this.er(h5),
			h5 = hk >>> 31 << 1;
		return 5 + h5 + (1 - h5) * (1 - (hj >>> 31 << 1)) * (Math.abs(hk) - Math.abs(hj) >>> 31) & 3
	}, this.hp = function(h5, hj, hT) {
		return hT % 2 == 0 ? hT + (1 - hT) * (1 - (this.ep(hj) - this.ep(h5) >>> 31 << 1)) + 4 & 3 : hT + (2 - hT) * (1 - (this.er(hj) - this.er(h5) >>> 31 << 1)) + 4 & 3
	}, this.hr = function(gE, eT) {
		for (var hj, hs, hu = ag.gN[gE], eh = hu.length, i = bR.es, hv = this.ep(eT), hw = this.er(eT), en = hu[0] >> 2, min = this.ez(hv, hw, en), aB = 1; aB < eh; aB++)(hs = (hs = hv - (hj = hu[aB] >> 2) % i) * hs + (hs = hw - ~~((.5 + hj) /
			i)) * hs) < min && (min = hs, en = hj);
		return en
	}, this.hx = function(player, eL) {
		return !ac.eY(eL) && player === ac.eZ(eL)
	}, this.ez = function(gx, gz, eT) {
		return (gx -= this.ep(eT)) * gx + (gz -= this.er(eT)) * gz
	}, this.hy = function(hz, i0, i1) {
		hz = this.i3(hz) - this.i4(i1), i0 = this.i6(i0) - this.i7(i1);
		return Math.sqrt(hz * hz + i0 * i0)
	}, this.i8 = function(h5, hj) {
		var i2 = this.ep(h5) - this.ep(hj),
			h5 = this.er(h5) - this.er(hj);
		return Math.sqrt(i2 * i2 + h5 * h5)
	}, this.i9 = function(h5, hj) {
		var i2 = this.ep(h5) - this.ep(hj),
			h5 = this.er(h5) - this.er(hj);
		return i2 * i2 + h5 * h5
	}, this.iA = function(iB, iC, iD, iE) {
		return (iB -= iD) * iB + (iC -= iE) * iC
	}, this.iF = function(gE, iG) {
		return bK.dn(iG * ag.gi[gE], 1e3)
	}, this.i3 = function(hz) {
		return 16 * (hz + iH) / iI
	}, this.i6 = function(i0) {
		return 16 * (i0 + iJ) / iI
	}, this.iK = function(ek) {
		return 16 * ek / iI
	}, this.gy = function(hz) {
		return Math.floor((hz + iH) / iI)
	}, this.h0 = function(i0) {
		return Math.floor((i0 + iJ) / iI)
	}, this.h1 = function(gx, gz) {
		return 1 <= gx && 1 <= gz && gx < bR.es - 1 && gz < bR.et - 1
	}, this.ep = function(eT) {
		return eT % bR.es
	}, this.er = function(eT) {
		return bK.dn(eT, bR.es)
	}, this.f5 = function(gx, gz) {
		return gz * bR.es + gx
	}, this.iL = function(eT) {
		return this.f4(this.ep(eT), this.er(eT))
	}, this.f4 = function(gx, gz) {
		return 0 < gx && gx < bR.es - 1 && 0 < gz && gz < bR.et - 1
	}, this.eX = function(eT) {
		return eT << 2
	}, this.eV = function(eL) {
		return eL >> 2
	}, this.iM = function(eT) {
		return bR.es * this.er(eT) * 256 + (this.ep(eT) << 4)
	}, this.iN = function(eT) {
		return this.iM(eT) + 8 + (bR.es << 7)
	}, this.iO = function(i1) {
		return bR.es * (this.i7(i1) >> 4) + (this.i4(i1) >> 4)
	}, this.iP = function(i1) {
		i1 = this.iO(i1);
		return (this.ep(i1) >> 5) + bM.iQ.iR * (this.er(i1) >> 5)
	}, this.i4 = function(i1) {
		return i1 % (bR.es << 4)
	}, this.i7 = function(i1) {
		return bK.dn(i1, bR.es << 4)
	}, this.iS = function(eT, hT) {
		return eT + this.hg[hT]
	}, this.iT = function(eL, hT) {
		return eL + this.hh[hT]
	}, this.iU = function(player) {
		return this.f5(ag.iV[player] + ag.iW[player] >> 1, ag.iX[player] + ag.iY[player] >> 1)
	}, this.iZ = function(player) {
		return this.f5(ax.ia(ag.iV[player], ag.iW[player]), ax.ia(ag.iX[player], ag.iY[player]))
	}
}

function ch() {
	this.ib = new ic, this.ie = new ig, this.ih = new ii, this.performance = new ij, this.ik = new il, this.im = new io, this.ip = new iq, this.dX = function() {
		this.ib.dX(), this.ih.dX(), this.performance.dX(), this.ik.dX(), this.im.dX()
	}, this.ir = function() {
		this.performance.ir(), this.ib.ir()
	}
}

function il() {
	var is, iu = new Uint16Array(8);

	function j3(size, player) {
		for (var aB = ag.g8[player].length - 1; size <= aB; aB--) ac.jA(ag.g8[player][aB], player)
	}
	this.dX = function() {
		is = 0
	}, this.iv = function(player, iw) {
		return bN.ed[1] = ag.g8[player].length, bN.ed[0] === aD.ee ? an.ik.ix(player) : this.iy(player, bN.ed[0]), (0 !== bN.ed[1] || 0 !== ag.g8[player].length) && !(!iw && bN.ed[1] === ag.g8[player].length || (bN.ed[0] === aD.ee ? ag.iz[
			player]++ : ag.j0[player]++, 0))
	}, this.j1 = function(player) {
		aD.hW && (an.im.j2[player] = 1), j3(bN.ed[1], player), ad.j4(player, bN.fE[0], bN.ed[0]), aF.j5(player, !1)
	}, this.j6 = function(player, j7, eh, hL) {
		var j8 = bK.dn(12 * ag.gi[player], 1024);
		hL -= hL >= bK.dn(ag.gi[player], 2) ? j8 : 0, j3(eh, player), ad.j4(player, hL, j7), ag.gi[player] -= hL + j8, aF.j5(player, !1)
	}, this.iy = function(player, j7) {
		for (var hT, ej = ac.ej, aB = ag.gM[player].length - 1; 0 <= aB; aB--)
			if (ac.j9(ag.gM[player][aB]))
				for (hT = 3; 0 <= hT; hT--)
					if (ac.gG(ag.gM[player][aB] + ej[hT]) && ac.eZ(ag.gM[player][aB] + ej[hT]) === j7) {
						ag.g8[player].push(ag.gM[player][aB]);
						break
					}
	}, this.ix = function(player) {
		for (var ej = ac.ej, aB = ag.gM[player].length - 1; 0 <= aB; aB--)
			if (ac.j9(ag.gM[player][aB]))
				for (var hT = 3; 0 <= hT; hT--)
					if (ac.eY(ag.gM[player][aB] + ej[hT])) {
						ag.g8[player].push(ag.gM[player][aB]);
						break
					}
	}, this.jB = function(player, jC) {
		var aB, f0, hT, hV, eh = ag.gM[player].length,
			hq = 256 <= eh ? 12 : 32 <= eh ? 6 : 1,
			jD = eh - 1 - ax.jE(hq),
			ej = ac.ej;
		is = 0;
		loop: for (aB = jD; 0 <= aB; aB -= hq)
			for (hT = 3; 0 <= hT; hT--)
				if ((hV = ac.eY(ag.gM[player][aB] + ej[hT]) ? aD.ee : ac.eZ(ag.gM[player][aB] + ej[hT])) === aD.ee || ac.gG(ag.gM[player][aB] + ej[hT]) && hV !== player && (jC || ea(player, hV))) {
					for (f0 = is - 1; 0 <= f0; f0--)
						if (iu[f0] === hV) continue loop;
					if (iu[is] = hV, 8 <= ++is) return !0
				}
		return 0 < is
	}, this.jF = function(player, jC) {
		var aB, hT, hV, ej = ac.ej;
		for (is = 0, aB = ag.gM[player].length - 1; 0 <= aB; aB--)
			for (hT = 3; 0 <= hT; hT--)
				if ((hV = ac.eY(ag.gM[player][aB] + ej[hT]) ? aD.ee : ac.eZ(ag.gM[player][aB] + ej[hT])) === aD.ee || ac.gG(ag.gM[player][aB] + ej[hT]) && hV !== player && (jC || ea(player, hV))) return iu[is++] = hV, !0;
		return !1
	}, this.jG = function() {
		for (var f1, aB = is - 1; 0 <= aB; aB--)
			if (iu[aB] === aD.ee) {
				for (is--, f1 = aB; f1 < is; f1++) iu[f1] = iu[f1 + 1];
				return !0
			} return !1
	}, this.jH = function(player) {
		for (var f1, aB = is - 1; 0 <= aB; aB--)
			if (ad.jI(player, iu[aB]))
				for (is--, f1 = aB; f1 < is; f1++) iu[f1] = iu[f1 + 1];
		return 0 === is
	}, this.jJ = function() {
		for (var aB = is - 1; 0 <= aB; aB--)
			if (b9.g2.jK(iu[aB])) return !0;
		return !1
	}, this.jL = function() {
		for (var aB = is - 1; 0 <= aB; aB--) b9.g2.jK(iu[aB]) || (iu[aB] = iu[--is]);
		return 0 < is
	}, this.jM = function(player) {
		for (var f1, jN = iu[0], jO = ag.gi[jN] + ad.gj(jN, player), aB = is - 1; 1 <= aB; aB--)(f1 = ag.gi[iu[aB]] + ad.gj(iu[aB], player)) < jO && (jN = iu[aB], jO = f1);
		return jN
	}, this.jP = function(player) {
		var j, jQ = iu[0];
		if (1 !== is)
			for (var jR = bK.dn(ag.iW[player] + ag.iV[player], 2), jS = bK.dn(ag.iY[player] + ag.iX[player], 2), ex = jT(jR - bK.dn(ag.iW[jQ] + ag.iV[jQ], 2)) + jT(jS - bK.dn(ag.iY[jQ] + ag.iX[jQ], 2)), aB = is - 1; 1 <= aB; aB--)(j = jT(jR - bK
				.dn(ag.iW[iu[aB]] + ag.iV[iu[aB]], 2)) + jT(jS - bK.dn(ag.iY[iu[aB]] + ag.iX[iu[aB]], 2))) < ex && (ex = j, jQ = iu[aB]);
		return jQ
	}, this.jU = function() {
		for (var jV = iu, jW = jV[0], gi = ag.gi, jX = gi[jW], aB = is - 1; 1 <= aB; aB--) {
			var gE = jV[aB],
				f1 = gi[gE];
			jX < f1 && (jW = gE, jX = f1)
		}
		return jW
	}, this.jY = function() {
		return iu[ax.jE(is)]
	}
}

function io() {
	function jn(player, j7, jd) {
		3 <= jd && 2142 < be.jt() && (j7 === aD.ee || ag.gi[j7] < bK.dn(ag.gi[player], 20)) && aE.ji(player, 20)
	}

	function jq(player, hL, j7, jd) {
		3 <= jd && jd < 6 && bK.dn(ag.gi[player], 8) > ag.gi[j7] && (hL = Math.max(bK.dn(11 * ag.gi[j7], 5), bK.dn(ag.gi[player], 10)));
		jd = ag.g8[player].length;
		an.ik.iy(player, j7), an.ik.j6(player, j7, jd, hL)
	}

	function jm(player, hL) {
		var j7 = aD.ee,
			eh = ag.g8[player].length;
		an.ik.ix(player), ag.g8[player].length !== eh && an.ik.j6(player, j7, eh, hL)
	}
	this.j2 = new Uint8Array(aD.ee), this.dX = function() {
		this.j2.fill(0)
	}, this.jZ = function(player, hL) {
		var jb, jd, je, jf;
		ad.ja(player) && (jb = ae.jc(player), 3 <= (jd = aE.hL[player]) && jd < 6 && (hL = Math.max(ag.gi[player] - jb, hL)), je = ag.gN[player].length, jf = ag.gM[player].length, 30 * ag.gU[player] > aD.jg && jh[player] < 10 && 100 * jf <= je &&
			aE.ji(player, 10), aD.hW ? function(player, hL, jd, jb) {
				var j7;
				if (an.im.j2[player] = 1, an.ik.jB(player, !1) || an.ik.jF(player, !1)) {
					if (!an.ik.jH(player))
						if (an.ik.jG()) jm(player, hL), jn(player, aD.ee, jd);
						else {
							if (ax.jo(aE.jp[jd])) j7 = an.ik.jM(player);
							else {
								if (an.ik.jJ() && ax.jo(aE.jr[jd]) && an.ik.jL(), 6 === jd) return jq(player, hL, an.ik.jY(), jd);
								j7 = an.ik.jP(player)
							}
							jq(player, hL, j7, jd), jn(player, j7, jd)
						}
				} else bM.jk.ir(player) || an.ip.ir(player) || (an.im.j2[player] = 0, function(player, hL, jd, jb) {
					var aB, f1, f2, ef = bf.ef,
						ju = ef[player];
					if (0 !== ju) {
						var jv = ag.gi[player],
							gU = ag.gU;
						if (player < aD.jw && (hL = jv), !(jv < gU[player] || 5 === jd && jv < jb || 4 === jd && jv < bK.dn(jb, 2))) {
							var eh = al.jx,
								jy = al.jy,
								j2 = (aB = ax.jE(eh), an.im.j2);
							for (f1 = 0; f1 < eh; f1++)
								if (f2 = jy[(f1 + aB) % eh], 1 === j2[f2] && ef[f2] === ju) return b7.jz.k0(player, f2, hL)
						}
					}
				}(player, hL, jd, jb))
			}(player, hL, jd, jb) : (!jf || je && (je < jf && !ax.jE(10) || 100 * jf <= je && ax.jE(3) || !ax.jE(8))) && bM.jk.ir(player) || function(player, hL, jd) {
				an.ik.jB(player, !0) || an.ik.jF(player, !0) ? an.ik.jH(player) || (an.ik.jG() ? jm(player, hL) : ax.jo(aE.jp[jd]) ? jq(player, hL, an.ik.jM(player), jd) : 5 === jd ? jq(player, hL, an.ik.jU(), jd) : (an.ik.jJ() && ax.jo(aE
					.jr[jd]) && an.ik.jL(), jq(player, hL, 6 === jd ? an.ik.jY() : an.ik.jP(player), jd))) : an.ip.ir(player)
			}(player, hL, jd))
	}
}

function c2() {
	var k1 = new Uint8Array(aD.ee),
		k2 = new Uint16Array(aD.ee),
		k3 = new Uint16Array(aD.ee),
		k4 = new Uint8Array(aD.ee),
		k5 = (this.hL = new Uint8Array(aD.ee), new Uint16Array(aD.ee)),
		k6 = new Uint16Array(aD.ee);

	function kK(aB) {
		k1[aB] = 1 + bK.dn(k5[aB] * ax.random(), 10 * ax.value(100))
	}
	this.k7 = null, this.jr = [97, 94, 70, 40, 20, 0, 100], this.k8 = [500, 450, 400, 300, 80, 50, 100], this.jp = [0, 0, 5, 25, 50, 100, 0], this.k9 = [60, 74, 112, 200, 256, 512, 512], this.kA = [1, 2, 3, 4, 6, 8, 1], this.kB = [500, 450, 400, 300,
		80, 50, 100
	], this.dY = function() {
		this.k7 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dX = function() {
		k1.fill(0), k2.fill(0), k3.fill(0), k4.fill(0), this.hL.fill(0), k5.fill(0), k6.fill(0);
		var kC = aD.jw;
		if (9 === aD.kD) this.kE();
		else if (aD.kF)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kH - 1; 0 <= aB; aB--) {
					var hU = aB + kC;
					this.hL[hU] = aD.data.botDifficultyData[hU]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kH - 1; 0 <= aB; aB--) this.hL[hU = aB + kC] = aD.data.botDifficultyTeam[bf.kI[bf.ef[hU]]];
				else if (1 === aD.data.botDifficultyType) {
			var kJ = this.k7.length;
			for (aB = aD.kH - 1; 0 <= aB; aB--) this.hL[aB + kC] = aB % kJ
		} else
			for (kJ = aD.data.botDifficultyValue, aB = aD.kH - 1; 0 <= aB; aB--) this.hL[aB + kC] = kJ;
		else
			for (var kG = 8 === aD.kD ? 1 : 0, aB = aD.kH - 1; 0 <= aB; aB--) this.hL[aB + kC] = kG;
		for (aB = 0; aB < kC; aB++) this.hL[aB] = 6;
		var eh = aD.ee;
		for (aB = 0; aB < eh; aB++) this.hL[aB] <= 2 ? (k4[aB] = 5, k5[aB] = k6[aB] = 1040, 0 === this.hL[aB] ? (k2[aB] = 980, k3[aB] = 980) : 1 === this.hL[aB] ? (k2[aB] = 980, k3[aB] = 920, k5[aB] = k6[aB] = 1100) : (k2[aB] = 825, k3[aB] =
			750)) : this.hL[aB] <= 4 ? (k4[aB] = 1 + ax.jE(20), 3 === this.hL[aB] ? (k2[aB] = k3[aB] = 500, k5[aB] = k6[aB] = 1e3) : (k6[aB] = 250 + ax.jE(1501), k5[aB] = 500 + ax.jE(501), k2[aB] = 300 + ax.jE(201), k3[aB] = 100 + ax.jE(
			201))) : this.hL[aB] <= 5 ? (k5[aB] = 1e3, k6[aB] = 1e3, k4[aB] = 35 + ax.jE(16), k2[aB] = 300 + ax.jE(201), k3[aB] = 50 + ax.jE(101)) : (k5[aB] = k6[aB] = 800, k4[aB] = 5, k2[aB] = 10, k3[aB] = 250), kK(aB)
	}, this.kE = function() {
		for (var eL = ay.kL, kC = aD.jw, aB = eL - 1; 0 <= aB; aB--) this.hL[aB + kC] = 0;
		for (var f1 = 0; f1 < 6; f1++) {
			for (aB = eL + ay.kM[f1] - 1; eL <= aB; aB--) this.hL[aB + kC] = f1;
			eL += ay.kM[f1]
		}
	}, this.ji = function(gE, value) {
		k1[gE] = Math.min(value, k1[gE])
	}, this.ir = function(gE) {
		0 == --k1[gE] && ! function(gE) {
			(function(gE) {
				k5[gE] !== k6[gE] && (k5[gE] += k5[gE] < k6[gE] ? 3 : -3);
				k2[gE] !== k3[gE] && (k2[gE] += k2[gE] < k3[gE] ? k4[gE] : -k4[gE], k2[gE] = (Math.abs(k2[gE] - k3[gE]) <= k4[gE] ? k3 : k2)[gE]);
				k1[gE] = bK.dn(k5[gE], 10)
			})(gE), an.im.jZ(gE, bK.dn(k2[gE] * ag.gi[gE], 1e3))
		}(gE)
	}, this.kP = function(gE, g9) {
		k5[gE] = k6[gE] = g9
	}
}

function ii() {
	var kQ = new Uint16Array(aD.ee);

	function kV(player, kT) {
		for (var eh = bN.fC[0], fJ = bN.fJ, kf = -1, kg = aD.ee, aB = 0; aB < eh; aB++) {
			var ex, gE = fJ[aB];
			ea(player, gE) && (ex = bL.i9(kT, bL.iU(gE)), -1 === kf || ex < kf) && (kf = ex, kg = gE)
		}
		return kg
	}

	function kX(kU, kT) {
		if (kU === aD.ee) return 0;
		for (var gN = ag.gN[kU], ke = gN.length, eh = Math.min(ke, 10), kg = 0, kf = bL.i9(gN[kg] >> 2, kT), aB = 0; aB < eh; aB++) {
			var hU = ax.jE(ke),
				ex = bL.i9(gN[hU] >> 2, kT);
			ex < kf && (kf = ex, kg = hU)
		}
		return gN[kg] >> 2
	}

	function ka(player, kT, j7, kj) {
		var kk;
		(kj === aD.ee || (kk = bL.iU(j7), kj = bL.iU(kj), bL.i9(kT, kk) < bL.i9(kT, kj))) && (kQ[player] = j7)
	}
	this.dX = function() {
		kQ.fill(aD.ee)
	}, this.ir = function(player) {
		var kT, kW, kU, j7 = function(player) {
			var j7 = kQ[player];
			if (j7 !== aD.ee) {
				if (b9.g2.ki(j7)) return j7;
				kQ[player] = aD.ee
			}
			return aD.ee
		}(player);
		return function(player) {
			for (var kd = al.jy, ke = al.jx, eh = Math.min(ke, ke < 17 && 5 === ax.jE(20) ? 1 : 16), gF = ax.jE(ke), fJ = bN.fJ, gN = ag.gN, g9 = 0, aB = 0; aB < eh; aB++) {
				var gE = kd[(aB + gF) % ke];
				gE !== player && gN[gE].length && (fJ[g9++] = gE)
			}
			bN.fC[0] = g9
		}(player), 0 !== bN.fC[0] && (0 < (kW = kX(kU = kV(player, kT = bL.iZ(player)), kT)) && bM.kY.kZ(player, kW) ? (ka(player, kT, kU, j7), !0) : 0 < (kU = function(player, kT) {
			for (var eh = bN.fC[0], fJ = bN.fJ, kh = kQ, gF = 0, aB = 0; aB < eh; aB++) {
				var gE = fJ[aB],
					gE = kh[gE];
				gE !== aD.ee && b9.g2.ki(gE) && player !== gE && ea(player, gE) && (fJ[gF++] = gE)
			}
			return 0 !== (bN.fC[0] = gF) ? kX(kV(player, kT), kT) : 0
		}(player, kT)) && bM.kY.kZ(player, kU) ? (ka(player, kT, ac.eZ(kU << 2), j7), !0) : !!(0 < (kW = kX(j7, kT)) && bM.kY.kZ(player, kW)))
	}
}

function iq() {
	function ko(player) {
		for (var f7 = ag.f7[player], eh = f7.length, f8 = Math.max(bK.dn(eh, 12), 1), ej = ac.ej, e1 = ax.jE(eh), aB = 0; aB < eh; aB += f8)
			for (var eW = f7[(aB + e1) % eh], ek = 3; 0 <= ek; ek--) {
				var el = eW + ej[ek];
				if (ac.em(el)) return {
					eL: el,
					id: ac.eP(el),
					gE: player
				}
			}
		return null
	}

	function kt(player, kv) {
		var hL = b9.g2.kw(player, aE.kB[aE.hL[player]]);
		ag.g8[player].push(kv.eL), ad.j4(player, hL, kv.gE), aF.j5(player, !0)
	}
	this.ir = function(player) {
		return !!bR.eM(bR.eN) && !!aD.data.passableMountains && 0 !== ag.f7[player].length && function(player) {
			var kn = ko(player);
			if (null === kn) return !1;
			! function(player) {
				for (var jy = al.jy, jx = al.jx, eh = Math.min(jx, 12), gF = ax.jE(jx), fJ = bN.fJ, f7 = ag.f7, g9 = 0, aB = 0; aB < eh; aB++) {
					var gE = jy[(aB + gF) % jx];
					gE !== player && f7[gE].length && ea(player, gE) && (fJ[g9++] = gE)
				}
				bN.fC[0] = g9
			}(player);
			var kq = function(eO) {
				for (var eh = bN.fC[0], fJ = bN.fJ, aB = 0; aB < eh; aB++) {
					var kv = ko(fJ[aB]);
					if (null !== kv && kv.id === eO) return kv
				}
				return null
			}(kn.id);
			return null !== kq ? (kt(player, kq), !0) : function(player, eO) {
				var eh = an.ib.ku;
				if (0 !== eh)
					for (var eL = an.ib.eE[ax.jE(eh)] << 2, ej = ac.ej, ek = ax.jE(4);;) {
						if (eL += ej[ek], ac.em(eL)) {
							if (ac.eP(eL) === eO) return kt(player, {
								eL: eL,
								gE: aD.ee
							}), !0;
							break
						}
						if (!ac.eY(eL)) break
					}
				return !1
			}(player, kn.id)
		}(player)
	}
}

function ig() {
	this.ir = function(player) {
		var eT = function(player) {
			var eh = an.ib.ku;
			if (0 === eh) return -1;
			for (var ke = Math.min(eh, an.performance.ky ? eh : 10), eE = an.ib.eE, jD = bK.dn(ax.random() * eh, ax.value(100)), e = jD + ke, kz = ax.ia(ag.iV[player], ag.iW[player]), l0 = ax.ia(ag.iX[player], ag.iY[player]), kg = -1, ex = bL
					.iA(0, 0, bR.es, bR.et), aB = jD; aB < e; aB++) {
				var gF = aB % eh,
					l1 = bL.ez(kz, l0, eE[gF]);
				l1 < ex && (ex = l1, kg = gF)
			}
			return -1 !== kg ? eE[kg] : -1
		}(player);
		return -1 !== eT && bM.kY.kZ(player, eT)
	}
}

function ij() {
	this.ky = 0, this.dX = function() {
		this.ky = 0
	}, this.ir = function() {
		if (!this.ky && be.jt() % 30 == 7 && b9.g2.l4(80) && (an.performance.ky = 1)) {
			if (aD.hW) {
				var l7 = bg.l8();
				if (bf.kI[l7]) {
					bg.l9(l7);
					var g = bN.fK,
						eh = bN.fC[0];
					if (0 !== eh)
						for (var lA = Math.min(100 + 10 * (eh - 1), 400), aB = 0; aB < eh; aB++) aE.kP(g[aB], lA)
				}
			}
			aE.kP(lB[0], 100)
		}
	}
}

function ic() {
	var lC = 0,
		lD = 0,
		lE = 300,
		lF = 300,
		lG = 0;
	this.ku = 0, this.eE = new Uint32Array(512), this.dX = function() {
		lD = lC = 0, this.ku = 0, lG = 0
	}, this.ir = function() {
		if (function() {
				var eh = an.ib.ku;
				if (0 === eh) return 1;
				var eE = an.ib.eE;
				if (be.jt() % 35 == 6) {
					for (var aB = eh - 1; 0 <= aB; aB--) ac.eY(eE[aB] << 2) || (eh--, eE[aB] = eE[eh]);
					an.ib.ku = eh
				}
				return eh < eE.length
			}())
			if (lE <= lC) {
				var lK = an.ib.ku;
				if (lK) {
					if (be.jt() % 350 != 1) return;
					if (lG !== lK) return void(lG = lK);
					if (!b9.g2.jK(lB[0])) return
				} else if (be.jt() % 12 != 8) return;
				b9.g2.lL() || an.ib.dX()
			} else {
				var aB, i = bR.es,
					lM = i - 2,
					lK = lM * (bR.et - 2),
					lN = lE,
					eE = an.ib.eE,
					ke = an.ib.ku,
					lO = eE.length,
					gF = Math.min(lD + lN * ((1 + 19 * an.performance.ky) * lF), lK);
				for (aB = lD; aB < gF; aB += lN) {
					var eL = 4 * (aB % lM + (bK.dn(aB, lM) + 1) * i + 1);
					if (ac.eY(eL) && (eE[ke] = eL >> 2, ++ke === lO)) {
						aB += lN;
						break
					}
				}(lD = aB) >= lK && (lD = ++lC), an.ib.ku = ke
			}
	}
}

function lP() {
	aN.ir(), af.ir(), aW.lQ(), az.y.ir()
}

function lR() {
	b0.ir(), aG.ir(), ae.ir(), b3.ir(), aF.ir(), an.ir(), bM.y.ir(), al.lS(), aV.ir(), ay.ir(), bU.ir(), af.ir(), af.lT(), aW.ir(), bO.ir(), aU.ir(), aP.ir(), aN.ir(), b4.ir(), aR.ir(), av.ir(), bc.ir(), bg.ir(), az.y.ir(), az.lU.ir(), t.ir(), b8
	.ir(), be.ir()
}

function lV() {
	aH.ir(), aX.ir(), aQ.ir(), au.ir(), bB.ir(), aw.lW()
}

function lX() {
	aV.lY(!1), aP.lY(), aW.lY(!1), aU.lY(), aR.lY(), av.lY(), af.lY(!1), bg.lZ()
}

function la() {
	af.lY(!1) && (be.df = !0), az.y.ir()
}

function c3() {
	var lb, lc, ld;

	function lf(lh) {
		for (var aB = lb - 1; 0 <= aB; aB--) 0 === ld[lc[aB]] && ag.gU[lc[aB]] >= lh && fj(lc[aB])
	}

	function le(player) {
		var dm;
		64 === ld[player] ? ld[player] = 6 : (dm = ag.gU[player], ld[player] = dm < 1e3 ? 3 : dm < 1e4 ? 2 : dm < 6e4 ? 1 : 0)
	}
	this.dX = function() {
		lb = 0, lc = new Uint16Array(aD.ee), ld = new Uint8Array(aD.ee)
	}, this.ir = function() {
		for (var aB = lb - 1; 0 <= aB; aB--) 64 === ld[lc[aB]] ? le(lc[aB]) : 0 == ld[lc[aB]]-- && (le(lc[aB]), fj(lc[aB]));
		16e4 <= ag.gU[lB[0]] && (lf(16e4), 3e5 <= ag.gU[lB[0]]) && lf(3e5), b9.g2.ki(aD.eR) && (bc.li[7] = Math.max(ag.gU[aD.eR], bc.li[7]))
	}, this.g4 = function(player) {
		for (var f0, aB = lb - 1; 0 <= aB; aB--)
			if (player === lc[aB]) {
				for (lb--, f0 = aB; f0 < lb; f0++) lc[f0] = lc[f0 + 1];
				return
			}
	}, this.j5 = function(player, lj) {
		for (var aB = lb - 1; 0 <= aB; aB--)
			if (player === lc[aB]) return;
		lc[lb++] = player, ld[player] = lj ? 2 : 64
	}
}

function c4() {
	var size, jk;
	this.dX = function() {
		size = aD.kH, jk = new Uint16Array(aD.ee);
		for (var jw = aD.jw, aB = aD.kH - 1; 0 <= aB; aB--) jk[aB] = jw + aB
	}, this.ir = function() {
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.lm[jk[aB]]) {
				f0 = void 0;
				var f0 = aB;
				size--, jk[f0] = jk[size]
			} else aE.ir(jk[aB])
	}, this.ll = function(gE) {
		jk[size++] = gE
	}
}

function c5() {
	var lo, lp, lq, lr, ls, lt, lu, lv, lw, lx, ly, lz, m0, m1 = !1,
		m2 = !1;

	function m3(e9) {
		lz = be.eG, lq = lr = lp = 0, ls = (m0 = 33) / e9, lo = 1 / (e9 / m0 / 4), lt = (h.i / 2 + iH) / iI, lu = (h.j / 2 + iJ) / iI, lv = iI
	}

	function mA(aB) {
		var mD; - 1 !== aB && (aB = bL.iO(bM.y.mC[aB]), mD = bL.ep(aB) - 10, aB = bL.er(aB) - 10, aH.m6(mD, aB, 19 + mD, 19 + aB))
	}

	function mO(e6) {
		Math.abs(Math.log(ly / lv)) < .125 && (ly = e6 * lv)
	}

	function mN(mD, mE, mQ, mR) {
		lw = (mD + mQ + 1) / 2, lx = (mE + mR + 1) / 2;
		mQ = h.i / (mQ - mD + 1), mD = h.j / (mR - mE + 1);
		ly = .9 * (mQ < mD ? mQ : mD)
	}
	this.m4 = function() {
		return m1
	}, this.m5 = function() {
		m3(1), this.m6(0, 0, bR.es - 1, bR.et - 1), aD.h2 || aD.gq || this.m7(aD.eR, 3e3, !0, .3)
	}, this.m8 = function(player, m9) {
		mA(bM.hA.mB(player, m9))
	}, this.m7 = function(player, e9, mF, zoom) {
		aD.mG || m1 && !mF && m2 || (0 === ag.gU[player] ? mA(bM.hA.mH(player)) : (aS.mI = !1, m2 = mF, m3(e9), function(player) {
			lw = (ag.iV[player] + ag.iW[player] + 1) / 2, lx = (ag.iX[player] + ag.iY[player] + 1) / 2
		}(player), function(zoom, player) {
			var i2 = ag.iW[player] - ag.iV[player] + 1,
				player = ag.iY[player] - ag.iX[player] + 1,
				f0 = h.i / i2,
				f1 = h.j / player,
				f0 = (ly = f0 < f1 ? f0 : f1, 0 !== zoom ? zoom : i2 < 20 && player < 20 ? .5 : .9);
			ly *= f0, mO(7 / 8)
		}(zoom, player), m1 = !0, aq.mL()))
	}, this.mM = function(e9) {
		aD.gq || aD.mG || (aS.mI = !1, m2 = !1, m3(e9), mN(0, 0, bR.es - 1, bR.et - 1), mO(7 / 8), m1 = !0, aq.mL())
	}, this.m6 = function(mD, mE, mQ, mR) {
		mN(mD, mE, mQ, mR), iI = ly, aS.mS(lw, h.i / 2), aS.mT(lx, h.j / 2), bZ.mU(), be.df = !0
	}, this.mV = function() {
		return !(m1 && m2 || (m1 = !1))
	}, this.ir = function() {
		var mY, mZ, ek, mc;
		m1 && (lp < .5 ? lr < ls && (lr += ls * lo, lq = lp) : 1 - lq < lp && (lr = (lr -= ls * lo) < ls * lo ? ls * lo : lr), lz = lz >= be.eG ? be.eG - 1 : lz, ek = be.eG - lz, lp = 1e3 < ek || 1 < (lp += lr * ek / m0) ? 1 : lp, lz = be.eG,
			ek = iI, mY = iH, mZ = iJ, ek = (iI = lv * Math.pow(ly / lv, lp)) / ek, mc = 1 - (lv * Math.pow(ly / lv, 1 - lp) - lv) / (ly - lv), aS.mS(lt + mc * (lw - lt), h.i / 2), aS.mT(lu + mc * (lx - lu), h.j / 2), af.zoom(ek, (mY * ek -
				iH) / (1 - ek), (mZ * ek - iJ) / (1 - ek)), bZ.mU(), 1 <= lp && (m1 = !1, ba.md = !0), be.df = !0)
	}
}

function bx() {
	var f2 = b9.color;
	this.me = f2.mf(0, 0, 0), this.mg = f2.mh(0, 0, 0, .7), this.mi = f2.mh(0, 0, 0, .5), this.mj = f2.mh(0, 0, 0, .85), this.mk = f2.mh(0, 0, 0, .75), this.ml = f2.mh(0, 0, 0, .6), this.mm = f2.mh(0, 0, 0, .35), this.mn = f2.mf(255, 255, 255), this
		.mo = f2.mh(255, 255, 255, .3), this.mp = f2.mh(255, 255, 255, .6), this.mq = f2.mh(255, 255, 255, .4), this.mr = f2.mh(255, 255, 255, .25), this.ms = f2.mh(255, 255, 255, .85), this.mt = f2.mh(255, 255, 255, .75), this.mu = f2.mh(255, 255,
			255, .15), this.mv = f2.mh(255, 255, 255, .11), this.mw = f2.mf(128, 128, 128), this.mx = f2.mh(64, 64, 64, .75), this.my = f2.mh(88, 88, 88, .83), this.mz = f2.mh(60, 60, 60, .85), this.n0 = f2.mh(80, 60, 60, .85), this.n1 = f2.mf(170,
			170, 170), this.n2 = f2.mf(200, 235, 245), this.n3 = f2.mf(30, 255, 30), this.n4 = f2.mf(0, 200, 0), this.n5 = f2.mf(128, 255, 128), this.n6 = f2.mh(10, 65, 10, .75), this.n7 = f2.mh(0, 255, 0, .6), this.n8 = f2.mh(0, 255, 0, .5), this
		.n9 = f2.mh(0, 200, 0, .5), this.nA = f2.mh(0, 100, 0, .75), this.nB = f2.mh(0, 60, 0, .8), this.nC = f2.mh(0, 255, 0, .3), this.nD = f2.mh(0, 180, 0, .6), this.nE = f2.mh(0, 120, 0, .85), this.nF = f2.mf(0, 120, 0), this.nG = f2.mh(0, 70, 0,
			.85), this.nH = f2.mf(190, 230, 190), this.nI = f2.mf(0, 255, 0), this.nJ = f2.mf(255, 120, 120), this.nK = f2.mf(255, 160, 160), this.nL = f2.mf(255, 70, 70), this.nM = f2.mf(230, 0, 0), this.nN = f2.mh(220, 0, 0, .6), this.nO = f2.mh(
			255, 100, 100, .8), this.nP = f2.mh(100, 0, 0, .85), this.nQ = f2.mh(60, 0, 0, .85), this.nR = f2.mh(200, 0, 0, .6), this.nS = f2.mh(120, 0, 0, .85), this.nT = f2.mf(255, 70, 10), this.nU = f2.mf(230, 190, 190), this.nV = f2.mf(255, 0,
		0), this.nW = f2.mf(255, 0, 255), this.nX = f2.mh(60, 0, 60, .85), this.nY = f2.mh(0, 60, 60, .85), this.nZ = f2.mh(10, 60, 60, .9), this.na = f2.mh(0, 96, 96, .75), this.nb = f2.mf(0, 255, 255), this.nc = f2.mf(160, 160, 255), this.nd = f2
		.mh(0, 40, 90, .75), this.ne = f2.mh(0, 0, 255, .6), this.nf = f2.mf(200, 200, 255), this.ng = f2.mf(255, 120, 100), this.nh = f2.mh(255, 255, 0, .5), this.ni = f2.mh(255, 255, 150, .2), this.nj = f2.mf(255, 255, 0), this.nk = f2.mf(255, 255,
			200), this.nl = f2.mh(200, 200, 0, .6), this.nm = f2.mh(140, 120, 0, .75), this.nn = f2.mh(180, 160, 40, .75), this.no = f2.mh(70, 50, 20, .85), this.np = f2.mh(30, 30, 0, .85), this.nq = f2.mh(60, 60, 0, .85), this.nr = f2.mh(255, 140,
			0, .75), this.ns = f2.mh(70, 40, 0, .85), this.nt = f2.mf(220, 120, 0), this.nu = f2.mh(255, 200, 80, .85), this.nv = f2.mf(255, 150, 120), this.nw = f2.mh(0, 0, 0, 0), this.nx = f2.mh(255, 255, 255, 0), this.ny = f2.mh(254, 254, 254, 0)
}

function cu() {
	this.h3 = new nz, this.g2 = new o0, this.o1 = new o2, this.o3 = new o4, this.jz = new o5
}

function nz() {
	this.h4 = function(eT) {
		aD.kF ? b7.o1.h4(aD.eR, eT) : az.o6.o7(eT)
	}, this.hE = function(iG, j7) {
		aD.kF ? b7.o1.hE(aD.eR, iG, j7) : az.o6.o8(iG, j7)
	}, this.o9 = function(iG, oA) {
		aD.kF ? b7.o1.oB(aD.eR, iG, oA) : az.o6.oC(iG, oA)
	}, this.hC = function(iG, eT) {
		aD.kF ? b7.o1.hC(aD.eR, iG, eT) : bM.hA.hB(aD.eR, eT) && az.o6.oD(iG, eT)
	}, this.oE = function(m9, eT) {
		aD.kF ? b7.o1.oE(aD.eR, m9, eT) : bM.hA.oF(aD.eR, m9, eT) && az.o6.oG(m9, eT)
	}, this.oH = function(j7) {
		aD.kF ? b7.o1.oH(aD.eR, j7) : az.o6.oI(j7)
	}, this.oJ = function(oK) {
		aD.kF ? b7.o1.oL(aD.eR, oK) : az.o6.oM(oK)
	}, this.hQ = function(oN) {
		aD.kF ? b7.o1.hQ(aD.eR, oN) : az.o6.oO(oN)
	}, this.oP = function() {
		aD.kF ? b7.o1.oP(aD.eR) : az.o6.oQ()
	}, this.hN = function() {
		aD.kF ? b7.o1.hN(aD.eR) : az.o6.oD(1, 0)
	}, this.h7 = function(iG, eT, j7) {
		aD.kF ? b7.o1.h7(aD.eR, iG, eT, j7) : az.o6.oR(iG, eT, j7)
	}
}

function o5() {
	this.k0 = function(player, oA, hL) {
		b9.g2.oS(player, hL, oA) && (ae.o9(player, oA), oA < aD.jw) && ax.random() < ax.value(10) && (an.im.j2[oA] = 0)
	}, this.oT = function(player, oA, hL) {
		b9.g2.oU(hL, oA) ? (b9.g2.g5(oA, bN.fE[0]), bc.oV(player, oA), af.oW(oA, bN.fE[0])) : bc.g6(player, hL, 12)
	}
}

function o0() {
	this.oX = function(oK, player) {
		aN.oJ(aD.eR, player, oK), az.o6.oY(oK, player)
	}, this.oZ = function(player) {
		aN.oa(player, 0), az.o6.ob(player)
	}, this.oc = function(od, player) {
		aN.oe(od, player), az.o6.og(od, player)
	}, this.oh = function() {
		aD.kF || aD.gq || az.oi.oh()
	}
}

function o4() {
	this.ir = function(aC) {
		var id, fO, mV;
		for (bG.dX(aC), bG.e2 += 2, mV = 8 * bG.size; bG.e2 + 8 <= mV;) id = bG.oj(4), fO = bG.oj(9), 0 === id ? this.ok(id, fO, bG.oj(22)) : 1 === id ? this.ok(id, fO, bG.oj(10), bG.oj(10)) : 2 === id ? this.ok(id, fO, bG.oj(10), bG.oj(9)) :
			3 === id || 4 === id ? this.ok(id, fO, bG.oj(10), bG.oj(22)) : 5 === id || 6 === id ? this.ok(id, fO, bG.oj(10)) : 7 === id ? this.ok(id, fO, bG.oj(1)) : 10 === id ? this.ok(id, fO, bG.oj(20), bG.oj(22)) : this.ok(id, fO)
	}, this.ol = [], this.om = function() {
		for (var oo = 0, op = 0, oq = 0, or = 0, os = 0, ot = 0, aB = 0; aB < 512; aB++) oo += ag.lm[aB], op += ag.gU[aB], oq += ag.gi[aB], or += bM.y.ou[aB];
		os += bM.y.ov, ot += al.jx, this.ol.push(oq % 1073741824 * 4 + (oo + op + or + os + ot) % 4)
	}, this.ok = function(id, fO, fQ, fS) {
		0 === id ? b7.o1.h4(fO, fQ) : 1 === id ? b7.o1.hE(fO, fQ, fS) : 2 === id ? b7.o1.oB(fO, fQ, fS) : 3 === id ? b7.o1.hC(fO, fQ, fS) : 4 === id ? b7.o1.oE(fO, fQ, fS) : 5 === id ? b7.o1.oH(fO, fQ) : 6 === id ? b7.o1.oL(fO, fQ) : 7 === id ?
			b7.o1.hQ(fO, fQ) : 8 === id ? b7.o1.oP(fO) : 9 === id ? b7.o1.ow(fO) : 10 === id && b7.o1.h7(fO, fQ >> 10, fS, fQ % 1024)
	}
}

function o2() {
	this.h4 = function(player, eT) {
		b9.g2.gs(0) && b9.g2.gt(player) && bL.iL(eT) && (b8.ox.oy(0, player, eT), aD.oz.j4(player, eT))
	}, this.hE = function(player, iG, j7) {
		b9.g2.gs(1) && b9.g2.gt(player) && b9.g2.p0(player, j7) && b9.g2.p1(player, iG, 12, 0) && b9.g2.p2(player, j7) && ((j7 = ad.jI(player, bN.ed[0])) || ad.ja(player)) && (ag.p3[player]++, b8.ox.oy(1, player, iG, bN.ed[0]), an.ik.iv(player,
			j7)) && (b9.g2.p4(player), bc.p5(player, iG), an.ik.j1(player))
	}, this.oB = function(player, iG, oA) {
		b9.g2.gs(1) && b9.g2.gt(player) && aD.hW && b9.g2.p0(player, oA) && b9.g2.p6(player, oA) && b9.g2.oS(player, b9.g2.iF(player, iG), oA) && (b8.ox.oy(2, player, iG, oA), ae.o9(player, oA))
	}, this.hC = function(player, iG, eT) {
		b9.g2.gs(1) && b9.g2.gt(player) && (0 === eT && 1 === iG ? this.hN(player) : bL.iL(eT) && bM.y.ov !== bM.y.kA && bM.y.ou[player] !== bM.y.p7 && 0 !== ag.gN[player].length && b9.g2.p1(player, iG, 32, 0) && bM.kY.kZ(player, eT) && (bc.p8(
			player), b8.ox.oy(3, player, iG, eT), b9.g2.p4(player), bk.p9.hC(player), bM.y.pA(player)))
	}, this.oE = function(player, m9, eT) {
		b9.g2.gs(1) && b9.g2.gt(player) && bL.iL(eT) && bM.hA.pB(player, m9) && bM.kY.pC(eT) && (b8.ox.oy(4, player, m9, eT), b9.g2.pD(player, 8), bc.g6(player, bN.fE[1], 12), bk.p9.oE(player), bM.y.oE())
	}, this.oH = function(player, j7) {
		b9.g2.gs(1) && b9.g2.gt(player) && (j7 = Math.min(j7, aD.ee), ad.jI(player, j7)) && (b8.ox.oy(5, player, j7), ad.pE(player, j7))
	}, this.oL = function(player, oK) {
		(b9.g2.gs(1) || b9.g2.gs(2)) && b9.g2.gt(player) && (oK = bK.pF(oK, 0, 1023), b8.ox.oy(6, player, oK), af.pG(player, 0, oK))
	}, this.hQ = function(player, oN) {
		av.hP(player) && (b8.ox.oy(7, player, oN), av.pH(player, oN))
	}, this.oP = function(player) {
		(b9.g2.gs(0) || b9.g2.gs(1)) && b9.g2.gt(player) && aM.pI(player) && (b8.ox.oy(8, player), bP.oP(player))
	}, this.ow = function(player) {
		b8.ox.oy(9, player), bP.ow(player)
	}, this.hN = function(player) {
		av.hR(player) && (b8.ox.oy(3, player, 1, 0), av.hN(player))
	}, this.h7 = function(player, iG, eT, j7) {
		b9.g2.gs(1) && b9.g2.gt(player) && b9.g2.p0(player, j7) && b9.g2.p2(player, j7) && bL.iL(eT) && am.eI.eb(player, eT) && (ad.jI(player, bN.ed[0]) || ad.ja(player)) && (b8.ox.oy(10, player, (iG << 10) + bN.ed[0], eT), j7 = b9.g2.kw(player,
			iG), ag.g8[player].push(bN.ei[0]), ad.j4(player, j7, bN.ed[0]), aF.j5(player, !0), bc.pJ(player))
	}
}

function pK() {
	var pM;
	this.pL = [], this.pM = document.createElement("div"), this.pN = function(pO, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pO, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pM.appendChild(
			title), title
	}, this.pP = function(pO, marginBottom) {
		var pQ = document.createElement("p");
		return pQ.textContent = pO, pQ.style.fontSize = "0.75em", pQ.style.lineHeight = "1.2em", pQ.style.marginBottom = marginBottom || "0", this.pM.appendChild(pQ), pQ
	}, this.pR = function(pO) {
		var pS = document.createElement("p");
		return pS.textContent = pO, pS.style.fontSize = "1em", pS.style.marginBottom = "0", pS.style.whiteSpace = "pre-wrap", pS.style.overflowWrap = "break-word", this.pM.appendChild(pS), pS
	}, this.pT = function(pU, fontSize) {
		var pM = document.createElement("div");
		return pM.innerHTML = pU, pM.style.fontSize = fontSize || "1em", pM.style.lineHeight = "1.2em", this.pM.appendChild(pM), pM
	}, this.pV = function(pW) {
		for (var pX = pW.pX, eh = pX.length, aB = 0; aB < eh; aB++) this.pM.appendChild(pX[aB])
	}, this.pY = function(pZ) {
		return this.pL.push(pZ), this.pM.appendChild(pZ.e), pZ
	}, this.resize = function() {
		for (var eh = this.pL.length, aB = 0; aB < eh; aB++) this.pL[aB].resize && this.pL[aB].resize()
	}, (pM = this.pM).style.position = "absolute", pM.style.height = "auto", pM.style.padding = "0.5em"
}

function pa(pb, pc) {
	var pM = document.createElement("div");

	function pl() {
		var aB, pm, j, gF, ek, pg = h.k * pM.offsetWidth,
			pn = new Float64Array(function(pg) {
				var i = .25 * b9.ph.pi(.6) * h.pj;
				return Math.max(Math.floor(pg / i), 1)
			}(pg)),
			po = bb.po,
			pp = (pg - (pn.length + 1) * bb.gap) / (pn.length * h.k);
		for (pn.fill(po), aB = 0; aB < pc.length; aB++) pm = (ek = pc[aB].pM).style, j = b9.pq.min(pn), gF = pn.indexOf(j), pm.top = b9.ph.pr(j), pm.left = b9.ph.pr(po + gF * (pp + po)), pm.width = b9.ph.pr(pp), b9.ph.ps(ek, 5), pn[gF] += ek
			.offsetHeight + 3 * po;
		pM.style.height = b9.ph.pr(b9.pq.max(pn) - 2 * po)
	}
	this.pd = pM, this.pe = pc, this.resize = function() {
		var aB;
		for (aB = 0; aB < pc.length; aB++) pc[aB].resize();
		pl(), pl()
	}, pM.style.width = "100%", pM.style.maxWidth = "100%", pb.style.lineHeight = "1.5em", pb.style.overflowX = "hidden", pb.style.overflowY = "auto";
	for (var aB = 0; aB < pc.length; aB++) pM.appendChild(pc[aB].pM);
	pb.appendChild(pM)
}

function w(pt, pu, pv, pw, px) {
	var self, py = document.createElement("button");

	function q5() {
		var qB;
		bI.qA() || (qB = b9.color.qC(pv), !1 !== pw && 0 < qB[0] && qB[0] < 255 && qB[0] === qB[1] && qB[0] === qB[2]) || (py.style.backgroundColor = b9.color.qD(pv, qB[3] && qB[3] < 120 ? 150 : 50))
	}

	function q4() {
		if (pw) {
			var qB = b9.color.qC(pv);
			if (qB[0] === qB[1] && qB[0] === qB[2]) return
		}
		pu && ((qB = pu(this)) ? 2 === qB && q5() : qF(this))
	}

	function q7() {
		this.style.backgroundColor = pv
	}

	function q6() {
		qF(this)
	}

	function qF(ek) {
		ek.style.backgroundColor = pv, ek.blur()
	}
	this.button = py, this.pz = pu, this.q0 = pv, this.q3 = function(q8) {
		q8 = 1.1 - Math.min(.01 * pt.length, .6) + .2 * q8;
		py.style.fontSize = q8.toFixed(1) + "em"
	}, this.q2 = function(f2) {
		f2 ? 1 === f2 ? f2 = bA.mz : 2 === f2 && (pw = 1, f2 = bA.mz) : (pw = 0, f2 = bA.mj), this.q0 = pv = f2, py.style.backgroundColor = f2
	}, self = this, py.innerHTML = pt, py.style.color = px ? bA.nj : bA.mn, py.style.userSelect = "none", py.style.outline = "none", py.style.overflowWrap = "break-word", self.q2(pv), py.style.border = "none", py.style.font = "inherit", self.q3(
		0), py.style.padding = "0em 0.3em", py.onclick = q4, py.addEventListener("mouseover", q5), py.addEventListener("mouseout", q6), py.addEventListener("focus", q5), py.addEventListener("blur", q7)
}

function qG(qH, pb) {
	var pM;
	this.resize = function() {
		for (var aB = 0; aB < qH.length; aB++) b9.ph.ps(qH[aB].button);
		pM.style.gap = pM.style.padding = b9.ph.pr(bb.po)
	}, (pM = document.createElement("div")).style.display = "grid", pM.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pM.style.overflowY = "auto", pM.style.gridAutoRows = "5.3em", pM.style.maxHeight = "100%";
	for (var aB = 0; aB < qH.length; aB++) qH[aB].q3(1), pM.appendChild(qH[aB].button);
	pb.appendChild(pM)
}

function qJ(qK, qL, qM) {
	this.eo = 0, this.eq = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b9.ph.pi(qM || .5) * qK[1] * h.pj, h.j - 2 * bb.gap), this.i = Math.min(this.j * (qK[0] / qK[1]), h.i - 2 * bb.gap), this.j = qK[1] * this.i / qK[0], this.eo = bb.gap + qL[0] * (h.i - this.i - 2 * bb.gap), this.eq = bb
			.gap + qL[1] * (h.j - this.j - 2 * bb.gap)
	}, this.qN = function() {
		return this.eo + .5 * this.i
	}
}

function qO(qP, qQ) {
	var qZ, self, qR = document.createElement("div"),
		qS = document.createElement("div"),
		qT = document.createElement("div"),
		qU = null,
		qa = (this.qV = new qW({
			value: "",
			e2: -1
		}, 0, qX, function(e) {
			e.target.value = b9.qh.qi(e.target.value), qU.qg.textContent = 127 - e.target.value.length
		}), 0),
		qb = 1,
		qc = 0,
		qd = 1048575;

	function qX() {
		qP(), qU.qg.textContent = 127
	}

	function qs(qr, pZ) {
		pZ && (pZ.qy = 1, qr.appendChild(bm.qz.transform(pZ)))
	}

	function qw(br) {
		qb ? qR.scrollTop = qR.scrollHeight : br && (qR.scrollTop = qc)
	}
	this.qj = function(qk) {
			qd = 1048575, qS.textContent = "", qk || this.lZ()
		}, this.lZ = function() {
			var ql = bm.y.qm[0],
				ql = bm.y.qo[ql],
				qp = ql.qp,
				eh = qp.length,
				jD = 1048575 === qd ? 0 : eh - (ql.qq - qd + 1048575) % 1048575;
			if (qd = ql.qq, !(eh <= (jD = Math.max(jD, 0)))) {
				for (var qr = document.createDocumentFragment(), aB = jD; aB < eh; aB++) qs(qr, bm.qt.qu(qp[aB], bm.qt.qv(qp[aB])));
				qS.appendChild(qr), qw()
			}
		}, this.qx = function(r) {
			var qr = document.createDocumentFragment();
			qs(qr, r), qS.appendChild(qr), qw()
		}, this.show = function(pb) {
			pb.appendChild(qR), pb.appendChild(qT), this.resize(pb)
		}, this.r0 = function(pb) {
			pb.removeChild(qR), pb.removeChild(qT)
		}, this.resize = function(pb) {
			qa = pb ? pb.offsetHeight : qa;
			var pb = b9.ph.r2(.04, .75),
				r3 = Math.max(pb, qa - pb),
				r4 = h.i / h.k,
				r5 = .7 * r4,
				r3 = (qT.style.top = b9.ph.pr(qa - pb), qT.style.height = b9.ph.pr(pb), qR.style.top = b9.ph.pr(qa - pb - r3), qR.style.height = b9.ph.pr(r3), b9.ph.ps(qR, 2), this.qV.e.style.width = b9.ph.pr(r5), this.qV.e.style.fontSize = qZ.button
					.style.fontSize = b9.ph.pr(.5 * pb), b9.ph.ps(this.qV.e, 6), qZ.button.style.left = b9.ph.pr(r5), qZ.button.style.width = b9.ph.pr(r4 - r5), .385 * pb);
			a0.a1.r7() && (r3 *= .8 - .12 * (h.i > h.j)), qS.style.marginLeft = qS.style.marginRight = b9.ph.pr(.5 * r3), qS.style.fontSize = b9.ph.pr(r3), qw(1)
		}, (self = this).qV.e.qe = 127, qR.style.position = "absolute", qR.style.top = "0", qR.style.left = "0", qR.style.width = "100%", qR.style.overflowX = "hidden", qR.style.overflowY = "auto", qR.style.font = "inherit", qR.style
		.backgroundColor = bA.ml, qR.addEventListener("scroll", function() {
			qc = qR.scrollTop, qb = qc < qR.scrollHeight - qR.clientHeight - 2 ? 0 : 1
		}), qS.style.font = "inherit", qT.style.position = "absolute", qT.style.left = "0", qT.style.width = "100%", self.qV.e.setAttribute("placeholder", L(13)), self.qV.e.style.position = "absolute", self.qV.e.style.top = "0", self.qV.e.style
		.left = "0", self.qV.e.style.height = "100%", self.qV.e.style.backgroundColor = bA.mi, self.qV.e.style.textAlign = "center", (qZ = new w(L(14), qX)).button.top = "0", qZ.button.style.position = "absolute", qZ.button.style.height = "100%", qZ
		.q2(bA.nx), qU = new qf("127", qZ.button, 1, 1), qR.appendChild(qS), qT.appendChild(self.qV.e), qT.appendChild(qZ.button)
}

function r8(r9, pt, rA) {
	function click() {
		var value = 1 - r9.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pt, void 0 !== r9.e2 ? bi.rB.rC(r9.e2, value) : r9.value = value, rA && rA(value)
	}
	var e;
	pt = pt || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (r9.value ? "🟩 " : "⬜ ") + pt, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function rD(pb, pU) {
	var pM = document.createElement("div");
	this.pd = pM, this.resize = function() {
		pM.style.padding = b9.ph.pr(bb.po), pM.style.lineHeight = b9.ph.pr(b9.ph.r2(.035))
	}, pb.style.overflowX = "hidden", pb.style.overflowY = "auto", pM.innerHTML = pU, pb.appendChild(pM)
}

function rE(rF) {
	var pM = document.createElement("div");
	this.e = pM, this.rG = rF, this.resize = function() {
		for (var eh = rF.length, aB = 1; aB < eh; aB++) b9.ph.ps(rF[aB], 4)
	};
	var aB, eh = rF.length;
	for (pM.style.width = "100%", pM.style.height = "2.7em", pM.style.marginTop = "0.6em", pM.style.border = "inherit", aB = 0; aB < eh; aB++) rF[aB].style.verticalAlign = "top", rF[aB].style.width = (100 / eh).toFixed(2) + "%", rF[aB].style.height =
		"100%", rF[aB].style.fontSize = "0.75em", pM.appendChild(rF[aB])
}

function rH(rI, pv, rJ) {
	this.pM = document.createElement("div"), this.qH = rI;
	var rK = 0;
	this.resize = function(pb, rM) {
		var eh = rI.length;
		if (!rJ)
			for (var aB = 1; aB < eh; aB++) b9.ph.ps(rI[aB].button, 4);
		for (var rN = 0, aB = 0; aB < eh; aB++) rN += rI[aB].button.offsetWidth;
		if (pb && (rK = pb.offsetWidth), rM && rN < rK)
			for (aB = 0; aB < eh; aB++) rI[aB].button.style.width = (100 * rI[aB].button.offsetWidth / rN).toFixed(2) + "%";
		else
			for (aB = 0; aB < eh; aB++) rI[aB].button.style.width = "auto";
		rM || this.resize(pb, 1)
	};
	var rL = this;
	rL.pM.style.height = rL.pM.style.maxHeight = "100%";
	for (var aB = 0; aB < rI.length; aB++) rI[aB].q2(pv), rI[aB].button.style.height = "100%", rI[aB].button.style.padding = "0.0em 0.9em", rL.pM.appendChild(rI[aB].button)
}

function rO() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b9.ph.ps(this.e, 8, bA.mw)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rP() {
	var rT, rU, rQ = document.createElement("div"),
		rR = 0,
		rS = 0;
	this.show = function(eo, eq, pO, rV, rW) {
		if (rR) {
			if (!rV) return;
			this.r0()
		}
		eo === eq && -1 === eo ? (eo = rT, eq = rU) : (rT = eo, rU = eq), rW || (rS = rV), rR = 1;
		rW = h.i / h.k, rQ.style.whiteSpace = "pre", rQ.textContent = pO, b9.ph.ps(rQ, 5), rQ.style.font = b9.ph.rY(0, b9.ph.r2(.015)), rQ.style.padding = "0.3em 0.6em", rQ.style.left = eo + "px", rQ.style.top = "0px", document.body.appendChild(
			rQ), rV = eo + rQ.offsetWidth - rW;
		0 < rV && (rQ.style.left = (pO = eo - rV) + "px", pO < 5) && (rQ.style.whiteSpace = "pre-wrap"), rQ.style.top = eq - rQ.offsetHeight + rS * bb.ra + "px"
	}, this.r0 = function(rb) {
		if (rR) {
			if (rb && rS) return 0;
			rR = 0, document.body.removeChild(rQ)
		}
		return 1
	}, rQ.style.position = "absolute", rQ.style.backgroundColor = bA.mj, rQ.style.color = bA.mn, rQ.style.pointerEvents = "none", rQ.style.zIndex = "5", rQ.style.maxWidth = "100%"
}

function qW(rc, type, rd, re) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.rf++, e.value = rc.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bA.mn, e.style.backgroundColor = bA.mg, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.rg++
		}), e.addEventListener("blur", function() {
			h.rg--, -1 !== rc.e2 && bi.rB.rC(rc.e2, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rc.e2 && bi.rB.rC(rc.e2, e.value), rd ? rd() : e.blur())
		}), re && e.addEventListener("input", function(pZ) {
			re(pZ)
		})
}

function rh(pb, data) {
	var eh = data.ri.length,
		rj = document.createElement("div"),
		rk = document.createElement("div"),
		rl = document.createElement("div"),
		rm = new Array(eh),
		pc = new Array(eh),
		rn = new Array(data.ro.length),
		rp = b9.color.mh(70, 70, 0, .35);

	function qD() {
		this.style.backgroundColor = b9.color.qD(rp, 160)
	}

	function ru() {
		this.style.backgroundColor = rp
	}

	function pl() {
		var f0;
		for (pb.style.font = b9.ph.rY(0, b9.ph.s4(.026, .5, .03)), aB = 1; aB < rn.length; aB++) b9.ph.ps(rn[aB], 4);
		if (b9.ph.ps(rj, 2), eh) {
			for (var h6, s5 = rj.offsetWidth, s6 = rl.offsetWidth, aB = 0; aB < rn.length; aB++) h6 = .01 * data.rt[aB] * s6, rn[aB].style.width = (100 * h6 / s5).toFixed(2) + "%";
			var ke = data.ri[0].length;
			for (aB = 0; aB < eh; aB++)
				for (b9.ph.ps(rm[aB], 2), f0 = 1; f0 < ke; f0++) b9.ph.ps(pc[aB][f0], 4);
			rk.rq && (rk.scrollTop = rk.rq)
		}
	}
	this.resize = function() {
			pl(), pl()
		}, pb.style.display = "flex", pb.style.flexDirection = "column", rk.style.overflowX = "hidden", rk.style.overflowY = "auto", rk.addEventListener("scroll", function() {
			this.rq = this.scrollTop
		}),
		function() {
			var ek, aB, ri = data.ri,
				ke = eh ? ri[0].length : 0;
			for (aB = 0; aB < eh; aB++) {
				rm[aB] = document.createElement("div"), rm[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? b9.color.mh(130, 130, 130, .35) : bA.mm
				}(aB), rm[aB].style.width = "100%", rm[aB].style.display = "flex", pc[aB] = new Array(ke);
				for (var f0 = 0; f0 < ke; f0++) pc[aB][f0] = ek = document.createElement("div"), ek.style.display = "flex", ek.style.justifyContent = "center", ek.style.wordBreak = "break-all", ek.style.padding = "0.4em 0em", ek.style.width = data
					.rt[f0] + "%", ek.innerHTML = ri[aB][f0].f9, 1 === ri[aB][f0].dm && (ek.name = "" + aB, ek.style.color = bA.nj, ek.style.backgroundColor = rp, ek.addEventListener("mouseover", qD), ek.addEventListener("mouseout", ru), function(ek,
						rw, rx) {
						2147483647 !== rx && ek.addEventListener("click", function() {
							bC.a7(30), bC.a8(30, rw), bG.dX(bC.aC), this.style.backgroundColor = rp, t.u(8, t.ry, new rz(25, {
								s0: 0,
								rw: bE.s1.s2(bE.s1.s3(5)),
								rx: rx
							}))
						})
					}(ek, ri[aB][f0].rw, ri[aB][f0].rx)), rm[aB].appendChild(ek)
			}
			for (rj.style.display = "flex", rj.style.backgroundColor = b9.color.mh(0, 120, 0, .35), aB = 0; aB < rn.length; aB++) rn[aB] = ek = document.createElement("div"), ek.style.display = "flex", ek.style.justifyContent = "center", ek.style
				.wordBreak = "break-all", ek.style.padding = "0.4em 0em", ek.style.width = data.rt[aB] + "%", ek.innerHTML = data.ro[aB], rj.appendChild(ek)
		}();
	for (var aB = 0; aB < eh; aB++) rl.appendChild(rm[aB]);
	rk.appendChild(rl), pb.appendChild(rj), pb.appendChild(rk)
}

function s7() {
	var sB, sC, s8 = document.createElement("div"),
		s9 = document.createElement("div"),
		sA = document.createElement("div"),
		rl = document.createElement("div"),
		qH = [],
		dx = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		sD = [1, 2, 3, 0, 9, 10, 11];

	function sF(aB) {
		t.u(8, 0, new rz(21, {
			sH: sD[aB],
			sI: 0,
			sJ: 10
		}))
	}
	this.show = function() {
			this.rC(t.y.sK), document.body.appendChild(s8)
		}, this.r0 = function() {
			document.body.removeChild(s8)
		}, this.rC = function(sK) {
			for (var sL = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < qH.length; aB++) {
				var i = sK[aB];
				sB[sL[aB]][1].qg.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, sM = bb.gap,
				j = b9.ph.sN(.085),
				i = Math.min(4 * j, h.i - 2 * sM),
				eh = qH.length;
			for (b9.ph.sO(s8, sM, h.j - sM - j, i, j), b9.ph.ps(s8), b9.ph.ps(s9, 6), aB = 0; aB < eh - 1; aB++) b9.ph.ps(qH[aB].button, 6);
			for (aB = 0; aB < eh; aB++) sB[aB][0].resize(), sB[aB][1].resize();
			for (qH[0].eo = 0, qH[0].button.style.left = b9.ph.pr(qH[0].eo), qH[0].button.style.width = b9.ph.sP(1.7 * j), aB = 1; aB < eh; aB++) qH[aB].eo = qH[aB - 1].eo + qH[aB - 1].button.offsetWidth, qH[aB].button.style.left = b9.ph.pr(qH[aB]
				.eo);
			if (!sC) {
				if (!ab.sQ()) return;
				(sC = ab.get(14)).style.width = "24%", sC.style.position = "absolute", s9.appendChild(sC)
			}
			sC.style.left = b9.ph.pr(0), sC.style.top = "7%", sA.sR && (sA.scrollLeft = sA.sR)
		}, s8.style.position = "absolute", s9.style.width = "25%", s9.style.height = "100%", s9.style.backgroundColor = bA.mj, sA.style.position = "absolute", sA.style.width = "75%", sA.style.height = "100%", sA.style.backgroundColor = bA.mj, sA
		.style.top = sA.style.right = b9.ph.pr(0), b9.ph.sE(sA), rl.style.height = rl.style.maxHeight = "100%", qH.push(new w("", function() {
			sF(0)
		}, bA.nX)), qH.push(new w("", function() {
			sF(1)
		}, bA.nY)), qH.push(new w("", function() {
			sF(2)
		}, bA.nQ)), qH.push(new w("", function() {
			sF(3)
		}, bA.nB)), qH.push(new w("", function() {
			sF(4)
		}, bA.ns)), qH.push(new w("", function() {
			sF(5)
		}, bA.nq)), qH.push(new w("", function() {
			sF(6)
		}, bA.ns)), sB = new Array(qH.length);
	for (var aB = 0; aB < qH.length; aB++) qH[aB].button.style.position = "absolute", sB[aB] = [new sG(dx[aB], qH[aB].button, .25, .45), new sG("", qH[aB].button, .53, .84, 1)], qH[aB].button.style.height = qH[aB].button.style.maxHeight = "100%", qH[
		aB].button.top = b9.ph.pr(0), rl.appendChild(qH[aB].button);
	sA.appendChild(rl), s8.appendChild(s9), s8.appendChild(sA)
}

function sS(sT, sU, sV, sW, qP, qQ) {
	var sX = document.createElement("div"),
		sY = document.createElement("div"),
		sZ = document.createElement("div"),
		sa = document.createElement("div"),
		sb = document.createElement("div"),
		sc = document.createElement("div"),
		sd = document.createElement("div"),
		se = document.createElement("div"),
		sf = document.createElement("span"),
		sg = document.createElement("div");
	this.sh = new qO(qP, qQ), this.si = new sj(qQ), this.sk = [sT, sU, sV, sW], this.so = function(sp) {
		sp = (sp / 10).toFixed(1) + "%";
		se.style.width = sp, sf.innerHTML = sp
	}, this.sq = function() {
		this.si.r0(sc), this.sh.show(sc)
	}, this.sr = function() {
		this.sh.r0(sc), this.si.show(sc)
	}, this.ss = function() {
		return sY
	}, this.show = function() {
		document.body.appendChild(sX)
	}, this.r0 = function() {
		document.body.removeChild(sX)
	}, this.resize = function(st) {
		var su = 1 - .4 * a0.a1.r7() * (h.i > 1.6 * h.j),
			sv = b9.ph.r2(.05 * su),
			sw = h.j > h.i,
			sx = b9.ph.r2(.07 * su + .03 * sw),
			sy = b9.ph.r2(.04 + .02 * sw),
			sw = b9.ph.r2(.02 * su + .01 * sw),
			t0 = b9.ph.r2(.025);
		sX.style.font = b9.ph.rY(0, t0), su < 1 && (t0 = b9.ph.rY(0, su * t0), sZ.style.font = t0, sb.style.font = t0, sg.style.font = t0, sd.style.font = t0, sa.style.font = t0), sY.style.height = b9.ph.pr(sv), sY.style.font = b9.ph.rY(0, .72 *
				sv), b9.ph.ps(sY, 2), sZ.style.top = b9.ph.pr(sv), sZ.style.height = b9.ph.pr(sx), b9.ph.ps(sZ, 2), sa.style.font = b9.ph.rY(0, su * b9.ph.r2(.02)), sa.style.top = b9.ph.pr(sv + sx), sa.style.height = b9.ph.pr(sy), b9.ph.ps(sa,
			2), sb.style.top = b9.ph.pr(sv + sx + sy), sb.style.height = b9.ph.pr(sx), b9.ph.ps(sb, 2), sc.style.top = b9.ph.pr(sv + sx + sy + sx), sc.style.height = b9.ph.pr(h.j / h.k - sv - 3 * sx - sy - sw), sd.style.top = b9.ph.pr(h.j / h.k -
				sx - sw), sd.style.height = b9.ph.pr(sw), b9.ph.ps(sd, 8), sf.style.font = b9.ph.rY(0, .8 * sw), sg.style.top = b9.ph.pr(h.j / h.k - sx), sg.style.height = b9.ph.pr(sx), b9.ph.ps(sg, 8), sT.resize(sZ), sU.resize(sZ), sV.resize(
			sZ), sW.resize(sZ), st ? this.sh.resize(sc) : this.si.resize()
	};
	qP = this;
	sX.style.position = "absolute", sX.style.top = "0", sX.style.left = "0", sX.style.width = "100%", sX.style.height = "100%", sX.style.backgroundColor = bA.mm, bI.qA() || (sX.style.backdropFilter = "blur(4px)", sX.style.webkitBackdropFilter =
		"blur(4px)"), sY.style.position = "absolute", sY.style.top = "0", sY.style.left = "0", sY.style.width = "100%", sY.style.display = "flex", sY.style.alignItems = "center";
	for (var g = [sZ, sa, sb, sg], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", b9.ph.sE(g[aB]);
	sc.style.position = "absolute", sc.style.left = "0", sc.style.width = "100%", sc.style.font = "inherit", sd.style.position = "absolute", sd.style.left = "0", sd.style.width = "100%", se.style.position = "absolute", se.style.top = "0", se.style
		.left = "0", se.style.height = "100%", se.style.width = "50%", se.style.backgroundColor = bA.n9, sf.innerHTML = "", sf.style.position = "absolute", sf.style.top = "50%", sf.style.left = "50%", sf.style.transform = "translate(-50%, -50%)", sY
		.appendChild(function() {
			var sn = document.createElement("h1");
			return sn.textContent = L(23), sn.style.margin = "0 auto 0.15em auto", sn.style.webkitTextStroke = "0.02em brown", sn.style.fontFamily = "Arial Black, Trebuchet MS", sn.style.fontSize = "inherit", sn.style.fontWeight = "inherit", sn
		}()), sZ.appendChild(sT.pM), sa.appendChild(sU.pM), sb.appendChild(sV.pM), sd.appendChild(se), sd.appendChild(sf), sg.appendChild(sW.pM), sX.appendChild(sY), sX.appendChild(sZ), sX.appendChild(sa), sX.appendChild(sb), sX.appendChild(sc), sX
		.appendChild(sd), sX.appendChild(sg), qP.si.show(sc)
}

function sj(qQ) {
	var sX = document.createElement("div"),
		sc = document.createElement("div");
	this.lZ = function() {
			sc.textContent = "", bm.t2.r0(1);
			for (var qr = document.createDocumentFragment(), t3 = bm.y.qm[0], t4 = bm.t4.t5[t3], t6 = bm.t4.t6[t3], aB = 0; aB < t4.length; aB++) ! function(qr, pZ, t8, t3) {
				var qg = document.createElement("span");
				qg.textContent = (t8 ? "🟢 " : "⚪ ") + bm.qt.t9(pZ, t3), qg.style.color = bm.qt.tA(pZ.tB), qg.style.cursor = "pointer", qg.style.margin = "0.2em 0.2em 0.2em 0.2em", qg.style.width = qg.style.maxWidth = 2 === t3 ? "10em" : "9em",
					qg.style.height = qg.style.maxHeight = "1.4em", qg.style.whiteSpace = "nowrap", qg.style.overflow = "hidden", qg.style.textOverflow = "ellipsis", qg.style.font = "inherit", qg.style.display = "inline-block", bm.qt.tC(pZ) && (
						qg.style.textDecoration = "underline"), qg.onclick = function(e) {
						qQ(e, pZ)
					}, bI.qA() || (qg.onmouseover = function(e) {
						bm.t2.tD(e, pZ, 1)
					}), qr.appendChild(qg)
			}(qr, t4[aB], aB < t6, t3);
			sc.appendChild(qr)
		}, this.show = function(pb) {
			pb.appendChild(sX)
		}, this.r0 = function(pb) {
			pb.removeChild(sX)
		}, this.resize = function() {
			sc.style.fontSize = b9.ph.pr(b9.ph.r2(.02, .3))
		}, sX.style.top = "0", sX.style.left = "0", sX.style.width = sX.style.height = "100%", sX.style.overflowX = "hidden", sX.style.overflowY = "auto", sX.style.font = "inherit", sc.style.font = "inherit", sc.style.margin = "0.4em", sX
		.appendChild(sc)
}

function tE(tF) {
	var sX = document.createElement("div"),
		qT = document.createElement("div"),
		tG = [];

	function q5() {
		bI.qA() || (this.style.backgroundColor = b9.color.qD(bA.mj, 50))
	}

	function q6() {
		this.style.backgroundColor = bA.mj
	}
	this.rC = function(tI, tJ) {
			tG[2].textContent = tI + 1 + " / " + tJ
		}, this.show = function(pZ) {
			qT.appendChild(bm.qz.transform(bm.qt.qu(pZ, bm.qt.qv(pZ)))), document.body.appendChild(sX)
		}, this.resize = function() {
			var j = b9.ph.r2(.03, .5);
			sX.style.width = 10 * j + "px", sX.style.font = b9.ph.rY(1, .75 * j), b9.ph.ps(sX, 4), qT.style.top = j + "px", qT.style.font = b9.ph.rY(0, .55 * j), b9.ph.ps(qT, 2), sX.style.height = j + qT.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) b9.ph.ps(tG[aB], 6), tG[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) tG[aB].style.height = j + "px", b9.ph.ps(tG[aB], 2);
			tG[2].style.width = 4 * j + "px", tG[1].style.left = 2 * j + "px", tG[2].style.left = 4 * j + "px", tG[3].style.left = 8 * j + "px"
		}, this.tK = function() {
			for (var aB = 0; aB < 4; aB++) tG[aB].onclick = null, tG[aB].onmouseover = null, tG[aB].onmouseout = null;
			document.body.removeChild(sX), sX = qT = tG = null
		}, sX.style.position = "absolute", sX.style.color = bA.mn, sX.style.zIndex = "3", sX.style.right = "0", sX.style.top = "0", qT.style.position = "absolute", qT.style.height = "auto", qT.style.color = bA.mn, qT.style.backgroundColor = bA.mj, qT
		.style.left = "0", qT.style.width = "100%", qT.style.overflowWrap = "break-word", sX.appendChild(qT);
	for (var aB = 0; aB < 4; aB++) tG[aB] = document.createElement("div"), tG[aB].style.position = "absolute", tG[aB].style.backgroundColor = bA.mj, tG[aB].style.color = bA.mn, tG[aB].style.top = "0", tG[aB].style.display = "flex", tG[aB].style
		.justifyContent = "center", tG[aB].style.alignItems = "center", tG[aB].style.userSelect = "none", tG[aB].style.outline = "none", tG[aB].style.font = "inherit", 2 !== (tG[aB].tH = aB) && (tG[aB].onclick = tF, tG[aB].onmouseover = q5, tG[aB]
			.onmouseout = q6), sX.appendChild(tG[aB]);
	tG[0].textContent = "◀", tG[1].textContent = "▶", tG[3].textContent = "✖"
}

function tL(tF) {
	var rQ = document.createElement("div");

	function q5() {
		bI.qA() || (rQ.style.backgroundColor = b9.color.qD(bA.mj, 50))
	}

	function q6() {
		rQ.style.backgroundColor = bA.mj
	}
	this.rC = function(tJ) {
			rQ.textContent = tJ
		}, this.show = function() {
			document.body.appendChild(rQ)
		}, this.resize = function() {
			var j = b9.ph.r2(.03, .5);
			rQ.style.width = 2 * j + "px", rQ.style.height = j + "px", rQ.style.font = b9.ph.rY(1, .75 * j), b9.ph.ps(rQ, 4), b9.ph.ps(rQ, 2)
		}, this.tK = function() {
			rQ.onclick = null, rQ.onmouseover = null, rQ.onmouseout = null, document.body.removeChild(rQ), rQ = null
		}, rQ.style.position = "absolute", q6(), rQ.style.color = bA.mn, rQ.style.zIndex = "3", rQ.style.right = "0", rQ.style.top = "0", rQ.style.display = "flex", rQ.style.justifyContent = "center", rQ.style.alignItems = "center", rQ.style
		.userSelect = "none", rQ.style.outline = "none", rQ.onclick = tF, rQ.onmouseover = q5, rQ.onmouseout = q6
}

function tM(rI) {
	var sX = document.createElement("div"),
		tN = document.createElement("div"),
		rR = (this.eo = 0, this.eq = 0);

	function tP() {
		bm.tQ.r0()
	}
	this.qH = rI, this.show = function(eo, eq, tS) {
		if (rR) return [0, 0];
		rR = 1, this.eo = eo, this.eq = eq,
			function(self, tS) {
				var i = b9.ph.r2(.16, .7),
					j = rI.length * i / 3,
					tU = h.i / h.k,
					tV = h.j / h.k,
					mP = Math.min(1, Math.min(tU / i, tV / j));
				i *= mP, j *= mP, tS && (self.eo += b9.ph.r2(.03, .5)), self.eo = bK.pF(self.eo, 0, tU - i), self.eq = bK.pF(self.eq, 0, tV - j), tN.style.left = self.eo + "px", tN.style.top = self.eq + "px", tN.style.width = i + "px", tN.style
					.height = j + "px", tN.style.font = b9.ph.rY(0, .34 * j / rI.length), b9.ph.ps(tN, 5);
				for (var aB = 1; aB < rI.length; aB++) b9.ph.ps(rI[aB].button, 8)
			}(this, tS), document.body.appendChild(sX)
	}, this.r0 = function() {
		rR && (rR = 0, sX.removeEventListener("click", tP), document.body.removeChild(sX))
	};
	for (var aB = 0; aB < rI.length; aB++) new qf("" + (1 + aB), rI[aB].button, 0, 1);
	sX.style.position = "fixed", sX.style.top = "0", sX.style.left = "0", sX.style.width = "100%", sX.style.height = "100%", sX.style.zIndex = "5", tN.style.position = "absolute",
		function() {
			for (var tR = (100 / rI.length).toFixed(2) + "%", aB = 0; aB < rI.length; aB++) rI[aB].button.style.width = "100%", rI[aB].button.style.height = rI[aB].button.style.maxHeight = tR, rI[aB].button.style.padding = "0.0em 0.9em", tN
				.appendChild(rI[aB].button)
		}(), sX.appendChild(tN), sX.addEventListener("click", tP)
}

function tW(rc, tX) {
	this.pX = [];
	var tY = this.pX;

	function click() {
		for (var aB = 0; aB < tY.length; aB++) tY[aB].textContent = tY[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e2 = parseInt(this.name);
		void 0 !== rc.e2 && bi.rB.rC(rc.e2, e2), tX && tX(e2)
	}
	for (var tZ, eh = rc.ta.length, aB = 0; aB < eh; aB++)(tZ = document.createElement("p")).textContent = "⚪ " + rc.ta[aB], tZ.style.margin = "0", tZ.name = "" + aB, tZ.style.cursor = "pointer", tZ.style.fontSize = "1em", tZ.addEventListener(
		"click", click), tY.push(tZ);
	tY[rc.value].textContent = tY[rc.value].textContent.replace("⚪", "🟢")
}

function tb(title, tc, td) {
	var s8 = document.createElement("div"),
		te = document.createElement("div"),
		rl = document.createElement("div"),
		tf = document.createElement("div"),
		tg = document.createElement("div");
	this.th = rl, this.ti = tc, this.show = function() {
			!1 !== td ? document.body.appendChild(s8) : (document.body.appendChild(te), document.body.appendChild(tf))
		}, this.r0 = function() {
			!1 !== td ? document.body.removeChild(s8) : (document.body.removeChild(te), document.body.removeChild(tf))
		}, this.tm = function() {
			var r3 = b9.ph.r2(.1),
				r1 = b9.ph.r2(.08 + .04 * (h.tn < 1));
			return {
				r3: r3,
				r1: r1,
				to: h.j / h.k - r3 - r1
			}
		}, this.resize = function(rM) {
			var eh = tc.length,
				tp = this.tm(),
				r3 = tp.r3,
				r1 = tp.r1;
			for (te.style.height = b9.ph.pr(r3), b9.ph.ps(te, 2), tf.style.top = b9.ph.pr(h.j / h.k - r1), tf.style.height = b9.ph.pr(r1), b9.ph.ps(tf, 8), rl.style.top = b9.ph.pr(r3), rl.style.height = rl.style.maxHeight = b9.ph.pr(tp.to), te.style
				.font = b9.ph.rY(0, b9.ph.r2(.02, .3)), tf.style.font = b9.ph.rY(0, b9.ph.r2(.02, .7)), rl.style.font = b9.ph.rY(0, b9.ph.r2(.02, .7)), aB = 1; aB < eh; aB++) b9.ph.ps(tc[aB].button, 4);
			for (var rN = 0, aB = 0; aB < eh; aB++) rN += tc[aB].button.offsetWidth;
			if (rM && rN < tf.offsetWidth)
				for (aB = 0; aB < eh; aB++) tc[aB].button.style.width = (100 * tc[aB].button.offsetWidth / rN).toFixed(2) + "%";
			else
				for (aB = 0; aB < eh; aB++) tc[aB].button.style.width = "auto";
			tf.sR && (tf.scrollLeft = tf.sR), rM || this.resize(!0)
		}, this.tq = function() {
			var tp = this.tm(),
				f2 = h.k;
			tr.fillStyle = bA.mj, tr.fillRect(0, f2 * tp.r3, h.i, f2 * tp.to)
		}, s8.style.position = "absolute", s8.style.top = "0", s8.style.left = "0", s8.style.width = "100%", s8.style.height = "100%", te.style.position = "absolute", te.style.top = "0", te.style.left = "0", te.style.width = "100%", te.style
		.display = "flex", te.style.backgroundColor = bA.mj, tf.style.position = "absolute", tf.style.left = "0", tf.style.width = "100%", b9.ph.sE(tf), tg.style.height = tg.style.maxHeight = "100%", rl.style.position = "absolute", rl.style.width =
		"100%", rl.style.backgroundColor = bA.mj,
		function() {
			for (var aB = 0; aB < tc.length; aB++) tc[aB].button.style.height = "100%", tc[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < tc.length; aB++) tg.appendChild(tc[aB].button);
	te.appendChild(function() {
		var tl = document.createElement("h1");
		return tl.textContent = title, tl.style.margin = "auto", tl.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", tl.style.webkitTextStroke = "0.02em brown", tl.style.fontFamily = "Arial Black, Trebuchet MS", tl
	}()), tf.appendChild(tg), !1 !== td && (s8.appendChild(rl), s8.appendChild(te), s8.appendChild(tf))
}

function qf(ts, tt, tu, tv) {
	var self;
	this.qg = document.createElement("span"), (self = this).qg.textContent = ts, self.qg.style.color = bA.mn, self.qg.style.position = "absolute", self.qg.style.font = "inherit", tv ? self.qg.style.bottom = "0.06em" : self.qg.style.top = "0.12em",
		tu ? self.qg.style.left = "0.2em" : self.qg.style.right = "0.2em", self.qg.style.fontSize = "0.6em", self.qg.style.pointerEvents = "none", self.qg.style.whiteSpace = "pre", tt.style.position = "relative", tt.style.overflow = "hidden", tt
		.appendChild(self.qg)
}

function sG(ts, tt, tw, tx, ty) {
	var self;
	this.qg = document.createElement("span"), this.resize = function() {
			this.qg.style.fontSize = ((tx - tw) * tt.offsetHeight).toFixed(1) + "px"
		}, (self = this).qg.textContent = ts, self.qg.style.color = bA.mn, self.qg.style.font = "inherit", self.qg.style.margin = "0.1em 0.6em", self.qg.style.pointerEvents = "none", ty && (self.qg.style.fontWeight = "bold"), self.qg.style
		.whiteSpace = "nowrap", self.qg.style.display = "block", tt.appendChild(self.qg)
}

function tz(u0, u1, u2, u3) {
	var u4 = document.createElement("textarea"),
		u5 = (this.e = u4, !0);

	function uB() {
		u4.select(), document.execCommand("copy")
	}
	this.resize = function() {
			u1 && b9.ph.ps(u4, 5)
		}, this.u6 = function(u7) {
			u4.value = u7
		}, this.u8 = function() {
			return u4.value
		}, this.u9 = function() {
			u4.select()
		}, this.clear = function() {
			u4.value = ""
		}, this.uA = function() {
			u5 && navigator.clipboard ? (u4.select(), navigator.clipboard.writeText(u4.value).catch(function() {
				u5 = !1, uB()
			})) : uB()
		}, u4.setAttribute("id", "textArea" + t.y.rf++), u4.setAttribute("autocomplete", "off"), u0 && u4.setAttribute("placeholder", u0), u4.style.top = "0", u4.style.left = "0", u4.style.width = "100%", u4.style.height = "100%", u4.style
		.userSelect = "none", u4.style.outline = "none", u4.style.resize = "none", u4.style.border = "none", u4.style.color = bA.mn, u4.style.backgroundColor = bA.mg, u3 ? (u4.style.fontSize = "1em", u4.rows = 6, u4.style.padding = "0.25em") : (u4
			.style.padding = "0.45em", u4.style.fontSize = "1.2em"), u2 && u4.addEventListener("input", function(e) {
			u2(e)
		}), u4.addEventListener("focus", function() {
			h.rg++
		}), u4.addEventListener("blur", function() {
			h.rg--
		})
}

function dE() {
	this.pz = new uC, this.eE = new uD, this.rB = new uE, this.y = new uF, this.dX = function() {
		this.eE.dX(), (new uG).dX()
	}
}

function uD() {
	function uH(aB, type, uO, dp) {
		bi.eE.data.push({
			e2: aB,
			type: type || 0,
			value: uO || 0,
			uO: uO || 0,
			dp: dp || 0
		})
	}

	function uI(aB, type, uO, dp) {
		bi.eE.data.push({
			e2: aB,
			type: type,
			value: uO || "",
			uO: uO || "",
			dp: dp || 0
		})
	}

	function uJ(mV) {
		for (var aB = bi.eE.data.length; aB < mV; aB++) bi.eE.data.push(null)
	}
	this.data = [], this.dX = function() {
		uH(0, 1, 0, 5), uH(1, 1, 1), uH(2, 0), uI(3, 2), uH(4, 1), uI(5, 2, "Trebuchet MS", 1), uH(6, 0), uH(7, 0, 0), uH(8, 0), uH(9, 1, 1), uH(10, 1), uH(11, 1, 1), uI(12, 2, navigator.language), uH(13), uH(14), uJ(100), uI(100, 2), uI(101, 2),
			uI(102, 2), uI(103, 2), uI(104, 2), uI(105, 2), uI(106, 2), uH(107), uH(108), uH(109), uI(110, 2), uH(111), uH(112), uH(113), uI(114, 2), uH(115), uI(116, 2), uH(117, 1), uI(118, 2, "", 2), uH(119, 1, 0, 1), uI(120, 2), uH(121, 1, ~~(
				262144 * Math.random())), uI(122, 2, "Player " + Math.floor(1e3 * Math.random())), uH(123), uI(124), uH(125, 1), uI(126, 2), uH(127, 0, 1), uH(128), uH(129), uH(130), uH(131), uH(132), uI(133, 2), uH(134, 0, 5), uI(135, 2), uI(
				136, 2), uH(137), uH(138), uH(139), uH(140), uH(141), uH(142), uH(143), uH(144), uI(145, 2), uH(146), uH(147), uI(148, 2), uH(149), uH(150, 0, 1), uI(151, 2), uH(152, 0, 5), uH(153, 1), uH(154, 1), uI(155, 2), uI(156, 2), uH(157),
			uH(158), uH(159), uH(160), uJ(180), uH(180, 0), uH(181, 0)
	}, this.rC = function(e2, value) {
		this.data[e2].value = value
	}, this.uK = function(e2, value) {
		this.rC(e2, value), bi.pz.save(e2, String(value)), bi.pz.save(e2, String(this.data[e2].dp), !0)
	}, this.uL = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bi.pz.save(aB, String(this.data[aB].value)), bi.pz.save(aB, String(this.data[aB].dp), !0))
	}, this.uM = function(e2) {
		return Number(this.data[e2].value)
	}, this.uN = function(e2) {
		return String(this.data[e2].value)
	}
}

function uC() {
	this.uP = function(e2, dp) {
		return Number(this.uQ(e2, dp))
	}, this.uQ = function(e2, dp) {
		var f9 = null;
		return 0 === a0.id ? a0.uR && (f9 = a0.uR.getItem((dp ? "v" : "d") + e2)) : 1 === a0.id ? f9 = a0.uS.loadString((dp ? 1e3 : 2e3) + e2) : 2 === a0.id && (f9 = a0.uT[(dp ? "v" : "d") + e2]), f9 && 0 !== f9.length ? f9 : null
	}, this.uU = function(eh, uV) {
		var g = [],
			uW = uV ? "e" : "l";
		if (0 === a0.id) {
			if (a0.uR)
				for (aB = 0; aB < eh; aB++) g.push(a0.uR.getItem(uW + aB))
		} else if (1 === a0.id)
			for (var uX = uV ? 5e3 : 3e3, aB = 0; aB < eh; aB++) g.push(a0.uS.loadString(uX + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < eh; aB++) g.push(a0.uT[uW + aB]);
		return g
	}, this.save = function(e2, value, dp) {
		var uY = (dp ? "v" : "d") + e2;
		if (0 === a0.id) {
			if (a0.uR && bi.eE.data[140].value) try {
				a0.uR.setItem(uY, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.uS.saveString((dp ? 1e3 : 2e3) + e2, value) : 2 === a0.id && (a0.uT[uY] = value, a0.uZ.postMessage(uY + " " + value))
	}, this.ua = function(g, uV) {
		var eh = g.length,
			uW = uV ? "e" : "l";
		if (0 === a0.id) {
			if (a0.uR && bi.eE.data[140].value) try {
				for (aB = 0; aB < eh; aB++) a0.uR.setItem(uW + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var uX = uV ? 5e3 : 3e3, aB = 0; aB < eh; aB++) a0.uS.saveString(uX + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < eh; aB++) a0.uT[uW + aB] = g[aB], a0.uZ.postMessage(uW + aB + " " + g[aB])
	}
}

function uG() {
	this.dX = function() {
		! function() {
			var data = bi.eE.data;
			0 === data[2].dp && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].uO = 1);
			0 === data[100].dp && (data[100].value = data[100].uO = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, f9, data = bi.eE.data,
			eh = data.length;
		for (aB = 0; aB < eh; aB++) data[aB] && data[aB].dp === bi.pz.uP(aB, !0) && (f9 = bi.pz.uQ(aB), data[aB].value = null === f9 ? data[aB].uO : 2 === data[aB].type ? f9 : Number(f9))
	}
}

function uF() {
	function ug(g) {
		if (0 === g.length) bi.rB.rC(116, "");
		else {
			for (var uj = g[0], aB = 1; aB < g.length; aB++) uj += ";" + g[aB];
			bi.rB.rC(116, uj)
		}
	}
	this.ud = function() {
		bi.eE.data[110].value.length && (bi.eE.data[106].value = bi.eE.data[110], bi.rB.rC(110, ""), this.ue())
	}, this.ue = function() {
		var g = bi.eE.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bi.eE.data[106].value), g.unshift(bi.eE.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var uf = [], aB = 0; aB < g.length; aB += 2) uf.push(g[aB]);
		ug(g), bi.eE.data[117].value = 0, bi.eE.data[117].ta = uf
	}, this.uh = function(e2) {
		bi.eE.data[117].ta.splice(e2, 1), bi.eE.data[117].value = Math.min(e2, bi.eE.data[117].ta.length - 1);
		var g = bi.eE.data[116].value.split(";");
		g.splice(2 * e2, 2), ug(g)
	}, this.ui = function(e2) {
		var g = bi.eE.data[116].value.split(";");
		return {
			rw: g[2 * e2],
			password: g[2 * e2 + 1]
		}
	}, this.uk = function() {
		var f9 = bK.pF(bi.eE.data[121].value, -1, 262143);
		return f9 = -1 === f9 ? ~~(262144 * Math.random()) : f9
	}
}

function uE() {
	this.rC = function(e2, value) {
		bi.eE.data[e2].value !== value && (bi.eE.uK(e2, value), 0 === e2 ? (t.x(), b6.dX(), t.u(2)) : 1 === e2 ? h.di(1) : 2 === e2 ? h.di(0) : 5 === e2 && (b9.ph.ul(), h.di(0)))
	}, this.um = function() {
		for (var data = bi.eE.data, aB = 0; aB < 100; aB++) data[aB] && bi.eE.uK(aB, data[aB].uO);
		b9.ph.ul(), h.di(1), b6.dX()
	}, this.un = function() {
		for (var data = bi.eE.data, aB = 0; aB < data.length; aB++) data[aB] && bi.eE.rC(aB, data[aB].uO)
	}, this.uo = function() {
		for (var f1 = bi.eE, aB = 128; aB < 135; aB++) f1.uK(aB, f1.data[aB].uO)
	}, this.up = function(data) {
		bi.rB.rC(109, data.rx), bi.rB.rC(107, data.uq), bi.rB.rC(108, data.ur), bi.rB.rC(112, data.us), bi.rB.rC(111, data.ut), bi.rB.rC(113, data.uu), bi.rB.rC(135, data.uv), bi.rB.rC(136, data.uw), bi.rB.rC(137, data.ux), bi.rB.rC(138, data
			.uy), bi.rB.rC(139, data.uz), bi.rB.rC(141, data.v0), bi.rB.rC(142, data.v1), bi.rB.rC(143, data.v2), bi.rB.rC(144, data.v3)
	}
}

function c1() {
	this.s1 = new v4, this.v5 = new v6, this.v7 = new v8, this.dX = function() {
		this.s1.dX()
	}
}

function v6() {
	this.v9 = function(size) {
		for (var vA = bG, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vA.oj(16)));
		return g.join("")
	}, this.vB = function(pO) {
		return 20 < (pO = pO.trim()).length ? pO.substring(0, 20) : pO
	}
}

function v4() {
	var vC = new Uint8Array(78);
	this.dX = function() {
		var aB;
		for (vC[50] = 37, aB = 0; aB < 10; aB++) vC[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) vC[aB + 20] = aB + 11, vC[aB + 52] = aB + 38
	}, this.vD = function(pO) {
		return pO.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.vE = function(pO, size) {
		if ((pO = this.vD(pO)).length > size) return pO.substring(0, size);
		for (; pO.length < size;) pO = "-" + pO;
		return pO
	}, this.vF = function(pO) {
		for (var vG = vC, eh = pO.length, g = new Uint8Array(eh), aB = 0; aB < eh; aB++) g[aB] = vG[pO.charCodeAt(aB) - 45];
		return g
	}, this.vH = function(vI) {
		bC.a7(6 * vI.length), this.vJ(vI), bG.dX(bC.aC)
	}, this.vJ = function(vI) {
		for (var eh = vI.length, i = bC, aB = 0; aB < eh; aB++) i.a8(6, vI[aB])
	}, this.vK = function(pO) {
		this.vJ(this.vF(pO))
	}, this.vL = function(pO, size) {
		this.vJ(this.vF(this.vE(pO, size)))
	}, this.vM = function(pO, size) {
		for (var g = this.vF(this.vE(pO, size)), f9 = 0, mP = 1, aB = g.length - 1; 0 <= aB; aB--) f9 += mP * g[aB], mP *= 64;
		return f9
	}
}

function vN() {
	var i, j, vO;

	function vo(h6, ek, vm, vT, vh) {
		ek = vn(h6, ek + 1 + 2 * vT & 3);
		! function(h6, vp) {
			return 1 < Math.abs(h6 % i - vp % i) || 1 < Math.abs(vs(h6) - vs(vp))
		}(h6, ek) && 0 === vh[ek << 2] && (vh[ek << 2] = vm)
	}

	function vs(gE) {
		return Math.floor((gE + .5) / i) % j
	}

	function vn(gE, ek) {
		return gE + vO[ek]
	}
	this.vP = function(pO) {
		var aB, vQ, eh, vR, vA = bG;
		for (bF.s1.vH(bF.s1.vF(pO)), bR.vU.vV[bR.eN].i = bR.es = i = vA.oj(12), bR.vU.vV[bR.eN].j = bR.et = j = vA.oj(12), vO = [-i, -1, i, 1], bR.ve = document.createElement("canvas"), bR.ve.width = bR.es, bR.ve.height = bR.et, bR.va = bR.ve
			.getContext("2d", {
				alpha: !1
			}), bR.vb = bR.vf = null, bR.vb = bR.va.getImageData(0, 0, bR.es, bR.et), bR.vf = bR.vb.data, b9.pq.vg(bR.vf), eh = vA.oj(12), vQ = vA.oj(5), vR = vX(i * j - 1), aB = 0; aB < eh; aB++) ! function(ke, gE, vS, vT) {
			var aB, ek, vA = bG,
				vh = bR.vf,
				vi = gE,
				vj = gE,
				vk = 0,
				vl = 1 + vS,
				vm = 2 - vS;
			for (vh[gE << 2] = vl, aB = 0; aB < ke; aB++) ek = vA.oj(2), gE = vn(gE, ek), vh[gE << 2] === vl ? vk % 2 == 1 && vo(vj, vk + 2 * vT + 3, vm, vT, vh) : vh[gE << 2] = vl, vo(gE, ek, vm, vT, vh), vo(vj, ek, vm, vT, vh), vj = gE,
				vk = ek;
			vn(gE, 0) === vi ? (vo(gE, 0, vm, vT, vh), vo(vi, 0, vm, vT, vh)) : vn(gE, 1) === vi && (vo(gE, 0, vm, vT, vh), vo(vi, 2, vm, vT, vh));
			0 === ke && (vo(vi, 0, vm, vT, vh), vo(vi, 2, vm, vT, vh))
		}(vA.oj(vQ), vA.oj(vR), 1 === vA.oj(1), 1 === vA.oj(1));
		var eo, eq, hU, vt, vu, vv, vh = bR.vf,
			vw = !0,
			vx = bR.vU.vV[bR.eN].vx,
			vy = bR.vU.vV[bR.eN].vy;
		for (eq = 0; eq < j; eq++)
			for (vt = !0, vu = vw, eo = vv = 0; eo < i; eo++) hU = 4 * eq * i + 4 * eo, vv <= eo && 0 < vh[hU] && (vu = 2 === vh[hU], vt) && (vt = !1, vu !== vw) ? (vw = vu, vv = eo + 1, eo = -1) : (vu ? (vh[hU] = vy[0], vh[1 + hU] = vy[1], vh[
				2 + hU] = vy[2]) : (vh[hU] = vx[0], vh[1 + hU] = vx[1], vh[2 + hU] = vx[2]), vh[3 + hU] = 255);
		bR.va.putImageData(bR.vb, 0, 0), bR.vc = !0, bR.vd.dX(), be.df = !0
	}
}

function v8() {
	this.vP = function(vz) {
		for (var vA = bG, size = vA.oj(vz), w0 = 7 + 9 * vA.oj(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vA.oj(w0)));
		return g.join("")
	}
}

function c6() {
	var rT, rU, w1, w2, w3, w4, w5, w6, w7, w8;

	function wA() {
		var wD = aD.wD;
		for (w7 = wD; w7 < aD.ee; w7++) w9();
		for (w7 = aD.h2 ? aD.jw : 0; w7 < wD; w7++) {
			if (!wE()) {
				for (var f1 = aD.wI = w7; f1 < wD; f1++) w7 = f1, w9();
				return
			}
			wH(w4 + rT * w3 + bK.dn(w3, 2), w5 + rU * w3 + bK.dn(w3, 2))
		}
	}

	function wk(player) {
		for (var iV = ag.iV, iX = ag.iX, iW = ag.iW, iY = ag.iY, eq = iX[player]; eq <= iY[player]; eq++)
			for (var eo = iV[player]; eo <= iW[player]; eo++) {
				var eL = ac.wl(eo, eq);
				ac.gG(eL) && (ac.j9(eL) ? ac.gB(eL, player) : ac.wm(eL, player))
			}
	}

	function wj(g, sI, sJ) {
		var dm = g[sI];
		g[sI] = g[sJ], g[sJ] = dm
	}

	function wE() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (rT = bK.dn(w1 * ax.random(), ax.value(100)), rU = bK.dn(w2 * ax.random(), ax.value(100)), wr()) return 1;
			return
		}() || function() {
			var i2, i5, f0, wG, f1, wF;
			for (i2 = bK.dn(w1 * ax.random(), ax.value(100)), i5 = bK.dn(w2 * ax.random(), ax.value(100)), f0 = 40; 1 <= f0; f0--)
				for (wG = w2 - f0; 0 <= wG; wG -= 40)
					for (rU = (wG + i5) % w2, f1 = 40; 1 <= f1; f1--)
						for (wF = w1 - f1; 0 <= wF; wF -= 40)
							if (rT = (wF + i2) % w1, wr()) return 1;
			return
		}()
	}

	function wr() {
		for (var gE, wt, gap = bK.dn(w3 - w6, 2), wu = w5 + rU * w3 + gap, wv = w4 + rT * w3 + gap, ws = wu + w6 - 1; wu <= ws; ws--)
			for (wt = wv + w6 - 1; wv <= wt; wt--)
				if (gE = ac.wl(wt, ws), !ac.ec(gE) || ac.j9(gE)) return;
		return 1
	}

	function wH(wF, wG) {
		w9(), ww(wF - 2, wG - 2)
	}

	function w9() {
		ag.lm[w7] = 0, ag.gU[w7] = ag.wh[w7] = 0, ag.g8[w7] = [], ag.gM[w7] = [], ag.gN[w7] = [], ag.f7[w7] = [], ag.iV[w7] = ag.iX[w7] = ag.iW[w7] = ag.iY[w7] = 0
	}

	function ww(wF, wG) {
		var gE, aB, wx, wy;
		for (ag.lm[w7] = 1, ag.iV[w7] = wF + 10, ag.iX[w7] = wG + 10, ag.iY[w7] = ag.iW[w7] = 0, wx = wF; wx < wF + 4; wx++)
			for (wy = wG; wy < wG + 4; wy++)(wF < wx && wx < wF + 3 || wG < wy && wy < wG + 3) && (gE = ac.wl(wx, wy), ac.ec(gE)) && (ag.iV[w7] = Math.min(wx, ag.iV[w7]), ag.iW[w7] = Math.max(wx, ag.iW[w7]), ag.iX[w7] = Math.min(wy, ag.iX[w7]), ag
				.iY[w7] = Math.max(wy, ag.iY[w7]), w8[ag.gU[w7]] = gE, ag.gU[w7]++, ac.wm(gE, w7));
		for (ag.wh[w7] = ag.gU[w7], aB = ag.gU[w7] - 1; 0 <= aB; aB--) ac.wz(w8[aB], w7) ? (ac.gB(w8[aB], w7), ag.gM[w7].push(w8[aB])) : ac.x0(w8[aB]) ? (ac.gB(w8[aB], w7), ag.gN[w7].push(w8[aB])) : ac.x1(w8[aB]) && (ac.gB(w8[aB], w7), ag.f7[w7]
			.push(w8[aB]))
	}

	function wq(wF, wG) {
		for (var gE, wt, ws = wG; wG - 6 < ws; ws--)
			for (wt = wF; wF - 6 < wt; wt--)
				if (gE = ac.wl(wt, ws), ac.j9(gE)) return;
		return 1
	}
	this.dX = function() {
		if (w8 = new Array(12), w6 = 6, w3 = 10, w1 = bK.dn(bR.es, w3), w2 = bK.dn(bR.et, w3), w4 = bK.dn(bR.es - w3 * w1, 2), w5 = bK.dn(bR.et - w3 * w2, 2), aD.h2)
			for (var aB = 0; aB < aD.jw; aB++) w7 = aB, w9(), ag.lm[w7] = 1;
		(0 === aD.data.spawningType ? wA : 1 === aD.data.spawningType ? (wA(), function() {
			var wJ = aD.wK;
			aD.wL || wJ++;
			if (!(wJ < 3)) {
				for (var data = aD.data, jD = (aD.h2 ? aD.jw : 0) + data.teamPlayerCount[0], mV = aD.wI, wM = new Uint32Array(wJ), wN = new Uint32Array(wJ), wO = new Uint16Array(wJ), wP = new Uint16Array(wJ), ef = bf.ef, iV = ag.iV, iX =
						ag.iX, iW = ag.iW, iY = ag.iY, fL = bN.fL, fM = bN.fM, aB = jD; aB < mV; aB++) fL[aB] = iV[aB] + iW[aB] >> 1, fM[aB] = iX[aB] + iY[aB] >> 1;
				for (aB = jD; aB < mV; aB++) {
					var id = ef[aB];
					wM[id] += fL[aB], wN[id] += fM[aB]
				}
				var kI = bf.kI;
				for (aB = 1; aB < wJ; aB++) {
					var g9 = Math.max(data.teamPlayerCount[kI[aB]], 1);
					wO[aB] = bK.dn(wM[aB], g9), wP[aB] = bK.dn(wN[aB], g9)
				}
				var wQ = bf.wQ,
					wR = bf.wR,
					wS = bf.wS,
					fK = bN.fK;
				for (aB = 0; aB < 512; aB++) fK[aB] = aB;
				for (var e1 = 0; e1 < 2 + (4 <= wJ); e1++)
					for (aB = jD; aB < mV; aB++) {
						for (var h6 = aB, wT = fK[h6], wU = 1, ex = bK.wV(fL[wT] - wO[1], fM[wT] - wP[1]), f0 = 2; f0 < wJ; f0++) {
							var wW = bK.wV(fL[wT] - wO[f0], fM[wT] - wP[f0]);
							wW < ex && (ex = wW, wU = f0)
						}
						var wX = ef[h6];
						if (wU !== wX) {
							if (2 === e1 && 4 <= wJ) {
								var wY = Math.max((wU + 1) % wJ, 1),
									wZ = bK.wV(fL[wT] - wO[wY], fM[wT] - wP[wY]);
								for (f0 = 1; f0 < wJ; f0++) wW = bK.wV(fL[wT] - wO[f0], fM[wT] - wP[f0]), ex < wW && wW < wZ && (wZ = wW, wY = f0);
								wY !== wX && bK.wV(wO[wX] - wO[wY], wP[wX] - wP[wY]) < bK.wV(wO[wX] - wO[wU], wP[wX] - wP[wU]) && (wU = wY)
							}
							var wa = kI[wU],
								wb = wR[wa] + (aD.h2 ? 0 : wS[wa]),
								vp = wQ[wb],
								wc = fK[vp],
								wd = wR[wa + 1];
							ex = bK.wV(fL[wc] - wO[wX], fM[wc] - wP[wX]);
							for (var f2 = wb + 1; f2 < wd; f2++) {
								var we = wQ[f2],
									wf = fK[we];
								(wW = bK.wV(fL[wf] - wO[wX], fM[wf] - wP[wX])) < ex && (ex = wW, vp = we)
							}
							vp < jD || mV <= vp || (wc = fK[vp], wM[wX] += fL[wc] - fL[wT], wN[wX] += fM[wc] - fM[wT], wM[wU] += fL[wT] - fL[wc], wN[wU] += fM[wT] - fM[wc], g9 = data.teamPlayerCount[kI[wX]], wO[wX] = bK.dn(wM[wX], g9),
								wP[wX] = bK.dn(wN[wX], g9), g9 = data.teamPlayerCount[wa], wO[wU] = bK.dn(wM[wU], g9), wP[wU] = bK.dn(wN[wU], g9), fK[h6] = wc, fK[vp] = wT)
						}
					}! function() {
						for (var fK = bN.fK, iV = ag.iV, iX = ag.iX, iW = ag.iW, iY = ag.iY, gU = ag.gU, wh = ag.wh, gM = ag.gM, gN = ag.gN, f7 = ag.f7, aB = 0; aB < 512; aB++) {
							var wi = fK[aB];
							if (wi !== aB) {
								wj(iV, aB, wi), wj(iX, aB, wi), wj(iW, aB, wi), wj(iY, aB, wi), wj(gU, aB, wi), wj(wh, aB, wi), wj(gM, aB, wi), wj(gN, aB, wi), wj(f7, aB, wi), wk(aB), wk(wi), fK[aB] = aB;
								for (var j = wi, gF = fK[j]; gF !== aB;) gF = fK[j = gF];
								fK[j] = wi
							}
						}
					}()
			}
		}) : function() {
			var wD = aD.wD;
			for (w7 = wD; w7 < aD.ee; w7++) w9();
			for (w7 = aD.h2 ? aD.jw : 0; w7 < wD; w7++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							wF = spawningData[2 * w7] + 1,
							spawningData = spawningData[2 * w7 + 1] + 1;
						if (3 < wF && wF < bR.es - 5 && 3 < spawningData && spawningData < bR.et - 5 && ac.ec(ac.wl(wF, spawningData)) && wq(wF + 3, spawningData + 3)) return wH(wF + 1, spawningData + 1), 1;
						return
					}()) {
					if (!wE()) {
						for (var f1 = aD.wI = w7; f1 < wD; f1++) w7 = f1, w9();
						return
					}
					var wF = w4 + rT * w3 + bK.dn(w3, 2),
						wG = w5 + rU * w3 + bK.dn(w3, 2);
					wH(wF, wG)
				}
		})(), bc.li[7] = ag.gU[aD.eR]
	}, this.x2 = function(j7, x3, x4) {
		var aB, wF, wG, gE, rT, rU;
		for (w7 = j7, aB = 0; aB < 20; aB++)
			for (wF = x3 + aB; x3 - aB <= wF; wF--)
				for (wG = x4 + aB; x4 - aB <= wG; wG--)
					if ((wF === x3 + aB || wF === x3 - aB || wG === x4 + aB || wG === x4 - aB) && 3 < wF && wF < bR.es - 5 && 3 < wG && wG < bR.et - 5 && ac.ec(ac.wl(wF, wG)) && wq(wF + 3, wG + 3)) {
						if (0 < ag.gU[w7]) {
							for (rU = rT = gE = void 0, rT = ag.iW[w7]; rT >= ag.iV[w7]; rT--)
								for (rU = ag.iY[w7]; rU >= ag.iX[w7]; rU--) gE = 4 * (rU * bR.es + rT), ac.x6(w7, gE) && (ac.x7(gE), ag.gU[w7]--);
							w9()
						}
						return ww(wF - 1, wG - 1), !0
					} return !1
	}, this.x8 = function(j7) {
		w7 = j7, wE() ? wH(w4 + rT * w3 + bK.dn(w3, 2), w5 + rU * w3 + bK.dn(w3, 2)) : w9()
	}
}

function x9() {
	ar.xA(), tr.setTransform(iI, 0, 0, iI, 0, 0), tr.imageSmoothingEnabled = iI < 3, tr.drawImage(bR.ve, aS.xB(), aS.xC()), bO.xD.tq(), tr.drawImage(xE, aS.xB(), aS.xC()), ar.tq(), bM.tq(), af.tq(), (aD.mG ? (bg.tq(), bB) : (aN.tq(), aV.tq(), aR
	.tq(), bB.tq(), av.tq(), aW.tq(), aS.tq(), aQ.tq(), bg.tq(), aU.tq(), aP.tq(), aM.tq(), aL.tq(), aX.tq(), bd.tq(), au)).tq(), t.tq()
}

function xF(xG, i, j) {
	xG.clearRect(0, 0, i, j), xG.fillStyle = bA.mk, xG.fillRect(0, 0, i, j)
}

function xH(xG, i, j, xI) {
	xG.fillStyle = bA.mn, xG.fillRect(0, 0, i, xI), xG.fillRect(0, 0, xI, j), xG.fillRect(i - xI, 0, xI, j), xG.fillRect(0, j - xI, i, xI)
}

function xJ(xG, eo, eq, hY, xI, gE, xK) {
	xG.fillStyle = bA.mn;
	var gE = Math.floor(hY * gE),
		s6 = (gE += (gE - xI) % 2, Math.floor((gE - xI) / 2)),
		hY = Math.floor((hY - gE) / 2);
	xG.fillRect(eo + hY, eq + hY + s6, gE, xI), xK && xG.fillRect(eo + hY + s6, eq + hY, xI, gE)
}

function xM() {
	this.dX = function() {
		8 === aD.kD && aN.xN()
	}, this.xO = function(xP) {
		var elo = aD.data.elo,
			hq = (elo[xP] - elo[1 - xP]) / 10,
			hq = 8 / (1 + Math.pow(2, hq / 32)),
			hq = Math.floor(10 * hq + .5),
			xR = elo[xP] + (1 + aD.xS) * hq + 1,
			xT = this.xU(xR),
			elo = this.xU(elo[1 - xP] - hq);
		0 === xP ? aN.xW(xT, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.xW(elo, xT, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ag.xX[xP] < 100 || (hq = ((1 + aD.xS) * (xR >> 1) / 100).toFixed(2), xP === aD.eR ? aN.xZ(640,
			L(24, [hq]), 40, 0, bA.mn, bA.mk, -1, !1) : aN.xZ(640, L(25, [ag.xa[xP], hq]), 40, 0, bA.mn, bA.mk, -1, !1))
	}, this.xU = function(elo) {
		return 16e3 === (elo = bK.pF(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cb() {
	this.qz = new xb, this.vh = new xc
}

function xc() {
	this.hO = !1;
	this.xg = [], this.xh = 100;
	var mD, mE, gap, hY, xd, xf, xi = 0,
		xj = new Array(9),
		xk = [],
		xl = [],
		xm = 0,
		xn = 0,
		xo = 0,
		xp = 0;

	function y1() {
		xj.sort(function(f0, f1) {
			return f1.k1 - f0.k1
		});
		for (var pO = "" + xj[0].oK, aB = 1; aB < 9; aB++) pO += "," + xj[aB].oK;
		for (aB = 0; aB < 9; aB++) pO += "," + xj[aB].k1;
		bi.eE.uK(120, pO)
	}
	this.dX = function() {
		for (var xq = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < xq.length; aB++) {
			var color = 6 === xq[aB] ? bA.nD : bA.ml;
			this.xg.push(b9.canvas.xr(ab.get(3), xq[aB], color))
		}
		for (aB = 0; aB < aj.qz.xs; aB++) xl.push(aj.qz.xt - aj.qz.xs + aB);
		for (aB = 0; aB < aj.qz.xu; aB++) xl.push(aj.qz.xv + aB);
		var xw = aj.qz.xx(bJ.xw);
		for (aB = 0; aB < xw.length; aB++) xl.push(xw[aB]);
		! function() {
			var aB, g = bi.eE.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) xj[aB] = {
					oK: 1015 + aB,
					k1: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var f9 = parseInt(g[aB]),
						f2 = (f9 = 0 <= f9 && f9 < aj.qz.xt ? f9 : 0, parseInt(g[aB + 9]));
					f2 = 0 <= f2 && f2 < 1e3 ? f2 : 0, xj[aB] = {
						oK: f9,
						k1: f2
					}
				}
		}()
	}, this.show = function(kz, l0, y2) {
		var aB;
		if (xm = kz, xn = l0, xi = y2 || 0, this.hO = !0, xk = [], 0 === xi)
			for (aB = 0; aB < 9; aB++) xk.push(xj[aB].oK);
		else {
			var f1 = 49 * xi,
				y2 = f1 - 49;
			for (y2 >= xl.length && (xi = 1, y2 = 0, f1 = 49), aB = y2 = (f1 = Math.min(f1, xl.length)) - 49; aB < f1; aB++) xk.push(xl[aB])
		}
		xk.push(1024);
		y2 = xk.length, hY = Math.floor((a0.a1.r7() ? .075 : .0468) * h.pj), gap = Math.floor(hY / 3), (xo = 10 * (xd = hY + gap)) > h.i && (xo = h.i, gap = (xd = xo / 10) - (hY = 3 * xd / 4)), xf = bK.dn(y2, 10) + !!(y2 % 10), (xp = xf * xd) > h
			.j && (xp = h.j, gap = (xd = xp / xf) - (hY = 3 * xd / 4)), y2 = .5 * gap;
		mD = Math.min(Math.max(kz - .5 * xo + y2, y2), h.i - xo + y2), mE = Math.min(Math.max(l0 - .5 * xp + y2, y2), h.j - xp + y2)
	}, this.gu = function(kz, l0, player) {
		if (!this.hO) return !1;
		if (this.y4(kz, l0)) {
			kz = bK.pF(bK.dn(kz - mD + .5 * gap, xd), 0, 9);
			if ((kz += 10 * bK.pF(bK.dn(l0 - mE + .5 * gap, xd), 0, 9)) >= xk.length) return aL.r0(), !0;
			l0 = xk[kz];
			if (1024 === l0) return this.show(xm, xn, xi + 1), !0;
			! function(oK) {
				for (var aB = 0; aB < 9; aB++) xj[aB].k1 = Math.floor(.99 * xj[aB].k1);
				for (aB = 0; aB < 9; aB++)
					if (oK === xj[aB].oK) return xj[aB].k1 = Math.min(xj[aB].k1 + 30, 999), y1();
				xj.splice(5, 0, {
					oK: oK,
					k1: Math.max(xj[4].k1, 30)
				}), xj.pop(), y1()
			}(l0), player === aD.eR ? b7.h3.oJ(l0) : b7.g2.oX(l0, player)
		}
		return aL.r0(), !0
	}, this.y4 = function(kz, l0) {
		return !(kz < mD - .5 * gap || l0 < mE - .5 * gap || mD + xo - .5 * gap <= kz || mE + xp - .5 * gap <= l0)
	}, this.tq = function() {
		tr.fillStyle = bA.mk, tr.fillRect(mD - .5 * gap, mE - .5 * gap, xo, xp);
		for (var hU = .5 * bb.y5, eh = (tr.lineWidth = bb.y5, tr.strokeStyle = tr.fillStyle = bA.mn, tr.strokeRect(mD - .5 * gap + hU, mE - .5 * gap + hU, xo - 2 * hU, xp - 2 * hU), tr.imageSmoothingEnabled = !0, xk.length), aB = 0; aB <
			eh; aB++) this.y6(xk[aB], tr, mD + aB % 10 * xd, mE + bK.dn(aB, 10) * xd, hY);
		tr.imageSmoothingEnabled = !1
	}, this.y6 = function(oK, he, eo, eq, hY) {
		var eL;
		oK >= 1024 - aj.qz.xs ? (eL = hY / this.xh, he.setTransform(eL, 0, 0, eL, eo, eq), he.drawImage(this.xg[oK - 1024 + aj.qz.xs], 0, 0), he.setTransform(1, 0, 0, 1, 0, 0)) : (b9.ph.textAlign(he, 1), b9.ph.textBaseline(he, 1), he.font = b9.ph
			.rY(0, .89 * hY), he.fillText(aj.qz.y7(oK), eo + .5 * hY, eq + (.35 - b9.ph.y8 + .56) * hY))
	}
}

function xb() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xs = 13, this.xu = this.emojis.length, this.xv = 676, this.xt = 1024, this.y9 = this.emojis.indexOf("💀"), this.yA = this.y9 + 1, this.yB = this.emojis.indexOf("🥇"), this.yC = this.emojis.indexOf("😊"), this.y7 = function(f9) {
		return f9 < this.xv ? String.fromCharCode(55356, 56806 + bK.dn(f9, 26), 55356, 56806 + f9 % 26) : this.emojis[Math.min(f9 - this.xv, this.xu - 1)]
	}, this.xx = function(pO) {
		for (var eh = pO.length - 2, g = [], aB = 0; aB < eh; aB++) {
			var hm = pO.charCodeAt(aB) - 56806,
				hn = pO.charCodeAt(aB + 2) - 56806;
			0 <= hm && hm < 26 && 0 <= hn && hn < 26 && (g.push(26 * hm + hn), aB += 3)
		}
		return g
	}, this.yD = function(f9) {
		return f9 < this.xv
	}, this.yE = function(f9) {
		return f9 >= 1024 - this.xs
	}, this.yF = function(f9) {
		return f9 >= this.xv && f9 < this.xv + this.yA
	}
}

function c0() {
	this.s1 = new yG, this.v5 = new yH, this.v7 = new yI, this.dX = function() {
		this.s1.dX()
	}
}

function yH() {
	this.vK = function(pO) {
		for (var eh = pO.length, i = bC, aB = 0; aB < eh; aB++) i.a8(16, pO.charCodeAt(aB))
	}
}

function yG() {
	var yJ = new Uint8Array(64);
	this.dX = function() {
		var aB;
		for (yJ[0] = 45, yJ[37] = 95, aB = 0; aB < 10; aB++) yJ[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) yJ[aB + 11] = 65 + aB, yJ[aB + 38] = 97 + aB
	}, this.s3 = function(yK) {
		for (var vA = bG, vI = new Uint8Array(yK), aB = 0; aB < yK; aB++) vI[aB] = vA.oj(6);
		return vI
	}, this.s2 = function(vI) {
		for (var eh = vI.length, yL = yJ, g = [], aB = 0; aB < eh; aB++) g.push(String.fromCharCode(yL[vI[aB]]));
		return g.join("")
	}, this.yM = function(value, yN) {
		for (var yL = yJ, g = [], aB = 0; aB < yN; aB++) g.push(String.fromCharCode(yL[value >> 6 * (yN - 1 - aB) & 63]));
		return g.join("")
	}
}

function c8() {
	var yO, yP, yQ;
	yO = [32, 65, 191, 913, 931], yP = [64, 127, 688, 930, 1155], yQ = new Array(yO.length + 1);
	for (var aB = 0; aB < yQ.length; aB++) {
		yQ[aB] = 0;
		for (var f0 = aB - 1; 0 <= f0; f0--) yQ[aB] += yP[f0] - yO[f0]
	}

	function yW(f2) {
		for (var aB = yO.length - 1; 0 <= aB; aB--)
			if (f2 >= yO[aB] && f2 < yP[aB]) return aB;
		return -1
	}
	this.vB = function(pO) {
		return 0 !== (pO = pO.trim()).indexOf("Bot ") && 0 !== pO.indexOf("[Bot] ") && function(pO, yT, yU) {
			var eh = (pO = pO.trim()).length;
			if (eh < yT || yU < eh) return !1;
			for (var f2, yV = 0, aB = 0; aB < eh; aB++)
				if (f2 = pO.charCodeAt(aB), yV += 65 <= f2 && f2 <= 90 || 1040 <= f2 && f2 <= 1071 ? 1 : 0, -1 === yW(f2)) return !1;
			if (3 < yV && yV > Math.floor(eh / 2)) return !1;
			return !0
		}(pO, 3, 20)
	}, this.yX = function(pO) {
		for (var eh = (pO = pO.trim()).length, g = [], aB = 0; aB < eh; aB++) {
			var f2, gE = yW(f2 = pO.charCodeAt(aB));
			g.push(yQ[gE] + f2 - yO[gE])
		}
		return g
	}, this.vP = function(g) {
		for (var f2, f1, pO = "", eh = g.length, aB = 0; aB < eh; aB++)
			for (f1 = 1; f1 < yQ.length; f1++)
				if (g[aB] < yQ[f1]) {
					f2 = yO[f1 - 1] + g[aB] - yQ[f1 - 1], pO += String.fromCharCode(f2);
					break
				} return pO
	}, this.yY = function(pO) {
		for (var g = this.yX(pO), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.yZ = function(pO) {
		for (var g = new Array(Math.floor(pO.length / 3)), aB = 0; aB < pO.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(pO.substring(aB, aB + 3));
		return this.vP(g)
	}, this.ya = function(pO) {
		for (var f9, g = [pO.length], aB = 0; aB < pO.length; aB++) g[aB] = pO.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < pO.length; aB++) aB === pO.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (f9 = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(f9 + (f9 < 26 ? 65 : 71)), aB++);
		return result
	}, this.yb = function(pO) {
		for (var f2, result = "", aB = 0; aB < pO.length; aB++) 48 <= (f2 = pO.charCodeAt(aB)) && f2 < 58 ? result += String.fromCharCode(f2) : 65 <= f2 && f2 < 75 ? result += "0" + (f2 - 65).toString() : 75 <= f2 && f2 < 91 ? result += (f2 - 65)
			.toString() : 97 <= f2 && f2 < 123 && (result += (f2 - 71).toString());
		return result
	}, this.yc = function(pO) {
		for (var eh = pO.length, g = [], aB = 0; aB < eh; aB++)(f2 = pO.charCodeAt(aB)) < 58 ? g.push(pO[aB]) : (f2 -= f2 < 91 ? 65 : 71, g.push(String(bK.dn(f2, 10))), g.push(String(f2 - 10 * bK.dn(f2, 10))));
		var eh = g.length - 2,
			f2 = 0,
			vI = [];
		for (aB = 0; aB < eh; aB += 3) vI[f2++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return vI
	}, this.yd = function() {
		for (var e1, ye = "", aB = 0; aB < 6; aB++) e1 = 48 + ax.random() % 36, e1 += 58 <= e1 ? 39 : 0, ye += String.fromCharCode(e1);
		return ye
	}
}

function yI() {
	this.yX = function(pO, vz, yf) {
		for (var yg = [], eh = pO.length, max = 0, aB = 0; aB < eh; aB++) {
			var f9 = pO.charCodeAt(aB);
			yg.push(f9), max = Math.max(max, f9)
		}
		var w0 = max < 128 ? 7 : 16;
		for (yf.a8(vz, eh), yf.a8(1, +(16 == w0)), aB = 0; aB < eh; aB++) yf.a8(w0, yg[aB])
	}
}

function d6() {
	this.yh = new yi, this.result = new yj, this.hA = new yk, this.yl = new ym, this.yn = new yo, this.yp = new yq, this.dX = function() {
		this.result.dX()
	}
}

function yk() {
	this.yr = function() {
		for (var eh = al.jx, ys = al.jy, yt = [], aB = 0; aB < eh; aB++) {
			var gE = ys[aB];
			b9.g2.yu(gE) && yt.push(gE)
		}
		return yt
	}, this.yv = function() {
		if (0 === bf.kI[aD.yw]) return this.yx();
		bg.l9(aD.yw);
		for (var yt = [], eh = bN.fC[0], fK = bN.fK, aB = 0; aB < eh; aB++) {
			var gE = fK[aB];
			b9.g2.yu(gE) && yt.push(gE)
		}
		return yt
	}, this.yx = function() {
		var gE = lB[0];
		return b9.g2.yu(gE) ? [gE] : []
	}, this.yy = function(yt) {
		for (var eh = yt.length, dm = 0, gU = ag.gU, aB = 0; aB < eh; aB++) dm += gU[yt[aB]];
		return dm
	}
}

function yi() {
	function z0() {
		if (2 === aD.z4) return 1;
		av.z5(), aD.z4 = 2, aD.z6 = aD.z7
	}

	function z2() {
		bQ.yn.z8(), aX.show(1 === aD.z9, !1, 2 === aD.z9), bQ.result.z8(), bQ.yp.ir(), bQ.yl.ir(), aN.zA(!0), aN.zB(247), aN.zB(956), aN.zB(957), aV.lY(!0), aW.lY(!0), av.lY(), bB.zC(), aD.gq && be.zD.zE(), be.df = !0, ba.zF(), a0.a1.setState(0)
	}
	this.yz = function() {
		z0() || (aD.z1 = 2, z2())
	}, this.z3 = function() {
		z0() || (aD.z1 = 1, z2())
	}
}

function ym() {
	this.ir = function() {
		var zN;
		2 === aD.z1 ? (aN.zG(0, 59), aH.mM(2700)) : aD.kD < 7 ? (zN = bf.kI[aD.yw], zN = bf.zP[zN], aQ.zQ(L(26, [zN]), 2, 1, 12), aN.xZ(0, L(27, [zN]), 40, 0, bA.mn, bA.mk, -1, !1), aH.mM(2700)) : 8 === aD.kD ? (aD.z9 ? aN.zG(aD.zL, 2) : aN.zG(
			1 - aD.eR, 3), aD.zM.xO(aD.zL), aH.m7(aD.zL, 2700, !1, 0)) : 9 === aD.kD ? (aN.zR(), aH.mM(2700)) : (aN.zS(aD.zL), aH.m7(aD.zL, 2700, !1, 0))
	}
}

function yq() {
	function zc() {
		var sM = Math.floor(ag.xX[aD.eR] / 50);
		return Math.min(sM, 400) / 100
	}

	function zU() {
		var sM = zc();
		0 !== sM && aN.xZ(440, L(28, [sM.toFixed(2)]), 40, 0, bA.n5, bA.mk, -1, !1)
	}
	this.ir = function() {
		var zV;
		0 === bQ.result.zT || 0 === bQ.result.yt.length || 8 === aD.kD ? b9.g2.gt(aD.eR) && zU() : (function(zV) {
			7 !== aD.kD && 10 !== aD.kD || 0 !== aD.z9 && aN.xZ(600, L(32, [zV.toFixed(2)]), 40, 0, bA.mn, bA.mk, -1, !1)
		}(zV = function() {
			aN.xZ(520, L(29), 40, 0, bA.mn, bA.mk, -1, !1);
			for (var yt = bQ.result.yt, eh = yt.length, gU = ag.gU, g = [], aB = 0; aB < eh; aB++) {
				var gE = yt[aB];
				g.push({
					gE: gE,
					dm: gU[gE]
				})
			}
			g.sort((f0, f1) => f1.dm - f0.dm);
			var zP = ag.xa,
				dm = bQ.result.zd,
				sM = bQ.result.zT,
				pO = "",
				zV = 0;
			for (aB = 0; aB < eh; aB++) {
				var hM = g[aB].dm * sM / (100 * dm),
					zf = zP[g[aB].gE] + ": " + hM.toFixed(2) + "   ";
				g[aB].gE === aD.eR && (zV = hM), 2 < aB && 4 !== eh ? 3 === aB && (pO += "(" + L(30, [eh - 3]) + ")") : pO += zf
			}
			aN.xZ(560, b9.qh.zg(pO), 40, 0, bA.n5, bA.mk, -1, !1), zV ? aN.xZ(580, L(31, [zV.toFixed(2) + " + " + zc().toFixed(2)]), 40, 0, bA.n5, bA.mk, -1, !1) : b9.g2.gt(aD.eR) && zU();
			return zV
		}()), 2 === aD.z1 || 7 <= aD.kD || function(zV) {
			var yt = bQ.result.yt,
				eh = yt.length,
				zh = ag.zh,
				gU = ag.gU,
				zi = [];
			loop: for (var aB = 0; aB < eh; aB++) {
				var gE = yt[aB],
					zj = b9.qh.zk(zh[gE]);
				if (null !== zj) {
					for (var zl = gU[gE], f1 = zi.length - 1; 0 <= f1; f1--)
						if (zj === zi[f1].name) {
							zi[f1].dm += zl, zi[f1].g.push({
								gE: gE,
								dm: zl
							});
							continue loop
						} zi.push({
						name: zj,
						dm: zl,
						g: [{
							gE: gE,
							dm: zl
						}]
					})
				}
			}
			if (0 !== zi.length) {
				zi.sort((f0, f1) => f1.dm - f0.dm);
				var g = zi[0].g,
					zm = (g.sort((f0, f1) => f1.dm - f0.dm), "[" + zi[0].name + "]"),
					zn = 512 * bQ.result.zT / 26214400,
					ke = (aN.xZ(0, L(33, [zm, zn.toFixed(4)]), 40, 0, bA.mn, bA.mk, -1, !1), g.length),
					vG = zi[0].dm,
					zo = 1e4 * zn;
				for (aB = 0; aB < ke; aB++)
					if (g[aB].gE === aD.eR) {
						aN.xZ(600, L(34, [(zo * g[aB].dm / (10 * vG)).toFixed(2)]), 40, 0, bA.mn, bA.mk, -1, !1), aN.xZ(640, L(35, [(.2 * zV).toFixed(2), zm]), 40, 0, bA.mn, bA.mk, -1, !1);
						break
					} aD.gq || aN.xZ(720, L(36) + bJ.zp, 736, 0, bA.mn, bA.nB, -1, !1)
			}
		}(zV))
	}, this.zZ = function() {
		var za, vi;
		aD.kF || (za = ag, vi = aD.eR, 0 === za.zb[vi]) || za.j0[vi] < 1 || 2 * za.p3[vi] > 3 * (za.iz[vi] + za.j0[vi]) || zU()
	}
}

function yj() {
	this.dX = function() {
		this.zq = 0, this.yt = [], this.zd = 0, this.zT = 0
	}, this.z8 = function() {
		var rL;
		aD.kF || (rL = this, 2 === aD.z1 ? rL.yt = bQ.hA.yr() : aD.hW ? rL.yt = bQ.hA.yv() : rL.yt = bQ.hA.yx(), rL.zq = bh.zs.zt(), rL.zd = Math.max(1, bQ.hA.yy(rL.yt)), b7.g2.oh(), 8 === aD.kD ? bQ.result.zT = 0 : rL.zT = 100 * bQ.result.zq * (
			1 + aD.xS))
	}
}

function yo() {
	this.z8 = function() {
		if (2 === aD.z1) aD.z9 = 2;
		else {
			if (8 === aD.kD) b9.g2.jK(0) || 0 === ag.lm[0] ? aD.zL = 1 : b9.g2.jK(1) || 0 === ag.lm[1] ? aD.zL = 0 : aD.zL = +(ag.gU[1] > ag.gU[0]);
			else {
				if (aD.hW) {
					var l7 = bg.zw();
					if (aD.yw = l7, bf.kI[l7]) return void(aD.z9 = +(bf.ef[aD.eR] === l7))
				}
				aD.zL = lB[0]
			}
			aD.z9 = +(aD.zL === aD.eR)
		}
	}
}

function dB() {
	this.id = 0, this.dp = 0, this.uR = null, this.uS = null, this.uT = null, this.uZ = null, this.a1 = new zx, this.dX = function() {
		var self, dp;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dp = Android.getVersion()) < 12 || (self.dp = dp, self.id = 1, self.uS = Android),
			function(self) {
				var dp;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uT = mwIOSdataX, self.uZ = window.webkit.messageHandlers.iosCommandA, dp = self
					.uT.version, self.dp = dp ? Number(dp) : 0)
			}(this),
			function(self) {
				var uR;
				if (0 === self.id) {
					try {
						if (!(uR = window.localStorage)) return;
						uR.setItem("tls7", "1"), uR.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uR = uR
				}
			}(this)
	}
}

function zx() {
	this.a01 = function() {
		bi.rB.um(), bi.rB.un(), az.y.close(0, 3255), 0 === a0.id ? a0.uR && a0.uR.clear() : 1 === a0.id ? a0.uS.saveString(199, "") : 2 === a0.id && a0.uZ.postMessage("clear")
	}, this.a02 = function() {
		2 === a0.id ? a0.uZ.postMessage("showConsentForm") : 1 === a0.id && a0.uS.setState(7)
	}, this.a03 = function() {
		this.setState(14)
	}, this.r7 = function() {
		return 1 === bi.eE.uM(2)
	}, this.a04 = function() {
		bi.eE.uK(102, "")
	}, this.setState = function(a05) {
		1 === a0.id && 5 <= a0.dp && a0.uS.setState(a05)
	}, this.a2 = function() {
		var a06;
		1 === a0.id && 7 <= a0.dp ? a0.uS.setState(5) : ((a06 = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a06.toString())
	}, this.dc = function() {
		1 !== a0.id || a0.dp < 17 || a0.uS.saveString(23, document.documentElement.outerHTML)
	}, this.eC = function() {
		0 !== a0.id && (1 === a0.id ? a0.uS.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dp ? a0.uZ.postMessage("prepare ad 1770251391") : a0.uZ.postMessage("loadAds 1770251391")))
	}, this.eH = function(dm) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dp ? a0.uZ.postMessage("show ad " + dm) : a0.uZ.postMessage("showAd"), !0)
	}, this.dh = function() {
		2 === a0.id && a0.dp < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bJ.a07 + "' target='_blank'>" +
			bJ.a07 + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bA.nS)]))
	}
}

function dQ() {
	function a0A(e) {
		a0N(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a0D()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bA.nA)]))
	}

	function a0L(e) {
		a0N(e), t.u(4, 5, new v(L(38), a0H(e), !0))
	}

	function a0H(e) {
		var pO = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pO : 4527 === e ? "Player already in lobby" + pO : 4530 === e ? "Lobby Timeout" + pO : 4528 === e ? "Lobby Kick: Another login detected." + pO : 4540 === e ?
			"You have been kicked." + pO : 4495 === e ? "Account doesn't exist." : "Unknown error" + pO
	}

	function a0N(e) {
		a0F(e), t.y.z()
	}

	function a0F(e) {
		var a05 = aa.a0E();
		6 === a05 ? az.y.a0O(e) : bm.a0B ? (t.x(), bm.tK(), az.y.close(az.y.a0C, 3256)) : 8 === a05 && aD.a0P(!0)
	}
	this.p = [], this.a08 = function(a09, e) {
		if (this.p.push(e), 8 === t.ry && 0 === a09)
			if (4211 === e) a0A(e);
			else {
				if (bm.a0B && 4495 === e && az.y.a0C !== a09) return void t.a0D();
				if (8 !== aa.a0E() && a0F(), 4480 === e) return bi.rB.uo(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a0H(e), !0))
			}
		else {
			var a05 = aa.a0E();
			if (6 === a05) {
				if (4211 === e) return void a0A(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a0I(a09)
			} else {
				if (!bm.a0B) return 8 === a05 ? void(a09 !== az.y.a0J || aD.kF || 1 !== aD.z4 || aD.gq || aN.a0K(L(39, [e]))) : void 0;
				if (a09 !== az.y.a0C) return
			}
			a0L(e)
		}
	}, this.a0M = function(e) {
		this.p.push(e), 8 === aa.a0E() ? aD.kF || 1 !== aD.z4 || aN.a0K(L(39, [e])) : a0L(e)
	}, this.s = function() {
		this.p.push(3268), a0N(3268)
	}
}

function d0() {
	var a0Q, a0R, a0S = -15e3,
		a0T = !1;

	function gu(e) {
		a0n() || (a0T = !0, a0o(e, 1), az.y.a0p(az.y.a0J), a0q(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0c(e) {
		a0S = be.eG, a0o(e, 1), az.y.a0p(az.y.a0J), 0 < e.touches.length && (a0Q = Math.floor(h.k * e.touches[0].clientX), a0R = Math.floor(h.k * e.touches[0].clientY), at.a0c(e) || a0q(a0Q, a0R))
	}

	function a0q(eo, eq) {
		t.gu(eo, eq), 0 === aD.z4 ? aa.gu(eo, eq) : bB.a0r(eo, eq) || bd.gu(eo, eq) || aX.gu(eo, eq) || aL.a0s(eo, eq) || aP.gu(eo, eq) || 0 <= aM.gu(eo, eq) || av.gu(eo, eq) || bI.a0t(eo, eq) || aL.a0u(eo, eq)
	}

	function a0Y(e) {
		a0n() || (a0T = !0, a0o(e, 1), a0v(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0d(e) {
		a0S = be.eG, a0o(e, 1), 0 < e.touches.length && (a0Q = Math.floor(h.k * e.touches[0].clientX), a0R = Math.floor(h.k * e.touches[0].clientY), at.a0d(e) || a0v(a0Q, a0R))
	}

	function a0v(eo, eq) {
		t.a0Y(eo, eq), 0 === aD.z4 ? aa.a0Y(eo, eq) : (bS.gn(eo, eq), bd.a0Y(eo, eq) || (aM.a0Y(eo, eq), aL.hO() ? aL.a0Y(eo, eq) : aR.gv ? aR.a0Y(eo) && (be.df = !0) : (aV.a0Y(eo, eq), aS.mI && aS.a0Y(eo, eq) && (be.df = !0))))
	}

	function a0a(e) {
		a0n() || (a0o(e, 1), a0w(), 0 === aD.z4 ? (aa.click(-1024, -1024), aT.qj()) : (aV.a0x(-1024, -1024), aM.a0Y(-1024, -1024), aR.a0y(), aS.mI = !1))
	}

	function a0Z(e) {
		a0n() || (a0o(e, 1), a0z(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bI.a0W && (bI.a0W = !1, e.preventDefault()))
	}

	function click(e) {
		a0n() || a0o(e, 1)
	}

	function a0e(e) {
		a0S = be.eG, a0o(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.z4 ? aS.mI = !1 : at.a10() || (a0z(a0Q, a0R, !1), bI.a0W && (bI.a0W = !1, e.preventDefault()))
	}

	function a0f(e) {
		a0S = be.eG, a0o(e, 1), a0z(a0Q, a0R, !1), bI.a0W && (bI.a0W = !1, e.preventDefault())
	}

	function a0g(e) {}

	function a0h(e) {}

	function a0i(e) {
		a0n() || a0o(e, 0)
	}

	function a0z(eo, eq, a11) {
		a0w(), 0 === aD.z4 ? aa.click(eo, eq) : (aV.a0x(eo, eq), bd.a0x(), aR.a0y(), aS.mI = !1, aL.click(eo, eq, a11) ? be.df = !0 : aM.a0Z(eo, eq))
	}

	function a0w() {
		t.a0w()
	}

	function a0b(e) {
		var eo, eq, deltaY;
		a0n() || (a0o(e, 1), az.y.a0p(az.y.a0J), eo = Math.floor(h.k * e.clientX), eq = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a0b(eo, eq, deltaY), 0 === aD.z4 ? aa.a0b(eo, eq, deltaY) : aV.a0b(eo, eq,
			deltaY) || (aR.a12(eo, eq) ? aR.a0b(deltaY) && (be.df = !0) : aS.a0b(eo, eq, deltaY)))
	}

	function a0j(e) {
		a0o(e, 0)
	}

	function a0o(e, id) {
		0 === id && t.hO() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a0E() && e.preventDefault()
	}

	function a0k(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0n() || 0 < h.rg || (e = e.code) && e.length && (bW.f2(e, 18) ? aq.a14(3) : bW.f2(e, 22) ? aq.a14(0) : bW.f2(e, 20) ? aq.a14(1) : bW.f2(e, 24) ? aq.a14(2) : bW.f2(e, 10) ? aR.a15(31 / 32) : bW.f2(e, 8) ? aR.a15(32 / 31) : bW.f2(e, 6) ? aR
			.a15(7 / 8) : bW.f2(e, 4) ? aR.a15(8 / 7) : bW.f2(e, 14) ? 0 !== aD.z4 && aS.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bW.f2(e, 16) ? 0 !== aD.z4 && aS.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bW.f2(e, 0) ? aD
			.z4 && bS.go(!1) : bW.f2(e, 2) ? aD.z4 && bS.go(!0) : bW.f2(e, 26) ? aD.z4 && bS.hI() : bW.f2(e, 28) && aD.z4 && bS.hN())
	}

	function a0l(e) {
		if (!a0n() && !(0 < h.rg || be.eG < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a16(1) || "Space" === code && t.a16(0))) return bm.a0B ? bm.tQ.a16(code) ? void 0 : void("Escape" === code && bI.fA()) : void(8 !== aa.a0E() && aa.a16(e) ? be.df = !0 : "Escape" ===
				code ? bI.fA() : bW.f2(code, 18) ? aq.a17(3) : bW.f2(code, 22) ? aq.a17(0) : bW.f2(code, 20) ? aq.a17(1) : bW.f2(code, 24) ? aq.a17(2) : bW.f2(code, 12) ? bB.a18(!aD.mG) : "Space" === code && aD.z4 && (aM.gr && aM.a19(), aD
					.gq) && bB.a1A(!1))
		}
	}

	function a0m() {
		"hidden" === document.visibilityState ? 1 === aD.z4 && (aD.gq ? bB.a1B() : !aD.kF || aM.gr || aD.h2 || aM.a19()) : be.df = !0
	}

	function a0n() {
		return a0S + 15e3 > be.eG
	}

	function resize() {
		h.a1D()
	}
	this.a0U = 0, this.a0V = "", this.a0W = !1, this.dX = function() {
		a0X.addEventListener("mousedown", gu, {
			passive: !1
		}), a0X.addEventListener("mousemove", a0Y, {
			passive: !1
		}), a0X.addEventListener("mouseup", a0Z, {
			passive: !1
		}), a0X.addEventListener("click", click, {
			passive: !1
		}), a0X.addEventListener("mouseleave", a0a, {
			passive: !1
		}), a0X.addEventListener("wheel", a0b, {
			passive: !1
		}), a0X.addEventListener("touchstart", a0c, {
			passive: !1
		}), a0X.addEventListener("touchmove", a0d, {
			passive: !1
		}), a0X.addEventListener("touchend", a0e, {
			passive: !1
		}), a0X.addEventListener("touchcancel", a0f, {
			passive: !1
		}), a0X.addEventListener("dragover", a0g), a0X.addEventListener("drop", a0h), a0X.addEventListener("dblclick", a0i), document.addEventListener("contextmenu", a0j), document.addEventListener("keydown", a0k), document.addEventListener(
			"keyup", a0l), document.addEventListener("visibilitychange", a0m), window.addEventListener("resize", resize)
	}, this.a0t = function(eo, eq) {
		return !!bB.gu(eo, eq) || !!(aV.gu(eo, eq) || aS.gu(eo, eq) || aR.gu(eo, eq) || aN.gu(eo, eq))
	}, this.a1C = a0n, this.qA = function() {
		return !a0T || 0 < a0S
	}, this.fA = function() {
		if (!t.hO()) return 8 === aa.a0E() ? aD.mG ? void bB.a18(!1) : bd.hO ? void bd.a19() : void aM.a19() : void(7 !== aa.a0E() && 6 === aa.a0E() && aZ.a1E());
		t.a16(2)
	}
}

function bw() {
	this.ph = new a1F, this.pq = new a1G, this.g2 = new a1H, this.qh = new a1I, this.xG = new a1J, this.a1K = new a1L, this.canvas = new a1M, this.color = new a1N, this.a1O = new a1P, this.dX = function() {
		this.ph.ul()
	}
}

function a1G() {
	this.vg = function(g) {
		g.fill(0)
	}, this.a1Q = function(g) {
		for (var eh = g.length, aB = 0; aB < eh; aB++) g[aB] = []
	}, this.a1R = function(hm, a1S) {
		for (var hn = bN.fH, aB = 0; aB < 3; aB++) hn[aB] = a1S * hm[aB];
		return hn
	}, this.a1T = function(hm, hn, a1U) {
		for (var hq = 0, aB = 0; aB < 3; aB++) hq += Math.abs(hm[aB] - hn[aB]);
		return a1U <= hq
	}, this.a1V = function(hm, a1W) {
		for (var aB = 0; aB < 3; aB++) hm[aB] = bK.pF(hm[aB] + a1W, 0, 255);
		return hm
	}, this.a1X = function(g, sI, sJ) {
		sJ = sJ || g.length - 1;
		for (var a1Y = 0, aB = sI = sI || 0; aB <= sJ; aB++) a1Y += g[aB];
		return a1Y
	}, this.a1Z = function(g, a1a) {
		for (var aB, a1b, eh = g.length, a1c = [], f0 = eh - 1; 0 <= f0; f0--) {
			for (aB = a1b = 0; aB < eh; aB++) a1a(g[aB]) < a1a(g[a1b]) && (a1b = aB);
			eh--, a1c.push(g[a1b]), g[a1b] = g[eh], g.pop()
		}
		return a1c
	}, this.min = function(g) {
		var aB, f9, eh = g.length;
		if (0 === eh) return 0;
		for (f9 = g[0], aB = 1; aB < eh; aB++) f9 = Math.min(f9, g[aB]);
		return f9
	}, this.max = function(g) {
		var eh = g.length;
		if (0 === eh) return 0;
		for (var f9 = g[0], aB = 1; aB < eh; aB++) f9 = Math.max(f9, g[aB]);
		return f9
	}, this.a1d = function(g, f9) {
		for (var eh = g.length, g9 = 0, aB = 0; aB < eh; aB++) g9 += g[aB] > f9;
		return g9
	}, this.a1e = function(a1f, a1g, min) {
		for (var eh = a1g[0], aB = eh - 1; 0 <= aB; aB--) a1f[aB] < min && (a1f[aB] = a1f[--eh]);
		a1g[0] = eh
	}, this.a1h = function(g, eh, value) {
		for (var aB = 0; aB < eh; aB++) g[aB] -= value
	}, this.a1i = function(g) {
		for (var eh = g.length, aB = 0; aB < eh; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a1j = function(pO, g, a1k) {
		g.fill(0);
		for (var sM = pO.split(","), eh = Math.min(sM.length, g.length), aB = 0; aB < eh; aB++) g[aB] = Math.min(parseInt(sM[aB]), a1k)
	}, this.a1l = function(pO, g, qe) {
		g.fill("");
		for (var sM = pO.split('"'), eh = Math.min(sM.length, 2 * g.length), hU = 0, aB = 1; aB < eh; aB += 2) g[hU++] = sM[aB].slice(0, qe)
	}, this.a1m = function(g, g9) {
		if (0 === g9) g.fill(0);
		else {
			var a1Y = this.a1X(g),
				eh = g.length;
			if (0 === a1Y) g.fill(bK.dn(g9, eh));
			else
				for (var aB = 0; aB < eh; aB++) g[aB] = bK.dn(g9 * g[aB], a1Y);
			if (0 === (a1Y = this.a1X(g))) g[1] = g9;
			else
				for (var hU = 0; a1Y++ < g9;) g[hU = (hU + 1) % eh] && g[hU]++
		}
	}, this.a1n = function(g) {
		if (!g) return 0;
		var eh = g.length;
		if (0 === eh) return 0;
		for (var f9 = g[eh - 1], aB = eh - 2; 0 <= aB; aB--)
			if (g[aB] !== f9) return aB + 2;
		return 1
	}, this.a1o = function(g) {
		for (var a1Y = 0, aB = 0; aB < g.length; aB++) a1Y += g[aB].length;
		return a1Y
	}, this.a1p = function(a1q) {
		for (var g = [], aB = 0; aB < a1q.length; aB++) g = g.concat(a1q[aB]);
		return g
	}
}

function a1M() {
	this.xr = function(a1r, e2, a1s) {
		var hY = a1r.height,
			a1t = b9.ph.vW(hY, hY),
			he = b9.ph.getContext(a1t);
		return function(i, he, a1s) {
			he.fillStyle = a1s, he.beginPath(), he.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), he.fill()
		}(hY, he, a1s), he.drawImage(a1r, -e2 * hY, 0), a1t
	}, this.a1v = function(a1w) {
		var he, hb, hY = a1w.height;
		return a1w.width === hY && (hb = (he = b9.ph.getContext(a1w, !0)).getImageData(0, 0, hY, hY), b9.a1K.a1x(hb.data, hY, hY, .9), he.putImageData(hb, 0, 0)), a1w
	}
}

function a1N() {
	this.a1y = function(f9) {
		return [f9 >> 12 & 63, f9 >> 6 & 63, 63 & f9]
	}, this.a1z = function(f9) {
		for (var g = this.a1y(f9), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a20 = function(f9) {
		f9 = this.a1z(f9);
		return b9.color.mf(f9[0], f9[1], f9[2])
	}, this.a21 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mf = function(e1, sM, f1) {
		return "rgb(" + e1 + "," + sM + "," + f1 + ")"
	}, this.mh = function(e1, sM, f1, f0) {
		return "rgba(" + e1 + "," + sM + "," + f1 + "," + f0.toFixed(3) + ")"
	}, this.qC = function(f2) {
		for (var g = f2.split("(")[1].split(","), fG = bN.fG, aB = 0; aB < 3; aB++) fG[aB] = parseInt(g[aB]);
		return 4 === g.length ? fG[3] = 255 * parseFloat(g[3].slice(0, -1)) : fG[3] = 255, fG
	}, this.qD = function(a22, ek) {
		for (var g = a22.slice(a22.indexOf("(") + 1, a22.indexOf(")")).split(","), fG = bN.fG, aB = 0; aB < 3; aB++) fG[aB] = bK.pF(parseInt(g[aB].trim(), 10) + ek, 0, 255);
		return 3 === g.length ? this.mf(fG[0], fG[1], fG[2]) : (a22 = parseFloat(g[3].trim()), this.mh(fG[0], fG[1], fG[2], a22 = 0 === a22 ? .3 : a22))
	}, this.a23 = function(g) {
		for (var pO = "#", aB = 0; aB < 3; aB++) {
			var e1 = g[aB].toString(16);
			pO += 1 === e1.length ? "0" + e1 : e1
		}
		return pO
	}, this.a24 = function(pO) {
		var e1, sM;
		return pO.length < 7 ? bA.me : (e1 = parseInt(pO.slice(1, 3), 16), sM = parseInt(pO.slice(3, 5), 16), pO = parseInt(pO.slice(5, 7), 16), this.mf(e1, sM, pO))
	}
}

function a1J() {
	this.a25 = function(pO, font, maxWidth) {
		if (font && (tr.font = font), tr.measureText(pO).width <= maxWidth) return pO;
		for (var aB = pO.length - 1; 1 <= aB; aB--)
			if (pO = pO.substring(0, aB), tr.measureText(pO + "...").width <= maxWidth) return pO + "...";
		return "..."
	}
}

function a1P() {
	var a27 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a28 = function(eG) {
		var a2A, pO = new Date(eG.getTime() - 6e4 * eG.getTimezoneOffset()).toUTCString();
		return pO.length < 12 || (pO = pO.substring(5, pO.length), 0 === (eG = eG.getTimezoneOffset())) ? pO : (a2A = (eG < 0 ? "+" : "-") + bK.dn(Math.abs(eG), 60), 0 == (eG = Math.abs(eG) % 60) ? pO + a2A : pO + a2A + ":" + (eG < 10 ? "0" :
			"") + eG)
	}, this.a2B = function(eG) {
		var pO = eG.toUTCString();
		return pO.length < 12 ? pO : function(eG) {
			return a27[eG.getUTCDay()]
		}(eG) + ", " + pO.substring(5, pO.length - 4)
	}
}

function a1F() {
	var a2D = null;
	this.y8 = 0, this.ul = function() {
		var f9 = bi.eE.data[5].value;
		a2D = "px " + f9, "Trebuchet MS" !== f9 && (a2D += ", Trebuchet MS"), this.y8 = hX(32, 32, ["a", "b", "m"], 200, a2D)
	}, this.vW = function(i, j) {
		var f2 = document.createElement("canvas");
		return f2.width = i, f2.height = j, f2
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(xG, i, j) {
		return xG.getImageData(0, 0, i, j)
	}, this.rY = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a2D : 1 === type ? "bold " + size + a2D : 2 === type ? "lighter " + size + a2D : 3 === type ? "italic " + size + a2D : 4 === type ? "oblique " + size + a2D : 5 === type ? "small-caps " +
			size + a2D : "small-caps bold " + size + a2D
	}, this.textAlign = function(he, id) {
		he.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(he, id) {
		he.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.ps = function(e, code, color) {
		color = this.pr(bb.ra) + " solid " + (color || bA.mn);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sO = function(e, eo, eq, i, j) {
		e = e.style;
		e.left = this.sP(eo), e.top = this.sP(eq), e.width = this.sP(i), e.height = this.sP(j)
	}, this.pi = function(f9) {
		return 1 + f9 * a0.a1.r7()
	}, this.r2 = function(mP, gF) {
		return mP * this.pi(void 0 === gF ? .5 : gF) * h.pj / h.k
	}, this.sN = function(mP, gF) {
		return mP * this.pi(void 0 === gF ? .5 : gF) * h.pj
	}, this.s4 = function(mP, gF, a2E) {
		return this.pi(gF) * Math.min(mP * h.pj, a2E * h.i) / h.k
	}, this.pr = function(f9) {
		return f9.toFixed(1) + "px"
	}, this.sP = function(f9) {
		return this.a2G(f9).toFixed(1) + "px"
	}, this.a2G = function(f9) {
		return f9 / h.k
	}, this.a2H = function(ro, a2I) {
		for (var pO = "<ul>", eh = ro.length, aB = 0; aB < eh; aB++) pO += "<li>" + ro[aB] + ": <a href='" + a2I[aB] + "' target='_blank'>" + a2I[aB] + "</a></li>";
		return pO += "</ul>"
	}, this.a2J = function(a2K) {
		return "<a href='" + a2K + "' target='_blank'>" + a2K + "</a>"
	}, this.a2L = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a2M = function(e) {
		var dm = e.textContent;
		b9.qh.a2N(dm, "✔") || (1 === dm.length ? e.textContent = "✔" : e.textContent = dm + " ✔", setTimeout(function() {
			e.textContent = dm
		}, 500))
	}, this.measureText = function(pO) {
		return tr.measureText(pO).width
	}, this.sE = function(a2O) {
		a2O.style.overflowX = "auto", a2O.style.overflowY = "hidden", a2O.style.whiteSpace = "nowrap", a2O.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sR = this.scrollLeft, e.preventDefault())
		}), a2O.addEventListener("scroll", function() {
			this.sR = this.scrollLeft
		})
	}
}

function a1H() {
	this.gs = function(a05) {
		return 0 === a05 ? 1 === aD.z4 && aD.h2 : 1 === a05 ? 1 === aD.z4 && !aD.h2 : 2 === aD.z4
	}, this.gt = function(player) {
		return 0 !== ag.lm[player] && 2 !== ag.a2P[player]
	}, this.a2Q = function(player) {
		return player === aD.eR && 2 !== ag.a2P[player]
	}, this.lL = function() {
		return al.jx < 2 ? 0 : aD.hW ? 1 < bg.a2R() : ag.gU[lB[1]]
	}, this.a2S = function() {
		var jx = al.jx;
		if (0 !== jx) {
			if (!aD.hW) return !this.jK(lB[0]);
			for (var ef = bf.ef, l7 = bg.l8(), jy = al.jy, aB = jx - 1; 0 <= aB; aB--) {
				var gE = jy[aB];
				if (ef[gE] === l7 && !this.jK(gE)) return 1
			}
		}
		return 0
	}, this.a2T = function(player) {
		return player === aD.eR
	}, this.jK = function(player) {
		return player >= aD.jw || 2 === ag.a2P[player]
	}, this.ki = function(player) {
		return 0 !== ag.lm[player]
	}, this.yu = function(player) {
		return player < aD.jw
	}, this.p0 = function(a2U, a2V) {
		return a2U !== a2V
	}, this.g5 = function(player, f9) {
		var min;
		return f9 = this.a2W(player, f9), ag.gi[player] += f9, ag.a2X[player] && (min = Math.min(ag.a2X[player], ag.gi[player]), ag.a2X[player] -= min, ag.gi[player] -= min), f9
	}, this.a2W = function(player, f9) {
		var a2Y = ag.gi[player];
		return f9 = Math.min(f9, ag.gU[player] * aD.a2Z - a2Y), f9 = Math.min(f9, aD.a2a - a2Y), Math.max(f9, 0)
	}, this.p1 = function(player, iG, a2b, a2c) {
		var a2Y = ag.gi[player],
			iG = bK.dn(a2Y * (iG + 1), 1024),
			a2b = bK.dn(a2b * a2Y, 1024),
			iG = Math.min(iG, a2Y - a2b);
		return 10 === aD.kD && (iG = b3.a2e(player, iG)), bN.fE[0] = iG, bN.fE[1] = a2b, a2c <= iG
	}, this.oS = function(player, oB, oA) {
		var player = ag.gi[player],
			a2d = bK.dn(64 * player, 1024),
			player = (oB = Math.min(oB, player - a2d), this.a2g(oB));
		return a2d += player, oB = this.a2W(oA, oB -= player), bN.fE[0] = oB, bN.fE[1] = a2d, 1 <= oB
	}, this.oU = function(oB, oA) {
		var a2f = this.a2g(oB);
		return oB = this.a2W(oA, oB -= a2f), bN.fE[0] = oB, bN.fE[1] = a2f, 1 <= oB
	}, this.iF = function(player, a2h) {
		return bK.dn(ag.gi[player] * (a2h + 1), 1024)
	}, this.a2g = function(a2i) {
		return bK.dn(Math.max(2142 - be.jt(), 0) * a2i, 2142)
	}, this.pD = function(player, a2b) {
		a2b = bK.dn(a2b * ag.gi[player], 1024);
		bN.fE[1] = a2b, ag.gi[player] -= a2b
	}, this.g3 = function(player, a2j) {
		var fQ, fS, f1 = ag.gi[player];
		return a2j <= f1 ? ag.gi[player] -= a2j : (ag.gi[player] = 0, fS = ag.a2X[player] + (fQ = 5 * ((f1 = a2j - f1) >> 2)), bc.g6(player, fQ - f1, 12), fS <= aD.a2k ? ag.a2X[player] = fS : (ag.a2X[player] = aD.a2k, bc.g6(player, fS - aD.a2k,
			18))), a2j
	}, this.kw = function(player, iG) {
		var gi = ag.gi,
			a2Y = gi[player],
			iG = bK.dn(a2Y * (iG + 1), 1024),
			a2d = Math.max(bK.dn(a2Y, 10), 1e3);
		return (iG = Math.min(iG, a2Y - a2d)) < 0 ? (gi[player] = 0, a2d = Math.min(1e3, a2Y + aD.a2k - ag.a2X[player]), bN.fE[1] = a2d, ag.a2X[player] += a2d - a2Y, 0) : (bN.fE[1] = a2d, 10 === aD.kD && (iG = b3.a2e(player, iG)), gi[player] -=
			a2d + iG, iG)
	}, this.p4 = function(player) {
		ag.gi[player] -= bN.fE[0] + bN.fE[1]
	}, this.p2 = function(player, j7) {
		return (j7 = Math.min(j7, aD.ee)) < aD.ee && 0 === ag.lm[j7] && (j7 = aD.ee), (bN.ed[0] = j7) === aD.ee || ea(player, j7)
	}, this.p6 = function(player, oA) {
		return 0 !== ag.lm[oA] && !ea(player, oA)
	}, this.a2l = function(player, a2m) {
		for (var gE, eh = al.jx, a2n = 0, a2o = lB, aB = 0; aB < eh; aB++)
			if (gE = a2o[aB], !this.jK(gE)) {
				if (player === gE) return !0;
				if (++a2n > a2m) return !1
			} return !1
	}, this.l4 = function(gE) {
		var a2p = aD.hW ? bg.a2q() : ag.gU[lB[0]];
		return a2p >= bK.dn(gE * aD.jg, 100)
	}, this.a2r = function(f9, min, max) {
		return Math.floor(bK.pF(isNaN(f9) ? 0 : Number(f9), min, max))
	}
}

function a1L() {
	this.a2s = function(canvas, a2t, a2u) {
		var i = canvas.width,
			j = canvas.height,
			f2 = b9.ph.vW(i, j),
			he = b9.ph.getContext(f2, !0),
			canvas = (he.drawImage(canvas, 0, 0), he.getImageData(0, 0, i, j));
		return a2t(canvas.data, i, j, a2u), he.putImageData(canvas, 0, 0), f2
	}, this.a2v = function(vh, i, j) {
		for (var eo = i - 1; 0 <= eo; eo--)
			for (var eq = j - 1; 0 <= eq; eq--) {
				var aB = 4 * (eo + eq * i);
				vh[3 + aB] = vh[aB], vh[aB] = vh[1 + aB] = vh[2 + aB] = 255
			}
	}, this.a2w = function(vh, i, j) {
		for (var eo = i - 1; 0 <= eo; eo--)
			for (var eq = j - 1; 0 <= eq; eq--) {
				var aB = 4 * (eo + eq * i);
				vh[1 + aB] > vh[2 + aB] + 10 && (vh[3 + aB] = vh[aB], vh[1 + aB] = vh[2 + aB])
			}
	}, this.a2x = function(vh, i, j, a2u) {
		for (var gap = Math.floor(Math.min(i, j) * a2u), eo = 0; eo < i; eo++)
			for (var aB, eq = 0; eq < j; eq++)(eo < gap || eq < gap || i - gap <= eo || j - gap <= eq) && (vh[3 + (aB = 4 * (eo + eq * i))] = 255 - 255 * (vh[1 + aB] - vh[aB]) / (255 - vh[aB]))
	}, this.a2y = function(vh, i, j, a2u) {
		for (var eo = i - 1; 0 <= eo; eo--)
			for (var eq = j - 1; 0 <= eq; eq--) {
				var aB = 4 * (eo + eq * i);
				vh[aB] = a2u[0], vh[1 + aB] = a2u[1], vh[2 + aB] = a2u[2]
			}
	}, this.a2z = function(vh, i, j, a2u) {
		for (var gap = Math.floor(i * a2u), eo = 0; eo < i; eo++)
			for (var aB, eq = 0; eq < j; eq++)(eo < gap || eq < gap || i - gap <= eo || j - gap <= eq) && (vh[aB = 4 * (eo + eq * i)] = vh[1 + aB] = vh[2 + aB] = 0)
	}, this.a30 = function(vh, i, j) {
		for (var eq, aB, eo = i - 1; 0 <= eo; eo--)
			for (eq = j - 1; 0 <= eq; eq--) 200 < vh[1 + (aB = 4 * (eo + eq * i))] && vh[1 + aB] - 20 > vh[aB] && vh[1 + aB] - 20 > vh[2 + aB] ? vh[aB] + vh[2 + aB] < 40 ? vh[3 + aB] = 0 : (vh[3 + aB] = vh[aB], vh[aB] = 255, vh[1 + aB] = 255, vh[
				2 + aB] = 255) : vh[aB] < 50 && vh[1 + aB] < 50 && vh[2 + aB] < 50 && (vh[aB] + vh[1 + aB] + vh[2 + aB] < 50 ? vh[3 + aB] = 180 : vh[3 + aB] = 180 + Math.floor(75 * (vh[aB] + vh[1 + aB] + vh[2 + aB] - 50) / 100))
	}, this.a31 = function(vh, i, j) {
		for (var eq, aB, eo = i - 1; 0 <= eo; eo--)
			for (eq = j - 1; 0 <= eq; eq--) vh[1 + (aB = 4 * (eo + eq * i))] > vh[aB] + 20 && vh[1 + aB] > vh[2 + aB] + 20 && vh[aB] + vh[2] < 40 && (vh[3 + aB] = 255 - vh[1 + aB], vh[aB] = vh[1 + aB] = vh[2 + aB] = vh[aB])
	}, this.a1x = function(vh, i, j, a2u) {
		for (var e1 = i >> 1, eo = 0; eo < i; eo++)
			for (var eq = 0; eq < j; eq++) Math.sqrt((eo - e1) * (eo - e1) + (eq - e1) * (eq - e1)) > a2u * e1 && (vh[4 * (eo + eq * i) + 3] = 0)
	}
}

function a1I() {
	var a32 = {
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
		a33 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.qi = function(u7) {
		return u7.replace(a33, function(match) {
			return a32[match] || match
		})
	}, this.yM = function(f9) {
		var aB, a34, a35, a36, a37;
		if (f9 < 0) return "-" + this.yM(Math.abs(f9));
		if (f9 < 1e3) return f9.toString();
		for (a34 = Math.floor(Math.log(f9 + .5) / Math.log(10)) + 1, a35 = Math.floor((a34 - 1) / 3), a37 = (a36 = f9.toString()).substring(a34 - 3, a34), aB = 1; aB < a35; aB++) a37 = a36.substring(a34 - 3 * (aB + 1), a34 - 3 * aB) + " " + a37;
		return a36.substring(0, a34 - 3 * a35) + " " + a37
	}, this.a38 = function(gE, a34) {
		return gE.toFixed(a34) + "%"
	}, this.a39 = function(f9, a3A) {
		return f9.toFixed(bK.pF(Math.floor((void 0 === a3A ? 3 : a3A) - Math.log10(Math.max(f9, 1))), 0, 8))
	}, this.a3B = function(f9, mP, a34) {
		return (f9 * mP).toFixed(a34)
	}, this.zk = function(username) {
		var el, eW = username.indexOf("[");
		return !(eW < 0) && 1 < (el = username.indexOf("]")) - eW && el - eW <= 8 ? username.substring(eW + 1, el).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zk;
	this.a3C = function(pO) {
		for (var f0 = Math.floor(.5 * pO.length + .5), mV = Math.floor(.5 * (f0 - 1)), aB = 0; aB < mV; aB++)
			for (var f1 = -1; f1 < 2; f1 += 2) {
				var f2 = f0 + f1 * aB;
				if (" " === pO[f2]) return [this.zg(pO.substring(0, f2)), this.a3D(pO.substring(f2))]
			}
		return [pO.substring(0, f0), pO.substring(f0)]
	}, this.a3D = function(pO) {
		for (var eh = pO.length, aB = 0; aB < eh; aB++)
			if (" " !== pO[aB]) return pO.substring(aB);
		return pO
	}, this.zg = function(pO) {
		for (var aB = pO.length - 1; 0 <= aB; aB--)
			if (" " !== pO[aB]) return pO.substring(0, aB + 1);
		return pO
	}, this.a3E = function(pO, a3F) {
		return pO.split("(")[0] + "(🧈 " + a3F.toFixed(2) + ")"
	}, this.startsWith = function(pO, a3G) {
		return pO.substring(0, a3G.length) === a3G
	}, this.a2N = function(pO, a3G) {
		var eh = pO.length;
		return pO.substring(eh - a3G.length, eh) === a3G
	}, this.a3H = function(g, a3I, a3J) {
		var pO = "",
			eh = g.length - 1;
		a3J = a3J || "";
		for (var aB = 0; aB < eh; aB++) pO += a3J + g[aB] + a3J + ",", (aB + 1) % a3I == 0 && (pO += "\n");
		return pO += a3J + g[eh] + a3J
	}, this.a3K = function(pO, hm, hn) {
		return pO.replace(new RegExp(hm, "g"), hn)
	}
}

function a3L() {
	this.j4 = function(player, eT) {
		aI.x2(player, bL.ep(eT), bL.er(eT)) && (be.df = !0), aD.kF && this.ir()
	}, this.ir = function() {
		aD.h2 = !1;
		for (var aB = 0; aB < aD.jw; aB++) 0 !== ag.lm[aB] && 0 === ag.gU[aB] && aI.x8(aB);
		0 !== ag.lm[aD.eR] ? (bc.li[7] = ag.gU[aD.eR], bc.li[8] = ag.gi[aD.eR], aR.a3M(), aW.a3N(), aD.gq || aH.m6(ag.iV[aD.eR] - 5, ag.iX[aD.eR] - 5, ag.iW[aD.eR] + 5, ag.iY[aD.eR] + 5), au.dX()) : aX.show(!1, !1, !1, !0), aN.a3O(18), af.a3P(),
			af.lY(!0), bO.y.a3Q(), aL.r0(), aD.oz = null, ba.a3R = !0, ba.a3S(), aD.kF && a0.a1.setState(1)
	}
}

function by() {
	this.ee = 512, this.a2a = 15e8, this.a3T = 1e9, this.a2k = 5e4, this.a3U = 512, this.g0 = 2, this.eR = 0, this.jw = 0, this.z7 = 0, this.kH = 0, this.z6 = 0, this.wD = 512, this.wI = 512, this.a2Z = 150, this.kF = !0, this.gq = 0, this.z4 = 0,
		this.jg = 0, this.mG = !1, this.h2 = 0, this.a3V = 0, this.hW = !1, this.wK = 0, this.wL = 0, this.kD = 0, this.xS = 0, this.oz = null, this.zM = new xM, this.a3W = 30, this.z1 = 0, this.z9 = 0, this.zL = 0, this.yw = 0, this.data = new a3X,
		this.a3Y = new a3Z, this.a3a = 0, this.a3b = function() {
			bQ.dX(), this.z7 = this.jw = this.data.humanCount, this.kF = 1 === this.z7, this.mG = !1, this.gq = this.data.isReplay, this.kD = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 : this.data
				.numberTeams - 2, this.xS = this.data.isContest, this.hW = this.kD < 7 || 9 === this.kD, this.kD = 10 === this.kD && this.kF ? 7 : this.kD, this.kD = 8 === this.kD && 2 !== this.jw ? 7 : this.kD, ay.dX(), this.wK = this.data
				.numberTeams, this.data.teamPlayerCount ? this.wL = +(0 < this.data.teamPlayerCount[0]) : (this.wL = 0, this.hW && this.kF && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.wK + 1), aD.a3Y
					.a3c())), this.a3W = this.jw <= 2 ? 30 : this.jw <= 50 ? 40 : 50, this.a3V = this.h2 = this.data.selectableSpawn, this.oz = this.h2 ? new a3L : null, 1 === l.dl ? this.wD = this.jw : this.wD = this.data.playerCount, this.wI = this
				.wD, this.kH = this.wD - this.jw, this.z6 = 0, this.eR = this.data.selectedPlayer, this.z1 = 0, this.z9 = 0, this.zL = 0, this.yw = 0, ax.a3d(this.data.spawningSeed), ae.dX(), ag.dX(), ai.a3e(), b7.o3.ol = [], bf.dX(), this.z4 = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bc.dX(), a3f(), ac.dY(), ao.a3g(), ba.dX(), ac.dX(), ar.dX(), bL.dX(), bM.dX(), an.dX(), bU.a3h(), aE.dX(),
				ai.a7(), aI.dX(), aJ.dX(), al.a3i(), b8.dX(), bg.dX(), bO.dX(), bd.dX(), a3j.putImageData(a3k, 0, 0), aV.dX(), aS.dX(), aR.dX(), bB.dX(), av.dX(), aU.dX(), aW.dX(), aM.dX(), aQ.dX(), aN.dX(), aP.dX(), aL.dX(), aX.dX(), aF.dX(), aG
				.dX(), fi(), ad.dX(), af.dX(), b3.dX(), b4.dX(), b0.dX(), this.zM.dX(), be.a3h(), aH.m5(), 0 === ag.lm[aD.eR] && aX.show(!1, !0), af.lY(!0), au.dX(), be.df = !0, this.gq || this.kF && this.h2 || a0.a1.setState(1), this.a3a = 0
		}, this.a0P = function(a3m) {
			aD.gq || b8.ox.a3n.length || (b8.ox.a3n = b8.a3o.yX()), az.y.a3p(), bp.clear(), this.z4 = 0, be.a3q(), a0.a1.setState(0), aa.setState(0), a3m || bT.eA.show(), 2 === this.a3a ? t.y.a3r() : 1 === this.a3a ? t.u(19) : t.u(5, 5)
		}, this.a3s = function() {
			return this.gq ? aM.gr || !bB.a3t : this.kF && (aM.gr || this.h2)
		}, this.a3u = function() {
			return 1 === this.z4 && !this.h2
		}
}

function a3X() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3Z() {
	this.a3c = function() {
		var a3v = aD.data;
		b9.pq.a1m(a3v.teamPlayerCount, a3v.playerCount), a3v.numberTeams = b9.pq.a1d(a3v.teamPlayerCount, 0), a3v.teamPlayerCount[0] && a3v.teamPlayerCount[7] && (a3v.teamPlayerCount[7] = 0, this.a3c())
	}, this.a3w = function() {
		var a3v = aD.data;
		a3v.mapType < 2 ? bR.a7(bR.a3x(a3v), a3v.mapSeed) : bR.a3y(a3v.canvas)
	}, this.a3z = function() {
		var a3v = aD.data;
		a3v.colorsData || (a3v.colorsData = new Uint32Array(1)), a3v.selectableColor && (a3v.colorsData[0] = bi.y.uk()), a3v.selectableName && (a3v.playerNamesData || (a3v.playerNamesData = new Array(1)), a3v.playerNamesData[0] = bi.eE.data[122]
			.value)
	}, this.a40 = function() {
		aD.data = new a3X, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.ee), aD.data.aIncomeData[0] = 64
	}
}

function dV() {
	var a41 = [];
	this.xZ = function(pO, oK) {
		pO = {
			eG: aW.a43(),
			pO: pO,
			oK: oK
		};
		a41.push(pO), 30 === t.ry && t.a44().xZ(pO)
	}, this.clear = function() {
		a41 = [], t.a45(30) && t.a45(30).clear()
	}, this.a46 = function() {
		return a41
	}
}

function dP() {
	this.y5 = 0, this.gap = 0, this.ra = 0, this.po = 0, this.dX = function() {
		this.resize()
	}, this.resize = function() {
		this.y5 = .0022 * b9.ph.pi(.5) * h.pj, this.ra = this.y5 / h.k, this.gap = Math.max(Math.floor((a0.a1.r7() ? .0114 : .01296) * h.pj), 2), this.po = this.gap / h.k
	}
}

function dO() {
	this.a47 = function() {
		return a0.a1.r7() ? 2 : 1
	}
}

function c9() {
	var qH, eo, eq, a48, a49, a4A, eG, player, a4B, gap, zoom, od, a4C;

	function a4M(player) {
		for (var aB = od.length - 1; 0 <= aB; aB--)
			if (od[aB] === player) return 1
	}

	function a4K(a4H) {
		var aB, eh;
		if (-1 !== a4H)
			for (eh = qH.length, aB = 0; aB < eh; aB++)
				if (qH[aB].hO && qH[aB].eo + 1 === a4H % 4 && qH[aB].eq + 1 === a4H >> 2) return aB;
		return -1
	}

	function a4I(kz, l0) {
		var sM = gap / 2;
		return kz < eo - a48 - 3 * sM || eo + 3 * a48 + 5 * sM < kz || l0 < eq - a48 - 3 * sM || eq + 2 * a48 + 3 * sM < l0 ? -1 : 4 * (l0 < eq - sM ? 0 : l0 < eq + a48 + sM ? 1 : 2) + (kz < eo - sM ? 0 : kz < eo + a48 + sM ? 1 : kz < eo + 2 * a48 +
			3 * sM ? 2 : 3)
	}
	this.a4D = function() {
		var aB, f1, a4G = [bA.nD, bA.nR, bA.ml, bA.nl, bA.ne];
		for (qH = new Array(9), aB = 0; aB < 9; aB++) qH[aB] = {
			id: aB,
			hO: !1,
			kg: 0,
			canvas: [],
			eo: 0,
			eq: 0
		};
		for (qH[0].colors = [0, 1, 2, 3], qH[0].eo = 0, qH[0].eq = 0, qH[1].colors = [0, 1, 4], qH[1].eo = 1, qH[1].eq = 0, qH[2].colors = [0, 2], qH[2].eo = -1, qH[2].eq = 0, qH[3].colors = [0], qH[3].eo = 0, qH[3].eq = 0, qH[4].colors = [0, 2],
			qH[4].eo = 1, qH[4].eq = 1, qH[5].colors = [3], qH[5].eo = 0, qH[5].eq = -1, qH[6].id = 20, qH[6].colors = [0], qH[6].eo = 1, qH[6].eq = -1, qH[7].id = 21, qH[7].colors = [0], qH[7].eo = 0, qH[7].eq = 1, qH[8].id = 16, qH[8]
			.colors = [0], qH[8].eo = 0, qH[8].eq = 0, aB = 0; aB < 9; aB++)
			for (f1 = 0; f1 < qH[aB].colors.length; f1++) qH[aB].canvas.push(function(id, a1s) {
				if (id < 20) return b9.canvas.xr(ab.get(3), id, a1s);
				var a1s = ab.get(3).height,
					a1t = b9.ph.vW(a1s, a1s),
					he = b9.ph.getContext(a1t);
				20 === id ? he.drawImage(ab.get(18), 0, 0) : 21 === id && aj.vh.y6(aj.qz.xv + aj.qz.yC, he, 0, 0, a1s);
				return a1t
			}(qH[aB].id, a4G[qH[aB].colors[f1]]))
	}, this.a4F = function() {
		return qH
	}, this.dX = function() {
		od = [], eo = eq = eG = 0, a49 = a4A = -1e3, this.resize()
	}, this.resize = function() {
		a48 = Math.floor((a0.a1.r7() ? .075 : .0468) * h.pj), zoom = a48 / ab.get(3).height, gap = Math.floor(a48 / 3)
	}, this.a0s = function(kz, l0) {
		return !!this.hO() && (be.df = !0, !!aj.vh.gu(kz, l0, player) || (kz = function(kz, l0) {
			a4A = a49 = -1e3;
			var a4J = a4K(a4I(kz, l0));
			if (-1 === a4J) return 0;
			if (1 !== qH[a4J].colors[qH[a4J].kg])
				if (5 === a4J) {
					if (! function() {
							var dm = performance.now();
							a4C + 4e3 < dm && (od = []);
							a4C = dm
						}(), a4M(player)) return 1;
					od.push(player), 16 < od.length && od.shift()
				} else if (6 === a4J) {
				for (var aB = od.length - 1; 0 <= aB; aB--) 0 === ag.lm[od[aB]] && od.splice(aB, 1);
				0 < od.length && (b4.a4N(1, od, !0) && b7.g2.oc(od, player), od = [])
			} else if (2 === a4J) b7.h3.o9(aR.h8(), player);
			else if (3 === a4J) aD.h2 && b7.h3.h4(a4B);
			else if (0 === a4J)
				if (0 === qH[0].kg) {
					if (aD.a3V && aW.a43() < 350) return 1;
					bU.a4O(4), b7.h3.hE(aR.h8(), player)
				} else b0.hG(player, aR.h8());
			else if (1 === a4J) bU.a4O(1), b7.h3.hC(aR.h8(), a4B);
			else {
				if (7 === a4J) return bU.a4O(0), aj.vh.show(kz, l0), 2;
				if (4 === a4J) b4.a4N(0, [player], !0) && b7.g2.oZ(player);
				else {
					if (8 !== a4J) return 0;
					b7.h3.h7(aR.h8(), a4B, player)
				}
			}
			return 1
		}(kz, l0), this.r0(), 2 === kz && (aj.vh.hO = !0), 0 < kz))
	}, this.a0u = function(kz, l0) {
		this.hO() || (a49 = kz, a4A = l0, eG = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bL.gy(mouseX),
			coordY = bL.h0(mouseY),
			coord = bL.f5(coordX, coordY),
			point = bL.eX(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kz, l0, eL) {
			ac.ec(eL) || -1 === (kz = bM.hA.a4c(kz, l0)) ? aN.a4b(eL) : aN.a4d(kz)
		}(mouseX, mouseY, point))
	}
	this.click = function(kz, l0, a11) {
		var gx = bL.gy(kz),
			gz = bL.h0(l0),
			eT = bL.f5(gx, gz),
			eL = bL.eX(eT);
		if (!bL.h1(gx, gz)) return !1;
		gx = (a0.a1.r7() ? .025 : .0144) * h.pj, gz = performance.now();
		if (Math.abs(kz - a49) > gx || Math.abs(l0 - a4A) > gx || eG + 500 < gz) return !1;
		if (eG = gz, a11 && ! function(kz, l0, eL) {
				ac.ec(eL) || -1 === (kz = bM.hA.a4c(kz, l0)) ? aN.a4b(eL) : aN.a4d(kz)
			}(kz, l0, eL), aM.gr || this.hO() || !b9.g2.gt(aD.eR) || aD.gq) return this.r0(), !1;
		if (aD.h2) {
			if (!a11) {
				if (!ac.ec(eL)) return !1;
				a4B = eT, qH[3].hO = !0
			}
		} else if (bM.hA.oE(eT)) a11 ? aN.a4U(55, 0) : bM.a4S.a4T = -1;
		else {
			if (a11) return !1;
			bM.hA.a4V(kz, l0) || (2 === aD.z4 ? ac.gG(eL) && (player = ac.eZ(eL), b9.g2.jK(player) || (qH[0].hO = !0, qH[0].kg = 1, qH[7].hO = !0)) : ac.em(eL) ? (a4B = am.eI.eK(eL)) && (gx = bL.eX(a4B), qH[8].hO = !0, player = ac.eY(gx) ? aD
				.ee : ac.eZ(gx)) : (a4B = eT, bM.hA.hB(aD.eR, eT) && (qH[0].hO = !0, qH[0].kg = 1, qH[1].hO = !0, qH[1].kg = bN.fI[2] ? 0 : 2), ac.h9(eL) || (ac.eY(eL) ? (player = aD.ee, hD(aD.eR) ? (qH[0].hO = !0, qH[0].kg = 0) : hF(aD
				.eR, player) && (qH[0].hO = !0, qH[0].kg = 3)) : (player = ac.eZ(eL)) === aD.eR ? (qH[0].hO = !0, qH[0].kg = 1, qH[7].hO = !0) : (qH[0].kg = 1, qH[5].hO = function(player) {
				return !b9.g2.jK(player) && !a4M(player) && b4.a4N(1, [player], !1)
			}(player), qH[7].hO = !b9.g2.jK(player), ea(player, aD.eR) ? (qH[4].hO = !b9.g2.jK(player) && !af.a4X(player) && b4.a4N(0, [player], !1), qH[6].hO = function(player) {
				if (0 === od.length) return !1;
				if (performance.now() > a4C + 4e3) return !(od = []);
				return !a4M(player) && ! function(player) {
					var aB;
					if (aD.hW)
						for (aB = od.length - 1; 0 <= aB; aB--)
							if (!ea(player, od[aB])) return 1;
					return
				}(player)
			}(player), hH(aD.eR, player) ? (qH[0].kg = 0, qH[0].hO = !0) : hF(aD.eR, player) && (qH[0].kg = 3, qH[0].hO = !0), qH[0].hO = this.a4Z()) : (qH[2].hO = !0, qH[0].hO = !0)))))
		}
		return this.a4R(kz, l0)
	}, this.a4R = function(kz, l0) {
		return eo = kz - Math.floor(a48 / 2), eq = l0 - Math.floor(a48 / 2), !!this.hO()
	}, this.a0Y = function(kz, l0) {
		return !!this.hO() && (aj.vh.hO ? !aj.vh.y4(kz, l0) && (aj.vh.hO = !1, be.df = !0) : function(rL, kz, l0) {
			kz = a4I(kz, l0);
			if (0 <= a4K(kz)) return !1;
			if ((1 === kz || 6 === kz) && 0 <= a4K(2)) return !1;
			if ((6 === kz || 9 === kz) && 0 <= a4K(10)) return !1;
			return rL.r0(), be.df = !0
		}(this, kz, l0))
	}, this.r0 = function() {
		for (var aB = qH.length - 1; 0 <= aB; aB--) qH[aB].hO = !1, qH[aB].kg = 0;
		aj.vh.hO = !1
	}, this.hO = function() {
		return this.a4Z() || aj.vh.hO
	}, this.a4Z = function() {
		for (var eh = qH.length, aB = 0; aB < eh; aB++)
			if (qH[aB].hO) return !0;
		return !1
	}, this.tq = function() {
		if (this.hO())
			if (aj.vh.hO) aj.vh.tq();
			else {
				var aB, he = tr,
					f1 = qH,
					eh = f1.length,
					a4h = (a48 + gap) / zoom;
				for (he.imageSmoothingEnabled = !0, he.setTransform(zoom, 0, 0, zoom, eo, eq), aB = 0; aB < eh; aB++) f1[aB].hO && tr.drawImage(f1[aB].canvas[f1[aB].kg], f1[aB].eo * a4h, f1[aB].eq * a4h);
				he.imageSmoothingEnabled = !1, he.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cA() {
	var j, canvas, a4i, a4j, a4k, a4l = -1;

	function a4m() {
		var a4n, xG = canvas.getContext("2d", {
			alpha: !0
		});
		xG.clearRect(0, 0, j, j), xG.fillStyle = bA.mj, xG.fillRect(0, 0, j, j), 0 === a4j && (xG.fillStyle = bA.mo, xG.fillRect(0, 0, j, j)), xG.fillStyle = bA.mn, xG.fillRect(0, 0, j, 1), xG.fillRect(0, 0, 1, j), xG.fillRect(0, j - 1, j, 1), xG
			.fillRect(j - 1, 0, 1, j), a4n = .9 * j / ab.get(0).width, xG.imageSmoothingEnabled = !0, xG.setTransform(a4n, 0, 0, a4n, Math.floor((j - a4n * ab.get(0).width) / 2), Math.floor((j - a4n * ab.get(0).height) / 2)), xG.drawImage(ab.get(0),
				0, 0), xG.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4p(kz, l0) {
		if (!aM.gr) return kz <= j + bb.gap && l0 >= aR.eq ? 9 : -1;
		if (kz <= 4 * j + bb.gap) {
			if (l0 >= aR.eq) return 0;
			if (l0 >= aR.eq - j - a4k * bb.gap) return 2
		} else if (kz <= 7 * j + bb.gap && l0 >= aR.eq - j - a4k * bb.gap) return 1;
		return -1
	}
	this.gr = !1, this.dX = function() {
		a4j = -1, this.gr = !1, a4k = a0.a1.r7() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4i = b9.ph.rY(1, (a0.a1.r7() ? .5 : .45) * j), a4m()
	}, this.a19 = function() {
		this.gr = !this.gr, this.gr ? (bB.a18(!1), aD.gq && bB.a3t && bB.a1A(!0), this.a4o()) : (a4j = -1, a4m(), !aD.kF || 1 !== aD.z4 || aD.h2 || aD.gq || a0.a1.setState(1)), be.df = !0
	}, this.a4o = function() {
		(aD.kF || aD.gq) && 1 === aD.z4 && (aV.lY(!0), aD.h2 || setTimeout(function() {
			ba.zF()
		}, 0), a0.a1.setState(0))
	}, this.gu = function(kz, l0) {
		return 0 <= (a4l = a4p(kz, l0)) || !aM.gr || aD.kF || aD.gq || bd.hO || aM.a19(), a4l
	}, this.a0Y = function(kz, l0) {
		kz = a4p(kz, l0);
		kz !== a4j && (a4j = kz, this.gr || a4m(), be.df = !0)
	}, this.a0Z = function(kz, l0) {
		kz = a4p(kz, l0);
		return -1 !== kz && a4l === kz && (this.gr ? aD.mG ? (0 <= kz && bB.a18(!1), !aD.gq) : (0 === kz ? aD.a0P() : 1 === kz ? this.a19() : 2 === kz && t.u(1, 0), !0) : 9 === kz && (this.a19(), !0))
	}, this.tq = function() {
		var i;
		this.gr ? (i = Math.floor(5.5 * j), tr.setTransform(1, 0, 0, 1, bb.gap, aR.eq), tr.fillStyle = bA.mj, tr.fillRect(0, 0, i, j), 0 === a4j ? (tr.fillStyle = bA.mo, tr.fillRect(0, 0, 4 * j, j)) : 1 === a4j && (tr.fillStyle = bA.mo, tr
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tr.fillStyle = bA.mn, tr.fillRect(0, 0, i, 1), tr.fillRect(0, 0, 1, j), tr.fillRect(4 * j, 0, 1, j), tr.fillRect(0, j - 1, i, 1), tr.fillRect(i - 1, 0, 1, j), tr.font = a4i, b9.ph
			.textBaseline(tr, 1), b9.ph.textAlign(tr, 1), tr.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a4t(bb.gap + 4 * j + (1.5 * j - i) / 2, aR.eq + .3 * j, i), i = 1, tr.setTransform(1, 0, 0, 1, bb.gap, aR.eq - i * a4k * bb.gap - i *
				j), tr.fillStyle = bA.mj, tr.fillRect(0, 0, 4 * j, j), a4j === i + 1 && (tr.fillStyle = bA.mo, tr.fillRect(0, 0, 4 * j, j)), tr.fillStyle = bA.mn, tr.fillRect(0, 0, 4 * j, 1), tr.fillRect(0, 0, 1, j), tr.fillRect(4 * j, 0, 1,
				j), tr.fillRect(0, j - 1, 4 * j, 1), tr.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), tr.setTransform(1, 0, 0, 1, 0, 0)) : tr.drawImage(canvas, bb.gap, aR.eq)
	}, this.pI = function(player) {
		return 0 !== ag.lm[player] && 2 !== aD.z4 && !b9.g2.jK(player)
	}, this.a4t = function(eo, eq, eh) {
		tr.setTransform(1, 0, 0, 1, eo, eq), tr.lineWidth = bb.y5, tr.strokeStyle = bA.mn, tr.beginPath(), tr.moveTo(0, 0), tr.lineTo(eh, eh), tr.moveTo(0, eh), tr.lineTo(eh, 0), tr.stroke()
	}
}

function cB() {
	var a4v, j, a4w, a4x, a4y, a4z, a50, a51, a52;

	function xC() {
		return aR.a5K(aN.a5G()) ? av.hO ? __fx.settings.keybindButtons ? aR.eq - 2 * aR.j - 3 * a4w : aR.eq - aR.j - 2 * a4w : __fx.settings.keybindButtons ? aR.eq - aR.j - 2 * a4w : aR.eq - a4w : bB.a5K(aN.a5J()) ? av.hO ? bB.xC() - aR.j - 2 * a4w :
			bB.xC() - a4w : av.hO ? h.j - aR.j - (bj.a47() + 1) * a4w : h.j - bj.a47() * bb.gap
	}

	function a57(dm, pO, id, gE, a5A, a5B, vp, a5C, a5D, a5E, a5P) {
		var aB, xG, a1t, pZ, a5Q = void 0 !== a5D,
			i = Math.floor(aQ.measureText(pO, aN.a4i) + 1.5 * a4x + (a5Q ? j : 1.5 * a4x));
		if (be.df = !0, a5P || bp.xZ(pO, a5D), i + 2 * a4w + aR.j > h.i && !a5Q && 50 !== id && 20 < pO.length) a57(dm, (a5P = b9.qh.a3C(pO))[0], id, gE, a5A, a5B, vp, a5C, a5D, a5E, !0), a57(dm, a5P[1], id, gE, a5A, a5B, vp, a5C, a5D, a5E, !0);
		else if (a5P = i + (50 === id ? a4y : 0), (a1t = document.createElement("canvas")).width = i, a1t.height = j, (xG = a1t.getContext("2d", {
				alpha: !0
			})).font = aN.a4i, b9.ph.textBaseline(xG, 1), b9.ph.textAlign(xG, 0), xG.clearRect(0, 0, i, j), xG.fillStyle = a5B, xG.fillRect(0, 0, i, j), xG.fillStyle = a5A, xG.fillText(pO, Math.floor(1.5 * a4x), Math.floor(j / 2)), a5Q && (xG
				.imageSmoothingEnabled = !0, aj.vh.y6(a5D, xG, i - j, 0, j)), 0 === (pZ = {
				eG: dm,
				pO: pO,
				id: id,
				player: gE,
				canvas: a1t,
				a5A: a5A,
				a5B: a5B,
				i: i,
				a5H: a5P,
				vp: vp,
				a5C: a5C,
				a5D: a5D,
				a5E: a5E
			}).eG || 0 < a4v.length && 0 < a4v[0].eG) a4v.unshift(pZ);
		else {
			for (aB = 1; aB < a4v.length; aB++)
				if (0 < a4v[aB].eG) return void a4v.splice(aB, 0, pZ);
			a4v.push(pZ)
		}
	}

	function a58(e1, sM, f1) {
		return "rgb(" + e1 + "," + sM + "," + f1 + ")"
	}

	function a5R(id, g9) {
		for (var eh = a4v.length, aB = 0; aB < eh; aB++) a4v[aB].id === id && g9-- <= 0 && (a4v.splice(aB, 1), aB--, eh--)
	}

	function a5S(id, player) {
		for (var ev = !1, aB = a4v.length - 1; 0 <= aB; aB--) a4v[aB].id !== id || player !== aD.ee && a4v[aB].player !== player || (a4v.splice(aB, 1), ev = !0);
		return ev
	}

	function a5p(pO) {
		a57(340, pO, 6, 0, a58(215, 245, 255), bA.mk, -1, !1)
	}
	this.a53 = "", this.dX = function() {
		var self;
		a51 = 0, a50 = a0.a1.r7() ? 7 : 12, a4z = {
			ys: [0, 0, 0],
			a54: [0, 0, 0],
			e9: [220, 180, 180],
			tp: [0, 0, 0],
			f2: [0, 0, 0]
		}, a4v = [], this.resize(), aD.h2 && this.zG(0, 18), bR.vU.vV[bR.eN].name.length && a5p(L(90, [bR.vU.vV[bR.eN].name])), a5p(L(91, [bR.es - 2 + "x" + (bR.et - 2)])), a5p(L(92, [b9.qh.yM(ao.a5q)])), ao.a5q !== ao.a5r && a5p(L(93, [b9.qh
			.yM(ao.a5r) + " (" + b9.qh.a38(100 * ao.a5r / ao.a5q, 1) + ")"
		])), 0 < ao.a5s && a5p(L(66, [b9.qh.yM(ao.a5s) + " (" + b9.qh.a38(100 * ao.a5s / ao.a5q, 1) + ")"])), 0 < ao.a5t && a5p(L(94, [b9.qh.yM(ao.a5t) + " (" + b9.qh.a38(100 * ao.a5t / ao.a5q, 1) + ")"])), 10 === aD.kD && a57(120, L(95), 6,
			0, a58(235, 255, 120), bA.mk, -1, !1), 0 !== (self = this).a53.length && (a57(200, self.a53, 0, 0, bA.mn, bA.mk, -1, !1), self.a53 = ""), aD.xS && a57(340, L(44), 6, 0, a58(255, 200, 0), bA.mk, -1, !1)
	}, this.resize = function() {
		var a59, aB;
		if (j = (j = Math.floor((a0.a1.r7() ? .031 : .0249) * h.pj)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4i = b9.ph.rY(1, this.fontSize), a4w = bb.gap, a4x = Math.floor(j / 5), 0 < a4v.length)
			for (a59 = a4v, a4v = [], aB = a59.length - 1; 0 <= aB; aB--) a57(a59[aB].eG, a59[aB].pO, a59[aB].id, a59[aB].player, a59[aB].a5A, a59[aB].a5B, a59[aB].vp, a59[aB].a5C, a59[aB].a5D, a59[aB].a5E, !0);
		this.a5F()
	}, this.a5F = function() {
		a52 = document.createElement("canvas");
		var pO = L(45),
			xG = (a4y = aQ.measureText(pO, this.a4i) + 5 * a4x, a52.height = j, a52.width = a4y, a52.getContext("2d", {
				alpha: !0
			}));
		xG.font = this.a4i, b9.ph.textBaseline(xG, 1), b9.ph.textAlign(xG, 1), xG.clearRect(0, 0, a4y, j), xG.fillStyle = bA.nA, xG.fillRect(0, 0, a4y, j), xG.fillStyle = bA.mn, xG.fillText(pO, Math.floor(a4y / 2), Math.floor(j / 2))
	}, this.a5G = function() {
		var eh;
		return av.hO ? av.i : 0 === (eh = a4v.length) ? 0 : 1 === eh ? a4v[0].a5H : a5I(a4v[0].a5H, a4v[1].a5H)
	}, this.a5J = function() {
		var eh = a4v.length;
		return av.hO ? eh ? a5I(av.i, a4v[0].a5H) : av.i : 0 === eh ? 0 : 1 === eh ? a4v[0].a5H : 2 === eh ? a5I(a4v[0].a5H, a4v[1].a5H) : a5I(a5I(a4v[0].a5H, a4v[1].a5H), a4v[2].a5H)
	}, this.gu = function(eo, eq) {
		for (var mD, a5L, a5M = xC(), aB = a4v.length - 1; 0 <= aB; aB--)
			if ((a5L = a5M - (aB + 1) * j) <= eq && eq < a5L + j) return 50 === a4v[aB].id ? eo >= h.i - a4y - a4w - a4v[aB].i && (eo >= h.i - a4y - a4w ? b7.g2.oZ(a4v[aB].player) : aH.m7(a4v[aB].player, 800, !1, 0), !0) : eo >= h.i - a4v[aB].i -
				a4w && (736 === a4v[aB].id ? (a5L = a4v[aB].pO.split(" "), window.open(a5L[a5L.length - 1], "_blank")) : a4v[aB].a5C && (a4v[aB].a5E && a4v[aB].a5E.f0 ? (a5L = a4v[aB].a5E.eT, mD = bL.ep(a5L) - 10, a5L = bL.er(a5L) - 10, aH
					.m6(mD, a5L, 19 + mD, 19 + a5L)) : a4v[aB].a5E && a4v[aB].a5E.f1 ? aH.m8(a4v[aB].player, a4v[aB].a5E.m9) : (aH.m7(a4v[aB].player, 800, !1, 0), 0 <= a4v[aB].vp && (mD = a4v[aB].vp, a4v[aB].vp = a4v[aB].player, a4v[
					aB].player = mD))), !0);
		return !1
	}, this.xZ = function(dm, pO, id, gE, a5A, a5B, vp, a5C, a5D, a5E) {
		a57(dm, pO, id, gE, a5A, a5B, vp, a5C, a5D, a5E)
	}, this.a5O = function(r) {
		a57(300, r, 252, 0, bA.mn, bA.mk, -1, !1)
	}, this.a3O = function(id) {
		for (var aB = a4v.length - 1; 0 <= aB; aB--) a4v[aB].id === id && (a4v[aB].eG = 1)
	}, this.zG = function(player, id) {
		0 === id ? (aQ.j4(player, 0), a5R(423, 0), a57(160, L(46, [ag.xa[player]]), 423, player, "rgb(10,220,10)", bA.mk, -1, !1)) : 1 === id ? (a5S(50, aD.ee), aQ.j4(player, 1), a57(360, L(47, [ag.xa[player]]), 0, player, bA.nT, bA.mk, -1, !0),
			aH.m7(player, 2700, !1, 0)) : 2 === id ? (aQ.j4(player, 2), a57(0, L(48), 0, player, "rgb(10,255,255)", bA.mk, -1, !0), aH.m7(player, 2700, !1, 0)) : 3 === id ? (aQ.j4(player, 2), a57(0, L(49, [ag.xa[player]]), 0, player, bA.mn,
			bA.mk, -1, !0), aH.m7(player, 2700, !1, 0)) : 4 === id ? this.a5T(1, player, player) : 5 === id ? 2 === ag.a2P[player] || b9.g2.jK(aD.eR) || (function(id, lh) {
			var aB, a5e = 0,
				eh = a4v.length;
			for (aB = 0; aB < eh; aB++)
				if (a4v[aB].id === id && lh <= ++a5e) return a4v.splice(aB, 1)
		}(1, 5), af.a5V(player) ? a57(180, L(50, [ag.xa[player]]), 1, player, a58(255, 200, 180), bA.mk, -1, !0) : (a5R(573, 0), a57(180, L(51, [ag.xa[player]]), 573, player, bA.nT, bA.mk, -1, !0))) : 18 === id ? a57(255, L(52), 18, 0, bA.mn,
			bA.mk, -1, !1) : 21 === id ? a57(220, L(53), id, 0, bA.mn, bA.mk, -1, !1) : 22 === id ? this.a5T(2, player, player) : 59 === id && a57(0, L(54), id, 0, bA.nk, bA.mk, 0, !1)
	}, this.a0K = function(r) {
		a57(200, L(55, [r]), 94, 0, bA.mn, bA.nP, -1, !1)
	}, this.zS = function(a5W) {
		if (aD.eR === a5W && !aD.kF)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a57(0, "Your Win Count is now " + __fx.wins.count, 3, a5W, bA.mn, bA.mk, -1, !0);
		ag.gU[a5W] && (aQ.j4(a5W, 2), aD.jw < 100 ? a57(0, L(49, [ag.xa[a5W]]), 3, a5W, bA.mn, bA.mk, -1, !0) : a57(0, L(56, [ag.xa[a5W]]), 3, a5W, bA.mn, bA.mk, -1, !0))
	}, this.a4b = function(eL) {
		var a5Y, pO, a5X = "(" + bL.ep(eL >> 2) + ", " + bL.er(eL >> 2) + ")",
			a5C = !1,
			player = 0;
		ac.ec(eL) ? ac.eY(eL) ? a5X = L(57, [a5X]) : (player = ac.eZ(eL), pO = L(58, [b9.xG.a25(ag.zh[player], b9.ph.rY(0, 10), 150)]) + "   ", pO = (pO += L(59, [b9.qh.yM(ag.gi[player])]) + "   ") + L(60, [b9.qh.yM(ag.gU[player])]) + "   ", aD
				.hW && (a5Y = bf.zP[bf.kI[bf.ef[player]]], pO += L(61) + ": " + a5Y + "   "), b9.g2.jK(player) && (pO += L(62) + ": " + aE.k7[aE.hL[player]] + "   "), a5X = pO = (pO += L(63, [player]) + "   ") + L(64, [a5X]), a5C = !0) : a5X = ac
			.em(eL) ? L(65, [a5X]) + "   #" + ac.eP(eL) : L(66, [a5X]), be.df = !0, a5R(55, 0), a57(220, a5X, 55, player, bA.mn, bA.mk, -1, a5C, void 0, void 0, !0)
	}, this.a4d = function(a5Z) {
		var ke = bM.y,
			player = ke.a5a[a5Z] >> 3,
			pO = (be.df = !0, a5R(55, 0), L(67, [ag.xa[player]]) + "   ");
		a57(220, pO += L(59, [ke.a5b[a5Z]]), 55, player, bA.mn, bA.mk, -1, !0)
	}, this.oJ = function(o6, a5c, oK) {
		o6 === aD.eR ? a57(175, " " + L(68, [ag.xa[a5c]]) + ": ", 1001, a5c, a58(200, 255, 210), bA.mk, -1, !0, oK) : this.a5d(o6, oK)
	}, this.a5d = function(o6, oK) {
		a5R(1e3, 0), a57(175, ag.xa[o6] + ": ", 1e3, o6, bA.mn, "rgba(5,60,25,0.9)", -1, !0, oK)
	}, this.zR = function() {
		var r;
		aD.z9 ? (r = L(69), aQ.zQ(L(70), 2, 1, 12), a57(0, r, 40, 0, "rgb(10,220,10)", bA.mk, -1, !1)) : (r = L(71), aQ.zQ(L(72), 2, 0, 16), a57(0, r, 41, 0, bA.mn, bA.mk, -1, !1))
	}, this.xN = function() {
		var g9 = ag.xa,
			ek = aD.data;
		a57(300, g9[0] + " [" + aD.zM.xU(ek.elo[0]) + "] vs " + g9[1] + " [" + aD.zM.xU(ek.elo[1]) + "]", 65, 0, bA.me, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5f = function(r) {
		a57(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5g = function(a5h) {
		a57(0, L(a5h ? 73 : 74), 247, 0, bA.nj, bA.mk, -1, !1)
	}, this.xW = function(xT, xV, a5i) {
		var ek = aD.data,
			g9 = ag.xa;
		a57(0, g9[0] + ": " + aD.zM.xU(ek.elo[0]) + " -> " + xT, 66, 0, bA.mn, a5i[0], -1, !1), a57(0, g9[1] + ": " + aD.zM.xU(ek.elo[1]) + " -> " + xV, 66, 1, bA.mn, a5i[1], -1, !1)
	}, this.oa = function(player, id) {
		0 === id ? a5S(50, player) ? (a57(128, L(75, [ag.xa[player]]), 52, player, a58(180, 255, 180), bA.mk, -1, !0), af.pG(player, 2, 255)) : a57(384, L(76, [ag.xa[player]]), 51, player, a58(210, 210, 255), bA.mk, -1, !0) : a5S(51, player) ? (
			a57(128, L(77, [ag.xa[player]]), 52, player, bA.mn, "rgba(60,120,10,0.9)", -1, !0), af.pG(player, 2, 255)) : (a57(384, L(78, [ag.xa[player]]), 50, player, bA.mn, "rgba(90,90,90,0.9)", -1, !0), af.pG(player, 2, 96))
	}, this.oe = function(ys, target) {
		var color = a58(210, 255, 210);
		1 < ys.length ? a57(230, L(79, [ys.length, ag.xa[target]]), 66, target, color, bA.mk, -1, !0) : a57(230, L(80, [ag.xa[ys[0]], ag.xa[target]]), 66, ys[0], color, bA.mk, target, !0)
	}, this.a5j = function(player, target) {
		a57(230, L(81, [ag.xa[player], ag.xa[target]]), 66, player, bA.mn, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4U = function(id, g9) {
		a5R(id, g9)
	}, this.zB = function(id, player) {
		a5S(id, void 0 === player ? aD.ee : player)
	}, this.a5k = function(id) {
		for (var aB = a4v.length - 1; 0 <= aB; aB--)
			if (a4v[aB].id === id) return a4v[aB];
		return null
	}, this.oV = function(a5l, a5m, player) {
		2 !== ag.a2P[aD.eR] && (a57(200, a5l = 1 === a5l ? L(82, [ag.xa[player]]) : L(83, [b9.qh.yM(a5l), ag.xa[player]]), 30, player, "rgb(190,255,190)", bA.mk, -1, !0), a5m) && (a5l = 1 === a5m ? L(84) : L(85, [b9.qh.yM(a5m)]), bp.xZ(a5l))
	}, this.a5o = function(a5l, player) {
		2 !== ag.a2P[aD.eR] && (a5R(31, 0), 2 === ag.a2P[player] || player >= aD.jw ? a57(150, 1 === a5l ? L(86, [ag.xa[player]]) : L(87, [ag.xa[player], b9.qh.yM(a5l)]), 31, player, bA.me, "rgba(205,205,205,0.9)", -1, !0) : a57(150, 1 === a5l ?
			L(88, [ag.xa[player]]) : L(89, [ag.xa[player], b9.qh.yM(a5l)]), 31, player, bA.me, "rgba(205,255,205,0.9)", -1, !0))
	}, this.zA = function(br) {
		for (var f2 = be.jt(), aB = 2; 0 <= aB; aB--) 0 < a4z.tp[aB] && (br || a4z.f2[aB] < f2 - 220) && this.a5u(aB)
	}, this.a5u = function(id) {
		var pO, eh = a4z.tp[id],
			player = a4z.ys[id];
		a4z.tp[id] = 0, 1 === eh ? (0 === id ? pO = L(96, [ag.xa[player], ag.xa[a4z.a54[0]]]) : 1 === id ? pO = L(97, [ag.xa[player]]) : 2 === id ? pO = L(98, [ag.xa[player]]) : 3 === id && (pO = L(99, [ag.xa[player]])), a5R(7, 0), a57(a4z.e9[
			id], pO, 7, a4z.a54[id], bA.mn, bA.mk, -1, !0)) : (pO = L(0 === id ? 100 : 1 === id ? 101 : 102, [eh]), a5R(7, 0), a57(a4z.e9[id], pO, 7, player, bA.mn, bA.mk, -1, !1))
	}, this.a5T = function(id, h6, vp) {
		var f2 = be.jt(),
			eh = a4z.tp[id] + 1;
		a4z.tp[id]++, a4z.ys[id] = h6, a4z.a54[id] = vp, 1 === eh && (a4z.f2[id] = f2), (1 === eh && (aD.z7 < 32 || 2 === aD.z4) || 1 < eh && (a4z.f2[id] < f2 - 140 || 2 === aD.z4)) && this.a5u(id)
	}, this.ir = function() {
		b1.ir();
		for (var hq = (hq = a4v.length - a50) <= 1 ? 1 : hq * hq, aB = a4v.length - 1; 0 <= aB; aB--) 0 < a4v[aB].eG && (a4v[aB].eG -= hq, a4v[aB].eG <= 0) && (be.df = !0, a4v.splice(aB, 1));
		! function() {
			var g9, aB;
			if (128 !== a51 && !(++a51 < 128))
				for (g9 = 5, aB = al.jx - 1; 0 <= aB; aB--) 1 === ag.a2P[al.jy[aB]] && 0 < g9-- && a57(240, L(99, [ag.xa[al.jy[aB]]]), 1, al.jy[aB], bA.me, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.zA(!1)
	}, this.tq = function() {
		for (var wG, eq = xC(), aB = a4v.length - 1; 0 <= aB; aB--) wG = eq - (aB + 1) * j, 50 === a4v[aB].id ? (tr.drawImage(a4v[aB].canvas, h.i - a4v[aB].i - a4y - a4w, wG), tr.drawImage(a52, h.i - a4y - a4w, wG)) : tr.drawImage(a4v[aB].canvas,
			h.i - a4v[aB].i - a4w, wG)
	}
}

function cC() {
	var a5w, a5x, a5y, i, j, font, pO;

	function a63(a64) {
		return a64 < 10 ? "0" + a64 : String(a64)
	}
	this.dX = function() {
		pO = L(103)
	}, this.resize = function() {
		i = Math.floor((a0.a1.r7() ? .53 : .36) * h.pj), j = Math.floor(.065 * i), font = b9.ph.rY(1, Math.floor(.9 * j)), a5y--, this.setTime()
	}, this.ir = function() {
		this.setTime() && (be.df = !0)
	}, this.setTime = function() {
		for (var dm = new Date, a5z = dm.getUTCMinutes(), a60 = dm.getUTCSeconds(), a61 = [0, 10, 20, 25, 30, 35, 40, 45, 50], a62 = (a5x = 3600 - 60 * a5z - a60, a5x %= 300, 300), aB = 0; aB < a61.length; aB++)
			if ((60 * a5z + a60 + a5x) % 3600 == 60 * a61[aB]) {
				a62 = 0;
				break
			} return a5x += a62, a5w = pO + a63(Math.floor(a5x / 60)) + ":" + a63(a5x % 60), a5y !== (a5y = 60 * a5z + a60) && (i = aQ.measureText(a5w, font), i += Math.floor(.4 * j), !0)
	}, this.tq = function() {
		tr.lineWidth = 1 + Math.floor(j / 15), tr.translate(h.i - j, Math.floor(.5 * (h.j + i))), tr.rotate(-Math.PI / 2), tr.fillStyle = bA.mn, tr.fillRect(0, 0, i, j), tr.strokeStyle = bA.me, tr.strokeRect(0, 0, i, j + 10), tr.fillStyle = bA
			.me, tr.font = font, b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 1), tr.fillText(a5w, Math.floor(i / 2), Math.floor(.59 * j)), tr.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cD() {
	var a4v, a65, a4i, j, a66;

	function a68(aB) {
		var a6A = !0,
			hm = bA.mn,
			i = (a4v[aB].j7 === aD.ee ? a4v[aB].xG.fillStyle = bA.my : (ac.a6B(a4v[aB].j7), a4v[aB].xG.fillStyle = b9.color.mh(bN.fG[0], bN.fG[1], bN.fG[2], .87), 400 < b9.pq.a1X(bN.fG, 0, 2) && (a6A = !1, hm = bA.me)), a4v[aB].canvas.width),
			s5 = (a4v[aB].xG.clearRect(0, 0, i, j), a4v[aB].xG.fillRect(0, 0, i, j), a4v[aB].xG.fillStyle = hm, ! function(xG, i, j) {
				xG.fillRect(0, 0, i, 1), xG.fillRect(0, j - 1, i, 1), xG.fillRect(0, 0, 1, j), xG.fillRect(i - 1, 0, 1, j)
			}(a4v[aB].xG, i, j), a65 + 2 * j < i && (a4v[aB].xG.fillRect(i - a65 - j, 0, 1, j), a4v[aB].xG.fillText(ag.xa[a4v[aB].j7], Math.floor((i - a65) / 2), Math.floor(.57 * j))), 0 !== a4v[aB].id ? 0 : j);
		a4v[aB].xG.fillText(b9.qh.yM(a4v[aB].hL), Math.floor(i - a65 / 2 - s5), Math.floor(.57 * j)),
			function(aB, i, s5, a6A) {
				a4v[aB].xG.fillStyle = a6A ? bA.mp : bA.ml;
				a6A = Math.floor(a65 * a4v[aB].hL / a4v[aB].a6H);
				a4v[aB].xG.fillRect(Math.floor(i - a65 - s5), j - a66, a6A, a66)
			}(aB, i, s5, a6A), 0 === a4v[aB].id ? (a6E(aB, i, a6A, hm), function(aB, i, a6A) {
				a4v[aB].xG.strokeStyle = a6A ? bA.n5 : bA.nF, a4v[aB].xG.fillRect(j, 0, 1, j);
				a6A = i - j;
				a4v[aB].xG.beginPath(), a4v[aB].xG.moveTo(Math.floor(.3 * j + a6A), Math.floor(j / 2)), a4v[aB].xG.lineTo(Math.floor(j - .3 * j + 0 + a6A), Math.floor(j / 2)), a4v[aB].xG.stroke(), a4v[aB].xG.beginPath(), a4v[aB].xG.moveTo(Math
					.floor(j / 2 + a6A), Math.floor(.3 * j)), a4v[aB].xG.lineTo(Math.floor(j / 2 + a6A), Math.floor(j - .3 * j + 0)), a4v[aB].xG.stroke()
			}(aB, i, a6A)) : a6E(aB, 2 * j, a6A, hm)
	}

	function a6E(aB, i, a6A, hm) {
		a4v[aB].xG.strokeStyle = a4v[aB].a6I ? bA.mw : a6A ? bA.nL : bA.nM, a4v[aB].xG.fillStyle = hm, a4v[aB].xG.fillRect(i - j, 0, 1, j), a4v[aB].xG.lineWidth = Math.max(Math.floor(j / 12), 3), a4v[aB].xG.lineCap = "round";
		a6A = .35;
		i = j + 1, a4v[aB].xG.beginPath(), a4v[aB].xG.moveTo(Math.floor(i - a6A * j + 0), Math.floor(a6A * j)), a4v[aB].xG.lineTo(Math.floor(i - j + a6A * j), Math.floor(j - a6A * j + 0)), a4v[aB].xG.stroke(), a4v[aB].xG.beginPath(), a4v[aB].xG
			.moveTo(Math.floor(i - j + a6A * j), Math.floor(a6A * j)), a4v[aB].xG.lineTo(Math.floor(i - a6A * j + 0), Math.floor(j - a6A * j + 0)), a4v[aB].xG.stroke()
	}

	function a6S(eh) {
		for (var hL, aB = eh - 1; 0 <= aB; aB--) hL = ad.ft(aD.eR, aB), a4v[aB].hL !== hL && (a4v[aB].hL = hL, a4v[aB].a6H = hL > a4v[aB].a6H ? hL : a4v[aB].a6H, a4v[aB].a69 = !0)
	}

	function a67(a42) {
		a42.canvas = document.createElement("canvas"), bR.va.font = a4i;
		var i = a65;
		a42.j7 < aD.ee && 0 === a42.id && (i += Math.floor(bR.va.measureText(ag.xa[a42.j7] + "000").width)), i += j, 0 === a42.id && (i += j), a42.canvas.width = i, a42.canvas.height = j, a42.xG = a42.canvas.getContext("2d", {
			alpha: !0
		}), a42.xG.font = a4i, b9.ph.textBaseline(a42.xG, 1), b9.ph.textAlign(a42.xG, 1)
	}

	function a6O(aB) {
		return aU.a6V() ? h.i - a4v[aB].canvas.width - bb.gap : aU.eo
	}

	function a6P(aB) {
		return Math.floor(2 * bb.gap + (aU.a6V() ? aW.j + bb.gap : 0) + aU.j + aB * (1.3 * j))
	}
	this.dX = function() {
		a4v = [], this.resize()
	}, this.resize = function() {
		a4i = aN.a4i, j = aN.fontSize + 5, j = Math.floor(1.25 * j), a0.a1.r7() && (j = Math.floor(1.25 * j)), a66 = Math.floor(.15 * j), bR.va.font = a4i, a65 = Math.floor(bR.va.measureText("02 000 000 0000").width);
		for (var aB = a4v.length - 1; 0 <= aB; aB--) a67(a4v[aB]), a68(aB)
	}, this.lY = function() {
		for (var aB = a4v.length - 1; 0 <= aB; aB--) a4v[aB].a69 && (a4v[aB].a69 = !1, a68(aB))
	}, this.gu = function(kz, l0) {
		if (2 !== aD.z4 && 0 !== ag.lm[aD.eR] && !aD.gq && !b9.g2.jK(aD.eR))
			for (var a6J, a6K, a6L, a6M = a0.a1.r7() ? j : 0, a6N = a0.a1.r7() ? Math.floor(.15 * j) : 0, aB = a4v.length - 1; 0 <= aB; aB--)
				if (a6J = a6O(aB), a6K = a6P(aB), a6L = a4v[aB].canvas.width, a6K - a6N <= l0 && l0 <= a6K + j + a6N) {
					if (a6J - a6M <= kz && kz <= a6J + j + a6M) return a4v[aB].a6I || (a4v[aB].a69 = !0, a4v[aB].a6I = !0, 0 === a4v[aB].id && b7.h3.oH(a4v[aB].j7)), !0;
					if (0 === a4v[aB].id && a6J + a6L - j - a6M <= kz && kz <= a6J + a6L + a6M) return bU.a4O(3), b7.h3.hE(aR.h8(), a4v[aB].j7), !0
				} return !1
	}, this.ir = function() {
		var eh;
		0 === ag.lm[aD.eR] || b9.g2.jK(aD.eR) && !aD.gq || (function(eh) {
			if (a4v.length !== eh) return 1;
			for (var aB = eh - 1; 0 <= aB; aB--)
				if (a4v[aB].id !== ad.fn(aD.eR, aB) || a4v[aB].j7 !== ad.fs(aD.eR, aB)) return 1;
			return
		}(eh = ad.fm(aD.eR)) && function(eh) {
			var aB, id, j7, f1, hL, a59 = [];
			loop: for (aB = 0; aB < eh; aB++) {
				for (id = ad.fn(aD.eR, aB), j7 = ad.fs(aD.eR, aB), f1 = 0; f1 < a4v.length; f1++)
					if (a4v[f1].id === id && a4v[f1].j7 === j7) {
						a59.push(a4v.splice(f1, 1)[0]);
						continue loop
					} hL = ad.ft(aD.eR, aB), a67(hL = {
					j7: j7,
					hL: hL,
					a6H: hL,
					id: id,
					a69: !0,
					a6I: !1,
					canvas: null,
					xG: null
				}), a59.push(hL)
			}
			a4v = a59
		}(eh), a6S(eh))
	}, this.a6U = function(gE) {
		for (var eh = Math.min(a4v.length, ad.fm(aD.eR)), aB = 0; aB < eh; aB++)
			if (a4v[aB].j7 === gE) return void(a4v = [])
	}, this.tq = function() {
		if (0 !== ag.lm[aD.eR] && (!b9.g2.jK(aD.eR) || aD.gq))
			for (var aB = a4v.length - 1; 0 <= aB; aB--) tr.drawImage(a4v[aB].canvas, a6O(aB), a6P(aB))
	}
}

function cE() {
	var a4v, k1, a6W, a6X, j, a4i, fontSize, a6Y, a6Z, a6a, a6b, canvas, xG, lz, a6c;

	function u8(aB) {
		return L(0 === aB ? 104 : 1 === aB ? 105 : 2 === aB ? 106 : 107)
	}

	function a6j() {
		tr.drawImage(canvas, bb.gap + (aD.hW ? bb.gap + bg.a6k() : 0), a6l + 2 * bb.gap)
	}

	function a6d() {
		canvas.width = a4v[0].width + a6a, canvas.height = j + a6a, (xG = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4v[0].width + a6a, j + a6a), xG.translate(Math.floor(a6a / 2), Math.floor(a6a / 2)), xG.lineWidth = a6a, xG.fillStyle = 1 === a4v[0].a6i ? bA.ms : bA.mk, a6m(), xG.fill(), xG.strokeStyle = 1 === a4v[0].a6i ? bA.me :
			bA.mn, a6m(), xG.stroke(), b9.ph.textAlign(xG, 1), b9.ph.textBaseline(xG, 1), xG.fillStyle = 1 === a4v[0].a6i ? bA.me : bA.mn, xG.font = a4i[0], xG.fillText(u8(a4v[0].a6h), Math.floor(a4v[0].width / 2), Math.floor(.72 * a6Y[0] * j)), xG
			.font = a4i[1], xG.fillText(a4v[0].pO, Math.floor(a4v[0].width / 2), Math.floor((a6Y[0] + .48 * a6Y[1]) * j))
	}

	function a6m() {
		xG.beginPath(), xG.moveTo(a6b, 0), xG.lineTo(a4v[0].width - a6b, 0), xG.lineTo(a4v[0].width, a6b), xG.lineTo(a4v[0].width, j - a6b), xG.lineTo(a4v[0].width - a6b, j), xG.lineTo(a6b, j), xG.lineTo(0, j - a6b), xG.lineTo(0, a6b), xG.closePath()
	}
	this.dX = function() {
		k1 = 4, a6W = a6X = lz = 0, a4v = [], a4i = new Array(2), fontSize = new Array(2), (a6Y = new Array(2))[0] = .3, a6Y[1] = .7, a6Z = new Array(4), canvas = document.createElement("canvas"), a6c = be.eG + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.r7() ? .0725 : .058) * h.pj), fontSize[0] = Math.floor(.85 * a6Y[0] * j), fontSize[1] = Math.floor(.85 * a6Y[1] * j), a4i[0] = b9.ph.rY(1, fontSize[0]), a4i[1] = b9.ph.rY(1, fontSize[1]), aB = a6Z.length -
			1; 0 <= aB; aB--) a6Z[aB] = this.measureText(u8(aB) + "000", a4i[0]);
		if (a6a = Math.floor(1 + .05 * j), a6b = Math.floor(.2 * j), 0 < a4v.length) {
			for (aB = a4v.length - 1; 0 <= aB; aB--) i = this.measureText(a4v[aB].pO + "00", a4i[1]), a4v[aB].width = i < a6Z[aB] ? a6Z[aB] : i;
			a6d()
		}
	}, this.ir = function() {
		0 !== k1 && (4 === k1 ? be.eG > a6c && (k1 = 0, 1 === aD.z4) && aQ.zQ(bR.vU.vV[bR.eN].name, 3, 1, 9) : (1 === k1 ? (0 === a6W && (a6d(), a6W = 1e-4), 1 <= (a6W += .002 * (be.eG - lz)) && (a6X = 0, k1 = 2, a6W = 1), be.df = !0) : 2 ===
			k1 ? ((a6X += (be.eG - lz) / 1e3) > a4v[0].e9 || 1 < a6X && 1 < a4v.length) && (k1 = 3) : 3 === k1 && ((a6W -= .002 * (be.eG - lz)) <= 0 && (a6W = 0, a4v.shift(), k1 = 0 < a4v.length ? 1 : 0), be.df = !0), lz = be.eG))
	}, this.measureText = function(pO, a4i) {
		return tr.font = a4i, Math.floor(tr.measureText(pO).width)
	}, this.j4 = function(a6g, aB) {
		this.zQ(ag.xa[a6g], aB, 1, 0 === aB ? 3 : 7)
	}, this.zQ = function(pO, a6h, a6i, e9) {
		var i;
		pO.length && (i = (i = this.measureText(pO + "00", a4i[1])) < a6Z[a6h] ? a6Z[a6h] : i, a4v.push({
			pO: pO,
			width: i,
			a6h: a6h,
			a6i: a6i,
			e9: e9
		}), 0 === k1) && (a6W = 0, k1 = 1, lz = be.eG)
	}, this.tq = function() {
		0 !== k1 && 0 !== a6W && (a6W < 1 ? (tr.globalAlpha = a6W, a6j(), tr.globalAlpha = 1) : a6j())
	}
}

function cm() {
	var j, canvas, xG, a6n, a6o, a6p, a6q, a69, a6r, a6s, a6t, a6u, a5h = !1,
		a1t = (this.hO = !1, this.i = 0, new Array(2)),
		a6v = 0;

	function lZ() {
		var i = av.i,
			ke = (a69 = !1, xF(xG, i, j), Math.floor(i / 2));
		1 === a6n ? (xG.fillStyle = bA.n7, xG.fillRect(ke, 0, ke, j)) : -1 === a6n && (xG.fillStyle = bA.nN, xG.fillRect(0, 0, ke, j)), xH(xG, i, j, 2);
		var ke = (ke = Math.floor(.25 * j)) < 2 ? 2 : ke,
			a5q = (xG.fillStyle = bA.mt, Math.floor((j - 4) * a6o[1] / a6p[1]));
		0 < a5q && xG.fillRect(2, j - 2 - a5q, ke, a5q), 0 < (a5q = Math.floor((j - 4) * a6o[0] / a6p[0])) && xG.fillRect(i - 2 - ke, j - 2 - a5q, ke, a5q);
		ke = (ke = Math.floor(j / 8)) < 2 ? 2 : ke, xJ(xG, Math.floor(.4 * j), 0, j, ke, .5, !1), xJ(xG, Math.floor(i - 1.4 * j), 0, j, ke, .5, !0), a5q = 1.1 * j / a1t[0].width;
		xG.imageSmoothingEnabled = !0, xG.setTransform(a5q, 0, 0, a5q, (i - a5q * a1t[0].width) / 2, -.05 * j), xG.drawImage(a1t[+a5h], 0, 0), xG.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a70() {
		a6u = -1, a5h = ah.a71(), aN.a3O(257), aN.a5g(a5h), av.hO = !0, a69 = !0, a6r = 360;
		for (var f9, dm = 0, aB = al.jx - 1; 0 <= aB; aB--) b9.g2.jK(al.jy[aB]) || (dm += ag.gU[al.jy[aB]]);
		a5h ? a6p[0] = Math.max(bK.dn(3 * dm, 4), 1) : aD.hW ? 9 === aD.kD && 8 === bf.kI[bg.l8()] ? a6p[0] = Math.max(dm, 1) : (f9 = bK.dn(100 * bg.a2q(), aD.jg), f9 = bK.pF(200 - 2 * f9, 40, 100), f9 = bK.dn(f9 * dm, 100), a6p[0] = Math.max(f9,
			1)) : a6p[0] = Math.max(bK.dn(3 * dm, 5), 1), a6p[1] = Math.max(dm - a6p[0], 1)
	}

	function a6w() {
		a6t = be.jt(), a69 = !0, a6r = a6n = 0, a6q = [], av.hO = !1, aN.zB(247), a6o[0] = a6o[1] = 0, aN.a3O(673)
	}

	function xC() {
		return aR.a5K(aN.a5G()) ? __fx.settings.keybindButtons ? aR.eq - 2 * (j + bb.gap) : aR.eq - j - bb.gap : bB.a5K(aN.a5J()) ? bB.xC() - j - bb.gap : h.j - j - bj.a47() * bb.gap
	}
	this.dY = function() {
		for (var aB = 0; aB < 2; aB++) a1t[aB] = b9.canvas.xr(ab.get(3), 8 - aB, bA.nw), a1t[aB] = b9.canvas.a1v(a1t[aB])
	}, this.dX = function() {
		a6t = -1e4, a6s = a6v = 0, a6u = -1, this.hO = !1, a69 = a5h = !1, a6o = [a6n = a6r = 0, 0], a6p = [1, 1], a6q = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, xG = canvas.getContext("2d", {
			alpha: !0
		}), lZ()
	}, this.lY = function() {
		a69 && lZ()
	}, this.gu = function(eo, eq) {
		return !!this.hO && !(eo < h.i - this.i - bb.gap || eq < xC() || (aD.gq || this.hP(aD.eR) && (aM.gr && aM.a19(), b7.h3.hQ(eo > h.i - bb.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ir = function() {
		0 < a6s ? 0 === --a6s && a6w() : this.hO ? 180 == --a6r && 3 * a6o[0] < a6p[0] ? a6w() : a6o[0] >= a6p[0] ? a5h ? bQ.yh.yz() : bQ.yh.z3() : a6o[1] >= a6p[1] ? a6s = 4 : a6r <= 0 && a6w() : ! function() {
			var a73 = be.jt();
			if (a73 % 40 == 14) {
				if (a6v) return !(a73 < a6v) && !(a73 < a6t + 535) && (a6v = a73 + 1071, b9.g2.a2S()) ? (a70(), 1) : 0;
				(1 === al.jx || (aD.hW ? bg.a2q() : ag.gU[lB[0]]) >= bK.dn(96 * aD.jg, 100)) && (a6v = a73 + 535)
			}
			return
		}() && 0 <= a6u && (aN.xZ(250, L(108, [ag.xa[a6u]]), 673, a6u, bA.mn, bA.mk, -1, !0), a70())
	}, this.z5 = function() {
		this.hO && a6o[0] < a6p[0] && a6w()
	}, this.pH = function(player, a74) {
		var a75 = L(a74 ? 109 : 110, [ag.xa[player]]),
			a75 = (aN.xZ(450, a75, 257, player, a74 ? bA.n5 : bA.nK, bA.mk, -1, !0), a6q.push(player), a69 = !0, aD.kF ? Math.max(a6p[0], a6p[1]) : ag.gU[player]),
			a75 = Math.max(a75, 1);
		a74 ? a6o[0] += a75 : a6o[1] += a75, player === aD.eR && (a6n = a74 ? 1 : -1)
	}, this.tq = function() {
		var eq;
		this.hO && (eq = xC(), tr.drawImage(canvas, h.i - this.i - bb.gap, eq))
	}, this.hR = function(player) {
		return !(!aD.kF && be.jt() < a6t + 140 || 0 !== a6r || !b9.g2.gs(1) || !b9.g2.gt(player) || 10 <= jh[player] && !b9.g2.a2l(player, 9))
	}, this.hP = function(gE) {
		if (!b9.g2.gs(1)) return !1;
		if (!b9.g2.gt(gE)) return !1;
		if (!this.hO) return !1;
		for (var aB = a6q.length - 1; 0 <= aB; aB--)
			if (a6q[aB] === gE) return !1;
		return !0
	}, this.hN = function(player) {
		a6u = player
	}
}

function cF() {
	var i, eo, a76, canvas, xG, hO, iG, a3F, a4i, a69, a77 = 11 / 12;

	function a79() {
		var a6G = Math.floor(iG * (i - 2 * a76)),
			a7C = 1 + Math.floor(.0625 * aR.j),
			a7D = 1 + Math.floor(.3 * aR.j),
			a7E = Math.floor(.55 * aR.j);
		xG.clearRect(0, 0, i, aR.j), xG.fillStyle = bA.mj, xG.fillRect(0, 0, a76, aR.j), xG.fillRect(a76 + a6G, 0, i - a76 - a6G, aR.j), xG.fillStyle = iG < 1 / 3 ? "rgba(" + Math.floor(3 * iG * 130) + ",130,0,0.85)" : iG < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iG - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iG - 2 / 3) * 130) + ",0.85)", xG.fillRect(a76, 0, a6G, aR.j), xG.fillStyle = bA.mn, xG.fillRect(0, 0, i, 1), xG.fillRect(0, aR.j - 1, i, 1), xG
			.fillRect(0, 0, 1, aR.j), xG.fillRect(a76, 0, 1, aR.j), xG.fillRect(a76 + a6G, 0, 1, aR.j), xG.fillRect(i - a76, 0, 1, aR.j), xG.fillRect(i - 1, 0, 1, aR.j), xG.fillRect(Math.floor(.25 * aR.j) + a7D, Math.floor((aR.j - a7C) / 2), aR.j -
				2 * a7D, a7C), xG.fillRect(Math.floor(i - 1.25 * aR.j) + a7D, Math.floor((aR.j - a7C) / 2), aR.j - 2 * a7D - a7D % 2, a7C), xG.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a7C) / 2), a7D, a7C, aR.j - 2 * a7D - a7D % 2),
			a3F = b9.g2.iF(aD.eR, aR.h8()), xG.fillText(b9.qh.yM(a3F) + " (" + b9.qh.a38(100 * iG, +(iG < .1)) + ")", Math.floor(.5 * i), a7E)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iG = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a15(arg1);

	function a7J(a1S) {
		return !(1 < a1S && 1 === iG || (1 < a1S && a1S * iG - iG < 1 / 1024 ? a1S = (iG + 1 / 1024) / iG : a1S < 1 && iG - a1S * iG < 1 / 1024 && (a1S = (iG - 1 / 1024) / iG), iG = bK.pF(iG * a1S, 1 / 1024, 1), a79(), 0))
	}

	function a7K(kz) {
		return iG !== (iG = bK.pF((kz - eo - a76) / (i - 2 * a76), 1 / 1024, 1)) && (a79(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a79(), be.df = !0
	}, this.eq = 0, this.gv = !1, this.dX = function() {
		hO = !aD.h2 && !aD.gq, a69 = !1, iG = .5, a3F = 0, this.gv = !1, this.resize()
	}, this.resize = function() {
		a0.a1.r7() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pj), i = h.i - 4 * bb.gap - this.j) : (i = Math.floor((a0.a1.r7() ? .65 : .389) * h.pj), i += 12 - i % 12, this.j = Math.floor(i / 12)), a76 = Math.floor(3 * this.j / 2), a4i =
			b9.ph.rY(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, tr), canvas.height = this.j, (xG = canvas.getContext("2d", {
				alpha: !0
			})).font = a4i, b9.ph.textBaseline(xG, 1), b9.ph.textAlign(xG, 1), this.a78(), a79()
	}, this.a78 = function() {
		eo = a0.a1.r7() && h.i < .8 * h.j ? this.j + 3 * bb.gap : Math.floor((h.i - i) / 2), this.eq = h.j - this.j - bj.a47() * bb.gap
	}, this.lY = function() {
		a69 && (a69 = !1, a79())
	}, this.hO = function() {
		return !(!hO || aM.gr && eo < Math.floor(bb.gap + 5.5 * this.j))
	}, this.a5K = function(a7F) {
		return !!this.hO() && eo + i > h.i - a7F - bb.gap
	}, this.a3M = function() {
		hO = !aD.gq
	}, this.a6w = function() {
		hO = !1
	}, this.h8 = function() {
		return bK.pF(Math.floor(1024 * iG + .5) - 1, 0, 1023)
	}, this.a12 = function(kz, l0) {
		return this.hO() && eo < kz && kz < eo + i && l0 > this.eq
	}, this.gu = function(kz, l0) {
		if (!this.hO()) return !1;
		if (!(__fx.settings.keybindButtons && l0 > this.eq - Math.floor(bb.gap / 4) - this.j && l0 < this.eq - Math.floor(bb.gap / 4) && __fx.mobileKeybinds.click(kz - eo))) {
			if (!aR.a12(kz, l0)) return !1;
			aS.mI = !1, ! function(rL, kz, l0) {
				if (function(kz, l0) {
						return eo < kz && kz < eo + a76 && l0 > aR.eq
					}(kz, l0)) return a7J(a77);
				if (function(kz, l0) {
						return eo + i - a76 < kz && kz < eo + i && l0 > aR.eq
					}(kz, l0)) return a7J(1 / a77);
				return rL.gv = !0, a7K(kz)
			}(this, kz, l0) || (be.df = !0)
		}
		return !0
	}, this.a15 = function(mP) {
		0 !== aD.z4 && this.hO() && a7J(mP) && (be.df = !0)
	}, this.a0b = function(deltaY) {
		var mP;
		return !(0 === deltaY || !this.hO()) && a7J(mP = 0 < deltaY ? (mP = 400 / (400 + deltaY)) < a77 ? a77 : mP : 1 / a77 < (mP = (400 - deltaY) / 400) ? 1 / a77 : mP)
	}, this.a0Y = function(kz) {
		return !!this.gv && a7K(kz)
	}, this.a0y = function() {
		this.gv = !1
	}, this.ir = function() {
		this.hO() && a3F !== b9.g2.iF(aD.eR, this.h8()) && (a69 = !0)
	}, this.tq = function() {
		this.hO() && (tr.drawImage(canvas, eo, this.eq), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(tr, eo, this.eq)
	}
}

function cw() {
	var canvas, xG, a7L, font, a7M = 0,
		a7N = !1,
		a7O = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a7P = 5;

	function a7V() {
		if (a7N) {
			var aB, eh = a7O.length,
				a7E = Math.floor(.5 * a7L.j),
				j = eh * a7E,
				eo = Math.floor(Math.floor(a7L.eo) + .3 * a7L.i - .5),
				eq = Math.floor(Math.floor(a7L.eq) - j),
				i = Math.floor(.4 * a7L.i + 2.5);
			for (tr.fillStyle = bA.mj, tr.fillRect(eo, eq, i, j), tr.fillStyle = bA.nC, tr.fillRect(eo, eq + a7P * a7E, i, a7E), tr.fillStyle = bA.mn, tr.fillRect(eo, eq, 2, j), tr.fillRect(eo, eq, i, 2), tr.fillRect(eo + i - 2, eq, 2, j), aB =
				1; aB < eh; aB++) tr.fillRect(eo, eq + aB * a7E, i, 2);
			for (tr.fillStyle = bA.mn, b9.ph.textAlign(tr, 1), b9.ph.textBaseline(tr, 1), tr.font = b9.ph.rY(0, .6 * a7E), eo += .5 * i, aB = 0; aB < eh; aB++) tr.fillText(a7d(aB), eo, eq + (aB + .6) * a7E)
		}
		tr.drawImage(canvas, Math.floor(a7L.eo), Math.floor(a7L.eq))
	}

	function lZ(rL) {
		var eo, mD, mE, a7E;
		xG.clearRect(0, 0, Math.floor(a7L.i), Math.floor(a7L.j)), xG.fillStyle = bA.mj, xG.fillRect(0, 0, Math.floor(a7L.i), Math.floor(a7L.j)), aD.mG && (xG.fillStyle = bA.nC, xG.fillRect(0, 0, Math.floor(.3 * a7L.i), Math.floor(a7L.j))), xG
			.fillStyle = bA.mn, xG.fillText("Hide UI", .15 * a7L.i, .5 * a7L.j), xG.fillRect(Math.floor(.3 * a7L.i - .5), 0, 2, Math.floor(a7L.j)), eo = .5 * a7L.i, xG.fillText("Replay Speed", eo, .31 * a7L.j), xG.fillText(a7d(a7P), eo, .69 * a7L.j),
			xG.fillRect(Math.floor(.7 * a7L.i - .5), 0, 2, Math.floor(a7L.j)), rL.a3t ? (eo = Math.floor(.02 * a7L.i), rL = Math.floor(.025 * a7L.i), mD = Math.floor(.85 * a7L.i - eo - .5 * rL), mE = Math.floor(.25 * a7L.j), a7E = Math.floor(a7L.j) -
				2 * mE, xG.fillRect(mD, mE, eo, a7E), xG.fillRect(mD + eo + rL, mE, eo, a7E)) : function() {
				var i = Math.floor(.46 * a7L.j),
					j = Math.floor(.23 * a7L.j),
					eo = Math.floor(.85 * a7L.i - .5 * i + i / 12),
					eq = Math.floor(.5 * a7L.j - j);
				xG.beginPath(), xG.moveTo(eo, eq), xG.lineTo(eo + i, eq + j), xG.lineTo(eo, eq + (j << 1)), xG.fill()
			}(), xG.fillRect(0, 0, Math.floor(a7L.i), 2), xG.fillRect(0, 0, 2, Math.floor(a7L.j)), xG.fillRect(0, Math.floor(a7L.j) - 2, Math.floor(a7L.i), 2), xG.fillRect(Math.floor(a7L.i - 2), 0, 2, Math.floor(a7L.j))
	}

	function a7d(aB) {
		return 5 === aB ? "Normal" : "" + a7O[aB]
	}
	this.a3t = !1, this.dX = function() {
		aD.gq && (a7P = 5, this.a3t = !1, a7N = !1, a7L = new qJ([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a7Q = function() {
		return a7O[a7P]
	}, this.xC = function() {
		return a7L.eq
	}, this.a5K = function(a7F) {
		return !!aD.gq && a7L.eo + a7L.i > h.i - a7F - bb.gap
	}, this.resize = function() {
		aD.gq && (a7L.resize(), a7L.eq -= (bj.a47() - 1) * bb.gap, font = b9.ph.rY(0, .3 * a7L.j), (canvas = document.createElement("canvas")).width = Math.floor(a7L.i), canvas.height = Math.floor(a7L.j), (xG = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b9.ph.textAlign(xG, 1), b9.ph.textBaseline(xG, 1), lZ(this))
	}, this.a18 = function(a7R) {
		0 === aD.z4 || t.hO() || a7R !== aD.mG && (aD.mG = a7R, bg.resize(), be.df = !0, aD.gq) && (a7M = be.eG + 2e3, lZ(this))
	}, this.gu = function(eo, eq) {
		if (!aD.gq) return !1;
		if (eo < a7L.eo || eq < a7L.eq || eo > a7L.eo + a7L.i) return a7N && function(rL, eo, eq) {
			var eh = a7O.length,
				a7E = Math.floor(.5 * a7L.j),
				j = eh * a7E,
				mD = Math.floor(Math.floor(a7L.eo) + .3 * a7L.i - .5),
				j = Math.floor(Math.floor(a7L.eq) - j),
				i = Math.floor(.4 * a7L.i + 2.5);
			return a7N = !1, be.df = !0, eo < mD || mD + i < eo || eq < j || (a7P = a7U(0, Math.floor((eq - j) / a7E), eh - 1), lZ(rL)), !0
		}(this, eo, eq);
		if ((eo -= a7L.eo) < .3 * a7L.i) a7N = !1, this.a18(!aD.mG);
		else {
			if (eo < .7 * a7L.i) return a7N = !a7N, be.df = !0;
			this.a1A(!1)
		}
		return !0
	}, this.a1A = function(a7T) {
		2 === aD.z4 ? (this.a18(!1), t.u(3)) : (a7N = !1, this.a3t = !this.a3t, this.a3t ? (aM.gr && aM.a19(), a0.a1.setState(1)) : a7T || aM.a4o(), be.df = !0, lZ(this))
	}, this.a1B = function() {
		this.a3t = !1, aM.a4o(), be.df = !0, lZ(this)
	}, this.a0r = function(eo, eq) {
		return !!aD.mG && (0 <= aM.gu(eo, eq) || (aD.gq ? ((be.eG > a7M || !this.gu(eo, eq)) && aS.gu(eo, eq), be.df = !0, a7M = be.eG + 2e3) : aS.gu(eo, eq)), !0)
	}, this.ir = function() {
		aD.gq && aD.mG && be.eG > a7M - 1e3 && be.eG < a7M && (be.df = !0)
	}, this.zC = function() {
		aD.gq && (this.a3t = !1, be.df = !0, lZ(this))
	}, this.tq = function() {
		if (aD.gq) {
			if (aD.mG) {
				if (be.eG > a7M) return;
				if (be.eG > a7M - 1e3) return tr.globalAlpha = a7U(0, (1e3 - (be.eG - (a7M - 1e3))) / 1e3, 1), a7V(), void(tr.globalAlpha = 1)
			}
			a7V()
		}
	}
}

function cG() {
	var a7e, a7f, i, eo, eq, a7g, a7h;
	this.dX = function() {
		a7e = new Array(2), a7f = new Array(2), this.mI = !1, a7h = a7g = iJ = iH = 0, iI = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.r7() ? .072 : .0502) * h.pj)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a7e[aB] = document.createElement("canvas"), a7e[aB].width = i, a7e[aB].height = i, a7f[aB] = a7e[aB].getContext("2d", {
			alpha: !0
		});
		this.a78(),
			function() {
				for (var a7w = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a7f[aB].clearRect(0, 0, i, i), a7f[aB].fillStyle = bA.mg, a7f[aB].beginPath(), a7f[aB].arc(i / 2, i / 2, i / 2 - a7w, 0, 2 * Math.PI), a7f[aB].fill(), a7f[aB]
					.lineWidth = a7w, a7f[aB].fillStyle = bA.mn, a7f[aB].strokeStyle = bA.mn, a7f[aB].beginPath(), a7f[aB].arc(i / 2, i / 2, i / 2 - a7w, 0, 2 * Math.PI), a7f[aB].stroke(), xJ(a7f[aB], 0, 0, i, a7w, .3, 0 === aB)
			}()
	}, this.xB = function() {
		return -iH / iI
	}, this.xC = function() {
		return -iJ / iI
	}, this.mS = function(a7l, hz) {
		iH = iI * a7l - hz
	}, this.mT = function(a7m, i0) {
		iJ = iI * a7m - i0
	}, this.gu = function(a7k, a5L) {
		return aD.mG || ! function(a7k, a5L) {
			return Math.pow(a7k - (eo + i / 2), 2) + Math.pow(a5L - (eq + i / 2), 2) < i * i / 4 || Math.pow(a7k - (eo + i / 2), 2) + Math.pow(a5L - (eq + 2 * i), 2) < i * i / 4
		}(a7k, a5L) || bi.eE.data[8].value ? (aH.mV() && (this.mI = !0, a7g = a7k, a7h = a5L), !1) : a5L < eq + 1.25 * i ? this.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0b(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0Y = function(a7k, a5L) {
		var a7n, a7o, i2, i5;
		return !aH.mV() || (a7n = iH, a7o = iJ, iH += i2 = a7g - a7k, iJ += i5 = a7h - a5L, af.a0Y(i2, i5), this.a7p(), a7g = a7k, a7h = a5L, a7n !== iH) || a7o !== iJ
	}, this.a0b = function(kz, l0, deltaY) {
		var mP;
		if (aH.mV()) {
			if (0 < deltaY) mP = (mP = 500 / (500 + deltaY)) < .5 ? .5 : mP;
			else {
				if (!(deltaY < 0)) return !1;
				mP = 2 < (mP = (500 - deltaY) / 500) ? 2 : mP
			}
			this.a7q(kz, l0, mP), be.df = !0
		}
		return !0
	}, this.a7q = function(eo, eq, eL) {
		var a1S;
		eL = a1S = (a1S = 1024 < (a1S = eL) * iI ? 1024 / iI : a1S) * iI < .125 ? .125 / iI : a1S, af.zoom(eL, eo, eq),
			function(a1S, kz, l0) {
				iI *= a1S, iH = (iH + kz) * a1S - kz, iJ = (iJ + l0) * a1S - l0, aS.a7p()
			}(eL, eo, eq)
	}, this.a7p = function() {
		var a7t = h.i / 16,
			hk = 0,
			a7u = h.j / 16,
			hl = 0;
		iH < -h.i + a7t && (hk = -h.i + a7t - iH), iH > iI * bR.es - a7t && (hk = iI * bR.es - a7t - iH), iJ < -h.j + a7u && (hl = -h.j + a7u - iJ), iJ > iI * bR.et - a7u && (hl = iI * bR.et - a7u - iJ), iH += hk, iJ += hl, bZ.mU(), af.a7v(hk,
			hl)
	}, this.a78 = function() {
		eo = h.i - i - bb.gap, eq = Math.floor(h.j / 2 - 1.25 * i)
	}, this.tq = function() {
		bi.eE.data[8].value || (tr.drawImage(a7e[0], eo, eq), tr.drawImage(a7e[1], eo, Math.floor(eq + 3 * i / 2)))
	}
}

function cH() {
	var g, a7x, a7y, a7z, gap, a80, a81, a82, a83, a84, a4i, a85, gl, a86, a6G, a87, a88;

	function a8C() {
		a7z = Math.floor(.2 * (a0.a1.r7() ? .07 : .035) * h.pj), a7z = a5I(a0.a1.r7() ? 3 : 1, a7z);
		var a8F = h.i / (g.length + gap);
		a7z = a7z < a8F ? a8F : a7z, a6G = Math.floor((1 - gap) * a7z), a7x = 0, a8G()
	}

	function a8G() {
		a7x = (a7x = a7x < -20 ? -20 : a7x) > (g.length - 15) * a7z ? (g.length - 15) * a7z : a7x, a81 = Math.floor(a7x / a7z), a82 = (a82 = a81 + Math.floor(h.i / a7z)) > g.length - 1 ? g.length - 1 : a82, a81 = (a81 = a82 < a81 ? a82 : a81) < 0 ?
			0 : a81;
		var ke = a82;
		a80 = a7y / g[ke];
		for (var aB = a82 - 1; a81 <= aB; aB--) g[aB] > g[ke] && (ke = aB, a80 = a7y / Math.pow(g[aB], a86))
	}

	function a8J(eo) {
		eo = Math.floor((a7x + h.i - eo - gap * a7z) / a7z);
		return (eo = eo < -1 ? -1 : -1 === eo ? 0 : eo > g.length - 1 ? -1 : eo) !== a83 && (a83 = eo, -1 === a87 && 0 === a83 && aT.a89 && (a87 = setInterval(a8K, 100)), 1)
	}

	function a8L(aB) {
		var a66 = Math.floor(a80 * Math.pow(g[aB], a86));
		tr.fillRect(a7x + h.i - (aB + 1) * a7z, h.j - a66, a6G, a66)
	}

	function a8K() {
		var gE;
		0 !== (a83 = 8 === aa.a0E() ? -1 : a83) ? (a88 = (new Date).getTime(), clearInterval(a87), a87 = -1) : (gE = g[1] / 864e3, -1 !== a88 && (gE += ((new Date).getTime() - a88) * g[1] / 864e5, a88 = -1), 0 < gE && (g[0] += Math.floor(gE), be
			.df = !0))
	}
	this.a89 = !1, this.dX = function() {
		a88 = a87 = -1, a83 = -(a86 = 1), this.a8A = !1, gl = 0, a85 = new Date, a7x = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a7y = Math.floor(.15 * h.j), a84 = (a84 = Math.floor((a0.a1.r7() ? .018 : .0137) * h.pj)) < 2 ? 2 : a84, a4i = b9.ph.rY(1, a84), a8C()
	}, this.a8D = function(a8E) {
		var aB;
		for (this.a89 = !0, aB = 0; aB < a8E.length; aB++) g.unshift(a8E[aB]);
		a8C(), be.df = !0
	}, this.a8H = function() {
		a8G()
	}, this.a0Y = function(eo, eq) {
		eq > h.j - .6 * a7y ? this.a8A ? eo !== gl && (a7x += eo - gl, gl = eo, a8G(), a8J(eo), this.a8A = -1 !== a83, be.df = !0) : a8J(eo) && (be.df = !0) : this.qj()
	}, this.qj = function() {
		-1 !== a83 && (this.a8A = !1, a83 = -1, be.df = !0)
	}, this.a0b = function(eo, deltaY) {
		-1 !== a83 && (a7x += Math.floor(deltaY), a8G(), a8J(eo), be.df = !0)
	}, this.gu = function(eo, eq) {
		this.a0Y(eo, eq), -1 !== a83 && (gl = eo, this.a8A = !0)
	}, this.a0x = function() {
		-1 !== a83 && (this.a8A = !1)
	}, this.tq = function() {
		tr.fillStyle = bA.mq;
		for (var a8N, month, dm, s6, a8Q, a8R, mE, a8S, a8T, aB = a82; a81 <= aB; aB--) a8L(aB);
		this.a89 && 0 === a81 && (tr.fillStyle = bA.nN, a8L(0)), -1 !== a83 && (tr.fillStyle = bA.mp, a8L(a83)), -1 !== a83 && (tr.font = a4i, b9.ph.textBaseline(tr, 2), (dm = new Date).setTime(a85.getTime() - 1e3 * a83 * 60 * 60 * 24), month =
			"month", a8N = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dm), a8N = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dm)), a8N = a8N + ", " + dm.getUTCDate() + " " + month + " " + dm.getFullYear(), month = 1 === g[a83] ? L(111) : L(112), month = b9.qh.yM(g[a83]) + " " + month, dm = Math.floor(tr.measureText(a8N).width), s6 = Math
			.floor(tr.measureText(month).width), a8Q = Math.floor(.5 * (dm + a84)), a8R = (a8R = a7x + h.i - (a83 + 1) * a7z) < a8Q ? a8Q : a8R > h.i - a8Q ? h.i - a8Q : a8R, mE = h.j - Math.floor(a80 * Math.pow(g[a83], a86)), a8S = Math
			.floor(1.1 * a84), a8T = mE > h.j - a8S ? h.j - a8S : mE, tr.fillStyle = bA.mk, tr.fillRect(h.i - s6 - a84, a8T - a8S, s6 + a84, a8S), tr.fillRect(a8R - a8Q, h.j - a8S, dm + a84, a8S), tr.fillStyle = bA.mn, b9.ph.textAlign(tr, 2),
			tr.fillText(month, Math.floor(h.i - .5 * a84), a8T), b9.ph.textAlign(tr, 1), tr.fillText(a8N, a8R, h.j), tr.strokeStyle = bA.mr, tr.lineWidth = 1, tr.beginPath(), tr.moveTo(0, mE), tr.lineTo(h.i, mE), tr.closePath(), tr.stroke())
	}
}

function cI() {
	var a4i, i, eq, a8U, a8V, canvas, xG, a69, a2Y, a8W, a8X, a8Y, a8Z;
	this.eo = 0, this.j = 0, this.dX = function() {
		a8V = aD.a3U, a8X = "rgba(0,100,0,0.8)", a8Y = "rgba(150,0,0,0.8)", a69 = a8W = !0, a2Y = ag.gi[aD.eR], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.r7() ? .305 : .24) * h.pj), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4i = b9.ph.rY(1, Math.floor(.8 * this.j)), a8Z = Math.floor(.5 * this.j), bR.va.font = a4i, eq = bb.gap, a8U = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (xG = canvas.getContext("2d", {
			alpha: !0
		})).font = a4i, b9.ph.textBaseline(xG, 1), b9.ph.textAlign(xG, 1), this.a8a()
	}, this.a6V = function() {
		return a0.a1.r7() && h.i < 1.2 * h.j
	}, this.a78 = function() {
		this.a6V() ? this.eo = h.i - i - bb.gap : this.eo = Math.floor(aV.a8b() + (h.i - aV.a8b() - aW.i - i) / 2 - .5 * bb.gap)
	}, this.lY = function() {
		a69 && (a69 = !1, this.a8a())
	}, this.a8a = function() {
		xG.clearRect(0, 0, i, this.j), xG.fillStyle = a8W ? a8X : a8Y, xG.fillRect(0, 0, i, this.j), xG.fillStyle = bA.mp, this.a8c(), this.a8d(), xG.fillStyle = ag.gi[aD.eR] >= ae.jc(aD.eR) ? bA.nK : bA.mn, xG.fillText(b9.qh.yM(a2Y), Math.floor(
			i / 2), a8Z), xG.fillStyle = bA.mn, xG.fillRect(0, 0, i, 1), xG.fillRect(0, 0, 1, this.j), xG.fillRect(0, this.j - 1, i, 1), xG.fillRect(i - 1, 0, 1, this.j)
	}, this.a8c = function() {
		var f2 = be.jt() % 100,
			f2 = (f2 = 9 - bK.dn(f2 -= f2 % 10, 10), Math.floor(f2 * (this.j - a8U) / 9));
		xG.fillRect(0, f2, a8U, this.j - f2), xG.fillRect(i - a8U, f2, a8U, this.j - f2)
	}, this.a8d = function() {
		xG.fillRect(a8U, this.j - a8U, Math.floor((i - 2 * a8U) * ag.gi[aD.eR] / a8V), a8U)
	}, this.ir = function() {
		var gE = aD.eR;
		b9.g2.gt(gE) && (gE = ag.gi[gE] - ag.a2X[gE], a2Y !== gE ? (a8V = a5I(gE, a8V), a8W = a2Y < gE && 10 <= gE, a2Y = gE, a69 = !0) : be.jt() % 10 == 9 && (a69 = !0))
	}, this.tq = function() {
		0 === ag.lm[aD.eR] || aD.h2 || 2 === ag.a2P[aD.eR] || tr.drawImage(canvas, this.eo, eq)
	}
}

function cJ() {
	var a8e, a8f, a8g, a8h, a8i, a8j, a8k, a8l, a8m, a8n, a8o, a8p, a8q, a8r, a8s, a8t, a8u, a8v, a8w, a8x, a8y, a8z, position, a90, a91, a92, a93, a94 = 1,
		a95 = 1,
		a96 = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.eR;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jh[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jh[aD.eR]);
	}

	function a98() {
		a8k.clearRect(0, 0, a8e, a6l),
			a8k.fillStyle = bA.nd,
			a8k.fillRect(0, 0, a8e, a8p),
			a8k.fillStyle = bA.mj,
			a8k.fillRect(0, a8p, a8e, a6l - a8p);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jh[aD.eR]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8z = -1;
		if (__fx.leaderboardFilter.enabled && a8z >= __fx.leaderboardFilter.filteredLeaderboard.length) a8z = -1;
		playerPos >= position && a9A(playerPos - position, bA.nC),
			0 !== jh[aD.eR] && 0 === position && a9A(0, bA.ni),
			-1 !== a8z && a9A(a8z, bA.mo),
			a8k.fillStyle = bA.mj,
			//console.log("drawing", a8z),
			a8k.clearRect(0, a6l - __fx.leaderboardFilter.tabBarOffset, a8e, __fx.leaderboardFilter.tabBarOffset);
		a8k.fillRect(0, a6l - __fx.leaderboardFilter.tabBarOffset, a8e, __fx.leaderboardFilter.tabBarOffset);
		a8k.fillStyle = bA.mn,
			a8k.fillRect(0, a8p, a8e, 1),
			a8k.fillRect(0, a6l - __fx.leaderboardFilter.tabBarOffset, a8e, 1),
			__fx.leaderboardFilter.drawTabs(a8k, a8e, a6l - __fx.leaderboardFilter.tabBarOffset, bA.nC),
			a8k.fillRect(0, 0, a8e, bb.y5),
			a8k.fillRect(0, 0, bb.y5, a6l),
			a8k.fillRect(a8e - bb.y5, 0, bb.y5, a6l),
			a8k.fillRect(0, a6l - bb.y5, a8e, bb.y5), a8k.font = a8f, b9.ph.textBaseline(a8k, 1), b9.ph.textAlign(a8k, 1), a8k.fillText(a96, Math.floor((a8e + a8p - 22) / 2), Math.floor(a8n + a8g / 2));
		__fx.playerList.drawButton(a8k, 12, 12, a8p - 22);
		var f0, gF = playerPos < position + a8i - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8i)
				position = (result.length > a8i ? result.length : a8i) - a8i;
			//if (position >= result.length) position = result.length - 1;
			for (a8k.font = a8h, b9.ph.textAlign(a8k, 0), f0 = a8i - gF; 0 <= f0; f0--) {
				const pos = result[f0 + position];
				if (pos !== undefined)
					a9B(lB[pos]), a9C(f0, pos, lB[pos]);
			}
			for (b9.ph.textAlign(a8k, 2), f0 = a8i - gF; 0 <= f0; f0--) {
				const pos = result[f0 + position];
				if (pos !== undefined)
					a9B(lB[pos]), a9D(f0, lB[pos]);
			}
		} else {
			for (a8k.font = a8h, b9.ph.textAlign(a8k, 0), f0 = a8i - gF; 0 <= f0; f0--)
				a9B(lB[f0 + position]), a9C(f0, f0 + position, lB[f0 + position]);
			for (b9.ph.textAlign(a8k, 2), f0 = a8i - gF; 0 <= f0; f0--)
				a9B(lB[f0 + position]), a9D(f0, lB[f0 + position]);
		}
		2 == gF && (a9B(aD.eR), b9.ph.textAlign(a8k, 0), a9C(a8i - 1, jh[aD.eR], aD.eR), b9.ph.textAlign(a8k, 2), a9D(a8i - 1, aD.eR)), 0 === position && (gF = .7 * a8q / ab.get(4).height, a8k.setTransform(gF, 0, 0, gF, Math.floor(a8r + .58 * a8q +
			.5 * gF * ab.get(4).width), Math.floor(a8n + a8g + .4 * a8q)), a8k.imageSmoothingEnabled = !0, a8k.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), a8k.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a9B(player) {
		aD.hW && (a8k.fillStyle = bf.a9F[bf.a9G[player]])
	}

	function a9A(aB, a9H) {
		a8k.fillStyle = a9H, aB = a8i - 1 < aB ? a8i - 1 : aB;
		a9H = Math.floor((aB === a8i - 1 ? 2 : 0 === aB ? 1.15 : 1) * a8q), a9H = aB === a8i - 2 ? Math.floor(a8p + 9.15 * a8q) - Math.floor(a8p + 8.15 * a8q) : a9H;
		a8k.fillRect(0, Math.floor(a8p + (aB + (0 === aB ? 0 : .15)) * a8q), a8e, a9H)
	}

	function a9C(a9J, a2n, aB) {
		a8k.fillText(a8v[a2n], a8r, Math.floor(a8n + a8g + (a9J + .5) * a8q)), 1 === ag.a2P[aB] && (a8k.font = "italic " + a8h);
		a2n = Math.floor(a8n + a8g + (a9J + .5) * a8q);
		a8k.fillText(ag.xa[aB], a8s, a2n), 0 !== ag.a2P[aB] && (a8k.font = a8h), aB < aD.jw && 2 !== ag.a2P[aB] || a8k.fillRect(a8s, a2n + .35 * a94, a8u[aB], Math.max(1, .1 * a94))
	}

	function a9D(a9J, aB) {
		a8k.fillText(ag.gU[aB], a8t, Math.floor(a8n + a8g + (a9J + .5) * a8q))
	}

	function a9S(eq) {
		return (eq -= bb.gap + a8p) < 0 ? Math.floor(eq / a8q) - 1 : eq < (a8i - 1) * a8q ? Math.floor(eq / a8q) : eq < a6l - a8p ? a8i - 1 : (eq -= a6l - a8p, a8i + Math.floor(eq / a8q))
	}

	function y4(eo, eq) {
		return eo >= bb.gap && eo < bb.gap + a8e && eq >= bb.gap && eq < bb.gap + a6l
	}
	this.dX = function() {
			var aB;
			for (a91 = !1, a93 = a92 = a90 = 0, a8z = -1, a8i = a0.a1.r7() ? 6 : 10, a95 = (position = 0) === (a95 = bi.eE.data[11].value) ? 10 : 1 === a95 ? 5 : 1, a8y = !1, a8w = new Uint16Array(a8i + 1), a8x = new Uint32Array(a8i + 1), a8m = aD
				.ee, lB = new Uint16Array(a8m), jh = new Uint16Array(a8m), aB = a8m - 1; 0 <= aB; aB--) lB[aB] = aB, jh[aB] = aB;
			this.resize(!0), a8u = new Uint16Array(aD.ee);
			var a97 = Math.floor(a8e - a8s - a8r - a8l);
			for (a8v = new Array(aD.ee), a8k.font = a8h, aB = aD.ee - 1; 0 <= aB; aB--) a8v[aB] = aB + 1 + ".", ag.xa[aB] = b9.xG.a25(ag.zh[aB], a8h, a97), a8u[aB] = Math.floor(a8k.measureText(ag.xa[aB]).width);
			a98()
		}, this.resize = function(dX) {
			if (a6l = a0.a1.r7() ? (a8e = Math.floor(.335 * h.pj), Math.floor(a8i * a8e / 8)) : (a8e = Math.floor(.27 * h.pj), Math.floor(a8i * a8e / 10)), a8e = Math.floor(.97 * a8e), (a8j = document.createElement("canvas")).width = a8e, a8j
				.height = a6l, a8k = a8j.getContext("2d", {
					alpha: !0
				}), a8n = .025 * a8e, a8g = .16 * a8e, a8o = 0 * a8e, a8p = Math.floor(.45 * a8n + a8g), a8q = (a6l - a8g - 2 * a8n - a8o) / a8i,
				a8j.height = a6l += a8q, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8q * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6l - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8e,
				a8f = b9.ph.rY(1, Math.floor(.55 * a8g)), a94 = Math.floor((a0.a1.r7() ? .67 : .72) * a8q), a8h = b9.ph.rY(0, a94), a8k.font = a8h, a8r = Math.floor(.04 * a8e), a8s = Math.floor((a0.a1.r7() ? .195 : .18) * a8e), a8l = Math.floor(a8k
					.measureText("00920600").width), a8k.font = a8f, a8t = a8e - a8r, !dX) {
				a8k.font = a8h;
				for (var aB = aD.ee - 1; 0 <= aB; aB--) a8u[aB] = Math.floor(a8k.measureText(ag.xa[aB]).width);
				a98()
			}
			a96 = b9.xG.a25(L(113), a8f, .96 * a8e)
		}, this.a8b = function() {
			return a8e
		}, this.lY = function(br, a99) {
			(a99 || a8y && (br || be.jt() % a95 == 0)) && (a8y = !1, a98())
		}, this.ir = function() {
			! function() {
				for (var f0 = a8m - 1; 0 <= f0; f0--) 0 === ag.lm[lB[f0]] && ! function(f0) {
					var a9Q = lB[f0];
					a8m--;
					for (var aB = f0; aB < a8m; aB++) lB[aB] = lB[aB + 1], jh[lB[aB]] = aB;
					lB[a8m] = a9Q, jh[lB[a8m]] = a8m
				}(f0)
			}();
			for (var a9O, mV = a8m - 1, f0 = 0; f0 < mV; f0++) ag.gU[lB[f0]] < ag.gU[lB[f0 + 1]] && (a9O = lB[f0], lB[f0] = lB[f0 + 1], lB[f0 + 1] = a9O, jh[lB[f0]] = f0, jh[lB[f0 + 1]] = f0 + 1);
			! function() {
				for (var dm = a8y, gF = (a8y = !0, jh[aD.eR] >= a8i - 1 ? a8i - 2 : a8i - 1), aB = gF; 0 <= aB; aB--)
					if (a8w[aB] !== lB[aB] || a8x[aB] !== ag.gU[lB[aB]]) return;
				(gF != a8i - 2 || a8w[a8i] === jh[aD.eR] && a8x[a8i] === ag.gU[aD.eR]) && (a8y = dm)
			}();
			for (var aB = a8i - 1; 0 <= aB; aB--) a8w[aB] = lB[aB], a8x[aB] = ag.gU[lB[aB]];
			a8w[a8i] = jh[aD.eR], a8x[a8i] = ag.gU[aD.eR];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gu = function(eo, eq) {
			return !!y4(eo, eq) && ((__fx.utils.isPointInRectangle(eo, eq, bb.gap + 12, bb.gap + 12, a8p - 22, a8p - 22) && __fx.playerList.display(ag.zh), true) &&
				!(eq - bb.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eo - bb.gap)) && (a90 = be.eG, a91 = !0, a92 = a93 = a9S(eq), bI.a1C() && (eo = a7U(-1, a93, a8i), a8z !== (eo = eo === a8i ?
					-1 : eo)) && (a8z = eo, a98(), be.df = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a98(), be.df = !0;
		},
		this.a0Y = function(eo, eq) {
			if (__fx.utils.isPointInRectangle(eo, eq, bb.gap + 12, bb.gap + 12, a8p - 22, a8p - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a98(), be.df = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a98(), be.df = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eo, eq, bb.gap, bb.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eo - bb.gap
				)) return;
			var dm, a9R = a9S(eq);
			return a91 ? (dm = position, (position = a7U(0, position += a92 - a9R, aD.ee - a8i)) !== dm && (a9R = (a9R = a7U(-1, a92 = a9R, a8i)) !== a8i && y4(eo, eq) ? a9R : -1, a8z = a9R, a98(), be.df = !0), !0) : (a9R = (a9R = a7U(-1, a9R,
				a8i)) === a8i || !y4(eo, eq) || bI.a1C() ? -1 : a9R, a8z !== a9R && (a8z = a9R, a98(), be.df = !0))
		}, this.a0x = function(eo, eq) {
			if (!a91) return !1;
			a91 = !1;
			var a9R = a9S(eq);
			var isEmptySpace = false;
			return bI.a1C() && -1 !== a8z && (a8z = -1, a98(), be.df = !0), be.eG - a90 < 350 && a93 === a9R && -1 !== (a9R = (a9R = a7U(-1, a9R, a8i)) !== a8i && y4(eo, eq) ? a9R : -1) && (eo = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lB[__fx.leaderboardFilter.filteredLeaderboard[a9R + position] ?? (isEmptySpace = true, jh[aD.eR])]) : lB[a9R + position]), a9R === a8i - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jh[aD.eR]) >=
				position + a8i - 1 && (eo = aD.eR), !isEmptySpace && aD.hW && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eo, ag.zh, aD.kF), 0 !== ag.lm[eo] && !isEmptySpace) && aH.m7(eo, 800, !1, 0), !0
		}, this.a0b = function(eo, eq, deltaY) {
			var a9T;
			return !(a91 || aD.mG || (a9T = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !y4(eo, eq)) || (eo = (eo = a7U(-1, a9S(eq), a8i)) === a8i || bI.a1C() ? -1 : eo, 0 < deltaY ? position < aD.ee - a8i && (position += Math.min(aD.ee - a8i -
				position, a9T), a8z = eo, a98(), be.df = !0) : 0 < position && (position -= Math.min(position, a9T), a8z = eo, a98(), be.df = !0), 0))
		}, this.tq = function() {
			tr.drawImage(a8j, bb.gap, bb.gap)
		}
}

function cK() {
	var canvas, xG, eo, eq, a66, a9U, gap, a9V, fontSize, a9W, a9X, a9Y, a9Z, a9a, a9b, a9c, a9d, a9e;

	function a9i() {
		xG.clearRect(0, 0, aW.i, aW.j), xG.fillStyle = bA.mk, xG.fillRect(0, 0, aW.i, aW.j), xG.fillStyle = bA.n7, eL = 0 < a9c ? a9c : Math.sqrt(a9Z[4] / 1e4), xG.fillRect(0, aW.j - a66 - 1, Math.floor(eL * aW.i), a66), xG.fillStyle = bA.mn, xG
			.fillRect(0, 0, aW.i, 1), xG.fillRect(0, 0, 1, aW.j), xG.fillRect(aW.i - 1, 0, 1, aW.j), xG.fillRect(0, aW.j - 1, aW.i, 1), xG.fillRect(0, aW.j - a66 - 1, aW.i, 1);
		for (var eL, a9k, dm = 0, aB = 0; aB < a9Y.length; aB++) a9a[aB] ? (b9.ph.textAlign(xG, 0), a9k = Math.floor((a9U - a66 + 2 * a9V) * (aB - dm + 1) / (a9Y.length + 1) - .7 * a9V), xG.fillText(a9Y[aB], gap, a9k), b9.ph.textAlign(xG, 2), 5 ===
			aB && 0 !== ag.lm[aD.eR] && ag.gi[aD.eR] >= ae.jc(aD.eR) ? (xG.fillStyle = bA.ng, xG.fillText(a9g(aB), aW.i - gap, a9k), xG.fillStyle = bA.mn) : xG.fillText(a9g(aB), aW.i - gap, a9k)) : dm++
	}

	function a9g(aB) {
		return aB < 3 ? a9Z[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? b9.qh.a38(a9Z[aB] / 100, 2) : aB < 7 ? b9.qh.yM(a9Z[aB]) : aB === 7 ? aW.a9l(a9Z[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gU, aD.eR) : __fx.utils.getDensity(aD.eR)
	}

	function a9f() {
		ag.gU[aD.eR] !== a9Z[6] && (a9Z[6] = ag.gU[aD.eR], a9W++)
	}
	this.dX = function() {
		a9c = a9d = 0, (a9X = new Array(8))[0] = L(114), a9X[1] = aD.kF ? L(115) : L(116), a9X[2] = L(117), a9X[3] = L(118), a9X[4] = L(119), a9X[5] = L(120, 0, "Interest"), a9X[6] = L(121), a9X[7] = L(122),
			a9X.push("Max Troops", "Density"), // add a9X
			(a9Y = new Array(a9X.length)).fill(""), (a9Z = new Array(a9X.length))[0] = aD.kF ? 0 : aD.jw, a9Z[1] = aD.kF ? al.jx : aD.kH, a9Z[2] = aD.z6, a9Z[3] = 0, a9Z[4] = bK.dn(1e4 * ag.gU[0], Math.max(aD.jg, 1)), a9Z[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bK.dn(700 * aD.data.iIncomeValue, 64) : bK.dn(700 * aD.data.iIncomeData[aD.eR], 64), a9Z[6] = 0, a9f(), a9Z[7] = 0, a9b = a9g(6), a9a = new Array(a9X.length);
		for (var aB = a9X.length - 1; 0 <= aB; aB--) a9a[aB] = !0;
		a9e = 0, a9e = aD.kF ? (a9a[0] = !1, a9a[2] = !1, a9a[3] = !1, 3) : (a9a[3] = !1, 1), a9W = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.r7() ? .1646 : .126) * 1.25 * h.pj), this.j = Math.floor(1.18 * this.i), a66 = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9V = .04 * this.i, a9U = this.j, this.j -= Math.floor(a9e * (this.j -
			2 * a66) / a9X.length), fontSize = Math.floor(.7 * (a9U - a66) / a9X.length);
		var a4i = b9.ph.rY(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4i, i) {
				for (var aB = 0; aB < a9Y.length; aB++) a9Y[aB] = b9.xG.a25(a9X[aB], a4i, i)
			}((xG = canvas.getContext("2d", {
				alpha: !0
			})).font = a4i, .575 * this.i), b9.ph.textBaseline(xG, 1), xG.lineWidth = 1, this.a3N(), this.a78(), aU.a78(), a9i()
	}, this.a78 = function() {
		eo = h.i - this.i - bb.gap
	}, this.a9j = function() {
		eq = bb.gap
	}, this.a3N = function() {
		eq = bb.gap + (aU.a6V() && 0 !== ag.lm[aD.eR] && !aD.h2 ? aU.j + bb.gap : 0)
	}, this.lY = function(br) {
		(br || 100 <= a9W) && (a9W = 0, a9i())
	}, this.a43 = function() {
		return a9Z[7]
	}, this.a9l = function(value) {
		var ke = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ke) / 1e3);
		return value < 10 ? ke + ":0" + value : ke + ":" + value
	}, this.ir = function() {
		var a9u, per;
		a9a[0] && aD.z7 - aD.z6 !== a9Z[0] && (a9Z[0] = aD.z7 - aD.z6, a9W++), al.jx - a9Z[0] !== a9Z[1] && (a9Z[1] = al.jx - a9Z[0], a9W++), this.lQ(), (a9u = ae.a9v(aD.eR)) !== a9Z[5] && (a9Z[5] = a9u, a9W++), a9f(), a9Z[7] += be.a9w, a9u =
			a9g(7), a9b !== a9u && (a9b = a9u, a9W += 100), a9u = aD.hW ? bg.a2q() : ag.gU[lB[0]], per = bK.dn(1e4 * a9u, Math.max(aD.jg, 1)), a9Z[3] = a9u, a9Z[4] !== per && (a9W++, a9Z[4] = per), 8 === aD.kD && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!b9.g2.gt(aB)) return bQ.yh.z3(), 1;
				return
			}() || a9Z[3] < aD.jg || ! function() {
				for (var aB = al.jx - 1; 0 <= aB; aB--)
					if (0 < ag.g8[al.jy[aB]].length) return;
				return 1
			}() || bQ.yh.z3()
	}, this.lQ = function() {
		a9a[2] && aD.z6 !== a9Z[2] && (a9Z[2] = aD.z6, a9W++)
	}, this.a9x = function(aB) {
		var sM, a9y, dm;
		return 2 !== aD.z4 && (aB % 2 == 1 && (aV.lY(1, 1), be.df = !0), aB === aD.a3W ? (a9c = 0, a9i(), !1) : (-1 !== aB || 0 !== a9d) && (a9y = a9c, a9c = aD.gq ? aB / aD.a3W : (dm = performance.now(), 0 <= aB && (sM = dm - 392 * aB, a9d =
			0 === aB || sM < a9d ? sM : a9d), 1 < (a9c = (dm - a9d) / (392 * aD.a3W)) ? 1 : a9c), a9i(), a9c !== a9y))
	}, this.tq = function() {
		tr.drawImage(canvas, eo, eq)
	}
}

function cL() {
	var hO, a9z, i, j, a7E, aA0, aA1, a6W, canvas, lz, aA2;

	function xC() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bb.gap ? h.j - j - 4 * bb.gap - aR.j : h.j - j - 2 * bb.gap
	}
	this.dX = function() {
		aA2 = hO = !1, a7E = .61, aA0 = .07, aA1 = .09, lz = a6W = j = 0
	}, this.resize = function() {
		var xG, mD, f2, aA7, aA8, a4n;
		hO && (i = aA3(i = a0.a1.r7() ? Math.floor(.69 * h.pj) : Math.floor(.5 * h.pj), a5I(h.i - 2 * bb.gap, 10)), i = aA3(i, Math.floor(3.57 * a5I(h.j - 2 * bb.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, xG = canvas.getContext("2d", {
				alpha: !0
			}), mD = Math.floor(1 + j / 40), xG.clearRect(0, 0, i, j), xG.fillStyle = bA.mk, xG.fillRect(mD, mD, i - 2 * mD, j - 2 * mD), xG.lineJoin = "bevel", xG.lineWidth = 2 * mD, xG.strokeStyle = bA.mn, xG.strokeRect(mD, mD, i - 2 * mD,
				j - 2 * mD), xG.imageSmoothingEnabled = !1, f2 = ab.get(a9z), aA7 = f2.width, a4n = (1 === a9z ? .85 : 21 === a9z ? .666 : .9) * a7E * j / (aA8 = f2.height), xG.setTransform(a4n, 0, 0, a4n, Math.floor((i - a4n * aA7) / 2),
				Math.floor((j - a4n * aA8) / 2)), xG.drawImage(f2, 0, 0), xG.setTransform(1, 0, 0, 1, Math.floor(i - aA1 * j - aA0 * j - mD), Math.floor(mD + aA0 * j)),
			function(xG, eh) {
				xG.lineWidth = Math.floor(1 + j / 80), xG.strokeStyle = bA.mn, xG.beginPath(), xG.moveTo(0, 0), xG.lineTo(eh, eh), xG.moveTo(0, eh), xG.lineTo(eh, 0), xG.stroke()
			}(xG, Math.floor(aA1 * j)), xG.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f9, aA5, a71, aA6) {
		hO || aA6 && aA2 || (a9z = a71 ? 21 : f9 ? 1 : 2, hO = aA2 = !0, this.resize(), aL.r0(), aR.a6w(), lz = be.eG, a6W = aA5 ? 1 : 0)
	}, this.ir = function() {
		!hO || 1 <= a6W || (a6W = 1 < (a6W += 5e-4 * (be.eG - lz)) ? 1 : a6W, lz = be.eG, be.df = !0)
	}, this.gu = function(eo, eq) {
		return !(!hO || a6W <= 0 || (eo -= Math.floor((h.i - i) / 2), eq -= xC(), eo < 0) || eq < 0 || i < eo || j < eq || (i - j / 3 < eo && eq < j / 3 && (hO = !1, be.df = !0), 0))
	}, this.tq = function() {
		!hO || a6W <= 0 || (tr.globalAlpha = a6W, tr.drawImage(canvas, Math.floor((h.i - i) / 2), xC()), tr.globalAlpha = 1)
	}
}

function dJ() {
	var aAA, aAB = new Uint8Array(5),
		aAC = new Uint8Array(5);
	this.aAD = new aAE, this.dX = function() {
		for (var f9 = bi.eE.data[119].value, aB = 0; aB < aAB.length; aB++) aAB[aB] = (f9 >> 2 * aB) % 4
	}, this.a3h = function() {
		aAA = [L(123), L(124), L(125, [bW.aAF[28]]), L(126, [bW.aAF[26]]), L(127, [bW.aAF[0]])], this.aAD.dX()
	}, this.ir = function() {
		this.aAD.ir()
	}, this.a4O = function(id) {
		1 < id && bI.qA() || ! function(e2) {
			if (3 === aAB[e2] || 1 === aAC[e2]) return;
			if (aAC[e2] = 1, !(Math.random() < .6)) {
				aAB[e2]++;
				for (var f9 = 0, aB = 0; aB < aAB.length; aB++) f9 += aAB[aB] << 2 * aB;
				bi.rB.rC(119, f9)
			}
			return 1
		}(id) || aN.a5O(aAA[id])
	}
}

function aAE() {
	var aAH;
	this.dX = function() {
		aAH = !1
	}, this.ir = function() {
		var gE;
		if (function() {
				if (!aAH) {
					if (be.jt() % 30 != 9) return;
					if (!b9.g2.l4(90)) return;
					aAH = !0
				}
				return 1
			}() && (! function() {
				var pZ = aN.a5k(956);
				if (pZ) {
					if (b9.g2.ki(pZ.player)) return 1;
					aN.a4U(956, 0)
				}
				return
			}() && (-1 === (gE = (aD.hW ? function() {
				var id = bg.l8(),
					eh = al.jx;
				if (bf.kI[id])
					for (var ys = al.jy, ef = bf.ef, aB = 0; aB < eh; aB++) {
						var gE = ys[aB];
						if (ef[gE] !== id) return gE
					} else if (1 < eh) return lB[eh - 1];
				return -1
			} : function() {
				for (var aAP = al.jx, kd = al.jy, aAQ = jh, aB = 0; aB < aAP; aB++) {
					var gE = kd[aB];
					if (0 !== aAQ[gE]) return gE
				}
				return -1
			})()) ? ! function() {
				var pZ = aN.a5k(957);
				if (pZ && pZ.a5E) {
					if (ac.eY(pZ.a5E.eT << 2)) return 1;
					aN.a4U(957, 0)
				}
				return
			}() : (aN.xZ(0, L(128, [ag.xa[gE]]), 956, gE, bA.mn, bA.mk, -1, !0), 0)))) {
			var eh = an.ib.ku;
			if (0 !== eh)
				for (var eE = an.ib.eE, aB = 0; aB < eh; aB++) {
					var eT = eE[aB];
					if (ac.eY(eT << 2)) return void aN.xZ(0, L(129, [bL.ep(eT), bL.er(eT)]), 957, 0, bA.mn, bA.mk, -1, !0, void 0, {
						f0: 1,
						eT: eT
					})
				}
		}
	}
}

function dK() {
	this.aAR = new aAS, this.dX = function() {
		this.aAR.resize()
	}
}

function aAS() {
	this.resize = function() {
		var aB, aAT = document.head.querySelector("style#ss");
		if (aAT)
			for (aB = aAT.sheet.cssRules.length - 1; 0 <= aB; aB--) aAT.sheet.deleteRule(0);
		else(aAT = document.createElement("style")).id = "ss", document.head.appendChild(aAT);
		var a7M = "::-webkit-scrollbar",
			aAU = b9.ph.pr(bb.ra),
			hY = b9.ph.pr(Math.max(b9.ph.r2(.012), 8));
		try {
			aAT.sheet.insertRule(a7M + "{width:" + hY + ";height:" + hY + ";}", aAT.sheet.cssRules.length), aAT.sheet.insertRule(a7M + "-thumb{background-color:white;}", aAT.sheet.cssRules.length), aAT.sheet.insertRule(a7M +
				"-track{background:" + bA.mj + ";}", aAT.sheet.cssRules.length), aAT.sheet.insertRule(a7M + "-track:horizontal{border-top:" + aAU + " solid white;}", aAT.sheet.cssRules.length), aAT.sheet.insertRule(a7M +
				"-track:vertical{border-left:" + aAU + " solid white;}", aAT.sheet.cssRules.length), aAT.sheet.insertRule(a7M + "-button{display:none;}", aAT.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aAT.sheet.cssRules.length - 1; 0 <= aB; aB--) aAT.sheet.deleteRule(0)
		}
	}
}

function dI() {
	this.aAV = !1, this.md = !1, this.a3R = !1, this.aAW = [0, 0, 0, 0], this.aAX = function() {
		var mD, mE, mQ, mR;
		this.a3R = this.a3R || this.md, (this.md || this.aAV && this.a3R) && (mD = bZ.aAY[0], mE = bZ.aAY[1], mQ = bZ.aAY[2], mR = bZ.aAY[3], mD = mD < this.aAW[0] ? this.aAW[0] : mD, mE = mE < this.aAW[1] ? this.aAW[1] : mE, mQ = mQ > this.aAW[
				2] ? this.aAW[2] : mQ, mR = mR > this.aAW[3] ? this.aAW[3] : mR, this.md = !1, this.aAV = !1, mD === this.aAW[0] && mE === this.aAW[1] && mQ === this.aAW[2] && mR === this.aAW[3] ? this.a3S() : mD <= mQ && mE <= mR && a3j
			.putImageData(a3k, 0, 0, mD, mE, mQ - mD + 1, mR - mE + 1))
	}, this.a3S = function() {
		this.a3R && this.aAW[2] >= this.aAW[0] && this.aAW[3] >= this.aAW[1] && a3j.putImageData(a3k, 0, 0, this.aAW[0], this.aAW[1], this.aAW[2] - this.aAW[0] + 1, this.aAW[3] - this.aAW[1] + 1), this.a3R = !1
	}, this.zF = function() {
		this.aAW[2] >= this.aAW[0] && this.aAW[3] >= this.aAW[1] && a3j.putImageData(a3k, 0, 0, this.aAW[0], this.aAW[1], this.aAW[2] - this.aAW[0] + 1, this.aAW[3] - this.aAW[1] + 1), this.a3R = !1
	}, this.dX = function() {
		var eo, eq;
		this.aAV = !1, this.md = !1, this.a3R = !1, this.aAW[0] = bR.es, this.aAW[1] = bR.et, this.aAW[2] = this.aAW[3] = 0;
		loop: for (eo = 1; eo < bR.es - 1; eo++)
			for (eq = bR.et - 2; 1 < eq; eq--)
				if (1 === aAZ[ac.wl(eo, eq) + 2]) {
					this.aAW[0] = eo;
					break loop
				} loop: for (eq = 1; eq < bR.et - 1; eq++)
			for (eo = bR.es - 2; 1 < eo; eo--)
				if (1 === aAZ[ac.wl(eo, eq) + 2]) {
					this.aAW[1] = eq;
					break loop
				} loop: for (eo = bR.es - 2; 0 < eo; eo--)
			for (eq = bR.et - 2; 1 < eq; eq--)
				if (1 === aAZ[ac.wl(eo, eq) + 2]) {
					this.aAW[2] = eo;
					break loop
				} loop: for (eq = bR.et - 2; 0 < eq; eq--)
			for (eo = bR.es - 2; 1 < eo; eo--)
				if (1 === aAZ[ac.wl(eo, eq) + 2]) {
					this.aAW[3] = eq;
					break loop
				}
	}
}

function L(value, aAa, uO) {
	var pO = "number" == typeof value ? b6.aAb[value] : value;
	if (uO && b6.aAc() && (pO = uO), aAa)
		for (var eh = aAa.length, aB = 0; aB < eh; aB++)
			for (var f0 = 0; f0 < 3; f0++) pO = pO.replace("{" + (10 * f0 + aB) + "}", aAa[aB]);
	return pO
}

function bz() {
	this.data = new aAd;
	var aAe = (new aAf).L84,
		aAg = (this.aAb = aAe, !1);
	this.dX = function() {
		var eh, g;
		aAg = !1, "en" !== bi.eE.data[12].value.split("-")[0].toLowerCase() ? bi.eE.data[12].value === bi.eE.data[145].value && 0 < bi.eE.data[146].value && (eh = bi.eE.data[146].value, (g = bi.pz.uU(eh, !1)).length === eh) && !!b9.pq.a1i(g) &&
			function(g) {
				for (var eh = g.length, j = 0; j < eh; j++) g[j] = g[j].replace("&#39;", "'");
				var aAm = bi.pz.uU(eh, !0);
				if (eh !== aAm.length) return !1;
				if (!b9.pq.a1i(aAm)) return !1;
				for (var ke = aAe.length, a8E = new Array(ke), aAn = ke === eh, g9 = Math.min(eh, ke), aB = 0; aB < ke; aB++)
					if (a8E[aB] = aAe[aB], aB < eh && aAm[aB] === a8E[aB]) a8E[aB] = g[aB];
					else {
						aAn = !1;
						for (var f1 = 0; f1 < g9; f1++)
							if (aAm[f1] === a8E[aB]) {
								a8E[aB] = g[f1];
								break
							}
					} return b6.aAb = a8E, aAn
			}(g) || (aAg = !0) : b6.aAb = aAe
	}, this.dZ = function() {
		bf.dY(), aE.dY(), bd.dY(), bc.dY(), aO.dX(), bn = new ds
	}, this.aAc = function() {
		return this.aAb === aAe || !aAe.length
	}, this.aAo = function() {
		var aAp;
		aAg && (aAg = !1, 0 !== aAe.length) && (aAp = bi.eE.data[12].value, az.aAq.aAr(0, aAp.slice(0, 20)))
	}, this.aAs = function(g) {
		g.length === aAe.length && (this.aAb = g, bi.rB.rC(145, bi.eE.data[12].value), bi.rB.rC(146, g.length), bi.pz.ua(g, !1), bi.pz.ua(aAe, !0), 0 === aa.a0E()) && 5 === t.ry && t.y.aAt()
	}, this.aAu = function() {
		var aAv, g = navigator.languages;
		return g && g.length ? (aAv = Math.max(b6.data.aAw(g[0]), 0), 1 === g.length ? [aAv, aAv] : [aAv, Math.max(b6.data.aAw(g[1]), 0)]) : [0, 0]
	}
}

function aAd() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAx = function() {
		for (var aAy = [], g = this.g, eh = g.length, aB = 0; aB < eh; aB++) aAy.push(g[aB]);
		var aAz = bi.eE.data[12].uO;
		for (aB = 0; aB < eh; aB++)
			if (aAy[aB] === aAz) {
				aAy.splice(aB, 1), eh--;
				break
			} aAy.sort(), eh++, aAy.unshift(aAz);
		try {
			if ("undefined" == typeof Intl) return aAy;
			for (aB = 0; aB < eh; aB++) {
				var pO = new Intl.DisplayNames([aAy[aB]], {
					type: "language"
				}).of(aAy[aB]);
				pO !== aAy[aB] && (aAy[aB] = aAy[aB] + ": " + pO)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAy
	}, this.aB1 = function(aB2) {
		for (var pO = bi.eE.data[12].value, eh = aB2.length, aB = 0; aB < eh; aB++)
			if (pO === aB2[aB].split(":")[0]) return aB;
		return 0
	}, this.aAw = function(aB3) {
		if (!aB3 || aB3.length < 2) return 0;
		aB3 = aB3.split("-")[0].toLowerCase();
		for (var g = this.g, eh = g.length, aB = 0; aB < eh; aB++)
			if (aB3 === g[aB]) return aB;
		return -1
	}
}

function aAf() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "You have earned an additional {10} gold!", "{0} has earned an additional {11} gold!", "Team {0}",
		"Team {0} has won the game!", "You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!",
		"Clan {0} has won {11} points.", "You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!",
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
		"Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Select a boat to send it to a new location.", "Hint: Call the peace vote by pressing {0}.",
		"Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
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
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship selected!", "Ship on the way!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dd() {
	var eo, eq, j, sv, aB4, aB5, aB6, aB7, aB8, i, a2K, aB9;
	this.hO = !1, this.dX = function(pO, aBA) {
		if (1 === a0.id && 13 <= a0.dp && a0.dp < 18) return aBA ? void(a2K = pO) : a2K !== pO ? void 0 : void a0.uS.saveString(200, pO);
		aBA && (a2K = pO, (aB9 = document.createElement("a")).appendChild(document.createTextNode(a2K)), this.hO = !0, aB9.title = a2K, aB9.target = "_blank", aB9.href = a2K, aB9.style.textAlign = "center", aB9.style.color = bA.mn, aB9.style
			.position = "absolute", aB9.style.padding = "0px", aB9.style.margin = "0px", this.resize(), document.body.appendChild(aB9), be.df = !0)
	}, this.r0 = function() {
		return !(!this.hO || (document.body.removeChild(aB9), this.hO = !1))
	}, this.gu = function(hz, i0) {
		return !!this.hO && ((hz < eo || i0 < eq || eo + i < hz || eq + j < i0 || eo + i - sv < hz && i0 < eq + sv) && (be.df = !0, this.hO = !1, document.body.removeChild(aB9)), !0)
	}, this.resize = function() {
		var a4i, aBB;
		this.hO && (aB7 = Math.floor(.8 * (a0.a1.r7() ? h.i > h.j ? .6 : .55 : .4) * h.pj), sv = Math.floor(.15 * aB7), aB4 = Math.floor(.35 * sv), aB5 = Math.floor(.5 * sv), aB6 = Math.floor(2.5 * aB5), j = sv + aB4 + 3 * aB5, a4i = b9.ph.rY(1,
			aB4 / h.k), aB8 = Math.floor(h.k * aQ.measureText(a2K, a4i)), aBB = i = (aB7 < aB8 ? aB8 : aB7) + 2 * aB6, i = Math.min(i, h.i - 2 * (a0.a1.r7() ? 2 : 1) * bb.gap), a4i = b9.ph.rY(1, i / aBB * aB4 / h.k), aB8 = Math.floor(h
			.k * aQ.measureText(a2K, a4i)), eo = Math.floor((h.i - i) / 2), eq = Math.floor((h.j - j) / 2), aB9.style.font = a4i, aB9.style.top = Math.floor((eq + 1.4 * aB5 + sv) / h.k) + "px", aB9.style.left = Math.floor((eo + (i -
			aB8) / 2) / h.k) + "px")
	}, this.tq = function() {
		this.hO && (tr.fillStyle = bA.mk, tr.fillRect(eo, eq + sv, i, j - sv), tr.fillStyle = bA.nr, tr.fillRect(eo, eq, i, sv), tr.fillStyle = bA.mn, tr.lineWidth = bb.y5, tr.strokeStyle = bA.mn, tr.strokeRect(eo, eq, i, j), tr.fillRect(eo, eq +
			sv, i, bb.y5), tr.font = b9.ph.rY(1, .48 * sv), b9.ph.textAlign(tr, 1), b9.ph.textBaseline(tr, 1), tr.fillText("You are leaving Territorial.io!", Math.floor(eo + (i - .5 * sv) / 2), Math.floor(eq + .55 * sv)), aM.a4t(Math
			.floor(eo + i - .8 * sv), Math.floor(eq + .25 * sv), Math.floor(.5 * sv)), tr.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function db() {
	var gap, a9X, eo = [0, 0, 0, 0, 0],
		eq = [0, 0, 0, 0, 0],
		mP = [1, 1, 1, 1, 1],
		f9 = [!0, !0, !0, !1, !1],
		f2 = (this.fS = [!0, !0, !0, !1, !1], null);
	this.aBC = function(a1t, aBD) {
		f2 = a1t, f9 = aBD, a9X = [bJ.aBE, bJ.a07, bJ.aBF, bJ.aBF, bJ.aBG], this.dX()
	}, this.dX = function() {
		if (ab.sQ()) {
			var aB, s5 = Math.floor((a0.a1.r7() ? .261 : .195) * h.pj),
				s6 = Math.floor(.9 * s5),
				a7E = Math.floor(.17 * s6);
			if (gap = a0.a1.r7() ? 2 * bb.gap : bb.gap, mP[0] = s5 / f2[0].width, mP[1] = s6 / f2[1].width, mP[2] = a7E / f2[2].height, mP[3] = a7E / f2[3].height, mP[4] = a7E / f2[4].height, mP[2] *= 1.7, mP[3] *= 1.07, eo[0] = gap, eo[1] = gap,
				eo[2] = gap, eo[3] = gap, eo[4] = Math.floor(2 * gap + mP[3] * f2[3].width), eq[0] = gap, eq[1] = eq[0] + gap + mP[0] * f2[0].height, eq[2] = eq[1] + gap + mP[1] * f2[1].height, eq[3] = eq[2] + gap + mP[2] * f2[2].height, eq[4] =
				eq[3], !f9[0])
				for (aB = 0; aB < 5; aB++) eq[aB] -= mP[0] * f2[0].height + gap;
			if (!f9[1])
				for (aB = 2; aB < 5; aB++) eq[aB] -= mP[1] * f2[1].height + gap
		}
	}, this.hO = function() {
		return !(7 === aa.a0E() && a0.a1.r7())
	}, this.gu = function(hz, i0) {
		if (f2 && this.hO())
			for (var aB = f9.length - 1; 0 <= aB; aB--)
				if (f9[aB] && this.fS[aB] && eo[aB] < hz && eq[aB] < i0 && hz < eo[aB] + mP[aB] * f2[aB].width && i0 < eq[aB] + mP[aB] * f2[aB].height) return t.u(9, t.ry, new aBH("You are leaving Territorial.io.", b9.ph.a2J(a9X[aB]))), !0;
		return !1
	}, this.tq = function() {
		if (f2 && this.hO()) {
			var aB;
			for (tr.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) f9[aB] && this.fS[aB] && (tr.setTransform(mP[aB], 0, 0, mP[aB], eo[aB], eq[aB]), tr.drawImage(f2[aB], 0, 0));
			tr.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dT() {
	this.aBI = 0, this.aBJ = null, this.t4 = null, this.qt = null, this.y = null, this.tQ = null, this.t2 = null, this.message = null, this.aBK = null, this.qz = null, this.aBL = new aBM, this.a0B = 0, this.a85 = 0, this.dX = function() {
		this.a85 = be.eG, this.aBI = bF.s1.vM(bi.eE.data[105].value), this.t4 = new aBN, this.qt = new aBO, this.y = new aBP, this.tQ = new aBQ, this.t2 = new aBR, this.message = new aBS, this.aBK = new aBT, this.qz = new aBU, this.y.dX(), bo
		.dX(), this.a0B = 1, a0.a1.setState(1), aa.setState(0)
	}, this.tK = function() {
		this.qz && this.qz.tK(), this.aBJ = null, this.t4 = null, this.qt = null, this.y = null, this.tQ = null, this.t2 = null, this.message = null, this.aBK = null, this.qz = null, this.a0B = 0, bo.tK(), a0.a1.setState(0)
	}
}

function aBN() {
	function aBp(g, sI, sJ) {
		var aBq = g[sI];
		g[sI] = g[sJ], g[sJ] = aBq
	}
	this.t5 = [
		[],
		[],
		[],
		[]
	], this.t6 = [0, 0, 0, 0], this.aBV = [], this.aBW = function(aBX, rw, username, tB, a2n, aBY, elo, color, uu, aBZ) {
		this.t5[aBX].push(this.aBa(rw, username, tB, a2n, aBY, elo, color, uu, aBZ)), bm.aBI === rw && (bm.aBJ = this.t5[aBX][this.t5[aBX].length - 1]), bm.y.aBb += 29 === t.ry && bm.y.qm[0] === aBX && 1 === bm.y.qm[2]
	}, this.aBa = function(rw, username, tB, a2n, aBY, elo, color, uu, aBZ) {
		return {
			rw: rw,
			username: username,
			tB: tB,
			a2n: a2n,
			aBY: aBY,
			elo: elo,
			color: color,
			uu: uu,
			aBZ: aBZ
		}
	}, this.aBc = function(e2, aBX, tB, a2n, aBY, elo, uu) {
		e2 = this.t5[aBX][e2];
		e2.tB = tB, e2.a2n = a2n, e2.aBY = aBY, e2.elo = elo, e2.uu = uu, bm.y.aBb += 29 === t.ry && bm.y.qm[0] === aBX && 1 === bm.y.qm[2]
	}, this.aBd = function(e2, aBX, aBe) {
		var e2 = this.t5[aBX][e2],
			aBf = e2.username,
			aBg = "Redacted " + bE.s1.yM(e2.rw, 2);
		e2.username = aBe ? "[" + b9.qh.zk(aBf) + "] " + aBg : aBg, aBf.indexOf("Redacted") < 0 && (e2.aBh = aBf, e2.aBi = 3), bm.y.aBb += 29 === t.ry && bm.y.qm[0] === aBX && 1 === bm.y.qm[2]
	}, this.aBj = function(e2, aBk, aBl) {
		var player = this.t5[aBk][e2];
		this.aBm(e2, aBk), this.t5[aBl].push(player), bm.y.aBb += 29 === t.ry && bm.y.qm[0] === aBl && 1 === bm.y.qm[2]
	}, this.aBm = function(e2, aBk) {
		var t4 = this.t5[aBk];
		this.aBV.push(t4[e2]), 1e3 < this.aBV.length && this.aBV.shift(), e2 >= this.t6[aBk] ? t4[e2] = t4[t4.length - 1] : (this.t6[aBk]--, 2 === aBk ? (t4.splice(this.t6[aBk] + 1, 0, t4[t4.length - 1]), t4.splice(e2, 1)) : (t4[e2] = t4[this.t6[
			aBk]], t4[this.t6[aBk]] = t4[t4.length - 1])), t4.pop(), bm.y.aBb += 29 === t.ry && bm.y.qm[0] === aBk && 1 === bm.y.qm[2]
	}, this.aBn = function(e2, ql) {
		bm.y.aBb += 29 === t.ry && bm.y.qm[0] === ql && 1 === bm.y.qm[2];
		var t4 = this.t5[ql],
			pZ = t4[e2];
		if (2 === ql)
			if (e2 >= this.t6[ql]) {
				for (var aBo = this.t6[ql], elo = pZ.elo; aBo && elo > t4[aBo - 1].elo;) aBo--;
				t4[e2] = t4[this.t6[ql]], t4.splice(this.t6[ql]++, 1), t4.splice(aBo, 0, pZ)
			} else t4.splice(this.t6[ql]--, 0, pZ), t4.splice(e2, 1);
		else e2 >= this.t6[ql] ? aBp(t4, this.t6[ql]++, e2) : aBp(t4, --this.t6[ql], e2)
	}, this.aBr = function(rw) {
		for (var t5 = this.t5, eh = t5.length, aB = 0; aB < eh; aB++)
			for (var t4 = t5[aB], ke = t4.length, f0 = 0; f0 < ke; f0++)
				if (rw === t4[f0].rw) return t4[f0];
		return null
	}
}

function aBM() {
	this.dg = function(e2) {
		if ((t6 = bm.t4.t6[e2]) < 2) return !1;
		var qn = bm.y.qo[e2],
			aBs = 9 === qn.aBt ? 333 : 512,
			t6 = Math.min(t6, aBs);
		8 === qn.aBt && (t6 -= t6 % 2);
		aBs = bm.t4.t5[e2].splice(0, t6), bm.t4.t6[e2] -= t6, t6 = function(aBu) {
			if (bm.aBJ) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var eh = aBu.length, rw = bm.aBJ.rw, aB = 0; aB < eh; aB++)
					if (aBu[aB].rw === rw) return aB
			}
			return -1
		}(aBs);
		return -1 === t6 ? (bm.t4.aBV = bm.t4.aBV.concat(aBs), 1e3 < bm.t4.aBV.length && bm.t4.aBV.splice(0, bm.t4.aBV.length - 1e3), bm.y.aBb += 29 === t.ry && bm.y.qm[0] === e2 && 1 === bm.y.qm[2], !1) : (8 === qn.aBt && (qn.aBx = (qn.aBx + (
			t6 >> 1)) % 1024, e2 = t6 - t6 % 2, t6 %= 2, aBs = aBs.slice(e2, 2 + e2)), aw.dX(qn, aBs, t6), !0)
	}, this.aBy = function(qn, aBu, aBv) {
		var ek = aD.data = new a3X,
			aC2 = (ek.spawningSeed = qn.spawningSeed, qn.aBt < 7 ? (ek.gameMode = 1, ek.numberTeams = qn.aBt + 2) : 9 === qn.aBt ? (ek.gameMode = ek.isZombieMode = 1, ek.numberTeams = 2) : (ek.gameMode = 0, ek.battleRoyaleMode = 7 === qn.aBt ?
				0 : 10 === qn.aBt ? 1 : 2), ek.selectedPlayer = aBv, ek.isContest = qn.aBz, ek.mapType = bR.aC0(qn.eN) ? 0 : 1, bR.aC1(ek, qn.eN), ek.mapSeed = qn.mapSeed, ek.humanCount = aBu.length);
		ek.selectableSpawn = 1 === ek.gameMode || aC2 < 100, ek.colorsData = new Uint32Array(aC2), ek.playerNamesData = new Array(aC2);
		for (var aB = 0; aB < aC2; aB++) ek.colorsData[aB] = aBu[aB].color, ek.playerNamesData[aB] = aBu[aB].username;
		if (2 === ek.battleRoyaleMode)
			for (ek.elo = new Uint16Array(aC2), aB = 0; aB < aC2; aB++) ek.elo[aB] = aBu[aB].elo;
		aa.setState(8), bR.a7(qn.eN, ek.mapSeed), aD.a3b(), aD.a3a = 2
	}
}

function aBO() {
	var dt = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aC3 = [bA.n1, bA.n1, bA.n2, bA.nV, bA.nW, bA.nI, bA.nb, bA.n2, bA.nt, bA.nj, bA.nv],
		aC4 = [
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
		aC5 = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aCI(qp, rw, aCK) {
		for (var f1 = qp.length - 1; 0 <= f1; f1--) {
			var pZ = qp[f1];
			0 === pZ.id && pZ.rw === rw && (pZ.r = "[Redacted Message]", aCK) && (pZ.aCL = 1)
		}
	}
	this.qv = function(aC6) {
		var aC7, zl;
		return aC6.id < 5 && (aC7 = "@" + bE.s1.yM(aC6.rw, 5)), 0 === aC6.id ? aC7 + ": " + aC6.r : 1 === aC6.id ? (zl = "@" + bE.s1.yM(aC6.target, 5), 0 === aC6.aC8 ? 32768 <= aC6.value ? aC7 + " voted with " + (aC6.value - 32768 + 1) +
				" gold against " + zl + " to weaken the latter's admin position. 📉" : aC7 + " voted with " + (aC6.value + 1) + " gold for " + zl + " to strengthen the latter's admin position. 💪" : 1 === aC6.aC8 ? aC7 + " sent " + Math.floor(aC6
					.value / 100) + " 🧈 gold to " + zl + "." : aC7 + " voted with " + (aC6.value / 10).toFixed(1) + " points for " + zl + " to acknowledge the latter as clan leader. ✅") : 2 === aC6.id ? 0 === aC6.aC8 ? aC7 +
			" was 🔇 muted for 1 Hour." : 1 === aC6.aC8 ? "The username of " + aC7 + " was ✂️ redacted. Duration: 1 Day" : aC7 + " 👢 was kicked." : 3 === aC6.id ? aC7 + bn.e5(aC6.aC8, bn.dz[aC6.aC8][aC6.value]) + "@" + bE.s1.yM(aC6.target, 5) +
			bn.e7(aC6.aC8, bn.dz[aC6.aC8][aC6.value]) : 4 === aC6.id ? 3 === aC6.aC8 && 0 === aC6.rw ? "@" + bE.s1.yM(aC6.target, 5) + " was 🕵️‍♂️ stealth-reported." : aC7 + bn.e5(5, bn.dz[5][aC6.aC8]) + "@" + bE.s1.yM(aC6.target, 5) + bn.e7(5,
				bn.dz[5][aC6.aC8]) : 5 === aC6.id ? aC5[aC6.aC8] : 6 === aC6.id ? "You are about to mention " + aC6.value + " player" + (1 === aC6.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aC6.value, 10) / 100).toFixed(2) +
			" Gold. Proceed? (yes / no)" : void 0
	}, this.qu = function(aC6, a5w) {
		return {
			aC6: aC6,
			r: a5w,
			aC9: 0,
			fontSize: 1,
			qy: 0,
			aCA: aC6.id ? bA.nU : bA.mn
		}
	}, this.t9 = function(player, ql) {
		return (2 === ql ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.tA = function(tB) {
		return aC3[tB]
	}, this.aCB = function(tB, a2n) {
		return tB < 3 || 7 === tB ? aC4[tB][0] : 4 === tB ? aC4[tB][a2n < 1 ? 0 : a2n < 10 ? 1 : 2] : aC4[tB][a2n < 10 ? 0 : 1]
	}, this.aCC = function(a2n) {
		return 0 === a2n
	}, this.aBr = function(ql, rw) {
		for (var t5 = bm.t4.t5, t4 = t5[ql], eh = t4.length, aB = 0; aB < eh; aB++)
			if (rw === t4[aB].rw) return t4[aB];
		for (var f1 = 0; f1 < t5.length; f1++)
			if (ql !== f1)
				for (eh = (t4 = t5[f1]).length, aB = 0; aB < eh; aB++)
					if (rw === t4[aB].rw) return t4[aB];
		return null
	}, this.tC = function(pZ) {
		return !!bm.aBJ && pZ.rw === bm.aBJ.rw
	}, this.aCD = function(t4, aCE, aCF) {
		var zi = [];
		loop: for (var aB = aCE; aB < aCF; aB++) {
			var zj = b9.qh.zk(t4[aB].username);
			if (zj) {
				for (var f1 = zi.length - 1; 0 <= f1; f1--)
					if (zj === zi[f1].name) {
						zi[f1].g9++;
						continue loop
					} zi.push({
					name: zj,
					g9: 1
				})
			}
		}
		if (zi.sort(function(f0, f1) {
				return f1.g9 - f0.g9
			}), 0 === zi.length) return "";
		for (var pO = zi[0].name + ": " + zi[0].g9, aB = 1; aB < zi.length; aB++) pO += "   " + zi[aB].name + ": " + zi[aB].g9;
		return pO
	}, this.aCG = function(tB, a2n, aBY) {
		return 0 === dt[tB].length ? "Rank: " + (a2n + 1) : dt[tB] + " Rank: " + (a2n + 1) + (3 !== tB && aBY < 100 ? "   " + dt[3] + " Rank: " + (aBY + 1) : "")
	}, this.aCH = function(rw) {
		for (var qo = bm.y.qo, aB = 0; aB < qo.length; aB++) aCI(qo[aB].qp, rw);
		aCI(bm.message.aCJ(), rw, 1), bm.qz.aCH(rw)
	}
}

function aBR() {
	var rR = 0,
		aCM = 0,
		aCN = 0,
		aCO = null,
		aCP = null;

	function aCS(pZ, aCT, aCU) {
		var pO = pZ.username;
		return (pO += "   " + bm.qt.aCG(pZ.tB, pZ.a2n, pZ.aBY)) + function(pZ) {
			pZ = pZ.uu;
			if (pZ < 1e3) return "   Gold: " + pZ;
			if ((pZ %= 1024) < 1e3) return "   Gold: " + pZ + "k";
			return "   Gold: " + (pZ - 999) + "M"
		}(pZ) + ("   IP: " + bE.s1.yM(pZ.aBZ, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aCU ? aCM : aCR(pZ, aCT)])
	}

	function aCR(pZ, aCT) {
		return aCM = aCT || bm.t4.aBr(pZ.rw) ? 1 : 0
	}
	this.aCQ = function() {
		!rR || aCM === aCR(aCP) && aCN === aCP.uu || (aCN = aCP.uu, aCO.show(-1, -1, aCS(aCP, 0, 1), 1, 1))
	}, this.tD = function(e, pZ, aCT) {
		var a7L = e.target.getBoundingClientRect();
		this.show(a7L.left, a7L.top, pZ, 0, aCT), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bm.t2 && bm.t2.r0(1)
		})
	}, this.show = function(eo, eq, pZ, rV, aCT) {
		aCO = aCO || new rP, aCN = (aCP = pZ).uu, aCO.show(eo, eq, aCS(pZ, aCT), rV), rR = 1
	}, this.r0 = function(rb) {
		aCO && aCO.r0(rb) && (rR = 0, aCP = null)
	}
}

function aBP() {
	function aCZ(aCc) {
		bm.y.aBb && 1 === bm.y.qm[2] && t.a45(29).aCd(), bm.y.aBb = 0, t.a45(29).aCe(), 0 !== bm.y.qo[bm.y.qm[0]].sp && !aCc || t.a45(29).aCf(), bm.t2.aCQ()
	}
	this.qo = new Array(4), this.qm = [0, 0, 1, 0], this.aBb = 0, this.aCW = [0, 0], this.dX = function() {
		for (var aB = 0; aB < this.qo.length; aB++) this.qo[aB] = new aCX;
		this.qm[0] = bi.eE.data[158].value
	}, this.aCY = function() {
		aCZ(!0)
	}, this.aCa = function() {
		for (var aB = 0; aB < bm.y.qo.length; aB++) {
			var qn = bm.y.qo[aB];
			0 === qn.sp ? qn.aCg = 0 : (qn.aCh = Math.max(qn.aCh - qn.aCg % 2, 0), qn.aCg++)
		}
		aCZ(!1)
	}, this.aCi = function(ql) {
		this.qm[0] !== ql || this.qm[2] || t.a45(29).aCj()
	}
}

function aBT() {
	var aCk = 0,
		aCl = "",
		aCm = 0,
		aCn = 0,
		aCo = 0;

	function aCq(a5w) {
		az.aD1.aD2(3, a5w)
	}

	function aCz(g9) {
		aCk = 1, bm.message.aD3({
			id: 6,
			value: g9
		})
	}

	function aCt(r) {
		var aD6 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aD6)
	}
	this.z8 = function(r) {
		var aCp, g, aCv;
		if (aCk) return aCk = 0, "yes" === (aCp = r.toLowerCase()) || "y" === aCp ? void aCq(aCl) : void bm.message.aD3({
			id: 5,
			aC8: 7
		});
		!(r.indexOf("@") < 0) && (aCp = aCt(r)) ? (aCl = r, g = function(aCs) {
			for (var eh = aCs.length, aD4 = [0, 0, 0, 0], aB = 0; aB < eh; aB++)
				for (var i = aCs[aB], f0 = 0; f0 < 4; f0++) i === "@room" + (f0 + 1) && (aD4[f0] = 1);
			if ((aCn = b9.pq.a1X(aD4)) % 4 == 0) return b9.pq.a1p(bm.t4.t5);
			for (f0 = 0; f0 < 4; f0++) aD4[f0] = aD4[f0] ? bm.t4.t5[f0] : [];
			return b9.pq.a1p(aD4)
		}(aCp), function(aCs, aCv, r) {
			if (!aCm) return;
			for (var eh = aCv.length, aB = 0; aB < eh; aB++) 2 === aCv[aB].id && (r = r.replace(aCs[aCv[aB].e2], "@" + aCv[aB].f9));
			return aCk = 1, aCq((aCl = r).slice(0, 126) + "|"), 1
		}(aCp, aCv = function(aCs) {
			for (var aCv = [], eh = (aCo = aCm = 0, aCs.length), aB = 0; aB < eh; aB++) {
				var i = aCs[aB],
					ke = i.length;
				b9.qh.startsWith(i, "@[") ? ke <= 9 && b9.qh.a2N(i, "]") && aCv.push({
					id: 0,
					f9: i.substring(2, ke - 1).toUpperCase()
				}) : 6 === ke ? b9.qh.startsWith(i, "@room") || (aCo++, aCv.push({
					id: 1,
					f9: bF.s1.vM(i.substring(1))
				})) : 1 < ke && ke < 5 && 0 <= (ke = b6.data.aAw(i.substring(1))) && (aCv.push({
					id: 2,
					f9: ke,
					e2: aB
				}), aCm = 1)
			}
			return aCv
		}(aCp), r) || (0 === aCv.length ? aCn || function(aCs) {
			for (var eh = aCs.length, aB = 0; aB < eh; aB++) {
				var i = aCs[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCp) ? aCz(g.length) : aCq(r) : aCp.length === aCo ? aCq(r) : (function(g, aCv) {
			var ke = aCv.length;
			if (0 === ke) return;
			var eh = g.length;
			loop: for (var aB = eh - 1; 0 <= aB; aB--) {
				for (var f0 = 0; f0 < ke; f0++)
					if (0 === aCv[f0].id) {
						if (aCv[f0].f9 === b9.qh.zk(g[aB].username)) continue loop
					} else if (1 === aCv[f0].id && aCv[f0].f9 === g[aB].rw) continue loop;
				g[aB] = g[--eh], g.pop()
			}
		}(g, aCv), aCz(g.length)))) : aCq(r)
	}, this.aD7 = function(r) {
		var aCs = aCt(r);
		if (aCs)
			for (var a5 = new RegExp("^[0-9]+$"), eh = aCs.length, aB = 0; aB < eh; aB++) {
				var i = aCs[aB].substring(1),
					ke = i.length;
				1 <= ke && ke <= 3 && a5.test(i) && (ke = parseInt(i, 10), !isNaN(ke)) && 0 <= ke && ke < b6.data.g.length && (r = r.replace("@" + i, "@" + b6.data.g[ke]))
			}
		return r
	}
}

function aBS() {
	var aD8, aD9 = [],
		aDA = -1,
		aDB = 0,
		aDC = 0;

	function aDG() {
		aDB = be.eG, (3 === this.tH ? (aDC = 1, aDF) : (aDA = (aD9.length + aDA + 2 * this.tH - 1) % aD9.length, aDE))()
	}

	function aDE() {
		0 !== aD9.length && (aDC = 0, aD8 && aD8.tK(), (aD8 = new tE(aDG)).rC(aDA, aD9.length), aD8.show(aD9[aDA]), bm.message.resize())
	}

	function aDF() {
		aD8 && aD8.tK(), (aD8 = new tL(aDE)).rC(aD9.length), aD8.show(), bm.message.resize()
	}
	this.aD3 = function(aC6) {
		var pZ;
		2 === aC6.id && 3 === aC6.aC8 ? bm.qt.aCH(aC6.rw) : (pZ = bm.qt.qu(aC6, bm.qt.qv(aC6)), (5 !== aC6.id && 6 !== aC6.id || (t.a45(29).aDD().qx(pZ), 5 === aC6.id)) && (pZ = be.eG < aDB + 2e4, aDA !== aD9.length - 1 && pZ || (aDA = aD9
			.length), aD9.push(aC6), bi.eE.data[14].value || bo.play(), aD8) && (bi.eE.data[13].value || aDC && pZ ? aD8.rC(aD9.length) : aDE()))
	}, this.show = function() {
		aDF()
	}, this.r0 = function() {
		aDA = aD9.length - 1, aD8 && aD8.tK(), aD8 = null
	}, this.resize = function() {
		aD8 && aD8.resize()
	}, this.aCJ = function() {
		return aD9
	}
}

function aBQ() {
	var aDH = null,
		aDI = null,
		aDJ = 0,
		aDK = 0,
		aDL = null;

	function aDN() {
		0 !== aDI.tB && (bm.tQ.r0(), t.u(8, 29, new rz(25, {
			s0: 0,
			rw: bE.s1.yM(aDI.rw, 5),
			rx: 0
		}, 29)))
	}

	function aDO() {
		var eo = aDH.eo,
			eq = aDH.eq;
		bm.tQ.r0(), aDH = new tM([new w("Kick User", function() {
			aDU(0, 0)
		}, aDX(0, 0)), new w("Block Chat", aDV, aDX(1, 0)), new w("Censor Username", aDW, aDX(2, 0))]), aDT(eo, eq), aDJ = 2, aDK = 1
	}

	function aDX(id, e2) {
		var e1, aBY;
		return !bm.aBJ || bm.qt.tC(aDI) || (e1 = aDI.a2n) <= (aBY = bm.aBJ.aBY) || 1 - bn.e0(id, aBY, e2) ? 1 : 4 === aDI.tB ? 50 <= e1 ? +(e1 <= aBY) : 20 <= e1 ? +(e1 / 2 <= aBY) : +(e1 / 3 <= aBY) : 0
	}

	function aDR() {
		return !bm.aBJ || bm.qt.tC(aDI) ? 1 : 0
	}

	function aDQ() {
		var eo = aDH.eo,
			eq = aDH.eq,
			aDY = (bm.tQ.r0(), aDR());
		aDH = new tM([new w(bn.dz[5][0], function() {
			aDU(5, 0)
		}, aDY), new w(bn.dz[5][1], function() {
			aDU(5, 1)
		}, aDY), new w(bn.dz[5][2], function() {
			aDU(5, 2)
		}, aDY), new w(aDI.aBY < 100 ? "Stealth Report" : bn.dz[5][3], function() {
			aDU(5, 3)
		}, aDY)]), aDT(eo, eq), aDK = aDJ = 2
	}

	function aDS() {
		29 === t.ry && t.a44().aBK(bE.s1.yM(aDI.rw, 5))
	}

	function aDU(id, value) {
		az.aD1.aD2(5, {
			id: id,
			value: value,
			rw: aDI.rw
		})
	}

	function aDV() {
		var eo = aDH.eo,
			eq = aDH.eq;
		bm.tQ.r0(), aDH = new tM([new w(bn.dz[1][0], function() {
			aDU(1, 0)
		}, aDX(1, 0)), new w(bn.dz[1][1], function() {
			aDU(1, 1)
		}, aDX(1, 1)), new w(bn.dz[1][2], function() {
			aDU(1, 2)
		}, aDX(1, 2)), new w(bn.dz[1][3], function() {
			aDU(1, 3)
		}, aDX(1, 3)), new w(bn.dz[1][4], function() {
			aDU(1, 4)
		}, aDX(1, 4))]), aDT(eo, eq), aDJ = 3, aDK = 1
	}

	function aDW() {
		var eo = aDH.eo,
			eq = aDH.eq;
		bm.tQ.r0(), aDH = new tM([new w(bn.dz[2][0], function() {
			aDU(2, 0)
		}, aDX(2, 0)), new w(bn.dz[2][1], function() {
			aDU(2, 1)
		}, aDX(2, 1)), new w(bn.dz[2][2], function() {
			aDU(2, 2)
		}, aDX(2, 2))]), aDT(eo, eq), aDJ = 3, aDK = 2
	}

	function aDT(eo, eq, tS) {
		aDH.show(eo, eq, tS), bm.t2.show(aDH.eo, aDH.eq, aDI, 1)
	}
	this.aDM = function(e, pZ) {
		aDJ = 1, aDI = pZ, aDH = new tM([new w(L(130), aDN, 0 === aDI.tB ? 1 : 0), new w(L(131), aDO, function() {
			if (!bm.aBJ) return 1;
			if (bm.qt.tC(aDI)) return 1;
			if (100 <= bm.aBJ.aBY) return 1;
			if (bm.aBJ.aBY >= aDI.a2n) return 1;
			return 0
		}()), new w(L(132, 0, "🚩 Report"), aDQ, aDR()), new w(L(133), aDS, 0)]), aDT((aDL = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aDL.clientY, 1)
	}, this.a16 = function(code) {
		if (29 !== t.ry) return !1;
		if (!aDI) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.r0();
			else if (b9.qh.startsWith(code, "Numpad") || b9.qh.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aDJ) this.aDM(aDL, aDI);
				else {
					if (!aDH) return !1;
					1 === aDJ ? code <= 1 ? aDN() : 2 === code ? aDO() : 3 === code ? aDQ() : (aDS(), this.r0()) : 2 === aDJ ? 1 === aDK ? code <= 1 ? (aDU(0, 0), this.r0()) : (2 === code ? aDV : aDW)() : (aDU(5, bK.pF(code - 1, 0, 3)), this
					.r0()) : (aDU(aDK, bK.pF(code - 1, 0, bn.dz[aDK].length - 1)), this.r0())
				}
		}
		return !0
	}, this.r0 = function() {
		aDJ = 0, aDH && aDH.r0(), aDH = null, bm.t2.r0()
	}
}

function aCX() {
	this.sp = 0, this.eN = 0, this.mapSeed = 0, this.aBt = 0, this.aDb = 0, this.aDc = 0, this.aBz = 0, this.aCh = 0, this.spawningSeed = 0, this.a0J = 0, this.aBx = 0, this.qp = [], this.qq = 1048575, this.aCg = 0, this.aDd = [{
		eN: 0,
		mapSeed: 0,
		aBt: 0,
		eG: 100,
		aBz: 0
	}, {
		eN: 1,
		mapSeed: 0,
		aBt: 1,
		eG: 200,
		aBz: 0
	}, {
		eN: 2,
		mapSeed: 0,
		aBt: 2,
		eG: 300,
		aBz: 0
	}, {
		eN: 3,
		mapSeed: 0,
		aBt: 3,
		eG: 400,
		aBz: 0
	}, {
		eN: 0,
		mapSeed: 0,
		aBt: 9,
		eG: 500,
		aBz: 0
	}, {
		eN: 1,
		mapSeed: 0,
		aBt: 10,
		eG: 600,
		aBz: 0
	}, {
		eN: 2,
		mapSeed: 0,
		aBt: 8,
		eG: 700,
		aBz: 0
	}, {
		eN: 3,
		mapSeed: 0,
		aBt: 3,
		eG: 800,
		aBz: 0
	}]
}

function aBU() {
	var aDe = [],
		sB = [],
		aDf = [];

	function aDh(pZ) {
		for (var r = pZ.r, aDg = [];;) {
			var f2 = function aDj(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var pO = r.substring(position + 1, position + 6);
				if (5 !== pO.length) return aDj(r, position + 1);
				if (b9.qh.startsWith(pO, "room")) return aDj(r, position + 1);
				var aDq = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aDq.test(pO)) return aDj(r, position + 1);
				aDq = r.substring(position + 6, position + 7);
				if (1 !== aDq.length) return position;
				pO = new RegExp("^[ :!.]+$");
				if (!pO.test(aDq)) return aDj(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f2) {
				aDg.push(aDk(r, pZ));
				break
			}
			0 === f2 ? aDg.push(aDl(r.substring(1, 6), pZ, f2)) : (aDg.push(aDk(r.substring(0, f2), pZ)), aDg.push(aDl(r.substring(f2 + 1, f2 + 6), pZ, f2))), r = r.substring(f2 + 6)
		}
		return aDg
	}

	function aDl(pO, pZ, f2) {
		var aDm = function(pO) {
				var rw = bF.s1.vM(pO),
					aDm = bm.t4.aBr(rw);
				if (aDm) {
					for (aDe.push(aDm); 75 < aDe.length;) aDe.shift();
					return aDm
				}
				for (var aBV = bm.t4.aBV, aB = aBV.length - 1; 0 <= aB; aB--)
					if (aDm = aBV[aB], rw === aDm.rw) return aDe.push(aDm), aDm;
				for (aB = aDe.length - 1; 0 <= aB; aB--)
					if (aDm = aDe[aB], rw === aDm.rw) return aDe.push(aDm), aDm;
				return bm.t4.aBa(rw, pO, 1, 999999, 999999, 0, 0, 0, 0)
			}(pO),
			pO = (0 === f2 && 0 === pZ.aC6.id && pZ.qy && (pZ.fontSize = bm.qt.aCB(aDm.tB, aDm.a2n), pZ.aC9 = bm.qt.aCC(aDm.a2n)), document.createElement("span"));
		return pO.textContent = function(aDm, pZ, f2) {
			if (aDm.aBi) return aDm.aBi--, f2 = 2 === pZ.aC6.id || (3 === pZ.aC6.id || 4 === pZ.aC6.id) && 0 !== f2, aDm.username + (f2 ? " (" + aDm.aBh + ")" : "");
			if (pZ.aC6.aCL) return "Redacted " + bE.s1.yM(aDm.rw, 2);
			return aDm.username
		}(aDm, pZ, f2), pO.style.display = "inline-block", pO.style.color = bm.qt.tA(aDm.tB), pO.style.cursor = "pointer", pO.style.margin = "0", pO.style.font = "inherit", pO.style.minWidth = pO.style.minHeight = "1em", bm.qt.tC(aDm) && (pO
			.style.textDecoration = "underline"), bm.qt.aCC(aDm.a2n) && (pO.style.fontWeight = "bold"), pO.onclick = function(e) {
			bm.tQ.aDM(e, aDm)
		}, bI.qA() || (pO.onmouseover = function(e) {
			bm.t2.tD(e, aDm)
		}), sB.push(pO), pO
	}

	function aDk(r, pZ) {
		var qg = document.createElement("span");
		return qg.textContent = r, qg.style.color = pZ.aCA, qg.style.margin = "0", qg.style.font = "inherit", qg
	}

	function aDv(aDm, aBg, rw) {
		rw !== aDm.rw || aDm.aBh || (aDm.aBh = aDm.username, aDm.aBi = 3, aDm.username = aBg)
	}
	this.tK = function() {
		for (var aB = 0; aB < sB.length; aB++) sB[aB].onclick = sB[aB].onmouseover = null;
		aDf = sB = null
	}, this.transform = function(pZ) {
		for (var pM = document.createElement("div"), aDg = aDh(pZ), aB = 0; aB < aDg.length; aB++) pM.appendChild(aDg[aB]);
		0 === pZ.aC6.id && (pM.vx143 = pZ.aC6, aDf.push(pM)), pM.style.margin = "0.6em 0.6em", pZ.qy && (pM.style.marginLeft = pM.style.marginRight = "inherit"), pM.style.font = "inherit";
		var aDi = 0 < pZ.aC6.id;
		return pZ.aC9 && (pM.style.fontWeight = "bold"), aDi && (pM.style.paddingLeft = "0.7em"), aDi && (pM.style.fontStyle = "italic"), pM.style.fontSize = pZ.fontSize.toFixed(2) + "em", pM
	}, this.aDt = function(aDu) {
		if (aDu && (2 === aDu.id && 1 === aDu.aC8 || 3 === aDu.id && 2 === aDu.aC8)) {
			var rw = 3 === aDu.id ? aDu.target : aDu.rw;
			if (!bm.t4.aBr(rw)) {
				for (var aBg = "Redacted " + bE.s1.yM(rw, 2), aBV = bm.t4.aBV, aB = aBV.length - 1; 0 <= aB; aB--) aDv(aBV[aB], aBg, rw);
				for (aB = aDe.length - 1; 0 <= aB; aB--) aDv(aDe[aB], aBg, rw)
			}
		}
	}, this.aCH = function(rw) {
		for (var aDw = aDf, aB = aDw.length - 1; 0 <= aB; aB--) {
			var ek = aDw[aB];
			if (ek.vx143.rw === rw) {
				for (; ek.firstChild;) ek.removeChild(ek.firstChild);
				ek.vx143.r = "[Redacted Message]";
				for (var aDg = aDh(bm.qt.qu(ek.vx143, bm.qt.qv(ek.vx143))), f0 = 0; f0 < aDg.length; f0++) ek.appendChild(aDg[f0]);
				aDw.splice(aB, 1)
			}
		}
	}
}

function cM() {
	var aDx, aDy, aDz;

	function aE4(aB) {
		var button = aY.qH[aB],
			eo = button.eo,
			eq = button.eq,
			i = button.i,
			j = button.j;
		tr.fillStyle = button.aE2, tr.fillRect(eo, eq, i, j), aB === aDx && (tr.fillStyle = aDz, tr.fillRect(eo, eq, i, j)), tr.lineWidth = bb.y5, tr.strokeStyle = aDy, tr.strokeRect(eo, eq, i, j),
			function(button) {
				var eo = button.eo,
					eq = button.eq,
					i = button.i,
					j = button.j;
				b9.ph.textAlign(tr, 1), b9.ph.textBaseline(tr, 1), tr.font = button.font, tr.fillStyle = aDy, tr.fillText(button.a5w, Math.floor(eo + i / 2), Math.floor(eq + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.eq = 0, this.gap = 0, this.dX = function() {
		aDx = -1, aDy = bA.mn, aDz = "rgba(255,255,255,0.16)", this.qH = new Array(7), this.j = Math.floor((a0.a1.r7() ? .123 : .093) * h.pj), this.i = Math.floor((a0.a1.r7() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aE0 = Math.floor(.26 * this.j),
			aE1 = b9.ph.rY(1, aE0);
		this.qH[0] = {
			eo: 0,
			eq: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5w: "Multiplayer",
			font: aE1,
			aE2: "rgba(22,88,22,0.8)",
			fontSize: aE0
		}, aE0 = Math.floor(.18 * this.j), aE1 = b9.ph.rY(1, aE0), this.qH[1] = {
			eo: 0,
			eq: 0,
			i: this.i - this.qH[0].i - this.gap,
			j: this.j,
			a5w: "Single Player",
			font: aE1,
			aE2: "rgba(22,88,88,0.8)",
			fontSize: aE0
		}, this.qH[2] = {
			eo: 0,
			eq: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5w: "",
			font: this.qH[1].font,
			aE2: "rgba(100,0,0,0.8)",
			fontSize: this.qH[1].fontSize
		}, this.qH[3] = {
			eo: 0,
			eq: 0,
			i: this.i,
			j: this.j,
			a5w: "Back",
			font: this.qH[0].font,
			aE2: "rgba(0,0,0,0.8)",
			fontSize: this.qH[0].fontSize
		}, this.qH[4] = {
			eo: 0,
			eq: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5w: "The game was updated!",
			font: this.qH[1].font,
			aE2: "rgba(100,0,0,0.8)",
			fontSize: this.qH[1].fontSize
		}, this.qH[5] = {
			eo: 0,
			eq: 0,
			i: this.qH[0].i,
			j: Math.floor(.8 * this.j),
			a5w: "Reload",
			font: this.qH[0].font,
			aE2: "rgba(0,100,0,0.8)",
			fontSize: this.qH[0].fontSize
		}, this.qH[6] = {
			eo: 0,
			eq: 0,
			i: this.qH[1].i,
			j: this.qH[5].j,
			a5w: "Back",
			font: this.qH[0].font,
			aE2: "rgba(0,0,0,0.8)",
			fontSize: this.qH[0].fontSize
		}, this.a8H()
	}, this.a8H = function() {
		this.eq = Math.floor(.54 * h.j), this.qH[0].eo = Math.floor(.5 * h.i - .5 * this.i), this.qH[1].eo = this.qH[0].eo + this.qH[0].i + this.gap, this.qH[2].eo = this.qH[3].eo = this.qH[0].eo, this.qH[4].eo = this.qH[5].eo = this.qH[0].eo,
			this.qH[6].eo = this.qH[1].eo, this.qH[0].eq = Math.floor(.54 * h.j), this.qH[1].eq = this.qH[0].eq, this.qH[2].eq = Math.floor((h.j - this.qH[2].j - this.qH[3].j - this.gap) / 2), this.qH[3].eq = this.qH[2].eq + this.qH[2].j + this
			.gap, this.qH[4].eq = Math.floor((h.j - this.qH[4].j - this.qH[5].j - this.gap) / 2), this.qH[5].eq = this.qH[6].eq = this.qH[4].eq + this.qH[4].j + this.gap
	}, this.aE3 = function() {
		aE4(0), aE4(1)
	}, this.aE5 = function() {
		aE4(2), aE4(3)
	}, this.aE6 = function() {
		aE4(4), aE4(5), aE4(6)
	}, this.a0Y = function(eo, eq, lY) {
		var aB = -1;
		return 0 === aa.a0E() ? aB = this.a12(eo, eq, 0, 2) : 3 === aa.a0E() ? aB = this.a12(eo, eq, 3, 1) : 5 === aa.a0E() && (aB = this.a12(eo, eq, 5, 2)), aDx !== aB && (aDx = aB, lY) && (be.df = !0), -1 !== aB && (aT.qj(), !0)
	}, this.a12 = function(eo, eq, aE7, size) {
		for (var aB = aE7; aB < aE7 + size; aB++)
			if (eo >= this.qH[aB].eo && eq >= this.qH[aB].eq && eo <= this.qH[aB].eo + this.qH[aB].i && eq <= this.qH[aB].eq + this.qH[aB].j) return aB;
		return -1
	}
}

function cN() {
	var aE9, aEA, aEB, aEC, aED, aEE, aEF, aEG, aEH, aEI, aEJ, aEK, aEL, aEM = 1;

	function aEO(aEP) {
		!aEP && 1 === aEL && aEM ? (aEM = 0, az.y.close(aEL, 3280)) : aEL = (aEL + 1) % az.y.aEQ, aEK = be.eG, az.y.aER(aEL, 4) && az.aD1.aES(aEL)
	}

	function aET() {
		if (0 !== aEL) return 1 === aEL && __fx.customLobby.isActive() ? (o.a0M(3249), __fx.customLobby.setActive(!1)) : void aEO();
		o.a0M(3249)
	}

	function aEY(eq, a7z, sp) {
		var mD = Math.floor((h.i - aEC) / 2) + aEF,
			mQ = mD + Math.floor(sp * (aEC - 2 * aEF));
		tr.lineWidth = a7z, tr.beginPath(), tr.moveTo(mD, eq), tr.lineTo(mQ, eq), tr.lineTo(Math.floor(mD - aEF + sp * aEC), eq + aEB), tr.lineTo(mD - aEF, eq + aEB), tr.closePath()
	}
	this.aEN = 1, this.dX = function() {
		aa.setState(6), aE9 = 0, aEA = 1, aEG = "rgba(0,220,120,0.4)", aEH = "rgba(0,0,0,0.8)", this.resize(), be.df = !0, aEM = 1, aEL = this.aEN - 1, aEO(1)
	}, this.resize = function() {
		aEC = Math.floor((a0.a1.r7() ? .5 : .25) * h.pj), aED = aEC + 12, aEB = Math.floor(.125 * aEC), aEF = 3 * aEB, aEE = Math.floor(.225 * aEC), aEJ = Math.floor(.3 * aEB), aEI = b9.ph.rY(0, aEJ)
	}, this.a0I = function(a09) {
		a09 === aEL && aET()
	}, this.gu = function(eo, eq) {
		var mD = Math.floor((h.i - aED) / 2),
			mE = Math.floor(.5 * (h.j - bb.gap - aEB - aEE)) + aEB + bb.gap;
		return mD < eo && eo < mD + aED && mE < eq && eq < mE + aEE && (this.a1E(), aY.a0Y(eo, eq, !1), !0)
	}, this.a1E = function() {
		az.y.a0O(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.ir = function() {
		6 === aa.a0E() && (be.eG > aEK + 12e3 && aET(), 100 < (aE9 += .07 * aEA * (aE9 < 16 ? 5 + aE9 : 84 < aE9 ? 105 - aE9 : 17)) ? (aE9 = 100, aEA = -1) : aE9 < 0 && (aE9 = 0, aEA = 1), aEG = "rgba(0," + Math.floor(190 - 1.9 * aE9) + "," +
			Math.floor(120 - 1.2 * aE9) + "," + (.4 + .004 * aE9) + ")", aEH = "rgba(0," + Math.floor(1.9 * aE9) + "," + Math.floor(1.2 * aE9) + "," + (.8 - .004 * aE9) + ")", be.df = !0)
	}, this.tq = function() {
		var eo = Math.floor((h.i - aED) / 2),
			eq = Math.floor(.5 * (h.j - bb.gap - aEB - aEE));
		! function(title, eq, a7z, sp) {
			tr.fillStyle = aEH, aEY(eq, a7z, 1), tr.fill(), tr.fillStyle = aEG, aEY(eq, a7z, sp), tr.fill(), tr.strokeStyle = bA.mn, aEY(eq, a7z, 1), tr.stroke(),
				function(aEa, eq) {
					b9.ph.textAlign(tr, 1), b9.ph.textBaseline(tr, 1), tr.font = aEI, tr.fillStyle = bA.mn, tr.fillText(aEa, Math.floor(.5 * h.i), Math.floor(eq + .58 * aEB))
				}(title, eq)
		}(L(134), eq, 3, aE9 / 100),
		function(eo, eq, i, j, a5w) {
			tr.fillStyle = bA.mi, tr.fillRect(eo, eq, i, j), tr.lineWidth = 3, tr.strokeStyle = bA.mn, tr.strokeRect(eo, eq, i, j);
			var eh = Math.floor(.3 * j);
			b9.ph.textAlign(tr, 1), b9.ph.textBaseline(tr, 1), tr.font = b9.ph.rY(0, eh), tr.fillStyle = bA.mn, tr.fillText(a5w, Math.floor(eo + i / 2), Math.floor(eq + j / 2 + .1 * eh))
		}(eo, eq + aEB + bb.gap, aED, aEE, L(37))
	}
}

function cO() {
	var a05 = 0;
	this.dX = function() {
		aY.dX(), a05 = 0
	}, this.setState = function(aEb) {
		a05 = aEb
	}, this.a0E = function() {
		return a05
	}, this.aEc = function() {
		this.setState(8), t.x()
	}, this.a16 = function(e) {
		if (!bR.vc) return !1;
		if (!(be.eG < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aEd()) return !0;
				if ("Enter" === e.key) {
					if (0 === a05) return !0;
					if (7 === a05) return !0
				}
			}
			return !1
		}
	}, this.aEe = function() {
		bY.resize()
	}, this.aEd = function() {
		return !!bY.r0()
	}, this.gu = function(eo, eq) {
		!bR.vc || bY.gu(eo, eq) || 6 === a05 && aZ.gu(eo, eq) || bX.gu(eo, eq) || aT.gu(eo, eq)
	}, this.a0Y = function(eo, eq) {
		!aT.a8A && aY.a0Y(eo, eq, !0) || aT.a0Y(eo, eq)
	}, this.click = function(eo, eq) {
		aT.a0x()
	}, this.a0b = function(eo, eq, deltaY) {}, this.aEf = function() {
		aY.a8H(), be.df = !0
	}, this.tq = function() {
		8 !== a05 && 10 !== a05 && (tr.imageSmoothingEnabled = !0, this.xA(), 0 !== a05 && (aT.tq(), aO.tq(), this.aEg(), bX.tq()), 0 !== a05 && 6 === a05 && aZ.tq(), bY.tq(), t.tq())
	}, this.xA = function() {
		var aEi, aEh;
		if (__fx.makeMainMenuTransparent) tr.clearRect(0, 0, h.i, h.j);
		else bR.vc ? (aEh = h.i / bR.es, aEi = h.j / bR.et, tr.setTransform(aEh = aEi < aEh ? aEh : aEi, 0, 0, aEh, Math.floor((h.i - aEh * bR.es) / 2), Math.floor((h.j - aEh * bR.et) / 2)), tr.drawImage(bR.ve, 0, 0), tr.setTransform(1, 0, 0, 1,
			0, 0), tr.fillStyle = bA.mi) : tr.fillStyle = bA.me, tr.fillRect(0, 0, h.i, h.j)
	}, this.aEg = function() {
		var eq = Math.floor(.3 * h.j),
			canvas = ab.aEj("territorial.io"),
			hd = (hd = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hd,
			eo = (tr.globalAlpha = .15, tr.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hd * canvas.width))),
			eo = Math.floor(eo / hd),
			eq = Math.floor(eq - .5 * canvas.height * hd),
			eq = Math.floor(eq / hd);
		tr.setTransform(hd, 0, 0, hd, eo, eq), tr.drawImage(canvas, eo, eq), tr.setTransform(1, 0, 0, 1, 0, 0), tr.globalAlpha = 1, tr.imageSmoothingEnabled = !0
	}
}

function cn() {
	this.aBx = 0;
	var aEl, aEm, aEn, aEo, aEp, aEq = this.aEk = 0;

	function aEt() {
		aEo = aEp = null, aEq = 0
	}
	this.dX = function(qn, aBu, aBv) {
		t.x(), bm.tK(), aa.setState(10), aEo = qn, aEp = aBu, aEq = aBv, this.aBx = qn.aBx, this.aEk = aBv, aEl = 0, aEm = be.eG + 4500, az.y.a0J = qn.a0J, az.y.a0C === qn.a0J ? (console.log("direct pass"), aEn = 0) : (console.log(
			"delayed pass"), az.y.close(az.y.a0C, 3247), aEn = 2, az.y.aER(qn.a0J, 5) && az.o6.aEr()), tr.imageSmoothingEnabled = !0, aa.xA();
		aBu = ab.aEj("loading"), aBv = (a0.a1.r7() ? .396 : .25) * h.pj / aBu.width;
		tr.setTransform(aBv, 0, 0, aBv, Math.floor((h.i - aBv * aBu.width) / 2), Math.floor((h.j - aBv * aBu.height) / 2)), tr.imageSmoothingEnabled = !1, tr.drawImage(aBu, 0, 0), tr.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lW = function() {
		0 < aEn && be.eG > aEm && (aEn--, aEm += 4500, 0 === be.aEv) && 0 === be.jt() && az.y.aER(az.y.a0J, 5)
	}, this.aEw = function() {
		return 10 === aa.a0E() && (bm.aBL.aBy(aEo, aEp, aEq), aEt(), !0)
	}, this.aEx = function() {
		10 === aa.a0E() && 2 <= ++aEl && (bm.aBL.aBy(aEo, aEp, aEq), aEt())
	}
}

function cP() {
	var aEz, canvas, zP, aF0;

	function aF6(e2, name, aF7, pO) {
		zP[e2] = name, canvas[e2] = new Image, canvas[e2].onload = function() {
			! function(e2, aF7) {
				var a2t, a2u = null;
				7 === aF7 ? a2t = b9.a1K.a2w : 8 === aF7 ? (a2t = b9.a1K.a2z, a2u = .1) : 3 === aF7 ? (a2t = b9.a1K.a2x, a2u = .06) : 5 === aF7 ? a2t = b9.a1K.a30 : 6 === aF7 ? a2t = b9.a1K.a2v : 4 === aF7 && (a2t = b9.a1K.a31);
				canvas[e2] = b9.a1K.a2s(canvas[e2], a2t, a2u)
			}(e2, aF7), aF9()
		}, canvas[e2].onerror = function(e) {
			console.error("Error loading image at index", e2, "Error:", e), aF9()
		}, canvas[e2].src = "data:image/png;base64," + pO
	}

	function aF9() {
		aEz--, aF3()
	}

	function aF3() {
		0 === aEz && (aEz = -1, aF5(), be.df = !0, canvas[7] = aF0, canvas[8] = aF0, canvas[9] = aF0, canvas[10] = aF0, 5 === t.ry) && t.a44().aFB.resize()
	}

	function aF5() {
		aL.a4D(), bX.aBC([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.vh = new xc, aj.vh.dX(), av.dY()
	}
	this.dX = function() {
		if (void 0 === canvas) {
			aEz = 23, canvas = new Array(aEz), zP = new Array(aEz), (aF0 = document.createElement("canvas")).width = 1;
			for (var aB = aEz - (aF0.height = 1); 0 <= aB; aB--) canvas[aB] = aF0;
			aF5(), aF6(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aF6(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aF6(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aF6(3, "orders", 6,
					"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"
					), aF6(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aF6(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aF6(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2jdGjR2dnAFBPLrjgghgzZkx2BtAIJk6cGMcdd1x2BgAADaCqqiqOPvromD9/fnYKFK0XXnghjjrqqOwMAICCMnz48Fi5cmV2BgAAAAAAAACkM9wDAAAAAAAAAECzMXDgwOwEarBw4cIYMmRIdgYbYOTIkTF37tzsDOrg6KOPjj322CM7A4B6Mnjw4Bg3blx2BtCAHn/88Tj00EOzMwAAaEBz586NPn36xIoVK7JToOgsWLAgfvzjH8eqVauyUwAACsrs2bPj3nvvzc4AAAAAAAAAgHSGewAAAAAAAAAAaBZOP/302G233bIzqMHvfvc7BxI2UdXV1XHttddmZ1AHrVq1ilGjRmVnAFCPfv3rX/v3GJqpKVOmxMEHHxzV1dXZKQAANLBHHnkkBgwYEFVVVdkpUDRWrlwZffr0iVdffTU7BQCgIA0cODDef//97AwAAAAAAAAASGW4BwAAAAAAAACAJq+0tDTOOOOM7Axq8O6770ZFRUV2Bhth7Nix8dprr2VnUAe9evWKnj17ZmcAUI9OO+20+N3vfpedAdSjKVOmxEEHHRRr1qzJTgEAoJFcf/31MXbs2OwMKApr166NX/3qVzFx4sTsFACAgrVgwYL4zW9+k50BAAAAAAAAAKkM9wAAAAAAAAAA0OQNHDgwOnXqlJ1BDa6++uqoqqrKzmAjXXXVVdkJ1EFZWVkMHTo0OwOAenbyyScb74FmwmgPAEDxGjx4cNx8883ZGdCsrVu3LoYNGxbjx4/PTgEAKHhjxoyJmTNnZmcAAAAAAAAAQBrDPQAAAAAAAAAANGllZWXRt2/f7AxqMHfu3Bg7dmx2BvXg8ssvj9mzZ2dnUAf77bdfHHvssdkZANSzk08+OW644YbsDGAjGO0BAODnP/95PPTQQ9kZ0GxdeumlMXr06OwMAIAmY+DAgfHJJ59kZwAAAAAAAABACsM9AAAAAAAAAAA0aSNHjowddtghO4MajBs3Lqqrq7MzqCfjxo3LTqCOzj333OwEABrAKaec4t9laKIeffRRoz0AAERExBFHHBFPP/10dgY0O9ddd12cffbZ2RkAAE3KpEmT4pprrsnOAAAAAAAAAIAUhnsAAAAAAAAAAGiyysvLo3fv3tkZ1GDOnDkOlG9mrr/++pg5c2Z2BnWw++67x4ABA7IzAGgAv/71r2Ps2LGxbt267BSglu655544+OCDjfYAABAREVVVVXHIIYfEc889l50Czcbvfve7OPXUU7MzAACapAEDBsTzzz+fnQEAAAAAAAAAjc5wDwAAAAAAAAAATdaIESOiffv22RnU4LLLLstOoAFceuml2QnUUf/+/aOsrCw7A4AGcO6558b5558fVVVV2SnAF/j9738fP/7xj6O6ujo7BQCAArJs2bL43ve+Fy+++GJ2CjR5t9xyS5x88snZGQAATVZ1dXWceuqpsXz58uwUAAAAAAAAAGhUhnsAAAAAAAAAAGiS2rVrFyeccEJ2BjWYOXNmXHfdddkZNIBbb701pk+fnp1BHey0005RWVmZnQFAA7ngggvi9NNPj1WrVmWnAOtRXV0dF154YfTp0yc7BQCAArV06VLjPbCRbrrppjjxxBOzMwAAmrxnn302hg8fnp0BAAAAAAAAAI3KcA8AAAAAAAAAAE3S6NGjo23bttkZ1ODiiy/OTqABXXzxxbFu3brsDOrglFNOiXbt2mVnANBArrnmmvj5z38eS5cuzU4BPuWTTz6Js846KwYNGpSdAgBAgVuwYIHxHthAN9xwQ5x00knZGQAAzcYll1wS//3f/52dAQAAAAAAAACNxnAPAAAAAAAAAABNTufOneOYY47JzqAG06dPj9tuuy07gwZ09913x9NPP52dQR1stdVWMXr06OwMABrQnXfeGYcddli8++672SlARHz44Ydx0kknxWWXXZadAgBAE/H/H+95/vnns1OgSVi3bl1cdNFFccopp2SnAAA0O8cff3w8++yz2RkAAAAAAAAA0CgM9wAAAAAAAAAA0OQMGzYs2rRpk53Beqxbty5GjRqVnUEjGDt2bFRXV2dnUAc//elPY9ddd83OAKABPfXUU3HAAQfE7Nmzs1OgqL3zzjvxwx/+MG6//fbsFAAAmpgFCxbEAQccEM8880x2ChS0Tz75JM4555w455xzslMAAJqlqqqqOPLII2Pu3LnZKQAAAAAAAADQ4Az3AAAAAAAAAADQpHTp0iWOPPLI7Axq8NRTT8Uf/vCH7AwawcMPPxyTJ0/OzqAOWrdubVgLoAi8/vrr0a1bt5g0aVJ2ChSlv/3tb9GjR4946qmnslMAAGiili1bFj169IjHHnssOwUK0vLly+PUU0+Niy++ODsFAKBZmzdvXhx99NHx/vvvZ6cAAAAAAAAAQIMy3AMAAAAAAAAAQJNSWVkZLVu2zM5gPaqrq6OysjI7g0Y0ZsyYqKqqys6gDg499NDo0aNHdgYADWzZsmXxve99L6655ppYt25ddg4Ujfvuuy+6desW77zzTnYKAABN3Jo1a6JXr15x5513ZqdAQXn//ffjmGOOiRtvvDE7BQCgKDz33HNx7LHHxgcffJCdAgAAAAAAAAANxnAPAAAAAAAAAABNRvfu3aNXr17ZGdRg0qRJMWnSpOwMGtHjjz8ejz32WHYGdbDJJpvE8OHDszMAaCT/9V//Fb/+9a9j5cqV2SnQrH3yyScxcuTIOPLII2PNmjXZOQAANBPV1dXxk5/8JH7zm98YZYWImDNnTnz/+9+PiRMnZqcAABSVSZMmRZ8+feKjjz7KTgEAAAAAAACABmG4BwAAAAAAAACAJmPw4MHRokWL7AzWY+3atVFZWZmdQYLKykqHkzcxPXr0iKOOOio7A4BGcvnll8cRRxwRf//737NToFlatGhR/OxnP4uhQ4dmpwAA0EydeeaZMWDAgFi1alV2CqR55JFH4t///d/j+eefz04BAChK999/f5x44onxwQcfZKcAAAAAAAAAQL0z3AMAAAAAAAAAQJPQs2fP6NmzZ3YGNfjjH/8YU6dOzc4gwbRp02LixInZGdRBSUlJDB48ODsDgEb02GOPxb777ht//vOfs1OgWXnuuefiO9/5Ttx9993ZKQAANHPjxo2LY489NhYtWpSdAo2qqqoqLr/88ujVq1csW7YsOwcAoKjdf//9ccwxx8R7772XnQIAAAAAAAAA9cpwDwAAAAAAAAAATUJFRUWUlrrdpRCtXr06RowYkZ1BohEjRsTq1auzM6iDPffcM/r27ZudAUAjmj9/fhxwwAFxxRVXRFVVVXYONGnV1dUxfvz4+Pd///d49dVXs3MAACgS999/fxxwwAHx4osvZqdAo/jwww+jb9++8atf/So7BQCA/zVp0qQ4+OCDY+7cudkpAAAAAAAAAFBvnGQCAAAAAAAAAEDBO+qoo2K//fbLzqAGDz74YMyYMSM7g0QzZsyIBx98MDuDOjrzzDOjrKwsOwOARta/f//42c9+FgsXLsxOgSbp/fffj1/84hfxi1/8Iqqrq7NzAAAoMrNnz47/9//+n5/H0uzNmjUrvvvd78Z1112XnQIAwGfMmDEjunfvHtOnT89OAQAAAAAAAIB6YbgHAAAAAAAAAICCN3DgwCgpKcnOYD1WrlwZ559/fnYGBWDo0KGxcuXK7AzqoGPHjjF06NDsDAAS3HHHHfHtb387/vznP2enQJMybdq06N69e/zud7/LTgEAoIitWrUqDj/88BgyZEisWrUqOwfqVXV1dfz+97+Prl27xvPPP5+dAwBADebPnx/77bdfTJgwITsFAAAAAAAAADaa4R4AAAAAAAAAAAraCSecEF27ds3OoAZ33313vP7669kZFIA5c+bEfffdl51BHf3yl7+M8vLy7AwAErzzzjtxwAEHxJgxYxz0DF9g9erVcfHFF0f37t3j1Vdfzc4BAICIiBg1alQcdthh8c4772SnQL1YvHhxnHLKKdGnT5+oqqrKzgEA4AtUVVXF8ccfH2eeeWYsW7YsOwcAAAAAAAAANpjhHgAAAAAAAAAACtrAgQOzE6jB8uXLY/DgwdkZFJAhQ4bE8uXLszOog3bt2sXYsWOzMwBIdP7558fBBx8cs2fPzk6BgjRnzpzo1auX700BAChIjz32WHzzm9+MBx98MDsFNsoTTzwR++67b/z+97/PTgEAoI5+85vfxAEHHBDPP/98dgoAAAAAAAAAbBDDPQAAAAAAAAAAFKzTTz89dtttt+wManDrrbfGvHnzsjMoIHPnzo0777wzO4M6Ou6446Jz587ZGQAkmjx5cnzjG9+Ia6+9NtauXZudAwVh7dq1cf3118cee+wRkydPzs4BAIAaLV26NA4//PAYMGBAfPjhh9k5UCcffPBBnHXWWdGzZ894/fXXs3MAANhAzz//fOyzzz5x9dVX+10TAAAAAAAAAE2O4R4AAAAAAAAAAApSaWlpnHHGGdkZ1OCDDz6IoUOHZmdQgAYPHhxLly7NzqAO2rRpE5WVldkZACSrqqqK0047LY444oh47bXXsnMg1Zw5c+Kwww6LX/7yl1FVVZWdAwAAtXLZZZfFfvvtF3/5y1+yU6BWnnjiifj2t78dl156aXYKAAD1oLq6Ovr16xe9evWKWbNmZecAAAAAAAAAQK0Z7gEAAAAAAAAAoCANHDgwOnXqlJ1BDW666aZYtGhRdgYFaMGCBXH77bdnZ1BHRxxxROy7777ZGQAUgIcffjh22223uPrqq2P16tXZOdCoVq1aFVdccUXsscceMXHixOwcAACos9mzZ8d+++0XFRUV8dFHH2XnwHq99957MWDAgOjZs2e8/vrr2TkAANSzxx9/PPbaa68YPnx4fPjhh9k5AAAAAAAAAPCFDPcAAAAAAAAAAFBwysrKom/fvtkZ1GDhwoUxbNiw7AwK2Pnnnx+LFy/OzqAOWrRoEcOHD8/OAKBAVFVVRb9+/eJ73/tezJw5MzsHGsUzzzwTPXv2jP79+0dVVVV2DgAAbJTKysrYb7/94sknn8xOgX9au3Zt3HbbbbH77rvHZZddlp0DAEADGz58eHzrW9+Ke+65J9asWZOdAwAAAAAAAAA1MtwDAAAAAAAAAEDBGTlyZOywww7ZGdTg97//fSxbtiw7gwK2dOnSuOWWW7IzqKMDDzwwDjvssOwMAArIU089FXvvvXdUVFTEkiVLsnOgQbz33ntx1llnxb777hvTpk3LzgEAgHrz4osvxoEHHhinn356LFiwIDuHIjdjxozo1atX/OxnP4vFixdn5wAA0EjefPPN+PGPfxw9evSIxx57LKqrq7OTAAAAAAAAAOD/MNwDAAAAAAAAAEBBKS8vj969e2dnUIN33303hgwZkp1BE3DeeefFwoULszOog5KSkhg8eHB2BgAFqLKyMvbcc8+46667oqqqKjsH6sWaNWtiwoQJsccee8Sll16anQMAAA3mqquuit122y1+//vfxyeffJKdQ5GZP39+DBo0KLp27RqPP/54dg4AAEmeeeaZ+P73vx+HHXZYTJkyxYAPAAAAAAAAAAXFcA8AAAAAAAAAAAVlxIgR0b59++wMavDb3/7WYe3UyqpVq+LGG2/MzqCOvvWtb8XJJ5+cnQFAAZo/f34cc8wx8cMf/jBmzJiRnQMbZerUqXHggQfG8ccfH4sWLcrOAQCABrd06dLo06dPfPe7342pU6dm51AEli5dGpdeeml07tw5LrzwwuwcAAAKxMMPPxz7779/fPe7342HHnrIuCgAAAAAAAAABcFwDwAAAAAAAAAABaNdu3ZxwgknZGdQg7lz58YFF1yQnUETMnjw4Hj33XezM6ijc845J0pL3V4IwPpNnDgxunbtGqeffnq888472TlQJ6+99lqcfPLJ0aNHD4eVAwBQlKZNmxY9evSIn/3sZzFnzpzsHJqhVatWxc033xxdunSJs846K1atWpWdBABAAZoyZUr88Ic/jK5du8ZNN90U77//fnYSAAAAAAAAAEXMM+sBAAAAAAAAACgYo0eP/v+1d7+xVdZ3H8e/lH/lXynyR0qIg9IBxREKI0NhcwQnGsxmdInzwRxOnTP4ZBuJ0WWOEBY3DIpmGhCcLhIwmVnGpixTt2kIgjABp4XBWkFrQRhtaWsLBfrnfnLH3N6Zu2X38Nf293o9O9dJzvXJyXlwnZyT6x3FxcWpZ/AxHnnkkejs7Ew9gx6ko6Mj1q9fn3oG52nSpEnxwx/+MPUMALq5xx57LCZNmhSrVq2KkydPpp4D/9KxY8fiRz/6UZSXl8eTTz6Zeg4AACS3adOmmDZtWtxzzz3x3nvvpZ5DL3DmzJl49tln4wtf+ELccsstcfTo0dSTAADoASorK+Pb3/52lJSUxNKlS+O1116Ljo6O1LMAAAAAAAAAyIxwDwAAAAAAAAAA3UJZWVncdNNNqWfwMQ4ePBiPPPJI6hn0QD/5yU/inXfeST2D87RkyZIYMmRI6hkAdHMdHR1x9913x9SpU2PdunXR0tKSehJ8RH19fTz88MNRWloa999/vxApAAD8Lw888ECUlpbG8uXL49ixY6nn0AOdOnUqNm7cGDNnzoxvfOMbUVlZmXoSAAA9UEdHR6xevTrmzp0bc+bMibVr10ZVVVXqWQAAAAAAAABkQrgHAAAAAAAAAIBuYfny5SIR3djq1atTT6CH6uzsjLVr16aewXkaO3Zs3H///alnANBDnDhxIu6888743Oc+Fxs3boxTp06lnkTmGhsbY82aNTF16tT4wQ9+EG1tbaknAQBAt9XR0RHLly+P0tLSWLFiRdTW1qaeRA/Q3NwcTz31VFRUVMTNN98cBw4cSD0JAIBeYs+ePbFkyZKYMmVKXHHFFbF+/fo4dOhQ6lkAAAAAAAAA9GLCPQAAAAAAAAAAJDd9+vS44YYbUs/gY/z1r3+NdevWpZ5BD/bAAw9EVVVV6hmcp8WLF8f48eNTzwCgB6mpqYmbb745KioqYsOGDdHS0pJ6EplpaGiINWvWxJQpU+Kuu+6K+vr61JMAAKDHaGtri2XLlsWECRPi3nvvjerq6tST6IZqampi5cqVMWnSpLjtttt8TgAAuKC2bdsW3/3ud6OsrCxmz54dK1eujB07dsSpU6dSTwMAAAAAAACgFxHuAQAAAAAAAAAguRUrVsTAgQNTz+BjrFq1KvUEeoFHH3009QTOU1FRUfzsZz9LPQOAHqi6ujoWL14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aF6(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aF6(8,
					"googleplay", 3,
					"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"
					), aF6(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aF6(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aF6(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aF6(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aF6(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aF6(14, "bestPlayer", 5,
					"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"
					), aF6(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aF6(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), aF6(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aF6(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aF6(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aF6(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aF6(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aF6(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e2) {
		return canvas[e2]
	}, this.aEj = function(name) {
		for (var aB = zP.length - 1; 0 <= aB; aB--)
			if (zP[aB] === name) return canvas[aB];
		return aF0
	}, this.sQ = function() {
		return aEz <= 0
	}, this.aF2 = function() {
		aEz = 0, aF3()
	}
}

function cQ() {
	var aFE, aFF, aFG, aFH, aFI, aFJ, aFK, aFL, aFM, aFN, aFC = [
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
		aFD = [
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

	function aFT(jD, mV) {
		for (var aB = jD; aB < mV; aB++) aFE[aB] = 4 * bK.dn(64 * ax.random(), ax.value(100)), aFF[aB] = 4 * bK.dn(64 * ax.random(), ax.value(100)), aFG[aB] = 4 * bK.dn(64 * ax.random(), ax.value(100))
	}

	function aFS(jD, mV) {
		for (var colorsData = aD.data.colorsData, aB = jD; aB < mV; aB++) {
			var f9 = colorsData[aB];
			aFE[aB] = 4 * (f9 >> 12), aFF[aB] = 4 * (f9 >> 6 & 63), aFG[aB] = 4 * (63 & f9)
		}
	}

	function aFe(eL, aFg) {
		aAZ[eL] = 0, aAZ[eL + 1] = 0, aAZ[eL + 2] = aFg, aAZ[eL + 3] = 0, aFh(eL)
	}

	function aFh(eL) {
		var eo;
		ba.md || (eo = ac.xB(eL), eL = ac.xC(eL), ba.md = eo >= bZ.aAY[0] && eo <= bZ.aAY[2] && eL >= bZ.aAY[1] && eL <= bZ.aAY[3])
	}
	this.ej = new Int32Array(4), this.dY = function() {
		var ej = this.ej;
		ej[0] = -4 * bR.es, ej[1] = 4, ej[2] = -ej[0], ej[3] = -ej[1]
	}, this.dX = function() {
		if (aFE = new Uint8Array(aD.ee), aFF = new Uint8Array(aD.ee), aFG = new Uint8Array(aD.ee), aFH = new Uint8Array(aD.ee), aFI = new Uint8Array(aD.ee), aFJ = new Uint8Array(aD.ee), aFK = new Uint8Array(aD.ee), aFL = new Uint8Array(aD.ee),
			aFM = new Uint8Array(aD.ee), aFN = new Uint8Array(aD.ee), this.a7B = new Uint8Array(aD.ee), aD.hW)
			for (var a9G = bf.a9G, aB = aD.ee - 1; 0 <= aB; aB--) {
				var f2 = a9G[aB],
					ke = bK.dn((aFD[f2][3] + 1) * ax.random(), ax.value(100));
				aFE[aB] = aFC[f2][0] + ke * aFD[f2][0], aFF[aB] = aFC[f2][1] + ke * aFD[f2][1], aFG[aB] = aFC[f2][2] + ke * aFD[f2][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aFS(0, aD.jw), aFT(aD.jw, aD.ee)) : aFT(0, aD.ee) : aFS(0, aD.ee);
		! function() {
			var aB, ek;
			for (aB = aD.ee - 1; 0 <= aB; aB--) ek = bK.dn(aFE[aB] + aFF[aB] + aFG[aB], 3), aFE[aB] += aFZ(ek - aFE[aB], 2), aFF[aB] += aFZ(ek - aFF[aB], 2), aFG[aB] += aFZ(ek - aFG[aB], 2), aFE[aB] -= aFE[aB] % 4, aFF[aB] -= aFF[aB] % 4, aFG[
				aB] -= aFG[aB] % 4
		}(),
		function() {
			for (var aB = aD.ee - 1; 0 <= aB; aB--) aFE[aB] += bK.dn(aB, 128), aFF[aB] += bK.dn(aB % 128, 32), aFG[aB] += bK.dn(aB % 32, 8), aFH[aB] = aB % 8
		}(), this.aFW(),
			function() {
				for (var aB = aD.ee - 1; 0 <= aB; aB--) aFI[aB] = aFE[aB] < 32 ? aFE[aB] + 32 : aFE[aB] - 32, aFJ[aB] = aFF[aB] < 32 ? aFF[aB] + 32 : aFF[aB] - 32, aFK[aB] = aFG[aB] < 32 ? aFG[aB] + 32 : aFG[aB] - 32
			}(),
			function() {
				for (var aB = aD.ee - 1; 0 <= aB; aB--) aFL[aB] = 235 < aFE[aB] ? aFE[aB] - 20 : aFE[aB] + 20, aFM[aB] = 235 < aFF[aB] ? aFF[aB] - 20 : aFF[aB] + 20, aFN[aB] = 235 < aFG[aB] ? aFG[aB] - 20 : aFG[aB] + 20
			}()
	}, this.a6B = function(player) {
		var g = bN.fG;
		return g[0] = aFE[player], g[1] = aFF[player], g[2] = aFG[player], g
	}, this.aFW = function() {
		for (var aB = aD.ee - 1; 0 <= aB; aB--) this.a7B[aB] = aFE[aB] + aFF[aB] + aFG[aB] < 280 ? 0 : 1
	}, this.xB = function(eL) {
		return bK.dn(eL, 4) % bR.es
	}, this.xC = function(eL) {
		return bK.dn(eL, 4 * bR.es)
	}, this.wl = function(eo, eq) {
		return Math.floor(4 * (eq * bR.es + eo))
	}, this.x1 = function(eL) {
		var ej = this.ej;
		return this.aFa(eL + ej[0]) || this.aFa(eL + ej[1]) || this.aFa(eL + ej[2]) || this.aFa(eL + ej[3])
	}, this.f6 = function(eL) {
		var ej = this.ej;
		return this.em(eL + ej[0]) || this.em(eL + ej[1]) || this.em(eL + ej[2]) || this.em(eL + ej[3])
	}, this.wz = function(eL, player) {
		var ej = this.ej;
		return this.aFb(eL + ej[0], player) || this.aFb(eL + ej[1], player) || this.aFb(eL + ej[2], player) || this.aFb(eL + ej[3], player)
	}, this.gG = function(eL) {
		return 208 <= aAZ[eL + 3]
	}, this.x6 = function(player, eL) {
		return this.gG(eL) && this.aFc(player, eL)
	}, this.aFc = function(player, eL) {
		return player === this.eZ(eL)
	}, this.aFd = function(eL) {
		return 208 <= aAZ[eL + 3] && aAZ[eL + 3] < 224
	}, this.j9 = function(eL) {
		return 224 <= aAZ[eL + 3] && aAZ[eL + 3] < 248
	}, this.x0 = function(eL) {
		for (var ej = this.ej, aB = 3; 0 <= aB; aB--)
			if (this.h9(eL + ej[aB])) return !0;
		return !1
	}, this.ec = function(eL) {
		return this.gG(eL) || this.eY(eL)
	}, this.h9 = function(eL) {
		return 0 === aAZ[eL + 3] && 2 === aAZ[eL + 2]
	}, this.eY = function(eL) {
		return 0 === aAZ[eL + 3] && 1 === aAZ[eL + 2]
	}, this.vq = function(eL) {
		return 0 === aAZ[eL + 3] && 3 === aAZ[eL + 2]
	}, this.em = function(eL) {
		return 0 === aAZ[eL + 3] && 5 <= aAZ[eL + 2]
	}, this.aFa = function(eL) {
		return 0 === aAZ[eL + 3] && 3 <= aAZ[eL + 2]
	}, this.eP = function(eL) {
		return aAZ[eL + 2] - 5
	}, this.aFb = function(eL, player) {
		return this.eY(eL) || this.gG(eL) && player !== this.eZ(eL)
	}, this.eZ = function(eL) {
		return aAZ[eL] % 4 * 128 + aAZ[eL + 1] % 4 * 32 + aAZ[eL + 2] % 4 * 8 + aAZ[eL + 3] % 8
	}, this.x7 = function(eL) {
		aFe(eL, 1)
	}, this.aFf = function(eL) {
		aFe(eL, 2)
	}, this.wm = function(eL, player) {
		aAZ[eL] = aFE[player], aAZ[eL + 1] = aFF[player], aAZ[eL + 2] = aFG[player], aAZ[eL + 3] = 208 + aFH[player], aFh(eL)
	}, this.gB = function(eL, player) {
		aAZ[eL] = aFI[player], aAZ[eL + 1] = aFJ[player], aAZ[eL + 2] = aFK[player], aAZ[eL + 3] = 224 + aFH[player], aFh(eL)
	}, this.jA = function(eL, player) {
		aAZ[eL] = aFL[player], aAZ[eL + 1] = aFM[player], aAZ[eL + 2] = aFN[player], aAZ[eL + 3] = 248 + aFH[player], aFh(eL)
	}
}

function co() {
	var e2 = 0,
		aFi = new Uint16Array(32);

	function remove(a4H) {
		var aB;
		for (e2 -= 2, aB = a4H; aB < e2; aB += 2) aFi[aB] = aFi[aB + 2], aFi[aB + 1] = aFi[aB + 3]
	}
	this.dX = function() {
		e2 = 0
	}, this.ir = function() {
		var aB, j7, iG;
		if (0 !== e2)
			if (0 === ag.lm[aD.eR] || ad.aFj(aD.eR) === ad.fm(aD.eR)) e2 = 0;
			else
				for (aB = e2 - 2; 0 <= aB; aB -= 2)(j7 = aFi[aB]) < aD.ee && 0 === ag.lm[j7] ? remove(aB) : (iG = aFi[aB + 1], (j7 >= aD.ee && aFk(aD.eR) || j7 < aD.ee && aFl(aD.eR, j7)) && (b7.h3.hE(iG, j7), remove(aB)))
	}, this.hG = function(j7, iG) {
		! function(j7, iG) {
			var aB;
			for (aB = 0; aB < e2; aB += 2)
				if (aFi[aB] === j7) return aFi[aB + 1] = Math.min(aFi[aB + 1] + iG, 1023), 1;
			return
		}(j7, iG) && 32 !== e2 && (aFi[e2] = j7, aFi[e2 + 1] = iG, e2 += 2)
	}
}

function cR() {
	function aFs(player) {
		var dm;
		b9.g2.a2T(player) && (dm = ag.gi[player] - ag.a2X[player] + ad.aFu(player), bc.g6(player, Math.abs(dm), dm < 0 ? 18 : 12)), ag.gi[player] = 0, ag.a2X[player] = 0
	}

	function aG1() {
		aX.show(!1, !1, !1, !0), aW.a9j(), bQ.yp.zZ()
	}

	function aFp(player, aG0) {
		for (var aB = aG0.length - 1; 0 <= aB; aB--) ad.aG3(aG0[aB], player)
	}

	function aFr(player) {
		for (var iV = ag.iV, iW = ag.iW, iX = ag.iX, iY = ag.iY, mD = iV[player], mE = iX[player], es = bR.es, gU = ag.gU, eo = iW[player]; mD <= eo; eo--)
			for (var eq = iY[player]; mE <= eq; eq--) {
				var gE = 4 * (eq * es + eo);
				ac.x6(player, gE) && (ac.x7(gE), gU[player]--)
			}
		iW[player] = iY[player] = 0, iV[player] = iX[player] = Math.max(es, bR.et)
	}
	this.dg = function(gE) {
		var player, dm = ag.gU[gE];
		bM.y.ou[gE] ? dm && (aFp(player = gE, ad.aFq(player)), aFr(player), aF.g4(player), ad.clear(player), aFs(player), function(player) {
			ag.wh[player] = 0, ag.g8[player] = [], ag.gM[player] = [], ag.gN[player] = [], ag.f7[player] = []
		}(player)) : !dm && ag.g8[gE].length || this.aFo(gE)
	}, this.aFo = function(player) {
		! function(player) {
			b9.g2.jK(player) || (ag.xX[player] = bh.zs.aFz(), aD.z6++);
			var aG0 = ad.aFq(player);
			0 === aG0.length ? b9.g2.a2Q(player) && aG1() : (aFp(player, aG0), function(player, aG0) {
				var aG5 = aG0[function(aG0) {
					var aB, e2 = 0;
					for (aB = aG0.length - 1; 1 <= aB; aB--) ag.gU[aG0[aB]] > ag.gU[aG0[e2]] && (e2 = aB);
					return e2
				}(aG0)];
				9 === aD.kD && (1 === bf.ef[player] ? ax.jo(8) && ay.aG6(aG5) : aE.hL[player] && (aN.a4U(765, 0), aN.xZ(280, L(135, [ag.xa[aG5], ag.xa[player]]), 765, aG5, bA.me, bA.nu, -1, !0)));
				if (b9.g2.a2Q(player)) aG1(), aN.zG(aG5, 1);
				else {
					for (var aB = aG0.length - 1; 0 <= aB; aB--)
						if (b9.g2.a2T(aG0[aB]) && (bc.li[4 - b9.g2.jK(player)]++, b9.g2.a2Q(aG0[aB]))) return aN.zG(player, 0);
					b9.g2.jK(player) || aN.a5T(0, player, aG5)
				}
			}(player, aG0))
		}(player), aFr(player), aFs(player),
			function(player) {
				ag.lm[player] = 0, ag.g8[player] = null, ag.gM[player] = null, ag.gN[player] = null, ag.f7[player] = null
			}(player), aF.g4(player), ad.clear(player), bM.aFx.aFy(player)
	}
}

function ct() {
	var input;

	function aG7(e) {
		(e = e.target.files) && 0 < e.length && b5.aGA(e[0])
	}

	function aGE(e) {
		var f2 = new Image;
		f2.onload = aGF, f2.src = e.target.result
	}

	function aGF(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bR.aGH || j > bR.aGH || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bR.aGH + ".", a0.uS ? a0.uS.showToast(e) : alert(e)) : 20 === t.ry && t.a44().aGF(canvas)
	}
	this.dX = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aG7
	}, this.tK = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aG8 = function() {
		input.click()
	}, this.aGA = function(aGB) {
		var g = aGB.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aGE, g.readAsDataURL(aGB))
	}
}

function cr() {
	this.aGJ = null, this.dX = function() {
		10 !== aD.kD ? this.aGJ = null : this.aGJ = new Uint32Array(aD.ee)
	}, this.ir = function() {
		10 === aD.kD && this.qt()
	}, this.qt = function() {
		for (var gE, target, a9u, aGJ = this.aGJ, ys = al.jy, a2Y = ag.gi, aB = al.jx - 1; 0 <= aB; aB--)(gE = ys[aB]) >= aD.jw || (target = Math.max(bK.dn(a2Y[gE], 4), 2048), a9u = Math.max(ae.a9v(gE), 100), aGJ[gE] += bK.dn(a9u * target, 1e4),
			aGJ[gE] > target && (aGJ[gE] = target))
	}, this.a2e = function(player, hL) {
		return hL > this.aGJ[player] ? (hL = this.aGJ[player], this.aGJ[player] = 0) : this.aGJ[player] -= hL, hL
	}
}

function dS() {
	function aGL(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aGT, g.readAsText(e))
	}

	function aGT(e) {
		var aGX;
		aD.z4 || (e = JSON.parse(e.target.result), aGX = aD.data = new a3X, aGY(e, aGX, "mapType", 0, 2), aGY(e, aGX, "mapProceduralIndex", 0, 255), aGY(e, aGX, "mapRealisticIndex", 0, 255), aGY(e, aGX, "mapSeed", 0, 16383), function(aGW, aGX, gF,
				max) {
				aGW = aGW[gF];
				aGX[gF] = aGe(aGW) ? aGW.slice(0, max) : aGX[gF]
			}(e, aGX, "mapName", 20), function(aGW, aGX, gF) {
				var aGG;
				2 === aGX.mapType && (!aGe(aGW = aGW[gF]) || aGW.length <= 20 ? aGX.mapType = 0 : ((aGG = new Image).onload = function() {
					b8.aGf.aGg(aGG, 1), aGG.onload = null, aGG = null
				}, aGG.src = aGW))
			}(e, aGX, "canvas"), aGY(e, aGX, "passableWater", 0, 1), aGY(e, aGX, "passableMountains", 0, 1), aGY(e, aGX, "playerCount", 1, 512), aGY(e, aGX, "humanCount", 1, 1), aGY(e, aGX, "selectedPlayer", 0, 0), aGY(e, aGX, "gameMode", 0, 1),
			aGY(e, aGX, "playerMode", 0, 0), aGY(e, aGX, "battleRoyaleMode", 0, 0), aGY(e, aGX, "numberTeams", 0, 8), aGY(e, aGX, "isZombieMode", 0, 0), aGY(e, aGX, "isContest", 0, 0), aGY(e, aGX, "isReplay", 0, 0), aGb(e, aGX, "elo", 16, 2,
				16383), aGY(e, aGX, "colorsType", 0, 1), aGY(e, aGX, "colorsPersonalized", 0, 1), aGb(e, aGX, "colorsData", 32, 512, 262143), aGY(e, aGX, "selectableColor", 0, 1), aGb(e, aGX, "teamPlayerCount", 16, 9, 512), aGY(e, aGX,
				"neutralBots", 0, 1), aGY(e, aGX, "botDifficultyType", 0, 3), aGY(e, aGX, "botDifficultyValue", 0, 15), aGb(e, aGX, "botDifficultyTeam", 8, 9, 15), aGb(e, aGX, "botDifficultyData", 8, 512, 15), aGY(e, aGX, "spawningType", 0, 2),
			aGY(e, aGX, "spawningSeed", 0, 16383), aGb(e, aGX, "spawningData", 16, 1024, 4095), aGY(e, aGX, "selectableSpawn", 0, 1), aGY(e, aGX, "playerNamesType", 0, 2),
			function(aGW, aGX, gF, size, max) {
				var a1f = aGW[gF];
				if (Array.isArray(a1f)) {
					for (var a1g = new Array(size), eh = Math.min(a1f.length, size), aB = 0; aB < eh; aB++) a1g[aB] = aGe(a1f[aB]) ? a1f[aB].slice(0, max) : "";
					aGX[gF] = a1g
				}
			}(e, aGX, "playerNamesData", 512, 20), aGY(e, aGX, "selectableName", 0, 1), aGY(e, aGX, "aIncomeType", 0, 2), aGY(e, aGX, "aIncomeValue", 0, 255), aGb(e, aGX, "aIncomeData", 8, 512, 255), aGY(e, aGX, "tIncomeType", 0, 2), aGY(e, aGX,
				"tIncomeValue", 0, 255), aGb(e, aGX, "tIncomeData", 8, 512, 255), aGY(e, aGX, "iIncomeType", 0, 2), aGY(e, aGX, "iIncomeValue", 0, 255), aGb(e, aGX, "iIncomeData", 8, 512, 255), aGY(e, aGX, "sResourcesType", 0, 2), aGY(e, aGX,
				"sResourcesValue", 0, 2047), aGb(e, aGX, "sResourcesData", 16, 512, 2047), t.x(), t.y.aGV[0] = 0, t.u(19))
	}

	function aGY(aGW, aGX, gF, min, max) {
		aGW = aGW[gF];
		aGX[gF] = "number" == typeof aGW && min <= aGW && aGW <= max ? Math.floor(aGW) : aGX[gF]
	}

	function aGe(pO) {
		return "string" == typeof pO
	}

	function aGb(aGW, aGX, gF, aGh, size, max) {
		var a1f = aGW[gF];
		if (Array.isArray(a1f)) {
			for (var a1g = new(8 === aGh ? Uint8Array : 16 === aGh ? Uint16Array : Uint32Array)(size), eh = Math.min(a1f.length, size), aB = 0; aB < eh; aB++) a1g[aB] = bK.pF(a1f[aB], 0, max);
			aGX[gF] = a1g
		}
	}
	this.aGK = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aGL, input.click()
	}, this.aGM = function() {
		for (var aGP, aB9, a42 = aD.data, keys = Object.keys(a42), aGN = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a42[key] instanceof Uint8Array || a42[key] instanceof Uint16Array || a42[key] instanceof Uint32Array ? aGN[key] = Array.from(a42[key]) : aGN[key] = a42[key]
		}
		aGN.canvas = 2 === aGN.mapType && aGN.canvas ? aGN.canvas.toDataURL() : null, aGP = aGN, aGP = JSON.stringify(aGP, null, 2), aGP = new Blob([aGP], {
			type: "application/json"
		}), (aB9 = document.createElement("a")).href = URL.createObjectURL(aGP), aB9.download = "tt_scenario.json", aB9.click()
	}
}

function cU() {
	var aGi, aGj, size, j7, hL, id, aGk;

	function aGl(player) {
		return player < aD.jw ? aGi * player : aGi * aD.jw + aGj * (player - aD.jw)
	}
	this.dX = function() {
		aGi = aD.jw < 16 ? 12 : 8, aGj = 4;
		var eh = aGl(aD.ee);
		size = new Uint8Array(aD.ee), j7 = new Uint16Array(eh), hL = new Uint32Array(eh), id = new Uint16Array(eh), aGk = new Uint8Array(eh)
	}, this.pE = function(a6g, aGm) {
		var aGn = this.gj(a6g, aGm),
			aGm = (this.gh(a6g, aGm, 0), b9.g2.g5(a6g, aGn));
		bc.g6(a6g, aGn - aGm, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aG3 = function(player, aGm) {
		var aGq, aGm = function(player, aGm) {
			var aB, ke = aGl(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (0 === id[ke + aB] && j7[ke + aB] === aGm) return aB;
			return size[player]
		}(player, aGm);
		aGm !== size[player] && (aGq = hL[aGl(player) + aGm], this.g7(player, aGm), this.j4(player, aGq, aD.ee))
	}, this.jI = function(player, aGm) {
		for (var ke = aGl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (0 === id[ke + aB] && j7[ke + aB] === aGm) return !0;
		return !1
	}, this.ja = function(player) {
		return player < aD.jw ? size[player] < aGi : size[player] < aGj
	}, this.fm = function(player) {
		return size[player]
	}, this.fs = function(player, aB) {
		return j7[aGl(player) + aB]
	}, this.fn = function(player, aB) {
		return id[aGl(player) + aB]
	}, this.aGr = function(player, aGs) {
		for (var ke = aGl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (id[ke + aB] === aGs) return aB;
		return -1
	}, this.ft = function(player, aB) {
		return hL[aGl(player) + aB]
	}, this.gj = function(player, aGm) {
		for (var ke = aGl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (0 === id[ke + aB] && j7[ke + aB] === aGm) return hL[ke + aB];
		return 0
	}, this.aFu = function(player) {
		for (var ke = aGl(player), f9 = 0, aB = size[player] - 1; 0 <= aB; aB--) f9 += hL[ke + aB];
		return f9
	}, this.aGt = function(player) {
		for (var ke = aGl(player), f9 = 0, aB = size[player] - 1; 0 <= aB; aB--) 0 === id[ke + aB] && (f9 += hL[ke + aB]);
		return f9
	}, this.aFj = function(player) {
		for (var ke = aGl(player), g9 = 0, aB = size[player] - 1; 0 <= aB; aB--) 0 < id[ke + aB] && g9++;
		return g9
	}, this.gh = function(player, aGm, aGq) {
		for (var ke = aGl(player), aB = size[player] - 1; 0 <= aB; aB--) 0 === id[ke + aB] && j7[ke + aB] === aGm && (hL[ke + aB] = aGq)
	}, this.gS = function(player, aB, aGq) {
		hL[aGl(player) + aB] = Math.max(aGq, 0)
	}, this.gT = function(player, aB) {
		aGk[aGl(player) + aB] = 0
	}, this.fu = function(player, aB) {
		return aGk[aGl(player) + aB]
	}, this.j4 = function(player, aGq, aGm) {
		b9.g2.a2T(aGm) && bc.li[6 - b9.g2.jK(player)]++;
		for (var ke = aGl(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (0 === id[ke + aB] && j7[ke + aB] === aGm) return hL[ke + aB] += aGq, void(hL[ke + aB] = hL[ke + aB] > aD.a2a ? aD.a2a : hL[ke + aB]);
		j7[ke + size[player]] = aGm, hL[ke + size[player]] = aGq, id[ke + size[player]] = 0, aGk[ke + size[player]] = 1, size[player]++, player < aD.jw && (aGm === aD.eR ? aN.zG(player, 5) : player === aD.eR && af.a5V(aGm))
	}, this.aGu = function(player, aGq, aGs) {
		var ke = aGl(player);
		j7[ke + size[player]] = 0, hL[ke + size[player]] = aGq, id[ke + size[player]] = aGs, aGk[ke + size[player]] = 0, size[player]++
	}, this.g7 = function(player, e2) {
		var f0, ke;
		if (0 !== size[player])
			for (ke = aGl(player), size[player]--, f0 = e2; f0 < size[player]; f0++) j7[ke + f0] = j7[ke + f0 + 1], hL[ke + f0] = hL[ke + f0 + 1], id[ke + f0] = id[ke + f0 + 1], aGk[ke + f0] = aGk[ke + f0 + 1]
	}, this.aFq = function(player) {
		for (var f0, ke, aG0 = [], aB = al.jx - 1; 0 <= aB; aB--)
			for (ke = aGl(al.jy[aB]), f0 = size[al.jy[aB]] - 1; 0 <= f0; f0--)
				if (0 === id[ke + f0] && j7[ke + f0] === player) {
					aG0.push(al.jy[aB]);
					break
				} return aG0
	}
}

function cV() {
	var aGv;

	function aGx(player) {
		var e1, jb;
		return b9.g2.jK(player) && player < aD.jw ? 0 : (e1 = aGv[bK.dn((aD.ee - 1) * ag.gU[player], aD.jg)], be.jt() < 1920 && (e1 = Math.max(bK.dn(100 * (13440 - 6 * be.jt()), 1920), e1)), jb = ae.jc(player), ag.gi[player] > jb && (e1 -= bK.dn(2 *
			e1 * (ag.gi[player] - jb), jb)), Math.min(Math.max(e1, 0), 700))
	}

	function aH9(mP) {
		for (var gU = ag.gU, jy = al.jy, aB = al.jx - 1; 0 <= aB; aB--) {
			var gE = jy[aB];
			b9.g2.g5(gE, bK.dn(mP * gU[gE], 32))
		}
	}

	function aH6() {
		var vi = aD.eR;
		bN.fD[0] = ag.gi[vi] - ag.a2X[vi]
	}

	function aH8(e2) {
		var vi = aD.eR;
		bc.li[e2] += ag.gi[vi] - ag.a2X[vi] - bN.fD[0]
	}
	this.de = function() {
		for (var eh = aD.ee, aB = (aGv = new Uint16Array(eh), 0); aB < eh; aB++) aGv[aB] = 100 + aGw(bK.dn(25600 * aB, eh - 4), 9)
	}, this.dX = function() {
		0 === aD.data.iIncomeType ? this.a9v = aGx : 1 === aD.data.iIncomeType ? this.a9v = function(player) {
			return bK.dn(aD.data.iIncomeValue * aGx(player), 64)
		} : this.a9v = function(player) {
			return bK.dn(aD.data.iIncomeData[player] * aGx(player), 64)
		}
	}, this.ir = function() {
		if (be.jt() % 10 == 9 && (function() {
				aH6();
				for (var jy = al.jy, gi = ag.gi, aB = al.jx - 1; 0 <= aB; aB--) {
					var gE = jy[aB],
						aH7 = bK.dn(ae.a9v(gE) * gi[gE], 1e4);
					b9.g2.g5(gE, Math.max(aH7, 1))
				}
				aH8(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aH6(), 1 === aD.data.aIncomeType)
						for (var gU = ag.gU, jy = al.jy, mP = aD.data.aIncomeValue, aB = al.jx - 1; 0 <= aB; aB--) {
							var gE = jy[aB];
							b9.g2.g5(gE, bK.dn(mP * gU[gE], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gU = ag.gU, jy = al.jy, mP = aD.data.aIncomeData, aB = al.jx - 1; 0 <= aB; aB--) {
								var gE = jy[aB];
								b9.g2.g5(gE, bK.dn(mP[gE] * gU[gE], 128))
							}
						}();
					aH8(18)
				}
			}(), be.jt() % 100 == 99)) {
			if (aH6(), 0 === aD.data.tIncomeType) aH9(32);
			else if (1 === aD.data.tIncomeType) aH9(aD.data.tIncomeValue);
			else
				for (var gU = ag.gU, jy = al.jy, mP = aD.data.tIncomeData, aB = al.jx - 1; 0 <= aB; aB--) {
					var gE = jy[aB];
					b9.g2.g5(gE, bK.dn(mP[gE] * gU[gE], 32))
				}
			aH8(8)
		}
	}, this.jc = function(player) {
		return Math.min(100 * ag.gU[player], aD.a3T)
	}, this.o9 = function(player, oA) {
		b9.g2.g5(oA, bN.fE[0]), bc.oV(player, oA), af.aGz(player, bN.fE[0] + bN.fE[1]), af.oW(oA, bN.fE[0]), b9.g2.p4(player)
	}, this.aH0 = function() {
		for (var eh = al.jx, ys = al.jy, ke = 0, a2Y = ag.gi, aB = 0; aB < eh; aB++) ke += a2Y[ys[aB]];
		return ke
	}, this.aH1 = function(aH2) {
		for (var gE, eh = al.jx, ys = al.jy, ke = 0, a2Y = ag.gi, ef = bf.ef, aB = 0; aB < eh; aB++) ef[gE = ys[aB]] === aH2 && (ke += a2Y[gE]);
		return ke
	}
}

function cX() {
	var aHD, aHE, aHF, aHG, aHH, aHI, aHJ, aHK, aHL, aHM, aHN, aHO, aHP, aHQ, aHR, aHS, aHT, aHU, aHW, aHX, aB2, aHY, aHZ, aHg, aHh, aHV = null,
		aHb = 0,
		aHc = !1,
		aHd = new Float32Array(4),
		aHe = 0,
		aHf = !0,
		a95 = 400,
		aHi = 0;

	function pl() {
		aHL = Math.floor(+h.pj), aHM = Math.floor(.5 * aHL)
	}

	function aHj() {
		var aB, aHo;
		for (tr.font = b9.ph.rY(1, 100 * aHN), aHo = 80 / Math.floor(tr.measureText(b9.qh.yM(aD.a2a)).width), tr.font = b9.ph.rY(1, 100), aB = aD.ee - 1; 0 <= aB; aB--) aHK[aB] = 100 / Math.floor(tr.measureText(ag.xa[aB]).width), aHJ[aB] = Math.min(
			aHo, aHK[aB])
	}

	function aHp(aB) {
		return !aHi || (aB = ag.gi[aB]) < 1e6 ? 1 : aB < 1e7 ? aHd[0] : aHd[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aHn(he) {
		aHU = !1, aHT = 1, aHR = aHS = 0, aHf && (b9.ph.textAlign(he, 1), b9.ph.textBaseline(he, 1));
		for (var aHv, aHw, aB, aHx, fontSize, aHy, mD = iH / iI, mE = iJ / iI, mQ = (h.i + iH) / iI, mR = (h.j + iJ) / iI, aHz = 0 !== ag.lm[aD.eR] && !b9.g2.jK(aD.eR), f0 = al.jx - 1; 0 <= f0; f0--) aB = al.jy[f0], (fontSize = Math.floor(aHQ * iI *
			aHp(aB) * aHJ[aB] * aHH[aB])) < aHP || aHL <= fontSize || aHF[aB] + aHH[aB] > mD && aHF[aB] < mQ && aHG[aB] + aHI[aB] > mE && aHG[aB] < mR && (aHv = Math.floor(h.i * (aHF[aB] + aHH[aB] / 2 - mD) / (mQ - mD)), aHw = Math.floor(h.j * (
			aHG[aB] + aHI[aB] / 2 - mE) / (mR - mE) - .1 * fontSize), aHx = ac.a7B[aB], he.font = b9.ph.rY(1 === ag.a2P[aB] ? 4 : 1, fontSize), he.fillStyle = aI0(fontSize, aHx % 2), aHi ? aI1(he, aB, fontSize, aHv, aHw, aHx) : aI2(aB,
			fontSize, aHv, aHw, he), aHU = !0, 0 < aB2[aB] ? function(aHv, aHw, fontSize, aB, he) {
			0 === jh[aB] ? aj.qz.yD(aHX[aB]) ? (function(aHv, aHw, fontSize, player, oK, he) {
				for (var wG = aHw, hd = (he.globalAlpha = aIA(fontSize), aHp(player) * (aHi ? aHe : aHK[player])), wF = aHv - .5 * fontSize / hd - .9 * fontSize, f1 = 0; f1 < 2; f1++) he.fillText(aj.qz.y7(oK), wF, wG), wF = aHv + .5 *
					fontSize / hd + .9 * fontSize;
				he.globalAlpha = 1
			}(aHv, aHw, fontSize, aB, aHX[aB], he), aI4(aHv, aHw, fontSize, 0, 0, he)) : aj.qz.yF(aHX[aB]) ? (aID(aHv, aHw, fontSize, aHX[aB], 0, he), aI4(aHv, aHw, fontSize, 0, 1, he)) : (aID(aHv, aHw, fontSize, aHX[aB], 1, he), aI4(aHv,
				aHw, fontSize, 1, 0, he)) : aID(aHv, aHw, fontSize, aHX[aB], 0, he)
		}(aHv, aHw, fontSize, aB, he) : 0 === jh[aB] && aI4(aHv, aHw, fontSize, 0, 0, he), aHz && (0 < aB2[aB + aD.ee] || 0 < aB2[aB + 2 * aD.ee] || 0 < aB2[aB + 3 * aD.ee] || 0 < aB2[aB + 4 * aD.ee]) && function(aHv, aHw, fontSize, aB, he) {
			var f2, g9 = -1;
			for (f2 = 4; 1 <= f2; f2--) 0 < aB2[aB + f2 * aD.ee] && g9++;
			for (f2 = 1; f2 < 5; f2++) 0 < aB2[aB + f2 * aD.ee] && (! function(aHv, aHw, fontSize, f2, aB, aI8, dm, he) {
				var a1t;
				if (1 === f2) {
					aB = aHX[aB + aD.ee];
					if (!aj.qz.yE(aB)) return function(aHv, aHw, fontSize, oK, aI8, he) {
						he.globalAlpha = aIA(fontSize);
						aHv -= .534 * aI8 * fontSize, aI8 = aHw + 1.59 * fontSize;
						he.font = b9.ph.rY(0, .785 * fontSize), he.fillText(aj.qz.y7(oK), aHv, aI8), he.globalAlpha = 1
					}(aHv, aHw, fontSize, aB, aI8, he);
					a1t = aj.vh.xg[aB - 1024 + aj.qz.xs]
				} else a1t = 2 === f2 ? aL.a4F()[4].canvas[+(dm < 255)] : (3 === f2 ? aL.a4F()[5] : aL.a4F()[6]).canvas[0];
				aB = aj.vh.xh, dm = .8 * fontSize / aB, f2 = aHv - .5 * dm * aB - .534 * aI8 * fontSize, aHv = aHw + 1.4 * dm * aB;
				he.setTransform(dm, 0, 0, dm, f2, aHv), he.globalAlpha = aIA(fontSize), he.drawImage(a1t, 0, 0), he.globalAlpha = 1, he.setTransform(1, 0, 0, 1, 0, 0)
			}(aHv, aHw, fontSize, f2, aB, g9, aB2[aB + f2 * aD.ee], he), g9 -= 2)
		}(aHv, aHw, fontSize, aB, he), (aHy = aHN * fontSize) < aHP || (he.font = b9.ph.rY(1, aHy), aHw += Math.floor(.78 * fontSize), aHi ? aI2(aB, aHy, aHv, aHw, he) : aI1(he, aB, aHy, aHv, aHw, aHx)))
	}

	function aI2(aB, fontSize, eo, eq, he) {
		var ___id = aB;
		var showName = aB < aD.jw || !__fx.settings.hideBotNames;
		if (showName) he.fillText(ag.xa[aB], eo, eq), aB < aD.jw && 2 !== ag.a2P[aB] || (aB = fontSize / aHK[aB], he.fillRect(eo - .5 * aB, eq + b9.ph.y8 * fontSize, aB, Math.max(1, .1 * fontSize)));
		aHi && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (he.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			he.fillText(__fx.utils.getDensity(___id), eo, showName ? eq + fontSize : eq)
		);
	}

	function aI1(he, aB, fontSize, aHv, aHw, aHx) {
		var ___id = aB;
		aB = b9.qh.yM(ag.gi[aB]);
		aHx >> 1 & 1 ? (he.lineWidth = .05 * fontSize, he.strokeStyle = aI0(fontSize, aHx % 2), he.strokeText(aB, aHv, aHw)) : (1 < aHx && (he.lineWidth = .12 * fontSize, he.strokeStyle = aI0(fontSize, aHx), he.strokeText(aB, aHv, aHw)), he.fillText(
			aB, aHv, aHw));
		aHi || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (he.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), he.fillText(__fx.utils.getDensity(___id), aHv, aHw + fontSize))
	}

	function aI4(aHv, aHw, fontSize, aI8, aI9, he) {
		var a4n = .95 * fontSize / aHZ,
			aHv = aHv - .5 * a4n * aHY + .8 * aI8 * fontSize,
			aI8 = aHw - 1.76 * a4n * aHZ - (.35 - b9.ph.y8 + .7) * aI9 * fontSize;
		he.setTransform(a4n, 0, 0, a4n, aHv, aI8), he.globalAlpha = aIA(fontSize), he.drawImage(ab.get(4), 0, 0), he.globalAlpha = 1, he.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aID(aHv, aHw, fontSize, oK, aI8, he) {
		var hY, wF, a4n;
		he.globalAlpha = aIA(fontSize), aj.qz.yE(oK) ? (hY = aj.vh.xh, he.setTransform(a4n = 1.1 * fontSize / hY, 0, 0, a4n, wF = aHv - .5 * a4n * hY - .8 * aI8 * fontSize, a4n = aHw - 1.55 * a4n * hY), he.drawImage(aj.vh.xg[oK - 1024 + aj.qz.xs], 0,
			0), he.setTransform(1, 0, 0, 1, 0, 0)) : (wF = aHv - .8 * aI8 * fontSize, a4n = aHw - (.35 - b9.ph.y8 + 1) * fontSize, he.fillText(aj.qz.y7(oK), wF, a4n)), he.globalAlpha = 1
	}

	function aI0(fontSize, aHx) {
		return aHM <= fontSize && fontSize < aHL ? bf.aIF[aHx] + aIA(fontSize).toFixed(3) + ")" : bf.aIG[aHx]
	}

	function aIA(fontSize) {
		return aHM <= fontSize && fontSize < aHL ? 1 - (fontSize - aHM) / (aHL - aHM) : 1
	}

	function aIP(hd, i) {
		return 1 + Math.floor(aHO * hd * i)
	}

	function aIM(aB) {
		for (var left = aHF[aB], f0 = aHF[aB] - ag.iV[aB] - 1; 0 <= f0; f0--)
			if (!aIR(aB, --left, aHG[aB], aHI[aB])) {
				left++;
				break
			} var right = aHF[aB];
		for (f0 = ag.iW[aB] - aHF[aB] - aHH[aB]; 0 <= f0; f0--)
			if (!aIR(aB, ++right + aHH[aB] - 1, aHG[aB], aHI[aB])) {
				right--;
				break
			} var eo = Math.floor((left + right) / 2),
			top = aHG[aB];
		for (f0 = aHG[aB] - ag.iX[aB] - 1; 0 <= f0; f0--)
			if (!aIS(aB, eo, --top, aHH[aB])) {
				top++;
				break
			} var bottom = aHG[aB];
		for (f0 = ag.iY[aB] - aHG[aB] - aHI[aB]; 0 <= f0; f0--)
			if (!aIS(aB, eo, ++bottom + aHI[aB] - 1, aHH[aB])) {
				bottom--;
				break
			} var eq = Math.floor((top + bottom) / 2);
		aIJ(aB, eo, eq, aHH[aB], aHI[aB]) && (aHF[aB] = eo, aHG[aB] = eq)
	}

	function aIJ(player, eo, eq, i, j) {
		ek = Math.floor(.2 * i);
		for (var ek, f2 = eo + i - 1; eo <= f2; f2--)
			if (!aIR(player, f2, eq, j)) return;
		for (f2 = eq + j - 1 - (ek = (ek = Math.floor(.25 * j)) < 1 ? 1 : ek); eq + ek <= f2; f2--)
			if (!aIS(player, eo, f2, i)) return;
		return 1
	}

	function aIR(player, eo, eq, j) {
		return ac.x6(player, 4 * (eq * bR.es + eo)) && ac.x6(player, 4 * ((eq + j - 1) * bR.es + eo))
	}

	function aIS(player, eo, eq, i) {
		return ac.x6(player, 4 * (eq * bR.es + eo)) && ac.x6(player, 4 * (eq * bR.es + eo + i - 1))
	}
	this.dX = function() {
		if (aHi = bi.eE.data[7].value || 8 === aD.kD, a95 = 0 === (a95 = bi.eE.data[11].value) ? 280 : 1 === a95 ? 187 : 112, aHU = !1, aHQ = .88, aHN = .5, aHO = 1.8, aHP = 12 - 3 * bi.eE.data[9].value, aHE = aHD = 0, aHF = new Uint16Array(aD
				.ee), aHG = new Uint16Array(aD.ee), aHH = new Uint16Array(aD.ee), aHI = new Uint16Array(aD.ee), aHJ = new Float32Array(aD.ee), aHK = new Float32Array(aD.ee), aHX = new Uint16Array(2 * aD.ee), aB2 = new Uint8Array(5 * aD.ee), aHg =
			new Uint8Array(aD.ee), aHh = new Uint8Array(aD.ee), aHf || (aHV = aHV || document.createElement("canvas")), pl(), aHS = aHR = 0, aHT = 1, aHi) {
			var aB, aHo;
			for (aHj(), tr.font = b9.ph.rY(1, 100), aHo = 100 / Math.floor(tr.measureText("900 000").width), aB = aD.ee - 1; 0 <= aB; aB--) aHJ[aB] = Math.min(aHo, 2 * aHK[aB]);
			aHe = aHo, aHd[0] = 100 / (aHo * Math.floor(tr.measureText("5 000 000").width)), aHd[1] = 100 / (aHo * Math.floor(tr.measureText("50 000 000").width)), aHd[2] = 100 / (aHo * Math.floor(tr.measureText("500 000 000").width)), aHd[3] =
				100 / (aHo * Math.floor(tr.measureText("1 000 000 000").width))
		} else aHj();
		! function() {
			var aB;
			for (aB = aD.ee - 1; 0 <= aB; aB--) ag.gU[aB] < 12 ? (aHF[aB] = ag.iV[aB] + 1, aHG[aB] = ag.iX[aB] + 1, aHH[aB] = 1, aHI[aB] = 1) : (aHF[aB] = ag.iV[aB], aHG[aB] = ag.iX[aB] + 1, aHH[aB] = 4, aHI[aB] = 2);
			if (aD.h2)
				for (aB = 0; aB < aD.jw; aB++) aHH[aB] = 0;
			aHY = ab.get(4).width, aHZ = ab.get(4).height
		}()
	}, this.aGz = function(gE, a5l) {
		a5l > 18 * ag.gU[gE] ? (aHh[gE] = 6, ac.a7B[gE] = 2 + ac.a7B[gE] % 2) : (aHg[gE] = 4, (ac.a7B[gE] < 2 || 3 < ac.a7B[gE]) && (ac.a7B[gE] = 6 + ac.a7B[gE] % 2))
	}, this.oW = function(gE, a5l) {
		a5l > 6 * ag.gU[gE] ? (aHh[gE] = 6, ac.a7B[gE] = 4 + ac.a7B[gE] % 2) : (aHg[gE] = 4, (ac.a7B[gE] < 4 || 5 < ac.a7B[gE]) && (ac.a7B[gE] = 8 + ac.a7B[gE] % 2))
	}, this.resize = function() {
		pl(), aHf || aHn(aHW)
	}, this.a3P = function() {
		for (var aB = 0; aB < aD.jw; aB++) ag.iW[aB] - ag.iV[aB] != 3 || ag.iY[aB] - ag.iX[aB] != 3 ? (aHF[aB] = ag.iV[aB] + (ag.iW[aB] !== ag.iV[aB] ? 1 : 0), aHG[aB] = ag.iX[aB], aHH[aB] = 1, aHI[aB] = 1) : (aHF[aB] = ag.iV[aB], aHG[aB] = ag
			.iX[aB] + 1, aHH[aB] = 4, aHI[aB] = 2)
	}, this.pG = function(player, e2, aHq) {
		! function(player, e2, aHq) {
			player += e2 * aD.ee;
			0 === e2 ? aHX[player] === aHq && 0 < aB2[player] ? aB2[player] = 0 : (aHX[player] = aHq, aB2[player] = aj.qz.yD(aHq) ? 255 : 64) : 1 === e2 ? (aB2[player] = 64, aHX[player] = aHq) : aB2[player] = aHq
		}(player, e2, aHq), 2 === aD.z4 && this.lY(!0)
	}, this.tq = function() {
		aHf ? aHn(tr) : aHU && (1 !== aHT ? (tr.imageSmoothingEnabled = !0, tr.setTransform(aHT, 0, 0, aHT, 0, 0), tr.drawImage(aHV, -aHR / aHT, -aHS / aHT), tr.setTransform(1, 0, 0, 1, 0, 0), tr.imageSmoothingEnabled = !1) : tr.drawImage(aHV, -
			aHR, -aHS))
	}, this.a7v = function(i2, i5) {
		aHR += i2, aHS += i5
	}, this.a0Y = function(i2, i5) {
		af.a7v(i2, i5)
	}, this.zoom = function(a1S, kz, l0) {
		aHT *= a1S, aHR = (aHR + kz) * a1S - kz, aHS = (aHS + l0) * a1S - l0
	}, this.lY = function(br) {
		return !aHf && !(!aHc && !br && be.eG < aHb + (1 === aHT && 0 === aHR && 0 === aHS && (aD.a3s() || aD.h2 || 2 === aD.z4) ? 1e3 : a95) || (aHc = !1, aHb = be.eG, aHn(aHW), 0))
	}, this.aHt = function(aB) {
		return aHp(aB) * aHJ[aB]
	}, this.aHu = function(player) {
		return aHJ[player]
	}, this.ir = function() {
		be.jt() % 10 == 9 && (aHc = aD.a3u() && !aD.a3s()), !aD.a3s() && 4 <= ++aHE && function() {
			var aB, f0, f1;
			for (aHE = 0, f1 = 4; 1 <= f1; f1--)
				for (f0 = al.jx - 1; 0 <= f0; f0--) aB = al.jy[f0] + f1 * aD.ee, 0 < aB2[aB] && aB2[aB] < 255 && aB2[aB]--;
			if (2 !== aD.z4)
				for (f0 = al.jx - 1; 0 <= f0; f0--) aB = al.jy[f0], 0 < aB2[aB] && aB2[aB] < 255 && aB2[aB]--
		}();
		var aB, f0, eh = Math.floor(.1 * al.jx);
		for (eh = (eh = eh < 8 ? 8 : eh) > al.jx ? al.jx : eh, aB = aHD + eh - 1; aHD <= aB; aB--) f0 = aB % al.jx, ! function(aB) {
			var hd = aHp(aB) * aHJ[aB];
			0 < aHH[aB] && aIJ(aB, aHF[aB], aHG[aB], aHH[aB], aHI[aB]) ? ! function(aB) {
				for (var eo, eq, i, j, eL = !1, f1 = 0; f1 < 8; f1++) {
					if (i = aHH[aB] + 2, j = aHI[aB] + 2, i > ag.iW[aB] - ag.iV[aB] + 1 || j > ag.iY[aB] - ag.iX[aB] + 1) return eL;
					if (eo = aHF[aB] - 1, eq = aHG[aB] - 1, !aIJ(aB, eo, eq, i, j)) return eL;
					aHF[aB] = eo, aHG[aB] = eq, aHH[aB] = i, aHI[aB] = j, eL = !0
				}
				return eL
			}(aB) && function(aB, hd) {
				for (var eo, eq, i, j, eL = !1, aBB = aHH[aB], mP = 1 + Math.floor(.02 * aBB), f1 = 1; f1 < 5; f1++) {
					if ((i = aBB + f1 * mP) > ag.iW[aB] - ag.iV[aB] + 1) return eL;
					if ((j = aIP(hd, i)) > ag.iY[aB] - ag.iX[aB] + 1) return eL;
					eo = ag.iV[aB] + Math.floor(Math.random() * (ag.iW[aB] - ag.iV[aB] + 2 - i)), eq = ag.iX[aB] + Math.floor(Math.random() * (ag.iY[aB] - ag.iX[aB] + 2 - j)), aIJ(aB, eo, eq, i, j) && (aHF[aB] = eo, aHG[aB] = eq, aHH[
						aB] = i, aHI[aB] = j, eL = !0)
				}
				return eL
			}(aB, hd) && aIM(aB) : ! function(aB, hd) {
				var j, eo = aHF[aB] + 1,
					eq = aHG[aB] + 1,
					i = aHH[aB] - 2;
				for (;;) {
					if (i < 1) {
						aHH[aB] = 0;
						break
					}
					if (j = aIP(hd, i), aIJ(aB, eo, eq, i, j)) return aHF[aB] = eo, aHG[aB] = eq, aHH[aB] = i, aHI[aB] = j, 1;
					eo++, eq++, i -= 2
				}
				return
			}(aB, hd) ? function(aB, hd) {
				var eo, eq, i, j, f1, mV, jD = ag.iW[aB] - ag.iV[aB] + 1,
					aIQ = Math.floor(.02 * jD);
				for (mV = -6 * (aIQ = aIQ < 1 ? 1 : aIQ), f1 = jD; mV <= f1; f1 -= aIQ)
					if (j = aIP(hd, i = 0 < f1 ? f1 : 1), eo = ag.iV[aB] + Math.floor(Math.random() * (ag.iW[aB] - ag.iV[aB] + 2 - i)), eq = ag.iX[aB] + Math.floor(Math.random() * (ag.iY[aB] - ag.iX[aB] + 2 - j)), aIJ(aB, eo, eq, i, j))
						return aHF[aB] = eo, aHG[aB] = eq, aHH[aB] = i, aHI[aB] = j
			}(aB, hd) : aIM(aB)
		}(al.jy[f0]);
		aHD = (aHD += eh) % al.jx
	}, this.lT = function() {
		var aB, gE, hm, hn;
		if (be.jt() % 4 == 1)
			for (aB = al.jx - 1; 0 <= aB; aB--) gE = al.jy[aB], ac.a7B[gE] < 2 || ((hm = Math.max(aHg[gE] - 1, 0)) === (hn = Math.max(aHh[gE] - 1, 0)) ? 0 === hm && (ac.a7B[gE] %= 2) : 0 === hn && ac.a7B[gE] < 6 && (ac.a7B[gE] += 4), aHg[gE] =
				hm, aHh[gE] = hn)
	}, this.a5V = function(player) {
		var aB = player + 2 * aD.ee,
			dm = aB2[aB];
		return 0 < dm && (aN.zB(50, player), aB2[aB] = 0, 255 === dm)
	}, this.a4X = function(player) {
		return 255 === aB2[player + 2 * aD.ee]
	}
}

function cZ() {
	var aIT, aIU, aIV;
	this.dX = function() {
		aIT =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aIU =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), aIV = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a5n = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIW = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aIT.length - 1; 0 <= aB; aB--)
			for (var f0 = a5n.length - 1; 0 <= f0; f0--) aIT[aB] = aIT[aB].replace(a5n[f0], aIW[f0]);
		if (__fx.settings.realisticNames) aIT = realisticNames;
	}, this.a3e = function() {
		var eh = aD.jw,
			xa = ag.xa,
			zh = ag.zh,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eh)
			for (var aB = 0; aB < eh; aB++) xa[aB] = zh[aB] = "Player " + ax.jE(1e3);
		else
			for (aB = 0; aB < eh; aB++) xa[aB] = zh[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kD) {
			for (var e1 = ax.random(), aIc = aIV, aId = aIU, hL = aE.hL, eh = aIc.length, ke = aD.data.teamPlayerCount[7], xa = ag.xa, zh = ag.zh, aB = ke - 1; aB >= aD.jw; aB--) xa[aB] = zh[aB] = aIc[(aB + e1) % eh];
			for (eh = aId.length - 1, aB = ke; aB < aD.ee; aB++) xa[aB] = zh[aB] = aId[hL[aB] ? eh : aB % eh]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var eh = aD.ee, xa = ag.xa, zh = ag.zh, playerNamesData = aD.data.playerNamesData, aB = aD.jw; aB < eh; aB++) xa[aB] = zh[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var xa = ag.xa, zh = ag.zh, aB = aD.jw; aB < aD.ee; aB++) xa[aB] = zh[aB] = "Bot " + ax.jE(1e3)
		} : function() {
			for (var aIe = aIT, eh = aIe.length, e1 = ax.random(), xa = ag.xa, zh = ag.zh, aB = aD.jw; aB < aD.ee; aB++) xa[aB] = zh[aB] = aIe[(aB + e1) % eh]
		})()
	}
}

function cs() {
	this.aIf = [], this.aIg = [], this.dX = function() {
		this.aIf = [], this.aIg = []
	}, this.ir = function() {
		0 <= this.aIf.length && this.aIh(this.aIf), 0 <= this.aIg.length && this.aIh(this.aIg)
	}, this.aIh = function(g) {
		for (var f1 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eG--, g[aB].eG <= 0) {
				f1 = aB;
				break
			} for (aB = f1; 0 <= aB; aB--) g.shift()
	}, this.a4N = function(id, ys, aIi) {
		return this.f3(this.aIf, id, ys, aIi)
	}, this.aIj = function(id, ys, aIi) {
		return this.f3(this.aIg, id, ys, aIi)
	}, this.f3 = function(g, id, ys, aIi) {
		return ! function(g, id, ys) {
			var aB, hU;
			for (aB = ys.length - 1; 0 <= aB; aB--)
				for (hU = g.length - 1; 0 <= hU; hU--)
					if (g[hU].player === ys[aB] && id === g[hU].id) return 1;
			return
		}(g, id, ys) && (aIi && function(g, id, ys) {
			var aB;
			for (aB = ys.length - 1; 0 <= aB; aB--) g.push({
				player: ys[aB],
				id: id,
				eG: 384
			})
		}(g, id, ys), !0)
	}
}

function cY() {
	this.zh = new Array(aD.ee), this.xa = new Array(aD.ee), this.a2P = new Uint8Array(aD.ee), this.lm = new Uint8Array(aD.ee), this.iV = new Uint16Array(aD.ee), this.iX = new Uint16Array(aD.ee), this.iW = new Uint16Array(aD.ee), this.iY =
		new Uint16Array(aD.ee), this.gU = new Uint32Array(aD.ee), this.wh = new Uint32Array(aD.ee), this.gi = new Uint32Array(aD.ee), this.g8 = null, this.gM = null, this.gN = null, this.f7 = null, this.p3 = new Uint16Array(aD.ee), this.iz =
		new Uint16Array(aD.ee), this.j0 = new Uint16Array(aD.ee), this.xX = new Uint16Array(aD.ee), this.zb = new Uint8Array(aD.ee), this.a2X = new Uint16Array(aD.ee), this.dX = function() {
			this.zh.fill(""), this.xa.fill(""), this.a2P.fill(0), this.lm.fill(0), this.iV.fill(0), this.iX.fill(0), this.iW.fill(0), this.iY.fill(0), this.gU.fill(0), this.wh.fill(0), this.gi.fill(0), this.g8 = new Array(aD.ee), this.gM = new Array(
				aD.ee), this.gN = new Array(aD.ee), this.f7 = new Array(aD.ee), this.p3.fill(0), this.iz.fill(0), this.j0.fill(0), this.xX.fill(0), this.zb.fill(0), this.a2X.fill(0)
		}
}

function cq() {
	this.aBW = function(player) {
		aG.ll(player), aD.z6++, ag.a2P[player] = 2, ag.xX[player] = bh.zs.aFz(), player === aD.eR && (aX.show(!1, !1), aW.a9j(), bQ.yp.zZ()), af.a5V(player)
	}
}

function cS() {
	this.jy = null, this.jx = 0, this.a3i = function() {
		for (this.jx = 0, aB = aD.ee - 1; 0 <= aB; aB--) 0 !== ag.lm[aB] && this.jx++;
		this.jy = new Uint16Array(this.jx);
		for (var eh = 0, aB = 0; aB < aD.ee; aB++) 0 !== ag.lm[aB] && (this.jy[eh++] = aB)
	}, this.lS = function() {
		for (var gU = ag.gU, wh = ag.wh, zb = ag.zb, jy = al.jy, aB = al.jx - 1; 0 <= aB; aB--) {
			var dm, gE = jy[aB];
			gU[gE] <= bK.dn(wh[gE], 4) ? ak.dg(gE) : gU[gE] >= wh[gE] ? (dm = gU[gE], 250 <= (wh[gE] = dm) && (zb[gE] = 1)) : wh[gE] -= Math.max(1, bK.dn(wh[gE] - gU[gE], 1e3))
		}
		this.aIn()
	}, this.aIn = function() {
		for (var lm = ag.lm, kd = this.jy, aAP = this.jx, aB = aAP - 1; 0 <= aB; aB--) 0 === lm[kd[aB]] && (kd[aB] = kd[--aAP]);
		this.jx = aAP
	}
}

function ca() {
	var aIo;
	this.kM = null, this.kL = 0, this.dX = function() {
		aIo = [], 9 === aD.kD && this.aIp()
	}, this.aIp = function() {
		var aIq = [60, 80, 105, 150, 190, 333];
		this.kM = [0, 0, 0, 0, 0, 0], this.kL = 0, aD.jw < 9 ? (this.kL = 256 - bK.dn(275 * aD.jw, 100), this.kM[0] = aD.ee - aD.jw - this.kL) : aD.jw < 13 ? (this.kL = 234 - 7 * (aD.jw - 8), this.kM[0] = aD.ee - aD.jw - this.kL) : aD.jw <= aIq[
				0] ? (this.kL = 256 - bK.dn(256 * aD.jw, aIq[0]), aD.jw <= 23 ? this.kM[5] = bK.dn(Math.max(aD.jw - 7, 0), 6) : this.kM[5] = 3 + bK.dn(37 * (aD.jw - 23), 100), this.kM[0] = aD.ee - aD.jw - this.kL - this.kM[5]) : (this.kM[5] =
				Math.min(16 + bK.dn(61 * (aD.jw - 60), 100), 179), this.kM[0] = 512 - aD.jw - this.kM[5]), aD.kH = aD.ee - aD.jw, aD.data.numberTeams = (0 < aD.jw) + (0 < aD.kH), aD.data.playerCount = aD.wD = aD.jw + aD.kH, aD.data
			.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.jw + this.kL, aD.kH - this.kL]), aD.a3Y.a3c()
	}, this.aG6 = function(player) {
		aIo.push({
			player: player,
			g9: 14 + ax.jE(20)
		})
	}, this.ir = function() {
		if (9 === aD.kD)
			for (var aB = aIo.length - 1; 0 <= aB; aB--) --aIo[aB].g9 <= 0 && (af.pG(aIo[aB].player, 0, aj.qz.xv + aj.qz.y9), aIo.splice(aB))
	}
}

function d7() {
	function aJ5() {
		return {
			es: bR.es,
			et: bR.et,
			ve: bR.ve,
			va: bR.va,
			vb: bR.vb,
			vf: bR.vf,
			eN: bR.eN,
			mapSeed: bR.mapSeed,
			vc: bR.vc
		}
	}

	function aIx(aB) {
		return 1 !== aB && bR.aC0(aB) && aB !== bR.aJ7()
	}
	this.aIs = 22, this.aGH = 4096, this.es = 0, this.et = 0, this.ve = null, this.va = null, this.vb = null, this.vf = null, this.eN = 0, this.mapSeed = 0, this.vc = !1, this.vd = new aIt, this.vU = new aIu, this.a5t = new aIv, this.dX =
function() {
		this.vU.dX()
	}, this.a7 = function(map, aIw) {
		((map %= this.aIs) !== this.eN || aIx(this.eN) && aIw !== this.mapSeed) && (this.vc = !1, this.vd.aIy(), ax.a3d(map), this.eN = map, this.mapSeed = aIw, aIx(map) && (bR.vU.vV[map].aIz = aIw), this.aC0(this.eN) ? (map = bR.vU.vV[this.eN],
			this.es = map.i, this.et = map.j, ax.a3d(map.aIz), ap.a7([this.es, this.et, map.lr, map.lo]), aJ1(), ao.aJ2(), ap.aJ3()) : aJ0())
	}, this.aJ4 = function(map, aIw) {
		var fO = aJ5(),
			map = (this.a7(map, aIw), this.vd.aIy(), aJ5());
		return aIw = fO, bR.es = aIw.es, bR.et = aIw.et, bR.ve = aIw.ve, bR.va = aIw.va, bR.vb = aIw.vb, bR.vf = aIw.vf, bR.eN = aIw.eN, bR.mapSeed = aIw.mapSeed, bR.vc = aIw.vc, map
	}, this.a3y = function(canvas) {
		canvas && this.ve !== canvas && (this.es = canvas.width, this.et = canvas.height, this.ve = canvas, this.va = this.ve.getContext("2d", {
			alpha: !1
		}), this.hb = this.va.getImageData(0, 0, this.es, this.et), this.vf = this.hb.data, this.eN = this.aJ7(), this.mapSeed = 0, bR.vU.vV[this.eN].name = aD.data.mapName)
	}, this.eM = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aJ7()
	}, this.aJ8 = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aJ9 = function(aB) {
		return 1 === aB
	}, this.aJ7 = function() {
		return this.aIs
	}, this.aC0 = function(aB) {
		return void 0 === this.vU.vV[aB].aJA
	}, this.a3x = function(pZ) {
		return 0 === pZ.mapType ? pZ.mapProceduralIndex < 10 ? pZ.mapProceduralIndex : 10 + pZ.mapProceduralIndex : 1 === pZ.mapType ? pZ.mapRealisticIndex + 10 : void 0
	}, this.aC1 = function(pZ, aJB) {
		0 === pZ.mapType ? pZ.mapProceduralIndex = aJB < 10 ? aJB : aJB - 10 : 1 === pZ.mapType && (pZ.mapRealisticIndex = aJB - 10)
	}
}

function aIt() {
	function aJK() {
		bR.vd.ir()
	}

	function aJQ(gE, aJP) {
		0 < aJP && (bR.vf[gE] += aJP, bR.vf[gE + 1] += aJP, bR.vf[gE + 2] += aJP)
	}

	function h9(gE) {
		return bR.vf[gE + 2] > bR.vf[gE] && bR.vf[gE + 2] > bR.vf[gE + 1]
	}
	this.a87 = -1, this.a05 = 0, this.aJC = 0, this.aJD = 8, this.aJE = 32, this.aJF = 8, this.aJG = 32, this.aJH = [0, 0], this.a7B = [0, 0, 0, 0], this.iQ = null, this.aJI = !0, this.aJJ = !1, this.aIy = function() {
		-1 !== this.a87 && clearTimeout(this.a87), this.a87 = -1, this.iQ = null, ap.aJ3()
	}, this.dX = function() {
		7 === aa.a0E() || this.aJJ || (this.aJI = !0, this.a05 = 0, this.aJC = 1, this.aJH = [bR.vU.vV[bR.eN].vx[0], bR.vU.vV[bR.eN].vy[0]], this.a7B = [bR.vU.vV[bR.eN].aJA[3], bR.vU.vV[bR.eN].aJA[4], bR.vU.vV[bR.eN].aJA[5], bR.vU.vV[bR.eN].aJA[
			6]], this.aJD = bR.vU.vV[bR.eN].aJA[7], this.aJE = bR.vU.vV[bR.eN].aJA[8], this.aJF = bR.vU.vV[bR.eN].aJA[9], this.aJG = bR.vU.vV[bR.eN].aJA[10], this.aJI ? this.a87 = setTimeout(aJK, 16) : this.ir())
	}, this.ir = function() {
		if (8 === aa.a0E() && aH.m4()) this.a87 = setTimeout(aJK, 16);
		else {
			if (0 === this.a05) {
				var aIz = ax.aJL();
				if (ax.a3d(bR.vU.vV[bR.eN].aJA[2]), ap.a7([bR.es, bR.et, bR.vU.vV[bR.eN].aJA[0], bR.vU.vV[bR.eN].aJA[1]]), ax.a3d(aIz), this.iQ = ap.aJM(), this.a05++, this.aJI) return void(this.a87 = setTimeout(aJK, 16))
			}
			for (var gE, eT, aIz = this.aJI ? 10 : 1e6, aIz = bR.et - this.aJC - 1 < aIz ? bR.et - this.aJC - 1 : aIz, wu = this.aJC + aIz, eq = this.aJC; eq < wu; eq++)
				for (var eo = 1; eo < bR.es - 1; eo++) h9(gE = 4 * (eT = eo + eq * bR.es)) ? this.aJN(gE, eT, 1) : (this.aJN(gE, eT, 0), function(eo, eq, gE) {
					return 1 < eo && h9(gE - 4) || eo < bR.es - 2 && h9(gE + 4) || 1 < eq && h9(gE - 4 * bR.es) || eq < bR.et - 2 && h9(gE + 4 * bR.es)
				}(eo, eq, gE) && this.aJO(eo, eq));
			this.aJC = wu, this.aJC >= bR.et - 1 ? (bR.va.putImageData(bR.vb, 0, 0, 1, 1, bR.es - 2, bR.et - 2), be.df = !0, this.aIy()) : this.aJI && (this.a87 = setTimeout(aJK, 16))
		}
	}, this.aJN = function(gE, eT, e2) {
		aJQ(gE, Math.floor(this.aJH[e2] + this.a7B[e2] * this.iQ[eT] / 1e4) - bR.vf[gE])
	}, this.aJR = function(gE, e1, aJS, e2, a7B) {
		aJQ(gE, Math.floor(this.aJH[e2] + (1 - e1 / aJS) * a7B) - bR.vf[gE])
	}, this.aJO = function(kz, l0) {
		for (var gE, e1, aJS, a7x = kz - this.aJE, aJT = l0 - this.aJE, wv = kz + this.aJE, wu = l0 + this.aJE, a7x = a7x < 1 ? 1 : a7x, wv = wv > bR.es - 2 ? bR.es - 2 : wv, wu = wu > bR.et - 2 ? bR.et - 2 : wu, eq = aJT < 1 ? 1 : aJT; eq <=
			wu; eq++)
			for (var eo = a7x; eo <= wv; eo++) h9(gE = 4 * (eo + eq * bR.es)) ? (aJS = this.aJD + (this.aJE - this.aJD) * this.iQ[eo + bR.es * eq] / 1e4, Math.abs(kz - eo) > aJS || Math.abs(l0 - eq) > aJS || aJS <= (e1 = Math.sqrt((kz - eo) * (
				kz - eo) + (l0 - eq) * (l0 - eq))) || this.aJR(gE, e1, aJS, 1, this.a7B[3])) : (aJS = this.aJF + (this.aJG - this.aJF) * this.iQ[eo + bR.es * eq] / 1e4, Math.abs(kz - eo) > aJS || Math.abs(l0 - eq) > aJS || aJS <= (e1 = Math
				.sqrt((kz - eo) * (kz - eo) + (l0 - eq) * (l0 - eq))) || this.aJR(gE, e1, aJS, 0, this.a7B[2]))
	}
}

function aJ1() {
	var ta = aJU(bR.eN);
	ta && aJV(ta[0], ta[1], ta[2], ta[3], ta[4])
}

function aJU(eN) {
	return 2 === eN ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eN ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eN ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eN ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eN ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aJV(aJW, aJX, aJY, aJZ, aJa) {
	for (var eo, eq, aJc, aJd, a1S, aJf, i1 = aJW.length - 1, aJb = bR.es + bR.et, eh = (aJb *= aJb, aJY.length), aJe = Array(eh), aB = eh - 1; 0 <= aB; aB--) aJe[aB] = aJY[aB] * aJY[aB];
	var aJg = new Array(eh),
		aAz = new Array(eh),
		aJh = new Array(eh),
		f9 = ap.aJM();
	if (void 0 === aJa)
		for (aJa = new Array(eh), aB = eh - 1; 0 <= aB; aB--) aJa[aB] = 0;
	for (aB = 1; aB < eh; aB++) aJg[aB] = aJe[aB] - aJe[aB - 1], aAz[aB] = aJZ[aB] - aJZ[aB - 1], aJh[aB] = aJa[aB] - aJa[aB - 1];
	for (eo = bR.es - 1; 0 <= eo; eo--)
		for (eq = bR.et - 1; 0 <= eq; eq--) {
			for (aJc = aJb, aB = i1; 0 <= aB; aB--) aJc = (aJd = (eo - aJW[aB]) * (eo - aJW[aB]) + (eq - aJX[aB]) * (eq - aJX[aB])) < aJc ? aJd : aJc;
			for (a1S = aJZ[eh - 1], aJf = aJa[eh - 1], aB = 1; aB < eh; aB++)
				if (aJc < aJe[aB]) {
					a1S = aJZ[aB - 1] + aFZ((aJc - aJe[aB - 1]) * aAz[aB], aJg[aB]), aJf = aJa[aB - 1] + aFZ((aJc - aJe[aB - 1]) * aJh[aB], aJg[aB]);
					break
				} aJi(bR.es * eq + eo, a1S, aJf, f9)
		}
}

function aJi(e2, a1S, aJf, f9) {
	a1S < 500 ? f9[e2] = bK.dn(f9[e2] * a1S * 2, 1e3) : 500 < a1S && (f9[e2] += bK.dn(2 * (1e4 - f9[e2]) * (a1S - 500), 1e3)), f9[e2] += bK.dn(aJf * (10 * a1S - f9[e2]), 1e3)
}

function cc() {
	var aJj;

	function aJt(a1t, hd, eo, eq, globalAlpha) {
		bR.va.save(), bR.va.globalAlpha = globalAlpha, bR.va.imageSmoothingEnabled = !1, bR.va.scale(hd, hd), bR.va.drawImage(a1t, Math.floor(eo * (bR.es / hd - a1t.width)), Math.floor(eq * (bR.et / hd - a1t.height))), bR.va.restore()
	}
	this.a5q = 0, this.a5r = 0, this.a5s = 0, this.a5t = 0, this.dX = function() {
		(aJj = new Array(bR.aIs))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e1: [220, 250, 255, 220],
			sM: [190, 220, 0, 0],
			f1: [170, 200, 0, 0]
		}, aJj[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e1: [25, 0, 100, 0, 25],
			sM: [25, 0, 0, 0, 25],
			f1: [25, 0, 0, 0, 25]
		}, aJj[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e1: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sM: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f1: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJj[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e1: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sM: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f1: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJj[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e1: [10, 10, 20, 10, 10, 170, 212],
			sM: [20, 20, 60, 100, 100, 110, 170],
			f1: [70, 70, 160, 30, 30, 60, 120]
		}, aJj[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e1: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sM: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f1: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJj[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e1: [10, 10, 60, 255, 255, 200, 200],
			sM: [10, 10, 60, 255, 255, 200, 200],
			f1: [80, 80, 255, 255, 255, 200, 200]
		}, aJj[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e1: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sM: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f1: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJj[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e1: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sM: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f1: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJj[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e1: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sM: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f1: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJj[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e1: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sM: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f1: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJj[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e1: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sM: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f1: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aJ2 = function() {
		var aJs, aB, f0, fO, hb = function() {
				var hb;
				return bR.ve = document.createElement("canvas"), bR.ve.width = bR.es, bR.ve.height = bR.et, bR.va = bR.ve.getContext("2d", {
					alpha: !1
				}), hb = bR.va.getImageData(0, 0, bR.es, bR.et), bR.vf = hb.data, hb
			}(),
			i = aJj[bR.eN].i,
			e1 = aJj[bR.eN].e1,
			sM = aJj[bR.eN].sM,
			f1 = aJj[bR.eN].f1,
			f9 = ap.aJM(),
			eh = i.length - 2,
			aJn = new Array(1 + eh),
			aJo = new Array(1 + eh),
			aJp = new Array(1 + eh),
			aJq = new Array(1 + eh);
		for (f0 = eh; 0 <= f0; f0--) aJn[f0] = i[f0 + 1] - i[f0], aJo[f0] = e1[f0 + 1] - e1[f0], aJp[f0] = sM[f0 + 1] - sM[f0], aJq[f0] = f1[f0 + 1] - f1[f0];
		for (aB = bR.es * bR.et - 1; 0 <= aB; aB--)
			for (f0 = eh; 0 <= f0; f0--)
				if (f9[aB] >= i[f0]) {
					fO = f9[aB] - i[f0], bR.vf[4 * aB] = e1[f0] + aFZ(aJo[f0] * fO, aJn[f0]), bR.vf[4 * aB + 1] = sM[f0] + aFZ(aJp[f0] * fO, aJn[f0]), bR.vf[4 * aB + 2] = f1[f0] + aFZ(aJq[f0] * fO, aJn[f0]), bR.vf[4 * aB + 3] = 255;
					break
				} bR.va.putImageData(hb, 0, 0), bR.aJ9(bR.eN) && ab.sQ() && bR.aJ9(bR.eN) && (hb = ab.aEj("arena"), aJs = ab.aEj("territorial.io"), aJt(hb, 5, .5, .5, .1), aJt(aJs, 2, .5, .45, .1)), bR.vc = !0, be.df = !0
	}, this.a3g = function() {
		for (var gE, eo, eq, aJu, hS, fQ, a5r = 0, i = bR.es, j = bR.et, fO = i * j * 4, aJv = aAZ, aJw = bR.vf, aB = i - 1; 0 <= aB; aB--) aJv[(gE = aB << 2) + 2] = aJv[fO - gE - 2] = 3;
		for (fO = 4 * i, aB = j - 1; 0 <= aB; aB--) aJv[(gE = aB * fO) + 2] = aJv[gE + fO - 2] = 3;
		for (aJu = i - 1, hS = j - 1, eq = 1; eq < hS; eq++)
			for (fO = eq * i, eo = 1; eo < aJu; eo++) fQ = 1 - (aJw[(gE = fO + eo << 2) + 2] > aJw[gE + 1] && aJw[gE + 2] > aJw[gE]), aJv[gE + 2] = 2 - fQ, a5r += fQ;
		this.a5q = (i - 2) * (j - 2), this.a5t = 0, bR.eM(bR.eN) && (bR.a5t.aJx(), bR.a5t.aJy()), this.a5r = aD.jg = a5r - this.a5t, this.a5s = this.a5q - this.a5r - this.a5t
	}
}

function aJ0() {
	var pO;
	10 === bR.eN ? pO =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bR.eN ? pO =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bR.eN ? pO =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bR.eN ? pO =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bR.eN ? pO =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bR.eN ? pO =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bR.eN ? pO =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bR.eN ? pO =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bR.eN ? pO =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bR.eN && (pO =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new vN).vP(pO)
}

function aIu() {
	this.vV = null, this.aJz = null, this.aK0 = null, this.dX = function() {
		var aK1 = [120, 105, 92],
			cos = [12, 12, 60],
			aK2 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aK3 = [140, 130, 120],
			aK4 = [12, 12, 76],
			aK5 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aK6 = [130, 117, 106],
			aK7 = [12, 12, 68],
			aK8 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vV = new Array(bR.aIs + 1), this.vV[0] = {
			name: L(136),
			i: 230,
			j: 230,
			lr: 1e3,
			lo: 2e3,
			aIz: 173
		}, this.vV[1] = {
			name: L(137),
			i: 800,
			j: 800,
			lr: 100,
			lo: 50,
			aIz: 43
		}, this.vV[2] = {
			name: L(138),
			i: 512,
			j: 512,
			lr: 128,
			lo: 32,
			aIz: 0
		}, this.vV[3] = {
			name: L(139) + " 1",
			i: 960,
			j: 960,
			lr: 60,
			lo: 8,
			aIz: 0
		}, this.vV[4] = {
			name: L(140),
			i: 900,
			j: 900,
			lr: 100,
			lo: 5,
			aIz: 0
		}, this.vV[5] = {
			name: L(141),
			i: 1e3,
			j: 1e3,
			lr: 100,
			lo: 40,
			aIz: 0
		}, this.vV[6] = {
			name: L(142),
			i: 1e3,
			j: 1e3,
			lr: 100,
			lo: 20,
			aIz: 0
		}, this.vV[7] = {
			name: L(143),
			i: 1024,
			j: 1024,
			lr: 128,
			lo: 32,
			aIz: 0
		}, this.vV[8] = {
			name: L(144),
			i: 820,
			j: 820,
			lr: 200,
			lo: 100,
			aIz: 0
		}, this.vV[9] = {
			name: L(145),
			i: 1024,
			j: 1024,
			lr: 128,
			lo: 32,
			aIz: 0
		}, this.vV[10] = {
			name: L(146),
			vx: aK3,
			vy: aK4,
			aJA: aK5
		}, this.vV[11] = {
			name: L(147),
			vx: aK6,
			vy: aK7,
			aJA: aK8
		}, this.vV[12] = {
			name: L(148),
			vx: aK6,
			vy: aK7,
			aJA: aK8
		}, this.vV[13] = {
			name: L(149),
			vx: aK1,
			vy: cos,
			aJA: aK2
		}, this.vV[14] = {
			name: L(150),
			vx: aK1,
			vy: cos,
			aJA: aK2
		}, this.vV[15] = {
			name: L(151),
			vx: aK3,
			vy: aK4,
			aJA: aK5
		}, this.vV[16] = {
			name: L(152),
			vx: aK3,
			vy: aK4,
			aJA: aK5
		}, this.vV[17] = {
			name: L(153),
			vx: aK1,
			vy: cos,
			aJA: aK2
		}, this.vV[18] = {
			name: L(154),
			vx: aK6,
			vy: aK7,
			aJA: aK8
		}, this.vV[19] = {
			name: L(155),
			vx: aK1,
			vy: cos,
			aJA: aK2
		}, this.vV[20] = {
			name: L(156),
			i: 1024,
			j: 1024,
			lr: 128,
			lo: 32,
			aIz: 0
		}, this.vV[21] = {
			name: L(139) + " 2",
			i: 940,
			j: 940,
			lr: 80,
			lo: 8,
			aIz: 0
		}, this.vV[bR.aIs] = {
			name: ""
		}, this.aJz = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aJz[aB] = aB;
		for (this.aJz[10] = 20, this.aJz[11] = 21, this.aK0 = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aK0[aB] = 10 + aB
	}
}

function aIv() {
	this.aJx = function() {
		for (var gE, eo, fO, aJv = aAZ, aJw = bR.vf, i = bR.es, aJu = i - 1, hS = bR.et - 1, g9 = 0, eq = 1; eq < hS; eq++)
			for (fO = eq * i, eo = 1; eo < aJu; eo++) aJw[gE = fO + eo << 2] === aJw[1 + gE] && aJw[gE] === aJw[2 + gE] && (g9++, aJv[2 + gE] = 4);
		ao.a5t = g9
	}, this.aJy = function() {
		for (var aJv = aAZ, i = bR.es, aJu = i - 1, hS = bR.et - 1, id = 5, eq = 1; eq < hS; eq++)
			for (var fO = eq * i, eo = 1; eo < aJu; eo++) {
				var eL = 2 + (fO + eo << 2);
				4 === aJv[eL] && (! function(eL, id) {
					var eh = 1,
						aJv = aAZ,
						ej = ac.ej,
						a1f = [eL];
					aJv[eL] = id;
					for (; eh;) {
						for (var a1g = [], aB = 0; aB < eh; aB++)
							for (var eW = a1f[aB], ek = 3; 0 <= ek; ek--) {
								var el = eW + ej[ek];
								4 === aJv[el] && (aJv[el] = id, a1g.push(el))
							}
						eh = (a1f = a1g).length
					}
				}(eL, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3f() {
	(xE = void 0 === xE ? document.createElement("canvas") : xE).width = bR.es, xE.height = bR.et, a3j = xE.getContext("2d", {
		alpha: !0
	}), a3k = aAZ = null, a3k = a3j.getImageData(0, 0, bR.es, bR.et), aAZ = a3k.data, b9.pq.vg(aAZ)
}

function cd() {
	var f9, i, j, max, aKA, lo, aKC, aKD, aKE, aKF, aKG, aKH, aKI, aKJ, aKB = 1e4;

	function aKQ(aKP, lr, eh) {
		var aB;
		for (aKC[0] = aKP, aB = 1; aB < eh; aB++) aKC[aB] = aKC[aB - 1] + lr, lr = aKC[aB] >= aKB ? (aKC[aB] = aKB - 1, -lr) : aKC[aB] < 0 ? (aKC[aB] = 0, -lr) : (lr += 16384 <= ax.random() ? lo : -lo) < -aKA ? -aKA : aKA < lr ? aKA : lr
	}

	function aKS(eo, eq, aKT, eh) {
		(aKT ? function(eo, eq, eh) {
			var aB;
			for (aB = 0; aB < eh; aB++) f9[eq * i + eo + aB] = aKC[aB]
		} : function(eo, eq, eh) {
			var aB;
			for (aB = 0; aB < eh; aB++) f9[eq * i + eo + aB * i] = aKC[aB]
		})(eo, eq, eh)
	}

	function aKW(value, eh) {
		var aB, aIQ, eL, hq = value - aKC[eh - 1];
		if (0 != hq) {
			for (aIQ = 1 + bK.dn(Math.abs(hq), eh - 1), aIQ = hq < 0 ? -aIQ : aIQ, aKC[eh - 1] = value, eL = (eL = eh - 1 - bK.dn(Math.abs(hq), Math.abs(aIQ))) < 1 ? 1 : eh - 2 < eL ? eh - 2 : eL, aB = eh - 2; eL <= aB; aB--) aKC[aB] += hq - (eh -
				1 - aB) * aIQ;
			(hq < 0 ? function(eh) {
				var aB;
				for (aB = eh - 2; 1 <= aB; aB--) aKC[aB] < 0 && (aKC[aB] = -aKC[aB] - 1)
			} : function(eh) {
				var aB;
				for (aB = eh - 2; 1 <= aB; aB--) aKC[aB] >= aKB && (aKC[aB] = 2 * aKB - aKC[aB] - 1)
			})(eh)
		}
	}

	function aKZ(a1f, a1g, eh) {
		for (var aB = 0; aB < eh; aB++) a1f[aB] = a1g[aB]
	}

	function aKa(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aKb(a4H, gap, hT) {
		aKD.push(a4H), aKE.push(gap), aKF.push(hT)
	}
	this.a7 = function(a2u) {
		! function(a2u) {
			var aB;
			for (i = a2u[0], j = a2u[1], aKA = a2u[2], lo = a2u[3], f9 = new Int16Array(i * j), max = j < i ? i : j, aKC = new Int16Array(max), aKD = [], aKE = [], aKF = [], aKG = new Array(i), aKH = new Array(j), aB = i - 1; 0 <= aB; aB--) aKG[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aKH[aB] = !1;
			aKI = new Int16Array(i), aKJ = new Int16Array(j)
		}(a2u),
		function(eh) {
			var aKP = ax.random() % aKB,
				lr = ax.random() % (2 * aKA + 1) - aKA;
			aKQ(aKP, lr, eh)
		}(max), aKZ(aKJ, aKC, j), aKS(0, 0, !0, i);
		var eo, eq, a2u = f9[0],
			eh = max,
			lr = ax.random() % (2 * aKA + 1) - aKA;
		for (aKQ(a2u, lr, eh), aKZ(aKI, aKC, i), aKS(0, 0, !1, j), aKa(aKI), aKa(aKJ), aKQ(f9[i - 1], aKI[i - 1], j), aKS(i - 1, 0, !1, j), aKQ(f9[i * (j - 1)], aKJ[j - 1], i), aKW(f9[i * j - 1], i), aKS(0, j - 1, !0, i), aKG[i - 1] = aKG[0] = !
			0, aKH[j - 1] = aKH[0] = !0, aKb(0, i, !0), aKb(0, j, !1), ! function() {
				var aKd, a4H;
				for (;;) {
					if (aKd = function() {
							var aB, aKd = aKD.length - 1;
							for (aB = aKd - 1; 0 <= aB; aB--) aKE[aB] > aKE[aKd] && (aKd = aB);
							return aKd
						}(), aKE[aKd] < 5) return;
					a4H = aKD[aKd] + bK.dn(aKE[aKd], 2), (aKF[aKd] ? function(eo) {
						var eh, aKg, aB, aE7 = 0,
							aKh = 0;
						for (; aKh < j - 1;) {
							for (aB = aE7 + 1; aB < j; aB++)
								if (aKH[aB]) {
									aKh = aB;
									break
								} eh = aKh - aE7 + 1, aKQ(f9[eo + i * aE7], 0 === aE7 ? aKI[eo] : aKC[aKg - 1] - aKC[aKg - 2], eh), aKW(f9[aKh * i + eo], eh), aKS(eo, aE7, !1, eh), aKg = eh, aE7 = aKh
						}
						aKG[eo] = !0
					} : function(eq) {
						var eh, aKg, aB, aE7 = 0,
							aKh = 0;
						for (; aKh < i - 1;) {
							for (aB = aE7 + 1; aB < i; aB++)
								if (aKG[aB]) {
									aKh = aB;
									break
								} eh = aKh - aE7 + 1, aKQ(f9[eq * i + aE7], 0 === aE7 ? aKJ[eq] : aKC[aKg - 1] - aKC[aKg - 2], eh), aKW(f9[eq * i + aKh], eh), aKS(aE7, eq, !0, eh), aKg = eh, aE7 = aKh
						}
						aKH[eq] = !0
					})(a4H), aKb(a4H, aKD[aKd] + aKE[aKd] - a4H, aKF[aKd]), aKE[aKd] = a4H - aKD[aKd] + 1
				}
			}(), eo = 0; eo < i; eo++)
			if (!aKG[eo])
				for (eq = 0; eq < j; eq++) aKH[eq] || ! function(eo, eq) {
					var value = f9[eq * i + eo - 1] + f9[(eq - 1) * i + eo],
						a64 = 2;
					aKG[eo + 1] && (a64++, value += f9[eq * i + eo + 1]);
					aKH[eq + 1] && (a64++, value += f9[(eq + 1) * i + eo]);
					f9[eq * i + eo] = bK.dn(value, a64)
				}(eo, eq)
	}, this.aJM = function() {
		return f9
	}, this.aJ3 = function() {
		f9 = null
	}
}

function aFZ(f0, f1) {
	return 0 <= f0 ? bK.dn(f0, f1) : -bK.dn(-f0, f1)
}

function jT(f9) {
	return f9 * f9
}

function a5I(f0, f1) {
	return f1 < f0 ? f0 : f1
}

function aA3(f0, f1) {
	return f0 < f1 ? f0 : f1
}

function a7U(f0, f9, f1) {
	return f9 < f0 ? f0 : f1 < f9 ? f1 : f9
}

function aKj(f9, eh) {
	for (var f2 = bK.dn(f9 + 1, 2), aB = 0; aB < eh; aB++) f2 = bK.dn(f2 + bK.dn(f9, f2), 2);
	return f2
}

function aGw(f9, eh) {
	return f9 < 1 ? 0 : aKj(f9, eh)
}

function aKk(mD, mE, s5, a7E, mQ, mR, s6, sn) {
	return !(mD + s5 <= mQ || mE + a7E <= mR || mQ + s6 <= mD || mR + sn <= mE)
}

function aKl(mD, mE, s5, a7E, mQ, mR, s6, sn) {
	return mD <= mQ && mE <= mR && mQ + s6 <= mD + s5 && mR + sn <= mE + a7E
}

function vX(f9) {
	return Math.floor(!!f9 * (1 + Math.log2(f9 + .5)))
}

function bu() {
	this.dn = function(f0, f1) {
		return Math.floor((f0 + .5) / f1)
	}, this.aKm = function(f0, f1) {
		return Math.floor(f0 * (f1 + .5))
	}, this.sqrt = function(f9) {
		return ~~Math.sqrt(f9 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.pF = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKn = function(fO, fQ, fS) {
		return Math.max(Math.min(fO, fQ), fS)
	}, this.aKo = function(aKp, aKq, eo, eq) {
		eo -= aKp, aKp = eq - aKq, eq = 0;
		return 0 == eo ? eq = 0 <= aKp ? Math.PI : 0 : (eq = Math.atan(aKp / eo), eq += 0 < eo ? .5 * Math.PI : 1.5 * Math.PI), eq
	}, this.log2 = function(f9) {
		return Math.floor(!!f9 * (1 + Math.log2(f9 + .5)))
	}, this.log10 = function(f9) {
		return Math.floor(Math.log10(f9 + .5))
	}, this.aKs = function(aKt, aKu, aKv, aKw, aKx) {
		return aKv - aKx < aKt && aKt < aKv + aKx && aKw - aKx < aKu && aKu < aKw + aKx
	}, this.wV = function(hk, hl) {
		return hk * hk + hl * hl
	}
}

function d9() {
	this.y = new aKy, this.ry = 0;
	var aKz = new Array(31);

	function aL3() {
		for (var eh = aKz.length, aB = 0; aB < eh; aB++) aKz[aB] = null
	}
	this.dX = function() {
		for (var aL0, aL1 = document.body.firstChild; aL1;) {
			if (aL0 = aL1.nextSibling, document.body.contains(aL1) && ("DIV" === aL1.tagName || "INPUT" === aL1.tagName || "BUTTON" === aL1.tagName)) try {
				document.body.removeChild(aL1)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aL1 = aL0
		}
	}, this.u = function(e2, aL2, a2u) {
		void 0 === aL2 && (aL2 = this.ry), be.df = !0, 0 === e2 && (0 === aa.a0E() ? e2 = 5 : a0.a1.setState(13)), this.r0(), this.ry === e2 && (aL2 = aKz[e2].aL2, aKz[e2] = null), this.ry = e2;
		var ke = aKz[e2];
		if (!ke || 4 === e2 || 7 === e2 || 8 === e2 || 9 === e2 || 10 === e2 || 11 === e2 || 13 === e2 || 15 === e2 || 18 === e2 || 20 <= e2 && e2 <= 28 || 32 === e2 || 33 === e2) {
			if (0 === e2) return void aL3();
			1 === e2 ? ke = new aL4 : 2 === e2 ? ke = new aL5 : 3 === e2 ? ke = new aL6 : 4 === e2 || 9 === e2 || 10 === e2 || 11 === e2 || 13 === e2 || 33 === e2 ? ke = a2u : 5 === e2 ? ke = new aL7 : 6 === e2 ? ke = new aL8 : 7 === e2 ? ke =
				new aL9(t.y.aLA) : 8 === e2 ? ke = a2u : 12 === e2 ? ke = new aLB : 14 === e2 ? ke = new aLC : 15 === e2 ? ke = new aL9(t.y.aLD) : 16 === e2 ? ke = new aLE : 17 === e2 ? ke = new aLF : 18 === e2 ? ke = new aLG : 19 === e2 ? ke =
				new aLH : 20 === e2 ? ke = new aLI : 21 === e2 ? ke = new aLJ : 22 === e2 ? ke = new aLK : 23 === e2 ? ke = new aLL : 24 === e2 ? ke = new aLM : 25 === e2 ? ke = new aLN : 26 === e2 ? ke = new aLO : 27 === e2 ? ke = new aLP :
				28 === e2 ? ke = new aLQ : 29 === e2 ? ke = new aLR : 30 === e2 && (ke = new aLS), ke.aL2 = aL2, aKz[e2] = ke
		}
		ke.show(a2u)
	}, this.a0D = function() {
		this.hO() && this.aLT(this.a44().aL2)
	}, this.aLT = function(e2) {
		this.hO() && (aKz[e2] ? (this.r0(), be.df = !0, this.ry = e2, aKz[e2].show()) : this.u(e2))
	}, this.r0 = function() {
		this.hO() && aKz[this.ry].r0()
	}, this.x = function() {
		this.hO() && (aKz[this.ry].r0(), aL3(), this.ry = 0, a0.a1.setState(13))
	}, this.tq = function() {
		var ke;
		this.hO() && (ke = aKz[this.ry]).tq && ke.tq()
	}, this.resize = function() {
		if (!this.hO()) return !1;
		aKz[this.ry].resize()
	}, this.gu = function(eo, eq) {
		var ke;
		this.hO() && (ke = aKz[this.ry]).gu && ke.gu(eo, eq)
	}, this.a0Y = function(eo, eq) {
		var ke;
		this.hO() && (ke = aKz[this.ry]).a0Y && ke.a0Y(eo, eq)
	}, this.a0w = function() {
		var ke;
		this.hO() && (ke = aKz[this.ry]).a0w && ke.a0w()
	}, this.a0b = function(kz, l0, deltaY) {
		var ke;
		this.hO() && (ke = aKz[this.ry]).a0b && ke.a0b(kz, l0, deltaY)
	}, this.a16 = function(code) {
		var ke;
		return !!this.hO() && ((ke = aKz[this.ry]).a16 && ke.a16(code), !0)
	}, this.ir = function() {
		var ke;
		this.hO() && (ke = aKz[this.ry]) && ke.ir && ke.ir()
	}, this.hO = function() {
		return 0 < this.ry
	}, this.a44 = function() {
		return aKz[this.ry]
	}, this.a45 = function(e2) {
		return aKz[e2]
	}, this.aLU = function() {
		return aKz
	}
}

function aL9(data) {
	var aLV, aLW;
	this.show = function() {
		data.aLX && bH.aMO("account", data.rw), aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aLW.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(data.username, [new w("⬅️ " + L(37), function() {
		bH.clear(), t.a0D()
	}), new w(data.aLX ? "🔄 " + L(157) : L(158), function() {
		t.u(8, t.a44().aL2, new rz(25, {
			s0: 0,
			rw: data.rw,
			rx: data.rx
		}))
	}, 0, 0, 1)]), aLW = new pa(aLV.th, function() {
		var pc = [];
		pc.push(function() {
				var aLo = new pK,
					qV = (aLo.pN(L(207)), new qW({
						value: data.username,
						e2: -1
					}));
				qV.e.readOnly = !0, aLo.pY(qV), aLo.pY(new rE([new w(L(176), function(e) {
					return b9.ph.a2L(qV.e), b9.ph.a2M(e), !0
				}).button])), data.aLX || aLo.pP(L(208));
				return aLo
			}()),
			function(pc) {
				var aLo, pQ, aAn, aM7, aLx;
				data.aLX || ((aLo = new pK).pN(L(209)), (pQ = aLo.pP(data.aM6.length + " / 160")).style.textAlign = "center", aAn = !0, (aM7 = new tz(0, 1, function(e) {
					e = e.target.value.length;
					pQ.textContent = e + " / 160", 160 < e ? aAn && (aAn = !1, aLx.q2(1), aLx.button.style.color = bA.mn) : aAn || (aAn = !0, aLx.q2(0), aLx.button.style.color = bA.nj)
				})).e.rows = 6, aM7.e.style.fontSize = "1em", aM7.u6(data.aM6), aLo.pY(aM7), aLx = new w(L(210), function() {
					if (!aAn) return !0;
					t.u(8, t.a44().aL2, new rz(29, {
						s0: 1,
						pO: aM7.u8().substring(0, 160)
					}))
				}, 0, 0, 1), aLo.pY(new rE([aLx.button])), 0 !== data.aM8 && (aLo.pY(new rE([new w(L(1 === data.aM8 ? 212 : 213), function() {
					t.u(8, t.a44().aL2, new rz(29, {
						s0: 0,
						pO: ""
					}))
				}, 0, 0, 1).button])), aLo.pP(1 === data.aM8 ? L(214, [data.aMA - 1]) : L(215, [data.aMA - 1]))), aLo.pP(L(211, [data.aM9])), pc.push(aLo))
			}(pc),
			function(pc) {
				var aLo;
				data.aLX && 0 !== data.aM8 && ((aLo = new pK).pN(L(216)), aLo.pR(data.aM6), aLo.pY(new rE([new w(L(217, 0, "Report"), function(e) {
					return az.y.aLt(0) && (b9.ph.a2M(e), az.aLv.aMB({
						s0: 5,
						rw: data.rw
					})), !0
				}, 0, 0, 1).button])), pc.push(aLo))
			}(pc), pc.push(function() {
				var aLo = new pK,
					aLp = (aLo.pN(L(159)), [L(160), L(161), L(162), L(163), L(164)]),
					e1 = data.aLq;
				aLo.pT(L(165) + b9.qh.a3B(data.uu, .01, 2) + "<br>" + L(166) + (e1 + 1) + " / " + data.ut + "<br>" + L(167) + aLp[e1 < 10 ? 0 : e1 < 50 ? 1 : e1 < 200 ? 2 : e1 < 1e3 ? 3 : 4]), data.aLX || (aLo.pP(L(168)), aLo.pP(L(169)),
					aLo.pP(L(170)));
				return aLo
			}()), data.aLX && pc.push(function() {
				var aLo = new pK,
					qV = (aLo.pN(L(171)), new qW({
						value: bi.eE.data[147].value,
						e2: -1
					}, 1, void 0, function(e) {
						bi.rB.rC(147, aLr(e.target.value))
					})),
					aLs = (aLo.pY(qV), new w(L(14), function(e) {
						return qV.e.readOnly && az.y.aLt(0) && (b9.ph.a2M(e), aLu(), az.aLv.aLw({
							s0: 0,
							rw: data.rw,
							value: parseInt(bi.eE.data[147].value, 10)
						})), !0
					}, 1)),
					aLx = new w(L(172), function(e) {
						return e.textContent === L(172) ? (e.textContent = L(173), qV.e.readOnly = !0, aLs.q2(0), aLs.button.style.color = bA.nj, bi.rB.rC(147, qV.e.value), aLr(bi.eE.data[147].value)) : aLu(), !0
					}),
					pQ = (aLo.pY(new rE([aLx.button])), aLo.pP()),
					aLr = function(f9) {
						f9 = b9.g2.a2r(f9, 2, 1e6);
						var aLy = Math.max(1, 1 + Math.floor(.01 * (f9 - 100)));
						pQ.textContent = L(174, [f9, bi.eE.data[105].value, aLy, data.rw, f9 - aLy])
					},
					aLu = function() {
						aLx.button.textContent = L(172), qV.e.readOnly = !1, aLs.q2(1), aLs.button.style.color = bA.mn
					};
				return aLr(bi.eE.data[147].value), aLo.pY(new rE([aLs.button])), aLo
			}());
		pc.push(function() {
			var aLo = new pK,
				qV = (aLo.pN(L(175)), new qW({
					value: data.rw,
					e2: -1
				}));
			return qV.e.readOnly = !0, aLo.pY(qV), aLo.pY(new rE([new w(L(176), function(e) {
				return b9.ph.a2L(qV.e), b9.ph.a2M(e), !0
			}).button])), aLo
		}()), data.aLX || (pc.push(function() {
			var aLo = new pK,
				aLz = (aLo.pN(L(177)), new qW(bi.eE.data[106]));
			return aLz.e.readOnly = !0, aLz.e.type = "password", aLo.pY(aLz), aLo.pY(new rE([new w(L(178), function(e) {
				return e.textContent === L(178) ? (e.textContent = L(179), aLz.e.type = "text") : (e.textContent = L(178), aLz.e.type = "password"), !0
			}).button, new w(L(176), function(e) {
				return b9.ph.a2L(aLz.e), b9.ph.a2M(e), !0
			}).button])), aLo.pY(new rE([new w(L(180), function() {
				t.u(8, t.a44().aL2, new rz(15))
			}).button])), aLo.pN(L(181), "0.8em"), aLo.pP(L(182)), aLo.pP(L(183)), aLo.pP(L(184)), aLo
		}()), pc.push(function() {
			var aLo = new pK;
			return aLo.pN(L(185)), aLo.pY(new rE([new w(L(186), function() {
				t.u(6, t.a44().aL2)
			}).button])), aLo.pY(new rE([new w(L(187), function() {
				bi.rB.rC(105, ""), t.u(8, t.a44().aL2, new rz(18))
			}).button])), aLo.pY(new rE([new w(L(188) + bi.eE.data[105].value, function() {
				t.u(4, 0, new v(L(189), L(190), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a45(7).aL2)
				})]))
			}, bA.nS).button])), aLo
		}()), pc.push(function() {
			function aM1(e2) {
				for (var aB = 0; aB < 2; aB++) aM0[aB].q2(0 === e2 ? bA.mz : 0 === aB ? bA.nS : bA.nA)
			}
			var pW, aM0, aLo = new pK;
			aLo.pN(L(191)), aLo.pP(L(192)), bi.y.ue();
			return aM0 = [new w(L(193), function() {
				var e2 = Math.min(bi.eE.data[117].value, pW.pX.length - 1);
				if (!(e2 < 1)) {
					pW.pX[e2].remove(), pW.pX.splice(e2, 1);
					for (var aB = e2; aB < pW.pX.length; aB++) pW.pX[aB].name = "" + aB;
					bi.y.uh(e2), e2 = bi.eE.data[117].value, pW.pX[e2].textContent = pW.pX[e2].textContent.replace("⚪", "🟢"), aM1(e2)
				}
			}, bA.mz), new w(L(194), function() {
				var e2 = Math.min(bi.eE.data[117].value, pW.pX.length - 1);
				e2 < 1 || (e2 = bi.y.ui(e2), bi.rB.rC(105, e2.rw), bi.rB.rC(106, e2.password), t.u(8, t.a44().aL2, new rz(18)))
			}, bA.mz)], (pW = new tW(bi.eE.data[117], aM1)).pX[0].style.marginTop = "0.5em", aLo.pV(pW), aLo.pY(new rE([aM0[1].button])), aLo.pY(new rE([aM0[0].button])), aLo
		}()));
		return pc.push(function() {
				var aLo = new pK,
					aLp = (aLo.pN(L(198)), [L(199), L(200), L(201), L(202)]),
					e1 = data.aM2;
				return aLo.pT(L(203) + (data.zV / 100).toFixed(2) + "<br>" + L(166) + (e1 + 1) + " / " + data.ut + "<br>" + L(167) + aLp[e1 < 10 ? 0 : e1 < 50 ? 1 : e1 < 200 ? 2 : 3]), aLo
			}()), pc.push(function() {
				var aLo = new pK;
				return aLo.pN(L(195)), aLo.pT(L(196) + b9.qh.a3B(data.uq, .1, 1) + "<br>" + L(166) + (data.ur + 1) + " / " + data.ut + "<br>" + L(197) + data.us), aLo
			}()),
			function(pc) {
				var aLo = new pK,
					aMC = data.ux,
					aMD = (aLo.pN(L(218)), aLo.pT(L(219, [data.uv.length ? "[" + data.uv + "]" : "-"])), aLo.pT(L(220, [b9.qh.a3B(aMC, .01, 2)])), aLo.pT(L(221, [data.uz + 1 + " / " + data.ut])), data.v0),
					aME = (aLo.pT(L(222, [b9.qh.a3B(aMD, .1, 1)])), data.v2);
				aLo.pT(L(223, [aME])), aLo.pT(L(224, [b9.qh.a3B(aMD / Math.max(aME, 1), .1, 2)])), aMC = data.uy, aLo.pN(L(225), "0.8em"), aLo.pT(L(219, [data.uw.length ? "[" + data.uw + "]" : "-"])), aLo.pT(L(220, [b9.qh.a3B(aMC, .01, 2)])),
					aMD = data.v1, aLo.pT(L(222, [b9.qh.a3B(aMD, .1, 1)])), aME = data.v3, aLo.pT(L(223, [aME])), aLo.pT(L(224, [b9.qh.a3B(aMD / Math.max(aME, 1), .1, 2)])), data.aLX || (aLo.pP(L(226)), aLo.pP(L(227)));
				pc.push(aLo)
			}(pc),
			function(pc) {
				var aLo = new pK;
				aLo.pN(L(228)), aLo.pT(L(203) + (data.aMF / 10).toFixed(1) + "<br>" + L(167) + (data.aMG.length ? L(229, [data.aMG]) : L(230))), data.aLX ? (aLo.pY(new rE([new w(L(231), function(e) {
					return az.y.aLt(0) && (b9.ph.a2M(e), az.aLv.aMB({
						s0: 4,
						rw: data.rw
					})), !0
				}, 0, 0, 1).button])), aLo.pP(L(232)), aLo.pP(L(233))) : aLo.pP(L(234));
				pc.push(aLo)
			}(pc), pc.push(function() {
				var aLo = new pK;
				if (aLo.pN(L(204)), aLo.pT(L(205) + data.aM3 + "<br>" + L(166) + (data.aM4 + 1) + " / " + data.ut + "<br>" + L(167) + bn.e4(data.aM4)), data.aLX) {
					var qV = new qW({
							value: bi.eE.data[157].value,
							e2: -1
						}, 1, void 0, function(e) {
							bi.rB.rC(157, aLr(e.target.value))
						}),
						aLx = (qV.e.style.marginTop = "0.6em", aLo.pY(qV), new w(L(172), function(e) {
							return e.textContent === L(172) ? (e.textContent = L(173), qV.e.readOnly = !0, aM5[0].q2(0), aM5[1].q2(0), aM5[0].button.style.color = bA.nj, aM5[1].button.style.color = bA.nj, aLr(bi.eE.data[157]
								.value)) : aLu(), !0
						})),
						aM5 = (aLo.pY(new rE([aLx.button])), [new w("−", function(e) {
							return qV.e.readOnly && az.y.aLt(0) && (b9.ph.a2M(e), aLu(), az.aLv.aLw({
								s0: 2,
								rw: data.rw,
								value: bK.pF(parseInt(bi.eE.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return qV.e.readOnly && az.y.aLt(0) && (b9.ph.a2M(e), aLu(), az.aLv.aLw({
								s0: 1,
								rw: data.rw,
								value: bK.pF(parseInt(bi.eE.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pQ = aLo.pP(),
						aLr = function(f9) {
							return f9 = b9.g2.a2r(f9, 3, 32767), pQ.textContent = L(206, [f9 - 1, f9, bi.eE.data[105].value]), f9
						};
					aLo.pY(new rE([aM5[0].button, aM5[1].button]));
					for (var aB = 0; aB < 2; aB++) aM5[aB].button.style.fontSize = "1.6em";
					var aLu = function() {
						aLx.button.textContent = L(172), qV.e.readOnly = !1, aM5[0].q2(1), aM5[1].q2(1), aM5[0].button.style.color = bA.mn, aM5[1].button.style.color = bA.mn
					};
					aLr(bi.eE.data[157].value)
				}
				return aLo
			}()),
			function(pc) {
				var aLo, a2K;
				data.aLX && !data.aMH || (0 === a0.id || data.aLX || data.aMH) && ((aLo = new pK).pN("Patreon"), !data.aLX && data.aMI ? aLo.pY(new rE([new w(L(178), function() {
					az.aLv.aMB({
						s0: 7,
						rw: data.rw
					}), data.aMI = 0, t.u(7)
				}).button])) : data.aMH ? (aLo.pT(L(235, [(data.aMJ / 100).toFixed(2)]) + "<br>" + L(236, [1 + data.aMK + " / " + data.aML]) + "<br>" + L(237, [data.aMM ? L(238) : L(239)])), data.aLX || aLo.pY(new rE([new w(L(240),
					function() {
						az.aLv.aMB({
							s0: 8,
							rw: data.rw
						}), data.aMH = 0, bi.rB.rC(160, 0), t.u(7)
					}).button]))) : (aLo.pT(L(241), "0.75em").style.marginBottom = "0.3em", aLo.pT("  • " + L(242), "0.75em").style.whiteSpace = "pre", aLo.pT("  • " + L(243), "0.75em").style.whiteSpace = "pre", aLo.pT("  • " + L(
						244), "0.75em").style.whiteSpace = "pre", aLo.pT(L(245), "0.75em").style.marginTop = "1.0em", aLo.pT(L(246), "0.75em").style.marginTop = "1.0em", aLo.pT("<a href='" + bJ.aMN +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a2K = "https://www.patreon.com/oauth2/authorize?state=" + data.rw +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aLo.pT(L(247), "0.75em").style.marginTop = "1.0em", aLo.pT("<a href='" + a2K +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aLX || (aLo.pY(new rO), aLo.pY(new rE([new w(L(179), function() {
						az.aLv.aMB({
							s0: 6,
							rw: data.rw
						}), data.aMI = 1, t.u(7)
					}).button])), aLo.pT(L(248), "0.75em").style.marginTop = "0.75em")), pc.push(aLo))
			}(pc), pc
	}())
}

function aLK() {
	var aMP, aMQ, aMR, pc;

	function aMS() {
		aMU(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		2 === aD.data.aIncomeType ? (b9.pq.a1j(aMR.u8(), aD.data.aIncomeData, 255), b9.pq.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(249), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), aLo.pV(new tW({
			ta: [L(251), L(252), L(253)],
			value: aD.data.aIncomeType
		}, function(e2) {
			aMU(), 2 !== e2 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.ee)), aD.data.aIncomeType = e2, t.u(22)
		})), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo;
		1 === aD.data.aIncomeType && ((aLo = new pK).pN("Value"), aLo.pY(new qW({
			e2: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bK.pF(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), pc.push(aLo))
	}(pc), function(pc) {
		var aLo;
		2 === aD.data.aIncomeType && ((aLo = new pK).pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.aIncomeData, 4)), aLo.pY(aMR), pc.push(aLo))
	}(pc), pc))
}

function aLN() {
	var aMP, aMQ, aMR;

	function aMS() {
		aMU(), 3 !== aD.data.botDifficultyType || b9.pq.a1X(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		3 === aD.data.botDifficultyType && b9.pq.a1j(aMR.u8(), aD.data.botDifficultyData, aE.k7.length - 1)
	}

	function aMZ(pc, e2) {
		var aLo = new pK,
			value = (aLo.pN(e2 < 0 ? L(62) : L(61) + " " + bf.zP[e2 % 9]), 0 <= e2 && (aLo.pT(L(256) + ": " + aD.data.teamPlayerCount[e2]).style.marginBottom = "1em"), e2 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e2]);
		aLo.pV(new tW({
			ta: aE.k7,
			value: value
		}, function(hU) {
			e2 < 0 ? aD.data.botDifficultyValue = hU : aD.data.botDifficultyTeam[e2] = hU
		})), pc.push(aLo)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(62), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, function() {
		var pc = [];
		if (function(pc) {
				var aLo = new pK,
					ta = (aLo.pN(L(250)), [L(252), L(254), L(255), L(253)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), ta.splice(2, 1));
				aLo.pV(new tW({
					ta: ta,
					value: value
				}, function(e2) {
					aMU(), aD.data.botDifficultyType = e2, 0 === aD.data.gameMode && 2 === e2 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.ee)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), pc.push(aLo)
			}(pc), 0 === aD.data.botDifficultyType) aMZ(pc, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aMZ(pc, aB);
		else 3 === aD.data.botDifficultyType && ! function(pc) {
			var aLo = new pK;
			aLo.pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.botDifficultyData, 8)), aLo.pY(aMR), pc.push(aLo)
		}(pc);
		return pc
	}())
}

function aMa(data) {
	var aLV, aMb, aMc, aMd, aMe, aMf, aMg, colors, aMh, aMi, aMj = 0,
		aMk = 0,
		aMl = !1,
		aMm = !1,
		aMn = [1, 5, 60, 240, 1440, 10080, 43200];

	function aNH(kz, l0) {
		! function(kz, l0) {
			return aMb < kz && kz < aMb + aMd && aMc < l0 && l0 < aMc + aMe
		}(aMj = kz, aMk = l0) ? (aMl && (be.df = !0), aMl = !1) : (aMl = !0, be.df = !0)
	}
	this.show = function() {
		aMm = bi.eE.data[127].value, aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize();
		var f2 = h.k,
			tp = aLV.tm(),
			aMw = f2 * tp.to,
			f2 = f2 * tp.r3;
		aMf = b9.ph.sN(.06), aMg = b9.ph.sN(.04), aMb = b9.ph.sN(.06), aMc = f2 + aMf, aMd = h.i - aMb - aMg, aMe = aMw + f2 - aMc - aMg
	}, this.tq = function() {
		aLV.tq(),
			function() {
				var aB, aMt, g9, eo, f0, g = data.data,
					aN0 = 1,
					aN1 = .125,
					aN2 = aMm ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aMt = g[aB].aMt, g9 = aMt.length, aN0 = Math.max(g9, aN0), f0 = 0; f0 < g9; f0++) aN1 = Math.max(aMt[f0], aN1), aN2 = Math.min(aMt[f0], aN2);
				var mE = aMc + aMe,
					x4 = aMe / (aN1 - aN2),
					x3 = 1 / (aN0 - 1);
				for (tr.lineWidth = bb.y5, aB = 0; aB < g.length; aB++) {
					for (aMt = g[aB].aMt, g9 = aMt.length, eo = aMb, tr.beginPath(), tr.moveTo(eo + aMd, mE - x4 * (aMt[g9 - 1] - aN2)), f0 = g9 - 2; 0 <= f0; f0--) tr.lineTo(eo + x3 * f0 * aMd, mE - x4 * (aMt[f0] - aN2));
					tr.strokeStyle = colors[aB], tr.stroke()
				}(function(aN2, aN1, mE, x4) {
					tr.font = b9.ph.rY(0, .25 * aMb), b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 2), tr.fillStyle = colors[0];
					for (var eo = .92 * aMb, aB = 0; aB < 3; aB++) {
						var f9 = aN2 + aB * (aN1 - aN2) / 2;
						tr.fillText((f9 / 1e3).toFixed(3), eo, mE - x4 * (f9 - aN2))
					}
				})(aN2, aN1, mE, x4),
				function(aN0) {
					var eq = aMc + aMe + .15 * aMg;
					tr.font = b9.ph.rY(0, Math.min(.4 * aMg, .028 * h.i)), b9.ph.textBaseline(tr, 0), b9.ph.textAlign(tr, 2), tr.fillStyle = colors[0], tr.fillText(b9.a1O.a2B(aMh), aMb + aMd, eq), b9.ph.textAlign(tr, 0), tr.fillText(b9.a1O.a2B(
						new Date(aMi.getTime() - 6e4 * (aN0 - 1) * aMn[data.aMs])), aMb, eq)
				}(aN0),
				function(aN0, aN2, aN1) {
					if (aMl && !(aN0 < 2)) {
						for (var a7M, e2 = (aMj - aMb) / aMd * (aN0 - 1), aN5 = Math.floor(e2), aN6 = Math.floor(1 + e2), aN7 = e2 - aN5, aN8 = 1e5, aN9 = -1, aNA = -1, aNB = aN1 - (aN1 - aN2) * (aMk - aMc) / aMe, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aAz, aMt = g[aB].aMt;
							aMt.length <= aN6 || (aMt = aMt[aN5] + aN7 * (aMt[aN6] - aMt[aN5]), (aAz = Math.abs(aNB - aMt)) < aN8 && (aN8 = aAz, aN9 = aB, aNA = aMt))
						} - 1 !== aN9 && (aN1 = aMc + aMe - (aNA - aN2) / (aN1 - aN2) * aMe, tr.lineWidth = .5 * bb.y5, tr.strokeStyle = colors[aN9], tr.beginPath(), tr.moveTo(aMb, aN1), tr.lineTo(aMj, aN1), tr.lineTo(aMj, aMc + aMe), tr
						.stroke(), tr.beginPath(), tr.arc(aMj, aN1, .1 * aMb, 0, 2 * Math.PI), tr.fillStyle = colors[aN9], tr.fill(), aN2 = aMc + aMe + .15 * aMg, b9.ph.textAlign(tr, 1), a7M = aN0 - 2 < e2 ? (a7M = aMi.getTime() - 6e4 * aMn[
								data.aMs], new Date(a7M + (e2 - (aN0 - 2)) * (aMh.getTime() - a7M))) : new Date(aMi.getTime() - 6e4 * (aN0 - e2 - 1) * aMn[data.aMs]), aN0 = b9.a1O.a2B(a7M), e2 = b9.ph.measureText(aN0), a7M = bK.pF(aMj, aMb +
								.5 * e2, aMb + aMd - .5 * e2), tr.fillStyle = b9.color.mf(70, 50, 20), tr.fillRect(a7M - .52 * e2, aMc + aMe, 1.04 * e2, .55 * aMg), tr.fillStyle = colors[0], tr.fillText(aN0, a7M, aN2), tr.font = b9.ph.rY(0,
								.25 * aMb), b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 2), a7M = .92 * aMb, aN0 = (aNA / 1e3).toFixed(3), e2 = b9.ph.measureText(aN0), aN2 = a7M - 1.04 * e2, tr.fillStyle = b9.color.mf(70, 50, 20), tr
							.fillRect(aN2, aN1 - .1625 * aMb, aMb - aN2, .275 * aMb), tr.fillStyle = colors[aN9], tr.fillText(aN0, a7M, aN1))
					}
				}(aN0, aN2, aN1)
			}(), tr.lineWidth = bb.y5, tr.strokeStyle = bA.mn, tr.beginPath(), tr.moveTo(aMb, aMc), tr.lineTo(aMb, aMc + aMe), tr.lineTo(aMb + aMd, aMc + aMe), tr.stroke();
		var aB, fontSize = .5 * aMf,
			g = (tr.font = b9.ph.rY(0, fontSize), b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 0), data.data),
			eh = g.length,
			eq = aMc - .5 * aMf,
			pO = "";
		for (aB = 0; aB < eh; aB++) pO += g[aB].name + "  ";
		pO = pO.trim();
		var aNE = b9.ph.measureText(pO),
			eo = .5 * (h.i - aNE);
		for (aNE > h.i && (eo = 0, tr.font = b9.ph.rY(0, h.i / aNE * fontSize)), aB = 0; aB < eh; aB++) tr.fillStyle = colors[aB], tr.fillText(g[aB].name, eo, eq), eo += b9.ph.measureText(g[aB].name + "  ")
	}, this.gu = function(kz, l0) {
		aNH(kz, l0)
	}, this.a0Y = function(kz, l0) {
		aNH(kz, l0)
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	};
	var aB, dm, a29, hU, ek = data.data,
		eh = ek.length,
		max = 1;
	for (aB = 0; aB < eh; aB++) max = Math.max(max, ek[aB].aMt.length);
	for (aB = 0; aB < eh; aB++)
		for (; ek[aB].aMt.length < max;) ek[aB].aMt.unshift(0);
	dm = new Date, a29 = 6e4 * dm.getTimezoneOffset(), hU = dm.getTime() - a29, aMh = new Date(hU), 6 === data.aMs ? function(dm, a29) {
		var aMv = dm.getUTCFullYear(),
			dm = dm.getUTCMonth() + 1;
		aMi = dm < 12 ? new Date(Date.UTC(aMv, dm) - a29) : new Date(Date.UTC(aMv + 1, 0) - a29)
	}(dm, a29) : (a29 = 6e4 * aMn[data.aMs], aMi = data.aMs <= 4 ? new Date(hU + a29 - dm.getTime() % a29) : new Date(hU + a29 - (dm.getTime() + 2592e5) % a29)), hU = b9.color, colors = [bA.mn, hU.mf(255, 0, 0), hU.mf(0, 200, 0), hU.mf(80, 80,
		255), hU.mf(255, 255, 0), hU.mf(255, 0, 255), hU.mf(0, 255, 255), hU.mf(255, 140, 0), hU.mf(128, 128, 128), hU.mf(0, 255, 140)], aLV = new tb(L(257) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aMs] + ", " + b9.a1O.a28(aMh), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(258), function() {
			t.u(14)
		})
	], !1)
}

function aLC() {
	var aLV, aLW, pc;
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aLW.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(L(259), [new w("⬅️ " + L(37), function() {
		t.aLT(13)
	})]), aLW = new pa(aLV.th, ((pc = []).push(function() {
		var aLo = new pK,
			aLx = (aLo.pN(L(260)), aLo.pP(L(261)), new w(L(262), function() {
				bi.rB.rC(130, 0), t.y.aNM()
			}, 0, 0, 1)),
			qV = new qW(bi.eE.data[126], 0, function() {
				aLx.button.click()
			});
		return aLo.pY(qV), qV.e.placeholder = "a,b,c", qV.e.style.marginTop = "0.5em", aLo.pY(new rE([aLx.button])), aLo
	}()), pc.push(function() {
		var aLo = new pK,
			aLx = new w(L(262), function() {
				bi.rB.rC(130, 1), t.y.aNM()
			}, 0, 0, 1),
			aNN = new qW(bi.eE.data[129], 1, function() {
				aNN.e.focus()
			}),
			aNO = new qW(bi.eE.data[128], 1, function() {
				aLx.button.click()
			});
		return aLo.pN(L(263)), aLo.pY(aNO), aNO.e.style.marginBottom = "0.5em", aLo.pN(L(264)), aLo.pY(aNN), aLo.pY(new rE([aLx.button])), aLo
	}()), pc.push(function() {
		var aLo = new pK;
		return aLo.pN(L(265)), bi.eE.data[125].ta = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLo.pV(new tW(bi.eE.data[125])), aLo
	}()), pc.push(function() {
		var aLo = new pK;
		return aLo.pN(L(266)), aLo.pY(new r8(bi.eE.data[127], L(267))), aLo
	}()), pc))
}

function aLB() {
	var aLV, aNP, aMd, aNQ, aNR, aNS, colors = [0, 0, 0],
		aNT = -1;

	function aNW(aB) {
		var aNX = aNP.eq + aB * (bb.gap + aNS);
		tr.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", tr.fillRect(aNQ, aNX, colors[aB] * aNR, aNS), tr.strokeStyle = bA.mn, tr.strokeRect(aNQ, aNX, aNR,
			aNS), tr.fillStyle = bA.mn, tr.font = b9.ph.rY(0, .32 * aNS), b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 0), tr.fillText(L(0 === aB ? 270 : 1 === aB ? 271 : 272) + aNU(aB), aNQ + bb.gap, aNX + .53 * aNS)
	}

	function aNU(aB, aNY) {
		return aNY = aNY || 256, bK.pF(Math.floor(aNY * colors[aB]), 0, aNY - 1)
	}

	function a12(kz, l0) {
		return !(kz < aNQ || l0 < aNP.eq || kz > aNP.eo + aNP.i || l0 > aNP.eq + aNP.j)
	}
	this.show = function() {
		var f9 = bi.eE.data[121].value;
		colors[0] = (f9 >> 12) / 63, colors[1] = (f9 >> 6 & 63) / 63, colors[2] = (63 & f9) / 63, aLV.show(), this.resize()
	}, this.r0 = function() {
		bi.rB.rC(121, (aNU(0, 64) << 12) + (aNU(1, 64) << 6) + aNU(2, 64)), aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aNP.resize();
		var f2 = h.k,
			tp = aLV.tm(),
			aNV = (aNP.eq = Math.max(aNP.eq, f2 * tp.r3 + bb.gap), f2 * tp.to - 2 * bb.gap);
		aNP.j = Math.min(aNP.j, aNV), aNP.i = 2 * aNP.j, aNP.eq = f2 * tp.r3 + .5 * (f2 * tp.to - aNP.j), aNP.eo = .5 * (h.i - aNP.i), aMd = .25 * aNP.i, aNQ = aNP.eo + aMd + bb.gap, aNR = aNP.i - aMd - bb.gap, aNS = (aNP.j - 2 * bb.gap) / 3
	}, this.tq = function() {
		var e1, sM, f1;
		aLV.tq(), tr.lineWidth = bb.y5, e1 = aNU(0), sM = aNU(1), f1 = aNU(2), tr.fillStyle = "rgb(" + e1 + "," + sM + "," + f1 + ")", tr.fillRect(aNP.eo, aNP.eq, aMd, aNP.j), tr.strokeStyle = bA.mn, tr.strokeRect(aNP.eo, aNP.eq, aMd, aNP.j), tr
			.fillStyle = e1 + sM + f1 < 306 && sM < 150 ? bA.mn : bA.me, b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 1), tr.font = b9.ph.rY(0, .1 * aNP.j), tr.rotate(-Math.PI / 2), tr.fillText(L(269), -aNP.eq - .5 * aNP.j, aNP.eo + .5 * aMd),
			tr.setTransform(1, 0, 0, 1, 0, 0), aNW(0), aNW(1), aNW(2)
	}, this.gu = function(kz, l0) {
		a12(kz, l0) && (aNT = bK.pF(Math.floor((l0 - aNP.eq) / (aNS + .75 * bb.gap)), 0, 2), colors[aNT] = bK.pF((kz - aNQ) / aNR, 0, 1), be.df = !0)
	}, this.a0Y = function(kz) {
		-1 !== aNT && (colors[aNT] = bK.pF((kz - aNQ) / aNR, 0, 1), be.df = !0)
	}, this.a0b = function(kz, l0, deltaY) {
		a12(kz, l0) && (kz = bK.pF(Math.floor((l0 - aNP.eq) / (aNS + .75 * bb.gap)), 0, 2), colors[kz] = bK.pF(colors[kz] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), be.df = !0)
	}, this.a0w = function() {
		0 <= aNT && (aNT = -1, be.df = !0)
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(L(268), [new w("⬅️ " + L(37), function() {
		t.y.aAt()
	})], !1), aNP = new qJ([.5, .25], [.5, .5], 1)
}

function aLJ() {
	var aMP, aMQ, aMR, qH;

	function aMS() {
		aMU(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aLU()[19] = null, t.a0D()
	}

	function aNZ() {
		aMU(), t.u(21)
	}

	function aMU() {
		1 === aD.data.gameMode ? aD.a3Y.a3c() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && b9.pq.a1j(aMR.u8(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, qH = [new w("⬅️ " + L(37), aMS)], 1 === aD.data.gameMode && qH.push(new w(L(273), aNZ, 1, 1)), aMP = new tb(L(274), qH), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), 0 === aD.data.gameMode && (aLo.pV(new tW({
			ta: [L(275), L(253)],
			value: aD.data.colorsType
		}, function(e2) {
			aMU(), aD.data.colorsType = e2, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.ee || (aD.data.colorsData = new Uint32Array(aD.ee)), t.u(21)
		})), aLo.pY(new rO));
		aLo.pY(new r8({
			value: aD.data.selectableColor
		}, L(276), function(value) {
			aD.data.selectableColor = value
		})), pc.push(aLo)
	}(qH = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(pc) {
		var aLo = new pK;
		aLo.pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.colorsData, 1)), aLo.pY(aMR), pc.push(aLo)
	}(qH) : (aD.a3Y.a3c(), qH.push(function() {
		var aLo = new pK;
		aLo.pN(L(256));
		for (var aB = 0; aB < bf.zP.length; aB++) {
			var hU = (aB + 1) % bf.zP.length,
				e = aLo.pT((0 == hU ? "" : "Team ") + bf.zP[hU]);
			aB && (e.style.marginTop = "0.5em"), aLo.pY(new qW({
				e2: -1,
				value: aD.data.teamPlayerCount[hU]
			}, 1, 0, function(e) {
				aMP.ti[1].q2(0);
				var playerCount = bK.pF(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aNb] = playerCount
			})).e.aNb = hU
		}
		return aLo
	}())), qH))
}

function rz(id, a2u, aNc) {
	var aLV, aNd;

	function aNi() {
		aNd.pd.innerHTML += "<br>" + L(279)
	}

	function aNh() {
		bC.a7(48), bC.a8(24, Math.floor(bK.pow(24) * Math.random())), bC.a8(24, Math.floor(bK.pow(24) * Math.random())), bG.dX(bC.aC), bi.rB.rC(110, bE.s1.s2(bE.s1.s3(8))), az.aLv.aNw()
	}
	this.aNe = !0, this.aNf = id, this.show = function() {
		aLV.show(), this.resize(), 15 === id ? (az.y.aNg(id) ? aNh : aNi)() : 16 === id ? az.y.aNg(id) ? az.aAq.aNj(2) : aNi() : 17 === id ? az.y.aNg(id) ? az.aAq.aNj(3) : aNi() : 18 === id ? (az.y.close(0, 3253), az.y.aER(0, id), aNi()) : 21 ===
			id ? az.y.aNg(id) ? az.aNk.aNl(a2u.sH, a2u.sI, a2u.sJ) : aNi() : 22 === id ? az.y.aNg(id) ? az.aNk.aNm(a2u.sH, a2u.aNn, a2u.aNo) : aNi() : 23 === id ? az.y.aNg(id) ? az.aNk.aNp(a2u.aMs, a2u.zi) : aNi() : 24 === id ? az.y.aNg(id) ? az
			.aNk.aNq(a2u.aMs, a2u.sI, a2u.sJ) : aNi() : 25 === id ? az.y.aNg(id) ? az.aLv.aMB(a2u) : aNi() : 28 === id ? az.y.aNg(id) ? az.aNk.aNr(a2u.sH, a2u.aNn, a2u.aNo) : aNi() : 29 === id && (az.y.aNg(id) ? az.aLv.aNs(a2u) : aNi())
	}, this.aNt = function() {
		15 === id ? aNh() : 16 === id ? az.aAq.aNj(2) : 17 === id ? az.aAq.aNj(3) : 18 === id ? t.u(8, this.aL2, new rz(16)) : 21 === id ? az.aNk.aNl(a2u.sH, a2u.sI, a2u.sJ) : 22 === id ? az.aNk.aNm(a2u.sH, a2u.aNn, a2u.aNo) : 23 === id ? az.aNk
			.aNp(a2u.aMs, a2u.zi) : 24 === id ? az.aNk.aNq(a2u.aMs, a2u.sI, a2u.sJ) : 25 === id ? az.aLv.aMB(a2u) : 28 === id ? az.aNk.aNr(a2u.sH, a2u.aNn, a2u.aNo) : 29 === id ? az.aLv.aNs(a2u) : 1e3 === id && (this.aNf = id = 25, az.aLv.aMB(
				a2u))
	}, this.aNu = function(code, br, data) {
		!br && code !== id || (15 === code || 16 === code ? t.u(7, this.aL2) : 17 === code ? (az.y.close(0, 3252), bi.y.uh(0), bi.eE.data[117].ta && 0 < bi.eE.data[117].ta.length ? (br = bi.y.ui(0), bi.rB.rC(105, br.rw), bi.rB.rC(106, br
			.password), t.u(8, this.aL2, new rz(16))) : (bi.rB.rC(105, ""), t.y.aAt())) : 21 === code ? t.u(10, this.aL2, new aNv(data)) : 23 === code ? t.u(13, this.aL2, new aMa({
			data: data,
			aMs: a2u.aMs
		})) : 25 === code && (t.y.aLD.rw = a2u.rw, t.u(15, this.aL2)))
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aNd.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(L(277), [new w("⬅️ " + L(37), function() {
		aNc ? t.u(29) : t.y.aAt()
	})]), aNd = new rD(aLV.th, L(278))
}

function aLH() {
	var aMP, aMQ, pc;

	function aNz() {
		var g9;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a3Y.a3c()), g9 = b9.pq.a1d(aD.data.teamPlayerCount, 0), aD.data.numberTeams = g9) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aMS() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aO1(), aD.data.canvas = null, t.u(5, 5)
	}

	function aO1() {
		b8.ox.dX(), bi.rB.rC(156, b8.a3o.yX())
	}

	function aNx() {
		aD.data.isReplay = 0, aO1(), aD.a3Y.a3z(), aa.aEc(), aD.a3Y.a3w(), aD.data.canvas = 2 === aD.data.mapType ? bR.ve : null, aD.a3b(), aD.a3a = 1
	}

	function aOF() {
		aNz();
		for (var g = [aO4(), aO5(), aO6()], aB = 3; aB < 6; aB++) aMQ.pd.removeChild(aMQ.pe[aB].pM), aMQ.pe[aB] = g[aB - 3], aMQ.pd.appendChild(aMQ.pe[aB].pM);
		aMQ.resize()
	}

	function aO4() {
		var aOG, aLo = new pK;
		return aLo.pN(L(274)), aOG = 0 === aD.data.gameMode ? [L(275), L(253)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aLo.pT(aOG), aLo.pY(new rE([new w(L(283), function() {
			t.u(21)
		}).button])), aLo
	}

	function aO5() {
		var aLo = new pK,
			g = (aLo.pN(L(62)), [L(252) + ": " + aE.k7[aD.data.botDifficultyValue], L(254), L(255), L(253)]);
		return aLo.pT(g[aD.data.botDifficultyType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(25)
		}).button])), aLo
	}

	function aO6() {
		var aLo = new pK,
			g = (aLo.pN("Spawning"), [L(275), L(285), L(253)]);
		return aLo.pT(g[aD.data.spawningType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(24)
		}).button])), aLo
	}
	this.show = function() {
		aMP.show(), this.resize(), aMP.th.scrollTop = t.y.aGV[0]
	}, this.r0 = function() {
		t.y.aGV[0] = aMP.th.scrollTop, aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb("🔧 " + L(280), [new w("⬅️ " + L(37), aMS), new w(L(281), aNx)]), aNz(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bR.ve : 1 === aD.data.mapType ? aD.data.canvas = bR.aJ4(bR.a3x(aD.data), 0).ve : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bR.aJ4(bR.a3x(aD.data), aD.data.mapSeed).ve)), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK,
			a1t = (aLo.pN(L(282)), aD.data.canvas);
		a1t.style.width = "100%", aLo.pY({
			e: a1t
		}), aLo.pY(new rE([new w(L(283), function() {
			t.u(20)
		}).button])), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo = new pK;
		aLo.pN(L(256)), aLo.pY(new qW({
			e2: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bK.pF(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = b9.pq.a1d(aD.data.teamPlayerCount, 0), aD.a3Y.a3c(), b9.pq.a1d(aD.data.teamPlayerCount, 0) !== e) && aOF()
		})), pc.push(aLo)
	}(pc), function(pc) {
		var aLo = new pK;
		aLo.pN(L(284)), aLo.pV(new tW({
			ta: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e2) {
			aD.data.gameMode !== e2 && (aD.data.gameMode = e2, aOF())
		})), pc.push(aLo)
	}(pc), pc.push(aO4()), pc.push(aO5()), pc.push(aO6()), function(pc) {
		var aLo = new pK,
			g = (aLo.pN(L(286)), [L(287), L(288), L(253)]);
		aLo.pT(g[aD.data.playerNamesType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(23)
		}).button])), pc.push(aLo)
	}(pc), function(pc) {
		var aLo = new pK,
			g = (aLo.pN(L(249)), [L(251), L(252) + ": " + aD.data.aIncomeValue, L(253)]);
		aLo.pT(g[aD.data.aIncomeType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(22)
		}).button])), pc.push(aLo)
	}(pc), function(pc) {
		var aLo = new pK,
			g = (aLo.pN(L(289)), [L(251), L(252) + ": " + aD.data.tIncomeValue, L(253)]);
		aLo.pT(g[aD.data.tIncomeType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(26)
		}).button])), pc.push(aLo)
	}(pc), function(pc) {
		var aLo = new pK,
			g = (aLo.pN(L(290)), [L(251), L(252) + ": " + aD.data.iIncomeValue, L(253)]);
		aLo.pT(g[aD.data.iIncomeType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(27)
		}).button])), pc.push(aLo)
	}(pc), function(pc) {
		var aLo = new pK,
			g = (aLo.pN(L(291)), [L(251), L(252) + ": " + aD.data.sResourcesValue, L(253)]);
		aLo.pT(g[aD.data.sResourcesType]), aLo.pY(new rE([new w(L(283), function() {
			t.u(28)
		}).button])), pc.push(aLo)
	}(pc), function(pc) {
		var aLo = new pK;
		aLo.pN(L(292)), aLo.pY(new rE([new w(L(293), function() {
			t.x(), aD.a3Y.a40(), t.y.aGV[0] = 0, t.u(19)
		}).button])), aLo.pY(new rE([new w(L(294), function() {
			bl.aGK()
		}).button])), aLo.pY(new rE([new w(L(295), function() {
			return bl.aGM(), !0
		}).button])), pc.push(aLo)
	}(pc), pc))
}

function aLS() {
	var aMP, qb = !0;

	function qs(qr, a42) {
		var pM = document.createElement("div"),
			aOI = document.createElement("span"),
			aOJ = document.createElement("span");
		aOI.textContent = aW.a9l(a42.eG) + ":", aOI.style.color = bA.n2, aOI.style.paddingRight = "0.4em", aOI.style.display = "table-cell", aOI.style.width = "6ch", aOI.style.textAlign = "end", pM.appendChild(aOI), aOJ.textContent = a42.pO, pM
			.appendChild(aOJ), pM.style.display = "table", a42.oK && function(pM, oK) {
				{
					var aGG;
					oK >= 1024 - aj.qz.xs ? ((aGG = document.createElement("img")).src = aj.vh.xg[oK - 1024 + aj.qz.xs].toDataURL(), aGG.style.width = "1.5em", aGG.style.height = "1.5em", aGG.style.verticalAlign = "middle", pM.appendChild(aGG)) : ((
						aGG = document.createElement("span")).textContent = aj.qz.y7(oK), aGG.style.display = "inline-block", aGG.style.fontSize = "1.5em", aGG.style.lineHeight = "1em", aGG.style.verticalAlign = "middle", pM.appendChild(aGG))
				}
			}(pM, a42.oK), qr.appendChild(pM)
	}

	function qw() {
		qb && (aMP.th.scrollTop = aMP.th.scrollHeight)
	}
	this.clear = function() {
		aMP.th.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a4v = bp.a46(), eh = a4v.length, qr = document.createDocumentFragment(), aB = 0; aB < eh; aB++) qs(qr, a4v[aB]);
		aMP.th.appendChild(qr), qw(), aMP.show(), this.resize(), qb = !0, qw()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMP.th.style.padding = "0.4em " + b9.ph.pr(bb.po)
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, this.xZ = function(a42) {
		var qr = document.createDocumentFragment();
		qs(qr, a42), aMP.th.appendChild(qr), qw()
	}, (aMP = new tb(L(296), [new w("⬅️ " + L(37), function() {
		t.aLT(1)
	})])).th.style.overflowY = "auto", aMP.th.addEventListener("scroll", function() {
		qb = aMP.th.scrollTop >= aMP.th.scrollHeight - aMP.th.clientHeight - 2
	})
}

function aLP() {
	var aMP, aMQ, aMR, pc;

	function aMS() {
		aMU(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		2 === aD.data.iIncomeType && b9.pq.a1j(aMR.u8(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(290), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), aLo.pV(new tW({
			ta: [L(251), L(252), L(253)],
			value: aD.data.iIncomeType
		}, function(e2) {
			aMU(), 2 !== e2 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.ee), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e2, t.u(27)
		})), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo;
		1 === aD.data.iIncomeType && ((aLo = new pK).pN("Value"), aLo.pY(new qW({
			e2: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bK.pF(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), pc.push(aLo))
	}(pc), function(pc) {
		var aLo;
		2 === aD.data.iIncomeType && ((aLo = new pK).pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.iIncomeData, 4)), aLo.pY(aMR), pc.push(aLo))
	}(pc), pc))
}

function aL7() {
	var aOL, aOM, aNP, qV, aON;
	this.aFB = new s7, aNP = new qJ([.45, .27], [.5, .5], 2 / 3), aOM = [new w("⚔️<br>" + L(297), function() {
			aOO(0)
		}, bA.nG), new w("🗡️<br>" + L(280), function() {
			aOO(1)
		}, bA.nY), new w("🔑<br>" + L(298), function() {
			aOO(2)
		}, bA.no), new w("☰<br>" + L(299), function() {
			aOO(3)
		}, bA.n0), new w("", function() {
			t.u(12)
		}, bA.mj, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qV = new qW(bi.eE.data[122]);
	for (var aB = 0; aB < aOM.length; aB++) aOM[aB].button.style.position = "absolute";

	function aOO(e2) {
		a0.a1.setState(10), ab.sQ() || ab.aF2(), 0 === e2 ? t.y.a3r() : 1 === e2 ? (b8.aGf.vP(bi.eE.data[156].value, 1) || aD.a3Y.a40(), t.u(19)) : 2 === e2 ? 0 !== a0.id || bi.eE.data[140].value ? t.u(8, t.ry, new rz(16)) : t.y.aOP(t.ry, 16) : 3 ===
			e2 && t.u(1)
	}
	qV.e.style.position = "absolute", qV.e.style.textAlign = "center", qV.e.placeholder = L(300), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aFB.show(), aOM[4].q2(b9.color.a20(bi.eE.data[121].value)), this.resize(), document.body.appendChild(qV.e);
		for (var aB = 0; aB < aOM.length; aB++) document.body.appendChild(aOM[aB].button);
		1 !== a0.id || a0.dp < 5 || (aON && be.eG > aON + 144e5 ? a0.uS.setState(14) : aON = be.eG)
	}, this.r0 = function() {
		this.aFB.r0(), document.body.removeChild(qV.e);
		for (var aB = 0; aB < aOM.length; aB++) document.body.removeChild(aOM[aB].button)
	}, this.resize = function() {
		this.aFB.resize(), this.aFB.resize(), aNP.resize();
		var gap = .5 * bb.gap,
			sv = 10 / 99 * .84 * aNP.i,
			aOS = .16 * aNP.j,
			a7t = .19 * aNP.i,
			eo = aNP.eo + a7t,
			sv = aNP.eq + sv + 3 * gap,
			i = .5 * (aNP.i - gap) - a7t,
			a7t = aNP.i - 2 * a7t - aOS - gap,
			a7t = (b9.ph.sO(qV.e, eo, sv, a7t, aOS), b9.ph.sO(aOM[4].button, eo + a7t + gap, sv, aOS, aOS), .5 * (aNP.eq + aNP.j - (sv += aOS + gap) - gap));
		b9.ph.sO(aOM[0].button, eo, sv, i, a7t), b9.ph.sO(aOM[1].button, eo + i + gap, sv, i, a7t), b9.ph.sO(aOM[2].button, eo, sv + a7t + gap, i, a7t), b9.ph.sO(aOM[3].button, eo + i + gap, sv + a7t + gap, i, a7t);
		b9.ph.sO(aOM[5].button, eo, sv + a7t * 2 + gap * 2, i * 2 + gap, a7t / 3);
		b9.ph.sO(aOM[6].button, eo, sv + a7t * 2.33 + gap * 3, i * 2 + gap, a7t / 3);
		for (var aB = 0; aB < aOM.length; aB++) aOM[aB].button.style.font = b9.ph.rY(0, b9.ph.a2G(.065 * aNP.j)), b9.ph.ps(aOM[aB].button, 5);
		qV.e.style.font = b9.ph.rY(0, b9.ph.a2G(.08 * aNP.j)), b9.ph.ps(qV.e, 5)
	}, this.tq = function() {
		if (aa.aEg(), aT.tq(), aO.tq(), bX.tq(), ab.sQ()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aNP.i * 0.03);
				tr.font = b9.ph.rY(1, size);
				tr.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tr.measureText(text).width;
				tr.textAlign = "left";
				tr.textBaseline = "middle";
				tr.fillText(text, tr.canvas.width - textLength - size / 2, size);
			};
			tr.imageSmoothingEnabled = !1;
			var f2 = ab.aEj("territorial.io"),
				mP = .84 * aNP.i / f2.width;
			tr.setTransform(mP, 0, 0, mP, aNP.eo + .08 * aNP.i, aNP.eq), aOL = aOL || b9.a1K.a2s(f2, b9.a1K.a2y, [0, 0, 0]);
			for (var eo = -1; eo <= 1; eo += 2)
				for (var eq = -1; eq <= 1; eq += 2) tr.drawImage(aOL, eo, eq);
			tr.drawImage(f2, 0, 0), tr.imageSmoothingEnabled = !0;
			var hn = ab.aEj("logo"),
				aOU = .6666 * mP * f2.height / hn.height,
				mQ = .5 * h.i,
				mR = aNP.eq + .5 * mP * f2.height - .5 * aOU * hn.height;
			tr.setTransform(aOU, 0, 0, aOU, mQ - .6 * mP * f2.width, mR), tr.drawImage(hn, 0, 0), tr.setTransform(aOU, 0, 0, aOU, mQ + .6 * mP * f2.width - aOU * hn.width, mR), tr.drawImage(hn, 0, 0), tr.setTransform(1, 0, 0, 1, 0, 0), tr
				.imageSmoothingEnabled = !0
		}
	}
}

function aLE() {
	var aLV, aOV, aOW, tc;

	function aOX(aB) {
		t.u(8, t.ry, new rz(21, {
			sH: aB,
			sI: 0,
			sJ: 10
		}))
	}
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aOV.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aOW = [new w(L(301), function() {
		aOX(1)
	}, 0, 0, 1), new w(L(302), function() {
		aOX(2)
	}, 0, 0, 1), new w(L(303), function() {
		aOX(3)
	}, 0, 0, 1), new w(L(304), function() {
		aOX(0)
	}, 0, 0, 1), new w(L(305), function() {
		aOX(9)
	}, 0, 0, 1), new w(L(306), function() {
		aOX(10)
	}, 0, 0, 1), new w(L(307), function() {
		aOX(11)
	}, 0, 0, 1)], tc = [new w("⬅️ " + L(37), function() {
		t.a0D()
	})], aLV = new tb(L(308), tc), aOV = new qG(aOW, aLV.th)
}

function aBH(title, pU, aOY) {
	var aLV, aNd;
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aNd.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aOY = aOY || [new w("⬅️ " + L(37), function() {
		t.a0D()
	}, bA.nS)], aLV = new tb(title, aOY), aNd = new rD(aLV.th, pU), b9.ph.textAlign(aLV.th.style, 1)
}

function aNv(data) {
	var aLV, aOZ, f2, ro;

	function aOa(hq) {
		var eh = data.data.length;
		if (eh) {
			for (var sI, max = min = parseInt(data.data[0][0]), aB = 1; aB < eh; aB++) var aD5 = parseInt(data.data[aB][0]),
				min = Math.min(aD5, min),
				max = Math.max(aD5, max);
			sI = hq < 0 ? min + hq : max + 1, t.u(8, t.a44().aL2, new rz(21, {
				sH: data.sH,
				sI: sI,
				sJ: sI + Math.abs(hq)
			}))
		}
	}
	this.show = function() {
			aLV.show(), this.resize()
		}, this.r0 = function() {
			aLV.r0()
		}, this.resize = function() {
			aLV.resize(), aOZ.resize()
		}, this.a16 = function(f2) {
			2 === f2 && aLV.ti[0].pz()
		}, f2 = data.data.length ? 0 : 1, f2 = [new w("⬅️ " + L(37), function() {
			t.a0D()
		}), new w(L(309), function() {
			aOa(-10)
		}, f2, 0, 1), new w(L(310), function() {
			aOa(10)
		}, f2, 0, 1), new w(L(258), function() {
			t.u(11, 10, new aOb({
				sH: data.sH
			}))
		})], ro = [L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(319), L(320), L(306), L(307), L(321)], aLV = new tb(ro[data.sH], f2),
		function() {
			var aB, ek = {
					ri: []
				},
				ri = ek.ri,
				aOd = data.data,
				eh = aOd.length;
			eh && 0 === aOd[0][0] && 0 <= (e2 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.sH]) && (t.y.sK[e2] = aOd[0][1]);
			var mP = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.sH],
				a34 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.sH],
				e2 = [
					[L(322), L(323) + " ↗", L(324)],
					[L(322), L(325), L(326), L(327) + " ↗"],
					[L(322), L(323) + " ↗", L(326)],
					[L(322), L(323) + " ↗", L(326)],
					[L(328), L(329), L(330) + " ↗", L(331) + " ↗", L(119)],
					[L(328), L(329), L(332) + " ↗", L(333) + " ↗", L(334)],
					[L(328), L(329), L(335) + " ↗", L(336) + " ↗", L(337)],
					[L(328), L(329), L(332) + " ↗", L(333) + " ↗", L(338)],
					[L(328), L(329), L(330) + " ↗", L(331) + " ↗", L(119)],
					[L(322), L(323) + " ↗", L(326)],
					[L(322), L(323) + " ↗", L(339)],
					[L(322), L(323) + " ↗", L(326)],
					[L(328), L(329), L(340) + " ↗", L(341) + " ↗", L(342)]
				];
			if (ek.ro = e2[data.sH], ek.rt = [
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
				][data.sH], 0 === data.sH || 2 === data.sH || 3 === data.sH || 9 === data.sH || 10 === data.sH || 11 === data.sH)
				for (aB = 0; aB < eh; aB++) ri.push([{
					f9: aOd[aB][0] + 1 + ".",
					dm: 0
				}, {
					f9: aOd[aB][1],
					dm: 1,
					rw: aOd[aB][4],
					rx: aOd[aB][3]
				}, {
					f9: (mP * aOd[aB][2]).toFixed(a34),
					dm: 0
				}]);
			else if (12 === data.sH)
				for (aB = 0; aB < eh; aB++) {
					var aOg = aOd[aB][3];
					ri.push([{
						f9: "" + aOd[aB][0],
						dm: 0
					}, {
						f9: "" + aOd[aB][4],
						dm: 0
					}, {
						f9: aOd[aB][5],
						dm: 1,
						rw: aOd[aB][1],
						rx: 0
					}, {
						f9: aOd[aB][6],
						dm: 1,
						rw: aOd[aB][2],
						rx: 0
					}, {
						f9: bn.e8(aOg % 16, aOg >> 4),
						dm: 0
					}])
				} else if (1 === data.sH)
					for (aB = 0; aB < eh; aB++) ri.push([{
						f9: aOd[aB][0] + 1 + ".",
						dm: 0
					}, {
						f9: aOd[aB][1],
						dm: 0
					}, {
						f9: (mP * aOd[aB][2]).toFixed(a34),
						dm: 0
					}, {
						f9: aOd[aB][3],
						dm: 1,
						rw: aOd[aB][5],
						rx: aOd[aB][4]
					}]);
				else if (4 === data.sH || 5 === data.sH || 6 === data.sH || 7 === data.sH || 8 === data.sH)
				for (aB = 0; aB < eh; aB++) {
					var aOh = aOd[aB][5];
					4 === data.sH || 8 === data.sH ? "100%" === (aOh = (aOh % 64 * 100 / (aOh >> 6)).toFixed(0) + "%") && (4 === data.sH ? aOh += " (" + L(343) + ")" : aOh += " (" + L(344) + ")") : 5 === data.sH ? 32768 <= aOh && (aOh = -(aOh -
						32768)) : aOh = (mP * aOh).toFixed(a34), ri.push([{
						f9: "" + aOd[aB][0],
						dm: 0
					}, {
						f9: "" + aOd[aB][6],
						dm: 0
					}, {
						f9: aOd[aB][7],
						dm: 1,
						rw: aOd[aB][1],
						rx: aOd[aB][2]
					}, {
						f9: aOd[aB][8],
						dm: 1,
						rw: aOd[aB][3],
						rx: aOd[aB][4]
					}, {
						f9: "" + aOh,
						dm: 0
					}])
				}
			aOZ = new rh(aLV.th, ek)
		}()
}

function aOb(a2u) {
	var aLV, aLW, pc;
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aLW.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(L(345), [new w("⬅️ " + L(37), function() {
		t.aLT(10)
	})]), aLW = new pa(aLV.th, ((pc = []).push(function() {
		var aLx, aLo = new pK,
			aNN = new qW(bi.eE.data[132], 1, function() {
				aLx.button.click()
			}),
			aNO = new qW(bi.eE.data[131], 1, function() {
				aNN.e.focus()
			});
		aLo.pN(L(263)), aLo.pY(aNO), aNO.e.style.marginBottom = "0.8em", aLo.pN(L(264)), aLo.pY(aNN);
		return aLx = new w(L(262), function() {
			sI = Math.floor(aNO.e.value), sJ = Math.floor(aNN.e.value);
			var sJ, sI = {
				a1b: Math.min(sI, sJ),
				aKd: Math.max(sI, sJ)
			};
			t.u(8, t.a45(10).aL2, new rz(21, {
				sH: a2u.sH,
				sI: sI.a1b,
				sJ: sI.aKd
			}))
		}, 0, 0, 1), aLo.pY(new rE([aLx.button])), aLo
	}()), pc.push(function() {
		var aLx, aLo = new pK,
			aNN = new qW(bi.eE.data[134], 1, function() {
				aLx.button.click()
			}),
			aNO = new qW(bi.eE.data[133], 0, function() {
				aNN.e.focus()
			});
		return aLo.pN(1 === a2u.sH ? L(346) : L(347)), aLo.pY(aNO), aNO.e.style.marginBottom = "0.8em", aLo.pN(L(348)), aLo.pY(aNN), aLx = new w(L(262), function() {
			var aNn = aNO.e.value.slice(0, 20),
				aNo = Math.abs(Math.floor(aNN.e.value));
			t.u(8, t.a45(10).aL2, new rz(22, {
				sH: a2u.sH,
				aNn: aNn,
				aNo: aNo
			}))
		}, 0, 0, 1), aLo.pY(new rE([aLx.button])), aLo
	}()), pc.push(function() {
		var aLx, aLo = new pK,
			aNN = new qW(bi.eE.data[152], 1, function() {
				aLx.button.click()
			}),
			aNO = new qW(bi.eE.data[151], 0, function() {
				aNN.e.focus()
			});
		return aLo.pN(L(349)), aLo.pY(aNO), aNO.e.style.marginBottom = "0.8em", aLo.pN(L(348)), aLo.pY(aNN), aLx = new w(L(262), function() {
			var aNn = aNO.e.value.slice(0, 5),
				aNo = Math.abs(Math.floor(aNN.e.value));
			t.u(8, t.a45(10).aL2, new rz(28, {
				sH: a2u.sH,
				aNn: aNn,
				aNo: aNo
			}))
		}, 0, 0, 1), aLo.pY(new rE([aLx.button])), aLo
	}()), pc))
}

function aLR() {
	var aOl, sU, aOo, sT, sW, aOm = [new Array(4), [], new Array(2), new Array(2)],
		aOn = new Array(4),
		aOp = new Array(2),
		aOq = [L(61), L(305), L(350), L(351)];

	function aCq() {
		var a5w = aOl.sh.qV.e.value.trim().slice(0, 127);
		a5w.length < 1 || (aOl.sh.qV.e.value = "", bm.aBK.z8(a5w))
	}

	function aOt(aOv) {
		bm.y.qm[3] = 1 - bm.y.qm[3], aOu(3, 1, bm.y.qm[3]), aOv && az.aD1.aD2(4), bm.y.qm[3] && bi.rB.rC(158, bm.y.qm[0])
	}

	function aOr(f0, f1) {
		bm.y.qm[f0] !== f1 && (0 === f0 && bm.y.qm[3] && aOt(0), aOu(f0, bm.y.qm[f0], 0), aOu(f0, f1, 1), bm.y.qm[f0] = f1, 0 === f0 ? (az.aD1.aD2(2, f1), bm.y.qm[2] ? (aOl.si.lZ(), aOl.sh.qj(1)) : aOl.sh.qj(0), t.a44().aCf(), t.a44().aCe()) : 2 ===
			f0 && (0 === f1 ? (az.aD1.aD2(0), aOl.sh.lZ(), aOl.sq()) : (az.aD1.aD2(1), aOl.si.lZ(), aOl.sr())))
	}

	function aOu(f0, f1, color) {
		aOl.sk[f0].qH[f1].q2(color ? bA.nC : bA.nx)
	}

	function aOy(aBt) {
		return aBt < 7 ? aBt + 2 + " " + L(358) : 7 === aBt || 10 === aBt ? L(305) + " (Full-Sending: " + L(7 === aBt ? 359 : 360) + ")" : 8 === aBt ? "1v1" : L(361)
	}

	function aOz(f9) {
		var a5z = bK.dn(f9, 60),
			f9 = f9 % 60;
		return (a5z < 10 ? "0" : "") + a5z + ":" + (f9 < 10 ? "0" : "") + f9
	}
	this.aDD = function() {
		return aOl.sh
	}, this.aBK = function(rw) {
		aOr(2, 0);
		var pO = aOl.sh.qV.e.value,
			rw = "@" + rw + " ";
		pO.length && !b9.qh.a2N(pO, " ") && (rw = " " + rw), aOl.sh.qV.e.value = pO += rw, aOl.sh.qV.e.focus()
	}, this.aCd = function() {
		aOl.si.lZ()
	}, this.aCf = function() {
		var aOx = bm.y.qm[0],
			aOx = bm.y.qo[aOx];
		bR.a7(aOx.eN, aOx.mapSeed), sU.qH[0].button.textContent = L(282) + ": " + bR.vU.vV[aOx.eN].name, sU.qH[1].button.textContent = L(284, 0, "Mode") + ": " + aOy(aOx.aBt), sU.qH[2].button.textContent = L(355) + ": " + bR.vU.vV[aOx.aDb].name,
			sU.qH[3].button.textContent = L(356, 0, "Next Mode") + ": " + aOy(aOx.aDc), sU.qH[4].button.textContent = L(357) + ": " + aOz(aOx.aCh), sU.resize()
	}, this.aCe = function() {
		var aOx = bm.y.qm[0],
			qn = bm.y.qo[aOx];
		aOl.so(qn.sp);
		for (var aB = 0; aB < bm.t4.t5.length; aB++) aOm[0][aB].qg.textContent = "" + bm.t4.t5[aB].length;
		var t4 = bm.t4.t5[aOx],
			aP0 = t4.length,
			aP1 = bm.t4.t6[aOx];
		aOm[2][1].qg.textContent = "" + aP0, aOm[3][1].qg.textContent = "" + aP1, sU.qH[4].button.textContent = L(357) + ": " + aOz(qn.aCh);
		for (aB = 0; aB < 4; aB++) {
			var aP2 = bm.y.qo[aB];
			aOn[aB] ? 0 === aP2.sp && (aOn[aB].qg.textContent = bR.vU.vV[aP2.eN].name) : aOn[aB] = new qf(bR.vU.vV[aP2.eN].name, sT.qH[aB].button, 1, 1), b9.qh.startsWith(aOq[aB], "🏆 ") ? aP2.aBz || (aOq[aB] = aOq[aB].substring(3), sT.qH[aB]
				.button.textContent = aOq[aB], sT.qH[aB].button.appendChild(aOm[0][aB].qg), sT.qH[aB].button.appendChild(aOn[aB].qg)) : aP2.aBz && (aOq[aB] = "🏆 " + aOq[aB], sT.qH[aB].button.textContent = aOq[aB], sT.qH[aB].button
				.appendChild(aOm[0][aB].qg), sT.qH[aB].button.appendChild(aOn[aB].qg))
		}
		var qn = "",
			aP4 = "";
		0 === aOx && (qn = bm.qt.aCD(t4, 0, aP0), aP4 = bm.qt.aCD(t4, 0, aP1)), aOo[0].qg.textContent = qn, aOo[1].qg.textContent = aP4, aOp[1].qg.textContent = "MP: " + bm.y.aCW[0] + "   SP: " + bm.y.aCW[1] + "   Lobby: " + b9.pq.a1o(bm.t4.t5)
	}, this.aCj = function() {
		aOl.sh.lZ()
	}, this.show = function() {
		aOl.show(), this.resize(), bm.message.show()
	}, this.r0 = function() {
		aOl.r0(), bm.tQ.r0(), bm.t2.r0(), bm.message.r0()
	}, this.resize = function() {
		aOl.resize(1 - bm.y.qm[2]), bm.message.resize()
	}, this.a16 = function(f2) {
		2 === f2 ? bm.y.qm[3] ? aOt(1) : aOl.sk[3].qH[0].pz() : f2 < 2 && aOt(1)
	}, sT = new rH([new w(aOq[0], function() {
		return aOr(0, 0), 2
	}), new w(aOq[1], function() {
		return aOr(0, 1), 2
	}), new w(aOq[2], function() {
		return aOr(0, 2), 2
	}), new w(aOq[3], function() {
		return aOr(0, 3), 2
	})], bA.nx), sU = new rH([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bA.ny, 1);
	var aOs = new rH([new w(L(352), function() {
		return aOr(2, 0), 2
	}), new w(L(115), function() {
		return aOr(2, 1), 2
	})], bA.nx);
	sW = new rH([new w(L(353), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bm.tK(), az.y.a0O(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bm.tK(), az.y.a0O(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(354), function() {
		return aOt(1), 2
	})], bA.nx), aOl = new sS(sT, sU, aOs, sW, aCq, bm.tQ.aDM);
	for (var aB = 0; aB < 4; aB++) aOm[0][aB] = new qf("0", sT.qH[aB].button);
	aOm[2][1] = new qf("0", aOs.qH[1].button), aOm[3][1] = new qf("0", sW.qH[1].button), aOo = [new qf("", aOs.qH[1].button, 1, 1), new qf("", sW.qH[1].button, 1, 1)], aOu(0, bm.y.qm[0], 1), aOu(2, bm.y.qm[2], 1), (aOp = [new qf(L(256), aOl.ss(), 1,
		0), new qf("", aOl.ss(), 1, 1)])[0].qg.style.fontSize = "0.4em", aOp[1].qg.style.fontSize = "0.4em"
}

function aL8() {
	var aLV, aLW, pc;
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aLW.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(L(362), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a45(7).aL2)
	}), new w(L(194), function() {
		bi.rB.rC(105, bF.s1.vE(aLW.pe[0].pL[0].e.value, 5)), bi.rB.rC(106, bF.s1.vE(aLW.pe[1].pL[0].e.value, 8)), t.u(8, t.a45(7).aL2, new rz(18))
	})]), aLW = new pa(aLV.th, ((pc = []).push(function() {
		var aLo = new pK;
		return aLo.pN(L(175)), aLo.pY(new qW({
			value: "",
			e2: -1
		})), aLo
	}()), pc.push(function() {
		var aLo = new pK,
			aLz = (aLo.pN(L(177)), new qW({
				value: "",
				e2: -1
			}));
		return aLz.e.type = "password", aLo.pY(aLz), aLo.pY(new rE([new w(L(178), function(e) {
			return e.textContent === L(178) ? (e.textContent = L(179), aLz.e.type = "text") : (e.textContent = L(178), aLz.e.type = "password"), !0
		}).button])), aLo
	}()), pc))
}

function aLF() {
	var aLV, aOV, aOW, tc;

	function aOX(aB) {
		t.u(8, t.ry, new rz(21, {
			sH: aB,
			sI: 0,
			sJ: 10
		}))
	}
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aOV.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aOW = [new w(L(316), function() {
		aOX(5)
	}, 0, 0, 1), new w(L(317), function() {
		aOX(6)
	}, 0, 0, 1), new w(L(318), function() {
		aOX(7)
	}, 0, 0, 1), new w(L(321), function() {
		aOX(12)
	}, 0, 0, 1)], tc = [new w("⬅️ " + L(37), function() {
		t.a0D()
	})], aLV = new tb(L(363), tc), aOV = new qG(aOW, aLV.th)
}

function aKy() {
	this.eE = {}, this.sK = new Array(7), this.aLD = null, this.aLA = null, this.rf = 0, this.aGV = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a3r = function() {
		t.x(), aZ.dX()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dX()
	}), this.aAt = function() {
		t.u(0 === aa.a0E() ? 5 : 0)
	}, this.aNM = function() {
		if (1 === bi.eE.data[130].value) t.u(8, t.a44().aL2, new rz(24, {
			aMs: bi.eE.data[125].value,
			sI: bi.eE.data[128].value,
			sJ: bi.eE.data[129].value
		}));
		else {
			for (var g = (g = bi.eE.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a44().aL2, new rz(23, {
				aMs: bi.eE.data[125].value,
				zi: g
			}))
		}
	}, this.aOP = function(aL2, target) {
		t.u(4, aL2, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bJ.aP6 +
			"' target='_blank'>" + bJ.aP6 + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aL2)
			}), new w("✅ Accept", function() {
				bi.rB.rC(140, 1), 0 === target ? t.u(2, aL2) : t.u(8, aL2, new rz(target))
			})]))
	}, this.aP7 = function() {
		for (var aB = 0; aB < 7; aB++) this.sK[aB] = bF.v5.v9(bG.oj(5));
		this.sK[1] = "[" + this.sK[1] + "]", 5 === t.ry && (t.a44().aFB.rC(this.sK), t.a44().resize())
	}
}

function aLI() {
	var aMP, aMQ, aP8, pc;

	function aMS() {
		b5.tK(), t.aLU()[19] = null, t.a0D()
	}

	function aPF() {
		aPI(), aPG()
	}

	function aPI() {
		aP8.pM.lastChild && aP8.pM.removeChild(aP8.pM.lastChild)
	}

	function aPG() {
		var aPJ = bR.a3x(aD.data);
		aD.data.canvas = bR.aJ4(aPJ, aD.data.mapSeed).ve, aPH()
	}

	function aPH() {
		var a1t = aD.data.canvas;
		a1t.style.width = "100%", aP8.pM.appendChild(a1t)
	}
	this.aGF = function(a1t) {
		aD.data.canvas && aPI(), aD.data.canvas = a1t, aPH()
	}, this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(282), [new w("⬅️ " + L(37), aMS)]), 2 === aD.data.mapType && b5.dX(), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), aLo.pV(new tW({
			ta: [L(364), L(365), L(366)],
			value: aD.data.mapType
		}, function(e2) {
			2 === (aD.data.mapType = e2) ? (b5.dX(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b5.tK()), t.u(20)
		})), 2 <= aD.data.mapType && (aLo.pY(new rO), aLo.pY(new r8({
			value: aD.data.passableWater
		}, L(367), function(value) {
			aD.data.passableWater = value
		})), aLo.pY(new r8({
			value: aD.data.passableMountains
		}, L(368), function(value) {
			aD.data.passableMountains = value
		})));
		pc.push(aLo)
	}(pc = []), function(pc) {
		if (0 === aD.data.mapType) {
			for (var aLo = new pK, ta = (aLo.pN(L(282)), []), aB = 0; aB < bR.vU.aJz.length; aB++) ta.push(bR.vU.vV[bR.vU.aJz[aB]].name);
			aLo.pV(new tW({
				ta: ta,
				value: aD.data.mapProceduralIndex
			}, function(e2) {
				aD.data.mapProceduralIndex = e2, aPF()
			})), pc.push(aLo)
		}
	}(pc), function(pc) {
		if (1 === aD.data.mapType) {
			for (var aLo = new pK, ta = (aLo.pN(L(282)), []), aB = 0; aB < bR.vU.aK0.length; aB++) ta.push(bR.vU.vV[bR.vU.aK0[aB]].name);
			aLo.pV(new tW({
				ta: ta,
				value: aD.data.mapRealisticIndex
			}, function(e2) {
				aD.data.mapRealisticIndex = e2, aPF()
			})), pc.push(aLo)
		}
	}(pc), function(pc) {
		var aLo;
		2 === aD.data.mapType && ((aLo = new pK).pN(L(282)), aLo.pY(new rE([new w(L(369), function() {
			return b5.aG8(), !0
		}).button])), pc.push(aLo))
	}(pc), function(pc) {
		(aP8 = new pK).pN(L(370)), 2 !== aD.data.mapType ? aPG() : aD.data.canvas && aPH();
		pc.push(aP8)
	}(pc), function(pc) {
		var aLo, qV, aLx;
		0 === aD.data.mapType && ((aLo = new pK).pN("Seed"), qV = new qW({
			e2: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aPF())
		}), aLx = new w(L(275), function(e) {
			var aIz = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aIz) return qV.e.value = aD.data.mapSeed = aIz, aPF(), !0
		}), aLo.pY(qV), aLo.pY(new rE([aLx.button])), pc.push(aLo))
	}(pc), function(pc) {
		var aLo, qV;
		2 === aD.data.mapType && ((aLo = new pK).pN(L(371)), qV = new qW({
			e2: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLo.pY(qV), pc.push(aLo))
	}(pc), pc))
}

function v(title, pU, aPK, aOY) {
	var aLV, aNd;
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aNd.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aOY = aOY || [new w("⬅️ " + L(37), function() {
		t.a0D()
	})], aLV = new tb(title, aOY), aNd = new rD(aLV.th, pU), aPK && b9.ph.textAlign(aLV.th.style, 1)
}

function aLL() {
	var aMP, aMQ, aMR, pc;

	function aMS() {
		aMU(), 2 === aD.data.playerNamesType && 1 === b9.pq.a1X(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		2 === aD.data.playerNamesType && b9.pq.a1l(aMR.u8(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(286), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), aLo.pV(new tW({
			ta: [L(287), L(288), L(253)],
			value: aD.data.playerNamesType
		}, function(e2) {
			aMU(), aD.data.playerNamesType = e2, t.u(23)
		})), aLo.pY(new rO), aLo.pY(new r8({
			value: aD.data.selectableName
		}, L(372), function(value) {
			aD.data.selectableName = value
		})), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo;
		2 === aD.data.playerNamesType && ((aLo = new pK).pN("Data"), aMR = new tz(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.ee || (aD.data.playerNamesData = new Array(aD.ee), aD.data.playerNamesData
			.fill("")), aMR.u6(b9.qh.a3H(aD.data.playerNamesData, 1, '"')), aLo.pY(aMR), pc.push(aLo))
	}(pc), pc))
}

function aL6() {
	var aMP, u4;

	function aPL() {
		t.x();
		var pO = b8.aPP(u4.u8());
		(aD.z4 && 0 < pO.length && pO === b8.ox.a3n || b8.aGf.vP(pO)) && b8.aPQ()
	}
	this.show = function(aPM) {
		this.aPN(aPM), aMP.show(), this.resize()
	}, this.aPN = function(aPM) {
		0 === aD.z4 ? aPM ? u4.u6(aPM) : b8.ox.a3n.length && u4.u6(b8.ox.a3n) : (aD.gq || (b8.ox.a3n = b8.a3o.yX()), u4.u6(b8.aPO(b8.ox.a3n)))
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), u4.resize()
	}, this.a16 = function(f2) {
		2 === f2 ? aMP.ti[0].pz() : aPL()
	}, aMP = new tb(L(373), [new w("⬅️ " + L(37), function() {
		t.aLT(1)
	}), new w(L(374), function() {
		u4.u9()
	}), new w(L(375), function() {
		u4.uA()
	}), new w(L(376), function() {
		u4.clear()
	}), new w(L(377), function() {
		aPL()
	})]), u4 = new tz(L(378)), aMP.th.appendChild(u4.e)
}

function aL5() {
	var aLV, aLW, pc, aAp, aLo;

	function aPR() {
		var eG;
		aAp !== bi.eE.data[12].value ? (b6.dX(), b6.aAo(), eG = be.eG, t.u(4, 1, new v(L(381), L(382), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w("🔄 Reload", function() {
			be.eG < eG + 1500 || a0.a1.a2()
		}, bA.nA)]))) : t.u(1)
	}
	this.show = function() {
			aAp = bi.eE.data[12].value, aLV.show(), this.resize()
		}, this.r0 = function() {
			aLV.r0()
		}, this.resize = function() {
			aLV.resize(), aLW.resize()
		}, this.a16 = function(f2) {
			2 === f2 && aLV.ti[0].pz()
		}, aLV = new tb(L(379), [new w("⬅️ " + L(37), aPR), new w(L(380), function() {
			t.x(), bi.rB.um(), t.u(2)
		})]), pc = [], (aLo = new pK).pN(L(383)), aLo.pP(L(384)), pc.push(aLo),
		function(pc) {
			var aLo = new pK,
				g = (aLo.pN(L(405)), b6.data.aAx());
			aLo.pV(new tW({
				ta: g,
				value: b6.data.aB1(g)
			}, function(e2) {
				return bi.rB.rC(12, g[e2].split(":")[0]), !0
			})), pc.push(aLo)
		}(pc),
		function(pc) {
			var aLo = new pK,
				aPU = (aLo.pN(L(403)), []);
			aLo.pY(new rE([new w(L(404), function(e) {
				bW.aPV();
				for (var aB = 0; aB < aPU.length; aB++) aPU[aB].e.value = bW.aAF[aB];
				return b9.ph.a2M(e), !0
			}).button]));
			for (var aB = 0; aB < bW.aPW.length; aB++) {
				aLo.pP(bW.aPW[aB]);
				for (var f0 = 0; f0 < 2; f0++) {
					var e2 = 2 * aB + f0,
						qV = new qW({
							value: bW.aAF[e2],
							e2: -1
						});
					qV.e.aPX = e2, aPU.push(qV), qV.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bW.aPY(e.target.aPX, code)
					}), f0 && (qV.e.style.marginLeft = "4%"), qV.e.style.width = "48%", aLo.pY(qV)
				}
			}
			pc.push(aLo)
		}(pc), (aLo = new pK).pN(L(23)), aLo.pV(new tW({
			ta: ["1", "2"],
			value: aZ.aEN - 1
		}, function(aB) {
			aZ.aEN = aB + 1
		})), pc.push(aLo), (aLo = new pK).pN(L(385)), bi.eE.data[1].ta = [L(386), L(387), L(388), L(389)], aLo.pV(new tW(bi.eE.data[1])), pc.push(aLo), (aLo = new pK).pN(L(390)), bi.eE.data[9].ta = [L(387), L(391), L(392)], aLo.pV(new tW(bi.eE.data[
			9])), pc.push(aLo), (aLo = new pK).pN(L(393)), bi.eE.data[11].ta = [L(394), L(9), L(395)], aLo.pV(new tW(bi.eE.data[11])), pc.push(aLo), (aLo = new pK).pN(L(396)), aLo.pY(new r8(bi.eE.data[2])), pc.push(aLo), (aLo = new pK).pN(L(397)),
		aLo.pY(new r8(bi.eE.data[7])), pc.push(aLo), (aLo = new pK).pN(L(398)), aLo.pY(new r8(bi.eE.data[8])), pc.push(aLo), (aLo = new pK).pN(L(399)), aLo.pY(new qW(bi.eE.data[5])), pc.push(aLo), (aLo = new pK).pN(L(400)), aLo.pY(new r8(bi.eE.data[
			13], L(401))), aLo.pY(new r8(bi.eE.data[14], L(402))), pc.push(aLo), aLW = new pa(aLV.th, pc)
}

function aLM() {
	var aMP, aMQ, aMR, pc;

	function aMS() {
		aMU(), 2 !== aD.data.spawningType || b9.pq.a1X(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		2 === aD.data.spawningType && b9.pq.a1j(aMR.u8(), aD.data.spawningData, bR.aGH - 1)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(406), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK,
			ta = (aLo.pN(L(250)), [L(275), L(285), L(253)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (ta.splice(1, 1), 0 < value) && (value = 1);
		aLo.pV(new tW({
			ta: ta,
			value: value
		}, function(e2) {
			aMU(), aD.data.spawningType = e2, 0 === aD.data.gameMode && 1 === e2 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.ee)), t.u(24)
		})), aLo.pY(new rO), aLo.pY(new r8({
			value: aD.data.selectableSpawn
		}, L(407), function(value) {
			aD.data.selectableSpawn = value
		})), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo = new pK;
		aLo.pN("Seed"), aLo.pY(new qW({
			e2: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), pc.push(aLo)
	}(pc), function(pc) {
		var aLo;
		2 === aD.data.spawningType && ((aLo = new pK).pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.spawningData, 2)), aLo.pY(aMR), pc.push(aLo))
	}(pc), pc))
}

function aL4() {
	var aLV, aOV, aOW, tc;

	function aPZ(id) {
		0 !== a0.id || bi.eE.data[140].value ? 0 === id ? t.u(8, 1, new rz(16)) : t.u(2) : t.y.aOP(t.ry, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aLV.show(), this.resize(), this.ir()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aOV.resize()
	}, this.ir = function() {
		8 === aa.a0E() && (2 <= bc.aPe ? aOW[2].q0 === bA.mz && aOW[2].q2(0) : aOW[2].q0 !== bA.mz && aOW[2].q2(bA.mz), !aD.gq && aM.pI(aD.eR) ? aOW[1].q0 === bA.mz && aOW[1].q2(0) : aOW[1].q0 !== bA.mz && aOW[1].q2(bA.mz), !aD.gq && av.hR(aD
			.eR) ? aOW[0].q0 === bA.mz && aOW[0].q2(0) : aOW[0].q0 !== bA.mz && aOW[0].q2(bA.mz))
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aOW = [new w(L(408), function() {
		aPZ(0)
	}), new w(L(308), function() {
		t.u(16)
	}), new w(L(363), function() {
		t.u(17)
	}), new w(L(409), function() {
		t.y.aNM()
	}, 0, 0, 1), new w(L(373), function() {
		t.u(3, 1)
	}), new w(L(410), function() {
		t.u(18)
	}), new w(L(379), function() {
		aPZ(1)
	}), new w(L(411), function() {
		var ro = ["Patreon", L(420), L(421), "YouTube Tutorial", "Discord", L(422), L(301), L(423), L(304), L(424), "Terms", "Privacy"],
			a2I = [bJ.aMN, bJ.aBE, bJ.a07, "https://www.youtube.com/watch?v=6QBmA9N1668", bJ.aBF, bJ.aPf, bJ.aPg, bJ.zp, bJ.aPh, bJ.aPi, bJ.aPj, bJ.aP6];
		1 === a0.id ? (ro.splice(2, 1), ro.splice(0, 1), a2I.splice(2, 1), a2I.splice(0, 1)) : 2 === a0.id && (ro.splice(1, 1), ro.splice(0, 1), a2I.splice(1, 1), a2I.splice(0, 1)), t.u(4, 1, new v(L(411), b9.ph.a2H(ro, a2I), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(412), function() {
		t.u(4, 1, new v(L(412), l.dp + "<br><a href='" + bJ.aPf + "' target='_blank'>" + bJ.aPf + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(413), function() {
		t.u(4, 1, new v(L(413), L(425) + "<br>" + L(426), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(427), function() {
			a0.a1.a01(), t.u(1)
		})]))
	}), new w(L(414), function() {
		a0.a1.a02(), t.u(4, 1, new v(L(428), L(429) + " <a href='" + bJ.aP6 + "' target='_blank'>" + bJ.aP6 + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], tc = [new w("⬅️ " + L(37), function() {
		t.y.aAt()
	})], 8 === aa.a0E() && (aOW.unshift(new w(L(296), function() {
		t.u(30)
	})), aOW.unshift(new w(L(417), function() {
		2 <= bc.aPe && (t.x(), bd.a19(), be.df = !0)
	}, 0, 1)), aOW.unshift(new w(L(418), function() {
		!aD.gq && aM.pI(aD.eR) && (b7.h3.oP(), t.x(), aM.gr) && aM.a19()
	}, 0, 1)), aOW.unshift(new w(L(419), function() {
		!aD.gq && av.hR(aD.eR) && (bU.a4O(2), b7.h3.hN(), t.x(), aM.gr) && aM.a19()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dp && aOW.push(new w(L(415), function() {
		a0.a1.a03()
	})), aLV = new tb(L(416), tc), aOV = new qG(aOW, aLV.th)
}

function aLQ() {
	var aMP, aMQ, aMR, pc;

	function aMS() {
		aMU(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		2 === aD.data.sResourcesType && b9.pq.a1j(aMR.u8(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(291), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), aLo.pV(new tW({
			ta: [L(251), L(252), L(253)],
			value: aD.data.sResourcesType
		}, function(e2) {
			aMU(), 2 !== e2 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.ee)), aD.data.sResourcesType = e2, t.u(28)
		})), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo;
		1 === aD.data.sResourcesType && ((aLo = new pK).pN("Value"), aLo.pY(new qW({
			e2: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bK.pF(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), pc.push(aLo))
	}(pc), function(pc) {
		var aLo;
		2 === aD.data.sResourcesType && ((aLo = new pK).pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.sResourcesData, 2)), aLo.pY(aMR), pc.push(aLo))
	}(pc), pc))
}

function aLO() {
	var aMP, aMQ, aMR, pc;

	function aMS() {
		aMU(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aLU()[19] = null, t.a0D()
	}

	function aMU() {
		2 === aD.data.tIncomeType && b9.pq.a1j(aMR.u8(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aMP.show(), this.resize()
	}, this.r0 = function() {
		aMP.r0()
	}, this.resize = function() {
		aMP.resize(), aMQ.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aMP.ti[0].pz()
	}, aMP = new tb(L(289), [new w("⬅️ " + L(37), aMS)]), aMQ = new pa(aMP.th, (function(pc) {
		var aLo = new pK;
		aLo.pN(L(250)), aLo.pV(new tW({
			ta: [L(251), L(252), L(253)],
			value: aD.data.tIncomeType
		}, function(e2) {
			aMU(), 2 !== e2 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.ee), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e2, t.u(26)
		})), pc.push(aLo)
	}(pc = []), function(pc) {
		var aLo;
		1 === aD.data.tIncomeType && ((aLo = new pK).pN("Value"), aLo.pY(new qW({
			e2: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bK.pF(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), pc.push(aLo))
	}(pc), function(pc) {
		var aLo;
		2 === aD.data.tIncomeType && ((aLo = new pK).pN("Data"), (aMR = new tz(0, 1, 0, 1)).u6(b9.qh.a3H(aD.data.tIncomeData, 4)), aLo.pY(aMR), pc.push(aLo))
	}(pc), pc))
}

function aLG() {
	var aLV, aLW, pc;
	this.show = function() {
		aLV.show(), this.resize()
	}, this.r0 = function() {
		aLV.r0()
	}, this.resize = function() {
		aLV.resize(), aLW.resize()
	}, this.a16 = function(f2) {
		2 === f2 && aLV.ti[0].pz()
	}, aLV = new tb(L(410), [new w("⬅️ " + L(37), function() {
		t.a0D()
	})]), aLW = new pa(aLV.th, ((pc = []).push(function() {
		function aLu() {
			aPo.button.textContent = L(172), aPm.e.readOnly = !1, aPn.e.readOnly = !1, aLs.q2(1), aLs.button.style.color = bA.mn
		}
		var aLo = new pK,
			aPl = (aLo.pN(L(430)), new qW({
				value: bi.eE.data[105].value,
				e2: -1
			})),
			aPm = (aPl.e.readOnly = !0, aLo.pY(aPl), aLo.pN(L(333), "0.8em"), new qW(bi.eE.data[148])),
			aPm = new qW(bi.eE.data[148], 0, void 0, function(e) {
				aLr(bi.eE.data[149].value, e.target.value)
			}),
			aPn = (aLo.pY(aPm), aLo.pN(L(337), "0.8em"), new qW(bi.eE.data[149], 1, void 0, function(e) {
				aLr(e.target.value, bi.eE.data[148].value)
			})),
			aPo = (aLo.pY(aPn), new w(L(172), function(e) {
				return e.textContent === L(172) ? (e.textContent = L(173), aPm.e.readOnly = !0, aPn.e.readOnly = !0, aLs.q2(0), aLs.button.style.color = bA.nj, bi.rB.rC(149, aPn.e.value), aLr(bi.eE.data[149].value, bi.eE.data[
					148].value)) : aLu(), !0
			})),
			aLs = (aLo.pY(new rE([aPo.button])), new w(L(14), function(e) {
				return aPm.e.readOnly && az.y.aLt(0) && (b9.ph.a2M(e), aLu(), az.aLv.aLw({
					s0: 0,
					rw: bi.eE.data[148].value,
					value: parseInt(bi.eE.data[149].value, 10)
				})), !0
			}, 1)),
			pQ = aLo.pP(),
			aLr = (aLo.pP(L(431)).style.fontWeight = "bold", function(f9, pO) {
				f9 = b9.g2.a2r(f9, 2, 1e6);
				var aLy = Math.max(1, 1 + Math.floor(.01 * (f9 - 100)));
				pQ.textContent = L(174, [f9, bi.eE.data[105].value, aLy, pO, f9 - aLy])
			});
		return aLo.pY(new rE([aLs.button])), aLr(bi.eE.data[149].value, bi.eE.data[148].value), aLo
	}()), pc))
}

function bt() {
	"function" != typeof Math.log2 && (Math.log2 = function(eo) {
		return Math.log(eo) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eo) {
		return Math.log(eo) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eo) {
		return 0 < eo ? 1 : eo < 0 ? -1 : 0
	})
}

function ce() {
	var a87, aPq, aPr, aPs, aPp = !1;

	function aPt() {
		aPp = !0, a87 = -1, aPq = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aPq[aB] = !1;
		var wV = Math.floor(1 + .02 * h.min);
		aPr = new Array(4), (aPs = new Array(4))[1] = aPs[3] = aPr[0] = aPr[2] = 0, aPs[0] = aPr[3] = -wV, aPr[1] = aPs[2] = wV
	}

	function aPu() {
		if (-1 !== a87)
			if (0 !== aD.z4 && aH.mV()) {
				for (var aPv = !1, aB = 3; 0 <= aB; aB--) aPq[aB] && (aPv = !0, iH += aPr[aB], iJ += aPs[aB], af.a0Y(aPr[aB], aPs[aB]), aS.a7p());
				aPv ? be.df = !0 : aq.mL()
			} else aq.mL()
	}
	this.a14 = function(e2) {
		0 !== aD.z4 && aH.mV() && (aPp || aPt(), aPq[e2] = !0, -1 === a87) && (a87 = setInterval(aPu, 20), aPu())
	}, this.a17 = function(e2) {
		if (0 !== aD.z4 && (aPp || aPt(), aPq[e2] = !1, -1 !== a87)) {
			for (var aPv = !1, aB = 3; 0 <= aB; aB--) aPv = aPv || aPq[aB];
			aPv || this.mL()
		}
	}, this.mL = function() {
		if (aPp && -1 !== a87) {
			for (var aB = 3; 0 <= aB; aB--) aPq[aB] = !1;
			clearInterval(a87), a87 = -1
		}
	}
}

function cf() {
	this.y = new aPw, this.lU = new aPx, this.o6 = new aPy, this.aD1 = new aPz, this.aAq = new aQ0, this.aLv = new aQ1, this.oi = new aQ2, this.aNk = new aQ3, this.a5c = new aQ4, this.aQ5 = new aQ6, this.aQ7 = new aQ8, this.aQ9 = new aQA, this.aQB =
		new aQC, this.dX = function() {
			this.y.dX()
		}
}

function aPw() {
	var aQD, aQF;
	this.aEQ = 5, this.aQE = null;

	function aQM(aB) {
		return aQF[aB].aPp && aQD[aB].aQM()
	}

	function aQO(a09) {
		aQF[a09].eG = be.eG, aQF[a09].aQH = !1
	}
	this.a0J = 0, this.a0C = 0, this.dX = function() {
		this.aQE = new Array(this.aEQ);
		this.aQE[0] = "territorial.io";
		var aIz = ax.aJL(0);
		ax.a3d(0);
		for (var aB = 1; aB < this.aEQ; aB++) this.aQE[aB] = aK.yd() + ".territorial.io";
		for (ax.a3d(aIz), aQD = new Array(this.aEQ), aQF = new Array(this.aEQ), aB = this.aEQ - 1; 0 <= aB; aB--) aQF[aB] = {
			aPp: !1,
			eG: 0,
			aQH: !1
		};
		this.aER(0, 0)
	}, this.aQI = function(aB) {
		return aQD[aB]
	}, this.ir = function() {
		for (var aB = this.aEQ - 1; 0 <= aB; aB--) this.aLt(aB) && be.eG > aQF[aB].eG + 15e3 && az.o6.aQJ(aB, aQF[aB].aQH);
		!this.aLt(0) && be.eG > aQF[0].eG + 8e3 && (aQF[0].eG = be.eG, this.aER(0, 0))
	}, this.aNg = function(id) {
		return this.aER(0, id) && this.aQK(0)
	}, this.aER = function(a09, aL2) {
		if (aQF[a09].aPp) {
			if (aQD[a09].aQM()) return aQD[a09].aQN(aL2), aQD[a09].aLt();
			aQD[a09].r0()
		}
		return this.aQL(a09, aL2), !1
	}, this.aQL = function(a09, aL2) {
		aQF[a09].aPp = !0, aQO(a09), aQD[a09] = new aQP, aQD[a09].dX(a09, aL2)
	}, this.aQN = function(a09, aL2) {
		aQM(a09) && aQD[a09].aQN(aL2)
	}, this.aQQ = function(a09, aL2) {
		az.aAq.aQR(a09)
	}, this.aQK = function(aB) {
		return this.aLt(aB) && aQD[aB].aQK()
	}, this.aQS = function(aB) {
		aQD[aB].aQS()
	}, this.aLt = function(aB) {
		return aQF[aB].aPp && aQD[aB].aLt()
	}, this.send = function(a09, aC) {
		aQO(a09), aQD[a09].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a0p = function(a09) {
		8 === aa.a0E() && (aQF[a09].aQH = !0, az.lU.aQT = !0)
	}, this.close = function(a09, aQU) {
		aQM(a09) && aQD[a09].close(aQU)
	}, this.aQV = function(a09, aQU) {
		o.a0M(aQU), aQM(a09) && aQD[a09].close(aQU)
	}, this.a0O = function(aQU) {
		for (var aB = this.aEQ - 1; 0 <= aB; aB--) this.close(aB, aQU)
	}, this.aQW = function(a09, aQU) {
		for (var aB = this.aEQ - 1; 0 <= aB; aB--) aB !== a09 && this.close(aB, aQU)
	}, this.a3p = function() {
		this.close(this.a0J, 3246)
	}, this.aQX = function(a09, e) {
		aQD[a09].r0(), o.a08(a09, e.code)
	}
}

function aPx() {
	this.aQT = !1, this.ir = function() {
		be.jt() % 250 != 249 || aD.gq || (az.aAq.aQY(+(this.aQT && ag.lm[aD.eR]), al.jx + bM.y.ov), this.aQT = !1)
	}
}

function aQ4() {
	function aQz(aR0) {
		var ek = aD.data,
			aR0 = (ek.selectedPlayer = bG.oj(aR0), ek.spawningSeed = bG.oj(14), bG.oj(4)),
			aR0 = (aR0 < 7 ? (ek.gameMode = 1, ek.numberTeams = aR0 + 2) : 9 === aR0 ? (ek.gameMode = ek.isZombieMode = 1, ek.numberTeams = 2) : (ek.gameMode = 0, ek.battleRoyaleMode = 7 === aR0 ? 0 : 10 === aR0 ? 1 : 2), ek.isContest = bG.oj(1), bG
				.oj(6));
		return ek.mapType = bR.aC0(aR0) ? 0 : 1, bR.aC1(ek, aR0), ek.mapSeed = bG.oj(14), aR0
	}
	this.aQa = function(a09, aC) {
		bG.dX(aC), 0 === bG.size ? az.y.aQV(a09, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bG.oj(1) ? function(a09) {
			var aQe = bG.oj(6);
			0 === aQe ? function(a09) {
					if (0 === a09 && 8 !== aa.a0E()) {
						t.y.aP7();
						for (var aQr = bG.oj(12), aQs = bG.oj(6), g = new Array(aQr), aB = 0; aB < aQr; aB++) g[aB] = bG.oj(aQs);
						aT.a8D(g)
					}
				}(a09) : 2 === aQe ? az.aQ5.aQg(a09) : 3 === aQe || 4 === aQe ? aw.dX() : 9 === aQe ? az.aQ7.aQh(a09) : 10 === aQe ? az.aQ9.aQi() : 11 === aQe ? az.aQ7.aQj(a09) : 12 === aQe ? az.aQ9.aQk() : 13 === aQe ? az.aQB.aQl() :
				14 === aQe ? az.aQB.aQm() : 15 === aQe ? az.aQ7.aQn() : 16 === aQe ? az.aQ5.aQo(a09) : 17 === aQe ? az.aQ5.aQp(a09) : 19 === aQe && az.aQ5.aQq(a09)
		} : function(a09) {
			if (8 !== aa.a0E() && !aw.aEw()) return;
			if (a09 !== az.y.a0J) az.y.aQV(a09, 3244);
			else if (0 === bG.oj(1)) be.zD.aR1(bG.aC);
			else {
				var aB, a09 = bG.oj(2);
				if (0 === a09) {
					var oK, o6 = bG.oj(9);
					0 !== ag.lm[o6] && 0 !== ag.lm[aD.eR] && (oK = bG.oj(10), aN.oJ(o6, aD.eR, oK), af.pG(o6, 1, oK))
				} else if (1 === a09) ! function() {
					var o6 = bG.oj(9);
					0 !== ag.lm[o6] && 0 !== ag.lm[aD.eR] && b4.aIj(0, [o6], !0) && aN.oa(o6, 1)
				}();
				else if (2 === a09) ! function() {
					var o6 = bG.oj(9),
						target = bG.oj(9);
					0 !== ag.lm[o6] && 0 !== ag.lm[target] && 0 !== ag.lm[aD.eR] && b4.aIj(1, [o6], !0) && (af.pG(o6, 3, 96), af.pG(target, 4, 96), aN.a5j(o6, target))
				}();
				else if (l.a9 && !l.aA) {
					var eh = 540;
					for (bC.a7(17287), bC.a8(1, 0), bC.a8(6, 10), eh = Math.min(b7.o3.ol.length, 540), aB = 0; aB < eh; aB++) bC.aR7(32, b7.o3.ol[aB]);
					az.y.send(az.y.a0J, bC.aC)
				}
			}
		})(a09), be.aQd())
	}, this.aQt = function(aC) {
		if (bG.dX(aC), bG.e2 = 1, 3 === bG.oj(6)) {
			bG.e2 += 20;
			var ek = aD.data = new a3X,
				aC = aQz(9),
				aC2 = ek.humanCount = bG.oj(9) + 1;
			ek.selectableSpawn = 1 === ek.gameMode || aC2 < 100, ek.colorsData = new Uint32Array(aC2), ek.playerNamesData = new Array(aC2);
			for (var aB = 0; aB < aC2; aB++) bG.e2++, ek.colorsData[aB] = bG.oj(18), ek.playerNamesData[aB] = bF.v5.v9(bG.oj(5));
			aa.aEc(), bR.a7(aC, ek.mapSeed), aD.a3b()
		} else ! function() {
			bG.e2 += 20;
			var ek = aD.data = new a3X,
				aQy = aQz(1);
			ek.humanCount = 2;
			ek.selectableSpawn = 1, ek.elo = new Uint16Array(2), ek.colorsData = new Uint32Array(2), ek.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bG.e2++, ek.colorsData[aB] = bG.oj(18), ek.elo[aB] = bG.oj(14), ek.playerNamesData[aB] = bF.v5.v9(bG.oj(5));
			aa.aEc(), bR.a7(aQy, ek.mapSeed), aD.a3b()
		}()
	}, this.aQw = function() {
		bG.e2 = 1;
		var aQe = bG.oj(6),
			aQx = bG.oj(10);
		return az.y.a0C === aQx ? (az.y.a0J = aQx, !1) : (az.y.close(az.y.a0C, 3247), az.y.a0J = aQx, aw.aBx = bG.oj(10), aw.aEk = bG.oj(3 === aQe ? 9 : 1), az.y.aER(aQx, 5) && az.o6.aEr(), !0)
	}
}

function aQA() {
	this.aQi = function() {
		bi.y.ud(), bi.rB.rC(105, bE.s1.s2(bE.s1.s3(5))), bi.rB.rC(106, bE.s1.s2(bE.s1.s3(8))), bi.rB.rC(109, bG.oj(30)), bi.rB.rC(108, bi.eE.data[109].value), bi.rB.rC(111, bi.eE.data[109].value + 1), bi.rB.rC(107, 0), bi.rB.rC(110, "")
	}, this.aQk = function() {
		var data;
		bG.size < bC.aR8(29) ? az.y.aQV(0, 3254) : ((data = {
			rx: bG.oj(30),
			uq: bG.oj(16),
			ur: bG.oj(30),
			us: bG.oj(30),
			ut: bG.oj(30),
			uu: bG.aR9(32),
			username: bF.v7.vP(5),
			uv: bF.v7.vP(3),
			uw: bF.v7.vP(3),
			ux: bG.aR9(32),
			uy: bG.aR9(32),
			uz: bG.oj(30),
			v0: bG.aR9(32),
			v1: bG.aR9(32),
			v2: bG.aR9(32),
			v3: bG.aR9(32),
			aM3: bG.aR9(32),
			aM4: bG.aR9(30),
			aMF: bG.aR9(32),
			aMG: bF.v7.vP(3),
			aM8: bG.aR9(2),
			aM9: bG.aR9(10),
			aM6: bF.v7.vP(8),
			aMA: bG.aR9(5),
			aLq: bG.oj(30),
			aM2: bG.oj(30),
			zV: bG.aR9(32),
			aMH: bG.oj(1),
			aMI: bG.oj(1)
		}).aMH && (data.aMJ = bG.aR9(32), data.aMK = bG.oj(30), data.aML = bG.oj(30), data.aMM = bG.oj(1)), 8 === t.ry && (25 === t.a44().aNf ? (data.aLX = !0, t.y.aLD = data, t.a44().aNu(25, !1)) : (data.aLX = !1, bi.rB.rC(160, +(data
			.aMH && data.aMM)), data.rw = bi.eE.data[105].value, t.y.aLA = data, bi.rB.up(data), t.a44().aNu(16, !0))))
	}
}

function aQC() {
	this.aQl = function() {
		var aB;
		if (bG.size < bC.aR8(23)) az.y.aQV(0, 3259);
		else {
			var sH = bG.oj(6),
				eh = bG.oj(10),
				data = [];
			if (9 === sH || 10 === sH || 11 === sH) {
				for (aB = 0; aB < eh; aB++) data.push([bG.oj(30), bF.v7.vP(5), bG.aR9(32), 0, bG.oj(30)]);
				8 === t.ry && t.a44().aNu(21, !0, {
					sH: sH,
					data: data
				})
			} else if (12 === sH) {
				for (aB = 0; aB < eh; aB++) data.push([bG.oj(20), bG.oj(30), bG.oj(30), bG.aR9(32), bG.oj(30), bF.v7.vP(5), bF.v7.vP(5)]);
				8 === t.ry && t.a44().aNu(21, !0, {
					sH: sH,
					data: data
				})
			} else {
				var hZ = bG.oj(16);
				if (bG.aRA(39 + 16 * hZ + eh * (0 === sH ? 111 : 1 === sH ? 101 : 2 === sH || 3 === sH ? 127 : 212))) {
					if (0 === sH)
						for (aB = 0; aB < eh; aB++) data.push([bG.oj(30), bF.v5.v9(bG.oj(5)), bG.oj(16), bG.oj(30), bG.oj(30)]);
					else if (1 === sH)
						for (aB = 0; aB < eh; aB++) data.push([bG.oj(16), bF.v5.v9(bG.oj(3)), bG.oj(16), bF.v5.v9(bG.oj(5)), bG.oj(31), bG.oj(30)]);
					else if (2 === sH || 3 === sH)
						for (aB = 0; aB < eh; aB++) data.push([bG.oj(30), bF.v5.v9(bG.oj(5)), bG.aR9(32), bG.oj(30), bG.oj(30)]);
					else
						for (aB = 0; aB < eh; aB++) data.push([bG.oj(20), bG.oj(30), bG.oj(30), bG.oj(30), bG.oj(30), bG.aR9(32), bG.oj(30), bF.v5.v9(bG.oj(5)), bF.v5.v9(bG.oj(5))]);
					8 === t.ry && t.a44().aNu(21, !0, {
						sH: sH,
						data: data
					})
				} else az.y.aQV(0, 3260)
			}
		}
	}, this.aQm = function() {
		if (bG.size < bC.aR8(29)) az.y.aQV(0, 3265);
		else {
			var aRB = bG.oj(4),
				aRC = bG.oj(7),
				aRD = bG.oj(11);
			if (bG.aRA(29 + 16 * aRC + 16 * aRD + 11 * aRB)) {
				for (var data = [], aB = 0; aB < aRB; aB++) {
					for (var zj = bF.v5.v9(bG.oj(3)), aRE = bG.oj(8), aMt = [], f0 = 0; f0 < aRE; f0++) aMt.push(bG.oj(16));
					data.push({
						name: "[" + zj + "]",
						aMt: aMt
					})
				}
				8 === t.ry && t.a44().aNu(23, !0, data)
			} else az.y.aQV(0, 3266)
		}
	}
}

function aQ6() {
	function aRG() {
		var id = bG.oj(3);
		return 0 === id ? {
			id: id,
			rw: bG.oj(30),
			r: bm.aBK.aD7(bF.v7.vP(7))
		} : 1 === id ? {
			id: id,
			rw: bG.oj(30),
			aC8: bG.oj(3),
			value: bG.oj(30),
			target: bG.oj(30)
		} : 2 === id ? {
			id: id,
			rw: bG.oj(30),
			aC8: bG.oj(3)
		} : 3 === id ? {
			id: id,
			rw: bG.oj(30),
			aC8: bG.oj(3),
			value: bG.oj(4),
			target: bG.oj(30)
		} : 4 === id ? {
			id: id,
			rw: bG.oj(30),
			aC8: bG.oj(3),
			target: bG.oj(30)
		} : 5 === id ? {
			id: id,
			aC8: bG.oj(6)
		} : 6 === id ? {
			id: id,
			value: bG.oj(17)
		} : null
	}
	this.aQg = function(a09) {
		if (a09 !== az.y.a0C) az.y.close(a09, 3239);
		else if (6 !== aa.a0E()) az.y.close(a09, 3271);
		else {
			bm.dX();
			for (var aB = 0; aB < 4; aB++) {
				var qn = bm.y.qo[aB],
					playerCount = (qn.sp = bG.oj(10), qn.eN = bG.oj(6), qn.mapSeed = bG.oj(14), qn.aBt = bG.oj(4), qn.aDb = bG.oj(6), qn.aDc = bG.oj(4), qn.aBz = bG.oj(1), qn.aCh = bG.oj(12), qn.spawningSeed = bG.oj(14), bG.oj(16));
				bm.t4.t6[aB] = bG.oj(16);
				for (var f0 = 0; f0 < playerCount; f0++) bm.t4.aBW(aB, bG.oj(30), bF.v7.vP(5), bG.oj(4), bG.oj(30), bG.oj(7), bG.oj(16), bG.oj(18), bG.oj(11), bG.oj(12))
			}
			t.u(29), bm.y.aCY(!0)
		}
	}, this.aQo = function(a09) {
		if (a09 !== az.y.a0C) az.y.close(a09, 3239);
		else if (bm.a0B) {
			bm.y.aCW[0] = bG.oj(20), bm.y.aCW[1] = bG.oj(20);
			for (var aRF = bG.oj(16), f0 = 0; f0 < aRF; f0++) {
				var id = bG.oj(3);
				0 === id ? bm.t4.aBW(bG.oj(2), bG.oj(30), bF.v7.vP(5), 0, 1234566, 127, 0, bG.oj(18), 0, bG.oj(12)) : 1 === id ? bm.t4.aBn(bG.oj(16), bG.oj(2)) : 2 === id ? bm.t4.aBj(bG.oj(16), bG.oj(2), bG.oj(2)) : 3 === id ? bm.t4.aBm(bG.oj(
					16), bG.oj(2)) : 4 === id ? bm.t4.aBc(bG.oj(16), bG.oj(2), bG.oj(4), bG.oj(30), bG.oj(7), bG.oj(16), bG.oj(11)) : 5 === id && bm.t4.aBd(bG.oj(16), bG.oj(2), bG.oj(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var qn = bm.y.qo[aB];
				if (qn.sp = bG.oj(10), 0 === qn.sp) {
					if (qn.a0J = bG.oj(10), qn.aBx = bG.oj(10), bm.aBL.dg(aB)) return;
					qn.eN = bG.oj(6), qn.mapSeed = bG.oj(14), qn.aBt = bG.oj(4), qn.aDb = bG.oj(6), qn.aDc = bG.oj(4), qn.aBz = bG.oj(1), qn.aCh = bG.oj(12), qn.spawningSeed = bG.oj(14), qn.aDd.push(qn.aDd[0]), qn.aDd.shift()
				}
			}
			bm.y.aCa()
		} else az.y.close(a09, 3251)
	}, this.aQp = function(a09) {
		if (a09 !== az.y.a0C) az.y.close(a09, 3272);
		else if (bm.a0B) {
			for (var ql = bG.oj(4), qn = bm.y.qo[ql], qp = qn.qp, tJ = (qn.qq = bG.oj(20), bG.oj(6)), aB = 0; aB < tJ; aB++) {
				var aDu = aRG();
				bm.qz.aDt(aDu), qp.push(aDu)
			}
			bm.y.aCi(ql)
		} else az.y.close(a09, 3273)
	}, this.aQq = function(a09) {
		a09 !== az.y.a0C ? az.y.close(a09, 3276) : bm.a0B ? bm.message.aD3(aRG()) : az.y.close(a09, 3277)
	}
}

function aQ8() {
	this.aQh = function(a09) {
		var aR3, qE;
		bG.aRA(70) ? (aR3 = bG.oj(3), qE = bh.aRH.ir(bG.oj(30), bG.oj(30)), az.aAq.aRI(a09, qE, aR3), 0 < aR3 || (0 === a09 && 0 === bi.eE.data[105].value.length ? az.aAq.aNj(0) : az.aLv.aRJ(a09), 4 === az.y.aQI(a09).aRK() ? 6 === aa.a0E() && az
			.aD1.aES(a09) : 5 !== az.y.aQI(a09).aRK() || 8 !== aa.a0E() && 10 !== aa.a0E() || az.o6.aEr())) : az.y.aQV(a09, 3269)
	}, this.aQj = function(a09) {
		var id = bG.oj(6);
		1 === id ? (bi.rB.rC(160, bG.oj(30)), az.y.aQS(a09), aT.a89 || az.aAq.aNj(1), b6.aAo(), 8 === t.ry && t.a44().aNt()) : 21 === id ? 8 === t.ry && t.a44().aNu(17) : 22 === id && (bi.rB.rC(106, bi.eE.data[110].value), bi.rB.rC(110, ""),
			8 === t.ry) && t.a44().aNu(15)
	}, this.aQn = function() {
		var eh = bG.oj(16),
			aRL = bG.oj(16);
		if (bG.aRA(55 + 10 * eh + 16 * aRL)) {
			for (var g = [], aB = 0; aB < eh; aB++) g.push(bF.v5.v9(bG.oj(10)));
			b6.aAs(g)
		} else az.y.aQV(0, 3270)
	}
}

function aPy() {
	this.aQJ = function(a09, aQH) {
		bC.a7(8), bC.a8(1, 0), bC.a8(6, 4), bC.a8(1, aQH ? 1 : 0), az.y.send(a09, bC.aC)
	}, this.aEr = function() {
		bC.a7(58), bC.a8(1, 0), bC.a8(6, 5), bC.a8(8, az.y.a0C), bC.a8(10, aw.aBx), bC.a8(9, aw.aEk), bC.a8(10, l.dr), bC.a8(14, l.dj), az.y.send(az.y.a0J, bC.aC)
	}, this.o7 = function(eT) {
		bC.a7(27), bC.a8(1, 1), bC.a8(4, 0), bC.a8(22, eT), az.y.send(az.y.a0J, bC.aC)
	}, this.o8 = function(iG, j7) {
		bC.a7(25), bC.a8(1, 1), bC.a8(4, 1), bC.a8(10, iG), bC.a8(10, j7), az.y.send(az.y.a0J, bC.aC)
	}, this.oC = function(iG, oA) {
		bC.a7(24), bC.a8(1, 1), bC.a8(4, 2), bC.a8(10, iG), bC.a8(9, oA), az.y.send(az.y.a0J, bC.aC)
	}, this.oD = function(iG, eT) {
		bC.a7(37), bC.a8(1, 1), bC.a8(4, 3), bC.a8(10, iG), bC.a8(22, eT), az.y.send(az.y.a0J, bC.aC)
	}, this.oG = function(m9, eT) {
		bC.a7(37), bC.a8(1, 1), bC.a8(4, 4), bC.a8(10, m9), bC.a8(22, eT), az.y.send(az.y.a0J, bC.aC)
	}, this.oI = function(j7) {
		bC.a7(15), bC.a8(1, 1), bC.a8(4, 5), bC.a8(10, j7), az.y.send(az.y.a0J, bC.aC)
	}, this.oM = function(e2) {
		bC.a7(15), bC.a8(1, 1), bC.a8(4, 6), bC.a8(10, e2), az.y.send(az.y.a0J, bC.aC)
	}, this.oO = function(oN) {
		bC.a7(6), bC.a8(1, 1), bC.a8(4, 7), bC.a8(1, oN), az.y.send(az.y.a0J, bC.aC)
	}, this.oQ = function() {
		bC.a7(5), bC.a8(1, 1), bC.a8(4, 8), az.y.send(az.y.a0J, bC.aC)
	}, this.oR = function(iG, eT, j7) {
		bC.a7(47), bC.a8(1, 1), bC.a8(4, 10), bC.a8(10, iG), bC.a8(10, j7), bC.a8(22, eT), az.y.send(az.y.a0J, bC.aC)
	}, this.oY = function(aRM, aRN) {
		bC.a7(24), bC.a8(1, 1), bC.a8(4, 15), bC.a8(9, aRN), bC.a8(10, aRM), az.y.send(az.y.a0J, bC.aC)
	}, this.ob = function(a5c) {
		bC.a7(14), bC.a8(1, 1), bC.a8(4, 14), bC.a8(9, a5c), az.y.send(az.y.a0J, bC.aC)
	}, this.og = function(aRO, target) {
		var aB, eh = aRO.length;
		for (bC.a7(14 + 9 * eh), bC.a8(1, 1), bC.a8(4, 13), bC.a8(9, target), aB = 0; aB < eh; aB++) bC.a8(9, aRO[aB]);
		az.y.send(az.y.a0J, bC.aC)
	}
}

function aQ1() {
	this.aRP = function() {
		bC.a7(39), bC.a8(1, 0), bC.a8(6, 16), az.aAq.aRQ(), az.y.send(0, bC.aC)
	}, this.aRJ = function(a09) {
		bC.a7(115), bC.a8(1, 0), bC.a8(6, 17), bF.s1.vL(bi.eE.data[105].value, 5), bF.s1.vL(bi.eE.data[106].value, 8), bC.a8(30, bi.eE.data[109].value), az.y.send(a09, bC.aC)
	}, this.aNw = function() {
		bC.a7(55), bC.a8(1, 0), bC.a8(6, 18), bF.s1.vK(bi.eE.data[110].value), az.y.send(0, bC.aC)
	}, this.aNs = function(a2u) {
		var eh = a2u.pO.length;
		bC.a7(21 + 16 * eh), bC.a8(1, 0), bC.a8(6, 29), bC.a8(6, a2u.s0), bC.a8(8, eh), bE.v5.vK(a2u.pO), az.y.send(0, bC.aC)
	}, this.aMB = function(data) {
		bC.a7(43), bC.a8(1, 0), bC.a8(6, 25), bC.a8(6, data.s0), bF.s1.vL(data.rw, 5), az.y.send(0, bC.aC)
	}, this.aLw = function(data) {
		bC.a7(75), bC.a8(1, 0), bC.a8(6, 27), bC.a8(6, data.s0), bF.s1.vL(data.rw, 5), bC.aR7(32, data.value), az.y.send(0, bC.aC)
	}
}

function aQ2() {
	this.oh = function() {
		for (var eh = aD.jw, yt = bQ.result.yt, ke = yt.length, xX = (bC.a7(17 + 16 * eh + 33 * ke), bC.a8(1, 1), bC.a8(4, 12), bC.a8(10, ke), bC.a8(1, +(2 === aD.z1)), bC.a8(1, aD.zL % 2), ag.xX), aB = 0; aB < eh; aB++) bC.a8(16, xX[aB]);
		for (var gU = ag.gU, aB = 0; aB < ke; aB++) {
			var gE = yt[aB];
			bC.a8(9, gE), bC.a8(24, gU[gE])
		}
		az.y.send(az.y.a0J, bC.aC)
	}
}

function aQ3() {
	this.aNl = function(sH, sI, sJ) {
		bC.a7(75), bC.a8(1, 0), bC.a8(6, 21), bC.a8(6, sH), bC.a8(1, +(sI < 0)), bC.a8(1, +(sJ < 0)), bC.a8(30, Math.abs(sI)), bC.a8(30, Math.abs(sJ)), az.y.send(0, bC.aC)
	}, this.aNm = function(sH, aNn, aNo) {
		bC.a7(18 + 16 * aNn.length + 30), bC.a8(1, 0), bC.a8(6, 22), bC.a8(6, sH), az.aAq.aRS(aNn), bC.a8(30, aNo), az.y.send(0, bC.aC)
	}, this.aNr = function(sH, aNn, aNo) {
		bC.a7(73), bC.a8(1, 0), bC.a8(6, 28), bC.a8(6, sH), bF.s1.vL(aNn, 5), bC.a8(30, aNo), az.y.send(0, bC.aC)
	}, this.aNp = function(aMs, zi) {
		for (var eh = zi.length, hZ = 0, aB = 0; aB < eh; aB++) hZ += zi[aB].length;
		for (bC.a7(21 + 3 * eh + 16 * hZ), bC.a8(1, 0), bC.a8(6, 23), bC.a8(3, aMs), bC.a8(4, eh), bC.a8(7, hZ), aB = 0; aB < eh; aB++) bC.a8(3, zi[aB].length), bE.v5.vK(zi[aB]);
		az.y.send(0, bC.aC)
	}, this.aNq = function(aMs, sI, sJ) {
		bC.a7(52), bC.a8(1, 0), bC.a8(6, 24), bC.a8(3, aMs), bC.a8(1, +(sI < 0)), bC.a8(1, +(sJ < 0)), bC.a8(20, Math.abs(sI)), bC.a8(20, Math.abs(sJ)), az.y.send(0, bC.aC)
	}
}

function aPz() {
	this.aES = function(a09) {
		var username = bi.eE.data[122].value.slice(0, 20),
			username = (bC.a7(24 + 16 * username.length + 18 + 18), bC.a8(1, 0), bC.a8(6, 1), bC.a8(10, l.dr), bC.a8(2, bi.eE.data[158].value), az.aAq.aRS(username), b9.color.a1y(bi.y.uk())),
			username = (bC.a8(6, username[0]), bC.a8(6, username[1]), bC.a8(6, username[2]), b6.aAu());
		bC.a8(9, username[0]), bC.a8(9, username[1]), az.y.a0C = a09, az.y.send(a09, bC.aC)
	}, this.aD2 = function(aRV, a2u) {
		bD.dX(), bD.a8(1, 0), bD.a8(6, 2), bD.a8(3, aRV), 2 === aRV ? bD.a8(2, a2u) : 3 === aRV ? bE.v7.yX(a2u, 7, bD) : 5 === aRV && (bD.a8(3, a2u.id), bD.a8(3, a2u.value), bD.a8(30, a2u.rw)), az.y.send(az.y.a0C, bD.aRW())
	}
}

function aQ0() {
	this.aQR = function(a09) {
		bC.a7(39), bC.a8(1, 0), bC.a8(6, 13), bC.a8(14, l.dj), bC.a8(4, a0.id), bC.a8(7, a0.dp), bC.a8(1, +l.a9), bC.a8(1, +l.aA), bC.a8(5, (new Date).getHours() % 24), az.y.send(a09, bC.aC)
	}, this.aRI = function(a09, qE, aR3) {
		bC.a7(70), bC.a8(1, 0), bC.a8(6, 14), bC.a8(3, aR3), bC.a8(30, qE[0]), bC.a8(30, qE[1]), az.y.send(a09, bC.aC)
	}, this.aNj = function(id) {
		bC.a7(13), bC.a8(1, 0), bC.a8(6, 15), bC.a8(6, id), az.y.send(0, bC.aC)
	}, this.aAr = function(id, pO) {
		var eh = Math.min(pO.length, 63);
		bC.a7(19 + 16 * eh), bC.a8(1, 0), bC.a8(6, 26), bC.a8(6, id), bC.a8(6, eh), bE.v5.vK(pO), az.y.send(0, bC.aC)
	}, this.aRY = function(aQx, pZ) {
		bC.a7(7 + 26 * pZ.length), bC.a8(1, 0), bC.a8(6, 9);
		for (var aB = 0; aB < pZ.length; aB++) bC.a8(16, pZ[aB][0]), bC.a8(10, pZ[aB][1]);
		az.y.send(aQx, bC.aC)
	}, this.aQY = function(aRZ, aRa) {
		bC.a7(20), bC.a8(1, 0), bC.a8(6, 19), bC.a8(1, aRZ), bC.a8(12, aRa), az.y.send(az.y.a0J, bC.aC)
	}, this.aRS = function(username) {
		bC.a8(5, username.length), bE.v5.vK(username)
	}
}

function aQP() {
	var a09, aL2, aRb, aRc = ["wss://", "/s50/", "/s51/", "/s52/"],
		aRd = 0;

	function aQQ() {
		az.y.aQQ(a09, aL2)
	}

	function aRi(e) {
		az.a5c.aQa(a09, new Uint8Array(e.data))
	}

	function aRj() {}

	function aQX(e) {
		az.y.aQX(a09, e)
	}
	this.dX = function(e2, aRe) {
		a09 = e2, aL2 = aRe, e2 = l.dk ? "ws://localhost:" + (7130 + a09) + "/" : aRc[0] + az.y.aQE[a09] + aRc[1 + l.dl], (aRb = new WebSocket(__fx.customLobby.isActive() && 1 === a09 ? __fx.customLobby.getSocketURL() : e2)).binaryType =
			"arraybuffer", aRb.onopen = aQQ, aRb.onmessage = aRi, aRb.onclose = aQX, aRb.onerror = aRj
	}, this.aRg = function() {
		return aRb.readyState === aRb.CONNECTING
	}, this.aLt = function() {
		return aRb.readyState === aRb.OPEN
	}, this.aQK = function() {
		return aRd
	}, this.aQS = function() {
		aRd = 1
	}, this.aQM = function() {
		return this.aRg() || this.aLt()
	}, this.aQN = function(aRe) {
		aL2 = aRe
	}, this.aRK = function() {
		return aL2
	}, this.send = function(aC) {
		this.aLt() && aRb.send(aC)
	}, this.close = function(aQU) {
		this.aQM() && (aRb.close(aQU), this.r0())
	}, this.r0 = function() {
		aRb.onopen = null, aRb.onmessage = null, aRb.onclose = null, aRb.onerror = null
	}
}

function dG() {
	var aRk = !1,
		a5x = 0,
		i = 0,
		s5 = 0,
		gap = 0,
		canvas = null,
		xG = null,
		a1Y = null;

	function aRm() {
		for (var aRs, aRq = 0, eh = 0, f2 = Math.floor(i / 2), e1 = Math.floor(s5 / 2), aRr = 1.5 * Math.PI, aB = aD.wK; 0 <= aB; aB--) eh += a1Y[aB], 0 === a1Y[aB] && aRq++;
		if (aRk = !1, xG.clearRect(0, 0, i, i), xG.fillStyle = bA.mk, xG.fillRect(0, 0, i, i), xG.fillStyle = bA.mn, xG.fillRect(0, 0, i, gap), xG.fillRect(0, 0, gap, i), xG.fillRect(i - gap, 0, gap, i), xG.fillRect(0, i - gap, i, gap), 0 < eh)
			if (aRq === aD.wK) {
				for (aB = aD.wK; 0 <= aB; aB--)
					if (0 < a1Y[aB]) {
						! function(aB, f2, e1) {
							xG.fillStyle = bf.aRz[bf.kI[aB]], xG.beginPath(), xG.arc(f2, f2, e1, 0, 2 * Math.PI), xG.fill()
						}(aB, f2, e1);
						break
					}!
				function(f2) {
					var fontSize = f2 / 3;
					xG.font = b9.ph.rY(1, fontSize), xG.fillStyle = bA.mn, xG.fillText("100%", f2, f2 + .1 * fontSize)
				}(f2)
			} else {
				for (aB = 0; aB <= aD.wK; aB++) 0 < a1Y[aB] && (! function(aB, f2, e1, aRr, aRs) {
					xG.fillStyle = bf.aRz[bf.kI[aB]], xG.beginPath(), xG.arc(f2, f2, e1, aRr, aRs), xG.lineTo(f2, f2), xG.fill()
				}(aB, f2, e1, aRr, aRs = aRr + 2 * Math.PI * a1Y[aB] / eh), function(f2, e1, aRr, aRs) {
					var f9 = (aRs - aRr) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e1 * Math.min(f9, .37);
					fontSize < 8 || (aRr = (aRr + aRs) / 2, aRs = (__fx.settings.detailedTeamPercentage ? (100 * f9).toFixed(2) : Math.floor(100 * f9 + .5)) + "%", e1 *= .525 - Math.max(.6 * (f9 - .7), 0), xG.font = b9.ph.rY(1, fontSize), xG
						.fillStyle = bA.mn, xG.fillText(aRs, f2 + Math.cos(aRr) * e1, f2 + Math.cos(aRr + 1.5 * Math.PI) * e1))
				}(f2, e1, aRr, aRs), 0 !== aB && aRx(f2, e1, aRr), aRr = aRs);
				aRx(f2, e1, 1.5 * Math.PI)
			}!
		function(f2, e1) {
			xG.beginPath(), xG.arc(f2, f2, e1, 0, 2 * Math.PI), xG.stroke()
		}(f2, e1)
	}

	function aRx(f2, e1, aS0) {
		xG.beginPath(), xG.moveTo(f2, f2), xG.lineTo(f2 + Math.cos(aS0) * e1, f2 + Math.cos(aS0 + 1.5 * Math.PI) * e1), xG.stroke()
	}
	this.dX = function() {
		if (aD.hW) {
			a5x = 0, a1Y = new Uint32Array(aD.wK + 1);
			for (var aB = aD.wK; 0 <= aB; aB--) a1Y[aB] = 0;
			for (aB = al.jx - 1; 0 <= aB; aB--) a1Y[bf.ef[al.jy[aB]]] += 1;
			this.resize()
		} else a1Y = xG = canvas = null
	}, this.a6k = function() {
		return i
	}, this.resize = function() {
		aD.hW && (i = Math.floor(a0.a1.r7() && !aD.mG ? .18 * h.min : .13 * h.pj), i = (i *= 1 + (.5 + .2 * a0.a1.r7()) * aD.mG) + i % 2, s5 = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, xG = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), xG.lineWidth = gap, xG.strokeStyle = bA.mn, b9.ph.textAlign(xG, 1), b9.ph.textBaseline(xG, 1), aRm())
	}, this.a2q = function() {
		var dm, l7 = this.l8();
		return bf.kI[l7] || (l7 = function() {
			for (var l7 = -1, aB = aD.wK; 1 <= aB; aB--)(-1 === l7 || a1Y[aB] > a1Y[l7]) && (l7 = aB);
			return l7
		}(), dm = ag.gU[lB[0]], -1 !== l7 && a1Y[l7] > dm) ? a1Y[l7] : dm
	}, this.zw = function() {
		return a5x = 31, this.ir(), this.l8()
	}, this.l8 = function() {
		for (var l7 = 0, aB = aD.wK; 0 < aB; aB--) a1Y[aB] > a1Y[l7] && (l7 = aB);
		return l7
	}, this.l9 = function(aRo) {
		for (var g9 = 0, jy = al.jy, ef = bf.ef, eh = al.jx, fK = bN.fK, aB = 0; aB < eh; aB++) {
			var gE = jy[aB];
			ef[gE] === aRo && (fK[g9++] = gE)
		}
		bN.fC[0] = g9
	}, this.a2R = function() {
		for (var g9 = 0, aB = aD.wK; 0 <= aB; aB--) g9 += 0 < a1Y[aB];
		return g9
	}, this.ir = function() {
		if (aD.hW && 32 <= ++a5x) {
			a5x = 0;
			for (var aB = aD.wK; 0 <= aB; aB--) a1Y[aB] = 0;
			for (aB = al.jx - 1; 0 <= aB; aB--) a1Y[bf.ef[al.jy[aB]]] += ag.gU[al.jy[aB]];
			aRk = !0
		}
	}, this.lZ = function() {
		aD.hW && aRk && aRm()
	}, this.tq = function() {
		aD.hW && (aD.mG ? tr.drawImage(canvas, bb.gap, bb.gap) : tr.drawImage(canvas, bb.gap, a6l + 2 * bb.gap))
	}
}

function cz() {
	function aS2(key) {
		var aPM;
		return "undefined" == typeof URLSearchParams || (aPM = window.location.search, "string" != typeof(aPM = new URLSearchParams(aPM).get(key))) || aPM.length < 1 ? null : aPM
	}
	this.dg = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aS2("account");
				if (!value && !(value = aS2("a"))) return void bH.clear();
				return bH.clear(), t.u(8, t.ry, new rz(1e3, {
					s0: 0,
					rw: value,
					rx: 0
				})), 1
			}()) {
			var value = aS2("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a06 = new URL(window.location.href);
		a06.search = "";
		try {
			return history.replaceState(null, "", a06.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aMO = function(key, value) {
		if (0 === a0.id) try {
			var a06 = new URL(window.location.href),
				gE = a06.searchParams;
			gE.set(key, value), a06.search = gE.toString(), history.replaceState(null, "", a06.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cg() {
	var aS4, g;
	this.dX = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bK.dn(32768 * aB, 100);
		this.a3d(0)
	}, this.value = function(gE) {
		return g[gE]
	}, this.aJL = function() {
		return bK.dn(aS4 - 1, 2)
	}, this.a3d = function(aIz) {
		aS4 = 2 * aIz % 32768 + 1
	}, this.random = function() {
		return aS4 = 167 * aS4 % 32768
	}, this.jE = function(lh) {
		return bK.dn(lh * this.random(), 32768)
	}, this.jo = function(gE) {
		return 0 !== gE && this.random() < this.value(gE)
	}, this.ia = function(f0, f1) {
		return f0 + this.jE(f1 - f0)
	}
}

function cv() {
	this.ox = new aS5, this.a3o = new aS6, this.aGf = new aS7, this.dX = function() {
		aD.gq || this.ox.dX()
	}, this.ir = function() {
		aD.gq || (this.ox.ir(), 3 !== t.ry) || be.jt() % 15 != 5 && 2 !== aD.z4 || t.a44().aPN()
	}, this.aPQ = function() {
		0 === aD.z4 && aa.aEc(), aD.a3Y.a3w(), aD.data.canvas = null, az.y.close(az.y.a0J, 3257), az.y.a0J = 0, aD.data.isReplay = 1, aD.a3b()
	}, this.aPP = function(pO) {
		var aB = pO.indexOf("=");
		return 0 <= aB ? pO.substring(aB + 1) : pO
	}, this.aPO = function(pO) {
		return "https://territorial.io/?replay=" + pO
	}
}

function aS5() {
	this.aS9 = null, this.aSA = null, this.aSB = null, this.aSC = null, this.aSD = null, this.aSE = null, this.a3n = "";
	var aSF = 0;
	this.dX = function() {
		this.aS9 = [], this.aSA = [], this.aSB = [], this.aSC = [], this.aSD = [0], this.aSE = [0], aSF = 0, this.a3n = ""
	}, this.oy = function(id, fO, fQ, fS) {
		aD.gq || 2 === aD.z4 || (0 === this.aSD[aSF] && (this.aSE[aSF] ? (this.aSD.push(1), this.aSE.push(0), aSF++) : this.aSD[aSF] = 1), this.aS9.push(id), this.aSA.push(fO), this.aSB.push(void 0 === fQ ? 0 : fQ), this.aSC.push(void 0 === fS ?
			0 : fS), this.aSE[aSF]++)
	}, this.ir = function() {
		0 === this.aSD[aSF] ? this.aSE[aSF]++ : (this.aSD.push(0), this.aSE.push(0), aSF++)
	}
}

function aS7() {
	var aSG = 0;

	function aSK(pO, id) {
		aSG || (id ? 1 === id ? aN.a53 = L(433) + ": " + pO : t.u(4, 3, new v(L(434), pO, 1)) : t.u(4, 3, new v("⚠️ " + L(432), pO, 1)))
	}
	this.vP = function(pO, aSH) {
		var pZ;
		return aSG = aSH, bF.s1.vH(bF.s1.vF(bF.s1.vD(pO))), aN.a53 = "", !(! function() {
			if (bG.size < 10) aSK("File Too Small");
			else {
				var aSM = bG.oj(12),
					aRa = (aSM !== l.rVersion && aSK("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aSM) + ("   Compatible at territorial.io/" + aSM), 1), bG.oj(12)),
					aSN = bG.oj(31);
				if (aSN !== bG.size) aSK("Size Error: " + aSN + " " + bG.size);
				else if (function(j, aSM) {
						for (var gE = bG.aC, eh = bG.size, aRa = aSM, aB = 3; aB < eh; aB++) aRa = aRa + gE[aB] & 4095;
						return aRa === j || (aSK("Hash Error: " + aRa + " " + j + " " + eh), !1)
					}(aRa, aSM)) return 1
			}
			return
		}() || (aSH = bG, (pZ = aD.data = new a3X).mapType = aSH.oj(2), pZ.mapProceduralIndex = aSH.oj(8), pZ.mapRealisticIndex = aSH.oj(8), pZ.mapSeed = aSH.oj(14), pZ.mapName = aSH.aSP(5), 2 === pZ.mapType && aSH.aSQ(), pZ
			.passableWater = aSH.oj(1), pZ.passableMountains = aSH.oj(1), pZ.playerCount = aSH.oj(10), pZ.humanCount = aSH.oj(10), pZ.selectedPlayer = aSH.oj(9), pZ.gameMode = aSH.oj(1), pZ.playerMode = aSH.oj(2), pZ.battleRoyaleMode =
			aSH.oj(2), pZ.numberTeams = aSH.oj(4), pZ.isZombieMode = aSH.oj(1), pZ.isContest = aSH.oj(1), pZ.isReplay = aSH.oj(1), pZ.elo = aSH.aSR(2, 14, 2), pZ.colorsType = aSH.oj(1), pZ.colorsPersonalized = aSH.oj(1), pZ.colorsData =
			aSH.aSR(10, 18, 512), pZ.selectableColor = aSH.oj(1), pZ.teamPlayerCount = aSH.aSR(4, 10, 9), pZ.neutralBots = aSH.oj(1), pZ.botDifficultyType = aSH.oj(2), pZ.botDifficultyValue = aSH.oj(4), pZ.botDifficultyTeam = aSH.aSR(4,
				4, 9), pZ.botDifficultyData = aSH.aSR(10, 4, 512), pZ.spawningType = aSH.oj(2), pZ.spawningSeed = aSH.oj(14), pZ.spawningData = aSH.aSR(11, 12, 1024), pZ.selectableSpawn = aSH.oj(1), pZ.playerNamesType = aSH.oj(2), pZ
			.playerNamesData = aSH.aSS(10, 5, 512), pZ.selectableName = aSH.oj(1), pZ.aIncomeType = aSH.oj(2), pZ.aIncomeValue = aSH.oj(8), pZ.aIncomeData = aSH.aSR(10, 8, 512), pZ.tIncomeType = aSH.oj(2), pZ.tIncomeValue = aSH.oj(8), pZ
			.tIncomeData = aSH.aSR(10, 8, 512), pZ.iIncomeType = aSH.oj(2), pZ.iIncomeValue = aSH.oj(8), pZ.iIncomeData = aSH.aSR(10, 8, 512), pZ.sResourcesType = aSH.oj(2), pZ.sResourcesValue = aSH.oj(11), pZ.sResourcesData = aSH.aSR(10,
				11, 512), ! function() {
				var i1 = bG,
					vQ = i1.oj(5),
					aST = i1.oj(30),
					aSU = i1.oj(30);
				if (aST + aSU > 8 * i1.size) return void aSK("Corrupted File");
				return function(eh) {
						var aSX = new Uint8Array(eh),
							aSY = new Uint16Array(eh),
							aSZ = new Uint32Array(eh),
							aSa = new Uint32Array(eh);
						b8.ox.aS9 = aSX, b8.ox.aSA = aSY, b8.ox.aSB = aSZ, b8.ox.aSC = aSa;
						for (var aB = 0; aB < eh; aB++) {
							var id = bG.oj(4);
							aSX[aB] = id, aSY[aB] = bG.oj(9), 0 === id ? aSZ[aB] = bG.oj(22) : 1 === id ? (aSZ[aB] = bG.oj(10), aSa[aB] = bG.oj(10)) : 2 === id ? (aSZ[aB] = bG.oj(10), aSa[aB] = bG.oj(9)) : 3 === id || 4 === id ? (aSZ[
								aB] = bG.oj(10), aSa[aB] = bG.oj(22)) : 5 === id || 6 === id ? aSZ[aB] = bG.oj(10) : 7 === id ? aSZ[aB] = bG.oj(1) : 10 === id && (aSZ[aB] = bG.oj(20), aSa[aB] = bG.oj(22))
						}
					}(aST),
					function(eh, vQ) {
						var aSD = new Uint8Array(eh),
							aSE = new Array(eh);
						aSE.fill(0), b8.ox.aSD = aSD, b8.ox.aSE = aSE;
						for (var aB = 0; aB < eh; aB++) aSD[aB] = bG.oj(1), aSE[aB] = bG.oj(vQ)
					}(aSU, vQ), 1
			}()) || (bG.e2 < 8 * bG.size - 13 || bG.e2 > 8 * bG.size ? (aSK("Out Of Bounds Error: " + bG.e2 + " " + 8 * bG.size), 1) : (b8.ox.a3n = pO, 2 === aD.data.mapType && (aSK("Load base64 image...", 2), 1))))
	}, this.aGg = function(aGG, aSL) {
		var a1t = document.createElement("canvas"),
			he = a1t.getContext("2d");
		if (a1t.width = aGG.width, a1t.height = aGG.height, he.drawImage(aGG, 0, 0), aSG || aSL) return aD.z4 ? void 0 : (aD.data.canvas = a1t, aD.data.mapType = 2, t.x(), void t.u(19));
		b8.aPQ()
	}
}

function aS6() {
	this.yX = function() {
		var vQ = function() {
				for (var aSE = b8.ox.aSE, eh = aSE.length, max = 0, aB = 0; aB < eh; aB++) max = Math.max(max, aSE[aB]);
				return vX(Math.max(max, 1))
			}(),
			i = (pZ = aD.data, (i = bD).dX(), i.a8(12, l.rVersion), i.e2 += 43, i.a8(2, pZ.mapType), i.a8(8, pZ.mapProceduralIndex), i.a8(8, pZ.mapRealisticIndex), i.a8(14, pZ.mapSeed), i.aSh(pZ.mapName, 5), 2 === pZ.mapType && i.aSi(pZ.canvas),
				i.a8(1, pZ.passableWater), i.a8(1, pZ.passableMountains), i.a8(10, pZ.playerCount), i.a8(10, pZ.humanCount), i.a8(9, pZ.selectedPlayer), i.a8(1, pZ.gameMode), i.a8(2, pZ.playerMode), i.a8(2, pZ.battleRoyaleMode), i.a8(4, pZ
					.numberTeams), i.a8(1, pZ.isZombieMode), i.a8(1, pZ.isContest), i.a8(1, pZ.isReplay), i.de(pZ.elo, 2, 14), i.a8(1, pZ.colorsType), i.a8(1, pZ.colorsPersonalized), i.de(pZ.colorsData, 10, 18), i.a8(1, pZ.selectableColor), i.de(
					pZ.teamPlayerCount, 4, 10), i.a8(1, pZ.neutralBots), i.a8(2, pZ.botDifficultyType), i.a8(4, pZ.botDifficultyValue), i.de(pZ.botDifficultyTeam, 4, 4), i.de(pZ.botDifficultyData, 10, 4), i.a8(2, pZ.spawningType), i.a8(14, pZ
					.spawningSeed), i.de(pZ.spawningData, 11, 12), i.a8(1, pZ.selectableSpawn), i.a8(2, pZ.playerNamesType), i.aSj(pZ.playerNamesData, 10, 5), i.a8(1, pZ.selectableName), i.a8(2, pZ.aIncomeType), i.a8(8, pZ.aIncomeValue), i.de(pZ
					.aIncomeData, 10, 8), i.a8(2, pZ.tIncomeType), i.a8(8, pZ.tIncomeValue), i.de(pZ.tIncomeData, 10, 8), i.a8(2, pZ.iIncomeType), i.a8(8, pZ.iIncomeValue), i.de(pZ.iIncomeData, 10, 8), i.a8(2, pZ.sResourcesType), i.a8(11, pZ
					.sResourcesValue), i.de(pZ.sResourcesData, 10, 11), ! function(vQ) {
					var i = bD,
						aS9 = b8.ox.aS9,
						fO = b8.ox.aSA,
						fQ = b8.ox.aSB,
						fS = b8.ox.aSC,
						eh = aS9.length;
					i.a8(5, vQ), i.a8(30, eh), i.a8(30, b8.ox.aSE.length);
					for (var aB = 0; aB < eh; aB++) {
						var f2 = aS9[aB];
						i.a8(4, f2), i.a8(9, fO[aB]), 0 === f2 ? i.a8(22, fQ[aB]) : 1 === f2 ? (i.a8(10, fQ[aB]), i.a8(10, fS[aB])) : 2 === f2 ? (i.a8(10, fQ[aB]), i.a8(9, fS[aB])) : 3 === f2 || 4 === f2 ? (i.a8(10, fQ[aB]), i.a8(22, fS[aB])) :
							5 === f2 || 6 === f2 ? i.a8(10, fQ[aB]) : 7 === f2 ? i.a8(1, fQ[aB]) : 10 === f2 && (i.a8(20, fQ[aB]), i.a8(22, fS[aB]))
					}
				}(vQ), ! function(vQ) {
					for (var i = bD, aSD = b8.ox.aSD, aSE = b8.ox.aSE, eh = aSD.length, aB = 0; aB < eh; aB++) i.a8(1, aSD[aB]), i.a8(vQ, aSE[aB])
				}(vQ), bD.e2),
			pZ = bK.dn(i - 1, 6) + 1,
			vQ = (bC.aR8(6 * pZ) !== bD.g.length && bD.g.push(0), ! function() {
				var i = bD;
				i.e2 = 24, i.a8(31, i.g.length), i.e2 = 12, i.a8(12, function() {
					for (var g = bD.g, eh = g.length, aRa = l.rVersion, aB = 3; aB < eh; aB++) aRa = aRa + g[aB] & 4095;
					return aRa
				}())
			}(), bG.dX(bD.g), bE.s1.s2(bE.s1.s3(pZ)));
		return bG.tK(), bD.dX(), vQ
	}
}

function cl() {
	var f2, br = !1,
		aSl = !1,
		aSm = -1e4,
		aSn = -1,
		aSo = 0;

	function resize(aSs) {
		f2 = 0, ab.sQ() && (aSq(aSs) || br) && (br = !1, bb.resize(), bV.aAR.resize(), aY.dX(), bX.dX(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.z4 ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bB.resize(), av.resize(), aP.resize(), aQ.resize(), aL.resize(), bd.resize(), af.resize(), aX.resize(), bg.resize(), aS.a7p()) : (aa.aEe(), aa.aEf()), be.df = !0)
	}

	function aSp(f9) {
		return f9 && 128 < f9 ? Math.floor(f9) : 128
	}

	function aSq(aSs) {
		var i, j, aSu, s5, a7E;
		if (!(0 < h.rg)) return s5 = aSp(document.documentElement.clientWidth), a7E = aSp(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = s5, j = a7E, aSu = 0 !== a0.id || i < j ?
			700 : 1200, aSu = Math.min(aSu / ((i + j) / 2), 1), aSu = 0 === bi.eE.data[1].value ? 2 * aSu / 3 : Math.min(aSu + (bi.eE.data[1].value - 1) * (1 - aSu) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSu, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSs && !aSl ? (aSl = !0, document.body.removeChild(a0X)) : aSl && (aSl = !1, document.body.appendChild(a0X)), i = Math.floor(.5 + s5 * h.k), j = Math.floor(.5 + a7E * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = aA3(i, j), h.max = a5I(i, j), h.pj = bK.dn(i + j, 2), h.tn = i / j, a0X.width = i, a0X.height = j, a0X.style.width = s5 + "px", a0X.style.height = a7E + "px", aSn = be.eG + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pj = 0, this.tn = 1, this.k = 1, this.rg = 0, this.dY = function() {
		this.i = aSp(document.documentElement.clientWidth) + 2, this.j = aSp(document.documentElement.clientHeight) + 2
	}, this.dX = function() {
		f2 = 1, a0X = document.getElementById("canvasA"), (tr = a0X.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSq(0)
	}, this.ir = function() {
		50 <= ++f2 && resize(0), -1 === aSn || be.eG < aSn || (aSn = -1, 2e3 * ++aSo >= be.eG + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.di = function(hq) {
		br = !0, resize(hq)
	}, this.a1D = function() {
		aSm + 1e3 > be.eG || (aSm = be.eG, resize(0))
	}
}

function dD() {
	this.aRH = new aSw, this.zs = new aSx
}

function aSx() {
	this.zt = function() {
		for (var gE, eh = al.jx, ys = al.jy, xX = ag.xX, a73 = this.aFz(), aB = 0; aB < eh; aB++) gE = ys[aB], b9.g2.jK(gE) || (xX[gE] = a73);
		var p3 = ag.p3,
			iz = ag.iz,
			j0 = ag.j0,
			zb = ag.zb,
			eh = aD.jw;
		for (aB = 0; aB < eh; aB++)(0 === zb[aB] || j0[aB] < 1 || 2 * p3[aB] > 3 * (iz[aB] + j0[aB])) && (xX[aB] = 0);
		var zq = 0;
		for (aB = 0; aB < eh; aB++) zq += 0 < xX[aB];
		return zq
	}, this.aFz = function() {
		return Math.min(65535, be.jt())
	}
}

function aSw() {
	function aT1(g, f9, hU) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (f9 >> (aB + hU) % 30 & 1)) % 256
	}
	this.ir = function(aSy, aSz) {
		var g = new Uint8Array(256);
		return function(g, aSy, aSz) {
				var aB, aT3 = 3 + (4 + aSy) % 32768,
					aT4 = 12 + aSz % 32768,
					aT5 = 17 + ((aSy & aSz) + (aSy | aSz) + aSy) % 32768;
				for (aB = 0; aB < 256; aB++) aT3 = 1 + aT3 * aT4 % aT5, g[aB] = aT3 % 256
			}(g, aSy, aSz), aT1(g, aSy, 2), aT1(g, aSz, 7),
			function(g) {
				var aB, f9, e2 = 0;
				for (aB = 0; aB < 3e4; aB++) f9 = g[e2], g[e2] = (f9 + aB + g[(e2 + aB) % 256]) % 256, e2 = (f9 + aB + e2 + (f9 & e2)) % 256
			}(g),
			function(g) {
				var aB, a7E = 1,
					sn = 1;
				for (aB = 0; aB < 256; aB += 2) a7E = (1 + a7E) * (g[aB] + 1) % 1073741824, sn = (1 + sn) * (g[aB + 1] + 1) % 1073741824;
				return [a7E, sn]
			}(g)
	}
}

function ci() {
	var aT6, aT7, h9, aT8;
	this.dX = function() {
		var aB, eo, eq, aRT, aT9, i, j, xG, hb, vh, f9, gE, ex, f0, a4S;
		if (function() {
				if (h9 = !0, aT8 = "rgb(" + bR.vf[0] + "," + bR.vf[1] + "," + bR.vf[2] + ")", bR.aJ8(bR.eN)) return 1;
				return h9 = !1, 0
			}()) aT7 = null;
		else {
			for (aT6 = bK.dn(96, 4), aT9 = 1 === bR.eN ? (aRT = 0, 160) : (aRT = 128, 32), aT8 = "rgb(" + aRT + "," + aRT + "," + aRT + ")", aT7 = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aT7[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bR.es : aT6, j = aB % 2 == 0 ? aT6 : bR.et + 2 * aT6, aT7[aB].width = i, aT7[aB].height = j, vh = (hb = (xG = aT7[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (eq = aT6 - 1; 0 <= eq; eq--)
						for (f9 = aT9 + Math.floor((eq + 1) * (aRT - aT9) / (aT6 + 1)), eo = i - 1; 0 <= eo; eo--) vh[gE = 4 * ((0 === aB ? aT6 - eq - 1 : eq) * i + eo)] = f9, vh[gE + 1] = f9, vh[gE + 2] = f9, vh[gE + 3] = 255;
				else {
					for (eo = aT6 - 1; 0 <= eo; eo--)
						for (f9 = aT9 + Math.floor((eo + 1) * (aRT - aT9) / (aT6 + 1)), eq = j - 1 - aT6; aT6 <= eq; eq--) vh[gE = 4 * (eq * i + (3 === aB ? aT6 - eo - 1 : eo))] = f9, vh[gE + 1] = f9, vh[gE + 2] = f9, vh[gE + 3] = 255;
					for (f0 = 1; 0 <= f0; f0--)
						for (eo = aT6 - 1; 0 <= eo; eo--)
							for (eq = aT6 - 1; 0 <= eq; eq--) ex = (Math.pow(eo * eo + eq * eq, .5) + 1) / (aT6 + 1), f9 = aT9 + Math.floor((1 < ex ? 1 : ex) * (aRT - aT9)), vh[gE = 4 * ((0 === f0 ? aT6 - eq - 1 : eq + f0 * (j - aT6)) * i + (
								1 === aB ? eo : aT6 - eo - 1))] = f9, vh[gE + 1] = f9, vh[gE + 2] = f9, vh[gE + 3] = 255
				}
				xG.putImageData(hb, 0, 0)
			}
			a4S = aT9, bR.va.fillStyle = "rgb(" + a4S + "," + a4S + "," + a4S + ")", bR.va.fillRect(0, 0, bR.es, 1), bR.va.fillRect(0, bR.et - 1, bR.es, 1), bR.va.fillRect(0, 0, 1, bR.et), bR.va.fillRect(bR.es - 1, 0, 1, bR.et)
		}
	}, this.xA = function() {
		var f0 = h9 ? 0 : -aT6;
		aKl(f0, f0, bR.es - 2 * f0, bR.et - 2 * f0, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF) || (tr.fillStyle = aT8, tr.fillRect(0, 0, h.i, h.j))
	}, this.tq = function() {
		h9 || (aKk(0, -aT6, bR.es, aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF) && tr.drawImage(aT7[0], bZ.aTG, bZ.aTH - aT6), aKk(bR.es, -aT6, aT6, bR.et + 2 * aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF) && tr.drawImage(aT7[1], bZ.aTG + bR.es, bZ.aTH - aT6),
			aKk(0, bR.et, bR.es, aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF) && tr.drawImage(aT7[2], bZ.aTG, bZ.aTH + bR.et), aKk(-aT6, -aT6, aT6, bR.et + 2 * aT6, bZ.aTC, bZ.aTD, bZ.aTE, bZ.aTF) && tr.drawImage(aT7[3], bZ.aTG - aT6, bZ.aTH - aT6))
	}
}

function d2() {
	this.hA = new aTI, this.aFx = new aTJ, this.xD = new aTK, this.y = new aTL, this.iQ = new aTM, this.a4S = new aTN, this.aTO = new aTP, this.jk = new aTQ, this.kY = new aTR, this.aTS = new aTT, this.dX = function() {
		this.xD.dX(), this.y.dX(), this.iQ.dX(), this.a4S.dX(), this.aTS.dX()
	}, this.tq = function() {
		this.aTS.tq(), this.xD.tq()
	}
}

function aTQ() {
	this.ir = function(player) {
		var ou;
		return !!aD.data.passableWater && 0 !== ag.gN[player].length && bM.y.ov !== bM.y.kA && !((ou = bM.y.ou[player]) >= Math.max(3 * an.performance.ky, aE.kA[aE.hL[player]]) || ou === bM.y.p7 || !b9.g2.p1(player, aE.k8[aE.hL[player]], 32,
			0) || !an.ie.ir(player) && !an.ih.ir(player) || ! function(a2U) {
				var aTW = bN.fI[1] + bL.hg[bN.fI[2] - 1] << 2;
				if (ac.eY(aTW)) return 1;
				return aTW = ac.eZ(aTW), a2U !== aTW && !!ea(a2U, aTW)
			}(player)) && function(player) {
			return b9.g2.p4(player), bM.y.pA(player), !0
		}(player)
	}
}

function aTI() {
	function aTe(aB, kz, l0) {
		var aTg, aTf;
		if (!(aB < 0)) return aTf = bM.y.mC[aB], aTg = bL.i4(aTf), aTf = bL.i7(aTf), aB = 20 * (.9 + .1 * Math.log10(bM.y.a5b[aB])), aB = Math.max(aB, bL.iK(b9.ph.sN(.02, 1.7))), bK.aKs(bL.i3(kz), bL.i6(l0), aTg, aTf, aB)
	}

	function aTY(aTX) {
		var aTj = 4 + .03 * (1 + 1.5 * a0.a1.r7()) * h.pj / iI;
		return bL.i8(aTX, bN.fI[1]) < aTj
	}
	this.hB = function(player, aTX) {
		return !!(aD.data.passableWater && bL.iL(aTX) && bM.y.ov !== bM.y.kA && bM.y.ou[player] !== bM.y.p7 && 0 !== ag.gN[player].length && bM.kY.kZ(player, aTX) && aTY(aTX))
	}, this.oF = function(player, m9, aTX) {
		return !!(bL.iL(aTX) && this.pB(player, m9) && bM.kY.pC(aTX) && aTY(aTX))
	}, this.pB = function(player, id) {
		for (var aTZ, sI = player << 3, sJ = sI + bM.y.ou[player], aTa = bM.y.aTa, aTb = bM.y.aTb, aB = sI; aB < sJ; aB++)
			if (id === aTb[aTZ = aTa[aB]]) return bN.fI[3] = aTZ, !0;
		return !1
	}, this.oE = function(eT) {
		var a4T = bM.a4S.a4T;
		return !!this.pB(aD.eR, a4T) && (b7.h3.oE(a4T, eT), !0)
	}, this.a4V = function(kz, l0) {
		var player = aD.eR,
			eh = bM.y.ou[player];
		if (0 === eh) return !1;
		for (var aTa = bM.y.aTa, mC = bM.y.mC, sI = player << 3, aTc = 80, aN9 = -1, aB = sI + eh - 1; sI <= aB; aB--) {
			var aTd = aTa[aB],
				ex = bL.hy(kz, l0, mC[aTd]);
			ex < aTc && (aTc = ex, aN9 = aTd)
		}
		return !!aTe(aN9, kz, l0) && (bM.a4S.a4T = bM.y.aTb[aN9], bk.p9.a4V(), !0)
	}, this.a4c = function(kz, l0) {
		var eh = bM.y.ov;
		if (eh < 1) return -1;
		for (var mC = bM.y.mC, aTc = 80, aN9 = -1, aB = 0; aB < eh; aB++) {
			var ex = bL.hy(kz, l0, mC[aB]);
			ex < aTc && (aTc = ex, aN9 = aB)
		}
		return aTe(aN9, kz, l0) ? aN9 : -1
	}, this.mB = function(player, id) {
		for (var sI = player << 3, sJ = sI + bM.y.ou[player], aTb = bM.y.aTb, aTa = bM.y.aTa, aB = sI; aB < sJ; aB++) {
			var aTd = aTa[aB];
			if (aTb[aTd] === id) return aTd
		}
		return -1
	}, this.aFu = function(player) {
		for (var sI = player << 3, sJ = sI + bM.y.ou[player], aTa = bM.y.aTa, a5b = bM.y.a5b, hL = 0, aB = sI; aB < sJ; aB++) hL += a5b[aTa[aB]];
		return hL
	}, this.mH = function(player) {
		return 0 === bM.y.ou[player] ? -1 : bM.y.aTa[player << 3]
	}
}

function aTJ() {
	this.aFy = function(player) {
		for (var aTa = bM.y.aTa, sI = player << 3, aB = sI + bM.y.ou[player] - 1; sI <= aB; aB--) this.aTk(aTa[aB])
	}, this.aTk = function(aTl) {
		var y = bM.y,
			aTm = y.ov - 1,
			aTn = y.a5a[aTl],
			aTo = y.aTp[aTl],
			aTq = y.mC[aTl];
		y.ov = aTm, y.a5a[aTl] = y.a5a[aTm], y.aTr[aTl] = y.aTr[aTm], y.aTs[aTl] = y.aTs[aTm], y.mC[aTl] = y.mC[aTm], y.aTt[aTl] = y.aTt[aTm], y.a5b[aTl] = y.a5b[aTm], y.aTp[aTl] = y.aTp[aTm], y.aTb[aTl] = y.aTb[aTm], y.aTu[aTl] = y.aTu[aTm], y
			.aTv[aTl] = y.aTv[aTm], y.aTa[y.a5a[aTl]] = aTl,
			function(aS0) {
				var player = aS0 >> 3,
					y = bM.y,
					eh = y.ou[player] - 1,
					aTy = (player << 3) + eh;
				y.ou[player] = eh, aTy !== aS0 && (y.aTa[aS0] = y.aTa[aTy], y.a5a[y.aTa[aS0]] = aS0)
			}(aTn), bM.iQ.iQ[bL.iP(y.mC[aTl])][y.aTp[aTl]] = aTl, aTm = bL.iP(aTq), aTn = aTo, aTm = bM.iQ.iQ[aTm], y = aTm.pop(), aTn !== aTm.length && (aTm[aTn] = y, bM.y.aTp[y] = aTn)
	}
}

function aTK() {
	var aU0, xh = 8,
		aU1 = new Array(2);

	function aU2(e2) {
		var hY = xh + 4,
			a1t = b9.ph.vW(hY, hY),
			he = b9.ph.getContext(a1t, !0),
			hb = b9.ph.getImageData(he, hY, hY),
			vh = hb.data;
		return aU3(vh, hY + 1, e2), aU3(vh, hY + 2, e2), aU3(vh, 2 * hY + 1, e2), aU3(vh, 2 * hY - 3, e2), aU3(vh, 2 * hY - 2, e2), aU3(vh, 3 * hY - 2, e2), aU3(vh, hY * (hY - 3) + 1, e2), aU3(vh, hY * (hY - 2) + 1, e2), aU3(vh, hY * (hY - 2) + 2,
			e2), aU3(vh, hY * (hY - 2) - 2, e2), aU3(vh, hY * (hY - 1) - 3, e2), aU3(vh, hY * (hY - 1) - 2, e2), he.putImageData(hb, 0, 0), a1t
	}

	function aU3(vh, eT, e2) {
		eT *= 4;
		vh[eT] = 255, vh[1 + eT] = 255, vh[2 + eT] = e2, vh[3 + eT] = 255
	}

	function vW(player) {
		var a1t = b9.ph.vW(xh, xh);
		return function(he, player) {
			var eo, eq, i2, eT, aU5, aU6, hY = xh,
				hb = b9.ph.getImageData(he, hY, hY),
				vh = hb.data,
				ke = (hY >> 1) - .5,
				aT8 = ac.a6B(player),
				aU8 = b9.pq.a1R(aT8, .5);
			b9.pq.a1T(aT8, aU8, 300) || b9.pq.a1V(aT8, 100);
			for (eq = 0; eq < hY; eq++)
				for (eo = 0; eo < hY; eo++) aU6 = (hY - 1.5) * (hY - 1.5) / 4, aU5 = (i2 = (i2 = eo - ke) * i2 + (i2 = eq - ke) * i2) <= (hY - 4.5) * (hY - 4.5) / 4 ? aU8 : aT8, vh[eT = 4 * (eq * hY + eo)] = aU5[0], vh[1 + eT] = aU5[1], vh[2 +
					eT] = aU5[2], vh[3 + eT] = aU6 < i2 ? 0 : 255;
			he.putImageData(hb, 0, 0)
		}(b9.ph.getContext(a1t, !0), player), a1t
	}
	this.dX = function() {
		aU0 = new Array(aD.ee), aU1[0] = aU2(255), aU1[1] = aU2(0)
	}, this.tq = function() {
		var aB, player, aU9, aKt, hL, i1, aUB, aUD, aUE, mC = bM.y.mC,
			a5a = bM.y.a5a,
			a5b = bM.y.a5b,
			aTv = bM.y.aTv,
			aUF = aU0,
			aUG = aD.eR,
			aUH = -1,
			eh = bM.y.ov,
			aUI = h.i,
			aUJ = h.j,
			aUK = bR.es << 4,
			eW = iI,
			eL = eW / xh,
			mD = iH / eW,
			mE = iJ / eW,
			i2 = (aUI + iH) / eW - mD,
			i5 = (aUJ + iJ) / eW - mE,
			he = tr;
		for (bM.hA.pB(aD.eR, bM.a4S.a4T) && (aUH = bN.fI[3]), he.imageSmoothingEnabled = eW < 9, b9.ph.textAlign(he, 1), b9.ph.textBaseline(he, 1), aB = 0; aB < eh; aB++) player = a5a[aB] >> 3, hL = a5b[aB], aU9 = .9 + .1 * Math.log10(hL), aKt =
			(i1 = mC[aB]) % aUK / 16 - aU9, i1 = aUJ * (Math.floor(i1 / aUK) / 16 - aU9 - mE) / i5, aUB = -2 * (aUE = eW * aU9) * (1 + (aUD = +(player === aUG)) / 8), aUD = aUD * aUE / 4, (aUE = aUI * (aKt - mD) / i2) < aUB || i1 < aUB || aUI +
			aUD < aUE || aUJ + aUD < i1 || (aKt = 2 * aU9 * eL, aUB = aU9 * eW, void 0 === (aUD = aUF[player]) && (aUF[player] = aUD = vW(player)), player === aUG && (he.setTransform(aKt, 0, 0, aKt, aUE - 2 * aKt, i1 - 2 * aKt), he.drawImage(aU1[
				+(aB === aUH)], 0, 0)), he.setTransform(aKt, 0, 0, aKt, aUE, i1), he.drawImage(aUD, 0, 0), (aU9 = Math.floor(function(hL) {
				if (hL < 1e3) return .42;
				if (hL < 1e4) return .34;
				if (hL < 1e6) return .26;
				if (hL < 1e8) return .19;
				return .15
			}(hL) * aUB)) < 6) || (he.setTransform(1, 0, 0, 1, 0, 0), he.fillStyle = aTv[aB] ? bA.nL : bA.mn, he.font = b9.ph.rY(1, aU9), he.fillText(b9.qh.yM(hL), aUE + aUB, i1 + aUB + .1 * aU9));
		he.imageSmoothingEnabled = !1, he.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aTT() {
	var a1t;
	this.dX = function() {
		a1t = a1t || bO.y.aUN(20, bf.aUO[7])
	}, this.tq = function() {
		var mX = iI;
		if (!(5 <= mX)) {
			var aUI = h.i,
				aUJ = h.j,
				mD = iH / mX,
				mE = iJ / mX,
				mQ = (aUI + iH) / mX,
				mR = (aUJ + iJ) / mX,
				gF = -20 * mX,
				aUP = .5 * gF,
				aUK = bR.es << 4,
				eh = bM.y.ov,
				mC = bM.y.mC,
				aUQ = a1t,
				he = tr;
			3 < mX && (he.globalAlpha = .5 * (5 - mX));
			for (var aB = 0; aB < eh; aB++) {
				var i1 = mC[aB],
					eo = aUI * (i1 % aUK / 16 - mD) / (mQ - mD) + aUP,
					i1 = aUJ * (Math.floor(i1 / aUK) / 16 - mE) / (mR - mE) + aUP;
				aUI < eo || aUJ < i1 || eo < gF || i1 < gF || (he.setTransform(mX, 0, 0, mX, eo, i1), he.drawImage(aUQ, 0, 0))
			}
			he.globalAlpha = 1, he.setTransform(mX, 0, 0, mX, 0, 0)
		}
	}
}

function aTP() {
	this.ir = function() {
		for (var aTf, aTO, aTu = bM.y.aTu, mC = bM.y.mC, aTs = bM.y.aTs, aB = bM.y.ov - 1; 0 <= aB; aB--) aTf = mC[aB], 0 !== (aTO = aTu[aB]) && aTf === aTs[aB] && (! function(aB, aUU, hT) {
			var j7, player = bM.y.a5a[aB] >> 3,
				hT = aUU + bL.hg[hT] << 2,
				aB = bM.y.a5b[aB];
			if (bc.aUV(player), ac.eY(hT)) j7 = aD.ee;
			else {
				if ((j7 = ac.eZ(hT)) === player) return hT = b9.g2.g5(player, aB), bc.g6(player, aB - hT, 12);
				if (!ea(player, j7)) return b7.jz.oT(player, j7, aB)
			}
			ad.jI(player, j7) || ad.ja(player) ? (ag.g8[player].push(aUU << 2), ad.j4(player, aB, j7), aF.j5(player, !0)) : bc.g6(player, aB, 12)
		}(aB, bL.iO(aTf), aTO - 1), bM.aFx.aTk(aB))
	}, this.aUW = function(player, eT, hT, m9) {
		if (0 !== hT) {
			var aUG = aD.eR;
			if (b9.g2.gt(aUG) && ea(player, aUG) && player !== aUG && 0 !== ag.gN[aUG].length) {
				var aTW = eT + bL.hg[--hT] << 2;
				if (ac.eY(aTW) || ea(player, ac.eZ(aTW))) {
					for (var ev = !1, aB = 0; aB < 4; aB++)
						if (aTW = eT + bL.hg[aB] << 2, ac.ec(aTW) && !ac.eY(aTW) && ac.eZ(aTW) === aUG) {
							ev = !0;
							break
						} ev && (aN.a4U(719, 0), aN.xZ(180, L(435, [ag.xa[player]]), 719, player, bA.nK, bA.mk, -1, !0, void 0, {
						f1: 1,
						m9: m9
					}))
				}
			}
		}
	}
}

function aTL() {
	this.aUX = null, this.kA = 512, this.p7 = 8, this.ov = 0, this.aUY = 0, this.a5a = new Uint16Array(this.kA), this.aTr = new Uint32Array(this.kA), this.aTs = new Uint32Array(this.kA), this.mC = new Uint32Array(this.kA), this.aTt = new Uint16Array(
			this.kA), this.a5b = new Uint32Array(this.kA), this.aTp = new Uint16Array(this.kA), this.aTb = new Uint16Array(this.kA), this.aTu = new Uint8Array(this.kA), this.aTv = new Uint8Array(this.kA), this.ou = new Uint8Array(aD.ee), this.aTa =
		new Uint16Array(this.p7 * aD.ee), this.dX = function() {
			this.aUY = 0, this.ov = 0, this.aUX = new Uint8Array(bR.es + bR.et), this.ou.fill(0)
		}, this.pA = function(player) {
			var eh = this.ov,
				aUZ = bL.iN(bN.fI[0]),
				aUa = this.ou[player],
				aUb = (player << 3) + aUa,
				hL = (this.a5a[eh] = aUb, this.aTr[eh] = aUZ, this.mC[eh] = aUZ, this.aTs[eh] = bL.iN(bN.fI[1]), this.aTt[eh] = 0, bN.fE[0]);
			hL < 60 ? (b9.g2.g3(player, 60 - hL), this.a5b[eh] = 60) : this.a5b[eh] = hL, this.aTp[eh] = bM.iQ.pA(eh, bL.iP(aUZ)), this.aTb[eh] = this.aUY, this.aTu[eh] = bN.fI[2], this.aTv[eh] = 0, this.aUY = this.aUY + 1 & 1023, this.aTa[aUb] = eh,
				this.ou[player] = aUa + 1, this.ov++, bM.aTO.aUW(player, bN.fI[1], bN.fI[2], this.aTb[eh])
		}, this.oE = function() {
			var aTZ = bN.fI[3];
			this.aTr[aTZ] = this.mC[aTZ], this.aTs[aTZ] = bL.iN(bN.fI[1]), this.aTt[aTZ] = 0, this.aTu[aTZ] = bN.fI[2], bM.aTO.aUW(this.a5a[aTZ] >> 3, bN.fI[1], bN.fI[2], this.aTb[aTZ])
		}, this.ir = function() {
			bM.aTO.ir();
			var aB, gE = aD.eR,
				dm = bM.hA.aFu(gE),
				rL = (! function(rL) {
					var aB, aUg, aUh, aUi, aUj, aUZ, aUn, aUo, ek, gF, aTr = rL.aTr,
						aTs = rL.aTs,
						mC = rL.mC,
						a5b = rL.a5b,
						aTv = rL.aTv,
						aTt = rL.aTt,
						aTp = rL.aTp,
						rL = rL.ov,
						aUK = bR.es << 4;
					for (aB = rL - 1; 0 <= aB; aB--) aUh = mC[aB], aUg = aTs[aB], aUh !== aUg && (aUZ = aTr[aB], aUn = aUg % aUK - (aUj = aUZ % aUK), aUo = ~~((aUg + .5) / aUK) - (aUZ = ~~((aUZ + .5) / aUK)), ek = ~~Math.sqrt(aUn * aUn + aUo *
						aUo + .5), gF = 2e5 + Math.min(20 * a5b[aB], 4e5), aTv[aB] && (gF = bK.dn(gF, 5)), 65535 <= (gF = aTt[aB] + Math.max(~~((gF + .5) / ek), 1)) ? mC[aB] = aUi = aUg : (aTt[aB] = gF, mC[aB] = aUi = aUj + bK.dn(gF *
						aUn, 65536) + aUK * (aUZ + bK.dn(gF * aUo, 65536))), aTp[aB] = bM.iQ.aUq(aTp[aB], aUh, aUi))
				}(this), ! function(rL) {
					if (be.jt() % 2 == 1) {
						var aB, hU, ke, f1, f2, aUr, y2, aUs, h6, mD, mE, aUZ, aUt, hk, aUv, vp, eh = rL.ov,
							mC = rL.mC,
							a5a = rL.a5a,
							a5b = rL.a5b,
							aTv = rL.aTv,
							iQ = bM.iQ.iQ,
							aUx = iQ.length,
							aUy = bM.iQ.aUy,
							aUK = bR.es << 4,
							aUz = aD.hW,
							aRo = bf.ef,
							gF = (eh - 1) * (bK.dn(be.jt(), 2) % 2);
						for (aB = 0; aB < eh; aB++)
							for (hU = Math.abs(aB - gF), aUZ = mC[hU], ke = bL.iP(aUZ), h6 = a5a[hU] >> 3, mD = aUZ % aUK, mE = ~~((aUZ + .5) / aUK), aUv = a5b[hU], f1 = 0; f1 < 9; f1++)
								if (!((aUr = ke + aUy[f1]) < 0 || aUx <= aUr))
									for (aUs = iQ[aUr], y2 = aUs.length, f2 = 0; f2 < y2; f2++) aUt = aUs[f2], vp = a5a[aUt] >> 3, h6 == vp || aUz && aRo[h6] === aRo[vp] && aRo[h6] || (vp = mC[aUt], (hk = mD - vp % aUK) * hk + (hk = mE - ~~((vp +
										.5) / aUK)) * hk < 14400 && (vp = a5b[aUt], hk = vp <= aUv ? Math.max(1, bK.dn(vp + bK.dn(aUv - vp, 10), 10)) : Math.max(1, bK.dn(aUv, 10)), a5b[aUt] = Math.max(vp - hk, 0), aTv[aUt] = 4))
					}
				}(this), ! function(rL) {
					if (be.jt() % 5 == 3) {
						var aB, hL, a5b = rL.a5b,
							eh = rL.ov;
						for (aB = 0; aB < eh; aB++) hL = a5b[aB], a5b[aB] = Math.max(hL - Math.max(1, hL >> 7), 0)
					}
				}(this), this),
				a5b = rL.a5b,
				aTv = rL.aTv;
			for (aB = rL.ov - 1; 0 <= aB; aB--) aTv[aB] = aTv[aB] >> 1, 0 === a5b[aB] && bM.aFx.aTk(aB);
			bc.g6(gE, dm - bM.hA.aFu(gE), 15)
		}
}

function aTM() {
	this.aV0 = 32, this.eo = 0, this.eq = 0, this.iR = 0, this.aV1 = 0, this.aV2 = 4, this.iQ = null, this.aUy = new Int16Array(9), this.dX = function() {
		this.iR = 1 + bK.dn(bR.es - 1, this.aV0), this.aV1 = 1 + bK.dn(bR.et - 1, this.aV0), this.iQ = new Array(this.iR * this.aV1), b9.pq.a1Q(this.iQ);
		var eo, eq, aUy = this.aUy,
			i = this.iR;
		for (eo = -1; eo <= 1; eo++)
			for (eq = -1; eq <= 1; eq++) aUy[3 * (1 + eq) + 1 + eo] = eq * i + eo
	}, this.pA = function(aV4, aB) {
		return this.iQ[aB].push(aV4), this.iQ[aB].length - 1
	}, this.aUq = function(aV5, aUZ, aUg) {
		var aV6, aV7, aUZ = bL.iP(aUZ),
			aUg = bL.iP(aUg);
		return aUZ === aUg ? aV5 : (aV6 = this.iQ[aUZ].pop(), this.iQ[aUZ].length === aV5 ? this.pA(aV6, aUg) : (aV7 = this.iQ[aUZ][aV5], this.iQ[aUZ][aV5] = aV6, bM.y.aTp[aV6] = aV5, this.pA(aV7, aUg)))
	}
}

function aTR() {
	function a0N(aUg, aV8) {
		if (! function(aUg, aTX) {
				var hj = bL.iO(aUg),
					aVC = Math.abs(bL.ep(aTX) - bL.ep(hj)),
					hj = Math.abs(bL.er(aTX) - bL.er(hj));
				return 0 !== Math.max(aVC, hj) && (function(aUZ, aUg, aVC, aVD) {
					var aVF = bL.i4(aUZ),
						aUZ = bL.i7(aUZ),
						aVH = bL.i4(aUg),
						aUg = bL.i7(aUg),
						aVH = aVH - aVF,
						aUg = aUg - aUZ,
						aVL = Math.abs(aVH),
						aVM = Math.abs(aUg),
						aVH = 0 < aVH ? 1 : 3,
						aUg = 0 < aUg ? 2 : 0;
					aVM < aVL ? aVP(aVF, aUZ, aVF + aVL, aUZ + aVM, aVH, aUg, aVC) : aVP(aUZ, aVF, aUZ + aVM, aVF + aVL, aUg, aVH, aVD)
				}(aUg, bL.iN(aTX), aVC, hj), !0)
			}(aUg, aV8)) return !1;
		if (0 === bN.fB[0]) return !!ac.h9(aV8 << 2);
		if (! function(aTX) {
				if (ac.h9(aTX << 2)) return 1;
				return function(aTX) {
					var aB, hT, aUX = bM.y.aUX,
						aVT = bL,
						eh = bN.fB[0],
						aVU = 4 * aTX;
					for (aB = eh - 1; 0 <= aB; aB--) {
						hT = aUX[aB];
						var aVV = aVU;
						if (aVU = aVT.iT(aVU, hT + 2 & 3), ac.h9(aVU)) return bN.fB[0] = aB, bN.fI[1] = aVU >> 2, bN.fI[2] = 1 + hT, bN.fI[4] = aVV, 1
					}
					return
				}(aTX)
			}(aV8)) return !1;
		if (bN.fI[2] && ac.em(bN.fI[4])) return !1;
		var aB, aV8 = bL.iO(aUg),
			vh = aAZ,
			aUX = bM.y.aUX,
			eh = bN.fB[0] - 1,
			aVU = 4 * aV8,
			hh = bL.hh;
		for (aB = 0; aB < eh; aB++)
			if (aVU += hh[aUX[aB]], 0 !== vh[aVU + 3] || 2 !== vh[aVU + 2]) return !!void 0;
		return !!1
	}

	function aVP(aVF, aVG, aVH, aVI, aVN, aVO, aVC) {
		for (var eq, aUX = bM.y.aUX, gF = 0, aVQ = 0, j = aVI - aVG, i = aVH - aVF, aVR = aVF % 16, aB = 1; aB <= aVC; aB++) aUX[gF++] = aVN, aUX[gF] = aVO, gF += (eq = (j * (aVR + (aB << 4)) + .5) / i >> 4) - aVQ, aVQ = eq;
		bN.fN(bN.fB, gF)
	}
	this.kZ = function(player, aV8) {
		var hT, hj, h5 = bL.hr(player, aV8);
		return h5 !== aV8 && (hT = bL.hi(h5, aV8), hj = bL.iS(h5, hT), !(!ac.h9(hj << 2) && (hT = bL.hp(h5, aV8, hT), hj = bL.iS(h5, hT), !ac.h9(hj << 2)) || (bN.fI[0] = hj, bN.fI[1] = aV8, bN.fI[2] = 0, hj !== aV8 && (!a0N(bL.iN(hj), aV8) ||
			0 !== bN.fI[2] && bL.hx(player, bN.fI[1] + bL.hg[bN.fI[2] - 1] << 2)))))
	}, this.pC = function(aV8) {
		var aUZ = bM.y.mC[bN.fI[3]];
		return bN.fI[1] = aV8, bN.fI[2] = 0, a0N(aUZ, aV8)
	}
}

function aTN() {
	var xh = 32,
		xg = new Array(2);

	function vW(f2) {
		var eo, eq, eT, i5, i2, hY = xh,
			a1t = b9.ph.vW(hY, hY),
			he = b9.ph.getContext(a1t, !0),
			hb = b9.ph.getImageData(he, hY, hY),
			vh = hb.data,
			ke = (hY >> 1) - .5,
			kf = Math.sqrt(ke * ke);
		for (vh.fill(255), eq = 0; eq < hY; eq++)
			for (eo = 0; eo < hY; eo++) i2 = eo - ke, i5 = eq - ke, eT = 4 * (eq * hY + eo), i2 = 714 * (kf - Math.sqrt(i2 * i2 + i5 * i5)) / kf, vh[2 + eT] = f2, vh[3 + eT] = 255 < i2 ? 0 : i2;
		return he.putImageData(hb, 0, 0), a1t
	}
	this.a4T = -1, this.dX = function() {
		this.a4T = -1, xg[0] || (xg[0] = vW(255), xg[1] = vW(0))
	}, this.aVX = function(he, eL, eo, eq, e1, aB) {
		b9.g2.gt(aD.eR) && (he.setTransform(eL *= 4 / 3 * .625, 0, 0, eL, eo - (e1 *= 4 / 3), eq - e1), he.drawImage(xg[+(bM.y.aTb[aB] === this.a4T)], 0, 0))
	}
}

function da() {
	this.aPW = [L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448), L(449), L(450)];
	var aVY = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.aAF = new Array(aVY.length), this.dX = function() {
		var g = bi.eE.data[155].value.split(";"),
			ke = g.length;
		if (function() {
				for (var eh = aVY.length, aB = 0; aB < eh; aB++) bW.aAF[aB] = aVY[aB]
			}(), !(ke > aVY.length))
			for (var aB = 0; aB < ke; aB++) g[aB].length && (this.aAF[aB] = g[aB])
	}, this.aPY = function(e2, code) {
		for (var aAF = this.aAF, aVa = aVY, pO = (aAF[e2] = code, ""), eh = aAF.length, aVb = [], aB = 0; aB < eh; aB++) aVb.push(aAF[aB] === aVa[aB] ? "" : aAF[aB]);
		eh--;
		for (aB = 0; aB < eh; aB++) pO += aVb[aB] + ";";
		bi.rB.rC(155, pO += aVb[eh])
	}, this.aPV = function() {
		bi.rB.rC(155, ""), this.dX()
	}, this.f2 = function(code, e2) {
		return code === this.aAF[e2] || code === this.aAF[e2 + 1]
	}
}

function dU() {
	var aVd = new Array(1),
		aVe = new Array(1),
		aVf = 20,
		eF = 0,
		aVg = !1;

	function aVi() {
		aVf++, bo.play()
	}
	this.dX = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aVe[aB] = 0, aVd[aB] = document.createElement("audio"), aVd[aB].src = src, aVd[aB].setAttribute("preload", "auto"), aVd[aB].setAttribute("controls", "none"), aVd[aB].style.display = "none", aVd[aB].onpause = function() {
					aVe[aB] = 1
				}, aVd[aB].oncanplaythrough = function() {
					aVe[aB] = 0 === aVe[aB] ? 1 : aVe[aB]
				}, document.body.appendChild(aVd[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aVg = !0
		}
	}, this.tK = function() {
		if (aVg) {
			aVg = !1;
			for (var aB = 0; 0 <= aB; aB--) aVd[aB].onpause = null, aVd[aB].oncanplaythrough = null, document.body.removeChild(aVd[aB]), aVd[aB] = null
		}
	}, this.play = function() {
		if (aVg) {
			var dm = performance.now();
			if (eF + 66 < dm)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aVe[aB]) return eF = dm, aVe[aB] = 2, void aVd[aB].play();
			0 < aVf && (aVf--, setTimeout(aVi, 66))
		}
	}
}

function cW() {
	this.a71 = function() {
		var aVl;
		return !(al.jx < 3 || ag.gU[lB[0]] >= aD.jg >> 1) && (aD.hW ? (aVl = ae.aH0(), !(2 * ae.aH1(bg.l8()) >= aVl)) : function() {
			var aVl = ae.aH0();
			if (2 * ag.gi[lB[0]] >= aVl) return !1;
			return !0
		}())
	}
}

function c7() {
	this.dX = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aUa = aD.jw, gi = ag.gi, aB = 0; aB < aUa; aB++) gi[aB] = 512;
			var aUb = aD.wD,
				k9 = aE.k9,
				hL = aE.hL;
			for (aB = aUa; aB < aUb; aB++) gi[aB] = k9[hL[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var eh = aD.wD, gi = ag.gi, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < eh; aB++) gi[aB] = sResourcesValue
		} : function() {
			for (var eh = aD.wD, gi = ag.gi, sResourcesData = aD.data.sResourcesData, aB = 0; aB < eh; aB++) gi[aB] = sResourcesData[aB]
		})();
		bc.li[8] = ag.gi[aD.eR]
	}
}

function dL() {
	var aVq = 501,
		aVs = (this.aVr = new Uint32Array(aVq), this.a2Y = new Uint32Array(aVq), this.a9u = new Uint16Array(aVq), this.aPe = 0, 1),
		aVt = 0;

	function aVw(self) {
		self.max.fill(0)
	}

	function aVy(self, aB) {
		self.max[0] = Math.max(self.aVr[aB], self.max[0]), self.max[1] = Math.max(self.a2Y[aB], self.max[1]), self.max[2] = Math.max(self.a9u[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aVu = 0, this.li = new Array(21), this.aVv = null, this.dY = function() {
		this.aVv = [L(451), L(452), L(453), L(454), L(455), L(456), L(457), L(458), L(289), L(290), L(459), L(460), L(461), L(462), "", L(463), L(464), L(465), L(249), L(466), L(467)]
	}, this.dX = function() {
		this.aPe = 0, aVs = 1, this.aVu = 0, aVt = 0, aVw(this), this.li.fill(0)
	}, this.p5 = function(player, iG) {
		b9.g2.a2T(player) && (this.li[0] += iG + 1, this.li[1]++, this.li[12] += bN.fE[1])
	}, this.oV = function(player, oA) {
		__fx.donationsTracker.logDonation(player, oA, bN.fE[0]);
		player === aD.eR && (aN.oV(bN.fE[0], bN.fE[1], oA), this.li[12] += bN.fE[1], this.li[16] += bN.fE[0]), oA === aD.eR && (aN.a5o(bN.fE[0], player), this.li[10] += bN.fE[0])
	}, this.p8 = function(player) {
		b9.g2.a2T(player) && (this.li[2]++, this.li[12] += bN.fE[1])
	}, this.pJ = function(player) {
		b9.g2.a2T(player) && (this.li[19]++, this.li[12] += bN.fE[1])
	}, this.aUV = function(player) {
		b9.g2.a2T(player) && this.li[20]++
	}, this.g6 = function(player, a3F, e2) {
		b9.g2.a2T(player) && (this.li[e2] += a3F)
	}, this.ir = function() {
		var self;
		this.aVu || 0 < aVt-- || ((self = this).aVr[self.aPe] = ag.gU[aD.eR], self.a2Y[self.aPe] = ag.gi[aD.eR], self.a9u[self.aPe] = ae.a9v(aD.eR), aVy(self, self.aPe), self.aPe++, self.aPe === aVq && function(self) {
			aVw(self), aVy(self, 0), self.aPe = 1 + bK.dn(aVq, 2);
			for (var aB = 1; aB < self.aPe; aB++) self.aVr[aB] = self.aVr[2 * aB], self.a2Y[aB] = self.a2Y[2 * aB], self.a9u[aB] = self.a9u[2 * aB], aVy(self, aB);
			aVs *= 2
		}(self), aVt = aVs - 1, bd.lZ(), 0 === ag.lm[aD.eR] && (self.aVu = be.jt()))
	}
}

function dM() {
	this.i = 0, this.j = 0, this.s5 = 0, this.s6 = 0, this.aW0 = 0, this.aW1 = 0, this.a7E = 0, this.sn = 0;
	var aW3 = this.aW2 = 0;
	this.aW4 = 0, this.aW5 = 0, this.aW6 = 0, this.a6a = 0, this.e2 = 0, this.a9X = null, this.hO = !1, this.aW7 = -1, this.aW8 = !1, this.aW9 = [0, 0], this.dY = function() {
		this.a9X = [L(468), L(121, 0, "Balance"), L(120, 0, "Interest"), L(469)]
	}, this.dX = function() {
		this.hO = !1, this.aW7 = -1, this.aW8 = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var ek = a0.a1.r7() && h.i < h.j ? 1 : a0.a1.r7() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(ek * this.i), this.i -= a0.a1.r7() && h.i < h.j ? 2 * bb.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6a = Math.floor(this.j / 150), this.a6a = Math.max(this.a6a, 1.5), this.s5 = Math.floor(1 + .02 * this
			.i), this.s6 = Math.floor(1 + .04 * this.i), this.a7E = this.s6, aW3 = Math.floor(.75 * this.a7E), this.sn = Math.floor(1 + .075 * this.i), this.aW4 = Math.floor(1 + .1125 * this.i), this.aW5 = Math.floor(this.i * (a0.a1.r7() ? .03 :
				.029)), this.aW5 = Math.max(this.aW5, 4), this.aW6 = Math.floor(.035 * this.i), this.aW6 = Math.max(this.aW6, 4), this.aW2 = this.j - 2 * this.a7E - this.sn - this.aW4, this.hO && this.aWA()
	}, this.gu = function(kz, l0) {
		var wG, wF;
		return !!this.hO && (wF = kz, wG = l0, kz -= bK.dn(h.i - this.i, 2), l0 -= bK.dn(h.j - this.j, 2), kz < 0 || l0 < 0 || kz >= this.i || l0 >= this.j || kz >= this.i - this.aW4 && l0 < this.aW4 ? -1 !== aM.gu(wF, wG) || bB.gu(wF, wG) ||
			this.r0() : l0 < this.aW4 || (l0 < this.j - this.sn ? (this.aW8 = !0, this.aW7 = (kz - 2 * this.s5 - this.aW0) / this.aW1, 3 !== this.e2 && (be.df = !0)) : (wF = (wF = Math.floor(kz / (this.i / this.a9X.length))) < 0 ? 0 : wF >=
				this.a9X.length ? this.a9X.length - 1 : wF) !== this.e2 && (this.e2 = wF, this.aWA(), be.df = !0)), !0)
	}, this.a0Y = function(kz, l0) {
		return this.aW9[0] = kz, this.aW9[1] = l0, !(!this.hO || !this.aW8 || (kz -= bK.dn(h.i - this.i, 2), l0 = this.aW7, this.aW7 = (kz - 2 * this.s5 - this.aW0) / this.aW1, (0 <= this.aW7 && this.aW7 <= 1 || 0 <= l0 && l0 <= 1) && (be.df = !
			0), 0))
	}, this.a0x = function() {
		this.aW8 && (this.aW8 = !1)
	}, this.a19 = function() {
		this.hO ? this.r0() : this.show()
	}, this.show = function() {
		bc.aPe < 2 || (this.hO = !0, this.aWA())
	}, this.r0 = function() {
		this.hO = !1, this.aW7 = -1, be.df = !0
	}, this.aWA = function() {
		this.e2 < 2 ? this.aW0 = aQ.measureText(b9.qh.yM(bc.max[this.e2]), b9.ph.rY(0, this.aW5)) : 2 === this.e2 && (this.aW0 = aQ.measureText(b9.qh.a38(6, 2), b9.ph.rY(0, this.aW5))), this.aW1 = this.i - 2 * this.s5 - this.aW0 - this.s6
	}, this.lZ = function() {
		this.hO && this.aWA()
	}, this.tq = function() {
		this.hO && this.a7V()
	}, this.a7V = function() {
		var eo = bK.dn(h.i - this.i, 2),
			eq = bK.dn(h.j - this.j, 2);
		tr.setTransform(1, 0, 0, 1, eo, eq), tr.fillStyle = bA.mk, tr.fillRect(0, this.aW4, this.i, this.j - this.aW4), this.aWB(), this.aOT(), tr.strokeRect(0, 0, this.i, this.j), b9.ph.textAlign(tr, 2), tr.font = b9.ph.rY(0, this.aW5), 0 ===
			this.e2 ? this.aWC(bc.aVr, eo, eq) : 1 === this.e2 ? this.aWC(bc.a2Y, eo, eq) : 2 === this.e2 ? this.aWD(eo, eq) : 3 === this.e2 && (this.aWE(eo, eq), this.aWF(eo, eq)), aM.a4t(Math.floor(eo + this.i - .725 * this.aW4), Math.floor(
				eq + .275 * this.aW4), Math.floor(.45 * this.aW4)), tr.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aWB = function() {
		var aB, dm;
		for (tr.lineWidth = this.a6a, b9.ph.textBaseline(tr, 1), b9.ph.textAlign(tr, 1), tr.strokeStyle = bA.mn, tr.font = b9.ph.rY(1, this.aW6), dm = this.i / this.a9X.length, tr.fillStyle = bA.n9, tr.fillRect(this.e2 * dm, this.j - this.sn, dm,
				this.sn), tr.fillStyle = bA.mn, tr.fillRect(0, this.j - this.sn - .5 * this.a6a, this.i, this.a6a), aB = 1; aB <= 3; aB++) tr.fillRect(aB * dm, this.j - this.sn, this.a6a, this.sn);
		for (aB = this.a9X.length - 1; 0 <= aB; aB--) tr.fillText(b9.xG.a25(this.a9X[aB], 0, .9 * dm), (aB + .5) * dm, this.j - .46 * this.sn)
	}, this.aOT = function() {
		tr.fillStyle = bA.nZ, tr.fillRect(0, 0, this.i, this.aW4), tr.fillStyle = bA.mn, tr.fillRect(0, this.aW4 - .5 * this.a6a, this.i, this.a6a), tr.font = b9.ph.rY(1, .39 * this.aW4), tr.fillText(b9.xG.a25(L(470), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aW4))
	}, this.aWC = function(g, eo, eq) {
		var ke = bc.max[this.e2],
			a1S = (tr.setTransform(1, 0, 0, 1, eo + 2 * this.s5 + this.aW0, eq + this.a7E + this.aW4), tr.lineWidth = 2, this.aW2 / Math.sqrt(ke));
		tr.beginPath(), tr.moveTo(this.aW1, this.aW2 - a1S * Math.sqrt(g[bc.aPe - 1]));
		for (var aB = bc.aPe - 2; 0 <= aB; aB--) tr.lineTo(aB * this.aW1 / (bc.aPe - 1), this.aW2 - a1S * Math.sqrt(g[aB]));
		tr.stroke();
		eo = this.a4t(g, a1S, .5);
		eo < .95 && tr.fillText(b9.qh.yM(ke), -this.s5, 0), .05 < Math.abs(eo - .5) && tr.fillText(b9.qh.yM(Math.floor(ke / 4)), -this.s5, Math.floor(this.aW2 / 2)), .05 < eo && tr.fillText("0", -this.s5, this.aW2)
	}, this.aWD = function(eo, eq) {
		tr.setTransform(1, 0, 0, 1, eo + 2 * this.s5 + this.aW0, eq + this.a7E + this.aW4), tr.lineWidth = 2;
		var a1S = this.aW2 / Math.max(bc.max[this.e2], 1);
		tr.beginPath(), tr.moveTo(this.aW1, this.aW2 - a1S * bc.a9u[bc.aPe - 1]);
		for (var aB = bc.aPe - 2; 0 <= aB; aB--) tr.lineTo(aB * this.aW1 / (bc.aPe - 1), this.aW2 - a1S * bc.a9u[aB]);
		tr.stroke();
		eo = this.a4t(bc.a9u, a1S, 1), eq = bc.max[this.e2] / 100;
		eo < .95 && tr.fillText(b9.qh.a38(eq, 2), -this.s5, 0), .05 < Math.abs(eo - .5) && tr.fillText(b9.qh.a38(eq / 2, 2), -this.s5, Math.floor(this.aW2 / 2)), .05 < eo && tr.fillText(b9.qh.a38(0, 2), -this.s5, this.aW2)
	}, this.aWE = function(eo, eq) {
		tr.setTransform(1, 0, 0, 1, eo + .34 * this.i, eq + 2 * aW3 + this.aW4), b9.ph.textAlign(tr, 2);
		for (var a9I = this.j - 4 * aW3 - this.sn - this.aW4, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) tr.fillText(b9.xG.a25(bc.aVv[g[aB]], 0, .31 * this.i), 0, aB * a9I / 9);
		var f9 = bc.li;
		for (tr.setTransform(1, 0, 0, 1, eo + .39 * this.i, eq + 2 * aW3 + this.aW4), b9.ph.textAlign(tr, 0), tr.fillText(b9.qh.a38(100 * f9[0] / (1024 * Math.max(f9[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) tr.fillText(f9[g[aB]].toString(), 0,
			aB * a9I / 9);
		tr.fillText(b9.qh.a38(100 * (1 - ag.gU[aD.eR] / f9[7]), 0), 0, a9I)
	}, this.aWF = function(eo, eq) {
		tr.setTransform(1, 0, 0, 1, eo + .79 * this.i, eq + 2 * aW3 + this.aW4), b9.ph.textAlign(tr, 2);
		var aB, a9I = this.j - 4 * aW3 - this.sn - this.aW4;
		for (tr.fillStyle = bA.n4, aB = 2; 0 <= aB; aB--) tr.fillText(b9.xG.a25(bc.aVv[aB + 8], 0, .31 * this.i), 0, aB * a9I / 9);
		tr.fillText(b9.xG.a25(bc.aVv[18], 0, .31 * this.i), 0, 3 * a9I / 9), tr.fillStyle = bA.n3, tr.fillText(b9.xG.a25(bc.aVv[11], 0, .31 * this.i), 0, 4 * a9I / 9), tr.fillStyle = bA.nM, tr.fillText(b9.xG.a25(bc.aVv[13], 0, .31 * this.i), 0,
				5 * a9I / 9), tr.fillText(b9.xG.a25(bc.aVv[15], 0, .31 * this.i), 0, 6 * a9I / 9), tr.fillText(b9.xG.a25(bc.aVv[16], 0, .31 * this.i), 0, 7 * a9I / 9), tr.fillText(b9.xG.a25(bc.aVv[12], 0, .31 * this.i), 0, 8 * a9I / 9), tr
			.fillStyle = bA.nL, tr.fillText(b9.xG.a25(bc.aVv[17], 0, .31 * this.i), 0, a9I), tr.fillStyle = bA.n4;
		var f9 = bc.li,
			aD5 = f9[8] + f9[9] + f9[10] + f9[18],
			aD5 = b9.qh.yM(aD5),
			aNE = tr.measureText(aD5).width,
			eo = (tr.setTransform(1, 0, 0, 1, eo + .83 * this.i + aNE, eq + 2 * aW3 + this.aW4), tr.fillText(b9.qh.yM(f9[8]), 0, 0), tr.fillText(b9.qh.yM(f9[9]), 0, a9I / 9), tr.fillText(b9.qh.yM(f9[10]), 0, 2 * a9I / 9), tr.fillText(b9.qh.yM(f9[
				18]), 0, 3 * a9I / 9), tr.fillStyle = bA.n3, tr.fillText(aD5, 0, 4 * a9I / 9), tr.fillStyle = bA.nM, tr.fillText(b9.qh.yM(f9[13]), 0, 5 * a9I / 9), tr.fillText(b9.qh.yM(f9[15]), 0, 6 * a9I / 9), tr.fillText(b9.qh.yM(f9[16]),
				0, 7 * a9I / 9), tr.fillText(b9.qh.yM(f9[12]), 0, 8 * a9I / 9), f9[12] + f9[13] + f9[15] + f9[16]);
		tr.fillStyle = bA.nL, tr.fillText(b9.qh.yM(eo), 0, a9I), tr.fillStyle = bA.mn
	}, this.a4t = function(g, a1S, a86) {
		var aB, e, fO;
		return this.aW7 < 0 || 1 < this.aW7 ? .25 : (aB = this.aW7 * (bc.aPe - 1), fO = g[e = Math.floor(aB)], fO += (aB - e) * (g[e < bc.aPe - 1 ? e + 1 : e] - fO), tr.strokeStyle = bA.mq, .04 < this.aW7 && this.aWH(0, this.aW2 - a1S * Math.pow(
				fO, a86), aB * this.aW1 / (bc.aPe - 1), this.aW2 - a1S * Math.pow(fO, a86)), .04 < fO / bc.max[this.e2] && this.aWH(aB * this.aW1 / (bc.aPe - 1), this.aW2, aB * this.aW1 / (bc.aPe - 1), this.aW2 - a1S * Math.pow(fO, a86)), tr
			.fillStyle = bA.nO, tr.beginPath(), tr.arc(aB * this.aW1 / (bc.aPe - 1), this.aW2 - a1S * Math.pow(fO, a86), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tr.fill(), g = this.aW7 * be.a9w, g = 0 === ag.lm[aD.eR] ? Math.floor(g * bc
				.aVu) : Math.floor(g * be.jt()), tr.fillStyle = bA.mn, tr.fillText(1 === a86 ? b9.qh.a38(fO / 100, 2) : b9.qh.yM(Math.floor(fO)), -this.s5, this.aW2 - a1S * Math.pow(fO, a86)), b9.ph.textAlign(tr, 1), tr.fillText(aW.a9l(g),
				aB * this.aW1 / (bc.aPe - 1), this.aW2 + this.aW5 - (a0.a1.r7() ? 2 : 0) - this.a6a), b9.ph.textAlign(tr, 2), a1S * Math.pow(fO, a86) / this.aW2)
	}, this.aWH = function(mD, mE, mQ, mR) {
		tr.beginPath(), tr.moveTo(mD, mE), tr.lineTo(mQ, mR), tr.stroke()
	}
}

function bv() {
	this.aWI = "https://", this.aWJ = this.aWI + "territorial.io/", this.aPf = this.aWJ + "changelog", this.aPj = this.aWJ + "terms", this.aWK = this.aWJ + "cookie_policy", this.aP6 = this.aWJ + "privacy", this.aPi = this.aWJ + "tutorial", this.aPh =
		this.aWJ + "players", this.aPg = this.aWJ + "clans", this.zp = this.aWJ + "clan-results", this.aMN = "https://patreon.com/c/territorial", this.aBE = this.aWI + "play.google.com/store/apps/details?id=territorial.io", this.a07 = this.aWI +
		"apps.apple.com/app/id1581110913", this.aWL = this.aWI + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aBF = this.aWI + "discord.gg/pthqvpTXmh", this.aBG = this.aWI + "www.instagram.com/davidtschacher/", this.xw =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d4() {
	this.y = new aWM, this.xD = new aWN, this.dX = function() {
		this.y.dX()
	}, this.ir = function() {
		0 !== this.y.a5x && this.y.a5x--
	}
}

function aWN() {
	this.tq = function() {
		if (0 !== bO.y.a5x && (tr.globalAlpha = Math.min(bO.y.a5x / 580, 1), tr.drawImage(bO.y.aWQ, 1 + aS.xB(), 1 + aS.xC()), tr.globalAlpha = 1, aD.h2)) {
			for (var mD = iH / iI, mE = iJ / iI, mQ = (h.i + iH) / iI, mR = (h.j + iJ) / iI, gF = bO.y.aWR * iI, aWS = bO.y.aWS, aB = aD.jw - 1; 0 <= aB; aB--) ! function(aB, gF, mD, mE, mQ, mR, aWS) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB];
				if (highlight) gF *= 2;
				0 === ag.lm[aB] || 0 === ag.gU[aB] || (mQ = h.i * ((ag.iV[aB] + ag.iW[aB] + 1) / 2 - mD) / (mQ - mD) - .5 * gF, mD = h.j * ((ag.iX[aB] + ag.iY[aB] + 1) / 2 - mE) / (mR - mE) - .5 * gF, mQ > h.i) || mD > h.j || mQ < -gF || mD <
					-gF || (tr.setTransform(highlight ? iI * 2 : iI, 0, 0, highlight ? iI * 2 : iI, mQ, mD), tr.drawImage(aWS[aD.hW ? bf.ef[aB] : 1], 0, 0))
			}(aB, gF, mD, mE, mQ, mR, aWS);
			tr.setTransform(iI, 0, 0, iI, 0, 0)
		}
	}
}

function aWM() {
	this.aWR = 28, this.a5x = 0, this.aWQ = null;
	var aWU = this.aWS = null;

	function aWX(hY, aWY) {
		var eo, eq, eT, i2, a1t = b9.ph.vW(hY, hY),
			he = b9.ph.getContext(a1t, !0),
			hb = b9.ph.getImageData(he, hY, hY),
			vh = hb.data,
			ke = (hY >> 1) - .5,
			aWZ = .5 + ke;
		for (aWZ *= aWZ, eq = 0; eq < hY; eq++)
			for (eo = 0; eo < hY; eo++) i2 = (i2 = eo - ke) * i2 + (i2 = eq - ke) * i2, vh[eT = 4 * (eq * hY + eo)] = aWY[0], vh[1 + eT] = aWY[1], vh[2 + eT] = aWY[2], vh[3 + eT] = (aWZ - i2) * aWY[3] / aWZ;
		return he.putImageData(hb, 0, 0), a1t
	}

	function aVX(aB, he, a1t, hY) {
		var highlight, eo, eq;
		0 !== ag.lm[aB] && 0 !== ag.gU[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hY *= 2), eo = ag.iV[aB] + ag.iW[aB] + 1 - hY - 2 >> 1, eq = ag.iX[aB] + ag.iY[aB] + 1 - hY - 2 >> 1, highlight ? he
			.drawImage(a1t[aD.hW ? 9 === aD.kD && 5 === aE.hL[aB] ? 3 : bf.ef[aB] : aB < aD.jw ? 1 : 0], eo, eq, hY, hY) : he.drawImage(a1t[aD.hW ? 9 === aD.kD && 5 === aE.hL[aB] ? 3 : bf.ef[aB] : aB < aD.jw ? 1 : 0], eo, eq))
	}
	this.dX = function() {
		var rL;
		this.a5x = 700,
			function(rL) {
				var hY = rL.aWR;
				if (rL.aWS = [], aWU = [], aD.hW) {
					for (var aB = 0; aB <= aD.wK; aB++) rL.aWS.push(aWX(hY, bf.aUO[bf.kI[aB]])), aWU.push(aWX(hY >> 1, bf.aUO[bf.kI[aB]]));
					9 === aD.kD && aWU.push(aWX(hY, bf.aUO[1]))
				} else rL.aWS.push(aWX(hY, bf.aUO[7])), rL.aWS.push(aWX(hY, bf.aUO[4])), aWU.push(aWX(hY >> 1, bf.aUO[7]))
			}(this),
			function(rL, aWa) {
				var aB, aWQ = rL.aWQ,
					he = b9.ph.getContext(aWQ, !0),
					eh = aD.ee,
					hY = rL.aWR >> 1;
				he.imageSmoothingEnabled = !1, he.setTransform(1, 0, 0, 1, 0, 0), aWa && he.clearRect(0, 0, aWQ.width, aWQ.height);
				if (9 === aD.kD) {
					hY <<= 1;
					rL = ay.kM[5];
					for (aB = eh - rL; aB < eh; aB++) aVX(aB, he, aWU, hY);
					eh -= rL, hY >>= 1
				}
				for (aB = aD.jw; aB < eh; aB++) aVX(aB, he, aWU, hY)
			}(this, null !== (rL = this).aWQ && rL.aWQ.width === bR.es - 2 && rL.aWQ.height === bR.et - 2 || (rL.aWQ = b9.ph.vW(bR.es - 2, bR.et - 2), !1)), aD.h2 || this.a3Q()
	}, this.aUN = aWX, this.a3Q = function() {
		for (var eh = aD.jw, hY = this.aWR, aWS = this.aWS, he = b9.ph.getContext(this.aWQ, !0), aB = 0; aB < eh; aB++) aVX(aB, he, aWS, hY)
	}
}

function d5() {
	function aWd() {
		8 === aD.kD && 1 === aD.z4 && bQ.yh.z3()
	}

	function aWc(player) {
		aD.h2 ? (ak.aFo(player), al.aIn(), aD.kF && aD.oz.ir()) : b2.aBW(player)
	}
	this.oP = function(player) {
		aN.zG(player, player === aD.eR ? 21 : 22), aWc(player), aWd()
	}, this.ow = function(player) {
		1 === aD.z4 && 0 !== ag.lm[player] && 2 !== ag.a2P[player] && aWc(player), aD.z7--, aD.z6--, aN.zG(player, 4), b9.g2.gs(2) && aW.lY(!0), aWd()
	}
}

function dF() {
	this.aRz = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a9F = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bA.mn, "rgb(170,170,170)"
	], this.aWe = [bA.mn, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bA.mn, bA.me], this.aWf = [bA.me, bA.mn, bA.mn, bA.mn, bA.me, bA.me, bA.me, bA.me, bA.mn];
	var aWg = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aWh = (this.aIF = ["rgba(" + aWg[0] + ",", "rgba(" + aWg[1] + ",", "rgba(" + aWg[2] + ",", "rgba(" + aWg[3] + ",", "rgba(" + aWg[4] + ",", "rgba(" + aWg[5] + ",", "rgba(" + aWg[6] + ",", "rgba(" + aWg[7] + ",", "rgba(" + aWg[8] + ",",
			"rgba(" + aWg[9] + ","
		], this.aIG = ["rgb(" + aWg[0] + ")", "rgb(" + aWg[1] + ")", "rgb(" + aWg[2] + ")", "rgb(" + aWg[3] + ")", "rgb(" + aWg[4] + ")", "rgb(" + aWg[5] + ")", "rgb(" + aWg[6] + ")", "rgb(" + aWg[7] + ")", "rgb(" + aWg[8] + ")", "rgb(" + aWg[
			9] + ")"
		], this.zP = null, this.aUO = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		]);
	this.kI = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.ef = new Uint8Array(aD.ee), this.a9G = new Uint8Array(aD.ee), this.wQ = new Uint16Array(aD.ee), this.wR = new Uint16Array(this.kI.length + 1), this.wS = new Uint16Array(this.kI.length), this.dY =
		function() {
			this.zP = [L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478), L(479)]
		}, this.dX = function() {
			if (this.ef.fill(0), this.aWi(), aD.hW) {
				if (9 === aD.kD) {
					for (var ef = bf.ef, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) ef[aB] = 1;
					var eh = aD.ee;
					for (aB = aD.data.teamPlayerCount[7]; aB < eh; aB++) ef[aB] = 2;
					bf.kI[1] = 7, bf.kI[2] = 8
				} else aD.kF ? function() {
					var colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.jw - 1; 0 <= aB; aB--) colorsData[aB] = ax.jE(262144);
					var aWt = 0,
						ex = 768,
						aRT = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var ek = 0, f1 = 0; f1 < 3; f1++) ek += Math.abs(aWh[aB][f1] - aRT[f1]);
							ek < ex && (aWt = aB, ex = ek)
						} var aWu = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aWu[aB] = teamPlayerCount[aB];
					var kI = bf.kI,
						aWv = new Uint8Array(9),
						g9 = (kI[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aWu[aB] && (aWv[aB] = g9, kI[g9++] = aB);
					var jD = aD.jw,
						ef = bf.ef;
					aWu[aWt] ? (aWu[aWt]--, ef[0] = aWv[aWt]) : jD = 0;
					var f2 = 0;
					for (aB = jD; aB < aD.wD; aB++) {
						var hU = kI[f2];
						if (aWu[hU]) aWu[hU]--, ef[aB] = aWv[hU];
						else if (aB--, 9 <= ++f2) return console.log("error 325")
					}
				}() : this.ir();
				! function() {
					for (var eh = aD.ee, wQ = bf.wQ, wR = bf.wR, wS = bf.wS, ef = bf.ef, kI = bf.kI, wJ = kI.length, eE = new Array(wJ), aB = 0; aB < wJ; aB++) eE[aB] = [];
					for (aB = 0; aB < eh; aB++) eE[kI[ef[aB]]].push(aB);
					for (aB = 1; aB <= wJ; aB++) wR[aB] = wR[aB - 1] + eE[aB - 1].length;
					for (aB = 0; aB < wJ; aB++)
						for (var g9 = eE[aB].length, ke = wR[aB], hU = 0; hU < g9; hU++) wQ[hU + ke] = eE[aB][hU];
					var jw = aD.jw;
					for (aB = 0; aB < wJ; aB++)
						for (g9 = eE[aB].length, ke = wR[aB], hU = 0; hU < g9; hU++)
							if (wQ[hU + ke] >= jw) {
								wS[aB] = hU;
								break
							}
				}(), ! function() {
					for (var eh = aD.ee, ef = bf.ef, a9G = bf.a9G, kI = bf.kI, aB = 0; aB < eh; aB++) a9G[aB] = kI[ef[aB]];
					9 === aD.kD && a9G.fill(1, eh - ay.kM[5])
				}()
			}
		}, this.aWi = function() {
			for (var aB = this.kI.length - 1; 0 <= aB; aB--) this.kI[aB] = aB
		}, this.ir = function() {
			var hm = new Uint8Array(aD.jw),
				hn = new Uint8Array(aD.jw),
				aWn = new Uint16Array(8),
				aWo = new Uint16Array(this.kI.length);
			this.aWp(hm, hn, aWn, 1), this.aFR(aWn), this.aWq(aWo, hm, hn), this.aWr(hm, hn, aWo), this.aWs()
		}, this.aWp = function(hm, hn, aWu, aWw) {
			for (var f1, e, aWx, eh = this.kI.length - aWw, g = new Uint16Array(eh), colorsData = aD.data.colorsData, aB = aD.jw - 1; 0 <= aB; aB--) {
				for (f1 = eh; aWw <= f1; f1--) g[f1 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aWh[f1][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aWh[f1][1]) + Math.abs(4 * (63 & colorsData[aB]) - aWh[f1][2]);
				for (aWx = 768, f1 = eh - 1; 0 <= f1; f1--) g[e = (f1 + aB) % eh] < aWx && (aWx = g[e], hm[aB] = e);
				for (aWu[hm[aB]] += 4, aWx = 768, f1 = eh - 1; 0 <= f1; f1--) g[e = (f1 + aB) % eh] < aWx && e !== hm[aB] && (aWx = g[e], hn[aB] = e);
				aWu[hn[aB]]++
			}
		}, this.aFR = function(aWu) {
			for (var f1, kg, eh = this.kI.length - 1, aB = eh; 0 <= aB; aB--) this.kI[aB] = aB;
			for (aB = eh - 1; 0 <= aB; aB--) aWu[aB]++;
			for (aB = 1; aB <= eh; aB++) {
				for (kg = 0, f1 = 1; f1 < eh; f1++) aWu[f1] > aWu[kg] && (kg = f1);
				aWu[kg] = 0, this.kI[aB] = kg + 1
			}
		}, this.aWq = function(aWo, hm, hn) {
			var f1, zj, f2, ek, e, mP, sM, aWy = this.kI.length - 1,
				qB = new Uint16Array(aWy),
				aWz = [],
				aX0 = 0,
				zi = [],
				aX1 = [];
			loop: for (var aB = 0; aB < aD.jw; aB++)
				if (null !== (zj = b9.qh.zk(ag.zh[aB]))) {
					for (f1 = zi.length - 1; 0 <= f1; f1--)
						if (zj === zi[f1]) {
							aX1[f1].push(aB), aX0 = Math.max(aX0, aX1[f1].length);
							continue loop
						} zi.push(zj), aWz.push(!1), aX1.push([aB]), aX0 = Math.max(aX0, 1)
				}
			for (; 2 < aD.wK && aX0 > bK.dn(aD.jw, aD.wK);) aD.wK--, aD.kD--;
			for (f1 = zi.length - 1; 0 <= f1; f1--) {
				for (ek = -1, f2 = zi.length - 1; 0 <= f2; f2--) !aWz[f2] && (-1 === ek || aX1[f2].length > aX1[ek].length) && (ek = f2);
				for (f2 = aWy - 1; 0 <= f2; f2--) qB[f2] = 1;
				for (f2 = aX1[ek].length - 1; 0 <= f2; f2--) qB[hm[aX1[ek][f2]]] += 3, qB[hn[aX1[ek][f2]]]++;
				for (aB = aWy - 1; 0 <= aB; aB--) {
					for (e = ek % aWy, f2 = aWy - 1; 0 <= f2; f2--) qB[f2] > qB[e] && (e = f2);
					for (mP = -1, f2 = aD.wK; 0 < f2; f2--)
						if (this.kI[f2] === e + 1) {
							mP = f2;
							break
						} if (qB[e] = 0, -1 !== mP) {
						for (sM = 0, f2 = aD.wK; 0 < f2; f2--) aWo[mP] > aWo[f2] && sM++;
						if (sM !== aD.wK - 1) {
							for (f2 = aX1[ek].length - 1; 0 <= f2; f2--) aWo[mP]++, this.ef[aX1[ek][f2]] = mP;
							break
						}
					}
				}
				aWz[ek] = !0
			}
		}, this.aWr = function(hm, hn, aWo) {
			for (var aB, i1, eh = this.kI.length - 1, border = bK.dn(aD.jw, aD.wK), aX2 = (0 < aD.jw % aD.wK && border++, new Uint8Array(1 + eh)), f1 = eh; 1 <= f1; f1--) aX2[this.kI[f1]] = f1;
			for (aB = 0; aB < aD.jw; aB++) i1 = aX2[hm[aB] + 1], 0 === this.ef[aB] && i1 <= aD.wK && aWo[i1] < border && (aWo[i1]++, this.ef[aB] = i1);
			for (aB = 0; aB < aD.jw; aB++) i1 = aX2[hn[aB] + 1], 0 === this.ef[aB] && i1 <= aD.wK && aWo[i1] < border && (aWo[i1]++, this.ef[aB] = i1);
			for (f1 = aD.wK; 1 <= f1; f1--)
				for (aB = aD.jw - 1; 0 <= aB && !(aWo[f1] >= border); aB--) 0 === this.ef[aB] && (aWo[f1]++, this.ef[aB] = f1)
		}, this.aWs = function() {
			for (var aB = aD.jw; aB < aD.ee; aB++) this.ef[aB] = 1 + aB % aD.wK
		}
}

function gV() {
	for (var eo, eq, aB = fb - 1; 0 <= aB; aB--) eo = bK.dn(fd[aB], 4) % bR.es, eq = bK.dn(fd[aB], 4 * bR.es), ag.iV[fW] = Math.min(eo, ag.iV[fW]), ag.iX[fW] = Math.min(eq, ag.iX[fW]), ag.iW[fW] = Math.max(eo, ag.iW[fW]), ag.iY[fW] = Math.max(eq, ag
		.iY[fW])
}

function fq() {
	var ek, gE, aB, eh = ag.g8[fW].length,
		ej = ac.ej;
	loop: for (aB = eh - 1; 0 <= aB; aB--) {
		for (ek = 3; 0 <= ek; ek--)
			if (gE = ag.g8[fW][aB] + ej[ek], ac.eY(gE) || ac.gG(gE) && ac.eZ(gE) !== fW) {
				ac.jA(ag.g8[fW][aB], fW);
				continue loop
			} ag.g8[fW][aB] = ag.g8[fW][eh - 1], ag.g8[fW].pop(), eh--
	}
}

function fr() {
	var player = fW,
		gM = ag.gM,
		gN = ag.gN,
		f7 = ag.f7,
		eh = gM[player].length,
		ej = ac.ej;
	loop: for (var aB = eh - 1; 0 <= aB; aB--) {
		for (var aX3 = !1, aX4 = !1, ek = 3; 0 <= ek; ek--) {
			var gE = gM[player][aB] + ej[ek];
			if (ac.aFb(gE, player)) continue loop;
			aX3 = aX3 || ac.h9(gE), aX4 = aX4 || ac.aFa(gE)
		}
		aX3 ? gN[player].push(gM[player][aB]) : aX4 ? f7[player].push(gM[player][aB]) : ac.wm(gM[player][aB], player), gM[player][aB] = gM[player][eh - 1], gM[player].pop(), eh--
	}
}

function gK() {
	ag.gU[fa] -= fb
}

function gL(border) {
	for (var eh = border.length, aB = eh - 1; 0 <= aB; aB--) ac.x6(fa, border[aB]) || (border[aB] = border[eh - 1], border.pop(), eh--)
}

function gO(border) {
	for (var eh = border.length, aB = eh - 1; 0 <= aB; aB--) !ac.x6(fa, border[aB]) && ac.ec(border[aB]) && (border[aB] = border[eh - 1], border.pop(), eh--)
}

function gP(border) {
	for (var ek, gE, eh = border.length, ej = ac.ej, aB = eh - 1; 0 <= aB; aB--)
		for (ek = 3; 0 <= ek; ek--)
			if (gE = border[aB] + ej[ek], ac.aFb(gE, fa)) {
				ag.gM[fa].push(border[aB]), border[aB] = border[eh - 1], border.pop(), eh--;
				break
			}
}

function gQ() {
	for (var ek, gE, ej = ac.ej, aB = fb - 1; 0 <= aB; aB--)
		for (ek = 3; 0 <= ek; ek--) gE = fd[aB] + ej[ek], ac.aFc(fa, gE) && ac.aFd(gE) && (ag.gM[fa].push(gE), ac.gB(gE, fa))
}

function gR() {
	var eo, eq;
	loop: for (; ag.iX[fa] < ag.iY[fa];) {
		for (eo = ag.iW[fa]; eo >= ag.iV[fa]; eo--)
			if (ac.x6(fa, 4 * (ag.iX[fa] * bR.es + eo))) break loop;
		ag.iX[fa]++
	}
	loop: for (; ag.iX[fa] < ag.iY[fa];) {
		for (eo = ag.iW[fa]; eo >= ag.iV[fa]; eo--)
			if (ac.x6(fa, 4 * (ag.iY[fa] * bR.es + eo))) break loop;
		ag.iY[fa]--
	}
	loop: for (; ag.iV[fa] < ag.iW[fa];) {
		for (eq = ag.iY[fa]; eq >= ag.iX[fa]; eq--)
			if (ac.x6(fa, 4 * (eq * bR.es + ag.iV[fa]))) break loop;
		ag.iV[fa]++
	}
	loop: for (; ag.iV[fa] < ag.iW[fa];) {
		for (eq = ag.iY[fa]; eq >= ag.iX[fa]; eq--)
			if (ac.x6(fa, 4 * (eq * bR.es + ag.iW[fa]))) break loop;
		ag.iW[fa]--
	}
}

function ea(player, j7) {
	return 0 === bf.ef[player] || bf.ef[player] !== bf.ef[j7]
}

function hF(player, j7) {
	for (var e, aX5 = ad.fm(player), aB = 0; aB < aX5; aB++)
		if (0 === ad.fn(player, aB))
			if ((e = ad.fs(player, aB)) === aD.ee) {
				if (j7 === aD.ee) return !1;
				if (hD(j7)) return !0
			} else if (b9.g2.ki(e))
		if (j7 === aD.ee) {
			if (hD(e)) return !0
		} else if (hH(j7, e)) return !0;
	return !1
}

function hD(player) {
	for (var aB, gF, eh = ag.gM[player].length, ej = ac.ej, ek = 3; 0 <= ek; ek--)
		for (gF = ej[ek], aB = 0; aB < eh; aB++)
			if (ac.eY(ag.gM[player][aB] + gF)) return !0;
	return !1
}

function aFk(player) {
	for (var aB, gF, eh = ag.gM[player].length, ej = ac.ej, ek = 3; 0 <= ek; ek--)
		for (gF = ej[ek], aB = 0; aB < eh; aB++)
			if (ac.j9(ag.gM[player][aB]) && ac.eY(ag.gM[player][aB] + gF)) return !0;
	return !1
}

function hH(a2U, a2V) {
	for (var aB, dm, gF, gE, aUa = ag.gM[a2U].length, aUb = ag.gM[a2V].length, ej = (aUb < aUa && (dm = a2U, a2U = a2V, a2V = dm, dm = aUa, aUa = aUb, 0), ac.ej), ek = 3; 0 <= ek; ek--)
		for (gF = ej[ek], aB = 0; aB < aUa; aB++)
			if (gE = ag.gM[a2U][aB] + gF, ac.gG(gE) && ac.eZ(gE) === a2V) return !0;
	return !1
}

function aFl(a2U, a2V) {
	for (var aB, gF, gE, aUa = ag.gM[a2U].length, ej = ac.ej, ek = 3; 0 <= ek; ek--)
		for (gF = ej[ek], aB = 0; aB < aUa; aB++)
			if (ac.j9(ag.gM[a2U][aB]) && (gE = ag.gM[a2U][aB] + gF, ac.gG(gE)) && ac.eZ(gE) === a2V) return !0;
	return !1
}

function dR() {
	this.p9 = new aX6
}

function aX6() {
	this.hC = function(player) {
		b9.g2.a2Q(player) && aN.xZ(80, L(480), 637, 0, bA.nc, bA.mk, -1, !1)
	}, this.a4V = function() {
		aN.xZ(80, L(481), 637, 0, bA.nc, bA.mk, -1, !1)
	}, this.oE = function(player) {
		b9.g2.a2Q(player) && aN.xZ(80, L(482), 637, 0, bA.nc, bA.mk, -1, !1)
	}
}

function aX7() {
	this.aX8 = 0, this.ir = function() {
		aO.ir(), aZ.ir(), h.ir(), az.y.ir(), aw.aEx(), be.df && (be.df = !1, aa.tq())
	}
}

function aX9() {
	this.eG = be.eG, this.e2 = 0, this.aX8 = 0, this.aEv = 0, this.aXA = null, this.aXB = 7, this.a5y = 0, this.dX = function() {
		this.aEv = 0, this.aXA = [], this.e2 = 0, this.aX8 = 0
	}, this.aR1 = function(aC) {
		if (aD.h2) this.a9x(aC);
		else if (this.aXA.push(aC), 2 === aD.z4) {
			for (var aB = 0; aB < this.aXA.length; aB++) b7.o3.ir(this.aXA[aB]);
			this.aXA = []
		}
	}, this.a9x = function(aC) {
		2 !== aD.z4 && (b7.o3.ir(aC), b8.ir(), aW.a9x(this.aEv), this.aEv === aD.a3W ? (aD.oz.ir(), this.aEv = 0, this.e2 = 0, this.aX8 = 0, this.eG = be.eG) : (this.aEv++, af.a3P(), af.lY(!0), ba.aAX()))
	}, this.ir = function() {
		h.ir(), aD.h2 ? (be.df = aW.a9x(-1) || be.df, la()) : (0 !== this.e2 || be.eG >= this.eG && (this.eG += be.a9w * Math.floor(1 + (be.eG - this.eG) / be.a9w), 2 === aD.z4 ? lP() : this.aXC(), this.e2++, 27 < be.eG - this.a5y)) && this
		.aXD(), lV(), be.df && (be.df = !1, x9()), this.a5y = be.eG
	}, this.aXD = function() {
		be.df = !0, lX(), this.e2 = 0
	}, this.aXC = function() {
		var uY, aB;
		if (this.aX8 !== 7 * this.aEv) lR(), ba.aAX();
		else {
			uY = !1;
			loop: for (; this.aXE() && (uY = !0, lR(), 2 !== aD.z4) && 0 < this.aXA.length;)
				for (aB = this.aXB - 2; 0 <= aB; aB--)
					if (lR(), 2 === aD.z4) break loop;
			uY ? ba.aAX() : (lP(), ba.a3S())
		}
	}, this.aXE = function() {
		return 0 < this.aXA.length && (this.aEv++, b7.o3.ir(this.aXA[0]), this.aXA.shift(), !0)
	}
}

function aXF() {
	var aXG, aXH, aXI, aEv, aXJ, e2 = 0,
		eG = be.eG;

	function aXM() {
		! function() {
			if (!aD.h2) return;
			if (aD.kF) return;
			if (2 !== aD.z4)
				if (aXJ % 7 != 0) aXJ++;
				else if (aEv === aD.a3W) {
				if (!aXP()) return;
				aW.a9x(aEv), aD.oz.ir()
			} else {
				if (!aXP()) return;
				aXJ++, aEv++, af.a3P(), af.lY(!0)
			}
			return 1
		}() && aXP() && lR()
	}

	function aXN() {
		e2 = 0, (aD.h2 ? (be.df = aW.a9x(aEv - (aXJ % 7 == 0 ? 0 : 1) + aXJ % 7 / 7) || be.df, la) : aM.gr || !bB.a3t ? la : (be.df = !0, lX))()
	}

	function aXP() {
		var aB, eh, aXQ = b8.ox.aS9,
			fO = b8.ox.aSA,
			fQ = b8.ox.aSB,
			fS = b8.ox.aSC,
			aXR = b8.ox.aSD,
			aXS = b8.ox.aSE;
		if (!(aXG >= aXS.length)) {
			if (aXS = aXS[aXG], aXR[aXG]) {
				for (eh = aXH + aXS, aB = aXH; aB < eh; aB++) b7.o3.ok(aXQ[aB], fO[aB], fQ[aB], fS[aB]);
				aXH += aXS, aXG++
			} else ++aXI >= aXS && (aXG++, aXI = 0);
			return 1
		}
		aN.a0K("Replay file smaller than expected."), bB.a1A(!1), aD.z4 = 2
	}
	this.aX8 = 0, this.dX = function() {
		aXJ = aEv = aXI = aXH = aXG = 0
	}, this.ir = function() {
		var aUx;
		h.ir(), bB.a7Q() < 1.7 ? 0 === e2 ? be.eG >= eG && (aUx = be.a9w / bB.a7Q(), eG += aUx * Math.floor(1 + (be.eG - eG) / aUx), 2 === aD.z4 || aM.gr || !bB.a3t ? lP() : (aXM(), ba.aAX()), e2++) : aXN() : function() {
			var aUx;
			if (be.eG >= eG)
				if (2 === aD.z4 || aM.gr || !bB.a3t) lP(), eG = be.eG;
				else {
					for (aUx = be.a9w / bB.a7Q(), 16 < (be.eG - eG) / aUx && (eG = be.eG - 16 * aUx); be.eG >= eG && 2 !== aD.z4;) eG += aUx, aXM();
					ba.aAX()
				} aXN()
		}(), lV(), be.df && (be.df = !1, x9())
	}, this.zE = function() {
		b8.ox.aSE.length - aXG <= 2 || aN.a0K("Replay file larger than expected.")
	}
}

function aXT() {
	var e2 = 0,
		eG = be.eG;
	this.aX8 = 0, this.ir = function() {
		h.ir(), aD.h2 ? la() : 0 === e2 ? be.eG >= eG && (eG += be.a9w * Math.floor(1 + (be.eG - eG) / be.a9w), 2 === aD.z4 || aM.gr ? lP() : (lR(), ba.aAX()), e2++) : ((aM.gr ? la : (be.df = !0, lX))(), e2 = 0), lV(), be.df && (be.df = !1, x9())
	}
}

function dN() {
	this.zD = null, this.df = !1, this.eG = 0, this.a9w = 56;
	var aXU = 0;

	function aXV() {
		be.eG = aXU = performance.now(), be.zD.ir(), window.requestAnimationFrame(aXV)
	}
	this.dX = function() {
		this.a3q(), window.requestAnimationFrame(aXV), this.eG = performance.now()
	}, this.a3h = function() {
		aD.gq ? (this.zD = new aXF, this.zD.dX()) : aD.kF ? this.zD = new aXT : (this.zD = new aX9, this.zD.dX())
	}, this.a3q = function() {
		this.zD = new aX7, this.df = !0
	}, this.ir = function() {
		this.zD.aX8++
	}, this.jt = function() {
		return this.zD.aX8
	}, this.aQd = function() {
		var dm = performance.now();
		dm < aXU + 1e3 || (this.eG = dm, this.zD.ir())
	}
}

function cp() {
	var aEK = 0,
		aXW = !0;

	function aXX(id) {
		id = [L(483), L(484), L(485), L(486)][id];
		aN.a5f(id)
	}
	this.ir = function() {
		var dm, a60;
		be.eG < aEK || (aEK = be.eG + 5e3, aD.gq) || aD.kF || b9.g2.gt(aD.eR) || (dm = new Date, a60 = dm.getUTCSeconds(), aXW ? a60 < 50 && (aXW = !1) : a60 < 50 || (aXW = !0, (a60 = (dm.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a60 || 20 ==
			a60 || 40 == a60 ? aD.kD < 7 && aXX(0) : 10 == a60 || 30 == a60 || 50 == a60 ? 7 !== aD.kD && 10 !== aD.kD || aXX(1) : 5 == a60 || 25 == a60 || 45 == a60 ? 8 === aD.kD && aXX(2) : 35 == a60 && 9 === aD.kD && aXX(3))))
	}
}

function cj() {
	var mD, mE, mQ, mR, aXY = 0,
		aXZ = 0;

	function aXb() {
		return Math.pow(Math.pow(mQ - mD, 2) + Math.pow(mR - mE, 2), .5)
	}

	function aXa(e) {
		mD = h.k * e.touches[0].clientX, mE = h.k * e.touches[0].clientY, mQ = h.k * e.touches[1].clientX, mR = h.k * e.touches[1].clientY
	}
	this.a0c = function(e) {
		return 1 < e.touches.length ? (aXZ = be.eG, aXY = 3, aXa(e), aL.r0(), !0) : (aXY = 0, !1)
	}, this.a0d = function(e) {
		var aJc, hz, i0;
		return 0 !== aD.z4 && 1 < e.touches.length && (aXY = Math.max(aXY - 1, 0), aH.mV() && (aJc = aXb(), aXa(e), e = aXb(), hz = Math.floor((mD + mQ) / 2), i0 = Math.floor((mE + mR) / 2), aS.a7q(hz, i0, Math.max(.125, e) / Math.max(.125,
			aJc)), be.df = !0), !0)
	}, this.a10 = function() {
		var eo, eq;
		return !!(aXY && (aXY = 0, be.eG < aXZ + 500)) && (eo = (mD + mQ) / 2, eq = (mE + mR) / 2, aL.a0u(eo, eq), aL.click(eo, eq, !0) && (be.df = !0), !0)
	}
}

function cy() {
	this.size = 0, this.e2 = 0, this.aC = null, this.dX = function(aC) {
		this.e2 = 0, this.aC = aC, this.size = aC.length
	}, this.tK = function() {
		this.aC = null
	}, this.oj = function(size) {
		for (var f9 = 0, aC = this.aC, mV = this.e2 + size - 1, aB = this.e2; aB <= mV; aB++) f9 |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << mV - aB;
		return this.e2 += size, this.e2 > 8 * this.size && console.error("Unwrapper Overflow"), f9
	}, this.aR9 = function(size) {
		var f1 = size >> 1;
		return (1 << f1) * this.oj(size - f1) + this.oj(f1)
	}, this.aRA = function(aXc) {
		return this.size === bC.aR8(aXc)
	}, this.aSR = function(vz, aXd, aXe) {
		var g9 = this.oj(vz);
		if (!g9) return null;
		for (var vz = Math.max(g9, aXe), g = new(aXd <= 8 ? Uint8Array : aXd <= 16 ? Uint16Array : Uint32Array)(vz), aB = 0; aB < g9; aB++) g[aB] = this.oj(aXd);
		aXe = g[g9 - 1];
		return aXe && g.fill(aXe, g9), g
	}, this.aSS = function(vz, aXf, aXe) {
		var g9 = this.oj(vz);
		if (!g9) return null;
		for (var vz = Math.max(g9, aXe), g = new Array(vz), aB = 0; aB < g9; aB++) g[aB] = this.aSP(aXf);
		return g.fill(g[g9 - 1], g9), g
	}, this.aSP = function(vz) {
		return bF.v5.v9(this.oj(vz))
	}, this.aSQ = function() {
		var pO = bE.s1.s2(bE.s1.s3(this.oj(30))),
			pO = b9.qh.a3K(pO, "_", "/");
		pO = b9.qh.a3K(pO, "-", "+");
		for (var aXg = "";
			(pO.length + aXg.length) % 4;) aXg += "=";
		pO = "data:image/png;base64," + pO + aXg;
		var aGG = new Image;
		aGG.onload = function() {
			b8.aGf.aGg(aGG), aGG.onload = null, aGG = null
		}, aGG.src = pO
	}
}

function dH() {
	this.aTG = 0, this.aTH = 0, this.aTC = 0, this.aTD = 0, this.aTE = 0, this.aTF = 0, this.aAY = [0, 0, 0, 0], this.mU = function() {
		this.aTG = aS.xB(), this.aTH = aS.xC(), this.aTC = -this.aTG, this.aTD = -this.aTH, this.aTE = h.i / iI, this.aTF = h.j / iI, this.aAY[0] = Math.floor(this.aTC), this.aAY[1] = Math.floor(this.aTD), this.aAY[2] = Math.floor(this.aAY[0] +
			this.aTE + 1), this.aAY[3] = Math.floor(this.aAY[1] + this.aTF + 1), ba.aAV = !0
	}
}

function ck() {
	var a6W, lz;
	this.dX = function() {
		a6W = 1, lz = 0
	}, this.ir = function() {
		0 < a6W && (lz = 0 === lz ? be.eG + 16 : lz, a6W = (a6W -= .001 * (be.eG - lz)) < 0 ? 0 : a6W, lz = be.eG, be.df = !0)
	}, this.tq = function() {
		0 < a6W && (tr.fillStyle = "rgba(0,0,0," + a6W + ")", tr.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e2 = 0, this.aC = null, this.dX = function(aC) {
		this.e2 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aXc) {
		return this.dX(new Uint8Array(this.aR8(aXc))), this.aC
	}, this.tK = function() {
		this.aC = null
	}, this.a8 = function(size, a64) {
		for (var aC = this.aC, mV = this.e2 + size - 1, aB = this.e2; aB <= mV; aB++) aC[aB >> 3] |= (a64 >> mV - aB & 1) << 7 - (7 & aB);
		this.e2 += size, this.e2 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aR7 = function(size, a64) {
		var f1 = size >> 1,
			ek = 1 << f1;
		this.a8(size - f1, bK.dn(a64, ek)), this.a8(f1, a64 % ek)
	}, this.aXj = function(size) {
		for (var aC = this.aC, mV = this.e2 + size, aB = this.e2; aB < mV; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aR8 = function(aXc) {
		return aXc + 7 >> 3
	}, this.aXk = function(g, jD, mV, aXl) {
		for (var aB = jD; aB < mV; aB++) this.a8(aXl, g[aB])
	}
}

function cx() {
	this.dX = function() {
		this.g = [], this.e2 = 0
	}, this.aRW = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aXm, value) {
		for (var g = this.g, mV = this.e2 + aXm - 1, aXn = 1 + (mV >> 3); g.length < aXn;) g.push(0);
		for (var aB = this.e2; aB <= mV; aB++) g[aB >> 3] |= (value >> mV - aB & 1) << 7 - (7 & aB);
		this.e2 += aXm
	}, this.de = function(g, vz, aXd) {
		var aXo = b9.pq.a1n(g);
		this.a8(vz, aXo);
		for (var aB = 0; aB < aXo; aB++) this.a8(aXd, g[aB])
	}, this.aSj = function(g, vz, aXf) {
		var aXo = b9.pq.a1n(g);
		this.a8(vz, aXo);
		for (var aB = 0; aB < aXo; aB++) this.aSh(g[aB], aXf)
	}, this.aSh = function(pO, vz) {
		var eh = pO.length;
		this.a8(vz, eh);
		for (var aB = 0; aB < eh; aB++) this.a8(16, pO.charCodeAt(aB))
	}, this.aSi = function(a1t) {
		var aXp = (a1t = a1t.toDataURL()).split(",");
		if (aXp.length < 2) console.log("error 266");
		else {
			a1t = b9.qh.a3K(a1t = aXp[aXp.length - 1], "/", "_"), a1t = b9.qh.a3K(a1t, "\\+", "-");
			var a1t = b9.qh.a3K(a1t, "=", ""),
				vI = bF.s1.vF(a1t),
				eh = vI.length;
			this.a8(30, eh);
			for (var aB = 0; aB < eh; aB++) this.a8(6, vI[aB])
		}
	}
}
a(), self.aiCommand746 = function(f9) {
	0 === f9 ? bq() : 1 !== f9 || !a0 || 1 !== a0.id || a0.dp < 14 || bI.fA()
}, setTimeout(bq, 1e4), window.onload = function() {
	bq()
};