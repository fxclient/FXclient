var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, fa, iB, iA, iC, a6X, l4, ja, a0P,
	tj, x6, aAN, a3a, a3b, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "<br>", "0.75em", "   ", "hidden", "flex", "Data", "1em", "0.8em", " / ", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"pre", "</a>", "pointer", "password", "function", "break-word", "bold", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "blur", "Space", "Player ", "NoStack",
		"<a href='", "50%", "1.2em", "1.0em", "0px", "0.4em", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)",
		"rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US",
		"data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "Seed", "Report", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute",
		"1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dg = 1095, this.n = 2061, this.rVersion = 9, this.dU = function() {
		this.dh = 2;
		var di = bJ.dj(this.n, 10) % 100;
		this.dk = "18 Mar 2025 [" + bJ.dj(this.n, 1e3) + "." + (di < 10 ? "0" : "") + di + "." + this.n % 10 + "]", this.a8 = true, this.a9 = function() {
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
		l8 = 300,
		l9 = 0;
	this.kn = 0, this.e7 = new Uint32Array(512), this.dU = function() {
		l6 = l5 = 0, this.kn = 0, l9 = 0
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
			if (l7 <= l5) {
				var lD = am.iU.kn;
				if (lD) {
					if (bd.jm() % 350 != 1) return;
					if (l9 !== lD) return void(l9 = lD);
					if (!b8.fv.jD(l4[0])) return
				} else if (bd.jm() % 12 != 8) return;
				b8.fv.lE() || am.iU.dU()
			} else {
				var aA, i = bQ.el,
					lF = i - 2,
					lD = lF * (bQ.em - 2),
					lG = l7,
					e7 = am.iU.e7,
					kX = am.iU.kn,
					lH = e7.length,
					g8 = Math.min(l6 + lG * ((1 + 19 * am.performance.kr) * l8), lD);
				for (aA = l6; aA < g8; aA += lG) {
					var eE = 4 * (aA % lF + (bJ.dj(aA, lF) + 1) * i + 1);
					if (ab.eR(eE) && (e7[kX] = eE >> 2, ++kX === lH)) {
						aA += lG;
						break
					}
				}(l6 = aA) >= lD && (l6 = ++l5), am.iU.kn = kX
			}
	}
}

function lI() {
	aM.ij(), ae.ij(), aV.lJ(), ay.x.ij()
}

function lK() {
	az.ij(), aF.ij(), ad.ij(), b2.ij(), aE.ij(), am.ij(), bL.x.ij(), ak.lL(), aU.ij(), ax.ij(), bT.ij(), ae.ij(), ae.lM(), aV.ij(), bN.ij(), aT.ij(), aO.ij(), aM.ij(), b3.ij(), aQ.ij(), au.ij(), bb.ij(), bf.ij(), ay.x.ij(), ay.lN.ij(), s.ij(), b7
	.ij(), bd.ij()
}

function lO() {
	aG.ij(), aW.ij(), aP.ij(), at.ij(), bA.ij(), av.lP()
}

function lQ() {
	aU.lR(!1), aO.lR(), aV.lR(!1), aT.lR(), aQ.lR(), au.lR(), ae.lR(!1), bf.lS()
}

function lT() {
	ae.lR(!1) && (bd.dc = !0), ay.x.ij()
}

function c1() {
	var lU, lV, lW;

	function lY(la) {
		for (var aA = lU - 1; 0 <= aA; aA--) 0 === lW[lV[aA]] && af.gN[lV[aA]] >= la && fc(lV[aA])
	}

	function lX(player) {
		var di;
		64 === lW[player] ? lW[player] = 6 : (di = af.gN[player], lW[player] = di < 1e3 ? 3 : di < 1e4 ? 2 : di < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lU = 0, lV = new Uint16Array(aC.eX), lW = new Uint8Array(aC.eX)
	}, this.ij = function() {
		for (var aA = lU - 1; 0 <= aA; aA--) 64 === lW[lV[aA]] ? lX(lV[aA]) : 0 == lW[lV[aA]]-- && (lX(lV[aA]), fc(lV[aA]));
		16e4 <= af.gN[l4[0]] && (lY(16e4), 3e5 <= af.gN[l4[0]]) && lY(3e5), b8.fv.kb(aC.eK) && (bb.lb[7] = Math.max(af.gN[aC.eK], bb.lb[7]))
	}, this.fx = function(player) {
		for (var et, aA = lU - 1; 0 <= aA; aA--)
			if (player === lV[aA]) {
				for (lU--, et = aA; et < lU; et++) lV[et] = lV[et + 1];
				return
			}
	}, this.iy = function(player, lc) {
		for (var aA = lU - 1; 0 <= aA; aA--)
			if (player === lV[aA]) return;
		lV[lU++] = player, lW[player] = lc ? 2 : 64
	}
}

function c2() {
	var size, jd;
	this.dU = function() {
		size = aC.kA, jd = new Uint16Array(aC.eX);
		for (var jp = aC.jp, aA = aC.kA - 1; 0 <= aA; aA--) jd[aA] = jp + aA
	}, this.ij = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === af.lf[jd[aA]]) {
				et = void 0;
				var et = aA;
				size--, jd[et] = jd[size]
			} else aD.ij(jd[aA])
	}, this.le = function(g7) {
		jd[size++] = g7
	}
}

function c3() {
	var lh, li, lj, lk, ll, lm, ln, lo, lp, lq, lr, ls, lt, lu = !1,
		lv = !1;

	function lw(lx) {
		ls = bd.e9, lj = lk = li = 0, ll = (lt = 33) / lx, lh = 1 / (lx / lt / 4), lm = (h.i / 2 + iA) / iB, ln = (h.j / 2 + iC) / iB, lo = iB
	}

	function m4(aA) {
		var m7; - 1 !== aA && (aA = bK.iH(bL.x.m6[aA]), m7 = bK.ei(aA) - 10, aA = bK.ek(aA) - 10, aG.m0(m7, aA, 19 + m7, 19 + aA))
	}

	function mI(e1) {
		Math.abs(Math.log(lr / lo)) < .125 && (lr = e1 * lo)
	}

	function mH(m7, m8, mK, mL) {
		lp = (m7 + mK + 1) / 2, lq = (m8 + mL + 1) / 2;
		mK = h.i / (mK - m7 + 1), m7 = h.j / (mL - m8 + 1);
		lr = .9 * (mK < m7 ? mK : m7)
	}
	this.ly = function() {
		return lu
	}, this.lz = function() {
		lw(1), this.m0(0, 0, bQ.el - 1, bQ.em - 1), aC.gv || aC.gj || this.m1(aC.eK, 3e3, !0, .3)
	}, this.m2 = function(player, m3) {
		m4(bL.h3.m5(player, m3))
	}, this.m1 = function(player, lx, m9, zoom) {
		aC.mA || lu && !m9 && lv || (0 === af.gN[player] ? m4(bL.h3.mB(player)) : (aR.mC = !1, lv = m9, lw(lx), function(player) {
			lp = (af.iO[player] + af.iP[player] + 1) / 2, lq = (af.iQ[player] + af.iR[player] + 1) / 2
		}(player), function(zoom, player) {
			var hv = af.iP[player] - af.iO[player] + 1,
				player = af.iR[player] - af.iQ[player] + 1,
				et = h.i / hv,
				eu = h.j / player,
				et = (lr = et < eu ? et : eu, 0 !== zoom ? zoom : hv < 20 && player < 20 ? .5 : .9);
			lr *= et, mI(7 / 8)
		}(zoom, player), lu = !0, ap.mF()))
	}, this.mG = function(lx) {
		aC.gj || aC.mA || (aR.mC = !1, lv = !1, lw(lx), mH(0, 0, bQ.el - 1, bQ.em - 1), mI(7 / 8), lu = !0, ap.mF())
	}, this.m0 = function(m7, m8, mK, mL) {
		mH(m7, m8, mK, mL), iB = lr, aR.mM(lp, h.i / 2), aR.mN(lq, h.j / 2), bY.mO(), bd.dc = !0
	}, this.mP = function() {
		return !(lu && lv || (lu = !1))
	}, this.ij = function() {
		var mS, mT, ed, mW;
		lu && (li < .5 ? lk < ll && (lk += ll * lh, lj = li) : 1 - lj < li && (lk = (lk -= ll * lh) < ll * lh ? ll * lh : lk), ls = ls >= bd.e9 ? bd.e9 - 1 : ls, ed = bd.e9 - ls, li = 1e3 < ed || 1 < (li += lk * ed / lt) ? 1 : li, ls = bd.e9,
			ed = iB, mS = iA, mT = iC, ed = (iB = lo * Math.pow(lr / lo, li)) / ed, mW = 1 - (lo * Math.pow(lr / lo, 1 - li) - lo) / (lr - lo), aR.mM(lm + mW * (lp - lm), h.i / 2), aR.mN(ln + mW * (lq - ln), h.j / 2), ae.zoom(ed, (mS * ed -
				iA) / (1 - ed), (mT * ed - iC) / (1 - ed)), bY.mO(), 1 <= li && (lu = !1, bZ.mX = !0), bd.dc = !0)
	}
}

function bv() {
	var ev = b8.color;
	this.mY = ev.mZ(0, 0, 0), this.ma = ev.mb(0, 0, 0, .7), this.mc = ev.mb(0, 0, 0, .5), this.md = ev.mb(0, 0, 0, .85), this.me = ev.mb(0, 0, 0, .75), this.mf = ev.mb(0, 0, 0, .6), this.mg = ev.mb(0, 0, 0, .35), this.mh = ev.mZ(255, 255, 255), this
		.mi = ev.mb(255, 255, 255, .3), this.mj = ev.mb(255, 255, 255, .6), this.mk = ev.mb(255, 255, 255, .4), this.ml = ev.mb(255, 255, 255, .25), this.mm = ev.mb(255, 255, 255, .85), this.mn = ev.mb(255, 255, 255, .75), this.mo = ev.mb(255, 255,
			255, .15), this.mp = ev.mb(255, 255, 255, .11), this.mq = ev.mZ(128, 128, 128), this.mr = ev.mb(64, 64, 64, .75), this.ms = ev.mb(88, 88, 88, .83), this.mt = ev.mb(60, 60, 60, .85), this.mu = ev.mb(80, 60, 60, .85), this.mv = ev.mZ(170,
			170, 170), this.mw = ev.mZ(200, 235, 245), this.mx = ev.mZ(30, 255, 30), this.my = ev.mZ(0, 200, 0), this.mz = ev.mZ(128, 255, 128), this.n0 = ev.mb(10, 65, 10, .75), this.n1 = ev.mb(0, 255, 0, .6), this.n2 = ev.mb(0, 255, 0, .5), this
		.n3 = ev.mb(0, 200, 0, .5), this.n4 = ev.mb(0, 100, 0, .75), this.n5 = ev.mb(0, 60, 0, .8), this.n6 = ev.mb(0, 255, 0, .3), this.n7 = ev.mb(0, 180, 0, .6), this.n8 = ev.mb(0, 120, 0, .85), this.n9 = ev.mZ(0, 120, 0), this.nA = ev.mb(0, 70, 0,
			.85), this.nB = ev.mZ(190, 230, 190), this.nC = ev.mZ(0, 255, 0), this.nD = ev.mZ(255, 120, 120), this.nE = ev.mZ(255, 160, 160), this.nF = ev.mZ(255, 70, 70), this.nG = ev.mZ(230, 0, 0), this.nH = ev.mb(220, 0, 0, .6), this.nI = ev.mb(
			255, 100, 100, .8), this.nJ = ev.mb(100, 0, 0, .85), this.nK = ev.mb(60, 0, 0, .85), this.nL = ev.mb(200, 0, 0, .6), this.nM = ev.mb(120, 0, 0, .85), this.nN = ev.mZ(255, 70, 10), this.nO = ev.mZ(230, 190, 190), this.nP = ev.mZ(255, 0,
		0), this.nQ = ev.mZ(255, 0, 255), this.nR = ev.mb(60, 0, 60, .85), this.nS = ev.mb(0, 60, 60, .85), this.nT = ev.mb(10, 60, 60, .9), this.nU = ev.mb(0, 96, 96, .75), this.nV = ev.mZ(0, 255, 255), this.nW = ev.mZ(160, 160, 255), this.nX = ev
		.mb(0, 40, 90, .75), this.nY = ev.mb(0, 0, 255, .6), this.nZ = ev.mZ(200, 200, 255), this.na = ev.mZ(255, 120, 100), this.nb = ev.mb(255, 255, 0, .5), this.nc = ev.mb(255, 255, 150, .2), this.nd = ev.mZ(255, 255, 0), this.ne = ev.mZ(255, 255,
			200), this.nf = ev.mb(200, 200, 0, .6), this.ng = ev.mb(140, 120, 0, .75), this.nh = ev.mb(180, 160, 40, .75), this.ni = ev.mb(70, 50, 20, .85), this.nj = ev.mb(30, 30, 0, .85), this.nk = ev.mb(60, 60, 0, .85), this.nl = ev.mb(255, 140,
			0, .75), this.nm = ev.mb(70, 40, 0, .85), this.nn = ev.mZ(220, 120, 0), this.no = ev.mb(255, 200, 80, .85), this.np = ev.mZ(255, 150, 120), this.nq = ev.mb(0, 0, 0, 0), this.nr = ev.mb(255, 255, 255, 0), this.ns = ev.mb(254, 254, 254, 0)
}

function cs() {
	this.gw = new nt, this.fv = new nu, this.nv = new nw, this.nx = new ny, this.js = new nz
}

function nt() {
	this.gx = function(eM) {
		aC.k8 ? b6.nv.gx(aC.eK, eM) : ay.o0.o1(eM)
	}, this.h7 = function(i9, j0) {
		aC.k8 ? b6.nv.h7(aC.eK, i9, j0) : ay.o0.o2(i9, j0)
	}, this.o3 = function(i9, o4) {
		aC.k8 ? b6.nv.o5(aC.eK, i9, o4) : ay.o0.o6(i9, o4)
	}, this.h5 = function(i9, eM) {
		aC.k8 ? b6.nv.h5(aC.eK, i9, eM) : bL.h3.h4(aC.eK, eM) && ay.o0.o7(i9, eM)
	}, this.o8 = function(m3, eM) {
		aC.k8 ? b6.nv.o8(aC.eK, m3, eM) : bL.h3.o9(aC.eK, m3, eM) && ay.o0.oA(m3, eM)
	}, this.oB = function(j0) {
		aC.k8 ? b6.nv.oB(aC.eK, j0) : ay.o0.oC(j0)
	}, this.oD = function(oE) {
		aC.k8 ? b6.nv.oF(aC.eK, oE) : ay.o0.oG(oE)
	}, this.hJ = function(oH) {
		aC.k8 ? b6.nv.hJ(aC.eK, oH) : ay.o0.oI(oH)
	}, this.oJ = function() {
		aC.k8 ? b6.nv.oJ(aC.eK) : ay.o0.oK()
	}, this.hG = function() {
		aC.k8 ? b6.nv.hG(aC.eK) : ay.o0.o7(1, 0)
	}, this.h0 = function(i9, eM, j0) {
		aC.k8 ? b6.nv.h0(aC.eK, i9, eM, j0) : ay.o0.oL(i9, eM, j0)
	}
}

function nz() {
	this.jt = function(player, o4, hE) {
		b8.fv.oM(player, hE, o4) && (ad.o3(player, o4), o4 < aC.jp) && aw.random() < aw.value(10) && (am.ie.iv[o4] = 0)
	}, this.oN = function(player, o4, hE) {
		b8.fv.oO(hE, o4) ? (b8.fv.fy(o4, bM.f7[0]), bb.oP(player, o4), ae.oQ(o4, bM.f7[0])) : bb.fz(player, hE, 12)
	}
}

function nu() {
	this.oR = function(oE, player) {
		aM.oD(aC.eK, player, oE), ay.o0.oS(oE, player)
	}, this.oT = function(player) {
		aM.oU(player, 0), ay.o0.oV(player)
	}, this.oW = function(oX, player) {
		aM.oY(oX, player), ay.o0.oZ(oX, player)
	}, this.oa = function() {
		aC.k8 || aC.gj || ay.ob.oa()
	}
}

function ny() {
	this.ij = function(aB) {
		var id, fH, mP;
		for (bF.dU(aB), bF.dx += 2, mP = 8 * bF.size; bF.dx + 8 <= mP;) id = bF.oc(4), fH = bF.oc(9), 0 === id ? this.od(id, fH, bF.oc(22)) : 1 === id ? this.od(id, fH, bF.oc(10), bF.oc(10)) : 2 === id ? this.od(id, fH, bF.oc(10), bF.oc(9)) :
			3 === id || 4 === id ? this.od(id, fH, bF.oc(10), bF.oc(22)) : 5 === id || 6 === id ? this.od(id, fH, bF.oc(10)) : 7 === id ? this.od(id, fH, bF.oc(1)) : 10 === id ? this.od(id, fH, bF.oc(20), bF.oc(22)) : this.od(id, fH)
	}, this.oe = [], this.og = function() {
		for (var oi = 0, oj = 0, ok = 0, ol = 0, om = 0, on = 0, aA = 0; aA < 512; aA++) oi += af.lf[aA], oj += af.gN[aA], ok += af.gb[aA], ol += bL.x.oo[aA];
		om += bL.x.op, on += ak.jq, this.oe.push(ok % 1073741824 * 4 + (oi + oj + ol + om + on) % 4)
	}, this.od = function(id, fH, fJ, fL) {
		0 === id ? b6.nv.gx(fH, fJ) : 1 === id ? b6.nv.h7(fH, fJ, fL) : 2 === id ? b6.nv.o5(fH, fJ, fL) : 3 === id ? b6.nv.h5(fH, fJ, fL) : 4 === id ? b6.nv.o8(fH, fJ, fL) : 5 === id ? b6.nv.oB(fH, fJ) : 6 === id ? b6.nv.oF(fH, fJ) : 7 === id ?
			b6.nv.hJ(fH, fJ) : 8 === id ? b6.nv.oJ(fH) : 9 === id ? b6.nv.oq(fH) : 10 === id && b6.nv.h0(fH, fJ >> 10, fL, fJ % 1024)
	}
}

function nw() {
	this.gx = function(player, eM) {
		b8.fv.gl(0) && b8.fv.gm(player) && bK.iE(eM) && (b7.or.os(0, player, eM), aC.ot.ix(player, eM))
	}, this.h7 = function(player, i9, j0) {
		b8.fv.gl(1) && b8.fv.gm(player) && b8.fv.ou(player, j0) && b8.fv.ov(player, i9, 12, 0) && b8.fv.ow(player, j0) && ((j0 = ac.jB(player, bM.eW[0])) || ac.jT(player)) && (af.ox[player]++, b7.or.os(1, player, i9, bM.eW[0]), am.ib.io(player,
			j0)) && (b8.fv.oy(player), bb.oz(player, i9), am.ib.iu(player))
	}, this.o5 = function(player, i9, o4) {
		b8.fv.gl(1) && b8.fv.gm(player) && aC.hP && b8.fv.ou(player, o4) && b8.fv.p0(player, o4) && b8.fv.oM(player, b8.fv.i8(player, i9), o4) && (b7.or.os(2, player, i9, o4), ad.o3(player, o4))
	}, this.h5 = function(player, i9, eM) {
		b8.fv.gl(1) && b8.fv.gm(player) && (0 === eM && 1 === i9 ? this.hG(player) : bK.iE(eM) && bL.x.op !== bL.x.k3 && bL.x.oo[player] !== bL.x.p1 && 0 !== af.gG[player].length && b8.fv.ov(player, i9, 32, 0) && bL.kR.kS(player, eM) && (bb.p2(
			player), b7.or.os(3, player, i9, eM), b8.fv.oy(player), bj.p3.h5(player), bL.x.p4(player)))
	}, this.o8 = function(player, m3, eM) {
		b8.fv.gl(1) && b8.fv.gm(player) && bK.iE(eM) && bL.h3.p5(player, m3) && bL.kR.p6(eM) && (b7.or.os(4, player, m3, eM), b8.fv.p7(player, 8), bb.fz(player, bM.f7[1], 12), bj.p3.o8(player), bL.x.o8())
	}, this.oB = function(player, j0) {
		b8.fv.gl(1) && b8.fv.gm(player) && (j0 = Math.min(j0, aC.eX), ac.jB(player, j0)) && (b7.or.os(5, player, j0), ac.p8(player, j0))
	}, this.oF = function(player, oE) {
		(b8.fv.gl(1) || b8.fv.gl(2)) && b8.fv.gm(player) && (oE = bJ.p9(oE, 0, 1023), b7.or.os(6, player, oE), ae.pA(player, 0, oE))
	}, this.hJ = function(player, oH) {
		au.hI(player) && (b7.or.os(7, player, oH), au.pB(player, oH))
	}, this.oJ = function(player) {
		(b8.fv.gl(0) || b8.fv.gl(1)) && b8.fv.gm(player) && aL.pC(player) && (b7.or.os(8, player), bO.oJ(player))
	}, this.oq = function(player) {
		b7.or.os(9, player), bO.oq(player)
	}, this.hG = function(player) {
		au.hK(player) && (b7.or.os(3, player, 1, 0), au.hG(player))
	}, this.h0 = function(player, i9, eM, j0) {
		b8.fv.gl(1) && b8.fv.gm(player) && b8.fv.ou(player, j0) && b8.fv.ow(player, j0) && bK.iE(eM) && al.eB.eU(player, eM) && (ac.jB(player, bM.eW[0]) || ac.jT(player)) && (b7.or.os(10, player, (i9 << 10) + bM.eW[0], eM), j0 = b8.fv.kp(player,
			i9), af.g1[player].push(bM.eb[0]), ac.ix(player, j0, bM.eW[0]), aE.iy(player, !0), bb.pD(player))
	}
}

function pE() {
	var pG;
	this.pF = [], this.pG = document.createElement("div"), this.pH = function(pI, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pI, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pG.appendChild(
			title), title
	}, this.pJ = function(pI, marginBottom) {
		var pK = document.createElement("p");
		return pK.textContent = pI, pK.style.fontSize = "0.75em", pK.style.lineHeight = "1.2em", pK.style.marginBottom = marginBottom || "0", this.pG.appendChild(pK), pK
	}, this.pL = function(pI) {
		var pM = document.createElement("p");
		return pM.textContent = pI, pM.style.fontSize = "1em", pM.style.marginBottom = "0", pM.style.whiteSpace = "pre-wrap", pM.style.overflowWrap = "break-word", this.pG.appendChild(pM), pM
	}, this.pN = function(pO, fontSize) {
		var pG = document.createElement("div");
		return pG.innerHTML = pO, pG.style.fontSize = fontSize || "1em", pG.style.lineHeight = "1.2em", this.pG.appendChild(pG), pG
	}, this.pP = function(pQ) {
		for (var pR = pQ.pR, ea = pR.length, aA = 0; aA < ea; aA++) this.pG.appendChild(pR[aA])
	}, this.pS = function(pT) {
		return this.pF.push(pT), this.pG.appendChild(pT.e), pT
	}, this.resize = function() {
		for (var ea = this.pF.length, aA = 0; aA < ea; aA++) this.pF[aA].resize && this.pF[aA].resize()
	}, (pG = this.pG).style.position = "absolute", pG.style.height = "auto", pG.style.padding = "0.5em"
}

function pU(pV, pW) {
	var pG = document.createElement("div");

	function pf() {
		var aA, pg, j, g8, ed, pa = h.k * pG.offsetWidth,
			ph = new Float64Array(function(pa) {
				var i = .25 * b8.pb.pc(.6) * h.pd;
				return Math.max(Math.floor(pa / i), 1)
			}(pa)),
			pi = ba.pi,
			pj = (pa - (ph.length + 1) * ba.gap) / (ph.length * h.k);
		for (ph.fill(pi), aA = 0; aA < pW.length; aA++) pg = (ed = pW[aA].pG).style, j = b8.pk.min(ph), g8 = ph.indexOf(j), pg.top = b8.pb.pl(j), pg.left = b8.pb.pl(pi + g8 * (pj + pi)), pg.width = b8.pb.pl(pj), b8.pb.pm(ed, 5), ph[g8] += ed
			.offsetHeight + 3 * pi;
		pG.style.height = b8.pb.pl(b8.pk.max(ph) - 2 * pi)
	}
	this.pX = pG, this.pY = pW, this.resize = function() {
		var aA;
		for (aA = 0; aA < pW.length; aA++) pW[aA].resize();
		pf(), pf()
	}, pG.style.width = "100%", pG.style.maxWidth = "100%", pV.style.lineHeight = "1.5em", pV.style.overflowX = "hidden", pV.style.overflowY = "auto";
	for (var aA = 0; aA < pW.length; aA++) pG.appendChild(pW[aA].pG);
	pV.appendChild(pG)
}

function v(pn, po, pp, pq, pr) {
	var self, ps = document.createElement("button");

	function pz() {
		var q5;
		bH.q4() || (q5 = b8.color.q6(pp), !1 !== pq && 0 < q5[0] && q5[0] < 255 && q5[0] === q5[1] && q5[0] === q5[2]) || (ps.style.backgroundColor = b8.color.q7(pp, q5[3] && q5[3] < 120 ? 150 : 50))
	}

	function py() {
		if (pq) {
			var q5 = b8.color.q6(pp);
			if (q5[0] === q5[1] && q5[0] === q5[2]) return
		}
		po && ((q5 = po(this)) ? 2 === q5 && pz() : q9(this))
	}

	function q1() {
		this.style.backgroundColor = pp
	}

	function q0() {
		q9(this)
	}

	function q9(ed) {
		ed.style.backgroundColor = pp, ed.blur()
	}
	this.button = ps, this.pt = po, this.pu = pp, this.px = function(q2) {
		q2 = 1.1 - Math.min(.01 * pn.length, .6) + .2 * q2;
		ps.style.fontSize = q2.toFixed(1) + "em"
	}, this.pw = function(ev) {
		ev ? 1 === ev ? ev = b9.mt : 2 === ev && (pq = 1, ev = b9.mt) : (pq = 0, ev = b9.md), this.pu = pp = ev, ps.style.backgroundColor = ev
	}, self = this, ps.innerHTML = pn, ps.style.color = pr ? b9.nd : b9.mh, ps.style.userSelect = "none", ps.style.outline = "none", ps.style.overflowWrap = "break-word", self.pw(pp), ps.style.border = "none", ps.style.font = "inherit", self.px(
		0), ps.style.padding = "0em 0.3em", ps.onclick = py, ps.addEventListener("mouseover", pz), ps.addEventListener("mouseout", q0), ps.addEventListener("focus", pz), ps.addEventListener("blur", q1)
}

function qA(qB, pV) {
	var pG;
	this.resize = function() {
		for (var aA = 0; aA < qB.length; aA++) b8.pb.pm(qB[aA].button);
		pG.style.gap = pG.style.padding = b8.pb.pl(ba.pi)
	}, (pG = document.createElement("div")).style.display = "grid", pG.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pG.style.overflowY = "auto", pG.style.gridAutoRows = "5.3em", pG.style.maxHeight = "100%";
	for (var aA = 0; aA < qB.length; aA++) qB[aA].px(1), pG.appendChild(qB[aA].button);
	pV.appendChild(pG)
}

function qD(qE, qF, qG) {
	this.eh = 0, this.ej = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b8.pb.pc(qG || .5) * qE[1] * h.pd, h.j - 2 * ba.gap), this.i = Math.min(this.j * (qE[0] / qE[1]), h.i - 2 * ba.gap), this.j = qE[1] * this.i / qE[0], this.eh = ba.gap + qF[0] * (h.i - this.i - 2 * ba.gap), this.ej = ba
			.gap + qF[1] * (h.j - this.j - 2 * ba.gap)
	}, this.qH = function() {
		return this.eh + .5 * this.i
	}
}

function qI(qJ, qK) {
	var qT, self, qL = document.createElement("div"),
		qM = document.createElement("div"),
		qN = document.createElement("div"),
		qO = null,
		qU = (this.qP = new qQ({
			value: "",
			dx: -1
		}, 0, qR, function(e) {
			qO.qa.textContent = 127 - e.target.value.length
		}), 0),
		qV = 1,
		qW = 0,
		qX = 1048575;

	function qR() {
		qJ(), qO.qa.textContent = 127
	}

	function qk(qj, pT) {
		pT && (pT.qq = 1, qj.appendChild(bl.qr.transform(pT)))
	}

	function qo(bp) {
		qV ? qL.scrollTop = qL.scrollHeight : bp && (qL.scrollTop = qW)
	}
	this.qb = function(qc) {
			qX = 1048575, qM.textContent = "", qc || this.lS()
		}, this.lS = function() {
			var qd = bl.x.qe[0],
				qd = bl.x.qg[qd],
				qh = qd.qh,
				ea = qh.length,
				j6 = 1048575 === qX ? 0 : ea - (qd.qi - qX + 1048575) % 1048575;
			if (qX = qd.qi, !(ea <= (j6 = Math.max(j6, 0)))) {
				for (var qj = document.createDocumentFragment(), aA = j6; aA < ea; aA++) qk(qj, bl.ql.qm(qh[aA], bl.ql.qn(qh[aA])));
				qM.appendChild(qj), qo()
			}
		}, this.qp = function(p) {
			var qj = document.createDocumentFragment();
			qk(qj, p), qM.appendChild(qj), qo()
		}, this.show = function(pV) {
			pV.appendChild(qL), pV.appendChild(qN), this.resize(pV)
		}, this.qs = function(pV) {
			pV.removeChild(qL), pV.removeChild(qN)
		}, this.resize = function(pV) {
			qU = pV ? pV.offsetHeight : qU;
			var pV = b8.pb.qu(.04, .75),
				qv = Math.max(pV, qU - pV),
				qw = h.i / h.k,
				qx = .7 * qw,
				qv = (qN.style.top = b8.pb.pl(qU - pV), qN.style.height = b8.pb.pl(pV), qL.style.top = b8.pb.pl(qU - pV - qv), qL.style.height = b8.pb.pl(qv), b8.pb.pm(qL, 2), this.qP.e.style.width = b8.pb.pl(qx), this.qP.e.style.fontSize = qT.button
					.style.fontSize = b8.pb.pl(.5 * pV), b8.pb.pm(this.qP.e, 6), qT.button.style.left = b8.pb.pl(qx), qT.button.style.width = b8.pb.pl(qw - qx), .385 * pV);
			z.a0.qz() && (qv *= .8 - .12 * (h.i > h.j)), qM.style.marginLeft = qM.style.marginRight = b8.pb.pl(.5 * qv), qM.style.fontSize = b8.pb.pl(qv), qo(1)
		}, (self = this).qP.e.qY = 127, qL.style.position = "absolute", qL.style.top = "0", qL.style.left = "0", qL.style.width = "100%", qL.style.overflowX = "hidden", qL.style.overflowY = "auto", qL.style.font = "inherit", qL.style
		.backgroundColor = b9.mf, qL.addEventListener("scroll", function() {
			qW = qL.scrollTop, qV = qW < qL.scrollHeight - qL.clientHeight - 2 ? 0 : 1
		}), qM.style.font = "inherit", qN.style.position = "absolute", qN.style.left = "0", qN.style.width = "100%", self.qP.e.setAttribute("placeholder", L(13)), self.qP.e.style.position = "absolute", self.qP.e.style.top = "0", self.qP.e.style
		.left = "0", self.qP.e.style.height = "100%", self.qP.e.style.backgroundColor = b9.mc, self.qP.e.style.textAlign = "center", (qT = new v(L(14), qR)).button.top = "0", qT.button.style.position = "absolute", qT.button.style.height = "100%", qT
		.pw(b9.nr), qO = new qZ("127", qT.button, 1, 1), qL.appendChild(qM), qN.appendChild(self.qP.e), qN.appendChild(qT.button)
}

function r0(r1, pn, r2) {
	function click() {
		var value = 1 - r1.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pn, void 0 !== r1.dx ? bh.r3.r4(r1.dx, value) : r1.value = value, r2 && r2(value)
	}
	var e;
	pn = pn || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (r1.value ? "🟩 " : "⬜ ") + pn, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r5(pV, pO) {
	var pG = document.createElement("div");
	this.pX = pG, this.resize = function() {
		pG.style.padding = b8.pb.pl(ba.pi), pG.style.lineHeight = b8.pb.pl(b8.pb.qu(.035))
	}, pV.style.overflowX = "hidden", pV.style.overflowY = "auto", pG.innerHTML = pO, pV.appendChild(pG)
}

function r6(r7) {
	var pG = document.createElement("div");
	this.e = pG, this.r8 = r7, this.resize = function() {
		for (var ea = r7.length, aA = 1; aA < ea; aA++) b8.pb.pm(r7[aA], 4)
	};
	var aA, ea = r7.length;
	for (pG.style.width = "100%", pG.style.height = "2.7em", pG.style.marginTop = "0.6em", pG.style.border = "inherit", aA = 0; aA < ea; aA++) r7[aA].style.verticalAlign = "top", r7[aA].style.width = (100 / ea).toFixed(2) + "%", r7[aA].style.height =
		"100%", r7[aA].style.fontSize = "0.75em", pG.appendChild(r7[aA])
}

function r9(rA, pp, rB) {
	this.pG = document.createElement("div"), this.qB = rA;
	var rC = 0;
	this.resize = function(pV, rE) {
		var ea = rA.length;
		if (!rB)
			for (var aA = 1; aA < ea; aA++) b8.pb.pm(rA[aA].button, 4);
		for (var rF = 0, aA = 0; aA < ea; aA++) rF += rA[aA].button.offsetWidth;
		if (pV && (rC = pV.offsetWidth), rE && rF < rC)
			for (aA = 0; aA < ea; aA++) rA[aA].button.style.width = (100 * rA[aA].button.offsetWidth / rF).toFixed(2) + "%";
		else
			for (aA = 0; aA < ea; aA++) rA[aA].button.style.width = "auto";
		rE || this.resize(pV, 1)
	};
	var rD = this;
	rD.pG.style.height = rD.pG.style.maxHeight = "100%";
	for (var aA = 0; aA < rA.length; aA++) rA[aA].pw(pp), rA[aA].button.style.height = "100%", rA[aA].button.style.padding = "0.0em 0.9em", rD.pG.appendChild(rA[aA].button)
}

function rG() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b8.pb.pm(this.e, 8, b9.mq)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rH() {
	var rL, rM, rI = document.createElement("div"),
		rJ = 0,
		rK = 0;
	this.show = function(eh, ej, pI, rN, rO) {
		if (rJ) {
			if (!rN) return;
			this.qs()
		}
		eh === ej && -1 === eh ? (eh = rL, ej = rM) : (rL = eh, rM = ej), rO || (rK = rN), rJ = 1;
		rO = h.i / h.k, rI.style.whiteSpace = "pre", rI.textContent = pI, b8.pb.pm(rI, 5), rI.style.font = b8.pb.rQ(0, b8.pb.qu(.015)), rI.style.padding = "0.3em 0.6em", rI.style.left = eh + "px", rI.style.top = "0px", document.body.appendChild(
			rI), rN = eh + rI.offsetWidth - rO;
		0 < rN && (rI.style.left = (pI = eh - rN) + "px", pI < 5) && (rI.style.whiteSpace = "pre-wrap"), rI.style.top = ej - rI.offsetHeight + rK * ba.rS + "px"
	}, this.qs = function(rT) {
		if (rJ) {
			if (rT && rK) return 0;
			rJ = 0, document.body.removeChild(rI)
		}
		return 1
	}, rI.style.position = "absolute", rI.style.backgroundColor = b9.md, rI.style.color = b9.mh, rI.style.pointerEvents = "none", rI.style.zIndex = "5", rI.style.maxWidth = "100%"
}

function qQ(rU, type, rV, rW) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rX++, e.value = rU.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.mh, e.style.backgroundColor = b9.ma, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.rY++
		}), e.addEventListener("blur", function() {
			h.rY--, -1 !== rU.dx && bh.r3.r4(rU.dx, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rU.dx && bh.r3.r4(rU.dx, e.value), rV ? rV() : e.blur())
		}), rW && e.addEventListener("input", function(pT) {
			rW(pT)
		})
}

function rZ(pV, data) {
	var ea = data.ra.length,
		rb = document.createElement("div"),
		rc = document.createElement("div"),
		rd = document.createElement("div"),
		re = new Array(ea),
		pW = new Array(ea),
		rf = new Array(data.rg.length),
		rh = b8.color.mb(70, 70, 0, .35);

	function q7() {
		this.style.backgroundColor = b8.color.q7(rh, 160)
	}

	function rm() {
		this.style.backgroundColor = rh
	}

	function pf() {
		var et;
		for (pV.style.font = b8.pb.rQ(0, b8.pb.rw(.026, .5, .03)), aA = 1; aA < rf.length; aA++) b8.pb.pm(rf[aA], 4);
		if (b8.pb.pm(rb, 2), ea) {
			for (var gz, rx = rb.offsetWidth, ry = rd.offsetWidth, aA = 0; aA < rf.length; aA++) gz = .01 * data.rl[aA] * ry, rf[aA].style.width = (100 * gz / rx).toFixed(2) + "%";
			var kX = data.ra[0].length;
			for (aA = 0; aA < ea; aA++)
				for (b8.pb.pm(re[aA], 2), et = 1; et < kX; et++) b8.pb.pm(pW[aA][et], 4);
			rc.ri && (rc.scrollTop = rc.ri)
		}
	}
	this.resize = function() {
			pf(), pf()
		}, pV.style.display = "flex", pV.style.flexDirection = "column", rc.style.overflowX = "hidden", rc.style.overflowY = "auto", rc.addEventListener("scroll", function() {
			this.ri = this.scrollTop
		}),
		function() {
			var ed, aA, ra = data.ra,
				kX = ea ? ra[0].length : 0;
			for (aA = 0; aA < ea; aA++) {
				re[aA] = document.createElement("div"), re[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.mb(130, 130, 130, .35) : b9.mg
				}(aA), re[aA].style.width = "100%", re[aA].style.display = "flex", pW[aA] = new Array(kX);
				for (var et = 0; et < kX; et++) pW[aA][et] = ed = document.createElement("div"), ed.style.display = "flex", ed.style.justifyContent = "center", ed.style.wordBreak = "break-all", ed.style.padding = "0.4em 0em", ed.style.width = data
					.rl[et] + "%", ed.innerHTML = ra[aA][et].f2, 1 === ra[aA][et].di && (ed.name = "" + aA, ed.style.color = b9.nd, ed.style.backgroundColor = rh, ed.addEventListener("mouseover", q7), ed.addEventListener("mouseout", rm), function(ed,
						ro, rp) {
						2147483647 !== rp && ed.addEventListener("click", function() {
							bB.a6(30), bB.a7(30, ro), bF.dU(bB.aB), this.style.backgroundColor = rh, s.t(8, s.rq, new rr(25, {
								rs: 0,
								ro: bD.rt.ru(bD.rt.rv(5)),
								rp: rp
							}))
						})
					}(ed, ra[aA][et].ro, ra[aA][et].rp)), re[aA].appendChild(ed)
			}
			for (rb.style.display = "flex", rb.style.backgroundColor = b8.color.mb(0, 120, 0, .35), aA = 0; aA < rf.length; aA++) rf[aA] = ed = document.createElement("div"), ed.style.display = "flex", ed.style.justifyContent = "center", ed.style
				.wordBreak = "break-all", ed.style.padding = "0.4em 0em", ed.style.width = data.rl[aA] + "%", ed.innerHTML = data.rg[aA], rb.appendChild(ed)
		}();
	for (var aA = 0; aA < ea; aA++) rd.appendChild(re[aA]);
	rc.appendChild(rd), pV.appendChild(rb), pV.appendChild(rc)
}

function rz() {
	var s3, s4, s0 = document.createElement("div"),
		s1 = document.createElement("div"),
		s2 = document.createElement("div"),
		rd = document.createElement("div"),
		qB = [],
		s5 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		s6 = [1, 2, 3, 0, 9, 10, 11];

	function s8(aA) {
		s.t(8, 0, new rr(21, {
			sA: s6[aA],
			sB: 0,
			sC: 10
		}))
	}
	this.show = function() {
			this.r4(s.x.sD), document.body.appendChild(s0)
		}, this.qs = function() {
			document.body.removeChild(s0)
		}, this.r4 = function(sD) {
			for (var sE = [3, 0, 1, 2, 4, 5, 6], aA = 0; aA < qB.length; aA++) {
				var i = sD[aA];
				s3[sE[aA]][1].qa.textContent = i || ""
			}
		}, this.resize = function() {
			var aA, sF = ba.gap,
				j = b8.pb.sG(.085),
				i = Math.min(4 * j, h.i - 2 * sF),
				ea = qB.length;
			for (b8.pb.sH(s0, sF, h.j - sF - j, i, j), b8.pb.pm(s0), b8.pb.pm(s1, 6), aA = 0; aA < ea - 1; aA++) b8.pb.pm(qB[aA].button, 6);
			for (aA = 0; aA < ea; aA++) s3[aA][0].resize();
			for (qB[0].eh = 0, qB[0].button.style.left = b8.pb.pl(qB[0].eh), qB[0].button.style.width = b8.pb.pl(100), aA = 1; aA < ea; aA++) qB[aA].eh = qB[aA - 1].eh + qB[aA - 1].button.offsetWidth, qB[aA].button.style.left = b8.pb.pl(qB[aA].eh);
			if (!s4) {
				if (!aa.sI()) return;
				(s4 = aa.get(14)).style.width = "24%", s4.style.position = "absolute", s1.appendChild(s4)
			}
			s4.style.left = b8.pb.pl(0), s4.style.top = "7%", s2.sJ && (s2.scrollLeft = s2.sJ)
		}, s0.style.position = "absolute", s1.style.width = "25%", s1.style.height = "100%", s1.style.backgroundColor = b9.md, s2.style.position = "absolute", s2.style.width = "75%", s2.style.height = "100%", s2.style.backgroundColor = b9.md, s2
		.style.top = s2.style.right = b8.pb.pl(0), b8.pb.s7(s2), rd.style.height = rd.style.maxHeight = "100%", qB.push(new v("", function() {
			s8(0)
		}, b9.nR)), qB.push(new v("", function() {
			s8(1)
		}, b9.nS)), qB.push(new v("", function() {
			s8(2)
		}, b9.nK)), qB.push(new v("", function() {
			s8(3)
		}, b9.n5)), qB.push(new v("", function() {
			s8(4)
		}, b9.nm)), qB.push(new v("", function() {
			s8(5)
		}, b9.nk)), qB.push(new v("", function() {
			s8(6)
		}, b9.nm)), s3 = new Array(qB.length);
	for (var aA = 0; aA < qB.length; aA++) qB[aA].button.style.position = "absolute", s3[aA] = [new s9(s5[aA], qB[aA].button, .25, .45), new s9("", qB[aA].button, .53, .84, 1)], qB[aA].button.style.height = qB[aA].button.style.maxHeight = "100%", qB[
		aA].button.top = b8.pb.pl(0), rd.appendChild(qB[aA].button);
	s2.appendChild(rd), s0.appendChild(s1), s0.appendChild(s2)
}

function sK(sL, sM, sN, sO, qJ, qK) {
	var sP = document.createElement("div"),
		sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("div"),
		sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = document.createElement("span"),
		sY = document.createElement("div");
	this.sZ = new qI(qJ, qK), this.sa = new sb(qK), this.sc = [sL, sM, sN, sO], this.sg = function(sh) {
		sh = (sh / 10).toFixed(1) + "%";
		sW.style.width = sh, sX.innerHTML = sh
	}, this.si = function() {
		this.sa.qs(sU), this.sZ.show(sU)
	}, this.sj = function() {
		this.sZ.qs(sU), this.sa.show(sU)
	}, this.sk = function() {
		return sQ
	}, this.show = function() {
		document.body.appendChild(sP)
	}, this.qs = function() {
		document.body.removeChild(sP)
	}, this.resize = function(sl) {
		var sm = 1 - .4 * z.a0.qz() * (h.i > 1.6 * h.j),
			sn = b8.pb.qu(.05 * sm),
			so = h.j > h.i,
			sp = b8.pb.qu(.07 * sm + .03 * so),
			sq = b8.pb.qu(.04 + .02 * so),
			so = b8.pb.qu(.02 * sm + .01 * so),
			ss = b8.pb.qu(.025);
		sP.style.font = b8.pb.rQ(0, ss), sm < 1 && (ss = b8.pb.rQ(0, sm * ss), sR.style.font = ss, sT.style.font = ss, sY.style.font = ss, sV.style.font = ss, sS.style.font = ss), sQ.style.height = b8.pb.pl(sn), sQ.style.font = b8.pb.rQ(0, .72 *
				sn), b8.pb.pm(sQ, 2), sR.style.top = b8.pb.pl(sn), sR.style.height = b8.pb.pl(sp), b8.pb.pm(sR, 2), sS.style.font = b8.pb.rQ(0, sm * b8.pb.qu(.02)), sS.style.top = b8.pb.pl(sn + sp), sS.style.height = b8.pb.pl(sq), b8.pb.pm(sS,
			2), sT.style.top = b8.pb.pl(sn + sp + sq), sT.style.height = b8.pb.pl(sp), b8.pb.pm(sT, 2), sU.style.top = b8.pb.pl(sn + sp + sq + sp), sU.style.height = b8.pb.pl(h.j / h.k - sn - 3 * sp - sq - so), sV.style.top = b8.pb.pl(h.j / h.k -
				sp - so), sV.style.height = b8.pb.pl(so), b8.pb.pm(sV, 8), sX.style.font = b8.pb.rQ(0, .8 * so), sY.style.top = b8.pb.pl(h.j / h.k - sp), sY.style.height = b8.pb.pl(sp), b8.pb.pm(sY, 8), sL.resize(sR), sM.resize(sR), sN.resize(
			sR), sO.resize(sR), sl ? this.sZ.resize(sU) : this.sa.resize()
	};
	qJ = this;
	sP.style.position = "absolute", sP.style.top = "0", sP.style.left = "0", sP.style.width = "100%", sP.style.height = "100%", sP.style.backgroundColor = b9.mg, bH.q4() || (sP.style.backdropFilter = "blur(4px)", sP.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sP.style.display = "none"), sQ.style.position = "absolute", sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.display = "flex", sQ.style.alignItems = "center";
	for (var g = [sR, sS, sT, sY], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pb.s7(g[aA]);
	sU.style.position = "absolute", sU.style.left = "0", sU.style.width = "100%", sU.style.font = "inherit", sV.style.position = "absolute", sV.style.left = "0", sV.style.width = "100%", sW.style.position = "absolute", sW.style.top = "0", sW.style
		.left = "0", sW.style.height = "100%", sW.style.width = "50%", sW.style.backgroundColor = b9.n3, sX.innerHTML = "", sX.style.position = "absolute", sX.style.top = "50%", sX.style.left = "50%", sX.style.transform = "translate(-50%, -50%)", sQ
		.appendChild(function() {
			var sf = document.createElement("h1");
			return sf.textContent = L(23), sf.style.margin = "0 auto 0.15em auto", sf.style.webkitTextStroke = "0.02em brown", sf.style.fontFamily = "Arial Black, Trebuchet MS", sf.style.fontSize = "inherit", sf.style.fontWeight = "inherit", sf
		}()), sR.appendChild(sL.pG), sS.appendChild(sM.pG), sT.appendChild(sN.pG), sV.appendChild(sW), sV.appendChild(sX), sY.appendChild(sO.pG), sP.appendChild(sQ), sP.appendChild(sR), sP.appendChild(sS), sP.appendChild(sT), sP.appendChild(sU), sP
		.appendChild(sV), sP.appendChild(sY), qJ.sa.show(sU)
}

function sb(qK) {
	var sP = document.createElement("div"),
		sU = document.createElement("div");
	this.lS = function() {
			sU.textContent = "", bl.su.qs(1);
			for (var qj = document.createDocumentFragment(), sv = bl.x.qe[0], sw = bl.sw.sx[sv], sy = bl.sw.sy[sv], aA = 0; aA < sw.length; aA++) ! function(qj, pT, t0, sv) {
				var qa = document.createElement("span");
				qa.textContent = (t0 ? "🟢 " : "⚪ ") + bl.ql.t1(pT, sv), qa.style.color = bl.ql.t2(pT.t3), qa.style.cursor = "pointer", qa.style.margin = "0.2em 0.2em 0.2em 0.2em", qa.style.width = qa.style.maxWidth = 2 === sv ? "10em" : "9em",
					qa.style.height = qa.style.maxHeight = "1.4em", qa.style.whiteSpace = "nowrap", qa.style.overflow = "hidden", qa.style.textOverflow = "ellipsis", qa.style.font = "inherit", qa.style.display = "inline-block", bl.ql.t4(pT) && (
						qa.style.textDecoration = "underline"), qa.onclick = function(e) {
						qK(e, pT)
					}, bH.q4() || (qa.onmouseover = function(e) {
						bl.su.t5(e, pT, 1)
					}), qj.appendChild(qa)
			}(qj, sw[aA], aA < sy, sv);
			sU.appendChild(qj)
		}, this.show = function(pV) {
			pV.appendChild(sP)
		}, this.qs = function(pV) {
			pV.removeChild(sP)
		}, this.resize = function() {
			sU.style.fontSize = b8.pb.pl(b8.pb.qu(.02, .3))
		}, sP.style.top = "0", sP.style.left = "0", sP.style.width = sP.style.height = "100%", sP.style.overflowX = "hidden", sP.style.overflowY = "auto", sP.style.font = "inherit", sU.style.font = "inherit", sU.style.margin = "0.4em", sP
		.appendChild(sU)
}

function t6(t7) {
	var sP = document.createElement("div"),
		qN = document.createElement("div"),
		t8 = [];

	function pz() {
		bH.q4() || (this.style.backgroundColor = b8.color.q7(b9.md, 50))
	}

	function q0() {
		this.style.backgroundColor = b9.md
	}
	this.r4 = function(tA, tB) {
			t8[2].textContent = tA + 1 + " / " + tB
		}, this.show = function(pT) {
			qN.appendChild(bl.qr.transform(pT)), document.body.appendChild(sP)
		}, this.resize = function() {
			var j = b8.pb.qu(.03, .5);
			sP.style.width = 10 * j + "px", sP.style.font = b8.pb.rQ(1, .75 * j), b8.pb.pm(sP, 4), qN.style.top = j + "px", qN.style.font = b8.pb.rQ(0, .55 * j), b8.pb.pm(qN, 2), sP.style.height = j + qN.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pb.pm(t8[aA], 6), t8[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) t8[aA].style.height = j + "px", b8.pb.pm(t8[aA], 2);
			t8[2].style.width = 4 * j + "px", t8[1].style.left = 2 * j + "px", t8[2].style.left = 4 * j + "px", t8[3].style.left = 8 * j + "px"
		}, this.tC = function() {
			for (var aA = 0; aA < 4; aA++) t8[aA].onclick = null, t8[aA].onmouseover = null, t8[aA].onmouseout = null;
			document.body.removeChild(sP), sP = qN = t8 = null
		}, sP.style.position = "absolute", sP.style.color = b9.mh, sP.style.zIndex = "3", sP.style.right = "0", sP.style.top = "0", qN.style.position = "absolute", qN.style.height = "auto", qN.style.color = b9.mh, qN.style.backgroundColor = b9.md, qN
		.style.left = "0", qN.style.width = "100%", qN.style.overflowWrap = "break-word", sP.appendChild(qN);
	for (var aA = 0; aA < 4; aA++) t8[aA] = document.createElement("div"), t8[aA].style.position = "absolute", t8[aA].style.backgroundColor = b9.md, t8[aA].style.color = b9.mh, t8[aA].style.top = "0", t8[aA].style.display = "flex", t8[aA].style
		.justifyContent = "center", t8[aA].style.alignItems = "center", t8[aA].style.userSelect = "none", t8[aA].style.outline = "none", t8[aA].style.font = "inherit", 2 !== (t8[aA].t9 = aA) && (t8[aA].onclick = t7, t8[aA].onmouseover = pz, t8[aA]
			.onmouseout = q0), sP.appendChild(t8[aA]);
	t8[0].textContent = "◀", t8[1].textContent = "▶", t8[3].textContent = "✖"
}

function tD(t7) {
	var rI = document.createElement("div");

	function pz() {
		bH.q4() || (rI.style.backgroundColor = b8.color.q7(b9.md, 50))
	}

	function q0() {
		rI.style.backgroundColor = b9.md
	}
	this.r4 = function(tB) {
			rI.textContent = tB
		}, this.show = function() {
			document.body.appendChild(rI)
		}, this.resize = function() {
			var j = b8.pb.qu(.03, .5);
			rI.style.width = 2 * j + "px", rI.style.height = j + "px", rI.style.font = b8.pb.rQ(1, .75 * j), b8.pb.pm(rI, 4), b8.pb.pm(rI, 2)
		}, this.tC = function() {
			rI.onclick = null, rI.onmouseover = null, rI.onmouseout = null, document.body.removeChild(rI), rI = null
		}, rI.style.position = "absolute", q0(), rI.style.color = b9.mh, rI.style.zIndex = "3", rI.style.right = "0", rI.style.top = "0", rI.style.display = "flex", rI.style.justifyContent = "center", rI.style.alignItems = "center", rI.style
		.userSelect = "none", rI.style.outline = "none", rI.onclick = t7, rI.onmouseover = pz, rI.onmouseout = q0
}

function tE(rA) {
	var sP = document.createElement("div"),
		tF = document.createElement("div"),
		rJ = (this.eh = 0, this.ej = 0);

	function tH() {
		bl.tI.qs()
	}
	this.qB = rA, this.show = function(eh, ej, tK) {
		if (rJ) return [0, 0];
		rJ = 1, this.eh = eh, this.ej = ej,
			function(self, tK) {
				var i = b8.pb.qu(.16, .7),
					j = rA.length * i / 3,
					tM = h.i / h.k,
					tN = h.j / h.k,
					mJ = Math.min(1, Math.min(tM / i, tN / j));
				i *= mJ, j *= mJ, tK && (self.eh += b8.pb.qu(.03, .5)), self.eh = bJ.p9(self.eh, 0, tM - i), self.ej = bJ.p9(self.ej, 0, tN - j), tF.style.left = self.eh + "px", tF.style.top = self.ej + "px", tF.style.width = i + "px", tF.style
					.height = j + "px", tF.style.font = b8.pb.rQ(0, .34 * j / rA.length), b8.pb.pm(tF, 5);
				for (var aA = 1; aA < rA.length; aA++) b8.pb.pm(rA[aA].button, 8)
			}(this, tK), document.body.appendChild(sP)
	}, this.qs = function() {
		rJ && (rJ = 0, sP.removeEventListener("click", tH), document.body.removeChild(sP))
	};
	for (var aA = 0; aA < rA.length; aA++) new qZ("" + (1 + aA), rA[aA].button, 0, 1);
	sP.style.position = "fixed", sP.style.top = "0", sP.style.left = "0", sP.style.width = "100%", sP.style.height = "100%", sP.style.zIndex = "5", tF.style.position = "absolute",
		function() {
			for (var tJ = (100 / rA.length).toFixed(2) + "%", aA = 0; aA < rA.length; aA++) rA[aA].button.style.width = "100%", rA[aA].button.style.height = rA[aA].button.style.maxHeight = tJ, rA[aA].button.style.padding = "0.0em 0.9em", tF
				.appendChild(rA[aA].button)
		}(), sP.appendChild(tF), sP.addEventListener("click", tH)
}

function tO(rU, tP) {
	this.pR = [];
	var tQ = this.pR;

	function click() {
		for (var aA = 0; aA < tQ.length; aA++) tQ[aA].textContent = tQ[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dx = parseInt(this.name);
		void 0 !== rU.dx && bh.r3.r4(rU.dx, dx), tP && tP(dx)
	}
	for (var tR, ea = rU.tS.length, aA = 0; aA < ea; aA++)(tR = document.createElement("p")).textContent = "⚪ " + rU.tS[aA], tR.style.margin = "0", tR.name = "" + aA, tR.style.cursor = "pointer", tR.style.fontSize = "1em", tR.addEventListener(
		"click", click), tQ.push(tR);
	tQ[rU.value].textContent = tQ[rU.value].textContent.replace("⚪", "🟢")
}

function tT(title, tU, tV) {
	var s0 = document.createElement("div"),
		tW = document.createElement("div"),
		rd = document.createElement("div"),
		tX = document.createElement("div"),
		tY = document.createElement("div");
	this.tZ = rd, this.ta = tU, this.show = function() {
			!1 !== tV ? document.body.appendChild(s0) : (document.body.appendChild(tW), document.body.appendChild(tX))
		}, this.qs = function() {
			!1 !== tV ? document.body.removeChild(s0) : (document.body.removeChild(tW), document.body.removeChild(tX))
		}, this.te = function() {
			var qv = b8.pb.qu(.1),
				qt = b8.pb.qu(.08 + .04 * (h.tf < 1));
			return {
				qv: qv,
				qt: qt,
				tg: h.j / h.k - qv - qt
			}
		}, this.resize = function(rE) {
			var ea = tU.length,
				th = this.te(),
				qv = th.qv,
				qt = th.qt;
			for (tW.style.height = b8.pb.pl(qv), b8.pb.pm(tW, 2), tX.style.top = b8.pb.pl(h.j / h.k - qt), tX.style.height = b8.pb.pl(qt), b8.pb.pm(tX, 8), rd.style.top = b8.pb.pl(qv), rd.style.height = rd.style.maxHeight = b8.pb.pl(th.tg), tW.style
				.font = b8.pb.rQ(0, b8.pb.qu(.02, .3)), tX.style.font = b8.pb.rQ(0, b8.pb.qu(.02, .7)), rd.style.font = b8.pb.rQ(0, b8.pb.qu(.02, .7)), aA = 1; aA < ea; aA++) b8.pb.pm(tU[aA].button, 4);
			for (var rF = 0, aA = 0; aA < ea; aA++) rF += tU[aA].button.offsetWidth;
			if (rE && rF < tX.offsetWidth)
				for (aA = 0; aA < ea; aA++) tU[aA].button.style.width = (100 * tU[aA].button.offsetWidth / rF).toFixed(2) + "%";
			else
				for (aA = 0; aA < ea; aA++) tU[aA].button.style.width = "auto";
			tX.sJ && (tX.scrollLeft = tX.sJ), rE || this.resize(!0)
		}, this.ti = function() {
			var th = this.te(),
				ev = h.k;
			tj.fillStyle = b9.md, tj.fillRect(0, ev * th.qv, h.i, ev * th.tg)
		}, s0.style.position = "absolute", s0.style.top = "0", s0.style.left = "0", s0.style.width = "100%", s0.style.height = "100%", tW.style.position = "absolute", tW.style.top = "0", tW.style.left = "0", tW.style.width = "100%", tW.style
		.display = "flex", tW.style.backgroundColor = b9.md, tX.style.position = "absolute", tX.style.left = "0", tX.style.width = "100%", b8.pb.s7(tX), tY.style.height = tY.style.maxHeight = "100%", rd.style.position = "absolute", rd.style.width =
		"100%", rd.style.backgroundColor = b9.md,
		function() {
			for (var aA = 0; aA < tU.length; aA++) tU[aA].button.style.height = "100%", tU[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tU.length; aA++) tY.appendChild(tU[aA].button);
	tW.appendChild(function() {
		var td = document.createElement("h1");
		return td.textContent = title, td.style.margin = "auto", td.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", td.style.webkitTextStroke = "0.02em brown", td.style.fontFamily = "Arial Black, Trebuchet MS", td
	}()), tX.appendChild(tY), !1 !== tV && (s0.appendChild(rd), s0.appendChild(tW), s0.appendChild(tX))
}

function qZ(tk, tl, tm, tn) {
	var self;
	this.qa = document.createElement("span"), (self = this).qa.textContent = tk, self.qa.style.color = b9.mh, self.qa.style.position = "absolute", self.qa.style.font = "inherit", tn ? self.qa.style.bottom = "0.06em" : self.qa.style.top = "0.12em",
		tm ? self.qa.style.left = "0.2em" : self.qa.style.right = "0.2em", self.qa.style.fontSize = "0.6em", self.qa.style.pointerEvents = "none", self.qa.style.whiteSpace = "pre", tl.style.position = "relative", tl.style.overflow = "hidden", tl
		.appendChild(self.qa)
}

function s9(tk, tl, to, tp, tq) {
	var self;
	this.qa = document.createElement("span"), this.resize = function() {
			this.qa.style.fontSize = ((tp - to) * tl.offsetHeight).toFixed(1) + "px"
		}, (self = this).qa.textContent = tk, self.qa.style.color = b9.mh, self.qa.style.font = "inherit", self.qa.style.margin = "0.1em 0.6em", self.qa.style.pointerEvents = "none", tq && (self.qa.style.fontWeight = "bold"), self.qa.style
		.whiteSpace = "nowrap", self.qa.style.display = "block", tl.appendChild(self.qa)
}

function tr(ts, tt, tu, tv) {
	var tw = document.createElement("textarea"),
		tx = (this.e = tw, !0);

	function u3() {
		tw.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tt && b8.pb.pm(tw, 5)
		}, this.ty = function(tz) {
			tw.value = tz
		}, this.u0 = function() {
			return tw.value
		}, this.u1 = function() {
			tw.select()
		}, this.clear = function() {
			tw.value = ""
		}, this.u2 = function() {
			tx && navigator.clipboard ? (tw.select(), navigator.clipboard.writeText(tw.value).catch(function() {
				tx = !1, u3()
			})) : u3()
		}, tw.setAttribute("id", "textArea" + s.x.rX++), tw.setAttribute("autocomplete", "off"), ts && tw.setAttribute("placeholder", ts), tw.style.top = "0", tw.style.left = "0", tw.style.width = "100%", tw.style.height = "100%", tw.style
		.userSelect = "none", tw.style.outline = "none", tw.style.resize = "none", tw.style.border = "none", tw.style.color = b9.mh, tw.style.backgroundColor = b9.ma, tv ? (tw.style.fontSize = "1em", tw.rows = 6, tw.style.padding = "0.25em") : (tw
			.style.padding = "0.45em", tw.style.fontSize = "1.2em"), tu && tw.addEventListener("input", function(e) {
			tu(e)
		}), tw.addEventListener("focus", function() {
			h.rY++
		}), tw.addEventListener("blur", function() {
			h.rY--
		})
}

function dC() {
	this.pt = new u4, this.e7 = new u5, this.r3 = new u6, this.x = new u7, this.dU = function() {
		this.e7.dU(), (new u8).dU()
	}
}

function u5() {
	function u9(aA, type, uG, dk) {
		bh.e7.data.push({
			dx: aA,
			type: type || 0,
			value: uG || 0,
			uG: uG || 0,
			dk: dk || 0
		})
	}

	function uA(aA, type, uG, dk) {
		bh.e7.data.push({
			dx: aA,
			type: type,
			value: uG || "",
			uG: uG || "",
			dk: dk || 0
		})
	}

	function uB(mP) {
		for (var aA = bh.e7.data.length; aA < mP; aA++) bh.e7.data.push(null)
	}
	this.data = [], this.dU = function() {
		u9(0, 1, 0, 5), u9(1, 1, 1), u9(2, 0), uA(3, 2), u9(4, 1), uA(5, 2, "Trebuchet MS", 1), u9(6, 0), u9(7, 0, 0), u9(8, 0), u9(9, 1, 1), u9(10, 1), u9(11, 1, 1), uA(12, 2, navigator.language), u9(13), u9(14), uB(100), uA(100, 2), uA(101, 2),
			uA(102, 2), uA(103, 2), uA(104, 2), uA(105, 2), uA(106, 2), u9(107), u9(108), u9(109), uA(110, 2), u9(111), u9(112), u9(113), uA(114, 2), u9(115), uA(116, 2), u9(117, 1), uA(118, 2, "", 2), u9(119, 1, 0, 1), uA(120, 2), u9(121, 1, ~~(
				262144 * Math.random())), uA(122, 2, "Player " + Math.floor(1e3 * Math.random())), u9(123), uA(124), u9(125, 1), uA(126, 2), u9(127, 0, 1), u9(128), u9(129), u9(130), u9(131), u9(132), uA(133, 2), u9(134, 0, 5), uA(135, 2), uA(
				136, 2), u9(137), u9(138), u9(139), u9(140), u9(141), u9(142), u9(143), u9(144), uA(145, 2), u9(146), u9(147), uA(148, 2), u9(149), u9(150, 0, 1), uA(151, 2), u9(152, 0, 5), u9(153, 1), u9(154, 1), uA(155, 2), uA(156, 2), u9(157),
			u9(158), u9(159), u9(160), uB(180), u9(180, 0), u9(181, 0)
	}, this.r4 = function(dx, value) {
		this.data[dx].value = value
	}, this.uC = function(dx, value) {
		this.r4(dx, value), bh.pt.save(dx, String(value)), bh.pt.save(dx, String(this.data[dx].dk), !0)
	}, this.uD = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pt.save(aA, String(this.data[aA].value)), bh.pt.save(aA, String(this.data[aA].dk), !0))
	}, this.uE = function(dx) {
		return Number(this.data[dx].value)
	}, this.uF = function(dx) {
		return String(this.data[dx].value)
	}
}

function u4() {
	this.uH = function(dx, dk) {
		return Number(this.uI(dx, dk))
	}, this.uI = function(dx, dk) {
		var f2 = null;
		return 0 === z.id ? z.uJ && (f2 = z.uJ.getItem((dk ? "v" : "d") + dx)) : 1 === z.id ? f2 = z.uK.loadString((dk ? 1e3 : 2e3) + dx) : 2 === z.id && (f2 = z.uL[(dk ? "v" : "d") + dx]), f2 && 0 !== f2.length ? f2 : null
	}, this.uM = function(ea, uN) {
		var g = [],
			uO = uN ? "e" : "l";
		if (0 === z.id) {
			if (z.uJ)
				for (aA = 0; aA < ea; aA++) g.push(z.uJ.getItem(uO + aA))
		} else if (1 === z.id)
			for (var uP = uN ? 5e3 : 3e3, aA = 0; aA < ea; aA++) g.push(z.uK.loadString(uP + aA));
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) g.push(z.uL[uO + aA]);
		return g
	}, this.save = function(dx, value, dk) {
		var uQ = (dk ? "v" : "d") + dx;
		if (0 === z.id) {
			if (z.uJ && bh.e7.data[140].value) try {
				z.uJ.setItem(uQ, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uK.saveString((dk ? 1e3 : 2e3) + dx, value) : 2 === z.id && (z.uL[uQ] = value, z.uR.postMessage(uQ + " " + value))
	}, this.uS = function(g, uN) {
		var ea = g.length,
			uO = uN ? "e" : "l";
		if (0 === z.id) {
			if (z.uJ && bh.e7.data[140].value) try {
				for (aA = 0; aA < ea; aA++) z.uJ.setItem(uO + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uP = uN ? 5e3 : 3e3, aA = 0; aA < ea; aA++) z.uK.saveString(uP + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) z.uL[uO + aA] = g[aA], z.uR.postMessage(uO + aA + " " + g[aA])
	}
}

function u8() {
	this.dU = function() {
		! function() {
			var data = bh.e7.data;
			0 === data[2].dk && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uG = 1);
			0 === data[100].dk && (data[100].value = data[100].uG = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f2, data = bh.e7.data,
			ea = data.length;
		for (aA = 0; aA < ea; aA++) data[aA] && data[aA].dk === bh.pt.uH(aA, !0) && (f2 = bh.pt.uI(aA), data[aA].value = null === f2 ? data[aA].uG : 2 === data[aA].type ? f2 : Number(f2))
	}
}

function u7() {
	function uY(g) {
		if (0 === g.length) bh.r3.r4(116, "");
		else {
			for (var ub = g[0], aA = 1; aA < g.length; aA++) ub += ";" + g[aA];
			bh.r3.r4(116, ub)
		}
	}
	this.uV = function() {
		bh.e7.data[110].value.length && (bh.e7.data[106].value = bh.e7.data[110], bh.r3.r4(110, ""), this.uW())
	}, this.uW = function() {
		var g = bh.e7.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.e7.data[106].value), g.unshift(bh.e7.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uX = [], aA = 0; aA < g.length; aA += 2) uX.push(g[aA]);
		uY(g), bh.e7.data[117].value = 0, bh.e7.data[117].tS = uX
	}, this.uZ = function(dx) {
		bh.e7.data[117].tS.splice(dx, 1), bh.e7.data[117].value = Math.min(dx, bh.e7.data[117].tS.length - 1);
		var g = bh.e7.data[116].value.split(";");
		g.splice(2 * dx, 2), uY(g)
	}, this.ua = function(dx) {
		var g = bh.e7.data[116].value.split(";");
		return {
			ro: g[2 * dx],
			password: g[2 * dx + 1]
		}
	}, this.uc = function() {
		var f2 = bJ.p9(bh.e7.data[121].value, -1, 262143);
		return f2 = -1 === f2 ? ~~(262144 * Math.random()) : f2
	}
}

function u6() {
	this.r4 = function(dx, value) {
		bh.e7.data[dx].value !== value && (bh.e7.uC(dx, value), 0 === dx ? (s.w(), b5.dU(), s.t(2)) : 1 === dx ? h.df(1) : 2 === dx ? h.df(0) : 5 === dx && (b8.pb.ud(), h.df(0)))
	}, this.ue = function() {
		for (var data = bh.e7.data, aA = 0; aA < 100; aA++) data[aA] && bh.e7.uC(aA, data[aA].uG);
		b8.pb.ud(), h.df(1), b5.dU()
	}, this.uf = function() {
		for (var data = bh.e7.data, aA = 0; aA < data.length; aA++) data[aA] && bh.e7.r4(aA, data[aA].uG)
	}, this.ug = function() {
		for (var eu = bh.e7, aA = 128; aA < 135; aA++) eu.uC(aA, eu.data[aA].uG)
	}, this.uh = function(data) {
		bh.r3.r4(109, data.rp), bh.r3.r4(107, data.ui), bh.r3.r4(108, data.uj), bh.r3.r4(112, data.uk), bh.r3.r4(111, data.ul), bh.r3.r4(113, data.um), bh.r3.r4(135, data.un), bh.r3.r4(136, data.uo), bh.r3.r4(137, data.up), bh.r3.r4(138, data
			.uq), bh.r3.r4(139, data.ur), bh.r3.r4(141, data.us), bh.r3.r4(142, data.ut), bh.r3.r4(143, data.uu), bh.r3.r4(144, data.uv)
	}
}

function bz() {
	this.rt = new uw, this.ux = new uy, this.uz = new v0, this.dU = function() {
		this.rt.dU()
	}
}

function uy() {
	this.v1 = function(size) {
		for (var v2 = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v2.oc(16)));
		return g.join("")
	}, this.v3 = function(pI) {
		return 20 < (pI = pI.trim()).length ? pI.substring(0, 20) : pI
	}
}

function uw() {
	var v4 = new Uint8Array(78);
	this.dU = function() {
		var aA;
		for (v4[50] = 37, aA = 0; aA < 10; aA++) v4[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) v4[aA + 20] = aA + 11, v4[aA + 52] = aA + 38
	}, this.v5 = function(pI) {
		return pI.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v6 = function(pI, size) {
		if ((pI = this.v5(pI)).length > size) return pI.substring(0, size);
		for (; pI.length < size;) pI = "-" + pI;
		return pI
	}, this.v7 = function(pI) {
		for (var v8 = v4, ea = pI.length, g = new Uint8Array(ea), aA = 0; aA < ea; aA++) g[aA] = v8[pI.charCodeAt(aA) - 45];
		return g
	}, this.v9 = function(vA) {
		bB.a6(6 * vA.length), this.vB(vA), bF.dU(bB.aB)
	}, this.vB = function(vA) {
		for (var ea = vA.length, i = bB, aA = 0; aA < ea; aA++) i.a7(6, vA[aA])
	}, this.vC = function(pI) {
		this.vB(this.v7(pI))
	}, this.vD = function(pI, size) {
		this.vB(this.v7(this.v6(pI, size)))
	}, this.vE = function(pI, size) {
		for (var g = this.v7(this.v6(pI, size)), f2 = 0, mJ = 1, aA = g.length - 1; 0 <= aA; aA--) f2 += mJ * g[aA], mJ *= 64;
		return f2
	}
}

function vF() {
	var i, j, vG;

	function vg(gz, ed, ve, vL, vZ) {
		ed = vf(gz, ed + 1 + 2 * vL & 3);
		! function(gz, vh) {
			return 1 < Math.abs(gz % i - vh % i) || 1 < Math.abs(vk(gz) - vk(vh))
		}(gz, ed) && 0 === vZ[ed << 2] && (vZ[ed << 2] = ve)
	}

	function vk(g7) {
		return Math.floor((g7 + .5) / i) % j
	}

	function vf(g7, ed) {
		return g7 + vG[ed]
	}
	this.vH = function(pI) {
		var aA, vI, ea, vJ, v2 = bF;
		for (bE.rt.v9(bE.rt.v7(pI)), bQ.vM.vN[bQ.eG].i = bQ.el = i = v2.oc(12), bQ.vM.vN[bQ.eG].j = bQ.em = j = v2.oc(12), vG = [-i, -1, i, 1], bQ.vW = document.createElement("canvas"), bQ.vW.width = bQ.el, bQ.vW.height = bQ.em, bQ.vS = bQ.vW
			.getContext("2d", {
				alpha: !1
			}), bQ.vT = bQ.vX = null, bQ.vT = bQ.vS.getImageData(0, 0, bQ.el, bQ.em), bQ.vX = bQ.vT.data, b8.pk.vY(bQ.vX), ea = v2.oc(12), vI = v2.oc(5), vJ = vP(i * j - 1), aA = 0; aA < ea; aA++) ! function(kX, g7, vK, vL) {
			var aA, ed, v2 = bF,
				vZ = bQ.vX,
				va = g7,
				vb = g7,
				vc = 0,
				vd = 1 + vK,
				ve = 2 - vK;
			for (vZ[g7 << 2] = vd, aA = 0; aA < kX; aA++) ed = v2.oc(2), g7 = vf(g7, ed), vZ[g7 << 2] === vd ? vc % 2 == 1 && vg(vb, vc + 2 * vL + 3, ve, vL, vZ) : vZ[g7 << 2] = vd, vg(g7, ed, ve, vL, vZ), vg(vb, ed, ve, vL, vZ), vb = g7,
				vc = ed;
			vf(g7, 0) === va ? (vg(g7, 0, ve, vL, vZ), vg(va, 0, ve, vL, vZ)) : vf(g7, 1) === va && (vg(g7, 0, ve, vL, vZ), vg(va, 2, ve, vL, vZ));
			0 === kX && (vg(va, 0, ve, vL, vZ), vg(va, 2, ve, vL, vZ))
		}(v2.oc(vI), v2.oc(vJ), 1 === v2.oc(1), 1 === v2.oc(1));
		var eh, ej, hN, vl, vm, vn, vZ = bQ.vX,
			vo = !0,
			vp = bQ.vM.vN[bQ.eG].vp,
			vq = bQ.vM.vN[bQ.eG].vq;
		for (ej = 0; ej < j; ej++)
			for (vl = !0, vm = vo, eh = vn = 0; eh < i; eh++) hN = 4 * ej * i + 4 * eh, vn <= eh && 0 < vZ[hN] && (vm = 2 === vZ[hN], vl) && (vl = !1, vm !== vo) ? (vo = vm, vn = eh + 1, eh = -1) : (vm ? (vZ[hN] = vq[0], vZ[1 + hN] = vq[1], vZ[
				2 + hN] = vq[2]) : (vZ[hN] = vp[0], vZ[1 + hN] = vp[1], vZ[2 + hN] = vp[2]), vZ[3 + hN] = 255);
		bQ.vS.putImageData(bQ.vT, 0, 0), bQ.vU = !0, bQ.vV.dU(), bd.dc = !0
	}
}

function v0() {
	this.vH = function(vr) {
		for (var v2 = bF, size = v2.oc(vr), vs = 7 + 9 * v2.oc(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v2.oc(vs)));
		return g.join("")
	}
}

function c4() {
	var rL, rM, vt, vu, vv, vw, vx, vy, vz, w0;

	function w2() {
		var w5 = aC.w5;
		for (vz = w5; vz < aC.eX; vz++) w1();
		for (vz = aC.gv ? aC.jp : 0; vz < w5; vz++) {
			if (!w6()) {
				for (var eu = aC.wA = vz; eu < w5; eu++) vz = eu, w1();
				return
			}
			w9(vw + rL * vv + bJ.dj(vv, 2), vx + rM * vv + bJ.dj(vv, 2))
		}
	}

	function wc(player) {
		for (var iO = af.iO, iQ = af.iQ, iP = af.iP, iR = af.iR, ej = iQ[player]; ej <= iR[player]; ej++)
			for (var eh = iO[player]; eh <= iP[player]; eh++) {
				var eE = ab.wd(eh, ej);
				ab.g9(eE) && (ab.j2(eE) ? ab.g4(eE, player) : ab.we(eE, player))
			}
	}

	function wb(g, sB, sC) {
		var di = g[sB];
		g[sB] = g[sC], g[sC] = di
	}

	function w6() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rL = bJ.dj(vt * aw.random(), aw.value(100)), rM = bJ.dj(vu * aw.random(), aw.value(100)), wj()) return 1;
			return
		}() || function() {
			var hv, hy, et, w8, eu, w7;
			for (hv = bJ.dj(vt * aw.random(), aw.value(100)), hy = bJ.dj(vu * aw.random(), aw.value(100)), et = 40; 1 <= et; et--)
				for (w8 = vu - et; 0 <= w8; w8 -= 40)
					for (rM = (w8 + hy) % vu, eu = 40; 1 <= eu; eu--)
						for (w7 = vt - eu; 0 <= w7; w7 -= 40)
							if (rL = (w7 + hv) % vt, wj()) return 1;
			return
		}()
	}

	function wj() {
		for (var g7, wl, gap = bJ.dj(vv - vy, 2), wm = vx + rM * vv + gap, wn = vw + rL * vv + gap, wk = wm + vy - 1; wm <= wk; wk--)
			for (wl = wn + vy - 1; wn <= wl; wl--)
				if (g7 = ab.wd(wl, wk), !ab.eV(g7) || ab.j2(g7)) return;
		return 1
	}

	function w9(w7, w8) {
		w1(), wo(w7 - 2, w8 - 2)
	}

	function w1() {
		af.lf[vz] = 0, af.gN[vz] = af.wZ[vz] = 0, af.g1[vz] = [], af.gF[vz] = [], af.gG[vz] = [], af.f0[vz] = [], af.iO[vz] = af.iQ[vz] = af.iP[vz] = af.iR[vz] = 0
	}

	function wo(w7, w8) {
		var g7, aA, wp, wq;
		for (af.lf[vz] = 1, af.iO[vz] = w7 + 10, af.iQ[vz] = w8 + 10, af.iR[vz] = af.iP[vz] = 0, wp = w7; wp < w7 + 4; wp++)
			for (wq = w8; wq < w8 + 4; wq++)(w7 < wp && wp < w7 + 3 || w8 < wq && wq < w8 + 3) && (g7 = ab.wd(wp, wq), ab.eV(g7)) && (af.iO[vz] = Math.min(wp, af.iO[vz]), af.iP[vz] = Math.max(wp, af.iP[vz]), af.iQ[vz] = Math.min(wq, af.iQ[vz]), af
				.iR[vz] = Math.max(wq, af.iR[vz]), w0[af.gN[vz]] = g7, af.gN[vz]++, ab.we(g7, vz));
		for (af.wZ[vz] = af.gN[vz], aA = af.gN[vz] - 1; 0 <= aA; aA--) ab.wr(w0[aA], vz) ? (ab.g4(w0[aA], vz), af.gF[vz].push(w0[aA])) : ab.ws(w0[aA]) ? (ab.g4(w0[aA], vz), af.gG[vz].push(w0[aA])) : ab.wt(w0[aA]) && (ab.g4(w0[aA], vz), af.f0[vz]
			.push(w0[aA]))
	}

	function wi(w7, w8) {
		for (var g7, wl, wk = w8; w8 - 6 < wk; wk--)
			for (wl = w7; w7 - 6 < wl; wl--)
				if (g7 = ab.wd(wl, wk), ab.j2(g7)) return;
		return 1
	}
	this.dU = function() {
		if (w0 = new Array(12), vy = 6, vv = 10, vt = bJ.dj(bQ.el, vv), vu = bJ.dj(bQ.em, vv), vw = bJ.dj(bQ.el - vv * vt, 2), vx = bJ.dj(bQ.em - vv * vu, 2), aC.gv)
			for (var aA = 0; aA < aC.jp; aA++) vz = aA, w1(), af.lf[vz] = 1;
		(0 === aC.data.spawningType ? w2 : 1 === aC.data.spawningType ? (w2(), function() {
			var wB = aC.wC;
			aC.wD || wB++;
			if (!(wB < 3)) {
				for (var data = aC.data, j6 = (aC.gv ? aC.jp : 0) + data.teamPlayerCount[0], mP = aC.wA, wE = new Uint32Array(wB), wF = new Uint32Array(wB), wG = new Uint16Array(wB), wH = new Uint16Array(wB), eY = be.eY, iO = af.iO, iQ =
						af.iQ, iP = af.iP, iR = af.iR, fE = bM.fE, fF = bM.fF, aA = j6; aA < mP; aA++) fE[aA] = iO[aA] + iP[aA] >> 1, fF[aA] = iQ[aA] + iR[aA] >> 1;
				for (aA = j6; aA < mP; aA++) {
					var id = eY[aA];
					wE[id] += fE[aA], wF[id] += fF[aA]
				}
				var kB = be.kB;
				for (aA = 1; aA < wB; aA++) {
					var g2 = Math.max(data.teamPlayerCount[kB[aA]], 1);
					wG[aA] = bJ.dj(wE[aA], g2), wH[aA] = bJ.dj(wF[aA], g2)
				}
				var wI = be.wI,
					wJ = be.wJ,
					wK = be.wK,
					fD = bM.fD;
				for (aA = 0; aA < 512; aA++) fD[aA] = aA;
				for (var dw = 0; dw < 2 + (4 <= wB); dw++)
					for (aA = j6; aA < mP; aA++) {
						for (var gz = aA, wL = fD[gz], wM = 1, eq = bJ.wN(fE[wL] - wG[1], fF[wL] - wH[1]), et = 2; et < wB; et++) {
							var wO = bJ.wN(fE[wL] - wG[et], fF[wL] - wH[et]);
							wO < eq && (eq = wO, wM = et)
						}
						var wP = eY[gz];
						if (wM !== wP) {
							if (2 === dw && 4 <= wB) {
								var wQ = Math.max((wM + 1) % wB, 1),
									wR = bJ.wN(fE[wL] - wG[wQ], fF[wL] - wH[wQ]);
								for (et = 1; et < wB; et++) wO = bJ.wN(fE[wL] - wG[et], fF[wL] - wH[et]), eq < wO && wO < wR && (wR = wO, wQ = et);
								wQ !== wP && bJ.wN(wG[wP] - wG[wQ], wH[wP] - wH[wQ]) < bJ.wN(wG[wP] - wG[wM], wH[wP] - wH[wM]) && (wM = wQ)
							}
							var wS = kB[wM],
								wT = wJ[wS] + (aC.gv ? 0 : wK[wS]),
								vh = wI[wT],
								wU = fD[vh],
								wV = wJ[wS + 1];
							eq = bJ.wN(fE[wU] - wG[wP], fF[wU] - wH[wP]);
							for (var ev = wT + 1; ev < wV; ev++) {
								var wW = wI[ev],
									wX = fD[wW];
								(wO = bJ.wN(fE[wX] - wG[wP], fF[wX] - wH[wP])) < eq && (eq = wO, vh = wW)
							}
							vh < j6 || mP <= vh || (wU = fD[vh], wE[wP] += fE[wU] - fE[wL], wF[wP] += fF[wU] - fF[wL], wE[wM] += fE[wL] - fE[wU], wF[wM] += fF[wL] - fF[wU], g2 = data.teamPlayerCount[kB[wP]], wG[wP] = bJ.dj(wE[wP], g2),
								wH[wP] = bJ.dj(wF[wP], g2), g2 = data.teamPlayerCount[wS], wG[wM] = bJ.dj(wE[wM], g2), wH[wM] = bJ.dj(wF[wM], g2), fD[gz] = wU, fD[vh] = wL)
						}
					}! function() {
						for (var fD = bM.fD, iO = af.iO, iQ = af.iQ, iP = af.iP, iR = af.iR, gN = af.gN, wZ = af.wZ, gF = af.gF, gG = af.gG, f0 = af.f0, aA = 0; aA < 512; aA++) {
							var wa = fD[aA];
							if (wa !== aA) {
								wb(iO, aA, wa), wb(iQ, aA, wa), wb(iP, aA, wa), wb(iR, aA, wa), wb(gN, aA, wa), wb(wZ, aA, wa), wb(gF, aA, wa), wb(gG, aA, wa), wb(f0, aA, wa), wc(aA), wc(wa), fD[aA] = aA;
								for (var j = wa, g8 = fD[j]; g8 !== aA;) g8 = fD[j = g8];
								fD[j] = wa
							}
						}
					}()
			}
		}) : function() {
			var w5 = aC.w5;
			for (vz = w5; vz < aC.eX; vz++) w1();
			for (vz = aC.gv ? aC.jp : 0; vz < w5; vz++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w7 = spawningData[2 * vz] + 1,
							spawningData = spawningData[2 * vz + 1] + 1;
						if (3 < w7 && w7 < bQ.el - 5 && 3 < spawningData && spawningData < bQ.em - 5 && ab.eV(ab.wd(w7, spawningData)) && wi(w7 + 3, spawningData + 3)) return w9(w7 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w6()) {
						for (var eu = aC.wA = vz; eu < w5; eu++) vz = eu, w1();
						return
					}
					var w7 = vw + rL * vv + bJ.dj(vv, 2),
						w8 = vx + rM * vv + bJ.dj(vv, 2);
					w9(w7, w8)
				}
		})(), bb.lb[7] = af.gN[aC.eK]
	}, this.wu = function(j0, wv, ww) {
		var aA, w7, w8, g7, rL, rM;
		for (vz = j0, aA = 0; aA < 20; aA++)
			for (w7 = wv + aA; wv - aA <= w7; w7--)
				for (w8 = ww + aA; ww - aA <= w8; w8--)
					if ((w7 === wv + aA || w7 === wv - aA || w8 === ww + aA || w8 === ww - aA) && 3 < w7 && w7 < bQ.el - 5 && 3 < w8 && w8 < bQ.em - 5 && ab.eV(ab.wd(w7, w8)) && wi(w7 + 3, w8 + 3)) {
						if (0 < af.gN[vz]) {
							for (rM = rL = g7 = void 0, rL = af.iP[vz]; rL >= af.iO[vz]; rL--)
								for (rM = af.iR[vz]; rM >= af.iQ[vz]; rM--) g7 = 4 * (rM * bQ.el + rL), ab.wy(vz, g7) && (ab.wz(g7), af.gN[vz]--);
							w1()
						}
						return wo(w7 - 1, w8 - 1), !0
					} return !1
	}, this.x0 = function(j0) {
		vz = j0, w6() ? w9(vw + rL * vv + bJ.dj(vv, 2), vx + rM * vv + bJ.dj(vv, 2)) : w1()
	}
}

function x1() {
	aq.x2(), tj.setTransform(iB, 0, 0, iB, 0, 0), tj.imageSmoothingEnabled = iB < 3, tj.drawImage(bQ.vW, aR.x3(), aR.x4()), bN.x5.ti(), tj.drawImage(x6, aR.x3(), aR.x4()), aq.ti(), bL.ti(), ae.ti(), (aC.mA ? (bf.ti(), bA) : (aM.ti(), aU.ti(), aQ
	.ti(), bA.ti(), au.ti(), aV.ti(), aR.ti(), aP.ti(), bf.ti(), aT.ti(), aO.ti(), aL.ti(), aK.ti(), aW.ti(), bc.ti(), at)).ti(), s.ti()
}

function x7(x8, i, j) {
	x8.clearRect(0, 0, i, j), x8.fillStyle = b9.me, x8.fillRect(0, 0, i, j)
}

function x9(x8, i, j, xA) {
	x8.fillStyle = b9.mh, x8.fillRect(0, 0, i, xA), x8.fillRect(0, 0, xA, j), x8.fillRect(i - xA, 0, xA, j), x8.fillRect(0, j - xA, i, xA)
}

function xB(x8, eh, ej, hR, xA, g7, xC) {
	x8.fillStyle = b9.mh;
	var g7 = Math.floor(hR * g7),
		ry = (g7 += (g7 - xA) % 2, Math.floor((g7 - xA) / 2)),
		hR = Math.floor((hR - g7) / 2);
	x8.fillRect(eh + hR, ej + hR + ry, g7, xA), xC && x8.fillRect(eh + hR + ry, ej + hR, xA, g7)
}

function xE() {
	this.dU = function() {
		8 === aC.k6 && aM.xF()
	}, this.xG = function(xH) {
		var elo = aC.data.elo,
			hj = (elo[xH] - elo[1 - xH]) / 10,
			hj = 8 / (1 + Math.pow(2, hj / 32)),
			hj = Math.floor(10 * hj + .5),
			xJ = this.xK(elo[xH] + (1 + aC.xL) * hj + 1),
			elo = this.xK(elo[1 - xH] - hj);
		0 === xH ? aM.xN(xJ, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xN(elo, xJ, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xK = function(elo) {
		return 16e3 === (elo = bJ.p9(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qr = new xO, this.vZ = new xP
}

function xP() {
	this.hH = !1;
	this.xT = [], this.xU = 100;
	var m7, m8, gap, hR, xQ, xS, xV = 0,
		xW = new Array(9),
		xX = [],
		xY = [],
		xZ = 0,
		xa = 0,
		xb = 0,
		xc = 0;

	function xo() {
		xW.sort(function(et, eu) {
			return eu.ju - et.ju
		});
		for (var pI = "" + xW[0].oE, aA = 1; aA < 9; aA++) pI += "," + xW[aA].oE;
		for (aA = 0; aA < 9; aA++) pI += "," + xW[aA].ju;
		bh.e7.uC(120, pI)
	}
	this.dU = function() {
		for (var xd = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xd.length; aA++) {
			var color = 6 === xd[aA] ? b9.n7 : b9.mf;
			this.xT.push(b8.canvas.xe(aa.get(3), xd[aA], color))
		}
		for (aA = 0; aA < ai.qr.xf; aA++) xY.push(ai.qr.xg - ai.qr.xf + aA);
		for (aA = 0; aA < ai.qr.xh; aA++) xY.push(ai.qr.xi + aA);
		var xj = ai.qr.xk(bI.xj);
		for (aA = 0; aA < xj.length; aA++) xY.push(xj[aA]);
		! function() {
			var aA, g = bh.e7.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xW[aA] = {
					oE: 1015 + aA,
					ju: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f2 = parseInt(g[aA]),
						ev = (f2 = 0 <= f2 && f2 < ai.qr.xg ? f2 : 0, parseInt(g[aA + 9]));
					ev = 0 <= ev && ev < 1e3 ? ev : 0, xW[aA] = {
						oE: f2,
						ju: ev
					}
				}
		}()
	}, this.show = function(ks, kt, xp) {
		var aA;
		if (xZ = ks, xa = kt, xV = xp || 0, this.hH = !0, xX = [], 0 === xV)
			for (aA = 0; aA < 9; aA++) xX.push(xW[aA].oE);
		else {
			var eu = 49 * xV,
				xp = eu - 49;
			for (xp >= xY.length && (xV = 1, xp = 0, eu = 49), aA = xp = (eu = Math.min(eu, xY.length)) - 49; aA < eu; aA++) xX.push(xY[aA])
		}
		xX.push(1024);
		xp = xX.length, hR = Math.floor((z.a0.qz() ? .075 : .0468) * h.pd), gap = Math.floor(hR / 3), (xb = 10 * (xQ = hR + gap)) > h.i && (xb = h.i, gap = (xQ = xb / 10) - (hR = 3 * xQ / 4)), xS = bJ.dj(xp, 10) + !!(xp % 10), (xc = xS * xQ) > h
			.j && (xc = h.j, gap = (xQ = xc / xS) - (hR = 3 * xQ / 4)), xp = .5 * gap;
		m7 = Math.min(Math.max(ks - .5 * xb + xp, xp), h.i - xb + xp), m8 = Math.min(Math.max(kt - .5 * xc + xp, xp), h.j - xc + xp)
	}, this.gn = function(ks, kt, player) {
		if (!this.hH) return !1;
		if (this.xr(ks, kt)) {
			ks = bJ.p9(bJ.dj(ks - m7 + .5 * gap, xQ), 0, 9);
			if ((ks += 10 * bJ.p9(bJ.dj(kt - m8 + .5 * gap, xQ), 0, 9)) >= xX.length) return aK.qs(), !0;
			kt = xX[ks];
			if (1024 === kt) return this.show(xZ, xa, xV + 1), !0;
			! function(oE) {
				for (var aA = 0; aA < 9; aA++) xW[aA].ju = Math.floor(.99 * xW[aA].ju);
				for (aA = 0; aA < 9; aA++)
					if (oE === xW[aA].oE) return xW[aA].ju = Math.min(xW[aA].ju + 30, 999), xo();
				xW.splice(5, 0, {
					oE: oE,
					ju: Math.max(xW[4].ju, 30)
				}), xW.pop(), xo()
			}(kt), player === aC.eK ? b6.gw.oD(kt) : b6.fv.oR(kt, player)
		}
		return aK.qs(), !0
	}, this.xr = function(ks, kt) {
		return !(ks < m7 - .5 * gap || kt < m8 - .5 * gap || m7 + xb - .5 * gap <= ks || m8 + xc - .5 * gap <= kt)
	}, this.ti = function() {
		tj.fillStyle = b9.me, tj.fillRect(m7 - .5 * gap, m8 - .5 * gap, xb, xc);
		for (var hN = .5 * ba.xs, ea = (tj.lineWidth = ba.xs, tj.strokeStyle = tj.fillStyle = b9.mh, tj.strokeRect(m7 - .5 * gap + hN, m8 - .5 * gap + hN, xb - 2 * hN, xc - 2 * hN), tj.imageSmoothingEnabled = !0, xX.length), aA = 0; aA <
			ea; aA++) this.xt(xX[aA], tj, m7 + aA % 10 * xQ, m8 + bJ.dj(aA, 10) * xQ, hR);
		tj.imageSmoothingEnabled = !1
	}, this.xt = function(oE, hX, eh, ej, hR) {
		var eE;
		oE >= 1024 - ai.qr.xf ? (eE = hR / this.xU, hX.setTransform(eE, 0, 0, eE, eh, ej), hX.drawImage(this.xT[oE - 1024 + ai.qr.xf], 0, 0), hX.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pb.textAlign(hX, 1), b8.pb.textBaseline(hX, 1), hX.font = b8.pb
			.rQ(0, .89 * hR), hX.fillText(ai.qr.xu(oE), eh + .5 * hR, ej + (.35 - b8.pb.xv + .56) * hR))
	}
}

function xO() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xf = 13, this.xh = this.emojis.length, this.xi = 676, this.xg = 1024, this.xw = this.emojis.indexOf("💀"), this.xx = this.xw + 1, this.xy = this.emojis.indexOf("🥇"), this.xz = this.emojis.indexOf("😊"), this.xu = function(f2) {
		return f2 < this.xi ? String.fromCharCode(55356, 56806 + bJ.dj(f2, 26), 55356, 56806 + f2 % 26) : this.emojis[Math.min(f2 - this.xi, this.xh - 1)]
	}, this.xk = function(pI) {
		for (var ea = pI.length - 2, g = [], aA = 0; aA < ea; aA++) {
			var hf = pI.charCodeAt(aA) - 56806,
				hg = pI.charCodeAt(aA + 2) - 56806;
			0 <= hf && hf < 26 && 0 <= hg && hg < 26 && (g.push(26 * hf + hg), aA += 3)
		}
		return g
	}, this.y0 = function(f2) {
		return f2 < this.xi
	}, this.y1 = function(f2) {
		return f2 >= 1024 - this.xf
	}, this.y2 = function(f2) {
		return f2 >= this.xi && f2 < this.xi + this.xx
	}
}

function by() {
	this.rt = new y3, this.ux = new y4, this.uz = new y5, this.dU = function() {
		this.rt.dU()
	}
}

function y4() {
	this.vC = function(pI) {
		for (var ea = pI.length, i = bB, aA = 0; aA < ea; aA++) i.a7(16, pI.charCodeAt(aA))
	}
}

function y3() {
	var y6 = new Uint8Array(64);
	this.dU = function() {
		var aA;
		for (y6[0] = 45, y6[37] = 95, aA = 0; aA < 10; aA++) y6[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y6[aA + 11] = 65 + aA, y6[aA + 38] = 97 + aA
	}, this.rv = function(y7) {
		for (var v2 = bF, vA = new Uint8Array(y7), aA = 0; aA < y7; aA++) vA[aA] = v2.oc(6);
		return vA
	}, this.ru = function(vA) {
		for (var ea = vA.length, y8 = y6, g = [], aA = 0; aA < ea; aA++) g.push(String.fromCharCode(y8[vA[aA]]));
		return g.join("")
	}, this.y9 = function(value, yA) {
		for (var y8 = y6, g = [], aA = 0; aA < yA; aA++) g.push(String.fromCharCode(y8[value >> 6 * (yA - 1 - aA) & 63]));
		return g.join("")
	}
}

function c6() {
	var yB, yC, yD;
	yB = [32, 65, 191, 913, 931], yC = [64, 127, 688, 930, 1155], yD = new Array(yB.length + 1);
	for (var aA = 0; aA < yD.length; aA++) {
		yD[aA] = 0;
		for (var et = aA - 1; 0 <= et; et--) yD[aA] += yC[et] - yB[et]
	}

	function yJ(ev) {
		for (var aA = yB.length - 1; 0 <= aA; aA--)
			if (ev >= yB[aA] && ev < yC[aA]) return aA;
		return -1
	}
	this.v3 = function(pI) {
		return 0 !== (pI = pI.trim()).indexOf("Bot ") && 0 !== pI.indexOf("[Bot] ") && function(pI, yG, yH) {
			var ea = (pI = pI.trim()).length;
			if (ea < yG || yH < ea) return !1;
			for (var ev, yI = 0, aA = 0; aA < ea; aA++)
				if (ev = pI.charCodeAt(aA), yI += 65 <= ev && ev <= 90 || 1040 <= ev && ev <= 1071 ? 1 : 0, -1 === yJ(ev)) return !1;
			if (3 < yI && yI > Math.floor(ea / 2)) return !1;
			return !0
		}(pI, 3, 20)
	}, this.yK = function(pI) {
		for (var ea = (pI = pI.trim()).length, g = [], aA = 0; aA < ea; aA++) {
			var ev, g7 = yJ(ev = pI.charCodeAt(aA));
			g.push(yD[g7] + ev - yB[g7])
		}
		return g
	}, this.vH = function(g) {
		for (var ev, eu, pI = "", ea = g.length, aA = 0; aA < ea; aA++)
			for (eu = 1; eu < yD.length; eu++)
				if (g[aA] < yD[eu]) {
					ev = yB[eu - 1] + g[aA] - yD[eu - 1], pI += String.fromCharCode(ev);
					break
				} return pI
	}, this.yL = function(pI) {
		for (var g = this.yK(pI), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yM = function(pI) {
		for (var g = new Array(Math.floor(pI.length / 3)), aA = 0; aA < pI.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pI.substring(aA, aA + 3));
		return this.vH(g)
	}, this.yN = function(pI) {
		for (var f2, g = [pI.length], aA = 0; aA < pI.length; aA++) g[aA] = pI.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pI.length; aA++) aA === pI.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f2 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f2 + (f2 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yO = function(pI) {
		for (var ev, result = "", aA = 0; aA < pI.length; aA++) 48 <= (ev = pI.charCodeAt(aA)) && ev < 58 ? result += String.fromCharCode(ev) : 65 <= ev && ev < 75 ? result += "0" + (ev - 65).toString() : 75 <= ev && ev < 91 ? result += (ev - 65)
			.toString() : 97 <= ev && ev < 123 && (result += (ev - 71).toString());
		return result
	}, this.yP = function(pI) {
		for (var ea = pI.length, g = [], aA = 0; aA < ea; aA++)(ev = pI.charCodeAt(aA)) < 58 ? g.push(pI[aA]) : (ev -= ev < 91 ? 65 : 71, g.push(String(bJ.dj(ev, 10))), g.push(String(ev - 10 * bJ.dj(ev, 10))));
		var ea = g.length - 2,
			ev = 0,
			vA = [];
		for (aA = 0; aA < ea; aA += 3) vA[ev++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return vA
	}, this.yQ = function() {
		for (var dw, yR = "", aA = 0; aA < 6; aA++) dw = 48 + aw.random() % 36, dw += 58 <= dw ? 39 : 0, yR += String.fromCharCode(dw);
		return yR
	}
}

function y5() {
	this.yK = function(pI, vr, yS) {
		for (var yT = [], ea = pI.length, max = 0, aA = 0; aA < ea; aA++) {
			var f2 = pI.charCodeAt(aA);
			yT.push(f2), max = Math.max(max, f2)
		}
		var vs = max < 128 ? 7 : 16;
		for (yS.a7(vr, ea), yS.a7(1, +(16 == vs)), aA = 0; aA < ea; aA++) yS.a7(vs, yT[aA])
	}
}

function d4() {
	this.yU = new yV, this.result = new yW, this.h3 = new yX, this.yY = new yZ, this.ya = new yb, this.yc = new yd, this.dU = function() {
		this.result.dU()
	}
}

function yX() {
	this.ye = function() {
		for (var ea = ak.jq, yf = ak.jr, yg = [], aA = 0; aA < ea; aA++) {
			var g7 = yf[aA];
			b8.fv.yh(g7) && yg.push(g7)
		}
		return yg
	}, this.yi = function() {
		if (0 === be.kB[aC.yj]) return this.yk();
		bf.l2(aC.yj);
		for (var yg = [], ea = bM.f5[0], fD = bM.fD, aA = 0; aA < ea; aA++) {
			var g7 = fD[aA];
			b8.fv.yh(g7) && yg.push(g7)
		}
		return yg
	}, this.yk = function() {
		var g7 = l4[0];
		return b8.fv.yh(g7) ? [g7] : []
	}, this.yl = function(yg) {
		for (var ea = yg.length, di = 0, gN = af.gN, aA = 0; aA < ea; aA++) di += gN[yg[aA]];
		return di
	}
}

function yV() {
	function yn() {
		if (2 === aC.yr) return 1;
		au.ys(), aC.yr = 2, aC.yt = aC.yu
	}

	function yp() {
		bP.ya.yv(), aW.show(1 === aC.yw, !1, 2 === aC.yw), bP.result.yv(), bP.yc.ij(), bP.yY.ij(), aM.yx(!0), aM.yy(247), aM.yy(956), aM.yy(957), aU.lR(!0), aV.lR(!0), au.lR(), bA.yz(), aC.gj && bd.z0.z1(), bd.dc = !0, bZ.z2(), z.a0.setState(0)
	}
	this.ym = function() {
		yn() || (aC.yo = 2, yp())
	}, this.yq = function() {
		yn() || (aC.yo = 1, yp())
	}
}

function yZ() {
	this.ij = function() {
		var zB;
		2 === aC.yo ? (aM.z3(0, 59), aG.mG(2700)) : aC.k6 < 7 ? (zB = be.kB[aC.yj], zB = be.zD[zB], aP.zE(L(24, [zB]), 2, 1, 12), aM.zF(0, L(25, [zB]), 40, 0, b9.mh, b9.me, -1, !1), aG.mG(2700)) : 8 === aC.k6 ? (aC.yw ? aM.z3(aC.z8, 2) : aM.z3(
			1 - aC.eK, 3), aC.z9.xG(aC.z8), aM.zA(aC.z8), aG.m1(aC.z8, 2700, !1, 0)) : 9 === aC.k6 ? (aM.zG(), aG.mG(2700)) : (aM.zA(aC.z8), aG.m1(aC.z8, 2700, !1, 0))
	}
}

function yd() {
	function zQ() {
		var sF = Math.floor(af.zR[aC.eK] / 50);
		return Math.min(sF, 400) / 100
	}

	function zI() {
		var sF = zQ();
		0 !== sF && aM.zF(440, L(26, [sF.toFixed(2)]), 40, 0, b9.mz, b9.me, -1, !1)
	}
	this.ij = function() {
		if (0 === bP.result.zH || 0 === bP.result.yg.length) b8.fv.gm(aC.eK) && zI();
		else {
			var zJ = function() {
				aM.zF(520, L(27), 40, 0, b9.mh, b9.me, -1, !1);
				for (var yg = bP.result.yg, ea = yg.length, gN = af.gN, g = [], aA = 0; aA < ea; aA++) {
					var g7 = yg[aA];
					g.push({
						g7: g7,
						di: gN[g7]
					})
				}
				g.sort((et, eu) => eu.di - et.di);
				var zD = af.zS,
					di = bP.result.zT,
					sF = bP.result.zH,
					pI = "",
					zJ = 0;
				for (aA = 0; aA < ea; aA++) {
					var hF = g[aA].di * sF / (100 * di),
						zV = zD[g[aA].g7] + ": " + hF.toFixed(2) + "   ";
					g[aA].g7 === aC.eK && (zJ = hF), 2 < aA && 4 !== ea ? 3 === aA && (pI += "(" + L(28, [ea - 3]) + ")") : pI += zV
				}
				aM.zF(560, b8.zW.zX(pI), 40, 0, b9.mz, b9.me, -1, !1), zJ ? aM.zF(580, L(29, [zJ.toFixed(2) + " + " + zQ().toFixed(2)]), 40, 0, b9.mz, b9.me, -1, !1) : b8.fv.gm(aC.eK) && zI();
				return zJ
			}();
			if (! function(zJ) {
					7 !== aC.k6 && 10 !== aC.k6 || 0 !== aC.yw && aM.zF(600, L(30, [zJ.toFixed(2)]), 40, 0, b9.mh, b9.me, -1, !1)
				}(zJ), !(2 === aC.yo || 7 <= aC.k6)) {
				var yg = bP.result.yg,
					ea = yg.length,
					zY = af.zY,
					gN = af.gN,
					zZ = [];
				loop: for (var aA = 0; aA < ea; aA++) {
					var g7 = yg[aA],
						za = b8.zW.zb(zY[g7]);
					if (null !== za) {
						for (var zc = gN[g7], eu = zZ.length - 1; 0 <= eu; eu--)
							if (za === zZ[eu].name) {
								zZ[eu].di += zc, zZ[eu].g.push({
									g7: g7,
									di: zc
								});
								continue loop
							} zZ.push({
							name: za,
							di: zc,
							g: [{
								g7: g7,
								di: zc
							}]
						})
					}
				}
				if (0 !== zZ.length) {
					zZ.sort((et, eu) => eu.di - et.di);
					var g = zZ[0].g,
						zJ = (g.sort((et, eu) => eu.di - et.di), "[" + zZ[0].name + "]"),
						sF = bP.result.zH,
						ze = 512 * sF / 26214400,
						kX = (aM.zF(0, L(31, [zJ, ze.toFixed(4)]), 40, 0, b9.mh, b9.me, -1, !1), g.length),
						di = bP.result.zT,
						v8 = zZ[0].di,
						zf = 1e4 * ze;
					for (aA = 0; aA < kX; aA++)
						if (g[aA].g7 === aC.eK) {
							aM.zF(600, L(32, [(zf * g[aA].di / (10 * v8)).toFixed(2)]), 40, 0, b9.mh, b9.me, -1, !1), aM.zF(600, L(33), 40, 0, b9.mh, b9.me, -1, !1);
							break
						} ze = (v8 * sF / (1e3 * di)).toFixed(2);
					aM.zF(680, L(34, [zJ, ze]), 40, 0, b9.mh, b9.me, -1, !1), aC.gj || aM.zF(720, L(35) + bI.zh, 736, 0, b9.mh, b9.n5, -1, !1)
				}
			}
		}
	}, this.zN = function() {
		var zO, va;
		aC.k8 || (zO = af, va = aC.eK, 0 === zO.zP[va]) || zO.it[va] < 1 || 2 * zO.ox[va] > 3 * (zO.is[va] + zO.it[va]) || zI()
	}
}

function yW() {
	this.dU = function() {
		this.zi = 0, this.yg = [], this.zT = 0, this.zH = 0
	}, this.yv = function() {
		var rD;
		aC.k8 || (rD = this, 2 === aC.yo ? rD.yg = bP.h3.ye() : aC.hP ? rD.yg = bP.h3.yi() : rD.yg = bP.h3.yk(), rD.zi = bg.zk.zl(), rD.zT = Math.max(1, bP.h3.yl(rD.yg)), b6.fv.oa(), 8 === aC.k6 ? bP.result.zH = 0 : rD.zH = 100 * bP.result.zi * (
			1 + aC.xL))
	}
}

function yb() {
	this.yv = function() {
		if (2 === aC.yo) aC.yw = 2;
		else {
			if (8 === aC.k6) b8.fv.jD(0) || 0 === af.lf[0] ? aC.z8 = 1 : b8.fv.jD(1) || 0 === af.lf[1] ? aC.z8 = 0 : aC.z8 = +(af.gN[1] > af.gN[0]);
			else {
				if (aC.hP) {
					var l0 = bf.zo();
					if (aC.yj = l0, be.kB[l0]) return void(aC.yw = +(be.eY[aC.eK] === l0))
				}
				aC.z8 = l4[0]
			}
			aC.yw = +(aC.z8 === aC.eK)
		}
	}
}

function d9() {
	this.id = 0, this.dk = 0, this.uJ = null, this.uK = null, this.uL = null, this.uR = null, this.a0 = new zp, this.dU = function() {
		var self, dk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dk = Android.getVersion()) < 12 || (self.dk = dk, self.id = 1, self.uK = Android),
			function(self) {
				var dk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uL = mwIOSdataX, self.uR = window.webkit.messageHandlers.iosCommandA, dk = self
					.uL.version, self.dk = dk ? Number(dk) : 0)
			}(this),
			function(self) {
				var uJ;
				if (0 === self.id) {
					try {
						if (!(uJ = window.localStorage)) return;
						uJ.setItem("tls7", "1"), uJ.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uJ = uJ
				}
			}(this)
	}
}

function zp() {
	this.zt = function() {
		bh.r3.ue(), bh.r3.uf(), ay.x.close(0, 3255), 0 === z.id ? z.uJ && z.uJ.clear() : 1 === z.id ? z.uK.saveString(199, "") : 2 === z.id && z.uR.postMessage("clear")
	}, this.zu = function() {
		2 === z.id ? z.uR.postMessage("showConsentForm") : 1 === z.id && z.uK.setState(7)
	}, this.zv = function() {
		this.setState(14)
	}, this.qz = function() {
		return 1 === bh.e7.uE(2)
	}, this.zw = function() {
		bh.e7.uC(102, "")
	}, this.setState = function(zx) {
		1 === z.id && 5 <= z.dk && z.uK.setState(zx)
	}, this.a1 = function() {
		var zy;
		1 === z.id && 7 <= z.dk ? z.uK.setState(5) : ((zy = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zy.toString())
	}, this.dZ = function() {
		1 !== z.id || z.dk < 17 || z.uK.saveString(23, document.documentElement.outerHTML)
	}, this.e5 = function() {
		0 !== z.id && (1 === z.id ? z.uK.prepareAd("1688441405") : 2 === z.id && (0 === z.dk ? z.uR.postMessage("prepare ad 1770251391") : z.uR.postMessage("loadAds 1770251391")))
	}, this.eA = function(di) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.dk ? z.uR.postMessage("show ad " + di) : z.uR.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.dk < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.zz + "' target='_blank'>" + bI
			.zz + "</a>", !0, [new v("⬅️ " + L(36), function() {
				s.t(0)
			}, b9.nM)]))
	}
}

function dO() {
	function a02(e) {
		a0D(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(36), function() {
				s.a0E()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n4)]))
	}

	function a0C(e) {
		a0D(e), s.t(4, 5, new u(L(37), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a06(e), !0))
	}

	function a06(e) {
		var pI = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pI : 4527 === e ? "Player already in lobby" + pI : 4530 === e ? "Lobby Timeout" + pI : 4528 === e ? "Lobby Kick: Another login detected." + pI : 4540 === e ?
			"You have been kicked." + pI : "Unknown error" + pI
	}

	function a0D(e) {
		a05(e), s.x.y()
	}

	function a05(e) {
		var zx = aZ.a04();
		6 === zx ? ay.x.a0G(e) : bl.a08 ? (s.w(), bl.tC(), ay.x.close(ay.x.a09, 3256)) : 8 === zx && aC.a0H(!0)
	}
	this.a00 = function(a01, e) {
		a01 === 1 && __fx.customLobby.isActive() && aZ.a04() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rq && 0 === a01)
			if (4211 === e) a02(e);
			else {
				if (4480 === e) return bh.r3.ug(), void s.t(4, 0, new u(L(39), L(40), !0));
				8 !== aZ.a04() && a05(), s.t(4, 0, new u(L(37), a06(e), !0))
			}
		else {
			var zx = aZ.a04();
			if (6 === zx) {
				if (4211 === e) return void a02(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a07(a01)
			} else {
				if (!bl.a08) return 8 === zx ? void(a01 !== ay.x.a0A || aC.k8 || 1 !== aC.yr || aC.gj || aM.a0B(L(38, [e]))) : void 0;
				if (a01 !== ay.x.a09) return
			}
			a0C(e)
		}
	}, this.a0F = function(e) {
		8 === aZ.a04() ? aC.k8 || 1 !== aC.yr || aM.a0B(L(38, [e])) : a0C(e)
	}, this.r = function() {
		a0D(3268)
	}
}

function cy() {
	var a0I, a0J, a0K = -15e3,
		a0L = !1;

	function gn(e) {
		a0f() || (a0L = !0, a0g(e, 1), ay.x.a0h(ay.x.a0A), a0i(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0U(e) {
		a0K = bd.e9, a0g(e, 1), ay.x.a0h(ay.x.a0A), 0 < e.touches.length && (a0I = Math.floor(h.k * e.touches[0].clientX), a0J = Math.floor(h.k * e.touches[0].clientY), ar.a0U(e) || a0i(a0I, a0J))
	}

	function a0i(eh, ej) {
		s.gn(eh, ej), 0 === aC.yr ? aZ.gn(eh, ej) : bA.a0j(eh, ej) || bc.gn(eh, ej) || aW.gn(eh, ej) || aK.a0k(eh, ej) || aO.gn(eh, ej) || 0 <= aL.gn(eh, ej) || au.gn(eh, ej) || bH.a0l(eh, ej) || aK.a0m(eh, ej)
	}

	function a0Q(e) {
		a0f() || (a0L = !0, a0g(e, 1), a0n(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0V(e) {
		a0K = bd.e9, a0g(e, 1), 0 < e.touches.length && (a0I = Math.floor(h.k * e.touches[0].clientX), a0J = Math.floor(h.k * e.touches[0].clientY), ar.a0V(e) || a0n(a0I, a0J))
	}

	function a0n(eh, ej) {
		s.a0Q(eh, ej), 0 === aC.yr ? aZ.a0Q(eh, ej) : (bR.gg(eh, ej), bc.a0Q(eh, ej) || (aL.a0Q(eh, ej), aK.hH() ? aK.a0Q(eh, ej) : aQ.go ? aQ.a0Q(eh) && (bd.dc = !0) : (aU.a0Q(eh, ej), aR.mC && aR.a0Q(eh, ej) && (bd.dc = !0))))
	}

	function a0S(e) {
		a0f() || (a0g(e, 1), a0o(), 0 === aC.yr ? (aZ.click(-1024, -1024), aS.qb()) : (aU.a0p(-1024, -1024), aL.a0Q(-1024, -1024), aQ.a0q(), aR.mC = !1))
	}

	function a0R(e) {
		a0f() || (a0g(e, 1), a0r(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0O && (bH.a0O = !1, e.preventDefault()))
	}

	function click(e) {
		a0f() || a0g(e, 1)
	}

	function a0W(e) {
		a0K = bd.e9, a0g(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.yr ? aR.mC = !1 : ar.a0s() || (a0r(a0I, a0J, !1), bH.a0O && (bH.a0O = !1, e.preventDefault()))
	}

	function a0X(e) {
		a0K = bd.e9, a0g(e, 1), a0r(a0I, a0J, !1), bH.a0O && (bH.a0O = !1, e.preventDefault())
	}

	function a0Y(e) {}

	function a0Z(e) {}

	function a0a(e) {
		a0f() || a0g(e, 0)
	}

	function a0r(eh, ej, a0t) {
		a0o(), 0 === aC.yr ? aZ.click(eh, ej) : (aU.a0p(eh, ej), bc.a0p(), aQ.a0q(), aR.mC = !1, aK.click(eh, ej, a0t) ? bd.dc = !0 : aL.a0R(eh, ej))
	}

	function a0o() {
		s.a0o()
	}

	function a0T(e) {
		var eh, ej, deltaY;
		a0f() || (a0g(e, 1), ay.x.a0h(ay.x.a0A), eh = Math.floor(h.k * e.clientX), ej = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0T(eh, ej, deltaY), 0 === aC.yr ? aZ.a0T(eh, ej, deltaY) : aU.a0T(eh, ej,
			deltaY) || (aQ.a0u(eh, ej) ? aQ.a0T(deltaY) && (bd.dc = !0) : aR.a0T(eh, ej, deltaY)))
	}

	function a0b(e) {
		a0g(e, 0)
	}

	function a0g(e, id) {
		0 === id && s.hH() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.a04() && e.preventDefault()
	}

	function a0c(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0f() || 0 < h.rY || (e = e.code) && e.length && (bV.ev(e, 18) ? ap.a0w(3) : bV.ev(e, 22) ? ap.a0w(0) : bV.ev(e, 20) ? ap.a0w(1) : bV.ev(e, 24) ? ap.a0w(2) : bV.ev(e, 10) ? aQ.a0x(31 / 32) : bV.ev(e, 8) ? aQ.a0x(32 / 31) : bV.ev(e, 6) ? aQ
			.a0x(7 / 8) : bV.ev(e, 4) ? aQ.a0x(8 / 7) : bV.ev(e, 14) ? 0 !== aC.yr && aR.a0T(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.ev(e, 16) ? 0 !== aC.yr && aR.a0T(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.ev(e, 0) ? aC
			.yr && bR.gh(!1) : bV.ev(e, 2) ? aC.yr && bR.gh(!0) : bV.ev(e, 26) ? aC.yr && bR.hB() : bV.ev(e, 28) && aC.yr && bR.hG())
	}

	function a0d(e) {
		if (!a0f() && !(0 < h.rY || bd.e9 < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0y(1) || "Space" === code && s.a0y(0))) return bl.a08 ? bl.tI.a0y(code) ? void 0 : void("Escape" === code && bH.f3()) : void(8 !== aZ.a04() && aZ.a0y(e) ? bd.dc = !0 : "Escape" ===
				code ? bH.f3() : bV.ev(code, 18) ? ap.a0z(3) : bV.ev(code, 22) ? ap.a0z(0) : bV.ev(code, 20) ? ap.a0z(1) : bV.ev(code, 24) ? ap.a0z(2) : bV.ev(code, 12) ? bA.a10(!aC.mA) : "Space" === code && aC.yr && (aL.gk && aL.a11(), aC
					.gj) && bA.a12(!1))
		}
	}

	function a0e() {
		"hidden" === document.visibilityState ? 1 === aC.yr && (aC.gj ? bA.a13() : !aC.k8 || aL.gk || aC.gv || aL.a11()) : bd.dc = !0
	}

	function a0f() {
		return a0K + 15e3 > bd.e9
	}

	function resize() {
		h.a15()
	}
	this.a0M = 0, this.a0N = "", this.a0O = !1, this.dU = function() {
		a0P.addEventListener("mousedown", gn, {
			passive: !1
		}), a0P.addEventListener("mousemove", a0Q, {
			passive: !1
		}), a0P.addEventListener("mouseup", a0R, {
			passive: !1
		}), a0P.addEventListener("click", click, {
			passive: !1
		}), a0P.addEventListener("mouseleave", a0S, {
			passive: !1
		}), a0P.addEventListener("wheel", a0T, {
			passive: !1
		}), a0P.addEventListener("touchstart", a0U, {
			passive: !1
		}), a0P.addEventListener("touchmove", a0V, {
			passive: !1
		}), a0P.addEventListener("touchend", a0W, {
			passive: !1
		}), a0P.addEventListener("touchcancel", a0X, {
			passive: !1
		}), a0P.addEventListener("dragover", a0Y), a0P.addEventListener("drop", a0Z), a0P.addEventListener("dblclick", a0a), document.addEventListener("contextmenu", a0b), document.addEventListener("keydown", a0c), document.addEventListener(
			"keyup", a0d), document.addEventListener("visibilitychange", a0e), window.addEventListener("resize", resize)
	}, this.a0l = function(eh, ej) {
		return !!bA.gn(eh, ej) || !!(aU.gn(eh, ej) || aR.gn(eh, ej) || aQ.gn(eh, ej) || aM.gn(eh, ej))
	}, this.a14 = a0f, this.q4 = function() {
		return !a0L || 0 < a0K
	}, this.f3 = function() {
		if (!s.hH()) return 8 === aZ.a04() ? aC.mA ? void bA.a10(!1) : bc.hH ? void bc.a11() : void aL.a11() : void(7 !== aZ.a04() && 6 === aZ.a04() && aY.a16());
		s.a0y(2)
	}
}

function bu() {
	this.pb = new a17, this.pk = new a18, this.fv = new a19, this.zW = new a1A, this.x8 = new a1B, this.a1C = new a1D, this.canvas = new a1E, this.color = new a1F, this.a1G = new a1H, this.dU = function() {
		this.pb.ud()
	}
}

function a18() {
	this.vY = function(g) {
		g.fill(0)
	}, this.a1I = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++) g[aA] = []
	}, this.a1J = function(hf, a1K) {
		for (var hg = bM.fA, aA = 0; aA < 3; aA++) hg[aA] = a1K * hf[aA];
		return hg
	}, this.a1L = function(hf, hg, a1M) {
		for (var hj = 0, aA = 0; aA < 3; aA++) hj += Math.abs(hf[aA] - hg[aA]);
		return a1M <= hj
	}, this.a1N = function(hf, a1O) {
		for (var aA = 0; aA < 3; aA++) hf[aA] = bJ.p9(hf[aA] + a1O, 0, 255);
		return hf
	}, this.a1P = function(g, sB, sC) {
		sC = sC || g.length - 1;
		for (var a1Q = 0, aA = sB = sB || 0; aA <= sC; aA++) a1Q += g[aA];
		return a1Q
	}, this.a1R = function(g, a1S) {
		for (var aA, a1T, ea = g.length, a1U = [], et = ea - 1; 0 <= et; et--) {
			for (aA = a1T = 0; aA < ea; aA++) a1S(g[aA]) < a1S(g[a1T]) && (a1T = aA);
			ea--, a1U.push(g[a1T]), g[a1T] = g[ea], g.pop()
		}
		return a1U
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
	}, this.a1V = function(g, f2) {
		for (var ea = g.length, g2 = 0, aA = 0; aA < ea; aA++) g2 += g[aA] > f2;
		return g2
	}, this.a1W = function(a1X, a1Y, min) {
		for (var ea = a1Y[0], aA = ea - 1; 0 <= aA; aA--) a1X[aA] < min && (a1X[aA] = a1X[--ea]);
		a1Y[0] = ea
	}, this.a1Z = function(g, ea, value) {
		for (var aA = 0; aA < ea; aA++) g[aA] -= value
	}, this.a1a = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1b = function(pI, g, a1c) {
		g.fill(0);
		for (var sF = pI.split(","), ea = Math.min(sF.length, g.length), aA = 0; aA < ea; aA++) g[aA] = Math.min(parseInt(sF[aA]), a1c)
	}, this.a1d = function(pI, g, qY) {
		g.fill("");
		for (var sF = pI.split('"'), ea = Math.min(sF.length, 2 * g.length), hN = 0, aA = 1; aA < ea; aA += 2) g[hN++] = sF[aA].slice(0, qY)
	}, this.a1e = function(g, g2) {
		if (0 === g2) g.fill(0);
		else {
			var a1Q = this.a1P(g),
				ea = g.length;
			if (0 === a1Q) g.fill(bJ.dj(g2, ea));
			else
				for (var aA = 0; aA < ea; aA++) g[aA] = bJ.dj(g2 * g[aA], a1Q);
			if (0 === (a1Q = this.a1P(g))) g[1] = g2;
			else
				for (var hN = 0; a1Q++ < g2;) g[hN = (hN + 1) % ea] && g[hN]++
		}
	}, this.a1f = function(g) {
		if (!g) return 0;
		var ea = g.length;
		if (0 === ea) return 0;
		for (var f2 = g[ea - 1], aA = ea - 2; 0 <= aA; aA--)
			if (g[aA] !== f2) return aA + 2;
		return 1
	}, this.a1g = function(g) {
		for (var a1Q = 0, aA = 0; aA < g.length; aA++) a1Q += g[aA].length;
		return a1Q
	}, this.a1h = function(a1i) {
		for (var g = [], aA = 0; aA < a1i.length; aA++) g = g.concat(a1i[aA]);
		return g
	}
}

function a1E() {
	this.xe = function(a1j, dx, a1k) {
		var hR = a1j.height,
			a1l = b8.pb.vO(hR, hR),
			hX = b8.pb.getContext(a1l);
		return function(i, hX, a1k) {
			hX.fillStyle = a1k, hX.beginPath(), hX.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hX.fill()
		}(hR, hX, a1k), hX.drawImage(a1j, -dx * hR, 0), a1l
	}, this.a1n = function(a1o) {
		var hX, hU, hR = a1o.height;
		return a1o.width === hR && (hU = (hX = b8.pb.getContext(a1o, !0)).getImageData(0, 0, hR, hR), b8.a1C.a1p(hU.data, hR, hR, .9), hX.putImageData(hU, 0, 0)), a1o
	}
}

function a1F() {
	this.a1q = function(f2) {
		return [f2 >> 12 & 63, f2 >> 6 & 63, 63 & f2]
	}, this.a1r = function(f2) {
		for (var g = this.a1q(f2), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1s = function(f2) {
		f2 = this.a1r(f2);
		return b8.color.mZ(f2[0], f2[1], f2[2])
	}, this.a1t = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mZ = function(dw, sF, eu) {
		return "rgb(" + dw + "," + sF + "," + eu + ")"
	}, this.mb = function(dw, sF, eu, et) {
		return "rgba(" + dw + "," + sF + "," + eu + "," + et.toFixed(3) + ")"
	}, this.q6 = function(ev) {
		for (var g = ev.split("(")[1].split(","), f9 = bM.f9, aA = 0; aA < 3; aA++) f9[aA] = parseInt(g[aA]);
		return 4 === g.length ? f9[3] = 255 * parseFloat(g[3].slice(0, -1)) : f9[3] = 255, f9
	}, this.q7 = function(a1u, ed) {
		for (var g = a1u.slice(a1u.indexOf("(") + 1, a1u.indexOf(")")).split(","), f9 = bM.f9, aA = 0; aA < 3; aA++) f9[aA] = bJ.p9(parseInt(g[aA].trim(), 10) + ed, 0, 255);
		return 3 === g.length ? this.mZ(f9[0], f9[1], f9[2]) : (a1u = parseFloat(g[3].trim()), this.mb(f9[0], f9[1], f9[2], a1u = 0 === a1u ? .3 : a1u))
	}, this.a1v = function(g) {
		for (var pI = "#", aA = 0; aA < 3; aA++) {
			var dw = g[aA].toString(16);
			pI += 1 === dw.length ? "0" + dw : dw
		}
		return pI
	}, this.a1w = function(pI) {
		var dw, sF;
		return pI.length < 7 ? b9.mY : (dw = parseInt(pI.slice(1, 3), 16), sF = parseInt(pI.slice(3, 5), 16), pI = parseInt(pI.slice(5, 7), 16), this.mZ(dw, sF, pI))
	}
}

function a1B() {
	this.a1x = function(pI, font, maxWidth) {
		if (font && (tj.font = font), tj.measureText(pI).width <= maxWidth) return pI;
		for (var aA = pI.length - 1; 1 <= aA; aA--)
			if (pI = pI.substring(0, aA), tj.measureText(pI + "...").width <= maxWidth) return pI + "...";
		return "..."
	}
}

function a1H() {
	var a1z = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a20 = function(e9) {
		var a22, pI = new Date(e9.getTime() - 6e4 * e9.getTimezoneOffset()).toUTCString();
		return pI.length < 12 || (pI = pI.substring(5, pI.length), 0 === (e9 = e9.getTimezoneOffset())) ? pI : (a22 = (e9 < 0 ? "+" : "-") + bJ.dj(Math.abs(e9), 60), 0 == (e9 = Math.abs(e9) % 60) ? pI + a22 : pI + a22 + ":" + (e9 < 10 ? "0" :
			"") + e9)
	}, this.a23 = function(e9) {
		var pI = e9.toUTCString();
		return pI.length < 12 ? pI : function(e9) {
			return a1z[e9.getUTCDay()]
		}(e9) + ", " + pI.substring(5, pI.length - 4)
	}
}

function a17() {
	var a25 = null;
	this.xv = 0, this.ud = function() {
		var f2 = bh.e7.data[5].value;
		a25 = "px " + f2, "Trebuchet MS" !== f2 && (a25 += ", Trebuchet MS"), this.xv = hQ(32, 32, ["a", "b", "m"], 200, a25)
	}, this.vO = function(i, j) {
		var ev = document.createElement("canvas");
		return ev.width = i, ev.height = j, ev
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x8, i, j) {
		return x8.getImageData(0, 0, i, j)
	}, this.rQ = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a25 : 1 === type ? "bold " + size + a25 : 2 === type ? "lighter " + size + a25 : 3 === type ? "italic " + size + a25 : 4 === type ? "oblique " + size + a25 : 5 === type ? "small-caps " +
			size + a25 : "small-caps bold " + size + a25
	}, this.textAlign = function(hX, id) {
		hX.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hX, id) {
		hX.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pm = function(e, code, color) {
		color = this.pl(ba.rS) + " solid " + (color || b9.mh);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sH = function(e, eh, ej, i, j) {
		e = e.style;
		e.left = this.a26(eh), e.top = this.a26(ej), e.width = this.a26(i), e.height = this.a26(j)
	}, this.pc = function(f2) {
		return 1 + f2 * z.a0.qz()
	}, this.qu = function(mJ, g8) {
		return mJ * this.pc(void 0 === g8 ? .5 : g8) * h.pd / h.k
	}, this.sG = function(mJ, g8) {
		return mJ * this.pc(void 0 === g8 ? .5 : g8) * h.pd
	}, this.rw = function(mJ, g8, a27) {
		return this.pc(g8) * Math.min(mJ * h.pd, a27 * h.i) / h.k
	}, this.pl = function(f2) {
		return f2.toFixed(1) + "px"
	}, this.a26 = function(f2) {
		return this.a29(f2).toFixed(1) + "px"
	}, this.a29 = function(f2) {
		return f2 / h.k
	}, this.a2A = function(rg, a2B) {
		for (var pI = "<ul>", ea = rg.length, aA = 0; aA < ea; aA++) pI += "<li>" + rg[aA] + ": <a href='" + a2B[aA] + "' target='_blank'>" + a2B[aA] + "</a></li>";
		return pI += "</ul>"
	}, this.a2C = function(a2D) {
		return "<a href='" + a2D + "' target='_blank'>" + a2D + "</a>"
	}, this.a2E = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a2F = function(e) {
		var di = e.textContent;
		b8.zW.a2G(di, "✔") || (1 === di.length ? e.textContent = "✔" : e.textContent = di + " ✔", setTimeout(function() {
			e.textContent = di
		}, 500))
	}, this.measureText = function(pI) {
		return tj.measureText(pI).width
	}, this.s7 = function(a2H) {
		a2H.style.overflowX = "auto", a2H.style.overflowY = "hidden", a2H.style.whiteSpace = "nowrap", a2H.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sJ = this.scrollLeft, e.preventDefault())
		}), a2H.addEventListener("scroll", function() {
			this.sJ = this.scrollLeft
		})
	}
}

function a19() {
	this.gl = function(zx) {
		return 0 === zx ? 1 === aC.yr && aC.gv : 1 === zx ? 1 === aC.yr && !aC.gv : 2 === aC.yr
	}, this.gm = function(player) {
		return 0 !== af.lf[player] && 2 !== af.a2I[player]
	}, this.a2J = function(player) {
		return player === aC.eK && 2 !== af.a2I[player]
	}, this.lE = function() {
		return ak.jq < 2 ? 0 : aC.hP ? 1 < bf.a2K() : af.gN[l4[1]]
	}, this.a2L = function() {
		var jq = ak.jq;
		if (0 !== jq) {
			if (!aC.hP) return !this.jD(l4[0]);
			for (var eY = be.eY, l0 = bf.l1(), jr = ak.jr, aA = jq - 1; 0 <= aA; aA--) {
				var g7 = jr[aA];
				if (eY[g7] === l0 && !this.jD(g7)) return 1
			}
		}
		return 0
	}, this.a2M = function(player) {
		return player === aC.eK
	}, this.jD = function(player) {
		return player >= aC.jp || 2 === af.a2I[player]
	}, this.kb = function(player) {
		return 0 !== af.lf[player]
	}, this.yh = function(player) {
		return player < aC.jp
	}, this.ou = function(a2N, a2O) {
		return a2N !== a2O
	}, this.fy = function(player, f2) {
		var min;
		return f2 = this.a2P(player, f2), af.gb[player] += f2, af.a2Q[player] && (min = Math.min(af.a2Q[player], af.gb[player]), af.a2Q[player] -= min, af.gb[player] -= min), f2
	}, this.a2P = function(player, f2) {
		var a2R = af.gb[player];
		return f2 = Math.min(f2, af.gN[player] * aC.a2S - a2R), f2 = Math.min(f2, aC.a2T - a2R), Math.max(f2, 0)
	}, this.ov = function(player, i9, a2U, a2V) {
		var a2R = af.gb[player],
			i9 = bJ.dj(a2R * (i9 + 1), 1024),
			a2U = bJ.dj(a2U * a2R, 1024),
			i9 = Math.min(i9, a2R - a2U);
		return 10 === aC.k6 && (i9 = b2.a2X(player, i9)), bM.f7[0] = i9, bM.f7[1] = a2U, a2V <= i9
	}, this.oM = function(player, o5, o4) {
		var player = af.gb[player],
			a2W = bJ.dj(64 * player, 1024),
			player = (o5 = Math.min(o5, player - a2W), this.a2Z(o5));
		return a2W += player, o5 = this.a2P(o4, o5 -= player), bM.f7[0] = o5, bM.f7[1] = a2W, 1 <= o5
	}, this.oO = function(o5, o4) {
		var a2Y = this.a2Z(o5);
		return o5 = this.a2P(o4, o5 -= a2Y), bM.f7[0] = o5, bM.f7[1] = a2Y, 1 <= o5
	}, this.i8 = function(player, a2a) {
		return bJ.dj(af.gb[player] * (a2a + 1), 1024)
	}, this.a2Z = function(a2b) {
		return bJ.dj(Math.max(2142 - bd.jm(), 0) * a2b, 2142)
	}, this.p7 = function(player, a2U) {
		a2U = bJ.dj(a2U * af.gb[player], 1024);
		bM.f7[1] = a2U, af.gb[player] -= a2U
	}, this.fw = function(player, a2c) {
		var fJ, fL, eu = af.gb[player];
		return a2c <= eu ? af.gb[player] -= a2c : (af.gb[player] = 0, fL = af.a2Q[player] + (fJ = 5 * ((eu = a2c - eu) >> 2)), bb.fz(player, fJ - eu, 12), fL <= aC.a2d ? af.a2Q[player] = fL : (af.a2Q[player] = aC.a2d, bb.fz(player, fL - aC.a2d,
			18))), a2c
	}, this.kp = function(player, i9) {
		var gb = af.gb,
			a2R = gb[player],
			i9 = bJ.dj(a2R * (i9 + 1), 1024),
			a2W = Math.max(bJ.dj(a2R, 10), 1e3);
		return (i9 = Math.min(i9, a2R - a2W)) < 0 ? (gb[player] = 0, a2W = Math.min(1e3, a2R + aC.a2d - af.a2Q[player]), bM.f7[1] = a2W, af.a2Q[player] += a2W - a2R, 0) : (bM.f7[1] = a2W, 10 === aC.k6 && (i9 = b2.a2X(player, i9)), gb[player] -=
			a2W + i9, i9)
	}, this.oy = function(player) {
		af.gb[player] -= bM.f7[0] + bM.f7[1]
	}, this.ow = function(player, j0) {
		return (j0 = Math.min(j0, aC.eX)) < aC.eX && 0 === af.lf[j0] && (j0 = aC.eX), (bM.eW[0] = j0) === aC.eX || eT(player, j0)
	}, this.p0 = function(player, o4) {
		return 0 !== af.lf[o4] && !eT(player, o4)
	}, this.a2e = function(player, a2f) {
		for (var g7, ea = ak.jq, a2g = 0, a2h = l4, aA = 0; aA < ea; aA++)
			if (g7 = a2h[aA], !this.jD(g7)) {
				if (player === g7) return !0;
				if (++a2g > a2f) return !1
			} return !1
	}, this.kx = function(g7) {
		var a2i = aC.hP ? bf.a2j() : af.gN[l4[0]];
		return a2i >= bJ.dj(g7 * aC.jZ, 100)
	}, this.a2k = function(f2, min, max) {
		return Math.floor(bJ.p9(isNaN(f2) ? 0 : Number(f2), min, max))
	}
}

function a1D() {
	this.a2l = function(canvas, a2m, a2n) {
		var i = canvas.width,
			j = canvas.height,
			ev = b8.pb.vO(i, j),
			hX = b8.pb.getContext(ev, !0),
			canvas = (hX.drawImage(canvas, 0, 0), hX.getImageData(0, 0, i, j));
		return a2m(canvas.data, i, j, a2n), hX.putImageData(canvas, 0, 0), ev
	}, this.a2o = function(vZ, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vZ[3 + aA] = vZ[aA], vZ[aA] = vZ[1 + aA] = vZ[2 + aA] = 255
			}
	}, this.a2p = function(vZ, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vZ[1 + aA] > vZ[2 + aA] + 10 && (vZ[3 + aA] = vZ[aA], vZ[1 + aA] = vZ[2 + aA])
			}
	}, this.a2q = function(vZ, i, j, a2n) {
		for (var gap = Math.floor(Math.min(i, j) * a2n), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (vZ[3 + (aA = 4 * (eh + ej * i))] = 255 - 255 * (vZ[1 + aA] - vZ[aA]) / (255 - vZ[aA]))
	}, this.a2r = function(vZ, i, j, a2n) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				vZ[aA] = a2n[0], vZ[1 + aA] = a2n[1], vZ[2 + aA] = a2n[2]
			}
	}, this.a2s = function(vZ, i, j, a2n) {
		for (var gap = Math.floor(i * a2n), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (vZ[aA = 4 * (eh + ej * i)] = vZ[1 + aA] = vZ[2 + aA] = 0)
	}, this.a2t = function(vZ, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) 200 < vZ[1 + (aA = 4 * (eh + ej * i))] && vZ[1 + aA] - 20 > vZ[aA] && vZ[1 + aA] - 20 > vZ[2 + aA] ? vZ[aA] + vZ[2 + aA] < 40 ? vZ[3 + aA] = 0 : (vZ[3 + aA] = vZ[aA], vZ[aA] = 255, vZ[1 + aA] = 255, vZ[
				2 + aA] = 255) : vZ[aA] < 50 && vZ[1 + aA] < 50 && vZ[2 + aA] < 50 && (vZ[aA] + vZ[1 + aA] + vZ[2 + aA] < 50 ? vZ[3 + aA] = 180 : vZ[3 + aA] = 180 + Math.floor(75 * (vZ[aA] + vZ[1 + aA] + vZ[2 + aA] - 50) / 100))
	}, this.a2u = function(vZ, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) vZ[1 + (aA = 4 * (eh + ej * i))] > vZ[aA] + 20 && vZ[1 + aA] > vZ[2 + aA] + 20 && vZ[aA] + vZ[2] < 40 && (vZ[3 + aA] = 255 - vZ[1 + aA], vZ[aA] = vZ[1 + aA] = vZ[2 + aA] = vZ[aA])
	}, this.a1p = function(vZ, i, j, a2n) {
		for (var dw = i >> 1, eh = 0; eh < i; eh++)
			for (var ej = 0; ej < j; ej++) Math.sqrt((eh - dw) * (eh - dw) + (ej - dw) * (ej - dw)) > a2n * dw && (vZ[4 * (eh + ej * i) + 3] = 0)
	}
}

function a1A() {
	this.y9 = function(f2) {
		var aA, a2v, a2w, a2x, a2y;
		if (f2 < 0) return "-" + this.y9(Math.abs(f2));
		if (f2 < 1e3) return f2.toString();
		for (a2v = Math.floor(Math.log(f2 + .5) / Math.log(10)) + 1, a2w = Math.floor((a2v - 1) / 3), a2y = (a2x = f2.toString()).substring(a2v - 3, a2v), aA = 1; aA < a2w; aA++) a2y = a2x.substring(a2v - 3 * (aA + 1), a2v - 3 * aA) + " " + a2y;
		return a2x.substring(0, a2v - 3 * a2w) + " " + a2y
	}, this.a2z = function(g7, a2v) {
		return g7.toFixed(a2v) + "%"
	}, this.a30 = function(f2, a31) {
		return f2.toFixed(bJ.p9(Math.floor((void 0 === a31 ? 3 : a31) - Math.log10(Math.max(f2, 1))), 0, 8))
	}, this.a32 = function(f2, mJ, a2v) {
		return (f2 * mJ).toFixed(a2v)
	}, this.zb = function(username) {
		var ee, eP = username.indexOf("[");
		return !(eP < 0) && 1 < (ee = username.indexOf("]")) - eP && ee - eP <= 8 ? username.substring(eP + 1, ee).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zb;
	this.a33 = function(pI) {
		for (var et = Math.floor(.5 * pI.length + .5), mP = Math.floor(.5 * (et - 1)), aA = 0; aA < mP; aA++)
			for (var eu = -1; eu < 2; eu += 2) {
				var ev = et + eu * aA;
				if (" " === pI[ev]) return [this.zX(pI.substring(0, ev)), this.a34(pI.substring(ev))]
			}
		return [pI.substring(0, et), pI.substring(et)]
	}, this.a34 = function(pI) {
		for (var ea = pI.length, aA = 0; aA < ea; aA++)
			if (" " !== pI[aA]) return pI.substring(aA);
		return pI
	}, this.zX = function(pI) {
		for (var aA = pI.length - 1; 0 <= aA; aA--)
			if (" " !== pI[aA]) return pI.substring(0, aA + 1);
		return pI
	}, this.a35 = function(pI, a36) {
		return pI.split("(")[0] + "(🧈 " + a36.toFixed(2) + ")"
	}, this.startsWith = function(pI, a37) {
		return pI.substring(0, a37.length) === a37
	}, this.a2G = function(pI, a37) {
		var ea = pI.length;
		return pI.substring(ea - a37.length, ea) === a37
	}, this.a38 = function(g, a39, a3A) {
		var pI = "",
			ea = g.length - 1;
		a3A = a3A || "";
		for (var aA = 0; aA < ea; aA++) pI += a3A + g[aA] + a3A + ",", (aA + 1) % a39 == 0 && (pI += "\n");
		return pI += a3A + g[ea] + a3A
	}, this.a3B = function(pI, hf, hg) {
		return pI.replace(new RegExp(hf, "g"), hg)
	}
}

function a3C() {
	this.ix = function(player, eM) {
		aH.wu(player, bK.ei(eM), bK.ek(eM)) && (bd.dc = !0), aC.k8 && this.ij()
	}, this.ij = function() {
		aC.gv = !1;
		for (var aA = 0; aA < aC.jp; aA++) 0 !== af.lf[aA] && 0 === af.gN[aA] && aH.x0(aA);
		0 !== af.lf[aC.eK] ? (bb.lb[7] = af.gN[aC.eK], bb.lb[8] = af.gb[aC.eK], aQ.a3D(), aV.a3E(), aC.gj || aG.m0(af.iO[aC.eK] - 5, af.iQ[aC.eK] - 5, af.iP[aC.eK] + 5, af.iR[aC.eK] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a3F(18), ae.a3G(),
			ae.lR(!0), bN.x.a3H(), aK.qs(), aC.ot = null, bZ.a3I = !0, bZ.a3J(), aC.k8 && z.a0.setState(1)
	}
}

function bw() {
	this.eX = 512, this.a2T = 15e8, this.a3K = 1e9, this.a2d = 5e4, this.a3L = 512, this.ft = 2, this.eK = 0, this.jp = 0, this.yu = 0, this.kA = 0, this.yt = 0, this.w5 = 512, this.wA = 512, this.a2S = 150, this.k8 = !0, this.gj = 0, this.yr = 0,
		this.jZ = 0, this.mA = !1, this.gv = 0, this.a3M = 0, this.hP = !1, this.wC = 0, this.wD = 0, this.k6 = 0, this.xL = 0, this.ot = null, this.z9 = new xE, this.a3N = 30, this.yo = 0, this.yw = 0, this.z8 = 0, this.yj = 0, this.data = new a3O,
		this.a3P = new a3Q, this.a3R = 0, this.a3S = function() {
			bP.dU(), this.yu = this.jp = this.data.humanCount, this.k8 = 1 === this.yu && !__fx.customLobby.isActive(), this.mA = !1, this.gj = this.data.isReplay, this.k6 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xL = this.data.isContest, this.hP = this.k6 < 7 || 9 === this.k6, this.k6 = 10 === this.k6 && this.k8 ? 7 : this.k6, this.k6 = 8 === this.k6 && 2 !== this.jp ? 7 : this.k6, ax
				.dU(), this.wC = this.data.numberTeams, this.data.teamPlayerCount ? this.wD = +(0 < this.data.teamPlayerCount[0]) : (this.wD = 0, this.hP && this.k8 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.wC + 1), aC.a3P.a3T())), this.a3N = this.jp <= 2 ? 30 : this.jp <= 50 ? 40 : 50, this.a3M = this.gv = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.ot = this.gv ?
				new a3C : null, this.w5 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jp) : 1 === l.dh ? this.w5 = this.jp : this.w5 = this.data.playerCount,
				this.wA = this.w5, this.kA = this.w5 - this.jp, this.yt = 0, this.eK = this.data.selectedPlayer, this.yo = 0, this.yw = 0, this.z8 = 0, this.yj = 0, aw.a3U(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3V(), b6.nx.oe = [], be.dU(),
				this.yr = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3W(), ab.dV(), an.a3X(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3Y(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3Z(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3a.putImageData(a3b, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fb(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.z9.dU(), bd.a3Y(), aG.lz(), 0 === af.lf[aC.eK] && aW.show(!1, !0), ae.lR(!0), at.dU(), bd.dc = !0, this.gj || this.k8 && this.gv || z.a0.setState(1), this.a3R = 0
		}, this.a0H = function(a3d) {
			aC.gj || b7.or.a3e.length || (b7.or.a3e = b7.a3f.yK()),
				__fx.customLobby.isActive() === false && ay.x.a3g(),
				this.yr = 0, bd.a3h(), z.a0.setState(0), aZ.setState(0), a3d || bS.e3.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3R ? s.x.a3i() : 1 === this.a3R ? s.t(19) : s.t(5, 5)
		}, this.a3j = function() {
			return this.gj ? aL.gk || !bA.a3k : this.k8 && (aL.gk || this.gv)
		}, this.a3l = function() {
			return 1 === this.yr && !this.gv
		}
}

function a3O() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3Q() {
	this.a3T = function() {
		var a3m = aC.data;
		b8.pk.a1e(a3m.teamPlayerCount, a3m.playerCount), a3m.numberTeams = b8.pk.a1V(a3m.teamPlayerCount, 0), a3m.teamPlayerCount[0] && a3m.teamPlayerCount[7] && (a3m.teamPlayerCount[7] = 0, this.a3T())
	}, this.a3n = function() {
		var a3m = aC.data;
		a3m.mapType < 2 ? bQ.a6(bQ.a3o(a3m), a3m.mapSeed) : bQ.a3p(a3m.canvas)
	}, this.a3q = function() {
		var a3m = aC.data;
		a3m.colorsData || (a3m.colorsData = new Uint32Array(1)), a3m.selectableColor && (a3m.colorsData[0] = bh.x.uc()), a3m.selectableName && (a3m.playerNamesData || (a3m.playerNamesData = new Array(1)), a3m.playerNamesData[0] = bh.e7.data[122]
			.value)
	}, this.a3r = function() {
		aC.data = new a3O, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eX), aC.data.aIncomeData[0] = 64
	}
}

function dN() {
	this.xs = 0, this.gap = 0, this.rS = 0, this.pi = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xs = .0022 * b8.pb.pc(.5) * h.pd, this.rS = this.xs / h.k, this.gap = Math.max(Math.floor((z.a0.qz() ? .0114 : .01296) * h.pd), 2), this.pi = this.gap / h.k
	}
}

function dM() {
	this.a3s = function() {
		return z.a0.qz() ? 2 : 1
	}
}

function c7() {
	var qB, eh, ej, a3t, a3u, a3v, e9, player, a3w, gap, zoom, oX, a3x;

	function a47(player) {
		for (var aA = oX.length - 1; 0 <= aA; aA--)
			if (oX[aA] === player) return 1
	}

	function a45(a42) {
		var aA, ea;
		if (-1 !== a42)
			for (ea = qB.length, aA = 0; aA < ea; aA++)
				if (qB[aA].hH && qB[aA].eh + 1 === a42 % 4 && qB[aA].ej + 1 === a42 >> 2) return aA;
		return -1
	}

	function a43(ks, kt) {
		var sF = gap / 2;
		return ks < eh - a3t - 3 * sF || eh + 3 * a3t + 5 * sF < ks || kt < ej - a3t - 3 * sF || ej + 2 * a3t + 3 * sF < kt ? -1 : 4 * (kt < ej - sF ? 0 : kt < ej + a3t + sF ? 1 : 2) + (ks < eh - sF ? 0 : ks < eh + a3t + sF ? 1 : ks < eh + 2 * a3t +
			3 * sF ? 2 : 3)
	}
	this.a3y = function() {
		var aA, eu, a41 = [b9.n7, b9.nL, b9.mf, b9.nf, b9.nY];
		for (qB = new Array(9), aA = 0; aA < 9; aA++) qB[aA] = {
			id: aA,
			hH: !1,
			kZ: 0,
			canvas: [],
			eh: 0,
			ej: 0
		};
		for (qB[0].colors = [0, 1, 2, 3], qB[0].eh = 0, qB[0].ej = 0, qB[1].colors = [0, 1, 4], qB[1].eh = 1, qB[1].ej = 0, qB[2].colors = [0, 2], qB[2].eh = -1, qB[2].ej = 0, qB[3].colors = [0], qB[3].eh = 0, qB[3].ej = 0, qB[4].colors = [0, 2],
			qB[4].eh = 1, qB[4].ej = 1, qB[5].colors = [3], qB[5].eh = 0, qB[5].ej = -1, qB[6].id = 20, qB[6].colors = [0], qB[6].eh = 1, qB[6].ej = -1, qB[7].id = 21, qB[7].colors = [0], qB[7].eh = 0, qB[7].ej = 1, qB[8].id = 16, qB[8]
			.colors = [0], qB[8].eh = 0, qB[8].ej = 0, aA = 0; aA < 9; aA++)
			for (eu = 0; eu < qB[aA].colors.length; eu++) qB[aA].canvas.push(function(id, a1k) {
				if (id < 20) return b8.canvas.xe(aa.get(3), id, a1k);
				var a1k = aa.get(3).height,
					a1l = b8.pb.vO(a1k, a1k),
					hX = b8.pb.getContext(a1l);
				20 === id ? hX.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vZ.xt(ai.qr.xi + ai.qr.xz, hX, 0, 0, a1k);
				return a1l
			}(qB[aA].id, a41[qB[aA].colors[eu]]))
	}, this.a40 = function() {
		return qB
	}, this.dU = function() {
		oX = [], eh = ej = e9 = 0, a3u = a3v = -1e3, this.resize()
	}, this.resize = function() {
		a3t = Math.floor((z.a0.qz() ? .075 : .0468) * h.pd), zoom = a3t / aa.get(3).height, gap = Math.floor(a3t / 3)
	}, this.a0k = function(ks, kt) {
		return !!this.hH() && (bd.dc = !0, !!ai.vZ.gn(ks, kt, player) || (ks = function(ks, kt) {
			a3v = a3u = -1e3;
			var a44 = a45(a43(ks, kt));
			if (-1 === a44) return 0;
			if (1 !== qB[a44].colors[qB[a44].kZ])
				if (5 === a44) {
					if (! function() {
							var di = performance.now();
							a3x + 4e3 < di && (oX = []);
							a3x = di
						}(), a47(player)) return 1;
					oX.push(player), 16 < oX.length && oX.shift()
				} else if (6 === a44) {
				for (var aA = oX.length - 1; 0 <= aA; aA--) 0 === af.lf[oX[aA]] && oX.splice(aA, 1);
				0 < oX.length && (b3.a48(1, oX, !0) && b6.fv.oW(oX, player), oX = [])
			} else if (2 === a44) b6.gw.o3(aQ.h1(), player);
			else if (3 === a44) aC.gv && b6.gw.gx(a3w);
			else if (0 === a44)
				if (0 === qB[0].kZ) {
					if (aC.a3M && aV.a49() < 350) return 1;
					bT.a4A(4), b6.gw.h7(aQ.h1(), player)
				} else az.h9(player, aQ.h1());
			else if (1 === a44) bT.a4A(1), b6.gw.h5(aQ.h1(), a3w);
			else {
				if (7 === a44) return bT.a4A(0), ai.vZ.show(ks, kt), 2;
				if (4 === a44) b3.a48(0, [player], !0) && b6.fv.oT(player);
				else {
					if (8 !== a44) return 0;
					b6.gw.h0(aQ.h1(), a3w, player)
				}
			}
			return 1
		}(ks, kt), this.qs(), 2 === ks && (ai.vZ.hH = !0), 0 < ks))
	}, this.a0m = function(ks, kt) {
		this.hH() || (a3u = ks, a3v = kt, e9 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gr(mouseX),
			coordY = bK.gt(mouseY),
			coord = bK.ey(coordX, coordY),
			point = bK.eQ(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(ks, kt, eE) {
			ab.eV(eE) || -1 === (ks = bL.h3.a4O(ks, kt)) ? aM.a4N(eE) : aM.a4P(ks)
		}(mouseX, mouseY, point))
	}
	this.click = function(ks, kt, a0t) {
		var gq = bK.gr(ks),
			gs = bK.gt(kt),
			eM = bK.ey(gq, gs),
			eE = bK.eQ(eM);
		if (!bK.gu(gq, gs)) return !1;
		gq = (z.a0.qz() ? .025 : .0144) * h.pd, gs = performance.now();
		if (Math.abs(ks - a3u) > gq || Math.abs(kt - a3v) > gq || e9 + 500 < gs) return !1;
		if (e9 = gs, a0t && ! function(ks, kt, eE) {
				ab.eV(eE) || -1 === (ks = bL.h3.a4O(ks, kt)) ? aM.a4N(eE) : aM.a4P(ks)
			}(ks, kt, eE), aL.gk || this.hH() || !b8.fv.gm(aC.eK) || aC.gj) return this.qs(), !1;
		if (aC.gv) {
			if (!a0t) {
				if (!ab.eV(eE)) return !1;
				a3w = eM, qB[3].hH = !0
			}
		} else if (bL.h3.o8(eM)) a0t ? aM.a4G(55, 0) : bL.a4E.a4F = -1;
		else {
			if (a0t) return !1;
			bL.h3.a4H(ks, kt) || (2 === aC.yr ? ab.g9(eE) && (player = ab.eS(eE), b8.fv.jD(player) || (qB[0].hH = !0, qB[0].kZ = 1, qB[7].hH = !0)) : ab.ef(eE) ? (a3w = al.eB.eD(eE)) && (gq = bK.eQ(a3w), qB[8].hH = !0, player = ab.eR(gq) ? aC
				.eX : ab.eS(gq)) : (a3w = eM, bL.h3.h4(aC.eK, eM) && (qB[0].hH = !0, qB[0].kZ = 1, qB[1].hH = !0, qB[1].kZ = bM.fB[2] ? 0 : 2), ab.h2(eE) || (ab.eR(eE) ? (player = aC.eX, h6(aC.eK) ? (qB[0].hH = !0, qB[0].kZ = 0) : h8(aC
				.eK, player) && (qB[0].hH = !0, qB[0].kZ = 3)) : (player = ab.eS(eE)) === aC.eK ? (qB[0].hH = !0, qB[0].kZ = 1, qB[7].hH = !0) : (qB[0].kZ = 1, qB[5].hH = function(player) {
				return !b8.fv.jD(player) && !a47(player) && b3.a48(1, [player], !1)
			}(player), qB[7].hH = !b8.fv.jD(player), eT(player, aC.eK) ? (qB[4].hH = !b8.fv.jD(player) && !ae.a4J(player) && b3.a48(0, [player], !1), qB[6].hH = function(player) {
				if (0 === oX.length) return !1;
				if (performance.now() > a3x + 4e3) return !(oX = []);
				return !a47(player) && ! function(player) {
					var aA;
					if (aC.hP)
						for (aA = oX.length - 1; 0 <= aA; aA--)
							if (!eT(player, oX[aA])) return 1;
					return
				}(player)
			}(player), hA(aC.eK, player) ? (qB[0].kZ = 0, qB[0].hH = !0) : h8(aC.eK, player) && (qB[0].kZ = 3, qB[0].hH = !0), qB[0].hH = this.a4L()) : (qB[2].hH = !0, qB[0].hH = !0)))))
		}
		return this.a4D(ks, kt)
	}, this.a4D = function(ks, kt) {
		return eh = ks - Math.floor(a3t / 2), ej = kt - Math.floor(a3t / 2), !!this.hH()
	}, this.a0Q = function(ks, kt) {
		return !!this.hH() && (ai.vZ.hH ? !ai.vZ.xr(ks, kt) && (ai.vZ.hH = !1, bd.dc = !0) : function(rD, ks, kt) {
			ks = a43(ks, kt);
			if (0 <= a45(ks)) return !1;
			if ((1 === ks || 6 === ks) && 0 <= a45(2)) return !1;
			if ((6 === ks || 9 === ks) && 0 <= a45(10)) return !1;
			return rD.qs(), bd.dc = !0
		}(this, ks, kt))
	}, this.qs = function() {
		for (var aA = qB.length - 1; 0 <= aA; aA--) qB[aA].hH = !1, qB[aA].kZ = 0;
		ai.vZ.hH = !1
	}, this.hH = function() {
		return this.a4L() || ai.vZ.hH
	}, this.a4L = function() {
		for (var ea = qB.length, aA = 0; aA < ea; aA++)
			if (qB[aA].hH) return !0;
		return !1
	}, this.ti = function() {
		if (this.hH())
			if (ai.vZ.hH) ai.vZ.ti();
			else {
				var aA, hX = tj,
					eu = qB,
					ea = eu.length,
					a4T = (a3t + gap) / zoom;
				for (hX.imageSmoothingEnabled = !0, hX.setTransform(zoom, 0, 0, zoom, eh, ej), aA = 0; aA < ea; aA++) eu[aA].hH && tj.drawImage(eu[aA].canvas[eu[aA].kZ], eu[aA].eh * a4T, eu[aA].ej * a4T);
				hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4U, a4V, a4W, a4X = -1;

	function a4Y() {
		var a4Z, x8 = canvas.getContext("2d", {
			alpha: !0
		});
		x8.clearRect(0, 0, j, j), x8.fillStyle = b9.md, x8.fillRect(0, 0, j, j), 0 === a4V && (x8.fillStyle = b9.mi, x8.fillRect(0, 0, j, j)), x8.fillStyle = b9.mh, x8.fillRect(0, 0, j, 1), x8.fillRect(0, 0, 1, j), x8.fillRect(0, j - 1, j, 1), x8
			.fillRect(j - 1, 0, 1, j), a4Z = .9 * j / aa.get(0).width, x8.imageSmoothingEnabled = !0, x8.setTransform(a4Z, 0, 0, a4Z, Math.floor((j - a4Z * aa.get(0).width) / 2), Math.floor((j - a4Z * aa.get(0).height) / 2)), x8.drawImage(aa.get(0),
				0, 0), x8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4b(ks, kt) {
		if (!aL.gk) return ks <= j + ba.gap && kt >= aQ.ej ? 9 : -1;
		if (ks <= 4 * j + ba.gap) {
			if (kt >= aQ.ej) return 0;
			if (kt >= aQ.ej - j - a4W * ba.gap) return 2
		} else if (ks <= 7 * j + ba.gap && kt >= aQ.ej - j - a4W * ba.gap) return 1;
		return -1
	}
	this.gk = !1, this.dU = function() {
		a4V = -1, this.gk = !1, a4W = z.a0.qz() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4U = b8.pb.rQ(1, (z.a0.qz() ? .5 : .45) * j), a4Y()
	}, this.a11 = function() {
		this.gk = !this.gk, this.gk ? (bA.a10(!1), aC.gj && bA.a3k && bA.a12(!0), this.a4a()) : (a4V = -1, a4Y(), !aC.k8 || 1 !== aC.yr || aC.gv || aC.gj || z.a0.setState(1)), bd.dc = !0
	}, this.a4a = function() {
		(aC.k8 || aC.gj) && 1 === aC.yr && (aU.lR(!0), aC.gv || setTimeout(function() {
			bZ.z2()
		}, 0), z.a0.setState(0))
	}, this.gn = function(ks, kt) {
		return 0 <= (a4X = a4b(ks, kt)) || !aL.gk || aC.k8 || aC.gj || bc.hH || aL.a11(), a4X
	}, this.a0Q = function(ks, kt) {
		ks = a4b(ks, kt);
		ks !== a4V && (a4V = ks, this.gk || a4Y(), bd.dc = !0)
	}, this.a0R = function(ks, kt) {
		ks = a4b(ks, kt);
		return -1 !== ks && a4X === ks && (this.gk ? aC.mA ? (0 <= ks && bA.a10(!1), !aC.gj) : (0 === ks ? aC.a0H() : 1 === ks ? this.a11() : 2 === ks && s.t(1, 0), !0) : 9 === ks && (this.a11(), !0))
	}, this.ti = function() {
		var i;
		this.gk ? (i = Math.floor(5.5 * j), tj.setTransform(1, 0, 0, 1, ba.gap, aQ.ej), tj.fillStyle = b9.md, tj.fillRect(0, 0, i, j), 0 === a4V ? (tj.fillStyle = b9.mi, tj.fillRect(0, 0, 4 * j, j)) : 1 === a4V && (tj.fillStyle = b9.mi, tj
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tj.fillStyle = b9.mh, tj.fillRect(0, 0, i, 1), tj.fillRect(0, 0, 1, j), tj.fillRect(4 * j, 0, 1, j), tj.fillRect(0, j - 1, i, 1), tj.fillRect(i - 1, 0, 1, j), tj.font = a4U, b8.pb
			.textBaseline(tj, 1), b8.pb.textAlign(tj, 1), tj.fillText(L(41), 2 * j, .54 * j), i = .4 * j, aL.a4f(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.ej + .3 * j, i), i = 1, tj.setTransform(1, 0, 0, 1, ba.gap, aQ.ej - i * a4W * ba.gap - i *
				j), tj.fillStyle = b9.md, tj.fillRect(0, 0, 4 * j, j), a4V === i + 1 && (tj.fillStyle = b9.mi, tj.fillRect(0, 0, 4 * j, j)), tj.fillStyle = b9.mh, tj.fillRect(0, 0, 4 * j, 1), tj.fillRect(0, 0, 1, j), tj.fillRect(4 * j, 0, 1,
				j), tj.fillRect(0, j - 1, 4 * j, 1), tj.fillText(L(0 === i ? 41 : 42), 2 * j, .54 * j), tj.setTransform(1, 0, 0, 1, 0, 0)) : tj.drawImage(canvas, ba.gap, aQ.ej)
	}, this.pC = function(player) {
		return 0 !== af.lf[player] && 2 !== aC.yr && !b8.fv.jD(player)
	}, this.a4f = function(eh, ej, ea) {
		tj.setTransform(1, 0, 0, 1, eh, ej), tj.lineWidth = ba.xs, tj.strokeStyle = b9.mh, tj.beginPath(), tj.moveTo(0, 0), tj.lineTo(ea, ea), tj.moveTo(0, ea), tj.lineTo(ea, 0), tj.stroke()
	}
}

function c9() {
	var a4h, j, a4i, a4j, a4k, a4l, a4m, a4n, a4o;

	function x4() {
		return aQ.a56(aM.a52()) ? au.hH ? __fx.settings.keybindButtons ? aQ.ej - 2 * aQ.j - 3 * a4i : aQ.ej - aQ.j - 2 * a4i : __fx.settings.keybindButtons ? aQ.ej - aQ.j - 2 * a4i : aQ.ej - a4i : bA.a56(aM.a55()) ? au.hH ? bA.x4() - aQ.j - 2 * a4i :
			bA.x4() - a4i : au.hH ? h.j - aQ.j - (bi.a3s() + 1) * a4i : h.j - bi.a3s() * ba.gap
	}

	function a4t(di, pI, id, g7, a4w, a4x, vh, a4y, a4z, a50) {
		var aA, x8, a1l, pT, g, a5B = void 0 !== a4z,
			i = Math.floor(aP.measureText(pI, aM.a4U) + 1.5 * a4j + (a5B ? j : 1.5 * a4j));
		if (bd.dc = !0, i + 2 * a4i + aQ.j > h.i && !a5B && 50 !== id && 20 < pI.length) a4t(di, (g = b8.zW.a33(pI))[0], id, g7, a4w, a4x, vh, a4y, a4z, a50), a4t(di, g[1], id, g7, a4w, a4x, vh, a4y, a4z, a50);
		else if (g = i + (50 === id ? a4k : 0), (a1l = document.createElement("canvas")).width = i, a1l.height = j, (x8 = a1l.getContext("2d", {
				alpha: !0
			})).font = aM.a4U, b8.pb.textBaseline(x8, 1), b8.pb.textAlign(x8, 0), x8.clearRect(0, 0, i, j), x8.fillStyle = a4x, x8.fillRect(0, 0, i, j), x8.fillStyle = a4w, x8.fillText(pI, Math.floor(1.5 * a4j), Math.floor(j / 2)), a5B && (x8
				.imageSmoothingEnabled = !0, ai.vZ.xt(a4z, x8, i - j, 0, j)), 0 === (pT = {
				e9: di,
				pI: pI,
				id: id,
				player: g7,
				canvas: a1l,
				a4w: a4w,
				a4x: a4x,
				i: i,
				a53: g,
				vh: vh,
				a4y: a4y,
				a4z: a4z,
				a50: a50
			}).e9 || 0 < a4h.length && 0 < a4h[0].e9) a4h.unshift(pT);
		else {
			for (aA = 1; aA < a4h.length; aA++)
				if (0 < a4h[aA].e9) return void a4h.splice(aA, 0, pT);
			a4h.push(pT)
		}
	}

	function a4u(dw, sF, eu) {
		return "rgb(" + dw + "," + sF + "," + eu + ")"
	}

	function a5C(id, g2) {
		for (var ea = a4h.length, aA = 0; aA < ea; aA++) a4h[aA].id === id && g2-- <= 0 && (a4h.splice(aA, 1), aA--, ea--)
	}

	function a5D(id, player) {
		for (var eo = !1, aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].id !== id || player !== aC.eX && a4h[aA].player !== player || (a4h.splice(aA, 1), eo = !0);
		return eo
	}

	function a5a(pI) {
		a4t(340, pI, 6, 0, a4u(215, 245, 255), b9.me, -1, !1)
	}
	this.a4p = "", this.dU = function() {
		var self;
		a4n = 0, a4m = z.a0.qz() ? 7 : 12, a4l = {
			yf: [0, 0, 0],
			a4q: [0, 0, 0],
			lx: [220, 180, 180],
			th: [0, 0, 0],
			ev: [0, 0, 0]
		}, a4h = [], this.resize(), aC.gv && this.z3(0, 18), bQ.vM.vN[bQ.eG].name.length && a5a(L(89, [bQ.vM.vN[bQ.eG].name])), a5a(L(90, [bQ.el - 2 + "x" + (bQ.em - 2)])), a5a(L(91, [b8.zW.y9(an.a5b)])), an.a5b !== an.a5c && a5a(L(92, [b8.zW
			.y9(an.a5c) + " (" + b8.zW.a2z(100 * an.a5c / an.a5b, 1) + ")"
		])), 0 < an.a5d && a5a(L(65, [b8.zW.y9(an.a5d) + " (" + b8.zW.a2z(100 * an.a5d / an.a5b, 1) + ")"])), 0 < an.a5e && a5a(L(93, [b8.zW.y9(an.a5e) + " (" + b8.zW.a2z(100 * an.a5e / an.a5b, 1) + ")"])), 10 === aC.k6 && a4t(120, L(94), 6,
			0, a4u(235, 255, 120), b9.me, -1, !1), 0 !== (self = this).a4p.length && (a4t(200, self.a4p, 0, 0, b9.mh, b9.me, -1, !1), self.a4p = ""), aC.xL && a4t(340, L(43), 6, 0, a4u(255, 200, 0), b9.me, -1, !1)
	}, this.resize = function() {
		var a4v, aA;
		if (j = (j = Math.floor((z.a0.qz() ? .031 : .0249) * h.pd)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4U = b8.pb.rQ(1, this.fontSize), a4i = ba.gap, a4j = Math.floor(j / 5), 0 < a4h.length)
			for (a4v = a4h, a4h = [], aA = a4v.length - 1; 0 <= aA; aA--) a4t(a4v[aA].e9, a4v[aA].pI, a4v[aA].id, a4v[aA].player, a4v[aA].a4w, a4v[aA].a4x, a4v[aA].vh, a4v[aA].a4y, a4v[aA].a4z, a4v[aA].a50);
		this.a51()
	}, this.a51 = function() {
		a4o = document.createElement("canvas");
		var pI = L(44),
			x8 = (a4k = aP.measureText(pI, this.a4U) + 5 * a4j, a4o.height = j, a4o.width = a4k, a4o.getContext("2d", {
				alpha: !0
			}));
		x8.font = this.a4U, b8.pb.textBaseline(x8, 1), b8.pb.textAlign(x8, 1), x8.clearRect(0, 0, a4k, j), x8.fillStyle = b9.n4, x8.fillRect(0, 0, a4k, j), x8.fillStyle = b9.mh, x8.fillText(pI, Math.floor(a4k / 2), Math.floor(j / 2))
	}, this.a52 = function() {
		var ea;
		return au.hH ? au.i : 0 === (ea = a4h.length) ? 0 : 1 === ea ? a4h[0].a53 : a54(a4h[0].a53, a4h[1].a53)
	}, this.a55 = function() {
		var ea = a4h.length;
		return au.hH ? ea ? a54(au.i, a4h[0].a53) : au.i : 0 === ea ? 0 : 1 === ea ? a4h[0].a53 : 2 === ea ? a54(a4h[0].a53, a4h[1].a53) : a54(a54(a4h[0].a53, a4h[1].a53), a4h[2].a53)
	}, this.gn = function(eh, ej) {
		for (var m7, a57, a58 = x4(), aA = a4h.length - 1; 0 <= aA; aA--)
			if ((a57 = a58 - (aA + 1) * j) <= ej && ej < a57 + j) return 50 === a4h[aA].id ? eh >= h.i - a4k - a4i - a4h[aA].i && (eh >= h.i - a4k - a4i ? b6.fv.oT(a4h[aA].player) : aG.m1(a4h[aA].player, 800, !1, 0), !0) : eh >= h.i - a4h[aA].i -
				a4i && (736 === a4h[aA].id ? (a57 = a4h[aA].pI.split(" "), window.open(a57[a57.length - 1], "_blank")) : a4h[aA].a4y && (a4h[aA].a50 && a4h[aA].a50.et ? (a57 = a4h[aA].a50.eM, m7 = bK.ei(a57) - 10, a57 = bK.ek(a57) - 10, aG
					.m0(m7, a57, 19 + m7, 19 + a57)) : a4h[aA].a50 && a4h[aA].a50.eu ? aG.m2(a4h[aA].player, a4h[aA].a50.m3) : (aG.m1(a4h[aA].player, 800, !1, 0), 0 <= a4h[aA].vh && (m7 = a4h[aA].vh, a4h[aA].vh = a4h[aA].player, a4h[
					aA].player = m7))), !0);
		return !1
	}, this.zF = function(di, pI, id, g7, a4w, a4x, vh, a4y, a4z, a50) {
		a4t(di, pI, id, g7, a4w, a4x, vh, a4y, a4z, a50)
	}, this.a5A = function(p) {
		a4t(300, p, 252, 0, b9.mh, b9.me, -1, !1)
	}, this.a3F = function(id) {
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].id === id && (a4h[aA].e9 = 1)
	}, this.z3 = function(player, id) {
		0 === id ? (aP.ix(player, 0), a5C(423, 0), a4t(160, L(45, [af.zS[player]]), 423, player, "rgb(10,220,10)", b9.me, -1, !1)) : 1 === id ? (a5D(50, aC.eX), aP.ix(player, 1), a4t(360, L(46, [af.zS[player]]), 0, player, b9.nN, b9.me, -1, !0),
			aG.m1(player, 2700, !1, 0)) : 2 === id ? (aP.ix(player, 2), a4t(0, L(47), 0, player, "rgb(10,255,255)", b9.me, -1, !0), aG.m1(player, 2700, !1, 0)) : 3 === id ? (aP.ix(player, 2), a4t(0, L(48, [af.zS[player]]), 0, player, b9.mh,
			b9.me, -1, !0), aG.m1(player, 2700, !1, 0)) : 4 === id ? this.a5E(1, player, player) : 5 === id ? 2 === af.a2I[player] || b8.fv.jD(aC.eK) || (function(id, la) {
			var aA, a5P = 0,
				ea = a4h.length;
			for (aA = 0; aA < ea; aA++)
				if (a4h[aA].id === id && la <= ++a5P) return a4h.splice(aA, 1)
		}(1, 5), ae.a5G(player) ? a4t(180, L(49, [af.zS[player]]), 1, player, a4u(255, 200, 180), b9.me, -1, !0) : (a5C(573, 0), a4t(180, L(50, [af.zS[player]]), 573, player, b9.nN, b9.me, -1, !0))) : 18 === id ? a4t(255, L(51), 18, 0, b9.mh,
			b9.me, -1, !1) : 21 === id ? a4t(220, L(52), id, 0, b9.mh, b9.me, -1, !1) : 22 === id ? this.a5E(2, player, player) : 59 === id && a4t(0, L(53), id, 0, b9.ne, b9.me, 0, !1)
	}, this.a0B = function(p) {
		a4t(200, L(54, [p]), 94, 0, b9.mh, b9.nJ, -1, !1)
	}, this.zA = function(a5H) {
		if (aC.eK === a5H && !aC.k8)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4t(0, "Your Win Count is now " + __fx.wins.count, 3, a5H, b9.mh, b9.me, -1, !0);
		af.gN[a5H] && (aP.ix(a5H, 2), aC.jp < 100 ? a4t(0, L(48, [af.zS[a5H]]), 3, a5H, b9.mh, b9.me, -1, !0) : a4t(0, L(55, [af.zS[a5H]]), 3, a5H, b9.mh, b9.me, -1, !0))
	}, this.a4N = function(eE) {
		var a5J, pI, a5I = "(" + bK.ei(eE >> 2) + ", " + bK.ek(eE >> 2) + ")",
			a4y = !1,
			player = 0;
		ab.eV(eE) ? ab.eR(eE) ? a5I = L(56, [a5I]) : (player = ab.eS(eE), pI = L(57, [b8.x8.a1x(af.zY[player], b8.pb.rQ(0, 10), 150)]) + "   ", pI = (pI += L(58, [b8.zW.y9(af.gb[player])]) + "   ") + L(59, [b8.zW.y9(af.gN[player])]) + "   ", aC
				.hP && (a5J = be.zD[be.kB[be.eY[player]]], pI += L(60) + ": " + a5J + "   "), b8.fv.jD(player) && (pI += L(61) + ": " + aD.k0[aD.hE[player]] + "   "), a5I = pI = (pI += L(62, [player]) + "   ") + L(63, [a5I]), a4y = !0) : a5I = ab
			.ef(eE) ? L(64, [a5I]) + "   #" + ab.eI(eE) : L(65, [a5I]), bd.dc = !0, a5C(55, 0), a4t(220, a5I, 55, player, b9.mh, b9.me, -1, a4y)
	}, this.a4P = function(a5K) {
		var kX = bL.x,
			player = kX.a5L[a5K] >> 3,
			pI = (bd.dc = !0, a5C(55, 0), L(66, [af.zS[player]]) + "   ");
		a4t(220, pI += L(58, [kX.a5M[a5K]]), 55, player, b9.mh, b9.me, -1, !0)
	}, this.oD = function(o0, a5N, oE) {
		o0 === aC.eK ? a4t(175, " " + L(67, [af.zS[a5N]]) + ": ", 1001, a5N, a4u(200, 255, 210), b9.me, -1, !0, oE) : this.a5O(o0, oE)
	}, this.a5O = function(o0, oE) {
		a5C(1e3, 0), a4t(175, af.zS[o0] + ": ", 1e3, o0, b9.mh, "rgba(5,60,25,0.9)", -1, !0, oE)
	}, this.zG = function() {
		var p;
		aC.yw ? (p = L(68), aP.zE(L(69), 2, 1, 12), a4t(0, p, 40, 0, "rgb(10,220,10)", b9.me, -1, !1)) : (p = L(70), aP.zE(L(71), 2, 0, 16), a4t(0, p, 41, 0, b9.mh, b9.me, -1, !1))
	}, this.xF = function() {
		var g2 = af.zS,
			ed = aC.data;
		a4t(300, g2[0] + " [" + aC.z9.xK(ed.elo[0]) + "] vs " + g2[1] + " [" + aC.z9.xK(ed.elo[1]) + "]", 65, 0, b9.mY, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5Q = function(p) {
		a4t(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5R = function(a5S) {
		a4t(0, L(a5S ? 72 : 73), 247, 0, b9.nd, b9.me, -1, !1)
	}, this.xN = function(xJ, xM, a5T) {
		var ed = aC.data,
			g2 = af.zS;
		a4t(0, g2[0] + ": " + aC.z9.xK(ed.elo[0]) + " -> " + xJ, 66, 0, b9.mh, a5T[0], -1, !1), a4t(0, g2[1] + ": " + aC.z9.xK(ed.elo[1]) + " -> " + xM, 66, 1, b9.mh, a5T[1], -1, !1)
	}, this.oU = function(player, id) {
		0 === id ? a5D(50, player) ? (a4t(128, L(74, [af.zS[player]]), 52, player, a4u(180, 255, 180), b9.me, -1, !0), ae.pA(player, 2, 255)) : a4t(384, L(75, [af.zS[player]]), 51, player, a4u(210, 210, 255), b9.me, -1, !0) : a5D(51, player) ? (
			a4t(128, L(76, [af.zS[player]]), 52, player, b9.mh, "rgba(60,120,10,0.9)", -1, !0), ae.pA(player, 2, 255)) : (a4t(384, L(77, [af.zS[player]]), 50, player, b9.mh, "rgba(90,90,90,0.9)", -1, !0), ae.pA(player, 2, 96))
	}, this.oY = function(yf, target) {
		var color = a4u(210, 255, 210);
		1 < yf.length ? a4t(230, L(78, [yf.length, af.zS[target]]), 66, target, color, b9.me, -1, !0) : a4t(230, L(79, [af.zS[yf[0]], af.zS[target]]), 66, yf[0], color, b9.me, target, !0)
	}, this.a5U = function(player, target) {
		a4t(230, L(80, [af.zS[player], af.zS[target]]), 66, player, b9.mh, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4G = function(id, g2) {
		a5C(id, g2)
	}, this.yy = function(id, player) {
		a5D(id, void 0 === player ? aC.eX : player)
	}, this.a5V = function(id) {
		for (var aA = a4h.length - 1; 0 <= aA; aA--)
			if (a4h[aA].id === id) return a4h[aA];
		return null
	}, this.oP = function(a5W, a5X, player) {
		2 !== af.a2I[aC.eK] && (a4t(200, 1 === a5W ? L(81, [af.zS[player]]) : L(82, [b8.zW.y9(a5W), af.zS[player]]), 30, player, "rgb(190,255,190)", b9.me, -1, !0), a5X) && a4t(30, 1 === a5X ? L(83) : L(84, [b8.zW.y9(a5X)]), 30, 0, b9.mh, b9.me,
			-1, !1)
	}, this.a5Z = function(a5W, player) {
		2 !== af.a2I[aC.eK] && (a5C(31, 0), 2 === af.a2I[player] || player >= aC.jp ? a4t(150, 1 === a5W ? L(85, [af.zS[player]]) : L(86, [af.zS[player], b8.zW.y9(a5W)]), 31, player, b9.mY, "rgba(205,205,205,0.9)", -1, !0) : a4t(150, 1 === a5W ?
			L(87, [af.zS[player]]) : L(88, [af.zS[player], b8.zW.y9(a5W)]), 31, player, b9.mY, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yx = function(bp) {
		for (var ev = bd.jm(), aA = 2; 0 <= aA; aA--) 0 < a4l.th[aA] && (bp || a4l.ev[aA] < ev - 220) && this.a5f(aA)
	}, this.a5f = function(id) {
		var pI, ea = a4l.th[id],
			player = a4l.yf[id];
		a4l.th[id] = 0, 1 === ea ? (0 === id ? pI = L(95, [af.zS[player], af.zS[a4l.a4q[0]]]) : 1 === id ? pI = L(96, [af.zS[player]]) : 2 === id ? pI = L(97, [af.zS[player]]) : 3 === id && (pI = L(98, [af.zS[player]])), a5C(7, 0), a4t(a4l.lx[
			id], pI, 7, a4l.a4q[id], b9.mh, b9.me, -1, !0)) : (pI = L(0 === id ? 99 : 1 === id ? 100 : 101, [ea]), a5C(7, 0), a4t(a4l.lx[id], pI, 7, player, b9.mh, b9.me, -1, !1))
	}, this.a5E = function(id, gz, vh) {
		var ev = bd.jm(),
			ea = a4l.th[id] + 1;
		a4l.th[id]++, a4l.yf[id] = gz, a4l.a4q[id] = vh, 1 === ea && (a4l.ev[id] = ev), (1 === ea && (aC.yu < 32 || 2 === aC.yr) || 1 < ea && (a4l.ev[id] < ev - 140 || 2 === aC.yr)) && this.a5f(id)
	}, this.ij = function() {
		b0.ij();
		for (var hj = (hj = a4h.length - a4m) <= 1 ? 1 : hj * hj, aA = a4h.length - 1; 0 <= aA; aA--) 0 < a4h[aA].e9 && (a4h[aA].e9 -= hj, a4h[aA].e9 <= 0) && (bd.dc = !0, a4h.splice(aA, 1));
		! function() {
			var g2, aA;
			if (128 !== a4n && !(++a4n < 128))
				for (g2 = 5, aA = ak.jq - 1; 0 <= aA; aA--) 1 === af.a2I[ak.jr[aA]] && 0 < g2-- && a4t(240, L(98, [af.zS[ak.jr[aA]]]), 1, ak.jr[aA], b9.mY, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yx(!1)
	}, this.ti = function() {
		for (var w8, ej = x4(), aA = a4h.length - 1; 0 <= aA; aA--) w8 = ej - (aA + 1) * j, 50 === a4h[aA].id ? (tj.drawImage(a4h[aA].canvas, h.i - a4h[aA].i - a4k - a4i, w8), tj.drawImage(a4o, h.i - a4k - a4i, w8)) : tj.drawImage(a4h[aA].canvas,
			h.i - a4h[aA].i - a4i, w8)
	}
}

function cA() {
	var a5h, a5i, a5j, i, j, font, pI;

	function a5o(a5p) {
		return a5p < 10 ? "0" + a5p : String(a5p)
	}
	this.dU = function() {
		pI = L(102)
	}, this.resize = function() {
		i = Math.floor((z.a0.qz() ? .53 : .36) * h.pd), j = Math.floor(.065 * i), font = b8.pb.rQ(1, Math.floor(.9 * j)), a5j--, this.setTime()
	}, this.ij = function() {
		this.setTime() && (bd.dc = !0)
	}, this.setTime = function() {
		for (var di = new Date, a5k = di.getUTCMinutes(), a5l = di.getUTCSeconds(), a5m = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5n = (a5i = 3600 - 60 * a5k - a5l, a5i %= 300, 300), aA = 0; aA < a5m.length; aA++)
			if ((60 * a5k + a5l + a5i) % 3600 == 60 * a5m[aA]) {
				a5n = 0;
				break
			} return a5i += a5n, a5h = pI + a5o(Math.floor(a5i / 60)) + ":" + a5o(a5i % 60), a5j !== (a5j = 60 * a5k + a5l) && (i = aP.measureText(a5h, font), i += Math.floor(.4 * j), !0)
	}, this.ti = function() {
		tj.lineWidth = 1 + Math.floor(j / 15), tj.translate(h.i - j, Math.floor(.5 * (h.j + i))), tj.rotate(-Math.PI / 2), tj.fillStyle = b9.mh, tj.fillRect(0, 0, i, j), tj.strokeStyle = b9.mY, tj.strokeRect(0, 0, i, j + 10), tj.fillStyle = b9
			.mY, tj.font = font, b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 1), tj.fillText(a5h, Math.floor(i / 2), Math.floor(.59 * j)), tj.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4h, a5q, a4U, j, a5r;

	function a5t(aA) {
		var a5v = !0,
			hf = b9.mh,
			i = (a4h[aA].j0 === aC.eX ? a4h[aA].x8.fillStyle = b9.ms : (ab.a5w(a4h[aA].j0), a4h[aA].x8.fillStyle = b8.color.mb(bM.f9[0], bM.f9[1], bM.f9[2], .87), 400 < b8.pk.a1P(bM.f9, 0, 2) && (a5v = !1, hf = b9.mY)), a4h[aA].canvas.width),
			rx = (a4h[aA].x8.clearRect(0, 0, i, j), a4h[aA].x8.fillRect(0, 0, i, j), a4h[aA].x8.fillStyle = hf, ! function(x8, i, j) {
				x8.fillRect(0, 0, i, 1), x8.fillRect(0, j - 1, i, 1), x8.fillRect(0, 0, 1, j), x8.fillRect(i - 1, 0, 1, j)
			}(a4h[aA].x8, i, j), a5q + 2 * j < i && (a4h[aA].x8.fillRect(i - a5q - j, 0, 1, j), a4h[aA].x8.fillText(af.zS[a4h[aA].j0], Math.floor((i - a5q) / 2), Math.floor(.57 * j))), 0 !== a4h[aA].id ? 0 : j);
		a4h[aA].x8.fillText(b8.zW.y9(a4h[aA].hE), Math.floor(i - a5q / 2 - rx), Math.floor(.57 * j)),
			function(aA, i, rx, a5v) {
				a4h[aA].x8.fillStyle = a5v ? b9.mj : b9.mf;
				a5v = Math.floor(a5q * a4h[aA].hE / a4h[aA].a62);
				a4h[aA].x8.fillRect(Math.floor(i - a5q - rx), j - a5r, a5v, a5r)
			}(aA, i, rx, a5v), 0 === a4h[aA].id ? (a5z(aA, i, a5v, hf), function(aA, i, a5v) {
				a4h[aA].x8.strokeStyle = a5v ? b9.mz : b9.n9, a4h[aA].x8.fillRect(j, 0, 1, j);
				a5v = i - j;
				a4h[aA].x8.beginPath(), a4h[aA].x8.moveTo(Math.floor(.3 * j + a5v), Math.floor(j / 2)), a4h[aA].x8.lineTo(Math.floor(j - .3 * j + 0 + a5v), Math.floor(j / 2)), a4h[aA].x8.stroke(), a4h[aA].x8.beginPath(), a4h[aA].x8.moveTo(Math
					.floor(j / 2 + a5v), Math.floor(.3 * j)), a4h[aA].x8.lineTo(Math.floor(j / 2 + a5v), Math.floor(j - .3 * j + 0)), a4h[aA].x8.stroke()
			}(aA, i, a5v)) : a5z(aA, 2 * j, a5v, hf)
	}

	function a5z(aA, i, a5v, hf) {
		a4h[aA].x8.strokeStyle = a4h[aA].a63 ? b9.mq : a5v ? b9.nF : b9.nG, a4h[aA].x8.fillStyle = hf, a4h[aA].x8.fillRect(i - j, 0, 1, j), a4h[aA].x8.lineWidth = Math.max(Math.floor(j / 12), 3), a4h[aA].x8.lineCap = "round";
		a5v = .35;
		i = j + 1, a4h[aA].x8.beginPath(), a4h[aA].x8.moveTo(Math.floor(i - a5v * j + 0), Math.floor(a5v * j)), a4h[aA].x8.lineTo(Math.floor(i - j + a5v * j), Math.floor(j - a5v * j + 0)), a4h[aA].x8.stroke(), a4h[aA].x8.beginPath(), a4h[aA].x8
			.moveTo(Math.floor(i - j + a5v * j), Math.floor(a5v * j)), a4h[aA].x8.lineTo(Math.floor(i - a5v * j + 0), Math.floor(j - a5v * j + 0)), a4h[aA].x8.stroke()
	}

	function a6D(ea) {
		for (var hE, aA = ea - 1; 0 <= aA; aA--) hE = ac.fm(aC.eK, aA), a4h[aA].hE !== hE && (a4h[aA].hE = hE, a4h[aA].a62 = hE > a4h[aA].a62 ? hE : a4h[aA].a62, a4h[aA].a5u = !0)
	}

	function a5s(a6F) {
		a6F.canvas = document.createElement("canvas"), bQ.vS.font = a4U;
		var i = a5q;
		a6F.j0 < aC.eX && 0 === a6F.id && (i += Math.floor(bQ.vS.measureText(af.zS[a6F.j0] + "000").width)), i += j, 0 === a6F.id && (i += j), a6F.canvas.width = i, a6F.canvas.height = j, a6F.x8 = a6F.canvas.getContext("2d", {
			alpha: !0
		}), a6F.x8.font = a4U, b8.pb.textBaseline(a6F.x8, 1), b8.pb.textAlign(a6F.x8, 1)
	}

	function a69(aA) {
		return aT.a6H() ? h.i - a4h[aA].canvas.width - ba.gap : aT.eh
	}

	function a6A(aA) {
		return Math.floor(2 * ba.gap + (aT.a6H() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dU = function() {
		a4h = [], this.resize()
	}, this.resize = function() {
		a4U = aM.a4U, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qz() && (j = Math.floor(1.25 * j)), a5r = Math.floor(.15 * j), bQ.vS.font = a4U, a5q = Math.floor(bQ.vS.measureText("02 000 000 0000").width);
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a5s(a4h[aA]), a5t(aA)
	}, this.lR = function() {
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].a5u && (a4h[aA].a5u = !1, a5t(aA))
	}, this.gn = function(ks, kt) {
		if (2 !== aC.yr && 0 !== af.lf[aC.eK] && !aC.gj && !b8.fv.jD(aC.eK))
			for (var a64, a65, a66, a67 = z.a0.qz() ? j : 0, a68 = z.a0.qz() ? Math.floor(.15 * j) : 0, aA = a4h.length - 1; 0 <= aA; aA--)
				if (a64 = a69(aA), a65 = a6A(aA), a66 = a4h[aA].canvas.width, a65 - a68 <= kt && kt <= a65 + j + a68) {
					if (a64 - a67 <= ks && ks <= a64 + j + a67) return a4h[aA].a63 || (a4h[aA].a5u = !0, a4h[aA].a63 = !0, 0 === a4h[aA].id && b6.gw.oB(a4h[aA].j0)), !0;
					if (0 === a4h[aA].id && a64 + a66 - j - a67 <= ks && ks <= a64 + a66 + a67) return bT.a4A(3), b6.gw.h7(aQ.h1(), a4h[aA].j0), !0
				} return !1
	}, this.ij = function() {
		var ea;
		0 === af.lf[aC.eK] || b8.fv.jD(aC.eK) && !aC.gj || (function(ea) {
			if (a4h.length !== ea) return 1;
			for (var aA = ea - 1; 0 <= aA; aA--)
				if (a4h[aA].id !== ac.fg(aC.eK, aA) || a4h[aA].j0 !== ac.fl(aC.eK, aA)) return 1;
			return
		}(ea = ac.ff(aC.eK)) && function(ea) {
			var aA, id, j0, eu, hE, a4v = [];
			loop: for (aA = 0; aA < ea; aA++) {
				for (id = ac.fg(aC.eK, aA), j0 = ac.fl(aC.eK, aA), eu = 0; eu < a4h.length; eu++)
					if (a4h[eu].id === id && a4h[eu].j0 === j0) {
						a4v.push(a4h.splice(eu, 1)[0]);
						continue loop
					} hE = ac.fm(aC.eK, aA), a5s(hE = {
					j0: j0,
					hE: hE,
					a62: hE,
					id: id,
					a5u: !0,
					a63: !1,
					canvas: null,
					x8: null
				}), a4v.push(hE)
			}
			a4h = a4v
		}(ea), a6D(ea))
	}, this.a6G = function(g7) {
		for (var ea = Math.min(a4h.length, ac.ff(aC.eK)), aA = 0; aA < ea; aA++)
			if (a4h[aA].j0 === g7) return void(a4h = [])
	}, this.ti = function() {
		if (0 !== af.lf[aC.eK] && (!b8.fv.jD(aC.eK) || aC.gj))
			for (var aA = a4h.length - 1; 0 <= aA; aA--) tj.drawImage(a4h[aA].canvas, a69(aA), a6A(aA))
	}
}

function cC() {
	var a4h, ju, a6I, a6J, j, a4U, fontSize, a6K, a6L, a6M, a6N, canvas, x8, ls, a6O;

	function u0(aA) {
		return L(0 === aA ? 103 : 1 === aA ? 104 : 2 === aA ? 105 : 106)
	}

	function a6V() {
		tj.drawImage(canvas, ba.gap + (aC.hP ? ba.gap + bf.a6W() : 0), a6X + 2 * ba.gap)
	}

	function a6P() {
		canvas.width = a4h[0].width + a6M, canvas.height = j + a6M, (x8 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4h[0].width + a6M, j + a6M), x8.translate(Math.floor(a6M / 2), Math.floor(a6M / 2)), x8.lineWidth = a6M, x8.fillStyle = 1 === a4h[0].a6U ? b9.mm : b9.me, a6Y(), x8.fill(), x8.strokeStyle = 1 === a4h[0].a6U ? b9.mY :
			b9.mh, a6Y(), x8.stroke(), b8.pb.textAlign(x8, 1), b8.pb.textBaseline(x8, 1), x8.fillStyle = 1 === a4h[0].a6U ? b9.mY : b9.mh, x8.font = a4U[0], x8.fillText(u0(a4h[0].a6T), Math.floor(a4h[0].width / 2), Math.floor(.72 * a6K[0] * j)), x8
			.font = a4U[1], x8.fillText(a4h[0].pI, Math.floor(a4h[0].width / 2), Math.floor((a6K[0] + .48 * a6K[1]) * j))
	}

	function a6Y() {
		x8.beginPath(), x8.moveTo(a6N, 0), x8.lineTo(a4h[0].width - a6N, 0), x8.lineTo(a4h[0].width, a6N), x8.lineTo(a4h[0].width, j - a6N), x8.lineTo(a4h[0].width - a6N, j), x8.lineTo(a6N, j), x8.lineTo(0, j - a6N), x8.lineTo(0, a6N), x8.closePath()
	}
	this.dU = function() {
		ju = 4, a6I = a6J = ls = 0, a4h = [], a4U = new Array(2), fontSize = new Array(2), (a6K = new Array(2))[0] = .3, a6K[1] = .7, a6L = new Array(4), canvas = document.createElement("canvas"), a6O = bd.e9 + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qz() ? .0725 : .058) * h.pd), fontSize[0] = Math.floor(.85 * a6K[0] * j), fontSize[1] = Math.floor(.85 * a6K[1] * j), a4U[0] = b8.pb.rQ(1, fontSize[0]), a4U[1] = b8.pb.rQ(1, fontSize[1]), aA = a6L.length -
			1; 0 <= aA; aA--) a6L[aA] = this.measureText(u0(aA) + "000", a4U[0]);
		if (a6M = Math.floor(1 + .05 * j), a6N = Math.floor(.2 * j), 0 < a4h.length) {
			for (aA = a4h.length - 1; 0 <= aA; aA--) i = this.measureText(a4h[aA].pI + "00", a4U[1]), a4h[aA].width = i < a6L[aA] ? a6L[aA] : i;
			a6P()
		}
	}, this.ij = function() {
		0 !== ju && (4 === ju ? bd.e9 > a6O && (ju = 0, 1 === aC.yr) && aP.zE(bQ.vM.vN[bQ.eG].name, 3, 1, 9) : (1 === ju ? (0 === a6I && (a6P(), a6I = 1e-4), 1 <= (a6I += .002 * (bd.e9 - ls)) && (a6J = 0, ju = 2, a6I = 1), bd.dc = !0) : 2 ===
			ju ? ((a6J += (bd.e9 - ls) / 1e3) > a4h[0].lx || 1 < a6J && 1 < a4h.length) && (ju = 3) : 3 === ju && ((a6I -= .002 * (bd.e9 - ls)) <= 0 && (a6I = 0, a4h.shift(), ju = 0 < a4h.length ? 1 : 0), bd.dc = !0), ls = bd.e9))
	}, this.measureText = function(pI, a4U) {
		return tj.font = a4U, Math.floor(tj.measureText(pI).width)
	}, this.ix = function(a6S, aA) {
		this.zE(af.zS[a6S], aA, 1, 0 === aA ? 3 : 7)
	}, this.zE = function(pI, a6T, a6U, lx) {
		var i;
		pI.length && (i = (i = this.measureText(pI + "00", a4U[1])) < a6L[a6T] ? a6L[a6T] : i, a4h.push({
			pI: pI,
			width: i,
			a6T: a6T,
			a6U: a6U,
			lx: lx
		}), 0 === ju) && (a6I = 0, ju = 1, ls = bd.e9)
	}, this.ti = function() {
		0 !== ju && 0 !== a6I && (a6I < 1 ? (tj.globalAlpha = a6I, a6V(), tj.globalAlpha = 1) : a6V())
	}
}

function ck() {
	var j, canvas, x8, a6Z, a6a, a6b, a6c, a5u, a6d, a6e, a6f, a6g, a5S = !1,
		a1l = (this.hH = !1, this.i = 0, new Array(2)),
		a6h = 0;

	function lS() {
		var i = au.i,
			kX = (a5u = !1, x7(x8, i, j), Math.floor(i / 2));
		1 === a6Z ? (x8.fillStyle = b9.n1, x8.fillRect(kX, 0, kX, j)) : -1 === a6Z && (x8.fillStyle = b9.nH, x8.fillRect(0, 0, kX, j)), x9(x8, i, j, 2);
		var kX = (kX = Math.floor(.25 * j)) < 2 ? 2 : kX,
			a5b = (x8.fillStyle = b9.mn, Math.floor((j - 4) * a6a[1] / a6b[1]));
		0 < a5b && x8.fillRect(2, j - 2 - a5b, kX, a5b), 0 < (a5b = Math.floor((j - 4) * a6a[0] / a6b[0])) && x8.fillRect(i - 2 - kX, j - 2 - a5b, kX, a5b);
		kX = (kX = Math.floor(j / 8)) < 2 ? 2 : kX, xB(x8, Math.floor(.4 * j), 0, j, kX, .5, !1), xB(x8, Math.floor(i - 1.4 * j), 0, j, kX, .5, !0), a5b = 1.1 * j / a1l[0].width;
		x8.imageSmoothingEnabled = !0, x8.setTransform(a5b, 0, 0, a5b, (i - a5b * a1l[0].width) / 2, -.05 * j), x8.drawImage(a1l[+a5S], 0, 0), x8.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6m() {
		a6g = -1, a5S = ag.a6n(), aM.a3F(257), aM.a5R(a5S), au.hH = !0, a5u = !0, a6d = 360;
		for (var f2, di = 0, aA = ak.jq - 1; 0 <= aA; aA--) b8.fv.jD(ak.jr[aA]) || (di += af.gN[ak.jr[aA]]);
		a5S ? a6b[0] = Math.max(bJ.dj(3 * di, 4), 1) : aC.hP ? 9 === aC.k6 && 8 === be.kB[bf.l1()] ? a6b[0] = Math.max(di, 1) : (f2 = bJ.dj(100 * bf.a2j(), aC.jZ), f2 = bJ.p9(200 - 2 * f2, 40, 100), f2 = bJ.dj(f2 * di, 100), a6b[0] = Math.max(f2,
			1)) : a6b[0] = Math.max(bJ.dj(3 * di, 5), 1), a6b[1] = Math.max(di - a6b[0], 1)
	}

	function a6i() {
		a6f = bd.jm(), a5u = !0, a6d = a6Z = 0, a6c = [], au.hH = !1, aM.yy(247), a6a[0] = a6a[1] = 0, aM.a3F(673)
	}

	function x4() {
		return aQ.a56(aM.a52()) ? __fx.settings.keybindButtons ? aQ.ej - 2 * (j + ba.gap) : aQ.ej - j - ba.gap : bA.a56(aM.a55()) ? bA.x4() - j - ba.gap : h.j - j - bi.a3s() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1l[aA] = b8.canvas.xe(aa.get(3), 8 - aA, b9.nq), a1l[aA] = b8.canvas.a1n(a1l[aA])
	}, this.dU = function() {
		a6f = -1e4, a6e = a6h = 0, a6g = -1, this.hH = !1, a5u = a5S = !1, a6a = [a6Z = a6d = 0, 0], a6b = [1, 1], a6c = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x8 = canvas.getContext("2d", {
			alpha: !0
		}), lS()
	}, this.lR = function() {
		a5u && lS()
	}, this.gn = function(eh, ej) {
		return !!this.hH && !(eh < h.i - this.i - ba.gap || ej < x4() || (aC.gj || this.hI(aC.eK) && (aL.gk && aL.a11(), b6.gw.hJ(eh > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ij = function() {
		0 < a6e ? 0 === --a6e && a6i() : this.hH ? 180 == --a6d && 3 * a6a[0] < a6b[0] ? a6i() : a6a[0] >= a6b[0] ? a5S ? bP.yU.ym() : bP.yU.yq() : a6a[1] >= a6b[1] ? a6e = 4 : a6d <= 0 && a6i() : ! function() {
			var a6p = bd.jm();
			if (a6p % 40 == 14) {
				if (a6h) return !(a6p < a6h) && !(a6p < a6f + 535) && (a6h = a6p + 1071, b8.fv.a2L()) ? (a6m(), 1) : 0;
				(1 === ak.jq || (aC.hP ? bf.a2j() : af.gN[l4[0]]) >= bJ.dj(96 * aC.jZ, 100)) && (a6h = a6p + 535)
			}
			return
		}() && 0 <= a6g && (aM.zF(250, L(107, [af.zS[a6g]]), 673, a6g, b9.mh, b9.me, -1, !0), a6m())
	}, this.ys = function() {
		this.hH && a6a[0] < a6b[0] && a6i()
	}, this.pB = function(player, a6q) {
		var a6r = L(a6q ? 108 : 109, [af.zS[player]]),
			a6r = (aM.zF(450, a6r, 257, player, a6q ? b9.mz : b9.nE, b9.me, -1, !0), a6c.push(player), a5u = !0, aC.k8 ? Math.max(a6b[0], a6b[1]) : af.gN[player]),
			a6r = Math.max(a6r, 1);
		a6q ? a6a[0] += a6r : a6a[1] += a6r, player === aC.eK && (a6Z = a6q ? 1 : -1)
	}, this.ti = function() {
		var ej;
		this.hH && (ej = x4(), tj.drawImage(canvas, h.i - this.i - ba.gap, ej))
	}, this.hK = function(player) {
		return !(!aC.k8 && bd.jm() < a6f + 140 || 0 !== a6d || !b8.fv.gl(1) || !b8.fv.gm(player) || 10 <= ja[player] && !b8.fv.a2e(player, 9))
	}, this.hI = function(g7) {
		if (!b8.fv.gl(1)) return !1;
		if (!b8.fv.gm(g7)) return !1;
		if (!this.hH) return !1;
		for (var aA = a6c.length - 1; 0 <= aA; aA--)
			if (a6c[aA] === g7) return !1;
		return !0
	}, this.hG = function(player) {
		a6g = player
	}
}

function cD() {
	var i, eh, a6s, canvas, x8, hH, i9, a36, a4U, a5u, a6t = 11 / 12;

	function a6v() {
		var a61 = Math.floor(i9 * (i - 2 * a6s)),
			a6y = 1 + Math.floor(.0625 * aQ.j),
			a6z = 1 + Math.floor(.3 * aQ.j),
			a70 = Math.floor(.55 * aQ.j);
		x8.clearRect(0, 0, i, aQ.j), x8.fillStyle = b9.md, x8.fillRect(0, 0, a6s, aQ.j), x8.fillRect(a6s + a61, 0, i - a6s - a61, aQ.j), x8.fillStyle = i9 < 1 / 3 ? "rgba(" + Math.floor(3 * i9 * 130) + ",130,0,0.85)" : i9 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (i9 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i9 - 2 / 3) * 130) + ",0.85)", x8.fillRect(a6s, 0, a61, aQ.j), x8.fillStyle = b9.mh, x8.fillRect(0, 0, i, 1), x8.fillRect(0, aQ.j - 1, i, 1), x8
			.fillRect(0, 0, 1, aQ.j), x8.fillRect(a6s, 0, 1, aQ.j), x8.fillRect(a6s + a61, 0, 1, aQ.j), x8.fillRect(i - a6s, 0, 1, aQ.j), x8.fillRect(i - 1, 0, 1, aQ.j), x8.fillRect(Math.floor(.25 * aQ.j) + a6z, Math.floor((aQ.j - a6y) / 2), aQ.j -
				2 * a6z, a6y), x8.fillRect(Math.floor(i - 1.25 * aQ.j) + a6z, Math.floor((aQ.j - a6y) / 2), aQ.j - 2 * a6z - a6z % 2, a6y), x8.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6y) / 2), a6z, a6y, aQ.j - 2 * a6z - a6z % 2),
			a36 = b8.fv.i8(aC.eK, aQ.h1()), x8.fillText(b8.zW.y9(a36) + " (" + b8.zW.a2z(100 * i9, +(i9 < .1)) + ")", Math.floor(.5 * i), a70)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i9 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0x(arg1);

	function a75(a1K) {
		return !(1 < a1K && 1 === i9 || (1 < a1K && a1K * i9 - i9 < 1 / 1024 ? a1K = (i9 + 1 / 1024) / i9 : a1K < 1 && i9 - a1K * i9 < 1 / 1024 && (a1K = (i9 - 1 / 1024) / i9), i9 = bJ.p9(i9 * a1K, 1 / 1024, 1), a6v(), 0))
	}

	function a76(ks) {
		return i9 !== (i9 = bJ.p9((ks - eh - a6s) / (i - 2 * a6s), 1 / 1024, 1)) && (a6v(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a6v(), bd.dc = !0
	}, this.ej = 0, this.go = !1, this.dU = function() {
		hH = !aC.gv && !aC.gj, a5u = !1, i9 = .5, a36 = 0, this.go = !1, this.resize()
	}, this.resize = function() {
		z.a0.qz() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pd), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.qz() ? .65 : .389) * h.pd), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6s = Math.floor(3 * this.j / 2), a4U = b8
			.pb.rQ(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, tj), canvas.height = this.j, (x8 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4U, b8.pb.textBaseline(x8, 1), b8.pb.textAlign(x8, 1), this.a6u(), a6v()
	}, this.a6u = function() {
		eh = z.a0.qz() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.ej = h.j - this.j - bi.a3s() * ba.gap
	}, this.lR = function() {
		a5u && (a5u = !1, a6v())
	}, this.hH = function() {
		return !(!hH || aL.gk && eh < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a56 = function(a71) {
		return !!this.hH() && eh + i > h.i - a71 - ba.gap
	}, this.a3D = function() {
		hH = !aC.gj
	}, this.a6i = function() {
		hH = !1
	}, this.h1 = function() {
		return bJ.p9(Math.floor(1024 * i9 + .5) - 1, 0, 1023)
	}, this.a0u = function(ks, kt) {
		return this.hH() && eh < ks && ks < eh + i && kt > this.ej
	}, this.gn = function(ks, kt) {
		if (!this.hH()) return !1;
		if (!(__fx.settings.keybindButtons && kt > this.ej - Math.floor(ba.gap / 4) - this.j && kt < this.ej - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(ks - eh))) {
			if (!aQ.a0u(ks, kt)) return !1;
			aR.mC = !1, ! function(rD, ks, kt) {
				if (function(ks, kt) {
						return eh < ks && ks < eh + a6s && kt > aQ.ej
					}(ks, kt)) return a75(a6t);
				if (function(ks, kt) {
						return eh + i - a6s < ks && ks < eh + i && kt > aQ.ej
					}(ks, kt)) return a75(1 / a6t);
				return rD.go = !0, a76(ks)
			}(this, ks, kt) || (bd.dc = !0)
		}
		return !0
	}, this.a0x = function(mJ) {
		0 !== aC.yr && this.hH() && a75(mJ) && (bd.dc = !0)
	}, this.a0T = function(deltaY) {
		var mJ;
		return !(0 === deltaY || !this.hH()) && a75(mJ = 0 < deltaY ? (mJ = 400 / (400 + deltaY)) < a6t ? a6t : mJ : 1 / a6t < (mJ = (400 - deltaY) / 400) ? 1 / a6t : mJ)
	}, this.a0Q = function(ks) {
		return !!this.go && a76(ks)
	}, this.a0q = function() {
		this.go = !1
	}, this.ij = function() {
		this.hH() && a36 !== b8.fv.i8(aC.eK, this.h1()) && (a5u = !0)
	}, this.ti = function() {
		this.hH() && (tj.drawImage(canvas, eh, this.ej), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(tj, eh, this.ej)
	}
}

function cu() {
	var canvas, x8, a77, font, a78 = 0,
		a79 = !1,
		a7A = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a7B = 5;

	function a7H() {
		if (a79) {
			var aA, ea = a7A.length,
				a70 = Math.floor(.5 * a77.j),
				j = ea * a70,
				eh = Math.floor(Math.floor(a77.eh) + .3 * a77.i - .5),
				ej = Math.floor(Math.floor(a77.ej) - j),
				i = Math.floor(.4 * a77.i + 2.5);
			for (tj.fillStyle = b9.md, tj.fillRect(eh, ej, i, j), tj.fillStyle = b9.n6, tj.fillRect(eh, ej + a7B * a70, i, a70), tj.fillStyle = b9.mh, tj.fillRect(eh, ej, 2, j), tj.fillRect(eh, ej, i, 2), tj.fillRect(eh + i - 2, ej, 2, j), aA =
				1; aA < ea; aA++) tj.fillRect(eh, ej + aA * a70, i, 2);
			for (tj.fillStyle = b9.mh, b8.pb.textAlign(tj, 1), b8.pb.textBaseline(tj, 1), tj.font = b8.pb.rQ(0, .6 * a70), eh += .5 * i, aA = 0; aA < ea; aA++) tj.fillText(a7P(aA), eh, ej + (aA + .6) * a70)
		}
		tj.drawImage(canvas, Math.floor(a77.eh), Math.floor(a77.ej))
	}

	function lS(rD) {
		var eh, m7, m8, a70;
		x8.clearRect(0, 0, Math.floor(a77.i), Math.floor(a77.j)), x8.fillStyle = b9.md, x8.fillRect(0, 0, Math.floor(a77.i), Math.floor(a77.j)), aC.mA && (x8.fillStyle = b9.n6, x8.fillRect(0, 0, Math.floor(.3 * a77.i), Math.floor(a77.j))), x8
			.fillStyle = b9.mh, x8.fillText("Hide UI", .15 * a77.i, .5 * a77.j), x8.fillRect(Math.floor(.3 * a77.i - .5), 0, 2, Math.floor(a77.j)), eh = .5 * a77.i, x8.fillText("Replay Speed", eh, .31 * a77.j), x8.fillText(a7P(a7B), eh, .69 * a77.j),
			x8.fillRect(Math.floor(.7 * a77.i - .5), 0, 2, Math.floor(a77.j)), rD.a3k ? (eh = Math.floor(.02 * a77.i), rD = Math.floor(.025 * a77.i), m7 = Math.floor(.85 * a77.i - eh - .5 * rD), m8 = Math.floor(.25 * a77.j), a70 = Math.floor(a77.j) -
				2 * m8, x8.fillRect(m7, m8, eh, a70), x8.fillRect(m7 + eh + rD, m8, eh, a70)) : function() {
				var i = Math.floor(.46 * a77.j),
					j = Math.floor(.23 * a77.j),
					eh = Math.floor(.85 * a77.i - .5 * i + i / 12),
					ej = Math.floor(.5 * a77.j - j);
				x8.beginPath(), x8.moveTo(eh, ej), x8.lineTo(eh + i, ej + j), x8.lineTo(eh, ej + (j << 1)), x8.fill()
			}(), x8.fillRect(0, 0, Math.floor(a77.i), 2), x8.fillRect(0, 0, 2, Math.floor(a77.j)), x8.fillRect(0, Math.floor(a77.j) - 2, Math.floor(a77.i), 2), x8.fillRect(Math.floor(a77.i - 2), 0, 2, Math.floor(a77.j))
	}

	function a7P(aA) {
		return 5 === aA ? "Normal" : "" + a7A[aA]
	}
	this.a3k = !1, this.dU = function() {
		aC.gj && (a7B = 5, this.a3k = !1, a79 = !1, a77 = new qD([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a7C = function() {
		return a7A[a7B]
	}, this.x4 = function() {
		return a77.ej
	}, this.a56 = function(a71) {
		return !!aC.gj && a77.eh + a77.i > h.i - a71 - ba.gap
	}, this.resize = function() {
		aC.gj && (a77.resize(), a77.ej -= (bi.a3s() - 1) * ba.gap, font = b8.pb.rQ(0, .3 * a77.j), (canvas = document.createElement("canvas")).width = Math.floor(a77.i), canvas.height = Math.floor(a77.j), (x8 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pb.textAlign(x8, 1), b8.pb.textBaseline(x8, 1), lS(this))
	}, this.a10 = function(a7D) {
		0 === aC.yr || s.hH() || a7D !== aC.mA && (aC.mA = a7D, bf.resize(), bd.dc = !0, aC.gj) && (a78 = bd.e9 + 2e3, lS(this))
	}, this.gn = function(eh, ej) {
		if (!aC.gj) return !1;
		if (eh < a77.eh || ej < a77.ej || eh > a77.eh + a77.i) return a79 && function(rD, eh, ej) {
			var ea = a7A.length,
				a70 = Math.floor(.5 * a77.j),
				j = ea * a70,
				m7 = Math.floor(Math.floor(a77.eh) + .3 * a77.i - .5),
				j = Math.floor(Math.floor(a77.ej) - j),
				i = Math.floor(.4 * a77.i + 2.5);
			return a79 = !1, bd.dc = !0, eh < m7 || m7 + i < eh || ej < j || (a7B = a7G(0, Math.floor((ej - j) / a70), ea - 1), lS(rD)), !0
		}(this, eh, ej);
		if ((eh -= a77.eh) < .3 * a77.i) a79 = !1, this.a10(!aC.mA);
		else {
			if (eh < .7 * a77.i) return a79 = !a79, bd.dc = !0;
			this.a12(!1)
		}
		return !0
	}, this.a12 = function(a7F) {
		2 === aC.yr ? (this.a10(!1), s.t(3)) : (a79 = !1, this.a3k = !this.a3k, this.a3k ? (aL.gk && aL.a11(), z.a0.setState(1)) : a7F || aL.a4a(), bd.dc = !0, lS(this))
	}, this.a13 = function() {
		this.a3k = !1, aL.a4a(), bd.dc = !0, lS(this)
	}, this.a0j = function(eh, ej) {
		return !!aC.mA && (0 <= aL.gn(eh, ej) || (aC.gj ? ((bd.e9 > a78 || !this.gn(eh, ej)) && aR.gn(eh, ej), bd.dc = !0, a78 = bd.e9 + 2e3) : aR.gn(eh, ej)), !0)
	}, this.ij = function() {
		aC.gj && aC.mA && bd.e9 > a78 - 1e3 && bd.e9 < a78 && (bd.dc = !0)
	}, this.yz = function() {
		aC.gj && (this.a3k = !1, bd.dc = !0, lS(this))
	}, this.ti = function() {
		if (aC.gj) {
			if (aC.mA) {
				if (bd.e9 > a78) return;
				if (bd.e9 > a78 - 1e3) return tj.globalAlpha = a7G(0, (1e3 - (bd.e9 - (a78 - 1e3))) / 1e3, 1), a7H(), void(tj.globalAlpha = 1)
			}
			a7H()
		}
	}
}

function cE() {
	var a7Q, a7R, i, eh, ej, a7S, a7T;
	this.dU = function() {
		a7Q = new Array(2), a7R = new Array(2), this.mC = !1, a7T = a7S = iC = iA = 0, iB = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.qz() ? .072 : .0502) * h.pd)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7Q[aA] = document.createElement("canvas"), a7Q[aA].width = i, a7Q[aA].height = i, a7R[aA] = a7Q[aA].getContext("2d", {
			alpha: !0
		});
		this.a6u(),
			function() {
				for (var a7i = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7R[aA].clearRect(0, 0, i, i), a7R[aA].fillStyle = b9.ma, a7R[aA].beginPath(), a7R[aA].arc(i / 2, i / 2, i / 2 - a7i, 0, 2 * Math.PI), a7R[aA].fill(), a7R[aA]
					.lineWidth = a7i, a7R[aA].fillStyle = b9.mh, a7R[aA].strokeStyle = b9.mh, a7R[aA].beginPath(), a7R[aA].arc(i / 2, i / 2, i / 2 - a7i, 0, 2 * Math.PI), a7R[aA].stroke(), xB(a7R[aA], 0, 0, i, a7i, .3, 0 === aA)
			}()
	}, this.x3 = function() {
		return -iA / iB
	}, this.x4 = function() {
		return -iC / iB
	}, this.mM = function(a7X, hs) {
		iA = iB * a7X - hs
	}, this.mN = function(a7Y, ht) {
		iC = iB * a7Y - ht
	}, this.gn = function(a7W, a57) {
		return aC.mA || ! function(a7W, a57) {
			return Math.pow(a7W - (eh + i / 2), 2) + Math.pow(a57 - (ej + i / 2), 2) < i * i / 4 || Math.pow(a7W - (eh + i / 2), 2) + Math.pow(a57 - (ej + 2 * i), 2) < i * i / 4
		}(a7W, a57) || bh.e7.data[8].value ? (aG.mP() && (this.mC = !0, a7S = a7W, a7T = a57), !1) : a57 < ej + 1.25 * i ? this.a0T(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0T(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0Q = function(a7W, a57) {
		var a7Z, a7a, hv, hy;
		return !aG.mP() || (a7Z = iA, a7a = iC, iA += hv = a7S - a7W, iC += hy = a7T - a57, ae.a0Q(hv, hy), this.a7b(), a7S = a7W, a7T = a57, a7Z !== iA) || a7a !== iC
	}, this.a0T = function(ks, kt, deltaY) {
		var mJ;
		if (aG.mP()) {
			if (0 < deltaY) mJ = (mJ = 500 / (500 + deltaY)) < .5 ? .5 : mJ;
			else {
				if (!(deltaY < 0)) return !1;
				mJ = 2 < (mJ = (500 - deltaY) / 500) ? 2 : mJ
			}
			this.a7c(ks, kt, mJ), bd.dc = !0
		}
		return !0
	}, this.a7c = function(eh, ej, eE) {
		var a1K;
		eE = a1K = (a1K = 1024 < (a1K = eE) * iB ? 1024 / iB : a1K) * iB < .125 ? .125 / iB : a1K, ae.zoom(eE, eh, ej),
			function(a1K, ks, kt) {
				iB *= a1K, iA = (iA + ks) * a1K - ks, iC = (iC + kt) * a1K - kt, aR.a7b()
			}(eE, eh, ej)
	}, this.a7b = function() {
		var a7f = h.i / 16,
			hd = 0,
			a7g = h.j / 16,
			he = 0;
		iA < -h.i + a7f && (hd = -h.i + a7f - iA), iA > iB * bQ.el - a7f && (hd = iB * bQ.el - a7f - iA), iC < -h.j + a7g && (he = -h.j + a7g - iC), iC > iB * bQ.em - a7g && (he = iB * bQ.em - a7g - iC), iA += hd, iC += he, bY.mO(), ae.a7h(hd,
			he)
	}, this.a6u = function() {
		eh = h.i - i - ba.gap, ej = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ti = function() {
		bh.e7.data[8].value || (tj.drawImage(a7Q[0], eh, ej), tj.drawImage(a7Q[1], eh, Math.floor(ej + 3 * i / 2)))
	}
}

function cF() {
	var g, a7j, a7k, a7l, gap, a7m, a7n, a7o, a7p, a7q, a4U, a7r, ge, a7s, a61, a7t, a7u, a7v;

	function a7z() {
		a7l = Math.floor(.2 * (z.a0.qz() ? .07 : .035) * h.pd), a7l = a54(z.a0.qz() ? 3 : 1, a7l);
		var a82 = h.i / (g.length + gap);
		a7l = a7l < a82 ? a82 : a7l, a61 = Math.floor((1 - gap) * a7l), a7j = 0, a83()
	}

	function a83() {
		a7j = (a7j = a7j < -20 ? -20 : a7j) > (g.length - 15) * a7l ? (g.length - 15) * a7l : a7j, a7n = Math.floor(a7j / a7l), a7o = (a7o = a7n + Math.floor(h.i / a7l)) > g.length - 1 ? g.length - 1 : a7o, a7n = (a7n = a7o < a7n ? a7o : a7n) < 0 ?
			0 : a7n;
		var kX = a7o;
		a7m = a7k / g[kX];
		for (var aA = a7o - 1; a7n <= aA; aA--) g[aA] > g[kX] && (kX = aA, a7m = a7k / Math.pow(g[aA], a7s))
	}

	function a86(eh) {
		eh = Math.floor((a7j + h.i - eh - gap * a7l) / a7l);
		return (eh = eh < -1 ? -1 : -1 === eh ? 0 : eh > g.length - 1 ? -1 : eh) !== a7p && (a7p = eh, -1 === a7t && 0 === a7p && aS.a7w && (a7t = setInterval(a87, 100)), 1)
	}

	function a88(aA) {
		var a5r = Math.floor(a7m * Math.pow(g[aA], a7s));
		tj.fillRect(a7j + h.i - (aA + 1) * a7l, h.j - a5r, a61, a5r)
	}

	function a87() {
		var g7;
		0 !== (a7p = 8 === aZ.a04() ? -1 : a7p) ? (a7u = (new Date).getTime(), clearInterval(a7t), a7t = -1) : (g7 = g[1] / 864e3, -1 !== a7u && (g7 += ((new Date).getTime() - a7u) * g[1] / 864e5, a7u = -1), 0 < g7 && (g[0] += Math.floor(g7), bd
			.dc = !0))
	}
	this.a7w = !1, this.dU = function() {
		a7u = a7t = -1, a7p = -(a7s = 1), this.a7x = !1, ge = 0, a7r = new Date, a7j = 0, gap = .3, (a7v = []).push({
			g2: "Plateau A",
			ea: 0,
			e: 57
		}), a7v.push({
			g2: "Max A",
			ea: 1,
			e: 1
		}), a7v.push({
			g2: "Black Friday",
			ea: 15,
			e: 15
		}), a7v.push({
			g2: "Max B",
			ea: 19,
			e: 19
		}), a7v.push({
			g2: "Max C",
			ea: 44,
			e: 44
		}), a7v.push({
			g2: "First Android Version",
			ea: 58,
			e: 58
		}), a7v.push({
			g2: "Max D",
			ea: 67,
			e: 67
		}), a7v.push({
			g2: "The iFrame Explosion",
			ea: 98,
			e: 99
		}), a7v.push({
			g2: "The 155-Day Uptrend",
			ea: 58,
			e: 213
		}), a7v.push({
			g2: "Max E",
			ea: 213,
			e: 213
		}), a7v.push({
			g2: "Plateau B",
			ea: 214,
			e: 259
		}), a7v.push({
			g2: "Turbulent Times",
			ea: 260,
			e: 344
		}), a7v.push({
			g2: "Max F",
			ea: 262,
			e: 262
		}), a7v.push({
			g2: "Max G",
			ea: 282,
			e: 282
		}), a7v.push({
			g2: "Max H",
			ea: 333,
			e: 333
		}), a7v.push({
			g2: "The 19-Day Downtrend",
			ea: 283,
			e: 301
		}), a7v.push({
			g2: "Plateau C",
			ea: 345,
			e: 385
		}), a7v.push({
			g2: "The Alliance Ascent",
			ea: 386,
			e: 395
		}), a7v.push({
			g2: "Max I",
			ea: 395,
			e: 395
		}), a7v.push({
			g2: "First iOS Version",
			ea: 411,
			e: 411
		}), a7v.push({
			g2: "Plateau D",
			ea: 396,
			e: 453
		}), a7v.push({
			g2: "The TikTok Revolution",
			ea: 454,
			e: 470
		}), a7v.push({
			g2: "Max J",
			ea: 456,
			e: 456
		}), a7v.push({
			g2: "Max K",
			ea: 472,
			e: 472
		}), a7v.push({
			g2: "Max L",
			ea: 478,
			e: 478
		}), a7v.push({
			g2: "YT Drew",
			ea: 471,
			e: 485
		}), a7v.push({
			g2: "Plateau E",
			ea: 485,
			e: 600
		}), a7v.push({
			g2: "Uptrend A",
			ea: 600,
			e: 613
		}), a7v.push({
			g2: "Max M",
			ea: 613,
			e: 613
		}), a7v.push({
			g2: "Downtrend A",
			ea: 614,
			e: 635
		}), a7v.push({
			g2: "Plateau F",
			ea: 636,
			e: 737
		}), a7v.push({
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
		a7k = Math.floor(.15 * h.j), a7q = (a7q = Math.floor((z.a0.qz() ? .018 : .0137) * h.pd)) < 2 ? 2 : a7q, a4U = b8.pb.rQ(1, a7q), a7z()
	}, this.a80 = function(a81) {
		var aA;
		for (this.a7w = !0, aA = 0; aA < a81.length; aA++) g.unshift(a81[aA]);
		a7z(), bd.dc = !0
	}, this.a84 = function() {
		a83()
	}, this.a0Q = function(eh, ej) {
		ej > h.j - .6 * a7k ? this.a7x ? eh !== ge && (a7j += eh - ge, ge = eh, a83(), a86(eh), this.a7x = -1 !== a7p, bd.dc = !0) : a86(eh) && (bd.dc = !0) : this.qb()
	}, this.qb = function() {
		-1 !== a7p && (this.a7x = !1, a7p = -1, bd.dc = !0)
	}, this.a0T = function(eh, deltaY) {
		-1 !== a7p && (a7j += Math.floor(deltaY), a83(), a86(eh), bd.dc = !0)
	}, this.gn = function(eh, ej) {
		this.a0Q(eh, ej), -1 !== a7p && (ge = eh, this.a7x = !0)
	}, this.a0p = function() {
		-1 !== a7p && (this.a7x = !1)
	}, this.ti = function() {
		tj.fillStyle = b9.mk;
		for (var a8A, month, di, ry, a8D, a8E, m8, a8F, a8G, aA = a7o; a7n <= aA; aA--) a88(aA);
		this.a7w && 0 === a7n && (tj.fillStyle = b9.nH, a88(0)), -1 !== a7p && (tj.fillStyle = b9.mj, a88(a7p)), -1 !== a7p && (tj.font = a4U, b8.pb.textBaseline(tj, 2), (di = new Date).setTime(a7r.getTime() - 1e3 * a7p * 60 * 60 * 24), month =
			"month", a8A = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(di), a8A = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(di)), a8A = a8A + ", " + di.getUTCDate() + " " + month + " " + di.getFullYear(), month = 1 === g[a7p] ? L(110) : L(111), month = b8.zW.y9(g[a7p]) + " " + month, di = Math.floor(tj.measureText(a8A).width), ry = Math
			.floor(tj.measureText(month).width), a8D = Math.floor(.5 * (di + a7q)), a8E = (a8E = a7j + h.i - (a7p + 1) * a7l) < a8D ? a8D : a8E > h.i - a8D ? h.i - a8D : a8E, m8 = h.j - Math.floor(a7m * Math.pow(g[a7p], a7s)), a8F = Math
			.floor(1.1 * a7q), a8G = m8 > h.j - a8F ? h.j - a8F : m8, tj.fillStyle = b9.me, tj.fillRect(h.i - ry - a7q, a8G - a8F, ry + a7q, a8F), tj.fillRect(a8E - a8D, h.j - a8F, di + a7q, a8F), tj.fillStyle = b9.mh, b8.pb.textAlign(tj, 2),
			tj.fillText(month, Math.floor(h.i - .5 * a7q), a8G),
			function(m8, a8F) {
				for (var rx, kZ = -1, dx = g.length - a7p - 1, aA = a7v.length - 1; 0 <= aA; aA--) dx >= a7v[aA].ea && dx <= a7v[aA].e && (-1 === kZ || a7v[aA].e - a7v[aA].ea < a7v[kZ].e - a7v[kZ].ea) && (kZ = aA); - 1 !== kZ && (rx = Math
					.floor(tj.measureText(a7v[kZ].g2).width), tj.fillStyle = b9.me, tj.fillRect(h.i - rx - a7q, m8, rx + a7q, a8F), tj.fillStyle = b9.mh, tj.fillText(a7v[kZ].g2, Math.floor(h.i - .5 * a7q), m8 + a8F))
			}(a8G - 2 * a8F, a8F), b8.pb.textAlign(tj, 1), tj.fillText(a8A, a8E, h.j), tj.strokeStyle = b9.ml, tj.lineWidth = 1, tj.beginPath(), tj.moveTo(0, m8), tj.lineTo(h.i, m8), tj.closePath(), tj.stroke())
	}
}

function cG() {
	var a4U, i, ej, a8I, a8J, canvas, x8, a5u, a2R, a8K, a8L, a8M, a8N;
	this.eh = 0, this.j = 0, this.dU = function() {
		a8J = aC.a3L, a8L = "rgba(0,100,0,0.8)", a8M = "rgba(150,0,0,0.8)", a5u = a8K = !0, a2R = af.gb[aC.eK], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qz() ? .305 : .24) * h.pd), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4U = b8.pb.rQ(1, Math.floor(.8 * this.j)), a8N = Math.floor(.5 * this.j), bQ.vS.font = a4U, ej = ba.gap, a8I = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x8 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4U, b8.pb.textBaseline(x8, 1), b8.pb.textAlign(x8, 1), this.a8O()
	}, this.a6H = function() {
		return z.a0.qz() && h.i < 1.2 * h.j
	}, this.a6u = function() {
		this.a6H() ? this.eh = h.i - i - ba.gap : this.eh = Math.floor(aU.a8P() + (h.i - aU.a8P() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lR = function() {
		a5u && (a5u = !1, this.a8O())
	}, this.a8O = function() {
		x8.clearRect(0, 0, i, this.j), x8.fillStyle = a8K ? a8L : a8M, x8.fillRect(0, 0, i, this.j), x8.fillStyle = b9.mj, this.a8Q(), this.a8R(), x8.fillStyle = af.gb[aC.eK] >= ad.jV(aC.eK) ? b9.nE : b9.mh, x8.fillText(b8.zW.y9(a2R), Math.floor(
			i / 2), a8N), x8.fillStyle = b9.mh, x8.fillRect(0, 0, i, 1), x8.fillRect(0, 0, 1, this.j), x8.fillRect(0, this.j - 1, i, 1), x8.fillRect(i - 1, 0, 1, this.j)
	}, this.a8Q = function() {
		var ev = bd.jm() % 100,
			ev = (ev = 9 - bJ.dj(ev -= ev % 10, 10), Math.floor(ev * (this.j - a8I) / 9));
		x8.fillRect(0, ev, a8I, this.j - ev), x8.fillRect(i - a8I, ev, a8I, this.j - ev)
	}, this.a8R = function() {
		x8.fillRect(a8I, this.j - a8I, Math.floor((i - 2 * a8I) * af.gb[aC.eK] / a8J), a8I)
	}, this.ij = function() {
		var g7 = aC.eK;
		b8.fv.gm(g7) && (g7 = af.gb[g7] - af.a2Q[g7], a2R !== g7 ? (a8J = a54(g7, a8J), a8K = a2R < g7 && 10 <= g7, a2R = g7, a5u = !0) : bd.jm() % 10 == 9 && (a5u = !0))
	}, this.ti = function() {
		0 === af.lf[aC.eK] || aC.gv || 2 === af.a2I[aC.eK] || tj.drawImage(canvas, this.eh, ej)
	}
}

function cH() {
	var a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8g, a8h, a8i, a8j, a8k, a8l, a8m, a8n, position, a8o, a8p, a8q, a8r, a8s = 1,
		a8t = 1,
		a8u = "";
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

	function a8w() {
		a8Y.clearRect(0, 0, a8S, a6X),
			a8Y.fillStyle = b9.nX,
			a8Y.fillRect(0, 0, a8S, a8d),
			a8Y.fillStyle = b9.md,
			a8Y.fillRect(0, a8d, a8S, a6X - a8d);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			ja[aC.eK]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8n = -1;
		if (__fx.leaderboardFilter.enabled && a8n >= __fx.leaderboardFilter.filteredLeaderboard.length) a8n = -1;
		playerPos >= position && a8y(playerPos - position, b9.n6),
			0 !== ja[aC.eK] && 0 === position && a8y(0, b9.nc),
			-1 !== a8n && a8y(a8n, b9.mi),
			a8Y.fillStyle = b9.md,
			//console.log("drawing", a8n),
			a8Y.clearRect(0, a6X - __fx.leaderboardFilter.tabBarOffset, a8S, __fx.leaderboardFilter.tabBarOffset);
		a8Y.fillRect(0, a6X - __fx.leaderboardFilter.tabBarOffset, a8S, __fx.leaderboardFilter.tabBarOffset);
		a8Y.fillStyle = b9.mh,
			a8Y.fillRect(0, a8d, a8S, 1),
			a8Y.fillRect(0, a6X - __fx.leaderboardFilter.tabBarOffset, a8S, 1),
			__fx.leaderboardFilter.drawTabs(a8Y, a8S, a6X - __fx.leaderboardFilter.tabBarOffset, b9.n6),
			a8Y.fillRect(0, 0, a8S, ba.xs),
			a8Y.fillRect(0, 0, ba.xs, a6X),
			a8Y.fillRect(a8S - ba.xs, 0, ba.xs, a6X),
			a8Y.fillRect(0, a6X - ba.xs, a8S, ba.xs), a8Y.font = a8T, b8.pb.textBaseline(a8Y, 1), b8.pb.textAlign(a8Y, 1), a8Y.fillText(a8u, Math.floor((a8S + a8d - 22) / 2), Math.floor(a8b + a8U / 2));
		__fx.playerList.drawButton(a8Y, 12, 12, a8d - 22);
		var et, g8 = playerPos < position + a8W - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8W)
				position = (result.length > a8W ? result.length : a8W) - a8W;
			//if (position >= result.length) position = result.length - 1;
			for (a8Y.font = a8V, b8.pb.textAlign(a8Y, 0), et = a8W - g8; 0 <= et; et--) {
				const pos = result[et + position];
				if (pos !== undefined)
					a8z(l4[pos]), a90(et, pos, l4[pos]);
			}
			for (b8.pb.textAlign(a8Y, 2), et = a8W - g8; 0 <= et; et--) {
				const pos = result[et + position];
				if (pos !== undefined)
					a8z(l4[pos]), a91(et, l4[pos]);
			}
		} else {
			for (a8Y.font = a8V, b8.pb.textAlign(a8Y, 0), et = a8W - g8; 0 <= et; et--)
				a8z(l4[et + position]), a90(et, et + position, l4[et + position]);
			for (b8.pb.textAlign(a8Y, 2), et = a8W - g8; 0 <= et; et--)
				a8z(l4[et + position]), a91(et, l4[et + position]);
		}
		2 == g8 && (a8z(aC.eK), b8.pb.textAlign(a8Y, 0), a90(a8W - 1, ja[aC.eK], aC.eK), b8.pb.textAlign(a8Y, 2), a91(a8W - 1, aC.eK)), 0 === position && (g8 = .7 * a8e / aa.get(4).height, a8Y.setTransform(g8, 0, 0, g8, Math.floor(a8f + .58 * a8e +
			.5 * g8 * aa.get(4).width), Math.floor(a8b + a8U + .4 * a8e)), a8Y.imageSmoothingEnabled = !0, a8Y.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8Y.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8z(player) {
		aC.hP && (a8Y.fillStyle = be.a93[be.a94[player]])
	}

	function a8y(aA, a95) {
		a8Y.fillStyle = a95, aA = a8W - 1 < aA ? a8W - 1 : aA;
		a95 = Math.floor((aA === a8W - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8e), a95 = aA === a8W - 2 ? Math.floor(a8d + 9.15 * a8e) - Math.floor(a8d + 8.15 * a8e) : a95;
		a8Y.fillRect(0, Math.floor(a8d + (aA + (0 === aA ? 0 : .15)) * a8e), a8S, a95)
	}

	function a90(a97, a2g, aA) {
		a8Y.fillText(a8j[a2g], a8f, Math.floor(a8b + a8U + (a97 + .5) * a8e)), 1 === af.a2I[aA] && (a8Y.font = "italic " + a8V);
		a2g = Math.floor(a8b + a8U + (a97 + .5) * a8e);
		a8Y.fillText(af.zS[aA], a8g, a2g), 0 !== af.a2I[aA] && (a8Y.font = a8V), aA < aC.jp && 2 !== af.a2I[aA] || a8Y.fillRect(a8g, a2g + .35 * a8s, a8i[aA], Math.max(1, .1 * a8s))
	}

	function a91(a97, aA) {
		a8Y.fillText(af.gN[aA], a8h, Math.floor(a8b + a8U + (a97 + .5) * a8e))
	}

	function a9G(ej) {
		return (ej -= ba.gap + a8d) < 0 ? Math.floor(ej / a8e) - 1 : ej < (a8W - 1) * a8e ? Math.floor(ej / a8e) : ej < a6X - a8d ? a8W - 1 : (ej -= a6X - a8d, a8W + Math.floor(ej / a8e))
	}

	function xr(eh, ej) {
		return eh >= ba.gap && eh < ba.gap + a8S && ej >= ba.gap && ej < ba.gap + a6X
	}
	this.dU = function() {
			var aA;
			for (a8p = !1, a8r = a8q = a8o = 0, a8n = -1, a8W = z.a0.qz() ? 6 : 10, a8t = (position = 0) === (a8t = bh.e7.data[11].value) ? 10 : 1 === a8t ? 5 : 1, a8m = !1, a8k = new Uint16Array(a8W + 1), a8l = new Uint32Array(a8W + 1), a8a = aC.eX,
				l4 = new Uint16Array(a8a), ja = new Uint16Array(a8a), aA = a8a - 1; 0 <= aA; aA--) l4[aA] = aA, ja[aA] = aA;
			this.resize(!0), a8i = new Uint16Array(aC.eX);
			var a8v = Math.floor(a8S - a8g - a8f - a8Z);
			for (a8j = new Array(aC.eX), a8Y.font = a8V, aA = aC.eX - 1; 0 <= aA; aA--) a8j[aA] = aA + 1 + ".", af.zS[aA] = b8.x8.a1x(af.zY[aA], a8V, a8v), a8i[aA] = Math.floor(a8Y.measureText(af.zS[aA]).width);
			a8w()
		}, this.resize = function(dU) {
			if (a6X = z.a0.qz() ? (a8S = Math.floor(.335 * h.pd), Math.floor(a8W * a8S / 8)) : (a8S = Math.floor(.27 * h.pd), Math.floor(a8W * a8S / 10)), a8S = Math.floor(.97 * a8S), (a8X = document.createElement("canvas")).width = a8S, a8X.height =
				a6X, a8Y = a8X.getContext("2d", {
					alpha: !0
				}), a8b = .025 * a8S, a8U = .16 * a8S, a8c = 0 * a8S, a8d = Math.floor(.45 * a8b + a8U), a8e = (a6X - a8U - 2 * a8b - a8c) / a8W,
				a8X.height = a6X += a8e, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8e * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6X - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8S,
				a8T = b8.pb.rQ(1, Math.floor(.55 * a8U)), a8s = Math.floor((z.a0.qz() ? .67 : .72) * a8e), a8V = b8.pb.rQ(0, a8s), a8Y.font = a8V, a8f = Math.floor(.04 * a8S), a8g = Math.floor((z.a0.qz() ? .195 : .18) * a8S), a8Z = Math.floor(a8Y
					.measureText("00920600").width), a8Y.font = a8T, a8h = a8S - a8f, !dU) {
				a8Y.font = a8V;
				for (var aA = aC.eX - 1; 0 <= aA; aA--) a8i[aA] = Math.floor(a8Y.measureText(af.zS[aA]).width);
				a8w()
			}
			a8u = b8.x8.a1x(L(112), a8T, .96 * a8S)
		}, this.a8P = function() {
			return a8S
		}, this.lR = function(bp, a8x) {
			(a8x || a8m && (bp || bd.jm() % a8t == 0)) && (a8m = !1, a8w())
		}, this.ij = function() {
			! function() {
				for (var et = a8a - 1; 0 <= et; et--) 0 === af.lf[l4[et]] && ! function(et) {
					var a9E = l4[et];
					a8a--;
					for (var aA = et; aA < a8a; aA++) l4[aA] = l4[aA + 1], ja[l4[aA]] = aA;
					l4[a8a] = a9E, ja[l4[a8a]] = a8a
				}(et)
			}();
			for (var a9C, mP = a8a - 1, et = 0; et < mP; et++) af.gN[l4[et]] < af.gN[l4[et + 1]] && (a9C = l4[et], l4[et] = l4[et + 1], l4[et + 1] = a9C, ja[l4[et]] = et, ja[l4[et + 1]] = et + 1);
			! function() {
				for (var di = a8m, g8 = (a8m = !0, ja[aC.eK] >= a8W - 1 ? a8W - 2 : a8W - 1), aA = g8; 0 <= aA; aA--)
					if (a8k[aA] !== l4[aA] || a8l[aA] !== af.gN[l4[aA]]) return;
				(g8 != a8W - 2 || a8k[a8W] === ja[aC.eK] && a8l[a8W] === af.gN[aC.eK]) && (a8m = di)
			}();
			for (var aA = a8W - 1; 0 <= aA; aA--) a8k[aA] = l4[aA], a8l[aA] = af.gN[l4[aA]];
			a8k[a8W] = ja[aC.eK], a8l[a8W] = af.gN[aC.eK];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gn = function(eh, ej) {
			return !!xr(eh, ej) && ((__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8d - 22, a8d - 22) && __fx.playerList.display(af.zY), true) &&
				!(ej - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eh - ba.gap)) && (a8o = bd.e9, a8p = !0, a8q = a8r = a9G(ej), bH.a14() && (eh = a7G(-1, a8r, a8W), a8n !== (eh = eh === a8W ?
					-1 : eh)) && (a8n = eh, a8w(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8w(), bd.dc = !0;
		},
		this.a0Q = function(eh, ej) {
			if (__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8d - 22, a8d - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8w(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8w(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eh, ej, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eh - ba.gap
				)) return;
			var di, a9F = a9G(ej);
			return a8p ? (di = position, (position = a7G(0, position += a8q - a9F, aC.eX - a8W)) !== di && (a9F = (a9F = a7G(-1, a8q = a9F, a8W)) !== a8W && xr(eh, ej) ? a9F : -1, a8n = a9F, a8w(), bd.dc = !0), !0) : (a9F = (a9F = a7G(-1, a9F,
				a8W)) === a8W || !xr(eh, ej) || bH.a14() ? -1 : a9F, a8n !== a9F && (a8n = a9F, a8w(), bd.dc = !0))
		}, this.a0p = function(eh, ej) {
			if (!a8p) return !1;
			a8p = !1;
			var a9F = a9G(ej);
			var isEmptySpace = false;
			return bH.a14() && -1 !== a8n && (a8n = -1, a8w(), bd.dc = !0), bd.e9 - a8o < 350 && a8r === a9F && -1 !== (a9F = (a9F = a7G(-1, a9F, a8W)) !== a8W && xr(eh, ej) ? a9F : -1) && (eh = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l4[__fx.leaderboardFilter.filteredLeaderboard[a9F + position] ?? (isEmptySpace = true, ja[aC.eK])]) : l4[a9F + position]), a9F === a8W - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : ja[aC.eK]) >=
				position + a8W - 1 && (eh = aC.eK), !isEmptySpace && aC.hP && __fx.donationsTracker.displayHistory(eh, af.zY, aC.k8), 0 !== af.lf[eh] && !isEmptySpace) && aG.m1(eh, 800, !1, 0), !0
		}, this.a0T = function(eh, ej, deltaY) {
			var a9H;
			return !(a8p || aC.mA || (a9H = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xr(eh, ej)) || (eh = (eh = a7G(-1, a9G(ej), a8W)) === a8W || bH.a14() ? -1 : eh, 0 < deltaY ? position < aC.eX - a8W && (position += Math.min(aC.eX - a8W -
				position, a9H), a8n = eh, a8w(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a9H), a8n = eh, a8w(), bd.dc = !0), 0))
		}, this.ti = function() {
			tj.drawImage(a8X, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, x8, eh, ej, a5r, a9I, gap, a9J, fontSize, a9K, a9L, a9M, a9N, a9O, a9P, a9Q, a9R, a9S;

	function a9W() {
		x8.clearRect(0, 0, aV.i, aV.j), x8.fillStyle = b9.me, x8.fillRect(0, 0, aV.i, aV.j), x8.fillStyle = b9.n1, eE = 0 < a9Q ? a9Q : Math.sqrt(a9N[4] / 1e4), x8.fillRect(0, aV.j - a5r - 1, Math.floor(eE * aV.i), a5r), x8.fillStyle = b9.mh, x8
			.fillRect(0, 0, aV.i, 1), x8.fillRect(0, 0, 1, aV.j), x8.fillRect(aV.i - 1, 0, 1, aV.j), x8.fillRect(0, aV.j - 1, aV.i, 1), x8.fillRect(0, aV.j - a5r - 1, aV.i, 1);
		for (var eE, a9Y, di = 0, aA = 0; aA < a9M.length; aA++) a9O[aA] ? (b8.pb.textAlign(x8, 0), a9Y = Math.floor((a9I - a5r + 2 * a9J) * (aA - di + 1) / (a9M.length + 1) - .7 * a9J), x8.fillText(a9M[aA], gap, a9Y), b8.pb.textAlign(x8, 2), 5 ===
			aA && 0 !== af.lf[aC.eK] && af.gb[aC.eK] >= ad.jV(aC.eK) ? (x8.fillStyle = b9.na, x8.fillText(a9U(aA), aV.i - gap, a9Y), x8.fillStyle = b9.mh) : x8.fillText(a9U(aA), aV.i - gap, a9Y)) : di++
	}

	function a9U(aA) {
		return aA < 3 ? a9N[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zW.a2z(a9N[aA] / 100, 2) : aA < 7 ? b8.zW.y9(a9N[aA]) : aA === 7 ? aV.a9Z(a9N[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gN, aC.eK) : __fx.utils.getDensity(aC.eK)
	}

	function a9T() {
		af.gN[aC.eK] !== a9N[6] && (a9N[6] = af.gN[aC.eK], a9K++)
	}
	this.dU = function() {
		a9Q = a9R = 0, (a9L = new Array(8))[0] = L(113), a9L[1] = aC.k8 ? L(114) : L(115), a9L[2] = L(116), a9L[3] = L(117), a9L[4] = L(118), a9L[5] = L(119, 0, "Interest"), a9L[6] = L(120), a9L[7] = L(121),
			a9L.push("Max Troops", "Density"), // add a9L
			(a9M = new Array(a9L.length)).fill(""), (a9N = new Array(a9L.length))[0] = aC.k8 ? 0 : aC.jp, a9N[1] = aC.k8 ? ak.jq : aC.kA, a9N[2] = aC.yt, a9N[3] = 0, a9N[4] = bJ.dj(1e4 * af.gN[0], Math.max(aC.jZ, 1)), a9N[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dj(700 * aC.data.iIncomeValue, 64) : bJ.dj(700 * aC.data.iIncomeData[aC.eK], 64), a9N[6] = 0, a9T(), a9N[7] = 0, a9P = a9U(6), a9O = new Array(a9L.length);
		for (var aA = a9L.length - 1; 0 <= aA; aA--) a9O[aA] = !0;
		a9S = 0, a9S = aC.k8 ? (a9O[0] = !1, a9O[2] = !1, a9O[3] = !1, 3) : (a9O[3] = !1, 1), a9K = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qz() ? .1646 : .126) * 1.25 * h.pd), this.j = Math.floor(1.18 * this.i), a5r = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9J = .04 * this.i, a9I = this.j, this.j -= Math.floor(a9S * (this.j - 2 *
			a5r) / a9L.length), fontSize = Math.floor(.7 * (a9I - a5r) / a9L.length);
		var a4U = b8.pb.rQ(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4U, i) {
				for (var aA = 0; aA < a9M.length; aA++) a9M[aA] = b8.x8.a1x(a9L[aA], a4U, i)
			}((x8 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4U, .575 * this.i), b8.pb.textBaseline(x8, 1), x8.lineWidth = 1, this.a3E(), this.a6u(), aT.a6u(), a9W()
	}, this.a6u = function() {
		eh = h.i - this.i - ba.gap
	}, this.a9X = function() {
		ej = ba.gap
	}, this.a3E = function() {
		ej = ba.gap + (aT.a6H() && 0 !== af.lf[aC.eK] && !aC.gv ? aT.j + ba.gap : 0)
	}, this.lR = function(bp) {
		(bp || 100 <= a9K) && (a9K = 0, a9W())
	}, this.a49 = function() {
		return a9N[7]
	}, this.a9Z = function(value) {
		var kX = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kX) / 1e3);
		return value < 10 ? kX + ":0" + value : kX + ":" + value
	}, this.ij = function() {
		var a9i, per;
		a9O[0] && aC.yu - aC.yt !== a9N[0] && (a9N[0] = aC.yu - aC.yt, a9K++), ak.jq - a9N[0] !== a9N[1] && (a9N[1] = ak.jq - a9N[0], a9K++), this.lJ(), (a9i = ad.a9j(aC.eK)) !== a9N[5] && (a9N[5] = a9i, a9K++), a9T(), a9N[7] += bd.a9k, a9i =
			a9U(7), a9P !== a9i && (a9P = a9i, a9K += 100), a9i = aC.hP ? bf.a2j() : af.gN[l4[0]], per = bJ.dj(1e4 * a9i, Math.max(aC.jZ, 1)), a9N[3] = a9i, a9N[4] !== per && (a9K++, a9N[4] = per), 8 === aC.k6 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.fv.gm(aA)) return bP.yU.yq(), 1;
				return
			}() || a9N[3] < aC.jZ || ! function() {
				for (var aA = ak.jq - 1; 0 <= aA; aA--)
					if (0 < af.g1[ak.jr[aA]].length) return;
				return 1
			}() || bP.yU.yq()
	}, this.lJ = function() {
		a9O[2] && aC.yt !== a9N[2] && (a9N[2] = aC.yt, a9K++)
	}, this.a9l = function(aA) {
		var sF, a9m, di;
		return 2 !== aC.yr && (aA % 2 == 1 && (aU.lR(1, 1), bd.dc = !0), aA === aC.a3N ? (a9Q = 0, a9W(), !1) : (-1 !== aA || 0 !== a9R) && (a9m = a9Q, a9Q = aC.gj ? aA / aC.a3N : (di = performance.now(), 0 <= aA && (sF = di - 392 * aA, a9R =
			0 === aA || sF < a9R ? sF : a9R), 1 < (a9Q = (di - a9R) / (392 * aC.a3N)) ? 1 : a9Q), a9W(), a9Q !== a9m))
	}, this.ti = function() {
		tj.drawImage(canvas, eh, ej)
	}
}

function cJ() {
	var hH, a9n, i, j, a70, a9o, a9p, a6I, canvas, ls, a9q;

	function x4() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9q = hH = !1, a70 = .61, a9o = .07, a9p = .09, ls = a6I = j = 0
	}, this.resize = function() {
		var x8, m7, ev, a9v, a9w, a4Z;
		hH && (i = a9r(i = z.a0.qz() ? Math.floor(.69 * h.pd) : Math.floor(.5 * h.pd), a54(h.i - 2 * ba.gap, 10)), i = a9r(i, Math.floor(3.57 * a54(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x8 = canvas.getContext("2d", {
				alpha: !0
			}), m7 = Math.floor(1 + j / 40), x8.clearRect(0, 0, i, j), x8.fillStyle = b9.me, x8.fillRect(m7, m7, i - 2 * m7, j - 2 * m7), x8.lineJoin = "bevel", x8.lineWidth = 2 * m7, x8.strokeStyle = b9.mh, x8.strokeRect(m7, m7, i - 2 * m7,
				j - 2 * m7), x8.imageSmoothingEnabled = !1, ev = aa.get(a9n), a9v = ev.width, a4Z = (1 === a9n ? .85 : 21 === a9n ? .666 : .9) * a70 * j / (a9w = ev.height), x8.setTransform(a4Z, 0, 0, a4Z, Math.floor((i - a4Z * a9v) / 2),
				Math.floor((j - a4Z * a9w) / 2)), x8.drawImage(ev, 0, 0), x8.setTransform(1, 0, 0, 1, Math.floor(i - a9p * j - a9o * j - m7), Math.floor(m7 + a9o * j)),
			function(x8, ea) {
				x8.lineWidth = Math.floor(1 + j / 80), x8.strokeStyle = b9.mh, x8.beginPath(), x8.moveTo(0, 0), x8.lineTo(ea, ea), x8.moveTo(0, ea), x8.lineTo(ea, 0), x8.stroke()
			}(x8, Math.floor(a9p * j)), x8.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f2, a9t, a6n, a9u) {
		hH || a9u && a9q || (a9n = a6n ? 21 : f2 ? 1 : 2, hH = a9q = !0, this.resize(), aK.qs(), aQ.a6i(), ls = bd.e9, a6I = a9t ? 1 : 0)
	}, this.ij = function() {
		!hH || 1 <= a6I || (a6I = 1 < (a6I += 5e-4 * (bd.e9 - ls)) ? 1 : a6I, ls = bd.e9, bd.dc = !0)
	}, this.gn = function(eh, ej) {
		return !(!hH || a6I <= 0 || (eh -= Math.floor((h.i - i) / 2), ej -= x4(), eh < 0) || ej < 0 || i < eh || j < ej || (i - j / 3 < eh && ej < j / 3 && (hH = !1, bd.dc = !0), 0))
	}, this.ti = function() {
		!hH || a6I <= 0 || (tj.globalAlpha = a6I, tj.drawImage(canvas, Math.floor((h.i - i) / 2), x4()), tj.globalAlpha = 1)
	}
}

function dH() {
	var a9y, a9z = new Uint8Array(5),
		aA0 = new Uint8Array(5);
	this.aA1 = new aA2, this.dU = function() {
		for (var f2 = bh.e7.data[119].value, aA = 0; aA < a9z.length; aA++) a9z[aA] = (f2 >> 2 * aA) % 4
	}, this.a3Y = function() {
		a9y = [L(122), L(123), L(124, [bV.aA3[28]]), L(125, [bV.aA3[26]]), L(126, [bV.aA3[0]])], this.aA1.dU()
	}, this.ij = function() {
		this.aA1.ij()
	}, this.a4A = function(id) {
		1 < id && bH.q4() || ! function(dx) {
			if (3 === a9z[dx] || 1 === aA0[dx]) return;
			if (aA0[dx] = 1, !(Math.random() < .6)) {
				a9z[dx]++;
				for (var f2 = 0, aA = 0; aA < a9z.length; aA++) f2 += a9z[aA] << 2 * aA;
				bh.r3.r4(119, f2)
			}
			return 1
		}(id) || aM.a5A(a9y[id])
	}
}

function aA2() {
	var aA5;
	this.dU = function() {
		aA5 = !1
	}, this.ij = function() {
		var g7;
		if (function() {
				if (!aA5) {
					if (bd.jm() % 30 != 9) return;
					if (!b8.fv.kx(90)) return;
					aA5 = !0
				}
				return 1
			}() && (! function() {
				var pT = aM.a5V(956);
				if (pT) {
					if (b8.fv.kb(pT.player)) return 1;
					aM.a4G(956, 0)
				}
				return
			}() && (-1 === (g7 = (aC.hP ? function() {
				var id = bf.l1(),
					ea = ak.jq;
				if (be.kB[id])
					for (var yf = ak.jr, eY = be.eY, aA = 0; aA < ea; aA++) {
						var g7 = yf[aA];
						if (eY[g7] !== id) return g7
					} else if (1 < ea) return l4[ea - 1];
				return -1
			} : function() {
				for (var aAD = ak.jq, kW = ak.jr, aAE = ja, aA = 0; aA < aAD; aA++) {
					var g7 = kW[aA];
					if (0 !== aAE[g7]) return g7
				}
				return -1
			})()) ? ! function() {
				var pT = aM.a5V(957);
				if (pT && pT.a50) {
					if (ab.eR(pT.a50.eM << 2)) return 1;
					aM.a4G(957, 0)
				}
				return
			}() : (aM.zF(0, L(127, [af.zS[g7]]), 956, g7, b9.mh, b9.me, -1, !0), 0)))) {
			var ea = am.iU.kn;
			if (0 !== ea)
				for (var e7 = am.iU.e7, aA = 0; aA < ea; aA++) {
					var eM = e7[aA];
					if (ab.eR(eM << 2)) return void aM.zF(0, L(128, [bK.ei(eM), bK.ek(eM)]), 957, 0, b9.mh, b9.me, -1, !0, void 0, {
						et: 1,
						eM: eM
					})
				}
		}
	}
}

function dI() {
	this.aAF = new aAG, this.dU = function() {
		this.aAF.resize()
	}
}

function aAG() {
	this.resize = function() {
		var aA, aAH = document.head.querySelector("style#ss");
		if (aAH)
			for (aA = aAH.sheet.cssRules.length - 1; 0 <= aA; aA--) aAH.sheet.deleteRule(0);
		else(aAH = document.createElement("style")).id = "ss", document.head.appendChild(aAH);
		var a78 = "::-webkit-scrollbar",
			aAI = b8.pb.pl(ba.rS),
			hR = b8.pb.pl(Math.max(b8.pb.qu(.012), 8));
		try {
			aAH.sheet.insertRule(a78 + "{width:" + hR + ";height:" + hR + ";}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 + "-thumb{background-color:white;}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 +
				"-track{background:" + b9.md + ";}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 + "-track:horizontal{border-top:" + aAI + " solid white;}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 +
				"-track:vertical{border-left:" + aAI + " solid white;}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 + "-button{display:none;}", aAH.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aAH.sheet.cssRules.length - 1; 0 <= aA; aA--) aAH.sheet.deleteRule(0)
		}
	}
}

function dG() {
	this.aAJ = !1, this.mX = !1, this.a3I = !1, this.aAK = [0, 0, 0, 0], this.aAL = function() {
		var m7, m8, mK, mL;
		this.a3I = this.a3I || this.mX, (this.mX || this.aAJ && this.a3I) && (m7 = bY.aAM[0], m8 = bY.aAM[1], mK = bY.aAM[2], mL = bY.aAM[3], m7 = m7 < this.aAK[0] ? this.aAK[0] : m7, m8 = m8 < this.aAK[1] ? this.aAK[1] : m8, mK = mK > this.aAK[
				2] ? this.aAK[2] : mK, mL = mL > this.aAK[3] ? this.aAK[3] : mL, this.mX = !1, this.aAJ = !1, m7 === this.aAK[0] && m8 === this.aAK[1] && mK === this.aAK[2] && mL === this.aAK[3] ? this.a3J() : m7 <= mK && m8 <= mL && a3a
			.putImageData(a3b, 0, 0, m7, m8, mK - m7 + 1, mL - m8 + 1))
	}, this.a3J = function() {
		this.a3I && this.aAK[2] >= this.aAK[0] && this.aAK[3] >= this.aAK[1] && a3a.putImageData(a3b, 0, 0, this.aAK[0], this.aAK[1], this.aAK[2] - this.aAK[0] + 1, this.aAK[3] - this.aAK[1] + 1), this.a3I = !1
	}, this.z2 = function() {
		this.aAK[2] >= this.aAK[0] && this.aAK[3] >= this.aAK[1] && a3a.putImageData(a3b, 0, 0, this.aAK[0], this.aAK[1], this.aAK[2] - this.aAK[0] + 1, this.aAK[3] - this.aAK[1] + 1), this.a3I = !1
	}, this.dU = function() {
		var eh, ej;
		this.aAJ = !1, this.mX = !1, this.a3I = !1, this.aAK[0] = bQ.el, this.aAK[1] = bQ.em, this.aAK[2] = this.aAK[3] = 0;
		loop: for (eh = 1; eh < bQ.el - 1; eh++)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAN[ab.wd(eh, ej) + 2]) {
					this.aAK[0] = eh;
					break loop
				} loop: for (ej = 1; ej < bQ.em - 1; ej++)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAN[ab.wd(eh, ej) + 2]) {
					this.aAK[1] = ej;
					break loop
				} loop: for (eh = bQ.el - 2; 0 < eh; eh--)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAN[ab.wd(eh, ej) + 2]) {
					this.aAK[2] = eh;
					break loop
				} loop: for (ej = bQ.em - 2; 0 < ej; ej--)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAN[ab.wd(eh, ej) + 2]) {
					this.aAK[3] = ej;
					break loop
				}
	}
}

function L(value, aAO, uG) {
	var pI = "number" == typeof value ? b5.aAP[value] : value;
	if (uG && b5.aAQ() && (pI = uG), aAO)
		for (var ea = aAO.length, aA = 0; aA < ea; aA++)
			for (var et = 0; et < 3; et++) pI = pI.replace("{" + (10 * et + aA) + "}", aAO[aA]);
	return pI
}

function bx() {
	this.data = new aAR;
	var aAS = (new aAT).L84,
		aAU = (this.aAP = aAS, !1);
	this.dU = function() {
		var ea, g;
		aAU = !1, "en" !== bh.e7.data[12].value.split("-")[0].toLowerCase() ? bh.e7.data[12].value === bh.e7.data[145].value && 0 < bh.e7.data[146].value && (ea = bh.e7.data[146].value, (g = bh.pt.uM(ea, !1)).length === ea) && !!b8.pk.a1a(g) &&
			function(g) {
				for (var ea = g.length, j = 0; j < ea; j++) g[j] = g[j].replace("&#39;", "'");
				var aAa = bh.pt.uM(ea, !0);
				if (ea !== aAa.length) return !1;
				if (!b8.pk.a1a(aAa)) return !1;
				for (var kX = aAS.length, a81 = new Array(kX), aAb = kX === ea, g2 = Math.min(ea, kX), aA = 0; aA < kX; aA++)
					if (a81[aA] = aAS[aA], aA < ea && aAa[aA] === a81[aA]) a81[aA] = g[aA];
					else {
						aAb = !1;
						for (var eu = 0; eu < g2; eu++)
							if (aAa[eu] === a81[aA]) {
								a81[aA] = g[eu];
								break
							}
					} return b5.aAP = a81, aAb
			}(g) || (aAU = !0) : b5.aAP = aAS
	}, this.dW = function() {
		be.dV(), aD.dV(), bc.dV(), bb.dV(), aN.dU(), bm = new dn
	}, this.aAQ = function() {
		return this.aAP === aAS || !aAS.length
	}, this.aAc = function() {
		var aAd;
		aAU && (aAU = !1, 0 !== aAS.length) && (aAd = bh.e7.data[12].value, ay.aAe.aAf(0, aAd.slice(0, 20)))
	}, this.aAg = function(g) {
		g.length === aAS.length && (this.aAP = g, bh.r3.r4(145, bh.e7.data[12].value), bh.r3.r4(146, g.length), bh.pt.uS(g, !1), bh.pt.uS(aAS, !0), 0 === aZ.a04()) && 5 === s.rq && s.x.aAh()
	}, this.aAi = function() {
		var aAj, g = navigator.languages;
		return g && g.length ? (aAj = Math.max(b5.data.aAk(g[0]), 0), 1 === g.length ? [aAj, aAj] : [aAj, Math.max(b5.data.aAk(g[1]), 0)]) : [0, 0]
	}
}

function aAR() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAl = function() {
		for (var aAm = [], g = this.g, ea = g.length, aA = 0; aA < ea; aA++) aAm.push(g[aA]);
		var aAn = bh.e7.data[12].uG;
		for (aA = 0; aA < ea; aA++)
			if (aAm[aA] === aAn) {
				aAm.splice(aA, 1), ea--;
				break
			} aAm.sort(), ea++, aAm.unshift(aAn);
		try {
			if ("undefined" == typeof Intl) return aAm;
			for (aA = 0; aA < ea; aA++) {
				var pI = new Intl.DisplayNames([aAm[aA]], {
					type: "language"
				}).of(aAm[aA]);
				pI !== aAm[aA] && (aAm[aA] = aAm[aA] + ": " + pI)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAm
	}, this.aAp = function(aAq) {
		for (var pI = bh.e7.data[12].value, ea = aAq.length, aA = 0; aA < ea; aA++)
			if (pI === aAq[aA].split(":")[0]) return aA;
		return 0
	}, this.aAk = function(aAr) {
		if (!aAr || aAr.length < 2) return 0;
		aAr = aAr.split("-")[0].toLowerCase();
		for (var g = this.g, ea = g.length, aA = 0; aA < ea; aA++)
			if (aAr === g[aA]) return aA;
		return -1
	}
}

function aAT() {
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
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader earns gold whenever their clan wins points.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active", "Inactive",
		"Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names",
		"Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins",
		"1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election",
		"Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver",
		"Amount", "Number", "Gold", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode",
		"Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay",
		"🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Lobby Chirper", "Keep Closed", "Mute", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn",
		"🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.",
		"🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "An enemy ship belonging to {0} is heading towards your shore.",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots",
		"Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!",
		"Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function da() {
	var eh, ej, j, sn, aAs, aAt, aAu, aAv, aAw, i, a2D, aAx;
	this.hH = !1, this.dU = function(pI, aAy) {
		if (1 === z.id && 13 <= z.dk && z.dk < 18) return aAy ? void(a2D = pI) : a2D !== pI ? void 0 : void z.uK.saveString(200, pI);
		aAy && (a2D = pI, (aAx = document.createElement("a")).appendChild(document.createTextNode(a2D)), this.hH = !0, aAx.title = a2D, aAx.target = "_blank", aAx.href = a2D, aAx.style.textAlign = "center", aAx.style.color = b9.mh, aAx.style
			.position = "absolute", aAx.style.padding = "0px", aAx.style.margin = "0px", this.resize(), document.body.appendChild(aAx), bd.dc = !0)
	}, this.qs = function() {
		return !(!this.hH || (document.body.removeChild(aAx), this.hH = !1))
	}, this.gn = function(hs, ht) {
		return !!this.hH && ((hs < eh || ht < ej || eh + i < hs || ej + j < ht || eh + i - sn < hs && ht < ej + sn) && (bd.dc = !0, this.hH = !1, document.body.removeChild(aAx)), !0)
	}, this.resize = function() {
		var a4U, aAz;
		this.hH && (aAv = Math.floor(.8 * (z.a0.qz() ? h.i > h.j ? .6 : .55 : .4) * h.pd), sn = Math.floor(.15 * aAv), aAs = Math.floor(.35 * sn), aAt = Math.floor(.5 * sn), aAu = Math.floor(2.5 * aAt), j = sn + aAs + 3 * aAt, a4U = b8.pb.rQ(1,
			aAs / h.k), aAw = Math.floor(h.k * aP.measureText(a2D, a4U)), aAz = i = (aAv < aAw ? aAw : aAv) + 2 * aAu, i = Math.min(i, h.i - 2 * (z.a0.qz() ? 2 : 1) * ba.gap), a4U = b8.pb.rQ(1, i / aAz * aAs / h.k), aAw = Math.floor(h.k *
			aP.measureText(a2D, a4U)), eh = Math.floor((h.i - i) / 2), ej = Math.floor((h.j - j) / 2), aAx.style.font = a4U, aAx.style.top = Math.floor((ej + 1.4 * aAt + sn) / h.k) + "px", aAx.style.left = Math.floor((eh + (i - aAw) /
			2) / h.k) + "px")
	}, this.ti = function() {
		this.hH && (tj.fillStyle = b9.me, tj.fillRect(eh, ej + sn, i, j - sn), tj.fillStyle = b9.nl, tj.fillRect(eh, ej, i, sn), tj.fillStyle = b9.mh, tj.lineWidth = ba.xs, tj.strokeStyle = b9.mh, tj.strokeRect(eh, ej, i, j), tj.fillRect(eh, ej +
			sn, i, ba.xs), tj.font = b8.pb.rQ(1, .48 * sn), b8.pb.textAlign(tj, 1), b8.pb.textBaseline(tj, 1), tj.fillText("You are leaving Territorial.io!", Math.floor(eh + (i - .5 * sn) / 2), Math.floor(ej + .55 * sn)), aL.a4f(Math
			.floor(eh + i - .8 * sn), Math.floor(ej + .25 * sn), Math.floor(.5 * sn)), tj.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9L, eh = [0, 0, 0, 0, 0],
		ej = [0, 0, 0, 0, 0],
		mJ = [1, 1, 1, 1, 1],
		f2 = [!0, !0, !0, !1, !1],
		ev = (this.fL = [!0, !0, !0, !1, !1], null);
	this.aB0 = function(a1l, aB1) {
		ev = a1l, f2 = aB1, a9L = [bI.aB2, bI.zz, bI.aB3, bI.aB3, bI.aB4], this.dU()
	}, this.dU = function() {
		if (aa.sI()) {
			var aA, rx = Math.floor((z.a0.qz() ? .261 : .195) * h.pd),
				ry = Math.floor(.9 * rx),
				a70 = Math.floor(.17 * ry);
			if (gap = z.a0.qz() ? 2 * ba.gap : ba.gap, mJ[0] = rx / ev[0].width, mJ[1] = ry / ev[1].width, mJ[2] = a70 / ev[2].height, mJ[3] = a70 / ev[3].height, mJ[4] = a70 / ev[4].height, mJ[2] *= 1.7, mJ[3] *= 1.07, eh[0] = gap, eh[1] = gap,
				eh[2] = gap, eh[3] = gap, eh[4] = Math.floor(2 * gap + mJ[3] * ev[3].width), ej[0] = gap, ej[1] = ej[0] + gap + mJ[0] * ev[0].height, ej[2] = ej[1] + gap + mJ[1] * ev[1].height, ej[3] = ej[2] + gap + mJ[2] * ev[2].height, ej[4] =
				ej[3], !f2[0])
				for (aA = 0; aA < 5; aA++) ej[aA] -= mJ[0] * ev[0].height + gap;
			if (!f2[1])
				for (aA = 2; aA < 5; aA++) ej[aA] -= mJ[1] * ev[1].height + gap
		}
	}, this.hH = function() {
		return !(7 === aZ.a04() && z.a0.qz())
	}, this.gn = function(hs, ht) {
		if (ev && this.hH())
			for (var aA = f2.length - 1; 0 <= aA; aA--)
				if (f2[aA] && this.fL[aA] && eh[aA] < hs && ej[aA] < ht && hs < eh[aA] + mJ[aA] * ev[aA].width && ht < ej[aA] + mJ[aA] * ev[aA].height) return s.t(9, s.rq, new aB5("You are leaving Territorial.io.", b8.pb.a2C(a9L[aA]))), !0;
		return !1
	}, this.ti = function() {
		if (ev && this.hH()) {
			var aA;
			for (tj.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f2[aA] && this.fL[aA] && (tj.setTransform(mJ[aA], 0, 0, mJ[aA], eh[aA], ej[aA]), tj.drawImage(ev[aA], 0, 0));
			tj.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aB6 = 0, this.aB7 = null, this.sw = null, this.ql = null, this.x = null, this.tI = null, this.su = null, this.message = null, this.aB8 = null, this.qr = null, this.aB9 = new aBA, this.a08 = 0, this.dU = function() {
		this.aB6 = bE.rt.vE(bh.e7.data[105].value), this.sw = new aBB, this.ql = new aBC, this.x = new aBD, this.tI = new aBE, this.su = new aBF, this.message = new aBG, this.aB8 = new aBH, this.qr = new aBI, this.x.dU(), bn.dU(), this.a08 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.tC = function() {
		this.qr && this.qr.tC(), this.aB7 = null, this.sw = null, this.ql = null, this.x = null, this.tI = null, this.su = null, this.message = null, this.aB8 = null, this.qr = null, this.a08 = 0, bn.tC(), z.a0.setState(0)
	}
}

function aBB() {
	function aBc(g, sB, sC) {
		var aBd = g[sB];
		g[sB] = g[sC], g[sC] = aBd
	}
	this.sx = [
		[],
		[],
		[],
		[]
	], this.sy = [0, 0, 0, 0], this.aBJ = function(aBK, ro, username, t3, a2g, aBL, elo, color, um, aBM) {
		this.sx[aBK].push(this.aBN(ro, username, t3, a2g, aBL, elo, color, um, aBM)), bl.aB6 === ro && (bl.aB7 = this.sx[aBK][this.sx[aBK].length - 1]), bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBK && 1 === bl.x.qe[2]
	}, this.aBN = function(ro, username, t3, a2g, aBL, elo, color, um, aBM) {
		return {
			ro: ro,
			username: username,
			t3: t3,
			a2g: a2g,
			aBL: aBL,
			elo: elo,
			color: color,
			um: um,
			aBM: aBM
		}
	}, this.aBP = function(dx, aBK, t3, a2g, aBL, elo, um) {
		dx = this.sx[aBK][dx];
		dx.t3 = t3, dx.a2g = a2g, dx.aBL = aBL, dx.elo = elo, dx.um = um, bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBK && 1 === bl.x.qe[2]
	}, this.aBQ = function(dx, aBK, aBR) {
		var dx = this.sx[aBK][dx],
			aBS = dx.username,
			aBT = "Redacted " + bD.rt.y9(dx.ro, 2);
		dx.username = aBR ? "[" + b8.zW.zb(aBS) + "] " + aBT : aBT, aBS.indexOf("Redacted") < 0 && (dx.aBU = aBS, dx.aBV = 3), bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBK && 1 === bl.x.qe[2]
	}, this.aBW = function(dx, aBX, aBY) {
		var player = this.sx[aBX][dx];
		this.aBZ(dx, aBX), this.sx[aBY].push(player), bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBY && 1 === bl.x.qe[2]
	}, this.aBZ = function(dx, aBX) {
		var sw = this.sx[aBX];
		dx >= this.sy[aBX] ? sw[dx] = sw[sw.length - 1] : (this.sy[aBX]--, 2 === aBX ? (sw.splice(this.sy[aBX] + 1, 0, sw[sw.length - 1]), sw.splice(dx, 1)) : (sw[dx] = sw[this.sy[aBX]], sw[this.sy[aBX]] = sw[sw.length - 1])), sw.pop(), bl.x
			.aBO += 29 === s.rq && bl.x.qe[0] === aBX && 1 === bl.x.qe[2]
	}, this.aBa = function(dx, qd) {
		bl.x.aBO += 29 === s.rq && bl.x.qe[0] === qd && 1 === bl.x.qe[2];
		var sw = this.sx[qd],
			pT = sw[dx];
		if (2 === qd)
			if (dx >= this.sy[qd]) {
				for (var aBb = this.sy[qd], elo = pT.elo; aBb && elo > sw[aBb - 1].elo;) aBb--;
				sw[dx] = sw[this.sy[qd]], sw.splice(this.sy[qd]++, 1), sw.splice(aBb, 0, pT)
			} else sw.splice(this.sy[qd]--, 0, pT), sw.splice(dx, 1);
		else dx >= this.sy[qd] ? aBc(sw, this.sy[qd]++, dx) : aBc(sw, --this.sy[qd], dx)
	}, this.aBe = function(ro) {
		for (var sx = this.sx, ea = sx.length, aA = 0; aA < ea; aA++)
			for (var sw = sx[aA], kX = sw.length, et = 0; et < kX; et++)
				if (ro === sw[et].ro) return sw[et];
		return null
	}
}

function aBA() {
	this.dd = function(dx) {
		if ((sy = bl.sw.sy[dx]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qf = bl.x.qg[dx],
			aBf = 9 === qf.aBg ? 333 : 512,
			sy = Math.min(sy, aBf);
		8 === qf.aBg && (sy -= sy % 2);
		aBf = bl.sw.sx[dx].splice(0, sy), bl.sw.sy[dx] -= sy, sy = function(aBh) {
			if (bl.aB7) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var ea = aBh.length, ro = bl.aB7.ro, aA = 0; aA < ea; aA++)
					if (aBh[aA].ro === ro) return aA
			}
			return -1
		}(aBf);
		return -1 === sy ? (bl.x.aBO += 29 === s.rq && bl.x.qe[0] === dx && 1 === bl.x.qe[2], !1) : (8 === qf.aBg && (qf.aBk = (qf.aBk + (sy >> 1)) % 1024, dx = sy - sy % 2, sy %= 2, aBf = aBf.slice(dx, 2 + dx)), av.dU(qf, aBf, sy), !0)
	}, this.aBl = function(qf, aBh, aBi) {
		var ed = aC.data = new a3O,
			aBp = (ed.spawningSeed = qf.spawningSeed, qf.aBg < 7 ? (ed.gameMode = 1, ed.numberTeams = qf.aBg + 2) : 9 === qf.aBg ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === qf.aBg ?
				0 : 10 === qf.aBg ? 1 : 2), ed.selectedPlayer = aBi, ed.isContest = qf.aBm, ed.mapType = bQ.aBn(qf.eG) ? 0 : 1, bQ.aBo(ed, qf.eG), ed.mapSeed = qf.mapSeed, ed.humanCount = aBh.length);
		ed.selectableSpawn = 1 === ed.gameMode || aBp < 100, ed.colorsData = new Uint32Array(aBp), ed.playerNamesData = new Array(aBp);
		for (var aA = 0; aA < aBp; aA++) ed.colorsData[aA] = aBh[aA].color, ed.playerNamesData[aA] = aBh[aA].username;
		if (2 === ed.battleRoyaleMode)
			for (ed.elo = new Uint16Array(aBp), aA = 0; aA < aBp; aA++) ed.elo[aA] = aBh[aA].elo;
		aZ.setState(8), bQ.a6(qf.eG, ed.mapSeed), aC.a3S(), aC.a3R = 2
	}
}

function aBC() {
	var dp = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aBq = [b9.mv, b9.mv, b9.mw, b9.nP, b9.nQ, b9.nC, b9.nV, b9.mw, b9.nn, b9.nd, b9.np],
		aBr = [
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
		aBs = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!"];
	this.qn = function(aBt) {
		var aBu, zc;
		return aBt.id < 5 && (aBu = "@" + bD.rt.y9(aBt.ro, 5)), 0 === aBt.id ? aBu + ": " + aBt.p : 1 === aBt.id ? (zc = "@" + bD.rt.y9(aBt.target, 5), 0 === aBt.aBv ? 32768 <= aBt.value ? aBu + " voted with " + (aBt.value - 32768 + 1) +
				" gold against " + zc + " to weaken the latter's admin position." : aBu + " voted with " + (aBt.value + 1) + " gold for " + zc + " to strengthen the latter's admin position." : 1 === aBt.aBv ? aBu + " sent " + Math.floor(aBt
					.value / 100) + " Gold to " + zc + "." : aBu + " voted with " + aBt.value + " points for " + zc + " to acknowledge the latter as clan leader.") : 2 === aBt.id ? 0 === aBt.aBv ? aBu + " was muted. Duration: 1 Hour" : 1 === aBt
			.aBv ? "The username of " + aBu + " was redacted. Duration: 1 Day" : aBu + " was kicked." : 3 === aBt.id ? aBu + bm.e0(aBt.aBv, bm.du[aBt.aBv][aBt.value]) + "@" + bD.rt.y9(aBt.target, 5) + bm.e2(aBt.aBv, bm.du[aBt.aBv][aBt.value]) :
			4 === aBt.id ? aBu + bm.e0(5, bm.du[5][aBt.aBv]) + "@" + bD.rt.y9(aBt.target, 5) + bm.e2(5, bm.du[5][aBt.aBv]) : 5 === aBt.id ? aBs[aBt.aBv] : 6 === aBt.id ? "You are about to mention " + aBt.value + " player" + (1 === aBt.value ?
				"" : "s") + ". This action will cost " + (Math.max(10 * aBt.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qm = function(aBt, a5h) {
		return {
			id: aBt.id,
			p: a5h,
			aBw: 0,
			fontSize: 1,
			qq: 0,
			aBx: aBt.id ? b9.nO : b9.mh
		}
	}, this.t1 = function(player, qd) {
		return (2 === qd ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.t2 = function(t3) {
		return aBq[t3]
	}, this.aBy = function(t3, a2g) {
		return t3 < 3 || 7 === t3 ? aBr[t3][0] : 4 === t3 ? aBr[t3][a2g < 1 ? 0 : a2g < 10 ? 1 : 2] : aBr[t3][a2g < 10 ? 0 : 1]
	}, this.aBz = function(a2g) {
		return 0 === a2g
	}, this.aBe = function(qd, ro) {
		for (var sx = bl.sw.sx, sw = sx[qd], ea = sw.length, aA = 0; aA < ea; aA++)
			if (ro === sw[aA].ro) return sw[aA];
		for (var eu = 0; eu < sx.length; eu++)
			if (qd !== eu)
				for (ea = (sw = sx[eu]).length, aA = 0; aA < ea; aA++)
					if (ro === sw[aA].ro) return sw[aA];
		return null
	}, this.t4 = function(pT) {
		return !!bl.aB7 && pT.ro === bl.aB7.ro
	}, this.aC0 = function(sw, aC1, aC2) {
		var zZ = [];
		loop: for (var aA = aC1; aA < aC2; aA++) {
			var za = b8.zW.zb(sw[aA].username);
			if (za) {
				for (var eu = zZ.length - 1; 0 <= eu; eu--)
					if (za === zZ[eu].name) {
						zZ[eu].g2++;
						continue loop
					} zZ.push({
					name: za,
					g2: 1
				})
			}
		}
		if (zZ.sort(function(et, eu) {
				return eu.g2 - et.g2
			}), 0 === zZ.length) return "";
		for (var pI = zZ[0].name + ": " + zZ[0].g2, aA = 1; aA < zZ.length; aA++) pI += "   " + zZ[aA].name + ": " + zZ[aA].g2;
		return pI
	}, this.aC3 = function(t3, a2g, aBL) {
		return 0 === dp[t3].length ? "Rank: " + (a2g + 1) : dp[t3] + " Rank: " + (a2g + 1) + (3 !== t3 && aBL < 100 ? "   " + dp[3] + " Rank: " + (aBL + 1) : "")
	}
}

function aBF() {
	var rJ = 0,
		aC4 = 0,
		aC5 = 0,
		aC6 = null,
		aC7 = null;

	function aCA(pT, aCB, aCC) {
		var pI = pT.username;
		return (pI += "   " + bl.ql.aC3(pT.t3, pT.a2g, pT.aBL)) + function(pT) {
			pT = pT.um;
			if (pT < 1e3) return "   Gold: " + pT;
			if ((pT %= 1024) < 1e3) return "   Gold: " + pT + "k";
			return "   Gold: " + (pT - 999) + "M"
		}(pT) + ("   IP: " + bD.rt.y9(pT.aBM, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aCC ? aC4 : aC9(pT, aCB)])
	}

	function aC9(pT, aCB) {
		return aC4 = aCB || bl.sw.aBe(pT.ro) ? 1 : 0
	}
	this.aC8 = function() {
		!rJ || aC4 === aC9(aC7) && aC5 === aC7.um || (aC5 = aC7.um, aC6.show(-1, -1, aCA(aC7, 0, 1), 1, 1))
	}, this.t5 = function(e, pT, aCB) {
		var a77 = e.target.getBoundingClientRect();
		this.show(a77.left, a77.top, pT, 0, aCB), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.su && bl.su.qs(1)
		})
	}, this.show = function(eh, ej, pT, rN, aCB) {
		aC6 = aC6 || new rH, aC5 = (aC7 = pT).um, aC6.show(eh, ej, aCA(pT, aCB), rN), rJ = 1
	}, this.qs = function(rT) {
		aC6 && aC6.qs(rT) && (rJ = 0, aC7 = null)
	}
}

function aBD() {
	function aCH(aCK) {
		bl.x.aBO && 1 === bl.x.qe[2] && s.aCL(29).aCM(), bl.x.aBO = 0, s.aCL(29).aCN(), 0 !== bl.x.qg[bl.x.qe[0]].sh && !aCK || s.aCL(29).aCO(), bl.su.aC8()
	}
	this.qg = new Array(4), this.qe = [0, 0, 1, 0], this.aBO = 0, this.aCE = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qg.length; aA++) this.qg[aA] = new aCF;
		this.qe[0] = bh.e7.data[158].value
	}, this.aCG = function() {
		aCH(!0)
	}, this.aCI = function() {
		for (var aA = 0; aA < bl.x.qg.length; aA++) {
			var qf = bl.x.qg[aA];
			0 === qf.sh ? qf.aCP = 0 : (qf.aCQ = Math.max(qf.aCQ - qf.aCP % 2, 0), qf.aCP++)
		}
		aCH(!1)
	}, this.aCR = function(qd) {
		this.qe[0] !== qd || this.qe[2] || s.aCL(29).aCS()
	}
}

function aBH() {
	var aCT = 0,
		aCU = "",
		aCV = 0,
		aCW = 0,
		aCX = 0;

	function aCZ(a5h) {
		ay.aCk.aCl(3, a5h)
	}

	function aCi(g2) {
		aCT = 1, bl.message.aCm({
			id: 6,
			value: g2
		})
	}

	function aCc(p) {
		var aCp = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCp)
	}
	this.yv = function(p) {
		var aCY, g, aCe;
		if (aCT) return aCT = 0, "yes" === (aCY = p.toLowerCase()) || "y" === aCY ? void aCZ(aCU) : void bl.message.aCm({
			id: 5,
			aBv: 7
		});
		!(p.indexOf("@") < 0) && (aCY = aCc(p)) ? (aCU = p, g = function(aCb) {
			for (var ea = aCb.length, aCn = [0, 0, 0, 0], aA = 0; aA < ea; aA++)
				for (var i = aCb[aA], et = 0; et < 4; et++) i === "@room" + (et + 1) && (aCn[et] = 1);
			if ((aCW = b8.pk.a1P(aCn)) % 4 == 0) return b8.pk.a1h(bl.sw.sx);
			for (et = 0; et < 4; et++) aCn[et] = aCn[et] ? bl.sw.sx[et] : [];
			return b8.pk.a1h(aCn)
		}(aCY), function(aCb, aCe, p) {
			if (!aCV) return;
			for (var ea = aCe.length, aA = 0; aA < ea; aA++) 2 === aCe[aA].id && (p = p.replace(aCb[aCe[aA].dx], "@" + aCe[aA].f2));
			return aCT = 1, aCZ((aCU = p).slice(0, 126) + "|"), 1
		}(aCY, aCe = function(aCb) {
			for (var aCe = [], ea = (aCX = aCV = 0, aCb.length), aA = 0; aA < ea; aA++) {
				var i = aCb[aA],
					kX = i.length;
				b8.zW.startsWith(i, "@[") ? kX <= 9 && b8.zW.a2G(i, "]") && aCe.push({
					id: 0,
					f2: i.substring(2, kX - 1).toUpperCase()
				}) : 6 === kX ? b8.zW.startsWith(i, "@room") || (aCX++, aCe.push({
					id: 1,
					f2: bE.rt.vE(i.substring(1))
				})) : 1 < kX && kX < 5 && 0 <= (kX = b5.data.aAk(i.substring(1))) && (aCe.push({
					id: 2,
					f2: kX,
					dx: aA
				}), aCV = 1)
			}
			return aCe
		}(aCY), p) || (0 === aCe.length ? aCW || function(aCb) {
			for (var ea = aCb.length, aA = 0; aA < ea; aA++) {
				var i = aCb[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCY) ? aCi(g.length) : aCZ(p) : aCY.length === aCX ? aCZ(p) : (function(g, aCe) {
			var kX = aCe.length;
			if (0 === kX) return;
			var ea = g.length;
			loop: for (var aA = ea - 1; 0 <= aA; aA--) {
				for (var et = 0; et < kX; et++)
					if (0 === aCe[et].id) {
						if (aCe[et].f2 === b8.zW.zb(g[aA].username)) continue loop
					} else if (1 === aCe[et].id && aCe[et].f2 === g[aA].ro) continue loop;
				g[aA] = g[--ea], g.pop()
			}
		}(g, aCe), aCi(g.length)))) : aCZ(p)
	}, this.aCq = function(p) {
		var aCb = aCc(p);
		if (aCb)
			for (var a4 = new RegExp("^[0-9]+$"), ea = aCb.length, aA = 0; aA < ea; aA++) {
				var i = aCb[aA].substring(1),
					kX = i.length;
				1 <= kX && kX <= 3 && a4.test(i) && (kX = parseInt(i, 10), !isNaN(kX)) && 0 <= kX && kX < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[kX]))
			}
		return p
	}
}

function aBG() {
	var aCr, aCs = [],
		aCt = -1,
		aCu = 0,
		aCv = 0;

	function aCz() {
		aCu = bd.e9, (3 === this.t9 ? (aCv = 1, aCy) : (aCt = (aCs.length + aCt + 2 * this.t9 - 1) % aCs.length, aCx))()
	}

	function aCx() {
		0 !== aCs.length && (aCv = 0, aCr && aCr.tC(), (aCr = new t6(aCz)).r4(aCt, aCs.length), aCr.show(aCs[aCt]), bl.message.resize())
	}

	function aCy() {
		aCr && aCr.tC(), (aCr = new tD(aCx)).r4(aCs.length), aCr.show(), bl.message.resize()
	}
	this.aCm = function(aBt) {
		var eu, aBt = bl.ql.qm(aBt, bl.ql.qn(aBt));
		5 === aBt.id || 6 === aBt.id ? s.aCL(29).aCw().qp(aBt) : (eu = bd.e9 < aCu + 2e4, aCt !== aCs.length - 1 && eu || (aCt = aCs.length), aCs.push(aBt), bh.e7.data[14].value || bn.play(), aCr && (bh.e7.data[13].value || aCv && eu ? aCr.r4(aCs
			.length) : aCx()))
	}, this.show = function() {
		aCy()
	}, this.qs = function() {
		aCt = aCs.length - 1, aCr && aCr.tC(), aCr = null
	}, this.resize = function() {
		aCr && aCr.resize()
	}
}

function aBE() {
	var aD0 = null,
		aD1 = null,
		aD2 = 0,
		aD3 = 0,
		aD4 = null;

	function aD6() {
		0 !== aD1.t3 && (bl.tI.qs(), s.t(8, 29, new rr(25, {
			rs: 0,
			ro: bD.rt.y9(aD1.ro, 5),
			rp: 0
		}, 29)))
	}

	function aD7() {
		var eh = aD0.eh,
			ej = aD0.ej;
		bl.tI.qs(), aD0 = new tE([new v("Kick User", function() {
			aDD(0, 0)
		}, aDI(0, 0)), new v("Block Chat", aDE, aDJ(1)), new v("Censor Username", aDF, aDJ(2)), new v("Elo Deduction", aDG, aDJ(3)), new v("Gold Seizure", aDH, aDJ(4))]), aDC(eh, ej), aD2 = 2, aD3 = 1
	}

	function aDJ(id) {
		return !bl.aB7 || bl.ql.t4(aD1) || bl.aB7.aBL >= aD1.a2g || 0 === id && aD1.a2g < 200 ? 1 : 1 - bm.dv(id, bl.aB7.aBL, 0)
	}

	function aDA() {
		return !bl.aB7 || bl.ql.t4(aD1) ? 1 : 0
	}

	function aDI(id, dx) {
		var a2g;
		return !bl.aB7 || bl.ql.t4(aD1) || (a2g = bl.aB7.aBL) >= aD1.a2g ? 1 : 1 - bm.dv(id, a2g, dx)
	}

	function aD9() {
		var eh = aD0.eh,
			ej = aD0.ej,
			aDK = (bl.tI.qs(), aDA());
		aD0 = new tE([new v(bm.du[5][0], function() {
			aDD(5, 0)
		}, aDK), new v(bm.du[5][1], function() {
			aDD(5, 1)
		}, aDK), new v(bm.du[5][2], function() {
			aDD(5, 2)
		}, aDK), new v(bm.du[5][3], function() {
			aDD(5, 3)
		}, aDK)]), aDC(eh, ej), aD3 = aD2 = 2
	}

	function aDB() {
		29 === s.rq && s.aDL().aB8(bD.rt.y9(aD1.ro, 5))
	}

	function aDD(id, value) {
		ay.aCk.aCl(5, {
			id: id,
			value: value,
			ro: aD1.ro
		})
	}

	function aDE() {
		var eh = aD0.eh,
			ej = aD0.ej;
		bl.tI.qs(), aD0 = new tE([new v(bm.du[1][0], function() {
			aDD(1, 0)
		}, aDI(1, 0)), new v(bm.du[1][1], function() {
			aDD(1, 1)
		}, aDI(1, 1)), new v(bm.du[1][2], function() {
			aDD(1, 2)
		}, aDI(1, 2)), new v(bm.du[1][3], function() {
			aDD(1, 3)
		}, aDI(1, 3)), new v(bm.du[1][4], function() {
			aDD(1, 4)
		}, aDI(1, 4))]), aDC(eh, ej), aD2 = 3, aD3 = 1
	}

	function aDF() {
		var eh = aD0.eh,
			ej = aD0.ej;
		bl.tI.qs(), aD0 = new tE([new v(bm.du[2][0], function() {
			aDD(2, 0)
		}, aDI(2, 0)), new v(bm.du[2][1], function() {
			aDD(2, 1)
		}, aDI(2, 1)), new v(bm.du[2][2], function() {
			aDD(2, 2)
		}, aDI(2, 2))]), aDC(eh, ej), aD2 = 3, aD3 = 2
	}

	function aDG() {
		var eh = aD0.eh,
			ej = aD0.ej;
		bl.tI.qs(), aD0 = new tE([new v(bm.du[3][0], function() {
			aDD(3, 0)
		}, aDI(3, 0)), new v(bm.du[3][1], function() {
			aDD(3, 1)
		}, aDI(3, 1)), new v(bm.du[3][2], function() {
			aDD(3, 2)
		}, aDI(3, 2))]), aDC(eh, ej), aD3 = aD2 = 3
	}

	function aDH() {
		var eh = aD0.eh,
			ej = aD0.ej;
		bl.tI.qs(), aD0 = new tE([new v(bm.du[4][0], function() {
			aDD(4, 0)
		}, aDI(4, 0)), new v(bm.du[4][1], function() {
			aDD(4, 1)
		}, aDI(4, 1)), new v(bm.du[4][2], function() {
			aDD(4, 2)
		}, aDI(4, 2)), new v(bm.du[4][3], function() {
			aDD(4, 3)
		}, aDI(4, 3)), new v(bm.du[4][4], function() {
			aDD(4, 4)
		}, aDI(4, 4))]), aDC(eh, ej), aD2 = 3, aD3 = 4
	}

	function aDC(eh, ej, tK) {
		aD0.show(eh, ej, tK), bl.su.show(aD0.eh, aD0.ej, aD1, 1)
	}
	this.aD5 = function(e, pT) {
		aD2 = 1, aD1 = pT, aD0 = new tE([new v(L(129), aD6, 0 === aD1.t3 ? 1 : 0), new v(L(130), aD7, function() {
			if (!bl.aB7) return 1;
			if (bl.ql.t4(aD1)) return 1;
			if (100 <= bl.aB7.aBL) return 1;
			if (bl.aB7.aBL >= aD1.a2g) return 1;
			return 0
		}()), new v(L(131, 0, "Report"), aD9, aDA()), new v(L(132), aDB, 0)]), aDC((aD4 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aD4.clientY, 1)
	}, this.a0y = function(code) {
		if (29 !== s.rq) return !1;
		if (!aD1) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qs();
			else if (b8.zW.startsWith(code, "Numpad") || b8.zW.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aD2) this.aD5(aD4, aD1);
				else {
					if (!aD0) return !1;
					1 === aD2 ? code <= 1 ? aD6() : 2 === code ? aD7() : 3 === code ? aD9() : (aDB(), this.qs()) : 2 === aD2 ? 1 === aD3 ? code <= 1 ? (aDD(0, 0), this.qs()) : (2 === code ? aDE : 3 === code ? aDF : 4 === code ? aDG : aDH)() : (
						aDD(5, bJ.p9(code - 1, 0, 3)), this.qs()) : (aDD(aD3, bJ.p9(code - 1, 0, bm.du[aD3].length - 1)), this.qs())
				}
		}
		return !0
	}, this.qs = function() {
		aD2 = 0, aD0 && aD0.qs(), aD0 = null, bl.su.qs()
	}
}

function aCF() {
	this.sh = 0, this.eG = 0, this.mapSeed = 0, this.aBg = 0, this.aDM = 0, this.aDN = 0, this.aBm = 0, this.aCQ = 0, this.spawningSeed = 0, this.a0A = 0, this.aBk = 0, this.qh = [], this.qi = 1048575, this.aCP = 0, this.aDO = [{
		eG: 0,
		mapSeed: 0,
		aBg: 0,
		e9: 100,
		aBm: 0
	}, {
		eG: 1,
		mapSeed: 0,
		aBg: 1,
		e9: 200,
		aBm: 0
	}, {
		eG: 2,
		mapSeed: 0,
		aBg: 2,
		e9: 300,
		aBm: 0
	}, {
		eG: 3,
		mapSeed: 0,
		aBg: 3,
		e9: 400,
		aBm: 0
	}, {
		eG: 0,
		mapSeed: 0,
		aBg: 9,
		e9: 500,
		aBm: 0
	}, {
		eG: 1,
		mapSeed: 0,
		aBg: 10,
		e9: 600,
		aBm: 0
	}, {
		eG: 2,
		mapSeed: 0,
		aBg: 8,
		e9: 700,
		aBm: 0
	}, {
		eG: 3,
		mapSeed: 0,
		aBg: 3,
		e9: 800,
		aBm: 0
	}]
}

function aBI() {
	var aDP = [],
		s3 = [];

	function aDV(pI, pT, ev) {
		var aDW = function(pI) {
				var ro = bE.rt.vE(pI),
					aDW = bl.sw.aBe(ro);
				if (aDW) {
					for (aDP.push(aDW); 50 < aDP.length;) aDP.shift();
					return aDW
				}
				for (var aA = aDP.length - 1; 0 <= aA; aA--)
					if (ro === aDP[aA].ro) return aDW = aDP[aA], aA < 40 && aDP.push(aDW), aDW;
				return bl.sw.aBN(ro, pI, 1, 999999, 999999, 0, 0, 0, 0)
			}(pI),
			pI = (0 === ev && 0 === pT.id && pT.qq && (pT.fontSize = bl.ql.aBy(aDW.t3, aDW.a2g), pT.aBw = bl.ql.aBz(aDW.a2g)), document.createElement("span"));
		return pI.textContent = function(aDW, pT, ev) {
			pT = aDW.aBV && aDW.aBV-- && (2 === pT.id || (3 === pT.id || 4 === pT.id) && 0 !== ev);
			return aDW.username + (pT ? " (" + aDW.aBU + ")" : "")
		}(aDW, pT, ev), pI.style.display = "inline-block", pI.style.color = bl.ql.t2(aDW.t3), pI.style.cursor = "pointer", pI.style.margin = "0", pI.style.font = "inherit", pI.style.minWidth = pI.style.minHeight = "1em", bl.ql.t4(aDW) && (pI
			.style.textDecoration = "underline"), bl.ql.aBz(aDW.a2g) && (pI.style.fontWeight = "bold"), pI.onclick = function(e) {
			bl.tI.aD5(e, aDW)
		}, bH.q4() || (pI.onmouseover = function(e) {
			bl.su.t5(e, aDW)
		}), s3.push(pI), pI
	}

	function aDU(p, pT) {
		var qa = document.createElement("span");
		return qa.textContent = p, qa.style.color = pT.aBx, qa.style.margin = "0", qa.style.font = "inherit", qa
	}
	this.tC = function() {
		for (var aA = 0; aA < s3.length; aA++) s3[aA].onclick = s3[aA].onmouseover = null;
		s3[aA] = null
	}, this.transform = function(pT) {
		for (var pG = document.createElement("div"), aDQ = function(pT) {
				var p = pT.p,
					aDQ = [];
				for (;;) {
					var ev = function aDT(p, position) {
						position = p.indexOf("@", position);
						if (position < 0) return -1;
						var pI = p.substring(position + 1, position + 6);
						if (5 !== pI.length) return aDT(p, position + 1);
						if (b8.zW.startsWith(pI, "room")) return aDT(p, position + 1);
						var aDa = new RegExp("^[a-zA-Z0-9_-]+$");
						if (!aDa.test(pI)) return aDT(p, position + 1);
						aDa = p.substring(position + 6, position + 7);
						if (1 !== aDa.length) return position;
						pI = new RegExp("^[ :!.]+$");
						if (!pI.test(aDa)) return aDT(p, position + 1);
						return position
					}(p, 0);
					if (-1 === ev) {
						aDQ.push(aDU(p, pT));
						break
					}
					0 === ev ? aDQ.push(aDV(p.substring(1, 6), pT, ev)) : (aDQ.push(aDU(p.substring(0, ev), pT)), aDQ.push(aDV(p.substring(ev + 1, ev + 6), pT, ev))), p = p.substring(ev + 6)
				}
				return aDQ
			}(pT), aA = 0; aA < aDQ.length; aA++) pG.appendChild(aDQ[aA]);
		pG.style.margin = "0.6em 0.6em", pT.qq && (pG.style.marginLeft = pG.style.marginRight = "inherit"), pG.style.font = "inherit";
		var aDS = 0 < pT.id;
		return pT.aBw && (pG.style.fontWeight = "bold"), aDS && (pG.style.paddingLeft = "0.7em"), aDS && (pG.style.fontStyle = "italic"), pG.style.fontSize = pT.fontSize.toFixed(2) + "em", pG
	}
}

function cK() {
	var aDd, aDe, aDf;

	function aDk(aA) {
		var button = aX.qB[aA],
			eh = button.eh,
			ej = button.ej,
			i = button.i,
			j = button.j;
		tj.fillStyle = button.aDi, tj.fillRect(eh, ej, i, j), aA === aDd && (tj.fillStyle = aDf, tj.fillRect(eh, ej, i, j)), tj.lineWidth = ba.xs, tj.strokeStyle = aDe, tj.strokeRect(eh, ej, i, j),
			function(button) {
				var eh = button.eh,
					ej = button.ej,
					i = button.i,
					j = button.j;
				b8.pb.textAlign(tj, 1), b8.pb.textBaseline(tj, 1), tj.font = button.font, tj.fillStyle = aDe, tj.fillText(button.a5h, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ej = 0, this.gap = 0, this.dU = function() {
		aDd = -1, aDe = b9.mh, aDf = "rgba(255,255,255,0.16)", this.qB = new Array(7), this.j = Math.floor((z.a0.qz() ? .123 : .093) * h.pd), this.i = Math.floor((z.a0.qz() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDg = Math.floor(.26 * this.j),
			aDh = b8.pb.rQ(1, aDg);
		this.qB[0] = {
			eh: 0,
			ej: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5h: "Multiplayer",
			font: aDh,
			aDi: "rgba(22,88,22,0.8)",
			fontSize: aDg
		}, aDg = Math.floor(.18 * this.j), aDh = b8.pb.rQ(1, aDg), this.qB[1] = {
			eh: 0,
			ej: 0,
			i: this.i - this.qB[0].i - this.gap,
			j: this.j,
			a5h: "Single Player",
			font: aDh,
			aDi: "rgba(22,88,88,0.8)",
			fontSize: aDg
		}, this.qB[2] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5h: "",
			font: this.qB[1].font,
			aDi: "rgba(100,0,0,0.8)",
			fontSize: this.qB[1].fontSize
		}, this.qB[3] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: this.j,
			a5h: "Back",
			font: this.qB[0].font,
			aDi: "rgba(0,0,0,0.8)",
			fontSize: this.qB[0].fontSize
		}, this.qB[4] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5h: "The game was updated!",
			font: this.qB[1].font,
			aDi: "rgba(100,0,0,0.8)",
			fontSize: this.qB[1].fontSize
		}, this.qB[5] = {
			eh: 0,
			ej: 0,
			i: this.qB[0].i,
			j: Math.floor(.8 * this.j),
			a5h: "Reload",
			font: this.qB[0].font,
			aDi: "rgba(0,100,0,0.8)",
			fontSize: this.qB[0].fontSize
		}, this.qB[6] = {
			eh: 0,
			ej: 0,
			i: this.qB[1].i,
			j: this.qB[5].j,
			a5h: "Back",
			font: this.qB[0].font,
			aDi: "rgba(0,0,0,0.8)",
			fontSize: this.qB[0].fontSize
		}, this.a84()
	}, this.a84 = function() {
		this.ej = Math.floor(.54 * h.j), this.qB[0].eh = Math.floor(.5 * h.i - .5 * this.i), this.qB[1].eh = this.qB[0].eh + this.qB[0].i + this.gap, this.qB[2].eh = this.qB[3].eh = this.qB[0].eh, this.qB[4].eh = this.qB[5].eh = this.qB[0].eh,
			this.qB[6].eh = this.qB[1].eh, this.qB[0].ej = Math.floor(.54 * h.j), this.qB[1].ej = this.qB[0].ej, this.qB[2].ej = Math.floor((h.j - this.qB[2].j - this.qB[3].j - this.gap) / 2), this.qB[3].ej = this.qB[2].ej + this.qB[2].j + this
			.gap, this.qB[4].ej = Math.floor((h.j - this.qB[4].j - this.qB[5].j - this.gap) / 2), this.qB[5].ej = this.qB[6].ej = this.qB[4].ej + this.qB[4].j + this.gap
	}, this.aDj = function() {
		aDk(0), aDk(1)
	}, this.aDl = function() {
		aDk(2), aDk(3)
	}, this.aDm = function() {
		aDk(4), aDk(5), aDk(6)
	}, this.a0Q = function(eh, ej, lR) {
		var aA = -1;
		return 0 === aZ.a04() ? aA = this.a0u(eh, ej, 0, 2) : 3 === aZ.a04() ? aA = this.a0u(eh, ej, 3, 1) : 5 === aZ.a04() && (aA = this.a0u(eh, ej, 5, 2)), aDd !== aA && (aDd = aA, lR) && (bd.dc = !0), -1 !== aA && (aS.qb(), !0)
	}, this.a0u = function(eh, ej, aDn, size) {
		for (var aA = aDn; aA < aDn + size; aA++)
			if (eh >= this.qB[aA].eh && ej >= this.qB[aA].ej && eh <= this.qB[aA].eh + this.qB[aA].i && ej <= this.qB[aA].ej + this.qB[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDp, aDq, aDr, aDs, aDt, aDu, aDv, aDw, aDx, aDy, aDz, aE0, aE1, aE2 = 1;

	function aE4(aE5) {
		!aE5 && 1 === aE1 && aE2 ? (aE2 = 0, ay.x.close(aE1, 3280)) : aE1 = (aE1 + 1) % ay.x.aE6, aE0 = bd.e9, ay.x.aE7(aE1, 4) && ay.aCk.aE8(aE1)
	}

	function aE9() {
		if (0 !== aE1) return 1 === aE1 && __fx.customLobby.isActive() ? (q.a0F(3249), __fx.customLobby.setActive(!1)) : void aE4();
		q.a0F(3249)
	}

	function aEE(ej, a7l, sh) {
		var m7 = Math.floor((h.i - aDs) / 2) + aDv,
			mK = m7 + Math.floor(sh * (aDs - 2 * aDv));
		tj.lineWidth = a7l, tj.beginPath(), tj.moveTo(m7, ej), tj.lineTo(mK, ej), tj.lineTo(Math.floor(m7 - aDv + sh * aDs), ej + aDr), tj.lineTo(m7 - aDv, ej + aDr), tj.closePath()
	}
	this.aE3 = 1, this.dU = function() {
		aZ.setState(6), aDp = 0, aDq = 1, aDw = "rgba(0,220,120,0.4)", aDx = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aE2 = 1, aE1 = this.aE3 - 1, aE4(1)
	}, this.resize = function() {
		aDs = Math.floor((z.a0.qz() ? .5 : .25) * h.pd), aDt = aDs + 12, aDr = Math.floor(.125 * aDs), aDv = 3 * aDr, aDu = Math.floor(.225 * aDs), aDz = Math.floor(.3 * aDr), aDy = b8.pb.rQ(0, aDz)
	}, this.a07 = function(a01) {
		a01 === aE1 && aE9()
	}, this.gn = function(eh, ej) {
		var m7 = Math.floor((h.i - aDt) / 2),
			m8 = Math.floor(.5 * (h.j - ba.gap - aDr - aDu)) + aDr + ba.gap;
		return m7 < eh && eh < m7 + aDt && m8 < ej && ej < m8 + aDu && (this.a16(), aX.a0Q(eh, ej, !1), !0)
	}, this.a16 = function() {
		ay.x.a0G(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ij = function() {
		6 === aZ.a04() && (bd.e9 > aE0 + 12e3 && aE9(), 100 < (aDp += .07 * aDq * (aDp < 16 ? 5 + aDp : 84 < aDp ? 105 - aDp : 17)) ? (aDp = 100, aDq = -1) : aDp < 0 && (aDp = 0, aDq = 1), aDw = "rgba(0," + Math.floor(190 - 1.9 * aDp) + "," +
			Math.floor(120 - 1.2 * aDp) + "," + (.4 + .004 * aDp) + ")", aDx = "rgba(0," + Math.floor(1.9 * aDp) + "," + Math.floor(1.2 * aDp) + "," + (.8 - .004 * aDp) + ")", bd.dc = !0)
	}, this.ti = function() {
		var eh = Math.floor((h.i - aDt) / 2),
			ej = Math.floor(.5 * (h.j - ba.gap - aDr - aDu));
		! function(title, ej, a7l, sh) {
			tj.fillStyle = aDx, aEE(ej, a7l, 1), tj.fill(), tj.fillStyle = aDw, aEE(ej, a7l, sh), tj.fill(), tj.strokeStyle = b9.mh, aEE(ej, a7l, 1), tj.stroke(),
				function(aEG, ej) {
					b8.pb.textAlign(tj, 1), b8.pb.textBaseline(tj, 1), tj.font = aDy, tj.fillStyle = b9.mh, tj.fillText(aEG, Math.floor(.5 * h.i), Math.floor(ej + .58 * aDr))
				}(title, ej)
		}(L(133), ej, 3, aDp / 100),
		function(eh, ej, i, j, a5h) {
			tj.fillStyle = b9.mc, tj.fillRect(eh, ej, i, j), tj.lineWidth = 3, tj.strokeStyle = b9.mh, tj.strokeRect(eh, ej, i, j);
			var ea = Math.floor(.3 * j);
			b8.pb.textAlign(tj, 1), b8.pb.textBaseline(tj, 1), tj.font = b8.pb.rQ(0, ea), tj.fillStyle = b9.mh, tj.fillText(a5h, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * ea))
		}(eh, ej + aDr + ba.gap, aDt, aDu, L(36))
	}
}

function cM() {
	var zx = 0;
	this.dU = function() {
		aX.dU(), zx = 0
	}, this.setState = function(aEH) {
		zx = aEH
	}, this.a04 = function() {
		return zx
	}, this.aEI = function() {
		this.setState(8), s.w()
	}, this.a0y = function(e) {
		if (!bQ.vU) return !1;
		if (!(bd.e9 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aEJ()) return !0;
				if ("Enter" === e.key) {
					if (0 === zx) return !0;
					if (7 === zx) return !0
				}
			}
			return !1
		}
	}, this.aEK = function() {
		bX.resize()
	}, this.aEJ = function() {
		return !!bX.qs()
	}, this.gn = function(eh, ej) {
		!bQ.vU || bX.gn(eh, ej) || 6 === zx && aY.gn(eh, ej) || bW.gn(eh, ej) || aS.gn(eh, ej)
	}, this.a0Q = function(eh, ej) {
		!aS.a7x && aX.a0Q(eh, ej, !0) || aS.a0Q(eh, ej)
	}, this.click = function(eh, ej) {
		aS.a0p()
	}, this.a0T = function(eh, ej, deltaY) {}, this.aEL = function() {
		aX.a84(), bd.dc = !0
	}, this.ti = function() {
		8 !== zx && 10 !== zx && (tj.imageSmoothingEnabled = !0, this.x2(), 0 !== zx && (aS.ti(), aN.ti(), this.aEM(), bW.ti()), 0 !== zx && 6 === zx && aY.ti(), bX.ti(), s.ti())
	}, this.x2 = function() {
		var aEO, aEN;
		if (__fx.makeMainMenuTransparent) tj.clearRect(0, 0, h.i, h.j);
		else bQ.vU ? (aEN = h.i / bQ.el, aEO = h.j / bQ.em, tj.setTransform(aEN = aEO < aEN ? aEN : aEO, 0, 0, aEN, Math.floor((h.i - aEN * bQ.el) / 2), Math.floor((h.j - aEN * bQ.em) / 2)), tj.drawImage(bQ.vW, 0, 0), tj.setTransform(1, 0, 0, 1,
			0, 0), tj.fillStyle = b9.mc) : tj.fillStyle = b9.mY, tj.fillRect(0, 0, h.i, h.j)
	}, this.aEM = function() {
		var ej = Math.floor(.3 * h.j),
			canvas = aa.aEP("territorial.io"),
			hW = (hW = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hW,
			eh = (tj.globalAlpha = .15, tj.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hW * canvas.width))),
			eh = Math.floor(eh / hW),
			ej = Math.floor(ej - .5 * canvas.height * hW),
			ej = Math.floor(ej / hW);
		tj.setTransform(hW, 0, 0, hW, eh, ej), tj.drawImage(canvas, eh, ej), tj.setTransform(1, 0, 0, 1, 0, 0), tj.globalAlpha = 1, tj.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBk = 0;
	var aER, aES, aET, aEU, aEV, aEW = this.aEQ = 0;

	function aEZ() {
		aEU = aEV = null, aEW = 0
	}
	this.dU = function(qf, aBh, aBi) {
		s.w(), bl.tC(), aZ.setState(10), aEU = qf, aEV = aBh, aEW = aBi, this.aBk = qf.aBk, this.aEQ = aBi, aER = 0, aES = bd.e9 + 4500, ay.x.a0A = qf.a0A, ay.x.a09 === qf.a0A ? (console.log("direct pass"), aET = 0) : (console.log(
			"delayed pass"), ay.x.close(ay.x.a09, 3247), aET = 2, ay.x.aE7(qf.a0A, 5) && ay.o0.aEX()), tj.imageSmoothingEnabled = !0, aZ.x2();
		aBh = aa.aEP("loading"), aBi = (z.a0.qz() ? .396 : .25) * h.pd / aBh.width;
		tj.setTransform(aBi, 0, 0, aBi, Math.floor((h.i - aBi * aBh.width) / 2), Math.floor((h.j - aBi * aBh.height) / 2)), tj.imageSmoothingEnabled = !1, tj.drawImage(aBh, 0, 0), tj.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lP = function() {
		0 < aET && bd.e9 > aES && (aET--, aES += 4500, 0 === bd.aEb) && 0 === bd.jm() && ay.x.aE7(ay.x.a0A, 5)
	}, this.aEc = function() {
		return 10 === aZ.a04() && (bl.aB9.aBl(aEU, aEV, aEW), aEZ(), !0)
	}, this.aEd = function() {
		10 === aZ.a04() && 2 <= ++aER && (bl.aB9.aBl(aEU, aEV, aEW), aEZ())
	}
}

function cN() {
	var aEf, canvas, zD, aEg;

	function aEm(dx, name, aEn, pI) {
		zD[dx] = name, canvas[dx] = new Image, canvas[dx].onload = function() {
			! function(dx, aEn) {
				var a2m, a2n = null;
				7 === aEn ? a2m = b8.a1C.a2p : 8 === aEn ? (a2m = b8.a1C.a2s, a2n = .1) : 3 === aEn ? (a2m = b8.a1C.a2q, a2n = .06) : 5 === aEn ? a2m = b8.a1C.a2t : 6 === aEn ? a2m = b8.a1C.a2o : 4 === aEn && (a2m = b8.a1C.a2u);
				canvas[dx] = b8.a1C.a2l(canvas[dx], a2m, a2n)
			}(dx, aEn), aEp()
		}, canvas[dx].onerror = function(e) {
			console.error("Error loading image at index", dx, "Error:", e), aEp()
		}, canvas[dx].src = "data:image/png;base64," + pI
	}

	function aEp() {
		aEf--, aEj()
	}

	function aEj() {
		0 === aEf && (aEf = -1, aEl(), bd.dc = !0, canvas[7] = aEg, canvas[8] = aEg, canvas[9] = aEg, canvas[10] = aEg, 5 === s.rq) && s.aDL().aEr.resize()
	}

	function aEl() {
		aK.a3y(), bW.aB0([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vZ = new xP, ai.vZ.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aEf = 23, canvas = new Array(aEf), zD = new Array(aEf), (aEg = document.createElement("canvas")).width = 1;
			for (var aA = aEf - (aEg.height = 1); 0 <= aA; aA--) canvas[aA] = aEg;
			aEl(), aEm(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEm(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEm(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEm(3, "orders", 6,
					"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"
					), aEm(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), aEm(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEm(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPNNtkZ1KD3338/9tlnn3jttdeyU4pOv3794uKLL3YAdz128MEHx2233ZadQR1guCeH4R4ACknjxo3j0EMPjZ122ik233zzaNWqVXZSwaqqqoo333wzXnjhhXjooYfioYceyk4CIP5vyOGXv/xlHHjggfGTn/wkGjRokJ1U53z22Wfx1FNPxa233urxC2qA4Z4chnsAAAAAAAAA6i/P+AIAAAAAAAAAQA0aPnx4fPDBB9kZVMOKK65Y70eWevbsGVtttVV2BgvMnz8/RowYkZ0BwFLo1KlT9OzZMzuDGjRu3LjYZpttjPYk+d3vfhcHHXRQfP7559kpLKU+ffpkJwAAUI9VVFTEKaecEk899VRMmTIlrrnmmthtt92M9ixnpaWl0blz5+jbt288+OCD8fHHH8ddd90Vffr0cYg4QII2bdrEJZdcEh9++GFcd9118bOf/cxozw9YddVVY5999okHH3wwxo8fH8OGDYtmzZplZwEAAAAAAAAAUCRKImJ+dgQAAAAAAABATfr3v/8da665ZnZGUfvggw9i7bXXzs4ASHPSSSfFxRdfnJ1BNUyZMiXWXHPNmDNnTnbKUvnTn/4Uu+66a3YGCzz11FPRu3fv7AwAlsLll18exx57bHYGNWTMmDGx/fbbx/Tp07NTil7Pnj3jzjvvjLZt22ansIRmzpwZq622WsyaNSs7hWQvvfRSbLrpptkZRadfv35x3XXXZWeQ7Je//GWcfPLJ2RlF5+OPP44ddtghOwPqpbKysujXr1/svvvu8ZOf/CSaNGmSncRCJk+eHE8//XTcdttt8dBDD2XnQL3g+7HadeKJJ8aTTz6ZnVEjunTpEoMHD45ddtklmjdvnp1Tb02fPj1GjRoVl156aYwdOzY7B+qVmTNnRtOmTbMzio6xTAAAAAAAAID6q0F2AAAAAAAAAAAAFJpLLrkkjjjiiOjcuXN2CovRsmXLGDhwYAwbNiw7ZYl16dIltt9+++wMFpg3b14MHTo0OwOApbT77rtnJ1BDxowZE9tuu23MmDEjO4WIeP7552OnnXaKUaNGxRprrJGdwxJo3rx5HHXUUXHJJZdkpwAUrZYtW/r9YoJmzZplJ0C9s+OOO8Zhhx0W2267bayyyirZOfyAVq1axb777hv77rtvfPjhhzFq1Kj43e9+F+PGjctOgzrL92O1q6KiIjthmW2yySYxZMiQ2HHHHaNRo0bZOfVeRUVFHHTQQbHffvvFI488EiNGjIgxY8ZkZwEAAAAAAAAAUIBKswMAAAAAAAAAAKAQXXTRRdkJVNOhhx4apaX176VUAwcOdOBTHXL//ffHCy+8kJ0BwFI48MADDYoUCKM9ddMbb7wRu+66a3z00UfZKSyh3XbbLTsBAIA6qqKiIoYPHx7jxo2LP//5z7Hvvvsa7alH2rdvH8ccc0yMHTs2/va3v0X//v3r5fMkAHVFp06dYuTIkfG3v/0tdtttN8/h1rCGDRvGbrvtFi+88EL8+c9/jp49e2YnAQAAAAAAAABQYLyKEgAAAAAAAAAAloObbropXnnllewMqqF9+/Zx/PHHZ2cskXbt2sXuu++encECX375ZQwaNCg7A4Cl1KdPn+wEasC4ceNit912M9pTR/3/4z0ff/xxdgpLYLPNNouWLVtmZwAAUIdsscUWceedd8aHH34YQ4cOjc6dO2cnsQwaNGgQW2yxRVxxxRXx4YcfxpVXXhkdOnTIzgKoN8rLy+Oqq66KsWPHxt577x0NGzbMTipoDRo0iB133DGeeuqpuPfeez1mAQAAAAAAAABQYxpkBwAAAAAAAAAAQKEaMWJEPPDAA1FSUpKdwmIcccQRcemll2ZnVNvQoUOjadOm2RkscNNNN8X777+fnQHAUqioqIitt946O4NlNGHChNhtt91i0qRJ2SkswhtvvBH77rtv/OlPf4oWLVpk51ANjRs3jiOPPDLOPffc7BQAAJIdeOCBcfTRR8cWW2wRZWVl2TksB23bto1jjjkmfvnLX8Zjjz0Wv/3tb+O5557LzgKos/r16xeDBw+O1VdfPTul6JSVlcWee+4ZvXv3jhtuuCEGDBgQlZWV2VkUqLXWWivat2+fnbHESktLsxOK0lZbbZWdUGs++eSTePfdd7MzAAAAAAAAAGqM4R4AAAAAAAAAAFhOHnrooXjqqadim222yU5hMTbYYIM46KCD4tZbb81OWazy8vLYZ599sjNYYNKkSTFo0KDsDACW0nHHHWcMr56bMmVK7L333jFhwoTsFKrhxRdfjIMOOihGjhwZK664YnYO1bDddtsZ7gEAKGL9+/ePo48+Orp06ZKdQi1p3Lhx7L777vHzn/88Xnjhhbj88svjnnvuyc4CqDO6d+8el156afTs2TM7peiVl5fHySefHL/4xS9ixIgR8fvf/z47iQJ06qmnxq9+9avsDOqJp59+Ojuh1tx2221x8MEHZ2cAAAAAAAAA1JjS7AAAAAAAAAAAAChkw4cPj8rKyuwMqqF///7ZCdUydOjQqKioyM5ggSuuuCJmzZqVnQHAUtpjjz2yE1gGc+bMiaOOOirGjh2bncISeOyxx+LYY4+NefPmZadQDZtuuqmfPwAAitBJJ50U77zzTlxxxRVGe4pUaWlp9OzZM0aOHBkvvfRSHHDAAdlJAOnOOuusePrpp4321DFrrrlmXH/99fHII49Ehw4dsnMAAAAAAAAAAKiHDPcAAAAAAAAAAMBy9Nxzz8XDDz+cnUE1bLrpprHTTjtlZyxSWVlZHHjggdkZLPDWW2/Feeedl50BwFLaeOONY6ONNsrOYBmceeaZ8eCDD2ZnsBRuueUW30fVE02aNIlDDz00OwMAgFpywgknxFtvvRUXX3xxdOzYMTuHOmLTTTeNW2+9NV5++eXYa6+9snMAal23bt3ipZdeiiFDhkTz5s2zc/gBO+ywQ7zyyitx/PHHZ6cAAAAAAAAAAFDPGO4BAAAAAAAAAIDlbMiQITF37tzsDBajpKQkTjrppOyMRRo4cGC0adMmO4MFzj333OwEAJbB4YcfHiUlJdkZLKWbb745LrzwwuwMlsGZZ54Zt99+e3YG1VDXB04BAFh2BxxwQPzzn/+MSy65JNZZZ53sHOqoTTbZJO6+++549tlno3fv3tk5ALXiuOOOi6eeeio23XTT7BSqYeWVV45LL700Ro0aFS1btszOAQAAAAAAAACgnjDcAwAAAAAAAAAAy9m4cePinnvuyc6gGnr16hWbbbZZdsYPOvzww7MTWOCFF16IW265JTsDgGWwww47ZCewlF588cU44ogjsjOoAYccckiMHTs2O4PF2GSTTaK01NtPAAAKUa9eveK5556LW2+9NX70ox9l51APlJSURM+ePePRRx+N++67L9Zdd93sJIDlonHjxjFy5Mi47LLLoqKiIjuHJbTzzjvHmDFj4uc//3l2CgAAAAAAAAAA9YB3TgEAAAAAAAAAQC0YOHBgfPnll9kZLEZZWVmcdtpp2Rnf67jjjou11147O4OIqKysjKFDh2ZnALAMevXqFeuss052Bkth8uTJceCBB0ZVVVV2CjWgqqoqDjrooPjss8+yU1iEVVZZJX7xi19kZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiRnQJAHc2dOzemTJkSPXv2zE6hnuy7774xefLkOPzww+Odd97JzilK3bt3j9tuuy123HHH7BQ20KOPPpqdAABQ7+bOnRuvvfZa7LLLLtkpRaO0tDTOO++8OPjgg7NT+IzTTz89KioqsjOanZdfftlwDwBAETvyyCMN9wAAAAAAAAA0MaXZAQAAAAAAAAAA0ByUlpZG//79szOowaOPPhqTJk3Kztgg1dXVce2112ZnUEunnXZalJeXZ2cAsAFuuumm7ATq2Te/+c2YPHlydO3aNTul6BxzzDHx4IMPGu1pwtauXRvjx4/PzgAAaBB/+9vfshOKzkEHHRT77rtvdgafceihh2YnNEtvvfVWdgIAAIkOOOCAKC11pBMAAAAAAABAU+K3vAAAAAAAAAAAUA/OPvvs6NSpU3YG67FmzZqorKzMztgoY8eOjddeey07g1rYdtttm/znG0CxmjBhQrzxxhvZGdSzjh07xp/+9Kc4+uijs1OKxpgxY+KWW26Jtm3bZqewEZ577rmYM2dOdgYAQIOYPHlydkLRKSsrixEjRmRn8Cl77713fPOb38zOaJZeffXV7AQAABJtt9120bt37+wMAAAAAAAAAOrAcA8AAAAAAAAAAGyksrKy6NevX3YGNZg4cWJMmzYtO2OjXXXVVdkJ1NKJJ54YHTt2zM4AYAPccccd2Qk0gK222ipuvvnmGDp0aHZKs1ZeXh4PP/xwnHPOObHJJptk57CR7rvvvuwEAIAGc+utt8bKlSuzM4rOd7/73Tj88MOzM/hfp556apSUlGRnNEsvvPBCdgIAAMlOOumk7AQAAAAAAAAA6sBwDwAAAAAAAAAAbKQRI0bEDjvskJ3BeqxevTqGDBmSnVEvLr/88pg9e3Z2BrWw+eabx6hRo7IzANgAF198cSxbtiw7gwaw6aabxtChQ+OBBx6I8vLy7Jxm55BDDomZM2dGr169slOoBx999FFcffXV2RkAAA1m1apVMWvWrOyMolNSUhIVFRXZGUREq1at4kc/+lF2RrP15JNPZicAAJDs29/+dvTs2TM7AwAAAAAAAIBaMtwDAAAAAAAAAAAboby8PPr06ZOdQQ3uv//+eOGFF7Iz6s24ceOyE6ilI488Mrp27ZqdAUAdLV26NB5++OHsDBrQoYceGjNmzIiDDjooO6XZuPTSS+Oee+6Jjh07ZqdQT5544olYsWJFdgYAQIN66qmnshOK0je/+c0YPHhwdkbRGzp0aGy11VbZGc3S+++/H3Pnzs3OAAAgWWlpaQwaNCg7AwAAAAAAAIBaMtwDAAAAAAAAAAAbYfjw4dG+ffvsDNZj5cqVMWTIkOyMenX99dfHzJkzszOohU033TQqKyuzMwDYAJdffnlUVVVlZ9CAdt5553jwwQfjoosuitJSt9RvqP333z+ef/75+NWvfhWbbrppdg716IYbbshOAABocPfcc092QtH61a9+FR06dMjOKFqtWrWKn//859kZzdZrr72WnQAAQIE44IAD4qijjsrOAAAAAAAAAKAWPMsQAAAAAAAAAAA2ULt27eLEE0/MzqAGd955Z7z++uvZGfXu0ksvzU6glnr27Bm9evXKzgCgjp555pmYOnVqdgYNrGXLlnHmmWfG3/72t+jRo0d2TpPSqlWruOaaa+JPf/pTfOMb38jOoZ7NmTMnHnrooewMAIAG9+yzz8Ybb7yRnVGUttpqq7j66quzM4pWZWVlbLvtttkZzdYLL7yQnQAAQIEoKSmJkSNHRllZWXYKAAAAAAAAAF/AcA8AAAAAAAAAAGygUaNGRdu2bbMzWI9ly5ZFRUVFdkaDuPXWW2P69OnZGdRCaWlpDB06NDsDgA1wxRVXZCfQSL7xjW/Eo48+Gtddd12Ul5dn5xS8fv36xSuvvBK/+MUvYtNNN83OoQE88MAD2QkAAI3GaGuegw8+OE4//fTsjKKz8847R58+fbIzmrVp06ZlJwAAUEB22WWXuPzyy7MzAAAAAAAAAPgChnsAAAAAAAAAAGADdO7cOX7yk59kZ1CDCRMmxLx587IzGszFF18c69aty86gFv7f//t/0bt37+wMAOro3nvvjVmzZmVn0Eg23XTTOPnkk2POnDlx3nnnZecUpB/84Acxffr0uPzyy2OnnXbKzqGBrFixIsaNG5edAQDQaO69997shKI2dOjQ2HXXXbMzisq4ceNiiy22yM5ottauXRsPPvhgdgYAQKxZsyY7gU855ZRT4uijj87OAAAAAAAAAOBzGO4BAAAAAAAAAIANMGzYsGjTpk12BuuxePHiGDZsWHZGg7r77rvj6aefzs6gls4+++zsBAA2wA033JCdQCPbbrvtorKyMmbPnh3HHntsdk5B6NmzZ0yaNCkeeuih6Nq1a3YODeyRRx6JBQsWZGcAADSaP/zhD7Fw4cLsjKK11VZbxS233BKlpZ7q3Bj69OkTBx98cHZGs/bWW2/F0qVLszMAAAz3FJhNNtkkrrjiithrr72yUwAAAAAAAACogbtZAQAAAAAAAACgjrp06RJHHnlkdgY1uPnmm2PRokXZGQ1u7NixUV1dnZ1BLeyyyy5x7rnnZmcAUEdXXnllvP3229kZJNh1113j1ltvjWeffTZ69+6dnZPiiCOOiCeeeCL+9Kc/xXe/+10HaReBdevWxZVXXpmdAQDQ6KZMmZKdUNS+9a1vxXXXXZed0ex16NAhKisro6SkJDulWXvppZeyEwAAKFDt2rWLO++8M3beeefsFAAAAAAAAADWw7PnAAAAAAAAAACgjkaOHBktW7bMzmA9Fi5cGOeff352RqN4+OGHY/LkydkZ1FK/fv2iVatW2RkA1NGNN96YnUCib33rWzF+/Ph4+eWXY8CAAc1+vKasrCzOPPPMmDVrVtxzzz2x//77N/uPmf/Pc8895/sLAKAo3XvvvdkJRe+kk06KX//619kZzdqtt94a2267bXZGs/fXv/41OwEAgALWqVOn+NOf/mS8BwAAAAAAAKAAeRYdAAAAAAAAAADUQbdu3eLggw/OzqAG48ePj1WrVmVnNJoxY8ZEVVVVdga18OUvfzlGjRqVnQFAHVVWVsb8+fOzM0i2yy67xMUXXxzvvvtu3HDDDdG1a9fspHrVo0ePuPXWW2PBggVx0UUXxR577JGdRIKbbropOwEAIMUdd9wR7733XnZGUSspKYlRo0bFEUcckZ3SLF1xxRXRvXv37Ixmr7q6Ou68887sDACAiIiium+mqencuXM88cQTvkYHAAAAAAAAKDCGewAAAAAAAAAAoA4qKiqiRYsW2Rmsx7vvvhvDhg3LzmhUjz/+eDz22GPZGdTSSSedFDvuuGN2BgB1UFVVFbfcckt2BgVi2223jZNOOin++te/xvTp0+O8886L7bffPjtrg+yzzz5x+eWXx+zZs+PJJ5+MY489NrbeeuvsLJLMnTs3rr766uwMAIA0f/7zn7MTil6rVq3i+uuvj27dumWnNCtnnHFG/Nd//Vd2RlF49dVXY+7cudkZAAAREbF69ersBD5Hhw4d4uGHH45+/fplpwAAAAAAAADwvwz3AAAAAAAAAABALfXs2TN69uyZnUENrrzyyqiqqsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aEm(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEm(8,
					"googleplay", 3,
					"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"
					), aEm(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEm(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEm(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEm(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEm(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEm(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aEm(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEm(16, "apple", 3,
					"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"
					), aEm(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEm(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEm(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEm(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEm(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEm(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dx) {
		return canvas[dx]
	}, this.aEP = function(name) {
		for (var aA = zD.length - 1; 0 <= aA; aA--)
			if (zD[aA] === name) return canvas[aA];
		return aEg
	}, this.sI = function() {
		return aEf <= 0
	}, this.aEi = function() {
		aEf = 0, aEj()
	}
}

function cO() {
	var aEu, aEv, aEw, aEx, aEy, aEz, aF0, aF1, aF2, aF3, aEs = [
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
		aEt = [
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

	function aF9(j6, mP) {
		for (var aA = j6; aA < mP; aA++) aEu[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEv[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEw[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100))
	}

	function aF8(j6, mP) {
		for (var colorsData = aC.data.colorsData, aA = j6; aA < mP; aA++) {
			var f2 = colorsData[aA];
			aEu[aA] = 4 * (f2 >> 12), aEv[aA] = 4 * (f2 >> 6 & 63), aEw[aA] = 4 * (63 & f2)
		}
	}

	function aFK(eE, aFM) {
		aAN[eE] = 0, aAN[eE + 1] = 0, aAN[eE + 2] = aFM, aAN[eE + 3] = 0, aFN(eE)
	}

	function aFN(eE) {
		var eh;
		bZ.mX || (eh = ab.x3(eE), eE = ab.x4(eE), bZ.mX = eh >= bY.aAM[0] && eh <= bY.aAM[2] && eE >= bY.aAM[1] && eE <= bY.aAM[3])
	}
	this.ec = new Int32Array(4), this.dV = function() {
		var ec = this.ec;
		ec[0] = -4 * bQ.el, ec[1] = 4, ec[2] = -ec[0], ec[3] = -ec[1]
	}, this.dU = function() {
		if (aEu = new Uint8Array(aC.eX), aEv = new Uint8Array(aC.eX), aEw = new Uint8Array(aC.eX), aEx = new Uint8Array(aC.eX), aEy = new Uint8Array(aC.eX), aEz = new Uint8Array(aC.eX), aF0 = new Uint8Array(aC.eX), aF1 = new Uint8Array(aC.eX),
			aF2 = new Uint8Array(aC.eX), aF3 = new Uint8Array(aC.eX), this.a6x = new Uint8Array(aC.eX), aC.hP)
			for (var a94 = be.a94, aA = aC.eX - 1; 0 <= aA; aA--) {
				var ev = a94[aA],
					kX = bJ.dj((aEt[ev][3] + 1) * aw.random(), aw.value(100));
				aEu[aA] = aEs[ev][0] + kX * aEt[ev][0], aEv[aA] = aEs[ev][1] + kX * aEt[ev][1], aEw[aA] = aEs[ev][2] + kX * aEt[ev][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aF8(0, aC.jp), aF9(aC.jp, aC.eX)) : aF9(0, aC.eX) : aF8(0, aC.eX);
		! function() {
			var aA, ed;
			for (aA = aC.eX - 1; 0 <= aA; aA--) ed = bJ.dj(aEu[aA] + aEv[aA] + aEw[aA], 3), aEu[aA] += aFF(ed - aEu[aA], 2), aEv[aA] += aFF(ed - aEv[aA], 2), aEw[aA] += aFF(ed - aEw[aA], 2), aEu[aA] -= aEu[aA] % 4, aEv[aA] -= aEv[aA] % 4, aEw[
				aA] -= aEw[aA] % 4
		}(),
		function() {
			for (var aA = aC.eX - 1; 0 <= aA; aA--) aEu[aA] += bJ.dj(aA, 128), aEv[aA] += bJ.dj(aA % 128, 32), aEw[aA] += bJ.dj(aA % 32, 8), aEx[aA] = aA % 8
		}(), this.aFC(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aEy[aA] = aEu[aA] < 32 ? aEu[aA] + 32 : aEu[aA] - 32, aEz[aA] = aEv[aA] < 32 ? aEv[aA] + 32 : aEv[aA] - 32, aF0[aA] = aEw[aA] < 32 ? aEw[aA] + 32 : aEw[aA] - 32
			}(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aF1[aA] = 235 < aEu[aA] ? aEu[aA] - 20 : aEu[aA] + 20, aF2[aA] = 235 < aEv[aA] ? aEv[aA] - 20 : aEv[aA] + 20, aF3[aA] = 235 < aEw[aA] ? aEw[aA] - 20 : aEw[aA] + 20
			}()
	}, this.a5w = function(player) {
		var g = bM.f9;
		return g[0] = aEu[player], g[1] = aEv[player], g[2] = aEw[player], g
	}, this.aFC = function() {
		for (var aA = aC.eX - 1; 0 <= aA; aA--) this.a6x[aA] = aEu[aA] + aEv[aA] + aEw[aA] < 280 ? 0 : 1
	}, this.x3 = function(eE) {
		return bJ.dj(eE, 4) % bQ.el
	}, this.x4 = function(eE) {
		return bJ.dj(eE, 4 * bQ.el)
	}, this.wd = function(eh, ej) {
		return Math.floor(4 * (ej * bQ.el + eh))
	}, this.wt = function(eE) {
		var ec = this.ec;
		return this.aFG(eE + ec[0]) || this.aFG(eE + ec[1]) || this.aFG(eE + ec[2]) || this.aFG(eE + ec[3])
	}, this.ez = function(eE) {
		var ec = this.ec;
		return this.ef(eE + ec[0]) || this.ef(eE + ec[1]) || this.ef(eE + ec[2]) || this.ef(eE + ec[3])
	}, this.wr = function(eE, player) {
		var ec = this.ec;
		return this.aFH(eE + ec[0], player) || this.aFH(eE + ec[1], player) || this.aFH(eE + ec[2], player) || this.aFH(eE + ec[3], player)
	}, this.g9 = function(eE) {
		return 208 <= aAN[eE + 3]
	}, this.wy = function(player, eE) {
		return this.g9(eE) && this.aFI(player, eE)
	}, this.aFI = function(player, eE) {
		return player === this.eS(eE)
	}, this.aFJ = function(eE) {
		return 208 <= aAN[eE + 3] && aAN[eE + 3] < 224
	}, this.j2 = function(eE) {
		return 224 <= aAN[eE + 3] && aAN[eE + 3] < 248
	}, this.ws = function(eE) {
		for (var ec = this.ec, aA = 3; 0 <= aA; aA--)
			if (this.h2(eE + ec[aA])) return !0;
		return !1
	}, this.eV = function(eE) {
		return this.g9(eE) || this.eR(eE)
	}, this.h2 = function(eE) {
		return 0 === aAN[eE + 3] && 2 === aAN[eE + 2]
	}, this.eR = function(eE) {
		return 0 === aAN[eE + 3] && 1 === aAN[eE + 2]
	}, this.vi = function(eE) {
		return 0 === aAN[eE + 3] && 3 === aAN[eE + 2]
	}, this.ef = function(eE) {
		return 0 === aAN[eE + 3] && 5 <= aAN[eE + 2]
	}, this.aFG = function(eE) {
		return 0 === aAN[eE + 3] && 3 <= aAN[eE + 2]
	}, this.eI = function(eE) {
		return aAN[eE + 2] - 5
	}, this.aFH = function(eE, player) {
		return this.eR(eE) || this.g9(eE) && player !== this.eS(eE)
	}, this.eS = function(eE) {
		return aAN[eE] % 4 * 128 + aAN[eE + 1] % 4 * 32 + aAN[eE + 2] % 4 * 8 + aAN[eE + 3] % 8
	}, this.wz = function(eE) {
		aFK(eE, 1)
	}, this.aFL = function(eE) {
		aFK(eE, 2)
	}, this.we = function(eE, player) {
		aAN[eE] = aEu[player], aAN[eE + 1] = aEv[player], aAN[eE + 2] = aEw[player], aAN[eE + 3] = 208 + aEx[player], aFN(eE)
	}, this.g4 = function(eE, player) {
		aAN[eE] = aEy[player], aAN[eE + 1] = aEz[player], aAN[eE + 2] = aF0[player], aAN[eE + 3] = 224 + aEx[player], aFN(eE)
	}, this.j3 = function(eE, player) {
		aAN[eE] = aF1[player], aAN[eE + 1] = aF2[player], aAN[eE + 2] = aF3[player], aAN[eE + 3] = 248 + aEx[player], aFN(eE)
	}
}

function cm() {
	var dx = 0,
		aFO = new Uint16Array(32);

	function remove(a42) {
		var aA;
		for (dx -= 2, aA = a42; aA < dx; aA += 2) aFO[aA] = aFO[aA + 2], aFO[aA + 1] = aFO[aA + 3]
	}
	this.dU = function() {
		dx = 0
	}, this.ij = function() {
		var aA, j0, i9;
		if (0 !== dx)
			if (0 === af.lf[aC.eK] || ac.aFP(aC.eK) === ac.ff(aC.eK)) dx = 0;
			else
				for (aA = dx - 2; 0 <= aA; aA -= 2)(j0 = aFO[aA]) < aC.eX && 0 === af.lf[j0] ? remove(aA) : (i9 = aFO[aA + 1], (j0 >= aC.eX && aFQ(aC.eK) || j0 < aC.eX && aFR(aC.eK, j0)) && (b6.gw.h7(i9, j0), remove(aA)))
	}, this.h9 = function(j0, i9) {
		! function(j0, i9) {
			var aA;
			for (aA = 0; aA < dx; aA += 2)
				if (aFO[aA] === j0) return aFO[aA + 1] = Math.min(aFO[aA + 1] + i9, 1023), 1;
			return
		}(j0, i9) && 32 !== dx && (aFO[dx] = j0, aFO[dx + 1] = i9, dx += 2)
	}
}

function cP() {
	function aFY(player) {
		var di;
		b8.fv.a2M(player) && (di = af.gb[player] - af.a2Q[player] + ac.aFa(player), bb.fz(player, Math.abs(di), di < 0 ? 18 : 12)), af.gb[player] = 0, af.a2Q[player] = 0
	}

	function aFh() {
		aW.show(!1, !1, !1, !0), aV.a9X(), bP.yc.zN()
	}

	function aFV(player, aFg) {
		for (var aA = aFg.length - 1; 0 <= aA; aA--) ac.aFj(aFg[aA], player)
	}

	function aFX(player) {
		for (var iO = af.iO, iP = af.iP, iQ = af.iQ, iR = af.iR, m7 = iO[player], m8 = iQ[player], el = bQ.el, gN = af.gN, eh = iP[player]; m7 <= eh; eh--)
			for (var ej = iR[player]; m8 <= ej; ej--) {
				var g7 = 4 * (ej * el + eh);
				ab.wy(player, g7) && (ab.wz(g7), gN[player]--)
			}
		iP[player] = iR[player] = 0, iO[player] = iQ[player] = Math.max(el, bQ.em)
	}
	this.dd = function(g7) {
		var player, di = af.gN[g7];
		bL.x.oo[g7] ? di && (aFV(player = g7, ac.aFW(player)), aFX(player), aE.fx(player), ac.clear(player), aFY(player), function(player) {
			af.wZ[player] = 0, af.g1[player] = [], af.gF[player] = [], af.gG[player] = [], af.f0[player] = []
		}(player)) : !di && af.g1[g7].length || this.aFU(g7)
	}, this.aFU = function(player) {
		! function(player) {
			b8.fv.jD(player) || (af.zR[player] = bg.zk.aFf(), aC.yt++);
			var aFg = ac.aFW(player);
			0 === aFg.length ? b8.fv.a2J(player) && aFh() : (aFV(player, aFg), function(player, aFg) {
				var aFl = aFg[function(aFg) {
					var aA, dx = 0;
					for (aA = aFg.length - 1; 1 <= aA; aA--) af.gN[aFg[aA]] > af.gN[aFg[dx]] && (dx = aA);
					return dx
				}(aFg)];
				9 === aC.k6 && (1 === be.eY[player] ? aw.jh(8) && ax.aFm(aFl) : aD.hE[player] && (aM.a4G(765, 0), aM.zF(280, L(134, [af.zS[aFl], af.zS[player]]), 765, aFl, b9.mY, b9.no, -1, !0)));
				if (b8.fv.a2J(player)) aFh(), aM.z3(aFl, 1);
				else {
					for (var aA = aFg.length - 1; 0 <= aA; aA--)
						if (b8.fv.a2M(aFg[aA]) && (bb.lb[4 - b8.fv.jD(player)]++, b8.fv.a2J(aFg[aA]))) return aM.z3(player, 0);
					b8.fv.jD(player) || aM.a5E(0, player, aFl)
				}
			}(player, aFg))
		}(player), aFX(player), aFY(player),
			function(player) {
				af.lf[player] = 0, af.g1[player] = null, af.gF[player] = null, af.gG[player] = null, af.f0[player] = null
			}(player), aE.fx(player), ac.clear(player), bL.aFd.aFe(player)
	}
}

function cr() {
	var input;

	function aFn(e) {
		(e = e.target.files) && 0 < e.length && b4.aFq(e[0])
	}

	function aFu(e) {
		var ev = new Image;
		ev.onload = aFv, ev.src = e.target.result
	}

	function aFv(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aFx || j > bQ.aFx || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aFx + ".", z.uK ? z.uK.showToast(e) : alert(e)) : 20 === s.rq && s.aDL().aFv(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFn
	}, this.tC = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFo = function() {
		input.click()
	}, this.aFq = function(aFr) {
		var g = aFr.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFu, g.readAsDataURL(aFr))
	}
}

function cp() {
	this.aFz = null, this.dU = function() {
		10 !== aC.k6 ? this.aFz = null : this.aFz = new Uint32Array(aC.eX)
	}, this.ij = function() {
		10 === aC.k6 && this.ql()
	}, this.ql = function() {
		for (var g7, target, a9i, aFz = this.aFz, yf = ak.jr, a2R = af.gb, aA = ak.jq - 1; 0 <= aA; aA--)(g7 = yf[aA]) >= aC.jp || (target = Math.max(bJ.dj(a2R[g7], 4), 2048), a9i = Math.max(ad.a9j(g7), 100), aFz[g7] += bJ.dj(a9i * target, 1e4),
			aFz[g7] > target && (aFz[g7] = target))
	}, this.a2X = function(player, hE) {
		return hE > this.aFz[player] ? (hE = this.aFz[player], this.aFz[player] = 0) : this.aFz[player] -= hE, hE
	}
}

function dQ() {
	function aG1(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aG9, g.readAsText(e))
	}

	function aG9(e) {
		var aGD;
		aC.yr || (e = JSON.parse(e.target.result), aGD = aC.data = new a3O, aGE(e, aGD, "mapType", 0, 2), aGE(e, aGD, "mapProceduralIndex", 0, 255), aGE(e, aGD, "mapRealisticIndex", 0, 255), aGE(e, aGD, "mapSeed", 0, 16383), function(aGC, aGD, g8,
				max) {
				aGC = aGC[g8];
				aGD[g8] = aGK(aGC) ? aGC.slice(0, max) : aGD[g8]
			}(e, aGD, "mapName", 20), function(aGC, aGD, g8) {
				var aFw;
				2 === aGD.mapType && (!aGK(aGC = aGC[g8]) || aGC.length <= 20 ? aGD.mapType = 0 : ((aFw = new Image).onload = function() {
					b7.aGL.aGM(aFw, 1), aFw.onload = null, aFw = null
				}, aFw.src = aGC))
			}(e, aGD, "canvas"), aGE(e, aGD, "passableWater", 0, 1), aGE(e, aGD, "passableMountains", 0, 1), aGE(e, aGD, "playerCount", 1, 512), aGE(e, aGD, "humanCount", 1, 1), aGE(e, aGD, "selectedPlayer", 0, 0), aGE(e, aGD, "gameMode", 0, 1),
			aGE(e, aGD, "playerMode", 0, 0), aGE(e, aGD, "battleRoyaleMode", 0, 0), aGE(e, aGD, "numberTeams", 0, 8), aGE(e, aGD, "isZombieMode", 0, 0), aGE(e, aGD, "isContest", 0, 0), aGE(e, aGD, "isReplay", 0, 0), aGH(e, aGD, "elo", 16, 2,
				16383), aGE(e, aGD, "colorsType", 0, 1), aGE(e, aGD, "colorsPersonalized", 0, 1), aGH(e, aGD, "colorsData", 32, 512, 262143), aGE(e, aGD, "selectableColor", 0, 1), aGH(e, aGD, "teamPlayerCount", 16, 9, 512), aGE(e, aGD,
				"neutralBots", 0, 1), aGE(e, aGD, "botDifficultyType", 0, 3), aGE(e, aGD, "botDifficultyValue", 0, 15), aGH(e, aGD, "botDifficultyTeam", 8, 9, 15), aGH(e, aGD, "botDifficultyData", 8, 512, 15), aGE(e, aGD, "spawningType", 0, 2),
			aGE(e, aGD, "spawningSeed", 0, 16383), aGH(e, aGD, "spawningData", 16, 1024, 4095), aGE(e, aGD, "selectableSpawn", 0, 1), aGE(e, aGD, "playerNamesType", 0, 2),
			function(aGC, aGD, g8, size, max) {
				var a1X = aGC[g8];
				if (Array.isArray(a1X)) {
					for (var a1Y = new Array(size), ea = Math.min(a1X.length, size), aA = 0; aA < ea; aA++) a1Y[aA] = aGK(a1X[aA]) ? a1X[aA].slice(0, max) : "";
					aGD[g8] = a1Y
				}
			}(e, aGD, "playerNamesData", 512, 20), aGE(e, aGD, "selectableName", 0, 1), aGE(e, aGD, "aIncomeType", 0, 2), aGE(e, aGD, "aIncomeValue", 0, 255), aGH(e, aGD, "aIncomeData", 8, 512, 255), aGE(e, aGD, "tIncomeType", 0, 2), aGE(e, aGD,
				"tIncomeValue", 0, 255), aGH(e, aGD, "tIncomeData", 8, 512, 255), aGE(e, aGD, "iIncomeType", 0, 2), aGE(e, aGD, "iIncomeValue", 0, 255), aGH(e, aGD, "iIncomeData", 8, 512, 255), aGE(e, aGD, "sResourcesType", 0, 2), aGE(e, aGD,
				"sResourcesValue", 0, 2047), aGH(e, aGD, "sResourcesData", 16, 512, 2047), s.w(), s.x.aGB[0] = 0, s.t(19))
	}

	function aGE(aGC, aGD, g8, min, max) {
		aGC = aGC[g8];
		aGD[g8] = "number" == typeof aGC && min <= aGC && aGC <= max ? Math.floor(aGC) : aGD[g8]
	}

	function aGK(pI) {
		return "string" == typeof pI
	}

	function aGH(aGC, aGD, g8, aGN, size, max) {
		var a1X = aGC[g8];
		if (Array.isArray(a1X)) {
			for (var a1Y = new(8 === aGN ? Uint8Array : 16 === aGN ? Uint16Array : Uint32Array)(size), ea = Math.min(a1X.length, size), aA = 0; aA < ea; aA++) a1Y[aA] = bJ.p9(a1X[aA], 0, max);
			aGD[g8] = a1Y
		}
	}
	this.aG0 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aG1, input.click()
	}, this.aG2 = function() {
		for (var aG5, aAx, a6F = aC.data, keys = Object.keys(a6F), aG3 = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a6F[key] instanceof Uint8Array || a6F[key] instanceof Uint16Array || a6F[key] instanceof Uint32Array ? aG3[key] = Array.from(a6F[key]) : aG3[key] = a6F[key]
		}
		aG3.canvas = 2 === aG3.mapType && aG3.canvas ? aG3.canvas.toDataURL() : null, aG5 = aG3, aG5 = JSON.stringify(aG5, null, 2), aG5 = new Blob([aG5], {
			type: "application/json"
		}), (aAx = document.createElement("a")).href = URL.createObjectURL(aG5), aAx.download = "tt_scenario.json", aAx.click()
	}
}

function cS() {
	var aGO, aGP, size, j0, hE, id, aGQ;

	function aGR(player) {
		return player < aC.jp ? aGO * player : aGO * aC.jp + aGP * (player - aC.jp)
	}
	this.dU = function() {
		aGO = aC.jp < 16 ? 12 : 8, aGP = 4;
		var ea = aGR(aC.eX);
		size = new Uint8Array(aC.eX), j0 = new Uint16Array(ea), hE = new Uint32Array(ea), id = new Uint16Array(ea), aGQ = new Uint8Array(ea)
	}, this.p8 = function(a6S, aGS) {
		var aGT = this.gc(a6S, aGS),
			aGS = (this.ga(a6S, aGS, 0), b8.fv.fy(a6S, aGT));
		bb.fz(a6S, aGT - aGS, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFj = function(player, aGS) {
		var aGW, aGS = function(player, aGS) {
			var aA, kX = aGR(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kX + aA] && j0[kX + aA] === aGS) return aA;
			return size[player]
		}(player, aGS);
		aGS !== size[player] && (aGW = hE[aGR(player) + aGS], this.g0(player, aGS), this.ix(player, aGW, aC.eX))
	}, this.jB = function(player, aGS) {
		for (var kX = aGR(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGS) return !0;
		return !1
	}, this.jT = function(player) {
		return player < aC.jp ? size[player] < aGO : size[player] < aGP
	}, this.ff = function(player) {
		return size[player]
	}, this.fl = function(player, aA) {
		return j0[aGR(player) + aA]
	}, this.fg = function(player, aA) {
		return id[aGR(player) + aA]
	}, this.aGX = function(player, aGY) {
		for (var kX = aGR(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kX + aA] === aGY) return aA;
		return -1
	}, this.fm = function(player, aA) {
		return hE[aGR(player) + aA]
	}, this.gc = function(player, aGS) {
		for (var kX = aGR(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGS) return hE[kX + aA];
		return 0
	}, this.aFa = function(player) {
		for (var kX = aGR(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) f2 += hE[kX + aA];
		return f2
	}, this.aGZ = function(player) {
		for (var kX = aGR(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kX + aA] && (f2 += hE[kX + aA]);
		return f2
	}, this.aFP = function(player) {
		for (var kX = aGR(player), g2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kX + aA] && g2++;
		return g2
	}, this.ga = function(player, aGS, aGW) {
		for (var kX = aGR(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kX + aA] && j0[kX + aA] === aGS && (hE[kX + aA] = aGW)
	}, this.gL = function(player, aA, aGW) {
		hE[aGR(player) + aA] = Math.max(aGW, 0)
	}, this.gM = function(player, aA) {
		aGQ[aGR(player) + aA] = 0
	}, this.fn = function(player, aA) {
		return aGQ[aGR(player) + aA]
	}, this.ix = function(player, aGW, aGS) {
		b8.fv.a2M(aGS) && bb.lb[6 - b8.fv.jD(player)]++;
		for (var kX = aGR(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGS) return hE[kX + aA] += aGW, void(hE[kX + aA] = hE[kX + aA] > aC.a2T ? aC.a2T : hE[kX + aA]);
		j0[kX + size[player]] = aGS, hE[kX + size[player]] = aGW, id[kX + size[player]] = 0, aGQ[kX + size[player]] = 1, size[player]++, player < aC.jp && (aGS === aC.eK ? aM.z3(player, 5) : player === aC.eK && ae.a5G(aGS))
	}, this.aGa = function(player, aGW, aGY) {
		var kX = aGR(player);
		j0[kX + size[player]] = 0, hE[kX + size[player]] = aGW, id[kX + size[player]] = aGY, aGQ[kX + size[player]] = 0, size[player]++
	}, this.g0 = function(player, dx) {
		var et, kX;
		if (0 !== size[player])
			for (kX = aGR(player), size[player]--, et = dx; et < size[player]; et++) j0[kX + et] = j0[kX + et + 1], hE[kX + et] = hE[kX + et + 1], id[kX + et] = id[kX + et + 1], aGQ[kX + et] = aGQ[kX + et + 1]
	}, this.aFW = function(player) {
		for (var et, kX, aFg = [], aA = ak.jq - 1; 0 <= aA; aA--)
			for (kX = aGR(ak.jr[aA]), et = size[ak.jr[aA]] - 1; 0 <= et; et--)
				if (0 === id[kX + et] && j0[kX + et] === player) {
					aFg.push(ak.jr[aA]);
					break
				} return aFg
	}
}

function cT() {
	var aGb;

	function aGd(player) {
		var dw, jU;
		return b8.fv.jD(player) && player < aC.jp ? 0 : (dw = aGb[bJ.dj((aC.eX - 1) * af.gN[player], aC.jZ)], bd.jm() < 1920 && (dw = Math.max(bJ.dj(100 * (13440 - 6 * bd.jm()), 1920), dw)), jU = ad.jV(player), af.gb[player] > jU && (dw -= bJ.dj(2 *
			dw * (af.gb[player] - jU), jU)), Math.min(Math.max(dw, 0), 700))
	}

	function aGp(mJ) {
		for (var gN = af.gN, jr = ak.jr, aA = ak.jq - 1; 0 <= aA; aA--) {
			var g7 = jr[aA];
			b8.fv.fy(g7, bJ.dj(mJ * gN[g7], 32))
		}
	}

	function aGm() {
		var va = aC.eK;
		bM.f6[0] = af.gb[va] - af.a2Q[va]
	}

	function aGo(dx) {
		var va = aC.eK;
		bb.lb[dx] += af.gb[va] - af.a2Q[va] - bM.f6[0]
	}
	this.db = function() {
		for (var ea = aC.eX, aA = (aGb = new Uint16Array(ea), 0); aA < ea; aA++) aGb[aA] = 100 + aGc(bJ.dj(25600 * aA, ea - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9j = aGd : 1 === aC.data.iIncomeType ? this.a9j = function(player) {
			return bJ.dj(aC.data.iIncomeValue * aGd(player), 64)
		} : this.a9j = function(player) {
			return bJ.dj(aC.data.iIncomeData[player] * aGd(player), 64)
		}
	}, this.ij = function() {
		if (bd.jm() % 10 == 9 && (function() {
				aGm();
				for (var jr = ak.jr, gb = af.gb, aA = ak.jq - 1; 0 <= aA; aA--) {
					var g7 = jr[aA],
						aGn = bJ.dj(ad.a9j(g7) * gb[g7], 1e4);
					b8.fv.fy(g7, Math.max(aGn, 1))
				}
				aGo(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGm(), 1 === aC.data.aIncomeType)
						for (var gN = af.gN, jr = ak.jr, mJ = aC.data.aIncomeValue, aA = ak.jq - 1; 0 <= aA; aA--) {
							var g7 = jr[aA];
							b8.fv.fy(g7, bJ.dj(mJ * gN[g7], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gN = af.gN, jr = ak.jr, mJ = aC.data.aIncomeData, aA = ak.jq - 1; 0 <= aA; aA--) {
								var g7 = jr[aA];
								b8.fv.fy(g7, bJ.dj(mJ[g7] * gN[g7], 128))
							}
						}();
					aGo(18)
				}
			}(), bd.jm() % 100 == 99)) {
			if (aGm(), 0 === aC.data.tIncomeType) aGp(32);
			else if (1 === aC.data.tIncomeType) aGp(aC.data.tIncomeValue);
			else
				for (var gN = af.gN, jr = ak.jr, mJ = aC.data.tIncomeData, aA = ak.jq - 1; 0 <= aA; aA--) {
					var g7 = jr[aA];
					b8.fv.fy(g7, bJ.dj(mJ[g7] * gN[g7], 32))
				}
			aGo(8)
		}
	}, this.jV = function(player) {
		return Math.min(100 * af.gN[player], aC.a3K)
	}, this.o3 = function(player, o4) {
		b8.fv.fy(o4, bM.f7[0]), bb.oP(player, o4), ae.aGf(player, bM.f7[0] + bM.f7[1]), ae.oQ(o4, bM.f7[0]), b8.fv.oy(player)
	}, this.aGg = function() {
		for (var ea = ak.jq, yf = ak.jr, kX = 0, a2R = af.gb, aA = 0; aA < ea; aA++) kX += a2R[yf[aA]];
		return kX
	}, this.aGh = function(aGi) {
		for (var g7, ea = ak.jq, yf = ak.jr, kX = 0, a2R = af.gb, eY = be.eY, aA = 0; aA < ea; aA++) eY[g7 = yf[aA]] === aGi && (kX += a2R[g7]);
		return kX
	}
}

function cV() {
	var aGt, aGu, aGv, aGw, aGx, aGy, aGz, aH0, aH1, aH2, aH3, aH4, aH5, aH6, aH7, aH8, aH9, aHA, aHC, aHD, aAq, aHE, aHF, aHM, aHN, aHB = null,
		aHH = 0,
		aHI = !1,
		aHJ = new Float32Array(4),
		aHK = 0,
		aHL = !0,
		a8t = 400,
		aHO = 0;

	function pf() {
		aH1 = Math.floor(+h.pd), aH2 = Math.floor(.5 * aH1)
	}

	function aHP() {
		var aA, aHU;
		for (tj.font = b8.pb.rQ(1, 100 * aH3), aHU = 80 / Math.floor(tj.measureText(b8.zW.y9(aC.a2T)).width), tj.font = b8.pb.rQ(1, 100), aA = aC.eX - 1; 0 <= aA; aA--) aH0[aA] = 100 / Math.floor(tj.measureText(af.zS[aA]).width), aGz[aA] = Math.min(
			aHU, aH0[aA])
	}

	function aHV(aA) {
		return !aHO || (aA = af.gb[aA]) < 1e6 ? 1 : aA < 1e7 ? aHJ[0] : aHJ[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHT(hX) {
		aHA = !1, aH9 = 1, aH7 = aH8 = 0, aHL && (b8.pb.textAlign(hX, 1), b8.pb.textBaseline(hX, 1));
		for (var aHb, aHc, aA, aHd, fontSize, aHe, m7 = iA / iB, m8 = iC / iB, mK = (h.i + iA) / iB, mL = (h.j + iC) / iB, aHf = 0 !== af.lf[aC.eK] && !b8.fv.jD(aC.eK), et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et], (fontSize = Math.floor(aH6 * iB *
			aHV(aA) * aGz[aA] * aGx[aA])) < aH5 || aH1 <= fontSize || aGv[aA] + aGx[aA] > m7 && aGv[aA] < mK && aGw[aA] + aGy[aA] > m8 && aGw[aA] < mL && (aHb = Math.floor(h.i * (aGv[aA] + aGx[aA] / 2 - m7) / (mK - m7)), aHc = Math.floor(h.j * (
			aGw[aA] + aGy[aA] / 2 - m8) / (mL - m8) - .1 * fontSize), aHd = ab.a6x[aA], hX.font = b8.pb.rQ(1 === af.a2I[aA] ? 4 : 1, fontSize), hX.fillStyle = aHg(fontSize, aHd % 2), aHO ? aHh(hX, aA, fontSize, aHb, aHc, aHd) : aHi(aA,
			fontSize, aHb, aHc, hX), aHA = !0, 0 < aAq[aA] ? function(aHb, aHc, fontSize, aA, hX) {
			0 === ja[aA] ? ai.qr.y0(aHD[aA]) ? (function(aHb, aHc, fontSize, player, oE, hX) {
				for (var w8 = aHc, hW = (hX.globalAlpha = aHq(fontSize), aHV(player) * (aHO ? aHK : aH0[player])), w7 = aHb - .5 * fontSize / hW - .9 * fontSize, eu = 0; eu < 2; eu++) hX.fillText(ai.qr.xu(oE), w7, w8), w7 = aHb + .5 *
					fontSize / hW + .9 * fontSize;
				hX.globalAlpha = 1
			}(aHb, aHc, fontSize, aA, aHD[aA], hX), aHk(aHb, aHc, fontSize, 0, 0, hX)) : ai.qr.y2(aHD[aA]) ? (aHt(aHb, aHc, fontSize, aHD[aA], 0, hX), aHk(aHb, aHc, fontSize, 0, 1, hX)) : (aHt(aHb, aHc, fontSize, aHD[aA], 1, hX), aHk(aHb,
				aHc, fontSize, 1, 0, hX)) : aHt(aHb, aHc, fontSize, aHD[aA], 0, hX)
		}(aHb, aHc, fontSize, aA, hX) : 0 === ja[aA] && aHk(aHb, aHc, fontSize, 0, 0, hX), aHf && (0 < aAq[aA + aC.eX] || 0 < aAq[aA + 2 * aC.eX] || 0 < aAq[aA + 3 * aC.eX] || 0 < aAq[aA + 4 * aC.eX]) && function(aHb, aHc, fontSize, aA, hX) {
			var ev, g2 = -1;
			for (ev = 4; 1 <= ev; ev--) 0 < aAq[aA + ev * aC.eX] && g2++;
			for (ev = 1; ev < 5; ev++) 0 < aAq[aA + ev * aC.eX] && (! function(aHb, aHc, fontSize, ev, aA, aHo, di, hX) {
				var a1l;
				if (1 === ev) {
					aA = aHD[aA + aC.eX];
					if (!ai.qr.y1(aA)) return function(aHb, aHc, fontSize, oE, aHo, hX) {
						hX.globalAlpha = aHq(fontSize);
						aHb -= .534 * aHo * fontSize, aHo = aHc + 1.59 * fontSize;
						hX.font = b8.pb.rQ(0, .785 * fontSize), hX.fillText(ai.qr.xu(oE), aHb, aHo), hX.globalAlpha = 1
					}(aHb, aHc, fontSize, aA, aHo, hX);
					a1l = ai.vZ.xT[aA - 1024 + ai.qr.xf]
				} else a1l = 2 === ev ? aK.a40()[4].canvas[+(di < 255)] : (3 === ev ? aK.a40()[5] : aK.a40()[6]).canvas[0];
				aA = ai.vZ.xU, di = .8 * fontSize / aA, ev = aHb - .5 * di * aA - .534 * aHo * fontSize, aHb = aHc + 1.4 * di * aA;
				hX.setTransform(di, 0, 0, di, ev, aHb), hX.globalAlpha = aHq(fontSize), hX.drawImage(a1l, 0, 0), hX.globalAlpha = 1, hX.setTransform(1, 0, 0, 1, 0, 0)
			}(aHb, aHc, fontSize, ev, aA, g2, aAq[aA + ev * aC.eX], hX), g2 -= 2)
		}(aHb, aHc, fontSize, aA, hX), (aHe = aH3 * fontSize) < aH5 || (hX.font = b8.pb.rQ(1, aHe), aHc += Math.floor(.78 * fontSize), aHO ? aHi(aA, aHe, aHb, aHc, hX) : aHh(hX, aA, aHe, aHb, aHc, aHd)))
	}

	function aHi(aA, fontSize, eh, ej, hX) {
		var ___id = aA;
		var showName = aA < aC.jp || !__fx.settings.hideBotNames;
		if (showName) hX.fillText(af.zS[aA], eh, ej), aA < aC.jp && 2 !== af.a2I[aA] || (aA = fontSize / aH0[aA], hX.fillRect(eh - .5 * aA, ej + b8.pb.xv * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHO && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hX.fillText(__fx.utils.getDensity(___id), eh, showName ? ej + fontSize : ej)
		);
	}

	function aHh(hX, aA, fontSize, aHb, aHc, aHd) {
		var ___id = aA;
		aA = b8.zW.y9(af.gb[aA]);
		aHd >> 1 & 1 ? (hX.lineWidth = .05 * fontSize, hX.strokeStyle = aHg(fontSize, aHd % 2), hX.strokeText(aA, aHb, aHc)) : (1 < aHd && (hX.lineWidth = .12 * fontSize, hX.strokeStyle = aHg(fontSize, aHd), hX.strokeText(aA, aHb, aHc)), hX.fillText(
			aA, aHb, aHc));
		aHO || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hX.fillText(__fx.utils.getDensity(___id), aHb, aHc + fontSize))
	}

	function aHk(aHb, aHc, fontSize, aHo, aHp, hX) {
		var a4Z = .95 * fontSize / aHF,
			aHb = aHb - .5 * a4Z * aHE + .8 * aHo * fontSize,
			aHo = aHc - 1.76 * a4Z * aHF - (.35 - b8.pb.xv + .7) * aHp * fontSize;
		hX.setTransform(a4Z, 0, 0, a4Z, aHb, aHo), hX.globalAlpha = aHq(fontSize), hX.drawImage(aa.get(4), 0, 0), hX.globalAlpha = 1, hX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHt(aHb, aHc, fontSize, oE, aHo, hX) {
		var hR, w7, a4Z;
		hX.globalAlpha = aHq(fontSize), ai.qr.y1(oE) ? (hR = ai.vZ.xU, hX.setTransform(a4Z = 1.1 * fontSize / hR, 0, 0, a4Z, w7 = aHb - .5 * a4Z * hR - .8 * aHo * fontSize, a4Z = aHc - 1.55 * a4Z * hR), hX.drawImage(ai.vZ.xT[oE - 1024 + ai.qr.xf], 0,
			0), hX.setTransform(1, 0, 0, 1, 0, 0)) : (w7 = aHb - .8 * aHo * fontSize, a4Z = aHc - (.35 - b8.pb.xv + 1) * fontSize, hX.fillText(ai.qr.xu(oE), w7, a4Z)), hX.globalAlpha = 1
	}

	function aHg(fontSize, aHd) {
		return aH2 <= fontSize && fontSize < aH1 ? be.aHv[aHd] + aHq(fontSize).toFixed(3) + ")" : be.aHw[aHd]
	}

	function aHq(fontSize) {
		return aH2 <= fontSize && fontSize < aH1 ? 1 - (fontSize - aH2) / (aH1 - aH2) : 1
	}

	function aI5(hW, i) {
		return 1 + Math.floor(aH4 * hW * i)
	}

	function aI2(aA) {
		for (var left = aGv[aA], et = aGv[aA] - af.iO[aA] - 1; 0 <= et; et--)
			if (!aI7(aA, --left, aGw[aA], aGy[aA])) {
				left++;
				break
			} var right = aGv[aA];
		for (et = af.iP[aA] - aGv[aA] - aGx[aA]; 0 <= et; et--)
			if (!aI7(aA, ++right + aGx[aA] - 1, aGw[aA], aGy[aA])) {
				right--;
				break
			} var eh = Math.floor((left + right) / 2),
			top = aGw[aA];
		for (et = aGw[aA] - af.iQ[aA] - 1; 0 <= et; et--)
			if (!aI8(aA, eh, --top, aGx[aA])) {
				top++;
				break
			} var bottom = aGw[aA];
		for (et = af.iR[aA] - aGw[aA] - aGy[aA]; 0 <= et; et--)
			if (!aI8(aA, eh, ++bottom + aGy[aA] - 1, aGx[aA])) {
				bottom--;
				break
			} var ej = Math.floor((top + bottom) / 2);
		aHz(aA, eh, ej, aGx[aA], aGy[aA]) && (aGv[aA] = eh, aGw[aA] = ej)
	}

	function aHz(player, eh, ej, i, j) {
		ed = Math.floor(.2 * i);
		for (var ed, ev = eh + i - 1; eh <= ev; ev--)
			if (!aI7(player, ev, ej, j)) return;
		for (ev = ej + j - 1 - (ed = (ed = Math.floor(.25 * j)) < 1 ? 1 : ed); ej + ed <= ev; ev--)
			if (!aI8(player, eh, ev, i)) return;
		return 1
	}

	function aI7(player, eh, ej, j) {
		return ab.wy(player, 4 * (ej * bQ.el + eh)) && ab.wy(player, 4 * ((ej + j - 1) * bQ.el + eh))
	}

	function aI8(player, eh, ej, i) {
		return ab.wy(player, 4 * (ej * bQ.el + eh)) && ab.wy(player, 4 * (ej * bQ.el + eh + i - 1))
	}
	this.dU = function() {
		if (aHO = bh.e7.data[7].value || 8 === aC.k6, a8t = 0 === (a8t = bh.e7.data[11].value) ? 280 : 1 === a8t ? 187 : 112, aHA = !1, aH6 = .88, aH3 = .5, aH4 = 1.8, aH5 = 12 - 3 * bh.e7.data[9].value, aGu = aGt = 0, aGv = new Uint16Array(aC
				.eX), aGw = new Uint16Array(aC.eX), aGx = new Uint16Array(aC.eX), aGy = new Uint16Array(aC.eX), aGz = new Float32Array(aC.eX), aH0 = new Float32Array(aC.eX), aHD = new Uint16Array(2 * aC.eX), aAq = new Uint8Array(5 * aC.eX), aHM =
			new Uint8Array(aC.eX), aHN = new Uint8Array(aC.eX), aHL || (aHB = aHB || document.createElement("canvas")), pf(), aH8 = aH7 = 0, aH9 = 1, aHO) {
			var aA, aHU;
			for (aHP(), tj.font = b8.pb.rQ(1, 100), aHU = 100 / Math.floor(tj.measureText("900 000").width), aA = aC.eX - 1; 0 <= aA; aA--) aGz[aA] = Math.min(aHU, 2 * aH0[aA]);
			aHK = aHU, aHJ[0] = 100 / (aHU * Math.floor(tj.measureText("5 000 000").width)), aHJ[1] = 100 / (aHU * Math.floor(tj.measureText("50 000 000").width)), aHJ[2] = 100 / (aHU * Math.floor(tj.measureText("500 000 000").width)), aHJ[3] =
				100 / (aHU * Math.floor(tj.measureText("1 000 000 000").width))
		} else aHP();
		! function() {
			var aA;
			for (aA = aC.eX - 1; 0 <= aA; aA--) af.gN[aA] < 12 ? (aGv[aA] = af.iO[aA] + 1, aGw[aA] = af.iQ[aA] + 1, aGx[aA] = 1, aGy[aA] = 1) : (aGv[aA] = af.iO[aA], aGw[aA] = af.iQ[aA] + 1, aGx[aA] = 4, aGy[aA] = 2);
			if (aC.gv)
				for (aA = 0; aA < aC.jp; aA++) aGx[aA] = 0;
			aHE = aa.get(4).width, aHF = aa.get(4).height
		}()
	}, this.aGf = function(g7, a5W) {
		a5W > 18 * af.gN[g7] ? (aHN[g7] = 6, ab.a6x[g7] = 2 + ab.a6x[g7] % 2) : (aHM[g7] = 4, (ab.a6x[g7] < 2 || 3 < ab.a6x[g7]) && (ab.a6x[g7] = 6 + ab.a6x[g7] % 2))
	}, this.oQ = function(g7, a5W) {
		a5W > 6 * af.gN[g7] ? (aHN[g7] = 6, ab.a6x[g7] = 4 + ab.a6x[g7] % 2) : (aHM[g7] = 4, (ab.a6x[g7] < 4 || 5 < ab.a6x[g7]) && (ab.a6x[g7] = 8 + ab.a6x[g7] % 2))
	}, this.resize = function() {
		pf(), aHL || aHT(aHC)
	}, this.a3G = function() {
		for (var aA = 0; aA < aC.jp; aA++) af.iP[aA] - af.iO[aA] != 3 || af.iR[aA] - af.iQ[aA] != 3 ? (aGv[aA] = af.iO[aA] + (af.iP[aA] !== af.iO[aA] ? 1 : 0), aGw[aA] = af.iQ[aA], aGx[aA] = 1, aGy[aA] = 1) : (aGv[aA] = af.iO[aA], aGw[aA] = af
			.iQ[aA] + 1, aGx[aA] = 4, aGy[aA] = 2)
	}, this.pA = function(player, dx, aHW) {
		! function(player, dx, aHW) {
			player += dx * aC.eX;
			0 === dx ? aHD[player] === aHW && 0 < aAq[player] ? aAq[player] = 0 : (aHD[player] = aHW, aAq[player] = ai.qr.y0(aHW) ? 255 : 64) : 1 === dx ? (aAq[player] = 64, aHD[player] = aHW) : aAq[player] = aHW
		}(player, dx, aHW), 2 === aC.yr && this.lR(!0)
	}, this.ti = function() {
		aHL ? aHT(tj) : aHA && (1 !== aH9 ? (tj.imageSmoothingEnabled = !0, tj.setTransform(aH9, 0, 0, aH9, 0, 0), tj.drawImage(aHB, -aH7 / aH9, -aH8 / aH9), tj.setTransform(1, 0, 0, 1, 0, 0), tj.imageSmoothingEnabled = !1) : tj.drawImage(aHB, -
			aH7, -aH8))
	}, this.a7h = function(hv, hy) {
		aH7 += hv, aH8 += hy
	}, this.a0Q = function(hv, hy) {
		ae.a7h(hv, hy)
	}, this.zoom = function(a1K, ks, kt) {
		aH9 *= a1K, aH7 = (aH7 + ks) * a1K - ks, aH8 = (aH8 + kt) * a1K - kt
	}, this.lR = function(bp) {
		return !aHL && !(!aHI && !bp && bd.e9 < aHH + (1 === aH9 && 0 === aH7 && 0 === aH8 && (aC.a3j() || aC.gv || 2 === aC.yr) ? 1e3 : a8t) || (aHI = !1, aHH = bd.e9, aHT(aHC), 0))
	}, this.aHZ = function(aA) {
		return aHV(aA) * aGz[aA]
	}, this.aHa = function(player) {
		return aGz[player]
	}, this.ij = function() {
		bd.jm() % 10 == 9 && (aHI = aC.a3l() && !aC.a3j()), !aC.a3j() && 4 <= ++aGu && function() {
			var aA, et, eu;
			for (aGu = 0, eu = 4; 1 <= eu; eu--)
				for (et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et] + eu * aC.eX, 0 < aAq[aA] && aAq[aA] < 255 && aAq[aA]--;
			if (2 !== aC.yr)
				for (et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et], 0 < aAq[aA] && aAq[aA] < 255 && aAq[aA]--
		}();
		var aA, et, ea = Math.floor(.1 * ak.jq);
		for (ea = (ea = ea < 8 ? 8 : ea) > ak.jq ? ak.jq : ea, aA = aGt + ea - 1; aGt <= aA; aA--) et = aA % ak.jq, ! function(aA) {
			var hW = aHV(aA) * aGz[aA];
			0 < aGx[aA] && aHz(aA, aGv[aA], aGw[aA], aGx[aA], aGy[aA]) ? ! function(aA) {
				for (var eh, ej, i, j, eE = !1, eu = 0; eu < 8; eu++) {
					if (i = aGx[aA] + 2, j = aGy[aA] + 2, i > af.iP[aA] - af.iO[aA] + 1 || j > af.iR[aA] - af.iQ[aA] + 1) return eE;
					if (eh = aGv[aA] - 1, ej = aGw[aA] - 1, !aHz(aA, eh, ej, i, j)) return eE;
					aGv[aA] = eh, aGw[aA] = ej, aGx[aA] = i, aGy[aA] = j, eE = !0
				}
				return eE
			}(aA) && function(aA, hW) {
				for (var eh, ej, i, j, eE = !1, aAz = aGx[aA], mJ = 1 + Math.floor(.02 * aAz), eu = 1; eu < 5; eu++) {
					if ((i = aAz + eu * mJ) > af.iP[aA] - af.iO[aA] + 1) return eE;
					if ((j = aI5(hW, i)) > af.iR[aA] - af.iQ[aA] + 1) return eE;
					eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - i)), ej = af.iQ[aA] + Math.floor(Math.random() * (af.iR[aA] - af.iQ[aA] + 2 - j)), aHz(aA, eh, ej, i, j) && (aGv[aA] = eh, aGw[aA] = ej, aGx[
						aA] = i, aGy[aA] = j, eE = !0)
				}
				return eE
			}(aA, hW) && aI2(aA) : ! function(aA, hW) {
				var j, eh = aGv[aA] + 1,
					ej = aGw[aA] + 1,
					i = aGx[aA] - 2;
				for (;;) {
					if (i < 1) {
						aGx[aA] = 0;
						break
					}
					if (j = aI5(hW, i), aHz(aA, eh, ej, i, j)) return aGv[aA] = eh, aGw[aA] = ej, aGx[aA] = i, aGy[aA] = j, 1;
					eh++, ej++, i -= 2
				}
				return
			}(aA, hW) ? function(aA, hW) {
				var eh, ej, i, j, eu, mP, j6 = af.iP[aA] - af.iO[aA] + 1,
					aI6 = Math.floor(.02 * j6);
				for (mP = -6 * (aI6 = aI6 < 1 ? 1 : aI6), eu = j6; mP <= eu; eu -= aI6)
					if (j = aI5(hW, i = 0 < eu ? eu : 1), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - i)), ej = af.iQ[aA] + Math.floor(Math.random() * (af.iR[aA] - af.iQ[aA] + 2 - j)), aHz(aA, eh, ej, i, j))
						return aGv[aA] = eh, aGw[aA] = ej, aGx[aA] = i, aGy[aA] = j
			}(aA, hW) : aI2(aA)
		}(ak.jr[et]);
		aGt = (aGt += ea) % ak.jq
	}, this.lM = function() {
		var aA, g7, hf, hg;
		if (bd.jm() % 4 == 1)
			for (aA = ak.jq - 1; 0 <= aA; aA--) g7 = ak.jr[aA], ab.a6x[g7] < 2 || ((hf = Math.max(aHM[g7] - 1, 0)) === (hg = Math.max(aHN[g7] - 1, 0)) ? 0 === hf && (ab.a6x[g7] %= 2) : 0 === hg && ab.a6x[g7] < 6 && (ab.a6x[g7] += 4), aHM[g7] =
				hf, aHN[g7] = hg)
	}, this.a5G = function(player) {
		var aA = player + 2 * aC.eX,
			di = aAq[aA];
		return 0 < di && (aM.yy(50, player), aAq[aA] = 0, 255 === di)
	}, this.a4J = function(player) {
		return 255 === aAq[player + 2 * aC.eX]
	}
}

function cX() {
	var aI9, aIA, aIB;
	this.dU = function() {
		aI9 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aIA =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), aIB = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a5Y = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIC = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aI9.length - 1; 0 <= aA; aA--)
			for (var et = a5Y.length - 1; 0 <= et; et--) aI9[aA] = aI9[aA].replace(a5Y[et], aIC[et]);
		if (__fx.settings.realisticNames) aI9 = realisticNames;
	}, this.a3V = function() {
		var ea = aC.jp,
			zS = af.zS,
			zY = af.zY,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ea)
			for (var aA = 0; aA < ea; aA++) zS[aA] = zY[aA] = "Player " + aw.j7(1e3);
		else
			for (aA = 0; aA < ea; aA++) zS[aA] = zY[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k6) {
			for (var dw = aw.random(), aII = aIB, aIJ = aIA, hE = aD.hE, ea = aII.length, kX = aC.data.teamPlayerCount[7], zS = af.zS, zY = af.zY, aA = kX - 1; aA >= aC.jp; aA--) zS[aA] = zY[aA] = aII[(aA + dw) % ea];
			for (ea = aIJ.length - 1, aA = kX; aA < aC.eX; aA++) zS[aA] = zY[aA] = aIJ[hE[aA] ? ea : aA % ea]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var ea = aC.eX, zS = af.zS, zY = af.zY, playerNamesData = aC.data.playerNamesData, aA = aC.jp; aA < ea; aA++) zS[aA] = zY[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zS = af.zS, zY = af.zY, aA = aC.jp; aA < aC.eX; aA++) zS[aA] = zY[aA] = "Bot " + aw.j7(1e3)
		} : function() {
			for (var aIK = aI9, ea = aIK.length, dw = aw.random(), zS = af.zS, zY = af.zY, aA = aC.jp; aA < aC.eX; aA++) zS[aA] = zY[aA] = aIK[(aA + dw) % ea]
		})()
	}
}

function cq() {
	this.aIL = [], this.aIM = [], this.dU = function() {
		this.aIL = [], this.aIM = []
	}, this.ij = function() {
		0 <= this.aIL.length && this.aIN(this.aIL), 0 <= this.aIM.length && this.aIN(this.aIM)
	}, this.aIN = function(g) {
		for (var eu = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].e9--, g[aA].e9 <= 0) {
				eu = aA;
				break
			} for (aA = eu; 0 <= aA; aA--) g.shift()
	}, this.a48 = function(id, yf, aIO) {
		return this.ew(this.aIL, id, yf, aIO)
	}, this.aIP = function(id, yf, aIO) {
		return this.ew(this.aIM, id, yf, aIO)
	}, this.ew = function(g, id, yf, aIO) {
		return ! function(g, id, yf) {
			var aA, hN;
			for (aA = yf.length - 1; 0 <= aA; aA--)
				for (hN = g.length - 1; 0 <= hN; hN--)
					if (g[hN].player === yf[aA] && id === g[hN].id) return 1;
			return
		}(g, id, yf) && (aIO && function(g, id, yf) {
			var aA;
			for (aA = yf.length - 1; 0 <= aA; aA--) g.push({
				player: yf[aA],
				id: id,
				e9: 384
			})
		}(g, id, yf), !0)
	}
}

function cW() {
	this.zY = new Array(aC.eX), this.zS = new Array(aC.eX), this.a2I = new Uint8Array(aC.eX), this.lf = new Uint8Array(aC.eX), this.iO = new Uint16Array(aC.eX), this.iQ = new Uint16Array(aC.eX), this.iP = new Uint16Array(aC.eX), this.iR =
		new Uint16Array(aC.eX), this.gN = new Uint32Array(aC.eX), this.wZ = new Uint32Array(aC.eX), this.gb = new Uint32Array(aC.eX), this.g1 = null, this.gF = null, this.gG = null, this.f0 = null, this.ox = new Uint16Array(aC.eX), this.is =
		new Uint16Array(aC.eX), this.it = new Uint16Array(aC.eX), this.zR = new Uint16Array(aC.eX), this.zP = new Uint8Array(aC.eX), this.a2Q = new Uint16Array(aC.eX), this.dU = function() {
			this.zY.fill(""), this.zS.fill(""), this.a2I.fill(0), this.lf.fill(0), this.iO.fill(0), this.iQ.fill(0), this.iP.fill(0), this.iR.fill(0), this.gN.fill(0), this.wZ.fill(0), this.gb.fill(0), this.g1 = new Array(aC.eX), this.gF = new Array(
				aC.eX), this.gG = new Array(aC.eX), this.f0 = new Array(aC.eX), this.ox.fill(0), this.is.fill(0), this.it.fill(0), this.zR.fill(0), this.zP.fill(0), this.a2Q.fill(0)
		}
}

function co() {
	this.aBJ = function(player) {
		aF.le(player), aC.yt++, af.a2I[player] = 2, af.zR[player] = bg.zk.aFf(), player === aC.eK && (aW.show(!1, !1), aV.a9X(), bP.yc.zN()), ae.a5G(player)
	}
}

function cQ() {
	this.jr = null, this.jq = 0, this.a3Z = function() {
		for (this.jq = 0, aA = aC.eX - 1; 0 <= aA; aA--) 0 !== af.lf[aA] && this.jq++;
		this.jr = new Uint16Array(this.jq);
		for (var ea = 0, aA = 0; aA < aC.eX; aA++) 0 !== af.lf[aA] && (this.jr[ea++] = aA)
	}, this.lL = function() {
		for (var gN = af.gN, wZ = af.wZ, zP = af.zP, jr = ak.jr, aA = ak.jq - 1; 0 <= aA; aA--) {
			var di, g7 = jr[aA];
			gN[g7] <= bJ.dj(wZ[g7], 4) ? aj.dd(g7) : gN[g7] >= wZ[g7] ? (di = gN[g7], 250 <= (wZ[g7] = di) && (zP[g7] = 1)) : wZ[g7] -= Math.max(1, bJ.dj(wZ[g7] - gN[g7], 1e3))
		}
		this.aIT()
	}, this.aIT = function() {
		for (var lf = af.lf, kW = this.jr, aAD = this.jq, aA = aAD - 1; 0 <= aA; aA--) 0 === lf[kW[aA]] && (kW[aA] = kW[--aAD]);
		this.jq = aAD
	}
}

function cY() {
	var aIU;
	this.kF = null, this.kE = 0, this.dU = function() {
		aIU = [], 9 === aC.k6 && this.aIV()
	}, this.aIV = function() {
		var aIW = [60, 80, 105, 150, 190, 333];
		this.kF = [0, 0, 0, 0, 0, 0], this.kE = 0, aC.jp <= aIW[0] ? (this.kE = 256 - bJ.dj(256 * aC.jp, aIW[0]), aC.jp <= 22 ? this.kF[5] = bJ.dj(Math.max(aC.jp - 6, 0), 6) : this.kF[5] = 3 + bJ.dj(38 * (aC.jp - 22), 100), this.kF[0] = aC.eX -
				aC.jp - this.kE - this.kF[5]) : (this.kF[5] = Math.min(17 + bJ.dj(61 * (aC.jp - 60), 100), 179), this.kF[0] = 512 - aC.jp - this.kF[5]), aC.kA = aC.eX - aC.jp, aC.data.numberTeams = (0 < aC.jp) + (0 < aC.kA), aC.data.playerCount =
			aC.w5 = aC.jp + aC.kA, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aC.jp + this.kE, aC.kA - this.kE]), aC.a3P.a3T()
	}, this.aFm = function(player) {
		aIU.push({
			player: player,
			g2: 14 + aw.j7(20)
		})
	}, this.ij = function() {
		if (9 === aC.k6)
			for (var aA = aIU.length - 1; 0 <= aA; aA--) --aIU[aA].g2 <= 0 && (ae.pA(aIU[aA].player, 0, ai.qr.xi + ai.qr.xw), aIU.splice(aA))
	}
}

function d5() {
	function aIl() {
		return {
			el: bQ.el,
			em: bQ.em,
			vW: bQ.vW,
			vS: bQ.vS,
			vT: bQ.vT,
			vX: bQ.vX,
			eG: bQ.eG,
			mapSeed: bQ.mapSeed
		}
	}

	function aId(aA) {
		return 1 !== aA && bQ.aBn(aA) && aA !== bQ.aIm()
	}
	this.aIY = 22, this.aFx = 4096, this.el = 0, this.em = 0, this.vW = null, this.vS = null, this.vT = null, this.vX = null, this.eG = 0, this.mapSeed = 0, this.vU = !1, this.vV = new aIZ, this.vM = new aIa, this.a5e = new aIb, this.dU =
function() {
		this.vM.dU()
	}, this.a6 = function(map, aIc) {
		((map %= this.aIY) !== this.eG || aId(this.eG) && aIc !== this.mapSeed) && (this.vU = !1, this.vV.aIe(), aw.a3U(map), this.eG = map, this.mapSeed = aIc, aId(map) && (bQ.vM.vN[map].aIf = aIc), this.aBn(this.eG) ? (map = bQ.vM.vN[this.eG],
			this.el = map.i, this.em = map.j, aw.a3U(map.aIf), ao.a6([this.el, this.em, map.lk, map.lh]), aIh(), an.aIi(), ao.aIj()) : aIg())
	}, this.aIk = function(map, aIc) {
		var fH = aIl(),
			map = (this.a6(map, aIc), this.vV.aIe(), aIl());
		return this.el = fH.el, this.em = fH.em, this.vW = fH.vW, this.vS = fH.vS, this.vT = fH.vT, this.vX = fH.vX, this.eG = fH.eG, this.mapSeed = fH.mapSeed, map
	}, this.a3p = function(canvas) {
		canvas && this.vW !== canvas && (this.el = canvas.width, this.em = canvas.height, this.vW = canvas, this.vS = this.vW.getContext("2d", {
			alpha: !1
		}), this.hU = this.vS.getImageData(0, 0, this.el, this.em), this.vX = this.hU.data, this.eG = this.aIm(), this.mapSeed = 0, bQ.vM.vN[this.eG].name = aC.data.mapName)
	}, this.eF = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIm()
	}, this.aIn = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIo = function(aA) {
		return 1 === aA
	}, this.aIm = function() {
		return this.aIY
	}, this.aBn = function(aA) {
		return void 0 === this.vM.vN[aA].aIp
	}, this.a3o = function(pT) {
		return 0 === pT.mapType ? pT.mapProceduralIndex < 10 ? pT.mapProceduralIndex : 10 + pT.mapProceduralIndex : 1 === pT.mapType ? pT.mapRealisticIndex + 10 : void 0
	}, this.aBo = function(pT, aIq) {
		0 === pT.mapType ? pT.mapProceduralIndex = aIq < 10 ? aIq : aIq - 10 : 1 === pT.mapType && (pT.mapRealisticIndex = aIq - 10)
	}
}

function aIZ() {
	function aIz() {
		bQ.vV.ij()
	}

	function aJ5(g7, aJ4) {
		0 < aJ4 && (bQ.vX[g7] += aJ4, bQ.vX[g7 + 1] += aJ4, bQ.vX[g7 + 2] += aJ4)
	}

	function h2(g7) {
		return bQ.vX[g7 + 2] > bQ.vX[g7] && bQ.vX[g7 + 2] > bQ.vX[g7 + 1]
	}
	this.a7t = -1, this.zx = 0, this.aIr = 0, this.aIs = 8, this.aIt = 32, this.aIu = 8, this.aIv = 32, this.aIw = [0, 0], this.a6x = [0, 0, 0, 0], this.iJ = null, this.aIx = !0, this.aIy = !1, this.aIe = function() {
		-1 !== this.a7t && clearTimeout(this.a7t), this.a7t = -1, this.iJ = null, ao.aIj()
	}, this.dU = function() {
		7 === aZ.a04() || this.aIy || (this.aIx = !0, this.zx = 0, this.aIr = 1, this.aIw = [bQ.vM.vN[bQ.eG].vp[0], bQ.vM.vN[bQ.eG].vq[0]], this.a6x = [bQ.vM.vN[bQ.eG].aIp[3], bQ.vM.vN[bQ.eG].aIp[4], bQ.vM.vN[bQ.eG].aIp[5], bQ.vM.vN[bQ.eG].aIp[
			6]], this.aIs = bQ.vM.vN[bQ.eG].aIp[7], this.aIt = bQ.vM.vN[bQ.eG].aIp[8], this.aIu = bQ.vM.vN[bQ.eG].aIp[9], this.aIv = bQ.vM.vN[bQ.eG].aIp[10], this.aIx ? this.a7t = setTimeout(aIz, 16) : this.ij())
	}, this.ij = function() {
		if (8 === aZ.a04() && aG.ly()) this.a7t = setTimeout(aIz, 16);
		else {
			if (0 === this.zx) {
				var aIf = aw.aJ0();
				if (aw.a3U(bQ.vM.vN[bQ.eG].aIp[2]), ao.a6([bQ.el, bQ.em, bQ.vM.vN[bQ.eG].aIp[0], bQ.vM.vN[bQ.eG].aIp[1]]), aw.a3U(aIf), this.iJ = ao.aJ1(), this.zx++, this.aIx) return void(this.a7t = setTimeout(aIz, 16))
			}
			for (var g7, eM, aIf = this.aIx ? 10 : 1e6, aIf = bQ.em - this.aIr - 1 < aIf ? bQ.em - this.aIr - 1 : aIf, wm = this.aIr + aIf, ej = this.aIr; ej < wm; ej++)
				for (var eh = 1; eh < bQ.el - 1; eh++) h2(g7 = 4 * (eM = eh + ej * bQ.el)) ? this.aJ2(g7, eM, 1) : (this.aJ2(g7, eM, 0), function(eh, ej, g7) {
					return 1 < eh && h2(g7 - 4) || eh < bQ.el - 2 && h2(g7 + 4) || 1 < ej && h2(g7 - 4 * bQ.el) || ej < bQ.em - 2 && h2(g7 + 4 * bQ.el)
				}(eh, ej, g7) && this.aJ3(eh, ej));
			this.aIr = wm, this.aIr >= bQ.em - 1 ? (bQ.vS.putImageData(bQ.vT, 0, 0, 1, 1, bQ.el - 2, bQ.em - 2), bd.dc = !0, this.aIe()) : this.aIx && (this.a7t = setTimeout(aIz, 16))
		}
	}, this.aJ2 = function(g7, eM, dx) {
		aJ5(g7, Math.floor(this.aIw[dx] + this.a6x[dx] * this.iJ[eM] / 1e4) - bQ.vX[g7])
	}, this.aJ6 = function(g7, dw, aJ7, dx, a6x) {
		aJ5(g7, Math.floor(this.aIw[dx] + (1 - dw / aJ7) * a6x) - bQ.vX[g7])
	}, this.aJ3 = function(ks, kt) {
		for (var g7, dw, aJ7, a7j = ks - this.aIt, aJ8 = kt - this.aIt, wn = ks + this.aIt, wm = kt + this.aIt, a7j = a7j < 1 ? 1 : a7j, wn = wn > bQ.el - 2 ? bQ.el - 2 : wn, wm = wm > bQ.em - 2 ? bQ.em - 2 : wm, ej = aJ8 < 1 ? 1 : aJ8; ej <=
			wm; ej++)
			for (var eh = a7j; eh <= wn; eh++) h2(g7 = 4 * (eh + ej * bQ.el)) ? (aJ7 = this.aIs + (this.aIt - this.aIs) * this.iJ[eh + bQ.el * ej] / 1e4, Math.abs(ks - eh) > aJ7 || Math.abs(kt - ej) > aJ7 || aJ7 <= (dw = Math.sqrt((ks - eh) * (
				ks - eh) + (kt - ej) * (kt - ej))) || this.aJ6(g7, dw, aJ7, 1, this.a6x[3])) : (aJ7 = this.aIu + (this.aIv - this.aIu) * this.iJ[eh + bQ.el * ej] / 1e4, Math.abs(ks - eh) > aJ7 || Math.abs(kt - ej) > aJ7 || aJ7 <= (dw = Math
				.sqrt((ks - eh) * (ks - eh) + (kt - ej) * (kt - ej))) || this.aJ6(g7, dw, aJ7, 0, this.a6x[2]))
	}
}

function aIh() {
	2 === bQ.eG ? aJ9([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eG ? aJ9([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eG ? aJ9([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eG ? aJ9([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eG && aJ9([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aJ9(aJA, aJB, aJC, aJD, aJE) {
	for (var eh, ej, aJG, aJH, a1K, aJI, hu = aJA.length - 1, aJF = bQ.el + bQ.em, ea = (aJF *= aJF, aJC.length), aA = ea - 1; 0 <= aA; aA--) aJC[aA] *= aJC[aA];
	var aJJ = new Array(ea),
		aAn = new Array(ea),
		aJK = new Array(ea),
		f2 = ao.aJ1();
	if (void 0 === aJE)
		for (aJE = new Array(ea), aA = ea - 1; 0 <= aA; aA--) aJE[aA] = 0;
	for (aA = 1; aA < ea; aA++) aJJ[aA] = aJC[aA] - aJC[aA - 1], aAn[aA] = aJD[aA] - aJD[aA - 1], aJK[aA] = aJE[aA] - aJE[aA - 1];
	for (eh = bQ.el - 1; 0 <= eh; eh--)
		for (ej = bQ.em - 1; 0 <= ej; ej--) {
			for (aJG = aJF, aA = hu; 0 <= aA; aA--) aJG = (aJH = (eh - aJA[aA]) * (eh - aJA[aA]) + (ej - aJB[aA]) * (ej - aJB[aA])) < aJG ? aJH : aJG;
			for (a1K = aJD[ea - 1], aJI = aJE[ea - 1], aA = 1; aA < ea; aA++)
				if (aJG < aJC[aA]) {
					a1K = aJD[aA - 1] + aFF((aJG - aJC[aA - 1]) * aAn[aA], aJJ[aA]), aJI = aJE[aA - 1] + aFF((aJG - aJC[aA - 1]) * aJK[aA], aJJ[aA]);
					break
				} aJL(bQ.el * ej + eh, a1K, aJI, f2)
		}
}

function aJL(dx, a1K, aJI, f2) {
	a1K < 500 ? f2[dx] = bJ.dj(f2[dx] * a1K * 2, 1e3) : 500 < a1K && (f2[dx] += bJ.dj(2 * (1e4 - f2[dx]) * (a1K - 500), 1e3)), f2[dx] += bJ.dj(aJI * (10 * a1K - f2[dx]), 1e3)
}

function ca() {
	var aJM;

	function aJW(a1l, hW, eh, ej, globalAlpha) {
		bQ.vS.save(), bQ.vS.globalAlpha = globalAlpha, bQ.vS.imageSmoothingEnabled = !1, bQ.vS.scale(hW, hW), bQ.vS.drawImage(a1l, Math.floor(eh * (bQ.el / hW - a1l.width)), Math.floor(ej * (bQ.em / hW - a1l.height))), bQ.vS.restore()
	}
	this.a5b = 0, this.a5c = 0, this.a5d = 0, this.a5e = 0, this.dU = function() {
		(aJM = new Array(bQ.aIY))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dw: [220, 250, 255, 220],
			sF: [190, 220, 0, 0],
			eu: [170, 200, 0, 0]
		}, aJM[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dw: [25, 0, 100, 0, 25],
			sF: [25, 0, 0, 0, 25],
			eu: [25, 0, 0, 0, 25]
		}, aJM[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dw: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sF: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJM[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dw: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sF: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eu: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJM[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dw: [10, 10, 20, 10, 10, 170, 212],
			sF: [20, 20, 60, 100, 100, 110, 170],
			eu: [70, 70, 160, 30, 30, 60, 120]
		}, aJM[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dw: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sF: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJM[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dw: [10, 10, 60, 255, 255, 200, 200],
			sF: [10, 10, 60, 255, 255, 200, 200],
			eu: [80, 80, 255, 255, 255, 200, 200]
		}, aJM[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sF: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJM[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dw: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sF: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJM[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sF: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJM[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dw: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sF: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eu: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJM[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dw: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sF: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eu: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIi = function() {
		var aJV, aA, et, fH, hU = function() {
				var hU;
				return bQ.vW = document.createElement("canvas"), bQ.vW.width = bQ.el, bQ.vW.height = bQ.em, bQ.vS = bQ.vW.getContext("2d", {
					alpha: !1
				}), hU = bQ.vS.getImageData(0, 0, bQ.el, bQ.em), bQ.vX = hU.data, hU
			}(),
			i = aJM[bQ.eG].i,
			dw = aJM[bQ.eG].dw,
			sF = aJM[bQ.eG].sF,
			eu = aJM[bQ.eG].eu,
			f2 = ao.aJ1(),
			ea = i.length - 2,
			aJQ = new Array(1 + ea),
			aJR = new Array(1 + ea),
			aJS = new Array(1 + ea),
			aJT = new Array(1 + ea);
		for (et = ea; 0 <= et; et--) aJQ[et] = i[et + 1] - i[et], aJR[et] = dw[et + 1] - dw[et], aJS[et] = sF[et + 1] - sF[et], aJT[et] = eu[et + 1] - eu[et];
		for (aA = bQ.el * bQ.em - 1; 0 <= aA; aA--)
			for (et = ea; 0 <= et; et--)
				if (f2[aA] >= i[et]) {
					fH = f2[aA] - i[et], bQ.vX[4 * aA] = dw[et] + aFF(aJR[et] * fH, aJQ[et]), bQ.vX[4 * aA + 1] = sF[et] + aFF(aJS[et] * fH, aJQ[et]), bQ.vX[4 * aA + 2] = eu[et] + aFF(aJT[et] * fH, aJQ[et]), bQ.vX[4 * aA + 3] = 255;
					break
				} bQ.vS.putImageData(hU, 0, 0), bQ.aIo(bQ.eG) && aa.sI() && bQ.aIo(bQ.eG) && (hU = aa.aEP("arena"), aJV = aa.aEP("territorial.io"), aJW(hU, 5, .5, .5, .1), aJW(aJV, 2, .5, .45, .1)), bQ.vU = !0, bd.dc = !0
	}, this.a3X = function() {
		for (var g7, eh, ej, aJX, hL, fJ, a5c = 0, i = bQ.el, j = bQ.em, fH = i * j * 4, aJY = aAN, aJZ = bQ.vX, aA = i - 1; 0 <= aA; aA--) aJY[(g7 = aA << 2) + 2] = aJY[fH - g7 - 2] = 3;
		for (fH = 4 * i, aA = j - 1; 0 <= aA; aA--) aJY[(g7 = aA * fH) + 2] = aJY[g7 + fH - 2] = 3;
		for (aJX = i - 1, hL = j - 1, ej = 1; ej < hL; ej++)
			for (fH = ej * i, eh = 1; eh < aJX; eh++) fJ = 1 - (aJZ[(g7 = fH + eh << 2) + 2] > aJZ[g7 + 1] && aJZ[g7 + 2] > aJZ[g7]), aJY[g7 + 2] = 2 - fJ, a5c += fJ;
		this.a5b = (i - 2) * (j - 2), this.a5e = 0, bQ.eF(bQ.eG) && (bQ.a5e.aJa(), bQ.a5e.aJb()), this.a5c = aC.jZ = a5c - this.a5e, this.a5d = this.a5b - this.a5c - this.a5e
	}
}

function aIg() {
	var pI;
	10 === bQ.eG ? pI =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bQ.eG ? pI =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bQ.eG ? pI =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bQ.eG ? pI =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bQ.eG ? pI =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bQ.eG ? pI =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bQ.eG ? pI =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bQ.eG ? pI =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bQ.eG ? pI =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bQ.eG && (pI =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new vF).vH(pI)
}

function aIa() {
	this.vN = null, this.aJc = null, this.aJd = null, this.dU = function() {
		var aJe = [120, 105, 92],
			cos = [12, 12, 60],
			aJf = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJg = [140, 130, 120],
			aJh = [12, 12, 76],
			aJi = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJj = [130, 117, 106],
			aJk = [12, 12, 68],
			aJl = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vN = new Array(bQ.aIY + 1), __fx.customLobby.setMapInfo(this.vN), this.vN[0] = {
			name: L(135),
			i: 230,
			j: 230,
			lk: 1e3,
			lh: 2e3,
			aIf: 173
		}, this.vN[1] = {
			name: L(136),
			i: 800,
			j: 800,
			lk: 100,
			lh: 50,
			aIf: 43
		}, this.vN[2] = {
			name: L(137),
			i: 512,
			j: 512,
			lk: 128,
			lh: 32,
			aIf: 0
		}, this.vN[3] = {
			name: L(138) + " 1",
			i: 960,
			j: 960,
			lk: 60,
			lh: 8,
			aIf: 0
		}, this.vN[4] = {
			name: L(139),
			i: 900,
			j: 900,
			lk: 100,
			lh: 5,
			aIf: 0
		}, this.vN[5] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			lk: 100,
			lh: 40,
			aIf: 0
		}, this.vN[6] = {
			name: L(141),
			i: 1e3,
			j: 1e3,
			lk: 100,
			lh: 20,
			aIf: 0
		}, this.vN[7] = {
			name: L(142),
			i: 1024,
			j: 1024,
			lk: 128,
			lh: 32,
			aIf: 0
		}, this.vN[8] = {
			name: L(143),
			i: 820,
			j: 820,
			lk: 200,
			lh: 100,
			aIf: 0
		}, this.vN[9] = {
			name: L(144),
			i: 1024,
			j: 1024,
			lk: 128,
			lh: 32,
			aIf: 0
		}, this.vN[10] = {
			name: L(145),
			vp: aJg,
			vq: aJh,
			aIp: aJi
		}, this.vN[11] = {
			name: L(146),
			vp: aJj,
			vq: aJk,
			aIp: aJl
		}, this.vN[12] = {
			name: L(147),
			vp: aJj,
			vq: aJk,
			aIp: aJl
		}, this.vN[13] = {
			name: L(148),
			vp: aJe,
			vq: cos,
			aIp: aJf
		}, this.vN[14] = {
			name: L(149),
			vp: aJe,
			vq: cos,
			aIp: aJf
		}, this.vN[15] = {
			name: L(150),
			vp: aJg,
			vq: aJh,
			aIp: aJi
		}, this.vN[16] = {
			name: L(151),
			vp: aJg,
			vq: aJh,
			aIp: aJi
		}, this.vN[17] = {
			name: L(152),
			vp: aJe,
			vq: cos,
			aIp: aJf
		}, this.vN[18] = {
			name: L(153),
			vp: aJj,
			vq: aJk,
			aIp: aJl
		}, this.vN[19] = {
			name: L(154),
			vp: aJe,
			vq: cos,
			aIp: aJf
		}, this.vN[20] = {
			name: L(155),
			i: 1024,
			j: 1024,
			lk: 128,
			lh: 32,
			aIf: 0
		}, this.vN[21] = {
			name: L(138) + " 2",
			i: 940,
			j: 940,
			lk: 80,
			lh: 8,
			aIf: 0
		}, this.vN[bQ.aIY] = {
			name: ""
		}, this.aJc = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJc[aA] = aA;
		for (this.aJc[10] = 20, this.aJc[11] = 21, this.aJd = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJd[aA] = 10 + aA
	}
}

function aIb() {
	this.aJa = function() {
		for (var g7, eh, fH, aJY = aAN, aJZ = bQ.vX, i = bQ.el, aJX = i - 1, hL = bQ.em - 1, g2 = 0, ej = 1; ej < hL; ej++)
			for (fH = ej * i, eh = 1; eh < aJX; eh++) aJZ[g7 = fH + eh << 2] === aJZ[1 + g7] && aJZ[g7] === aJZ[2 + g7] && (g2++, aJY[2 + g7] = 4);
		an.a5e = g2
	}, this.aJb = function() {
		for (var aJY = aAN, i = bQ.el, aJX = i - 1, hL = bQ.em - 1, id = 5, ej = 1; ej < hL; ej++)
			for (var fH = ej * i, eh = 1; eh < aJX; eh++) {
				var eE = 2 + (fH + eh << 2);
				4 === aJY[eE] && (! function(eE, id) {
					var ea = 1,
						aJY = aAN,
						ec = ab.ec,
						a1X = [eE];
					aJY[eE] = id;
					for (; ea;) {
						for (var a1Y = [], aA = 0; aA < ea; aA++)
							for (var eP = a1X[aA], ed = 3; 0 <= ed; ed--) {
								var ee = eP + ec[ed];
								4 === aJY[ee] && (aJY[ee] = id, a1Y.push(ee))
							}
						ea = (a1X = a1Y).length
					}
				}(eE, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3W() {
	(x6 = void 0 === x6 ? document.createElement("canvas") : x6).width = bQ.el, x6.height = bQ.em, a3a = x6.getContext("2d", {
		alpha: !0
	}), a3b = aAN = null, a3b = a3a.getImageData(0, 0, bQ.el, bQ.em), aAN = a3b.data, b8.pk.vY(aAN)
}

function cb() {
	var f2, i, j, max, aJn, lh, aJp, aJq, aJr, aJs, aJt, aJu, aJv, aJw, aJo = 1e4;

	function aK3(aK2, lk, ea) {
		var aA;
		for (aJp[0] = aK2, aA = 1; aA < ea; aA++) aJp[aA] = aJp[aA - 1] + lk, lk = aJp[aA] >= aJo ? (aJp[aA] = aJo - 1, -lk) : aJp[aA] < 0 ? (aJp[aA] = 0, -lk) : (lk += 16384 <= aw.random() ? lh : -lh) < -aJn ? -aJn : aJn < lk ? aJn : lk
	}

	function aK5(eh, ej, aK6, ea) {
		(aK6 ? function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA] = aJp[aA]
		} : function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA * i] = aJp[aA]
		})(eh, ej, ea)
	}

	function aK9(value, ea) {
		var aA, aI6, eE, hj = value - aJp[ea - 1];
		if (0 != hj) {
			for (aI6 = 1 + bJ.dj(Math.abs(hj), ea - 1), aI6 = hj < 0 ? -aI6 : aI6, aJp[ea - 1] = value, eE = (eE = ea - 1 - bJ.dj(Math.abs(hj), Math.abs(aI6))) < 1 ? 1 : ea - 2 < eE ? ea - 2 : eE, aA = ea - 2; eE <= aA; aA--) aJp[aA] += hj - (ea -
				1 - aA) * aI6;
			(hj < 0 ? function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJp[aA] < 0 && (aJp[aA] = -aJp[aA] - 1)
			} : function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJp[aA] >= aJo && (aJp[aA] = 2 * aJo - aJp[aA] - 1)
			})(ea)
		}
	}

	function aKC(a1X, a1Y, ea) {
		for (var aA = 0; aA < ea; aA++) a1X[aA] = a1Y[aA]
	}

	function aKD(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aKE(a42, gap, hM) {
		aJq.push(a42), aJr.push(gap), aJs.push(hM)
	}
	this.a6 = function(a2n) {
		! function(a2n) {
			var aA;
			for (i = a2n[0], j = a2n[1], aJn = a2n[2], lh = a2n[3], f2 = new Int16Array(i * j), max = j < i ? i : j, aJp = new Int16Array(max), aJq = [], aJr = [], aJs = [], aJt = new Array(i), aJu = new Array(j), aA = i - 1; 0 <= aA; aA--) aJt[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJu[aA] = !1;
			aJv = new Int16Array(i), aJw = new Int16Array(j)
		}(a2n),
		function(ea) {
			var aK2 = aw.random() % aJo,
				lk = aw.random() % (2 * aJn + 1) - aJn;
			aK3(aK2, lk, ea)
		}(max), aKC(aJw, aJp, j), aK5(0, 0, !0, i);
		var eh, ej, a2n = f2[0],
			ea = max,
			lk = aw.random() % (2 * aJn + 1) - aJn;
		for (aK3(a2n, lk, ea), aKC(aJv, aJp, i), aK5(0, 0, !1, j), aKD(aJv), aKD(aJw), aK3(f2[i - 1], aJv[i - 1], j), aK5(i - 1, 0, !1, j), aK3(f2[i * (j - 1)], aJw[j - 1], i), aK9(f2[i * j - 1], i), aK5(0, j - 1, !0, i), aJt[i - 1] = aJt[0] = !
			0, aJu[j - 1] = aJu[0] = !0, aKE(0, i, !0), aKE(0, j, !1), ! function() {
				var aKG, a42;
				for (;;) {
					if (aKG = function() {
							var aA, aKG = aJq.length - 1;
							for (aA = aKG - 1; 0 <= aA; aA--) aJr[aA] > aJr[aKG] && (aKG = aA);
							return aKG
						}(), aJr[aKG] < 5) return;
					a42 = aJq[aKG] + bJ.dj(aJr[aKG], 2), (aJs[aKG] ? function(eh) {
						var ea, aKJ, aA, aDn = 0,
							aKK = 0;
						for (; aKK < j - 1;) {
							for (aA = aDn + 1; aA < j; aA++)
								if (aJu[aA]) {
									aKK = aA;
									break
								} ea = aKK - aDn + 1, aK3(f2[eh + i * aDn], 0 === aDn ? aJv[eh] : aJp[aKJ - 1] - aJp[aKJ - 2], ea), aK9(f2[aKK * i + eh], ea), aK5(eh, aDn, !1, ea), aKJ = ea, aDn = aKK
						}
						aJt[eh] = !0
					} : function(ej) {
						var ea, aKJ, aA, aDn = 0,
							aKK = 0;
						for (; aKK < i - 1;) {
							for (aA = aDn + 1; aA < i; aA++)
								if (aJt[aA]) {
									aKK = aA;
									break
								} ea = aKK - aDn + 1, aK3(f2[ej * i + aDn], 0 === aDn ? aJw[ej] : aJp[aKJ - 1] - aJp[aKJ - 2], ea), aK9(f2[ej * i + aKK], ea), aK5(aDn, ej, !0, ea), aKJ = ea, aDn = aKK
						}
						aJu[ej] = !0
					})(a42), aKE(a42, aJq[aKG] + aJr[aKG] - a42, aJs[aKG]), aJr[aKG] = a42 - aJq[aKG] + 1
				}
			}(), eh = 0; eh < i; eh++)
			if (!aJt[eh])
				for (ej = 0; ej < j; ej++) aJu[ej] || ! function(eh, ej) {
					var value = f2[ej * i + eh - 1] + f2[(ej - 1) * i + eh],
						a5p = 2;
					aJt[eh + 1] && (a5p++, value += f2[ej * i + eh + 1]);
					aJu[ej + 1] && (a5p++, value += f2[(ej + 1) * i + eh]);
					f2[ej * i + eh] = bJ.dj(value, a5p)
				}(eh, ej)
	}, this.aJ1 = function() {
		return f2
	}, this.aIj = function() {
		f2 = null
	}
}

function aFF(et, eu) {
	return 0 <= et ? bJ.dj(et, eu) : -bJ.dj(-et, eu)
}

function jM(f2) {
	return f2 * f2
}

function a54(et, eu) {
	return eu < et ? et : eu
}

function a9r(et, eu) {
	return et < eu ? et : eu
}

function a7G(et, f2, eu) {
	return f2 < et ? et : eu < f2 ? eu : f2
}

function aKM(f2, ea) {
	for (var ev = bJ.dj(f2 + 1, 2), aA = 0; aA < ea; aA++) ev = bJ.dj(ev + bJ.dj(f2, ev), 2);
	return ev
}

function aGc(f2, ea) {
	return f2 < 1 ? 0 : aKM(f2, ea)
}

function aKN(m7, m8, rx, a70, mK, mL, ry, sf) {
	return !(m7 + rx <= mK || m8 + a70 <= mL || mK + ry <= m7 || mL + sf <= m8)
}

function aKO(m7, m8, rx, a70, mK, mL, ry, sf) {
	return m7 <= mK && m8 <= mL && mK + ry <= m7 + rx && mL + sf <= m8 + a70
}

function vP(f2) {
	return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
}

function bs() {
	this.dj = function(et, eu) {
		return Math.floor((et + .5) / eu)
	}, this.aKP = function(et, eu) {
		return Math.floor(et * (eu + .5))
	}, this.sqrt = function(f2) {
		return ~~Math.sqrt(f2 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p9 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKQ = function(fH, fJ, fL) {
		return Math.max(Math.min(fH, fJ), fL)
	}, this.aKR = function(aKS, aKT, eh, ej) {
		eh -= aKS, aKS = ej - aKT, ej = 0;
		return 0 == eh ? ej = 0 <= aKS ? Math.PI : 0 : (ej = Math.atan(aKS / eh), ej += 0 < eh ? .5 * Math.PI : 1.5 * Math.PI), ej
	}, this.log2 = function(f2) {
		return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
	}, this.log10 = function(f2) {
		return Math.floor(Math.log10(f2 + .5))
	}, this.aKV = function(aKW, aKX, aKY, aKZ, aKa) {
		return aKY - aKa < aKW && aKW < aKY + aKa && aKZ - aKa < aKX && aKX < aKZ + aKa
	}, this.wN = function(hd, he) {
		return hd * hd + he * he
	}
}

function d7() {
	this.x = new aKb, this.rq = 0;
	var aKc = new Array(30);

	function aKg() {
		for (var ea = aKc.length, aA = 0; aA < ea; aA++) aKc[aA] = null
	}
	this.dU = function() {
		for (var aKd, aKe = document.body.firstChild; aKe;) {
			if (aKd = aKe.nextSibling, document.body.contains(aKe) && ("DIV" === aKe.tagName || "INPUT" === aKe.tagName || "BUTTON" === aKe.tagName)) try {
				document.body.removeChild(aKe)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKe = aKd
		}
	}, this.t = function(dx, aKf, a2n) {
		void 0 === aKf && (aKf = this.rq), bd.dc = !0, 0 === dx && (0 === aZ.a04() ? dx = 5 : z.a0.setState(13)), this.qs(), this.rq === dx && (aKf = aKc[dx].aKf, aKc[dx] = null), this.rq = dx;
		var kX = aKc[dx];
		if (!kX || 4 === dx || 7 === dx || 8 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx || 15 === dx || 18 === dx || 20 <= dx && dx <= 28) {
			if (0 === dx) return void aKg();
			1 === dx ? kX = new aKh : 2 === dx ? kX = new aKi : 3 === dx ? kX = new aKj : 4 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx ? kX = a2n : 5 === dx ? kX = new aKk : 6 === dx ? kX = new aKl : 7 === dx ? kX = new aKm(s.x
					.aKn) : 8 === dx ? kX = a2n : 12 === dx ? kX = new aKo : 14 === dx ? kX = new aKp : 15 === dx ? kX = new aKm(s.x.aKq) : 16 === dx ? kX = new aKr : 17 === dx ? kX = new aKs : 18 === dx ? kX = new aKt : 19 === dx ? kX =
				new aKu : 20 === dx ? kX = new aKv : 21 === dx ? kX = new aKw : 22 === dx ? kX = new aKx : 23 === dx ? kX = new aKy : 24 === dx ? kX = new aKz : 25 === dx ? kX = new aL0 : 26 === dx ? kX = new aL1 : 27 === dx ? kX = new aL2 :
				28 === dx ? kX = new aL3 : 29 === dx && (kX = new aL4), kX.aKf = aKf, aKc[dx] = kX
		}
		kX.show(a2n)
	}, this.a0E = function() {
		this.hH() && this.aL5(this.aDL().aKf)
	}, this.aL5 = function(dx) {
		this.hH() && (aKc[dx] ? (this.qs(), bd.dc = !0, this.rq = dx, aKc[dx].show()) : this.t(dx))
	}, this.qs = function() {
		this.hH() && aKc[this.rq].qs()
	}, this.w = function() {
		this.hH() && (aKc[this.rq].qs(), aKg(), this.rq = 0, z.a0.setState(13))
	}, this.ti = function() {
		var kX;
		this.hH() && (kX = aKc[this.rq]).ti && kX.ti()
	}, this.resize = function() {
		if (!this.hH()) return !1;
		aKc[this.rq].resize()
	}, this.gn = function(eh, ej) {
		var kX;
		this.hH() && (kX = aKc[this.rq]).gn && kX.gn(eh, ej)
	}, this.a0Q = function(eh, ej) {
		var kX;
		this.hH() && (kX = aKc[this.rq]).a0Q && kX.a0Q(eh, ej)
	}, this.a0o = function() {
		var kX;
		this.hH() && (kX = aKc[this.rq]).a0o && kX.a0o()
	}, this.a0T = function(ks, kt, deltaY) {
		var kX;
		this.hH() && (kX = aKc[this.rq]).a0T && kX.a0T(ks, kt, deltaY)
	}, this.a0y = function(code) {
		var kX;
		return !!this.hH() && ((kX = aKc[this.rq]).a0y && kX.a0y(code), !0)
	}, this.ij = function() {
		var kX;
		this.hH() && (kX = aKc[this.rq]) && kX.ij && kX.ij()
	}, this.hH = function() {
		return 0 < this.rq
	}, this.aDL = function() {
		return aKc[this.rq]
	}, this.aCL = function(dx) {
		return aKc[dx]
	}, this.aL6 = function() {
		return aKc
	}
}

function aKm(data) {
	var aL7, aL8;
	this.show = function() {
		data.aL9 && bG.aM0("account", data.ro), aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aL8.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(data.username, [new v("⬅️ " + L(36), function() {
		bG.clear(), s.a0E()
	}), new v(data.aL9 ? "🔄 " + L(156) : L(157), function() {
		s.t(8, s.aDL().aKf, new rr(25, {
			rs: 0,
			ro: data.ro,
			rp: data.rp
		}))
	}, 0, 0, 1)]), aL8 = new pU(aL7.tZ, function() {
		var pW = [];
		pW.push(function() {
				var aLQ = new pE,
					qP = (aLQ.pH(L(206)), new qQ({
						value: data.username,
						dx: -1
					}));
				qP.e.readOnly = !0, aLQ.pS(qP), aLQ.pS(new r6([new v(L(175), function(e) {
					return b8.pb.a2E(qP.e), b8.pb.a2F(e), !0
				}).button])), data.aL9 || aLQ.pJ(L(207));
				return aLQ
			}()),
			function(pW) {
				var aLQ, pK, aAb, aLj, aLZ;
				data.aL9 || ((aLQ = new pE).pH(L(208)), (pK = aLQ.pJ(data.aLi.length + " / 160")).style.textAlign = "center", aAb = !0, (aLj = new tr(0, 1, function(e) {
					e = e.target.value.length;
					pK.textContent = e + " / 160", 160 < e ? aAb && (aAb = !1, aLZ.pw(1), aLZ.button.style.color = b9.mh) : aAb || (aAb = !0, aLZ.pw(0), aLZ.button.style.color = b9.nd)
				})).e.rows = 6, aLj.e.style.fontSize = "1em", aLj.ty(data.aLi), aLQ.pS(aLj), aLZ = new v(L(209), function() {
					if (!aAb) return !0;
					s.t(8, s.aDL().aKf, new rr(29, {
						rs: 1,
						pI: aLj.u0().substring(0, 160)
					}))
				}, 0, 0, 1), aLQ.pS(new r6([aLZ.button])), 0 !== data.aLk && (aLQ.pS(new r6([new v(L(1 === data.aLk ? 211 : 212), function() {
					s.t(8, s.aDL().aKf, new rr(29, {
						rs: 0,
						pI: ""
					}))
				}, 0, 0, 1).button])), aLQ.pJ(1 === data.aLk ? L(213, [data.aLm - 1]) : L(214, [data.aLm - 1]))), aLQ.pJ(L(210, [data.aLl])), pW.push(aLQ))
			}(pW),
			function(pW) {
				var aLQ;
				data.aL9 && 0 !== data.aLk && ((aLQ = new pE).pH(L(215)), aLQ.pL(data.aLi), aLQ.pS(new r6([new v(L(216, 0, "Report"), function(e) {
					return ay.x.aLV(0) && (b8.pb.a2F(e), ay.aLX.aLn({
						rs: 5,
						ro: data.ro
					})), !0
				}, 0, 0, 1).button])), pW.push(aLQ))
			}(pW), pW.push(function() {
				var aLQ = new pE,
					aLR = (aLQ.pH(L(158)), [L(159), L(160), L(161), L(162), L(163)]),
					dw = data.aLS;
				aLQ.pN(L(164) + b8.zW.a32(data.um, .01, 2) + "<br>" + L(165) + (dw + 1) + " / " + data.ul + "<br>" + L(166) + aLR[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : dw < 1e3 ? 3 : 4]), data.aL9 || (aLQ.pJ(L(167)), aLQ.pJ(L(168)),
					aLQ.pJ(L(169)));
				return aLQ
			}()), data.aL9 && pW.push(function() {
				var aLQ = new pE,
					qP = (aLQ.pH(L(170)), new qQ({
						value: bh.e7.data[147].value,
						dx: -1
					}, 1, void 0, function(e) {
						bh.r3.r4(147, aLT(e.target.value))
					})),
					aLU = (aLQ.pS(qP), new v(L(14), function(e) {
						return qP.e.readOnly && ay.x.aLV(0) && (b8.pb.a2F(e), aLW(), ay.aLX.aLY({
							rs: 0,
							ro: data.ro,
							value: parseInt(bh.e7.data[147].value, 10)
						})), !0
					}, 1)),
					aLZ = new v(L(171), function(e) {
						return e.textContent === L(171) ? (e.textContent = L(172), qP.e.readOnly = !0, aLU.pw(0), aLU.button.style.color = b9.nd, bh.r3.r4(147, qP.e.value), aLT(bh.e7.data[147].value)) : aLW(), !0
					}),
					pK = (aLQ.pS(new r6([aLZ.button])), aLQ.pJ()),
					aLT = function(f2) {
						f2 = b8.fv.a2k(f2, 2, 1e6);
						var aLa = Math.max(1, 1 + Math.floor(.01 * (f2 - 100)));
						pK.textContent = L(173, [f2, bh.e7.data[105].value, aLa, data.ro, f2 - aLa])
					},
					aLW = function() {
						aLZ.button.textContent = L(171), qP.e.readOnly = !1, aLU.pw(1), aLU.button.style.color = b9.mh
					};
				return aLT(bh.e7.data[147].value), aLQ.pS(new r6([aLU.button])), aLQ
			}());
		pW.push(function() {
			var aLQ = new pE,
				qP = (aLQ.pH(L(174)), new qQ({
					value: data.ro,
					dx: -1
				}));
			return qP.e.readOnly = !0, aLQ.pS(qP), aLQ.pS(new r6([new v(L(175), function(e) {
				return b8.pb.a2E(qP.e), b8.pb.a2F(e), !0
			}).button])), aLQ
		}()), data.aL9 || (pW.push(function() {
			var aLQ = new pE,
				aLb = (aLQ.pH(L(176)), new qQ(bh.e7.data[106]));
			return aLb.e.readOnly = !0, aLb.e.type = "password", aLQ.pS(aLb), aLQ.pS(new r6([new v(L(177), function(e) {
				return e.textContent === L(177) ? (e.textContent = L(178), aLb.e.type = "text") : (e.textContent = L(177), aLb.e.type = "password"), !0
			}).button, new v(L(175), function(e) {
				return b8.pb.a2E(aLb.e), b8.pb.a2F(e), !0
			}).button])), aLQ.pS(new r6([new v(L(179), function() {
				s.t(8, s.aDL().aKf, new rr(15))
			}).button])), aLQ.pH(L(180), "0.8em"), aLQ.pJ(L(181)), aLQ.pJ(L(182)), aLQ.pJ(L(183)), aLQ
		}()), pW.push(function() {
			var aLQ = new pE;
			return aLQ.pH(L(184)), aLQ.pS(new r6([new v(L(185), function() {
				s.t(6, s.aDL().aKf)
			}).button])), aLQ.pS(new r6([new v(L(186), function() {
				bh.r3.r4(105, ""), s.t(8, s.aDL().aKf, new rr(18))
			}).button])), aLQ.pS(new r6([new v(L(187) + bh.e7.data[105].value, function() {
				s.t(4, 0, new u(L(188), L(189), !0, [new v("⬅️ " + L(36), function() {
					s.t(7, s.aCL(7).aKf)
				})]))
			}, b9.nM).button])), aLQ
		}()), pW.push(function() {
			function aLd(dx) {
				for (var aA = 0; aA < 2; aA++) aLc[aA].pw(0 === dx ? b9.mt : 0 === aA ? b9.nM : b9.n4)
			}
			var pQ, aLc, aLQ = new pE;
			aLQ.pH(L(190)), aLQ.pJ(L(191)), bh.x.uW();
			return aLc = [new v(L(192), function() {
				var dx = Math.min(bh.e7.data[117].value, pQ.pR.length - 1);
				if (!(dx < 1)) {
					pQ.pR[dx].remove(), pQ.pR.splice(dx, 1);
					for (var aA = dx; aA < pQ.pR.length; aA++) pQ.pR[aA].name = "" + aA;
					bh.x.uZ(dx), dx = bh.e7.data[117].value, pQ.pR[dx].textContent = pQ.pR[dx].textContent.replace("⚪", "🟢"), aLd(dx)
				}
			}, b9.mt), new v(L(193), function() {
				var dx = Math.min(bh.e7.data[117].value, pQ.pR.length - 1);
				dx < 1 || (dx = bh.x.ua(dx), bh.r3.r4(105, dx.ro), bh.r3.r4(106, dx.password), s.t(8, s.aDL().aKf, new rr(18)))
			}, b9.mt)], (pQ = new tO(bh.e7.data[117], aLd)).pR[0].style.marginTop = "0.5em", aLQ.pP(pQ), aLQ.pS(new r6([aLc[1].button])), aLQ.pS(new r6([aLc[0].button])), aLQ
		}()));
		return pW.push(function() {
				var aLQ = new pE,
					aLR = (aLQ.pH(L(197)), [L(198), L(199), L(200), L(201)]),
					dw = data.aLe;
				return aLQ.pN(L(202) + (data.zJ / 100).toFixed(2) + "<br>" + L(165) + (dw + 1) + " / " + data.ul + "<br>" + L(166) + aLR[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : 3]), aLQ
			}()), pW.push(function() {
				var aLQ = new pE;
				return aLQ.pH(L(194)), aLQ.pN(L(195) + b8.zW.a32(data.ui, .1, 1) + "<br>" + L(165) + (data.uj + 1) + " / " + data.ul + "<br>" + L(196) + data.uk), aLQ
			}()),
			function(pW) {
				var aLQ = new pE,
					aLo = data.up,
					aLp = (aLQ.pH(L(217)), aLQ.pN(L(218, [aLo ? "[" + data.un + "]" : "-"])), aLQ.pN(L(219, [b8.zW.a32(aLo, .01, 2)])), aLQ.pN(L(220, [data.ur + 1 + " / " + data.ul])), data.us),
					aLq = (aLQ.pN(L(221, [b8.zW.a32(aLp, .1, 1)])), data.uu);
				aLQ.pN(L(222, [aLq])), aLQ.pN(L(223, [b8.zW.a32(aLp / Math.max(aLq, 1), .1, 2)])), aLo = data.uq, aLQ.pH(L(224), "0.8em"), aLQ.pN(L(218, [aLo ? "[" + data.uo + "]" : "-"])), aLQ.pN(L(219, [b8.zW.a32(aLo, .01, 2)])), aLp = data
					.ut, aLQ.pN(L(221, [b8.zW.a32(aLp, .1, 1)])), aLq = data.uv, aLQ.pN(L(222, [aLq])), aLQ.pN(L(223, [b8.zW.a32(aLp / Math.max(aLq, 1), .1, 2)])), data.aL9 || (aLQ.pJ(L(225)), aLQ.pJ(L(226)));
				pW.push(aLQ)
			}(pW),
			function(pW) {
				var aLQ = new pE;
				aLQ.pH(L(227)), aLQ.pN(L(202) + (data.aLr / 10).toFixed(1) + "<br>" + L(166) + (data.aLs.length ? L(228, [data.aLs]) : L(229))), data.aL9 ? (aLQ.pS(new r6([new v(L(230), function(e) {
					return ay.x.aLV(0) && (b8.pb.a2F(e), ay.aLX.aLn({
						rs: 4,
						ro: data.ro
					})), !0
				}, 0, 0, 1).button])), aLQ.pJ(L(231)), aLQ.pJ(L(232))) : aLQ.pJ(L(233));
				pW.push(aLQ)
			}(pW), pW.push(function() {
				var aLQ = new pE;
				if (aLQ.pH(L(203)), aLQ.pN(L(204) + data.aLf + "<br>" + L(165) + (data.aLg + 1) + " / " + data.ul + "<br>" + L(166) + bm.dz(data.aLg)), data.aL9) {
					var qP = new qQ({
							value: bh.e7.data[157].value,
							dx: -1
						}, 1, void 0, function(e) {
							bh.r3.r4(157, aLT(e.target.value))
						}),
						aLZ = (qP.e.style.marginTop = "0.6em", aLQ.pS(qP), new v(L(171), function(e) {
							return e.textContent === L(171) ? (e.textContent = L(172), qP.e.readOnly = !0, aLh[0].pw(0), aLh[1].pw(0), aLh[0].button.style.color = b9.nd, aLh[1].button.style.color = b9.nd, aLT(bh.e7.data[157]
								.value)) : aLW(), !0
						})),
						aLh = (aLQ.pS(new r6([aLZ.button])), [new v("−", function(e) {
							return qP.e.readOnly && ay.x.aLV(0) && (b8.pb.a2F(e), aLW(), ay.aLX.aLY({
								rs: 2,
								ro: data.ro,
								value: bJ.p9(parseInt(bh.e7.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qP.e.readOnly && ay.x.aLV(0) && (b8.pb.a2F(e), aLW(), ay.aLX.aLY({
								rs: 1,
								ro: data.ro,
								value: bJ.p9(parseInt(bh.e7.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pK = aLQ.pJ(),
						aLT = function(f2) {
							return f2 = b8.fv.a2k(f2, 3, 32767), pK.textContent = L(205, [f2 - 1, f2, bh.e7.data[105].value]), f2
						};
					aLQ.pS(new r6([aLh[0].button, aLh[1].button]));
					for (var aA = 0; aA < 2; aA++) aLh[aA].button.style.fontSize = "1.6em";
					var aLW = function() {
						aLZ.button.textContent = L(171), qP.e.readOnly = !1, aLh[0].pw(1), aLh[1].pw(1), aLh[0].button.style.color = b9.mh, aLh[1].button.style.color = b9.mh
					};
					aLT(bh.e7.data[157].value)
				}
				return aLQ
			}()),
			function(pW) {
				var aLQ, a2D;
				data.aL9 && !data.aLt || ((aLQ = new pE).pH("Patreon"), !data.aL9 && data.aLu ? aLQ.pS(new r6([new v(L(177), function() {
					ay.aLX.aLn({
						rs: 7,
						ro: data.ro
					}), data.aLu = 0, s.t(7)
				}).button])) : data.aLt ? (aLQ.pN(L(234, [(data.aLv / 100).toFixed(2)]) + "<br>" + L(235, [1 + data.aLw + " / " + data.aLx]) + "<br>" + L(236, [data.aLy ? L(237) : L(238)])), data.aL9 || aLQ.pS(new r6([new v(L(239),
					function() {
						ay.aLX.aLn({
							rs: 8,
							ro: data.ro
						}), data.aLt = 0, bh.r3.r4(160, 0), s.t(7)
					}).button]))) : (aLQ.pN(L(240), "0.75em").style.marginBottom = "0.3em", aLQ.pN("  • " + L(241), "0.75em").style.whiteSpace = "pre", aLQ.pN("  • " + L(242), "0.75em").style.whiteSpace = "pre", aLQ.pN("  • " + L(
						243), "0.75em").style.whiteSpace = "pre", aLQ.pN(L(244), "0.75em").style.marginTop = "1.0em", aLQ.pN(L(245), "0.75em").style.marginTop = "1.0em", aLQ.pN("<a href='" + bI.aLz +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a2D = "https://www.patreon.com/oauth2/authorize?state=" + data.ro +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aLQ.pN(L(246), "0.75em").style.marginTop = "1.0em", aLQ.pN("<a href='" + a2D +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aL9 || (aLQ.pS(new rG), aLQ.pS(new r6([new v(L(178), function() {
						ay.aLX.aLn({
							rs: 6,
							ro: data.ro
						}), data.aLu = 1, s.t(7)
					}).button])), aLQ.pN(L(247), "0.75em").style.marginTop = "0.75em")), pW.push(aLQ))
			}(pW), pW
	}())
}

function aKx() {
	var aM1, aM2, aM3, pW;

	function aM4() {
		aM6(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		2 === aC.data.aIncomeType ? (b8.pk.a1b(aM3.u0(), aC.data.aIncomeData, 255), b8.pk.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(248), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), aLQ.pP(new tO({
			tS: [L(250), L(251), L(252)],
			value: aC.data.aIncomeType
		}, function(dx) {
			aM6(), 2 !== dx || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eX)), aC.data.aIncomeType = dx, s.t(22)
		})), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ;
		1 === aC.data.aIncomeType && ((aLQ = new pE).pH("Value"), aLQ.pS(new qQ({
			dx: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pW.push(aLQ))
	}(pW), function(pW) {
		var aLQ;
		2 === aC.data.aIncomeType && ((aLQ = new pE).pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.aIncomeData, 4)), aLQ.pS(aM3), pW.push(aLQ))
	}(pW), pW))
}

function aL0() {
	var aM1, aM2, aM3;

	function aM4() {
		aM6(), 3 !== aC.data.botDifficultyType || b8.pk.a1P(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		3 === aC.data.botDifficultyType && b8.pk.a1b(aM3.u0(), aC.data.botDifficultyData, aD.k0.length - 1)
	}

	function aMB(pW, dx) {
		var aLQ = new pE,
			value = (aLQ.pH(dx < 0 ? L(61) : L(60) + " " + be.zD[dx % 9]), 0 <= dx && (aLQ.pN(L(255) + ": " + aC.data.teamPlayerCount[dx]).style.marginBottom = "1em"), dx < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dx]);
		aLQ.pP(new tO({
			tS: aD.k0,
			value: value
		}, function(hN) {
			dx < 0 ? aC.data.botDifficultyValue = hN : aC.data.botDifficultyTeam[dx] = hN
		})), pW.push(aLQ)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(61), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, function() {
		var pW = [];
		if (function(pW) {
				var aLQ = new pE,
					tS = (aLQ.pH(L(249)), [L(251), L(253), L(254), L(252)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tS.splice(2, 1));
				aLQ.pP(new tO({
					tS: tS,
					value: value
				}, function(dx) {
					aM6(), aC.data.botDifficultyType = dx, 0 === aC.data.gameMode && 2 === dx && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eX)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pW.push(aLQ)
			}(pW), 0 === aC.data.botDifficultyType) aMB(pW, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aMB(pW, aA);
		else 3 === aC.data.botDifficultyType && ! function(pW) {
			var aLQ = new pE;
			aLQ.pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.botDifficultyData, 8)), aLQ.pS(aM3), pW.push(aLQ)
		}(pW);
		return pW
	}())
}

function aMC(data) {
	var aL7, aMD, aME, aMF, aMG, aMH, aMI, colors, aMJ, aMK, aML = 0,
		aMM = 0,
		aMN = !1,
		aMO = !1,
		aMP = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMt(ks, kt) {
		! function(ks, kt) {
			return aMD < ks && ks < aMD + aMF && aME < kt && kt < aME + aMG
		}(aML = ks, aMM = kt) ? (aMN && (bd.dc = !0), aMN = !1) : (aMN = !0, bd.dc = !0)
	}
	this.show = function() {
		aMO = bh.e7.data[127].value, aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize();
		var ev = h.k,
			th = aL7.te(),
			aMY = ev * th.tg,
			ev = ev * th.qv;
		aMH = b8.pb.sG(.06), aMI = b8.pb.sG(.04), aMD = b8.pb.sG(.06), aME = ev + aMH, aMF = h.i - aMD - aMI, aMG = aMY + ev - aME - aMI
	}, this.ti = function() {
		aL7.ti(),
			function() {
				var aA, aMV, g2, eh, et, g = data.data,
					aMc = 1,
					aMd = .125,
					aMe = aMO ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aMV = g[aA].aMV, g2 = aMV.length, aMc = Math.max(g2, aMc), et = 0; et < g2; et++) aMd = Math.max(aMV[et], aMd), aMe = Math.min(aMV[et], aMe);
				var m8 = aME + aMG,
					ww = aMG / (aMd - aMe),
					wv = 1 / (aMc - 1);
				for (tj.lineWidth = ba.xs, aA = 0; aA < g.length; aA++) {
					for (aMV = g[aA].aMV, g2 = aMV.length, eh = aMD, tj.beginPath(), tj.moveTo(eh + aMF, m8 - ww * (aMV[g2 - 1] - aMe)), et = g2 - 2; 0 <= et; et--) tj.lineTo(eh + wv * et * aMF, m8 - ww * (aMV[et] - aMe));
					tj.strokeStyle = colors[aA], tj.stroke()
				}(function(aMe, aMd, m8, ww) {
					tj.font = b8.pb.rQ(0, .25 * aMD), b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 2), tj.fillStyle = colors[0];
					for (var eh = .92 * aMD, aA = 0; aA < 3; aA++) {
						var f2 = aMe + aA * (aMd - aMe) / 2;
						tj.fillText((f2 / 1e3).toFixed(3), eh, m8 - ww * (f2 - aMe))
					}
				})(aMe, aMd, m8, ww),
				function(aMc) {
					var ej = aME + aMG + .15 * aMI;
					tj.font = b8.pb.rQ(0, Math.min(.4 * aMI, .028 * h.i)), b8.pb.textBaseline(tj, 0), b8.pb.textAlign(tj, 2), tj.fillStyle = colors[0], tj.fillText(b8.a1G.a23(aMJ), aMD + aMF, ej), b8.pb.textAlign(tj, 0), tj.fillText(b8.a1G.a23(
						new Date(aMK.getTime() - 6e4 * (aMc - 1) * aMP[data.aMU])), aMD, ej)
				}(aMc),
				function(aMc, aMe, aMd) {
					if (aMN && !(aMc < 2)) {
						for (var a78, dx = (aML - aMD) / aMF * (aMc - 1), aMh = Math.floor(dx), aMi = Math.floor(1 + dx), aMj = dx - aMh, aMk = 1e5, aMl = -1, aMm = -1, aMn = aMd - (aMd - aMe) * (aMM - aME) / aMG, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAn, aMV = g[aA].aMV;
							aMV.length <= aMi || (aMV = aMV[aMh] + aMj * (aMV[aMi] - aMV[aMh]), (aAn = Math.abs(aMn - aMV)) < aMk && (aMk = aAn, aMl = aA, aMm = aMV))
						} - 1 !== aMl && (aMd = aME + aMG - (aMm - aMe) / (aMd - aMe) * aMG, tj.lineWidth = .5 * ba.xs, tj.strokeStyle = colors[aMl], tj.beginPath(), tj.moveTo(aMD, aMd), tj.lineTo(aML, aMd), tj.lineTo(aML, aME + aMG), tj
						.stroke(), tj.beginPath(), tj.arc(aML, aMd, .1 * aMD, 0, 2 * Math.PI), tj.fillStyle = colors[aMl], tj.fill(), aMe = aME + aMG + .15 * aMI, b8.pb.textAlign(tj, 1), a78 = aMc - 2 < dx ? (a78 = aMK.getTime() - 6e4 * aMP[
								data.aMU], new Date(a78 + (dx - (aMc - 2)) * (aMJ.getTime() - a78))) : new Date(aMK.getTime() - 6e4 * (aMc - dx - 1) * aMP[data.aMU]), aMc = b8.a1G.a23(a78), dx = b8.pb.measureText(aMc), a78 = bJ.p9(aML, aMD +
								.5 * dx, aMD + aMF - .5 * dx), tj.fillStyle = b8.color.mZ(70, 50, 20), tj.fillRect(a78 - .52 * dx, aME + aMG, 1.04 * dx, .55 * aMI), tj.fillStyle = colors[0], tj.fillText(aMc, a78, aMe), tj.font = b8.pb.rQ(0,
								.25 * aMD), b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 2), a78 = .92 * aMD, aMc = (aMm / 1e3).toFixed(3), dx = b8.pb.measureText(aMc), aMe = a78 - 1.04 * dx, tj.fillStyle = b8.color.mZ(70, 50, 20), tj
							.fillRect(aMe, aMd - .1625 * aMD, aMD - aMe, .275 * aMD), tj.fillStyle = colors[aMl], tj.fillText(aMc, a78, aMd))
					}
				}(aMc, aMe, aMd)
			}(), tj.lineWidth = ba.xs, tj.strokeStyle = b9.mh, tj.beginPath(), tj.moveTo(aMD, aME), tj.lineTo(aMD, aME + aMG), tj.lineTo(aMD + aMF, aME + aMG), tj.stroke();
		var aA, fontSize = .5 * aMH,
			g = (tj.font = b8.pb.rQ(0, fontSize), b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 0), data.data),
			ea = g.length,
			ej = aME - .5 * aMH,
			pI = "";
		for (aA = 0; aA < ea; aA++) pI += g[aA].name + "  ";
		pI = pI.trim();
		var aMq = b8.pb.measureText(pI),
			eh = .5 * (h.i - aMq);
		for (aMq > h.i && (eh = 0, tj.font = b8.pb.rQ(0, h.i / aMq * fontSize)), aA = 0; aA < ea; aA++) tj.fillStyle = colors[aA], tj.fillText(g[aA].name, eh, ej), eh += b8.pb.measureText(g[aA].name + "  ")
	}, this.gn = function(ks, kt) {
		aMt(ks, kt)
	}, this.a0Q = function(ks, kt) {
		aMt(ks, kt)
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	};
	var aA, di, a21, hN, ed = data.data,
		ea = ed.length,
		max = 1;
	for (aA = 0; aA < ea; aA++) max = Math.max(max, ed[aA].aMV.length);
	for (aA = 0; aA < ea; aA++)
		for (; ed[aA].aMV.length < max;) ed[aA].aMV.unshift(0);
	di = new Date, a21 = 6e4 * di.getTimezoneOffset(), hN = di.getTime() - a21, aMJ = new Date(hN), 6 === data.aMU ? function(di, a21) {
		var aMX = di.getUTCFullYear(),
			di = di.getUTCMonth() + 1;
		aMK = di < 12 ? new Date(Date.UTC(aMX, di) - a21) : new Date(Date.UTC(aMX + 1, 0) - a21)
	}(di, a21) : (a21 = 6e4 * aMP[data.aMU], aMK = data.aMU <= 4 ? new Date(hN + a21 - di.getTime() % a21) : new Date(hN + a21 - (di.getTime() + 2592e5) % a21)), hN = b8.color, colors = [b9.mh, hN.mZ(255, 0, 0), hN.mZ(0, 200, 0), hN.mZ(80, 80,
		255), hN.mZ(255, 255, 0), hN.mZ(255, 0, 255), hN.mZ(0, 255, 255), hN.mZ(255, 140, 0), hN.mZ(128, 128, 128), hN.mZ(0, 255, 140)], aL7 = new tT(L(256) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aMU] + ", " + b8.a1G.a20(aMJ), [
		new v("⬅️ " + L(36), function() {
			s.x.aAh()
		}), new v(L(257), function() {
			s.t(14)
		})
	], !1)
}

function aKp() {
	var aL7, aL8, pW;
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aL8.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(L(258), [new v("⬅️ " + L(36), function() {
		s.aL5(13)
	})]), aL8 = new pU(aL7.tZ, ((pW = []).push(function() {
		var aLQ = new pE,
			aLZ = (aLQ.pH(L(259)), aLQ.pJ(L(260)), new v(L(261), function() {
				bh.r3.r4(130, 0), s.x.aMy()
			}, 0, 0, 1)),
			qP = new qQ(bh.e7.data[126], 0, function() {
				aLZ.button.click()
			});
		return aLQ.pS(qP), qP.e.placeholder = "a,b,c", qP.e.style.marginTop = "0.5em", aLQ.pS(new r6([aLZ.button])), aLQ
	}()), pW.push(function() {
		var aLQ = new pE,
			aLZ = new v(L(261), function() {
				bh.r3.r4(130, 1), s.x.aMy()
			}, 0, 0, 1),
			aMz = new qQ(bh.e7.data[129], 1, function() {
				aMz.e.focus()
			}),
			aN0 = new qQ(bh.e7.data[128], 1, function() {
				aLZ.button.click()
			});
		return aLQ.pH(L(262)), aLQ.pS(aN0), aN0.e.style.marginBottom = "0.5em", aLQ.pH(L(263)), aLQ.pS(aMz), aLQ.pS(new r6([aLZ.button])), aLQ
	}()), pW.push(function() {
		var aLQ = new pE;
		return aLQ.pH(L(264)), bh.e7.data[125].tS = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLQ.pP(new tO(bh.e7.data[125])), aLQ
	}()), pW.push(function() {
		var aLQ = new pE;
		return aLQ.pH(L(265)), aLQ.pS(new r0(bh.e7.data[127], L(266))), aLQ
	}()), pW))
}

function aKo() {
	var aL7, aN1, aMF, aN2, aN3, aN4, colors = [0, 0, 0],
		aN5 = -1;

	function aN8(aA) {
		var aN9 = aN1.ej + aA * (ba.gap + aN4);
		tj.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", tj.fillRect(aN2, aN9, colors[aA] * aN3, aN4), tj.strokeStyle = b9.mh, tj.strokeRect(aN2, aN9, aN3,
			aN4), tj.fillStyle = b9.mh, tj.font = b8.pb.rQ(0, .32 * aN4), b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 0), tj.fillText(L(0 === aA ? 269 : 1 === aA ? 270 : 271) + aN6(aA), aN2 + ba.gap, aN9 + .53 * aN4)
	}

	function aN6(aA, aNA) {
		return aNA = aNA || 256, bJ.p9(Math.floor(aNA * colors[aA]), 0, aNA - 1)
	}

	function a0u(ks, kt) {
		return !(ks < aN2 || kt < aN1.ej || ks > aN1.eh + aN1.i || kt > aN1.ej + aN1.j)
	}
	this.show = function() {
		var f2 = bh.e7.data[121].value;
		colors[0] = (f2 >> 12) / 63, colors[1] = (f2 >> 6 & 63) / 63, colors[2] = (63 & f2) / 63, aL7.show(), this.resize()
	}, this.qs = function() {
		bh.r3.r4(121, (aN6(0, 64) << 12) + (aN6(1, 64) << 6) + aN6(2, 64)), aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aN1.resize();
		var ev = h.k,
			th = aL7.te(),
			aN7 = (aN1.ej = Math.max(aN1.ej, ev * th.qv + ba.gap), ev * th.tg - 2 * ba.gap);
		aN1.j = Math.min(aN1.j, aN7), aN1.i = 2 * aN1.j, aN1.ej = ev * th.qv + .5 * (ev * th.tg - aN1.j), aN1.eh = .5 * (h.i - aN1.i), aMF = .25 * aN1.i, aN2 = aN1.eh + aMF + ba.gap, aN3 = aN1.i - aMF - ba.gap, aN4 = (aN1.j - 2 * ba.gap) / 3
	}, this.ti = function() {
		var dw, sF, eu;
		aL7.ti(), tj.lineWidth = ba.xs, dw = aN6(0), sF = aN6(1), eu = aN6(2), tj.fillStyle = "rgb(" + dw + "," + sF + "," + eu + ")", tj.fillRect(aN1.eh, aN1.ej, aMF, aN1.j), tj.strokeStyle = b9.mh, tj.strokeRect(aN1.eh, aN1.ej, aMF, aN1.j), tj
			.fillStyle = dw + sF + eu < 306 && sF < 150 ? b9.mh : b9.mY, b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 1), tj.font = b8.pb.rQ(0, .1 * aN1.j), tj.rotate(-Math.PI / 2), tj.fillText(L(268), -aN1.ej - .5 * aN1.j, aN1.eh + .5 * aMF),
			tj.setTransform(1, 0, 0, 1, 0, 0), aN8(0), aN8(1), aN8(2)
	}, this.gn = function(ks, kt) {
		a0u(ks, kt) && (aN5 = bJ.p9(Math.floor((kt - aN1.ej) / (aN4 + .75 * ba.gap)), 0, 2), colors[aN5] = bJ.p9((ks - aN2) / aN3, 0, 1), bd.dc = !0)
	}, this.a0Q = function(ks) {
		-1 !== aN5 && (colors[aN5] = bJ.p9((ks - aN2) / aN3, 0, 1), bd.dc = !0)
	}, this.a0T = function(ks, kt, deltaY) {
		a0u(ks, kt) && (ks = bJ.p9(Math.floor((kt - aN1.ej) / (aN4 + .75 * ba.gap)), 0, 2), colors[ks] = bJ.p9(colors[ks] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0o = function() {
		0 <= aN5 && (aN5 = -1, bd.dc = !0)
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(L(267), [new v("⬅️ " + L(36), function() {
		s.x.aAh()
	})], !1), aN1 = new qD([.5, .25], [.5, .5], 1)
}

function aKw() {
	var aM1, aM2, aM3, qB;

	function aM4() {
		aM6(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aL6()[19] = null, s.a0E()
	}

	function aNB() {
		aM6(), s.t(21)
	}

	function aM6() {
		1 === aC.data.gameMode ? aC.a3P.a3T() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pk.a1b(aM3.u0(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, qB = [new v("⬅️ " + L(36), aM4)], 1 === aC.data.gameMode && qB.push(new v(L(272), aNB, 1, 1)), aM1 = new tT(L(273), qB), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), 0 === aC.data.gameMode && (aLQ.pP(new tO({
			tS: [L(274), L(252)],
			value: aC.data.colorsType
		}, function(dx) {
			aM6(), aC.data.colorsType = dx, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eX || (aC.data.colorsData = new Uint32Array(aC.eX)), s.t(21)
		})), aLQ.pS(new rG));
		aLQ.pS(new r0({
			value: aC.data.selectableColor
		}, L(275), function(value) {
			aC.data.selectableColor = value
		})), pW.push(aLQ)
	}(qB = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pW) {
		var aLQ = new pE;
		aLQ.pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.colorsData, 1)), aLQ.pS(aM3), pW.push(aLQ)
	}(qB) : (aC.a3P.a3T(), qB.push(function() {
		var aLQ = new pE;
		aLQ.pH(L(255));
		for (var aA = 0; aA < be.zD.length; aA++) {
			var hN = (aA + 1) % be.zD.length,
				e = aLQ.pN((0 == hN ? "" : "Team ") + be.zD[hN]);
			aA && (e.style.marginTop = "0.5em"), aLQ.pS(new qQ({
				dx: -1,
				value: aC.data.teamPlayerCount[hN]
			}, 1, 0, function(e) {
				aM1.ta[1].pw(0);
				var playerCount = bJ.p9(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aND] = playerCount
			})).e.aND = hN
		}
		return aLQ
	}())), qB))
}

function rr(id, a2n, aNE) {
	var aL7, aNF;

	function aNK() {
		aNF.pX.innerHTML += "<br>" + L(278)
	}

	function aNJ() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.r3.r4(110, bD.rt.ru(bD.rt.rv(8))), ay.aLX.aNY()
	}
	this.aNG = !0, this.aNH = id, this.show = function() {
		aL7.show(), this.resize(), 15 === id ? (ay.x.aNI(id) ? aNJ : aNK)() : 16 === id ? ay.x.aNI(id) ? ay.aAe.aNL(2) : aNK() : 17 === id ? ay.x.aNI(id) ? ay.aAe.aNL(3) : aNK() : 18 === id ? (ay.x.close(0, 3253), ay.x.aE7(0, id), aNK()) : 21 ===
			id ? ay.x.aNI(id) ? ay.aNM.aNN(a2n.sA, a2n.sB, a2n.sC) : aNK() : 22 === id ? ay.x.aNI(id) ? ay.aNM.aNO(a2n.sA, a2n.aNP, a2n.aNQ) : aNK() : 23 === id ? ay.x.aNI(id) ? ay.aNM.aNR(a2n.aMU, a2n.zZ) : aNK() : 24 === id ? ay.x.aNI(id) ? ay
			.aNM.aNS(a2n.aMU, a2n.sB, a2n.sC) : aNK() : 25 === id ? ay.x.aNI(id) ? ay.aLX.aLn(a2n) : aNK() : 28 === id ? ay.x.aNI(id) ? ay.aNM.aNT(a2n.sA, a2n.aNP, a2n.aNQ) : aNK() : 29 === id && (ay.x.aNI(id) ? ay.aLX.aNU(a2n) : aNK())
	}, this.aNV = function() {
		15 === id ? aNJ() : 16 === id ? ay.aAe.aNL(2) : 17 === id ? ay.aAe.aNL(3) : 18 === id ? s.t(8, this.aKf, new rr(16)) : 21 === id ? ay.aNM.aNN(a2n.sA, a2n.sB, a2n.sC) : 22 === id ? ay.aNM.aNO(a2n.sA, a2n.aNP, a2n.aNQ) : 23 === id ? ay.aNM
			.aNR(a2n.aMU, a2n.zZ) : 24 === id ? ay.aNM.aNS(a2n.aMU, a2n.sB, a2n.sC) : 25 === id ? ay.aLX.aLn(a2n) : 28 === id ? ay.aNM.aNT(a2n.sA, a2n.aNP, a2n.aNQ) : 29 === id ? ay.aLX.aNU(a2n) : 1e3 === id && (this.aNH = id = 25, ay.aLX.aLn(
				a2n))
	}, this.aNW = function(code, bp, data) {
		!bp && code !== id || (15 === code || 16 === code ? s.t(7, this.aKf) : 17 === code ? (ay.x.close(0, 3252), bh.x.uZ(0), bh.e7.data[117].tS && 0 < bh.e7.data[117].tS.length ? (bp = bh.x.ua(0), bh.r3.r4(105, bp.ro), bh.r3.r4(106, bp
			.password), s.t(8, this.aKf, new rr(16))) : (bh.r3.r4(105, ""), s.x.aAh())) : 21 === code ? s.t(10, this.aKf, new aNX(data)) : 23 === code ? s.t(13, 0, new aMC({
			data: data,
			aMU: a2n.aMU
		})) : 25 === code && (s.x.aKq.ro = a2n.ro, s.t(15, this.aKf)))
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aNF.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(L(276), [new v("⬅️ " + L(36), function() {
		aNE ? s.t(29) : s.x.aAh()
	})]), aNF = new r5(aL7.tZ, L(277))
}

function aKu() {
	var aM1, aM2, pW;

	function aNb() {
		var g2;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3P.a3T()), g2 = b8.pk.a1V(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g2) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aM4() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNd(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNd() {
		b7.or.dU(), bh.r3.r4(156, b7.a3f.yK())
	}

	function aNZ() {
		aC.data.isReplay = 0, aNd(), aC.a3P.a3q(), aZ.aEI(), aC.a3P.a3n(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vW : null, aC.a3S(), aC.a3R = 1
	}

	function aNr() {
		aNb();
		for (var g = [aNg(), aNh(), aNi()], aA = 3; aA < 6; aA++) aM2.pX.removeChild(aM2.pY[aA].pG), aM2.pY[aA] = g[aA - 3], aM2.pX.appendChild(aM2.pY[aA].pG);
		aM2.resize()
	}

	function aNg() {
		var aNs, aLQ = new pE;
		return aLQ.pH(L(273)), aNs = 0 === aC.data.gameMode ? [L(274), L(252)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLQ.pN(aNs), aLQ.pS(new r6([new v(L(282), function() {
			s.t(21)
		}).button])), aLQ
	}

	function aNh() {
		var aLQ = new pE,
			g = (aLQ.pH(L(61)), [L(251) + ": " + aD.k0[aC.data.botDifficultyValue], L(253), L(254), L(252)]);
		return aLQ.pN(g[aC.data.botDifficultyType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(25)
		}).button])), aLQ
	}

	function aNi() {
		var aLQ = new pE,
			g = (aLQ.pH("Spawning"), [L(274), L(284), L(252)]);
		return aLQ.pN(g[aC.data.spawningType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(24)
		}).button])), aLQ
	}
	this.show = function() {
		aM1.show(), this.resize(), aM1.tZ.scrollTop = s.x.aGB[0]
	}, this.qs = function() {
		s.x.aGB[0] = aM1.tZ.scrollTop, aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT("🔧 " + L(279), [new v("⬅️ " + L(36), aM4), new v(L(280), aNZ)]), aNb(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vW : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIk(bQ.a3o(aC.data), 0).vW : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIk(bQ.a3o(aC.data), aC.data.mapSeed).vW)), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE,
			a1l = (aLQ.pH(L(281)), aC.data.canvas);
		a1l.style.width = "100%", aLQ.pS({
			e: a1l
		}), aLQ.pS(new r6([new v(L(282), function() {
			s.t(20)
		}).button])), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(255)), aLQ.pS(new qQ({
			dx: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p9(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pk.a1V(aC.data.teamPlayerCount, 0), aC.a3P.a3T(), b8.pk.a1V(aC.data.teamPlayerCount, 0) !== e) && aNr()
		})), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(283)), aLQ.pP(new tO({
			tS: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dx) {
			aC.data.gameMode !== dx && (aC.data.gameMode = dx, aNr())
		})), pW.push(aLQ)
	}(pW), pW.push(aNg()), pW.push(aNh()), pW.push(aNi()), function(pW) {
		var aLQ = new pE,
			g = (aLQ.pH(L(285)), [L(286), L(287), L(252)]);
		aLQ.pN(g[aC.data.playerNamesType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(23)
		}).button])), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ = new pE,
			g = (aLQ.pH(L(248)), [L(250), L(251) + ": " + aC.data.aIncomeValue, L(252)]);
		aLQ.pN(g[aC.data.aIncomeType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(22)
		}).button])), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ = new pE,
			g = (aLQ.pH(L(288)), [L(250), L(251) + ": " + aC.data.tIncomeValue, L(252)]);
		aLQ.pN(g[aC.data.tIncomeType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(26)
		}).button])), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ = new pE,
			g = (aLQ.pH(L(289)), [L(250), L(251) + ": " + aC.data.iIncomeValue, L(252)]);
		aLQ.pN(g[aC.data.iIncomeType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(27)
		}).button])), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ = new pE,
			g = (aLQ.pH(L(290)), [L(250), L(251) + ": " + aC.data.sResourcesValue, L(252)]);
		aLQ.pN(g[aC.data.sResourcesType]), aLQ.pS(new r6([new v(L(282), function() {
			s.t(28)
		}).button])), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(291)), aLQ.pS(new r6([new v(L(292), function() {
			s.w(), aC.a3P.a3r(), s.x.aGB[0] = 0, s.t(19)
		}).button])), aLQ.pS(new r6([new v(L(293), function() {
			bk.aG0()
		}).button])), aLQ.pS(new r6([new v(L(294), function() {
			return bk.aG2(), !0
		}).button])), pW.push(aLQ)
	}(pW), pW))
}

function aL2() {
	var aM1, aM2, aM3, pW;

	function aM4() {
		aM6(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		2 === aC.data.iIncomeType && b8.pk.a1b(aM3.u0(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(289), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), aLQ.pP(new tO({
			tS: [L(250), L(251), L(252)],
			value: aC.data.iIncomeType
		}, function(dx) {
			aM6(), 2 !== dx || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eX), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dx, s.t(27)
		})), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ;
		1 === aC.data.iIncomeType && ((aLQ = new pE).pH("Value"), aLQ.pS(new qQ({
			dx: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pW.push(aLQ))
	}(pW), function(pW) {
		var aLQ;
		2 === aC.data.iIncomeType && ((aLQ = new pE).pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.iIncomeData, 4)), aLQ.pS(aM3), pW.push(aLQ))
	}(pW), pW))
}

function aKk() {
	var aNt, aNu, aN1, qP, aNv;
	this.aEr = new rz, aN1 = new qD([.45, .27], [.5, .5], 2 / 3), aNu = [new v("⚔️<br>" + L(295), function() {
			aNw(0)
		}, b9.nA), new v("🗡️<br>" + L(279), function() {
			aNw(1)
		}, b9.nS), new v("🔑<br>" + L(296), function() {
			aNw(2)
		}, b9.ni), new v("☰<br>" + L(297), function() {
			aNw(3)
		}, b9.mu), new v("", function() {
			s.t(12)
		}, b9.md, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qP = new qQ(bh.e7.data[122]);
	for (var aA = 0; aA < aNu.length; aA++) aNu[aA].button.style.position = "absolute";

	function aNw(dx) {
		z.a0.setState(10), aa.sI() || aa.aEi(), 0 === dx ? s.x.a3i() : 1 === dx ? (b7.aGL.vH(bh.e7.data[156].value, 1) || aC.a3P.a3r(), s.t(19)) : 2 === dx ? 0 !== z.id || bh.e7.data[140].value ? s.t(8, s.rq, new rr(16)) : s.x.aNx(s.rq, 16) : 3 ===
			dx && s.t(1)
	}
	qP.e.style.position = "absolute", qP.e.style.textAlign = "center", qP.e.placeholder = L(298), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEr.show(), aNu[4].pw(b8.color.a1s(bh.e7.data[121].value)), this.resize(), document.body.appendChild(qP.e);
		for (var aA = 0; aA < aNu.length; aA++) document.body.appendChild(aNu[aA].button);
		1 !== z.id || z.dk < 5 || (aNv && bd.e9 > aNv + 144e5 ? z.uK.setState(14) : aNv = bd.e9)
	}, this.qs = function() {
		this.aEr.qs(), document.body.removeChild(qP.e);
		for (var aA = 0; aA < aNu.length; aA++) document.body.removeChild(aNu[aA].button)
	}, this.resize = function() {
		this.aEr.resize(), this.aEr.resize(), aN1.resize();
		var gap = .5 * ba.gap,
			sn = 10 / 99 * .84 * aN1.i,
			aO0 = .16 * aN1.j,
			a7f = .19 * aN1.i,
			eh = aN1.eh + a7f,
			sn = aN1.ej + sn + 3 * gap,
			i = .5 * (aN1.i - gap) - a7f,
			a7f = aN1.i - 2 * a7f - aO0 - gap,
			a7f = (b8.pb.sH(qP.e, eh, sn, a7f, aO0), b8.pb.sH(aNu[4].button, eh + a7f + gap, sn, aO0, aO0), .5 * (aN1.ej + aN1.j - (sn += aO0 + gap) - gap));
		b8.pb.sH(aNu[0].button, eh, sn, i, a7f), b8.pb.sH(aNu[1].button, eh + i + gap, sn, i, a7f), b8.pb.sH(aNu[2].button, eh, sn + a7f + gap, i, a7f), b8.pb.sH(aNu[3].button, eh + i + gap, sn + a7f + gap, i, a7f);
		b8.pb.sH(aNu[5].button, eh, sn + a7f * 2 + gap * 2, i * 2 + gap, a7f / 3);
		b8.pb.sH(aNu[6].button, eh, sn + a7f * 2.33 + gap * 3, i * 2 + gap, a7f / 3);
		for (var aA = 0; aA < aNu.length; aA++) aNu[aA].button.style.font = b8.pb.rQ(0, b8.pb.a29(.065 * aN1.j)), b8.pb.pm(aNu[aA].button, 5);
		qP.e.style.font = b8.pb.rQ(0, b8.pb.a29(.08 * aN1.j)), b8.pb.pm(qP.e, 5)
	}, this.ti = function() {
		if (aZ.aEM(), aS.ti(), aN.ti(), bW.ti(), aa.sI()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aN1.i * 0.03);
				tj.font = b8.pb.rQ(1, size);
				tj.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tj.measureText(text).width;
				tj.textAlign = "left";
				tj.textBaseline = "middle";
				tj.fillText(text, tj.canvas.width - textLength - size / 2, size);
			};
			tj.imageSmoothingEnabled = !1;
			var ev = aa.aEP("territorial.io"),
				mJ = .84 * aN1.i / ev.width;
			tj.setTransform(mJ, 0, 0, mJ, aN1.eh + .08 * aN1.i, aN1.ej), aNt = aNt || b8.a1C.a2l(ev, b8.a1C.a2r, [0, 0, 0]);
			for (var eh = -1; eh <= 1; eh += 2)
				for (var ej = -1; ej <= 1; ej += 2) tj.drawImage(aNt, eh, ej);
			tj.drawImage(ev, 0, 0), tj.imageSmoothingEnabled = !0;
			var hg = aa.aEP("logo"),
				aO2 = .6666 * mJ * ev.height / hg.height,
				mK = .5 * h.i,
				mL = aN1.ej + .5 * mJ * ev.height - .5 * aO2 * hg.height;
			tj.setTransform(aO2, 0, 0, aO2, mK - .6 * mJ * ev.width, mL), tj.drawImage(hg, 0, 0), tj.setTransform(aO2, 0, 0, aO2, mK + .6 * mJ * ev.width - aO2 * hg.width, mL), tj.drawImage(hg, 0, 0), tj.setTransform(1, 0, 0, 1, 0, 0), tj
				.imageSmoothingEnabled = !0
		}
	}
}

function aKr() {
	var aL7, aO3, aO4, tU;

	function aO5(aA) {
		s.t(8, s.rq, new rr(21, {
			sA: aA,
			sB: 0,
			sC: 10
		}))
	}
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aO3.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aO4 = [new v(L(299), function() {
		aO5(1)
	}, 0, 0, 1), new v(L(300), function() {
		aO5(2)
	}, 0, 0, 1), new v(L(301), function() {
		aO5(3)
	}, 0, 0, 1), new v(L(302), function() {
		aO5(0)
	}, 0, 0, 1), new v(L(303), function() {
		aO5(9)
	}, 0, 0, 1), new v(L(304), function() {
		aO5(10)
	}, 0, 0, 1), new v(L(305), function() {
		aO5(11)
	}, 0, 0, 1)], tU = [new v("⬅️ " + L(36), function() {
		s.a0E()
	})], aL7 = new tT(L(306), tU), aO3 = new qA(aO4, aL7.tZ)
}

function aB5(title, pO, aO6) {
	var aL7, aNF;
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aNF.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aO6 = aO6 || [new v("⬅️ " + L(36), function() {
		s.a0E()
	}, b9.nM)], aL7 = new tT(title, aO6), aNF = new r5(aL7.tZ, pO), b8.pb.textAlign(aL7.tZ.style, 1)
}

function aNX(data) {
	var aL7, aO7, ev, rg;

	function aO8(hj) {
		var ea = data.data.length;
		if (ea) {
			for (var sB, max = min = parseInt(data.data[0][0]), aA = 1; aA < ea; aA++) var aCo = parseInt(data.data[aA][0]),
				min = Math.min(aCo, min),
				max = Math.max(aCo, max);
			sB = hj < 0 ? min + hj : max + 1, s.t(8, s.aDL().aKf, new rr(21, {
				sA: data.sA,
				sB: sB,
				sC: sB + Math.abs(hj)
			}))
		}
	}
	this.show = function() {
			aL7.show(), this.resize()
		}, this.qs = function() {
			aL7.qs()
		}, this.resize = function() {
			aL7.resize(), aO7.resize()
		}, this.a0y = function(ev) {
			2 === ev && aL7.ta[0].pt()
		}, ev = data.data.length ? 0 : 1, ev = [new v("⬅️ " + L(36), function() {
			s.a0E()
		}), new v(L(307), function() {
			aO8(-10)
		}, ev, 0, 1), new v(L(308), function() {
			aO8(10)
		}, ev, 0, 1), new v(L(257), function() {
			s.t(11, 10, new aO9({
				sA: data.sA
			}))
		})], rg = [L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(304), L(305)], aL7 = new tT(rg[data.sA], ev),
		function() {
			var aA, ed = {
					ra: []
				},
				ra = ed.ra,
				aOB = data.data,
				ea = aOB.length;
			ea && 0 === aOB[0][0] && 0 <= (dx = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6][data.sA]) && (s.x.sD[dx] = aOB[0][1]);
			var mJ = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01][data.sA],
				a2v = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2][data.sA],
				dx = [
					[L(319), L(320) + " ↗", L(321)],
					[L(319), L(322), L(323), L(324) + " ↗"],
					[L(319), L(320) + " ↗", L(323)],
					[L(319), L(320) + " ↗", L(323)],
					[L(325), L(326), L(327) + " ↗", L(328) + " ↗", L(118)],
					[L(325), L(326), L(329) + " ↗", L(330) + " ↗", L(331)],
					[L(325), L(326), L(332) + " ↗", L(333) + " ↗", L(334)],
					[L(325), L(326), L(329) + " ↗", L(330) + " ↗", L(335)],
					[L(325), L(326), L(327) + " ↗", L(328) + " ↗", L(118)],
					[L(319), L(320) + " ↗", L(323)],
					[L(319), L(320) + " ↗", L(336)],
					[L(319), L(320) + " ↗", L(323)]
				];
			if (ed.rg = dx[data.sA], ed.rl = [
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
				][data.sA], 0 === data.sA || 2 === data.sA || 3 === data.sA || 9 === data.sA || 10 === data.sA || 11 === data.sA)
				for (aA = 0; aA < ea; aA++) ra.push([{
					f2: aOB[aA][0] + 1 + ".",
					di: 0
				}, {
					f2: aOB[aA][1],
					di: 1,
					ro: aOB[aA][4],
					rp: aOB[aA][3]
				}, {
					f2: (mJ * aOB[aA][2]).toFixed(a2v),
					di: 0
				}]);
			else if (1 === data.sA)
				for (aA = 0; aA < ea; aA++) ra.push([{
					f2: aOB[aA][0] + 1 + ".",
					di: 0
				}, {
					f2: aOB[aA][1],
					di: 0
				}, {
					f2: (mJ * aOB[aA][2]).toFixed(a2v),
					di: 0
				}, {
					f2: aOB[aA][3],
					di: 1,
					ro: aOB[aA][5],
					rp: aOB[aA][4]
				}]);
			else if (4 === data.sA || 5 === data.sA || 6 === data.sA || 7 === data.sA || 8 === data.sA)
				for (aA = 0; aA < ea; aA++) {
					var aOE = aOB[aA][5];
					4 === data.sA || 8 === data.sA ? "100%" === (aOE = (aOE % 64 * 100 / (aOE >> 6)).toFixed(0) + "%") && (4 === data.sA ? aOE += " (" + L(337) + ")" : aOE += " (" + L(338) + ")") : 5 === data.sA ? 32768 <= aOE && (aOE = -(aOE -
						32768)) : aOE = (mJ * aOE).toFixed(a2v), ra.push([{
						f2: "" + aOB[aA][0],
						di: 0
					}, {
						f2: "" + aOB[aA][6],
						di: 0
					}, {
						f2: aOB[aA][7],
						di: 1,
						ro: aOB[aA][1],
						rp: aOB[aA][2]
					}, {
						f2: aOB[aA][8],
						di: 1,
						ro: aOB[aA][3],
						rp: aOB[aA][4]
					}, {
						f2: "" + aOE,
						di: 0
					}])
				}
			aO7 = new rZ(aL7.tZ, ed)
		}()
}

function aO9(a2n) {
	var aL7, aL8, pW;
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aL8.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(L(339), [new v("⬅️ " + L(36), function() {
		s.aL5(10)
	})]), aL8 = new pU(aL7.tZ, ((pW = []).push(function() {
		var aLZ, aLQ = new pE,
			aMz = new qQ(bh.e7.data[132], 1, function() {
				aLZ.button.click()
			}),
			aN0 = new qQ(bh.e7.data[131], 1, function() {
				aMz.e.focus()
			});
		aLQ.pH(L(262)), aLQ.pS(aN0), aN0.e.style.marginBottom = "0.8em", aLQ.pH(L(263)), aLQ.pS(aMz);
		return aLZ = new v(L(261), function() {
			sB = Math.floor(aN0.e.value), sC = Math.floor(aMz.e.value);
			var sC, sB = {
				a1T: Math.min(sB, sC),
				aKG: Math.max(sB, sC)
			};
			s.t(8, s.aCL(10).aKf, new rr(21, {
				sA: a2n.sA,
				sB: sB.a1T,
				sC: sB.aKG
			}))
		}, 0, 0, 1), aLQ.pS(new r6([aLZ.button])), aLQ
	}()), pW.push(function() {
		var aLZ, aLQ = new pE,
			aMz = new qQ(bh.e7.data[134], 1, function() {
				aLZ.button.click()
			}),
			aN0 = new qQ(bh.e7.data[133], 0, function() {
				aMz.e.focus()
			});
		return aLQ.pH(1 === a2n.sA ? L(340) : L(341)), aLQ.pS(aN0), aN0.e.style.marginBottom = "0.8em", aLQ.pH(L(342)), aLQ.pS(aMz), aLZ = new v(L(261), function() {
			var aNP = aN0.e.value.slice(0, 20),
				aNQ = Math.abs(Math.floor(aMz.e.value));
			s.t(8, s.aCL(10).aKf, new rr(22, {
				sA: a2n.sA,
				aNP: aNP,
				aNQ: aNQ
			}))
		}, 0, 0, 1), aLQ.pS(new r6([aLZ.button])), aLQ
	}()), pW.push(function() {
		var aLZ, aLQ = new pE,
			aMz = new qQ(bh.e7.data[152], 1, function() {
				aLZ.button.click()
			}),
			aN0 = new qQ(bh.e7.data[151], 0, function() {
				aMz.e.focus()
			});
		return aLQ.pH(L(343)), aLQ.pS(aN0), aN0.e.style.marginBottom = "0.8em", aLQ.pH(L(342)), aLQ.pS(aMz), aLZ = new v(L(261), function() {
			var aNP = aN0.e.value.slice(0, 5),
				aNQ = Math.abs(Math.floor(aMz.e.value));
			s.t(8, s.aCL(10).aKf, new rr(28, {
				sA: a2n.sA,
				aNP: aNP,
				aNQ: aNQ
			}))
		}, 0, 0, 1), aLQ.pS(new r6([aLZ.button])), aLQ
	}()), pW))
}

function aL4() {
	var aOI, sM, aOL, sL, sO, aOJ = [new Array(4), [], new Array(2), new Array(2)],
		aOK = new Array(4),
		aOM = new Array(2),
		aON = [L(60), L(303), L(344), L(345)];

	function aCZ() {
		var a5h = aOI.sZ.qP.e.value.trim().slice(0, 127);
		a5h.length < 1 || (aOI.sZ.qP.e.value = "", bl.aB8.yv(a5h))
	}

	function aOQ(aOS) {
		bl.x.qe[3] = 1 - bl.x.qe[3], aOR(3, 1, bl.x.qe[3]), aOS && ay.aCk.aCl(4), bl.x.qe[3] && bh.r3.r4(158, bl.x.qe[0])
	}

	function aOO(et, eu) {
		bl.x.qe[et] !== eu && (0 === et && bl.x.qe[3] && aOQ(0), aOR(et, bl.x.qe[et], 0), aOR(et, eu, 1), bl.x.qe[et] = eu, 0 === et ? (ay.aCk.aCl(2, eu), bl.x.qe[2] ? (aOI.sa.lS(), aOI.sZ.qb(1)) : aOI.sZ.qb(0), s.aDL().aCO(), s.aDL().aCN()) : 2 ===
			et && (0 === eu ? (ay.aCk.aCl(0), aOI.sZ.lS(), aOI.si()) : (ay.aCk.aCl(1), aOI.sa.lS(), aOI.sj())))
	}

	function aOR(et, eu, color) {
		aOI.sc[et].qB[eu].pw(color ? b9.n6 : b9.nr)
	}

	function aOV(aBg) {
		return aBg < 7 ? aBg + 2 + " " + L(352) : 7 === aBg || 10 === aBg ? L(303) + " (Full-Sending: " + L(7 === aBg ? 353 : 354) + ")" : 8 === aBg ? "1v1" : L(355)
	}

	function aOW(f2) {
		var a5k = bJ.dj(f2, 60),
			f2 = f2 % 60;
		return (a5k < 10 ? "0" : "") + a5k + ":" + (f2 < 10 ? "0" : "") + f2
	}
	this.aCw = function() {
		return aOI.sZ
	}, this.aB8 = function(ro) {
		aOO(2, 0);
		var pI = aOI.sZ.qP.e.value,
			ro = "@" + ro + " ";
		pI.length && !b8.zW.a2G(pI, " ") && (ro = " " + ro), aOI.sZ.qP.e.value = pI += ro, aOI.sZ.qP.e.focus()
	}, this.aCM = function() {
		aOI.sa.lS()
	}, this.aCO = function() {
		var aOU = bl.x.qe[0],
			aOU = bl.x.qg[aOU];
		bQ.a6(aOU.eG, aOU.mapSeed), sM.qB[0].button.textContent = L(281) + ": " + bQ.vM.vN[aOU.eG].name, sM.qB[1].button.textContent = L(283, 0, "Mode") + ": " + aOV(aOU.aBg), sM.qB[2].button.textContent = L(349) + ": " + bQ.vM.vN[aOU.aDM].name,
			sM.qB[3].button.textContent = L(350, 0, "Next Mode") + ": " + aOV(aOU.aDN), sM.qB[4].button.textContent = L(351) + ": " + aOW(aOU.aCQ), sM.resize()
	}, this.aCN = function() {
		var aOU = bl.x.qe[0],
			qf = bl.x.qg[aOU];
		aOI.sg(qf.sh);
		for (var aA = 0; aA < bl.sw.sx.length; aA++) aOJ[0][aA].qa.textContent = "" + bl.sw.sx[aA].length;
		var sw = bl.sw.sx[aOU],
			aOX = sw.length,
			aOY = bl.sw.sy[aOU];
		aOJ[2][1].qa.textContent = "" + aOX, aOJ[3][1].qa.textContent = "" + aOY, sM.qB[4].button.textContent = L(351) + ": " + aOW(qf.aCQ);
		for (aA = 0; aA < 4; aA++) {
			var aOZ = bl.x.qg[aA];
			aOK[aA] ? 0 === aOZ.sh && (aOK[aA].qa.textContent = bQ.vM.vN[aOZ.eG].name) : aOK[aA] = new qZ(bQ.vM.vN[aOZ.eG].name, sL.qB[aA].button, 1, 1), b8.zW.startsWith(aON[aA], "🏆 ") ? aOZ.aBm || (aON[aA] = aON[aA].substring(3), sL.qB[aA]
				.button.textContent = aON[aA], sL.qB[aA].button.appendChild(aOJ[0][aA].qa), sL.qB[aA].button.appendChild(aOK[aA].qa)) : aOZ.aBm && (aON[aA] = "🏆 " + aON[aA], sL.qB[aA].button.textContent = aON[aA], sL.qB[aA].button
				.appendChild(aOJ[0][aA].qa), sL.qB[aA].button.appendChild(aOK[aA].qa))
		}
		var qf = "",
			aOb = "";
		0 === aOU && (qf = bl.ql.aC0(sw, 0, aOX), aOb = bl.ql.aC0(sw, 0, aOY)), aOL[0].qa.textContent = qf, aOL[1].qa.textContent = aOb, aOM[1].qa.textContent = "MP: " + bl.x.aCE[0] + "   SP: " + bl.x.aCE[1] + "   Lobby: " + b8.pk.a1g(bl.sw.sx)
	}, this.aCS = function() {
		aOI.sZ.lS()
	}, this.show = function() {
		aOI.show(), this.resize(), bl.message.show()
	}, this.qs = function() {
		aOI.qs(), bl.tI.qs(), bl.su.qs(), bl.message.qs()
	}, this.resize = function() {
		aOI.resize(1 - bl.x.qe[2]), bl.message.resize()
	}, this.a0y = function(ev) {
		2 === ev ? bl.x.qe[3] ? aOQ(1) : aOI.sc[3].qB[0].pt() : ev < 2 && aOQ(1)
	}, sL = new r9([new v(aON[0], function() {
		return aOO(0, 0), 2
	}), new v(aON[1], function() {
		return aOO(0, 1), 2
	}), new v(aON[2], function() {
		return aOO(0, 2), 2
	}), new v(aON[3], function() {
		return aOO(0, 3), 2
	})], b9.nr), sM = new r9([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.ns, 1);
	var aOP = new r9([new v(L(346), function() {
		return aOO(2, 0), 2
	}), new v(L(114), function() {
		return aOO(2, 1), 2
	})], b9.nr);
	sO = new r9([new v(L(347), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.tC(), ay.x.a0G(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.tC(), ay.x.a0G(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(348), function() {
		return aOQ(1), 2
	})], b9.nr), aOI = new sK(sL, sM, aOP, sO, aCZ, bl.tI.aD5);
	for (var aA = 0; aA < 4; aA++) aOJ[0][aA] = new qZ("0", sL.qB[aA].button);
	aOJ[2][1] = new qZ("0", aOP.qB[1].button), aOJ[3][1] = new qZ("0", sO.qB[1].button), aOL = [new qZ("", aOP.qB[1].button, 1, 1), new qZ("", sO.qB[1].button, 1, 1)], aOR(0, bl.x.qe[0], 1), aOR(2, bl.x.qe[2], 1), (aOM = [new qZ(L(255), aOI.sk(), 1,
		0), new qZ("", aOI.sk(), 1, 1)])[0].qa.style.fontSize = "0.4em", aOM[1].qa.style.fontSize = "0.4em"
}

function aKl() {
	var aL7, aL8, pW;
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aL8.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(L(356), [new v("⬅️ " + L(36), function() {
		s.t(7, s.aCL(7).aKf)
	}), new v(L(193), function() {
		bh.r3.r4(105, bE.rt.v6(aL8.pY[0].pF[0].e.value, 5)), bh.r3.r4(106, bE.rt.v6(aL8.pY[1].pF[0].e.value, 8)), s.t(8, s.aCL(7).aKf, new rr(18))
	})]), aL8 = new pU(aL7.tZ, ((pW = []).push(function() {
		var aLQ = new pE;
		return aLQ.pH(L(174)), aLQ.pS(new qQ({
			value: "",
			dx: -1
		})), aLQ
	}()), pW.push(function() {
		var aLQ = new pE,
			aLb = (aLQ.pH(L(176)), new qQ({
				value: "",
				dx: -1
			}));
		return aLb.e.type = "password", aLQ.pS(aLb), aLQ.pS(new r6([new v(L(177), function(e) {
			return e.textContent === L(177) ? (e.textContent = L(178), aLb.e.type = "text") : (e.textContent = L(177), aLb.e.type = "password"), !0
		}).button])), aLQ
	}()), pW))
}

function aKs() {
	var aL7, aO3, aO4, tU;

	function aO5(aA) {
		s.t(8, s.rq, new rr(21, {
			sA: aA,
			sB: 0,
			sC: 10
		}))
	}
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aO3.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aO4 = [new v(L(314), function() {
		aO5(5)
	}, 0, 0, 1), new v(L(315), function() {
		aO5(6)
	}, 0, 0, 1), new v(L(316), function() {
		aO5(7)
	}, 0, 0, 1)], tU = [new v("⬅️ " + L(36), function() {
		s.a0E()
	})], aL7 = new tT(L(357), tU), aO3 = new qA(aO4, aL7.tZ)
}

function aKb() {
	this.e7 = {}, this.sD = new Array(7), this.aKq = null, this.aKn = null, this.rX = 0, this.aGB = [0], this.y = function() {
		s.t(5, 5)
	}, this.a3i = function() {
		s.w(), aY.dU()
	}, __fx.customLobby.setJoinFunction(() => {
		s.w(), aY.dU()
	}), this.aAh = function() {
		s.t(0 === aZ.a04() ? 5 : 0)
	}, this.aMy = function() {
		if (1 === bh.e7.data[130].value) s.t(8, s.aDL().aKf, new rr(24, {
			aMU: bh.e7.data[125].value,
			sB: bh.e7.data[128].value,
			sC: bh.e7.data[129].value
		}));
		else {
			for (var g = (g = bh.e7.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDL().aKf, new rr(23, {
				aMU: bh.e7.data[125].value,
				zZ: g
			}))
		}
	}, this.aNx = function(aKf, target) {
		s.t(4, aKf, new u("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOd +
			"' target='_blank'>" + bI.aOd + "</a>", !1, [new v("⬅️ " + L(36), function() {
				s.t(aKf)
			}), new v("✅ Accept", function() {
				bh.r3.r4(140, 1), 0 === target ? s.t(2, aKf) : s.t(8, aKf, new rr(target))
			})]))
	}, this.aOe = function() {
		for (var aA = 0; aA < 7; aA++) this.sD[aA] = bE.ux.v1(bF.oc(5));
		this.sD[1] = "[" + this.sD[1] + "]", 5 === s.rq && (s.aDL().aEr.r4(this.sD), s.aDL().resize())
	}
}

function aKv() {
	var aM1, aM2, aOf, pW;

	function aM4() {
		b4.tC(), s.aL6()[19] = null, s.a0E()
	}

	function aOm() {
		aOp(), aOn()
	}

	function aOp() {
		aOf.pG.lastChild && aOf.pG.removeChild(aOf.pG.lastChild)
	}

	function aOn() {
		var aOq = bQ.a3o(aC.data);
		aC.data.canvas = bQ.aIk(aOq, aC.data.mapSeed).vW, aOo()
	}

	function aOo() {
		var a1l = aC.data.canvas;
		a1l.style.width = "100%", aOf.pG.appendChild(a1l)
	}
	this.aFv = function(a1l) {
		aC.data.canvas && aOp(), aC.data.canvas = a1l, aOo()
	}, this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(281), [new v("⬅️ " + L(36), aM4)]), 2 === aC.data.mapType && b4.dU(), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), aLQ.pP(new tO({
			tS: [L(358), L(359), L(360)],
			value: aC.data.mapType
		}, function(dx) {
			2 === (aC.data.mapType = dx) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.tC()), s.t(20)
		})), 2 <= aC.data.mapType && (aLQ.pS(new rG), aLQ.pS(new r0({
			value: aC.data.passableWater
		}, L(361), function(value) {
			aC.data.passableWater = value
		})), aLQ.pS(new r0({
			value: aC.data.passableMountains
		}, L(362), function(value) {
			aC.data.passableMountains = value
		})));
		pW.push(aLQ)
	}(pW = []), function(pW) {
		if (0 === aC.data.mapType) {
			for (var aLQ = new pE, tS = (aLQ.pH(L(281)), []), aA = 0; aA < bQ.vM.aJc.length; aA++) tS.push(bQ.vM.vN[bQ.vM.aJc[aA]].name);
			aLQ.pP(new tO({
				tS: tS,
				value: aC.data.mapProceduralIndex
			}, function(dx) {
				aC.data.mapProceduralIndex = dx, aOm()
			})), pW.push(aLQ)
		}
	}(pW), function(pW) {
		if (1 === aC.data.mapType) {
			for (var aLQ = new pE, tS = (aLQ.pH(L(281)), []), aA = 0; aA < bQ.vM.aJd.length; aA++) tS.push(bQ.vM.vN[bQ.vM.aJd[aA]].name);
			aLQ.pP(new tO({
				tS: tS,
				value: aC.data.mapRealisticIndex
			}, function(dx) {
				aC.data.mapRealisticIndex = dx, aOm()
			})), pW.push(aLQ)
		}
	}(pW), function(pW) {
		var aLQ;
		2 === aC.data.mapType && ((aLQ = new pE).pH(L(281)), aLQ.pS(new r6([new v(L(363), function() {
			return b4.aFo(), !0
		}).button])), pW.push(aLQ))
	}(pW), function(pW) {
		(aOf = new pE).pH(L(364)), 2 !== aC.data.mapType ? aOn() : aC.data.canvas && aOo();
		pW.push(aOf)
	}(pW), function(pW) {
		var aLQ, qP, aLZ;
		0 === aC.data.mapType && ((aLQ = new pE).pH("Seed"), qP = new qQ({
			dx: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOm())
		}), aLZ = new v(L(274), function(e) {
			var aIf = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIf) return qP.e.value = aC.data.mapSeed = aIf, aOm(), !0
		}), aLQ.pS(qP), aLQ.pS(new r6([aLZ.button])), pW.push(aLQ))
	}(pW), function(pW) {
		var aLQ, qP;
		2 === aC.data.mapType && ((aLQ = new pE).pH(L(365)), qP = new qQ({
			dx: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLQ.pS(qP), pW.push(aLQ))
	}(pW), pW))
}

function u(title, pO, aOr, aO6) {
	var aL7, aNF;
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aNF.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aO6 = aO6 || [new v("⬅️ " + L(36), function() {
		s.a0E()
	})], aL7 = new tT(title, aO6), aNF = new r5(aL7.tZ, pO), aOr && b8.pb.textAlign(aL7.tZ.style, 1)
}

function aKy() {
	var aM1, aM2, aM3, pW;

	function aM4() {
		aM6(), 2 === aC.data.playerNamesType && 1 === b8.pk.a1P(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		2 === aC.data.playerNamesType && b8.pk.a1d(aM3.u0(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(285), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), aLQ.pP(new tO({
			tS: [L(286), L(287), L(252)],
			value: aC.data.playerNamesType
		}, function(dx) {
			aM6(), aC.data.playerNamesType = dx, s.t(23)
		})), aLQ.pS(new rG), aLQ.pS(new r0({
			value: aC.data.selectableName
		}, L(366), function(value) {
			aC.data.selectableName = value
		})), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ;
		2 === aC.data.playerNamesType && ((aLQ = new pE).pH("Data"), aM3 = new tr(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eX || (aC.data.playerNamesData = new Array(aC.eX), aC.data.playerNamesData
			.fill("")), aM3.ty(b8.zW.a38(aC.data.playerNamesData, 1, '"')), aLQ.pS(aM3), pW.push(aLQ))
	}(pW), pW))
}

function aKj() {
	var aM1, tw;

	function aOs() {
		s.w();
		var pI = b7.aOw(tw.u0());
		(aC.yr && 0 < pI.length && pI === b7.or.a3e || b7.aGL.vH(pI)) && b7.aOx()
	}
	this.show = function(aOt) {
		this.aOu(aOt), aM1.show(), this.resize()
	}, this.aOu = function(aOt) {
		0 === aC.yr ? aOt ? tw.ty(aOt) : b7.or.a3e.length && tw.ty(b7.or.a3e) : (aC.gj || (b7.or.a3e = b7.a3f.yK()), tw.ty(b7.aOv(b7.or.a3e)))
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), tw.resize()
	}, this.a0y = function(ev) {
		2 === ev ? aM1.ta[0].pt() : aOs()
	}, aM1 = new tT(L(367), [new v("⬅️ " + L(36), function() {
		s.aL5(1)
	}), new v(L(368), function() {
		tw.u1()
	}), new v(L(369), function() {
		tw.u2()
	}), new v(L(370), function() {
		tw.clear()
	}), new v(L(371), function() {
		aOs()
	})]), tw = new tr(L(372)), aM1.tZ.appendChild(tw.e)
}

function aKi() {
	var aL7, aL8, pW, aAd, aLQ;

	function aOy() {
		var e9;
		aAd !== bh.e7.data[12].value ? (b5.dU(), b5.aAc(), e9 = bd.e9, s.t(4, 1, new u(L(375), L(376), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.e9 < e9 + 1500 || z.a0.a1()
		}, b9.n4)]))) : s.t(1)
	}
	this.show = function() {
			aAd = bh.e7.data[12].value, aL7.show(), this.resize()
		}, this.qs = function() {
			aL7.qs()
		}, this.resize = function() {
			aL7.resize(), aL8.resize()
		}, this.a0y = function(ev) {
			2 === ev && aL7.ta[0].pt()
		}, aL7 = new tT(L(373), [new v("⬅️ " + L(36), aOy), new v(L(374), function() {
			s.w(), bh.r3.ue(), s.t(2)
		})]), pW = [], (aLQ = new pE).pH(L(377)), aLQ.pJ(L(378)), pW.push(aLQ),
		function(pW) {
			var aLQ = new pE,
				g = (aLQ.pH(L(399)), b5.data.aAl());
			aLQ.pP(new tO({
				tS: g,
				value: b5.data.aAp(g)
			}, function(dx) {
				return bh.r3.r4(12, g[dx].split(":")[0]), !0
			})), pW.push(aLQ)
		}(pW),
		function(pW) {
			var aLQ = new pE,
				aP1 = (aLQ.pH(L(397)), []);
			aLQ.pS(new r6([new v(L(398), function(e) {
				bV.aP2();
				for (var aA = 0; aA < aP1.length; aA++) aP1[aA].e.value = bV.aA3[aA];
				return b8.pb.a2F(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aP3.length; aA++) {
				aLQ.pJ(bV.aP3[aA]);
				for (var et = 0; et < 2; et++) {
					var dx = 2 * aA + et,
						qP = new qQ({
							value: bV.aA3[dx],
							dx: -1
						});
					qP.e.aP4 = dx, aP1.push(qP), qP.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aP5(e.target.aP4, code)
					}), et && (qP.e.style.marginLeft = "4%"), qP.e.style.width = "48%", aLQ.pS(qP)
				}
			}
			pW.push(aLQ)
		}(pW), (aLQ = new pE).pH(L(23)), aLQ.pP(new tO({
			tS: ["1", "2"],
			value: aY.aE3 - 1
		}, function(aA) {
			aY.aE3 = aA + 1
		})), pW.push(aLQ), (aLQ = new pE).pH(L(379)), bh.e7.data[1].tS = [L(380), L(381), L(382), L(383)], aLQ.pP(new tO(bh.e7.data[1])), pW.push(aLQ), (aLQ = new pE).pH(L(384)), bh.e7.data[9].tS = [L(381), L(385), L(386)], aLQ.pP(new tO(bh.e7.data[
			9])), pW.push(aLQ), (aLQ = new pE).pH(L(387)), bh.e7.data[11].tS = [L(388), L(9), L(389)], aLQ.pP(new tO(bh.e7.data[11])), pW.push(aLQ), (aLQ = new pE).pH(L(390)), aLQ.pS(new r0(bh.e7.data[2])), pW.push(aLQ), (aLQ = new pE).pH(L(391)),
		aLQ.pS(new r0(bh.e7.data[7])), pW.push(aLQ), (aLQ = new pE).pH(L(392)), aLQ.pS(new r0(bh.e7.data[8])), pW.push(aLQ), (aLQ = new pE).pH(L(393)), aLQ.pS(new qQ(bh.e7.data[5])), pW.push(aLQ), (aLQ = new pE).pH(L(394)), aLQ.pS(new r0(bh.e7.data[
			13], L(395))), aLQ.pS(new r0(bh.e7.data[14], L(396))), pW.push(aLQ), aL8 = new pU(aL7.tZ, pW)
}

function aKz() {
	var aM1, aM2, aM3, pW;

	function aM4() {
		aM6(), 2 !== aC.data.spawningType || b8.pk.a1P(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		2 === aC.data.spawningType && b8.pk.a1b(aM3.u0(), aC.data.spawningData, bQ.aFx - 1)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(400), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE,
			tS = (aLQ.pH(L(249)), [L(274), L(284), L(252)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tS.splice(1, 1), 0 < value) && (value = 1);
		aLQ.pP(new tO({
			tS: tS,
			value: value
		}, function(dx) {
			aM6(), aC.data.spawningType = dx, 0 === aC.data.gameMode && 1 === dx && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eX)), s.t(24)
		})), aLQ.pS(new rG), aLQ.pS(new r0({
			value: aC.data.selectableSpawn
		}, L(401), function(value) {
			aC.data.selectableSpawn = value
		})), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ = new pE;
		aLQ.pH("Seed"), aLQ.pS(new qQ({
			dx: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pW.push(aLQ)
	}(pW), function(pW) {
		var aLQ;
		2 === aC.data.spawningType && ((aLQ = new pE).pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.spawningData, 2)), aLQ.pS(aM3), pW.push(aLQ))
	}(pW), pW))
}

function aKh() {
	var aL7, aO3, aO4, tU;

	function aP6(id) {
		0 !== z.id || bh.e7.data[140].value ? 0 === id ? s.t(8, 1, new rr(16)) : s.t(2) : s.x.aNx(s.rq, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aL7.show(), this.resize(), this.ij()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aO3.resize()
	}, this.ij = function() {
		8 === aZ.a04() && (2 <= bb.aPB ? aO4[2].pu === b9.mt && aO4[2].pw(0) : aO4[2].pu !== b9.mt && aO4[2].pw(b9.mt), !aC.gj && aL.pC(aC.eK) ? aO4[1].pu === b9.mt && aO4[1].pw(0) : aO4[1].pu !== b9.mt && aO4[1].pw(b9.mt), !aC.gj && au.hK(aC
			.eK) ? aO4[0].pu === b9.mt && aO4[0].pw(0) : aO4[0].pu !== b9.mt && aO4[0].pw(b9.mt))
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aO4 = [new v(L(402), function() {
		aP6(0)
	}), new v(L(306), function() {
		s.t(16)
	}), new v(L(357), function() {
		s.t(17)
	}), new v(L(403), function() {
		s.x.aMy()
	}, 0, 0, 1), new v(L(367), function() {
		s.t(3, 1)
	}), new v(L(404), function() {
		s.t(18)
	}), new v(L(373), function() {
		aP6(1)
	}), new v(L(405), function() {
		s.t(4, 1, new u(L(405), b8.pb.a2A(["Patreon", L(414), L(415), "Discord", L(416), L(299), L(417), L(114), L(418), L(419), L(420)], [bI.aLz, bI.aB2, bI.zz, bI.aB3, bI.aPC, bI.aPD, bI.zh, bI.aPE, bI.aPF, bI.aPG, bI.aOd]), !1, [new v(
			"⬅️ " + L(36),
			function() {
				s.t(1)
			})]))
	}), new v(L(406), function() {
		s.t(4, 1, new u(L(406), l.dk + "<br><a href='" + bI.aPC + "' target='_blank'>" + bI.aPC + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(36), function() {
				s.t(1)
			})]))
	}), new v(L(407), function() {
		s.t(4, 1, new u(L(407), L(421) + "<br>" + L(422), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		}), new v(L(423), function() {
			z.a0.zt(), s.t(1)
		})]))
	}), new v(L(408), function() {
		z.a0.zu(), s.t(4, 1, new u(L(424), L(425) + " <a href='" + bI.aOd + "' target='_blank'>" + bI.aOd + "</a>", !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		})]))
	})], tU = [new v("⬅️ " + L(36), function() {
		s.x.aAh()
	})], 8 === aZ.a04() && (aO4.unshift(new v(L(411), function() {
		2 <= bb.aPB && (s.w(), bc.a11(), bd.dc = !0)
	}, 0, 1)), aO4.unshift(new v(L(412), function() {
		!aC.gj && aL.pC(aC.eK) && (b6.gw.oJ(), s.w(), aL.gk) && aL.a11()
	}, 0, 1)), aO4.unshift(new v(L(413), function() {
		!aC.gj && au.hK(aC.eK) && (bT.a4A(2), b6.gw.hG(), s.w(), aL.gk) && aL.a11()
	}, 0, 1))), 1 === z.id && 5 <= z.dk && aO4.push(new v(L(409), function() {
		z.a0.zv()
	})), aL7 = new tT(L(410), tU), aO3 = new qA(aO4, aL7.tZ)
}

function aL3() {
	var aM1, aM2, aM3, pW;

	function aM4() {
		aM6(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		2 === aC.data.sResourcesType && b8.pk.a1b(aM3.u0(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(290), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), aLQ.pP(new tO({
			tS: [L(250), L(251), L(252)],
			value: aC.data.sResourcesType
		}, function(dx) {
			aM6(), 2 !== dx || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eX)), aC.data.sResourcesType = dx, s.t(28)
		})), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ;
		1 === aC.data.sResourcesType && ((aLQ = new pE).pH("Value"), aLQ.pS(new qQ({
			dx: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pW.push(aLQ))
	}(pW), function(pW) {
		var aLQ;
		2 === aC.data.sResourcesType && ((aLQ = new pE).pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.sResourcesData, 2)), aLQ.pS(aM3), pW.push(aLQ))
	}(pW), pW))
}

function aL1() {
	var aM1, aM2, aM3, pW;

	function aM4() {
		aM6(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aL6()[19] = null, s.a0E()
	}

	function aM6() {
		2 === aC.data.tIncomeType && b8.pk.a1b(aM3.u0(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aM1.show(), this.resize()
	}, this.qs = function() {
		aM1.qs()
	}, this.resize = function() {
		aM1.resize(), aM2.resize()
	}, this.a0y = function(ev) {
		2 === ev && aM1.ta[0].pt()
	}, aM1 = new tT(L(288), [new v("⬅️ " + L(36), aM4)]), aM2 = new pU(aM1.tZ, (function(pW) {
		var aLQ = new pE;
		aLQ.pH(L(249)), aLQ.pP(new tO({
			tS: [L(250), L(251), L(252)],
			value: aC.data.tIncomeType
		}, function(dx) {
			aM6(), 2 !== dx || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eX), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dx, s.t(26)
		})), pW.push(aLQ)
	}(pW = []), function(pW) {
		var aLQ;
		1 === aC.data.tIncomeType && ((aLQ = new pE).pH("Value"), aLQ.pS(new qQ({
			dx: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pW.push(aLQ))
	}(pW), function(pW) {
		var aLQ;
		2 === aC.data.tIncomeType && ((aLQ = new pE).pH("Data"), (aM3 = new tr(0, 1, 0, 1)).ty(b8.zW.a38(aC.data.tIncomeData, 4)), aLQ.pS(aM3), pW.push(aLQ))
	}(pW), pW))
}

function aKt() {
	var aL7, aL8, pW;
	this.show = function() {
		aL7.show(), this.resize()
	}, this.qs = function() {
		aL7.qs()
	}, this.resize = function() {
		aL7.resize(), aL8.resize()
	}, this.a0y = function(ev) {
		2 === ev && aL7.ta[0].pt()
	}, aL7 = new tT(L(404), [new v("⬅️ " + L(36), function() {
		s.a0E()
	})]), aL8 = new pU(aL7.tZ, ((pW = []).push(function() {
		function aLW() {
			aPL.button.textContent = L(171), aPJ.e.readOnly = !1, aPK.e.readOnly = !1, aLU.pw(1), aLU.button.style.color = b9.mh
		}
		var aLQ = new pE,
			aPI = (aLQ.pH(L(426)), new qQ({
				value: bh.e7.data[105].value,
				dx: -1
			})),
			aPJ = (aPI.e.readOnly = !0, aLQ.pS(aPI), aLQ.pH(L(330), "0.8em"), new qQ(bh.e7.data[148])),
			aPJ = new qQ(bh.e7.data[148], 0, void 0, function(e) {
				aLT(bh.e7.data[149].value, e.target.value)
			}),
			aPK = (aLQ.pS(aPJ), aLQ.pH(L(334), "0.8em"), new qQ(bh.e7.data[149], 1, void 0, function(e) {
				aLT(e.target.value, bh.e7.data[148].value)
			})),
			aPL = (aLQ.pS(aPK), new v(L(171), function(e) {
				return e.textContent === L(171) ? (e.textContent = L(172), aPJ.e.readOnly = !0, aPK.e.readOnly = !0, aLU.pw(0), aLU.button.style.color = b9.nd, bh.r3.r4(149, aPK.e.value), aLT(bh.e7.data[149].value, bh.e7.data[
					148].value)) : aLW(), !0
			})),
			aLU = (aLQ.pS(new r6([aPL.button])), new v(L(14), function(e) {
				return aPJ.e.readOnly && ay.x.aLV(0) && (b8.pb.a2F(e), aLW(), ay.aLX.aLY({
					rs: 0,
					ro: bh.e7.data[148].value,
					value: parseInt(bh.e7.data[149].value, 10)
				})), !0
			}, 1)),
			pK = aLQ.pJ(),
			aLT = (aLQ.pJ(L(427)).style.fontWeight = "bold", function(f2, pI) {
				f2 = b8.fv.a2k(f2, 2, 1e6);
				var aLa = Math.max(1, 1 + Math.floor(.01 * (f2 - 100)));
				pK.textContent = L(173, [f2, bh.e7.data[105].value, aLa, pI, f2 - aLa])
			});
		return aLQ.pS(new r6([aLU.button])), aLT(bh.e7.data[149].value, bh.e7.data[148].value), aLQ
	}()), pW))
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
	var a7t, aPN, aPO, aPP, aPM = !1;

	function aPQ() {
		aPM = !0, a7t = -1, aPN = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aPN[aA] = !1;
		var wN = Math.floor(1 + .02 * h.min);
		aPO = new Array(4), (aPP = new Array(4))[1] = aPP[3] = aPO[0] = aPO[2] = 0, aPP[0] = aPO[3] = -wN, aPO[1] = aPP[2] = wN
	}

	function aPR() {
		if (-1 !== a7t)
			if (0 !== aC.yr && aG.mP()) {
				for (var aPS = !1, aA = 3; 0 <= aA; aA--) aPN[aA] && (aPS = !0, iA += aPO[aA], iC += aPP[aA], ae.a0Q(aPO[aA], aPP[aA]), aR.a7b());
				aPS ? bd.dc = !0 : ap.mF()
			} else ap.mF()
	}
	this.a0w = function(dx) {
		0 !== aC.yr && aG.mP() && (aPM || aPQ(), aPN[dx] = !0, -1 === a7t) && (a7t = setInterval(aPR, 20), aPR())
	}, this.a0z = function(dx) {
		if (0 !== aC.yr && (aPM || aPQ(), aPN[dx] = !1, -1 !== a7t)) {
			for (var aPS = !1, aA = 3; 0 <= aA; aA--) aPS = aPS || aPN[aA];
			aPS || this.mF()
		}
	}, this.mF = function() {
		if (aPM && -1 !== a7t) {
			for (var aA = 3; 0 <= aA; aA--) aPN[aA] = !1;
			clearInterval(a7t), a7t = -1
		}
	}
}

function cd() {
	this.x = new aPT, this.lN = new aPU, this.o0 = new aPV, this.aCk = new aPW, this.aAe = new aPX, this.aLX = new aPY, this.ob = new aPZ, this.aNM = new aPa, this.a5N = new aPb, this.aPc = new aPd, this.aPe = new aPf, this.aPg = new aPh, this.aPi =
		new aPj, this.dU = function() {
			this.x.dU()
		}
}

function aPT() {
	var aPk, aPm;
	this.aE6 = 5, this.aPl = null;

	function aPt(aA) {
		return aPm[aA].aPM && aPk[aA].aPt()
	}

	function aPv(a01) {
		aPm[a01].e9 = bd.e9, aPm[a01].aPo = !1
	}
	this.a0A = 0, this.a09 = 0, this.dU = function() {
		this.aPl = new Array(this.aE6);
		this.aPl[0] = "territorial.io";
		var aIf = aw.aJ0(0);
		aw.a3U(0);
		for (var aA = 1; aA < this.aE6; aA++) this.aPl[aA] = aJ.yQ() + ".territorial.io";
		for (aw.a3U(aIf), aPk = new Array(this.aE6), aPm = new Array(this.aE6), aA = this.aE6 - 1; 0 <= aA; aA--) aPm[aA] = {
			aPM: !1,
			e9: 0,
			aPo: !1
		};
		this.aE7(0, 0)
	}, this.aPp = function(aA) {
		return aPk[aA]
	}, this.ij = function() {
		for (var aA = this.aE6 - 1; 0 <= aA; aA--) this.aLV(aA) && bd.e9 > aPm[aA].e9 + 15e3 && ay.o0.aPq(aA, aPm[aA].aPo);
		!this.aLV(0) && bd.e9 > aPm[0].e9 + 8e3 && (aPm[0].e9 = bd.e9, this.aE7(0, 0))
	}, this.aNI = function(id) {
		return this.aE7(0, id) && this.aPr(0)
	}, this.aE7 = function(a01, aKf) {
		if (aPm[a01].aPM) {
			if (aPk[a01].aPt()) return aPk[a01].aPu(aKf), aPk[a01].aLV();
			aPk[a01].qs()
		}
		return this.aPs(a01, aKf), !1
	}, this.aPs = function(a01, aKf) {
		aPm[a01].aPM = !0, aPv(a01), aPk[a01] = new aPw, aPk[a01].dU(a01, aKf)
	}, this.aPu = function(a01, aKf) {
		aPt(a01) && aPk[a01].aPu(aKf)
	}, this.aPx = function(a01, aKf) {
		ay.aAe.aPy(a01)
	}, this.aPr = function(aA) {
		return this.aLV(aA) && aPk[aA].aPr()
	}, this.aPz = function(aA) {
		aPk[aA].aPz()
	}, this.aLV = function(aA) {
		return aPm[aA].aPM && aPk[aA].aLV()
	}, this.send = function(a01, aB) {
		aPv(a01), aPk[a01].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0h = function(a01) {
		8 === aZ.a04() && (aPm[a01].aPo = !0, ay.lN.aQ0 = !0)
	}, this.close = function(a01, aQ1) {
		aPt(a01) && aPk[a01].close(aQ1)
	}, this.aQ2 = function(a01, aQ1) {
		q.a0F(aQ1), aPt(a01) && aPk[a01].close(aQ1)
	}, this.a0G = function(aQ1) {
		for (var aA = this.aE6 - 1; 0 <= aA; aA--) this.close(aA, aQ1)
	}, this.aQ3 = function(a01, aQ1) {
		for (var aA = this.aE6 - 1; 0 <= aA; aA--) aA !== a01 && this.close(aA, aQ1)
	}, this.a3g = function() {
		this.close(this.a0A, 3246)
	}, this.aQ4 = function(a01, e) {
		aPk[a01].qs(), q.a00(a01, e.code)
	}
}

function aPU() {
	this.aQ0 = !1, this.ij = function() {
		bd.jm() % 250 != 249 || aC.gj || (ay.aAe.aQ5(+(this.aQ0 && af.lf[aC.eK]), ak.jq + bL.x.op), this.aQ0 = !1)
	}
}

function aPb() {
	function aQW(aQX) {
		var ed = aC.data,
			aQX = (ed.selectedPlayer = bF.oc(aQX), ed.spawningSeed = bF.oc(14), bF.oc(4)),
			aQX = (aQX < 7 ? (ed.gameMode = 1, ed.numberTeams = aQX + 2) : 9 === aQX ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === aQX ? 0 : 10 === aQX ? 1 : 2), ed.isContest = bF.oc(1), bF
				.oc(6));
		return ed.mapType = bQ.aBn(aQX) ? 0 : 1, bQ.aBo(ed, aQX), ed.mapSeed = bF.oc(14), aQX
	}
	this.aQ7 = function(a01, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aQ2(a01, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oc(1) ? function(a01) {
			var aQB = bF.oc(6);
			0 === aQB ? function(a01) {
					if (0 === a01 && 8 !== aZ.a04()) {
						s.x.aOe();
						for (var aQO = bF.oc(12), aQP = bF.oc(6), g = new Array(aQO), aA = 0; aA < aQO; aA++) g[aA] = bF.oc(aQP);
						aS.a80(g)
					}
				}(a01) : 2 === aQB ? ay.aPc.aQD(a01) : 3 === aQB || 4 === aQB ? av.dU() : 9 === aQB ? ay.aPe.aQE(a01) : 10 === aQB ? ay.aPg.aQF() : 11 === aQB ? ay.aPe.aQG(a01) : 12 === aQB ? ay.aPg.aQH() : 13 === aQB ? ay.aPi.aQI() :
				14 === aQB ? ay.aPi.aQJ() : 15 === aQB ? ay.aPe.aQK() : 16 === aQB ? ay.aPc.aQL(a01) : 17 === aQB ? ay.aPc.aQM(a01) : 19 === aQB && ay.aPc.aQN(a01)
		} : function(a01) {
			if (8 !== aZ.a04() && !av.aEc()) return;
			if (a01 !== ay.x.a0A) ay.x.aQ2(a01, 3244);
			else if (0 === bF.oc(1)) bd.z0.aQY(bF.aB);
			else {
				var aA, a01 = bF.oc(2);
				if (0 === a01) {
					var oE, o0 = bF.oc(9);
					0 !== af.lf[o0] && 0 !== af.lf[aC.eK] && (oE = bF.oc(10), aM.oD(o0, aC.eK, oE), ae.pA(o0, 1, oE))
				} else if (1 === a01) ! function() {
					var o0 = bF.oc(9);
					0 !== af.lf[o0] && 0 !== af.lf[aC.eK] && b3.aIP(0, [o0], !0) && aM.oU(o0, 1)
				}();
				else if (2 === a01) ! function() {
					var o0 = bF.oc(9),
						target = bF.oc(9);
					0 !== af.lf[o0] && 0 !== af.lf[target] && 0 !== af.lf[aC.eK] && b3.aIP(1, [o0], !0) && (ae.pA(o0, 3, 96), ae.pA(target, 4, 96), aM.a5U(o0, target))
				}();
				else if (l.a8 && !l.a9) {
					var ea = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), ea = Math.min(b6.nx.oe.length, 540), aA = 0; aA < ea; aA++) bB.aQe(32, b6.nx.oe[aA]);
					ay.x.send(ay.x.a0A, bB.aB)
				}
			}
		})(a01), bd.aQA())
	}, this.aQQ = function(aB) {
		if (bF.dU(aB), bF.dx = 1, 3 === bF.oc(6)) {
			bF.dx += 20;
			var ed = aC.data = new a3O,
				aB = aQW(9),
				aBp = ed.humanCount = bF.oc(9) + 1;
			ed.selectableSpawn = 1 === ed.gameMode || aBp < 100, ed.colorsData = new Uint32Array(aBp), ed.playerNamesData = new Array(aBp);
			for (var aA = 0; aA < aBp; aA++) bF.dx++, ed.colorsData[aA] = bF.oc(18), ed.playerNamesData[aA] = bE.ux.v1(bF.oc(5));
			aZ.aEI(), bQ.a6(aB, ed.mapSeed), aC.a3S()
		} else ! function() {
			bF.dx += 20;
			var ed = aC.data = new a3O,
				aQV = aQW(1);
			ed.humanCount = 2;
			ed.selectableSpawn = 1, ed.elo = new Uint16Array(2), ed.colorsData = new Uint32Array(2), ed.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dx++, ed.colorsData[aA] = bF.oc(18), ed.elo[aA] = bF.oc(14), ed.playerNamesData[aA] = bE.ux.v1(bF.oc(5));
			aZ.aEI(), bQ.a6(aQV, ed.mapSeed), aC.a3S()
		}()
	}, this.aQT = function() {
		bF.dx = 1;
		var aQB = bF.oc(6),
			aQU = bF.oc(10);
		return ay.x.a09 === aQU ? (ay.x.a0A = aQU, !1) : (ay.x.close(ay.x.a09, 3247), ay.x.a0A = aQU, av.aBk = bF.oc(10), av.aEQ = bF.oc(3 === aQB ? 9 : 1), ay.x.aE7(aQU, 5) && ay.o0.aEX(), !0)
	}
}

function aPh() {
	this.aQF = function() {
		bh.x.uV(), bh.r3.r4(105, bD.rt.ru(bD.rt.rv(5))), bh.r3.r4(106, bD.rt.ru(bD.rt.rv(8))), bh.r3.r4(109, bF.oc(30)), bh.r3.r4(108, bh.e7.data[109].value), bh.r3.r4(111, bh.e7.data[109].value + 1), bh.r3.r4(107, 0), bh.r3.r4(110, "")
	}, this.aQH = function() {
		var data;
		bF.size < bB.aQf(29) ? ay.x.aQ2(0, 3254) : ((data = {
			rp: bF.oc(30),
			ui: bF.oc(16),
			uj: bF.oc(30),
			uk: bF.oc(30),
			ul: bF.oc(30),
			um: bF.aQg(32),
			username: bE.uz.vH(5),
			un: bE.uz.vH(3),
			uo: bE.uz.vH(3),
			up: bF.aQg(32),
			uq: bF.aQg(32),
			ur: bF.oc(30),
			us: bF.aQg(32),
			ut: bF.aQg(32),
			uu: bF.aQg(32),
			uv: bF.aQg(32),
			aLf: bF.aQg(32),
			aLg: bF.aQg(30),
			aLr: bF.aQg(32),
			aLs: bE.uz.vH(3),
			aLk: bF.aQg(2),
			aLl: bF.aQg(10),
			aLi: bE.uz.vH(8),
			aLm: bF.aQg(5),
			aLS: bF.oc(30),
			aLe: bF.oc(30),
			zJ: bF.aQg(32),
			aLt: bF.oc(1),
			aLu: bF.oc(1)
		}).aLt && (data.aLv = bF.aQg(32), data.aLw = bF.oc(30), data.aLx = bF.oc(30), data.aLy = bF.oc(1)), 8 === s.rq && (25 === s.aDL().aNH ? (data.aL9 = !0, s.x.aKq = data, s.aDL().aNW(25, !1)) : (data.aL9 = !1, bh.r3.r4(160, +(data
			.aLt && data.aLy)), data.ro = bh.e7.data[105].value, s.x.aKn = data, bh.r3.uh(data), s.aDL().aNW(16, !0))))
	}
}

function aPj() {
	this.aQI = function() {
		var aA;
		if (bF.size < bB.aQf(23)) ay.x.aQ2(0, 3259);
		else {
			var sA = bF.oc(6),
				ea = bF.oc(10),
				data = [];
			if (9 === sA || 10 === sA || 11 === sA) {
				for (aA = 0; aA < ea; aA++) data.push([bF.oc(30), bE.uz.vH(5), bF.aQg(32), 0, bF.oc(30)]);
				8 === s.rq && s.aDL().aNW(21, !0, {
					sA: sA,
					data: data
				})
			} else {
				var hS = bF.oc(16);
				if (bF.aQh(39 + 16 * hS + ea * (0 === sA ? 111 : 1 === sA ? 101 : 2 === sA || 3 === sA ? 127 : 212))) {
					if (0 === sA)
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(30), bE.ux.v1(bF.oc(5)), bF.oc(16), bF.oc(30), bF.oc(30)]);
					else if (1 === sA)
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(16), bE.ux.v1(bF.oc(3)), bF.oc(16), bE.ux.v1(bF.oc(5)), bF.oc(31), bF.oc(30)]);
					else if (2 === sA || 3 === sA)
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(30), bE.ux.v1(bF.oc(5)), bF.aQg(32), bF.oc(30), bF.oc(30)]);
					else
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(20), bF.oc(30), bF.oc(30), bF.oc(30), bF.oc(30), bF.aQg(32), bF.oc(30), bE.ux.v1(bF.oc(5)), bE.ux.v1(bF.oc(5))]);
					8 === s.rq && s.aDL().aNW(21, !0, {
						sA: sA,
						data: data
					})
				} else ay.x.aQ2(0, 3260)
			}
		}
	}, this.aQJ = function() {
		if (bF.size < bB.aQf(29)) ay.x.aQ2(0, 3265);
		else {
			var aQi = bF.oc(4),
				aQj = bF.oc(7),
				aQk = bF.oc(11);
			if (bF.aQh(29 + 16 * aQj + 16 * aQk + 11 * aQi)) {
				for (var data = [], aA = 0; aA < aQi; aA++) {
					for (var za = bE.ux.v1(bF.oc(3)), aQl = bF.oc(8), aMV = [], et = 0; et < aQl; et++) aMV.push(bF.oc(16));
					data.push({
						name: "[" + za + "]",
						aMV: aMV
					})
				}
				8 === s.rq && s.aDL().aNW(23, !0, data)
			} else ay.x.aQ2(0, 3266)
		}
	}
}

function aPd() {
	function aQn() {
		var id = bF.oc(3);
		return 0 === id ? {
			id: id,
			ro: bF.oc(30),
			p: bl.aB8.aCq(bE.uz.vH(7))
		} : 1 === id ? {
			id: id,
			ro: bF.oc(30),
			aBv: bF.oc(3),
			value: bF.oc(30),
			target: bF.oc(30)
		} : 2 === id ? {
			id: id,
			ro: bF.oc(30),
			aBv: bF.oc(3)
		} : 3 === id ? {
			id: id,
			ro: bF.oc(30),
			aBv: bF.oc(3),
			value: bF.oc(4),
			target: bF.oc(30)
		} : 4 === id ? {
			id: id,
			ro: bF.oc(30),
			aBv: bF.oc(3),
			target: bF.oc(30)
		} : 5 === id ? {
			id: id,
			aBv: bF.oc(3)
		} : 6 === id ? {
			id: id,
			value: bF.oc(17)
		} : null
	}
	this.aQD = function(a01) {
		if (a01 !== ay.x.a09) ay.x.close(a01, 3239);
		else if (6 !== aZ.a04()) ay.x.close(a01, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qf = bl.x.qg[aA],
					playerCount = (qf.sh = bF.oc(10), qf.eG = bF.oc(6), qf.mapSeed = bF.oc(14), qf.aBg = bF.oc(4), qf.aDM = bF.oc(6), qf.aDN = bF.oc(4), qf.aBm = bF.oc(1), qf.aCQ = bF.oc(12), qf.spawningSeed = bF.oc(14), bF.oc(16));
				bl.sw.sy[aA] = bF.oc(16);
				for (var et = 0; et < playerCount; et++) bl.sw.aBJ(aA, bF.oc(30), bE.uz.vH(5), bF.oc(4), bF.oc(30), bF.oc(7), bF.oc(16), bF.oc(18), bF.oc(11), bF.oc(12))
			}
			s.t(29), bl.x.aCG(!0)
		}
	}, this.aQL = function(a01) {
		if (a01 !== ay.x.a09) ay.x.close(a01, 3239);
		else if (bl.a08) {
			bl.x.aCE[0] = bF.oc(20), bl.x.aCE[1] = bF.oc(20);
			for (var aQm = bF.oc(16), et = 0; et < aQm; et++) {
				var id = bF.oc(3);
				0 === id ? bl.sw.aBJ(bF.oc(2), bF.oc(30), bE.uz.vH(5), 0, 1234566, 127, 0, bF.oc(18), 0, bF.oc(12)) : 1 === id ? bl.sw.aBa(bF.oc(16), bF.oc(2)) : 2 === id ? bl.sw.aBW(bF.oc(16), bF.oc(2), bF.oc(2)) : 3 === id ? bl.sw.aBZ(bF.oc(
					16), bF.oc(2)) : 4 === id ? bl.sw.aBP(bF.oc(16), bF.oc(2), bF.oc(4), bF.oc(30), bF.oc(7), bF.oc(16), bF.oc(11)) : 5 === id && bl.sw.aBQ(bF.oc(16), bF.oc(2), bF.oc(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qf = bl.x.qg[aA];
				if (qf.sh = bF.oc(10), 0 === qf.sh) {
					if (qf.a0A = bF.oc(10), qf.aBk = bF.oc(10), bl.aB9.dd(aA)) return;
					qf.eG = bF.oc(6), qf.mapSeed = bF.oc(14), qf.aBg = bF.oc(4), qf.aDM = bF.oc(6), qf.aDN = bF.oc(4), qf.aBm = bF.oc(1), qf.aCQ = bF.oc(12), qf.spawningSeed = bF.oc(14), qf.aDO.push(qf.aDO[0]), qf.aDO.shift()
				}
			}
			bl.x.aCI()
		} else ay.x.close(a01, 3251)
	}, this.aQM = function(a01) {
		if (a01 !== ay.x.a09) ay.x.close(a01, 3272);
		else if (bl.a08) {
			for (var qd = bF.oc(4), qf = bl.x.qg[qd], qh = qf.qh, tB = (qf.qi = bF.oc(20), bF.oc(6)), aA = 0; aA < tB; aA++) qh.push(aQn());
			bl.x.aCR(qd)
		} else ay.x.close(a01, 3273)
	}, this.aQN = function(a01) {
		a01 !== ay.x.a09 ? ay.x.close(a01, 3276) : bl.a08 ? bl.message.aCm(aQn()) : ay.x.close(a01, 3277)
	}
}

function aPf() {
	this.aQE = function(a01) {
		var aQa, q8;
		bF.aQh(70) ? (aQa = bF.oc(3), q8 = bg.aQo.ij(bF.oc(30), bF.oc(30)), ay.aAe.aQp(a01, q8, aQa), 0 < aQa || (0 === a01 && 0 === bh.e7.data[105].value.length ? ay.aAe.aNL(0) : ay.aLX.aQq(a01), 4 === ay.x.aPp(a01).aQr() ? 6 === aZ.a04() && ay
			.aCk.aE8(a01) : 5 !== ay.x.aPp(a01).aQr() || 8 !== aZ.a04() && 10 !== aZ.a04() || ay.o0.aEX())) : ay.x.aQ2(a01, 3269)
	}, this.aQG = function(a01) {
		var id = bF.oc(6);
		1 === id ? (bh.r3.r4(160, bF.oc(30)), ay.x.aPz(a01), aS.a7w || ay.aAe.aNL(1), b5.aAc(), 8 === s.rq && s.aDL().aNV()) : 21 === id ? 8 === s.rq && s.aDL().aNW(17) : 22 === id && (bh.r3.r4(106, bh.e7.data[110].value), bh.r3.r4(110, ""),
			8 === s.rq) && s.aDL().aNW(15)
	}, this.aQK = function() {
		var ea = bF.oc(16),
			aQs = bF.oc(16);
		if (bF.aQh(55 + 10 * ea + 16 * aQs)) {
			for (var g = [], aA = 0; aA < ea; aA++) g.push(bE.ux.v1(bF.oc(10)));
			b5.aAg(g)
		} else ay.x.aQ2(0, 3270)
	}
}

function aPV() {
	this.aPq = function(a01, aPo) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPo ? 1 : 0), ay.x.send(a01, bB.aB)
	}, this.aEX = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.a09), bB.a7(10, av.aBk), bB.a7(9, av.aEQ), bB.a7(10, l.dm), bB.a7(14, l.dg), ay.x.send(ay.x.a0A, bB.aB)
	}, this.o1 = function(eM) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eM), ay.x.send(ay.x.a0A, bB.aB)
	}, this.o2 = function(i9, j0) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, i9), bB.a7(10, j0), ay.x.send(ay.x.a0A, bB.aB)
	}, this.o6 = function(i9, o4) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, i9), bB.a7(9, o4), ay.x.send(ay.x.a0A, bB.aB)
	}, this.o7 = function(i9, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, i9), bB.a7(22, eM), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oA = function(m3, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m3), bB.a7(22, eM), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oC = function(j0) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, j0), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oG = function(dx) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dx), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oI = function(oH) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oH), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oK = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oL = function(i9, eM, j0) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, i9), bB.a7(10, j0), bB.a7(22, eM), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oS = function(aQt, aQu) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQu), bB.a7(10, aQt), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oV = function(a5N) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5N), ay.x.send(ay.x.a0A, bB.aB)
	}, this.oZ = function(aQv, target) {
		var aA, ea = aQv.length;
		for (bB.a6(14 + 9 * ea), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < ea; aA++) bB.a7(9, aQv[aA]);
		ay.x.send(ay.x.a0A, bB.aB)
	}
}

function aPY() {
	this.aQw = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAe.aQx(), ay.x.send(0, bB.aB)
	}, this.aQq = function(a01) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rt.vD(bh.e7.data[105].value, 5), bE.rt.vD(bh.e7.data[106].value, 8), bB.a7(30, bh.e7.data[109].value), ay.x.send(a01, bB.aB)
	}, this.aNY = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rt.vC(bh.e7.data[110].value), ay.x.send(0, bB.aB)
	}, this.aNU = function(a2n) {
		var ea = a2n.pI.length;
		bB.a6(21 + 16 * ea), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2n.rs), bB.a7(8, ea), bD.ux.vC(a2n.pI), ay.x.send(0, bB.aB)
	}, this.aLn = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.rs), bE.rt.vD(data.ro, 5), ay.x.send(0, bB.aB)
	}, this.aLY = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.rs), bE.rt.vD(data.ro, 5), bB.aQe(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPZ() {
	this.oa = function() {
		for (var ea = aC.jp, yg = bP.result.yg, kX = yg.length, zR = (bB.a6(17 + 16 * ea + 33 * kX), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kX), bB.a7(1, +(2 === aC.yo)), bB.a7(1, aC.z8 % 2), af.zR), aA = 0; aA < ea; aA++) bB.a7(16, zR[aA]);
		for (var gN = af.gN, aA = 0; aA < kX; aA++) {
			var g7 = yg[aA];
			bB.a7(9, g7), bB.a7(24, gN[g7])
		}
		ay.x.send(ay.x.a0A, bB.aB)
	}
}

function aPa() {
	this.aNN = function(sA, sB, sC) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, sA), bB.a7(1, +(sB < 0)), bB.a7(1, +(sC < 0)), bB.a7(30, Math.abs(sB)), bB.a7(30, Math.abs(sC)), ay.x.send(0, bB.aB)
	}, this.aNO = function(sA, aNP, aNQ) {
		bB.a6(18 + 16 * aNP.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, sA), ay.aAe.aQz(aNP), bB.a7(30, aNQ), ay.x.send(0, bB.aB)
	}, this.aNT = function(sA, aNP, aNQ) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, sA), bE.rt.vD(aNP, 5), bB.a7(30, aNQ), ay.x.send(0, bB.aB)
	}, this.aNR = function(aMU, zZ) {
		for (var ea = zZ.length, hS = 0, aA = 0; aA < ea; aA++) hS += zZ[aA].length;
		for (bB.a6(21 + 3 * ea + 16 * hS), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aMU), bB.a7(4, ea), bB.a7(7, hS), aA = 0; aA < ea; aA++) bB.a7(3, zZ[aA].length), bD.ux.vC(zZ[aA]);
		ay.x.send(0, bB.aB)
	}, this.aNS = function(aMU, sB, sC) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aMU), bB.a7(1, +(sB < 0)), bB.a7(1, +(sC < 0)), bB.a7(20, Math.abs(sB)), bB.a7(20, Math.abs(sC)), ay.x.send(0, bB.aB)
	}
}

function aPW() {
	this.aE8 = function(a01) {
		var username = bh.e7.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, l.dm), bB.a7(2, bh.e7.data[158].value), ay.aAe.aQz(username), b8.color.a1q(bh.x.uc())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAi());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a09 = a01, ay.x.send(a01, bB.aB)
	}, this.aCl = function(aR2, a2n) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aR2), 2 === aR2 ? bC.a7(2, a2n) : 3 === aR2 ? bD.uz.yK(a2n, 7, bC) : 5 === aR2 && (bC.a7(3, a2n.id), bC.a7(3, a2n.value), bC.a7(30, a2n.ro)), ay.x.send(ay.x.a09, bC.aR3())
	}
}

function aPX() {
	this.aPy = function(a01) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dg), bB.a7(4, z.id), bB.a7(7, z.dk), bB.a7(1, +l.a8), bB.a7(1, +l.a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(a01, bB.aB)
	}, this.aQp = function(a01, q8, aQa) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQa), bB.a7(30, q8[0]), bB.a7(30, q8[1]), ay.x.send(a01, bB.aB)
	}, this.aNL = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAf = function(id, pI) {
		var ea = Math.min(pI.length, 63);
		bB.a6(19 + 16 * ea), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, ea), bD.ux.vC(pI), ay.x.send(0, bB.aB)
	}, this.aR5 = function(aQU, pT) {
		bB.a6(7 + 26 * pT.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pT.length; aA++) bB.a7(16, pT[aA][0]), bB.a7(10, pT[aA][1]);
		ay.x.send(aQU, bB.aB)
	}, this.aQ5 = function(aR6, aR7) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aR6), bB.a7(12, aR7), ay.x.send(ay.x.a0A, bB.aB)
	}, this.aQz = function(username) {
		bB.a7(5, username.length), bD.ux.vC(username)
	}
}

function aPw() {
	var a01, aKf, aR8, aR9 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aRA = 0;

	function aPx() {
		ay.x.aPx(a01, aKf)
	}

	function aRF(e) {
		ay.a5N.aQ7(a01, new Uint8Array(e.data))
	}

	function aRG() {}

	function aQ4(e) {
		ay.x.aQ4(a01, e)
	}
	this.dU = function(dx, aRB) {
		a01 = dx, aKf = aRB, dx = aR9[0] + ay.x.aPl[a01] + aR9[1 + l.dh], (aR8 = new WebSocket(__fx.customLobby.isActive() && 1 === a01 ? __fx.customLobby.getSocketURL() : dx)).binaryType = "arraybuffer", aR8.onopen = aPx, aR8.onmessage = aRF,
			aR8.onclose = aQ4, aR8.onerror = aRG
	}, this.aRD = function() {
		return aR8.readyState === aR8.CONNECTING
	}, this.aLV = function() {
		return aR8.readyState === aR8.OPEN
	}, this.aPr = function() {
		return aRA
	}, this.aPz = function() {
		aRA = 1
	}, this.aPt = function() {
		return this.aRD() || this.aLV()
	}, this.aPu = function(aRB) {
		aKf = aRB
	}, this.aQr = function() {
		return aKf
	}, this.send = function(aB) {
		this.aLV() && aR8.send(aB)
	}, this.close = function(aQ1) {
		this.aPt() && (aR8.close(aQ1), this.qs())
	}, this.qs = function() {
		aR8.onopen = null, aR8.onmessage = null, aR8.onclose = null, aR8.onerror = null
	}
}

function dE() {
	var aRH = !1,
		a5i = 0,
		i = 0,
		rx = 0,
		gap = 0,
		canvas = null,
		x8 = null,
		a1Q = null;

	function aRJ() {
		for (var aRP, aRN = 0, ea = 0, ev = Math.floor(i / 2), dw = Math.floor(rx / 2), aRO = 1.5 * Math.PI, aA = aC.wC; 0 <= aA; aA--) ea += a1Q[aA], 0 === a1Q[aA] && aRN++;
		if (aRH = !1, x8.clearRect(0, 0, i, i), x8.fillStyle = b9.me, x8.fillRect(0, 0, i, i), x8.fillStyle = b9.mh, x8.fillRect(0, 0, i, gap), x8.fillRect(0, 0, gap, i), x8.fillRect(i - gap, 0, gap, i), x8.fillRect(0, i - gap, i, gap), 0 < ea)
			if (aRN === aC.wC) {
				for (aA = aC.wC; 0 <= aA; aA--)
					if (0 < a1Q[aA]) {
						! function(aA, ev, dw) {
							x8.fillStyle = be.aRW[be.kB[aA]], x8.beginPath(), x8.arc(ev, ev, dw, 0, 2 * Math.PI), x8.fill()
						}(aA, ev, dw);
						break
					}!
				function(ev) {
					var fontSize = ev / 3;
					x8.font = b8.pb.rQ(1, fontSize), x8.fillStyle = b9.mh, x8.fillText("100%", ev, ev + .1 * fontSize)
				}(ev)
			} else {
				for (aA = 0; aA <= aC.wC; aA++) 0 < a1Q[aA] && (! function(aA, ev, dw, aRO, aRP) {
					x8.fillStyle = be.aRW[be.kB[aA]], x8.beginPath(), x8.arc(ev, ev, dw, aRO, aRP), x8.lineTo(ev, ev), x8.fill()
				}(aA, ev, dw, aRO, aRP = aRO + 2 * Math.PI * a1Q[aA] / ea), function(ev, dw, aRO, aRP) {
					var f2 = (aRP - aRO) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dw * Math.min(f2, .37);
					fontSize < 8 || (aRO = (aRO + aRP) / 2, aRP = (__fx.settings.detailedTeamPercentage ? (100 * f2).toFixed(2) : Math.floor(100 * f2 + .5)) + "%", dw *= .525 - Math.max(.6 * (f2 - .7), 0), x8.font = b8.pb.rQ(1, fontSize), x8
						.fillStyle = b9.mh, x8.fillText(aRP, ev + Math.cos(aRO) * dw, ev + Math.cos(aRO + 1.5 * Math.PI) * dw))
				}(ev, dw, aRO, aRP), 0 !== aA && aRU(ev, dw, aRO), aRO = aRP);
				aRU(ev, dw, 1.5 * Math.PI)
			}!
		function(ev, dw) {
			x8.beginPath(), x8.arc(ev, ev, dw, 0, 2 * Math.PI), x8.stroke()
		}(ev, dw)
	}

	function aRU(ev, dw, aRX) {
		x8.beginPath(), x8.moveTo(ev, ev), x8.lineTo(ev + Math.cos(aRX) * dw, ev + Math.cos(aRX + 1.5 * Math.PI) * dw), x8.stroke()
	}
	this.dU = function() {
		if (aC.hP) {
			a5i = 0, a1Q = new Uint32Array(aC.wC + 1);
			for (var aA = aC.wC; 0 <= aA; aA--) a1Q[aA] = 0;
			for (aA = ak.jq - 1; 0 <= aA; aA--) a1Q[be.eY[ak.jr[aA]]] += 1;
			this.resize()
		} else a1Q = x8 = canvas = null
	}, this.a6W = function() {
		return i
	}, this.resize = function() {
		aC.hP && (i = Math.floor(z.a0.qz() && !aC.mA ? .18 * h.min : .13 * h.pd), i = (i *= 1 + (.5 + .2 * z.a0.qz()) * aC.mA) + i % 2, rx = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x8 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x8.lineWidth = gap, x8.strokeStyle = b9.mh, b8.pb.textAlign(x8, 1), b8.pb.textBaseline(x8, 1), aRJ())
	}, this.a2j = function() {
		var di, l0 = this.l1();
		return be.kB[l0] || (l0 = function() {
			for (var l0 = -1, aA = aC.wC; 1 <= aA; aA--)(-1 === l0 || a1Q[aA] > a1Q[l0]) && (l0 = aA);
			return l0
		}(), di = af.gN[l4[0]], -1 !== l0 && a1Q[l0] > di) ? a1Q[l0] : di
	}, this.zo = function() {
		return a5i = 31, this.ij(), this.l1()
	}, this.l1 = function() {
		for (var l0 = 0, aA = aC.wC; 0 < aA; aA--) a1Q[aA] > a1Q[l0] && (l0 = aA);
		return l0
	}, this.l2 = function(aRL) {
		for (var g2 = 0, jr = ak.jr, eY = be.eY, ea = ak.jq, fD = bM.fD, aA = 0; aA < ea; aA++) {
			var g7 = jr[aA];
			eY[g7] === aRL && (fD[g2++] = g7)
		}
		bM.f5[0] = g2
	}, this.a2K = function() {
		for (var g2 = 0, aA = aC.wC; 0 <= aA; aA--) g2 += 0 < a1Q[aA];
		return g2
	}, this.ij = function() {
		if (aC.hP && 32 <= ++a5i) {
			a5i = 0;
			for (var aA = aC.wC; 0 <= aA; aA--) a1Q[aA] = 0;
			for (aA = ak.jq - 1; 0 <= aA; aA--) a1Q[be.eY[ak.jr[aA]]] += af.gN[ak.jr[aA]];
			aRH = !0
		}
	}, this.lS = function() {
		aC.hP && aRH && aRJ()
	}, this.ti = function() {
		aC.hP && (aC.mA ? tj.drawImage(canvas, ba.gap, ba.gap) : tj.drawImage(canvas, ba.gap, a6X + 2 * ba.gap))
	}
}

function cx() {
	function aRZ(key) {
		var aOt;
		return "undefined" == typeof URLSearchParams || (aOt = window.location.search, "string" != typeof(aOt = new URLSearchParams(aOt).get(key))) || aOt.length < 1 ? null : aOt
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRZ("account");
				if (!value && !(value = aRZ("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rq, new rr(1e3, {
					rs: 0,
					ro: value,
					rp: 0
				})), 1
			}()) {
			var value = aRZ("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zy = new URL(window.location.href);
		zy.search = "";
		try {
			return history.replaceState(null, "", zy.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aM0 = function(key, value) {
		if (0 === z.id) try {
			var zy = new URL(window.location.href),
				g7 = zy.searchParams;
			g7.set(key, value), zy.search = g7.toString(), history.replaceState(null, "", zy.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRb, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dj(32768 * aA, 100);
		this.a3U(0)
	}, this.value = function(g7) {
		return g[g7]
	}, this.aJ0 = function() {
		return bJ.dj(aRb - 1, 2)
	}, this.a3U = function(aIf) {
		aRb = 2 * aIf % 32768 + 1
	}, this.random = function() {
		return aRb = 167 * aRb % 32768
	}, this.j7 = function(la) {
		return bJ.dj(la * this.random(), 32768)
	}, this.jh = function(g7) {
		return 0 !== g7 && this.random() < this.value(g7)
	}, this.iT = function(et, eu) {
		return et + this.j7(eu - et)
	}
}

function ct() {
	this.or = new aRc, this.a3f = new aRd, this.aGL = new aRe, this.dU = function() {
		aC.gj || this.or.dU()
	}, this.ij = function() {
		aC.gj || (this.or.ij(), 3 !== s.rq) || bd.jm() % 15 != 5 && 2 !== aC.yr || s.aDL().aOu()
	}, this.aOx = function() {
		0 === aC.yr && aZ.aEI(), aC.a3P.a3n(), aC.data.canvas = null, ay.x.close(ay.x.a0A, 3257), ay.x.a0A = 0, aC.data.isReplay = 1, aC.a3S()
	}, this.aOw = function(pI) {
		var aA = pI.indexOf("=");
		return 0 <= aA ? pI.substring(aA + 1) : pI
	}, this.aOv = function(pI) {
		return "https://territorial.io/?replay=" + pI
	}
}

function aRc() {
	this.aRg = null, this.aRh = null, this.aRi = null, this.aRj = null, this.aRk = null, this.aRl = null, this.a3e = "";
	var aRm = 0;
	this.dU = function() {
		this.aRg = [], this.aRh = [], this.aRi = [], this.aRj = [], this.aRk = [0], this.aRl = [0], aRm = 0, this.a3e = ""
	}, this.os = function(id, fH, fJ, fL) {
		aC.gj || 2 === aC.yr || (0 === this.aRk[aRm] && (this.aRl[aRm] ? (this.aRk.push(1), this.aRl.push(0), aRm++) : this.aRk[aRm] = 1), this.aRg.push(id), this.aRh.push(fH), this.aRi.push(void 0 === fJ ? 0 : fJ), this.aRj.push(void 0 === fL ?
			0 : fL), this.aRl[aRm]++)
	}, this.ij = function() {
		0 === this.aRk[aRm] ? this.aRl[aRm]++ : (this.aRk.push(0), this.aRl.push(0), aRm++)
	}
}

function aRe() {
	var aRn = 0;

	function aRr(pI, id) {
		aRn || (id ? 1 === id ? aM.a4p = L(429) + ": " + pI : s.t(4, 3, new u(L(430), pI, 1)) : s.t(4, 3, new u("⚠️ " + L(428), pI, 1)))
	}
	this.vH = function(pI, aRo) {
		var pT;
		return aRn = aRo, bE.rt.v9(bE.rt.v7(bE.rt.v5(pI))), aM.a4p = "", !(! function() {
			if (bF.size < 10) aRr("File Too Small");
			else {
				var aRt = bF.oc(12),
					aR7 = (aRt !== l.rVersion && aRr("Incompatible Version " + aRt + " " + l.rVersion, 1), bF.oc(12)),
					aRu = bF.oc(31);
				if (aRu !== bF.size) aRr("Size Error: " + aRu + " " + bF.size);
				else if (function(j, aRt) {
						for (var g7 = bF.aB, ea = bF.size, aR7 = aRt, aA = 3; aA < ea; aA++) aR7 = aR7 + g7[aA] & 4095;
						return aR7 === j || (aRr("Hash Error: " + aR7 + " " + j + " " + ea), !1)
					}(aR7, aRt)) return 1
			}
			return
		}() || (aRo = bF, (pT = aC.data = new a3O).mapType = aRo.oc(2), pT.mapProceduralIndex = aRo.oc(8), pT.mapRealisticIndex = aRo.oc(8), pT.mapSeed = aRo.oc(14), pT.mapName = aRo.aRw(5), 2 === pT.mapType && aRo.aRx(), pT
			.passableWater = aRo.oc(1), pT.passableMountains = aRo.oc(1), pT.playerCount = aRo.oc(10), pT.humanCount = aRo.oc(10), pT.selectedPlayer = aRo.oc(9), pT.gameMode = aRo.oc(1), pT.playerMode = aRo.oc(2), pT.battleRoyaleMode =
			aRo.oc(2), pT.numberTeams = aRo.oc(4), pT.isZombieMode = aRo.oc(1), pT.isContest = aRo.oc(1), pT.isReplay = aRo.oc(1), pT.elo = aRo.aRy(2, 14, 2), pT.colorsType = aRo.oc(1), pT.colorsPersonalized = aRo.oc(1), pT.colorsData =
			aRo.aRy(10, 18, 512), pT.selectableColor = aRo.oc(1), pT.teamPlayerCount = aRo.aRy(4, 10, 9), pT.neutralBots = aRo.oc(1), pT.botDifficultyType = aRo.oc(2), pT.botDifficultyValue = aRo.oc(4), pT.botDifficultyTeam = aRo.aRy(4,
				4, 9), pT.botDifficultyData = aRo.aRy(10, 4, 512), pT.spawningType = aRo.oc(2), pT.spawningSeed = aRo.oc(14), pT.spawningData = aRo.aRy(11, 12, 1024), pT.selectableSpawn = aRo.oc(1), pT.playerNamesType = aRo.oc(2), pT
			.playerNamesData = aRo.aRz(10, 5, 512), pT.selectableName = aRo.oc(1), pT.aIncomeType = aRo.oc(2), pT.aIncomeValue = aRo.oc(8), pT.aIncomeData = aRo.aRy(10, 8, 512), pT.tIncomeType = aRo.oc(2), pT.tIncomeValue = aRo.oc(8), pT
			.tIncomeData = aRo.aRy(10, 8, 512), pT.iIncomeType = aRo.oc(2), pT.iIncomeValue = aRo.oc(8), pT.iIncomeData = aRo.aRy(10, 8, 512), pT.sResourcesType = aRo.oc(2), pT.sResourcesValue = aRo.oc(11), pT.sResourcesData = aRo.aRy(10,
				11, 512), ! function() {
				var hu = bF,
					vI = hu.oc(5),
					aS0 = hu.oc(30),
					aS1 = hu.oc(30);
				if (aS0 + aS1 > 8 * hu.size) return void aRr("Corrupted File");
				return function(ea) {
						var aS4 = new Uint8Array(ea),
							aS5 = new Uint16Array(ea),
							aS6 = new Uint32Array(ea),
							aS7 = new Uint32Array(ea);
						b7.or.aRg = aS4, b7.or.aRh = aS5, b7.or.aRi = aS6, b7.or.aRj = aS7;
						for (var aA = 0; aA < ea; aA++) {
							var id = bF.oc(4);
							aS4[aA] = id, aS5[aA] = bF.oc(9), 0 === id ? aS6[aA] = bF.oc(22) : 1 === id ? (aS6[aA] = bF.oc(10), aS7[aA] = bF.oc(10)) : 2 === id ? (aS6[aA] = bF.oc(10), aS7[aA] = bF.oc(9)) : 3 === id || 4 === id ? (aS6[
								aA] = bF.oc(10), aS7[aA] = bF.oc(22)) : 5 === id || 6 === id ? aS6[aA] = bF.oc(10) : 7 === id ? aS6[aA] = bF.oc(1) : 10 === id && (aS6[aA] = bF.oc(20), aS7[aA] = bF.oc(22))
						}
					}(aS0),
					function(ea, vI) {
						var aRk = new Uint8Array(ea),
							aRl = new Array(ea);
						aRl.fill(0), b7.or.aRk = aRk, b7.or.aRl = aRl;
						for (var aA = 0; aA < ea; aA++) aRk[aA] = bF.oc(1), aRl[aA] = bF.oc(vI)
					}(aS1, vI), 1
			}()) || (bF.dx < 8 * bF.size - 13 || bF.dx > 8 * bF.size ? (aRr("Out Of Bounds Error: " + bF.dx + " " + 8 * bF.size), 1) : (b7.or.a3e = pI, 2 === aC.data.mapType && (aRr("Load base64 image...", 2), 1))))
	}, this.aGM = function(aFw, aRs) {
		var a1l = document.createElement("canvas"),
			hX = a1l.getContext("2d");
		if (a1l.width = aFw.width, a1l.height = aFw.height, hX.drawImage(aFw, 0, 0), aRn || aRs) return aC.yr ? void 0 : (aC.data.canvas = a1l, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aOx()
	}
}

function aRd() {
	this.yK = function() {
		var vI = function() {
				for (var aRl = b7.or.aRl, ea = aRl.length, max = 0, aA = 0; aA < ea; aA++) max = Math.max(max, aRl[aA]);
				return vP(Math.max(max, 1))
			}(),
			i = (pT = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dx += 43, i.a7(2, pT.mapType), i.a7(8, pT.mapProceduralIndex), i.a7(8, pT.mapRealisticIndex), i.a7(14, pT.mapSeed), i.aSE(pT.mapName, 5), 2 === pT.mapType && i.aSF(pT.canvas),
				i.a7(1, pT.passableWater), i.a7(1, pT.passableMountains), i.a7(10, pT.playerCount), i.a7(10, pT.humanCount), i.a7(9, pT.selectedPlayer), i.a7(1, pT.gameMode), i.a7(2, pT.playerMode), i.a7(2, pT.battleRoyaleMode), i.a7(4, pT
					.numberTeams), i.a7(1, pT.isZombieMode), i.a7(1, pT.isContest), i.a7(1, pT.isReplay), i.db(pT.elo, 2, 14), i.a7(1, pT.colorsType), i.a7(1, pT.colorsPersonalized), i.db(pT.colorsData, 10, 18), i.a7(1, pT.selectableColor), i.db(
					pT.teamPlayerCount, 4, 10), i.a7(1, pT.neutralBots), i.a7(2, pT.botDifficultyType), i.a7(4, pT.botDifficultyValue), i.db(pT.botDifficultyTeam, 4, 4), i.db(pT.botDifficultyData, 10, 4), i.a7(2, pT.spawningType), i.a7(14, pT
					.spawningSeed), i.db(pT.spawningData, 11, 12), i.a7(1, pT.selectableSpawn), i.a7(2, pT.playerNamesType), i.aSG(pT.playerNamesData, 10, 5), i.a7(1, pT.selectableName), i.a7(2, pT.aIncomeType), i.a7(8, pT.aIncomeValue), i.db(pT
					.aIncomeData, 10, 8), i.a7(2, pT.tIncomeType), i.a7(8, pT.tIncomeValue), i.db(pT.tIncomeData, 10, 8), i.a7(2, pT.iIncomeType), i.a7(8, pT.iIncomeValue), i.db(pT.iIncomeData, 10, 8), i.a7(2, pT.sResourcesType), i.a7(11, pT
					.sResourcesValue), i.db(pT.sResourcesData, 10, 11), ! function(vI) {
					var i = bC,
						aRg = b7.or.aRg,
						fH = b7.or.aRh,
						fJ = b7.or.aRi,
						fL = b7.or.aRj,
						ea = aRg.length;
					i.a7(5, vI), i.a7(30, ea), i.a7(30, b7.or.aRl.length);
					for (var aA = 0; aA < ea; aA++) {
						var ev = aRg[aA];
						i.a7(4, ev), i.a7(9, fH[aA]), 0 === ev ? i.a7(22, fJ[aA]) : 1 === ev ? (i.a7(10, fJ[aA]), i.a7(10, fL[aA])) : 2 === ev ? (i.a7(10, fJ[aA]), i.a7(9, fL[aA])) : 3 === ev || 4 === ev ? (i.a7(10, fJ[aA]), i.a7(22, fL[aA])) :
							5 === ev || 6 === ev ? i.a7(10, fJ[aA]) : 7 === ev ? i.a7(1, fJ[aA]) : 10 === ev && (i.a7(20, fJ[aA]), i.a7(22, fL[aA]))
					}
				}(vI), ! function(vI) {
					for (var i = bC, aRk = b7.or.aRk, aRl = b7.or.aRl, ea = aRk.length, aA = 0; aA < ea; aA++) i.a7(1, aRk[aA]), i.a7(vI, aRl[aA])
				}(vI), bC.dx),
			pT = bJ.dj(i - 1, 6) + 1,
			vI = (bB.aQf(6 * pT) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dx = 24, i.a7(31, i.g.length), i.dx = 12, i.a7(12, function() {
					for (var g = bC.g, ea = g.length, aR7 = l.rVersion, aA = 3; aA < ea; aA++) aR7 = aR7 + g[aA] & 4095;
					return aR7
				}())
			}(), bF.dU(bC.g), bD.rt.ru(bD.rt.rv(pT)));
		return bF.tC(), bC.dU(), vI
	}
}

function cj() {
	var ev, bp = !1,
		aSI = !1,
		aSJ = -1e4,
		aSK = -1,
		aSL = 0;

	function resize(aSP) {
		ev = 0, aa.sI() && (aSN(aSP) || bp) && (bp = !1, ba.resize(), bU.aAF.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.yr ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7b()) : (aZ.aEK(), aZ.aEL()), bd.dc = !0)
	}

	function aSM(f2) {
		return f2 && 128 < f2 ? Math.floor(f2) : 128
	}

	function aSN(aSP) {
		var i, j, aSR, rx, a70;
		if (!(0 < h.rY)) return rx = aSM(document.documentElement.clientWidth), a70 = aSM(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rx, j = a70, aSR = 0 !== z.id || i < j ? 700 :
			1200, aSR = Math.min(aSR / ((i + j) / 2), 1), aSR = 0 === bh.e7.data[1].value ? 2 * aSR / 3 : Math.min(aSR + (bh.e7.data[1].value - 1) * (1 - aSR) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSR, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSP && !aSI ? (aSI = !0, document.body.removeChild(a0P)) : aSI && (aSI = !1, document.body.appendChild(a0P)), i = Math.floor(.5 + rx * h.k), j = Math.floor(.5 + a70 * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9r(i, j), h.max = a54(i, j), h.pd = bJ.dj(i + j, 2), h.tf = i / j, a0P.width = i, a0P.height = j, a0P.style.width = rx + "px", a0P.style.height = a70 + "px", aSK = bd.e9 + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pd = 0, this.tf = 1, this.k = 1, this.rY = 0, this.dV = function() {
		this.i = aSM(document.documentElement.clientWidth) + 2, this.j = aSM(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		ev = 1, a0P = document.getElementById("canvasA"), (tj = a0P.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSN(0)
	}, this.ij = function() {
		50 <= ++ev && resize(0), -1 === aSK || bd.e9 < aSK || (aSK = -1, 2e3 * ++aSL >= bd.e9 + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hj) {
		bp = !0, resize(hj)
	}, this.a15 = function() {
		aSJ + 1e3 > bd.e9 || (aSJ = bd.e9, resize(0))
	}
}

function dB() {
	this.aQo = new aST, this.zk = new aSU
}

function aSU() {
	this.zl = function() {
		for (var g7, ea = ak.jq, yf = ak.jr, zR = af.zR, a6p = this.aFf(), aA = 0; aA < ea; aA++) g7 = yf[aA], b8.fv.jD(g7) || (zR[g7] = a6p);
		var ox = af.ox,
			is = af.is,
			it = af.it,
			zP = af.zP,
			ea = aC.jp;
		for (aA = 0; aA < ea; aA++)(0 === zP[aA] || it[aA] < 1 || 2 * ox[aA] > 3 * (is[aA] + it[aA])) && (zR[aA] = 0);
		var zi = 0;
		for (aA = 0; aA < ea; aA++) zi += 0 < zR[aA];
		return zi
	}, this.aFf = function() {
		return Math.min(65535, bd.jm())
	}
}

function aST() {
	function aSY(g, f2, hN) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f2 >> (aA + hN) % 30 & 1)) % 256
	}
	this.ij = function(aSV, aSW) {
		var g = new Uint8Array(256);
		return function(g, aSV, aSW) {
				var aA, aSa = 3 + (4 + aSV) % 32768,
					aSb = 12 + aSW % 32768,
					aSc = 17 + ((aSV & aSW) + (aSV | aSW) + aSV) % 32768;
				for (aA = 0; aA < 256; aA++) aSa = 1 + aSa * aSb % aSc, g[aA] = aSa % 256
			}(g, aSV, aSW), aSY(g, aSV, 2), aSY(g, aSW, 7),
			function(g) {
				var aA, f2, dx = 0;
				for (aA = 0; aA < 3e4; aA++) f2 = g[dx], g[dx] = (f2 + aA + g[(dx + aA) % 256]) % 256, dx = (f2 + aA + dx + (f2 & dx)) % 256
			}(g),
			function(g) {
				var aA, a70 = 1,
					sf = 1;
				for (aA = 0; aA < 256; aA += 2) a70 = (1 + a70) * (g[aA] + 1) % 1073741824, sf = (1 + sf) * (g[aA + 1] + 1) % 1073741824;
				return [a70, sf]
			}(g)
	}
}

function cg() {
	var aSd, aSe, h2, aSf;
	this.dU = function() {
		var aA, eh, ej, aR0, aSg, i, j, x8, hU, vZ, f2, g7, eq, et, a4E;
		if (function() {
				if (h2 = !0, aSf = "rgb(" + bQ.vX[0] + "," + bQ.vX[1] + "," + bQ.vX[2] + ")", bQ.aIn(bQ.eG)) return 1;
				return h2 = !1, 0
			}()) aSe = null;
		else {
			for (aSd = bJ.dj(96, 4), aSg = 1 === bQ.eG ? (aR0 = 0, 160) : (aR0 = 128, 32), aSf = "rgb(" + aR0 + "," + aR0 + "," + aR0 + ")", aSe = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSe[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.el : aSd, j = aA % 2 == 0 ? aSd : bQ.em + 2 * aSd, aSe[aA].width = i, aSe[aA].height = j, vZ = (hU = (x8 = aSe[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (ej = aSd - 1; 0 <= ej; ej--)
						for (f2 = aSg + Math.floor((ej + 1) * (aR0 - aSg) / (aSd + 1)), eh = i - 1; 0 <= eh; eh--) vZ[g7 = 4 * ((0 === aA ? aSd - ej - 1 : ej) * i + eh)] = f2, vZ[g7 + 1] = f2, vZ[g7 + 2] = f2, vZ[g7 + 3] = 255;
				else {
					for (eh = aSd - 1; 0 <= eh; eh--)
						for (f2 = aSg + Math.floor((eh + 1) * (aR0 - aSg) / (aSd + 1)), ej = j - 1 - aSd; aSd <= ej; ej--) vZ[g7 = 4 * (ej * i + (3 === aA ? aSd - eh - 1 : eh))] = f2, vZ[g7 + 1] = f2, vZ[g7 + 2] = f2, vZ[g7 + 3] = 255;
					for (et = 1; 0 <= et; et--)
						for (eh = aSd - 1; 0 <= eh; eh--)
							for (ej = aSd - 1; 0 <= ej; ej--) eq = (Math.pow(eh * eh + ej * ej, .5) + 1) / (aSd + 1), f2 = aSg + Math.floor((1 < eq ? 1 : eq) * (aR0 - aSg)), vZ[g7 = 4 * ((0 === et ? aSd - ej - 1 : ej + et * (j - aSd)) * i + (
								1 === aA ? eh : aSd - eh - 1))] = f2, vZ[g7 + 1] = f2, vZ[g7 + 2] = f2, vZ[g7 + 3] = 255
				}
				x8.putImageData(hU, 0, 0)
			}
			a4E = aSg, bQ.vS.fillStyle = "rgb(" + a4E + "," + a4E + "," + a4E + ")", bQ.vS.fillRect(0, 0, bQ.el, 1), bQ.vS.fillRect(0, bQ.em - 1, bQ.el, 1), bQ.vS.fillRect(0, 0, 1, bQ.em), bQ.vS.fillRect(bQ.el - 1, 0, 1, bQ.em)
		}
	}, this.x2 = function() {
		var et = h2 ? 0 : -aSd;
		aKO(et, et, bQ.el - 2 * et, bQ.em - 2 * et, bY.aSj, bY.aSk, bY.aSl, bY.aSm) || (tj.fillStyle = aSf, tj.fillRect(0, 0, h.i, h.j))
	}, this.ti = function() {
		h2 || (aKN(0, -aSd, bQ.el, aSd, bY.aSj, bY.aSk, bY.aSl, bY.aSm) && tj.drawImage(aSe[0], bY.aSn, bY.aSo - aSd), aKN(bQ.el, -aSd, aSd, bQ.em + 2 * aSd, bY.aSj, bY.aSk, bY.aSl, bY.aSm) && tj.drawImage(aSe[1], bY.aSn + bQ.el, bY.aSo - aSd),
			aKN(0, bQ.em, bQ.el, aSd, bY.aSj, bY.aSk, bY.aSl, bY.aSm) && tj.drawImage(aSe[2], bY.aSn, bY.aSo + bQ.em), aKN(-aSd, -aSd, aSd, bQ.em + 2 * aSd, bY.aSj, bY.aSk, bY.aSl, bY.aSm) && tj.drawImage(aSe[3], bY.aSn - aSd, bY.aSo - aSd))
	}
}

function d0() {
	this.h3 = new aSp, this.aFd = new aSq, this.x5 = new aSr, this.x = new aSs, this.iJ = new aSt, this.a4E = new aSu, this.aSv = new aSw, this.jd = new aSx, this.kR = new aSy, this.aSz = new aT0, this.dU = function() {
		this.x5.dU(), this.x.dU(), this.iJ.dU(), this.a4E.dU(), this.aSz.dU()
	}, this.ti = function() {
		this.aSz.ti(), this.x5.ti()
	}
}

function aSx() {
	this.ij = function(player) {
		var oo;
		return !!aC.data.passableWater && 0 !== af.gG[player].length && bL.x.op !== bL.x.k3 && !((oo = bL.x.oo[player]) >= Math.max(3 * am.performance.kr, aD.k3[aD.hE[player]]) || oo === bL.x.p1 || !b8.fv.ov(player, aD.k1[aD.hE[player]], 32,
			0) || !am.iW.ij(player) && !am.iY.ij(player) || ! function(a2N) {
				var aT3 = bM.fB[1] + bK.hZ[bM.fB[2] - 1] << 2;
				if (ab.eR(aT3)) return 1;
				return aT3 = ab.eS(aT3), a2N !== aT3 && !!eT(a2N, aT3)
			}(player)) && function(player) {
			return b8.fv.oy(player), bL.x.p4(player), !0
		}(player)
	}
}

function aSp() {
	function aTB(aA, ks, kt) {
		var aTD, aTC;
		if (!(aA < 0)) return aTC = bL.x.m6[aA], aTD = bK.hx(aTC), aTC = bK.i0(aTC), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5M[aA])), aA = Math.max(aA, bK.iD(b8.pb.sG(.02, 1.7))), bJ.aKV(bK.hw(ks), bK.hz(kt), aTD, aTC, aA)
	}

	function aT5(aT4) {
		var aTG = 4 + .03 * (1 + 1.5 * z.a0.qz()) * h.pd / iB;
		return bK.i1(aT4, bM.fB[1]) < aTG
	}
	this.h4 = function(player, aT4) {
		return !!(aC.data.passableWater && bK.iE(aT4) && bL.x.op !== bL.x.k3 && bL.x.oo[player] !== bL.x.p1 && 0 !== af.gG[player].length && bL.kR.kS(player, aT4) && aT5(aT4))
	}, this.o9 = function(player, m3, aT4) {
		return !!(bK.iE(aT4) && this.p5(player, m3) && bL.kR.p6(aT4) && aT5(aT4))
	}, this.p5 = function(player, id) {
		for (var aT6, sB = player << 3, sC = sB + bL.x.oo[player], aT7 = bL.x.aT7, aT8 = bL.x.aT8, aA = sB; aA < sC; aA++)
			if (id === aT8[aT6 = aT7[aA]]) return bM.fB[3] = aT6, !0;
		return !1
	}, this.o8 = function(eM) {
		var a4F = bL.a4E.a4F;
		return !!this.p5(aC.eK, a4F) && (b6.gw.o8(a4F, eM), !0)
	}, this.a4H = function(ks, kt) {
		var player = aC.eK,
			ea = bL.x.oo[player];
		if (0 === ea) return !1;
		for (var aT7 = bL.x.aT7, m6 = bL.x.m6, sB = player << 3, aT9 = 80, aMl = -1, aA = sB + ea - 1; sB <= aA; aA--) {
			var aTA = aT7[aA],
				eq = bK.hr(ks, kt, m6[aTA]);
			eq < aT9 && (aT9 = eq, aMl = aTA)
		}
		return !!aTB(aMl, ks, kt) && (bL.a4E.a4F = bL.x.aT8[aMl], bj.p3.a4H(), !0)
	}, this.a4O = function(ks, kt) {
		var ea = bL.x.op;
		if (ea < 1) return -1;
		for (var m6 = bL.x.m6, aT9 = 80, aMl = -1, aA = 0; aA < ea; aA++) {
			var eq = bK.hr(ks, kt, m6[aA]);
			eq < aT9 && (aT9 = eq, aMl = aA)
		}
		return aTB(aMl, ks, kt) ? aMl : -1
	}, this.m5 = function(player, id) {
		for (var sB = player << 3, sC = sB + bL.x.oo[player], aT8 = bL.x.aT8, aT7 = bL.x.aT7, aA = sB; aA < sC; aA++) {
			var aTA = aT7[aA];
			if (aT8[aTA] === id) return aTA
		}
		return -1
	}, this.aFa = function(player) {
		for (var sB = player << 3, sC = sB + bL.x.oo[player], aT7 = bL.x.aT7, a5M = bL.x.a5M, hE = 0, aA = sB; aA < sC; aA++) hE += a5M[aT7[aA]];
		return hE
	}, this.mB = function(player) {
		return 0 === bL.x.oo[player] ? -1 : bL.x.aT7[player << 3]
	}
}

function aSq() {
	this.aFe = function(player) {
		for (var aT7 = bL.x.aT7, sB = player << 3, aA = sB + bL.x.oo[player] - 1; sB <= aA; aA--) this.aTH(aT7[aA])
	}, this.aTH = function(aTI) {
		var x = bL.x,
			aTJ = x.op - 1,
			aTK = x.a5L[aTI],
			aTL = x.aTM[aTI],
			aTN = x.m6[aTI];
		x.op = aTJ, x.a5L[aTI] = x.a5L[aTJ], x.aTO[aTI] = x.aTO[aTJ], x.aTP[aTI] = x.aTP[aTJ], x.m6[aTI] = x.m6[aTJ], x.aTQ[aTI] = x.aTQ[aTJ], x.a5M[aTI] = x.a5M[aTJ], x.aTM[aTI] = x.aTM[aTJ], x.aT8[aTI] = x.aT8[aTJ], x.aTR[aTI] = x.aTR[aTJ], x
			.aTS[aTI] = x.aTS[aTJ], x.aT7[x.a5L[aTI]] = aTI,
			function(aRX) {
				var player = aRX >> 3,
					x = bL.x,
					ea = x.oo[player] - 1,
					aTV = (player << 3) + ea;
				x.oo[player] = ea, aTV !== aRX && (x.aT7[aRX] = x.aT7[aTV], x.a5L[x.aT7[aRX]] = aRX)
			}(aTK), bL.iJ.iJ[bK.iI(x.m6[aTI])][x.aTM[aTI]] = aTI, aTJ = bK.iI(aTN), aTK = aTL, aTJ = bL.iJ.iJ[aTJ], x = aTJ.pop(), aTK !== aTJ.length && (aTJ[aTK] = x, bL.x.aTM[x] = aTK)
	}
}

function aSr() {
	var aTX, xU = 8,
		aTY = new Array(2);

	function aTZ(dx) {
		var hR = xU + 4,
			a1l = b8.pb.vO(hR, hR),
			hX = b8.pb.getContext(a1l, !0),
			hU = b8.pb.getImageData(hX, hR, hR),
			vZ = hU.data;
		return aTa(vZ, hR + 1, dx), aTa(vZ, hR + 2, dx), aTa(vZ, 2 * hR + 1, dx), aTa(vZ, 2 * hR - 3, dx), aTa(vZ, 2 * hR - 2, dx), aTa(vZ, 3 * hR - 2, dx), aTa(vZ, hR * (hR - 3) + 1, dx), aTa(vZ, hR * (hR - 2) + 1, dx), aTa(vZ, hR * (hR - 2) + 2,
			dx), aTa(vZ, hR * (hR - 2) - 2, dx), aTa(vZ, hR * (hR - 1) - 3, dx), aTa(vZ, hR * (hR - 1) - 2, dx), hX.putImageData(hU, 0, 0), a1l
	}

	function aTa(vZ, eM, dx) {
		eM *= 4;
		vZ[eM] = 255, vZ[1 + eM] = 255, vZ[2 + eM] = dx, vZ[3 + eM] = 255
	}

	function vO(player) {
		var a1l = b8.pb.vO(xU, xU);
		return function(hX, player) {
			var eh, ej, hv, eM, aTc, aTd, hR = xU,
				hU = b8.pb.getImageData(hX, hR, hR),
				vZ = hU.data,
				kX = (hR >> 1) - .5,
				aSf = ab.a5w(player),
				aTf = b8.pk.a1J(aSf, .5);
			b8.pk.a1L(aSf, aTf, 300) || b8.pk.a1N(aSf, 100);
			for (ej = 0; ej < hR; ej++)
				for (eh = 0; eh < hR; eh++) aTd = (hR - 1.5) * (hR - 1.5) / 4, aTc = (hv = (hv = eh - kX) * hv + (hv = ej - kX) * hv) <= (hR - 4.5) * (hR - 4.5) / 4 ? aTf : aSf, vZ[eM = 4 * (ej * hR + eh)] = aTc[0], vZ[1 + eM] = aTc[1], vZ[2 +
					eM] = aTc[2], vZ[3 + eM] = aTd < hv ? 0 : 255;
			hX.putImageData(hU, 0, 0)
		}(b8.pb.getContext(a1l, !0), player), a1l
	}
	this.dU = function() {
		aTX = new Array(aC.eX), aTY[0] = aTZ(255), aTY[1] = aTZ(0)
	}, this.ti = function() {
		var aA, player, aTg, aKW, hE, hu, aTi, aTk, aTl, m6 = bL.x.m6,
			a5L = bL.x.a5L,
			a5M = bL.x.a5M,
			aTS = bL.x.aTS,
			aTm = aTX,
			aTn = aC.eK,
			aTo = -1,
			ea = bL.x.op,
			aTp = h.i,
			aTq = h.j,
			aTr = bQ.el << 4,
			eP = iB,
			eE = eP / xU,
			m7 = iA / eP,
			m8 = iC / eP,
			hv = (aTp + iA) / eP - m7,
			hy = (aTq + iC) / eP - m8,
			hX = tj;
		for (bL.h3.p5(aC.eK, bL.a4E.a4F) && (aTo = bM.fB[3]), hX.imageSmoothingEnabled = eP < 9, b8.pb.textAlign(hX, 1), b8.pb.textBaseline(hX, 1), aA = 0; aA < ea; aA++) player = a5L[aA] >> 3, hE = a5M[aA], aTg = .9 + .1 * Math.log10(hE), aKW =
			(hu = m6[aA]) % aTr / 16 - aTg, hu = aTq * (Math.floor(hu / aTr) / 16 - aTg - m8) / hy, aTi = -2 * (aTl = eP * aTg) * (1 + (aTk = +(player === aTn)) / 8), aTk = aTk * aTl / 4, (aTl = aTp * (aKW - m7) / hv) < aTi || hu < aTi || aTp +
			aTk < aTl || aTq + aTk < hu || (aKW = 2 * aTg * eE, aTi = aTg * eP, void 0 === (aTk = aTm[player]) && (aTm[player] = aTk = vO(player)), player === aTn && (hX.setTransform(aKW, 0, 0, aKW, aTl - 2 * aKW, hu - 2 * aKW), hX.drawImage(aTY[
				+(aA === aTo)], 0, 0)), hX.setTransform(aKW, 0, 0, aKW, aTl, hu), hX.drawImage(aTk, 0, 0), (aTg = Math.floor(function(hE) {
				if (hE < 1e3) return .42;
				if (hE < 1e4) return .34;
				if (hE < 1e6) return .26;
				if (hE < 1e8) return .19;
				return .15
			}(hE) * aTi)) < 6) || (hX.setTransform(1, 0, 0, 1, 0, 0), hX.fillStyle = aTS[aA] ? b9.nF : b9.mh, hX.font = b8.pb.rQ(1, aTg), hX.fillText(b8.zW.y9(hE), aTl + aTi, hu + aTi + .1 * aTg));
		hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aT0() {
	var a1l;
	this.dU = function() {
		a1l = a1l || bN.x.aTu(20, be.aTv[7])
	}, this.ti = function() {
		var mR = iB;
		if (!(5 <= mR)) {
			var aTp = h.i,
				aTq = h.j,
				m7 = iA / mR,
				m8 = iC / mR,
				mK = (aTp + iA) / mR,
				mL = (aTq + iC) / mR,
				g8 = -20 * mR,
				aTw = .5 * g8,
				aTr = bQ.el << 4,
				ea = bL.x.op,
				m6 = bL.x.m6,
				aTx = a1l,
				hX = tj;
			3 < mR && (hX.globalAlpha = .5 * (5 - mR));
			for (var aA = 0; aA < ea; aA++) {
				var hu = m6[aA],
					eh = aTp * (hu % aTr / 16 - m7) / (mK - m7) + aTw,
					hu = aTq * (Math.floor(hu / aTr) / 16 - m8) / (mL - m8) + aTw;
				aTp < eh || aTq < hu || eh < g8 || hu < g8 || (hX.setTransform(mR, 0, 0, mR, eh, hu), hX.drawImage(aTx, 0, 0))
			}
			hX.globalAlpha = 1, hX.setTransform(mR, 0, 0, mR, 0, 0)
		}
	}
}

function aSw() {
	this.ij = function() {
		for (var aTC, aSv, aTR = bL.x.aTR, m6 = bL.x.m6, aTP = bL.x.aTP, aA = bL.x.op - 1; 0 <= aA; aA--) aTC = m6[aA], 0 !== (aSv = aTR[aA]) && aTC === aTP[aA] && (! function(aA, aU1, hM) {
			var j0, player = bL.x.a5L[aA] >> 3,
				hM = aU1 + bK.hZ[hM] << 2,
				aA = bL.x.a5M[aA];
			if (bb.aU2(player), ab.eR(hM)) j0 = aC.eX;
			else {
				if ((j0 = ab.eS(hM)) === player) return hM = b8.fv.fy(player, aA), bb.fz(player, aA - hM, 12);
				if (!eT(player, j0)) return b6.js.oN(player, j0, aA)
			}
			ac.jB(player, j0) || ac.jT(player) ? (af.g1[player].push(aU1 << 2), ac.ix(player, aA, j0), aE.iy(player, !0)) : bb.fz(player, aA, 12)
		}(aA, bK.iH(aTC), aSv - 1), bL.aFd.aTH(aA))
	}, this.aU3 = function(player, eM, hM, m3) {
		if (0 !== hM) {
			var aTn = aC.eK;
			if (b8.fv.gm(aTn) && eT(player, aTn) && player !== aTn && 0 !== af.gG[aTn].length) {
				var aT3 = eM + bK.hZ[--hM] << 2;
				if (ab.eR(aT3) || eT(player, ab.eS(aT3))) {
					for (var eo = !1, aA = 0; aA < 4; aA++)
						if (aT3 = eM + bK.hZ[aA] << 2, ab.eV(aT3) && !ab.eR(aT3) && ab.eS(aT3) === aTn) {
							eo = !0;
							break
						} eo && (aM.a4G(719, 0), aM.zF(180, L(431, [af.zS[player]]), 719, player, b9.nE, b9.me, -1, !0, void 0, {
						eu: 1,
						m3: m3
					}))
				}
			}
		}
	}
}

function aSs() {
	this.aU4 = null, this.k3 = 512, this.p1 = 8, this.op = 0, this.aU5 = 0, this.a5L = new Uint16Array(this.k3), this.aTO = new Uint32Array(this.k3), this.aTP = new Uint32Array(this.k3), this.m6 = new Uint32Array(this.k3), this.aTQ = new Uint16Array(
			this.k3), this.a5M = new Uint32Array(this.k3), this.aTM = new Uint16Array(this.k3), this.aT8 = new Uint16Array(this.k3), this.aTR = new Uint8Array(this.k3), this.aTS = new Uint8Array(this.k3), this.oo = new Uint8Array(aC.eX), this.aT7 =
		new Uint16Array(this.p1 * aC.eX), this.dU = function() {
			this.aU5 = 0, this.op = 0, this.aU4 = new Uint8Array(bQ.el + bQ.em), this.oo.fill(0)
		}, this.p4 = function(player) {
			var ea = this.op,
				aU6 = bK.iG(bM.fB[0]),
				aU7 = this.oo[player],
				aU8 = (player << 3) + aU7,
				hE = (this.a5L[ea] = aU8, this.aTO[ea] = aU6, this.m6[ea] = aU6, this.aTP[ea] = bK.iG(bM.fB[1]), this.aTQ[ea] = 0, bM.f7[0]);
			hE < 60 ? (b8.fv.fw(player, 60 - hE), this.a5M[ea] = 60) : this.a5M[ea] = hE, this.aTM[ea] = bL.iJ.p4(ea, bK.iI(aU6)), this.aT8[ea] = this.aU5, this.aTR[ea] = bM.fB[2], this.aTS[ea] = 0, this.aU5 = this.aU5 + 1 & 1023, this.aT7[aU8] = ea,
				this.oo[player] = aU7 + 1, this.op++, bL.aSv.aU3(player, bM.fB[1], bM.fB[2], this.aT8[ea])
		}, this.o8 = function() {
			var aT6 = bM.fB[3];
			this.aTO[aT6] = this.m6[aT6], this.aTP[aT6] = bK.iG(bM.fB[1]), this.aTQ[aT6] = 0, this.aTR[aT6] = bM.fB[2], bL.aSv.aU3(this.a5L[aT6] >> 3, bM.fB[1], bM.fB[2], this.aT8[aT6])
		}, this.ij = function() {
			bL.aSv.ij();
			var aA, g7 = aC.eK,
				di = bL.h3.aFa(g7),
				rD = (! function(rD) {
					var aA, aUD, aUE, aUF, aUG, aU6, aUK, aUL, ed, g8, aTO = rD.aTO,
						aTP = rD.aTP,
						m6 = rD.m6,
						a5M = rD.a5M,
						aTS = rD.aTS,
						aTQ = rD.aTQ,
						aTM = rD.aTM,
						rD = rD.op,
						aTr = bQ.el << 4;
					for (aA = rD - 1; 0 <= aA; aA--) aUE = m6[aA], aUD = aTP[aA], aUE !== aUD && (aU6 = aTO[aA], aUK = aUD % aTr - (aUG = aU6 % aTr), aUL = ~~((aUD + .5) / aTr) - (aU6 = ~~((aU6 + .5) / aTr)), ed = ~~Math.sqrt(aUK * aUK + aUL *
						aUL + .5), g8 = 2e5 + Math.min(20 * a5M[aA], 4e5), aTS[aA] && (g8 = bJ.dj(g8, 5)), 65535 <= (g8 = aTQ[aA] + Math.max(~~((g8 + .5) / ed), 1)) ? m6[aA] = aUF = aUD : (aTQ[aA] = g8, m6[aA] = aUF = aUG + bJ.dj(g8 *
						aUK, 65536) + aTr * (aU6 + bJ.dj(g8 * aUL, 65536))), aTM[aA] = bL.iJ.aUN(aTM[aA], aUE, aUF))
				}(this), ! function(rD) {
					if (bd.jm() % 2 == 1) {
						var aA, hN, kX, eu, ev, aUO, xp, aUP, gz, m7, m8, aU6, aUQ, hd, aUS, vh, ea = rD.op,
							m6 = rD.m6,
							a5L = rD.a5L,
							a5M = rD.a5M,
							aTS = rD.aTS,
							iJ = bL.iJ.iJ,
							aUU = iJ.length,
							aUV = bL.iJ.aUV,
							aTr = bQ.el << 4,
							aUW = aC.hP,
							aRL = be.eY,
							g8 = (ea - 1) * (bJ.dj(bd.jm(), 2) % 2);
						for (aA = 0; aA < ea; aA++)
							for (hN = Math.abs(aA - g8), aU6 = m6[hN], kX = bK.iI(aU6), gz = a5L[hN] >> 3, m7 = aU6 % aTr, m8 = ~~((aU6 + .5) / aTr), aUS = a5M[hN], eu = 0; eu < 9; eu++)
								if (!((aUO = kX + aUV[eu]) < 0 || aUU <= aUO))
									for (aUP = iJ[aUO], xp = aUP.length, ev = 0; ev < xp; ev++) aUQ = aUP[ev], vh = a5L[aUQ] >> 3, gz == vh || aUW && aRL[gz] === aRL[vh] && aRL[gz] || (vh = m6[aUQ], (hd = m7 - vh % aTr) * hd + (hd = m8 - ~~((vh +
										.5) / aTr)) * hd < 14400 && (vh = a5M[aUQ], hd = vh <= aUS ? Math.max(1, bJ.dj(vh + bJ.dj(aUS - vh, 10), 10)) : Math.max(1, bJ.dj(aUS, 10)), a5M[aUQ] = Math.max(vh - hd, 0), aTS[aUQ] = 4))
					}
				}(this), ! function(rD) {
					if (bd.jm() % 5 == 3) {
						var aA, hE, a5M = rD.a5M,
							ea = rD.op;
						for (aA = 0; aA < ea; aA++) hE = a5M[aA], a5M[aA] = Math.max(hE - Math.max(1, hE >> 7), 0)
					}
				}(this), this),
				a5M = rD.a5M,
				aTS = rD.aTS;
			for (aA = rD.op - 1; 0 <= aA; aA--) aTS[aA] = aTS[aA] >> 1, 0 === a5M[aA] && bL.aFd.aTH(aA);
			bb.fz(g7, di - bL.h3.aFa(g7), 15)
		}
}

function aSt() {
	this.aUX = 32, this.eh = 0, this.ej = 0, this.iK = 0, this.aUY = 0, this.aUZ = 4, this.iJ = null, this.aUV = new Int16Array(9), this.dU = function() {
		this.iK = 1 + bJ.dj(bQ.el - 1, this.aUX), this.aUY = 1 + bJ.dj(bQ.em - 1, this.aUX), this.iJ = new Array(this.iK * this.aUY), b8.pk.a1I(this.iJ);
		var eh, ej, aUV = this.aUV,
			i = this.iK;
		for (eh = -1; eh <= 1; eh++)
			for (ej = -1; ej <= 1; ej++) aUV[3 * (1 + ej) + 1 + eh] = ej * i + eh
	}, this.p4 = function(aUb, aA) {
		return this.iJ[aA].push(aUb), this.iJ[aA].length - 1
	}, this.aUN = function(aUc, aU6, aUD) {
		var aUd, aUe, aU6 = bK.iI(aU6),
			aUD = bK.iI(aUD);
		return aU6 === aUD ? aUc : (aUd = this.iJ[aU6].pop(), this.iJ[aU6].length === aUc ? this.p4(aUd, aUD) : (aUe = this.iJ[aU6][aUc], this.iJ[aU6][aUc] = aUd, bL.x.aTM[aUd] = aUc, this.p4(aUe, aUD)))
	}
}

function aSy() {
	function a0D(aUD, aUf) {
		if (! function(aUD, aT4) {
				var hc = bK.iH(aUD),
					aUj = Math.abs(bK.ei(aT4) - bK.ei(hc)),
					hc = Math.abs(bK.ek(aT4) - bK.ek(hc));
				return 0 !== Math.max(aUj, hc) && (function(aU6, aUD, aUj, aUk) {
					var aUm = bK.hx(aU6),
						aU6 = bK.i0(aU6),
						aUo = bK.hx(aUD),
						aUD = bK.i0(aUD),
						aUo = aUo - aUm,
						aUD = aUD - aU6,
						aUs = Math.abs(aUo),
						aUt = Math.abs(aUD),
						aUo = 0 < aUo ? 1 : 3,
						aUD = 0 < aUD ? 2 : 0;
					aUt < aUs ? aUw(aUm, aU6, aUm + aUs, aU6 + aUt, aUo, aUD, aUj) : aUw(aU6, aUm, aU6 + aUt, aUm + aUs, aUD, aUo, aUk)
				}(aUD, bK.iG(aT4), aUj, hc), !0)
			}(aUD, aUf)) return !1;
		if (0 === bM.f4[0]) return !!ab.h2(aUf << 2);
		if (! function(aT4) {
				if (ab.h2(aT4 << 2)) return 1;
				return function(aT4) {
					var aA, hM, aU4 = bL.x.aU4,
						aV0 = bK,
						ea = bM.f4[0],
						aV1 = 4 * aT4;
					for (aA = ea - 1; 0 <= aA; aA--) {
						hM = aU4[aA];
						var aV2 = aV1;
						if (aV1 = aV0.iM(aV1, hM + 2 & 3), ab.h2(aV1)) return bM.f4[0] = aA, bM.fB[1] = aV1 >> 2, bM.fB[2] = 1 + hM, bM.fB[4] = aV2, 1
					}
					return
				}(aT4)
			}(aUf)) return !1;
		if (bM.fB[2] && ab.ef(bM.fB[4])) return !1;
		var aA, aUf = bK.iH(aUD),
			vZ = aAN,
			aU4 = bL.x.aU4,
			ea = bM.f4[0] - 1,
			aV1 = 4 * aUf,
			ha = bK.ha;
		for (aA = 0; aA < ea; aA++)
			if (aV1 += ha[aU4[aA]], 0 !== vZ[aV1 + 3] || 2 !== vZ[aV1 + 2]) return !!void 0;
		return !!1
	}

	function aUw(aUm, aUn, aUo, aUp, aUu, aUv, aUj) {
		for (var ej, aU4 = bL.x.aU4, g8 = 0, aUx = 0, j = aUp - aUn, i = aUo - aUm, aUy = aUm % 16, aA = 1; aA <= aUj; aA++) aU4[g8++] = aUu, aU4[g8] = aUv, g8 += (ej = (j * (aUy + (aA << 4)) + .5) / i >> 4) - aUx, aUx = ej;
		bM.fG(bM.f4, g8)
	}
	this.kS = function(player, aUf) {
		var hM, hc, gy = bK.hk(player, aUf);
		return gy !== aUf && (hM = bK.hb(gy, aUf), hc = bK.iL(gy, hM), !(!ab.h2(hc << 2) && (hM = bK.hi(gy, aUf, hM), hc = bK.iL(gy, hM), !ab.h2(hc << 2)) || (bM.fB[0] = hc, bM.fB[1] = aUf, bM.fB[2] = 0, hc !== aUf && (!a0D(bK.iG(hc), aUf) ||
			0 !== bM.fB[2] && bK.hq(player, bM.fB[1] + bK.hZ[bM.fB[2] - 1] << 2)))))
	}, this.p6 = function(aUf) {
		var aU6 = bL.x.m6[bM.fB[3]];
		return bM.fB[1] = aUf, bM.fB[2] = 0, a0D(aU6, aUf)
	}
}

function aSu() {
	var xU = 32,
		xT = new Array(2);

	function vO(ev) {
		var eh, ej, eM, hy, hv, hR = xU,
			a1l = b8.pb.vO(hR, hR),
			hX = b8.pb.getContext(a1l, !0),
			hU = b8.pb.getImageData(hX, hR, hR),
			vZ = hU.data,
			kX = (hR >> 1) - .5,
			kY = Math.sqrt(kX * kX);
		for (vZ.fill(255), ej = 0; ej < hR; ej++)
			for (eh = 0; eh < hR; eh++) hv = eh - kX, hy = ej - kX, eM = 4 * (ej * hR + eh), hv = 714 * (kY - Math.sqrt(hv * hv + hy * hy)) / kY, vZ[2 + eM] = ev, vZ[3 + eM] = 255 < hv ? 0 : hv;
		return hX.putImageData(hU, 0, 0), a1l
	}
	this.a4F = -1, this.dU = function() {
		this.a4F = -1, xT[0] || (xT[0] = vO(255), xT[1] = vO(0))
	}, this.aV4 = function(hX, eE, eh, ej, dw, aA) {
		b8.fv.gm(aC.eK) && (hX.setTransform(eE *= 4 / 3 * .625, 0, 0, eE, eh - (dw *= 4 / 3), ej - dw), hX.drawImage(xT[+(bL.x.aT8[aA] === this.a4F)], 0, 0))
	}
}

function dX() {
	this.aP3 = [L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446)];
	var aV5 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.aA3 = new Array(aV5.length), this.dU = function() {
		var g = bh.e7.data[155].value.split(";"),
			kX = g.length;
		if (function() {
				for (var ea = aV5.length, aA = 0; aA < ea; aA++) bV.aA3[aA] = aV5[aA]
			}(), !(kX > aV5.length))
			for (var aA = 0; aA < kX; aA++) g[aA].length && (this.aA3[aA] = g[aA])
	}, this.aP5 = function(dx, code) {
		for (var aA3 = this.aA3, aV7 = aV5, pI = (aA3[dx] = code, ""), ea = aA3.length, aV8 = [], aA = 0; aA < ea; aA++) aV8.push(aA3[aA] === aV7[aA] ? "" : aA3[aA]);
		ea--;
		for (aA = 0; aA < ea; aA++) pI += aV8[aA] + ";";
		bh.r3.r4(155, pI += aV8[ea])
	}, this.aP2 = function() {
		bh.r3.r4(155, ""), this.dU()
	}, this.ev = function(code, dx) {
		return code === this.aA3[dx] || code === this.aA3[dx + 1]
	}
}

function dS() {
	var aVA = new Array(1),
		aVB = new Array(1),
		aVC = 20,
		e8 = 0,
		aVD = !1;

	function aVF() {
		aVC++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aVB[aA] = 0, aVA[aA] = document.createElement("audio"), aVA[aA].src = src, aVA[aA].setAttribute("preload", "auto"), aVA[aA].setAttribute("controls", "none"), aVA[aA].style.display = "none", aVA[aA].onpause = function() {
					aVB[aA] = 1
				}, aVA[aA].oncanplaythrough = function() {
					aVB[aA] = 0 === aVB[aA] ? 1 : aVB[aA]
				}, document.body.appendChild(aVA[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aVD = !0
		}
	}, this.tC = function() {
		if (aVD) {
			aVD = !1;
			for (var aA = 0; 0 <= aA; aA--) aVA[aA].onpause = null, aVA[aA].oncanplaythrough = null, document.body.removeChild(aVA[aA]), aVA[aA] = null
		}
	}, this.play = function() {
		if (aVD) {
			var di = performance.now();
			if (e8 + 66 < di)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aVB[aA]) return e8 = di, aVB[aA] = 2, void aVA[aA].play();
			0 < aVC && (aVC--, setTimeout(aVF, 66))
		}
	}
}

function cU() {
	this.a6n = function() {
		var aVI;
		return !(ak.jq < 3 || af.gN[l4[0]] >= aC.jZ >> 1) && (aC.hP ? (aVI = ad.aGg(), !(2 * ad.aGh(bf.l1()) >= aVI)) : function() {
			var aVI = ad.aGg();
			if (2 * af.gb[l4[0]] >= aVI) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aU7 = aC.jp, gb = af.gb, aA = 0; aA < aU7; aA++) gb[aA] = 512;
			var aU8 = aC.w5,
				k2 = aD.k2,
				hE = aD.hE;
			for (aA = aU7; aA < aU8; aA++) gb[aA] = k2[hE[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var ea = aC.w5, gb = af.gb, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < ea; aA++) gb[aA] = sResourcesValue
		} : function() {
			for (var ea = aC.w5, gb = af.gb, sResourcesData = aC.data.sResourcesData, aA = 0; aA < ea; aA++) gb[aA] = sResourcesData[aA]
		})();
		bb.lb[8] = af.gb[aC.eK]
	}
}

function dJ() {
	var aVN = 501,
		aVP = (this.aVO = new Uint32Array(aVN), this.a2R = new Uint32Array(aVN), this.a9i = new Uint16Array(aVN), this.aPB = 0, 1),
		aVQ = 0;

	function aVT(self) {
		self.max.fill(0)
	}

	function aVV(self, aA) {
		self.max[0] = Math.max(self.aVO[aA], self.max[0]), self.max[1] = Math.max(self.a2R[aA], self.max[1]), self.max[2] = Math.max(self.a9i[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aVR = 0, this.lb = new Array(21), this.aVS = null, this.dV = function() {
		this.aVS = [L(447), L(448), L(449), L(450), L(451), L(452), L(453), L(454), L(288), L(289), L(455), L(456), L(457), L(458), "", L(459), L(460), L(461), L(248), L(462), L(463)]
	}, this.dU = function() {
		this.aPB = 0, aVP = 1, this.aVR = 0, aVQ = 0, aVT(this), this.lb.fill(0)
	}, this.oz = function(player, i9) {
		b8.fv.a2M(player) && (this.lb[0] += i9 + 1, this.lb[1]++, this.lb[12] += bM.f7[1])
	}, this.oP = function(player, o4) {
		__fx.donationsTracker.logDonation(player, o4, bM.f7[0]);
		player === aC.eK && (aM.oP(bM.f7[0], bM.f7[1], o4), this.lb[12] += bM.f7[1], this.lb[16] += bM.f7[0]), o4 === aC.eK && (aM.a5Z(bM.f7[0], player), this.lb[10] += bM.f7[0])
	}, this.p2 = function(player) {
		b8.fv.a2M(player) && (this.lb[2]++, this.lb[12] += bM.f7[1])
	}, this.pD = function(player) {
		b8.fv.a2M(player) && (this.lb[19]++, this.lb[12] += bM.f7[1])
	}, this.aU2 = function(player) {
		b8.fv.a2M(player) && this.lb[20]++
	}, this.fz = function(player, a36, dx) {
		b8.fv.a2M(player) && (this.lb[dx] += a36)
	}, this.ij = function() {
		var self;
		this.aVR || 0 < aVQ-- || ((self = this).aVO[self.aPB] = af.gN[aC.eK], self.a2R[self.aPB] = af.gb[aC.eK], self.a9i[self.aPB] = ad.a9j(aC.eK), aVV(self, self.aPB), self.aPB++, self.aPB === aVN && function(self) {
			aVT(self), aVV(self, 0), self.aPB = 1 + bJ.dj(aVN, 2);
			for (var aA = 1; aA < self.aPB; aA++) self.aVO[aA] = self.aVO[2 * aA], self.a2R[aA] = self.a2R[2 * aA], self.a9i[aA] = self.a9i[2 * aA], aVV(self, aA);
			aVP *= 2
		}(self), aVQ = aVP - 1, bc.lS(), 0 === af.lf[aC.eK] && (self.aVR = bd.jm()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rx = 0, this.ry = 0, this.aVX = 0, this.aVY = 0, this.a70 = 0, this.sf = 0;
	var aVa = this.aVZ = 0;
	this.aVb = 0, this.aVc = 0, this.aVd = 0, this.a6M = 0, this.dx = 0, this.a9L = null, this.hH = !1, this.aVe = -1, this.aVf = !1, this.aVg = [0, 0], this.dV = function() {
		this.a9L = [L(464), L(120, 0, "Balance"), L(119, 0, "Interest"), L(465)]
	}, this.dU = function() {
		this.hH = !1, this.aVe = -1, this.aVf = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var ed = z.a0.qz() && h.i < h.j ? 1 : z.a0.qz() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(ed * this.i), this.i -= z.a0.qz() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6M = Math.floor(this.j / 150), this.a6M = Math.max(this.a6M, 1.5), this.rx = Math.floor(1 + .02 * this.i),
			this.ry = Math.floor(1 + .04 * this.i), this.a70 = this.ry, aVa = Math.floor(.75 * this.a70), this.sf = Math.floor(1 + .075 * this.i), this.aVb = Math.floor(1 + .1125 * this.i), this.aVc = Math.floor(this.i * (z.a0.qz() ? .03 :
			.029)), this.aVc = Math.max(this.aVc, 4), this.aVd = Math.floor(.035 * this.i), this.aVd = Math.max(this.aVd, 4), this.aVZ = this.j - 2 * this.a70 - this.sf - this.aVb, this.hH && this.aVh()
	}, this.gn = function(ks, kt) {
		var w8, w7;
		return !!this.hH && (w7 = ks, w8 = kt, ks -= bJ.dj(h.i - this.i, 2), kt -= bJ.dj(h.j - this.j, 2), ks < 0 || kt < 0 || ks >= this.i || kt >= this.j || ks >= this.i - this.aVb && kt < this.aVb ? -1 !== aL.gn(w7, w8) || bA.gn(w7, w8) ||
			this.qs() : kt < this.aVb || (kt < this.j - this.sf ? (this.aVf = !0, this.aVe = (ks - 2 * this.rx - this.aVX) / this.aVY, 3 !== this.dx && (bd.dc = !0)) : (w7 = (w7 = Math.floor(ks / (this.i / this.a9L.length))) < 0 ? 0 : w7 >=
				this.a9L.length ? this.a9L.length - 1 : w7) !== this.dx && (this.dx = w7, this.aVh(), bd.dc = !0)), !0)
	}, this.a0Q = function(ks, kt) {
		return this.aVg[0] = ks, this.aVg[1] = kt, !(!this.hH || !this.aVf || (ks -= bJ.dj(h.i - this.i, 2), kt = this.aVe, this.aVe = (ks - 2 * this.rx - this.aVX) / this.aVY, (0 <= this.aVe && this.aVe <= 1 || 0 <= kt && kt <= 1) && (bd.dc = !
			0), 0))
	}, this.a0p = function() {
		this.aVf && (this.aVf = !1)
	}, this.a11 = function() {
		this.hH ? this.qs() : this.show()
	}, this.show = function() {
		bb.aPB < 2 || (this.hH = !0, this.aVh())
	}, this.qs = function() {
		this.hH = !1, this.aVe = -1, bd.dc = !0
	}, this.aVh = function() {
		this.dx < 2 ? this.aVX = aP.measureText(b8.zW.y9(bb.max[this.dx]), b8.pb.rQ(0, this.aVc)) : 2 === this.dx && (this.aVX = aP.measureText(b8.zW.a2z(6, 2), b8.pb.rQ(0, this.aVc))), this.aVY = this.i - 2 * this.rx - this.aVX - this.ry
	}, this.lS = function() {
		this.hH && this.aVh()
	}, this.ti = function() {
		this.hH && this.a7H()
	}, this.a7H = function() {
		var eh = bJ.dj(h.i - this.i, 2),
			ej = bJ.dj(h.j - this.j, 2);
		tj.setTransform(1, 0, 0, 1, eh, ej), tj.fillStyle = b9.me, tj.fillRect(0, this.aVb, this.i, this.j - this.aVb), this.aVi(), this.aO1(), tj.strokeRect(0, 0, this.i, this.j), b8.pb.textAlign(tj, 2), tj.font = b8.pb.rQ(0, this.aVc), 0 ===
			this.dx ? this.aVj(bb.aVO, eh, ej) : 1 === this.dx ? this.aVj(bb.a2R, eh, ej) : 2 === this.dx ? this.aVk(eh, ej) : 3 === this.dx && (this.aVl(eh, ej), this.aVm(eh, ej)), aL.a4f(Math.floor(eh + this.i - .725 * this.aVb), Math.floor(
				ej + .275 * this.aVb), Math.floor(.45 * this.aVb)), tj.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVi = function() {
		var aA, di;
		for (tj.lineWidth = this.a6M, b8.pb.textBaseline(tj, 1), b8.pb.textAlign(tj, 1), tj.strokeStyle = b9.mh, tj.font = b8.pb.rQ(1, this.aVd), di = this.i / this.a9L.length, tj.fillStyle = b9.n3, tj.fillRect(this.dx * di, this.j - this.sf, di,
				this.sf), tj.fillStyle = b9.mh, tj.fillRect(0, this.j - this.sf - .5 * this.a6M, this.i, this.a6M), aA = 1; aA <= 3; aA++) tj.fillRect(aA * di, this.j - this.sf, this.a6M, this.sf);
		for (aA = this.a9L.length - 1; 0 <= aA; aA--) tj.fillText(b8.x8.a1x(this.a9L[aA], 0, .9 * di), (aA + .5) * di, this.j - .46 * this.sf)
	}, this.aO1 = function() {
		tj.fillStyle = b9.nT, tj.fillRect(0, 0, this.i, this.aVb), tj.fillStyle = b9.mh, tj.fillRect(0, this.aVb - .5 * this.a6M, this.i, this.a6M), tj.font = b8.pb.rQ(1, .39 * this.aVb), tj.fillText(b8.x8.a1x(L(466), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVb))
	}, this.aVj = function(g, eh, ej) {
		var kX = bb.max[this.dx],
			a1K = (tj.setTransform(1, 0, 0, 1, eh + 2 * this.rx + this.aVX, ej + this.a70 + this.aVb), tj.lineWidth = 2, this.aVZ / Math.sqrt(kX));
		tj.beginPath(), tj.moveTo(this.aVY, this.aVZ - a1K * Math.sqrt(g[bb.aPB - 1]));
		for (var aA = bb.aPB - 2; 0 <= aA; aA--) tj.lineTo(aA * this.aVY / (bb.aPB - 1), this.aVZ - a1K * Math.sqrt(g[aA]));
		tj.stroke();
		eh = this.a4f(g, a1K, .5);
		eh < .95 && tj.fillText(b8.zW.y9(kX), -this.rx, 0), .05 < Math.abs(eh - .5) && tj.fillText(b8.zW.y9(Math.floor(kX / 4)), -this.rx, Math.floor(this.aVZ / 2)), .05 < eh && tj.fillText("0", -this.rx, this.aVZ)
	}, this.aVk = function(eh, ej) {
		tj.setTransform(1, 0, 0, 1, eh + 2 * this.rx + this.aVX, ej + this.a70 + this.aVb), tj.lineWidth = 2;
		var a1K = this.aVZ / Math.max(bb.max[this.dx], 1);
		tj.beginPath(), tj.moveTo(this.aVY, this.aVZ - a1K * bb.a9i[bb.aPB - 1]);
		for (var aA = bb.aPB - 2; 0 <= aA; aA--) tj.lineTo(aA * this.aVY / (bb.aPB - 1), this.aVZ - a1K * bb.a9i[aA]);
		tj.stroke();
		eh = this.a4f(bb.a9i, a1K, 1), ej = bb.max[this.dx] / 100;
		eh < .95 && tj.fillText(b8.zW.a2z(ej, 2), -this.rx, 0), .05 < Math.abs(eh - .5) && tj.fillText(b8.zW.a2z(ej / 2, 2), -this.rx, Math.floor(this.aVZ / 2)), .05 < eh && tj.fillText(b8.zW.a2z(0, 2), -this.rx, this.aVZ)
	}, this.aVl = function(eh, ej) {
		tj.setTransform(1, 0, 0, 1, eh + .34 * this.i, ej + 2 * aVa + this.aVb), b8.pb.textAlign(tj, 2);
		for (var a96 = this.j - 4 * aVa - this.sf - this.aVb, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) tj.fillText(b8.x8.a1x(bb.aVS[g[aA]], 0, .31 * this.i), 0, aA * a96 / 9);
		var f2 = bb.lb;
		for (tj.setTransform(1, 0, 0, 1, eh + .39 * this.i, ej + 2 * aVa + this.aVb), b8.pb.textAlign(tj, 0), tj.fillText(b8.zW.a2z(100 * f2[0] / (1024 * Math.max(f2[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) tj.fillText(f2[g[aA]].toString(), 0,
			aA * a96 / 9);
		tj.fillText(b8.zW.a2z(100 * (1 - af.gN[aC.eK] / f2[7]), 0), 0, a96)
	}, this.aVm = function(eh, ej) {
		tj.setTransform(1, 0, 0, 1, eh + .79 * this.i, ej + 2 * aVa + this.aVb), b8.pb.textAlign(tj, 2);
		var aA, a96 = this.j - 4 * aVa - this.sf - this.aVb;
		for (tj.fillStyle = b9.my, aA = 2; 0 <= aA; aA--) tj.fillText(b8.x8.a1x(bb.aVS[aA + 8], 0, .31 * this.i), 0, aA * a96 / 9);
		tj.fillText(b8.x8.a1x(bb.aVS[18], 0, .31 * this.i), 0, 3 * a96 / 9), tj.fillStyle = b9.mx, tj.fillText(b8.x8.a1x(bb.aVS[11], 0, .31 * this.i), 0, 4 * a96 / 9), tj.fillStyle = b9.nG, tj.fillText(b8.x8.a1x(bb.aVS[13], 0, .31 * this.i), 0,
				5 * a96 / 9), tj.fillText(b8.x8.a1x(bb.aVS[15], 0, .31 * this.i), 0, 6 * a96 / 9), tj.fillText(b8.x8.a1x(bb.aVS[16], 0, .31 * this.i), 0, 7 * a96 / 9), tj.fillText(b8.x8.a1x(bb.aVS[12], 0, .31 * this.i), 0, 8 * a96 / 9), tj
			.fillStyle = b9.nF, tj.fillText(b8.x8.a1x(bb.aVS[17], 0, .31 * this.i), 0, a96), tj.fillStyle = b9.my;
		var f2 = bb.lb,
			aCo = f2[8] + f2[9] + f2[10] + f2[18],
			aCo = b8.zW.y9(aCo),
			aMq = tj.measureText(aCo).width,
			eh = (tj.setTransform(1, 0, 0, 1, eh + .83 * this.i + aMq, ej + 2 * aVa + this.aVb), tj.fillText(b8.zW.y9(f2[8]), 0, 0), tj.fillText(b8.zW.y9(f2[9]), 0, a96 / 9), tj.fillText(b8.zW.y9(f2[10]), 0, 2 * a96 / 9), tj.fillText(b8.zW.y9(f2[
				18]), 0, 3 * a96 / 9), tj.fillStyle = b9.mx, tj.fillText(aCo, 0, 4 * a96 / 9), tj.fillStyle = b9.nG, tj.fillText(b8.zW.y9(f2[13]), 0, 5 * a96 / 9), tj.fillText(b8.zW.y9(f2[15]), 0, 6 * a96 / 9), tj.fillText(b8.zW.y9(f2[16]),
				0, 7 * a96 / 9), tj.fillText(b8.zW.y9(f2[12]), 0, 8 * a96 / 9), f2[12] + f2[13] + f2[15] + f2[16]);
		tj.fillStyle = b9.nF, tj.fillText(b8.zW.y9(eh), 0, a96), tj.fillStyle = b9.mh
	}, this.a4f = function(g, a1K, a7s) {
		var aA, e, fH;
		return this.aVe < 0 || 1 < this.aVe ? .25 : (aA = this.aVe * (bb.aPB - 1), fH = g[e = Math.floor(aA)], fH += (aA - e) * (g[e < bb.aPB - 1 ? e + 1 : e] - fH), tj.strokeStyle = b9.mk, .04 < this.aVe && this.aVo(0, this.aVZ - a1K * Math.pow(
				fH, a7s), aA * this.aVY / (bb.aPB - 1), this.aVZ - a1K * Math.pow(fH, a7s)), .04 < fH / bb.max[this.dx] && this.aVo(aA * this.aVY / (bb.aPB - 1), this.aVZ, aA * this.aVY / (bb.aPB - 1), this.aVZ - a1K * Math.pow(fH, a7s)), tj
			.fillStyle = b9.nI, tj.beginPath(), tj.arc(aA * this.aVY / (bb.aPB - 1), this.aVZ - a1K * Math.pow(fH, a7s), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tj.fill(), g = this.aVe * bd.a9k, g = 0 === af.lf[aC.eK] ? Math.floor(g * bb
				.aVR) : Math.floor(g * bd.jm()), tj.fillStyle = b9.mh, tj.fillText(1 === a7s ? b8.zW.a2z(fH / 100, 2) : b8.zW.y9(Math.floor(fH)), -this.rx, this.aVZ - a1K * Math.pow(fH, a7s)), b8.pb.textAlign(tj, 1), tj.fillText(aV.a9Z(g),
				aA * this.aVY / (bb.aPB - 1), this.aVZ + this.aVc - (z.a0.qz() ? 2 : 0) - this.a6M), b8.pb.textAlign(tj, 2), a1K * Math.pow(fH, a7s) / this.aVZ)
	}, this.aVo = function(m7, m8, mK, mL) {
		tj.beginPath(), tj.moveTo(m7, m8), tj.lineTo(mK, mL), tj.stroke()
	}
}

function bt() {
	this.aVp = "https://", this.aVq = this.aVp + "territorial.io/", this.aPC = this.aVq + "changelog", this.aPG = this.aVq + "terms", this.aVr = this.aVq + "cookie_policy", this.aOd = this.aVq + "privacy", this.aPF = this.aVq + "tutorial", this.aPE =
		this.aVq + "players", this.aPD = this.aVq + "clans", this.zh = this.aVq + "clan-results", this.aLz = "https://patreon.com/c/territorial", this.aB2 = this.aVp + "play.google.com/store/apps/details?id=territorial.io", this.zz = this.aVp +
		"apps.apple.com/app/id1581110913", this.aVs = this.aVp + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aB3 = this.aVp + "discord.gg/pthqvpTXmh", this.aB4 = this.aVp + "www.instagram.com/davidtschacher/", this.xj =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVt, this.x5 = new aVu, this.dU = function() {
		this.x.dU()
	}, this.ij = function() {
		0 !== this.x.a5i && this.x.a5i--
	}
}

function aVu() {
	this.ti = function() {
		if (0 !== bN.x.a5i && (tj.globalAlpha = Math.min(bN.x.a5i / 580, 1), tj.drawImage(bN.x.aVx, 1 + aR.x3(), 1 + aR.x4()), tj.globalAlpha = 1, aC.gv)) {
			for (var m7 = iA / iB, m8 = iC / iB, mK = (h.i + iA) / iB, mL = (h.j + iC) / iB, g8 = bN.x.aVy * iB, aVz = bN.x.aVz, aA = aC.jp - 1; 0 <= aA; aA--) ! function(aA, g8, m7, m8, mK, mL, aVz) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g8 *= 2;
				0 === af.lf[aA] || 0 === af.gN[aA] || (mK = h.i * ((af.iO[aA] + af.iP[aA] + 1) / 2 - m7) / (mK - m7) - .5 * g8, m7 = h.j * ((af.iQ[aA] + af.iR[aA] + 1) / 2 - m8) / (mL - m8) - .5 * g8, mK > h.i) || m7 > h.j || mK < -g8 || m7 <
					-g8 || (tj.setTransform(highlight ? iB * 2 : iB, 0, 0, highlight ? iB * 2 : iB, mK, m7), tj.drawImage(aVz[aC.hP ? be.eY[aA] : 1], 0, 0))
			}(aA, g8, m7, m8, mK, mL, aVz);
			tj.setTransform(iB, 0, 0, iB, 0, 0)
		}
	}
}

function aVt() {
	this.aVy = 28, this.a5i = 0, this.aVx = null;
	var aW1 = this.aVz = null;

	function aW4(hR, aW5) {
		var eh, ej, eM, hv, a1l = b8.pb.vO(hR, hR),
			hX = b8.pb.getContext(a1l, !0),
			hU = b8.pb.getImageData(hX, hR, hR),
			vZ = hU.data,
			kX = (hR >> 1) - .5,
			aW6 = .5 + kX;
		for (aW6 *= aW6, ej = 0; ej < hR; ej++)
			for (eh = 0; eh < hR; eh++) hv = (hv = eh - kX) * hv + (hv = ej - kX) * hv, vZ[eM = 4 * (ej * hR + eh)] = aW5[0], vZ[1 + eM] = aW5[1], vZ[2 + eM] = aW5[2], vZ[3 + eM] = (aW6 - hv) * aW5[3] / aW6;
		return hX.putImageData(hU, 0, 0), a1l
	}

	function aV4(aA, hX, a1l, hR) {
		var highlight, eh, ej;
		0 !== af.lf[aA] && 0 !== af.gN[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (hR *= 2), eh = af.iO[aA] + af.iP[aA] + 1 - hR - 2 >> 1, ej = af.iQ[aA] + af.iR[aA] + 1 - hR - 2 >> 1, highlight ? hX
			.drawImage(a1l[aC.hP ? 9 === aC.k6 && 5 === aD.hE[aA] ? 3 : be.eY[aA] : aA < aC.jp ? 1 : 0], eh, ej, hR, hR) : hX.drawImage(a1l[aC.hP ? 9 === aC.k6 && 5 === aD.hE[aA] ? 3 : be.eY[aA] : aA < aC.jp ? 1 : 0], eh, ej))
	}
	this.dU = function() {
		var rD;
		this.a5i = 700,
			function(rD) {
				var hR = rD.aVy;
				if (rD.aVz = [], aW1 = [], aC.hP) {
					for (var aA = 0; aA <= aC.wC; aA++) rD.aVz.push(aW4(hR, be.aTv[be.kB[aA]])), aW1.push(aW4(hR >> 1, be.aTv[be.kB[aA]]));
					9 === aC.k6 && aW1.push(aW4(hR, be.aTv[1]))
				} else rD.aVz.push(aW4(hR, be.aTv[7])), rD.aVz.push(aW4(hR, be.aTv[4])), aW1.push(aW4(hR >> 1, be.aTv[7]))
			}(this),
			function(rD, aW7) {
				var aA, aVx = rD.aVx,
					hX = b8.pb.getContext(aVx, !0),
					ea = aC.eX,
					hR = rD.aVy >> 1;
				hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0), aW7 && hX.clearRect(0, 0, aVx.width, aVx.height);
				if (9 === aC.k6) {
					hR <<= 1;
					rD = ax.kF[5];
					for (aA = ea - rD; aA < ea; aA++) aV4(aA, hX, aW1, hR);
					ea -= rD, hR >>= 1
				}
				for (aA = aC.jp; aA < ea; aA++) aV4(aA, hX, aW1, hR)
			}(this, null !== (rD = this).aVx && rD.aVx.width === bQ.el - 2 && rD.aVx.height === bQ.em - 2 || (rD.aVx = b8.pb.vO(bQ.el - 2, bQ.em - 2), !1)), aC.gv || this.a3H()
	}, this.aTu = aW4, this.a3H = function() {
		for (var ea = aC.jp, hR = this.aVy, aVz = this.aVz, hX = b8.pb.getContext(this.aVx, !0), aA = 0; aA < ea; aA++) aV4(aA, hX, aVz, hR)
	}
}

function d3() {
	function aWA() {
		8 === aC.k6 && 1 === aC.yr && bP.yU.yq()
	}

	function aW9(player) {
		aC.gv ? (aj.aFU(player), ak.aIT(), aC.k8 && aC.ot.ij()) : b1.aBJ(player)
	}
	this.oJ = function(player) {
		aM.z3(player, player === aC.eK ? 21 : 22), aW9(player), aWA()
	}, this.oq = function(player) {
		1 === aC.yr && 0 !== af.lf[player] && 2 !== af.a2I[player] && aW9(player), aC.yu--, aC.yt--, aM.z3(player, 4), b8.fv.gl(2) && aV.lR(!0), aWA()
	}
}

function dD() {
	this.aRW = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a93 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.mh, "rgb(170,170,170)"
	], this.aWB = [b9.mh, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.mh, b9.mY], this.aWC = [b9.mY, b9.mh, b9.mh, b9.mh, b9.mY, b9.mY, b9.mY, b9.mY, b9.mh];
	var aWD = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aWE = (this.aHv = ["rgba(" + aWD[0] + ",", "rgba(" + aWD[1] + ",", "rgba(" + aWD[2] + ",", "rgba(" + aWD[3] + ",", "rgba(" + aWD[4] + ",", "rgba(" + aWD[5] + ",", "rgba(" + aWD[6] + ",", "rgba(" + aWD[7] + ",", "rgba(" + aWD[8] + ",",
			"rgba(" + aWD[9] + ","
		], this.aHw = ["rgb(" + aWD[0] + ")", "rgb(" + aWD[1] + ")", "rgb(" + aWD[2] + ")", "rgb(" + aWD[3] + ")", "rgb(" + aWD[4] + ")", "rgb(" + aWD[5] + ")", "rgb(" + aWD[6] + ")", "rgb(" + aWD[7] + ")", "rgb(" + aWD[8] + ")", "rgb(" + aWD[
			9] + ")"
		], this.zD = null, this.aTv = [
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
	this.kB = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eY = new Uint8Array(aC.eX), this.a94 = new Uint8Array(aC.eX), this.wI = new Uint16Array(aC.eX), this.wJ = new Uint16Array(this.kB.length + 1), this.wK = new Uint16Array(this.kB.length), this.dV =
		function() {
			this.zD = [L(467), L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(475)]
		}, this.dU = function() {
			if (this.eY.fill(0), this.aWF(), aC.hP) {
				if (9 === aC.k6) {
					for (var eY = be.eY, aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) eY[aA] = 1;
					var ea = aC.eX;
					for (aA = aC.data.teamPlayerCount[7]; aA < ea; aA++) eY[aA] = 2;
					be.kB[1] = 7, be.kB[2] = 8
				} else aC.k8 ? function() {
					var colorsData = aC.data.colorsData;
					if (!aC.data.selectableColor)
						for (var aA = aC.jp - 1; 0 <= aA; aA--) colorsData[aA] = aw.j7(262144);
					var aWQ = 0,
						eq = 768,
						aR0 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aC.data.teamPlayerCount;
					for (aA = 0; aA < 9; aA++)
						if (teamPlayerCount[aA]) {
							for (var ed = 0, eu = 0; eu < 3; eu++) ed += Math.abs(aWE[aA][eu] - aR0[eu]);
							ed < eq && (aWQ = aA, eq = ed)
						} var aWR = new Uint16Array(9);
					for (aA = 0; aA < 9; aA++) aWR[aA] = teamPlayerCount[aA];
					var kB = be.kB,
						aWS = new Uint8Array(9),
						g2 = (kB[0] = 0, 1);
					for (aA = 1; aA < 9; aA++) aWR[aA] && (aWS[aA] = g2, kB[g2++] = aA);
					var j6 = aC.jp,
						eY = be.eY;
					aWR[aWQ] ? (aWR[aWQ]--, eY[0] = aWS[aWQ]) : j6 = 0;
					var ev = 0;
					for (aA = j6; aA < aC.w5; aA++) {
						var hN = kB[ev];
						if (aWR[hN]) aWR[hN]--, eY[aA] = aWS[hN];
						else if (aA--, 9 <= ++ev) return console.log("error 325")
					}
				}() : this.ij();
				! function() {
					for (var ea = aC.eX, wI = be.wI, wJ = be.wJ, wK = be.wK, eY = be.eY, kB = be.kB, wB = kB.length, e7 = new Array(wB), aA = 0; aA < wB; aA++) e7[aA] = [];
					for (aA = 0; aA < ea; aA++) e7[kB[eY[aA]]].push(aA);
					for (aA = 1; aA <= wB; aA++) wJ[aA] = wJ[aA - 1] + e7[aA - 1].length;
					for (aA = 0; aA < wB; aA++)
						for (var g2 = e7[aA].length, kX = wJ[aA], hN = 0; hN < g2; hN++) wI[hN + kX] = e7[aA][hN];
					var jp = aC.jp;
					for (aA = 0; aA < wB; aA++)
						for (g2 = e7[aA].length, kX = wJ[aA], hN = 0; hN < g2; hN++)
							if (wI[hN + kX] >= jp) {
								wK[aA] = hN;
								break
							}
				}(), ! function() {
					for (var ea = aC.eX, eY = be.eY, a94 = be.a94, kB = be.kB, aA = 0; aA < ea; aA++) a94[aA] = kB[eY[aA]];
					9 === aC.k6 && a94.fill(1, ea - ax.kF[5])
				}()
			}
		}, this.aWF = function() {
			for (var aA = this.kB.length - 1; 0 <= aA; aA--) this.kB[aA] = aA
		}, this.ij = function() {
			var hf = new Uint8Array(aC.jp),
				hg = new Uint8Array(aC.jp),
				aWK = new Uint16Array(8),
				aWL = new Uint16Array(this.kB.length);
			this.aWM(hf, hg, aWK, 1), this.aF7(aWK), this.aWN(aWL, hf, hg), this.aWO(hf, hg, aWL), this.aWP()
		}, this.aWM = function(hf, hg, aWR, aWT) {
			for (var eu, e, aWU, ea = this.kB.length - aWT, g = new Uint16Array(ea), colorsData = aC.data.colorsData, aA = aC.jp - 1; 0 <= aA; aA--) {
				for (eu = ea; aWT <= eu; eu--) g[eu - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aWE[eu][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aWE[eu][1]) + Math.abs(4 * (63 & colorsData[aA]) - aWE[eu][2]);
				for (aWU = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aWU && (aWU = g[e], hf[aA] = e);
				for (aWR[hf[aA]] += 4, aWU = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aWU && e !== hf[aA] && (aWU = g[e], hg[aA] = e);
				aWR[hg[aA]]++
			}
		}, this.aF7 = function(aWR) {
			for (var eu, kZ, ea = this.kB.length - 1, aA = ea; 0 <= aA; aA--) this.kB[aA] = aA;
			for (aA = ea - 1; 0 <= aA; aA--) aWR[aA]++;
			for (aA = 1; aA <= ea; aA++) {
				for (kZ = 0, eu = 1; eu < ea; eu++) aWR[eu] > aWR[kZ] && (kZ = eu);
				aWR[kZ] = 0, this.kB[aA] = kZ + 1
			}
		}, this.aWN = function(aWL, hf, hg) {
			var eu, za, ev, ed, e, mJ, sF, aWV = this.kB.length - 1,
				q5 = new Uint16Array(aWV),
				aWW = [],
				aWX = 0,
				zZ = [],
				aWY = [];
			loop: for (var aA = 0; aA < aC.jp; aA++)
				if (null !== (za = b8.zW.zb(af.zY[aA]))) {
					for (eu = zZ.length - 1; 0 <= eu; eu--)
						if (za === zZ[eu]) {
							aWY[eu].push(aA), aWX = Math.max(aWX, aWY[eu].length);
							continue loop
						} zZ.push(za), aWW.push(!1), aWY.push([aA]), aWX = Math.max(aWX, 1)
				}
			for (; 2 < aC.wC && aWX > bJ.dj(aC.jp, aC.wC);) aC.wC--, aC.k6--;
			for (eu = zZ.length - 1; 0 <= eu; eu--) {
				for (ed = -1, ev = zZ.length - 1; 0 <= ev; ev--) !aWW[ev] && (-1 === ed || aWY[ev].length > aWY[ed].length) && (ed = ev);
				for (ev = aWV - 1; 0 <= ev; ev--) q5[ev] = 1;
				for (ev = aWY[ed].length - 1; 0 <= ev; ev--) q5[hf[aWY[ed][ev]]] += 3, q5[hg[aWY[ed][ev]]]++;
				for (aA = aWV - 1; 0 <= aA; aA--) {
					for (e = ed % aWV, ev = aWV - 1; 0 <= ev; ev--) q5[ev] > q5[e] && (e = ev);
					for (mJ = -1, ev = aC.wC; 0 < ev; ev--)
						if (this.kB[ev] === e + 1) {
							mJ = ev;
							break
						} if (q5[e] = 0, -1 !== mJ) {
						for (sF = 0, ev = aC.wC; 0 < ev; ev--) aWL[mJ] > aWL[ev] && sF++;
						if (sF !== aC.wC - 1) {
							for (ev = aWY[ed].length - 1; 0 <= ev; ev--) aWL[mJ]++, this.eY[aWY[ed][ev]] = mJ;
							break
						}
					}
				}
				aWW[ed] = !0
			}
		}, this.aWO = function(hf, hg, aWL) {
			for (var aA, hu, ea = this.kB.length - 1, border = bJ.dj(aC.jp, aC.wC), aWZ = (0 < aC.jp % aC.wC && border++, new Uint8Array(1 + ea)), eu = ea; 1 <= eu; eu--) aWZ[this.kB[eu]] = eu;
			for (aA = 0; aA < aC.jp; aA++) hu = aWZ[hf[aA] + 1], 0 === this.eY[aA] && hu <= aC.wC && aWL[hu] < border && (aWL[hu]++, this.eY[aA] = hu);
			for (aA = 0; aA < aC.jp; aA++) hu = aWZ[hg[aA] + 1], 0 === this.eY[aA] && hu <= aC.wC && aWL[hu] < border && (aWL[hu]++, this.eY[aA] = hu);
			for (eu = aC.wC; 1 <= eu; eu--)
				for (aA = aC.jp - 1; 0 <= aA && !(aWL[eu] >= border); aA--) 0 === this.eY[aA] && (aWL[eu]++, this.eY[aA] = eu)
		}, this.aWP = function() {
			for (var aA = aC.jp; aA < aC.eX; aA++) this.eY[aA] = 1 + aA % aC.wC
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
		for (var aWa = !1, aWb = !1, ed = 3; 0 <= ed; ed--) {
			var g7 = gF[player][aA] + ec[ed];
			if (ab.aFH(g7, player)) continue loop;
			aWa = aWa || ab.h2(g7), aWb = aWb || ab.aFG(g7)
		}
		aWa ? gG[player].push(gF[player][aA]) : aWb ? f0[player].push(gF[player][aA]) : ab.we(gF[player][aA], player), gF[player][aA] = gF[player][ea - 1], gF[player].pop(), ea--
	}
}

function gD() {
	af.gN[fT] -= fU
}

function gE(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) ab.wy(fT, border[aA]) || (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gH(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) !ab.wy(fT, border[aA]) && ab.eV(border[aA]) && (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gI(border) {
	for (var ed, g7, ea = border.length, ec = ab.ec, aA = ea - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--)
			if (g7 = border[aA] + ec[ed], ab.aFH(g7, fT)) {
				af.gF[fT].push(border[aA]), border[aA] = border[ea - 1], border.pop(), ea--;
				break
			}
}

function gJ() {
	for (var ed, g7, ec = ab.ec, aA = fU - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--) g7 = fW[aA] + ec[ed], ab.aFI(fT, g7) && ab.aFJ(g7) && (af.gF[fT].push(g7), ab.g4(g7, fT))
}

function gK() {
	var eh, ej;
	loop: for (; af.iQ[fT] < af.iR[fT];) {
		for (eh = af.iP[fT]; eh >= af.iO[fT]; eh--)
			if (ab.wy(fT, 4 * (af.iQ[fT] * bQ.el + eh))) break loop;
		af.iQ[fT]++
	}
	loop: for (; af.iQ[fT] < af.iR[fT];) {
		for (eh = af.iP[fT]; eh >= af.iO[fT]; eh--)
			if (ab.wy(fT, 4 * (af.iR[fT] * bQ.el + eh))) break loop;
		af.iR[fT]--
	}
	loop: for (; af.iO[fT] < af.iP[fT];) {
		for (ej = af.iR[fT]; ej >= af.iQ[fT]; ej--)
			if (ab.wy(fT, 4 * (ej * bQ.el + af.iO[fT]))) break loop;
		af.iO[fT]++
	}
	loop: for (; af.iO[fT] < af.iP[fT];) {
		for (ej = af.iR[fT]; ej >= af.iQ[fT]; ej--)
			if (ab.wy(fT, 4 * (ej * bQ.el + af.iP[fT]))) break loop;
		af.iP[fT]--
	}
}

function eT(player, j0) {
	return 0 === be.eY[player] || be.eY[player] !== be.eY[j0]
}

function h8(player, j0) {
	for (var e, aWc = ac.ff(player), aA = 0; aA < aWc; aA++)
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

function aFQ(player) {
	for (var aA, g8, ea = af.gF[player].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < ea; aA++)
			if (ab.j2(af.gF[player][aA]) && ab.eR(af.gF[player][aA] + g8)) return !0;
	return !1
}

function hA(a2N, a2O) {
	for (var aA, di, g8, g7, aU7 = af.gF[a2N].length, aU8 = af.gF[a2O].length, ec = (aU8 < aU7 && (di = a2N, a2N = a2O, a2O = di, di = aU7, aU7 = aU8, 0), ab.ec), ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < aU7; aA++)
			if (g7 = af.gF[a2N][aA] + g8, ab.g9(g7) && ab.eS(g7) === a2O) return !0;
	return !1
}

function aFR(a2N, a2O) {
	for (var aA, g8, g7, aU7 = af.gF[a2N].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < aU7; aA++)
			if (ab.j2(af.gF[a2N][aA]) && (g7 = af.gF[a2N][aA] + g8, ab.g9(g7)) && ab.eS(g7) === a2O) return !0;
	return !1
}

function dP() {
	this.p3 = new aWd
}

function aWd() {
	this.h5 = function(player) {
		b8.fv.a2J(player) && aM.zF(80, L(476), 637, 0, b9.nW, b9.me, -1, !1)
	}, this.a4H = function() {
		aM.zF(80, L(477), 637, 0, b9.nW, b9.me, -1, !1)
	}, this.o8 = function(player) {
		b8.fv.a2J(player) && aM.zF(80, L(478), 637, 0, b9.nW, b9.me, -1, !1)
	}
}

function aWe() {
	this.aWf = 0, this.ij = function() {
		aN.ij(), aY.ij(), h.ij(), ay.x.ij(), av.aEd(), bd.dc && (bd.dc = !1, aZ.ti())
	}
}

function aWg() {
	this.e9 = bd.e9, this.dx = 0, this.aWf = 0, this.aEb = 0, this.aWh = null, this.aWi = 7, this.a5j = 0, this.dU = function() {
		this.aEb = 0, this.aWh = [], this.dx = 0, this.aWf = 0
	}, this.aQY = function(aB) {
		if (aC.gv) this.a9l(aB);
		else if (this.aWh.push(aB), 2 === aC.yr) {
			for (var aA = 0; aA < this.aWh.length; aA++) b6.nx.ij(this.aWh[aA]);
			this.aWh = []
		}
	}, this.a9l = function(aB) {
		2 !== aC.yr && (b6.nx.ij(aB), b7.ij(), aV.a9l(this.aEb), this.aEb === aC.a3N ? (aC.ot.ij(), this.aEb = 0, this.dx = 0, this.aWf = 0, this.e9 = bd.e9) : (this.aEb++, ae.a3G(), ae.lR(!0), bZ.aAL()))
	}, this.ij = function() {
		h.ij(), aC.gv ? (bd.dc = aV.a9l(-1) || bd.dc, lT()) : (0 !== this.dx || bd.e9 >= this.e9 && (this.e9 += bd.a9k * Math.floor(1 + (bd.e9 - this.e9) / bd.a9k), 2 === aC.yr ? lI() : this.aWj(), this.dx++, 27 < bd.e9 - this.a5j)) && this
		.aWk(), lO(), bd.dc && (bd.dc = !1, x1()), this.a5j = bd.e9
	}, this.aWk = function() {
		bd.dc = !0, lQ(), this.dx = 0
	}, this.aWj = function() {
		var uQ, aA;
		if (this.aWf !== 7 * this.aEb) lK(), bZ.aAL();
		else {
			uQ = !1;
			loop: for (; this.aWl() && (uQ = !0, lK(), 2 !== aC.yr) && 0 < this.aWh.length;)
				for (aA = this.aWi - 2; 0 <= aA; aA--)
					if (lK(), 2 === aC.yr) break loop;
			uQ ? bZ.aAL() : (lI(), bZ.a3J())
		}
	}, this.aWl = function() {
		return 0 < this.aWh.length && (this.aEb++, b6.nx.ij(this.aWh[0]), this.aWh.shift(), !0)
	}
}

function aWm() {
	var aWn, aWo, aWp, aEb, aWq, dx = 0,
		e9 = bd.e9;

	function aWt() {
		! function() {
			if (!aC.gv) return;
			if (aC.k8) return;
			if (2 !== aC.yr)
				if (aWq % 7 != 0) aWq++;
				else if (aEb === aC.a3N) {
				if (!aWw()) return;
				aV.a9l(aEb), aC.ot.ij()
			} else {
				if (!aWw()) return;
				aWq++, aEb++, ae.a3G(), ae.lR(!0)
			}
			return 1
		}() && aWw() && lK()
	}

	function aWu() {
		dx = 0, (aC.gv ? (bd.dc = aV.a9l(aEb - (aWq % 7 == 0 ? 0 : 1) + aWq % 7 / 7) || bd.dc, lT) : aL.gk || !bA.a3k ? lT : (bd.dc = !0, lQ))()
	}

	function aWw() {
		var aA, ea, aWx = b7.or.aRg,
			fH = b7.or.aRh,
			fJ = b7.or.aRi,
			fL = b7.or.aRj,
			aWy = b7.or.aRk,
			aWz = b7.or.aRl;
		if (!(aWn >= aWz.length)) {
			if (aWz = aWz[aWn], aWy[aWn]) {
				for (ea = aWo + aWz, aA = aWo; aA < ea; aA++) b6.nx.od(aWx[aA], fH[aA], fJ[aA], fL[aA]);
				aWo += aWz, aWn++
			} else ++aWp >= aWz && (aWn++, aWp = 0);
			return 1
		}
		aM.a0B("Replay file smaller than expected."), bA.a12(!1), aC.yr = 2
	}
	this.aWf = 0, this.dU = function() {
		aWq = aEb = aWp = aWo = aWn = 0
	}, this.ij = function() {
		var aUU;
		h.ij(), bA.a7C() < 1.7 ? 0 === dx ? bd.e9 >= e9 && (aUU = bd.a9k / bA.a7C(), e9 += aUU * Math.floor(1 + (bd.e9 - e9) / aUU), 2 === aC.yr || aL.gk || !bA.a3k ? lI() : (aWt(), bZ.aAL()), dx++) : aWu() : function() {
			var aUU;
			if (bd.e9 >= e9)
				if (2 === aC.yr || aL.gk || !bA.a3k) lI(), e9 = bd.e9;
				else {
					for (aUU = bd.a9k / bA.a7C(), 16 < (bd.e9 - e9) / aUU && (e9 = bd.e9 - 16 * aUU); bd.e9 >= e9 && 2 !== aC.yr;) e9 += aUU, aWt();
					bZ.aAL()
				} aWu()
		}(), lO(), bd.dc && (bd.dc = !1, x1())
	}, this.z1 = function() {
		b7.or.aRl.length - aWn <= 2 || aM.a0B("Replay file larger than expected.")
	}
}

function aX0() {
	var dx = 0,
		e9 = bd.e9;
	this.aWf = 0, this.ij = function() {
		h.ij(), aC.gv ? lT() : 0 === dx ? bd.e9 >= e9 && (e9 += bd.a9k * Math.floor(1 + (bd.e9 - e9) / bd.a9k), 2 === aC.yr || aL.gk ? lI() : (lK(), bZ.aAL()), dx++) : ((aL.gk ? lT : (bd.dc = !0, lQ))(), dx = 0), lO(), bd.dc && (bd.dc = !1, x1())
	}
}

function dL() {
	this.z0 = null, this.dc = !1, this.e9 = 0, this.a9k = 56;
	var aX1 = 0;

	function aX2() {
		bd.e9 = aX1 = performance.now(), bd.z0.ij(), window.requestAnimationFrame(aX2)
	}
	this.dU = function() {
		this.a3h(), window.requestAnimationFrame(aX2), this.e9 = performance.now()
	}, this.a3Y = function() {
		aC.gj ? (this.z0 = new aWm, this.z0.dU()) : aC.k8 ? this.z0 = new aX0 : (this.z0 = new aWg, this.z0.dU())
	}, this.a3h = function() {
		this.z0 = new aWe, this.dc = !0
	}, this.ij = function() {
		this.z0.aWf++
	}, this.jm = function() {
		return this.z0.aWf
	}, this.aQA = function() {
		var di = performance.now();
		di < aX1 + 1e3 || (this.e9 = di, this.z0.ij())
	}
}

function cn() {
	var aE0 = 0,
		aX3 = !0;

	function aX4(id) {
		id = [L(479), L(480), L(481), L(482)][id];
		aM.a5Q(id)
	}
	this.ij = function() {
		var di, a5l;
		bd.e9 < aE0 || (aE0 = bd.e9 + 5e3, aC.gj) || aC.k8 || b8.fv.gm(aC.eK) || (di = new Date, a5l = di.getUTCSeconds(), aX3 ? a5l < 50 && (aX3 = !1) : a5l < 50 || (aX3 = !0, (a5l = (di.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5l || 20 ==
			a5l || 40 == a5l ? aC.k6 < 7 && aX4(0) : 10 == a5l || 30 == a5l || 50 == a5l ? 7 !== aC.k6 && 10 !== aC.k6 || aX4(1) : 5 == a5l || 25 == a5l || 45 == a5l ? 8 === aC.k6 && aX4(2) : 35 == a5l && 9 === aC.k6 && aX4(3))))
	}
}

function ch() {
	var m7, m8, mK, mL, aX5 = 0,
		aX6 = 0;

	function aX8() {
		return Math.pow(Math.pow(mK - m7, 2) + Math.pow(mL - m8, 2), .5)
	}

	function aX7(e) {
		m7 = h.k * e.touches[0].clientX, m8 = h.k * e.touches[0].clientY, mK = h.k * e.touches[1].clientX, mL = h.k * e.touches[1].clientY
	}
	this.a0U = function(e) {
		return 1 < e.touches.length ? (aX6 = bd.e9, aX5 = 3, aX7(e), aK.qs(), !0) : (aX5 = 0, !1)
	}, this.a0V = function(e) {
		var aJG, hs, ht;
		return 0 !== aC.yr && 1 < e.touches.length && (aX5 = Math.max(aX5 - 1, 0), aG.mP() && (aJG = aX8(), aX7(e), e = aX8(), hs = Math.floor((m7 + mK) / 2), ht = Math.floor((m8 + mL) / 2), aR.a7c(hs, ht, Math.max(.125, e) / Math.max(.125,
			aJG)), bd.dc = !0), !0)
	}, this.a0s = function() {
		var eh, ej;
		return !!(aX5 && (aX5 = 0, bd.e9 < aX6 + 500)) && (eh = (m7 + mK) / 2, ej = (m8 + mL) / 2, aK.a0m(eh, ej), aK.click(eh, ej, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.tC = function() {
		this.aB = null
	}, this.oc = function(size) {
		for (var f2 = 0, aB = this.aB, mP = this.dx + size - 1, aA = this.dx; aA <= mP; aA++) f2 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mP - aA;
		return this.dx += size, this.dx > 8 * this.size && console.error("Unwrapper Overflow"), f2
	}, this.aQg = function(size) {
		var eu = size >> 1;
		return (1 << eu) * this.oc(size - eu) + this.oc(eu)
	}, this.aQh = function(aX9) {
		return this.size === bB.aQf(aX9)
	}, this.aRy = function(vr, aXA, aXB) {
		var g2 = this.oc(vr);
		if (!g2) return null;
		for (var vr = Math.max(g2, aXB), g = new(aXA <= 8 ? Uint8Array : aXA <= 16 ? Uint16Array : Uint32Array)(vr), aA = 0; aA < g2; aA++) g[aA] = this.oc(aXA);
		aXB = g[g2 - 1];
		return aXB && g.fill(aXB, g2), g
	}, this.aRz = function(vr, aXC, aXB) {
		var g2 = this.oc(vr);
		if (!g2) return null;
		for (var vr = Math.max(g2, aXB), g = new Array(vr), aA = 0; aA < g2; aA++) g[aA] = this.aRw(aXC);
		return g.fill(g[g2 - 1], g2), g
	}, this.aRw = function(vr) {
		return bE.ux.v1(this.oc(vr))
	}, this.aRx = function() {
		var pI = bD.rt.ru(bD.rt.rv(this.oc(30))),
			pI = b8.zW.a3B(pI, "_", "/");
		pI = b8.zW.a3B(pI, "-", "+");
		for (var aXD = "";
			(pI.length + aXD.length) % 4;) aXD += "=";
		pI = "data:image/png;base64," + pI + aXD;
		var aFw = new Image;
		aFw.onload = function() {
			b7.aGL.aGM(aFw), aFw.onload = null, aFw = null
		}, aFw.src = pI
	}
}

function dF() {
	this.aSn = 0, this.aSo = 0, this.aSj = 0, this.aSk = 0, this.aSl = 0, this.aSm = 0, this.aAM = [0, 0, 0, 0], this.mO = function() {
		this.aSn = aR.x3(), this.aSo = aR.x4(), this.aSj = -this.aSn, this.aSk = -this.aSo, this.aSl = h.i / iB, this.aSm = h.j / iB, this.aAM[0] = Math.floor(this.aSj), this.aAM[1] = Math.floor(this.aSk), this.aAM[2] = Math.floor(this.aAM[0] +
			this.aSl + 1), this.aAM[3] = Math.floor(this.aAM[1] + this.aSm + 1), bZ.aAJ = !0
	}
}

function ci() {
	var a6I, ls;
	this.dU = function() {
		a6I = 1, ls = 0
	}, this.ij = function() {
		0 < a6I && (ls = 0 === ls ? bd.e9 + 16 : ls, a6I = (a6I -= .001 * (bd.e9 - ls)) < 0 ? 0 : a6I, ls = bd.e9, bd.dc = !0)
	}, this.ti = function() {
		0 < a6I && (tj.fillStyle = "rgba(0,0,0," + a6I + ")", tj.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aX9) {
		return this.dU(new Uint8Array(this.aQf(aX9))), this.aB
	}, this.tC = function() {
		this.aB = null
	}, this.a7 = function(size, a5p) {
		for (var aB = this.aB, mP = this.dx + size - 1, aA = this.dx; aA <= mP; aA++) aB[aA >> 3] |= (a5p >> mP - aA & 1) << 7 - (7 & aA);
		this.dx += size, this.dx > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQe = function(size, a5p) {
		var eu = size >> 1,
			ed = 1 << eu;
		this.a7(size - eu, bJ.dj(a5p, ed)), this.a7(eu, a5p % ed)
	}, this.aXG = function(size) {
		for (var aB = this.aB, mP = this.dx + size, aA = this.dx; aA < mP; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQf = function(aX9) {
		return aX9 + 7 >> 3
	}, this.aXH = function(g, j6, mP, aXI) {
		for (var aA = j6; aA < mP; aA++) this.a7(aXI, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dx = 0
	}, this.aR3 = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aXJ, value) {
		for (var g = this.g, mP = this.dx + aXJ - 1, aXK = 1 + (mP >> 3); g.length < aXK;) g.push(0);
		for (var aA = this.dx; aA <= mP; aA++) g[aA >> 3] |= (value >> mP - aA & 1) << 7 - (7 & aA);
		this.dx += aXJ
	}, this.db = function(g, vr, aXA) {
		var aXL = b8.pk.a1f(g);
		this.a7(vr, aXL);
		for (var aA = 0; aA < aXL; aA++) this.a7(aXA, g[aA])
	}, this.aSG = function(g, vr, aXC) {
		var aXL = b8.pk.a1f(g);
		this.a7(vr, aXL);
		for (var aA = 0; aA < aXL; aA++) this.aSE(g[aA], aXC)
	}, this.aSE = function(pI, vr) {
		var ea = pI.length;
		this.a7(vr, ea);
		for (var aA = 0; aA < ea; aA++) this.a7(16, pI.charCodeAt(aA))
	}, this.aSF = function(a1l) {
		var aXM = (a1l = a1l.toDataURL()).split(",");
		if (aXM.length < 2) console.log("error 266");
		else {
			a1l = b8.zW.a3B(a1l = aXM[aXM.length - 1], "/", "_"), a1l = b8.zW.a3B(a1l, "\\+", "-");
			var a1l = b8.zW.a3B(a1l, "=", ""),
				vA = bE.rt.v7(a1l),
				ea = vA.length;
			this.a7(30, ea);
			for (var aA = 0; aA < ea; aA++) this.a7(6, vA[aA])
		}
	}
}
a(), self.aiCommand746 = function(f2) {
	0 === f2 ? bo() : 1 !== f2 || !z || 1 !== z.id || z.dk < 14 || bH.f3()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};