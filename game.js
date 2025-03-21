var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, fa, iB, iA, iC, a6X, l4, ja, a0Q,
	tk, x7, aAN, a3a, a3b, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "<br>", "0.75em", "   ", "hidden", "flex", "Data", "1em", "0.8em", " / ", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"pre", "</a>", "pointer", "password", "function", "break-word", "bold", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "blur", "Space", "Player ", "NoStack",
		"<a href='", "50%", "1.2em", "1.0em", "0px", "0.4em", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)",
		"rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US",
		"data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Report", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1",
		"1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dg = 1095, this.n = 2065, this.rVersion = 9, this.dU = function() {
		this.dh = 2;
		var di = bJ.dj(this.n, 10) % 100;
		this.dk = "21 Mar 2025 [" + bJ.dj(this.n, 1e3) + "." + (di < 10 ? "0" : "") + di + "." + this.n % 10 + "]", this.a8 = true, this.a9 = function() {
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
	this.f4 = new Uint16Array(2), this.f5 = new Uint16Array(2), this.f6 = new Int32Array(2), this.f7 = new Uint32Array(2), this.f8 = new Uint32Array(2), this.f9 = new Uint8Array(4), this.fA = new Uint8Array(4), this.eb = new Uint32Array(4), this.fB =
		new Uint32Array(5), this.eW = new Uint32Array(8), this.fC = new Uint16Array(16), this.fD = new Uint16Array(512), this.fE = new Uint16Array(512), this.fF = new Uint16Array(512), this.fG = function(g, fH) {
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
			for (aA = 0; aA < ea; aA++) s3[aA][0].resize(), s3[aA][1].resize();
			for (qB[0].eh = 0, qB[0].button.style.left = b8.pb.pl(qB[0].eh), qB[0].button.style.width = b8.pb.sI(1.7 * j), aA = 1; aA < ea; aA++) qB[aA].eh = qB[aA - 1].eh + qB[aA - 1].button.offsetWidth, qB[aA].button.style.left = b8.pb.pl(qB[aA]
				.eh);
			if (!s4) {
				if (!aa.sJ()) return;
				(s4 = aa.get(14)).style.width = "24%", s4.style.position = "absolute", s1.appendChild(s4)
			}
			s4.style.left = b8.pb.pl(0), s4.style.top = "7%", s2.sK && (s2.scrollLeft = s2.sK)
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

function sL(sM, sN, sO, sP, qJ, qK) {
	var sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("div"),
		sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = document.createElement("div"),
		sY = document.createElement("span"),
		sZ = document.createElement("div");
	this.sa = new qI(qJ, qK), this.sb = new sc(qK), this.sd = [sM, sN, sO, sP], this.sh = function(si) {
		si = (si / 10).toFixed(1) + "%";
		sX.style.width = si, sY.innerHTML = si
	}, this.sj = function() {
		this.sb.qs(sV), this.sa.show(sV)
	}, this.sk = function() {
		this.sa.qs(sV), this.sb.show(sV)
	}, this.sl = function() {
		return sR
	}, this.show = function() {
		document.body.appendChild(sQ)
	}, this.qs = function() {
		document.body.removeChild(sQ)
	}, this.resize = function(sm) {
		var sn = 1 - .4 * z.a0.qz() * (h.i > 1.6 * h.j),
			so = b8.pb.qu(.05 * sn),
			sp = h.j > h.i,
			sq = b8.pb.qu(.07 * sn + .03 * sp),
			sr = b8.pb.qu(.04 + .02 * sp),
			sp = b8.pb.qu(.02 * sn + .01 * sp),
			st = b8.pb.qu(.025);
		sQ.style.font = b8.pb.rQ(0, st), sn < 1 && (st = b8.pb.rQ(0, sn * st), sS.style.font = st, sU.style.font = st, sZ.style.font = st, sW.style.font = st, sT.style.font = st), sR.style.height = b8.pb.pl(so), sR.style.font = b8.pb.rQ(0, .72 *
				so), b8.pb.pm(sR, 2), sS.style.top = b8.pb.pl(so), sS.style.height = b8.pb.pl(sq), b8.pb.pm(sS, 2), sT.style.font = b8.pb.rQ(0, sn * b8.pb.qu(.02)), sT.style.top = b8.pb.pl(so + sq), sT.style.height = b8.pb.pl(sr), b8.pb.pm(sT,
			2), sU.style.top = b8.pb.pl(so + sq + sr), sU.style.height = b8.pb.pl(sq), b8.pb.pm(sU, 2), sV.style.top = b8.pb.pl(so + sq + sr + sq), sV.style.height = b8.pb.pl(h.j / h.k - so - 3 * sq - sr - sp), sW.style.top = b8.pb.pl(h.j / h.k -
				sq - sp), sW.style.height = b8.pb.pl(sp), b8.pb.pm(sW, 8), sY.style.font = b8.pb.rQ(0, .8 * sp), sZ.style.top = b8.pb.pl(h.j / h.k - sq), sZ.style.height = b8.pb.pl(sq), b8.pb.pm(sZ, 8), sM.resize(sS), sN.resize(sS), sO.resize(
			sS), sP.resize(sS), sm ? this.sa.resize(sV) : this.sb.resize()
	};
	qJ = this;
	sQ.style.position = "absolute", sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.height = "100%", sQ.style.backgroundColor = b9.mg, bH.q4() || (sQ.style.backdropFilter = "blur(4px)", sQ.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sQ.style.display = "none"), sR.style.position = "absolute", sR.style.top = "0", sR.style.left = "0", sR.style.width = "100%", sR.style.display = "flex", sR.style.alignItems = "center";
	for (var g = [sS, sT, sU, sZ], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pb.s7(g[aA]);
	sV.style.position = "absolute", sV.style.left = "0", sV.style.width = "100%", sV.style.font = "inherit", sW.style.position = "absolute", sW.style.left = "0", sW.style.width = "100%", sX.style.position = "absolute", sX.style.top = "0", sX.style
		.left = "0", sX.style.height = "100%", sX.style.width = "50%", sX.style.backgroundColor = b9.n3, sY.innerHTML = "", sY.style.position = "absolute", sY.style.top = "50%", sY.style.left = "50%", sY.style.transform = "translate(-50%, -50%)", sR
		.appendChild(function() {
			var sg = document.createElement("h1");
			return sg.textContent = L(23), sg.style.margin = "0 auto 0.15em auto", sg.style.webkitTextStroke = "0.02em brown", sg.style.fontFamily = "Arial Black, Trebuchet MS", sg.style.fontSize = "inherit", sg.style.fontWeight = "inherit", sg
		}()), sS.appendChild(sM.pG), sT.appendChild(sN.pG), sU.appendChild(sO.pG), sW.appendChild(sX), sW.appendChild(sY), sZ.appendChild(sP.pG), sQ.appendChild(sR), sQ.appendChild(sS), sQ.appendChild(sT), sQ.appendChild(sU), sQ.appendChild(sV), sQ
		.appendChild(sW), sQ.appendChild(sZ), qJ.sb.show(sV)
}

function sc(qK) {
	var sQ = document.createElement("div"),
		sV = document.createElement("div");
	this.lS = function() {
			sV.textContent = "", bl.sv.qs(1);
			for (var qj = document.createDocumentFragment(), sw = bl.x.qe[0], sx = bl.sx.sy[sw], sz = bl.sx.sz[sw], aA = 0; aA < sx.length; aA++) ! function(qj, pT, t1, sw) {
				var qa = document.createElement("span");
				qa.textContent = (t1 ? "🟢 " : "⚪ ") + bl.ql.t2(pT, sw), qa.style.color = bl.ql.t3(pT.t4), qa.style.cursor = "pointer", qa.style.margin = "0.2em 0.2em 0.2em 0.2em", qa.style.width = qa.style.maxWidth = 2 === sw ? "10em" : "9em",
					qa.style.height = qa.style.maxHeight = "1.4em", qa.style.whiteSpace = "nowrap", qa.style.overflow = "hidden", qa.style.textOverflow = "ellipsis", qa.style.font = "inherit", qa.style.display = "inline-block", bl.ql.t5(pT) && (
						qa.style.textDecoration = "underline"), qa.onclick = function(e) {
						qK(e, pT)
					}, bH.q4() || (qa.onmouseover = function(e) {
						bl.sv.t6(e, pT, 1)
					}), qj.appendChild(qa)
			}(qj, sx[aA], aA < sz, sw);
			sV.appendChild(qj)
		}, this.show = function(pV) {
			pV.appendChild(sQ)
		}, this.qs = function(pV) {
			pV.removeChild(sQ)
		}, this.resize = function() {
			sV.style.fontSize = b8.pb.pl(b8.pb.qu(.02, .3))
		}, sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = sQ.style.height = "100%", sQ.style.overflowX = "hidden", sQ.style.overflowY = "auto", sQ.style.font = "inherit", sV.style.font = "inherit", sV.style.margin = "0.4em", sQ
		.appendChild(sV)
}

function t7(t8) {
	var sQ = document.createElement("div"),
		qN = document.createElement("div"),
		t9 = [];

	function pz() {
		bH.q4() || (this.style.backgroundColor = b8.color.q7(b9.md, 50))
	}

	function q0() {
		this.style.backgroundColor = b9.md
	}
	this.r4 = function(tB, tC) {
			t9[2].textContent = tB + 1 + " / " + tC
		}, this.show = function(pT) {
			qN.appendChild(bl.qr.transform(bl.ql.qm(pT, bl.ql.qn(pT)))), document.body.appendChild(sQ)
		}, this.resize = function() {
			var j = b8.pb.qu(.03, .5);
			sQ.style.width = 10 * j + "px", sQ.style.font = b8.pb.rQ(1, .75 * j), b8.pb.pm(sQ, 4), qN.style.top = j + "px", qN.style.font = b8.pb.rQ(0, .55 * j), b8.pb.pm(qN, 2), sQ.style.height = j + qN.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pb.pm(t9[aA], 6), t9[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) t9[aA].style.height = j + "px", b8.pb.pm(t9[aA], 2);
			t9[2].style.width = 4 * j + "px", t9[1].style.left = 2 * j + "px", t9[2].style.left = 4 * j + "px", t9[3].style.left = 8 * j + "px"
		}, this.tD = function() {
			for (var aA = 0; aA < 4; aA++) t9[aA].onclick = null, t9[aA].onmouseover = null, t9[aA].onmouseout = null;
			document.body.removeChild(sQ), sQ = qN = t9 = null
		}, sQ.style.position = "absolute", sQ.style.color = b9.mh, sQ.style.zIndex = "3", sQ.style.right = "0", sQ.style.top = "0", qN.style.position = "absolute", qN.style.height = "auto", qN.style.color = b9.mh, qN.style.backgroundColor = b9.md, qN
		.style.left = "0", qN.style.width = "100%", qN.style.overflowWrap = "break-word", sQ.appendChild(qN);
	for (var aA = 0; aA < 4; aA++) t9[aA] = document.createElement("div"), t9[aA].style.position = "absolute", t9[aA].style.backgroundColor = b9.md, t9[aA].style.color = b9.mh, t9[aA].style.top = "0", t9[aA].style.display = "flex", t9[aA].style
		.justifyContent = "center", t9[aA].style.alignItems = "center", t9[aA].style.userSelect = "none", t9[aA].style.outline = "none", t9[aA].style.font = "inherit", 2 !== (t9[aA].tA = aA) && (t9[aA].onclick = t8, t9[aA].onmouseover = pz, t9[aA]
			.onmouseout = q0), sQ.appendChild(t9[aA]);
	t9[0].textContent = "◀", t9[1].textContent = "▶", t9[3].textContent = "✖"
}

function tE(t8) {
	var rI = document.createElement("div");

	function pz() {
		bH.q4() || (rI.style.backgroundColor = b8.color.q7(b9.md, 50))
	}

	function q0() {
		rI.style.backgroundColor = b9.md
	}
	this.r4 = function(tC) {
			rI.textContent = tC
		}, this.show = function() {
			document.body.appendChild(rI)
		}, this.resize = function() {
			var j = b8.pb.qu(.03, .5);
			rI.style.width = 2 * j + "px", rI.style.height = j + "px", rI.style.font = b8.pb.rQ(1, .75 * j), b8.pb.pm(rI, 4), b8.pb.pm(rI, 2)
		}, this.tD = function() {
			rI.onclick = null, rI.onmouseover = null, rI.onmouseout = null, document.body.removeChild(rI), rI = null
		}, rI.style.position = "absolute", q0(), rI.style.color = b9.mh, rI.style.zIndex = "3", rI.style.right = "0", rI.style.top = "0", rI.style.display = "flex", rI.style.justifyContent = "center", rI.style.alignItems = "center", rI.style
		.userSelect = "none", rI.style.outline = "none", rI.onclick = t8, rI.onmouseover = pz, rI.onmouseout = q0
}

function tF(rA) {
	var sQ = document.createElement("div"),
		tG = document.createElement("div"),
		rJ = (this.eh = 0, this.ej = 0);

	function tI() {
		bl.tJ.qs()
	}
	this.qB = rA, this.show = function(eh, ej, tL) {
		if (rJ) return [0, 0];
		rJ = 1, this.eh = eh, this.ej = ej,
			function(self, tL) {
				var i = b8.pb.qu(.16, .7),
					j = rA.length * i / 3,
					tN = h.i / h.k,
					tO = h.j / h.k,
					mJ = Math.min(1, Math.min(tN / i, tO / j));
				i *= mJ, j *= mJ, tL && (self.eh += b8.pb.qu(.03, .5)), self.eh = bJ.p9(self.eh, 0, tN - i), self.ej = bJ.p9(self.ej, 0, tO - j), tG.style.left = self.eh + "px", tG.style.top = self.ej + "px", tG.style.width = i + "px", tG.style
					.height = j + "px", tG.style.font = b8.pb.rQ(0, .34 * j / rA.length), b8.pb.pm(tG, 5);
				for (var aA = 1; aA < rA.length; aA++) b8.pb.pm(rA[aA].button, 8)
			}(this, tL), document.body.appendChild(sQ)
	}, this.qs = function() {
		rJ && (rJ = 0, sQ.removeEventListener("click", tI), document.body.removeChild(sQ))
	};
	for (var aA = 0; aA < rA.length; aA++) new qZ("" + (1 + aA), rA[aA].button, 0, 1);
	sQ.style.position = "fixed", sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.height = "100%", sQ.style.zIndex = "5", tG.style.position = "absolute",
		function() {
			for (var tK = (100 / rA.length).toFixed(2) + "%", aA = 0; aA < rA.length; aA++) rA[aA].button.style.width = "100%", rA[aA].button.style.height = rA[aA].button.style.maxHeight = tK, rA[aA].button.style.padding = "0.0em 0.9em", tG
				.appendChild(rA[aA].button)
		}(), sQ.appendChild(tG), sQ.addEventListener("click", tI)
}

function tP(rU, tQ) {
	this.pR = [];
	var tR = this.pR;

	function click() {
		for (var aA = 0; aA < tR.length; aA++) tR[aA].textContent = tR[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dx = parseInt(this.name);
		void 0 !== rU.dx && bh.r3.r4(rU.dx, dx), tQ && tQ(dx)
	}
	for (var tS, ea = rU.tT.length, aA = 0; aA < ea; aA++)(tS = document.createElement("p")).textContent = "⚪ " + rU.tT[aA], tS.style.margin = "0", tS.name = "" + aA, tS.style.cursor = "pointer", tS.style.fontSize = "1em", tS.addEventListener(
		"click", click), tR.push(tS);
	tR[rU.value].textContent = tR[rU.value].textContent.replace("⚪", "🟢")
}

function tU(title, tV, tW) {
	var s0 = document.createElement("div"),
		tX = document.createElement("div"),
		rd = document.createElement("div"),
		tY = document.createElement("div"),
		tZ = document.createElement("div");
	this.ta = rd, this.tb = tV, this.show = function() {
			!1 !== tW ? document.body.appendChild(s0) : (document.body.appendChild(tX), document.body.appendChild(tY))
		}, this.qs = function() {
			!1 !== tW ? document.body.removeChild(s0) : (document.body.removeChild(tX), document.body.removeChild(tY))
		}, this.tf = function() {
			var qv = b8.pb.qu(.1),
				qt = b8.pb.qu(.08 + .04 * (h.tg < 1));
			return {
				qv: qv,
				qt: qt,
				th: h.j / h.k - qv - qt
			}
		}, this.resize = function(rE) {
			var ea = tV.length,
				ti = this.tf(),
				qv = ti.qv,
				qt = ti.qt;
			for (tX.style.height = b8.pb.pl(qv), b8.pb.pm(tX, 2), tY.style.top = b8.pb.pl(h.j / h.k - qt), tY.style.height = b8.pb.pl(qt), b8.pb.pm(tY, 8), rd.style.top = b8.pb.pl(qv), rd.style.height = rd.style.maxHeight = b8.pb.pl(ti.th), tX.style
				.font = b8.pb.rQ(0, b8.pb.qu(.02, .3)), tY.style.font = b8.pb.rQ(0, b8.pb.qu(.02, .7)), rd.style.font = b8.pb.rQ(0, b8.pb.qu(.02, .7)), aA = 1; aA < ea; aA++) b8.pb.pm(tV[aA].button, 4);
			for (var rF = 0, aA = 0; aA < ea; aA++) rF += tV[aA].button.offsetWidth;
			if (rE && rF < tY.offsetWidth)
				for (aA = 0; aA < ea; aA++) tV[aA].button.style.width = (100 * tV[aA].button.offsetWidth / rF).toFixed(2) + "%";
			else
				for (aA = 0; aA < ea; aA++) tV[aA].button.style.width = "auto";
			tY.sK && (tY.scrollLeft = tY.sK), rE || this.resize(!0)
		}, this.tj = function() {
			var ti = this.tf(),
				ev = h.k;
			tk.fillStyle = b9.md, tk.fillRect(0, ev * ti.qv, h.i, ev * ti.th)
		}, s0.style.position = "absolute", s0.style.top = "0", s0.style.left = "0", s0.style.width = "100%", s0.style.height = "100%", tX.style.position = "absolute", tX.style.top = "0", tX.style.left = "0", tX.style.width = "100%", tX.style
		.display = "flex", tX.style.backgroundColor = b9.md, tY.style.position = "absolute", tY.style.left = "0", tY.style.width = "100%", b8.pb.s7(tY), tZ.style.height = tZ.style.maxHeight = "100%", rd.style.position = "absolute", rd.style.width =
		"100%", rd.style.backgroundColor = b9.md,
		function() {
			for (var aA = 0; aA < tV.length; aA++) tV[aA].button.style.height = "100%", tV[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tV.length; aA++) tZ.appendChild(tV[aA].button);
	tX.appendChild(function() {
		var te = document.createElement("h1");
		return te.textContent = title, te.style.margin = "auto", te.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", te.style.webkitTextStroke = "0.02em brown", te.style.fontFamily = "Arial Black, Trebuchet MS", te
	}()), tY.appendChild(tZ), !1 !== tW && (s0.appendChild(rd), s0.appendChild(tX), s0.appendChild(tY))
}

function qZ(tl, tm, tn, to) {
	var self;
	this.qa = document.createElement("span"), (self = this).qa.textContent = tl, self.qa.style.color = b9.mh, self.qa.style.position = "absolute", self.qa.style.font = "inherit", to ? self.qa.style.bottom = "0.06em" : self.qa.style.top = "0.12em",
		tn ? self.qa.style.left = "0.2em" : self.qa.style.right = "0.2em", self.qa.style.fontSize = "0.6em", self.qa.style.pointerEvents = "none", self.qa.style.whiteSpace = "pre", tm.style.position = "relative", tm.style.overflow = "hidden", tm
		.appendChild(self.qa)
}

function s9(tl, tm, tp, tq, tr) {
	var self;
	this.qa = document.createElement("span"), this.resize = function() {
			this.qa.style.fontSize = ((tq - tp) * tm.offsetHeight).toFixed(1) + "px"
		}, (self = this).qa.textContent = tl, self.qa.style.color = b9.mh, self.qa.style.font = "inherit", self.qa.style.margin = "0.1em 0.6em", self.qa.style.pointerEvents = "none", tr && (self.qa.style.fontWeight = "bold"), self.qa.style
		.whiteSpace = "nowrap", self.qa.style.display = "block", tm.appendChild(self.qa)
}

function ts(tt, tu, tv, tw) {
	var tx = document.createElement("textarea"),
		ty = (this.e = tx, !0);

	function u4() {
		tx.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tu && b8.pb.pm(tx, 5)
		}, this.tz = function(u0) {
			tx.value = u0
		}, this.u1 = function() {
			return tx.value
		}, this.u2 = function() {
			tx.select()
		}, this.clear = function() {
			tx.value = ""
		}, this.u3 = function() {
			ty && navigator.clipboard ? (tx.select(), navigator.clipboard.writeText(tx.value).catch(function() {
				ty = !1, u4()
			})) : u4()
		}, tx.setAttribute("id", "textArea" + s.x.rX++), tx.setAttribute("autocomplete", "off"), tt && tx.setAttribute("placeholder", tt), tx.style.top = "0", tx.style.left = "0", tx.style.width = "100%", tx.style.height = "100%", tx.style
		.userSelect = "none", tx.style.outline = "none", tx.style.resize = "none", tx.style.border = "none", tx.style.color = b9.mh, tx.style.backgroundColor = b9.ma, tw ? (tx.style.fontSize = "1em", tx.rows = 6, tx.style.padding = "0.25em") : (tx
			.style.padding = "0.45em", tx.style.fontSize = "1.2em"), tv && tx.addEventListener("input", function(e) {
			tv(e)
		}), tx.addEventListener("focus", function() {
			h.rY++
		}), tx.addEventListener("blur", function() {
			h.rY--
		})
}

function dC() {
	this.pt = new u5, this.e7 = new u6, this.r3 = new u7, this.x = new u8, this.dU = function() {
		this.e7.dU(), (new u9).dU()
	}
}

function u6() {
	function uA(aA, type, uH, dk) {
		bh.e7.data.push({
			dx: aA,
			type: type || 0,
			value: uH || 0,
			uH: uH || 0,
			dk: dk || 0
		})
	}

	function uB(aA, type, uH, dk) {
		bh.e7.data.push({
			dx: aA,
			type: type,
			value: uH || "",
			uH: uH || "",
			dk: dk || 0
		})
	}

	function uC(mP) {
		for (var aA = bh.e7.data.length; aA < mP; aA++) bh.e7.data.push(null)
	}
	this.data = [], this.dU = function() {
		uA(0, 1, 0, 5), uA(1, 1, 1), uA(2, 0), uB(3, 2), uA(4, 1), uB(5, 2, "Trebuchet MS", 1), uA(6, 0), uA(7, 0, 0), uA(8, 0), uA(9, 1, 1), uA(10, 1), uA(11, 1, 1), uB(12, 2, navigator.language), uA(13), uA(14), uC(100), uB(100, 2), uB(101, 2),
			uB(102, 2), uB(103, 2), uB(104, 2), uB(105, 2), uB(106, 2), uA(107), uA(108), uA(109), uB(110, 2), uA(111), uA(112), uA(113), uB(114, 2), uA(115), uB(116, 2), uA(117, 1), uB(118, 2, "", 2), uA(119, 1, 0, 1), uB(120, 2), uA(121, 1, ~~(
				262144 * Math.random())), uB(122, 2, "Player " + Math.floor(1e3 * Math.random())), uA(123), uB(124), uA(125, 1), uB(126, 2), uA(127, 0, 1), uA(128), uA(129), uA(130), uA(131), uA(132), uB(133, 2), uA(134, 0, 5), uB(135, 2), uB(
				136, 2), uA(137), uA(138), uA(139), uA(140), uA(141), uA(142), uA(143), uA(144), uB(145, 2), uA(146), uA(147), uB(148, 2), uA(149), uA(150, 0, 1), uB(151, 2), uA(152, 0, 5), uA(153, 1), uA(154, 1), uB(155, 2), uB(156, 2), uA(157),
			uA(158), uA(159), uA(160), uC(180), uA(180, 0), uA(181, 0)
	}, this.r4 = function(dx, value) {
		this.data[dx].value = value
	}, this.uD = function(dx, value) {
		this.r4(dx, value), bh.pt.save(dx, String(value)), bh.pt.save(dx, String(this.data[dx].dk), !0)
	}, this.uE = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pt.save(aA, String(this.data[aA].value)), bh.pt.save(aA, String(this.data[aA].dk), !0))
	}, this.uF = function(dx) {
		return Number(this.data[dx].value)
	}, this.uG = function(dx) {
		return String(this.data[dx].value)
	}
}

function u5() {
	this.uI = function(dx, dk) {
		return Number(this.uJ(dx, dk))
	}, this.uJ = function(dx, dk) {
		var f2 = null;
		return 0 === z.id ? z.uK && (f2 = z.uK.getItem((dk ? "v" : "d") + dx)) : 1 === z.id ? f2 = z.uL.loadString((dk ? 1e3 : 2e3) + dx) : 2 === z.id && (f2 = z.uM[(dk ? "v" : "d") + dx]), f2 && 0 !== f2.length ? f2 : null
	}, this.uN = function(ea, uO) {
		var g = [],
			uP = uO ? "e" : "l";
		if (0 === z.id) {
			if (z.uK)
				for (aA = 0; aA < ea; aA++) g.push(z.uK.getItem(uP + aA))
		} else if (1 === z.id)
			for (var uQ = uO ? 5e3 : 3e3, aA = 0; aA < ea; aA++) g.push(z.uL.loadString(uQ + aA));
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) g.push(z.uM[uP + aA]);
		return g
	}, this.save = function(dx, value, dk) {
		var uR = (dk ? "v" : "d") + dx;
		if (0 === z.id) {
			if (z.uK && bh.e7.data[140].value) try {
				z.uK.setItem(uR, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uL.saveString((dk ? 1e3 : 2e3) + dx, value) : 2 === z.id && (z.uM[uR] = value, z.uS.postMessage(uR + " " + value))
	}, this.uT = function(g, uO) {
		var ea = g.length,
			uP = uO ? "e" : "l";
		if (0 === z.id) {
			if (z.uK && bh.e7.data[140].value) try {
				for (aA = 0; aA < ea; aA++) z.uK.setItem(uP + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uQ = uO ? 5e3 : 3e3, aA = 0; aA < ea; aA++) z.uL.saveString(uQ + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < ea; aA++) z.uM[uP + aA] = g[aA], z.uS.postMessage(uP + aA + " " + g[aA])
	}
}

function u9() {
	this.dU = function() {
		! function() {
			var data = bh.e7.data;
			0 === data[2].dk && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uH = 1);
			0 === data[100].dk && (data[100].value = data[100].uH = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f2, data = bh.e7.data,
			ea = data.length;
		for (aA = 0; aA < ea; aA++) data[aA] && data[aA].dk === bh.pt.uI(aA, !0) && (f2 = bh.pt.uJ(aA), data[aA].value = null === f2 ? data[aA].uH : 2 === data[aA].type ? f2 : Number(f2))
	}
}

function u8() {
	function uZ(g) {
		if (0 === g.length) bh.r3.r4(116, "");
		else {
			for (var uc = g[0], aA = 1; aA < g.length; aA++) uc += ";" + g[aA];
			bh.r3.r4(116, uc)
		}
	}
	this.uW = function() {
		bh.e7.data[110].value.length && (bh.e7.data[106].value = bh.e7.data[110], bh.r3.r4(110, ""), this.uX())
	}, this.uX = function() {
		var g = bh.e7.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.e7.data[106].value), g.unshift(bh.e7.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uY = [], aA = 0; aA < g.length; aA += 2) uY.push(g[aA]);
		uZ(g), bh.e7.data[117].value = 0, bh.e7.data[117].tT = uY
	}, this.ua = function(dx) {
		bh.e7.data[117].tT.splice(dx, 1), bh.e7.data[117].value = Math.min(dx, bh.e7.data[117].tT.length - 1);
		var g = bh.e7.data[116].value.split(";");
		g.splice(2 * dx, 2), uZ(g)
	}, this.ub = function(dx) {
		var g = bh.e7.data[116].value.split(";");
		return {
			ro: g[2 * dx],
			password: g[2 * dx + 1]
		}
	}, this.ud = function() {
		var f2 = bJ.p9(bh.e7.data[121].value, -1, 262143);
		return f2 = -1 === f2 ? ~~(262144 * Math.random()) : f2
	}
}

function u7() {
	this.r4 = function(dx, value) {
		bh.e7.data[dx].value !== value && (bh.e7.uD(dx, value), 0 === dx ? (s.w(), b5.dU(), s.t(2)) : 1 === dx ? h.df(1) : 2 === dx ? h.df(0) : 5 === dx && (b8.pb.ue(), h.df(0)))
	}, this.uf = function() {
		for (var data = bh.e7.data, aA = 0; aA < 100; aA++) data[aA] && bh.e7.uD(aA, data[aA].uH);
		b8.pb.ue(), h.df(1), b5.dU()
	}, this.ug = function() {
		for (var data = bh.e7.data, aA = 0; aA < data.length; aA++) data[aA] && bh.e7.r4(aA, data[aA].uH)
	}, this.uh = function() {
		for (var eu = bh.e7, aA = 128; aA < 135; aA++) eu.uD(aA, eu.data[aA].uH)
	}, this.ui = function(data) {
		bh.r3.r4(109, data.rp), bh.r3.r4(107, data.uj), bh.r3.r4(108, data.uk), bh.r3.r4(112, data.ul), bh.r3.r4(111, data.um), bh.r3.r4(113, data.un), bh.r3.r4(135, data.uo), bh.r3.r4(136, data.up), bh.r3.r4(137, data.uq), bh.r3.r4(138, data
			.ur), bh.r3.r4(139, data.us), bh.r3.r4(141, data.ut), bh.r3.r4(142, data.uu), bh.r3.r4(143, data.uv), bh.r3.r4(144, data.uw)
	}
}

function bz() {
	this.rt = new ux, this.uy = new uz, this.v0 = new v1, this.dU = function() {
		this.rt.dU()
	}
}

function uz() {
	this.v2 = function(size) {
		for (var v3 = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v3.oc(16)));
		return g.join("")
	}, this.v4 = function(pI) {
		return 20 < (pI = pI.trim()).length ? pI.substring(0, 20) : pI
	}
}

function ux() {
	var v5 = new Uint8Array(78);
	this.dU = function() {
		var aA;
		for (v5[50] = 37, aA = 0; aA < 10; aA++) v5[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) v5[aA + 20] = aA + 11, v5[aA + 52] = aA + 38
	}, this.v6 = function(pI) {
		return pI.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v7 = function(pI, size) {
		if ((pI = this.v6(pI)).length > size) return pI.substring(0, size);
		for (; pI.length < size;) pI = "-" + pI;
		return pI
	}, this.v8 = function(pI) {
		for (var v9 = v5, ea = pI.length, g = new Uint8Array(ea), aA = 0; aA < ea; aA++) g[aA] = v9[pI.charCodeAt(aA) - 45];
		return g
	}, this.vA = function(vB) {
		bB.a6(6 * vB.length), this.vC(vB), bF.dU(bB.aB)
	}, this.vC = function(vB) {
		for (var ea = vB.length, i = bB, aA = 0; aA < ea; aA++) i.a7(6, vB[aA])
	}, this.vD = function(pI) {
		this.vC(this.v8(pI))
	}, this.vE = function(pI, size) {
		this.vC(this.v8(this.v7(pI, size)))
	}, this.vF = function(pI, size) {
		for (var g = this.v8(this.v7(pI, size)), f2 = 0, mJ = 1, aA = g.length - 1; 0 <= aA; aA--) f2 += mJ * g[aA], mJ *= 64;
		return f2
	}
}

function vG() {
	var i, j, vH;

	function vh(gz, ed, vf, vM, va) {
		ed = vg(gz, ed + 1 + 2 * vM & 3);
		! function(gz, vi) {
			return 1 < Math.abs(gz % i - vi % i) || 1 < Math.abs(vl(gz) - vl(vi))
		}(gz, ed) && 0 === va[ed << 2] && (va[ed << 2] = vf)
	}

	function vl(g7) {
		return Math.floor((g7 + .5) / i) % j
	}

	function vg(g7, ed) {
		return g7 + vH[ed]
	}
	this.vI = function(pI) {
		var aA, vJ, ea, vK, v3 = bF;
		for (bE.rt.vA(bE.rt.v8(pI)), bQ.vN.vO[bQ.eG].i = bQ.el = i = v3.oc(12), bQ.vN.vO[bQ.eG].j = bQ.em = j = v3.oc(12), vH = [-i, -1, i, 1], bQ.vX = document.createElement("canvas"), bQ.vX.width = bQ.el, bQ.vX.height = bQ.em, bQ.vT = bQ.vX
			.getContext("2d", {
				alpha: !1
			}), bQ.vU = bQ.vY = null, bQ.vU = bQ.vT.getImageData(0, 0, bQ.el, bQ.em), bQ.vY = bQ.vU.data, b8.pk.vZ(bQ.vY), ea = v3.oc(12), vJ = v3.oc(5), vK = vQ(i * j - 1), aA = 0; aA < ea; aA++) ! function(kX, g7, vL, vM) {
			var aA, ed, v3 = bF,
				va = bQ.vY,
				vb = g7,
				vc = g7,
				vd = 0,
				ve = 1 + vL,
				vf = 2 - vL;
			for (va[g7 << 2] = ve, aA = 0; aA < kX; aA++) ed = v3.oc(2), g7 = vg(g7, ed), va[g7 << 2] === ve ? vd % 2 == 1 && vh(vc, vd + 2 * vM + 3, vf, vM, va) : va[g7 << 2] = ve, vh(g7, ed, vf, vM, va), vh(vc, ed, vf, vM, va), vc = g7,
				vd = ed;
			vg(g7, 0) === vb ? (vh(g7, 0, vf, vM, va), vh(vb, 0, vf, vM, va)) : vg(g7, 1) === vb && (vh(g7, 0, vf, vM, va), vh(vb, 2, vf, vM, va));
			0 === kX && (vh(vb, 0, vf, vM, va), vh(vb, 2, vf, vM, va))
		}(v3.oc(vJ), v3.oc(vK), 1 === v3.oc(1), 1 === v3.oc(1));
		var eh, ej, hN, vm, vn, vo, va = bQ.vY,
			vp = !0,
			vq = bQ.vN.vO[bQ.eG].vq,
			vr = bQ.vN.vO[bQ.eG].vr;
		for (ej = 0; ej < j; ej++)
			for (vm = !0, vn = vp, eh = vo = 0; eh < i; eh++) hN = 4 * ej * i + 4 * eh, vo <= eh && 0 < va[hN] && (vn = 2 === va[hN], vm) && (vm = !1, vn !== vp) ? (vp = vn, vo = eh + 1, eh = -1) : (vn ? (va[hN] = vr[0], va[1 + hN] = vr[1], va[
				2 + hN] = vr[2]) : (va[hN] = vq[0], va[1 + hN] = vq[1], va[2 + hN] = vq[2]), va[3 + hN] = 255);
		bQ.vT.putImageData(bQ.vU, 0, 0), bQ.vV = !0, bQ.vW.dU(), bd.dc = !0
	}
}

function v1() {
	this.vI = function(vs) {
		for (var v3 = bF, size = v3.oc(vs), vt = 7 + 9 * v3.oc(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v3.oc(vt)));
		return g.join("")
	}
}

function c4() {
	var rL, rM, vu, vv, vw, vx, vy, vz, w0, w1;

	function w3() {
		var w6 = aC.w6;
		for (w0 = w6; w0 < aC.eX; w0++) w2();
		for (w0 = aC.gv ? aC.jp : 0; w0 < w6; w0++) {
			if (!w7()) {
				for (var eu = aC.wB = w0; eu < w6; eu++) w0 = eu, w2();
				return
			}
			wA(vx + rL * vw + bJ.dj(vw, 2), vy + rM * vw + bJ.dj(vw, 2))
		}
	}

	function wd(player) {
		for (var iO = af.iO, iQ = af.iQ, iP = af.iP, iR = af.iR, ej = iQ[player]; ej <= iR[player]; ej++)
			for (var eh = iO[player]; eh <= iP[player]; eh++) {
				var eE = ab.we(eh, ej);
				ab.g9(eE) && (ab.j2(eE) ? ab.g4(eE, player) : ab.wf(eE, player))
			}
	}

	function wc(g, sB, sC) {
		var di = g[sB];
		g[sB] = g[sC], g[sC] = di
	}

	function w7() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rL = bJ.dj(vu * aw.random(), aw.value(100)), rM = bJ.dj(vv * aw.random(), aw.value(100)), wk()) return 1;
			return
		}() || function() {
			var hv, hy, et, w9, eu, w8;
			for (hv = bJ.dj(vu * aw.random(), aw.value(100)), hy = bJ.dj(vv * aw.random(), aw.value(100)), et = 40; 1 <= et; et--)
				for (w9 = vv - et; 0 <= w9; w9 -= 40)
					for (rM = (w9 + hy) % vv, eu = 40; 1 <= eu; eu--)
						for (w8 = vu - eu; 0 <= w8; w8 -= 40)
							if (rL = (w8 + hv) % vu, wk()) return 1;
			return
		}()
	}

	function wk() {
		for (var g7, wm, gap = bJ.dj(vw - vz, 2), wn = vy + rM * vw + gap, wo = vx + rL * vw + gap, wl = wn + vz - 1; wn <= wl; wl--)
			for (wm = wo + vz - 1; wo <= wm; wm--)
				if (g7 = ab.we(wm, wl), !ab.eV(g7) || ab.j2(g7)) return;
		return 1
	}

	function wA(w8, w9) {
		w2(), wp(w8 - 2, w9 - 2)
	}

	function w2() {
		af.lf[w0] = 0, af.gN[w0] = af.wa[w0] = 0, af.g1[w0] = [], af.gF[w0] = [], af.gG[w0] = [], af.f0[w0] = [], af.iO[w0] = af.iQ[w0] = af.iP[w0] = af.iR[w0] = 0
	}

	function wp(w8, w9) {
		var g7, aA, wq, wr;
		for (af.lf[w0] = 1, af.iO[w0] = w8 + 10, af.iQ[w0] = w9 + 10, af.iR[w0] = af.iP[w0] = 0, wq = w8; wq < w8 + 4; wq++)
			for (wr = w9; wr < w9 + 4; wr++)(w8 < wq && wq < w8 + 3 || w9 < wr && wr < w9 + 3) && (g7 = ab.we(wq, wr), ab.eV(g7)) && (af.iO[w0] = Math.min(wq, af.iO[w0]), af.iP[w0] = Math.max(wq, af.iP[w0]), af.iQ[w0] = Math.min(wr, af.iQ[w0]), af
				.iR[w0] = Math.max(wr, af.iR[w0]), w1[af.gN[w0]] = g7, af.gN[w0]++, ab.wf(g7, w0));
		for (af.wa[w0] = af.gN[w0], aA = af.gN[w0] - 1; 0 <= aA; aA--) ab.ws(w1[aA], w0) ? (ab.g4(w1[aA], w0), af.gF[w0].push(w1[aA])) : ab.wt(w1[aA]) ? (ab.g4(w1[aA], w0), af.gG[w0].push(w1[aA])) : ab.wu(w1[aA]) && (ab.g4(w1[aA], w0), af.f0[w0]
			.push(w1[aA]))
	}

	function wj(w8, w9) {
		for (var g7, wm, wl = w9; w9 - 6 < wl; wl--)
			for (wm = w8; w8 - 6 < wm; wm--)
				if (g7 = ab.we(wm, wl), ab.j2(g7)) return;
		return 1
	}
	this.dU = function() {
		if (w1 = new Array(12), vz = 6, vw = 10, vu = bJ.dj(bQ.el, vw), vv = bJ.dj(bQ.em, vw), vx = bJ.dj(bQ.el - vw * vu, 2), vy = bJ.dj(bQ.em - vw * vv, 2), aC.gv)
			for (var aA = 0; aA < aC.jp; aA++) w0 = aA, w2(), af.lf[w0] = 1;
		(0 === aC.data.spawningType ? w3 : 1 === aC.data.spawningType ? (w3(), function() {
			var wC = aC.wD;
			aC.wE || wC++;
			if (!(wC < 3)) {
				for (var data = aC.data, j6 = (aC.gv ? aC.jp : 0) + data.teamPlayerCount[0], mP = aC.wB, wF = new Uint32Array(wC), wG = new Uint32Array(wC), wH = new Uint16Array(wC), wI = new Uint16Array(wC), eY = be.eY, iO = af.iO, iQ =
						af.iQ, iP = af.iP, iR = af.iR, fE = bM.fE, fF = bM.fF, aA = j6; aA < mP; aA++) fE[aA] = iO[aA] + iP[aA] >> 1, fF[aA] = iQ[aA] + iR[aA] >> 1;
				for (aA = j6; aA < mP; aA++) {
					var id = eY[aA];
					wF[id] += fE[aA], wG[id] += fF[aA]
				}
				var kB = be.kB;
				for (aA = 1; aA < wC; aA++) {
					var g2 = Math.max(data.teamPlayerCount[kB[aA]], 1);
					wH[aA] = bJ.dj(wF[aA], g2), wI[aA] = bJ.dj(wG[aA], g2)
				}
				var wJ = be.wJ,
					wK = be.wK,
					wL = be.wL,
					fD = bM.fD;
				for (aA = 0; aA < 512; aA++) fD[aA] = aA;
				for (var dw = 0; dw < 2 + (4 <= wC); dw++)
					for (aA = j6; aA < mP; aA++) {
						for (var gz = aA, wM = fD[gz], wN = 1, eq = bJ.wO(fE[wM] - wH[1], fF[wM] - wI[1]), et = 2; et < wC; et++) {
							var wP = bJ.wO(fE[wM] - wH[et], fF[wM] - wI[et]);
							wP < eq && (eq = wP, wN = et)
						}
						var wQ = eY[gz];
						if (wN !== wQ) {
							if (2 === dw && 4 <= wC) {
								var wR = Math.max((wN + 1) % wC, 1),
									wS = bJ.wO(fE[wM] - wH[wR], fF[wM] - wI[wR]);
								for (et = 1; et < wC; et++) wP = bJ.wO(fE[wM] - wH[et], fF[wM] - wI[et]), eq < wP && wP < wS && (wS = wP, wR = et);
								wR !== wQ && bJ.wO(wH[wQ] - wH[wR], wI[wQ] - wI[wR]) < bJ.wO(wH[wQ] - wH[wN], wI[wQ] - wI[wN]) && (wN = wR)
							}
							var wT = kB[wN],
								wU = wK[wT] + (aC.gv ? 0 : wL[wT]),
								vi = wJ[wU],
								wV = fD[vi],
								wW = wK[wT + 1];
							eq = bJ.wO(fE[wV] - wH[wQ], fF[wV] - wI[wQ]);
							for (var ev = wU + 1; ev < wW; ev++) {
								var wX = wJ[ev],
									wY = fD[wX];
								(wP = bJ.wO(fE[wY] - wH[wQ], fF[wY] - wI[wQ])) < eq && (eq = wP, vi = wX)
							}
							vi < j6 || mP <= vi || (wV = fD[vi], wF[wQ] += fE[wV] - fE[wM], wG[wQ] += fF[wV] - fF[wM], wF[wN] += fE[wM] - fE[wV], wG[wN] += fF[wM] - fF[wV], g2 = data.teamPlayerCount[kB[wQ]], wH[wQ] = bJ.dj(wF[wQ], g2),
								wI[wQ] = bJ.dj(wG[wQ], g2), g2 = data.teamPlayerCount[wT], wH[wN] = bJ.dj(wF[wN], g2), wI[wN] = bJ.dj(wG[wN], g2), fD[gz] = wV, fD[vi] = wM)
						}
					}! function() {
						for (var fD = bM.fD, iO = af.iO, iQ = af.iQ, iP = af.iP, iR = af.iR, gN = af.gN, wa = af.wa, gF = af.gF, gG = af.gG, f0 = af.f0, aA = 0; aA < 512; aA++) {
							var wb = fD[aA];
							if (wb !== aA) {
								wc(iO, aA, wb), wc(iQ, aA, wb), wc(iP, aA, wb), wc(iR, aA, wb), wc(gN, aA, wb), wc(wa, aA, wb), wc(gF, aA, wb), wc(gG, aA, wb), wc(f0, aA, wb), wd(aA), wd(wb), fD[aA] = aA;
								for (var j = wb, g8 = fD[j]; g8 !== aA;) g8 = fD[j = g8];
								fD[j] = wb
							}
						}
					}()
			}
		}) : function() {
			var w6 = aC.w6;
			for (w0 = w6; w0 < aC.eX; w0++) w2();
			for (w0 = aC.gv ? aC.jp : 0; w0 < w6; w0++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w8 = spawningData[2 * w0] + 1,
							spawningData = spawningData[2 * w0 + 1] + 1;
						if (3 < w8 && w8 < bQ.el - 5 && 3 < spawningData && spawningData < bQ.em - 5 && ab.eV(ab.we(w8, spawningData)) && wj(w8 + 3, spawningData + 3)) return wA(w8 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w7()) {
						for (var eu = aC.wB = w0; eu < w6; eu++) w0 = eu, w2();
						return
					}
					var w8 = vx + rL * vw + bJ.dj(vw, 2),
						w9 = vy + rM * vw + bJ.dj(vw, 2);
					wA(w8, w9)
				}
		})(), bb.lb[7] = af.gN[aC.eK]
	}, this.wv = function(j0, ww, wx) {
		var aA, w8, w9, g7, rL, rM;
		for (w0 = j0, aA = 0; aA < 20; aA++)
			for (w8 = ww + aA; ww - aA <= w8; w8--)
				for (w9 = wx + aA; wx - aA <= w9; w9--)
					if ((w8 === ww + aA || w8 === ww - aA || w9 === wx + aA || w9 === wx - aA) && 3 < w8 && w8 < bQ.el - 5 && 3 < w9 && w9 < bQ.em - 5 && ab.eV(ab.we(w8, w9)) && wj(w8 + 3, w9 + 3)) {
						if (0 < af.gN[w0]) {
							for (rM = rL = g7 = void 0, rL = af.iP[w0]; rL >= af.iO[w0]; rL--)
								for (rM = af.iR[w0]; rM >= af.iQ[w0]; rM--) g7 = 4 * (rM * bQ.el + rL), ab.wz(w0, g7) && (ab.x0(g7), af.gN[w0]--);
							w2()
						}
						return wp(w8 - 1, w9 - 1), !0
					} return !1
	}, this.x1 = function(j0) {
		w0 = j0, w7() ? wA(vx + rL * vw + bJ.dj(vw, 2), vy + rM * vw + bJ.dj(vw, 2)) : w2()
	}
}

function x2() {
	aq.x3(), tk.setTransform(iB, 0, 0, iB, 0, 0), tk.imageSmoothingEnabled = iB < 3, tk.drawImage(bQ.vX, aR.x4(), aR.x5()), bN.x6.tj(), tk.drawImage(x7, aR.x4(), aR.x5()), aq.tj(), bL.tj(), ae.tj(), (aC.mA ? (bf.tj(), bA) : (aM.tj(), aU.tj(), aQ
	.tj(), bA.tj(), au.tj(), aV.tj(), aR.tj(), aP.tj(), bf.tj(), aT.tj(), aO.tj(), aL.tj(), aK.tj(), aW.tj(), bc.tj(), at)).tj(), s.tj()
}

function x8(x9, i, j) {
	x9.clearRect(0, 0, i, j), x9.fillStyle = b9.me, x9.fillRect(0, 0, i, j)
}

function xA(x9, i, j, xB) {
	x9.fillStyle = b9.mh, x9.fillRect(0, 0, i, xB), x9.fillRect(0, 0, xB, j), x9.fillRect(i - xB, 0, xB, j), x9.fillRect(0, j - xB, i, xB)
}

function xC(x9, eh, ej, hR, xB, g7, xD) {
	x9.fillStyle = b9.mh;
	var g7 = Math.floor(hR * g7),
		ry = (g7 += (g7 - xB) % 2, Math.floor((g7 - xB) / 2)),
		hR = Math.floor((hR - g7) / 2);
	x9.fillRect(eh + hR, ej + hR + ry, g7, xB), xD && x9.fillRect(eh + hR + ry, ej + hR, xB, g7)
}

function xF() {
	this.dU = function() {
		8 === aC.k6 && aM.xG()
	}, this.xH = function(xI) {
		var elo = aC.data.elo,
			hj = (elo[xI] - elo[1 - xI]) / 10,
			hj = 8 / (1 + Math.pow(2, hj / 32)),
			hj = Math.floor(10 * hj + .5),
			xK = this.xL(elo[xI] + (1 + aC.xM) * hj + 1),
			elo = this.xL(elo[1 - xI] - hj);
		0 === xI ? aM.xO(xK, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xO(elo, xK, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xL = function(elo) {
		return 16e3 === (elo = bJ.p9(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qr = new xP, this.va = new xQ
}

function xQ() {
	this.hH = !1;
	this.xU = [], this.xV = 100;
	var m7, m8, gap, hR, xR, xT, xW = 0,
		xX = new Array(9),
		xY = [],
		xZ = [],
		xa = 0,
		xb = 0,
		xc = 0,
		xd = 0;

	function xp() {
		xX.sort(function(et, eu) {
			return eu.ju - et.ju
		});
		for (var pI = "" + xX[0].oE, aA = 1; aA < 9; aA++) pI += "," + xX[aA].oE;
		for (aA = 0; aA < 9; aA++) pI += "," + xX[aA].ju;
		bh.e7.uD(120, pI)
	}
	this.dU = function() {
		for (var xe = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xe.length; aA++) {
			var color = 6 === xe[aA] ? b9.n7 : b9.mf;
			this.xU.push(b8.canvas.xf(aa.get(3), xe[aA], color))
		}
		for (aA = 0; aA < ai.qr.xg; aA++) xZ.push(ai.qr.xh - ai.qr.xg + aA);
		for (aA = 0; aA < ai.qr.xi; aA++) xZ.push(ai.qr.xj + aA);
		var xk = ai.qr.xl(bI.xk);
		for (aA = 0; aA < xk.length; aA++) xZ.push(xk[aA]);
		! function() {
			var aA, g = bh.e7.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xX[aA] = {
					oE: 1015 + aA,
					ju: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f2 = parseInt(g[aA]),
						ev = (f2 = 0 <= f2 && f2 < ai.qr.xh ? f2 : 0, parseInt(g[aA + 9]));
					ev = 0 <= ev && ev < 1e3 ? ev : 0, xX[aA] = {
						oE: f2,
						ju: ev
					}
				}
		}()
	}, this.show = function(ks, kt, xq) {
		var aA;
		if (xa = ks, xb = kt, xW = xq || 0, this.hH = !0, xY = [], 0 === xW)
			for (aA = 0; aA < 9; aA++) xY.push(xX[aA].oE);
		else {
			var eu = 49 * xW,
				xq = eu - 49;
			for (xq >= xZ.length && (xW = 1, xq = 0, eu = 49), aA = xq = (eu = Math.min(eu, xZ.length)) - 49; aA < eu; aA++) xY.push(xZ[aA])
		}
		xY.push(1024);
		xq = xY.length, hR = Math.floor((z.a0.qz() ? .075 : .0468) * h.pd), gap = Math.floor(hR / 3), (xc = 10 * (xR = hR + gap)) > h.i && (xc = h.i, gap = (xR = xc / 10) - (hR = 3 * xR / 4)), xT = bJ.dj(xq, 10) + !!(xq % 10), (xd = xT * xR) > h
			.j && (xd = h.j, gap = (xR = xd / xT) - (hR = 3 * xR / 4)), xq = .5 * gap;
		m7 = Math.min(Math.max(ks - .5 * xc + xq, xq), h.i - xc + xq), m8 = Math.min(Math.max(kt - .5 * xd + xq, xq), h.j - xd + xq)
	}, this.gn = function(ks, kt, player) {
		if (!this.hH) return !1;
		if (this.xs(ks, kt)) {
			ks = bJ.p9(bJ.dj(ks - m7 + .5 * gap, xR), 0, 9);
			if ((ks += 10 * bJ.p9(bJ.dj(kt - m8 + .5 * gap, xR), 0, 9)) >= xY.length) return aK.qs(), !0;
			kt = xY[ks];
			if (1024 === kt) return this.show(xa, xb, xW + 1), !0;
			! function(oE) {
				for (var aA = 0; aA < 9; aA++) xX[aA].ju = Math.floor(.99 * xX[aA].ju);
				for (aA = 0; aA < 9; aA++)
					if (oE === xX[aA].oE) return xX[aA].ju = Math.min(xX[aA].ju + 30, 999), xp();
				xX.splice(5, 0, {
					oE: oE,
					ju: Math.max(xX[4].ju, 30)
				}), xX.pop(), xp()
			}(kt), player === aC.eK ? b6.gw.oD(kt) : b6.fv.oR(kt, player)
		}
		return aK.qs(), !0
	}, this.xs = function(ks, kt) {
		return !(ks < m7 - .5 * gap || kt < m8 - .5 * gap || m7 + xc - .5 * gap <= ks || m8 + xd - .5 * gap <= kt)
	}, this.tj = function() {
		tk.fillStyle = b9.me, tk.fillRect(m7 - .5 * gap, m8 - .5 * gap, xc, xd);
		for (var hN = .5 * ba.xt, ea = (tk.lineWidth = ba.xt, tk.strokeStyle = tk.fillStyle = b9.mh, tk.strokeRect(m7 - .5 * gap + hN, m8 - .5 * gap + hN, xc - 2 * hN, xd - 2 * hN), tk.imageSmoothingEnabled = !0, xY.length), aA = 0; aA <
			ea; aA++) this.xu(xY[aA], tk, m7 + aA % 10 * xR, m8 + bJ.dj(aA, 10) * xR, hR);
		tk.imageSmoothingEnabled = !1
	}, this.xu = function(oE, hX, eh, ej, hR) {
		var eE;
		oE >= 1024 - ai.qr.xg ? (eE = hR / this.xV, hX.setTransform(eE, 0, 0, eE, eh, ej), hX.drawImage(this.xU[oE - 1024 + ai.qr.xg], 0, 0), hX.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pb.textAlign(hX, 1), b8.pb.textBaseline(hX, 1), hX.font = b8.pb
			.rQ(0, .89 * hR), hX.fillText(ai.qr.xv(oE), eh + .5 * hR, ej + (.35 - b8.pb.xw + .56) * hR))
	}
}

function xP() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xg = 13, this.xi = this.emojis.length, this.xj = 676, this.xh = 1024, this.xx = this.emojis.indexOf("💀"), this.xy = this.xx + 1, this.xz = this.emojis.indexOf("🥇"), this.y0 = this.emojis.indexOf("😊"), this.xv = function(f2) {
		return f2 < this.xj ? String.fromCharCode(55356, 56806 + bJ.dj(f2, 26), 55356, 56806 + f2 % 26) : this.emojis[Math.min(f2 - this.xj, this.xi - 1)]
	}, this.xl = function(pI) {
		for (var ea = pI.length - 2, g = [], aA = 0; aA < ea; aA++) {
			var hf = pI.charCodeAt(aA) - 56806,
				hg = pI.charCodeAt(aA + 2) - 56806;
			0 <= hf && hf < 26 && 0 <= hg && hg < 26 && (g.push(26 * hf + hg), aA += 3)
		}
		return g
	}, this.y1 = function(f2) {
		return f2 < this.xj
	}, this.y2 = function(f2) {
		return f2 >= 1024 - this.xg
	}, this.y3 = function(f2) {
		return f2 >= this.xj && f2 < this.xj + this.xy
	}
}

function by() {
	this.rt = new y4, this.uy = new y5, this.v0 = new y6, this.dU = function() {
		this.rt.dU()
	}
}

function y5() {
	this.vD = function(pI) {
		for (var ea = pI.length, i = bB, aA = 0; aA < ea; aA++) i.a7(16, pI.charCodeAt(aA))
	}
}

function y4() {
	var y7 = new Uint8Array(64);
	this.dU = function() {
		var aA;
		for (y7[0] = 45, y7[37] = 95, aA = 0; aA < 10; aA++) y7[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y7[aA + 11] = 65 + aA, y7[aA + 38] = 97 + aA
	}, this.rv = function(y8) {
		for (var v3 = bF, vB = new Uint8Array(y8), aA = 0; aA < y8; aA++) vB[aA] = v3.oc(6);
		return vB
	}, this.ru = function(vB) {
		for (var ea = vB.length, y9 = y7, g = [], aA = 0; aA < ea; aA++) g.push(String.fromCharCode(y9[vB[aA]]));
		return g.join("")
	}, this.yA = function(value, yB) {
		for (var y9 = y7, g = [], aA = 0; aA < yB; aA++) g.push(String.fromCharCode(y9[value >> 6 * (yB - 1 - aA) & 63]));
		return g.join("")
	}
}

function c6() {
	var yC, yD, yE;
	yC = [32, 65, 191, 913, 931], yD = [64, 127, 688, 930, 1155], yE = new Array(yC.length + 1);
	for (var aA = 0; aA < yE.length; aA++) {
		yE[aA] = 0;
		for (var et = aA - 1; 0 <= et; et--) yE[aA] += yD[et] - yC[et]
	}

	function yK(ev) {
		for (var aA = yC.length - 1; 0 <= aA; aA--)
			if (ev >= yC[aA] && ev < yD[aA]) return aA;
		return -1
	}
	this.v4 = function(pI) {
		return 0 !== (pI = pI.trim()).indexOf("Bot ") && 0 !== pI.indexOf("[Bot] ") && function(pI, yH, yI) {
			var ea = (pI = pI.trim()).length;
			if (ea < yH || yI < ea) return !1;
			for (var ev, yJ = 0, aA = 0; aA < ea; aA++)
				if (ev = pI.charCodeAt(aA), yJ += 65 <= ev && ev <= 90 || 1040 <= ev && ev <= 1071 ? 1 : 0, -1 === yK(ev)) return !1;
			if (3 < yJ && yJ > Math.floor(ea / 2)) return !1;
			return !0
		}(pI, 3, 20)
	}, this.yL = function(pI) {
		for (var ea = (pI = pI.trim()).length, g = [], aA = 0; aA < ea; aA++) {
			var ev, g7 = yK(ev = pI.charCodeAt(aA));
			g.push(yE[g7] + ev - yC[g7])
		}
		return g
	}, this.vI = function(g) {
		for (var ev, eu, pI = "", ea = g.length, aA = 0; aA < ea; aA++)
			for (eu = 1; eu < yE.length; eu++)
				if (g[aA] < yE[eu]) {
					ev = yC[eu - 1] + g[aA] - yE[eu - 1], pI += String.fromCharCode(ev);
					break
				} return pI
	}, this.yM = function(pI) {
		for (var g = this.yL(pI), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yN = function(pI) {
		for (var g = new Array(Math.floor(pI.length / 3)), aA = 0; aA < pI.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pI.substring(aA, aA + 3));
		return this.vI(g)
	}, this.yO = function(pI) {
		for (var f2, g = [pI.length], aA = 0; aA < pI.length; aA++) g[aA] = pI.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pI.length; aA++) aA === pI.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f2 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f2 + (f2 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yP = function(pI) {
		for (var ev, result = "", aA = 0; aA < pI.length; aA++) 48 <= (ev = pI.charCodeAt(aA)) && ev < 58 ? result += String.fromCharCode(ev) : 65 <= ev && ev < 75 ? result += "0" + (ev - 65).toString() : 75 <= ev && ev < 91 ? result += (ev - 65)
			.toString() : 97 <= ev && ev < 123 && (result += (ev - 71).toString());
		return result
	}, this.yQ = function(pI) {
		for (var ea = pI.length, g = [], aA = 0; aA < ea; aA++)(ev = pI.charCodeAt(aA)) < 58 ? g.push(pI[aA]) : (ev -= ev < 91 ? 65 : 71, g.push(String(bJ.dj(ev, 10))), g.push(String(ev - 10 * bJ.dj(ev, 10))));
		var ea = g.length - 2,
			ev = 0,
			vB = [];
		for (aA = 0; aA < ea; aA += 3) vB[ev++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return vB
	}, this.yR = function() {
		for (var dw, yS = "", aA = 0; aA < 6; aA++) dw = 48 + aw.random() % 36, dw += 58 <= dw ? 39 : 0, yS += String.fromCharCode(dw);
		return yS
	}
}

function y6() {
	this.yL = function(pI, vs, yT) {
		for (var yU = [], ea = pI.length, max = 0, aA = 0; aA < ea; aA++) {
			var f2 = pI.charCodeAt(aA);
			yU.push(f2), max = Math.max(max, f2)
		}
		var vt = max < 128 ? 7 : 16;
		for (yT.a7(vs, ea), yT.a7(1, +(16 == vt)), aA = 0; aA < ea; aA++) yT.a7(vt, yU[aA])
	}
}

function d4() {
	this.yV = new yW, this.result = new yX, this.h3 = new yY, this.yZ = new ya, this.yb = new yc, this.yd = new ye, this.dU = function() {
		this.result.dU()
	}
}

function yY() {
	this.yf = function() {
		for (var ea = ak.jq, yg = ak.jr, yh = [], aA = 0; aA < ea; aA++) {
			var g7 = yg[aA];
			b8.fv.yi(g7) && yh.push(g7)
		}
		return yh
	}, this.yj = function() {
		if (0 === be.kB[aC.yk]) return this.yl();
		bf.l2(aC.yk);
		for (var yh = [], ea = bM.f5[0], fD = bM.fD, aA = 0; aA < ea; aA++) {
			var g7 = fD[aA];
			b8.fv.yi(g7) && yh.push(g7)
		}
		return yh
	}, this.yl = function() {
		var g7 = l4[0];
		return b8.fv.yi(g7) ? [g7] : []
	}, this.ym = function(yh) {
		for (var ea = yh.length, di = 0, gN = af.gN, aA = 0; aA < ea; aA++) di += gN[yh[aA]];
		return di
	}
}

function yW() {
	function yo() {
		if (2 === aC.ys) return 1;
		au.yt(), aC.ys = 2, aC.yu = aC.yv
	}

	function yq() {
		bP.yb.yw(), aW.show(1 === aC.yx, !1, 2 === aC.yx), bP.result.yw(), bP.yd.ij(), bP.yZ.ij(), aM.yy(!0), aM.yz(247), aM.yz(956), aM.yz(957), aU.lR(!0), aV.lR(!0), au.lR(), bA.z0(), aC.gj && bd.z1.z2(), bd.dc = !0, bZ.z3(), z.a0.setState(0)
	}
	this.yn = function() {
		yo() || (aC.yp = 2, yq())
	}, this.yr = function() {
		yo() || (aC.yp = 1, yq())
	}
}

function ya() {
	this.ij = function() {
		var zC;
		2 === aC.yp ? (aM.z4(0, 59), aG.mG(2700)) : aC.k6 < 7 ? (zC = be.kB[aC.yk], zC = be.zE[zC], aP.zF(L(24, [zC]), 2, 1, 12), aM.zG(0, L(25, [zC]), 40, 0, b9.mh, b9.me, -1, !1), aG.mG(2700)) : 8 === aC.k6 ? (aC.yx ? aM.z4(aC.z9, 2) : aM.z4(
			1 - aC.eK, 3), aC.zA.xH(aC.z9), aM.zB(aC.z9), aG.m1(aC.z9, 2700, !1, 0)) : 9 === aC.k6 ? (aM.zH(), aG.mG(2700)) : (aM.zB(aC.z9), aG.m1(aC.z9, 2700, !1, 0))
	}
}

function ye() {
	function zR() {
		var sF = Math.floor(af.zS[aC.eK] / 50);
		return Math.min(sF, 400) / 100
	}

	function zJ() {
		var sF = zR();
		0 !== sF && aM.zG(440, L(26, [sF.toFixed(2)]), 40, 0, b9.mz, b9.me, -1, !1)
	}
	this.ij = function() {
		if (0 === bP.result.zI || 0 === bP.result.yh.length) b8.fv.gm(aC.eK) && zJ();
		else {
			var zK = function() {
				aM.zG(520, L(27), 40, 0, b9.mh, b9.me, -1, !1);
				for (var yh = bP.result.yh, ea = yh.length, gN = af.gN, g = [], aA = 0; aA < ea; aA++) {
					var g7 = yh[aA];
					g.push({
						g7: g7,
						di: gN[g7]
					})
				}
				g.sort((et, eu) => eu.di - et.di);
				var zE = af.zT,
					di = bP.result.zU,
					sF = bP.result.zI,
					pI = "",
					zK = 0;
				for (aA = 0; aA < ea; aA++) {
					var hF = g[aA].di * sF / (100 * di),
						zW = zE[g[aA].g7] + ": " + hF.toFixed(2) + "   ";
					g[aA].g7 === aC.eK && (zK = hF), 2 < aA && 4 !== ea ? 3 === aA && (pI += "(" + L(28, [ea - 3]) + ")") : pI += zW
				}
				aM.zG(560, b8.zX.zY(pI), 40, 0, b9.mz, b9.me, -1, !1), zK ? aM.zG(580, L(29, [zK.toFixed(2) + " + " + zR().toFixed(2)]), 40, 0, b9.mz, b9.me, -1, !1) : b8.fv.gm(aC.eK) && zJ();
				return zK
			}();
			if (! function(zK) {
					7 !== aC.k6 && 10 !== aC.k6 || 0 !== aC.yx && aM.zG(600, L(30, [zK.toFixed(2)]), 40, 0, b9.mh, b9.me, -1, !1)
				}(zK), !(2 === aC.yp || 7 <= aC.k6)) {
				var yh = bP.result.yh,
					ea = yh.length,
					zZ = af.zZ,
					gN = af.gN,
					za = [];
				loop: for (var aA = 0; aA < ea; aA++) {
					var g7 = yh[aA],
						zb = b8.zX.zc(zZ[g7]);
					if (null !== zb) {
						for (var zd = gN[g7], eu = za.length - 1; 0 <= eu; eu--)
							if (zb === za[eu].name) {
								za[eu].di += zd, za[eu].g.push({
									g7: g7,
									di: zd
								});
								continue loop
							} za.push({
							name: zb,
							di: zd,
							g: [{
								g7: g7,
								di: zd
							}]
						})
					}
				}
				if (0 !== za.length) {
					za.sort((et, eu) => eu.di - et.di);
					var g = za[0].g,
						zK = (g.sort((et, eu) => eu.di - et.di), "[" + za[0].name + "]"),
						sF = bP.result.zI,
						zf = 512 * sF / 26214400,
						kX = (aM.zG(0, L(31, [zK, zf.toFixed(4)]), 40, 0, b9.mh, b9.me, -1, !1), g.length),
						di = bP.result.zU,
						v9 = za[0].di,
						zg = 1e4 * zf;
					for (aA = 0; aA < kX; aA++)
						if (g[aA].g7 === aC.eK) {
							aM.zG(600, L(32, [(zg * g[aA].di / (10 * v9)).toFixed(2)]), 40, 0, b9.mh, b9.me, -1, !1), aM.zG(600, L(33), 40, 0, b9.mh, b9.me, -1, !1);
							break
						} zf = (v9 * sF / (1e3 * di)).toFixed(2);
					aM.zG(680, L(34, [zK, zf]), 40, 0, b9.mh, b9.me, -1, !1), aC.gj || aM.zG(720, L(35) + bI.zi, 736, 0, b9.mh, b9.n5, -1, !1)
				}
			}
		}
	}, this.zO = function() {
		var zP, vb;
		aC.k8 || (zP = af, vb = aC.eK, 0 === zP.zQ[vb]) || zP.it[vb] < 1 || 2 * zP.ox[vb] > 3 * (zP.is[vb] + zP.it[vb]) || zJ()
	}
}

function yX() {
	this.dU = function() {
		this.zj = 0, this.yh = [], this.zU = 0, this.zI = 0
	}, this.yw = function() {
		var rD;
		aC.k8 || (rD = this, 2 === aC.yp ? rD.yh = bP.h3.yf() : aC.hP ? rD.yh = bP.h3.yj() : rD.yh = bP.h3.yl(), rD.zj = bg.zl.zm(), rD.zU = Math.max(1, bP.h3.ym(rD.yh)), b6.fv.oa(), 8 === aC.k6 ? bP.result.zI = 0 : rD.zI = 100 * bP.result.zj * (
			1 + aC.xM))
	}
}

function yc() {
	this.yw = function() {
		if (2 === aC.yp) aC.yx = 2;
		else {
			if (8 === aC.k6) b8.fv.jD(0) || 0 === af.lf[0] ? aC.z9 = 1 : b8.fv.jD(1) || 0 === af.lf[1] ? aC.z9 = 0 : aC.z9 = +(af.gN[1] > af.gN[0]);
			else {
				if (aC.hP) {
					var l0 = bf.zp();
					if (aC.yk = l0, be.kB[l0]) return void(aC.yx = +(be.eY[aC.eK] === l0))
				}
				aC.z9 = l4[0]
			}
			aC.yx = +(aC.z9 === aC.eK)
		}
	}
}

function d9() {
	this.id = 0, this.dk = 0, this.uK = null, this.uL = null, this.uM = null, this.uS = null, this.a0 = new zq, this.dU = function() {
		var self, dk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dk = Android.getVersion()) < 12 || (self.dk = dk, self.id = 1, self.uL = Android),
			function(self) {
				var dk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uM = mwIOSdataX, self.uS = window.webkit.messageHandlers.iosCommandA, dk = self
					.uM.version, self.dk = dk ? Number(dk) : 0)
			}(this),
			function(self) {
				var uK;
				if (0 === self.id) {
					try {
						if (!(uK = window.localStorage)) return;
						uK.setItem("tls7", "1"), uK.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uK = uK
				}
			}(this)
	}
}

function zq() {
	this.zu = function() {
		bh.r3.uf(), bh.r3.ug(), ay.x.close(0, 3255), 0 === z.id ? z.uK && z.uK.clear() : 1 === z.id ? z.uL.saveString(199, "") : 2 === z.id && z.uS.postMessage("clear")
	}, this.zv = function() {
		2 === z.id ? z.uS.postMessage("showConsentForm") : 1 === z.id && z.uL.setState(7)
	}, this.zw = function() {
		this.setState(14)
	}, this.qz = function() {
		return 1 === bh.e7.uF(2)
	}, this.zx = function() {
		bh.e7.uD(102, "")
	}, this.setState = function(zy) {
		1 === z.id && 5 <= z.dk && z.uL.setState(zy)
	}, this.a1 = function() {
		var zz;
		1 === z.id && 7 <= z.dk ? z.uL.setState(5) : ((zz = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zz.toString())
	}, this.dZ = function() {
		1 !== z.id || z.dk < 17 || z.uL.saveString(23, document.documentElement.outerHTML)
	}, this.e5 = function() {
		0 !== z.id && (1 === z.id ? z.uL.prepareAd("1688441405") : 2 === z.id && (0 === z.dk ? z.uS.postMessage("prepare ad 1770251391") : z.uS.postMessage("loadAds 1770251391")))
	}, this.eA = function(di) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.dk ? z.uS.postMessage("show ad " + di) : z.uS.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.dk < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.a00 + "' target='_blank'>" + bI
			.a00 + "</a>", !0, [new v("⬅️ " + L(36), function() {
				s.t(0)
			}, b9.nM)]))
	}
}

function dO() {
	function a03(e) {
		a0E(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(36), function() {
				s.a0F()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n4)]))
	}

	function a0D(e) {
		a0E(e), s.t(4, 5, new u(L(37), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a07(e), !0))
	}

	function a07(e) {
		var pI = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pI : 4527 === e ? "Player already in lobby" + pI : 4530 === e ? "Lobby Timeout" + pI : 4528 === e ? "Lobby Kick: Another login detected." + pI : 4540 === e ?
			"You have been kicked." + pI : "Unknown error" + pI
	}

	function a0E(e) {
		a06(e), s.x.y()
	}

	function a06(e) {
		var zy = aZ.a05();
		6 === zy ? ay.x.a0H(e) : bl.a09 ? (s.w(), bl.tD(), ay.x.close(ay.x.a0A, 3256)) : 8 === zy && aC.a0I(!0)
	}
	this.a01 = function(a02, e) {
		a02 === 1 && __fx.customLobby.isActive() && aZ.a05() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rq && 0 === a02)
			if (4211 === e) a03(e);
			else {
				if (4480 === e) return bh.r3.uh(), void s.t(4, 0, new u(L(39), L(40), !0));
				8 !== aZ.a05() && a06(), s.t(4, 0, new u(L(37), a07(e), !0))
			}
		else {
			var zy = aZ.a05();
			if (6 === zy) {
				if (4211 === e) return void a03(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a08(a02)
			} else {
				if (!bl.a09) return 8 === zy ? void(a02 !== ay.x.a0B || aC.k8 || 1 !== aC.ys || aC.gj || aM.a0C(L(38, [e]))) : void 0;
				if (a02 !== ay.x.a0A) return
			}
			a0D(e)
		}
	}, this.a0G = function(e) {
		8 === aZ.a05() ? aC.k8 || 1 !== aC.ys || aM.a0C(L(38, [e])) : a0D(e)
	}, this.r = function() {
		a0E(3268)
	}
}

function cy() {
	var a0J, a0K, a0L = -15e3,
		a0M = !1;

	function gn(e) {
		a0g() || (a0M = !0, a0h(e, 1), ay.x.a0i(ay.x.a0B), a0j(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0V(e) {
		a0L = bd.e9, a0h(e, 1), ay.x.a0i(ay.x.a0B), 0 < e.touches.length && (a0J = Math.floor(h.k * e.touches[0].clientX), a0K = Math.floor(h.k * e.touches[0].clientY), ar.a0V(e) || a0j(a0J, a0K))
	}

	function a0j(eh, ej) {
		s.gn(eh, ej), 0 === aC.ys ? aZ.gn(eh, ej) : bA.a0k(eh, ej) || bc.gn(eh, ej) || aW.gn(eh, ej) || aK.a0l(eh, ej) || aO.gn(eh, ej) || 0 <= aL.gn(eh, ej) || au.gn(eh, ej) || bH.a0m(eh, ej) || aK.a0n(eh, ej)
	}

	function a0R(e) {
		a0g() || (a0M = !0, a0h(e, 1), a0o(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0W(e) {
		a0L = bd.e9, a0h(e, 1), 0 < e.touches.length && (a0J = Math.floor(h.k * e.touches[0].clientX), a0K = Math.floor(h.k * e.touches[0].clientY), ar.a0W(e) || a0o(a0J, a0K))
	}

	function a0o(eh, ej) {
		s.a0R(eh, ej), 0 === aC.ys ? aZ.a0R(eh, ej) : (bR.gg(eh, ej), bc.a0R(eh, ej) || (aL.a0R(eh, ej), aK.hH() ? aK.a0R(eh, ej) : aQ.go ? aQ.a0R(eh) && (bd.dc = !0) : (aU.a0R(eh, ej), aR.mC && aR.a0R(eh, ej) && (bd.dc = !0))))
	}

	function a0T(e) {
		a0g() || (a0h(e, 1), a0p(), 0 === aC.ys ? (aZ.click(-1024, -1024), aS.qb()) : (aU.a0q(-1024, -1024), aL.a0R(-1024, -1024), aQ.a0r(), aR.mC = !1))
	}

	function a0S(e) {
		a0g() || (a0h(e, 1), a0s(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0P && (bH.a0P = !1, e.preventDefault()))
	}

	function click(e) {
		a0g() || a0h(e, 1)
	}

	function a0X(e) {
		a0L = bd.e9, a0h(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.ys ? aR.mC = !1 : ar.a0t() || (a0s(a0J, a0K, !1), bH.a0P && (bH.a0P = !1, e.preventDefault()))
	}

	function a0Y(e) {
		a0L = bd.e9, a0h(e, 1), a0s(a0J, a0K, !1), bH.a0P && (bH.a0P = !1, e.preventDefault())
	}

	function a0Z(e) {}

	function a0a(e) {}

	function a0b(e) {
		a0g() || a0h(e, 0)
	}

	function a0s(eh, ej, a0u) {
		a0p(), 0 === aC.ys ? aZ.click(eh, ej) : (aU.a0q(eh, ej), bc.a0q(), aQ.a0r(), aR.mC = !1, aK.click(eh, ej, a0u) ? bd.dc = !0 : aL.a0S(eh, ej))
	}

	function a0p() {
		s.a0p()
	}

	function a0U(e) {
		var eh, ej, deltaY;
		a0g() || (a0h(e, 1), ay.x.a0i(ay.x.a0B), eh = Math.floor(h.k * e.clientX), ej = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0U(eh, ej, deltaY), 0 === aC.ys ? aZ.a0U(eh, ej, deltaY) : aU.a0U(eh, ej,
			deltaY) || (aQ.a0v(eh, ej) ? aQ.a0U(deltaY) && (bd.dc = !0) : aR.a0U(eh, ej, deltaY)))
	}

	function a0c(e) {
		a0h(e, 0)
	}

	function a0h(e, id) {
		0 === id && s.hH() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.a05() && e.preventDefault()
	}

	function a0d(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0g() || 0 < h.rY || (e = e.code) && e.length && (bV.ev(e, 18) ? ap.a0x(3) : bV.ev(e, 22) ? ap.a0x(0) : bV.ev(e, 20) ? ap.a0x(1) : bV.ev(e, 24) ? ap.a0x(2) : bV.ev(e, 10) ? aQ.a0y(31 / 32) : bV.ev(e, 8) ? aQ.a0y(32 / 31) : bV.ev(e, 6) ? aQ
			.a0y(7 / 8) : bV.ev(e, 4) ? aQ.a0y(8 / 7) : bV.ev(e, 14) ? 0 !== aC.ys && aR.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.ev(e, 16) ? 0 !== aC.ys && aR.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.ev(e, 0) ? aC
			.ys && bR.gh(!1) : bV.ev(e, 2) ? aC.ys && bR.gh(!0) : bV.ev(e, 26) ? aC.ys && bR.hB() : bV.ev(e, 28) && aC.ys && bR.hG())
	}

	function a0e(e) {
		if (!a0g() && !(0 < h.rY || bd.e9 < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0z(1) || "Space" === code && s.a0z(0))) return bl.a09 ? bl.tJ.a0z(code) ? void 0 : void("Escape" === code && bH.f3()) : void(8 !== aZ.a05() && aZ.a0z(e) ? bd.dc = !0 : "Escape" ===
				code ? bH.f3() : bV.ev(code, 18) ? ap.a10(3) : bV.ev(code, 22) ? ap.a10(0) : bV.ev(code, 20) ? ap.a10(1) : bV.ev(code, 24) ? ap.a10(2) : bV.ev(code, 12) ? bA.a11(!aC.mA) : "Space" === code && aC.ys && (aL.gk && aL.a12(), aC
					.gj) && bA.a13(!1))
		}
	}

	function a0f() {
		"hidden" === document.visibilityState ? 1 === aC.ys && (aC.gj ? bA.a14() : !aC.k8 || aL.gk || aC.gv || aL.a12()) : bd.dc = !0
	}

	function a0g() {
		return a0L + 15e3 > bd.e9
	}

	function resize() {
		h.a16()
	}
	this.a0N = 0, this.a0O = "", this.a0P = !1, this.dU = function() {
		a0Q.addEventListener("mousedown", gn, {
			passive: !1
		}), a0Q.addEventListener("mousemove", a0R, {
			passive: !1
		}), a0Q.addEventListener("mouseup", a0S, {
			passive: !1
		}), a0Q.addEventListener("click", click, {
			passive: !1
		}), a0Q.addEventListener("mouseleave", a0T, {
			passive: !1
		}), a0Q.addEventListener("wheel", a0U, {
			passive: !1
		}), a0Q.addEventListener("touchstart", a0V, {
			passive: !1
		}), a0Q.addEventListener("touchmove", a0W, {
			passive: !1
		}), a0Q.addEventListener("touchend", a0X, {
			passive: !1
		}), a0Q.addEventListener("touchcancel", a0Y, {
			passive: !1
		}), a0Q.addEventListener("dragover", a0Z), a0Q.addEventListener("drop", a0a), a0Q.addEventListener("dblclick", a0b), document.addEventListener("contextmenu", a0c), document.addEventListener("keydown", a0d), document.addEventListener(
			"keyup", a0e), document.addEventListener("visibilitychange", a0f), window.addEventListener("resize", resize)
	}, this.a0m = function(eh, ej) {
		return !!bA.gn(eh, ej) || !!(aU.gn(eh, ej) || aR.gn(eh, ej) || aQ.gn(eh, ej) || aM.gn(eh, ej))
	}, this.a15 = a0g, this.q4 = function() {
		return !a0M || 0 < a0L
	}, this.f3 = function() {
		if (!s.hH()) return 8 === aZ.a05() ? aC.mA ? void bA.a11(!1) : bc.hH ? void bc.a12() : void aL.a12() : void(7 !== aZ.a05() && 6 === aZ.a05() && aY.a17());
		s.a0z(2)
	}
}

function bu() {
	this.pb = new a18, this.pk = new a19, this.fv = new a1A, this.zX = new a1B, this.x9 = new a1C, this.a1D = new a1E, this.canvas = new a1F, this.color = new a1G, this.a1H = new a1I, this.dU = function() {
		this.pb.ue()
	}
}

function a19() {
	this.vZ = function(g) {
		g.fill(0)
	}, this.a1J = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++) g[aA] = []
	}, this.a1K = function(hf, a1L) {
		for (var hg = bM.fA, aA = 0; aA < 3; aA++) hg[aA] = a1L * hf[aA];
		return hg
	}, this.a1M = function(hf, hg, a1N) {
		for (var hj = 0, aA = 0; aA < 3; aA++) hj += Math.abs(hf[aA] - hg[aA]);
		return a1N <= hj
	}, this.a1O = function(hf, a1P) {
		for (var aA = 0; aA < 3; aA++) hf[aA] = bJ.p9(hf[aA] + a1P, 0, 255);
		return hf
	}, this.a1Q = function(g, sB, sC) {
		sC = sC || g.length - 1;
		for (var a1R = 0, aA = sB = sB || 0; aA <= sC; aA++) a1R += g[aA];
		return a1R
	}, this.a1S = function(g, a1T) {
		for (var aA, a1U, ea = g.length, a1V = [], et = ea - 1; 0 <= et; et--) {
			for (aA = a1U = 0; aA < ea; aA++) a1T(g[aA]) < a1T(g[a1U]) && (a1U = aA);
			ea--, a1V.push(g[a1U]), g[a1U] = g[ea], g.pop()
		}
		return a1V
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
	}, this.a1W = function(g, f2) {
		for (var ea = g.length, g2 = 0, aA = 0; aA < ea; aA++) g2 += g[aA] > f2;
		return g2
	}, this.a1X = function(a1Y, a1Z, min) {
		for (var ea = a1Z[0], aA = ea - 1; 0 <= aA; aA--) a1Y[aA] < min && (a1Y[aA] = a1Y[--ea]);
		a1Z[0] = ea
	}, this.a1a = function(g, ea, value) {
		for (var aA = 0; aA < ea; aA++) g[aA] -= value
	}, this.a1b = function(g) {
		for (var ea = g.length, aA = 0; aA < ea; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1c = function(pI, g, a1d) {
		g.fill(0);
		for (var sF = pI.split(","), ea = Math.min(sF.length, g.length), aA = 0; aA < ea; aA++) g[aA] = Math.min(parseInt(sF[aA]), a1d)
	}, this.a1e = function(pI, g, qY) {
		g.fill("");
		for (var sF = pI.split('"'), ea = Math.min(sF.length, 2 * g.length), hN = 0, aA = 1; aA < ea; aA += 2) g[hN++] = sF[aA].slice(0, qY)
	}, this.a1f = function(g, g2) {
		if (0 === g2) g.fill(0);
		else {
			var a1R = this.a1Q(g),
				ea = g.length;
			if (0 === a1R) g.fill(bJ.dj(g2, ea));
			else
				for (var aA = 0; aA < ea; aA++) g[aA] = bJ.dj(g2 * g[aA], a1R);
			if (0 === (a1R = this.a1Q(g))) g[1] = g2;
			else
				for (var hN = 0; a1R++ < g2;) g[hN = (hN + 1) % ea] && g[hN]++
		}
	}, this.a1g = function(g) {
		if (!g) return 0;
		var ea = g.length;
		if (0 === ea) return 0;
		for (var f2 = g[ea - 1], aA = ea - 2; 0 <= aA; aA--)
			if (g[aA] !== f2) return aA + 2;
		return 1
	}, this.a1h = function(g) {
		for (var a1R = 0, aA = 0; aA < g.length; aA++) a1R += g[aA].length;
		return a1R
	}, this.a1i = function(a1j) {
		for (var g = [], aA = 0; aA < a1j.length; aA++) g = g.concat(a1j[aA]);
		return g
	}
}

function a1F() {
	this.xf = function(a1k, dx, a1l) {
		var hR = a1k.height,
			a1m = b8.pb.vP(hR, hR),
			hX = b8.pb.getContext(a1m);
		return function(i, hX, a1l) {
			hX.fillStyle = a1l, hX.beginPath(), hX.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hX.fill()
		}(hR, hX, a1l), hX.drawImage(a1k, -dx * hR, 0), a1m
	}, this.a1o = function(a1p) {
		var hX, hU, hR = a1p.height;
		return a1p.width === hR && (hU = (hX = b8.pb.getContext(a1p, !0)).getImageData(0, 0, hR, hR), b8.a1D.a1q(hU.data, hR, hR, .9), hX.putImageData(hU, 0, 0)), a1p
	}
}

function a1G() {
	this.a1r = function(f2) {
		return [f2 >> 12 & 63, f2 >> 6 & 63, 63 & f2]
	}, this.a1s = function(f2) {
		for (var g = this.a1r(f2), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1t = function(f2) {
		f2 = this.a1s(f2);
		return b8.color.mZ(f2[0], f2[1], f2[2])
	}, this.a1u = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mZ = function(dw, sF, eu) {
		return "rgb(" + dw + "," + sF + "," + eu + ")"
	}, this.mb = function(dw, sF, eu, et) {
		return "rgba(" + dw + "," + sF + "," + eu + "," + et.toFixed(3) + ")"
	}, this.q6 = function(ev) {
		for (var g = ev.split("(")[1].split(","), f9 = bM.f9, aA = 0; aA < 3; aA++) f9[aA] = parseInt(g[aA]);
		return 4 === g.length ? f9[3] = 255 * parseFloat(g[3].slice(0, -1)) : f9[3] = 255, f9
	}, this.q7 = function(a1v, ed) {
		for (var g = a1v.slice(a1v.indexOf("(") + 1, a1v.indexOf(")")).split(","), f9 = bM.f9, aA = 0; aA < 3; aA++) f9[aA] = bJ.p9(parseInt(g[aA].trim(), 10) + ed, 0, 255);
		return 3 === g.length ? this.mZ(f9[0], f9[1], f9[2]) : (a1v = parseFloat(g[3].trim()), this.mb(f9[0], f9[1], f9[2], a1v = 0 === a1v ? .3 : a1v))
	}, this.a1w = function(g) {
		for (var pI = "#", aA = 0; aA < 3; aA++) {
			var dw = g[aA].toString(16);
			pI += 1 === dw.length ? "0" + dw : dw
		}
		return pI
	}, this.a1x = function(pI) {
		var dw, sF;
		return pI.length < 7 ? b9.mY : (dw = parseInt(pI.slice(1, 3), 16), sF = parseInt(pI.slice(3, 5), 16), pI = parseInt(pI.slice(5, 7), 16), this.mZ(dw, sF, pI))
	}
}

function a1C() {
	this.a1y = function(pI, font, maxWidth) {
		if (font && (tk.font = font), tk.measureText(pI).width <= maxWidth) return pI;
		for (var aA = pI.length - 1; 1 <= aA; aA--)
			if (pI = pI.substring(0, aA), tk.measureText(pI + "...").width <= maxWidth) return pI + "...";
		return "..."
	}
}

function a1I() {
	var a20 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a21 = function(e9) {
		var a23, pI = new Date(e9.getTime() - 6e4 * e9.getTimezoneOffset()).toUTCString();
		return pI.length < 12 || (pI = pI.substring(5, pI.length), 0 === (e9 = e9.getTimezoneOffset())) ? pI : (a23 = (e9 < 0 ? "+" : "-") + bJ.dj(Math.abs(e9), 60), 0 == (e9 = Math.abs(e9) % 60) ? pI + a23 : pI + a23 + ":" + (e9 < 10 ? "0" :
			"") + e9)
	}, this.a24 = function(e9) {
		var pI = e9.toUTCString();
		return pI.length < 12 ? pI : function(e9) {
			return a20[e9.getUTCDay()]
		}(e9) + ", " + pI.substring(5, pI.length - 4)
	}
}

function a18() {
	var a26 = null;
	this.xw = 0, this.ue = function() {
		var f2 = bh.e7.data[5].value;
		a26 = "px " + f2, "Trebuchet MS" !== f2 && (a26 += ", Trebuchet MS"), this.xw = hQ(32, 32, ["a", "b", "m"], 200, a26)
	}, this.vP = function(i, j) {
		var ev = document.createElement("canvas");
		return ev.width = i, ev.height = j, ev
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x9, i, j) {
		return x9.getImageData(0, 0, i, j)
	}, this.rQ = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a26 : 1 === type ? "bold " + size + a26 : 2 === type ? "lighter " + size + a26 : 3 === type ? "italic " + size + a26 : 4 === type ? "oblique " + size + a26 : 5 === type ? "small-caps " +
			size + a26 : "small-caps bold " + size + a26
	}, this.textAlign = function(hX, id) {
		hX.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hX, id) {
		hX.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pm = function(e, code, color) {
		color = this.pl(ba.rS) + " solid " + (color || b9.mh);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sH = function(e, eh, ej, i, j) {
		e = e.style;
		e.left = this.sI(eh), e.top = this.sI(ej), e.width = this.sI(i), e.height = this.sI(j)
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
	}, this.sI = function(f2) {
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
		b8.zX.a2G(di, "✔") || (1 === di.length ? e.textContent = "✔" : e.textContent = di + " ✔", setTimeout(function() {
			e.textContent = di
		}, 500))
	}, this.measureText = function(pI) {
		return tk.measureText(pI).width
	}, this.s7 = function(a2H) {
		a2H.style.overflowX = "auto", a2H.style.overflowY = "hidden", a2H.style.whiteSpace = "nowrap", a2H.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sK = this.scrollLeft, e.preventDefault())
		}), a2H.addEventListener("scroll", function() {
			this.sK = this.scrollLeft
		})
	}
}

function a1A() {
	this.gl = function(zy) {
		return 0 === zy ? 1 === aC.ys && aC.gv : 1 === zy ? 1 === aC.ys && !aC.gv : 2 === aC.ys
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
	}, this.yi = function(player) {
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

function a1E() {
	this.a2l = function(canvas, a2m, a2n) {
		var i = canvas.width,
			j = canvas.height,
			ev = b8.pb.vP(i, j),
			hX = b8.pb.getContext(ev, !0),
			canvas = (hX.drawImage(canvas, 0, 0), hX.getImageData(0, 0, i, j));
		return a2m(canvas.data, i, j, a2n), hX.putImageData(canvas, 0, 0), ev
	}, this.a2o = function(va, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				va[3 + aA] = va[aA], va[aA] = va[1 + aA] = va[2 + aA] = 255
			}
	}, this.a2p = function(va, i, j) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				va[1 + aA] > va[2 + aA] + 10 && (va[3 + aA] = va[aA], va[1 + aA] = va[2 + aA])
			}
	}, this.a2q = function(va, i, j, a2n) {
		for (var gap = Math.floor(Math.min(i, j) * a2n), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (va[3 + (aA = 4 * (eh + ej * i))] = 255 - 255 * (va[1 + aA] - va[aA]) / (255 - va[aA]))
	}, this.a2r = function(va, i, j, a2n) {
		for (var eh = i - 1; 0 <= eh; eh--)
			for (var ej = j - 1; 0 <= ej; ej--) {
				var aA = 4 * (eh + ej * i);
				va[aA] = a2n[0], va[1 + aA] = a2n[1], va[2 + aA] = a2n[2]
			}
	}, this.a2s = function(va, i, j, a2n) {
		for (var gap = Math.floor(i * a2n), eh = 0; eh < i; eh++)
			for (var aA, ej = 0; ej < j; ej++)(eh < gap || ej < gap || i - gap <= eh || j - gap <= ej) && (va[aA = 4 * (eh + ej * i)] = va[1 + aA] = va[2 + aA] = 0)
	}, this.a2t = function(va, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) 200 < va[1 + (aA = 4 * (eh + ej * i))] && va[1 + aA] - 20 > va[aA] && va[1 + aA] - 20 > va[2 + aA] ? va[aA] + va[2 + aA] < 40 ? va[3 + aA] = 0 : (va[3 + aA] = va[aA], va[aA] = 255, va[1 + aA] = 255, va[
				2 + aA] = 255) : va[aA] < 50 && va[1 + aA] < 50 && va[2 + aA] < 50 && (va[aA] + va[1 + aA] + va[2 + aA] < 50 ? va[3 + aA] = 180 : va[3 + aA] = 180 + Math.floor(75 * (va[aA] + va[1 + aA] + va[2 + aA] - 50) / 100))
	}, this.a2u = function(va, i, j) {
		for (var ej, aA, eh = i - 1; 0 <= eh; eh--)
			for (ej = j - 1; 0 <= ej; ej--) va[1 + (aA = 4 * (eh + ej * i))] > va[aA] + 20 && va[1 + aA] > va[2 + aA] + 20 && va[aA] + va[2] < 40 && (va[3 + aA] = 255 - va[1 + aA], va[aA] = va[1 + aA] = va[2 + aA] = va[aA])
	}, this.a1q = function(va, i, j, a2n) {
		for (var dw = i >> 1, eh = 0; eh < i; eh++)
			for (var ej = 0; ej < j; ej++) Math.sqrt((eh - dw) * (eh - dw) + (ej - dw) * (ej - dw)) > a2n * dw && (va[4 * (eh + ej * i) + 3] = 0)
	}
}

function a1B() {
	this.yA = function(f2) {
		var aA, a2v, a2w, a2x, a2y;
		if (f2 < 0) return "-" + this.yA(Math.abs(f2));
		if (f2 < 1e3) return f2.toString();
		for (a2v = Math.floor(Math.log(f2 + .5) / Math.log(10)) + 1, a2w = Math.floor((a2v - 1) / 3), a2y = (a2x = f2.toString()).substring(a2v - 3, a2v), aA = 1; aA < a2w; aA++) a2y = a2x.substring(a2v - 3 * (aA + 1), a2v - 3 * aA) + " " + a2y;
		return a2x.substring(0, a2v - 3 * a2w) + " " + a2y
	}, this.a2z = function(g7, a2v) {
		return g7.toFixed(a2v) + "%"
	}, this.a30 = function(f2, a31) {
		return f2.toFixed(bJ.p9(Math.floor((void 0 === a31 ? 3 : a31) - Math.log10(Math.max(f2, 1))), 0, 8))
	}, this.a32 = function(f2, mJ, a2v) {
		return (f2 * mJ).toFixed(a2v)
	}, this.zc = function(username) {
		var ee, eP = username.indexOf("[");
		return !(eP < 0) && 1 < (ee = username.indexOf("]")) - eP && ee - eP <= 8 ? username.substring(eP + 1, ee).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zc;
	this.a33 = function(pI) {
		for (var et = Math.floor(.5 * pI.length + .5), mP = Math.floor(.5 * (et - 1)), aA = 0; aA < mP; aA++)
			for (var eu = -1; eu < 2; eu += 2) {
				var ev = et + eu * aA;
				if (" " === pI[ev]) return [this.zY(pI.substring(0, ev)), this.a34(pI.substring(ev))]
			}
		return [pI.substring(0, et), pI.substring(et)]
	}, this.a34 = function(pI) {
		for (var ea = pI.length, aA = 0; aA < ea; aA++)
			if (" " !== pI[aA]) return pI.substring(aA);
		return pI
	}, this.zY = function(pI) {
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
		aH.wv(player, bK.ei(eM), bK.ek(eM)) && (bd.dc = !0), aC.k8 && this.ij()
	}, this.ij = function() {
		aC.gv = !1;
		for (var aA = 0; aA < aC.jp; aA++) 0 !== af.lf[aA] && 0 === af.gN[aA] && aH.x1(aA);
		0 !== af.lf[aC.eK] ? (bb.lb[7] = af.gN[aC.eK], bb.lb[8] = af.gb[aC.eK], aQ.a3D(), aV.a3E(), aC.gj || aG.m0(af.iO[aC.eK] - 5, af.iQ[aC.eK] - 5, af.iP[aC.eK] + 5, af.iR[aC.eK] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a3F(18), ae.a3G(),
			ae.lR(!0), bN.x.a3H(), aK.qs(), aC.ot = null, bZ.a3I = !0, bZ.a3J(), aC.k8 && z.a0.setState(1)
	}
}

function bw() {
	this.eX = 512, this.a2T = 15e8, this.a3K = 1e9, this.a2d = 5e4, this.a3L = 512, this.ft = 2, this.eK = 0, this.jp = 0, this.yv = 0, this.kA = 0, this.yu = 0, this.w6 = 512, this.wB = 512, this.a2S = 150, this.k8 = !0, this.gj = 0, this.ys = 0,
		this.jZ = 0, this.mA = !1, this.gv = 0, this.a3M = 0, this.hP = !1, this.wD = 0, this.wE = 0, this.k6 = 0, this.xM = 0, this.ot = null, this.zA = new xF, this.a3N = 30, this.yp = 0, this.yx = 0, this.z9 = 0, this.yk = 0, this.data = new a3O,
		this.a3P = new a3Q, this.a3R = 0, this.a3S = function() {
			bP.dU(), this.yv = this.jp = this.data.humanCount, this.k8 = 1 === this.yv && !__fx.customLobby.isActive(), this.mA = !1, this.gj = this.data.isReplay, this.k6 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xM = this.data.isContest, this.hP = this.k6 < 7 || 9 === this.k6, this.k6 = 10 === this.k6 && this.k8 ? 7 : this.k6, this.k6 = 8 === this.k6 && 2 !== this.jp ? 7 : this.k6, ax
				.dU(), this.wD = this.data.numberTeams, this.data.teamPlayerCount ? this.wE = +(0 < this.data.teamPlayerCount[0]) : (this.wE = 0, this.hP && this.k8 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.wD + 1), aC.a3P.a3T())), this.a3N = this.jp <= 2 ? 30 : this.jp <= 50 ? 40 : 50, this.a3M = this.gv = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.ot = this.gv ?
				new a3C : null, this.w6 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jp) : 1 === l.dh ? this.w6 = this.jp : this.w6 = this.data.playerCount,
				this.wB = this.w6, this.kA = this.w6 - this.jp, this.yu = 0, this.eK = this.data.selectedPlayer, this.yp = 0, this.yx = 0, this.z9 = 0, this.yk = 0, aw.a3U(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3V(), b6.nx.oe = [], be.dU(),
				this.ys = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3W(), ab.dV(), an.a3X(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3Y(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3Z(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3a.putImageData(a3b, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fb(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.zA.dU(), bd.a3Y(), aG.lz(), 0 === af.lf[aC.eK] && aW.show(!1, !0), ae.lR(!0), at.dU(), bd.dc = !0, this.gj || this.k8 && this.gv || z.a0.setState(1), this.a3R = 0
		}, this.a0I = function(a3d) {
			aC.gj || b7.or.a3e.length || (b7.or.a3e = b7.a3f.yL()),
				__fx.customLobby.isActive() === false && ay.x.a3g(),
				this.ys = 0, bd.a3h(), z.a0.setState(0), aZ.setState(0), a3d || bS.e3.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3R ? s.x.a3i() : 1 === this.a3R ? s.t(19) : s.t(5, 5)
		}, this.a3j = function() {
			return this.gj ? aL.gk || !bA.a3k : this.k8 && (aL.gk || this.gv)
		}, this.a3l = function() {
			return 1 === this.ys && !this.gv
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
		b8.pk.a1f(a3m.teamPlayerCount, a3m.playerCount), a3m.numberTeams = b8.pk.a1W(a3m.teamPlayerCount, 0), a3m.teamPlayerCount[0] && a3m.teamPlayerCount[7] && (a3m.teamPlayerCount[7] = 0, this.a3T())
	}, this.a3n = function() {
		var a3m = aC.data;
		a3m.mapType < 2 ? bQ.a6(bQ.a3o(a3m), a3m.mapSeed) : bQ.a3p(a3m.canvas)
	}, this.a3q = function() {
		var a3m = aC.data;
		a3m.colorsData || (a3m.colorsData = new Uint32Array(1)), a3m.selectableColor && (a3m.colorsData[0] = bh.x.ud()), a3m.selectableName && (a3m.playerNamesData || (a3m.playerNamesData = new Array(1)), a3m.playerNamesData[0] = bh.e7.data[122]
			.value)
	}, this.a3r = function() {
		aC.data = new a3O, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eX), aC.data.aIncomeData[0] = 64
	}
}

function dN() {
	this.xt = 0, this.gap = 0, this.rS = 0, this.pi = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xt = .0022 * b8.pb.pc(.5) * h.pd, this.rS = this.xt / h.k, this.gap = Math.max(Math.floor((z.a0.qz() ? .0114 : .01296) * h.pd), 2), this.pi = this.gap / h.k
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
			for (eu = 0; eu < qB[aA].colors.length; eu++) qB[aA].canvas.push(function(id, a1l) {
				if (id < 20) return b8.canvas.xf(aa.get(3), id, a1l);
				var a1l = aa.get(3).height,
					a1m = b8.pb.vP(a1l, a1l),
					hX = b8.pb.getContext(a1m);
				20 === id ? hX.drawImage(aa.get(18), 0, 0) : 21 === id && ai.va.xu(ai.qr.xj + ai.qr.y0, hX, 0, 0, a1l);
				return a1m
			}(qB[aA].id, a41[qB[aA].colors[eu]]))
	}, this.a40 = function() {
		return qB
	}, this.dU = function() {
		oX = [], eh = ej = e9 = 0, a3u = a3v = -1e3, this.resize()
	}, this.resize = function() {
		a3t = Math.floor((z.a0.qz() ? .075 : .0468) * h.pd), zoom = a3t / aa.get(3).height, gap = Math.floor(a3t / 3)
	}, this.a0l = function(ks, kt) {
		return !!this.hH() && (bd.dc = !0, !!ai.va.gn(ks, kt, player) || (ks = function(ks, kt) {
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
				if (7 === a44) return bT.a4A(0), ai.va.show(ks, kt), 2;
				if (4 === a44) b3.a48(0, [player], !0) && b6.fv.oT(player);
				else {
					if (8 !== a44) return 0;
					b6.gw.h0(aQ.h1(), a3w, player)
				}
			}
			return 1
		}(ks, kt), this.qs(), 2 === ks && (ai.va.hH = !0), 0 < ks))
	}, this.a0n = function(ks, kt) {
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
	this.click = function(ks, kt, a0u) {
		var gq = bK.gr(ks),
			gs = bK.gt(kt),
			eM = bK.ey(gq, gs),
			eE = bK.eQ(eM);
		if (!bK.gu(gq, gs)) return !1;
		gq = (z.a0.qz() ? .025 : .0144) * h.pd, gs = performance.now();
		if (Math.abs(ks - a3u) > gq || Math.abs(kt - a3v) > gq || e9 + 500 < gs) return !1;
		if (e9 = gs, a0u && ! function(ks, kt, eE) {
				ab.eV(eE) || -1 === (ks = bL.h3.a4O(ks, kt)) ? aM.a4N(eE) : aM.a4P(ks)
			}(ks, kt, eE), aL.gk || this.hH() || !b8.fv.gm(aC.eK) || aC.gj) return this.qs(), !1;
		if (aC.gv) {
			if (!a0u) {
				if (!ab.eV(eE)) return !1;
				a3w = eM, qB[3].hH = !0
			}
		} else if (bL.h3.o8(eM)) a0u ? aM.a4G(55, 0) : bL.a4E.a4F = -1;
		else {
			if (a0u) return !1;
			bL.h3.a4H(ks, kt) || (2 === aC.ys ? ab.g9(eE) && (player = ab.eS(eE), b8.fv.jD(player) || (qB[0].hH = !0, qB[0].kZ = 1, qB[7].hH = !0)) : ab.ef(eE) ? (a3w = al.eB.eD(eE)) && (gq = bK.eQ(a3w), qB[8].hH = !0, player = ab.eR(gq) ? aC
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
	}, this.a0R = function(ks, kt) {
		return !!this.hH() && (ai.va.hH ? !ai.va.xs(ks, kt) && (ai.va.hH = !1, bd.dc = !0) : function(rD, ks, kt) {
			ks = a43(ks, kt);
			if (0 <= a45(ks)) return !1;
			if ((1 === ks || 6 === ks) && 0 <= a45(2)) return !1;
			if ((6 === ks || 9 === ks) && 0 <= a45(10)) return !1;
			return rD.qs(), bd.dc = !0
		}(this, ks, kt))
	}, this.qs = function() {
		for (var aA = qB.length - 1; 0 <= aA; aA--) qB[aA].hH = !1, qB[aA].kZ = 0;
		ai.va.hH = !1
	}, this.hH = function() {
		return this.a4L() || ai.va.hH
	}, this.a4L = function() {
		for (var ea = qB.length, aA = 0; aA < ea; aA++)
			if (qB[aA].hH) return !0;
		return !1
	}, this.tj = function() {
		if (this.hH())
			if (ai.va.hH) ai.va.tj();
			else {
				var aA, hX = tk,
					eu = qB,
					ea = eu.length,
					a4T = (a3t + gap) / zoom;
				for (hX.imageSmoothingEnabled = !0, hX.setTransform(zoom, 0, 0, zoom, eh, ej), aA = 0; aA < ea; aA++) eu[aA].hH && tk.drawImage(eu[aA].canvas[eu[aA].kZ], eu[aA].eh * a4T, eu[aA].ej * a4T);
				hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4U, a4V, a4W, a4X = -1;

	function a4Y() {
		var a4Z, x9 = canvas.getContext("2d", {
			alpha: !0
		});
		x9.clearRect(0, 0, j, j), x9.fillStyle = b9.md, x9.fillRect(0, 0, j, j), 0 === a4V && (x9.fillStyle = b9.mi, x9.fillRect(0, 0, j, j)), x9.fillStyle = b9.mh, x9.fillRect(0, 0, j, 1), x9.fillRect(0, 0, 1, j), x9.fillRect(0, j - 1, j, 1), x9
			.fillRect(j - 1, 0, 1, j), a4Z = .9 * j / aa.get(0).width, x9.imageSmoothingEnabled = !0, x9.setTransform(a4Z, 0, 0, a4Z, Math.floor((j - a4Z * aa.get(0).width) / 2), Math.floor((j - a4Z * aa.get(0).height) / 2)), x9.drawImage(aa.get(0),
				0, 0), x9.setTransform(1, 0, 0, 1, 0, 0)
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
	}, this.a12 = function() {
		this.gk = !this.gk, this.gk ? (bA.a11(!1), aC.gj && bA.a3k && bA.a13(!0), this.a4a()) : (a4V = -1, a4Y(), !aC.k8 || 1 !== aC.ys || aC.gv || aC.gj || z.a0.setState(1)), bd.dc = !0
	}, this.a4a = function() {
		(aC.k8 || aC.gj) && 1 === aC.ys && (aU.lR(!0), aC.gv || setTimeout(function() {
			bZ.z3()
		}, 0), z.a0.setState(0))
	}, this.gn = function(ks, kt) {
		return 0 <= (a4X = a4b(ks, kt)) || !aL.gk || aC.k8 || aC.gj || bc.hH || aL.a12(), a4X
	}, this.a0R = function(ks, kt) {
		ks = a4b(ks, kt);
		ks !== a4V && (a4V = ks, this.gk || a4Y(), bd.dc = !0)
	}, this.a0S = function(ks, kt) {
		ks = a4b(ks, kt);
		return -1 !== ks && a4X === ks && (this.gk ? aC.mA ? (0 <= ks && bA.a11(!1), !aC.gj) : (0 === ks ? aC.a0I() : 1 === ks ? this.a12() : 2 === ks && s.t(1, 0), !0) : 9 === ks && (this.a12(), !0))
	}, this.tj = function() {
		var i;
		this.gk ? (i = Math.floor(5.5 * j), tk.setTransform(1, 0, 0, 1, ba.gap, aQ.ej), tk.fillStyle = b9.md, tk.fillRect(0, 0, i, j), 0 === a4V ? (tk.fillStyle = b9.mi, tk.fillRect(0, 0, 4 * j, j)) : 1 === a4V && (tk.fillStyle = b9.mi, tk
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tk.fillStyle = b9.mh, tk.fillRect(0, 0, i, 1), tk.fillRect(0, 0, 1, j), tk.fillRect(4 * j, 0, 1, j), tk.fillRect(0, j - 1, i, 1), tk.fillRect(i - 1, 0, 1, j), tk.font = a4U, b8.pb
			.textBaseline(tk, 1), b8.pb.textAlign(tk, 1), tk.fillText(L(41), 2 * j, .54 * j), i = .4 * j, aL.a4f(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.ej + .3 * j, i), i = 1, tk.setTransform(1, 0, 0, 1, ba.gap, aQ.ej - i * a4W * ba.gap - i *
				j), tk.fillStyle = b9.md, tk.fillRect(0, 0, 4 * j, j), a4V === i + 1 && (tk.fillStyle = b9.mi, tk.fillRect(0, 0, 4 * j, j)), tk.fillStyle = b9.mh, tk.fillRect(0, 0, 4 * j, 1), tk.fillRect(0, 0, 1, j), tk.fillRect(4 * j, 0, 1,
				j), tk.fillRect(0, j - 1, 4 * j, 1), tk.fillText(L(0 === i ? 41 : 42), 2 * j, .54 * j), tk.setTransform(1, 0, 0, 1, 0, 0)) : tk.drawImage(canvas, ba.gap, aQ.ej)
	}, this.pC = function(player) {
		return 0 !== af.lf[player] && 2 !== aC.ys && !b8.fv.jD(player)
	}, this.a4f = function(eh, ej, ea) {
		tk.setTransform(1, 0, 0, 1, eh, ej), tk.lineWidth = ba.xt, tk.strokeStyle = b9.mh, tk.beginPath(), tk.moveTo(0, 0), tk.lineTo(ea, ea), tk.moveTo(0, ea), tk.lineTo(ea, 0), tk.stroke()
	}
}

function c9() {
	var a4h, j, a4i, a4j, a4k, a4l, a4m, a4n, a4o;

	function x5() {
		return aQ.a56(aM.a52()) ? au.hH ? __fx.settings.keybindButtons ? aQ.ej - 2 * aQ.j - 3 * a4i : aQ.ej - aQ.j - 2 * a4i : __fx.settings.keybindButtons ? aQ.ej - aQ.j - 2 * a4i : aQ.ej - a4i : bA.a56(aM.a55()) ? au.hH ? bA.x5() - aQ.j - 2 * a4i :
			bA.x5() - a4i : au.hH ? h.j - aQ.j - (bi.a3s() + 1) * a4i : h.j - bi.a3s() * ba.gap
	}

	function a4t(di, pI, id, g7, a4w, a4x, vi, a4y, a4z, a50) {
		var aA, x9, a1m, pT, g, a5B = void 0 !== a4z,
			i = Math.floor(aP.measureText(pI, aM.a4U) + 1.5 * a4j + (a5B ? j : 1.5 * a4j));
		if (bd.dc = !0, i + 2 * a4i + aQ.j > h.i && !a5B && 50 !== id && 20 < pI.length) a4t(di, (g = b8.zX.a33(pI))[0], id, g7, a4w, a4x, vi, a4y, a4z, a50), a4t(di, g[1], id, g7, a4w, a4x, vi, a4y, a4z, a50);
		else if (g = i + (50 === id ? a4k : 0), (a1m = document.createElement("canvas")).width = i, a1m.height = j, (x9 = a1m.getContext("2d", {
				alpha: !0
			})).font = aM.a4U, b8.pb.textBaseline(x9, 1), b8.pb.textAlign(x9, 0), x9.clearRect(0, 0, i, j), x9.fillStyle = a4x, x9.fillRect(0, 0, i, j), x9.fillStyle = a4w, x9.fillText(pI, Math.floor(1.5 * a4j), Math.floor(j / 2)), a5B && (x9
				.imageSmoothingEnabled = !0, ai.va.xu(a4z, x9, i - j, 0, j)), 0 === (pT = {
				e9: di,
				pI: pI,
				id: id,
				player: g7,
				canvas: a1m,
				a4w: a4w,
				a4x: a4x,
				i: i,
				a53: g,
				vi: vi,
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
			yg: [0, 0, 0],
			a4q: [0, 0, 0],
			lx: [220, 180, 180],
			ti: [0, 0, 0],
			ev: [0, 0, 0]
		}, a4h = [], this.resize(), aC.gv && this.z4(0, 18), bQ.vN.vO[bQ.eG].name.length && a5a(L(89, [bQ.vN.vO[bQ.eG].name])), a5a(L(90, [bQ.el - 2 + "x" + (bQ.em - 2)])), a5a(L(91, [b8.zX.yA(an.a5b)])), an.a5b !== an.a5c && a5a(L(92, [b8.zX
			.yA(an.a5c) + " (" + b8.zX.a2z(100 * an.a5c / an.a5b, 1) + ")"
		])), 0 < an.a5d && a5a(L(65, [b8.zX.yA(an.a5d) + " (" + b8.zX.a2z(100 * an.a5d / an.a5b, 1) + ")"])), 0 < an.a5e && a5a(L(93, [b8.zX.yA(an.a5e) + " (" + b8.zX.a2z(100 * an.a5e / an.a5b, 1) + ")"])), 10 === aC.k6 && a4t(120, L(94), 6,
			0, a4u(235, 255, 120), b9.me, -1, !1), 0 !== (self = this).a4p.length && (a4t(200, self.a4p, 0, 0, b9.mh, b9.me, -1, !1), self.a4p = ""), aC.xM && a4t(340, L(43), 6, 0, a4u(255, 200, 0), b9.me, -1, !1)
	}, this.resize = function() {
		var a4v, aA;
		if (j = (j = Math.floor((z.a0.qz() ? .031 : .0249) * h.pd)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4U = b8.pb.rQ(1, this.fontSize), a4i = ba.gap, a4j = Math.floor(j / 5), 0 < a4h.length)
			for (a4v = a4h, a4h = [], aA = a4v.length - 1; 0 <= aA; aA--) a4t(a4v[aA].e9, a4v[aA].pI, a4v[aA].id, a4v[aA].player, a4v[aA].a4w, a4v[aA].a4x, a4v[aA].vi, a4v[aA].a4y, a4v[aA].a4z, a4v[aA].a50);
		this.a51()
	}, this.a51 = function() {
		a4o = document.createElement("canvas");
		var pI = L(44),
			x9 = (a4k = aP.measureText(pI, this.a4U) + 5 * a4j, a4o.height = j, a4o.width = a4k, a4o.getContext("2d", {
				alpha: !0
			}));
		x9.font = this.a4U, b8.pb.textBaseline(x9, 1), b8.pb.textAlign(x9, 1), x9.clearRect(0, 0, a4k, j), x9.fillStyle = b9.n4, x9.fillRect(0, 0, a4k, j), x9.fillStyle = b9.mh, x9.fillText(pI, Math.floor(a4k / 2), Math.floor(j / 2))
	}, this.a52 = function() {
		var ea;
		return au.hH ? au.i : 0 === (ea = a4h.length) ? 0 : 1 === ea ? a4h[0].a53 : a54(a4h[0].a53, a4h[1].a53)
	}, this.a55 = function() {
		var ea = a4h.length;
		return au.hH ? ea ? a54(au.i, a4h[0].a53) : au.i : 0 === ea ? 0 : 1 === ea ? a4h[0].a53 : 2 === ea ? a54(a4h[0].a53, a4h[1].a53) : a54(a54(a4h[0].a53, a4h[1].a53), a4h[2].a53)
	}, this.gn = function(eh, ej) {
		for (var m7, a57, a58 = x5(), aA = a4h.length - 1; 0 <= aA; aA--)
			if ((a57 = a58 - (aA + 1) * j) <= ej && ej < a57 + j) return 50 === a4h[aA].id ? eh >= h.i - a4k - a4i - a4h[aA].i && (eh >= h.i - a4k - a4i ? b6.fv.oT(a4h[aA].player) : aG.m1(a4h[aA].player, 800, !1, 0), !0) : eh >= h.i - a4h[aA].i -
				a4i && (736 === a4h[aA].id ? (a57 = a4h[aA].pI.split(" "), window.open(a57[a57.length - 1], "_blank")) : a4h[aA].a4y && (a4h[aA].a50 && a4h[aA].a50.et ? (a57 = a4h[aA].a50.eM, m7 = bK.ei(a57) - 10, a57 = bK.ek(a57) - 10, aG
					.m0(m7, a57, 19 + m7, 19 + a57)) : a4h[aA].a50 && a4h[aA].a50.eu ? aG.m2(a4h[aA].player, a4h[aA].a50.m3) : (aG.m1(a4h[aA].player, 800, !1, 0), 0 <= a4h[aA].vi && (m7 = a4h[aA].vi, a4h[aA].vi = a4h[aA].player, a4h[
					aA].player = m7))), !0);
		return !1
	}, this.zG = function(di, pI, id, g7, a4w, a4x, vi, a4y, a4z, a50) {
		a4t(di, pI, id, g7, a4w, a4x, vi, a4y, a4z, a50)
	}, this.a5A = function(p) {
		a4t(300, p, 252, 0, b9.mh, b9.me, -1, !1)
	}, this.a3F = function(id) {
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].id === id && (a4h[aA].e9 = 1)
	}, this.z4 = function(player, id) {
		0 === id ? (aP.ix(player, 0), a5C(423, 0), a4t(160, L(45, [af.zT[player]]), 423, player, "rgb(10,220,10)", b9.me, -1, !1)) : 1 === id ? (a5D(50, aC.eX), aP.ix(player, 1), a4t(360, L(46, [af.zT[player]]), 0, player, b9.nN, b9.me, -1, !0),
			aG.m1(player, 2700, !1, 0)) : 2 === id ? (aP.ix(player, 2), a4t(0, L(47), 0, player, "rgb(10,255,255)", b9.me, -1, !0), aG.m1(player, 2700, !1, 0)) : 3 === id ? (aP.ix(player, 2), a4t(0, L(48, [af.zT[player]]), 0, player, b9.mh,
			b9.me, -1, !0), aG.m1(player, 2700, !1, 0)) : 4 === id ? this.a5E(1, player, player) : 5 === id ? 2 === af.a2I[player] || b8.fv.jD(aC.eK) || (function(id, la) {
			var aA, a5P = 0,
				ea = a4h.length;
			for (aA = 0; aA < ea; aA++)
				if (a4h[aA].id === id && la <= ++a5P) return a4h.splice(aA, 1)
		}(1, 5), ae.a5G(player) ? a4t(180, L(49, [af.zT[player]]), 1, player, a4u(255, 200, 180), b9.me, -1, !0) : (a5C(573, 0), a4t(180, L(50, [af.zT[player]]), 573, player, b9.nN, b9.me, -1, !0))) : 18 === id ? a4t(255, L(51), 18, 0, b9.mh,
			b9.me, -1, !1) : 21 === id ? a4t(220, L(52), id, 0, b9.mh, b9.me, -1, !1) : 22 === id ? this.a5E(2, player, player) : 59 === id && a4t(0, L(53), id, 0, b9.ne, b9.me, 0, !1)
	}, this.a0C = function(p) {
		a4t(200, L(54, [p]), 94, 0, b9.mh, b9.nJ, -1, !1)
	}, this.zB = function(a5H) {
		if (aC.eK === a5H && !aC.k8)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4t(0, "Your Win Count is now " + __fx.wins.count, 3, a5H, b9.mh, b9.me, -1, !0);
		af.gN[a5H] && (aP.ix(a5H, 2), aC.jp < 100 ? a4t(0, L(48, [af.zT[a5H]]), 3, a5H, b9.mh, b9.me, -1, !0) : a4t(0, L(55, [af.zT[a5H]]), 3, a5H, b9.mh, b9.me, -1, !0))
	}, this.a4N = function(eE) {
		var a5J, pI, a5I = "(" + bK.ei(eE >> 2) + ", " + bK.ek(eE >> 2) + ")",
			a4y = !1,
			player = 0;
		ab.eV(eE) ? ab.eR(eE) ? a5I = L(56, [a5I]) : (player = ab.eS(eE), pI = L(57, [b8.x9.a1y(af.zZ[player], b8.pb.rQ(0, 10), 150)]) + "   ", pI = (pI += L(58, [b8.zX.yA(af.gb[player])]) + "   ") + L(59, [b8.zX.yA(af.gN[player])]) + "   ", aC
				.hP && (a5J = be.zE[be.kB[be.eY[player]]], pI += L(60) + ": " + a5J + "   "), b8.fv.jD(player) && (pI += L(61) + ": " + aD.k0[aD.hE[player]] + "   "), a5I = pI = (pI += L(62, [player]) + "   ") + L(63, [a5I]), a4y = !0) : a5I = ab
			.ef(eE) ? L(64, [a5I]) + "   #" + ab.eI(eE) : L(65, [a5I]), bd.dc = !0, a5C(55, 0), a4t(220, a5I, 55, player, b9.mh, b9.me, -1, a4y)
	}, this.a4P = function(a5K) {
		var kX = bL.x,
			player = kX.a5L[a5K] >> 3,
			pI = (bd.dc = !0, a5C(55, 0), L(66, [af.zT[player]]) + "   ");
		a4t(220, pI += L(58, [kX.a5M[a5K]]), 55, player, b9.mh, b9.me, -1, !0)
	}, this.oD = function(o0, a5N, oE) {
		o0 === aC.eK ? a4t(175, " " + L(67, [af.zT[a5N]]) + ": ", 1001, a5N, a4u(200, 255, 210), b9.me, -1, !0, oE) : this.a5O(o0, oE)
	}, this.a5O = function(o0, oE) {
		a5C(1e3, 0), a4t(175, af.zT[o0] + ": ", 1e3, o0, b9.mh, "rgba(5,60,25,0.9)", -1, !0, oE)
	}, this.zH = function() {
		var p;
		aC.yx ? (p = L(68), aP.zF(L(69), 2, 1, 12), a4t(0, p, 40, 0, "rgb(10,220,10)", b9.me, -1, !1)) : (p = L(70), aP.zF(L(71), 2, 0, 16), a4t(0, p, 41, 0, b9.mh, b9.me, -1, !1))
	}, this.xG = function() {
		var g2 = af.zT,
			ed = aC.data;
		a4t(300, g2[0] + " [" + aC.zA.xL(ed.elo[0]) + "] vs " + g2[1] + " [" + aC.zA.xL(ed.elo[1]) + "]", 65, 0, b9.mY, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5Q = function(p) {
		a4t(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5R = function(a5S) {
		a4t(0, L(a5S ? 72 : 73), 247, 0, b9.nd, b9.me, -1, !1)
	}, this.xO = function(xK, xN, a5T) {
		var ed = aC.data,
			g2 = af.zT;
		a4t(0, g2[0] + ": " + aC.zA.xL(ed.elo[0]) + " -> " + xK, 66, 0, b9.mh, a5T[0], -1, !1), a4t(0, g2[1] + ": " + aC.zA.xL(ed.elo[1]) + " -> " + xN, 66, 1, b9.mh, a5T[1], -1, !1)
	}, this.oU = function(player, id) {
		0 === id ? a5D(50, player) ? (a4t(128, L(74, [af.zT[player]]), 52, player, a4u(180, 255, 180), b9.me, -1, !0), ae.pA(player, 2, 255)) : a4t(384, L(75, [af.zT[player]]), 51, player, a4u(210, 210, 255), b9.me, -1, !0) : a5D(51, player) ? (
			a4t(128, L(76, [af.zT[player]]), 52, player, b9.mh, "rgba(60,120,10,0.9)", -1, !0), ae.pA(player, 2, 255)) : (a4t(384, L(77, [af.zT[player]]), 50, player, b9.mh, "rgba(90,90,90,0.9)", -1, !0), ae.pA(player, 2, 96))
	}, this.oY = function(yg, target) {
		var color = a4u(210, 255, 210);
		1 < yg.length ? a4t(230, L(78, [yg.length, af.zT[target]]), 66, target, color, b9.me, -1, !0) : a4t(230, L(79, [af.zT[yg[0]], af.zT[target]]), 66, yg[0], color, b9.me, target, !0)
	}, this.a5U = function(player, target) {
		a4t(230, L(80, [af.zT[player], af.zT[target]]), 66, player, b9.mh, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4G = function(id, g2) {
		a5C(id, g2)
	}, this.yz = function(id, player) {
		a5D(id, void 0 === player ? aC.eX : player)
	}, this.a5V = function(id) {
		for (var aA = a4h.length - 1; 0 <= aA; aA--)
			if (a4h[aA].id === id) return a4h[aA];
		return null
	}, this.oP = function(a5W, a5X, player) {
		2 !== af.a2I[aC.eK] && (a4t(200, 1 === a5W ? L(81, [af.zT[player]]) : L(82, [b8.zX.yA(a5W), af.zT[player]]), 30, player, "rgb(190,255,190)", b9.me, -1, !0), a5X) && a4t(30, 1 === a5X ? L(83) : L(84, [b8.zX.yA(a5X)]), 30, 0, b9.mh, b9.me,
			-1, !1)
	}, this.a5Z = function(a5W, player) {
		2 !== af.a2I[aC.eK] && (a5C(31, 0), 2 === af.a2I[player] || player >= aC.jp ? a4t(150, 1 === a5W ? L(85, [af.zT[player]]) : L(86, [af.zT[player], b8.zX.yA(a5W)]), 31, player, b9.mY, "rgba(205,205,205,0.9)", -1, !0) : a4t(150, 1 === a5W ?
			L(87, [af.zT[player]]) : L(88, [af.zT[player], b8.zX.yA(a5W)]), 31, player, b9.mY, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yy = function(bp) {
		for (var ev = bd.jm(), aA = 2; 0 <= aA; aA--) 0 < a4l.ti[aA] && (bp || a4l.ev[aA] < ev - 220) && this.a5f(aA)
	}, this.a5f = function(id) {
		var pI, ea = a4l.ti[id],
			player = a4l.yg[id];
		a4l.ti[id] = 0, 1 === ea ? (0 === id ? pI = L(95, [af.zT[player], af.zT[a4l.a4q[0]]]) : 1 === id ? pI = L(96, [af.zT[player]]) : 2 === id ? pI = L(97, [af.zT[player]]) : 3 === id && (pI = L(98, [af.zT[player]])), a5C(7, 0), a4t(a4l.lx[
			id], pI, 7, a4l.a4q[id], b9.mh, b9.me, -1, !0)) : (pI = L(0 === id ? 99 : 1 === id ? 100 : 101, [ea]), a5C(7, 0), a4t(a4l.lx[id], pI, 7, player, b9.mh, b9.me, -1, !1))
	}, this.a5E = function(id, gz, vi) {
		var ev = bd.jm(),
			ea = a4l.ti[id] + 1;
		a4l.ti[id]++, a4l.yg[id] = gz, a4l.a4q[id] = vi, 1 === ea && (a4l.ev[id] = ev), (1 === ea && (aC.yv < 32 || 2 === aC.ys) || 1 < ea && (a4l.ev[id] < ev - 140 || 2 === aC.ys)) && this.a5f(id)
	}, this.ij = function() {
		b0.ij();
		for (var hj = (hj = a4h.length - a4m) <= 1 ? 1 : hj * hj, aA = a4h.length - 1; 0 <= aA; aA--) 0 < a4h[aA].e9 && (a4h[aA].e9 -= hj, a4h[aA].e9 <= 0) && (bd.dc = !0, a4h.splice(aA, 1));
		! function() {
			var g2, aA;
			if (128 !== a4n && !(++a4n < 128))
				for (g2 = 5, aA = ak.jq - 1; 0 <= aA; aA--) 1 === af.a2I[ak.jr[aA]] && 0 < g2-- && a4t(240, L(98, [af.zT[ak.jr[aA]]]), 1, ak.jr[aA], b9.mY, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yy(!1)
	}, this.tj = function() {
		for (var w9, ej = x5(), aA = a4h.length - 1; 0 <= aA; aA--) w9 = ej - (aA + 1) * j, 50 === a4h[aA].id ? (tk.drawImage(a4h[aA].canvas, h.i - a4h[aA].i - a4k - a4i, w9), tk.drawImage(a4o, h.i - a4k - a4i, w9)) : tk.drawImage(a4h[aA].canvas,
			h.i - a4h[aA].i - a4i, w9)
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
	}, this.tj = function() {
		tk.lineWidth = 1 + Math.floor(j / 15), tk.translate(h.i - j, Math.floor(.5 * (h.j + i))), tk.rotate(-Math.PI / 2), tk.fillStyle = b9.mh, tk.fillRect(0, 0, i, j), tk.strokeStyle = b9.mY, tk.strokeRect(0, 0, i, j + 10), tk.fillStyle = b9
			.mY, tk.font = font, b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 1), tk.fillText(a5h, Math.floor(i / 2), Math.floor(.59 * j)), tk.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4h, a5q, a4U, j, a5r;

	function a5t(aA) {
		var a5v = !0,
			hf = b9.mh,
			i = (a4h[aA].j0 === aC.eX ? a4h[aA].x9.fillStyle = b9.ms : (ab.a5w(a4h[aA].j0), a4h[aA].x9.fillStyle = b8.color.mb(bM.f9[0], bM.f9[1], bM.f9[2], .87), 400 < b8.pk.a1Q(bM.f9, 0, 2) && (a5v = !1, hf = b9.mY)), a4h[aA].canvas.width),
			rx = (a4h[aA].x9.clearRect(0, 0, i, j), a4h[aA].x9.fillRect(0, 0, i, j), a4h[aA].x9.fillStyle = hf, ! function(x9, i, j) {
				x9.fillRect(0, 0, i, 1), x9.fillRect(0, j - 1, i, 1), x9.fillRect(0, 0, 1, j), x9.fillRect(i - 1, 0, 1, j)
			}(a4h[aA].x9, i, j), a5q + 2 * j < i && (a4h[aA].x9.fillRect(i - a5q - j, 0, 1, j), a4h[aA].x9.fillText(af.zT[a4h[aA].j0], Math.floor((i - a5q) / 2), Math.floor(.57 * j))), 0 !== a4h[aA].id ? 0 : j);
		a4h[aA].x9.fillText(b8.zX.yA(a4h[aA].hE), Math.floor(i - a5q / 2 - rx), Math.floor(.57 * j)),
			function(aA, i, rx, a5v) {
				a4h[aA].x9.fillStyle = a5v ? b9.mj : b9.mf;
				a5v = Math.floor(a5q * a4h[aA].hE / a4h[aA].a62);
				a4h[aA].x9.fillRect(Math.floor(i - a5q - rx), j - a5r, a5v, a5r)
			}(aA, i, rx, a5v), 0 === a4h[aA].id ? (a5z(aA, i, a5v, hf), function(aA, i, a5v) {
				a4h[aA].x9.strokeStyle = a5v ? b9.mz : b9.n9, a4h[aA].x9.fillRect(j, 0, 1, j);
				a5v = i - j;
				a4h[aA].x9.beginPath(), a4h[aA].x9.moveTo(Math.floor(.3 * j + a5v), Math.floor(j / 2)), a4h[aA].x9.lineTo(Math.floor(j - .3 * j + 0 + a5v), Math.floor(j / 2)), a4h[aA].x9.stroke(), a4h[aA].x9.beginPath(), a4h[aA].x9.moveTo(Math
					.floor(j / 2 + a5v), Math.floor(.3 * j)), a4h[aA].x9.lineTo(Math.floor(j / 2 + a5v), Math.floor(j - .3 * j + 0)), a4h[aA].x9.stroke()
			}(aA, i, a5v)) : a5z(aA, 2 * j, a5v, hf)
	}

	function a5z(aA, i, a5v, hf) {
		a4h[aA].x9.strokeStyle = a4h[aA].a63 ? b9.mq : a5v ? b9.nF : b9.nG, a4h[aA].x9.fillStyle = hf, a4h[aA].x9.fillRect(i - j, 0, 1, j), a4h[aA].x9.lineWidth = Math.max(Math.floor(j / 12), 3), a4h[aA].x9.lineCap = "round";
		a5v = .35;
		i = j + 1, a4h[aA].x9.beginPath(), a4h[aA].x9.moveTo(Math.floor(i - a5v * j + 0), Math.floor(a5v * j)), a4h[aA].x9.lineTo(Math.floor(i - j + a5v * j), Math.floor(j - a5v * j + 0)), a4h[aA].x9.stroke(), a4h[aA].x9.beginPath(), a4h[aA].x9
			.moveTo(Math.floor(i - j + a5v * j), Math.floor(a5v * j)), a4h[aA].x9.lineTo(Math.floor(i - a5v * j + 0), Math.floor(j - a5v * j + 0)), a4h[aA].x9.stroke()
	}

	function a6D(ea) {
		for (var hE, aA = ea - 1; 0 <= aA; aA--) hE = ac.fm(aC.eK, aA), a4h[aA].hE !== hE && (a4h[aA].hE = hE, a4h[aA].a62 = hE > a4h[aA].a62 ? hE : a4h[aA].a62, a4h[aA].a5u = !0)
	}

	function a5s(a6F) {
		a6F.canvas = document.createElement("canvas"), bQ.vT.font = a4U;
		var i = a5q;
		a6F.j0 < aC.eX && 0 === a6F.id && (i += Math.floor(bQ.vT.measureText(af.zT[a6F.j0] + "000").width)), i += j, 0 === a6F.id && (i += j), a6F.canvas.width = i, a6F.canvas.height = j, a6F.x9 = a6F.canvas.getContext("2d", {
			alpha: !0
		}), a6F.x9.font = a4U, b8.pb.textBaseline(a6F.x9, 1), b8.pb.textAlign(a6F.x9, 1)
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
		a4U = aM.a4U, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qz() && (j = Math.floor(1.25 * j)), a5r = Math.floor(.15 * j), bQ.vT.font = a4U, a5q = Math.floor(bQ.vT.measureText("02 000 000 0000").width);
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a5s(a4h[aA]), a5t(aA)
	}, this.lR = function() {
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].a5u && (a4h[aA].a5u = !1, a5t(aA))
	}, this.gn = function(ks, kt) {
		if (2 !== aC.ys && 0 !== af.lf[aC.eK] && !aC.gj && !b8.fv.jD(aC.eK))
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
					x9: null
				}), a4v.push(hE)
			}
			a4h = a4v
		}(ea), a6D(ea))
	}, this.a6G = function(g7) {
		for (var ea = Math.min(a4h.length, ac.ff(aC.eK)), aA = 0; aA < ea; aA++)
			if (a4h[aA].j0 === g7) return void(a4h = [])
	}, this.tj = function() {
		if (0 !== af.lf[aC.eK] && (!b8.fv.jD(aC.eK) || aC.gj))
			for (var aA = a4h.length - 1; 0 <= aA; aA--) tk.drawImage(a4h[aA].canvas, a69(aA), a6A(aA))
	}
}

function cC() {
	var a4h, ju, a6I, a6J, j, a4U, fontSize, a6K, a6L, a6M, a6N, canvas, x9, ls, a6O;

	function u1(aA) {
		return L(0 === aA ? 103 : 1 === aA ? 104 : 2 === aA ? 105 : 106)
	}

	function a6V() {
		tk.drawImage(canvas, ba.gap + (aC.hP ? ba.gap + bf.a6W() : 0), a6X + 2 * ba.gap)
	}

	function a6P() {
		canvas.width = a4h[0].width + a6M, canvas.height = j + a6M, (x9 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4h[0].width + a6M, j + a6M), x9.translate(Math.floor(a6M / 2), Math.floor(a6M / 2)), x9.lineWidth = a6M, x9.fillStyle = 1 === a4h[0].a6U ? b9.mm : b9.me, a6Y(), x9.fill(), x9.strokeStyle = 1 === a4h[0].a6U ? b9.mY :
			b9.mh, a6Y(), x9.stroke(), b8.pb.textAlign(x9, 1), b8.pb.textBaseline(x9, 1), x9.fillStyle = 1 === a4h[0].a6U ? b9.mY : b9.mh, x9.font = a4U[0], x9.fillText(u1(a4h[0].a6T), Math.floor(a4h[0].width / 2), Math.floor(.72 * a6K[0] * j)), x9
			.font = a4U[1], x9.fillText(a4h[0].pI, Math.floor(a4h[0].width / 2), Math.floor((a6K[0] + .48 * a6K[1]) * j))
	}

	function a6Y() {
		x9.beginPath(), x9.moveTo(a6N, 0), x9.lineTo(a4h[0].width - a6N, 0), x9.lineTo(a4h[0].width, a6N), x9.lineTo(a4h[0].width, j - a6N), x9.lineTo(a4h[0].width - a6N, j), x9.lineTo(a6N, j), x9.lineTo(0, j - a6N), x9.lineTo(0, a6N), x9.closePath()
	}
	this.dU = function() {
		ju = 4, a6I = a6J = ls = 0, a4h = [], a4U = new Array(2), fontSize = new Array(2), (a6K = new Array(2))[0] = .3, a6K[1] = .7, a6L = new Array(4), canvas = document.createElement("canvas"), a6O = bd.e9 + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qz() ? .0725 : .058) * h.pd), fontSize[0] = Math.floor(.85 * a6K[0] * j), fontSize[1] = Math.floor(.85 * a6K[1] * j), a4U[0] = b8.pb.rQ(1, fontSize[0]), a4U[1] = b8.pb.rQ(1, fontSize[1]), aA = a6L.length -
			1; 0 <= aA; aA--) a6L[aA] = this.measureText(u1(aA) + "000", a4U[0]);
		if (a6M = Math.floor(1 + .05 * j), a6N = Math.floor(.2 * j), 0 < a4h.length) {
			for (aA = a4h.length - 1; 0 <= aA; aA--) i = this.measureText(a4h[aA].pI + "00", a4U[1]), a4h[aA].width = i < a6L[aA] ? a6L[aA] : i;
			a6P()
		}
	}, this.ij = function() {
		0 !== ju && (4 === ju ? bd.e9 > a6O && (ju = 0, 1 === aC.ys) && aP.zF(bQ.vN.vO[bQ.eG].name, 3, 1, 9) : (1 === ju ? (0 === a6I && (a6P(), a6I = 1e-4), 1 <= (a6I += .002 * (bd.e9 - ls)) && (a6J = 0, ju = 2, a6I = 1), bd.dc = !0) : 2 ===
			ju ? ((a6J += (bd.e9 - ls) / 1e3) > a4h[0].lx || 1 < a6J && 1 < a4h.length) && (ju = 3) : 3 === ju && ((a6I -= .002 * (bd.e9 - ls)) <= 0 && (a6I = 0, a4h.shift(), ju = 0 < a4h.length ? 1 : 0), bd.dc = !0), ls = bd.e9))
	}, this.measureText = function(pI, a4U) {
		return tk.font = a4U, Math.floor(tk.measureText(pI).width)
	}, this.ix = function(a6S, aA) {
		this.zF(af.zT[a6S], aA, 1, 0 === aA ? 3 : 7)
	}, this.zF = function(pI, a6T, a6U, lx) {
		var i;
		pI.length && (i = (i = this.measureText(pI + "00", a4U[1])) < a6L[a6T] ? a6L[a6T] : i, a4h.push({
			pI: pI,
			width: i,
			a6T: a6T,
			a6U: a6U,
			lx: lx
		}), 0 === ju) && (a6I = 0, ju = 1, ls = bd.e9)
	}, this.tj = function() {
		0 !== ju && 0 !== a6I && (a6I < 1 ? (tk.globalAlpha = a6I, a6V(), tk.globalAlpha = 1) : a6V())
	}
}

function ck() {
	var j, canvas, x9, a6Z, a6a, a6b, a6c, a5u, a6d, a6e, a6f, a6g, a5S = !1,
		a1m = (this.hH = !1, this.i = 0, new Array(2)),
		a6h = 0;

	function lS() {
		var i = au.i,
			kX = (a5u = !1, x8(x9, i, j), Math.floor(i / 2));
		1 === a6Z ? (x9.fillStyle = b9.n1, x9.fillRect(kX, 0, kX, j)) : -1 === a6Z && (x9.fillStyle = b9.nH, x9.fillRect(0, 0, kX, j)), xA(x9, i, j, 2);
		var kX = (kX = Math.floor(.25 * j)) < 2 ? 2 : kX,
			a5b = (x9.fillStyle = b9.mn, Math.floor((j - 4) * a6a[1] / a6b[1]));
		0 < a5b && x9.fillRect(2, j - 2 - a5b, kX, a5b), 0 < (a5b = Math.floor((j - 4) * a6a[0] / a6b[0])) && x9.fillRect(i - 2 - kX, j - 2 - a5b, kX, a5b);
		kX = (kX = Math.floor(j / 8)) < 2 ? 2 : kX, xC(x9, Math.floor(.4 * j), 0, j, kX, .5, !1), xC(x9, Math.floor(i - 1.4 * j), 0, j, kX, .5, !0), a5b = 1.1 * j / a1m[0].width;
		x9.imageSmoothingEnabled = !0, x9.setTransform(a5b, 0, 0, a5b, (i - a5b * a1m[0].width) / 2, -.05 * j), x9.drawImage(a1m[+a5S], 0, 0), x9.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6m() {
		a6g = -1, a5S = ag.a6n(), aM.a3F(257), aM.a5R(a5S), au.hH = !0, a5u = !0, a6d = 360;
		for (var f2, di = 0, aA = ak.jq - 1; 0 <= aA; aA--) b8.fv.jD(ak.jr[aA]) || (di += af.gN[ak.jr[aA]]);
		a5S ? a6b[0] = Math.max(bJ.dj(3 * di, 4), 1) : aC.hP ? 9 === aC.k6 && 8 === be.kB[bf.l1()] ? a6b[0] = Math.max(di, 1) : (f2 = bJ.dj(100 * bf.a2j(), aC.jZ), f2 = bJ.p9(200 - 2 * f2, 40, 100), f2 = bJ.dj(f2 * di, 100), a6b[0] = Math.max(f2,
			1)) : a6b[0] = Math.max(bJ.dj(3 * di, 5), 1), a6b[1] = Math.max(di - a6b[0], 1)
	}

	function a6i() {
		a6f = bd.jm(), a5u = !0, a6d = a6Z = 0, a6c = [], au.hH = !1, aM.yz(247), a6a[0] = a6a[1] = 0, aM.a3F(673)
	}

	function x5() {
		return aQ.a56(aM.a52()) ? __fx.settings.keybindButtons ? aQ.ej - 2 * (j + ba.gap) : aQ.ej - j - ba.gap : bA.a56(aM.a55()) ? bA.x5() - j - ba.gap : h.j - j - bi.a3s() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1m[aA] = b8.canvas.xf(aa.get(3), 8 - aA, b9.nq), a1m[aA] = b8.canvas.a1o(a1m[aA])
	}, this.dU = function() {
		a6f = -1e4, a6e = a6h = 0, a6g = -1, this.hH = !1, a5u = a5S = !1, a6a = [a6Z = a6d = 0, 0], a6b = [1, 1], a6c = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x9 = canvas.getContext("2d", {
			alpha: !0
		}), lS()
	}, this.lR = function() {
		a5u && lS()
	}, this.gn = function(eh, ej) {
		return !!this.hH && !(eh < h.i - this.i - ba.gap || ej < x5() || (aC.gj || this.hI(aC.eK) && (aL.gk && aL.a12(), b6.gw.hJ(eh > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ij = function() {
		0 < a6e ? 0 === --a6e && a6i() : this.hH ? 180 == --a6d && 3 * a6a[0] < a6b[0] ? a6i() : a6a[0] >= a6b[0] ? a5S ? bP.yV.yn() : bP.yV.yr() : a6a[1] >= a6b[1] ? a6e = 4 : a6d <= 0 && a6i() : ! function() {
			var a6p = bd.jm();
			if (a6p % 40 == 14) {
				if (a6h) return !(a6p < a6h) && !(a6p < a6f + 535) && (a6h = a6p + 1071, b8.fv.a2L()) ? (a6m(), 1) : 0;
				(1 === ak.jq || (aC.hP ? bf.a2j() : af.gN[l4[0]]) >= bJ.dj(96 * aC.jZ, 100)) && (a6h = a6p + 535)
			}
			return
		}() && 0 <= a6g && (aM.zG(250, L(107, [af.zT[a6g]]), 673, a6g, b9.mh, b9.me, -1, !0), a6m())
	}, this.yt = function() {
		this.hH && a6a[0] < a6b[0] && a6i()
	}, this.pB = function(player, a6q) {
		var a6r = L(a6q ? 108 : 109, [af.zT[player]]),
			a6r = (aM.zG(450, a6r, 257, player, a6q ? b9.mz : b9.nE, b9.me, -1, !0), a6c.push(player), a5u = !0, aC.k8 ? Math.max(a6b[0], a6b[1]) : af.gN[player]),
			a6r = Math.max(a6r, 1);
		a6q ? a6a[0] += a6r : a6a[1] += a6r, player === aC.eK && (a6Z = a6q ? 1 : -1)
	}, this.tj = function() {
		var ej;
		this.hH && (ej = x5(), tk.drawImage(canvas, h.i - this.i - ba.gap, ej))
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
	var i, eh, a6s, canvas, x9, hH, i9, a36, a4U, a5u, a6t = 11 / 12;

	function a6v() {
		var a61 = Math.floor(i9 * (i - 2 * a6s)),
			a6y = 1 + Math.floor(.0625 * aQ.j),
			a6z = 1 + Math.floor(.3 * aQ.j),
			a70 = Math.floor(.55 * aQ.j);
		x9.clearRect(0, 0, i, aQ.j), x9.fillStyle = b9.md, x9.fillRect(0, 0, a6s, aQ.j), x9.fillRect(a6s + a61, 0, i - a6s - a61, aQ.j), x9.fillStyle = i9 < 1 / 3 ? "rgba(" + Math.floor(3 * i9 * 130) + ",130,0,0.85)" : i9 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (i9 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i9 - 2 / 3) * 130) + ",0.85)", x9.fillRect(a6s, 0, a61, aQ.j), x9.fillStyle = b9.mh, x9.fillRect(0, 0, i, 1), x9.fillRect(0, aQ.j - 1, i, 1), x9
			.fillRect(0, 0, 1, aQ.j), x9.fillRect(a6s, 0, 1, aQ.j), x9.fillRect(a6s + a61, 0, 1, aQ.j), x9.fillRect(i - a6s, 0, 1, aQ.j), x9.fillRect(i - 1, 0, 1, aQ.j), x9.fillRect(Math.floor(.25 * aQ.j) + a6z, Math.floor((aQ.j - a6y) / 2), aQ.j -
				2 * a6z, a6y), x9.fillRect(Math.floor(i - 1.25 * aQ.j) + a6z, Math.floor((aQ.j - a6y) / 2), aQ.j - 2 * a6z - a6z % 2, a6y), x9.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6y) / 2), a6z, a6y, aQ.j - 2 * a6z - a6z % 2),
			a36 = b8.fv.i8(aC.eK, aQ.h1()), x9.fillText(b8.zX.yA(a36) + " (" + b8.zX.a2z(100 * i9, +(i9 < .1)) + ")", Math.floor(.5 * i), a70)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i9 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0y(arg1);

	function a75(a1L) {
		return !(1 < a1L && 1 === i9 || (1 < a1L && a1L * i9 - i9 < 1 / 1024 ? a1L = (i9 + 1 / 1024) / i9 : a1L < 1 && i9 - a1L * i9 < 1 / 1024 && (a1L = (i9 - 1 / 1024) / i9), i9 = bJ.p9(i9 * a1L, 1 / 1024, 1), a6v(), 0))
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
			.pb.rQ(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, tk), canvas.height = this.j, (x9 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4U, b8.pb.textBaseline(x9, 1), b8.pb.textAlign(x9, 1), this.a6u(), a6v()
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
	}, this.a0v = function(ks, kt) {
		return this.hH() && eh < ks && ks < eh + i && kt > this.ej
	}, this.gn = function(ks, kt) {
		if (!this.hH()) return !1;
		if (!(__fx.settings.keybindButtons && kt > this.ej - Math.floor(ba.gap / 4) - this.j && kt < this.ej - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(ks - eh))) {
			if (!aQ.a0v(ks, kt)) return !1;
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
	}, this.a0y = function(mJ) {
		0 !== aC.ys && this.hH() && a75(mJ) && (bd.dc = !0)
	}, this.a0U = function(deltaY) {
		var mJ;
		return !(0 === deltaY || !this.hH()) && a75(mJ = 0 < deltaY ? (mJ = 400 / (400 + deltaY)) < a6t ? a6t : mJ : 1 / a6t < (mJ = (400 - deltaY) / 400) ? 1 / a6t : mJ)
	}, this.a0R = function(ks) {
		return !!this.go && a76(ks)
	}, this.a0r = function() {
		this.go = !1
	}, this.ij = function() {
		this.hH() && a36 !== b8.fv.i8(aC.eK, this.h1()) && (a5u = !0)
	}, this.tj = function() {
		this.hH() && (tk.drawImage(canvas, eh, this.ej), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(tk, eh, this.ej)
	}
}

function cu() {
	var canvas, x9, a77, font, a78 = 0,
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
			for (tk.fillStyle = b9.md, tk.fillRect(eh, ej, i, j), tk.fillStyle = b9.n6, tk.fillRect(eh, ej + a7B * a70, i, a70), tk.fillStyle = b9.mh, tk.fillRect(eh, ej, 2, j), tk.fillRect(eh, ej, i, 2), tk.fillRect(eh + i - 2, ej, 2, j), aA =
				1; aA < ea; aA++) tk.fillRect(eh, ej + aA * a70, i, 2);
			for (tk.fillStyle = b9.mh, b8.pb.textAlign(tk, 1), b8.pb.textBaseline(tk, 1), tk.font = b8.pb.rQ(0, .6 * a70), eh += .5 * i, aA = 0; aA < ea; aA++) tk.fillText(a7P(aA), eh, ej + (aA + .6) * a70)
		}
		tk.drawImage(canvas, Math.floor(a77.eh), Math.floor(a77.ej))
	}

	function lS(rD) {
		var eh, m7, m8, a70;
		x9.clearRect(0, 0, Math.floor(a77.i), Math.floor(a77.j)), x9.fillStyle = b9.md, x9.fillRect(0, 0, Math.floor(a77.i), Math.floor(a77.j)), aC.mA && (x9.fillStyle = b9.n6, x9.fillRect(0, 0, Math.floor(.3 * a77.i), Math.floor(a77.j))), x9
			.fillStyle = b9.mh, x9.fillText("Hide UI", .15 * a77.i, .5 * a77.j), x9.fillRect(Math.floor(.3 * a77.i - .5), 0, 2, Math.floor(a77.j)), eh = .5 * a77.i, x9.fillText("Replay Speed", eh, .31 * a77.j), x9.fillText(a7P(a7B), eh, .69 * a77.j),
			x9.fillRect(Math.floor(.7 * a77.i - .5), 0, 2, Math.floor(a77.j)), rD.a3k ? (eh = Math.floor(.02 * a77.i), rD = Math.floor(.025 * a77.i), m7 = Math.floor(.85 * a77.i - eh - .5 * rD), m8 = Math.floor(.25 * a77.j), a70 = Math.floor(a77.j) -
				2 * m8, x9.fillRect(m7, m8, eh, a70), x9.fillRect(m7 + eh + rD, m8, eh, a70)) : function() {
				var i = Math.floor(.46 * a77.j),
					j = Math.floor(.23 * a77.j),
					eh = Math.floor(.85 * a77.i - .5 * i + i / 12),
					ej = Math.floor(.5 * a77.j - j);
				x9.beginPath(), x9.moveTo(eh, ej), x9.lineTo(eh + i, ej + j), x9.lineTo(eh, ej + (j << 1)), x9.fill()
			}(), x9.fillRect(0, 0, Math.floor(a77.i), 2), x9.fillRect(0, 0, 2, Math.floor(a77.j)), x9.fillRect(0, Math.floor(a77.j) - 2, Math.floor(a77.i), 2), x9.fillRect(Math.floor(a77.i - 2), 0, 2, Math.floor(a77.j))
	}

	function a7P(aA) {
		return 5 === aA ? "Normal" : "" + a7A[aA]
	}
	this.a3k = !1, this.dU = function() {
		aC.gj && (a7B = 5, this.a3k = !1, a79 = !1, a77 = new qD([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a7C = function() {
		return a7A[a7B]
	}, this.x5 = function() {
		return a77.ej
	}, this.a56 = function(a71) {
		return !!aC.gj && a77.eh + a77.i > h.i - a71 - ba.gap
	}, this.resize = function() {
		aC.gj && (a77.resize(), a77.ej -= (bi.a3s() - 1) * ba.gap, font = b8.pb.rQ(0, .3 * a77.j), (canvas = document.createElement("canvas")).width = Math.floor(a77.i), canvas.height = Math.floor(a77.j), (x9 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pb.textAlign(x9, 1), b8.pb.textBaseline(x9, 1), lS(this))
	}, this.a11 = function(a7D) {
		0 === aC.ys || s.hH() || a7D !== aC.mA && (aC.mA = a7D, bf.resize(), bd.dc = !0, aC.gj) && (a78 = bd.e9 + 2e3, lS(this))
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
		if ((eh -= a77.eh) < .3 * a77.i) a79 = !1, this.a11(!aC.mA);
		else {
			if (eh < .7 * a77.i) return a79 = !a79, bd.dc = !0;
			this.a13(!1)
		}
		return !0
	}, this.a13 = function(a7F) {
		2 === aC.ys ? (this.a11(!1), s.t(3)) : (a79 = !1, this.a3k = !this.a3k, this.a3k ? (aL.gk && aL.a12(), z.a0.setState(1)) : a7F || aL.a4a(), bd.dc = !0, lS(this))
	}, this.a14 = function() {
		this.a3k = !1, aL.a4a(), bd.dc = !0, lS(this)
	}, this.a0k = function(eh, ej) {
		return !!aC.mA && (0 <= aL.gn(eh, ej) || (aC.gj ? ((bd.e9 > a78 || !this.gn(eh, ej)) && aR.gn(eh, ej), bd.dc = !0, a78 = bd.e9 + 2e3) : aR.gn(eh, ej)), !0)
	}, this.ij = function() {
		aC.gj && aC.mA && bd.e9 > a78 - 1e3 && bd.e9 < a78 && (bd.dc = !0)
	}, this.z0 = function() {
		aC.gj && (this.a3k = !1, bd.dc = !0, lS(this))
	}, this.tj = function() {
		if (aC.gj) {
			if (aC.mA) {
				if (bd.e9 > a78) return;
				if (bd.e9 > a78 - 1e3) return tk.globalAlpha = a7G(0, (1e3 - (bd.e9 - (a78 - 1e3))) / 1e3, 1), a7H(), void(tk.globalAlpha = 1)
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
					.lineWidth = a7i, a7R[aA].fillStyle = b9.mh, a7R[aA].strokeStyle = b9.mh, a7R[aA].beginPath(), a7R[aA].arc(i / 2, i / 2, i / 2 - a7i, 0, 2 * Math.PI), a7R[aA].stroke(), xC(a7R[aA], 0, 0, i, a7i, .3, 0 === aA)
			}()
	}, this.x4 = function() {
		return -iA / iB
	}, this.x5 = function() {
		return -iC / iB
	}, this.mM = function(a7X, hs) {
		iA = iB * a7X - hs
	}, this.mN = function(a7Y, ht) {
		iC = iB * a7Y - ht
	}, this.gn = function(a7W, a57) {
		return aC.mA || ! function(a7W, a57) {
			return Math.pow(a7W - (eh + i / 2), 2) + Math.pow(a57 - (ej + i / 2), 2) < i * i / 4 || Math.pow(a7W - (eh + i / 2), 2) + Math.pow(a57 - (ej + 2 * i), 2) < i * i / 4
		}(a7W, a57) || bh.e7.data[8].value ? (aG.mP() && (this.mC = !0, a7S = a7W, a7T = a57), !1) : a57 < ej + 1.25 * i ? this.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0R = function(a7W, a57) {
		var a7Z, a7a, hv, hy;
		return !aG.mP() || (a7Z = iA, a7a = iC, iA += hv = a7S - a7W, iC += hy = a7T - a57, ae.a0R(hv, hy), this.a7b(), a7S = a7W, a7T = a57, a7Z !== iA) || a7a !== iC
	}, this.a0U = function(ks, kt, deltaY) {
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
		var a1L;
		eE = a1L = (a1L = 1024 < (a1L = eE) * iB ? 1024 / iB : a1L) * iB < .125 ? .125 / iB : a1L, ae.zoom(eE, eh, ej),
			function(a1L, ks, kt) {
				iB *= a1L, iA = (iA + ks) * a1L - ks, iC = (iC + kt) * a1L - kt, aR.a7b()
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
	}, this.tj = function() {
		bh.e7.data[8].value || (tk.drawImage(a7Q[0], eh, ej), tk.drawImage(a7Q[1], eh, Math.floor(ej + 3 * i / 2)))
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
		tk.fillRect(a7j + h.i - (aA + 1) * a7l, h.j - a5r, a61, a5r)
	}

	function a87() {
		var g7;
		0 !== (a7p = 8 === aZ.a05() ? -1 : a7p) ? (a7u = (new Date).getTime(), clearInterval(a7t), a7t = -1) : (g7 = g[1] / 864e3, -1 !== a7u && (g7 += ((new Date).getTime() - a7u) * g[1] / 864e5, a7u = -1), 0 < g7 && (g[0] += Math.floor(g7), bd
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
	}, this.a0R = function(eh, ej) {
		ej > h.j - .6 * a7k ? this.a7x ? eh !== ge && (a7j += eh - ge, ge = eh, a83(), a86(eh), this.a7x = -1 !== a7p, bd.dc = !0) : a86(eh) && (bd.dc = !0) : this.qb()
	}, this.qb = function() {
		-1 !== a7p && (this.a7x = !1, a7p = -1, bd.dc = !0)
	}, this.a0U = function(eh, deltaY) {
		-1 !== a7p && (a7j += Math.floor(deltaY), a83(), a86(eh), bd.dc = !0)
	}, this.gn = function(eh, ej) {
		this.a0R(eh, ej), -1 !== a7p && (ge = eh, this.a7x = !0)
	}, this.a0q = function() {
		-1 !== a7p && (this.a7x = !1)
	}, this.tj = function() {
		tk.fillStyle = b9.mk;
		for (var a8A, month, di, ry, a8D, a8E, m8, a8F, a8G, aA = a7o; a7n <= aA; aA--) a88(aA);
		this.a7w && 0 === a7n && (tk.fillStyle = b9.nH, a88(0)), -1 !== a7p && (tk.fillStyle = b9.mj, a88(a7p)), -1 !== a7p && (tk.font = a4U, b8.pb.textBaseline(tk, 2), (di = new Date).setTime(a7r.getTime() - 1e3 * a7p * 60 * 60 * 24), month =
			"month", a8A = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(di), a8A = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(di)), a8A = a8A + ", " + di.getUTCDate() + " " + month + " " + di.getFullYear(), month = 1 === g[a7p] ? L(110) : L(111), month = b8.zX.yA(g[a7p]) + " " + month, di = Math.floor(tk.measureText(a8A).width), ry = Math
			.floor(tk.measureText(month).width), a8D = Math.floor(.5 * (di + a7q)), a8E = (a8E = a7j + h.i - (a7p + 1) * a7l) < a8D ? a8D : a8E > h.i - a8D ? h.i - a8D : a8E, m8 = h.j - Math.floor(a7m * Math.pow(g[a7p], a7s)), a8F = Math
			.floor(1.1 * a7q), a8G = m8 > h.j - a8F ? h.j - a8F : m8, tk.fillStyle = b9.me, tk.fillRect(h.i - ry - a7q, a8G - a8F, ry + a7q, a8F), tk.fillRect(a8E - a8D, h.j - a8F, di + a7q, a8F), tk.fillStyle = b9.mh, b8.pb.textAlign(tk, 2),
			tk.fillText(month, Math.floor(h.i - .5 * a7q), a8G),
			function(m8, a8F) {
				for (var rx, kZ = -1, dx = g.length - a7p - 1, aA = a7v.length - 1; 0 <= aA; aA--) dx >= a7v[aA].ea && dx <= a7v[aA].e && (-1 === kZ || a7v[aA].e - a7v[aA].ea < a7v[kZ].e - a7v[kZ].ea) && (kZ = aA); - 1 !== kZ && (rx = Math
					.floor(tk.measureText(a7v[kZ].g2).width), tk.fillStyle = b9.me, tk.fillRect(h.i - rx - a7q, m8, rx + a7q, a8F), tk.fillStyle = b9.mh, tk.fillText(a7v[kZ].g2, Math.floor(h.i - .5 * a7q), m8 + a8F))
			}(a8G - 2 * a8F, a8F), b8.pb.textAlign(tk, 1), tk.fillText(a8A, a8E, h.j), tk.strokeStyle = b9.ml, tk.lineWidth = 1, tk.beginPath(), tk.moveTo(0, m8), tk.lineTo(h.i, m8), tk.closePath(), tk.stroke())
	}
}

function cG() {
	var a4U, i, ej, a8I, a8J, canvas, x9, a5u, a2R, a8K, a8L, a8M, a8N;
	this.eh = 0, this.j = 0, this.dU = function() {
		a8J = aC.a3L, a8L = "rgba(0,100,0,0.8)", a8M = "rgba(150,0,0,0.8)", a5u = a8K = !0, a2R = af.gb[aC.eK], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qz() ? .305 : .24) * h.pd), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4U = b8.pb.rQ(1, Math.floor(.8 * this.j)), a8N = Math.floor(.5 * this.j), bQ.vT.font = a4U, ej = ba.gap, a8I = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x9 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4U, b8.pb.textBaseline(x9, 1), b8.pb.textAlign(x9, 1), this.a8O()
	}, this.a6H = function() {
		return z.a0.qz() && h.i < 1.2 * h.j
	}, this.a6u = function() {
		this.a6H() ? this.eh = h.i - i - ba.gap : this.eh = Math.floor(aU.a8P() + (h.i - aU.a8P() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lR = function() {
		a5u && (a5u = !1, this.a8O())
	}, this.a8O = function() {
		x9.clearRect(0, 0, i, this.j), x9.fillStyle = a8K ? a8L : a8M, x9.fillRect(0, 0, i, this.j), x9.fillStyle = b9.mj, this.a8Q(), this.a8R(), x9.fillStyle = af.gb[aC.eK] >= ad.jV(aC.eK) ? b9.nE : b9.mh, x9.fillText(b8.zX.yA(a2R), Math.floor(
			i / 2), a8N), x9.fillStyle = b9.mh, x9.fillRect(0, 0, i, 1), x9.fillRect(0, 0, 1, this.j), x9.fillRect(0, this.j - 1, i, 1), x9.fillRect(i - 1, 0, 1, this.j)
	}, this.a8Q = function() {
		var ev = bd.jm() % 100,
			ev = (ev = 9 - bJ.dj(ev -= ev % 10, 10), Math.floor(ev * (this.j - a8I) / 9));
		x9.fillRect(0, ev, a8I, this.j - ev), x9.fillRect(i - a8I, ev, a8I, this.j - ev)
	}, this.a8R = function() {
		x9.fillRect(a8I, this.j - a8I, Math.floor((i - 2 * a8I) * af.gb[aC.eK] / a8J), a8I)
	}, this.ij = function() {
		var g7 = aC.eK;
		b8.fv.gm(g7) && (g7 = af.gb[g7] - af.a2Q[g7], a2R !== g7 ? (a8J = a54(g7, a8J), a8K = a2R < g7 && 10 <= g7, a2R = g7, a5u = !0) : bd.jm() % 10 == 9 && (a5u = !0))
	}, this.tj = function() {
		0 === af.lf[aC.eK] || aC.gv || 2 === af.a2I[aC.eK] || tk.drawImage(canvas, this.eh, ej)
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
			a8Y.fillRect(0, 0, a8S, ba.xt),
			a8Y.fillRect(0, 0, ba.xt, a6X),
			a8Y.fillRect(a8S - ba.xt, 0, ba.xt, a6X),
			a8Y.fillRect(0, a6X - ba.xt, a8S, ba.xt), a8Y.font = a8T, b8.pb.textBaseline(a8Y, 1), b8.pb.textAlign(a8Y, 1), a8Y.fillText(a8u, Math.floor((a8S + a8d - 22) / 2), Math.floor(a8b + a8U / 2));
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
		a8Y.fillText(af.zT[aA], a8g, a2g), 0 !== af.a2I[aA] && (a8Y.font = a8V), aA < aC.jp && 2 !== af.a2I[aA] || a8Y.fillRect(a8g, a2g + .35 * a8s, a8i[aA], Math.max(1, .1 * a8s))
	}

	function a91(a97, aA) {
		a8Y.fillText(af.gN[aA], a8h, Math.floor(a8b + a8U + (a97 + .5) * a8e))
	}

	function a9G(ej) {
		return (ej -= ba.gap + a8d) < 0 ? Math.floor(ej / a8e) - 1 : ej < (a8W - 1) * a8e ? Math.floor(ej / a8e) : ej < a6X - a8d ? a8W - 1 : (ej -= a6X - a8d, a8W + Math.floor(ej / a8e))
	}

	function xs(eh, ej) {
		return eh >= ba.gap && eh < ba.gap + a8S && ej >= ba.gap && ej < ba.gap + a6X
	}
	this.dU = function() {
			var aA;
			for (a8p = !1, a8r = a8q = a8o = 0, a8n = -1, a8W = z.a0.qz() ? 6 : 10, a8t = (position = 0) === (a8t = bh.e7.data[11].value) ? 10 : 1 === a8t ? 5 : 1, a8m = !1, a8k = new Uint16Array(a8W + 1), a8l = new Uint32Array(a8W + 1), a8a = aC.eX,
				l4 = new Uint16Array(a8a), ja = new Uint16Array(a8a), aA = a8a - 1; 0 <= aA; aA--) l4[aA] = aA, ja[aA] = aA;
			this.resize(!0), a8i = new Uint16Array(aC.eX);
			var a8v = Math.floor(a8S - a8g - a8f - a8Z);
			for (a8j = new Array(aC.eX), a8Y.font = a8V, aA = aC.eX - 1; 0 <= aA; aA--) a8j[aA] = aA + 1 + ".", af.zT[aA] = b8.x9.a1y(af.zZ[aA], a8V, a8v), a8i[aA] = Math.floor(a8Y.measureText(af.zT[aA]).width);
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
				for (var aA = aC.eX - 1; 0 <= aA; aA--) a8i[aA] = Math.floor(a8Y.measureText(af.zT[aA]).width);
				a8w()
			}
			a8u = b8.x9.a1y(L(112), a8T, .96 * a8S)
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
			return !!xs(eh, ej) && ((__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8d - 22, a8d - 22) && __fx.playerList.display(af.zZ), true) &&
				!(ej - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eh - ba.gap)) && (a8o = bd.e9, a8p = !0, a8q = a8r = a9G(ej), bH.a15() && (eh = a7G(-1, a8r, a8W), a8n !== (eh = eh === a8W ?
					-1 : eh)) && (a8n = eh, a8w(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8w(), bd.dc = !0;
		},
		this.a0R = function(eh, ej) {
			if (__fx.utils.isPointInRectangle(eh, ej, ba.gap + 12, ba.gap + 12, a8d - 22, a8d - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8w(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8w(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eh, ej, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eh - ba.gap
				)) return;
			var di, a9F = a9G(ej);
			return a8p ? (di = position, (position = a7G(0, position += a8q - a9F, aC.eX - a8W)) !== di && (a9F = (a9F = a7G(-1, a8q = a9F, a8W)) !== a8W && xs(eh, ej) ? a9F : -1, a8n = a9F, a8w(), bd.dc = !0), !0) : (a9F = (a9F = a7G(-1, a9F,
				a8W)) === a8W || !xs(eh, ej) || bH.a15() ? -1 : a9F, a8n !== a9F && (a8n = a9F, a8w(), bd.dc = !0))
		}, this.a0q = function(eh, ej) {
			if (!a8p) return !1;
			a8p = !1;
			var a9F = a9G(ej);
			var isEmptySpace = false;
			return bH.a15() && -1 !== a8n && (a8n = -1, a8w(), bd.dc = !0), bd.e9 - a8o < 350 && a8r === a9F && -1 !== (a9F = (a9F = a7G(-1, a9F, a8W)) !== a8W && xs(eh, ej) ? a9F : -1) && (eh = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l4[__fx.leaderboardFilter.filteredLeaderboard[a9F + position] ?? (isEmptySpace = true, ja[aC.eK])]) : l4[a9F + position]), a9F === a8W - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : ja[aC.eK]) >=
				position + a8W - 1 && (eh = aC.eK), !isEmptySpace && aC.hP && __fx.donationsTracker.displayHistory(eh, af.zZ, aC.k8), 0 !== af.lf[eh] && !isEmptySpace) && aG.m1(eh, 800, !1, 0), !0
		}, this.a0U = function(eh, ej, deltaY) {
			var a9H;
			return !(a8p || aC.mA || (a9H = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xs(eh, ej)) || (eh = (eh = a7G(-1, a9G(ej), a8W)) === a8W || bH.a15() ? -1 : eh, 0 < deltaY ? position < aC.eX - a8W && (position += Math.min(aC.eX - a8W -
				position, a9H), a8n = eh, a8w(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a9H), a8n = eh, a8w(), bd.dc = !0), 0))
		}, this.tj = function() {
			tk.drawImage(a8X, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, x9, eh, ej, a5r, a9I, gap, a9J, fontSize, a9K, a9L, a9M, a9N, a9O, a9P, a9Q, a9R, a9S;

	function a9W() {
		x9.clearRect(0, 0, aV.i, aV.j), x9.fillStyle = b9.me, x9.fillRect(0, 0, aV.i, aV.j), x9.fillStyle = b9.n1, eE = 0 < a9Q ? a9Q : Math.sqrt(a9N[4] / 1e4), x9.fillRect(0, aV.j - a5r - 1, Math.floor(eE * aV.i), a5r), x9.fillStyle = b9.mh, x9
			.fillRect(0, 0, aV.i, 1), x9.fillRect(0, 0, 1, aV.j), x9.fillRect(aV.i - 1, 0, 1, aV.j), x9.fillRect(0, aV.j - 1, aV.i, 1), x9.fillRect(0, aV.j - a5r - 1, aV.i, 1);
		for (var eE, a9Y, di = 0, aA = 0; aA < a9M.length; aA++) a9O[aA] ? (b8.pb.textAlign(x9, 0), a9Y = Math.floor((a9I - a5r + 2 * a9J) * (aA - di + 1) / (a9M.length + 1) - .7 * a9J), x9.fillText(a9M[aA], gap, a9Y), b8.pb.textAlign(x9, 2), 5 ===
			aA && 0 !== af.lf[aC.eK] && af.gb[aC.eK] >= ad.jV(aC.eK) ? (x9.fillStyle = b9.na, x9.fillText(a9U(aA), aV.i - gap, a9Y), x9.fillStyle = b9.mh) : x9.fillText(a9U(aA), aV.i - gap, a9Y)) : di++
	}

	function a9U(aA) {
		return aA < 3 ? a9N[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zX.a2z(a9N[aA] / 100, 2) : aA < 7 ? b8.zX.yA(a9N[aA]) : aA === 7 ? aV.a9Z(a9N[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gN, aC.eK) : __fx.utils.getDensity(aC.eK)
	}

	function a9T() {
		af.gN[aC.eK] !== a9N[6] && (a9N[6] = af.gN[aC.eK], a9K++)
	}
	this.dU = function() {
		a9Q = a9R = 0, (a9L = new Array(8))[0] = L(113), a9L[1] = aC.k8 ? L(114) : L(115), a9L[2] = L(116), a9L[3] = L(117), a9L[4] = L(118), a9L[5] = L(119, 0, "Interest"), a9L[6] = L(120), a9L[7] = L(121),
			a9L.push("Max Troops", "Density"), // add a9L
			(a9M = new Array(a9L.length)).fill(""), (a9N = new Array(a9L.length))[0] = aC.k8 ? 0 : aC.jp, a9N[1] = aC.k8 ? ak.jq : aC.kA, a9N[2] = aC.yu, a9N[3] = 0, a9N[4] = bJ.dj(1e4 * af.gN[0], Math.max(aC.jZ, 1)), a9N[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dj(700 * aC.data.iIncomeValue, 64) : bJ.dj(700 * aC.data.iIncomeData[aC.eK], 64), a9N[6] = 0, a9T(), a9N[7] = 0, a9P = a9U(6), a9O = new Array(a9L.length);
		for (var aA = a9L.length - 1; 0 <= aA; aA--) a9O[aA] = !0;
		a9S = 0, a9S = aC.k8 ? (a9O[0] = !1, a9O[2] = !1, a9O[3] = !1, 3) : (a9O[3] = !1, 1), a9K = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qz() ? .1646 : .126) * 1.25 * h.pd), this.j = Math.floor(1.18 * this.i), a5r = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9J = .04 * this.i, a9I = this.j, this.j -= Math.floor(a9S * (this.j - 2 *
			a5r) / a9L.length), fontSize = Math.floor(.7 * (a9I - a5r) / a9L.length);
		var a4U = b8.pb.rQ(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4U, i) {
				for (var aA = 0; aA < a9M.length; aA++) a9M[aA] = b8.x9.a1y(a9L[aA], a4U, i)
			}((x9 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4U, .575 * this.i), b8.pb.textBaseline(x9, 1), x9.lineWidth = 1, this.a3E(), this.a6u(), aT.a6u(), a9W()
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
		a9O[0] && aC.yv - aC.yu !== a9N[0] && (a9N[0] = aC.yv - aC.yu, a9K++), ak.jq - a9N[0] !== a9N[1] && (a9N[1] = ak.jq - a9N[0], a9K++), this.lJ(), (a9i = ad.a9j(aC.eK)) !== a9N[5] && (a9N[5] = a9i, a9K++), a9T(), a9N[7] += bd.a9k, a9i =
			a9U(7), a9P !== a9i && (a9P = a9i, a9K += 100), a9i = aC.hP ? bf.a2j() : af.gN[l4[0]], per = bJ.dj(1e4 * a9i, Math.max(aC.jZ, 1)), a9N[3] = a9i, a9N[4] !== per && (a9K++, a9N[4] = per), 8 === aC.k6 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.fv.gm(aA)) return bP.yV.yr(), 1;
				return
			}() || a9N[3] < aC.jZ || ! function() {
				for (var aA = ak.jq - 1; 0 <= aA; aA--)
					if (0 < af.g1[ak.jr[aA]].length) return;
				return 1
			}() || bP.yV.yr()
	}, this.lJ = function() {
		a9O[2] && aC.yu !== a9N[2] && (a9N[2] = aC.yu, a9K++)
	}, this.a9l = function(aA) {
		var sF, a9m, di;
		return 2 !== aC.ys && (aA % 2 == 1 && (aU.lR(1, 1), bd.dc = !0), aA === aC.a3N ? (a9Q = 0, a9W(), !1) : (-1 !== aA || 0 !== a9R) && (a9m = a9Q, a9Q = aC.gj ? aA / aC.a3N : (di = performance.now(), 0 <= aA && (sF = di - 392 * aA, a9R =
			0 === aA || sF < a9R ? sF : a9R), 1 < (a9Q = (di - a9R) / (392 * aC.a3N)) ? 1 : a9Q), a9W(), a9Q !== a9m))
	}, this.tj = function() {
		tk.drawImage(canvas, eh, ej)
	}
}

function cJ() {
	var hH, a9n, i, j, a70, a9o, a9p, a6I, canvas, ls, a9q;

	function x5() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9q = hH = !1, a70 = .61, a9o = .07, a9p = .09, ls = a6I = j = 0
	}, this.resize = function() {
		var x9, m7, ev, a9v, a9w, a4Z;
		hH && (i = a9r(i = z.a0.qz() ? Math.floor(.69 * h.pd) : Math.floor(.5 * h.pd), a54(h.i - 2 * ba.gap, 10)), i = a9r(i, Math.floor(3.57 * a54(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x9 = canvas.getContext("2d", {
				alpha: !0
			}), m7 = Math.floor(1 + j / 40), x9.clearRect(0, 0, i, j), x9.fillStyle = b9.me, x9.fillRect(m7, m7, i - 2 * m7, j - 2 * m7), x9.lineJoin = "bevel", x9.lineWidth = 2 * m7, x9.strokeStyle = b9.mh, x9.strokeRect(m7, m7, i - 2 * m7,
				j - 2 * m7), x9.imageSmoothingEnabled = !1, ev = aa.get(a9n), a9v = ev.width, a4Z = (1 === a9n ? .85 : 21 === a9n ? .666 : .9) * a70 * j / (a9w = ev.height), x9.setTransform(a4Z, 0, 0, a4Z, Math.floor((i - a4Z * a9v) / 2),
				Math.floor((j - a4Z * a9w) / 2)), x9.drawImage(ev, 0, 0), x9.setTransform(1, 0, 0, 1, Math.floor(i - a9p * j - a9o * j - m7), Math.floor(m7 + a9o * j)),
			function(x9, ea) {
				x9.lineWidth = Math.floor(1 + j / 80), x9.strokeStyle = b9.mh, x9.beginPath(), x9.moveTo(0, 0), x9.lineTo(ea, ea), x9.moveTo(0, ea), x9.lineTo(ea, 0), x9.stroke()
			}(x9, Math.floor(a9p * j)), x9.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f2, a9t, a6n, a9u) {
		hH || a9u && a9q || (a9n = a6n ? 21 : f2 ? 1 : 2, hH = a9q = !0, this.resize(), aK.qs(), aQ.a6i(), ls = bd.e9, a6I = a9t ? 1 : 0)
	}, this.ij = function() {
		!hH || 1 <= a6I || (a6I = 1 < (a6I += 5e-4 * (bd.e9 - ls)) ? 1 : a6I, ls = bd.e9, bd.dc = !0)
	}, this.gn = function(eh, ej) {
		return !(!hH || a6I <= 0 || (eh -= Math.floor((h.i - i) / 2), ej -= x5(), eh < 0) || ej < 0 || i < eh || j < ej || (i - j / 3 < eh && ej < j / 3 && (hH = !1, bd.dc = !0), 0))
	}, this.tj = function() {
		!hH || a6I <= 0 || (tk.globalAlpha = a6I, tk.drawImage(canvas, Math.floor((h.i - i) / 2), x5()), tk.globalAlpha = 1)
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
					for (var yg = ak.jr, eY = be.eY, aA = 0; aA < ea; aA++) {
						var g7 = yg[aA];
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
			}() : (aM.zG(0, L(127, [af.zT[g7]]), 956, g7, b9.mh, b9.me, -1, !0), 0)))) {
			var ea = am.iU.kn;
			if (0 !== ea)
				for (var e7 = am.iU.e7, aA = 0; aA < ea; aA++) {
					var eM = e7[aA];
					if (ab.eR(eM << 2)) return void aM.zG(0, L(128, [bK.ei(eM), bK.ek(eM)]), 957, 0, b9.mh, b9.me, -1, !0, void 0, {
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
	}, this.z3 = function() {
		this.aAK[2] >= this.aAK[0] && this.aAK[3] >= this.aAK[1] && a3a.putImageData(a3b, 0, 0, this.aAK[0], this.aAK[1], this.aAK[2] - this.aAK[0] + 1, this.aAK[3] - this.aAK[1] + 1), this.a3I = !1
	}, this.dU = function() {
		var eh, ej;
		this.aAJ = !1, this.mX = !1, this.a3I = !1, this.aAK[0] = bQ.el, this.aAK[1] = bQ.em, this.aAK[2] = this.aAK[3] = 0;
		loop: for (eh = 1; eh < bQ.el - 1; eh++)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAN[ab.we(eh, ej) + 2]) {
					this.aAK[0] = eh;
					break loop
				} loop: for (ej = 1; ej < bQ.em - 1; ej++)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAN[ab.we(eh, ej) + 2]) {
					this.aAK[1] = ej;
					break loop
				} loop: for (eh = bQ.el - 2; 0 < eh; eh--)
			for (ej = bQ.em - 2; 1 < ej; ej--)
				if (1 === aAN[ab.we(eh, ej) + 2]) {
					this.aAK[2] = eh;
					break loop
				} loop: for (ej = bQ.em - 2; 0 < ej; ej--)
			for (eh = bQ.el - 2; 1 < eh; eh--)
				if (1 === aAN[ab.we(eh, ej) + 2]) {
					this.aAK[3] = ej;
					break loop
				}
	}
}

function L(value, aAO, uH) {
	var pI = "number" == typeof value ? b5.aAP[value] : value;
	if (uH && b5.aAQ() && (pI = uH), aAO)
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
		aAU = !1, "en" !== bh.e7.data[12].value.split("-")[0].toLowerCase() ? bh.e7.data[12].value === bh.e7.data[145].value && 0 < bh.e7.data[146].value && (ea = bh.e7.data[146].value, (g = bh.pt.uN(ea, !1)).length === ea) && !!b8.pk.a1b(g) &&
			function(g) {
				for (var ea = g.length, j = 0; j < ea; j++) g[j] = g[j].replace("&#39;", "'");
				var aAa = bh.pt.uN(ea, !0);
				if (ea !== aAa.length) return !1;
				if (!b8.pk.a1b(aAa)) return !1;
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
		g.length === aAS.length && (this.aAP = g, bh.r3.r4(145, bh.e7.data[12].value), bh.r3.r4(146, g.length), bh.pt.uT(g, !1), bh.pt.uT(aAS, !0), 0 === aZ.a05()) && 5 === s.rq && s.x.aAh()
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
		var aAn = bh.e7.data[12].uH;
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
	var eh, ej, j, so, aAs, aAt, aAu, aAv, aAw, i, a2D, aAx;
	this.hH = !1, this.dU = function(pI, aAy) {
		if (1 === z.id && 13 <= z.dk && z.dk < 18) return aAy ? void(a2D = pI) : a2D !== pI ? void 0 : void z.uL.saveString(200, pI);
		aAy && (a2D = pI, (aAx = document.createElement("a")).appendChild(document.createTextNode(a2D)), this.hH = !0, aAx.title = a2D, aAx.target = "_blank", aAx.href = a2D, aAx.style.textAlign = "center", aAx.style.color = b9.mh, aAx.style
			.position = "absolute", aAx.style.padding = "0px", aAx.style.margin = "0px", this.resize(), document.body.appendChild(aAx), bd.dc = !0)
	}, this.qs = function() {
		return !(!this.hH || (document.body.removeChild(aAx), this.hH = !1))
	}, this.gn = function(hs, ht) {
		return !!this.hH && ((hs < eh || ht < ej || eh + i < hs || ej + j < ht || eh + i - so < hs && ht < ej + so) && (bd.dc = !0, this.hH = !1, document.body.removeChild(aAx)), !0)
	}, this.resize = function() {
		var a4U, aAz;
		this.hH && (aAv = Math.floor(.8 * (z.a0.qz() ? h.i > h.j ? .6 : .55 : .4) * h.pd), so = Math.floor(.15 * aAv), aAs = Math.floor(.35 * so), aAt = Math.floor(.5 * so), aAu = Math.floor(2.5 * aAt), j = so + aAs + 3 * aAt, a4U = b8.pb.rQ(1,
			aAs / h.k), aAw = Math.floor(h.k * aP.measureText(a2D, a4U)), aAz = i = (aAv < aAw ? aAw : aAv) + 2 * aAu, i = Math.min(i, h.i - 2 * (z.a0.qz() ? 2 : 1) * ba.gap), a4U = b8.pb.rQ(1, i / aAz * aAs / h.k), aAw = Math.floor(h.k *
			aP.measureText(a2D, a4U)), eh = Math.floor((h.i - i) / 2), ej = Math.floor((h.j - j) / 2), aAx.style.font = a4U, aAx.style.top = Math.floor((ej + 1.4 * aAt + so) / h.k) + "px", aAx.style.left = Math.floor((eh + (i - aAw) /
			2) / h.k) + "px")
	}, this.tj = function() {
		this.hH && (tk.fillStyle = b9.me, tk.fillRect(eh, ej + so, i, j - so), tk.fillStyle = b9.nl, tk.fillRect(eh, ej, i, so), tk.fillStyle = b9.mh, tk.lineWidth = ba.xt, tk.strokeStyle = b9.mh, tk.strokeRect(eh, ej, i, j), tk.fillRect(eh, ej +
			so, i, ba.xt), tk.font = b8.pb.rQ(1, .48 * so), b8.pb.textAlign(tk, 1), b8.pb.textBaseline(tk, 1), tk.fillText("You are leaving Territorial.io!", Math.floor(eh + (i - .5 * so) / 2), Math.floor(ej + .55 * so)), aL.a4f(Math
			.floor(eh + i - .8 * so), Math.floor(ej + .25 * so), Math.floor(.5 * so)), tk.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9L, eh = [0, 0, 0, 0, 0],
		ej = [0, 0, 0, 0, 0],
		mJ = [1, 1, 1, 1, 1],
		f2 = [!0, !0, !0, !1, !1],
		ev = (this.fL = [!0, !0, !0, !1, !1], null);
	this.aB0 = function(a1m, aB1) {
		ev = a1m, f2 = aB1, a9L = [bI.aB2, bI.a00, bI.aB3, bI.aB3, bI.aB4], this.dU()
	}, this.dU = function() {
		if (aa.sJ()) {
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
		return !(7 === aZ.a05() && z.a0.qz())
	}, this.gn = function(hs, ht) {
		if (ev && this.hH())
			for (var aA = f2.length - 1; 0 <= aA; aA--)
				if (f2[aA] && this.fL[aA] && eh[aA] < hs && ej[aA] < ht && hs < eh[aA] + mJ[aA] * ev[aA].width && ht < ej[aA] + mJ[aA] * ev[aA].height) return s.t(9, s.rq, new aB5("You are leaving Territorial.io.", b8.pb.a2C(a9L[aA]))), !0;
		return !1
	}, this.tj = function() {
		if (ev && this.hH()) {
			var aA;
			for (tk.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f2[aA] && this.fL[aA] && (tk.setTransform(mJ[aA], 0, 0, mJ[aA], eh[aA], ej[aA]), tk.drawImage(ev[aA], 0, 0));
			tk.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aB6 = 0, this.aB7 = null, this.sx = null, this.ql = null, this.x = null, this.tJ = null, this.sv = null, this.message = null, this.aB8 = null, this.qr = null, this.aB9 = new aBA, this.a09 = 0, this.dU = function() {
		this.aB6 = bE.rt.vF(bh.e7.data[105].value), this.sx = new aBB, this.ql = new aBC, this.x = new aBD, this.tJ = new aBE, this.sv = new aBF, this.message = new aBG, this.aB8 = new aBH, this.qr = new aBI, this.x.dU(), bn.dU(), this.a09 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.tD = function() {
		this.qr && this.qr.tD(), this.aB7 = null, this.sx = null, this.ql = null, this.x = null, this.tJ = null, this.sv = null, this.message = null, this.aB8 = null, this.qr = null, this.a09 = 0, bn.tD(), z.a0.setState(0)
	}
}

function aBB() {
	function aBc(g, sB, sC) {
		var aBd = g[sB];
		g[sB] = g[sC], g[sC] = aBd
	}
	this.sy = [
		[],
		[],
		[],
		[]
	], this.sz = [0, 0, 0, 0], this.aBJ = function(aBK, ro, username, t4, a2g, aBL, elo, color, un, aBM) {
		this.sy[aBK].push(this.aBN(ro, username, t4, a2g, aBL, elo, color, un, aBM)), bl.aB6 === ro && (bl.aB7 = this.sy[aBK][this.sy[aBK].length - 1]), bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBK && 1 === bl.x.qe[2]
	}, this.aBN = function(ro, username, t4, a2g, aBL, elo, color, un, aBM) {
		return {
			ro: ro,
			username: username,
			t4: t4,
			a2g: a2g,
			aBL: aBL,
			elo: elo,
			color: color,
			un: un,
			aBM: aBM
		}
	}, this.aBP = function(dx, aBK, t4, a2g, aBL, elo, un) {
		dx = this.sy[aBK][dx];
		dx.t4 = t4, dx.a2g = a2g, dx.aBL = aBL, dx.elo = elo, dx.un = un, bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBK && 1 === bl.x.qe[2]
	}, this.aBQ = function(dx, aBK, aBR) {
		var dx = this.sy[aBK][dx],
			aBS = dx.username,
			aBT = "Redacted " + bD.rt.yA(dx.ro, 2);
		dx.username = aBR ? "[" + b8.zX.zc(aBS) + "] " + aBT : aBT, aBS.indexOf("Redacted") < 0 && (dx.aBU = aBS, dx.aBV = 3), bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBK && 1 === bl.x.qe[2]
	}, this.aBW = function(dx, aBX, aBY) {
		var player = this.sy[aBX][dx];
		this.aBZ(dx, aBX), this.sy[aBY].push(player), bl.x.aBO += 29 === s.rq && bl.x.qe[0] === aBY && 1 === bl.x.qe[2]
	}, this.aBZ = function(dx, aBX) {
		var sx = this.sy[aBX];
		dx >= this.sz[aBX] ? sx[dx] = sx[sx.length - 1] : (this.sz[aBX]--, 2 === aBX ? (sx.splice(this.sz[aBX] + 1, 0, sx[sx.length - 1]), sx.splice(dx, 1)) : (sx[dx] = sx[this.sz[aBX]], sx[this.sz[aBX]] = sx[sx.length - 1])), sx.pop(), bl.x
			.aBO += 29 === s.rq && bl.x.qe[0] === aBX && 1 === bl.x.qe[2]
	}, this.aBa = function(dx, qd) {
		bl.x.aBO += 29 === s.rq && bl.x.qe[0] === qd && 1 === bl.x.qe[2];
		var sx = this.sy[qd],
			pT = sx[dx];
		if (2 === qd)
			if (dx >= this.sz[qd]) {
				for (var aBb = this.sz[qd], elo = pT.elo; aBb && elo > sx[aBb - 1].elo;) aBb--;
				sx[dx] = sx[this.sz[qd]], sx.splice(this.sz[qd]++, 1), sx.splice(aBb, 0, pT)
			} else sx.splice(this.sz[qd]--, 0, pT), sx.splice(dx, 1);
		else dx >= this.sz[qd] ? aBc(sx, this.sz[qd]++, dx) : aBc(sx, --this.sz[qd], dx)
	}, this.aBe = function(ro) {
		for (var sy = this.sy, ea = sy.length, aA = 0; aA < ea; aA++)
			for (var sx = sy[aA], kX = sx.length, et = 0; et < kX; et++)
				if (ro === sx[et].ro) return sx[et];
		return null
	}
}

function aBA() {
	this.dd = function(dx) {
		if ((sz = bl.sx.sz[dx]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qf = bl.x.qg[dx],
			aBf = 9 === qf.aBg ? 333 : 512,
			sz = Math.min(sz, aBf);
		8 === qf.aBg && (sz -= sz % 2);
		aBf = bl.sx.sy[dx].splice(0, sz), bl.sx.sz[dx] -= sz, sz = function(aBh) {
			if (bl.aB7) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var ea = aBh.length, ro = bl.aB7.ro, aA = 0; aA < ea; aA++)
					if (aBh[aA].ro === ro) return aA
			}
			return -1
		}(aBf);
		return -1 === sz ? (bl.x.aBO += 29 === s.rq && bl.x.qe[0] === dx && 1 === bl.x.qe[2], !1) : (8 === qf.aBg && (qf.aBk = (qf.aBk + (sz >> 1)) % 1024, dx = sz - sz % 2, sz %= 2, aBf = aBf.slice(dx, 2 + dx)), av.dU(qf, aBf, sz), !0)
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

	function aC5(qh, ro) {
		for (var eu = qh.length - 1; 0 <= eu; eu--) {
			var pT = qh[eu];
			0 === pT.id && pT.ro === ro && (pT.p = "[Redacted Message]")
		}
	}
	this.qn = function(aBt) {
		var aBu, zd;
		return aBt.id < 5 && (aBu = "@" + bD.rt.yA(aBt.ro, 5)), 0 === aBt.id ? aBu + ": " + aBt.p : 1 === aBt.id ? (zd = "@" + bD.rt.yA(aBt.target, 5), 0 === aBt.aBv ? 32768 <= aBt.value ? aBu + " voted with " + (aBt.value - 32768 + 1) +
				" gold against " + zd + " to weaken the latter's admin position." : aBu + " voted with " + (aBt.value + 1) + " gold for " + zd + " to strengthen the latter's admin position." : 1 === aBt.aBv ? aBu + " sent " + Math.floor(aBt
					.value / 100) + " Gold to " + zd + "." : aBu + " voted with " + aBt.value + " points for " + zd + " to acknowledge the latter as clan leader.") : 2 === aBt.id ? 0 === aBt.aBv ? aBu + " was muted. Duration: 1 Hour" : 1 === aBt
			.aBv ? "The username of " + aBu + " was redacted. Duration: 1 Day" : aBu + " was kicked." : 3 === aBt.id ? aBu + bm.e0(aBt.aBv, bm.du[aBt.aBv][aBt.value]) + "@" + bD.rt.yA(aBt.target, 5) + bm.e2(aBt.aBv, bm.du[aBt.aBv][aBt.value]) :
			4 === aBt.id ? aBu + bm.e0(5, bm.du[5][aBt.aBv]) + "@" + bD.rt.yA(aBt.target, 5) + bm.e2(5, bm.du[5][aBt.aBv]) : 5 === aBt.id ? aBs[aBt.aBv] : 6 === aBt.id ? "You are about to mention " + aBt.value + " player" + (1 === aBt.value ?
				"" : "s") + ". This action will cost " + (Math.max(10 * aBt.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qm = function(aBt, a5h) {
		return {
			aBt: aBt,
			p: a5h,
			aBw: 0,
			fontSize: 1,
			qq: 0,
			aBx: aBt.id ? b9.nO : b9.mh
		}
	}, this.t2 = function(player, qd) {
		return (2 === qd ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.t3 = function(t4) {
		return aBq[t4]
	}, this.aBy = function(t4, a2g) {
		return t4 < 3 || 7 === t4 ? aBr[t4][0] : 4 === t4 ? aBr[t4][a2g < 1 ? 0 : a2g < 10 ? 1 : 2] : aBr[t4][a2g < 10 ? 0 : 1]
	}, this.aBz = function(a2g) {
		return 0 === a2g
	}, this.aBe = function(qd, ro) {
		for (var sy = bl.sx.sy, sx = sy[qd], ea = sx.length, aA = 0; aA < ea; aA++)
			if (ro === sx[aA].ro) return sx[aA];
		for (var eu = 0; eu < sy.length; eu++)
			if (qd !== eu)
				for (ea = (sx = sy[eu]).length, aA = 0; aA < ea; aA++)
					if (ro === sx[aA].ro) return sx[aA];
		return null
	}, this.t5 = function(pT) {
		return !!bl.aB7 && pT.ro === bl.aB7.ro
	}, this.aC0 = function(sx, aC1, aC2) {
		var za = [];
		loop: for (var aA = aC1; aA < aC2; aA++) {
			var zb = b8.zX.zc(sx[aA].username);
			if (zb) {
				for (var eu = za.length - 1; 0 <= eu; eu--)
					if (zb === za[eu].name) {
						za[eu].g2++;
						continue loop
					} za.push({
					name: zb,
					g2: 1
				})
			}
		}
		if (za.sort(function(et, eu) {
				return eu.g2 - et.g2
			}), 0 === za.length) return "";
		for (var pI = za[0].name + ": " + za[0].g2, aA = 1; aA < za.length; aA++) pI += "   " + za[aA].name + ": " + za[aA].g2;
		return pI
	}, this.aC3 = function(t4, a2g, aBL) {
		return 0 === dp[t4].length ? "Rank: " + (a2g + 1) : dp[t4] + " Rank: " + (a2g + 1) + (3 !== t4 && aBL < 100 ? "   " + dp[3] + " Rank: " + (aBL + 1) : "")
	}, this.aC4 = function(ro) {
		for (var qg = bl.x.qg, aA = 0; aA < qg.length; aA++) aC5(qg[aA].qh, ro);
		aC5(bl.message.aC6(), ro), bl.qr.aC4(ro)
	}
}

function aBF() {
	var rJ = 0,
		aC7 = 0,
		aC8 = 0,
		aC9 = null,
		aCA = null;

	function aCD(pT, aCE, aCF) {
		var pI = pT.username;
		return (pI += "   " + bl.ql.aC3(pT.t4, pT.a2g, pT.aBL)) + function(pT) {
			pT = pT.un;
			if (pT < 1e3) return "   Gold: " + pT;
			if ((pT %= 1024) < 1e3) return "   Gold: " + pT + "k";
			return "   Gold: " + (pT - 999) + "M"
		}(pT) + ("   IP: " + bD.rt.yA(pT.aBM, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aCF ? aC7 : aCC(pT, aCE)])
	}

	function aCC(pT, aCE) {
		return aC7 = aCE || bl.sx.aBe(pT.ro) ? 1 : 0
	}
	this.aCB = function() {
		!rJ || aC7 === aCC(aCA) && aC8 === aCA.un || (aC8 = aCA.un, aC9.show(-1, -1, aCD(aCA, 0, 1), 1, 1))
	}, this.t6 = function(e, pT, aCE) {
		var a77 = e.target.getBoundingClientRect();
		this.show(a77.left, a77.top, pT, 0, aCE), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.sv && bl.sv.qs(1)
		})
	}, this.show = function(eh, ej, pT, rN, aCE) {
		aC9 = aC9 || new rH, aC8 = (aCA = pT).un, aC9.show(eh, ej, aCD(pT, aCE), rN), rJ = 1
	}, this.qs = function(rT) {
		aC9 && aC9.qs(rT) && (rJ = 0, aCA = null)
	}
}

function aBD() {
	function aCK(aCN) {
		bl.x.aBO && 1 === bl.x.qe[2] && s.aCO(29).aCP(), bl.x.aBO = 0, s.aCO(29).aCQ(), 0 !== bl.x.qg[bl.x.qe[0]].si && !aCN || s.aCO(29).aCR(), bl.sv.aCB()
	}
	this.qg = new Array(4), this.qe = [0, 0, 1, 0], this.aBO = 0, this.aCH = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qg.length; aA++) this.qg[aA] = new aCI;
		this.qe[0] = bh.e7.data[158].value
	}, this.aCJ = function() {
		aCK(!0)
	}, this.aCL = function() {
		for (var aA = 0; aA < bl.x.qg.length; aA++) {
			var qf = bl.x.qg[aA];
			0 === qf.si ? qf.aCS = 0 : (qf.aCT = Math.max(qf.aCT - qf.aCS % 2, 0), qf.aCS++)
		}
		aCK(!1)
	}, this.aCU = function(qd) {
		this.qe[0] !== qd || this.qe[2] || s.aCO(29).aCV()
	}
}

function aBH() {
	var aCW = 0,
		aCX = "",
		aCY = 0,
		aCZ = 0,
		aCa = 0;

	function aCc(a5h) {
		ay.aCn.aCo(3, a5h)
	}

	function aCl(g2) {
		aCW = 1, bl.message.aCp({
			id: 6,
			value: g2
		})
	}

	function aCf(p) {
		var aCs = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCs)
	}
	this.yw = function(p) {
		var aCb, g, aCh;
		if (aCW) return aCW = 0, "yes" === (aCb = p.toLowerCase()) || "y" === aCb ? void aCc(aCX) : void bl.message.aCp({
			id: 5,
			aBv: 7
		});
		!(p.indexOf("@") < 0) && (aCb = aCf(p)) ? (aCX = p, g = function(aCe) {
			for (var ea = aCe.length, aCq = [0, 0, 0, 0], aA = 0; aA < ea; aA++)
				for (var i = aCe[aA], et = 0; et < 4; et++) i === "@room" + (et + 1) && (aCq[et] = 1);
			if ((aCZ = b8.pk.a1Q(aCq)) % 4 == 0) return b8.pk.a1i(bl.sx.sy);
			for (et = 0; et < 4; et++) aCq[et] = aCq[et] ? bl.sx.sy[et] : [];
			return b8.pk.a1i(aCq)
		}(aCb), function(aCe, aCh, p) {
			if (!aCY) return;
			for (var ea = aCh.length, aA = 0; aA < ea; aA++) 2 === aCh[aA].id && (p = p.replace(aCe[aCh[aA].dx], "@" + aCh[aA].f2));
			return aCW = 1, aCc((aCX = p).slice(0, 126) + "|"), 1
		}(aCb, aCh = function(aCe) {
			for (var aCh = [], ea = (aCa = aCY = 0, aCe.length), aA = 0; aA < ea; aA++) {
				var i = aCe[aA],
					kX = i.length;
				b8.zX.startsWith(i, "@[") ? kX <= 9 && b8.zX.a2G(i, "]") && aCh.push({
					id: 0,
					f2: i.substring(2, kX - 1).toUpperCase()
				}) : 6 === kX ? b8.zX.startsWith(i, "@room") || (aCa++, aCh.push({
					id: 1,
					f2: bE.rt.vF(i.substring(1))
				})) : 1 < kX && kX < 5 && 0 <= (kX = b5.data.aAk(i.substring(1))) && (aCh.push({
					id: 2,
					f2: kX,
					dx: aA
				}), aCY = 1)
			}
			return aCh
		}(aCb), p) || (0 === aCh.length ? aCZ || function(aCe) {
			for (var ea = aCe.length, aA = 0; aA < ea; aA++) {
				var i = aCe[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCb) ? aCl(g.length) : aCc(p) : aCb.length === aCa ? aCc(p) : (function(g, aCh) {
			var kX = aCh.length;
			if (0 === kX) return;
			var ea = g.length;
			loop: for (var aA = ea - 1; 0 <= aA; aA--) {
				for (var et = 0; et < kX; et++)
					if (0 === aCh[et].id) {
						if (aCh[et].f2 === b8.zX.zc(g[aA].username)) continue loop
					} else if (1 === aCh[et].id && aCh[et].f2 === g[aA].ro) continue loop;
				g[aA] = g[--ea], g.pop()
			}
		}(g, aCh), aCl(g.length)))) : aCc(p)
	}, this.aCt = function(p) {
		var aCe = aCf(p);
		if (aCe)
			for (var a4 = new RegExp("^[0-9]+$"), ea = aCe.length, aA = 0; aA < ea; aA++) {
				var i = aCe[aA].substring(1),
					kX = i.length;
				1 <= kX && kX <= 3 && a4.test(i) && (kX = parseInt(i, 10), !isNaN(kX)) && 0 <= kX && kX < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[kX]))
			}
		return p
	}
}

function aBG() {
	var aCu, aCv = [],
		aCw = -1,
		aCx = 0,
		aCy = 0;

	function aD2() {
		aCx = bd.e9, (3 === this.tA ? (aCy = 1, aD1) : (aCw = (aCv.length + aCw + 2 * this.tA - 1) % aCv.length, aD0))()
	}

	function aD0() {
		0 !== aCv.length && (aCy = 0, aCu && aCu.tD(), (aCu = new t7(aD2)).r4(aCw, aCv.length), aCu.show(aCv[aCw]), bl.message.resize())
	}

	function aD1() {
		aCu && aCu.tD(), (aCu = new tE(aD0)).r4(aCv.length), aCu.show(), bl.message.resize()
	}
	this.aCp = function(aBt) {
		var pT;
		2 === aBt.id && 3 === aBt.aBv ? bl.ql.aC4(aBt.ro) : (pT = bl.ql.qm(aBt, bl.ql.qn(aBt)), 5 === aBt.id || 6 === aBt.id ? s.aCO(29).aCz().qp(pT) : (pT = bd.e9 < aCx + 2e4, aCw !== aCv.length - 1 && pT || (aCw = aCv.length), aCv.push(aBt), bh
			.e7.data[14].value || bn.play(), aCu && (bh.e7.data[13].value || aCy && pT ? aCu.r4(aCv.length) : aD0())))
	}, this.show = function() {
		aD1()
	}, this.qs = function() {
		aCw = aCv.length - 1, aCu && aCu.tD(), aCu = null
	}, this.resize = function() {
		aCu && aCu.resize()
	}, this.aC6 = function() {
		return aCv
	}
}

function aBE() {
	var aD3 = null,
		aD4 = null,
		aD5 = 0,
		aD6 = 0,
		aD7 = null;

	function aD9() {
		0 !== aD4.t4 && (bl.tJ.qs(), s.t(8, 29, new rr(25, {
			rs: 0,
			ro: bD.rt.yA(aD4.ro, 5),
			rp: 0
		}, 29)))
	}

	function aDA() {
		var eh = aD3.eh,
			ej = aD3.ej;
		bl.tJ.qs(), aD3 = new tF([new v("Kick User", function() {
			aDG(0, 0)
		}, aDL(0, 0)), new v("Block Chat", aDH, aDM(1)), new v("Censor Username", aDI, aDM(2)), new v("Elo Deduction", aDJ, aDM(3)), new v("Gold Seizure", aDK, aDM(4))]), aDF(eh, ej), aD5 = 2, aD6 = 1
	}

	function aDM(id) {
		return !bl.aB7 || bl.ql.t5(aD4) || bl.aB7.aBL >= aD4.a2g || 0 === id && aD4.a2g < 200 ? 1 : 1 - bm.dv(id, bl.aB7.aBL, 0)
	}

	function aDD() {
		return !bl.aB7 || bl.ql.t5(aD4) ? 1 : 0
	}

	function aDL(id, dx) {
		var a2g;
		return !bl.aB7 || bl.ql.t5(aD4) || (a2g = bl.aB7.aBL) >= aD4.a2g ? 1 : 1 - bm.dv(id, a2g, dx)
	}

	function aDC() {
		var eh = aD3.eh,
			ej = aD3.ej,
			aDN = (bl.tJ.qs(), aDD());
		aD3 = new tF([new v(bm.du[5][0], function() {
			aDG(5, 0)
		}, aDN), new v(bm.du[5][1], function() {
			aDG(5, 1)
		}, aDN), new v(bm.du[5][2], function() {
			aDG(5, 2)
		}, aDN), new v(bm.du[5][3], function() {
			aDG(5, 3)
		}, aDN)]), aDF(eh, ej), aD6 = aD5 = 2
	}

	function aDE() {
		29 === s.rq && s.aDO().aB8(bD.rt.yA(aD4.ro, 5))
	}

	function aDG(id, value) {
		ay.aCn.aCo(5, {
			id: id,
			value: value,
			ro: aD4.ro
		})
	}

	function aDH() {
		var eh = aD3.eh,
			ej = aD3.ej;
		bl.tJ.qs(), aD3 = new tF([new v(bm.du[1][0], function() {
			aDG(1, 0)
		}, aDL(1, 0)), new v(bm.du[1][1], function() {
			aDG(1, 1)
		}, aDL(1, 1)), new v(bm.du[1][2], function() {
			aDG(1, 2)
		}, aDL(1, 2)), new v(bm.du[1][3], function() {
			aDG(1, 3)
		}, aDL(1, 3)), new v(bm.du[1][4], function() {
			aDG(1, 4)
		}, aDL(1, 4))]), aDF(eh, ej), aD5 = 3, aD6 = 1
	}

	function aDI() {
		var eh = aD3.eh,
			ej = aD3.ej;
		bl.tJ.qs(), aD3 = new tF([new v(bm.du[2][0], function() {
			aDG(2, 0)
		}, aDL(2, 0)), new v(bm.du[2][1], function() {
			aDG(2, 1)
		}, aDL(2, 1)), new v(bm.du[2][2], function() {
			aDG(2, 2)
		}, aDL(2, 2))]), aDF(eh, ej), aD5 = 3, aD6 = 2
	}

	function aDJ() {
		var eh = aD3.eh,
			ej = aD3.ej;
		bl.tJ.qs(), aD3 = new tF([new v(bm.du[3][0], function() {
			aDG(3, 0)
		}, aDL(3, 0)), new v(bm.du[3][1], function() {
			aDG(3, 1)
		}, aDL(3, 1)), new v(bm.du[3][2], function() {
			aDG(3, 2)
		}, aDL(3, 2))]), aDF(eh, ej), aD6 = aD5 = 3
	}

	function aDK() {
		var eh = aD3.eh,
			ej = aD3.ej;
		bl.tJ.qs(), aD3 = new tF([new v(bm.du[4][0], function() {
			aDG(4, 0)
		}, aDL(4, 0)), new v(bm.du[4][1], function() {
			aDG(4, 1)
		}, aDL(4, 1)), new v(bm.du[4][2], function() {
			aDG(4, 2)
		}, aDL(4, 2)), new v(bm.du[4][3], function() {
			aDG(4, 3)
		}, aDL(4, 3)), new v(bm.du[4][4], function() {
			aDG(4, 4)
		}, aDL(4, 4))]), aDF(eh, ej), aD5 = 3, aD6 = 4
	}

	function aDF(eh, ej, tL) {
		aD3.show(eh, ej, tL), bl.sv.show(aD3.eh, aD3.ej, aD4, 1)
	}
	this.aD8 = function(e, pT) {
		aD5 = 1, aD4 = pT, aD3 = new tF([new v(L(129), aD9, 0 === aD4.t4 ? 1 : 0), new v(L(130), aDA, function() {
			if (!bl.aB7) return 1;
			if (bl.ql.t5(aD4)) return 1;
			if (100 <= bl.aB7.aBL) return 1;
			if (bl.aB7.aBL >= aD4.a2g) return 1;
			return 0
		}()), new v(L(131, 0, "Report"), aDC, aDD()), new v(L(132), aDE, 0)]), aDF((aD7 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aD7.clientY, 1)
	}, this.a0z = function(code) {
		if (29 !== s.rq) return !1;
		if (!aD4) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qs();
			else if (b8.zX.startsWith(code, "Numpad") || b8.zX.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aD5) this.aD8(aD7, aD4);
				else {
					if (!aD3) return !1;
					1 === aD5 ? code <= 1 ? aD9() : 2 === code ? aDA() : 3 === code ? aDC() : (aDE(), this.qs()) : 2 === aD5 ? 1 === aD6 ? code <= 1 ? (aDG(0, 0), this.qs()) : (2 === code ? aDH : 3 === code ? aDI : 4 === code ? aDJ : aDK)() : (
						aDG(5, bJ.p9(code - 1, 0, 3)), this.qs()) : (aDG(aD6, bJ.p9(code - 1, 0, bm.du[aD6].length - 1)), this.qs())
				}
		}
		return !0
	}, this.qs = function() {
		aD5 = 0, aD3 && aD3.qs(), aD3 = null, bl.sv.qs()
	}
}

function aCI() {
	this.si = 0, this.eG = 0, this.mapSeed = 0, this.aBg = 0, this.aDP = 0, this.aDQ = 0, this.aBm = 0, this.aCT = 0, this.spawningSeed = 0, this.a0B = 0, this.aBk = 0, this.qh = [], this.qi = 1048575, this.aCS = 0, this.aDR = [{
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
	var aDS = [],
		s3 = [],
		aDT = [];

	function aDV(pT) {
		for (var p = pT.p, aDU = [];;) {
			var ev = function aDX(p, position) {
				position = p.indexOf("@", position);
				if (position < 0) return -1;
				var pI = p.substring(position + 1, position + 6);
				if (5 !== pI.length) return aDX(p, position + 1);
				if (b8.zX.startsWith(pI, "room")) return aDX(p, position + 1);
				var aDe = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aDe.test(pI)) return aDX(p, position + 1);
				aDe = p.substring(position + 6, position + 7);
				if (1 !== aDe.length) return position;
				pI = new RegExp("^[ :!.]+$");
				if (!pI.test(aDe)) return aDX(p, position + 1);
				return position
			}(p, 0);
			if (-1 === ev) {
				aDU.push(aDY(p, pT));
				break
			}
			0 === ev ? aDU.push(aDZ(p.substring(1, 6), pT, ev)) : (aDU.push(aDY(p.substring(0, ev), pT)), aDU.push(aDZ(p.substring(ev + 1, ev + 6), pT, ev))), p = p.substring(ev + 6)
		}
		return aDU
	}

	function aDZ(pI, pT, ev) {
		var aDa = function(pI) {
				var ro = bE.rt.vF(pI),
					aDa = bl.sx.aBe(ro);
				if (aDa) {
					for (aDS.push(aDa); 50 < aDS.length;) aDS.shift();
					return aDa
				}
				for (var aA = aDS.length - 1; 0 <= aA; aA--)
					if (ro === aDS[aA].ro) return aDa = aDS[aA], aA < 40 && aDS.push(aDa), aDa;
				return bl.sx.aBN(ro, pI, 1, 999999, 999999, 0, 0, 0, 0)
			}(pI),
			pI = (0 === ev && 0 === pT.aBt.id && pT.qq && (pT.fontSize = bl.ql.aBy(aDa.t4, aDa.a2g), pT.aBw = bl.ql.aBz(aDa.a2g)), document.createElement("span"));
		return pI.textContent = function(aDa, pT, ev) {
			pT = aDa.aBV && aDa.aBV-- && (2 === pT.aBt.id || (3 === pT.aBt.id || 4 === pT.aBt.id) && 0 !== ev);
			return aDa.username + (pT ? " (" + aDa.aBU + ")" : "")
		}(aDa, pT, ev), pI.style.display = "inline-block", pI.style.color = bl.ql.t3(aDa.t4), pI.style.cursor = "pointer", pI.style.margin = "0", pI.style.font = "inherit", pI.style.minWidth = pI.style.minHeight = "1em", bl.ql.t5(aDa) && (pI
			.style.textDecoration = "underline"), bl.ql.aBz(aDa.a2g) && (pI.style.fontWeight = "bold"), pI.onclick = function(e) {
			bl.tJ.aD8(e, aDa)
		}, bH.q4() || (pI.onmouseover = function(e) {
			bl.sv.t6(e, aDa)
		}), s3.push(pI), pI
	}

	function aDY(p, pT) {
		var qa = document.createElement("span");
		return qa.textContent = p, qa.style.color = pT.aBx, qa.style.margin = "0", qa.style.font = "inherit", qa
	}
	this.tD = function() {
		for (var aA = 0; aA < s3.length; aA++) s3[aA].onclick = s3[aA].onmouseover = null;
		aDT = s3 = null
	}, this.transform = function(pT) {
		for (var pG = document.createElement("div"), aDU = aDV(pT), aA = 0; aA < aDU.length; aA++) pG.appendChild(aDU[aA]);
		0 === pT.aBt.id && (pG.vx143 = pT.aBt, aDT.push(pG)), pG.style.margin = "0.6em 0.6em", pT.qq && (pG.style.marginLeft = pG.style.marginRight = "inherit"), pG.style.font = "inherit";
		var aDW = 0 < pT.aBt.id;
		return pT.aBw && (pG.style.fontWeight = "bold"), aDW && (pG.style.paddingLeft = "0.7em"), aDW && (pG.style.fontStyle = "italic"), pG.style.fontSize = pT.fontSize.toFixed(2) + "em", pG
	}, this.aC4 = function(ro) {
		for (var aDh = aDT, aA = aDh.length - 1; 0 <= aA; aA--) {
			var ed = aDh[aA];
			if (ed.vx143.ro === ro) {
				for (; ed.firstChild;) ed.removeChild(ed.firstChild);
				ed.vx143.p = "[Redacted Message]";
				for (var aDU = aDV(bl.ql.qm(ed.vx143, bl.ql.qn(ed.vx143))), et = 0; et < aDU.length; et++) ed.appendChild(aDU[et]);
				aDh.splice(aA, 1)
			}
		}
	}
}

function cK() {
	var aDi, aDj, aDk;

	function aDp(aA) {
		var button = aX.qB[aA],
			eh = button.eh,
			ej = button.ej,
			i = button.i,
			j = button.j;
		tk.fillStyle = button.aDn, tk.fillRect(eh, ej, i, j), aA === aDi && (tk.fillStyle = aDk, tk.fillRect(eh, ej, i, j)), tk.lineWidth = ba.xt, tk.strokeStyle = aDj, tk.strokeRect(eh, ej, i, j),
			function(button) {
				var eh = button.eh,
					ej = button.ej,
					i = button.i,
					j = button.j;
				b8.pb.textAlign(tk, 1), b8.pb.textBaseline(tk, 1), tk.font = button.font, tk.fillStyle = aDj, tk.fillText(button.a5h, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ej = 0, this.gap = 0, this.dU = function() {
		aDi = -1, aDj = b9.mh, aDk = "rgba(255,255,255,0.16)", this.qB = new Array(7), this.j = Math.floor((z.a0.qz() ? .123 : .093) * h.pd), this.i = Math.floor((z.a0.qz() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDl = Math.floor(.26 * this.j),
			aDm = b8.pb.rQ(1, aDl);
		this.qB[0] = {
			eh: 0,
			ej: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5h: "Multiplayer",
			font: aDm,
			aDn: "rgba(22,88,22,0.8)",
			fontSize: aDl
		}, aDl = Math.floor(.18 * this.j), aDm = b8.pb.rQ(1, aDl), this.qB[1] = {
			eh: 0,
			ej: 0,
			i: this.i - this.qB[0].i - this.gap,
			j: this.j,
			a5h: "Single Player",
			font: aDm,
			aDn: "rgba(22,88,88,0.8)",
			fontSize: aDl
		}, this.qB[2] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5h: "",
			font: this.qB[1].font,
			aDn: "rgba(100,0,0,0.8)",
			fontSize: this.qB[1].fontSize
		}, this.qB[3] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: this.j,
			a5h: "Back",
			font: this.qB[0].font,
			aDn: "rgba(0,0,0,0.8)",
			fontSize: this.qB[0].fontSize
		}, this.qB[4] = {
			eh: 0,
			ej: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5h: "The game was updated!",
			font: this.qB[1].font,
			aDn: "rgba(100,0,0,0.8)",
			fontSize: this.qB[1].fontSize
		}, this.qB[5] = {
			eh: 0,
			ej: 0,
			i: this.qB[0].i,
			j: Math.floor(.8 * this.j),
			a5h: "Reload",
			font: this.qB[0].font,
			aDn: "rgba(0,100,0,0.8)",
			fontSize: this.qB[0].fontSize
		}, this.qB[6] = {
			eh: 0,
			ej: 0,
			i: this.qB[1].i,
			j: this.qB[5].j,
			a5h: "Back",
			font: this.qB[0].font,
			aDn: "rgba(0,0,0,0.8)",
			fontSize: this.qB[0].fontSize
		}, this.a84()
	}, this.a84 = function() {
		this.ej = Math.floor(.54 * h.j), this.qB[0].eh = Math.floor(.5 * h.i - .5 * this.i), this.qB[1].eh = this.qB[0].eh + this.qB[0].i + this.gap, this.qB[2].eh = this.qB[3].eh = this.qB[0].eh, this.qB[4].eh = this.qB[5].eh = this.qB[0].eh,
			this.qB[6].eh = this.qB[1].eh, this.qB[0].ej = Math.floor(.54 * h.j), this.qB[1].ej = this.qB[0].ej, this.qB[2].ej = Math.floor((h.j - this.qB[2].j - this.qB[3].j - this.gap) / 2), this.qB[3].ej = this.qB[2].ej + this.qB[2].j + this
			.gap, this.qB[4].ej = Math.floor((h.j - this.qB[4].j - this.qB[5].j - this.gap) / 2), this.qB[5].ej = this.qB[6].ej = this.qB[4].ej + this.qB[4].j + this.gap
	}, this.aDo = function() {
		aDp(0), aDp(1)
	}, this.aDq = function() {
		aDp(2), aDp(3)
	}, this.aDr = function() {
		aDp(4), aDp(5), aDp(6)
	}, this.a0R = function(eh, ej, lR) {
		var aA = -1;
		return 0 === aZ.a05() ? aA = this.a0v(eh, ej, 0, 2) : 3 === aZ.a05() ? aA = this.a0v(eh, ej, 3, 1) : 5 === aZ.a05() && (aA = this.a0v(eh, ej, 5, 2)), aDi !== aA && (aDi = aA, lR) && (bd.dc = !0), -1 !== aA && (aS.qb(), !0)
	}, this.a0v = function(eh, ej, aDs, size) {
		for (var aA = aDs; aA < aDs + size; aA++)
			if (eh >= this.qB[aA].eh && ej >= this.qB[aA].ej && eh <= this.qB[aA].eh + this.qB[aA].i && ej <= this.qB[aA].ej + this.qB[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDu, aDv, aDw, aDx, aDy, aDz, aE0, aE1, aE2, aE3, aE4, aE5, aE6, aE7 = 1;

	function aE9(aEA) {
		!aEA && 1 === aE6 && aE7 ? (aE7 = 0, ay.x.close(aE6, 3280)) : aE6 = (aE6 + 1) % ay.x.aEB, aE5 = bd.e9, ay.x.aEC(aE6, 4) && ay.aCn.aED(aE6)
	}

	function aEE() {
		if (0 !== aE6) return 1 === aE6 && __fx.customLobby.isActive() ? (q.a0G(3249), __fx.customLobby.setActive(!1)) : void aE9();
		q.a0G(3249)
	}

	function aEJ(ej, a7l, si) {
		var m7 = Math.floor((h.i - aDx) / 2) + aE0,
			mK = m7 + Math.floor(si * (aDx - 2 * aE0));
		tk.lineWidth = a7l, tk.beginPath(), tk.moveTo(m7, ej), tk.lineTo(mK, ej), tk.lineTo(Math.floor(m7 - aE0 + si * aDx), ej + aDw), tk.lineTo(m7 - aE0, ej + aDw), tk.closePath()
	}
	this.aE8 = 1, this.dU = function() {
		aZ.setState(6), aDu = 0, aDv = 1, aE1 = "rgba(0,220,120,0.4)", aE2 = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aE7 = 1, aE6 = this.aE8 - 1, aE9(1)
	}, this.resize = function() {
		aDx = Math.floor((z.a0.qz() ? .5 : .25) * h.pd), aDy = aDx + 12, aDw = Math.floor(.125 * aDx), aE0 = 3 * aDw, aDz = Math.floor(.225 * aDx), aE4 = Math.floor(.3 * aDw), aE3 = b8.pb.rQ(0, aE4)
	}, this.a08 = function(a02) {
		a02 === aE6 && aEE()
	}, this.gn = function(eh, ej) {
		var m7 = Math.floor((h.i - aDy) / 2),
			m8 = Math.floor(.5 * (h.j - ba.gap - aDw - aDz)) + aDw + ba.gap;
		return m7 < eh && eh < m7 + aDy && m8 < ej && ej < m8 + aDz && (this.a17(), aX.a0R(eh, ej, !1), !0)
	}, this.a17 = function() {
		ay.x.a0H(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ij = function() {
		6 === aZ.a05() && (bd.e9 > aE5 + 12e3 && aEE(), 100 < (aDu += .07 * aDv * (aDu < 16 ? 5 + aDu : 84 < aDu ? 105 - aDu : 17)) ? (aDu = 100, aDv = -1) : aDu < 0 && (aDu = 0, aDv = 1), aE1 = "rgba(0," + Math.floor(190 - 1.9 * aDu) + "," +
			Math.floor(120 - 1.2 * aDu) + "," + (.4 + .004 * aDu) + ")", aE2 = "rgba(0," + Math.floor(1.9 * aDu) + "," + Math.floor(1.2 * aDu) + "," + (.8 - .004 * aDu) + ")", bd.dc = !0)
	}, this.tj = function() {
		var eh = Math.floor((h.i - aDy) / 2),
			ej = Math.floor(.5 * (h.j - ba.gap - aDw - aDz));
		! function(title, ej, a7l, si) {
			tk.fillStyle = aE2, aEJ(ej, a7l, 1), tk.fill(), tk.fillStyle = aE1, aEJ(ej, a7l, si), tk.fill(), tk.strokeStyle = b9.mh, aEJ(ej, a7l, 1), tk.stroke(),
				function(aEL, ej) {
					b8.pb.textAlign(tk, 1), b8.pb.textBaseline(tk, 1), tk.font = aE3, tk.fillStyle = b9.mh, tk.fillText(aEL, Math.floor(.5 * h.i), Math.floor(ej + .58 * aDw))
				}(title, ej)
		}(L(133), ej, 3, aDu / 100),
		function(eh, ej, i, j, a5h) {
			tk.fillStyle = b9.mc, tk.fillRect(eh, ej, i, j), tk.lineWidth = 3, tk.strokeStyle = b9.mh, tk.strokeRect(eh, ej, i, j);
			var ea = Math.floor(.3 * j);
			b8.pb.textAlign(tk, 1), b8.pb.textBaseline(tk, 1), tk.font = b8.pb.rQ(0, ea), tk.fillStyle = b9.mh, tk.fillText(a5h, Math.floor(eh + i / 2), Math.floor(ej + j / 2 + .1 * ea))
		}(eh, ej + aDw + ba.gap, aDy, aDz, L(36))
	}
}

function cM() {
	var zy = 0;
	this.dU = function() {
		aX.dU(), zy = 0
	}, this.setState = function(aEM) {
		zy = aEM
	}, this.a05 = function() {
		return zy
	}, this.aEN = function() {
		this.setState(8), s.w()
	}, this.a0z = function(e) {
		if (!bQ.vV) return !1;
		if (!(bd.e9 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aEO()) return !0;
				if ("Enter" === e.key) {
					if (0 === zy) return !0;
					if (7 === zy) return !0
				}
			}
			return !1
		}
	}, this.aEP = function() {
		bX.resize()
	}, this.aEO = function() {
		return !!bX.qs()
	}, this.gn = function(eh, ej) {
		!bQ.vV || bX.gn(eh, ej) || 6 === zy && aY.gn(eh, ej) || bW.gn(eh, ej) || aS.gn(eh, ej)
	}, this.a0R = function(eh, ej) {
		!aS.a7x && aX.a0R(eh, ej, !0) || aS.a0R(eh, ej)
	}, this.click = function(eh, ej) {
		aS.a0q()
	}, this.a0U = function(eh, ej, deltaY) {}, this.aEQ = function() {
		aX.a84(), bd.dc = !0
	}, this.tj = function() {
		8 !== zy && 10 !== zy && (tk.imageSmoothingEnabled = !0, this.x3(), 0 !== zy && (aS.tj(), aN.tj(), this.aER(), bW.tj()), 0 !== zy && 6 === zy && aY.tj(), bX.tj(), s.tj())
	}, this.x3 = function() {
		var aET, aES;
		if (__fx.makeMainMenuTransparent) tk.clearRect(0, 0, h.i, h.j);
		else bQ.vV ? (aES = h.i / bQ.el, aET = h.j / bQ.em, tk.setTransform(aES = aET < aES ? aES : aET, 0, 0, aES, Math.floor((h.i - aES * bQ.el) / 2), Math.floor((h.j - aES * bQ.em) / 2)), tk.drawImage(bQ.vX, 0, 0), tk.setTransform(1, 0, 0, 1,
			0, 0), tk.fillStyle = b9.mc) : tk.fillStyle = b9.mY, tk.fillRect(0, 0, h.i, h.j)
	}, this.aER = function() {
		var ej = Math.floor(.3 * h.j),
			canvas = aa.aEU("territorial.io"),
			hW = (hW = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hW,
			eh = (tk.globalAlpha = .15, tk.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hW * canvas.width))),
			eh = Math.floor(eh / hW),
			ej = Math.floor(ej - .5 * canvas.height * hW),
			ej = Math.floor(ej / hW);
		tk.setTransform(hW, 0, 0, hW, eh, ej), tk.drawImage(canvas, eh, ej), tk.setTransform(1, 0, 0, 1, 0, 0), tk.globalAlpha = 1, tk.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBk = 0;
	var aEW, aEX, aEY, aEZ, aEa, aEb = this.aEV = 0;

	function aEe() {
		aEZ = aEa = null, aEb = 0
	}
	this.dU = function(qf, aBh, aBi) {
		s.w(), bl.tD(), aZ.setState(10), aEZ = qf, aEa = aBh, aEb = aBi, this.aBk = qf.aBk, this.aEV = aBi, aEW = 0, aEX = bd.e9 + 4500, ay.x.a0B = qf.a0B, ay.x.a0A === qf.a0B ? (console.log("direct pass"), aEY = 0) : (console.log(
			"delayed pass"), ay.x.close(ay.x.a0A, 3247), aEY = 2, ay.x.aEC(qf.a0B, 5) && ay.o0.aEc()), tk.imageSmoothingEnabled = !0, aZ.x3();
		aBh = aa.aEU("loading"), aBi = (z.a0.qz() ? .396 : .25) * h.pd / aBh.width;
		tk.setTransform(aBi, 0, 0, aBi, Math.floor((h.i - aBi * aBh.width) / 2), Math.floor((h.j - aBi * aBh.height) / 2)), tk.imageSmoothingEnabled = !1, tk.drawImage(aBh, 0, 0), tk.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lP = function() {
		0 < aEY && bd.e9 > aEX && (aEY--, aEX += 4500, 0 === bd.aEg) && 0 === bd.jm() && ay.x.aEC(ay.x.a0B, 5)
	}, this.aEh = function() {
		return 10 === aZ.a05() && (bl.aB9.aBl(aEZ, aEa, aEb), aEe(), !0)
	}, this.aEi = function() {
		10 === aZ.a05() && 2 <= ++aEW && (bl.aB9.aBl(aEZ, aEa, aEb), aEe())
	}
}

function cN() {
	var aEk, canvas, zE, aEl;

	function aEr(dx, name, aEs, pI) {
		zE[dx] = name, canvas[dx] = new Image, canvas[dx].onload = function() {
			! function(dx, aEs) {
				var a2m, a2n = null;
				7 === aEs ? a2m = b8.a1D.a2p : 8 === aEs ? (a2m = b8.a1D.a2s, a2n = .1) : 3 === aEs ? (a2m = b8.a1D.a2q, a2n = .06) : 5 === aEs ? a2m = b8.a1D.a2t : 6 === aEs ? a2m = b8.a1D.a2o : 4 === aEs && (a2m = b8.a1D.a2u);
				canvas[dx] = b8.a1D.a2l(canvas[dx], a2m, a2n)
			}(dx, aEs), aEu()
		}, canvas[dx].onerror = function(e) {
			console.error("Error loading image at index", dx, "Error:", e), aEu()
		}, canvas[dx].src = "data:image/png;base64," + pI
	}

	function aEu() {
		aEk--, aEo()
	}

	function aEo() {
		0 === aEk && (aEk = -1, aEq(), bd.dc = !0, canvas[7] = aEl, canvas[8] = aEl, canvas[9] = aEl, canvas[10] = aEl, 5 === s.rq) && s.aDO().aEw.resize()
	}

	function aEq() {
		aK.a3y(), bW.aB0([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.va = new xQ, ai.va.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aEk = 23, canvas = new Array(aEk), zE = new Array(aEk), (aEl = document.createElement("canvas")).width = 1;
			for (var aA = aEk - (aEl.height = 1); 0 <= aA; aA--) canvas[aA] = aEl;
			aEq(), aEr(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEr(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEr(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEr(3, "orders", 6,
					"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"
					), aEr(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aEr(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEr(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7baaqvsBAAAqqlhw4bxhz/8Ie6+++7o0KFDdg5FarPNNovnnnsuBgwYkJ0C8L0aNmwYjz32WOy+++7ZKdSiioqKuOmmm+Lwww/PTgEAAAAAAAAAoI4w3AMAAAAAAAAAALXsN7/5Tbz99tvZGSxGq1at4vTTT09t6NmzZ2y99dapDfyf999/P4YPH56dAcAy6tWrV6y99trZGSyBf/7zn3HqqadmZ1CLTj311HjrrbeyM/geG2+8cXYCAADVsNVWW8U//vGPOOyww6JBgwbZORS58vLyOO+88+Lxxx+Ptm3bZucA/Ffjxo3j2Wefjd69e2enkKBJkyZxzTXXRL9+/bJTAAAAAAAAAACoAwz3AAAAAAAAAABAgosuuig7gWo49NBDo7Q072VWp5xySpSVlaXdn//nggsuiKqqquwMAJbRfvvtl53AEvj666/j5JNP9hhcZKqqquLUU0+NysrK7BS+o2XLlrHVVltlZwAAsAjDhw+PRx55JNZbb73sFPiWbbfdNl5++eXYe++9s1MAomHDhvHoo4/GZpttlp1CokaNGsWll15qvAcAAAAAAAAAAMM9AAAAAAAAAACQ4YYbboixY8dmZ7AYa665Zhx33HEp9+7SpUvssMMOKffm28aMGRPXX399dgYANaBnz57ZCSyBW2+9NZ544onsDBKMGjUq7r333uwMvsdOO+2UnQAAwPdo2bJlPPbYYzF06NBo0qRJdg58r7Zt28btt98el156aXYKUMQaNmwYTzzxhHFiIsJ4DwAAAAAAAAAA/8dwDwAAAAAAAAAAJDn33HNj/vz52RksRt++fVPue/rpp8cKK6yQcm/+n6qqqhg2bFh2BgA1oHPnzvGjH/0oO4Nq+vTTT+OUU07JziDRKaecEtOnT8/O4Dt+/OMfZycAAPAd2223Xbz88sux3XbbZafAYjVo0CCOP/74eOqpp6Jt27bZOUCRKS0tjYceeshoD9/SqFGjuPjii+Oggw7KTgEAAAAAAAAAIInhHgAAAAAAAAAASHLffffFc889l53BYmywwQa1fkhPu3btYrfddqvVe/L9HnvssXjkkUeyMwCoAQcccECUlJRkZ1BNF198sdGWIjdx4sS49tprszP4jq5du2YnAACwkFNPPTUefPDBWHPNNbNTYIn87Gc/ixdffDF69+6dnQIUkVtuuSW233777AzqoCZNmsRVV10VO+64Y3YKAAAAAAAAAAAJDPcAAAAAAAAAAECis88+OyorK7MzWIz+/fvX6v0GDx4czZs3r9V78r/mzJkTQ4YMyc4AoIb06tUrO4Fqev311+Oiiy7KzqAOGDJkSLz//vvZGSykdevWsckmm2RnAAAUvdLS0rjpppvi/PPPj8aNG2fnwFJZY4014v77749+/fplpwBF4LLLLos+ffpkZ1CHrbjiinHTTTfFxhtvnJ0CAAAAAAAAAEAtM9wDAAAAAAAAAACJ/vKXv8Sjjz6ancFibLrpprHTTjvVyr3Ky8tjn332qZV7sWgjR46M1157LTsDgBpQXl7usL16orKy0nAe/1VZWRlXXHFFdgbfsd1222UnAAAUtTZt2sTzzz8fhxxySJSUlGTnwDJp3rx5XHHFFXHJJZdkpwAF7Pjjj49jjz02O4N6oFWrVjFy5Mho2bJldgoAAAAAAAAAALXIcA8AAAAAAAAAACQbPnx4zJ07NzuDRSgpKYkTTzyxVu41aNCgWGWVVWrlXvywzz//PE4//fTsDABqyAEHHBCNGzfOzqAannjiiXj44YezM6hDLrvsshg/fnx2Bgv58Y9/nJ0AAFC0Ntlkk3j++edj8803z06BGlNWVhYnnHBC3HvvvVFa6q3vQM3aZZdd4rzzzjN2R7V17NjRYxIAAAAAAAAAQJHxShEAAAAAAAAAAEg2ZsyYuP/++7MzWIxtttkmevTosVzvUVZWFgcddNByvQfVc8MNN8SkSZOyMwCoIdtuu212AtUwb968OPvss7MzqIMuv/zy7AQW0qVLl+wEAICitMcee8QjjzwSHTp0yE6B5WLPPfeM5557Llq0aJGdAhSITp06xQ033BBNmjTJTqGe6dmzZ1x77bXZGQAAAAAAAAAA1BLDPQAAAAAAAAAAUAecccYZMXPmzOwMFqGsrCwGDBiwXO8xYMCAaNu27XK9B4v34YcfxqBBg7IzAKhBm2yySXYC1fDII4/Eiy++mJ1BHXTdddfFuHHjsjNYoEOHDtGsWbPsDACAotK3b9+47bbbDJpQ8LbYYot45plnDFQBy6y0tDRuu+22aN26dXYK9dQvf/nLOOaYY7IzAAAAAAAAAACoBYZ7AAAAAAAAAACgDnj33Xfj9ttvz85gMXbeeefo1KnTcrv+4YcfvtyuTfVdcsklUVlZmZ0BQA3p0aNHtG/fPjuDxZg7d24MGTIkO4M67IYbbshOYIEGDRrELrvskp0BAFA0Bg4cGFdffXU0adIkOwVqRefOnePJJ5+Mrl27ZqcA9dgNN9wQPXr0yM6gHispKYlzzz03Nt544+wUAAAAAAAAAACWM8M9AAAAAAAAAABQRwwdOjSmTZuWncEiNG7cOAYNGrRcrt2/f//o2LHjcrk21ff666/HZZddlp0BQA36xS9+kZ1ANTzwwAMxbty47AzqsCuvvDI++OCD7AwW6N69e3YCAEBROP/882PEiBHRoEGD7BSoVWuttVY89thjscUWW2SnAPXQYYcdFoccckh2BgWgvLw8/vCHP0RpqaNZAAAAAAAAAAAKmVeHAAAAAAAAAABAHTFlypT4/e9/n53BYuy1117RsmXLGr/ukUceWePXZMnMnz8/zj777OwMAGrYlltumZ3AYnz99ddxzjnnZGdQx1VVVcUf//jH7AwW6NKlS3YCAEDBu+SSS+K0006LkpKS7BRI0aZNm7jvvvuM9wBLpEOHDnHhhRcaWqHGdOvWLa688srsDAAAAAAAAAAAliOvNgIAAAAAAAAAgDpk2LBh8cknn2RnsAjl5eUxaNCgGr1mnz59YsMNN6zRa7Lk/vrXv8Z9992XnQFADSotLY1u3bplZ7AYjz/+eIwbNy47g3rgwgsvjOnTp2dnEBHrrLNOdgIAQEG74YYb4oQTTsjOgHStW7eO++67L7bddtvsFKCeuPHGG2PVVVfNzqDA9O3bN/baa6/sDAAAAAAAAAAAlhPDPQAAAAAAAAAAUIfMmTMnrrrqquwMFqNPnz7RuHHjGrvescceW2PXYunMmzcvzjjjjOwMAGrYbrvtFiuuuGJ2BotQVVUVv/nNb7IzqCdmzZoVDz/8cHYGEbHmmmtGWVlZdgYAQEG64YYb4pe//GV2BtQZrVu3jttvvz222GKL7BSgjhs8eHD89Kc/zc6gADVo0CAuvfTSqKioyE4BAAAAAAAAAGA5MNwDAAAAAAAAAAB1zAUXXBDvvfdedgaL0KpVqxgwYECNXGvHHXeMzTffvEauxdK7995748UXX8zOAKCGbbfddtkJLMbzzz8fzz33XHYG9ciVV14ZVVVV2RlFr1GjRrHNNttkZwAAFJxrr73WaA98j1VXXTXuu+++6N69e3YKUEd17tw5TjnllOwMCli7du3i8ssvz84AAAAAAAAAAGA5MNwDAAAAAAAAAAB1TFVVVVx88cXZGSzGoYceWiPXOfnkk6OkpKRGrsXSmTFjRgwaNCg7A4DloEePHtkJLIaDDllSo0ePjldeeSU7g4jYZJNNshMAAArKJZdcEkceeWR2BtRZrVu3jvvvvz86d+6cnQLUQVdffXWstNJK2RkUuP333z922WWX7AwAAAAAAAAAAGqY4R4AAAAAAAAAAKiDfve738Xrr7+encEirLXWWnH88ccv0zW22GKL6NWrVw0VsbRuvvnmmDBhQnYGADWsYcOGscEGG2RnsAj//Oc/47777svOoB669957sxOIiB/96EfZCQAABeOss86KE044ITsD6rw11lgj7r///mjTpk12ClCHHHvssbHVVltlZ1AEGjRoEBdddFGUljqqBQAAAAAAAACgkHg1CAAAAAAAAAAA1FHnn39+dgKL0bdv32X6+lNPPTXKyspqqIal8Z///CcGDBiQnQHAcrD33ntHkyZNsjNYhLvuuis7gXrqmmuuiRkzZmRnFL2OHTtmJwAAFIRTTjklBg4cmJ0B9cY666wTo0aNisaNG2enAHVARUVFDBo0KDuDIrLeeuvFRRddlJ0BAAAAAAAAAEANMtwDAAAAAAAAAAB11F133RUvvPBCdgaL0KVLlzjwwAOX6mvXX3/92GmnnWq4iCV1+eWXx5w5c7IzAFgOevbsmZ3AIkyfPj0uueSS7AzqqVmzZsUzzzyTnVH0Vl999ewEAIB677DDDosRI0YYeIcl1L179/jTn/6UnQHUAZdeemm0adMmO4Mic+SRR8a6666bnQEAAAAAAAAAQA0x3AMAAAAAAAAAAHXY8OHDo6qqKjuDRejfv/9Sfd3AgQNjhRVWqOEalsSbb74ZF1xwQXYGAMvJxhtvnJ3AIvz5z3+OWbNmZWdQj915553ZCUVvtdVWc8A8AMAy2GGHHeLyyy+PRo0aZadAvbTtttvG9ddfn50BJNpss81i//33z86gCDVr1szzzAAAAAAAAAAABcRwDwAAAAAAAAAA1GFPPPFEPPHEE9kZLMJmm20WO+644xJ9Tdu2bWPPPfdcTkVU14gRI7ITAFiOOnfunJ3AD6iqqoqrr746O4N67o477ojPPvssO6OoNWzYMH7yk59kZwAA1Etdu3aNm2++OZo3b56dAvXaEUccEYMHD87OAJKce+65BvBIs+uuu8Z2222XnQEAAAAAAAAAQA0w3AMAAAAAAAAAAHXcGWecEfPmzcvO4AeUlJTESSedtERfM2jQIAcyJnv++efj9ttvz84AYDnZcccdo7y8PDuDHzB27Nh44YUXsjMoAM8991x2QtHr1q1bdgIAQL1TUVERd999d7Rq1So7BQrC0KFDY++9987OAGrZvvvuG1tvvXV2BkWsrKwszjrrrOwMAAAAAAAAAABqgOEeAAAAAAAAAACo41555ZV48MEHszNYhG222SZ69OhRrc8tLy+P/fbbbzkXsSiVlZVxxhlnZGcAsBz16tUrO4FFeOCBB7ITKBCjRo3KTih6HTt2zE4AAKh37r333lh33XWzM6BgNGrUKK6++uro2rVrdgpQi04//fQoKSnJzqDIbbbZZtG3b9/sDAAAAAAAAAAAlpHhHgAAAAAAAAAAqAcGDRoUs2fPzs7gB5SVlcWAAQOq9bkDBw6MFi1aLOciFuVPf/pTPP3009kZACxH3bp1y07gB8yePTuuvvrq7AwKxB//+Mf44osvsjOKWrt27bITAADqlWuvvdbYLCwHq666atx+++3RuHHj7BSgFhx55JGx0UYbZWdARESceOKJ2QkAAAAAAAAAACwjwz0AAAAAAAAAAFAPvPvuu3HnnXdmZ7AIO++8c3Tq1GmRn1NWVhYHHXRQLRXxfWbPnh0DBw7MzgBgOevcuXN2Aj/g2WefjenTp2dnUCAqKytj7Nix2RlFbbXVVstOAACoN4499tjo27dvdgYUrA022CBuvfXW7AygFpxwwgnZCfBfnTt3jqOOOio7AwAAAAAAAACAZWC4BwAAAAAAAAAA6omBAwc65LwOa9y4cQwaNGiRn3PqqafG6quvXktFfJ9bb7013n777ewMAJaj9u3be7ytw0aOHJmdQIF57rnnshOKmuEeAIDq+elPfxrnnntulJSUZKdAQdtrr73itNNOy84AlqOjjjrKcDt1zvHHH5+dAAAAAAAAAADAMjDcAwAAAAAAAAAA9cSUKVPixhtvzM5gEfbcc89o2bLlD/73ww8/vBZr+K4pU6Y4sA+gCOy6664OQq6jPv300/jjH/+YnUGBueeee2L+/PnZGUVr1VVXzU4AAKjzWrRoETfeeGM0b948OwWKwhlnnBFbb711dgawnPzqV7/KToD/0blz5zjqqKOyMwAAAAAAAAAAWEqGewAAAAAAAAAAoB4ZPHhwfPrpp9kZ/ICVVlopBg4c+L3/7eijj4511lmnlotY2NVXXx0zZszIzgBgOdtkk02yE/gBTz/9dFRVVWVnUGDGjRsX77//fnZG0WrevPkix0sBAIi4+eabo0OHDtkZUDSaNm0av/vd76Jx48bZKUAN69OnT3Tr1i07A77Xsccem50AAAAAAAAAAMBSMtwDAAAAAAAAAAD1yJw5c+Kaa67JzmAR+vTpE+uvv3506tTpWx/9+vXLTitq7733Xpx99tnZGQDUgg022CA7gR/wwAMPZCdQoP7xj39kJxS1jTbaKDsBAKDOGjx4cOy8887ZGVB01l133fjDH/6QnQHUMMMo1GVdunSJvffeOzsDAAAAAAAAAIClYLgHAAAAAAAAAADqmREjRsSECROyM/gBrVu3jvHjx8fbb7/9rY9u3bplpxW1888/P6qqqrIzAKgFHTp0yE7ge3z22Wdx1113ZWdQoEaPHp2dUNTWXnvt7AQAgDqpV69eMWjQoOwMKFr77bdfHHHEEdkZQA3p2bNnbLbZZtkZsEj9+vXLTgAAAAAAAAAAYCkY7gEAAAAAAAAAgHqmqqoqLrnkkuwMqDdefvnl+P3vf5+dAUAt6Nq1a7Ro0SI7g+/x3HPPZSdQwEaNGpWdUNRWX3317AQAgDqnYcOGcc0110STJk2yU6BolZSUxLnnnhvt2rXLTgFqwHHHHRelpY7HoG7baqutYuONN87OAAAAAAAAAABgCXllEgAAAAAAAAAA1ENXXHFF/POf/8zOgDqvqqoqzjzzzOwMAGrJNttsk53AD3j44YezEyhg48ePj4kTJ2ZnFK02bdpkJwAA1DnXX399rLvuutkZUPRatmwZ1113XXYGsIzatGkTO++8c3YGLFaDBg3i5JNPzs4AAAAAAAAAAGAJGe4BAAAAAAAAAIB66oILLshOgDrv0UcfjUcffTQ7A4BastFGG2Un8D2mT58eN998c3YGBe6tt97KTihaK6+8cnYCAECdcsABB8SBBx6YnQEssOOOO8Zxxx2XnQEsgxNOOCGaNWuWnQHV8vOf/zzKy8uzMwAAAAAAAAAAWAKGewAAAAAAAAAAoJ669dZbY/To0dkZUGfNmTMnBg8enJ0BQC1ab731shP4Hq+++mpUVlZmZ1Dgxo8fn51QtAz3AAD8Py1atIgLL7wwysrKslOAhQwdOjTatWuXnQEspT322CM7AaqtvLw8TjjhhOwMAAAAAAAAAACWgOEeAAAAAAAAAACox0aMGBFVVVXZGVAn3XXXXfH6669nZwBQizp06JCdwPd4+umnsxMoAmPGjMlOKFqGewAA/p9rr7022rZtm50BfMeqq64aV155ZXYGsBR22mkng+3UO3vuuWd2AgAAAAAAAAAAS8BwDwAAAAAAAAAA1GMPP/xwPPXUU9kZUOdMmzYtTjvttOwMAGpRu3btolWrVtkZfMf8+fPjrrvuys6gCDz66KNGTZOUl5dnJwAA1Al9+vSJPfbYIzsD+AE///nP48ADD8zOAJbQEUcckZ0AS6xbt26x5ZZbZmcAAAAAAAAAAFBNhnsAAAAAAAAAAKCeGz58eMybNy87A+qU66+/PqZMmZKdAUAt2mabbbIT+B5vv/12vPvuu9kZFIEpU6bEpEmTsjOKUvPmzbMTAADSNWvWLC644IIoLfW2XairSkpK4uyzz46GDRtmpwDVVFZWFr169crOgCVWUlISRx55ZHYGAAAAAAAAAADV5BXAAAAAAAAAAABQzz3//PMxatSo7AyoMz788MMYMmRIdgYAtWzDDTfMTuB7vPTSS9kJFJGPPvooO6EoNW3aNDsBACDdFVdcEe3atcvOABZjrbXWiosuuig7A6imvn37xsorr5ydAUtlp512MuoIAAAAAAAAAFBPeJUHAAAAAAAAAAAUgGHDhsXs2bOzM6BOuOiii6KysjI7A4Batu6662Yn8D0ef/zx7ASKyIQJE7ITilKzZs2yEwAAUvXu3TsOPPDA7Aygmo444ojYeOONszOAathzzz2zE2CptWrVKg4//PDsDAAAAAAAAAAAqsFwDwAAAAAAAAAAFIBx48bFPffck50B6f7+97/HlVdemZ0BQIIOHTpkJ/Ads2bNipEjR2ZnUETee++97ISiVFZWFm3atMnOAABIc9FFF0XDhg2zM4Bqatq0aVx44YXZGcB3XHfddTF58uRvffTu3Ts7C5bJ7rvvnp0AAAAAAAAAAEA1GO4BAAAAAAAAAIACMWTIkPjiiy+yMyDN/Pnz4+yzz87OACBJ+/btsxP4jn/9619RWVmZnUEReeONN7ITila7du2yEwAAUpx++unRrVu37AxgCW2zzTaxzz77ZGcAC6moqIhVV131Wx9lZWXZWbBMevbs6f9jAAAAAAAAAIB6wHAPAAAAAAAAAAAUiIkTJ8Yf//jH7AxI85e//CXuv//+7AwAEnTt2jWaN2+encF3vPbaa9kJFJl//vOf2QlFq2nTptkJAAC1rmXLlnHSSSdlZwBLoaSkJIYNG5adAUCBq6ioiMMOOyw7AwAAAAAAAACAxTDcAwAAAAAAAAAABWTo0KExefLk7AyodV9//XUMHTo0OwOAJJtttll2At/j6aefzk6gyIwbNy7mzp2bnVGUWrVqlZ0AAFDrLr744mjZsmV2BrCUOnfuHAMGDMjOAKDA7b777tkJAAAAAAAAAAAshuEeAAAAAAAAAAAoIDNmzIjrr78+OwNq3b333hujR4/OzgAgyfrrr5+dwHfMnTs37r///uwMitCUKVOyE4pS48aNsxMAAGrVZpttFvvuu292BrCMjj32WD/PALBc9ezZM8rKyrIzAAAAAAAAAABYBMM9AAAAAAAAAABQYM4888z48MMPszOg1syYMSMGDhyYnQFAoo4dO2Yn8B3/+te/Ys6cOdkZFCHDPTmaNm2anQAAUKvOOeecaNSoUXYGsIxWX331GD58eHYGAAWsoqIi+vTpk50BAAAAAAAAAMAiNMgOAAAAAAAAAAAAalZlZWVcfvnlcdFFF2WnQK248cYbjVUBFLk111wzO4HveP3117MTKFK77LJLNG/ePDuj6EycODE7AQCg1uyzzz7Rq1ev7AyghhxxxBFx0UUXGYIFYLnZYYcd4tZbb83OAAAAAAAAAADgBxjuAQAAAAAAAACAAvTb3/42+vbtG+uvv352CixXn3zySQwcODA7A4Bkq6++enYC3/Hqq69mJ1CkJk2alJ0AAECBGzJkSJSUlGRnADVklVVWiTPPPDP69++fnQJAgdpss82yEwAAAAAAAAAAWITS7AAAAAAAAAAAAGD5+M1vfpOdAMvdpZdeGnPmzMnOACBRs2bNYtVVV83O4Dsef/zx7AQAAIAa169fv+jatWt2BlDD+vTpEy1btszOAKBAdezYMbp06ZKdAQAAAAAAAADADzDcAwAAAAAAAAAABerGG2+MMWPGZGfAcjN+/Pi46KKLsjMASLbllltGSUlJdgYLmTRpUrz99tvZGQAAADXupJNOyk4AloOKioo488wzszMAKFAlJSWx3377ZWcAAAAAAAAAAPADDPcAAAAAAAAAAEABO+ecc2L+/PnZGbBcnHPOOdkJANQBXbt2zU7gO4z2AAAAhWjAgAGxzjrrZGcAy0mfPn2iRYsW2RkAFKiePXtmJwAAAAAAAAAA8AMM9wAAAAAAAAAAQAF78MEH45lnnsnOgBr33HPPxR133JGdAUAd0KFDh+wEvuONN97ITgAAAKhRpaWlcfTRR2dnAMtRRUVFDB48ODsDgAK10UYbZScAAAAAAAAAAPADDPcAAAAAAAAAAECBO/PMM6OysjI7A2rMN998E0OHDs3OAKCOWGONNbIT+I5XXnklOwEAAKBGnXrqqbHWWmtlZwDLWZ8+faJx48bZGQAUoJVWWil23HHH7AwAAAAAAAAAAL6H4R4AAAAAAAAAAChwzz77bPz5z3/OzoAa89BDD8Wzzz6bnQFAHdG2bdvsBBYyf/78ePLJJ7MzAAAAakxpaWkcffTR2RnUgsrKypg+fXr85z//iQ8++OBbH5MmTYovvvgiKisrszNZjlq3bh0DBgzIzgCgQG2zzTbZCQAAAAAAAAAAfI8G2QEAAAAAAAAAAMDyd8YZZ8T2228fK6ywQnYKLJNZs2Y5NA+Ab2ndunV2AguZPHlyfPLJJ9kZAAAANeaEE06ItdZaKzuDGlJZWRkfffRRvPfee/H222/HhAkT4u2334433ngj3n///Wpdo0OHDtG1a9fo1KlTrLXWWrHOOutEhw4don379tGoUaPl/CdgeTv44INj+PDh2RkAFKAePXpkJwAAAAAAAAAA8D0M9wAAAAAAAAAAQBF4/fXX4957740DDjggOwWWyS233BLvvvtudgYAdUjLli2zE1jIhAkTshMAAABq1JFHHpmdwDKYP39+vPvuu/Hyyy/Hc889F/fff39MmTJlma75/vvvf+/IT3l5eey+++7Rs2fP2GKLLeJHP/pRlJWVLdO9qH0dOnSIvn37xg033JCdAkCB2WCDDbITAAAAAAAAAAD4HqXZAQAAAAAAAAAAQO0YNGhQzJw5MzsDltrkyZPj9NNPz84AoA5Zf/31Y4UVVsjOYCHvvfdedgIAAECNOeyww2L99dfPzmApjB8/Pi6++OLYZJNNYr311ouDDz44rrvuumUe7VmUGTNmxC233BJHH310bLjhhtGxY8cYPnx4vPLKK1FZWbnc7kvNO+KII7ITAChAq666amy11VbZGQAAAAAAAAAAfIfhHgAAAAAAAAAAKBIffvhh3HLLLdkZsNSuuuqqmDFjRnYGAHXIhhtumJ3Ad/zrX//KTgAAAKgxv/rVr7ITWAJffvlljBw5Mrbeeuvo0qVLnHrqqfHaa6+l9Xz44YcxfPjw2GyzzaJbt25x/fXXx+TJk9N6qL5NN900tt566+wMAApQr169shMAAAAAAAAAAPgOwz0AAAAAAAAAAFBEBg8eHFOnTs3OgCX2zjvvxDnnnJOdAUAd07Fjx+wEvmPMmDHZCQAAADVixx13jE022SQ7g2qYMmVKXHrppdGhQ4fYf//949lnn81O+h/jx4+Po48+OlZfffUYNGhQTJgwITuJRSgpKYn+/ftnZwBQgLp165adAAAAAAAAAADAdxjuAQAAAAAAAACAIjJ9+vS44YYbsjNgiV1wwQVRVVWVnQFAHbP66qtnJ7CQefPmxV//+tfsDAAAgBpx7LHHRklJSXYGizB9+vS48MILY80114yTTz45pk6dmp20WJWVlXH++edHp06dYvDgwTFp0qTsJH7ADjvsEBUVFdkZABSY9dZbLzsBAAAAAAAAAIDvMNwDAAAAAAAAAABFZsiQITFx4sTsDKi20aNHxx/+8IfsDADqoNatW2cnsJBJkybFvHnzsjMAAACW2brrrhu9e/fOzuAHfPPNN3H77bdHly5d4vTTT485c+ZkJy2xqqqqOO+882L99deP3/3udzF37tzsJL6jefPmceqpp2ZnAFBg1l577SgrK8vOAAAAAAAAAABgIYZ7AAAAAAAAAACgyFRWVsZVV12VnQHVUllZGWeeeWZ2BgB1lOGeuuWTTz7JTgAAAKgRv/71r2OFFVbIzuB7jB8/Pn7+85/HQQcdVBA/h86YMSOOOeaY2G677eK1117LzuE79tprr+wEAApM48aNY+edd87OAAAAAAAAAABgIYZ7AAAAAAAAAACgCF1wwQXxzjvvZGfAYj366KPx2GOPZWcAUEetssoq2Qks5MMPP8xOAAAAWGZlZWWx++67Z2fwHd98801cddVVseGGGxbk74yff/75+PGPfxxXXHFFfPPNN9k5LLDeeuvFTjvtlJ0BQIHZfPPNsxMAAAAAAAAAAFiI4R4AAAAAAAAAAChSF110UXYCLNJXX30VgwYNys4AoA4z3FO3TJgwITsBAABgmR1//PHRqlWr7AwW8sknn8R+++0Xxx13XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aEr(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEr(8,
					"googleplay", 3,
					"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"
					), aEr(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEr(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEr(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEr(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEr(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEr(14, "bestPlayer", 5,
					"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"
					), aEr(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEr(16, "apple", 3,
					"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"
					), aEr(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEr(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEr(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEr(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEr(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEr(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dx) {
		return canvas[dx]
	}, this.aEU = function(name) {
		for (var aA = zE.length - 1; 0 <= aA; aA--)
			if (zE[aA] === name) return canvas[aA];
		return aEl
	}, this.sJ = function() {
		return aEk <= 0
	}, this.aEn = function() {
		aEk = 0, aEo()
	}
}

function cO() {
	var aEz, aF0, aF1, aF2, aF3, aF4, aF5, aF6, aF7, aF8, aEx = [
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
		aEy = [
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

	function aFE(j6, mP) {
		for (var aA = j6; aA < mP; aA++) aEz[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aF0[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aF1[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100))
	}

	function aFD(j6, mP) {
		for (var colorsData = aC.data.colorsData, aA = j6; aA < mP; aA++) {
			var f2 = colorsData[aA];
			aEz[aA] = 4 * (f2 >> 12), aF0[aA] = 4 * (f2 >> 6 & 63), aF1[aA] = 4 * (63 & f2)
		}
	}

	function aFP(eE, aFR) {
		aAN[eE] = 0, aAN[eE + 1] = 0, aAN[eE + 2] = aFR, aAN[eE + 3] = 0, aFS(eE)
	}

	function aFS(eE) {
		var eh;
		bZ.mX || (eh = ab.x4(eE), eE = ab.x5(eE), bZ.mX = eh >= bY.aAM[0] && eh <= bY.aAM[2] && eE >= bY.aAM[1] && eE <= bY.aAM[3])
	}
	this.ec = new Int32Array(4), this.dV = function() {
		var ec = this.ec;
		ec[0] = -4 * bQ.el, ec[1] = 4, ec[2] = -ec[0], ec[3] = -ec[1]
	}, this.dU = function() {
		if (aEz = new Uint8Array(aC.eX), aF0 = new Uint8Array(aC.eX), aF1 = new Uint8Array(aC.eX), aF2 = new Uint8Array(aC.eX), aF3 = new Uint8Array(aC.eX), aF4 = new Uint8Array(aC.eX), aF5 = new Uint8Array(aC.eX), aF6 = new Uint8Array(aC.eX),
			aF7 = new Uint8Array(aC.eX), aF8 = new Uint8Array(aC.eX), this.a6x = new Uint8Array(aC.eX), aC.hP)
			for (var a94 = be.a94, aA = aC.eX - 1; 0 <= aA; aA--) {
				var ev = a94[aA],
					kX = bJ.dj((aEy[ev][3] + 1) * aw.random(), aw.value(100));
				aEz[aA] = aEx[ev][0] + kX * aEy[ev][0], aF0[aA] = aEx[ev][1] + kX * aEy[ev][1], aF1[aA] = aEx[ev][2] + kX * aEy[ev][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aFD(0, aC.jp), aFE(aC.jp, aC.eX)) : aFE(0, aC.eX) : aFD(0, aC.eX);
		! function() {
			var aA, ed;
			for (aA = aC.eX - 1; 0 <= aA; aA--) ed = bJ.dj(aEz[aA] + aF0[aA] + aF1[aA], 3), aEz[aA] += aFK(ed - aEz[aA], 2), aF0[aA] += aFK(ed - aF0[aA], 2), aF1[aA] += aFK(ed - aF1[aA], 2), aEz[aA] -= aEz[aA] % 4, aF0[aA] -= aF0[aA] % 4, aF1[
				aA] -= aF1[aA] % 4
		}(),
		function() {
			for (var aA = aC.eX - 1; 0 <= aA; aA--) aEz[aA] += bJ.dj(aA, 128), aF0[aA] += bJ.dj(aA % 128, 32), aF1[aA] += bJ.dj(aA % 32, 8), aF2[aA] = aA % 8
		}(), this.aFH(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aF3[aA] = aEz[aA] < 32 ? aEz[aA] + 32 : aEz[aA] - 32, aF4[aA] = aF0[aA] < 32 ? aF0[aA] + 32 : aF0[aA] - 32, aF5[aA] = aF1[aA] < 32 ? aF1[aA] + 32 : aF1[aA] - 32
			}(),
			function() {
				for (var aA = aC.eX - 1; 0 <= aA; aA--) aF6[aA] = 235 < aEz[aA] ? aEz[aA] - 20 : aEz[aA] + 20, aF7[aA] = 235 < aF0[aA] ? aF0[aA] - 20 : aF0[aA] + 20, aF8[aA] = 235 < aF1[aA] ? aF1[aA] - 20 : aF1[aA] + 20
			}()
	}, this.a5w = function(player) {
		var g = bM.f9;
		return g[0] = aEz[player], g[1] = aF0[player], g[2] = aF1[player], g
	}, this.aFH = function() {
		for (var aA = aC.eX - 1; 0 <= aA; aA--) this.a6x[aA] = aEz[aA] + aF0[aA] + aF1[aA] < 280 ? 0 : 1
	}, this.x4 = function(eE) {
		return bJ.dj(eE, 4) % bQ.el
	}, this.x5 = function(eE) {
		return bJ.dj(eE, 4 * bQ.el)
	}, this.we = function(eh, ej) {
		return Math.floor(4 * (ej * bQ.el + eh))
	}, this.wu = function(eE) {
		var ec = this.ec;
		return this.aFL(eE + ec[0]) || this.aFL(eE + ec[1]) || this.aFL(eE + ec[2]) || this.aFL(eE + ec[3])
	}, this.ez = function(eE) {
		var ec = this.ec;
		return this.ef(eE + ec[0]) || this.ef(eE + ec[1]) || this.ef(eE + ec[2]) || this.ef(eE + ec[3])
	}, this.ws = function(eE, player) {
		var ec = this.ec;
		return this.aFM(eE + ec[0], player) || this.aFM(eE + ec[1], player) || this.aFM(eE + ec[2], player) || this.aFM(eE + ec[3], player)
	}, this.g9 = function(eE) {
		return 208 <= aAN[eE + 3]
	}, this.wz = function(player, eE) {
		return this.g9(eE) && this.aFN(player, eE)
	}, this.aFN = function(player, eE) {
		return player === this.eS(eE)
	}, this.aFO = function(eE) {
		return 208 <= aAN[eE + 3] && aAN[eE + 3] < 224
	}, this.j2 = function(eE) {
		return 224 <= aAN[eE + 3] && aAN[eE + 3] < 248
	}, this.wt = function(eE) {
		for (var ec = this.ec, aA = 3; 0 <= aA; aA--)
			if (this.h2(eE + ec[aA])) return !0;
		return !1
	}, this.eV = function(eE) {
		return this.g9(eE) || this.eR(eE)
	}, this.h2 = function(eE) {
		return 0 === aAN[eE + 3] && 2 === aAN[eE + 2]
	}, this.eR = function(eE) {
		return 0 === aAN[eE + 3] && 1 === aAN[eE + 2]
	}, this.vj = function(eE) {
		return 0 === aAN[eE + 3] && 3 === aAN[eE + 2]
	}, this.ef = function(eE) {
		return 0 === aAN[eE + 3] && 5 <= aAN[eE + 2]
	}, this.aFL = function(eE) {
		return 0 === aAN[eE + 3] && 3 <= aAN[eE + 2]
	}, this.eI = function(eE) {
		return aAN[eE + 2] - 5
	}, this.aFM = function(eE, player) {
		return this.eR(eE) || this.g9(eE) && player !== this.eS(eE)
	}, this.eS = function(eE) {
		return aAN[eE] % 4 * 128 + aAN[eE + 1] % 4 * 32 + aAN[eE + 2] % 4 * 8 + aAN[eE + 3] % 8
	}, this.x0 = function(eE) {
		aFP(eE, 1)
	}, this.aFQ = function(eE) {
		aFP(eE, 2)
	}, this.wf = function(eE, player) {
		aAN[eE] = aEz[player], aAN[eE + 1] = aF0[player], aAN[eE + 2] = aF1[player], aAN[eE + 3] = 208 + aF2[player], aFS(eE)
	}, this.g4 = function(eE, player) {
		aAN[eE] = aF3[player], aAN[eE + 1] = aF4[player], aAN[eE + 2] = aF5[player], aAN[eE + 3] = 224 + aF2[player], aFS(eE)
	}, this.j3 = function(eE, player) {
		aAN[eE] = aF6[player], aAN[eE + 1] = aF7[player], aAN[eE + 2] = aF8[player], aAN[eE + 3] = 248 + aF2[player], aFS(eE)
	}
}

function cm() {
	var dx = 0,
		aFT = new Uint16Array(32);

	function remove(a42) {
		var aA;
		for (dx -= 2, aA = a42; aA < dx; aA += 2) aFT[aA] = aFT[aA + 2], aFT[aA + 1] = aFT[aA + 3]
	}
	this.dU = function() {
		dx = 0
	}, this.ij = function() {
		var aA, j0, i9;
		if (0 !== dx)
			if (0 === af.lf[aC.eK] || ac.aFU(aC.eK) === ac.ff(aC.eK)) dx = 0;
			else
				for (aA = dx - 2; 0 <= aA; aA -= 2)(j0 = aFT[aA]) < aC.eX && 0 === af.lf[j0] ? remove(aA) : (i9 = aFT[aA + 1], (j0 >= aC.eX && aFV(aC.eK) || j0 < aC.eX && aFW(aC.eK, j0)) && (b6.gw.h7(i9, j0), remove(aA)))
	}, this.h9 = function(j0, i9) {
		! function(j0, i9) {
			var aA;
			for (aA = 0; aA < dx; aA += 2)
				if (aFT[aA] === j0) return aFT[aA + 1] = Math.min(aFT[aA + 1] + i9, 1023), 1;
			return
		}(j0, i9) && 32 !== dx && (aFT[dx] = j0, aFT[dx + 1] = i9, dx += 2)
	}
}

function cP() {
	function aFd(player) {
		var di;
		b8.fv.a2M(player) && (di = af.gb[player] - af.a2Q[player] + ac.aFf(player), bb.fz(player, Math.abs(di), di < 0 ? 18 : 12)), af.gb[player] = 0, af.a2Q[player] = 0
	}

	function aFm() {
		aW.show(!1, !1, !1, !0), aV.a9X(), bP.yd.zO()
	}

	function aFa(player, aFl) {
		for (var aA = aFl.length - 1; 0 <= aA; aA--) ac.aFo(aFl[aA], player)
	}

	function aFc(player) {
		for (var iO = af.iO, iP = af.iP, iQ = af.iQ, iR = af.iR, m7 = iO[player], m8 = iQ[player], el = bQ.el, gN = af.gN, eh = iP[player]; m7 <= eh; eh--)
			for (var ej = iR[player]; m8 <= ej; ej--) {
				var g7 = 4 * (ej * el + eh);
				ab.wz(player, g7) && (ab.x0(g7), gN[player]--)
			}
		iP[player] = iR[player] = 0, iO[player] = iQ[player] = Math.max(el, bQ.em)
	}
	this.dd = function(g7) {
		var player, di = af.gN[g7];
		bL.x.oo[g7] ? di && (aFa(player = g7, ac.aFb(player)), aFc(player), aE.fx(player), ac.clear(player), aFd(player), function(player) {
			af.wa[player] = 0, af.g1[player] = [], af.gF[player] = [], af.gG[player] = [], af.f0[player] = []
		}(player)) : !di && af.g1[g7].length || this.aFZ(g7)
	}, this.aFZ = function(player) {
		! function(player) {
			b8.fv.jD(player) || (af.zS[player] = bg.zl.aFk(), aC.yu++);
			var aFl = ac.aFb(player);
			0 === aFl.length ? b8.fv.a2J(player) && aFm() : (aFa(player, aFl), function(player, aFl) {
				var aFq = aFl[function(aFl) {
					var aA, dx = 0;
					for (aA = aFl.length - 1; 1 <= aA; aA--) af.gN[aFl[aA]] > af.gN[aFl[dx]] && (dx = aA);
					return dx
				}(aFl)];
				9 === aC.k6 && (1 === be.eY[player] ? aw.jh(8) && ax.aFr(aFq) : aD.hE[player] && (aM.a4G(765, 0), aM.zG(280, L(134, [af.zT[aFq], af.zT[player]]), 765, aFq, b9.mY, b9.no, -1, !0)));
				if (b8.fv.a2J(player)) aFm(), aM.z4(aFq, 1);
				else {
					for (var aA = aFl.length - 1; 0 <= aA; aA--)
						if (b8.fv.a2M(aFl[aA]) && (bb.lb[4 - b8.fv.jD(player)]++, b8.fv.a2J(aFl[aA]))) return aM.z4(player, 0);
					b8.fv.jD(player) || aM.a5E(0, player, aFq)
				}
			}(player, aFl))
		}(player), aFc(player), aFd(player),
			function(player) {
				af.lf[player] = 0, af.g1[player] = null, af.gF[player] = null, af.gG[player] = null, af.f0[player] = null
			}(player), aE.fx(player), ac.clear(player), bL.aFi.aFj(player)
	}
}

function cr() {
	var input;

	function aFs(e) {
		(e = e.target.files) && 0 < e.length && b4.aFv(e[0])
	}

	function aFz(e) {
		var ev = new Image;
		ev.onload = aG0, ev.src = e.target.result
	}

	function aG0(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aG2 || j > bQ.aG2 || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aG2 + ".", z.uL ? z.uL.showToast(e) : alert(e)) : 20 === s.rq && s.aDO().aG0(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFs
	}, this.tD = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFt = function() {
		input.click()
	}, this.aFv = function(aFw) {
		var g = aFw.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFz, g.readAsDataURL(aFw))
	}
}

function cp() {
	this.aG4 = null, this.dU = function() {
		10 !== aC.k6 ? this.aG4 = null : this.aG4 = new Uint32Array(aC.eX)
	}, this.ij = function() {
		10 === aC.k6 && this.ql()
	}, this.ql = function() {
		for (var g7, target, a9i, aG4 = this.aG4, yg = ak.jr, a2R = af.gb, aA = ak.jq - 1; 0 <= aA; aA--)(g7 = yg[aA]) >= aC.jp || (target = Math.max(bJ.dj(a2R[g7], 4), 2048), a9i = Math.max(ad.a9j(g7), 100), aG4[g7] += bJ.dj(a9i * target, 1e4),
			aG4[g7] > target && (aG4[g7] = target))
	}, this.a2X = function(player, hE) {
		return hE > this.aG4[player] ? (hE = this.aG4[player], this.aG4[player] = 0) : this.aG4[player] -= hE, hE
	}
}

function dQ() {
	function aG6(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aGE, g.readAsText(e))
	}

	function aGE(e) {
		var aGI;
		aC.ys || (e = JSON.parse(e.target.result), aGI = aC.data = new a3O, aGJ(e, aGI, "mapType", 0, 2), aGJ(e, aGI, "mapProceduralIndex", 0, 255), aGJ(e, aGI, "mapRealisticIndex", 0, 255), aGJ(e, aGI, "mapSeed", 0, 16383), function(aGH, aGI, g8,
				max) {
				aGH = aGH[g8];
				aGI[g8] = aGP(aGH) ? aGH.slice(0, max) : aGI[g8]
			}(e, aGI, "mapName", 20), function(aGH, aGI, g8) {
				var aG1;
				2 === aGI.mapType && (!aGP(aGH = aGH[g8]) || aGH.length <= 20 ? aGI.mapType = 0 : ((aG1 = new Image).onload = function() {
					b7.aGQ.aGR(aG1, 1), aG1.onload = null, aG1 = null
				}, aG1.src = aGH))
			}(e, aGI, "canvas"), aGJ(e, aGI, "passableWater", 0, 1), aGJ(e, aGI, "passableMountains", 0, 1), aGJ(e, aGI, "playerCount", 1, 512), aGJ(e, aGI, "humanCount", 1, 1), aGJ(e, aGI, "selectedPlayer", 0, 0), aGJ(e, aGI, "gameMode", 0, 1),
			aGJ(e, aGI, "playerMode", 0, 0), aGJ(e, aGI, "battleRoyaleMode", 0, 0), aGJ(e, aGI, "numberTeams", 0, 8), aGJ(e, aGI, "isZombieMode", 0, 0), aGJ(e, aGI, "isContest", 0, 0), aGJ(e, aGI, "isReplay", 0, 0), aGM(e, aGI, "elo", 16, 2,
				16383), aGJ(e, aGI, "colorsType", 0, 1), aGJ(e, aGI, "colorsPersonalized", 0, 1), aGM(e, aGI, "colorsData", 32, 512, 262143), aGJ(e, aGI, "selectableColor", 0, 1), aGM(e, aGI, "teamPlayerCount", 16, 9, 512), aGJ(e, aGI,
				"neutralBots", 0, 1), aGJ(e, aGI, "botDifficultyType", 0, 3), aGJ(e, aGI, "botDifficultyValue", 0, 15), aGM(e, aGI, "botDifficultyTeam", 8, 9, 15), aGM(e, aGI, "botDifficultyData", 8, 512, 15), aGJ(e, aGI, "spawningType", 0, 2),
			aGJ(e, aGI, "spawningSeed", 0, 16383), aGM(e, aGI, "spawningData", 16, 1024, 4095), aGJ(e, aGI, "selectableSpawn", 0, 1), aGJ(e, aGI, "playerNamesType", 0, 2),
			function(aGH, aGI, g8, size, max) {
				var a1Y = aGH[g8];
				if (Array.isArray(a1Y)) {
					for (var a1Z = new Array(size), ea = Math.min(a1Y.length, size), aA = 0; aA < ea; aA++) a1Z[aA] = aGP(a1Y[aA]) ? a1Y[aA].slice(0, max) : "";
					aGI[g8] = a1Z
				}
			}(e, aGI, "playerNamesData", 512, 20), aGJ(e, aGI, "selectableName", 0, 1), aGJ(e, aGI, "aIncomeType", 0, 2), aGJ(e, aGI, "aIncomeValue", 0, 255), aGM(e, aGI, "aIncomeData", 8, 512, 255), aGJ(e, aGI, "tIncomeType", 0, 2), aGJ(e, aGI,
				"tIncomeValue", 0, 255), aGM(e, aGI, "tIncomeData", 8, 512, 255), aGJ(e, aGI, "iIncomeType", 0, 2), aGJ(e, aGI, "iIncomeValue", 0, 255), aGM(e, aGI, "iIncomeData", 8, 512, 255), aGJ(e, aGI, "sResourcesType", 0, 2), aGJ(e, aGI,
				"sResourcesValue", 0, 2047), aGM(e, aGI, "sResourcesData", 16, 512, 2047), s.w(), s.x.aGG[0] = 0, s.t(19))
	}

	function aGJ(aGH, aGI, g8, min, max) {
		aGH = aGH[g8];
		aGI[g8] = "number" == typeof aGH && min <= aGH && aGH <= max ? Math.floor(aGH) : aGI[g8]
	}

	function aGP(pI) {
		return "string" == typeof pI
	}

	function aGM(aGH, aGI, g8, aGS, size, max) {
		var a1Y = aGH[g8];
		if (Array.isArray(a1Y)) {
			for (var a1Z = new(8 === aGS ? Uint8Array : 16 === aGS ? Uint16Array : Uint32Array)(size), ea = Math.min(a1Y.length, size), aA = 0; aA < ea; aA++) a1Z[aA] = bJ.p9(a1Y[aA], 0, max);
			aGI[g8] = a1Z
		}
	}
	this.aG5 = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aG6, input.click()
	}, this.aG7 = function() {
		for (var aGA, aAx, a6F = aC.data, keys = Object.keys(a6F), aG8 = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a6F[key] instanceof Uint8Array || a6F[key] instanceof Uint16Array || a6F[key] instanceof Uint32Array ? aG8[key] = Array.from(a6F[key]) : aG8[key] = a6F[key]
		}
		aG8.canvas = 2 === aG8.mapType && aG8.canvas ? aG8.canvas.toDataURL() : null, aGA = aG8, aGA = JSON.stringify(aGA, null, 2), aGA = new Blob([aGA], {
			type: "application/json"
		}), (aAx = document.createElement("a")).href = URL.createObjectURL(aGA), aAx.download = "tt_scenario.json", aAx.click()
	}
}

function cS() {
	var aGT, aGU, size, j0, hE, id, aGV;

	function aGW(player) {
		return player < aC.jp ? aGT * player : aGT * aC.jp + aGU * (player - aC.jp)
	}
	this.dU = function() {
		aGT = aC.jp < 16 ? 12 : 8, aGU = 4;
		var ea = aGW(aC.eX);
		size = new Uint8Array(aC.eX), j0 = new Uint16Array(ea), hE = new Uint32Array(ea), id = new Uint16Array(ea), aGV = new Uint8Array(ea)
	}, this.p8 = function(a6S, aGX) {
		var aGY = this.gc(a6S, aGX),
			aGX = (this.ga(a6S, aGX, 0), b8.fv.fy(a6S, aGY));
		bb.fz(a6S, aGY - aGX, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFo = function(player, aGX) {
		var aGb, aGX = function(player, aGX) {
			var aA, kX = aGW(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kX + aA] && j0[kX + aA] === aGX) return aA;
			return size[player]
		}(player, aGX);
		aGX !== size[player] && (aGb = hE[aGW(player) + aGX], this.g0(player, aGX), this.ix(player, aGb, aC.eX))
	}, this.jB = function(player, aGX) {
		for (var kX = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGX) return !0;
		return !1
	}, this.jT = function(player) {
		return player < aC.jp ? size[player] < aGT : size[player] < aGU
	}, this.ff = function(player) {
		return size[player]
	}, this.fl = function(player, aA) {
		return j0[aGW(player) + aA]
	}, this.fg = function(player, aA) {
		return id[aGW(player) + aA]
	}, this.aGc = function(player, aGd) {
		for (var kX = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kX + aA] === aGd) return aA;
		return -1
	}, this.fm = function(player, aA) {
		return hE[aGW(player) + aA]
	}, this.gc = function(player, aGX) {
		for (var kX = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGX) return hE[kX + aA];
		return 0
	}, this.aFf = function(player) {
		for (var kX = aGW(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) f2 += hE[kX + aA];
		return f2
	}, this.aGe = function(player) {
		for (var kX = aGW(player), f2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kX + aA] && (f2 += hE[kX + aA]);
		return f2
	}, this.aFU = function(player) {
		for (var kX = aGW(player), g2 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kX + aA] && g2++;
		return g2
	}, this.ga = function(player, aGX, aGb) {
		for (var kX = aGW(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kX + aA] && j0[kX + aA] === aGX && (hE[kX + aA] = aGb)
	}, this.gL = function(player, aA, aGb) {
		hE[aGW(player) + aA] = Math.max(aGb, 0)
	}, this.gM = function(player, aA) {
		aGV[aGW(player) + aA] = 0
	}, this.fn = function(player, aA) {
		return aGV[aGW(player) + aA]
	}, this.ix = function(player, aGb, aGX) {
		b8.fv.a2M(aGX) && bb.lb[6 - b8.fv.jD(player)]++;
		for (var kX = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kX + aA] && j0[kX + aA] === aGX) return hE[kX + aA] += aGb, void(hE[kX + aA] = hE[kX + aA] > aC.a2T ? aC.a2T : hE[kX + aA]);
		j0[kX + size[player]] = aGX, hE[kX + size[player]] = aGb, id[kX + size[player]] = 0, aGV[kX + size[player]] = 1, size[player]++, player < aC.jp && (aGX === aC.eK ? aM.z4(player, 5) : player === aC.eK && ae.a5G(aGX))
	}, this.aGf = function(player, aGb, aGd) {
		var kX = aGW(player);
		j0[kX + size[player]] = 0, hE[kX + size[player]] = aGb, id[kX + size[player]] = aGd, aGV[kX + size[player]] = 0, size[player]++
	}, this.g0 = function(player, dx) {
		var et, kX;
		if (0 !== size[player])
			for (kX = aGW(player), size[player]--, et = dx; et < size[player]; et++) j0[kX + et] = j0[kX + et + 1], hE[kX + et] = hE[kX + et + 1], id[kX + et] = id[kX + et + 1], aGV[kX + et] = aGV[kX + et + 1]
	}, this.aFb = function(player) {
		for (var et, kX, aFl = [], aA = ak.jq - 1; 0 <= aA; aA--)
			for (kX = aGW(ak.jr[aA]), et = size[ak.jr[aA]] - 1; 0 <= et; et--)
				if (0 === id[kX + et] && j0[kX + et] === player) {
					aFl.push(ak.jr[aA]);
					break
				} return aFl
	}
}

function cT() {
	var aGg;

	function aGi(player) {
		var dw, jU;
		return b8.fv.jD(player) && player < aC.jp ? 0 : (dw = aGg[bJ.dj((aC.eX - 1) * af.gN[player], aC.jZ)], bd.jm() < 1920 && (dw = Math.max(bJ.dj(100 * (13440 - 6 * bd.jm()), 1920), dw)), jU = ad.jV(player), af.gb[player] > jU && (dw -= bJ.dj(2 *
			dw * (af.gb[player] - jU), jU)), Math.min(Math.max(dw, 0), 700))
	}

	function aGu(mJ) {
		for (var gN = af.gN, jr = ak.jr, aA = ak.jq - 1; 0 <= aA; aA--) {
			var g7 = jr[aA];
			b8.fv.fy(g7, bJ.dj(mJ * gN[g7], 32))
		}
	}

	function aGr() {
		var vb = aC.eK;
		bM.f6[0] = af.gb[vb] - af.a2Q[vb]
	}

	function aGt(dx) {
		var vb = aC.eK;
		bb.lb[dx] += af.gb[vb] - af.a2Q[vb] - bM.f6[0]
	}
	this.db = function() {
		for (var ea = aC.eX, aA = (aGg = new Uint16Array(ea), 0); aA < ea; aA++) aGg[aA] = 100 + aGh(bJ.dj(25600 * aA, ea - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9j = aGi : 1 === aC.data.iIncomeType ? this.a9j = function(player) {
			return bJ.dj(aC.data.iIncomeValue * aGi(player), 64)
		} : this.a9j = function(player) {
			return bJ.dj(aC.data.iIncomeData[player] * aGi(player), 64)
		}
	}, this.ij = function() {
		if (bd.jm() % 10 == 9 && (function() {
				aGr();
				for (var jr = ak.jr, gb = af.gb, aA = ak.jq - 1; 0 <= aA; aA--) {
					var g7 = jr[aA],
						aGs = bJ.dj(ad.a9j(g7) * gb[g7], 1e4);
					b8.fv.fy(g7, Math.max(aGs, 1))
				}
				aGt(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGr(), 1 === aC.data.aIncomeType)
						for (var gN = af.gN, jr = ak.jr, mJ = aC.data.aIncomeValue, aA = ak.jq - 1; 0 <= aA; aA--) {
							var g7 = jr[aA];
							b8.fv.fy(g7, bJ.dj(mJ * gN[g7], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gN = af.gN, jr = ak.jr, mJ = aC.data.aIncomeData, aA = ak.jq - 1; 0 <= aA; aA--) {
								var g7 = jr[aA];
								b8.fv.fy(g7, bJ.dj(mJ[g7] * gN[g7], 128))
							}
						}();
					aGt(18)
				}
			}(), bd.jm() % 100 == 99)) {
			if (aGr(), 0 === aC.data.tIncomeType) aGu(32);
			else if (1 === aC.data.tIncomeType) aGu(aC.data.tIncomeValue);
			else
				for (var gN = af.gN, jr = ak.jr, mJ = aC.data.tIncomeData, aA = ak.jq - 1; 0 <= aA; aA--) {
					var g7 = jr[aA];
					b8.fv.fy(g7, bJ.dj(mJ[g7] * gN[g7], 32))
				}
			aGt(8)
		}
	}, this.jV = function(player) {
		return Math.min(100 * af.gN[player], aC.a3K)
	}, this.o3 = function(player, o4) {
		b8.fv.fy(o4, bM.f7[0]), bb.oP(player, o4), ae.aGk(player, bM.f7[0] + bM.f7[1]), ae.oQ(o4, bM.f7[0]), b8.fv.oy(player)
	}, this.aGl = function() {
		for (var ea = ak.jq, yg = ak.jr, kX = 0, a2R = af.gb, aA = 0; aA < ea; aA++) kX += a2R[yg[aA]];
		return kX
	}, this.aGm = function(aGn) {
		for (var g7, ea = ak.jq, yg = ak.jr, kX = 0, a2R = af.gb, eY = be.eY, aA = 0; aA < ea; aA++) eY[g7 = yg[aA]] === aGn && (kX += a2R[g7]);
		return kX
	}
}

function cV() {
	var aGy, aGz, aH0, aH1, aH2, aH3, aH4, aH5, aH6, aH7, aH8, aH9, aHA, aHB, aHC, aHD, aHE, aHF, aHH, aHI, aAq, aHJ, aHK, aHR, aHS, aHG = null,
		aHM = 0,
		aHN = !1,
		aHO = new Float32Array(4),
		aHP = 0,
		aHQ = !0,
		a8t = 400,
		aHT = 0;

	function pf() {
		aH6 = Math.floor(+h.pd), aH7 = Math.floor(.5 * aH6)
	}

	function aHU() {
		var aA, aHZ;
		for (tk.font = b8.pb.rQ(1, 100 * aH8), aHZ = 80 / Math.floor(tk.measureText(b8.zX.yA(aC.a2T)).width), tk.font = b8.pb.rQ(1, 100), aA = aC.eX - 1; 0 <= aA; aA--) aH5[aA] = 100 / Math.floor(tk.measureText(af.zT[aA]).width), aH4[aA] = Math.min(
			aHZ, aH5[aA])
	}

	function aHa(aA) {
		return !aHT || (aA = af.gb[aA]) < 1e6 ? 1 : aA < 1e7 ? aHO[0] : aHO[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHY(hX) {
		aHF = !1, aHE = 1, aHC = aHD = 0, aHQ && (b8.pb.textAlign(hX, 1), b8.pb.textBaseline(hX, 1));
		for (var aHg, aHh, aA, aHi, fontSize, aHj, m7 = iA / iB, m8 = iC / iB, mK = (h.i + iA) / iB, mL = (h.j + iC) / iB, aHk = 0 !== af.lf[aC.eK] && !b8.fv.jD(aC.eK), et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et], (fontSize = Math.floor(aHB * iB *
			aHa(aA) * aH4[aA] * aH2[aA])) < aHA || aH6 <= fontSize || aH0[aA] + aH2[aA] > m7 && aH0[aA] < mK && aH1[aA] + aH3[aA] > m8 && aH1[aA] < mL && (aHg = Math.floor(h.i * (aH0[aA] + aH2[aA] / 2 - m7) / (mK - m7)), aHh = Math.floor(h.j * (
			aH1[aA] + aH3[aA] / 2 - m8) / (mL - m8) - .1 * fontSize), aHi = ab.a6x[aA], hX.font = b8.pb.rQ(1 === af.a2I[aA] ? 4 : 1, fontSize), hX.fillStyle = aHl(fontSize, aHi % 2), aHT ? aHm(hX, aA, fontSize, aHg, aHh, aHi) : aHn(aA,
			fontSize, aHg, aHh, hX), aHF = !0, 0 < aAq[aA] ? function(aHg, aHh, fontSize, aA, hX) {
			0 === ja[aA] ? ai.qr.y1(aHI[aA]) ? (function(aHg, aHh, fontSize, player, oE, hX) {
				for (var w9 = aHh, hW = (hX.globalAlpha = aHv(fontSize), aHa(player) * (aHT ? aHP : aH5[player])), w8 = aHg - .5 * fontSize / hW - .9 * fontSize, eu = 0; eu < 2; eu++) hX.fillText(ai.qr.xv(oE), w8, w9), w8 = aHg + .5 *
					fontSize / hW + .9 * fontSize;
				hX.globalAlpha = 1
			}(aHg, aHh, fontSize, aA, aHI[aA], hX), aHp(aHg, aHh, fontSize, 0, 0, hX)) : ai.qr.y3(aHI[aA]) ? (aHy(aHg, aHh, fontSize, aHI[aA], 0, hX), aHp(aHg, aHh, fontSize, 0, 1, hX)) : (aHy(aHg, aHh, fontSize, aHI[aA], 1, hX), aHp(aHg,
				aHh, fontSize, 1, 0, hX)) : aHy(aHg, aHh, fontSize, aHI[aA], 0, hX)
		}(aHg, aHh, fontSize, aA, hX) : 0 === ja[aA] && aHp(aHg, aHh, fontSize, 0, 0, hX), aHk && (0 < aAq[aA + aC.eX] || 0 < aAq[aA + 2 * aC.eX] || 0 < aAq[aA + 3 * aC.eX] || 0 < aAq[aA + 4 * aC.eX]) && function(aHg, aHh, fontSize, aA, hX) {
			var ev, g2 = -1;
			for (ev = 4; 1 <= ev; ev--) 0 < aAq[aA + ev * aC.eX] && g2++;
			for (ev = 1; ev < 5; ev++) 0 < aAq[aA + ev * aC.eX] && (! function(aHg, aHh, fontSize, ev, aA, aHt, di, hX) {
				var a1m;
				if (1 === ev) {
					aA = aHI[aA + aC.eX];
					if (!ai.qr.y2(aA)) return function(aHg, aHh, fontSize, oE, aHt, hX) {
						hX.globalAlpha = aHv(fontSize);
						aHg -= .534 * aHt * fontSize, aHt = aHh + 1.59 * fontSize;
						hX.font = b8.pb.rQ(0, .785 * fontSize), hX.fillText(ai.qr.xv(oE), aHg, aHt), hX.globalAlpha = 1
					}(aHg, aHh, fontSize, aA, aHt, hX);
					a1m = ai.va.xU[aA - 1024 + ai.qr.xg]
				} else a1m = 2 === ev ? aK.a40()[4].canvas[+(di < 255)] : (3 === ev ? aK.a40()[5] : aK.a40()[6]).canvas[0];
				aA = ai.va.xV, di = .8 * fontSize / aA, ev = aHg - .5 * di * aA - .534 * aHt * fontSize, aHg = aHh + 1.4 * di * aA;
				hX.setTransform(di, 0, 0, di, ev, aHg), hX.globalAlpha = aHv(fontSize), hX.drawImage(a1m, 0, 0), hX.globalAlpha = 1, hX.setTransform(1, 0, 0, 1, 0, 0)
			}(aHg, aHh, fontSize, ev, aA, g2, aAq[aA + ev * aC.eX], hX), g2 -= 2)
		}(aHg, aHh, fontSize, aA, hX), (aHj = aH8 * fontSize) < aHA || (hX.font = b8.pb.rQ(1, aHj), aHh += Math.floor(.78 * fontSize), aHT ? aHn(aA, aHj, aHg, aHh, hX) : aHm(hX, aA, aHj, aHg, aHh, aHi)))
	}

	function aHn(aA, fontSize, eh, ej, hX) {
		var ___id = aA;
		var showName = aA < aC.jp || !__fx.settings.hideBotNames;
		if (showName) hX.fillText(af.zT[aA], eh, ej), aA < aC.jp && 2 !== af.a2I[aA] || (aA = fontSize / aH5[aA], hX.fillRect(eh - .5 * aA, ej + b8.pb.xw * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHT && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hX.fillText(__fx.utils.getDensity(___id), eh, showName ? ej + fontSize : ej)
		);
	}

	function aHm(hX, aA, fontSize, aHg, aHh, aHi) {
		var ___id = aA;
		aA = b8.zX.yA(af.gb[aA]);
		aHi >> 1 & 1 ? (hX.lineWidth = .05 * fontSize, hX.strokeStyle = aHl(fontSize, aHi % 2), hX.strokeText(aA, aHg, aHh)) : (1 < aHi && (hX.lineWidth = .12 * fontSize, hX.strokeStyle = aHl(fontSize, aHi), hX.strokeText(aA, aHg, aHh)), hX.fillText(
			aA, aHg, aHh));
		aHT || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hX.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hX.fillText(__fx.utils.getDensity(___id), aHg, aHh + fontSize))
	}

	function aHp(aHg, aHh, fontSize, aHt, aHu, hX) {
		var a4Z = .95 * fontSize / aHK,
			aHg = aHg - .5 * a4Z * aHJ + .8 * aHt * fontSize,
			aHt = aHh - 1.76 * a4Z * aHK - (.35 - b8.pb.xw + .7) * aHu * fontSize;
		hX.setTransform(a4Z, 0, 0, a4Z, aHg, aHt), hX.globalAlpha = aHv(fontSize), hX.drawImage(aa.get(4), 0, 0), hX.globalAlpha = 1, hX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHy(aHg, aHh, fontSize, oE, aHt, hX) {
		var hR, w8, a4Z;
		hX.globalAlpha = aHv(fontSize), ai.qr.y2(oE) ? (hR = ai.va.xV, hX.setTransform(a4Z = 1.1 * fontSize / hR, 0, 0, a4Z, w8 = aHg - .5 * a4Z * hR - .8 * aHt * fontSize, a4Z = aHh - 1.55 * a4Z * hR), hX.drawImage(ai.va.xU[oE - 1024 + ai.qr.xg], 0,
			0), hX.setTransform(1, 0, 0, 1, 0, 0)) : (w8 = aHg - .8 * aHt * fontSize, a4Z = aHh - (.35 - b8.pb.xw + 1) * fontSize, hX.fillText(ai.qr.xv(oE), w8, a4Z)), hX.globalAlpha = 1
	}

	function aHl(fontSize, aHi) {
		return aH7 <= fontSize && fontSize < aH6 ? be.aI0[aHi] + aHv(fontSize).toFixed(3) + ")" : be.aI1[aHi]
	}

	function aHv(fontSize) {
		return aH7 <= fontSize && fontSize < aH6 ? 1 - (fontSize - aH7) / (aH6 - aH7) : 1
	}

	function aIA(hW, i) {
		return 1 + Math.floor(aH9 * hW * i)
	}

	function aI7(aA) {
		for (var left = aH0[aA], et = aH0[aA] - af.iO[aA] - 1; 0 <= et; et--)
			if (!aIC(aA, --left, aH1[aA], aH3[aA])) {
				left++;
				break
			} var right = aH0[aA];
		for (et = af.iP[aA] - aH0[aA] - aH2[aA]; 0 <= et; et--)
			if (!aIC(aA, ++right + aH2[aA] - 1, aH1[aA], aH3[aA])) {
				right--;
				break
			} var eh = Math.floor((left + right) / 2),
			top = aH1[aA];
		for (et = aH1[aA] - af.iQ[aA] - 1; 0 <= et; et--)
			if (!aID(aA, eh, --top, aH2[aA])) {
				top++;
				break
			} var bottom = aH1[aA];
		for (et = af.iR[aA] - aH1[aA] - aH3[aA]; 0 <= et; et--)
			if (!aID(aA, eh, ++bottom + aH3[aA] - 1, aH2[aA])) {
				bottom--;
				break
			} var ej = Math.floor((top + bottom) / 2);
		aI4(aA, eh, ej, aH2[aA], aH3[aA]) && (aH0[aA] = eh, aH1[aA] = ej)
	}

	function aI4(player, eh, ej, i, j) {
		ed = Math.floor(.2 * i);
		for (var ed, ev = eh + i - 1; eh <= ev; ev--)
			if (!aIC(player, ev, ej, j)) return;
		for (ev = ej + j - 1 - (ed = (ed = Math.floor(.25 * j)) < 1 ? 1 : ed); ej + ed <= ev; ev--)
			if (!aID(player, eh, ev, i)) return;
		return 1
	}

	function aIC(player, eh, ej, j) {
		return ab.wz(player, 4 * (ej * bQ.el + eh)) && ab.wz(player, 4 * ((ej + j - 1) * bQ.el + eh))
	}

	function aID(player, eh, ej, i) {
		return ab.wz(player, 4 * (ej * bQ.el + eh)) && ab.wz(player, 4 * (ej * bQ.el + eh + i - 1))
	}
	this.dU = function() {
		if (aHT = bh.e7.data[7].value || 8 === aC.k6, a8t = 0 === (a8t = bh.e7.data[11].value) ? 280 : 1 === a8t ? 187 : 112, aHF = !1, aHB = .88, aH8 = .5, aH9 = 1.8, aHA = 12 - 3 * bh.e7.data[9].value, aGz = aGy = 0, aH0 = new Uint16Array(aC
				.eX), aH1 = new Uint16Array(aC.eX), aH2 = new Uint16Array(aC.eX), aH3 = new Uint16Array(aC.eX), aH4 = new Float32Array(aC.eX), aH5 = new Float32Array(aC.eX), aHI = new Uint16Array(2 * aC.eX), aAq = new Uint8Array(5 * aC.eX), aHR =
			new Uint8Array(aC.eX), aHS = new Uint8Array(aC.eX), aHQ || (aHG = aHG || document.createElement("canvas")), pf(), aHD = aHC = 0, aHE = 1, aHT) {
			var aA, aHZ;
			for (aHU(), tk.font = b8.pb.rQ(1, 100), aHZ = 100 / Math.floor(tk.measureText("900 000").width), aA = aC.eX - 1; 0 <= aA; aA--) aH4[aA] = Math.min(aHZ, 2 * aH5[aA]);
			aHP = aHZ, aHO[0] = 100 / (aHZ * Math.floor(tk.measureText("5 000 000").width)), aHO[1] = 100 / (aHZ * Math.floor(tk.measureText("50 000 000").width)), aHO[2] = 100 / (aHZ * Math.floor(tk.measureText("500 000 000").width)), aHO[3] =
				100 / (aHZ * Math.floor(tk.measureText("1 000 000 000").width))
		} else aHU();
		! function() {
			var aA;
			for (aA = aC.eX - 1; 0 <= aA; aA--) af.gN[aA] < 12 ? (aH0[aA] = af.iO[aA] + 1, aH1[aA] = af.iQ[aA] + 1, aH2[aA] = 1, aH3[aA] = 1) : (aH0[aA] = af.iO[aA], aH1[aA] = af.iQ[aA] + 1, aH2[aA] = 4, aH3[aA] = 2);
			if (aC.gv)
				for (aA = 0; aA < aC.jp; aA++) aH2[aA] = 0;
			aHJ = aa.get(4).width, aHK = aa.get(4).height
		}()
	}, this.aGk = function(g7, a5W) {
		a5W > 18 * af.gN[g7] ? (aHS[g7] = 6, ab.a6x[g7] = 2 + ab.a6x[g7] % 2) : (aHR[g7] = 4, (ab.a6x[g7] < 2 || 3 < ab.a6x[g7]) && (ab.a6x[g7] = 6 + ab.a6x[g7] % 2))
	}, this.oQ = function(g7, a5W) {
		a5W > 6 * af.gN[g7] ? (aHS[g7] = 6, ab.a6x[g7] = 4 + ab.a6x[g7] % 2) : (aHR[g7] = 4, (ab.a6x[g7] < 4 || 5 < ab.a6x[g7]) && (ab.a6x[g7] = 8 + ab.a6x[g7] % 2))
	}, this.resize = function() {
		pf(), aHQ || aHY(aHH)
	}, this.a3G = function() {
		for (var aA = 0; aA < aC.jp; aA++) af.iP[aA] - af.iO[aA] != 3 || af.iR[aA] - af.iQ[aA] != 3 ? (aH0[aA] = af.iO[aA] + (af.iP[aA] !== af.iO[aA] ? 1 : 0), aH1[aA] = af.iQ[aA], aH2[aA] = 1, aH3[aA] = 1) : (aH0[aA] = af.iO[aA], aH1[aA] = af
			.iQ[aA] + 1, aH2[aA] = 4, aH3[aA] = 2)
	}, this.pA = function(player, dx, aHb) {
		! function(player, dx, aHb) {
			player += dx * aC.eX;
			0 === dx ? aHI[player] === aHb && 0 < aAq[player] ? aAq[player] = 0 : (aHI[player] = aHb, aAq[player] = ai.qr.y1(aHb) ? 255 : 64) : 1 === dx ? (aAq[player] = 64, aHI[player] = aHb) : aAq[player] = aHb
		}(player, dx, aHb), 2 === aC.ys && this.lR(!0)
	}, this.tj = function() {
		aHQ ? aHY(tk) : aHF && (1 !== aHE ? (tk.imageSmoothingEnabled = !0, tk.setTransform(aHE, 0, 0, aHE, 0, 0), tk.drawImage(aHG, -aHC / aHE, -aHD / aHE), tk.setTransform(1, 0, 0, 1, 0, 0), tk.imageSmoothingEnabled = !1) : tk.drawImage(aHG, -
			aHC, -aHD))
	}, this.a7h = function(hv, hy) {
		aHC += hv, aHD += hy
	}, this.a0R = function(hv, hy) {
		ae.a7h(hv, hy)
	}, this.zoom = function(a1L, ks, kt) {
		aHE *= a1L, aHC = (aHC + ks) * a1L - ks, aHD = (aHD + kt) * a1L - kt
	}, this.lR = function(bp) {
		return !aHQ && !(!aHN && !bp && bd.e9 < aHM + (1 === aHE && 0 === aHC && 0 === aHD && (aC.a3j() || aC.gv || 2 === aC.ys) ? 1e3 : a8t) || (aHN = !1, aHM = bd.e9, aHY(aHH), 0))
	}, this.aHe = function(aA) {
		return aHa(aA) * aH4[aA]
	}, this.aHf = function(player) {
		return aH4[player]
	}, this.ij = function() {
		bd.jm() % 10 == 9 && (aHN = aC.a3l() && !aC.a3j()), !aC.a3j() && 4 <= ++aGz && function() {
			var aA, et, eu;
			for (aGz = 0, eu = 4; 1 <= eu; eu--)
				for (et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et] + eu * aC.eX, 0 < aAq[aA] && aAq[aA] < 255 && aAq[aA]--;
			if (2 !== aC.ys)
				for (et = ak.jq - 1; 0 <= et; et--) aA = ak.jr[et], 0 < aAq[aA] && aAq[aA] < 255 && aAq[aA]--
		}();
		var aA, et, ea = Math.floor(.1 * ak.jq);
		for (ea = (ea = ea < 8 ? 8 : ea) > ak.jq ? ak.jq : ea, aA = aGy + ea - 1; aGy <= aA; aA--) et = aA % ak.jq, ! function(aA) {
			var hW = aHa(aA) * aH4[aA];
			0 < aH2[aA] && aI4(aA, aH0[aA], aH1[aA], aH2[aA], aH3[aA]) ? ! function(aA) {
				for (var eh, ej, i, j, eE = !1, eu = 0; eu < 8; eu++) {
					if (i = aH2[aA] + 2, j = aH3[aA] + 2, i > af.iP[aA] - af.iO[aA] + 1 || j > af.iR[aA] - af.iQ[aA] + 1) return eE;
					if (eh = aH0[aA] - 1, ej = aH1[aA] - 1, !aI4(aA, eh, ej, i, j)) return eE;
					aH0[aA] = eh, aH1[aA] = ej, aH2[aA] = i, aH3[aA] = j, eE = !0
				}
				return eE
			}(aA) && function(aA, hW) {
				for (var eh, ej, i, j, eE = !1, aAz = aH2[aA], mJ = 1 + Math.floor(.02 * aAz), eu = 1; eu < 5; eu++) {
					if ((i = aAz + eu * mJ) > af.iP[aA] - af.iO[aA] + 1) return eE;
					if ((j = aIA(hW, i)) > af.iR[aA] - af.iQ[aA] + 1) return eE;
					eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - i)), ej = af.iQ[aA] + Math.floor(Math.random() * (af.iR[aA] - af.iQ[aA] + 2 - j)), aI4(aA, eh, ej, i, j) && (aH0[aA] = eh, aH1[aA] = ej, aH2[
						aA] = i, aH3[aA] = j, eE = !0)
				}
				return eE
			}(aA, hW) && aI7(aA) : ! function(aA, hW) {
				var j, eh = aH0[aA] + 1,
					ej = aH1[aA] + 1,
					i = aH2[aA] - 2;
				for (;;) {
					if (i < 1) {
						aH2[aA] = 0;
						break
					}
					if (j = aIA(hW, i), aI4(aA, eh, ej, i, j)) return aH0[aA] = eh, aH1[aA] = ej, aH2[aA] = i, aH3[aA] = j, 1;
					eh++, ej++, i -= 2
				}
				return
			}(aA, hW) ? function(aA, hW) {
				var eh, ej, i, j, eu, mP, j6 = af.iP[aA] - af.iO[aA] + 1,
					aIB = Math.floor(.02 * j6);
				for (mP = -6 * (aIB = aIB < 1 ? 1 : aIB), eu = j6; mP <= eu; eu -= aIB)
					if (j = aIA(hW, i = 0 < eu ? eu : 1), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - i)), ej = af.iQ[aA] + Math.floor(Math.random() * (af.iR[aA] - af.iQ[aA] + 2 - j)), aI4(aA, eh, ej, i, j))
						return aH0[aA] = eh, aH1[aA] = ej, aH2[aA] = i, aH3[aA] = j
			}(aA, hW) : aI7(aA)
		}(ak.jr[et]);
		aGy = (aGy += ea) % ak.jq
	}, this.lM = function() {
		var aA, g7, hf, hg;
		if (bd.jm() % 4 == 1)
			for (aA = ak.jq - 1; 0 <= aA; aA--) g7 = ak.jr[aA], ab.a6x[g7] < 2 || ((hf = Math.max(aHR[g7] - 1, 0)) === (hg = Math.max(aHS[g7] - 1, 0)) ? 0 === hf && (ab.a6x[g7] %= 2) : 0 === hg && ab.a6x[g7] < 6 && (ab.a6x[g7] += 4), aHR[g7] =
				hf, aHS[g7] = hg)
	}, this.a5G = function(player) {
		var aA = player + 2 * aC.eX,
			di = aAq[aA];
		return 0 < di && (aM.yz(50, player), aAq[aA] = 0, 255 === di)
	}, this.a4J = function(player) {
		return 255 === aAq[player + 2 * aC.eX]
	}
}

function cX() {
	var aIE, aIF, aIG;
	this.dU = function() {
		aIE =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aIF =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), aIG = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a5Y = ["K ", " Y", "E ", " Z", " z", " s", "S "], aIH = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aIE.length - 1; 0 <= aA; aA--)
			for (var et = a5Y.length - 1; 0 <= et; et--) aIE[aA] = aIE[aA].replace(a5Y[et], aIH[et]);
		if (__fx.settings.realisticNames) aIE = realisticNames;
	}, this.a3V = function() {
		var ea = aC.jp,
			zT = af.zT,
			zZ = af.zZ,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ea)
			for (var aA = 0; aA < ea; aA++) zT[aA] = zZ[aA] = "Player " + aw.j7(1e3);
		else
			for (aA = 0; aA < ea; aA++) zT[aA] = zZ[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k6) {
			for (var dw = aw.random(), aIN = aIG, aIO = aIF, hE = aD.hE, ea = aIN.length, kX = aC.data.teamPlayerCount[7], zT = af.zT, zZ = af.zZ, aA = kX - 1; aA >= aC.jp; aA--) zT[aA] = zZ[aA] = aIN[(aA + dw) % ea];
			for (ea = aIO.length - 1, aA = kX; aA < aC.eX; aA++) zT[aA] = zZ[aA] = aIO[hE[aA] ? ea : aA % ea]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var ea = aC.eX, zT = af.zT, zZ = af.zZ, playerNamesData = aC.data.playerNamesData, aA = aC.jp; aA < ea; aA++) zT[aA] = zZ[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zT = af.zT, zZ = af.zZ, aA = aC.jp; aA < aC.eX; aA++) zT[aA] = zZ[aA] = "Bot " + aw.j7(1e3)
		} : function() {
			for (var aIP = aIE, ea = aIP.length, dw = aw.random(), zT = af.zT, zZ = af.zZ, aA = aC.jp; aA < aC.eX; aA++) zT[aA] = zZ[aA] = aIP[(aA + dw) % ea]
		})()
	}
}

function cq() {
	this.aIQ = [], this.aIR = [], this.dU = function() {
		this.aIQ = [], this.aIR = []
	}, this.ij = function() {
		0 <= this.aIQ.length && this.aIS(this.aIQ), 0 <= this.aIR.length && this.aIS(this.aIR)
	}, this.aIS = function(g) {
		for (var eu = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].e9--, g[aA].e9 <= 0) {
				eu = aA;
				break
			} for (aA = eu; 0 <= aA; aA--) g.shift()
	}, this.a48 = function(id, yg, aIT) {
		return this.ew(this.aIQ, id, yg, aIT)
	}, this.aIU = function(id, yg, aIT) {
		return this.ew(this.aIR, id, yg, aIT)
	}, this.ew = function(g, id, yg, aIT) {
		return ! function(g, id, yg) {
			var aA, hN;
			for (aA = yg.length - 1; 0 <= aA; aA--)
				for (hN = g.length - 1; 0 <= hN; hN--)
					if (g[hN].player === yg[aA] && id === g[hN].id) return 1;
			return
		}(g, id, yg) && (aIT && function(g, id, yg) {
			var aA;
			for (aA = yg.length - 1; 0 <= aA; aA--) g.push({
				player: yg[aA],
				id: id,
				e9: 384
			})
		}(g, id, yg), !0)
	}
}

function cW() {
	this.zZ = new Array(aC.eX), this.zT = new Array(aC.eX), this.a2I = new Uint8Array(aC.eX), this.lf = new Uint8Array(aC.eX), this.iO = new Uint16Array(aC.eX), this.iQ = new Uint16Array(aC.eX), this.iP = new Uint16Array(aC.eX), this.iR =
		new Uint16Array(aC.eX), this.gN = new Uint32Array(aC.eX), this.wa = new Uint32Array(aC.eX), this.gb = new Uint32Array(aC.eX), this.g1 = null, this.gF = null, this.gG = null, this.f0 = null, this.ox = new Uint16Array(aC.eX), this.is =
		new Uint16Array(aC.eX), this.it = new Uint16Array(aC.eX), this.zS = new Uint16Array(aC.eX), this.zQ = new Uint8Array(aC.eX), this.a2Q = new Uint16Array(aC.eX), this.dU = function() {
			this.zZ.fill(""), this.zT.fill(""), this.a2I.fill(0), this.lf.fill(0), this.iO.fill(0), this.iQ.fill(0), this.iP.fill(0), this.iR.fill(0), this.gN.fill(0), this.wa.fill(0), this.gb.fill(0), this.g1 = new Array(aC.eX), this.gF = new Array(
				aC.eX), this.gG = new Array(aC.eX), this.f0 = new Array(aC.eX), this.ox.fill(0), this.is.fill(0), this.it.fill(0), this.zS.fill(0), this.zQ.fill(0), this.a2Q.fill(0)
		}
}

function co() {
	this.aBJ = function(player) {
		aF.le(player), aC.yu++, af.a2I[player] = 2, af.zS[player] = bg.zl.aFk(), player === aC.eK && (aW.show(!1, !1), aV.a9X(), bP.yd.zO()), ae.a5G(player)
	}
}

function cQ() {
	this.jr = null, this.jq = 0, this.a3Z = function() {
		for (this.jq = 0, aA = aC.eX - 1; 0 <= aA; aA--) 0 !== af.lf[aA] && this.jq++;
		this.jr = new Uint16Array(this.jq);
		for (var ea = 0, aA = 0; aA < aC.eX; aA++) 0 !== af.lf[aA] && (this.jr[ea++] = aA)
	}, this.lL = function() {
		for (var gN = af.gN, wa = af.wa, zQ = af.zQ, jr = ak.jr, aA = ak.jq - 1; 0 <= aA; aA--) {
			var di, g7 = jr[aA];
			gN[g7] <= bJ.dj(wa[g7], 4) ? aj.dd(g7) : gN[g7] >= wa[g7] ? (di = gN[g7], 250 <= (wa[g7] = di) && (zQ[g7] = 1)) : wa[g7] -= Math.max(1, bJ.dj(wa[g7] - gN[g7], 1e3))
		}
		this.aIY()
	}, this.aIY = function() {
		for (var lf = af.lf, kW = this.jr, aAD = this.jq, aA = aAD - 1; 0 <= aA; aA--) 0 === lf[kW[aA]] && (kW[aA] = kW[--aAD]);
		this.jq = aAD
	}
}

function cY() {
	var aIZ;
	this.kF = null, this.kE = 0, this.dU = function() {
		aIZ = [], 9 === aC.k6 && this.aIa()
	}, this.aIa = function() {
		var aIb = [60, 80, 105, 150, 190, 333];
		this.kF = [0, 0, 0, 0, 0, 0], this.kE = 0, aC.jp <= aIb[0] ? (this.kE = 256 - bJ.dj(256 * aC.jp, aIb[0]), aC.jp <= 22 ? this.kF[5] = bJ.dj(Math.max(aC.jp - 6, 0), 6) : this.kF[5] = 3 + bJ.dj(38 * (aC.jp - 22), 100), this.kF[0] = aC.eX -
				aC.jp - this.kE - this.kF[5]) : (this.kF[5] = Math.min(17 + bJ.dj(61 * (aC.jp - 60), 100), 179), this.kF[0] = 512 - aC.jp - this.kF[5]), aC.kA = aC.eX - aC.jp, aC.data.numberTeams = (0 < aC.jp) + (0 < aC.kA), aC.data.playerCount =
			aC.w6 = aC.jp + aC.kA, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aC.jp + this.kE, aC.kA - this.kE]), aC.a3P.a3T()
	}, this.aFr = function(player) {
		aIZ.push({
			player: player,
			g2: 14 + aw.j7(20)
		})
	}, this.ij = function() {
		if (9 === aC.k6)
			for (var aA = aIZ.length - 1; 0 <= aA; aA--) --aIZ[aA].g2 <= 0 && (ae.pA(aIZ[aA].player, 0, ai.qr.xj + ai.qr.xx), aIZ.splice(aA))
	}
}

function d5() {
	function aIq() {
		return {
			el: bQ.el,
			em: bQ.em,
			vX: bQ.vX,
			vT: bQ.vT,
			vU: bQ.vU,
			vY: bQ.vY,
			eG: bQ.eG,
			mapSeed: bQ.mapSeed
		}
	}

	function aIi(aA) {
		return 1 !== aA && bQ.aBn(aA) && aA !== bQ.aIr()
	}
	this.aId = 22, this.aG2 = 4096, this.el = 0, this.em = 0, this.vX = null, this.vT = null, this.vU = null, this.vY = null, this.eG = 0, this.mapSeed = 0, this.vV = !1, this.vW = new aIe, this.vN = new aIf, this.a5e = new aIg, this.dU =
function() {
		this.vN.dU()
	}, this.a6 = function(map, aIh) {
		((map %= this.aId) !== this.eG || aIi(this.eG) && aIh !== this.mapSeed) && (this.vV = !1, this.vW.aIj(), aw.a3U(map), this.eG = map, this.mapSeed = aIh, aIi(map) && (bQ.vN.vO[map].aIk = aIh), this.aBn(this.eG) ? (map = bQ.vN.vO[this.eG],
			this.el = map.i, this.em = map.j, aw.a3U(map.aIk), ao.a6([this.el, this.em, map.lk, map.lh]), aIm(), an.aIn(), ao.aIo()) : aIl())
	}, this.aIp = function(map, aIh) {
		var fH = aIq(),
			map = (this.a6(map, aIh), this.vW.aIj(), aIq());
		return this.el = fH.el, this.em = fH.em, this.vX = fH.vX, this.vT = fH.vT, this.vU = fH.vU, this.vY = fH.vY, this.eG = fH.eG, this.mapSeed = fH.mapSeed, map
	}, this.a3p = function(canvas) {
		canvas && this.vX !== canvas && (this.el = canvas.width, this.em = canvas.height, this.vX = canvas, this.vT = this.vX.getContext("2d", {
			alpha: !1
		}), this.hU = this.vT.getImageData(0, 0, this.el, this.em), this.vY = this.hU.data, this.eG = this.aIr(), this.mapSeed = 0, bQ.vN.vO[this.eG].name = aC.data.mapName)
	}, this.eF = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIr()
	}, this.aIs = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIt = function(aA) {
		return 1 === aA
	}, this.aIr = function() {
		return this.aId
	}, this.aBn = function(aA) {
		return void 0 === this.vN.vO[aA].aIu
	}, this.a3o = function(pT) {
		return 0 === pT.mapType ? pT.mapProceduralIndex < 10 ? pT.mapProceduralIndex : 10 + pT.mapProceduralIndex : 1 === pT.mapType ? pT.mapRealisticIndex + 10 : void 0
	}, this.aBo = function(pT, aIv) {
		0 === pT.mapType ? pT.mapProceduralIndex = aIv < 10 ? aIv : aIv - 10 : 1 === pT.mapType && (pT.mapRealisticIndex = aIv - 10)
	}
}

function aIe() {
	function aJ4() {
		bQ.vW.ij()
	}

	function aJA(g7, aJ9) {
		0 < aJ9 && (bQ.vY[g7] += aJ9, bQ.vY[g7 + 1] += aJ9, bQ.vY[g7 + 2] += aJ9)
	}

	function h2(g7) {
		return bQ.vY[g7 + 2] > bQ.vY[g7] && bQ.vY[g7 + 2] > bQ.vY[g7 + 1]
	}
	this.a7t = -1, this.zy = 0, this.aIw = 0, this.aIx = 8, this.aIy = 32, this.aIz = 8, this.aJ0 = 32, this.aJ1 = [0, 0], this.a6x = [0, 0, 0, 0], this.iJ = null, this.aJ2 = !0, this.aJ3 = !1, this.aIj = function() {
		-1 !== this.a7t && clearTimeout(this.a7t), this.a7t = -1, this.iJ = null, ao.aIo()
	}, this.dU = function() {
		7 === aZ.a05() || this.aJ3 || (this.aJ2 = !0, this.zy = 0, this.aIw = 1, this.aJ1 = [bQ.vN.vO[bQ.eG].vq[0], bQ.vN.vO[bQ.eG].vr[0]], this.a6x = [bQ.vN.vO[bQ.eG].aIu[3], bQ.vN.vO[bQ.eG].aIu[4], bQ.vN.vO[bQ.eG].aIu[5], bQ.vN.vO[bQ.eG].aIu[
			6]], this.aIx = bQ.vN.vO[bQ.eG].aIu[7], this.aIy = bQ.vN.vO[bQ.eG].aIu[8], this.aIz = bQ.vN.vO[bQ.eG].aIu[9], this.aJ0 = bQ.vN.vO[bQ.eG].aIu[10], this.aJ2 ? this.a7t = setTimeout(aJ4, 16) : this.ij())
	}, this.ij = function() {
		if (8 === aZ.a05() && aG.ly()) this.a7t = setTimeout(aJ4, 16);
		else {
			if (0 === this.zy) {
				var aIk = aw.aJ5();
				if (aw.a3U(bQ.vN.vO[bQ.eG].aIu[2]), ao.a6([bQ.el, bQ.em, bQ.vN.vO[bQ.eG].aIu[0], bQ.vN.vO[bQ.eG].aIu[1]]), aw.a3U(aIk), this.iJ = ao.aJ6(), this.zy++, this.aJ2) return void(this.a7t = setTimeout(aJ4, 16))
			}
			for (var g7, eM, aIk = this.aJ2 ? 10 : 1e6, aIk = bQ.em - this.aIw - 1 < aIk ? bQ.em - this.aIw - 1 : aIk, wn = this.aIw + aIk, ej = this.aIw; ej < wn; ej++)
				for (var eh = 1; eh < bQ.el - 1; eh++) h2(g7 = 4 * (eM = eh + ej * bQ.el)) ? this.aJ7(g7, eM, 1) : (this.aJ7(g7, eM, 0), function(eh, ej, g7) {
					return 1 < eh && h2(g7 - 4) || eh < bQ.el - 2 && h2(g7 + 4) || 1 < ej && h2(g7 - 4 * bQ.el) || ej < bQ.em - 2 && h2(g7 + 4 * bQ.el)
				}(eh, ej, g7) && this.aJ8(eh, ej));
			this.aIw = wn, this.aIw >= bQ.em - 1 ? (bQ.vT.putImageData(bQ.vU, 0, 0, 1, 1, bQ.el - 2, bQ.em - 2), bd.dc = !0, this.aIj()) : this.aJ2 && (this.a7t = setTimeout(aJ4, 16))
		}
	}, this.aJ7 = function(g7, eM, dx) {
		aJA(g7, Math.floor(this.aJ1[dx] + this.a6x[dx] * this.iJ[eM] / 1e4) - bQ.vY[g7])
	}, this.aJB = function(g7, dw, aJC, dx, a6x) {
		aJA(g7, Math.floor(this.aJ1[dx] + (1 - dw / aJC) * a6x) - bQ.vY[g7])
	}, this.aJ8 = function(ks, kt) {
		for (var g7, dw, aJC, a7j = ks - this.aIy, aJD = kt - this.aIy, wo = ks + this.aIy, wn = kt + this.aIy, a7j = a7j < 1 ? 1 : a7j, wo = wo > bQ.el - 2 ? bQ.el - 2 : wo, wn = wn > bQ.em - 2 ? bQ.em - 2 : wn, ej = aJD < 1 ? 1 : aJD; ej <=
			wn; ej++)
			for (var eh = a7j; eh <= wo; eh++) h2(g7 = 4 * (eh + ej * bQ.el)) ? (aJC = this.aIx + (this.aIy - this.aIx) * this.iJ[eh + bQ.el * ej] / 1e4, Math.abs(ks - eh) > aJC || Math.abs(kt - ej) > aJC || aJC <= (dw = Math.sqrt((ks - eh) * (
				ks - eh) + (kt - ej) * (kt - ej))) || this.aJB(g7, dw, aJC, 1, this.a6x[3])) : (aJC = this.aIz + (this.aJ0 - this.aIz) * this.iJ[eh + bQ.el * ej] / 1e4, Math.abs(ks - eh) > aJC || Math.abs(kt - ej) > aJC || aJC <= (dw = Math
				.sqrt((ks - eh) * (ks - eh) + (kt - ej) * (kt - ej))) || this.aJB(g7, dw, aJC, 0, this.a6x[2]))
	}
}

function aIm() {
	2 === bQ.eG ? aJE([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eG ? aJE([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eG ? aJE([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eG ? aJE([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eG && aJE([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aJE(aJF, aJG, aJH, aJI, aJJ) {
	for (var eh, ej, aJL, aJM, a1L, aJN, hu = aJF.length - 1, aJK = bQ.el + bQ.em, ea = (aJK *= aJK, aJH.length), aA = ea - 1; 0 <= aA; aA--) aJH[aA] *= aJH[aA];
	var aJO = new Array(ea),
		aAn = new Array(ea),
		aJP = new Array(ea),
		f2 = ao.aJ6();
	if (void 0 === aJJ)
		for (aJJ = new Array(ea), aA = ea - 1; 0 <= aA; aA--) aJJ[aA] = 0;
	for (aA = 1; aA < ea; aA++) aJO[aA] = aJH[aA] - aJH[aA - 1], aAn[aA] = aJI[aA] - aJI[aA - 1], aJP[aA] = aJJ[aA] - aJJ[aA - 1];
	for (eh = bQ.el - 1; 0 <= eh; eh--)
		for (ej = bQ.em - 1; 0 <= ej; ej--) {
			for (aJL = aJK, aA = hu; 0 <= aA; aA--) aJL = (aJM = (eh - aJF[aA]) * (eh - aJF[aA]) + (ej - aJG[aA]) * (ej - aJG[aA])) < aJL ? aJM : aJL;
			for (a1L = aJI[ea - 1], aJN = aJJ[ea - 1], aA = 1; aA < ea; aA++)
				if (aJL < aJH[aA]) {
					a1L = aJI[aA - 1] + aFK((aJL - aJH[aA - 1]) * aAn[aA], aJO[aA]), aJN = aJJ[aA - 1] + aFK((aJL - aJH[aA - 1]) * aJP[aA], aJO[aA]);
					break
				} aJQ(bQ.el * ej + eh, a1L, aJN, f2)
		}
}

function aJQ(dx, a1L, aJN, f2) {
	a1L < 500 ? f2[dx] = bJ.dj(f2[dx] * a1L * 2, 1e3) : 500 < a1L && (f2[dx] += bJ.dj(2 * (1e4 - f2[dx]) * (a1L - 500), 1e3)), f2[dx] += bJ.dj(aJN * (10 * a1L - f2[dx]), 1e3)
}

function ca() {
	var aJR;

	function aJb(a1m, hW, eh, ej, globalAlpha) {
		bQ.vT.save(), bQ.vT.globalAlpha = globalAlpha, bQ.vT.imageSmoothingEnabled = !1, bQ.vT.scale(hW, hW), bQ.vT.drawImage(a1m, Math.floor(eh * (bQ.el / hW - a1m.width)), Math.floor(ej * (bQ.em / hW - a1m.height))), bQ.vT.restore()
	}
	this.a5b = 0, this.a5c = 0, this.a5d = 0, this.a5e = 0, this.dU = function() {
		(aJR = new Array(bQ.aId))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dw: [220, 250, 255, 220],
			sF: [190, 220, 0, 0],
			eu: [170, 200, 0, 0]
		}, aJR[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dw: [25, 0, 100, 0, 25],
			sF: [25, 0, 0, 0, 25],
			eu: [25, 0, 0, 0, 25]
		}, aJR[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dw: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sF: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			eu: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJR[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dw: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sF: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			eu: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJR[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dw: [10, 10, 20, 10, 10, 170, 212],
			sF: [20, 20, 60, 100, 100, 110, 170],
			eu: [70, 70, 160, 30, 30, 60, 120]
		}, aJR[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dw: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sF: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			eu: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJR[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dw: [10, 10, 60, 255, 255, 200, 200],
			sF: [10, 10, 60, 255, 255, 200, 200],
			eu: [80, 80, 255, 255, 255, 200, 200]
		}, aJR[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sF: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJR[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dw: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sF: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			eu: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJR[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sF: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			eu: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJR[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dw: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sF: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			eu: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJR[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dw: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sF: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			eu: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIn = function() {
		var aJa, aA, et, fH, hU = function() {
				var hU;
				return bQ.vX = document.createElement("canvas"), bQ.vX.width = bQ.el, bQ.vX.height = bQ.em, bQ.vT = bQ.vX.getContext("2d", {
					alpha: !1
				}), hU = bQ.vT.getImageData(0, 0, bQ.el, bQ.em), bQ.vY = hU.data, hU
			}(),
			i = aJR[bQ.eG].i,
			dw = aJR[bQ.eG].dw,
			sF = aJR[bQ.eG].sF,
			eu = aJR[bQ.eG].eu,
			f2 = ao.aJ6(),
			ea = i.length - 2,
			aJV = new Array(1 + ea),
			aJW = new Array(1 + ea),
			aJX = new Array(1 + ea),
			aJY = new Array(1 + ea);
		for (et = ea; 0 <= et; et--) aJV[et] = i[et + 1] - i[et], aJW[et] = dw[et + 1] - dw[et], aJX[et] = sF[et + 1] - sF[et], aJY[et] = eu[et + 1] - eu[et];
		for (aA = bQ.el * bQ.em - 1; 0 <= aA; aA--)
			for (et = ea; 0 <= et; et--)
				if (f2[aA] >= i[et]) {
					fH = f2[aA] - i[et], bQ.vY[4 * aA] = dw[et] + aFK(aJW[et] * fH, aJV[et]), bQ.vY[4 * aA + 1] = sF[et] + aFK(aJX[et] * fH, aJV[et]), bQ.vY[4 * aA + 2] = eu[et] + aFK(aJY[et] * fH, aJV[et]), bQ.vY[4 * aA + 3] = 255;
					break
				} bQ.vT.putImageData(hU, 0, 0), bQ.aIt(bQ.eG) && aa.sJ() && bQ.aIt(bQ.eG) && (hU = aa.aEU("arena"), aJa = aa.aEU("territorial.io"), aJb(hU, 5, .5, .5, .1), aJb(aJa, 2, .5, .45, .1)), bQ.vV = !0, bd.dc = !0
	}, this.a3X = function() {
		for (var g7, eh, ej, aJc, hL, fJ, a5c = 0, i = bQ.el, j = bQ.em, fH = i * j * 4, aJd = aAN, aJe = bQ.vY, aA = i - 1; 0 <= aA; aA--) aJd[(g7 = aA << 2) + 2] = aJd[fH - g7 - 2] = 3;
		for (fH = 4 * i, aA = j - 1; 0 <= aA; aA--) aJd[(g7 = aA * fH) + 2] = aJd[g7 + fH - 2] = 3;
		for (aJc = i - 1, hL = j - 1, ej = 1; ej < hL; ej++)
			for (fH = ej * i, eh = 1; eh < aJc; eh++) fJ = 1 - (aJe[(g7 = fH + eh << 2) + 2] > aJe[g7 + 1] && aJe[g7 + 2] > aJe[g7]), aJd[g7 + 2] = 2 - fJ, a5c += fJ;
		this.a5b = (i - 2) * (j - 2), this.a5e = 0, bQ.eF(bQ.eG) && (bQ.a5e.aJf(), bQ.a5e.aJg()), this.a5c = aC.jZ = a5c - this.a5e, this.a5d = this.a5b - this.a5c - this.a5e
	}
}

function aIl() {
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
			), (new vG).vI(pI)
}

function aIf() {
	this.vO = null, this.aJh = null, this.aJi = null, this.dU = function() {
		var aJj = [120, 105, 92],
			cos = [12, 12, 60],
			aJk = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJl = [140, 130, 120],
			aJm = [12, 12, 76],
			aJn = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJo = [130, 117, 106],
			aJp = [12, 12, 68],
			aJq = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vO = new Array(bQ.aId + 1), __fx.customLobby.setMapInfo(this.vO), this.vO[0] = {
			name: L(135),
			i: 230,
			j: 230,
			lk: 1e3,
			lh: 2e3,
			aIk: 173
		}, this.vO[1] = {
			name: L(136),
			i: 800,
			j: 800,
			lk: 100,
			lh: 50,
			aIk: 43
		}, this.vO[2] = {
			name: L(137),
			i: 512,
			j: 512,
			lk: 128,
			lh: 32,
			aIk: 0
		}, this.vO[3] = {
			name: L(138) + " 1",
			i: 960,
			j: 960,
			lk: 60,
			lh: 8,
			aIk: 0
		}, this.vO[4] = {
			name: L(139),
			i: 900,
			j: 900,
			lk: 100,
			lh: 5,
			aIk: 0
		}, this.vO[5] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			lk: 100,
			lh: 40,
			aIk: 0
		}, this.vO[6] = {
			name: L(141),
			i: 1e3,
			j: 1e3,
			lk: 100,
			lh: 20,
			aIk: 0
		}, this.vO[7] = {
			name: L(142),
			i: 1024,
			j: 1024,
			lk: 128,
			lh: 32,
			aIk: 0
		}, this.vO[8] = {
			name: L(143),
			i: 820,
			j: 820,
			lk: 200,
			lh: 100,
			aIk: 0
		}, this.vO[9] = {
			name: L(144),
			i: 1024,
			j: 1024,
			lk: 128,
			lh: 32,
			aIk: 0
		}, this.vO[10] = {
			name: L(145),
			vq: aJl,
			vr: aJm,
			aIu: aJn
		}, this.vO[11] = {
			name: L(146),
			vq: aJo,
			vr: aJp,
			aIu: aJq
		}, this.vO[12] = {
			name: L(147),
			vq: aJo,
			vr: aJp,
			aIu: aJq
		}, this.vO[13] = {
			name: L(148),
			vq: aJj,
			vr: cos,
			aIu: aJk
		}, this.vO[14] = {
			name: L(149),
			vq: aJj,
			vr: cos,
			aIu: aJk
		}, this.vO[15] = {
			name: L(150),
			vq: aJl,
			vr: aJm,
			aIu: aJn
		}, this.vO[16] = {
			name: L(151),
			vq: aJl,
			vr: aJm,
			aIu: aJn
		}, this.vO[17] = {
			name: L(152),
			vq: aJj,
			vr: cos,
			aIu: aJk
		}, this.vO[18] = {
			name: L(153),
			vq: aJo,
			vr: aJp,
			aIu: aJq
		}, this.vO[19] = {
			name: L(154),
			vq: aJj,
			vr: cos,
			aIu: aJk
		}, this.vO[20] = {
			name: L(155),
			i: 1024,
			j: 1024,
			lk: 128,
			lh: 32,
			aIk: 0
		}, this.vO[21] = {
			name: L(138) + " 2",
			i: 940,
			j: 940,
			lk: 80,
			lh: 8,
			aIk: 0
		}, this.vO[bQ.aId] = {
			name: ""
		}, this.aJh = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJh[aA] = aA;
		for (this.aJh[10] = 20, this.aJh[11] = 21, this.aJi = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJi[aA] = 10 + aA
	}
}

function aIg() {
	this.aJf = function() {
		for (var g7, eh, fH, aJd = aAN, aJe = bQ.vY, i = bQ.el, aJc = i - 1, hL = bQ.em - 1, g2 = 0, ej = 1; ej < hL; ej++)
			for (fH = ej * i, eh = 1; eh < aJc; eh++) aJe[g7 = fH + eh << 2] === aJe[1 + g7] && aJe[g7] === aJe[2 + g7] && (g2++, aJd[2 + g7] = 4);
		an.a5e = g2
	}, this.aJg = function() {
		for (var aJd = aAN, i = bQ.el, aJc = i - 1, hL = bQ.em - 1, id = 5, ej = 1; ej < hL; ej++)
			for (var fH = ej * i, eh = 1; eh < aJc; eh++) {
				var eE = 2 + (fH + eh << 2);
				4 === aJd[eE] && (! function(eE, id) {
					var ea = 1,
						aJd = aAN,
						ec = ab.ec,
						a1Y = [eE];
					aJd[eE] = id;
					for (; ea;) {
						for (var a1Z = [], aA = 0; aA < ea; aA++)
							for (var eP = a1Y[aA], ed = 3; 0 <= ed; ed--) {
								var ee = eP + ec[ed];
								4 === aJd[ee] && (aJd[ee] = id, a1Z.push(ee))
							}
						ea = (a1Y = a1Z).length
					}
				}(eE, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3W() {
	(x7 = void 0 === x7 ? document.createElement("canvas") : x7).width = bQ.el, x7.height = bQ.em, a3a = x7.getContext("2d", {
		alpha: !0
	}), a3b = aAN = null, a3b = a3a.getImageData(0, 0, bQ.el, bQ.em), aAN = a3b.data, b8.pk.vZ(aAN)
}

function cb() {
	var f2, i, j, max, aJs, lh, aJu, aJv, aJw, aJx, aJy, aJz, aK0, aK1, aJt = 1e4;

	function aK8(aK7, lk, ea) {
		var aA;
		for (aJu[0] = aK7, aA = 1; aA < ea; aA++) aJu[aA] = aJu[aA - 1] + lk, lk = aJu[aA] >= aJt ? (aJu[aA] = aJt - 1, -lk) : aJu[aA] < 0 ? (aJu[aA] = 0, -lk) : (lk += 16384 <= aw.random() ? lh : -lh) < -aJs ? -aJs : aJs < lk ? aJs : lk
	}

	function aKA(eh, ej, aKB, ea) {
		(aKB ? function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA] = aJu[aA]
		} : function(eh, ej, ea) {
			var aA;
			for (aA = 0; aA < ea; aA++) f2[ej * i + eh + aA * i] = aJu[aA]
		})(eh, ej, ea)
	}

	function aKE(value, ea) {
		var aA, aIB, eE, hj = value - aJu[ea - 1];
		if (0 != hj) {
			for (aIB = 1 + bJ.dj(Math.abs(hj), ea - 1), aIB = hj < 0 ? -aIB : aIB, aJu[ea - 1] = value, eE = (eE = ea - 1 - bJ.dj(Math.abs(hj), Math.abs(aIB))) < 1 ? 1 : ea - 2 < eE ? ea - 2 : eE, aA = ea - 2; eE <= aA; aA--) aJu[aA] += hj - (ea -
				1 - aA) * aIB;
			(hj < 0 ? function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJu[aA] < 0 && (aJu[aA] = -aJu[aA] - 1)
			} : function(ea) {
				var aA;
				for (aA = ea - 2; 1 <= aA; aA--) aJu[aA] >= aJt && (aJu[aA] = 2 * aJt - aJu[aA] - 1)
			})(ea)
		}
	}

	function aKH(a1Y, a1Z, ea) {
		for (var aA = 0; aA < ea; aA++) a1Y[aA] = a1Z[aA]
	}

	function aKI(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aKJ(a42, gap, hM) {
		aJv.push(a42), aJw.push(gap), aJx.push(hM)
	}
	this.a6 = function(a2n) {
		! function(a2n) {
			var aA;
			for (i = a2n[0], j = a2n[1], aJs = a2n[2], lh = a2n[3], f2 = new Int16Array(i * j), max = j < i ? i : j, aJu = new Int16Array(max), aJv = [], aJw = [], aJx = [], aJy = new Array(i), aJz = new Array(j), aA = i - 1; 0 <= aA; aA--) aJy[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJz[aA] = !1;
			aK0 = new Int16Array(i), aK1 = new Int16Array(j)
		}(a2n),
		function(ea) {
			var aK7 = aw.random() % aJt,
				lk = aw.random() % (2 * aJs + 1) - aJs;
			aK8(aK7, lk, ea)
		}(max), aKH(aK1, aJu, j), aKA(0, 0, !0, i);
		var eh, ej, a2n = f2[0],
			ea = max,
			lk = aw.random() % (2 * aJs + 1) - aJs;
		for (aK8(a2n, lk, ea), aKH(aK0, aJu, i), aKA(0, 0, !1, j), aKI(aK0), aKI(aK1), aK8(f2[i - 1], aK0[i - 1], j), aKA(i - 1, 0, !1, j), aK8(f2[i * (j - 1)], aK1[j - 1], i), aKE(f2[i * j - 1], i), aKA(0, j - 1, !0, i), aJy[i - 1] = aJy[0] = !
			0, aJz[j - 1] = aJz[0] = !0, aKJ(0, i, !0), aKJ(0, j, !1), ! function() {
				var aKL, a42;
				for (;;) {
					if (aKL = function() {
							var aA, aKL = aJv.length - 1;
							for (aA = aKL - 1; 0 <= aA; aA--) aJw[aA] > aJw[aKL] && (aKL = aA);
							return aKL
						}(), aJw[aKL] < 5) return;
					a42 = aJv[aKL] + bJ.dj(aJw[aKL], 2), (aJx[aKL] ? function(eh) {
						var ea, aKO, aA, aDs = 0,
							aKP = 0;
						for (; aKP < j - 1;) {
							for (aA = aDs + 1; aA < j; aA++)
								if (aJz[aA]) {
									aKP = aA;
									break
								} ea = aKP - aDs + 1, aK8(f2[eh + i * aDs], 0 === aDs ? aK0[eh] : aJu[aKO - 1] - aJu[aKO - 2], ea), aKE(f2[aKP * i + eh], ea), aKA(eh, aDs, !1, ea), aKO = ea, aDs = aKP
						}
						aJy[eh] = !0
					} : function(ej) {
						var ea, aKO, aA, aDs = 0,
							aKP = 0;
						for (; aKP < i - 1;) {
							for (aA = aDs + 1; aA < i; aA++)
								if (aJy[aA]) {
									aKP = aA;
									break
								} ea = aKP - aDs + 1, aK8(f2[ej * i + aDs], 0 === aDs ? aK1[ej] : aJu[aKO - 1] - aJu[aKO - 2], ea), aKE(f2[ej * i + aKP], ea), aKA(aDs, ej, !0, ea), aKO = ea, aDs = aKP
						}
						aJz[ej] = !0
					})(a42), aKJ(a42, aJv[aKL] + aJw[aKL] - a42, aJx[aKL]), aJw[aKL] = a42 - aJv[aKL] + 1
				}
			}(), eh = 0; eh < i; eh++)
			if (!aJy[eh])
				for (ej = 0; ej < j; ej++) aJz[ej] || ! function(eh, ej) {
					var value = f2[ej * i + eh - 1] + f2[(ej - 1) * i + eh],
						a5p = 2;
					aJy[eh + 1] && (a5p++, value += f2[ej * i + eh + 1]);
					aJz[ej + 1] && (a5p++, value += f2[(ej + 1) * i + eh]);
					f2[ej * i + eh] = bJ.dj(value, a5p)
				}(eh, ej)
	}, this.aJ6 = function() {
		return f2
	}, this.aIo = function() {
		f2 = null
	}
}

function aFK(et, eu) {
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

function aKR(f2, ea) {
	for (var ev = bJ.dj(f2 + 1, 2), aA = 0; aA < ea; aA++) ev = bJ.dj(ev + bJ.dj(f2, ev), 2);
	return ev
}

function aGh(f2, ea) {
	return f2 < 1 ? 0 : aKR(f2, ea)
}

function aKS(m7, m8, rx, a70, mK, mL, ry, sg) {
	return !(m7 + rx <= mK || m8 + a70 <= mL || mK + ry <= m7 || mL + sg <= m8)
}

function aKT(m7, m8, rx, a70, mK, mL, ry, sg) {
	return m7 <= mK && m8 <= mL && mK + ry <= m7 + rx && mL + sg <= m8 + a70
}

function vQ(f2) {
	return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
}

function bs() {
	this.dj = function(et, eu) {
		return Math.floor((et + .5) / eu)
	}, this.aKU = function(et, eu) {
		return Math.floor(et * (eu + .5))
	}, this.sqrt = function(f2) {
		return ~~Math.sqrt(f2 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p9 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKV = function(fH, fJ, fL) {
		return Math.max(Math.min(fH, fJ), fL)
	}, this.aKW = function(aKX, aKY, eh, ej) {
		eh -= aKX, aKX = ej - aKY, ej = 0;
		return 0 == eh ? ej = 0 <= aKX ? Math.PI : 0 : (ej = Math.atan(aKX / eh), ej += 0 < eh ? .5 * Math.PI : 1.5 * Math.PI), ej
	}, this.log2 = function(f2) {
		return Math.floor(!!f2 * (1 + Math.log2(f2 + .5)))
	}, this.log10 = function(f2) {
		return Math.floor(Math.log10(f2 + .5))
	}, this.aKa = function(aKb, aKc, aKd, aKe, aKf) {
		return aKd - aKf < aKb && aKb < aKd + aKf && aKe - aKf < aKc && aKc < aKe + aKf
	}, this.wO = function(hd, he) {
		return hd * hd + he * he
	}
}

function d7() {
	this.x = new aKg, this.rq = 0;
	var aKh = new Array(30);

	function aKl() {
		for (var ea = aKh.length, aA = 0; aA < ea; aA++) aKh[aA] = null
	}
	this.dU = function() {
		for (var aKi, aKj = document.body.firstChild; aKj;) {
			if (aKi = aKj.nextSibling, document.body.contains(aKj) && ("DIV" === aKj.tagName || "INPUT" === aKj.tagName || "BUTTON" === aKj.tagName)) try {
				document.body.removeChild(aKj)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKj = aKi
		}
	}, this.t = function(dx, aKk, a2n) {
		void 0 === aKk && (aKk = this.rq), bd.dc = !0, 0 === dx && (0 === aZ.a05() ? dx = 5 : z.a0.setState(13)), this.qs(), this.rq === dx && (aKk = aKh[dx].aKk, aKh[dx] = null), this.rq = dx;
		var kX = aKh[dx];
		if (!kX || 4 === dx || 7 === dx || 8 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx || 15 === dx || 18 === dx || 20 <= dx && dx <= 28) {
			if (0 === dx) return void aKl();
			1 === dx ? kX = new aKm : 2 === dx ? kX = new aKn : 3 === dx ? kX = new aKo : 4 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx ? kX = a2n : 5 === dx ? kX = new aKp : 6 === dx ? kX = new aKq : 7 === dx ? kX = new aKr(s.x
					.aKs) : 8 === dx ? kX = a2n : 12 === dx ? kX = new aKt : 14 === dx ? kX = new aKu : 15 === dx ? kX = new aKr(s.x.aKv) : 16 === dx ? kX = new aKw : 17 === dx ? kX = new aKx : 18 === dx ? kX = new aKy : 19 === dx ? kX =
				new aKz : 20 === dx ? kX = new aL0 : 21 === dx ? kX = new aL1 : 22 === dx ? kX = new aL2 : 23 === dx ? kX = new aL3 : 24 === dx ? kX = new aL4 : 25 === dx ? kX = new aL5 : 26 === dx ? kX = new aL6 : 27 === dx ? kX = new aL7 :
				28 === dx ? kX = new aL8 : 29 === dx && (kX = new aL9), kX.aKk = aKk, aKh[dx] = kX
		}
		kX.show(a2n)
	}, this.a0F = function() {
		this.hH() && this.aLA(this.aDO().aKk)
	}, this.aLA = function(dx) {
		this.hH() && (aKh[dx] ? (this.qs(), bd.dc = !0, this.rq = dx, aKh[dx].show()) : this.t(dx))
	}, this.qs = function() {
		this.hH() && aKh[this.rq].qs()
	}, this.w = function() {
		this.hH() && (aKh[this.rq].qs(), aKl(), this.rq = 0, z.a0.setState(13))
	}, this.tj = function() {
		var kX;
		this.hH() && (kX = aKh[this.rq]).tj && kX.tj()
	}, this.resize = function() {
		if (!this.hH()) return !1;
		aKh[this.rq].resize()
	}, this.gn = function(eh, ej) {
		var kX;
		this.hH() && (kX = aKh[this.rq]).gn && kX.gn(eh, ej)
	}, this.a0R = function(eh, ej) {
		var kX;
		this.hH() && (kX = aKh[this.rq]).a0R && kX.a0R(eh, ej)
	}, this.a0p = function() {
		var kX;
		this.hH() && (kX = aKh[this.rq]).a0p && kX.a0p()
	}, this.a0U = function(ks, kt, deltaY) {
		var kX;
		this.hH() && (kX = aKh[this.rq]).a0U && kX.a0U(ks, kt, deltaY)
	}, this.a0z = function(code) {
		var kX;
		return !!this.hH() && ((kX = aKh[this.rq]).a0z && kX.a0z(code), !0)
	}, this.ij = function() {
		var kX;
		this.hH() && (kX = aKh[this.rq]) && kX.ij && kX.ij()
	}, this.hH = function() {
		return 0 < this.rq
	}, this.aDO = function() {
		return aKh[this.rq]
	}, this.aCO = function(dx) {
		return aKh[dx]
	}, this.aLB = function() {
		return aKh
	}
}

function aKr(data) {
	var aLC, aLD;
	this.show = function() {
		data.aLE && bG.aM5("account", data.ro), aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(data.username, [new v("⬅️ " + L(36), function() {
		bG.clear(), s.a0F()
	}), new v(data.aLE ? "🔄 " + L(156) : L(157), function() {
		s.t(8, s.aDO().aKk, new rr(25, {
			rs: 0,
			ro: data.ro,
			rp: data.rp
		}))
	}, 0, 0, 1)]), aLD = new pU(aLC.ta, function() {
		var pW = [];
		pW.push(function() {
				var aLV = new pE,
					qP = (aLV.pH(L(206)), new qQ({
						value: data.username,
						dx: -1
					}));
				qP.e.readOnly = !0, aLV.pS(qP), aLV.pS(new r6([new v(L(175), function(e) {
					return b8.pb.a2E(qP.e), b8.pb.a2F(e), !0
				}).button])), data.aLE || aLV.pJ(L(207));
				return aLV
			}()),
			function(pW) {
				var aLV, pK, aAb, aLo, aLe;
				data.aLE || ((aLV = new pE).pH(L(208)), (pK = aLV.pJ(data.aLn.length + " / 160")).style.textAlign = "center", aAb = !0, (aLo = new ts(0, 1, function(e) {
					e = e.target.value.length;
					pK.textContent = e + " / 160", 160 < e ? aAb && (aAb = !1, aLe.pw(1), aLe.button.style.color = b9.mh) : aAb || (aAb = !0, aLe.pw(0), aLe.button.style.color = b9.nd)
				})).e.rows = 6, aLo.e.style.fontSize = "1em", aLo.tz(data.aLn), aLV.pS(aLo), aLe = new v(L(209), function() {
					if (!aAb) return !0;
					s.t(8, s.aDO().aKk, new rr(29, {
						rs: 1,
						pI: aLo.u1().substring(0, 160)
					}))
				}, 0, 0, 1), aLV.pS(new r6([aLe.button])), 0 !== data.aLp && (aLV.pS(new r6([new v(L(1 === data.aLp ? 211 : 212), function() {
					s.t(8, s.aDO().aKk, new rr(29, {
						rs: 0,
						pI: ""
					}))
				}, 0, 0, 1).button])), aLV.pJ(1 === data.aLp ? L(213, [data.aLr - 1]) : L(214, [data.aLr - 1]))), aLV.pJ(L(210, [data.aLq])), pW.push(aLV))
			}(pW),
			function(pW) {
				var aLV;
				data.aLE && 0 !== data.aLp && ((aLV = new pE).pH(L(215)), aLV.pL(data.aLn), aLV.pS(new r6([new v(L(216, 0, "Report"), function(e) {
					return ay.x.aLa(0) && (b8.pb.a2F(e), ay.aLc.aLs({
						rs: 5,
						ro: data.ro
					})), !0
				}, 0, 0, 1).button])), pW.push(aLV))
			}(pW), pW.push(function() {
				var aLV = new pE,
					aLW = (aLV.pH(L(158)), [L(159), L(160), L(161), L(162), L(163)]),
					dw = data.aLX;
				aLV.pN(L(164) + b8.zX.a32(data.un, .01, 2) + "<br>" + L(165) + (dw + 1) + " / " + data.um + "<br>" + L(166) + aLW[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : dw < 1e3 ? 3 : 4]), data.aLE || (aLV.pJ(L(167)), aLV.pJ(L(168)),
					aLV.pJ(L(169)));
				return aLV
			}()), data.aLE && pW.push(function() {
				var aLV = new pE,
					qP = (aLV.pH(L(170)), new qQ({
						value: bh.e7.data[147].value,
						dx: -1
					}, 1, void 0, function(e) {
						bh.r3.r4(147, aLY(e.target.value))
					})),
					aLZ = (aLV.pS(qP), new v(L(14), function(e) {
						return qP.e.readOnly && ay.x.aLa(0) && (b8.pb.a2F(e), aLb(), ay.aLc.aLd({
							rs: 0,
							ro: data.ro,
							value: parseInt(bh.e7.data[147].value, 10)
						})), !0
					}, 1)),
					aLe = new v(L(171), function(e) {
						return e.textContent === L(171) ? (e.textContent = L(172), qP.e.readOnly = !0, aLZ.pw(0), aLZ.button.style.color = b9.nd, bh.r3.r4(147, qP.e.value), aLY(bh.e7.data[147].value)) : aLb(), !0
					}),
					pK = (aLV.pS(new r6([aLe.button])), aLV.pJ()),
					aLY = function(f2) {
						f2 = b8.fv.a2k(f2, 2, 1e6);
						var aLf = Math.max(1, 1 + Math.floor(.01 * (f2 - 100)));
						pK.textContent = L(173, [f2, bh.e7.data[105].value, aLf, data.ro, f2 - aLf])
					},
					aLb = function() {
						aLe.button.textContent = L(171), qP.e.readOnly = !1, aLZ.pw(1), aLZ.button.style.color = b9.mh
					};
				return aLY(bh.e7.data[147].value), aLV.pS(new r6([aLZ.button])), aLV
			}());
		pW.push(function() {
			var aLV = new pE,
				qP = (aLV.pH(L(174)), new qQ({
					value: data.ro,
					dx: -1
				}));
			return qP.e.readOnly = !0, aLV.pS(qP), aLV.pS(new r6([new v(L(175), function(e) {
				return b8.pb.a2E(qP.e), b8.pb.a2F(e), !0
			}).button])), aLV
		}()), data.aLE || (pW.push(function() {
			var aLV = new pE,
				aLg = (aLV.pH(L(176)), new qQ(bh.e7.data[106]));
			return aLg.e.readOnly = !0, aLg.e.type = "password", aLV.pS(aLg), aLV.pS(new r6([new v(L(177), function(e) {
				return e.textContent === L(177) ? (e.textContent = L(178), aLg.e.type = "text") : (e.textContent = L(177), aLg.e.type = "password"), !0
			}).button, new v(L(175), function(e) {
				return b8.pb.a2E(aLg.e), b8.pb.a2F(e), !0
			}).button])), aLV.pS(new r6([new v(L(179), function() {
				s.t(8, s.aDO().aKk, new rr(15))
			}).button])), aLV.pH(L(180), "0.8em"), aLV.pJ(L(181)), aLV.pJ(L(182)), aLV.pJ(L(183)), aLV
		}()), pW.push(function() {
			var aLV = new pE;
			return aLV.pH(L(184)), aLV.pS(new r6([new v(L(185), function() {
				s.t(6, s.aDO().aKk)
			}).button])), aLV.pS(new r6([new v(L(186), function() {
				bh.r3.r4(105, ""), s.t(8, s.aDO().aKk, new rr(18))
			}).button])), aLV.pS(new r6([new v(L(187) + bh.e7.data[105].value, function() {
				s.t(4, 0, new u(L(188), L(189), !0, [new v("⬅️ " + L(36), function() {
					s.t(7, s.aCO(7).aKk)
				})]))
			}, b9.nM).button])), aLV
		}()), pW.push(function() {
			function aLi(dx) {
				for (var aA = 0; aA < 2; aA++) aLh[aA].pw(0 === dx ? b9.mt : 0 === aA ? b9.nM : b9.n4)
			}
			var pQ, aLh, aLV = new pE;
			aLV.pH(L(190)), aLV.pJ(L(191)), bh.x.uX();
			return aLh = [new v(L(192), function() {
				var dx = Math.min(bh.e7.data[117].value, pQ.pR.length - 1);
				if (!(dx < 1)) {
					pQ.pR[dx].remove(), pQ.pR.splice(dx, 1);
					for (var aA = dx; aA < pQ.pR.length; aA++) pQ.pR[aA].name = "" + aA;
					bh.x.ua(dx), dx = bh.e7.data[117].value, pQ.pR[dx].textContent = pQ.pR[dx].textContent.replace("⚪", "🟢"), aLi(dx)
				}
			}, b9.mt), new v(L(193), function() {
				var dx = Math.min(bh.e7.data[117].value, pQ.pR.length - 1);
				dx < 1 || (dx = bh.x.ub(dx), bh.r3.r4(105, dx.ro), bh.r3.r4(106, dx.password), s.t(8, s.aDO().aKk, new rr(18)))
			}, b9.mt)], (pQ = new tP(bh.e7.data[117], aLi)).pR[0].style.marginTop = "0.5em", aLV.pP(pQ), aLV.pS(new r6([aLh[1].button])), aLV.pS(new r6([aLh[0].button])), aLV
		}()));
		return pW.push(function() {
				var aLV = new pE,
					aLW = (aLV.pH(L(197)), [L(198), L(199), L(200), L(201)]),
					dw = data.aLj;
				return aLV.pN(L(202) + (data.zK / 100).toFixed(2) + "<br>" + L(165) + (dw + 1) + " / " + data.um + "<br>" + L(166) + aLW[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : 3]), aLV
			}()), pW.push(function() {
				var aLV = new pE;
				return aLV.pH(L(194)), aLV.pN(L(195) + b8.zX.a32(data.uj, .1, 1) + "<br>" + L(165) + (data.uk + 1) + " / " + data.um + "<br>" + L(196) + data.ul), aLV
			}()),
			function(pW) {
				var aLV = new pE,
					aLt = data.uq,
					aLu = (aLV.pH(L(217)), aLV.pN(L(218, [aLt ? "[" + data.uo + "]" : "-"])), aLV.pN(L(219, [b8.zX.a32(aLt, .01, 2)])), aLV.pN(L(220, [data.us + 1 + " / " + data.um])), data.ut),
					aLv = (aLV.pN(L(221, [b8.zX.a32(aLu, .1, 1)])), data.uv);
				aLV.pN(L(222, [aLv])), aLV.pN(L(223, [b8.zX.a32(aLu / Math.max(aLv, 1), .1, 2)])), aLt = data.ur, aLV.pH(L(224), "0.8em"), aLV.pN(L(218, [aLt ? "[" + data.up + "]" : "-"])), aLV.pN(L(219, [b8.zX.a32(aLt, .01, 2)])), aLu = data
					.uu, aLV.pN(L(221, [b8.zX.a32(aLu, .1, 1)])), aLv = data.uw, aLV.pN(L(222, [aLv])), aLV.pN(L(223, [b8.zX.a32(aLu / Math.max(aLv, 1), .1, 2)])), data.aLE || (aLV.pJ(L(225)), aLV.pJ(L(226)));
				pW.push(aLV)
			}(pW),
			function(pW) {
				var aLV = new pE;
				aLV.pH(L(227)), aLV.pN(L(202) + (data.aLw / 10).toFixed(1) + "<br>" + L(166) + (data.aLx.length ? L(228, [data.aLx]) : L(229))), data.aLE ? (aLV.pS(new r6([new v(L(230), function(e) {
					return ay.x.aLa(0) && (b8.pb.a2F(e), ay.aLc.aLs({
						rs: 4,
						ro: data.ro
					})), !0
				}, 0, 0, 1).button])), aLV.pJ(L(231)), aLV.pJ(L(232))) : aLV.pJ(L(233));
				pW.push(aLV)
			}(pW), pW.push(function() {
				var aLV = new pE;
				if (aLV.pH(L(203)), aLV.pN(L(204) + data.aLk + "<br>" + L(165) + (data.aLl + 1) + " / " + data.um + "<br>" + L(166) + bm.dz(data.aLl)), data.aLE) {
					var qP = new qQ({
							value: bh.e7.data[157].value,
							dx: -1
						}, 1, void 0, function(e) {
							bh.r3.r4(157, aLY(e.target.value))
						}),
						aLe = (qP.e.style.marginTop = "0.6em", aLV.pS(qP), new v(L(171), function(e) {
							return e.textContent === L(171) ? (e.textContent = L(172), qP.e.readOnly = !0, aLm[0].pw(0), aLm[1].pw(0), aLm[0].button.style.color = b9.nd, aLm[1].button.style.color = b9.nd, aLY(bh.e7.data[157]
								.value)) : aLb(), !0
						})),
						aLm = (aLV.pS(new r6([aLe.button])), [new v("−", function(e) {
							return qP.e.readOnly && ay.x.aLa(0) && (b8.pb.a2F(e), aLb(), ay.aLc.aLd({
								rs: 2,
								ro: data.ro,
								value: bJ.p9(parseInt(bh.e7.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qP.e.readOnly && ay.x.aLa(0) && (b8.pb.a2F(e), aLb(), ay.aLc.aLd({
								rs: 1,
								ro: data.ro,
								value: bJ.p9(parseInt(bh.e7.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pK = aLV.pJ(),
						aLY = function(f2) {
							return f2 = b8.fv.a2k(f2, 3, 32767), pK.textContent = L(205, [f2 - 1, f2, bh.e7.data[105].value]), f2
						};
					aLV.pS(new r6([aLm[0].button, aLm[1].button]));
					for (var aA = 0; aA < 2; aA++) aLm[aA].button.style.fontSize = "1.6em";
					var aLb = function() {
						aLe.button.textContent = L(171), qP.e.readOnly = !1, aLm[0].pw(1), aLm[1].pw(1), aLm[0].button.style.color = b9.mh, aLm[1].button.style.color = b9.mh
					};
					aLY(bh.e7.data[157].value)
				}
				return aLV
			}()),
			function(pW) {
				var aLV, a2D;
				data.aLE && !data.aLy || (0 === z.id || data.aLE || data.aLy) && ((aLV = new pE).pH("Patreon"), !data.aLE && data.aLz ? aLV.pS(new r6([new v(L(177), function() {
					ay.aLc.aLs({
						rs: 7,
						ro: data.ro
					}), data.aLz = 0, s.t(7)
				}).button])) : data.aLy ? (aLV.pN(L(234, [(data.aM0 / 100).toFixed(2)]) + "<br>" + L(235, [1 + data.aM1 + " / " + data.aM2]) + "<br>" + L(236, [data.aM3 ? L(237) : L(238)])), data.aLE || aLV.pS(new r6([new v(L(239),
					function() {
						ay.aLc.aLs({
							rs: 8,
							ro: data.ro
						}), data.aLy = 0, bh.r3.r4(160, 0), s.t(7)
					}).button]))) : (aLV.pN(L(240), "0.75em").style.marginBottom = "0.3em", aLV.pN("  • " + L(241), "0.75em").style.whiteSpace = "pre", aLV.pN("  • " + L(242), "0.75em").style.whiteSpace = "pre", aLV.pN("  • " + L(
						243), "0.75em").style.whiteSpace = "pre", aLV.pN(L(244), "0.75em").style.marginTop = "1.0em", aLV.pN(L(245), "0.75em").style.marginTop = "1.0em", aLV.pN("<a href='" + bI.aM4 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a2D = "https://www.patreon.com/oauth2/authorize?state=" + data.ro +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aLV.pN(L(246), "0.75em").style.marginTop = "1.0em", aLV.pN("<a href='" + a2D +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aLE || (aLV.pS(new rG), aLV.pS(new r6([new v(L(178), function() {
						ay.aLc.aLs({
							rs: 6,
							ro: data.ro
						}), data.aLz = 1, s.t(7)
					}).button])), aLV.pN(L(247), "0.75em").style.marginTop = "0.75em")), pW.push(aLV))
			}(pW), pW
	}())
}

function aL2() {
	var aM6, aM7, aM8, pW;

	function aM9() {
		aMB(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.aIncomeType ? (b8.pk.a1c(aM8.u1(), aC.data.aIncomeData, 255), b8.pk.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(248), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), aLV.pP(new tP({
			tT: [L(250), L(251), L(252)],
			value: aC.data.aIncomeType
		}, function(dx) {
			aMB(), 2 !== dx || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eX)), aC.data.aIncomeType = dx, s.t(22)
		})), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV;
		1 === aC.data.aIncomeType && ((aLV = new pE).pH("Value"), aLV.pS(new qQ({
			dx: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pW.push(aLV))
	}(pW), function(pW) {
		var aLV;
		2 === aC.data.aIncomeType && ((aLV = new pE).pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.aIncomeData, 4)), aLV.pS(aM8), pW.push(aLV))
	}(pW), pW))
}

function aL5() {
	var aM6, aM7, aM8;

	function aM9() {
		aMB(), 3 !== aC.data.botDifficultyType || b8.pk.a1Q(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		3 === aC.data.botDifficultyType && b8.pk.a1c(aM8.u1(), aC.data.botDifficultyData, aD.k0.length - 1)
	}

	function aMG(pW, dx) {
		var aLV = new pE,
			value = (aLV.pH(dx < 0 ? L(61) : L(60) + " " + be.zE[dx % 9]), 0 <= dx && (aLV.pN(L(255) + ": " + aC.data.teamPlayerCount[dx]).style.marginBottom = "1em"), dx < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dx]);
		aLV.pP(new tP({
			tT: aD.k0,
			value: value
		}, function(hN) {
			dx < 0 ? aC.data.botDifficultyValue = hN : aC.data.botDifficultyTeam[dx] = hN
		})), pW.push(aLV)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(61), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, function() {
		var pW = [];
		if (function(pW) {
				var aLV = new pE,
					tT = (aLV.pH(L(249)), [L(251), L(253), L(254), L(252)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tT.splice(2, 1));
				aLV.pP(new tP({
					tT: tT,
					value: value
				}, function(dx) {
					aMB(), aC.data.botDifficultyType = dx, 0 === aC.data.gameMode && 2 === dx && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eX)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pW.push(aLV)
			}(pW), 0 === aC.data.botDifficultyType) aMG(pW, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aMG(pW, aA);
		else 3 === aC.data.botDifficultyType && ! function(pW) {
			var aLV = new pE;
			aLV.pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.botDifficultyData, 8)), aLV.pS(aM8), pW.push(aLV)
		}(pW);
		return pW
	}())
}

function aMH(data) {
	var aLC, aMI, aMJ, aMK, aML, aMM, aMN, colors, aMO, aMP, aMQ = 0,
		aMR = 0,
		aMS = !1,
		aMT = !1,
		aMU = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMy(ks, kt) {
		! function(ks, kt) {
			return aMI < ks && ks < aMI + aMK && aMJ < kt && kt < aMJ + aML
		}(aMQ = ks, aMR = kt) ? (aMS && (bd.dc = !0), aMS = !1) : (aMS = !0, bd.dc = !0)
	}
	this.show = function() {
		aMT = bh.e7.data[127].value, aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize();
		var ev = h.k,
			ti = aLC.tf(),
			aMd = ev * ti.th,
			ev = ev * ti.qv;
		aMM = b8.pb.sG(.06), aMN = b8.pb.sG(.04), aMI = b8.pb.sG(.06), aMJ = ev + aMM, aMK = h.i - aMI - aMN, aML = aMd + ev - aMJ - aMN
	}, this.tj = function() {
		aLC.tj(),
			function() {
				var aA, aMa, g2, eh, et, g = data.data,
					aMh = 1,
					aMi = .125,
					aMj = aMT ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aMa = g[aA].aMa, g2 = aMa.length, aMh = Math.max(g2, aMh), et = 0; et < g2; et++) aMi = Math.max(aMa[et], aMi), aMj = Math.min(aMa[et], aMj);
				var m8 = aMJ + aML,
					wx = aML / (aMi - aMj),
					ww = 1 / (aMh - 1);
				for (tk.lineWidth = ba.xt, aA = 0; aA < g.length; aA++) {
					for (aMa = g[aA].aMa, g2 = aMa.length, eh = aMI, tk.beginPath(), tk.moveTo(eh + aMK, m8 - wx * (aMa[g2 - 1] - aMj)), et = g2 - 2; 0 <= et; et--) tk.lineTo(eh + ww * et * aMK, m8 - wx * (aMa[et] - aMj));
					tk.strokeStyle = colors[aA], tk.stroke()
				}(function(aMj, aMi, m8, wx) {
					tk.font = b8.pb.rQ(0, .25 * aMI), b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 2), tk.fillStyle = colors[0];
					for (var eh = .92 * aMI, aA = 0; aA < 3; aA++) {
						var f2 = aMj + aA * (aMi - aMj) / 2;
						tk.fillText((f2 / 1e3).toFixed(3), eh, m8 - wx * (f2 - aMj))
					}
				})(aMj, aMi, m8, wx),
				function(aMh) {
					var ej = aMJ + aML + .15 * aMN;
					tk.font = b8.pb.rQ(0, Math.min(.4 * aMN, .028 * h.i)), b8.pb.textBaseline(tk, 0), b8.pb.textAlign(tk, 2), tk.fillStyle = colors[0], tk.fillText(b8.a1H.a24(aMO), aMI + aMK, ej), b8.pb.textAlign(tk, 0), tk.fillText(b8.a1H.a24(
						new Date(aMP.getTime() - 6e4 * (aMh - 1) * aMU[data.aMZ])), aMI, ej)
				}(aMh),
				function(aMh, aMj, aMi) {
					if (aMS && !(aMh < 2)) {
						for (var a78, dx = (aMQ - aMI) / aMK * (aMh - 1), aMm = Math.floor(dx), aMn = Math.floor(1 + dx), aMo = dx - aMm, aMp = 1e5, aMq = -1, aMr = -1, aMs = aMi - (aMi - aMj) * (aMR - aMJ) / aML, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAn, aMa = g[aA].aMa;
							aMa.length <= aMn || (aMa = aMa[aMm] + aMo * (aMa[aMn] - aMa[aMm]), (aAn = Math.abs(aMs - aMa)) < aMp && (aMp = aAn, aMq = aA, aMr = aMa))
						} - 1 !== aMq && (aMi = aMJ + aML - (aMr - aMj) / (aMi - aMj) * aML, tk.lineWidth = .5 * ba.xt, tk.strokeStyle = colors[aMq], tk.beginPath(), tk.moveTo(aMI, aMi), tk.lineTo(aMQ, aMi), tk.lineTo(aMQ, aMJ + aML), tk
						.stroke(), tk.beginPath(), tk.arc(aMQ, aMi, .1 * aMI, 0, 2 * Math.PI), tk.fillStyle = colors[aMq], tk.fill(), aMj = aMJ + aML + .15 * aMN, b8.pb.textAlign(tk, 1), a78 = aMh - 2 < dx ? (a78 = aMP.getTime() - 6e4 * aMU[
								data.aMZ], new Date(a78 + (dx - (aMh - 2)) * (aMO.getTime() - a78))) : new Date(aMP.getTime() - 6e4 * (aMh - dx - 1) * aMU[data.aMZ]), aMh = b8.a1H.a24(a78), dx = b8.pb.measureText(aMh), a78 = bJ.p9(aMQ, aMI +
								.5 * dx, aMI + aMK - .5 * dx), tk.fillStyle = b8.color.mZ(70, 50, 20), tk.fillRect(a78 - .52 * dx, aMJ + aML, 1.04 * dx, .55 * aMN), tk.fillStyle = colors[0], tk.fillText(aMh, a78, aMj), tk.font = b8.pb.rQ(0,
								.25 * aMI), b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 2), a78 = .92 * aMI, aMh = (aMr / 1e3).toFixed(3), dx = b8.pb.measureText(aMh), aMj = a78 - 1.04 * dx, tk.fillStyle = b8.color.mZ(70, 50, 20), tk
							.fillRect(aMj, aMi - .1625 * aMI, aMI - aMj, .275 * aMI), tk.fillStyle = colors[aMq], tk.fillText(aMh, a78, aMi))
					}
				}(aMh, aMj, aMi)
			}(), tk.lineWidth = ba.xt, tk.strokeStyle = b9.mh, tk.beginPath(), tk.moveTo(aMI, aMJ), tk.lineTo(aMI, aMJ + aML), tk.lineTo(aMI + aMK, aMJ + aML), tk.stroke();
		var aA, fontSize = .5 * aMM,
			g = (tk.font = b8.pb.rQ(0, fontSize), b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 0), data.data),
			ea = g.length,
			ej = aMJ - .5 * aMM,
			pI = "";
		for (aA = 0; aA < ea; aA++) pI += g[aA].name + "  ";
		pI = pI.trim();
		var aMv = b8.pb.measureText(pI),
			eh = .5 * (h.i - aMv);
		for (aMv > h.i && (eh = 0, tk.font = b8.pb.rQ(0, h.i / aMv * fontSize)), aA = 0; aA < ea; aA++) tk.fillStyle = colors[aA], tk.fillText(g[aA].name, eh, ej), eh += b8.pb.measureText(g[aA].name + "  ")
	}, this.gn = function(ks, kt) {
		aMy(ks, kt)
	}, this.a0R = function(ks, kt) {
		aMy(ks, kt)
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	};
	var aA, di, a22, hN, ed = data.data,
		ea = ed.length,
		max = 1;
	for (aA = 0; aA < ea; aA++) max = Math.max(max, ed[aA].aMa.length);
	for (aA = 0; aA < ea; aA++)
		for (; ed[aA].aMa.length < max;) ed[aA].aMa.unshift(0);
	di = new Date, a22 = 6e4 * di.getTimezoneOffset(), hN = di.getTime() - a22, aMO = new Date(hN), 6 === data.aMZ ? function(di, a22) {
		var aMc = di.getUTCFullYear(),
			di = di.getUTCMonth() + 1;
		aMP = di < 12 ? new Date(Date.UTC(aMc, di) - a22) : new Date(Date.UTC(aMc + 1, 0) - a22)
	}(di, a22) : (a22 = 6e4 * aMU[data.aMZ], aMP = data.aMZ <= 4 ? new Date(hN + a22 - di.getTime() % a22) : new Date(hN + a22 - (di.getTime() + 2592e5) % a22)), hN = b8.color, colors = [b9.mh, hN.mZ(255, 0, 0), hN.mZ(0, 200, 0), hN.mZ(80, 80,
		255), hN.mZ(255, 255, 0), hN.mZ(255, 0, 255), hN.mZ(0, 255, 255), hN.mZ(255, 140, 0), hN.mZ(128, 128, 128), hN.mZ(0, 255, 140)], aLC = new tU(L(256) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aMZ] + ", " + b8.a1H.a21(aMO), [
		new v("⬅️ " + L(36), function() {
			s.x.aAh()
		}), new v(L(257), function() {
			s.t(14)
		})
	], !1)
}

function aKu() {
	var aLC, aLD, pW;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(L(258), [new v("⬅️ " + L(36), function() {
		s.aLA(13)
	})]), aLD = new pU(aLC.ta, ((pW = []).push(function() {
		var aLV = new pE,
			aLe = (aLV.pH(L(259)), aLV.pJ(L(260)), new v(L(261), function() {
				bh.r3.r4(130, 0), s.x.aN3()
			}, 0, 0, 1)),
			qP = new qQ(bh.e7.data[126], 0, function() {
				aLe.button.click()
			});
		return aLV.pS(qP), qP.e.placeholder = "a,b,c", qP.e.style.marginTop = "0.5em", aLV.pS(new r6([aLe.button])), aLV
	}()), pW.push(function() {
		var aLV = new pE,
			aLe = new v(L(261), function() {
				bh.r3.r4(130, 1), s.x.aN3()
			}, 0, 0, 1),
			aN4 = new qQ(bh.e7.data[129], 1, function() {
				aN4.e.focus()
			}),
			aN5 = new qQ(bh.e7.data[128], 1, function() {
				aLe.button.click()
			});
		return aLV.pH(L(262)), aLV.pS(aN5), aN5.e.style.marginBottom = "0.5em", aLV.pH(L(263)), aLV.pS(aN4), aLV.pS(new r6([aLe.button])), aLV
	}()), pW.push(function() {
		var aLV = new pE;
		return aLV.pH(L(264)), bh.e7.data[125].tT = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLV.pP(new tP(bh.e7.data[125])), aLV
	}()), pW.push(function() {
		var aLV = new pE;
		return aLV.pH(L(265)), aLV.pS(new r0(bh.e7.data[127], L(266))), aLV
	}()), pW))
}

function aKt() {
	var aLC, aN6, aMK, aN7, aN8, aN9, colors = [0, 0, 0],
		aNA = -1;

	function aND(aA) {
		var aNE = aN6.ej + aA * (ba.gap + aN9);
		tk.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", tk.fillRect(aN7, aNE, colors[aA] * aN8, aN9), tk.strokeStyle = b9.mh, tk.strokeRect(aN7, aNE, aN8,
			aN9), tk.fillStyle = b9.mh, tk.font = b8.pb.rQ(0, .32 * aN9), b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 0), tk.fillText(L(0 === aA ? 269 : 1 === aA ? 270 : 271) + aNB(aA), aN7 + ba.gap, aNE + .53 * aN9)
	}

	function aNB(aA, aNF) {
		return aNF = aNF || 256, bJ.p9(Math.floor(aNF * colors[aA]), 0, aNF - 1)
	}

	function a0v(ks, kt) {
		return !(ks < aN7 || kt < aN6.ej || ks > aN6.eh + aN6.i || kt > aN6.ej + aN6.j)
	}
	this.show = function() {
		var f2 = bh.e7.data[121].value;
		colors[0] = (f2 >> 12) / 63, colors[1] = (f2 >> 6 & 63) / 63, colors[2] = (63 & f2) / 63, aLC.show(), this.resize()
	}, this.qs = function() {
		bh.r3.r4(121, (aNB(0, 64) << 12) + (aNB(1, 64) << 6) + aNB(2, 64)), aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aN6.resize();
		var ev = h.k,
			ti = aLC.tf(),
			aNC = (aN6.ej = Math.max(aN6.ej, ev * ti.qv + ba.gap), ev * ti.th - 2 * ba.gap);
		aN6.j = Math.min(aN6.j, aNC), aN6.i = 2 * aN6.j, aN6.ej = ev * ti.qv + .5 * (ev * ti.th - aN6.j), aN6.eh = .5 * (h.i - aN6.i), aMK = .25 * aN6.i, aN7 = aN6.eh + aMK + ba.gap, aN8 = aN6.i - aMK - ba.gap, aN9 = (aN6.j - 2 * ba.gap) / 3
	}, this.tj = function() {
		var dw, sF, eu;
		aLC.tj(), tk.lineWidth = ba.xt, dw = aNB(0), sF = aNB(1), eu = aNB(2), tk.fillStyle = "rgb(" + dw + "," + sF + "," + eu + ")", tk.fillRect(aN6.eh, aN6.ej, aMK, aN6.j), tk.strokeStyle = b9.mh, tk.strokeRect(aN6.eh, aN6.ej, aMK, aN6.j), tk
			.fillStyle = dw + sF + eu < 306 && sF < 150 ? b9.mh : b9.mY, b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 1), tk.font = b8.pb.rQ(0, .1 * aN6.j), tk.rotate(-Math.PI / 2), tk.fillText(L(268), -aN6.ej - .5 * aN6.j, aN6.eh + .5 * aMK),
			tk.setTransform(1, 0, 0, 1, 0, 0), aND(0), aND(1), aND(2)
	}, this.gn = function(ks, kt) {
		a0v(ks, kt) && (aNA = bJ.p9(Math.floor((kt - aN6.ej) / (aN9 + .75 * ba.gap)), 0, 2), colors[aNA] = bJ.p9((ks - aN7) / aN8, 0, 1), bd.dc = !0)
	}, this.a0R = function(ks) {
		-1 !== aNA && (colors[aNA] = bJ.p9((ks - aN7) / aN8, 0, 1), bd.dc = !0)
	}, this.a0U = function(ks, kt, deltaY) {
		a0v(ks, kt) && (ks = bJ.p9(Math.floor((kt - aN6.ej) / (aN9 + .75 * ba.gap)), 0, 2), colors[ks] = bJ.p9(colors[ks] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0p = function() {
		0 <= aNA && (aNA = -1, bd.dc = !0)
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(L(267), [new v("⬅️ " + L(36), function() {
		s.x.aAh()
	})], !1), aN6 = new qD([.5, .25], [.5, .5], 1)
}

function aL1() {
	var aM6, aM7, aM8, qB;

	function aM9() {
		aMB(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aLB()[19] = null, s.a0F()
	}

	function aNG() {
		aMB(), s.t(21)
	}

	function aMB() {
		1 === aC.data.gameMode ? aC.a3P.a3T() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pk.a1c(aM8.u1(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, qB = [new v("⬅️ " + L(36), aM9)], 1 === aC.data.gameMode && qB.push(new v(L(272), aNG, 1, 1)), aM6 = new tU(L(273), qB), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), 0 === aC.data.gameMode && (aLV.pP(new tP({
			tT: [L(274), L(252)],
			value: aC.data.colorsType
		}, function(dx) {
			aMB(), aC.data.colorsType = dx, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eX || (aC.data.colorsData = new Uint32Array(aC.eX)), s.t(21)
		})), aLV.pS(new rG));
		aLV.pS(new r0({
			value: aC.data.selectableColor
		}, L(275), function(value) {
			aC.data.selectableColor = value
		})), pW.push(aLV)
	}(qB = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pW) {
		var aLV = new pE;
		aLV.pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.colorsData, 1)), aLV.pS(aM8), pW.push(aLV)
	}(qB) : (aC.a3P.a3T(), qB.push(function() {
		var aLV = new pE;
		aLV.pH(L(255));
		for (var aA = 0; aA < be.zE.length; aA++) {
			var hN = (aA + 1) % be.zE.length,
				e = aLV.pN((0 == hN ? "" : "Team ") + be.zE[hN]);
			aA && (e.style.marginTop = "0.5em"), aLV.pS(new qQ({
				dx: -1,
				value: aC.data.teamPlayerCount[hN]
			}, 1, 0, function(e) {
				aM6.tb[1].pw(0);
				var playerCount = bJ.p9(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aNI] = playerCount
			})).e.aNI = hN
		}
		return aLV
	}())), qB))
}

function rr(id, a2n, aNJ) {
	var aLC, aNK;

	function aNP() {
		aNK.pX.innerHTML += "<br>" + L(278)
	}

	function aNO() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.r3.r4(110, bD.rt.ru(bD.rt.rv(8))), ay.aLc.aNd()
	}
	this.aNL = !0, this.aNM = id, this.show = function() {
		aLC.show(), this.resize(), 15 === id ? (ay.x.aNN(id) ? aNO : aNP)() : 16 === id ? ay.x.aNN(id) ? ay.aAe.aNQ(2) : aNP() : 17 === id ? ay.x.aNN(id) ? ay.aAe.aNQ(3) : aNP() : 18 === id ? (ay.x.close(0, 3253), ay.x.aEC(0, id), aNP()) : 21 ===
			id ? ay.x.aNN(id) ? ay.aNR.aNS(a2n.sA, a2n.sB, a2n.sC) : aNP() : 22 === id ? ay.x.aNN(id) ? ay.aNR.aNT(a2n.sA, a2n.aNU, a2n.aNV) : aNP() : 23 === id ? ay.x.aNN(id) ? ay.aNR.aNW(a2n.aMZ, a2n.za) : aNP() : 24 === id ? ay.x.aNN(id) ? ay
			.aNR.aNX(a2n.aMZ, a2n.sB, a2n.sC) : aNP() : 25 === id ? ay.x.aNN(id) ? ay.aLc.aLs(a2n) : aNP() : 28 === id ? ay.x.aNN(id) ? ay.aNR.aNY(a2n.sA, a2n.aNU, a2n.aNV) : aNP() : 29 === id && (ay.x.aNN(id) ? ay.aLc.aNZ(a2n) : aNP())
	}, this.aNa = function() {
		15 === id ? aNO() : 16 === id ? ay.aAe.aNQ(2) : 17 === id ? ay.aAe.aNQ(3) : 18 === id ? s.t(8, this.aKk, new rr(16)) : 21 === id ? ay.aNR.aNS(a2n.sA, a2n.sB, a2n.sC) : 22 === id ? ay.aNR.aNT(a2n.sA, a2n.aNU, a2n.aNV) : 23 === id ? ay.aNR
			.aNW(a2n.aMZ, a2n.za) : 24 === id ? ay.aNR.aNX(a2n.aMZ, a2n.sB, a2n.sC) : 25 === id ? ay.aLc.aLs(a2n) : 28 === id ? ay.aNR.aNY(a2n.sA, a2n.aNU, a2n.aNV) : 29 === id ? ay.aLc.aNZ(a2n) : 1e3 === id && (this.aNM = id = 25, ay.aLc.aLs(
				a2n))
	}, this.aNb = function(code, bp, data) {
		!bp && code !== id || (15 === code || 16 === code ? s.t(7, this.aKk) : 17 === code ? (ay.x.close(0, 3252), bh.x.ua(0), bh.e7.data[117].tT && 0 < bh.e7.data[117].tT.length ? (bp = bh.x.ub(0), bh.r3.r4(105, bp.ro), bh.r3.r4(106, bp
			.password), s.t(8, this.aKk, new rr(16))) : (bh.r3.r4(105, ""), s.x.aAh())) : 21 === code ? s.t(10, this.aKk, new aNc(data)) : 23 === code ? s.t(13, 0, new aMH({
			data: data,
			aMZ: a2n.aMZ
		})) : 25 === code && (s.x.aKv.ro = a2n.ro, s.t(15, this.aKk)))
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aNK.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(L(276), [new v("⬅️ " + L(36), function() {
		aNJ ? s.t(29) : s.x.aAh()
	})]), aNK = new r5(aLC.ta, L(277))
}

function aKz() {
	var aM6, aM7, pW;

	function aNg() {
		var g2;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3P.a3T()), g2 = b8.pk.a1W(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g2) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aM9() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNi(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNi() {
		b7.or.dU(), bh.r3.r4(156, b7.a3f.yL())
	}

	function aNe() {
		aC.data.isReplay = 0, aNi(), aC.a3P.a3q(), aZ.aEN(), aC.a3P.a3n(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vX : null, aC.a3S(), aC.a3R = 1
	}

	function aNw() {
		aNg();
		for (var g = [aNl(), aNm(), aNn()], aA = 3; aA < 6; aA++) aM7.pX.removeChild(aM7.pY[aA].pG), aM7.pY[aA] = g[aA - 3], aM7.pX.appendChild(aM7.pY[aA].pG);
		aM7.resize()
	}

	function aNl() {
		var aNx, aLV = new pE;
		return aLV.pH(L(273)), aNx = 0 === aC.data.gameMode ? [L(274), L(252)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLV.pN(aNx), aLV.pS(new r6([new v(L(282), function() {
			s.t(21)
		}).button])), aLV
	}

	function aNm() {
		var aLV = new pE,
			g = (aLV.pH(L(61)), [L(251) + ": " + aD.k0[aC.data.botDifficultyValue], L(253), L(254), L(252)]);
		return aLV.pN(g[aC.data.botDifficultyType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(25)
		}).button])), aLV
	}

	function aNn() {
		var aLV = new pE,
			g = (aLV.pH("Spawning"), [L(274), L(284), L(252)]);
		return aLV.pN(g[aC.data.spawningType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(24)
		}).button])), aLV
	}
	this.show = function() {
		aM6.show(), this.resize(), aM6.ta.scrollTop = s.x.aGG[0]
	}, this.qs = function() {
		s.x.aGG[0] = aM6.ta.scrollTop, aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU("🔧 " + L(279), [new v("⬅️ " + L(36), aM9), new v(L(280), aNe)]), aNg(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vX : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIp(bQ.a3o(aC.data), 0).vX : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIp(bQ.a3o(aC.data), aC.data.mapSeed).vX)), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE,
			a1m = (aLV.pH(L(281)), aC.data.canvas);
		a1m.style.width = "100%", aLV.pS({
			e: a1m
		}), aLV.pS(new r6([new v(L(282), function() {
			s.t(20)
		}).button])), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV = new pE;
		aLV.pH(L(255)), aLV.pS(new qQ({
			dx: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p9(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pk.a1W(aC.data.teamPlayerCount, 0), aC.a3P.a3T(), b8.pk.a1W(aC.data.teamPlayerCount, 0) !== e) && aNw()
		})), pW.push(aLV)
	}(pW), function(pW) {
		var aLV = new pE;
		aLV.pH(L(283)), aLV.pP(new tP({
			tT: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dx) {
			aC.data.gameMode !== dx && (aC.data.gameMode = dx, aNw())
		})), pW.push(aLV)
	}(pW), pW.push(aNl()), pW.push(aNm()), pW.push(aNn()), function(pW) {
		var aLV = new pE,
			g = (aLV.pH(L(285)), [L(286), L(287), L(252)]);
		aLV.pN(g[aC.data.playerNamesType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(23)
		}).button])), pW.push(aLV)
	}(pW), function(pW) {
		var aLV = new pE,
			g = (aLV.pH(L(248)), [L(250), L(251) + ": " + aC.data.aIncomeValue, L(252)]);
		aLV.pN(g[aC.data.aIncomeType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(22)
		}).button])), pW.push(aLV)
	}(pW), function(pW) {
		var aLV = new pE,
			g = (aLV.pH(L(288)), [L(250), L(251) + ": " + aC.data.tIncomeValue, L(252)]);
		aLV.pN(g[aC.data.tIncomeType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(26)
		}).button])), pW.push(aLV)
	}(pW), function(pW) {
		var aLV = new pE,
			g = (aLV.pH(L(289)), [L(250), L(251) + ": " + aC.data.iIncomeValue, L(252)]);
		aLV.pN(g[aC.data.iIncomeType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(27)
		}).button])), pW.push(aLV)
	}(pW), function(pW) {
		var aLV = new pE,
			g = (aLV.pH(L(290)), [L(250), L(251) + ": " + aC.data.sResourcesValue, L(252)]);
		aLV.pN(g[aC.data.sResourcesType]), aLV.pS(new r6([new v(L(282), function() {
			s.t(28)
		}).button])), pW.push(aLV)
	}(pW), function(pW) {
		var aLV = new pE;
		aLV.pH(L(291)), aLV.pS(new r6([new v(L(292), function() {
			s.w(), aC.a3P.a3r(), s.x.aGG[0] = 0, s.t(19)
		}).button])), aLV.pS(new r6([new v(L(293), function() {
			bk.aG5()
		}).button])), aLV.pS(new r6([new v(L(294), function() {
			return bk.aG7(), !0
		}).button])), pW.push(aLV)
	}(pW), pW))
}

function aL7() {
	var aM6, aM7, aM8, pW;

	function aM9() {
		aMB(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.iIncomeType && b8.pk.a1c(aM8.u1(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(289), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), aLV.pP(new tP({
			tT: [L(250), L(251), L(252)],
			value: aC.data.iIncomeType
		}, function(dx) {
			aMB(), 2 !== dx || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eX), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dx, s.t(27)
		})), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV;
		1 === aC.data.iIncomeType && ((aLV = new pE).pH("Value"), aLV.pS(new qQ({
			dx: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pW.push(aLV))
	}(pW), function(pW) {
		var aLV;
		2 === aC.data.iIncomeType && ((aLV = new pE).pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.iIncomeData, 4)), aLV.pS(aM8), pW.push(aLV))
	}(pW), pW))
}

function aKp() {
	var aNy, aNz, aN6, qP, aO0;
	this.aEw = new rz, aN6 = new qD([.45, .27], [.5, .5], 2 / 3), aNz = [new v("⚔️<br>" + L(295), function() {
			aO1(0)
		}, b9.nA), new v("🗡️<br>" + L(279), function() {
			aO1(1)
		}, b9.nS), new v("🔑<br>" + L(296), function() {
			aO1(2)
		}, b9.ni), new v("☰<br>" + L(297), function() {
			aO1(3)
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
	for (var aA = 0; aA < aNz.length; aA++) aNz[aA].button.style.position = "absolute";

	function aO1(dx) {
		z.a0.setState(10), aa.sJ() || aa.aEn(), 0 === dx ? s.x.a3i() : 1 === dx ? (b7.aGQ.vI(bh.e7.data[156].value, 1) || aC.a3P.a3r(), s.t(19)) : 2 === dx ? 0 !== z.id || bh.e7.data[140].value ? s.t(8, s.rq, new rr(16)) : s.x.aO2(s.rq, 16) : 3 ===
			dx && s.t(1)
	}
	qP.e.style.position = "absolute", qP.e.style.textAlign = "center", qP.e.placeholder = L(298), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEw.show(), aNz[4].pw(b8.color.a1t(bh.e7.data[121].value)), this.resize(), document.body.appendChild(qP.e);
		for (var aA = 0; aA < aNz.length; aA++) document.body.appendChild(aNz[aA].button);
		1 !== z.id || z.dk < 5 || (aO0 && bd.e9 > aO0 + 144e5 ? z.uL.setState(14) : aO0 = bd.e9)
	}, this.qs = function() {
		this.aEw.qs(), document.body.removeChild(qP.e);
		for (var aA = 0; aA < aNz.length; aA++) document.body.removeChild(aNz[aA].button)
	}, this.resize = function() {
		this.aEw.resize(), this.aEw.resize(), aN6.resize();
		var gap = .5 * ba.gap,
			so = 10 / 99 * .84 * aN6.i,
			aO5 = .16 * aN6.j,
			a7f = .19 * aN6.i,
			eh = aN6.eh + a7f,
			so = aN6.ej + so + 3 * gap,
			i = .5 * (aN6.i - gap) - a7f,
			a7f = aN6.i - 2 * a7f - aO5 - gap,
			a7f = (b8.pb.sH(qP.e, eh, so, a7f, aO5), b8.pb.sH(aNz[4].button, eh + a7f + gap, so, aO5, aO5), .5 * (aN6.ej + aN6.j - (so += aO5 + gap) - gap));
		b8.pb.sH(aNz[0].button, eh, so, i, a7f), b8.pb.sH(aNz[1].button, eh + i + gap, so, i, a7f), b8.pb.sH(aNz[2].button, eh, so + a7f + gap, i, a7f), b8.pb.sH(aNz[3].button, eh + i + gap, so + a7f + gap, i, a7f);
		b8.pb.sH(aNz[5].button, eh, so + a7f * 2 + gap * 2, i * 2 + gap, a7f / 3);
		b8.pb.sH(aNz[6].button, eh, so + a7f * 2.33 + gap * 3, i * 2 + gap, a7f / 3);
		for (var aA = 0; aA < aNz.length; aA++) aNz[aA].button.style.font = b8.pb.rQ(0, b8.pb.a29(.065 * aN6.j)), b8.pb.pm(aNz[aA].button, 5);
		qP.e.style.font = b8.pb.rQ(0, b8.pb.a29(.08 * aN6.j)), b8.pb.pm(qP.e, 5)
	}, this.tj = function() {
		if (aZ.aER(), aS.tj(), aN.tj(), bW.tj(), aa.sJ()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aN6.i * 0.03);
				tk.font = b8.pb.rQ(1, size);
				tk.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tk.measureText(text).width;
				tk.textAlign = "left";
				tk.textBaseline = "middle";
				tk.fillText(text, tk.canvas.width - textLength - size / 2, size);
			};
			tk.imageSmoothingEnabled = !1;
			var ev = aa.aEU("territorial.io"),
				mJ = .84 * aN6.i / ev.width;
			tk.setTransform(mJ, 0, 0, mJ, aN6.eh + .08 * aN6.i, aN6.ej), aNy = aNy || b8.a1D.a2l(ev, b8.a1D.a2r, [0, 0, 0]);
			for (var eh = -1; eh <= 1; eh += 2)
				for (var ej = -1; ej <= 1; ej += 2) tk.drawImage(aNy, eh, ej);
			tk.drawImage(ev, 0, 0), tk.imageSmoothingEnabled = !0;
			var hg = aa.aEU("logo"),
				aO7 = .6666 * mJ * ev.height / hg.height,
				mK = .5 * h.i,
				mL = aN6.ej + .5 * mJ * ev.height - .5 * aO7 * hg.height;
			tk.setTransform(aO7, 0, 0, aO7, mK - .6 * mJ * ev.width, mL), tk.drawImage(hg, 0, 0), tk.setTransform(aO7, 0, 0, aO7, mK + .6 * mJ * ev.width - aO7 * hg.width, mL), tk.drawImage(hg, 0, 0), tk.setTransform(1, 0, 0, 1, 0, 0), tk
				.imageSmoothingEnabled = !0
		}
	}
}

function aKw() {
	var aLC, aO8, aO9, tV;

	function aOA(aA) {
		s.t(8, s.rq, new rr(21, {
			sA: aA,
			sB: 0,
			sC: 10
		}))
	}
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aO8.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aO9 = [new v(L(299), function() {
		aOA(1)
	}, 0, 0, 1), new v(L(300), function() {
		aOA(2)
	}, 0, 0, 1), new v(L(301), function() {
		aOA(3)
	}, 0, 0, 1), new v(L(302), function() {
		aOA(0)
	}, 0, 0, 1), new v(L(303), function() {
		aOA(9)
	}, 0, 0, 1), new v(L(304), function() {
		aOA(10)
	}, 0, 0, 1), new v(L(305), function() {
		aOA(11)
	}, 0, 0, 1)], tV = [new v("⬅️ " + L(36), function() {
		s.a0F()
	})], aLC = new tU(L(306), tV), aO8 = new qA(aO9, aLC.ta)
}

function aB5(title, pO, aOB) {
	var aLC, aNK;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aNK.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aOB = aOB || [new v("⬅️ " + L(36), function() {
		s.a0F()
	}, b9.nM)], aLC = new tU(title, aOB), aNK = new r5(aLC.ta, pO), b8.pb.textAlign(aLC.ta.style, 1)
}

function aNc(data) {
	var aLC, aOC, ev, rg;

	function aOD(hj) {
		var ea = data.data.length;
		if (ea) {
			for (var sB, max = min = parseInt(data.data[0][0]), aA = 1; aA < ea; aA++) var aCr = parseInt(data.data[aA][0]),
				min = Math.min(aCr, min),
				max = Math.max(aCr, max);
			sB = hj < 0 ? min + hj : max + 1, s.t(8, s.aDO().aKk, new rr(21, {
				sA: data.sA,
				sB: sB,
				sC: sB + Math.abs(hj)
			}))
		}
	}
	this.show = function() {
			aLC.show(), this.resize()
		}, this.qs = function() {
			aLC.qs()
		}, this.resize = function() {
			aLC.resize(), aOC.resize()
		}, this.a0z = function(ev) {
			2 === ev && aLC.tb[0].pt()
		}, ev = data.data.length ? 0 : 1, ev = [new v("⬅️ " + L(36), function() {
			s.a0F()
		}), new v(L(307), function() {
			aOD(-10)
		}, ev, 0, 1), new v(L(308), function() {
			aOD(10)
		}, ev, 0, 1), new v(L(257), function() {
			s.t(11, 10, new aOE({
				sA: data.sA
			}))
		})], rg = [L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(304), L(305)], aLC = new tU(rg[data.sA], ev),
		function() {
			var aA, ed = {
					ra: []
				},
				ra = ed.ra,
				aOG = data.data,
				ea = aOG.length;
			ea && 0 === aOG[0][0] && 0 <= (dx = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6][data.sA]) && (s.x.sD[dx] = aOG[0][1]);
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
					f2: aOG[aA][0] + 1 + ".",
					di: 0
				}, {
					f2: aOG[aA][1],
					di: 1,
					ro: aOG[aA][4],
					rp: aOG[aA][3]
				}, {
					f2: (mJ * aOG[aA][2]).toFixed(a2v),
					di: 0
				}]);
			else if (1 === data.sA)
				for (aA = 0; aA < ea; aA++) ra.push([{
					f2: aOG[aA][0] + 1 + ".",
					di: 0
				}, {
					f2: aOG[aA][1],
					di: 0
				}, {
					f2: (mJ * aOG[aA][2]).toFixed(a2v),
					di: 0
				}, {
					f2: aOG[aA][3],
					di: 1,
					ro: aOG[aA][5],
					rp: aOG[aA][4]
				}]);
			else if (4 === data.sA || 5 === data.sA || 6 === data.sA || 7 === data.sA || 8 === data.sA)
				for (aA = 0; aA < ea; aA++) {
					var aOJ = aOG[aA][5];
					4 === data.sA || 8 === data.sA ? "100%" === (aOJ = (aOJ % 64 * 100 / (aOJ >> 6)).toFixed(0) + "%") && (4 === data.sA ? aOJ += " (" + L(337) + ")" : aOJ += " (" + L(338) + ")") : 5 === data.sA ? 32768 <= aOJ && (aOJ = -(aOJ -
						32768)) : aOJ = (mJ * aOJ).toFixed(a2v), ra.push([{
						f2: "" + aOG[aA][0],
						di: 0
					}, {
						f2: "" + aOG[aA][6],
						di: 0
					}, {
						f2: aOG[aA][7],
						di: 1,
						ro: aOG[aA][1],
						rp: aOG[aA][2]
					}, {
						f2: aOG[aA][8],
						di: 1,
						ro: aOG[aA][3],
						rp: aOG[aA][4]
					}, {
						f2: "" + aOJ,
						di: 0
					}])
				}
			aOC = new rZ(aLC.ta, ed)
		}()
}

function aOE(a2n) {
	var aLC, aLD, pW;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(L(339), [new v("⬅️ " + L(36), function() {
		s.aLA(10)
	})]), aLD = new pU(aLC.ta, ((pW = []).push(function() {
		var aLe, aLV = new pE,
			aN4 = new qQ(bh.e7.data[132], 1, function() {
				aLe.button.click()
			}),
			aN5 = new qQ(bh.e7.data[131], 1, function() {
				aN4.e.focus()
			});
		aLV.pH(L(262)), aLV.pS(aN5), aN5.e.style.marginBottom = "0.8em", aLV.pH(L(263)), aLV.pS(aN4);
		return aLe = new v(L(261), function() {
			sB = Math.floor(aN5.e.value), sC = Math.floor(aN4.e.value);
			var sC, sB = {
				a1U: Math.min(sB, sC),
				aKL: Math.max(sB, sC)
			};
			s.t(8, s.aCO(10).aKk, new rr(21, {
				sA: a2n.sA,
				sB: sB.a1U,
				sC: sB.aKL
			}))
		}, 0, 0, 1), aLV.pS(new r6([aLe.button])), aLV
	}()), pW.push(function() {
		var aLe, aLV = new pE,
			aN4 = new qQ(bh.e7.data[134], 1, function() {
				aLe.button.click()
			}),
			aN5 = new qQ(bh.e7.data[133], 0, function() {
				aN4.e.focus()
			});
		return aLV.pH(1 === a2n.sA ? L(340) : L(341)), aLV.pS(aN5), aN5.e.style.marginBottom = "0.8em", aLV.pH(L(342)), aLV.pS(aN4), aLe = new v(L(261), function() {
			var aNU = aN5.e.value.slice(0, 20),
				aNV = Math.abs(Math.floor(aN4.e.value));
			s.t(8, s.aCO(10).aKk, new rr(22, {
				sA: a2n.sA,
				aNU: aNU,
				aNV: aNV
			}))
		}, 0, 0, 1), aLV.pS(new r6([aLe.button])), aLV
	}()), pW.push(function() {
		var aLe, aLV = new pE,
			aN4 = new qQ(bh.e7.data[152], 1, function() {
				aLe.button.click()
			}),
			aN5 = new qQ(bh.e7.data[151], 0, function() {
				aN4.e.focus()
			});
		return aLV.pH(L(343)), aLV.pS(aN5), aN5.e.style.marginBottom = "0.8em", aLV.pH(L(342)), aLV.pS(aN4), aLe = new v(L(261), function() {
			var aNU = aN5.e.value.slice(0, 5),
				aNV = Math.abs(Math.floor(aN4.e.value));
			s.t(8, s.aCO(10).aKk, new rr(28, {
				sA: a2n.sA,
				aNU: aNU,
				aNV: aNV
			}))
		}, 0, 0, 1), aLV.pS(new r6([aLe.button])), aLV
	}()), pW))
}

function aL9() {
	var aON, sN, aOQ, sM, sP, aOO = [new Array(4), [], new Array(2), new Array(2)],
		aOP = new Array(4),
		aOR = new Array(2),
		aOS = [L(60), L(303), L(344), L(345)];

	function aCc() {
		var a5h = aON.sa.qP.e.value.trim().slice(0, 127);
		a5h.length < 1 || (aON.sa.qP.e.value = "", bl.aB8.yw(a5h))
	}

	function aOV(aOX) {
		bl.x.qe[3] = 1 - bl.x.qe[3], aOW(3, 1, bl.x.qe[3]), aOX && ay.aCn.aCo(4), bl.x.qe[3] && bh.r3.r4(158, bl.x.qe[0])
	}

	function aOT(et, eu) {
		bl.x.qe[et] !== eu && (0 === et && bl.x.qe[3] && aOV(0), aOW(et, bl.x.qe[et], 0), aOW(et, eu, 1), bl.x.qe[et] = eu, 0 === et ? (ay.aCn.aCo(2, eu), bl.x.qe[2] ? (aON.sb.lS(), aON.sa.qb(1)) : aON.sa.qb(0), s.aDO().aCR(), s.aDO().aCQ()) : 2 ===
			et && (0 === eu ? (ay.aCn.aCo(0), aON.sa.lS(), aON.sj()) : (ay.aCn.aCo(1), aON.sb.lS(), aON.sk())))
	}

	function aOW(et, eu, color) {
		aON.sd[et].qB[eu].pw(color ? b9.n6 : b9.nr)
	}

	function aOa(aBg) {
		return aBg < 7 ? aBg + 2 + " " + L(352) : 7 === aBg || 10 === aBg ? L(303) + " (Full-Sending: " + L(7 === aBg ? 353 : 354) + ")" : 8 === aBg ? "1v1" : L(355)
	}

	function aOb(f2) {
		var a5k = bJ.dj(f2, 60),
			f2 = f2 % 60;
		return (a5k < 10 ? "0" : "") + a5k + ":" + (f2 < 10 ? "0" : "") + f2
	}
	this.aCz = function() {
		return aON.sa
	}, this.aB8 = function(ro) {
		aOT(2, 0);
		var pI = aON.sa.qP.e.value,
			ro = "@" + ro + " ";
		pI.length && !b8.zX.a2G(pI, " ") && (ro = " " + ro), aON.sa.qP.e.value = pI += ro, aON.sa.qP.e.focus()
	}, this.aCP = function() {
		aON.sb.lS()
	}, this.aCR = function() {
		var aOZ = bl.x.qe[0],
			aOZ = bl.x.qg[aOZ];
		bQ.a6(aOZ.eG, aOZ.mapSeed), sN.qB[0].button.textContent = L(281) + ": " + bQ.vN.vO[aOZ.eG].name, sN.qB[1].button.textContent = L(283, 0, "Mode") + ": " + aOa(aOZ.aBg), sN.qB[2].button.textContent = L(349) + ": " + bQ.vN.vO[aOZ.aDP].name,
			sN.qB[3].button.textContent = L(350, 0, "Next Mode") + ": " + aOa(aOZ.aDQ), sN.qB[4].button.textContent = L(351) + ": " + aOb(aOZ.aCT), sN.resize()
	}, this.aCQ = function() {
		var aOZ = bl.x.qe[0],
			qf = bl.x.qg[aOZ];
		aON.sh(qf.si);
		for (var aA = 0; aA < bl.sx.sy.length; aA++) aOO[0][aA].qa.textContent = "" + bl.sx.sy[aA].length;
		var sx = bl.sx.sy[aOZ],
			aOc = sx.length,
			aOd = bl.sx.sz[aOZ];
		aOO[2][1].qa.textContent = "" + aOc, aOO[3][1].qa.textContent = "" + aOd, sN.qB[4].button.textContent = L(351) + ": " + aOb(qf.aCT);
		for (aA = 0; aA < 4; aA++) {
			var aOe = bl.x.qg[aA];
			aOP[aA] ? 0 === aOe.si && (aOP[aA].qa.textContent = bQ.vN.vO[aOe.eG].name) : aOP[aA] = new qZ(bQ.vN.vO[aOe.eG].name, sM.qB[aA].button, 1, 1), b8.zX.startsWith(aOS[aA], "🏆 ") ? aOe.aBm || (aOS[aA] = aOS[aA].substring(3), sM.qB[aA]
				.button.textContent = aOS[aA], sM.qB[aA].button.appendChild(aOO[0][aA].qa), sM.qB[aA].button.appendChild(aOP[aA].qa)) : aOe.aBm && (aOS[aA] = "🏆 " + aOS[aA], sM.qB[aA].button.textContent = aOS[aA], sM.qB[aA].button
				.appendChild(aOO[0][aA].qa), sM.qB[aA].button.appendChild(aOP[aA].qa))
		}
		var qf = "",
			aOg = "";
		0 === aOZ && (qf = bl.ql.aC0(sx, 0, aOc), aOg = bl.ql.aC0(sx, 0, aOd)), aOQ[0].qa.textContent = qf, aOQ[1].qa.textContent = aOg, aOR[1].qa.textContent = "MP: " + bl.x.aCH[0] + "   SP: " + bl.x.aCH[1] + "   Lobby: " + b8.pk.a1h(bl.sx.sy)
	}, this.aCV = function() {
		aON.sa.lS()
	}, this.show = function() {
		aON.show(), this.resize(), bl.message.show()
	}, this.qs = function() {
		aON.qs(), bl.tJ.qs(), bl.sv.qs(), bl.message.qs()
	}, this.resize = function() {
		aON.resize(1 - bl.x.qe[2]), bl.message.resize()
	}, this.a0z = function(ev) {
		2 === ev ? bl.x.qe[3] ? aOV(1) : aON.sd[3].qB[0].pt() : ev < 2 && aOV(1)
	}, sM = new r9([new v(aOS[0], function() {
		return aOT(0, 0), 2
	}), new v(aOS[1], function() {
		return aOT(0, 1), 2
	}), new v(aOS[2], function() {
		return aOT(0, 2), 2
	}), new v(aOS[3], function() {
		return aOT(0, 3), 2
	})], b9.nr), sN = new r9([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.ns, 1);
	var aOU = new r9([new v(L(346), function() {
		return aOT(2, 0), 2
	}), new v(L(114), function() {
		return aOT(2, 1), 2
	})], b9.nr);
	sP = new r9([new v(L(347), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.tD(), ay.x.a0H(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.tD(), ay.x.a0H(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(348), function() {
		return aOV(1), 2
	})], b9.nr), aON = new sL(sM, sN, aOU, sP, aCc, bl.tJ.aD8);
	for (var aA = 0; aA < 4; aA++) aOO[0][aA] = new qZ("0", sM.qB[aA].button);
	aOO[2][1] = new qZ("0", aOU.qB[1].button), aOO[3][1] = new qZ("0", sP.qB[1].button), aOQ = [new qZ("", aOU.qB[1].button, 1, 1), new qZ("", sP.qB[1].button, 1, 1)], aOW(0, bl.x.qe[0], 1), aOW(2, bl.x.qe[2], 1), (aOR = [new qZ(L(255), aON.sl(), 1,
		0), new qZ("", aON.sl(), 1, 1)])[0].qa.style.fontSize = "0.4em", aOR[1].qa.style.fontSize = "0.4em"
}

function aKq() {
	var aLC, aLD, pW;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(L(356), [new v("⬅️ " + L(36), function() {
		s.t(7, s.aCO(7).aKk)
	}), new v(L(193), function() {
		bh.r3.r4(105, bE.rt.v7(aLD.pY[0].pF[0].e.value, 5)), bh.r3.r4(106, bE.rt.v7(aLD.pY[1].pF[0].e.value, 8)), s.t(8, s.aCO(7).aKk, new rr(18))
	})]), aLD = new pU(aLC.ta, ((pW = []).push(function() {
		var aLV = new pE;
		return aLV.pH(L(174)), aLV.pS(new qQ({
			value: "",
			dx: -1
		})), aLV
	}()), pW.push(function() {
		var aLV = new pE,
			aLg = (aLV.pH(L(176)), new qQ({
				value: "",
				dx: -1
			}));
		return aLg.e.type = "password", aLV.pS(aLg), aLV.pS(new r6([new v(L(177), function(e) {
			return e.textContent === L(177) ? (e.textContent = L(178), aLg.e.type = "text") : (e.textContent = L(177), aLg.e.type = "password"), !0
		}).button])), aLV
	}()), pW))
}

function aKx() {
	var aLC, aO8, aO9, tV;

	function aOA(aA) {
		s.t(8, s.rq, new rr(21, {
			sA: aA,
			sB: 0,
			sC: 10
		}))
	}
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aO8.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aO9 = [new v(L(314), function() {
		aOA(5)
	}, 0, 0, 1), new v(L(315), function() {
		aOA(6)
	}, 0, 0, 1), new v(L(316), function() {
		aOA(7)
	}, 0, 0, 1)], tV = [new v("⬅️ " + L(36), function() {
		s.a0F()
	})], aLC = new tU(L(357), tV), aO8 = new qA(aO9, aLC.ta)
}

function aKg() {
	this.e7 = {}, this.sD = new Array(7), this.aKv = null, this.aKs = null, this.rX = 0, this.aGG = [0], this.y = function() {
		s.t(5, 5)
	}, this.a3i = function() {
		s.w(), aY.dU()
	}, __fx.customLobby.setJoinFunction(() => {
		s.w(), aY.dU()
	}), this.aAh = function() {
		s.t(0 === aZ.a05() ? 5 : 0)
	}, this.aN3 = function() {
		if (1 === bh.e7.data[130].value) s.t(8, s.aDO().aKk, new rr(24, {
			aMZ: bh.e7.data[125].value,
			sB: bh.e7.data[128].value,
			sC: bh.e7.data[129].value
		}));
		else {
			for (var g = (g = bh.e7.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDO().aKk, new rr(23, {
				aMZ: bh.e7.data[125].value,
				za: g
			}))
		}
	}, this.aO2 = function(aKk, target) {
		s.t(4, aKk, new u("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOi +
			"' target='_blank'>" + bI.aOi + "</a>", !1, [new v("⬅️ " + L(36), function() {
				s.t(aKk)
			}), new v("✅ Accept", function() {
				bh.r3.r4(140, 1), 0 === target ? s.t(2, aKk) : s.t(8, aKk, new rr(target))
			})]))
	}, this.aOj = function() {
		for (var aA = 0; aA < 7; aA++) this.sD[aA] = bE.uy.v2(bF.oc(5));
		this.sD[1] = "[" + this.sD[1] + "]", 5 === s.rq && (s.aDO().aEw.r4(this.sD), s.aDO().resize())
	}
}

function aL0() {
	var aM6, aM7, aOk, pW;

	function aM9() {
		b4.tD(), s.aLB()[19] = null, s.a0F()
	}

	function aOr() {
		aOu(), aOs()
	}

	function aOu() {
		aOk.pG.lastChild && aOk.pG.removeChild(aOk.pG.lastChild)
	}

	function aOs() {
		var aOv = bQ.a3o(aC.data);
		aC.data.canvas = bQ.aIp(aOv, aC.data.mapSeed).vX, aOt()
	}

	function aOt() {
		var a1m = aC.data.canvas;
		a1m.style.width = "100%", aOk.pG.appendChild(a1m)
	}
	this.aG0 = function(a1m) {
		aC.data.canvas && aOu(), aC.data.canvas = a1m, aOt()
	}, this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(281), [new v("⬅️ " + L(36), aM9)]), 2 === aC.data.mapType && b4.dU(), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), aLV.pP(new tP({
			tT: [L(358), L(359), L(360)],
			value: aC.data.mapType
		}, function(dx) {
			2 === (aC.data.mapType = dx) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.tD()), s.t(20)
		})), 2 <= aC.data.mapType && (aLV.pS(new rG), aLV.pS(new r0({
			value: aC.data.passableWater
		}, L(361), function(value) {
			aC.data.passableWater = value
		})), aLV.pS(new r0({
			value: aC.data.passableMountains
		}, L(362), function(value) {
			aC.data.passableMountains = value
		})));
		pW.push(aLV)
	}(pW = []), function(pW) {
		if (0 === aC.data.mapType) {
			for (var aLV = new pE, tT = (aLV.pH(L(281)), []), aA = 0; aA < bQ.vN.aJh.length; aA++) tT.push(bQ.vN.vO[bQ.vN.aJh[aA]].name);
			aLV.pP(new tP({
				tT: tT,
				value: aC.data.mapProceduralIndex
			}, function(dx) {
				aC.data.mapProceduralIndex = dx, aOr()
			})), pW.push(aLV)
		}
	}(pW), function(pW) {
		if (1 === aC.data.mapType) {
			for (var aLV = new pE, tT = (aLV.pH(L(281)), []), aA = 0; aA < bQ.vN.aJi.length; aA++) tT.push(bQ.vN.vO[bQ.vN.aJi[aA]].name);
			aLV.pP(new tP({
				tT: tT,
				value: aC.data.mapRealisticIndex
			}, function(dx) {
				aC.data.mapRealisticIndex = dx, aOr()
			})), pW.push(aLV)
		}
	}(pW), function(pW) {
		var aLV;
		2 === aC.data.mapType && ((aLV = new pE).pH(L(281)), aLV.pS(new r6([new v(L(363), function() {
			return b4.aFt(), !0
		}).button])), pW.push(aLV))
	}(pW), function(pW) {
		(aOk = new pE).pH(L(364)), 2 !== aC.data.mapType ? aOs() : aC.data.canvas && aOt();
		pW.push(aOk)
	}(pW), function(pW) {
		var aLV, qP, aLe;
		0 === aC.data.mapType && ((aLV = new pE).pH("Seed"), qP = new qQ({
			dx: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOr())
		}), aLe = new v(L(274), function(e) {
			var aIk = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIk) return qP.e.value = aC.data.mapSeed = aIk, aOr(), !0
		}), aLV.pS(qP), aLV.pS(new r6([aLe.button])), pW.push(aLV))
	}(pW), function(pW) {
		var aLV, qP;
		2 === aC.data.mapType && ((aLV = new pE).pH(L(365)), qP = new qQ({
			dx: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLV.pS(qP), pW.push(aLV))
	}(pW), pW))
}

function u(title, pO, aOw, aOB) {
	var aLC, aNK;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aNK.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aOB = aOB || [new v("⬅️ " + L(36), function() {
		s.a0F()
	})], aLC = new tU(title, aOB), aNK = new r5(aLC.ta, pO), aOw && b8.pb.textAlign(aLC.ta.style, 1)
}

function aL3() {
	var aM6, aM7, aM8, pW;

	function aM9() {
		aMB(), 2 === aC.data.playerNamesType && 1 === b8.pk.a1Q(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.playerNamesType && b8.pk.a1e(aM8.u1(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(285), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), aLV.pP(new tP({
			tT: [L(286), L(287), L(252)],
			value: aC.data.playerNamesType
		}, function(dx) {
			aMB(), aC.data.playerNamesType = dx, s.t(23)
		})), aLV.pS(new rG), aLV.pS(new r0({
			value: aC.data.selectableName
		}, L(366), function(value) {
			aC.data.selectableName = value
		})), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV;
		2 === aC.data.playerNamesType && ((aLV = new pE).pH("Data"), aM8 = new ts(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eX || (aC.data.playerNamesData = new Array(aC.eX), aC.data.playerNamesData
			.fill("")), aM8.tz(b8.zX.a38(aC.data.playerNamesData, 1, '"')), aLV.pS(aM8), pW.push(aLV))
	}(pW), pW))
}

function aKo() {
	var aM6, tx;

	function aOx() {
		s.w();
		var pI = b7.aP1(tx.u1());
		(aC.ys && 0 < pI.length && pI === b7.or.a3e || b7.aGQ.vI(pI)) && b7.aP2()
	}
	this.show = function(aOy) {
		this.aOz(aOy), aM6.show(), this.resize()
	}, this.aOz = function(aOy) {
		0 === aC.ys ? aOy ? tx.tz(aOy) : b7.or.a3e.length && tx.tz(b7.or.a3e) : (aC.gj || (b7.or.a3e = b7.a3f.yL()), tx.tz(b7.aP0(b7.or.a3e)))
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), tx.resize()
	}, this.a0z = function(ev) {
		2 === ev ? aM6.tb[0].pt() : aOx()
	}, aM6 = new tU(L(367), [new v("⬅️ " + L(36), function() {
		s.aLA(1)
	}), new v(L(368), function() {
		tx.u2()
	}), new v(L(369), function() {
		tx.u3()
	}), new v(L(370), function() {
		tx.clear()
	}), new v(L(371), function() {
		aOx()
	})]), tx = new ts(L(372)), aM6.ta.appendChild(tx.e)
}

function aKn() {
	var aLC, aLD, pW, aAd, aLV;

	function aP3() {
		var e9;
		aAd !== bh.e7.data[12].value ? (b5.dU(), b5.aAc(), e9 = bd.e9, s.t(4, 1, new u(L(375), L(376), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.e9 < e9 + 1500 || z.a0.a1()
		}, b9.n4)]))) : s.t(1)
	}
	this.show = function() {
			aAd = bh.e7.data[12].value, aLC.show(), this.resize()
		}, this.qs = function() {
			aLC.qs()
		}, this.resize = function() {
			aLC.resize(), aLD.resize()
		}, this.a0z = function(ev) {
			2 === ev && aLC.tb[0].pt()
		}, aLC = new tU(L(373), [new v("⬅️ " + L(36), aP3), new v(L(374), function() {
			s.w(), bh.r3.uf(), s.t(2)
		})]), pW = [], (aLV = new pE).pH(L(377)), aLV.pJ(L(378)), pW.push(aLV),
		function(pW) {
			var aLV = new pE,
				g = (aLV.pH(L(399)), b5.data.aAl());
			aLV.pP(new tP({
				tT: g,
				value: b5.data.aAp(g)
			}, function(dx) {
				return bh.r3.r4(12, g[dx].split(":")[0]), !0
			})), pW.push(aLV)
		}(pW),
		function(pW) {
			var aLV = new pE,
				aP6 = (aLV.pH(L(397)), []);
			aLV.pS(new r6([new v(L(398), function(e) {
				bV.aP7();
				for (var aA = 0; aA < aP6.length; aA++) aP6[aA].e.value = bV.aA3[aA];
				return b8.pb.a2F(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aP8.length; aA++) {
				aLV.pJ(bV.aP8[aA]);
				for (var et = 0; et < 2; et++) {
					var dx = 2 * aA + et,
						qP = new qQ({
							value: bV.aA3[dx],
							dx: -1
						});
					qP.e.aP9 = dx, aP6.push(qP), qP.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aPA(e.target.aP9, code)
					}), et && (qP.e.style.marginLeft = "4%"), qP.e.style.width = "48%", aLV.pS(qP)
				}
			}
			pW.push(aLV)
		}(pW), (aLV = new pE).pH(L(23)), aLV.pP(new tP({
			tT: ["1", "2"],
			value: aY.aE8 - 1
		}, function(aA) {
			aY.aE8 = aA + 1
		})), pW.push(aLV), (aLV = new pE).pH(L(379)), bh.e7.data[1].tT = [L(380), L(381), L(382), L(383)], aLV.pP(new tP(bh.e7.data[1])), pW.push(aLV), (aLV = new pE).pH(L(384)), bh.e7.data[9].tT = [L(381), L(385), L(386)], aLV.pP(new tP(bh.e7.data[
			9])), pW.push(aLV), (aLV = new pE).pH(L(387)), bh.e7.data[11].tT = [L(388), L(9), L(389)], aLV.pP(new tP(bh.e7.data[11])), pW.push(aLV), (aLV = new pE).pH(L(390)), aLV.pS(new r0(bh.e7.data[2])), pW.push(aLV), (aLV = new pE).pH(L(391)),
		aLV.pS(new r0(bh.e7.data[7])), pW.push(aLV), (aLV = new pE).pH(L(392)), aLV.pS(new r0(bh.e7.data[8])), pW.push(aLV), (aLV = new pE).pH(L(393)), aLV.pS(new qQ(bh.e7.data[5])), pW.push(aLV), (aLV = new pE).pH(L(394)), aLV.pS(new r0(bh.e7.data[
			13], L(395))), aLV.pS(new r0(bh.e7.data[14], L(396))), pW.push(aLV), aLD = new pU(aLC.ta, pW)
}

function aL4() {
	var aM6, aM7, aM8, pW;

	function aM9() {
		aMB(), 2 !== aC.data.spawningType || b8.pk.a1Q(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.spawningType && b8.pk.a1c(aM8.u1(), aC.data.spawningData, bQ.aG2 - 1)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(400), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE,
			tT = (aLV.pH(L(249)), [L(274), L(284), L(252)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tT.splice(1, 1), 0 < value) && (value = 1);
		aLV.pP(new tP({
			tT: tT,
			value: value
		}, function(dx) {
			aMB(), aC.data.spawningType = dx, 0 === aC.data.gameMode && 1 === dx && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eX)), s.t(24)
		})), aLV.pS(new rG), aLV.pS(new r0({
			value: aC.data.selectableSpawn
		}, L(401), function(value) {
			aC.data.selectableSpawn = value
		})), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV = new pE;
		aLV.pH("Seed"), aLV.pS(new qQ({
			dx: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pW.push(aLV)
	}(pW), function(pW) {
		var aLV;
		2 === aC.data.spawningType && ((aLV = new pE).pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.spawningData, 2)), aLV.pS(aM8), pW.push(aLV))
	}(pW), pW))
}

function aKm() {
	var aLC, aO8, aO9, tV;

	function aPB(id) {
		0 !== z.id || bh.e7.data[140].value ? 0 === id ? s.t(8, 1, new rr(16)) : s.t(2) : s.x.aO2(s.rq, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aLC.show(), this.resize(), this.ij()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aO8.resize()
	}, this.ij = function() {
		8 === aZ.a05() && (2 <= bb.aPG ? aO9[2].pu === b9.mt && aO9[2].pw(0) : aO9[2].pu !== b9.mt && aO9[2].pw(b9.mt), !aC.gj && aL.pC(aC.eK) ? aO9[1].pu === b9.mt && aO9[1].pw(0) : aO9[1].pu !== b9.mt && aO9[1].pw(b9.mt), !aC.gj && au.hK(aC
			.eK) ? aO9[0].pu === b9.mt && aO9[0].pw(0) : aO9[0].pu !== b9.mt && aO9[0].pw(b9.mt))
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aO9 = [new v(L(402), function() {
		aPB(0)
	}), new v(L(306), function() {
		s.t(16)
	}), new v(L(357), function() {
		s.t(17)
	}), new v(L(403), function() {
		s.x.aN3()
	}, 0, 0, 1), new v(L(367), function() {
		s.t(3, 1)
	}), new v(L(404), function() {
		s.t(18)
	}), new v(L(373), function() {
		aPB(1)
	}), new v(L(405), function() {
		var rg = [L(414), L(415), "Discord", L(416), L(299), L(417), L(114), L(418), L(419), L(420)],
			a2B = [bI.aB2, bI.a00, bI.aB3, bI.aPH, bI.aPI, bI.zi, bI.aPJ, bI.aPK, bI.aPL, bI.aOi];
		0 === z.id && (rg.unshift("Patreon"), a2B.unshift(bI.aM4)), s.t(4, 1, new u(L(405), b8.pb.a2A(rg, a2B), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		})]))
	}), new v(L(406), function() {
		s.t(4, 1, new u(L(406), l.dk + "<br><a href='" + bI.aPH + "' target='_blank'>" + bI.aPH + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(36), function() {
				s.t(1)
			})]))
	}), new v(L(407), function() {
		s.t(4, 1, new u(L(407), L(421) + "<br>" + L(422), !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		}), new v(L(423), function() {
			z.a0.zu(), s.t(1)
		})]))
	}), new v(L(408), function() {
		z.a0.zv(), s.t(4, 1, new u(L(424), L(425) + " <a href='" + bI.aOi + "' target='_blank'>" + bI.aOi + "</a>", !1, [new v("⬅️ " + L(36), function() {
			s.t(1)
		})]))
	})], tV = [new v("⬅️ " + L(36), function() {
		s.x.aAh()
	})], 8 === aZ.a05() && (aO9.unshift(new v(L(411), function() {
		2 <= bb.aPG && (s.w(), bc.a12(), bd.dc = !0)
	}, 0, 1)), aO9.unshift(new v(L(412), function() {
		!aC.gj && aL.pC(aC.eK) && (b6.gw.oJ(), s.w(), aL.gk) && aL.a12()
	}, 0, 1)), aO9.unshift(new v(L(413), function() {
		!aC.gj && au.hK(aC.eK) && (bT.a4A(2), b6.gw.hG(), s.w(), aL.gk) && aL.a12()
	}, 0, 1))), 1 === z.id && 5 <= z.dk && aO9.push(new v(L(409), function() {
		z.a0.zw()
	})), aLC = new tU(L(410), tV), aO8 = new qA(aO9, aLC.ta)
}

function aL8() {
	var aM6, aM7, aM8, pW;

	function aM9() {
		aMB(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.sResourcesType && b8.pk.a1c(aM8.u1(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(290), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), aLV.pP(new tP({
			tT: [L(250), L(251), L(252)],
			value: aC.data.sResourcesType
		}, function(dx) {
			aMB(), 2 !== dx || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eX)), aC.data.sResourcesType = dx, s.t(28)
		})), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV;
		1 === aC.data.sResourcesType && ((aLV = new pE).pH("Value"), aLV.pS(new qQ({
			dx: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pW.push(aLV))
	}(pW), function(pW) {
		var aLV;
		2 === aC.data.sResourcesType && ((aLV = new pE).pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.sResourcesData, 2)), aLV.pS(aM8), pW.push(aLV))
	}(pW), pW))
}

function aL6() {
	var aM6, aM7, aM8, pW;

	function aM9() {
		aMB(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.tIncomeType && b8.pk.a1c(aM8.u1(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qs = function() {
		aM6.qs()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ev) {
		2 === ev && aM6.tb[0].pt()
	}, aM6 = new tU(L(288), [new v("⬅️ " + L(36), aM9)]), aM7 = new pU(aM6.ta, (function(pW) {
		var aLV = new pE;
		aLV.pH(L(249)), aLV.pP(new tP({
			tT: [L(250), L(251), L(252)],
			value: aC.data.tIncomeType
		}, function(dx) {
			aMB(), 2 !== dx || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eX), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dx, s.t(26)
		})), pW.push(aLV)
	}(pW = []), function(pW) {
		var aLV;
		1 === aC.data.tIncomeType && ((aLV = new pE).pH("Value"), aLV.pS(new qQ({
			dx: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p9(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pW.push(aLV))
	}(pW), function(pW) {
		var aLV;
		2 === aC.data.tIncomeType && ((aLV = new pE).pH("Data"), (aM8 = new ts(0, 1, 0, 1)).tz(b8.zX.a38(aC.data.tIncomeData, 4)), aLV.pS(aM8), pW.push(aLV))
	}(pW), pW))
}

function aKy() {
	var aLC, aLD, pW;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qs = function() {
		aLC.qs()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ev) {
		2 === ev && aLC.tb[0].pt()
	}, aLC = new tU(L(404), [new v("⬅️ " + L(36), function() {
		s.a0F()
	})]), aLD = new pU(aLC.ta, ((pW = []).push(function() {
		function aLb() {
			aPQ.button.textContent = L(171), aPO.e.readOnly = !1, aPP.e.readOnly = !1, aLZ.pw(1), aLZ.button.style.color = b9.mh
		}
		var aLV = new pE,
			aPN = (aLV.pH(L(426)), new qQ({
				value: bh.e7.data[105].value,
				dx: -1
			})),
			aPO = (aPN.e.readOnly = !0, aLV.pS(aPN), aLV.pH(L(330), "0.8em"), new qQ(bh.e7.data[148])),
			aPO = new qQ(bh.e7.data[148], 0, void 0, function(e) {
				aLY(bh.e7.data[149].value, e.target.value)
			}),
			aPP = (aLV.pS(aPO), aLV.pH(L(334), "0.8em"), new qQ(bh.e7.data[149], 1, void 0, function(e) {
				aLY(e.target.value, bh.e7.data[148].value)
			})),
			aPQ = (aLV.pS(aPP), new v(L(171), function(e) {
				return e.textContent === L(171) ? (e.textContent = L(172), aPO.e.readOnly = !0, aPP.e.readOnly = !0, aLZ.pw(0), aLZ.button.style.color = b9.nd, bh.r3.r4(149, aPP.e.value), aLY(bh.e7.data[149].value, bh.e7.data[
					148].value)) : aLb(), !0
			})),
			aLZ = (aLV.pS(new r6([aPQ.button])), new v(L(14), function(e) {
				return aPO.e.readOnly && ay.x.aLa(0) && (b8.pb.a2F(e), aLb(), ay.aLc.aLd({
					rs: 0,
					ro: bh.e7.data[148].value,
					value: parseInt(bh.e7.data[149].value, 10)
				})), !0
			}, 1)),
			pK = aLV.pJ(),
			aLY = (aLV.pJ(L(427)).style.fontWeight = "bold", function(f2, pI) {
				f2 = b8.fv.a2k(f2, 2, 1e6);
				var aLf = Math.max(1, 1 + Math.floor(.01 * (f2 - 100)));
				pK.textContent = L(173, [f2, bh.e7.data[105].value, aLf, pI, f2 - aLf])
			});
		return aLV.pS(new r6([aLZ.button])), aLY(bh.e7.data[149].value, bh.e7.data[148].value), aLV
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
	var a7t, aPS, aPT, aPU, aPR = !1;

	function aPV() {
		aPR = !0, a7t = -1, aPS = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aPS[aA] = !1;
		var wO = Math.floor(1 + .02 * h.min);
		aPT = new Array(4), (aPU = new Array(4))[1] = aPU[3] = aPT[0] = aPT[2] = 0, aPU[0] = aPT[3] = -wO, aPT[1] = aPU[2] = wO
	}

	function aPW() {
		if (-1 !== a7t)
			if (0 !== aC.ys && aG.mP()) {
				for (var aPX = !1, aA = 3; 0 <= aA; aA--) aPS[aA] && (aPX = !0, iA += aPT[aA], iC += aPU[aA], ae.a0R(aPT[aA], aPU[aA]), aR.a7b());
				aPX ? bd.dc = !0 : ap.mF()
			} else ap.mF()
	}
	this.a0x = function(dx) {
		0 !== aC.ys && aG.mP() && (aPR || aPV(), aPS[dx] = !0, -1 === a7t) && (a7t = setInterval(aPW, 20), aPW())
	}, this.a10 = function(dx) {
		if (0 !== aC.ys && (aPR || aPV(), aPS[dx] = !1, -1 !== a7t)) {
			for (var aPX = !1, aA = 3; 0 <= aA; aA--) aPX = aPX || aPS[aA];
			aPX || this.mF()
		}
	}, this.mF = function() {
		if (aPR && -1 !== a7t) {
			for (var aA = 3; 0 <= aA; aA--) aPS[aA] = !1;
			clearInterval(a7t), a7t = -1
		}
	}
}

function cd() {
	this.x = new aPY, this.lN = new aPZ, this.o0 = new aPa, this.aCn = new aPb, this.aAe = new aPc, this.aLc = new aPd, this.ob = new aPe, this.aNR = new aPf, this.a5N = new aPg, this.aPh = new aPi, this.aPj = new aPk, this.aPl = new aPm, this.aPn =
		new aPo, this.dU = function() {
			this.x.dU()
		}
}

function aPY() {
	var aPp, aPr;
	this.aEB = 5, this.aPq = null;

	function aPy(aA) {
		return aPr[aA].aPR && aPp[aA].aPy()
	}

	function aQ0(a02) {
		aPr[a02].e9 = bd.e9, aPr[a02].aPt = !1
	}
	this.a0B = 0, this.a0A = 0, this.dU = function() {
		this.aPq = new Array(this.aEB);
		this.aPq[0] = "territorial.io";
		var aIk = aw.aJ5(0);
		aw.a3U(0);
		for (var aA = 1; aA < this.aEB; aA++) this.aPq[aA] = aJ.yR() + ".territorial.io";
		for (aw.a3U(aIk), aPp = new Array(this.aEB), aPr = new Array(this.aEB), aA = this.aEB - 1; 0 <= aA; aA--) aPr[aA] = {
			aPR: !1,
			e9: 0,
			aPt: !1
		};
		this.aEC(0, 0)
	}, this.aPu = function(aA) {
		return aPp[aA]
	}, this.ij = function() {
		for (var aA = this.aEB - 1; 0 <= aA; aA--) this.aLa(aA) && bd.e9 > aPr[aA].e9 + 15e3 && ay.o0.aPv(aA, aPr[aA].aPt);
		!this.aLa(0) && bd.e9 > aPr[0].e9 + 8e3 && (aPr[0].e9 = bd.e9, this.aEC(0, 0))
	}, this.aNN = function(id) {
		return this.aEC(0, id) && this.aPw(0)
	}, this.aEC = function(a02, aKk) {
		if (aPr[a02].aPR) {
			if (aPp[a02].aPy()) return aPp[a02].aPz(aKk), aPp[a02].aLa();
			aPp[a02].qs()
		}
		return this.aPx(a02, aKk), !1
	}, this.aPx = function(a02, aKk) {
		aPr[a02].aPR = !0, aQ0(a02), aPp[a02] = new aQ1, aPp[a02].dU(a02, aKk)
	}, this.aPz = function(a02, aKk) {
		aPy(a02) && aPp[a02].aPz(aKk)
	}, this.aQ2 = function(a02, aKk) {
		ay.aAe.aQ3(a02)
	}, this.aPw = function(aA) {
		return this.aLa(aA) && aPp[aA].aPw()
	}, this.aQ4 = function(aA) {
		aPp[aA].aQ4()
	}, this.aLa = function(aA) {
		return aPr[aA].aPR && aPp[aA].aLa()
	}, this.send = function(a02, aB) {
		aQ0(a02), aPp[a02].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0i = function(a02) {
		8 === aZ.a05() && (aPr[a02].aPt = !0, ay.lN.aQ5 = !0)
	}, this.close = function(a02, aQ6) {
		aPy(a02) && aPp[a02].close(aQ6)
	}, this.aQ7 = function(a02, aQ6) {
		q.a0G(aQ6), aPy(a02) && aPp[a02].close(aQ6)
	}, this.a0H = function(aQ6) {
		for (var aA = this.aEB - 1; 0 <= aA; aA--) this.close(aA, aQ6)
	}, this.aQ8 = function(a02, aQ6) {
		for (var aA = this.aEB - 1; 0 <= aA; aA--) aA !== a02 && this.close(aA, aQ6)
	}, this.a3g = function() {
		this.close(this.a0B, 3246)
	}, this.aQ9 = function(a02, e) {
		aPp[a02].qs(), q.a01(a02, e.code)
	}
}

function aPZ() {
	this.aQ5 = !1, this.ij = function() {
		bd.jm() % 250 != 249 || aC.gj || (ay.aAe.aQA(+(this.aQ5 && af.lf[aC.eK]), ak.jq + bL.x.op), this.aQ5 = !1)
	}
}

function aPg() {
	function aQb(aQc) {
		var ed = aC.data,
			aQc = (ed.selectedPlayer = bF.oc(aQc), ed.spawningSeed = bF.oc(14), bF.oc(4)),
			aQc = (aQc < 7 ? (ed.gameMode = 1, ed.numberTeams = aQc + 2) : 9 === aQc ? (ed.gameMode = ed.isZombieMode = 1, ed.numberTeams = 2) : (ed.gameMode = 0, ed.battleRoyaleMode = 7 === aQc ? 0 : 10 === aQc ? 1 : 2), ed.isContest = bF.oc(1), bF
				.oc(6));
		return ed.mapType = bQ.aBn(aQc) ? 0 : 1, bQ.aBo(ed, aQc), ed.mapSeed = bF.oc(14), aQc
	}
	this.aQC = function(a02, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aQ7(a02, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oc(1) ? function(a02) {
			var aQG = bF.oc(6);
			0 === aQG ? function(a02) {
					if (0 === a02 && 8 !== aZ.a05()) {
						s.x.aOj();
						for (var aQT = bF.oc(12), aQU = bF.oc(6), g = new Array(aQT), aA = 0; aA < aQT; aA++) g[aA] = bF.oc(aQU);
						aS.a80(g)
					}
				}(a02) : 2 === aQG ? ay.aPh.aQI(a02) : 3 === aQG || 4 === aQG ? av.dU() : 9 === aQG ? ay.aPj.aQJ(a02) : 10 === aQG ? ay.aPl.aQK() : 11 === aQG ? ay.aPj.aQL(a02) : 12 === aQG ? ay.aPl.aQM() : 13 === aQG ? ay.aPn.aQN() :
				14 === aQG ? ay.aPn.aQO() : 15 === aQG ? ay.aPj.aQP() : 16 === aQG ? ay.aPh.aQQ(a02) : 17 === aQG ? ay.aPh.aQR(a02) : 19 === aQG && ay.aPh.aQS(a02)
		} : function(a02) {
			if (8 !== aZ.a05() && !av.aEh()) return;
			if (a02 !== ay.x.a0B) ay.x.aQ7(a02, 3244);
			else if (0 === bF.oc(1)) bd.z1.aQd(bF.aB);
			else {
				var aA, a02 = bF.oc(2);
				if (0 === a02) {
					var oE, o0 = bF.oc(9);
					0 !== af.lf[o0] && 0 !== af.lf[aC.eK] && (oE = bF.oc(10), aM.oD(o0, aC.eK, oE), ae.pA(o0, 1, oE))
				} else if (1 === a02) ! function() {
					var o0 = bF.oc(9);
					0 !== af.lf[o0] && 0 !== af.lf[aC.eK] && b3.aIU(0, [o0], !0) && aM.oU(o0, 1)
				}();
				else if (2 === a02) ! function() {
					var o0 = bF.oc(9),
						target = bF.oc(9);
					0 !== af.lf[o0] && 0 !== af.lf[target] && 0 !== af.lf[aC.eK] && b3.aIU(1, [o0], !0) && (ae.pA(o0, 3, 96), ae.pA(target, 4, 96), aM.a5U(o0, target))
				}();
				else if (l.a8 && !l.a9) {
					var ea = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), ea = Math.min(b6.nx.oe.length, 540), aA = 0; aA < ea; aA++) bB.aQj(32, b6.nx.oe[aA]);
					ay.x.send(ay.x.a0B, bB.aB)
				}
			}
		})(a02), bd.aQF())
	}, this.aQV = function(aB) {
		if (bF.dU(aB), bF.dx = 1, 3 === bF.oc(6)) {
			bF.dx += 20;
			var ed = aC.data = new a3O,
				aB = aQb(9),
				aBp = ed.humanCount = bF.oc(9) + 1;
			ed.selectableSpawn = 1 === ed.gameMode || aBp < 100, ed.colorsData = new Uint32Array(aBp), ed.playerNamesData = new Array(aBp);
			for (var aA = 0; aA < aBp; aA++) bF.dx++, ed.colorsData[aA] = bF.oc(18), ed.playerNamesData[aA] = bE.uy.v2(bF.oc(5));
			aZ.aEN(), bQ.a6(aB, ed.mapSeed), aC.a3S()
		} else ! function() {
			bF.dx += 20;
			var ed = aC.data = new a3O,
				aQa = aQb(1);
			ed.humanCount = 2;
			ed.selectableSpawn = 1, ed.elo = new Uint16Array(2), ed.colorsData = new Uint32Array(2), ed.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dx++, ed.colorsData[aA] = bF.oc(18), ed.elo[aA] = bF.oc(14), ed.playerNamesData[aA] = bE.uy.v2(bF.oc(5));
			aZ.aEN(), bQ.a6(aQa, ed.mapSeed), aC.a3S()
		}()
	}, this.aQY = function() {
		bF.dx = 1;
		var aQG = bF.oc(6),
			aQZ = bF.oc(10);
		return ay.x.a0A === aQZ ? (ay.x.a0B = aQZ, !1) : (ay.x.close(ay.x.a0A, 3247), ay.x.a0B = aQZ, av.aBk = bF.oc(10), av.aEV = bF.oc(3 === aQG ? 9 : 1), ay.x.aEC(aQZ, 5) && ay.o0.aEc(), !0)
	}
}

function aPm() {
	this.aQK = function() {
		bh.x.uW(), bh.r3.r4(105, bD.rt.ru(bD.rt.rv(5))), bh.r3.r4(106, bD.rt.ru(bD.rt.rv(8))), bh.r3.r4(109, bF.oc(30)), bh.r3.r4(108, bh.e7.data[109].value), bh.r3.r4(111, bh.e7.data[109].value + 1), bh.r3.r4(107, 0), bh.r3.r4(110, "")
	}, this.aQM = function() {
		var data;
		bF.size < bB.aQk(29) ? ay.x.aQ7(0, 3254) : ((data = {
			rp: bF.oc(30),
			uj: bF.oc(16),
			uk: bF.oc(30),
			ul: bF.oc(30),
			um: bF.oc(30),
			un: bF.aQl(32),
			username: bE.v0.vI(5),
			uo: bE.v0.vI(3),
			up: bE.v0.vI(3),
			uq: bF.aQl(32),
			ur: bF.aQl(32),
			us: bF.oc(30),
			ut: bF.aQl(32),
			uu: bF.aQl(32),
			uv: bF.aQl(32),
			uw: bF.aQl(32),
			aLk: bF.aQl(32),
			aLl: bF.aQl(30),
			aLw: bF.aQl(32),
			aLx: bE.v0.vI(3),
			aLp: bF.aQl(2),
			aLq: bF.aQl(10),
			aLn: bE.v0.vI(8),
			aLr: bF.aQl(5),
			aLX: bF.oc(30),
			aLj: bF.oc(30),
			zK: bF.aQl(32),
			aLy: bF.oc(1),
			aLz: bF.oc(1)
		}).aLy && (data.aM0 = bF.aQl(32), data.aM1 = bF.oc(30), data.aM2 = bF.oc(30), data.aM3 = bF.oc(1)), 8 === s.rq && (25 === s.aDO().aNM ? (data.aLE = !0, s.x.aKv = data, s.aDO().aNb(25, !1)) : (data.aLE = !1, bh.r3.r4(160, +(data
			.aLy && data.aM3)), data.ro = bh.e7.data[105].value, s.x.aKs = data, bh.r3.ui(data), s.aDO().aNb(16, !0))))
	}
}

function aPo() {
	this.aQN = function() {
		var aA;
		if (bF.size < bB.aQk(23)) ay.x.aQ7(0, 3259);
		else {
			var sA = bF.oc(6),
				ea = bF.oc(10),
				data = [];
			if (9 === sA || 10 === sA || 11 === sA) {
				for (aA = 0; aA < ea; aA++) data.push([bF.oc(30), bE.v0.vI(5), bF.aQl(32), 0, bF.oc(30)]);
				8 === s.rq && s.aDO().aNb(21, !0, {
					sA: sA,
					data: data
				})
			} else {
				var hS = bF.oc(16);
				if (bF.aQm(39 + 16 * hS + ea * (0 === sA ? 111 : 1 === sA ? 101 : 2 === sA || 3 === sA ? 127 : 212))) {
					if (0 === sA)
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(30), bE.uy.v2(bF.oc(5)), bF.oc(16), bF.oc(30), bF.oc(30)]);
					else if (1 === sA)
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(16), bE.uy.v2(bF.oc(3)), bF.oc(16), bE.uy.v2(bF.oc(5)), bF.oc(31), bF.oc(30)]);
					else if (2 === sA || 3 === sA)
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(30), bE.uy.v2(bF.oc(5)), bF.aQl(32), bF.oc(30), bF.oc(30)]);
					else
						for (aA = 0; aA < ea; aA++) data.push([bF.oc(20), bF.oc(30), bF.oc(30), bF.oc(30), bF.oc(30), bF.aQl(32), bF.oc(30), bE.uy.v2(bF.oc(5)), bE.uy.v2(bF.oc(5))]);
					8 === s.rq && s.aDO().aNb(21, !0, {
						sA: sA,
						data: data
					})
				} else ay.x.aQ7(0, 3260)
			}
		}
	}, this.aQO = function() {
		if (bF.size < bB.aQk(29)) ay.x.aQ7(0, 3265);
		else {
			var aQn = bF.oc(4),
				aQo = bF.oc(7),
				aQp = bF.oc(11);
			if (bF.aQm(29 + 16 * aQo + 16 * aQp + 11 * aQn)) {
				for (var data = [], aA = 0; aA < aQn; aA++) {
					for (var zb = bE.uy.v2(bF.oc(3)), aQq = bF.oc(8), aMa = [], et = 0; et < aQq; et++) aMa.push(bF.oc(16));
					data.push({
						name: "[" + zb + "]",
						aMa: aMa
					})
				}
				8 === s.rq && s.aDO().aNb(23, !0, data)
			} else ay.x.aQ7(0, 3266)
		}
	}
}

function aPi() {
	function aQs() {
		var id = bF.oc(3);
		return 0 === id ? {
			id: id,
			ro: bF.oc(30),
			p: bl.aB8.aCt(bE.v0.vI(7))
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
	this.aQI = function(a02) {
		if (a02 !== ay.x.a0A) ay.x.close(a02, 3239);
		else if (6 !== aZ.a05()) ay.x.close(a02, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qf = bl.x.qg[aA],
					playerCount = (qf.si = bF.oc(10), qf.eG = bF.oc(6), qf.mapSeed = bF.oc(14), qf.aBg = bF.oc(4), qf.aDP = bF.oc(6), qf.aDQ = bF.oc(4), qf.aBm = bF.oc(1), qf.aCT = bF.oc(12), qf.spawningSeed = bF.oc(14), bF.oc(16));
				bl.sx.sz[aA] = bF.oc(16);
				for (var et = 0; et < playerCount; et++) bl.sx.aBJ(aA, bF.oc(30), bE.v0.vI(5), bF.oc(4), bF.oc(30), bF.oc(7), bF.oc(16), bF.oc(18), bF.oc(11), bF.oc(12))
			}
			s.t(29), bl.x.aCJ(!0)
		}
	}, this.aQQ = function(a02) {
		if (a02 !== ay.x.a0A) ay.x.close(a02, 3239);
		else if (bl.a09) {
			bl.x.aCH[0] = bF.oc(20), bl.x.aCH[1] = bF.oc(20);
			for (var aQr = bF.oc(16), et = 0; et < aQr; et++) {
				var id = bF.oc(3);
				0 === id ? bl.sx.aBJ(bF.oc(2), bF.oc(30), bE.v0.vI(5), 0, 1234566, 127, 0, bF.oc(18), 0, bF.oc(12)) : 1 === id ? bl.sx.aBa(bF.oc(16), bF.oc(2)) : 2 === id ? bl.sx.aBW(bF.oc(16), bF.oc(2), bF.oc(2)) : 3 === id ? bl.sx.aBZ(bF.oc(
					16), bF.oc(2)) : 4 === id ? bl.sx.aBP(bF.oc(16), bF.oc(2), bF.oc(4), bF.oc(30), bF.oc(7), bF.oc(16), bF.oc(11)) : 5 === id && bl.sx.aBQ(bF.oc(16), bF.oc(2), bF.oc(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qf = bl.x.qg[aA];
				if (qf.si = bF.oc(10), 0 === qf.si) {
					if (qf.a0B = bF.oc(10), qf.aBk = bF.oc(10), bl.aB9.dd(aA)) return;
					qf.eG = bF.oc(6), qf.mapSeed = bF.oc(14), qf.aBg = bF.oc(4), qf.aDP = bF.oc(6), qf.aDQ = bF.oc(4), qf.aBm = bF.oc(1), qf.aCT = bF.oc(12), qf.spawningSeed = bF.oc(14), qf.aDR.push(qf.aDR[0]), qf.aDR.shift()
				}
			}
			bl.x.aCL()
		} else ay.x.close(a02, 3251)
	}, this.aQR = function(a02) {
		if (a02 !== ay.x.a0A) ay.x.close(a02, 3272);
		else if (bl.a09) {
			for (var qd = bF.oc(4), qf = bl.x.qg[qd], qh = qf.qh, tC = (qf.qi = bF.oc(20), bF.oc(6)), aA = 0; aA < tC; aA++) qh.push(aQs());
			bl.x.aCU(qd)
		} else ay.x.close(a02, 3273)
	}, this.aQS = function(a02) {
		a02 !== ay.x.a0A ? ay.x.close(a02, 3276) : bl.a09 ? bl.message.aCp(aQs()) : ay.x.close(a02, 3277)
	}
}

function aPk() {
	this.aQJ = function(a02) {
		var aQf, q8;
		bF.aQm(70) ? (aQf = bF.oc(3), q8 = bg.aQt.ij(bF.oc(30), bF.oc(30)), ay.aAe.aQu(a02, q8, aQf), 0 < aQf || (0 === a02 && 0 === bh.e7.data[105].value.length ? ay.aAe.aNQ(0) : ay.aLc.aQv(a02), 4 === ay.x.aPu(a02).aQw() ? 6 === aZ.a05() && ay
			.aCn.aED(a02) : 5 !== ay.x.aPu(a02).aQw() || 8 !== aZ.a05() && 10 !== aZ.a05() || ay.o0.aEc())) : ay.x.aQ7(a02, 3269)
	}, this.aQL = function(a02) {
		var id = bF.oc(6);
		1 === id ? (bh.r3.r4(160, bF.oc(30)), ay.x.aQ4(a02), aS.a7w || ay.aAe.aNQ(1), b5.aAc(), 8 === s.rq && s.aDO().aNa()) : 21 === id ? 8 === s.rq && s.aDO().aNb(17) : 22 === id && (bh.r3.r4(106, bh.e7.data[110].value), bh.r3.r4(110, ""),
			8 === s.rq) && s.aDO().aNb(15)
	}, this.aQP = function() {
		var ea = bF.oc(16),
			aQx = bF.oc(16);
		if (bF.aQm(55 + 10 * ea + 16 * aQx)) {
			for (var g = [], aA = 0; aA < ea; aA++) g.push(bE.uy.v2(bF.oc(10)));
			b5.aAg(g)
		} else ay.x.aQ7(0, 3270)
	}
}

function aPa() {
	this.aPv = function(a02, aPt) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPt ? 1 : 0), ay.x.send(a02, bB.aB)
	}, this.aEc = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.a0A), bB.a7(10, av.aBk), bB.a7(9, av.aEV), bB.a7(10, l.dm), bB.a7(14, l.dg), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o1 = function(eM) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eM), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o2 = function(i9, j0) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, i9), bB.a7(10, j0), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o6 = function(i9, o4) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, i9), bB.a7(9, o4), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o7 = function(i9, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, i9), bB.a7(22, eM), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oA = function(m3, eM) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m3), bB.a7(22, eM), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oC = function(j0) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, j0), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oG = function(dx) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dx), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oI = function(oH) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oH), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oK = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oL = function(i9, eM, j0) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, i9), bB.a7(10, j0), bB.a7(22, eM), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oS = function(aQy, aQz) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQz), bB.a7(10, aQy), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oV = function(a5N) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5N), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oZ = function(aR0, target) {
		var aA, ea = aR0.length;
		for (bB.a6(14 + 9 * ea), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < ea; aA++) bB.a7(9, aR0[aA]);
		ay.x.send(ay.x.a0B, bB.aB)
	}
}

function aPd() {
	this.aR1 = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAe.aR2(), ay.x.send(0, bB.aB)
	}, this.aQv = function(a02) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rt.vE(bh.e7.data[105].value, 5), bE.rt.vE(bh.e7.data[106].value, 8), bB.a7(30, bh.e7.data[109].value), ay.x.send(a02, bB.aB)
	}, this.aNd = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rt.vD(bh.e7.data[110].value), ay.x.send(0, bB.aB)
	}, this.aNZ = function(a2n) {
		var ea = a2n.pI.length;
		bB.a6(21 + 16 * ea), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2n.rs), bB.a7(8, ea), bD.uy.vD(a2n.pI), ay.x.send(0, bB.aB)
	}, this.aLs = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.rs), bE.rt.vE(data.ro, 5), ay.x.send(0, bB.aB)
	}, this.aLd = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.rs), bE.rt.vE(data.ro, 5), bB.aQj(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPe() {
	this.oa = function() {
		for (var ea = aC.jp, yh = bP.result.yh, kX = yh.length, zS = (bB.a6(17 + 16 * ea + 33 * kX), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kX), bB.a7(1, +(2 === aC.yp)), bB.a7(1, aC.z9 % 2), af.zS), aA = 0; aA < ea; aA++) bB.a7(16, zS[aA]);
		for (var gN = af.gN, aA = 0; aA < kX; aA++) {
			var g7 = yh[aA];
			bB.a7(9, g7), bB.a7(24, gN[g7])
		}
		ay.x.send(ay.x.a0B, bB.aB)
	}
}

function aPf() {
	this.aNS = function(sA, sB, sC) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, sA), bB.a7(1, +(sB < 0)), bB.a7(1, +(sC < 0)), bB.a7(30, Math.abs(sB)), bB.a7(30, Math.abs(sC)), ay.x.send(0, bB.aB)
	}, this.aNT = function(sA, aNU, aNV) {
		bB.a6(18 + 16 * aNU.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, sA), ay.aAe.aR4(aNU), bB.a7(30, aNV), ay.x.send(0, bB.aB)
	}, this.aNY = function(sA, aNU, aNV) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, sA), bE.rt.vE(aNU, 5), bB.a7(30, aNV), ay.x.send(0, bB.aB)
	}, this.aNW = function(aMZ, za) {
		for (var ea = za.length, hS = 0, aA = 0; aA < ea; aA++) hS += za[aA].length;
		for (bB.a6(21 + 3 * ea + 16 * hS), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aMZ), bB.a7(4, ea), bB.a7(7, hS), aA = 0; aA < ea; aA++) bB.a7(3, za[aA].length), bD.uy.vD(za[aA]);
		ay.x.send(0, bB.aB)
	}, this.aNX = function(aMZ, sB, sC) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aMZ), bB.a7(1, +(sB < 0)), bB.a7(1, +(sC < 0)), bB.a7(20, Math.abs(sB)), bB.a7(20, Math.abs(sC)), ay.x.send(0, bB.aB)
	}
}

function aPb() {
	this.aED = function(a02) {
		var username = bh.e7.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, l.dm), bB.a7(2, bh.e7.data[158].value), ay.aAe.aR4(username), b8.color.a1r(bh.x.ud())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAi());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a0A = a02, ay.x.send(a02, bB.aB)
	}, this.aCo = function(aR7, a2n) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aR7), 2 === aR7 ? bC.a7(2, a2n) : 3 === aR7 ? bD.v0.yL(a2n, 7, bC) : 5 === aR7 && (bC.a7(3, a2n.id), bC.a7(3, a2n.value), bC.a7(30, a2n.ro)), ay.x.send(ay.x.a0A, bC.aR8())
	}
}

function aPc() {
	this.aQ3 = function(a02) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dg), bB.a7(4, z.id), bB.a7(7, z.dk), bB.a7(1, +l.a8), bB.a7(1, +l.a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(a02, bB.aB)
	}, this.aQu = function(a02, q8, aQf) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQf), bB.a7(30, q8[0]), bB.a7(30, q8[1]), ay.x.send(a02, bB.aB)
	}, this.aNQ = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAf = function(id, pI) {
		var ea = Math.min(pI.length, 63);
		bB.a6(19 + 16 * ea), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, ea), bD.uy.vD(pI), ay.x.send(0, bB.aB)
	}, this.aRA = function(aQZ, pT) {
		bB.a6(7 + 26 * pT.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pT.length; aA++) bB.a7(16, pT[aA][0]), bB.a7(10, pT[aA][1]);
		ay.x.send(aQZ, bB.aB)
	}, this.aQA = function(aRB, aRC) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aRB), bB.a7(12, aRC), ay.x.send(ay.x.a0B, bB.aB)
	}, this.aR4 = function(username) {
		bB.a7(5, username.length), bD.uy.vD(username)
	}
}

function aQ1() {
	var a02, aKk, aRD, aRE = ["wss://", "/s50/", "/s51/", "/s52/"],
		aRF = 0;

	function aQ2() {
		ay.x.aQ2(a02, aKk)
	}

	function aRK(e) {
		ay.a5N.aQC(a02, new Uint8Array(e.data))
	}

	function aRL() {}

	function aQ9(e) {
		ay.x.aQ9(a02, e)
	}
	this.dU = function(dx, aRG) {
		a02 = dx, aKk = aRG, dx = aRE[0] + ay.x.aPq[a02] + aRE[1 + l.dh], (aRD = new WebSocket(__fx.customLobby.isActive() && 1 === a02 ? __fx.customLobby.getSocketURL() : dx)).binaryType = "arraybuffer", aRD.onopen = aQ2, aRD.onmessage = aRK,
			aRD.onclose = aQ9, aRD.onerror = aRL
	}, this.aRI = function() {
		return aRD.readyState === aRD.CONNECTING
	}, this.aLa = function() {
		return aRD.readyState === aRD.OPEN
	}, this.aPw = function() {
		return aRF
	}, this.aQ4 = function() {
		aRF = 1
	}, this.aPy = function() {
		return this.aRI() || this.aLa()
	}, this.aPz = function(aRG) {
		aKk = aRG
	}, this.aQw = function() {
		return aKk
	}, this.send = function(aB) {
		this.aLa() && aRD.send(aB)
	}, this.close = function(aQ6) {
		this.aPy() && (aRD.close(aQ6), this.qs())
	}, this.qs = function() {
		aRD.onopen = null, aRD.onmessage = null, aRD.onclose = null, aRD.onerror = null
	}
}

function dE() {
	var aRM = !1,
		a5i = 0,
		i = 0,
		rx = 0,
		gap = 0,
		canvas = null,
		x9 = null,
		a1R = null;

	function aRO() {
		for (var aRU, aRS = 0, ea = 0, ev = Math.floor(i / 2), dw = Math.floor(rx / 2), aRT = 1.5 * Math.PI, aA = aC.wD; 0 <= aA; aA--) ea += a1R[aA], 0 === a1R[aA] && aRS++;
		if (aRM = !1, x9.clearRect(0, 0, i, i), x9.fillStyle = b9.me, x9.fillRect(0, 0, i, i), x9.fillStyle = b9.mh, x9.fillRect(0, 0, i, gap), x9.fillRect(0, 0, gap, i), x9.fillRect(i - gap, 0, gap, i), x9.fillRect(0, i - gap, i, gap), 0 < ea)
			if (aRS === aC.wD) {
				for (aA = aC.wD; 0 <= aA; aA--)
					if (0 < a1R[aA]) {
						! function(aA, ev, dw) {
							x9.fillStyle = be.aRb[be.kB[aA]], x9.beginPath(), x9.arc(ev, ev, dw, 0, 2 * Math.PI), x9.fill()
						}(aA, ev, dw);
						break
					}!
				function(ev) {
					var fontSize = ev / 3;
					x9.font = b8.pb.rQ(1, fontSize), x9.fillStyle = b9.mh, x9.fillText("100%", ev, ev + .1 * fontSize)
				}(ev)
			} else {
				for (aA = 0; aA <= aC.wD; aA++) 0 < a1R[aA] && (! function(aA, ev, dw, aRT, aRU) {
					x9.fillStyle = be.aRb[be.kB[aA]], x9.beginPath(), x9.arc(ev, ev, dw, aRT, aRU), x9.lineTo(ev, ev), x9.fill()
				}(aA, ev, dw, aRT, aRU = aRT + 2 * Math.PI * a1R[aA] / ea), function(ev, dw, aRT, aRU) {
					var f2 = (aRU - aRT) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dw * Math.min(f2, .37);
					fontSize < 8 || (aRT = (aRT + aRU) / 2, aRU = (__fx.settings.detailedTeamPercentage ? (100 * f2).toFixed(2) : Math.floor(100 * f2 + .5)) + "%", dw *= .525 - Math.max(.6 * (f2 - .7), 0), x9.font = b8.pb.rQ(1, fontSize), x9
						.fillStyle = b9.mh, x9.fillText(aRU, ev + Math.cos(aRT) * dw, ev + Math.cos(aRT + 1.5 * Math.PI) * dw))
				}(ev, dw, aRT, aRU), 0 !== aA && aRZ(ev, dw, aRT), aRT = aRU);
				aRZ(ev, dw, 1.5 * Math.PI)
			}!
		function(ev, dw) {
			x9.beginPath(), x9.arc(ev, ev, dw, 0, 2 * Math.PI), x9.stroke()
		}(ev, dw)
	}

	function aRZ(ev, dw, aRc) {
		x9.beginPath(), x9.moveTo(ev, ev), x9.lineTo(ev + Math.cos(aRc) * dw, ev + Math.cos(aRc + 1.5 * Math.PI) * dw), x9.stroke()
	}
	this.dU = function() {
		if (aC.hP) {
			a5i = 0, a1R = new Uint32Array(aC.wD + 1);
			for (var aA = aC.wD; 0 <= aA; aA--) a1R[aA] = 0;
			for (aA = ak.jq - 1; 0 <= aA; aA--) a1R[be.eY[ak.jr[aA]]] += 1;
			this.resize()
		} else a1R = x9 = canvas = null
	}, this.a6W = function() {
		return i
	}, this.resize = function() {
		aC.hP && (i = Math.floor(z.a0.qz() && !aC.mA ? .18 * h.min : .13 * h.pd), i = (i *= 1 + (.5 + .2 * z.a0.qz()) * aC.mA) + i % 2, rx = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x9 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x9.lineWidth = gap, x9.strokeStyle = b9.mh, b8.pb.textAlign(x9, 1), b8.pb.textBaseline(x9, 1), aRO())
	}, this.a2j = function() {
		var di, l0 = this.l1();
		return be.kB[l0] || (l0 = function() {
			for (var l0 = -1, aA = aC.wD; 1 <= aA; aA--)(-1 === l0 || a1R[aA] > a1R[l0]) && (l0 = aA);
			return l0
		}(), di = af.gN[l4[0]], -1 !== l0 && a1R[l0] > di) ? a1R[l0] : di
	}, this.zp = function() {
		return a5i = 31, this.ij(), this.l1()
	}, this.l1 = function() {
		for (var l0 = 0, aA = aC.wD; 0 < aA; aA--) a1R[aA] > a1R[l0] && (l0 = aA);
		return l0
	}, this.l2 = function(aRQ) {
		for (var g2 = 0, jr = ak.jr, eY = be.eY, ea = ak.jq, fD = bM.fD, aA = 0; aA < ea; aA++) {
			var g7 = jr[aA];
			eY[g7] === aRQ && (fD[g2++] = g7)
		}
		bM.f5[0] = g2
	}, this.a2K = function() {
		for (var g2 = 0, aA = aC.wD; 0 <= aA; aA--) g2 += 0 < a1R[aA];
		return g2
	}, this.ij = function() {
		if (aC.hP && 32 <= ++a5i) {
			a5i = 0;
			for (var aA = aC.wD; 0 <= aA; aA--) a1R[aA] = 0;
			for (aA = ak.jq - 1; 0 <= aA; aA--) a1R[be.eY[ak.jr[aA]]] += af.gN[ak.jr[aA]];
			aRM = !0
		}
	}, this.lS = function() {
		aC.hP && aRM && aRO()
	}, this.tj = function() {
		aC.hP && (aC.mA ? tk.drawImage(canvas, ba.gap, ba.gap) : tk.drawImage(canvas, ba.gap, a6X + 2 * ba.gap))
	}
}

function cx() {
	function aRe(key) {
		var aOy;
		return "undefined" == typeof URLSearchParams || (aOy = window.location.search, "string" != typeof(aOy = new URLSearchParams(aOy).get(key))) || aOy.length < 1 ? null : aOy
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRe("account");
				if (!value && !(value = aRe("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rq, new rr(1e3, {
					rs: 0,
					ro: value,
					rp: 0
				})), 1
			}()) {
			var value = aRe("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zz = new URL(window.location.href);
		zz.search = "";
		try {
			return history.replaceState(null, "", zz.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aM5 = function(key, value) {
		if (0 === z.id) try {
			var zz = new URL(window.location.href),
				g7 = zz.searchParams;
			g7.set(key, value), zz.search = g7.toString(), history.replaceState(null, "", zz.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRg, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dj(32768 * aA, 100);
		this.a3U(0)
	}, this.value = function(g7) {
		return g[g7]
	}, this.aJ5 = function() {
		return bJ.dj(aRg - 1, 2)
	}, this.a3U = function(aIk) {
		aRg = 2 * aIk % 32768 + 1
	}, this.random = function() {
		return aRg = 167 * aRg % 32768
	}, this.j7 = function(la) {
		return bJ.dj(la * this.random(), 32768)
	}, this.jh = function(g7) {
		return 0 !== g7 && this.random() < this.value(g7)
	}, this.iT = function(et, eu) {
		return et + this.j7(eu - et)
	}
}

function ct() {
	this.or = new aRh, this.a3f = new aRi, this.aGQ = new aRj, this.dU = function() {
		aC.gj || this.or.dU()
	}, this.ij = function() {
		aC.gj || (this.or.ij(), 3 !== s.rq) || bd.jm() % 15 != 5 && 2 !== aC.ys || s.aDO().aOz()
	}, this.aP2 = function() {
		0 === aC.ys && aZ.aEN(), aC.a3P.a3n(), aC.data.canvas = null, ay.x.close(ay.x.a0B, 3257), ay.x.a0B = 0, aC.data.isReplay = 1, aC.a3S()
	}, this.aP1 = function(pI) {
		var aA = pI.indexOf("=");
		return 0 <= aA ? pI.substring(aA + 1) : pI
	}, this.aP0 = function(pI) {
		return "https://territorial.io/?replay=" + pI
	}
}

function aRh() {
	this.aRl = null, this.aRm = null, this.aRn = null, this.aRo = null, this.aRp = null, this.aRq = null, this.a3e = "";
	var aRr = 0;
	this.dU = function() {
		this.aRl = [], this.aRm = [], this.aRn = [], this.aRo = [], this.aRp = [0], this.aRq = [0], aRr = 0, this.a3e = ""
	}, this.os = function(id, fH, fJ, fL) {
		aC.gj || 2 === aC.ys || (0 === this.aRp[aRr] && (this.aRq[aRr] ? (this.aRp.push(1), this.aRq.push(0), aRr++) : this.aRp[aRr] = 1), this.aRl.push(id), this.aRm.push(fH), this.aRn.push(void 0 === fJ ? 0 : fJ), this.aRo.push(void 0 === fL ?
			0 : fL), this.aRq[aRr]++)
	}, this.ij = function() {
		0 === this.aRp[aRr] ? this.aRq[aRr]++ : (this.aRp.push(0), this.aRq.push(0), aRr++)
	}
}

function aRj() {
	var aRs = 0;

	function aRw(pI, id) {
		aRs || (id ? 1 === id ? aM.a4p = L(429) + ": " + pI : s.t(4, 3, new u(L(430), pI, 1)) : s.t(4, 3, new u("⚠️ " + L(428), pI, 1)))
	}
	this.vI = function(pI, aRt) {
		var pT;
		return aRs = aRt, bE.rt.vA(bE.rt.v8(bE.rt.v6(pI))), aM.a4p = "", !(! function() {
			if (bF.size < 10) aRw("File Too Small");
			else {
				var aRy = bF.oc(12),
					aRC = (aRy !== l.rVersion && aRw("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aRy) + ("   Compatible at territorial.io/" + aRy), 1), bF.oc(12)),
					aRz = bF.oc(31);
				if (aRz !== bF.size) aRw("Size Error: " + aRz + " " + bF.size);
				else if (function(j, aRy) {
						for (var g7 = bF.aB, ea = bF.size, aRC = aRy, aA = 3; aA < ea; aA++) aRC = aRC + g7[aA] & 4095;
						return aRC === j || (aRw("Hash Error: " + aRC + " " + j + " " + ea), !1)
					}(aRC, aRy)) return 1
			}
			return
		}() || (aRt = bF, (pT = aC.data = new a3O).mapType = aRt.oc(2), pT.mapProceduralIndex = aRt.oc(8), pT.mapRealisticIndex = aRt.oc(8), pT.mapSeed = aRt.oc(14), pT.mapName = aRt.aS1(5), 2 === pT.mapType && aRt.aS2(), pT
			.passableWater = aRt.oc(1), pT.passableMountains = aRt.oc(1), pT.playerCount = aRt.oc(10), pT.humanCount = aRt.oc(10), pT.selectedPlayer = aRt.oc(9), pT.gameMode = aRt.oc(1), pT.playerMode = aRt.oc(2), pT.battleRoyaleMode =
			aRt.oc(2), pT.numberTeams = aRt.oc(4), pT.isZombieMode = aRt.oc(1), pT.isContest = aRt.oc(1), pT.isReplay = aRt.oc(1), pT.elo = aRt.aS3(2, 14, 2), pT.colorsType = aRt.oc(1), pT.colorsPersonalized = aRt.oc(1), pT.colorsData =
			aRt.aS3(10, 18, 512), pT.selectableColor = aRt.oc(1), pT.teamPlayerCount = aRt.aS3(4, 10, 9), pT.neutralBots = aRt.oc(1), pT.botDifficultyType = aRt.oc(2), pT.botDifficultyValue = aRt.oc(4), pT.botDifficultyTeam = aRt.aS3(4,
				4, 9), pT.botDifficultyData = aRt.aS3(10, 4, 512), pT.spawningType = aRt.oc(2), pT.spawningSeed = aRt.oc(14), pT.spawningData = aRt.aS3(11, 12, 1024), pT.selectableSpawn = aRt.oc(1), pT.playerNamesType = aRt.oc(2), pT
			.playerNamesData = aRt.aS4(10, 5, 512), pT.selectableName = aRt.oc(1), pT.aIncomeType = aRt.oc(2), pT.aIncomeValue = aRt.oc(8), pT.aIncomeData = aRt.aS3(10, 8, 512), pT.tIncomeType = aRt.oc(2), pT.tIncomeValue = aRt.oc(8), pT
			.tIncomeData = aRt.aS3(10, 8, 512), pT.iIncomeType = aRt.oc(2), pT.iIncomeValue = aRt.oc(8), pT.iIncomeData = aRt.aS3(10, 8, 512), pT.sResourcesType = aRt.oc(2), pT.sResourcesValue = aRt.oc(11), pT.sResourcesData = aRt.aS3(10,
				11, 512), ! function() {
				var hu = bF,
					vJ = hu.oc(5),
					aS5 = hu.oc(30),
					aS6 = hu.oc(30);
				if (aS5 + aS6 > 8 * hu.size) return void aRw("Corrupted File");
				return function(ea) {
						var aS9 = new Uint8Array(ea),
							aSA = new Uint16Array(ea),
							aSB = new Uint32Array(ea),
							aSC = new Uint32Array(ea);
						b7.or.aRl = aS9, b7.or.aRm = aSA, b7.or.aRn = aSB, b7.or.aRo = aSC;
						for (var aA = 0; aA < ea; aA++) {
							var id = bF.oc(4);
							aS9[aA] = id, aSA[aA] = bF.oc(9), 0 === id ? aSB[aA] = bF.oc(22) : 1 === id ? (aSB[aA] = bF.oc(10), aSC[aA] = bF.oc(10)) : 2 === id ? (aSB[aA] = bF.oc(10), aSC[aA] = bF.oc(9)) : 3 === id || 4 === id ? (aSB[
								aA] = bF.oc(10), aSC[aA] = bF.oc(22)) : 5 === id || 6 === id ? aSB[aA] = bF.oc(10) : 7 === id ? aSB[aA] = bF.oc(1) : 10 === id && (aSB[aA] = bF.oc(20), aSC[aA] = bF.oc(22))
						}
					}(aS5),
					function(ea, vJ) {
						var aRp = new Uint8Array(ea),
							aRq = new Array(ea);
						aRq.fill(0), b7.or.aRp = aRp, b7.or.aRq = aRq;
						for (var aA = 0; aA < ea; aA++) aRp[aA] = bF.oc(1), aRq[aA] = bF.oc(vJ)
					}(aS6, vJ), 1
			}()) || (bF.dx < 8 * bF.size - 13 || bF.dx > 8 * bF.size ? (aRw("Out Of Bounds Error: " + bF.dx + " " + 8 * bF.size), 1) : (b7.or.a3e = pI, 2 === aC.data.mapType && (aRw("Load base64 image...", 2), 1))))
	}, this.aGR = function(aG1, aRx) {
		var a1m = document.createElement("canvas"),
			hX = a1m.getContext("2d");
		if (a1m.width = aG1.width, a1m.height = aG1.height, hX.drawImage(aG1, 0, 0), aRs || aRx) return aC.ys ? void 0 : (aC.data.canvas = a1m, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aP2()
	}
}

function aRi() {
	this.yL = function() {
		var vJ = function() {
				for (var aRq = b7.or.aRq, ea = aRq.length, max = 0, aA = 0; aA < ea; aA++) max = Math.max(max, aRq[aA]);
				return vQ(Math.max(max, 1))
			}(),
			i = (pT = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dx += 43, i.a7(2, pT.mapType), i.a7(8, pT.mapProceduralIndex), i.a7(8, pT.mapRealisticIndex), i.a7(14, pT.mapSeed), i.aSJ(pT.mapName, 5), 2 === pT.mapType && i.aSK(pT.canvas),
				i.a7(1, pT.passableWater), i.a7(1, pT.passableMountains), i.a7(10, pT.playerCount), i.a7(10, pT.humanCount), i.a7(9, pT.selectedPlayer), i.a7(1, pT.gameMode), i.a7(2, pT.playerMode), i.a7(2, pT.battleRoyaleMode), i.a7(4, pT
					.numberTeams), i.a7(1, pT.isZombieMode), i.a7(1, pT.isContest), i.a7(1, pT.isReplay), i.db(pT.elo, 2, 14), i.a7(1, pT.colorsType), i.a7(1, pT.colorsPersonalized), i.db(pT.colorsData, 10, 18), i.a7(1, pT.selectableColor), i.db(
					pT.teamPlayerCount, 4, 10), i.a7(1, pT.neutralBots), i.a7(2, pT.botDifficultyType), i.a7(4, pT.botDifficultyValue), i.db(pT.botDifficultyTeam, 4, 4), i.db(pT.botDifficultyData, 10, 4), i.a7(2, pT.spawningType), i.a7(14, pT
					.spawningSeed), i.db(pT.spawningData, 11, 12), i.a7(1, pT.selectableSpawn), i.a7(2, pT.playerNamesType), i.aSL(pT.playerNamesData, 10, 5), i.a7(1, pT.selectableName), i.a7(2, pT.aIncomeType), i.a7(8, pT.aIncomeValue), i.db(pT
					.aIncomeData, 10, 8), i.a7(2, pT.tIncomeType), i.a7(8, pT.tIncomeValue), i.db(pT.tIncomeData, 10, 8), i.a7(2, pT.iIncomeType), i.a7(8, pT.iIncomeValue), i.db(pT.iIncomeData, 10, 8), i.a7(2, pT.sResourcesType), i.a7(11, pT
					.sResourcesValue), i.db(pT.sResourcesData, 10, 11), ! function(vJ) {
					var i = bC,
						aRl = b7.or.aRl,
						fH = b7.or.aRm,
						fJ = b7.or.aRn,
						fL = b7.or.aRo,
						ea = aRl.length;
					i.a7(5, vJ), i.a7(30, ea), i.a7(30, b7.or.aRq.length);
					for (var aA = 0; aA < ea; aA++) {
						var ev = aRl[aA];
						i.a7(4, ev), i.a7(9, fH[aA]), 0 === ev ? i.a7(22, fJ[aA]) : 1 === ev ? (i.a7(10, fJ[aA]), i.a7(10, fL[aA])) : 2 === ev ? (i.a7(10, fJ[aA]), i.a7(9, fL[aA])) : 3 === ev || 4 === ev ? (i.a7(10, fJ[aA]), i.a7(22, fL[aA])) :
							5 === ev || 6 === ev ? i.a7(10, fJ[aA]) : 7 === ev ? i.a7(1, fJ[aA]) : 10 === ev && (i.a7(20, fJ[aA]), i.a7(22, fL[aA]))
					}
				}(vJ), ! function(vJ) {
					for (var i = bC, aRp = b7.or.aRp, aRq = b7.or.aRq, ea = aRp.length, aA = 0; aA < ea; aA++) i.a7(1, aRp[aA]), i.a7(vJ, aRq[aA])
				}(vJ), bC.dx),
			pT = bJ.dj(i - 1, 6) + 1,
			vJ = (bB.aQk(6 * pT) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dx = 24, i.a7(31, i.g.length), i.dx = 12, i.a7(12, function() {
					for (var g = bC.g, ea = g.length, aRC = l.rVersion, aA = 3; aA < ea; aA++) aRC = aRC + g[aA] & 4095;
					return aRC
				}())
			}(), bF.dU(bC.g), bD.rt.ru(bD.rt.rv(pT)));
		return bF.tD(), bC.dU(), vJ
	}
}

function cj() {
	var ev, bp = !1,
		aSN = !1,
		aSO = -1e4,
		aSP = -1,
		aSQ = 0;

	function resize(aSU) {
		ev = 0, aa.sJ() && (aSS(aSU) || bp) && (bp = !1, ba.resize(), bU.aAF.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.ys ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7b()) : (aZ.aEP(), aZ.aEQ()), bd.dc = !0)
	}

	function aSR(f2) {
		return f2 && 128 < f2 ? Math.floor(f2) : 128
	}

	function aSS(aSU) {
		var i, j, aSW, rx, a70;
		if (!(0 < h.rY)) return rx = aSR(document.documentElement.clientWidth), a70 = aSR(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rx, j = a70, aSW = 0 !== z.id || i < j ? 700 :
			1200, aSW = Math.min(aSW / ((i + j) / 2), 1), aSW = 0 === bh.e7.data[1].value ? 2 * aSW / 3 : Math.min(aSW + (bh.e7.data[1].value - 1) * (1 - aSW) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSW, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSU && !aSN ? (aSN = !0, document.body.removeChild(a0Q)) : aSN && (aSN = !1, document.body.appendChild(a0Q)), i = Math.floor(.5 + rx * h.k), j = Math.floor(.5 + a70 * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9r(i, j), h.max = a54(i, j), h.pd = bJ.dj(i + j, 2), h.tg = i / j, a0Q.width = i, a0Q.height = j, a0Q.style.width = rx + "px", a0Q.style.height = a70 + "px", aSP = bd.e9 + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pd = 0, this.tg = 1, this.k = 1, this.rY = 0, this.dV = function() {
		this.i = aSR(document.documentElement.clientWidth) + 2, this.j = aSR(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		ev = 1, a0Q = document.getElementById("canvasA"), (tk = a0Q.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSS(0)
	}, this.ij = function() {
		50 <= ++ev && resize(0), -1 === aSP || bd.e9 < aSP || (aSP = -1, 2e3 * ++aSQ >= bd.e9 + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hj) {
		bp = !0, resize(hj)
	}, this.a16 = function() {
		aSO + 1e3 > bd.e9 || (aSO = bd.e9, resize(0))
	}
}

function dB() {
	this.aQt = new aSY, this.zl = new aSZ
}

function aSZ() {
	this.zm = function() {
		for (var g7, ea = ak.jq, yg = ak.jr, zS = af.zS, a6p = this.aFk(), aA = 0; aA < ea; aA++) g7 = yg[aA], b8.fv.jD(g7) || (zS[g7] = a6p);
		var ox = af.ox,
			is = af.is,
			it = af.it,
			zQ = af.zQ,
			ea = aC.jp;
		for (aA = 0; aA < ea; aA++)(0 === zQ[aA] || it[aA] < 1 || 2 * ox[aA] > 3 * (is[aA] + it[aA])) && (zS[aA] = 0);
		var zj = 0;
		for (aA = 0; aA < ea; aA++) zj += 0 < zS[aA];
		return zj
	}, this.aFk = function() {
		return Math.min(65535, bd.jm())
	}
}

function aSY() {
	function aSd(g, f2, hN) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f2 >> (aA + hN) % 30 & 1)) % 256
	}
	this.ij = function(aSa, aSb) {
		var g = new Uint8Array(256);
		return function(g, aSa, aSb) {
				var aA, aSf = 3 + (4 + aSa) % 32768,
					aSg = 12 + aSb % 32768,
					aSh = 17 + ((aSa & aSb) + (aSa | aSb) + aSa) % 32768;
				for (aA = 0; aA < 256; aA++) aSf = 1 + aSf * aSg % aSh, g[aA] = aSf % 256
			}(g, aSa, aSb), aSd(g, aSa, 2), aSd(g, aSb, 7),
			function(g) {
				var aA, f2, dx = 0;
				for (aA = 0; aA < 3e4; aA++) f2 = g[dx], g[dx] = (f2 + aA + g[(dx + aA) % 256]) % 256, dx = (f2 + aA + dx + (f2 & dx)) % 256
			}(g),
			function(g) {
				var aA, a70 = 1,
					sg = 1;
				for (aA = 0; aA < 256; aA += 2) a70 = (1 + a70) * (g[aA] + 1) % 1073741824, sg = (1 + sg) * (g[aA + 1] + 1) % 1073741824;
				return [a70, sg]
			}(g)
	}
}

function cg() {
	var aSi, aSj, h2, aSk;
	this.dU = function() {
		var aA, eh, ej, aR5, aSl, i, j, x9, hU, va, f2, g7, eq, et, a4E;
		if (function() {
				if (h2 = !0, aSk = "rgb(" + bQ.vY[0] + "," + bQ.vY[1] + "," + bQ.vY[2] + ")", bQ.aIs(bQ.eG)) return 1;
				return h2 = !1, 0
			}()) aSj = null;
		else {
			for (aSi = bJ.dj(96, 4), aSl = 1 === bQ.eG ? (aR5 = 0, 160) : (aR5 = 128, 32), aSk = "rgb(" + aR5 + "," + aR5 + "," + aR5 + ")", aSj = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSj[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.el : aSi, j = aA % 2 == 0 ? aSi : bQ.em + 2 * aSi, aSj[aA].width = i, aSj[aA].height = j, va = (hU = (x9 = aSj[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (ej = aSi - 1; 0 <= ej; ej--)
						for (f2 = aSl + Math.floor((ej + 1) * (aR5 - aSl) / (aSi + 1)), eh = i - 1; 0 <= eh; eh--) va[g7 = 4 * ((0 === aA ? aSi - ej - 1 : ej) * i + eh)] = f2, va[g7 + 1] = f2, va[g7 + 2] = f2, va[g7 + 3] = 255;
				else {
					for (eh = aSi - 1; 0 <= eh; eh--)
						for (f2 = aSl + Math.floor((eh + 1) * (aR5 - aSl) / (aSi + 1)), ej = j - 1 - aSi; aSi <= ej; ej--) va[g7 = 4 * (ej * i + (3 === aA ? aSi - eh - 1 : eh))] = f2, va[g7 + 1] = f2, va[g7 + 2] = f2, va[g7 + 3] = 255;
					for (et = 1; 0 <= et; et--)
						for (eh = aSi - 1; 0 <= eh; eh--)
							for (ej = aSi - 1; 0 <= ej; ej--) eq = (Math.pow(eh * eh + ej * ej, .5) + 1) / (aSi + 1), f2 = aSl + Math.floor((1 < eq ? 1 : eq) * (aR5 - aSl)), va[g7 = 4 * ((0 === et ? aSi - ej - 1 : ej + et * (j - aSi)) * i + (
								1 === aA ? eh : aSi - eh - 1))] = f2, va[g7 + 1] = f2, va[g7 + 2] = f2, va[g7 + 3] = 255
				}
				x9.putImageData(hU, 0, 0)
			}
			a4E = aSl, bQ.vT.fillStyle = "rgb(" + a4E + "," + a4E + "," + a4E + ")", bQ.vT.fillRect(0, 0, bQ.el, 1), bQ.vT.fillRect(0, bQ.em - 1, bQ.el, 1), bQ.vT.fillRect(0, 0, 1, bQ.em), bQ.vT.fillRect(bQ.el - 1, 0, 1, bQ.em)
		}
	}, this.x3 = function() {
		var et = h2 ? 0 : -aSi;
		aKT(et, et, bQ.el - 2 * et, bQ.em - 2 * et, bY.aSo, bY.aSp, bY.aSq, bY.aSr) || (tk.fillStyle = aSk, tk.fillRect(0, 0, h.i, h.j))
	}, this.tj = function() {
		h2 || (aKS(0, -aSi, bQ.el, aSi, bY.aSo, bY.aSp, bY.aSq, bY.aSr) && tk.drawImage(aSj[0], bY.aSs, bY.aSt - aSi), aKS(bQ.el, -aSi, aSi, bQ.em + 2 * aSi, bY.aSo, bY.aSp, bY.aSq, bY.aSr) && tk.drawImage(aSj[1], bY.aSs + bQ.el, bY.aSt - aSi),
			aKS(0, bQ.em, bQ.el, aSi, bY.aSo, bY.aSp, bY.aSq, bY.aSr) && tk.drawImage(aSj[2], bY.aSs, bY.aSt + bQ.em), aKS(-aSi, -aSi, aSi, bQ.em + 2 * aSi, bY.aSo, bY.aSp, bY.aSq, bY.aSr) && tk.drawImage(aSj[3], bY.aSs - aSi, bY.aSt - aSi))
	}
}

function d0() {
	this.h3 = new aSu, this.aFi = new aSv, this.x6 = new aSw, this.x = new aSx, this.iJ = new aSy, this.a4E = new aSz, this.aT0 = new aT1, this.jd = new aT2, this.kR = new aT3, this.aT4 = new aT5, this.dU = function() {
		this.x6.dU(), this.x.dU(), this.iJ.dU(), this.a4E.dU(), this.aT4.dU()
	}, this.tj = function() {
		this.aT4.tj(), this.x6.tj()
	}
}

function aT2() {
	this.ij = function(player) {
		var oo;
		return !!aC.data.passableWater && 0 !== af.gG[player].length && bL.x.op !== bL.x.k3 && !((oo = bL.x.oo[player]) >= Math.max(3 * am.performance.kr, aD.k3[aD.hE[player]]) || oo === bL.x.p1 || !b8.fv.ov(player, aD.k1[aD.hE[player]], 32,
			0) || !am.iW.ij(player) && !am.iY.ij(player) || ! function(a2N) {
				var aT8 = bM.fB[1] + bK.hZ[bM.fB[2] - 1] << 2;
				if (ab.eR(aT8)) return 1;
				return aT8 = ab.eS(aT8), a2N !== aT8 && !!eT(a2N, aT8)
			}(player)) && function(player) {
			return b8.fv.oy(player), bL.x.p4(player), !0
		}(player)
	}
}

function aSu() {
	function aTG(aA, ks, kt) {
		var aTI, aTH;
		if (!(aA < 0)) return aTH = bL.x.m6[aA], aTI = bK.hx(aTH), aTH = bK.i0(aTH), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5M[aA])), aA = Math.max(aA, bK.iD(b8.pb.sG(.02, 1.7))), bJ.aKa(bK.hw(ks), bK.hz(kt), aTI, aTH, aA)
	}

	function aTA(aT9) {
		var aTL = 4 + .03 * (1 + 1.5 * z.a0.qz()) * h.pd / iB;
		return bK.i1(aT9, bM.fB[1]) < aTL
	}
	this.h4 = function(player, aT9) {
		return !!(aC.data.passableWater && bK.iE(aT9) && bL.x.op !== bL.x.k3 && bL.x.oo[player] !== bL.x.p1 && 0 !== af.gG[player].length && bL.kR.kS(player, aT9) && aTA(aT9))
	}, this.o9 = function(player, m3, aT9) {
		return !!(bK.iE(aT9) && this.p5(player, m3) && bL.kR.p6(aT9) && aTA(aT9))
	}, this.p5 = function(player, id) {
		for (var aTB, sB = player << 3, sC = sB + bL.x.oo[player], aTC = bL.x.aTC, aTD = bL.x.aTD, aA = sB; aA < sC; aA++)
			if (id === aTD[aTB = aTC[aA]]) return bM.fB[3] = aTB, !0;
		return !1
	}, this.o8 = function(eM) {
		var a4F = bL.a4E.a4F;
		return !!this.p5(aC.eK, a4F) && (b6.gw.o8(a4F, eM), !0)
	}, this.a4H = function(ks, kt) {
		var player = aC.eK,
			ea = bL.x.oo[player];
		if (0 === ea) return !1;
		for (var aTC = bL.x.aTC, m6 = bL.x.m6, sB = player << 3, aTE = 80, aMq = -1, aA = sB + ea - 1; sB <= aA; aA--) {
			var aTF = aTC[aA],
				eq = bK.hr(ks, kt, m6[aTF]);
			eq < aTE && (aTE = eq, aMq = aTF)
		}
		return !!aTG(aMq, ks, kt) && (bL.a4E.a4F = bL.x.aTD[aMq], bj.p3.a4H(), !0)
	}, this.a4O = function(ks, kt) {
		var ea = bL.x.op;
		if (ea < 1) return -1;
		for (var m6 = bL.x.m6, aTE = 80, aMq = -1, aA = 0; aA < ea; aA++) {
			var eq = bK.hr(ks, kt, m6[aA]);
			eq < aTE && (aTE = eq, aMq = aA)
		}
		return aTG(aMq, ks, kt) ? aMq : -1
	}, this.m5 = function(player, id) {
		for (var sB = player << 3, sC = sB + bL.x.oo[player], aTD = bL.x.aTD, aTC = bL.x.aTC, aA = sB; aA < sC; aA++) {
			var aTF = aTC[aA];
			if (aTD[aTF] === id) return aTF
		}
		return -1
	}, this.aFf = function(player) {
		for (var sB = player << 3, sC = sB + bL.x.oo[player], aTC = bL.x.aTC, a5M = bL.x.a5M, hE = 0, aA = sB; aA < sC; aA++) hE += a5M[aTC[aA]];
		return hE
	}, this.mB = function(player) {
		return 0 === bL.x.oo[player] ? -1 : bL.x.aTC[player << 3]
	}
}

function aSv() {
	this.aFj = function(player) {
		for (var aTC = bL.x.aTC, sB = player << 3, aA = sB + bL.x.oo[player] - 1; sB <= aA; aA--) this.aTM(aTC[aA])
	}, this.aTM = function(aTN) {
		var x = bL.x,
			aTO = x.op - 1,
			aTP = x.a5L[aTN],
			aTQ = x.aTR[aTN],
			aTS = x.m6[aTN];
		x.op = aTO, x.a5L[aTN] = x.a5L[aTO], x.aTT[aTN] = x.aTT[aTO], x.aTU[aTN] = x.aTU[aTO], x.m6[aTN] = x.m6[aTO], x.aTV[aTN] = x.aTV[aTO], x.a5M[aTN] = x.a5M[aTO], x.aTR[aTN] = x.aTR[aTO], x.aTD[aTN] = x.aTD[aTO], x.aTW[aTN] = x.aTW[aTO], x
			.aTX[aTN] = x.aTX[aTO], x.aTC[x.a5L[aTN]] = aTN,
			function(aRc) {
				var player = aRc >> 3,
					x = bL.x,
					ea = x.oo[player] - 1,
					aTa = (player << 3) + ea;
				x.oo[player] = ea, aTa !== aRc && (x.aTC[aRc] = x.aTC[aTa], x.a5L[x.aTC[aRc]] = aRc)
			}(aTP), bL.iJ.iJ[bK.iI(x.m6[aTN])][x.aTR[aTN]] = aTN, aTO = bK.iI(aTS), aTP = aTQ, aTO = bL.iJ.iJ[aTO], x = aTO.pop(), aTP !== aTO.length && (aTO[aTP] = x, bL.x.aTR[x] = aTP)
	}
}

function aSw() {
	var aTc, xV = 8,
		aTd = new Array(2);

	function aTe(dx) {
		var hR = xV + 4,
			a1m = b8.pb.vP(hR, hR),
			hX = b8.pb.getContext(a1m, !0),
			hU = b8.pb.getImageData(hX, hR, hR),
			va = hU.data;
		return aTf(va, hR + 1, dx), aTf(va, hR + 2, dx), aTf(va, 2 * hR + 1, dx), aTf(va, 2 * hR - 3, dx), aTf(va, 2 * hR - 2, dx), aTf(va, 3 * hR - 2, dx), aTf(va, hR * (hR - 3) + 1, dx), aTf(va, hR * (hR - 2) + 1, dx), aTf(va, hR * (hR - 2) + 2,
			dx), aTf(va, hR * (hR - 2) - 2, dx), aTf(va, hR * (hR - 1) - 3, dx), aTf(va, hR * (hR - 1) - 2, dx), hX.putImageData(hU, 0, 0), a1m
	}

	function aTf(va, eM, dx) {
		eM *= 4;
		va[eM] = 255, va[1 + eM] = 255, va[2 + eM] = dx, va[3 + eM] = 255
	}

	function vP(player) {
		var a1m = b8.pb.vP(xV, xV);
		return function(hX, player) {
			var eh, ej, hv, eM, aTh, aTi, hR = xV,
				hU = b8.pb.getImageData(hX, hR, hR),
				va = hU.data,
				kX = (hR >> 1) - .5,
				aSk = ab.a5w(player),
				aTk = b8.pk.a1K(aSk, .5);
			b8.pk.a1M(aSk, aTk, 300) || b8.pk.a1O(aSk, 100);
			for (ej = 0; ej < hR; ej++)
				for (eh = 0; eh < hR; eh++) aTi = (hR - 1.5) * (hR - 1.5) / 4, aTh = (hv = (hv = eh - kX) * hv + (hv = ej - kX) * hv) <= (hR - 4.5) * (hR - 4.5) / 4 ? aTk : aSk, va[eM = 4 * (ej * hR + eh)] = aTh[0], va[1 + eM] = aTh[1], va[2 +
					eM] = aTh[2], va[3 + eM] = aTi < hv ? 0 : 255;
			hX.putImageData(hU, 0, 0)
		}(b8.pb.getContext(a1m, !0), player), a1m
	}
	this.dU = function() {
		aTc = new Array(aC.eX), aTd[0] = aTe(255), aTd[1] = aTe(0)
	}, this.tj = function() {
		var aA, player, aTl, aKb, hE, hu, aTn, aTp, aTq, m6 = bL.x.m6,
			a5L = bL.x.a5L,
			a5M = bL.x.a5M,
			aTX = bL.x.aTX,
			aTr = aTc,
			aTs = aC.eK,
			aTt = -1,
			ea = bL.x.op,
			aTu = h.i,
			aTv = h.j,
			aTw = bQ.el << 4,
			eP = iB,
			eE = eP / xV,
			m7 = iA / eP,
			m8 = iC / eP,
			hv = (aTu + iA) / eP - m7,
			hy = (aTv + iC) / eP - m8,
			hX = tk;
		for (bL.h3.p5(aC.eK, bL.a4E.a4F) && (aTt = bM.fB[3]), hX.imageSmoothingEnabled = eP < 9, b8.pb.textAlign(hX, 1), b8.pb.textBaseline(hX, 1), aA = 0; aA < ea; aA++) player = a5L[aA] >> 3, hE = a5M[aA], aTl = .9 + .1 * Math.log10(hE), aKb =
			(hu = m6[aA]) % aTw / 16 - aTl, hu = aTv * (Math.floor(hu / aTw) / 16 - aTl - m8) / hy, aTn = -2 * (aTq = eP * aTl) * (1 + (aTp = +(player === aTs)) / 8), aTp = aTp * aTq / 4, (aTq = aTu * (aKb - m7) / hv) < aTn || hu < aTn || aTu +
			aTp < aTq || aTv + aTp < hu || (aKb = 2 * aTl * eE, aTn = aTl * eP, void 0 === (aTp = aTr[player]) && (aTr[player] = aTp = vP(player)), player === aTs && (hX.setTransform(aKb, 0, 0, aKb, aTq - 2 * aKb, hu - 2 * aKb), hX.drawImage(aTd[
				+(aA === aTt)], 0, 0)), hX.setTransform(aKb, 0, 0, aKb, aTq, hu), hX.drawImage(aTp, 0, 0), (aTl = Math.floor(function(hE) {
				if (hE < 1e3) return .42;
				if (hE < 1e4) return .34;
				if (hE < 1e6) return .26;
				if (hE < 1e8) return .19;
				return .15
			}(hE) * aTn)) < 6) || (hX.setTransform(1, 0, 0, 1, 0, 0), hX.fillStyle = aTX[aA] ? b9.nF : b9.mh, hX.font = b8.pb.rQ(1, aTl), hX.fillText(b8.zX.yA(hE), aTq + aTn, hu + aTn + .1 * aTl));
		hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aT5() {
	var a1m;
	this.dU = function() {
		a1m = a1m || bN.x.aTz(20, be.aU0[7])
	}, this.tj = function() {
		var mR = iB;
		if (!(5 <= mR)) {
			var aTu = h.i,
				aTv = h.j,
				m7 = iA / mR,
				m8 = iC / mR,
				mK = (aTu + iA) / mR,
				mL = (aTv + iC) / mR,
				g8 = -20 * mR,
				aU1 = .5 * g8,
				aTw = bQ.el << 4,
				ea = bL.x.op,
				m6 = bL.x.m6,
				aU2 = a1m,
				hX = tk;
			3 < mR && (hX.globalAlpha = .5 * (5 - mR));
			for (var aA = 0; aA < ea; aA++) {
				var hu = m6[aA],
					eh = aTu * (hu % aTw / 16 - m7) / (mK - m7) + aU1,
					hu = aTv * (Math.floor(hu / aTw) / 16 - m8) / (mL - m8) + aU1;
				aTu < eh || aTv < hu || eh < g8 || hu < g8 || (hX.setTransform(mR, 0, 0, mR, eh, hu), hX.drawImage(aU2, 0, 0))
			}
			hX.globalAlpha = 1, hX.setTransform(mR, 0, 0, mR, 0, 0)
		}
	}
}

function aT1() {
	this.ij = function() {
		for (var aTH, aT0, aTW = bL.x.aTW, m6 = bL.x.m6, aTU = bL.x.aTU, aA = bL.x.op - 1; 0 <= aA; aA--) aTH = m6[aA], 0 !== (aT0 = aTW[aA]) && aTH === aTU[aA] && (! function(aA, aU6, hM) {
			var j0, player = bL.x.a5L[aA] >> 3,
				hM = aU6 + bK.hZ[hM] << 2,
				aA = bL.x.a5M[aA];
			if (bb.aU7(player), ab.eR(hM)) j0 = aC.eX;
			else {
				if ((j0 = ab.eS(hM)) === player) return hM = b8.fv.fy(player, aA), bb.fz(player, aA - hM, 12);
				if (!eT(player, j0)) return b6.js.oN(player, j0, aA)
			}
			ac.jB(player, j0) || ac.jT(player) ? (af.g1[player].push(aU6 << 2), ac.ix(player, aA, j0), aE.iy(player, !0)) : bb.fz(player, aA, 12)
		}(aA, bK.iH(aTH), aT0 - 1), bL.aFi.aTM(aA))
	}, this.aU8 = function(player, eM, hM, m3) {
		if (0 !== hM) {
			var aTs = aC.eK;
			if (b8.fv.gm(aTs) && eT(player, aTs) && player !== aTs && 0 !== af.gG[aTs].length) {
				var aT8 = eM + bK.hZ[--hM] << 2;
				if (ab.eR(aT8) || eT(player, ab.eS(aT8))) {
					for (var eo = !1, aA = 0; aA < 4; aA++)
						if (aT8 = eM + bK.hZ[aA] << 2, ab.eV(aT8) && !ab.eR(aT8) && ab.eS(aT8) === aTs) {
							eo = !0;
							break
						} eo && (aM.a4G(719, 0), aM.zG(180, L(431, [af.zT[player]]), 719, player, b9.nE, b9.me, -1, !0, void 0, {
						eu: 1,
						m3: m3
					}))
				}
			}
		}
	}
}

function aSx() {
	this.aU9 = null, this.k3 = 512, this.p1 = 8, this.op = 0, this.aUA = 0, this.a5L = new Uint16Array(this.k3), this.aTT = new Uint32Array(this.k3), this.aTU = new Uint32Array(this.k3), this.m6 = new Uint32Array(this.k3), this.aTV = new Uint16Array(
			this.k3), this.a5M = new Uint32Array(this.k3), this.aTR = new Uint16Array(this.k3), this.aTD = new Uint16Array(this.k3), this.aTW = new Uint8Array(this.k3), this.aTX = new Uint8Array(this.k3), this.oo = new Uint8Array(aC.eX), this.aTC =
		new Uint16Array(this.p1 * aC.eX), this.dU = function() {
			this.aUA = 0, this.op = 0, this.aU9 = new Uint8Array(bQ.el + bQ.em), this.oo.fill(0)
		}, this.p4 = function(player) {
			var ea = this.op,
				aUB = bK.iG(bM.fB[0]),
				aUC = this.oo[player],
				aUD = (player << 3) + aUC,
				hE = (this.a5L[ea] = aUD, this.aTT[ea] = aUB, this.m6[ea] = aUB, this.aTU[ea] = bK.iG(bM.fB[1]), this.aTV[ea] = 0, bM.f7[0]);
			hE < 60 ? (b8.fv.fw(player, 60 - hE), this.a5M[ea] = 60) : this.a5M[ea] = hE, this.aTR[ea] = bL.iJ.p4(ea, bK.iI(aUB)), this.aTD[ea] = this.aUA, this.aTW[ea] = bM.fB[2], this.aTX[ea] = 0, this.aUA = this.aUA + 1 & 1023, this.aTC[aUD] = ea,
				this.oo[player] = aUC + 1, this.op++, bL.aT0.aU8(player, bM.fB[1], bM.fB[2], this.aTD[ea])
		}, this.o8 = function() {
			var aTB = bM.fB[3];
			this.aTT[aTB] = this.m6[aTB], this.aTU[aTB] = bK.iG(bM.fB[1]), this.aTV[aTB] = 0, this.aTW[aTB] = bM.fB[2], bL.aT0.aU8(this.a5L[aTB] >> 3, bM.fB[1], bM.fB[2], this.aTD[aTB])
		}, this.ij = function() {
			bL.aT0.ij();
			var aA, g7 = aC.eK,
				di = bL.h3.aFf(g7),
				rD = (! function(rD) {
					var aA, aUI, aUJ, aUK, aUL, aUB, aUP, aUQ, ed, g8, aTT = rD.aTT,
						aTU = rD.aTU,
						m6 = rD.m6,
						a5M = rD.a5M,
						aTX = rD.aTX,
						aTV = rD.aTV,
						aTR = rD.aTR,
						rD = rD.op,
						aTw = bQ.el << 4;
					for (aA = rD - 1; 0 <= aA; aA--) aUJ = m6[aA], aUI = aTU[aA], aUJ !== aUI && (aUB = aTT[aA], aUP = aUI % aTw - (aUL = aUB % aTw), aUQ = ~~((aUI + .5) / aTw) - (aUB = ~~((aUB + .5) / aTw)), ed = ~~Math.sqrt(aUP * aUP + aUQ *
						aUQ + .5), g8 = 2e5 + Math.min(20 * a5M[aA], 4e5), aTX[aA] && (g8 = bJ.dj(g8, 5)), 65535 <= (g8 = aTV[aA] + Math.max(~~((g8 + .5) / ed), 1)) ? m6[aA] = aUK = aUI : (aTV[aA] = g8, m6[aA] = aUK = aUL + bJ.dj(g8 *
						aUP, 65536) + aTw * (aUB + bJ.dj(g8 * aUQ, 65536))), aTR[aA] = bL.iJ.aUS(aTR[aA], aUJ, aUK))
				}(this), ! function(rD) {
					if (bd.jm() % 2 == 1) {
						var aA, hN, kX, eu, ev, aUT, xq, aUU, gz, m7, m8, aUB, aUV, hd, aUX, vi, ea = rD.op,
							m6 = rD.m6,
							a5L = rD.a5L,
							a5M = rD.a5M,
							aTX = rD.aTX,
							iJ = bL.iJ.iJ,
							aUZ = iJ.length,
							aUa = bL.iJ.aUa,
							aTw = bQ.el << 4,
							aUb = aC.hP,
							aRQ = be.eY,
							g8 = (ea - 1) * (bJ.dj(bd.jm(), 2) % 2);
						for (aA = 0; aA < ea; aA++)
							for (hN = Math.abs(aA - g8), aUB = m6[hN], kX = bK.iI(aUB), gz = a5L[hN] >> 3, m7 = aUB % aTw, m8 = ~~((aUB + .5) / aTw), aUX = a5M[hN], eu = 0; eu < 9; eu++)
								if (!((aUT = kX + aUa[eu]) < 0 || aUZ <= aUT))
									for (aUU = iJ[aUT], xq = aUU.length, ev = 0; ev < xq; ev++) aUV = aUU[ev], vi = a5L[aUV] >> 3, gz == vi || aUb && aRQ[gz] === aRQ[vi] && aRQ[gz] || (vi = m6[aUV], (hd = m7 - vi % aTw) * hd + (hd = m8 - ~~((vi +
										.5) / aTw)) * hd < 14400 && (vi = a5M[aUV], hd = vi <= aUX ? Math.max(1, bJ.dj(vi + bJ.dj(aUX - vi, 10), 10)) : Math.max(1, bJ.dj(aUX, 10)), a5M[aUV] = Math.max(vi - hd, 0), aTX[aUV] = 4))
					}
				}(this), ! function(rD) {
					if (bd.jm() % 5 == 3) {
						var aA, hE, a5M = rD.a5M,
							ea = rD.op;
						for (aA = 0; aA < ea; aA++) hE = a5M[aA], a5M[aA] = Math.max(hE - Math.max(1, hE >> 7), 0)
					}
				}(this), this),
				a5M = rD.a5M,
				aTX = rD.aTX;
			for (aA = rD.op - 1; 0 <= aA; aA--) aTX[aA] = aTX[aA] >> 1, 0 === a5M[aA] && bL.aFi.aTM(aA);
			bb.fz(g7, di - bL.h3.aFf(g7), 15)
		}
}

function aSy() {
	this.aUc = 32, this.eh = 0, this.ej = 0, this.iK = 0, this.aUd = 0, this.aUe = 4, this.iJ = null, this.aUa = new Int16Array(9), this.dU = function() {
		this.iK = 1 + bJ.dj(bQ.el - 1, this.aUc), this.aUd = 1 + bJ.dj(bQ.em - 1, this.aUc), this.iJ = new Array(this.iK * this.aUd), b8.pk.a1J(this.iJ);
		var eh, ej, aUa = this.aUa,
			i = this.iK;
		for (eh = -1; eh <= 1; eh++)
			for (ej = -1; ej <= 1; ej++) aUa[3 * (1 + ej) + 1 + eh] = ej * i + eh
	}, this.p4 = function(aUg, aA) {
		return this.iJ[aA].push(aUg), this.iJ[aA].length - 1
	}, this.aUS = function(aUh, aUB, aUI) {
		var aUi, aUj, aUB = bK.iI(aUB),
			aUI = bK.iI(aUI);
		return aUB === aUI ? aUh : (aUi = this.iJ[aUB].pop(), this.iJ[aUB].length === aUh ? this.p4(aUi, aUI) : (aUj = this.iJ[aUB][aUh], this.iJ[aUB][aUh] = aUi, bL.x.aTR[aUi] = aUh, this.p4(aUj, aUI)))
	}
}

function aT3() {
	function a0E(aUI, aUk) {
		if (! function(aUI, aT9) {
				var hc = bK.iH(aUI),
					aUo = Math.abs(bK.ei(aT9) - bK.ei(hc)),
					hc = Math.abs(bK.ek(aT9) - bK.ek(hc));
				return 0 !== Math.max(aUo, hc) && (function(aUB, aUI, aUo, aUp) {
					var aUr = bK.hx(aUB),
						aUB = bK.i0(aUB),
						aUt = bK.hx(aUI),
						aUI = bK.i0(aUI),
						aUt = aUt - aUr,
						aUI = aUI - aUB,
						aUx = Math.abs(aUt),
						aUy = Math.abs(aUI),
						aUt = 0 < aUt ? 1 : 3,
						aUI = 0 < aUI ? 2 : 0;
					aUy < aUx ? aV1(aUr, aUB, aUr + aUx, aUB + aUy, aUt, aUI, aUo) : aV1(aUB, aUr, aUB + aUy, aUr + aUx, aUI, aUt, aUp)
				}(aUI, bK.iG(aT9), aUo, hc), !0)
			}(aUI, aUk)) return !1;
		if (0 === bM.f4[0]) return !!ab.h2(aUk << 2);
		if (! function(aT9) {
				if (ab.h2(aT9 << 2)) return 1;
				return function(aT9) {
					var aA, hM, aU9 = bL.x.aU9,
						aV5 = bK,
						ea = bM.f4[0],
						aV6 = 4 * aT9;
					for (aA = ea - 1; 0 <= aA; aA--) {
						hM = aU9[aA];
						var aV7 = aV6;
						if (aV6 = aV5.iM(aV6, hM + 2 & 3), ab.h2(aV6)) return bM.f4[0] = aA, bM.fB[1] = aV6 >> 2, bM.fB[2] = 1 + hM, bM.fB[4] = aV7, 1
					}
					return
				}(aT9)
			}(aUk)) return !1;
		if (bM.fB[2] && ab.ef(bM.fB[4])) return !1;
		var aA, aUk = bK.iH(aUI),
			va = aAN,
			aU9 = bL.x.aU9,
			ea = bM.f4[0] - 1,
			aV6 = 4 * aUk,
			ha = bK.ha;
		for (aA = 0; aA < ea; aA++)
			if (aV6 += ha[aU9[aA]], 0 !== va[aV6 + 3] || 2 !== va[aV6 + 2]) return !!void 0;
		return !!1
	}

	function aV1(aUr, aUs, aUt, aUu, aUz, aV0, aUo) {
		for (var ej, aU9 = bL.x.aU9, g8 = 0, aV2 = 0, j = aUu - aUs, i = aUt - aUr, aV3 = aUr % 16, aA = 1; aA <= aUo; aA++) aU9[g8++] = aUz, aU9[g8] = aV0, g8 += (ej = (j * (aV3 + (aA << 4)) + .5) / i >> 4) - aV2, aV2 = ej;
		bM.fG(bM.f4, g8)
	}
	this.kS = function(player, aUk) {
		var hM, hc, gy = bK.hk(player, aUk);
		return gy !== aUk && (hM = bK.hb(gy, aUk), hc = bK.iL(gy, hM), !(!ab.h2(hc << 2) && (hM = bK.hi(gy, aUk, hM), hc = bK.iL(gy, hM), !ab.h2(hc << 2)) || (bM.fB[0] = hc, bM.fB[1] = aUk, bM.fB[2] = 0, hc !== aUk && (!a0E(bK.iG(hc), aUk) ||
			0 !== bM.fB[2] && bK.hq(player, bM.fB[1] + bK.hZ[bM.fB[2] - 1] << 2)))))
	}, this.p6 = function(aUk) {
		var aUB = bL.x.m6[bM.fB[3]];
		return bM.fB[1] = aUk, bM.fB[2] = 0, a0E(aUB, aUk)
	}
}

function aSz() {
	var xV = 32,
		xU = new Array(2);

	function vP(ev) {
		var eh, ej, eM, hy, hv, hR = xV,
			a1m = b8.pb.vP(hR, hR),
			hX = b8.pb.getContext(a1m, !0),
			hU = b8.pb.getImageData(hX, hR, hR),
			va = hU.data,
			kX = (hR >> 1) - .5,
			kY = Math.sqrt(kX * kX);
		for (va.fill(255), ej = 0; ej < hR; ej++)
			for (eh = 0; eh < hR; eh++) hv = eh - kX, hy = ej - kX, eM = 4 * (ej * hR + eh), hv = 714 * (kY - Math.sqrt(hv * hv + hy * hy)) / kY, va[2 + eM] = ev, va[3 + eM] = 255 < hv ? 0 : hv;
		return hX.putImageData(hU, 0, 0), a1m
	}
	this.a4F = -1, this.dU = function() {
		this.a4F = -1, xU[0] || (xU[0] = vP(255), xU[1] = vP(0))
	}, this.aV9 = function(hX, eE, eh, ej, dw, aA) {
		b8.fv.gm(aC.eK) && (hX.setTransform(eE *= 4 / 3 * .625, 0, 0, eE, eh - (dw *= 4 / 3), ej - dw), hX.drawImage(xU[+(bL.x.aTD[aA] === this.a4F)], 0, 0))
	}
}

function dX() {
	this.aP8 = [L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446)];
	var aVA = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.aA3 = new Array(aVA.length), this.dU = function() {
		var g = bh.e7.data[155].value.split(";"),
			kX = g.length;
		if (function() {
				for (var ea = aVA.length, aA = 0; aA < ea; aA++) bV.aA3[aA] = aVA[aA]
			}(), !(kX > aVA.length))
			for (var aA = 0; aA < kX; aA++) g[aA].length && (this.aA3[aA] = g[aA])
	}, this.aPA = function(dx, code) {
		for (var aA3 = this.aA3, aVC = aVA, pI = (aA3[dx] = code, ""), ea = aA3.length, aVD = [], aA = 0; aA < ea; aA++) aVD.push(aA3[aA] === aVC[aA] ? "" : aA3[aA]);
		ea--;
		for (aA = 0; aA < ea; aA++) pI += aVD[aA] + ";";
		bh.r3.r4(155, pI += aVD[ea])
	}, this.aP7 = function() {
		bh.r3.r4(155, ""), this.dU()
	}, this.ev = function(code, dx) {
		return code === this.aA3[dx] || code === this.aA3[dx + 1]
	}
}

function dS() {
	var aVF = new Array(1),
		aVG = new Array(1),
		aVH = 20,
		e8 = 0,
		aVI = !1;

	function aVK() {
		aVH++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aVG[aA] = 0, aVF[aA] = document.createElement("audio"), aVF[aA].src = src, aVF[aA].setAttribute("preload", "auto"), aVF[aA].setAttribute("controls", "none"), aVF[aA].style.display = "none", aVF[aA].onpause = function() {
					aVG[aA] = 1
				}, aVF[aA].oncanplaythrough = function() {
					aVG[aA] = 0 === aVG[aA] ? 1 : aVG[aA]
				}, document.body.appendChild(aVF[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aVI = !0
		}
	}, this.tD = function() {
		if (aVI) {
			aVI = !1;
			for (var aA = 0; 0 <= aA; aA--) aVF[aA].onpause = null, aVF[aA].oncanplaythrough = null, document.body.removeChild(aVF[aA]), aVF[aA] = null
		}
	}, this.play = function() {
		if (aVI) {
			var di = performance.now();
			if (e8 + 66 < di)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aVG[aA]) return e8 = di, aVG[aA] = 2, void aVF[aA].play();
			0 < aVH && (aVH--, setTimeout(aVK, 66))
		}
	}
}

function cU() {
	this.a6n = function() {
		var aVN;
		return !(ak.jq < 3 || af.gN[l4[0]] >= aC.jZ >> 1) && (aC.hP ? (aVN = ad.aGl(), !(2 * ad.aGm(bf.l1()) >= aVN)) : function() {
			var aVN = ad.aGl();
			if (2 * af.gb[l4[0]] >= aVN) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aUC = aC.jp, gb = af.gb, aA = 0; aA < aUC; aA++) gb[aA] = 512;
			var aUD = aC.w6,
				k2 = aD.k2,
				hE = aD.hE;
			for (aA = aUC; aA < aUD; aA++) gb[aA] = k2[hE[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var ea = aC.w6, gb = af.gb, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < ea; aA++) gb[aA] = sResourcesValue
		} : function() {
			for (var ea = aC.w6, gb = af.gb, sResourcesData = aC.data.sResourcesData, aA = 0; aA < ea; aA++) gb[aA] = sResourcesData[aA]
		})();
		bb.lb[8] = af.gb[aC.eK]
	}
}

function dJ() {
	var aVS = 501,
		aVU = (this.aVT = new Uint32Array(aVS), this.a2R = new Uint32Array(aVS), this.a9i = new Uint16Array(aVS), this.aPG = 0, 1),
		aVV = 0;

	function aVY(self) {
		self.max.fill(0)
	}

	function aVa(self, aA) {
		self.max[0] = Math.max(self.aVT[aA], self.max[0]), self.max[1] = Math.max(self.a2R[aA], self.max[1]), self.max[2] = Math.max(self.a9i[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aVW = 0, this.lb = new Array(21), this.aVX = null, this.dV = function() {
		this.aVX = [L(447), L(448), L(449), L(450), L(451), L(452), L(453), L(454), L(288), L(289), L(455), L(456), L(457), L(458), "", L(459), L(460), L(461), L(248), L(462), L(463)]
	}, this.dU = function() {
		this.aPG = 0, aVU = 1, this.aVW = 0, aVV = 0, aVY(this), this.lb.fill(0)
	}, this.oz = function(player, i9) {
		b8.fv.a2M(player) && (this.lb[0] += i9 + 1, this.lb[1]++, this.lb[12] += bM.f7[1])
	}, this.oP = function(player, o4) {
		__fx.donationsTracker.logDonation(player, o4, bM.f7[0]);
		player === aC.eK && (aM.oP(bM.f7[0], bM.f7[1], o4), this.lb[12] += bM.f7[1], this.lb[16] += bM.f7[0]), o4 === aC.eK && (aM.a5Z(bM.f7[0], player), this.lb[10] += bM.f7[0])
	}, this.p2 = function(player) {
		b8.fv.a2M(player) && (this.lb[2]++, this.lb[12] += bM.f7[1])
	}, this.pD = function(player) {
		b8.fv.a2M(player) && (this.lb[19]++, this.lb[12] += bM.f7[1])
	}, this.aU7 = function(player) {
		b8.fv.a2M(player) && this.lb[20]++
	}, this.fz = function(player, a36, dx) {
		b8.fv.a2M(player) && (this.lb[dx] += a36)
	}, this.ij = function() {
		var self;
		this.aVW || 0 < aVV-- || ((self = this).aVT[self.aPG] = af.gN[aC.eK], self.a2R[self.aPG] = af.gb[aC.eK], self.a9i[self.aPG] = ad.a9j(aC.eK), aVa(self, self.aPG), self.aPG++, self.aPG === aVS && function(self) {
			aVY(self), aVa(self, 0), self.aPG = 1 + bJ.dj(aVS, 2);
			for (var aA = 1; aA < self.aPG; aA++) self.aVT[aA] = self.aVT[2 * aA], self.a2R[aA] = self.a2R[2 * aA], self.a9i[aA] = self.a9i[2 * aA], aVa(self, aA);
			aVU *= 2
		}(self), aVV = aVU - 1, bc.lS(), 0 === af.lf[aC.eK] && (self.aVW = bd.jm()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rx = 0, this.ry = 0, this.aVc = 0, this.aVd = 0, this.a70 = 0, this.sg = 0;
	var aVf = this.aVe = 0;
	this.aVg = 0, this.aVh = 0, this.aVi = 0, this.a6M = 0, this.dx = 0, this.a9L = null, this.hH = !1, this.aVj = -1, this.aVk = !1, this.aVl = [0, 0], this.dV = function() {
		this.a9L = [L(464), L(120, 0, "Balance"), L(119, 0, "Interest"), L(465)]
	}, this.dU = function() {
		this.hH = !1, this.aVj = -1, this.aVk = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var ed = z.a0.qz() && h.i < h.j ? 1 : z.a0.qz() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(ed * this.i), this.i -= z.a0.qz() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6M = Math.floor(this.j / 150), this.a6M = Math.max(this.a6M, 1.5), this.rx = Math.floor(1 + .02 * this.i),
			this.ry = Math.floor(1 + .04 * this.i), this.a70 = this.ry, aVf = Math.floor(.75 * this.a70), this.sg = Math.floor(1 + .075 * this.i), this.aVg = Math.floor(1 + .1125 * this.i), this.aVh = Math.floor(this.i * (z.a0.qz() ? .03 :
			.029)), this.aVh = Math.max(this.aVh, 4), this.aVi = Math.floor(.035 * this.i), this.aVi = Math.max(this.aVi, 4), this.aVe = this.j - 2 * this.a70 - this.sg - this.aVg, this.hH && this.aVm()
	}, this.gn = function(ks, kt) {
		var w9, w8;
		return !!this.hH && (w8 = ks, w9 = kt, ks -= bJ.dj(h.i - this.i, 2), kt -= bJ.dj(h.j - this.j, 2), ks < 0 || kt < 0 || ks >= this.i || kt >= this.j || ks >= this.i - this.aVg && kt < this.aVg ? -1 !== aL.gn(w8, w9) || bA.gn(w8, w9) ||
			this.qs() : kt < this.aVg || (kt < this.j - this.sg ? (this.aVk = !0, this.aVj = (ks - 2 * this.rx - this.aVc) / this.aVd, 3 !== this.dx && (bd.dc = !0)) : (w8 = (w8 = Math.floor(ks / (this.i / this.a9L.length))) < 0 ? 0 : w8 >=
				this.a9L.length ? this.a9L.length - 1 : w8) !== this.dx && (this.dx = w8, this.aVm(), bd.dc = !0)), !0)
	}, this.a0R = function(ks, kt) {
		return this.aVl[0] = ks, this.aVl[1] = kt, !(!this.hH || !this.aVk || (ks -= bJ.dj(h.i - this.i, 2), kt = this.aVj, this.aVj = (ks - 2 * this.rx - this.aVc) / this.aVd, (0 <= this.aVj && this.aVj <= 1 || 0 <= kt && kt <= 1) && (bd.dc = !
			0), 0))
	}, this.a0q = function() {
		this.aVk && (this.aVk = !1)
	}, this.a12 = function() {
		this.hH ? this.qs() : this.show()
	}, this.show = function() {
		bb.aPG < 2 || (this.hH = !0, this.aVm())
	}, this.qs = function() {
		this.hH = !1, this.aVj = -1, bd.dc = !0
	}, this.aVm = function() {
		this.dx < 2 ? this.aVc = aP.measureText(b8.zX.yA(bb.max[this.dx]), b8.pb.rQ(0, this.aVh)) : 2 === this.dx && (this.aVc = aP.measureText(b8.zX.a2z(6, 2), b8.pb.rQ(0, this.aVh))), this.aVd = this.i - 2 * this.rx - this.aVc - this.ry
	}, this.lS = function() {
		this.hH && this.aVm()
	}, this.tj = function() {
		this.hH && this.a7H()
	}, this.a7H = function() {
		var eh = bJ.dj(h.i - this.i, 2),
			ej = bJ.dj(h.j - this.j, 2);
		tk.setTransform(1, 0, 0, 1, eh, ej), tk.fillStyle = b9.me, tk.fillRect(0, this.aVg, this.i, this.j - this.aVg), this.aVn(), this.aO6(), tk.strokeRect(0, 0, this.i, this.j), b8.pb.textAlign(tk, 2), tk.font = b8.pb.rQ(0, this.aVh), 0 ===
			this.dx ? this.aVo(bb.aVT, eh, ej) : 1 === this.dx ? this.aVo(bb.a2R, eh, ej) : 2 === this.dx ? this.aVp(eh, ej) : 3 === this.dx && (this.aVq(eh, ej), this.aVr(eh, ej)), aL.a4f(Math.floor(eh + this.i - .725 * this.aVg), Math.floor(
				ej + .275 * this.aVg), Math.floor(.45 * this.aVg)), tk.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVn = function() {
		var aA, di;
		for (tk.lineWidth = this.a6M, b8.pb.textBaseline(tk, 1), b8.pb.textAlign(tk, 1), tk.strokeStyle = b9.mh, tk.font = b8.pb.rQ(1, this.aVi), di = this.i / this.a9L.length, tk.fillStyle = b9.n3, tk.fillRect(this.dx * di, this.j - this.sg, di,
				this.sg), tk.fillStyle = b9.mh, tk.fillRect(0, this.j - this.sg - .5 * this.a6M, this.i, this.a6M), aA = 1; aA <= 3; aA++) tk.fillRect(aA * di, this.j - this.sg, this.a6M, this.sg);
		for (aA = this.a9L.length - 1; 0 <= aA; aA--) tk.fillText(b8.x9.a1y(this.a9L[aA], 0, .9 * di), (aA + .5) * di, this.j - .46 * this.sg)
	}, this.aO6 = function() {
		tk.fillStyle = b9.nT, tk.fillRect(0, 0, this.i, this.aVg), tk.fillStyle = b9.mh, tk.fillRect(0, this.aVg - .5 * this.a6M, this.i, this.a6M), tk.font = b8.pb.rQ(1, .39 * this.aVg), tk.fillText(b8.x9.a1y(L(466), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVg))
	}, this.aVo = function(g, eh, ej) {
		var kX = bb.max[this.dx],
			a1L = (tk.setTransform(1, 0, 0, 1, eh + 2 * this.rx + this.aVc, ej + this.a70 + this.aVg), tk.lineWidth = 2, this.aVe / Math.sqrt(kX));
		tk.beginPath(), tk.moveTo(this.aVd, this.aVe - a1L * Math.sqrt(g[bb.aPG - 1]));
		for (var aA = bb.aPG - 2; 0 <= aA; aA--) tk.lineTo(aA * this.aVd / (bb.aPG - 1), this.aVe - a1L * Math.sqrt(g[aA]));
		tk.stroke();
		eh = this.a4f(g, a1L, .5);
		eh < .95 && tk.fillText(b8.zX.yA(kX), -this.rx, 0), .05 < Math.abs(eh - .5) && tk.fillText(b8.zX.yA(Math.floor(kX / 4)), -this.rx, Math.floor(this.aVe / 2)), .05 < eh && tk.fillText("0", -this.rx, this.aVe)
	}, this.aVp = function(eh, ej) {
		tk.setTransform(1, 0, 0, 1, eh + 2 * this.rx + this.aVc, ej + this.a70 + this.aVg), tk.lineWidth = 2;
		var a1L = this.aVe / Math.max(bb.max[this.dx], 1);
		tk.beginPath(), tk.moveTo(this.aVd, this.aVe - a1L * bb.a9i[bb.aPG - 1]);
		for (var aA = bb.aPG - 2; 0 <= aA; aA--) tk.lineTo(aA * this.aVd / (bb.aPG - 1), this.aVe - a1L * bb.a9i[aA]);
		tk.stroke();
		eh = this.a4f(bb.a9i, a1L, 1), ej = bb.max[this.dx] / 100;
		eh < .95 && tk.fillText(b8.zX.a2z(ej, 2), -this.rx, 0), .05 < Math.abs(eh - .5) && tk.fillText(b8.zX.a2z(ej / 2, 2), -this.rx, Math.floor(this.aVe / 2)), .05 < eh && tk.fillText(b8.zX.a2z(0, 2), -this.rx, this.aVe)
	}, this.aVq = function(eh, ej) {
		tk.setTransform(1, 0, 0, 1, eh + .34 * this.i, ej + 2 * aVf + this.aVg), b8.pb.textAlign(tk, 2);
		for (var a96 = this.j - 4 * aVf - this.sg - this.aVg, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) tk.fillText(b8.x9.a1y(bb.aVX[g[aA]], 0, .31 * this.i), 0, aA * a96 / 9);
		var f2 = bb.lb;
		for (tk.setTransform(1, 0, 0, 1, eh + .39 * this.i, ej + 2 * aVf + this.aVg), b8.pb.textAlign(tk, 0), tk.fillText(b8.zX.a2z(100 * f2[0] / (1024 * Math.max(f2[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) tk.fillText(f2[g[aA]].toString(), 0,
			aA * a96 / 9);
		tk.fillText(b8.zX.a2z(100 * (1 - af.gN[aC.eK] / f2[7]), 0), 0, a96)
	}, this.aVr = function(eh, ej) {
		tk.setTransform(1, 0, 0, 1, eh + .79 * this.i, ej + 2 * aVf + this.aVg), b8.pb.textAlign(tk, 2);
		var aA, a96 = this.j - 4 * aVf - this.sg - this.aVg;
		for (tk.fillStyle = b9.my, aA = 2; 0 <= aA; aA--) tk.fillText(b8.x9.a1y(bb.aVX[aA + 8], 0, .31 * this.i), 0, aA * a96 / 9);
		tk.fillText(b8.x9.a1y(bb.aVX[18], 0, .31 * this.i), 0, 3 * a96 / 9), tk.fillStyle = b9.mx, tk.fillText(b8.x9.a1y(bb.aVX[11], 0, .31 * this.i), 0, 4 * a96 / 9), tk.fillStyle = b9.nG, tk.fillText(b8.x9.a1y(bb.aVX[13], 0, .31 * this.i), 0,
				5 * a96 / 9), tk.fillText(b8.x9.a1y(bb.aVX[15], 0, .31 * this.i), 0, 6 * a96 / 9), tk.fillText(b8.x9.a1y(bb.aVX[16], 0, .31 * this.i), 0, 7 * a96 / 9), tk.fillText(b8.x9.a1y(bb.aVX[12], 0, .31 * this.i), 0, 8 * a96 / 9), tk
			.fillStyle = b9.nF, tk.fillText(b8.x9.a1y(bb.aVX[17], 0, .31 * this.i), 0, a96), tk.fillStyle = b9.my;
		var f2 = bb.lb,
			aCr = f2[8] + f2[9] + f2[10] + f2[18],
			aCr = b8.zX.yA(aCr),
			aMv = tk.measureText(aCr).width,
			eh = (tk.setTransform(1, 0, 0, 1, eh + .83 * this.i + aMv, ej + 2 * aVf + this.aVg), tk.fillText(b8.zX.yA(f2[8]), 0, 0), tk.fillText(b8.zX.yA(f2[9]), 0, a96 / 9), tk.fillText(b8.zX.yA(f2[10]), 0, 2 * a96 / 9), tk.fillText(b8.zX.yA(f2[
				18]), 0, 3 * a96 / 9), tk.fillStyle = b9.mx, tk.fillText(aCr, 0, 4 * a96 / 9), tk.fillStyle = b9.nG, tk.fillText(b8.zX.yA(f2[13]), 0, 5 * a96 / 9), tk.fillText(b8.zX.yA(f2[15]), 0, 6 * a96 / 9), tk.fillText(b8.zX.yA(f2[16]),
				0, 7 * a96 / 9), tk.fillText(b8.zX.yA(f2[12]), 0, 8 * a96 / 9), f2[12] + f2[13] + f2[15] + f2[16]);
		tk.fillStyle = b9.nF, tk.fillText(b8.zX.yA(eh), 0, a96), tk.fillStyle = b9.mh
	}, this.a4f = function(g, a1L, a7s) {
		var aA, e, fH;
		return this.aVj < 0 || 1 < this.aVj ? .25 : (aA = this.aVj * (bb.aPG - 1), fH = g[e = Math.floor(aA)], fH += (aA - e) * (g[e < bb.aPG - 1 ? e + 1 : e] - fH), tk.strokeStyle = b9.mk, .04 < this.aVj && this.aVt(0, this.aVe - a1L * Math.pow(
				fH, a7s), aA * this.aVd / (bb.aPG - 1), this.aVe - a1L * Math.pow(fH, a7s)), .04 < fH / bb.max[this.dx] && this.aVt(aA * this.aVd / (bb.aPG - 1), this.aVe, aA * this.aVd / (bb.aPG - 1), this.aVe - a1L * Math.pow(fH, a7s)), tk
			.fillStyle = b9.nI, tk.beginPath(), tk.arc(aA * this.aVd / (bb.aPG - 1), this.aVe - a1L * Math.pow(fH, a7s), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tk.fill(), g = this.aVj * bd.a9k, g = 0 === af.lf[aC.eK] ? Math.floor(g * bb
				.aVW) : Math.floor(g * bd.jm()), tk.fillStyle = b9.mh, tk.fillText(1 === a7s ? b8.zX.a2z(fH / 100, 2) : b8.zX.yA(Math.floor(fH)), -this.rx, this.aVe - a1L * Math.pow(fH, a7s)), b8.pb.textAlign(tk, 1), tk.fillText(aV.a9Z(g),
				aA * this.aVd / (bb.aPG - 1), this.aVe + this.aVh - (z.a0.qz() ? 2 : 0) - this.a6M), b8.pb.textAlign(tk, 2), a1L * Math.pow(fH, a7s) / this.aVe)
	}, this.aVt = function(m7, m8, mK, mL) {
		tk.beginPath(), tk.moveTo(m7, m8), tk.lineTo(mK, mL), tk.stroke()
	}
}

function bt() {
	this.aVu = "https://", this.aVv = this.aVu + "territorial.io/", this.aPH = this.aVv + "changelog", this.aPL = this.aVv + "terms", this.aVw = this.aVv + "cookie_policy", this.aOi = this.aVv + "privacy", this.aPK = this.aVv + "tutorial", this.aPJ =
		this.aVv + "players", this.aPI = this.aVv + "clans", this.zi = this.aVv + "clan-results", this.aM4 = "https://patreon.com/c/territorial", this.aB2 = this.aVu + "play.google.com/store/apps/details?id=territorial.io", this.a00 = this.aVu +
		"apps.apple.com/app/id1581110913", this.aVx = this.aVu + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aB3 = this.aVu + "discord.gg/pthqvpTXmh", this.aB4 = this.aVu + "www.instagram.com/davidtschacher/", this.xk =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVy, this.x6 = new aVz, this.dU = function() {
		this.x.dU()
	}, this.ij = function() {
		0 !== this.x.a5i && this.x.a5i--
	}
}

function aVz() {
	this.tj = function() {
		if (0 !== bN.x.a5i && (tk.globalAlpha = Math.min(bN.x.a5i / 580, 1), tk.drawImage(bN.x.aW2, 1 + aR.x4(), 1 + aR.x5()), tk.globalAlpha = 1, aC.gv)) {
			for (var m7 = iA / iB, m8 = iC / iB, mK = (h.i + iA) / iB, mL = (h.j + iC) / iB, g8 = bN.x.aW3 * iB, aW4 = bN.x.aW4, aA = aC.jp - 1; 0 <= aA; aA--) ! function(aA, g8, m7, m8, mK, mL, aW4) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g8 *= 2;
				0 === af.lf[aA] || 0 === af.gN[aA] || (mK = h.i * ((af.iO[aA] + af.iP[aA] + 1) / 2 - m7) / (mK - m7) - .5 * g8, m7 = h.j * ((af.iQ[aA] + af.iR[aA] + 1) / 2 - m8) / (mL - m8) - .5 * g8, mK > h.i) || m7 > h.j || mK < -g8 || m7 <
					-g8 || (tk.setTransform(highlight ? iB * 2 : iB, 0, 0, highlight ? iB * 2 : iB, mK, m7), tk.drawImage(aW4[aC.hP ? be.eY[aA] : 1], 0, 0))
			}(aA, g8, m7, m8, mK, mL, aW4);
			tk.setTransform(iB, 0, 0, iB, 0, 0)
		}
	}
}

function aVy() {
	this.aW3 = 28, this.a5i = 0, this.aW2 = null;
	var aW6 = this.aW4 = null;

	function aW9(hR, aWA) {
		var eh, ej, eM, hv, a1m = b8.pb.vP(hR, hR),
			hX = b8.pb.getContext(a1m, !0),
			hU = b8.pb.getImageData(hX, hR, hR),
			va = hU.data,
			kX = (hR >> 1) - .5,
			aWB = .5 + kX;
		for (aWB *= aWB, ej = 0; ej < hR; ej++)
			for (eh = 0; eh < hR; eh++) hv = (hv = eh - kX) * hv + (hv = ej - kX) * hv, va[eM = 4 * (ej * hR + eh)] = aWA[0], va[1 + eM] = aWA[1], va[2 + eM] = aWA[2], va[3 + eM] = (aWB - hv) * aWA[3] / aWB;
		return hX.putImageData(hU, 0, 0), a1m
	}

	function aV9(aA, hX, a1m, hR) {
		var highlight, eh, ej;
		0 !== af.lf[aA] && 0 !== af.gN[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (hR *= 2), eh = af.iO[aA] + af.iP[aA] + 1 - hR - 2 >> 1, ej = af.iQ[aA] + af.iR[aA] + 1 - hR - 2 >> 1, highlight ? hX
			.drawImage(a1m[aC.hP ? 9 === aC.k6 && 5 === aD.hE[aA] ? 3 : be.eY[aA] : aA < aC.jp ? 1 : 0], eh, ej, hR, hR) : hX.drawImage(a1m[aC.hP ? 9 === aC.k6 && 5 === aD.hE[aA] ? 3 : be.eY[aA] : aA < aC.jp ? 1 : 0], eh, ej))
	}
	this.dU = function() {
		var rD;
		this.a5i = 700,
			function(rD) {
				var hR = rD.aW3;
				if (rD.aW4 = [], aW6 = [], aC.hP) {
					for (var aA = 0; aA <= aC.wD; aA++) rD.aW4.push(aW9(hR, be.aU0[be.kB[aA]])), aW6.push(aW9(hR >> 1, be.aU0[be.kB[aA]]));
					9 === aC.k6 && aW6.push(aW9(hR, be.aU0[1]))
				} else rD.aW4.push(aW9(hR, be.aU0[7])), rD.aW4.push(aW9(hR, be.aU0[4])), aW6.push(aW9(hR >> 1, be.aU0[7]))
			}(this),
			function(rD, aWC) {
				var aA, aW2 = rD.aW2,
					hX = b8.pb.getContext(aW2, !0),
					ea = aC.eX,
					hR = rD.aW3 >> 1;
				hX.imageSmoothingEnabled = !1, hX.setTransform(1, 0, 0, 1, 0, 0), aWC && hX.clearRect(0, 0, aW2.width, aW2.height);
				if (9 === aC.k6) {
					hR <<= 1;
					rD = ax.kF[5];
					for (aA = ea - rD; aA < ea; aA++) aV9(aA, hX, aW6, hR);
					ea -= rD, hR >>= 1
				}
				for (aA = aC.jp; aA < ea; aA++) aV9(aA, hX, aW6, hR)
			}(this, null !== (rD = this).aW2 && rD.aW2.width === bQ.el - 2 && rD.aW2.height === bQ.em - 2 || (rD.aW2 = b8.pb.vP(bQ.el - 2, bQ.em - 2), !1)), aC.gv || this.a3H()
	}, this.aTz = aW9, this.a3H = function() {
		for (var ea = aC.jp, hR = this.aW3, aW4 = this.aW4, hX = b8.pb.getContext(this.aW2, !0), aA = 0; aA < ea; aA++) aV9(aA, hX, aW4, hR)
	}
}

function d3() {
	function aWF() {
		8 === aC.k6 && 1 === aC.ys && bP.yV.yr()
	}

	function aWE(player) {
		aC.gv ? (aj.aFZ(player), ak.aIY(), aC.k8 && aC.ot.ij()) : b1.aBJ(player)
	}
	this.oJ = function(player) {
		aM.z4(player, player === aC.eK ? 21 : 22), aWE(player), aWF()
	}, this.oq = function(player) {
		1 === aC.ys && 0 !== af.lf[player] && 2 !== af.a2I[player] && aWE(player), aC.yv--, aC.yu--, aM.z4(player, 4), b8.fv.gl(2) && aV.lR(!0), aWF()
	}
}

function dD() {
	this.aRb = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a93 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.mh, "rgb(170,170,170)"
	], this.aWG = [b9.mh, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.mh, b9.mY], this.aWH = [b9.mY, b9.mh, b9.mh, b9.mh, b9.mY, b9.mY, b9.mY, b9.mY, b9.mh];
	var aWI = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aWJ = (this.aI0 = ["rgba(" + aWI[0] + ",", "rgba(" + aWI[1] + ",", "rgba(" + aWI[2] + ",", "rgba(" + aWI[3] + ",", "rgba(" + aWI[4] + ",", "rgba(" + aWI[5] + ",", "rgba(" + aWI[6] + ",", "rgba(" + aWI[7] + ",", "rgba(" + aWI[8] + ",",
			"rgba(" + aWI[9] + ","
		], this.aI1 = ["rgb(" + aWI[0] + ")", "rgb(" + aWI[1] + ")", "rgb(" + aWI[2] + ")", "rgb(" + aWI[3] + ")", "rgb(" + aWI[4] + ")", "rgb(" + aWI[5] + ")", "rgb(" + aWI[6] + ")", "rgb(" + aWI[7] + ")", "rgb(" + aWI[8] + ")", "rgb(" + aWI[
			9] + ")"
		], this.zE = null, this.aU0 = [
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
	this.kB = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eY = new Uint8Array(aC.eX), this.a94 = new Uint8Array(aC.eX), this.wJ = new Uint16Array(aC.eX), this.wK = new Uint16Array(this.kB.length + 1), this.wL = new Uint16Array(this.kB.length), this.dV =
		function() {
			this.zE = [L(467), L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(475)]
		}, this.dU = function() {
			if (this.eY.fill(0), this.aWK(), aC.hP) {
				if (9 === aC.k6) {
					for (var eY = be.eY, aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) eY[aA] = 1;
					var ea = aC.eX;
					for (aA = aC.data.teamPlayerCount[7]; aA < ea; aA++) eY[aA] = 2;
					be.kB[1] = 7, be.kB[2] = 8
				} else aC.k8 ? function() {
					var colorsData = aC.data.colorsData;
					if (!aC.data.selectableColor)
						for (var aA = aC.jp - 1; 0 <= aA; aA--) colorsData[aA] = aw.j7(262144);
					var aWV = 0,
						eq = 768,
						aR5 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aC.data.teamPlayerCount;
					for (aA = 0; aA < 9; aA++)
						if (teamPlayerCount[aA]) {
							for (var ed = 0, eu = 0; eu < 3; eu++) ed += Math.abs(aWJ[aA][eu] - aR5[eu]);
							ed < eq && (aWV = aA, eq = ed)
						} var aWW = new Uint16Array(9);
					for (aA = 0; aA < 9; aA++) aWW[aA] = teamPlayerCount[aA];
					var kB = be.kB,
						aWX = new Uint8Array(9),
						g2 = (kB[0] = 0, 1);
					for (aA = 1; aA < 9; aA++) aWW[aA] && (aWX[aA] = g2, kB[g2++] = aA);
					var j6 = aC.jp,
						eY = be.eY;
					aWW[aWV] ? (aWW[aWV]--, eY[0] = aWX[aWV]) : j6 = 0;
					var ev = 0;
					for (aA = j6; aA < aC.w6; aA++) {
						var hN = kB[ev];
						if (aWW[hN]) aWW[hN]--, eY[aA] = aWX[hN];
						else if (aA--, 9 <= ++ev) return console.log("error 325")
					}
				}() : this.ij();
				! function() {
					for (var ea = aC.eX, wJ = be.wJ, wK = be.wK, wL = be.wL, eY = be.eY, kB = be.kB, wC = kB.length, e7 = new Array(wC), aA = 0; aA < wC; aA++) e7[aA] = [];
					for (aA = 0; aA < ea; aA++) e7[kB[eY[aA]]].push(aA);
					for (aA = 1; aA <= wC; aA++) wK[aA] = wK[aA - 1] + e7[aA - 1].length;
					for (aA = 0; aA < wC; aA++)
						for (var g2 = e7[aA].length, kX = wK[aA], hN = 0; hN < g2; hN++) wJ[hN + kX] = e7[aA][hN];
					var jp = aC.jp;
					for (aA = 0; aA < wC; aA++)
						for (g2 = e7[aA].length, kX = wK[aA], hN = 0; hN < g2; hN++)
							if (wJ[hN + kX] >= jp) {
								wL[aA] = hN;
								break
							}
				}(), ! function() {
					for (var ea = aC.eX, eY = be.eY, a94 = be.a94, kB = be.kB, aA = 0; aA < ea; aA++) a94[aA] = kB[eY[aA]];
					9 === aC.k6 && a94.fill(1, ea - ax.kF[5])
				}()
			}
		}, this.aWK = function() {
			for (var aA = this.kB.length - 1; 0 <= aA; aA--) this.kB[aA] = aA
		}, this.ij = function() {
			var hf = new Uint8Array(aC.jp),
				hg = new Uint8Array(aC.jp),
				aWP = new Uint16Array(8),
				aWQ = new Uint16Array(this.kB.length);
			this.aWR(hf, hg, aWP, 1), this.aFC(aWP), this.aWS(aWQ, hf, hg), this.aWT(hf, hg, aWQ), this.aWU()
		}, this.aWR = function(hf, hg, aWW, aWY) {
			for (var eu, e, aWZ, ea = this.kB.length - aWY, g = new Uint16Array(ea), colorsData = aC.data.colorsData, aA = aC.jp - 1; 0 <= aA; aA--) {
				for (eu = ea; aWY <= eu; eu--) g[eu - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aWJ[eu][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aWJ[eu][1]) + Math.abs(4 * (63 & colorsData[aA]) - aWJ[eu][2]);
				for (aWZ = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aWZ && (aWZ = g[e], hf[aA] = e);
				for (aWW[hf[aA]] += 4, aWZ = 768, eu = ea - 1; 0 <= eu; eu--) g[e = (eu + aA) % ea] < aWZ && e !== hf[aA] && (aWZ = g[e], hg[aA] = e);
				aWW[hg[aA]]++
			}
		}, this.aFC = function(aWW) {
			for (var eu, kZ, ea = this.kB.length - 1, aA = ea; 0 <= aA; aA--) this.kB[aA] = aA;
			for (aA = ea - 1; 0 <= aA; aA--) aWW[aA]++;
			for (aA = 1; aA <= ea; aA++) {
				for (kZ = 0, eu = 1; eu < ea; eu++) aWW[eu] > aWW[kZ] && (kZ = eu);
				aWW[kZ] = 0, this.kB[aA] = kZ + 1
			}
		}, this.aWS = function(aWQ, hf, hg) {
			var eu, zb, ev, ed, e, mJ, sF, aWa = this.kB.length - 1,
				q5 = new Uint16Array(aWa),
				aWb = [],
				aWc = 0,
				za = [],
				aWd = [];
			loop: for (var aA = 0; aA < aC.jp; aA++)
				if (null !== (zb = b8.zX.zc(af.zZ[aA]))) {
					for (eu = za.length - 1; 0 <= eu; eu--)
						if (zb === za[eu]) {
							aWd[eu].push(aA), aWc = Math.max(aWc, aWd[eu].length);
							continue loop
						} za.push(zb), aWb.push(!1), aWd.push([aA]), aWc = Math.max(aWc, 1)
				}
			for (; 2 < aC.wD && aWc > bJ.dj(aC.jp, aC.wD);) aC.wD--, aC.k6--;
			for (eu = za.length - 1; 0 <= eu; eu--) {
				for (ed = -1, ev = za.length - 1; 0 <= ev; ev--) !aWb[ev] && (-1 === ed || aWd[ev].length > aWd[ed].length) && (ed = ev);
				for (ev = aWa - 1; 0 <= ev; ev--) q5[ev] = 1;
				for (ev = aWd[ed].length - 1; 0 <= ev; ev--) q5[hf[aWd[ed][ev]]] += 3, q5[hg[aWd[ed][ev]]]++;
				for (aA = aWa - 1; 0 <= aA; aA--) {
					for (e = ed % aWa, ev = aWa - 1; 0 <= ev; ev--) q5[ev] > q5[e] && (e = ev);
					for (mJ = -1, ev = aC.wD; 0 < ev; ev--)
						if (this.kB[ev] === e + 1) {
							mJ = ev;
							break
						} if (q5[e] = 0, -1 !== mJ) {
						for (sF = 0, ev = aC.wD; 0 < ev; ev--) aWQ[mJ] > aWQ[ev] && sF++;
						if (sF !== aC.wD - 1) {
							for (ev = aWd[ed].length - 1; 0 <= ev; ev--) aWQ[mJ]++, this.eY[aWd[ed][ev]] = mJ;
							break
						}
					}
				}
				aWb[ed] = !0
			}
		}, this.aWT = function(hf, hg, aWQ) {
			for (var aA, hu, ea = this.kB.length - 1, border = bJ.dj(aC.jp, aC.wD), aWe = (0 < aC.jp % aC.wD && border++, new Uint8Array(1 + ea)), eu = ea; 1 <= eu; eu--) aWe[this.kB[eu]] = eu;
			for (aA = 0; aA < aC.jp; aA++) hu = aWe[hf[aA] + 1], 0 === this.eY[aA] && hu <= aC.wD && aWQ[hu] < border && (aWQ[hu]++, this.eY[aA] = hu);
			for (aA = 0; aA < aC.jp; aA++) hu = aWe[hg[aA] + 1], 0 === this.eY[aA] && hu <= aC.wD && aWQ[hu] < border && (aWQ[hu]++, this.eY[aA] = hu);
			for (eu = aC.wD; 1 <= eu; eu--)
				for (aA = aC.jp - 1; 0 <= aA && !(aWQ[eu] >= border); aA--) 0 === this.eY[aA] && (aWQ[eu]++, this.eY[aA] = eu)
		}, this.aWU = function() {
			for (var aA = aC.jp; aA < aC.eX; aA++) this.eY[aA] = 1 + aA % aC.wD
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
		for (var aWf = !1, aWg = !1, ed = 3; 0 <= ed; ed--) {
			var g7 = gF[player][aA] + ec[ed];
			if (ab.aFM(g7, player)) continue loop;
			aWf = aWf || ab.h2(g7), aWg = aWg || ab.aFL(g7)
		}
		aWf ? gG[player].push(gF[player][aA]) : aWg ? f0[player].push(gF[player][aA]) : ab.wf(gF[player][aA], player), gF[player][aA] = gF[player][ea - 1], gF[player].pop(), ea--
	}
}

function gD() {
	af.gN[fT] -= fU
}

function gE(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) ab.wz(fT, border[aA]) || (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gH(border) {
	for (var ea = border.length, aA = ea - 1; 0 <= aA; aA--) !ab.wz(fT, border[aA]) && ab.eV(border[aA]) && (border[aA] = border[ea - 1], border.pop(), ea--)
}

function gI(border) {
	for (var ed, g7, ea = border.length, ec = ab.ec, aA = ea - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--)
			if (g7 = border[aA] + ec[ed], ab.aFM(g7, fT)) {
				af.gF[fT].push(border[aA]), border[aA] = border[ea - 1], border.pop(), ea--;
				break
			}
}

function gJ() {
	for (var ed, g7, ec = ab.ec, aA = fU - 1; 0 <= aA; aA--)
		for (ed = 3; 0 <= ed; ed--) g7 = fW[aA] + ec[ed], ab.aFN(fT, g7) && ab.aFO(g7) && (af.gF[fT].push(g7), ab.g4(g7, fT))
}

function gK() {
	var eh, ej;
	loop: for (; af.iQ[fT] < af.iR[fT];) {
		for (eh = af.iP[fT]; eh >= af.iO[fT]; eh--)
			if (ab.wz(fT, 4 * (af.iQ[fT] * bQ.el + eh))) break loop;
		af.iQ[fT]++
	}
	loop: for (; af.iQ[fT] < af.iR[fT];) {
		for (eh = af.iP[fT]; eh >= af.iO[fT]; eh--)
			if (ab.wz(fT, 4 * (af.iR[fT] * bQ.el + eh))) break loop;
		af.iR[fT]--
	}
	loop: for (; af.iO[fT] < af.iP[fT];) {
		for (ej = af.iR[fT]; ej >= af.iQ[fT]; ej--)
			if (ab.wz(fT, 4 * (ej * bQ.el + af.iO[fT]))) break loop;
		af.iO[fT]++
	}
	loop: for (; af.iO[fT] < af.iP[fT];) {
		for (ej = af.iR[fT]; ej >= af.iQ[fT]; ej--)
			if (ab.wz(fT, 4 * (ej * bQ.el + af.iP[fT]))) break loop;
		af.iP[fT]--
	}
}

function eT(player, j0) {
	return 0 === be.eY[player] || be.eY[player] !== be.eY[j0]
}

function h8(player, j0) {
	for (var e, aWh = ac.ff(player), aA = 0; aA < aWh; aA++)
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

function aFV(player) {
	for (var aA, g8, ea = af.gF[player].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < ea; aA++)
			if (ab.j2(af.gF[player][aA]) && ab.eR(af.gF[player][aA] + g8)) return !0;
	return !1
}

function hA(a2N, a2O) {
	for (var aA, di, g8, g7, aUC = af.gF[a2N].length, aUD = af.gF[a2O].length, ec = (aUD < aUC && (di = a2N, a2N = a2O, a2O = di, di = aUC, aUC = aUD, 0), ab.ec), ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < aUC; aA++)
			if (g7 = af.gF[a2N][aA] + g8, ab.g9(g7) && ab.eS(g7) === a2O) return !0;
	return !1
}

function aFW(a2N, a2O) {
	for (var aA, g8, g7, aUC = af.gF[a2N].length, ec = ab.ec, ed = 3; 0 <= ed; ed--)
		for (g8 = ec[ed], aA = 0; aA < aUC; aA++)
			if (ab.j2(af.gF[a2N][aA]) && (g7 = af.gF[a2N][aA] + g8, ab.g9(g7)) && ab.eS(g7) === a2O) return !0;
	return !1
}

function dP() {
	this.p3 = new aWi
}

function aWi() {
	this.h5 = function(player) {
		b8.fv.a2J(player) && aM.zG(80, L(476), 637, 0, b9.nW, b9.me, -1, !1)
	}, this.a4H = function() {
		aM.zG(80, L(477), 637, 0, b9.nW, b9.me, -1, !1)
	}, this.o8 = function(player) {
		b8.fv.a2J(player) && aM.zG(80, L(478), 637, 0, b9.nW, b9.me, -1, !1)
	}
}

function aWj() {
	this.aWk = 0, this.ij = function() {
		aN.ij(), aY.ij(), h.ij(), ay.x.ij(), av.aEi(), bd.dc && (bd.dc = !1, aZ.tj())
	}
}

function aWl() {
	this.e9 = bd.e9, this.dx = 0, this.aWk = 0, this.aEg = 0, this.aWm = null, this.aWn = 7, this.a5j = 0, this.dU = function() {
		this.aEg = 0, this.aWm = [], this.dx = 0, this.aWk = 0
	}, this.aQd = function(aB) {
		if (aC.gv) this.a9l(aB);
		else if (this.aWm.push(aB), 2 === aC.ys) {
			for (var aA = 0; aA < this.aWm.length; aA++) b6.nx.ij(this.aWm[aA]);
			this.aWm = []
		}
	}, this.a9l = function(aB) {
		2 !== aC.ys && (b6.nx.ij(aB), b7.ij(), aV.a9l(this.aEg), this.aEg === aC.a3N ? (aC.ot.ij(), this.aEg = 0, this.dx = 0, this.aWk = 0, this.e9 = bd.e9) : (this.aEg++, ae.a3G(), ae.lR(!0), bZ.aAL()))
	}, this.ij = function() {
		h.ij(), aC.gv ? (bd.dc = aV.a9l(-1) || bd.dc, lT()) : (0 !== this.dx || bd.e9 >= this.e9 && (this.e9 += bd.a9k * Math.floor(1 + (bd.e9 - this.e9) / bd.a9k), 2 === aC.ys ? lI() : this.aWo(), this.dx++, 27 < bd.e9 - this.a5j)) && this
		.aWp(), lO(), bd.dc && (bd.dc = !1, x2()), this.a5j = bd.e9
	}, this.aWp = function() {
		bd.dc = !0, lQ(), this.dx = 0
	}, this.aWo = function() {
		var uR, aA;
		if (this.aWk !== 7 * this.aEg) lK(), bZ.aAL();
		else {
			uR = !1;
			loop: for (; this.aWq() && (uR = !0, lK(), 2 !== aC.ys) && 0 < this.aWm.length;)
				for (aA = this.aWn - 2; 0 <= aA; aA--)
					if (lK(), 2 === aC.ys) break loop;
			uR ? bZ.aAL() : (lI(), bZ.a3J())
		}
	}, this.aWq = function() {
		return 0 < this.aWm.length && (this.aEg++, b6.nx.ij(this.aWm[0]), this.aWm.shift(), !0)
	}
}

function aWr() {
	var aWs, aWt, aWu, aEg, aWv, dx = 0,
		e9 = bd.e9;

	function aWy() {
		! function() {
			if (!aC.gv) return;
			if (aC.k8) return;
			if (2 !== aC.ys)
				if (aWv % 7 != 0) aWv++;
				else if (aEg === aC.a3N) {
				if (!aX1()) return;
				aV.a9l(aEg), aC.ot.ij()
			} else {
				if (!aX1()) return;
				aWv++, aEg++, ae.a3G(), ae.lR(!0)
			}
			return 1
		}() && aX1() && lK()
	}

	function aWz() {
		dx = 0, (aC.gv ? (bd.dc = aV.a9l(aEg - (aWv % 7 == 0 ? 0 : 1) + aWv % 7 / 7) || bd.dc, lT) : aL.gk || !bA.a3k ? lT : (bd.dc = !0, lQ))()
	}

	function aX1() {
		var aA, ea, aX2 = b7.or.aRl,
			fH = b7.or.aRm,
			fJ = b7.or.aRn,
			fL = b7.or.aRo,
			aX3 = b7.or.aRp,
			aX4 = b7.or.aRq;
		if (!(aWs >= aX4.length)) {
			if (aX4 = aX4[aWs], aX3[aWs]) {
				for (ea = aWt + aX4, aA = aWt; aA < ea; aA++) b6.nx.od(aX2[aA], fH[aA], fJ[aA], fL[aA]);
				aWt += aX4, aWs++
			} else ++aWu >= aX4 && (aWs++, aWu = 0);
			return 1
		}
		aM.a0C("Replay file smaller than expected."), bA.a13(!1), aC.ys = 2
	}
	this.aWk = 0, this.dU = function() {
		aWv = aEg = aWu = aWt = aWs = 0
	}, this.ij = function() {
		var aUZ;
		h.ij(), bA.a7C() < 1.7 ? 0 === dx ? bd.e9 >= e9 && (aUZ = bd.a9k / bA.a7C(), e9 += aUZ * Math.floor(1 + (bd.e9 - e9) / aUZ), 2 === aC.ys || aL.gk || !bA.a3k ? lI() : (aWy(), bZ.aAL()), dx++) : aWz() : function() {
			var aUZ;
			if (bd.e9 >= e9)
				if (2 === aC.ys || aL.gk || !bA.a3k) lI(), e9 = bd.e9;
				else {
					for (aUZ = bd.a9k / bA.a7C(), 16 < (bd.e9 - e9) / aUZ && (e9 = bd.e9 - 16 * aUZ); bd.e9 >= e9 && 2 !== aC.ys;) e9 += aUZ, aWy();
					bZ.aAL()
				} aWz()
		}(), lO(), bd.dc && (bd.dc = !1, x2())
	}, this.z2 = function() {
		b7.or.aRq.length - aWs <= 2 || aM.a0C("Replay file larger than expected.")
	}
}

function aX5() {
	var dx = 0,
		e9 = bd.e9;
	this.aWk = 0, this.ij = function() {
		h.ij(), aC.gv ? lT() : 0 === dx ? bd.e9 >= e9 && (e9 += bd.a9k * Math.floor(1 + (bd.e9 - e9) / bd.a9k), 2 === aC.ys || aL.gk ? lI() : (lK(), bZ.aAL()), dx++) : ((aL.gk ? lT : (bd.dc = !0, lQ))(), dx = 0), lO(), bd.dc && (bd.dc = !1, x2())
	}
}

function dL() {
	this.z1 = null, this.dc = !1, this.e9 = 0, this.a9k = 56;
	var aX6 = 0;

	function aX7() {
		bd.e9 = aX6 = performance.now(), bd.z1.ij(), window.requestAnimationFrame(aX7)
	}
	this.dU = function() {
		this.a3h(), window.requestAnimationFrame(aX7), this.e9 = performance.now()
	}, this.a3Y = function() {
		aC.gj ? (this.z1 = new aWr, this.z1.dU()) : aC.k8 ? this.z1 = new aX5 : (this.z1 = new aWl, this.z1.dU())
	}, this.a3h = function() {
		this.z1 = new aWj, this.dc = !0
	}, this.ij = function() {
		this.z1.aWk++
	}, this.jm = function() {
		return this.z1.aWk
	}, this.aQF = function() {
		var di = performance.now();
		di < aX6 + 1e3 || (this.e9 = di, this.z1.ij())
	}
}

function cn() {
	var aE5 = 0,
		aX8 = !0;

	function aX9(id) {
		id = [L(479), L(480), L(481), L(482)][id];
		aM.a5Q(id)
	}
	this.ij = function() {
		var di, a5l;
		bd.e9 < aE5 || (aE5 = bd.e9 + 5e3, aC.gj) || aC.k8 || b8.fv.gm(aC.eK) || (di = new Date, a5l = di.getUTCSeconds(), aX8 ? a5l < 50 && (aX8 = !1) : a5l < 50 || (aX8 = !0, (a5l = (di.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5l || 20 ==
			a5l || 40 == a5l ? aC.k6 < 7 && aX9(0) : 10 == a5l || 30 == a5l || 50 == a5l ? 7 !== aC.k6 && 10 !== aC.k6 || aX9(1) : 5 == a5l || 25 == a5l || 45 == a5l ? 8 === aC.k6 && aX9(2) : 35 == a5l && 9 === aC.k6 && aX9(3))))
	}
}

function ch() {
	var m7, m8, mK, mL, aXA = 0,
		aXB = 0;

	function aXD() {
		return Math.pow(Math.pow(mK - m7, 2) + Math.pow(mL - m8, 2), .5)
	}

	function aXC(e) {
		m7 = h.k * e.touches[0].clientX, m8 = h.k * e.touches[0].clientY, mK = h.k * e.touches[1].clientX, mL = h.k * e.touches[1].clientY
	}
	this.a0V = function(e) {
		return 1 < e.touches.length ? (aXB = bd.e9, aXA = 3, aXC(e), aK.qs(), !0) : (aXA = 0, !1)
	}, this.a0W = function(e) {
		var aJL, hs, ht;
		return 0 !== aC.ys && 1 < e.touches.length && (aXA = Math.max(aXA - 1, 0), aG.mP() && (aJL = aXD(), aXC(e), e = aXD(), hs = Math.floor((m7 + mK) / 2), ht = Math.floor((m8 + mL) / 2), aR.a7c(hs, ht, Math.max(.125, e) / Math.max(.125,
			aJL)), bd.dc = !0), !0)
	}, this.a0t = function() {
		var eh, ej;
		return !!(aXA && (aXA = 0, bd.e9 < aXB + 500)) && (eh = (m7 + mK) / 2, ej = (m8 + mL) / 2, aK.a0n(eh, ej), aK.click(eh, ej, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.tD = function() {
		this.aB = null
	}, this.oc = function(size) {
		for (var f2 = 0, aB = this.aB, mP = this.dx + size - 1, aA = this.dx; aA <= mP; aA++) f2 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mP - aA;
		return this.dx += size, this.dx > 8 * this.size && console.error("Unwrapper Overflow"), f2
	}, this.aQl = function(size) {
		var eu = size >> 1;
		return (1 << eu) * this.oc(size - eu) + this.oc(eu)
	}, this.aQm = function(aXE) {
		return this.size === bB.aQk(aXE)
	}, this.aS3 = function(vs, aXF, aXG) {
		var g2 = this.oc(vs);
		if (!g2) return null;
		for (var vs = Math.max(g2, aXG), g = new(aXF <= 8 ? Uint8Array : aXF <= 16 ? Uint16Array : Uint32Array)(vs), aA = 0; aA < g2; aA++) g[aA] = this.oc(aXF);
		aXG = g[g2 - 1];
		return aXG && g.fill(aXG, g2), g
	}, this.aS4 = function(vs, aXH, aXG) {
		var g2 = this.oc(vs);
		if (!g2) return null;
		for (var vs = Math.max(g2, aXG), g = new Array(vs), aA = 0; aA < g2; aA++) g[aA] = this.aS1(aXH);
		return g.fill(g[g2 - 1], g2), g
	}, this.aS1 = function(vs) {
		return bE.uy.v2(this.oc(vs))
	}, this.aS2 = function() {
		var pI = bD.rt.ru(bD.rt.rv(this.oc(30))),
			pI = b8.zX.a3B(pI, "_", "/");
		pI = b8.zX.a3B(pI, "-", "+");
		for (var aXI = "";
			(pI.length + aXI.length) % 4;) aXI += "=";
		pI = "data:image/png;base64," + pI + aXI;
		var aG1 = new Image;
		aG1.onload = function() {
			b7.aGQ.aGR(aG1), aG1.onload = null, aG1 = null
		}, aG1.src = pI
	}
}

function dF() {
	this.aSs = 0, this.aSt = 0, this.aSo = 0, this.aSp = 0, this.aSq = 0, this.aSr = 0, this.aAM = [0, 0, 0, 0], this.mO = function() {
		this.aSs = aR.x4(), this.aSt = aR.x5(), this.aSo = -this.aSs, this.aSp = -this.aSt, this.aSq = h.i / iB, this.aSr = h.j / iB, this.aAM[0] = Math.floor(this.aSo), this.aAM[1] = Math.floor(this.aSp), this.aAM[2] = Math.floor(this.aAM[0] +
			this.aSq + 1), this.aAM[3] = Math.floor(this.aAM[1] + this.aSr + 1), bZ.aAJ = !0
	}
}

function ci() {
	var a6I, ls;
	this.dU = function() {
		a6I = 1, ls = 0
	}, this.ij = function() {
		0 < a6I && (ls = 0 === ls ? bd.e9 + 16 : ls, a6I = (a6I -= .001 * (bd.e9 - ls)) < 0 ? 0 : a6I, ls = bd.e9, bd.dc = !0)
	}, this.tj = function() {
		0 < a6I && (tk.fillStyle = "rgba(0,0,0," + a6I + ")", tk.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aXE) {
		return this.dU(new Uint8Array(this.aQk(aXE))), this.aB
	}, this.tD = function() {
		this.aB = null
	}, this.a7 = function(size, a5p) {
		for (var aB = this.aB, mP = this.dx + size - 1, aA = this.dx; aA <= mP; aA++) aB[aA >> 3] |= (a5p >> mP - aA & 1) << 7 - (7 & aA);
		this.dx += size, this.dx > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQj = function(size, a5p) {
		var eu = size >> 1,
			ed = 1 << eu;
		this.a7(size - eu, bJ.dj(a5p, ed)), this.a7(eu, a5p % ed)
	}, this.aXL = function(size) {
		for (var aB = this.aB, mP = this.dx + size, aA = this.dx; aA < mP; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQk = function(aXE) {
		return aXE + 7 >> 3
	}, this.aXM = function(g, j6, mP, aXN) {
		for (var aA = j6; aA < mP; aA++) this.a7(aXN, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dx = 0
	}, this.aR8 = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aXO, value) {
		for (var g = this.g, mP = this.dx + aXO - 1, aXP = 1 + (mP >> 3); g.length < aXP;) g.push(0);
		for (var aA = this.dx; aA <= mP; aA++) g[aA >> 3] |= (value >> mP - aA & 1) << 7 - (7 & aA);
		this.dx += aXO
	}, this.db = function(g, vs, aXF) {
		var aXQ = b8.pk.a1g(g);
		this.a7(vs, aXQ);
		for (var aA = 0; aA < aXQ; aA++) this.a7(aXF, g[aA])
	}, this.aSL = function(g, vs, aXH) {
		var aXQ = b8.pk.a1g(g);
		this.a7(vs, aXQ);
		for (var aA = 0; aA < aXQ; aA++) this.aSJ(g[aA], aXH)
	}, this.aSJ = function(pI, vs) {
		var ea = pI.length;
		this.a7(vs, ea);
		for (var aA = 0; aA < ea; aA++) this.a7(16, pI.charCodeAt(aA))
	}, this.aSK = function(a1m) {
		var aXR = (a1m = a1m.toDataURL()).split(",");
		if (aXR.length < 2) console.log("error 266");
		else {
			a1m = b8.zX.a3B(a1m = aXR[aXR.length - 1], "/", "_"), a1m = b8.zX.a3B(a1m, "\\+", "-");
			var a1m = b8.zX.a3B(a1m, "=", ""),
				vB = bE.rt.v8(a1m),
				ea = vB.length;
			this.a7(30, ea);
			for (var aA = 0; aA < ea; aA++) this.a7(6, vB[aA])
		}
	}
}
a(), self.aiCommand746 = function(f2) {
	0 === f2 ? bo() : 1 !== f2 || !z || 1 !== z.id || z.dk < 14 || bH.f3()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};