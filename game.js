var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, fa, iB, iA, iC, a6V, l4, ja, a0N,
	th, x4, aAL, a3Y, a3Z, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "<br>", "0.75em", "   ", "hidden", "flex", "Data", "1em", "0.5em", "' target='_blank'>", "</a>", "0.8em", " / ",
		"territorial.io", "span", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "undefined",
		"bold", "pointer", "password", "function", "break-word", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "blur", "Space", "Player ", "Patreon", "NoStack",
		"<a href='", "50%", "1.2em", "0px", "0.4em", "0.0em 0.9em", " voted with ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)",
		"rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,",
		"break-all", "blur(4px)", "arena", "account", "accept", "_blank", "Seed", "Report", "Reload", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000",
		"0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	var b, c;

	function o() {
		(b = new WebSocket("wss://territorial.io/s52/")).onopen = a2, b.onclose = function() {
			a3()
		}
	}

	function a2() {
		if (b && b.readyState === b.OPEN) {
			var i = new a5;
			i.a6(1608), i.a7(1, 0), i.a7(6, 7), i.a7(2, z ? z.id : 3), i.a7(1, l.a8 ? 1 : 0), i.a7(1, l.a9 ? 1 : 0), i.a7(1, l ? l.m : 0);
			for (var aA = 0; aA < c.length && aA < 228; aA++) i.a7(7, c.charCodeAt(aA) % 128);
			b.send(i.aB), a3()
		}
	}

	function a3() {
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
					for (var match, a4 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a4.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
					return result.length ? result.join(" ") : "NoStack"
				}(e), performance.memory && ((g = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), g.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), g.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)), c =
					c + "|" + g.join(" ")), c = (c = h ? c + "|R" + h.i + "," + h.j + "," + h.k.toFixed(2) : c) + "|" + e.message, l && 1 === l.m) {
				if (c = l.n + "|" + c, e.lineno < 43) return void o();
				var p = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
				p += "<br>Error Message: " + c, q.r(), s.t(4, 5, new u("🤖 Beep Boop! An error occurred.", p, !0, [new v("Close", function() {
					s.w(), s.x.y()
				}), new v("Reload", function() {
					z.a0.a1()
				})]))
			}
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		o()
	})
}

function bo(bp) {
	l && !bp || (br(), bJ = new bs, bI = new bt, b8 = new bu, b9 = new bv, aC = new bw, b5 = new bx, bD = new by, bE = new bz, aD = new c0, aE = new c1, aF = new c2, aG = new c3, aH = new c4, aI = new c5, aJ = new c6, aK = new c7, aL = new c8, aM =
		new c9, aN = new cA, aO = new cB, aP = new cC, aQ = new cD, aR = new cE, aS = new cF, aT = new cG, aU = new cH, aV = new cI, aW = new cJ, aX = new cK, aY = new cL, aZ = new cM, aa = new cN, ab = new cO, aj = new cP, ak = new cQ, al =
		new cR, ac = new cS, ad = new cT, ag = new cU, ae = new cV, af = new cW, ah = new cX, ax = new cY, ai = new cZ, an = new ca, ao = new cb, ap = new cc, ay = new cd, aw = new ce, am = new cf, aq = new cg, ar = new ch, at = new ci, h =
		new cj, au = new ck, av = new cl, az = new cm, b0 = new cn, b1 = new co, b2 = new cp, b3 = new cq, b4 = new cr, b6 = new cs, b7 = new ct, bA = new cu, bB = new a5, bC = new cv, bF = new cw, bG = new cx, bH = new cy, bK = new cz, bL =
		new d0, bM = new d1, bN = new d2, bO = new d3, bP = new d4, bQ = new d5, bR = new d6, s = new d7, bS = new d8, z = new d9, l = new dA, bg = new dB, bh = new dC, be = new dD, bf = new dE, bY = new dF, bZ = new dG, bT = new dH, bU = new dI,
		bb = new dJ, bc = new dK, bd = new dL, bi = new dM, ba = new dN, q = new dO, bj = new dP, bk = new dQ, bl = new dR, bn = new dS, l.dU(), z.dU(), h.dV(), bh.dU(), b5.dU(), b5.dW(), (bV = new dX).dU(), b8.dU(), bT.dU(), ay.dU(), bD.dU(), bE
		.dU(), bQ.dU(), s.dU(), bW = new dY, h.dU(), z.a0.dZ(), bd.dU(), ba.dU(), bU.dU(), bX = new da, aw.dU(), ad.db(), bS.dU(), an.dU(), aZ.dU(), aS.dU(), ah.dU(), bH.dU(), aa.dU(), bd.dc = !0, setTimeout(function() {
			bQ.a6(2, 14071)
		}, 0), s.t(5, 5), bG.dd() || z.a0.de(), h.df(), l.m = 1)
}

function dA() {
	this.dg = 1094, this.n = 2060, this.rVersion = 8, this.dU = function() {
		this.dh = 2;
		var di = bJ.dj(this.n, 10) % 100;
		this.dk = "17 Mar 2025 [" + bJ.dj(this.n, 1e3) + "." + (di < 10 ? "0" : "") + di + "." + this.n % 10 + "]", this.a8 = true, this.a9 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dm = (new Date).getTime() % 1024
	}, this.m = 0
}

function dn() {
	var dp = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dq = [100, 60, 30, 15, 6, 1],
		dr = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		ds = [" kicked ", " muted ", " redacted the username of ", " deducted x from ", " seized x from ", " reported "],
		dt = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.du = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["1 Elo Point", "2 Elo Points", "4 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.dv = function(id, dw, dx) {
		dw = this.dy(dw);
		return +(dr[dw][id] > dx)
	}, this.dy = function(dw) {
		for (var aA = 0; aA < dq.length; aA++)
			if (dq[aA] <= dw) return aA;
		return dq.length
	}, this.dz = function(dw) {
		return dp[this.dy(dw)]
	}, this.e0 = function(id, e1) {
		return ds[id].replace(new RegExp("x", "g"), e1)
	}, this.e2 = function(id, e1) {
		return dt[id].replace(new RegExp("x", "g"), e1)
	}
}

function d8() {
	this.e3 = new e4, this.dU = function() {
		z.a0.e5()
	}, this.e6 = function() {
		return bh.e7.data[160].value
	}
}

function e4() {
	var e8 = 2e4;
	this.show = function() {
		if (bd.e9 < e8) return !1;
		e8 = bd.e9 + 135e4, 2 === l.dh && z.a0.eA(Math.floor(135e4))
	}
}

function cR() {
	this.eB = new eC
}

function eC() {
	this.eD = function(eE) {
		var eH;
		return bQ.eF(bQ.eG) && aC.data.passableMountains && (eH = ab.eI(eE), this.eJ(aC.eK, eH) || this.eL(aC.eK, eH)) && 0 !== (eH = function(eg) {
			for (var eh = bK.ei(eg), ej = bK.ek(eg), max = Math.max(bQ.el, bQ.em) - 2, en = max * max, eo = !1, ep = 0, eq = 0; eq < max; eq++) {
				var er, eM = function(eh, ej, eq) {
					for (var aA = 0; aA <= eq; aA++)
						for (var et = -1; et < 2; et += 2)
							for (var eu = -1; eu < 2; eu += 2)
								for (var ev = 0; ev < 2; ev++) {
									var eE = function(eh, ej) {
										if (bK.ex(eh, ej)) {
											eh = bK.ey(eh, ej), ej = bK.eQ(eh);
											if (ab.eV(ej) && ab.ez(ej)) return eh
										}
										return 0
									}(eh + ev * et * aA + (1 - ev) * eu * eq, ej + ev * eu * eq + (1 - ev) * et * aA);
									if (eE) return eE
								}
					return 0
				}(eh, ej, eq);
				eM && (er = bK.es(eh, ej, eM)) < en && (ep = eM, en = er, eo || (eo = !0, max = Math.floor(Math.sqrt(er)) + 1))
			}
			return ep
		}(bK.eO(eE))) && (eE = bK.eQ(eH), ab.eR(eE) || (eE = ab.eS(eE)) !== aC.eK && eT(eE, aC.eK)) ? eH : 0
	}, this.eU = function(player, eM) {
		eM = bK.eQ(eM);
		if (ab.eV(eM)) {
			if (ab.eR(eM)) bM.eW[0] = aC.eX;
			else if (ab.eS(eM) !== bM.eW[0]) return !1;
			for (var eY = function(eE) {
					var ec = ab.ec,
						eY = [];
					loop: for (var ed = 3; 0 <= ed; ed--) {
						var ee = eE + ec[ed];
						if (ab.ef(ee)) {
							for (var id = ab.eI(ee), aA = 0; aA < eY.length; aA++)
								if (id === eY[aA]) continue loop;
							bM.eb[eY.length] = ee, eY.push(id)
						}
					}
					return eY
				}(eM), ea = eY.length, aA = 0; aA < ea; aA++)
				if (this.eJ(player, eY[aA]) || this.eL(player, eY[aA])) return bM.eb[0] = bM.eb[aA], !0
		}
		return !1
	}, this.eJ = function(player, eH) {
		for (var f0 = af.f0[player], ea = f0.length, f1 = Math.max(bJ.dj(ea, 12), 1), ec = ab.ec, aA = 0; aA < ea; aA += f1)
			for (var eP = f0[aA], ed = 3; 0 <= ed; ed--) {
				var ee = eP + ec[ed];
				if (ab.ef(ee) && eH === ab.eI(ee)) return !0
			}
		return !1
	}, this.eL = function(player, eH) {
		for (var f0 = af.f0[player], ea = f0.length, ec = ab.ec, aA = 0; aA < ea; aA++)
			for (var eP = f0[aA], ed = 3; 0 <= ed; ed--) {
				var ee = eP + ec[ed];
				if (ab.ef(ee) && eH === ab.eI(ee)) return !0
			}
		return !1
	}
}

function d1() {
	this.f4 = new Uint16Array(2), this.f5 = new Uint16Array(2), this.f6 = new Uint32Array(2), this.f7 = new Uint32Array(2), this.f8 = new Uint32Array(2), this.f9 = new Uint8Array(4), this.fA = new Uint8Array(4), this.eb = new Uint32Array(4), this
		.fB = new Uint32Array(5), this.eW = new Uint32Array(8), this.fC = new Uint16Array(16), this.fD = new Uint16Array(512), this.fE = new Uint16Array(512), this.fF = new Uint16Array(512), this.fG = function(g, fH) {
			return g[0] = fH, g
		}, this.fI = function(g, fH, fJ) {
			return g[0] = fH, g[1] = fJ, g
		}, this.fK = function(g, fH, fJ, fL) {
			return g[0] = fH, g[1] = fJ, g[2] = fL, g
		}, this.fM = function(g, fH, fJ, fL, fN) {
			return g[0] = fH, g[1] = fJ, g[2] = fL, g[3] = fN, g
		}
}

function fb() {
	fU = 0, fV = 2048, fW = new Uint32Array(4 * fV), fX = 0, fY = new Uint32Array(fV), fZ = new Uint8Array(bQ.el * bQ.em)
}

function fc(player) {
	fP = player, fa = !1, fd(), fe();
	for (var aA = ac.ff(fP) - 1; 0 <= aA; aA--) 0 === ac.fg(fP, aA) && (fO = aA, fh());
	fa && fi()
}

function fi() {
	fj(), fk()
}

function fh() {
	fT = ac.fl(fP, fO), fQ = ac.fm(fP, fO), fR = ac.fn(fP, fO), fo(), (0 !== fU && (fq(), fr()) ? fs : fp)()
}

function fr() {
	if (!((fS = bJ.dj(fQ, fU)) > aC.ft)) {
		if (!fR) return !1;
		var fu = fU * (1 + aC.ft);
		fQ += b8.fv.fw(fP, fu - fQ), fS = bJ.dj(fQ, fU)
	}
	return !0
}

function fq() {
	for (var aA = fU - 1; 0 <= aA; aA--) fZ[bJ.dj(fW[aA], 4)] = 0
}

function fp() {
	1 === ac.ff(fP) && aE.fx(fP);
	var di = b8.fv.fy(fP, fQ);
	bb.fz(fP, fQ - di, 12), ac.g0(fP, fO)
}

function fd() {
	for (var player = fP, g1 = af.g1, ea = Math.min(g1[player].length, fV), g2 = 0, g3 = fY, aA = ea - 1; 0 <= aA; aA--) g3[g2++] = g1[player][aA];
	fX = g2
}

function fe() {
	for (var aA = af.g1[fP].length - 1; 0 <= aA; aA--) ab.eV(af.g1[fP][aA]) && ab.g4(af.g1[fP][aA], fP);
	af.g1[fP] = []
}

function fo() {
	fU = 0, (fT === aC.eX ? g5 : g6)()
}

function g6() {
	for (var g7, g8, aA, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (aA = fX - 1; 0 <= aA; aA--) g7 = fY[aA] + ec[ed], g8 = bJ.dj(g7, 4), 0 === fZ[g8] && ab.g9(g7) && ab.eS(g7) === fT && (fZ[g8] = 1, fW[fU++] = g7)
}

function g5() {
	for (var g7, g8, aA, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (aA = fX - 1; 0 <= aA; aA--) g7 = fY[aA] + ec[ed], g8 = bJ.dj(g7, 4), 0 === fZ[g8] && ab.eR(g7) && (fZ[g8] = 1, fW[fU++] = g7)
}

function fs() {
	gA() ? (gB(), fT !== aC.eX && gC()) : fp()
}

function gC() {
	gD(), gE(af.gF[fT]), gE(af.gG[fT]), bQ.eF(bQ.eG) && gE(af.f0[fT]), gH(af.g1[fT]), gI(af.gG[fT]), gI(af.f0[fT]), gJ(), gK()
}

function gB() {
	fa = !0, ac.gL(fP, fO, fQ), ac.gM(fP, fO), af.gN[fP] += fU, gO(), gP()
}

function gA() {
	return (fT === aC.eX ? gQ : gR)()
}

function gR() {
	var gS = fU * aC.ft,
		gT = gU(),
		gV = gW(),
		gT = gS + 2 * gT + gV,
		gY = fS * fU;
	return gT < gY ? (fQ -= gT, bb.fz(fP, gT, 13), gZ(gT - gS, gV), !0) : fR && 0 === gV ? (fQ -= gY, gY += b8.fv.fw(fP, gT - gY + 1), bb.fz(fP, gY, 13), gZ(gY - gS, 0), !0) : (fQ -= gY, bb.fz(fP, gY, 13), gZ(gY - gS, gV), !1)
}

function gZ(gY, gV) {
	if (0 < gV) {
		if (gY <= gV) return bb.fz(fT, gY, 13), void ac.ga(fT, fP, gV - gY);
		ac.ga(fT, fP, 0), gY -= gV
	}
	gY = bJ.dj(gY, 2), gY = Math.min(af.gb[fT], gY), bb.fz(fT, gY, 13), af.gb[fT] -= gY
}

function gW() {
	return ac.gc(fT, fP)
}

function gU() {
	return bJ.dj(fU * af.gb[fT], 1 + bJ.dj(10 * af.gN[fT], 16))
}

function gQ() {
	var gd = fU * aC.ft;
	return fQ -= gd, bb.fz(fP, gd, 13), !0
}

function gP() {
	for (var aA = fU - 1; 0 <= aA; aA--) af.g1[fP].push(fW[aA]), af.gF[fP].push(fW[aA]), ab.g4(fW[aA], fP)
}

function d6() {
	var ge = 0,
		gf = 0;
	this.gg = function(eh, ej) {
		ge = eh, gf = ej
	}, this.gh = function(gi) {
		aC.gj || aL.gk || (b8.fv.gl(0) || b8.fv.gl(1)) && b8.fv.gm(aC.eK) && (aQ.gn(ge, gf) ? aQ.go = !1 : aO.gn(ge, gf) || function(gi) {
			var gq = bK.gr(ge),
				gs = bK.gt(gf),
				eM = bK.ey(gq, gs),
				eE = bK.eQ(eM);
			bK.gu(gq, gs) && (aC.gv ? ab.eV(eE) && b6.gw.gx(eM) : ab.ef(eE) ? gi || (gq = al.eB.eD(eE)) && (gs = bK.eQ(gq), gs = ab.eR(gs) ? aC.eX : ab.eS(gs), b6.gw.h0(aQ.h1(), gq, gs)) : ab.h2(eE) || gi ? bL.h3.h4(aC.eK, eM) && b6.gw
				.h5(aQ.h1(), eM) : ab.eR(eE) ? h6(aC.eK) ? b6.gw.h7(aQ.h1(), aC.eX) : h8(aC.eK, aC.eX) ? az.h9(aC.eX, aQ.h1()) : bL.h3.h4(aC.eK, eM) && b6.gw.h5(aQ.h1(), eM) : (gq = ab.eS(eE)) !== aC.eK && (eT(gq, aC.eK) ? hA(aC.eK,
					gq) ? b6.gw.h7(aQ.h1(), gq) : h8(aC.eK, gq) ? az.h9(gq, aQ.h1()) : bL.h3.h4(aC.eK, eM) && b6.gw.h5(aQ.h1(), eM) : bL.h3.h4(aC.eK, eM) && b6.gw.h5(aQ.h1(), eM)))
		}(gi))
	}, this.hB = function() {
		if (!aC.gj && !aL.gk && b8.fv.gl(1)) {
			var g7 = aC.eK;
			if (b8.fv.gm(g7)) {
				var ea = ac.ff(g7);
				if (ea < 1) ! function() {
					var g7 = aC.eK;
					if (h6(g7)) b6.gw.h7(aQ.h1(), aC.eX);
					else
						for (var ec = ab.ec, gF = af.gF, ea = gF[g7].length, hL = Math.floor(Math.random() * ea), aA = 0; aA < ea; aA++)
							for (var hM = 3; 0 <= hM; hM--) {
								var hN = gF[g7][(aA + hL) % ea] + ec[hM];
								if (ab.g9(hN)) {
									hN = ab.eS(hN);
									if (hN !== g7 && (!aC.hP || eT(g7, hN))) return b6.gw.h7(aQ.h1(), hN)
								}
							}
				}();
				else {
					for (var hD = 0, hE = ac.fm(g7, 0), aA = 1; aA < ea; aA++) {
						var hF = ac.fm(g7, aA);
						hF < hE && (hE = hF, hD = aA)
					}
					b6.gw.h7(aQ.h1(), ac.fl(g7, hD))
				}
			}
		}
	}, this.hG = function() {
		if (!aC.gj && !aL.gk && b8.fv.gm(aC.eK) && b8.fv.gl(1)) return au.hH ? au.hI(aC.eK) ? void b6.gw.hJ(1) : void 0 : void(au.hK(aC.eK) && b6.gw.hG())
	}
}

function hQ(hR, size, hS, hT, font) {
	var aA, hW = .2,
		canvas = document.createElement("canvas"),
		hX = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hR, canvas.height = hR, hX.font = size + font, hX.textAlign = "center", hX.textBaseline = "middle", hX.fillStyle = "red", aA = 0; aA < hS.length; aA++) hX.fillText(hS[aA], .5 * hR, .5 * hR);
	return -1 < (canvas = function(hU) {
		var aA, dw, ed = hU.data;
		for (aA = ed.length - 4; 0 <= aA; aA -= 4)
			if (dw = ed[aA], hT <= dw) return Math.floor(aA / (4 * hR));
		return -1
	}(hX.getImageData(0, 0, hR, hR))) && (hW = (canvas - .5 * hR + .1 * size) / size), Math.max(hW, 0)
}

function cz() {
	this.hZ = new Int16Array(4), this.ha = new Int16Array(4), this.dU = function() {
		var aA;
		for (this.hZ[0] = -bQ.el, this.hZ[1] = 1, this.hZ[2] = bQ.el, this.hZ[3] = -1, aA = 0; aA < 4; aA++) this.ha[aA] = 4 * this.hZ[aA]
	}, this.hb = function(gy, hc) {
		var hd = this.ei(hc) - this.ei(gy),
			hc = this.ek(hc) - this.ek(gy),
			gy = hd >>> 31 << 1;
		return 5 + gy + (1 - gy) * (1 - (hc >>> 31 << 1)) * (Math.abs(hd) - Math.abs(hc) >>> 31) & 3
	}, this.hi = function(gy, hc, hM) {
		return hM % 2 == 0 ? hM + (1 - hM) * (1 - (this.ei(hc) - this.ei(gy) >>> 31 << 1)) + 4 & 3 : hM + (2 - hM) * (1 - (this.ek(hc) - this.ek(gy) >>> 31 << 1)) + 4 & 3
	}, this.hk = function(g7, eM) {
		for (var hc, hl, hn = af.gG[g7], ea = hn.length, i = bQ.el, ho = this.ei(eM), hp = this.ek(eM), eg = hn[0] >> 2, min = this.es(ho, hp, eg), aA = 1; aA < ea; aA++)(hl = (hl = ho - (hc = hn[aA] >> 2) % i) * hl + (hl = hp - ~~((.5 + hc) /
			i)) * hl) < min && (min = hl, eg = hc);
		return eg
	}, this.hq = function(player, eE) {
		return !ab.eR(eE) && player === ab.eS(eE)
	}, this.es = function(gq, gs, eM) {
		return (gq -= this.ei(eM)) * gq + (gs -= this.ek(eM)) * gs
	}, this.hr = function(hs, ht, hu) {
		hs = this.hw(hs) - this.hx(hu), ht = this.hz(ht) - this.i0(hu);
		return Math.sqrt(hs * hs + ht * ht)
	}, this.i1 = function(gy, hc) {
		var hv = this.ei(gy) - this.ei(hc),
			gy = this.ek(gy) - this.ek(hc);
		return Math.sqrt(hv * hv + gy * gy)
	}, this.i2 = function(gy, hc) {
		var hv = this.ei(gy) - this.ei(hc),
			gy = this.ek(gy) - this.ek(hc);
		return hv * hv + gy * gy
	}, this.i3 = function(i4, i5, i6, i7) {
		return (i4 -= i6) * i4 + (i5 -= i7) * i5
	}, this.i8 = function(g7, i9) {
		return bJ.dj(i9 * af.gb[g7], 1e3)
	}, this.hw = function(hs) {
		return 16 * (hs + iA) / iB
	}, this.hz = function(ht) {
		return 16 * (ht + iC) / iB
	}, this.iD = function(ed) {
		return 16 * ed / iB
	}, this.gr = function(hs) {
		return Math.floor((hs + iA) / iB)
	}, this.gt = function(ht) {
		return Math.floor((ht + iC) / iB)
	}, this.gu = function(gq, gs) {
		return 1 <= gq && 1 <= gs && gq < bQ.el - 1 && gs < bQ.em - 1
	}, this.ei = function(eM) {
		return eM % bQ.el
	}, this.ek = function(eM) {
		return bJ.dj(eM, bQ.el)
	}, this.ey = function(gq, gs) {
		return gs * bQ.el + gq
	}, this.iE = function(eM) {
		return this.ex(this.ei(eM), this.ek(eM))
	}, this.ex = function(gq, gs) {
		return 0 < gq && gq < bQ.el - 1 && 0 < gs && gs < bQ.em - 1
	}, this.eQ = function(eM) {
		return eM << 2
	}, this.eO = function(eE) {
		return eE >> 2
	}, this.iF = function(eM) {
		return bQ.el * this.ek(eM) * 256 + (this.ei(eM) << 4)
	}, this.iG = function(eM) {
		return this.iF(eM) + 8 + (bQ.el << 7)
	}, this.iH = function(hu) {
		return bQ.el * (this.i0(hu) >> 4) + (this.hx(hu) >> 4)
	}, this.iI = function(hu) {
		hu = this.iH(hu);
		return (this.ei(hu) >> 5) + bL.iJ.iK * (this.ek(hu) >> 5)
	}, this.hx = function(hu) {
		return hu % (bQ.el << 4)
	}, this.i0 = function(hu) {
		return bJ.dj(hu, bQ.el << 4)
	}, this.iL = function(eM, hM) {
		return eM + this.hZ[hM]
	}, this.iM = function(eE, hM) {
		return eE + this.ha[hM]
	}, this.iN = function(player) {
		return this.ey(af.iO[player] + af.iP[player] >> 1, af.iQ[player] + af.iR[player] >> 1)
	}, this.iS = function(player) {
		return this.ey(aw.iT(af.iO[player], af.iP[player]), aw.iT(af.iQ[player], af.iR[player]))
	}
}

function cf() {
	this.iU = new iV, this.iW = new iX, this.iY = new iZ, this.performance = new ia, this.ib = new ic, this.ie = new ig, this.ih = new ii, this.dU = function() {
		this.iU.dU(), this.iY.dU(), this.performance.dU(), this.ib.dU(), this.ie.dU()
	}, this.ij = function() {
		this.performance.ij(), this.iU.ij()
	}
}

function ic() {
	var ik, im = new Uint16Array(8);

	function iw(size, player) {
		for (var aA = af.g1[player].length - 1; size <= aA; aA--) ab.j3(af.g1[player][aA], player)
	}
	this.dU = function() {
		ik = 0
	}, this.io = function(player, ip) {
		return bM.eW[1] = af.g1[player].length, bM.eW[0] === aC.eX ? am.ib.iq(player) : this.ir(player, bM.eW[0]), (0 !== bM.eW[1] || 0 !== af.g1[player].length) && !(!ip && bM.eW[1] === af.g1[player].length || (bM.eW[0] === aC.eX ? af.is[
			player]++ : af.it[player]++, 0))
	}, this.iu = function(player) {
		aC.hP && (am.ie.iv[player] = 1), iw(bM.eW[1], player), ac.ix(player, bM.f7[0], bM.eW[0]), aE.iy(player, !1)
	}, this.iz = function(player, j0, ea, hE) {
		var j1 = bJ.dj(12 * af.gb[player], 1024);
		hE -= hE >= bJ.dj(af.gb[player], 2) ? j1 : 0, iw(ea, player), ac.ix(player, hE, j0), af.gb[player] -= hE + j1, aE.iy(player, !1)
	}, this.ir = function(player, j0) {
		for (var hM, ec = ab.ec, aA = af.gF[player].length - 1; 0 <= aA; aA--)
			if (ab.j2(af.gF[player][aA]))
				for (hM = 3; 0 <= hM; hM--)
					if (ab.g9(af.gF[player][aA] + ec[hM]) && ab.eS(af.gF[player][aA] + ec[hM]) === j0) {
						af.g1[player].push(af.gF[player][aA]);
						break
					}
	}, this.iq = function(player) {
		for (var ec = ab.ec, aA = af.gF[player].length - 1; 0 <= aA; aA--)
			if (ab.j2(af.gF[player][aA]))
				for (var hM = 3; 0 <= hM; hM--)
					if (ab.eR(af.gF[player][aA] + ec[hM])) {
						af.g1[player].push(af.gF[player][aA]);
						break
					}
	}, this.j4 = function(player, j5) {
		var aA, et, hM, hO, ea = af.gF[player].length,
			hj = 256 <= ea ? 12 : 32 <= ea ? 6 : 1,
			j6 = ea - 1 - aw.j7(hj),
			ec = ab.ec;
		ik = 0;
		loop: for (aA = j6; 0 <= aA; aA -= hj)
			for (hM = 3; 0 <= hM; hM--)
				if ((hO = ab.eR(af.gF[player][aA] + ec[hM]) ? aC.eX : ab.eS(af.gF[player][aA] + ec[hM])) === aC.eX || ab.g9(af.gF[player][aA] + ec[hM]) && hO !== player && (j5 || eT(player, hO))) {
					for (et = ik - 1; 0 <= et; et--)
						if (im[et] === hO) continue loop;
					if (im[ik] = hO, 8 <= ++ik) return !0
				}
		return 0 < ik
	}, this.j8 = function(player, j5) {
		var aA, hM, hO, ec = ab.ec;
		for (ik = 0, aA = af.gF[player].length - 1; 0 <= aA; aA--)
			for (hM = 3; 0 <= hM; hM--)
				if ((hO = ab.eR(af.gF[player][aA] + ec[hM]) ? aC.eX : ab.eS(af.gF[player][aA] + ec[hM])) === aC.eX || ab.g9(af.gF[player][aA] + ec[hM]) && hO !== player && (j5 || eT(player, hO))) return im[ik++] = hO, !0;
		return !1
	}, this.j9 = function() {
		for (var eu, aA = ik - 1; 0 <= aA; aA--)
			if (im[aA] === aC.eX) {
				for (ik--, eu = aA; eu < ik; eu++) im[eu] = im[eu + 1];
				return !0
			} return !1
	}, this.jA = function(player) {
		for (var eu, aA = ik - 1; 0 <= aA; aA--)
			if (ac.jB(player, im[aA]))
				for (ik--, eu = aA; eu < ik; eu++) im[eu] = im[eu + 1];
		return 0 === ik
	}, this.jC = function() {
		for (var aA = ik - 1; 0 <= aA; aA--)
			if (b8.fv.jD(im[aA])) return !0;
		return !1
	}, this.jE = function() {
		for (var aA = ik - 1; 0 <= aA; aA--) b8.fv.jD(im[aA]) || (im[aA] = im[--ik]);
		return 0 < ik
	}, this.jF = function(player) {
		for (var eu, jG = im[0], jH = af.gb[jG] + ac.gc(jG, player), aA = ik - 1; 1 <= aA; aA--)(eu = af.gb[im[aA]] + ac.gc(im[aA], player)) < jH && (jG = im[aA], jH = eu);
		return jG
	}, this.jI = function(player) {
		var j, jJ = im[0];
		if (1 !== ik)
			for (var jK = bJ.dj(af.iP[player] + af.iO[player], 2), jL = bJ.dj(af.iR[player] + af.iQ[player], 2), eq = jM(jK - bJ.dj(af.iP[jJ] + af.iO[jJ], 2)) + jM(jL - bJ.dj(af.iR[jJ] + af.iQ[jJ], 2)), aA = ik - 1; 1 <= aA; aA--)(j = jM(jK - bJ
				.dj(af.iP[im[aA]] + af.iO[im[aA]], 2)) + jM(jL - bJ.dj(af.iR[im[aA]] + af.iQ[im[aA]], 2))) < eq && (eq = j, jJ = im[aA]);
		return jJ
	}, this.jN = function() {
		for (var jO = im, jP = jO[0], gb = af.gb, jQ = gb[jP], aA = ik - 1; 1 <= aA; aA--) {
			var g7 = jO[aA],
				eu = gb[g7];
			jQ < eu && (jP = g7, jQ = eu)
		}
		return jP
	}, this.jR = function() {
		return im[aw.j7(ik)]
	}
}

function ig() {
	function jg(player, j0, jW) {
		3 <= jW && 2142 < bd.jm() && (j0 === aC.eX || af.gb[j0] < bJ.dj(af.gb[player], 20)) && aD.jb(player, 20)
	}

	function jj(player, hE, j0, jW) {
		3 <= jW && jW < 6 && bJ.dj(af.gb[player], 8) > af.gb[j0] && (hE = Math.max(bJ.dj(11 * af.gb[j0], 5), bJ.dj(af.gb[player], 10)));
		jW = af.g1[player].length;
		am.ib.ir(player, j0), am.ib.iz(player, j0, jW, hE)
	}

	function jf(player, hE) {
		var j0 = aC.eX,
			ea = af.g1[player].length;
		am.ib.iq(player), af.g1[player].length !== ea && am.ib.iz(player, j0, ea, hE)
	}
	this.iv = new Uint8Array(aC.eX), this.dU = function() {
		this.iv.fill(0)
	}, this.jS = function(player, hE) {
		var jU, jW, jX, jY;
		ac.jT(player) && (jU = ad.jV(player), 3 <= (jW = aD.hE[player]) && jW < 6 && (hE = Math.max(af.gb[player] - jU, hE)), jX = af.gG[player].length, jY = af.gF[player].length, 30 * af.gN[player] > aC.jZ && ja[player] < 10 && 100 * jY <= jX &&
			aD.jb(player, 10), aC.hP ? function(player, hE, jW, jU) {
				var j0;
				if (am.ie.iv[player] = 1, am.ib.j4(player, !1) || am.ib.j8(player, !1)) {
					if (!am.ib.jA(player))
						if (am.ib.j9()) jf(player, hE), jg(player, aC.eX, jW);
						else {
							if (aw.jh(aD.ji[jW])) j0 = am.ib.jF(player);
							else {
								if (am.ib.jC() && aw.jh(aD.jk[jW]) && am.ib.jE(), 6 === jW) return jj(player, hE, am.ib.jR(), jW);
								j0 = am.ib.jI(player)
							}
							jj(player, hE, j0, jW), jg(player, j0, jW)
						}
				} else bL.jd.ij(player) || am.ih.ij(player) || (am.ie.iv[player] = 0, function(player, hE, jW, jU) {
					var aA, eu, ev, eY = be.eY,
						jn = eY[player];
					if (0 !== jn) {
						var jo = af.gb[player],
							gN = af.gN;
						if (player < aC.jp && (hE = jo), !(jo < gN[player] || 5 === jW && jo < jU || 4 === jW && jo < bJ.dj(jU, 2))) {
							var ea = ak.jq,
								jr = ak.jr,
								iv = (aA = aw.j7(ea), am.ie.iv);
							for (eu = 0; eu < ea; eu++)
								if (ev = jr[(eu + aA) % ea], 1 === iv[ev] && eY[ev] === jn) return b6.js.jt(player, ev, hE)
						}
					}
				}(player, hE, jW, jU))
			}(player, hE, jW, jU) : (!jY || jX && (jX < jY && !aw.j7(10) || 100 * jY <= jX && aw.j7(3) || !aw.j7(8))) && bL.jd.ij(player) || function(player, hE, jW) {
				am.ib.j4(player, !0) || am.ib.j8(player, !0) ? am.ib.jA(player) || (am.ib.j9() ? jf(player, hE) : aw.jh(aD.ji[jW]) ? jj(player, hE, am.ib.jF(player), jW) : 5 === jW ? jj(player, hE, am.ib.jN(), jW) : (am.ib.jC() && aw.jh(aD
					.jk[jW]) && am.ib.jE(), jj(player, hE, 6 === jW ? am.ib.jR() : am.ib.jI(player), jW))) : am.ih.ij(player)
			}(player, hE, jW))
	}
}

function c0() {
	var ju = new Uint8Array(aC.eX),
		jv = new Uint16Array(aC.eX),
		jw = new Uint16Array(aC.eX),
		jx = new Uint8Array(aC.eX),
		jy = (this.hE = new Uint8Array(aC.eX), new Uint16Array(aC.eX)),
		jz = new Uint16Array(aC.eX);

	function kD(aA) {
		ju[aA] = 1 + bJ.dj(jy[aA] * aw.random(), 10 * aw.value(100))
	}
	this.k0 = null, this.jk = [97, 94, 70, 40, 20, 0, 100], this.k1 = [500, 450, 400, 300, 80, 50, 100], this.ji = [0, 0, 5, 25, 50, 100, 0], this.k2 = [60, 74, 112, 200, 256, 512, 512], this.k3 = [1, 2, 3, 4, 6, 8, 1], this.k4 = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.k0 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		ju.fill(0), jv.fill(0), jw.fill(0), jx.fill(0), this.hE.fill(0), jy.fill(0), jz.fill(0);
		var k5 = aC.jp;
		if (9 === aC.k6) this.k7();
		else if (__fx.customLobby.isActive())
			for (aA = aC.kA - 1; 0 <= aA; aA--) this.hE[aA + k5] = __fx.customLobby.gameInfo.difficulty;
		else if (aC.k8)
			if (3 === aC.data.botDifficultyType)
				for (aA = aC.kA - 1; 0 <= aA; aA--) {
					var hN = aA + k5;
					this.hE[hN] = aC.data.botDifficultyData[hN]
				} else if (2 === aC.data.botDifficultyType)
					for (aA = aC.kA - 1; 0 <= aA; aA--) this.hE[hN = aA + k5] = aC.data.botDifficultyTeam[be.kB[be.eY[hN]]];
				else if (1 === aC.data.botDifficultyType) {
			var kC = this.k0.length;
			for (aA = aC.kA - 1; 0 <= aA; aA--) this.hE[aA + k5] = aA % kC
		} else
			for (kC = aC.data.botDifficultyValue, aA = aC.kA - 1; 0 <= aA; aA--) this.hE[aA + k5] = kC;
		else
			for (var k9 = 8 === aC.k6 ? 1 : 0, aA = aC.kA - 1; 0 <= aA; aA--) this.hE[aA + k5] = k9;
		for (aA = 0; aA < k5; aA++) this.hE[aA] = 6;
		var ea = aC.eX;
		for (aA = 0; aA < ea; aA++) this.hE[aA] <= 2 ? (jx[aA] = 5, jy[aA] = jz[aA] = 1040, 0 === this.hE[aA] ? (jv[aA] = 980, jw[aA] = 980) : 1 === this.hE[aA] ? (jv[aA] = 980, jw[aA] = 920, jy[aA] = jz[aA] = 1100) : (jv[aA] = 825, jw[aA] =
			750)) : this.hE[aA] <= 4 ? (jx[aA] = 1 + aw.j7(20), 3 === this.hE[aA] ? (jv[aA] = jw[aA] = 500, jy[aA] = jz[aA] = 1e3) : (jz[aA] = 250 + aw.j7(1501), jy[aA] = 500 + aw.j7(501), jv[aA] = 300 + aw.j7(201), jw[aA] = 100 + aw.j7(
			201))) : this.hE[aA] <= 5 ? (jy[aA] = 1e3, jz[aA] = 1e3, jx[aA] = 35 + aw.j7(16), jv[aA] = 300 + aw.j7(201), jw[aA] = 50 + aw.j7(101)) : (jy[aA] = jz[aA] = 800, jx[aA] = 5, jv[aA] = 10, jw[aA] = 250), kD(aA)
	}, this.k7 = function() {
		for (var eE = ax.kE, k5 = aC.jp, aA = eE - 1; 0 <= aA; aA--) this.hE[aA + k5] = 0;
		for (var eu = 0; eu < 6; eu++) {
			for (aA = eE + ax.kF[eu] - 1; eE <= aA; aA--) this.hE[aA + k5] = eu;
			eE += ax.kF[eu]
		}
	}, this.jb = function(g7, value) {
		ju[g7] = Math.min(value, ju[g7])
	}, this.ij = function(g7) {
		0 == --ju[g7] && ! function(g7) {
			(function(g7) {
				jy[g7] !== jz[g7] && (jy[g7] += jy[g7] < jz[g7] ? 3 : -3);
				jv[g7] !== jw[g7] && (jv[g7] += jv[g7] < jw[g7] ? jx[g7] : -jx[g7], jv[g7] = (Math.abs(jv[g7] - jw[g7]) <= jx[g7] ? jw : jv)[g7]);
				ju[g7] = bJ.dj(jy[g7], 10)
			})(g7), am.ie.jS(g7, bJ.dj(jv[g7] * af.gb[g7], 1e3))
		}(g7)
	}, this.kI = function(g7, g2) {
		jy[g7] = jz[g7] = g2
	}
}

function iZ() {
	var kJ = new Uint16Array(aC.eX);

	function kO(player, kM) {
		for (var ea = bM.f5[0], fC = bM.fC, kY = -1, kZ = aC.eX, aA = 0; aA < ea; aA++) {
			var eq, g7 = fC[aA];
			eT(player, g7) && (eq = bK.i2(kM, bK.iN(g7)), -1 === kY || eq < kY) && (kY = eq, kZ = g7)
		}
		return kZ
	}

	function kQ(kN, kM) {
		if (kN === aC.eX) return 0;
		for (var gG = af.gG[kN], kX = gG.length, ea = Math.min(kX, 10), kZ = 0, kY = bK.i2(gG[kZ] >> 2, kM), aA = 0; aA < ea; aA++) {
			var hN = aw.j7(kX),
				eq = bK.i2(gG[hN] >> 2, kM);
			eq < kY && (kY = eq, kZ = hN)
		}
		return gG[kZ] >> 2
	}

	function kT(player, kM, j0, kc) {
		var kd;
		(kc === aC.eX || (kd = bK.iN(j0), kc = bK.iN(kc), bK.i2(kM, kd) < bK.i2(kM, kc))) && (kJ[player] = j0)
	}
	this.dU = function() {
		kJ.fill(aC.eX)
	}, this.ij = function(player) {
		var kM, kP, kN, j0 = function(player) {
			var j0 = kJ[player];
			if (j0 !== aC.eX) {
				if (b8.fv.kb(j0)) return j0;
				kJ[player] = aC.eX
			}
			return aC.eX
		}(player);
		return function(player) {
			for (var kW = ak.jr, kX = ak.jq, ea = Math.min(kX, kX < 17 && 5 === aw.j7(20) ? 1 : 16), g8 = aw.j7(kX), fC = bM.fC, gG = af.gG, g2 = 0, aA = 0; aA < ea; aA++) {
				var g7 = kW[(aA + g8) % kX];
				g7 !== player && gG[g7].length && (fC[g2++] = g7)
			}
			bM.f5[0] = g2
		}(player), 0 !== bM.f5[0] && (0 < (kP = kQ(kN = kO(player, kM = bK.iS(player)), kM)) && bL.kR.kS(player, kP) ? (kT(player, kM, kN, j0), !0) : 0 < (kN = function(player, kM) {
			for (var ea = bM.f5[0], fC = bM.fC, ka = kJ, g8 = 0, aA = 0; aA < ea; aA++) {
				var g7 = fC[aA],
					g7 = ka[g7];
				g7 !== aC.eX && b8.fv.kb(g7) && player !== g7 && eT(player, g7) && (fC[g8++] = g7)
			}
			return 0 !== (bM.f5[0] = g8) ? kQ(kO(player, kM), kM) : 0
		}(player, kM)) && bL.kR.kS(player, kN) ? (kT(player, kM, ab.eS(kN << 2), j0), !0) : !!(0 < (kP = kQ(j0, kM)) && bL.kR.kS(player, kP)))
	}
}

function ii() {
	function kh(player) {
		for (var f0 = af.f0[player], ea = f0.length, f1 = Math.max(bJ.dj(ea, 12), 1), ec = ab.ec, dw = aw.j7(ea), aA = 0; aA < ea; aA += f1)
			for (var eP = f0[(aA + dw) % ea], ed = 3; 0 <= ed; ed--) {
				var ee = eP + ec[ed];
				if (ab.ef(ee)) return {
					eE: ee,
					id: ab.eI(ee),
					g7: player
				}
			}
		return null
	}

	function km(player, ko) {
		var hE = b8.fv.kp(player, aD.k4[aD.hE[player]]);
		af.g1[player].push(ko.eE), ac.ix(player, hE, ko.g7), aE.iy(player, !0)
	}
	this.ij = function(player) {
		return !!bQ.eF(bQ.eG) && !!aC.data.passableMountains && 0 !== af.f0[player].length && function(player) {
			var kg = kh(player);
			if (null === kg) return !1;
			! function(player) {
				for (var jr = ak.jr, jq = ak.jq, ea = Math.min(jq, 12), g8 = aw.j7(jq), fC = bM.fC, f0 = af.f0, g2 = 0, aA = 0; aA < ea; aA++) {
					var g7 = jr[(aA + g8) % jq];
					g7 !== player && f0[g7].length && eT(player, g7) && (fC[g2++] = g7)
				}
				bM.f5[0] = g2
			}(player);
			var kj = function(eH) {
				for (var ea = bM.f5[0], fC = bM.fC, aA = 0; aA < ea; aA++) {
					var ko = kh(fC[aA]);
					if (null !== ko && ko.id === eH) return ko
				}
				return null
			}(kg.id);
			return null !== kj ? (km(player, kj), !0) : function(player, eH) {
				var ea = am.iU.kn;
				if (0 !== ea)
					for (var eE = am.iU.e7[aw.j7(ea)] << 2, ec = ab.ec, ed = aw.j7(4);;) {
						if (eE += ec[ed], ab.ef(eE)) {
							if (ab.eI(eE) === eH) return km(player, {
								eE: eE,
								g7: aC.eX
							}), !0;
							break
						}
						if (!ab.eR(eE)) break
					}
				return !1
			}(player, kg.id)
		}(player)
	}
}

function iX() {
	this.ij = function(player) {
		var eM = function(player) {
			var ea = am.iU.kn;
			if (0 === ea) return -1;
			for (var kX = Math.min(ea, am.performance.kr ? ea : 10), e7 = am.iU.e7, j6 = bJ.dj(aw.random() * ea, aw.value(100)), e = j6 + kX, ks = aw.iT(af.iO[player], af.iP[player]), kt = aw.iT(af.iQ[player], af.iR[player]), kZ = -1, eq = bK
					.i3(0, 0, bQ.el, bQ.em), aA = j6; aA < e; aA++) {
				var g8 = aA % ea,
					ku = bK.es(ks, kt, e7[g8]);
				ku < eq && (eq = ku, kZ = g8)
			}
			return -1 !== kZ ? e7[kZ] : -1
		}(player);
		return -1 !== eM && bL.kR.kS(player, eM)
	}
}

function ia() {
	this.kr = 0, this.dU = function() {
		this.kr = 0
	}, this.ij = function() {
		if (!this.kr && bd.jm() % 30 == 7 && b8.fv.kx(80) && (am.performance.kr = 1)) {
			if (aC.hP) {
				var l0 = bf.l1();
				if (be.kB[l0]) {
					bf.l2(l0);
					var g = bM.fD,
						ea = bM.f5[0];
					if (0 !== ea)
						for (var l3 = Math.min(100 + 10 * (ea - 1), 400), aA = 0; aA < ea; aA++) aD.kI(g[aA], l3)
				}
			}
			aD.kI(l4[0], 100)
		}
	}
}

function iV() {
	var l5 = 0,
		l6 = 0,
		l7 = 300,
		l8 = 300;
	this.kn = 0, this.e7 = new Uint32Array(512), this.dU = function() {
		l6 = l5 = 0, this.kn = 0
	}, this.ij = function() {
		if (function() {
				var ea = am.iU.kn;
				if (0 === ea) return 1;
				var e7 = am.iU.e7;
				if (bd.jm() % 35 == 6) {
					for (var aA = ea - 1; 0 <= aA; aA--) ab.eR(e7[aA] << 2) || (ea--, e7[aA] = e7[ea]);
					am.iU.kn = ea
				}
				return ea < e7.length
			}())
			if (l7 <= l5) am.iU.kn || bd.jm() % 12 != 8 || b8.fv.lC() || am.iU.dU();
			else {
				var aA, i = bQ.el,
					lD = i - 2,
					ea = lD * (bQ.em - 2),
					lE = l7,
					e7 = am.iU.e7,
					kX = am.iU.kn,
					lF = e7.length,
					g8 = Math.min(l6 + lE * ((1 + 19 * am.performance.kr) * l8), ea);
				for (aA = l6; aA < g8; aA += lE) {
					var eE = 4 * (aA % lD + (bJ.dj(aA, lD) + 1) * i + 1);
					if (ab.eR(eE) && (e7[kX] = eE >> 2, ++kX === lF)) {
						aA += lE;
						break
					}
				}(l6 = aA) >= ea && (l6 = ++l5), am.iU.kn = kX
			}
	}
}

function lG() {
	aM.ij(), ae.ij(), aV.lH(), ay.x.ij()
}

function lI() {
	az.ij(), aF.ij(), ad.ij(), b2.ij(), aE.ij(), am.ij(), bL.x.ij(), ak.lJ(), aU.ij(), ax.ij(), bT.ij(), ae.ij(), ae.lK(), aV.ij(), bN.ij(), aT.ij(), aO.ij(), aM.ij(), b3.ij(), aQ.ij(), au.ij(), bb.ij(), bf.ij(), ay.x.ij(), ay.lL.ij(), s.ij(), b7
	.ij(), bd.ij()
}

function lM() {
	aG.ij(), aW.ij(), aP.ij(), at.ij(), bA.ij(), av.lN()
}

function lO() {
	aU.lP(!1), aO.lP(), aV.lP(!1), aT.lP(), aQ.lP(), au.lP(), ae.lP(!1), bf.lQ()
}

function lR() {
	ae.lP(!1) && (bd.dc = !0), ay.x.ij()
}

function c1() {
	var lS, lT, lU;

	function lW(lY) {
		for (var aA = lS - 1; 0 <= aA; aA--) 0 === lU[lT[aA]] && af.gN[lT[aA]] >= lY && fc(lT[aA])
	}

	function lV(player) {
		var di;
		64 === lU[player] ? lU[player] = 6 : (di = af.gN[player], lU[player] = di < 1e3 ? 3 : di < 1e4 ? 2 : di < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lS = 0, lT = new Uint16Array(aC.eX), lU = new Uint8Array(aC.eX)
	}, this.ij = function() {
		for (var aA = lS - 1; 0 <= aA; aA--) 64 === lU[lT[aA]] ? lV(lT[aA]) : 0 == lU[lT[aA]]-- && (lV(lT[aA]), fc(lT[aA]));
		16e4 <= af.gN[l4[0]] && (lW(16e4), 3e5 <= af.gN[l4[0]]) && lW(3e5), b8.fv.kb(aC.eK) && (bb.lZ[7] = Math.max(af.gN[aC.eK], bb.lZ[7]))
	}, this.fx = function(player) {
		for (var et, aA = lS - 1; 0 <= aA; aA--)
			if (player === lT[aA]) {
				for (lS--, et = aA; et < lS; et++) lT[et] = lT[et + 1];
				return
			}
	}, this.iy = function(player, la) {
		for (var aA = lS - 1; 0 <= aA; aA--)
			if (player === lT[aA]) return;
		lT[lS++] = player, lU[player] = la ? 2 : 64
	}
}

function c2() {
	var size, jd;
	this.dU = function() {
		size = aC.kA, jd = new Uint16Array(aC.eX);
		for (var jp = aC.jp, aA = aC.kA - 1; 0 <= aA; aA--) jd[aA] = jp + aA
	}, this.ij = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === af.ld[jd[aA]]) {
				et = void 0;
				var et = aA;
				size--, jd[et] = jd[size]
			} else aD.ij(jd[aA])
	}, this.lc = function(g7) {
		jd[size++] = g7
	}
}

function c3() {
	var lf, lg, lh, li, lj, lk, ll, lm, ln, lo, lp, lq, lr, ls = !1,
		lt = !1;

	function lu(lv) {
		lq = bd.e9, lh = li = lg = 0, lj = (lr = 33) / lv, lf = 1 / (lv / lr / 4), lk = (h.i / 2 + iA) / iB, ll = (h.j / 2 + iC) / iB, lm = iB
	}

	function m2(aA) {
		var m5; - 1 !== aA && (aA = bK.iH(bL.x.m4[aA]), m5 = bK.ei(aA) - 10, aA = bK.ek(aA) - 10, aG.ly(m5, aA, 19 + m5, 19 + aA))
	}

	function mG(e1) {
		Math.abs(Math.log(lp / lm)) < .125 && (lp = e1 * lm)
	}

	function mF(m5, m6, mI, mJ) {
		ln = (m5 + mI + 1) / 2, lo = (m6 + mJ + 1) / 2;
		mI = h.i / (mI - m5 + 1), m5 = h.j / (mJ - m6 + 1);
		lp = .9 * (mI < m5 ? mI : m5)
	}
	this.lw = function() {
		return ls
	}, this.lx = function() {
		lu(1), this.ly(0, 0, bQ.el - 1, bQ.em - 1), aC.gv || aC.gj || this.lz(aC.eK, 3e3, !0, .3)
	}, this.m0 = function(player, m1) {
		m2(bL.h3.m3(player, m1))
	}, this.lz = function(player, lv, m7, zoom) {
		aC.m8 || ls && !m7 && lt || (0 === af.gN[player] ? m2(bL.h3.m9(player)) : (aR.mA = !1, lt = m7, lu(lv), function(player) {
			ln = (af.iO[player] + af.iP[player] + 1) / 2, lo = (af.iQ[player] + af.iR[player] + 1) / 2
		}(player), function(zoom, player) {
			var hv = af.iP[player] - af.iO[player] + 1,
				player = af.iR[player] - af.iQ[player] + 1,
				et = h.i / hv,
				eu = h.j / player,
				et = (lp = et < eu ? et : eu, 0 !== zoom ? zoom : hv < 20 && player < 20 ? .5 : .9);
			lp *= et, mG(7 / 8)
		}(zoom, player), ls = !0, ap.mD()))
	}, this.mE = function(lv) {
		aC.gj || aC.m8 || (aR.mA = !1, lt = !1, lu(lv), mF(0, 0, bQ.el - 1, bQ.em - 1), mG(7 / 8), ls = !0, ap.mD())
	}, this.ly = function(m5, m6, mI, mJ) {
		mF(m5, m6, mI, mJ), iB = lp, aR.mK(ln, h.i / 2), aR.mL(lo, h.j / 2), bY.mM(), bd.dc = !0
	}, this.mN = function() {
		return !(ls && lt || (ls = !1))
	}, this.ij = function() {
		var mQ, mR, ed, mU;
		ls && (lg < .5 ? li < lj && (li += lj * lf, lh = lg) : 1 - lh < lg && (li = (li -= lj * lf) < lj * lf ? lj * lf : li), lq = lq >= bd.e9 ? bd.e9 - 1 : lq, ed = bd.e9 - lq, lg = 1e3 < ed || 1 < (lg += li * ed / lr) ? 1 : lg, lq = bd.e9,
			ed = iB, mQ = iA, mR = iC, ed = (iB = lm * Math.pow(lp / lm, lg)) / ed, mU = 1 - (lm * Math.pow(lp / lm, 1 - lg) - lm) / (lp - lm), aR.mK(lk + mU * (ln - lk), h.i / 2), aR.mL(ll + mU * (lo - ll), h.j / 2), ae.zoom(ed, (mQ * ed -
				iA) / (1 - ed), (mR * ed - iC) / (1 - ed)), bY.mM(), 1 <= lg && (ls = !1, bZ.mV = !0), bd.dc = !0)
	}
}

function bv() {
	var ev = b8.color;
	this.mW = ev.mX(0, 0, 0), this.mY = ev.mZ(0, 0, 0, .7), this.ma = ev.mZ(0, 0, 0, .5), this.mb = ev.mZ(0, 0, 0, .85), this.mc = ev.mZ(0, 0, 0, .75), this.md = ev.mZ(0, 0, 0, .6), this.me = ev.mZ(0, 0, 0, .35), this.mf = ev.mX(255, 255, 255), this
		.mg = ev.mZ(255, 255, 255, .3), this.mh = ev.mZ(255, 255, 255, .6), this.mi = ev.mZ(255, 255, 255, .4), this.mj = ev.mZ(255, 255, 255, .25), this.mk = ev.mZ(255, 255, 255, .85), this.ml = ev.mZ(255, 255, 255, .75), this.mm = ev.mZ(255, 255,
			255, .15), this.mn = ev.mZ(255, 255, 255, .11), this.mo = ev.mX(128, 128, 128), this.mp = ev.mZ(64, 64, 64, .75), this.mq = ev.mZ(88, 88, 88, .83), this.mr = ev.mZ(60, 60, 60, .85), this.ms = ev.mZ(80, 60, 60, .85), this.mt = ev.mX(170,
			170, 170), this.mu = ev.mX(200, 235, 245), this.mv = ev.mX(30, 255, 30), this.mw = ev.mX(0, 200, 0), this.mx = ev.mX(128, 255, 128), this.my = ev.mZ(10, 65, 10, .75), this.mz = ev.mZ(0, 255, 0, .6), this.n0 = ev.mZ(0, 255, 0, .5), this
		.n1 = ev.mZ(0, 200, 0, .5), this.n2 = ev.mZ(0, 100, 0, .75), this.n3 = ev.mZ(0, 60, 0, .8), this.n4 = ev.mZ(0, 255, 0, .3), this.n5 = ev.mZ(0, 180, 0, .6), this.n6 = ev.mZ(0, 120, 0, .85), this.n7 = ev.mX(0, 120, 0), this.n8 = ev.mZ(0, 70, 0,
			.85), this.n9 = ev.mX(190, 230, 190), this.nA = ev.mX(0, 255, 0), this.nB = ev.mX(255, 120, 120), this.nC = ev.mX(255, 160, 160), this.nD = ev.mX(255, 70, 70), this.nE = ev.mX(230, 0, 0), this.nF = ev.mZ(220, 0, 0, .6), this.nG = ev.mZ(
			255, 100, 100, .8), this.nH = ev.mZ(100, 0, 0, .85), this.nI = ev.mZ(60, 0, 0, .85), this.nJ = ev.mZ(200, 0, 0, .6), this.nK = ev.mZ(120, 0, 0, .85), this.nL = ev.mX(255, 70, 10), this.nM = ev.mX(230, 190, 190), this.nN = ev.mX(255, 0,
		0), this.nO = ev.mX(255, 0, 255), this.nP = ev.mZ(60, 0, 60, .85), this.nQ = ev.mZ(0, 60, 60, .85), this.nR = ev.mZ(10, 60, 60, .9), this.nS = ev.mZ(0, 96, 96, .75), this.nT = ev.mX(0, 255, 255), this.nU = ev.mX(160, 160, 255), this.nV = ev
		.mZ(0, 40, 90, .75), this.nW = ev.mZ(0, 0, 255, .6), this.nX = ev.mX(200, 200, 255), this.nY = ev.mX(255, 120, 100), this.nZ = ev.mZ(255, 255, 0, .5), this.na = ev.mZ(255, 255, 150, .2), this.nb = ev.mX(255, 255, 0), this.nc = ev.mX(255, 255,
			200), this.nd = ev.mZ(200, 200, 0, .6), this.ne = ev.mZ(140, 120, 0, .75), this.nf = ev.mZ(180, 160, 40, .75), this.ng = ev.mZ(70, 50, 20, .85), this.nh = ev.mZ(30, 30, 0, .85), this.ni = ev.mZ(60, 60, 0, .85), this.nj = ev.mZ(255, 140,
			0, .75), this.nk = ev.mZ(70, 40, 0, .85), this.nl = ev.mX(220, 120, 0), this.nm = ev.mZ(255, 200, 80, .85), this.nn = ev.mX(255, 150, 120), this.no = ev.mZ(0, 0, 0, 0), this.np = ev.mZ(255, 255, 255, 0), this.nq = ev.mZ(254, 254, 254, 0)
}

function cs() {
	this.gw = new nr, this.fv = new ns, this.nt = new nu, this.nv = new nw, this.js = new nx
}

function nr() {
	this.gx = function(eM) {
		aC.k8 ? b6.nt.gx(aC.eK, eM) : ay.ny.nz(eM)
	}, this.h7 = function(i9, j0) {
		aC.k8 ? b6.nt.h7(aC.eK, i9, j0) : ay.ny.o0(i9, j0)
	}, this.o1 = function(i9, o2) {
		aC.k8 ? b6.nt.o3(aC.eK, i9, o2) : ay.ny.o4(i9, o2)
	}, this.h5 = function(i9, eM) {
		aC.k8 ? b6.nt.h5(aC.eK, i9, eM) : bL.h3.h4(aC.eK, eM) && ay.ny.o5(i9, eM)
	}, this.o6 = function(m1, eM) {
		aC.k8 ? b6.nt.o6(aC.eK, m1, eM) : bL.h3.o7(aC.eK, m1, eM) && ay.ny.o8(m1, eM)
	}, this.o9 = function(j0) {
		aC.k8 ? b6.nt.o9(aC.eK, j0) : ay.ny.oA(j0)
	}, this.oB = function(oC) {
		aC.k8 ? b6.nt.oD(aC.eK, oC) : ay.ny.oE(oC)
	}, this.hJ = function(oF) {
		aC.k8 ? b6.nt.hJ(aC.eK, oF) : ay.ny.oG(oF)
	}, this.oH = function() {
		aC.k8 ? b6.nt.oH(aC.eK) : ay.ny.oI()
	}, this.hG = function() {
		aC.k8 ? b6.nt.hG(aC.eK) : ay.ny.o5(1, 0)
	}, this.h0 = function(i9, eM, j0) {
		aC.k8 ? b6.nt.h0(aC.eK, i9, eM, j0) : ay.ny.oJ(i9, eM, j0)
	}
}

function nx() {
	this.jt = function(player, o2, hE) {
		b8.fv.oK(player, hE, o2) && (ad.o1(player, o2), o2 < aC.jp) && aw.random() < aw.value(10) && (am.ie.iv[o2] = 0)
	}, this.oL = function(player, o2, hE) {
		b8.fv.oM(hE, o2) ? (b8.fv.fy(o2, bM.f7[0]), bb.oN(player, o2), ae.oO(o2, bM.f7[0])) : bb.fz(player, hE, 12)
	}
}

function ns() {
	this.oP = function(oC, player) {
		aM.oB(aC.eK, player, oC), ay.ny.oQ(oC, player)
	}, this.oR = function(player) {
		aM.oS(player, 0), ay.ny.oT(player)
	}, this.oU = function(oV, player) {
		aM.oW(oV, player), ay.ny.oX(oV, player)
	}, this.oY = function() {
		aC.k8 || aC.gj || ay.oZ.oY()
	}
}

function nw() {
	this.ij = function(aB) {
		var id, fH, mN;
		for (bF.dU(aB), bF.dx += 2, mN = 8 * bF.size; bF.dx + 8 <= mN;) id = bF.oa(4), fH = bF.oa(9), 0 === id ? this.ob(id, fH, bF.oa(22)) : 1 === id ? this.ob(id, fH, bF.oa(10), bF.oa(10)) : 2 === id ? this.ob(id, fH, bF.oa(10), bF.oa(9)) :
			3 === id || 4 === id ? this.ob(id, fH, bF.oa(10), bF.oa(22)) : 5 === id || 6 === id ? this.ob(id, fH, bF.oa(10)) : 7 === id ? this.ob(id, fH, bF.oa(1)) : 10 === id ? this.ob(id, fH, bF.oa(20), bF.oa(22)) : this.ob(id, fH)
	}, this.oc = [], this.od = function() {
		for (var og = 0, oh = 0, oi = 0, oj = 0, ok = 0, ol = 0, aA = 0; aA < 512; aA++) og += af.ld[aA], oh += af.gN[aA], oi += af.gb[aA], oj += bL.x.om[aA];
		ok += bL.x.on, ol += ak.jq, this.oc.push(oi % 1073741824 * 4 + (og + oh + oj + ok + ol) % 4)
	}, this.ob = function(id, fH, fJ, fL) {
		0 === id ? b6.nt.gx(fH, fJ) : 1 === id ? b6.nt.h7(fH, fJ, fL) : 2 === id ? b6.nt.o3(fH, fJ, fL) : 3 === id ? b6.nt.h5(fH, fJ, fL) : 4 === id ? b6.nt.o6(fH, fJ, fL) : 5 === id ? b6.nt.o9(fH, fJ) : 6 === id ? b6.nt.oD(fH, fJ) : 7 === id ?
			b6.nt.hJ(fH, fJ) : 8 === id ? b6.nt.oH(fH) : 9 === id ? b6.nt.oo(fH) : 10 === id && b6.nt.h0(fH, fJ >> 10, fL, fJ % 1024)
	}
}

function nu() {
	this.gx = function(player, eM) {
		b8.fv.gl(0) && b8.fv.gm(player) && bK.iE(eM) && (b7.op.oq(0, player, eM), aC.or.ix(player, eM))
	}, this.h7 = function(player, i9, j0) {
		b8.fv.gl(1) && b8.fv.gm(player) && b8.fv.os(player, j0) && b8.fv.ot(player, i9, 12, 0) && b8.fv.ou(player, j0) && ((j0 = ac.jB(player, bM.eW[0])) || ac.jT(player)) && (af.ov[player]++, b7.op.oq(1, player, i9, bM.eW[0]), am.ib.io(player,
			j0)) && (b8.fv.ow(player), bb.ox(player, i9), am.ib.iu(player))
	}, this.o3 = function(player, i9, o2) {
		b8.fv.gl(1) && b8.fv.gm(player) && aC.hP && b8.fv.os(player, o2) && b8.fv.oy(player, o2) && b8.fv.oK(player, b8.fv.i8(player, i9), o2) && (b7.op.oq(2, player, i9, o2), ad.o1(player, o2))
	}, this.h5 = function(player, i9, eM) {
		b8.fv.gl(1) && b8.fv.gm(player) && (0 === eM && 1 === i9 ? this.hG(player) : bK.iE(eM) && bL.x.on !== bL.x.k3 && bL.x.om[player] !== bL.x.oz && 0 !== af.gG[player].length && b8.fv.ot(player, i9, 32, 0) && bL.kR.kS(player, eM) && (bb.p0(
			player), b7.op.oq(3, player, i9, eM), b8.fv.ow(player), bj.p1.h5(player), bL.x.p2(player)))
	}, this.o6 = function(player, m1, eM) {
		b8.fv.gl(1) && b8.fv.gm(player) && bK.iE(eM) && bL.h3.p3(player, m1) && bL.kR.p4(eM) && (b7.op.oq(4, player, m1, eM), b8.fv.p5(player, 8), bb.fz(player, bM.f7[1], 12), bj.p1.o6(player), bL.x.o6())
	}, this.o9 = function(player, j0) {
		b8.fv.gl(1) && b8.fv.gm(player) && (j0 = Math.min(j0, aC.eX), ac.jB(player, j0)) && (b7.op.oq(5, player, j0), ac.p6(player, j0))
	}, this.oD = function(player, oC) {
		(b8.fv.gl(1) || b8.fv.gl(2)) && b8.fv.gm(player) && (oC = bJ.p7(oC, 0, 1023), b7.op.oq(6, player, oC), ae.p8(player, 0, oC))
	}, this.hJ = function(player, oF) {
		au.hI(player) && (b7.op.oq(7, player, oF), au.p9(player, oF))
	}, this.oH = function(player) {
		(b8.fv.gl(0) || b8.fv.gl(1)) && b8.fv.gm(player) && aL.pA(player) && (b7.op.oq(8, player), bO.oH(player))
	}, this.oo = function(player) {
		b7.op.oq(9, player), bO.oo(player)
	}, this.hG = function(player) {
		au.hK(player) && (b7.op.oq(3, player, 1, 0), au.hG(player))
	}, this.h0 = function(player, i9, eM, j0) {
		b8.fv.gl(1) && b8.fv.gm(player) && b8.fv.os(player, j0) && b8.fv.ou(player, j0) && bK.iE(eM) && al.eB.eU(player, eM) && (ac.jB(player, bM.eW[0]) || ac.jT(player)) && (b7.op.oq(10, player, (i9 << 10) + bM.eW[0], eM), j0 = b8.fv.kp(player,
			i9), af.g1[player].push(bM.eb[0]), ac.ix(player, j0, bM.eW[0]), aE.iy(player, !0), bb.pB(player))
	}
}

function pC() {
	var pE;
	this.pD = [], this.pE = document.createElement("div"), this.pF = function(pG, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pG, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pE.appendChild(
			title), title
	}, this.pH = function(pG, marginBottom) {
		var pI = document.createElement("p");
		return pI.textContent = pG, pI.style.fontSize = "0.75em", pI.style.lineHeight = "1.2em", pI.style.marginBottom = marginBottom || "0", this.pE.appendChild(pI), pI
	}, this.pJ = function(pG) {
		var pK = document.createElement("p");
		return pK.textContent = pG, pK.style.fontSize = "1em", pK.style.marginBottom = "0", pK.style.whiteSpace = "pre-wrap", pK.style.overflowWrap = "break-word", this.pE.appendChild(pK), pK
	}, this.pL = function(pM, fontSize) {
		var pE = document.createElement("div");
		return pE.innerHTML = pM, pE.style.fontSize = fontSize || "1em", pE.style.lineHeight = "1.2em", this.pE.appendChild(pE), pE
	}, this.pN = function(pO) {
		for (var pP = pO.pP, ea = pP.length, aA = 0; aA < ea; aA++) this.pE.appendChild(pP[aA])
	}, this.pQ = function(pR) {
		return this.pD.push(pR), this.pE.appendChild(pR.e), pR
	}, this.resize = function() {
		for (var ea = this.pD.length, aA = 0; aA < ea; aA++) this.pD[aA].resize && this.pD[aA].resize()
	}, (pE = this.pE).style.position = "absolute", pE.style.height = "auto", pE.style.padding = "0.5em"
}

function pS(pT, pU) {
	var pE = document.createElement("div");

	function pd() {
		var aA, pe, j, g8, ed, pY = h.k * pE.offsetWidth,
			pf = new Float64Array(function(pY) {
				var i = .25 * b8.pZ.pa(.6) * h.pb;
				return Math.max(Math.floor(pY / i), 1)
			}(pY)),
			pg = ba.pg,
			ph = (pY - (pf.length + 1) * ba.gap) / (pf.length * h.k);
		for (pf.fill(pg), aA = 0; aA < pU.length; aA++) pe = (ed = pU[aA].pE).style, j = b8.pi.min(pf), g8 = pf.indexOf(j), pe.top = b8.pZ.pj(j), pe.left = b8.pZ.pj(pg + g8 * (ph + pg)), pe.width = b8.pZ.pj(ph), b8.pZ.pk(ed, 5), pf[g8] += ed
			.offsetHeight + 3 * pg;
		pE.style.height = b8.pZ.pj(b8.pi.max(pf) - 2 * pg)
	}
	this.pV = pE, this.pW = pU, this.resize = function() {
		var aA;
		for (aA = 0; aA < pU.length; aA++) pU[aA].resize();
		pd(), pd()
	}, pE.style.width = "100%", pE.style.maxWidth = "100%", pT.style.lineHeight = "1.5em", pT.style.overflowX = "hidden", pT.style.overflowY = "auto";
	for (var aA = 0; aA < pU.length; aA++) pE.appendChild(pU[aA].pE);
	pT.appendChild(pE)
}

function v(pl, pm, pn, po, pp) {
	var self, pq = document.createElement("button");

	function px() {
		var q3;
		bH.q2() || (q3 = b8.color.q4(pn), !1 !== po && 0 < q3[0] && q3[0] < 255 && q3[0] === q3[1] && q3[0] === q3[2]) || (pq.style.backgroundColor = b8.color.q5(pn, q3[3] && q3[3] < 120 ? 150 : 50))
	}

	function pw() {
		if (po) {
			var q3 = b8.color.q4(pn);
			if (q3[0] === q3[1] && q3[0] === q3[2]) return
		}
		pm && ((q3 = pm(this)) ? 2 === q3 && px() : q7(this))
	}

	function pz() {
		this.style.backgroundColor = pn
	}

	function py() {
		q7(this)
	}

	function q7(ed) {
		ed.style.backgroundColor = pn, ed.blur()
	}
	this.button = pq, this.pr = pm, this.ps = pn, this.pv = function(q0) {
		q0 = 1.1 - Math.min(.01 * pl.length, .6) + .2 * q0;
		pq.style.fontSize = q0.toFixed(1) + "em"
	}, this.pu = function(ev) {
		ev ? 1 === ev ? ev = b9.mr : 2 === ev && (po = 1, ev = b9.mr) : (po = 0, ev = b9.mb), this.ps = pn = ev, pq.style.backgroundColor = ev
	}, self = this, pq.innerHTML = pl, pq.style.color = pp ? b9.nb : b9.mf, pq.style.userSelect = "none", pq.style.outline = "none", pq.style.overflowWrap = "break-word", self.pu(pn), pq.style.border = "none", pq.style.font = "inherit", self.pv(
		0), pq.style.padding = "0em 0.3em", pq.onclick = pw, pq.addEventListener("mouseover", px), pq.addEventListener("mouseout", py), pq.addEventListener("focus", px), pq.addEventListener("blur", pz)
}

function q8(q9, pT) {
	var pE;
	this.resize = function() {
		for (var aA = 0; aA < q9.length; aA++) b8.pZ.pk(q9[aA].button);
		pE.style.gap = pE.style.padding = b8.pZ.pj(ba.pg)
	}, (pE = document.createElement("div")).style.display = "grid", pE.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pE.style.overflowY = "auto", pE.style.gridAutoRows = "5.3em", pE.style.maxHeight = "100%";
	for (var aA = 0; aA < q9.length; aA++) q9[aA].pv(1), pE.appendChild(q9[aA].button);
	pT.appendChild(pE)
}

function qB(qC, qD, qE) {
	this.eh = 0, this.ej = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b8.pZ.pa(qE || .5) * qC[1] * h.pb, h.j - 2 * ba.gap), this.i = Math.min(this.j * (qC[0] / qC[1]), h.i - 2 * ba.gap), this.j = qC[1] * this.i / qC[0], this.eh = ba.gap + qD[0] * (h.i - this.i - 2 * ba.gap), this.ej = ba
			.gap + qD[1] * (h.j - this.j - 2 * ba.gap)
	}, this.qF = function() {
		return this.eh + .5 * this.i
	}
}

function qG(qH, qI) {
	var qR, self, qJ = document.createElement("div"),
		qK = document.createElement("div"),
		qL = document.createElement("div"),
		qM = null,
		qS = (this.qN = new qO({
			value: "",
			dx: -1
		}, 0, qP, function(e) {
			qM.qY.textContent = 127 - e.target.value.length
		}), 0),
		qT = 1,
		qU = 0,
		qV = 1048575;

	function qP() {
		qH(), qM.qY.textContent = 127
	}

	function qi(qh, pR) {
		pR && (pR.qo = 1, qh.appendChild(bl.qp.transform(pR)))
	}

	function qm(bp) {
		qT ? qJ.scrollTop = qJ.scrollHeight : bp && (qJ.scrollTop = qU)
	}
	this.qZ = function(qa) {
			qV = 1048575, qK.textContent = "", qa || this.lQ()
		}, this.lQ = function() {
			var qb = bl.x.qc[0],
				qb = bl.x.qe[qb],
				qf = qb.qf,
				ea = qf.length,
				j6 = 1048575 === qV ? 0 : ea - (qb.qg - qV + 1048575) % 1048575;
			if (qV = qb.qg, !(ea <= (j6 = Math.max(j6, 0)))) {
				for (var qh = document.createDocumentFragment(), aA = j6; aA < ea; aA++) qi(qh, bl.qj.qk(qf[aA], bl.qj.ql(qf[aA])));
				qK.appendChild(qh), qm()
			}
		}, this.qn = function(p) {
			var qh = document.createDocumentFragment();
			qi(qh, p), qK.appendChild(qh), qm()
		}, this.show = function(pT) {
			pT.appendChild(qJ), pT.appendChild(qL), this.resize(pT)
		}, this.qq = function(pT) {
			pT.removeChild(qJ), pT.removeChild(qL)
		}, this.resize = function(pT) {
			qS = pT ? pT.offsetHeight : qS;
			var pT = b8.pZ.qs(.04, .75),
				qt = Math.max(pT, qS - pT),
				qu = h.i / h.k,
				qv = .7 * qu,
				qt = (qL.style.top = b8.pZ.pj(qS - pT), qL.style.height = b8.pZ.pj(pT), qJ.style.top = b8.pZ.pj(qS - pT - qt), qJ.style.height = b8.pZ.pj(qt), b8.pZ.pk(qJ, 2), this.qN.e.style.width = b8.pZ.pj(qv), this.qN.e.style.fontSize = qR.button
					.style.fontSize = b8.pZ.pj(.5 * pT), b8.pZ.pk(this.qN.e, 6), qR.button.style.left = b8.pZ.pj(qv), qR.button.style.width = b8.pZ.pj(qu - qv), .385 * pT);
			z.a0.qx() && (qt *= .8 - .12 * (h.i > h.j)), qK.style.marginLeft = qK.style.marginRight = b8.pZ.pj(.5 * qt), qK.style.fontSize = b8.pZ.pj(qt), qm(1)
		}, (self = this).qN.e.qW = 127, qJ.style.position = "absolute", qJ.style.top = "0", qJ.style.left = "0", qJ.style.width = "100%", qJ.style.overflowX = "hidden", qJ.style.overflowY = "auto", qJ.style.font = "inherit", qJ.style
		.backgroundColor = b9.md, qJ.addEventListener("scroll", function() {
			qU = qJ.scrollTop, qT = qU < qJ.scrollHeight - qJ.clientHeight - 2 ? 0 : 1
		}), qK.style.font = "inherit", qL.style.position = "absolute", qL.style.left = "0", qL.style.width = "100%", self.qN.e.setAttribute("placeholder", L(13)), self.qN.e.style.position = "absolute", self.qN.e.style.top = "0", self.qN.e.style
		.left = "0", self.qN.e.style.height = "100%", self.qN.e.style.backgroundColor = b9.ma, self.qN.e.style.textAlign = "center", (qR = new v(L(14), qP)).button.top = "0", qR.button.style.position = "absolute", qR.button.style.height = "100%", qR
		.pu(b9.np), qM = new qX("127", qR.button, 1, 1), qJ.appendChild(qK), qL.appendChild(self.qN.e), qL.appendChild(qR.button)
}

function qy(qz, pl, r0) {
	function click() {
		var value = 1 - qz.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pl, void 0 !== qz.dx ? bh.r1.r2(qz.dx, value) : qz.value = value, r0 && r0(value)
	}
	var e;
	pl = pl || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (qz.value ? "🟩 " : "⬜ ") + pl, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r3(pT, pM) {
	var pE = document.createElement("div");
	this.pV = pE, this.resize = function() {
		pE.style.padding = b8.pZ.pj(ba.pg), pE.style.lineHeight = b8.pZ.pj(b8.pZ.qs(.035))
	}, pT.style.overflowX = "hidden", pT.style.overflowY = "auto", pE.innerHTML = pM, pT.appendChild(pE)
}

function r4(r5) {
	var pE = document.createElement("div");
	this.e = pE, this.r6 = r5, this.resize = function() {
		for (var ea = r5.length, aA = 1; aA < ea; aA++) b8.pZ.pk(r5[aA], 4)
	};
	var aA, ea = r5.length;
	for (pE.style.width = "100%", pE.style.height = "2.7em", pE.style.marginTop = "0.6em", pE.style.border = "inherit", aA = 0; aA < ea; aA++) r5[aA].style.verticalAlign = "top", r5[aA].style.width = (100 / ea).toFixed(2) + "%", r5[aA].style.height =
		"100%", r5[aA].style.fontSize = "0.75em", pE.appendChild(r5[aA])
}

function r7(r8, pn, r9) {
	this.pE = document.createElement("div"), this.q9 = r8;
	var rA = 0;
	this.resize = function(pT, rC) {
		var ea = r8.length;
		if (!r9)
			for (var aA = 1; aA < ea; aA++) b8.pZ.pk(r8[aA].button, 4);
		for (var rD = 0, aA = 0; aA < ea; aA++) rD += r8[aA].button.offsetWidth;
		if (pT && (rA = pT.offsetWidth), rC && rD < rA)
			for (aA = 0; aA < ea; aA++) r8[aA].button.style.width = (100 * r8[aA].button.offsetWidth / rD).toFixed(2) + "%";
		else
			for (aA = 0; aA < ea; aA++) r8[aA].button.style.width = "auto";
		rC || this.resize(pT, 1)
	};
	var rB = this;
	rB.pE.style.height = rB.pE.style.maxHeight = "100%";
	for (var aA = 0; aA < r8.length; aA++) r8[aA].pu(pn), r8[aA].button.style.height = "100%", r8[aA].button.style.padding = "0.0em 0.9em", rB.pE.appendChild(r8[aA].button)
}

function rE() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b8.pZ.pk(this.e, 8, b9.mo)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rF() {
	var rJ, rK, rG = document.createElement("div"),
		rH = 0,
		rI = 0;
	this.show = function(eh, ej, pG, rL, rM) {
		if (rH) {
			if (!rL) return;
			this.qq()
		}
		eh === ej && -1 === eh ? (eh = rJ, ej = rK) : (rJ = eh, rK = ej), rM || (rI = rL), rH = 1;
		rM = h.i / h.k, rG.style.whiteSpace = "pre", rG.textContent = pG, b8.pZ.pk(rG, 5), rG.style.font = b8.pZ.rO(0, b8.pZ.qs(.015)), rG.style.padding = "0.3em 0.6em", rG.style.left = eh + "px", rG.style.top = "0px", document.body.appendChild(
			rG), rL = eh + rG.offsetWidth - rM;
		0 < rL && (rG.style.left = (pG = eh - rL) + "px", pG < 5) && (rG.style.whiteSpace = "pre-wrap"), rG.style.top = ej - rG.offsetHeight + rI * ba.rQ + "px"
	}, this.qq = function(rR) {
		if (rH) {
			if (rR && rI) return 0;
			rH = 0, document.body.removeChild(rG)
		}
		return 1
	}, rG.style.position = "absolute", rG.style.backgroundColor = b9.mb, rG.style.color = b9.mf, rG.style.pointerEvents = "none", rG.style.zIndex = "5", rG.style.maxWidth = "100%"
}

function qO(rS, type, rT, rU) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rV++, e.value = rS.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.mf, e.style.backgroundColor = b9.mY, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.rW++
		}), e.addEventListener("blur", function() {
			h.rW--, -1 !== rS.dx && bh.r1.r2(rS.dx, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rS.dx && bh.r1.r2(rS.dx, e.value), rT ? rT() : e.blur())
		}), rU && e.addEventListener("input", function(pR) {
			rU(pR)
		})
}

function rX(pT, data) {
	var ea = data.rY.length,
		rZ = document.createElement("div"),
		ra = document.createElement("div"),
		rb = document.createElement("div"),
		rc = new Array(ea),
		pU = new Array(ea),
		rd = new Array(data.re.length),
		rf = b8.color.mZ(70, 70, 0, .35);

	function q5() {
		this.style.backgroundColor = b8.color.q5(rf, 160)
	}

	function rk() {
		this.style.backgroundColor = rf
	}

	function pd() {
		var et;
		for (pT.style.font = b8.pZ.rO(0, b8.pZ.ru(.026, .5, .03)), aA = 1; aA < rd.length; aA++) b8.pZ.pk(rd[aA], 4);
		if (b8.pZ.pk(rZ, 2), ea) {
			for (var gz, rv = rZ.offsetWidth, rw = rb.offsetWidth, aA = 0; aA < rd.length; aA++) gz = .01 * data.rj[aA] * rw, rd[aA].style.width = (100 * gz / rv).toFixed(2) + "%";
			var kX = data.rY[0].length;
			for (aA = 0; aA < ea; aA++)
				for (b8.pZ.pk(rc[aA], 2), et = 1; et < kX; et++) b8.pZ.pk(pU[aA][et], 4);
			ra.rg && (ra.scrollTop = ra.rg)
		}
	}
	this.resize = function() {
			pd(), pd()
		}, pT.style.display = "flex", pT.style.flexDirection = "column", ra.style.overflowX = "hidden", ra.style.overflowY = "auto", ra.addEventListener("scroll", function() {
			this.rg = this.scrollTop
		}),
		function() {
			var ed, aA, rY = data.rY,
				kX = ea ? rY[0].length : 0;
			for (aA = 0; aA < ea; aA++) {
				rc[aA] = document.createElement("div"), rc[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.mZ(130, 130, 130, .35) : b9.me
				}(aA), rc[aA].style.width = "100%", rc[aA].style.display = "flex", pU[aA] = new Array(kX);
				for (var et = 0; et < kX; et++) pU[aA][et] = ed = document.createElement("div"), ed.style.display = "flex", ed.style.justifyContent = "center", ed.style.wordBreak = "break-all", ed.style.padding = "0.4em 0em", ed.style.width = data
					.rj[et] + "%", ed.innerHTML = rY[aA][et].f2, 1 === rY[aA][et].di && (ed.name = "" + aA, ed.style.color = b9.nb, ed.style.backgroundColor = rf, ed.addEventListener("mouseover", q5), ed.addEventListener("mouseout", rk), function(ed,
						rm, rn) {
						2147483647 !== rn && ed.addEventListener("click", function() {
							bB.a6(30), bB.a7(30, rm), bF.dU(bB.aB), this.style.backgroundColor = rf, s.t(8, s.ro, new rp(25, {
								rq: 0,
								rm: bD.rr.rs(bD.rr.rt(5)),
								rn: rn
							}))
						})
					}(ed, rY[aA][et].rm, rY[aA][et].rn)), rc[aA].appendChild(ed)
			}
			for (rZ.style.display = "flex", rZ.style.backgroundColor = b8.color.mZ(0, 120, 0, .35), aA = 0; aA < rd.length; aA++) rd[aA] = ed = document.createElement("div"), ed.style.display = "flex", ed.style.justifyContent = "center", ed.style
				.wordBreak = "break-all", ed.style.padding = "0.4em 0em", ed.style.width = data.rj[aA] + "%", ed.innerHTML = data.re[aA], rZ.appendChild(ed)
		}();
	for (var aA = 0; aA < ea; aA++) rb.appendChild(rc[aA]);
	ra.appendChild(rb), pT.appendChild(rZ), pT.appendChild(ra)
}

function rx() {
	var s1, s2, ry = document.createElement("div"),
		rz = document.createElement("div"),
		s0 = document.createElement("div"),
		rb = document.createElement("div"),
		q9 = [],
		s3 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		s4 = [1, 2, 3, 0, 9, 10, 11];

	function s6(aA) {
		s.t(8, 0, new rp(21, {
			s8: s4[aA],
			s9: 0,
			sA: 10
		}))
	}
	this.show = function() {
			this.r2(s.x.sB), document.body.appendChild(ry)
		}, this.qq = function() {
			document.body.removeChild(ry)
		}, this.r2 = function(sB) {
			for (var sC = [3, 0, 1, 2, 4, 5, 6], aA = 0; aA < q9.length; aA++) {
				var i = sB[aA];
				s1[sC[aA]][1].qY.textContent = i || ""
			}
		}, this.resize = function() {
			var aA, sD = ba.gap,
				j = b8.pZ.sE(.085),
				i = Math.min(4 * j, h.i - 2 * sD),
				ea = q9.length;
			for (b8.pZ.sF(ry, sD, h.j - sD - j, i, j), b8.pZ.pk(ry), b8.pZ.pk(rz, 6), aA = 0; aA < ea - 1; aA++) b8.pZ.pk(q9[aA].button, 6);
			for (aA = 0; aA < ea; aA++) s1[aA][0].resize();
			for (q9[0].eh = 0, q9[0].button.style.left = b8.pZ.pj(q9[0].eh), q9[0].button.style.width = b8.pZ.pj(100), aA = 1; aA < ea; aA++) q9[aA].eh = q9[aA - 1].eh + q9[aA - 1].button.offsetWidth, q9[aA].button.style.left = b8.pZ.pj(q9[aA].eh);
			if (!s2) {
				if (!aa.sG()) return;
				(s2 = aa.get(14)).style.width = "24%", s2.style.position = "absolute", rz.appendChild(s2)
			}
			s2.style.left = b8.pZ.pj(0), s2.style.top = "7%", s0.sH && (s0.scrollLeft = s0.sH)
		}, ry.style.position = "absolute", rz.style.width = "25%", rz.style.height = "100%", rz.style.backgroundColor = b9.mb, s0.style.position = "absolute", s0.style.width = "75%", s0.style.height = "100%", s0.style.backgroundColor = b9.mb, s0
		.style.top = s0.style.right = b8.pZ.pj(0), b8.pZ.s5(s0), rb.style.height = rb.style.maxHeight = "100%", q9.push(new v("", function() {
			s6(0)
		}, b9.nP)), q9.push(new v("", function() {
			s6(1)
		}, b9.nQ)), q9.push(new v("", function() {
			s6(2)
		}, b9.nI)), q9.push(new v("", function() {
			s6(3)
		}, b9.n3)), q9.push(new v("", function() {
			s6(4)
		}, b9.nk)), q9.push(new v("", function() {
			s6(5)
		}, b9.ni)), q9.push(new v("", function() {
			s6(6)
		}, b9.nk)), s1 = new Array(q9.length);
	for (var aA = 0; aA < q9.length; aA++) q9[aA].button.style.position = "absolute", s1[aA] = [new s7(s3[aA], q9[aA].button, .25, .45), new s7("", q9[aA].button, .53, .84, 1)], q9[aA].button.style.height = q9[aA].button.style.maxHeight = "100%", q9[
		aA].button.top = b8.pZ.pj(0), rb.appendChild(q9[aA].button);
	s0.appendChild(rb), ry.appendChild(rz), ry.appendChild(s0)
}

function sI(sJ, sK, sL, sM, qH, qI) {
	var sN = document.createElement("div"),
		sO = document.createElement("div"),
		sP = document.createElement("div"),
		sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("div"),
		sU = document.createElement("div"),
		sV = document.createElement("span"),
		sW = document.createElement("div");
	this.sX = new qG(qH, qI), this.sY = new sZ(qI), this.sa = [sJ, sK, sL, sM], this.se = function(sf) {
		sf = (sf / 10).toFixed(1) + "%";
		sU.style.width = sf, sV.innerHTML = sf
	}, this.sg = function() {
		this.sY.qq(sS), this.sX.show(sS)
	}, this.sh = function() {
		this.sX.qq(sS), this.sY.show(sS)
	}, this.si = function() {
		return sO
	}, this.show = function() {
		document.body.appendChild(sN)
	}, this.qq = function() {
		document.body.removeChild(sN)
	}, this.resize = function(sj) {
		var sk = 1 - .4 * z.a0.qx() * (h.i > 1.6 * h.j),
			sl = b8.pZ.qs(.05 * sk),
			sm = h.j > h.i,
			sn = b8.pZ.qs(.07 * sk + .03 * sm),
			so = b8.pZ.qs(.04 + .02 * sm),
			sm = b8.pZ.qs(.02 * sk + .01 * sm),
			sq = b8.pZ.qs(.025);
		sN.style.font = b8.pZ.rO(0, sq), sk < 1 && (sq = b8.pZ.rO(0, sk * sq), sP.style.font = sq, sR.style.font = sq, sW.style.font = sq, sT.style.font = sq, sQ.style.font = sq), sO.style.height = b8.pZ.pj(sl), sO.style.font = b8.pZ.rO(0, .72 *
				sl), b8.pZ.pk(sO, 2), sP.style.top = b8.pZ.pj(sl), sP.style.height = b8.pZ.pj(sn), b8.pZ.pk(sP, 2), sQ.style.font = b8.pZ.rO(0, sk * b8.pZ.qs(.02)), sQ.style.top = b8.pZ.pj(sl + sn), sQ.style.height = b8.pZ.pj(so), b8.pZ.pk(sQ,
			2), sR.style.top = b8.pZ.pj(sl + sn + so), sR.style.height = b8.pZ.pj(sn), b8.pZ.pk(sR, 2), sS.style.top = b8.pZ.pj(sl + sn + so + sn), sS.style.height = b8.pZ.pj(h.j / h.k - sl - 3 * sn - so - sm), sT.style.top = b8.pZ.pj(h.j / h.k -
				sn - sm), sT.style.height = b8.pZ.pj(sm), b8.pZ.pk(sT, 8), sV.style.font = b8.pZ.rO(0, .8 * sm), sW.style.top = b8.pZ.pj(h.j / h.k - sn), sW.style.height = b8.pZ.pj(sn), b8.pZ.pk(sW, 8), sJ.resize(sP), sK.resize(sP), sL.resize(
			sP), sM.resize(sP), sj ? this.sX.resize(sS) : this.sY.resize()
	};
	qH = this;
	sN.style.position = "absolute", sN.style.top = "0", sN.style.left = "0", sN.style.width = "100%", sN.style.height = "100%", sN.style.backgroundColor = b9.me, bH.q2() || (sN.style.backdropFilter = "blur(4px)", sN.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sN.style.display = "none"), sO.style.position = "absolute", sO.style.top = "0", sO.style.left = "0", sO.style.width = "100%", sO.style.display = "flex", sO.style.alignItems = "center";
	for (var g = [sP, sQ, sR, sW], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pZ.s5(g[aA]);
	sS.style.position = "absolute", sS.style.left = "0", sS.style.width = "100%", sS.style.font = "inherit", sT.style.position = "absolute", sT.style.left = "0", sT.style.width = "100%", sU.style.position = "absolute", sU.style.top = "0", sU.style
		.left = "0", sU.style.height = "100%", sU.style.width = "50%", sU.style.backgroundColor = b9.n1, sV.innerHTML = "", sV.style.position = "absolute", sV.style.top = "50%", sV.style.left = "50%", sV.style.transform = "translate(-50%, -50%)", sO
		.appendChild(function() {
			var sd = document.createElement("h1");
			return sd.textContent = L(23), sd.style.margin = "0 auto 0.15em auto", sd.style.webkitTextStroke = "0.02em brown", sd.style.fontFamily = "Arial Black, Trebuchet MS", sd.style.fontSize = "inherit", sd.style.fontWeight = "inherit", sd
		}()), sP.appendChild(sJ.pE), sQ.appendChild(sK.pE), sR.appendChild(sL.pE), sT.appendChild(sU), sT.appendChild(sV), sW.appendChild(sM.pE), sN.appendChild(sO), sN.appendChild(sP), sN.appendChild(sQ), sN.appendChild(sR), sN.appendChild(sS), sN
		.appendChild(sT), sN.appendChild(sW), qH.sY.show(sS)
}

function sZ(qI) {
	var sN = document.createElement("div"),
		sS = document.createElement("div");
	this.lQ = function() {
			sS.textContent = "", bl.ss.qq(1);
			for (var qh = document.createDocumentFragment(), st = bl.x.qc[0], su = bl.su.sv[st], sw = bl.su.sw[st], aA = 0; aA < su.length; aA++) ! function(qh, pR, sy, st) {
				var qY = document.createElement("span");
				qY.textContent = (sy ? "🟢 " : "⚪ ") + bl.qj.sz(pR, st), qY.style.color = bl.qj.t0(pR.t1), qY.style.cursor = "pointer", qY.style.margin = "0.2em 0.2em 0.2em 0.2em", qY.style.width = qY.style.maxWidth = 2 === st ? "10em" : "9em",
					qY.style.height = qY.style.maxHeight = "1.4em", qY.style.whiteSpace = "nowrap", qY.style.overflow = "hidden", qY.style.textOverflow = "ellipsis", qY.style.font = "inherit", qY.style.display = "inline-block", bl.qj.t2(pR) && (
						qY.style.textDecoration = "underline"), qY.onclick = function(e) {
						qI(e, pR)
					}, bH.q2() || (qY.onmouseover = function(e) {
						bl.ss.t3(e, pR, 1)
					}), qh.appendChild(qY)
			}(qh, su[aA], aA < sw, st);
			sS.appendChild(qh)
		}, this.show = function(pT) {
			pT.appendChild(sN)
		}, this.qq = function(pT) {
			pT.removeChild(sN)
		}, this.resize = function() {
			sS.style.fontSize = b8.pZ.pj(b8.pZ.qs(.02, .3))
		}, sN.style.top = "0", sN.style.left = "0", sN.style.width = sN.style.height = "100%", sN.style.overflowX = "hidden", sN.style.overflowY = "auto", sN.style.font = "inherit", sS.style.font = "inherit", sS.style.margin = "0.4em", sN
		.appendChild(sS)
}

function t4(t5) {
	var sN = document.createElement("div"),
		qL = document.createElement("div"),
		t6 = [];

	function px() {
		bH.q2() || (this.style.backgroundColor = b8.color.q5(b9.mb, 50))
	}

	function py() {
		this.style.backgroundColor = b9.mb
	}
	this.r2 = function(t8, t9) {
			t6[2].textContent = t8 + 1 + " / " + t9
		}, this.show = function(pR) {
			qL.appendChild(bl.qp.transform(pR)), document.body.appendChild(sN)
		}, this.resize = function() {
			var j = b8.pZ.qs(.03, .5);
			sN.style.width = 10 * j + "px", sN.style.font = b8.pZ.rO(1, .75 * j), b8.pZ.pk(sN, 4), qL.style.top = j + "px", qL.style.font = b8.pZ.rO(0, .55 * j), b8.pZ.pk(qL, 2), sN.style.height = j + qL.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pZ.pk(t6[aA], 6), t6[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) t6[aA].style.height = j + "px", b8.pZ.pk(t6[aA], 2);
			t6[2].style.width = 4 * j + "px", t6[1].style.left = 2 * j + "px", t6[2].style.left = 4 * j + "px", t6[3].style.left = 8 * j + "px"
		}, this.tA = function() {
			for (var aA = 0; aA < 4; aA++) t6[aA].onclick = null, t6[aA].onmouseover = null, t6[aA].onmouseout = null;
			document.body.removeChild(sN), sN = qL = t6 = null
		}, sN.style.position = "absolute", sN.style.color = b9.mf, sN.style.zIndex = "3", sN.style.right = "0", sN.style.top = "0", qL.style.position = "absolute", qL.style.height = "auto", qL.style.color = b9.mf, qL.style.backgroundColor = b9.mb, qL
		.style.left = "0", qL.style.width = "100%", qL.style.overflowWrap = "break-word", sN.appendChild(qL);
	for (var aA = 0; aA < 4; aA++) t6[aA] = document.createElement("div"), t6[aA].style.position = "absolute", t6[aA].style.backgroundColor = b9.mb, t6[aA].style.color = b9.mf, t6[aA].style.top = "0", t6[aA].style.display = "flex", t6[aA].style
		.justifyContent = "center", t6[aA].style.alignItems = "center", t6[aA].style.userSelect = "none", t6[aA].style.outline = "none", t6[aA].style.font = "inherit", 2 !== (t6[aA].t7 = aA) && (t6[aA].onclick = t5, t6[aA].onmouseover = px, t6[aA]
			.onmouseout = py), sN.appendChild(t6[aA]);
	t6[0].textContent = "◀", t6[1].textContent = "▶", t6[3].textContent = "✖"
}

function tB(t5) {
	var rG = document.createElement("div");

	function px() {
		bH.q2() || (rG.style.backgroundColor = b8.color.q5(b9.mb, 50))
	}

	function py() {
		rG.style.backgroundColor = b9.mb
	}
	this.r2 = function(t9) {
			rG.textContent = t9
		}, this.show = function() {
			document.body.appendChild(rG)
		}, this.resize = function() {
			var j = b8.pZ.qs(.03, .5);
			rG.style.width = 2 * j + "px", rG.style.height = j + "px", rG.style.font = b8.pZ.rO(1, .75 * j), b8.pZ.pk(rG, 4), b8.pZ.pk(rG, 2)
		}, this.tA = function() {
			rG.onclick = null, rG.onmouseover = null, rG.onmouseout = null, document.body.removeChild(rG), rG = null
		}, rG.style.position = "absolute", py(), rG.style.color = b9.mf, rG.style.zIndex = "3", rG.style.right = "0", rG.style.top = "0", rG.style.display = "flex", rG.style.justifyContent = "center", rG.style.alignItems = "center", rG.style
		.userSelect = "none", rG.style.outline = "none", rG.onclick = t5, rG.onmouseover = px, rG.onmouseout = py
}

function tC(r8) {
	var sN = document.createElement("div"),
		tD = document.createElement("div"),
		rH = (this.eh = 0, this.ej = 0);

	function tF() {
		bl.tG.qq()
	}
	this.q9 = r8, this.show = function(eh, ej, tI) {
		if (rH) return [0, 0];
		rH = 1, this.eh = eh, this.ej = ej,
			function(self, tI) {
				var i = b8.pZ.qs(.16, .7),
					j = r8.length * i / 3,
					tK = h.i / h.k,
					tL = h.j / h.k,
					mH = Math.min(1, Math.min(tK / i, tL / j));
				i *= mH, j *= mH, tI && (self.eh += b8.pZ.qs(.03, .5)), self.eh = bJ.p7(self.eh, 0, tK - i), self.ej = bJ.p7(self.ej, 0, tL - j), tD.style.left = self.eh + "px", tD.style.top = self.ej + "px", tD.style.width = i + "px", tD.style
					.height = j + "px", tD.style.font = b8.pZ.rO(0, .34 * j / r8.length), b8.pZ.pk(tD, 5);
				for (var aA = 1; aA < r8.length; aA++) b8.pZ.pk(r8[aA].button, 8)
			}(this, tI), document.body.appendChild(sN)
	}, this.qq = function() {
		rH && (rH = 0, sN.removeEventListener("click", tF), document.body.removeChild(sN))
	};
	for (var aA = 0; aA < r8.length; aA++) new qX("" + (1 + aA), r8[aA].button, 0, 1);
	sN.style.position = "fixed", sN.style.top = "0", sN.style.left = "0", sN.style.width = "100%", sN.style.height = "100%", sN.style.zIndex = "5", tD.style.position = "absolute",
		function() {
			for (var tH = (100 / r8.length).toFixed(2) + "%", aA = 0; aA < r8.length; aA++) r8[aA].button.style.width = "100%", r8[aA].button.style.height = r8[aA].button.style.maxHeight = tH, r8[aA].button.style.padding = "0.0em 0.9em", tD
				.appendChild(r8[aA].button)
		}(), sN.appendChild(tD), sN.addEventListener("click", tF)
}

function tM(rS, tN) {
	this.pP = [];
	var tO = this.pP;

	function click() {
		for (var aA = 0; aA < tO.length; aA++) tO[aA].textContent = tO[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dx = parseInt(this.name);
		void 0 !== rS.dx && bh.r1.r2(rS.dx, dx), tN && tN(dx)
	}
	for (var tP, ea = rS.tQ.length, aA = 0; aA < ea; aA++)(tP = document.createElement("p")).textContent = "⚪ " + rS.tQ[aA], tP.style.margin = "0", tP.name = "" + aA, tP.style.cursor = "pointer", tP.style.fontSize = "1em", tP.addEventListener(
		"click", click), tO.push(tP);
	tO[rS.value].textContent = tO[rS.value].textContent.replace("⚪", "🟢")
}

function tR(title, tS, tT) {
	var ry = document.createElement("div"),
		tU = document.createElement("div"),
		rb = document.createElement("div"),
		tV = document.createElement("div"),
		tW = document.createElement("div");
	this.tX = rb, this.tY = tS, this.show = function() {
			!1 !== tT ? document.body.appendChild(ry) : (document.body.appendChild(tU), document.body.appendChild(tV))
		}, this.qq = function() {
			!1 !== tT ? document.body.removeChild(ry) : (document.body.removeChild(tU), document.body.removeChild(tV))
		}, this.tc = function() {
			var qt = b8.pZ.qs(.1),
				qr = b8.pZ.qs(.08 + .04 * (h.td < 1));
			return {
				qt: qt,
				qr: qr,
				te: h.j / h.k - qt - qr
			}
		}, this.resize = function(rC) {
			var ea = tS.length,
				tf = this.tc(),
				qt = tf.qt,
				qr = tf.qr;
			for (tU.style.height = b8.pZ.pj(qt), b8.pZ.pk(tU, 2), tV.style.top = b8.pZ.pj(h.j / h.k - qr), tV.style.height = b8.pZ.pj(qr), b8.pZ.pk(tV, 8), rb.style.top = b8.pZ.pj(qt), rb.style.height = rb.style.maxHeight = b8.pZ.pj(tf.te), tU.style
				.font = b8.pZ.rO(0, b8.pZ.qs(.02, .3)), tV.style.font = b8.pZ.rO(0, b8.pZ.qs(.02, .7)), rb.style.font = b8.pZ.rO(0, b8.pZ.qs(.02, .7)), aA = 1; aA < ea; aA++) b8.pZ.pk(tS[aA].button, 4);
			for (var rD = 0, aA = 0; aA < ea; aA++) rD += tS[aA].button.offsetWidth;
			if (rC && rD < tV.offsetWidth)
				for (aA = 0; aA < ea; aA++) tS[aA].button.style.width = (100 * tS[aA].button.offsetWidth / rD).toFixed(2) + "%";
			else
				for (aA = 0; aA < ea; aA++) tS[aA].button.style.width = "auto";
			tV.sH && (tV.scrollLeft = tV.sH), rC || this.resize(!0)
		}, this.tg = function() {
			var tf = this.tc(),
				ev = h.k;
			th.fillStyle = b9.mb, th.fillRect(0, ev * tf.qt, h.i, ev * tf.te)
		}, ry.style.position = "absolute", ry.style.top = "0", ry.style.left = "0", ry.style.width = "100%", ry.style.height = "100%", tU.style.position = "absolute", tU.style.top = "0", tU.style.left = "0", tU.style.width = "100%", tU.style
		.display = "flex", tU.style.backgroundColor = b9.mb, tV.style.position = "absolute", tV.style.left = "0", tV.style.width = "100%", b8.pZ.s5(tV), tW.style.height = tW.style.maxHeight = "100%", rb.style.position = "absolute", rb.style.width =
		"100%", rb.style.backgroundColor = b9.mb,
		function() {
			for (var aA = 0; aA < tS.length; aA++) tS[aA].button.style.height = "100%", tS[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tS.length; aA++) tW.appendChild(tS[aA].button);
	tU.appendChild(function() {
		var tb = document.createElement("h1");
		return tb.textContent = title, tb.style.margin = "auto", tb.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", tb.style.webkitTextStroke = "0.02em brown", tb.style.fontFamily = "Arial Black, Trebuchet MS", tb
	}()), tV.appendChild(tW), !1 !== tT && (ry.appendChild(rb), ry.appendChild(tU), ry.appendChild(tV))
}

function qX(ti, tj, tk, tl) {
	var self;
	this.qY = document.createElement("span"), (self = this).qY.textContent = ti, self.qY.style.color = b9.mf, self.qY.style.position = "absolute", self.qY.style.font = "inherit", tl ? self.qY.style.bottom = "0.06em" : self.qY.style.top = "0.12em",
		tk ? self.qY.style.left = "0.2em" : self.qY.style.right = "0.2em", self.qY.style.fontSize = "0.6em", self.qY.style.pointerEvents = "none", self.qY.style.whiteSpace = "pre", tj.style.position = "relative", tj.style.overflow = "hidden", tj
		.appendChild(self.qY)
}

function s7(ti, tj, tm, tn, to) {
	var self;
	this.qY = document.createElement("span"), this.resize = function() {
			this.qY.style.fontSize = ((tn - tm) * tj.offsetHeight).toFixed(1) + "px"
		}, (self = this).qY.textContent = ti, self.qY.style.color = b9.mf, self.qY.style.font = "inherit", self.qY.style.margin = "0.1em 0.6em", self.qY.style.pointerEvents = "none", to && (self.qY.style.fontWeight = "bold"), self.qY.style
		.whiteSpace = "nowrap", self.qY.style.display = "block", tj.appendChild(self.qY)
}

function tp(tq, tr, ts, tt) {
	var tu = document.createElement("textarea"),
		tv = (this.e = tu, !0);

	function u1() {
		tu.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tr && b8.pZ.pk(tu, 5)
		}, this.tw = function(tx) {
			tu.value = tx
		}, this.ty = function() {
			return tu.value
		}, this.tz = function() {
			tu.select()
		}, this.clear = function() {
			tu.value = ""
		}, this.u0 = function() {
			tv && navigator.clipboard ? (tu.select(), navigator.clipboard.writeText(tu.value).catch(function() {
				tv = !1, u1()
			})) : u1()
		}, tu.setAttribute("id", "textArea" + s.x.rV++), tu.setAttribute("autocomplete", "off"), tq && tu.setAttribute("placeholder", tq), tu.style.top = "0", tu.style.left = "0", tu.style.width = "100%", tu.style.height = "100%", tu.style
		.userSelect = "none", tu.style.outline = "none", tu.style.resize = "none", tu.style.border = "none", tu.style.color = b9.mf, tu.style.backgroundColor = b9.mY, tt ? (tu.style.fontSize = "1em", tu.rows = 6, tu.style.padding = "0.25em") : (tu
			.style.padding = "0.45em", tu.style.fontSize = "1.2em"), ts && tu.addEventListener("input", function(e) {
			ts(e)
		}), tu.addEventListener("focus", function() {
			h.rW++
		}), tu.addEventListener("blur", function() {
			h.rW--
		})
}

function dC() {
	this.pr = new u2, this.e7 = new u3, this.r1 = new u4, this.x = new u5, this.dU = function() {
		this.e7.dU(), (new u6).dU()
	}
}

function u3() {
	function u7(aA, type, uE, dk) {
		bh.e7.data.push({
			dx: aA,
			type: type || 0,
			value: uE || 0,
			uE: uE || 0,
			dk: dk || 0
		})
	}

	function u8(aA, type, uE, dk) {
		bh.e7.data.push({
			dx: aA,
			type: type,
			value: uE || "",
			uE: uE || "",
			dk: dk || 0
		})
	}

	function u9(mN) {
		for (var aA = bh.e7.data.length; aA < mN; aA++) bh.e7.data.push(null)
	}
	this.data = [], this.dU = function() {
		u7(0, 1, 0, 5), u7(1, 1, 1), u7(2, 0), u8(3, 2), u7(4, 1), u8(5, 2, "Trebuchet MS", 1), u7(6, 0), u7(7, 0, 0), u7(8, 0), u7(9, 1, 1), u7(10, 1), u7(11, 1, 1), u8(12, 2, navigator.language), u7(13), u7(14), u9(100), u8(100, 2), u8(101, 2),
			u8(102, 2), u8(103, 2), u8(104, 2), u8(105, 2), u8(106, 2), u7(107), u7(108), u7(109), u8(110, 2), u7(111), u7(112), u7(113), u8(114, 2), u7(115), u8(116, 2), u7(117, 1), u8(118, 2, "", 2), u7(119, 1, 0, 1), u8(120, 2), u7(121, 1, ~~(
				262144 * Math.random())), u8(122, 2, "Player " + Math.floor(1e3 * Math.random())), u7(123), u8(124), u7(125, 1), u8(126, 2), u7(127, 0, 1), u7(128), u7(129), u7(130), u7(131), u7(132), u8(133, 2), u7(134, 0, 5), u8(135, 2), u8(
				136, 2), u7(137), u7(138), u7(139), u7(140), u7(141), u7(142), u7(143), u7(144), u8(145, 2), u7(146), u7(147), u8(148, 2), u7(149), u7(150, 0, 1), u8(151, 2), u7(152, 0, 5), u7(153, 1), u7(154, 1), u8(155, 2), u8(156, 2), u7(157),
			u7(158), u7(159), u7(160), u9(180), u7(180, 0), u7(181, 0)
	}, this.r2 = function(dx, value) {
		this.data[dx].value = value
	}, this.uA = function(dx, value) {
		this.r2(dx, value), bh.pr.save(dx, String(value)), bh.pr.save(dx, String(this.data[dx].dk), !0)
	}, this.uB = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pr.save(aA, String(this.data[aA].value)), bh.pr.save(aA, String(this.data[aA].dk), !0))
	}, this.uC = function(dx) {
		return Number(this.data[dx].value)
	}, this.uD = function(dx) {
		return String(this.data[dx].value)
	}
}

function u2() {
	this.uF = function(dx, dk) {
		return Number(this.uG(dx, dk))
	}, this.uG = function(dx, dk) {
		var f2 = null;
		return 0 === z.id ? z.uH && (f2 = z.uH.getItem((dk ? "v" : "d") + dx)) : 1 === z.id ? f2 = z.uI.loadString((dk ? 1e3 : 2e3) + dx) : 2 === z.id && (f2 = z.uJ[(dk ? "v" : "d") + dx]), f2 && 0 !== f2.length ? f2 : null
	}, this.uK = function(ea, uL) {
		var g = [],
			uM = uL ? "e" : "l";
		if (0 === z.id) {
			if (z.uH)
				for (aA = 0; aA < ea; aA++) g.push(z.uH.getItem(uM + aA))
		} else if (1 === z.id)
			for (var uN = uL ? 5e3 : 3e3, aA = 0; aA < ea; aA++) g.push(z.uI.loadString(uN + aA));
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) g.push(z.uJ[uM + aA]);
		return g
	}, this.save = function(dx, value, dk) {
		var uO = (dk ? "v" : "d") + dx;
		if (0 === z.id) {
			if (z.uH && bh.e7.data[140].value) try {
				z.uH.setItem(uO, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uI.saveString((dk ? 1e3 : 2e3) + dx, value) : 2 === z.id && (z.uJ[uO] = value, z.uP.postMessage(uO + " " + value))
	}, this.uQ = function(g, uL) {
		var ea = g.length,
			uM = uL ? "e" : "l";
		if (0 === z.id) {
			if (z.uH && bh.e7.data[140].value) try {
				for (aA = 0; aA < ea; aA++) z.uH.setItem(uM + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uN = uL ? 5e3 : 3e3, aA = 0; aA < ea; aA++) z.uI.saveString(uN + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) z.uJ[uM + aA] = g[aA], z.uP.postMessage(uM + aA + " " + g[aA])
	}
}

function u6() {
	this.dU = function() {
		! function() {
			var data = bh.e7.data;
			0 === data[2].dk && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uE = 1);
			0 === data[100].dk && (data[100].value = data[100].uE = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f2, data = bh.e7.data,
			ea = data.length;
		for (aA = 0; aA < ea; aA++) data[aA] && data[aA].dk === bh.pr.uF(aA, !0) && (f2 = bh.pr.uG(aA), data[aA].value = null === f2 ? data[aA].uE : 2 === data[aA].type ? f2 : Number(f2))
	}
}

function u5() {
	function uW(g) {
		if (0 === g.length) bh.r1.r2(116, "");
		else {
			for (var uZ = g[0], aA = 1; aA < g.length; aA++) uZ += ";" + g[aA];
			bh.r1.r2(116, uZ)
		}
	}
	this.uT = function() {
		bh.e7.data[110].value.length && (bh.e7.data[106].value = bh.e7.data[110], bh.r1.r2(110, ""), this.uU())
	}, this.uU = function() {
		var g = bh.e7.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.e7.data[106].value), g.unshift(bh.e7.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uV = [], aA = 0; aA < g.length; aA += 2) uV.push(g[aA]);
		uW(g), bh.e7.data[117].value = 0, bh.e7.data[117].tQ = uV
	}, this.uX = function(dx) {
		bh.e7.data[117].tQ.splice(dx, 1), bh.e7.data[117].value = Math.min(dx, bh.e7.data[117].tQ.length - 1);
		var g = bh.e7.data[116].value.split(";");
		g.splice(2 * dx, 2), uW(g)
	}, this.uY = function(dx) {
		var g = bh.e7.data[116].value.split(";");
		return {
			rm: g[2 * dx],
			password: g[2 * dx + 1]
		}
	}, this.ua = function() {
		var f2 = bJ.p7(bh.e7.data[121].value, -1, 262143);
		return f2 = -1 === f2 ? ~~(262144 * Math.random()) : f2
	}
}

function u4() {
	this.r2 = function(dx, value) {
		bh.e7.data[dx].value !== value && (bh.e7.uA(dx, value), 0 === dx ? (s.w(), b5.dU(), s.t(2)) : 1 === dx ? h.df(1) : 2 === dx ? h.df(0) : 5 === dx && (b8.pZ.ub(), h.df(0)))
	}, this.uc = function() {
		for (var data = bh.e7.data, aA = 0; aA < 100; aA++) data[aA] && bh.e7.uA(aA, data[aA].uE);
		b8.pZ.ub(), h.df(1), b5.dU()
	}, this.ud = function() {
		for (var data = bh.e7.data, aA = 0; aA < data.length; aA++) data[aA] && bh.e7.r2(aA, data[aA].uE)
	}, this.ue = function() {
		for (var eu = bh.e7, aA = 128; aA < 135; aA++) eu.uA(aA, eu.data[aA].uE)
	}, this.uf = function(data) {
		bh.r1.r2(109, data.rn), bh.r1.r2(107, data.ug), bh.r1.r2(108, data.uh), bh.r1.r2(112, data.ui), bh.r1.r2(111, data.uj), bh.r1.r2(113, data.uk), bh.r1.r2(135, data.ul), bh.r1.r2(136, data.um), bh.r1.r2(137, data.un), bh.r1.r2(138, data
			.uo), bh.r1.r2(139, data.up), bh.r1.r2(141, data.uq), bh.r1.r2(142, data.ur), bh.r1.r2(143, data.us), bh.r1.r2(144, data.ut)
	}
}

function bz() {
	this.rr = new uu, this.uv = new uw, this.ux = new uy, this.dU = function() {
		this.rr.dU()
	}
}

function uw() {
	this.uz = function(size) {
		for (var v0 = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v0.oa(16)));
		return g.join("")
	}, this.v1 = function(pG) {
		return 20 < (pG = pG.trim()).length ? pG.substring(0, 20) : pG
	}
}

function uu() {
	var v2 = new Uint8Array(78);
	this.dU = function() {
		var aA;
		for (v2[50] = 37, aA = 0; aA < 10; aA++) v2[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) v2[aA + 20] = aA + 11, v2[aA + 52] = aA + 38
	}, this.v3 = function(pG) {
		return pG.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v4 = function(pG, size) {
		if ((pG = this.v3(pG)).length > size) return pG.substring(0, size);
		for (; pG.length < size;) pG = "-" + pG;
		return pG
	}, this.v5 = function(pG) {
		for (var v6 = v2, ea = pG.length, g = new Uint8Array(ea), aA = 0; aA < ea; aA++) g[aA] = v6[pG.charCodeAt(aA) - 45];
		return g
	}, this.v7 = function(v8) {
		bB.a6(6 * v8.length), this.v9(v8), bF.dU(bB.aB)
	}, this.v9 = function(v8) {
		for (var ea = v8.length, i = bB, aA = 0; aA < ea; aA++) i.a7(6, v8[aA])
	}, this.vA = function(pG) {
		this.v9(this.v5(pG))
	}, this.vB = function(pG, size) {
		this.v9(this.v5(this.v4(pG, size)))
	}, this.vC = function(pG, size) {
		for (var g = this.v5(this.v4(pG, size)), f2 = 0, mH = 1, aA = g.length - 1; 0 <= aA; aA--) f2 += mH * g[aA], mH *= 64;
		return f2
	}
}

function vD() {
	var i, j, vE;

	function ve(gz, ed, vc, vJ, vX) {
		ed = vd(gz, ed + 1 + 2 * vJ & 3);
		! function(gz, vf) {
			return 1 < Math.abs(gz % i - vf % i) || 1 < Math.abs(vi(gz) - vi(vf))
		}(gz, ed) && 0 === vX[ed << 2] && (vX[ed << 2] = vc)
	}

	function vi(g7) {
		return Math.floor((g7 + .5) / i) % j
	}

	function vd(g7, ed) {
		return g7 + vE[ed]
	}
	this.vF = function(pG) {
		var aA, vG, ea, vH, v0 = bF;
		for (bE.rr.v7(bE.rr.v5(pG)), bQ.vK.vL[bQ.eG].i = bQ.el = i = v0.oa(12), bQ.vK.vL[bQ.eG].j = bQ.em = j = v0.oa(12), vE = [-i, -1, i, 1], bQ.vU = document.createElement("canvas"), bQ.vU.width = bQ.el, bQ.vU.height = bQ.em, bQ.vQ = bQ.vU
			.getContext("2d", {
				alpha: !1
			}), bQ.vR = bQ.vV = null, bQ.vR = bQ.vQ.getImageData(0, 0, bQ.el, bQ.em), bQ.vV = bQ.vR.data, b8.pi.vW(bQ.vV), ea = v0.oa(12), vG = v0.oa(5), vH = vN(i * j - 1), aA = 0; aA < ea; aA++) ! function(kX, g7, vI, vJ) {
			var aA, ed, v0 = bF,
				vX = bQ.vV,
				vY = g7,
				vZ = g7,
				va = 0,
				vb = 1 + vI,
				vc = 2 - vI;
			for (vX[g7 << 2] = vb, aA = 0; aA < kX; aA++) ed = v0.oa(2), g7 = vd(g7, ed), vX[g7 << 2] === vb ? va % 2 == 1 && ve(vZ, va + 2 * vJ + 3, vc, vJ, vX) : vX[g7 << 2] = vb, ve(g7, ed, vc, vJ, vX), ve(vZ, ed, vc, vJ, vX), vZ = g7,
				va = ed;
			vd(g7, 0) === vY ? (ve(g7, 0, vc, vJ, vX), ve(vY, 0, vc, vJ, vX)) : vd(g7, 1) === vY && (ve(g7, 0, vc, vJ, vX), ve(vY, 2, vc, vJ, vX));
			0 === kX && (ve(vY, 0, vc, vJ, vX), ve(vY, 2, vc, vJ, vX))
		}(v0.oa(vG), v0.oa(vH), 1 === v0.oa(1), 1 === v0.oa(1));
		var eh, ej, hN, vj, vk, vl, vX = bQ.vV,
			vm = !0,
			vn = bQ.vK.vL[bQ.eG].vn,
			vo = bQ.vK.vL[bQ.eG].vo;
		for (ej = 0; ej < j; ej++)
			for (vj = !0, vk = vm, eh = vl = 0; eh < i; eh++) hN = 4 * ej * i + 4 * eh, vl <= eh && 0 < vX[hN] && (vk = 2 === vX[hN], vj) && (vj = !1, vk !== vm) ? (vm = vk, vl = eh + 1, eh = -1) : (vk ? (vX[hN] = vo[0], vX[1 + hN] = vo[1], vX[
				2 + hN] = vo[2]) : (vX[hN] = vn[0], vX[1 + hN] = vn[1], vX[2 + hN] = vn[2]), vX[3 + hN] = 255);
		bQ.vQ.putImageData(bQ.vR, 0, 0), bQ.vS = !0, bQ.vT.dU(), bd.dc = !0
	}
}

function uy() {
	this.vF = function(vp) {
		for (var v0 = bF, size = v0.oa(vp), vq = 7 + 9 * v0.oa(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v0.oa(vq)));
		return g.join("")
	}
}

function c4() {
	var rJ, rK, vr, vs, vt, vu, vv, vw, vx, vy;

	function w0() {
		var w3 = aC.w3;
		for (vx = w3; vx < aC.eX; vx++) vz();
		for (vx = aC.gv ? aC.jp : 0; vx < w3; vx++) {
			if (!w4()) {
				for (var eu = aC.w8 = vx; eu < w3; eu++) vx = eu, vz();
				return
			}
			w7(vu + rJ * vt + bJ.dj(vt, 2), vv + rK * vt + bJ.dj(vt, 2))
		}
	}

	function wa(player) {
		for (var iO = af.iO, iQ = af.iQ, iP = af.iP, iR = af.iR, ej = iQ[player]; ej <= iR[player]; ej++)
			for (var eh = iO[player]; eh <= iP[player]; eh++) {
				var eE = ab.wb(eh, ej);
				ab.g9(eE) && (ab.j2(eE) ? ab.g4(eE, player) : ab.wc(eE, player))
			}
	}

	function wZ(g, s9, sA) {
		var di = g[s9];
		g[s9] = g[sA], g[sA] = di
	}

	function w4() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rJ = bJ.dj(vr * aw.random(), aw.value(100)), rK = bJ.dj(vs * aw.random(), aw.value(100)), wh()) return 1;
			return
		}() || function() {
			var hv, hy, et, w6, eu, w5;
			for (hv = bJ.dj(vr * aw.random(), aw.value(100)), hy = bJ.dj(vs * aw.random(), aw.value(100)), et = 40; 1 <= et; et--)
				for (w6 = vs - et; 0 <= w6; w6 -= 40)
					for (rK = (w6 + hy) % vs, eu = 40; 1 <= eu; eu--)
						for (w5 = vr - eu; 0 <= w5; w5 -= 40)
							if (rJ = (w5 + hv) % vr, wh()) return 1;
			return
		}()
	}

	function wh() {
		for (var g7, wj, gap = bJ.dj(vt - vw, 2), wk = vv + rK * vt + gap, wl = vu + rJ * vt + gap, wi = wk + vw - 1; wk <= wi; wi--)
			for (wj = wl + vw - 1; wl <= wj; wj--)
				if (g7 = ab.wb(wj, wi), !ab.eV(g7) || ab.j2(g7)) return;
		return 1
	}

	function w7(w5, w6) {
		vz(), wm(w5 - 2, w6 - 2)
	}

	function vz() {
		af.ld[vx] = 0, af.gN[vx] = af.wX[vx] = 0, af.g1[vx] = [], af.gF[vx] = [], af.gG[vx] = [], af.f0[vx] = [], af.iO[vx] = af.iQ[vx] = af.iP[vx] = af.iR[vx] = 0
	}

	function wm(w5, w6) {
		var g7, aA, wn, wo;
		for (af.ld[vx] = 1, af.iO[vx] = w5 + 10, af.iQ[vx] = w6 + 10, af.iR[vx] = af.iP[vx] = 0, wn = w5; wn < w5 + 4; wn++)
			for (wo = w6; wo < w6 + 4; wo++)(w5 < wn && wn < w5 + 3 || w6 < wo && wo < w6 + 3) && (g7 = ab.wb(wn, wo), ab.eV(g7)) && (af.iO[vx] = Math.min(wn, af.iO[vx]), af.iP[vx] = Math.max(wn, af.iP[vx]), af.iQ[vx] = Math.min(wo, af.iQ[vx]), af
				.iR[vx] = Math.max(wo, af.iR[vx]), vy[af.gN[vx]] = g7, af.gN[vx]++, ab.wc(g7, vx));
		for (af.wX[vx] = af.gN[vx], aA = af.gN[vx] - 1; 0 <= aA; aA--) ab.wp(vy[aA], vx) ? (ab.g4(vy[aA], vx), af.gF[vx].push(vy[aA])) : ab.wq(vy[aA]) ? (ab.g4(vy[aA], vx), af.gG[vx].push(vy[aA])) : ab.wr(vy[aA]) && (ab.g4(vy[aA], vx), af.f0[vx]
			.push(vy[aA]))
	}

	function wg(w5, w6) {
		for (var g7, wj, wi = w6; w6 - 6 < wi; wi--)
			for (wj = w5; w5 - 6 < wj; wj--)
				if (g7 = ab.wb(wj, wi), ab.j2(g7)) return;
		return 1
	}
	this.dU = function() {
		if (vy = new Array(12), vw = 6, vt = 10, vr = bJ.dj(bQ.el, vt), vs = bJ.dj(bQ.em, vt), vu = bJ.dj(bQ.el - vt * vr, 2), vv = bJ.dj(bQ.em - vt * vs, 2), aC.gv)
			for (var aA = 0; aA < aC.jp; aA++) vx = aA, vz(), af.ld[vx] = 1;
		(0 === aC.data.spawningType ? w0 : 1 === aC.data.spawningType ? (w0(), function() {
			var w9 = aC.wA;
			aC.wB || w9++;
			if (!(w9 < 3)) {
				for (var data = aC.data, j6 = (aC.gv ? aC.jp : 0) + data.teamPlayerCount[0], mN = aC.w8, wC = new Uint32Array(w9), wD = new Uint32Array(w9), wE = new Uint16Array(w9), wF = new Uint16Array(w9), eY = be.eY, iO = af.iO, iQ =
						af.iQ, iP = af.iP, iR = af.iR, fE = bM.fE, fF = bM.fF, aA = j6; aA < mN; aA++) fE[aA] = iO[aA] + iP[aA] >> 1, fF[aA] = iQ[aA] + iR[aA] >> 1;
				for (aA = j6; aA < mN; aA++) {
					var id = eY[aA];
					wC[id] += fE[aA], wD[id] += fF[aA]
				}
				var kB = be.kB;
				for (aA = 1; aA < w9; aA++) {
					var g2 = Math.max(data.teamPlayerCount[kB[aA]], 1);
					wE[aA] = bJ.dj(wC[aA], g2), wF[aA] = bJ.dj(wD[aA], g2)
				}
				var wG = be.wG,
					wH = be.wH,
					wI = be.wI,
					fD = bM.fD;
				for (aA = 0; aA < 512; aA++) fD[aA] = aA;
				for (var dw = 0; dw < 2 + (4 <= w9); dw++)
					for (aA = j6; aA < mN; aA++) {
						for (var gz = aA, wJ = fD[gz], wK = 1, eq = bJ.wL(fE[wJ] - wE[1], fF[wJ] - wF[1]), et = 2; et < w9; et++) {
							var wM = bJ.wL(fE[wJ] - wE[et], fF[wJ] - wF[et]);
							wM < eq && (eq = wM, wK = et)
						}
						var wN = eY[gz];
						if (wK !== wN) {
							if (2 === dw && 4 <= w9) {
								var wO = Math.max((wK + 1) % w9, 1),
									wP = bJ.wL(fE[wJ] - wE[wO], fF[wJ] - wF[wO]);
								for (et = 1; et < w9; et++) wM = bJ.wL(fE[wJ] - wE[et], fF[wJ] - wF[et]), eq < wM && wM < wP && (wP = wM, wO = et);
								wO !== wN && bJ.wL(wE[wN] - wE[wO], wF[wN] - wF[wO]) < bJ.wL(wE[wN] - wE[wK], wF[wN] - wF[wK]) && (wK = wO)
							}
							var wQ = kB[wK],
								wR = wH[wQ] + (aC.gv ? 0 : wI[wQ]),
								vf = wG[wR],
								wS = fD[vf],
								wT = wH[wQ + 1];
							eq = bJ.wL(fE[wS] - wE[wN], fF[wS] - wF[wN]);
							for (var ev = wR + 1; ev < wT; ev++) {
								var wU = wG[ev],
									wV = fD[wU];
								(wM = bJ.wL(fE[wV] - wE[wN], fF[wV] - wF[wN])) < eq && (eq = wM, vf = wU)
							}
							vf < j6 || mN <= vf || (wS = fD[vf], wC[wN] += fE[wS] - fE[wJ], wD[wN] += fF[wS] - fF[wJ], wC[wK] += fE[wJ] - fE[wS], wD[wK] += fF[wJ] - fF[wS], g2 = data.teamPlayerCount[kB[wN]], wE[wN] = bJ.dj(wC[wN], g2),
								wF[wN] = bJ.dj(wD[wN], g2), g2 = data.teamPlayerCount[wQ], wE[wK] = bJ.dj(wC[wK], g2), wF[wK] = bJ.dj(wD[wK], g2), fD[gz] = wS, fD[vf] = wJ)
						}
					}! function() {
						for (var fD = bM.fD, iO = af.iO, iQ = af.iQ, iP = af.iP, iR = af.iR, gN = af.gN, wX = af.wX, gF = af.gF, gG = af.gG, f0 = af.f0, aA = 0; aA < 512; aA++) {
							var wY = fD[aA];
							if (wY !== aA) {
								wZ(iO, aA, wY), wZ(iQ, aA, wY), wZ(iP, aA, wY), wZ(iR, aA, wY), wZ(gN, aA, wY), wZ(wX, aA, wY), wZ(gF, aA, wY), wZ(gG, aA, wY), wZ(f0, aA, wY), wa(aA), wa(wY), fD[aA] = aA;
								for (var j = wY, g8 = fD[j]; g8 !== aA;) g8 = fD[j = g8];
								fD[j] = wY
							}
						}
					}()
			}
		}) : function() {
			var w3 = aC.w3;
			for (vx = w3; vx < aC.eX; vx++) vz();
			for (vx = aC.gv ? aC.jp : 0; vx < w3; vx++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w5 = spawningData[2 * vx] + 1,
							spawningData = spawningData[2 * vx + 1] + 1;
						if (3 < w5 && w5 < bQ.el - 5 && 3 < spawningData && spawningData < bQ.em - 5 && ab.eV(ab.wb(w5, spawningData)) && wg(w5 + 3, spawningData + 3)) return w7(w5 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w4()) {
						for (var eu = aC.w8 = vx; eu < w3; eu++) vx = eu, vz();
						return
					}
					var w5 = vu + rJ * vt + bJ.dj(vt, 2),
						w6 = vv + rK * vt + bJ.dj(vt, 2);
					w7(w5, w6)
				}
		})(), bb.lZ[7] = af.gN[aC.eK]
	}, this.ws = function(j0, wt, wu) {
		var aA, w5, w6, g7, rJ, rK;
		for (vx = j0, aA = 0; aA < 20; aA++)
			for (w5 = wt + aA; wt - aA <= w5; w5--)
				for (w6 = wu + aA; wu - aA <= w6; w6--)
					if ((w5 === wt + aA || w5 === wt - aA || w6 === wu + aA || w6 === wu - aA) && 3 < w5 && w5 < bQ.el - 5 && 3 < w6 && w6 < bQ.em - 5 && ab.eV(ab.wb(w5, w6)) && wg(w5 + 3, w6 + 3)) {
						if (0 < af.gN[vx]) {
							for (rK = rJ = g7 = void 0, rJ = af.iP[vx]; rJ >= af.iO[vx]; rJ--)
								for (rK = af.iR[vx]; rK >= af.iQ[vx]; rK--) g7 = 4 * (rK * bQ.el + rJ), ab.ww(vx, g7) && (ab.wx(g7), af.gN[vx]--);
							vz()
						}
						return wm(w5 - 1, w6 - 1), !0
					} return !1
	}, this.wy = function(j0) {
		vx = j0, w4() ? w7(vu + rJ * vt + bJ.dj(vt, 2), vv + rK * vt + bJ.dj(vt, 2)) : vz()
	}
}

function wz() {
	aq.x0(), th.setTransform(iB, 0, 0, iB, 0, 0), th.imageSmoothingEnabled = iB < 3, th.drawImage(bQ.vU, aR.x1(), aR.x2()), bN.x3.tg(), th.drawImage(x4, aR.x1(), aR.x2()), aq.tg(), bL.tg(), ae.tg(), (aC.m8 ? (bf.tg(), bA) : (aM.tg(), aU.tg(), aQ
	.tg(), bA.tg(), au.tg(), aV.tg(), aR.tg(), aP.tg(), bf.tg(), aT.tg(), aO.tg(), aL.tg(), aK.tg(), aW.tg(), bc.tg(), at)).tg(), s.tg()
}

function x5(x6, i, j) {
	x6.clearRect(0, 0, i, j), x6.fillStyle = b9.mc, x6.fillRect(0, 0, i, j)
}

function x7(x6, i, j, x8) {
	x6.fillStyle = b9.mf, x6.fillRect(0, 0, i, x8), x6.fillRect(0, 0, x8, j), x6.fillRect(i - x8, 0, x8, j), x6.fillRect(0, j - x8, i, x8)
}

function x9(x6, eh, ej, hR, x8, g7, xA) {
	x6.fillStyle = b9.mf;
	var g7 = Math.floor(hR * g7),
		rw = (g7 += (g7 - x8) % 2, Math.floor((g7 - x8) / 2)),
		hR = Math.floor((hR - g7) / 2);
	x6.fillRect(eh + hR, ej + hR + rw, g7, x8), xA && x6.fillRect(eh + hR + rw, ej + hR, x8, g7)
}

function xC() {
	this.dU = function() {
		8 === aC.k6 && aM.xD()
	}, this.xE = function(xF) {
		var elo = aC.data.elo,
			hj = (elo[xF] - elo[1 - xF]) / 10,
			hj = 8 / (1 + Math.pow(2, hj / 32)),
			hj = Math.floor(10 * hj + .5),
			xH = this.xI(elo[xF] + (1 + aC.xJ) * hj + 1),
			elo = this.xI(elo[1 - xF] - hj);
		0 === xF ? aM.xL(xH, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xL(elo, xH, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xI = function(elo) {
		return 16e3 === (elo = bJ.p7(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qp = new xM, this.vX = new xN
}

function xN() {
	this.hH = !1;
	this.xR = [], this.xS = 100;
	var m5, m6, gap, hR, xO, xQ, xT = 0,
		xU = new Array(9),
		xV = [],
		xW = [],
		xX = 0,
		xY = 0,
		xZ = 0,
		xa = 0;

	function xm() {
		xU.sort(function(et, eu) {
			return eu.ju - et.ju
		});
		for (var pG = "" + xU[0].oC, aA = 1; aA < 9; aA++) pG += "," + xU[aA].oC;
		for (aA = 0; aA < 9; aA++) pG += "," + xU[aA].ju;
		bh.e7.uA(120, pG)
	}
	this.dU = function() {
		for (var xb = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xb.length; aA++) {
			var color = 6 === xb[aA] ? b9.n5 : b9.md;
			this.xR.push(b8.canvas.xc(aa.get(3), xb[aA], color))
		}
		for (aA = 0; aA < ai.qp.xd; aA++) xW.push(ai.qp.xe - ai.qp.xd + aA);
		for (aA = 0; aA < ai.qp.xf; aA++) xW.push(ai.qp.xg + aA);
		var xh = ai.qp.xi(bI.xh);
		for (aA = 0; aA < xh.length; aA++) xW.push(xh[aA]);
		! function() {
			var aA, g = bh.e7.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xU[aA] = {
					oC: 1015 + aA,
					ju: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f2 = parseInt(g[aA]),
						ev = (f2 = 0 <= f2 && f2 < ai.qp.xe ? f2 : 0, parseInt(g[aA + 9]));
					ev = 0 <= ev && ev < 1e3 ? ev : 0, xU[aA] = {
						oC: f2,
						ju: ev
					}
				}
		}()
	}, this.show = function(ks, kt, xn) {
		var aA;
		if (xX = ks, xY = kt, xT = xn || 0, this.hH = !0, xV = [], 0 === xT)
			for (aA = 0; aA < 9; aA++) xV.push(xU[aA].oC);
		else {
			var eu = 49 * xT,
				xn = eu - 49;
			for (xn >= xW.length && (xT = 1, xn = 0, eu = 49), aA = xn = (eu = Math.min(eu, xW.length)) - 49; aA < eu; aA++) xV.push(xW[aA])
		}
		xV.push(1024);
		xn = xV.length, hR = Math.floor((z.a0.qx() ? .075 : .0468) * h.pb), gap = Math.floor(hR / 3), (xZ = 10 * (xO = hR + gap)) > h.i && (xZ = h.i, gap = (xO = xZ / 10) - (hR = 3 * xO / 4)), xQ = bJ.dj(xn, 10) + !!(xn % 10), (xa = xQ * xO) > h
			.j && (xa = h.j, gap = (xO = xa / xQ) - (hR = 3 * xO / 4)), xn = .5 * gap;
		m5 = Math.min(Math.max(ks - .5 * xZ + xn, xn), h.i - xZ + xn), m6 = Math.min(Math.max(kt - .5 * xa + xn, xn), h.j - xa + xn)
	}, this.gn = function(ks, kt, player) {
		if (!this.hH) return !1;
		if (this.xp(ks, kt)) {
			ks = bJ.p7(bJ.dj(ks - m5 + .5 * gap, xO), 0, 9);
			if ((ks += 10 * bJ.p7(bJ.dj(kt - m6 + .5 * gap, xO), 0, 9)) >= xV.length) return aK.qq(), !0;
			kt = xV[ks];
			if (1024 === kt) return this.show(xX, xY, xT + 1), !0;
			! function(oC) {
				for (var aA = 0; aA < 9; aA++) xU[aA].ju = Math.floor(.99 * xU[aA].ju);
				for (aA = 0; aA < 9; aA++)
					if (oC === xU[aA].oC) return xU[aA].ju = Math.min(xU[aA].ju + 30, 999), xm();
				xU.splice(5, 0, {
					oC: oC,
					ju: Math.max(xU[4].ju, 30)
				}), xU.pop(), xm()
			}(kt), player === aC.eK ? b6.gw.oB(kt) : b6.fv.oP(kt, player)
		}
		return aK.qq(), !0
	}, this.xp = function(ks, kt) {
		return !(ks < m5 - .5 * gap || kt < m6 - .5 * gap || m5 + xZ - .5 * gap <= ks || m6 + xa - .5 * gap <= kt)
	}, this.tg = function() {
		th.fillStyle = b9.mc, th.fillRect(m5 - .5 * gap, m6 - .5 * gap, xZ, xa);
		for (var hN = .5 * ba.xq, ea = (th.lineWidth = ba.xq, th.strokeStyle = th.fillStyle = b9.mf, th.strokeRect(m5 - .5 * gap + hN, m6 - .5 * gap + hN, xZ - 2 * hN, xa - 2 * hN), th.imageSmoothingEnabled = !0, xV.length), aA = 0; aA <
			ea; aA++) this.xr(xV[aA], th, m5 + aA % 10 * xO, m6 + bJ.dj(aA, 10) * xO, hR);
		th.imageSmoothingEnabled = !1
	}, this.xr = function(oC, hX, eh, ej, hR) {
		var eE;
		oC >= 1024 - ai.qp.xd ? (eE = hR / this.xS, hX.setTransform(eE, 0, 0, eE, eh, ej), hX.drawImage(this.xR[oC - 1024 + ai.qp.xd], 0, 0), hX.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pZ.textAlign(hX, 1), b8.pZ.textBaseline(hX, 1), hX.font = b8.pZ
			.rO(0, .89 * hR), hX.fillText(ai.qp.xs(oC), eh + .5 * hR, ej + (.35 - b8.pZ.xt + .56) * hR))
	}
}

function xM() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xd = 13, this.xf = this.emojis.length, this.xg = 676, this.xe = 1024, this.xu = this.emojis.indexOf("💀"), this.xv = this.xu + 1, this.xw = this.emojis.indexOf("🥇"), this.xx = this.emojis.indexOf("😊"), this.xs = function(f2) {
		return f2 < this.xg ? String.fromCharCode(55356, 56806 + bJ.dj(f2, 26), 55356, 56806 + f2 % 26) : this.emojis[Math.min(f2 - this.xg, this.xf - 1)]
	}, this.xi = function(pG) {
		for (var ea = pG.length - 2, g = [], aA = 0; aA < ea; aA++) {
			var hf = pG.charCodeAt(aA) - 56806,
				hg = pG.charCodeAt(aA + 2) - 56806;
			0 <= hf && hf < 26 && 0 <= hg && hg < 26 && (g.push(26 * hf + hg), aA += 3)
		}
		return g
	}, this.xy = function(f2) {
		return f2 < this.xg
	}, this.xz = function(f2) {
		return f2 >= 1024 - this.xd
	}, this.y0 = function(f2) {
		return f2 >= this.xg && f2 < this.xg + this.xv
	}
}

function by() {
	this.rr = new y1, this.uv = new y2, this.ux = new y3, this.dU = function() {
		this.rr.dU()
	}
}

function y2() {
	this.vA = function(pG) {
		for (var ea = pG.length, i = bB, aA = 0; aA < ea; aA++) i.a7(16, pG.charCodeAt(aA))
	}
}

function y1() {
	var y4 = new Uint8Array(64);
	this.dU = function() {
		var aA;
		for (y4[0] = 45, y4[37] = 95, aA = 0; aA < 10; aA++) y4[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y4[aA + 11] = 65 + aA, y4[aA + 38] = 97 + aA
	}, this.rt = function(y5) {
		for (var v0 = bF, v8 = new Uint8Array(y5), aA = 0; aA < y5; aA++) v8[aA] = v0.oa(6);
		return v8
	}, this.rs = function(v8) {
		for (var ea = v8.length, y6 = y4, g = [], aA = 0; aA < ea; aA++) g.push(String.fromCharCode(y6[v8[aA]]));
		return g.join("")
	}, this.y7 = function(value, y8) {
		for (var y6 = y4, g = [], aA = 0; aA < y8; aA++) g.push(String.fromCharCode(y6[value >> 6 * (y8 - 1 - aA) & 63]));
		return g.join("")
	}
}

function c6() {
	var y9, yA, yB;
	y9 = [32, 65, 191, 913, 931], yA = [64, 127, 688, 930, 1155], yB = new Array(y9.length + 1);
	for (var aA = 0; aA < yB.length; aA++) {
		yB[aA] = 0;
		for (var et = aA - 1; 0 <= et; et--) yB[aA] += yA[et] - y9[et]
	}

	function yH(ev) {
		for (var aA = y9.length - 1; 0 <= aA; aA--)
			if (ev >= y9[aA] && ev < yA[aA]) return aA;
		return -1
	}
	this.v1 = function(pG) {
		return 0 !== (pG = pG.trim()).indexOf("Bot ") && 0 !== pG.indexOf("[Bot] ") && function(pG, yE, yF) {
			var ea = (pG = pG.trim()).length;
			if (ea < yE || yF < ea) return !1;
			for (var ev, yG = 0, aA = 0; aA < ea; aA++)
				if (ev = pG.charCodeAt(aA), yG += 65 <= ev && ev <= 90 || 1040 <= ev && ev <= 1071 ? 1 : 0, -1 === yH(ev)) return !1;
			if (3 < yG && yG > Math.floor(ea / 2)) return !1;
			return !0
		}(pG, 3, 20)
	}, this.yI = function(pG) {
		for (var ea = (pG = pG.trim()).length, g = [], aA = 0; aA < ea; aA++) {
			var ev, g7 = yH(ev = pG.charCodeAt(aA));
			g.push(yB[g7] + ev - y9[g7])
		}
		return g
	}, this.vF = function(g) {
		for (var ev, eu, pG = "", ea = g.length, aA = 0; aA < ea; aA++)
			for (eu = 1; eu < yB.length; eu++)
				if (g[aA] < yB[eu]) {
					ev = y9[eu - 1] + g[aA] - yB[eu - 1], pG += String.fromCharCode(ev);
					break
				} return pG
	}, this.yJ = function(pG) {
		for (var g = this.yI(pG), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yK = function(pG) {
		for (var g = new Array(Math.floor(pG.length / 3)), aA = 0; aA < pG.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pG.substring(aA, aA + 3));
		return this.vF(g)
	}, this.yL = function(pG) {
		for (var f2, g = [pG.length], aA = 0; aA < pG.length; aA++) g[aA] = pG.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pG.length; aA++) aA === pG.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f2 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f2 + (f2 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yM = function(pG) {
		for (var ev, result = "", aA = 0; aA < pG.length; aA++) 48 <= (ev = pG.charCodeAt(aA)) && ev < 58 ? result += String.fromCharCode(ev) : 65 <= ev && ev < 75 ? result += "0" + (ev - 65).toString() : 75 <= ev && ev < 91 ? result += (ev - 65)
			.toString() : 97 <= ev && ev < 123 && (result += (ev - 71).toString());
		return result
	}, this.yN = function(pG) {
		for (var ea = pG.length, g = [], aA = 0; aA < ea; aA++)(ev = pG.charCodeAt(aA)) < 58 ? g.push(pG[aA]) : (ev -= ev < 91 ? 65 : 71, g.push(String(bJ.dj(ev, 10))), g.push(String(ev - 10 * bJ.dj(ev, 10))));
		var ea = g.length - 2,
			ev = 0,
			v8 = [];
		for (aA = 0; aA < ea; aA += 3) v8[ev++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return v8
	}, this.yO = function() {
		for (var dw, yP = "", aA = 0; aA < 6; aA++) dw = 48 + aw.random() % 36, dw += 58 <= dw ? 39 : 0, yP += String.fromCharCode(dw);
		return yP
	}
}

function y3() {
	this.yI = function(pG, vp, yQ) {
		for (var yR = [], ea = pG.length, max = 0, aA = 0; aA < ea; aA++) {
			var f2 = pG.charCodeAt(aA);
			yR.push(f2), max = Math.max(max, f2)
		}
		var vq = max < 128 ? 7 : 16;
		for (yQ.a7(vp, ea), yQ.a7(1, +(16 == vq)), aA = 0; aA < ea; aA++) yQ.a7(vq, yR[aA])
	}
}

function d4() {
	this.yS = new yT, this.result = new yU, this.h3 = new yV, this.yW = new yX, this.yY = new yZ, this.ya = new yb, this.dU = function() {
		this.result.dU()
	}
}

function yV() {
	this.yc = function() {
		for (var ea = ak.jq, yd = ak.jr, ye = [], aA = 0; aA < ea; aA++) {
			var g7 = yd[aA];
			b8.fv.yf(g7) && ye.push(g7)
		}
		return ye
	}, this.yg = function() {
		if (0 === be.kB[aC.yh]) return this.yi();
		bf.l2(aC.yh);
		for (var ye = [], ea = bM.f5[0], fD = bM.fD, aA = 0; aA < ea; aA++) {
			var g7 = fD[aA];
			b8.fv.yf(g7) && ye.push(g7)
		}
		return ye
	}, this.yi = function() {
		var g7 = l4[0];
		return b8.fv.yf(g7) ? [g7] : []
	}, this.yj = function(ye) {
		for (var ea = ye.length, di = 0, gN = af.gN, aA = 0; aA < ea; aA++) di += gN[ye[aA]];
		return di
	}
}

function yT() {
	function yl() {
		if (2 === aC.yp) return 1;
		au.yq(), aC.yp = 2, aC.yr = aC.ys
	}

	function yn() {
		bP.yY.yt(), aW.show(1 === aC.yu, !1, 2 === aC.yu), bP.result.yt(), bP.ya.ij(), bP.yW.ij(), aM.yv(!0), aM.yw(247), aM.yw(956), aM.yw(957), aU.lP(!0), aV.lP(!0), au.lP(), bA.yx(), aC.gj && bd.yy.yz(), bd.dc = !0, bZ.z0(), z.a0.setState(0)
	}
	this.yk = function() {
		yl() || (aC.ym = 2, yn())
	}, this.yo = function() {
		yl() || (aC.ym = 1, yn())
	}
}

function yX() {
	this.ij = function() {
		var z9;
		2 === aC.ym ? (aM.z1(0, 59), aG.mE(2700)) : aC.k6 < 7 ? (z9 = be.kB[aC.yh], z9 = be.zB[z9], aP.zC(L(24, [z9]), 2, 1, 12), aM.zD(0, L(25, [z9]), 40, 0, b9.mf, b9.mc, -1, !1), aG.mE(2700)) : 8 === aC.k6 ? (aC.yu ? aM.z1(aC.z6, 2) : aM.z1(
			1 - aC.eK, 3), aC.z7.xE(aC.z6), aM.z8(aC.z6), aG.lz(aC.z6, 2700, !1, 0)) : 9 === aC.k6 ? (aM.zE(), aG.mE(2700)) : (aM.z8(aC.z6), aG.lz(aC.z6, 2700, !1, 0))
	}
}

function yb() {
	function zO() {
		var sD = Math.floor(af.zP[aC.eK] / 50);
		return Math.min(sD, 400) / 100
	}

	function zG() {
		var sD = zO();
		0 !== sD && aM.zD(440, L(26, [sD.toFixed(2)]), 40, 0, b9.mx, b9.mc, -1, !1)
	}
	this.ij = function() {
		if (0 === bP.result.zF || 0 === bP.result.ye.length) b8.fv.gm(aC.eK) && zG();
		else {
			var zH = function() {
				aM.zD(520, L(27), 40, 0, b9.mf, b9.mc, -1, !1);
				for (var ye = bP.result.ye, ea = ye.length, gN = af.gN, g = [], aA = 0; aA < ea; aA++) {
					var g7 = ye[aA];
					g.push({
						g7: g7,
						di: gN[g7]
					})
				}
				g.sort((et, eu) => eu.di - et.di);
				var zB = af.zQ,
					di = bP.result.zR,
					sD = bP.result.zF,
					pG = "",
					zH = 0;
				for (aA = 0; aA < ea; aA++) {
					var hF = g[aA].di * sD / (100 * di),
						zT = zB[g[aA].g7] + ": " + hF.toFixed(2) + "   ";
					g[aA].g7 === aC.eK && (zH = hF), 2 < aA && 4 !== ea ? 3 === aA && (pG += "(" + L(28, [ea - 3]) + ")") : pG += zT
				}
				aM.zD(560, b8.zU.zV(pG), 40, 0, b9.mx, b9.mc, -1, !1), zH ? aM.zD(580, L(29, [zH.toFixed(2) + " + " + zO().toFixed(2)]), 40, 0, b9.mx, b9.mc, -1, !1) : b8.fv.gm(aC.eK) && zG();
				return zH
			}();
			if (! function(zH) {
					7 !== aC.k6 && 10 !== aC.k6 || 0 !== aC.yu && aM.zD(600, L(30, [zH.toFixed(2)]), 40, 0, b9.mf, b9.mc, -1, !1)
				}(zH), !(2 === aC.ym || 7 <= aC.k6)) {
				var ye = bP.result.ye,
					ea = ye.length,
					zW = af.zW,
					gN = af.gN,
					zX = [];
				loop: for (var aA = 0; aA < ea; aA++) {
					var g7 = ye[aA],
						zY = b8.zU.zZ(zW[g7]);
					if (null !== zY) {
						for (var za = gN[g7], eu = zX.length - 1; 0 <= eu; eu--)
							if (zY === zX[eu].name) {
								zX[eu].di += za, zX[eu].g.push({
									g7: g7,
									di: za
								});
								continue loop
							} zX.push({
							name: zY,
							di: za,
							g: [{
								g7: g7,
								di: za
							}]
						})
					}
				}
				if (0 !== zX.length) {
					zX.sort((et, eu) => eu.di - et.di);
					var g = zX[0].g,
						zH = (g.sort((et, eu) => eu.di - et.di), "[" + zX[0].name + "]"),
						sD = bP.result.zF,
						zc = 512 * sD / 26214400,
						kX = (aM.zD(0, L(31, [zH, zc.toFixed(4)]), 40, 0, b9.mf, b9.mc, -1, !1), g.length),
						di = bP.result.zR,
						v6 = zX[0].di,
						zd = 1e4 * zc;
					for (aA = 0; aA < kX; aA++)
						if (g[aA].g7 === aC.eK) {
							aM.zD(600, L(32, [(zd * g[aA].di / (10 * v6)).toFixed(2)]), 40, 0, b9.mf, b9.mc, -1, !1), aM.zD(600, L(33), 40, 0, b9.mf, b9.mc, -1, !1);
							break
						} zc = (v6 * sD / (1e3 * di)).toFixed(2);
					aM.zD(680, L(34, [zH, zc]), 40, 0, b9.mf, b9.mc, -1, !1), aC.gj || aM.zD(720, L(35) + bI.zf, 736, 0, b9.mf, b9.n3, -1, !1)
				}
			}
		}
	}, this.zL = function() {
		var zM, vY;
		aC.k8 || (zM = af, vY = aC.eK, 0 === zM.zN[vY]) || zM.it[vY] < 1 || 2 * zM.ov[vY] > 3 * (zM.is[vY] + zM.it[vY]) || zG()
	}
}

function yU() {
	this.dU = function() {
		this.zg = 0, this.ye = [], this.zR = 0, this.zF = 0
	}, this.yt = function() {
		var rB;
		aC.k8 || (rB = this, 2 === aC.ym ? rB.ye = bP.h3.yc() : aC.hP ? rB.ye = bP.h3.yg() : rB.ye = bP.h3.yi(), rB.zg = bg.zi.zj(), rB.zR = Math.max(1, bP.h3.yj(rB.ye)), b6.fv.oY(), 8 === aC.k6 ? bP.result.zF = 0 : rB.zF = 100 * bP.result.zg * (
			1 + aC.xJ))
	}
}

function yZ() {
	this.yt = function() {
		if (2 === aC.ym) aC.yu = 2;
		else {
			if (8 === aC.k6) b8.fv.jD(0) || 0 === af.ld[0] ? aC.z6 = 1 : b8.fv.jD(1) || 0 === af.ld[1] ? aC.z6 = 0 : aC.z6 = +(af.gN[1] > af.gN[0]);
			else {
				if (aC.hP) {
					var l0 = bf.zm();
					if (aC.yh = l0, be.kB[l0]) return void(aC.yu = +(be.eY[aC.eK] === l0))
				}
				aC.z6 = l4[0]
			}
			aC.yu = +(aC.z6 === aC.eK)
		}
	}
}

function d9() {
	this.id = 0, this.dk = 0, this.uH = null, this.uI = null, this.uJ = null, this.uP = null, this.a0 = new zn, this.dU = function() {
		var self, dk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dk = Android.getVersion()) < 12 || (self.dk = dk, self.id = 1, self.uI = Android),
			function(self) {
				var dk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uJ = mwIOSdataX, self.uP = window.webkit.messageHandlers.iosCommandA, dk = self
					.uJ.version, self.dk = dk ? Number(dk) : 0)
			}(this),
			function(self) {
				var uH;
				if (0 === self.id) {
					try {
						if (!(uH = window.localStorage)) return;
						uH.setItem("tls7", "1"), uH.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uH = uH
				}
			}(this)
	}
}

function zn() {
	this.zr = function() {
		bh.r1.uc(), bh.r1.ud(), ay.x.close(0, 3255), 0 === z.id ? z.uH && z.uH.clear() : 1 === z.id ? z.uI.saveString(199, "") : 2 === z.id && z.uP.postMessage("clear")
	}, this.zs = function() {
		2 === z.id ? z.uP.postMessage("showConsentForm") : 1 === z.id && z.uI.setState(7)
	}, this.zt = function() {
		this.setState(14)
	}, this.qx = function() {
		return 1 === bh.e7.uC(2)
	}, this.zu = function() {
		bh.e7.uA(102, "")
	}, this.setState = function(zv) {
		1 === z.id && 5 <= z.dk && z.uI.setState(zv)
	}, this.a1 = function() {
		var zw;
		1 === z.id && 7 <= z.dk ? z.uI.setState(5) : ((zw = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zw.toString())
	}, this.dZ = function() {
		1 !== z.id || z.dk < 17 || z.uI.saveString(23, document.documentElement.outerHTML)
	}, this.e5 = function() {
		0 !== z.id && (1 === z.id ? z.uI.prepareAd("1688441405") : 2 === z.id && (0 === z.dk ? z.uP.postMessage("prepare ad 1770251391") : z.uP.postMessage("loadAds 1770251391")))
	}, this.eA = function(di) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.dk ? z.uP.postMessage("show ad " + di) : z.uP.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.dk < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.zx + "' target='_blank'>" + bI
			.zx + "</a>", !0, [new v("⬅️ " + L(36), function() {
				s.t(0)
			}, b9.nK)]))
	}
}

function dO() {
	function a00(e) {
		a0B(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(36), function() {
				s.a0C()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n2)]))
	}

	function a0A(e) {
		a0B(e), s.t(4, 5, new u(L(37), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a04(e), !0))
	}

	function a04(e) {
		var pG = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pG : 4527 === e ? "Player already in lobby" + pG : 4530 === e ? "Lobby Timeout" + pG : 4528 === e ? "Lobby Kick: Another login detected." + pG : 4540 === e ?
			"You have been kicked." + pG : "Unknown error" + pG
	}

	function a0B(e) {
		a03(e), s.x.y()
	}

	function a03(e) {
		var zv = aZ.a02();
		6 === zv ? ay.x.a0E(e) : bl.a06 ? (s.w(), bl.tA(), ay.x.close(ay.x.a07, 3256)) : 8 === zv && aC.a0F(!0)
	}
	this.zy = function(zz, e) {
		zz === 1 && __fx.customLobby.isActive() && aZ.a02() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.ro && 0 === zz)
			if (4211 === e) a00(e);
			else {
				if (4480 === e) return bh.r1.ue(), void s.t(4, 0, new u(L(39), L(40), !0));
				8 !== aZ.a02() && a03(), s.t(4, 0, new u(L(37), a04(e), !0))
			}
		else {
			var zv = aZ.a02();
			if (6 === zv) {
				if (4211 === e) return void a00(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a05(zz)
			} else {
				if (!bl.a06) return 8 === zv ? void(zz !== ay.x.a08 || aC.k8 || 1 !== aC.yp || aC.gj || aM.a09(L(38, [e]))) : void 0;
				if (zz !== ay.x.a07) return
			}
			a0A(e)
		}
	}, this.a0D = function(e) {
		8 === aZ.a02() ? aC.k8 || 1 !== aC.yp || aM.a09(L(38, [e])) : a0A(e)
	}, this.r = function() {
		a0B(3268)
	}
}

function cy() {
	var a0G, a0H, a0I = -15e3,
		a0J = !1;

	function gn(e) {
		a0d() || (a0J = !0, a0e(e, 1), ay.x.a0f(ay.x.a08), a0g(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0S(e) {
		a0I = bd.e9, a0e(e, 1), ay.x.a0f(ay.x.a08), 0 < e.touches.length && (a0G = Math.floor(h.k * e.touches[0].clientX), a0H = Math.floor(h.k * e.touches[0].clientY), ar.a0S(e) || a0g(a0G, a0H))
	}

	function a0g(eh, ej) {
		s.gn(eh, ej), 0 === aC.yp ? aZ.gn(eh, ej) : bA.a0h(eh, ej) || bc.gn(eh, ej) || aW.gn(eh, ej) || aK.a0i(eh, ej) || aO.gn(eh, ej) || 0 <= aL.gn(eh, ej) || au.gn(eh, ej) || bH.a0j(eh, ej) || aK.a0k(eh, ej)
	}

	function a0O(e) {
		a0d() || (a0J = !0, a0e(e, 1), a0l(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0T(e) {
		a0I = bd.e9, a0e(e, 1), 0 < e.touches.length && (a0G = Math.floor(h.k * e.touches[0].clientX), a0H = Math.floor(h.k * e.touches[0].clientY), ar.a0T(e) || a0l(a0G, a0H))
	}

	function a0l(eh, ej) {
		s.a0O(eh, ej), 0 === aC.yp ? aZ.a0O(eh, ej) : (bR.gg(eh, ej), bc.a0O(eh, ej) || (aL.a0O(eh, ej), aK.hH() ? aK.a0O(eh, ej) : aQ.go ? aQ.a0O(eh) && (bd.dc = !0) : (aU.a0O(eh, ej), aR.mA && aR.a0O(eh, ej) && (bd.dc = !0))))
	}

	function a0Q(e) {
		a0d() || (a0e(e, 1), a0m(), 0 === aC.yp ? (aZ.click(-1024, -1024), aS.qZ()) : (aU.a0n(-1024, -1024), aL.a0O(-1024, -1024), aQ.a0o(), aR.mA = !1))
	}

	function a0P(e) {
		a0d() || (a0e(e, 1), a0p(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0M && (bH.a0M = !1, e.preventDefault()))
	}

	function click(e) {
		a0d() || a0e(e, 1)
	}

	function a0U(e) {
		a0I = bd.e9, a0e(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.yp ? aR.mA = !1 : ar.a0q() || (a0p(a0G, a0H, !1), bH.a0M && (bH.a0M = !1, e.preventDefault()))
	}

	function a0V(e) {
		a0I = bd.e9, a0e(e, 1), a0p(a0G, a0H, !1), bH.a0M && (bH.a0M = !1, e.preventDefault())
	}

	function a0W(e) {}

	function a0X(e) {}

	function a0Y(e) {
		a0d() || a0e(e, 0)
	}

	function a0p(eh, ej, a0r) {
		a0m(), 0 === aC.yp ? aZ.click(eh, ej) : (aU.a0n(eh, ej), bc.a0n(), aQ.a0o(), aR.mA = !1, aK.click(eh, ej, a0r) ? bd.dc = !0 : aL.a0P(eh, ej))
	}

	function a0m() {
		s.a0m()
	}

	function a0R(e) {
		var eh, ej, deltaY;
		a0d() || (a0e(e, 1), ay.x.a0f(ay.x.a08), eh = Math.floor(h.k * e.clientX), ej = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0R(eh, ej, deltaY), 0 === aC.yp ? aZ.a0R(eh, ej, deltaY) : aU.a0R(eh, ej,
			deltaY) || (aQ.a0s(eh, ej) ? aQ.a0R(deltaY) && (bd.dc = !0) : aR.a0R(eh, ej, deltaY)))
	}

	function a0Z(e) {
		a0e(e, 0)
	}

	function a0e(e, id) {
		0 === id && s.hH() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.a02() && e.preventDefault()
	}

	function a0a(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0d() || 0 < h.rW || (e = e.code) && e.length && (bV.ev(e, 18) ? ap.a0u(3) : bV.ev(e, 22) ? ap.a0u(0) : bV.ev(e, 20) ? ap.a0u(1) : bV.ev(e, 24) ? ap.a0u(2) : bV.ev(e, 10) ? aQ.a0v(31 / 32) : bV.ev(e, 8) ? aQ.a0v(32 / 31) : bV.ev(e, 6) ? aQ
			.a0v(7 / 8) : bV.ev(e, 4) ? aQ.a0v(8 / 7) : bV.ev(e, 14) ? 0 !== aC.yp && aR.a0R(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.ev(e, 16) ? 0 !== aC.yp && aR.a0R(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.ev(e, 0) ? aC
			.yp && bR.gh(!1) : bV.ev(e, 2) ? aC.yp && bR.gh(!0) : bV.ev(e, 26) ? aC.yp && bR.hB() : bV.ev(e, 28) && aC.yp && bR.hG())
	}

	function a0b(e) {
		if (!a0d() && !(0 < h.rW || bd.e9 < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0w(1) || "Space" === code && s.a0w(0))) return bl.a06 ? bl.tG.a0w(code) ? void 0 : void("Escape" === code && bH.f3()) : void(8 !== aZ.a02() && aZ.a0w(e) ? bd.dc = !0 : "Escape" ===
				code ? bH.f3() : bV.ev(code, 18) ? ap.a0x(3) : bV.ev(code, 22) ? ap.a0x(0) : bV.ev(code, 20) ? ap.a0x(1) : bV.ev(code, 24) ? ap.a0x(2) : bV.ev(code, 12) ? bA.a0y(!aC.m8) : "Space" === code && aC.yp && (aL.gk && aL.a0z(), aC
					.gj) && bA.a10(!1))
		}
	}

	function a0c() {
		"hidden" === document.visibilityState ? 1 === aC.yp && (aC.gj ? bA.a11() : !aC.k8 || aL.gk || aC.gv || aL.a0z()) : bd.dc = !0
	}

	function a0d() {
		return a0I + 15e3 > bd.e9
	}

	function resize() {
		h.a13()
	}
	this.a0K = 0, this.a0L = "", this.a0M = !1, this.dU = function() {
		a0N.addEventListener("mousedown", gn, {
			passive: !1
		}), a0N.addEventListener("mousemove", a0O, {
			passive: !1
		}), a0N.addEventListener("mouseup", a0P, {
			passive: !1
		}), a0N.addEventListener("click", click, {
			passive: !1
		}), a0N.addEventListener("mouseleave", a0Q, {
			passive: !1
		}), a0N.addEventListener("wheel", a0R, {
			passive: !1
		}), a0N.addEventListener("touchstart", a0S, {
			passive: !1
		}), a0N.addEventListener("touchmove", a0T, {
			passive: !1
		}), a0N.addEventListener("touchend", a0U, {
			passive: !1
		}), a0N.addEventListener("touchcancel", a0V, {
			passive: !1
		}), a0N.addEventListener("dragover", a0W), a0N.addEventListener("drop", a0X), a0N.addEventListener("dblclick", a0Y), document.addEventListener("contextmenu", a0Z), document.addEventListener("keydown", a0a), document.addEventListener(
			"keyup", a0b), document.addEventListener("visibilitychange", a0c), window.addEventListener("resize", resize)
	}, this.a0j = function(eh, ej) {
		return !!bA.gn(eh, ej) || !!(aU.gn(eh, ej) || aR.gn(eh, ej) || aQ.gn(eh, ej) || aM.gn(eh, ej))
	}, this.a12 = a0d, this.q2 = function() {
		return !a0J || 0 < a0I
	}, this.f3 = function() {
		if (!s.hH()) return 8 === aZ.a02() ? aC.m8 ? void bA.a0y(!1) : bc.hH ? void bc.a0z() : void aL.a0z() : void(7 !== aZ.a02() && 6 === aZ.a02() && aY.a14());
		s.a0w(2)
	}
}

function bu() {
	this.pZ = new a15, this.pi = new a16, this.fv = new a17, this.zU = new a18, this.x6 = new a19, this.a1A = new a1B, this.canvas = new a1C, this.color = new a1D, this.a1E = new a1F, this.dU = function() {
		this.pZ.ub()
	}
}

function a16() {
	this.vW = function(g) {
		g.fill(0)
	}, this.a1G = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++) g[aA] = []
	}, this.a1H = function(hf, a1I) {
		for (var hg = bM.fA, aA = 0; aA < 3; aA++) hg[aA] = a1I * hf[aA];
		return hg
	}, this.a1J = function(hf, hg, a1K) {
		for (var hj = 0, aA = 0; aA < 3; aA++) hj += Math.abs(hf[aA] - hg[aA]);
		return a1K <= hj
	}, this.a1L = function(hf, a1M) {
		for (var aA = 0; aA < 3; aA++) hf[aA] = bJ.p7(hf[aA] + a1M, 0, 255);
		return hf
	}, this.a1N = function(g, s9, sA) {
		sA = sA || g.length - 1;
		for (var a1O = 0, aA = s9 = s9 || 0; aA <= sA; aA++) a1O += g[aA];
		return a1O
	}, this.a1P = function(g, a1Q) {
		for (var aA, a1R, ea = g.length, a1S = [], et = ea - 1; 0 <= et; et--) {
			for (aA = a1R = 0; aA < ea; aA++) a1Q(g[aA]) < a1Q(g[a1R]) && (a1R = aA);
			ea--, a1S.push(g[a1R]), g[a1R] = g[ea], g.pop()
		}
		return a1S
	}, this.min = function(g) {
		var aA, f2, ea = g.length;
		if (0 === ea) return 0;
		for (f2 = g[0], aA = 1; aA < ea; aA++) f2 = Math.min(f2, g[aA]);
		return f2
	}, this.max = function(g) {
		var ea = g.length;
		if (0 === ea) return 0;
		for (var f2 = g[0], aA = 1; aA < ea; aA++) f2 = Math.max(f2, g[aA]);
		return f2
	}, this.a1T = function(g, f2) {
		for (var ea = g.length, g2 = 0, aA = 0; aA < ea; aA++) g2 += g[aA] > f2;
		return g2
	}, this.a1U = function(a1V, a1W, min) {
		for (var ea = a1W[0], aA = ea - 1; 0 <= aA; aA--) a1V[aA] < min && (a1V[aA] = a1V[--ea]);
		a1W[0] = ea
	}, this.a1X = function(g, ea, value) {
		for (var aA = 0; aA < ea; aA++) g[aA] -= value
	}, this.a1Y = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1Z = function(pG, g, a1a) {
		g.fill(0);
		for (var sD = pG.split(","), ea = Math.min(sD.length, g.length), aA = 0; aA < ea; aA++) g[aA] = Math.min(parseInt(sD[aA]), a1a)
	}, this.a1b = function(pG, g, qW) {
		g.fill("");
		for (var sD = pG.split('"'), ea = Math.min(sD.length, 2 * g.length), hN = 0, aA = 1; aA < ea; aA += 2) g[hN++] = sD[aA].slice(0, qW)
	}, this.a1c = function(g, g2) {
		if (0 === g2) g.fill(0);
		else {
			var a1O = this.a1N(g),
				ea = g.length;
			if (0 === a1O) g.fill(bJ.dj(g2, ea));
			else
				for (var aA = 0; aA < ea; aA++) g[aA] = bJ.dj(g2 * g[aA], a1O);
			if (0 === (a1O = this.a1N(g))) g[1] = g2;
			else
				for (var hN = 0; a1O++ < g2;) g[hN = (hN + 1) % ea] && g[hN]++
		}
	}, this.a1d = function(g) {
		if (!g) return 0;
		var ea = g.length;
		if (0 === ea) return 0;
		for (var f2 = g[ea - 1], aA = ea - 2; 0 <= aA; aA--)
			if (g[aA] !== f2) return aA + 2;
		return 1
	}, this.a1e = function(g) {
		for (var a1O = 0, aA = 0; aA < g.length; aA++) a1O += g[aA].length;
		return a1O
	}, this.a1f = function(a1g) {
		for (var g = [], aA = 0; aA < a1g.length; aA++) g = g.concat(a1g[aA]);
		return g
	}
}

function a1C() {
	this.xc = function(a1h, dx, a1i) {
		var hR = a1h.height,
			a1j = b8.pZ.vM(hR, hR),
			hX = b8.pZ.getContext(a1j);
		return function(i, hX, a1i) {
			hX.fillStyle = a1i, hX.beginPath(), hX.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hX.fill()
		}(hR, hX, a1i), hX.drawImage(a1h, -dx * hR, 0), a1j
	}, this.a1l = function(a1m) {
		var hX, hU, hR = a1m.height;
		return a1m.width === hR && (hU = (hX = b8.pZ.getContext(a1m, !0)).getImageData(0, 0, hR, hR), b8.a1A.a1n(hU.data, hR, hR, .9), hX.putImageData(hU, 0, 0)), a1m
	}
}

function a1D() {
	this.a1o = function(f2) {
		return [f2 >> 12 & 63, f2 >> 6 & 63, 63 & f2]
	}, this.a1p = function(f2) {
		for (var g = this.a1o(f2), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1q = function(f2) {
		f2 = this.a1p(f2);
		return b8.color.mX(f2[0], f2[1], f2[2])
	}, this.a1r = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mX = function(dw, sD, eu) {
		return "rgb(" + dw + "," + sD + "," + eu + ")"
	}, this.mZ = function(dw, sD, eu, et) {
		return "rgba(" + dw + "," + sD + "," + eu + "," + et.toFixed(3) + ")"
	}, this.q4 = function(ev) {
		for (var g = ev.split("(")[1].split(","), f9 = bM.f9, aA = 0; aA < 3; aA++) f9[aA] = parseInt(g[aA]);
		return 4 === g.length ? f9[3] = 255 * parseFloat(g[3].slice(0, -1)) : f9[3] = 255, f9
	}, this.q5 = function(a1s, ed) {
		for (var g = a1s.slice(a1s.indexOf("(") + 1, a1s.indexOf(")")).split(","), f9 = bM.f9, aA = 0; aA < 3; aA++) f9[aA] = bJ.p7(parseInt(g[aA].trim(), 10) + ed, 0, 255);
		return 3 === g.length ? this.mX(f9[0], f9[1], f9[2]) : (a1s = parseFloat(g[3].trim()), this.mZ(f9[0], f9[1], f9[2], a1s = 0 === a1s ? .3 : a1s))
	}, this.a1t = function(g) {
		for (var pG = "#", aA = 0; aA < 3; aA++) {
			var dw = g[aA].toString(16);
			pG += 1 === dw.length ? "0" + dw : dw
		}
		return pG
	}, this.a1u = function(pG) {
		var dw, sD;
		return pG.length < 7 ? b9.mW : (dw = parseInt(pG.slice(1, 3), 16), sD = parseInt(pG.slice(3, 5), 16), pG = parseInt(pG.slice(5, 7), 16), this.mX(dw, sD, pG))
	}
}

function a19() {
	this.a1v = function(pG, font, maxWidth) {
		if (font && (th.font = font), th.measureText(pG).width <= maxWidth) return pG;
		for (var aA = pG.length - 1; 1 <= aA; aA--)
			if (pG = pG.substring(0, aA), th.measureText(pG + "...").width <= maxWidth) return pG + "...";
		return "..."
	}
}

function a1F() {
	var a1x = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1y = function(e9) {
		var a20, pG = new Date(e9.getTime() - 6e4 * e9.getTimezoneOffset()).toUTCString();
		return pG.length < 12 || (pG = pG.substring(5, pG.length), 0 === (e9 = e9.getTimezoneOffset())) ? pG : (a20 = (e9 < 0 ? "+" : "-") + bJ.dj(Math.abs(e9), 60), 0 == (e9 = Math.abs(e9) % 60) ? pG + a20 : pG + a20 + ":" + (e9 < 10 ? "0" :
			"") + e9)
	}, this.a21 = function(e9) {
		var pG = e9.toUTCString();
		return pG.length < 12 ? pG : function(e9) {
			return a1x[e9.getUTCDay()]
		}(e9) + ", " + pG.substring(5, pG.length - 4)
	}
}

function a15() {
	var a23 = null;
	this.xt = 0, this.ub = function() {
		var f2 = bh.e7.data[5].value;
		a23 = "px " + f2, "Trebuchet MS" !== f2 && (a23 += ", Trebuchet MS"), this.xt = hQ(32, 32, ["a", "b", "m"], 200, a23)
	}, this.vM = function(i, j) {
		var ev = document.createElement("canvas");
		return ev.width = i, ev.height = j, ev
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x6, i, j) {
		return x6.getImageData(0, 0, i, j)
	}, this.rO = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a23 : 1 === type ? "bold " + size + a23 : 2 === type ? "lighter " + size + a23 : 3 === type ? "italic " + size + a23 : 4 === type ? "oblique " + size + a23 : 5 === type ? "small-caps " +
			size + a23 : "small-caps bold " + size + a23
	}, this.textAlign = function(hX, id) {
		hX.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hX, id) {
		hX.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pk = function(e, code, color) {
		color = this.pj(ba.rQ) + " solid " + (color || b9.mf);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sF = function(e, eh, ej, i, j) {
		e = e.style;
		e.left = this.a24(eh), e.top = this.a24(ej), e.width = this.a24(i), e.height = this.a24(j)
	}, this.pa = function(f2) {
		return 1 + f2 * z.a0.qx()
	}, this.qs = function(mH, g8) {
		return mH * this.pa(void 0 === g8 ? .5 : g8) * h.pb / h.k
	}, this.sE = function(mH, g8) {
		return mH * this.pa(void 0 === g8 ? .5 : g8) * h.pb
	}, this.ru = function(mH, g8, a25) {
		return this.pa(g8) * Math.min(mH * h.pb, a25 * h.i) / h.k
	}, this.pj = function(f2) {
		return f2.toFixed(1) + "px"
	}, this.a24 = function(f2) {
		return this.a27(f2).toFixed(1) + "px"
	}, this.a27 = function(f2) {
		return f2 / h.k
	}, this.a28 = function(re, a29) {
		for (var pG = "<ul>", ea = re.length, aA = 0; aA < ea; aA++) pG += "<li>" + re[aA] + ": <a href='" + a29[aA] + "' target='_blank'>" + a29[aA] + "</a></li>";
		return pG += "</ul>"
	}, this.a2A = function(a2B) {
		return "<a href='" + a2B + "' target='_blank'>" + a2B + "</a>"
	}, this.a2C = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a2D = function(e) {
		var di = e.textContent;
		b8.zU.a2E(di, "✔") || (1 === di.length ? e.textContent = "✔" : e.textContent = di + " ✔", setTimeout(function() {
			e.textContent = di
		}, 500))
	}, this.measureText = function(pG) {
		return th.measureText(pG).width
	}, this.s5 = function(a2F) {
		a2F.style.overflowX = "auto", a2F.style.overflowY = "hidden", a2F.style.whiteSpace = "nowrap", a2F.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sH = this.scrollLeft, e.preventDefault())
		}), a2F.addEventListener("scroll", function() {
			this.sH = this.scrollLeft
		})
	}
}

function a17() {
	this.gl = function(zv) {
		return 0 === zv ? 1 === aC.yp && aC.gv : 1 === zv ? 1 === aC.yp && !aC.gv : 2 === aC.yp
	}, this.gm = function(player) {
		return 0 !== af.ld[player] && 2 !== af.a2G[player]
	}, this.a2H = function(player) {
		return player === aC.eK && 2 !== af.a2G[player]
	}, this.lC = function() {
		return ak.jq < 2 ? 0 : aC.hP ? 1 < bf.a2I() : af.gN[l4[1]]
	}, this.a2J = function() {
		var jq = ak.jq;
		if (0 !== jq) {
			if (!aC.hP) return !this.jD(l4[0]);
			for (var eY = be.eY, l0 = bf.l1(), jr = ak.jr, aA = jq - 1; 0 <= aA; aA--) {
				var g7 = jr[aA];
				if (eY[g7] === l0 && !this.jD(g7)) return 1
			}
		}
		return 0
	}, this.a2K = function(player) {
		return player === aC.eK
	}, this.jD = function(player) {
		return player >= aC.jp || 2 === af.a2G[player]
	}, this.kb = function(player) {
		return 0 !== af.ld[player]
	}, this.yf = function(player) {
		return player < aC.jp
	}, this.os = function(a2L, a2M) {
		return a2L !== a2M
	}, this.fy = function(player, f2) {
		var min;
		return f2 = this.a2N(player, f2), af.gb[player] += f2, af.a2O[player] && (min = Math.min(af.a2O[player], af.gb[player]), af.a2O[player] -= min, af.gb[player] -= min), f2
	}, this.a2N = function(player, f2) {
		var a2P = af.gb[player];
		return f2 = Math.min(f2, af.gN[player] * aC.a2Q - a2P), f2 = Math.min(f2, aC.a2R - a2P), Math.max(f2, 0)
	}, this.ot = function(player, i9, a2S, a2T) {
		var a2P = af.gb[player],
			i9 = bJ.dj(a2P * (i9 + 1), 1024),
			a2S = bJ.dj(a2S * a2P, 1024),
			i9 = Math.min(i9, a2P - a2S);
		return 10 === aC.k6 && (i9 = b2.a2V(player, i9)), bM.f7[0] = i9, bM.f7[1] = a2S, a2T <= i9
	}, this.oK = function(player, o3, o2) {
		var player = af.gb[player],
			a2U = bJ.dj(64 * player, 1024),
			player = (o3 = Math.min(o3, player - a2U), this.a2X(o3));
		return a2U += player, o3 = this.a2N(o2, o3 -= player), bM.f7[0] = o3, bM.f7[1] = a2U, 1 <= o3
	}, this.oM = function(o3, o2) {
		var a2W = this.a2X(o3);
		return o3 = this.a2N(o2, o3 -= a2W), bM.f7[0] = o3, bM.f7[1] = a2W, 1 <= o3
	}, this.i8 = function(player, a2Y) {
		return bJ.dj(af.gb[player] * (a2Y + 1), 1024)
	}, this.a2X = function(a2Z) {
		return bJ.dj(Math.max(2142 - bd.jm(), 0) * a2Z, 2142)
	}, this.p5 = function(player, a2S) {
		a2S = bJ.dj(a2S * af.gb[player], 1024);
		bM.f7[1] = a2S, af.gb[player] -= a2S
	}, this.fw = function(player, a2a) {
		var fJ, fL, eu = af.gb[player];
		return a2a <= eu ? af.gb[player] -= a2a : (af.gb[player] = 0, fL = af.a2O[player] + (fJ = 5 * ((eu = a2a - eu) >> 2)), bb.fz(player, fJ - eu, 12), fL <= aC.a2b ? af.a2O[player] = fL : (af.a2O[player] = aC.a2b, bb.fz(player, fL - aC.a2b,
			18))), a2a
	}, this.kp = function(player, i9) {
		var gb = af.gb,
			a2P = gb[player],
			i9 = bJ.dj(a2P * (i9 + 1), 1024),
			a2U = Math.max(bJ.dj(a2P, 10), 1e3);
		return (i9 = Math.min(i9, a2P - a2U)) < 0 ? (gb[player] = 0, a2U = Math.min(1e3, a2P + aC.a2b - af.a2O[player]), bM.f7[1] = a2U, af.a2O[player] += a2U - a2P, 0) : (bM.f7[1] = a2U, 10 === aC.k6 && (i9 = b2.a2V(player, i9)), gb[player] -=
			a2U + i9, i9)
	}, this.ow = function(player) {
		af.gb[player] -= bM.f7[0] + bM.f7[1]
	}, this.ou = function(player, j0) {
		return (j0 = Math.min(j0, aC.eX)) < aC.eX && 0 === af.ld[j0] && (j0 = aC.eX), (bM.eW[0] = j0) === aC.eX || eT(player, j0)
	}, this.oy = function(player, o2) {
		return 0 !== af.ld[o2] && !eT(player, o2)
	}, this.a2c = function(player, a2d) {
		for (var g7, ea = ak.jq, a2e = 0, a2f = l4, aA = 0; aA < ea; aA++)
			if (g7 = a2f[aA], !this.jD(g7)) {
				if (player === g7) return !0;
				if (++a2e > a2d) return !1
			} return !1
	}, this.kx = function(g7) {
		var a2g = aC.hP ? bf.a2h() : af.gN[l4[0]];
		return a2g >= bJ.dj(g7 * aC.jZ, 100)
	}, this.a2i = function(f2, min, max) {
		return Math.floor(bJ.p7(isNaN(f2) ? 0 : Number(f2), min, max))
	}
}

function a1B() {
	this.a2j = function(canvas, a2k, a2l) {
		var i = canvas.width,
			j = canvas.height,
			ev = b8.pZ.vM(i, j),
			hX = b8.pZ.getContext(ev, !0),
			canvas = (hX.drawImage(canvas, 0, 0), hX.getImageData(0, 0, i, j));
		return a2k(canvas.data, i, j, a2l), hX.putImageData(canvas, 0, 0), ev
	}, this.a2m = function(vX, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vX[3 + aA] = vX[aA], vX[aA] = vX[1 + aA] = vX[2 + aA] = 255
			}
	}, this.a2n = function(vX, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vX[1 + aA] > vX[2 + aA] + 10 && (vX[3 + aA] = vX[aA], vX[1 + aA] = vX[2 + aA])
			}
	}, this.a2o = function(vX, i, j, a2l) {
		for (var gap = Math.floor(Math.min(i, j) * a2l), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (vX[3 + (aA = 4 * (eh + ej * i))] = 255 - 255 * (vX[1 + aA] - vX[aA]) / (255 - vX[aA]))
	}, this.a2p = function(vX, i, j, a2l) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vX[aA] = a2l[0], vX[1 + aA] = a2l[1], vX[2 + aA] = a2l[2]
			}
	}, this.a2q = function(vX, i, j, a2l) {
		for (var gap = Math.floor(i * a2l), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (vX[aA = 4 * (eh + ej * i)] = vX[1 + aA] = vX[2 + aA] = 0)
	}, this.a2r = function(vX, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) 200 < vX[1 + (aA = 4 * (eh + ej * i))] && vX[1 + aA] - 20 > vX[aA] && vX[1 + aA] - 20 > vX[2 + aA] ? vX[aA] + vX[2 + aA] < 40 ? vX[3 + aA] = 0 : (vX[3 + aA] = vX[aA], vX[aA] = 255, vX[1 + aA] = 255, vX[
				2 + aA] = 255) : vX[aA] < 50 && vX[1 + aA] < 50 && vX[2 + aA] < 50 && (vX[aA] + vX[1 + aA] + vX[2 + aA] < 50 ? vX[3 + aA] = 180 : vX[3 + aA] = 180 + Math.floor(75 * (vX[aA] + vX[1 + aA] + vX[2 + aA] - 50) / 100))
	}, this.a2s = function(vX, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) vX[1 + (aA = 4 * (eh + ej * i))] > vX[aA] + 20 && vX[1 + aA] > vX[2 + aA] + 20 && vX[aA] + vX[2] < 40 && (vX[3 + aA] = 255 - vX[1 + aA], vX[aA] = vX[1 + aA] = vX[2 + aA] = vX[aA])
	}, this.a1n = function(vX, i, j, a2l) {
		for (var dw = i >> 1, eh = 0; eh < i; eh++)
			for (var ej = 0; ej < j; ej++) Math.sqrt((eh - dw) * (eh - dw) + (ej - dw) * (ej - dw)) > a2l * dw && (vX[4 * (eh + ej * i) + 3] = 0)
	}
}

function a18() {
	this.y7 = function(f2) {
		var aA, a2t, a2u, a2v, a2w;
		if (f2 < 0) return "-" + this.y7(Math.abs(f2));
		if (f2 < 1e3) return f2.toString();
		for (a2t = Math.floor(Math.log(f2 + .5) / Math.log(10)) + 1, a2u = Math.floor((a2t - 1) / 3), a2w = (a2v = f2.toString()).substring(a2t - 3, a2t), aA = 1; aA < a2u; aA++) a2w = a2v.substring(a2t - 3 * (aA + 1), a2t - 3 * aA) + " " + a2w;
		return a2v.substring(0, a2t - 3 * a2u) + " " + a2w
	}, this.a2x = function(g7, a2t) {
		return g7.toFixed(a2t) + "%"
	}, this.a2y = function(f2, a2z) {
		return f2.toFixed(bJ.p7(Math.floor((void 0 === a2z ? 3 : a2z) - Math.log10(Math.max(f2, 1))), 0, 8))
	}, this.a30 = function(f2, mH, a2t) {
		return (f2 * mH).toFixed(a2t)
	}, this.zZ = function(username) {
		var ee, eP = username.indexOf("[");
		return !(eP < 0) && 1 < (ee = username.indexOf("]")) - eP && ee - eP <= 8 ? username.substring(eP + 1, ee).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zZ;
	this.a31 = function(pG) {
		for (var et = Math.floor(.5 * pG.length + .5), mN = Math.floor(.5 * (et - 1)), aA = 0; aA < mN; aA++)
			for (var eu = -1; eu < 2; eu += 2) {
				var ev = et + eu * aA;
				if (" " === pG[ev]) return [this.zV(pG.substring(0, ev)), this.a32(pG.substring(ev))]
			}
		return [pG.substring(0, et), pG.substring(et)]
	}, this.a32 = function(pG) {
		for (var ea = pG.length, aA = 0; aA < ea; aA++)
			if (" " !== pG[aA]) return pG.substring(aA);
		return pG
	}, this.zV = function(pG) {
		for (var aA = pG.length - 1; 0 <= aA; aA--)
			if (" " !== pG[aA]) return pG.substring(0, aA + 1);
		return pG
	}, this.a33 = function(pG, a34) {
		return pG.split("(")[0] + "(🧈 " + a34.toFixed(2) + ")"
	}, this.startsWith = function(pG, a35) {
		return pG.substring(0, a35.length) === a35
	}, this.a2E = function(pG, a35) {
		var ea = pG.length;
		return pG.substring(ea - a35.length, ea) === a35
	}, this.a36 = function(g, a37, a38) {
		var pG = "",
			ea = g.length - 1;
		a38 = a38 || "";
		for (var aA = 0; aA < ea; aA++) pG += a38 + g[aA] + a38 + ",", (aA + 1) % a37 == 0 && (pG += "\n");
		return pG += a38 + g[ea] + a38
	}, this.a39 = function(pG, hf, hg) {
		return pG.replace(new RegExp(hf, "g"), hg)
	}
}

function a3A() {
	this.ix = function(player, eM) {
		aH.ws(player, bK.ei(eM), bK.ek(eM)) && (bd.dc = !0), aC.k8 && this.ij()
	}, this.ij = function() {
		aC.gv = !1;
		for (var aA = 0; aA < aC.jp; aA++) 0 !== af.ld[aA] && 0 === af.gN[aA] && aH.wy(aA);
		0 !== af.ld[aC.eK] ? (bb.lZ[7] = af.gN[aC.eK], bb.lZ[8] = af.gb[aC.eK], aQ.a3B(), aV.a3C(), aC.gj || aG.ly(af.iO[aC.eK] - 5, af.iQ[aC.eK] - 5, af.iP[aC.eK] + 5, af.iR[aC.eK] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a3D(18), ae.a3E(),
			ae.lP(!0), bN.x.a3F(), aK.qq(), aC.or = null, bZ.a3G = !0, bZ.a3H(), aC.k8 && z.a0.setState(1)
	}
}

function bw() {
	this.eX = 512, this.a2R = 15e8, this.a3I = 1e9, this.a2b = 5e4, this.a3J = 512, this.ft = 2, this.eK = 0, this.jp = 0, this.ys = 0, this.kA = 0, this.yr = 0, this.w3 = 512, this.w8 = 512, this.a2Q = 150, this.k8 = !0, this.gj = 0, this.yp = 0,
		this.jZ = 0, this.m8 = !1, this.gv = 0, this.a3K = 0, this.hP = !1, this.wA = 0, this.wB = 0, this.k6 = 0, this.xJ = 0, this.or = null, this.z7 = new xC, this.a3L = 30, this.ym = 0, this.yu = 0, this.z6 = 0, this.yh = 0, this.data = new a3M,
		this.a3N = new a3O, this.a3P = 0, this.a3Q = function() {
			bP.dU(), this.ys = this.jp = this.data.humanCount, this.k8 = 1 === this.ys && !__fx.customLobby.isActive(), this.m8 = !1, this.gj = this.data.isReplay, this.k6 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xJ = this.data.isContest, this.hP = this.k6 < 7 || 9 === this.k6, this.k6 = 10 === this.k6 && this.k8 ? 7 : this.k6, this.k6 = 8 === this.k6 && 2 !== this.jp ? 7 : this.k6, ax
				.dU(), this.wA = this.data.numberTeams, this.data.teamPlayerCount ? this.wB = +(0 < this.data.teamPlayerCount[0]) : (this.wB = 0, this.hP && this.k8 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.wA + 1), aC.a3N.a3R())), this.a3L = this.jp <= 2 ? 30 : this.jp <= 50 ? 40 : 50, this.a3K = this.gv = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.or = this.gv ?
				new a3A : null, this.w3 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jp) : 1 === l.dh ? this.w3 = this.jp : this.w3 = this.data.playerCount,
				this.w8 = this.w3, this.kA = this.w3 - this.jp, this.yr = 0, this.eK = this.data.selectedPlayer, this.ym = 0, this.yu = 0, this.z6 = 0, this.yh = 0, aw.a3S(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3T(), b6.nv.oc = [], be.dU(),
				this.yp = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3U(), ab.dV(), an.a3V(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3W(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3X(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3Y.putImageData(a3Z, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fb(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.z7.dU(), bd.a3W(), aG.lx(), 0 === af.ld[aC.eK] && aW.show(!1, !0), ae.lP(!0), at.dU(), bd.dc = !0, this.gj || this.k8 && this.gv || z.a0.setState(1), this.a3P = 0
		}, this.a0F = function(a3b) {
			aC.gj || b7.op.a3c.length || (b7.op.a3c = b7.a3d.yI()),
				__fx.customLobby.isActive() === false && ay.x.a3e(),
				this.yp = 0, bd.a3f(), z.a0.setState(0), aZ.setState(0), a3b || bS.e3.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3P ? s.x.a3g() : 1 === this.a3P ? s.t(19) : s.t(5, 5)
		}, this.a3h = function() {
			return this.gj ? aL.gk || !bA.a3i : this.k8 && (aL.gk || this.gv)
		}, this.a3j = function() {
			return 1 === this.yp && !this.gv
		}
}

function a3M() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3O() {
	this.a3R = function() {
		var a3k = aC.data;
		b8.pi.a1c(a3k.teamPlayerCount, a3k.playerCount), a3k.numberTeams = b8.pi.a1T(a3k.teamPlayerCount, 0), a3k.teamPlayerCount[0] && a3k.teamPlayerCount[7] && (a3k.teamPlayerCount[7] = 0, this.a3R())
	}, this.a3l = function() {
		var a3k = aC.data;
		a3k.mapType < 2 ? bQ.a6(bQ.a3m(a3k), a3k.mapSeed) : bQ.a3n(a3k.canvas)
	}, this.a3o = function() {
		var a3k = aC.data;
		a3k.colorsData || (a3k.colorsData = new Uint32Array(1)), a3k.selectableColor && (a3k.colorsData[0] = bh.x.ua()), a3k.selectableName && (a3k.playerNamesData || (a3k.playerNamesData = new Array(1)), a3k.playerNamesData[0] = bh.e7.data[122]
			.value)
	}, this.a3p = function() {
		aC.data = new a3M, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eX), aC.data.aIncomeData[0] = 64
	}
}

function dN() {
	this.xq = 0, this.gap = 0, this.rQ = 0, this.pg = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xq = .0022 * b8.pZ.pa(.5) * h.pb, this.rQ = this.xq / h.k, this.gap = Math.max(Math.floor((z.a0.qx() ? .0114 : .01296) * h.pb), 2), this.pg = this.gap / h.k
	}
}

function dM() {
	this.a3q = function() {
		return z.a0.qx() ? 2 : 1
	}
}

function c7() {
	var q9, eh, ej, a3r, a3s, a3t, e9, player, a3u, gap, zoom, oV, a3v;

	function a45(player) {
		for (var aA = oV.length - 1; 0 <= aA; aA--)
			if (oV[aA] === player) return 1
	}

	function a43(a40) {
		var aA, ea;
		if (-1 !== a40)
			for (ea = q9.length, aA = 0; aA < ea; aA++)
				if (q9[aA].hH && q9[aA].eh + 1 === a40 % 4 && q9[aA].ej + 1 === a40 >> 2) return aA;
		return -1
	}

	function a41(ks, kt) {
		var sD = gap / 2;
		return ks < eh - a3r - 3 * sD || eh + 3 * a3r + 5 * sD < ks || kt < ej - a3r - 3 * sD || ej + 2 * a3r + 3 * sD < kt ? -1 : 4 * (kt < ej - sD ? 0 : kt < ej + a3r + sD ? 1 : 2) + (ks < eh - sD ? 0 : ks < eh + a3r + sD ? 1 : ks < eh + 2 * a3r +
			3 * sD ? 2 : 3)
	}
	this.a3w = function() {
		var aA, eu, a3z = [b9.n5, b9.nJ, b9.md, b9.nd, b9.nW];
		for (q9 = new Array(9), aA = 0; aA < 9; aA++) q9[aA] = {
			id: aA,
			hH: !1,
			kZ: 0,
			canvas: [],
			eh: 0,
			ej: 0
		};
		for (q9[0].colors = [0, 1, 2, 3], q9[0].eh = 0, q9[0].ej = 0, q9[1].colors = [0, 1, 4], q9[1].eh = 1, q9[1].ej = 0, q9[2].colors = [0, 2], q9[2].eh = -1, q9[2].ej = 0, q9[3].colors = [0], q9[3].eh = 0, q9[3].ej = 0, q9[4].colors = [0, 2],
			q9[4].eh = 1, q9[4].ej = 1, q9[5].colors = [3], q9[5].eh = 0, q9[5].ej = -1, q9[6].id = 20, q9[6].colors = [0], q9[6].eh = 1, q9[6].ej = -1, q9[7].id = 21, q9[7].colors = [0], q9[7].eh = 0, q9[7].ej = 1, q9[8].id = 16, q9[8]
			.colors = [0], q9[8].eh = 0, q9[8].ej = 0, aA = 0; aA < 9; aA++)
			for (eu = 0; eu < q9[aA].colors.length; eu++) q9[aA].canvas.push(function(id, a1i) {
				if (id < 20) return b8.canvas.xc(aa.get(3), id, a1i);
				var a1i = aa.get(3).height,
					a1j = b8.pZ.vM(a1i, a1i),
					hX = b8.pZ.getContext(a1j);
				20 === id ? hX.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vX.xr(ai.qp.xg + ai.qp.xx, hX, 0, 0, a1i);
				return a1j
			}(q9[aA].id, a3z[q9[aA].colors[eu]]))
	}, this.a3y = function() {
		return q9
	}, this.dU = function() {
		oV = [], eh = ej = e9 = 0, a3s = a3t = -1e3, this.resize()
	}, this.resize = function() {
		a3r = Math.floor((z.a0.qx() ? .075 : .0468) * h.pb), zoom = a3r / aa.get(3).height, gap = Math.floor(a3r / 3)
	}, this.a0i = function(ks, kt) {
		return !!this.hH() && (bd.dc = !0, !!ai.vX.gn(ks, kt, player) || (ks = function(ks, kt) {
			a3t = a3s = -1e3;
			var a42 = a43(a41(ks, kt));
			if (-1 === a42) return 0;
			if (1 !== q9[a42].colors[q9[a42].kZ])
				if (5 === a42) {
					if (! function() {
							var di = performance.now();
							a3v + 4e3 < di && (oV = []);
							a3v = di
						}(), a45(player)) return 1;
					oV.push(player), 16 < oV.length && oV.shift()
				} else if (6 === a42) {
				for (var aA = oV.length - 1; 0 <= aA; aA--) 0 === af.ld[oV[aA]] && oV.splice(aA, 1);
				0 < oV.length && (b3.a46(1, oV, !0) && b6.fv.oU(oV, player), oV = [])
			} else if (2 === a42) b6.gw.o1(aQ.h1(), player);
			else if (3 === a42) aC.gv && b6.gw.gx(a3u);
			else if (0 === a42)
				if (0 === q9[0].kZ) {
					if (aC.a3K && aV.a47() < 350) return 1;
					bT.a48(4), b6.gw.h7(aQ.h1(), player)
				} else az.h9(player, aQ.h1());
			else if (1 === a42) bT.a48(1), b6.gw.h5(aQ.h1(), a3u);
			else {
				if (7 === a42) return bT.a48(0), ai.vX.show(ks, kt), 2;
				if (4 === a42) b3.a46(0, [player], !0) && b6.fv.oR(player);
				else {
					if (8 !== a42) return 0;
					b6.gw.h0(aQ.h1(), a3u, player)
				}
			}
			return 1
		}(ks, kt), this.qq(), 2 === ks && (ai.vX.hH = !0), 0 < ks))
	}, this.a0k = function(ks, kt) {
		this.hH() || (a3s = ks, a3t = kt, e9 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gr(mouseX),
			coordY = bK.gt(mouseY),
			coord = bK.ey(coordX, coordY),
			point = bK.eQ(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(ks, kt, eE) {
			ab.eV(eE) || -1 === (ks = bL.h3.a4M(ks, kt)) ? aM.a4L(eE) : aM.a4N(ks)
		}(mouseX, mouseY, point))
	}
	this.click = function(ks, kt, a0r) {
		var gq = bK.gr(ks),
			gs = bK.gt(kt),
			eM = bK.ey(gq, gs),
			eE = bK.eQ(eM);
		if (!bK.gu(gq, gs)) return !1;
		gq = (z.a0.qx() ? .025 : .0144) * h.pb, gs = performance.now();
		if (Math.abs(ks - a3s) > gq || Math.abs(kt - a3t) > gq || e9 + 500 < gs) return !1;
		if (e9 = gs, a0r && ! function(ks, kt, eE) {
				ab.eV(eE) || -1 === (ks = bL.h3.a4M(ks, kt)) ? aM.a4L(eE) : aM.a4N(ks)
			}(ks, kt, eE), aL.gk || this.hH() || !b8.fv.gm(aC.eK) || aC.gj) return this.qq(), !1;
		if (aC.gv) {
			if (!a0r) {
				if (!ab.eV(eE)) return !1;
				a3u = eM, q9[3].hH = !0
			}
		} else if (bL.h3.o6(eM)) a0r ? aM.a4E(55, 0) : bL.a4C.a4D = -1;
		else {
			if (a0r) return !1;
			bL.h3.a4F(ks, kt) || (2 === aC.yp ? ab.g9(eE) && (player = ab.eS(eE), b8.fv.jD(player) || (q9[0].hH = !0, q9[0].kZ = 1, q9[7].hH = !0)) : ab.ef(eE) ? (a3u = al.eB.eD(eE)) && (gq = bK.eQ(a3u), q9[8].hH = !0, player = ab.eR(gq) ? aC
				.eX : ab.eS(gq)) : (a3u = eM, bL.h3.h4(aC.eK, eM) && (q9[0].hH = !0, q9[0].kZ = 1, q9[1].hH = !0, q9[1].kZ = bM.fB[2] ? 0 : 2), ab.h2(eE) || (ab.eR(eE) ? (player = aC.eX, h6(aC.eK) ? (q9[0].hH = !0, q9[0].kZ = 0) : h8(aC
				.eK, player) && (q9[0].hH = !0, q9[0].kZ = 3)) : (player = ab.eS(eE)) === aC.eK ? (q9[0].hH = !0, q9[0].kZ = 1, q9[7].hH = !0) : (q9[0].kZ = 1, q9[5].hH = function(player) {
				return !b8.fv.jD(player) && !a45(player) && b3.a46(1, [player], !1)
			}(player), q9[7].hH = !b8.fv.jD(player), eT(player, aC.eK) ? (q9[4].hH = !b8.fv.jD(player) && !ae.a4H(player) && b3.a46(0, [player], !1), q9[6].hH = function(player) {
				if (0 === oV.length) return !1;
				if (performance.now() > a3v + 4e3) return !(oV = []);
				return !a45(player) && ! function(player) {
					var aA;
					if (aC.hP)
						for (aA = oV.length - 1; 0 <= aA; aA--)
							if (!eT(player, oV[aA])) return 1;
					return
				}(player)
			}(player), hA(aC.eK, player) ? (q9[0].kZ = 0, q9[0].hH = !0) : h8(aC.eK, player) && (q9[0].kZ = 3, q9[0].hH = !0), q9[0].hH = this.a4J()) : (q9[2].hH = !0, q9[0].hH = !0)))))
		}
		return this.a4B(ks, kt)
	}, this.a4B = function(ks, kt) {
		return eh = ks - Math.floor(a3r / 2), ej = kt - Math.floor(a3r / 2), !!this.hH()
	}, this.a0O = function(ks, kt) {
		return !!this.hH() && (ai.vX.hH ? !ai.vX.xp(ks, kt) && (ai.vX.hH = !1, bd.dc = !0) : function(rB, ks, kt) {
			ks = a41(ks, kt);
			if (0 <= a43(ks)) return !1;
			if ((1 === ks || 6 === ks) && 0 <= a43(2)) return !1;
			if ((6 === ks || 9 === ks) && 0 <= a43(10)) return !1;
			return rB.qq(), bd.dc = !0
		}(this, ks, kt))
	}, this.qq = function() {
		for (var aA = q9.length - 1; 0 <= aA; aA--) q9[aA].hH = !1, q9[aA].kZ = 0;
		ai.vX.hH = !1
	}, this.hH = function() {
		return this.a4J() || ai.vX.hH
	}, this.a4J = function() {
		for (var ea = q9.length, aA = 0; aA < ea; aA++)
			if (q9[aA].hH) return !0;
		return !1
	}, this.tg = function() {
		if (this.hH())
			if (ai.vX.hH) ai.vX.tg();
			else {
				var aA, hX = th,
					eu = q9,
					ea = eu.length,
					a4R = (a3r + gap) / zoom;
				for (hX.imageSmoothingEnabled = !0, hX.setTransform(zoom, 0, 0, zoom, eh, ej), aA = 0; aA < ea; aA++) eu[aA].hH && th.drawImage(eu[aA].canvas[eu[aA].kZ], eu[aA].eh * a4R, eu[aA].ej * a4R);
				hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4S, a4T, a4U, a4V = -1;

	function a4W() {
		var a4X, x6 = canvas.getContext("2d", {
			alpha: !0
		});
		x6.clearRect(0, 0, j, j), x6.fillStyle = b9.mb, x6.fillRect(0, 0, j, j), 0 === a4T && (x6.fillStyle = b9.mg, x6.fillRect(0, 0, j, j)), x6.fillStyle = b9.mf, x6.fillRect(0, 0, j, 1), x6.fillRect(0, 0, 1, j), x6.fillRect(0, j - 1, j, 1), x6
			.fillRect(j - 1, 0, 1, j), a4X = .9 * j / aa.get(0).width, x6.imageSmoothingEnabled = !0, x6.setTransform(a4X, 0, 0, a4X, Math.floor((j - a4X * aa.get(0).width) / 2), Math.floor((j - a4X * aa.get(0).height) / 2)), x6.drawImage(aa.get(0),
				0, 0), x6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4Z(ks, kt) {
		if (!aL.gk) return ks <= j + ba.gap && kt >= aQ.ej ? 9 : -1;
		if (ks <= 4 * j + ba.gap) {
			if (kt >= aQ.ej) return 0;
			if (kt >= aQ.ej - j - a4U * ba.gap) return 2
		} else if (ks <= 7 * j + ba.gap && kt >= aQ.ej - j - a4U * ba.gap) return 1;
		return -1
	}
	this.gk = !1, this.dU = function() {
		a4T = -1, this.gk = !1, a4U = z.a0.qx() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4S = b8.pZ.rO(1, (z.a0.qx() ? .5 : .45) * j), a4W()
	}, this.a0z = function() {
		this.gk = !this.gk, this.gk ? (bA.a0y(!1), aC.gj && bA.a3i && bA.a10(!0), this.a4Y()) : (a4T = -1, a4W(), !aC.k8 || 1 !== aC.yp || aC.gv || aC.gj || z.a0.setState(1)), bd.dc = !0
	}, this.a4Y = function() {
		(aC.k8 || aC.gj) && 1 === aC.yp && (aU.lP(!0), aC.gv || setTimeout(function() {
			bZ.z0()
		}, 0), z.a0.setState(0))
	}, this.gn = function(ks, kt) {
		return 0 <= (a4V = a4Z(ks, kt)) || !aL.gk || aC.k8 || aC.gj || bc.hH || aL.a0z(), a4V
	}, this.a0O = function(ks, kt) {
		ks = a4Z(ks, kt);
		ks !== a4T && (a4T = ks, this.gk || a4W(), bd.dc = !0)
	}, this.a0P = function(ks, kt) {
		ks = a4Z(ks, kt);
		return -1 !== ks && a4V === ks && (this.gk ? aC.m8 ? (0 <= ks && bA.a0y(!1), !aC.gj) : (0 === ks ? aC.a0F() : 1 === ks ? this.a0z() : 2 === ks && s.t(1, 0), !0) : 9 === ks && (this.a0z(), !0))
	}, this.tg = function() {
		var i;
		this.gk ? (i = Math.floor(5.5 * j), th.setTransform(1, 0, 0, 1, ba.gap, aQ.ej), th.fillStyle = b9.mb, th.fillRect(0, 0, i, j), 0 === a4T ? (th.fillStyle = b9.mg, th.fillRect(0, 0, 4 * j, j)) : 1 === a4T && (th.fillStyle = b9.mg, th
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), th.fillStyle = b9.mf, th.fillRect(0, 0, i, 1), th.fillRect(0, 0, 1, j), th.fillRect(4 * j, 0, 1, j), th.fillRect(0, j - 1, i, 1), th.fillRect(i - 1, 0, 1, j), th.font = a4S, b8.pZ
			.textBaseline(th, 1), b8.pZ.textAlign(th, 1), th.fillText(L(41), 2 * j, .54 * j), i = .4 * j, aL.a4d(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.ej + .3 * j, i), i = 1, th.setTransform(1, 0, 0, 1, ba.gap, aQ.ej - i * a4U * ba.gap - i *
				j), th.fillStyle = b9.mb, th.fillRect(0, 0, 4 * j, j), a4T === i + 1 && (th.fillStyle = b9.mg, th.fillRect(0, 0, 4 * j, j)), th.fillStyle = b9.mf, th.fillRect(0, 0, 4 * j, 1), th.fillRect(0, 0, 1, j), th.fillRect(4 * j, 0, 1,
				j), th.fillRect(0, j - 1, 4 * j, 1), th.fillText(L(0 === i ? 41 : 42), 2 * j, .54 * j), th.setTransform(1, 0, 0, 1, 0, 0)) : th.drawImage(canvas, ba.gap, aQ.ej)
	}, this.pA = function(player) {
		return 0 !== af.ld[player] && 2 !== aC.yp && !b8.fv.jD(player)
	}, this.a4d = function(eh, ej, ea) {
		th.setTransform(1, 0, 0, 1, eh, ej), th.lineWidth = ba.xq, th.strokeStyle = b9.mf, th.beginPath(), th.moveTo(0, 0), th.lineTo(ea, ea), th.moveTo(0, ea), th.lineTo(ea, 0), th.stroke()
	}
}

function c9() {
	var a4f, j, a4g, a4h, a4i, a4j, a4k, a4l, a4m;

	function x2() {
		return aQ.a54(aM.a50()) ? au.hH ? __fx.settings.keybindButtons ? aQ.ej - 2 * aQ.j - 3 * a4g : aQ.ej - aQ.j - 2 * a4g : __fx.settings.keybindButtons ? aQ.ej - aQ.j - 2 * a4g : aQ.ej - a4g : bA.a54(aM.a53()) ? au.hH ? bA.x2() - aQ.j - 2 * a4g :
			bA.x2() - a4g : au.hH ? h.j - aQ.j - (bi.a3q() + 1) * a4g : h.j - bi.a3q() * ba.gap
	}

	function a4r(di, pG, id, g7, a4u, a4v, vf, a4w, a4x, a4y) {
		var aA, x6, a1j, pR, g, a59 = void 0 !== a4x,
			i = Math.floor(aP.measureText(pG, aM.a4S) + 1.5 * a4h + (a59 ? j : 1.5 * a4h));
		if (bd.dc = !0, i + 2 * a4g + aQ.j > h.i && !a59 && 50 !== id && 20 < pG.length) a4r(di, (g = b8.zU.a31(pG))[0], id, g7, a4u, a4v, vf, a4w, a4x, a4y), a4r(di, g[1], id, g7, a4u, a4v, vf, a4w, a4x, a4y);
		else if (g = i + (50 === id ? a4i : 0), (a1j = document.createElement("canvas")).width = i, a1j.height = j, (x6 = a1j.getContext("2d", {
				alpha: !0
			})).font = aM.a4S, b8.pZ.textBaseline(x6, 1), b8.pZ.textAlign(x6, 0), x6.clearRect(0, 0, i, j), x6.fillStyle = a4v, x6.fillRect(0, 0, i, j), x6.fillStyle = a4u, x6.fillText(pG, Math.floor(1.5 * a4h), Math.floor(j / 2)), a59 && (x6
				.imageSmoothingEnabled = !0, ai.vX.xr(a4x, x6, i - j, 0, j)), 0 === (pR = {
				e9: di,
				pG: pG,
				id: id,
				player: g7,
				canvas: a1j,
				a4u: a4u,
				a4v: a4v,
				i: i,
				a51: g,
				vf: vf,
				a4w: a4w,
				a4x: a4x,
				a4y: a4y
			}).e9 || 0 < a4f.length && 0 < a4f[0].e9) a4f.unshift(pR);
		else {
			for (aA = 1; aA < a4f.length; aA++)
				if (0 < a4f[aA].e9) return void a4f.splice(aA, 0, pR);
			a4f.push(pR)
		}
	}

	function a4s(dw, sD, eu) {
		return "rgb(" + dw + "," + sD + "," + eu + ")"
	}

	function a5A(id, g2) {
		for (var ea = a4f.length, aA = 0; aA < ea; aA++) a4f[aA].id === id && g2-- <= 0 && (a4f.splice(aA, 1), aA--, ea--)
	}

	function a5B(id, player) {
		for (var eo = !1, aA = a4f.length - 1; 0 <= aA; aA--) a4f[aA].id !== id || player !== aC.eX && a4f[aA].player !== player || (a4f.splice(aA, 1), eo = !0);
		return eo
	}

	function a5Y(pG) {
		a4r(340, pG, 6, 0, a4s(215, 245, 255), b9.mc, -1, !1)
	}
	this.a4n = "", this.dU = function() {
		var self;
		a4l = 0, a4k = z.a0.qx() ? 7 : 12, a4j = {
			yd: [0, 0, 0],
			a4o: [0, 0, 0],
			lv: [220, 180, 180],
			tf: [0, 0, 0],
			ev: [0, 0, 0]
		}, a4f = [], this.resize(), aC.gv && this.z1(0, 18), bQ.vK.vL[bQ.eG].name.length && a5Y(L(89, [bQ.vK.vL[bQ.eG].name])), a5Y(L(90, [bQ.el - 2 + "x" + (bQ.em - 2)])), a5Y(L(91, [b8.zU.y7(an.a5Z)])), an.a5Z !== an.a5a && a5Y(L(92, [b8.zU
			.y7(an.a5a) + " (" + b8.zU.a2x(100 * an.a5a / an.a5Z, 1) + ")"
		])), 0 < an.a5b && a5Y(L(65, [b8.zU.y7(an.a5b) + " (" + b8.zU.a2x(100 * an.a5b / an.a5Z, 1) + ")"])), 0 < an.a5c && a5Y(L(93, [b8.zU.y7(an.a5c) + " (" + b8.zU.a2x(100 * an.a5c / an.a5Z, 1) + ")"])), 10 === aC.k6 && a4r(120, L(94), 6,
			0, a4s(235, 255, 120), b9.mc, -1, !1), 0 !== (self = this).a4n.length && (a4r(200, self.a4n, 0, 0, b9.mf, b9.mc, -1, !1), self.a4n = ""), aC.xJ && a4r(340, L(43), 6, 0, a4s(255, 200, 0), b9.mc, -1, !1)
	}, this.resize = function() {
		var a4t, aA;
		if (j = (j = Math.floor((z.a0.qx() ? .031 : .0249) * h.pb)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4S = b8.pZ.rO(1, this.fontSize), a4g = ba.gap, a4h = Math.floor(j / 5), 0 < a4f.length)
			for (a4t = a4f, a4f = [], aA = a4t.length - 1; 0 <= aA; aA--) a4r(a4t[aA].e9, a4t[aA].pG, a4t[aA].id, a4t[aA].player, a4t[aA].a4u, a4t[aA].a4v, a4t[aA].vf, a4t[aA].a4w, a4t[aA].a4x, a4t[aA].a4y);
		this.a4z()
	}, this.a4z = function() {
		a4m = document.createElement("canvas");
		var pG = L(44),
			x6 = (a4i = aP.measureText(pG, this.a4S) + 5 * a4h, a4m.height = j, a4m.width = a4i, a4m.getContext("2d", {
				alpha: !0
			}));
		x6.font = this.a4S, b8.pZ.textBaseline(x6, 1), b8.pZ.textAlign(x6, 1), x6.clearRect(0, 0, a4i, j), x6.fillStyle = b9.n2, x6.fillRect(0, 0, a4i, j), x6.fillStyle = b9.mf, x6.fillText(pG, Math.floor(a4i / 2), Math.floor(j / 2))
	}, this.a50 = function() {
		var ea;
		return au.hH ? au.i : 0 === (ea = a4f.length) ? 0 : 1 === ea ? a4f[0].a51 : a52(a4f[0].a51, a4f[1].a51)
	}, this.a53 = function() {
		var ea = a4f.length;
		return au.hH ? ea ? a52(au.i, a4f[0].a51) : au.i : 0 === ea ? 0 : 1 === ea ? a4f[0].a51 : 2 === ea ? a52(a4f[0].a51, a4f[1].a51) : a52(a52(a4f[0].a51, a4f[1].a51), a4f[2].a51)
	}, this.gn = function(eh, ej) {
		for (var m5, a55, a56 = x2(), aA = a4f.length - 1; 0 <= aA; aA--)
			if ((a55 = a56 - (aA + 1) * j) <= ej && ej < a55 + j) return 50 === a4f[aA].id ? eh >= h.i - a4i - a4g - a4f[aA].i && (eh >= h.i - a4i - a4g ? b6.fv.oR(a4f[aA].player) : aG.lz(a4f[aA].player, 800, !1, 0), !0) : eh >= h.i - a4f[aA].i -
				a4g && (736 === a4f[aA].id ? (a55 = a4f[aA].pG.split(" "), window.open(a55[a55.length - 1], "_blank")) : a4f[aA].a4w && (a4f[aA].a4y && a4f[aA].a4y.et ? (a55 = a4f[aA].a4y.eM, m5 = bK.ei(a55) - 10, a55 = bK.ek(a55) - 10, aG
					.ly(m5, a55, 19 + m5, 19 + a55)) : a4f[aA].a4y && a4f[aA].a4y.eu ? aG.m0(a4f[aA].player, a4f[aA].a4y.m1) : (aG.lz(a4f[aA].player, 800, !1, 0), 0 <= a4f[aA].vf && (m5 = a4f[aA].vf, a4f[aA].vf = a4f[aA].player, a4f[
					aA].player = m5))), !0);
		return !1
	}, this.zD = function(di, pG, id, g7, a4u, a4v, vf, a4w, a4x, a4y) {
		a4r(di, pG, id, g7, a4u, a4v, vf, a4w, a4x, a4y)
	}, this.a58 = function(p) {
		a4r(300, p, 252, 0, b9.mf, b9.mc, -1, !1)
	}, this.a3D = function(id) {
		for (var aA = a4f.length - 1; 0 <= aA; aA--) a4f[aA].id === id && (a4f[aA].e9 = 1)
	}, this.z1 = function(player, id) {
		0 === id ? (aP.ix(player, 0), a5A(423, 0), a4r(160, L(45, [af.zQ[player]]), 423, player, "rgb(10,220,10)", b9.mc, -1, !1)) : 1 === id ? (a5B(50, aC.eX), aP.ix(player, 1), a4r(360, L(46, [af.zQ[player]]), 0, player, b9.nL, b9.mc, -1, !0),
			aG.lz(player, 2700, !1, 0)) : 2 === id ? (aP.ix(player, 2), a4r(0, L(47), 0, player, "rgb(10,255,255)", b9.mc, -1, !0), aG.lz(player, 2700, !1, 0)) : 3 === id ? (aP.ix(player, 2), a4r(0, L(48, [af.zQ[player]]), 0, player, b9.mf,
			b9.mc, -1, !0), aG.lz(player, 2700, !1, 0)) : 4 === id ? this.a5C(1, player, player) : 5 === id ? 2 === af.a2G[player] || b8.fv.jD(aC.eK) || (function(id, lY) {
			var aA, a5N = 0,
				ea = a4f.length;
			for (aA = 0; aA < ea; aA++)
				if (a4f[aA].id === id && lY <= ++a5N) return a4f.splice(aA, 1)
		}(1, 5), ae.a5E(player) ? a4r(180, L(49, [af.zQ[player]]), 1, player, a4s(255, 200, 180), b9.mc, -1, !0) : (a5A(573, 0), a4r(180, L(50, [af.zQ[player]]), 573, player, b9.nL, b9.mc, -1, !0))) : 18 === id ? a4r(255, L(51), 18, 0, b9.mf,
			b9.mc, -1, !1) : 21 === id ? a4r(220, L(52), id, 0, b9.mf, b9.mc, -1, !1) : 22 === id ? this.a5C(2, player, player) : 59 === id && a4r(0, L(53), id, 0, b9.nc, b9.mc, 0, !1)
	}, this.a09 = function(p) {
		a4r(200, L(54, [p]), 94, 0, b9.mf, b9.nH, -1, !1)
	}, this.z8 = function(a5F) {
		if (aC.eK === a5F && !aC.k8)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4r(0, "Your Win Count is now " + __fx.wins.count, 3, a5F, b9.mf, b9.mc, -1, !0);
		af.gN[a5F] && (aP.ix(a5F, 2), aC.jp < 100 ? a4r(0, L(48, [af.zQ[a5F]]), 3, a5F, b9.mf, b9.mc, -1, !0) : a4r(0, L(55, [af.zQ[a5F]]), 3, a5F, b9.mf, b9.mc, -1, !0))
	}, this.a4L = function(eE) {
		var a5H, pG, a5G = "(" + bK.ei(eE >> 2) + ", " + bK.ek(eE >> 2) + ")",
			a4w = !1,
			player = 0;
		ab.eV(eE) ? ab.eR(eE) ? a5G = L(56, [a5G]) : (player = ab.eS(eE), pG = L(57, [b8.x6.a1v(af.zW[player], b8.pZ.rO(0, 10), 150)]) + "   ", pG = (pG += L(58, [b8.zU.y7(af.gb[player])]) + "   ") + L(59, [b8.zU.y7(af.gN[player])]) + "   ", aC
				.hP && (a5H = be.zB[be.kB[be.eY[player]]], pG += L(60) + ": " + a5H + "   "), b8.fv.jD(player) && (pG += L(61) + ": " + aD.k0[aD.hE[player]] + "   "), a5G = pG = (pG += L(62, [player]) + "   ") + L(63, [a5G]), a4w = !0) : a5G = ab
			.ef(eE) ? L(64, [a5G]) + "   #" + ab.eI(eE) : L(65, [a5G]), bd.dc = !0, a5A(55, 0), a4r(220, a5G, 55, player, b9.mf, b9.mc, -1, a4w)
	}, this.a4N = function(a5I) {
		var kX = bL.x,
			player = kX.a5J[a5I] >> 3,
			pG = (bd.dc = !0, a5A(55, 0), L(66, [af.zQ[player]]) + "   ");
		a4r(220, pG += L(58, [kX.a5K[a5I]]), 55, player, b9.mf, b9.mc, -1, !0)
	}, this.oB = function(ny, a5L, oC) {
		ny === aC.eK ? a4r(175, " " + L(67, [af.zQ[a5L]]) + ": ", 1001, a5L, a4s(200, 255, 210), b9.mc, -1, !0, oC) : this.a5M(ny, oC)
	}, this.a5M = function(ny, oC) {
		a5A(1e3, 0), a4r(175, af.zQ[ny] + ": ", 1e3, ny, b9.mf, "rgba(5,60,25,0.9)", -1, !0, oC)
	}, this.zE = function() {
		var p;
		aC.yu ? (p = L(68), aP.zC(L(69), 2, 1, 12), a4r(0, p, 40, 0, "rgb(10,220,10)", b9.mc, -1, !1)) : (p = L(70), aP.zC(L(71), 2, 0, 16), a4r(0, p, 41, 0, b9.mf, b9.mc, -1, !1))
	}, this.xD = function() {
		var g2 = af.zQ,
			ed = aC.data;
		a4r(300, g2[0] + " [" + aC.z7.xI(ed.elo[0]) + "] vs " + g2[1] + " [" + aC.z7.xI(ed.elo[1]) + "]", 65, 0, b9.mW, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5O = function(p) {
		a4r(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5P = function(a5Q) {
		a4r(0, L(a5Q ? 72 : 73), 247, 0, b9.nb, b9.mc, -1, !1)
	}, this.xL = function(xH, xK, a5R) {
		var ed = aC.data,
			g2 = af.zQ;
		a4r(0, g2[0] + ": " + aC.z7.xI(ed.elo[0]) + " -> " + xH, 66, 0, b9.mf, a5R[0], -1, !1), a4r(0, g2[1] + ": " + aC.z7.xI(ed.elo[1]) + " -> " + xK, 66, 1, b9.mf, a5R[1], -1, !1)
	}, this.oS = function(player, id) {
		0 === id ? a5B(50, player) ? (a4r(128, L(74, [af.zQ[player]]), 52, player, a4s(180, 255, 180), b9.mc, -1, !0), ae.p8(player, 2, 255)) : a4r(384, L(75, [af.zQ[player]]), 51, player, a4s(210, 210, 255), b9.mc, -1, !0) : a5B(51, player) ? (
			a4r(128, L(76, [af.zQ[player]]), 52, player, b9.mf, "rgba(60,120,10,0.9)", -1, !0), ae.p8(player, 2, 255)) : (a4r(384, L(77, [af.zQ[player]]), 50, player, b9.mf, "rgba(90,90,90,0.9)", -1, !0), ae.p8(player, 2, 96))
	}, this.oW = function(yd, target) {
		var color = a4s(210, 255, 210);
		1 < yd.length ? a4r(230, L(78, [yd.length, af.zQ[target]]), 66, target, color, b9.mc, -1, !0) : a4r(230, L(79, [af.zQ[yd[0]], af.zQ[target]]), 66, yd[0], color, b9.mc, target, !0)
	}, this.a5S = function(player, target) {
		a4r(230, L(80, [af.zQ[player], af.zQ[target]]), 66, player, b9.mf, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4E = function(id, g2) {
		a5A(id, g2)
	}, this.yw = function(id, player) {
		a5B(id, void 0 === player ? aC.eX : player)
	}, this.a5T = function(id) {
		for (var aA = a4f.length - 1; 0 <= aA; aA--)
			if (a4f[aA].id === id) return a4f[aA];
		return null
	}, this.oN = function(a5U, a5V, player) {
		2 !== af.a2G[aC.eK] && (a4r(200, 1 === a5U ? L(81, [af.zQ[player]]) : L(82, [b8.zU.y7(a5U), af.zQ[player]]), 30, player, "rgb(190,255,190)", b9.mc, -1, !0), a5V) && a4r(30, 1 === a5V ? L(83) : L(84, [b8.zU.y7(a5V)]), 30, 0, b9.mf, b9.mc,
			-1, !1)
	}, this.a5X = function(a5U, player) {
		2 !== af.a2G[aC.eK] && (a5A(31, 0), 2 === af.a2G[player] || player >= aC.jp ? a4r(150, 1 === a5U ? L(85, [af.zQ[player]]) : L(86, [af.zQ[player], b8.zU.y7(a5U)]), 31, player, b9.mW, "rgba(205,205,205,0.9)", -1, !0) : a4r(150, 1 === a5U ?
			L(87, [af.zQ[player]]) : L(88, [af.zQ[player], b8.zU.y7(a5U)]), 31, player, b9.mW, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yv = function(bp) {
		for (var ev = bd.jm(), aA = 2; 0 <= aA; aA--) 0 < a4j.tf[aA] && (bp || a4j.ev[aA] < ev - 220) && this.a5d(aA)
	}, this.a5d = function(id) {
		var pG, ea = a4j.tf[id],
			player = a4j.yd[id];
		a4j.tf[id] = 0, 1 === ea ? (0 === id ? pG = L(95, [af.zQ[player], af.zQ[a4j.a4o[0]]]) : 1 === id ? pG = L(96, [af.zQ[player]]) : 2 === id ? pG = L(97, [af.zQ[player]]) : 3 === id && (pG = L(98, [af.zQ[player]])), a5A(7, 0), a4r(a4j.lv[
			id], pG, 7, a4j.a4o[id], b9.mf, b9.mc, -1, !0)) : (pG = L(0 === id ? 99 : 1 === id ? 100 : 101, [ea]), a5A(7, 0), a4r(a4j.lv[id], pG, 7, player, b9.mf, b9.mc, -1, !1))
	}, this.a5C = function(id, gz, vf) {
		var ev = bd.jm(),
			ea = a4j.tf[id] + 1;
		a4j.tf[id]++, a4j.yd[id] = gz, a4j.a4o[id] = vf, 1 === ea && (a4j.ev[id] = ev), (1 === ea && (aC.ys < 32 || 2 === aC.yp) || 1 < ea && (a4j.ev[id] < ev - 140 || 2 === aC.yp)) && this.a5d(id)
	}, this.ij = function() {
		b0.ij();
		for (var hj = (hj = a4f.length - a4k) <= 1 ? 1 : hj * hj, aA = a4f.length - 1; 0 <= aA; aA--) 0 < a4f[aA].e9 && (a4f[aA].e9 -= hj, a4f[aA].e9 <= 0) && (bd.dc = !0, a4f.splice(aA, 1));
		! function() {
			var g2, aA;
			if (128 !== a4l && !(++a4l < 128))
				for (g2 = 5, aA = ak.jq - 1; 0 <= aA; aA--) 1 === af.a2G[ak.jr[aA]] && 0 < g2-- && a4r(240, L(98, [af.zQ[ak.jr[aA]]]), 1, ak.jr[aA], b9.mW, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yv(!1)
	}, this.tg = function() {
		for (var w6, ej = x2(), aA = a4f.length - 1; 0 <= aA; aA--) w6 = ej - (aA + 1) * j, 50 === a4f[aA].id ? (th.drawImage(a4f[aA].canvas, h.i - a4f[aA].i - a4i - a4g, w6), th.drawImage(a4m, h.i - a4i - a4g, w6)) : th.drawImage(a4f[aA].canvas,
			h.i - a4f[aA].i - a4g, w6)
	}
}

function cA() {
	var a5f, a5g, a5h, i, j, font, pG;

	function a5m(a5n) {
		return a5n < 10 ? "0" + a5n : String(a5n)
	}
	this.dU = function() {
		pG = L(102)
	}, this.resize = function() {
		i = Math.floor((z.a0.qx() ? .53 : .36) * h.pb), j = Math.floor(.065 * i), font = b8.pZ.rO(1, Math.floor(.9 * j)), a5h--, this.setTime()
	}, this.ij = function() {
		this.setTime() && (bd.dc = !0)
	}, this.setTime = function() {
		for (var di = new Date, a5i = di.getUTCMinutes(), a5j = di.getUTCSeconds(), a5k = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5l = (a5g = 3600 - 60 * a5i - a5j, a5g %= 300, 300), aA = 0; aA < a5k.length; aA++)
			if ((60 * a5i + a5j + a5g) % 3600 == 60 * a5k[aA]) {
				a5l = 0;
				break
			} return a5g += a5l, a5f = pG + a5m(Math.floor(a5g / 60)) + ":" + a5m(a5g % 60), a5h !== (a5h = 60 * a5i + a5j) && (i = aP.measureText(a5f, font), i += Math.floor(.4 * j), !0)
	}, this.tg = function() {
		th.lineWidth = 1 + Math.floor(j / 15), th.translate(h.i - j, Math.floor(.5 * (h.j + i))), th.rotate(-Math.PI / 2), th.fillStyle = b9.mf, th.fillRect(0, 0, i, j), th.strokeStyle = b9.mW, th.strokeRect(0, 0, i, j + 10), th.fillStyle = b9
			.mW, th.font = font, b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 1), th.fillText(a5f, Math.floor(i / 2), Math.floor(.59 * j)), th.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4f, a5o, a4S, j, a5p;

	function a5r(aA) {
		var a5t = !0,
			hf = b9.mf,
			i = (a4f[aA].j0 === aC.eX ? a4f[aA].x6.fillStyle = b9.mq : (ab.a5u(a4f[aA].j0), a4f[aA].x6.fillStyle = b8.color.mZ(bM.f9[0], bM.f9[1], bM.f9[2], .87), 400 < b8.pi.a1N(bM.f9, 0, 2) && (a5t = !1, hf = b9.mW)), a4f[aA].canvas.width),
			rv = (a4f[aA].x6.clearRect(0, 0, i, j), a4f[aA].x6.fillRect(0, 0, i, j), a4f[aA].x6.fillStyle = hf, ! function(x6, i, j) {
				x6.fillRect(0, 0, i, 1), x6.fillRect(0, j - 1, i, 1), x6.fillRect(0, 0, 1, j), x6.fillRect(i - 1, 0, 1, j)
			}(a4f[aA].x6, i, j), a5o + 2 * j < i && (a4f[aA].x6.fillRect(i - a5o - j, 0, 1, j), a4f[aA].x6.fillText(af.zQ[a4f[aA].j0], Math.floor((i - a5o) / 2), Math.floor(.57 * j))), 0 !== a4f[aA].id ? 0 : j);
		a4f[aA].x6.fillText(b8.zU.y7(a4f[aA].hE), Math.floor(i - a5o / 2 - rv), Math.floor(.57 * j)),
			function(aA, i, rv, a5t) {
				a4f[aA].x6.fillStyle = a5t ? b9.mh : b9.md;
				a5t = Math.floor(a5o * a4f[aA].hE / a4f[aA].a60);
				a4f[aA].x6.fillRect(Math.floor(i - a5o - rv), j - a5p, a5t, a5p)
			}(aA, i, rv, a5t), 0 === a4f[aA].id ? (a5x(aA, i, a5t, hf), function(aA, i, a5t) {
				a4f[aA].x6.strokeStyle = a5t ? b9.mx : b9.n7, a4f[aA].x6.fillRect(j, 0, 1, j);
				a5t = i - j;
				a4f[aA].x6.beginPath(), a4f[aA].x6.moveTo(Math.floor(.3 * j + a5t), Math.floor(j / 2)), a4f[aA].x6.lineTo(Math.floor(j - .3 * j + 0 + a5t), Math.floor(j / 2)), a4f[aA].x6.stroke(), a4f[aA].x6.beginPath(), a4f[aA].x6.moveTo(Math
					.floor(j / 2 + a5t), Math.floor(.3 * j)), a4f[aA].x6.lineTo(Math.floor(j / 2 + a5t), Math.floor(j - .3 * j + 0)), a4f[aA].x6.stroke()
			}(aA, i, a5t)) : a5x(aA, 2 * j, a5t, hf)
	}

	function a5x(aA, i, a5t, hf) {
		a4f[aA].x6.strokeStyle = a4f[aA].a61 ? b9.mo : a5t ? b9.nD : b9.nE, a4f[aA].x6.fillStyle = hf, a4f[aA].x6.fillRect(i - j, 0, 1, j), a4f[aA].x6.lineWidth = Math.max(Math.floor(j / 12), 3), a4f[aA].x6.lineCap = "round";
		a5t = .35;
		i = j + 1, a4f[aA].x6.beginPath(), a4f[aA].x6.moveTo(Math.floor(i - a5t * j + 0), Math.floor(a5t * j)), a4f[aA].x6.lineTo(Math.floor(i - j + a5t * j), Math.floor(j - a5t * j + 0)), a4f[aA].x6.stroke(), a4f[aA].x6.beginPath(), a4f[aA].x6
			.moveTo(Math.floor(i - j + a5t * j), Math.floor(a5t * j)), a4f[aA].x6.lineTo(Math.floor(i - a5t * j + 0), Math.floor(j - a5t * j + 0)), a4f[aA].x6.stroke()
	}

	function a6B(ea) {
		for (var hE, aA = ea - 1; 0 <= aA; aA--) hE = ac.fm(aC.eK, aA), a4f[aA].hE !== hE && (a4f[aA].hE = hE, a4f[aA].a60 = hE > a4f[aA].a60 ? hE : a4f[aA].a60, a4f[aA].a5s = !0)
	}

	function a5q(a6D) {
		a6D.canvas = document.createElement("canvas"), bQ.vQ.font = a4S;
		var i = a5o;
		a6D.j0 < aC.eX && 0 === a6D.id && (i += Math.floor(bQ.vQ.measureText(af.zQ[a6D.j0] + "000").width)), i += j, 0 === a6D.id && (i += j), a6D.canvas.width = i, a6D.canvas.height = j, a6D.x6 = a6D.canvas.getContext("2d", {
			alpha: !0
		}), a6D.x6.font = a4S, b8.pZ.textBaseline(a6D.x6, 1), b8.pZ.textAlign(a6D.x6, 1)
	}

	function a67(aA) {
		return aT.a6F() ? h.i - a4f[aA].canvas.width - ba.gap : aT.eh
	}

	function a68(aA) {
		return Math.floor(2 * ba.gap + (aT.a6F() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dU = function() {
		a4f = [], this.resize()
	}, this.resize = function() {
		a4S = aM.a4S, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qx() && (j = Math.floor(1.25 * j)), a5p = Math.floor(.15 * j), bQ.vQ.font = a4S, a5o = Math.floor(bQ.vQ.measureText("02 000 000 0000").width);
		for (var aA = a4f.length - 1; 0 <= aA; aA--) a5q(a4f[aA]), a5r(aA)
	}, this.lP = function() {
		for (var aA = a4f.length - 1; 0 <= aA; aA--) a4f[aA].a5s && (a4f[aA].a5s = !1, a5r(aA))
	}, this.gn = function(ks, kt) {
		if (2 !== aC.yp && 0 !== af.ld[aC.eK] && !aC.gj && !b8.fv.jD(aC.eK))
			for (var a62, a63, a64, a65 = z.a0.qx() ? j : 0, a66 = z.a0.qx() ? Math.floor(.15 * j) : 0, aA = a4f.length - 1; 0 <= aA; aA--)
				if (a62 = a67(aA), a63 = a68(aA), a64 = a4f[aA].canvas.width, a63 - a66 <= kt && kt <= a63 + j + a66) {
					if (a62 - a65 <= ks && ks <= a62 + j + a65) return a4f[aA].a61 || (a4f[aA].a5s = !0, a4f[aA].a61 = !0, 0 === a4f[aA].id && b6.gw.o9(a4f[aA].j0)), !0;
					if (0 === a4f[aA].id && a62 + a64 - j - a65 <= ks && ks <= a62 + a64 + a65) return bT.a48(3), b6.gw.h7(aQ.h1(), a4f[aA].j0), !0
				} return !1
	}, this.ij = function() {
		var ea;
		0 === af.ld[aC.eK] || b8.fv.jD(aC.eK) && !aC.gj || (function(ea) {
			if (a4f.length !== ea) return 1;
			for (var aA = ea - 1; 0 <= aA; aA--)
				if (a4f[aA].id !== ac.fg(aC.eK, aA) || a4f[aA].j0 !== ac.fl(aC.eK, aA)) return 1;
			return
		}(ea = ac.ff(aC.eK)) && function(ea) {
			var aA, id, j0, eu, hE, a4t = [];
			loop: for (aA = 0; aA < ea; aA++) {
				for (id = ac.fg(aC.eK, aA), j0 = ac.fl(aC.eK, aA), eu = 0; eu < a4f.length; eu++)
					if (a4f[eu].id === id && a4f[eu].j0 === j0) {
						a4t.push(a4f.splice(eu, 1)[0]);
						continue loop
					} hE = ac.fm(aC.eK, aA), a5q(hE = {
					j0: j0,
					hE: hE,
					a60: hE,
					id: id,
					a5s: !0,
					a61: !1,
					canvas: null,
					x6: null
				}), a4t.push(hE)
			}
			a4f = a4t
		}(ea), a6B(ea))
	}, this.a6E = function(g7) {
		for (var ea = Math.min(a4f.length, ac.ff(aC.eK)), aA = 0; aA < ea; aA++)
			if (a4f[aA].j0 === g7) return void(a4f = [])
	}, this.tg = function() {
		if (0 !== af.ld[aC.eK] && (!b8.fv.jD(aC.eK) || aC.gj))
			for (var aA = a4f.length - 1; 0 <= aA; aA--) th.drawImage(a4f[aA].canvas, a67(aA), a68(aA))
	}
}

function cC() {
	var a4f, ju, a6G, a6H, j, a4S, fontSize, a6I, a6J, a6K, a6L, canvas, x6, lq, a6M;

	function ty(aA) {
		return L(0 === aA ? 103 : 1 === aA ? 104 : 2 === aA ? 105 : 106)
	}

	function a6T() {
		th.drawImage(canvas, ba.gap + (aC.hP ? ba.gap + bf.a6U() : 0), a6V + 2 * ba.gap)
	}

	function a6N() {
		canvas.width = a4f[0].width + a6K, canvas.height = j + a6K, (x6 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4f[0].width + a6K, j + a6K), x6.translate(Math.floor(a6K / 2), Math.floor(a6K / 2)), x6.lineWidth = a6K, x6.fillStyle = 1 === a4f[0].a6S ? b9.mk : b9.mc, a6W(), x6.fill(), x6.strokeStyle = 1 === a4f[0].a6S ? b9.mW :
			b9.mf, a6W(), x6.stroke(), b8.pZ.textAlign(x6, 1), b8.pZ.textBaseline(x6, 1), x6.fillStyle = 1 === a4f[0].a6S ? b9.mW : b9.mf, x6.font = a4S[0], x6.fillText(ty(a4f[0].a6R), Math.floor(a4f[0].width / 2), Math.floor(.72 * a6I[0] * j)), x6
			.font = a4S[1], x6.fillText(a4f[0].pG, Math.floor(a4f[0].width / 2), Math.floor((a6I[0] + .48 * a6I[1]) * j))
	}

	function a6W() {
		x6.beginPath(), x6.moveTo(a6L, 0), x6.lineTo(a4f[0].width - a6L, 0), x6.lineTo(a4f[0].width, a6L), x6.lineTo(a4f[0].width, j - a6L), x6.lineTo(a4f[0].width - a6L, j), x6.lineTo(a6L, j), x6.lineTo(0, j - a6L), x6.lineTo(0, a6L), x6.closePath()
	}
	this.dU = function() {
		ju = 4, a6G = a6H = lq = 0, a4f = [], a4S = new Array(2), fontSize = new Array(2), (a6I = new Array(2))[0] = .3, a6I[1] = .7, a6J = new Array(4), canvas = document.createElement("canvas"), a6M = bd.e9 + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qx() ? .0725 : .058) * h.pb), fontSize[0] = Math.floor(.85 * a6I[0] * j), fontSize[1] = Math.floor(.85 * a6I[1] * j), a4S[0] = b8.pZ.rO(1, fontSize[0]), a4S[1] = b8.pZ.rO(1, fontSize[1]), aA = a6J.length -
			1; 0 <= aA; aA--) a6J[aA] = this.measureText(ty(aA) + "000", a4S[0]);
		if (a6K = Math.floor(1 + .05 * j), a6L = Math.floor(.2 * j), 0 < a4f.length) {
			for (aA = a4f.length - 1; 0 <= aA; aA--) i = this.measureText(a4f[aA].pG + "00", a4S[1]), a4f[aA].width = i < a6J[aA] ? a6J[aA] : i;
			a6N()
		}
	}, this.ij = function() {
		0 !== ju && (4 === ju ? bd.e9 > a6M && (ju = 0, 1 === aC.yp) && aP.zC(bQ.vK.vL[bQ.eG].name, 3, 1, 9) : (1 === ju ? (0 === a6G && (a6N(), a6G = 1e-4), 1 <= (a6G += .002 * (bd.e9 - lq)) && (a6H = 0, ju = 2, a6G = 1), bd.dc = !0) : 2 ===
			ju ? ((a6H += (bd.e9 - lq) / 1e3) > a4f[0].lv || 1 < a6H && 1 < a4f.length) && (ju = 3) : 3 === ju && ((a6G -= .002 * (bd.e9 - lq)) <= 0 && (a6G = 0, a4f.shift(), ju = 0 < a4f.length ? 1 : 0), bd.dc = !0), lq = bd.e9))
	}, this.measureText = function(pG, a4S) {
		return th.font = a4S, Math.floor(th.measureText(pG).width)
	}, this.ix = function(a6Q, aA) {
		this.zC(af.zQ[a6Q], aA, 1, 0 === aA ? 3 : 7)
	}, this.zC = function(pG, a6R, a6S, lv) {
		var i;
		pG.length && (i = (i = this.measureText(pG + "00", a4S[1])) < a6J[a6R] ? a6J[a6R] : i, a4f.push({
			pG: pG,
			width: i,
			a6R: a6R,
			a6S: a6S,
			lv: lv
		}), 0 === ju) && (a6G = 0, ju = 1, lq = bd.e9)
	}, this.tg = function() {
		0 !== ju && 0 !== a6G && (a6G < 1 ? (th.globalAlpha = a6G, a6T(), th.globalAlpha = 1) : a6T())
	}
}

function ck() {
	var j, canvas, x6, a6X, a6Y, a6Z, a6a, a5s, a6b, a6c, a6d, a6e, a5Q = !1,
		a1j = (this.hH = !1, this.i = 0, new Array(2)),
		a6f = 0;

	function lQ() {
		var i = au.i,
			kX = (a5s = !1, x5(x6, i, j), Math.floor(i / 2));
		1 === a6X ? (x6.fillStyle = b9.mz, x6.fillRect(kX, 0, kX, j)) : -1 === a6X && (x6.fillStyle = b9.nF, x6.fillRect(0, 0, kX, j)), x7(x6, i, j, 2);
		var kX = (kX = Math.floor(.25 * j)) < 2 ? 2 : kX,
			a5Z = (x6.fillStyle = b9.ml, Math.floor((j - 4) * a6Y[1] / a6Z[1]));
		0 < a5Z && x6.fillRect(2, j - 2 - a5Z, kX, a5Z), 0 < (a5Z = Math.floor((j - 4) * a6Y[0] / a6Z[0])) && x6.fillRect(i - 2 - kX, j - 2 - a5Z, kX, a5Z);
		kX = (kX = Math.floor(j / 8)) < 2 ? 2 : kX, x9(x6, Math.floor(.4 * j), 0, j, kX, .5, !1), x9(x6, Math.floor(i - 1.4 * j), 0, j, kX, .5, !0), a5Z = 1.1 * j / a1j[0].width;
		x6.imageSmoothingEnabled = !0, x6.setTransform(a5Z, 0, 0, a5Z, (i - a5Z * a1j[0].width) / 2, -.05 * j), x6.drawImage(a1j[+a5Q], 0, 0), x6.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6k() {
		a6e = -1, a5Q = ag.a6l(), aM.a3D(257), aM.a5P(a5Q), au.hH = !0, a5s = !0, a6b = 360;
		for (var f2, di = 0, aA = ak.jq - 1; 0 <= aA; aA--) b8.fv.jD(ak.jr[aA]) || (di += af.gN[ak.jr[aA]]);
		a5Q ? a6Z[0] = Math.max(bJ.dj(3 * di, 4), 1) : aC.hP ? 9 === aC.k6 && 8 === be.kB[bf.l1()] ? a6Z[0] = Math.max(di, 1) : (f2 = bJ.dj(100 * bf.a2h(), aC.jZ), f2 = bJ.p7(200 - 2 * f2, 40, 100), f2 = bJ.dj(f2 * di, 100), a6Z[0] = Math.max(f2,
			1)) : a6Z[0] = Math.max(bJ.dj(3 * di, 5), 1), a6Z[1] = Math.max(di - a6Z[0], 1)
	}

	function a6g() {
		a6d = bd.jm(), a5s = !0, a6b = a6X = 0, a6a = [], au.hH = !1, aM.yw(247), a6Y[0] = a6Y[1] = 0, aM.a3D(673)
	}

	function x2() {
		return aQ.a54(aM.a50()) ? __fx.settings.keybindButtons ? aQ.ej - 2 * (j + ba.gap) : aQ.ej - j - ba.gap : bA.a54(aM.a53()) ? bA.x2() - j - ba.gap : h.j - j - bi.a3q() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1j[aA] = b8.canvas.xc(aa.get(3), 8 - aA, b9.no), a1j[aA] = b8.canvas.a1l(a1j[aA])
	}, this.dU = function() {
		a6d = -1e4, a6c = a6f = 0, a6e = -1, this.hH = !1, a5s = a5Q = !1, a6Y = [a6X = a6b = 0, 0], a6Z = [1, 1], a6a = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x6 = canvas.getContext("2d", {
			alpha: !0
		}), lQ()
	}, this.lP = function() {
		a5s && lQ()
	}, this.gn = function(eh, ej) {
		return !!this.hH && !(eh < h.i - this.i - ba.gap || ej < x2() || (aC.gj || this.hI(aC.eK) && (aL.gk && aL.a0z(), b6.gw.hJ(eh > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ij = function() {
		0 < a6c ? 0 === --a6c && a6g() : this.hH ? 180 == --a6b && 3 * a6Y[0] < a6Z[0] ? a6g() : a6Y[0] >= a6Z[0] ? a5Q ? bP.yS.yk() : bP.yS.yo() : a6Y[1] >= a6Z[1] ? a6c = 4 : a6b <= 0 && a6g() : ! function() {
			var a6n = bd.jm();
			if (a6n % 40 == 14) {
				if (a6f) return !(a6n < a6f) && !(a6n < a6d + 535) && (a6f = a6n + 1071, b8.fv.a2J()) ? (a6k(), 1) : 0;
				(1 === ak.jq || (aC.hP ? bf.a2h() : af.gN[l4[0]]) >= bJ.dj(96 * aC.jZ, 100)) && (a6f = a6n + 535)
			}
			return
		}() && 0 <= a6e && (aM.zD(250, L(107, [af.zQ[a6e]]), 673, a6e, b9.mf, b9.mc, -1, !0), a6k())
	}, this.yq = function() {
		this.hH && a6Y[0] < a6Z[0] && a6g()
	}, this.p9 = function(player, a6o) {
		var a6p = L(a6o ? 108 : 109, [af.zQ[player]]),
			a6p = (aM.zD(450, a6p, 257, player, a6o ? b9.mx : b9.nC, b9.mc, -1, !0), a6a.push(player), a5s = !0, aC.k8 ? Math.max(a6Z[0], a6Z[1]) : af.gN[player]),
			a6p = Math.max(a6p, 1);
		a6o ? a6Y[0] += a6p : a6Y[1] += a6p, player === aC.eK && (a6X = a6o ? 1 : -1)
	}, this.tg = function() {
		var ej;
		this.hH && (ej = x2(), th.drawImage(canvas, h.i - this.i - ba.gap, ej))
	}, this.hK = function(player) {
		return !(!aC.k8 && bd.jm() < a6d + 140 || 0 !== a6b || !b8.fv.gl(1) || !b8.fv.gm(player) || 10 <= ja[player] && !b8.fv.a2c(player, 9))
	}, this.hI = function(g7) {
		if (!b8.fv.gl(1)) return !1;
		if (!b8.fv.gm(g7)) return !1;
		if (!this.hH) return !1;
		for (var aA = a6a.length - 1; 0 <= aA; aA--)
			if (a6a[aA] === g7) return !1;
		return !0
	}, this.hG = function(player) {
		a6e = player
	}
}

function cD() {
	var i, eh, a6q, canvas, x6, hH, i9, a34, a4S, a5s, a6r = 11 / 12;

	function a6t() {
		var a5z = Math.floor(i9 * (i - 2 * a6q)),
			a6w = 1 + Math.floor(.0625 * aQ.j),
			a6x = 1 + Math.floor(.3 * aQ.j),
			a6y = Math.floor(.55 * aQ.j);
		x6.clearRect(0, 0, i, aQ.j), x6.fillStyle = b9.mb, x6.fillRect(0, 0, a6q, aQ.j), x6.fillRect(a6q + a5z, 0, i - a6q - a5z, aQ.j), x6.fillStyle = i9 < 1 / 3 ? "rgba(" + Math.floor(3 * i9 * 130) + ",130,0,0.85)" : i9 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (i9 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i9 - 2 / 3) * 130) + ",0.85)", x6.fillRect(a6q, 0, a5z, aQ.j), x6.fillStyle = b9.mf, x6.fillRect(0, 0, i, 1), x6.fillRect(0, aQ.j - 1, i, 1), x6
			.fillRect(0, 0, 1, aQ.j), x6.fillRect(a6q, 0, 1, aQ.j), x6.fillRect(a6q + a5z, 0, 1, aQ.j), x6.fillRect(i - a6q, 0, 1, aQ.j), x6.fillRect(i - 1, 0, 1, aQ.j), x6.fillRect(Math.floor(.25 * aQ.j) + a6x, Math.floor((aQ.j - a6w) / 2), aQ.j -
				2 * a6x, a6w), x6.fillRect(Math.floor(i - 1.25 * aQ.j) + a6x, Math.floor((aQ.j - a6w) / 2), aQ.j - 2 * a6x - a6x % 2, a6w), x6.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6w) / 2), a6x, a6w, aQ.j - 2 * a6x - a6x % 2),
			a34 = b8.fv.i8(aC.eK, aQ.h1()), x6.fillText(b8.zU.y7(a34) + " (" + b8.zU.a2x(100 * i9, +(i9 < .1)) + ")", Math.floor(.5 * i), a6y)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i9 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0v(arg1);

	function a73(a1I) {
		return !(1 < a1I && 1 === i9 || (1 < a1I && a1I * i9 - i9 < 1 / 1024 ? a1I = (i9 + 1 / 1024) / i9 : a1I < 1 && i9 - a1I * i9 < 1 / 1024 && (a1I = (i9 - 1 / 1024) / i9), i9 = bJ.p7(i9 * a1I, 1 / 1024, 1), a6t(), 0))
	}

	function a74(ks) {
		return i9 !== (i9 = bJ.p7((ks - eh - a6q) / (i - 2 * a6q), 1 / 1024, 1)) && (a6t(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a6t(), bd.dc = !0
	}, this.ej = 0, this.go = !1, this.dU = function() {
		hH = !aC.gv && !aC.gj, a5s = !1, i9 = .5, a34 = 0, this.go = !1, this.resize()
	}, this.resize = function() {
		z.a0.qx() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pb), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.qx() ? .65 : .389) * h.pb), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6q = Math.floor(3 * this.j / 2), a4S = b8
			.pZ.rO(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, th), canvas.height = this.j, (x6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4S, b8.pZ.textBaseline(x6, 1), b8.pZ.textAlign(x6, 1), this.a6s(), a6t()
	}, this.a6s = function() {
		eh = z.a0.qx() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.ej = h.j - this.j - bi.a3q() * ba.gap
	}, this.lP = function() {
		a5s && (a5s = !1, a6t())
	}, this.hH = function() {
		return !(!hH || aL.gk && eh < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a54 = function(a6z) {
		return !!this.hH() && eh + i > h.i - a6z - ba.gap
	}, this.a3B = function() {
		hH = !aC.gj
	}, this.a6g = function() {
		hH = !1
	}, this.h1 = function() {
		return bJ.p7(Math.floor(1024 * i9 + .5) - 1, 0, 1023)
	}, this.a0s = function(ks, kt) {
		return this.hH() && eh < ks && ks < eh + i && kt > this.ej
	}, this.gn = function(ks, kt) {
		if (!this.hH()) return !1;
		if (!(__fx.settings.keybindButtons && kt > this.ej - Math.floor(ba.gap / 4) - this.j && kt < this.ej - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(ks - eh))) {
			if (!aQ.a0s(ks, kt)) return !1;
			aR.mA = !1, ! function(rB, ks, kt) {
				if (function(ks, kt) {
						return eh < ks && ks < eh + a6q && kt > aQ.ej
					}(ks, kt)) return a73(a6r);
				if (function(ks, kt) {
						return eh + i - a6q < ks && ks < eh + i && kt > aQ.ej
					}(ks, kt)) return a73(1 / a6r);
				return rB.go = !0, a74(ks)
			}(this, ks, kt) || (bd.dc = !0)
		}
		return !0
	}, this.a0v = function(mH) {
		0 !== aC.yp && this.hH() && a73(mH) && (bd.dc = !0)
	}, this.a0R = function(deltaY) {
		var mH;
		return !(0 === deltaY || !this.hH()) && a73(mH = 0 < deltaY ? (mH = 400 / (400 + deltaY)) < a6r ? a6r : mH : 1 / a6r < (mH = (400 - deltaY) / 400) ? 1 / a6r : mH)
	}, this.a0O = function(ks) {
		return !!this.go && a74(ks)
	}, this.a0o = function() {
		this.go = !1
	}, this.ij = function() {
		this.hH() && a34 !== b8.fv.i8(aC.eK, this.h1()) && (a5s = !0)
	}, this.tg = function() {
		this.hH() && (th.drawImage(canvas, eh, this.ej), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(th, eh, this.ej)
	}
}

function cu() {
	var canvas, x6, a75, font, a76 = 0,
		a77 = !1,
		a78 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a79 = 5;

	function a7F() {
		if (a77) {
			var aA, ea = a78.length,
				a6y = Math.floor(.5 * a75.j),
				j = ea * a6y,
				eh = Math.floor(Math.floor(a75.eh) + .3 * a75.i - .5),
				ej = Math.floor(Math.floor(a75.ej) - j),
				i = Math.floor(.4 * a75.i + 2.5);
			for (th.fillStyle = b9.mb, th.fillRect(eh, ej, i, j), th.fillStyle = b9.n4, th.fillRect(eh, ej + a79 * a6y, i, a6y), th.fillStyle = b9.mf, th.fillRect(eh, ej, 2, j), th.fillRect(eh, ej, i, 2), th.fillRect(eh + i - 2, ej, 2, j), aA =
				1; aA < ea; aA++) th.fillRect(eh, ej + aA * a6y, i, 2);
			for (th.fillStyle = b9.mf, b8.pZ.textAlign(th, 1), b8.pZ.textBaseline(th, 1), th.font = b8.pZ.rO(0, .6 * a6y), eh += .5 * i, aA = 0; aA < ea; aA++) th.fillText(a7N(aA), eh, ej + (aA + .6) * a6y)
		}
		th.drawImage(canvas, Math.floor(a75.eh), Math.floor(a75.ej))
	}

	function lQ(rB) {
		var eh, m5, m6, a6y;
		x6.clearRect(0, 0, Math.floor(a75.i), Math.floor(a75.j)), x6.fillStyle = b9.mb, x6.fillRect(0, 0, Math.floor(a75.i), Math.floor(a75.j)), aC.m8 && (x6.fillStyle = b9.n4, x6.fillRect(0, 0, Math.floor(.3 * a75.i), Math.floor(a75.j))), x6
			.fillStyle = b9.mf, x6.fillText("Hide UI", .15 * a75.i, .5 * a75.j), x6.fillRect(Math.floor(.3 * a75.i - .5), 0, 2, Math.floor(a75.j)), eh = .5 * a75.i, x6.fillText("Replay Speed", eh, .31 * a75.j), x6.fillText(a7N(a79), eh, .69 * a75.j),
			x6.fillRect(Math.floor(.7 * a75.i - .5), 0, 2, Math.floor(a75.j)), rB.a3i ? (eh = Math.floor(.02 * a75.i), rB = Math.floor(.025 * a75.i), m5 = Math.floor(.85 * a75.i - eh - .5 * rB), m6 = Math.floor(.25 * a75.j), a6y = Math.floor(a75.j) -
				2 * m6, x6.fillRect(m5, m6, eh, a6y), x6.fillRect(m5 + eh + rB, m6, eh, a6y)) : function() {
				var i = Math.floor(.46 * a75.j),
					j = Math.floor(.23 * a75.j),
					eh = Math.floor(.85 * a75.i - .5 * i + i / 12),
					ej = Math.floor(.5 * a75.j - j);
				x6.beginPath(), x6.moveTo(eh, ej), x6.lineTo(eh + i, ej + j), x6.lineTo(eh, ej + (j << 1)), x6.fill()
			}(), x6.fillRect(0, 0, Math.floor(a75.i), 2), x6.fillRect(0, 0, 2, Math.floor(a75.j)), x6.fillRect(0, Math.floor(a75.j) - 2, Math.floor(a75.i), 2), x6.fillRect(Math.floor(a75.i - 2), 0, 2, Math.floor(a75.j))
	}

	function a7N(aA) {
		return 5 === aA ? "Normal" : "" + a78[aA]
	}
	this.a3i = !1, this.dU = function() {
		aC.gj && (a79 = 5, this.a3i = !1, a77 = !1, a75 = new qB([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a7A = function() {
		return a78[a79]
	}, this.x2 = function() {
		return a75.ej
	}, this.a54 = function(a6z) {
		return !!aC.gj && a75.eh + a75.i > h.i - a6z - ba.gap
	}, this.resize = function() {
		aC.gj && (a75.resize(), a75.ej -= (bi.a3q() - 1) * ba.gap, font = b8.pZ.rO(0, .3 * a75.j), (canvas = document.createElement("canvas")).width = Math.floor(a75.i), canvas.height = Math.floor(a75.j), (x6 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pZ.textAlign(x6, 1), b8.pZ.textBaseline(x6, 1), lQ(this))
	}, this.a0y = function(a7B) {
		0 === aC.yp || s.hH() || a7B !== aC.m8 && (aC.m8 = a7B, bf.resize(), bd.dc = !0, aC.gj) && (a76 = bd.e9 + 2e3, lQ(this))
	}, this.gn = function(eh, ej) {
		if (!aC.gj) return !1;
		if (eh < a75.eh || ej < a75.ej || eh > a75.eh + a75.i) return a77 && function(rB, eh, ej) {
			var ea = a78.length,
				a6y = Math.floor(.5 * a75.j),
				j = ea * a6y,
				m5 = Math.floor(Math.floor(a75.eh) + .3 * a75.i - .5),
				j = Math.floor(Math.floor(a75.ej) - j),
				i = Math.floor(.4 * a75.i + 2.5);
			return a77 = !1, bd.dc = !0, eh < m5 || m5 + i < eh || ej < j || (a79 = a7E(0, Math.floor((ej - j) / a6y), ea - 1), lQ(rB)), !0
		}(this, eh, ej);
		if ((eh -= a75.eh) < .3 * a75.i) a77 = !1, this.a0y(!aC.m8);
		else {
			if (eh < .7 * a75.i) return a77 = !a77, bd.dc = !0;
			this.a10(!1)
		}
		return !0
	}, this.a10 = function(a7D) {
		2 === aC.yp ? (this.a0y(!1), s.t(3)) : (a77 = !1, this.a3i = !this.a3i, this.a3i ? (aL.gk && aL.a0z(), z.a0.setState(1)) : a7D || aL.a4Y(), bd.dc = !0, lQ(this))
	}, this.a11 = function() {
		this.a3i = !1, aL.a4Y(), bd.dc = !0, lQ(this)
	}, this.a0h = function(eh, ej) {
		return !!aC.m8 && (0 <= aL.gn(eh, ej) || (aC.gj ? ((bd.e9 > a76 || !this.gn(eh, ej)) && aR.gn(eh, ej), bd.dc = !0, a76 = bd.e9 + 2e3) : aR.gn(eh, ej)), !0)
	}, this.ij = function() {
		aC.gj && aC.m8 && bd.e9 > a76 - 1e3 && bd.e9 < a76 && (bd.dc = !0)
	}, this.yx = function() {
		aC.gj && (this.a3i = !1, bd.dc = !0, lQ(this))
	}, this.tg = function() {
		if (aC.gj) {
			if (aC.m8) {
				if (bd.e9 > a76) return;
				if (bd.e9 > a76 - 1e3) return th.globalAlpha = a7E(0, (1e3 - (bd.e9 - (a76 - 1e3))) / 1e3, 1), a7F(), void(th.globalAlpha = 1)
			}
			a7F()
		}
	}
}

function cE() {
	var a7O, a7P, i, eh, ej, a7Q, a7R;
	this.dU = function() {
		a7O = new Array(2), a7P = new Array(2), this.mA = !1, a7R = a7Q = iC = iA = 0, iB = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.qx() ? .072 : .0502) * h.pb)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7O[aA] = document.createElement("canvas"), a7O[aA].width = i, a7O[aA].height = i, a7P[aA] = a7O[aA].getContext("2d", {
			alpha: !0
		});
		this.a6s(),
			function() {
				for (var a7g = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7P[aA].clearRect(0, 0, i, i), a7P[aA].fillStyle = b9.mY, a7P[aA].beginPath(), a7P[aA].arc(i / 2, i / 2, i / 2 - a7g, 0, 2 * Math.PI), a7P[aA].fill(), a7P[aA]
					.lineWidth = a7g, a7P[aA].fillStyle = b9.mf, a7P[aA].strokeStyle = b9.mf, a7P[aA].beginPath(), a7P[aA].arc(i / 2, i / 2, i / 2 - a7g, 0, 2 * Math.PI), a7P[aA].stroke(), x9(a7P[aA], 0, 0, i, a7g, .3, 0 === aA)
			}()
	}, this.x1 = function() {
		return -iA / iB
	}, this.x2 = function() {
		return -iC / iB
	}, this.mK = function(a7V, hs) {
		iA = iB * a7V - hs
	}, this.mL = function(a7W, ht) {
		iC = iB * a7W - ht
	}, this.gn = function(a7U, a55) {
		return aC.m8 || ! function(a7U, a55) {
			return Math.pow(a7U - (eh + i / 2), 2) + Math.pow(a55 - (ej + i / 2), 2) < i * i / 4 || Math.pow(a7U - (eh + i / 2), 2) + Math.pow(a55 - (ej + 2 * i), 2) < i * i / 4
		}(a7U, a55) || bh.e7.data[8].value ? (aG.mN() && (this.mA = !0, a7Q = a7U, a7R = a55), !1) : a55 < ej + 1.25 * i ? this.a0R(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0R(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0O = function(a7U, a55) {
		var a7X, a7Y, hv, hy;
		return !aG.mN() || (a7X = iA, a7Y = iC, iA += hv = a7Q - a7U, iC += hy = a7R - a55, ae.a0O(hv, hy), this.a7Z(), a7Q = a7U, a7R = a55, a7X !== iA) || a7Y !== iC
	}, this.a0R = function(ks, kt, deltaY) {
		var mH;
		if (aG.mN()) {
			if (0 < deltaY) mH = (mH = 500 / (500 + deltaY)) < .5 ? .5 : mH;
			else {
				if (!(deltaY < 0)) return !1;
				mH = 2 < (mH = (500 - deltaY) / 500) ? 2 : mH
			}
			this.a7a(ks, kt, mH), bd.dc = !0
		}
		return !0
	}, this.a7a = function(eh, ej, eE) {
		var a1I;
		eE = a1I = (a1I = 1024 < (a1I = eE) * iB ? 1024 / iB : a1I) * iB < .125 ? .125 / iB : a1I, ae.zoom(eE, eh, ej),
			function(a1I, ks, kt) {
				iB *= a1I, iA = (iA + ks) * a1I - ks, iC = (iC + kt) * a1I - kt, aR.a7Z()
			}(eE, eh, ej)
	}, this.a7Z = function() {
		var a7d = h.i / 16,
			hd = 0,
			a7e = h.j / 16,
			he = 0;
		iA < -h.i + a7d && (hd = -h.i + a7d - iA), iA > iB * bQ.el - a7d && (hd = iB * bQ.el - a7d - iA), iC < -h.j + a7e && (he = -h.j + a7e - iC), iC > iB * bQ.em - a7e && (he = iB * bQ.em - a7e - iC), iA += hd, iC += he, bY.mM(), ae.a7f(hd,
			he)
	}, this.a6s = function() {
		eh = h.i - i - ba.gap, ej = Math.floor(h.j / 2 - 1.25 * i)
	}, this.tg = function() {
		bh.e7.data[8].value || (th.drawImage(a7O[0], eh, ej), th.drawImage(a7O[1], eh, Math.floor(ej + 3 * i / 2)))
	}
}

function cF() {
	var g, a7h, a7i, a7j, gap, a7k, a7l, a7m, a7n, a7o, a4S, a7p, ge, a7q, a5z, a7r, a7s, a7t;

	function a7x() {
		a7j = Math.floor(.2 * (z.a0.qx() ? .07 : .035) * h.pb), a7j = a52(z.a0.qx() ? 3 : 1, a7j);
		var a80 = h.i / (g.length + gap);
		a7j = a7j < a80 ? a80 : a7j, a5z = Math.floor((1 - gap) * a7j), a7h = 0, a81()
	}

	function a81() {
		a7h = (a7h = a7h < -20 ? -20 : a7h) > (g.length - 15) * a7j ? (g.length - 15) * a7j : a7h, a7l = Math.floor(a7h / a7j), a7m = (a7m = a7l + Math.floor(h.i / a7j)) > g.length - 1 ? g.length - 1 : a7m, a7l = (a7l = a7m < a7l ? a7m : a7l) < 0 ?
			0 : a7l;
		var kX = a7m;
		a7k = a7i / g[kX];
		for (var aA = a7m - 1; a7l <= aA; aA--) g[aA] > g[kX] && (kX = aA, a7k = a7i / Math.pow(g[aA], a7q))
	}

	function a84(eh) {
		eh = Math.floor((a7h + h.i - eh - gap * a7j) / a7j);
		return (eh = eh < -1 ? -1 : -1 === eh ? 0 : eh > g.length - 1 ? -1 : eh) !== a7n && (a7n = eh, -1 === a7r && 0 === a7n && aS.a7u && (a7r = setInterval(a85, 100)), 1)
	}

	function a86(aA) {
		var a5p = Math.floor(a7k * Math.pow(g[aA], a7q));
		th.fillRect(a7h + h.i - (aA + 1) * a7j, h.j - a5p, a5z, a5p)
	}

	function a85() {
		var g7;
		0 !== (a7n = 8 === aZ.a02() ? -1 : a7n) ? (a7s = (new Date).getTime(), clearInterval(a7r), a7r = -1) : (g7 = g[1] / 864e3, -1 !== a7s && (g7 += ((new Date).getTime() - a7s) * g[1] / 864e5, a7s = -1), 0 < g7 && (g[0] += Math.floor(g7), bd
			.dc = !0))
	}
	this.a7u = !1, this.dU = function() {
		a7s = a7r = -1, a7n = -(a7q = 1), this.a7v = !1, ge = 0, a7p = new Date, a7h = 0, gap = .3, (a7t = []).push({
			g2: "Plateau A",
			ea: 0,
			e: 57
		}), a7t.push({
			g2: "Max A",
			ea: 1,
			e: 1
		}), a7t.push({
			g2: "Black Friday",
			ea: 15,
			e: 15
		}), a7t.push({
			g2: "Max B",
			ea: 19,
			e: 19
		}), a7t.push({
			g2: "Max C",
			ea: 44,
			e: 44
		}), a7t.push({
			g2: "First Android Version",
			ea: 58,
			e: 58
		}), a7t.push({
			g2: "Max D",
			ea: 67,
			e: 67
		}), a7t.push({
			g2: "The iFrame Explosion",
			ea: 98,
			e: 99
		}), a7t.push({
			g2: "The 155-Day Uptrend",
			ea: 58,
			e: 213
		}), a7t.push({
			g2: "Max E",
			ea: 213,
			e: 213
		}), a7t.push({
			g2: "Plateau B",
			ea: 214,
			e: 259
		}), a7t.push({
			g2: "Turbulent Times",
			ea: 260,
			e: 344
		}), a7t.push({
			g2: "Max F",
			ea: 262,
			e: 262
		}), a7t.push({
			g2: "Max G",
			ea: 282,
			e: 282
		}), a7t.push({
			g2: "Max H",
			ea: 333,
			e: 333
		}), a7t.push({
			g2: "The 19-Day Downtrend",
			ea: 283,
			e: 301
		}), a7t.push({
			g2: "Plateau C",
			ea: 345,
			e: 385
		}), a7t.push({
			g2: "The Alliance Ascent",
			ea: 386,
			e: 395
		}), a7t.push({
			g2: "Max I",
			ea: 395,
			e: 395
		}), a7t.push({
			g2: "First iOS Version",
			ea: 411,
			e: 411
		}), a7t.push({
			g2: "Plateau D",
			ea: 396,
			e: 453
		}), a7t.push({
			g2: "The TikTok Revolution",
			ea: 454,
			e: 470
		}), a7t.push({
			g2: "Max J",
			ea: 456,
			e: 456
		}), a7t.push({
			g2: "Max K",
			ea: 472,
			e: 472
		}), a7t.push({
			g2: "Max L",
			ea: 478,
			e: 478
		}), a7t.push({
			g2: "YT Drew",
			ea: 471,
			e: 485
		}), a7t.push({
			g2: "Plateau E",
			ea: 485,
			e: 600
		}), a7t.push({
			g2: "Uptrend A",
			ea: 600,
			e: 613
		}), a7t.push({
			g2: "Max M",
			ea: 613,
			e: 613
		}), a7t.push({
			g2: "Downtrend A",
			ea: 614,
			e: 635
		}), a7t.push({
			g2: "Plateau F",
			ea: 636,
			e: 737
		}), a7t.push({
			g2: "End of Record",
			ea: 738,
			e: 738
		}), g = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
			268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535,
			228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444,
			195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919,
			202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004,
			178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937,
			161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946,
			243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019,
			49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426,
			19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047,
			18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741,
			26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011,
			15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393,
			12931e3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834,
			20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238,
			18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206,
			15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460,
			8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791,
			8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076,
			9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540,
			6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544,
			3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700,
			991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472,
			252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048,
			51372, 61916, 43236, 55172, 26776, 47e3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444,
			19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992,
			20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176
		], this.resize()
	}, this.resize = function() {
		a7i = Math.floor(.15 * h.j), a7o = (a7o = Math.floor((z.a0.qx() ? .018 : .0137) * h.pb)) < 2 ? 2 : a7o, a4S = b8.pZ.rO(1, a7o), a7x()
	}, this.a7y = function(a7z) {
		var aA;
		for (this.a7u = !0, aA = 0; aA < a7z.length; aA++) g.unshift(a7z[aA]);
		a7x(), bd.dc = !0
	}, this.a82 = function() {
		a81()
	}, this.a0O = function(eh, ej) {
		ej > h.j - .6 * a7i ? this.a7v ? eh !== ge && (a7h += eh - ge, ge = eh, a81(), a84(eh), this.a7v = -1 !== a7n, bd.dc = !0) : a84(eh) && (bd.dc = !0) : this.qZ()
	}, this.qZ = function() {
		-1 !== a7n && (this.a7v = !1, a7n = -1, bd.dc = !0)
	}, this.a0R = function(eh, deltaY) {
		-1 !== a7n && (a7h += Math.floor(deltaY), a81(), a84(eh), bd.dc = !0)
	}, this.gn = function(eh, ej) {
		this.a0O(eh, ej), -1 !== a7n && (ge = eh, this.a7v = !0)
	}, this.a0n = function() {
		-1 !== a7n && (this.a7v = !1)
	}, this.tg = function() {
		th.fillStyle = b9.mi;
		for (var a88, month, di, rw, a8B, a8C, m6, a8D, a8E, aA = a7m; a7l <= aA; aA--) a86(aA);
		this.a7u && 0 === a7l && (th.fillStyle = b9.nF, a86(0)), -1 !== a7n && (th.fillStyle = b9.mh, a86(a7n)), -1 !== a7n && (th.font = a4S, b8.pZ.textBaseline(th, 2), (di = new Date).setTime(a7p.getTime() - 1e3 * a7n * 60 * 60 * 24), month =
			"month", a88 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(di), a88 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(di)), a88 = a88 + ", " + di.getUTCDate() + " " + month + " " + di.getFullYear(), month = 1 === g[a7n] ? L(110) : L(111), month = b8.zU.y7(g[a7n]) + " " + month, di = Math.floor(th.measureText(a88).width), rw = Math
			.floor(th.measureText(month).width), a8B = Math.floor(.5 * (di + a7o)), a8C = (a8C = a7h + h.i - (a7n + 1) * a7j) < a8B ? a8B : a8C > h.i - a8B ? h.i - a8B : a8C, m6 = h.j - Math.floor(a7k * Math.pow(g[a7n], a7q)), a8D = Math
			.floor(1.1 * a7o), a8E = m6 > h.j - a8D ? h.j - a8D : m6, th.fillStyle = b9.mc, th.fillRect(h.i - rw - a7o, a8E - a8D, rw + a7o, a8D), th.fillRect(a8C - a8B, h.j - a8D, di + a7o, a8D), th.fillStyle = b9.mf, b8.pZ.textAlign(th, 2),
			th.fillText(month, Math.floor(h.i - .5 * a7o), a8E),
			function(m6, a8D) {
				for (var rv, kZ = -1, dx = g.length - a7n - 1, aA = a7t.length - 1; 0 <= aA; aA--) dx >= a7t[aA].ea && dx <= a7t[aA].e && (-1 === kZ || a7t[aA].e - a7t[aA].ea < a7t[kZ].e - a7t[kZ].ea) && (kZ = aA); - 1 !== kZ && (rv = Math
					.floor(th.measureText(a7t[kZ].g2).width), th.fillStyle = b9.mc, th.fillRect(h.i - rv - a7o, m6, rv + a7o, a8D), th.fillStyle = b9.mf, th.fillText(a7t[kZ].g2, Math.floor(h.i - .5 * a7o), m6 + a8D))
			}(a8E - 2 * a8D, a8D), b8.pZ.textAlign(th, 1), th.fillText(a88, a8C, h.j), th.strokeStyle = b9.mj, th.lineWidth = 1, th.beginPath(), th.moveTo(0, m6), th.lineTo(h.i, m6), th.closePath(), th.stroke())
	}
}

function cG() {
	var a4S, i, ej, a8G, a8H, canvas, x6, a5s, a2P, a8I, a8J, a8K, a8L;
	this.eh = 0, this.j = 0, this.dU = function() {
		a8H = aC.a3J, a8J = "rgba(0,100,0,0.8)", a8K = "rgba(150,0,0,0.8)", a5s = a8I = !0, a2P = af.gb[aC.eK], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qx() ? .305 : .24) * h.pb), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4S = b8.pZ.rO(1, Math.floor(.8 * this.j)), a8L = Math.floor(.5 * this.j), bQ.vQ.font = a4S, ej = ba.gap, a8G = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x6 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4S, b8.pZ.textBaseline(x6, 1), b8.pZ.textAlign(x6, 1), this.a8M()
	}, this.a6F = function() {
		return z.a0.qx() && h.i < 1.2 * h.j
	}, this.a6s = function() {
		this.a6F() ? this.eh = h.i - i - ba.gap : this.eh = Math.floor(aU.a8N() + (h.i - aU.a8N() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lP = function() {
		a5s && (a5s = !1, this.a8M())
	}, this.a8M = function() {
		x6.clearRect(0, 0, i, this.j), x6.fillStyle = a8I ? a8J : a8K, x6.fillRect(0, 0, i, this.j), x6.fillStyle = b9.mh, this.a8O(), this.a8P(), x6.fillStyle = af.gb[aC.eK] >= ad.jV(aC.eK) ? b9.nC : b9.mf, x6.fillText(b8.zU.y7(a2P), Math.floor(
			i / 2), a8L), x6.fillStyle = b9.mf, x6.fillRect(0, 0, i, 1), x6.fillRect(0, 0, 1, this.j), x6.fillRect(0, this.j - 1, i, 1), x6.fillRect(i - 1, 0, 1, this.j)
	}, this.a8O = function() {
		var ev = bd.jm() % 100,
			ev = (ev = 9 - bJ.dj(ev -= ev % 10, 10), Math.floor(ev * (this.j - a8G) / 9));
		x6.fillRect(0, ev, a8G, this.j - ev), x6.fillRect(i - a8G, ev, a8G, this.j - ev)
	}, this.a8P = function() {
		x6.fillRect(a8G, this.j - a8G, Math.floor((i - 2 * a8G) * af.gb[aC.eK] / a8H), a8G)
	}, this.ij = function() {
		var g7 = aC.eK;
		b8.fv.gm(g7) && (g7 = af.gb[g7] - af.a2O[g7], a2P !== g7 ? (a8H = a52(g7, a8H), a8I = a2P < g7 && 10 <= g7, a2P = g7, a5s = !0) : bd.jm() % 10 == 9 && (a5s = !0))
	}, this.tg = function() {
		0 === af.ld[aC.eK] || aC.gv || 2 === af.a2G[aC.eK] || th.drawImage(canvas, this.eh, ej)
	}
}

function cH() {
	var a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8g, a8h, a8i, a8j, a8k, a8l, position, a8m, a8n, a8o, a8p, a8q = 1,
		a8r = 1,
		a8s = "";
	var leaderboardHasChanged = true;
	this.playerPos = aC.eK;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => ja[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(ja[aC.eK]);
	}

	function a8u() {
		a8W.clearRect(0, 0, a8Q, a6V),
			a8W.fillStyle = b9.nV,
			a8W.fillRect(0, 0, a8Q, a8b),
			a8W.fillStyle = b9.mb,
			a8W.fillRect(0, a8b, a8Q, a6V - a8b);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			ja[aC.eK]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8l = -1;
		if (__fx.leaderboardFilter.enabled && a8l >= __fx.leaderboardFilter.filteredLeaderboard.length) a8l = -1;
		playerPos >= position && a8w(playerPos - position, b9.n4),
			0 !== ja[aC.eK] && 0 === position && a8w(0, b9.na),
			-1 !== a8l && a8w(a8l, b9.mg),
			a8W.fillStyle = b9.mb,
			//console.log("drawing", a8l),
			a8W.clearRect(0, a6V - __fx.leaderboardFilter.tabBarOffset, a8Q, __fx.leaderboardFilter.tabBarOffset);
		a8W.fillRect(0, a6V - __fx.leaderboardFilter.tabBarOffset, a8Q, __fx.leaderboardFilter.tabBarOffset);
		a8W.fillStyle = b9.mf,
			a8W.fillRect(0, a8b, a8Q, 1),
			a8W.fillRect(0, a6V - __fx.leaderboardFilter.tabBarOffset, a8Q, 1),
			__fx.leaderboardFilter.drawTabs(a8W, a8Q, a6V - __fx.leaderboardFilter.tabBarOffset, b9.n4),
			a8W.fillRect(0, 0, a8Q, ba.xq),
			a8W.fillRect(0, 0, ba.xq, a6V),
			a8W.fillRect(a8Q - ba.xq, 0, ba.xq, a6V),
			a8W.fillRect(0, a6V - ba.xq, a8Q, ba.xq), a8W.font = a8R, b8.pZ.textBaseline(a8W, 1), b8.pZ.textAlign(a8W, 1), a8W.fillText(a8s, Math.floor((a8Q + a8b - 22) / 2), Math.floor(a8Z + a8S / 2));
		__fx.playerList.drawButton(a8W, 12, 12, a8b - 22);
		var et, g8 = playerPos < position + a8U - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8U)
				position = (result.length > a8U ? result.length : a8U) - a8U;
			//if (position >= result.length) position = result.length - 1;
			for (a8W.font = a8T, b8.pZ.textAlign(a8W, 0), et = a8U - g8; 0 <= et; et--) {
				const pos = result[et + position];
				if (pos !== undefined)
					a8x(l4[pos]), a8y(et, pos, l4[pos]);
			}
			for (b8.pZ.textAlign(a8W, 2), et = a8U - g8; 0 <= et; et--) {
				const pos = result[et + position];
				if (pos !== undefined)
					a8x(l4[pos]), a8z(et, l4[pos]);
			}
		} else {
			for (a8W.font = a8T, b8.pZ.textAlign(a8W, 0), et = a8U - g8; 0 <= et; et--)
				a8x(l4[et + position]), a8y(et, et + position, l4[et + position]);
			for (b8.pZ.textAlign(a8W, 2), et = a8U - g8; 0 <= et; et--)
				a8x(l4[et + position]), a8z(et, l4[et + position]);
		}
		2 == g8 && (a8x(aC.eK), b8.pZ.textAlign(a8W, 0), a8y(a8U - 1, ja[aC.eK], aC.eK), b8.pZ.textAlign(a8W, 2), a8z(a8U - 1, aC.eK)), 0 === position && (g8 = .7 * a8c / aa.get(4).height, a8W.setTransform(g8, 0, 0, g8, Math.floor(a8d + .58 * a8c +
			.5 * g8 * aa.get(4).width), Math.floor(a8Z + a8S + .4 * a8c)), a8W.imageSmoothingEnabled = !0, a8W.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8W.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8x(player) {
		aC.hP && (a8W.fillStyle = be.a91[be.a92[player]])
	}

	function a8w(aA, a93) {
		a8W.fillStyle = a93, aA = a8U - 1 < aA ? a8U - 1 : aA;
		a93 = Math.floor((aA === a8U - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8c), a93 = aA === a8U - 2 ? Math.floor(a8b + 9.15 * a8c) - Math.floor(a8b + 8.15 * a8c) : a93;
		a8W.fillRect(0, Math.floor(a8b + (aA + (0 === aA ? 0 : .15)) * a8c), a8Q, a93)
	}

	function a8y(a95, a2e, aA) {
		a8W.fillText(a8h[a2e], a8d, Math.floor(a8Z + a8S + (a95 + .5) * a8c)), 1 === af.a2G[aA] && (a8W.font = "italic " + a8T);
		a2e = Math.floor(a8Z + a8S + (a95 + .5) * a8c);
		a8W.fillText(af.zQ[aA], a8e, a2e), 0 !== af.a2G[aA] && (a8W.font = a8T), aA < aC.jp && 2 !== af.a2G[aA] || a8W.fillRect(a8e, a2e + .35 * a8q, a8g[aA], Math.max(1, .1 * a8q))
	}

	function a8z(a95, aA) {
		a8W.fillText(af.gN[aA], a8f, Math.floor(a8Z + a8S + (a95 + .5) * a8c))
	}

	function a9E(ej) {
		return (ej -= ba.gap + a8b) < 0 ? Math.floor(ej / a8c) - 1 : ej < (a8U - 1) * a8c ? Math.floor(ej / a8c) : ej < a6V - a8b ? a8U - 1 : (ej -= a6V - a8b, a8U + Math.floor(ej / a8c))
	}

	function xp(eh, ej) {
		return eh >= ba.gap && eh < ba.gap + a8Q && ej >= ba.gap && ej < ba.gap + a6V
	}
	this.dU = function() {
			var aA;
			for (a8n = !1, a8p = a8o = a8m = 0, a8l = -1, a8U = z.a0.qx() ? 6 : 10, a8r = (position = 0) === (a8r = bh.e7.data[11].value) ? 10 : 1 === a8r ? 5 : 1, a8k = !1, a8i = new Uint16Array(a8U + 1), a8j = new Uint32Array(a8U + 1), a8Y = aC.eX,
				l4 = new Uint16Array(a8Y), ja = new Uint16Array(a8Y), aA = a8Y - 1; 0 <= aA; aA--) l4[aA] = aA, ja[aA] = aA;
			this.resize(!0), a8g = new Uint16Array(aC.eX);
			var a8t = Math.floor(a8Q - a8e - a8d - a8X);
			for (a8h = new Array(aC.eX), a8W.font = a8T, aA = aC.eX - 1; 0 <= aA; aA--) a8h[aA] = aA + 1 + ".", af.zQ[aA] = b8.x6.a1v(af.zW[aA], a8T, a8t), a8g[aA] = Math.floor(a8W.measureText(af.zQ[aA]).width);
			a8u()
		}, this.resize = function(dU) {
			if (a6V = z.a0.qx() ? (a8Q = Math.floor(.335 * h.pb), Math.floor(a8U * a8Q / 8)) : (a8Q = Math.floor(.27 * h.pb), Math.floor(a8U * a8Q / 10)), a8Q = Math.floor(.97 * a8Q), (a8V = document.createElement("canvas")).width = a8Q, a8V.height =
				a6V, a8W = a8V.getContext("2d", {
					alpha: !0
				}), a8Z = .025 * a8Q, a8S = .16 * a8Q, a8a = 0 * a8Q, a8b = Math.floor(.45 * a8Z + a8S), a8c = (a6V - a8S - 2 * a8Z - a8a) / a8U,
				a8V.height = a6V += a8c, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8c * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6V - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8Q,
				a8R = b8.pZ.rO(1, Math.floor(.55 * a8S)), a8q = Math.floor((z.a0.qx() ? .67 : .72) * a8c), a8T = b8.pZ.rO(0, a8q), a8W.font = a8T, a8d = Math.floor(.04 * a8Q), a8e = Math.floor((z.a0.qx() ? .195 : .18) * a8Q), a8X = Math.floor(a8W
					.measureText("00920600").width), a8W.font = a8R, a8f = a8Q - a8d, !dU) {
				a8W.font = a8T;
				for (var aA = aC.eX - 1; 0 <= aA; aA--) a8g[aA] = Math.floor(a8W.measureText(af.zQ[aA]).width);
				a8u()
			}
			a8s = b8.x6.a1v(L(112), a8R, .96 * a8Q)
		}, this.a8N = function() {
			return a8Q
		}, this.lP = function(bp, a8v) {
			(a8v || a8k && (bp || bd.jm() % a8r == 0)) && (a8k = !1, a8u())
		}, this.ij = function() {
			! function() {
				for (var et = a8Y - 1; 0 <= et; et--) 0 === af.ld[l4[et]] && ! function(et) {
					var a9C = l4[et];
					a8Y--;
					for (var aA = et; aA < a8Y; aA++) l4[aA] = l4[aA + 1], ja[l4[aA]] = aA;
					l4[a8Y] = a9C, ja[l4[a8Y]] = a8Y
				}(et)
			}();
			for (var a9A, mN = a8Y - 1, et = 0; et < mN; et++) af.gN[l4[et]] < af.gN[l4[et + 1]] && (a9A = l4[et], l4[et] = l4[et + 1], l4[et + 1] = a9A, ja[l4[et]] = et, ja[l4[et + 1]] = et + 1);
			! function() {
				for (var di = a8k, g8 = (a8k = !0, ja[aC.eK] >= a8U - 1 ? a8U - 2 : a8U - 1), aA = g8; 0 <= aA; aA--)
					if (a8i[aA] !== l4[aA] || a8j[aA] !== af.gN[l4[aA]]) return;
				(g8 != a8U - 2 || a8i[a8U] === ja[aC.eK] && a8j[a8U] === af.gN[aC.eK]) && (a8k = di)
			}();
			for (var aA = a8U - 1; 0 <= aA; aA--) a8i[aA] = l4[aA], a8j[aA] = af.gN[l4[aA]];
			a8i[a8U] = ja[aC.eK], a8j[a8U] = af.gN[aC.eK];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gn = function(eh, ej) {
			return !!xp(eh, ej) && ((__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8b - 22, a8b - 22) && __fx.playerList.display(af.zW), true) &&
				!(ej - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eh - ba.gap)) && (a8m = bd.e9, a8n = !0, a8o = a8p = a9E(ej), bH.a12() && (eh = a7E(-1, a8p, a8U), a8l !== (eh = eh === a8U ?
					-1 : eh)) && (a8l = eh, a8u(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8u(), bd.dc = !0;
		},
		this.a0O = function(eh, ej) {
			if (__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8b - 22, a8b - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8u(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8u(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eh, ej, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eh - ba.gap
				)) return;
			var di, a9D = a9E(ej);
			return a8n ? (di = position, (position = a7E(0, position += a8o - a9D, aC.eX - a8U)) !== di && (a9D = (a9D = a7E(-1, a8o = a9D, a8U)) !== a8U && xp(eh, ej) ? a9D : -1, a8l = a9D, a8u(), bd.dc = !0), !0) : (a9D = (a9D = a7E(-1, a9D,
				a8U)) === a8U || !xp(eh, ej) || bH.a12() ? -1 : a9D, a8l !== a9D && (a8l = a9D, a8u(), bd.dc = !0))
		}, this.a0n = function(eh, ej) {
			if (!a8n) return !1;
			a8n = !1;
			var a9D = a9E(ej);
			var isEmptySpace = false;
			return bH.a12() && -1 !== a8l && (a8l = -1, a8u(), bd.dc = !0), bd.e9 - a8m < 350 && a8p === a9D && -1 !== (a9D = (a9D = a7E(-1, a9D, a8U)) !== a8U && xp(eh, ej) ? a9D : -1) && (eh = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l4[__fx.leaderboardFilter.filteredLeaderboard[a9D + position] ?? (isEmptySpace = true, ja[aC.eK])]) : l4[a9D + position]), a9D === a8U - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : ja[aC.eK]) >=
				position + a8U - 1 && (eh = aC.eK), !isEmptySpace && aC.hP && __fx.donationsTracker.displayHistory(eh, af.zW, aC.k8), 0 !== af.ld[eh] && !isEmptySpace) && aG.lz(eh, 800, !1, 0), !0
		}, this.a0R = function(eh, ej, deltaY) {
			var a9F;
			return !(a8n || aC.m8 || (a9F = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xp(eh, ej)) || (eh = (eh = a7E(-1, a9E(ej), a8U)) === a8U || bH.a12() ? -1 : eh, 0 < deltaY ? position < aC.eX - a8U && (position += Math.min(aC.eX - a8U -
				position, a9F), a8l = eh, a8u(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a9F), a8l = eh, a8u(), bd.dc = !0), 0))
		}, this.tg = function() {
			th.drawImage(a8V, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, x6, eh, ej, a5p, a9G, gap, a9H, fontSize, a9I, a9J, a9K, a9L, a9M, a9N, a9O, a9P, a9Q;

	function a9U() {
		x6.clearRect(0, 0, aV.i, aV.j), x6.fillStyle = b9.mc, x6.fillRect(0, 0, aV.i, aV.j), x6.fillStyle = b9.mz, eE = 0 < a9O ? a9O : Math.sqrt(a9L[4] / 1e4), x6.fillRect(0, aV.j - a5p - 1, Math.floor(eE * aV.i), a5p), x6.fillStyle = b9.mf, x6
			.fillRect(0, 0, aV.i, 1), x6.fillRect(0, 0, 1, aV.j), x6.fillRect(aV.i - 1, 0, 1, aV.j), x6.fillRect(0, aV.j - 1, aV.i, 1), x6.fillRect(0, aV.j - a5p - 1, aV.i, 1);
		for (var eE, a9W, di = 0, aA = 0; aA < a9K.length; aA++) a9M[aA] ? (b8.pZ.textAlign(x6, 0), a9W = Math.floor((a9G - a5p + 2 * a9H) * (aA - di + 1) / (a9K.length + 1) - .7 * a9H), x6.fillText(a9K[aA], gap, a9W), b8.pZ.textAlign(x6, 2), 5 ===
			aA && 0 !== af.ld[aC.eK] && af.gb[aC.eK] >= ad.jV(aC.eK) ? (x6.fillStyle = b9.nY, x6.fillText(a9S(aA), aV.i - gap, a9W), x6.fillStyle = b9.mf) : x6.fillText(a9S(aA), aV.i - gap, a9W)) : di++
	}

	function a9S(aA) {
		return aA < 3 ? a9L[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zU.a2x(a9L[aA] / 100, 2) : aA < 7 ? b8.zU.y7(a9L[aA]) : aA === 7 ? aV.a9X(a9L[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gN, aC.eK) : __fx.utils.getDensity(aC.eK)
	}

	function a9R() {
		af.gN[aC.eK] !== a9L[6] && (a9L[6] = af.gN[aC.eK], a9I++)
	}
	this.dU = function() {
		a9O = a9P = 0, (a9J = new Array(8))[0] = L(113), a9J[1] = aC.k8 ? L(114) : L(115), a9J[2] = L(116), a9J[3] = L(117), a9J[4] = L(118), a9J[5] = L(119, 0, "Interest"), a9J[6] = L(120), a9J[7] = L(121),
			a9J.push("Max Troops", "Density"), // add a9J
			(a9K = new Array(a9J.length)).fill(""), (a9L = new Array(a9J.length))[0] = aC.k8 ? 0 : aC.jp, a9L[1] = aC.k8 ? ak.jq : aC.kA, a9L[2] = aC.yr, a9L[3] = 0, a9L[4] = bJ.dj(1e4 * af.gN[0], Math.max(aC.jZ, 1)), a9L[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dj(700 * aC.data.iIncomeValue, 64) : bJ.dj(700 * aC.data.iIncomeData[aC.eK], 64), a9L[6] = 0, a9R(), a9L[7] = 0, a9N = a9S(6), a9M = new Array(a9J.length);
		for (var aA = a9J.length - 1; 0 <= aA; aA--) a9M[aA] = !0;
		a9Q = 0, a9Q = aC.k8 ? (a9M[0] = !1, a9M[2] = !1, a9M[3] = !1, 3) : (a9M[3] = !1, 1), a9I = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qx() ? .1646 : .126) * 1.25 * h.pb), this.j = Math.floor(1.18 * this.i), a5p = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9H = .04 * this.i, a9G = this.j, this.j -= Math.floor(a9Q * (this.j - 2 *
			a5p) / a9J.length), fontSize = Math.floor(.7 * (a9G - a5p) / a9J.length);
		var a4S = b8.pZ.rO(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4S, i) {
				for (var aA = 0; aA < a9K.length; aA++) a9K[aA] = b8.x6.a1v(a9J[aA], a4S, i)
			}((x6 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4S, .575 * this.i), b8.pZ.textBaseline(x6, 1), x6.lineWidth = 1, this.a3C(), this.a6s(), aT.a6s(), a9U()
	}, this.a6s = function() {
		eh = h.i - this.i - ba.gap
	}, this.a9V = function() {
		ej = ba.gap
	}, this.a3C = function() {
		ej = ba.gap + (aT.a6F() && 0 !== af.ld[aC.eK] && !aC.gv ? aT.j + ba.gap : 0)
	}, this.lP = function(bp) {
		(bp || 100 <= a9I) && (a9I = 0, a9U())
	}, this.a47 = function() {
		return a9L[7]
	}, this.a9X = function(value) {
		var kX = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kX) / 1e3);
		return value < 10 ? kX + ":0" + value : kX + ":" + value
	}, this.ij = function() {
		var a9g, per;
		a9M[0] && aC.ys - aC.yr !== a9L[0] && (a9L[0] = aC.ys - aC.yr, a9I++), ak.jq - a9L[0] !== a9L[1] && (a9L[1] = ak.jq - a9L[0], a9I++), this.lH(), (a9g = ad.a9h(aC.eK)) !== a9L[5] && (a9L[5] = a9g, a9I++), a9R(), a9L[7] += bd.a9i, a9g =
			a9S(7), a9N !== a9g && (a9N = a9g, a9I += 100), a9g = aC.hP ? bf.a2h() : af.gN[l4[0]], per = bJ.dj(1e4 * a9g, Math.max(aC.jZ, 1)), a9L[3] = a9g, a9L[4] !== per && (a9I++, a9L[4] = per), 8 === aC.k6 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.fv.gm(aA)) return bP.yS.yo(), 1;
				return
			}() || a9L[3] < aC.jZ || ! function() {
				for (var aA = ak.jq - 1; 0 <= aA; aA--)
					if (0 < af.g1[ak.jr[aA]].length) return;
				return 1
			}() || bP.yS.yo()
	}, this.lH = function() {
		a9M[2] && aC.yr !== a9L[2] && (a9L[2] = aC.yr, a9I++)
	}, this.a9j = function(aA) {
		var sD, a9k, di;
		return 2 !== aC.yp && (aA % 2 == 1 && (aU.lP(1, 1), bd.dc = !0), aA === aC.a3L ? (a9O = 0, a9U(), !1) : (-1 !== aA || 0 !== a9P) && (a9k = a9O, a9O = aC.gj ? aA / aC.a3L : (di = performance.now(), 0 <= aA && (sD = di - 392 * aA, a9P =
			0 === aA || sD < a9P ? sD : a9P), 1 < (a9O = (di - a9P) / (392 * aC.a3L)) ? 1 : a9O), a9U(), a9O !== a9k))
	}, this.tg = function() {
		th.drawImage(canvas, eh, ej)
	}
}

function cJ() {
	var hH, a9l, i, j, a6y, a9m, a9n, a6G, canvas, lq, a9o;

	function x2() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9o = hH = !1, a6y = .61, a9m = .07, a9n = .09, lq = a6G = j = 0
	}, this.resize = function() {
		var x6, m5, ev, a9t, a9u, a4X;
		hH && (i = a9p(i = z.a0.qx() ? Math.floor(.69 * h.pb) : Math.floor(.5 * h.pb), a52(h.i - 2 * ba.gap, 10)), i = a9p(i, Math.floor(3.57 * a52(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x6 = canvas.getContext("2d", {
				alpha: !0
			}), m5 = Math.floor(1 + j / 40), x6.clearRect(0, 0, i, j), x6.fillStyle = b9.mc, x6.fillRect(m5, m5, i - 2 * m5, j - 2 * m5), x6.lineJoin = "bevel", x6.lineWidth = 2 * m5, x6.strokeStyle = b9.mf, x6.strokeRect(m5, m5, i - 2 * m5,
				j - 2 * m5), x6.imageSmoothingEnabled = !1, ev = aa.get(a9l), a9t = ev.width, a4X = (1 === a9l ? .85 : 21 === a9l ? .666 : .9) * a6y * j / (a9u = ev.height), x6.setTransform(a4X, 0, 0, a4X, Math.floor((i - a4X * a9t) / 2),
				Math.floor((j - a4X * a9u) / 2)), x6.drawImage(ev, 0, 0), x6.setTransform(1, 0, 0, 1, Math.floor(i - a9n * j - a9m * j - m5), Math.floor(m5 + a9m * j)),
			function(x6, ea) {
				x6.lineWidth = Math.floor(1 + j / 80), x6.strokeStyle = b9.mf, x6.beginPath(), x6.moveTo(0, 0), x6.lineTo(ea, ea), x6.moveTo(0, ea), x6.lineTo(ea, 0), x6.stroke()
			}(x6, Math.floor(a9n * j)), x6.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f2, a9r, a6l, a9s) {
		hH || a9s && a9o || (a9l = a6l ? 21 : f2 ? 1 : 2, hH = a9o = !0, this.resize(), aK.qq(), aQ.a6g(), lq = bd.e9, a6G = a9r ? 1 : 0)
	}, this.ij = function() {
		!hH || 1 <= a6G || (a6G = 1 < (a6G += 5e-4 * (bd.e9 - lq)) ? 1 : a6G, lq = bd.e9, bd.dc = !0)
	}, this.gn = function(eh, ej) {
		return !(!hH || a6G <= 0 || (eh -= Math.floor((h.i - i) / 2), ej -= x2(), eh < 0) || ej < 0 || i < eh || j < ej || (i - j / 3 < eh && ej < j / 3 && (hH = !1, bd.dc = !0), 0))
	}, this.tg = function() {
		!hH || a6G <= 0 || (th.globalAlpha = a6G, th.drawImage(canvas, Math.floor((h.i - i) / 2), x2()), th.globalAlpha = 1)
	}
}

function dH() {
	var a9w, a9x = new Uint8Array(5),
		a9y = new Uint8Array(5);
	this.a9z = new aA0, this.dU = function() {
		for (var f2 = bh.e7.data[119].value, aA = 0; aA < a9x.length; aA++) a9x[aA] = (f2 >> 2 * aA) % 4
	}, this.a3W = function() {
		a9w = [L(122), L(123), L(124, [bV.aA1[28]]), L(125, [bV.aA1[26]]), L(126, [bV.aA1[0]])], this.a9z.dU()
	}, this.ij = function() {
		this.a9z.ij()
	}, this.a48 = function(id) {
		1 < id && bH.q2() || ! function(dx) {
			if (3 === a9x[dx] || 1 === a9y[dx]) return;
			if (a9y[dx] = 1, !(Math.random() < .6)) {
				a9x[dx]++;
				for (var f2 = 0, aA = 0; aA < a9x.length; aA++) f2 += a9x[aA] << 2 * aA;
				bh.r1.r2(119, f2)
			}
			return 1
		}(id) || aM.a58(a9w[id])
	}
}

function aA0() {
	var aA3;
	this.dU = function() {
		aA3 = !1
	}, this.ij = function() {
		var g7;
		if (function() {
				if (!aA3) {
					if (bd.jm() % 30 != 9) return;
					if (!b8.fv.kx(90)) return;
					aA3 = !0
				}
				return 1
			}() && (! function() {
				var pR = aM.a5T(956);
				if (pR) {
					if (b8.fv.kb(pR.player)) return 1;
					aM.a4E(956, 0)
				}
				return
			}() && (-1 === (g7 = (aC.hP ? function() {
				var id = bf.l1(),
					ea = ak.jq;
				if (be.kB[id])
					for (var yd = ak.jr, eY = be.eY, aA = 0; aA < ea; aA++) {
						var g7 = yd[aA];
						if (eY[g7] !== id) return g7
					} else if (1 < ea) return l4[ea - 1];
				return -1
			} : function() {
				for (var aAB = ak.jq, kW = ak.jr, aAC = ja, aA = 0; aA < aAB; aA++) {
					var g7 = kW[aA];
					if (0 !== aAC[g7]) return g7
				}
				return -1
			})()) ? ! function() {
				var pR = aM.a5T(957);
				if (pR && pR.a4y) {
					if (ab.eR(pR.a4y.eM << 2)) return 1;
					aM.a4E(957, 0)
				}
				return
			}() : (aM.zD(0, L(127, [af.zQ[g7]]), 956, g7, b9.mf, b9.mc, -1, !0), 0)))) {
			var ea = am.iU.kn;
			if (0 !== ea)
				for (var e7 = am.iU.e7, aA = 0; aA < ea; aA++) {
					var eM = e7[aA];
					if (ab.eR(eM << 2)) return void aM.zD(0, L(128, [bK.ei(eM), bK.ek(eM)]), 957, 0, b9.mf, b9.mc, -1, !0, void 0, {
						et: 1,
						eM: eM
					})
				}
		}
	}
}

function dI() {
	this.aAD = new aAE, this.dU = function() {
		this.aAD.resize()
	}
}

function aAE() {
	this.resize = function() {
		var aA, aAF = document.head.querySelector("style#ss");
		if (aAF)
			for (aA = aAF.sheet.cssRules.length - 1; 0 <= aA; aA--) aAF.sheet.deleteRule(0);
		else(aAF = document.createElement("style")).id = "ss", document.head.appendChild(aAF);
		var a76 = "::-webkit-scrollbar",
			aAG = b8.pZ.pj(ba.rQ),
			hR = b8.pZ.pj(Math.max(b8.pZ.qs(.012), 8));
		try {
			aAF.sheet.insertRule(a76 + "{width:" + hR + ";height:" + hR + ";}", aAF.sheet.cssRules.length), aAF.sheet.insertRule(a76 + "-thumb{background-color:white;}", aAF.sheet.cssRules.length), aAF.sheet.insertRule(a76 +
				"-track{background:" + b9.mb + ";}", aAF.sheet.cssRules.length), aAF.sheet.insertRule(a76 + "-track:horizontal{border-top:" + aAG + " solid white;}", aAF.sheet.cssRules.length), aAF.sheet.insertRule(a76 +
				"-track:vertical{border-left:" + aAG + " solid white;}", aAF.sheet.cssRules.length), aAF.sheet.insertRule(a76 + "-button{display:none;}", aAF.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aAF.sheet.cssRules.length - 1; 0 <= aA; aA--) aAF.sheet.deleteRule(0)
		}
	}
}

function dG() {
	this.aAH = !1, this.mV = !1, this.a3G = !1, this.aAI = [0, 0, 0, 0], this.aAJ = function() {
		var m5, m6, mI, mJ;
		this.a3G = this.a3G || this.mV, (this.mV || this.aAH && this.a3G) && (m5 = bY.aAK[0], m6 = bY.aAK[1], mI = bY.aAK[2], mJ = bY.aAK[3], m5 = m5 < this.aAI[0] ? this.aAI[0] : m5, m6 = m6 < this.aAI[1] ? this.aAI[1] : m6, mI = mI > this.aAI[
				2] ? this.aAI[2] : mI, mJ = mJ > this.aAI[3] ? this.aAI[3] : mJ, this.mV = !1, this.aAH = !1, m5 === this.aAI[0] && m6 === this.aAI[1] && mI === this.aAI[2] && mJ === this.aAI[3] ? this.a3H() : m5 <= mI && m6 <= mJ && a3Y
			.putImageData(a3Z, 0, 0, m5, m6, mI - m5 + 1, mJ - m6 + 1))
	}, this.a3H = function() {
		this.a3G && this.aAI[2] >= this.aAI[0] && this.aAI[3] >= this.aAI[1] && a3Y.putImageData(a3Z, 0, 0, this.aAI[0], this.aAI[1], this.aAI[2] - this.aAI[0] + 1, this.aAI[3] - this.aAI[1] + 1), this.a3G = !1
	}, this.z0 = function() {
		this.aAI[2] >= this.aAI[0] && this.aAI[3] >= this.aAI[1] && a3Y.putImageData(a3Z, 0, 0, this.aAI[0], this.aAI[1], this.aAI[2] - this.aAI[0] + 1, this.aAI[3] - this.aAI[1] + 1), this.a3G = !1
	}, this.dU = function() {
		var eh, ej;
		this.aAH = !1, this.mV = !1, this.a3G = !1, this.aAI[0] = bQ.el, this.aAI[1] = bQ.em, this.aAI[2] = this.aAI[3] = 0;
		loop: for (eh = 1; eh < bQ.el - 1; eh++)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAL[ab.wb(eh, ej) + 2]) {
					this.aAI[0] = eh;
					break loop
				} loop: for (ej = 1; ej < bQ.em - 1; ej++)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAL[ab.wb(eh, ej) + 2]) {
					this.aAI[1] = ej;
					break loop
				} loop: for (eh = bQ.el - 2; 0 < eh; eh--)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAL[ab.wb(eh, ej) + 2]) {
					this.aAI[2] = eh;
					break loop
				} loop: for (ej = bQ.em - 2; 0 < ej; ej--)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAL[ab.wb(eh, ej) + 2]) {
					this.aAI[3] = ej;
					break loop
				}
	}
}

function L(value, aAM, uE) {
	var pG = "number" == typeof value ? b5.aAN[value] : value;
	if (uE && b5.aAO() && (pG = uE), aAM)
		for (var ea = aAM.length, aA = 0; aA < ea; aA++)
			for (var et = 0; et < 3; et++) pG = pG.replace("{" + (10 * et + aA) + "}", aAM[aA]);
	return pG
}

function bx() {
	this.data = new aAP;
	var aAQ = (new aAR).L84,
		aAS = (this.aAN = aAQ, !1);
	this.dU = function() {
		var ea, g;
		aAS = !1, "en" !== bh.e7.data[12].value.split("-")[0].toLowerCase() ? bh.e7.data[12].value === bh.e7.data[145].value && 0 < bh.e7.data[146].value && (ea = bh.e7.data[146].value, (g = bh.pr.uK(ea, !1)).length === ea) && !!b8.pi.a1Y(g) &&
			function(g) {
				for (var ea = g.length, j = 0; j < ea; j++) g[j] = g[j].replace("&#39;", "'");
				var aAY = bh.pr.uK(ea, !0);
				if (ea !== aAY.length) return !1;
				if (!b8.pi.a1Y(aAY)) return !1;
				for (var kX = aAQ.length, a7z = new Array(kX), aAZ = kX === ea, g2 = Math.min(ea, kX), aA = 0; aA < kX; aA++)
					if (a7z[aA] = aAQ[aA], aA < ea && aAY[aA] === a7z[aA]) a7z[aA] = g[aA];
					else {
						aAZ = !1;
						for (var eu = 0; eu < g2; eu++)
							if (aAY[eu] === a7z[aA]) {
								a7z[aA] = g[eu];
								break
							}
					} return b5.aAN = a7z, aAZ
			}(g) || (aAS = !0) : b5.aAN = aAQ
	}, this.dW = function() {
		be.dV(), aD.dV(), bc.dV(), bb.dV(), aN.dU(), bm = new dn
	}, this.aAO = function() {
		return this.aAN === aAQ || !aAQ.length
	}, this.aAa = function() {
		var aAb;
		aAS && (aAS = !1, 0 !== aAQ.length) && (aAb = bh.e7.data[12].value, ay.aAc.aAd(0, aAb.slice(0, 20)))
	}, this.aAe = function(g) {
		g.length === aAQ.length && (this.aAN = g, bh.r1.r2(145, bh.e7.data[12].value), bh.r1.r2(146, g.length), bh.pr.uQ(g, !1), bh.pr.uQ(aAQ, !0), 0 === aZ.a02()) && 5 === s.ro && s.x.aAf()
	}, this.aAg = function() {
		var aAh, g = navigator.languages;
		return g && g.length ? (aAh = Math.max(b5.data.aAi(g[0]), 0), 1 === g.length ? [aAh, aAh] : [aAh, Math.max(b5.data.aAi(g[1]), 0)]) : [0, 0]
	}
}

function aAP() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAj = function() {
		for (var aAk = [], g = this.g, ea = g.length, aA = 0; aA < ea; aA++) aAk.push(g[aA]);
		var aAl = bh.e7.data[12].uE;
		for (aA = 0; aA < ea; aA++)
			if (aAk[aA] === aAl) {
				aAk.splice(aA, 1), ea--;
				break
			} aAk.sort(), ea++, aAk.unshift(aAl);
		try {
			if ("undefined" == typeof Intl) return aAk;
			for (aA = 0; aA < ea; aA++) {
				var pG = new Intl.DisplayNames([aAk[aA]], {
					type: "language"
				}).of(aAk[aA]);
				pG !== aAk[aA] && (aAk[aA] = aAk[aA] + ": " + pG)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAk
	}, this.aAn = function(aAo) {
		for (var pG = bh.e7.data[12].value, ea = aAo.length, aA = 0; aA < ea; aA++)
			if (pG === aAo[aA].split(":")[0]) return aA;
		return 0
	}, this.aAi = function(aAp) {
		if (!aAp || aAp.length < 2) return 0;
		aAp = aAp.split("-")[0].toLowerCase();
		for (var g = this.g, ea = g.length, aA = 0; aA < ea; aA++)
			if (aAp === g[aA]) return aA;
		return -1
	}
}

function aAR() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
		"The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.", "You have earned {10} clan points!",
		"You have actually earned 40% more gold!", "The clan leader of {0} has earned {11} gold.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game",
		"More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!",
		"Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.",
		"You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.",
		"{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Select a boat to send it to a new location.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Show Account", "Moderation Actions", "Report User", "Mention", "Loading", "{0} has defeated {1}!", "White Arena", "Black Arena",
		"Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh",
		"Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"Send gold only to trusted accounts!", "You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide",
		"Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit",
		"Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader earns gold whenever their clan wins points.", "Rating: {10}", "Rank: {10}", "Unlink Account",
		"Status: Not Linked", "Click here to connect this account ({0}) to {11}!", "Advantages:", "Never see ads again!", "Appear on a dedicated Leaderboard!", "Earn passive gold income!", "Become a Member!",
		"Thank you so much for your support. It helps us to maintain Territorial.io and add new features.", "If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized",
		"Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options",
		"Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Custom Scenario", "⚔️ Play",
		"Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...",
		"Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index",
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water",
		"Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Lobby Chirper", "Keep Closed", "Mute",
		"Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu",
		"📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy",
		"Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:",
		"Source Account", "Replay Error", "Warning", "Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar",
		"Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack",
		"Call Peace Vote", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs",
		"Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black",
		"Ship launched!", "Ship selected!", "Ship on the way!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function da() {
	var eh, ej, j, sl, aAq, aAr, aAs, aAt, aAu, i, a2B, aAv;
	this.hH = !1, this.dU = function(pG, aAw) {
		if (1 === z.id && 13 <= z.dk && z.dk < 18) return aAw ? void(a2B = pG) : a2B !== pG ? void 0 : void z.uI.saveString(200, pG);
		aAw && (a2B = pG, (aAv = document.createElement("a")).appendChild(document.createTextNode(a2B)), this.hH = !0, aAv.title = a2B, aAv.target = "_blank", aAv.href = a2B, aAv.style.textAlign = "center", aAv.style.color = b9.mf, aAv.style
			.position = "absolute", aAv.style.padding = "0px", aAv.style.margin = "0px", this.resize(), document.body.appendChild(aAv), bd.dc = !0)
	}, this.qq = function() {
		return !(!this.hH || (document.body.removeChild(aAv), this.hH = !1))
	}, this.gn = function(hs, ht) {
		return !!this.hH && ((hs < eh || ht < ej || eh + i < hs || ej + j < ht || eh + i - sl < hs && ht < ej + sl) && (bd.dc = !0, this.hH = !1, document.body.removeChild(aAv)), !0)
	}, this.resize = function() {
		var a4S, aAx;
		this.hH && (aAt = Math.floor(.8 * (z.a0.qx() ? h.i > h.j ? .6 : .55 : .4) * h.pb), sl = Math.floor(.15 * aAt), aAq = Math.floor(.35 * sl), aAr = Math.floor(.5 * sl), aAs = Math.floor(2.5 * aAr), j = sl + aAq + 3 * aAr, a4S = b8.pZ.rO(1,
			aAq / h.k), aAu = Math.floor(h.k * aP.measureText(a2B, a4S)), aAx = i = (aAt < aAu ? aAu : aAt) + 2 * aAs, i = Math.min(i, h.i - 2 * (z.a0.qx() ? 2 : 1) * ba.gap), a4S = b8.pZ.rO(1, i / aAx * aAq / h.k), aAu = Math.floor(h.k *
			aP.measureText(a2B, a4S)), eh = Math.floor((h.i - i) / 2), ej = Math.floor((h.j - j) / 2), aAv.style.font = a4S, aAv.style.top = Math.floor((ej + 1.4 * aAr + sl) / h.k) + "px", aAv.style.left = Math.floor((eh + (i - aAu) /
			2) / h.k) + "px")
	}, this.tg = function() {
		this.hH && (th.fillStyle = b9.mc, th.fillRect(eh, ej + sl, i, j - sl), th.fillStyle = b9.nj, th.fillRect(eh, ej, i, sl), th.fillStyle = b9.mf, th.lineWidth = ba.xq, th.strokeStyle = b9.mf, th.strokeRect(eh, ej, i, j), th.fillRect(eh, ej +
			sl, i, ba.xq), th.font = b8.pZ.rO(1, .48 * sl), b8.pZ.textAlign(th, 1), b8.pZ.textBaseline(th, 1), th.fillText("You are leaving Territorial.io!", Math.floor(eh + (i - .5 * sl) / 2), Math.floor(ej + .55 * sl)), aL.a4d(Math
			.floor(eh + i - .8 * sl), Math.floor(ej + .25 * sl), Math.floor(.5 * sl)), th.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9J, eh = [0, 0, 0, 0, 0],
		ej = [0, 0, 0, 0, 0],
		mH = [1, 1, 1, 1, 1],
		f2 = [!0, !0, !0, !1, !1],
		ev = (this.fL = [!0, !0, !0, !1, !1], null);
	this.aAy = function(a1j, aAz) {
		ev = a1j, f2 = aAz, a9J = [bI.aB0, bI.zx, bI.aB1, bI.aB1, bI.aB2], this.dU()
	}, this.dU = function() {
		if (aa.sG()) {
			var aA, rv = Math.floor((z.a0.qx() ? .261 : .195) * h.pb),
				rw = Math.floor(.9 * rv),
				a6y = Math.floor(.17 * rw);
			if (gap = z.a0.qx() ? 2 * ba.gap : ba.gap, mH[0] = rv / ev[0].width, mH[1] = rw / ev[1].width, mH[2] = a6y / ev[2].height, mH[3] = a6y / ev[3].height, mH[4] = a6y / ev[4].height, mH[2] *= 1.7, mH[3] *= 1.07, eh[0] = gap, eh[1] = gap,
				eh[2] = gap, eh[3] = gap, eh[4] = Math.floor(2 * gap + mH[3] * ev[3].width), ej[0] = gap, ej[1] = ej[0] + gap + mH[0] * ev[0].height, ej[2] = ej[1] + gap + mH[1] * ev[1].height, ej[3] = ej[2] + gap + mH[2] * ev[2].height, ej[4] =
				ej[3], !f2[0])
				for (aA = 0; aA < 5; aA++) ej[aA] -= mH[0] * ev[0].height + gap;
			if (!f2[1])
				for (aA = 2; aA < 5; aA++) ej[aA] -= mH[1] * ev[1].height + gap
		}
	}, this.hH = function() {
		return !(7 === aZ.a02() && z.a0.qx())
	}, this.gn = function(hs, ht) {
		if (ev && this.hH())
			for (var aA = f2.length - 1; 0 <= aA; aA--)
				if (f2[aA] && this.fL[aA] && eh[aA] < hs && ej[aA] < ht && hs < eh[aA] + mH[aA] * ev[aA].width && ht < ej[aA] + mH[aA] * ev[aA].height) return s.t(9, s.ro, new aB3("You are leaving Territorial.io.", b8.pZ.a2A(a9J[aA]))), !0;
		return !1
	}, this.tg = function() {
		if (ev && this.hH()) {
			var aA;
			for (th.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f2[aA] && this.fL[aA] && (th.setTransform(mH[aA], 0, 0, mH[aA], eh[aA], ej[aA]), th.drawImage(ev[aA], 0, 0));
			th.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aB4 = 0, this.aB5 = null, this.su = null, this.qj = null, this.x = null, this.tG = null, this.ss = null, this.message = null, this.aB6 = null, this.qp = null, this.aB7 = new aB8, this.a06 = 0, this.dU = function() {
		this.aB4 = bE.rr.vC(bh.e7.data[105].value), this.su = new aB9, this.qj = new aBA, this.x = new aBB, this.tG = new aBC, this.ss = new aBD, this.message = new aBE, this.aB6 = new aBF, this.qp = new aBG, this.x.dU(), bn.dU(), this.a06 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.tA = function() {
		this.qp && this.qp.tA(), this.aB5 = null, this.su = null, this.qj = null, this.x = null, this.tG = null, this.ss = null, this.message = null, this.aB6 = null, this.qp = null, this.a06 = 0, bn.tA(), z.a0.setState(0)
	}
}

function aB9() {
	function aBa(g, s9, sA) {
		var aBb = g[s9];
		g[s9] = g[sA], g[sA] = aBb
	}
	this.sv = [
		[],
		[],
		[],
		[]
	], this.sw = [0, 0, 0, 0], this.aBH = function(aBI, rm, username, t1, a2e, aBJ, elo, color, uk, aBK) {
		this.sv[aBI].push(this.aBL(rm, username, t1, a2e, aBJ, elo, color, uk, aBK)), bl.aB4 === rm && (bl.aB5 = this.sv[aBI][this.sv[aBI].length - 1]), bl.x.aBM += 29 === s.ro && bl.x.qc[0] === aBI && 1 === bl.x.qc[2]
	}, this.aBL = function(rm, username, t1, a2e, aBJ, elo, color, uk, aBK) {
		return {
			rm: rm,
			username: username,
			t1: t1,
			a2e: a2e,
			aBJ: aBJ,
			elo: elo,
			color: color,
			uk: uk,
			aBK: aBK
		}
	}, this.aBN = function(dx, aBI, t1, a2e, aBJ, elo, uk) {
		dx = this.sv[aBI][dx];
		dx.t1 = t1, dx.a2e = a2e, dx.aBJ = aBJ, dx.elo = elo, dx.uk = uk, bl.x.aBM += 29 === s.ro && bl.x.qc[0] === aBI && 1 === bl.x.qc[2]
	}, this.aBO = function(dx, aBI, aBP) {
		var dx = this.sv[aBI][dx],
			aBQ = dx.username,
			aBR = "Redacted " + bD.rr.y7(dx.rm, 2);
		dx.username = aBP ? "[" + b8.zU.zZ(aBQ) + "] " + aBR : aBR, aBQ.indexOf("Redacted") < 0 && (dx.aBS = aBQ, dx.aBT = 3), bl.x.aBM += 29 === s.ro && bl.x.qc[0] === aBI && 1 === bl.x.qc[2]
	}, this.aBU = function(dx, aBV, aBW) {
		var player = this.sv[aBV][dx];
		this.aBX(dx, aBV), this.sv[aBW].push(player), bl.x.aBM += 29 === s.ro && bl.x.qc[0] === aBW && 1 === bl.x.qc[2]
	}, this.aBX = function(dx, aBV) {
		var su = this.sv[aBV];
		dx >= this.sw[aBV] ? su[dx] = su[su.length - 1] : (this.sw[aBV]--, 2 === aBV ? (su.splice(this.sw[aBV] + 1, 0, su[su.length - 1]), su.splice(dx, 1)) : (su[dx] = su[this.sw[aBV]], su[this.sw[aBV]] = su[su.length - 1])), su.pop(), bl.x
			.aBM += 29 === s.ro && bl.x.qc[0] === aBV && 1 === bl.x.qc[2]
	}, this.aBY = function(dx, qb) {
		bl.x.aBM += 29 === s.ro && bl.x.qc[0] === qb && 1 === bl.x.qc[2];
		var su = this.sv[qb],
			pR = su[dx];
		if (2 === qb)
			if (dx >= this.sw[qb]) {
				for (var aBZ = this.sw[qb], elo = pR.elo; aBZ && elo > su[aBZ - 1].elo;) aBZ--;
				su[dx] = su[this.sw[qb]], su.splice(this.sw[qb]++, 1), su.splice(aBZ, 0, pR)
			} else su.splice(this.sw[qb]--, 0, pR), su.splice(dx, 1);
		else dx >= this.sw[qb] ? aBa(su, this.sw[qb]++, dx) : aBa(su, --this.sw[qb], dx)
	}, this.aBc = function(rm) {
		for (var sv = this.sv, ea = sv.length, aA = 0; aA < ea; aA++)
			for (var su = sv[aA], kX = su.length, et = 0; et < kX; et++)
				if (rm === su[et].rm) return su[et];
		return null
	}
}

function aB8() {
	this.dd = function(dx) {
		if ((sw = bl.su.sw[dx]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qd = bl.x.qe[dx],
			aBd = 9 === qd.aBe ? 333 : 512,
			sw = Math.min(sw, aBd);
		8 === qd.aBe && (sw -= sw % 2);
		aBd = bl.su.sv[dx].splice(0, sw), bl.su.sw[dx] -= sw, sw = function(aBf) {
			if (bl.aB5) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var ea = aBf.length, rm = bl.aB5.rm, aA = 0; aA < ea; aA++)
					if (aBf[aA].rm === rm) return aA
			}
			return -1
		}(aBd);
		return -1 === sw ? (bl.x.aBM += 29 === s.ro && bl.x.qc[0] === dx && 1 === bl.x.qc[2], !1) : (8 === qd.aBe && (qd.aBi = (qd.aBi + (sw >> 1)) % 1024, dx = sw - sw % 2, sw %= 2, aBd = aBd.slice(dx, 2 + dx)), av.dU(qd, aBd, sw), !0)
	}, this.aBj = function(qd, aBf, aBg) {
		var ed = aC.data = new a3M,
			aBn = (ed.spawningSeed = qd.spawningSeed, qd.aBe < 7 ? (ed.gameMode = 1, ed.numberTeams = qd.aBe + 2) : 9 === qd.aBe ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === qd.aBe ?
				0 : 10 === qd.aBe ? 1 : 2), ed.selectedPlayer = aBg, ed.isContest = qd.aBk, ed.mapType = bQ.aBl(qd.eG) ? 0 : 1, bQ.aBm(ed, qd.eG), ed.mapSeed = qd.mapSeed, ed.humanCount = aBf.length);
		ed.selectableSpawn = 1 === ed.gameMode || aBn < 100, ed.colorsData = new Uint32Array(aBn), ed.playerNamesData = new Array(aBn);
		for (var aA = 0; aA < aBn; aA++) ed.colorsData[aA] = aBf[aA].color, ed.playerNamesData[aA] = aBf[aA].username;
		if (2 === ed.battleRoyaleMode)
			for (ed.elo = new Uint16Array(aBn), aA = 0; aA < aBn; aA++) ed.elo[aA] = aBf[aA].elo;
		aZ.setState(8), bQ.a6(qd.eG, ed.mapSeed), aC.a3Q(), aC.a3P = 2
	}
}

function aBA() {
	var dp = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aBo = [b9.mt, b9.mt, b9.mu, b9.nN, b9.nO, b9.nA, b9.nT, b9.mu, b9.nl, b9.nb, b9.nn],
		aBp = [
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
		aBq = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!"];
	this.ql = function(aBr) {
		var aBs, za;
		return aBr.id < 5 && (aBs = "@" + bD.rr.y7(aBr.rm, 5)), 0 === aBr.id ? aBs + ": " + aBr.p : 1 === aBr.id ? (za = "@" + bD.rr.y7(aBr.target, 5), 0 === aBr.aBt ? 32768 <= aBr.value ? aBs + " voted with " + (aBr.value - 32768 + 1) +
				" gold against " + za + " to weaken the latter's admin position." : aBs + " voted with " + (aBr.value + 1) + " gold for " + za + " to strengthen the latter's admin position." : 1 === aBr.aBt ? aBs + " sent " + Math.floor(aBr
					.value / 100) + " Gold to " + za + "." : aBs + " voted with " + aBr.value + " points for " + za + " to acknowledge the latter as clan leader.") : 2 === aBr.id ? 0 === aBr.aBt ? aBs + " was muted. Duration: 1 Hour" : 1 === aBr
			.aBt ? "The username of " + aBs + " was redacted. Duration: 1 Day" : aBs + " was kicked." : 3 === aBr.id ? aBs + bm.e0(aBr.aBt, bm.du[aBr.aBt][aBr.value]) + "@" + bD.rr.y7(aBr.target, 5) + bm.e2(aBr.aBt, bm.du[aBr.aBt][aBr.value]) :
			4 === aBr.id ? aBs + bm.e0(5, bm.du[5][aBr.aBt]) + "@" + bD.rr.y7(aBr.target, 5) + bm.e2(5, bm.du[5][aBr.aBt]) : 5 === aBr.id ? aBq[aBr.aBt] : 6 === aBr.id ? "You are about to mention " + aBr.value + " player" + (1 === aBr.value ?
				"" : "s") + ". This action will cost " + (Math.max(10 * aBr.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qk = function(aBr, a5f) {
		return {
			id: aBr.id,
			p: a5f,
			aBu: 0,
			fontSize: 1,
			qo: 0,
			aBv: aBr.id ? b9.nM : b9.mf
		}
	}, this.sz = function(player, qb) {
		return (2 === qb ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.t0 = function(t1) {
		return aBo[t1]
	}, this.aBw = function(t1, a2e) {
		return t1 < 3 || 7 === t1 ? aBp[t1][0] : 4 === t1 ? aBp[t1][a2e < 1 ? 0 : a2e < 10 ? 1 : 2] : aBp[t1][a2e < 10 ? 0 : 1]
	}, this.aBx = function(a2e) {
		return 0 === a2e
	}, this.aBc = function(qb, rm) {
		for (var sv = bl.su.sv, su = sv[qb], ea = su.length, aA = 0; aA < ea; aA++)
			if (rm === su[aA].rm) return su[aA];
		for (var eu = 0; eu < sv.length; eu++)
			if (qb !== eu)
				for (ea = (su = sv[eu]).length, aA = 0; aA < ea; aA++)
					if (rm === su[aA].rm) return su[aA];
		return null
	}, this.t2 = function(pR) {
		return !!bl.aB5 && pR.rm === bl.aB5.rm
	}, this.aBy = function(su, aBz, aC0) {
		var zX = [];
		loop: for (var aA = aBz; aA < aC0; aA++) {
			var zY = b8.zU.zZ(su[aA].username);
			if (zY) {
				for (var eu = zX.length - 1; 0 <= eu; eu--)
					if (zY === zX[eu].name) {
						zX[eu].g2++;
						continue loop
					} zX.push({
					name: zY,
					g2: 1
				})
			}
		}
		if (zX.sort(function(et, eu) {
				return eu.g2 - et.g2
			}), 0 === zX.length) return "";
		for (var pG = zX[0].name + ": " + zX[0].g2, aA = 1; aA < zX.length; aA++) pG += "   " + zX[aA].name + ": " + zX[aA].g2;
		return pG
	}, this.aC1 = function(t1, a2e, aBJ) {
		return 0 === dp[t1].length ? "Rank: " + (a2e + 1) : dp[t1] + " Rank: " + (a2e + 1) + (3 !== t1 && aBJ < 100 ? "   " + dp[3] + " Rank: " + (aBJ + 1) : "")
	}
}

function aBD() {
	var rH = 0,
		aC2 = 0,
		aC3 = 0,
		aC4 = null,
		aC5 = null;

	function aC8(pR, aC9, aCA) {
		var pG = pR.username;
		return (pG += "   " + bl.qj.aC1(pR.t1, pR.a2e, pR.aBJ)) + function(pR) {
			pR = pR.uk;
			if (pR < 1e3) return "   Gold: " + pR;
			if ((pR %= 1024) < 1e3) return "   Gold: " + pR + "k";
			return "   Gold: " + (pR - 999) + "M"
		}(pR) + ("   IP: " + bD.rr.y7(pR.aBK, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aCA ? aC2 : aC7(pR, aC9)])
	}

	function aC7(pR, aC9) {
		return aC2 = aC9 || bl.su.aBc(pR.rm) ? 1 : 0
	}
	this.aC6 = function() {
		!rH || aC2 === aC7(aC5) && aC3 === aC5.uk || (aC3 = aC5.uk, aC4.show(-1, -1, aC8(aC5, 0, 1), 1, 1))
	}, this.t3 = function(e, pR, aC9) {
		var a75 = e.target.getBoundingClientRect();
		this.show(a75.left, a75.top, pR, 0, aC9), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.ss && bl.ss.qq(1)
		})
	}, this.show = function(eh, ej, pR, rL, aC9) {
		aC4 = aC4 || new rF, aC3 = (aC5 = pR).uk, aC4.show(eh, ej, aC8(pR, aC9), rL), rH = 1
	}, this.qq = function(rR) {
		aC4 && aC4.qq(rR) && (rH = 0, aC5 = null)
	}
}

function aBB() {
	function aCF(aCI) {
		bl.x.aBM && 1 === bl.x.qc[2] && s.aCJ(29).aCK(), bl.x.aBM = 0, s.aCJ(29).aCL(), 0 !== bl.x.qe[bl.x.qc[0]].sf && !aCI || s.aCJ(29).aCM(), bl.ss.aC6()
	}
	this.qe = new Array(4), this.qc = [0, 0, 1, 0], this.aBM = 0, this.aCC = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qe.length; aA++) this.qe[aA] = new aCD;
		this.qc[0] = bh.e7.data[158].value
	}, this.aCE = function() {
		aCF(!0)
	}, this.aCG = function() {
		for (var aA = 0; aA < bl.x.qe.length; aA++) {
			var qd = bl.x.qe[aA];
			0 === qd.sf ? qd.aCN = 0 : (qd.aCO = Math.max(qd.aCO - qd.aCN % 2, 0), qd.aCN++)
		}
		aCF(!1)
	}, this.aCP = function(qb) {
		this.qc[0] !== qb || this.qc[2] || s.aCJ(29).aCQ()
	}
}

function aBF() {
	var aCR = 0,
		aCS = "",
		aCT = 0,
		aCU = 0,
		aCV = 0;

	function aCX(a5f) {
		ay.aCi.aCj(3, a5f)
	}

	function aCg(g2) {
		aCR = 1, bl.message.aCk({
			id: 6,
			value: g2
		})
	}

	function aCa(p) {
		var aCn = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCn)
	}
	this.yt = function(p) {
		var aCW, g, aCc;
		if (aCR) return aCR = 0, "yes" === (aCW = p.toLowerCase()) || "y" === aCW ? void aCX(aCS) : void bl.message.aCk({
			id: 5,
			aBt: 7
		});
		!(p.indexOf("@") < 0) && (aCW = aCa(p)) ? (aCS = p, g = function(aCZ) {
			for (var ea = aCZ.length, aCl = [0, 0, 0, 0], aA = 0; aA < ea; aA++)
				for (var i = aCZ[aA], et = 0; et < 4; et++) i === "@room" + (et + 1) && (aCl[et] = 1);
			if ((aCU = b8.pi.a1N(aCl)) % 4 == 0) return b8.pi.a1f(bl.su.sv);
			for (et = 0; et < 4; et++) aCl[et] = aCl[et] ? bl.su.sv[et] : [];
			return b8.pi.a1f(aCl)
		}(aCW), function(aCZ, aCc, p) {
			if (!aCT) return;
			for (var ea = aCc.length, aA = 0; aA < ea; aA++) 2 === aCc[aA].id && (p = p.replace(aCZ[aCc[aA].dx], "@" + aCc[aA].f2));
			return aCR = 1, aCX((aCS = p).slice(0, 126) + "|"), 1
		}(aCW, aCc = function(aCZ) {
			for (var aCc = [], ea = (aCV = aCT = 0, aCZ.length), aA = 0; aA < ea; aA++) {
				var i = aCZ[aA],
					kX = i.length;
				b8.zU.startsWith(i, "@[") ? kX <= 9 && b8.zU.a2E(i, "]") && aCc.push({
					id: 0,
					f2: i.substring(2, kX - 1).toUpperCase()
				}) : 6 === kX ? b8.zU.startsWith(i, "@room") || (aCV++, aCc.push({
					id: 1,
					f2: bE.rr.vC(i.substring(1))
				})) : 1 < kX && kX < 5 && 0 <= (kX = b5.data.aAi(i.substring(1))) && (aCc.push({
					id: 2,
					f2: kX,
					dx: aA
				}), aCT = 1)
			}
			return aCc
		}(aCW), p) || (0 === aCc.length ? aCU || function(aCZ) {
			for (var ea = aCZ.length, aA = 0; aA < ea; aA++) {
				var i = aCZ[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCW) ? aCg(g.length) : aCX(p) : aCW.length === aCV ? aCX(p) : (function(g, aCc) {
			var kX = aCc.length;
			if (0 === kX) return;
			var ea = g.length;
			loop: for (var aA = ea - 1; 0 <= aA; aA--) {
				for (var et = 0; et < kX; et++)
					if (0 === aCc[et].id) {
						if (aCc[et].f2 === b8.zU.zZ(g[aA].username)) continue loop
					} else if (1 === aCc[et].id && aCc[et].f2 === g[aA].rm) continue loop;
				g[aA] = g[--ea], g.pop()
			}
		}(g, aCc), aCg(g.length)))) : aCX(p)
	}, this.aCo = function(p) {
		var aCZ = aCa(p);
		if (aCZ)
			for (var a4 = new RegExp("^[0-9]+$"), ea = aCZ.length, aA = 0; aA < ea; aA++) {
				var i = aCZ[aA].substring(1),
					kX = i.length;
				1 <= kX && kX <= 3 && a4.test(i) && (kX = parseInt(i, 10), !isNaN(kX)) && 0 <= kX && kX < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[kX]))
			}
		return p
	}
}

function aBE() {
	var aCp, aCq = [],
		aCr = -1,
		aCs = 0,
		aCt = 0;

	function aCx() {
		aCs = bd.e9, (3 === this.t7 ? (aCt = 1, aCw) : (aCr = (aCq.length + aCr + 2 * this.t7 - 1) % aCq.length, aCv))()
	}

	function aCv() {
		0 !== aCq.length && (aCt = 0, aCp && aCp.tA(), (aCp = new t4(aCx)).r2(aCr, aCq.length), aCp.show(aCq[aCr]), bl.message.resize())
	}

	function aCw() {
		aCp && aCp.tA(), (aCp = new tB(aCv)).r2(aCq.length), aCp.show(), bl.message.resize()
	}
	this.aCk = function(aBr) {
		var eu, aBr = bl.qj.qk(aBr, bl.qj.ql(aBr));
		5 === aBr.id || 6 === aBr.id ? s.aCJ(29).aCu().qn(aBr) : (eu = bd.e9 < aCs + 2e4, aCr !== aCq.length - 1 && eu || (aCr = aCq.length), aCq.push(aBr), bh.e7.data[14].value || bn.play(), aCp && (bh.e7.data[13].value || aCt && eu ? aCp.r2(aCq
			.length) : aCv()))
	}, this.show = function() {
		aCw()
	}, this.qq = function() {
		aCr = aCq.length - 1, aCp && aCp.tA(), aCp = null
	}, this.resize = function() {
		aCp && aCp.resize()
	}
}

function aBC() {
	var aCy = null,
		aCz = null,
		aD0 = 0,
		aD1 = 0,
		aD2 = null;

	function aD4() {
		0 !== aCz.t1 && (bl.tG.qq(), s.t(8, 29, new rp(25, {
			rq: 0,
			rm: bD.rr.y7(aCz.rm, 5),
			rn: 0
		}, 29)))
	}

	function aD5() {
		var eh = aCy.eh,
			ej = aCy.ej;
		bl.tG.qq(), aCy = new tC([new v("Kick User", function() {
			aDB(0, 0)
		}, aDG(0, 0)), new v("Block Chat", aDC, aDH(1)), new v("Censor Username", aDD, aDH(2)), new v("Elo Deduction", aDE, aDH(3)), new v("Gold Seizure", aDF, aDH(4))]), aDA(eh, ej), aD0 = 2, aD1 = 1
	}

	function aDH(id) {
		return !bl.aB5 || bl.qj.t2(aCz) || bl.aB5.aBJ >= aCz.a2e || 0 === id && aCz.a2e < 200 ? 1 : 1 - bm.dv(id, bl.aB5.aBJ, 0)
	}

	function aD8() {
		return !bl.aB5 || bl.qj.t2(aCz) ? 1 : 0
	}

	function aDG(id, dx) {
		var a2e;
		return !bl.aB5 || bl.qj.t2(aCz) || (a2e = bl.aB5.aBJ) >= aCz.a2e ? 1 : 1 - bm.dv(id, a2e, dx)
	}

	function aD7() {
		var eh = aCy.eh,
			ej = aCy.ej,
			aDI = (bl.tG.qq(), aD8());
		aCy = new tC([new v(bm.du[5][0], function() {
			aDB(5, 0)
		}, aDI), new v(bm.du[5][1], function() {
			aDB(5, 1)
		}, aDI), new v(bm.du[5][2], function() {
			aDB(5, 2)
		}, aDI), new v(bm.du[5][3], function() {
			aDB(5, 3)
		}, aDI)]), aDA(eh, ej), aD1 = aD0 = 2
	}

	function aD9() {
		29 === s.ro && s.aDJ().aB6(bD.rr.y7(aCz.rm, 5))
	}

	function aDB(id, value) {
		ay.aCi.aCj(5, {
			id: id,
			value: value,
			rm: aCz.rm
		})
	}

	function aDC() {
		var eh = aCy.eh,
			ej = aCy.ej;
		bl.tG.qq(), aCy = new tC([new v(bm.du[1][0], function() {
			aDB(1, 0)
		}, aDG(1, 0)), new v(bm.du[1][1], function() {
			aDB(1, 1)
		}, aDG(1, 1)), new v(bm.du[1][2], function() {
			aDB(1, 2)
		}, aDG(1, 2)), new v(bm.du[1][3], function() {
			aDB(1, 3)
		}, aDG(1, 3)), new v(bm.du[1][4], function() {
			aDB(1, 4)
		}, aDG(1, 4))]), aDA(eh, ej), aD0 = 3, aD1 = 1
	}

	function aDD() {
		var eh = aCy.eh,
			ej = aCy.ej;
		bl.tG.qq(), aCy = new tC([new v(bm.du[2][0], function() {
			aDB(2, 0)
		}, aDG(2, 0)), new v(bm.du[2][1], function() {
			aDB(2, 1)
		}, aDG(2, 1)), new v(bm.du[2][2], function() {
			aDB(2, 2)
		}, aDG(2, 2))]), aDA(eh, ej), aD0 = 3, aD1 = 2
	}

	function aDE() {
		var eh = aCy.eh,
			ej = aCy.ej;
		bl.tG.qq(), aCy = new tC([new v(bm.du[3][0], function() {
			aDB(3, 0)
		}, aDG(3, 0)), new v(bm.du[3][1], function() {
			aDB(3, 1)
		}, aDG(3, 1)), new v(bm.du[3][2], function() {
			aDB(3, 2)
		}, aDG(3, 2))]), aDA(eh, ej), aD1 = aD0 = 3
	}

	function aDF() {
		var eh = aCy.eh,
			ej = aCy.ej;
		bl.tG.qq(), aCy = new tC([new v(bm.du[4][0], function() {
			aDB(4, 0)
		}, aDG(4, 0)), new v(bm.du[4][1], function() {
			aDB(4, 1)
		}, aDG(4, 1)), new v(bm.du[4][2], function() {
			aDB(4, 2)
		}, aDG(4, 2)), new v(bm.du[4][3], function() {
			aDB(4, 3)
		}, aDG(4, 3)), new v(bm.du[4][4], function() {
			aDB(4, 4)
		}, aDG(4, 4))]), aDA(eh, ej), aD0 = 3, aD1 = 4
	}

	function aDA(eh, ej, tI) {
		aCy.show(eh, ej, tI), bl.ss.show(aCy.eh, aCy.ej, aCz, 1)
	}
	this.aD3 = function(e, pR) {
		aD0 = 1, aCz = pR, aCy = new tC([new v(L(129), aD4, 0 === aCz.t1 ? 1 : 0), new v(L(130), aD5, function() {
			if (!bl.aB5) return 1;
			if (bl.qj.t2(aCz)) return 1;
			if (100 <= bl.aB5.aBJ) return 1;
			if (bl.aB5.aBJ >= aCz.a2e) return 1;
			return 0
		}()), new v(L(131, 0, "Report"), aD7, aD8()), new v(L(132), aD9, 0)]), aDA((aD2 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aD2.clientY, 1)
	}, this.a0w = function(code) {
		if (29 !== s.ro) return !1;
		if (!aCz) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qq();
			else if (b8.zU.startsWith(code, "Numpad") || b8.zU.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aD0) this.aD3(aD2, aCz);
				else {
					if (!aCy) return !1;
					1 === aD0 ? code <= 1 ? aD4() : 2 === code ? aD5() : 3 === code ? aD7() : (aD9(), this.qq()) : 2 === aD0 ? 1 === aD1 ? code <= 1 ? (aDB(0, 0), this.qq()) : (2 === code ? aDC : 3 === code ? aDD : 4 === code ? aDE : aDF)() : (
						aDB(5, bJ.p7(code - 1, 0, 3)), this.qq()) : (aDB(aD1, bJ.p7(code - 1, 0, bm.du[aD1].length - 1)), this.qq())
				}
		}
		return !0
	}, this.qq = function() {
		aD0 = 0, aCy && aCy.qq(), aCy = null, bl.ss.qq()
	}
}

function aCD() {
	this.sf = 0, this.eG = 0, this.mapSeed = 0, this.aBe = 0, this.aDK = 0, this.aDL = 0, this.aBk = 0, this.aCO = 0, this.spawningSeed = 0, this.a08 = 0, this.aBi = 0, this.qf = [], this.qg = 1048575, this.aCN = 0, this.aDM = [{
		eG: 0,
		mapSeed: 0,
		aBe: 0,
		e9: 100,
		aBk: 0
	}, {
		eG: 1,
		mapSeed: 0,
		aBe: 1,
		e9: 200,
		aBk: 0
	}, {
		eG: 2,
		mapSeed: 0,
		aBe: 2,
		e9: 300,
		aBk: 0
	}, {
		eG: 3,
		mapSeed: 0,
		aBe: 3,
		e9: 400,
		aBk: 0
	}, {
		eG: 0,
		mapSeed: 0,
		aBe: 9,
		e9: 500,
		aBk: 0
	}, {
		eG: 1,
		mapSeed: 0,
		aBe: 10,
		e9: 600,
		aBk: 0
	}, {
		eG: 2,
		mapSeed: 0,
		aBe: 8,
		e9: 700,
		aBk: 0
	}, {
		eG: 3,
		mapSeed: 0,
		aBe: 3,
		e9: 800,
		aBk: 0
	}]
}

function aBG() {
	var aDN = [],
		s1 = [];

	function aDT(pG, pR, ev) {
		var aDU = function(pG) {
				var rm = bE.rr.vC(pG),
					aDU = bl.su.aBc(rm);
				if (aDU) {
					for (aDN.push(aDU); 50 < aDN.length;) aDN.shift();
					return aDU
				}
				for (var aA = aDN.length - 1; 0 <= aA; aA--)
					if (rm === aDN[aA].rm) return aDU = aDN[aA], aA < 40 && aDN.push(aDU), aDU;
				return bl.su.aBL(rm, pG, 1, 999999, 999999, 0, 0, 0, 0)
			}(pG),
			pG = (0 === ev && 0 === pR.id && pR.qo && (pR.fontSize = bl.qj.aBw(aDU.t1, aDU.a2e), pR.aBu = bl.qj.aBx(aDU.a2e)), document.createElement("span"));
		return pG.textContent = function(aDU, pR, ev) {
			pR = aDU.aBT && aDU.aBT-- && (2 === pR.id || (3 === pR.id || 4 === pR.id) && 0 !== ev);
			return aDU.username + (pR ? " (" + aDU.aBS + ")" : "")
		}(aDU, pR, ev), pG.style.display = "inline-block", pG.style.color = bl.qj.t0(aDU.t1), pG.style.cursor = "pointer", pG.style.margin = "0", pG.style.font = "inherit", pG.style.minWidth = pG.style.minHeight = "1em", bl.qj.t2(aDU) && (pG
			.style.textDecoration = "underline"), bl.qj.aBx(aDU.a2e) && (pG.style.fontWeight = "bold"), pG.onclick = function(e) {
			bl.tG.aD3(e, aDU)
		}, bH.q2() || (pG.onmouseover = function(e) {
			bl.ss.t3(e, aDU)
		}), s1.push(pG), pG
	}

	function aDS(p, pR) {
		var qY = document.createElement("span");
		return qY.textContent = p, qY.style.color = pR.aBv, qY.style.margin = "0", qY.style.font = "inherit", qY
	}
	this.tA = function() {
		for (var aA = 0; aA < s1.length; aA++) s1[aA].onclick = s1[aA].onmouseover = null;
		s1[aA] = null
	}, this.transform = function(pR) {
		for (var pE = document.createElement("div"), aDO = function(pR) {
				var p = pR.p,
					aDO = [];
				for (;;) {
					var ev = function aDR(p, position) {
						position = p.indexOf("@", position);
						if (position < 0) return -1;
						var pG = p.substring(position + 1, position + 6);
						if (5 !== pG.length) return aDR(p, position + 1);
						if (b8.zU.startsWith(pG, "room")) return aDR(p, position + 1);
						var aDY = new RegExp("^[a-zA-Z0-9_-]+$");
						if (!aDY.test(pG)) return aDR(p, position + 1);
						aDY = p.substring(position + 6, position + 7);
						if (1 !== aDY.length) return position;
						pG = new RegExp("^[ :!.]+$");
						if (!pG.test(aDY)) return aDR(p, position + 1);
						return position
					}(p, 0);
					if (-1 === ev) {
						aDO.push(aDS(p, pR));
						break
					}
					0 === ev ? aDO.push(aDT(p.substring(1, 6), pR, ev)) : (aDO.push(aDS(p.substring(0, ev), pR)), aDO.push(aDT(p.substring(ev + 1, ev + 6), pR, ev))), p = p.substring(ev + 6)
				}
				return aDO
			}(pR), aA = 0; aA < aDO.length; aA++) pE.appendChild(aDO[aA]);
		pE.style.margin = "0.6em 0.6em", pR.qo && (pE.style.marginLeft = pE.style.marginRight = "inherit"), pE.style.font = "inherit";
		var aDQ = 0 < pR.id;
		return pR.aBu && (pE.style.fontWeight = "bold"), aDQ && (pE.style.paddingLeft = "0.7em"), aDQ && (pE.style.fontStyle = "italic"), pE.style.fontSize = pR.fontSize.toFixed(2) + "em", pE
	}
}

function cK() {
	var aDb, aDc, aDd;

	function aDi(aA) {
		var button = aX.q9[aA],
			eh = button.eh,
			ej = button.ej,
			i = button.i,
			j = button.j;
		th.fillStyle = button.aDg, th.fillRect(eh, ej, i, j), aA === aDb && (th.fillStyle = aDd, th.fillRect(eh, ej, i, j)), th.lineWidth = ba.xq, th.strokeStyle = aDc, th.strokeRect(eh, ej, i, j),
			function(button) {
				var eh = button.eh,
					ej = button.ej,
					i = button.i,
					j = button.j;
				b8.pZ.textAlign(th, 1), b8.pZ.textBaseline(th, 1), th.font = button.font, th.fillStyle = aDc, th.fillText(button.a5f, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ej = 0, this.gap = 0, this.dU = function() {
		aDb = -1, aDc = b9.mf, aDd = "rgba(255,255,255,0.16)", this.q9 = new Array(7), this.j = Math.floor((z.a0.qx() ? .123 : .093) * h.pb), this.i = Math.floor((z.a0.qx() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDe = Math.floor(.26 * this.j),
			aDf = b8.pZ.rO(1, aDe);
		this.q9[0] = {
			eh: 0,
			ej: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5f: "Multiplayer",
			font: aDf,
			aDg: "rgba(22,88,22,0.8)",
			fontSize: aDe
		}, aDe = Math.floor(.18 * this.j), aDf = b8.pZ.rO(1, aDe), this.q9[1] = {
			eh: 0,
			ej: 0,
			i: this.i - this.q9[0].i - this.gap,
			j: this.j,
			a5f: "Single Player",
			font: aDf,
			aDg: "rgba(22,88,88,0.8)",
			fontSize: aDe
		}, this.q9[2] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5f: "",
			font: this.q9[1].font,
			aDg: "rgba(100,0,0,0.8)",
			fontSize: this.q9[1].fontSize
		}, this.q9[3] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: this.j,
			a5f: "Back",
			font: this.q9[0].font,
			aDg: "rgba(0,0,0,0.8)",
			fontSize: this.q9[0].fontSize
		}, this.q9[4] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5f: "The game was updated!",
			font: this.q9[1].font,
			aDg: "rgba(100,0,0,0.8)",
			fontSize: this.q9[1].fontSize
		}, this.q9[5] = {
			eh: 0,
			ej: 0,
			i: this.q9[0].i,
			j: Math.floor(.8 * this.j),
			a5f: "Reload",
			font: this.q9[0].font,
			aDg: "rgba(0,100,0,0.8)",
			fontSize: this.q9[0].fontSize
		}, this.q9[6] = {
			eh: 0,
			ej: 0,
			i: this.q9[1].i,
			j: this.q9[5].j,
			a5f: "Back",
			font: this.q9[0].font,
			aDg: "rgba(0,0,0,0.8)",
			fontSize: this.q9[0].fontSize
		}, this.a82()
	}, this.a82 = function() {
		this.ej = Math.floor(.54 * h.j), this.q9[0].eh = Math.floor(.5 * h.i - .5 * this.i), this.q9[1].eh = this.q9[0].eh + this.q9[0].i + this.gap, this.q9[2].eh = this.q9[3].eh = this.q9[0].eh, this.q9[4].eh = this.q9[5].eh = this.q9[0].eh,
			this.q9[6].eh = this.q9[1].eh, this.q9[0].ej = Math.floor(.54 * h.j), this.q9[1].ej = this.q9[0].ej, this.q9[2].ej = Math.floor((h.j - this.q9[2].j - this.q9[3].j - this.gap) / 2), this.q9[3].ej = this.q9[2].ej + this.q9[2].j + this
			.gap, this.q9[4].ej = Math.floor((h.j - this.q9[4].j - this.q9[5].j - this.gap) / 2), this.q9[5].ej = this.q9[6].ej = this.q9[4].ej + this.q9[4].j + this.gap
	}, this.aDh = function() {
		aDi(0), aDi(1)
	}, this.aDj = function() {
		aDi(2), aDi(3)
	}, this.aDk = function() {
		aDi(4), aDi(5), aDi(6)
	}, this.a0O = function(eh, ej, lP) {
		var aA = -1;
		return 0 === aZ.a02() ? aA = this.a0s(eh, ej, 0, 2) : 3 === aZ.a02() ? aA = this.a0s(eh, ej, 3, 1) : 5 === aZ.a02() && (aA = this.a0s(eh, ej, 5, 2)), aDb !== aA && (aDb = aA, lP) && (bd.dc = !0), -1 !== aA && (aS.qZ(), !0)
	}, this.a0s = function(eh, ej, aDl, size) {
		for (var aA = aDl; aA < aDl + size; aA++)
			if (eh >= this.q9[aA].eh && ej >= this.q9[aA].ej && eh <= this.q9[aA].eh + this.q9[aA].i && ej <= this.q9[aA].ej + this.q9[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDn, aDo, aDp, aDq, aDr, aDs, aDt, aDu, aDv, aDw, aDx, aDy, aDz, aE0 = 1;

	function aE2(aE3) {
		!aE3 && 1 === aDz && aE0 ? (aE0 = 0, ay.x.close(aDz, 3280)) : aDz = (aDz + 1) % ay.x.aE4, aDy = bd.e9, ay.x.aE5(aDz, 4) && ay.aCi.aE6(aDz)
	}

	function aE7() {
		if (0 !== aDz) return 1 === aDz && __fx.customLobby.isActive() ? (q.a0D(3249), __fx.customLobby.setActive(!1)) : void aE2();
		q.a0D(3249)
	}

	function aEC(ej, a7j, sf) {
		var m5 = Math.floor((h.i - aDq) / 2) + aDt,
			mI = m5 + Math.floor(sf * (aDq - 2 * aDt));
		th.lineWidth = a7j, th.beginPath(), th.moveTo(m5, ej), th.lineTo(mI, ej), th.lineTo(Math.floor(m5 - aDt + sf * aDq), ej + aDp), th.lineTo(m5 - aDt, ej + aDp), th.closePath()
	}
	this.aE1 = 1, this.dU = function() {
		aZ.setState(6), aDn = 0, aDo = 1, aDu = "rgba(0,220,120,0.4)", aDv = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aE0 = 1, aDz = this.aE1 - 1, aE2(1)
	}, this.resize = function() {
		aDq = Math.floor((z.a0.qx() ? .5 : .25) * h.pb), aDr = aDq + 12, aDp = Math.floor(.125 * aDq), aDt = 3 * aDp, aDs = Math.floor(.225 * aDq), aDx = Math.floor(.3 * aDp), aDw = b8.pZ.rO(0, aDx)
	}, this.a05 = function(zz) {
		zz === aDz && aE7()
	}, this.gn = function(eh, ej) {
		var m5 = Math.floor((h.i - aDr) / 2),
			m6 = Math.floor(.5 * (h.j - ba.gap - aDp - aDs)) + aDp + ba.gap;
		return m5 < eh && eh < m5 + aDr && m6 < ej && ej < m6 + aDs && (this.a14(), aX.a0O(eh, ej, !1), !0)
	}, this.a14 = function() {
		ay.x.a0E(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ij = function() {
		6 === aZ.a02() && (bd.e9 > aDy + 12e3 && aE7(), 100 < (aDn += .07 * aDo * (aDn < 16 ? 5 + aDn : 84 < aDn ? 105 - aDn : 17)) ? (aDn = 100, aDo = -1) : aDn < 0 && (aDn = 0, aDo = 1), aDu = "rgba(0," + Math.floor(190 - 1.9 * aDn) + "," +
			Math.floor(120 - 1.2 * aDn) + "," + (.4 + .004 * aDn) + ")", aDv = "rgba(0," + Math.floor(1.9 * aDn) + "," + Math.floor(1.2 * aDn) + "," + (.8 - .004 * aDn) + ")", bd.dc = !0)
	}, this.tg = function() {
		var eh = Math.floor((h.i - aDr) / 2),
			ej = Math.floor(.5 * (h.j - ba.gap - aDp - aDs));
		! function(title, ej, a7j, sf) {
			th.fillStyle = aDv, aEC(ej, a7j, 1), th.fill(), th.fillStyle = aDu, aEC(ej, a7j, sf), th.fill(), th.strokeStyle = b9.mf, aEC(ej, a7j, 1), th.stroke(),
				function(aEE, ej) {
					b8.pZ.textAlign(th, 1), b8.pZ.textBaseline(th, 1), th.font = aDw, th.fillStyle = b9.mf, th.fillText(aEE, Math.floor(.5 * h.i), Math.floor(ej + .58 * aDp))
				}(title, ej)
		}(L(133), ej, 3, aDn / 100),
		function(eh, ej, i, j, a5f) {
			th.fillStyle = b9.ma, th.fillRect(eh, ej, i, j), th.lineWidth = 3, th.strokeStyle = b9.mf, th.strokeRect(eh, ej, i, j);
			var ea = Math.floor(.3 * j);
			b8.pZ.textAlign(th, 1), b8.pZ.textBaseline(th, 1), th.font = b8.pZ.rO(0, ea), th.fillStyle = b9.mf, th.fillText(a5f, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * ea))
		}(eh, ej + aDp + ba.gap, aDr, aDs, L(36))
	}
}

function cM() {
	var zv = 0;
	this.dU = function() {
		aX.dU(), zv = 0
	}, this.setState = function(aEF) {
		zv = aEF
	}, this.a02 = function() {
		return zv
	}, this.aEG = function() {
		this.setState(8), s.w()
	}, this.a0w = function(e) {
		if (!bQ.vS) return !1;
		if (!(bd.e9 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aEH()) return !0;
				if ("Enter" === e.key) {
					if (0 === zv) return !0;
					if (7 === zv) return !0
				}
			}
			return !1
		}
	}, this.aEI = function() {
		bX.resize()
	}, this.aEH = function() {
		return !!bX.qq()
	}, this.gn = function(eh, ej) {
		!bQ.vS || bX.gn(eh, ej) || 6 === zv && aY.gn(eh, ej) || bW.gn(eh, ej) || aS.gn(eh, ej)
	}, this.a0O = function(eh, ej) {
		!aS.a7v && aX.a0O(eh, ej, !0) || aS.a0O(eh, ej)
	}, this.click = function(eh, ej) {
		aS.a0n()
	}, this.a0R = function(eh, ej, deltaY) {}, this.aEJ = function() {
		aX.a82(), bd.dc = !0
	}, this.tg = function() {
		8 !== zv && 10 !== zv && (th.imageSmoothingEnabled = !0, this.x0(), 0 !== zv && (aS.tg(), aN.tg(), this.aEK(), bW.tg()), 0 !== zv && 6 === zv && aY.tg(), bX.tg(), s.tg())
	}, this.x0 = function() {
		var aEM, aEL;
		if (__fx.makeMainMenuTransparent) th.clearRect(0, 0, h.i, h.j);
		else bQ.vS ? (aEL = h.i / bQ.el, aEM = h.j / bQ.em, th.setTransform(aEL = aEM < aEL ? aEL : aEM, 0, 0, aEL, Math.floor((h.i - aEL * bQ.el) / 2), Math.floor((h.j - aEL * bQ.em) / 2)), th.drawImage(bQ.vU, 0, 0), th.setTransform(1, 0, 0, 1,
			0, 0), th.fillStyle = b9.ma) : th.fillStyle = b9.mW, th.fillRect(0, 0, h.i, h.j)
	}, this.aEK = function() {
		var ej = Math.floor(.3 * h.j),
			canvas = aa.aEN("territorial.io"),
			hW = (hW = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hW,
			eh = (th.globalAlpha = .15, th.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hW * canvas.width))),
			eh = Math.floor(eh / hW),
			ej = Math.floor(ej - .5 * canvas.height * hW),
			ej = Math.floor(ej / hW);
		th.setTransform(hW, 0, 0, hW, eh, ej), th.drawImage(canvas, eh, ej), th.setTransform(1, 0, 0, 1, 0, 0), th.globalAlpha = 1, th.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBi = 0;
	var aEP, aEQ, aER, aES, aET, aEU = this.aEO = 0;

	function aEX() {
		aES = aET = null, aEU = 0
	}
	this.dU = function(qd, aBf, aBg) {
		s.w(), bl.tA(), aZ.setState(10), aES = qd, aET = aBf, aEU = aBg, this.aBi = qd.aBi, this.aEO = aBg, aEP = 0, aEQ = bd.e9 + 4500, ay.x.a08 = qd.a08, ay.x.a07 === qd.a08 ? (console.log("direct pass"), aER = 0) : (console.log(
			"delayed pass"), ay.x.close(ay.x.a07, 3247), aER = 2, ay.x.aE5(qd.a08, 5) && ay.ny.aEV()), th.imageSmoothingEnabled = !0, aZ.x0();
		aBf = aa.aEN("loading"), aBg = (z.a0.qx() ? .396 : .25) * h.pb / aBf.width;
		th.setTransform(aBg, 0, 0, aBg, Math.floor((h.i - aBg * aBf.width) / 2), Math.floor((h.j - aBg * aBf.height) / 2)), th.imageSmoothingEnabled = !1, th.drawImage(aBf, 0, 0), th.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lN = function() {
		0 < aER && bd.e9 > aEQ && (aER--, aEQ += 4500, 0 === bd.aEZ) && 0 === bd.jm() && ay.x.aE5(ay.x.a08, 5)
	}, this.aEa = function() {
		return 10 === aZ.a02() && (bl.aB7.aBj(aES, aET, aEU), aEX(), !0)
	}, this.aEb = function() {
		10 === aZ.a02() && 2 <= ++aEP && (bl.aB7.aBj(aES, aET, aEU), aEX())
	}
}

function cN() {
	var aEd, canvas, zB, aEe;

	function aEk(dx, name, aEl, pG) {
		zB[dx] = name, canvas[dx] = new Image, canvas[dx].onload = function() {
			! function(dx, aEl) {
				var a2k, a2l = null;
				7 === aEl ? a2k = b8.a1A.a2n : 8 === aEl ? (a2k = b8.a1A.a2q, a2l = .1) : 3 === aEl ? (a2k = b8.a1A.a2o, a2l = .06) : 5 === aEl ? a2k = b8.a1A.a2r : 6 === aEl ? a2k = b8.a1A.a2m : 4 === aEl && (a2k = b8.a1A.a2s);
				canvas[dx] = b8.a1A.a2j(canvas[dx], a2k, a2l)
			}(dx, aEl), aEn()
		}, canvas[dx].onerror = function(e) {
			console.error("Error loading image at index", dx, "Error:", e), aEn()
		}, canvas[dx].src = "data:image/png;base64," + pG
	}

	function aEn() {
		aEd--, aEh()
	}

	function aEh() {
		0 === aEd && (aEd = -1, aEj(), bd.dc = !0, canvas[7] = aEe, canvas[8] = aEe, canvas[9] = aEe, canvas[10] = aEe, 5 === s.ro) && s.aDJ().aEp.resize()
	}

	function aEj() {
		aK.a3w(), bW.aAy([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vX = new xN, ai.vX.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aEd = 23, canvas = new Array(aEd), zB = new Array(aEd), (aEe = document.createElement("canvas")).width = 1;
			for (var aA = aEd - (aEe.height = 1); 0 <= aA; aA--) canvas[aA] = aEe;
			aEj(), aEk(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEk(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEk(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEk(3, "orders", 6,
					"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"
					), aEk(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aEk(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEk(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7baaqvsBAAAqqlhw4bxhz/8Ie6+++7o0KFDdg5FarPNNovnnnsuBgwYkJ0C8L0aNmwYjz32WOy+++7ZKdSiioqKuOmmm+Lwww/PTgEAAAAAAAAAoI4w3AMAAAAAAAAAALXsN7/5Tbz99tvZGSxGq1at4vTTT09t6NmzZ2y99dapDfyf999/P4YPH56dAcAy6tWrV6y99trZGSyBf/7zn3HqqadmZ1CLTj311HjrrbeyM/geG2+8cXYCAADVsNVWW8U//vGPOOyww6JBgwbZORS58vLyOO+88+Lxxx+Ptm3bZucA/Ffjxo3j2Wefjd69e2enkKBJkyZxzTXXRL9+/bJTAAAAAAAAAACoAwz3AAAAAAAAAABAgosuuig7gWo49NBDo7Q072VWp5xySpSVlaXdn//nggsuiKqqquwMAJbRfvvtl53AEvj666/j5JNP9hhcZKqqquLUU0+NysrK7BS+o2XLlrHVVltlZwAAsAjDhw+PRx55JNZbb73sFPiWbbfdNl5++eXYe++9s1MAomHDhvHoo4/GZpttlp1CokaNGsWll15qvAcAAAAAAAAAAMM9AAAAAAAAAACQ4YYbboixY8dmZ7AYa665Zhx33HEp9+7SpUvssMMOKffm28aMGRPXX399dgYANaBnz57ZCSyBW2+9NZ544onsDBKMGjUq7r333uwMvsdOO+2UnQAAwPdo2bJlPPbYYzF06NBo0qRJdg58r7Zt28btt98el156aXYKUMQaNmwYTzzxhHFiIsJ4DwAAAAAAAAAA/8dwDwAAAAAAAAAAJDn33HNj/vz52RksRt++fVPue/rpp8cKK6yQcm/+n6qqqhg2bFh2BgA1oHPnzvGjH/0oO4Nq+vTTT+OUU07JziDRKaecEtOnT8/O4Dt+/OMfZycAAPAd2223Xbz88sux3XbbZafAYjVo0CCOP/74eOqpp6Jt27bZOUCRKS0tjYceeshoD9/SqFGjuPjii+Oggw7KTgEAAAAAAAAAIInhHgAAAAAAAAAASHLffffFc889l53BYmywwQa1fkhPu3btYrfddqvVe/L9HnvssXjkkUeyMwCoAQcccECUlJRkZ1BNF198sdGWIjdx4sS49tprszP4jq5du2YnAACwkFNPPTUefPDBWHPNNbNTYIn87Gc/ixdffDF69+6dnQIUkVtuuSW233777AzqoCZNmsRVV10VO+64Y3YKAAAAAAAAAAAJDPcAAAAAAAAAAECis88+OyorK7MzWIz+/fvX6v0GDx4czZs3r9V78r/mzJkTQ4YMyc4AoIb06tUrO4Fqev311+Oiiy7KzqAOGDJkSLz//vvZGSykdevWsckmm2RnAAAUvdLS0rjpppvi/PPPj8aNG2fnwFJZY4014v77749+/fplpwBF4LLLLos+ffpkZ1CHrbjiinHTTTfFxhtvnJ0CAAAAAAAAAEAtM9wDAAAAAAAAAACJ/vKXv8Sjjz6ancFibLrpprHTTjvVyr3Ky8tjn332qZV7sWgjR46M1157LTsDgBpQXl7usL16orKy0nAe/1VZWRlXXHFFdgbfsd1222UnAAAUtTZt2sTzzz8fhxxySJSUlGTnwDJp3rx5XHHFFXHJJZdkpwAF7Pjjj49jjz02O4N6oFWrVjFy5Mho2bJldgoAAAAAAAAAALXIcA8AAAAAAAAAACQbPnx4zJ07NzuDRSgpKYkTTzyxVu41aNCgWGWVVWrlXvywzz//PE4//fTsDABqyAEHHBCNGzfOzqAannjiiXj44YezM6hDLrvsshg/fnx2Bgv58Y9/nJ0AAFC0Ntlkk3j++edj8803z06BGlNWVhYnnHBC3HvvvVFa6q3vQM3aZZdd4rzzzjN2R7V17NjRYxIAAAAAAAAAQJHxShEAAAAAAAAAAEg2ZsyYuP/++7MzWIxtttkmevTosVzvUVZWFgcddNByvQfVc8MNN8SkSZOyMwCoIdtuu212AtUwb968OPvss7MzqIMuv/zy7AQW0qVLl+wEAICitMcee8QjjzwSHTp0yE6B5WLPPfeM5557Llq0aJGdAhSITp06xQ033BBNmjTJTqGe6dmzZ1x77bXZGQAAAAAAAAAA1BLDPQAAAAAAAAAAUAecccYZMXPmzOwMFqGsrCwGDBiwXO8xYMCAaNu27XK9B4v34YcfxqBBg7IzAKhBm2yySXYC1fDII4/Eiy++mJ1BHXTdddfFuHHjsjNYoEOHDtGsWbPsDACAotK3b9+47bbbDJpQ8LbYYot45plnDFQBy6y0tDRuu+22aN26dXYK9dQvf/nLOOaYY7IzAAAAAAAAAACoBYZ7AAAAAAAAAACgDnj33Xfj9ttvz85gMXbeeefo1KnTcrv+4YcfvtyuTfVdcsklUVlZmZ0BQA3p0aNHtG/fPjuDxZg7d24MGTIkO4M67IYbbshOYIEGDRrELrvskp0BAFA0Bg4cGFdffXU0adIkOwVqRefOnePJJ5+Mrl27ZqcA9dgNN9wQPXr0yM6gHispKYlzzz03Nt544+wUAAAAAAAAAACWM8M9AAAAAAAAAABQRwwdOjSmTZuWncEiNG7cOAYNGrRcrt2/f//o2LHjcrk21ff666/HZZddlp0BQA36xS9+kZ1ANTzwwAMxbty47AzqsCuvvDI++OCD7AwW6N69e3YCAEBROP/882PEiBHRoEGD7BSoVWuttVY89thjscUWW2SnAPXQYYcdFoccckh2BgWgvLw8/vCHP0RpqaNZAAAAAAAAAAAKmVeHAAAAAAAAAABAHTFlypT4/e9/n53BYuy1117RsmXLGr/ukUceWePXZMnMnz8/zj777OwMAGrYlltumZ3AYnz99ddxzjnnZGdQx1VVVcUf//jH7AwW6NKlS3YCAEDBu+SSS+K0006LkpKS7BRI0aZNm7jvvvuM9wBLpEOHDnHhhRcaWqHGdOvWLa688srsDAAAAAAAAAAAliOvNgIAAAAAAAAAgDpk2LBh8cknn2RnsAjl5eUxaNCgGr1mnz59YsMNN6zRa7Lk/vrXv8Z9992XnQFADSotLY1u3bplZ7AYjz/+eIwbNy47g3rgwgsvjOnTp2dnEBHrrLNOdgIAQEG74YYb4oQTTsjOgHStW7eO++67L7bddtvsFKCeuPHGG2PVVVfNzqDA9O3bN/baa6/sDAAAAAAAAAAAlhPDPQAAAAAAAAAAUIfMmTMnrrrqquwMFqNPnz7RuHHjGrvescceW2PXYunMmzcvzjjjjOwMAGrYbrvtFiuuuGJ2BotQVVUVv/nNb7IzqCdmzZoVDz/8cHYGEbHmmmtGWVlZdgYAQEG64YYb4pe//GV2BtQZrVu3jttvvz222GKL7BSgjhs8eHD89Kc/zc6gADVo0CAuvfTSqKioyE4BAAAAAAAAAGA5MNwDAAAAAAAAAAB1zAUXXBDvvfdedgaL0KpVqxgwYECNXGvHHXeMzTffvEauxdK7995748UXX8zOAKCGbbfddtkJLMbzzz8fzz33XHYG9ciVV14ZVVVV2RlFr1GjRrHNNttkZwAAFJxrr73WaA98j1VXXTXuu+++6N69e3YKUEd17tw5TjnllOwMCli7du3i8ssvz84AAAAAAAAAAGA5MNwDAAAAAAAAAAB1TFVVVVx88cXZGSzGoYceWiPXOfnkk6OkpKRGrsXSmTFjRgwaNCg7A4DloEePHtkJLIaDDllSo0ePjldeeSU7g4jYZJNNshMAAArKJZdcEkceeWR2BtRZrVu3jvvvvz86d+6cnQLUQVdffXWstNJK2RkUuP333z922WWX7AwAAAAAAAAAAGqY4R4AAAAAAAAAAKiDfve738Xrr7+encEirLXWWnH88ccv0zW22GKL6NWrVw0VsbRuvvnmmDBhQnYGADWsYcOGscEGG2RnsAj//Oc/47777svOoB669957sxOIiB/96EfZCQAABeOss86KE044ITsD6rw11lgj7r///mjTpk12ClCHHHvssbHVVltlZ1AEGjRoEBdddFGUljqqBQAAAAAAAACgkHg1CAAAAAAAAAAA1FHnn39+dgKL0bdv32X6+lNPPTXKyspqqIal8Z///CcGDBiQnQHAcrD33ntHkyZNsjNYhLvuuis7gXrqmmuuiRkzZmRnFL2OHTtmJwAAFIRTTjklBg4cmJ0B9cY666wTo0aNisaNG2enAHVARUVFDBo0KDuDIrLeeuvFRRddlJ0BAAAAAAAAAEANMtwDAAAAAAAAAAB11F133RUvvPBCdgaL0KVLlzjwwAOX6mvXX3/92GmnnWq4iCV1+eWXx5w5c7IzAFgOevbsmZ3AIkyfPj0uueSS7AzqqVmzZsUzzzyTnVH0Vl999ewEAIB677DDDosRI0YYeIcl1L179/jTn/6UnQHUAZdeemm0adMmO4Mic+SRR8a6666bnQEAAAAAAAAAQA0x3AMAAAAAAAAAAHXY8OHDo6qqKjuDRejfv/9Sfd3AgQNjhRVWqOEalsSbb74ZF1xwQXYGAMvJxhtvnJ3AIvz5z3+OWbNmZWdQj915553ZCUVvtdVWc8A8AMAy2GGHHeLyyy+PRo0aZadAvbTtttvG9ddfn50BJNpss81i//33z86gCDVr1szzzAAAAAAAAAAABcRwDwAAAAAAAAAA1GFPPPFEPPHEE9kZLMJmm20WO+644xJ9Tdu2bWPPPfdcTkVU14gRI7ITAFiOOnfunJ3AD6iqqoqrr746O4N67o477ojPPvssO6OoNWzYMH7yk59kZwAA1Etdu3aNm2++OZo3b56dAvXaEUccEYMHD87OAJKce+65BvBIs+uuu8Z2222XnQEAAAAAAAAAQA0w3AMAAAAAAAAAAHXcGWecEfPmzcvO4AeUlJTESSedtERfM2jQIAcyJnv++efj9ttvz84AYDnZcccdo7y8PDuDHzB27Nh44YUXsjMoAM8991x2QtHr1q1bdgIAQL1TUVERd999d7Rq1So7BQrC0KFDY++9987OAGrZvvvuG1tvvXV2BkWsrKwszjrrrOwMAAAAAAAAAABqgOEeAAAAAAAAAACo41555ZV48MEHszNYhG222SZ69OhRrc8tLy+P/fbbbzkXsSiVlZVxxhlnZGcAsBz16tUrO4FFeOCBB7ITKBCjRo3KTih6HTt2zE4AAKh37r333lh33XWzM6BgNGrUKK6++uro2rVrdgpQi04//fQoKSnJzqDIbbbZZtG3b9/sDAAAAAAAAAAAlpHhHgAAAAAAAAAAqAcGDRoUs2fPzs7gB5SVlcWAAQOq9bkDBw6MFi1aLOciFuVPf/pTPP3009kZACxH3bp1y07gB8yePTuuvvrq7AwKxB//+Mf44osvsjOKWrt27bITAADqlWuvvdbYLCwHq666atx+++3RuHHj7BSgFhx55JGx0UYbZWdARESceOKJ2QkAAAAAAAAAACwjwz0AAAAAAAAAAFAPvPvuu3HnnXdmZ7AIO++8c3Tq1GmRn1NWVhYHHXRQLRXxfWbPnh0DBw7MzgBgOevcuXN2Aj/g2WefjenTp2dnUCAqKytj7Nix2RlFbbXVVstOAACoN4499tjo27dvdgYUrA022CBuvfXW7AygFpxwwgnZCfBfnTt3jqOOOio7AwAAAAAAAACAZWC4BwAAAAAAAAAA6omBAwc65LwOa9y4cQwaNGiRn3PqqafG6quvXktFfJ9bb7013n777ewMAJaj9u3be7ytw0aOHJmdQIF57rnnshOKmuEeAIDq+elPfxrnnntulJSUZKdAQdtrr73itNNOy84AlqOjjjrKcDt1zvHHH5+dAAAAAAAAAADAMjDcAwAAAAAAAAAA9cSUKVPixhtvzM5gEfbcc89o2bLlD/73ww8/vBZr+K4pU6Y4sA+gCOy6664OQq6jPv300/jjH/+YnUGBueeee2L+/PnZGUVr1VVXzU4AAKjzWrRoETfeeGM0b948OwWKwhlnnBFbb711dgawnPzqV7/KToD/0blz5zjqqKOyMwAAAAAAAAAAWEqGewAAAAAAAAAAoB4ZPHhwfPrpp9kZ/ICVVlopBg4c+L3/7eijj4511lmnlotY2NVXXx0zZszIzgBgOdtkk02yE/gBTz/9dFRVVWVnUGDGjRsX77//fnZG0WrevPkix0sBAIi4+eabo0OHDtkZUDSaNm0av/vd76Jx48bZKUAN69OnT3Tr1i07A77Xsccem50AAAAAAAAAAMBSMtwDAAAAAAAAAAD1yJw5c+Kaa67JzmAR+vTpE+uvv3506tTpWx/9+vXLTitq7733Xpx99tnZGQDUgg022CA7gR/wwAMPZCdQoP7xj39kJxS1jTbaKDsBAKDOGjx4cOy8887ZGVB01l133fjDH/6QnQHUMMMo1GVdunSJvffeOzsDAAAAAAAAAIClYLgHAAAAAAAAAADqmREjRsSECROyM/gBrVu3jvHjx8fbb7/9rY9u3bplpxW1888/P6qqqrIzAKgFHTp0yE7ge3z22Wdx1113ZWdQoEaPHp2dUNTWXnvt7AQAgDqpV69eMWjQoOwMKFr77bdfHHHEEdkZQA3p2bNnbLbZZtkZsEj9+vXLTgAAAAAAAAAAYCkY7gEAAAAAAAAAgHqmqqoqLrnkkuwMqDdefvnl+P3vf5+dAUAt6Nq1a7Ro0SI7g+/x3HPPZSdQwEaNGpWdUNRWX3317AQAgDqnYcOGcc0110STJk2yU6BolZSUxLnnnhvt2rXLTgFqwHHHHRelpY7HoG7baqutYuONN87OAAAAAAAAAABgCXllEgAAAAAAAAAA1ENXXHFF/POf/8zOgDqvqqoqzjzzzOwMAGrJNttsk53AD3j44YezEyhg48ePj4kTJ2ZnFK02bdpkJwAA1DnXX399rLvuutkZUPRatmwZ1113XXYGsIzatGkTO++8c3YGLFaDBg3i5JNPzs4AAAAAAAAAAGAJGe4BAAAAAAAAAIB66oILLshOgDrv0UcfjUcffTQ7A4BastFGG2Un8D2mT58eN998c3YGBe6tt97KTihaK6+8cnYCAECdcsABB8SBBx6YnQEssOOOO8Zxxx2XnQEsgxNOOCGaNWuWnQHV8vOf/zzKy8uzMwAAAAAAAAAAWAKGewAAAAAAAAAAoJ669dZbY/To0dkZUGfNmTMnBg8enJ0BQC1ab731shP4Hq+++mpUVlZmZ1Dgxo8fn51QtAz3AAD8Py1atIgLL7wwysrKslOAhQwdOjTatWuXnQEspT322CM7AaqtvLw8TjjhhOwMAAAAAAAAAACWgOEeAAAAAAAAAACox0aMGBFVVVXZGVAn3XXXXfH6669nZwBQizp06JCdwPd4+umnsxMoAmPGjMlOKFqGewAA/p9rr7022rZtm50BfMeqq64aV155ZXYGsBR22mkng+3UO3vuuWd2AgAAAAAAAAAAS8BwDwAAAAAAAAAA1GMPP/xwPPXUU9kZUOdMmzYtTjvttOwMAGpRu3btolWrVtkZfMf8+fPjrrvuys6gCDz66KNGTZOUl5dnJwAA1Al9+vSJPfbYIzsD+AE///nP48ADD8zOAJbQEUcckZ0AS6xbt26x5ZZbZmcAAAAAAAAAAFBNhnsAAAAAAAAAAKCeGz58eMybNy87A+qU66+/PqZMmZKdAUAt2mabbbIT+B5vv/12vPvuu9kZFIEpU6bEpEmTsjOKUvPmzbMTAADSNWvWLC644IIoLfW2XairSkpK4uyzz46GDRtmpwDVVFZWFr169crOgCVWUlISRx55ZHYGAAAAAAAAAADV5BXAAAAAAAAAAABQzz3//PMxatSo7AyoMz788MMYMmRIdgYAtWzDDTfMTuB7vPTSS9kJFJGPPvooO6EoNW3aNDsBACDdFVdcEe3atcvOABZjrbXWiosuuig7A6imvn37xsorr5ydAUtlp512MuoIAAAAAAAAAFBPeJUHAAAAAAAAAAAUgGHDhsXs2bOzM6BOuOiii6KysjI7A4Batu6662Yn8D0ef/zx7ASKyIQJE7ITilKzZs2yEwAAUvXu3TsOPPDA7Aygmo444ojYeOONszOAathzzz2zE2CptWrVKg4//PDsDAAAAAAAAAAAqsFwDwAAAAAAAAAAFIBx48bFPffck50B6f7+97/HlVdemZ0BQIIOHTpkJ/Ads2bNipEjR2ZnUETee++97ISiVFZWFm3atMnOAABIc9FFF0XDhg2zM4Bqatq0aVx44YXZGcB3XHfddTF58uRvffTu3Ts7C5bJ7rvvnp0AAAAAAAAAAEA1GO4BAAAAAAAAAIACMWTIkPjiiy+yMyDN/Pnz4+yzz87OACBJ+/btsxP4jn/9619RWVmZnUEReeONN7ITila7du2yEwAAUpx++unRrVu37AxgCW2zzTaxzz77ZGcAC6moqIhVV131Wx9lZWXZWbBMevbs6f9jAAAAAAAAAIB6wHAPAAAAAAAAAAAUiIkTJ8Yf//jH7AxI85e//CXuv//+7AwAEnTt2jWaN2+encF3vPbaa9kJFJl//vOf2QlFq2nTptkJAAC1rmXLlnHSSSdlZwBLoaSkJIYNG5adAUCBq6ioiMMOOyw7AwAAAAAAAACAxTDcAwAAAAAAAAAABWTo0KExefLk7AyodV9//XUMHTo0OwOAJJtttll2At/j6aefzk6gyIwbNy7mzp2bnVGUWrVqlZ0AAFDrLr744mjZsmV2BrCUOnfuHAMGDMjOAKDA7b777tkJAAAAAAAAAAAshuEeAAAAAAAAAAAoIDNmzIjrr78+OwNq3b333hujR4/OzgAgyfrrr5+dwHfMnTs37r///uwMitCUKVOyE4pS48aNsxMAAGrVZpttFvvuu292BrCMjj32WD/PALBc9ezZM8rKyrIzAAAAAAAAAABYBMM9AAAAAAAAAABQYM4888z48MMPszOg1syYMSMGDhyYnQFAoo4dO2Yn8B3/+te/Ys6cOdkZFCHDPTmaNm2anQAAUKvOOeecaNSoUXYGsIxWX331GD58eHYGAAWsoqIi+vTpk50BAAAAAAAAAMAiNMgOAAAAAAAAAAAAalZlZWVcfvnlcdFFF2WnQK248cYbjVUBFLk111wzO4HveP3117MTKFK77LJLNG/ePDuj6EycODE7AQCg1uyzzz7Rq1ev7AyghhxxxBFx0UUXGYIFYLnZYYcd4tZbb83OAAAAAAAAAADgBxjuAQAAAAAAAACAAvTb3/42+vbtG+uvv352CixXn3zySQwcODA7A4Bkq6++enYC3/Hqq69mJ1CkJk2alJ0AAECBGzJkSJSUlGRnADVklVVWiTPPPDP69++fnQJAgdpss82yEwAAAAAAAAAAWITS7AAAAAAAAAAAAGD5+M1vfpOdAMvdpZdeGnPmzMnOACBRs2bNYtVVV83O4Dsef/zx7AQAAIAa169fv+jatWt2BlDD+vTpEy1btszOAKBAdezYMbp06ZKdAQAAAAAAAADADzDcAwAAAAAAAAAABerGG2+MMWPGZGfAcjN+/Pi46KKLsjMASLbllltGSUlJdgYLmTRpUrz99tvZGQAAADXupJNOyk4AloOKioo488wzszMAKFAlJSWx3377ZWcAAAAAAAAAAPADDPcAAAAAAAAAAEABO+ecc2L+/PnZGbBcnHPOOdkJANQBXbt2zU7gO4z2AAAAhWjAgAGxzjrrZGcAy0mfPn2iRYsW2RkAFKiePXtmJwAAAAAAAAAA8AMM9wAAAAAAAAAAQAF78MEH45lnnsnOgBr33HPPxR133JGdAUAd0KFDh+wEvuONN97ITgAAAKhRpaWlcfTRR2dnAMtRRUVFDB48ODsDgAK10UYbZScAAAAAAAAAAPADDPcAAAAAAAAAAECBO/PMM6OysjI7A2rMN998E0OHDs3OAKCOWGONNbIT+I5XXnklOwEAAKBGnXrqqbHWWmtlZwDLWZ8+faJx48bZGQAUoJVWWil23HHH7AwAAAAAAAAAAL6H4R4AAAAAAAAAAChwzz77bPz5z3/OzoAa89BDD8Wzzz6bnQFAHdG2bdvsBBYyf/78ePLJJ7MzAAAAakxpaWkcffTR2RnUgsrKypg+fXr85z//iQ8++OBbH5MmTYovvvgiKisrszNZjlq3bh0DBgzIzgCgQG2zzTbZCQAAAAAAAAAAfI8G2QEAAAAAAAAAAMDyd8YZZ8T2228fK6ywQnYKLJNZs2Y5NA+Ab2ndunV2AguZPHlyfPLJJ9kZAAAANeaEE06ItdZaKzuDGlJZWRkfffRRvPfee/H222/HhAkT4u2334433ngj3n///Wpdo0OHDtG1a9fo1KlTrLXWWrHOOutEhw4don379tGoUaPl/CdgeTv44INj+PDh2RkAFKAePXpkJwAAAAAAAAAA8D0M9wAAAAAAAAAAQBF4/fXX4957740DDjggOwWWyS233BLvvvtudgYAdUjLli2zE1jIhAkTshMAAABq1JFHHpmdwDKYP39+vPvuu/Hyyy/Hc889F/fff39MmTJlma75/vvvf+/IT3l5eey+++7Rs2fP2GKLLeJHP/pRlJWVLdO9qH0dOnSIvn37xg033JCdAkCB2WCDDbITAAAAAAAAAAD4HqXZAQAAAAAAAAAAQO0YNGhQzJw5MzsDltrkyZPj9NNPz84AoA5Zf/31Y4UVVsjOYCHvvfdedgIAAECNOeyww2L99dfPzmApjB8/Pi6++OLYZJNNYr311ouDDz44rrvuumUe7VmUGTNmxC233BJHH310bLjhhtGxY8cYPnx4vPLKK1FZWbnc7kvNO+KII7ITAChAq666amy11VbZGQAAAAAAAAAAfIfhHgAAAAAAAAAAKBIffvhh3HLLLdkZsNSuuuqqmDFjRnYGAHXIhhtumJ3Ad/zrX//KTgAAAKgxv/rVr7ITWAJffvlljBw5Mrbeeuvo0qVLnHrqqfHaa6+l9Xz44YcxfPjw2GyzzaJbt25x/fXXx+TJk9N6qL5NN900tt566+wMAApQr169shMAAAAAAAAAAPgOwz0AAAAAAAAAAFBEBg8eHFOnTs3OgCX2zjvvxDnnnJOdAUAd07Fjx+wEvmPMmDHZCQAAADVixx13jE022SQ7g2qYMmVKXHrppdGhQ4fYf//949lnn81O+h/jx4+Po48+OlZfffUYNGhQTJgwITuJRSgpKYn+/ftnZwBQgLp165adAAAAAAAAAADAdxjuAQAAAAAAAACAIjJ9+vS44YYbsjNgiV1wwQVRVVWVnQFAHbP66qtnJ7CQefPmxV//+tfsDAAAgBpx7LHHRklJSXYGizB9+vS48MILY80114yTTz45pk6dmp20WJWVlXH++edHp06dYvDgwTFp0qTsJH7ADjvsEBUVFdkZABSY9dZbLzsBAAAAAAAAAIDvMNwDAAAAAAAAAABFZsiQITFx4sTsDKi20aNHxx/+8IfsDADqoNatW2cnsJBJkybFvHnzsjMAAACW2brrrhu9e/fOzuAHfPPNN3H77bdHly5d4vTTT485c+ZkJy2xqqqqOO+882L99deP3/3udzF37tzsJL6jefPmceqpp2ZnAFBg1l577SgrK8vOAAAAAAAAAABgIYZ7AAAAAAAAAACgyFRWVsZVV12VnQHVUllZGWeeeWZ2BgB1lOGeuuWTTz7JTgAAAKgRv/71r2OFFVbIzuB7jB8/Pn7+85/HQQcdVBA/h86YMSOOOeaY2G677eK1117LzuE79tprr+wEAApM48aNY+edd87OAAAAAAAAAABgIYZ7AAAAAAAAAACgCF1wwQXxzjvvZGfAYj366KPx2GOPZWcAUEetssoq2Qks5MMPP8xOAAAAWGZlZWWx++67Z2fwHd98801cddVVseGGGxbk74yff/75+PGPfxxXXHFFfPPNN9k5LLDeeuvFTjvtlJ0BQIHZfPPNsxMAAAAAAAAAAFiI4R4AAAAAAAAAAChSF110UXYCLNJXX30VgwYNys4AoA4z3FO3TJgwITsBAABgmR1//PHRqlWr7AwW8sknn8R+++0Xxx13XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2jdGjR2dnAFBPLrjgghgzZkx2BtAIJk6cGMcdd1x2BgAADaCqqiqOPvromD9/fnYKFK0XXnghjjrqqOwMAICCMnz48Fi5cmV2BgAAAAAAAACkM9wDAAAAAAAAAECzMXDgwOwEarBw4cIYMmRIdgYbYOTIkTF37tzsDOrg6KOPjj322CM7A4B6Mnjw4Bg3blx2BtCAHn/88Tj00EOzMwAAaEBz586NPn36xIoVK7JToOgsWLAgfvzjH8eqVauyUwAACsrs2bPj3nvvzc4AAAAAAAAAgHSGewAAAAAAAAAAaBZOP/302G233bIzqMHvfvc7BxI2UdXV1XHttddmZ1AHrVq1ilGjRmVnAFCPfv3rX/v3GJqpKVOmxMEHHxzV1dXZKQAANLBHHnkkBgwYEFVVVdkpUDRWrlwZffr0iVdffTU7BQCgIA0cODDef//97AwAAAAAAAAASGW4BwAAAAAAAACAJq+0tDTOOOOM7Axq8O6770ZFRUV2Bhth7Nix8dprr2VnUAe9evWKnj17ZmcAUI9OO+20+N3vfpedAdSjKVOmxEEHHRRr1qzJTgEAoJFcf/31MXbs2OwMKApr166NX/3qVzFx4sTsFACAgrVgwYL4zW9+k50BAAAAAAAAAKkM9wAAAAAAAAAA0OQNHDgwOnXqlJ1BDa6++uqoqqrKzmAjXXXVVdkJ1EFZWVkMHTo0OwOAenbyyScb74FmwmgPAEDxGjx4cNx8883ZGdCsrVu3LoYNGxbjx4/PTgEAKHhjxoyJmTNnZmcAAAAAAAAAQBrDPQAAAAAAAAAANGllZWXRt2/f7AxqMHfu3Bg7dmx2BvXg8ssvj9mzZ2dnUAf77bdfHHvssdkZANSzk08+OW644YbsDGAjGO0BAODnP/95PPTQQ9kZ0GxdeumlMXr06OwMAIAmY+DAgfHJJ59kZwAAAAAAAABACsM9AAAAAAAAAAA0aSNHjowddtghO4MajBs3Lqqrq7MzqCfjxo3LTqCOzj333OwEABrAKaec4t9laKIeffRRoz0AAERExBFHHBFPP/10dgY0O9ddd12cffbZ2RkAAE3KpEmT4pprrsnOAAAAAAAAAIAUhnsAAAAAAAAAAGiyysvLo3fv3tkZ1GDOnDkOlG9mrr/++pg5c2Z2BnWw++67x4ABA7IzAGgAv/71r2Ps2LGxbt267BSglu655544+OCDjfYAABAREVVVVXHIIYfEc889l50Czcbvfve7OPXUU7MzAACapAEDBsTzzz+fnQEAAAAAAAAAjc5wDwAAAAAAAAAATdaIESOiffv22RnU4LLLLstOoAFceuml2QnUUf/+/aOsrCw7A4AGcO6558b5558fVVVV2SnAF/j9738fP/7xj6O6ujo7BQCAArJs2bL43ve+Fy+++GJ2CjR5t9xyS5x88snZGQAATVZ1dXWceuqpsXz58uwUAAAAAAAAAGhUhnsAAAAAAAAAAGiS2rVrFyeccEJ2BjWYOXNmXHfdddkZNIBbb701pk+fnp1BHey0005RWVmZnQFAA7ngggvi9NNPj1WrVmWnAOtRXV0dF154YfTp0yc7BQCAArV06VLjPbCRbrrppjjxxBOzMwAAmrxnn302hg8fnp0BAAAAAAAAAI3KcA8AAAAAAAAAAE3S6NGjo23bttkZ1ODiiy/OTqABXXzxxbFu3brsDOrglFNOiXbt2mVnANBArrnmmvj5z38eS5cuzU4BPuWTTz6Js846KwYNGpSdAgBAgVuwYIHxHthAN9xwQ5x00knZGQAAzcYll1wS//3f/52dAQAAAAAAAACNxnAPAAAAAAAAAABNTufOneOYY47JzqAG06dPj9tuuy07gwZ09913x9NPP52dQR1stdVWMXr06OwMABrQnXfeGYcddli8++672SlARHz44Ydx0kknxWWXXZadAgBAE/H/H+95/vnns1OgSVi3bl1cdNFFccopp2SnAAA0O8cff3w8++yz2RkAAAAAAAAA0CgM9wAAAAAAAAAA0OQMGzYs2rRpk53Beqxbty5GjRqVnUEjGDt2bFRXV2dnUAc//elPY9ddd83OAKABPfXUU3HAAQfE7Nmzs1OgqL3zzjvxwx/+MG6//fbsFAAAmpgFCxbEAQccEM8880x2ChS0Tz75JM4555w455xzslMAAJqlqqqqOPLII2Pu3LnZKQAAAAAAAADQ4Az3AAAAAAAAAADQpHTp0iWOPPLI7Axq8NRTT8Uf/vCH7AwawcMPPxyTJ0/OzqAOWrdubVgLoAi8/vrr0a1bt5g0aVJ2ChSlv/3tb9GjR4946qmnslMAAGiili1bFj169IjHHnssOwUK0vLly+PUU0+Niy++ODsFAKBZmzdvXhx99NHx/vvvZ6cAAAAAAAAAQIMy3AMAAAAAAAAAQJNSWVkZLVu2zM5gPaqrq6OysjI7g0Y0ZsyYqKqqys6gDg499NDo0aNHdgYADWzZsmXxve99L6655ppYt25ddg4Ujfvuuy+6desW77zzTnYKAABN3Jo1a6JXr15x5513ZqdAQXn//ffjmGOOiRtvvDE7BQCgKDz33HNx7LHHxgcffJCdAgAAAAAAAAANxnAPAAAAAAAAAABNRvfu3aNXr17ZGdRg0qRJMWnSpOwMGtHjjz8ejz32WHYGdbDJJpvE8OHDszMAaCT/9V//Fb/+9a9j5cqV2SnQrH3yyScxcuTIOPLII2PNmjXZOQAANBPV1dXxk5/8JH7zm98YZYWImDNnTnz/+9+PiRMnZqcAABSVSZMmRZ8+feKjjz7KTgEAAAAAAACABmG4BwAAAAAAAACAJmPw4MHRokWL7AzWY+3atVFZWZmdQYLKykqHkzcxPXr0iKOOOio7A4BGcvnll8cRRxwRf//737NToFlatGhR/OxnP4uhQ4dmpwAA0EydeeaZMWDAgFi1alV2CqR55JFH4t///d/j+eefz04BAChK999/f5x44onxwQcfZKcAAAAAAAAAQL0z3AMAAAAAAAAAQJPQs2fP6NmzZ3YGNfjjH/8YU6dOzc4gwbRp02LixInZGdRBSUlJDB48ODsDgEb02GOPxb777ht//vOfs1OgWXnuuefiO9/5Ttx9993ZKQAANHPjxo2LY489NhYtWpSdAo2qqqoqLr/88ujVq1csW7YsOwcAoKjdf//9ccwxx8R7772XnQIAAAAAAAAA9cpwDwAAAAAAAAAATUJFRUWUlrrdpRCtXr06RowYkZ1BohEjRsTq1auzM6iDPffcM/r27ZudAUAjmj9/fhxwwAFxxRVXRFVVVXYONGnV1dUxfvz4+Pd///d49dVXs3MAACgS999/fxxwwAHx4osvZqdAo/jwww+jb9++8atf/So7BQCA/zVp0qQ4+OCDY+7cudkpAAAAAAAAAFBvnGQCAAAAAAAAAEDBO+qoo2K//fbLzqAGDz74YMyYMSM7g0QzZsyIBx98MDuDOjrzzDOjrKwsOwOARta/f//42c9+FgsXLsxOgSbp/fffj1/84hfxi1/8Iqqrq7NzAAAoMrNnz47/9//+n5/H0uzNmjUrvvvd78Z1112XnQIAwGfMmDEjunfvHtOnT89OAQAAAAAAAIB6YbgHAAAAAAAAAICCN3DgwCgpKcnOYD1WrlwZ559/fnYGBWDo0KGxcuXK7AzqoGPHjjF06NDsDAAS3HHHHfHtb387/vznP2enQJMybdq06N69e/zud7/LTgEAoIitWrUqDj/88BgyZEisWrUqOwfqVXV1dfz+97+Prl27xvPPP5+dAwBADebPnx/77bdfTJgwITsFAAAAAAAAADaa4R4AAAAAAAAAAAraCSecEF27ds3OoAZ33313vP7669kZFIA5c+bEfffdl51BHf3yl7+M8vLy7AwAErzzzjtxwAEHxJgxYxz0DF9g9erVcfHFF0f37t3j1Vdfzc4BAICIiBg1alQcdthh8c4772SnQL1YvHhxnHLKKdGnT5+oqqrKzgEA4AtUVVXF8ccfH2eeeWYsW7YsOwcAAAAAAAAANpjhHgAAAAAAAAAACtrAgQOzE6jB8uXLY/DgwdkZFJAhQ4bE8uXLszOog3bt2sXYsWOzMwBIdP7558fBBx8cs2fPzk6BgjRnzpzo1auX700BAChIjz32WHzzm9+MBx98MDsFNsoTTzwR++67b/z+97/PTgEAoI5+85vfxAEHHBDPP/98dgoAAAAAAAAAbBDDPQAAAAAAAAAAFKzTTz89dtttt+wManDrrbfGvHnzsjMoIHPnzo0777wzO4M6Ou6446Jz587ZGQAkmjx5cnzjG9+Ia6+9NtauXZudAwVh7dq1cf3118cee+wRkydPzs4BAIAaLV26NA4//PAYMGBAfPjhh9k5UCcffPBBnHXWWdGzZ894/fXXs3MAANhAzz//fOyzzz5x9dVX+10TAAAAAAAAAE2O4R4AAAAAAAAAAApSaWlpnHHGGdkZ1OCDDz6IoUOHZmdQgAYPHhxLly7NzqAO2rRpE5WVldkZACSrqqqK0047LY444oh47bXXsnMg1Zw5c+Kwww6LX/7yl1FVVZWdAwAAtXLZZZfFfvvtF3/5y1+yU6BWnnjiifj2t78dl156aXYKAAD1oLq6Ovr16xe9evWKWbNmZecAAAAAAAAAQK0Z7gEAAAAAAAAAoCANHDgwOnXqlJ1BDW666aZYtGhRdgYFaMGCBXH77bdnZ1BHRxxxROy7777ZGQAUgIcffjh22223uPrqq2P16tXZOdCoVq1aFVdccUXsscceMXHixOwcAACos9mzZ8d+++0XFRUV8dFHH2XnwHq99957MWDAgOjZs2e8/vrr2TkAANSzxx9/PPbaa68YPnx4fPjhh9k5AAAAAAAAAPCFDPcAAAAAAAAAAFBwysrKom/fvtkZ1GDhwoUxbNiw7AwK2Pnnnx+LFy/OzqAOWrRoEcOHD8/OAKBAVFVVRb9+/eJ73/tezJw5MzsHGsUzzzwTPXv2jP79+0dVVVV2DgAAbJTKysrYb7/94sknn8xOgX9au3Zt3HbbbbH77rvHZZddlp0DAEADGz58eHzrW9+Ke+65J9asWZOdAwAAAAAAAAA1MtwDAAAAAAAAAEDBGTlyZOywww7ZGdTg97//fSxbtiw7gwK2dOnSuOWWW7IzqKMDDzwwDjvssOwMAArIU089FXvvvXdUVFTEkiVLsnOgQbz33ntx1llnxb777hvTpk3LzgEAgHrz4osvxoEHHhinn356LFiwIDuHIjdjxozo1atX/OxnP4vFixdn5wAA0EjefPPN+PGPfxw9evSIxx57LKqrq7OTAAAAAAAAAOD/MNwDAAAAAAAAAEBBKS8vj969e2dnUIN33303hgwZkp1BE3DeeefFwoULszOog5KSkhg8eHB2BgAFqLKyMvbcc8+46667oqqqKjsH6sWaNWtiwoQJsccee8Sll16anQMAAA3mqquuit122y1+//vfxyeffJKdQ5GZP39+DBo0KLp27RqPP/54dg4AAEmeeeaZ+P73vx+HHXZYTJkyxYAPAAAAAAAAAAXFcA8AAAAAAAAAAAVlxIgR0b59++wMavDb3/7WYe3UyqpVq+LGG2/MzqCOvvWtb8XJJ5+cnQFAAZo/f34cc8wx8cMf/jBmzJiRnQMbZerUqXHggQfG8ccfH4sWLcrOAQCABrd06dLo06dPfPe7342pU6dm51AEli5dGpdeeml07tw5LrzwwuwcAAAKxMMPPxz7779/fPe7342HHnrIuCgAAAAAAAAABcFwDwAAAAAAAAAABaNdu3ZxwgknZGdQg7lz58YFF1yQnUETMnjw4Hj33XezM6ijc845J0pL3V4IwPpNnDgxunbtGqeffnq888472TlQJ6+99lqcfPLJ0aNHD4eVAwBQlKZNmxY9evSIn/3sZzFnzpzsHJqhVatWxc033xxdunSJs846K1atWpWdBABAAZoyZUr88Ic/jK5du8ZNN90U77//fnYSAAAAAAAAAEXMM+sBAAAAAAAAACgYo0eP/v+1d7+xVdZ3H8e/lH/lXynyR0qIg9IBxREKI0NhcwQnGsxmdInzwRxOnTP4ZBuJ0WWOEBY3DIpmGhCcLhIwmVnGpixTt2kIgjABp4XBWkFrQRhtaWsLBfrnfnLH3N6Zu2X38Nf293o9O9dJzvXJyXlwnZyT6x3FxcWpZ/AxHnnkkejs7Ew9gx6ko6Mj1q9fn3oG52nSpEnxwx/+MPUMALq5xx57LCZNmhSrVq2KkydPpp4D/9KxY8fiRz/6UZSXl8eTTz6Zeg4AACS3adOmmDZtWtxzzz3x3nvvpZ5DL3DmzJl49tln4wtf+ELccsstcfTo0dSTAADoASorK+Pb3/52lJSUxNKlS+O1116Ljo6O1LMAAAAAAAAAyIxwDwAAAAAAAAAA3UJZWVncdNNNqWfwMQ4ePBiPPPJI6hn0QD/5yU/inXfeST2D87RkyZIYMmRI6hkAdHMdHR1x9913x9SpU2PdunXR0tKSehJ8RH19fTz88MNRWloa999/vxApAAD8Lw888ECUlpbG8uXL49ixY6nn0AOdOnUqNm7cGDNnzoxvfOMbUVlZmXoSAAA9UEdHR6xevTrmzp0bc+bMibVr10ZVVVXqWQAAAAAAAABkQrgHAAAAAAAAAIBuYfny5SIR3djq1atTT6CH6uzsjLVr16aewXkaO3Zs3H///alnANBDnDhxIu6888743Oc+Fxs3boxTp06lnkTmGhsbY82aNTF16tT4wQ9+EG1tbaknAQBAt9XR0RHLly+P0tLSWLFiRdTW1qaeRA/Q3NwcTz31VFRUVMTNN98cBw4cSD0JAIBeYs+ePbFkyZKYMmVKXHHFFbF+/fo4dOhQ6lkAAAAAAAAA9GLCPQAAAAAAAAAAJDd9+vS44YYbUs/gY/z1r3+NdevWpZ5BD/bAAw9EVVVV6hmcp8WLF8f48eNTzwCgB6mpqYmbb745KioqYsOGDdHS0pJ6EplpaGiINWvWxJQpU+Kuu+6K+vr61JMAAKDHaGtri2XLlsWECRPi3nvvjerq6tST6IZqampi5cqVMWnSpLjtttt8TgAAuKC2bdsW3/3ud6OsrCxmz54dK1eujB07dsSpU6dSTwMAAAAAAACgFxHuAQAAAAAAAAAguRUrVsTAgQNTz+BjrFq1KvUEeoFHH3009QTOU1FRUfzsZz9LPQOAHqi6ujoWL14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aEk(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEk(8,
					"googleplay", 3,
					"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"
					), aEk(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEk(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEk(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEk(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEk(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEk(14, "bestPlayer", 5,
					"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"
					), aEk(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEk(16, "apple", 3,
					"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"
					), aEk(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEk(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEk(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEk(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEk(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEk(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dx) {
		return canvas[dx]
	}, this.aEN = function(name) {
		for (var aA = zB.length - 1; 0 <= aA; aA--)
			if (zB[aA] === name) return canvas[aA];
		return aEe
	}, this.sG = function() {
		return aEd <= 0
	}, this.aEg = function() {
		aEd = 0, aEh()
	}
}

function cO() {
	var aEs, aEt, aEu, aEv, aEw, aEx, aEy, aEz, aF0, aF1, aEq = [
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
		aEr = [
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

	function aF7(j6, mN) {
		for (var aA = j6; aA < mN; aA++) aEs[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEt[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEu[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100))
	}

	function aF6(j6, mN) {
		for (var colorsData = aC.data.colorsData, aA = j6; aA < mN; aA++) {
			var f2 = colorsData[aA];
			aEs[aA] = 4 * (f2 >> 12), aEt[aA] = 4 * (f2 >> 6 & 63), aEu[aA] = 4 * (63 & f2)
		}
	}

	function aFI(eE, aFK) {
		aAL[eE] = 0, aAL[eE + 1] = 0, aAL[eE + 2] = aFK, aAL[eE + 3] = 0, aFL(eE)
	}

	function aFL(eE) {
		var eh;
		bZ.mV || (eh = ab.x1(eE), eE = ab.x2(eE), bZ.mV = eh >= bY.aAK[0] && eh <= bY.aAK[2] && eE >= bY.aAK[1] && eE <= bY.aAK[3])
	}
	this.ec = new Int32Array(4), this.dV = function() {
		var ec = this.ec;
		ec[0] = -4 * bQ.el, ec[1] = 4, ec[2] = -ec[0], ec[3] = -ec[1]
	}, this.dU = function() {
		if (aEs = new Uint8Array(aC.eX), aEt = new Uint8Array(aC.eX), aEu = new Uint8Array(aC.eX), aEv = new Uint8Array(aC.eX), aEw = new Uint8Array(aC.eX), aEx = new Uint8Array(aC.eX), aEy = new Uint8Array(aC.eX), aEz = new Uint8Array(aC.eX),
			aF0 = new Uint8Array(aC.eX), aF1 = new Uint8Array(aC.eX), this.a6v = new Uint8Array(aC.eX), aC.hP)
			for (var a92 = be.a92, aA = aC.eX - 1; 0 <= aA; aA--) {
				var ev = a92[aA],
					kX = bJ.dj((aEr[ev][3] + 1) * aw.random(), aw.value(100));
				aEs[aA] = aEq[ev][0] + kX * aEr[ev][0], aEt[aA] = aEq[ev][1] + kX * aEr[ev][1], aEu[aA] = aEq[ev][2] + kX * aEr[ev][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aF6(0, aC.jp), aF7(aC.jp, aC.eX)) : aF7(0, aC.eX) : aF6(0, aC.eX);
		! function() {
			var aA, ed;
			for (aA = aC.eX - 1; 0 <= aA; aA--) ed = bJ.dj(aEs[aA] + aEt[aA] + aEu[aA], 3), aEs[aA] += aFD(ed - aEs[aA], 2), aEt[aA] += aFD(ed - aEt[aA], 2), aEu[aA] += aFD(ed - aEu[aA], 2), aEs[aA] -= aEs[aA] % 4, aEt[aA] -= aEt[aA] % 4, aEu[
				aA] -= aEu[aA] % 4
		}(),
		function() {
			for (var aA = aC.eX - 1; 0 <= aA; aA--) aEs[aA] += bJ.dj(aA, 128), aEt[aA] += bJ.dj(aA % 128, 32), aEu[aA] += bJ.dj(aA % 32, 8), aEv[aA] = aA % 8
		}(), this.aFA(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aEw[aA] = aEs[aA] < 32 ? aEs[aA] + 32 : aEs[aA] - 32, aEx[aA] = aEt[aA] < 32 ? aEt[aA] + 32 : aEt[aA] - 32, aEy[aA] = aEu[aA] < 32 ? aEu[aA] + 32 : aEu[aA] - 32
			}(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aEz[aA] = 235 < aEs[aA] ? aEs[aA] - 20 : aEs[aA] + 20, aF0[aA] = 235 < aEt[aA] ? aEt[aA] - 20 : aEt[aA] + 20, aF1[aA] = 235 < aEu[aA] ? aEu[aA] - 20 : aEu[aA] + 20
			}()
	}, this.a5u = function(player) {
		var g = bM.f9;
		return g[0] = aEs[player], g[1] = aEt[player], g[2] = aEu[player], g
	}, this.aFA = function() {
		for (var aA = aC.eX - 1; 0 <= aA; aA--) this.a6v[aA] = aEs[aA] + aEt[aA] + aEu[aA] < 280 ? 0 : 1
	}, this.x1 = function(eE) {
		return bJ.dj(eE, 4) % bQ.el
	}, this.x2 = function(eE) {
		return bJ.dj(eE, 4 * bQ.el)
	}, this.wb = function(eh, ej) {
		return Math.floor(4 * (ej * bQ.el + eh))
	}, this.wr = function(eE) {
		var ec = this.ec;
		return this.aFE(eE + ec[0]) || this.aFE(eE + ec[1]) || this.aFE(eE + ec[2]) || this.aFE(eE + ec[3])
	}, this.ez = function(eE) {
		var ec = this.ec;
		return this.ef(eE + ec[0]) || this.ef(eE + ec[1]) || this.ef(eE + ec[2]) || this.ef(eE + ec[3])
	}, this.wp = function(eE, player) {
		var ec = this.ec;
		return this.aFF(eE + ec[0], player) || this.aFF(eE + ec[1], player) || this.aFF(eE + ec[2], player) || this.aFF(eE + ec[3], player)
	}, this.g9 = function(eE) {
		return 208 <= aAL[eE + 3]
	}, this.ww = function(player, eE) {
		return this.g9(eE) && this.aFG(player, eE)
	}, this.aFG = function(player, eE) {
		return player === this.eS(eE)
	}, this.aFH = function(eE) {
		return 208 <= aAL[eE + 3] && aAL[eE + 3] < 224
	}, this.j2 = function(eE) {
		return 224 <= aAL[eE + 3] && aAL[eE + 3] < 248
	}, this.wq = function(eE) {
		for (var ec = this.ec, aA = 3; 0 <= aA; aA--)
			if (this.h2(eE + ec[aA])) return !0;
		return !1
	}, this.eV = function(eE) {
		return this.g9(eE) || this.eR(eE)
	}, this.h2 = function(eE) {
		return 0 === aAL[eE + 3] && 2 === aAL[eE + 2]
	}, this.eR = function(eE) {
		return 0 === aAL[eE + 3] && 1 === aAL[eE + 2]
	}, this.vg = function(eE) {
		return 0 === aAL[eE + 3] && 3 === aAL[eE + 2]
	}, this.ef = function(eE) {
		return 0 === aAL[eE + 3] && 5 <= aAL[eE + 2]
	}, this.aFE = function(eE) {
		return 0 === aAL[eE + 3] && 3 <= aAL[eE + 2]
	}, this.eI = function(eE) {
		return aAL[eE + 2] - 5
	}, this.aFF = function(eE, player) {
		return this.eR(eE) || this.g9(eE) && player !== this.eS(eE)
	}, this.eS = function(eE) {
		return aAL[eE] % 4 * 128 + aAL[eE + 1] % 4 * 32 + aAL[eE + 2] % 4 * 8 + aAL[eE + 3] % 8
	}, this.wx = function(eE) {
		aFI(eE, 1)
	}, this.aFJ = function(eE) {
		aFI(eE, 2)
	}, this.wc = function(eE, player) {
		aAL[eE] = aEs[player], aAL[eE + 1] = aEt[player], aAL[eE + 2] = aEu[player], aAL[eE + 3] = 208 + aEv[player], aFL(eE)
	}, this.g4 = function(eE, player) {
		aAL[eE] = aEw[player], aAL[eE + 1] = aEx[player], aAL[eE + 2] = aEy[player], aAL[eE + 3] = 224 + aEv[player], aFL(eE)
	}, this.j3 = function(eE, player) {
		aAL[eE] = aEz[player], aAL[eE + 1] = aF0[player], aAL[eE + 2] = aF1[player], aAL[eE + 3] = 248 + aEv[player], aFL(eE)
	}
}

function cm() {
	var dx = 0,
		aFM = new Uint16Array(32);

	function remove(a40) {
		var aA;
		for (dx -= 2, aA = a40; aA < dx; aA += 2) aFM[aA] = aFM[aA + 2], aFM[aA + 1] = aFM[aA + 3]
	}
	this.dU = function() {
		dx = 0
	}, this.ij = function() {
		var aA, j0, i9;
		if (0 !== dx)
			if (0 === af.ld[aC.eK] || ac.aFN(aC.eK) === ac.ff(aC.eK)) dx = 0;
			else
				for (aA = dx - 2; 0 <= aA; aA -= 2)(j0 = aFM[aA]) < aC.eX && 0 === af.ld[j0] ? remove(aA) : (i9 = aFM[aA + 1], (j0 >= aC.eX && aFO(aC.eK) || j0 < aC.eX && aFP(aC.eK, j0)) && (b6.gw.h7(i9, j0), remove(aA)))
	}, this.h9 = function(j0, i9) {
		! function(j0, i9) {
			var aA;
			for (aA = 0; aA < dx; aA += 2)
				if (aFM[aA] === j0) return aFM[aA + 1] = Math.min(aFM[aA + 1] + i9, 1023), 1;
			return
		}(j0, i9) && 32 !== dx && (aFM[dx] = j0, aFM[dx + 1] = i9, dx += 2)
	}
}

function cP() {
	function aFW(player) {
		var di;
		b8.fv.a2K(player) && (di = af.gb[player] - af.a2O[player] + ac.aFY(player), bb.fz(player, Math.abs(di), di < 0 ? 18 : 12)), af.gb[player] = 0, af.a2O[player] = 0
	}

	function aFf() {
		aW.show(!1, !1, !1, !0), aV.a9V(), bP.ya.zL()
	}

	function aFT(player, aFe) {
		for (var aA = aFe.length - 1; 0 <= aA; aA--) ac.aFh(aFe[aA], player)
	}

	function aFV(player) {
		for (var iO = af.iO, iP = af.iP, iQ = af.iQ, iR = af.iR, m5 = iO[player], m6 = iQ[player], el = bQ.el, gN = af.gN, eh = iP[player]; m5 <= eh; eh--)
			for (var ej = iR[player]; m6 <= ej; ej--) {
				var g7 = 4 * (ej * el + eh);
				ab.ww(player, g7) && (ab.wx(g7), gN[player]--)
			}
		iP[player] = iR[player] = 0, iO[player] = iQ[player] = Math.max(el, bQ.em)
	}
	this.dd = function(g7) {
		var player, di = af.gN[g7];
		bL.x.om[g7] ? di && (aFT(player = g7, ac.aFU(player)), aFV(player), aE.fx(player), ac.clear(player), aFW(player), function(player) {
			af.wX[player] = 0, af.g1[player] = [], af.gF[player] = [], af.gG[player] = [], af.f0[player] = []
		}(player)) : !di && af.g1[g7].length || this.aFS(g7)
	}, this.aFS = function(player) {
		! function(player) {
			b8.fv.jD(player) || (af.zP[player] = bg.zi.aFd(), aC.yr++);
			var aFe = ac.aFU(player);
			0 === aFe.length ? b8.fv.a2H(player) && aFf() : (aFT(player, aFe), function(player, aFe) {
				var aFj = aFe[function(aFe) {
					var aA, dx = 0;
					for (aA = aFe.length - 1; 1 <= aA; aA--) af.gN[aFe[aA]] > af.gN[aFe[dx]] && (dx = aA);
					return dx
				}(aFe)];
				9 === aC.k6 && (1 === be.eY[player] ? aw.jh(8) && ax.aFk(aFj) : aD.hE[player] && (aM.a4E(765, 0), aM.zD(280, L(134, [af.zQ[aFj], af.zQ[player]]), 765, aFj, b9.mW, b9.nm, -1, !0)));
				if (b8.fv.a2H(player)) aFf(), aM.z1(aFj, 1);
				else {
					for (var aA = aFe.length - 1; 0 <= aA; aA--)
						if (b8.fv.a2K(aFe[aA]) && (bb.lZ[4 - b8.fv.jD(player)]++, b8.fv.a2H(aFe[aA]))) return aM.z1(player, 0);
					b8.fv.jD(player) || aM.a5C(0, player, aFj)
				}
			}(player, aFe))
		}(player), aFV(player), aFW(player),
			function(player) {
				af.ld[player] = 0, af.g1[player] = null, af.gF[player] = null, af.gG[player] = null, af.f0[player] = null
			}(player), aE.fx(player), ac.clear(player), bL.aFb.aFc(player)
	}
}

function cr() {
	var input;

	function aFl(e) {
		(e = e.target.files) && 0 < e.length && b4.aFo(e[0])
	}

	function aFs(e) {
		var ev = new Image;
		ev.onload = aFt, ev.src = e.target.result
	}

	function aFt(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aFv || j > bQ.aFv || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aFv + ".", z.uI ? z.uI.showToast(e) : alert(e)) : 20 === s.ro && s.aDJ().aFt(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFl
	}, this.tA = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFm = function() {
		input.click()
	}, this.aFo = function(aFp) {
		var g = aFp.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFs, g.readAsDataURL(aFp))
	}
}

function cp() {
	this.aFx = null, this.dU = function() {
		10 !== aC.k6 ? this.aFx = null : this.aFx = new Uint32Array(aC.eX)
	}, this.ij = function() {
		10 === aC.k6 && this.qj()
	}, this.qj = function() {
		for (var g7, target, a9g, aFx = this.aFx, yd = ak.jr, a2P = af.gb, aA = ak.jq - 1; 0 <= aA; aA--)(g7 = yd[aA]) >= aC.jp || (target = Math.max(bJ.dj(a2P[g7], 4), 2048), a9g = Math.max(ad.a9h(g7), 100), aFx[g7] += bJ.dj(a9g * target, 1e4),
			aFx[g7] > target && (aFx[g7] = target))
	}, this.a2V = function(player, hE) {
		return hE > this.aFx[player] ? (hE = this.aFx[player], this.aFx[player] = 0) : this.aFx[player] -= hE, hE
	}
}

function dQ() {
	function aFz(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aG7, g.readAsText(e))
	}

	function aG7(e) {
		var aGB;
		aC.yp || (e = JSON.parse(e.target.result), aGB = aC.data = new a3M, aGC(e, aGB, "mapType", 0, 2), aGC(e, aGB, "mapProceduralIndex", 0, 255), aGC(e, aGB, "mapRealisticIndex", 0, 255), aGC(e, aGB, "mapSeed", 0, 16383), function(aGA, aGB, g8,
				max) {
				aGA = aGA[g8];
				aGB[g8] = aGI(aGA) ? aGA.slice(0, max) : aGB[g8]
			}(e, aGB, "mapName", 20), function(aGA, aGB, g8) {
				var aFu;
				2 === aGB.mapType && (!aGI(aGA = aGA[g8]) || aGA.length <= 20 ? aGB.mapType = 0 : ((aFu = new Image).onload = function() {
					b7.aGJ.aGK(aFu, 1), aFu.onload = null, aFu = null
				}, aFu.src = aGA))
			}(e, aGB, "canvas"), aGC(e, aGB, "passableWater", 0, 1), aGC(e, aGB, "passableMountains", 0, 1), aGC(e, aGB, "playerCount", 1, 512), aGC(e, aGB, "humanCount", 1, 1), aGC(e, aGB, "selectedPlayer", 0, 0), aGC(e, aGB, "gameMode", 0, 1),
			aGC(e, aGB, "playerMode", 0, 0), aGC(e, aGB, "battleRoyaleMode", 0, 0), aGC(e, aGB, "numberTeams", 0, 8), aGC(e, aGB, "isZombieMode", 0, 0), aGC(e, aGB, "isContest", 0, 0), aGC(e, aGB, "isReplay", 0, 0), aGF(e, aGB, "elo", 16, 2,
				16383), aGC(e, aGB, "colorsType", 0, 1), aGC(e, aGB, "colorsPersonalized", 0, 1), aGF(e, aGB, "colorsData", 32, 512, 262143), aGC(e, aGB, "selectableColor", 0, 1), aGF(e, aGB, "teamPlayerCount", 16, 9, 512), aGC(e, aGB,
				"neutralBots", 0, 1), aGC(e, aGB, "botDifficultyType", 0, 3), aGC(e, aGB, "botDifficultyValue", 0, 15), aGF(e, aGB, "botDifficultyTeam", 8, 9, 15), aGF(e, aGB, "botDifficultyData", 8, 512, 15), aGC(e, aGB, "spawningType", 0, 2),
			aGC(e, aGB, "spawningSeed", 0, 16383), aGF(e, aGB, "spawningData", 16, 1024, 4095), aGC(e, aGB, "selectableSpawn", 0, 1), aGC(e, aGB, "playerNamesType", 0, 2),
			function(aGA, aGB, g8, size, max) {
				var a1V = aGA[g8];
				if (Array.isArray(a1V)) {
					for (var a1W = new Array(size), ea = Math.min(a1V.length, size), aA = 0; aA < ea; aA++) a1W[aA] = aGI(a1V[aA]) ? a1V[aA].slice(0, max) : "";
					aGB[g8] = a1W
				}
			}(e, aGB, "playerNamesData", 512, 20), aGC(e, aGB, "selectableName", 0, 1), aGC(e, aGB, "aIncomeType", 0, 2), aGC(e, aGB, "aIncomeValue", 0, 255), aGF(e, aGB, "aIncomeData", 8, 512, 255), aGC(e, aGB, "tIncomeType", 0, 2), aGC(e, aGB,
				"tIncomeValue", 0, 255), aGF(e, aGB, "tIncomeData", 8, 512, 255), aGC(e, aGB, "iIncomeType", 0, 2), aGC(e, aGB, "iIncomeValue", 0, 255), aGF(e, aGB, "iIncomeData", 8, 512, 255), aGC(e, aGB, "sResourcesType", 0, 2), aGC(e, aGB,
				"sResourcesValue", 0, 2047), aGF(e, aGB, "sResourcesData", 16, 512, 2047), s.w(), s.x.aG9[0] = 0, s.t(19))
	}

	function aGC(aGA, aGB, g8, min, max) {
		aGA = aGA[g8];
		aGB[g8] = "number" == typeof aGA && min <= aGA && aGA <= max ? Math.floor(aGA) : aGB[g8]
	}

	function aGI(pG) {
		return "string" == typeof pG
	}

	function aGF(aGA, aGB, g8, aGL, size, max) {
		var a1V = aGA[g8];
		if (Array.isArray(a1V)) {
			for (var a1W = new(8 === aGL ? Uint8Array : 16 === aGL ? Uint16Array : Uint32Array)(size), ea = Math.min(a1V.length, size), aA = 0; aA < ea; aA++) a1W[aA] = bJ.p7(a1V[aA], 0, max);
			aGB[g8] = a1W
		}
	}
	this.aFy = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aFz, input.click()
	}, this.aG0 = function() {
		for (var aG3, aAv, a6D = aC.data, keys = Object.keys(a6D), aG1 = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a6D[key] instanceof Uint8Array || a6D[key] instanceof Uint16Array || a6D[key] instanceof Uint32Array ? aG1[key] = Array.from(a6D[key]) : aG1[key] = a6D[key]
		}
		aG1.canvas = 2 === aG1.mapType && aG1.canvas ? aG1.canvas.toDataURL() : null, aG3 = aG1, aG3 = JSON.stringify(aG3, null, 2), aG3 = new Blob([aG3], {
			type: "application/json"
		}), (aAv = document.createElement("a")).href = URL.createObjectURL(aG3), aAv.download = "tt_scenario.json", aAv.click()
	}
}

function cS() {
	var aGM, aGN, size, j0, hE, id, aGO;

	function aGP(player) {
		return player < aC.jp ? aGM * player : aGM * aC.jp + aGN * (player - aC.jp)
	}
	this.dU = function() {
		aGM = aC.jp < 16 ? 12 : 8, aGN = 4;
		var ea = aGP(aC.eX);
		size = new Uint8Array(aC.eX), j0 = new Uint16Array(ea), hE = new Uint32Array(ea), id = new Uint16Array(ea), aGO = new Uint8Array(ea)
	}, this.p6 = function(a6Q, aGQ) {
		var aGR = this.gc(a6Q, aGQ),
			aGQ = (this.ga(a6Q, aGQ, 0), b8.fv.fy(a6Q, aGR));
		bb.fz(a6Q, aGR - aGQ, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFh = function(player, aGQ) {
		var aGU, aGQ = function(player, aGQ) {
			var aA, kX = aGP(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kX + aA] && j0[kX + aA] === aGQ) return aA;
			return size[player]
		}(player, aGQ);
		aGQ !== size[player] && (aGU = hE[aGP(player) + aGQ], this.g0(player, aGQ), this.ix(player, aGU, aC.eX))
	}, this.jB = function(player, aGQ) {
		for (var kX = aGP(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGQ) return !0;
		return !1
	}, this.jT = function(player) {
		return player < aC.jp ? size[player] < aGM : size[player] < aGN
	}, this.ff = function(player) {
		return size[player]
	}, this.fl = function(player, aA) {
		return j0[aGP(player) + aA]
	}, this.fg = function(player, aA) {
		return id[aGP(player) + aA]
	}, this.aGV = function(player, aGW) {
		for (var kX = aGP(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kX + aA] === aGW) return aA;
		return -1
	}, this.fm = function(player, aA) {
		return hE[aGP(player) + aA]
	}, this.gc = function(player, aGQ) {
		for (var kX = aGP(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGQ) return hE[kX + aA];
		return 0
	}, this.aFY = function(player) {
		for (var kX = aGP(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) f2 += hE[kX + aA];
		return f2
	}, this.aGX = function(player) {
		for (var kX = aGP(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kX + aA] && (f2 += hE[kX + aA]);
		return f2
	}, this.aFN = function(player) {
		for (var kX = aGP(player), g2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kX + aA] && g2++;
		return g2
	}, this.ga = function(player, aGQ, aGU) {
		for (var kX = aGP(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kX + aA] && j0[kX + aA] === aGQ && (hE[kX + aA] = aGU)
	}, this.gL = function(player, aA, aGU) {
		hE[aGP(player) + aA] = Math.max(aGU, 0)
	}, this.gM = function(player, aA) {
		aGO[aGP(player) + aA] = 0
	}, this.fn = function(player, aA) {
		return aGO[aGP(player) + aA]
	}, this.ix = function(player, aGU, aGQ) {
		b8.fv.a2K(aGQ) && bb.lZ[6 - b8.fv.jD(player)]++;
		for (var kX = aGP(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGQ) return hE[kX + aA] += aGU, void(hE[kX + aA] = hE[kX + aA] > aC.a2R ? aC.a2R : hE[kX + aA]);
		j0[kX + size[player]] = aGQ, hE[kX + size[player]] = aGU, id[kX + size[player]] = 0, aGO[kX + size[player]] = 1, size[player]++, player < aC.jp && (aGQ === aC.eK ? aM.z1(player, 5) : player === aC.eK && ae.a5E(aGQ))
	}, this.aGY = function(player, aGU, aGW) {
		var kX = aGP(player);
		j0[kX + size[player]] = 0, hE[kX + size[player]] = aGU, id[kX + size[player]] = aGW, aGO[kX + size[player]] = 0, size[player]++
	}, this.g0 = function(player, dx) {
		var et, kX;
		if (0 !== size[player])
			for (kX = aGP(player), size[player]--, et = dx; et < size[player]; et++) j0[kX + et] = j0[kX + et + 1], hE[kX + et] = hE[kX + et + 1], id[kX + et] = id[kX + et + 1], aGO[kX + et] = aGO[kX + et + 1]
	}, this.aFU = function(player) {
		for (var et, kX, aFe = [], aA = ak.jq - 1; 0 <= aA; aA--)
			for (kX = aGP(ak.jr[aA]), et = size[ak.jr[aA]] - 1; 0 <= et; et--)
				if (0 === id[kX + et] && j0[kX + et] === player) {
					aFe.push(ak.jr[aA]);
					break
				} return aFe
	}
}

function cT() {
	var aGZ;

	function aGb(player) {
		var dw, jU;
		return b8.fv.jD(player) && player < aC.jp ? 0 : (dw = aGZ[bJ.dj((aC.eX - 1) * af.gN[player], aC.jZ)], bd.jm() < 1920 && (dw = Math.max(bJ.dj(100 * (13440 - 6 * bd.jm()), 1920), dw)), jU = ad.jV(player), af.gb[player] > jU && (dw -= bJ.dj(2 *
			dw * (af.gb[player] - jU), jU)), Math.min(Math.max(dw, 0), 700))
	}

	function aGn(mH) {
		for (var gN = af.gN, jr = ak.jr, aA = ak.jq - 1; 0 <= aA; aA--) {
			var g7 = jr[aA];
			b8.fv.fy(g7, bJ.dj(mH * gN[g7], 32))
		}
	}

	function aGk() {
		var vY = aC.eK;
		bM.f6[0] = af.gb[vY] - af.a2O[vY]
	}

	function aGm(dx) {
		var vY = aC.eK;
		bb.lZ[dx] += af.gb[vY] - af.a2O[vY] - bM.f6[0]
	}
	this.db = function() {
		for (var ea = aC.eX, aA = (aGZ = new Uint16Array(ea), 0); aA < ea; aA++) aGZ[aA] = 100 + aGa(bJ.dj(25600 * aA, ea - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9h = aGb : 1 === aC.data.iIncomeType ? this.a9h = function(player) {
			return bJ.dj(aC.data.iIncomeValue * aGb(player), 64)
		} : this.a9h = function(player) {
			return bJ.dj(aC.data.iIncomeData[player] * aGb(player), 64)
		}
	}, this.ij = function() {
		if (bd.jm() % 10 == 9 && (function() {
				aGk();
				for (var jr = ak.jr, gb = af.gb, aA = ak.jq - 1; 0 <= aA; aA--) {
					var g7 = jr[aA],
						aGl = bJ.dj(ad.a9h(g7) * gb[g7], 1e4);
					b8.fv.fy(g7, Math.max(aGl, 1))
				}
				aGm(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGk(), 1 === aC.data.aIncomeType)
						for (var gN = af.gN, jr = ak.jr, mH = aC.data.aIncomeValue, aA = ak.jq - 1; 0 <= aA; aA--) {
							var g7 = jr[aA];
							b8.fv.fy(g7, bJ.dj(mH * gN[g7], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gN = af.gN, jr = ak.jr, mH = aC.data.aIncomeData, aA = ak.jq - 1; 0 <= aA; aA--) {
								var g7 = jr[aA];
								b8.fv.fy(g7, bJ.dj(mH[g7] * gN[g7], 128))
							}
						}();
					aGm(18)
				}
			}(), bd.jm() % 100 == 99)) {
			if (aGk(), 0 === aC.data.tIncomeType) aGn(32);
			else if (1 === aC.data.tIncomeType) aGn(aC.data.tIncomeValue);
			else
				for (var gN = af.gN, jr = ak.jr, mH = aC.data.tIncomeData, aA = ak.jq - 1; 0 <= aA; aA--) {
					var g7 = jr[aA];
					b8.fv.fy(g7, bJ.dj(mH[g7] * gN[g7], 32))
				}
			aGm(8)
		}
	}, this.jV = function(player) {
		return Math.min(100 * af.gN[player], aC.a3I)
	}, this.o1 = function(player, o2) {
		b8.fv.fy(o2, bM.f7[0]), bb.oN(player, o2), ae.aGd(player, bM.f7[0] + bM.f7[1]), ae.oO(o2, bM.f7[0]), b8.fv.ow(player)
	}, this.aGe = function() {
		for (var ea = ak.jq, yd = ak.jr, kX = 0, a2P = af.gb, aA = 0; aA < ea; aA++) kX += a2P[yd[aA]];
		return kX
	}, this.aGf = function(aGg) {
		for (var g7, ea = ak.jq, yd = ak.jr, kX = 0, a2P = af.gb, eY = be.eY, aA = 0; aA < ea; aA++) eY[g7 = yd[aA]] === aGg && (kX += a2P[g7]);
		return kX
	}
}

function cV() {
	var aGr, aGs, aGt, aGu, aGv, aGw, aGx, aGy, aGz, aH0, aH1, aH2, aH3, aH4, aH5, aH6, aH7, aH8, aHA, aHB, aAo, aHC, aHD, aHK, aHL, aH9 = null,
		aHF = 0,
		aHG = !1,
		aHH = new Float32Array(4),
		aHI = 0,
		aHJ = !0,
		a8r = 400,
		aHM = 0;

	function pd() {
		aGz = Math.floor(+h.pb), aH0 = Math.floor(.5 * aGz)
	}

	function aHN() {
		var aA, aHS;
		for (th.font = b8.pZ.rO(1, 100 * aH1), aHS = 80 / Math.floor(th.measureText(b8.zU.y7(aC.a2R)).width), th.font = b8.pZ.rO(1, 100), aA = aC.eX - 1; 0 <= aA; aA--) aGy[aA] = 100 / Math.floor(th.measureText(af.zQ[aA]).width), aGx[aA] = Math.min(
			aHS, aGy[aA])
	}

	function aHT(aA) {
		return !aHM || (aA = af.gb[aA]) < 1e6 ? 1 : aA < 1e7 ? aHH[0] : aHH[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHR(hX) {
		aH8 = !1, aH7 = 1, aH5 = aH6 = 0, aHJ && (b8.pZ.textAlign(hX, 1), b8.pZ.textBaseline(hX, 1));
		for (var aHZ, aHa, aA, aHb, fontSize, aHc, m5 = iA / iB, m6 = iC / iB, mI = (h.i + iA) / iB, mJ = (h.j + iC) / iB, aHd = 0 !== af.ld[aC.eK] && !b8.fv.jD(aC.eK), et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et], (fontSize = Math.floor(aH4 * iB *
			aHT(aA) * aGx[aA] * aGv[aA])) < aH3 || aGz <= fontSize || aGt[aA] + aGv[aA] > m5 && aGt[aA] < mI && aGu[aA] + aGw[aA] > m6 && aGu[aA] < mJ && (aHZ = Math.floor(h.i * (aGt[aA] + aGv[aA] / 2 - m5) / (mI - m5)), aHa = Math.floor(h.j * (
			aGu[aA] + aGw[aA] / 2 - m6) / (mJ - m6) - .1 * fontSize), aHb = ab.a6v[aA], hX.font = b8.pZ.rO(1 === af.a2G[aA] ? 4 : 1, fontSize), hX.fillStyle = aHe(fontSize, aHb % 2), aHM ? aHf(hX, aA, fontSize, aHZ, aHa, aHb) : aHg(aA,
			fontSize, aHZ, aHa, hX), aH8 = !0, 0 < aAo[aA] ? function(aHZ, aHa, fontSize, aA, hX) {
			0 === ja[aA] ? ai.qp.xy(aHB[aA]) ? (function(aHZ, aHa, fontSize, player, oC, hX) {
				for (var w6 = aHa, hW = (hX.globalAlpha = aHo(fontSize), aHT(player) * (aHM ? aHI : aGy[player])), w5 = aHZ - .5 * fontSize / hW - .9 * fontSize, eu = 0; eu < 2; eu++) hX.fillText(ai.qp.xs(oC), w5, w6), w5 = aHZ + .5 *
					fontSize / hW + .9 * fontSize;
				hX.globalAlpha = 1
			}(aHZ, aHa, fontSize, aA, aHB[aA], hX), aHi(aHZ, aHa, fontSize, 0, 0, hX)) : ai.qp.y0(aHB[aA]) ? (aHr(aHZ, aHa, fontSize, aHB[aA], 0, hX), aHi(aHZ, aHa, fontSize, 0, 1, hX)) : (aHr(aHZ, aHa, fontSize, aHB[aA], 1, hX), aHi(aHZ,
				aHa, fontSize, 1, 0, hX)) : aHr(aHZ, aHa, fontSize, aHB[aA], 0, hX)
		}(aHZ, aHa, fontSize, aA, hX) : 0 === ja[aA] && aHi(aHZ, aHa, fontSize, 0, 0, hX), aHd && (0 < aAo[aA + aC.eX] || 0 < aAo[aA + 2 * aC.eX] || 0 < aAo[aA + 3 * aC.eX] || 0 < aAo[aA + 4 * aC.eX]) && function(aHZ, aHa, fontSize, aA, hX) {
			var ev, g2 = -1;
			for (ev = 4; 1 <= ev; ev--) 0 < aAo[aA + ev * aC.eX] && g2++;
			for (ev = 1; ev < 5; ev++) 0 < aAo[aA + ev * aC.eX] && (! function(aHZ, aHa, fontSize, ev, aA, aHm, di, hX) {
				var a1j;
				if (1 === ev) {
					aA = aHB[aA + aC.eX];
					if (!ai.qp.xz(aA)) return function(aHZ, aHa, fontSize, oC, aHm, hX) {
						hX.globalAlpha = aHo(fontSize);
						aHZ -= .534 * aHm * fontSize, aHm = aHa + 1.59 * fontSize;
						hX.font = b8.pZ.rO(0, .785 * fontSize), hX.fillText(ai.qp.xs(oC), aHZ, aHm), hX.globalAlpha = 1
					}(aHZ, aHa, fontSize, aA, aHm, hX);
					a1j = ai.vX.xR[aA - 1024 + ai.qp.xd]
				} else a1j = 2 === ev ? aK.a3y()[4].canvas[+(di < 255)] : (3 === ev ? aK.a3y()[5] : aK.a3y()[6]).canvas[0];
				aA = ai.vX.xS, di = .8 * fontSize / aA, ev = aHZ - .5 * di * aA - .534 * aHm * fontSize, aHZ = aHa + 1.4 * di * aA;
				hX.setTransform(di, 0, 0, di, ev, aHZ), hX.globalAlpha = aHo(fontSize), hX.drawImage(a1j, 0, 0), hX.globalAlpha = 1, hX.setTransform(1, 0, 0, 1, 0, 0)
			}(aHZ, aHa, fontSize, ev, aA, g2, aAo[aA + ev * aC.eX], hX), g2 -= 2)
		}(aHZ, aHa, fontSize, aA, hX), (aHc = aH1 * fontSize) < aH3 || (hX.font = b8.pZ.rO(1, aHc), aHa += Math.floor(.78 * fontSize), aHM ? aHg(aA, aHc, aHZ, aHa, hX) : aHf(hX, aA, aHc, aHZ, aHa, aHb)))
	}

	function aHg(aA, fontSize, eh, ej, hX) {
		var ___id = aA;
		var showName = aA < aC.jp || !__fx.settings.hideBotNames;
		if (showName) hX.fillText(af.zQ[aA], eh, ej), aA < aC.jp && 2 !== af.a2G[aA] || (aA = fontSize / aGy[aA], hX.fillRect(eh - .5 * aA, ej + b8.pZ.xt * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHM && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hX.fillText(__fx.utils.getDensity(___id), eh, showName ? ej + fontSize : ej)
		);
	}

	function aHf(hX, aA, fontSize, aHZ, aHa, aHb) {
		var ___id = aA;
		aA = b8.zU.y7(af.gb[aA]);
		aHb >> 1 & 1 ? (hX.lineWidth = .05 * fontSize, hX.strokeStyle = aHe(fontSize, aHb % 2), hX.strokeText(aA, aHZ, aHa)) : (1 < aHb && (hX.lineWidth = .12 * fontSize, hX.strokeStyle = aHe(fontSize, aHb), hX.strokeText(aA, aHZ, aHa)), hX.fillText(
			aA, aHZ, aHa));
		aHM || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hX.fillText(__fx.utils.getDensity(___id), aHZ, aHa + fontSize))
	}

	function aHi(aHZ, aHa, fontSize, aHm, aHn, hX) {
		var a4X = .95 * fontSize / aHD,
			aHZ = aHZ - .5 * a4X * aHC + .8 * aHm * fontSize,
			aHm = aHa - 1.76 * a4X * aHD - (.35 - b8.pZ.xt + .7) * aHn * fontSize;
		hX.setTransform(a4X, 0, 0, a4X, aHZ, aHm), hX.globalAlpha = aHo(fontSize), hX.drawImage(aa.get(4), 0, 0), hX.globalAlpha = 1, hX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHr(aHZ, aHa, fontSize, oC, aHm, hX) {
		var hR, w5, a4X;
		hX.globalAlpha = aHo(fontSize), ai.qp.xz(oC) ? (hR = ai.vX.xS, hX.setTransform(a4X = 1.1 * fontSize / hR, 0, 0, a4X, w5 = aHZ - .5 * a4X * hR - .8 * aHm * fontSize, a4X = aHa - 1.55 * a4X * hR), hX.drawImage(ai.vX.xR[oC - 1024 + ai.qp.xd], 0,
			0), hX.setTransform(1, 0, 0, 1, 0, 0)) : (w5 = aHZ - .8 * aHm * fontSize, a4X = aHa - (.35 - b8.pZ.xt + 1) * fontSize, hX.fillText(ai.qp.xs(oC), w5, a4X)), hX.globalAlpha = 1
	}

	function aHe(fontSize, aHb) {
		return aH0 <= fontSize && fontSize < aGz ? be.aHt[aHb] + aHo(fontSize).toFixed(3) + ")" : be.aHu[aHb]
	}

	function aHo(fontSize) {
		return aH0 <= fontSize && fontSize < aGz ? 1 - (fontSize - aH0) / (aGz - aH0) : 1
	}

	function aI3(hW, i) {
		return 1 + Math.floor(aH2 * hW * i)
	}

	function aI0(aA) {
		for (var left = aGt[aA], et = aGt[aA] - af.iO[aA] - 1; 0 <= et; et--)
			if (!aI5(aA, --left, aGu[aA], aGw[aA])) {
				left++;
				break
			} var right = aGt[aA];
		for (et = af.iP[aA] - aGt[aA] - aGv[aA]; 0 <= et; et--)
			if (!aI5(aA, ++right + aGv[aA] - 1, aGu[aA], aGw[aA])) {
				right--;
				break
			} var eh = Math.floor((left + right) / 2),
			top = aGu[aA];
		for (et = aGu[aA] - af.iQ[aA] - 1; 0 <= et; et--)
			if (!aI6(aA, eh, --top, aGv[aA])) {
				top++;
				break
			} var bottom = aGu[aA];
		for (et = af.iR[aA] - aGu[aA] - aGw[aA]; 0 <= et; et--)
			if (!aI6(aA, eh, ++bottom + aGw[aA] - 1, aGv[aA])) {
				bottom--;
				break
			} var ej = Math.floor((top + bottom) / 2);
		aHx(aA, eh, ej, aGv[aA], aGw[aA]) && (aGt[aA] = eh, aGu[aA] = ej)
	}

	function aHx(player, eh, ej, i, j) {
		ed = Math.floor(.2 * i);
		for (var ed, ev = eh + i - 1; eh <= ev; ev--)
			if (!aI5(player, ev, ej, j)) return;
		for (ev = ej + j - 1 - (ed = (ed = Math.floor(.25 * j)) < 1 ? 1 : ed); ej + ed <= ev; ev--)
			if (!aI6(player, eh, ev, i)) return;
		return 1
	}

	function aI5(player, eh, ej, j) {
		return ab.ww(player, 4 * (ej * bQ.el + eh)) && ab.ww(player, 4 * ((ej + j - 1) * bQ.el + eh))
	}

	function aI6(player, eh, ej, i) {
		return ab.ww(player, 4 * (ej * bQ.el + eh)) && ab.ww(player, 4 * (ej * bQ.el + eh + i - 1))
	}
	this.dU = function() {
		if (aHM = bh.e7.data[7].value || 8 === aC.k6, a8r = 0 === (a8r = bh.e7.data[11].value) ? 280 : 1 === a8r ? 187 : 112, aH8 = !1, aH4 = .88, aH1 = .5, aH2 = 1.8, aH3 = 12 - 3 * bh.e7.data[9].value, aGs = aGr = 0, aGt = new Uint16Array(aC
				.eX), aGu = new Uint16Array(aC.eX), aGv = new Uint16Array(aC.eX), aGw = new Uint16Array(aC.eX), aGx = new Float32Array(aC.eX), aGy = new Float32Array(aC.eX), aHB = new Uint16Array(2 * aC.eX), aAo = new Uint8Array(5 * aC.eX), aHK =
			new Uint8Array(aC.eX), aHL = new Uint8Array(aC.eX), aHJ || (aH9 = aH9 || document.createElement("canvas")), pd(), aH6 = aH5 = 0, aH7 = 1, aHM) {
			var aA, aHS;
			for (aHN(), th.font = b8.pZ.rO(1, 100), aHS = 100 / Math.floor(th.measureText("900 000").width), aA = aC.eX - 1; 0 <= aA; aA--) aGx[aA] = Math.min(aHS, 2 * aGy[aA]);
			aHI = aHS, aHH[0] = 100 / (aHS * Math.floor(th.measureText("5 000 000").width)), aHH[1] = 100 / (aHS * Math.floor(th.measureText("50 000 000").width)), aHH[2] = 100 / (aHS * Math.floor(th.measureText("500 000 000").width)), aHH[3] =
				100 / (aHS * Math.floor(th.measureText("1 000 000 000").width))
		} else aHN();
		! function() {
			var aA;
			for (aA = aC.eX - 1; 0 <= aA; aA--) af.gN[aA] < 12 ? (aGt[aA] = af.iO[aA] + 1, aGu[aA] = af.iQ[aA] + 1, aGv[aA] = 1, aGw[aA] = 1) : (aGt[aA] = af.iO[aA], aGu[aA] = af.iQ[aA] + 1, aGv[aA] = 4, aGw[aA] = 2);
			if (aC.gv)
				for (aA = 0; aA < aC.jp; aA++) aGv[aA] = 0;
			aHC = aa.get(4).width, aHD = aa.get(4).height
		}()
	}, this.aGd = function(g7, a5U) {
		a5U > 18 * af.gN[g7] ? (aHL[g7] = 6, ab.a6v[g7] = 2 + ab.a6v[g7] % 2) : (aHK[g7] = 4, (ab.a6v[g7] < 2 || 3 < ab.a6v[g7]) && (ab.a6v[g7] = 6 + ab.a6v[g7] % 2))
	}, this.oO = function(g7, a5U) {
		a5U > 6 * af.gN[g7] ? (aHL[g7] = 6, ab.a6v[g7] = 4 + ab.a6v[g7] % 2) : (aHK[g7] = 4, (ab.a6v[g7] < 4 || 5 < ab.a6v[g7]) && (ab.a6v[g7] = 8 + ab.a6v[g7] % 2))
	}, this.resize = function() {
		pd(), aHJ || aHR(aHA)
	}, this.a3E = function() {
		for (var aA = 0; aA < aC.jp; aA++) af.iP[aA] - af.iO[aA] != 3 || af.iR[aA] - af.iQ[aA] != 3 ? (aGt[aA] = af.iO[aA] + (af.iP[aA] !== af.iO[aA] ? 1 : 0), aGu[aA] = af.iQ[aA], aGv[aA] = 1, aGw[aA] = 1) : (aGt[aA] = af.iO[aA], aGu[aA] = af
			.iQ[aA] + 1, aGv[aA] = 4, aGw[aA] = 2)
	}, this.p8 = function(player, dx, aHU) {
		! function(player, dx, aHU) {
			player += dx * aC.eX;
			0 === dx ? aHB[player] === aHU && 0 < aAo[player] ? aAo[player] = 0 : (aHB[player] = aHU, aAo[player] = ai.qp.xy(aHU) ? 255 : 64) : 1 === dx ? (aAo[player] = 64, aHB[player] = aHU) : aAo[player] = aHU
		}(player, dx, aHU), 2 === aC.yp && this.lP(!0)
	}, this.tg = function() {
		aHJ ? aHR(th) : aH8 && (1 !== aH7 ? (th.imageSmoothingEnabled = !0, th.setTransform(aH7, 0, 0, aH7, 0, 0), th.drawImage(aH9, -aH5 / aH7, -aH6 / aH7), th.setTransform(1, 0, 0, 1, 0, 0), th.imageSmoothingEnabled = !1) : th.drawImage(aH9, -
			aH5, -aH6))
	}, this.a7f = function(hv, hy) {
		aH5 += hv, aH6 += hy
	}, this.a0O = function(hv, hy) {
		ae.a7f(hv, hy)
	}, this.zoom = function(a1I, ks, kt) {
		aH7 *= a1I, aH5 = (aH5 + ks) * a1I - ks, aH6 = (aH6 + kt) * a1I - kt
	}, this.lP = function(bp) {
		return !aHJ && !(!aHG && !bp && bd.e9 < aHF + (1 === aH7 && 0 === aH5 && 0 === aH6 && (aC.a3h() || aC.gv || 2 === aC.yp) ? 1e3 : a8r) || (aHG = !1, aHF = bd.e9, aHR(aHA), 0))
	}, this.aHX = function(aA) {
		return aHT(aA) * aGx[aA]
	}, this.aHY = function(player) {
		return aGx[player]
	}, this.ij = function() {
		bd.jm() % 10 == 9 && (aHG = aC.a3j() && !aC.a3h()), !aC.a3h() && 4 <= ++aGs && function() {
			var aA, et, eu;
			for (aGs = 0, eu = 4; 1 <= eu; eu--)
				for (et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et] + eu * aC.eX, 0 < aAo[aA] && aAo[aA] < 255 && aAo[aA]--;
			if (2 !== aC.yp)
				for (et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et], 0 < aAo[aA] && aAo[aA] < 255 && aAo[aA]--
		}();
		var aA, et, ea = Math.floor(.1 * ak.jq);
		for (ea = (ea = ea < 8 ? 8 : ea) > ak.jq ? ak.jq : ea, aA = aGr + ea - 1; aGr <= aA; aA--) et = aA % ak.jq, ! function(aA) {
			var hW = aHT(aA) * aGx[aA];
			0 < aGv[aA] && aHx(aA, aGt[aA], aGu[aA], aGv[aA], aGw[aA]) ? ! function(aA) {
				for (var eh, ej, i, j, eE = !1, eu = 0; eu < 8; eu++) {
					if (i = aGv[aA] + 2, j = aGw[aA] + 2, i > af.iP[aA] - af.iO[aA] + 1 || j > af.iR[aA] - af.iQ[aA] + 1) return eE;
					if (eh = aGt[aA] - 1, ej = aGu[aA] - 1, !aHx(aA, eh, ej, i, j)) return eE;
					aGt[aA] = eh, aGu[aA] = ej, aGv[aA] = i, aGw[aA] = j, eE = !0
				}
				return eE
			}(aA) && function(aA, hW) {
				for (var eh, ej, i, j, eE = !1, aAx = aGv[aA], mH = 1 + Math.floor(.02 * aAx), eu = 1; eu < 5; eu++) {
					if ((i = aAx + eu * mH) > af.iP[aA] - af.iO[aA] + 1) return eE;
					if ((j = aI3(hW, i)) > af.iR[aA] - af.iQ[aA] + 1) return eE;
					eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - i)), ej = af.iQ[aA] + Math.floor(Math.random() * (af.iR[aA] - af.iQ[aA] + 2 - j)), aHx(aA, eh, ej, i, j) && (aGt[aA] = eh, aGu[aA] = ej, aGv[
						aA] = i, aGw[aA] = j, eE = !0)
				}
				return eE
			}(aA, hW) && aI0(aA) : ! function(aA, hW) {
				var j, eh = aGt[aA] + 1,
					ej = aGu[aA] + 1,
					i = aGv[aA] - 2;
				for (;;) {
					if (i < 1) {
						aGv[aA] = 0;
						break
					}
					if (j = aI3(hW, i), aHx(aA, eh, ej, i, j)) return aGt[aA] = eh, aGu[aA] = ej, aGv[aA] = i, aGw[aA] = j, 1;
					eh++, ej++, i -= 2
				}
				return
			}(aA, hW) ? function(aA, hW) {
				var eh, ej, i, j, eu, mN, j6 = af.iP[aA] - af.iO[aA] + 1,
					aI4 = Math.floor(.02 * j6);
				for (mN = -6 * (aI4 = aI4 < 1 ? 1 : aI4), eu = j6; mN <= eu; eu -= aI4)
					if (j = aI3(hW, i = 0 < eu ? eu : 1), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - i)), ej = af.iQ[aA] + Math.floor(Math.random() * (af.iR[aA] - af.iQ[aA] + 2 - j)), aHx(aA, eh, ej, i, j))
						return aGt[aA] = eh, aGu[aA] = ej, aGv[aA] = i, aGw[aA] = j
			}(aA, hW) : aI0(aA)
		}(ak.jr[et]);
		aGr = (aGr += ea) % ak.jq
	}, this.lK = function() {
		var aA, g7, hf, hg;
		if (bd.jm() % 4 == 1)
			for (aA = ak.jq - 1; 0 <= aA; aA--) g7 = ak.jr[aA], ab.a6v[g7] < 2 || ((hf = Math.max(aHK[g7] - 1, 0)) === (hg = Math.max(aHL[g7] - 1, 0)) ? 0 === hf && (ab.a6v[g7] %= 2) : 0 === hg && ab.a6v[g7] < 6 && (ab.a6v[g7] += 4), aHK[g7] =
				hf, aHL[g7] = hg)
	}, this.a5E = function(player) {
		var aA = player + 2 * aC.eX,
			di = aAo[aA];
		return 0 < di && (aM.yw(50, player), aAo[aA] = 0, 255 === di)
	}, this.a4H = function(player) {
		return 255 === aAo[player + 2 * aC.eX]
	}
}

function cX() {
	var aI7, aI8, aI9;
	this.dU = function() {
		aI7 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aI8 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), aI9 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a5W = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIA = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aI7.length - 1; 0 <= aA; aA--)
			for (var et = a5W.length - 1; 0 <= et; et--) aI7[aA] = aI7[aA].replace(a5W[et], aIA[et]);
		if (__fx.settings.realisticNames) aI7 = realisticNames;
	}, this.a3T = function() {
		var ea = aC.jp,
			zQ = af.zQ,
			zW = af.zW,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ea)
			for (var aA = 0; aA < ea; aA++) zQ[aA] = zW[aA] = "Player " + aw.j7(1e3);
		else
			for (aA = 0; aA < ea; aA++) zQ[aA] = zW[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k6) {
			for (var dw = aw.random(), aIG = aI9, aIH = aI8, hE = aD.hE, ea = aIG.length, kX = aC.data.teamPlayerCount[7], zQ = af.zQ, zW = af.zW, aA = kX - 1; aA >= aC.jp; aA--) zQ[aA] = zW[aA] = aIG[(aA + dw) % ea];
			for (ea = aIH.length - 1, aA = kX; aA < aC.eX; aA++) zQ[aA] = zW[aA] = aIH[hE[aA] ? ea : aA % ea]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var ea = aC.eX, zQ = af.zQ, zW = af.zW, playerNamesData = aC.data.playerNamesData, aA = aC.jp; aA < ea; aA++) zQ[aA] = zW[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zQ = af.zQ, zW = af.zW, aA = aC.jp; aA < aC.eX; aA++) zQ[aA] = zW[aA] = "Bot " + aw.j7(1e3)
		} : function() {
			for (var aII = aI7, ea = aII.length, dw = aw.random(), zQ = af.zQ, zW = af.zW, aA = aC.jp; aA < aC.eX; aA++) zQ[aA] = zW[aA] = aII[(aA + dw) % ea]
		})()
	}
}

function cq() {
	this.aIJ = [], this.aIK = [], this.dU = function() {
		this.aIJ = [], this.aIK = []
	}, this.ij = function() {
		0 <= this.aIJ.length && this.aIL(this.aIJ), 0 <= this.aIK.length && this.aIL(this.aIK)
	}, this.aIL = function(g) {
		for (var eu = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].e9--, g[aA].e9 <= 0) {
				eu = aA;
				break
			} for (aA = eu; 0 <= aA; aA--) g.shift()
	}, this.a46 = function(id, yd, aIM) {
		return this.ew(this.aIJ, id, yd, aIM)
	}, this.aIN = function(id, yd, aIM) {
		return this.ew(this.aIK, id, yd, aIM)
	}, this.ew = function(g, id, yd, aIM) {
		return ! function(g, id, yd) {
			var aA, hN;
			for (aA = yd.length - 1; 0 <= aA; aA--)
				for (hN = g.length - 1; 0 <= hN; hN--)
					if (g[hN].player === yd[aA] && id === g[hN].id) return 1;
			return
		}(g, id, yd) && (aIM && function(g, id, yd) {
			var aA;
			for (aA = yd.length - 1; 0 <= aA; aA--) g.push({
				player: yd[aA],
				id: id,
				e9: 384
			})
		}(g, id, yd), !0)
	}
}

function cW() {
	this.zW = new Array(aC.eX), this.zQ = new Array(aC.eX), this.a2G = new Uint8Array(aC.eX), this.ld = new Uint8Array(aC.eX), this.iO = new Uint16Array(aC.eX), this.iQ = new Uint16Array(aC.eX), this.iP = new Uint16Array(aC.eX), this.iR =
		new Uint16Array(aC.eX), this.gN = new Uint32Array(aC.eX), this.wX = new Uint32Array(aC.eX), this.gb = new Uint32Array(aC.eX), this.g1 = null, this.gF = null, this.gG = null, this.f0 = null, this.ov = new Uint16Array(aC.eX), this.is =
		new Uint16Array(aC.eX), this.it = new Uint16Array(aC.eX), this.zP = new Uint16Array(aC.eX), this.zN = new Uint8Array(aC.eX), this.a2O = new Uint16Array(aC.eX), this.dU = function() {
			this.zW.fill(""), this.zQ.fill(""), this.a2G.fill(0), this.ld.fill(0), this.iO.fill(0), this.iQ.fill(0), this.iP.fill(0), this.iR.fill(0), this.gN.fill(0), this.wX.fill(0), this.gb.fill(0), this.g1 = new Array(aC.eX), this.gF = new Array(
				aC.eX), this.gG = new Array(aC.eX), this.f0 = new Array(aC.eX), this.ov.fill(0), this.is.fill(0), this.it.fill(0), this.zP.fill(0), this.zN.fill(0), this.a2O.fill(0)
		}
}

function co() {
	this.aBH = function(player) {
		aF.lc(player), aC.yr++, af.a2G[player] = 2, af.zP[player] = bg.zi.aFd(), player === aC.eK && (aW.show(!1, !1), aV.a9V(), bP.ya.zL()), ae.a5E(player)
	}
}

function cQ() {
	this.jr = null, this.jq = 0, this.a3X = function() {
		for (this.jq = 0, aA = aC.eX - 1; 0 <= aA; aA--) 0 !== af.ld[aA] && this.jq++;
		this.jr = new Uint16Array(this.jq);
		for (var ea = 0, aA = 0; aA < aC.eX; aA++) 0 !== af.ld[aA] && (this.jr[ea++] = aA)
	}, this.lJ = function() {
		for (var gN = af.gN, wX = af.wX, zN = af.zN, jr = ak.jr, aA = ak.jq - 1; 0 <= aA; aA--) {
			var di, g7 = jr[aA];
			gN[g7] <= bJ.dj(wX[g7], 4) ? aj.dd(g7) : gN[g7] >= wX[g7] ? (di = gN[g7], 250 <= (wX[g7] = di) && (zN[g7] = 1)) : wX[g7] -= Math.max(1, bJ.dj(wX[g7] - gN[g7], 1e3))
		}
		this.aIR()
	}, this.aIR = function() {
		for (var ld = af.ld, kW = this.jr, aAB = this.jq, aA = aAB - 1; 0 <= aA; aA--) 0 === ld[kW[aA]] && (kW[aA] = kW[--aAB]);
		this.jq = aAB
	}
}

function cY() {
	var aIS;
	this.kF = null, this.kE = 0, this.dU = function() {
		aIS = [], 9 === aC.k6 && this.aIT()
	}, this.aIT = function() {
		var aIU = [60, 80, 105, 150, 190, 333];
		this.kF = [0, 0, 0, 0, 0, 0], this.kE = 0, aC.jp <= aIU[0] ? (this.kE = 256 - bJ.dj(256 * aC.jp, aIU[0]), aC.jp <= 22 ? this.kF[5] = bJ.dj(Math.max(aC.jp - 6, 0), 6) : this.kF[5] = 3 + bJ.dj(38 * (aC.jp - 22), 100), this.kF[0] = aC.eX -
				aC.jp - this.kE - this.kF[5]) : (this.kF[5] = Math.min(17 + bJ.dj(61 * (aC.jp - 60), 100), 179), this.kF[0] = 512 - aC.jp - this.kF[5]), aC.kA = aC.eX - aC.jp, aC.data.numberTeams = (0 < aC.jp) + (0 < aC.kA), aC.data.playerCount =
			aC.w3 = aC.jp + aC.kA, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aC.jp + this.kE, aC.kA - this.kE]), aC.a3N.a3R()
	}, this.aFk = function(player) {
		aIS.push({
			player: player,
			g2: 14 + aw.j7(20)
		})
	}, this.ij = function() {
		if (9 === aC.k6)
			for (var aA = aIS.length - 1; 0 <= aA; aA--) --aIS[aA].g2 <= 0 && (ae.p8(aIS[aA].player, 0, ai.qp.xg + ai.qp.xu), aIS.splice(aA))
	}
}

function d5() {
	function aIj() {
		return {
			el: bQ.el,
			em: bQ.em,
			vU: bQ.vU,
			vQ: bQ.vQ,
			vR: bQ.vR,
			vV: bQ.vV,
			eG: bQ.eG,
			mapSeed: bQ.mapSeed
		}
	}

	function aIb(aA) {
		return 1 !== aA && bQ.aBl(aA) && aA !== bQ.aIk()
	}
	this.aIW = 22, this.aFv = 4096, this.el = 0, this.em = 0, this.vU = null, this.vQ = null, this.vR = null, this.vV = null, this.eG = 0, this.mapSeed = 0, this.vS = !1, this.vT = new aIX, this.vK = new aIY, this.a5c = new aIZ, this.dU =
function() {
		this.vK.dU()
	}, this.a6 = function(map, aIa) {
		((map %= this.aIW) !== this.eG || aIb(this.eG) && aIa !== this.mapSeed) && (this.vS = !1, this.vT.aIc(), aw.a3S(map), this.eG = map, this.mapSeed = aIa, aIb(map) && (bQ.vK.vL[map].aId = aIa), this.aBl(this.eG) ? (map = bQ.vK.vL[this.eG],
			this.el = map.i, this.em = map.j, aw.a3S(map.aId), ao.a6([this.el, this.em, map.li, map.lf]), aIf(), an.aIg(), ao.aIh()) : aIe())
	}, this.aIi = function(map, aIa) {
		var fH = aIj(),
			map = (this.a6(map, aIa), this.vT.aIc(), aIj());
		return this.el = fH.el, this.em = fH.em, this.vU = fH.vU, this.vQ = fH.vQ, this.vR = fH.vR, this.vV = fH.vV, this.eG = fH.eG, this.mapSeed = fH.mapSeed, map
	}, this.a3n = function(canvas) {
		canvas && this.vU !== canvas && (this.el = canvas.width, this.em = canvas.height, this.vU = canvas, this.vQ = this.vU.getContext("2d", {
			alpha: !1
		}), this.hU = this.vQ.getImageData(0, 0, this.el, this.em), this.vV = this.hU.data, this.eG = this.aIk(), this.mapSeed = 0, bQ.vK.vL[this.eG].name = aC.data.mapName)
	}, this.eF = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIk()
	}, this.aIl = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIm = function(aA) {
		return 1 === aA
	}, this.aIk = function() {
		return this.aIW
	}, this.aBl = function(aA) {
		return void 0 === this.vK.vL[aA].aIn
	}, this.a3m = function(pR) {
		return 0 === pR.mapType ? pR.mapProceduralIndex < 10 ? pR.mapProceduralIndex : 10 + pR.mapProceduralIndex : 1 === pR.mapType ? pR.mapRealisticIndex + 10 : void 0
	}, this.aBm = function(pR, aIo) {
		0 === pR.mapType ? pR.mapProceduralIndex = aIo < 10 ? aIo : aIo - 10 : 1 === pR.mapType && (pR.mapRealisticIndex = aIo - 10)
	}
}

function aIX() {
	function aIx() {
		bQ.vT.ij()
	}

	function aJ3(g7, aJ2) {
		0 < aJ2 && (bQ.vV[g7] += aJ2, bQ.vV[g7 + 1] += aJ2, bQ.vV[g7 + 2] += aJ2)
	}

	function h2(g7) {
		return bQ.vV[g7 + 2] > bQ.vV[g7] && bQ.vV[g7 + 2] > bQ.vV[g7 + 1]
	}
	this.a7r = -1, this.zv = 0, this.aIp = 0, this.aIq = 8, this.aIr = 32, this.aIs = 8, this.aIt = 32, this.aIu = [0, 0], this.a6v = [0, 0, 0, 0], this.iJ = null, this.aIv = !0, this.aIw = !1, this.aIc = function() {
		-1 !== this.a7r && clearTimeout(this.a7r), this.a7r = -1, this.iJ = null, ao.aIh()
	}, this.dU = function() {
		7 === aZ.a02() || this.aIw || (this.aIv = !0, this.zv = 0, this.aIp = 1, this.aIu = [bQ.vK.vL[bQ.eG].vn[0], bQ.vK.vL[bQ.eG].vo[0]], this.a6v = [bQ.vK.vL[bQ.eG].aIn[3], bQ.vK.vL[bQ.eG].aIn[4], bQ.vK.vL[bQ.eG].aIn[5], bQ.vK.vL[bQ.eG].aIn[
			6]], this.aIq = bQ.vK.vL[bQ.eG].aIn[7], this.aIr = bQ.vK.vL[bQ.eG].aIn[8], this.aIs = bQ.vK.vL[bQ.eG].aIn[9], this.aIt = bQ.vK.vL[bQ.eG].aIn[10], this.aIv ? this.a7r = setTimeout(aIx, 16) : this.ij())
	}, this.ij = function() {
		if (8 === aZ.a02() && aG.lw()) this.a7r = setTimeout(aIx, 16);
		else {
			if (0 === this.zv) {
				var aId = aw.aIy();
				if (aw.a3S(bQ.vK.vL[bQ.eG].aIn[2]), ao.a6([bQ.el, bQ.em, bQ.vK.vL[bQ.eG].aIn[0], bQ.vK.vL[bQ.eG].aIn[1]]), aw.a3S(aId), this.iJ = ao.aIz(), this.zv++, this.aIv) return void(this.a7r = setTimeout(aIx, 16))
			}
			for (var g7, eM, aId = this.aIv ? 10 : 1e6, aId = bQ.em - this.aIp - 1 < aId ? bQ.em - this.aIp - 1 : aId, wk = this.aIp + aId, ej = this.aIp; ej < wk; ej++)
				for (var eh = 1; eh < bQ.el - 1; eh++) h2(g7 = 4 * (eM = eh + ej * bQ.el)) ? this.aJ0(g7, eM, 1) : (this.aJ0(g7, eM, 0), function(eh, ej, g7) {
					return 1 < eh && h2(g7 - 4) || eh < bQ.el - 2 && h2(g7 + 4) || 1 < ej && h2(g7 - 4 * bQ.el) || ej < bQ.em - 2 && h2(g7 + 4 * bQ.el)
				}(eh, ej, g7) && this.aJ1(eh, ej));
			this.aIp = wk, this.aIp >= bQ.em - 1 ? (bQ.vQ.putImageData(bQ.vR, 0, 0, 1, 1, bQ.el - 2, bQ.em - 2), bd.dc = !0, this.aIc()) : this.aIv && (this.a7r = setTimeout(aIx, 16))
		}
	}, this.aJ0 = function(g7, eM, dx) {
		aJ3(g7, Math.floor(this.aIu[dx] + this.a6v[dx] * this.iJ[eM] / 1e4) - bQ.vV[g7])
	}, this.aJ4 = function(g7, dw, aJ5, dx, a6v) {
		aJ3(g7, Math.floor(this.aIu[dx] + (1 - dw / aJ5) * a6v) - bQ.vV[g7])
	}, this.aJ1 = function(ks, kt) {
		for (var g7, dw, aJ5, a7h = ks - this.aIr, aJ6 = kt - this.aIr, wl = ks + this.aIr, wk = kt + this.aIr, a7h = a7h < 1 ? 1 : a7h, wl = wl > bQ.el - 2 ? bQ.el - 2 : wl, wk = wk > bQ.em - 2 ? bQ.em - 2 : wk, ej = aJ6 < 1 ? 1 : aJ6; ej <=
			wk; ej++)
			for (var eh = a7h; eh <= wl; eh++) h2(g7 = 4 * (eh + ej * bQ.el)) ? (aJ5 = this.aIq + (this.aIr - this.aIq) * this.iJ[eh + bQ.el * ej] / 1e4, Math.abs(ks - eh) > aJ5 || Math.abs(kt - ej) > aJ5 || aJ5 <= (dw = Math.sqrt((ks - eh) * (
				ks - eh) + (kt - ej) * (kt - ej))) || this.aJ4(g7, dw, aJ5, 1, this.a6v[3])) : (aJ5 = this.aIs + (this.aIt - this.aIs) * this.iJ[eh + bQ.el * ej] / 1e4, Math.abs(ks - eh) > aJ5 || Math.abs(kt - ej) > aJ5 || aJ5 <= (dw = Math
				.sqrt((ks - eh) * (ks - eh) + (kt - ej) * (kt - ej))) || this.aJ4(g7, dw, aJ5, 0, this.a6v[2]))
	}
}

function aIf() {
	2 === bQ.eG ? aJ7([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eG ? aJ7([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eG ? aJ7([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eG ? aJ7([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eG && aJ7([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aJ7(aJ8, aJ9, aJA, aJB, aJC) {
	for (var eh, ej, aJE, aJF, a1I, aJG, hu = aJ8.length - 1, aJD = bQ.el + bQ.em, ea = (aJD *= aJD, aJA.length), aA = ea - 1; 0 <= aA; aA--) aJA[aA] *= aJA[aA];
	var aJH = new Array(ea),
		aAl = new Array(ea),
		aJI = new Array(ea),
		f2 = ao.aIz();
	if (void 0 === aJC)
		for (aJC = new Array(ea), aA = ea - 1; 0 <= aA; aA--) aJC[aA] = 0;
	for (aA = 1; aA < ea; aA++) aJH[aA] = aJA[aA] - aJA[aA - 1], aAl[aA] = aJB[aA] - aJB[aA - 1], aJI[aA] = aJC[aA] - aJC[aA - 1];
	for (eh = bQ.el - 1; 0 <= eh; eh--)
		for (ej = bQ.em - 1; 0 <= ej; ej--) {
			for (aJE = aJD, aA = hu; 0 <= aA; aA--) aJE = (aJF = (eh - aJ8[aA]) * (eh - aJ8[aA]) + (ej - aJ9[aA]) * (ej - aJ9[aA])) < aJE ? aJF : aJE;
			for (a1I = aJB[ea - 1], aJG = aJC[ea - 1], aA = 1; aA < ea; aA++)
				if (aJE < aJA[aA]) {
					a1I = aJB[aA - 1] + aFD((aJE - aJA[aA - 1]) * aAl[aA], aJH[aA]), aJG = aJC[aA - 1] + aFD((aJE - aJA[aA - 1]) * aJI[aA], aJH[aA]);
					break
				} aJJ(bQ.el * ej + eh, a1I, aJG, f2)
		}
}

function aJJ(dx, a1I, aJG, f2) {
	a1I < 500 ? f2[dx] = bJ.dj(f2[dx] * a1I * 2, 1e3) : 500 < a1I && (f2[dx] += bJ.dj(2 * (1e4 - f2[dx]) * (a1I - 500), 1e3)), f2[dx] += bJ.dj(aJG * (10 * a1I - f2[dx]), 1e3)
}

function ca() {
	var aJK;

	function aJU(a1j, hW, eh, ej, globalAlpha) {
		bQ.vQ.save(), bQ.vQ.globalAlpha = globalAlpha, bQ.vQ.imageSmoothingEnabled = !1, bQ.vQ.scale(hW, hW), bQ.vQ.drawImage(a1j, Math.floor(eh * (bQ.el / hW - a1j.width)), Math.floor(ej * (bQ.em / hW - a1j.height))), bQ.vQ.restore()
	}
	this.a5Z = 0, this.a5a = 0, this.a5b = 0, this.a5c = 0, this.dU = function() {
		(aJK = new Array(bQ.aIW))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dw: [220, 250, 255, 220],
			sD: [190, 220, 0, 0],
			eu: [170, 200, 0, 0]
		}, aJK[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dw: [25, 0, 100, 0, 25],
			sD: [25, 0, 0, 0, 25],
			eu: [25, 0, 0, 0, 25]
		}, aJK[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dw: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sD: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJK[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dw: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sD: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eu: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJK[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dw: [10, 10, 20, 10, 10, 170, 212],
			sD: [20, 20, 60, 100, 100, 110, 170],
			eu: [70, 70, 160, 30, 30, 60, 120]
		}, aJK[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dw: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sD: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJK[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dw: [10, 10, 60, 255, 255, 200, 200],
			sD: [10, 10, 60, 255, 255, 200, 200],
			eu: [80, 80, 255, 255, 255, 200, 200]
		}, aJK[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sD: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJK[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dw: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sD: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJK[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sD: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJK[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dw: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sD: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eu: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJK[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dw: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sD: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eu: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIg = function() {
		var aJT, aA, et, fH, hU = function() {
				var hU;
				return bQ.vU = document.createElement("canvas"), bQ.vU.width = bQ.el, bQ.vU.height = bQ.em, bQ.vQ = bQ.vU.getContext("2d", {
					alpha: !1
				}), hU = bQ.vQ.getImageData(0, 0, bQ.el, bQ.em), bQ.vV = hU.data, hU
			}(),
			i = aJK[bQ.eG].i,
			dw = aJK[bQ.eG].dw,
			sD = aJK[bQ.eG].sD,
			eu = aJK[bQ.eG].eu,
			f2 = ao.aIz(),
			ea = i.length - 2,
			aJO = new Array(1 + ea),
			aJP = new Array(1 + ea),
			aJQ = new Array(1 + ea),
			aJR = new Array(1 + ea);
		for (et = ea; 0 <= et; et--) aJO[et] = i[et + 1] - i[et], aJP[et] = dw[et + 1] - dw[et], aJQ[et] = sD[et + 1] - sD[et], aJR[et] = eu[et + 1] - eu[et];
		for (aA = bQ.el * bQ.em - 1; 0 <= aA; aA--)
			for (et = ea; 0 <= et; et--)
				if (f2[aA] >= i[et]) {
					fH = f2[aA] - i[et], bQ.vV[4 * aA] = dw[et] + aFD(aJP[et] * fH, aJO[et]), bQ.vV[4 * aA + 1] = sD[et] + aFD(aJQ[et] * fH, aJO[et]), bQ.vV[4 * aA + 2] = eu[et] + aFD(aJR[et] * fH, aJO[et]), bQ.vV[4 * aA + 3] = 255;
					break
				} bQ.vQ.putImageData(hU, 0, 0), bQ.aIm(bQ.eG) && aa.sG() && bQ.aIm(bQ.eG) && (hU = aa.aEN("arena"), aJT = aa.aEN("territorial.io"), aJU(hU, 5, .5, .5, .1), aJU(aJT, 2, .5, .45, .1)), bQ.vS = !0, bd.dc = !0
	}, this.a3V = function() {
		for (var g7, eh, ej, aJV, hL, fJ, a5a = 0, i = bQ.el, j = bQ.em, fH = i * j * 4, aJW = aAL, aJX = bQ.vV, aA = i - 1; 0 <= aA; aA--) aJW[(g7 = aA << 2) + 2] = aJW[fH - g7 - 2] = 3;
		for (fH = 4 * i, aA = j - 1; 0 <= aA; aA--) aJW[(g7 = aA * fH) + 2] = aJW[g7 + fH - 2] = 3;
		for (aJV = i - 1, hL = j - 1, ej = 1; ej < hL; ej++)
			for (fH = ej * i, eh = 1; eh < aJV; eh++) fJ = 1 - (aJX[(g7 = fH + eh << 2) + 2] > aJX[g7 + 1] && aJX[g7 + 2] > aJX[g7]), aJW[g7 + 2] = 2 - fJ, a5a += fJ;
		this.a5Z = (i - 2) * (j - 2), this.a5c = 0, bQ.eF(bQ.eG) && (bQ.a5c.aJY(), bQ.a5c.aJZ()), this.a5a = aC.jZ = a5a - this.a5c, this.a5b = this.a5Z - this.a5a - this.a5c
	}
}

function aIe() {
	var pG;
	10 === bQ.eG ? pG =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bQ.eG ? pG =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bQ.eG ? pG =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bQ.eG ? pG =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bQ.eG ? pG =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bQ.eG ? pG =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bQ.eG ? pG =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bQ.eG ? pG =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bQ.eG ? pG =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bQ.eG && (pG =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new vD).vF(pG)
}

function aIY() {
	this.vL = null, this.aJa = null, this.aJb = null, this.dU = function() {
		var aJc = [120, 105, 92],
			cos = [12, 12, 60],
			aJd = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJe = [140, 130, 120],
			aJf = [12, 12, 76],
			aJg = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJh = [130, 117, 106],
			aJi = [12, 12, 68],
			aJj = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vL = new Array(bQ.aIW + 1), __fx.customLobby.setMapInfo(this.vL), this.vL[0] = {
			name: L(135),
			i: 230,
			j: 230,
			li: 1e3,
			lf: 2e3,
			aId: 173
		}, this.vL[1] = {
			name: L(136),
			i: 800,
			j: 800,
			li: 100,
			lf: 50,
			aId: 43
		}, this.vL[2] = {
			name: L(137),
			i: 512,
			j: 512,
			li: 128,
			lf: 32,
			aId: 0
		}, this.vL[3] = {
			name: L(138) + " 1",
			i: 960,
			j: 960,
			li: 60,
			lf: 8,
			aId: 0
		}, this.vL[4] = {
			name: L(139),
			i: 900,
			j: 900,
			li: 100,
			lf: 5,
			aId: 0
		}, this.vL[5] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			li: 100,
			lf: 40,
			aId: 0
		}, this.vL[6] = {
			name: L(141),
			i: 1e3,
			j: 1e3,
			li: 100,
			lf: 20,
			aId: 0
		}, this.vL[7] = {
			name: L(142),
			i: 1024,
			j: 1024,
			li: 128,
			lf: 32,
			aId: 0
		}, this.vL[8] = {
			name: L(143),
			i: 820,
			j: 820,
			li: 200,
			lf: 100,
			aId: 0
		}, this.vL[9] = {
			name: L(144),
			i: 1024,
			j: 1024,
			li: 128,
			lf: 32,
			aId: 0
		}, this.vL[10] = {
			name: L(145),
			vn: aJe,
			vo: aJf,
			aIn: aJg
		}, this.vL[11] = {
			name: L(146),
			vn: aJh,
			vo: aJi,
			aIn: aJj
		}, this.vL[12] = {
			name: L(147),
			vn: aJh,
			vo: aJi,
			aIn: aJj
		}, this.vL[13] = {
			name: L(148),
			vn: aJc,
			vo: cos,
			aIn: aJd
		}, this.vL[14] = {
			name: L(149),
			vn: aJc,
			vo: cos,
			aIn: aJd
		}, this.vL[15] = {
			name: L(150),
			vn: aJe,
			vo: aJf,
			aIn: aJg
		}, this.vL[16] = {
			name: L(151),
			vn: aJe,
			vo: aJf,
			aIn: aJg
		}, this.vL[17] = {
			name: L(152),
			vn: aJc,
			vo: cos,
			aIn: aJd
		}, this.vL[18] = {
			name: L(153),
			vn: aJh,
			vo: aJi,
			aIn: aJj
		}, this.vL[19] = {
			name: L(154),
			vn: aJc,
			vo: cos,
			aIn: aJd
		}, this.vL[20] = {
			name: L(155),
			i: 1024,
			j: 1024,
			li: 128,
			lf: 32,
			aId: 0
		}, this.vL[21] = {
			name: L(138) + " 2",
			i: 940,
			j: 940,
			li: 80,
			lf: 8,
			aId: 0
		}, this.vL[bQ.aIW] = {
			name: ""
		}, this.aJa = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJa[aA] = aA;
		for (this.aJa[10] = 20, this.aJa[11] = 21, this.aJb = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJb[aA] = 10 + aA
	}
}

function aIZ() {
	this.aJY = function() {
		for (var g7, eh, fH, aJW = aAL, aJX = bQ.vV, i = bQ.el, aJV = i - 1, hL = bQ.em - 1, g2 = 0, ej = 1; ej < hL; ej++)
			for (fH = ej * i, eh = 1; eh < aJV; eh++) aJX[g7 = fH + eh << 2] === aJX[1 + g7] && aJX[g7] === aJX[2 + g7] && (g2++, aJW[2 + g7] = 4);
		an.a5c = g2
	}, this.aJZ = function() {
		for (var aJW = aAL, i = bQ.el, aJV = i - 1, hL = bQ.em - 1, id = 5, ej = 1; ej < hL; ej++)
			for (var fH = ej * i, eh = 1; eh < aJV; eh++) {
				var eE = 2 + (fH + eh << 2);
				4 === aJW[eE] && (! function(eE, id) {
					var ea = 1,
						aJW = aAL,
						ec = ab.ec,
						a1V = [eE];
					aJW[eE] = id;
					for (; ea;) {
						for (var a1W = [], aA = 0; aA < ea; aA++)
							for (var eP = a1V[aA], ed = 3; 0 <= ed; ed--) {
								var ee = eP + ec[ed];
								4 === aJW[ee] && (aJW[ee] = id, a1W.push(ee))
							}
						ea = (a1V = a1W).length
					}
				}(eE, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3U() {
	(x4 = void 0 === x4 ? document.createElement("canvas") : x4).width = bQ.el, x4.height = bQ.em, a3Y = x4.getContext("2d", {
		alpha: !0
	}), a3Z = aAL = null, a3Z = a3Y.getImageData(0, 0, bQ.el, bQ.em), aAL = a3Z.data, b8.pi.vW(aAL)
}

function cb() {
	var f2, i, j, max, aJl, lf, aJn, aJo, aJp, aJq, aJr, aJs, aJt, aJu, aJm = 1e4;

	function aK1(aK0, li, ea) {
		var aA;
		for (aJn[0] = aK0, aA = 1; aA < ea; aA++) aJn[aA] = aJn[aA - 1] + li, li = aJn[aA] >= aJm ? (aJn[aA] = aJm - 1, -li) : aJn[aA] < 0 ? (aJn[aA] = 0, -li) : (li += 16384 <= aw.random() ? lf : -lf) < -aJl ? -aJl : aJl < li ? aJl : li
	}

	function aK3(eh, ej, aK4, ea) {
		(aK4 ? function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA] = aJn[aA]
		} : function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA * i] = aJn[aA]
		})(eh, ej, ea)
	}

	function aK7(value, ea) {
		var aA, aI4, eE, hj = value - aJn[ea - 1];
		if (0 != hj) {
			for (aI4 = 1 + bJ.dj(Math.abs(hj), ea - 1), aI4 = hj < 0 ? -aI4 : aI4, aJn[ea - 1] = value, eE = (eE = ea - 1 - bJ.dj(Math.abs(hj), Math.abs(aI4))) < 1 ? 1 : ea - 2 < eE ? ea - 2 : eE, aA = ea - 2; eE <= aA; aA--) aJn[aA] += hj - (ea -
				1 - aA) * aI4;
			(hj < 0 ? function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJn[aA] < 0 && (aJn[aA] = -aJn[aA] - 1)
			} : function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJn[aA] >= aJm && (aJn[aA] = 2 * aJm - aJn[aA] - 1)
			})(ea)
		}
	}

	function aKA(a1V, a1W, ea) {
		for (var aA = 0; aA < ea; aA++) a1V[aA] = a1W[aA]
	}

	function aKB(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aKC(a40, gap, hM) {
		aJo.push(a40), aJp.push(gap), aJq.push(hM)
	}
	this.a6 = function(a2l) {
		! function(a2l) {
			var aA;
			for (i = a2l[0], j = a2l[1], aJl = a2l[2], lf = a2l[3], f2 = new Int16Array(i * j), max = j < i ? i : j, aJn = new Int16Array(max), aJo = [], aJp = [], aJq = [], aJr = new Array(i), aJs = new Array(j), aA = i - 1; 0 <= aA; aA--) aJr[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJs[aA] = !1;
			aJt = new Int16Array(i), aJu = new Int16Array(j)
		}(a2l),
		function(ea) {
			var aK0 = aw.random() % aJm,
				li = aw.random() % (2 * aJl + 1) - aJl;
			aK1(aK0, li, ea)
		}(max), aKA(aJu, aJn, j), aK3(0, 0, !0, i);
		var eh, ej, a2l = f2[0],
			ea = max,
			li = aw.random() % (2 * aJl + 1) - aJl;
		for (aK1(a2l, li, ea), aKA(aJt, aJn, i), aK3(0, 0, !1, j), aKB(aJt), aKB(aJu), aK1(f2[i - 1], aJt[i - 1], j), aK3(i - 1, 0, !1, j), aK1(f2[i * (j - 1)], aJu[j - 1], i), aK7(f2[i * j - 1], i), aK3(0, j - 1, !0, i), aJr[i - 1] = aJr[0] = !
			0, aJs[j - 1] = aJs[0] = !0, aKC(0, i, !0), aKC(0, j, !1), ! function() {
				var aKE, a40;
				for (;;) {
					if (aKE = function() {
							var aA, aKE = aJo.length - 1;
							for (aA = aKE - 1; 0 <= aA; aA--) aJp[aA] > aJp[aKE] && (aKE = aA);
							return aKE
						}(), aJp[aKE] < 5) return;
					a40 = aJo[aKE] + bJ.dj(aJp[aKE], 2), (aJq[aKE] ? function(eh) {
						var ea, aKH, aA, aDl = 0,
							aKI = 0;
						for (; aKI < j - 1;) {
							for (aA = aDl + 1; aA < j; aA++)
								if (aJs[aA]) {
									aKI = aA;
									break
								} ea = aKI - aDl + 1, aK1(f2[eh + i * aDl], 0 === aDl ? aJt[eh] : aJn[aKH - 1] - aJn[aKH - 2], ea), aK7(f2[aKI * i + eh], ea), aK3(eh, aDl, !1, ea), aKH = ea, aDl = aKI
						}
						aJr[eh] = !0
					} : function(ej) {
						var ea, aKH, aA, aDl = 0,
							aKI = 0;
						for (; aKI < i - 1;) {
							for (aA = aDl + 1; aA < i; aA++)
								if (aJr[aA]) {
									aKI = aA;
									break
								} ea = aKI - aDl + 1, aK1(f2[ej * i + aDl], 0 === aDl ? aJu[ej] : aJn[aKH - 1] - aJn[aKH - 2], ea), aK7(f2[ej * i + aKI], ea), aK3(aDl, ej, !0, ea), aKH = ea, aDl = aKI
						}
						aJs[ej] = !0
					})(a40), aKC(a40, aJo[aKE] + aJp[aKE] - a40, aJq[aKE]), aJp[aKE] = a40 - aJo[aKE] + 1
				}
			}(), eh = 0; eh < i; eh++)
			if (!aJr[eh])
				for (ej = 0; ej < j; ej++) aJs[ej] || ! function(eh, ej) {
					var value = f2[ej * i + eh - 1] + f2[(ej - 1) * i + eh],
						a5n = 2;
					aJr[eh + 1] && (a5n++, value += f2[ej * i + eh + 1]);
					aJs[ej + 1] && (a5n++, value += f2[(ej + 1) * i + eh]);
					f2[ej * i + eh] = bJ.dj(value, a5n)
				}(eh, ej)
	}, this.aIz = function() {
		return f2
	}, this.aIh = function() {
		f2 = null
	}
}

function aFD(et, eu) {
	return 0 <= et ? bJ.dj(et, eu) : -bJ.dj(-et, eu)
}

function jM(f2) {
	return f2 * f2
}

function a52(et, eu) {
	return eu < et ? et : eu
}

function a9p(et, eu) {
	return et < eu ? et : eu
}

function a7E(et, f2, eu) {
	return f2 < et ? et : eu < f2 ? eu : f2
}

function aKK(f2, ea) {
	for (var ev = bJ.dj(f2 + 1, 2), aA = 0; aA < ea; aA++) ev = bJ.dj(ev + bJ.dj(f2, ev), 2);
	return ev
}

function aGa(f2, ea) {
	return f2 < 1 ? 0 : aKK(f2, ea)
}

function aKL(m5, m6, rv, a6y, mI, mJ, rw, sd) {
	return !(m5 + rv <= mI || m6 + a6y <= mJ || mI + rw <= m5 || mJ + sd <= m6)
}

function aKM(m5, m6, rv, a6y, mI, mJ, rw, sd) {
	return m5 <= mI && m6 <= mJ && mI + rw <= m5 + rv && mJ + sd <= m6 + a6y
}

function vN(f2) {
	return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
}

function bs() {
	this.dj = function(et, eu) {
		return Math.floor((et + .5) / eu)
	}, this.aKN = function(et, eu) {
		return Math.floor(et * (eu + .5))
	}, this.sqrt = function(f2) {
		return ~~Math.sqrt(f2 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p7 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKO = function(fH, fJ, fL) {
		return Math.max(Math.min(fH, fJ), fL)
	}, this.aKP = function(aKQ, aKR, eh, ej) {
		eh -= aKQ, aKQ = ej - aKR, ej = 0;
		return 0 == eh ? ej = 0 <= aKQ ? Math.PI : 0 : (ej = Math.atan(aKQ / eh), ej += 0 < eh ? .5 * Math.PI : 1.5 * Math.PI), ej
	}, this.log2 = function(f2) {
		return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
	}, this.log10 = function(f2) {
		return Math.floor(Math.log10(f2 + .5))
	}, this.aKT = function(aKU, aKV, aKW, aKX, aKY) {
		return aKW - aKY < aKU && aKU < aKW + aKY && aKX - aKY < aKV && aKV < aKX + aKY
	}, this.wL = function(hd, he) {
		return hd * hd + he * he
	}
}

function d7() {
	this.x = new aKZ, this.ro = 0;
	var aKa = new Array(30);

	function aKe() {
		for (var ea = aKa.length, aA = 0; aA < ea; aA++) aKa[aA] = null
	}
	this.dU = function() {
		for (var aKb, aKc = document.body.firstChild; aKc;) {
			if (aKb = aKc.nextSibling, document.body.contains(aKc) && ("DIV" === aKc.tagName || "INPUT" === aKc.tagName || "BUTTON" === aKc.tagName)) try {
				document.body.removeChild(aKc)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKc = aKb
		}
	}, this.t = function(dx, aKd, a2l) {
		void 0 === aKd && (aKd = this.ro), bd.dc = !0, 0 === dx && (0 === aZ.a02() ? dx = 5 : z.a0.setState(13)), this.qq(), this.ro === dx && (aKd = aKa[dx].aKd, aKa[dx] = null), this.ro = dx;
		var kX = aKa[dx];
		if (!kX || 4 === dx || 7 === dx || 8 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx || 15 === dx || 18 === dx || 20 <= dx && dx <= 28) {
			if (0 === dx) return void aKe();
			1 === dx ? kX = new aKf : 2 === dx ? kX = new aKg : 3 === dx ? kX = new aKh : 4 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx ? kX = a2l : 5 === dx ? kX = new aKi : 6 === dx ? kX = new aKj : 7 === dx ? kX = new aKk(s.x
					.aKl) : 8 === dx ? kX = a2l : 12 === dx ? kX = new aKm : 14 === dx ? kX = new aKn : 15 === dx ? kX = new aKk(s.x.aKo) : 16 === dx ? kX = new aKp : 17 === dx ? kX = new aKq : 18 === dx ? kX = new aKr : 19 === dx ? kX =
				new aKs : 20 === dx ? kX = new aKt : 21 === dx ? kX = new aKu : 22 === dx ? kX = new aKv : 23 === dx ? kX = new aKw : 24 === dx ? kX = new aKx : 25 === dx ? kX = new aKy : 26 === dx ? kX = new aKz : 27 === dx ? kX = new aL0 :
				28 === dx ? kX = new aL1 : 29 === dx && (kX = new aL2), kX.aKd = aKd, aKa[dx] = kX
		}
		kX.show(a2l)
	}, this.a0C = function() {
		this.hH() && this.aL3(this.aDJ().aKd)
	}, this.aL3 = function(dx) {
		this.hH() && (aKa[dx] ? (this.qq(), bd.dc = !0, this.ro = dx, aKa[dx].show()) : this.t(dx))
	}, this.qq = function() {
		this.hH() && aKa[this.ro].qq()
	}, this.w = function() {
		this.hH() && (aKa[this.ro].qq(), aKe(), this.ro = 0, z.a0.setState(13))
	}, this.tg = function() {
		var kX;
		this.hH() && (kX = aKa[this.ro]).tg && kX.tg()
	}, this.resize = function() {
		if (!this.hH()) return !1;
		aKa[this.ro].resize()
	}, this.gn = function(eh, ej) {
		var kX;
		this.hH() && (kX = aKa[this.ro]).gn && kX.gn(eh, ej)
	}, this.a0O = function(eh, ej) {
		var kX;
		this.hH() && (kX = aKa[this.ro]).a0O && kX.a0O(eh, ej)
	}, this.a0m = function() {
		var kX;
		this.hH() && (kX = aKa[this.ro]).a0m && kX.a0m()
	}, this.a0R = function(ks, kt, deltaY) {
		var kX;
		this.hH() && (kX = aKa[this.ro]).a0R && kX.a0R(ks, kt, deltaY)
	}, this.a0w = function(code) {
		var kX;
		return !!this.hH() && ((kX = aKa[this.ro]).a0w && kX.a0w(code), !0)
	}, this.ij = function() {
		var kX;
		this.hH() && (kX = aKa[this.ro]) && kX.ij && kX.ij()
	}, this.hH = function() {
		return 0 < this.ro
	}, this.aDJ = function() {
		return aKa[this.ro]
	}, this.aCJ = function(dx) {
		return aKa[dx]
	}, this.aL4 = function() {
		return aKa
	}
}

function aKk(data) {
	var aL5, aL6;
	this.show = function() {
		data.aL7 && bG.aLx("account", data.rm), aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aL6.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(data.username, [new v("⬅️ " + L(36), function() {
		bG.clear(), s.a0C()
	}), new v(data.aL7 ? "🔄 " + L(156) : L(157), function() {
		s.t(8, s.aDJ().aKd, new rp(25, {
			rq: 0,
			rm: data.rm,
			rn: data.rn
		}))
	}, 0, 0, 1)]), aL6 = new pS(aL5.tX, function() {
		var pU = [];
		pU.push(function() {
				var aLO = new pC,
					qN = (aLO.pF(L(207)), new qO({
						value: data.username,
						dx: -1
					}));
				qN.e.readOnly = !0, aLO.pQ(qN), aLO.pQ(new r4([new v(L(176), function(e) {
					return b8.pZ.a2C(qN.e), b8.pZ.a2D(e), !0
				}).button])), data.aL7 || aLO.pH(L(208));
				return aLO
			}()),
			function(pU) {
				var aLO, pI, aAZ, aLh, aLX;
				data.aL7 || ((aLO = new pC).pF(L(209)), (pI = aLO.pH(data.aLg.length + " / 160")).style.textAlign = "center", aAZ = !0, (aLh = new tp(0, 1, function(e) {
					e = e.target.value.length;
					pI.textContent = e + " / 160", 160 < e ? aAZ && (aAZ = !1, aLX.pu(1), aLX.button.style.color = b9.mf) : aAZ || (aAZ = !0, aLX.pu(0), aLX.button.style.color = b9.nb)
				})).e.rows = 6, aLh.e.style.fontSize = "1em", aLh.tw(data.aLg), aLO.pQ(aLh), aLX = new v(L(210), function() {
					if (!aAZ) return !0;
					s.t(8, s.aDJ().aKd, new rp(29, {
						rq: 1,
						pG: aLh.ty().substring(0, 160)
					}))
				}, 0, 0, 1), aLO.pQ(new r4([aLX.button])), 0 !== data.aLi && (aLO.pQ(new r4([new v(L(1 === data.aLi ? 212 : 213), function() {
					s.t(8, s.aDJ().aKd, new rp(29, {
						rq: 0,
						pG: ""
					}))
				}, 0, 0, 1).button])), aLO.pH(1 === data.aLi ? L(214, [data.aLk - 1]) : L(215, [data.aLk - 1]))), aLO.pH(L(211, [data.aLj])), pU.push(aLO))
			}(pU),
			function(pU) {
				var aLO;
				data.aL7 && 0 !== data.aLi && ((aLO = new pC).pF(L(216)), aLO.pJ(data.aLg), aLO.pQ(new r4([new v(L(217, 0, "Report"), function(e) {
					return ay.x.aLT(0) && (b8.pZ.a2D(e), ay.aLV.aLl({
						rq: 5,
						rm: data.rm
					})), !0
				}, 0, 0, 1).button])), pU.push(aLO))
			}(pU), pU.push(function() {
				var aLO = new pC,
					aLP = (aLO.pF(L(158)), [L(159), L(160), L(161), L(162), L(163)]),
					dw = data.aLQ;
				aLO.pL(L(164) + b8.zU.a30(data.uk, .01, 2) + "<br>" + L(165) + (dw + 1) + " / " + data.uj + "<br>" + L(166) + aLP[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : dw < 1e3 ? 3 : 4]), data.aL7 || (aLO.pH(L(167)), aLO.pH(L(168)),
					aLO.pH(L(169)));
				return aLO
			}()), data.aL7 && pU.push(function() {
				var aLO = new pC,
					qN = (aLO.pF(L(170)), new qO({
						value: bh.e7.data[147].value,
						dx: -1
					}, 1, void 0, function(e) {
						bh.r1.r2(147, aLR(e.target.value))
					})),
					aLS = (aLO.pQ(qN), new v(L(14), function(e) {
						return qN.e.readOnly && ay.x.aLT(0) && (b8.pZ.a2D(e), aLU(), ay.aLV.aLW({
							rq: 0,
							rm: data.rm,
							value: parseInt(bh.e7.data[147].value, 10)
						})), !0
					}, 1)),
					aLX = new v(L(171), function(e) {
						return e.textContent === L(171) ? (e.textContent = L(172), qN.e.readOnly = !0, aLS.pu(0), aLS.button.style.color = b9.nb, bh.r1.r2(147, qN.e.value), aLR(bh.e7.data[147].value)) : aLU(), !0
					}),
					pI = (aLO.pQ(new r4([aLX.button])), aLO.pH()),
					aLR = (aLO.pH(L(173)).style.fontWeight = "bold", function(f2) {
						f2 = b8.fv.a2i(f2, 2, 1e6);
						var aLY = Math.max(1, 1 + Math.floor(.01 * (f2 - 100)));
						pI.textContent = L(174, [f2, bh.e7.data[105].value, aLY, data.rm, f2 - aLY])
					}),
					aLU = function() {
						aLX.button.textContent = L(171), qN.e.readOnly = !1, aLS.pu(1), aLS.button.style.color = b9.mf
					};
				return aLR(bh.e7.data[147].value), aLO.pQ(new r4([aLS.button])), aLO
			}());
		pU.push(function() {
			var aLO = new pC,
				qN = (aLO.pF(L(175)), new qO({
					value: data.rm,
					dx: -1
				}));
			return qN.e.readOnly = !0, aLO.pQ(qN), aLO.pQ(new r4([new v(L(176), function(e) {
				return b8.pZ.a2C(qN.e), b8.pZ.a2D(e), !0
			}).button])), aLO
		}()), data.aL7 || (pU.push(function() {
			var aLO = new pC,
				aLZ = (aLO.pF(L(177)), new qO(bh.e7.data[106]));
			return aLZ.e.readOnly = !0, aLZ.e.type = "password", aLO.pQ(aLZ), aLO.pQ(new r4([new v(L(178), function(e) {
				return e.textContent === L(178) ? (e.textContent = L(179), aLZ.e.type = "text") : (e.textContent = L(178), aLZ.e.type = "password"), !0
			}).button, new v(L(176), function(e) {
				return b8.pZ.a2C(aLZ.e), b8.pZ.a2D(e), !0
			}).button])), aLO.pQ(new r4([new v(L(180), function() {
				s.t(8, s.aDJ().aKd, new rp(15))
			}).button])), aLO.pF(L(181), "0.8em"), aLO.pH(L(182)), aLO.pH(L(183)), aLO.pH(L(184)), aLO
		}()), pU.push(function() {
			var aLO = new pC;
			return aLO.pF(L(185)), aLO.pQ(new r4([new v(L(186), function() {
				s.t(6, s.aDJ().aKd)
			}).button])), aLO.pQ(new r4([new v(L(187), function() {
				bh.r1.r2(105, ""), s.t(8, s.aDJ().aKd, new rp(18))
			}).button])), aLO.pQ(new r4([new v(L(188) + bh.e7.data[105].value, function() {
				s.t(4, 0, new u(L(189), L(190), !0, [new v("⬅️ " + L(36), function() {
					s.t(7, s.aCJ(7).aKd)
				})]))
			}, b9.nK).button])), aLO
		}()), pU.push(function() {
			function aLb(dx) {
				for (var aA = 0; aA < 2; aA++) aLa[aA].pu(0 === dx ? b9.mr : 0 === aA ? b9.nK : b9.n2)
			}
			var pO, aLa, aLO = new pC;
			aLO.pF(L(191)), aLO.pH(L(192)), bh.x.uU();
			return aLa = [new v(L(193), function() {
				var dx = Math.min(bh.e7.data[117].value, pO.pP.length - 1);
				if (!(dx < 1)) {
					pO.pP[dx].remove(), pO.pP.splice(dx, 1);
					for (var aA = dx; aA < pO.pP.length; aA++) pO.pP[aA].name = "" + aA;
					bh.x.uX(dx), dx = bh.e7.data[117].value, pO.pP[dx].textContent = pO.pP[dx].textContent.replace("⚪", "🟢"), aLb(dx)
				}
			}, b9.mr), new v(L(194), function() {
				var dx = Math.min(bh.e7.data[117].value, pO.pP.length - 1);
				dx < 1 || (dx = bh.x.uY(dx), bh.r1.r2(105, dx.rm), bh.r1.r2(106, dx.password), s.t(8, s.aDJ().aKd, new rp(18)))
			}, b9.mr)], (pO = new tM(bh.e7.data[117], aLb)).pP[0].style.marginTop = "0.5em", aLO.pN(pO), aLO.pQ(new r4([aLa[1].button])), aLO.pQ(new r4([aLa[0].button])), aLO
		}()));
		return pU.push(function() {
				var aLO = new pC,
					aLP = (aLO.pF(L(198)), [L(199), L(200), L(201), L(202)]),
					dw = data.aLc;
				return aLO.pL(L(203) + (data.zH / 100).toFixed(2) + "<br>" + L(165) + (dw + 1) + " / " + data.uj + "<br>" + L(166) + aLP[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : 3]), aLO
			}()), pU.push(function() {
				var aLO = new pC;
				return aLO.pF(L(195)), aLO.pL(L(196) + b8.zU.a30(data.ug, .1, 1) + "<br>" + L(165) + (data.uh + 1) + " / " + data.uj + "<br>" + L(197) + data.ui), aLO
			}()),
			function(pU) {
				var aLO = new pC,
					aLm = data.un,
					aLn = (aLO.pF(L(218)), aLO.pL(L(219, [aLm ? "[" + data.ul + "]" : "-"])), aLO.pL(L(220, [b8.zU.a30(aLm, .01, 2)])), aLO.pL(L(221, [data.up + 1 + " / " + data.uj])), data.uq),
					aLo = (aLO.pL(L(222, [b8.zU.a30(aLn, .1, 1)])), data.us);
				aLO.pL(L(223, [aLo])), aLO.pL(L(224, [b8.zU.a30(aLn / Math.max(aLo, 1), .1, 2)])), aLm = data.uo, aLO.pF(L(225), "0.8em"), aLO.pL(L(219, [aLm ? "[" + data.um + "]" : "-"])), aLO.pL(L(220, [b8.zU.a30(aLm, .01, 2)])), aLn = data
					.ur, aLO.pL(L(222, [b8.zU.a30(aLn, .1, 1)])), aLo = data.ut, aLO.pL(L(223, [aLo])), aLO.pL(L(224, [b8.zU.a30(aLn / Math.max(aLo, 1), .1, 2)])), data.aL7 || (aLO.pH(L(226)), aLO.pH(L(227)));
				pU.push(aLO)
			}(pU),
			function(pU) {
				var aLO = new pC;
				aLO.pF(L(228)), aLO.pL(L(203) + (data.aLp / 10).toFixed(1) + "<br>" + L(166) + (data.aLq.length ? L(229, [data.aLq]) : L(230))), data.aL7 ? (aLO.pQ(new r4([new v(L(231), function(e) {
					return ay.x.aLT(0) && (b8.pZ.a2D(e), ay.aLV.aLl({
						rq: 4,
						rm: data.rm
					})), !0
				}, 0, 0, 1).button])), aLO.pH(L(232)), aLO.pH(L(233))) : aLO.pH(L(234));
				pU.push(aLO)
			}(pU), pU.push(function() {
				var aLO = new pC;
				if (aLO.pF(L(204)), aLO.pL(L(205) + data.aLd + "<br>" + L(165) + (data.aLe + 1) + " / " + data.uj + "<br>" + L(166) + bm.dz(data.aLe)), data.aL7) {
					var qN = new qO({
							value: bh.e7.data[157].value,
							dx: -1
						}, 1, void 0, function(e) {
							bh.r1.r2(157, aLR(e.target.value))
						}),
						aLX = (qN.e.style.marginTop = "0.6em", aLO.pQ(qN), new v(L(171), function(e) {
							return e.textContent === L(171) ? (e.textContent = L(172), qN.e.readOnly = !0, aLf[0].pu(0), aLf[1].pu(0), aLf[0].button.style.color = b9.nb, aLf[1].button.style.color = b9.nb, aLR(bh.e7.data[157]
								.value)) : aLU(), !0
						})),
						aLf = (aLO.pQ(new r4([aLX.button])), [new v("−", function(e) {
							return qN.e.readOnly && ay.x.aLT(0) && (b8.pZ.a2D(e), aLU(), ay.aLV.aLW({
								rq: 2,
								rm: data.rm,
								value: bJ.p7(parseInt(bh.e7.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qN.e.readOnly && ay.x.aLT(0) && (b8.pZ.a2D(e), aLU(), ay.aLV.aLW({
								rq: 1,
								rm: data.rm,
								value: bJ.p7(parseInt(bh.e7.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pI = aLO.pH(),
						aLR = function(f2) {
							return f2 = b8.fv.a2i(f2, 3, 32767), pI.textContent = L(206, [f2 - 1, f2, bh.e7.data[105].value]), f2
						};
					aLO.pQ(new r4([aLf[0].button, aLf[1].button]));
					for (var aA = 0; aA < 2; aA++) aLf[aA].button.style.fontSize = "1.6em";
					var aLU = function() {
						aLX.button.textContent = L(171), qN.e.readOnly = !1, aLf[0].pu(1), aLf[1].pu(1), aLf[0].button.style.color = b9.mf, aLf[1].button.style.color = b9.mf
					};
					aLR(bh.e7.data[157].value)
				}
				return aLO
			}()),
			function(pU) {
				var aLO, a2B;
				data.aLr && data.aL7 || ((aLO = new pC).pF("Patreon"), data.aLr ? aLO.pQ(new r4([new v(L(178), function() {
					ay.aLV.aLl({
						rq: 7,
						rm: data.rm
					}), data.aLr = 0, s.t(7)
				}).button])) : data.aLs ? (aLO.pL(L(235, [(data.aLt / 100).toFixed(2)]) + "<br>" + L(236, [1 + data.aLu + " / " + data.aLv])), data.aL7 || aLO.pQ(new r4([new v(L(237), function() {
					ay.aLV.aLl({
						rq: 8,
						rm: data.rm
					}), data.aLs = 0, bh.r1.r2(160, 0), s.t(7)
				}).button]))) : (a2B = "https://www.patreon.com/oauth2/authorize?response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/&state=" + data.rm, aLO
					.pL(L(238), "0.75em"), aLO.pL("<a href='" + a2B + "' target='_blank'>" + L(239, [data.rm, "Patreon"]) + "</a>").style.marginTop = "0.5em", aLO.pL(L(240), "0.75em").style.marginTop = "0.75em", aLO.pL("• " + L(241),
						"0.75em"), aLO.pL("• " + L(242), "0.75em"), aLO.pL("• " + L(243), "0.75em"), aLO.pL("<a href='" + bI.aLw + "' target='_blank'>" + L(244) + "</a>").style.marginTop = "0.5em", aLO.pL(L(245), "0.75em").style
					.marginTop = "0.75em", data.aL7 || (aLO.pQ(new rE), aLO.pQ(new r4([new v(L(179), function() {
						ay.aLV.aLl({
							rq: 6,
							rm: data.rm
						}), data.aLr = 1, s.t(7)
					}).button])), aLO.pL(L(246), "0.75em").style.marginTop = "0.75em")), pU.push(aLO))
			}(pU), pU
	}())
}

function aKv() {
	var aLy, aLz, aM0, pU;

	function aM1() {
		aM3(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		2 === aC.data.aIncomeType ? (b8.pi.a1Z(aM0.ty(), aC.data.aIncomeData, 255), b8.pi.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(247), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), aLO.pN(new tM({
			tQ: [L(249), L(250), L(251)],
			value: aC.data.aIncomeType
		}, function(dx) {
			aM3(), 2 !== dx || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eX)), aC.data.aIncomeType = dx, s.t(22)
		})), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO;
		1 === aC.data.aIncomeType && ((aLO = new pC).pF("Value"), aLO.pQ(new qO({
			dx: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pU.push(aLO))
	}(pU), function(pU) {
		var aLO;
		2 === aC.data.aIncomeType && ((aLO = new pC).pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.aIncomeData, 4)), aLO.pQ(aM0), pU.push(aLO))
	}(pU), pU))
}

function aKy() {
	var aLy, aLz, aM0;

	function aM1() {
		aM3(), 3 !== aC.data.botDifficultyType || b8.pi.a1N(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		3 === aC.data.botDifficultyType && b8.pi.a1Z(aM0.ty(), aC.data.botDifficultyData, aD.k0.length - 1)
	}

	function aM8(pU, dx) {
		var aLO = new pC,
			value = (aLO.pF(dx < 0 ? L(61) : L(60) + " " + be.zB[dx % 9]), 0 <= dx && (aLO.pL(L(254) + ": " + aC.data.teamPlayerCount[dx]).style.marginBottom = "1em"), dx < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dx]);
		aLO.pN(new tM({
			tQ: aD.k0,
			value: value
		}, function(hN) {
			dx < 0 ? aC.data.botDifficultyValue = hN : aC.data.botDifficultyTeam[dx] = hN
		})), pU.push(aLO)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(61), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, function() {
		var pU = [];
		if (function(pU) {
				var aLO = new pC,
					tQ = (aLO.pF(L(248)), [L(250), L(252), L(253), L(251)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tQ.splice(2, 1));
				aLO.pN(new tM({
					tQ: tQ,
					value: value
				}, function(dx) {
					aM3(), aC.data.botDifficultyType = dx, 0 === aC.data.gameMode && 2 === dx && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eX)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pU.push(aLO)
			}(pU), 0 === aC.data.botDifficultyType) aM8(pU, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aM8(pU, aA);
		else 3 === aC.data.botDifficultyType && ! function(pU) {
			var aLO = new pC;
			aLO.pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.botDifficultyData, 8)), aLO.pQ(aM0), pU.push(aLO)
		}(pU);
		return pU
	}())
}

function aM9(data) {
	var aL5, aMA, aMB, aMC, aMD, aME, aMF, colors, aMG, aMH, aMI = 0,
		aMJ = 0,
		aMK = !1,
		aML = !1,
		aMM = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMq(ks, kt) {
		! function(ks, kt) {
			return aMA < ks && ks < aMA + aMC && aMB < kt && kt < aMB + aMD
		}(aMI = ks, aMJ = kt) ? (aMK && (bd.dc = !0), aMK = !1) : (aMK = !0, bd.dc = !0)
	}
	this.show = function() {
		aML = bh.e7.data[127].value, aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize();
		var ev = h.k,
			tf = aL5.tc(),
			aMV = ev * tf.te,
			ev = ev * tf.qt;
		aME = b8.pZ.sE(.06), aMF = b8.pZ.sE(.04), aMA = b8.pZ.sE(.06), aMB = ev + aME, aMC = h.i - aMA - aMF, aMD = aMV + ev - aMB - aMF
	}, this.tg = function() {
		aL5.tg(),
			function() {
				var aA, aMS, g2, eh, et, g = data.data,
					aMZ = 1,
					aMa = .125,
					aMb = aML ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aMS = g[aA].aMS, g2 = aMS.length, aMZ = Math.max(g2, aMZ), et = 0; et < g2; et++) aMa = Math.max(aMS[et], aMa), aMb = Math.min(aMS[et], aMb);
				var m6 = aMB + aMD,
					wu = aMD / (aMa - aMb),
					wt = 1 / (aMZ - 1);
				for (th.lineWidth = ba.xq, aA = 0; aA < g.length; aA++) {
					for (aMS = g[aA].aMS, g2 = aMS.length, eh = aMA, th.beginPath(), th.moveTo(eh + aMC, m6 - wu * (aMS[g2 - 1] - aMb)), et = g2 - 2; 0 <= et; et--) th.lineTo(eh + wt * et * aMC, m6 - wu * (aMS[et] - aMb));
					th.strokeStyle = colors[aA], th.stroke()
				}(function(aMb, aMa, m6, wu) {
					th.font = b8.pZ.rO(0, .25 * aMA), b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 2), th.fillStyle = colors[0];
					for (var eh = .92 * aMA, aA = 0; aA < 3; aA++) {
						var f2 = aMb + aA * (aMa - aMb) / 2;
						th.fillText((f2 / 1e3).toFixed(3), eh, m6 - wu * (f2 - aMb))
					}
				})(aMb, aMa, m6, wu),
				function(aMZ) {
					var ej = aMB + aMD + .15 * aMF;
					th.font = b8.pZ.rO(0, Math.min(.4 * aMF, .028 * h.i)), b8.pZ.textBaseline(th, 0), b8.pZ.textAlign(th, 2), th.fillStyle = colors[0], th.fillText(b8.a1E.a21(aMG), aMA + aMC, ej), b8.pZ.textAlign(th, 0), th.fillText(b8.a1E.a21(
						new Date(aMH.getTime() - 6e4 * (aMZ - 1) * aMM[data.aMR])), aMA, ej)
				}(aMZ),
				function(aMZ, aMb, aMa) {
					if (aMK && !(aMZ < 2)) {
						for (var a76, dx = (aMI - aMA) / aMC * (aMZ - 1), aMe = Math.floor(dx), aMf = Math.floor(1 + dx), aMg = dx - aMe, aMh = 1e5, aMi = -1, aMj = -1, aMk = aMa - (aMa - aMb) * (aMJ - aMB) / aMD, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAl, aMS = g[aA].aMS;
							aMS.length <= aMf || (aMS = aMS[aMe] + aMg * (aMS[aMf] - aMS[aMe]), (aAl = Math.abs(aMk - aMS)) < aMh && (aMh = aAl, aMi = aA, aMj = aMS))
						} - 1 !== aMi && (aMa = aMB + aMD - (aMj - aMb) / (aMa - aMb) * aMD, th.lineWidth = .5 * ba.xq, th.strokeStyle = colors[aMi], th.beginPath(), th.moveTo(aMA, aMa), th.lineTo(aMI, aMa), th.lineTo(aMI, aMB + aMD), th
						.stroke(), th.beginPath(), th.arc(aMI, aMa, .1 * aMA, 0, 2 * Math.PI), th.fillStyle = colors[aMi], th.fill(), aMb = aMB + aMD + .15 * aMF, b8.pZ.textAlign(th, 1), a76 = aMZ - 2 < dx ? (a76 = aMH.getTime() - 6e4 * aMM[
								data.aMR], new Date(a76 + (dx - (aMZ - 2)) * (aMG.getTime() - a76))) : new Date(aMH.getTime() - 6e4 * (aMZ - dx - 1) * aMM[data.aMR]), aMZ = b8.a1E.a21(a76), dx = b8.pZ.measureText(aMZ), a76 = bJ.p7(aMI, aMA +
								.5 * dx, aMA + aMC - .5 * dx), th.fillStyle = b8.color.mX(70, 50, 20), th.fillRect(a76 - .52 * dx, aMB + aMD, 1.04 * dx, .55 * aMF), th.fillStyle = colors[0], th.fillText(aMZ, a76, aMb), th.font = b8.pZ.rO(0,
								.25 * aMA), b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 2), a76 = .92 * aMA, aMZ = (aMj / 1e3).toFixed(3), dx = b8.pZ.measureText(aMZ), aMb = a76 - 1.04 * dx, th.fillStyle = b8.color.mX(70, 50, 20), th
							.fillRect(aMb, aMa - .1625 * aMA, aMA - aMb, .275 * aMA), th.fillStyle = colors[aMi], th.fillText(aMZ, a76, aMa))
					}
				}(aMZ, aMb, aMa)
			}(), th.lineWidth = ba.xq, th.strokeStyle = b9.mf, th.beginPath(), th.moveTo(aMA, aMB), th.lineTo(aMA, aMB + aMD), th.lineTo(aMA + aMC, aMB + aMD), th.stroke();
		var aA, fontSize = .5 * aME,
			g = (th.font = b8.pZ.rO(0, fontSize), b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 0), data.data),
			ea = g.length,
			ej = aMB - .5 * aME,
			pG = "";
		for (aA = 0; aA < ea; aA++) pG += g[aA].name + "  ";
		pG = pG.trim();
		var aMn = b8.pZ.measureText(pG),
			eh = .5 * (h.i - aMn);
		for (aMn > h.i && (eh = 0, th.font = b8.pZ.rO(0, h.i / aMn * fontSize)), aA = 0; aA < ea; aA++) th.fillStyle = colors[aA], th.fillText(g[aA].name, eh, ej), eh += b8.pZ.measureText(g[aA].name + "  ")
	}, this.gn = function(ks, kt) {
		aMq(ks, kt)
	}, this.a0O = function(ks, kt) {
		aMq(ks, kt)
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	};
	var aA, di, a1z, hN, ed = data.data,
		ea = ed.length,
		max = 1;
	for (aA = 0; aA < ea; aA++) max = Math.max(max, ed[aA].aMS.length);
	for (aA = 0; aA < ea; aA++)
		for (; ed[aA].aMS.length < max;) ed[aA].aMS.unshift(0);
	di = new Date, a1z = 6e4 * di.getTimezoneOffset(), hN = di.getTime() - a1z, aMG = new Date(hN), 6 === data.aMR ? function(di, a1z) {
		var aMU = di.getUTCFullYear(),
			di = di.getUTCMonth() + 1;
		aMH = di < 12 ? new Date(Date.UTC(aMU, di) - a1z) : new Date(Date.UTC(aMU + 1, 0) - a1z)
	}(di, a1z) : (a1z = 6e4 * aMM[data.aMR], aMH = data.aMR <= 4 ? new Date(hN + a1z - di.getTime() % a1z) : new Date(hN + a1z - (di.getTime() + 2592e5) % a1z)), hN = b8.color, colors = [b9.mf, hN.mX(255, 0, 0), hN.mX(0, 200, 0), hN.mX(80, 80,
		255), hN.mX(255, 255, 0), hN.mX(255, 0, 255), hN.mX(0, 255, 255), hN.mX(255, 140, 0), hN.mX(128, 128, 128), hN.mX(0, 255, 140)], aL5 = new tR(L(255) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aMR] + ", " + b8.a1E.a1y(aMG), [
		new v("⬅️ " + L(36), function() {
			s.x.aAf()
		}), new v(L(256), function() {
			s.t(14)
		})
	], !1)
}

function aKn() {
	var aL5, aL6, pU;
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aL6.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(L(257), [new v("⬅️ " + L(36), function() {
		s.aL3(13)
	})]), aL6 = new pS(aL5.tX, ((pU = []).push(function() {
		var aLO = new pC,
			aLX = (aLO.pF(L(258)), aLO.pH(L(259)), new v(L(260), function() {
				bh.r1.r2(130, 0), s.x.aMv()
			}, 0, 0, 1)),
			qN = new qO(bh.e7.data[126], 0, function() {
				aLX.button.click()
			});
		return aLO.pQ(qN), qN.e.placeholder = "a,b,c", qN.e.style.marginTop = "0.5em", aLO.pQ(new r4([aLX.button])), aLO
	}()), pU.push(function() {
		var aLO = new pC,
			aLX = new v(L(260), function() {
				bh.r1.r2(130, 1), s.x.aMv()
			}, 0, 0, 1),
			aMw = new qO(bh.e7.data[129], 1, function() {
				aMw.e.focus()
			}),
			aMx = new qO(bh.e7.data[128], 1, function() {
				aLX.button.click()
			});
		return aLO.pF(L(261)), aLO.pQ(aMx), aMx.e.style.marginBottom = "0.5em", aLO.pF(L(262)), aLO.pQ(aMw), aLO.pQ(new r4([aLX.button])), aLO
	}()), pU.push(function() {
		var aLO = new pC;
		return aLO.pF(L(263)), bh.e7.data[125].tQ = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLO.pN(new tM(bh.e7.data[125])), aLO
	}()), pU.push(function() {
		var aLO = new pC;
		return aLO.pF(L(264)), aLO.pQ(new qy(bh.e7.data[127], L(265))), aLO
	}()), pU))
}

function aKm() {
	var aL5, aMy, aMC, aMz, aN0, aN1, colors = [0, 0, 0],
		aN2 = -1;

	function aN5(aA) {
		var aN6 = aMy.ej + aA * (ba.gap + aN1);
		th.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", th.fillRect(aMz, aN6, colors[aA] * aN0, aN1), th.strokeStyle = b9.mf, th.strokeRect(aMz, aN6, aN0,
			aN1), th.fillStyle = b9.mf, th.font = b8.pZ.rO(0, .32 * aN1), b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 0), th.fillText(L(0 === aA ? 268 : 1 === aA ? 269 : 270) + aN3(aA), aMz + ba.gap, aN6 + .53 * aN1)
	}

	function aN3(aA, aN7) {
		return aN7 = aN7 || 256, bJ.p7(Math.floor(aN7 * colors[aA]), 0, aN7 - 1)
	}

	function a0s(ks, kt) {
		return !(ks < aMz || kt < aMy.ej || ks > aMy.eh + aMy.i || kt > aMy.ej + aMy.j)
	}
	this.show = function() {
		var f2 = bh.e7.data[121].value;
		colors[0] = (f2 >> 12) / 63, colors[1] = (f2 >> 6 & 63) / 63, colors[2] = (63 & f2) / 63, aL5.show(), this.resize()
	}, this.qq = function() {
		bh.r1.r2(121, (aN3(0, 64) << 12) + (aN3(1, 64) << 6) + aN3(2, 64)), aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aMy.resize();
		var ev = h.k,
			tf = aL5.tc(),
			aN4 = (aMy.ej = Math.max(aMy.ej, ev * tf.qt + ba.gap), ev * tf.te - 2 * ba.gap);
		aMy.j = Math.min(aMy.j, aN4), aMy.i = 2 * aMy.j, aMy.ej = ev * tf.qt + .5 * (ev * tf.te - aMy.j), aMy.eh = .5 * (h.i - aMy.i), aMC = .25 * aMy.i, aMz = aMy.eh + aMC + ba.gap, aN0 = aMy.i - aMC - ba.gap, aN1 = (aMy.j - 2 * ba.gap) / 3
	}, this.tg = function() {
		var dw, sD, eu;
		aL5.tg(), th.lineWidth = ba.xq, dw = aN3(0), sD = aN3(1), eu = aN3(2), th.fillStyle = "rgb(" + dw + "," + sD + "," + eu + ")", th.fillRect(aMy.eh, aMy.ej, aMC, aMy.j), th.strokeStyle = b9.mf, th.strokeRect(aMy.eh, aMy.ej, aMC, aMy.j), th
			.fillStyle = dw + sD + eu < 306 && sD < 150 ? b9.mf : b9.mW, b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 1), th.font = b8.pZ.rO(0, .1 * aMy.j), th.rotate(-Math.PI / 2), th.fillText(L(267), -aMy.ej - .5 * aMy.j, aMy.eh + .5 * aMC),
			th.setTransform(1, 0, 0, 1, 0, 0), aN5(0), aN5(1), aN5(2)
	}, this.gn = function(ks, kt) {
		a0s(ks, kt) && (aN2 = bJ.p7(Math.floor((kt - aMy.ej) / (aN1 + .75 * ba.gap)), 0, 2), colors[aN2] = bJ.p7((ks - aMz) / aN0, 0, 1), bd.dc = !0)
	}, this.a0O = function(ks) {
		-1 !== aN2 && (colors[aN2] = bJ.p7((ks - aMz) / aN0, 0, 1), bd.dc = !0)
	}, this.a0R = function(ks, kt, deltaY) {
		a0s(ks, kt) && (ks = bJ.p7(Math.floor((kt - aMy.ej) / (aN1 + .75 * ba.gap)), 0, 2), colors[ks] = bJ.p7(colors[ks] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0m = function() {
		0 <= aN2 && (aN2 = -1, bd.dc = !0)
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(L(266), [new v("⬅️ " + L(36), function() {
		s.x.aAf()
	})], !1), aMy = new qB([.5, .25], [.5, .5], 1)
}

function aKu() {
	var aLy, aLz, aM0, q9;

	function aM1() {
		aM3(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aL4()[19] = null, s.a0C()
	}

	function aN8() {
		aM3(), s.t(21)
	}

	function aM3() {
		1 === aC.data.gameMode ? aC.a3N.a3R() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pi.a1Z(aM0.ty(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, q9 = [new v("⬅️ " + L(36), aM1)], 1 === aC.data.gameMode && q9.push(new v(L(271), aN8, 1, 1)), aLy = new tR(L(272), q9), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), 0 === aC.data.gameMode && (aLO.pN(new tM({
			tQ: [L(273), L(251)],
			value: aC.data.colorsType
		}, function(dx) {
			aM3(), aC.data.colorsType = dx, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eX || (aC.data.colorsData = new Uint32Array(aC.eX)), s.t(21)
		})), aLO.pQ(new rE));
		aLO.pQ(new qy({
			value: aC.data.selectableColor
		}, L(274), function(value) {
			aC.data.selectableColor = value
		})), pU.push(aLO)
	}(q9 = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pU) {
		var aLO = new pC;
		aLO.pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.colorsData, 1)), aLO.pQ(aM0), pU.push(aLO)
	}(q9) : (aC.a3N.a3R(), q9.push(function() {
		var aLO = new pC;
		aLO.pF(L(254));
		for (var aA = 0; aA < be.zB.length; aA++) {
			var hN = (aA + 1) % be.zB.length,
				e = aLO.pL((0 == hN ? "" : "Team ") + be.zB[hN]);
			aA && (e.style.marginTop = "0.5em"), aLO.pQ(new qO({
				dx: -1,
				value: aC.data.teamPlayerCount[hN]
			}, 1, 0, function(e) {
				aLy.tY[1].pu(0);
				var playerCount = bJ.p7(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aNA] = playerCount
			})).e.aNA = hN
		}
		return aLO
	}())), q9))
}

function rp(id, a2l, aNB) {
	var aL5, aNC;

	function aNH() {
		aNC.pV.innerHTML += "<br>" + L(277)
	}

	function aNG() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.r1.r2(110, bD.rr.rs(bD.rr.rt(8))), ay.aLV.aNV()
	}
	this.aND = !0, this.aNE = id, this.show = function() {
		aL5.show(), this.resize(), 15 === id ? (ay.x.aNF(id) ? aNG : aNH)() : 16 === id ? ay.x.aNF(id) ? ay.aAc.aNI(2) : aNH() : 17 === id ? ay.x.aNF(id) ? ay.aAc.aNI(3) : aNH() : 18 === id ? (ay.x.close(0, 3253), ay.x.aE5(0, id), aNH()) : 21 ===
			id ? ay.x.aNF(id) ? ay.aNJ.aNK(a2l.s8, a2l.s9, a2l.sA) : aNH() : 22 === id ? ay.x.aNF(id) ? ay.aNJ.aNL(a2l.s8, a2l.aNM, a2l.aNN) : aNH() : 23 === id ? ay.x.aNF(id) ? ay.aNJ.aNO(a2l.aMR, a2l.zX) : aNH() : 24 === id ? ay.x.aNF(id) ? ay
			.aNJ.aNP(a2l.aMR, a2l.s9, a2l.sA) : aNH() : 25 === id ? ay.x.aNF(id) ? ay.aLV.aLl(a2l) : aNH() : 28 === id ? ay.x.aNF(id) ? ay.aNJ.aNQ(a2l.s8, a2l.aNM, a2l.aNN) : aNH() : 29 === id && (ay.x.aNF(id) ? ay.aLV.aNR(a2l) : aNH())
	}, this.aNS = function() {
		15 === id ? aNG() : 16 === id ? ay.aAc.aNI(2) : 17 === id ? ay.aAc.aNI(3) : 18 === id ? s.t(8, this.aKd, new rp(16)) : 21 === id ? ay.aNJ.aNK(a2l.s8, a2l.s9, a2l.sA) : 22 === id ? ay.aNJ.aNL(a2l.s8, a2l.aNM, a2l.aNN) : 23 === id ? ay.aNJ
			.aNO(a2l.aMR, a2l.zX) : 24 === id ? ay.aNJ.aNP(a2l.aMR, a2l.s9, a2l.sA) : 25 === id ? ay.aLV.aLl(a2l) : 28 === id ? ay.aNJ.aNQ(a2l.s8, a2l.aNM, a2l.aNN) : 29 === id ? ay.aLV.aNR(a2l) : 1e3 === id && (this.aNE = id = 25, ay.aLV.aLl(
				a2l))
	}, this.aNT = function(code, bp, data) {
		!bp && code !== id || (16 === code ? s.t(7, this.aKd) : 17 === code ? (ay.x.close(0, 3252), bh.x.uX(0), bh.e7.data[117].tQ && 0 < bh.e7.data[117].tQ.length ? (bp = bh.x.uY(0), bh.r1.r2(105, bp.rm), bh.r1.r2(106, bp.password), s.t(8, this
			.aKd, new rp(16))) : (bh.r1.r2(105, ""), s.x.aAf())) : 21 === code ? s.t(10, this.aKd, new aNU(data)) : 23 === code ? s.t(13, 0, new aM9({
			data: data,
			aMR: a2l.aMR
		})) : 25 === code && (s.x.aKo.rm = a2l.rm, s.t(15, this.aKd)))
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aNC.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(L(275), [new v("⬅️ " + L(36), function() {
		aNB ? s.t(29) : s.x.aAf()
	})]), aNC = new r3(aL5.tX, L(276))
}

function aKs() {
	var aLy, aLz, pU;

	function aNY() {
		var g2;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3N.a3R()), g2 = b8.pi.a1T(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g2) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aM1() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNa(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNa() {
		b7.op.dU(), bh.r1.r2(156, b7.a3d.yI())
	}

	function aNW() {
		aC.data.isReplay = 0, aNa(), aC.a3N.a3o(), aZ.aEG(), aC.a3N.a3l(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vU : null, aC.a3Q(), aC.a3P = 1
	}

	function aNo() {
		aNY();
		for (var g = [aNd(), aNe(), aNf()], aA = 3; aA < 6; aA++) aLz.pV.removeChild(aLz.pW[aA].pE), aLz.pW[aA] = g[aA - 3], aLz.pV.appendChild(aLz.pW[aA].pE);
		aLz.resize()
	}

	function aNd() {
		var aNp, aLO = new pC;
		return aLO.pF(L(272)), aNp = 0 === aC.data.gameMode ? [L(273), L(251)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLO.pL(aNp), aLO.pQ(new r4([new v(L(281), function() {
			s.t(21)
		}).button])), aLO
	}

	function aNe() {
		var aLO = new pC,
			g = (aLO.pF(L(61)), [L(250) + ": " + aD.k0[aC.data.botDifficultyValue], L(252), L(253), L(251)]);
		return aLO.pL(g[aC.data.botDifficultyType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(25)
		}).button])), aLO
	}

	function aNf() {
		var aLO = new pC,
			g = (aLO.pF("Spawning"), [L(273), L(283), L(251)]);
		return aLO.pL(g[aC.data.spawningType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(24)
		}).button])), aLO
	}
	this.show = function() {
		aLy.show(), this.resize(), aLy.tX.scrollTop = s.x.aG9[0]
	}, this.qq = function() {
		s.x.aG9[0] = aLy.tX.scrollTop, aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR("🔧 " + L(278), [new v("⬅️ " + L(36), aM1), new v(L(279), aNW)]), aNY(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vU : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIi(bQ.a3m(aC.data), 0).vU : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIi(bQ.a3m(aC.data), aC.data.mapSeed).vU)), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC,
			a1j = (aLO.pF(L(280)), aC.data.canvas);
		a1j.style.width = "100%", aLO.pQ({
			e: a1j
		}), aLO.pQ(new r4([new v(L(281), function() {
			s.t(20)
		}).button])), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO = new pC;
		aLO.pF(L(254)), aLO.pQ(new qO({
			dx: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p7(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pi.a1T(aC.data.teamPlayerCount, 0), aC.a3N.a3R(), b8.pi.a1T(aC.data.teamPlayerCount, 0) !== e) && aNo()
		})), pU.push(aLO)
	}(pU), function(pU) {
		var aLO = new pC;
		aLO.pF(L(282)), aLO.pN(new tM({
			tQ: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dx) {
			aC.data.gameMode !== dx && (aC.data.gameMode = dx, aNo())
		})), pU.push(aLO)
	}(pU), pU.push(aNd()), pU.push(aNe()), pU.push(aNf()), function(pU) {
		var aLO = new pC,
			g = (aLO.pF(L(284)), [L(285), L(286), L(251)]);
		aLO.pL(g[aC.data.playerNamesType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(23)
		}).button])), pU.push(aLO)
	}(pU), function(pU) {
		var aLO = new pC,
			g = (aLO.pF(L(247)), [L(249), L(250) + ": " + aC.data.aIncomeValue, L(251)]);
		aLO.pL(g[aC.data.aIncomeType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(22)
		}).button])), pU.push(aLO)
	}(pU), function(pU) {
		var aLO = new pC,
			g = (aLO.pF(L(287)), [L(249), L(250) + ": " + aC.data.tIncomeValue, L(251)]);
		aLO.pL(g[aC.data.tIncomeType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(26)
		}).button])), pU.push(aLO)
	}(pU), function(pU) {
		var aLO = new pC,
			g = (aLO.pF(L(288)), [L(249), L(250) + ": " + aC.data.iIncomeValue, L(251)]);
		aLO.pL(g[aC.data.iIncomeType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(27)
		}).button])), pU.push(aLO)
	}(pU), function(pU) {
		var aLO = new pC,
			g = (aLO.pF(L(289)), [L(249), L(250) + ": " + aC.data.sResourcesValue, L(251)]);
		aLO.pL(g[aC.data.sResourcesType]), aLO.pQ(new r4([new v(L(281), function() {
			s.t(28)
		}).button])), pU.push(aLO)
	}(pU), function(pU) {
		var aLO = new pC;
		aLO.pF(L(290)), aLO.pQ(new r4([new v(L(291), function() {
			s.w(), aC.a3N.a3p(), s.x.aG9[0] = 0, s.t(19)
		}).button])), aLO.pQ(new r4([new v(L(292), function() {
			bk.aFy()
		}).button])), aLO.pQ(new r4([new v(L(293), function() {
			return bk.aG0(), !0
		}).button])), pU.push(aLO)
	}(pU), pU))
}

function aL0() {
	var aLy, aLz, aM0, pU;

	function aM1() {
		aM3(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		2 === aC.data.iIncomeType && b8.pi.a1Z(aM0.ty(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(288), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), aLO.pN(new tM({
			tQ: [L(249), L(250), L(251)],
			value: aC.data.iIncomeType
		}, function(dx) {
			aM3(), 2 !== dx || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eX), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dx, s.t(27)
		})), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO;
		1 === aC.data.iIncomeType && ((aLO = new pC).pF("Value"), aLO.pQ(new qO({
			dx: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pU.push(aLO))
	}(pU), function(pU) {
		var aLO;
		2 === aC.data.iIncomeType && ((aLO = new pC).pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.iIncomeData, 4)), aLO.pQ(aM0), pU.push(aLO))
	}(pU), pU))
}

function aKi() {
	var aNq, aNr, aMy, qN, aNs;
	this.aEp = new rx, aMy = new qB([.45, .27], [.5, .5], 2 / 3), aNr = [new v("⚔️<br>" + L(294), function() {
			aNt(0)
		}, b9.n8), new v("🗡️<br>" + L(278), function() {
			aNt(1)
		}, b9.nQ), new v("🔑<br>" + L(295), function() {
			aNt(2)
		}, b9.ng), new v("☰<br>" + L(296), function() {
			aNt(3)
		}, b9.ms), new v("", function() {
			s.t(12)
		}, b9.mb, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qN = new qO(bh.e7.data[122]);
	for (var aA = 0; aA < aNr.length; aA++) aNr[aA].button.style.position = "absolute";

	function aNt(dx) {
		z.a0.setState(10), aa.sG() || aa.aEg(), 0 === dx ? s.x.a3g() : 1 === dx ? (b7.aGJ.vF(bh.e7.data[156].value, 1) || aC.a3N.a3p(), s.t(19)) : 2 === dx ? 0 !== z.id || bh.e7.data[140].value ? s.t(8, s.ro, new rp(16)) : s.x.aNu(s.ro, 16) : 3 ===
			dx && s.t(1)
	}
	qN.e.style.position = "absolute", qN.e.style.textAlign = "center", qN.e.placeholder = L(297), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEp.show(), aNr[4].pu(b8.color.a1q(bh.e7.data[121].value)), this.resize(), document.body.appendChild(qN.e);
		for (var aA = 0; aA < aNr.length; aA++) document.body.appendChild(aNr[aA].button);
		1 !== z.id || z.dk < 5 || (aNs && bd.e9 > aNs + 144e5 ? z.uI.setState(14) : aNs = bd.e9)
	}, this.qq = function() {
		this.aEp.qq(), document.body.removeChild(qN.e);
		for (var aA = 0; aA < aNr.length; aA++) document.body.removeChild(aNr[aA].button)
	}, this.resize = function() {
		this.aEp.resize(), this.aEp.resize(), aMy.resize();
		var gap = .5 * ba.gap,
			sl = 10 / 99 * .84 * aMy.i,
			aNx = .16 * aMy.j,
			a7d = .19 * aMy.i,
			eh = aMy.eh + a7d,
			sl = aMy.ej + sl + 3 * gap,
			i = .5 * (aMy.i - gap) - a7d,
			a7d = aMy.i - 2 * a7d - aNx - gap,
			a7d = (b8.pZ.sF(qN.e, eh, sl, a7d, aNx), b8.pZ.sF(aNr[4].button, eh + a7d + gap, sl, aNx, aNx), .5 * (aMy.ej + aMy.j - (sl += aNx + gap) - gap));
		b8.pZ.sF(aNr[0].button, eh, sl, i, a7d), b8.pZ.sF(aNr[1].button, eh + i + gap, sl, i, a7d), b8.pZ.sF(aNr[2].button, eh, sl + a7d + gap, i, a7d), b8.pZ.sF(aNr[3].button, eh + i + gap, sl + a7d + gap, i, a7d);
		b8.pZ.sF(aNr[5].button, eh, sl + a7d * 2 + gap * 2, i * 2 + gap, a7d / 3);
		b8.pZ.sF(aNr[6].button, eh, sl + a7d * 2.33 + gap * 3, i * 2 + gap, a7d / 3);
		for (var aA = 0; aA < aNr.length; aA++) aNr[aA].button.style.font = b8.pZ.rO(0, b8.pZ.a27(.065 * aMy.j)), b8.pZ.pk(aNr[aA].button, 5);
		qN.e.style.font = b8.pZ.rO(0, b8.pZ.a27(.08 * aMy.j)), b8.pZ.pk(qN.e, 5)
	}, this.tg = function() {
		if (aZ.aEK(), aS.tg(), aN.tg(), bW.tg(), aa.sG()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aMy.i * 0.03);
				th.font = b8.pZ.rO(1, size);
				th.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = th.measureText(text).width;
				th.textAlign = "left";
				th.textBaseline = "middle";
				th.fillText(text, th.canvas.width - textLength - size / 2, size);
			};
			th.imageSmoothingEnabled = !1;
			var ev = aa.aEN("territorial.io"),
				mH = .84 * aMy.i / ev.width;
			th.setTransform(mH, 0, 0, mH, aMy.eh + .08 * aMy.i, aMy.ej), aNq = aNq || b8.a1A.a2j(ev, b8.a1A.a2p, [0, 0, 0]);
			for (var eh = -1; eh <= 1; eh += 2)
				for (var ej = -1; ej <= 1; ej += 2) th.drawImage(aNq, eh, ej);
			th.drawImage(ev, 0, 0), th.imageSmoothingEnabled = !0;
			var hg = aa.aEN("logo"),
				aNz = .6666 * mH * ev.height / hg.height,
				mI = .5 * h.i,
				mJ = aMy.ej + .5 * mH * ev.height - .5 * aNz * hg.height;
			th.setTransform(aNz, 0, 0, aNz, mI - .6 * mH * ev.width, mJ), th.drawImage(hg, 0, 0), th.setTransform(aNz, 0, 0, aNz, mI + .6 * mH * ev.width - aNz * hg.width, mJ), th.drawImage(hg, 0, 0), th.setTransform(1, 0, 0, 1, 0, 0), th
				.imageSmoothingEnabled = !0
		}
	}
}

function aKp() {
	var aL5, aO0, aO1, tS;

	function aO2(aA) {
		s.t(8, s.ro, new rp(21, {
			s8: aA,
			s9: 0,
			sA: 10
		}))
	}
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aO0.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aO1 = [new v(L(298), function() {
		aO2(1)
	}, 0, 0, 1), new v(L(299), function() {
		aO2(2)
	}, 0, 0, 1), new v(L(300), function() {
		aO2(3)
	}, 0, 0, 1), new v(L(301), function() {
		aO2(0)
	}, 0, 0, 1), new v(L(302), function() {
		aO2(9)
	}, 0, 0, 1), new v(L(303), function() {
		aO2(10)
	}, 0, 0, 1), new v(L(304), function() {
		aO2(11)
	}, 0, 0, 1)], tS = [new v("⬅️ " + L(36), function() {
		s.a0C()
	})], aL5 = new tR(L(305), tS), aO0 = new q8(aO1, aL5.tX)
}

function aB3(title, pM, aO3) {
	var aL5, aNC;
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aNC.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aO3 = aO3 || [new v("⬅️ " + L(36), function() {
		s.a0C()
	}, b9.nK)], aL5 = new tR(title, aO3), aNC = new r3(aL5.tX, pM), b8.pZ.textAlign(aL5.tX.style, 1)
}

function aNU(data) {
	var aL5, aO4, ev, re;

	function aO5(hj) {
		var ea = data.data.length;
		if (ea) {
			for (var s9, max = min = parseInt(data.data[0][0]), aA = 1; aA < ea; aA++) var aCm = parseInt(data.data[aA][0]),
				min = Math.min(aCm, min),
				max = Math.max(aCm, max);
			s9 = hj < 0 ? min + hj : max + 1, s.t(8, s.aDJ().aKd, new rp(21, {
				s8: data.s8,
				s9: s9,
				sA: s9 + Math.abs(hj)
			}))
		}
	}
	this.show = function() {
			aL5.show(), this.resize()
		}, this.qq = function() {
			aL5.qq()
		}, this.resize = function() {
			aL5.resize(), aO4.resize()
		}, this.a0w = function(ev) {
			2 === ev && aL5.tY[0].pr()
		}, ev = data.data.length ? 0 : 1, ev = [new v("⬅️ " + L(36), function() {
			s.a0C()
		}), new v(L(306), function() {
			aO5(-10)
		}, ev, 0, 1), new v(L(307), function() {
			aO5(10)
		}, ev, 0, 1), new v(L(256), function() {
			s.t(11, 10, new aO6({
				s8: data.s8
			}))
		})], re = [L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(303), L(304)], aL5 = new tR(re[data.s8], ev),
		function() {
			var aA, ed = {
					rY: []
				},
				rY = ed.rY,
				aO8 = data.data,
				ea = aO8.length;
			ea && 0 === aO8[0][0] && 0 <= (dx = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6][data.s8]) && (s.x.sB[dx] = aO8[0][1]);
			var mH = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01][data.s8],
				a2t = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2][data.s8],
				dx = [
					[L(318), L(319) + " ↗", L(320)],
					[L(318), L(321), L(322), L(323) + " ↗"],
					[L(318), L(319) + " ↗", L(322)],
					[L(318), L(319) + " ↗", L(322)],
					[L(324), L(325), L(326) + " ↗", L(327) + " ↗", L(118)],
					[L(324), L(325), L(328) + " ↗", L(329) + " ↗", L(330)],
					[L(324), L(325), L(331) + " ↗", L(332) + " ↗", L(333)],
					[L(324), L(325), L(328) + " ↗", L(329) + " ↗", L(334)],
					[L(324), L(325), L(326) + " ↗", L(327) + " ↗", L(118)],
					[L(318), L(319) + " ↗", L(322)],
					[L(318), L(319) + " ↗", L(335)],
					[L(318), L(319) + " ↗", L(322)]
				];
			if (ed.re = dx[data.s8], ed.rj = [
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
					[25, 40, 35]
				][data.s8], 0 === data.s8 || 2 === data.s8 || 3 === data.s8 || 9 === data.s8 || 10 === data.s8 || 11 === data.s8)
				for (aA = 0; aA < ea; aA++) rY.push([{
					f2: aO8[aA][0] + 1 + ".",
					di: 0
				}, {
					f2: aO8[aA][1],
					di: 1,
					rm: aO8[aA][4],
					rn: aO8[aA][3]
				}, {
					f2: (mH * aO8[aA][2]).toFixed(a2t),
					di: 0
				}]);
			else if (1 === data.s8)
				for (aA = 0; aA < ea; aA++) rY.push([{
					f2: aO8[aA][0] + 1 + ".",
					di: 0
				}, {
					f2: aO8[aA][1],
					di: 0
				}, {
					f2: (mH * aO8[aA][2]).toFixed(a2t),
					di: 0
				}, {
					f2: aO8[aA][3],
					di: 1,
					rm: aO8[aA][5],
					rn: aO8[aA][4]
				}]);
			else if (4 === data.s8 || 5 === data.s8 || 6 === data.s8 || 7 === data.s8 || 8 === data.s8)
				for (aA = 0; aA < ea; aA++) {
					var aOB = aO8[aA][5];
					4 === data.s8 || 8 === data.s8 ? "100%" === (aOB = (aOB % 64 * 100 / (aOB >> 6)).toFixed(0) + "%") && (4 === data.s8 ? aOB += " (" + L(336) + ")" : aOB += " (" + L(337) + ")") : 5 === data.s8 ? 32768 <= aOB && (aOB = -(aOB -
						32768)) : aOB = (mH * aOB).toFixed(a2t), rY.push([{
						f2: "" + aO8[aA][0],
						di: 0
					}, {
						f2: "" + aO8[aA][6],
						di: 0
					}, {
						f2: aO8[aA][7],
						di: 1,
						rm: aO8[aA][1],
						rn: aO8[aA][2]
					}, {
						f2: aO8[aA][8],
						di: 1,
						rm: aO8[aA][3],
						rn: aO8[aA][4]
					}, {
						f2: "" + aOB,
						di: 0
					}])
				}
			aO4 = new rX(aL5.tX, ed)
		}()
}

function aO6(a2l) {
	var aL5, aL6, pU;
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aL6.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(L(338), [new v("⬅️ " + L(36), function() {
		s.aL3(10)
	})]), aL6 = new pS(aL5.tX, ((pU = []).push(function() {
		var aLX, aLO = new pC,
			aMw = new qO(bh.e7.data[132], 1, function() {
				aLX.button.click()
			}),
			aMx = new qO(bh.e7.data[131], 1, function() {
				aMw.e.focus()
			});
		aLO.pF(L(261)), aLO.pQ(aMx), aMx.e.style.marginBottom = "0.8em", aLO.pF(L(262)), aLO.pQ(aMw);
		return aLX = new v(L(260), function() {
			s9 = Math.floor(aMx.e.value), sA = Math.floor(aMw.e.value);
			var sA, s9 = {
				a1R: Math.min(s9, sA),
				aKE: Math.max(s9, sA)
			};
			s.t(8, s.aCJ(10).aKd, new rp(21, {
				s8: a2l.s8,
				s9: s9.a1R,
				sA: s9.aKE
			}))
		}, 0, 0, 1), aLO.pQ(new r4([aLX.button])), aLO
	}()), pU.push(function() {
		var aLX, aLO = new pC,
			aMw = new qO(bh.e7.data[134], 1, function() {
				aLX.button.click()
			}),
			aMx = new qO(bh.e7.data[133], 0, function() {
				aMw.e.focus()
			});
		return aLO.pF(1 === a2l.s8 ? L(339) : L(340)), aLO.pQ(aMx), aMx.e.style.marginBottom = "0.8em", aLO.pF(L(341)), aLO.pQ(aMw), aLX = new v(L(260), function() {
			var aNM = aMx.e.value.slice(0, 20),
				aNN = Math.abs(Math.floor(aMw.e.value));
			s.t(8, s.aCJ(10).aKd, new rp(22, {
				s8: a2l.s8,
				aNM: aNM,
				aNN: aNN
			}))
		}, 0, 0, 1), aLO.pQ(new r4([aLX.button])), aLO
	}()), pU.push(function() {
		var aLX, aLO = new pC,
			aMw = new qO(bh.e7.data[152], 1, function() {
				aLX.button.click()
			}),
			aMx = new qO(bh.e7.data[151], 0, function() {
				aMw.e.focus()
			});
		return aLO.pF(L(342)), aLO.pQ(aMx), aMx.e.style.marginBottom = "0.8em", aLO.pF(L(341)), aLO.pQ(aMw), aLX = new v(L(260), function() {
			var aNM = aMx.e.value.slice(0, 5),
				aNN = Math.abs(Math.floor(aMw.e.value));
			s.t(8, s.aCJ(10).aKd, new rp(28, {
				s8: a2l.s8,
				aNM: aNM,
				aNN: aNN
			}))
		}, 0, 0, 1), aLO.pQ(new r4([aLX.button])), aLO
	}()), pU))
}

function aL2() {
	var aOF, sK, aOI, sJ, sM, aOG = [new Array(4), [], new Array(2), new Array(2)],
		aOH = new Array(4),
		aOJ = new Array(2),
		aOK = [L(60), L(302), L(343), L(344)];

	function aCX() {
		var a5f = aOF.sX.qN.e.value.trim().slice(0, 127);
		a5f.length < 1 || (aOF.sX.qN.e.value = "", bl.aB6.yt(a5f))
	}

	function aON(aOP) {
		bl.x.qc[3] = 1 - bl.x.qc[3], aOO(3, 1, bl.x.qc[3]), aOP && ay.aCi.aCj(4), bl.x.qc[3] && bh.r1.r2(158, bl.x.qc[0])
	}

	function aOL(et, eu) {
		bl.x.qc[et] !== eu && (0 === et && bl.x.qc[3] && aON(0), aOO(et, bl.x.qc[et], 0), aOO(et, eu, 1), bl.x.qc[et] = eu, 0 === et ? (ay.aCi.aCj(2, eu), bl.x.qc[2] ? (aOF.sY.lQ(), aOF.sX.qZ(1)) : aOF.sX.qZ(0), s.aDJ().aCM(), s.aDJ().aCL()) : 2 ===
			et && (0 === eu ? (ay.aCi.aCj(0), aOF.sX.lQ(), aOF.sg()) : (ay.aCi.aCj(1), aOF.sY.lQ(), aOF.sh())))
	}

	function aOO(et, eu, color) {
		aOF.sa[et].q9[eu].pu(color ? b9.n4 : b9.np)
	}

	function aOS(aBe) {
		return aBe < 7 ? aBe + 2 + " " + L(351) : 7 === aBe || 10 === aBe ? L(302) + " (Full-Sending: " + L(7 === aBe ? 352 : 353) + ")" : 8 === aBe ? "1v1" : L(354)
	}

	function aOT(f2) {
		var a5i = bJ.dj(f2, 60),
			f2 = f2 % 60;
		return (a5i < 10 ? "0" : "") + a5i + ":" + (f2 < 10 ? "0" : "") + f2
	}
	this.aCu = function() {
		return aOF.sX
	}, this.aB6 = function(rm) {
		aOL(2, 0);
		var pG = aOF.sX.qN.e.value,
			rm = "@" + rm + " ";
		pG.length && !b8.zU.a2E(pG, " ") && (rm = " " + rm), aOF.sX.qN.e.value = pG += rm, aOF.sX.qN.e.focus()
	}, this.aCK = function() {
		aOF.sY.lQ()
	}, this.aCM = function() {
		var aOR = bl.x.qc[0],
			aOR = bl.x.qe[aOR];
		bQ.a6(aOR.eG, aOR.mapSeed), sK.q9[0].button.textContent = L(280) + ": " + bQ.vK.vL[aOR.eG].name, sK.q9[1].button.textContent = L(282, 0, "Mode") + ": " + aOS(aOR.aBe), sK.q9[2].button.textContent = L(348) + ": " + bQ.vK.vL[aOR.aDK].name,
			sK.q9[3].button.textContent = L(349, 0, "Next Mode") + ": " + aOS(aOR.aDL), sK.q9[4].button.textContent = L(350) + ": " + aOT(aOR.aCO), sK.resize()
	}, this.aCL = function() {
		var aOR = bl.x.qc[0],
			qd = bl.x.qe[aOR];
		aOF.se(qd.sf);
		for (var aA = 0; aA < bl.su.sv.length; aA++) aOG[0][aA].qY.textContent = "" + bl.su.sv[aA].length;
		var su = bl.su.sv[aOR],
			aOU = su.length,
			aOV = bl.su.sw[aOR];
		aOG[2][1].qY.textContent = "" + aOU, aOG[3][1].qY.textContent = "" + aOV, sK.q9[4].button.textContent = L(350) + ": " + aOT(qd.aCO);
		for (aA = 0; aA < 4; aA++) {
			var aOW = bl.x.qe[aA];
			aOH[aA] ? 0 === aOW.sf && (aOH[aA].qY.textContent = bQ.vK.vL[aOW.eG].name) : aOH[aA] = new qX(bQ.vK.vL[aOW.eG].name, sJ.q9[aA].button, 1, 1), b8.zU.startsWith(aOK[aA], "🏆 ") ? aOW.aBk || (aOK[aA] = aOK[aA].substring(3), sJ.q9[aA]
				.button.textContent = aOK[aA], sJ.q9[aA].button.appendChild(aOG[0][aA].qY), sJ.q9[aA].button.appendChild(aOH[aA].qY)) : aOW.aBk && (aOK[aA] = "🏆 " + aOK[aA], sJ.q9[aA].button.textContent = aOK[aA], sJ.q9[aA].button
				.appendChild(aOG[0][aA].qY), sJ.q9[aA].button.appendChild(aOH[aA].qY))
		}
		var qd = "",
			aOY = "";
		0 === aOR && (qd = bl.qj.aBy(su, 0, aOU), aOY = bl.qj.aBy(su, 0, aOV)), aOI[0].qY.textContent = qd, aOI[1].qY.textContent = aOY, aOJ[1].qY.textContent = "MP: " + bl.x.aCC[0] + "   SP: " + bl.x.aCC[1] + "   Lobby: " + b8.pi.a1e(bl.su.sv)
	}, this.aCQ = function() {
		aOF.sX.lQ()
	}, this.show = function() {
		aOF.show(), this.resize(), bl.message.show()
	}, this.qq = function() {
		aOF.qq(), bl.tG.qq(), bl.ss.qq(), bl.message.qq()
	}, this.resize = function() {
		aOF.resize(1 - bl.x.qc[2]), bl.message.resize()
	}, this.a0w = function(ev) {
		2 === ev ? bl.x.qc[3] ? aON(1) : aOF.sa[3].q9[0].pr() : ev < 2 && aON(1)
	}, sJ = new r7([new v(aOK[0], function() {
		return aOL(0, 0), 2
	}), new v(aOK[1], function() {
		return aOL(0, 1), 2
	}), new v(aOK[2], function() {
		return aOL(0, 2), 2
	}), new v(aOK[3], function() {
		return aOL(0, 3), 2
	})], b9.np), sK = new r7([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.nq, 1);
	var aOM = new r7([new v(L(345), function() {
		return aOL(2, 0), 2
	}), new v(L(114), function() {
		return aOL(2, 1), 2
	})], b9.np);
	sM = new r7([new v(L(346), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.tA(), ay.x.a0E(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.tA(), ay.x.a0E(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(347), function() {
		return aON(1), 2
	})], b9.np), aOF = new sI(sJ, sK, aOM, sM, aCX, bl.tG.aD3);
	for (var aA = 0; aA < 4; aA++) aOG[0][aA] = new qX("0", sJ.q9[aA].button);
	aOG[2][1] = new qX("0", aOM.q9[1].button), aOG[3][1] = new qX("0", sM.q9[1].button), aOI = [new qX("", aOM.q9[1].button, 1, 1), new qX("", sM.q9[1].button, 1, 1)], aOO(0, bl.x.qc[0], 1), aOO(2, bl.x.qc[2], 1), (aOJ = [new qX(L(254), aOF.si(), 1,
		0), new qX("", aOF.si(), 1, 1)])[0].qY.style.fontSize = "0.4em", aOJ[1].qY.style.fontSize = "0.4em"
}

function aKj() {
	var aL5, aL6, pU;
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aL6.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(L(355), [new v("⬅️ " + L(36), function() {
		s.t(7, s.aCJ(7).aKd)
	}), new v(L(194), function() {
		bh.r1.r2(105, bE.rr.v4(aL6.pW[0].pD[0].e.value, 5)), bh.r1.r2(106, bE.rr.v4(aL6.pW[1].pD[0].e.value, 8)), s.t(8, s.aCJ(7).aKd, new rp(18))
	})]), aL6 = new pS(aL5.tX, ((pU = []).push(function() {
		var aLO = new pC;
		return aLO.pF(L(175)), aLO.pQ(new qO({
			value: "",
			dx: -1
		})), aLO
	}()), pU.push(function() {
		var aLO = new pC,
			aLZ = (aLO.pF(L(177)), new qO({
				value: "",
				dx: -1
			}));
		return aLZ.e.type = "password", aLO.pQ(aLZ), aLO.pQ(new r4([new v(L(178), function(e) {
			return e.textContent === L(178) ? (e.textContent = L(179), aLZ.e.type = "text") : (e.textContent = L(178), aLZ.e.type = "password"), !0
		}).button])), aLO
	}()), pU))
}

function aKq() {
	var aL5, aO0, aO1, tS;

	function aO2(aA) {
		s.t(8, s.ro, new rp(21, {
			s8: aA,
			s9: 0,
			sA: 10
		}))
	}
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aO0.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aO1 = [new v(L(313), function() {
		aO2(5)
	}, 0, 0, 1), new v(L(314), function() {
		aO2(6)
	}, 0, 0, 1), new v(L(315), function() {
		aO2(7)
	}, 0, 0, 1)], tS = [new v("⬅️ " + L(36), function() {
		s.a0C()
	})], aL5 = new tR(L(356), tS), aO0 = new q8(aO1, aL5.tX)
}

function aKZ() {
	this.e7 = {}, this.sB = new Array(7), this.aKo = null, this.aKl = null, this.rV = 0, this.aG9 = [0], this.y = function() {
		s.t(5, 5)
	}, this.a3g = function() {
		s.w(), aY.dU()
	}, __fx.customLobby.setJoinFunction(() => {
		s.w(), aY.dU()
	}), this.aAf = function() {
		s.t(0 === aZ.a02() ? 5 : 0)
	}, this.aMv = function() {
		if (1 === bh.e7.data[130].value) s.t(8, s.aDJ().aKd, new rp(24, {
			aMR: bh.e7.data[125].value,
			s9: bh.e7.data[128].value,
			sA: bh.e7.data[129].value
		}));
		else {
			for (var g = (g = bh.e7.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDJ().aKd, new rp(23, {
				aMR: bh.e7.data[125].value,
				zX: g
			}))
		}
	}, this.aNu = function(aKd, target) {
		s.t(4, aKd, new u("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOa +
			"' target='_blank'>" + bI.aOa + "</a>", !1, [new v("⬅️ " + L(36), function() {
				s.t(aKd)
			}), new v("✅ Accept", function() {
				bh.r1.r2(140, 1), 0 === target ? s.t(2, aKd) : s.t(8, aKd, new rp(target))
			})]))
	}, this.aOb = function() {
		for (var aA = 0; aA < 7; aA++) this.sB[aA] = bE.uv.uz(bF.oa(5));
		this.sB[1] = "[" + this.sB[1] + "]", 5 === s.ro && (s.aDJ().aEp.r2(this.sB), s.aDJ().resize())
	}
}

function aKt() {
	var aLy, aLz, aOc, pU;

	function aM1() {
		b4.tA(), s.aL4()[19] = null, s.a0C()
	}

	function aOj() {
		aOm(), aOk()
	}

	function aOm() {
		aOc.pE.lastChild && aOc.pE.removeChild(aOc.pE.lastChild)
	}

	function aOk() {
		var aOn = bQ.a3m(aC.data);
		aC.data.canvas = bQ.aIi(aOn, aC.data.mapSeed).vU, aOl()
	}

	function aOl() {
		var a1j = aC.data.canvas;
		a1j.style.width = "100%", aOc.pE.appendChild(a1j)
	}
	this.aFt = function(a1j) {
		aC.data.canvas && aOm(), aC.data.canvas = a1j, aOl()
	}, this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(280), [new v("⬅️ " + L(36), aM1)]), 2 === aC.data.mapType && b4.dU(), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), aLO.pN(new tM({
			tQ: [L(357), L(358), L(359)],
			value: aC.data.mapType
		}, function(dx) {
			2 === (aC.data.mapType = dx) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.tA()), s.t(20)
		})), 2 <= aC.data.mapType && (aLO.pQ(new rE), aLO.pQ(new qy({
			value: aC.data.passableWater
		}, L(360), function(value) {
			aC.data.passableWater = value
		})), aLO.pQ(new qy({
			value: aC.data.passableMountains
		}, L(361), function(value) {
			aC.data.passableMountains = value
		})));
		pU.push(aLO)
	}(pU = []), function(pU) {
		if (0 === aC.data.mapType) {
			for (var aLO = new pC, tQ = (aLO.pF(L(280)), []), aA = 0; aA < bQ.vK.aJa.length; aA++) tQ.push(bQ.vK.vL[bQ.vK.aJa[aA]].name);
			aLO.pN(new tM({
				tQ: tQ,
				value: aC.data.mapProceduralIndex
			}, function(dx) {
				aC.data.mapProceduralIndex = dx, aOj()
			})), pU.push(aLO)
		}
	}(pU), function(pU) {
		if (1 === aC.data.mapType) {
			for (var aLO = new pC, tQ = (aLO.pF(L(280)), []), aA = 0; aA < bQ.vK.aJb.length; aA++) tQ.push(bQ.vK.vL[bQ.vK.aJb[aA]].name);
			aLO.pN(new tM({
				tQ: tQ,
				value: aC.data.mapRealisticIndex
			}, function(dx) {
				aC.data.mapRealisticIndex = dx, aOj()
			})), pU.push(aLO)
		}
	}(pU), function(pU) {
		var aLO;
		2 === aC.data.mapType && ((aLO = new pC).pF(L(280)), aLO.pQ(new r4([new v(L(362), function() {
			return b4.aFm(), !0
		}).button])), pU.push(aLO))
	}(pU), function(pU) {
		(aOc = new pC).pF(L(363)), 2 !== aC.data.mapType ? aOk() : aC.data.canvas && aOl();
		pU.push(aOc)
	}(pU), function(pU) {
		var aLO, qN, aLX;
		0 === aC.data.mapType && ((aLO = new pC).pF("Seed"), qN = new qO({
			dx: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOj())
		}), aLX = new v(L(273), function(e) {
			var aId = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aId) return qN.e.value = aC.data.mapSeed = aId, aOj(), !0
		}), aLO.pQ(qN), aLO.pQ(new r4([aLX.button])), pU.push(aLO))
	}(pU), function(pU) {
		var aLO, qN;
		2 === aC.data.mapType && ((aLO = new pC).pF(L(364)), qN = new qO({
			dx: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLO.pQ(qN), pU.push(aLO))
	}(pU), pU))
}

function u(title, pM, aOo, aO3) {
	var aL5, aNC;
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aNC.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aO3 = aO3 || [new v("⬅️ " + L(36), function() {
		s.a0C()
	})], aL5 = new tR(title, aO3), aNC = new r3(aL5.tX, pM), aOo && b8.pZ.textAlign(aL5.tX.style, 1)
}

function aKw() {
	var aLy, aLz, aM0, pU;

	function aM1() {
		aM3(), 2 === aC.data.playerNamesType && 1 === b8.pi.a1N(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		2 === aC.data.playerNamesType && b8.pi.a1b(aM0.ty(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(284), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), aLO.pN(new tM({
			tQ: [L(285), L(286), L(251)],
			value: aC.data.playerNamesType
		}, function(dx) {
			aM3(), aC.data.playerNamesType = dx, s.t(23)
		})), aLO.pQ(new rE), aLO.pQ(new qy({
			value: aC.data.selectableName
		}, L(365), function(value) {
			aC.data.selectableName = value
		})), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO;
		2 === aC.data.playerNamesType && ((aLO = new pC).pF("Data"), aM0 = new tp(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eX || (aC.data.playerNamesData = new Array(aC.eX), aC.data.playerNamesData
			.fill("")), aM0.tw(b8.zU.a36(aC.data.playerNamesData, 1, '"')), aLO.pQ(aM0), pU.push(aLO))
	}(pU), pU))
}

function aKh() {
	var aLy, tu;

	function aOp() {
		s.w();
		var pG = b7.aOt(tu.ty());
		(aC.yp && 0 < pG.length && pG === b7.op.a3c || b7.aGJ.vF(pG)) && b7.aOu()
	}
	this.show = function(aOq) {
		this.aOr(aOq), aLy.show(), this.resize()
	}, this.aOr = function(aOq) {
		0 === aC.yp ? aOq ? tu.tw(aOq) : b7.op.a3c.length && tu.tw(b7.op.a3c) : (aC.gj || (b7.op.a3c = b7.a3d.yI()), tu.tw(b7.aOs(b7.op.a3c)))
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), tu.resize()
	}, this.a0w = function(ev) {
		2 === ev ? aLy.tY[0].pr() : aOp()
	}, aLy = new tR(L(366), [new v("⬅️ " + L(36), function() {
		s.aL3(1)
	}), new v(L(367), function() {
		tu.tz()
	}), new v(L(368), function() {
		tu.u0()
	}), new v(L(369), function() {
		tu.clear()
	}), new v(L(370), function() {
		aOp()
	})]), tu = new tp(L(371)), aLy.tX.appendChild(tu.e)
}

function aKg() {
	var aL5, aL6, pU, aAb, aLO;

	function aOv() {
		var e9;
		aAb !== bh.e7.data[12].value ? (b5.dU(), b5.aAa(), e9 = bd.e9, s.t(4, 1, new u(L(374), L(375), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.e9 < e9 + 1500 || z.a0.a1()
		}, b9.n2)]))) : s.t(1)
	}
	this.show = function() {
			aAb = bh.e7.data[12].value, aL5.show(), this.resize()
		}, this.qq = function() {
			aL5.qq()
		}, this.resize = function() {
			aL5.resize(), aL6.resize()
		}, this.a0w = function(ev) {
			2 === ev && aL5.tY[0].pr()
		}, aL5 = new tR(L(372), [new v("⬅️ " + L(36), aOv), new v(L(373), function() {
			s.w(), bh.r1.uc(), s.t(2)
		})]), pU = [], (aLO = new pC).pF(L(376)), aLO.pH(L(377)), pU.push(aLO),
		function(pU) {
			var aLO = new pC,
				g = (aLO.pF(L(398)), b5.data.aAj());
			aLO.pN(new tM({
				tQ: g,
				value: b5.data.aAn(g)
			}, function(dx) {
				return bh.r1.r2(12, g[dx].split(":")[0]), !0
			})), pU.push(aLO)
		}(pU),
		function(pU) {
			var aLO = new pC,
				aOy = (aLO.pF(L(396)), []);
			aLO.pQ(new r4([new v(L(397), function(e) {
				bV.aOz();
				for (var aA = 0; aA < aOy.length; aA++) aOy[aA].e.value = bV.aA1[aA];
				return b8.pZ.a2D(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aP0.length; aA++) {
				aLO.pH(bV.aP0[aA]);
				for (var et = 0; et < 2; et++) {
					var dx = 2 * aA + et,
						qN = new qO({
							value: bV.aA1[dx],
							dx: -1
						});
					qN.e.aP1 = dx, aOy.push(qN), qN.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aP2(e.target.aP1, code)
					}), et && (qN.e.style.marginLeft = "4%"), qN.e.style.width = "48%", aLO.pQ(qN)
				}
			}
			pU.push(aLO)
		}(pU), (aLO = new pC).pF(L(23)), aLO.pN(new tM({
			tQ: ["1", "2"],
			value: aY.aE1 - 1
		}, function(aA) {
			aY.aE1 = aA + 1
		})), pU.push(aLO), (aLO = new pC).pF(L(378)), bh.e7.data[1].tQ = [L(379), L(380), L(381), L(382)], aLO.pN(new tM(bh.e7.data[1])), pU.push(aLO), (aLO = new pC).pF(L(383)), bh.e7.data[9].tQ = [L(380), L(384), L(385)], aLO.pN(new tM(bh.e7.data[
			9])), pU.push(aLO), (aLO = new pC).pF(L(386)), bh.e7.data[11].tQ = [L(387), L(9), L(388)], aLO.pN(new tM(bh.e7.data[11])), pU.push(aLO), (aLO = new pC).pF(L(389)), aLO.pQ(new qy(bh.e7.data[2])), pU.push(aLO), (aLO = new pC).pF(L(390)),
		aLO.pQ(new qy(bh.e7.data[7])), pU.push(aLO), (aLO = new pC).pF(L(391)), aLO.pQ(new qy(bh.e7.data[8])), pU.push(aLO), (aLO = new pC).pF(L(392)), aLO.pQ(new qO(bh.e7.data[5])), pU.push(aLO), (aLO = new pC).pF(L(393)), aLO.pQ(new qy(bh.e7.data[
			13], L(394))), aLO.pQ(new qy(bh.e7.data[14], L(395))), pU.push(aLO), aL6 = new pS(aL5.tX, pU)
}

function aKx() {
	var aLy, aLz, aM0, pU;

	function aM1() {
		aM3(), 2 !== aC.data.spawningType || b8.pi.a1N(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		2 === aC.data.spawningType && b8.pi.a1Z(aM0.ty(), aC.data.spawningData, bQ.aFv - 1)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(399), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC,
			tQ = (aLO.pF(L(248)), [L(273), L(283), L(251)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tQ.splice(1, 1), 0 < value) && (value = 1);
		aLO.pN(new tM({
			tQ: tQ,
			value: value
		}, function(dx) {
			aM3(), aC.data.spawningType = dx, 0 === aC.data.gameMode && 1 === dx && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eX)), s.t(24)
		})), aLO.pQ(new rE), aLO.pQ(new qy({
			value: aC.data.selectableSpawn
		}, L(400), function(value) {
			aC.data.selectableSpawn = value
		})), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO = new pC;
		aLO.pF("Seed"), aLO.pQ(new qO({
			dx: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pU.push(aLO)
	}(pU), function(pU) {
		var aLO;
		2 === aC.data.spawningType && ((aLO = new pC).pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.spawningData, 2)), aLO.pQ(aM0), pU.push(aLO))
	}(pU), pU))
}

function aKf() {
	var aL5, aO0, aO1, tS;

	function aP3(id) {
		0 !== z.id || bh.e7.data[140].value ? 0 === id ? s.t(8, 1, new rp(16)) : s.t(2) : s.x.aNu(s.ro, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aL5.show(), this.resize(), this.ij()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aO0.resize()
	}, this.ij = function() {
		8 === aZ.a02() && (2 <= bb.aP8 ? aO1[2].ps === b9.mr && aO1[2].pu(0) : aO1[2].ps !== b9.mr && aO1[2].pu(b9.mr), !aC.gj && aL.pA(aC.eK) ? aO1[1].ps === b9.mr && aO1[1].pu(0) : aO1[1].ps !== b9.mr && aO1[1].pu(b9.mr), !aC.gj && au.hK(aC
			.eK) ? aO1[0].ps === b9.mr && aO1[0].pu(0) : aO1[0].ps !== b9.mr && aO1[0].pu(b9.mr))
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aO1 = [new v(L(401), function() {
		aP3(0)
	}), new v(L(305), function() {
		s.t(16)
	}), new v(L(356), function() {
		s.t(17)
	}), new v(L(402), function() {
		s.x.aMv()
	}, 0, 0, 1), new v(L(366), function() {
		s.t(3, 1)
	}), new v(L(403), function() {
		s.t(18)
	}), new v(L(372), function() {
		aP3(1)
	}), new v(L(404), function() {
		s.t(4, 1, new u(L(404), b8.pZ.a28(["Patreon", L(413), L(414), "Discord", L(415), L(298), L(416), L(114), L(417), L(418), L(419)], [bI.aLw, bI.aB0, bI.zx, bI.aB1, bI.aP9, bI.aPA, bI.zf, bI.aPB, bI.aPC, bI.aPD, bI.aOa]), !1, [new v(
			"⬅️ " + L(36),
			function() {
				s.t(1)
			})]))
	}), new v(L(405), function() {
		s.t(4, 1, new u(L(405), l.dk + "<br><a href='" + bI.aP9 + "' target='_blank'>" + bI.aP9 + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(36), function() {
				s.t(1)
			})]))
	}), new v(L(406), function() {
		s.t(4, 1, new u(L(406), L(420) + "<br>" + L(421), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		}), new v(L(422), function() {
			z.a0.zr(), s.t(1)
		})]))
	}), new v(L(407), function() {
		z.a0.zs(), s.t(4, 1, new u(L(423), L(424) + " <a href='" + bI.aOa + "' target='_blank'>" + bI.aOa + "</a>", !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		})]))
	})], tS = [new v("⬅️ " + L(36), function() {
		s.x.aAf()
	})], 8 === aZ.a02() && (aO1.unshift(new v(L(410), function() {
		2 <= bb.aP8 && (s.w(), bc.a0z(), bd.dc = !0)
	}, 0, 1)), aO1.unshift(new v(L(411), function() {
		!aC.gj && aL.pA(aC.eK) && (b6.gw.oH(), s.w(), aL.gk) && aL.a0z()
	}, 0, 1)), aO1.unshift(new v(L(412), function() {
		!aC.gj && au.hK(aC.eK) && (bT.a48(2), b6.gw.hG(), s.w(), aL.gk) && aL.a0z()
	}, 0, 1))), 1 === z.id && 5 <= z.dk && aO1.push(new v(L(408), function() {
		z.a0.zt()
	})), aL5 = new tR(L(409), tS), aO0 = new q8(aO1, aL5.tX)
}

function aL1() {
	var aLy, aLz, aM0, pU;

	function aM1() {
		aM3(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		2 === aC.data.sResourcesType && b8.pi.a1Z(aM0.ty(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(289), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), aLO.pN(new tM({
			tQ: [L(249), L(250), L(251)],
			value: aC.data.sResourcesType
		}, function(dx) {
			aM3(), 2 !== dx || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eX)), aC.data.sResourcesType = dx, s.t(28)
		})), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO;
		1 === aC.data.sResourcesType && ((aLO = new pC).pF("Value"), aLO.pQ(new qO({
			dx: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pU.push(aLO))
	}(pU), function(pU) {
		var aLO;
		2 === aC.data.sResourcesType && ((aLO = new pC).pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.sResourcesData, 2)), aLO.pQ(aM0), pU.push(aLO))
	}(pU), pU))
}

function aKz() {
	var aLy, aLz, aM0, pU;

	function aM1() {
		aM3(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aL4()[19] = null, s.a0C()
	}

	function aM3() {
		2 === aC.data.tIncomeType && b8.pi.a1Z(aM0.ty(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aLy.show(), this.resize()
	}, this.qq = function() {
		aLy.qq()
	}, this.resize = function() {
		aLy.resize(), aLz.resize()
	}, this.a0w = function(ev) {
		2 === ev && aLy.tY[0].pr()
	}, aLy = new tR(L(287), [new v("⬅️ " + L(36), aM1)]), aLz = new pS(aLy.tX, (function(pU) {
		var aLO = new pC;
		aLO.pF(L(248)), aLO.pN(new tM({
			tQ: [L(249), L(250), L(251)],
			value: aC.data.tIncomeType
		}, function(dx) {
			aM3(), 2 !== dx || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eX), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dx, s.t(26)
		})), pU.push(aLO)
	}(pU = []), function(pU) {
		var aLO;
		1 === aC.data.tIncomeType && ((aLO = new pC).pF("Value"), aLO.pQ(new qO({
			dx: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p7(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pU.push(aLO))
	}(pU), function(pU) {
		var aLO;
		2 === aC.data.tIncomeType && ((aLO = new pC).pF("Data"), (aM0 = new tp(0, 1, 0, 1)).tw(b8.zU.a36(aC.data.tIncomeData, 4)), aLO.pQ(aM0), pU.push(aLO))
	}(pU), pU))
}

function aKr() {
	var aL5, aL6, pU;
	this.show = function() {
		aL5.show(), this.resize()
	}, this.qq = function() {
		aL5.qq()
	}, this.resize = function() {
		aL5.resize(), aL6.resize()
	}, this.a0w = function(ev) {
		2 === ev && aL5.tY[0].pr()
	}, aL5 = new tR(L(403), [new v("⬅️ " + L(36), function() {
		s.a0C()
	})]), aL6 = new pS(aL5.tX, ((pU = []).push(function() {
		function aLU() {
			aPI.button.textContent = L(171), aPG.e.readOnly = !1, aPH.e.readOnly = !1, aLS.pu(1), aLS.button.style.color = b9.mf
		}
		var aLO = new pC,
			aPF = (aLO.pF(L(425)), new qO({
				value: bh.e7.data[105].value,
				dx: -1
			})),
			aPG = (aPF.e.readOnly = !0, aLO.pQ(aPF), aLO.pF(L(329), "0.8em"), new qO(bh.e7.data[148])),
			aPG = new qO(bh.e7.data[148], 0, void 0, function(e) {
				aLR(bh.e7.data[149].value, e.target.value)
			}),
			aPH = (aLO.pQ(aPG), aLO.pF(L(333), "0.8em"), new qO(bh.e7.data[149], 1, void 0, function(e) {
				aLR(e.target.value, bh.e7.data[148].value)
			})),
			aPI = (aLO.pQ(aPH), new v(L(171), function(e) {
				return e.textContent === L(171) ? (e.textContent = L(172), aPG.e.readOnly = !0, aPH.e.readOnly = !0, aLS.pu(0), aLS.button.style.color = b9.nb, bh.r1.r2(149, aPH.e.value), aLR(bh.e7.data[149].value, bh.e7.data[
					148].value)) : aLU(), !0
			})),
			aLS = (aLO.pQ(new r4([aPI.button])), new v(L(14), function(e) {
				return aPG.e.readOnly && ay.x.aLT(0) && (b8.pZ.a2D(e), aLU(), ay.aLV.aLW({
					rq: 0,
					rm: bh.e7.data[148].value,
					value: parseInt(bh.e7.data[149].value, 10)
				})), !0
			}, 1)),
			pI = aLO.pH(),
			aLR = (aLO.pH(L(173)).style.fontWeight = "bold", function(f2, pG) {
				f2 = b8.fv.a2i(f2, 2, 1e6);
				var aLY = Math.max(1, 1 + Math.floor(.01 * (f2 - 100)));
				pI.textContent = L(174, [f2, bh.e7.data[105].value, aLY, pG, f2 - aLY])
			});
		return aLO.pQ(new r4([aLS.button])), aLR(bh.e7.data[149].value, bh.e7.data[148].value), aLO
	}()), pU))
}

function br() {
	"function" != typeof Math.log2 && (Math.log2 = function(eh) {
		return Math.log(eh) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eh) {
		return Math.log(eh) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eh) {
		return 0 < eh ? 1 : eh < 0 ? -1 : 0
	})
}

function cc() {
	var a7r, aPK, aPL, aPM, aPJ = !1;

	function aPN() {
		aPJ = !0, a7r = -1, aPK = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aPK[aA] = !1;
		var wL = Math.floor(1 + .02 * h.min);
		aPL = new Array(4), (aPM = new Array(4))[1] = aPM[3] = aPL[0] = aPL[2] = 0, aPM[0] = aPL[3] = -wL, aPL[1] = aPM[2] = wL
	}

	function aPO() {
		if (-1 !== a7r)
			if (0 !== aC.yp && aG.mN()) {
				for (var aPP = !1, aA = 3; 0 <= aA; aA--) aPK[aA] && (aPP = !0, iA += aPL[aA], iC += aPM[aA], ae.a0O(aPL[aA], aPM[aA]), aR.a7Z());
				aPP ? bd.dc = !0 : ap.mD()
			} else ap.mD()
	}
	this.a0u = function(dx) {
		0 !== aC.yp && aG.mN() && (aPJ || aPN(), aPK[dx] = !0, -1 === a7r) && (a7r = setInterval(aPO, 20), aPO())
	}, this.a0x = function(dx) {
		if (0 !== aC.yp && (aPJ || aPN(), aPK[dx] = !1, -1 !== a7r)) {
			for (var aPP = !1, aA = 3; 0 <= aA; aA--) aPP = aPP || aPK[aA];
			aPP || this.mD()
		}
	}, this.mD = function() {
		if (aPJ && -1 !== a7r) {
			for (var aA = 3; 0 <= aA; aA--) aPK[aA] = !1;
			clearInterval(a7r), a7r = -1
		}
	}
}

function cd() {
	this.x = new aPQ, this.lL = new aPR, this.ny = new aPS, this.aCi = new aPT, this.aAc = new aPU, this.aLV = new aPV, this.oZ = new aPW, this.aNJ = new aPX, this.a5L = new aPY, this.aPZ = new aPa, this.aPb = new aPc, this.aPd = new aPe, this.aPf =
		new aPg, this.dU = function() {
			this.x.dU()
		}
}

function aPQ() {
	var aPh, aPj;
	this.aE4 = 5, this.aPi = null;

	function aPq(aA) {
		return aPj[aA].aPJ && aPh[aA].aPq()
	}

	function aPs(zz) {
		aPj[zz].e9 = bd.e9, aPj[zz].aPl = !1
	}
	this.a08 = 0, this.a07 = 0, this.dU = function() {
		this.aPi = new Array(this.aE4);
		this.aPi[0] = "territorial.io";
		var aId = aw.aIy(0);
		aw.a3S(0);
		for (var aA = 1; aA < this.aE4; aA++) this.aPi[aA] = aJ.yO() + ".territorial.io";
		for (aw.a3S(aId), aPh = new Array(this.aE4), aPj = new Array(this.aE4), aA = this.aE4 - 1; 0 <= aA; aA--) aPj[aA] = {
			aPJ: !1,
			e9: 0,
			aPl: !1
		};
		this.aE5(0, 0)
	}, this.aPm = function(aA) {
		return aPh[aA]
	}, this.ij = function() {
		for (var aA = this.aE4 - 1; 0 <= aA; aA--) this.aLT(aA) && bd.e9 > aPj[aA].e9 + 15e3 && ay.ny.aPn(aA, aPj[aA].aPl);
		!this.aLT(0) && bd.e9 > aPj[0].e9 + 8e3 && (aPj[0].e9 = bd.e9, this.aE5(0, 0))
	}, this.aNF = function(id) {
		return this.aE5(0, id) && this.aPo(0)
	}, this.aE5 = function(zz, aKd) {
		if (aPj[zz].aPJ) {
			if (aPh[zz].aPq()) return aPh[zz].aPr(aKd), aPh[zz].aLT();
			aPh[zz].qq()
		}
		return this.aPp(zz, aKd), !1
	}, this.aPp = function(zz, aKd) {
		aPj[zz].aPJ = !0, aPs(zz), aPh[zz] = new aPt, aPh[zz].dU(zz, aKd)
	}, this.aPr = function(zz, aKd) {
		aPq(zz) && aPh[zz].aPr(aKd)
	}, this.aPu = function(zz, aKd) {
		ay.aAc.aPv(zz)
	}, this.aPo = function(aA) {
		return this.aLT(aA) && aPh[aA].aPo()
	}, this.aPw = function(aA) {
		aPh[aA].aPw()
	}, this.aLT = function(aA) {
		return aPj[aA].aPJ && aPh[aA].aLT()
	}, this.send = function(zz, aB) {
		aPs(zz), aPh[zz].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0f = function(zz) {
		8 === aZ.a02() && (aPj[zz].aPl = !0, ay.lL.aPx = !0)
	}, this.close = function(zz, aPy) {
		aPq(zz) && aPh[zz].close(aPy)
	}, this.aPz = function(zz, aPy) {
		q.a0D(aPy), aPq(zz) && aPh[zz].close(aPy)
	}, this.a0E = function(aPy) {
		for (var aA = this.aE4 - 1; 0 <= aA; aA--) this.close(aA, aPy)
	}, this.aQ0 = function(zz, aPy) {
		for (var aA = this.aE4 - 1; 0 <= aA; aA--) aA !== zz && this.close(aA, aPy)
	}, this.a3e = function() {
		this.close(this.a08, 3246)
	}, this.aQ1 = function(zz, e) {
		aPh[zz].qq(), q.zy(zz, e.code)
	}
}

function aPR() {
	this.aPx = !1, this.ij = function() {
		bd.jm() % 250 != 249 || aC.gj || (ay.aAc.aQ2(+(this.aPx && af.ld[aC.eK]), ak.jq + bL.x.on), this.aPx = !1)
	}
}

function aPY() {
	function aQT(aQU) {
		var ed = aC.data,
			aQU = (ed.selectedPlayer = bF.oa(aQU), ed.spawningSeed = bF.oa(14), bF.oa(4)),
			aQU = (aQU < 7 ? (ed.gameMode = 1, ed.numberTeams = aQU + 2) : 9 === aQU ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === aQU ? 0 : 10 === aQU ? 1 : 2), ed.isContest = bF.oa(1), bF
				.oa(6));
		return ed.mapType = bQ.aBl(aQU) ? 0 : 1, bQ.aBm(ed, aQU), ed.mapSeed = bF.oa(14), aQU
	}
	this.aQ4 = function(zz, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aPz(zz, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oa(1) ? function(zz) {
			var aQ8 = bF.oa(6);
			0 === aQ8 ? function(zz) {
					if (0 === zz && 8 !== aZ.a02()) {
						s.x.aOb();
						for (var aQL = bF.oa(12), aQM = bF.oa(6), g = new Array(aQL), aA = 0; aA < aQL; aA++) g[aA] = bF.oa(aQM);
						aS.a7y(g)
					}
				}(zz) : 2 === aQ8 ? ay.aPZ.aQA(zz) : 3 === aQ8 || 4 === aQ8 ? av.dU() : 9 === aQ8 ? ay.aPb.aQB(zz) : 10 === aQ8 ? ay.aPd.aQC() : 11 === aQ8 ? ay.aPb.aQD(zz) : 12 === aQ8 ? ay.aPd.aQE() : 13 === aQ8 ? ay.aPf.aQF() :
				14 === aQ8 ? ay.aPf.aQG() : 15 === aQ8 ? ay.aPb.aQH() : 16 === aQ8 ? ay.aPZ.aQI(zz) : 17 === aQ8 ? ay.aPZ.aQJ(zz) : 19 === aQ8 && ay.aPZ.aQK(zz)
		} : function(zz) {
			if (8 !== aZ.a02() && !av.aEa()) return;
			if (zz !== ay.x.a08) ay.x.aPz(zz, 3244);
			else if (0 === bF.oa(1)) bd.yy.aQV(bF.aB);
			else {
				var aA, zz = bF.oa(2);
				if (0 === zz) {
					var oC, ny = bF.oa(9);
					0 !== af.ld[ny] && 0 !== af.ld[aC.eK] && (oC = bF.oa(10), aM.oB(ny, aC.eK, oC), ae.p8(ny, 1, oC))
				} else if (1 === zz) ! function() {
					var ny = bF.oa(9);
					0 !== af.ld[ny] && 0 !== af.ld[aC.eK] && b3.aIN(0, [ny], !0) && aM.oS(ny, 1)
				}();
				else if (2 === zz) ! function() {
					var ny = bF.oa(9),
						target = bF.oa(9);
					0 !== af.ld[ny] && 0 !== af.ld[target] && 0 !== af.ld[aC.eK] && b3.aIN(1, [ny], !0) && (ae.p8(ny, 3, 96), ae.p8(target, 4, 96), aM.a5S(ny, target))
				}();
				else if (l.a8 && !l.a9) {
					var ea = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), ea = Math.min(b6.nv.oc.length, 540), aA = 0; aA < ea; aA++) bB.aQb(32, b6.nv.oc[aA]);
					ay.x.send(ay.x.a08, bB.aB)
				}
			}
		})(zz), bd.aQ7())
	}, this.aQN = function(aB) {
		if (bF.dU(aB), bF.dx = 1, 3 === bF.oa(6)) {
			bF.dx += 20;
			var ed = aC.data = new a3M,
				aB = aQT(9),
				aBn = ed.humanCount = bF.oa(9) + 1;
			ed.selectableSpawn = 1 === ed.gameMode || aBn < 100, ed.colorsData = new Uint32Array(aBn), ed.playerNamesData = new Array(aBn);
			for (var aA = 0; aA < aBn; aA++) bF.dx++, ed.colorsData[aA] = bF.oa(18), ed.playerNamesData[aA] = bE.uv.uz(bF.oa(5));
			aZ.aEG(), bQ.a6(aB, ed.mapSeed), aC.a3Q()
		} else ! function() {
			bF.dx += 20;
			var ed = aC.data = new a3M,
				aQS = aQT(1);
			ed.humanCount = 2;
			ed.selectableSpawn = 1, ed.elo = new Uint16Array(2), ed.colorsData = new Uint32Array(2), ed.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dx++, ed.colorsData[aA] = bF.oa(18), ed.elo[aA] = bF.oa(14), ed.playerNamesData[aA] = bE.uv.uz(bF.oa(5));
			aZ.aEG(), bQ.a6(aQS, ed.mapSeed), aC.a3Q()
		}()
	}, this.aQQ = function() {
		bF.dx = 1;
		var aQ8 = bF.oa(6),
			aQR = bF.oa(10);
		return ay.x.a07 === aQR ? (ay.x.a08 = aQR, !1) : (ay.x.close(ay.x.a07, 3247), ay.x.a08 = aQR, av.aBi = bF.oa(10), av.aEO = bF.oa(3 === aQ8 ? 9 : 1), ay.x.aE5(aQR, 5) && ay.ny.aEV(), !0)
	}
}

function aPe() {
	this.aQC = function() {
		bh.x.uT(), bh.r1.r2(105, bD.rr.rs(bD.rr.rt(5))), bh.r1.r2(106, bD.rr.rs(bD.rr.rt(8))), bh.r1.r2(109, bF.oa(30)), bh.r1.r2(108, bh.e7.data[109].value), bh.r1.r2(111, bh.e7.data[109].value + 1), bh.r1.r2(107, 0), bh.r1.r2(110, "")
	}, this.aQE = function() {
		var data;
		bF.size < bB.aQc(29) ? ay.x.aPz(0, 3254) : ((data = {
			rn: bF.oa(30),
			ug: bF.oa(16),
			uh: bF.oa(30),
			ui: bF.oa(30),
			uj: bF.oa(30),
			uk: bF.aQd(32),
			username: bE.ux.vF(5),
			ul: bE.ux.vF(3),
			um: bE.ux.vF(3),
			un: bF.aQd(32),
			uo: bF.aQd(32),
			up: bF.oa(30),
			uq: bF.aQd(32),
			ur: bF.aQd(32),
			us: bF.aQd(32),
			ut: bF.aQd(32),
			aLd: bF.aQd(32),
			aLe: bF.aQd(30),
			aLp: bF.aQd(32),
			aLq: bE.ux.vF(3),
			aLi: bF.aQd(2),
			aLj: bF.aQd(10),
			aLg: bE.ux.vF(8),
			aLk: bF.aQd(5),
			aLQ: bF.oa(30),
			aLc: bF.oa(30),
			zH: bF.aQd(32),
			aLs: bF.oa(1),
			aLr: bF.oa(1)
		}).aLs && (data.aLt = bF.aQd(32), data.aLu = bF.oa(30), data.aLv = bF.oa(30)), 8 === s.ro && (25 === s.aDJ().aNE ? (data.aL7 = !0, s.x.aKo = data, s.aDJ().aNT(25, !1)) : (data.aL7 = !1, bh.r1.r2(160, data.aLs), data.rm = bh.e7
			.data[105].value, s.x.aKl = data, bh.r1.uf(data), s.aDJ().aNT(16, !0))))
	}
}

function aPg() {
	this.aQF = function() {
		var aA;
		if (bF.size < bB.aQc(23)) ay.x.aPz(0, 3259);
		else {
			var s8 = bF.oa(6),
				ea = bF.oa(10),
				data = [];
			if (9 === s8 || 10 === s8 || 11 === s8) {
				for (aA = 0; aA < ea; aA++) data.push([bF.oa(30), bE.ux.vF(5), bF.aQd(32), 0, bF.oa(30)]);
				8 === s.ro && s.aDJ().aNT(21, !0, {
					s8: s8,
					data: data
				})
			} else {
				var hS = bF.oa(16);
				if (bF.aQe(39 + 16 * hS + ea * (0 === s8 ? 111 : 1 === s8 ? 101 : 2 === s8 || 3 === s8 ? 127 : 212))) {
					if (0 === s8)
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(30), bE.uv.uz(bF.oa(5)), bF.oa(16), bF.oa(30), bF.oa(30)]);
					else if (1 === s8)
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(16), bE.uv.uz(bF.oa(3)), bF.oa(16), bE.uv.uz(bF.oa(5)), bF.oa(31), bF.oa(30)]);
					else if (2 === s8 || 3 === s8)
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(30), bE.uv.uz(bF.oa(5)), bF.aQd(32), bF.oa(30), bF.oa(30)]);
					else
						for (aA = 0; aA < ea; aA++) data.push([bF.oa(20), bF.oa(30), bF.oa(30), bF.oa(30), bF.oa(30), bF.aQd(32), bF.oa(30), bE.uv.uz(bF.oa(5)), bE.uv.uz(bF.oa(5))]);
					8 === s.ro && s.aDJ().aNT(21, !0, {
						s8: s8,
						data: data
					})
				} else ay.x.aPz(0, 3260)
			}
		}
	}, this.aQG = function() {
		if (bF.size < bB.aQc(29)) ay.x.aPz(0, 3265);
		else {
			var aQf = bF.oa(4),
				aQg = bF.oa(7),
				aQh = bF.oa(11);
			if (bF.aQe(29 + 16 * aQg + 16 * aQh + 11 * aQf)) {
				for (var data = [], aA = 0; aA < aQf; aA++) {
					for (var zY = bE.uv.uz(bF.oa(3)), aQi = bF.oa(8), aMS = [], et = 0; et < aQi; et++) aMS.push(bF.oa(16));
					data.push({
						name: "[" + zY + "]",
						aMS: aMS
					})
				}
				8 === s.ro && s.aDJ().aNT(23, !0, data)
			} else ay.x.aPz(0, 3266)
		}
	}
}

function aPa() {
	function aQk() {
		var id = bF.oa(3);
		return 0 === id ? {
			id: id,
			rm: bF.oa(30),
			p: bl.aB6.aCo(bE.ux.vF(7))
		} : 1 === id ? {
			id: id,
			rm: bF.oa(30),
			aBt: bF.oa(3),
			value: bF.oa(30),
			target: bF.oa(30)
		} : 2 === id ? {
			id: id,
			rm: bF.oa(30),
			aBt: bF.oa(3)
		} : 3 === id ? {
			id: id,
			rm: bF.oa(30),
			aBt: bF.oa(3),
			value: bF.oa(4),
			target: bF.oa(30)
		} : 4 === id ? {
			id: id,
			rm: bF.oa(30),
			aBt: bF.oa(3),
			target: bF.oa(30)
		} : 5 === id ? {
			id: id,
			aBt: bF.oa(3)
		} : 6 === id ? {
			id: id,
			value: bF.oa(17)
		} : null
	}
	this.aQA = function(zz) {
		if (zz !== ay.x.a07) ay.x.close(zz, 3239);
		else if (6 !== aZ.a02()) ay.x.close(zz, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qd = bl.x.qe[aA],
					playerCount = (qd.sf = bF.oa(10), qd.eG = bF.oa(6), qd.mapSeed = bF.oa(14), qd.aBe = bF.oa(4), qd.aDK = bF.oa(6), qd.aDL = bF.oa(4), qd.aBk = bF.oa(1), qd.aCO = bF.oa(12), qd.spawningSeed = bF.oa(14), bF.oa(16));
				bl.su.sw[aA] = bF.oa(16);
				for (var et = 0; et < playerCount; et++) bl.su.aBH(aA, bF.oa(30), bE.ux.vF(5), bF.oa(4), bF.oa(30), bF.oa(7), bF.oa(16), bF.oa(18), bF.oa(11), bF.oa(12))
			}
			s.t(29), bl.x.aCE(!0)
		}
	}, this.aQI = function(zz) {
		if (zz !== ay.x.a07) ay.x.close(zz, 3239);
		else if (bl.a06) {
			bl.x.aCC[0] = bF.oa(20), bl.x.aCC[1] = bF.oa(20);
			for (var aQj = bF.oa(16), et = 0; et < aQj; et++) {
				var id = bF.oa(3);
				0 === id ? bl.su.aBH(bF.oa(2), bF.oa(30), bE.ux.vF(5), 0, 1234566, 127, 0, bF.oa(18), 0, bF.oa(12)) : 1 === id ? bl.su.aBY(bF.oa(16), bF.oa(2)) : 2 === id ? bl.su.aBU(bF.oa(16), bF.oa(2), bF.oa(2)) : 3 === id ? bl.su.aBX(bF.oa(
					16), bF.oa(2)) : 4 === id ? bl.su.aBN(bF.oa(16), bF.oa(2), bF.oa(4), bF.oa(30), bF.oa(7), bF.oa(16), bF.oa(11)) : 5 === id && bl.su.aBO(bF.oa(16), bF.oa(2), bF.oa(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qd = bl.x.qe[aA];
				if (qd.sf = bF.oa(10), 0 === qd.sf) {
					if (qd.a08 = bF.oa(10), qd.aBi = bF.oa(10), bl.aB7.dd(aA)) return;
					qd.eG = bF.oa(6), qd.mapSeed = bF.oa(14), qd.aBe = bF.oa(4), qd.aDK = bF.oa(6), qd.aDL = bF.oa(4), qd.aBk = bF.oa(1), qd.aCO = bF.oa(12), qd.spawningSeed = bF.oa(14), qd.aDM.push(qd.aDM[0]), qd.aDM.shift()
				}
			}
			bl.x.aCG()
		} else ay.x.close(zz, 3251)
	}, this.aQJ = function(zz) {
		if (zz !== ay.x.a07) ay.x.close(zz, 3272);
		else if (bl.a06) {
			for (var qb = bF.oa(4), qd = bl.x.qe[qb], qf = qd.qf, t9 = (qd.qg = bF.oa(20), bF.oa(6)), aA = 0; aA < t9; aA++) qf.push(aQk());
			bl.x.aCP(qb)
		} else ay.x.close(zz, 3273)
	}, this.aQK = function(zz) {
		zz !== ay.x.a07 ? ay.x.close(zz, 3276) : bl.a06 ? bl.message.aCk(aQk()) : ay.x.close(zz, 3277)
	}
}

function aPc() {
	this.aQB = function(zz) {
		var aQX, q6;
		bF.aQe(70) ? (aQX = bF.oa(3), q6 = bg.aQl.ij(bF.oa(30), bF.oa(30)), ay.aAc.aQm(zz, q6, aQX), 0 < aQX || (0 === zz && 0 === bh.e7.data[105].value.length ? ay.aAc.aNI(0) : ay.aLV.aQn(zz), 4 === ay.x.aPm(zz).aQo() ? 6 === aZ.a02() && ay.aCi
			.aE6(zz) : 5 !== ay.x.aPm(zz).aQo() || 8 !== aZ.a02() && 10 !== aZ.a02() || ay.ny.aEV())) : ay.x.aPz(zz, 3269)
	}, this.aQD = function(zz) {
		var id = bF.oa(6);
		1 === id ? (bh.r1.r2(160, bF.oa(30)), ay.x.aPw(zz), aS.a7u || ay.aAc.aNI(1), b5.aAa(), 8 === s.ro && s.aDJ().aNS()) : 21 === id ? 8 === s.ro && s.aDJ().aNT(17) : 22 === id && (bh.r1.r2(106, bh.e7.data[110].value), bh.r1.r2(110, ""), 8 ===
			s.ro) && s.aDJ().aNT(16)
	}, this.aQH = function() {
		var ea = bF.oa(16),
			aQp = bF.oa(16);
		if (bF.aQe(55 + 10 * ea + 16 * aQp)) {
			for (var g = [], aA = 0; aA < ea; aA++) g.push(bE.uv.uz(bF.oa(10)));
			b5.aAe(g)
		} else ay.x.aPz(0, 3270)
	}
}

function aPS() {
	this.aPn = function(zz, aPl) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPl ? 1 : 0), ay.x.send(zz, bB.aB)
	}, this.aEV = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.a07), bB.a7(10, av.aBi), bB.a7(9, av.aEO), bB.a7(10, l.dm), bB.a7(14, l.dg), ay.x.send(ay.x.a08, bB.aB)
	}, this.nz = function(eM) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eM), ay.x.send(ay.x.a08, bB.aB)
	}, this.o0 = function(i9, j0) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, i9), bB.a7(10, j0), ay.x.send(ay.x.a08, bB.aB)
	}, this.o4 = function(i9, o2) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, i9), bB.a7(9, o2), ay.x.send(ay.x.a08, bB.aB)
	}, this.o5 = function(i9, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, i9), bB.a7(22, eM), ay.x.send(ay.x.a08, bB.aB)
	}, this.o8 = function(m1, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m1), bB.a7(22, eM), ay.x.send(ay.x.a08, bB.aB)
	}, this.oA = function(j0) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, j0), ay.x.send(ay.x.a08, bB.aB)
	}, this.oE = function(dx) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dx), ay.x.send(ay.x.a08, bB.aB)
	}, this.oG = function(oF) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oF), ay.x.send(ay.x.a08, bB.aB)
	}, this.oI = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a08, bB.aB)
	}, this.oJ = function(i9, eM, j0) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, i9), bB.a7(10, j0), bB.a7(22, eM), ay.x.send(ay.x.a08, bB.aB)
	}, this.oQ = function(aQq, aQr) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQr), bB.a7(10, aQq), ay.x.send(ay.x.a08, bB.aB)
	}, this.oT = function(a5L) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5L), ay.x.send(ay.x.a08, bB.aB)
	}, this.oX = function(aQs, target) {
		var aA, ea = aQs.length;
		for (bB.a6(14 + 9 * ea), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < ea; aA++) bB.a7(9, aQs[aA]);
		ay.x.send(ay.x.a08, bB.aB)
	}
}

function aPV() {
	this.aQt = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAc.aQu(), ay.x.send(0, bB.aB)
	}, this.aQn = function(zz) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rr.vB(bh.e7.data[105].value, 5), bE.rr.vB(bh.e7.data[106].value, 8), bB.a7(30, bh.e7.data[109].value), ay.x.send(zz, bB.aB)
	}, this.aNV = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rr.vA(bh.e7.data[110].value), ay.x.send(0, bB.aB)
	}, this.aNR = function(a2l) {
		var ea = a2l.pG.length;
		bB.a6(21 + 16 * ea), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2l.rq), bB.a7(8, ea), bD.uv.vA(a2l.pG), ay.x.send(0, bB.aB)
	}, this.aLl = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.rq), bE.rr.vB(data.rm, 5), ay.x.send(0, bB.aB)
	}, this.aLW = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.rq), bE.rr.vB(data.rm, 5), bB.aQb(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPW() {
	this.oY = function() {
		for (var ea = aC.jp, ye = bP.result.ye, kX = ye.length, zP = (bB.a6(17 + 16 * ea + 33 * kX), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kX), bB.a7(1, +(2 === aC.ym)), bB.a7(1, aC.z6 % 2), af.zP), aA = 0; aA < ea; aA++) bB.a7(16, zP[aA]);
		for (var gN = af.gN, aA = 0; aA < kX; aA++) {
			var g7 = ye[aA];
			bB.a7(9, g7), bB.a7(24, gN[g7])
		}
		ay.x.send(ay.x.a08, bB.aB)
	}
}

function aPX() {
	this.aNK = function(s8, s9, sA) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, s8), bB.a7(1, +(s9 < 0)), bB.a7(1, +(sA < 0)), bB.a7(30, Math.abs(s9)), bB.a7(30, Math.abs(sA)), ay.x.send(0, bB.aB)
	}, this.aNL = function(s8, aNM, aNN) {
		bB.a6(18 + 16 * aNM.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, s8), ay.aAc.aQw(aNM), bB.a7(30, aNN), ay.x.send(0, bB.aB)
	}, this.aNQ = function(s8, aNM, aNN) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, s8), bE.rr.vB(aNM, 5), bB.a7(30, aNN), ay.x.send(0, bB.aB)
	}, this.aNO = function(aMR, zX) {
		for (var ea = zX.length, hS = 0, aA = 0; aA < ea; aA++) hS += zX[aA].length;
		for (bB.a6(21 + 3 * ea + 16 * hS), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aMR), bB.a7(4, ea), bB.a7(7, hS), aA = 0; aA < ea; aA++) bB.a7(3, zX[aA].length), bD.uv.vA(zX[aA]);
		ay.x.send(0, bB.aB)
	}, this.aNP = function(aMR, s9, sA) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aMR), bB.a7(1, +(s9 < 0)), bB.a7(1, +(sA < 0)), bB.a7(20, Math.abs(s9)), bB.a7(20, Math.abs(sA)), ay.x.send(0, bB.aB)
	}
}

function aPT() {
	this.aE6 = function(zz) {
		var username = bh.e7.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, l.dm), bB.a7(2, bh.e7.data[158].value), ay.aAc.aQw(username), b8.color.a1o(bh.x.ua())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAg());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a07 = zz, ay.x.send(zz, bB.aB)
	}, this.aCj = function(aQz, a2l) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aQz), 2 === aQz ? bC.a7(2, a2l) : 3 === aQz ? bD.ux.yI(a2l, 7, bC) : 5 === aQz && (bC.a7(3, a2l.id), bC.a7(3, a2l.value), bC.a7(30, a2l.rm)), ay.x.send(ay.x.a07, bC.aR0())
	}
}

function aPU() {
	this.aPv = function(zz) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dg), bB.a7(4, z.id), bB.a7(7, z.dk), bB.a7(1, +l.a8), bB.a7(1, +l.a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(zz, bB.aB)
	}, this.aQm = function(zz, q6, aQX) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQX), bB.a7(30, q6[0]), bB.a7(30, q6[1]), ay.x.send(zz, bB.aB)
	}, this.aNI = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAd = function(id, pG) {
		var ea = Math.min(pG.length, 63);
		bB.a6(19 + 16 * ea), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, ea), bD.uv.vA(pG), ay.x.send(0, bB.aB)
	}, this.aR2 = function(aQR, pR) {
		bB.a6(7 + 26 * pR.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pR.length; aA++) bB.a7(16, pR[aA][0]), bB.a7(10, pR[aA][1]);
		ay.x.send(aQR, bB.aB)
	}, this.aQ2 = function(aR3, aR4) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aR3), bB.a7(12, aR4), ay.x.send(ay.x.a08, bB.aB)
	}, this.aQw = function(username) {
		bB.a7(5, username.length), bD.uv.vA(username)
	}
}

function aPt() {
	var zz, aKd, aR5, aR6 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aR7 = 0;

	function aPu() {
		ay.x.aPu(zz, aKd)
	}

	function aRC(e) {
		ay.a5L.aQ4(zz, new Uint8Array(e.data))
	}

	function aRD() {}

	function aQ1(e) {
		ay.x.aQ1(zz, e)
	}
	this.dU = function(dx, aR8) {
		zz = dx, aKd = aR8, dx = aR6[0] + ay.x.aPi[zz] + aR6[1 + l.dh], (aR5 = new WebSocket(__fx.customLobby.isActive() && 1 === zz ? __fx.customLobby.getSocketURL() : dx)).binaryType = "arraybuffer", aR5.onopen = aPu, aR5.onmessage = aRC, aR5
			.onclose = aQ1, aR5.onerror = aRD
	}, this.aRA = function() {
		return aR5.readyState === aR5.CONNECTING
	}, this.aLT = function() {
		return aR5.readyState === aR5.OPEN
	}, this.aPo = function() {
		return aR7
	}, this.aPw = function() {
		aR7 = 1
	}, this.aPq = function() {
		return this.aRA() || this.aLT()
	}, this.aPr = function(aR8) {
		aKd = aR8
	}, this.aQo = function() {
		return aKd
	}, this.send = function(aB) {
		this.aLT() && aR5.send(aB)
	}, this.close = function(aPy) {
		this.aPq() && (aR5.close(aPy), this.qq())
	}, this.qq = function() {
		aR5.onopen = null, aR5.onmessage = null, aR5.onclose = null, aR5.onerror = null
	}
}

function dE() {
	var aRE = !1,
		a5g = 0,
		i = 0,
		rv = 0,
		gap = 0,
		canvas = null,
		x6 = null,
		a1O = null;

	function aRG() {
		for (var aRM, aRK = 0, ea = 0, ev = Math.floor(i / 2), dw = Math.floor(rv / 2), aRL = 1.5 * Math.PI, aA = aC.wA; 0 <= aA; aA--) ea += a1O[aA], 0 === a1O[aA] && aRK++;
		if (aRE = !1, x6.clearRect(0, 0, i, i), x6.fillStyle = b9.mc, x6.fillRect(0, 0, i, i), x6.fillStyle = b9.mf, x6.fillRect(0, 0, i, gap), x6.fillRect(0, 0, gap, i), x6.fillRect(i - gap, 0, gap, i), x6.fillRect(0, i - gap, i, gap), 0 < ea)
			if (aRK === aC.wA) {
				for (aA = aC.wA; 0 <= aA; aA--)
					if (0 < a1O[aA]) {
						! function(aA, ev, dw) {
							x6.fillStyle = be.aRT[be.kB[aA]], x6.beginPath(), x6.arc(ev, ev, dw, 0, 2 * Math.PI), x6.fill()
						}(aA, ev, dw);
						break
					}!
				function(ev) {
					var fontSize = ev / 3;
					x6.font = b8.pZ.rO(1, fontSize), x6.fillStyle = b9.mf, x6.fillText("100%", ev, ev + .1 * fontSize)
				}(ev)
			} else {
				for (aA = 0; aA <= aC.wA; aA++) 0 < a1O[aA] && (! function(aA, ev, dw, aRL, aRM) {
					x6.fillStyle = be.aRT[be.kB[aA]], x6.beginPath(), x6.arc(ev, ev, dw, aRL, aRM), x6.lineTo(ev, ev), x6.fill()
				}(aA, ev, dw, aRL, aRM = aRL + 2 * Math.PI * a1O[aA] / ea), function(ev, dw, aRL, aRM) {
					var f2 = (aRM - aRL) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dw * Math.min(f2, .37);
					fontSize < 8 || (aRL = (aRL + aRM) / 2, aRM = (__fx.settings.detailedTeamPercentage ? (100 * f2).toFixed(2) : Math.floor(100 * f2 + .5)) + "%", dw *= .525 - Math.max(.6 * (f2 - .7), 0), x6.font = b8.pZ.rO(1, fontSize), x6
						.fillStyle = b9.mf, x6.fillText(aRM, ev + Math.cos(aRL) * dw, ev + Math.cos(aRL + 1.5 * Math.PI) * dw))
				}(ev, dw, aRL, aRM), 0 !== aA && aRR(ev, dw, aRL), aRL = aRM);
				aRR(ev, dw, 1.5 * Math.PI)
			}!
		function(ev, dw) {
			x6.beginPath(), x6.arc(ev, ev, dw, 0, 2 * Math.PI), x6.stroke()
		}(ev, dw)
	}

	function aRR(ev, dw, aRU) {
		x6.beginPath(), x6.moveTo(ev, ev), x6.lineTo(ev + Math.cos(aRU) * dw, ev + Math.cos(aRU + 1.5 * Math.PI) * dw), x6.stroke()
	}
	this.dU = function() {
		if (aC.hP) {
			a5g = 0, a1O = new Uint32Array(aC.wA + 1);
			for (var aA = aC.wA; 0 <= aA; aA--) a1O[aA] = 0;
			for (aA = ak.jq - 1; 0 <= aA; aA--) a1O[be.eY[ak.jr[aA]]] += 1;
			this.resize()
		} else a1O = x6 = canvas = null
	}, this.a6U = function() {
		return i
	}, this.resize = function() {
		aC.hP && (i = Math.floor(z.a0.qx() && !aC.m8 ? .18 * h.min : .13 * h.pb), i = (i *= 1 + (.5 + .2 * z.a0.qx()) * aC.m8) + i % 2, rv = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x6 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x6.lineWidth = gap, x6.strokeStyle = b9.mf, b8.pZ.textAlign(x6, 1), b8.pZ.textBaseline(x6, 1), aRG())
	}, this.a2h = function() {
		var di, l0 = this.l1();
		return be.kB[l0] || (l0 = function() {
			for (var l0 = -1, aA = aC.wA; 1 <= aA; aA--)(-1 === l0 || a1O[aA] > a1O[l0]) && (l0 = aA);
			return l0
		}(), di = af.gN[l4[0]], -1 !== l0 && a1O[l0] > di) ? a1O[l0] : di
	}, this.zm = function() {
		return a5g = 31, this.ij(), this.l1()
	}, this.l1 = function() {
		for (var l0 = 0, aA = aC.wA; 0 < aA; aA--) a1O[aA] > a1O[l0] && (l0 = aA);
		return l0
	}, this.l2 = function(aRI) {
		for (var g2 = 0, jr = ak.jr, eY = be.eY, ea = ak.jq, fD = bM.fD, aA = 0; aA < ea; aA++) {
			var g7 = jr[aA];
			eY[g7] === aRI && (fD[g2++] = g7)
		}
		bM.f5[0] = g2
	}, this.a2I = function() {
		for (var g2 = 0, aA = aC.wA; 0 <= aA; aA--) g2 += 0 < a1O[aA];
		return g2
	}, this.ij = function() {
		if (aC.hP && 32 <= ++a5g) {
			a5g = 0;
			for (var aA = aC.wA; 0 <= aA; aA--) a1O[aA] = 0;
			for (aA = ak.jq - 1; 0 <= aA; aA--) a1O[be.eY[ak.jr[aA]]] += af.gN[ak.jr[aA]];
			aRE = !0
		}
	}, this.lQ = function() {
		aC.hP && aRE && aRG()
	}, this.tg = function() {
		aC.hP && (aC.m8 ? th.drawImage(canvas, ba.gap, ba.gap) : th.drawImage(canvas, ba.gap, a6V + 2 * ba.gap))
	}
}

function cx() {
	function aRW(key) {
		var aOq;
		return "undefined" == typeof URLSearchParams || (aOq = window.location.search, "string" != typeof(aOq = new URLSearchParams(aOq).get(key))) || aOq.length < 1 ? null : aOq
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRW("account");
				if (!value && !(value = aRW("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.ro, new rp(1e3, {
					rq: 0,
					rm: value,
					rn: 0
				})), 1
			}()) {
			var value = aRW("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zw = new URL(window.location.href);
		zw.search = "";
		try {
			return history.replaceState(null, "", zw.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aLx = function(key, value) {
		if (0 === z.id) try {
			var zw = new URL(window.location.href),
				g7 = zw.searchParams;
			g7.set(key, value), zw.search = g7.toString(), history.replaceState(null, "", zw.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRY, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dj(32768 * aA, 100);
		this.a3S(0)
	}, this.value = function(g7) {
		return g[g7]
	}, this.aIy = function() {
		return bJ.dj(aRY - 1, 2)
	}, this.a3S = function(aId) {
		aRY = 2 * aId % 32768 + 1
	}, this.random = function() {
		return aRY = 167 * aRY % 32768
	}, this.j7 = function(lY) {
		return bJ.dj(lY * this.random(), 32768)
	}, this.jh = function(g7) {
		return 0 !== g7 && this.random() < this.value(g7)
	}, this.iT = function(et, eu) {
		return et + this.j7(eu - et)
	}
}

function ct() {
	this.op = new aRZ, this.a3d = new aRa, this.aGJ = new aRb, this.dU = function() {
		aC.gj || this.op.dU()
	}, this.ij = function() {
		aC.gj || (this.op.ij(), 3 !== s.ro) || bd.jm() % 15 != 5 && 2 !== aC.yp || s.aDJ().aOr()
	}, this.aOu = function() {
		0 === aC.yp && aZ.aEG(), aC.a3N.a3l(), aC.data.canvas = null, ay.x.close(ay.x.a08, 3257), ay.x.a08 = 0, aC.data.isReplay = 1, aC.a3Q()
	}, this.aOt = function(pG) {
		var aA = pG.indexOf("=");
		return 0 <= aA ? pG.substring(aA + 1) : pG
	}, this.aOs = function(pG) {
		return "https://territorial.io/?replay=" + pG
	}
}

function aRZ() {
	this.aRd = null, this.aRe = null, this.aRf = null, this.aRg = null, this.aRh = null, this.aRi = null, this.a3c = "";
	var aRj = 0;
	this.dU = function() {
		this.aRd = [], this.aRe = [], this.aRf = [], this.aRg = [], this.aRh = [0], this.aRi = [0], aRj = 0, this.a3c = ""
	}, this.oq = function(id, fH, fJ, fL) {
		aC.gj || 2 === aC.yp || (0 === this.aRh[aRj] && (this.aRi[aRj] ? (this.aRh.push(1), this.aRi.push(0), aRj++) : this.aRh[aRj] = 1), this.aRd.push(id), this.aRe.push(fH), this.aRf.push(void 0 === fJ ? 0 : fJ), this.aRg.push(void 0 === fL ?
			0 : fL), this.aRi[aRj]++)
	}, this.ij = function() {
		0 === this.aRh[aRj] ? this.aRi[aRj]++ : (this.aRh.push(0), this.aRi.push(0), aRj++)
	}
}

function aRb() {
	var aRk = 0;

	function aRo(pG, id) {
		aRk || (id ? 1 === id ? aM.a4n = L(427) + ": " + pG : s.t(4, 3, new u(L(428), pG, 1)) : s.t(4, 3, new u("⚠️ " + L(426), pG, 1)))
	}
	this.vF = function(pG, aRl) {
		var pR;
		return aRk = aRl, bE.rr.v7(bE.rr.v5(bE.rr.v3(pG))), aM.a4n = "", !(! function() {
			if (bF.size < 10) aRo("File Too Small");
			else {
				var aRq = bF.oa(12),
					aR4 = (aRq !== l.rVersion && aRo("Incompatible Version " + aRq + " " + l.rVersion, 1), bF.oa(12)),
					aRr = bF.oa(31);
				if (aRr !== bF.size) aRo("Size Error: " + aRr + " " + bF.size);
				else if (function(j, aRq) {
						for (var g7 = bF.aB, ea = bF.size, aR4 = aRq, aA = 3; aA < ea; aA++) aR4 = aR4 + g7[aA] & 4095;
						return aR4 === j || (aRo("Hash Error: " + aR4 + " " + j + " " + ea), !1)
					}(aR4, aRq)) return 1
			}
			return
		}() || (aRl = bF, (pR = aC.data = new a3M).mapType = aRl.oa(2), pR.mapProceduralIndex = aRl.oa(8), pR.mapRealisticIndex = aRl.oa(8), pR.mapSeed = aRl.oa(14), pR.mapName = aRl.aRt(5), 2 === pR.mapType && aRl.aRu(), pR
			.passableWater = aRl.oa(1), pR.passableMountains = aRl.oa(1), pR.playerCount = aRl.oa(10), pR.humanCount = aRl.oa(10), pR.selectedPlayer = aRl.oa(9), pR.gameMode = aRl.oa(1), pR.playerMode = aRl.oa(2), pR.battleRoyaleMode =
			aRl.oa(2), pR.numberTeams = aRl.oa(4), pR.isZombieMode = aRl.oa(1), pR.isContest = aRl.oa(1), pR.isReplay = aRl.oa(1), pR.elo = aRl.aRv(2, 14, 2), pR.colorsType = aRl.oa(1), pR.colorsPersonalized = aRl.oa(1), pR.colorsData =
			aRl.aRv(10, 18, 512), pR.selectableColor = aRl.oa(1), pR.teamPlayerCount = aRl.aRv(4, 10, 9), pR.neutralBots = aRl.oa(1), pR.botDifficultyType = aRl.oa(2), pR.botDifficultyValue = aRl.oa(4), pR.botDifficultyTeam = aRl.aRv(4,
				4, 9), pR.botDifficultyData = aRl.aRv(10, 4, 512), pR.spawningType = aRl.oa(2), pR.spawningSeed = aRl.oa(14), pR.spawningData = aRl.aRv(11, 12, 1024), pR.selectableSpawn = aRl.oa(1), pR.playerNamesType = aRl.oa(2), pR
			.playerNamesData = aRl.aRw(10, 5, 512), pR.selectableName = aRl.oa(1), pR.aIncomeType = aRl.oa(2), pR.aIncomeValue = aRl.oa(8), pR.aIncomeData = aRl.aRv(10, 8, 512), pR.tIncomeType = aRl.oa(2), pR.tIncomeValue = aRl.oa(8), pR
			.tIncomeData = aRl.aRv(10, 8, 512), pR.iIncomeType = aRl.oa(2), pR.iIncomeValue = aRl.oa(8), pR.iIncomeData = aRl.aRv(10, 8, 512), pR.sResourcesType = aRl.oa(2), pR.sResourcesValue = aRl.oa(11), pR.sResourcesData = aRl.aRv(10,
				11, 512), ! function() {
				var hu = bF,
					vG = hu.oa(5),
					aRx = hu.oa(30),
					aRy = hu.oa(30);
				if (aRx + aRy > 8 * hu.size) return void aRo("Corrupted File");
				return function(ea) {
						var aS1 = new Uint8Array(ea),
							aS2 = new Uint16Array(ea),
							aS3 = new Uint32Array(ea),
							aS4 = new Uint32Array(ea);
						b7.op.aRd = aS1, b7.op.aRe = aS2, b7.op.aRf = aS3, b7.op.aRg = aS4;
						for (var aA = 0; aA < ea; aA++) {
							var id = bF.oa(4);
							aS1[aA] = id, aS2[aA] = bF.oa(9), 0 === id ? aS3[aA] = bF.oa(22) : 1 === id ? (aS3[aA] = bF.oa(10), aS4[aA] = bF.oa(10)) : 2 === id ? (aS3[aA] = bF.oa(10), aS4[aA] = bF.oa(9)) : 3 === id || 4 === id ? (aS3[
								aA] = bF.oa(10), aS4[aA] = bF.oa(22)) : 5 === id || 6 === id ? aS3[aA] = bF.oa(10) : 7 === id ? aS3[aA] = bF.oa(1) : 10 === id && (aS3[aA] = bF.oa(20), aS4[aA] = bF.oa(22))
						}
					}(aRx),
					function(ea, vG) {
						var aRh = new Uint8Array(ea),
							aRi = new Array(ea);
						aRi.fill(0), b7.op.aRh = aRh, b7.op.aRi = aRi;
						for (var aA = 0; aA < ea; aA++) aRh[aA] = bF.oa(1), aRi[aA] = bF.oa(vG)
					}(aRy, vG), 1
			}()) || (bF.dx < 8 * bF.size - 13 || bF.dx > 8 * bF.size ? (aRo("Out Of Bounds Error: " + bF.dx + " " + 8 * bF.size), 1) : (b7.op.a3c = pG, 2 === aC.data.mapType && (aRo("Load base64 image...", 2), 1))))
	}, this.aGK = function(aFu, aRp) {
		var a1j = document.createElement("canvas"),
			hX = a1j.getContext("2d");
		if (a1j.width = aFu.width, a1j.height = aFu.height, hX.drawImage(aFu, 0, 0), aRk || aRp) return aC.yp ? void 0 : (aC.data.canvas = a1j, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aOu()
	}
}

function aRa() {
	this.yI = function() {
		var vG = function() {
				for (var aRi = b7.op.aRi, ea = aRi.length, max = 0, aA = 0; aA < ea; aA++) max = Math.max(max, aRi[aA]);
				return vN(Math.max(max, 1))
			}(),
			i = (pR = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dx += 43, i.a7(2, pR.mapType), i.a7(8, pR.mapProceduralIndex), i.a7(8, pR.mapRealisticIndex), i.a7(14, pR.mapSeed), i.aSB(pR.mapName, 5), 2 === pR.mapType && i.aSC(pR.canvas),
				i.a7(1, pR.passableWater), i.a7(1, pR.passableMountains), i.a7(10, pR.playerCount), i.a7(10, pR.humanCount), i.a7(9, pR.selectedPlayer), i.a7(1, pR.gameMode), i.a7(2, pR.playerMode), i.a7(2, pR.battleRoyaleMode), i.a7(4, pR
					.numberTeams), i.a7(1, pR.isZombieMode), i.a7(1, pR.isContest), i.a7(1, pR.isReplay), i.db(pR.elo, 2, 14), i.a7(1, pR.colorsType), i.a7(1, pR.colorsPersonalized), i.db(pR.colorsData, 10, 18), i.a7(1, pR.selectableColor), i.db(
					pR.teamPlayerCount, 4, 10), i.a7(1, pR.neutralBots), i.a7(2, pR.botDifficultyType), i.a7(4, pR.botDifficultyValue), i.db(pR.botDifficultyTeam, 4, 4), i.db(pR.botDifficultyData, 10, 4), i.a7(2, pR.spawningType), i.a7(14, pR
					.spawningSeed), i.db(pR.spawningData, 11, 12), i.a7(1, pR.selectableSpawn), i.a7(2, pR.playerNamesType), i.aSD(pR.playerNamesData, 10, 5), i.a7(1, pR.selectableName), i.a7(2, pR.aIncomeType), i.a7(8, pR.aIncomeValue), i.db(pR
					.aIncomeData, 10, 8), i.a7(2, pR.tIncomeType), i.a7(8, pR.tIncomeValue), i.db(pR.tIncomeData, 10, 8), i.a7(2, pR.iIncomeType), i.a7(8, pR.iIncomeValue), i.db(pR.iIncomeData, 10, 8), i.a7(2, pR.sResourcesType), i.a7(11, pR
					.sResourcesValue), i.db(pR.sResourcesData, 10, 11), ! function(vG) {
					var i = bC,
						aRd = b7.op.aRd,
						fH = b7.op.aRe,
						fJ = b7.op.aRf,
						fL = b7.op.aRg,
						ea = aRd.length;
					i.a7(5, vG), i.a7(30, ea), i.a7(30, b7.op.aRi.length);
					for (var aA = 0; aA < ea; aA++) {
						var ev = aRd[aA];
						i.a7(4, ev), i.a7(9, fH[aA]), 0 === ev ? i.a7(22, fJ[aA]) : 1 === ev ? (i.a7(10, fJ[aA]), i.a7(10, fL[aA])) : 2 === ev ? (i.a7(10, fJ[aA]), i.a7(9, fL[aA])) : 3 === ev || 4 === ev ? (i.a7(10, fJ[aA]), i.a7(22, fL[aA])) :
							5 === ev || 6 === ev ? i.a7(10, fJ[aA]) : 7 === ev ? i.a7(1, fJ[aA]) : 10 === ev && (i.a7(20, fJ[aA]), i.a7(22, fL[aA]))
					}
				}(vG), ! function(vG) {
					for (var i = bC, aRh = b7.op.aRh, aRi = b7.op.aRi, ea = aRh.length, aA = 0; aA < ea; aA++) i.a7(1, aRh[aA]), i.a7(vG, aRi[aA])
				}(vG), bC.dx),
			pR = bJ.dj(i - 1, 6) + 1,
			vG = (bB.aQc(6 * pR) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dx = 24, i.a7(31, i.g.length), i.dx = 12, i.a7(12, function() {
					for (var g = bC.g, ea = g.length, aR4 = l.rVersion, aA = 3; aA < ea; aA++) aR4 = aR4 + g[aA] & 4095;
					return aR4
				}())
			}(), bF.dU(bC.g), bD.rr.rs(bD.rr.rt(pR)));
		return bF.tA(), bC.dU(), vG
	}
}

function cj() {
	var ev, bp = !1,
		aSF = !1,
		aSG = -1e4,
		aSH = -1,
		aSI = 0;

	function resize(aSM) {
		ev = 0, aa.sG() && (aSK(aSM) || bp) && (bp = !1, ba.resize(), bU.aAD.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.yp ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7Z()) : (aZ.aEI(), aZ.aEJ()), bd.dc = !0)
	}

	function aSJ(f2) {
		return f2 && 128 < f2 ? Math.floor(f2) : 128
	}

	function aSK(aSM) {
		var i, j, aSO, rv, a6y;
		if (!(0 < h.rW)) return rv = aSJ(document.documentElement.clientWidth), a6y = aSJ(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rv, j = a6y, aSO = 0 !== z.id || i < j ? 700 :
			1200, aSO = Math.min(aSO / ((i + j) / 2), 1), aSO = 0 === bh.e7.data[1].value ? 2 * aSO / 3 : Math.min(aSO + (bh.e7.data[1].value - 1) * (1 - aSO) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSO, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSM && !aSF ? (aSF = !0, document.body.removeChild(a0N)) : aSF && (aSF = !1, document.body.appendChild(a0N)), i = Math.floor(.5 + rv * h.k), j = Math.floor(.5 + a6y * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9p(i, j), h.max = a52(i, j), h.pb = bJ.dj(i + j, 2), h.td = i / j, a0N.width = i, a0N.height = j, a0N.style.width = rv + "px", a0N.style.height = a6y + "px", aSH = bd.e9 + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pb = 0, this.td = 1, this.k = 1, this.rW = 0, this.dV = function() {
		this.i = aSJ(document.documentElement.clientWidth) + 2, this.j = aSJ(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		ev = 1, a0N = document.getElementById("canvasA"), (th = a0N.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSK(0)
	}, this.ij = function() {
		50 <= ++ev && resize(0), -1 === aSH || bd.e9 < aSH || (aSH = -1, 2e3 * ++aSI >= bd.e9 + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hj) {
		bp = !0, resize(hj)
	}, this.a13 = function() {
		aSG + 1e3 > bd.e9 || (aSG = bd.e9, resize(0))
	}
}

function dB() {
	this.aQl = new aSQ, this.zi = new aSR
}

function aSR() {
	this.zj = function() {
		for (var g7, ea = ak.jq, yd = ak.jr, zP = af.zP, a6n = this.aFd(), aA = 0; aA < ea; aA++) g7 = yd[aA], b8.fv.jD(g7) || (zP[g7] = a6n);
		var ov = af.ov,
			is = af.is,
			it = af.it,
			zN = af.zN,
			ea = aC.jp;
		for (aA = 0; aA < ea; aA++)(0 === zN[aA] || it[aA] < 1 || 2 * ov[aA] > 3 * (is[aA] + it[aA])) && (zP[aA] = 0);
		var zg = 0;
		for (aA = 0; aA < ea; aA++) zg += 0 < zP[aA];
		return zg
	}, this.aFd = function() {
		return Math.min(65535, bd.jm())
	}
}

function aSQ() {
	function aSV(g, f2, hN) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f2 >> (aA + hN) % 30 & 1)) % 256
	}
	this.ij = function(aSS, aST) {
		var g = new Uint8Array(256);
		return function(g, aSS, aST) {
				var aA, aSX = 3 + (4 + aSS) % 32768,
					aSY = 12 + aST % 32768,
					aSZ = 17 + ((aSS & aST) + (aSS | aST) + aSS) % 32768;
				for (aA = 0; aA < 256; aA++) aSX = 1 + aSX * aSY % aSZ, g[aA] = aSX % 256
			}(g, aSS, aST), aSV(g, aSS, 2), aSV(g, aST, 7),
			function(g) {
				var aA, f2, dx = 0;
				for (aA = 0; aA < 3e4; aA++) f2 = g[dx], g[dx] = (f2 + aA + g[(dx + aA) % 256]) % 256, dx = (f2 + aA + dx + (f2 & dx)) % 256
			}(g),
			function(g) {
				var aA, a6y = 1,
					sd = 1;
				for (aA = 0; aA < 256; aA += 2) a6y = (1 + a6y) * (g[aA] + 1) % 1073741824, sd = (1 + sd) * (g[aA + 1] + 1) % 1073741824;
				return [a6y, sd]
			}(g)
	}
}

function cg() {
	var aSa, aSb, h2, aSc;
	this.dU = function() {
		var aA, eh, ej, aQx, aSd, i, j, x6, hU, vX, f2, g7, eq, et, a4C;
		if (function() {
				if (h2 = !0, aSc = "rgb(" + bQ.vV[0] + "," + bQ.vV[1] + "," + bQ.vV[2] + ")", bQ.aIl(bQ.eG)) return 1;
				return h2 = !1, 0
			}()) aSb = null;
		else {
			for (aSa = bJ.dj(96, 4), aSd = 1 === bQ.eG ? (aQx = 0, 160) : (aQx = 128, 32), aSc = "rgb(" + aQx + "," + aQx + "," + aQx + ")", aSb = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSb[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.el : aSa, j = aA % 2 == 0 ? aSa : bQ.em + 2 * aSa, aSb[aA].width = i, aSb[aA].height = j, vX = (hU = (x6 = aSb[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (ej = aSa - 1; 0 <= ej; ej--)
						for (f2 = aSd + Math.floor((ej + 1) * (aQx - aSd) / (aSa + 1)), eh = i - 1; 0 <= eh; eh--) vX[g7 = 4 * ((0 === aA ? aSa - ej - 1 : ej) * i + eh)] = f2, vX[g7 + 1] = f2, vX[g7 + 2] = f2, vX[g7 + 3] = 255;
				else {
					for (eh = aSa - 1; 0 <= eh; eh--)
						for (f2 = aSd + Math.floor((eh + 1) * (aQx - aSd) / (aSa + 1)), ej = j - 1 - aSa; aSa <= ej; ej--) vX[g7 = 4 * (ej * i + (3 === aA ? aSa - eh - 1 : eh))] = f2, vX[g7 + 1] = f2, vX[g7 + 2] = f2, vX[g7 + 3] = 255;
					for (et = 1; 0 <= et; et--)
						for (eh = aSa - 1; 0 <= eh; eh--)
							for (ej = aSa - 1; 0 <= ej; ej--) eq = (Math.pow(eh * eh + ej * ej, .5) + 1) / (aSa + 1), f2 = aSd + Math.floor((1 < eq ? 1 : eq) * (aQx - aSd)), vX[g7 = 4 * ((0 === et ? aSa - ej - 1 : ej + et * (j - aSa)) * i + (
								1 === aA ? eh : aSa - eh - 1))] = f2, vX[g7 + 1] = f2, vX[g7 + 2] = f2, vX[g7 + 3] = 255
				}
				x6.putImageData(hU, 0, 0)
			}
			a4C = aSd, bQ.vQ.fillStyle = "rgb(" + a4C + "," + a4C + "," + a4C + ")", bQ.vQ.fillRect(0, 0, bQ.el, 1), bQ.vQ.fillRect(0, bQ.em - 1, bQ.el, 1), bQ.vQ.fillRect(0, 0, 1, bQ.em), bQ.vQ.fillRect(bQ.el - 1, 0, 1, bQ.em)
		}
	}, this.x0 = function() {
		var et = h2 ? 0 : -aSa;
		aKM(et, et, bQ.el - 2 * et, bQ.em - 2 * et, bY.aSg, bY.aSh, bY.aSi, bY.aSj) || (th.fillStyle = aSc, th.fillRect(0, 0, h.i, h.j))
	}, this.tg = function() {
		h2 || (aKL(0, -aSa, bQ.el, aSa, bY.aSg, bY.aSh, bY.aSi, bY.aSj) && th.drawImage(aSb[0], bY.aSk, bY.aSl - aSa), aKL(bQ.el, -aSa, aSa, bQ.em + 2 * aSa, bY.aSg, bY.aSh, bY.aSi, bY.aSj) && th.drawImage(aSb[1], bY.aSk + bQ.el, bY.aSl - aSa),
			aKL(0, bQ.em, bQ.el, aSa, bY.aSg, bY.aSh, bY.aSi, bY.aSj) && th.drawImage(aSb[2], bY.aSk, bY.aSl + bQ.em), aKL(-aSa, -aSa, aSa, bQ.em + 2 * aSa, bY.aSg, bY.aSh, bY.aSi, bY.aSj) && th.drawImage(aSb[3], bY.aSk - aSa, bY.aSl - aSa))
	}
}

function d0() {
	this.h3 = new aSm, this.aFb = new aSn, this.x3 = new aSo, this.x = new aSp, this.iJ = new aSq, this.a4C = new aSr, this.aSs = new aSt, this.jd = new aSu, this.kR = new aSv, this.aSw = new aSx, this.dU = function() {
		this.x3.dU(), this.x.dU(), this.iJ.dU(), this.a4C.dU(), this.aSw.dU()
	}, this.tg = function() {
		this.aSw.tg(), this.x3.tg()
	}
}

function aSu() {
	this.ij = function(player) {
		var om;
		return !!aC.data.passableWater && 0 !== af.gG[player].length && bL.x.on !== bL.x.k3 && !((om = bL.x.om[player]) >= Math.max(3 * am.performance.kr, aD.k3[aD.hE[player]]) || om === bL.x.oz || !b8.fv.ot(player, aD.k1[aD.hE[player]], 32,
			0) || !am.iW.ij(player) && !am.iY.ij(player) || ! function(a2L) {
				var aT0 = bM.fB[1] + bK.hZ[bM.fB[2] - 1] << 2;
				if (ab.eR(aT0)) return 1;
				return aT0 = ab.eS(aT0), a2L !== aT0 && !!eT(a2L, aT0)
			}(player)) && function(player) {
			return b8.fv.ow(player), bL.x.p2(player), !0
		}(player)
	}
}

function aSm() {
	function aT8(aA, ks, kt) {
		var aTA, aT9;
		if (!(aA < 0)) return aT9 = bL.x.m4[aA], aTA = bK.hx(aT9), aT9 = bK.i0(aT9), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5K[aA])), aA = Math.max(aA, bK.iD(b8.pZ.sE(.02, 1.7))), bJ.aKT(bK.hw(ks), bK.hz(kt), aTA, aT9, aA)
	}

	function aT2(aT1) {
		var aTD = 4 + .03 * (1 + 1.5 * z.a0.qx()) * h.pb / iB;
		return bK.i1(aT1, bM.fB[1]) < aTD
	}
	this.h4 = function(player, aT1) {
		return !!(aC.data.passableWater && bK.iE(aT1) && bL.x.on !== bL.x.k3 && bL.x.om[player] !== bL.x.oz && 0 !== af.gG[player].length && bL.kR.kS(player, aT1) && aT2(aT1))
	}, this.o7 = function(player, m1, aT1) {
		return !!(bK.iE(aT1) && this.p3(player, m1) && bL.kR.p4(aT1) && aT2(aT1))
	}, this.p3 = function(player, id) {
		for (var aT3, s9 = player << 3, sA = s9 + bL.x.om[player], aT4 = bL.x.aT4, aT5 = bL.x.aT5, aA = s9; aA < sA; aA++)
			if (id === aT5[aT3 = aT4[aA]]) return bM.fB[3] = aT3, !0;
		return !1
	}, this.o6 = function(eM) {
		var a4D = bL.a4C.a4D;
		return !!this.p3(aC.eK, a4D) && (b6.gw.o6(a4D, eM), !0)
	}, this.a4F = function(ks, kt) {
		var player = aC.eK,
			ea = bL.x.om[player];
		if (0 === ea) return !1;
		for (var aT4 = bL.x.aT4, m4 = bL.x.m4, s9 = player << 3, aT6 = 80, aMi = -1, aA = s9 + ea - 1; s9 <= aA; aA--) {
			var aT7 = aT4[aA],
				eq = bK.hr(ks, kt, m4[aT7]);
			eq < aT6 && (aT6 = eq, aMi = aT7)
		}
		return !!aT8(aMi, ks, kt) && (bL.a4C.a4D = bL.x.aT5[aMi], bj.p1.a4F(), !0)
	}, this.a4M = function(ks, kt) {
		var ea = bL.x.on;
		if (ea < 1) return -1;
		for (var m4 = bL.x.m4, aT6 = 80, aMi = -1, aA = 0; aA < ea; aA++) {
			var eq = bK.hr(ks, kt, m4[aA]);
			eq < aT6 && (aT6 = eq, aMi = aA)
		}
		return aT8(aMi, ks, kt) ? aMi : -1
	}, this.m3 = function(player, id) {
		for (var s9 = player << 3, sA = s9 + bL.x.om[player], aT5 = bL.x.aT5, aT4 = bL.x.aT4, aA = s9; aA < sA; aA++) {
			var aT7 = aT4[aA];
			if (aT5[aT7] === id) return aT7
		}
		return -1
	}, this.aFY = function(player) {
		for (var s9 = player << 3, sA = s9 + bL.x.om[player], aT4 = bL.x.aT4, a5K = bL.x.a5K, hE = 0, aA = s9; aA < sA; aA++) hE += a5K[aT4[aA]];
		return hE
	}, this.m9 = function(player) {
		return 0 === bL.x.om[player] ? -1 : bL.x.aT4[player << 3]
	}
}

function aSn() {
	this.aFc = function(player) {
		for (var aT4 = bL.x.aT4, s9 = player << 3, aA = s9 + bL.x.om[player] - 1; s9 <= aA; aA--) this.aTE(aT4[aA])
	}, this.aTE = function(aTF) {
		var x = bL.x,
			aTG = x.on - 1,
			aTH = x.a5J[aTF],
			aTI = x.aTJ[aTF],
			aTK = x.m4[aTF];
		x.on = aTG, x.a5J[aTF] = x.a5J[aTG], x.aTL[aTF] = x.aTL[aTG], x.aTM[aTF] = x.aTM[aTG], x.m4[aTF] = x.m4[aTG], x.aTN[aTF] = x.aTN[aTG], x.a5K[aTF] = x.a5K[aTG], x.aTJ[aTF] = x.aTJ[aTG], x.aT5[aTF] = x.aT5[aTG], x.aTO[aTF] = x.aTO[aTG], x
			.aTP[aTF] = x.aTP[aTG], x.aT4[x.a5J[aTF]] = aTF,
			function(aRU) {
				var player = aRU >> 3,
					x = bL.x,
					ea = x.om[player] - 1,
					aTS = (player << 3) + ea;
				x.om[player] = ea, aTS !== aRU && (x.aT4[aRU] = x.aT4[aTS], x.a5J[x.aT4[aRU]] = aRU)
			}(aTH), bL.iJ.iJ[bK.iI(x.m4[aTF])][x.aTJ[aTF]] = aTF, aTG = bK.iI(aTK), aTH = aTI, aTG = bL.iJ.iJ[aTG], x = aTG.pop(), aTH !== aTG.length && (aTG[aTH] = x, bL.x.aTJ[x] = aTH)
	}
}

function aSo() {
	var aTU, xS = 8,
		aTV = new Array(2);

	function aTW(dx) {
		var hR = xS + 4,
			a1j = b8.pZ.vM(hR, hR),
			hX = b8.pZ.getContext(a1j, !0),
			hU = b8.pZ.getImageData(hX, hR, hR),
			vX = hU.data;
		return aTX(vX, hR + 1, dx), aTX(vX, hR + 2, dx), aTX(vX, 2 * hR + 1, dx), aTX(vX, 2 * hR - 3, dx), aTX(vX, 2 * hR - 2, dx), aTX(vX, 3 * hR - 2, dx), aTX(vX, hR * (hR - 3) + 1, dx), aTX(vX, hR * (hR - 2) + 1, dx), aTX(vX, hR * (hR - 2) + 2,
			dx), aTX(vX, hR * (hR - 2) - 2, dx), aTX(vX, hR * (hR - 1) - 3, dx), aTX(vX, hR * (hR - 1) - 2, dx), hX.putImageData(hU, 0, 0), a1j
	}

	function aTX(vX, eM, dx) {
		eM *= 4;
		vX[eM] = 255, vX[1 + eM] = 255, vX[2 + eM] = dx, vX[3 + eM] = 255
	}

	function vM(player) {
		var a1j = b8.pZ.vM(xS, xS);
		return function(hX, player) {
			var eh, ej, hv, eM, aTZ, aTa, hR = xS,
				hU = b8.pZ.getImageData(hX, hR, hR),
				vX = hU.data,
				kX = (hR >> 1) - .5,
				aSc = ab.a5u(player),
				aTc = b8.pi.a1H(aSc, .5);
			b8.pi.a1J(aSc, aTc, 300) || b8.pi.a1L(aSc, 100);
			for (ej = 0; ej < hR; ej++)
				for (eh = 0; eh < hR; eh++) aTa = (hR - 1.5) * (hR - 1.5) / 4, aTZ = (hv = (hv = eh - kX) * hv + (hv = ej - kX) * hv) <= (hR - 4.5) * (hR - 4.5) / 4 ? aTc : aSc, vX[eM = 4 * (ej * hR + eh)] = aTZ[0], vX[1 + eM] = aTZ[1], vX[2 +
					eM] = aTZ[2], vX[3 + eM] = aTa < hv ? 0 : 255;
			hX.putImageData(hU, 0, 0)
		}(b8.pZ.getContext(a1j, !0), player), a1j
	}
	this.dU = function() {
		aTU = new Array(aC.eX), aTV[0] = aTW(255), aTV[1] = aTW(0)
	}, this.tg = function() {
		var aA, player, aTd, aKU, hE, hu, aTf, aTh, aTi, m4 = bL.x.m4,
			a5J = bL.x.a5J,
			a5K = bL.x.a5K,
			aTP = bL.x.aTP,
			aTj = aTU,
			aTk = aC.eK,
			aTl = -1,
			ea = bL.x.on,
			aTm = h.i,
			aTn = h.j,
			aTo = bQ.el << 4,
			eP = iB,
			eE = eP / xS,
			m5 = iA / eP,
			m6 = iC / eP,
			hv = (aTm + iA) / eP - m5,
			hy = (aTn + iC) / eP - m6,
			hX = th;
		for (bL.h3.p3(aC.eK, bL.a4C.a4D) && (aTl = bM.fB[3]), hX.imageSmoothingEnabled = eP < 9, b8.pZ.textAlign(hX, 1), b8.pZ.textBaseline(hX, 1), aA = 0; aA < ea; aA++) player = a5J[aA] >> 3, hE = a5K[aA], aTd = .9 + .1 * Math.log10(hE), aKU =
			(hu = m4[aA]) % aTo / 16 - aTd, hu = aTn * (Math.floor(hu / aTo) / 16 - aTd - m6) / hy, aTf = -2 * (aTi = eP * aTd) * (1 + (aTh = +(player === aTk)) / 8), aTh = aTh * aTi / 4, (aTi = aTm * (aKU - m5) / hv) < aTf || hu < aTf || aTm +
			aTh < aTi || aTn + aTh < hu || (aKU = 2 * aTd * eE, aTf = aTd * eP, void 0 === (aTh = aTj[player]) && (aTj[player] = aTh = vM(player)), player === aTk && (hX.setTransform(aKU, 0, 0, aKU, aTi - 2 * aKU, hu - 2 * aKU), hX.drawImage(aTV[
				+(aA === aTl)], 0, 0)), hX.setTransform(aKU, 0, 0, aKU, aTi, hu), hX.drawImage(aTh, 0, 0), (aTd = Math.floor(function(hE) {
				if (hE < 1e3) return .42;
				if (hE < 1e4) return .34;
				if (hE < 1e6) return .26;
				if (hE < 1e8) return .19;
				return .15
			}(hE) * aTf)) < 6) || (hX.setTransform(1, 0, 0, 1, 0, 0), hX.fillStyle = aTP[aA] ? b9.nD : b9.mf, hX.font = b8.pZ.rO(1, aTd), hX.fillText(b8.zU.y7(hE), aTi + aTf, hu + aTf + .1 * aTd));
		hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aSx() {
	var a1j;
	this.dU = function() {
		a1j = a1j || bN.x.aTr(20, be.aTs[7])
	}, this.tg = function() {
		var mP = iB;
		if (!(5 <= mP)) {
			var aTm = h.i,
				aTn = h.j,
				m5 = iA / mP,
				m6 = iC / mP,
				mI = (aTm + iA) / mP,
				mJ = (aTn + iC) / mP,
				g8 = -20 * mP,
				aTt = .5 * g8,
				aTo = bQ.el << 4,
				ea = bL.x.on,
				m4 = bL.x.m4,
				aTu = a1j,
				hX = th;
			3 < mP && (hX.globalAlpha = .5 * (5 - mP));
			for (var aA = 0; aA < ea; aA++) {
				var hu = m4[aA],
					eh = aTm * (hu % aTo / 16 - m5) / (mI - m5) + aTt,
					hu = aTn * (Math.floor(hu / aTo) / 16 - m6) / (mJ - m6) + aTt;
				aTm < eh || aTn < hu || eh < g8 || hu < g8 || (hX.setTransform(mP, 0, 0, mP, eh, hu), hX.drawImage(aTu, 0, 0))
			}
			hX.globalAlpha = 1, hX.setTransform(mP, 0, 0, mP, 0, 0)
		}
	}
}

function aSt() {
	this.ij = function() {
		for (var aT9, aSs, aTO = bL.x.aTO, m4 = bL.x.m4, aTM = bL.x.aTM, aA = bL.x.on - 1; 0 <= aA; aA--) aT9 = m4[aA], 0 !== (aSs = aTO[aA]) && aT9 === aTM[aA] && (! function(aA, aTy, hM) {
			var j0, player = bL.x.a5J[aA] >> 3,
				hM = aTy + bK.hZ[hM] << 2,
				aA = bL.x.a5K[aA];
			if (bb.aTz(player), ab.eR(hM)) j0 = aC.eX;
			else {
				if ((j0 = ab.eS(hM)) === player) return hM = b8.fv.fy(player, aA), bb.fz(player, aA - hM, 12);
				if (!eT(player, j0)) return b6.js.oL(player, j0, aA)
			}
			ac.jB(player, j0) || ac.jT(player) ? (af.g1[player].push(aTy << 2), ac.ix(player, aA, j0), aE.iy(player, !0)) : bb.fz(player, aA, 12)
		}(aA, bK.iH(aT9), aSs - 1), bL.aFb.aTE(aA))
	}, this.aU0 = function(player, eM, hM, m1) {
		if (0 !== hM) {
			var aTk = aC.eK;
			if (b8.fv.gm(aTk) && eT(player, aTk) && player !== aTk && 0 !== af.gG[aTk].length) {
				var aT0 = eM + bK.hZ[--hM] << 2;
				if (ab.eR(aT0) || eT(player, ab.eS(aT0))) {
					for (var eo = !1, aA = 0; aA < 4; aA++)
						if (aT0 = eM + bK.hZ[aA] << 2, ab.eV(aT0) && !ab.eR(aT0) && ab.eS(aT0) === aTk) {
							eo = !0;
							break
						} eo && (aM.a4E(719, 0), aM.zD(180, L(429, [af.zQ[player]]), 719, player, b9.nC, b9.mc, -1, !0, void 0, {
						eu: 1,
						m1: m1
					}))
				}
			}
		}
	}
}

function aSp() {
	this.aU1 = null, this.k3 = 512, this.oz = 8, this.on = 0, this.aU2 = 0, this.a5J = new Uint16Array(this.k3), this.aTL = new Uint32Array(this.k3), this.aTM = new Uint32Array(this.k3), this.m4 = new Uint32Array(this.k3), this.aTN = new Uint16Array(
			this.k3), this.a5K = new Uint32Array(this.k3), this.aTJ = new Uint16Array(this.k3), this.aT5 = new Uint16Array(this.k3), this.aTO = new Uint8Array(this.k3), this.aTP = new Uint8Array(this.k3), this.om = new Uint8Array(aC.eX), this.aT4 =
		new Uint16Array(this.oz * aC.eX), this.dU = function() {
			this.aU2 = 0, this.on = 0, this.aU1 = new Uint8Array(bQ.el + bQ.em), this.om.fill(0)
		}, this.p2 = function(player) {
			var ea = this.on,
				aU3 = bK.iG(bM.fB[0]),
				aU4 = this.om[player],
				aU5 = (player << 3) + aU4,
				hE = (this.a5J[ea] = aU5, this.aTL[ea] = aU3, this.m4[ea] = aU3, this.aTM[ea] = bK.iG(bM.fB[1]), this.aTN[ea] = 0, bM.f7[0]);
			hE < 60 ? (b8.fv.fw(player, 60 - hE), this.a5K[ea] = 60) : this.a5K[ea] = hE, this.aTJ[ea] = bL.iJ.p2(ea, bK.iI(aU3)), this.aT5[ea] = this.aU2, this.aTO[ea] = bM.fB[2], this.aTP[ea] = 0, this.aU2 = this.aU2 + 1 & 1023, this.aT4[aU5] = ea,
				this.om[player] = aU4 + 1, this.on++, bL.aSs.aU0(player, bM.fB[1], bM.fB[2], this.aT5[ea])
		}, this.o6 = function() {
			var aT3 = bM.fB[3];
			this.aTL[aT3] = this.m4[aT3], this.aTM[aT3] = bK.iG(bM.fB[1]), this.aTN[aT3] = 0, this.aTO[aT3] = bM.fB[2], bL.aSs.aU0(this.a5J[aT3] >> 3, bM.fB[1], bM.fB[2], this.aT5[aT3])
		}, this.ij = function() {
			bL.aSs.ij();
			var aA, g7 = aC.eK,
				di = bL.h3.aFY(g7),
				rB = (! function(rB) {
					var aA, aUA, aUB, aUC, aUD, aU3, aUH, aUI, ed, g8, aTL = rB.aTL,
						aTM = rB.aTM,
						m4 = rB.m4,
						a5K = rB.a5K,
						aTP = rB.aTP,
						aTN = rB.aTN,
						aTJ = rB.aTJ,
						rB = rB.on,
						aTo = bQ.el << 4;
					for (aA = rB - 1; 0 <= aA; aA--) aUB = m4[aA], aUA = aTM[aA], aUB !== aUA && (aU3 = aTL[aA], aUH = aUA % aTo - (aUD = aU3 % aTo), aUI = ~~((aUA + .5) / aTo) - (aU3 = ~~((aU3 + .5) / aTo)), ed = ~~Math.sqrt(aUH * aUH + aUI *
						aUI + .5), g8 = 15e4 + 25e3 * bJ.log10(a5K[aA]), aTP[aA] && (g8 = bJ.dj(g8, 5)), 65535 <= (g8 = aTN[aA] + Math.max(~~((g8 + .5) / ed), 1)) ? m4[aA] = aUC = aUA : (aTN[aA] = g8, m4[aA] = aUC = aUD + bJ.dj(g8 * aUH,
						65536) + aTo * (aU3 + bJ.dj(g8 * aUI, 65536))), aTJ[aA] = bL.iJ.aUK(aTJ[aA], aUB, aUC))
				}(this), ! function(rB) {
					if (bd.jm() % 2 == 1) {
						var aA, hN, kX, eu, ev, aUL, xn, aUM, gz, m5, m6, aU3, aUN, hd, aUP, vf, ea = rB.on,
							m4 = rB.m4,
							a5J = rB.a5J,
							a5K = rB.a5K,
							aTP = rB.aTP,
							iJ = bL.iJ.iJ,
							aUR = iJ.length,
							aUS = bL.iJ.aUS,
							aTo = bQ.el << 4,
							aUT = aC.hP,
							aRI = be.eY,
							g8 = (ea - 1) * (bJ.dj(bd.jm(), 2) % 2);
						for (aA = 0; aA < ea; aA++)
							for (hN = Math.abs(aA - g8), aU3 = m4[hN], kX = bK.iI(aU3), gz = a5J[hN] >> 3, m5 = aU3 % aTo, m6 = ~~((aU3 + .5) / aTo), aUP = a5K[hN], eu = 0; eu < 9; eu++)
								if (!((aUL = kX + aUS[eu]) < 0 || aUR <= aUL))
									for (aUM = iJ[aUL], xn = aUM.length, ev = 0; ev < xn; ev++) aUN = aUM[ev], vf = a5J[aUN] >> 3, gz == vf || aUT && aRI[gz] === aRI[vf] && aRI[gz] || (vf = m4[aUN], (hd = m5 - vf % aTo) * hd + (hd = m6 - ~~((vf +
										.5) / aTo)) * hd < 14400 && (vf = a5K[aUN], hd = vf <= aUP ? Math.max(1, bJ.dj(vf + bJ.dj(aUP - vf, 10), 10)) : Math.max(1, bJ.dj(aUP, 10)), a5K[aUN] = Math.max(vf - hd, 0), aTP[aUN] = 4))
					}
				}(this), ! function(rB) {
					if (bd.jm() % 5 == 3) {
						var aA, hE, a5K = rB.a5K,
							ea = rB.on;
						for (aA = 0; aA < ea; aA++) hE = a5K[aA], a5K[aA] = Math.max(hE - Math.max(1, hE >> 7), 0)
					}
				}(this), this),
				a5K = rB.a5K,
				aTP = rB.aTP;
			for (aA = rB.on - 1; 0 <= aA; aA--) aTP[aA] = aTP[aA] >> 1, 0 === a5K[aA] && bL.aFb.aTE(aA);
			bb.fz(g7, di - bL.h3.aFY(g7), 15)
		}
}

function aSq() {
	this.aUU = 32, this.eh = 0, this.ej = 0, this.iK = 0, this.aUV = 0, this.aUW = 4, this.iJ = null, this.aUS = new Int16Array(9), this.dU = function() {
		this.iK = 1 + bJ.dj(bQ.el - 1, this.aUU), this.aUV = 1 + bJ.dj(bQ.em - 1, this.aUU), this.iJ = new Array(this.iK * this.aUV), b8.pi.a1G(this.iJ);
		var eh, ej, aUS = this.aUS,
			i = this.iK;
		for (eh = -1; eh <= 1; eh++)
			for (ej = -1; ej <= 1; ej++) aUS[3 * (1 + ej) + 1 + eh] = ej * i + eh
	}, this.p2 = function(aUY, aA) {
		return this.iJ[aA].push(aUY), this.iJ[aA].length - 1
	}, this.aUK = function(aUZ, aU3, aUA) {
		var aUa, aUb, aU3 = bK.iI(aU3),
			aUA = bK.iI(aUA);
		return aU3 === aUA ? aUZ : (aUa = this.iJ[aU3].pop(), this.iJ[aU3].length === aUZ ? this.p2(aUa, aUA) : (aUb = this.iJ[aU3][aUZ], this.iJ[aU3][aUZ] = aUa, bL.x.aTJ[aUa] = aUZ, this.p2(aUb, aUA)))
	}
}

function aSv() {
	function a0B(aUA, aUc) {
		if (! function(aUA, aT1) {
				var hc = bK.iH(aUA),
					aUg = Math.abs(bK.ei(aT1) - bK.ei(hc)),
					hc = Math.abs(bK.ek(aT1) - bK.ek(hc));
				return 0 !== Math.max(aUg, hc) && (function(aU3, aUA, aUg, aUh) {
					var aUj = bK.hx(aU3),
						aU3 = bK.i0(aU3),
						aUl = bK.hx(aUA),
						aUA = bK.i0(aUA),
						aUl = aUl - aUj,
						aUA = aUA - aU3,
						aUp = Math.abs(aUl),
						aUq = Math.abs(aUA),
						aUl = 0 < aUl ? 1 : 3,
						aUA = 0 < aUA ? 2 : 0;
					aUq < aUp ? aUt(aUj, aU3, aUj + aUp, aU3 + aUq, aUl, aUA, aUg) : aUt(aU3, aUj, aU3 + aUq, aUj + aUp, aUA, aUl, aUh)
				}(aUA, bK.iG(aT1), aUg, hc), !0)
			}(aUA, aUc)) return !1;
		if (0 === bM.f4[0]) return !!ab.h2(aUc << 2);
		if (! function(aT1) {
				if (ab.h2(aT1 << 2)) return 1;
				return function(aT1) {
					var aA, hM, aU1 = bL.x.aU1,
						aUx = bK,
						ea = bM.f4[0],
						aUy = 4 * aT1;
					for (aA = ea - 1; 0 <= aA; aA--) {
						hM = aU1[aA];
						var aUz = aUy;
						if (aUy = aUx.iM(aUy, hM + 2 & 3), ab.h2(aUy)) return bM.f4[0] = aA, bM.fB[1] = aUy >> 2, bM.fB[2] = 1 + hM, bM.fB[4] = aUz, 1
					}
					return
				}(aT1)
			}(aUc)) return !1;
		if (bM.fB[2] && ab.ef(bM.fB[4])) return !1;
		var aA, aUc = bK.iH(aUA),
			vX = aAL,
			aU1 = bL.x.aU1,
			ea = bM.f4[0] - 1,
			aUy = 4 * aUc,
			ha = bK.ha;
		for (aA = 0; aA < ea; aA++)
			if (aUy += ha[aU1[aA]], 0 !== vX[aUy + 3] || 2 !== vX[aUy + 2]) return !!void 0;
		return !!1
	}

	function aUt(aUj, aUk, aUl, aUm, aUr, aUs, aUg) {
		for (var ej, aU1 = bL.x.aU1, g8 = 0, aUu = 0, j = aUm - aUk, i = aUl - aUj, aUv = aUj % 16, aA = 1; aA <= aUg; aA++) aU1[g8++] = aUr, aU1[g8] = aUs, g8 += (ej = (j * (aUv + (aA << 4)) + .5) / i >> 4) - aUu, aUu = ej;
		bM.fG(bM.f4, g8)
	}
	this.kS = function(player, aUc) {
		var hM, hc, gy = bK.hk(player, aUc);
		return gy !== aUc && (hM = bK.hb(gy, aUc), hc = bK.iL(gy, hM), !(!ab.h2(hc << 2) && (hM = bK.hi(gy, aUc, hM), hc = bK.iL(gy, hM), !ab.h2(hc << 2)) || (bM.fB[0] = hc, bM.fB[1] = aUc, bM.fB[2] = 0, hc !== aUc && (!a0B(bK.iG(hc), aUc) ||
			0 !== bM.fB[2] && bK.hq(player, bM.fB[1] + bK.hZ[bM.fB[2] - 1] << 2)))))
	}, this.p4 = function(aUc) {
		var aU3 = bL.x.m4[bM.fB[3]];
		return bM.fB[1] = aUc, bM.fB[2] = 0, a0B(aU3, aUc)
	}
}

function aSr() {
	var xS = 32,
		xR = new Array(2);

	function vM(ev) {
		var eh, ej, eM, hy, hv, hR = xS,
			a1j = b8.pZ.vM(hR, hR),
			hX = b8.pZ.getContext(a1j, !0),
			hU = b8.pZ.getImageData(hX, hR, hR),
			vX = hU.data,
			kX = (hR >> 1) - .5,
			kY = Math.sqrt(kX * kX);
		for (vX.fill(255), ej = 0; ej < hR; ej++)
			for (eh = 0; eh < hR; eh++) hv = eh - kX, hy = ej - kX, eM = 4 * (ej * hR + eh), hv = 714 * (kY - Math.sqrt(hv * hv + hy * hy)) / kY, vX[2 + eM] = ev, vX[3 + eM] = 255 < hv ? 0 : hv;
		return hX.putImageData(hU, 0, 0), a1j
	}
	this.a4D = -1, this.dU = function() {
		this.a4D = -1, xR[0] || (xR[0] = vM(255), xR[1] = vM(0))
	}, this.aV1 = function(hX, eE, eh, ej, dw, aA) {
		b8.fv.gm(aC.eK) && (hX.setTransform(eE *= 4 / 3 * .625, 0, 0, eE, eh - (dw *= 4 / 3), ej - dw), hX.drawImage(xR[+(bL.x.aT5[aA] === this.a4D)], 0, 0))
	}
}

function dX() {
	this.aP0 = [L(430), L(431), L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444)];
	var aV2 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.aA1 = new Array(aV2.length), this.dU = function() {
		var g = bh.e7.data[155].value.split(";"),
			kX = g.length;
		if (function() {
				for (var ea = aV2.length, aA = 0; aA < ea; aA++) bV.aA1[aA] = aV2[aA]
			}(), !(kX > aV2.length))
			for (var aA = 0; aA < kX; aA++) g[aA].length && (this.aA1[aA] = g[aA])
	}, this.aP2 = function(dx, code) {
		for (var aA1 = this.aA1, aV4 = aV2, pG = (aA1[dx] = code, ""), ea = aA1.length, aV5 = [], aA = 0; aA < ea; aA++) aV5.push(aA1[aA] === aV4[aA] ? "" : aA1[aA]);
		ea--;
		for (aA = 0; aA < ea; aA++) pG += aV5[aA] + ";";
		bh.r1.r2(155, pG += aV5[ea])
	}, this.aOz = function() {
		bh.r1.r2(155, ""), this.dU()
	}, this.ev = function(code, dx) {
		return code === this.aA1[dx] || code === this.aA1[dx + 1]
	}
}

function dS() {
	var aV7 = new Array(1),
		aV8 = new Array(1),
		aV9 = 20,
		e8 = 0,
		aVA = !1;

	function aVC() {
		aV9++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aV8[aA] = 0, aV7[aA] = document.createElement("audio"), aV7[aA].src = src, aV7[aA].setAttribute("preload", "auto"), aV7[aA].setAttribute("controls", "none"), aV7[aA].style.display = "none", aV7[aA].onpause = function() {
					aV8[aA] = 1
				}, aV7[aA].oncanplaythrough = function() {
					aV8[aA] = 0 === aV8[aA] ? 1 : aV8[aA]
				}, document.body.appendChild(aV7[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aVA = !0
		}
	}, this.tA = function() {
		if (aVA) {
			aVA = !1;
			for (var aA = 0; 0 <= aA; aA--) aV7[aA].onpause = null, aV7[aA].oncanplaythrough = null, document.body.removeChild(aV7[aA]), aV7[aA] = null
		}
	}, this.play = function() {
		if (aVA) {
			var di = performance.now();
			if (e8 + 66 < di)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aV8[aA]) return e8 = di, aV8[aA] = 2, void aV7[aA].play();
			0 < aV9 && (aV9--, setTimeout(aVC, 66))
		}
	}
}

function cU() {
	this.a6l = function() {
		var aVF;
		return !(ak.jq < 3 || af.gN[l4[0]] >= aC.jZ >> 1) && (aC.hP ? (aVF = ad.aGe(), !(2 * ad.aGf(bf.l1()) >= aVF)) : function() {
			var aVF = ad.aGe();
			if (2 * af.gb[l4[0]] >= aVF) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aU4 = aC.jp, gb = af.gb, aA = 0; aA < aU4; aA++) gb[aA] = 512;
			var aU5 = aC.w3,
				k2 = aD.k2,
				hE = aD.hE;
			for (aA = aU4; aA < aU5; aA++) gb[aA] = k2[hE[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var ea = aC.w3, gb = af.gb, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < ea; aA++) gb[aA] = sResourcesValue
		} : function() {
			for (var ea = aC.w3, gb = af.gb, sResourcesData = aC.data.sResourcesData, aA = 0; aA < ea; aA++) gb[aA] = sResourcesData[aA]
		})();
		bb.lZ[8] = af.gb[aC.eK]
	}
}

function dJ() {
	var aVK = 501,
		aVM = (this.aVL = new Uint32Array(aVK), this.a2P = new Uint32Array(aVK), this.a9g = new Uint16Array(aVK), this.aP8 = 0, 1),
		aVN = 0;

	function aVQ(self) {
		self.max.fill(0)
	}

	function aVS(self, aA) {
		self.max[0] = Math.max(self.aVL[aA], self.max[0]), self.max[1] = Math.max(self.a2P[aA], self.max[1]), self.max[2] = Math.max(self.a9g[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aVO = 0, this.lZ = new Array(21), this.aVP = null, this.dV = function() {
		this.aVP = [L(445), L(446), L(447), L(448), L(449), L(450), L(451), L(452), L(287), L(288), L(453), L(454), L(455), L(456), "", L(457), L(458), L(459), L(247), L(460), L(461)]
	}, this.dU = function() {
		this.aP8 = 0, aVM = 1, this.aVO = 0, aVN = 0, aVQ(this), this.lZ.fill(0)
	}, this.ox = function(player, i9) {
		b8.fv.a2K(player) && (this.lZ[0] += i9 + 1, this.lZ[1]++, this.lZ[12] += bM.f7[1])
	}, this.oN = function(player, o2) {
		__fx.donationsTracker.logDonation(player, o2, bM.f7[0]);
		player === aC.eK && (aM.oN(bM.f7[0], bM.f7[1], o2), this.lZ[12] += bM.f7[1], this.lZ[16] += bM.f7[0]), o2 === aC.eK && (aM.a5X(bM.f7[0], player), this.lZ[10] += bM.f7[0])
	}, this.p0 = function(player) {
		b8.fv.a2K(player) && (this.lZ[2]++, this.lZ[12] += bM.f7[1])
	}, this.pB = function(player) {
		b8.fv.a2K(player) && (this.lZ[19]++, this.lZ[12] += bM.f7[1])
	}, this.aTz = function(player) {
		b8.fv.a2K(player) && this.lZ[20]++
	}, this.fz = function(player, a34, dx) {
		b8.fv.a2K(player) && (this.lZ[dx] += a34)
	}, this.ij = function() {
		var self;
		this.aVO || 0 < aVN-- || ((self = this).aVL[self.aP8] = af.gN[aC.eK], self.a2P[self.aP8] = af.gb[aC.eK], self.a9g[self.aP8] = ad.a9h(aC.eK), aVS(self, self.aP8), self.aP8++, self.aP8 === aVK && function(self) {
			aVQ(self), aVS(self, 0), self.aP8 = 1 + bJ.dj(aVK, 2);
			for (var aA = 1; aA < self.aP8; aA++) self.aVL[aA] = self.aVL[2 * aA], self.a2P[aA] = self.a2P[2 * aA], self.a9g[aA] = self.a9g[2 * aA], aVS(self, aA);
			aVM *= 2
		}(self), aVN = aVM - 1, bc.lQ(), 0 === af.ld[aC.eK] && (self.aVO = bd.jm()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rv = 0, this.rw = 0, this.aVU = 0, this.aVV = 0, this.a6y = 0, this.sd = 0;
	var aVX = this.aVW = 0;
	this.aVY = 0, this.aVZ = 0, this.aVa = 0, this.a6K = 0, this.dx = 0, this.a9J = null, this.hH = !1, this.aVb = -1, this.aVc = !1, this.aVd = [0, 0], this.dV = function() {
		this.a9J = [L(462), L(120, 0, "Balance"), L(119, 0, "Interest"), L(463)]
	}, this.dU = function() {
		this.hH = !1, this.aVb = -1, this.aVc = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var ed = z.a0.qx() && h.i < h.j ? 1 : z.a0.qx() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(ed * this.i), this.i -= z.a0.qx() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6K = Math.floor(this.j / 150), this.a6K = Math.max(this.a6K, 1.5), this.rv = Math.floor(1 + .02 * this.i),
			this.rw = Math.floor(1 + .04 * this.i), this.a6y = this.rw, aVX = Math.floor(.75 * this.a6y), this.sd = Math.floor(1 + .075 * this.i), this.aVY = Math.floor(1 + .1125 * this.i), this.aVZ = Math.floor(this.i * (z.a0.qx() ? .03 :
			.029)), this.aVZ = Math.max(this.aVZ, 4), this.aVa = Math.floor(.035 * this.i), this.aVa = Math.max(this.aVa, 4), this.aVW = this.j - 2 * this.a6y - this.sd - this.aVY, this.hH && this.aVe()
	}, this.gn = function(ks, kt) {
		var w6, w5;
		return !!this.hH && (w5 = ks, w6 = kt, ks -= bJ.dj(h.i - this.i, 2), kt -= bJ.dj(h.j - this.j, 2), ks < 0 || kt < 0 || ks >= this.i || kt >= this.j || ks >= this.i - this.aVY && kt < this.aVY ? -1 !== aL.gn(w5, w6) || bA.gn(w5, w6) ||
			this.qq() : kt < this.aVY || (kt < this.j - this.sd ? (this.aVc = !0, this.aVb = (ks - 2 * this.rv - this.aVU) / this.aVV, 3 !== this.dx && (bd.dc = !0)) : (w5 = (w5 = Math.floor(ks / (this.i / this.a9J.length))) < 0 ? 0 : w5 >=
				this.a9J.length ? this.a9J.length - 1 : w5) !== this.dx && (this.dx = w5, this.aVe(), bd.dc = !0)), !0)
	}, this.a0O = function(ks, kt) {
		return this.aVd[0] = ks, this.aVd[1] = kt, !(!this.hH || !this.aVc || (ks -= bJ.dj(h.i - this.i, 2), kt = this.aVb, this.aVb = (ks - 2 * this.rv - this.aVU) / this.aVV, (0 <= this.aVb && this.aVb <= 1 || 0 <= kt && kt <= 1) && (bd.dc = !
			0), 0))
	}, this.a0n = function() {
		this.aVc && (this.aVc = !1)
	}, this.a0z = function() {
		this.hH ? this.qq() : this.show()
	}, this.show = function() {
		bb.aP8 < 2 || (this.hH = !0, this.aVe())
	}, this.qq = function() {
		this.hH = !1, this.aVb = -1, bd.dc = !0
	}, this.aVe = function() {
		this.dx < 2 ? this.aVU = aP.measureText(b8.zU.y7(bb.max[this.dx]), b8.pZ.rO(0, this.aVZ)) : 2 === this.dx && (this.aVU = aP.measureText(b8.zU.a2x(6, 2), b8.pZ.rO(0, this.aVZ))), this.aVV = this.i - 2 * this.rv - this.aVU - this.rw
	}, this.lQ = function() {
		this.hH && this.aVe()
	}, this.tg = function() {
		this.hH && this.a7F()
	}, this.a7F = function() {
		var eh = bJ.dj(h.i - this.i, 2),
			ej = bJ.dj(h.j - this.j, 2);
		th.setTransform(1, 0, 0, 1, eh, ej), th.fillStyle = b9.mc, th.fillRect(0, this.aVY, this.i, this.j - this.aVY), this.aVf(), this.aNy(), th.strokeRect(0, 0, this.i, this.j), b8.pZ.textAlign(th, 2), th.font = b8.pZ.rO(0, this.aVZ), 0 ===
			this.dx ? this.aVg(bb.aVL, eh, ej) : 1 === this.dx ? this.aVg(bb.a2P, eh, ej) : 2 === this.dx ? this.aVh(eh, ej) : 3 === this.dx && (this.aVi(eh, ej), this.aVj(eh, ej)), aL.a4d(Math.floor(eh + this.i - .725 * this.aVY), Math.floor(
				ej + .275 * this.aVY), Math.floor(.45 * this.aVY)), th.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVf = function() {
		var aA, di;
		for (th.lineWidth = this.a6K, b8.pZ.textBaseline(th, 1), b8.pZ.textAlign(th, 1), th.strokeStyle = b9.mf, th.font = b8.pZ.rO(1, this.aVa), di = this.i / this.a9J.length, th.fillStyle = b9.n1, th.fillRect(this.dx * di, this.j - this.sd, di,
				this.sd), th.fillStyle = b9.mf, th.fillRect(0, this.j - this.sd - .5 * this.a6K, this.i, this.a6K), aA = 1; aA <= 3; aA++) th.fillRect(aA * di, this.j - this.sd, this.a6K, this.sd);
		for (aA = this.a9J.length - 1; 0 <= aA; aA--) th.fillText(b8.x6.a1v(this.a9J[aA], 0, .9 * di), (aA + .5) * di, this.j - .46 * this.sd)
	}, this.aNy = function() {
		th.fillStyle = b9.nR, th.fillRect(0, 0, this.i, this.aVY), th.fillStyle = b9.mf, th.fillRect(0, this.aVY - .5 * this.a6K, this.i, this.a6K), th.font = b8.pZ.rO(1, .39 * this.aVY), th.fillText(b8.x6.a1v(L(464), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVY))
	}, this.aVg = function(g, eh, ej) {
		var kX = bb.max[this.dx],
			a1I = (th.setTransform(1, 0, 0, 1, eh + 2 * this.rv + this.aVU, ej + this.a6y + this.aVY), th.lineWidth = 2, this.aVW / Math.sqrt(kX));
		th.beginPath(), th.moveTo(this.aVV, this.aVW - a1I * Math.sqrt(g[bb.aP8 - 1]));
		for (var aA = bb.aP8 - 2; 0 <= aA; aA--) th.lineTo(aA * this.aVV / (bb.aP8 - 1), this.aVW - a1I * Math.sqrt(g[aA]));
		th.stroke();
		eh = this.a4d(g, a1I, .5);
		eh < .95 && th.fillText(b8.zU.y7(kX), -this.rv, 0), .05 < Math.abs(eh - .5) && th.fillText(b8.zU.y7(Math.floor(kX / 4)), -this.rv, Math.floor(this.aVW / 2)), .05 < eh && th.fillText("0", -this.rv, this.aVW)
	}, this.aVh = function(eh, ej) {
		th.setTransform(1, 0, 0, 1, eh + 2 * this.rv + this.aVU, ej + this.a6y + this.aVY), th.lineWidth = 2;
		var a1I = this.aVW / Math.max(bb.max[this.dx], 1);
		th.beginPath(), th.moveTo(this.aVV, this.aVW - a1I * bb.a9g[bb.aP8 - 1]);
		for (var aA = bb.aP8 - 2; 0 <= aA; aA--) th.lineTo(aA * this.aVV / (bb.aP8 - 1), this.aVW - a1I * bb.a9g[aA]);
		th.stroke();
		eh = this.a4d(bb.a9g, a1I, 1), ej = bb.max[this.dx] / 100;
		eh < .95 && th.fillText(b8.zU.a2x(ej, 2), -this.rv, 0), .05 < Math.abs(eh - .5) && th.fillText(b8.zU.a2x(ej / 2, 2), -this.rv, Math.floor(this.aVW / 2)), .05 < eh && th.fillText(b8.zU.a2x(0, 2), -this.rv, this.aVW)
	}, this.aVi = function(eh, ej) {
		th.setTransform(1, 0, 0, 1, eh + .34 * this.i, ej + 2 * aVX + this.aVY), b8.pZ.textAlign(th, 2);
		for (var a94 = this.j - 4 * aVX - this.sd - this.aVY, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) th.fillText(b8.x6.a1v(bb.aVP[g[aA]], 0, .31 * this.i), 0, aA * a94 / 9);
		var f2 = bb.lZ;
		for (th.setTransform(1, 0, 0, 1, eh + .39 * this.i, ej + 2 * aVX + this.aVY), b8.pZ.textAlign(th, 0), th.fillText(b8.zU.a2x(100 * f2[0] / (1024 * Math.max(f2[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) th.fillText(f2[g[aA]].toString(), 0,
			aA * a94 / 9);
		th.fillText(b8.zU.a2x(100 * (1 - af.gN[aC.eK] / f2[7]), 0), 0, a94)
	}, this.aVj = function(eh, ej) {
		th.setTransform(1, 0, 0, 1, eh + .79 * this.i, ej + 2 * aVX + this.aVY), b8.pZ.textAlign(th, 2);
		var aA, a94 = this.j - 4 * aVX - this.sd - this.aVY;
		for (th.fillStyle = b9.mw, aA = 2; 0 <= aA; aA--) th.fillText(b8.x6.a1v(bb.aVP[aA + 8], 0, .31 * this.i), 0, aA * a94 / 9);
		th.fillText(b8.x6.a1v(bb.aVP[18], 0, .31 * this.i), 0, 3 * a94 / 9), th.fillStyle = b9.mv, th.fillText(b8.x6.a1v(bb.aVP[11], 0, .31 * this.i), 0, 4 * a94 / 9), th.fillStyle = b9.nE, th.fillText(b8.x6.a1v(bb.aVP[13], 0, .31 * this.i), 0,
				5 * a94 / 9), th.fillText(b8.x6.a1v(bb.aVP[15], 0, .31 * this.i), 0, 6 * a94 / 9), th.fillText(b8.x6.a1v(bb.aVP[16], 0, .31 * this.i), 0, 7 * a94 / 9), th.fillText(b8.x6.a1v(bb.aVP[12], 0, .31 * this.i), 0, 8 * a94 / 9), th
			.fillStyle = b9.nD, th.fillText(b8.x6.a1v(bb.aVP[17], 0, .31 * this.i), 0, a94), th.fillStyle = b9.mw;
		var f2 = bb.lZ,
			aCm = f2[8] + f2[9] + f2[10] + f2[18],
			aCm = b8.zU.y7(aCm),
			aMn = th.measureText(aCm).width,
			eh = (th.setTransform(1, 0, 0, 1, eh + .83 * this.i + aMn, ej + 2 * aVX + this.aVY), th.fillText(b8.zU.y7(f2[8]), 0, 0), th.fillText(b8.zU.y7(f2[9]), 0, a94 / 9), th.fillText(b8.zU.y7(f2[10]), 0, 2 * a94 / 9), th.fillText(b8.zU.y7(f2[
				18]), 0, 3 * a94 / 9), th.fillStyle = b9.mv, th.fillText(aCm, 0, 4 * a94 / 9), th.fillStyle = b9.nE, th.fillText(b8.zU.y7(f2[13]), 0, 5 * a94 / 9), th.fillText(b8.zU.y7(f2[15]), 0, 6 * a94 / 9), th.fillText(b8.zU.y7(f2[16]),
				0, 7 * a94 / 9), th.fillText(b8.zU.y7(f2[12]), 0, 8 * a94 / 9), f2[12] + f2[13] + f2[15] + f2[16]);
		th.fillStyle = b9.nD, th.fillText(b8.zU.y7(eh), 0, a94), th.fillStyle = b9.mf
	}, this.a4d = function(g, a1I, a7q) {
		var aA, e, fH;
		return this.aVb < 0 || 1 < this.aVb ? .25 : (aA = this.aVb * (bb.aP8 - 1), fH = g[e = Math.floor(aA)], fH += (aA - e) * (g[e < bb.aP8 - 1 ? e + 1 : e] - fH), th.strokeStyle = b9.mi, .04 < this.aVb && this.aVl(0, this.aVW - a1I * Math.pow(
				fH, a7q), aA * this.aVV / (bb.aP8 - 1), this.aVW - a1I * Math.pow(fH, a7q)), .04 < fH / bb.max[this.dx] && this.aVl(aA * this.aVV / (bb.aP8 - 1), this.aVW, aA * this.aVV / (bb.aP8 - 1), this.aVW - a1I * Math.pow(fH, a7q)), th
			.fillStyle = b9.nG, th.beginPath(), th.arc(aA * this.aVV / (bb.aP8 - 1), this.aVW - a1I * Math.pow(fH, a7q), Math.max(2, .014 * this.j), 0, 2 * Math.PI), th.fill(), g = this.aVb * bd.a9i, g = 0 === af.ld[aC.eK] ? Math.floor(g * bb
				.aVO) : Math.floor(g * bd.jm()), th.fillStyle = b9.mf, th.fillText(1 === a7q ? b8.zU.a2x(fH / 100, 2) : b8.zU.y7(Math.floor(fH)), -this.rv, this.aVW - a1I * Math.pow(fH, a7q)), b8.pZ.textAlign(th, 1), th.fillText(aV.a9X(g),
				aA * this.aVV / (bb.aP8 - 1), this.aVW + this.aVZ - (z.a0.qx() ? 2 : 0) - this.a6K), b8.pZ.textAlign(th, 2), a1I * Math.pow(fH, a7q) / this.aVW)
	}, this.aVl = function(m5, m6, mI, mJ) {
		th.beginPath(), th.moveTo(m5, m6), th.lineTo(mI, mJ), th.stroke()
	}
}

function bt() {
	this.aVm = "https://", this.aVn = this.aVm + "territorial.io/", this.aP9 = this.aVn + "changelog", this.aPD = this.aVn + "terms", this.aVo = this.aVn + "cookie_policy", this.aOa = this.aVn + "privacy", this.aPC = this.aVn + "tutorial", this.aPB =
		this.aVn + "players", this.aPA = this.aVn + "clans", this.zf = this.aVn + "clan-results", this.aLw = "https://patreon.com/c/territorial", this.aB0 = this.aVm + "play.google.com/store/apps/details?id=territorial.io", this.zx = this.aVm +
		"apps.apple.com/app/id1581110913", this.aVp = this.aVm + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aB1 = this.aVm + "discord.gg/pthqvpTXmh", this.aB2 = this.aVm + "www.instagram.com/davidtschacher/", this.xh =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVq, this.x3 = new aVr, this.dU = function() {
		this.x.dU()
	}, this.ij = function() {
		0 !== this.x.a5g && this.x.a5g--
	}
}

function aVr() {
	this.tg = function() {
		if (0 !== bN.x.a5g && (th.globalAlpha = Math.min(bN.x.a5g / 580, 1), th.drawImage(bN.x.aVu, 1 + aR.x1(), 1 + aR.x2()), th.globalAlpha = 1, aC.gv)) {
			for (var m5 = iA / iB, m6 = iC / iB, mI = (h.i + iA) / iB, mJ = (h.j + iC) / iB, g8 = bN.x.aVv * iB, aVw = bN.x.aVw, aA = aC.jp - 1; 0 <= aA; aA--) ! function(aA, g8, m5, m6, mI, mJ, aVw) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g8 *= 2;
				0 === af.ld[aA] || 0 === af.gN[aA] || (mI = h.i * ((af.iO[aA] + af.iP[aA] + 1) / 2 - m5) / (mI - m5) - .5 * g8, m5 = h.j * ((af.iQ[aA] + af.iR[aA] + 1) / 2 - m6) / (mJ - m6) - .5 * g8, mI > h.i) || m5 > h.j || mI < -g8 || m5 <
					-g8 || (th.setTransform(highlight ? iB * 2 : iB, 0, 0, highlight ? iB * 2 : iB, mI, m5), th.drawImage(aVw[aC.hP ? be.eY[aA] : 1], 0, 0))
			}(aA, g8, m5, m6, mI, mJ, aVw);
			th.setTransform(iB, 0, 0, iB, 0, 0)
		}
	}
}

function aVq() {
	this.aVv = 28, this.a5g = 0, this.aVu = null;
	var aVy = this.aVw = null;

	function aW1(hR, aW2) {
		var eh, ej, eM, hv, a1j = b8.pZ.vM(hR, hR),
			hX = b8.pZ.getContext(a1j, !0),
			hU = b8.pZ.getImageData(hX, hR, hR),
			vX = hU.data,
			kX = (hR >> 1) - .5,
			aW3 = .5 + kX;
		for (aW3 *= aW3, ej = 0; ej < hR; ej++)
			for (eh = 0; eh < hR; eh++) hv = (hv = eh - kX) * hv + (hv = ej - kX) * hv, vX[eM = 4 * (ej * hR + eh)] = aW2[0], vX[1 + eM] = aW2[1], vX[2 + eM] = aW2[2], vX[3 + eM] = (aW3 - hv) * aW2[3] / aW3;
		return hX.putImageData(hU, 0, 0), a1j
	}

	function aV1(aA, hX, a1j, hR) {
		var highlight, eh, ej;
		0 !== af.ld[aA] && 0 !== af.gN[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (hR *= 2), eh = af.iO[aA] + af.iP[aA] + 1 - hR - 2 >> 1, ej = af.iQ[aA] + af.iR[aA] + 1 - hR - 2 >> 1, highlight ? hX
			.drawImage(a1j[aC.hP ? 9 === aC.k6 && 5 === aD.hE[aA] ? 3 : be.eY[aA] : aA < aC.jp ? 1 : 0], eh, ej, hR, hR) : hX.drawImage(a1j[aC.hP ? 9 === aC.k6 && 5 === aD.hE[aA] ? 3 : be.eY[aA] : aA < aC.jp ? 1 : 0], eh, ej))
	}
	this.dU = function() {
		var rB;
		this.a5g = 700,
			function(rB) {
				var hR = rB.aVv;
				if (rB.aVw = [], aVy = [], aC.hP) {
					for (var aA = 0; aA <= aC.wA; aA++) rB.aVw.push(aW1(hR, be.aTs[be.kB[aA]])), aVy.push(aW1(hR >> 1, be.aTs[be.kB[aA]]));
					9 === aC.k6 && aVy.push(aW1(hR, be.aTs[1]))
				} else rB.aVw.push(aW1(hR, be.aTs[7])), rB.aVw.push(aW1(hR, be.aTs[4])), aVy.push(aW1(hR >> 1, be.aTs[7]))
			}(this),
			function(rB, aW4) {
				var aA, aVu = rB.aVu,
					hX = b8.pZ.getContext(aVu, !0),
					ea = aC.eX,
					hR = rB.aVv >> 1;
				hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0), aW4 && hX.clearRect(0, 0, aVu.width, aVu.height);
				if (9 === aC.k6) {
					hR <<= 1;
					rB = ax.kF[5];
					for (aA = ea - rB; aA < ea; aA++) aV1(aA, hX, aVy, hR);
					ea -= rB, hR >>= 1
				}
				for (aA = aC.jp; aA < ea; aA++) aV1(aA, hX, aVy, hR)
			}(this, null !== (rB = this).aVu && rB.aVu.width === bQ.el - 2 && rB.aVu.height === bQ.em - 2 || (rB.aVu = b8.pZ.vM(bQ.el - 2, bQ.em - 2), !1)), aC.gv || this.a3F()
	}, this.aTr = aW1, this.a3F = function() {
		for (var ea = aC.jp, hR = this.aVv, aVw = this.aVw, hX = b8.pZ.getContext(this.aVu, !0), aA = 0; aA < ea; aA++) aV1(aA, hX, aVw, hR)
	}
}

function d3() {
	function aW7() {
		8 === aC.k6 && 1 === aC.yp && bP.yS.yo()
	}

	function aW6(player) {
		aC.gv ? (aj.aFS(player), ak.aIR(), aC.k8 && aC.or.ij()) : b1.aBH(player)
	}
	this.oH = function(player) {
		aM.z1(player, player === aC.eK ? 21 : 22), aW6(player), aW7()
	}, this.oo = function(player) {
		1 === aC.yp && 0 !== af.ld[player] && 2 !== af.a2G[player] && aW6(player), aC.ys--, aC.yr--, aM.z1(player, 4), b8.fv.gl(2) && aV.lP(!0), aW7()
	}
}

function dD() {
	this.aRT = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a91 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.mf, "rgb(170,170,170)"
	], this.aW8 = [b9.mf, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.mf, b9.mW], this.aW9 = [b9.mW, b9.mf, b9.mf, b9.mf, b9.mW, b9.mW, b9.mW, b9.mW, b9.mf];
	var aWA = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aWB = (this.aHt = ["rgba(" + aWA[0] + ",", "rgba(" + aWA[1] + ",", "rgba(" + aWA[2] + ",", "rgba(" + aWA[3] + ",", "rgba(" + aWA[4] + ",", "rgba(" + aWA[5] + ",", "rgba(" + aWA[6] + ",", "rgba(" + aWA[7] + ",", "rgba(" + aWA[8] + ",",
			"rgba(" + aWA[9] + ","
		], this.aHu = ["rgb(" + aWA[0] + ")", "rgb(" + aWA[1] + ")", "rgb(" + aWA[2] + ")", "rgb(" + aWA[3] + ")", "rgb(" + aWA[4] + ")", "rgb(" + aWA[5] + ")", "rgb(" + aWA[6] + ")", "rgb(" + aWA[7] + ")", "rgb(" + aWA[8] + ")", "rgb(" + aWA[
			9] + ")"
		], this.zB = null, this.aTs = [
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
	this.kB = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eY = new Uint8Array(aC.eX), this.a92 = new Uint8Array(aC.eX), this.wG = new Uint16Array(aC.eX), this.wH = new Uint16Array(this.kB.length + 1), this.wI = new Uint16Array(this.kB.length), this.dV =
		function() {
			this.zB = [L(465), L(466), L(467), L(468), L(469), L(470), L(471), L(472), L(473)]
		}, this.dU = function() {
			if (this.eY.fill(0), this.aWC(), aC.hP) {
				if (9 === aC.k6) {
					for (var eY = be.eY, aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) eY[aA] = 1;
					var ea = aC.eX;
					for (aA = aC.data.teamPlayerCount[7]; aA < ea; aA++) eY[aA] = 2;
					be.kB[1] = 7, be.kB[2] = 8
				} else aC.k8 ? function() {
					var colorsData = aC.data.colorsData;
					if (!aC.data.selectableColor)
						for (var aA = aC.jp - 1; 0 <= aA; aA--) colorsData[aA] = aw.j7(262144);
					var aWN = 0,
						eq = 768,
						aQx = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aC.data.teamPlayerCount;
					for (aA = 0; aA < 9; aA++)
						if (teamPlayerCount[aA]) {
							for (var ed = 0, eu = 0; eu < 3; eu++) ed += Math.abs(aWB[aA][eu] - aQx[eu]);
							ed < eq && (aWN = aA, eq = ed)
						} var aWO = new Uint16Array(9);
					for (aA = 0; aA < 9; aA++) aWO[aA] = teamPlayerCount[aA];
					var kB = be.kB,
						aWP = new Uint8Array(9),
						g2 = (kB[0] = 0, 1);
					for (aA = 1; aA < 9; aA++) aWO[aA] && (aWP[aA] = g2, kB[g2++] = aA);
					var j6 = aC.jp,
						eY = be.eY;
					aWO[aWN] ? (aWO[aWN]--, eY[0] = aWP[aWN]) : j6 = 0;
					var ev = 0;
					for (aA = j6; aA < aC.w3; aA++) {
						var hN = kB[ev];
						if (aWO[hN]) aWO[hN]--, eY[aA] = aWP[hN];
						else if (aA--, 9 <= ++ev) return console.log("error 325")
					}
				}() : this.ij();
				! function() {
					for (var ea = aC.eX, wG = be.wG, wH = be.wH, wI = be.wI, eY = be.eY, kB = be.kB, w9 = kB.length, e7 = new Array(w9), aA = 0; aA < w9; aA++) e7[aA] = [];
					for (aA = 0; aA < ea; aA++) e7[kB[eY[aA]]].push(aA);
					for (aA = 1; aA <= w9; aA++) wH[aA] = wH[aA - 1] + e7[aA - 1].length;
					for (aA = 0; aA < w9; aA++)
						for (var g2 = e7[aA].length, kX = wH[aA], hN = 0; hN < g2; hN++) wG[hN + kX] = e7[aA][hN];
					var jp = aC.jp;
					for (aA = 0; aA < w9; aA++)
						for (g2 = e7[aA].length, kX = wH[aA], hN = 0; hN < g2; hN++)
							if (wG[hN + kX] >= jp) {
								wI[aA] = hN;
								break
							}
				}(), ! function() {
					for (var ea = aC.eX, eY = be.eY, a92 = be.a92, kB = be.kB, aA = 0; aA < ea; aA++) a92[aA] = kB[eY[aA]];
					9 === aC.k6 && a92.fill(1, ea - ax.kF[5])
				}()
			}
		}, this.aWC = function() {
			for (var aA = this.kB.length - 1; 0 <= aA; aA--) this.kB[aA] = aA
		}, this.ij = function() {
			var hf = new Uint8Array(aC.jp),
				hg = new Uint8Array(aC.jp),
				aWH = new Uint16Array(8),
				aWI = new Uint16Array(this.kB.length);
			this.aWJ(hf, hg, aWH, 1), this.aF5(aWH), this.aWK(aWI, hf, hg), this.aWL(hf, hg, aWI), this.aWM()
		}, this.aWJ = function(hf, hg, aWO, aWQ) {
			for (var eu, e, aWR, ea = this.kB.length - aWQ, g = new Uint16Array(ea), colorsData = aC.data.colorsData, aA = aC.jp - 1; 0 <= aA; aA--) {
				for (eu = ea; aWQ <= eu; eu--) g[eu - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aWB[eu][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aWB[eu][1]) + Math.abs(4 * (63 & colorsData[aA]) - aWB[eu][2]);
				for (aWR = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aWR && (aWR = g[e], hf[aA] = e);
				for (aWO[hf[aA]] += 4, aWR = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aWR && e !== hf[aA] && (aWR = g[e], hg[aA] = e);
				aWO[hg[aA]]++
			}
		}, this.aF5 = function(aWO) {
			for (var eu, kZ, ea = this.kB.length - 1, aA = ea; 0 <= aA; aA--) this.kB[aA] = aA;
			for (aA = ea - 1; 0 <= aA; aA--) aWO[aA]++;
			for (aA = 1; aA <= ea; aA++) {
				for (kZ = 0, eu = 1; eu < ea; eu++) aWO[eu] > aWO[kZ] && (kZ = eu);
				aWO[kZ] = 0, this.kB[aA] = kZ + 1
			}
		}, this.aWK = function(aWI, hf, hg) {
			var eu, zY, ev, ed, e, mH, sD, aWS = this.kB.length - 1,
				q3 = new Uint16Array(aWS),
				aWT = [],
				aWU = 0,
				zX = [],
				aWV = [];
			loop: for (var aA = 0; aA < aC.jp; aA++)
				if (null !== (zY = b8.zU.zZ(af.zW[aA]))) {
					for (eu = zX.length - 1; 0 <= eu; eu--)
						if (zY === zX[eu]) {
							aWV[eu].push(aA), aWU = Math.max(aWU, aWV[eu].length);
							continue loop
						} zX.push(zY), aWT.push(!1), aWV.push([aA]), aWU = Math.max(aWU, 1)
				}
			for (; 2 < aC.wA && aWU > bJ.dj(aC.jp, aC.wA);) aC.wA--, aC.k6--;
			for (eu = zX.length - 1; 0 <= eu; eu--) {
				for (ed = -1, ev = zX.length - 1; 0 <= ev; ev--) !aWT[ev] && (-1 === ed || aWV[ev].length > aWV[ed].length) && (ed = ev);
				for (ev = aWS - 1; 0 <= ev; ev--) q3[ev] = 1;
				for (ev = aWV[ed].length - 1; 0 <= ev; ev--) q3[hf[aWV[ed][ev]]] += 3, q3[hg[aWV[ed][ev]]]++;
				for (aA = aWS - 1; 0 <= aA; aA--) {
					for (e = ed % aWS, ev = aWS - 1; 0 <= ev; ev--) q3[ev] > q3[e] && (e = ev);
					for (mH = -1, ev = aC.wA; 0 < ev; ev--)
						if (this.kB[ev] === e + 1) {
							mH = ev;
							break
						} if (q3[e] = 0, -1 !== mH) {
						for (sD = 0, ev = aC.wA; 0 < ev; ev--) aWI[mH] > aWI[ev] && sD++;
						if (sD !== aC.wA - 1) {
							for (ev = aWV[ed].length - 1; 0 <= ev; ev--) aWI[mH]++, this.eY[aWV[ed][ev]] = mH;
							break
						}
					}
				}
				aWT[ed] = !0
			}
		}, this.aWL = function(hf, hg, aWI) {
			for (var aA, hu, ea = this.kB.length - 1, border = bJ.dj(aC.jp, aC.wA), aWW = (0 < aC.jp % aC.wA && border++, new Uint8Array(1 + ea)), eu = ea; 1 <= eu; eu--) aWW[this.kB[eu]] = eu;
			for (aA = 0; aA < aC.jp; aA++) hu = aWW[hf[aA] + 1], 0 === this.eY[aA] && hu <= aC.wA && aWI[hu] < border && (aWI[hu]++, this.eY[aA] = hu);
			for (aA = 0; aA < aC.jp; aA++) hu = aWW[hg[aA] + 1], 0 === this.eY[aA] && hu <= aC.wA && aWI[hu] < border && (aWI[hu]++, this.eY[aA] = hu);
			for (eu = aC.wA; 1 <= eu; eu--)
				for (aA = aC.jp - 1; 0 <= aA && !(aWI[eu] >= border); aA--) 0 === this.eY[aA] && (aWI[eu]++, this.eY[aA] = eu)
		}, this.aWM = function() {
			for (var aA = aC.jp; aA < aC.eX; aA++) this.eY[aA] = 1 + aA % aC.wA
		}
}

function gO() {
	for (var eh, ej, aA = fU - 1; 0 <= aA; aA--) eh = bJ.dj(fW[aA], 4) % bQ.el, ej = bJ.dj(fW[aA], 4 * bQ.el), af.iO[fP] = Math.min(eh, af.iO[fP]), af.iQ[fP] = Math.min(ej, af.iQ[fP]), af.iP[fP] = Math.max(eh, af.iP[fP]), af.iR[fP] = Math.max(ej, af
		.iR[fP])
}

function fj() {
	var ed, g7, aA, ea = af.g1[fP].length,
		ec = ab.ec;
	loop: for (aA = ea - 1; 0 <= aA; aA--) {
		for (ed = 3; 0 <= ed; ed--)
			if (g7 = af.g1[fP][aA] + ec[ed], ab.eR(g7) || ab.g9(g7) && ab.eS(g7) !== fP) {
				ab.j3(af.g1[fP][aA], fP);
				continue loop
			} af.g1[fP][aA] = af.g1[fP][ea - 1], af.g1[fP].pop(), ea--
	}
}

function fk() {
	var player = fP,
		gF = af.gF,
		gG = af.gG,
		f0 = af.f0,
		ea = gF[player].length,
		ec = ab.ec;
	loop: for (var aA = ea - 1; 0 <= aA; aA--) {
		for (var aWX = !1, aWY = !1, ed = 3; 0 <= ed; ed--) {
			var g7 = gF[player][aA] + ec[ed];
			if (ab.aFF(g7, player)) continue loop;
			aWX = aWX || ab.h2(g7), aWY = aWY || ab.aFE(g7)
		}
		aWX ? gG[player].push(gF[player][aA]) : aWY ? f0[player].push(gF[player][aA]) : ab.wc(gF[player][aA], player), gF[player][aA] = gF[player][ea - 1], gF[player].pop(), ea--
	}
}

function gD() {
	af.gN[fT] -= fU
}

function gE(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) ab.ww(fT, border[aA]) || (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gH(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) !ab.ww(fT, border[aA]) && ab.eV(border[aA]) && (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gI(border) {
	for (var ed, g7, ea = border.length, ec = ab.ec, aA = ea - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--)
			if (g7 = border[aA] + ec[ed], ab.aFF(g7, fT)) {
				af.gF[fT].push(border[aA]), border[aA] = border[ea - 1], border.pop(), ea--;
				break
			}
}

function gJ() {
	for (var ed, g7, ec = ab.ec, aA = fU - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--) g7 = fW[aA] + ec[ed], ab.aFG(fT, g7) && ab.aFH(g7) && (af.gF[fT].push(g7), ab.g4(g7, fT))
}

function gK() {
	var eh, ej;
	loop: for (; af.iQ[fT] < af.iR[fT];) {
		for (eh = af.iP[fT]; eh >= af.iO[fT]; eh--)
			if (ab.ww(fT, 4 * (af.iQ[fT] * bQ.el + eh))) break loop;
		af.iQ[fT]++
	}
	loop: for (; af.iQ[fT] < af.iR[fT];) {
		for (eh = af.iP[fT]; eh >= af.iO[fT]; eh--)
			if (ab.ww(fT, 4 * (af.iR[fT] * bQ.el + eh))) break loop;
		af.iR[fT]--
	}
	loop: for (; af.iO[fT] < af.iP[fT];) {
		for (ej = af.iR[fT]; ej >= af.iQ[fT]; ej--)
			if (ab.ww(fT, 4 * (ej * bQ.el + af.iO[fT]))) break loop;
		af.iO[fT]++
	}
	loop: for (; af.iO[fT] < af.iP[fT];) {
		for (ej = af.iR[fT]; ej >= af.iQ[fT]; ej--)
			if (ab.ww(fT, 4 * (ej * bQ.el + af.iP[fT]))) break loop;
		af.iP[fT]--
	}
}

function eT(player, j0) {
	return 0 === be.eY[player] || be.eY[player] !== be.eY[j0]
}

function h8(player, j0) {
	for (var e, aWZ = ac.ff(player), aA = 0; aA < aWZ; aA++)
		if (0 === ac.fg(player, aA))
			if ((e = ac.fl(player, aA)) === aC.eX) {
				if (j0 === aC.eX) return !1;
				if (h6(j0)) return !0
			} else if (b8.fv.kb(e))
		if (j0 === aC.eX) {
			if (h6(e)) return !0
		} else if (hA(j0, e)) return !0;
	return !1
}

function h6(player) {
	for (var aA, g8, ea = af.gF[player].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < ea; aA++)
			if (ab.eR(af.gF[player][aA] + g8)) return !0;
	return !1
}

function aFO(player) {
	for (var aA, g8, ea = af.gF[player].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < ea; aA++)
			if (ab.j2(af.gF[player][aA]) && ab.eR(af.gF[player][aA] + g8)) return !0;
	return !1
}

function hA(a2L, a2M) {
	for (var aA, di, g8, g7, aU4 = af.gF[a2L].length, aU5 = af.gF[a2M].length, ec = (aU5 < aU4 && (di = a2L, a2L = a2M, a2M = di, di = aU4, aU4 = aU5, 0), ab.ec), ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < aU4; aA++)
			if (g7 = af.gF[a2L][aA] + g8, ab.g9(g7) && ab.eS(g7) === a2M) return !0;
	return !1
}

function aFP(a2L, a2M) {
	for (var aA, g8, g7, aU4 = af.gF[a2L].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < aU4; aA++)
			if (ab.j2(af.gF[a2L][aA]) && (g7 = af.gF[a2L][aA] + g8, ab.g9(g7)) && ab.eS(g7) === a2M) return !0;
	return !1
}

function dP() {
	this.p1 = new aWa
}

function aWa() {
	this.h5 = function(player) {
		b8.fv.a2H(player) && aM.zD(80, L(474), 637, 0, b9.nU, b9.mc, -1, !1)
	}, this.a4F = function() {
		aM.zD(80, L(475), 637, 0, b9.nU, b9.mc, -1, !1)
	}, this.o6 = function(player) {
		b8.fv.a2H(player) && aM.zD(80, L(476), 637, 0, b9.nU, b9.mc, -1, !1)
	}
}

function aWb() {
	this.aWc = 0, this.ij = function() {
		aN.ij(), aY.ij(), h.ij(), ay.x.ij(), av.aEb(), bd.dc && (bd.dc = !1, aZ.tg())
	}
}

function aWd() {
	this.e9 = bd.e9, this.dx = 0, this.aWc = 0, this.aEZ = 0, this.aWe = null, this.aWf = 7, this.a5h = 0, this.dU = function() {
		this.aEZ = 0, this.aWe = [], this.dx = 0, this.aWc = 0
	}, this.aQV = function(aB) {
		if (aC.gv) this.a9j(aB);
		else if (this.aWe.push(aB), 2 === aC.yp) {
			for (var aA = 0; aA < this.aWe.length; aA++) b6.nv.ij(this.aWe[aA]);
			this.aWe = []
		}
	}, this.a9j = function(aB) {
		2 !== aC.yp && (b6.nv.ij(aB), b7.ij(), aV.a9j(this.aEZ), this.aEZ === aC.a3L ? (aC.or.ij(), this.aEZ = 0, this.dx = 0, this.aWc = 0, this.e9 = bd.e9) : (this.aEZ++, ae.a3E(), ae.lP(!0), bZ.aAJ()))
	}, this.ij = function() {
		h.ij(), aC.gv ? (bd.dc = aV.a9j(-1) || bd.dc, lR()) : (0 !== this.dx || bd.e9 >= this.e9 && (this.e9 += bd.a9i * Math.floor(1 + (bd.e9 - this.e9) / bd.a9i), 2 === aC.yp ? lG() : this.aWg(), this.dx++, 27 < bd.e9 - this.a5h)) && this
		.aWh(), lM(), bd.dc && (bd.dc = !1, wz()), this.a5h = bd.e9
	}, this.aWh = function() {
		bd.dc = !0, lO(), this.dx = 0
	}, this.aWg = function() {
		var uO, aA;
		if (this.aWc !== 7 * this.aEZ) lI(), bZ.aAJ();
		else {
			uO = !1;
			loop: for (; this.aWi() && (uO = !0, lI(), 2 !== aC.yp) && 0 < this.aWe.length;)
				for (aA = this.aWf - 2; 0 <= aA; aA--)
					if (lI(), 2 === aC.yp) break loop;
			uO ? bZ.aAJ() : (lG(), bZ.a3H())
		}
	}, this.aWi = function() {
		return 0 < this.aWe.length && (this.aEZ++, b6.nv.ij(this.aWe[0]), this.aWe.shift(), !0)
	}
}

function aWj() {
	var aWk, aWl, aWm, aEZ, aWn, dx = 0,
		e9 = bd.e9;

	function aWq() {
		! function() {
			if (!aC.gv) return;
			if (aC.k8) return;
			if (2 !== aC.yp)
				if (aWn % 7 != 0) aWn++;
				else if (aEZ === aC.a3L) {
				if (!aWt()) return;
				aV.a9j(aEZ), aC.or.ij()
			} else {
				if (!aWt()) return;
				aWn++, aEZ++, ae.a3E(), ae.lP(!0)
			}
			return 1
		}() && aWt() && lI()
	}

	function aWr() {
		dx = 0, (aC.gv ? (bd.dc = aV.a9j(aEZ - (aWn % 7 == 0 ? 0 : 1) + aWn % 7 / 7) || bd.dc, lR) : aL.gk || !bA.a3i ? lR : (bd.dc = !0, lO))()
	}

	function aWt() {
		var aA, ea, aWu = b7.op.aRd,
			fH = b7.op.aRe,
			fJ = b7.op.aRf,
			fL = b7.op.aRg,
			aWv = b7.op.aRh,
			aWw = b7.op.aRi;
		if (!(aWk >= aWw.length)) {
			if (aWw = aWw[aWk], aWv[aWk]) {
				for (ea = aWl + aWw, aA = aWl; aA < ea; aA++) b6.nv.ob(aWu[aA], fH[aA], fJ[aA], fL[aA]);
				aWl += aWw, aWk++
			} else ++aWm >= aWw && (aWk++, aWm = 0);
			return 1
		}
		aM.a09("Replay file smaller than expected."), bA.a10(!1), aC.yp = 2
	}
	this.aWc = 0, this.dU = function() {
		aWn = aEZ = aWm = aWl = aWk = 0
	}, this.ij = function() {
		var aUR;
		h.ij(), bA.a7A() < 1.7 ? 0 === dx ? bd.e9 >= e9 && (aUR = bd.a9i / bA.a7A(), e9 += aUR * Math.floor(1 + (bd.e9 - e9) / aUR), 2 === aC.yp || aL.gk || !bA.a3i ? lG() : (aWq(), bZ.aAJ()), dx++) : aWr() : function() {
			var aUR;
			if (bd.e9 >= e9)
				if (2 === aC.yp || aL.gk || !bA.a3i) lG(), e9 = bd.e9;
				else {
					for (aUR = bd.a9i / bA.a7A(), 16 < (bd.e9 - e9) / aUR && (e9 = bd.e9 - 16 * aUR); bd.e9 >= e9 && 2 !== aC.yp;) e9 += aUR, aWq();
					bZ.aAJ()
				} aWr()
		}(), lM(), bd.dc && (bd.dc = !1, wz())
	}, this.yz = function() {
		b7.op.aRi.length - aWk <= 2 || aM.a09("Replay file larger than expected.")
	}
}

function aWx() {
	var dx = 0,
		e9 = bd.e9;
	this.aWc = 0, this.ij = function() {
		h.ij(), aC.gv ? lR() : 0 === dx ? bd.e9 >= e9 && (e9 += bd.a9i * Math.floor(1 + (bd.e9 - e9) / bd.a9i), 2 === aC.yp || aL.gk ? lG() : (lI(), bZ.aAJ()), dx++) : ((aL.gk ? lR : (bd.dc = !0, lO))(), dx = 0), lM(), bd.dc && (bd.dc = !1, wz())
	}
}

function dL() {
	this.yy = null, this.dc = !1, this.e9 = 0, this.a9i = 56;
	var aWy = 0;

	function aWz() {
		bd.e9 = aWy = performance.now(), bd.yy.ij(), window.requestAnimationFrame(aWz)
	}
	this.dU = function() {
		this.a3f(), window.requestAnimationFrame(aWz), this.e9 = performance.now()
	}, this.a3W = function() {
		aC.gj ? (this.yy = new aWj, this.yy.dU()) : aC.k8 ? this.yy = new aWx : (this.yy = new aWd, this.yy.dU())
	}, this.a3f = function() {
		this.yy = new aWb, this.dc = !0
	}, this.ij = function() {
		this.yy.aWc++
	}, this.jm = function() {
		return this.yy.aWc
	}, this.aQ7 = function() {
		var di = performance.now();
		di < aWy + 1e3 || (this.e9 = di, this.yy.ij())
	}
}

function cn() {
	var aDy = 0,
		aX0 = !0;

	function aX1(id) {
		id = [L(477), L(478), L(479), L(480)][id];
		aM.a5O(id)
	}
	this.ij = function() {
		var di, a5j;
		bd.e9 < aDy || (aDy = bd.e9 + 5e3, aC.gj) || aC.k8 || b8.fv.gm(aC.eK) || (di = new Date, a5j = di.getUTCSeconds(), aX0 ? a5j < 50 && (aX0 = !1) : a5j < 50 || (aX0 = !0, (a5j = (di.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5j || 20 ==
			a5j || 40 == a5j ? aC.k6 < 7 && aX1(0) : 10 == a5j || 30 == a5j || 50 == a5j ? 7 !== aC.k6 && 10 !== aC.k6 || aX1(1) : 5 == a5j || 25 == a5j || 45 == a5j ? 8 === aC.k6 && aX1(2) : 35 == a5j && 9 === aC.k6 && aX1(3))))
	}
}

function ch() {
	var m5, m6, mI, mJ, aX2 = 0,
		aX3 = 0;

	function aX5() {
		return Math.pow(Math.pow(mI - m5, 2) + Math.pow(mJ - m6, 2), .5)
	}

	function aX4(e) {
		m5 = h.k * e.touches[0].clientX, m6 = h.k * e.touches[0].clientY, mI = h.k * e.touches[1].clientX, mJ = h.k * e.touches[1].clientY
	}
	this.a0S = function(e) {
		return 1 < e.touches.length ? (aX3 = bd.e9, aX2 = 3, aX4(e), aK.qq(), !0) : (aX2 = 0, !1)
	}, this.a0T = function(e) {
		var aJE, hs, ht;
		return 0 !== aC.yp && 1 < e.touches.length && (aX2 = Math.max(aX2 - 1, 0), aG.mN() && (aJE = aX5(), aX4(e), e = aX5(), hs = Math.floor((m5 + mI) / 2), ht = Math.floor((m6 + mJ) / 2), aR.a7a(hs, ht, Math.max(.125, e) / Math.max(.125,
			aJE)), bd.dc = !0), !0)
	}, this.a0q = function() {
		var eh, ej;
		return !!(aX2 && (aX2 = 0, bd.e9 < aX3 + 500)) && (eh = (m5 + mI) / 2, ej = (m6 + mJ) / 2, aK.a0k(eh, ej), aK.click(eh, ej, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.tA = function() {
		this.aB = null
	}, this.oa = function(size) {
		for (var f2 = 0, aB = this.aB, mN = this.dx + size - 1, aA = this.dx; aA <= mN; aA++) f2 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mN - aA;
		return this.dx += size, this.dx > 8 * this.size && console.error("Unwrapper Overflow"), f2
	}, this.aQd = function(size) {
		var eu = size >> 1;
		return (1 << eu) * this.oa(size - eu) + this.oa(eu)
	}, this.aQe = function(aX6) {
		return this.size === bB.aQc(aX6)
	}, this.aRv = function(vp, aX7, aX8) {
		var g2 = this.oa(vp);
		if (!g2) return null;
		for (var vp = Math.max(g2, aX8), g = new(aX7 <= 8 ? Uint8Array : aX7 <= 16 ? Uint16Array : Uint32Array)(vp), aA = 0; aA < g2; aA++) g[aA] = this.oa(aX7);
		aX8 = g[g2 - 1];
		return aX8 && g.fill(aX8, g2), g
	}, this.aRw = function(vp, aX9, aX8) {
		var g2 = this.oa(vp);
		if (!g2) return null;
		for (var vp = Math.max(g2, aX8), g = new Array(vp), aA = 0; aA < g2; aA++) g[aA] = this.aRt(aX9);
		return g.fill(g[g2 - 1], g2), g
	}, this.aRt = function(vp) {
		return bE.uv.uz(this.oa(vp))
	}, this.aRu = function() {
		var pG = bD.rr.rs(bD.rr.rt(this.oa(30))),
			pG = b8.zU.a39(pG, "_", "/");
		pG = b8.zU.a39(pG, "-", "+");
		for (var aXA = "";
			(pG.length + aXA.length) % 4;) aXA += "=";
		pG = "data:image/png;base64," + pG + aXA;
		var aFu = new Image;
		aFu.onload = function() {
			b7.aGJ.aGK(aFu), aFu.onload = null, aFu = null
		}, aFu.src = pG
	}
}

function dF() {
	this.aSk = 0, this.aSl = 0, this.aSg = 0, this.aSh = 0, this.aSi = 0, this.aSj = 0, this.aAK = [0, 0, 0, 0], this.mM = function() {
		this.aSk = aR.x1(), this.aSl = aR.x2(), this.aSg = -this.aSk, this.aSh = -this.aSl, this.aSi = h.i / iB, this.aSj = h.j / iB, this.aAK[0] = Math.floor(this.aSg), this.aAK[1] = Math.floor(this.aSh), this.aAK[2] = Math.floor(this.aAK[0] +
			this.aSi + 1), this.aAK[3] = Math.floor(this.aAK[1] + this.aSj + 1), bZ.aAH = !0
	}
}

function ci() {
	var a6G, lq;
	this.dU = function() {
		a6G = 1, lq = 0
	}, this.ij = function() {
		0 < a6G && (lq = 0 === lq ? bd.e9 + 16 : lq, a6G = (a6G -= .001 * (bd.e9 - lq)) < 0 ? 0 : a6G, lq = bd.e9, bd.dc = !0)
	}, this.tg = function() {
		0 < a6G && (th.fillStyle = "rgba(0,0,0," + a6G + ")", th.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aX6) {
		return this.dU(new Uint8Array(this.aQc(aX6))), this.aB
	}, this.tA = function() {
		this.aB = null
	}, this.a7 = function(size, a5n) {
		for (var aB = this.aB, mN = this.dx + size - 1, aA = this.dx; aA <= mN; aA++) aB[aA >> 3] |= (a5n >> mN - aA & 1) << 7 - (7 & aA);
		this.dx += size, this.dx > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQb = function(size, a5n) {
		var eu = size >> 1,
			ed = 1 << eu;
		this.a7(size - eu, bJ.dj(a5n, ed)), this.a7(eu, a5n % ed)
	}, this.aXD = function(size) {
		for (var aB = this.aB, mN = this.dx + size, aA = this.dx; aA < mN; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQc = function(aX6) {
		return aX6 + 7 >> 3
	}, this.aXE = function(g, j6, mN, aXF) {
		for (var aA = j6; aA < mN; aA++) this.a7(aXF, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dx = 0
	}, this.aR0 = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aXG, value) {
		for (var g = this.g, mN = this.dx + aXG - 1, aXH = 1 + (mN >> 3); g.length < aXH;) g.push(0);
		for (var aA = this.dx; aA <= mN; aA++) g[aA >> 3] |= (value >> mN - aA & 1) << 7 - (7 & aA);
		this.dx += aXG
	}, this.db = function(g, vp, aX7) {
		var aXI = b8.pi.a1d(g);
		this.a7(vp, aXI);
		for (var aA = 0; aA < aXI; aA++) this.a7(aX7, g[aA])
	}, this.aSD = function(g, vp, aX9) {
		var aXI = b8.pi.a1d(g);
		this.a7(vp, aXI);
		for (var aA = 0; aA < aXI; aA++) this.aSB(g[aA], aX9)
	}, this.aSB = function(pG, vp) {
		var ea = pG.length;
		this.a7(vp, ea);
		for (var aA = 0; aA < ea; aA++) this.a7(16, pG.charCodeAt(aA))
	}, this.aSC = function(a1j) {
		var aXJ = (a1j = a1j.toDataURL()).split(",");
		if (aXJ.length < 2) console.log("error 266");
		else {
			a1j = b8.zU.a39(a1j = aXJ[aXJ.length - 1], "/", "_"), a1j = b8.zU.a39(a1j, "\\+", "-");
			var a1j = b8.zU.a39(a1j, "=", ""),
				v8 = bE.rr.v5(a1j),
				ea = v8.length;
			this.a7(30, ea);
			for (var aA = 0; aA < ea; aA++) this.a7(6, v8[aA])
		}
	}
}
a(), self.aiCommand746 = function(f2) {
	0 === f2 ? bo() : 1 !== f2 || !z || 1 !== z.id || z.dk < 14 || bH.f3()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};