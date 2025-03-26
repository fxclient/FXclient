var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, fR, fS, fT, fU, fV, fW, fX, fY, fZ, fa, fb, fc, fd, iE, iD, iF, a6X, l7, jd, a0Q,
	tl, x8, aAN, a3a, a3b, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "<br>", "0.75em", "   ", "hidden", "flex", "Data", "1em", "0.8em", " / ", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"pre", "</a>", "pointer", "password", "function", "break-word", "bold", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "blur", "Space", "Report", "Player ",
		"NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.4em", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)",
		"rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US",
		"data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Gold Seizure", "Elo Deduction", "Bot ", "Battle Royale", "Back",
		"Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dg = 1097, this.n = 2067, this.rVersion = 9, this.dU = function() {
		this.dh = 2;
		var di = bJ.dj(this.n, 10) % 100;
		this.dk = "26 Mar 2025 [" + bJ.dj(this.n, 1e3) + "." + (di < 10 ? "0" : "") + di + "." + this.n % 10 + "]", this.a8 = true, this.a9 = function() {
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
		dt = ["Kick", "Mute", "Username Redaction", "Elo Deduction", "Gold Seizure", "Report"],
		du = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.dv = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["1 Elo Point", "2 Elo Points", "4 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.dw = function(id, dx, dy) {
		dx = this.dz(dx);
		return +(dr[dx][id] > dy)
	}, this.dz = function(dx) {
		for (var aA = 0; aA < dq.length; aA++)
			if (dq[aA] <= dx) return aA;
		return dq.length
	}, this.e0 = function(dx) {
		return dp[this.dz(dx)]
	}, this.e1 = function(id, e2) {
		return ds[id].replace(new RegExp("x", "g"), e2)
	}, this.e3 = function(id, e2) {
		return du[id].replace(new RegExp("x", "g"), e2)
	}, this.e4 = function(id, e5) {
		return dt[id] + (this.dv[id][e5].length ? " (" + this.dv[id][e5] + ")" : "")
	}
}

function d8() {
	this.e6 = new e7, this.dU = function() {
		z.a0.e8()
	}, this.e9 = function() {
		return bh.eA.data[160].value
	}
}

function e7() {
	var eB = 2e4;
	this.show = function() {
		if (bd.eC < eB) return !1;
		eB = bd.eC + 135e4, 2 === l.dh && z.a0.eD(Math.floor(135e4))
	}
}

function cR() {
	this.eE = new eF
}

function eF() {
	this.eG = function(eH) {
		var eK;
		return bQ.eI(bQ.eJ) && aC.data.passableMountains && (eK = ab.eL(eH), this.eM(aC.eN, eK) || this.eO(aC.eN, eK)) && 0 !== (eK = function(ej) {
			for (var ek = bK.el(ej), em = bK.en(ej), max = Math.max(bQ.eo, bQ.ep) - 2, eq = max * max, er = !1, es = 0, et = 0; et < max; et++) {
				var eu, eP = function(ek, em, et) {
					for (var aA = 0; aA <= et; aA++)
						for (var ew = -1; ew < 2; ew += 2)
							for (var ex = -1; ex < 2; ex += 2)
								for (var ey = 0; ey < 2; ey++) {
									var eH = function(ek, em) {
										if (bK.f0(ek, em)) {
											ek = bK.f1(ek, em), em = bK.eT(ek);
											if (ab.eY(em) && ab.f2(em)) return ek
										}
										return 0
									}(ek + ey * ew * aA + (1 - ey) * ex * et, em + ey * ex * et + (1 - ey) * ew * aA);
									if (eH) return eH
								}
					return 0
				}(ek, em, et);
				eP && (eu = bK.ev(ek, em, eP)) < eq && (es = eP, eq = eu, er || (er = !0, max = Math.floor(Math.sqrt(eu)) + 1))
			}
			return es
		}(bK.eR(eH))) && (eH = bK.eT(eK), ab.eU(eH) || (eH = ab.eV(eH)) !== aC.eN && eW(eH, aC.eN)) ? eK : 0
	}, this.eX = function(player, eP) {
		eP = bK.eT(eP);
		if (ab.eY(eP)) {
			if (ab.eU(eP)) bM.eZ[0] = aC.ea;
			else if (ab.eV(eP) !== bM.eZ[0]) return !1;
			for (var eb = function(eH) {
					var ef = ab.ef,
						eb = [];
					loop: for (var eg = 3; 0 <= eg; eg--) {
						var eh = eH + ef[eg];
						if (ab.ei(eh)) {
							for (var id = ab.eL(eh), aA = 0; aA < eb.length; aA++)
								if (id === eb[aA]) continue loop;
							bM.ee[eb.length] = eh, eb.push(id)
						}
					}
					return eb
				}(eP), ed = eb.length, aA = 0; aA < ed; aA++)
				if (this.eM(player, eb[aA]) || this.eO(player, eb[aA])) return bM.ee[0] = bM.ee[aA], !0
		}
		return !1
	}, this.eM = function(player, eK) {
		for (var f3 = af.f3[player], ed = f3.length, f4 = Math.max(bJ.dj(ed, 12), 1), ef = ab.ef, aA = 0; aA < ed; aA += f4)
			for (var eS = f3[aA], eg = 3; 0 <= eg; eg--) {
				var eh = eS + ef[eg];
				if (ab.ei(eh) && eK === ab.eL(eh)) return !0
			}
		return !1
	}, this.eO = function(player, eK) {
		for (var f3 = af.f3[player], ed = f3.length, ef = ab.ef, aA = 0; aA < ed; aA++)
			for (var eS = f3[aA], eg = 3; 0 <= eg; eg--) {
				var eh = eS + ef[eg];
				if (ab.ei(eh) && eK === ab.eL(eh)) return !0
			}
		return !1
	}
}

function d1() {
	this.f7 = new Uint16Array(2), this.f8 = new Uint16Array(2), this.f9 = new Int32Array(2), this.fA = new Uint32Array(2), this.fB = new Uint32Array(2), this.fC = new Uint8Array(4), this.fD = new Uint8Array(4), this.ee = new Uint32Array(4), this.fE =
		new Uint32Array(5), this.eZ = new Uint32Array(8), this.fF = new Uint16Array(16), this.fG = new Uint16Array(512), this.fH = new Uint16Array(512), this.fI = new Uint16Array(512), this.fJ = function(g, fK) {
			return g[0] = fK, g
		}, this.fL = function(g, fK, fM) {
			return g[0] = fK, g[1] = fM, g
		}, this.fN = function(g, fK, fM, fO) {
			return g[0] = fK, g[1] = fM, g[2] = fO, g
		}, this.fP = function(g, fK, fM, fO, fQ) {
			return g[0] = fK, g[1] = fM, g[2] = fO, g[3] = fQ, g
		}
}

function fe() {
	fX = 0, fY = 2048, fZ = new Uint32Array(4 * fY), fa = 0, fb = new Uint32Array(fY), fc = new Uint8Array(bQ.eo * bQ.ep)
}

function ff(player) {
	fS = player, fd = !1, fg(), fh();
	for (var aA = ac.fi(fS) - 1; 0 <= aA; aA--) 0 === ac.fj(fS, aA) && (fR = aA, fk());
	fd && fl()
}

function fl() {
	fm(), fn()
}

function fk() {
	fW = ac.fo(fS, fR), fT = ac.fp(fS, fR), fU = ac.fq(fS, fR), fr(), (0 !== fX && (ft(), fu()) ? fv : fs)()
}

function fu() {
	if (!((fV = bJ.dj(fT, fX)) > aC.fw)) {
		if (!fU) return !1;
		var fx = fX * (1 + aC.fw);
		fT += b8.fy.fz(fS, fx - fT), fV = bJ.dj(fT, fX)
	}
	return !0
}

function ft() {
	for (var aA = fX - 1; 0 <= aA; aA--) fc[bJ.dj(fZ[aA], 4)] = 0
}

function fs() {
	1 === ac.fi(fS) && aE.g0(fS);
	var di = b8.fy.g1(fS, fT);
	bb.g2(fS, fT - di, 12), ac.g3(fS, fR)
}

function fg() {
	for (var player = fS, g4 = af.g4, ed = Math.min(g4[player].length, fY), g5 = 0, g6 = fb, aA = ed - 1; 0 <= aA; aA--) g6[g5++] = g4[player][aA];
	fa = g5
}

function fh() {
	for (var aA = af.g4[fS].length - 1; 0 <= aA; aA--) ab.eY(af.g4[fS][aA]) && ab.g7(af.g4[fS][aA], fS);
	af.g4[fS] = []
}

function fr() {
	fX = 0, (fW === aC.ea ? g8 : g9)()
}

function g9() {
	for (var gA, gB, aA, ef = ab.ef, eg = 3; 0 <= eg; eg--)
		for (aA = fa - 1; 0 <= aA; aA--) gA = fb[aA] + ef[eg], gB = bJ.dj(gA, 4), 0 === fc[gB] && ab.gC(gA) && ab.eV(gA) === fW && (fc[gB] = 1, fZ[fX++] = gA)
}

function g8() {
	for (var gA, gB, aA, ef = ab.ef, eg = 3; 0 <= eg; eg--)
		for (aA = fa - 1; 0 <= aA; aA--) gA = fb[aA] + ef[eg], gB = bJ.dj(gA, 4), 0 === fc[gB] && ab.eU(gA) && (fc[gB] = 1, fZ[fX++] = gA)
}

function fv() {
	gD() ? (gE(), fW !== aC.ea && gF()) : fs()
}

function gF() {
	gG(), gH(af.gI[fW]), gH(af.gJ[fW]), bQ.eI(bQ.eJ) && gH(af.f3[fW]), gK(af.g4[fW]), gL(af.gJ[fW]), gL(af.f3[fW]), gM(), gN()
}

function gE() {
	fd = !0, ac.gO(fS, fR, fT), ac.gP(fS, fR), af.gQ[fS] += fX, gR(), gS()
}

function gD() {
	return (fW === aC.ea ? gT : gU)()
}

function gU() {
	var gV = fX * aC.fw,
		gW = gX(),
		gY = gZ(),
		gW = gV + 2 * gW + gY,
		gb = fV * fX;
	return gW < gb ? (fT -= gW, bb.g2(fS, gW, 13), gc(gW - gV, gY), !0) : fU && 0 === gY ? (fT -= gb, gb += b8.fy.fz(fS, gW - gb + 1), bb.g2(fS, gb, 13), gc(gb - gV, 0), !0) : (fT -= gb, bb.g2(fS, gb, 13), gc(gb - gV, gY), !1)
}

function gc(gb, gY) {
	if (0 < gY) {
		if (gb <= gY) return bb.g2(fW, gb, 13), void ac.gd(fW, fS, gY - gb);
		ac.gd(fW, fS, 0), gb -= gY
	}
	gb = bJ.dj(gb, 2), gb = Math.min(af.ge[fW], gb), bb.g2(fW, gb, 13), af.ge[fW] -= gb
}

function gZ() {
	return ac.gf(fW, fS)
}

function gX() {
	return bJ.dj(fX * af.ge[fW], 1 + bJ.dj(10 * af.gQ[fW], 16))
}

function gT() {
	var gg = fX * aC.fw;
	return fT -= gg, bb.g2(fS, gg, 13), !0
}

function gS() {
	for (var aA = fX - 1; 0 <= aA; aA--) af.g4[fS].push(fZ[aA]), af.gI[fS].push(fZ[aA]), ab.g7(fZ[aA], fS)
}

function d6() {
	var gh = 0,
		gi = 0;
	this.gj = function(ek, em) {
		gh = ek, gi = em
	}, this.gk = function(gl) {
		aC.gm || aL.gn || (b8.fy.go(0) || b8.fy.go(1)) && b8.fy.gp(aC.eN) && (aQ.gq(gh, gi) ? aQ.gr = !1 : aO.gq(gh, gi) || function(gl) {
			var gt = bK.gu(gh),
				gv = bK.gw(gi),
				eP = bK.f1(gt, gv),
				eH = bK.eT(eP);
			bK.gx(gt, gv) && (aC.gy ? ab.eY(eH) && b6.gz.h0(eP) : ab.ei(eH) ? gl || (gt = al.eE.eG(eH)) && (gv = bK.eT(gt), gv = ab.eU(gv) ? aC.ea : ab.eV(gv), b6.gz.h3(aQ.h4(), gt, gv)) : ab.h5(eH) || gl ? bL.h6.h7(aC.eN, eP) && b6.gz
				.h8(aQ.h4(), eP) : ab.eU(eH) ? h9(aC.eN) ? b6.gz.hA(aQ.h4(), aC.ea) : hB(aC.eN, aC.ea) ? az.hC(aC.ea, aQ.h4()) : bL.h6.h7(aC.eN, eP) && b6.gz.h8(aQ.h4(), eP) : (gt = ab.eV(eH)) !== aC.eN && (eW(gt, aC.eN) ? hD(aC.eN,
					gt) ? b6.gz.hA(aQ.h4(), gt) : hB(aC.eN, gt) ? az.hC(gt, aQ.h4()) : bL.h6.h7(aC.eN, eP) && b6.gz.h8(aQ.h4(), eP) : bL.h6.h7(aC.eN, eP) && b6.gz.h8(aQ.h4(), eP)))
		}(gl))
	}, this.hE = function() {
		if (!aC.gm && !aL.gn && b8.fy.go(1)) {
			var gA = aC.eN;
			if (b8.fy.gp(gA)) {
				var ed = ac.fi(gA);
				if (ed < 1) ! function() {
					var gA = aC.eN;
					if (h9(gA)) b6.gz.hA(aQ.h4(), aC.ea);
					else
						for (var ef = ab.ef, gI = af.gI, ed = gI[gA].length, hO = Math.floor(Math.random() * ed), aA = 0; aA < ed; aA++)
							for (var hP = 3; 0 <= hP; hP--) {
								var hQ = gI[gA][(aA + hO) % ed] + ef[hP];
								if (ab.gC(hQ)) {
									hQ = ab.eV(hQ);
									if (hQ !== gA && (!aC.hS || eW(gA, hQ))) return b6.gz.hA(aQ.h4(), hQ)
								}
							}
				}();
				else {
					for (var hG = 0, hH = ac.fp(gA, 0), aA = 1; aA < ed; aA++) {
						var hI = ac.fp(gA, aA);
						hI < hH && (hH = hI, hG = aA)
					}
					b6.gz.hA(aQ.h4(), ac.fo(gA, hG))
				}
			}
		}
	}, this.hJ = function() {
		if (!aC.gm && !aL.gn && b8.fy.gp(aC.eN) && b8.fy.go(1)) return au.hK ? au.hL(aC.eN) ? void b6.gz.hM(1) : void 0 : void(au.hN(aC.eN) && b6.gz.hJ())
	}
}

function hT(hU, size, hV, hW, font) {
	var aA, hZ = .2,
		canvas = document.createElement("canvas"),
		ha = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hU, canvas.height = hU, ha.font = size + font, ha.textAlign = "center", ha.textBaseline = "middle", ha.fillStyle = "red", aA = 0; aA < hV.length; aA++) ha.fillText(hV[aA], .5 * hU, .5 * hU);
	return -1 < (canvas = function(hX) {
		var aA, dx, eg = hX.data;
		for (aA = eg.length - 4; 0 <= aA; aA -= 4)
			if (dx = eg[aA], hW <= dx) return Math.floor(aA / (4 * hU));
		return -1
	}(ha.getImageData(0, 0, hU, hU))) && (hZ = (canvas - .5 * hU + .1 * size) / size), Math.max(hZ, 0)
}

function cz() {
	this.hc = new Int16Array(4), this.hd = new Int16Array(4), this.dU = function() {
		var aA;
		for (this.hc[0] = -bQ.eo, this.hc[1] = 1, this.hc[2] = bQ.eo, this.hc[3] = -1, aA = 0; aA < 4; aA++) this.hd[aA] = 4 * this.hc[aA]
	}, this.he = function(h1, hf) {
		var hg = this.el(hf) - this.el(h1),
			hf = this.en(hf) - this.en(h1),
			h1 = hg >>> 31 << 1;
		return 5 + h1 + (1 - h1) * (1 - (hf >>> 31 << 1)) * (Math.abs(hg) - Math.abs(hf) >>> 31) & 3
	}, this.hl = function(h1, hf, hP) {
		return hP % 2 == 0 ? hP + (1 - hP) * (1 - (this.el(hf) - this.el(h1) >>> 31 << 1)) + 4 & 3 : hP + (2 - hP) * (1 - (this.en(hf) - this.en(h1) >>> 31 << 1)) + 4 & 3
	}, this.hn = function(gA, eP) {
		for (var hf, ho, hq = af.gJ[gA], ed = hq.length, i = bQ.eo, hr = this.el(eP), hs = this.en(eP), ej = hq[0] >> 2, min = this.ev(hr, hs, ej), aA = 1; aA < ed; aA++)(ho = (ho = hr - (hf = hq[aA] >> 2) % i) * ho + (ho = hs - ~~((.5 + hf) /
			i)) * ho) < min && (min = ho, ej = hf);
		return ej
	}, this.ht = function(player, eH) {
		return !ab.eU(eH) && player === ab.eV(eH)
	}, this.ev = function(gt, gv, eP) {
		return (gt -= this.el(eP)) * gt + (gv -= this.en(eP)) * gv
	}, this.hu = function(hv, hw, hx) {
		hv = this.hz(hv) - this.i0(hx), hw = this.i2(hw) - this.i3(hx);
		return Math.sqrt(hv * hv + hw * hw)
	}, this.i4 = function(h1, hf) {
		var hy = this.el(h1) - this.el(hf),
			h1 = this.en(h1) - this.en(hf);
		return Math.sqrt(hy * hy + h1 * h1)
	}, this.i5 = function(h1, hf) {
		var hy = this.el(h1) - this.el(hf),
			h1 = this.en(h1) - this.en(hf);
		return hy * hy + h1 * h1
	}, this.i6 = function(i7, i8, i9, iA) {
		return (i7 -= i9) * i7 + (i8 -= iA) * i8
	}, this.iB = function(gA, iC) {
		return bJ.dj(iC * af.ge[gA], 1e3)
	}, this.hz = function(hv) {
		return 16 * (hv + iD) / iE
	}, this.i2 = function(hw) {
		return 16 * (hw + iF) / iE
	}, this.iG = function(eg) {
		return 16 * eg / iE
	}, this.gu = function(hv) {
		return Math.floor((hv + iD) / iE)
	}, this.gw = function(hw) {
		return Math.floor((hw + iF) / iE)
	}, this.gx = function(gt, gv) {
		return 1 <= gt && 1 <= gv && gt < bQ.eo - 1 && gv < bQ.ep - 1
	}, this.el = function(eP) {
		return eP % bQ.eo
	}, this.en = function(eP) {
		return bJ.dj(eP, bQ.eo)
	}, this.f1 = function(gt, gv) {
		return gv * bQ.eo + gt
	}, this.iH = function(eP) {
		return this.f0(this.el(eP), this.en(eP))
	}, this.f0 = function(gt, gv) {
		return 0 < gt && gt < bQ.eo - 1 && 0 < gv && gv < bQ.ep - 1
	}, this.eT = function(eP) {
		return eP << 2
	}, this.eR = function(eH) {
		return eH >> 2
	}, this.iI = function(eP) {
		return bQ.eo * this.en(eP) * 256 + (this.el(eP) << 4)
	}, this.iJ = function(eP) {
		return this.iI(eP) + 8 + (bQ.eo << 7)
	}, this.iK = function(hx) {
		return bQ.eo * (this.i3(hx) >> 4) + (this.i0(hx) >> 4)
	}, this.iL = function(hx) {
		hx = this.iK(hx);
		return (this.el(hx) >> 5) + bL.iM.iN * (this.en(hx) >> 5)
	}, this.i0 = function(hx) {
		return hx % (bQ.eo << 4)
	}, this.i3 = function(hx) {
		return bJ.dj(hx, bQ.eo << 4)
	}, this.iO = function(eP, hP) {
		return eP + this.hc[hP]
	}, this.iP = function(eH, hP) {
		return eH + this.hd[hP]
	}, this.iQ = function(player) {
		return this.f1(af.iR[player] + af.iS[player] >> 1, af.iT[player] + af.iU[player] >> 1)
	}, this.iV = function(player) {
		return this.f1(aw.iW(af.iR[player], af.iS[player]), aw.iW(af.iT[player], af.iU[player]))
	}
}

function cf() {
	this.iX = new iY, this.iZ = new ia, this.ib = new ic, this.performance = new ie, this.ig = new ih, this.ii = new ij, this.ik = new il, this.dU = function() {
		this.iX.dU(), this.ib.dU(), this.performance.dU(), this.ig.dU(), this.ii.dU()
	}, this.im = function() {
		this.performance.im(), this.iX.im()
	}
}

function ih() {
	var io, iq = new Uint16Array(8);

	function iz(size, player) {
		for (var aA = af.g4[player].length - 1; size <= aA; aA--) ab.j6(af.g4[player][aA], player)
	}
	this.dU = function() {
		io = 0
	}, this.ir = function(player, is) {
		return bM.eZ[1] = af.g4[player].length, bM.eZ[0] === aC.ea ? am.ig.it(player) : this.iu(player, bM.eZ[0]), (0 !== bM.eZ[1] || 0 !== af.g4[player].length) && !(!is && bM.eZ[1] === af.g4[player].length || (bM.eZ[0] === aC.ea ? af.iv[
			player]++ : af.iw[player]++, 0))
	}, this.ix = function(player) {
		aC.hS && (am.ii.iy[player] = 1), iz(bM.eZ[1], player), ac.j0(player, bM.fA[0], bM.eZ[0]), aE.j1(player, !1)
	}, this.j2 = function(player, j3, ed, hH) {
		var j4 = bJ.dj(12 * af.ge[player], 1024);
		hH -= hH >= bJ.dj(af.ge[player], 2) ? j4 : 0, iz(ed, player), ac.j0(player, hH, j3), af.ge[player] -= hH + j4, aE.j1(player, !1)
	}, this.iu = function(player, j3) {
		for (var hP, ef = ab.ef, aA = af.gI[player].length - 1; 0 <= aA; aA--)
			if (ab.j5(af.gI[player][aA]))
				for (hP = 3; 0 <= hP; hP--)
					if (ab.gC(af.gI[player][aA] + ef[hP]) && ab.eV(af.gI[player][aA] + ef[hP]) === j3) {
						af.g4[player].push(af.gI[player][aA]);
						break
					}
	}, this.it = function(player) {
		for (var ef = ab.ef, aA = af.gI[player].length - 1; 0 <= aA; aA--)
			if (ab.j5(af.gI[player][aA]))
				for (var hP = 3; 0 <= hP; hP--)
					if (ab.eU(af.gI[player][aA] + ef[hP])) {
						af.g4[player].push(af.gI[player][aA]);
						break
					}
	}, this.j7 = function(player, j8) {
		var aA, ew, hP, hR, ed = af.gI[player].length,
			hm = 256 <= ed ? 12 : 32 <= ed ? 6 : 1,
			j9 = ed - 1 - aw.jA(hm),
			ef = ab.ef;
		io = 0;
		loop: for (aA = j9; 0 <= aA; aA -= hm)
			for (hP = 3; 0 <= hP; hP--)
				if ((hR = ab.eU(af.gI[player][aA] + ef[hP]) ? aC.ea : ab.eV(af.gI[player][aA] + ef[hP])) === aC.ea || ab.gC(af.gI[player][aA] + ef[hP]) && hR !== player && (j8 || eW(player, hR))) {
					for (ew = io - 1; 0 <= ew; ew--)
						if (iq[ew] === hR) continue loop;
					if (iq[io] = hR, 8 <= ++io) return !0
				}
		return 0 < io
	}, this.jB = function(player, j8) {
		var aA, hP, hR, ef = ab.ef;
		for (io = 0, aA = af.gI[player].length - 1; 0 <= aA; aA--)
			for (hP = 3; 0 <= hP; hP--)
				if ((hR = ab.eU(af.gI[player][aA] + ef[hP]) ? aC.ea : ab.eV(af.gI[player][aA] + ef[hP])) === aC.ea || ab.gC(af.gI[player][aA] + ef[hP]) && hR !== player && (j8 || eW(player, hR))) return iq[io++] = hR, !0;
		return !1
	}, this.jC = function() {
		for (var ex, aA = io - 1; 0 <= aA; aA--)
			if (iq[aA] === aC.ea) {
				for (io--, ex = aA; ex < io; ex++) iq[ex] = iq[ex + 1];
				return !0
			} return !1
	}, this.jD = function(player) {
		for (var ex, aA = io - 1; 0 <= aA; aA--)
			if (ac.jE(player, iq[aA]))
				for (io--, ex = aA; ex < io; ex++) iq[ex] = iq[ex + 1];
		return 0 === io
	}, this.jF = function() {
		for (var aA = io - 1; 0 <= aA; aA--)
			if (b8.fy.jG(iq[aA])) return !0;
		return !1
	}, this.jH = function() {
		for (var aA = io - 1; 0 <= aA; aA--) b8.fy.jG(iq[aA]) || (iq[aA] = iq[--io]);
		return 0 < io
	}, this.jI = function(player) {
		for (var ex, jJ = iq[0], jK = af.ge[jJ] + ac.gf(jJ, player), aA = io - 1; 1 <= aA; aA--)(ex = af.ge[iq[aA]] + ac.gf(iq[aA], player)) < jK && (jJ = iq[aA], jK = ex);
		return jJ
	}, this.jL = function(player) {
		var j, jM = iq[0];
		if (1 !== io)
			for (var jN = bJ.dj(af.iS[player] + af.iR[player], 2), jO = bJ.dj(af.iU[player] + af.iT[player], 2), et = jP(jN - bJ.dj(af.iS[jM] + af.iR[jM], 2)) + jP(jO - bJ.dj(af.iU[jM] + af.iT[jM], 2)), aA = io - 1; 1 <= aA; aA--)(j = jP(jN - bJ
				.dj(af.iS[iq[aA]] + af.iR[iq[aA]], 2)) + jP(jO - bJ.dj(af.iU[iq[aA]] + af.iT[iq[aA]], 2))) < et && (et = j, jM = iq[aA]);
		return jM
	}, this.jQ = function() {
		for (var jR = iq, jS = jR[0], ge = af.ge, jT = ge[jS], aA = io - 1; 1 <= aA; aA--) {
			var gA = jR[aA],
				ex = ge[gA];
			jT < ex && (jS = gA, jT = ex)
		}
		return jS
	}, this.jU = function() {
		return iq[aw.jA(io)]
	}
}

function ij() {
	function jj(player, j3, jZ) {
		3 <= jZ && 2142 < bd.jp() && (j3 === aC.ea || af.ge[j3] < bJ.dj(af.ge[player], 20)) && aD.je(player, 20)
	}

	function jm(player, hH, j3, jZ) {
		3 <= jZ && jZ < 6 && bJ.dj(af.ge[player], 8) > af.ge[j3] && (hH = Math.max(bJ.dj(11 * af.ge[j3], 5), bJ.dj(af.ge[player], 10)));
		jZ = af.g4[player].length;
		am.ig.iu(player, j3), am.ig.j2(player, j3, jZ, hH)
	}

	function ji(player, hH) {
		var j3 = aC.ea,
			ed = af.g4[player].length;
		am.ig.it(player), af.g4[player].length !== ed && am.ig.j2(player, j3, ed, hH)
	}
	this.iy = new Uint8Array(aC.ea), this.dU = function() {
		this.iy.fill(0)
	}, this.jV = function(player, hH) {
		var jX, jZ, ja, jb;
		ac.jW(player) && (jX = ad.jY(player), 3 <= (jZ = aD.hH[player]) && jZ < 6 && (hH = Math.max(af.ge[player] - jX, hH)), ja = af.gJ[player].length, jb = af.gI[player].length, 30 * af.gQ[player] > aC.jc && jd[player] < 10 && 100 * jb <= ja &&
			aD.je(player, 10), aC.hS ? function(player, hH, jZ, jX) {
				var j3;
				if (am.ii.iy[player] = 1, am.ig.j7(player, !1) || am.ig.jB(player, !1)) {
					if (!am.ig.jD(player))
						if (am.ig.jC()) ji(player, hH), jj(player, aC.ea, jZ);
						else {
							if (aw.jk(aD.jl[jZ])) j3 = am.ig.jI(player);
							else {
								if (am.ig.jF() && aw.jk(aD.jn[jZ]) && am.ig.jH(), 6 === jZ) return jm(player, hH, am.ig.jU(), jZ);
								j3 = am.ig.jL(player)
							}
							jm(player, hH, j3, jZ), jj(player, j3, jZ)
						}
				} else bL.jg.im(player) || am.ik.im(player) || (am.ii.iy[player] = 0, function(player, hH, jZ, jX) {
					var aA, ex, ey, eb = be.eb,
						jq = eb[player];
					if (0 !== jq) {
						var jr = af.ge[player],
							gQ = af.gQ;
						if (player < aC.js && (hH = jr), !(jr < gQ[player] || 5 === jZ && jr < jX || 4 === jZ && jr < bJ.dj(jX, 2))) {
							var ed = ak.jt,
								ju = ak.ju,
								iy = (aA = aw.jA(ed), am.ii.iy);
							for (ex = 0; ex < ed; ex++)
								if (ey = ju[(ex + aA) % ed], 1 === iy[ey] && eb[ey] === jq) return b6.jv.jw(player, ey, hH)
						}
					}
				}(player, hH, jZ, jX))
			}(player, hH, jZ, jX) : (!jb || ja && (ja < jb && !aw.jA(10) || 100 * jb <= ja && aw.jA(3) || !aw.jA(8))) && bL.jg.im(player) || function(player, hH, jZ) {
				am.ig.j7(player, !0) || am.ig.jB(player, !0) ? am.ig.jD(player) || (am.ig.jC() ? ji(player, hH) : aw.jk(aD.jl[jZ]) ? jm(player, hH, am.ig.jI(player), jZ) : 5 === jZ ? jm(player, hH, am.ig.jQ(), jZ) : (am.ig.jF() && aw.jk(aD
					.jn[jZ]) && am.ig.jH(), jm(player, hH, 6 === jZ ? am.ig.jU() : am.ig.jL(player), jZ))) : am.ik.im(player)
			}(player, hH, jZ))
	}
}

function c0() {
	var jx = new Uint8Array(aC.ea),
		jy = new Uint16Array(aC.ea),
		jz = new Uint16Array(aC.ea),
		k0 = new Uint8Array(aC.ea),
		k1 = (this.hH = new Uint8Array(aC.ea), new Uint16Array(aC.ea)),
		k2 = new Uint16Array(aC.ea);

	function kG(aA) {
		jx[aA] = 1 + bJ.dj(k1[aA] * aw.random(), 10 * aw.value(100))
	}
	this.k3 = null, this.jn = [97, 94, 70, 40, 20, 0, 100], this.k4 = [500, 450, 400, 300, 80, 50, 100], this.jl = [0, 0, 5, 25, 50, 100, 0], this.k5 = [60, 74, 112, 200, 256, 512, 512], this.k6 = [1, 2, 3, 4, 6, 8, 1], this.k7 = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.k3 = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		jx.fill(0), jy.fill(0), jz.fill(0), k0.fill(0), this.hH.fill(0), k1.fill(0), k2.fill(0);
		var k8 = aC.js;
		if (9 === aC.k9) this.kA();
		else if (__fx.customLobby.isActive())
			for (aA = aC.kD - 1; 0 <= aA; aA--) this.hH[aA + k8] = __fx.customLobby.gameInfo.difficulty;
		else if (aC.kB)
			if (3 === aC.data.botDifficultyType)
				for (aA = aC.kD - 1; 0 <= aA; aA--) {
					var hQ = aA + k8;
					this.hH[hQ] = aC.data.botDifficultyData[hQ]
				} else if (2 === aC.data.botDifficultyType)
					for (aA = aC.kD - 1; 0 <= aA; aA--) this.hH[hQ = aA + k8] = aC.data.botDifficultyTeam[be.kE[be.eb[hQ]]];
				else if (1 === aC.data.botDifficultyType) {
			var kF = this.k3.length;
			for (aA = aC.kD - 1; 0 <= aA; aA--) this.hH[aA + k8] = aA % kF
		} else
			for (kF = aC.data.botDifficultyValue, aA = aC.kD - 1; 0 <= aA; aA--) this.hH[aA + k8] = kF;
		else
			for (var kC = 8 === aC.k9 ? 1 : 0, aA = aC.kD - 1; 0 <= aA; aA--) this.hH[aA + k8] = kC;
		for (aA = 0; aA < k8; aA++) this.hH[aA] = 6;
		var ed = aC.ea;
		for (aA = 0; aA < ed; aA++) this.hH[aA] <= 2 ? (k0[aA] = 5, k1[aA] = k2[aA] = 1040, 0 === this.hH[aA] ? (jy[aA] = 980, jz[aA] = 980) : 1 === this.hH[aA] ? (jy[aA] = 980, jz[aA] = 920, k1[aA] = k2[aA] = 1100) : (jy[aA] = 825, jz[aA] =
			750)) : this.hH[aA] <= 4 ? (k0[aA] = 1 + aw.jA(20), 3 === this.hH[aA] ? (jy[aA] = jz[aA] = 500, k1[aA] = k2[aA] = 1e3) : (k2[aA] = 250 + aw.jA(1501), k1[aA] = 500 + aw.jA(501), jy[aA] = 300 + aw.jA(201), jz[aA] = 100 + aw.jA(
			201))) : this.hH[aA] <= 5 ? (k1[aA] = 1e3, k2[aA] = 1e3, k0[aA] = 35 + aw.jA(16), jy[aA] = 300 + aw.jA(201), jz[aA] = 50 + aw.jA(101)) : (k1[aA] = k2[aA] = 800, k0[aA] = 5, jy[aA] = 10, jz[aA] = 250), kG(aA)
	}, this.kA = function() {
		for (var eH = ax.kH, k8 = aC.js, aA = eH - 1; 0 <= aA; aA--) this.hH[aA + k8] = 0;
		for (var ex = 0; ex < 6; ex++) {
			for (aA = eH + ax.kI[ex] - 1; eH <= aA; aA--) this.hH[aA + k8] = ex;
			eH += ax.kI[ex]
		}
	}, this.je = function(gA, value) {
		jx[gA] = Math.min(value, jx[gA])
	}, this.im = function(gA) {
		0 == --jx[gA] && ! function(gA) {
			(function(gA) {
				k1[gA] !== k2[gA] && (k1[gA] += k1[gA] < k2[gA] ? 3 : -3);
				jy[gA] !== jz[gA] && (jy[gA] += jy[gA] < jz[gA] ? k0[gA] : -k0[gA], jy[gA] = (Math.abs(jy[gA] - jz[gA]) <= k0[gA] ? jz : jy)[gA]);
				jx[gA] = bJ.dj(k1[gA], 10)
			})(gA), am.ii.jV(gA, bJ.dj(jy[gA] * af.ge[gA], 1e3))
		}(gA)
	}, this.kL = function(gA, g5) {
		k1[gA] = k2[gA] = g5
	}
}

function ic() {
	var kM = new Uint16Array(aC.ea);

	function kR(player, kP) {
		for (var ed = bM.f8[0], fF = bM.fF, kb = -1, kc = aC.ea, aA = 0; aA < ed; aA++) {
			var et, gA = fF[aA];
			eW(player, gA) && (et = bK.i5(kP, bK.iQ(gA)), -1 === kb || et < kb) && (kb = et, kc = gA)
		}
		return kc
	}

	function kT(kQ, kP) {
		if (kQ === aC.ea) return 0;
		for (var gJ = af.gJ[kQ], ka = gJ.length, ed = Math.min(ka, 10), kc = 0, kb = bK.i5(gJ[kc] >> 2, kP), aA = 0; aA < ed; aA++) {
			var hQ = aw.jA(ka),
				et = bK.i5(gJ[hQ] >> 2, kP);
			et < kb && (kb = et, kc = hQ)
		}
		return gJ[kc] >> 2
	}

	function kW(player, kP, j3, kf) {
		var kg;
		(kf === aC.ea || (kg = bK.iQ(j3), kf = bK.iQ(kf), bK.i5(kP, kg) < bK.i5(kP, kf))) && (kM[player] = j3)
	}
	this.dU = function() {
		kM.fill(aC.ea)
	}, this.im = function(player) {
		var kP, kS, kQ, j3 = function(player) {
			var j3 = kM[player];
			if (j3 !== aC.ea) {
				if (b8.fy.ke(j3)) return j3;
				kM[player] = aC.ea
			}
			return aC.ea
		}(player);
		return function(player) {
			for (var kZ = ak.ju, ka = ak.jt, ed = Math.min(ka, ka < 17 && 5 === aw.jA(20) ? 1 : 16), gB = aw.jA(ka), fF = bM.fF, gJ = af.gJ, g5 = 0, aA = 0; aA < ed; aA++) {
				var gA = kZ[(aA + gB) % ka];
				gA !== player && gJ[gA].length && (fF[g5++] = gA)
			}
			bM.f8[0] = g5
		}(player), 0 !== bM.f8[0] && (0 < (kS = kT(kQ = kR(player, kP = bK.iV(player)), kP)) && bL.kU.kV(player, kS) ? (kW(player, kP, kQ, j3), !0) : 0 < (kQ = function(player, kP) {
			for (var ed = bM.f8[0], fF = bM.fF, kd = kM, gB = 0, aA = 0; aA < ed; aA++) {
				var gA = fF[aA],
					gA = kd[gA];
				gA !== aC.ea && b8.fy.ke(gA) && player !== gA && eW(player, gA) && (fF[gB++] = gA)
			}
			return 0 !== (bM.f8[0] = gB) ? kT(kR(player, kP), kP) : 0
		}(player, kP)) && bL.kU.kV(player, kQ) ? (kW(player, kP, ab.eV(kQ << 2), j3), !0) : !!(0 < (kS = kT(j3, kP)) && bL.kU.kV(player, kS)))
	}
}

function il() {
	function kk(player) {
		for (var f3 = af.f3[player], ed = f3.length, f4 = Math.max(bJ.dj(ed, 12), 1), ef = ab.ef, dx = aw.jA(ed), aA = 0; aA < ed; aA += f4)
			for (var eS = f3[(aA + dx) % ed], eg = 3; 0 <= eg; eg--) {
				var eh = eS + ef[eg];
				if (ab.ei(eh)) return {
					eH: eh,
					id: ab.eL(eh),
					gA: player
				}
			}
		return null
	}

	function kp(player, kr) {
		var hH = b8.fy.ks(player, aD.k7[aD.hH[player]]);
		af.g4[player].push(kr.eH), ac.j0(player, hH, kr.gA), aE.j1(player, !0)
	}
	this.im = function(player) {
		return !!bQ.eI(bQ.eJ) && !!aC.data.passableMountains && 0 !== af.f3[player].length && function(player) {
			var kj = kk(player);
			if (null === kj) return !1;
			! function(player) {
				for (var ju = ak.ju, jt = ak.jt, ed = Math.min(jt, 12), gB = aw.jA(jt), fF = bM.fF, f3 = af.f3, g5 = 0, aA = 0; aA < ed; aA++) {
					var gA = ju[(aA + gB) % jt];
					gA !== player && f3[gA].length && eW(player, gA) && (fF[g5++] = gA)
				}
				bM.f8[0] = g5
			}(player);
			var km = function(eK) {
				for (var ed = bM.f8[0], fF = bM.fF, aA = 0; aA < ed; aA++) {
					var kr = kk(fF[aA]);
					if (null !== kr && kr.id === eK) return kr
				}
				return null
			}(kj.id);
			return null !== km ? (kp(player, km), !0) : function(player, eK) {
				var ed = am.iX.kq;
				if (0 !== ed)
					for (var eH = am.iX.eA[aw.jA(ed)] << 2, ef = ab.ef, eg = aw.jA(4);;) {
						if (eH += ef[eg], ab.ei(eH)) {
							if (ab.eL(eH) === eK) return kp(player, {
								eH: eH,
								gA: aC.ea
							}), !0;
							break
						}
						if (!ab.eU(eH)) break
					}
				return !1
			}(player, kj.id)
		}(player)
	}
}

function ia() {
	this.im = function(player) {
		var eP = function(player) {
			var ed = am.iX.kq;
			if (0 === ed) return -1;
			for (var ka = Math.min(ed, am.performance.ku ? ed : 10), eA = am.iX.eA, j9 = bJ.dj(aw.random() * ed, aw.value(100)), e = j9 + ka, kv = aw.iW(af.iR[player], af.iS[player]), kw = aw.iW(af.iT[player], af.iU[player]), kc = -1, et = bK
					.i6(0, 0, bQ.eo, bQ.ep), aA = j9; aA < e; aA++) {
				var gB = aA % ed,
					kx = bK.ev(kv, kw, eA[gB]);
				kx < et && (et = kx, kc = gB)
			}
			return -1 !== kc ? eA[kc] : -1
		}(player);
		return -1 !== eP && bL.kU.kV(player, eP)
	}
}

function ie() {
	this.ku = 0, this.dU = function() {
		this.ku = 0
	}, this.im = function() {
		if (!this.ku && bd.jp() % 30 == 7 && b8.fy.l0(80) && (am.performance.ku = 1)) {
			if (aC.hS) {
				var l3 = bf.l4();
				if (be.kE[l3]) {
					bf.l5(l3);
					var g = bM.fG,
						ed = bM.f8[0];
					if (0 !== ed)
						for (var l6 = Math.min(100 + 10 * (ed - 1), 400), aA = 0; aA < ed; aA++) aD.kL(g[aA], l6)
				}
			}
			aD.kL(l7[0], 100)
		}
	}
}

function iY() {
	var l8 = 0,
		l9 = 0,
		lA = 300,
		lB = 300,
		lC = 0;
	this.kq = 0, this.eA = new Uint32Array(512), this.dU = function() {
		l9 = l8 = 0, this.kq = 0, lC = 0
	}, this.im = function() {
		if (function() {
				var ed = am.iX.kq;
				if (0 === ed) return 1;
				var eA = am.iX.eA;
				if (bd.jp() % 35 == 6) {
					for (var aA = ed - 1; 0 <= aA; aA--) ab.eU(eA[aA] << 2) || (ed--, eA[aA] = eA[ed]);
					am.iX.kq = ed
				}
				return ed < eA.length
			}())
			if (lA <= l8) {
				var lG = am.iX.kq;
				if (lG) {
					if (bd.jp() % 350 != 1) return;
					if (lC !== lG) return void(lC = lG);
					if (!b8.fy.jG(l7[0])) return
				} else if (bd.jp() % 12 != 8) return;
				b8.fy.lH() || am.iX.dU()
			} else {
				var aA, i = bQ.eo,
					lI = i - 2,
					lG = lI * (bQ.ep - 2),
					lJ = lA,
					eA = am.iX.eA,
					ka = am.iX.kq,
					lK = eA.length,
					gB = Math.min(l9 + lJ * ((1 + 19 * am.performance.ku) * lB), lG);
				for (aA = l9; aA < gB; aA += lJ) {
					var eH = 4 * (aA % lI + (bJ.dj(aA, lI) + 1) * i + 1);
					if (ab.eU(eH) && (eA[ka] = eH >> 2, ++ka === lK)) {
						aA += lJ;
						break
					}
				}(l9 = aA) >= lG && (l9 = ++l8), am.iX.kq = ka
			}
	}
}

function lL() {
	aM.im(), ae.im(), aV.lM(), ay.x.im()
}

function lN() {
	az.im(), aF.im(), ad.im(), b2.im(), aE.im(), am.im(), bL.x.im(), ak.lO(), aU.im(), ax.im(), bT.im(), ae.im(), ae.lP(), aV.im(), bN.im(), aT.im(), aO.im(), aM.im(), b3.im(), aQ.im(), au.im(), bb.im(), bf.im(), ay.x.im(), ay.lQ.im(), s.im(), b7
	.im(), bd.im()
}

function lR() {
	aG.im(), aW.im(), aP.im(), at.im(), bA.im(), av.lS()
}

function lT() {
	aU.lU(!1), aO.lU(), aV.lU(!1), aT.lU(), aQ.lU(), au.lU(), ae.lU(!1), bf.lV()
}

function lW() {
	ae.lU(!1) && (bd.dc = !0), ay.x.im()
}

function c1() {
	var lX, lY, lZ;

	function lb(ld) {
		for (var aA = lX - 1; 0 <= aA; aA--) 0 === lZ[lY[aA]] && af.gQ[lY[aA]] >= ld && ff(lY[aA])
	}

	function la(player) {
		var di;
		64 === lZ[player] ? lZ[player] = 6 : (di = af.gQ[player], lZ[player] = di < 1e3 ? 3 : di < 1e4 ? 2 : di < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lX = 0, lY = new Uint16Array(aC.ea), lZ = new Uint8Array(aC.ea)
	}, this.im = function() {
		for (var aA = lX - 1; 0 <= aA; aA--) 64 === lZ[lY[aA]] ? la(lY[aA]) : 0 == lZ[lY[aA]]-- && (la(lY[aA]), ff(lY[aA]));
		16e4 <= af.gQ[l7[0]] && (lb(16e4), 3e5 <= af.gQ[l7[0]]) && lb(3e5), b8.fy.ke(aC.eN) && (bb.le[7] = Math.max(af.gQ[aC.eN], bb.le[7]))
	}, this.g0 = function(player) {
		for (var ew, aA = lX - 1; 0 <= aA; aA--)
			if (player === lY[aA]) {
				for (lX--, ew = aA; ew < lX; ew++) lY[ew] = lY[ew + 1];
				return
			}
	}, this.j1 = function(player, lf) {
		for (var aA = lX - 1; 0 <= aA; aA--)
			if (player === lY[aA]) return;
		lY[lX++] = player, lZ[player] = lf ? 2 : 64
	}
}

function c2() {
	var size, jg;
	this.dU = function() {
		size = aC.kD, jg = new Uint16Array(aC.ea);
		for (var js = aC.js, aA = aC.kD - 1; 0 <= aA; aA--) jg[aA] = js + aA
	}, this.im = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === af.li[jg[aA]]) {
				ew = void 0;
				var ew = aA;
				size--, jg[ew] = jg[size]
			} else aD.im(jg[aA])
	}, this.lh = function(gA) {
		jg[size++] = gA
	}
}

function c3() {
	var lk, ll, lm, ln, lo, lp, lq, lr, ls, lt, lu, lv, lw, lx = !1,
		ly = !1;

	function lz(e5) {
		lv = bd.eC, lm = ln = ll = 0, lo = (lw = 33) / e5, lk = 1 / (e5 / lw / 4), lp = (h.i / 2 + iD) / iE, lq = (h.j / 2 + iF) / iE, lr = iE
	}

	function m6(aA) {
		var m9; - 1 !== aA && (aA = bK.iK(bL.x.m8[aA]), m9 = bK.el(aA) - 10, aA = bK.en(aA) - 10, aG.m2(m9, aA, 19 + m9, 19 + aA))
	}

	function mK(e2) {
		Math.abs(Math.log(lu / lr)) < .125 && (lu = e2 * lr)
	}

	function mJ(m9, mA, mM, mN) {
		ls = (m9 + mM + 1) / 2, lt = (mA + mN + 1) / 2;
		mM = h.i / (mM - m9 + 1), m9 = h.j / (mN - mA + 1);
		lu = .9 * (mM < m9 ? mM : m9)
	}
	this.m0 = function() {
		return lx
	}, this.m1 = function() {
		lz(1), this.m2(0, 0, bQ.eo - 1, bQ.ep - 1), aC.gy || aC.gm || this.m3(aC.eN, 3e3, !0, .3)
	}, this.m4 = function(player, m5) {
		m6(bL.h6.m7(player, m5))
	}, this.m3 = function(player, e5, mB, zoom) {
		aC.mC || lx && !mB && ly || (0 === af.gQ[player] ? m6(bL.h6.mD(player)) : (aR.mE = !1, ly = mB, lz(e5), function(player) {
			ls = (af.iR[player] + af.iS[player] + 1) / 2, lt = (af.iT[player] + af.iU[player] + 1) / 2
		}(player), function(zoom, player) {
			var hy = af.iS[player] - af.iR[player] + 1,
				player = af.iU[player] - af.iT[player] + 1,
				ew = h.i / hy,
				ex = h.j / player,
				ew = (lu = ew < ex ? ew : ex, 0 !== zoom ? zoom : hy < 20 && player < 20 ? .5 : .9);
			lu *= ew, mK(7 / 8)
		}(zoom, player), lx = !0, ap.mH()))
	}, this.mI = function(e5) {
		aC.gm || aC.mC || (aR.mE = !1, ly = !1, lz(e5), mJ(0, 0, bQ.eo - 1, bQ.ep - 1), mK(7 / 8), lx = !0, ap.mH())
	}, this.m2 = function(m9, mA, mM, mN) {
		mJ(m9, mA, mM, mN), iE = lu, aR.mO(ls, h.i / 2), aR.mP(lt, h.j / 2), bY.mQ(), bd.dc = !0
	}, this.mR = function() {
		return !(lx && ly || (lx = !1))
	}, this.im = function() {
		var mU, mV, eg, mY;
		lx && (ll < .5 ? ln < lo && (ln += lo * lk, lm = ll) : 1 - lm < ll && (ln = (ln -= lo * lk) < lo * lk ? lo * lk : ln), lv = lv >= bd.eC ? bd.eC - 1 : lv, eg = bd.eC - lv, ll = 1e3 < eg || 1 < (ll += ln * eg / lw) ? 1 : ll, lv = bd.eC,
			eg = iE, mU = iD, mV = iF, eg = (iE = lr * Math.pow(lu / lr, ll)) / eg, mY = 1 - (lr * Math.pow(lu / lr, 1 - ll) - lr) / (lu - lr), aR.mO(lp + mY * (ls - lp), h.i / 2), aR.mP(lq + mY * (lt - lq), h.j / 2), ae.zoom(eg, (mU * eg -
				iD) / (1 - eg), (mV * eg - iF) / (1 - eg)), bY.mQ(), 1 <= ll && (lx = !1, bZ.mZ = !0), bd.dc = !0)
	}
}

function bv() {
	var ey = b8.color;
	this.ma = ey.mb(0, 0, 0), this.mc = ey.md(0, 0, 0, .7), this.me = ey.md(0, 0, 0, .5), this.mf = ey.md(0, 0, 0, .85), this.mg = ey.md(0, 0, 0, .75), this.mh = ey.md(0, 0, 0, .6), this.mi = ey.md(0, 0, 0, .35), this.mj = ey.mb(255, 255, 255), this
		.mk = ey.md(255, 255, 255, .3), this.ml = ey.md(255, 255, 255, .6), this.mm = ey.md(255, 255, 255, .4), this.mn = ey.md(255, 255, 255, .25), this.mo = ey.md(255, 255, 255, .85), this.mp = ey.md(255, 255, 255, .75), this.mq = ey.md(255, 255,
			255, .15), this.mr = ey.md(255, 255, 255, .11), this.ms = ey.mb(128, 128, 128), this.mt = ey.md(64, 64, 64, .75), this.mu = ey.md(88, 88, 88, .83), this.mv = ey.md(60, 60, 60, .85), this.mw = ey.md(80, 60, 60, .85), this.mx = ey.mb(170,
			170, 170), this.my = ey.mb(200, 235, 245), this.mz = ey.mb(30, 255, 30), this.n0 = ey.mb(0, 200, 0), this.n1 = ey.mb(128, 255, 128), this.n2 = ey.md(10, 65, 10, .75), this.n3 = ey.md(0, 255, 0, .6), this.n4 = ey.md(0, 255, 0, .5), this
		.n5 = ey.md(0, 200, 0, .5), this.n6 = ey.md(0, 100, 0, .75), this.n7 = ey.md(0, 60, 0, .8), this.n8 = ey.md(0, 255, 0, .3), this.n9 = ey.md(0, 180, 0, .6), this.nA = ey.md(0, 120, 0, .85), this.nB = ey.mb(0, 120, 0), this.nC = ey.md(0, 70, 0,
			.85), this.nD = ey.mb(190, 230, 190), this.nE = ey.mb(0, 255, 0), this.nF = ey.mb(255, 120, 120), this.nG = ey.mb(255, 160, 160), this.nH = ey.mb(255, 70, 70), this.nI = ey.mb(230, 0, 0), this.nJ = ey.md(220, 0, 0, .6), this.nK = ey.md(
			255, 100, 100, .8), this.nL = ey.md(100, 0, 0, .85), this.nM = ey.md(60, 0, 0, .85), this.nN = ey.md(200, 0, 0, .6), this.nO = ey.md(120, 0, 0, .85), this.nP = ey.mb(255, 70, 10), this.nQ = ey.mb(230, 190, 190), this.nR = ey.mb(255, 0,
		0), this.nS = ey.mb(255, 0, 255), this.nT = ey.md(60, 0, 60, .85), this.nU = ey.md(0, 60, 60, .85), this.nV = ey.md(10, 60, 60, .9), this.nW = ey.md(0, 96, 96, .75), this.nX = ey.mb(0, 255, 255), this.nY = ey.mb(160, 160, 255), this.nZ = ey
		.md(0, 40, 90, .75), this.na = ey.md(0, 0, 255, .6), this.nb = ey.mb(200, 200, 255), this.nc = ey.mb(255, 120, 100), this.nd = ey.md(255, 255, 0, .5), this.ne = ey.md(255, 255, 150, .2), this.nf = ey.mb(255, 255, 0), this.ng = ey.mb(255, 255,
			200), this.nh = ey.md(200, 200, 0, .6), this.ni = ey.md(140, 120, 0, .75), this.nj = ey.md(180, 160, 40, .75), this.nk = ey.md(70, 50, 20, .85), this.nl = ey.md(30, 30, 0, .85), this.nm = ey.md(60, 60, 0, .85), this.nn = ey.md(255, 140,
			0, .75), this.no = ey.md(70, 40, 0, .85), this.np = ey.mb(220, 120, 0), this.nq = ey.md(255, 200, 80, .85), this.nr = ey.mb(255, 150, 120), this.ns = ey.md(0, 0, 0, 0), this.nt = ey.md(255, 255, 255, 0), this.nu = ey.md(254, 254, 254, 0)
}

function cs() {
	this.gz = new nv, this.fy = new nw, this.nx = new ny, this.nz = new o0, this.jv = new o1
}

function nv() {
	this.h0 = function(eP) {
		aC.kB ? b6.nx.h0(aC.eN, eP) : ay.o2.o3(eP)
	}, this.hA = function(iC, j3) {
		aC.kB ? b6.nx.hA(aC.eN, iC, j3) : ay.o2.o4(iC, j3)
	}, this.o5 = function(iC, o6) {
		aC.kB ? b6.nx.o7(aC.eN, iC, o6) : ay.o2.o8(iC, o6)
	}, this.h8 = function(iC, eP) {
		aC.kB ? b6.nx.h8(aC.eN, iC, eP) : bL.h6.h7(aC.eN, eP) && ay.o2.o9(iC, eP)
	}, this.oA = function(m5, eP) {
		aC.kB ? b6.nx.oA(aC.eN, m5, eP) : bL.h6.oB(aC.eN, m5, eP) && ay.o2.oC(m5, eP)
	}, this.oD = function(j3) {
		aC.kB ? b6.nx.oD(aC.eN, j3) : ay.o2.oE(j3)
	}, this.oF = function(oG) {
		aC.kB ? b6.nx.oH(aC.eN, oG) : ay.o2.oI(oG)
	}, this.hM = function(oJ) {
		aC.kB ? b6.nx.hM(aC.eN, oJ) : ay.o2.oK(oJ)
	}, this.oL = function() {
		aC.kB ? b6.nx.oL(aC.eN) : ay.o2.oM()
	}, this.hJ = function() {
		aC.kB ? b6.nx.hJ(aC.eN) : ay.o2.o9(1, 0)
	}, this.h3 = function(iC, eP, j3) {
		aC.kB ? b6.nx.h3(aC.eN, iC, eP, j3) : ay.o2.oN(iC, eP, j3)
	}
}

function o1() {
	this.jw = function(player, o6, hH) {
		b8.fy.oO(player, hH, o6) && (ad.o5(player, o6), o6 < aC.js) && aw.random() < aw.value(10) && (am.ii.iy[o6] = 0)
	}, this.oP = function(player, o6, hH) {
		b8.fy.oQ(hH, o6) ? (b8.fy.g1(o6, bM.fA[0]), bb.oR(player, o6), ae.oS(o6, bM.fA[0])) : bb.g2(player, hH, 12)
	}
}

function nw() {
	this.oT = function(oG, player) {
		aM.oF(aC.eN, player, oG), ay.o2.oU(oG, player)
	}, this.oV = function(player) {
		aM.oW(player, 0), ay.o2.oX(player)
	}, this.oY = function(oZ, player) {
		aM.oa(oZ, player), ay.o2.ob(oZ, player)
	}, this.oc = function() {
		aC.kB || aC.gm || ay.od.oc()
	}
}

function o0() {
	this.im = function(aB) {
		var id, fK, mR;
		for (bF.dU(aB), bF.dy += 2, mR = 8 * bF.size; bF.dy + 8 <= mR;) id = bF.oe(4), fK = bF.oe(9), 0 === id ? this.og(id, fK, bF.oe(22)) : 1 === id ? this.og(id, fK, bF.oe(10), bF.oe(10)) : 2 === id ? this.og(id, fK, bF.oe(10), bF.oe(9)) :
			3 === id || 4 === id ? this.og(id, fK, bF.oe(10), bF.oe(22)) : 5 === id || 6 === id ? this.og(id, fK, bF.oe(10)) : 7 === id ? this.og(id, fK, bF.oe(1)) : 10 === id ? this.og(id, fK, bF.oe(20), bF.oe(22)) : this.og(id, fK)
	}, this.oh = [], this.oi = function() {
		for (var ok = 0, ol = 0, om = 0, on = 0, oo = 0, op = 0, aA = 0; aA < 512; aA++) ok += af.li[aA], ol += af.gQ[aA], om += af.ge[aA], on += bL.x.oq[aA];
		oo += bL.x.or, op += ak.jt, this.oh.push(om % 1073741824 * 4 + (ok + ol + on + oo + op) % 4)
	}, this.og = function(id, fK, fM, fO) {
		0 === id ? b6.nx.h0(fK, fM) : 1 === id ? b6.nx.hA(fK, fM, fO) : 2 === id ? b6.nx.o7(fK, fM, fO) : 3 === id ? b6.nx.h8(fK, fM, fO) : 4 === id ? b6.nx.oA(fK, fM, fO) : 5 === id ? b6.nx.oD(fK, fM) : 6 === id ? b6.nx.oH(fK, fM) : 7 === id ?
			b6.nx.hM(fK, fM) : 8 === id ? b6.nx.oL(fK) : 9 === id ? b6.nx.os(fK) : 10 === id && b6.nx.h3(fK, fM >> 10, fO, fM % 1024)
	}
}

function ny() {
	this.h0 = function(player, eP) {
		b8.fy.go(0) && b8.fy.gp(player) && bK.iH(eP) && (b7.ot.ou(0, player, eP), aC.ov.j0(player, eP))
	}, this.hA = function(player, iC, j3) {
		b8.fy.go(1) && b8.fy.gp(player) && b8.fy.ow(player, j3) && b8.fy.ox(player, iC, 12, 0) && b8.fy.oy(player, j3) && ((j3 = ac.jE(player, bM.eZ[0])) || ac.jW(player)) && (af.oz[player]++, b7.ot.ou(1, player, iC, bM.eZ[0]), am.ig.ir(player,
			j3)) && (b8.fy.p0(player), bb.p1(player, iC), am.ig.ix(player))
	}, this.o7 = function(player, iC, o6) {
		b8.fy.go(1) && b8.fy.gp(player) && aC.hS && b8.fy.ow(player, o6) && b8.fy.p2(player, o6) && b8.fy.oO(player, b8.fy.iB(player, iC), o6) && (b7.ot.ou(2, player, iC, o6), ad.o5(player, o6))
	}, this.h8 = function(player, iC, eP) {
		b8.fy.go(1) && b8.fy.gp(player) && (0 === eP && 1 === iC ? this.hJ(player) : bK.iH(eP) && bL.x.or !== bL.x.k6 && bL.x.oq[player] !== bL.x.p3 && 0 !== af.gJ[player].length && b8.fy.ox(player, iC, 32, 0) && bL.kU.kV(player, eP) && (bb.p4(
			player), b7.ot.ou(3, player, iC, eP), b8.fy.p0(player), bj.p5.h8(player), bL.x.p6(player)))
	}, this.oA = function(player, m5, eP) {
		b8.fy.go(1) && b8.fy.gp(player) && bK.iH(eP) && bL.h6.p7(player, m5) && bL.kU.p8(eP) && (b7.ot.ou(4, player, m5, eP), b8.fy.p9(player, 8), bb.g2(player, bM.fA[1], 12), bj.p5.oA(player), bL.x.oA())
	}, this.oD = function(player, j3) {
		b8.fy.go(1) && b8.fy.gp(player) && (j3 = Math.min(j3, aC.ea), ac.jE(player, j3)) && (b7.ot.ou(5, player, j3), ac.pA(player, j3))
	}, this.oH = function(player, oG) {
		(b8.fy.go(1) || b8.fy.go(2)) && b8.fy.gp(player) && (oG = bJ.pB(oG, 0, 1023), b7.ot.ou(6, player, oG), ae.pC(player, 0, oG))
	}, this.hM = function(player, oJ) {
		au.hL(player) && (b7.ot.ou(7, player, oJ), au.pD(player, oJ))
	}, this.oL = function(player) {
		(b8.fy.go(0) || b8.fy.go(1)) && b8.fy.gp(player) && aL.pE(player) && (b7.ot.ou(8, player), bO.oL(player))
	}, this.os = function(player) {
		b7.ot.ou(9, player), bO.os(player)
	}, this.hJ = function(player) {
		au.hN(player) && (b7.ot.ou(3, player, 1, 0), au.hJ(player))
	}, this.h3 = function(player, iC, eP, j3) {
		b8.fy.go(1) && b8.fy.gp(player) && b8.fy.ow(player, j3) && b8.fy.oy(player, j3) && bK.iH(eP) && al.eE.eX(player, eP) && (ac.jE(player, bM.eZ[0]) || ac.jW(player)) && (b7.ot.ou(10, player, (iC << 10) + bM.eZ[0], eP), j3 = b8.fy.ks(player,
			iC), af.g4[player].push(bM.ee[0]), ac.j0(player, j3, bM.eZ[0]), aE.j1(player, !0), bb.pF(player))
	}
}

function pG() {
	var pI;
	this.pH = [], this.pI = document.createElement("div"), this.pJ = function(pK, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pK, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pI.appendChild(
			title), title
	}, this.pL = function(pK, marginBottom) {
		var pM = document.createElement("p");
		return pM.textContent = pK, pM.style.fontSize = "0.75em", pM.style.lineHeight = "1.2em", pM.style.marginBottom = marginBottom || "0", this.pI.appendChild(pM), pM
	}, this.pN = function(pK) {
		var pO = document.createElement("p");
		return pO.textContent = pK, pO.style.fontSize = "1em", pO.style.marginBottom = "0", pO.style.whiteSpace = "pre-wrap", pO.style.overflowWrap = "break-word", this.pI.appendChild(pO), pO
	}, this.pP = function(pQ, fontSize) {
		var pI = document.createElement("div");
		return pI.innerHTML = pQ, pI.style.fontSize = fontSize || "1em", pI.style.lineHeight = "1.2em", this.pI.appendChild(pI), pI
	}, this.pR = function(pS) {
		for (var pT = pS.pT, ed = pT.length, aA = 0; aA < ed; aA++) this.pI.appendChild(pT[aA])
	}, this.pU = function(pV) {
		return this.pH.push(pV), this.pI.appendChild(pV.e), pV
	}, this.resize = function() {
		for (var ed = this.pH.length, aA = 0; aA < ed; aA++) this.pH[aA].resize && this.pH[aA].resize()
	}, (pI = this.pI).style.position = "absolute", pI.style.height = "auto", pI.style.padding = "0.5em"
}

function pW(pX, pY) {
	var pI = document.createElement("div");

	function ph() {
		var aA, pi, j, gB, eg, pc = h.k * pI.offsetWidth,
			pj = new Float64Array(function(pc) {
				var i = .25 * b8.pd.pe(.6) * h.pf;
				return Math.max(Math.floor(pc / i), 1)
			}(pc)),
			pk = ba.pk,
			pl = (pc - (pj.length + 1) * ba.gap) / (pj.length * h.k);
		for (pj.fill(pk), aA = 0; aA < pY.length; aA++) pi = (eg = pY[aA].pI).style, j = b8.pm.min(pj), gB = pj.indexOf(j), pi.top = b8.pd.pn(j), pi.left = b8.pd.pn(pk + gB * (pl + pk)), pi.width = b8.pd.pn(pl), b8.pd.po(eg, 5), pj[gB] += eg
			.offsetHeight + 3 * pk;
		pI.style.height = b8.pd.pn(b8.pm.max(pj) - 2 * pk)
	}
	this.pZ = pI, this.pa = pY, this.resize = function() {
		var aA;
		for (aA = 0; aA < pY.length; aA++) pY[aA].resize();
		ph(), ph()
	}, pI.style.width = "100%", pI.style.maxWidth = "100%", pX.style.lineHeight = "1.5em", pX.style.overflowX = "hidden", pX.style.overflowY = "auto";
	for (var aA = 0; aA < pY.length; aA++) pI.appendChild(pY[aA].pI);
	pX.appendChild(pI)
}

function v(pp, pq, pr, ps, pt) {
	var self, pu = document.createElement("button");

	function q1() {
		var q7;
		bH.q6() || (q7 = b8.color.q8(pr), !1 !== ps && 0 < q7[0] && q7[0] < 255 && q7[0] === q7[1] && q7[0] === q7[2]) || (pu.style.backgroundColor = b8.color.q9(pr, q7[3] && q7[3] < 120 ? 150 : 50))
	}

	function q0() {
		if (ps) {
			var q7 = b8.color.q8(pr);
			if (q7[0] === q7[1] && q7[0] === q7[2]) return
		}
		pq && ((q7 = pq(this)) ? 2 === q7 && q1() : qB(this))
	}

	function q3() {
		this.style.backgroundColor = pr
	}

	function q2() {
		qB(this)
	}

	function qB(eg) {
		eg.style.backgroundColor = pr, eg.blur()
	}
	this.button = pu, this.pv = pq, this.pw = pr, this.pz = function(q4) {
		q4 = 1.1 - Math.min(.01 * pp.length, .6) + .2 * q4;
		pu.style.fontSize = q4.toFixed(1) + "em"
	}, this.py = function(ey) {
		ey ? 1 === ey ? ey = b9.mv : 2 === ey && (ps = 1, ey = b9.mv) : (ps = 0, ey = b9.mf), this.pw = pr = ey, pu.style.backgroundColor = ey
	}, self = this, pu.innerHTML = pp, pu.style.color = pt ? b9.nf : b9.mj, pu.style.userSelect = "none", pu.style.outline = "none", pu.style.overflowWrap = "break-word", self.py(pr), pu.style.border = "none", pu.style.font = "inherit", self.pz(
		0), pu.style.padding = "0em 0.3em", pu.onclick = q0, pu.addEventListener("mouseover", q1), pu.addEventListener("mouseout", q2), pu.addEventListener("focus", q1), pu.addEventListener("blur", q3)
}

function qC(qD, pX) {
	var pI;
	this.resize = function() {
		for (var aA = 0; aA < qD.length; aA++) b8.pd.po(qD[aA].button);
		pI.style.gap = pI.style.padding = b8.pd.pn(ba.pk)
	}, (pI = document.createElement("div")).style.display = "grid", pI.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pI.style.overflowY = "auto", pI.style.gridAutoRows = "5.3em", pI.style.maxHeight = "100%";
	for (var aA = 0; aA < qD.length; aA++) qD[aA].pz(1), pI.appendChild(qD[aA].button);
	pX.appendChild(pI)
}

function qF(qG, qH, qI) {
	this.ek = 0, this.em = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b8.pd.pe(qI || .5) * qG[1] * h.pf, h.j - 2 * ba.gap), this.i = Math.min(this.j * (qG[0] / qG[1]), h.i - 2 * ba.gap), this.j = qG[1] * this.i / qG[0], this.ek = ba.gap + qH[0] * (h.i - this.i - 2 * ba.gap), this.em = ba
			.gap + qH[1] * (h.j - this.j - 2 * ba.gap)
	}, this.qJ = function() {
		return this.ek + .5 * this.i
	}
}

function qK(qL, qM) {
	var qV, self, qN = document.createElement("div"),
		qO = document.createElement("div"),
		qP = document.createElement("div"),
		qQ = null,
		qW = (this.qR = new qS({
			value: "",
			dy: -1
		}, 0, qT, function(e) {
			qQ.qc.textContent = 127 - e.target.value.length
		}), 0),
		qX = 1,
		qY = 0,
		qZ = 1048575;

	function qT() {
		qL(), qQ.qc.textContent = 127
	}

	function qm(ql, pV) {
		pV && (pV.qs = 1, ql.appendChild(bl.qt.transform(pV)))
	}

	function qq(bp) {
		qX ? qN.scrollTop = qN.scrollHeight : bp && (qN.scrollTop = qY)
	}
	this.qd = function(qe) {
			qZ = 1048575, qO.textContent = "", qe || this.lV()
		}, this.lV = function() {
			var qf = bl.x.qg[0],
				qf = bl.x.qi[qf],
				qj = qf.qj,
				ed = qj.length,
				j9 = 1048575 === qZ ? 0 : ed - (qf.qk - qZ + 1048575) % 1048575;
			if (qZ = qf.qk, !(ed <= (j9 = Math.max(j9, 0)))) {
				for (var ql = document.createDocumentFragment(), aA = j9; aA < ed; aA++) qm(ql, bl.qn.qo(qj[aA], bl.qn.qp(qj[aA])));
				qO.appendChild(ql), qq()
			}
		}, this.qr = function(p) {
			var ql = document.createDocumentFragment();
			qm(ql, p), qO.appendChild(ql), qq()
		}, this.show = function(pX) {
			pX.appendChild(qN), pX.appendChild(qP), this.resize(pX)
		}, this.qu = function(pX) {
			pX.removeChild(qN), pX.removeChild(qP)
		}, this.resize = function(pX) {
			qW = pX ? pX.offsetHeight : qW;
			var pX = b8.pd.qw(.04, .75),
				qx = Math.max(pX, qW - pX),
				qy = h.i / h.k,
				qz = .7 * qy,
				qx = (qP.style.top = b8.pd.pn(qW - pX), qP.style.height = b8.pd.pn(pX), qN.style.top = b8.pd.pn(qW - pX - qx), qN.style.height = b8.pd.pn(qx), b8.pd.po(qN, 2), this.qR.e.style.width = b8.pd.pn(qz), this.qR.e.style.fontSize = qV.button
					.style.fontSize = b8.pd.pn(.5 * pX), b8.pd.po(this.qR.e, 6), qV.button.style.left = b8.pd.pn(qz), qV.button.style.width = b8.pd.pn(qy - qz), .385 * pX);
			z.a0.r1() && (qx *= .8 - .12 * (h.i > h.j)), qO.style.marginLeft = qO.style.marginRight = b8.pd.pn(.5 * qx), qO.style.fontSize = b8.pd.pn(qx), qq(1)
		}, (self = this).qR.e.qa = 127, qN.style.position = "absolute", qN.style.top = "0", qN.style.left = "0", qN.style.width = "100%", qN.style.overflowX = "hidden", qN.style.overflowY = "auto", qN.style.font = "inherit", qN.style
		.backgroundColor = b9.mh, qN.addEventListener("scroll", function() {
			qY = qN.scrollTop, qX = qY < qN.scrollHeight - qN.clientHeight - 2 ? 0 : 1
		}), qO.style.font = "inherit", qP.style.position = "absolute", qP.style.left = "0", qP.style.width = "100%", self.qR.e.setAttribute("placeholder", L(13)), self.qR.e.style.position = "absolute", self.qR.e.style.top = "0", self.qR.e.style
		.left = "0", self.qR.e.style.height = "100%", self.qR.e.style.backgroundColor = b9.me, self.qR.e.style.textAlign = "center", (qV = new v(L(14), qT)).button.top = "0", qV.button.style.position = "absolute", qV.button.style.height = "100%", qV
		.py(b9.nt), qQ = new qb("127", qV.button, 1, 1), qN.appendChild(qO), qP.appendChild(self.qR.e), qP.appendChild(qV.button)
}

function r2(r3, pp, r4) {
	function click() {
		var value = 1 - r3.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pp, void 0 !== r3.dy ? bh.r5.r6(r3.dy, value) : r3.value = value, r4 && r4(value)
	}
	var e;
	pp = pp || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (r3.value ? "🟩 " : "⬜ ") + pp, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r7(pX, pQ) {
	var pI = document.createElement("div");
	this.pZ = pI, this.resize = function() {
		pI.style.padding = b8.pd.pn(ba.pk), pI.style.lineHeight = b8.pd.pn(b8.pd.qw(.035))
	}, pX.style.overflowX = "hidden", pX.style.overflowY = "auto", pI.innerHTML = pQ, pX.appendChild(pI)
}

function r8(r9) {
	var pI = document.createElement("div");
	this.e = pI, this.rA = r9, this.resize = function() {
		for (var ed = r9.length, aA = 1; aA < ed; aA++) b8.pd.po(r9[aA], 4)
	};
	var aA, ed = r9.length;
	for (pI.style.width = "100%", pI.style.height = "2.7em", pI.style.marginTop = "0.6em", pI.style.border = "inherit", aA = 0; aA < ed; aA++) r9[aA].style.verticalAlign = "top", r9[aA].style.width = (100 / ed).toFixed(2) + "%", r9[aA].style.height =
		"100%", r9[aA].style.fontSize = "0.75em", pI.appendChild(r9[aA])
}

function rB(rC, pr, rD) {
	this.pI = document.createElement("div"), this.qD = rC;
	var rE = 0;
	this.resize = function(pX, rG) {
		var ed = rC.length;
		if (!rD)
			for (var aA = 1; aA < ed; aA++) b8.pd.po(rC[aA].button, 4);
		for (var rH = 0, aA = 0; aA < ed; aA++) rH += rC[aA].button.offsetWidth;
		if (pX && (rE = pX.offsetWidth), rG && rH < rE)
			for (aA = 0; aA < ed; aA++) rC[aA].button.style.width = (100 * rC[aA].button.offsetWidth / rH).toFixed(2) + "%";
		else
			for (aA = 0; aA < ed; aA++) rC[aA].button.style.width = "auto";
		rG || this.resize(pX, 1)
	};
	var rF = this;
	rF.pI.style.height = rF.pI.style.maxHeight = "100%";
	for (var aA = 0; aA < rC.length; aA++) rC[aA].py(pr), rC[aA].button.style.height = "100%", rC[aA].button.style.padding = "0.0em 0.9em", rF.pI.appendChild(rC[aA].button)
}

function rI() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b8.pd.po(this.e, 8, b9.ms)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rJ() {
	var rN, rO, rK = document.createElement("div"),
		rL = 0,
		rM = 0;
	this.show = function(ek, em, pK, rP, rQ) {
		if (rL) {
			if (!rP) return;
			this.qu()
		}
		ek === em && -1 === ek ? (ek = rN, em = rO) : (rN = ek, rO = em), rQ || (rM = rP), rL = 1;
		rQ = h.i / h.k, rK.style.whiteSpace = "pre", rK.textContent = pK, b8.pd.po(rK, 5), rK.style.font = b8.pd.rS(0, b8.pd.qw(.015)), rK.style.padding = "0.3em 0.6em", rK.style.left = ek + "px", rK.style.top = "0px", document.body.appendChild(
			rK), rP = ek + rK.offsetWidth - rQ;
		0 < rP && (rK.style.left = (pK = ek - rP) + "px", pK < 5) && (rK.style.whiteSpace = "pre-wrap"), rK.style.top = em - rK.offsetHeight + rM * ba.rU + "px"
	}, this.qu = function(rV) {
		if (rL) {
			if (rV && rM) return 0;
			rL = 0, document.body.removeChild(rK)
		}
		return 1
	}, rK.style.position = "absolute", rK.style.backgroundColor = b9.mf, rK.style.color = b9.mj, rK.style.pointerEvents = "none", rK.style.zIndex = "5", rK.style.maxWidth = "100%"
}

function qS(rW, type, rX, rY) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rZ++, e.value = rW.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.mj, e.style.backgroundColor = b9.mc, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.ra++
		}), e.addEventListener("blur", function() {
			h.ra--, -1 !== rW.dy && bh.r5.r6(rW.dy, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rW.dy && bh.r5.r6(rW.dy, e.value), rX ? rX() : e.blur())
		}), rY && e.addEventListener("input", function(pV) {
			rY(pV)
		})
}

function rb(pX, data) {
	var ed = data.rc.length,
		rd = document.createElement("div"),
		re = document.createElement("div"),
		rf = document.createElement("div"),
		rg = new Array(ed),
		pY = new Array(ed),
		rh = new Array(data.ri.length),
		rj = b8.color.md(70, 70, 0, .35);

	function q9() {
		this.style.backgroundColor = b8.color.q9(rj, 160)
	}

	function ro() {
		this.style.backgroundColor = rj
	}

	function ph() {
		var ew;
		for (pX.style.font = b8.pd.rS(0, b8.pd.ry(.026, .5, .03)), aA = 1; aA < rh.length; aA++) b8.pd.po(rh[aA], 4);
		if (b8.pd.po(rd, 2), ed) {
			for (var h2, rz = rd.offsetWidth, s0 = rf.offsetWidth, aA = 0; aA < rh.length; aA++) h2 = .01 * data.rn[aA] * s0, rh[aA].style.width = (100 * h2 / rz).toFixed(2) + "%";
			var ka = data.rc[0].length;
			for (aA = 0; aA < ed; aA++)
				for (b8.pd.po(rg[aA], 2), ew = 1; ew < ka; ew++) b8.pd.po(pY[aA][ew], 4);
			re.rk && (re.scrollTop = re.rk)
		}
	}
	this.resize = function() {
			ph(), ph()
		}, pX.style.display = "flex", pX.style.flexDirection = "column", re.style.overflowX = "hidden", re.style.overflowY = "auto", re.addEventListener("scroll", function() {
			this.rk = this.scrollTop
		}),
		function() {
			var eg, aA, rc = data.rc,
				ka = ed ? rc[0].length : 0;
			for (aA = 0; aA < ed; aA++) {
				rg[aA] = document.createElement("div"), rg[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.md(130, 130, 130, .35) : b9.mi
				}(aA), rg[aA].style.width = "100%", rg[aA].style.display = "flex", pY[aA] = new Array(ka);
				for (var ew = 0; ew < ka; ew++) pY[aA][ew] = eg = document.createElement("div"), eg.style.display = "flex", eg.style.justifyContent = "center", eg.style.wordBreak = "break-all", eg.style.padding = "0.4em 0em", eg.style.width = data
					.rn[ew] + "%", eg.innerHTML = rc[aA][ew].f5, 1 === rc[aA][ew].di && (eg.name = "" + aA, eg.style.color = b9.nf, eg.style.backgroundColor = rj, eg.addEventListener("mouseover", q9), eg.addEventListener("mouseout", ro), function(eg,
						rq, rr) {
						2147483647 !== rr && eg.addEventListener("click", function() {
							bB.a6(30), bB.a7(30, rq), bF.dU(bB.aB), this.style.backgroundColor = rj, s.t(8, s.rs, new rt(25, {
								ru: 0,
								rq: bD.rv.rw(bD.rv.rx(5)),
								rr: rr
							}))
						})
					}(eg, rc[aA][ew].rq, rc[aA][ew].rr)), rg[aA].appendChild(eg)
			}
			for (rd.style.display = "flex", rd.style.backgroundColor = b8.color.md(0, 120, 0, .35), aA = 0; aA < rh.length; aA++) rh[aA] = eg = document.createElement("div"), eg.style.display = "flex", eg.style.justifyContent = "center", eg.style
				.wordBreak = "break-all", eg.style.padding = "0.4em 0em", eg.style.width = data.rn[aA] + "%", eg.innerHTML = data.ri[aA], rd.appendChild(eg)
		}();
	for (var aA = 0; aA < ed; aA++) rf.appendChild(rg[aA]);
	re.appendChild(rf), pX.appendChild(rd), pX.appendChild(re)
}

function s1() {
	var s5, s6, s2 = document.createElement("div"),
		s3 = document.createElement("div"),
		s4 = document.createElement("div"),
		rf = document.createElement("div"),
		qD = [],
		dt = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		s7 = [1, 2, 3, 0, 9, 10, 11];

	function s9(aA) {
		s.t(8, 0, new rt(21, {
			sB: s7[aA],
			sC: 0,
			sD: 10
		}))
	}
	this.show = function() {
			this.r6(s.x.sE), document.body.appendChild(s2)
		}, this.qu = function() {
			document.body.removeChild(s2)
		}, this.r6 = function(sE) {
			for (var sF = [3, 0, 1, 2, 4, 5, 6], aA = 0; aA < qD.length; aA++) {
				var i = sE[aA];
				s5[sF[aA]][1].qc.textContent = i || ""
			}
		}, this.resize = function() {
			var aA, sG = ba.gap,
				j = b8.pd.sH(.085),
				i = Math.min(4 * j, h.i - 2 * sG),
				ed = qD.length;
			for (b8.pd.sI(s2, sG, h.j - sG - j, i, j), b8.pd.po(s2), b8.pd.po(s3, 6), aA = 0; aA < ed - 1; aA++) b8.pd.po(qD[aA].button, 6);
			for (aA = 0; aA < ed; aA++) s5[aA][0].resize(), s5[aA][1].resize();
			for (qD[0].ek = 0, qD[0].button.style.left = b8.pd.pn(qD[0].ek), qD[0].button.style.width = b8.pd.sJ(1.7 * j), aA = 1; aA < ed; aA++) qD[aA].ek = qD[aA - 1].ek + qD[aA - 1].button.offsetWidth, qD[aA].button.style.left = b8.pd.pn(qD[aA]
				.ek);
			if (!s6) {
				if (!aa.sK()) return;
				(s6 = aa.get(14)).style.width = "24%", s6.style.position = "absolute", s3.appendChild(s6)
			}
			s6.style.left = b8.pd.pn(0), s6.style.top = "7%", s4.sL && (s4.scrollLeft = s4.sL)
		}, s2.style.position = "absolute", s3.style.width = "25%", s3.style.height = "100%", s3.style.backgroundColor = b9.mf, s4.style.position = "absolute", s4.style.width = "75%", s4.style.height = "100%", s4.style.backgroundColor = b9.mf, s4
		.style.top = s4.style.right = b8.pd.pn(0), b8.pd.s8(s4), rf.style.height = rf.style.maxHeight = "100%", qD.push(new v("", function() {
			s9(0)
		}, b9.nT)), qD.push(new v("", function() {
			s9(1)
		}, b9.nU)), qD.push(new v("", function() {
			s9(2)
		}, b9.nM)), qD.push(new v("", function() {
			s9(3)
		}, b9.n7)), qD.push(new v("", function() {
			s9(4)
		}, b9.no)), qD.push(new v("", function() {
			s9(5)
		}, b9.nm)), qD.push(new v("", function() {
			s9(6)
		}, b9.no)), s5 = new Array(qD.length);
	for (var aA = 0; aA < qD.length; aA++) qD[aA].button.style.position = "absolute", s5[aA] = [new sA(dt[aA], qD[aA].button, .25, .45), new sA("", qD[aA].button, .53, .84, 1)], qD[aA].button.style.height = qD[aA].button.style.maxHeight = "100%", qD[
		aA].button.top = b8.pd.pn(0), rf.appendChild(qD[aA].button);
	s4.appendChild(rf), s2.appendChild(s3), s2.appendChild(s4)
}

function sM(sN, sO, sP, sQ, qL, qM) {
	var sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("div"),
		sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = document.createElement("div"),
		sY = document.createElement("div"),
		sZ = document.createElement("span"),
		sa = document.createElement("div");
	this.sb = new qK(qL, qM), this.sc = new sd(qM), this.se = [sN, sO, sP, sQ], this.si = function(sj) {
		sj = (sj / 10).toFixed(1) + "%";
		sY.style.width = sj, sZ.innerHTML = sj
	}, this.sk = function() {
		this.sc.qu(sW), this.sb.show(sW)
	}, this.sl = function() {
		this.sb.qu(sW), this.sc.show(sW)
	}, this.sm = function() {
		return sS
	}, this.show = function() {
		document.body.appendChild(sR)
	}, this.qu = function() {
		document.body.removeChild(sR)
	}, this.resize = function(sn) {
		var so = 1 - .4 * z.a0.r1() * (h.i > 1.6 * h.j),
			sp = b8.pd.qw(.05 * so),
			sq = h.j > h.i,
			sr = b8.pd.qw(.07 * so + .03 * sq),
			ss = b8.pd.qw(.04 + .02 * sq),
			sq = b8.pd.qw(.02 * so + .01 * sq),
			su = b8.pd.qw(.025);
		sR.style.font = b8.pd.rS(0, su), so < 1 && (su = b8.pd.rS(0, so * su), sT.style.font = su, sV.style.font = su, sa.style.font = su, sX.style.font = su, sU.style.font = su), sS.style.height = b8.pd.pn(sp), sS.style.font = b8.pd.rS(0, .72 *
				sp), b8.pd.po(sS, 2), sT.style.top = b8.pd.pn(sp), sT.style.height = b8.pd.pn(sr), b8.pd.po(sT, 2), sU.style.font = b8.pd.rS(0, so * b8.pd.qw(.02)), sU.style.top = b8.pd.pn(sp + sr), sU.style.height = b8.pd.pn(ss), b8.pd.po(sU,
			2), sV.style.top = b8.pd.pn(sp + sr + ss), sV.style.height = b8.pd.pn(sr), b8.pd.po(sV, 2), sW.style.top = b8.pd.pn(sp + sr + ss + sr), sW.style.height = b8.pd.pn(h.j / h.k - sp - 3 * sr - ss - sq), sX.style.top = b8.pd.pn(h.j / h.k -
				sr - sq), sX.style.height = b8.pd.pn(sq), b8.pd.po(sX, 8), sZ.style.font = b8.pd.rS(0, .8 * sq), sa.style.top = b8.pd.pn(h.j / h.k - sr), sa.style.height = b8.pd.pn(sr), b8.pd.po(sa, 8), sN.resize(sT), sO.resize(sT), sP.resize(
			sT), sQ.resize(sT), sn ? this.sb.resize(sW) : this.sc.resize()
	};
	qL = this;
	sR.style.position = "absolute", sR.style.top = "0", sR.style.left = "0", sR.style.width = "100%", sR.style.height = "100%", sR.style.backgroundColor = b9.mi, bH.q6() || (sR.style.backdropFilter = "blur(4px)", sR.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sR.style.display = "none"), sS.style.position = "absolute", sS.style.top = "0", sS.style.left = "0", sS.style.width = "100%", sS.style.display = "flex", sS.style.alignItems = "center";
	for (var g = [sT, sU, sV, sa], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pd.s8(g[aA]);
	sW.style.position = "absolute", sW.style.left = "0", sW.style.width = "100%", sW.style.font = "inherit", sX.style.position = "absolute", sX.style.left = "0", sX.style.width = "100%", sY.style.position = "absolute", sY.style.top = "0", sY.style
		.left = "0", sY.style.height = "100%", sY.style.width = "50%", sY.style.backgroundColor = b9.n5, sZ.innerHTML = "", sZ.style.position = "absolute", sZ.style.top = "50%", sZ.style.left = "50%", sZ.style.transform = "translate(-50%, -50%)", sS
		.appendChild(function() {
			var sh = document.createElement("h1");
			return sh.textContent = L(23), sh.style.margin = "0 auto 0.15em auto", sh.style.webkitTextStroke = "0.02em brown", sh.style.fontFamily = "Arial Black, Trebuchet MS", sh.style.fontSize = "inherit", sh.style.fontWeight = "inherit", sh
		}()), sT.appendChild(sN.pI), sU.appendChild(sO.pI), sV.appendChild(sP.pI), sX.appendChild(sY), sX.appendChild(sZ), sa.appendChild(sQ.pI), sR.appendChild(sS), sR.appendChild(sT), sR.appendChild(sU), sR.appendChild(sV), sR.appendChild(sW), sR
		.appendChild(sX), sR.appendChild(sa), qL.sc.show(sW)
}

function sd(qM) {
	var sR = document.createElement("div"),
		sW = document.createElement("div");
	this.lV = function() {
			sW.textContent = "", bl.sw.qu(1);
			for (var ql = document.createDocumentFragment(), sx = bl.x.qg[0], sy = bl.sy.sz[sx], t0 = bl.sy.t0[sx], aA = 0; aA < sy.length; aA++) ! function(ql, pV, t2, sx) {
				var qc = document.createElement("span");
				qc.textContent = (t2 ? "🟢 " : "⚪ ") + bl.qn.t3(pV, sx), qc.style.color = bl.qn.t4(pV.t5), qc.style.cursor = "pointer", qc.style.margin = "0.2em 0.2em 0.2em 0.2em", qc.style.width = qc.style.maxWidth = 2 === sx ? "10em" : "9em",
					qc.style.height = qc.style.maxHeight = "1.4em", qc.style.whiteSpace = "nowrap", qc.style.overflow = "hidden", qc.style.textOverflow = "ellipsis", qc.style.font = "inherit", qc.style.display = "inline-block", bl.qn.t6(pV) && (
						qc.style.textDecoration = "underline"), qc.onclick = function(e) {
						qM(e, pV)
					}, bH.q6() || (qc.onmouseover = function(e) {
						bl.sw.t7(e, pV, 1)
					}), ql.appendChild(qc)
			}(ql, sy[aA], aA < t0, sx);
			sW.appendChild(ql)
		}, this.show = function(pX) {
			pX.appendChild(sR)
		}, this.qu = function(pX) {
			pX.removeChild(sR)
		}, this.resize = function() {
			sW.style.fontSize = b8.pd.pn(b8.pd.qw(.02, .3))
		}, sR.style.top = "0", sR.style.left = "0", sR.style.width = sR.style.height = "100%", sR.style.overflowX = "hidden", sR.style.overflowY = "auto", sR.style.font = "inherit", sW.style.font = "inherit", sW.style.margin = "0.4em", sR
		.appendChild(sW)
}

function t8(t9) {
	var sR = document.createElement("div"),
		qP = document.createElement("div"),
		tA = [];

	function q1() {
		bH.q6() || (this.style.backgroundColor = b8.color.q9(b9.mf, 50))
	}

	function q2() {
		this.style.backgroundColor = b9.mf
	}
	this.r6 = function(tC, tD) {
			tA[2].textContent = tC + 1 + " / " + tD
		}, this.show = function(pV) {
			qP.appendChild(bl.qt.transform(bl.qn.qo(pV, bl.qn.qp(pV)))), document.body.appendChild(sR)
		}, this.resize = function() {
			var j = b8.pd.qw(.03, .5);
			sR.style.width = 10 * j + "px", sR.style.font = b8.pd.rS(1, .75 * j), b8.pd.po(sR, 4), qP.style.top = j + "px", qP.style.font = b8.pd.rS(0, .55 * j), b8.pd.po(qP, 2), sR.style.height = j + qP.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pd.po(tA[aA], 6), tA[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) tA[aA].style.height = j + "px", b8.pd.po(tA[aA], 2);
			tA[2].style.width = 4 * j + "px", tA[1].style.left = 2 * j + "px", tA[2].style.left = 4 * j + "px", tA[3].style.left = 8 * j + "px"
		}, this.tE = function() {
			for (var aA = 0; aA < 4; aA++) tA[aA].onclick = null, tA[aA].onmouseover = null, tA[aA].onmouseout = null;
			document.body.removeChild(sR), sR = qP = tA = null
		}, sR.style.position = "absolute", sR.style.color = b9.mj, sR.style.zIndex = "3", sR.style.right = "0", sR.style.top = "0", qP.style.position = "absolute", qP.style.height = "auto", qP.style.color = b9.mj, qP.style.backgroundColor = b9.mf, qP
		.style.left = "0", qP.style.width = "100%", qP.style.overflowWrap = "break-word", sR.appendChild(qP);
	for (var aA = 0; aA < 4; aA++) tA[aA] = document.createElement("div"), tA[aA].style.position = "absolute", tA[aA].style.backgroundColor = b9.mf, tA[aA].style.color = b9.mj, tA[aA].style.top = "0", tA[aA].style.display = "flex", tA[aA].style
		.justifyContent = "center", tA[aA].style.alignItems = "center", tA[aA].style.userSelect = "none", tA[aA].style.outline = "none", tA[aA].style.font = "inherit", 2 !== (tA[aA].tB = aA) && (tA[aA].onclick = t9, tA[aA].onmouseover = q1, tA[aA]
			.onmouseout = q2), sR.appendChild(tA[aA]);
	tA[0].textContent = "◀", tA[1].textContent = "▶", tA[3].textContent = "✖"
}

function tF(t9) {
	var rK = document.createElement("div");

	function q1() {
		bH.q6() || (rK.style.backgroundColor = b8.color.q9(b9.mf, 50))
	}

	function q2() {
		rK.style.backgroundColor = b9.mf
	}
	this.r6 = function(tD) {
			rK.textContent = tD
		}, this.show = function() {
			document.body.appendChild(rK)
		}, this.resize = function() {
			var j = b8.pd.qw(.03, .5);
			rK.style.width = 2 * j + "px", rK.style.height = j + "px", rK.style.font = b8.pd.rS(1, .75 * j), b8.pd.po(rK, 4), b8.pd.po(rK, 2)
		}, this.tE = function() {
			rK.onclick = null, rK.onmouseover = null, rK.onmouseout = null, document.body.removeChild(rK), rK = null
		}, rK.style.position = "absolute", q2(), rK.style.color = b9.mj, rK.style.zIndex = "3", rK.style.right = "0", rK.style.top = "0", rK.style.display = "flex", rK.style.justifyContent = "center", rK.style.alignItems = "center", rK.style
		.userSelect = "none", rK.style.outline = "none", rK.onclick = t9, rK.onmouseover = q1, rK.onmouseout = q2
}

function tG(rC) {
	var sR = document.createElement("div"),
		tH = document.createElement("div"),
		rL = (this.ek = 0, this.em = 0);

	function tJ() {
		bl.tK.qu()
	}
	this.qD = rC, this.show = function(ek, em, tM) {
		if (rL) return [0, 0];
		rL = 1, this.ek = ek, this.em = em,
			function(self, tM) {
				var i = b8.pd.qw(.16, .7),
					j = rC.length * i / 3,
					tO = h.i / h.k,
					tP = h.j / h.k,
					mL = Math.min(1, Math.min(tO / i, tP / j));
				i *= mL, j *= mL, tM && (self.ek += b8.pd.qw(.03, .5)), self.ek = bJ.pB(self.ek, 0, tO - i), self.em = bJ.pB(self.em, 0, tP - j), tH.style.left = self.ek + "px", tH.style.top = self.em + "px", tH.style.width = i + "px", tH.style
					.height = j + "px", tH.style.font = b8.pd.rS(0, .34 * j / rC.length), b8.pd.po(tH, 5);
				for (var aA = 1; aA < rC.length; aA++) b8.pd.po(rC[aA].button, 8)
			}(this, tM), document.body.appendChild(sR)
	}, this.qu = function() {
		rL && (rL = 0, sR.removeEventListener("click", tJ), document.body.removeChild(sR))
	};
	for (var aA = 0; aA < rC.length; aA++) new qb("" + (1 + aA), rC[aA].button, 0, 1);
	sR.style.position = "fixed", sR.style.top = "0", sR.style.left = "0", sR.style.width = "100%", sR.style.height = "100%", sR.style.zIndex = "5", tH.style.position = "absolute",
		function() {
			for (var tL = (100 / rC.length).toFixed(2) + "%", aA = 0; aA < rC.length; aA++) rC[aA].button.style.width = "100%", rC[aA].button.style.height = rC[aA].button.style.maxHeight = tL, rC[aA].button.style.padding = "0.0em 0.9em", tH
				.appendChild(rC[aA].button)
		}(), sR.appendChild(tH), sR.addEventListener("click", tJ)
}

function tQ(rW, tR) {
	this.pT = [];
	var tS = this.pT;

	function click() {
		for (var aA = 0; aA < tS.length; aA++) tS[aA].textContent = tS[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dy = parseInt(this.name);
		void 0 !== rW.dy && bh.r5.r6(rW.dy, dy), tR && tR(dy)
	}
	for (var tT, ed = rW.tU.length, aA = 0; aA < ed; aA++)(tT = document.createElement("p")).textContent = "⚪ " + rW.tU[aA], tT.style.margin = "0", tT.name = "" + aA, tT.style.cursor = "pointer", tT.style.fontSize = "1em", tT.addEventListener(
		"click", click), tS.push(tT);
	tS[rW.value].textContent = tS[rW.value].textContent.replace("⚪", "🟢")
}

function tV(title, tW, tX) {
	var s2 = document.createElement("div"),
		tY = document.createElement("div"),
		rf = document.createElement("div"),
		tZ = document.createElement("div"),
		ta = document.createElement("div");
	this.tb = rf, this.tc = tW, this.show = function() {
			!1 !== tX ? document.body.appendChild(s2) : (document.body.appendChild(tY), document.body.appendChild(tZ))
		}, this.qu = function() {
			!1 !== tX ? document.body.removeChild(s2) : (document.body.removeChild(tY), document.body.removeChild(tZ))
		}, this.tg = function() {
			var qx = b8.pd.qw(.1),
				qv = b8.pd.qw(.08 + .04 * (h.th < 1));
			return {
				qx: qx,
				qv: qv,
				ti: h.j / h.k - qx - qv
			}
		}, this.resize = function(rG) {
			var ed = tW.length,
				tj = this.tg(),
				qx = tj.qx,
				qv = tj.qv;
			for (tY.style.height = b8.pd.pn(qx), b8.pd.po(tY, 2), tZ.style.top = b8.pd.pn(h.j / h.k - qv), tZ.style.height = b8.pd.pn(qv), b8.pd.po(tZ, 8), rf.style.top = b8.pd.pn(qx), rf.style.height = rf.style.maxHeight = b8.pd.pn(tj.ti), tY.style
				.font = b8.pd.rS(0, b8.pd.qw(.02, .3)), tZ.style.font = b8.pd.rS(0, b8.pd.qw(.02, .7)), rf.style.font = b8.pd.rS(0, b8.pd.qw(.02, .7)), aA = 1; aA < ed; aA++) b8.pd.po(tW[aA].button, 4);
			for (var rH = 0, aA = 0; aA < ed; aA++) rH += tW[aA].button.offsetWidth;
			if (rG && rH < tZ.offsetWidth)
				for (aA = 0; aA < ed; aA++) tW[aA].button.style.width = (100 * tW[aA].button.offsetWidth / rH).toFixed(2) + "%";
			else
				for (aA = 0; aA < ed; aA++) tW[aA].button.style.width = "auto";
			tZ.sL && (tZ.scrollLeft = tZ.sL), rG || this.resize(!0)
		}, this.tk = function() {
			var tj = this.tg(),
				ey = h.k;
			tl.fillStyle = b9.mf, tl.fillRect(0, ey * tj.qx, h.i, ey * tj.ti)
		}, s2.style.position = "absolute", s2.style.top = "0", s2.style.left = "0", s2.style.width = "100%", s2.style.height = "100%", tY.style.position = "absolute", tY.style.top = "0", tY.style.left = "0", tY.style.width = "100%", tY.style
		.display = "flex", tY.style.backgroundColor = b9.mf, tZ.style.position = "absolute", tZ.style.left = "0", tZ.style.width = "100%", b8.pd.s8(tZ), ta.style.height = ta.style.maxHeight = "100%", rf.style.position = "absolute", rf.style.width =
		"100%", rf.style.backgroundColor = b9.mf,
		function() {
			for (var aA = 0; aA < tW.length; aA++) tW[aA].button.style.height = "100%", tW[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tW.length; aA++) ta.appendChild(tW[aA].button);
	tY.appendChild(function() {
		var tf = document.createElement("h1");
		return tf.textContent = title, tf.style.margin = "auto", tf.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", tf.style.webkitTextStroke = "0.02em brown", tf.style.fontFamily = "Arial Black, Trebuchet MS", tf
	}()), tZ.appendChild(ta), !1 !== tX && (s2.appendChild(rf), s2.appendChild(tY), s2.appendChild(tZ))
}

function qb(tm, tn, to, tp) {
	var self;
	this.qc = document.createElement("span"), (self = this).qc.textContent = tm, self.qc.style.color = b9.mj, self.qc.style.position = "absolute", self.qc.style.font = "inherit", tp ? self.qc.style.bottom = "0.06em" : self.qc.style.top = "0.12em",
		to ? self.qc.style.left = "0.2em" : self.qc.style.right = "0.2em", self.qc.style.fontSize = "0.6em", self.qc.style.pointerEvents = "none", self.qc.style.whiteSpace = "pre", tn.style.position = "relative", tn.style.overflow = "hidden", tn
		.appendChild(self.qc)
}

function sA(tm, tn, tq, tr, ts) {
	var self;
	this.qc = document.createElement("span"), this.resize = function() {
			this.qc.style.fontSize = ((tr - tq) * tn.offsetHeight).toFixed(1) + "px"
		}, (self = this).qc.textContent = tm, self.qc.style.color = b9.mj, self.qc.style.font = "inherit", self.qc.style.margin = "0.1em 0.6em", self.qc.style.pointerEvents = "none", ts && (self.qc.style.fontWeight = "bold"), self.qc.style
		.whiteSpace = "nowrap", self.qc.style.display = "block", tn.appendChild(self.qc)
}

function tt(tu, tv, tw, tx) {
	var ty = document.createElement("textarea"),
		tz = (this.e = ty, !0);

	function u5() {
		ty.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tv && b8.pd.po(ty, 5)
		}, this.u0 = function(u1) {
			ty.value = u1
		}, this.u2 = function() {
			return ty.value
		}, this.u3 = function() {
			ty.select()
		}, this.clear = function() {
			ty.value = ""
		}, this.u4 = function() {
			tz && navigator.clipboard ? (ty.select(), navigator.clipboard.writeText(ty.value).catch(function() {
				tz = !1, u5()
			})) : u5()
		}, ty.setAttribute("id", "textArea" + s.x.rZ++), ty.setAttribute("autocomplete", "off"), tu && ty.setAttribute("placeholder", tu), ty.style.top = "0", ty.style.left = "0", ty.style.width = "100%", ty.style.height = "100%", ty.style
		.userSelect = "none", ty.style.outline = "none", ty.style.resize = "none", ty.style.border = "none", ty.style.color = b9.mj, ty.style.backgroundColor = b9.mc, tx ? (ty.style.fontSize = "1em", ty.rows = 6, ty.style.padding = "0.25em") : (ty
			.style.padding = "0.45em", ty.style.fontSize = "1.2em"), tw && ty.addEventListener("input", function(e) {
			tw(e)
		}), ty.addEventListener("focus", function() {
			h.ra++
		}), ty.addEventListener("blur", function() {
			h.ra--
		})
}

function dC() {
	this.pv = new u6, this.eA = new u7, this.r5 = new u8, this.x = new u9, this.dU = function() {
		this.eA.dU(), (new uA).dU()
	}
}

function u7() {
	function uB(aA, type, uI, dk) {
		bh.eA.data.push({
			dy: aA,
			type: type || 0,
			value: uI || 0,
			uI: uI || 0,
			dk: dk || 0
		})
	}

	function uC(aA, type, uI, dk) {
		bh.eA.data.push({
			dy: aA,
			type: type,
			value: uI || "",
			uI: uI || "",
			dk: dk || 0
		})
	}

	function uD(mR) {
		for (var aA = bh.eA.data.length; aA < mR; aA++) bh.eA.data.push(null)
	}
	this.data = [], this.dU = function() {
		uB(0, 1, 0, 5), uB(1, 1, 1), uB(2, 0), uC(3, 2), uB(4, 1), uC(5, 2, "Trebuchet MS", 1), uB(6, 0), uB(7, 0, 0), uB(8, 0), uB(9, 1, 1), uB(10, 1), uB(11, 1, 1), uC(12, 2, navigator.language), uB(13), uB(14), uD(100), uC(100, 2), uC(101, 2),
			uC(102, 2), uC(103, 2), uC(104, 2), uC(105, 2), uC(106, 2), uB(107), uB(108), uB(109), uC(110, 2), uB(111), uB(112), uB(113), uC(114, 2), uB(115), uC(116, 2), uB(117, 1), uC(118, 2, "", 2), uB(119, 1, 0, 1), uC(120, 2), uB(121, 1, ~~(
				262144 * Math.random())), uC(122, 2, "Player " + Math.floor(1e3 * Math.random())), uB(123), uC(124), uB(125, 1), uC(126, 2), uB(127, 0, 1), uB(128), uB(129), uB(130), uB(131), uB(132), uC(133, 2), uB(134, 0, 5), uC(135, 2), uC(
				136, 2), uB(137), uB(138), uB(139), uB(140), uB(141), uB(142), uB(143), uB(144), uC(145, 2), uB(146), uB(147), uC(148, 2), uB(149), uB(150, 0, 1), uC(151, 2), uB(152, 0, 5), uB(153, 1), uB(154, 1), uC(155, 2), uC(156, 2), uB(157),
			uB(158), uB(159), uB(160), uD(180), uB(180, 0), uB(181, 0)
	}, this.r6 = function(dy, value) {
		this.data[dy].value = value
	}, this.uE = function(dy, value) {
		this.r6(dy, value), bh.pv.save(dy, String(value)), bh.pv.save(dy, String(this.data[dy].dk), !0)
	}, this.uF = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pv.save(aA, String(this.data[aA].value)), bh.pv.save(aA, String(this.data[aA].dk), !0))
	}, this.uG = function(dy) {
		return Number(this.data[dy].value)
	}, this.uH = function(dy) {
		return String(this.data[dy].value)
	}
}

function u6() {
	this.uJ = function(dy, dk) {
		return Number(this.uK(dy, dk))
	}, this.uK = function(dy, dk) {
		var f5 = null;
		return 0 === z.id ? z.uL && (f5 = z.uL.getItem((dk ? "v" : "d") + dy)) : 1 === z.id ? f5 = z.uM.loadString((dk ? 1e3 : 2e3) + dy) : 2 === z.id && (f5 = z.uN[(dk ? "v" : "d") + dy]), f5 && 0 !== f5.length ? f5 : null
	}, this.uO = function(ed, uP) {
		var g = [],
			uQ = uP ? "e" : "l";
		if (0 === z.id) {
			if (z.uL)
				for (aA = 0; aA < ed; aA++) g.push(z.uL.getItem(uQ + aA))
		} else if (1 === z.id)
			for (var uR = uP ? 5e3 : 3e3, aA = 0; aA < ed; aA++) g.push(z.uM.loadString(uR + aA));
		else if (2 === z.id)
			for (aA = 0; aA < ed; aA++) g.push(z.uN[uQ + aA]);
		return g
	}, this.save = function(dy, value, dk) {
		var uS = (dk ? "v" : "d") + dy;
		if (0 === z.id) {
			if (z.uL && bh.eA.data[140].value) try {
				z.uL.setItem(uS, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uM.saveString((dk ? 1e3 : 2e3) + dy, value) : 2 === z.id && (z.uN[uS] = value, z.uT.postMessage(uS + " " + value))
	}, this.uU = function(g, uP) {
		var ed = g.length,
			uQ = uP ? "e" : "l";
		if (0 === z.id) {
			if (z.uL && bh.eA.data[140].value) try {
				for (aA = 0; aA < ed; aA++) z.uL.setItem(uQ + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uR = uP ? 5e3 : 3e3, aA = 0; aA < ed; aA++) z.uM.saveString(uR + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < ed; aA++) z.uN[uQ + aA] = g[aA], z.uT.postMessage(uQ + aA + " " + g[aA])
	}
}

function uA() {
	this.dU = function() {
		! function() {
			var data = bh.eA.data;
			0 === data[2].dk && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uI = 1);
			0 === data[100].dk && (data[100].value = data[100].uI = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f5, data = bh.eA.data,
			ed = data.length;
		for (aA = 0; aA < ed; aA++) data[aA] && data[aA].dk === bh.pv.uJ(aA, !0) && (f5 = bh.pv.uK(aA), data[aA].value = null === f5 ? data[aA].uI : 2 === data[aA].type ? f5 : Number(f5))
	}
}

function u9() {
	function ua(g) {
		if (0 === g.length) bh.r5.r6(116, "");
		else {
			for (var ud = g[0], aA = 1; aA < g.length; aA++) ud += ";" + g[aA];
			bh.r5.r6(116, ud)
		}
	}
	this.uX = function() {
		bh.eA.data[110].value.length && (bh.eA.data[106].value = bh.eA.data[110], bh.r5.r6(110, ""), this.uY())
	}, this.uY = function() {
		var g = bh.eA.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.eA.data[106].value), g.unshift(bh.eA.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uZ = [], aA = 0; aA < g.length; aA += 2) uZ.push(g[aA]);
		ua(g), bh.eA.data[117].value = 0, bh.eA.data[117].tU = uZ
	}, this.ub = function(dy) {
		bh.eA.data[117].tU.splice(dy, 1), bh.eA.data[117].value = Math.min(dy, bh.eA.data[117].tU.length - 1);
		var g = bh.eA.data[116].value.split(";");
		g.splice(2 * dy, 2), ua(g)
	}, this.uc = function(dy) {
		var g = bh.eA.data[116].value.split(";");
		return {
			rq: g[2 * dy],
			password: g[2 * dy + 1]
		}
	}, this.ue = function() {
		var f5 = bJ.pB(bh.eA.data[121].value, -1, 262143);
		return f5 = -1 === f5 ? ~~(262144 * Math.random()) : f5
	}
}

function u8() {
	this.r6 = function(dy, value) {
		bh.eA.data[dy].value !== value && (bh.eA.uE(dy, value), 0 === dy ? (s.w(), b5.dU(), s.t(2)) : 1 === dy ? h.df(1) : 2 === dy ? h.df(0) : 5 === dy && (b8.pd.uf(), h.df(0)))
	}, this.ug = function() {
		for (var data = bh.eA.data, aA = 0; aA < 100; aA++) data[aA] && bh.eA.uE(aA, data[aA].uI);
		b8.pd.uf(), h.df(1), b5.dU()
	}, this.uh = function() {
		for (var data = bh.eA.data, aA = 0; aA < data.length; aA++) data[aA] && bh.eA.r6(aA, data[aA].uI)
	}, this.ui = function() {
		for (var ex = bh.eA, aA = 128; aA < 135; aA++) ex.uE(aA, ex.data[aA].uI)
	}, this.uj = function(data) {
		bh.r5.r6(109, data.rr), bh.r5.r6(107, data.uk), bh.r5.r6(108, data.ul), bh.r5.r6(112, data.um), bh.r5.r6(111, data.un), bh.r5.r6(113, data.uo), bh.r5.r6(135, data.up), bh.r5.r6(136, data.uq), bh.r5.r6(137, data.ur), bh.r5.r6(138, data
			.us), bh.r5.r6(139, data.ut), bh.r5.r6(141, data.uu), bh.r5.r6(142, data.uv), bh.r5.r6(143, data.uw), bh.r5.r6(144, data.ux)
	}
}

function bz() {
	this.rv = new uy, this.uz = new v0, this.v1 = new v2, this.dU = function() {
		this.rv.dU()
	}
}

function v0() {
	this.v3 = function(size) {
		for (var v4 = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v4.oe(16)));
		return g.join("")
	}, this.v5 = function(pK) {
		return 20 < (pK = pK.trim()).length ? pK.substring(0, 20) : pK
	}
}

function uy() {
	var v6 = new Uint8Array(78);
	this.dU = function() {
		var aA;
		for (v6[50] = 37, aA = 0; aA < 10; aA++) v6[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) v6[aA + 20] = aA + 11, v6[aA + 52] = aA + 38
	}, this.v7 = function(pK) {
		return pK.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v8 = function(pK, size) {
		if ((pK = this.v7(pK)).length > size) return pK.substring(0, size);
		for (; pK.length < size;) pK = "-" + pK;
		return pK
	}, this.v9 = function(pK) {
		for (var vA = v6, ed = pK.length, g = new Uint8Array(ed), aA = 0; aA < ed; aA++) g[aA] = vA[pK.charCodeAt(aA) - 45];
		return g
	}, this.vB = function(vC) {
		bB.a6(6 * vC.length), this.vD(vC), bF.dU(bB.aB)
	}, this.vD = function(vC) {
		for (var ed = vC.length, i = bB, aA = 0; aA < ed; aA++) i.a7(6, vC[aA])
	}, this.vE = function(pK) {
		this.vD(this.v9(pK))
	}, this.vF = function(pK, size) {
		this.vD(this.v9(this.v8(pK, size)))
	}, this.vG = function(pK, size) {
		for (var g = this.v9(this.v8(pK, size)), f5 = 0, mL = 1, aA = g.length - 1; 0 <= aA; aA--) f5 += mL * g[aA], mL *= 64;
		return f5
	}
}

function vH() {
	var i, j, vI;

	function vi(h2, eg, vg, vN, vb) {
		eg = vh(h2, eg + 1 + 2 * vN & 3);
		! function(h2, vj) {
			return 1 < Math.abs(h2 % i - vj % i) || 1 < Math.abs(vm(h2) - vm(vj))
		}(h2, eg) && 0 === vb[eg << 2] && (vb[eg << 2] = vg)
	}

	function vm(gA) {
		return Math.floor((gA + .5) / i) % j
	}

	function vh(gA, eg) {
		return gA + vI[eg]
	}
	this.vJ = function(pK) {
		var aA, vK, ed, vL, v4 = bF;
		for (bE.rv.vB(bE.rv.v9(pK)), bQ.vO.vP[bQ.eJ].i = bQ.eo = i = v4.oe(12), bQ.vO.vP[bQ.eJ].j = bQ.ep = j = v4.oe(12), vI = [-i, -1, i, 1], bQ.vY = document.createElement("canvas"), bQ.vY.width = bQ.eo, bQ.vY.height = bQ.ep, bQ.vU = bQ.vY
			.getContext("2d", {
				alpha: !1
			}), bQ.vV = bQ.vZ = null, bQ.vV = bQ.vU.getImageData(0, 0, bQ.eo, bQ.ep), bQ.vZ = bQ.vV.data, b8.pm.va(bQ.vZ), ed = v4.oe(12), vK = v4.oe(5), vL = vR(i * j - 1), aA = 0; aA < ed; aA++) ! function(ka, gA, vM, vN) {
			var aA, eg, v4 = bF,
				vb = bQ.vZ,
				vc = gA,
				vd = gA,
				ve = 0,
				vf = 1 + vM,
				vg = 2 - vM;
			for (vb[gA << 2] = vf, aA = 0; aA < ka; aA++) eg = v4.oe(2), gA = vh(gA, eg), vb[gA << 2] === vf ? ve % 2 == 1 && vi(vd, ve + 2 * vN + 3, vg, vN, vb) : vb[gA << 2] = vf, vi(gA, eg, vg, vN, vb), vi(vd, eg, vg, vN, vb), vd = gA,
				ve = eg;
			vh(gA, 0) === vc ? (vi(gA, 0, vg, vN, vb), vi(vc, 0, vg, vN, vb)) : vh(gA, 1) === vc && (vi(gA, 0, vg, vN, vb), vi(vc, 2, vg, vN, vb));
			0 === ka && (vi(vc, 0, vg, vN, vb), vi(vc, 2, vg, vN, vb))
		}(v4.oe(vK), v4.oe(vL), 1 === v4.oe(1), 1 === v4.oe(1));
		var ek, em, hQ, vn, vo, vp, vb = bQ.vZ,
			vq = !0,
			vr = bQ.vO.vP[bQ.eJ].vr,
			vs = bQ.vO.vP[bQ.eJ].vs;
		for (em = 0; em < j; em++)
			for (vn = !0, vo = vq, ek = vp = 0; ek < i; ek++) hQ = 4 * em * i + 4 * ek, vp <= ek && 0 < vb[hQ] && (vo = 2 === vb[hQ], vn) && (vn = !1, vo !== vq) ? (vq = vo, vp = ek + 1, ek = -1) : (vo ? (vb[hQ] = vs[0], vb[1 + hQ] = vs[1], vb[
				2 + hQ] = vs[2]) : (vb[hQ] = vr[0], vb[1 + hQ] = vr[1], vb[2 + hQ] = vr[2]), vb[3 + hQ] = 255);
		bQ.vU.putImageData(bQ.vV, 0, 0), bQ.vW = !0, bQ.vX.dU(), bd.dc = !0
	}
}

function v2() {
	this.vJ = function(vt) {
		for (var v4 = bF, size = v4.oe(vt), vu = 7 + 9 * v4.oe(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(v4.oe(vu)));
		return g.join("")
	}
}

function c4() {
	var rN, rO, vv, vw, vx, vy, vz, w0, w1, w2;

	function w4() {
		var w7 = aC.w7;
		for (w1 = w7; w1 < aC.ea; w1++) w3();
		for (w1 = aC.gy ? aC.js : 0; w1 < w7; w1++) {
			if (!w8()) {
				for (var ex = aC.wC = w1; ex < w7; ex++) w1 = ex, w3();
				return
			}
			wB(vy + rN * vx + bJ.dj(vx, 2), vz + rO * vx + bJ.dj(vx, 2))
		}
	}

	function we(player) {
		for (var iR = af.iR, iT = af.iT, iS = af.iS, iU = af.iU, em = iT[player]; em <= iU[player]; em++)
			for (var ek = iR[player]; ek <= iS[player]; ek++) {
				var eH = ab.wf(ek, em);
				ab.gC(eH) && (ab.j5(eH) ? ab.g7(eH, player) : ab.wg(eH, player))
			}
	}

	function wd(g, sC, sD) {
		var di = g[sC];
		g[sC] = g[sD], g[sD] = di
	}

	function w8() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rN = bJ.dj(vv * aw.random(), aw.value(100)), rO = bJ.dj(vw * aw.random(), aw.value(100)), wl()) return 1;
			return
		}() || function() {
			var hy, i1, ew, wA, ex, w9;
			for (hy = bJ.dj(vv * aw.random(), aw.value(100)), i1 = bJ.dj(vw * aw.random(), aw.value(100)), ew = 40; 1 <= ew; ew--)
				for (wA = vw - ew; 0 <= wA; wA -= 40)
					for (rO = (wA + i1) % vw, ex = 40; 1 <= ex; ex--)
						for (w9 = vv - ex; 0 <= w9; w9 -= 40)
							if (rN = (w9 + hy) % vv, wl()) return 1;
			return
		}()
	}

	function wl() {
		for (var gA, wn, gap = bJ.dj(vx - w0, 2), wo = vz + rO * vx + gap, wp = vy + rN * vx + gap, wm = wo + w0 - 1; wo <= wm; wm--)
			for (wn = wp + w0 - 1; wp <= wn; wn--)
				if (gA = ab.wf(wn, wm), !ab.eY(gA) || ab.j5(gA)) return;
		return 1
	}

	function wB(w9, wA) {
		w3(), wq(w9 - 2, wA - 2)
	}

	function w3() {
		af.li[w1] = 0, af.gQ[w1] = af.wb[w1] = 0, af.g4[w1] = [], af.gI[w1] = [], af.gJ[w1] = [], af.f3[w1] = [], af.iR[w1] = af.iT[w1] = af.iS[w1] = af.iU[w1] = 0
	}

	function wq(w9, wA) {
		var gA, aA, wr, ws;
		for (af.li[w1] = 1, af.iR[w1] = w9 + 10, af.iT[w1] = wA + 10, af.iU[w1] = af.iS[w1] = 0, wr = w9; wr < w9 + 4; wr++)
			for (ws = wA; ws < wA + 4; ws++)(w9 < wr && wr < w9 + 3 || wA < ws && ws < wA + 3) && (gA = ab.wf(wr, ws), ab.eY(gA)) && (af.iR[w1] = Math.min(wr, af.iR[w1]), af.iS[w1] = Math.max(wr, af.iS[w1]), af.iT[w1] = Math.min(ws, af.iT[w1]), af
				.iU[w1] = Math.max(ws, af.iU[w1]), w2[af.gQ[w1]] = gA, af.gQ[w1]++, ab.wg(gA, w1));
		for (af.wb[w1] = af.gQ[w1], aA = af.gQ[w1] - 1; 0 <= aA; aA--) ab.wt(w2[aA], w1) ? (ab.g7(w2[aA], w1), af.gI[w1].push(w2[aA])) : ab.wu(w2[aA]) ? (ab.g7(w2[aA], w1), af.gJ[w1].push(w2[aA])) : ab.wv(w2[aA]) && (ab.g7(w2[aA], w1), af.f3[w1]
			.push(w2[aA]))
	}

	function wk(w9, wA) {
		for (var gA, wn, wm = wA; wA - 6 < wm; wm--)
			for (wn = w9; w9 - 6 < wn; wn--)
				if (gA = ab.wf(wn, wm), ab.j5(gA)) return;
		return 1
	}
	this.dU = function() {
		if (w2 = new Array(12), w0 = 6, vx = 10, vv = bJ.dj(bQ.eo, vx), vw = bJ.dj(bQ.ep, vx), vy = bJ.dj(bQ.eo - vx * vv, 2), vz = bJ.dj(bQ.ep - vx * vw, 2), aC.gy)
			for (var aA = 0; aA < aC.js; aA++) w1 = aA, w3(), af.li[w1] = 1;
		(0 === aC.data.spawningType ? w4 : 1 === aC.data.spawningType ? (w4(), function() {
			var wD = aC.wE;
			aC.wF || wD++;
			if (!(wD < 3)) {
				for (var data = aC.data, j9 = (aC.gy ? aC.js : 0) + data.teamPlayerCount[0], mR = aC.wC, wG = new Uint32Array(wD), wH = new Uint32Array(wD), wI = new Uint16Array(wD), wJ = new Uint16Array(wD), eb = be.eb, iR = af.iR, iT =
						af.iT, iS = af.iS, iU = af.iU, fH = bM.fH, fI = bM.fI, aA = j9; aA < mR; aA++) fH[aA] = iR[aA] + iS[aA] >> 1, fI[aA] = iT[aA] + iU[aA] >> 1;
				for (aA = j9; aA < mR; aA++) {
					var id = eb[aA];
					wG[id] += fH[aA], wH[id] += fI[aA]
				}
				var kE = be.kE;
				for (aA = 1; aA < wD; aA++) {
					var g5 = Math.max(data.teamPlayerCount[kE[aA]], 1);
					wI[aA] = bJ.dj(wG[aA], g5), wJ[aA] = bJ.dj(wH[aA], g5)
				}
				var wK = be.wK,
					wL = be.wL,
					wM = be.wM,
					fG = bM.fG;
				for (aA = 0; aA < 512; aA++) fG[aA] = aA;
				for (var dx = 0; dx < 2 + (4 <= wD); dx++)
					for (aA = j9; aA < mR; aA++) {
						for (var h2 = aA, wN = fG[h2], wO = 1, et = bJ.wP(fH[wN] - wI[1], fI[wN] - wJ[1]), ew = 2; ew < wD; ew++) {
							var wQ = bJ.wP(fH[wN] - wI[ew], fI[wN] - wJ[ew]);
							wQ < et && (et = wQ, wO = ew)
						}
						var wR = eb[h2];
						if (wO !== wR) {
							if (2 === dx && 4 <= wD) {
								var wS = Math.max((wO + 1) % wD, 1),
									wT = bJ.wP(fH[wN] - wI[wS], fI[wN] - wJ[wS]);
								for (ew = 1; ew < wD; ew++) wQ = bJ.wP(fH[wN] - wI[ew], fI[wN] - wJ[ew]), et < wQ && wQ < wT && (wT = wQ, wS = ew);
								wS !== wR && bJ.wP(wI[wR] - wI[wS], wJ[wR] - wJ[wS]) < bJ.wP(wI[wR] - wI[wO], wJ[wR] - wJ[wO]) && (wO = wS)
							}
							var wU = kE[wO],
								wV = wL[wU] + (aC.gy ? 0 : wM[wU]),
								vj = wK[wV],
								wW = fG[vj],
								wX = wL[wU + 1];
							et = bJ.wP(fH[wW] - wI[wR], fI[wW] - wJ[wR]);
							for (var ey = wV + 1; ey < wX; ey++) {
								var wY = wK[ey],
									wZ = fG[wY];
								(wQ = bJ.wP(fH[wZ] - wI[wR], fI[wZ] - wJ[wR])) < et && (et = wQ, vj = wY)
							}
							vj < j9 || mR <= vj || (wW = fG[vj], wG[wR] += fH[wW] - fH[wN], wH[wR] += fI[wW] - fI[wN], wG[wO] += fH[wN] - fH[wW], wH[wO] += fI[wN] - fI[wW], g5 = data.teamPlayerCount[kE[wR]], wI[wR] = bJ.dj(wG[wR], g5),
								wJ[wR] = bJ.dj(wH[wR], g5), g5 = data.teamPlayerCount[wU], wI[wO] = bJ.dj(wG[wO], g5), wJ[wO] = bJ.dj(wH[wO], g5), fG[h2] = wW, fG[vj] = wN)
						}
					}! function() {
						for (var fG = bM.fG, iR = af.iR, iT = af.iT, iS = af.iS, iU = af.iU, gQ = af.gQ, wb = af.wb, gI = af.gI, gJ = af.gJ, f3 = af.f3, aA = 0; aA < 512; aA++) {
							var wc = fG[aA];
							if (wc !== aA) {
								wd(iR, aA, wc), wd(iT, aA, wc), wd(iS, aA, wc), wd(iU, aA, wc), wd(gQ, aA, wc), wd(wb, aA, wc), wd(gI, aA, wc), wd(gJ, aA, wc), wd(f3, aA, wc), we(aA), we(wc), fG[aA] = aA;
								for (var j = wc, gB = fG[j]; gB !== aA;) gB = fG[j = gB];
								fG[j] = wc
							}
						}
					}()
			}
		}) : function() {
			var w7 = aC.w7;
			for (w1 = w7; w1 < aC.ea; w1++) w3();
			for (w1 = aC.gy ? aC.js : 0; w1 < w7; w1++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w9 = spawningData[2 * w1] + 1,
							spawningData = spawningData[2 * w1 + 1] + 1;
						if (3 < w9 && w9 < bQ.eo - 5 && 3 < spawningData && spawningData < bQ.ep - 5 && ab.eY(ab.wf(w9, spawningData)) && wk(w9 + 3, spawningData + 3)) return wB(w9 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w8()) {
						for (var ex = aC.wC = w1; ex < w7; ex++) w1 = ex, w3();
						return
					}
					var w9 = vy + rN * vx + bJ.dj(vx, 2),
						wA = vz + rO * vx + bJ.dj(vx, 2);
					wB(w9, wA)
				}
		})(), bb.le[7] = af.gQ[aC.eN]
	}, this.ww = function(j3, wx, wy) {
		var aA, w9, wA, gA, rN, rO;
		for (w1 = j3, aA = 0; aA < 20; aA++)
			for (w9 = wx + aA; wx - aA <= w9; w9--)
				for (wA = wy + aA; wy - aA <= wA; wA--)
					if ((w9 === wx + aA || w9 === wx - aA || wA === wy + aA || wA === wy - aA) && 3 < w9 && w9 < bQ.eo - 5 && 3 < wA && wA < bQ.ep - 5 && ab.eY(ab.wf(w9, wA)) && wk(w9 + 3, wA + 3)) {
						if (0 < af.gQ[w1]) {
							for (rO = rN = gA = void 0, rN = af.iS[w1]; rN >= af.iR[w1]; rN--)
								for (rO = af.iU[w1]; rO >= af.iT[w1]; rO--) gA = 4 * (rO * bQ.eo + rN), ab.x0(w1, gA) && (ab.x1(gA), af.gQ[w1]--);
							w3()
						}
						return wq(w9 - 1, wA - 1), !0
					} return !1
	}, this.x2 = function(j3) {
		w1 = j3, w8() ? wB(vy + rN * vx + bJ.dj(vx, 2), vz + rO * vx + bJ.dj(vx, 2)) : w3()
	}
}

function x3() {
	aq.x4(), tl.setTransform(iE, 0, 0, iE, 0, 0), tl.imageSmoothingEnabled = iE < 3, tl.drawImage(bQ.vY, aR.x5(), aR.x6()), bN.x7.tk(), tl.drawImage(x8, aR.x5(), aR.x6()), aq.tk(), bL.tk(), ae.tk(), (aC.mC ? (bf.tk(), bA) : (aM.tk(), aU.tk(), aQ
	.tk(), bA.tk(), au.tk(), aV.tk(), aR.tk(), aP.tk(), bf.tk(), aT.tk(), aO.tk(), aL.tk(), aK.tk(), aW.tk(), bc.tk(), at)).tk(), s.tk()
}

function x9(xA, i, j) {
	xA.clearRect(0, 0, i, j), xA.fillStyle = b9.mg, xA.fillRect(0, 0, i, j)
}

function xB(xA, i, j, xC) {
	xA.fillStyle = b9.mj, xA.fillRect(0, 0, i, xC), xA.fillRect(0, 0, xC, j), xA.fillRect(i - xC, 0, xC, j), xA.fillRect(0, j - xC, i, xC)
}

function xD(xA, ek, em, hU, xC, gA, xE) {
	xA.fillStyle = b9.mj;
	var gA = Math.floor(hU * gA),
		s0 = (gA += (gA - xC) % 2, Math.floor((gA - xC) / 2)),
		hU = Math.floor((hU - gA) / 2);
	xA.fillRect(ek + hU, em + hU + s0, gA, xC), xE && xA.fillRect(ek + hU + s0, em + hU, xC, gA)
}

function xG() {
	this.dU = function() {
		8 === aC.k9 && aM.xH()
	}, this.xI = function(xJ) {
		var elo = aC.data.elo,
			hm = (elo[xJ] - elo[1 - xJ]) / 10,
			hm = 8 / (1 + Math.pow(2, hm / 32)),
			hm = Math.floor(10 * hm + .5),
			xL = this.xM(elo[xJ] + (1 + aC.xN) * hm + 1),
			elo = this.xM(elo[1 - xJ] - hm);
		0 === xJ ? aM.xP(xL, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xP(elo, xL, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xM = function(elo) {
		return 16e3 === (elo = bJ.pB(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qt = new xQ, this.vb = new xR
}

function xR() {
	this.hK = !1;
	this.xV = [], this.xW = 100;
	var m9, mA, gap, hU, xS, xU, xX = 0,
		xY = new Array(9),
		xZ = [],
		xa = [],
		xb = 0,
		xc = 0,
		xd = 0,
		xe = 0;

	function xq() {
		xY.sort(function(ew, ex) {
			return ex.jx - ew.jx
		});
		for (var pK = "" + xY[0].oG, aA = 1; aA < 9; aA++) pK += "," + xY[aA].oG;
		for (aA = 0; aA < 9; aA++) pK += "," + xY[aA].jx;
		bh.eA.uE(120, pK)
	}
	this.dU = function() {
		for (var xf = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xf.length; aA++) {
			var color = 6 === xf[aA] ? b9.n9 : b9.mh;
			this.xV.push(b8.canvas.xg(aa.get(3), xf[aA], color))
		}
		for (aA = 0; aA < ai.qt.xh; aA++) xa.push(ai.qt.xi - ai.qt.xh + aA);
		for (aA = 0; aA < ai.qt.xj; aA++) xa.push(ai.qt.xk + aA);
		var xl = ai.qt.xm(bI.xl);
		for (aA = 0; aA < xl.length; aA++) xa.push(xl[aA]);
		! function() {
			var aA, g = bh.eA.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xY[aA] = {
					oG: 1015 + aA,
					jx: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f5 = parseInt(g[aA]),
						ey = (f5 = 0 <= f5 && f5 < ai.qt.xi ? f5 : 0, parseInt(g[aA + 9]));
					ey = 0 <= ey && ey < 1e3 ? ey : 0, xY[aA] = {
						oG: f5,
						jx: ey
					}
				}
		}()
	}, this.show = function(kv, kw, xr) {
		var aA;
		if (xb = kv, xc = kw, xX = xr || 0, this.hK = !0, xZ = [], 0 === xX)
			for (aA = 0; aA < 9; aA++) xZ.push(xY[aA].oG);
		else {
			var ex = 49 * xX,
				xr = ex - 49;
			for (xr >= xa.length && (xX = 1, xr = 0, ex = 49), aA = xr = (ex = Math.min(ex, xa.length)) - 49; aA < ex; aA++) xZ.push(xa[aA])
		}
		xZ.push(1024);
		xr = xZ.length, hU = Math.floor((z.a0.r1() ? .075 : .0468) * h.pf), gap = Math.floor(hU / 3), (xd = 10 * (xS = hU + gap)) > h.i && (xd = h.i, gap = (xS = xd / 10) - (hU = 3 * xS / 4)), xU = bJ.dj(xr, 10) + !!(xr % 10), (xe = xU * xS) > h
			.j && (xe = h.j, gap = (xS = xe / xU) - (hU = 3 * xS / 4)), xr = .5 * gap;
		m9 = Math.min(Math.max(kv - .5 * xd + xr, xr), h.i - xd + xr), mA = Math.min(Math.max(kw - .5 * xe + xr, xr), h.j - xe + xr)
	}, this.gq = function(kv, kw, player) {
		if (!this.hK) return !1;
		if (this.xt(kv, kw)) {
			kv = bJ.pB(bJ.dj(kv - m9 + .5 * gap, xS), 0, 9);
			if ((kv += 10 * bJ.pB(bJ.dj(kw - mA + .5 * gap, xS), 0, 9)) >= xZ.length) return aK.qu(), !0;
			kw = xZ[kv];
			if (1024 === kw) return this.show(xb, xc, xX + 1), !0;
			! function(oG) {
				for (var aA = 0; aA < 9; aA++) xY[aA].jx = Math.floor(.99 * xY[aA].jx);
				for (aA = 0; aA < 9; aA++)
					if (oG === xY[aA].oG) return xY[aA].jx = Math.min(xY[aA].jx + 30, 999), xq();
				xY.splice(5, 0, {
					oG: oG,
					jx: Math.max(xY[4].jx, 30)
				}), xY.pop(), xq()
			}(kw), player === aC.eN ? b6.gz.oF(kw) : b6.fy.oT(kw, player)
		}
		return aK.qu(), !0
	}, this.xt = function(kv, kw) {
		return !(kv < m9 - .5 * gap || kw < mA - .5 * gap || m9 + xd - .5 * gap <= kv || mA + xe - .5 * gap <= kw)
	}, this.tk = function() {
		tl.fillStyle = b9.mg, tl.fillRect(m9 - .5 * gap, mA - .5 * gap, xd, xe);
		for (var hQ = .5 * ba.xu, ed = (tl.lineWidth = ba.xu, tl.strokeStyle = tl.fillStyle = b9.mj, tl.strokeRect(m9 - .5 * gap + hQ, mA - .5 * gap + hQ, xd - 2 * hQ, xe - 2 * hQ), tl.imageSmoothingEnabled = !0, xZ.length), aA = 0; aA <
			ed; aA++) this.xv(xZ[aA], tl, m9 + aA % 10 * xS, mA + bJ.dj(aA, 10) * xS, hU);
		tl.imageSmoothingEnabled = !1
	}, this.xv = function(oG, ha, ek, em, hU) {
		var eH;
		oG >= 1024 - ai.qt.xh ? (eH = hU / this.xW, ha.setTransform(eH, 0, 0, eH, ek, em), ha.drawImage(this.xV[oG - 1024 + ai.qt.xh], 0, 0), ha.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pd.textAlign(ha, 1), b8.pd.textBaseline(ha, 1), ha.font = b8.pd
			.rS(0, .89 * hU), ha.fillText(ai.qt.xw(oG), ek + .5 * hU, em + (.35 - b8.pd.xx + .56) * hU))
	}
}

function xQ() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xh = 13, this.xj = this.emojis.length, this.xk = 676, this.xi = 1024, this.xy = this.emojis.indexOf("💀"), this.xz = this.xy + 1, this.y0 = this.emojis.indexOf("🥇"), this.y1 = this.emojis.indexOf("😊"), this.xw = function(f5) {
		return f5 < this.xk ? String.fromCharCode(55356, 56806 + bJ.dj(f5, 26), 55356, 56806 + f5 % 26) : this.emojis[Math.min(f5 - this.xk, this.xj - 1)]
	}, this.xm = function(pK) {
		for (var ed = pK.length - 2, g = [], aA = 0; aA < ed; aA++) {
			var hi = pK.charCodeAt(aA) - 56806,
				hj = pK.charCodeAt(aA + 2) - 56806;
			0 <= hi && hi < 26 && 0 <= hj && hj < 26 && (g.push(26 * hi + hj), aA += 3)
		}
		return g
	}, this.y2 = function(f5) {
		return f5 < this.xk
	}, this.y3 = function(f5) {
		return f5 >= 1024 - this.xh
	}, this.y4 = function(f5) {
		return f5 >= this.xk && f5 < this.xk + this.xz
	}
}

function by() {
	this.rv = new y5, this.uz = new y6, this.v1 = new y7, this.dU = function() {
		this.rv.dU()
	}
}

function y6() {
	this.vE = function(pK) {
		for (var ed = pK.length, i = bB, aA = 0; aA < ed; aA++) i.a7(16, pK.charCodeAt(aA))
	}
}

function y5() {
	var y8 = new Uint8Array(64);
	this.dU = function() {
		var aA;
		for (y8[0] = 45, y8[37] = 95, aA = 0; aA < 10; aA++) y8[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y8[aA + 11] = 65 + aA, y8[aA + 38] = 97 + aA
	}, this.rx = function(y9) {
		for (var v4 = bF, vC = new Uint8Array(y9), aA = 0; aA < y9; aA++) vC[aA] = v4.oe(6);
		return vC
	}, this.rw = function(vC) {
		for (var ed = vC.length, yA = y8, g = [], aA = 0; aA < ed; aA++) g.push(String.fromCharCode(yA[vC[aA]]));
		return g.join("")
	}, this.yB = function(value, yC) {
		for (var yA = y8, g = [], aA = 0; aA < yC; aA++) g.push(String.fromCharCode(yA[value >> 6 * (yC - 1 - aA) & 63]));
		return g.join("")
	}
}

function c6() {
	var yD, yE, yF;
	yD = [32, 65, 191, 913, 931], yE = [64, 127, 688, 930, 1155], yF = new Array(yD.length + 1);
	for (var aA = 0; aA < yF.length; aA++) {
		yF[aA] = 0;
		for (var ew = aA - 1; 0 <= ew; ew--) yF[aA] += yE[ew] - yD[ew]
	}

	function yL(ey) {
		for (var aA = yD.length - 1; 0 <= aA; aA--)
			if (ey >= yD[aA] && ey < yE[aA]) return aA;
		return -1
	}
	this.v5 = function(pK) {
		return 0 !== (pK = pK.trim()).indexOf("Bot ") && 0 !== pK.indexOf("[Bot] ") && function(pK, yI, yJ) {
			var ed = (pK = pK.trim()).length;
			if (ed < yI || yJ < ed) return !1;
			for (var ey, yK = 0, aA = 0; aA < ed; aA++)
				if (ey = pK.charCodeAt(aA), yK += 65 <= ey && ey <= 90 || 1040 <= ey && ey <= 1071 ? 1 : 0, -1 === yL(ey)) return !1;
			if (3 < yK && yK > Math.floor(ed / 2)) return !1;
			return !0
		}(pK, 3, 20)
	}, this.yM = function(pK) {
		for (var ed = (pK = pK.trim()).length, g = [], aA = 0; aA < ed; aA++) {
			var ey, gA = yL(ey = pK.charCodeAt(aA));
			g.push(yF[gA] + ey - yD[gA])
		}
		return g
	}, this.vJ = function(g) {
		for (var ey, ex, pK = "", ed = g.length, aA = 0; aA < ed; aA++)
			for (ex = 1; ex < yF.length; ex++)
				if (g[aA] < yF[ex]) {
					ey = yD[ex - 1] + g[aA] - yF[ex - 1], pK += String.fromCharCode(ey);
					break
				} return pK
	}, this.yN = function(pK) {
		for (var g = this.yM(pK), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yO = function(pK) {
		for (var g = new Array(Math.floor(pK.length / 3)), aA = 0; aA < pK.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pK.substring(aA, aA + 3));
		return this.vJ(g)
	}, this.yP = function(pK) {
		for (var f5, g = [pK.length], aA = 0; aA < pK.length; aA++) g[aA] = pK.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pK.length; aA++) aA === pK.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f5 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f5 + (f5 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yQ = function(pK) {
		for (var ey, result = "", aA = 0; aA < pK.length; aA++) 48 <= (ey = pK.charCodeAt(aA)) && ey < 58 ? result += String.fromCharCode(ey) : 65 <= ey && ey < 75 ? result += "0" + (ey - 65).toString() : 75 <= ey && ey < 91 ? result += (ey - 65)
			.toString() : 97 <= ey && ey < 123 && (result += (ey - 71).toString());
		return result
	}, this.yR = function(pK) {
		for (var ed = pK.length, g = [], aA = 0; aA < ed; aA++)(ey = pK.charCodeAt(aA)) < 58 ? g.push(pK[aA]) : (ey -= ey < 91 ? 65 : 71, g.push(String(bJ.dj(ey, 10))), g.push(String(ey - 10 * bJ.dj(ey, 10))));
		var ed = g.length - 2,
			ey = 0,
			vC = [];
		for (aA = 0; aA < ed; aA += 3) vC[ey++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return vC
	}, this.yS = function() {
		for (var dx, yT = "", aA = 0; aA < 6; aA++) dx = 48 + aw.random() % 36, dx += 58 <= dx ? 39 : 0, yT += String.fromCharCode(dx);
		return yT
	}
}

function y7() {
	this.yM = function(pK, vt, yU) {
		for (var yV = [], ed = pK.length, max = 0, aA = 0; aA < ed; aA++) {
			var f5 = pK.charCodeAt(aA);
			yV.push(f5), max = Math.max(max, f5)
		}
		var vu = max < 128 ? 7 : 16;
		for (yU.a7(vt, ed), yU.a7(1, +(16 == vu)), aA = 0; aA < ed; aA++) yU.a7(vu, yV[aA])
	}
}

function d4() {
	this.yW = new yX, this.result = new yY, this.h6 = new yZ, this.ya = new yb, this.yc = new yd, this.ye = new yf, this.dU = function() {
		this.result.dU()
	}
}

function yZ() {
	this.yg = function() {
		for (var ed = ak.jt, yh = ak.ju, yi = [], aA = 0; aA < ed; aA++) {
			var gA = yh[aA];
			b8.fy.yj(gA) && yi.push(gA)
		}
		return yi
	}, this.yk = function() {
		if (0 === be.kE[aC.yl]) return this.ym();
		bf.l5(aC.yl);
		for (var yi = [], ed = bM.f8[0], fG = bM.fG, aA = 0; aA < ed; aA++) {
			var gA = fG[aA];
			b8.fy.yj(gA) && yi.push(gA)
		}
		return yi
	}, this.ym = function() {
		var gA = l7[0];
		return b8.fy.yj(gA) ? [gA] : []
	}, this.yn = function(yi) {
		for (var ed = yi.length, di = 0, gQ = af.gQ, aA = 0; aA < ed; aA++) di += gQ[yi[aA]];
		return di
	}
}

function yX() {
	function yp() {
		if (2 === aC.yt) return 1;
		au.yu(), aC.yt = 2, aC.yv = aC.yw
	}

	function yr() {
		bP.yc.yx(), aW.show(1 === aC.yy, !1, 2 === aC.yy), bP.result.yx(), bP.ye.im(), bP.ya.im(), aM.yz(!0), aM.z0(247), aM.z0(956), aM.z0(957), aU.lU(!0), aV.lU(!0), au.lU(), bA.z1(), aC.gm && bd.z2.z3(), bd.dc = !0, bZ.z4(), z.a0.setState(0)
	}
	this.yo = function() {
		yp() || (aC.yq = 2, yr())
	}, this.ys = function() {
		yp() || (aC.yq = 1, yr())
	}
}

function yb() {
	this.im = function() {
		var zD;
		2 === aC.yq ? (aM.z5(0, 59), aG.mI(2700)) : aC.k9 < 7 ? (zD = be.kE[aC.yl], zD = be.zF[zD], aP.zG(L(24, [zD]), 2, 1, 12), aM.zH(0, L(25, [zD]), 40, 0, b9.mj, b9.mg, -1, !1), aG.mI(2700)) : 8 === aC.k9 ? (aC.yy ? aM.z5(aC.zA, 2) : aM.z5(
			1 - aC.eN, 3), aC.zB.xI(aC.zA), aM.zC(aC.zA), aG.m3(aC.zA, 2700, !1, 0)) : 9 === aC.k9 ? (aM.zI(), aG.mI(2700)) : (aM.zC(aC.zA), aG.m3(aC.zA, 2700, !1, 0))
	}
}

function yf() {
	function zS() {
		var sG = Math.floor(af.zT[aC.eN] / 50);
		return Math.min(sG, 400) / 100
	}

	function zK() {
		var sG = zS();
		0 !== sG && aM.zH(440, L(26, [sG.toFixed(2)]), 40, 0, b9.n1, b9.mg, -1, !1)
	}
	this.im = function() {
		var zL;
		0 === bP.result.zJ || 0 === bP.result.yi.length ? b8.fy.gp(aC.eN) && zK() : (function(zL) {
			7 !== aC.k9 && 10 !== aC.k9 || 0 !== aC.yy && aM.zH(600, L(30, [zL.toFixed(2)]), 40, 0, b9.mj, b9.mg, -1, !1)
		}(zL = function() {
			aM.zH(520, L(27), 40, 0, b9.mj, b9.mg, -1, !1);
			for (var yi = bP.result.yi, ed = yi.length, gQ = af.gQ, g = [], aA = 0; aA < ed; aA++) {
				var gA = yi[aA];
				g.push({
					gA: gA,
					di: gQ[gA]
				})
			}
			g.sort((ew, ex) => ex.di - ew.di);
			var zF = af.zU,
				di = bP.result.zV,
				sG = bP.result.zJ,
				pK = "",
				zL = 0;
			for (aA = 0; aA < ed; aA++) {
				var hI = g[aA].di * sG / (100 * di),
					zX = zF[g[aA].gA] + ": " + hI.toFixed(2) + "   ";
				g[aA].gA === aC.eN && (zL = hI), 2 < aA && 4 !== ed ? 3 === aA && (pK += "(" + L(28, [ed - 3]) + ")") : pK += zX
			}
			aM.zH(560, b8.zY.zZ(pK), 40, 0, b9.n1, b9.mg, -1, !1), zL ? aM.zH(580, L(29, [zL.toFixed(2) + " + " + zS().toFixed(2)]), 40, 0, b9.n1, b9.mg, -1, !1) : b8.fy.gp(aC.eN) && zK();
			return zL
		}()), 2 === aC.yq || 7 <= aC.k9 || function(zL) {
			var yi = bP.result.yi,
				ed = yi.length,
				za = af.za,
				gQ = af.gQ,
				zb = [];
			loop: for (var aA = 0; aA < ed; aA++) {
				var gA = yi[aA],
					zc = b8.zY.zd(za[gA]);
				if (null !== zc) {
					for (var ze = gQ[gA], ex = zb.length - 1; 0 <= ex; ex--)
						if (zc === zb[ex].name) {
							zb[ex].di += ze, zb[ex].g.push({
								gA: gA,
								di: ze
							});
							continue loop
						} zb.push({
						name: zc,
						di: ze,
						g: [{
							gA: gA,
							di: ze
						}]
					})
				}
			}
			if (0 !== zb.length) {
				zb.sort((ew, ex) => ex.di - ew.di);
				var g = zb[0].g,
					zf = (g.sort((ew, ex) => ex.di - ew.di), "[" + zb[0].name + "]"),
					zg = 512 * bP.result.zJ / 26214400,
					ka = (aM.zH(0, L(31, [zf, zg.toFixed(4)]), 40, 0, b9.mj, b9.mg, -1, !1), g.length),
					vA = zb[0].di,
					zh = 1e4 * zg;
				for (aA = 0; aA < ka; aA++)
					if (g[aA].gA === aC.eN) {
						aM.zH(600, L(32, [(zh * g[aA].di / (10 * vA)).toFixed(2)]), 40, 0, b9.mj, b9.mg, -1, !1), aM.zH(640, L(33, [(.2 * zL).toFixed(2), zf]), 40, 0, b9.mj, b9.mg, -1, !1);
						break
					} aC.gm || aM.zH(720, L(34) + bI.zi, 736, 0, b9.mj, b9.n7, -1, !1)
			}
		}(zL))
	}, this.zP = function() {
		var zQ, vc;
		aC.kB || (zQ = af, vc = aC.eN, 0 === zQ.zR[vc]) || zQ.iw[vc] < 1 || 2 * zQ.oz[vc] > 3 * (zQ.iv[vc] + zQ.iw[vc]) || zK()
	}
}

function yY() {
	this.dU = function() {
		this.zj = 0, this.yi = [], this.zV = 0, this.zJ = 0
	}, this.yx = function() {
		var rF;
		aC.kB || (rF = this, 2 === aC.yq ? rF.yi = bP.h6.yg() : aC.hS ? rF.yi = bP.h6.yk() : rF.yi = bP.h6.ym(), rF.zj = bg.zl.zm(), rF.zV = Math.max(1, bP.h6.yn(rF.yi)), b6.fy.oc(), 8 === aC.k9 ? bP.result.zJ = 0 : rF.zJ = 100 * bP.result.zj * (
			1 + aC.xN))
	}
}

function yd() {
	this.yx = function() {
		if (2 === aC.yq) aC.yy = 2;
		else {
			if (8 === aC.k9) b8.fy.jG(0) || 0 === af.li[0] ? aC.zA = 1 : b8.fy.jG(1) || 0 === af.li[1] ? aC.zA = 0 : aC.zA = +(af.gQ[1] > af.gQ[0]);
			else {
				if (aC.hS) {
					var l3 = bf.zp();
					if (aC.yl = l3, be.kE[l3]) return void(aC.yy = +(be.eb[aC.eN] === l3))
				}
				aC.zA = l7[0]
			}
			aC.yy = +(aC.zA === aC.eN)
		}
	}
}

function d9() {
	this.id = 0, this.dk = 0, this.uL = null, this.uM = null, this.uN = null, this.uT = null, this.a0 = new zq, this.dU = function() {
		var self, dk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dk = Android.getVersion()) < 12 || (self.dk = dk, self.id = 1, self.uM = Android),
			function(self) {
				var dk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uN = mwIOSdataX, self.uT = window.webkit.messageHandlers.iosCommandA, dk = self
					.uN.version, self.dk = dk ? Number(dk) : 0)
			}(this),
			function(self) {
				var uL;
				if (0 === self.id) {
					try {
						if (!(uL = window.localStorage)) return;
						uL.setItem("tls7", "1"), uL.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uL = uL
				}
			}(this)
	}
}

function zq() {
	this.zu = function() {
		bh.r5.ug(), bh.r5.uh(), ay.x.close(0, 3255), 0 === z.id ? z.uL && z.uL.clear() : 1 === z.id ? z.uM.saveString(199, "") : 2 === z.id && z.uT.postMessage("clear")
	}, this.zv = function() {
		2 === z.id ? z.uT.postMessage("showConsentForm") : 1 === z.id && z.uM.setState(7)
	}, this.zw = function() {
		this.setState(14)
	}, this.r1 = function() {
		return 1 === bh.eA.uG(2)
	}, this.zx = function() {
		bh.eA.uE(102, "")
	}, this.setState = function(zy) {
		1 === z.id && 5 <= z.dk && z.uM.setState(zy)
	}, this.a1 = function() {
		var zz;
		1 === z.id && 7 <= z.dk ? z.uM.setState(5) : ((zz = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zz.toString())
	}, this.dZ = function() {
		1 !== z.id || z.dk < 17 || z.uM.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== z.id && (1 === z.id ? z.uM.prepareAd("1688441405") : 2 === z.id && (0 === z.dk ? z.uT.postMessage("prepare ad 1770251391") : z.uT.postMessage("loadAds 1770251391")))
	}, this.eD = function(di) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.dk ? z.uT.postMessage("show ad " + di) : z.uT.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.dk < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.a00 + "' target='_blank'>" + bI
			.a00 + "</a>", !0, [new v("⬅️ " + L(35), function() {
				s.t(0)
			}, b9.nO)]))
	}
}

function dO() {
	function a03(e) {
		a0E(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(35), function() {
				s.a0F()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n6)]))
	}

	function a0D(e) {
		a0E(e), s.t(4, 5, new u(L(36), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a07(e), !0))
	}

	function a07(e) {
		var pK = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pK : 4527 === e ? "Player already in lobby" + pK : 4530 === e ? "Lobby Timeout" + pK : 4528 === e ? "Lobby Kick: Another login detected." + pK : 4540 === e ?
			"You have been kicked." + pK : "Unknown error" + pK
	}

	function a0E(e) {
		a06(e), s.x.y()
	}

	function a06(e) {
		var zy = aZ.a05();
		6 === zy ? ay.x.a0H(e) : bl.a09 ? (s.w(), bl.tE(), ay.x.close(ay.x.a0A, 3256)) : 8 === zy && aC.a0I(!0)
	}
	this.a01 = function(a02, e) {
		a02 === 1 && __fx.customLobby.isActive() && aZ.a05() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rs && 0 === a02)
			if (4211 === e) a03(e);
			else {
				if (4480 === e) return bh.r5.ui(), void s.t(4, 0, new u(L(38), L(39), !0));
				8 !== aZ.a05() && a06(), s.t(4, 0, new u(L(36), a07(e), !0))
			}
		else {
			var zy = aZ.a05();
			if (6 === zy) {
				if (4211 === e) return void a03(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a08(a02)
			} else {
				if (!bl.a09) return 8 === zy ? void(a02 !== ay.x.a0B || aC.kB || 1 !== aC.yt || aC.gm || aM.a0C(L(37, [e]))) : void 0;
				if (a02 !== ay.x.a0A) return
			}
			a0D(e)
		}
	}, this.a0G = function(e) {
		8 === aZ.a05() ? aC.kB || 1 !== aC.yt || aM.a0C(L(37, [e])) : a0D(e)
	}, this.r = function() {
		a0E(3268)
	}
}

function cy() {
	var a0J, a0K, a0L = -15e3,
		a0M = !1;

	function gq(e) {
		a0g() || (a0M = !0, a0h(e, 1), ay.x.a0i(ay.x.a0B), a0j(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0V(e) {
		a0L = bd.eC, a0h(e, 1), ay.x.a0i(ay.x.a0B), 0 < e.touches.length && (a0J = Math.floor(h.k * e.touches[0].clientX), a0K = Math.floor(h.k * e.touches[0].clientY), ar.a0V(e) || a0j(a0J, a0K))
	}

	function a0j(ek, em) {
		s.gq(ek, em), 0 === aC.yt ? aZ.gq(ek, em) : bA.a0k(ek, em) || bc.gq(ek, em) || aW.gq(ek, em) || aK.a0l(ek, em) || aO.gq(ek, em) || 0 <= aL.gq(ek, em) || au.gq(ek, em) || bH.a0m(ek, em) || aK.a0n(ek, em)
	}

	function a0R(e) {
		a0g() || (a0M = !0, a0h(e, 1), a0o(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0W(e) {
		a0L = bd.eC, a0h(e, 1), 0 < e.touches.length && (a0J = Math.floor(h.k * e.touches[0].clientX), a0K = Math.floor(h.k * e.touches[0].clientY), ar.a0W(e) || a0o(a0J, a0K))
	}

	function a0o(ek, em) {
		s.a0R(ek, em), 0 === aC.yt ? aZ.a0R(ek, em) : (bR.gj(ek, em), bc.a0R(ek, em) || (aL.a0R(ek, em), aK.hK() ? aK.a0R(ek, em) : aQ.gr ? aQ.a0R(ek) && (bd.dc = !0) : (aU.a0R(ek, em), aR.mE && aR.a0R(ek, em) && (bd.dc = !0))))
	}

	function a0T(e) {
		a0g() || (a0h(e, 1), a0p(), 0 === aC.yt ? (aZ.click(-1024, -1024), aS.qd()) : (aU.a0q(-1024, -1024), aL.a0R(-1024, -1024), aQ.a0r(), aR.mE = !1))
	}

	function a0S(e) {
		a0g() || (a0h(e, 1), a0s(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0P && (bH.a0P = !1, e.preventDefault()))
	}

	function click(e) {
		a0g() || a0h(e, 1)
	}

	function a0X(e) {
		a0L = bd.eC, a0h(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.yt ? aR.mE = !1 : ar.a0t() || (a0s(a0J, a0K, !1), bH.a0P && (bH.a0P = !1, e.preventDefault()))
	}

	function a0Y(e) {
		a0L = bd.eC, a0h(e, 1), a0s(a0J, a0K, !1), bH.a0P && (bH.a0P = !1, e.preventDefault())
	}

	function a0Z(e) {}

	function a0a(e) {}

	function a0b(e) {
		a0g() || a0h(e, 0)
	}

	function a0s(ek, em, a0u) {
		a0p(), 0 === aC.yt ? aZ.click(ek, em) : (aU.a0q(ek, em), bc.a0q(), aQ.a0r(), aR.mE = !1, aK.click(ek, em, a0u) ? bd.dc = !0 : aL.a0S(ek, em))
	}

	function a0p() {
		s.a0p()
	}

	function a0U(e) {
		var ek, em, deltaY;
		a0g() || (a0h(e, 1), ay.x.a0i(ay.x.a0B), ek = Math.floor(h.k * e.clientX), em = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0U(ek, em, deltaY), 0 === aC.yt ? aZ.a0U(ek, em, deltaY) : aU.a0U(ek, em,
			deltaY) || (aQ.a0v(ek, em) ? aQ.a0U(deltaY) && (bd.dc = !0) : aR.a0U(ek, em, deltaY)))
	}

	function a0c(e) {
		a0h(e, 0)
	}

	function a0h(e, id) {
		0 === id && s.hK() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.a05() && e.preventDefault()
	}

	function a0d(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0g() || 0 < h.ra || (e = e.code) && e.length && (bV.ey(e, 18) ? ap.a0x(3) : bV.ey(e, 22) ? ap.a0x(0) : bV.ey(e, 20) ? ap.a0x(1) : bV.ey(e, 24) ? ap.a0x(2) : bV.ey(e, 10) ? aQ.a0y(31 / 32) : bV.ey(e, 8) ? aQ.a0y(32 / 31) : bV.ey(e, 6) ? aQ
			.a0y(7 / 8) : bV.ey(e, 4) ? aQ.a0y(8 / 7) : bV.ey(e, 14) ? 0 !== aC.yt && aR.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.ey(e, 16) ? 0 !== aC.yt && aR.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.ey(e, 0) ? aC
			.yt && bR.gk(!1) : bV.ey(e, 2) ? aC.yt && bR.gk(!0) : bV.ey(e, 26) ? aC.yt && bR.hE() : bV.ey(e, 28) && aC.yt && bR.hJ())
	}

	function a0e(e) {
		if (!a0g() && !(0 < h.ra || bd.eC < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0z(1) || "Space" === code && s.a0z(0))) return bl.a09 ? bl.tK.a0z(code) ? void 0 : void("Escape" === code && bH.f6()) : void(8 !== aZ.a05() && aZ.a0z(e) ? bd.dc = !0 : "Escape" ===
				code ? bH.f6() : bV.ey(code, 18) ? ap.a10(3) : bV.ey(code, 22) ? ap.a10(0) : bV.ey(code, 20) ? ap.a10(1) : bV.ey(code, 24) ? ap.a10(2) : bV.ey(code, 12) ? bA.a11(!aC.mC) : "Space" === code && aC.yt && (aL.gn && aL.a12(), aC
					.gm) && bA.a13(!1))
		}
	}

	function a0f() {
		"hidden" === document.visibilityState ? 1 === aC.yt && (aC.gm ? bA.a14() : !aC.kB || aL.gn || aC.gy || aL.a12()) : bd.dc = !0
	}

	function a0g() {
		return a0L + 15e3 > bd.eC
	}

	function resize() {
		h.a16()
	}
	this.a0N = 0, this.a0O = "", this.a0P = !1, this.dU = function() {
		a0Q.addEventListener("mousedown", gq, {
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
	}, this.a0m = function(ek, em) {
		return !!bA.gq(ek, em) || !!(aU.gq(ek, em) || aR.gq(ek, em) || aQ.gq(ek, em) || aM.gq(ek, em))
	}, this.a15 = a0g, this.q6 = function() {
		return !a0M || 0 < a0L
	}, this.f6 = function() {
		if (!s.hK()) return 8 === aZ.a05() ? aC.mC ? void bA.a11(!1) : bc.hK ? void bc.a12() : void aL.a12() : void(7 !== aZ.a05() && 6 === aZ.a05() && aY.a17());
		s.a0z(2)
	}
}

function bu() {
	this.pd = new a18, this.pm = new a19, this.fy = new a1A, this.zY = new a1B, this.xA = new a1C, this.a1D = new a1E, this.canvas = new a1F, this.color = new a1G, this.a1H = new a1I, this.dU = function() {
		this.pd.uf()
	}
}

function a19() {
	this.va = function(g) {
		g.fill(0)
	}, this.a1J = function(g) {
		for (var ed = g.length, aA = 0; aA < ed; aA++) g[aA] = []
	}, this.a1K = function(hi, a1L) {
		for (var hj = bM.fD, aA = 0; aA < 3; aA++) hj[aA] = a1L * hi[aA];
		return hj
	}, this.a1M = function(hi, hj, a1N) {
		for (var hm = 0, aA = 0; aA < 3; aA++) hm += Math.abs(hi[aA] - hj[aA]);
		return a1N <= hm
	}, this.a1O = function(hi, a1P) {
		for (var aA = 0; aA < 3; aA++) hi[aA] = bJ.pB(hi[aA] + a1P, 0, 255);
		return hi
	}, this.a1Q = function(g, sC, sD) {
		sD = sD || g.length - 1;
		for (var a1R = 0, aA = sC = sC || 0; aA <= sD; aA++) a1R += g[aA];
		return a1R
	}, this.a1S = function(g, a1T) {
		for (var aA, a1U, ed = g.length, a1V = [], ew = ed - 1; 0 <= ew; ew--) {
			for (aA = a1U = 0; aA < ed; aA++) a1T(g[aA]) < a1T(g[a1U]) && (a1U = aA);
			ed--, a1V.push(g[a1U]), g[a1U] = g[ed], g.pop()
		}
		return a1V
	}, this.min = function(g) {
		var aA, f5, ed = g.length;
		if (0 === ed) return 0;
		for (f5 = g[0], aA = 1; aA < ed; aA++) f5 = Math.min(f5, g[aA]);
		return f5
	}, this.max = function(g) {
		var ed = g.length;
		if (0 === ed) return 0;
		for (var f5 = g[0], aA = 1; aA < ed; aA++) f5 = Math.max(f5, g[aA]);
		return f5
	}, this.a1W = function(g, f5) {
		for (var ed = g.length, g5 = 0, aA = 0; aA < ed; aA++) g5 += g[aA] > f5;
		return g5
	}, this.a1X = function(a1Y, a1Z, min) {
		for (var ed = a1Z[0], aA = ed - 1; 0 <= aA; aA--) a1Y[aA] < min && (a1Y[aA] = a1Y[--ed]);
		a1Z[0] = ed
	}, this.a1a = function(g, ed, value) {
		for (var aA = 0; aA < ed; aA++) g[aA] -= value
	}, this.a1b = function(g) {
		for (var ed = g.length, aA = 0; aA < ed; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1c = function(pK, g, a1d) {
		g.fill(0);
		for (var sG = pK.split(","), ed = Math.min(sG.length, g.length), aA = 0; aA < ed; aA++) g[aA] = Math.min(parseInt(sG[aA]), a1d)
	}, this.a1e = function(pK, g, qa) {
		g.fill("");
		for (var sG = pK.split('"'), ed = Math.min(sG.length, 2 * g.length), hQ = 0, aA = 1; aA < ed; aA += 2) g[hQ++] = sG[aA].slice(0, qa)
	}, this.a1f = function(g, g5) {
		if (0 === g5) g.fill(0);
		else {
			var a1R = this.a1Q(g),
				ed = g.length;
			if (0 === a1R) g.fill(bJ.dj(g5, ed));
			else
				for (var aA = 0; aA < ed; aA++) g[aA] = bJ.dj(g5 * g[aA], a1R);
			if (0 === (a1R = this.a1Q(g))) g[1] = g5;
			else
				for (var hQ = 0; a1R++ < g5;) g[hQ = (hQ + 1) % ed] && g[hQ]++
		}
	}, this.a1g = function(g) {
		if (!g) return 0;
		var ed = g.length;
		if (0 === ed) return 0;
		for (var f5 = g[ed - 1], aA = ed - 2; 0 <= aA; aA--)
			if (g[aA] !== f5) return aA + 2;
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
	this.xg = function(a1k, dy, a1l) {
		var hU = a1k.height,
			a1m = b8.pd.vQ(hU, hU),
			ha = b8.pd.getContext(a1m);
		return function(i, ha, a1l) {
			ha.fillStyle = a1l, ha.beginPath(), ha.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), ha.fill()
		}(hU, ha, a1l), ha.drawImage(a1k, -dy * hU, 0), a1m
	}, this.a1o = function(a1p) {
		var ha, hX, hU = a1p.height;
		return a1p.width === hU && (hX = (ha = b8.pd.getContext(a1p, !0)).getImageData(0, 0, hU, hU), b8.a1D.a1q(hX.data, hU, hU, .9), ha.putImageData(hX, 0, 0)), a1p
	}
}

function a1G() {
	this.a1r = function(f5) {
		return [f5 >> 12 & 63, f5 >> 6 & 63, 63 & f5]
	}, this.a1s = function(f5) {
		for (var g = this.a1r(f5), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1t = function(f5) {
		f5 = this.a1s(f5);
		return b8.color.mb(f5[0], f5[1], f5[2])
	}, this.a1u = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mb = function(dx, sG, ex) {
		return "rgb(" + dx + "," + sG + "," + ex + ")"
	}, this.md = function(dx, sG, ex, ew) {
		return "rgba(" + dx + "," + sG + "," + ex + "," + ew.toFixed(3) + ")"
	}, this.q8 = function(ey) {
		for (var g = ey.split("(")[1].split(","), fC = bM.fC, aA = 0; aA < 3; aA++) fC[aA] = parseInt(g[aA]);
		return 4 === g.length ? fC[3] = 255 * parseFloat(g[3].slice(0, -1)) : fC[3] = 255, fC
	}, this.q9 = function(a1v, eg) {
		for (var g = a1v.slice(a1v.indexOf("(") + 1, a1v.indexOf(")")).split(","), fC = bM.fC, aA = 0; aA < 3; aA++) fC[aA] = bJ.pB(parseInt(g[aA].trim(), 10) + eg, 0, 255);
		return 3 === g.length ? this.mb(fC[0], fC[1], fC[2]) : (a1v = parseFloat(g[3].trim()), this.md(fC[0], fC[1], fC[2], a1v = 0 === a1v ? .3 : a1v))
	}, this.a1w = function(g) {
		for (var pK = "#", aA = 0; aA < 3; aA++) {
			var dx = g[aA].toString(16);
			pK += 1 === dx.length ? "0" + dx : dx
		}
		return pK
	}, this.a1x = function(pK) {
		var dx, sG;
		return pK.length < 7 ? b9.ma : (dx = parseInt(pK.slice(1, 3), 16), sG = parseInt(pK.slice(3, 5), 16), pK = parseInt(pK.slice(5, 7), 16), this.mb(dx, sG, pK))
	}
}

function a1C() {
	this.a1y = function(pK, font, maxWidth) {
		if (font && (tl.font = font), tl.measureText(pK).width <= maxWidth) return pK;
		for (var aA = pK.length - 1; 1 <= aA; aA--)
			if (pK = pK.substring(0, aA), tl.measureText(pK + "...").width <= maxWidth) return pK + "...";
		return "..."
	}
}

function a1I() {
	var a20 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a21 = function(eC) {
		var a23, pK = new Date(eC.getTime() - 6e4 * eC.getTimezoneOffset()).toUTCString();
		return pK.length < 12 || (pK = pK.substring(5, pK.length), 0 === (eC = eC.getTimezoneOffset())) ? pK : (a23 = (eC < 0 ? "+" : "-") + bJ.dj(Math.abs(eC), 60), 0 == (eC = Math.abs(eC) % 60) ? pK + a23 : pK + a23 + ":" + (eC < 10 ? "0" :
			"") + eC)
	}, this.a24 = function(eC) {
		var pK = eC.toUTCString();
		return pK.length < 12 ? pK : function(eC) {
			return a20[eC.getUTCDay()]
		}(eC) + ", " + pK.substring(5, pK.length - 4)
	}
}

function a18() {
	var a26 = null;
	this.xx = 0, this.uf = function() {
		var f5 = bh.eA.data[5].value;
		a26 = "px " + f5, "Trebuchet MS" !== f5 && (a26 += ", Trebuchet MS"), this.xx = hT(32, 32, ["a", "b", "m"], 200, a26)
	}, this.vQ = function(i, j) {
		var ey = document.createElement("canvas");
		return ey.width = i, ey.height = j, ey
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(xA, i, j) {
		return xA.getImageData(0, 0, i, j)
	}, this.rS = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a26 : 1 === type ? "bold " + size + a26 : 2 === type ? "lighter " + size + a26 : 3 === type ? "italic " + size + a26 : 4 === type ? "oblique " + size + a26 : 5 === type ? "small-caps " +
			size + a26 : "small-caps bold " + size + a26
	}, this.textAlign = function(ha, id) {
		ha.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(ha, id) {
		ha.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.po = function(e, code, color) {
		color = this.pn(ba.rU) + " solid " + (color || b9.mj);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sI = function(e, ek, em, i, j) {
		e = e.style;
		e.left = this.sJ(ek), e.top = this.sJ(em), e.width = this.sJ(i), e.height = this.sJ(j)
	}, this.pe = function(f5) {
		return 1 + f5 * z.a0.r1()
	}, this.qw = function(mL, gB) {
		return mL * this.pe(void 0 === gB ? .5 : gB) * h.pf / h.k
	}, this.sH = function(mL, gB) {
		return mL * this.pe(void 0 === gB ? .5 : gB) * h.pf
	}, this.ry = function(mL, gB, a27) {
		return this.pe(gB) * Math.min(mL * h.pf, a27 * h.i) / h.k
	}, this.pn = function(f5) {
		return f5.toFixed(1) + "px"
	}, this.sJ = function(f5) {
		return this.a29(f5).toFixed(1) + "px"
	}, this.a29 = function(f5) {
		return f5 / h.k
	}, this.a2A = function(ri, a2B) {
		for (var pK = "<ul>", ed = ri.length, aA = 0; aA < ed; aA++) pK += "<li>" + ri[aA] + ": <a href='" + a2B[aA] + "' target='_blank'>" + a2B[aA] + "</a></li>";
		return pK += "</ul>"
	}, this.a2C = function(a2D) {
		return "<a href='" + a2D + "' target='_blank'>" + a2D + "</a>"
	}, this.a2E = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a2F = function(e) {
		var di = e.textContent;
		b8.zY.a2G(di, "✔") || (1 === di.length ? e.textContent = "✔" : e.textContent = di + " ✔", setTimeout(function() {
			e.textContent = di
		}, 500))
	}, this.measureText = function(pK) {
		return tl.measureText(pK).width
	}, this.s8 = function(a2H) {
		a2H.style.overflowX = "auto", a2H.style.overflowY = "hidden", a2H.style.whiteSpace = "nowrap", a2H.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sL = this.scrollLeft, e.preventDefault())
		}), a2H.addEventListener("scroll", function() {
			this.sL = this.scrollLeft
		})
	}
}

function a1A() {
	this.go = function(zy) {
		return 0 === zy ? 1 === aC.yt && aC.gy : 1 === zy ? 1 === aC.yt && !aC.gy : 2 === aC.yt
	}, this.gp = function(player) {
		return 0 !== af.li[player] && 2 !== af.a2I[player]
	}, this.a2J = function(player) {
		return player === aC.eN && 2 !== af.a2I[player]
	}, this.lH = function() {
		return ak.jt < 2 ? 0 : aC.hS ? 1 < bf.a2K() : af.gQ[l7[1]]
	}, this.a2L = function() {
		var jt = ak.jt;
		if (0 !== jt) {
			if (!aC.hS) return !this.jG(l7[0]);
			for (var eb = be.eb, l3 = bf.l4(), ju = ak.ju, aA = jt - 1; 0 <= aA; aA--) {
				var gA = ju[aA];
				if (eb[gA] === l3 && !this.jG(gA)) return 1
			}
		}
		return 0
	}, this.a2M = function(player) {
		return player === aC.eN
	}, this.jG = function(player) {
		return player >= aC.js || 2 === af.a2I[player]
	}, this.ke = function(player) {
		return 0 !== af.li[player]
	}, this.yj = function(player) {
		return player < aC.js
	}, this.ow = function(a2N, a2O) {
		return a2N !== a2O
	}, this.g1 = function(player, f5) {
		var min;
		return f5 = this.a2P(player, f5), af.ge[player] += f5, af.a2Q[player] && (min = Math.min(af.a2Q[player], af.ge[player]), af.a2Q[player] -= min, af.ge[player] -= min), f5
	}, this.a2P = function(player, f5) {
		var a2R = af.ge[player];
		return f5 = Math.min(f5, af.gQ[player] * aC.a2S - a2R), f5 = Math.min(f5, aC.a2T - a2R), Math.max(f5, 0)
	}, this.ox = function(player, iC, a2U, a2V) {
		var a2R = af.ge[player],
			iC = bJ.dj(a2R * (iC + 1), 1024),
			a2U = bJ.dj(a2U * a2R, 1024),
			iC = Math.min(iC, a2R - a2U);
		return 10 === aC.k9 && (iC = b2.a2X(player, iC)), bM.fA[0] = iC, bM.fA[1] = a2U, a2V <= iC
	}, this.oO = function(player, o7, o6) {
		var player = af.ge[player],
			a2W = bJ.dj(64 * player, 1024),
			player = (o7 = Math.min(o7, player - a2W), this.a2Z(o7));
		return a2W += player, o7 = this.a2P(o6, o7 -= player), bM.fA[0] = o7, bM.fA[1] = a2W, 1 <= o7
	}, this.oQ = function(o7, o6) {
		var a2Y = this.a2Z(o7);
		return o7 = this.a2P(o6, o7 -= a2Y), bM.fA[0] = o7, bM.fA[1] = a2Y, 1 <= o7
	}, this.iB = function(player, a2a) {
		return bJ.dj(af.ge[player] * (a2a + 1), 1024)
	}, this.a2Z = function(a2b) {
		return bJ.dj(Math.max(2142 - bd.jp(), 0) * a2b, 2142)
	}, this.p9 = function(player, a2U) {
		a2U = bJ.dj(a2U * af.ge[player], 1024);
		bM.fA[1] = a2U, af.ge[player] -= a2U
	}, this.fz = function(player, a2c) {
		var fM, fO, ex = af.ge[player];
		return a2c <= ex ? af.ge[player] -= a2c : (af.ge[player] = 0, fO = af.a2Q[player] + (fM = 5 * ((ex = a2c - ex) >> 2)), bb.g2(player, fM - ex, 12), fO <= aC.a2d ? af.a2Q[player] = fO : (af.a2Q[player] = aC.a2d, bb.g2(player, fO - aC.a2d,
			18))), a2c
	}, this.ks = function(player, iC) {
		var ge = af.ge,
			a2R = ge[player],
			iC = bJ.dj(a2R * (iC + 1), 1024),
			a2W = Math.max(bJ.dj(a2R, 10), 1e3);
		return (iC = Math.min(iC, a2R - a2W)) < 0 ? (ge[player] = 0, a2W = Math.min(1e3, a2R + aC.a2d - af.a2Q[player]), bM.fA[1] = a2W, af.a2Q[player] += a2W - a2R, 0) : (bM.fA[1] = a2W, 10 === aC.k9 && (iC = b2.a2X(player, iC)), ge[player] -=
			a2W + iC, iC)
	}, this.p0 = function(player) {
		af.ge[player] -= bM.fA[0] + bM.fA[1]
	}, this.oy = function(player, j3) {
		return (j3 = Math.min(j3, aC.ea)) < aC.ea && 0 === af.li[j3] && (j3 = aC.ea), (bM.eZ[0] = j3) === aC.ea || eW(player, j3)
	}, this.p2 = function(player, o6) {
		return 0 !== af.li[o6] && !eW(player, o6)
	}, this.a2e = function(player, a2f) {
		for (var gA, ed = ak.jt, a2g = 0, a2h = l7, aA = 0; aA < ed; aA++)
			if (gA = a2h[aA], !this.jG(gA)) {
				if (player === gA) return !0;
				if (++a2g > a2f) return !1
			} return !1
	}, this.l0 = function(gA) {
		var a2i = aC.hS ? bf.a2j() : af.gQ[l7[0]];
		return a2i >= bJ.dj(gA * aC.jc, 100)
	}, this.a2k = function(f5, min, max) {
		return Math.floor(bJ.pB(isNaN(f5) ? 0 : Number(f5), min, max))
	}
}

function a1E() {
	this.a2l = function(canvas, a2m, a2n) {
		var i = canvas.width,
			j = canvas.height,
			ey = b8.pd.vQ(i, j),
			ha = b8.pd.getContext(ey, !0),
			canvas = (ha.drawImage(canvas, 0, 0), ha.getImageData(0, 0, i, j));
		return a2m(canvas.data, i, j, a2n), ha.putImageData(canvas, 0, 0), ey
	}, this.a2o = function(vb, i, j) {
		for (var ek = i - 1; 0 <= ek; ek--)
			for (var em = j - 1; 0 <= em; em--) {
				var aA = 4 * (ek + em * i);
				vb[3 + aA] = vb[aA], vb[aA] = vb[1 + aA] = vb[2 + aA] = 255
			}
	}, this.a2p = function(vb, i, j) {
		for (var ek = i - 1; 0 <= ek; ek--)
			for (var em = j - 1; 0 <= em; em--) {
				var aA = 4 * (ek + em * i);
				vb[1 + aA] > vb[2 + aA] + 10 && (vb[3 + aA] = vb[aA], vb[1 + aA] = vb[2 + aA])
			}
	}, this.a2q = function(vb, i, j, a2n) {
		for (var gap = Math.floor(Math.min(i, j) * a2n), ek = 0; ek < i; ek++)
			for (var aA, em = 0; em < j; em++)(ek < gap || em < gap || i - gap <= ek || j - gap <= em) && (vb[3 + (aA = 4 * (ek + em * i))] = 255 - 255 * (vb[1 + aA] - vb[aA]) / (255 - vb[aA]))
	}, this.a2r = function(vb, i, j, a2n) {
		for (var ek = i - 1; 0 <= ek; ek--)
			for (var em = j - 1; 0 <= em; em--) {
				var aA = 4 * (ek + em * i);
				vb[aA] = a2n[0], vb[1 + aA] = a2n[1], vb[2 + aA] = a2n[2]
			}
	}, this.a2s = function(vb, i, j, a2n) {
		for (var gap = Math.floor(i * a2n), ek = 0; ek < i; ek++)
			for (var aA, em = 0; em < j; em++)(ek < gap || em < gap || i - gap <= ek || j - gap <= em) && (vb[aA = 4 * (ek + em * i)] = vb[1 + aA] = vb[2 + aA] = 0)
	}, this.a2t = function(vb, i, j) {
		for (var em, aA, ek = i - 1; 0 <= ek; ek--)
			for (em = j - 1; 0 <= em; em--) 200 < vb[1 + (aA = 4 * (ek + em * i))] && vb[1 + aA] - 20 > vb[aA] && vb[1 + aA] - 20 > vb[2 + aA] ? vb[aA] + vb[2 + aA] < 40 ? vb[3 + aA] = 0 : (vb[3 + aA] = vb[aA], vb[aA] = 255, vb[1 + aA] = 255, vb[
				2 + aA] = 255) : vb[aA] < 50 && vb[1 + aA] < 50 && vb[2 + aA] < 50 && (vb[aA] + vb[1 + aA] + vb[2 + aA] < 50 ? vb[3 + aA] = 180 : vb[3 + aA] = 180 + Math.floor(75 * (vb[aA] + vb[1 + aA] + vb[2 + aA] - 50) / 100))
	}, this.a2u = function(vb, i, j) {
		for (var em, aA, ek = i - 1; 0 <= ek; ek--)
			for (em = j - 1; 0 <= em; em--) vb[1 + (aA = 4 * (ek + em * i))] > vb[aA] + 20 && vb[1 + aA] > vb[2 + aA] + 20 && vb[aA] + vb[2] < 40 && (vb[3 + aA] = 255 - vb[1 + aA], vb[aA] = vb[1 + aA] = vb[2 + aA] = vb[aA])
	}, this.a1q = function(vb, i, j, a2n) {
		for (var dx = i >> 1, ek = 0; ek < i; ek++)
			for (var em = 0; em < j; em++) Math.sqrt((ek - dx) * (ek - dx) + (em - dx) * (em - dx)) > a2n * dx && (vb[4 * (ek + em * i) + 3] = 0)
	}
}

function a1B() {
	this.yB = function(f5) {
		var aA, a2v, a2w, a2x, a2y;
		if (f5 < 0) return "-" + this.yB(Math.abs(f5));
		if (f5 < 1e3) return f5.toString();
		for (a2v = Math.floor(Math.log(f5 + .5) / Math.log(10)) + 1, a2w = Math.floor((a2v - 1) / 3), a2y = (a2x = f5.toString()).substring(a2v - 3, a2v), aA = 1; aA < a2w; aA++) a2y = a2x.substring(a2v - 3 * (aA + 1), a2v - 3 * aA) + " " + a2y;
		return a2x.substring(0, a2v - 3 * a2w) + " " + a2y
	}, this.a2z = function(gA, a2v) {
		return gA.toFixed(a2v) + "%"
	}, this.a30 = function(f5, a31) {
		return f5.toFixed(bJ.pB(Math.floor((void 0 === a31 ? 3 : a31) - Math.log10(Math.max(f5, 1))), 0, 8))
	}, this.a32 = function(f5, mL, a2v) {
		return (f5 * mL).toFixed(a2v)
	}, this.zd = function(username) {
		var eh, eS = username.indexOf("[");
		return !(eS < 0) && 1 < (eh = username.indexOf("]")) - eS && eh - eS <= 8 ? username.substring(eS + 1, eh).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zd;
	this.a33 = function(pK) {
		for (var ew = Math.floor(.5 * pK.length + .5), mR = Math.floor(.5 * (ew - 1)), aA = 0; aA < mR; aA++)
			for (var ex = -1; ex < 2; ex += 2) {
				var ey = ew + ex * aA;
				if (" " === pK[ey]) return [this.zZ(pK.substring(0, ey)), this.a34(pK.substring(ey))]
			}
		return [pK.substring(0, ew), pK.substring(ew)]
	}, this.a34 = function(pK) {
		for (var ed = pK.length, aA = 0; aA < ed; aA++)
			if (" " !== pK[aA]) return pK.substring(aA);
		return pK
	}, this.zZ = function(pK) {
		for (var aA = pK.length - 1; 0 <= aA; aA--)
			if (" " !== pK[aA]) return pK.substring(0, aA + 1);
		return pK
	}, this.a35 = function(pK, a36) {
		return pK.split("(")[0] + "(🧈 " + a36.toFixed(2) + ")"
	}, this.startsWith = function(pK, a37) {
		return pK.substring(0, a37.length) === a37
	}, this.a2G = function(pK, a37) {
		var ed = pK.length;
		return pK.substring(ed - a37.length, ed) === a37
	}, this.a38 = function(g, a39, a3A) {
		var pK = "",
			ed = g.length - 1;
		a3A = a3A || "";
		for (var aA = 0; aA < ed; aA++) pK += a3A + g[aA] + a3A + ",", (aA + 1) % a39 == 0 && (pK += "\n");
		return pK += a3A + g[ed] + a3A
	}, this.a3B = function(pK, hi, hj) {
		return pK.replace(new RegExp(hi, "g"), hj)
	}
}

function a3C() {
	this.j0 = function(player, eP) {
		aH.ww(player, bK.el(eP), bK.en(eP)) && (bd.dc = !0), aC.kB && this.im()
	}, this.im = function() {
		aC.gy = !1;
		for (var aA = 0; aA < aC.js; aA++) 0 !== af.li[aA] && 0 === af.gQ[aA] && aH.x2(aA);
		0 !== af.li[aC.eN] ? (bb.le[7] = af.gQ[aC.eN], bb.le[8] = af.ge[aC.eN], aQ.a3D(), aV.a3E(), aC.gm || aG.m2(af.iR[aC.eN] - 5, af.iT[aC.eN] - 5, af.iS[aC.eN] + 5, af.iU[aC.eN] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a3F(18), ae.a3G(),
			ae.lU(!0), bN.x.a3H(), aK.qu(), aC.ov = null, bZ.a3I = !0, bZ.a3J(), aC.kB && z.a0.setState(1)
	}
}

function bw() {
	this.ea = 512, this.a2T = 15e8, this.a3K = 1e9, this.a2d = 5e4, this.a3L = 512, this.fw = 2, this.eN = 0, this.js = 0, this.yw = 0, this.kD = 0, this.yv = 0, this.w7 = 512, this.wC = 512, this.a2S = 150, this.kB = !0, this.gm = 0, this.yt = 0,
		this.jc = 0, this.mC = !1, this.gy = 0, this.a3M = 0, this.hS = !1, this.wE = 0, this.wF = 0, this.k9 = 0, this.xN = 0, this.ov = null, this.zB = new xG, this.a3N = 30, this.yq = 0, this.yy = 0, this.zA = 0, this.yl = 0, this.data = new a3O,
		this.a3P = new a3Q, this.a3R = 0, this.a3S = function() {
			bP.dU(), this.yw = this.js = this.data.humanCount, this.kB = 1 === this.yw && !__fx.customLobby.isActive(), this.mC = !1, this.gm = this.data.isReplay, this.k9 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xN = this.data.isContest, this.hS = this.k9 < 7 || 9 === this.k9, this.k9 = 10 === this.k9 && this.kB ? 7 : this.k9, this.k9 = 8 === this.k9 && 2 !== this.js ? 7 : this.k9, ax
				.dU(), this.wE = this.data.numberTeams, this.data.teamPlayerCount ? this.wF = +(0 < this.data.teamPlayerCount[0]) : (this.wF = 0, this.hS && this.kB && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.wE + 1), aC.a3P.a3T())), this.a3N = this.js <= 2 ? 30 : this.js <= 50 ? 40 : 50, this.a3M = this.gy = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.ov = this.gy ?
				new a3C : null, this.w7 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.js) : 1 === l.dh ? this.w7 = this.js : this.w7 = this.data.playerCount,
				this.wC = this.w7, this.kD = this.w7 - this.js, this.yv = 0, this.eN = this.data.selectedPlayer, this.yq = 0, this.yy = 0, this.zA = 0, this.yl = 0, aw.a3U(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3V(), b6.nz.oh = [], be.dU(),
				this.yt = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3W(), ab.dV(), an.a3X(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3Y(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3Z(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3a.putImageData(a3b, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fe(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.zB.dU(), bd.a3Y(), aG.m1(), 0 === af.li[aC.eN] && aW.show(!1, !0), ae.lU(!0), at.dU(), bd.dc = !0, this.gm || this.kB && this.gy || z.a0.setState(1), this.a3R = 0
		}, this.a0I = function(a3d) {
			aC.gm || b7.ot.a3e.length || (b7.ot.a3e = b7.a3f.yM()),
				__fx.customLobby.isActive() === false && ay.x.a3g(),
				this.yt = 0, bd.a3h(), z.a0.setState(0), aZ.setState(0), a3d || bS.e6.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3R ? s.x.a3i() : 1 === this.a3R ? s.t(19) : s.t(5, 5)
		}, this.a3j = function() {
			return this.gm ? aL.gn || !bA.a3k : this.kB && (aL.gn || this.gy)
		}, this.a3l = function() {
			return 1 === this.yt && !this.gy
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
		b8.pm.a1f(a3m.teamPlayerCount, a3m.playerCount), a3m.numberTeams = b8.pm.a1W(a3m.teamPlayerCount, 0), a3m.teamPlayerCount[0] && a3m.teamPlayerCount[7] && (a3m.teamPlayerCount[7] = 0, this.a3T())
	}, this.a3n = function() {
		var a3m = aC.data;
		a3m.mapType < 2 ? bQ.a6(bQ.a3o(a3m), a3m.mapSeed) : bQ.a3p(a3m.canvas)
	}, this.a3q = function() {
		var a3m = aC.data;
		a3m.colorsData || (a3m.colorsData = new Uint32Array(1)), a3m.selectableColor && (a3m.colorsData[0] = bh.x.ue()), a3m.selectableName && (a3m.playerNamesData || (a3m.playerNamesData = new Array(1)), a3m.playerNamesData[0] = bh.eA.data[122]
			.value)
	}, this.a3r = function() {
		aC.data = new a3O, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.ea), aC.data.aIncomeData[0] = 64
	}
}

function dN() {
	this.xu = 0, this.gap = 0, this.rU = 0, this.pk = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xu = .0022 * b8.pd.pe(.5) * h.pf, this.rU = this.xu / h.k, this.gap = Math.max(Math.floor((z.a0.r1() ? .0114 : .01296) * h.pf), 2), this.pk = this.gap / h.k
	}
}

function dM() {
	this.a3s = function() {
		return z.a0.r1() ? 2 : 1
	}
}

function c7() {
	var qD, ek, em, a3t, a3u, a3v, eC, player, a3w, gap, zoom, oZ, a3x;

	function a47(player) {
		for (var aA = oZ.length - 1; 0 <= aA; aA--)
			if (oZ[aA] === player) return 1
	}

	function a45(a42) {
		var aA, ed;
		if (-1 !== a42)
			for (ed = qD.length, aA = 0; aA < ed; aA++)
				if (qD[aA].hK && qD[aA].ek + 1 === a42 % 4 && qD[aA].em + 1 === a42 >> 2) return aA;
		return -1
	}

	function a43(kv, kw) {
		var sG = gap / 2;
		return kv < ek - a3t - 3 * sG || ek + 3 * a3t + 5 * sG < kv || kw < em - a3t - 3 * sG || em + 2 * a3t + 3 * sG < kw ? -1 : 4 * (kw < em - sG ? 0 : kw < em + a3t + sG ? 1 : 2) + (kv < ek - sG ? 0 : kv < ek + a3t + sG ? 1 : kv < ek + 2 * a3t +
			3 * sG ? 2 : 3)
	}
	this.a3y = function() {
		var aA, ex, a41 = [b9.n9, b9.nN, b9.mh, b9.nh, b9.na];
		for (qD = new Array(9), aA = 0; aA < 9; aA++) qD[aA] = {
			id: aA,
			hK: !1,
			kc: 0,
			canvas: [],
			ek: 0,
			em: 0
		};
		for (qD[0].colors = [0, 1, 2, 3], qD[0].ek = 0, qD[0].em = 0, qD[1].colors = [0, 1, 4], qD[1].ek = 1, qD[1].em = 0, qD[2].colors = [0, 2], qD[2].ek = -1, qD[2].em = 0, qD[3].colors = [0], qD[3].ek = 0, qD[3].em = 0, qD[4].colors = [0, 2],
			qD[4].ek = 1, qD[4].em = 1, qD[5].colors = [3], qD[5].ek = 0, qD[5].em = -1, qD[6].id = 20, qD[6].colors = [0], qD[6].ek = 1, qD[6].em = -1, qD[7].id = 21, qD[7].colors = [0], qD[7].ek = 0, qD[7].em = 1, qD[8].id = 16, qD[8]
			.colors = [0], qD[8].ek = 0, qD[8].em = 0, aA = 0; aA < 9; aA++)
			for (ex = 0; ex < qD[aA].colors.length; ex++) qD[aA].canvas.push(function(id, a1l) {
				if (id < 20) return b8.canvas.xg(aa.get(3), id, a1l);
				var a1l = aa.get(3).height,
					a1m = b8.pd.vQ(a1l, a1l),
					ha = b8.pd.getContext(a1m);
				20 === id ? ha.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vb.xv(ai.qt.xk + ai.qt.y1, ha, 0, 0, a1l);
				return a1m
			}(qD[aA].id, a41[qD[aA].colors[ex]]))
	}, this.a40 = function() {
		return qD
	}, this.dU = function() {
		oZ = [], ek = em = eC = 0, a3u = a3v = -1e3, this.resize()
	}, this.resize = function() {
		a3t = Math.floor((z.a0.r1() ? .075 : .0468) * h.pf), zoom = a3t / aa.get(3).height, gap = Math.floor(a3t / 3)
	}, this.a0l = function(kv, kw) {
		return !!this.hK() && (bd.dc = !0, !!ai.vb.gq(kv, kw, player) || (kv = function(kv, kw) {
			a3v = a3u = -1e3;
			var a44 = a45(a43(kv, kw));
			if (-1 === a44) return 0;
			if (1 !== qD[a44].colors[qD[a44].kc])
				if (5 === a44) {
					if (! function() {
							var di = performance.now();
							a3x + 4e3 < di && (oZ = []);
							a3x = di
						}(), a47(player)) return 1;
					oZ.push(player), 16 < oZ.length && oZ.shift()
				} else if (6 === a44) {
				for (var aA = oZ.length - 1; 0 <= aA; aA--) 0 === af.li[oZ[aA]] && oZ.splice(aA, 1);
				0 < oZ.length && (b3.a48(1, oZ, !0) && b6.fy.oY(oZ, player), oZ = [])
			} else if (2 === a44) b6.gz.o5(aQ.h4(), player);
			else if (3 === a44) aC.gy && b6.gz.h0(a3w);
			else if (0 === a44)
				if (0 === qD[0].kc) {
					if (aC.a3M && aV.a49() < 350) return 1;
					bT.a4A(4), b6.gz.hA(aQ.h4(), player)
				} else az.hC(player, aQ.h4());
			else if (1 === a44) bT.a4A(1), b6.gz.h8(aQ.h4(), a3w);
			else {
				if (7 === a44) return bT.a4A(0), ai.vb.show(kv, kw), 2;
				if (4 === a44) b3.a48(0, [player], !0) && b6.fy.oV(player);
				else {
					if (8 !== a44) return 0;
					b6.gz.h3(aQ.h4(), a3w, player)
				}
			}
			return 1
		}(kv, kw), this.qu(), 2 === kv && (ai.vb.hK = !0), 0 < kv))
	}, this.a0n = function(kv, kw) {
		this.hK() || (a3u = kv, a3v = kw, eC = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gu(mouseX),
			coordY = bK.gw(mouseY),
			coord = bK.f1(coordX, coordY),
			point = bK.eT(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kv, kw, eH) {
			ab.eY(eH) || -1 === (kv = bL.h6.a4O(kv, kw)) ? aM.a4N(eH) : aM.a4P(kv)
		}(mouseX, mouseY, point))
	}
	this.click = function(kv, kw, a0u) {
		var gt = bK.gu(kv),
			gv = bK.gw(kw),
			eP = bK.f1(gt, gv),
			eH = bK.eT(eP);
		if (!bK.gx(gt, gv)) return !1;
		gt = (z.a0.r1() ? .025 : .0144) * h.pf, gv = performance.now();
		if (Math.abs(kv - a3u) > gt || Math.abs(kw - a3v) > gt || eC + 500 < gv) return !1;
		if (eC = gv, a0u && ! function(kv, kw, eH) {
				ab.eY(eH) || -1 === (kv = bL.h6.a4O(kv, kw)) ? aM.a4N(eH) : aM.a4P(kv)
			}(kv, kw, eH), aL.gn || this.hK() || !b8.fy.gp(aC.eN) || aC.gm) return this.qu(), !1;
		if (aC.gy) {
			if (!a0u) {
				if (!ab.eY(eH)) return !1;
				a3w = eP, qD[3].hK = !0
			}
		} else if (bL.h6.oA(eP)) a0u ? aM.a4G(55, 0) : bL.a4E.a4F = -1;
		else {
			if (a0u) return !1;
			bL.h6.a4H(kv, kw) || (2 === aC.yt ? ab.gC(eH) && (player = ab.eV(eH), b8.fy.jG(player) || (qD[0].hK = !0, qD[0].kc = 1, qD[7].hK = !0)) : ab.ei(eH) ? (a3w = al.eE.eG(eH)) && (gt = bK.eT(a3w), qD[8].hK = !0, player = ab.eU(gt) ? aC
				.ea : ab.eV(gt)) : (a3w = eP, bL.h6.h7(aC.eN, eP) && (qD[0].hK = !0, qD[0].kc = 1, qD[1].hK = !0, qD[1].kc = bM.fE[2] ? 0 : 2), ab.h5(eH) || (ab.eU(eH) ? (player = aC.ea, h9(aC.eN) ? (qD[0].hK = !0, qD[0].kc = 0) : hB(aC
				.eN, player) && (qD[0].hK = !0, qD[0].kc = 3)) : (player = ab.eV(eH)) === aC.eN ? (qD[0].hK = !0, qD[0].kc = 1, qD[7].hK = !0) : (qD[0].kc = 1, qD[5].hK = function(player) {
				return !b8.fy.jG(player) && !a47(player) && b3.a48(1, [player], !1)
			}(player), qD[7].hK = !b8.fy.jG(player), eW(player, aC.eN) ? (qD[4].hK = !b8.fy.jG(player) && !ae.a4J(player) && b3.a48(0, [player], !1), qD[6].hK = function(player) {
				if (0 === oZ.length) return !1;
				if (performance.now() > a3x + 4e3) return !(oZ = []);
				return !a47(player) && ! function(player) {
					var aA;
					if (aC.hS)
						for (aA = oZ.length - 1; 0 <= aA; aA--)
							if (!eW(player, oZ[aA])) return 1;
					return
				}(player)
			}(player), hD(aC.eN, player) ? (qD[0].kc = 0, qD[0].hK = !0) : hB(aC.eN, player) && (qD[0].kc = 3, qD[0].hK = !0), qD[0].hK = this.a4L()) : (qD[2].hK = !0, qD[0].hK = !0)))))
		}
		return this.a4D(kv, kw)
	}, this.a4D = function(kv, kw) {
		return ek = kv - Math.floor(a3t / 2), em = kw - Math.floor(a3t / 2), !!this.hK()
	}, this.a0R = function(kv, kw) {
		return !!this.hK() && (ai.vb.hK ? !ai.vb.xt(kv, kw) && (ai.vb.hK = !1, bd.dc = !0) : function(rF, kv, kw) {
			kv = a43(kv, kw);
			if (0 <= a45(kv)) return !1;
			if ((1 === kv || 6 === kv) && 0 <= a45(2)) return !1;
			if ((6 === kv || 9 === kv) && 0 <= a45(10)) return !1;
			return rF.qu(), bd.dc = !0
		}(this, kv, kw))
	}, this.qu = function() {
		for (var aA = qD.length - 1; 0 <= aA; aA--) qD[aA].hK = !1, qD[aA].kc = 0;
		ai.vb.hK = !1
	}, this.hK = function() {
		return this.a4L() || ai.vb.hK
	}, this.a4L = function() {
		for (var ed = qD.length, aA = 0; aA < ed; aA++)
			if (qD[aA].hK) return !0;
		return !1
	}, this.tk = function() {
		if (this.hK())
			if (ai.vb.hK) ai.vb.tk();
			else {
				var aA, ha = tl,
					ex = qD,
					ed = ex.length,
					a4T = (a3t + gap) / zoom;
				for (ha.imageSmoothingEnabled = !0, ha.setTransform(zoom, 0, 0, zoom, ek, em), aA = 0; aA < ed; aA++) ex[aA].hK && tl.drawImage(ex[aA].canvas[ex[aA].kc], ex[aA].ek * a4T, ex[aA].em * a4T);
				ha.imageSmoothingEnabled = !1, ha.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4U, a4V, a4W, a4X = -1;

	function a4Y() {
		var a4Z, xA = canvas.getContext("2d", {
			alpha: !0
		});
		xA.clearRect(0, 0, j, j), xA.fillStyle = b9.mf, xA.fillRect(0, 0, j, j), 0 === a4V && (xA.fillStyle = b9.mk, xA.fillRect(0, 0, j, j)), xA.fillStyle = b9.mj, xA.fillRect(0, 0, j, 1), xA.fillRect(0, 0, 1, j), xA.fillRect(0, j - 1, j, 1), xA
			.fillRect(j - 1, 0, 1, j), a4Z = .9 * j / aa.get(0).width, xA.imageSmoothingEnabled = !0, xA.setTransform(a4Z, 0, 0, a4Z, Math.floor((j - a4Z * aa.get(0).width) / 2), Math.floor((j - a4Z * aa.get(0).height) / 2)), xA.drawImage(aa.get(0),
				0, 0), xA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4b(kv, kw) {
		if (!aL.gn) return kv <= j + ba.gap && kw >= aQ.em ? 9 : -1;
		if (kv <= 4 * j + ba.gap) {
			if (kw >= aQ.em) return 0;
			if (kw >= aQ.em - j - a4W * ba.gap) return 2
		} else if (kv <= 7 * j + ba.gap && kw >= aQ.em - j - a4W * ba.gap) return 1;
		return -1
	}
	this.gn = !1, this.dU = function() {
		a4V = -1, this.gn = !1, a4W = z.a0.r1() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4U = b8.pd.rS(1, (z.a0.r1() ? .5 : .45) * j), a4Y()
	}, this.a12 = function() {
		this.gn = !this.gn, this.gn ? (bA.a11(!1), aC.gm && bA.a3k && bA.a13(!0), this.a4a()) : (a4V = -1, a4Y(), !aC.kB || 1 !== aC.yt || aC.gy || aC.gm || z.a0.setState(1)), bd.dc = !0
	}, this.a4a = function() {
		(aC.kB || aC.gm) && 1 === aC.yt && (aU.lU(!0), aC.gy || setTimeout(function() {
			bZ.z4()
		}, 0), z.a0.setState(0))
	}, this.gq = function(kv, kw) {
		return 0 <= (a4X = a4b(kv, kw)) || !aL.gn || aC.kB || aC.gm || bc.hK || aL.a12(), a4X
	}, this.a0R = function(kv, kw) {
		kv = a4b(kv, kw);
		kv !== a4V && (a4V = kv, this.gn || a4Y(), bd.dc = !0)
	}, this.a0S = function(kv, kw) {
		kv = a4b(kv, kw);
		return -1 !== kv && a4X === kv && (this.gn ? aC.mC ? (0 <= kv && bA.a11(!1), !aC.gm) : (0 === kv ? aC.a0I() : 1 === kv ? this.a12() : 2 === kv && s.t(1, 0), !0) : 9 === kv && (this.a12(), !0))
	}, this.tk = function() {
		var i;
		this.gn ? (i = Math.floor(5.5 * j), tl.setTransform(1, 0, 0, 1, ba.gap, aQ.em), tl.fillStyle = b9.mf, tl.fillRect(0, 0, i, j), 0 === a4V ? (tl.fillStyle = b9.mk, tl.fillRect(0, 0, 4 * j, j)) : 1 === a4V && (tl.fillStyle = b9.mk, tl
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tl.fillStyle = b9.mj, tl.fillRect(0, 0, i, 1), tl.fillRect(0, 0, 1, j), tl.fillRect(4 * j, 0, 1, j), tl.fillRect(0, j - 1, i, 1), tl.fillRect(i - 1, 0, 1, j), tl.font = a4U, b8.pd
			.textBaseline(tl, 1), b8.pd.textAlign(tl, 1), tl.fillText(L(40), 2 * j, .54 * j), i = .4 * j, aL.a4f(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.em + .3 * j, i), i = 1, tl.setTransform(1, 0, 0, 1, ba.gap, aQ.em - i * a4W * ba.gap - i *
				j), tl.fillStyle = b9.mf, tl.fillRect(0, 0, 4 * j, j), a4V === i + 1 && (tl.fillStyle = b9.mk, tl.fillRect(0, 0, 4 * j, j)), tl.fillStyle = b9.mj, tl.fillRect(0, 0, 4 * j, 1), tl.fillRect(0, 0, 1, j), tl.fillRect(4 * j, 0, 1,
				j), tl.fillRect(0, j - 1, 4 * j, 1), tl.fillText(L(0 === i ? 40 : 41), 2 * j, .54 * j), tl.setTransform(1, 0, 0, 1, 0, 0)) : tl.drawImage(canvas, ba.gap, aQ.em)
	}, this.pE = function(player) {
		return 0 !== af.li[player] && 2 !== aC.yt && !b8.fy.jG(player)
	}, this.a4f = function(ek, em, ed) {
		tl.setTransform(1, 0, 0, 1, ek, em), tl.lineWidth = ba.xu, tl.strokeStyle = b9.mj, tl.beginPath(), tl.moveTo(0, 0), tl.lineTo(ed, ed), tl.moveTo(0, ed), tl.lineTo(ed, 0), tl.stroke()
	}
}

function c9() {
	var a4h, j, a4i, a4j, a4k, a4l, a4m, a4n, a4o;

	function x6() {
		return aQ.a56(aM.a52()) ? au.hK ? __fx.settings.keybindButtons ? aQ.em - 2 * aQ.j - 3 * a4i : aQ.em - aQ.j - 2 * a4i : __fx.settings.keybindButtons ? aQ.em - aQ.j - 2 * a4i : aQ.em - a4i : bA.a56(aM.a55()) ? au.hK ? bA.x6() - aQ.j - 2 * a4i :
			bA.x6() - a4i : au.hK ? h.j - aQ.j - (bi.a3s() + 1) * a4i : h.j - bi.a3s() * ba.gap
	}

	function a4t(di, pK, id, gA, a4w, a4x, vj, a4y, a4z, a50) {
		var aA, xA, a1m, pV, g, a5B = void 0 !== a4z,
			i = Math.floor(aP.measureText(pK, aM.a4U) + 1.5 * a4j + (a5B ? j : 1.5 * a4j));
		if (bd.dc = !0, i + 2 * a4i + aQ.j > h.i && !a5B && 50 !== id && 20 < pK.length) a4t(di, (g = b8.zY.a33(pK))[0], id, gA, a4w, a4x, vj, a4y, a4z, a50), a4t(di, g[1], id, gA, a4w, a4x, vj, a4y, a4z, a50);
		else if (g = i + (50 === id ? a4k : 0), (a1m = document.createElement("canvas")).width = i, a1m.height = j, (xA = a1m.getContext("2d", {
				alpha: !0
			})).font = aM.a4U, b8.pd.textBaseline(xA, 1), b8.pd.textAlign(xA, 0), xA.clearRect(0, 0, i, j), xA.fillStyle = a4x, xA.fillRect(0, 0, i, j), xA.fillStyle = a4w, xA.fillText(pK, Math.floor(1.5 * a4j), Math.floor(j / 2)), a5B && (xA
				.imageSmoothingEnabled = !0, ai.vb.xv(a4z, xA, i - j, 0, j)), 0 === (pV = {
				eC: di,
				pK: pK,
				id: id,
				player: gA,
				canvas: a1m,
				a4w: a4w,
				a4x: a4x,
				i: i,
				a53: g,
				vj: vj,
				a4y: a4y,
				a4z: a4z,
				a50: a50
			}).eC || 0 < a4h.length && 0 < a4h[0].eC) a4h.unshift(pV);
		else {
			for (aA = 1; aA < a4h.length; aA++)
				if (0 < a4h[aA].eC) return void a4h.splice(aA, 0, pV);
			a4h.push(pV)
		}
	}

	function a4u(dx, sG, ex) {
		return "rgb(" + dx + "," + sG + "," + ex + ")"
	}

	function a5C(id, g5) {
		for (var ed = a4h.length, aA = 0; aA < ed; aA++) a4h[aA].id === id && g5-- <= 0 && (a4h.splice(aA, 1), aA--, ed--)
	}

	function a5D(id, player) {
		for (var er = !1, aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].id !== id || player !== aC.ea && a4h[aA].player !== player || (a4h.splice(aA, 1), er = !0);
		return er
	}

	function a5a(pK) {
		a4t(340, pK, 6, 0, a4u(215, 245, 255), b9.mg, -1, !1)
	}
	this.a4p = "", this.dU = function() {
		var self;
		a4n = 0, a4m = z.a0.r1() ? 7 : 12, a4l = {
			yh: [0, 0, 0],
			a4q: [0, 0, 0],
			e5: [220, 180, 180],
			tj: [0, 0, 0],
			ey: [0, 0, 0]
		}, a4h = [], this.resize(), aC.gy && this.z5(0, 18), bQ.vO.vP[bQ.eJ].name.length && a5a(L(88, [bQ.vO.vP[bQ.eJ].name])), a5a(L(89, [bQ.eo - 2 + "x" + (bQ.ep - 2)])), a5a(L(90, [b8.zY.yB(an.a5b)])), an.a5b !== an.a5c && a5a(L(91, [b8.zY
			.yB(an.a5c) + " (" + b8.zY.a2z(100 * an.a5c / an.a5b, 1) + ")"
		])), 0 < an.a5d && a5a(L(64, [b8.zY.yB(an.a5d) + " (" + b8.zY.a2z(100 * an.a5d / an.a5b, 1) + ")"])), 0 < an.a5e && a5a(L(92, [b8.zY.yB(an.a5e) + " (" + b8.zY.a2z(100 * an.a5e / an.a5b, 1) + ")"])), 10 === aC.k9 && a4t(120, L(93), 6,
			0, a4u(235, 255, 120), b9.mg, -1, !1), 0 !== (self = this).a4p.length && (a4t(200, self.a4p, 0, 0, b9.mj, b9.mg, -1, !1), self.a4p = ""), aC.xN && a4t(340, L(42), 6, 0, a4u(255, 200, 0), b9.mg, -1, !1)
	}, this.resize = function() {
		var a4v, aA;
		if (j = (j = Math.floor((z.a0.r1() ? .031 : .0249) * h.pf)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4U = b8.pd.rS(1, this.fontSize), a4i = ba.gap, a4j = Math.floor(j / 5), 0 < a4h.length)
			for (a4v = a4h, a4h = [], aA = a4v.length - 1; 0 <= aA; aA--) a4t(a4v[aA].eC, a4v[aA].pK, a4v[aA].id, a4v[aA].player, a4v[aA].a4w, a4v[aA].a4x, a4v[aA].vj, a4v[aA].a4y, a4v[aA].a4z, a4v[aA].a50);
		this.a51()
	}, this.a51 = function() {
		a4o = document.createElement("canvas");
		var pK = L(43),
			xA = (a4k = aP.measureText(pK, this.a4U) + 5 * a4j, a4o.height = j, a4o.width = a4k, a4o.getContext("2d", {
				alpha: !0
			}));
		xA.font = this.a4U, b8.pd.textBaseline(xA, 1), b8.pd.textAlign(xA, 1), xA.clearRect(0, 0, a4k, j), xA.fillStyle = b9.n6, xA.fillRect(0, 0, a4k, j), xA.fillStyle = b9.mj, xA.fillText(pK, Math.floor(a4k / 2), Math.floor(j / 2))
	}, this.a52 = function() {
		var ed;
		return au.hK ? au.i : 0 === (ed = a4h.length) ? 0 : 1 === ed ? a4h[0].a53 : a54(a4h[0].a53, a4h[1].a53)
	}, this.a55 = function() {
		var ed = a4h.length;
		return au.hK ? ed ? a54(au.i, a4h[0].a53) : au.i : 0 === ed ? 0 : 1 === ed ? a4h[0].a53 : 2 === ed ? a54(a4h[0].a53, a4h[1].a53) : a54(a54(a4h[0].a53, a4h[1].a53), a4h[2].a53)
	}, this.gq = function(ek, em) {
		for (var m9, a57, a58 = x6(), aA = a4h.length - 1; 0 <= aA; aA--)
			if ((a57 = a58 - (aA + 1) * j) <= em && em < a57 + j) return 50 === a4h[aA].id ? ek >= h.i - a4k - a4i - a4h[aA].i && (ek >= h.i - a4k - a4i ? b6.fy.oV(a4h[aA].player) : aG.m3(a4h[aA].player, 800, !1, 0), !0) : ek >= h.i - a4h[aA].i -
				a4i && (736 === a4h[aA].id ? (a57 = a4h[aA].pK.split(" "), window.open(a57[a57.length - 1], "_blank")) : a4h[aA].a4y && (a4h[aA].a50 && a4h[aA].a50.ew ? (a57 = a4h[aA].a50.eP, m9 = bK.el(a57) - 10, a57 = bK.en(a57) - 10, aG
					.m2(m9, a57, 19 + m9, 19 + a57)) : a4h[aA].a50 && a4h[aA].a50.ex ? aG.m4(a4h[aA].player, a4h[aA].a50.m5) : (aG.m3(a4h[aA].player, 800, !1, 0), 0 <= a4h[aA].vj && (m9 = a4h[aA].vj, a4h[aA].vj = a4h[aA].player, a4h[
					aA].player = m9))), !0);
		return !1
	}, this.zH = function(di, pK, id, gA, a4w, a4x, vj, a4y, a4z, a50) {
		a4t(di, pK, id, gA, a4w, a4x, vj, a4y, a4z, a50)
	}, this.a5A = function(p) {
		a4t(300, p, 252, 0, b9.mj, b9.mg, -1, !1)
	}, this.a3F = function(id) {
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].id === id && (a4h[aA].eC = 1)
	}, this.z5 = function(player, id) {
		0 === id ? (aP.j0(player, 0), a5C(423, 0), a4t(160, L(44, [af.zU[player]]), 423, player, "rgb(10,220,10)", b9.mg, -1, !1)) : 1 === id ? (a5D(50, aC.ea), aP.j0(player, 1), a4t(360, L(45, [af.zU[player]]), 0, player, b9.nP, b9.mg, -1, !0),
			aG.m3(player, 2700, !1, 0)) : 2 === id ? (aP.j0(player, 2), a4t(0, L(46), 0, player, "rgb(10,255,255)", b9.mg, -1, !0), aG.m3(player, 2700, !1, 0)) : 3 === id ? (aP.j0(player, 2), a4t(0, L(47, [af.zU[player]]), 0, player, b9.mj,
			b9.mg, -1, !0), aG.m3(player, 2700, !1, 0)) : 4 === id ? this.a5E(1, player, player) : 5 === id ? 2 === af.a2I[player] || b8.fy.jG(aC.eN) || (function(id, ld) {
			var aA, a5P = 0,
				ed = a4h.length;
			for (aA = 0; aA < ed; aA++)
				if (a4h[aA].id === id && ld <= ++a5P) return a4h.splice(aA, 1)
		}(1, 5), ae.a5G(player) ? a4t(180, L(48, [af.zU[player]]), 1, player, a4u(255, 200, 180), b9.mg, -1, !0) : (a5C(573, 0), a4t(180, L(49, [af.zU[player]]), 573, player, b9.nP, b9.mg, -1, !0))) : 18 === id ? a4t(255, L(50), 18, 0, b9.mj,
			b9.mg, -1, !1) : 21 === id ? a4t(220, L(51), id, 0, b9.mj, b9.mg, -1, !1) : 22 === id ? this.a5E(2, player, player) : 59 === id && a4t(0, L(52), id, 0, b9.ng, b9.mg, 0, !1)
	}, this.a0C = function(p) {
		a4t(200, L(53, [p]), 94, 0, b9.mj, b9.nL, -1, !1)
	}, this.zC = function(a5H) {
		if (aC.eN === a5H && !aC.kB)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4t(0, "Your Win Count is now " + __fx.wins.count, 3, a5H, b9.mj, b9.mg, -1, !0);
		af.gQ[a5H] && (aP.j0(a5H, 2), aC.js < 100 ? a4t(0, L(47, [af.zU[a5H]]), 3, a5H, b9.mj, b9.mg, -1, !0) : a4t(0, L(54, [af.zU[a5H]]), 3, a5H, b9.mj, b9.mg, -1, !0))
	}, this.a4N = function(eH) {
		var a5J, pK, a5I = "(" + bK.el(eH >> 2) + ", " + bK.en(eH >> 2) + ")",
			a4y = !1,
			player = 0;
		ab.eY(eH) ? ab.eU(eH) ? a5I = L(55, [a5I]) : (player = ab.eV(eH), pK = L(56, [b8.xA.a1y(af.za[player], b8.pd.rS(0, 10), 150)]) + "   ", pK = (pK += L(57, [b8.zY.yB(af.ge[player])]) + "   ") + L(58, [b8.zY.yB(af.gQ[player])]) + "   ", aC
				.hS && (a5J = be.zF[be.kE[be.eb[player]]], pK += L(59) + ": " + a5J + "   "), b8.fy.jG(player) && (pK += L(60) + ": " + aD.k3[aD.hH[player]] + "   "), a5I = pK = (pK += L(61, [player]) + "   ") + L(62, [a5I]), a4y = !0) : a5I = ab
			.ei(eH) ? L(63, [a5I]) + "   #" + ab.eL(eH) : L(64, [a5I]), bd.dc = !0, a5C(55, 0), a4t(220, a5I, 55, player, b9.mj, b9.mg, -1, a4y)
	}, this.a4P = function(a5K) {
		var ka = bL.x,
			player = ka.a5L[a5K] >> 3,
			pK = (bd.dc = !0, a5C(55, 0), L(65, [af.zU[player]]) + "   ");
		a4t(220, pK += L(57, [ka.a5M[a5K]]), 55, player, b9.mj, b9.mg, -1, !0)
	}, this.oF = function(o2, a5N, oG) {
		o2 === aC.eN ? a4t(175, " " + L(66, [af.zU[a5N]]) + ": ", 1001, a5N, a4u(200, 255, 210), b9.mg, -1, !0, oG) : this.a5O(o2, oG)
	}, this.a5O = function(o2, oG) {
		a5C(1e3, 0), a4t(175, af.zU[o2] + ": ", 1e3, o2, b9.mj, "rgba(5,60,25,0.9)", -1, !0, oG)
	}, this.zI = function() {
		var p;
		aC.yy ? (p = L(67), aP.zG(L(68), 2, 1, 12), a4t(0, p, 40, 0, "rgb(10,220,10)", b9.mg, -1, !1)) : (p = L(69), aP.zG(L(70), 2, 0, 16), a4t(0, p, 41, 0, b9.mj, b9.mg, -1, !1))
	}, this.xH = function() {
		var g5 = af.zU,
			eg = aC.data;
		a4t(300, g5[0] + " [" + aC.zB.xM(eg.elo[0]) + "] vs " + g5[1] + " [" + aC.zB.xM(eg.elo[1]) + "]", 65, 0, b9.ma, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5Q = function(p) {
		a4t(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5R = function(a5S) {
		a4t(0, L(a5S ? 71 : 72), 247, 0, b9.nf, b9.mg, -1, !1)
	}, this.xP = function(xL, xO, a5T) {
		var eg = aC.data,
			g5 = af.zU;
		a4t(0, g5[0] + ": " + aC.zB.xM(eg.elo[0]) + " -> " + xL, 66, 0, b9.mj, a5T[0], -1, !1), a4t(0, g5[1] + ": " + aC.zB.xM(eg.elo[1]) + " -> " + xO, 66, 1, b9.mj, a5T[1], -1, !1)
	}, this.oW = function(player, id) {
		0 === id ? a5D(50, player) ? (a4t(128, L(73, [af.zU[player]]), 52, player, a4u(180, 255, 180), b9.mg, -1, !0), ae.pC(player, 2, 255)) : a4t(384, L(74, [af.zU[player]]), 51, player, a4u(210, 210, 255), b9.mg, -1, !0) : a5D(51, player) ? (
			a4t(128, L(75, [af.zU[player]]), 52, player, b9.mj, "rgba(60,120,10,0.9)", -1, !0), ae.pC(player, 2, 255)) : (a4t(384, L(76, [af.zU[player]]), 50, player, b9.mj, "rgba(90,90,90,0.9)", -1, !0), ae.pC(player, 2, 96))
	}, this.oa = function(yh, target) {
		var color = a4u(210, 255, 210);
		1 < yh.length ? a4t(230, L(77, [yh.length, af.zU[target]]), 66, target, color, b9.mg, -1, !0) : a4t(230, L(78, [af.zU[yh[0]], af.zU[target]]), 66, yh[0], color, b9.mg, target, !0)
	}, this.a5U = function(player, target) {
		a4t(230, L(79, [af.zU[player], af.zU[target]]), 66, player, b9.mj, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4G = function(id, g5) {
		a5C(id, g5)
	}, this.z0 = function(id, player) {
		a5D(id, void 0 === player ? aC.ea : player)
	}, this.a5V = function(id) {
		for (var aA = a4h.length - 1; 0 <= aA; aA--)
			if (a4h[aA].id === id) return a4h[aA];
		return null
	}, this.oR = function(a5W, a5X, player) {
		2 !== af.a2I[aC.eN] && (a4t(200, 1 === a5W ? L(80, [af.zU[player]]) : L(81, [b8.zY.yB(a5W), af.zU[player]]), 30, player, "rgb(190,255,190)", b9.mg, -1, !0), a5X) && a4t(30, 1 === a5X ? L(82) : L(83, [b8.zY.yB(a5X)]), 30, 0, b9.mj, b9.mg,
			-1, !1)
	}, this.a5Z = function(a5W, player) {
		2 !== af.a2I[aC.eN] && (a5C(31, 0), 2 === af.a2I[player] || player >= aC.js ? a4t(150, 1 === a5W ? L(84, [af.zU[player]]) : L(85, [af.zU[player], b8.zY.yB(a5W)]), 31, player, b9.ma, "rgba(205,205,205,0.9)", -1, !0) : a4t(150, 1 === a5W ?
			L(86, [af.zU[player]]) : L(87, [af.zU[player], b8.zY.yB(a5W)]), 31, player, b9.ma, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yz = function(bp) {
		for (var ey = bd.jp(), aA = 2; 0 <= aA; aA--) 0 < a4l.tj[aA] && (bp || a4l.ey[aA] < ey - 220) && this.a5f(aA)
	}, this.a5f = function(id) {
		var pK, ed = a4l.tj[id],
			player = a4l.yh[id];
		a4l.tj[id] = 0, 1 === ed ? (0 === id ? pK = L(94, [af.zU[player], af.zU[a4l.a4q[0]]]) : 1 === id ? pK = L(95, [af.zU[player]]) : 2 === id ? pK = L(96, [af.zU[player]]) : 3 === id && (pK = L(97, [af.zU[player]])), a5C(7, 0), a4t(a4l.e5[
			id], pK, 7, a4l.a4q[id], b9.mj, b9.mg, -1, !0)) : (pK = L(0 === id ? 98 : 1 === id ? 99 : 100, [ed]), a5C(7, 0), a4t(a4l.e5[id], pK, 7, player, b9.mj, b9.mg, -1, !1))
	}, this.a5E = function(id, h2, vj) {
		var ey = bd.jp(),
			ed = a4l.tj[id] + 1;
		a4l.tj[id]++, a4l.yh[id] = h2, a4l.a4q[id] = vj, 1 === ed && (a4l.ey[id] = ey), (1 === ed && (aC.yw < 32 || 2 === aC.yt) || 1 < ed && (a4l.ey[id] < ey - 140 || 2 === aC.yt)) && this.a5f(id)
	}, this.im = function() {
		b0.im();
		for (var hm = (hm = a4h.length - a4m) <= 1 ? 1 : hm * hm, aA = a4h.length - 1; 0 <= aA; aA--) 0 < a4h[aA].eC && (a4h[aA].eC -= hm, a4h[aA].eC <= 0) && (bd.dc = !0, a4h.splice(aA, 1));
		! function() {
			var g5, aA;
			if (128 !== a4n && !(++a4n < 128))
				for (g5 = 5, aA = ak.jt - 1; 0 <= aA; aA--) 1 === af.a2I[ak.ju[aA]] && 0 < g5-- && a4t(240, L(97, [af.zU[ak.ju[aA]]]), 1, ak.ju[aA], b9.ma, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yz(!1)
	}, this.tk = function() {
		for (var wA, em = x6(), aA = a4h.length - 1; 0 <= aA; aA--) wA = em - (aA + 1) * j, 50 === a4h[aA].id ? (tl.drawImage(a4h[aA].canvas, h.i - a4h[aA].i - a4k - a4i, wA), tl.drawImage(a4o, h.i - a4k - a4i, wA)) : tl.drawImage(a4h[aA].canvas,
			h.i - a4h[aA].i - a4i, wA)
	}
}

function cA() {
	var a5h, a5i, a5j, i, j, font, pK;

	function a5o(a5p) {
		return a5p < 10 ? "0" + a5p : String(a5p)
	}
	this.dU = function() {
		pK = L(101)
	}, this.resize = function() {
		i = Math.floor((z.a0.r1() ? .53 : .36) * h.pf), j = Math.floor(.065 * i), font = b8.pd.rS(1, Math.floor(.9 * j)), a5j--, this.setTime()
	}, this.im = function() {
		this.setTime() && (bd.dc = !0)
	}, this.setTime = function() {
		for (var di = new Date, a5k = di.getUTCMinutes(), a5l = di.getUTCSeconds(), a5m = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5n = (a5i = 3600 - 60 * a5k - a5l, a5i %= 300, 300), aA = 0; aA < a5m.length; aA++)
			if ((60 * a5k + a5l + a5i) % 3600 == 60 * a5m[aA]) {
				a5n = 0;
				break
			} return a5i += a5n, a5h = pK + a5o(Math.floor(a5i / 60)) + ":" + a5o(a5i % 60), a5j !== (a5j = 60 * a5k + a5l) && (i = aP.measureText(a5h, font), i += Math.floor(.4 * j), !0)
	}, this.tk = function() {
		tl.lineWidth = 1 + Math.floor(j / 15), tl.translate(h.i - j, Math.floor(.5 * (h.j + i))), tl.rotate(-Math.PI / 2), tl.fillStyle = b9.mj, tl.fillRect(0, 0, i, j), tl.strokeStyle = b9.ma, tl.strokeRect(0, 0, i, j + 10), tl.fillStyle = b9
			.ma, tl.font = font, b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 1), tl.fillText(a5h, Math.floor(i / 2), Math.floor(.59 * j)), tl.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4h, a5q, a4U, j, a5r;

	function a5t(aA) {
		var a5v = !0,
			hi = b9.mj,
			i = (a4h[aA].j3 === aC.ea ? a4h[aA].xA.fillStyle = b9.mu : (ab.a5w(a4h[aA].j3), a4h[aA].xA.fillStyle = b8.color.md(bM.fC[0], bM.fC[1], bM.fC[2], .87), 400 < b8.pm.a1Q(bM.fC, 0, 2) && (a5v = !1, hi = b9.ma)), a4h[aA].canvas.width),
			rz = (a4h[aA].xA.clearRect(0, 0, i, j), a4h[aA].xA.fillRect(0, 0, i, j), a4h[aA].xA.fillStyle = hi, ! function(xA, i, j) {
				xA.fillRect(0, 0, i, 1), xA.fillRect(0, j - 1, i, 1), xA.fillRect(0, 0, 1, j), xA.fillRect(i - 1, 0, 1, j)
			}(a4h[aA].xA, i, j), a5q + 2 * j < i && (a4h[aA].xA.fillRect(i - a5q - j, 0, 1, j), a4h[aA].xA.fillText(af.zU[a4h[aA].j3], Math.floor((i - a5q) / 2), Math.floor(.57 * j))), 0 !== a4h[aA].id ? 0 : j);
		a4h[aA].xA.fillText(b8.zY.yB(a4h[aA].hH), Math.floor(i - a5q / 2 - rz), Math.floor(.57 * j)),
			function(aA, i, rz, a5v) {
				a4h[aA].xA.fillStyle = a5v ? b9.ml : b9.mh;
				a5v = Math.floor(a5q * a4h[aA].hH / a4h[aA].a62);
				a4h[aA].xA.fillRect(Math.floor(i - a5q - rz), j - a5r, a5v, a5r)
			}(aA, i, rz, a5v), 0 === a4h[aA].id ? (a5z(aA, i, a5v, hi), function(aA, i, a5v) {
				a4h[aA].xA.strokeStyle = a5v ? b9.n1 : b9.nB, a4h[aA].xA.fillRect(j, 0, 1, j);
				a5v = i - j;
				a4h[aA].xA.beginPath(), a4h[aA].xA.moveTo(Math.floor(.3 * j + a5v), Math.floor(j / 2)), a4h[aA].xA.lineTo(Math.floor(j - .3 * j + 0 + a5v), Math.floor(j / 2)), a4h[aA].xA.stroke(), a4h[aA].xA.beginPath(), a4h[aA].xA.moveTo(Math
					.floor(j / 2 + a5v), Math.floor(.3 * j)), a4h[aA].xA.lineTo(Math.floor(j / 2 + a5v), Math.floor(j - .3 * j + 0)), a4h[aA].xA.stroke()
			}(aA, i, a5v)) : a5z(aA, 2 * j, a5v, hi)
	}

	function a5z(aA, i, a5v, hi) {
		a4h[aA].xA.strokeStyle = a4h[aA].a63 ? b9.ms : a5v ? b9.nH : b9.nI, a4h[aA].xA.fillStyle = hi, a4h[aA].xA.fillRect(i - j, 0, 1, j), a4h[aA].xA.lineWidth = Math.max(Math.floor(j / 12), 3), a4h[aA].xA.lineCap = "round";
		a5v = .35;
		i = j + 1, a4h[aA].xA.beginPath(), a4h[aA].xA.moveTo(Math.floor(i - a5v * j + 0), Math.floor(a5v * j)), a4h[aA].xA.lineTo(Math.floor(i - j + a5v * j), Math.floor(j - a5v * j + 0)), a4h[aA].xA.stroke(), a4h[aA].xA.beginPath(), a4h[aA].xA
			.moveTo(Math.floor(i - j + a5v * j), Math.floor(a5v * j)), a4h[aA].xA.lineTo(Math.floor(i - a5v * j + 0), Math.floor(j - a5v * j + 0)), a4h[aA].xA.stroke()
	}

	function a6D(ed) {
		for (var hH, aA = ed - 1; 0 <= aA; aA--) hH = ac.fp(aC.eN, aA), a4h[aA].hH !== hH && (a4h[aA].hH = hH, a4h[aA].a62 = hH > a4h[aA].a62 ? hH : a4h[aA].a62, a4h[aA].a5u = !0)
	}

	function a5s(a6F) {
		a6F.canvas = document.createElement("canvas"), bQ.vU.font = a4U;
		var i = a5q;
		a6F.j3 < aC.ea && 0 === a6F.id && (i += Math.floor(bQ.vU.measureText(af.zU[a6F.j3] + "000").width)), i += j, 0 === a6F.id && (i += j), a6F.canvas.width = i, a6F.canvas.height = j, a6F.xA = a6F.canvas.getContext("2d", {
			alpha: !0
		}), a6F.xA.font = a4U, b8.pd.textBaseline(a6F.xA, 1), b8.pd.textAlign(a6F.xA, 1)
	}

	function a69(aA) {
		return aT.a6H() ? h.i - a4h[aA].canvas.width - ba.gap : aT.ek
	}

	function a6A(aA) {
		return Math.floor(2 * ba.gap + (aT.a6H() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dU = function() {
		a4h = [], this.resize()
	}, this.resize = function() {
		a4U = aM.a4U, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.r1() && (j = Math.floor(1.25 * j)), a5r = Math.floor(.15 * j), bQ.vU.font = a4U, a5q = Math.floor(bQ.vU.measureText("02 000 000 0000").width);
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a5s(a4h[aA]), a5t(aA)
	}, this.lU = function() {
		for (var aA = a4h.length - 1; 0 <= aA; aA--) a4h[aA].a5u && (a4h[aA].a5u = !1, a5t(aA))
	}, this.gq = function(kv, kw) {
		if (2 !== aC.yt && 0 !== af.li[aC.eN] && !aC.gm && !b8.fy.jG(aC.eN))
			for (var a64, a65, a66, a67 = z.a0.r1() ? j : 0, a68 = z.a0.r1() ? Math.floor(.15 * j) : 0, aA = a4h.length - 1; 0 <= aA; aA--)
				if (a64 = a69(aA), a65 = a6A(aA), a66 = a4h[aA].canvas.width, a65 - a68 <= kw && kw <= a65 + j + a68) {
					if (a64 - a67 <= kv && kv <= a64 + j + a67) return a4h[aA].a63 || (a4h[aA].a5u = !0, a4h[aA].a63 = !0, 0 === a4h[aA].id && b6.gz.oD(a4h[aA].j3)), !0;
					if (0 === a4h[aA].id && a64 + a66 - j - a67 <= kv && kv <= a64 + a66 + a67) return bT.a4A(3), b6.gz.hA(aQ.h4(), a4h[aA].j3), !0
				} return !1
	}, this.im = function() {
		var ed;
		0 === af.li[aC.eN] || b8.fy.jG(aC.eN) && !aC.gm || (function(ed) {
			if (a4h.length !== ed) return 1;
			for (var aA = ed - 1; 0 <= aA; aA--)
				if (a4h[aA].id !== ac.fj(aC.eN, aA) || a4h[aA].j3 !== ac.fo(aC.eN, aA)) return 1;
			return
		}(ed = ac.fi(aC.eN)) && function(ed) {
			var aA, id, j3, ex, hH, a4v = [];
			loop: for (aA = 0; aA < ed; aA++) {
				for (id = ac.fj(aC.eN, aA), j3 = ac.fo(aC.eN, aA), ex = 0; ex < a4h.length; ex++)
					if (a4h[ex].id === id && a4h[ex].j3 === j3) {
						a4v.push(a4h.splice(ex, 1)[0]);
						continue loop
					} hH = ac.fp(aC.eN, aA), a5s(hH = {
					j3: j3,
					hH: hH,
					a62: hH,
					id: id,
					a5u: !0,
					a63: !1,
					canvas: null,
					xA: null
				}), a4v.push(hH)
			}
			a4h = a4v
		}(ed), a6D(ed))
	}, this.a6G = function(gA) {
		for (var ed = Math.min(a4h.length, ac.fi(aC.eN)), aA = 0; aA < ed; aA++)
			if (a4h[aA].j3 === gA) return void(a4h = [])
	}, this.tk = function() {
		if (0 !== af.li[aC.eN] && (!b8.fy.jG(aC.eN) || aC.gm))
			for (var aA = a4h.length - 1; 0 <= aA; aA--) tl.drawImage(a4h[aA].canvas, a69(aA), a6A(aA))
	}
}

function cC() {
	var a4h, jx, a6I, a6J, j, a4U, fontSize, a6K, a6L, a6M, a6N, canvas, xA, lv, a6O;

	function u2(aA) {
		return L(0 === aA ? 102 : 1 === aA ? 103 : 2 === aA ? 104 : 105)
	}

	function a6V() {
		tl.drawImage(canvas, ba.gap + (aC.hS ? ba.gap + bf.a6W() : 0), a6X + 2 * ba.gap)
	}

	function a6P() {
		canvas.width = a4h[0].width + a6M, canvas.height = j + a6M, (xA = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4h[0].width + a6M, j + a6M), xA.translate(Math.floor(a6M / 2), Math.floor(a6M / 2)), xA.lineWidth = a6M, xA.fillStyle = 1 === a4h[0].a6U ? b9.mo : b9.mg, a6Y(), xA.fill(), xA.strokeStyle = 1 === a4h[0].a6U ? b9.ma :
			b9.mj, a6Y(), xA.stroke(), b8.pd.textAlign(xA, 1), b8.pd.textBaseline(xA, 1), xA.fillStyle = 1 === a4h[0].a6U ? b9.ma : b9.mj, xA.font = a4U[0], xA.fillText(u2(a4h[0].a6T), Math.floor(a4h[0].width / 2), Math.floor(.72 * a6K[0] * j)), xA
			.font = a4U[1], xA.fillText(a4h[0].pK, Math.floor(a4h[0].width / 2), Math.floor((a6K[0] + .48 * a6K[1]) * j))
	}

	function a6Y() {
		xA.beginPath(), xA.moveTo(a6N, 0), xA.lineTo(a4h[0].width - a6N, 0), xA.lineTo(a4h[0].width, a6N), xA.lineTo(a4h[0].width, j - a6N), xA.lineTo(a4h[0].width - a6N, j), xA.lineTo(a6N, j), xA.lineTo(0, j - a6N), xA.lineTo(0, a6N), xA.closePath()
	}
	this.dU = function() {
		jx = 4, a6I = a6J = lv = 0, a4h = [], a4U = new Array(2), fontSize = new Array(2), (a6K = new Array(2))[0] = .3, a6K[1] = .7, a6L = new Array(4), canvas = document.createElement("canvas"), a6O = bd.eC + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.r1() ? .0725 : .058) * h.pf), fontSize[0] = Math.floor(.85 * a6K[0] * j), fontSize[1] = Math.floor(.85 * a6K[1] * j), a4U[0] = b8.pd.rS(1, fontSize[0]), a4U[1] = b8.pd.rS(1, fontSize[1]), aA = a6L.length -
			1; 0 <= aA; aA--) a6L[aA] = this.measureText(u2(aA) + "000", a4U[0]);
		if (a6M = Math.floor(1 + .05 * j), a6N = Math.floor(.2 * j), 0 < a4h.length) {
			for (aA = a4h.length - 1; 0 <= aA; aA--) i = this.measureText(a4h[aA].pK + "00", a4U[1]), a4h[aA].width = i < a6L[aA] ? a6L[aA] : i;
			a6P()
		}
	}, this.im = function() {
		0 !== jx && (4 === jx ? bd.eC > a6O && (jx = 0, 1 === aC.yt) && aP.zG(bQ.vO.vP[bQ.eJ].name, 3, 1, 9) : (1 === jx ? (0 === a6I && (a6P(), a6I = 1e-4), 1 <= (a6I += .002 * (bd.eC - lv)) && (a6J = 0, jx = 2, a6I = 1), bd.dc = !0) : 2 ===
			jx ? ((a6J += (bd.eC - lv) / 1e3) > a4h[0].e5 || 1 < a6J && 1 < a4h.length) && (jx = 3) : 3 === jx && ((a6I -= .002 * (bd.eC - lv)) <= 0 && (a6I = 0, a4h.shift(), jx = 0 < a4h.length ? 1 : 0), bd.dc = !0), lv = bd.eC))
	}, this.measureText = function(pK, a4U) {
		return tl.font = a4U, Math.floor(tl.measureText(pK).width)
	}, this.j0 = function(a6S, aA) {
		this.zG(af.zU[a6S], aA, 1, 0 === aA ? 3 : 7)
	}, this.zG = function(pK, a6T, a6U, e5) {
		var i;
		pK.length && (i = (i = this.measureText(pK + "00", a4U[1])) < a6L[a6T] ? a6L[a6T] : i, a4h.push({
			pK: pK,
			width: i,
			a6T: a6T,
			a6U: a6U,
			e5: e5
		}), 0 === jx) && (a6I = 0, jx = 1, lv = bd.eC)
	}, this.tk = function() {
		0 !== jx && 0 !== a6I && (a6I < 1 ? (tl.globalAlpha = a6I, a6V(), tl.globalAlpha = 1) : a6V())
	}
}

function ck() {
	var j, canvas, xA, a6Z, a6a, a6b, a6c, a5u, a6d, a6e, a6f, a6g, a5S = !1,
		a1m = (this.hK = !1, this.i = 0, new Array(2)),
		a6h = 0;

	function lV() {
		var i = au.i,
			ka = (a5u = !1, x9(xA, i, j), Math.floor(i / 2));
		1 === a6Z ? (xA.fillStyle = b9.n3, xA.fillRect(ka, 0, ka, j)) : -1 === a6Z && (xA.fillStyle = b9.nJ, xA.fillRect(0, 0, ka, j)), xB(xA, i, j, 2);
		var ka = (ka = Math.floor(.25 * j)) < 2 ? 2 : ka,
			a5b = (xA.fillStyle = b9.mp, Math.floor((j - 4) * a6a[1] / a6b[1]));
		0 < a5b && xA.fillRect(2, j - 2 - a5b, ka, a5b), 0 < (a5b = Math.floor((j - 4) * a6a[0] / a6b[0])) && xA.fillRect(i - 2 - ka, j - 2 - a5b, ka, a5b);
		ka = (ka = Math.floor(j / 8)) < 2 ? 2 : ka, xD(xA, Math.floor(.4 * j), 0, j, ka, .5, !1), xD(xA, Math.floor(i - 1.4 * j), 0, j, ka, .5, !0), a5b = 1.1 * j / a1m[0].width;
		xA.imageSmoothingEnabled = !0, xA.setTransform(a5b, 0, 0, a5b, (i - a5b * a1m[0].width) / 2, -.05 * j), xA.drawImage(a1m[+a5S], 0, 0), xA.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6m() {
		a6g = -1, a5S = ag.a6n(), aM.a3F(257), aM.a5R(a5S), au.hK = !0, a5u = !0, a6d = 360;
		for (var f5, di = 0, aA = ak.jt - 1; 0 <= aA; aA--) b8.fy.jG(ak.ju[aA]) || (di += af.gQ[ak.ju[aA]]);
		a5S ? a6b[0] = Math.max(bJ.dj(3 * di, 4), 1) : aC.hS ? 9 === aC.k9 && 8 === be.kE[bf.l4()] ? a6b[0] = Math.max(di, 1) : (f5 = bJ.dj(100 * bf.a2j(), aC.jc), f5 = bJ.pB(200 - 2 * f5, 40, 100), f5 = bJ.dj(f5 * di, 100), a6b[0] = Math.max(f5,
			1)) : a6b[0] = Math.max(bJ.dj(3 * di, 5), 1), a6b[1] = Math.max(di - a6b[0], 1)
	}

	function a6i() {
		a6f = bd.jp(), a5u = !0, a6d = a6Z = 0, a6c = [], au.hK = !1, aM.z0(247), a6a[0] = a6a[1] = 0, aM.a3F(673)
	}

	function x6() {
		return aQ.a56(aM.a52()) ? __fx.settings.keybindButtons ? aQ.em - 2 * (j + ba.gap) : aQ.em - j - ba.gap : bA.a56(aM.a55()) ? bA.x6() - j - ba.gap : h.j - j - bi.a3s() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1m[aA] = b8.canvas.xg(aa.get(3), 8 - aA, b9.ns), a1m[aA] = b8.canvas.a1o(a1m[aA])
	}, this.dU = function() {
		a6f = -1e4, a6e = a6h = 0, a6g = -1, this.hK = !1, a5u = a5S = !1, a6a = [a6Z = a6d = 0, 0], a6b = [1, 1], a6c = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, xA = canvas.getContext("2d", {
			alpha: !0
		}), lV()
	}, this.lU = function() {
		a5u && lV()
	}, this.gq = function(ek, em) {
		return !!this.hK && !(ek < h.i - this.i - ba.gap || em < x6() || (aC.gm || this.hL(aC.eN) && (aL.gn && aL.a12(), b6.gz.hM(ek > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.im = function() {
		0 < a6e ? 0 === --a6e && a6i() : this.hK ? 180 == --a6d && 3 * a6a[0] < a6b[0] ? a6i() : a6a[0] >= a6b[0] ? a5S ? bP.yW.yo() : bP.yW.ys() : a6a[1] >= a6b[1] ? a6e = 4 : a6d <= 0 && a6i() : ! function() {
			var a6p = bd.jp();
			if (a6p % 40 == 14) {
				if (a6h) return !(a6p < a6h) && !(a6p < a6f + 535) && (a6h = a6p + 1071, b8.fy.a2L()) ? (a6m(), 1) : 0;
				(1 === ak.jt || (aC.hS ? bf.a2j() : af.gQ[l7[0]]) >= bJ.dj(96 * aC.jc, 100)) && (a6h = a6p + 535)
			}
			return
		}() && 0 <= a6g && (aM.zH(250, L(106, [af.zU[a6g]]), 673, a6g, b9.mj, b9.mg, -1, !0), a6m())
	}, this.yu = function() {
		this.hK && a6a[0] < a6b[0] && a6i()
	}, this.pD = function(player, a6q) {
		var a6r = L(a6q ? 107 : 108, [af.zU[player]]),
			a6r = (aM.zH(450, a6r, 257, player, a6q ? b9.n1 : b9.nG, b9.mg, -1, !0), a6c.push(player), a5u = !0, aC.kB ? Math.max(a6b[0], a6b[1]) : af.gQ[player]),
			a6r = Math.max(a6r, 1);
		a6q ? a6a[0] += a6r : a6a[1] += a6r, player === aC.eN && (a6Z = a6q ? 1 : -1)
	}, this.tk = function() {
		var em;
		this.hK && (em = x6(), tl.drawImage(canvas, h.i - this.i - ba.gap, em))
	}, this.hN = function(player) {
		return !(!aC.kB && bd.jp() < a6f + 140 || 0 !== a6d || !b8.fy.go(1) || !b8.fy.gp(player) || 10 <= jd[player] && !b8.fy.a2e(player, 9))
	}, this.hL = function(gA) {
		if (!b8.fy.go(1)) return !1;
		if (!b8.fy.gp(gA)) return !1;
		if (!this.hK) return !1;
		for (var aA = a6c.length - 1; 0 <= aA; aA--)
			if (a6c[aA] === gA) return !1;
		return !0
	}, this.hJ = function(player) {
		a6g = player
	}
}

function cD() {
	var i, ek, a6s, canvas, xA, hK, iC, a36, a4U, a5u, a6t = 11 / 12;

	function a6v() {
		var a61 = Math.floor(iC * (i - 2 * a6s)),
			a6y = 1 + Math.floor(.0625 * aQ.j),
			a6z = 1 + Math.floor(.3 * aQ.j),
			a70 = Math.floor(.55 * aQ.j);
		xA.clearRect(0, 0, i, aQ.j), xA.fillStyle = b9.mf, xA.fillRect(0, 0, a6s, aQ.j), xA.fillRect(a6s + a61, 0, i - a6s - a61, aQ.j), xA.fillStyle = iC < 1 / 3 ? "rgba(" + Math.floor(3 * iC * 130) + ",130,0,0.85)" : iC < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iC - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iC - 2 / 3) * 130) + ",0.85)", xA.fillRect(a6s, 0, a61, aQ.j), xA.fillStyle = b9.mj, xA.fillRect(0, 0, i, 1), xA.fillRect(0, aQ.j - 1, i, 1), xA
			.fillRect(0, 0, 1, aQ.j), xA.fillRect(a6s, 0, 1, aQ.j), xA.fillRect(a6s + a61, 0, 1, aQ.j), xA.fillRect(i - a6s, 0, 1, aQ.j), xA.fillRect(i - 1, 0, 1, aQ.j), xA.fillRect(Math.floor(.25 * aQ.j) + a6z, Math.floor((aQ.j - a6y) / 2), aQ.j -
				2 * a6z, a6y), xA.fillRect(Math.floor(i - 1.25 * aQ.j) + a6z, Math.floor((aQ.j - a6y) / 2), aQ.j - 2 * a6z - a6z % 2, a6y), xA.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6y) / 2), a6z, a6y, aQ.j - 2 * a6z - a6z % 2),
			a36 = b8.fy.iB(aC.eN, aQ.h4()), xA.fillText(b8.zY.yB(a36) + " (" + b8.zY.a2z(100 * iC, +(iC < .1)) + ")", Math.floor(.5 * i), a70)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iC = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0y(arg1);

	function a75(a1L) {
		return !(1 < a1L && 1 === iC || (1 < a1L && a1L * iC - iC < 1 / 1024 ? a1L = (iC + 1 / 1024) / iC : a1L < 1 && iC - a1L * iC < 1 / 1024 && (a1L = (iC - 1 / 1024) / iC), iC = bJ.pB(iC * a1L, 1 / 1024, 1), a6v(), 0))
	}

	function a76(kv) {
		return iC !== (iC = bJ.pB((kv - ek - a6s) / (i - 2 * a6s), 1 / 1024, 1)) && (a6v(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a6v(), bd.dc = !0
	}, this.em = 0, this.gr = !1, this.dU = function() {
		hK = !aC.gy && !aC.gm, a5u = !1, iC = .5, a36 = 0, this.gr = !1, this.resize()
	}, this.resize = function() {
		z.a0.r1() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pf), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.r1() ? .65 : .389) * h.pf), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6s = Math.floor(3 * this.j / 2), a4U = b8
			.pd.rS(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, tl), canvas.height = this.j, (xA = canvas.getContext("2d", {
				alpha: !0
			})).font = a4U, b8.pd.textBaseline(xA, 1), b8.pd.textAlign(xA, 1), this.a6u(), a6v()
	}, this.a6u = function() {
		ek = z.a0.r1() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.em = h.j - this.j - bi.a3s() * ba.gap
	}, this.lU = function() {
		a5u && (a5u = !1, a6v())
	}, this.hK = function() {
		return !(!hK || aL.gn && ek < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a56 = function(a71) {
		return !!this.hK() && ek + i > h.i - a71 - ba.gap
	}, this.a3D = function() {
		hK = !aC.gm
	}, this.a6i = function() {
		hK = !1
	}, this.h4 = function() {
		return bJ.pB(Math.floor(1024 * iC + .5) - 1, 0, 1023)
	}, this.a0v = function(kv, kw) {
		return this.hK() && ek < kv && kv < ek + i && kw > this.em
	}, this.gq = function(kv, kw) {
		if (!this.hK()) return !1;
		if (!(__fx.settings.keybindButtons && kw > this.em - Math.floor(ba.gap / 4) - this.j && kw < this.em - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(kv - ek))) {
			if (!aQ.a0v(kv, kw)) return !1;
			aR.mE = !1, ! function(rF, kv, kw) {
				if (function(kv, kw) {
						return ek < kv && kv < ek + a6s && kw > aQ.em
					}(kv, kw)) return a75(a6t);
				if (function(kv, kw) {
						return ek + i - a6s < kv && kv < ek + i && kw > aQ.em
					}(kv, kw)) return a75(1 / a6t);
				return rF.gr = !0, a76(kv)
			}(this, kv, kw) || (bd.dc = !0)
		}
		return !0
	}, this.a0y = function(mL) {
		0 !== aC.yt && this.hK() && a75(mL) && (bd.dc = !0)
	}, this.a0U = function(deltaY) {
		var mL;
		return !(0 === deltaY || !this.hK()) && a75(mL = 0 < deltaY ? (mL = 400 / (400 + deltaY)) < a6t ? a6t : mL : 1 / a6t < (mL = (400 - deltaY) / 400) ? 1 / a6t : mL)
	}, this.a0R = function(kv) {
		return !!this.gr && a76(kv)
	}, this.a0r = function() {
		this.gr = !1
	}, this.im = function() {
		this.hK() && a36 !== b8.fy.iB(aC.eN, this.h4()) && (a5u = !0)
	}, this.tk = function() {
		this.hK() && (tl.drawImage(canvas, ek, this.em), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(tl, ek, this.em)
	}
}

function cu() {
	var canvas, xA, a77, font, a78 = 0,
		a79 = !1,
		a7A = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a7B = 5;

	function a7H() {
		if (a79) {
			var aA, ed = a7A.length,
				a70 = Math.floor(.5 * a77.j),
				j = ed * a70,
				ek = Math.floor(Math.floor(a77.ek) + .3 * a77.i - .5),
				em = Math.floor(Math.floor(a77.em) - j),
				i = Math.floor(.4 * a77.i + 2.5);
			for (tl.fillStyle = b9.mf, tl.fillRect(ek, em, i, j), tl.fillStyle = b9.n8, tl.fillRect(ek, em + a7B * a70, i, a70), tl.fillStyle = b9.mj, tl.fillRect(ek, em, 2, j), tl.fillRect(ek, em, i, 2), tl.fillRect(ek + i - 2, em, 2, j), aA =
				1; aA < ed; aA++) tl.fillRect(ek, em + aA * a70, i, 2);
			for (tl.fillStyle = b9.mj, b8.pd.textAlign(tl, 1), b8.pd.textBaseline(tl, 1), tl.font = b8.pd.rS(0, .6 * a70), ek += .5 * i, aA = 0; aA < ed; aA++) tl.fillText(a7P(aA), ek, em + (aA + .6) * a70)
		}
		tl.drawImage(canvas, Math.floor(a77.ek), Math.floor(a77.em))
	}

	function lV(rF) {
		var ek, m9, mA, a70;
		xA.clearRect(0, 0, Math.floor(a77.i), Math.floor(a77.j)), xA.fillStyle = b9.mf, xA.fillRect(0, 0, Math.floor(a77.i), Math.floor(a77.j)), aC.mC && (xA.fillStyle = b9.n8, xA.fillRect(0, 0, Math.floor(.3 * a77.i), Math.floor(a77.j))), xA
			.fillStyle = b9.mj, xA.fillText("Hide UI", .15 * a77.i, .5 * a77.j), xA.fillRect(Math.floor(.3 * a77.i - .5), 0, 2, Math.floor(a77.j)), ek = .5 * a77.i, xA.fillText("Replay Speed", ek, .31 * a77.j), xA.fillText(a7P(a7B), ek, .69 * a77.j),
			xA.fillRect(Math.floor(.7 * a77.i - .5), 0, 2, Math.floor(a77.j)), rF.a3k ? (ek = Math.floor(.02 * a77.i), rF = Math.floor(.025 * a77.i), m9 = Math.floor(.85 * a77.i - ek - .5 * rF), mA = Math.floor(.25 * a77.j), a70 = Math.floor(a77.j) -
				2 * mA, xA.fillRect(m9, mA, ek, a70), xA.fillRect(m9 + ek + rF, mA, ek, a70)) : function() {
				var i = Math.floor(.46 * a77.j),
					j = Math.floor(.23 * a77.j),
					ek = Math.floor(.85 * a77.i - .5 * i + i / 12),
					em = Math.floor(.5 * a77.j - j);
				xA.beginPath(), xA.moveTo(ek, em), xA.lineTo(ek + i, em + j), xA.lineTo(ek, em + (j << 1)), xA.fill()
			}(), xA.fillRect(0, 0, Math.floor(a77.i), 2), xA.fillRect(0, 0, 2, Math.floor(a77.j)), xA.fillRect(0, Math.floor(a77.j) - 2, Math.floor(a77.i), 2), xA.fillRect(Math.floor(a77.i - 2), 0, 2, Math.floor(a77.j))
	}

	function a7P(aA) {
		return 5 === aA ? "Normal" : "" + a7A[aA]
	}
	this.a3k = !1, this.dU = function() {
		aC.gm && (a7B = 5, this.a3k = !1, a79 = !1, a77 = new qF([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a7C = function() {
		return a7A[a7B]
	}, this.x6 = function() {
		return a77.em
	}, this.a56 = function(a71) {
		return !!aC.gm && a77.ek + a77.i > h.i - a71 - ba.gap
	}, this.resize = function() {
		aC.gm && (a77.resize(), a77.em -= (bi.a3s() - 1) * ba.gap, font = b8.pd.rS(0, .3 * a77.j), (canvas = document.createElement("canvas")).width = Math.floor(a77.i), canvas.height = Math.floor(a77.j), (xA = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pd.textAlign(xA, 1), b8.pd.textBaseline(xA, 1), lV(this))
	}, this.a11 = function(a7D) {
		0 === aC.yt || s.hK() || a7D !== aC.mC && (aC.mC = a7D, bf.resize(), bd.dc = !0, aC.gm) && (a78 = bd.eC + 2e3, lV(this))
	}, this.gq = function(ek, em) {
		if (!aC.gm) return !1;
		if (ek < a77.ek || em < a77.em || ek > a77.ek + a77.i) return a79 && function(rF, ek, em) {
			var ed = a7A.length,
				a70 = Math.floor(.5 * a77.j),
				j = ed * a70,
				m9 = Math.floor(Math.floor(a77.ek) + .3 * a77.i - .5),
				j = Math.floor(Math.floor(a77.em) - j),
				i = Math.floor(.4 * a77.i + 2.5);
			return a79 = !1, bd.dc = !0, ek < m9 || m9 + i < ek || em < j || (a7B = a7G(0, Math.floor((em - j) / a70), ed - 1), lV(rF)), !0
		}(this, ek, em);
		if ((ek -= a77.ek) < .3 * a77.i) a79 = !1, this.a11(!aC.mC);
		else {
			if (ek < .7 * a77.i) return a79 = !a79, bd.dc = !0;
			this.a13(!1)
		}
		return !0
	}, this.a13 = function(a7F) {
		2 === aC.yt ? (this.a11(!1), s.t(3)) : (a79 = !1, this.a3k = !this.a3k, this.a3k ? (aL.gn && aL.a12(), z.a0.setState(1)) : a7F || aL.a4a(), bd.dc = !0, lV(this))
	}, this.a14 = function() {
		this.a3k = !1, aL.a4a(), bd.dc = !0, lV(this)
	}, this.a0k = function(ek, em) {
		return !!aC.mC && (0 <= aL.gq(ek, em) || (aC.gm ? ((bd.eC > a78 || !this.gq(ek, em)) && aR.gq(ek, em), bd.dc = !0, a78 = bd.eC + 2e3) : aR.gq(ek, em)), !0)
	}, this.im = function() {
		aC.gm && aC.mC && bd.eC > a78 - 1e3 && bd.eC < a78 && (bd.dc = !0)
	}, this.z1 = function() {
		aC.gm && (this.a3k = !1, bd.dc = !0, lV(this))
	}, this.tk = function() {
		if (aC.gm) {
			if (aC.mC) {
				if (bd.eC > a78) return;
				if (bd.eC > a78 - 1e3) return tl.globalAlpha = a7G(0, (1e3 - (bd.eC - (a78 - 1e3))) / 1e3, 1), a7H(), void(tl.globalAlpha = 1)
			}
			a7H()
		}
	}
}

function cE() {
	var a7Q, a7R, i, ek, em, a7S, a7T;
	this.dU = function() {
		a7Q = new Array(2), a7R = new Array(2), this.mE = !1, a7T = a7S = iF = iD = 0, iE = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.r1() ? .072 : .0502) * h.pf)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7Q[aA] = document.createElement("canvas"), a7Q[aA].width = i, a7Q[aA].height = i, a7R[aA] = a7Q[aA].getContext("2d", {
			alpha: !0
		});
		this.a6u(),
			function() {
				for (var a7i = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7R[aA].clearRect(0, 0, i, i), a7R[aA].fillStyle = b9.mc, a7R[aA].beginPath(), a7R[aA].arc(i / 2, i / 2, i / 2 - a7i, 0, 2 * Math.PI), a7R[aA].fill(), a7R[aA]
					.lineWidth = a7i, a7R[aA].fillStyle = b9.mj, a7R[aA].strokeStyle = b9.mj, a7R[aA].beginPath(), a7R[aA].arc(i / 2, i / 2, i / 2 - a7i, 0, 2 * Math.PI), a7R[aA].stroke(), xD(a7R[aA], 0, 0, i, a7i, .3, 0 === aA)
			}()
	}, this.x5 = function() {
		return -iD / iE
	}, this.x6 = function() {
		return -iF / iE
	}, this.mO = function(a7X, hv) {
		iD = iE * a7X - hv
	}, this.mP = function(a7Y, hw) {
		iF = iE * a7Y - hw
	}, this.gq = function(a7W, a57) {
		return aC.mC || ! function(a7W, a57) {
			return Math.pow(a7W - (ek + i / 2), 2) + Math.pow(a57 - (em + i / 2), 2) < i * i / 4 || Math.pow(a7W - (ek + i / 2), 2) + Math.pow(a57 - (em + 2 * i), 2) < i * i / 4
		}(a7W, a57) || bh.eA.data[8].value ? (aG.mR() && (this.mE = !0, a7S = a7W, a7T = a57), !1) : a57 < em + 1.25 * i ? this.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0U(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0R = function(a7W, a57) {
		var a7Z, a7a, hy, i1;
		return !aG.mR() || (a7Z = iD, a7a = iF, iD += hy = a7S - a7W, iF += i1 = a7T - a57, ae.a0R(hy, i1), this.a7b(), a7S = a7W, a7T = a57, a7Z !== iD) || a7a !== iF
	}, this.a0U = function(kv, kw, deltaY) {
		var mL;
		if (aG.mR()) {
			if (0 < deltaY) mL = (mL = 500 / (500 + deltaY)) < .5 ? .5 : mL;
			else {
				if (!(deltaY < 0)) return !1;
				mL = 2 < (mL = (500 - deltaY) / 500) ? 2 : mL
			}
			this.a7c(kv, kw, mL), bd.dc = !0
		}
		return !0
	}, this.a7c = function(ek, em, eH) {
		var a1L;
		eH = a1L = (a1L = 1024 < (a1L = eH) * iE ? 1024 / iE : a1L) * iE < .125 ? .125 / iE : a1L, ae.zoom(eH, ek, em),
			function(a1L, kv, kw) {
				iE *= a1L, iD = (iD + kv) * a1L - kv, iF = (iF + kw) * a1L - kw, aR.a7b()
			}(eH, ek, em)
	}, this.a7b = function() {
		var a7f = h.i / 16,
			hg = 0,
			a7g = h.j / 16,
			hh = 0;
		iD < -h.i + a7f && (hg = -h.i + a7f - iD), iD > iE * bQ.eo - a7f && (hg = iE * bQ.eo - a7f - iD), iF < -h.j + a7g && (hh = -h.j + a7g - iF), iF > iE * bQ.ep - a7g && (hh = iE * bQ.ep - a7g - iF), iD += hg, iF += hh, bY.mQ(), ae.a7h(hg,
			hh)
	}, this.a6u = function() {
		ek = h.i - i - ba.gap, em = Math.floor(h.j / 2 - 1.25 * i)
	}, this.tk = function() {
		bh.eA.data[8].value || (tl.drawImage(a7Q[0], ek, em), tl.drawImage(a7Q[1], ek, Math.floor(em + 3 * i / 2)))
	}
}

function cF() {
	var g, a7j, a7k, a7l, gap, a7m, a7n, a7o, a7p, a7q, a4U, a7r, gh, a7s, a61, a7t, a7u, a7v;

	function a7z() {
		a7l = Math.floor(.2 * (z.a0.r1() ? .07 : .035) * h.pf), a7l = a54(z.a0.r1() ? 3 : 1, a7l);
		var a82 = h.i / (g.length + gap);
		a7l = a7l < a82 ? a82 : a7l, a61 = Math.floor((1 - gap) * a7l), a7j = 0, a83()
	}

	function a83() {
		a7j = (a7j = a7j < -20 ? -20 : a7j) > (g.length - 15) * a7l ? (g.length - 15) * a7l : a7j, a7n = Math.floor(a7j / a7l), a7o = (a7o = a7n + Math.floor(h.i / a7l)) > g.length - 1 ? g.length - 1 : a7o, a7n = (a7n = a7o < a7n ? a7o : a7n) < 0 ?
			0 : a7n;
		var ka = a7o;
		a7m = a7k / g[ka];
		for (var aA = a7o - 1; a7n <= aA; aA--) g[aA] > g[ka] && (ka = aA, a7m = a7k / Math.pow(g[aA], a7s))
	}

	function a86(ek) {
		ek = Math.floor((a7j + h.i - ek - gap * a7l) / a7l);
		return (ek = ek < -1 ? -1 : -1 === ek ? 0 : ek > g.length - 1 ? -1 : ek) !== a7p && (a7p = ek, -1 === a7t && 0 === a7p && aS.a7w && (a7t = setInterval(a87, 100)), 1)
	}

	function a88(aA) {
		var a5r = Math.floor(a7m * Math.pow(g[aA], a7s));
		tl.fillRect(a7j + h.i - (aA + 1) * a7l, h.j - a5r, a61, a5r)
	}

	function a87() {
		var gA;
		0 !== (a7p = 8 === aZ.a05() ? -1 : a7p) ? (a7u = (new Date).getTime(), clearInterval(a7t), a7t = -1) : (gA = g[1] / 864e3, -1 !== a7u && (gA += ((new Date).getTime() - a7u) * g[1] / 864e5, a7u = -1), 0 < gA && (g[0] += Math.floor(gA), bd
			.dc = !0))
	}
	this.a7w = !1, this.dU = function() {
		a7u = a7t = -1, a7p = -(a7s = 1), this.a7x = !1, gh = 0, a7r = new Date, a7j = 0, gap = .3, (a7v = []).push({
			g5: "Plateau A",
			ed: 0,
			e: 57
		}), a7v.push({
			g5: "Max A",
			ed: 1,
			e: 1
		}), a7v.push({
			g5: "Black Friday",
			ed: 15,
			e: 15
		}), a7v.push({
			g5: "Max B",
			ed: 19,
			e: 19
		}), a7v.push({
			g5: "Max C",
			ed: 44,
			e: 44
		}), a7v.push({
			g5: "First Android Version",
			ed: 58,
			e: 58
		}), a7v.push({
			g5: "Max D",
			ed: 67,
			e: 67
		}), a7v.push({
			g5: "The iFrame Explosion",
			ed: 98,
			e: 99
		}), a7v.push({
			g5: "The 155-Day Uptrend",
			ed: 58,
			e: 213
		}), a7v.push({
			g5: "Max E",
			ed: 213,
			e: 213
		}), a7v.push({
			g5: "Plateau B",
			ed: 214,
			e: 259
		}), a7v.push({
			g5: "Turbulent Times",
			ed: 260,
			e: 344
		}), a7v.push({
			g5: "Max F",
			ed: 262,
			e: 262
		}), a7v.push({
			g5: "Max G",
			ed: 282,
			e: 282
		}), a7v.push({
			g5: "Max H",
			ed: 333,
			e: 333
		}), a7v.push({
			g5: "The 19-Day Downtrend",
			ed: 283,
			e: 301
		}), a7v.push({
			g5: "Plateau C",
			ed: 345,
			e: 385
		}), a7v.push({
			g5: "The Alliance Ascent",
			ed: 386,
			e: 395
		}), a7v.push({
			g5: "Max I",
			ed: 395,
			e: 395
		}), a7v.push({
			g5: "First iOS Version",
			ed: 411,
			e: 411
		}), a7v.push({
			g5: "Plateau D",
			ed: 396,
			e: 453
		}), a7v.push({
			g5: "The TikTok Revolution",
			ed: 454,
			e: 470
		}), a7v.push({
			g5: "Max J",
			ed: 456,
			e: 456
		}), a7v.push({
			g5: "Max K",
			ed: 472,
			e: 472
		}), a7v.push({
			g5: "Max L",
			ed: 478,
			e: 478
		}), a7v.push({
			g5: "YT Drew",
			ed: 471,
			e: 485
		}), a7v.push({
			g5: "Plateau E",
			ed: 485,
			e: 600
		}), a7v.push({
			g5: "Uptrend A",
			ed: 600,
			e: 613
		}), a7v.push({
			g5: "Max M",
			ed: 613,
			e: 613
		}), a7v.push({
			g5: "Downtrend A",
			ed: 614,
			e: 635
		}), a7v.push({
			g5: "Plateau F",
			ed: 636,
			e: 737
		}), a7v.push({
			g5: "End of Record",
			ed: 738,
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
		a7k = Math.floor(.15 * h.j), a7q = (a7q = Math.floor((z.a0.r1() ? .018 : .0137) * h.pf)) < 2 ? 2 : a7q, a4U = b8.pd.rS(1, a7q), a7z()
	}, this.a80 = function(a81) {
		var aA;
		for (this.a7w = !0, aA = 0; aA < a81.length; aA++) g.unshift(a81[aA]);
		a7z(), bd.dc = !0
	}, this.a84 = function() {
		a83()
	}, this.a0R = function(ek, em) {
		em > h.j - .6 * a7k ? this.a7x ? ek !== gh && (a7j += ek - gh, gh = ek, a83(), a86(ek), this.a7x = -1 !== a7p, bd.dc = !0) : a86(ek) && (bd.dc = !0) : this.qd()
	}, this.qd = function() {
		-1 !== a7p && (this.a7x = !1, a7p = -1, bd.dc = !0)
	}, this.a0U = function(ek, deltaY) {
		-1 !== a7p && (a7j += Math.floor(deltaY), a83(), a86(ek), bd.dc = !0)
	}, this.gq = function(ek, em) {
		this.a0R(ek, em), -1 !== a7p && (gh = ek, this.a7x = !0)
	}, this.a0q = function() {
		-1 !== a7p && (this.a7x = !1)
	}, this.tk = function() {
		tl.fillStyle = b9.mm;
		for (var a8A, month, di, s0, a8D, a8E, mA, a8F, a8G, aA = a7o; a7n <= aA; aA--) a88(aA);
		this.a7w && 0 === a7n && (tl.fillStyle = b9.nJ, a88(0)), -1 !== a7p && (tl.fillStyle = b9.ml, a88(a7p)), -1 !== a7p && (tl.font = a4U, b8.pd.textBaseline(tl, 2), (di = new Date).setTime(a7r.getTime() - 1e3 * a7p * 60 * 60 * 24), month =
			"month", a8A = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(di), a8A = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(di)), a8A = a8A + ", " + di.getUTCDate() + " " + month + " " + di.getFullYear(), month = 1 === g[a7p] ? L(109) : L(110), month = b8.zY.yB(g[a7p]) + " " + month, di = Math.floor(tl.measureText(a8A).width), s0 = Math
			.floor(tl.measureText(month).width), a8D = Math.floor(.5 * (di + a7q)), a8E = (a8E = a7j + h.i - (a7p + 1) * a7l) < a8D ? a8D : a8E > h.i - a8D ? h.i - a8D : a8E, mA = h.j - Math.floor(a7m * Math.pow(g[a7p], a7s)), a8F = Math
			.floor(1.1 * a7q), a8G = mA > h.j - a8F ? h.j - a8F : mA, tl.fillStyle = b9.mg, tl.fillRect(h.i - s0 - a7q, a8G - a8F, s0 + a7q, a8F), tl.fillRect(a8E - a8D, h.j - a8F, di + a7q, a8F), tl.fillStyle = b9.mj, b8.pd.textAlign(tl, 2),
			tl.fillText(month, Math.floor(h.i - .5 * a7q), a8G),
			function(mA, a8F) {
				for (var rz, kc = -1, dy = g.length - a7p - 1, aA = a7v.length - 1; 0 <= aA; aA--) dy >= a7v[aA].ed && dy <= a7v[aA].e && (-1 === kc || a7v[aA].e - a7v[aA].ed < a7v[kc].e - a7v[kc].ed) && (kc = aA); - 1 !== kc && (rz = Math
					.floor(tl.measureText(a7v[kc].g5).width), tl.fillStyle = b9.mg, tl.fillRect(h.i - rz - a7q, mA, rz + a7q, a8F), tl.fillStyle = b9.mj, tl.fillText(a7v[kc].g5, Math.floor(h.i - .5 * a7q), mA + a8F))
			}(a8G - 2 * a8F, a8F), b8.pd.textAlign(tl, 1), tl.fillText(a8A, a8E, h.j), tl.strokeStyle = b9.mn, tl.lineWidth = 1, tl.beginPath(), tl.moveTo(0, mA), tl.lineTo(h.i, mA), tl.closePath(), tl.stroke())
	}
}

function cG() {
	var a4U, i, em, a8I, a8J, canvas, xA, a5u, a2R, a8K, a8L, a8M, a8N;
	this.ek = 0, this.j = 0, this.dU = function() {
		a8J = aC.a3L, a8L = "rgba(0,100,0,0.8)", a8M = "rgba(150,0,0,0.8)", a5u = a8K = !0, a2R = af.ge[aC.eN], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.r1() ? .305 : .24) * h.pf), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4U = b8.pd.rS(1, Math.floor(.8 * this.j)), a8N = Math.floor(.5 * this.j), bQ.vU.font = a4U, em = ba.gap, a8I = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (xA = canvas.getContext("2d", {
			alpha: !0
		})).font = a4U, b8.pd.textBaseline(xA, 1), b8.pd.textAlign(xA, 1), this.a8O()
	}, this.a6H = function() {
		return z.a0.r1() && h.i < 1.2 * h.j
	}, this.a6u = function() {
		this.a6H() ? this.ek = h.i - i - ba.gap : this.ek = Math.floor(aU.a8P() + (h.i - aU.a8P() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lU = function() {
		a5u && (a5u = !1, this.a8O())
	}, this.a8O = function() {
		xA.clearRect(0, 0, i, this.j), xA.fillStyle = a8K ? a8L : a8M, xA.fillRect(0, 0, i, this.j), xA.fillStyle = b9.ml, this.a8Q(), this.a8R(), xA.fillStyle = af.ge[aC.eN] >= ad.jY(aC.eN) ? b9.nG : b9.mj, xA.fillText(b8.zY.yB(a2R), Math.floor(
			i / 2), a8N), xA.fillStyle = b9.mj, xA.fillRect(0, 0, i, 1), xA.fillRect(0, 0, 1, this.j), xA.fillRect(0, this.j - 1, i, 1), xA.fillRect(i - 1, 0, 1, this.j)
	}, this.a8Q = function() {
		var ey = bd.jp() % 100,
			ey = (ey = 9 - bJ.dj(ey -= ey % 10, 10), Math.floor(ey * (this.j - a8I) / 9));
		xA.fillRect(0, ey, a8I, this.j - ey), xA.fillRect(i - a8I, ey, a8I, this.j - ey)
	}, this.a8R = function() {
		xA.fillRect(a8I, this.j - a8I, Math.floor((i - 2 * a8I) * af.ge[aC.eN] / a8J), a8I)
	}, this.im = function() {
		var gA = aC.eN;
		b8.fy.gp(gA) && (gA = af.ge[gA] - af.a2Q[gA], a2R !== gA ? (a8J = a54(gA, a8J), a8K = a2R < gA && 10 <= gA, a2R = gA, a5u = !0) : bd.jp() % 10 == 9 && (a5u = !0))
	}, this.tk = function() {
		0 === af.li[aC.eN] || aC.gy || 2 === af.a2I[aC.eN] || tl.drawImage(canvas, this.ek, em)
	}
}

function cH() {
	var a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8g, a8h, a8i, a8j, a8k, a8l, a8m, a8n, position, a8o, a8p, a8q, a8r, a8s = 1,
		a8t = 1,
		a8u = "";
	var leaderboardHasChanged = true;
	this.playerPos = aC.eN;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jd[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jd[aC.eN]);
	}

	function a8w() {
		a8Y.clearRect(0, 0, a8S, a6X),
			a8Y.fillStyle = b9.nZ,
			a8Y.fillRect(0, 0, a8S, a8d),
			a8Y.fillStyle = b9.mf,
			a8Y.fillRect(0, a8d, a8S, a6X - a8d);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jd[aC.eN]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8n = -1;
		if (__fx.leaderboardFilter.enabled && a8n >= __fx.leaderboardFilter.filteredLeaderboard.length) a8n = -1;
		playerPos >= position && a8y(playerPos - position, b9.n8),
			0 !== jd[aC.eN] && 0 === position && a8y(0, b9.ne),
			-1 !== a8n && a8y(a8n, b9.mk),
			a8Y.fillStyle = b9.mf,
			//console.log("drawing", a8n),
			a8Y.clearRect(0, a6X - __fx.leaderboardFilter.tabBarOffset, a8S, __fx.leaderboardFilter.tabBarOffset);
		a8Y.fillRect(0, a6X - __fx.leaderboardFilter.tabBarOffset, a8S, __fx.leaderboardFilter.tabBarOffset);
		a8Y.fillStyle = b9.mj,
			a8Y.fillRect(0, a8d, a8S, 1),
			a8Y.fillRect(0, a6X - __fx.leaderboardFilter.tabBarOffset, a8S, 1),
			__fx.leaderboardFilter.drawTabs(a8Y, a8S, a6X - __fx.leaderboardFilter.tabBarOffset, b9.n8),
			a8Y.fillRect(0, 0, a8S, ba.xu),
			a8Y.fillRect(0, 0, ba.xu, a6X),
			a8Y.fillRect(a8S - ba.xu, 0, ba.xu, a6X),
			a8Y.fillRect(0, a6X - ba.xu, a8S, ba.xu), a8Y.font = a8T, b8.pd.textBaseline(a8Y, 1), b8.pd.textAlign(a8Y, 1), a8Y.fillText(a8u, Math.floor((a8S + a8d - 22) / 2), Math.floor(a8b + a8U / 2));
		__fx.playerList.drawButton(a8Y, 12, 12, a8d - 22);
		var ew, gB = playerPos < position + a8W - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8W)
				position = (result.length > a8W ? result.length : a8W) - a8W;
			//if (position >= result.length) position = result.length - 1;
			for (a8Y.font = a8V, b8.pd.textAlign(a8Y, 0), ew = a8W - gB; 0 <= ew; ew--) {
				const pos = result[ew + position];
				if (pos !== undefined)
					a8z(l7[pos]), a90(ew, pos, l7[pos]);
			}
			for (b8.pd.textAlign(a8Y, 2), ew = a8W - gB; 0 <= ew; ew--) {
				const pos = result[ew + position];
				if (pos !== undefined)
					a8z(l7[pos]), a91(ew, l7[pos]);
			}
		} else {
			for (a8Y.font = a8V, b8.pd.textAlign(a8Y, 0), ew = a8W - gB; 0 <= ew; ew--)
				a8z(l7[ew + position]), a90(ew, ew + position, l7[ew + position]);
			for (b8.pd.textAlign(a8Y, 2), ew = a8W - gB; 0 <= ew; ew--)
				a8z(l7[ew + position]), a91(ew, l7[ew + position]);
		}
		2 == gB && (a8z(aC.eN), b8.pd.textAlign(a8Y, 0), a90(a8W - 1, jd[aC.eN], aC.eN), b8.pd.textAlign(a8Y, 2), a91(a8W - 1, aC.eN)), 0 === position && (gB = .7 * a8e / aa.get(4).height, a8Y.setTransform(gB, 0, 0, gB, Math.floor(a8f + .58 * a8e +
			.5 * gB * aa.get(4).width), Math.floor(a8b + a8U + .4 * a8e)), a8Y.imageSmoothingEnabled = !0, a8Y.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8Y.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8z(player) {
		aC.hS && (a8Y.fillStyle = be.a93[be.a94[player]])
	}

	function a8y(aA, a95) {
		a8Y.fillStyle = a95, aA = a8W - 1 < aA ? a8W - 1 : aA;
		a95 = Math.floor((aA === a8W - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8e), a95 = aA === a8W - 2 ? Math.floor(a8d + 9.15 * a8e) - Math.floor(a8d + 8.15 * a8e) : a95;
		a8Y.fillRect(0, Math.floor(a8d + (aA + (0 === aA ? 0 : .15)) * a8e), a8S, a95)
	}

	function a90(a97, a2g, aA) {
		a8Y.fillText(a8j[a2g], a8f, Math.floor(a8b + a8U + (a97 + .5) * a8e)), 1 === af.a2I[aA] && (a8Y.font = "italic " + a8V);
		a2g = Math.floor(a8b + a8U + (a97 + .5) * a8e);
		a8Y.fillText(af.zU[aA], a8g, a2g), 0 !== af.a2I[aA] && (a8Y.font = a8V), aA < aC.js && 2 !== af.a2I[aA] || a8Y.fillRect(a8g, a2g + .35 * a8s, a8i[aA], Math.max(1, .1 * a8s))
	}

	function a91(a97, aA) {
		a8Y.fillText(af.gQ[aA], a8h, Math.floor(a8b + a8U + (a97 + .5) * a8e))
	}

	function a9G(em) {
		return (em -= ba.gap + a8d) < 0 ? Math.floor(em / a8e) - 1 : em < (a8W - 1) * a8e ? Math.floor(em / a8e) : em < a6X - a8d ? a8W - 1 : (em -= a6X - a8d, a8W + Math.floor(em / a8e))
	}

	function xt(ek, em) {
		return ek >= ba.gap && ek < ba.gap + a8S && em >= ba.gap && em < ba.gap + a6X
	}
	this.dU = function() {
			var aA;
			for (a8p = !1, a8r = a8q = a8o = 0, a8n = -1, a8W = z.a0.r1() ? 6 : 10, a8t = (position = 0) === (a8t = bh.eA.data[11].value) ? 10 : 1 === a8t ? 5 : 1, a8m = !1, a8k = new Uint16Array(a8W + 1), a8l = new Uint32Array(a8W + 1), a8a = aC.ea,
				l7 = new Uint16Array(a8a), jd = new Uint16Array(a8a), aA = a8a - 1; 0 <= aA; aA--) l7[aA] = aA, jd[aA] = aA;
			this.resize(!0), a8i = new Uint16Array(aC.ea);
			var a8v = Math.floor(a8S - a8g - a8f - a8Z);
			for (a8j = new Array(aC.ea), a8Y.font = a8V, aA = aC.ea - 1; 0 <= aA; aA--) a8j[aA] = aA + 1 + ".", af.zU[aA] = b8.xA.a1y(af.za[aA], a8V, a8v), a8i[aA] = Math.floor(a8Y.measureText(af.zU[aA]).width);
			a8w()
		}, this.resize = function(dU) {
			if (a6X = z.a0.r1() ? (a8S = Math.floor(.335 * h.pf), Math.floor(a8W * a8S / 8)) : (a8S = Math.floor(.27 * h.pf), Math.floor(a8W * a8S / 10)), a8S = Math.floor(.97 * a8S), (a8X = document.createElement("canvas")).width = a8S, a8X.height =
				a6X, a8Y = a8X.getContext("2d", {
					alpha: !0
				}), a8b = .025 * a8S, a8U = .16 * a8S, a8c = 0 * a8S, a8d = Math.floor(.45 * a8b + a8U), a8e = (a6X - a8U - 2 * a8b - a8c) / a8W,
				a8X.height = a6X += a8e, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8e * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6X - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8S,
				a8T = b8.pd.rS(1, Math.floor(.55 * a8U)), a8s = Math.floor((z.a0.r1() ? .67 : .72) * a8e), a8V = b8.pd.rS(0, a8s), a8Y.font = a8V, a8f = Math.floor(.04 * a8S), a8g = Math.floor((z.a0.r1() ? .195 : .18) * a8S), a8Z = Math.floor(a8Y
					.measureText("00920600").width), a8Y.font = a8T, a8h = a8S - a8f, !dU) {
				a8Y.font = a8V;
				for (var aA = aC.ea - 1; 0 <= aA; aA--) a8i[aA] = Math.floor(a8Y.measureText(af.zU[aA]).width);
				a8w()
			}
			a8u = b8.xA.a1y(L(111), a8T, .96 * a8S)
		}, this.a8P = function() {
			return a8S
		}, this.lU = function(bp, a8x) {
			(a8x || a8m && (bp || bd.jp() % a8t == 0)) && (a8m = !1, a8w())
		}, this.im = function() {
			! function() {
				for (var ew = a8a - 1; 0 <= ew; ew--) 0 === af.li[l7[ew]] && ! function(ew) {
					var a9E = l7[ew];
					a8a--;
					for (var aA = ew; aA < a8a; aA++) l7[aA] = l7[aA + 1], jd[l7[aA]] = aA;
					l7[a8a] = a9E, jd[l7[a8a]] = a8a
				}(ew)
			}();
			for (var a9C, mR = a8a - 1, ew = 0; ew < mR; ew++) af.gQ[l7[ew]] < af.gQ[l7[ew + 1]] && (a9C = l7[ew], l7[ew] = l7[ew + 1], l7[ew + 1] = a9C, jd[l7[ew]] = ew, jd[l7[ew + 1]] = ew + 1);
			! function() {
				for (var di = a8m, gB = (a8m = !0, jd[aC.eN] >= a8W - 1 ? a8W - 2 : a8W - 1), aA = gB; 0 <= aA; aA--)
					if (a8k[aA] !== l7[aA] || a8l[aA] !== af.gQ[l7[aA]]) return;
				(gB != a8W - 2 || a8k[a8W] === jd[aC.eN] && a8l[a8W] === af.gQ[aC.eN]) && (a8m = di)
			}();
			for (var aA = a8W - 1; 0 <= aA; aA--) a8k[aA] = l7[aA], a8l[aA] = af.gQ[l7[aA]];
			a8k[a8W] = jd[aC.eN], a8l[a8W] = af.gQ[aC.eN];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gq = function(ek, em) {
			return !!xt(ek, em) && ((__fx.utils.isPointInRectangle(ek, em, ba.gap + 12, ba.gap + 12, a8d - 22, a8d - 22) && __fx.playerList.display(af.za), true) &&
				!(em - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ek - ba.gap)) && (a8o = bd.eC, a8p = !0, a8q = a8r = a9G(em), bH.a15() && (ek = a7G(-1, a8r, a8W), a8n !== (ek = ek === a8W ?
					-1 : ek)) && (a8n = ek, a8w(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8w(), bd.dc = !0;
		},
		this.a0R = function(ek, em) {
			if (__fx.utils.isPointInRectangle(ek, em, ba.gap + 12, ba.gap + 12, a8d - 22, a8d - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8w(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8w(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ek, em, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ek - ba.gap
				)) return;
			var di, a9F = a9G(em);
			return a8p ? (di = position, (position = a7G(0, position += a8q - a9F, aC.ea - a8W)) !== di && (a9F = (a9F = a7G(-1, a8q = a9F, a8W)) !== a8W && xt(ek, em) ? a9F : -1, a8n = a9F, a8w(), bd.dc = !0), !0) : (a9F = (a9F = a7G(-1, a9F,
				a8W)) === a8W || !xt(ek, em) || bH.a15() ? -1 : a9F, a8n !== a9F && (a8n = a9F, a8w(), bd.dc = !0))
		}, this.a0q = function(ek, em) {
			if (!a8p) return !1;
			a8p = !1;
			var a9F = a9G(em);
			var isEmptySpace = false;
			return bH.a15() && -1 !== a8n && (a8n = -1, a8w(), bd.dc = !0), bd.eC - a8o < 350 && a8r === a9F && -1 !== (a9F = (a9F = a7G(-1, a9F, a8W)) !== a8W && xt(ek, em) ? a9F : -1) && (ek = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l7[__fx.leaderboardFilter.filteredLeaderboard[a9F + position] ?? (isEmptySpace = true, jd[aC.eN])]) : l7[a9F + position]), a9F === a8W - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jd[aC.eN]) >=
				position + a8W - 1 && (ek = aC.eN), !isEmptySpace && aC.hS && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(ek, af.za, aC.kB), 0 !== af.li[ek] && !isEmptySpace) && aG.m3(ek, 800, !1, 0), !0
		}, this.a0U = function(ek, em, deltaY) {
			var a9H;
			return !(a8p || aC.mC || (a9H = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xt(ek, em)) || (ek = (ek = a7G(-1, a9G(em), a8W)) === a8W || bH.a15() ? -1 : ek, 0 < deltaY ? position < aC.ea - a8W && (position += Math.min(aC.ea - a8W -
				position, a9H), a8n = ek, a8w(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a9H), a8n = ek, a8w(), bd.dc = !0), 0))
		}, this.tk = function() {
			tl.drawImage(a8X, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, xA, ek, em, a5r, a9I, gap, a9J, fontSize, a9K, a9L, a9M, a9N, a9O, a9P, a9Q, a9R, a9S;

	function a9W() {
		xA.clearRect(0, 0, aV.i, aV.j), xA.fillStyle = b9.mg, xA.fillRect(0, 0, aV.i, aV.j), xA.fillStyle = b9.n3, eH = 0 < a9Q ? a9Q : Math.sqrt(a9N[4] / 1e4), xA.fillRect(0, aV.j - a5r - 1, Math.floor(eH * aV.i), a5r), xA.fillStyle = b9.mj, xA
			.fillRect(0, 0, aV.i, 1), xA.fillRect(0, 0, 1, aV.j), xA.fillRect(aV.i - 1, 0, 1, aV.j), xA.fillRect(0, aV.j - 1, aV.i, 1), xA.fillRect(0, aV.j - a5r - 1, aV.i, 1);
		for (var eH, a9Y, di = 0, aA = 0; aA < a9M.length; aA++) a9O[aA] ? (b8.pd.textAlign(xA, 0), a9Y = Math.floor((a9I - a5r + 2 * a9J) * (aA - di + 1) / (a9M.length + 1) - .7 * a9J), xA.fillText(a9M[aA], gap, a9Y), b8.pd.textAlign(xA, 2), 5 ===
			aA && 0 !== af.li[aC.eN] && af.ge[aC.eN] >= ad.jY(aC.eN) ? (xA.fillStyle = b9.nc, xA.fillText(a9U(aA), aV.i - gap, a9Y), xA.fillStyle = b9.mj) : xA.fillText(a9U(aA), aV.i - gap, a9Y)) : di++
	}

	function a9U(aA) {
		return aA < 3 ? a9N[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zY.a2z(a9N[aA] / 100, 2) : aA < 7 ? b8.zY.yB(a9N[aA]) : aA === 7 ? aV.a9Z(a9N[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gQ, aC.eN) : __fx.utils.getDensity(aC.eN)
	}

	function a9T() {
		af.gQ[aC.eN] !== a9N[6] && (a9N[6] = af.gQ[aC.eN], a9K++)
	}
	this.dU = function() {
		a9Q = a9R = 0, (a9L = new Array(8))[0] = L(112), a9L[1] = aC.kB ? L(113) : L(114), a9L[2] = L(115), a9L[3] = L(116), a9L[4] = L(117), a9L[5] = L(118, 0, "Interest"), a9L[6] = L(119), a9L[7] = L(120),
			a9L.push("Max Troops", "Density"), // add a9L
			(a9M = new Array(a9L.length)).fill(""), (a9N = new Array(a9L.length))[0] = aC.kB ? 0 : aC.js, a9N[1] = aC.kB ? ak.jt : aC.kD, a9N[2] = aC.yv, a9N[3] = 0, a9N[4] = bJ.dj(1e4 * af.gQ[0], Math.max(aC.jc, 1)), a9N[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dj(700 * aC.data.iIncomeValue, 64) : bJ.dj(700 * aC.data.iIncomeData[aC.eN], 64), a9N[6] = 0, a9T(), a9N[7] = 0, a9P = a9U(6), a9O = new Array(a9L.length);
		for (var aA = a9L.length - 1; 0 <= aA; aA--) a9O[aA] = !0;
		a9S = 0, a9S = aC.kB ? (a9O[0] = !1, a9O[2] = !1, a9O[3] = !1, 3) : (a9O[3] = !1, 1), a9K = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.r1() ? .1646 : .126) * 1.25 * h.pf), this.j = Math.floor(1.18 * this.i), a5r = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9J = .04 * this.i, a9I = this.j, this.j -= Math.floor(a9S * (this.j - 2 *
			a5r) / a9L.length), fontSize = Math.floor(.7 * (a9I - a5r) / a9L.length);
		var a4U = b8.pd.rS(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4U, i) {
				for (var aA = 0; aA < a9M.length; aA++) a9M[aA] = b8.xA.a1y(a9L[aA], a4U, i)
			}((xA = canvas.getContext("2d", {
				alpha: !0
			})).font = a4U, .575 * this.i), b8.pd.textBaseline(xA, 1), xA.lineWidth = 1, this.a3E(), this.a6u(), aT.a6u(), a9W()
	}, this.a6u = function() {
		ek = h.i - this.i - ba.gap
	}, this.a9X = function() {
		em = ba.gap
	}, this.a3E = function() {
		em = ba.gap + (aT.a6H() && 0 !== af.li[aC.eN] && !aC.gy ? aT.j + ba.gap : 0)
	}, this.lU = function(bp) {
		(bp || 100 <= a9K) && (a9K = 0, a9W())
	}, this.a49 = function() {
		return a9N[7]
	}, this.a9Z = function(value) {
		var ka = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * ka) / 1e3);
		return value < 10 ? ka + ":0" + value : ka + ":" + value
	}, this.im = function() {
		var a9i, per;
		a9O[0] && aC.yw - aC.yv !== a9N[0] && (a9N[0] = aC.yw - aC.yv, a9K++), ak.jt - a9N[0] !== a9N[1] && (a9N[1] = ak.jt - a9N[0], a9K++), this.lM(), (a9i = ad.a9j(aC.eN)) !== a9N[5] && (a9N[5] = a9i, a9K++), a9T(), a9N[7] += bd.a9k, a9i =
			a9U(7), a9P !== a9i && (a9P = a9i, a9K += 100), a9i = aC.hS ? bf.a2j() : af.gQ[l7[0]], per = bJ.dj(1e4 * a9i, Math.max(aC.jc, 1)), a9N[3] = a9i, a9N[4] !== per && (a9K++, a9N[4] = per), 8 === aC.k9 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.fy.gp(aA)) return bP.yW.ys(), 1;
				return
			}() || a9N[3] < aC.jc || ! function() {
				for (var aA = ak.jt - 1; 0 <= aA; aA--)
					if (0 < af.g4[ak.ju[aA]].length) return;
				return 1
			}() || bP.yW.ys()
	}, this.lM = function() {
		a9O[2] && aC.yv !== a9N[2] && (a9N[2] = aC.yv, a9K++)
	}, this.a9l = function(aA) {
		var sG, a9m, di;
		return 2 !== aC.yt && (aA % 2 == 1 && (aU.lU(1, 1), bd.dc = !0), aA === aC.a3N ? (a9Q = 0, a9W(), !1) : (-1 !== aA || 0 !== a9R) && (a9m = a9Q, a9Q = aC.gm ? aA / aC.a3N : (di = performance.now(), 0 <= aA && (sG = di - 392 * aA, a9R =
			0 === aA || sG < a9R ? sG : a9R), 1 < (a9Q = (di - a9R) / (392 * aC.a3N)) ? 1 : a9Q), a9W(), a9Q !== a9m))
	}, this.tk = function() {
		tl.drawImage(canvas, ek, em)
	}
}

function cJ() {
	var hK, a9n, i, j, a70, a9o, a9p, a6I, canvas, lv, a9q;

	function x6() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9q = hK = !1, a70 = .61, a9o = .07, a9p = .09, lv = a6I = j = 0
	}, this.resize = function() {
		var xA, m9, ey, a9v, a9w, a4Z;
		hK && (i = a9r(i = z.a0.r1() ? Math.floor(.69 * h.pf) : Math.floor(.5 * h.pf), a54(h.i - 2 * ba.gap, 10)), i = a9r(i, Math.floor(3.57 * a54(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, xA = canvas.getContext("2d", {
				alpha: !0
			}), m9 = Math.floor(1 + j / 40), xA.clearRect(0, 0, i, j), xA.fillStyle = b9.mg, xA.fillRect(m9, m9, i - 2 * m9, j - 2 * m9), xA.lineJoin = "bevel", xA.lineWidth = 2 * m9, xA.strokeStyle = b9.mj, xA.strokeRect(m9, m9, i - 2 * m9,
				j - 2 * m9), xA.imageSmoothingEnabled = !1, ey = aa.get(a9n), a9v = ey.width, a4Z = (1 === a9n ? .85 : 21 === a9n ? .666 : .9) * a70 * j / (a9w = ey.height), xA.setTransform(a4Z, 0, 0, a4Z, Math.floor((i - a4Z * a9v) / 2),
				Math.floor((j - a4Z * a9w) / 2)), xA.drawImage(ey, 0, 0), xA.setTransform(1, 0, 0, 1, Math.floor(i - a9p * j - a9o * j - m9), Math.floor(m9 + a9o * j)),
			function(xA, ed) {
				xA.lineWidth = Math.floor(1 + j / 80), xA.strokeStyle = b9.mj, xA.beginPath(), xA.moveTo(0, 0), xA.lineTo(ed, ed), xA.moveTo(0, ed), xA.lineTo(ed, 0), xA.stroke()
			}(xA, Math.floor(a9p * j)), xA.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f5, a9t, a6n, a9u) {
		hK || a9u && a9q || (a9n = a6n ? 21 : f5 ? 1 : 2, hK = a9q = !0, this.resize(), aK.qu(), aQ.a6i(), lv = bd.eC, a6I = a9t ? 1 : 0)
	}, this.im = function() {
		!hK || 1 <= a6I || (a6I = 1 < (a6I += 5e-4 * (bd.eC - lv)) ? 1 : a6I, lv = bd.eC, bd.dc = !0)
	}, this.gq = function(ek, em) {
		return !(!hK || a6I <= 0 || (ek -= Math.floor((h.i - i) / 2), em -= x6(), ek < 0) || em < 0 || i < ek || j < em || (i - j / 3 < ek && em < j / 3 && (hK = !1, bd.dc = !0), 0))
	}, this.tk = function() {
		!hK || a6I <= 0 || (tl.globalAlpha = a6I, tl.drawImage(canvas, Math.floor((h.i - i) / 2), x6()), tl.globalAlpha = 1)
	}
}

function dH() {
	var a9y, a9z = new Uint8Array(5),
		aA0 = new Uint8Array(5);
	this.aA1 = new aA2, this.dU = function() {
		for (var f5 = bh.eA.data[119].value, aA = 0; aA < a9z.length; aA++) a9z[aA] = (f5 >> 2 * aA) % 4
	}, this.a3Y = function() {
		a9y = [L(121), L(122), L(123, [bV.aA3[28]]), L(124, [bV.aA3[26]]), L(125, [bV.aA3[0]])], this.aA1.dU()
	}, this.im = function() {
		this.aA1.im()
	}, this.a4A = function(id) {
		1 < id && bH.q6() || ! function(dy) {
			if (3 === a9z[dy] || 1 === aA0[dy]) return;
			if (aA0[dy] = 1, !(Math.random() < .6)) {
				a9z[dy]++;
				for (var f5 = 0, aA = 0; aA < a9z.length; aA++) f5 += a9z[aA] << 2 * aA;
				bh.r5.r6(119, f5)
			}
			return 1
		}(id) || aM.a5A(a9y[id])
	}
}

function aA2() {
	var aA5;
	this.dU = function() {
		aA5 = !1
	}, this.im = function() {
		var gA;
		if (function() {
				if (!aA5) {
					if (bd.jp() % 30 != 9) return;
					if (!b8.fy.l0(90)) return;
					aA5 = !0
				}
				return 1
			}() && (! function() {
				var pV = aM.a5V(956);
				if (pV) {
					if (b8.fy.ke(pV.player)) return 1;
					aM.a4G(956, 0)
				}
				return
			}() && (-1 === (gA = (aC.hS ? function() {
				var id = bf.l4(),
					ed = ak.jt;
				if (be.kE[id])
					for (var yh = ak.ju, eb = be.eb, aA = 0; aA < ed; aA++) {
						var gA = yh[aA];
						if (eb[gA] !== id) return gA
					} else if (1 < ed) return l7[ed - 1];
				return -1
			} : function() {
				for (var aAD = ak.jt, kZ = ak.ju, aAE = jd, aA = 0; aA < aAD; aA++) {
					var gA = kZ[aA];
					if (0 !== aAE[gA]) return gA
				}
				return -1
			})()) ? ! function() {
				var pV = aM.a5V(957);
				if (pV && pV.a50) {
					if (ab.eU(pV.a50.eP << 2)) return 1;
					aM.a4G(957, 0)
				}
				return
			}() : (aM.zH(0, L(126, [af.zU[gA]]), 956, gA, b9.mj, b9.mg, -1, !0), 0)))) {
			var ed = am.iX.kq;
			if (0 !== ed)
				for (var eA = am.iX.eA, aA = 0; aA < ed; aA++) {
					var eP = eA[aA];
					if (ab.eU(eP << 2)) return void aM.zH(0, L(127, [bK.el(eP), bK.en(eP)]), 957, 0, b9.mj, b9.mg, -1, !0, void 0, {
						ew: 1,
						eP: eP
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
			aAI = b8.pd.pn(ba.rU),
			hU = b8.pd.pn(Math.max(b8.pd.qw(.012), 8));
		try {
			aAH.sheet.insertRule(a78 + "{width:" + hU + ";height:" + hU + ";}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 + "-thumb{background-color:white;}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 +
				"-track{background:" + b9.mf + ";}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 + "-track:horizontal{border-top:" + aAI + " solid white;}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 +
				"-track:vertical{border-left:" + aAI + " solid white;}", aAH.sheet.cssRules.length), aAH.sheet.insertRule(a78 + "-button{display:none;}", aAH.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aAH.sheet.cssRules.length - 1; 0 <= aA; aA--) aAH.sheet.deleteRule(0)
		}
	}
}

function dG() {
	this.aAJ = !1, this.mZ = !1, this.a3I = !1, this.aAK = [0, 0, 0, 0], this.aAL = function() {
		var m9, mA, mM, mN;
		this.a3I = this.a3I || this.mZ, (this.mZ || this.aAJ && this.a3I) && (m9 = bY.aAM[0], mA = bY.aAM[1], mM = bY.aAM[2], mN = bY.aAM[3], m9 = m9 < this.aAK[0] ? this.aAK[0] : m9, mA = mA < this.aAK[1] ? this.aAK[1] : mA, mM = mM > this.aAK[
				2] ? this.aAK[2] : mM, mN = mN > this.aAK[3] ? this.aAK[3] : mN, this.mZ = !1, this.aAJ = !1, m9 === this.aAK[0] && mA === this.aAK[1] && mM === this.aAK[2] && mN === this.aAK[3] ? this.a3J() : m9 <= mM && mA <= mN && a3a
			.putImageData(a3b, 0, 0, m9, mA, mM - m9 + 1, mN - mA + 1))
	}, this.a3J = function() {
		this.a3I && this.aAK[2] >= this.aAK[0] && this.aAK[3] >= this.aAK[1] && a3a.putImageData(a3b, 0, 0, this.aAK[0], this.aAK[1], this.aAK[2] - this.aAK[0] + 1, this.aAK[3] - this.aAK[1] + 1), this.a3I = !1
	}, this.z4 = function() {
		this.aAK[2] >= this.aAK[0] && this.aAK[3] >= this.aAK[1] && a3a.putImageData(a3b, 0, 0, this.aAK[0], this.aAK[1], this.aAK[2] - this.aAK[0] + 1, this.aAK[3] - this.aAK[1] + 1), this.a3I = !1
	}, this.dU = function() {
		var ek, em;
		this.aAJ = !1, this.mZ = !1, this.a3I = !1, this.aAK[0] = bQ.eo, this.aAK[1] = bQ.ep, this.aAK[2] = this.aAK[3] = 0;
		loop: for (ek = 1; ek < bQ.eo - 1; ek++)
			for (em = bQ.ep - 2; 1 < em; em--)
				if (1 === aAN[ab.wf(ek, em) + 2]) {
					this.aAK[0] = ek;
					break loop
				} loop: for (em = 1; em < bQ.ep - 1; em++)
			for (ek = bQ.eo - 2; 1 < ek; ek--)
				if (1 === aAN[ab.wf(ek, em) + 2]) {
					this.aAK[1] = em;
					break loop
				} loop: for (ek = bQ.eo - 2; 0 < ek; ek--)
			for (em = bQ.ep - 2; 1 < em; em--)
				if (1 === aAN[ab.wf(ek, em) + 2]) {
					this.aAK[2] = ek;
					break loop
				} loop: for (em = bQ.ep - 2; 0 < em; em--)
			for (ek = bQ.eo - 2; 1 < ek; ek--)
				if (1 === aAN[ab.wf(ek, em) + 2]) {
					this.aAK[3] = em;
					break loop
				}
	}
}

function L(value, aAO, uI) {
	var pK = "number" == typeof value ? b5.aAP[value] : value;
	if (uI && b5.aAQ() && (pK = uI), aAO)
		for (var ed = aAO.length, aA = 0; aA < ed; aA++)
			for (var ew = 0; ew < 3; ew++) pK = pK.replace("{" + (10 * ew + aA) + "}", aAO[aA]);
	return pK
}

function bx() {
	this.data = new aAR;
	var aAS = (new aAT).L84,
		aAU = (this.aAP = aAS, !1);
	this.dU = function() {
		var ed, g;
		aAU = !1, "en" !== bh.eA.data[12].value.split("-")[0].toLowerCase() ? bh.eA.data[12].value === bh.eA.data[145].value && 0 < bh.eA.data[146].value && (ed = bh.eA.data[146].value, (g = bh.pv.uO(ed, !1)).length === ed) && !!b8.pm.a1b(g) &&
			function(g) {
				for (var ed = g.length, j = 0; j < ed; j++) g[j] = g[j].replace("&#39;", "'");
				var aAa = bh.pv.uO(ed, !0);
				if (ed !== aAa.length) return !1;
				if (!b8.pm.a1b(aAa)) return !1;
				for (var ka = aAS.length, a81 = new Array(ka), aAb = ka === ed, g5 = Math.min(ed, ka), aA = 0; aA < ka; aA++)
					if (a81[aA] = aAS[aA], aA < ed && aAa[aA] === a81[aA]) a81[aA] = g[aA];
					else {
						aAb = !1;
						for (var ex = 0; ex < g5; ex++)
							if (aAa[ex] === a81[aA]) {
								a81[aA] = g[ex];
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
		aAU && (aAU = !1, 0 !== aAS.length) && (aAd = bh.eA.data[12].value, ay.aAe.aAf(0, aAd.slice(0, 20)))
	}, this.aAg = function(g) {
		g.length === aAS.length && (this.aAP = g, bh.r5.r6(145, bh.eA.data[12].value), bh.r5.r6(146, g.length), bh.pv.uU(g, !1), bh.pv.uU(aAS, !0), 0 === aZ.a05()) && 5 === s.rs && s.x.aAh()
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
		for (var aAm = [], g = this.g, ed = g.length, aA = 0; aA < ed; aA++) aAm.push(g[aA]);
		var aAn = bh.eA.data[12].uI;
		for (aA = 0; aA < ed; aA++)
			if (aAm[aA] === aAn) {
				aAm.splice(aA, 1), ed--;
				break
			} aAm.sort(), ed++, aAm.unshift(aAn);
		try {
			if ("undefined" == typeof Intl) return aAm;
			for (aA = 0; aA < ed; aA++) {
				var pK = new Intl.DisplayNames([aAm[aA]], {
					type: "language"
				}).of(aAm[aA]);
				pK !== aAm[aA] && (aAm[aA] = aAm[aA] + ": " + pK)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAm
	}, this.aAp = function(aAq) {
		for (var pK = bh.eA.data[12].value, ed = aAq.length, aA = 0; aA < ed; aA++)
			if (pK === aAq[aA].split(":")[0]) return aA;
		return 0
	}, this.aAk = function(aAr) {
		if (!aAr || aAr.length < 2) return 0;
		aAr = aAr.split("-")[0].toLowerCase();
		for (var g = this.g, ed = g.length, aA = 0; aA < ed; aA++)
			if (aAr === g[aA]) return aA;
		return -1
	}
}

function aAT() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
		"The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.", "You have earned {10} clan points!",
		"You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More",
		"This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!",
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
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names",
		"Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins",
		"1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election",
		"Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender",
		"Receiver", "Amount", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Close",
		"Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name",
		"Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.",
		"Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size",
		"Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn",
		"🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete",
		"User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning", "Loading...", "An enemy ship belonging to {0} is heading towards your shore.",
		"Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In",
		"Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots",
		"Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers",
		"Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!",
		"Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function da() {
	var ek, em, j, sp, aAs, aAt, aAu, aAv, aAw, i, a2D, aAx;
	this.hK = !1, this.dU = function(pK, aAy) {
		if (1 === z.id && 13 <= z.dk && z.dk < 18) return aAy ? void(a2D = pK) : a2D !== pK ? void 0 : void z.uM.saveString(200, pK);
		aAy && (a2D = pK, (aAx = document.createElement("a")).appendChild(document.createTextNode(a2D)), this.hK = !0, aAx.title = a2D, aAx.target = "_blank", aAx.href = a2D, aAx.style.textAlign = "center", aAx.style.color = b9.mj, aAx.style
			.position = "absolute", aAx.style.padding = "0px", aAx.style.margin = "0px", this.resize(), document.body.appendChild(aAx), bd.dc = !0)
	}, this.qu = function() {
		return !(!this.hK || (document.body.removeChild(aAx), this.hK = !1))
	}, this.gq = function(hv, hw) {
		return !!this.hK && ((hv < ek || hw < em || ek + i < hv || em + j < hw || ek + i - sp < hv && hw < em + sp) && (bd.dc = !0, this.hK = !1, document.body.removeChild(aAx)), !0)
	}, this.resize = function() {
		var a4U, aAz;
		this.hK && (aAv = Math.floor(.8 * (z.a0.r1() ? h.i > h.j ? .6 : .55 : .4) * h.pf), sp = Math.floor(.15 * aAv), aAs = Math.floor(.35 * sp), aAt = Math.floor(.5 * sp), aAu = Math.floor(2.5 * aAt), j = sp + aAs + 3 * aAt, a4U = b8.pd.rS(1,
			aAs / h.k), aAw = Math.floor(h.k * aP.measureText(a2D, a4U)), aAz = i = (aAv < aAw ? aAw : aAv) + 2 * aAu, i = Math.min(i, h.i - 2 * (z.a0.r1() ? 2 : 1) * ba.gap), a4U = b8.pd.rS(1, i / aAz * aAs / h.k), aAw = Math.floor(h.k *
			aP.measureText(a2D, a4U)), ek = Math.floor((h.i - i) / 2), em = Math.floor((h.j - j) / 2), aAx.style.font = a4U, aAx.style.top = Math.floor((em + 1.4 * aAt + sp) / h.k) + "px", aAx.style.left = Math.floor((ek + (i - aAw) /
			2) / h.k) + "px")
	}, this.tk = function() {
		this.hK && (tl.fillStyle = b9.mg, tl.fillRect(ek, em + sp, i, j - sp), tl.fillStyle = b9.nn, tl.fillRect(ek, em, i, sp), tl.fillStyle = b9.mj, tl.lineWidth = ba.xu, tl.strokeStyle = b9.mj, tl.strokeRect(ek, em, i, j), tl.fillRect(ek, em +
			sp, i, ba.xu), tl.font = b8.pd.rS(1, .48 * sp), b8.pd.textAlign(tl, 1), b8.pd.textBaseline(tl, 1), tl.fillText("You are leaving Territorial.io!", Math.floor(ek + (i - .5 * sp) / 2), Math.floor(em + .55 * sp)), aL.a4f(Math
			.floor(ek + i - .8 * sp), Math.floor(em + .25 * sp), Math.floor(.5 * sp)), tl.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9L, ek = [0, 0, 0, 0, 0],
		em = [0, 0, 0, 0, 0],
		mL = [1, 1, 1, 1, 1],
		f5 = [!0, !0, !0, !1, !1],
		ey = (this.fO = [!0, !0, !0, !1, !1], null);
	this.aB0 = function(a1m, aB1) {
		ey = a1m, f5 = aB1, a9L = [bI.aB2, bI.a00, bI.aB3, bI.aB3, bI.aB4], this.dU()
	}, this.dU = function() {
		if (aa.sK()) {
			var aA, rz = Math.floor((z.a0.r1() ? .261 : .195) * h.pf),
				s0 = Math.floor(.9 * rz),
				a70 = Math.floor(.17 * s0);
			if (gap = z.a0.r1() ? 2 * ba.gap : ba.gap, mL[0] = rz / ey[0].width, mL[1] = s0 / ey[1].width, mL[2] = a70 / ey[2].height, mL[3] = a70 / ey[3].height, mL[4] = a70 / ey[4].height, mL[2] *= 1.7, mL[3] *= 1.07, ek[0] = gap, ek[1] = gap,
				ek[2] = gap, ek[3] = gap, ek[4] = Math.floor(2 * gap + mL[3] * ey[3].width), em[0] = gap, em[1] = em[0] + gap + mL[0] * ey[0].height, em[2] = em[1] + gap + mL[1] * ey[1].height, em[3] = em[2] + gap + mL[2] * ey[2].height, em[4] =
				em[3], !f5[0])
				for (aA = 0; aA < 5; aA++) em[aA] -= mL[0] * ey[0].height + gap;
			if (!f5[1])
				for (aA = 2; aA < 5; aA++) em[aA] -= mL[1] * ey[1].height + gap
		}
	}, this.hK = function() {
		return !(7 === aZ.a05() && z.a0.r1())
	}, this.gq = function(hv, hw) {
		if (ey && this.hK())
			for (var aA = f5.length - 1; 0 <= aA; aA--)
				if (f5[aA] && this.fO[aA] && ek[aA] < hv && em[aA] < hw && hv < ek[aA] + mL[aA] * ey[aA].width && hw < em[aA] + mL[aA] * ey[aA].height) return s.t(9, s.rs, new aB5("You are leaving Territorial.io.", b8.pd.a2C(a9L[aA]))), !0;
		return !1
	}, this.tk = function() {
		if (ey && this.hK()) {
			var aA;
			for (tl.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f5[aA] && this.fO[aA] && (tl.setTransform(mL[aA], 0, 0, mL[aA], ek[aA], em[aA]), tl.drawImage(ey[aA], 0, 0));
			tl.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aB6 = 0, this.aB7 = null, this.sy = null, this.qn = null, this.x = null, this.tK = null, this.sw = null, this.message = null, this.aB8 = null, this.qt = null, this.aB9 = new aBA, this.a09 = 0, this.dU = function() {
		this.aB6 = bE.rv.vG(bh.eA.data[105].value), this.sy = new aBB, this.qn = new aBC, this.x = new aBD, this.tK = new aBE, this.sw = new aBF, this.message = new aBG, this.aB8 = new aBH, this.qt = new aBI, this.x.dU(), bn.dU(), this.a09 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.tE = function() {
		this.qt && this.qt.tE(), this.aB7 = null, this.sy = null, this.qn = null, this.x = null, this.tK = null, this.sw = null, this.message = null, this.aB8 = null, this.qt = null, this.a09 = 0, bn.tE(), z.a0.setState(0)
	}
}

function aBB() {
	function aBc(g, sC, sD) {
		var aBd = g[sC];
		g[sC] = g[sD], g[sD] = aBd
	}
	this.sz = [
		[],
		[],
		[],
		[]
	], this.t0 = [0, 0, 0, 0], this.aBJ = function(aBK, rq, username, t5, a2g, aBL, elo, color, uo, aBM) {
		this.sz[aBK].push(this.aBN(rq, username, t5, a2g, aBL, elo, color, uo, aBM)), bl.aB6 === rq && (bl.aB7 = this.sz[aBK][this.sz[aBK].length - 1]), bl.x.aBO += 29 === s.rs && bl.x.qg[0] === aBK && 1 === bl.x.qg[2]
	}, this.aBN = function(rq, username, t5, a2g, aBL, elo, color, uo, aBM) {
		return {
			rq: rq,
			username: username,
			t5: t5,
			a2g: a2g,
			aBL: aBL,
			elo: elo,
			color: color,
			uo: uo,
			aBM: aBM
		}
	}, this.aBP = function(dy, aBK, t5, a2g, aBL, elo, uo) {
		dy = this.sz[aBK][dy];
		dy.t5 = t5, dy.a2g = a2g, dy.aBL = aBL, dy.elo = elo, dy.uo = uo, bl.x.aBO += 29 === s.rs && bl.x.qg[0] === aBK && 1 === bl.x.qg[2]
	}, this.aBQ = function(dy, aBK, aBR) {
		var dy = this.sz[aBK][dy],
			aBS = dy.username,
			aBT = "Redacted " + bD.rv.yB(dy.rq, 2);
		dy.username = aBR ? "[" + b8.zY.zd(aBS) + "] " + aBT : aBT, aBS.indexOf("Redacted") < 0 && (dy.aBU = aBS, dy.aBV = 3), bl.x.aBO += 29 === s.rs && bl.x.qg[0] === aBK && 1 === bl.x.qg[2]
	}, this.aBW = function(dy, aBX, aBY) {
		var player = this.sz[aBX][dy];
		this.aBZ(dy, aBX), this.sz[aBY].push(player), bl.x.aBO += 29 === s.rs && bl.x.qg[0] === aBY && 1 === bl.x.qg[2]
	}, this.aBZ = function(dy, aBX) {
		var sy = this.sz[aBX];
		dy >= this.t0[aBX] ? sy[dy] = sy[sy.length - 1] : (this.t0[aBX]--, 2 === aBX ? (sy.splice(this.t0[aBX] + 1, 0, sy[sy.length - 1]), sy.splice(dy, 1)) : (sy[dy] = sy[this.t0[aBX]], sy[this.t0[aBX]] = sy[sy.length - 1])), sy.pop(), bl.x
			.aBO += 29 === s.rs && bl.x.qg[0] === aBX && 1 === bl.x.qg[2]
	}, this.aBa = function(dy, qf) {
		bl.x.aBO += 29 === s.rs && bl.x.qg[0] === qf && 1 === bl.x.qg[2];
		var sy = this.sz[qf],
			pV = sy[dy];
		if (2 === qf)
			if (dy >= this.t0[qf]) {
				for (var aBb = this.t0[qf], elo = pV.elo; aBb && elo > sy[aBb - 1].elo;) aBb--;
				sy[dy] = sy[this.t0[qf]], sy.splice(this.t0[qf]++, 1), sy.splice(aBb, 0, pV)
			} else sy.splice(this.t0[qf]--, 0, pV), sy.splice(dy, 1);
		else dy >= this.t0[qf] ? aBc(sy, this.t0[qf]++, dy) : aBc(sy, --this.t0[qf], dy)
	}, this.aBe = function(rq) {
		for (var sz = this.sz, ed = sz.length, aA = 0; aA < ed; aA++)
			for (var sy = sz[aA], ka = sy.length, ew = 0; ew < ka; ew++)
				if (rq === sy[ew].rq) return sy[ew];
		return null
	}
}

function aBA() {
	this.dd = function(dy) {
		if ((t0 = bl.sy.t0[dy]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qh = bl.x.qi[dy],
			aBf = 9 === qh.aBg ? 333 : 512,
			t0 = Math.min(t0, aBf);
		8 === qh.aBg && (t0 -= t0 % 2);
		aBf = bl.sy.sz[dy].splice(0, t0), bl.sy.t0[dy] -= t0, t0 = function(aBh) {
			if (bl.aB7) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var ed = aBh.length, rq = bl.aB7.rq, aA = 0; aA < ed; aA++)
					if (aBh[aA].rq === rq) return aA
			}
			return -1
		}(aBf);
		return -1 === t0 ? (bl.x.aBO += 29 === s.rs && bl.x.qg[0] === dy && 1 === bl.x.qg[2], !1) : (8 === qh.aBg && (qh.aBk = (qh.aBk + (t0 >> 1)) % 1024, dy = t0 - t0 % 2, t0 %= 2, aBf = aBf.slice(dy, 2 + dy)), av.dU(qh, aBf, t0), !0)
	}, this.aBl = function(qh, aBh, aBi) {
		var eg = aC.data = new a3O,
			aBp = (eg.spawningSeed = qh.spawningSeed, qh.aBg < 7 ? (eg.gameMode = 1, eg.numberTeams = qh.aBg + 2) : 9 === qh.aBg ? (eg.gameMode = eg.isZombieMode = 1, eg.numberTeams = 2) : (eg.gameMode = 0, eg.battleRoyaleMode = 7 === qh.aBg ?
				0 : 10 === qh.aBg ? 1 : 2), eg.selectedPlayer = aBi, eg.isContest = qh.aBm, eg.mapType = bQ.aBn(qh.eJ) ? 0 : 1, bQ.aBo(eg, qh.eJ), eg.mapSeed = qh.mapSeed, eg.humanCount = aBh.length);
		eg.selectableSpawn = 1 === eg.gameMode || aBp < 100, eg.colorsData = new Uint32Array(aBp), eg.playerNamesData = new Array(aBp);
		for (var aA = 0; aA < aBp; aA++) eg.colorsData[aA] = aBh[aA].color, eg.playerNamesData[aA] = aBh[aA].username;
		if (2 === eg.battleRoyaleMode)
			for (eg.elo = new Uint16Array(aBp), aA = 0; aA < aBp; aA++) eg.elo[aA] = aBh[aA].elo;
		aZ.setState(8), bQ.a6(qh.eJ, eg.mapSeed), aC.a3S(), aC.a3R = 2
	}
}

function aBC() {
	var dp = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aBq = [b9.mx, b9.mx, b9.my, b9.nR, b9.nS, b9.nE, b9.nX, b9.my, b9.np, b9.nf, b9.nr],
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
		aBs = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aC5(qj, rq) {
		for (var ex = qj.length - 1; 0 <= ex; ex--) {
			var pV = qj[ex];
			0 === pV.id && pV.rq === rq && (pV.p = "[Redacted Message]")
		}
	}
	this.qp = function(aBt) {
		var aBu, ze;
		return aBt.id < 5 && (aBu = "@" + bD.rv.yB(aBt.rq, 5)), 0 === aBt.id ? aBu + ": " + aBt.p : 1 === aBt.id ? (ze = "@" + bD.rv.yB(aBt.target, 5), 0 === aBt.aBv ? 32768 <= aBt.value ? aBu + " voted with " + (aBt.value - 32768 + 1) +
				" gold against " + ze + " to weaken the latter's admin position." : aBu + " voted with " + (aBt.value + 1) + " gold for " + ze + " to strengthen the latter's admin position." : 1 === aBt.aBv ? aBu + " sent " + Math.floor(aBt
					.value / 100) + " Gold to " + ze + "." : aBu + " voted with " + aBt.value + " points for " + ze + " to acknowledge the latter as clan leader.") : 2 === aBt.id ? 0 === aBt.aBv ? aBu + " was muted. Duration: 1 Hour" : 1 === aBt
			.aBv ? "The username of " + aBu + " was redacted. Duration: 1 Day" : aBu + " was kicked." : 3 === aBt.id ? aBu + bm.e1(aBt.aBv, bm.dv[aBt.aBv][aBt.value]) + "@" + bD.rv.yB(aBt.target, 5) + bm.e3(aBt.aBv, bm.dv[aBt.aBv][aBt.value]) :
			4 === aBt.id ? aBu + bm.e1(5, bm.dv[5][aBt.aBv]) + "@" + bD.rv.yB(aBt.target, 5) + bm.e3(5, bm.dv[5][aBt.aBv]) : 5 === aBt.id ? aBs[aBt.aBv] : 6 === aBt.id ? "You are about to mention " + aBt.value + " player" + (1 === aBt.value ?
				"" : "s") + ". This action will cost " + (Math.max(10 * aBt.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qo = function(aBt, a5h) {
		return {
			aBt: aBt,
			p: a5h,
			aBw: 0,
			fontSize: 1,
			qs: 0,
			aBx: aBt.id ? b9.nQ : b9.mj
		}
	}, this.t3 = function(player, qf) {
		return (2 === qf ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.t4 = function(t5) {
		return aBq[t5]
	}, this.aBy = function(t5, a2g) {
		return t5 < 3 || 7 === t5 ? aBr[t5][0] : 4 === t5 ? aBr[t5][a2g < 1 ? 0 : a2g < 10 ? 1 : 2] : aBr[t5][a2g < 10 ? 0 : 1]
	}, this.aBz = function(a2g) {
		return 0 === a2g
	}, this.aBe = function(qf, rq) {
		for (var sz = bl.sy.sz, sy = sz[qf], ed = sy.length, aA = 0; aA < ed; aA++)
			if (rq === sy[aA].rq) return sy[aA];
		for (var ex = 0; ex < sz.length; ex++)
			if (qf !== ex)
				for (ed = (sy = sz[ex]).length, aA = 0; aA < ed; aA++)
					if (rq === sy[aA].rq) return sy[aA];
		return null
	}, this.t6 = function(pV) {
		return !!bl.aB7 && pV.rq === bl.aB7.rq
	}, this.aC0 = function(sy, aC1, aC2) {
		var zb = [];
		loop: for (var aA = aC1; aA < aC2; aA++) {
			var zc = b8.zY.zd(sy[aA].username);
			if (zc) {
				for (var ex = zb.length - 1; 0 <= ex; ex--)
					if (zc === zb[ex].name) {
						zb[ex].g5++;
						continue loop
					} zb.push({
					name: zc,
					g5: 1
				})
			}
		}
		if (zb.sort(function(ew, ex) {
				return ex.g5 - ew.g5
			}), 0 === zb.length) return "";
		for (var pK = zb[0].name + ": " + zb[0].g5, aA = 1; aA < zb.length; aA++) pK += "   " + zb[aA].name + ": " + zb[aA].g5;
		return pK
	}, this.aC3 = function(t5, a2g, aBL) {
		return 0 === dp[t5].length ? "Rank: " + (a2g + 1) : dp[t5] + " Rank: " + (a2g + 1) + (3 !== t5 && aBL < 100 ? "   " + dp[3] + " Rank: " + (aBL + 1) : "")
	}, this.aC4 = function(rq) {
		for (var qi = bl.x.qi, aA = 0; aA < qi.length; aA++) aC5(qi[aA].qj, rq);
		aC5(bl.message.aC6(), rq), bl.qt.aC4(rq)
	}
}

function aBF() {
	var rL = 0,
		aC7 = 0,
		aC8 = 0,
		aC9 = null,
		aCA = null;

	function aCD(pV, aCE, aCF) {
		var pK = pV.username;
		return (pK += "   " + bl.qn.aC3(pV.t5, pV.a2g, pV.aBL)) + function(pV) {
			pV = pV.uo;
			if (pV < 1e3) return "   Gold: " + pV;
			if ((pV %= 1024) < 1e3) return "   Gold: " + pV + "k";
			return "   Gold: " + (pV - 999) + "M"
		}(pV) + ("   IP: " + bD.rv.yB(pV.aBM, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aCF ? aC7 : aCC(pV, aCE)])
	}

	function aCC(pV, aCE) {
		return aC7 = aCE || bl.sy.aBe(pV.rq) ? 1 : 0
	}
	this.aCB = function() {
		!rL || aC7 === aCC(aCA) && aC8 === aCA.uo || (aC8 = aCA.uo, aC9.show(-1, -1, aCD(aCA, 0, 1), 1, 1))
	}, this.t7 = function(e, pV, aCE) {
		var a77 = e.target.getBoundingClientRect();
		this.show(a77.left, a77.top, pV, 0, aCE), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.sw && bl.sw.qu(1)
		})
	}, this.show = function(ek, em, pV, rP, aCE) {
		aC9 = aC9 || new rJ, aC8 = (aCA = pV).uo, aC9.show(ek, em, aCD(pV, aCE), rP), rL = 1
	}, this.qu = function(rV) {
		aC9 && aC9.qu(rV) && (rL = 0, aCA = null)
	}
}

function aBD() {
	function aCK(aCN) {
		bl.x.aBO && 1 === bl.x.qg[2] && s.aCO(29).aCP(), bl.x.aBO = 0, s.aCO(29).aCQ(), 0 !== bl.x.qi[bl.x.qg[0]].sj && !aCN || s.aCO(29).aCR(), bl.sw.aCB()
	}
	this.qi = new Array(4), this.qg = [0, 0, 1, 0], this.aBO = 0, this.aCH = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qi.length; aA++) this.qi[aA] = new aCI;
		this.qg[0] = bh.eA.data[158].value
	}, this.aCJ = function() {
		aCK(!0)
	}, this.aCL = function() {
		for (var aA = 0; aA < bl.x.qi.length; aA++) {
			var qh = bl.x.qi[aA];
			0 === qh.sj ? qh.aCS = 0 : (qh.aCT = Math.max(qh.aCT - qh.aCS % 2, 0), qh.aCS++)
		}
		aCK(!1)
	}, this.aCU = function(qf) {
		this.qg[0] !== qf || this.qg[2] || s.aCO(29).aCV()
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

	function aCl(g5) {
		aCW = 1, bl.message.aCp({
			id: 6,
			value: g5
		})
	}

	function aCf(p) {
		var aCs = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCs)
	}
	this.yx = function(p) {
		var aCb, g, aCh;
		if (aCW) return aCW = 0, "yes" === (aCb = p.toLowerCase()) || "y" === aCb ? void aCc(aCX) : void bl.message.aCp({
			id: 5,
			aBv: 7
		});
		!(p.indexOf("@") < 0) && (aCb = aCf(p)) ? (aCX = p, g = function(aCe) {
			for (var ed = aCe.length, aCq = [0, 0, 0, 0], aA = 0; aA < ed; aA++)
				for (var i = aCe[aA], ew = 0; ew < 4; ew++) i === "@room" + (ew + 1) && (aCq[ew] = 1);
			if ((aCZ = b8.pm.a1Q(aCq)) % 4 == 0) return b8.pm.a1i(bl.sy.sz);
			for (ew = 0; ew < 4; ew++) aCq[ew] = aCq[ew] ? bl.sy.sz[ew] : [];
			return b8.pm.a1i(aCq)
		}(aCb), function(aCe, aCh, p) {
			if (!aCY) return;
			for (var ed = aCh.length, aA = 0; aA < ed; aA++) 2 === aCh[aA].id && (p = p.replace(aCe[aCh[aA].dy], "@" + aCh[aA].f5));
			return aCW = 1, aCc((aCX = p).slice(0, 126) + "|"), 1
		}(aCb, aCh = function(aCe) {
			for (var aCh = [], ed = (aCa = aCY = 0, aCe.length), aA = 0; aA < ed; aA++) {
				var i = aCe[aA],
					ka = i.length;
				b8.zY.startsWith(i, "@[") ? ka <= 9 && b8.zY.a2G(i, "]") && aCh.push({
					id: 0,
					f5: i.substring(2, ka - 1).toUpperCase()
				}) : 6 === ka ? b8.zY.startsWith(i, "@room") || (aCa++, aCh.push({
					id: 1,
					f5: bE.rv.vG(i.substring(1))
				})) : 1 < ka && ka < 5 && 0 <= (ka = b5.data.aAk(i.substring(1))) && (aCh.push({
					id: 2,
					f5: ka,
					dy: aA
				}), aCY = 1)
			}
			return aCh
		}(aCb), p) || (0 === aCh.length ? aCZ || function(aCe) {
			for (var ed = aCe.length, aA = 0; aA < ed; aA++) {
				var i = aCe[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCb) ? aCl(g.length) : aCc(p) : aCb.length === aCa ? aCc(p) : (function(g, aCh) {
			var ka = aCh.length;
			if (0 === ka) return;
			var ed = g.length;
			loop: for (var aA = ed - 1; 0 <= aA; aA--) {
				for (var ew = 0; ew < ka; ew++)
					if (0 === aCh[ew].id) {
						if (aCh[ew].f5 === b8.zY.zd(g[aA].username)) continue loop
					} else if (1 === aCh[ew].id && aCh[ew].f5 === g[aA].rq) continue loop;
				g[aA] = g[--ed], g.pop()
			}
		}(g, aCh), aCl(g.length)))) : aCc(p)
	}, this.aCt = function(p) {
		var aCe = aCf(p);
		if (aCe)
			for (var a4 = new RegExp("^[0-9]+$"), ed = aCe.length, aA = 0; aA < ed; aA++) {
				var i = aCe[aA].substring(1),
					ka = i.length;
				1 <= ka && ka <= 3 && a4.test(i) && (ka = parseInt(i, 10), !isNaN(ka)) && 0 <= ka && ka < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[ka]))
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
		aCx = bd.eC, (3 === this.tB ? (aCy = 1, aD1) : (aCw = (aCv.length + aCw + 2 * this.tB - 1) % aCv.length, aD0))()
	}

	function aD0() {
		0 !== aCv.length && (aCy = 0, aCu && aCu.tE(), (aCu = new t8(aD2)).r6(aCw, aCv.length), aCu.show(aCv[aCw]), bl.message.resize())
	}

	function aD1() {
		aCu && aCu.tE(), (aCu = new tF(aD0)).r6(aCv.length), aCu.show(), bl.message.resize()
	}
	this.aCp = function(aBt) {
		var pV;
		2 === aBt.id && 3 === aBt.aBv ? bl.qn.aC4(aBt.rq) : (pV = bl.qn.qo(aBt, bl.qn.qp(aBt)), (5 !== aBt.id && 6 !== aBt.id || (s.aCO(29).aCz().qr(pV), 5 === aBt.id)) && (pV = bd.eC < aCx + 2e4, aCw !== aCv.length - 1 && pV || (aCw = aCv
			.length), aCv.push(aBt), bh.eA.data[14].value || bn.play(), aCu) && (bh.eA.data[13].value || aCy && pV ? aCu.r6(aCv.length) : aD0()))
	}, this.show = function() {
		aD1()
	}, this.qu = function() {
		aCw = aCv.length - 1, aCu && aCu.tE(), aCu = null
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
		0 !== aD4.t5 && (bl.tK.qu(), s.t(8, 29, new rt(25, {
			ru: 0,
			rq: bD.rv.yB(aD4.rq, 5),
			rr: 0
		}, 29)))
	}

	function aDA() {
		var ek = aD3.ek,
			em = aD3.em;
		bl.tK.qu(), aD3 = new tG([new v("Kick User", function() {
			aDG(0, 0)
		}, aDL(0, 0)), new v("Block Chat", aDH, aDM(1)), new v("Censor Username", aDI, aDM(2)), new v("Elo Deduction", aDJ, aDM(3)), new v("Gold Seizure", aDK, aDM(4))]), aDF(ek, em), aD5 = 2, aD6 = 1
	}

	function aDM(id) {
		return !bl.aB7 || bl.qn.t6(aD4) || bl.aB7.aBL >= aD4.a2g || 0 === id && aD4.a2g < 200 ? 1 : 1 - bm.dw(id, bl.aB7.aBL, 0)
	}

	function aDD() {
		return !bl.aB7 || bl.qn.t6(aD4) ? 1 : 0
	}

	function aDL(id, dy) {
		var a2g;
		return !bl.aB7 || bl.qn.t6(aD4) || (a2g = bl.aB7.aBL) >= aD4.a2g ? 1 : 1 - bm.dw(id, a2g, dy)
	}

	function aDC() {
		var ek = aD3.ek,
			em = aD3.em,
			aDN = (bl.tK.qu(), aDD());
		aD3 = new tG([new v(bm.dv[5][0], function() {
			aDG(5, 0)
		}, aDN), new v(bm.dv[5][1], function() {
			aDG(5, 1)
		}, aDN), new v(bm.dv[5][2], function() {
			aDG(5, 2)
		}, aDN), new v(bm.dv[5][3], function() {
			aDG(5, 3)
		}, aDN)]), aDF(ek, em), aD6 = aD5 = 2
	}

	function aDE() {
		29 === s.rs && s.aDO().aB8(bD.rv.yB(aD4.rq, 5))
	}

	function aDG(id, value) {
		ay.aCn.aCo(5, {
			id: id,
			value: value,
			rq: aD4.rq
		})
	}

	function aDH() {
		var ek = aD3.ek,
			em = aD3.em;
		bl.tK.qu(), aD3 = new tG([new v(bm.dv[1][0], function() {
			aDG(1, 0)
		}, aDL(1, 0)), new v(bm.dv[1][1], function() {
			aDG(1, 1)
		}, aDL(1, 1)), new v(bm.dv[1][2], function() {
			aDG(1, 2)
		}, aDL(1, 2)), new v(bm.dv[1][3], function() {
			aDG(1, 3)
		}, aDL(1, 3)), new v(bm.dv[1][4], function() {
			aDG(1, 4)
		}, aDL(1, 4))]), aDF(ek, em), aD5 = 3, aD6 = 1
	}

	function aDI() {
		var ek = aD3.ek,
			em = aD3.em;
		bl.tK.qu(), aD3 = new tG([new v(bm.dv[2][0], function() {
			aDG(2, 0)
		}, aDL(2, 0)), new v(bm.dv[2][1], function() {
			aDG(2, 1)
		}, aDL(2, 1)), new v(bm.dv[2][2], function() {
			aDG(2, 2)
		}, aDL(2, 2))]), aDF(ek, em), aD5 = 3, aD6 = 2
	}

	function aDJ() {
		var ek = aD3.ek,
			em = aD3.em;
		bl.tK.qu(), aD3 = new tG([new v(bm.dv[3][0], function() {
			aDG(3, 0)
		}, aDL(3, 0)), new v(bm.dv[3][1], function() {
			aDG(3, 1)
		}, aDL(3, 1)), new v(bm.dv[3][2], function() {
			aDG(3, 2)
		}, aDL(3, 2))]), aDF(ek, em), aD6 = aD5 = 3
	}

	function aDK() {
		var ek = aD3.ek,
			em = aD3.em;
		bl.tK.qu(), aD3 = new tG([new v(bm.dv[4][0], function() {
			aDG(4, 0)
		}, aDL(4, 0)), new v(bm.dv[4][1], function() {
			aDG(4, 1)
		}, aDL(4, 1)), new v(bm.dv[4][2], function() {
			aDG(4, 2)
		}, aDL(4, 2)), new v(bm.dv[4][3], function() {
			aDG(4, 3)
		}, aDL(4, 3)), new v(bm.dv[4][4], function() {
			aDG(4, 4)
		}, aDL(4, 4))]), aDF(ek, em), aD5 = 3, aD6 = 4
	}

	function aDF(ek, em, tM) {
		aD3.show(ek, em, tM), bl.sw.show(aD3.ek, aD3.em, aD4, 1)
	}
	this.aD8 = function(e, pV) {
		aD5 = 1, aD4 = pV, aD3 = new tG([new v(L(128), aD9, 0 === aD4.t5 ? 1 : 0), new v(L(129), aDA, function() {
			if (!bl.aB7) return 1;
			if (bl.qn.t6(aD4)) return 1;
			if (100 <= bl.aB7.aBL) return 1;
			if (bl.aB7.aBL >= aD4.a2g) return 1;
			return 0
		}()), new v(L(130, 0, "Report"), aDC, aDD()), new v(L(131), aDE, 0)]), aDF((aD7 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aD7.clientY, 1)
	}, this.a0z = function(code) {
		if (29 !== s.rs) return !1;
		if (!aD4) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qu();
			else if (b8.zY.startsWith(code, "Numpad") || b8.zY.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aD5) this.aD8(aD7, aD4);
				else {
					if (!aD3) return !1;
					1 === aD5 ? code <= 1 ? aD9() : 2 === code ? aDA() : 3 === code ? aDC() : (aDE(), this.qu()) : 2 === aD5 ? 1 === aD6 ? code <= 1 ? (aDG(0, 0), this.qu()) : (2 === code ? aDH : 3 === code ? aDI : 4 === code ? aDJ : aDK)() : (
						aDG(5, bJ.pB(code - 1, 0, 3)), this.qu()) : (aDG(aD6, bJ.pB(code - 1, 0, bm.dv[aD6].length - 1)), this.qu())
				}
		}
		return !0
	}, this.qu = function() {
		aD5 = 0, aD3 && aD3.qu(), aD3 = null, bl.sw.qu()
	}
}

function aCI() {
	this.sj = 0, this.eJ = 0, this.mapSeed = 0, this.aBg = 0, this.aDP = 0, this.aDQ = 0, this.aBm = 0, this.aCT = 0, this.spawningSeed = 0, this.a0B = 0, this.aBk = 0, this.qj = [], this.qk = 1048575, this.aCS = 0, this.aDR = [{
		eJ: 0,
		mapSeed: 0,
		aBg: 0,
		eC: 100,
		aBm: 0
	}, {
		eJ: 1,
		mapSeed: 0,
		aBg: 1,
		eC: 200,
		aBm: 0
	}, {
		eJ: 2,
		mapSeed: 0,
		aBg: 2,
		eC: 300,
		aBm: 0
	}, {
		eJ: 3,
		mapSeed: 0,
		aBg: 3,
		eC: 400,
		aBm: 0
	}, {
		eJ: 0,
		mapSeed: 0,
		aBg: 9,
		eC: 500,
		aBm: 0
	}, {
		eJ: 1,
		mapSeed: 0,
		aBg: 10,
		eC: 600,
		aBm: 0
	}, {
		eJ: 2,
		mapSeed: 0,
		aBg: 8,
		eC: 700,
		aBm: 0
	}, {
		eJ: 3,
		mapSeed: 0,
		aBg: 3,
		eC: 800,
		aBm: 0
	}]
}

function aBI() {
	var aDS = [],
		s5 = [],
		aDT = [];

	function aDV(pV) {
		for (var p = pV.p, aDU = [];;) {
			var ey = function aDX(p, position) {
				position = p.indexOf("@", position);
				if (position < 0) return -1;
				var pK = p.substring(position + 1, position + 6);
				if (5 !== pK.length) return aDX(p, position + 1);
				if (b8.zY.startsWith(pK, "room")) return aDX(p, position + 1);
				var aDe = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aDe.test(pK)) return aDX(p, position + 1);
				aDe = p.substring(position + 6, position + 7);
				if (1 !== aDe.length) return position;
				pK = new RegExp("^[ :!.]+$");
				if (!pK.test(aDe)) return aDX(p, position + 1);
				return position
			}(p, 0);
			if (-1 === ey) {
				aDU.push(aDY(p, pV));
				break
			}
			0 === ey ? aDU.push(aDZ(p.substring(1, 6), pV, ey)) : (aDU.push(aDY(p.substring(0, ey), pV)), aDU.push(aDZ(p.substring(ey + 1, ey + 6), pV, ey))), p = p.substring(ey + 6)
		}
		return aDU
	}

	function aDZ(pK, pV, ey) {
		var aDa = function(pK) {
				var rq = bE.rv.vG(pK),
					aDa = bl.sy.aBe(rq);
				if (aDa) {
					for (aDS.push(aDa); 50 < aDS.length;) aDS.shift();
					return aDa
				}
				for (var aA = aDS.length - 1; 0 <= aA; aA--)
					if (rq === aDS[aA].rq) return aDa = aDS[aA], aA < 40 && aDS.push(aDa), aDa;
				return bl.sy.aBN(rq, pK, 1, 999999, 999999, 0, 0, 0, 0)
			}(pK),
			pK = (0 === ey && 0 === pV.aBt.id && pV.qs && (pV.fontSize = bl.qn.aBy(aDa.t5, aDa.a2g), pV.aBw = bl.qn.aBz(aDa.a2g)), document.createElement("span"));
		return pK.textContent = function(aDa, pV, ey) {
			pV = aDa.aBV && aDa.aBV-- && (2 === pV.aBt.id || (3 === pV.aBt.id || 4 === pV.aBt.id) && 0 !== ey);
			return aDa.username + (pV ? " (" + aDa.aBU + ")" : "")
		}(aDa, pV, ey), pK.style.display = "inline-block", pK.style.color = bl.qn.t4(aDa.t5), pK.style.cursor = "pointer", pK.style.margin = "0", pK.style.font = "inherit", pK.style.minWidth = pK.style.minHeight = "1em", bl.qn.t6(aDa) && (pK
			.style.textDecoration = "underline"), bl.qn.aBz(aDa.a2g) && (pK.style.fontWeight = "bold"), pK.onclick = function(e) {
			bl.tK.aD8(e, aDa)
		}, bH.q6() || (pK.onmouseover = function(e) {
			bl.sw.t7(e, aDa)
		}), s5.push(pK), pK
	}

	function aDY(p, pV) {
		var qc = document.createElement("span");
		return qc.textContent = p, qc.style.color = pV.aBx, qc.style.margin = "0", qc.style.font = "inherit", qc
	}
	this.tE = function() {
		for (var aA = 0; aA < s5.length; aA++) s5[aA].onclick = s5[aA].onmouseover = null;
		aDT = s5 = null
	}, this.transform = function(pV) {
		for (var pI = document.createElement("div"), aDU = aDV(pV), aA = 0; aA < aDU.length; aA++) pI.appendChild(aDU[aA]);
		0 === pV.aBt.id && (pI.vx143 = pV.aBt, aDT.push(pI)), pI.style.margin = "0.6em 0.6em", pV.qs && (pI.style.marginLeft = pI.style.marginRight = "inherit"), pI.style.font = "inherit";
		var aDW = 0 < pV.aBt.id;
		return pV.aBw && (pI.style.fontWeight = "bold"), aDW && (pI.style.paddingLeft = "0.7em"), aDW && (pI.style.fontStyle = "italic"), pI.style.fontSize = pV.fontSize.toFixed(2) + "em", pI
	}, this.aC4 = function(rq) {
		for (var aDh = aDT, aA = aDh.length - 1; 0 <= aA; aA--) {
			var eg = aDh[aA];
			if (eg.vx143.rq === rq) {
				for (; eg.firstChild;) eg.removeChild(eg.firstChild);
				eg.vx143.p = "[Redacted Message]";
				for (var aDU = aDV(bl.qn.qo(eg.vx143, bl.qn.qp(eg.vx143))), ew = 0; ew < aDU.length; ew++) eg.appendChild(aDU[ew]);
				aDh.splice(aA, 1)
			}
		}
	}
}

function cK() {
	var aDi, aDj, aDk;

	function aDp(aA) {
		var button = aX.qD[aA],
			ek = button.ek,
			em = button.em,
			i = button.i,
			j = button.j;
		tl.fillStyle = button.aDn, tl.fillRect(ek, em, i, j), aA === aDi && (tl.fillStyle = aDk, tl.fillRect(ek, em, i, j)), tl.lineWidth = ba.xu, tl.strokeStyle = aDj, tl.strokeRect(ek, em, i, j),
			function(button) {
				var ek = button.ek,
					em = button.em,
					i = button.i,
					j = button.j;
				b8.pd.textAlign(tl, 1), b8.pd.textBaseline(tl, 1), tl.font = button.font, tl.fillStyle = aDj, tl.fillText(button.a5h, Math.floor(ek + i / 2), Math.floor(em + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.em = 0, this.gap = 0, this.dU = function() {
		aDi = -1, aDj = b9.mj, aDk = "rgba(255,255,255,0.16)", this.qD = new Array(7), this.j = Math.floor((z.a0.r1() ? .123 : .093) * h.pf), this.i = Math.floor((z.a0.r1() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDl = Math.floor(.26 * this.j),
			aDm = b8.pd.rS(1, aDl);
		this.qD[0] = {
			ek: 0,
			em: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5h: "Multiplayer",
			font: aDm,
			aDn: "rgba(22,88,22,0.8)",
			fontSize: aDl
		}, aDl = Math.floor(.18 * this.j), aDm = b8.pd.rS(1, aDl), this.qD[1] = {
			ek: 0,
			em: 0,
			i: this.i - this.qD[0].i - this.gap,
			j: this.j,
			a5h: "Single Player",
			font: aDm,
			aDn: "rgba(22,88,88,0.8)",
			fontSize: aDl
		}, this.qD[2] = {
			ek: 0,
			em: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5h: "",
			font: this.qD[1].font,
			aDn: "rgba(100,0,0,0.8)",
			fontSize: this.qD[1].fontSize
		}, this.qD[3] = {
			ek: 0,
			em: 0,
			i: this.i,
			j: this.j,
			a5h: "Back",
			font: this.qD[0].font,
			aDn: "rgba(0,0,0,0.8)",
			fontSize: this.qD[0].fontSize
		}, this.qD[4] = {
			ek: 0,
			em: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5h: "The game was updated!",
			font: this.qD[1].font,
			aDn: "rgba(100,0,0,0.8)",
			fontSize: this.qD[1].fontSize
		}, this.qD[5] = {
			ek: 0,
			em: 0,
			i: this.qD[0].i,
			j: Math.floor(.8 * this.j),
			a5h: "Reload",
			font: this.qD[0].font,
			aDn: "rgba(0,100,0,0.8)",
			fontSize: this.qD[0].fontSize
		}, this.qD[6] = {
			ek: 0,
			em: 0,
			i: this.qD[1].i,
			j: this.qD[5].j,
			a5h: "Back",
			font: this.qD[0].font,
			aDn: "rgba(0,0,0,0.8)",
			fontSize: this.qD[0].fontSize
		}, this.a84()
	}, this.a84 = function() {
		this.em = Math.floor(.54 * h.j), this.qD[0].ek = Math.floor(.5 * h.i - .5 * this.i), this.qD[1].ek = this.qD[0].ek + this.qD[0].i + this.gap, this.qD[2].ek = this.qD[3].ek = this.qD[0].ek, this.qD[4].ek = this.qD[5].ek = this.qD[0].ek,
			this.qD[6].ek = this.qD[1].ek, this.qD[0].em = Math.floor(.54 * h.j), this.qD[1].em = this.qD[0].em, this.qD[2].em = Math.floor((h.j - this.qD[2].j - this.qD[3].j - this.gap) / 2), this.qD[3].em = this.qD[2].em + this.qD[2].j + this
			.gap, this.qD[4].em = Math.floor((h.j - this.qD[4].j - this.qD[5].j - this.gap) / 2), this.qD[5].em = this.qD[6].em = this.qD[4].em + this.qD[4].j + this.gap
	}, this.aDo = function() {
		aDp(0), aDp(1)
	}, this.aDq = function() {
		aDp(2), aDp(3)
	}, this.aDr = function() {
		aDp(4), aDp(5), aDp(6)
	}, this.a0R = function(ek, em, lU) {
		var aA = -1;
		return 0 === aZ.a05() ? aA = this.a0v(ek, em, 0, 2) : 3 === aZ.a05() ? aA = this.a0v(ek, em, 3, 1) : 5 === aZ.a05() && (aA = this.a0v(ek, em, 5, 2)), aDi !== aA && (aDi = aA, lU) && (bd.dc = !0), -1 !== aA && (aS.qd(), !0)
	}, this.a0v = function(ek, em, aDs, size) {
		for (var aA = aDs; aA < aDs + size; aA++)
			if (ek >= this.qD[aA].ek && em >= this.qD[aA].em && ek <= this.qD[aA].ek + this.qD[aA].i && em <= this.qD[aA].em + this.qD[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDu, aDv, aDw, aDx, aDy, aDz, aE0, aE1, aE2, aE3, aE4, aE5, aE6, aE7 = 1;

	function aE9(aEA) {
		!aEA && 1 === aE6 && aE7 ? (aE7 = 0, ay.x.close(aE6, 3280)) : aE6 = (aE6 + 1) % ay.x.aEB, aE5 = bd.eC, ay.x.aEC(aE6, 4) && ay.aCn.aED(aE6)
	}

	function aEE() {
		if (0 !== aE6) return 1 === aE6 && __fx.customLobby.isActive() ? (q.a0G(3249), __fx.customLobby.setActive(!1)) : void aE9();
		q.a0G(3249)
	}

	function aEJ(em, a7l, sj) {
		var m9 = Math.floor((h.i - aDx) / 2) + aE0,
			mM = m9 + Math.floor(sj * (aDx - 2 * aE0));
		tl.lineWidth = a7l, tl.beginPath(), tl.moveTo(m9, em), tl.lineTo(mM, em), tl.lineTo(Math.floor(m9 - aE0 + sj * aDx), em + aDw), tl.lineTo(m9 - aE0, em + aDw), tl.closePath()
	}
	this.aE8 = 1, this.dU = function() {
		aZ.setState(6), aDu = 0, aDv = 1, aE1 = "rgba(0,220,120,0.4)", aE2 = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aE7 = 1, aE6 = this.aE8 - 1, aE9(1)
	}, this.resize = function() {
		aDx = Math.floor((z.a0.r1() ? .5 : .25) * h.pf), aDy = aDx + 12, aDw = Math.floor(.125 * aDx), aE0 = 3 * aDw, aDz = Math.floor(.225 * aDx), aE4 = Math.floor(.3 * aDw), aE3 = b8.pd.rS(0, aE4)
	}, this.a08 = function(a02) {
		a02 === aE6 && aEE()
	}, this.gq = function(ek, em) {
		var m9 = Math.floor((h.i - aDy) / 2),
			mA = Math.floor(.5 * (h.j - ba.gap - aDw - aDz)) + aDw + ba.gap;
		return m9 < ek && ek < m9 + aDy && mA < em && em < mA + aDz && (this.a17(), aX.a0R(ek, em, !1), !0)
	}, this.a17 = function() {
		ay.x.a0H(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.im = function() {
		6 === aZ.a05() && (bd.eC > aE5 + 12e3 && aEE(), 100 < (aDu += .07 * aDv * (aDu < 16 ? 5 + aDu : 84 < aDu ? 105 - aDu : 17)) ? (aDu = 100, aDv = -1) : aDu < 0 && (aDu = 0, aDv = 1), aE1 = "rgba(0," + Math.floor(190 - 1.9 * aDu) + "," +
			Math.floor(120 - 1.2 * aDu) + "," + (.4 + .004 * aDu) + ")", aE2 = "rgba(0," + Math.floor(1.9 * aDu) + "," + Math.floor(1.2 * aDu) + "," + (.8 - .004 * aDu) + ")", bd.dc = !0)
	}, this.tk = function() {
		var ek = Math.floor((h.i - aDy) / 2),
			em = Math.floor(.5 * (h.j - ba.gap - aDw - aDz));
		! function(title, em, a7l, sj) {
			tl.fillStyle = aE2, aEJ(em, a7l, 1), tl.fill(), tl.fillStyle = aE1, aEJ(em, a7l, sj), tl.fill(), tl.strokeStyle = b9.mj, aEJ(em, a7l, 1), tl.stroke(),
				function(aEL, em) {
					b8.pd.textAlign(tl, 1), b8.pd.textBaseline(tl, 1), tl.font = aE3, tl.fillStyle = b9.mj, tl.fillText(aEL, Math.floor(.5 * h.i), Math.floor(em + .58 * aDw))
				}(title, em)
		}(L(132), em, 3, aDu / 100),
		function(ek, em, i, j, a5h) {
			tl.fillStyle = b9.me, tl.fillRect(ek, em, i, j), tl.lineWidth = 3, tl.strokeStyle = b9.mj, tl.strokeRect(ek, em, i, j);
			var ed = Math.floor(.3 * j);
			b8.pd.textAlign(tl, 1), b8.pd.textBaseline(tl, 1), tl.font = b8.pd.rS(0, ed), tl.fillStyle = b9.mj, tl.fillText(a5h, Math.floor(ek + i / 2), Math.floor(em + j / 2 + .1 * ed))
		}(ek, em + aDw + ba.gap, aDy, aDz, L(35))
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
		if (!bQ.vW) return !1;
		if (!(bd.eC < 400)) {
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
		return !!bX.qu()
	}, this.gq = function(ek, em) {
		!bQ.vW || bX.gq(ek, em) || 6 === zy && aY.gq(ek, em) || bW.gq(ek, em) || aS.gq(ek, em)
	}, this.a0R = function(ek, em) {
		!aS.a7x && aX.a0R(ek, em, !0) || aS.a0R(ek, em)
	}, this.click = function(ek, em) {
		aS.a0q()
	}, this.a0U = function(ek, em, deltaY) {}, this.aEQ = function() {
		aX.a84(), bd.dc = !0
	}, this.tk = function() {
		8 !== zy && 10 !== zy && (tl.imageSmoothingEnabled = !0, this.x4(), 0 !== zy && (aS.tk(), aN.tk(), this.aER(), bW.tk()), 0 !== zy && 6 === zy && aY.tk(), bX.tk(), s.tk())
	}, this.x4 = function() {
		var aET, aES;
		if (__fx.makeMainMenuTransparent) tl.clearRect(0, 0, h.i, h.j);
		else bQ.vW ? (aES = h.i / bQ.eo, aET = h.j / bQ.ep, tl.setTransform(aES = aET < aES ? aES : aET, 0, 0, aES, Math.floor((h.i - aES * bQ.eo) / 2), Math.floor((h.j - aES * bQ.ep) / 2)), tl.drawImage(bQ.vY, 0, 0), tl.setTransform(1, 0, 0, 1,
			0, 0), tl.fillStyle = b9.me) : tl.fillStyle = b9.ma, tl.fillRect(0, 0, h.i, h.j)
	}, this.aER = function() {
		var em = Math.floor(.3 * h.j),
			canvas = aa.aEU("territorial.io"),
			hZ = (hZ = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hZ,
			ek = (tl.globalAlpha = .15, tl.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hZ * canvas.width))),
			ek = Math.floor(ek / hZ),
			em = Math.floor(em - .5 * canvas.height * hZ),
			em = Math.floor(em / hZ);
		tl.setTransform(hZ, 0, 0, hZ, ek, em), tl.drawImage(canvas, ek, em), tl.setTransform(1, 0, 0, 1, 0, 0), tl.globalAlpha = 1, tl.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBk = 0;
	var aEW, aEX, aEY, aEZ, aEa, aEb = this.aEV = 0;

	function aEe() {
		aEZ = aEa = null, aEb = 0
	}
	this.dU = function(qh, aBh, aBi) {
		s.w(), bl.tE(), aZ.setState(10), aEZ = qh, aEa = aBh, aEb = aBi, this.aBk = qh.aBk, this.aEV = aBi, aEW = 0, aEX = bd.eC + 4500, ay.x.a0B = qh.a0B, ay.x.a0A === qh.a0B ? (console.log("direct pass"), aEY = 0) : (console.log(
			"delayed pass"), ay.x.close(ay.x.a0A, 3247), aEY = 2, ay.x.aEC(qh.a0B, 5) && ay.o2.aEc()), tl.imageSmoothingEnabled = !0, aZ.x4();
		aBh = aa.aEU("loading"), aBi = (z.a0.r1() ? .396 : .25) * h.pf / aBh.width;
		tl.setTransform(aBi, 0, 0, aBi, Math.floor((h.i - aBi * aBh.width) / 2), Math.floor((h.j - aBi * aBh.height) / 2)), tl.imageSmoothingEnabled = !1, tl.drawImage(aBh, 0, 0), tl.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lS = function() {
		0 < aEY && bd.eC > aEX && (aEY--, aEX += 4500, 0 === bd.aEg) && 0 === bd.jp() && ay.x.aEC(ay.x.a0B, 5)
	}, this.aEh = function() {
		return 10 === aZ.a05() && (bl.aB9.aBl(aEZ, aEa, aEb), aEe(), !0)
	}, this.aEi = function() {
		10 === aZ.a05() && 2 <= ++aEW && (bl.aB9.aBl(aEZ, aEa, aEb), aEe())
	}
}

function cN() {
	var aEk, canvas, zF, aEl;

	function aEr(dy, name, aEs, pK) {
		zF[dy] = name, canvas[dy] = new Image, canvas[dy].onload = function() {
			! function(dy, aEs) {
				var a2m, a2n = null;
				7 === aEs ? a2m = b8.a1D.a2p : 8 === aEs ? (a2m = b8.a1D.a2s, a2n = .1) : 3 === aEs ? (a2m = b8.a1D.a2q, a2n = .06) : 5 === aEs ? a2m = b8.a1D.a2t : 6 === aEs ? a2m = b8.a1D.a2o : 4 === aEs && (a2m = b8.a1D.a2u);
				canvas[dy] = b8.a1D.a2l(canvas[dy], a2m, a2n)
			}(dy, aEs), aEu()
		}, canvas[dy].onerror = function(e) {
			console.error("Error loading image at index", dy, "Error:", e), aEu()
		}, canvas[dy].src = "data:image/png;base64," + pK
	}

	function aEu() {
		aEk--, aEo()
	}

	function aEo() {
		0 === aEk && (aEk = -1, aEq(), bd.dc = !0, canvas[7] = aEl, canvas[8] = aEl, canvas[9] = aEl, canvas[10] = aEl, 5 === s.rs) && s.aDO().aEw.resize()
	}

	function aEq() {
		aK.a3y(), bW.aB0([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vb = new xR, ai.vb.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aEk = 23, canvas = new Array(aEk), zF = new Array(aEk), (aEl = document.createElement("canvas")).width = 1;
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
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
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
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
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
	}, this.get = function(dy) {
		return canvas[dy]
	}, this.aEU = function(name) {
		for (var aA = zF.length - 1; 0 <= aA; aA--)
			if (zF[aA] === name) return canvas[aA];
		return aEl
	}, this.sK = function() {
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

	function aFE(j9, mR) {
		for (var aA = j9; aA < mR; aA++) aEz[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aF0[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aF1[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100))
	}

	function aFD(j9, mR) {
		for (var colorsData = aC.data.colorsData, aA = j9; aA < mR; aA++) {
			var f5 = colorsData[aA];
			aEz[aA] = 4 * (f5 >> 12), aF0[aA] = 4 * (f5 >> 6 & 63), aF1[aA] = 4 * (63 & f5)
		}
	}

	function aFP(eH, aFR) {
		aAN[eH] = 0, aAN[eH + 1] = 0, aAN[eH + 2] = aFR, aAN[eH + 3] = 0, aFS(eH)
	}

	function aFS(eH) {
		var ek;
		bZ.mZ || (ek = ab.x5(eH), eH = ab.x6(eH), bZ.mZ = ek >= bY.aAM[0] && ek <= bY.aAM[2] && eH >= bY.aAM[1] && eH <= bY.aAM[3])
	}
	this.ef = new Int32Array(4), this.dV = function() {
		var ef = this.ef;
		ef[0] = -4 * bQ.eo, ef[1] = 4, ef[2] = -ef[0], ef[3] = -ef[1]
	}, this.dU = function() {
		if (aEz = new Uint8Array(aC.ea), aF0 = new Uint8Array(aC.ea), aF1 = new Uint8Array(aC.ea), aF2 = new Uint8Array(aC.ea), aF3 = new Uint8Array(aC.ea), aF4 = new Uint8Array(aC.ea), aF5 = new Uint8Array(aC.ea), aF6 = new Uint8Array(aC.ea),
			aF7 = new Uint8Array(aC.ea), aF8 = new Uint8Array(aC.ea), this.a6x = new Uint8Array(aC.ea), aC.hS)
			for (var a94 = be.a94, aA = aC.ea - 1; 0 <= aA; aA--) {
				var ey = a94[aA],
					ka = bJ.dj((aEy[ey][3] + 1) * aw.random(), aw.value(100));
				aEz[aA] = aEx[ey][0] + ka * aEy[ey][0], aF0[aA] = aEx[ey][1] + ka * aEy[ey][1], aF1[aA] = aEx[ey][2] + ka * aEy[ey][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aFD(0, aC.js), aFE(aC.js, aC.ea)) : aFE(0, aC.ea) : aFD(0, aC.ea);
		! function() {
			var aA, eg;
			for (aA = aC.ea - 1; 0 <= aA; aA--) eg = bJ.dj(aEz[aA] + aF0[aA] + aF1[aA], 3), aEz[aA] += aFK(eg - aEz[aA], 2), aF0[aA] += aFK(eg - aF0[aA], 2), aF1[aA] += aFK(eg - aF1[aA], 2), aEz[aA] -= aEz[aA] % 4, aF0[aA] -= aF0[aA] % 4, aF1[
				aA] -= aF1[aA] % 4
		}(),
		function() {
			for (var aA = aC.ea - 1; 0 <= aA; aA--) aEz[aA] += bJ.dj(aA, 128), aF0[aA] += bJ.dj(aA % 128, 32), aF1[aA] += bJ.dj(aA % 32, 8), aF2[aA] = aA % 8
		}(), this.aFH(),
			function() {
				for (var aA = aC.ea - 1; 0 <= aA; aA--) aF3[aA] = aEz[aA] < 32 ? aEz[aA] + 32 : aEz[aA] - 32, aF4[aA] = aF0[aA] < 32 ? aF0[aA] + 32 : aF0[aA] - 32, aF5[aA] = aF1[aA] < 32 ? aF1[aA] + 32 : aF1[aA] - 32
			}(),
			function() {
				for (var aA = aC.ea - 1; 0 <= aA; aA--) aF6[aA] = 235 < aEz[aA] ? aEz[aA] - 20 : aEz[aA] + 20, aF7[aA] = 235 < aF0[aA] ? aF0[aA] - 20 : aF0[aA] + 20, aF8[aA] = 235 < aF1[aA] ? aF1[aA] - 20 : aF1[aA] + 20
			}()
	}, this.a5w = function(player) {
		var g = bM.fC;
		return g[0] = aEz[player], g[1] = aF0[player], g[2] = aF1[player], g
	}, this.aFH = function() {
		for (var aA = aC.ea - 1; 0 <= aA; aA--) this.a6x[aA] = aEz[aA] + aF0[aA] + aF1[aA] < 280 ? 0 : 1
	}, this.x5 = function(eH) {
		return bJ.dj(eH, 4) % bQ.eo
	}, this.x6 = function(eH) {
		return bJ.dj(eH, 4 * bQ.eo)
	}, this.wf = function(ek, em) {
		return Math.floor(4 * (em * bQ.eo + ek))
	}, this.wv = function(eH) {
		var ef = this.ef;
		return this.aFL(eH + ef[0]) || this.aFL(eH + ef[1]) || this.aFL(eH + ef[2]) || this.aFL(eH + ef[3])
	}, this.f2 = function(eH) {
		var ef = this.ef;
		return this.ei(eH + ef[0]) || this.ei(eH + ef[1]) || this.ei(eH + ef[2]) || this.ei(eH + ef[3])
	}, this.wt = function(eH, player) {
		var ef = this.ef;
		return this.aFM(eH + ef[0], player) || this.aFM(eH + ef[1], player) || this.aFM(eH + ef[2], player) || this.aFM(eH + ef[3], player)
	}, this.gC = function(eH) {
		return 208 <= aAN[eH + 3]
	}, this.x0 = function(player, eH) {
		return this.gC(eH) && this.aFN(player, eH)
	}, this.aFN = function(player, eH) {
		return player === this.eV(eH)
	}, this.aFO = function(eH) {
		return 208 <= aAN[eH + 3] && aAN[eH + 3] < 224
	}, this.j5 = function(eH) {
		return 224 <= aAN[eH + 3] && aAN[eH + 3] < 248
	}, this.wu = function(eH) {
		for (var ef = this.ef, aA = 3; 0 <= aA; aA--)
			if (this.h5(eH + ef[aA])) return !0;
		return !1
	}, this.eY = function(eH) {
		return this.gC(eH) || this.eU(eH)
	}, this.h5 = function(eH) {
		return 0 === aAN[eH + 3] && 2 === aAN[eH + 2]
	}, this.eU = function(eH) {
		return 0 === aAN[eH + 3] && 1 === aAN[eH + 2]
	}, this.vk = function(eH) {
		return 0 === aAN[eH + 3] && 3 === aAN[eH + 2]
	}, this.ei = function(eH) {
		return 0 === aAN[eH + 3] && 5 <= aAN[eH + 2]
	}, this.aFL = function(eH) {
		return 0 === aAN[eH + 3] && 3 <= aAN[eH + 2]
	}, this.eL = function(eH) {
		return aAN[eH + 2] - 5
	}, this.aFM = function(eH, player) {
		return this.eU(eH) || this.gC(eH) && player !== this.eV(eH)
	}, this.eV = function(eH) {
		return aAN[eH] % 4 * 128 + aAN[eH + 1] % 4 * 32 + aAN[eH + 2] % 4 * 8 + aAN[eH + 3] % 8
	}, this.x1 = function(eH) {
		aFP(eH, 1)
	}, this.aFQ = function(eH) {
		aFP(eH, 2)
	}, this.wg = function(eH, player) {
		aAN[eH] = aEz[player], aAN[eH + 1] = aF0[player], aAN[eH + 2] = aF1[player], aAN[eH + 3] = 208 + aF2[player], aFS(eH)
	}, this.g7 = function(eH, player) {
		aAN[eH] = aF3[player], aAN[eH + 1] = aF4[player], aAN[eH + 2] = aF5[player], aAN[eH + 3] = 224 + aF2[player], aFS(eH)
	}, this.j6 = function(eH, player) {
		aAN[eH] = aF6[player], aAN[eH + 1] = aF7[player], aAN[eH + 2] = aF8[player], aAN[eH + 3] = 248 + aF2[player], aFS(eH)
	}
}

function cm() {
	var dy = 0,
		aFT = new Uint16Array(32);

	function remove(a42) {
		var aA;
		for (dy -= 2, aA = a42; aA < dy; aA += 2) aFT[aA] = aFT[aA + 2], aFT[aA + 1] = aFT[aA + 3]
	}
	this.dU = function() {
		dy = 0
	}, this.im = function() {
		var aA, j3, iC;
		if (0 !== dy)
			if (0 === af.li[aC.eN] || ac.aFU(aC.eN) === ac.fi(aC.eN)) dy = 0;
			else
				for (aA = dy - 2; 0 <= aA; aA -= 2)(j3 = aFT[aA]) < aC.ea && 0 === af.li[j3] ? remove(aA) : (iC = aFT[aA + 1], (j3 >= aC.ea && aFV(aC.eN) || j3 < aC.ea && aFW(aC.eN, j3)) && (b6.gz.hA(iC, j3), remove(aA)))
	}, this.hC = function(j3, iC) {
		! function(j3, iC) {
			var aA;
			for (aA = 0; aA < dy; aA += 2)
				if (aFT[aA] === j3) return aFT[aA + 1] = Math.min(aFT[aA + 1] + iC, 1023), 1;
			return
		}(j3, iC) && 32 !== dy && (aFT[dy] = j3, aFT[dy + 1] = iC, dy += 2)
	}
}

function cP() {
	function aFd(player) {
		var di;
		b8.fy.a2M(player) && (di = af.ge[player] - af.a2Q[player] + ac.aFf(player), bb.g2(player, Math.abs(di), di < 0 ? 18 : 12)), af.ge[player] = 0, af.a2Q[player] = 0
	}

	function aFm() {
		aW.show(!1, !1, !1, !0), aV.a9X(), bP.ye.zP()
	}

	function aFa(player, aFl) {
		for (var aA = aFl.length - 1; 0 <= aA; aA--) ac.aFo(aFl[aA], player)
	}

	function aFc(player) {
		for (var iR = af.iR, iS = af.iS, iT = af.iT, iU = af.iU, m9 = iR[player], mA = iT[player], eo = bQ.eo, gQ = af.gQ, ek = iS[player]; m9 <= ek; ek--)
			for (var em = iU[player]; mA <= em; em--) {
				var gA = 4 * (em * eo + ek);
				ab.x0(player, gA) && (ab.x1(gA), gQ[player]--)
			}
		iS[player] = iU[player] = 0, iR[player] = iT[player] = Math.max(eo, bQ.ep)
	}
	this.dd = function(gA) {
		var player, di = af.gQ[gA];
		bL.x.oq[gA] ? di && (aFa(player = gA, ac.aFb(player)), aFc(player), aE.g0(player), ac.clear(player), aFd(player), function(player) {
			af.wb[player] = 0, af.g4[player] = [], af.gI[player] = [], af.gJ[player] = [], af.f3[player] = []
		}(player)) : !di && af.g4[gA].length || this.aFZ(gA)
	}, this.aFZ = function(player) {
		! function(player) {
			b8.fy.jG(player) || (af.zT[player] = bg.zl.aFk(), aC.yv++);
			var aFl = ac.aFb(player);
			0 === aFl.length ? b8.fy.a2J(player) && aFm() : (aFa(player, aFl), function(player, aFl) {
				var aFq = aFl[function(aFl) {
					var aA, dy = 0;
					for (aA = aFl.length - 1; 1 <= aA; aA--) af.gQ[aFl[aA]] > af.gQ[aFl[dy]] && (dy = aA);
					return dy
				}(aFl)];
				9 === aC.k9 && (1 === be.eb[player] ? aw.jk(8) && ax.aFr(aFq) : aD.hH[player] && (aM.a4G(765, 0), aM.zH(280, L(133, [af.zU[aFq], af.zU[player]]), 765, aFq, b9.ma, b9.nq, -1, !0)));
				if (b8.fy.a2J(player)) aFm(), aM.z5(aFq, 1);
				else {
					for (var aA = aFl.length - 1; 0 <= aA; aA--)
						if (b8.fy.a2M(aFl[aA]) && (bb.le[4 - b8.fy.jG(player)]++, b8.fy.a2J(aFl[aA]))) return aM.z5(player, 0);
					b8.fy.jG(player) || aM.a5E(0, player, aFq)
				}
			}(player, aFl))
		}(player), aFc(player), aFd(player),
			function(player) {
				af.li[player] = 0, af.g4[player] = null, af.gI[player] = null, af.gJ[player] = null, af.f3[player] = null
			}(player), aE.g0(player), ac.clear(player), bL.aFi.aFj(player)
	}
}

function cr() {
	var input;

	function aFs(e) {
		(e = e.target.files) && 0 < e.length && b4.aFv(e[0])
	}

	function aFz(e) {
		var ey = new Image;
		ey.onload = aG0, ey.src = e.target.result
	}

	function aG0(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aG2 || j > bQ.aG2 || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aG2 + ".", z.uM ? z.uM.showToast(e) : alert(e)) : 20 === s.rs && s.aDO().aG0(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFs
	}, this.tE = function() {
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
		10 !== aC.k9 ? this.aG4 = null : this.aG4 = new Uint32Array(aC.ea)
	}, this.im = function() {
		10 === aC.k9 && this.qn()
	}, this.qn = function() {
		for (var gA, target, a9i, aG4 = this.aG4, yh = ak.ju, a2R = af.ge, aA = ak.jt - 1; 0 <= aA; aA--)(gA = yh[aA]) >= aC.js || (target = Math.max(bJ.dj(a2R[gA], 4), 2048), a9i = Math.max(ad.a9j(gA), 100), aG4[gA] += bJ.dj(a9i * target, 1e4),
			aG4[gA] > target && (aG4[gA] = target))
	}, this.a2X = function(player, hH) {
		return hH > this.aG4[player] ? (hH = this.aG4[player], this.aG4[player] = 0) : this.aG4[player] -= hH, hH
	}
}

function dQ() {
	function aG6(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aGE, g.readAsText(e))
	}

	function aGE(e) {
		var aGI;
		aC.yt || (e = JSON.parse(e.target.result), aGI = aC.data = new a3O, aGJ(e, aGI, "mapType", 0, 2), aGJ(e, aGI, "mapProceduralIndex", 0, 255), aGJ(e, aGI, "mapRealisticIndex", 0, 255), aGJ(e, aGI, "mapSeed", 0, 16383), function(aGH, aGI, gB,
				max) {
				aGH = aGH[gB];
				aGI[gB] = aGP(aGH) ? aGH.slice(0, max) : aGI[gB]
			}(e, aGI, "mapName", 20), function(aGH, aGI, gB) {
				var aG1;
				2 === aGI.mapType && (!aGP(aGH = aGH[gB]) || aGH.length <= 20 ? aGI.mapType = 0 : ((aG1 = new Image).onload = function() {
					b7.aGQ.aGR(aG1, 1), aG1.onload = null, aG1 = null
				}, aG1.src = aGH))
			}(e, aGI, "canvas"), aGJ(e, aGI, "passableWater", 0, 1), aGJ(e, aGI, "passableMountains", 0, 1), aGJ(e, aGI, "playerCount", 1, 512), aGJ(e, aGI, "humanCount", 1, 1), aGJ(e, aGI, "selectedPlayer", 0, 0), aGJ(e, aGI, "gameMode", 0, 1),
			aGJ(e, aGI, "playerMode", 0, 0), aGJ(e, aGI, "battleRoyaleMode", 0, 0), aGJ(e, aGI, "numberTeams", 0, 8), aGJ(e, aGI, "isZombieMode", 0, 0), aGJ(e, aGI, "isContest", 0, 0), aGJ(e, aGI, "isReplay", 0, 0), aGM(e, aGI, "elo", 16, 2,
				16383), aGJ(e, aGI, "colorsType", 0, 1), aGJ(e, aGI, "colorsPersonalized", 0, 1), aGM(e, aGI, "colorsData", 32, 512, 262143), aGJ(e, aGI, "selectableColor", 0, 1), aGM(e, aGI, "teamPlayerCount", 16, 9, 512), aGJ(e, aGI,
				"neutralBots", 0, 1), aGJ(e, aGI, "botDifficultyType", 0, 3), aGJ(e, aGI, "botDifficultyValue", 0, 15), aGM(e, aGI, "botDifficultyTeam", 8, 9, 15), aGM(e, aGI, "botDifficultyData", 8, 512, 15), aGJ(e, aGI, "spawningType", 0, 2),
			aGJ(e, aGI, "spawningSeed", 0, 16383), aGM(e, aGI, "spawningData", 16, 1024, 4095), aGJ(e, aGI, "selectableSpawn", 0, 1), aGJ(e, aGI, "playerNamesType", 0, 2),
			function(aGH, aGI, gB, size, max) {
				var a1Y = aGH[gB];
				if (Array.isArray(a1Y)) {
					for (var a1Z = new Array(size), ed = Math.min(a1Y.length, size), aA = 0; aA < ed; aA++) a1Z[aA] = aGP(a1Y[aA]) ? a1Y[aA].slice(0, max) : "";
					aGI[gB] = a1Z
				}
			}(e, aGI, "playerNamesData", 512, 20), aGJ(e, aGI, "selectableName", 0, 1), aGJ(e, aGI, "aIncomeType", 0, 2), aGJ(e, aGI, "aIncomeValue", 0, 255), aGM(e, aGI, "aIncomeData", 8, 512, 255), aGJ(e, aGI, "tIncomeType", 0, 2), aGJ(e, aGI,
				"tIncomeValue", 0, 255), aGM(e, aGI, "tIncomeData", 8, 512, 255), aGJ(e, aGI, "iIncomeType", 0, 2), aGJ(e, aGI, "iIncomeValue", 0, 255), aGM(e, aGI, "iIncomeData", 8, 512, 255), aGJ(e, aGI, "sResourcesType", 0, 2), aGJ(e, aGI,
				"sResourcesValue", 0, 2047), aGM(e, aGI, "sResourcesData", 16, 512, 2047), s.w(), s.x.aGG[0] = 0, s.t(19))
	}

	function aGJ(aGH, aGI, gB, min, max) {
		aGH = aGH[gB];
		aGI[gB] = "number" == typeof aGH && min <= aGH && aGH <= max ? Math.floor(aGH) : aGI[gB]
	}

	function aGP(pK) {
		return "string" == typeof pK
	}

	function aGM(aGH, aGI, gB, aGS, size, max) {
		var a1Y = aGH[gB];
		if (Array.isArray(a1Y)) {
			for (var a1Z = new(8 === aGS ? Uint8Array : 16 === aGS ? Uint16Array : Uint32Array)(size), ed = Math.min(a1Y.length, size), aA = 0; aA < ed; aA++) a1Z[aA] = bJ.pB(a1Y[aA], 0, max);
			aGI[gB] = a1Z
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
	var aGT, aGU, size, j3, hH, id, aGV;

	function aGW(player) {
		return player < aC.js ? aGT * player : aGT * aC.js + aGU * (player - aC.js)
	}
	this.dU = function() {
		aGT = aC.js < 16 ? 12 : 8, aGU = 4;
		var ed = aGW(aC.ea);
		size = new Uint8Array(aC.ea), j3 = new Uint16Array(ed), hH = new Uint32Array(ed), id = new Uint16Array(ed), aGV = new Uint8Array(ed)
	}, this.pA = function(a6S, aGX) {
		var aGY = this.gf(a6S, aGX),
			aGX = (this.gd(a6S, aGX, 0), b8.fy.g1(a6S, aGY));
		bb.g2(a6S, aGY - aGX, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFo = function(player, aGX) {
		var aGb, aGX = function(player, aGX) {
			var aA, ka = aGW(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[ka + aA] && j3[ka + aA] === aGX) return aA;
			return size[player]
		}(player, aGX);
		aGX !== size[player] && (aGb = hH[aGW(player) + aGX], this.g3(player, aGX), this.j0(player, aGb, aC.ea))
	}, this.jE = function(player, aGX) {
		for (var ka = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[ka + aA] && j3[ka + aA] === aGX) return !0;
		return !1
	}, this.jW = function(player) {
		return player < aC.js ? size[player] < aGT : size[player] < aGU
	}, this.fi = function(player) {
		return size[player]
	}, this.fo = function(player, aA) {
		return j3[aGW(player) + aA]
	}, this.fj = function(player, aA) {
		return id[aGW(player) + aA]
	}, this.aGc = function(player, aGd) {
		for (var ka = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[ka + aA] === aGd) return aA;
		return -1
	}, this.fp = function(player, aA) {
		return hH[aGW(player) + aA]
	}, this.gf = function(player, aGX) {
		for (var ka = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[ka + aA] && j3[ka + aA] === aGX) return hH[ka + aA];
		return 0
	}, this.aFf = function(player) {
		for (var ka = aGW(player), f5 = 0, aA = size[player] - 1; 0 <= aA; aA--) f5 += hH[ka + aA];
		return f5
	}, this.aGe = function(player) {
		for (var ka = aGW(player), f5 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[ka + aA] && (f5 += hH[ka + aA]);
		return f5
	}, this.aFU = function(player) {
		for (var ka = aGW(player), g5 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[ka + aA] && g5++;
		return g5
	}, this.gd = function(player, aGX, aGb) {
		for (var ka = aGW(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[ka + aA] && j3[ka + aA] === aGX && (hH[ka + aA] = aGb)
	}, this.gO = function(player, aA, aGb) {
		hH[aGW(player) + aA] = Math.max(aGb, 0)
	}, this.gP = function(player, aA) {
		aGV[aGW(player) + aA] = 0
	}, this.fq = function(player, aA) {
		return aGV[aGW(player) + aA]
	}, this.j0 = function(player, aGb, aGX) {
		b8.fy.a2M(aGX) && bb.le[6 - b8.fy.jG(player)]++;
		for (var ka = aGW(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[ka + aA] && j3[ka + aA] === aGX) return hH[ka + aA] += aGb, void(hH[ka + aA] = hH[ka + aA] > aC.a2T ? aC.a2T : hH[ka + aA]);
		j3[ka + size[player]] = aGX, hH[ka + size[player]] = aGb, id[ka + size[player]] = 0, aGV[ka + size[player]] = 1, size[player]++, player < aC.js && (aGX === aC.eN ? aM.z5(player, 5) : player === aC.eN && ae.a5G(aGX))
	}, this.aGf = function(player, aGb, aGd) {
		var ka = aGW(player);
		j3[ka + size[player]] = 0, hH[ka + size[player]] = aGb, id[ka + size[player]] = aGd, aGV[ka + size[player]] = 0, size[player]++
	}, this.g3 = function(player, dy) {
		var ew, ka;
		if (0 !== size[player])
			for (ka = aGW(player), size[player]--, ew = dy; ew < size[player]; ew++) j3[ka + ew] = j3[ka + ew + 1], hH[ka + ew] = hH[ka + ew + 1], id[ka + ew] = id[ka + ew + 1], aGV[ka + ew] = aGV[ka + ew + 1]
	}, this.aFb = function(player) {
		for (var ew, ka, aFl = [], aA = ak.jt - 1; 0 <= aA; aA--)
			for (ka = aGW(ak.ju[aA]), ew = size[ak.ju[aA]] - 1; 0 <= ew; ew--)
				if (0 === id[ka + ew] && j3[ka + ew] === player) {
					aFl.push(ak.ju[aA]);
					break
				} return aFl
	}
}

function cT() {
	var aGg;

	function aGi(player) {
		var dx, jX;
		return b8.fy.jG(player) && player < aC.js ? 0 : (dx = aGg[bJ.dj((aC.ea - 1) * af.gQ[player], aC.jc)], bd.jp() < 1920 && (dx = Math.max(bJ.dj(100 * (13440 - 6 * bd.jp()), 1920), dx)), jX = ad.jY(player), af.ge[player] > jX && (dx -= bJ.dj(2 *
			dx * (af.ge[player] - jX), jX)), Math.min(Math.max(dx, 0), 700))
	}

	function aGu(mL) {
		for (var gQ = af.gQ, ju = ak.ju, aA = ak.jt - 1; 0 <= aA; aA--) {
			var gA = ju[aA];
			b8.fy.g1(gA, bJ.dj(mL * gQ[gA], 32))
		}
	}

	function aGr() {
		var vc = aC.eN;
		bM.f9[0] = af.ge[vc] - af.a2Q[vc]
	}

	function aGt(dy) {
		var vc = aC.eN;
		bb.le[dy] += af.ge[vc] - af.a2Q[vc] - bM.f9[0]
	}
	this.db = function() {
		for (var ed = aC.ea, aA = (aGg = new Uint16Array(ed), 0); aA < ed; aA++) aGg[aA] = 100 + aGh(bJ.dj(25600 * aA, ed - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9j = aGi : 1 === aC.data.iIncomeType ? this.a9j = function(player) {
			return bJ.dj(aC.data.iIncomeValue * aGi(player), 64)
		} : this.a9j = function(player) {
			return bJ.dj(aC.data.iIncomeData[player] * aGi(player), 64)
		}
	}, this.im = function() {
		if (bd.jp() % 10 == 9 && (function() {
				aGr();
				for (var ju = ak.ju, ge = af.ge, aA = ak.jt - 1; 0 <= aA; aA--) {
					var gA = ju[aA],
						aGs = bJ.dj(ad.a9j(gA) * ge[gA], 1e4);
					b8.fy.g1(gA, Math.max(aGs, 1))
				}
				aGt(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGr(), 1 === aC.data.aIncomeType)
						for (var gQ = af.gQ, ju = ak.ju, mL = aC.data.aIncomeValue, aA = ak.jt - 1; 0 <= aA; aA--) {
							var gA = ju[aA];
							b8.fy.g1(gA, bJ.dj(mL * gQ[gA], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gQ = af.gQ, ju = ak.ju, mL = aC.data.aIncomeData, aA = ak.jt - 1; 0 <= aA; aA--) {
								var gA = ju[aA];
								b8.fy.g1(gA, bJ.dj(mL[gA] * gQ[gA], 128))
							}
						}();
					aGt(18)
				}
			}(), bd.jp() % 100 == 99)) {
			if (aGr(), 0 === aC.data.tIncomeType) aGu(32);
			else if (1 === aC.data.tIncomeType) aGu(aC.data.tIncomeValue);
			else
				for (var gQ = af.gQ, ju = ak.ju, mL = aC.data.tIncomeData, aA = ak.jt - 1; 0 <= aA; aA--) {
					var gA = ju[aA];
					b8.fy.g1(gA, bJ.dj(mL[gA] * gQ[gA], 32))
				}
			aGt(8)
		}
	}, this.jY = function(player) {
		return Math.min(100 * af.gQ[player], aC.a3K)
	}, this.o5 = function(player, o6) {
		b8.fy.g1(o6, bM.fA[0]), bb.oR(player, o6), ae.aGk(player, bM.fA[0] + bM.fA[1]), ae.oS(o6, bM.fA[0]), b8.fy.p0(player)
	}, this.aGl = function() {
		for (var ed = ak.jt, yh = ak.ju, ka = 0, a2R = af.ge, aA = 0; aA < ed; aA++) ka += a2R[yh[aA]];
		return ka
	}, this.aGm = function(aGn) {
		for (var gA, ed = ak.jt, yh = ak.ju, ka = 0, a2R = af.ge, eb = be.eb, aA = 0; aA < ed; aA++) eb[gA = yh[aA]] === aGn && (ka += a2R[gA]);
		return ka
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

	function ph() {
		aH6 = Math.floor(+h.pf), aH7 = Math.floor(.5 * aH6)
	}

	function aHU() {
		var aA, aHZ;
		for (tl.font = b8.pd.rS(1, 100 * aH8), aHZ = 80 / Math.floor(tl.measureText(b8.zY.yB(aC.a2T)).width), tl.font = b8.pd.rS(1, 100), aA = aC.ea - 1; 0 <= aA; aA--) aH5[aA] = 100 / Math.floor(tl.measureText(af.zU[aA]).width), aH4[aA] = Math.min(
			aHZ, aH5[aA])
	}

	function aHa(aA) {
		return !aHT || (aA = af.ge[aA]) < 1e6 ? 1 : aA < 1e7 ? aHO[0] : aHO[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHY(ha) {
		aHF = !1, aHE = 1, aHC = aHD = 0, aHQ && (b8.pd.textAlign(ha, 1), b8.pd.textBaseline(ha, 1));
		for (var aHg, aHh, aA, aHi, fontSize, aHj, m9 = iD / iE, mA = iF / iE, mM = (h.i + iD) / iE, mN = (h.j + iF) / iE, aHk = 0 !== af.li[aC.eN] && !b8.fy.jG(aC.eN), ew = ak.jt - 1; 0 <= ew; ew--) aA = ak.ju[ew], (fontSize = Math.floor(aHB * iE *
			aHa(aA) * aH4[aA] * aH2[aA])) < aHA || aH6 <= fontSize || aH0[aA] + aH2[aA] > m9 && aH0[aA] < mM && aH1[aA] + aH3[aA] > mA && aH1[aA] < mN && (aHg = Math.floor(h.i * (aH0[aA] + aH2[aA] / 2 - m9) / (mM - m9)), aHh = Math.floor(h.j * (
			aH1[aA] + aH3[aA] / 2 - mA) / (mN - mA) - .1 * fontSize), aHi = ab.a6x[aA], ha.font = b8.pd.rS(1 === af.a2I[aA] ? 4 : 1, fontSize), ha.fillStyle = aHl(fontSize, aHi % 2), aHT ? aHm(ha, aA, fontSize, aHg, aHh, aHi) : aHn(aA,
			fontSize, aHg, aHh, ha), aHF = !0, 0 < aAq[aA] ? function(aHg, aHh, fontSize, aA, ha) {
			0 === jd[aA] ? ai.qt.y2(aHI[aA]) ? (function(aHg, aHh, fontSize, player, oG, ha) {
				for (var wA = aHh, hZ = (ha.globalAlpha = aHv(fontSize), aHa(player) * (aHT ? aHP : aH5[player])), w9 = aHg - .5 * fontSize / hZ - .9 * fontSize, ex = 0; ex < 2; ex++) ha.fillText(ai.qt.xw(oG), w9, wA), w9 = aHg + .5 *
					fontSize / hZ + .9 * fontSize;
				ha.globalAlpha = 1
			}(aHg, aHh, fontSize, aA, aHI[aA], ha), aHp(aHg, aHh, fontSize, 0, 0, ha)) : ai.qt.y4(aHI[aA]) ? (aHy(aHg, aHh, fontSize, aHI[aA], 0, ha), aHp(aHg, aHh, fontSize, 0, 1, ha)) : (aHy(aHg, aHh, fontSize, aHI[aA], 1, ha), aHp(aHg,
				aHh, fontSize, 1, 0, ha)) : aHy(aHg, aHh, fontSize, aHI[aA], 0, ha)
		}(aHg, aHh, fontSize, aA, ha) : 0 === jd[aA] && aHp(aHg, aHh, fontSize, 0, 0, ha), aHk && (0 < aAq[aA + aC.ea] || 0 < aAq[aA + 2 * aC.ea] || 0 < aAq[aA + 3 * aC.ea] || 0 < aAq[aA + 4 * aC.ea]) && function(aHg, aHh, fontSize, aA, ha) {
			var ey, g5 = -1;
			for (ey = 4; 1 <= ey; ey--) 0 < aAq[aA + ey * aC.ea] && g5++;
			for (ey = 1; ey < 5; ey++) 0 < aAq[aA + ey * aC.ea] && (! function(aHg, aHh, fontSize, ey, aA, aHt, di, ha) {
				var a1m;
				if (1 === ey) {
					aA = aHI[aA + aC.ea];
					if (!ai.qt.y3(aA)) return function(aHg, aHh, fontSize, oG, aHt, ha) {
						ha.globalAlpha = aHv(fontSize);
						aHg -= .534 * aHt * fontSize, aHt = aHh + 1.59 * fontSize;
						ha.font = b8.pd.rS(0, .785 * fontSize), ha.fillText(ai.qt.xw(oG), aHg, aHt), ha.globalAlpha = 1
					}(aHg, aHh, fontSize, aA, aHt, ha);
					a1m = ai.vb.xV[aA - 1024 + ai.qt.xh]
				} else a1m = 2 === ey ? aK.a40()[4].canvas[+(di < 255)] : (3 === ey ? aK.a40()[5] : aK.a40()[6]).canvas[0];
				aA = ai.vb.xW, di = .8 * fontSize / aA, ey = aHg - .5 * di * aA - .534 * aHt * fontSize, aHg = aHh + 1.4 * di * aA;
				ha.setTransform(di, 0, 0, di, ey, aHg), ha.globalAlpha = aHv(fontSize), ha.drawImage(a1m, 0, 0), ha.globalAlpha = 1, ha.setTransform(1, 0, 0, 1, 0, 0)
			}(aHg, aHh, fontSize, ey, aA, g5, aAq[aA + ey * aC.ea], ha), g5 -= 2)
		}(aHg, aHh, fontSize, aA, ha), (aHj = aH8 * fontSize) < aHA || (ha.font = b8.pd.rS(1, aHj), aHh += Math.floor(.78 * fontSize), aHT ? aHn(aA, aHj, aHg, aHh, ha) : aHm(ha, aA, aHj, aHg, aHh, aHi)))
	}

	function aHn(aA, fontSize, ek, em, ha) {
		var ___id = aA;
		var showName = aA < aC.js || !__fx.settings.hideBotNames;
		if (showName) ha.fillText(af.zU[aA], ek, em), aA < aC.js && 2 !== af.a2I[aA] || (aA = fontSize / aH5[aA], ha.fillRect(ek - .5 * aA, em + b8.pd.xx * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHT && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (ha.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			ha.fillText(__fx.utils.getDensity(___id), ek, showName ? em + fontSize : em)
		);
	}

	function aHm(ha, aA, fontSize, aHg, aHh, aHi) {
		var ___id = aA;
		aA = b8.zY.yB(af.ge[aA]);
		aHi >> 1 & 1 ? (ha.lineWidth = .05 * fontSize, ha.strokeStyle = aHl(fontSize, aHi % 2), ha.strokeText(aA, aHg, aHh)) : (1 < aHi && (ha.lineWidth = .12 * fontSize, ha.strokeStyle = aHl(fontSize, aHi), ha.strokeText(aA, aHg, aHh)), ha.fillText(
			aA, aHg, aHh));
		aHT || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (ha.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), ha.fillText(__fx.utils.getDensity(___id), aHg, aHh + fontSize))
	}

	function aHp(aHg, aHh, fontSize, aHt, aHu, ha) {
		var a4Z = .95 * fontSize / aHK,
			aHg = aHg - .5 * a4Z * aHJ + .8 * aHt * fontSize,
			aHt = aHh - 1.76 * a4Z * aHK - (.35 - b8.pd.xx + .7) * aHu * fontSize;
		ha.setTransform(a4Z, 0, 0, a4Z, aHg, aHt), ha.globalAlpha = aHv(fontSize), ha.drawImage(aa.get(4), 0, 0), ha.globalAlpha = 1, ha.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHy(aHg, aHh, fontSize, oG, aHt, ha) {
		var hU, w9, a4Z;
		ha.globalAlpha = aHv(fontSize), ai.qt.y3(oG) ? (hU = ai.vb.xW, ha.setTransform(a4Z = 1.1 * fontSize / hU, 0, 0, a4Z, w9 = aHg - .5 * a4Z * hU - .8 * aHt * fontSize, a4Z = aHh - 1.55 * a4Z * hU), ha.drawImage(ai.vb.xV[oG - 1024 + ai.qt.xh], 0,
			0), ha.setTransform(1, 0, 0, 1, 0, 0)) : (w9 = aHg - .8 * aHt * fontSize, a4Z = aHh - (.35 - b8.pd.xx + 1) * fontSize, ha.fillText(ai.qt.xw(oG), w9, a4Z)), ha.globalAlpha = 1
	}

	function aHl(fontSize, aHi) {
		return aH7 <= fontSize && fontSize < aH6 ? be.aI0[aHi] + aHv(fontSize).toFixed(3) + ")" : be.aI1[aHi]
	}

	function aHv(fontSize) {
		return aH7 <= fontSize && fontSize < aH6 ? 1 - (fontSize - aH7) / (aH6 - aH7) : 1
	}

	function aIA(hZ, i) {
		return 1 + Math.floor(aH9 * hZ * i)
	}

	function aI7(aA) {
		for (var left = aH0[aA], ew = aH0[aA] - af.iR[aA] - 1; 0 <= ew; ew--)
			if (!aIC(aA, --left, aH1[aA], aH3[aA])) {
				left++;
				break
			} var right = aH0[aA];
		for (ew = af.iS[aA] - aH0[aA] - aH2[aA]; 0 <= ew; ew--)
			if (!aIC(aA, ++right + aH2[aA] - 1, aH1[aA], aH3[aA])) {
				right--;
				break
			} var ek = Math.floor((left + right) / 2),
			top = aH1[aA];
		for (ew = aH1[aA] - af.iT[aA] - 1; 0 <= ew; ew--)
			if (!aID(aA, ek, --top, aH2[aA])) {
				top++;
				break
			} var bottom = aH1[aA];
		for (ew = af.iU[aA] - aH1[aA] - aH3[aA]; 0 <= ew; ew--)
			if (!aID(aA, ek, ++bottom + aH3[aA] - 1, aH2[aA])) {
				bottom--;
				break
			} var em = Math.floor((top + bottom) / 2);
		aI4(aA, ek, em, aH2[aA], aH3[aA]) && (aH0[aA] = ek, aH1[aA] = em)
	}

	function aI4(player, ek, em, i, j) {
		eg = Math.floor(.2 * i);
		for (var eg, ey = ek + i - 1; ek <= ey; ey--)
			if (!aIC(player, ey, em, j)) return;
		for (ey = em + j - 1 - (eg = (eg = Math.floor(.25 * j)) < 1 ? 1 : eg); em + eg <= ey; ey--)
			if (!aID(player, ek, ey, i)) return;
		return 1
	}

	function aIC(player, ek, em, j) {
		return ab.x0(player, 4 * (em * bQ.eo + ek)) && ab.x0(player, 4 * ((em + j - 1) * bQ.eo + ek))
	}

	function aID(player, ek, em, i) {
		return ab.x0(player, 4 * (em * bQ.eo + ek)) && ab.x0(player, 4 * (em * bQ.eo + ek + i - 1))
	}
	this.dU = function() {
		if (aHT = bh.eA.data[7].value || 8 === aC.k9, a8t = 0 === (a8t = bh.eA.data[11].value) ? 280 : 1 === a8t ? 187 : 112, aHF = !1, aHB = .88, aH8 = .5, aH9 = 1.8, aHA = 12 - 3 * bh.eA.data[9].value, aGz = aGy = 0, aH0 = new Uint16Array(aC
				.ea), aH1 = new Uint16Array(aC.ea), aH2 = new Uint16Array(aC.ea), aH3 = new Uint16Array(aC.ea), aH4 = new Float32Array(aC.ea), aH5 = new Float32Array(aC.ea), aHI = new Uint16Array(2 * aC.ea), aAq = new Uint8Array(5 * aC.ea), aHR =
			new Uint8Array(aC.ea), aHS = new Uint8Array(aC.ea), aHQ || (aHG = aHG || document.createElement("canvas")), ph(), aHD = aHC = 0, aHE = 1, aHT) {
			var aA, aHZ;
			for (aHU(), tl.font = b8.pd.rS(1, 100), aHZ = 100 / Math.floor(tl.measureText("900 000").width), aA = aC.ea - 1; 0 <= aA; aA--) aH4[aA] = Math.min(aHZ, 2 * aH5[aA]);
			aHP = aHZ, aHO[0] = 100 / (aHZ * Math.floor(tl.measureText("5 000 000").width)), aHO[1] = 100 / (aHZ * Math.floor(tl.measureText("50 000 000").width)), aHO[2] = 100 / (aHZ * Math.floor(tl.measureText("500 000 000").width)), aHO[3] =
				100 / (aHZ * Math.floor(tl.measureText("1 000 000 000").width))
		} else aHU();
		! function() {
			var aA;
			for (aA = aC.ea - 1; 0 <= aA; aA--) af.gQ[aA] < 12 ? (aH0[aA] = af.iR[aA] + 1, aH1[aA] = af.iT[aA] + 1, aH2[aA] = 1, aH3[aA] = 1) : (aH0[aA] = af.iR[aA], aH1[aA] = af.iT[aA] + 1, aH2[aA] = 4, aH3[aA] = 2);
			if (aC.gy)
				for (aA = 0; aA < aC.js; aA++) aH2[aA] = 0;
			aHJ = aa.get(4).width, aHK = aa.get(4).height
		}()
	}, this.aGk = function(gA, a5W) {
		a5W > 18 * af.gQ[gA] ? (aHS[gA] = 6, ab.a6x[gA] = 2 + ab.a6x[gA] % 2) : (aHR[gA] = 4, (ab.a6x[gA] < 2 || 3 < ab.a6x[gA]) && (ab.a6x[gA] = 6 + ab.a6x[gA] % 2))
	}, this.oS = function(gA, a5W) {
		a5W > 6 * af.gQ[gA] ? (aHS[gA] = 6, ab.a6x[gA] = 4 + ab.a6x[gA] % 2) : (aHR[gA] = 4, (ab.a6x[gA] < 4 || 5 < ab.a6x[gA]) && (ab.a6x[gA] = 8 + ab.a6x[gA] % 2))
	}, this.resize = function() {
		ph(), aHQ || aHY(aHH)
	}, this.a3G = function() {
		for (var aA = 0; aA < aC.js; aA++) af.iS[aA] - af.iR[aA] != 3 || af.iU[aA] - af.iT[aA] != 3 ? (aH0[aA] = af.iR[aA] + (af.iS[aA] !== af.iR[aA] ? 1 : 0), aH1[aA] = af.iT[aA], aH2[aA] = 1, aH3[aA] = 1) : (aH0[aA] = af.iR[aA], aH1[aA] = af
			.iT[aA] + 1, aH2[aA] = 4, aH3[aA] = 2)
	}, this.pC = function(player, dy, aHb) {
		! function(player, dy, aHb) {
			player += dy * aC.ea;
			0 === dy ? aHI[player] === aHb && 0 < aAq[player] ? aAq[player] = 0 : (aHI[player] = aHb, aAq[player] = ai.qt.y2(aHb) ? 255 : 64) : 1 === dy ? (aAq[player] = 64, aHI[player] = aHb) : aAq[player] = aHb
		}(player, dy, aHb), 2 === aC.yt && this.lU(!0)
	}, this.tk = function() {
		aHQ ? aHY(tl) : aHF && (1 !== aHE ? (tl.imageSmoothingEnabled = !0, tl.setTransform(aHE, 0, 0, aHE, 0, 0), tl.drawImage(aHG, -aHC / aHE, -aHD / aHE), tl.setTransform(1, 0, 0, 1, 0, 0), tl.imageSmoothingEnabled = !1) : tl.drawImage(aHG, -
			aHC, -aHD))
	}, this.a7h = function(hy, i1) {
		aHC += hy, aHD += i1
	}, this.a0R = function(hy, i1) {
		ae.a7h(hy, i1)
	}, this.zoom = function(a1L, kv, kw) {
		aHE *= a1L, aHC = (aHC + kv) * a1L - kv, aHD = (aHD + kw) * a1L - kw
	}, this.lU = function(bp) {
		return !aHQ && !(!aHN && !bp && bd.eC < aHM + (1 === aHE && 0 === aHC && 0 === aHD && (aC.a3j() || aC.gy || 2 === aC.yt) ? 1e3 : a8t) || (aHN = !1, aHM = bd.eC, aHY(aHH), 0))
	}, this.aHe = function(aA) {
		return aHa(aA) * aH4[aA]
	}, this.aHf = function(player) {
		return aH4[player]
	}, this.im = function() {
		bd.jp() % 10 == 9 && (aHN = aC.a3l() && !aC.a3j()), !aC.a3j() && 4 <= ++aGz && function() {
			var aA, ew, ex;
			for (aGz = 0, ex = 4; 1 <= ex; ex--)
				for (ew = ak.jt - 1; 0 <= ew; ew--) aA = ak.ju[ew] + ex * aC.ea, 0 < aAq[aA] && aAq[aA] < 255 && aAq[aA]--;
			if (2 !== aC.yt)
				for (ew = ak.jt - 1; 0 <= ew; ew--) aA = ak.ju[ew], 0 < aAq[aA] && aAq[aA] < 255 && aAq[aA]--
		}();
		var aA, ew, ed = Math.floor(.1 * ak.jt);
		for (ed = (ed = ed < 8 ? 8 : ed) > ak.jt ? ak.jt : ed, aA = aGy + ed - 1; aGy <= aA; aA--) ew = aA % ak.jt, ! function(aA) {
			var hZ = aHa(aA) * aH4[aA];
			0 < aH2[aA] && aI4(aA, aH0[aA], aH1[aA], aH2[aA], aH3[aA]) ? ! function(aA) {
				for (var ek, em, i, j, eH = !1, ex = 0; ex < 8; ex++) {
					if (i = aH2[aA] + 2, j = aH3[aA] + 2, i > af.iS[aA] - af.iR[aA] + 1 || j > af.iU[aA] - af.iT[aA] + 1) return eH;
					if (ek = aH0[aA] - 1, em = aH1[aA] - 1, !aI4(aA, ek, em, i, j)) return eH;
					aH0[aA] = ek, aH1[aA] = em, aH2[aA] = i, aH3[aA] = j, eH = !0
				}
				return eH
			}(aA) && function(aA, hZ) {
				for (var ek, em, i, j, eH = !1, aAz = aH2[aA], mL = 1 + Math.floor(.02 * aAz), ex = 1; ex < 5; ex++) {
					if ((i = aAz + ex * mL) > af.iS[aA] - af.iR[aA] + 1) return eH;
					if ((j = aIA(hZ, i)) > af.iU[aA] - af.iT[aA] + 1) return eH;
					ek = af.iR[aA] + Math.floor(Math.random() * (af.iS[aA] - af.iR[aA] + 2 - i)), em = af.iT[aA] + Math.floor(Math.random() * (af.iU[aA] - af.iT[aA] + 2 - j)), aI4(aA, ek, em, i, j) && (aH0[aA] = ek, aH1[aA] = em, aH2[
						aA] = i, aH3[aA] = j, eH = !0)
				}
				return eH
			}(aA, hZ) && aI7(aA) : ! function(aA, hZ) {
				var j, ek = aH0[aA] + 1,
					em = aH1[aA] + 1,
					i = aH2[aA] - 2;
				for (;;) {
					if (i < 1) {
						aH2[aA] = 0;
						break
					}
					if (j = aIA(hZ, i), aI4(aA, ek, em, i, j)) return aH0[aA] = ek, aH1[aA] = em, aH2[aA] = i, aH3[aA] = j, 1;
					ek++, em++, i -= 2
				}
				return
			}(aA, hZ) ? function(aA, hZ) {
				var ek, em, i, j, ex, mR, j9 = af.iS[aA] - af.iR[aA] + 1,
					aIB = Math.floor(.02 * j9);
				for (mR = -6 * (aIB = aIB < 1 ? 1 : aIB), ex = j9; mR <= ex; ex -= aIB)
					if (j = aIA(hZ, i = 0 < ex ? ex : 1), ek = af.iR[aA] + Math.floor(Math.random() * (af.iS[aA] - af.iR[aA] + 2 - i)), em = af.iT[aA] + Math.floor(Math.random() * (af.iU[aA] - af.iT[aA] + 2 - j)), aI4(aA, ek, em, i, j))
						return aH0[aA] = ek, aH1[aA] = em, aH2[aA] = i, aH3[aA] = j
			}(aA, hZ) : aI7(aA)
		}(ak.ju[ew]);
		aGy = (aGy += ed) % ak.jt
	}, this.lP = function() {
		var aA, gA, hi, hj;
		if (bd.jp() % 4 == 1)
			for (aA = ak.jt - 1; 0 <= aA; aA--) gA = ak.ju[aA], ab.a6x[gA] < 2 || ((hi = Math.max(aHR[gA] - 1, 0)) === (hj = Math.max(aHS[gA] - 1, 0)) ? 0 === hi && (ab.a6x[gA] %= 2) : 0 === hj && ab.a6x[gA] < 6 && (ab.a6x[gA] += 4), aHR[gA] =
				hi, aHS[gA] = hj)
	}, this.a5G = function(player) {
		var aA = player + 2 * aC.ea,
			di = aAq[aA];
		return 0 < di && (aM.z0(50, player), aAq[aA] = 0, 255 === di)
	}, this.a4J = function(player) {
		return 255 === aAq[player + 2 * aC.ea]
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
			for (var ew = a5Y.length - 1; 0 <= ew; ew--) aIE[aA] = aIE[aA].replace(a5Y[ew], aIH[ew]);
		if (__fx.settings.realisticNames) aIE = realisticNames;
	}, this.a3V = function() {
		var ed = aC.js,
			zU = af.zU,
			za = af.za,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ed)
			for (var aA = 0; aA < ed; aA++) zU[aA] = za[aA] = "Player " + aw.jA(1e3);
		else
			for (aA = 0; aA < ed; aA++) zU[aA] = za[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k9) {
			for (var dx = aw.random(), aIN = aIG, aIO = aIF, hH = aD.hH, ed = aIN.length, ka = aC.data.teamPlayerCount[7], zU = af.zU, za = af.za, aA = ka - 1; aA >= aC.js; aA--) zU[aA] = za[aA] = aIN[(aA + dx) % ed];
			for (ed = aIO.length - 1, aA = ka; aA < aC.ea; aA++) zU[aA] = za[aA] = aIO[hH[aA] ? ed : aA % ed]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var ed = aC.ea, zU = af.zU, za = af.za, playerNamesData = aC.data.playerNamesData, aA = aC.js; aA < ed; aA++) zU[aA] = za[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zU = af.zU, za = af.za, aA = aC.js; aA < aC.ea; aA++) zU[aA] = za[aA] = "Bot " + aw.jA(1e3)
		} : function() {
			for (var aIP = aIE, ed = aIP.length, dx = aw.random(), zU = af.zU, za = af.za, aA = aC.js; aA < aC.ea; aA++) zU[aA] = za[aA] = aIP[(aA + dx) % ed]
		})()
	}
}

function cq() {
	this.aIQ = [], this.aIR = [], this.dU = function() {
		this.aIQ = [], this.aIR = []
	}, this.im = function() {
		0 <= this.aIQ.length && this.aIS(this.aIQ), 0 <= this.aIR.length && this.aIS(this.aIR)
	}, this.aIS = function(g) {
		for (var ex = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].eC--, g[aA].eC <= 0) {
				ex = aA;
				break
			} for (aA = ex; 0 <= aA; aA--) g.shift()
	}, this.a48 = function(id, yh, aIT) {
		return this.ez(this.aIQ, id, yh, aIT)
	}, this.aIU = function(id, yh, aIT) {
		return this.ez(this.aIR, id, yh, aIT)
	}, this.ez = function(g, id, yh, aIT) {
		return ! function(g, id, yh) {
			var aA, hQ;
			for (aA = yh.length - 1; 0 <= aA; aA--)
				for (hQ = g.length - 1; 0 <= hQ; hQ--)
					if (g[hQ].player === yh[aA] && id === g[hQ].id) return 1;
			return
		}(g, id, yh) && (aIT && function(g, id, yh) {
			var aA;
			for (aA = yh.length - 1; 0 <= aA; aA--) g.push({
				player: yh[aA],
				id: id,
				eC: 384
			})
		}(g, id, yh), !0)
	}
}

function cW() {
	this.za = new Array(aC.ea), this.zU = new Array(aC.ea), this.a2I = new Uint8Array(aC.ea), this.li = new Uint8Array(aC.ea), this.iR = new Uint16Array(aC.ea), this.iT = new Uint16Array(aC.ea), this.iS = new Uint16Array(aC.ea), this.iU =
		new Uint16Array(aC.ea), this.gQ = new Uint32Array(aC.ea), this.wb = new Uint32Array(aC.ea), this.ge = new Uint32Array(aC.ea), this.g4 = null, this.gI = null, this.gJ = null, this.f3 = null, this.oz = new Uint16Array(aC.ea), this.iv =
		new Uint16Array(aC.ea), this.iw = new Uint16Array(aC.ea), this.zT = new Uint16Array(aC.ea), this.zR = new Uint8Array(aC.ea), this.a2Q = new Uint16Array(aC.ea), this.dU = function() {
			this.za.fill(""), this.zU.fill(""), this.a2I.fill(0), this.li.fill(0), this.iR.fill(0), this.iT.fill(0), this.iS.fill(0), this.iU.fill(0), this.gQ.fill(0), this.wb.fill(0), this.ge.fill(0), this.g4 = new Array(aC.ea), this.gI = new Array(
				aC.ea), this.gJ = new Array(aC.ea), this.f3 = new Array(aC.ea), this.oz.fill(0), this.iv.fill(0), this.iw.fill(0), this.zT.fill(0), this.zR.fill(0), this.a2Q.fill(0)
		}
}

function co() {
	this.aBJ = function(player) {
		aF.lh(player), aC.yv++, af.a2I[player] = 2, af.zT[player] = bg.zl.aFk(), player === aC.eN && (aW.show(!1, !1), aV.a9X(), bP.ye.zP()), ae.a5G(player)
	}
}

function cQ() {
	this.ju = null, this.jt = 0, this.a3Z = function() {
		for (this.jt = 0, aA = aC.ea - 1; 0 <= aA; aA--) 0 !== af.li[aA] && this.jt++;
		this.ju = new Uint16Array(this.jt);
		for (var ed = 0, aA = 0; aA < aC.ea; aA++) 0 !== af.li[aA] && (this.ju[ed++] = aA)
	}, this.lO = function() {
		for (var gQ = af.gQ, wb = af.wb, zR = af.zR, ju = ak.ju, aA = ak.jt - 1; 0 <= aA; aA--) {
			var di, gA = ju[aA];
			gQ[gA] <= bJ.dj(wb[gA], 4) ? aj.dd(gA) : gQ[gA] >= wb[gA] ? (di = gQ[gA], 250 <= (wb[gA] = di) && (zR[gA] = 1)) : wb[gA] -= Math.max(1, bJ.dj(wb[gA] - gQ[gA], 1e3))
		}
		this.aIY()
	}, this.aIY = function() {
		for (var li = af.li, kZ = this.ju, aAD = this.jt, aA = aAD - 1; 0 <= aA; aA--) 0 === li[kZ[aA]] && (kZ[aA] = kZ[--aAD]);
		this.jt = aAD
	}
}

function cY() {
	var aIZ;
	this.kI = null, this.kH = 0, this.dU = function() {
		aIZ = [], 9 === aC.k9 && this.aIa()
	}, this.aIa = function() {
		var aIb = [60, 80, 105, 150, 190, 333];
		this.kI = [0, 0, 0, 0, 0, 0], this.kH = 0, aC.js <= aIb[0] ? (this.kH = 256 - bJ.dj(256 * aC.js, aIb[0]), aC.js <= 22 ? this.kI[5] = bJ.dj(Math.max(aC.js - 6, 0), 6) : this.kI[5] = 3 + bJ.dj(38 * (aC.js - 22), 100), this.kI[0] = aC.ea -
				aC.js - this.kH - this.kI[5]) : (this.kI[5] = Math.min(17 + bJ.dj(61 * (aC.js - 60), 100), 179), this.kI[0] = 512 - aC.js - this.kI[5]), aC.kD = aC.ea - aC.js, aC.data.numberTeams = (0 < aC.js) + (0 < aC.kD), aC.data.playerCount =
			aC.w7 = aC.js + aC.kD, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aC.js + this.kH, aC.kD - this.kH]), aC.a3P.a3T()
	}, this.aFr = function(player) {
		aIZ.push({
			player: player,
			g5: 14 + aw.jA(20)
		})
	}, this.im = function() {
		if (9 === aC.k9)
			for (var aA = aIZ.length - 1; 0 <= aA; aA--) --aIZ[aA].g5 <= 0 && (ae.pC(aIZ[aA].player, 0, ai.qt.xk + ai.qt.xy), aIZ.splice(aA))
	}
}

function d5() {
	function aIq() {
		return {
			eo: bQ.eo,
			ep: bQ.ep,
			vY: bQ.vY,
			vU: bQ.vU,
			vV: bQ.vV,
			vZ: bQ.vZ,
			eJ: bQ.eJ,
			mapSeed: bQ.mapSeed
		}
	}

	function aIi(aA) {
		return 1 !== aA && bQ.aBn(aA) && aA !== bQ.aIr()
	}
	this.aId = 22, this.aG2 = 4096, this.eo = 0, this.ep = 0, this.vY = null, this.vU = null, this.vV = null, this.vZ = null, this.eJ = 0, this.mapSeed = 0, this.vW = !1, this.vX = new aIe, this.vO = new aIf, this.a5e = new aIg, this.dU =
function() {
		this.vO.dU()
	}, this.a6 = function(map, aIh) {
		((map %= this.aId) !== this.eJ || aIi(this.eJ) && aIh !== this.mapSeed) && (this.vW = !1, this.vX.aIj(), aw.a3U(map), this.eJ = map, this.mapSeed = aIh, aIi(map) && (bQ.vO.vP[map].aIk = aIh), this.aBn(this.eJ) ? (map = bQ.vO.vP[this.eJ],
			this.eo = map.i, this.ep = map.j, aw.a3U(map.aIk), ao.a6([this.eo, this.ep, map.ln, map.lk]), aIm(), an.aIn(), ao.aIo()) : aIl())
	}, this.aIp = function(map, aIh) {
		var fK = aIq(),
			map = (this.a6(map, aIh), this.vX.aIj(), aIq());
		return this.eo = fK.eo, this.ep = fK.ep, this.vY = fK.vY, this.vU = fK.vU, this.vV = fK.vV, this.vZ = fK.vZ, this.eJ = fK.eJ, this.mapSeed = fK.mapSeed, map
	}, this.a3p = function(canvas) {
		canvas && this.vY !== canvas && (this.eo = canvas.width, this.ep = canvas.height, this.vY = canvas, this.vU = this.vY.getContext("2d", {
			alpha: !1
		}), this.hX = this.vU.getImageData(0, 0, this.eo, this.ep), this.vZ = this.hX.data, this.eJ = this.aIr(), this.mapSeed = 0, bQ.vO.vP[this.eJ].name = aC.data.mapName)
	}, this.eI = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIr()
	}, this.aIs = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIt = function(aA) {
		return 1 === aA
	}, this.aIr = function() {
		return this.aId
	}, this.aBn = function(aA) {
		return void 0 === this.vO.vP[aA].aIu
	}, this.a3o = function(pV) {
		return 0 === pV.mapType ? pV.mapProceduralIndex < 10 ? pV.mapProceduralIndex : 10 + pV.mapProceduralIndex : 1 === pV.mapType ? pV.mapRealisticIndex + 10 : void 0
	}, this.aBo = function(pV, aIv) {
		0 === pV.mapType ? pV.mapProceduralIndex = aIv < 10 ? aIv : aIv - 10 : 1 === pV.mapType && (pV.mapRealisticIndex = aIv - 10)
	}
}

function aIe() {
	function aJ4() {
		bQ.vX.im()
	}

	function aJA(gA, aJ9) {
		0 < aJ9 && (bQ.vZ[gA] += aJ9, bQ.vZ[gA + 1] += aJ9, bQ.vZ[gA + 2] += aJ9)
	}

	function h5(gA) {
		return bQ.vZ[gA + 2] > bQ.vZ[gA] && bQ.vZ[gA + 2] > bQ.vZ[gA + 1]
	}
	this.a7t = -1, this.zy = 0, this.aIw = 0, this.aIx = 8, this.aIy = 32, this.aIz = 8, this.aJ0 = 32, this.aJ1 = [0, 0], this.a6x = [0, 0, 0, 0], this.iM = null, this.aJ2 = !0, this.aJ3 = !1, this.aIj = function() {
		-1 !== this.a7t && clearTimeout(this.a7t), this.a7t = -1, this.iM = null, ao.aIo()
	}, this.dU = function() {
		7 === aZ.a05() || this.aJ3 || (this.aJ2 = !0, this.zy = 0, this.aIw = 1, this.aJ1 = [bQ.vO.vP[bQ.eJ].vr[0], bQ.vO.vP[bQ.eJ].vs[0]], this.a6x = [bQ.vO.vP[bQ.eJ].aIu[3], bQ.vO.vP[bQ.eJ].aIu[4], bQ.vO.vP[bQ.eJ].aIu[5], bQ.vO.vP[bQ.eJ].aIu[
			6]], this.aIx = bQ.vO.vP[bQ.eJ].aIu[7], this.aIy = bQ.vO.vP[bQ.eJ].aIu[8], this.aIz = bQ.vO.vP[bQ.eJ].aIu[9], this.aJ0 = bQ.vO.vP[bQ.eJ].aIu[10], this.aJ2 ? this.a7t = setTimeout(aJ4, 16) : this.im())
	}, this.im = function() {
		if (8 === aZ.a05() && aG.m0()) this.a7t = setTimeout(aJ4, 16);
		else {
			if (0 === this.zy) {
				var aIk = aw.aJ5();
				if (aw.a3U(bQ.vO.vP[bQ.eJ].aIu[2]), ao.a6([bQ.eo, bQ.ep, bQ.vO.vP[bQ.eJ].aIu[0], bQ.vO.vP[bQ.eJ].aIu[1]]), aw.a3U(aIk), this.iM = ao.aJ6(), this.zy++, this.aJ2) return void(this.a7t = setTimeout(aJ4, 16))
			}
			for (var gA, eP, aIk = this.aJ2 ? 10 : 1e6, aIk = bQ.ep - this.aIw - 1 < aIk ? bQ.ep - this.aIw - 1 : aIk, wo = this.aIw + aIk, em = this.aIw; em < wo; em++)
				for (var ek = 1; ek < bQ.eo - 1; ek++) h5(gA = 4 * (eP = ek + em * bQ.eo)) ? this.aJ7(gA, eP, 1) : (this.aJ7(gA, eP, 0), function(ek, em, gA) {
					return 1 < ek && h5(gA - 4) || ek < bQ.eo - 2 && h5(gA + 4) || 1 < em && h5(gA - 4 * bQ.eo) || em < bQ.ep - 2 && h5(gA + 4 * bQ.eo)
				}(ek, em, gA) && this.aJ8(ek, em));
			this.aIw = wo, this.aIw >= bQ.ep - 1 ? (bQ.vU.putImageData(bQ.vV, 0, 0, 1, 1, bQ.eo - 2, bQ.ep - 2), bd.dc = !0, this.aIj()) : this.aJ2 && (this.a7t = setTimeout(aJ4, 16))
		}
	}, this.aJ7 = function(gA, eP, dy) {
		aJA(gA, Math.floor(this.aJ1[dy] + this.a6x[dy] * this.iM[eP] / 1e4) - bQ.vZ[gA])
	}, this.aJB = function(gA, dx, aJC, dy, a6x) {
		aJA(gA, Math.floor(this.aJ1[dy] + (1 - dx / aJC) * a6x) - bQ.vZ[gA])
	}, this.aJ8 = function(kv, kw) {
		for (var gA, dx, aJC, a7j = kv - this.aIy, aJD = kw - this.aIy, wp = kv + this.aIy, wo = kw + this.aIy, a7j = a7j < 1 ? 1 : a7j, wp = wp > bQ.eo - 2 ? bQ.eo - 2 : wp, wo = wo > bQ.ep - 2 ? bQ.ep - 2 : wo, em = aJD < 1 ? 1 : aJD; em <=
			wo; em++)
			for (var ek = a7j; ek <= wp; ek++) h5(gA = 4 * (ek + em * bQ.eo)) ? (aJC = this.aIx + (this.aIy - this.aIx) * this.iM[ek + bQ.eo * em] / 1e4, Math.abs(kv - ek) > aJC || Math.abs(kw - em) > aJC || aJC <= (dx = Math.sqrt((kv - ek) * (
				kv - ek) + (kw - em) * (kw - em))) || this.aJB(gA, dx, aJC, 1, this.a6x[3])) : (aJC = this.aIz + (this.aJ0 - this.aIz) * this.iM[ek + bQ.eo * em] / 1e4, Math.abs(kv - ek) > aJC || Math.abs(kw - em) > aJC || aJC <= (dx = Math
				.sqrt((kv - ek) * (kv - ek) + (kw - em) * (kw - em))) || this.aJB(gA, dx, aJC, 0, this.a6x[2]))
	}
}

function aIm() {
	2 === bQ.eJ ? aJE([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eJ ? aJE([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eJ ? aJE([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eJ ? aJE([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eJ && aJE([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aJE(aJF, aJG, aJH, aJI, aJJ) {
	for (var ek, em, aJL, aJM, a1L, aJN, hx = aJF.length - 1, aJK = bQ.eo + bQ.ep, ed = (aJK *= aJK, aJH.length), aA = ed - 1; 0 <= aA; aA--) aJH[aA] *= aJH[aA];
	var aJO = new Array(ed),
		aAn = new Array(ed),
		aJP = new Array(ed),
		f5 = ao.aJ6();
	if (void 0 === aJJ)
		for (aJJ = new Array(ed), aA = ed - 1; 0 <= aA; aA--) aJJ[aA] = 0;
	for (aA = 1; aA < ed; aA++) aJO[aA] = aJH[aA] - aJH[aA - 1], aAn[aA] = aJI[aA] - aJI[aA - 1], aJP[aA] = aJJ[aA] - aJJ[aA - 1];
	for (ek = bQ.eo - 1; 0 <= ek; ek--)
		for (em = bQ.ep - 1; 0 <= em; em--) {
			for (aJL = aJK, aA = hx; 0 <= aA; aA--) aJL = (aJM = (ek - aJF[aA]) * (ek - aJF[aA]) + (em - aJG[aA]) * (em - aJG[aA])) < aJL ? aJM : aJL;
			for (a1L = aJI[ed - 1], aJN = aJJ[ed - 1], aA = 1; aA < ed; aA++)
				if (aJL < aJH[aA]) {
					a1L = aJI[aA - 1] + aFK((aJL - aJH[aA - 1]) * aAn[aA], aJO[aA]), aJN = aJJ[aA - 1] + aFK((aJL - aJH[aA - 1]) * aJP[aA], aJO[aA]);
					break
				} aJQ(bQ.eo * em + ek, a1L, aJN, f5)
		}
}

function aJQ(dy, a1L, aJN, f5) {
	a1L < 500 ? f5[dy] = bJ.dj(f5[dy] * a1L * 2, 1e3) : 500 < a1L && (f5[dy] += bJ.dj(2 * (1e4 - f5[dy]) * (a1L - 500), 1e3)), f5[dy] += bJ.dj(aJN * (10 * a1L - f5[dy]), 1e3)
}

function ca() {
	var aJR;

	function aJb(a1m, hZ, ek, em, globalAlpha) {
		bQ.vU.save(), bQ.vU.globalAlpha = globalAlpha, bQ.vU.imageSmoothingEnabled = !1, bQ.vU.scale(hZ, hZ), bQ.vU.drawImage(a1m, Math.floor(ek * (bQ.eo / hZ - a1m.width)), Math.floor(em * (bQ.ep / hZ - a1m.height))), bQ.vU.restore()
	}
	this.a5b = 0, this.a5c = 0, this.a5d = 0, this.a5e = 0, this.dU = function() {
		(aJR = new Array(bQ.aId))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dx: [220, 250, 255, 220],
			sG: [190, 220, 0, 0],
			ex: [170, 200, 0, 0]
		}, aJR[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dx: [25, 0, 100, 0, 25],
			sG: [25, 0, 0, 0, 25],
			ex: [25, 0, 0, 0, 25]
		}, aJR[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dx: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sG: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			ex: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJR[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dx: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sG: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			ex: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJR[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dx: [10, 10, 20, 10, 10, 170, 212],
			sG: [20, 20, 60, 100, 100, 110, 170],
			ex: [70, 70, 160, 30, 30, 60, 120]
		}, aJR[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dx: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sG: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			ex: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJR[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dx: [10, 10, 60, 255, 255, 200, 200],
			sG: [10, 10, 60, 255, 255, 200, 200],
			ex: [80, 80, 255, 255, 255, 200, 200]
		}, aJR[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dx: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sG: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			ex: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJR[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dx: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sG: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			ex: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJR[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dx: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sG: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			ex: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJR[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dx: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sG: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			ex: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJR[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dx: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sG: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			ex: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIn = function() {
		var aJa, aA, ew, fK, hX = function() {
				var hX;
				return bQ.vY = document.createElement("canvas"), bQ.vY.width = bQ.eo, bQ.vY.height = bQ.ep, bQ.vU = bQ.vY.getContext("2d", {
					alpha: !1
				}), hX = bQ.vU.getImageData(0, 0, bQ.eo, bQ.ep), bQ.vZ = hX.data, hX
			}(),
			i = aJR[bQ.eJ].i,
			dx = aJR[bQ.eJ].dx,
			sG = aJR[bQ.eJ].sG,
			ex = aJR[bQ.eJ].ex,
			f5 = ao.aJ6(),
			ed = i.length - 2,
			aJV = new Array(1 + ed),
			aJW = new Array(1 + ed),
			aJX = new Array(1 + ed),
			aJY = new Array(1 + ed);
		for (ew = ed; 0 <= ew; ew--) aJV[ew] = i[ew + 1] - i[ew], aJW[ew] = dx[ew + 1] - dx[ew], aJX[ew] = sG[ew + 1] - sG[ew], aJY[ew] = ex[ew + 1] - ex[ew];
		for (aA = bQ.eo * bQ.ep - 1; 0 <= aA; aA--)
			for (ew = ed; 0 <= ew; ew--)
				if (f5[aA] >= i[ew]) {
					fK = f5[aA] - i[ew], bQ.vZ[4 * aA] = dx[ew] + aFK(aJW[ew] * fK, aJV[ew]), bQ.vZ[4 * aA + 1] = sG[ew] + aFK(aJX[ew] * fK, aJV[ew]), bQ.vZ[4 * aA + 2] = ex[ew] + aFK(aJY[ew] * fK, aJV[ew]), bQ.vZ[4 * aA + 3] = 255;
					break
				} bQ.vU.putImageData(hX, 0, 0), bQ.aIt(bQ.eJ) && aa.sK() && bQ.aIt(bQ.eJ) && (hX = aa.aEU("arena"), aJa = aa.aEU("territorial.io"), aJb(hX, 5, .5, .5, .1), aJb(aJa, 2, .5, .45, .1)), bQ.vW = !0, bd.dc = !0
	}, this.a3X = function() {
		for (var gA, ek, em, aJc, hO, fM, a5c = 0, i = bQ.eo, j = bQ.ep, fK = i * j * 4, aJd = aAN, aJe = bQ.vZ, aA = i - 1; 0 <= aA; aA--) aJd[(gA = aA << 2) + 2] = aJd[fK - gA - 2] = 3;
		for (fK = 4 * i, aA = j - 1; 0 <= aA; aA--) aJd[(gA = aA * fK) + 2] = aJd[gA + fK - 2] = 3;
		for (aJc = i - 1, hO = j - 1, em = 1; em < hO; em++)
			for (fK = em * i, ek = 1; ek < aJc; ek++) fM = 1 - (aJe[(gA = fK + ek << 2) + 2] > aJe[gA + 1] && aJe[gA + 2] > aJe[gA]), aJd[gA + 2] = 2 - fM, a5c += fM;
		this.a5b = (i - 2) * (j - 2), this.a5e = 0, bQ.eI(bQ.eJ) && (bQ.a5e.aJf(), bQ.a5e.aJg()), this.a5c = aC.jc = a5c - this.a5e, this.a5d = this.a5b - this.a5c - this.a5e
	}
}

function aIl() {
	var pK;
	10 === bQ.eJ ? pK =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bQ.eJ ? pK =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bQ.eJ ? pK =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bQ.eJ ? pK =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bQ.eJ ? pK =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bQ.eJ ? pK =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bQ.eJ ? pK =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bQ.eJ ? pK =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bQ.eJ ? pK =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bQ.eJ && (pK =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new vH).vJ(pK)
}

function aIf() {
	this.vP = null, this.aJh = null, this.aJi = null, this.dU = function() {
		var aJj = [120, 105, 92],
			cos = [12, 12, 60],
			aJk = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJl = [140, 130, 120],
			aJm = [12, 12, 76],
			aJn = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJo = [130, 117, 106],
			aJp = [12, 12, 68],
			aJq = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vP = new Array(bQ.aId + 1), __fx.customLobby.setMapInfo(this.vP), this.vP[0] = {
			name: L(134),
			i: 230,
			j: 230,
			ln: 1e3,
			lk: 2e3,
			aIk: 173
		}, this.vP[1] = {
			name: L(135),
			i: 800,
			j: 800,
			ln: 100,
			lk: 50,
			aIk: 43
		}, this.vP[2] = {
			name: L(136),
			i: 512,
			j: 512,
			ln: 128,
			lk: 32,
			aIk: 0
		}, this.vP[3] = {
			name: L(137) + " 1",
			i: 960,
			j: 960,
			ln: 60,
			lk: 8,
			aIk: 0
		}, this.vP[4] = {
			name: L(138),
			i: 900,
			j: 900,
			ln: 100,
			lk: 5,
			aIk: 0
		}, this.vP[5] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			ln: 100,
			lk: 40,
			aIk: 0
		}, this.vP[6] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			ln: 100,
			lk: 20,
			aIk: 0
		}, this.vP[7] = {
			name: L(141),
			i: 1024,
			j: 1024,
			ln: 128,
			lk: 32,
			aIk: 0
		}, this.vP[8] = {
			name: L(142),
			i: 820,
			j: 820,
			ln: 200,
			lk: 100,
			aIk: 0
		}, this.vP[9] = {
			name: L(143),
			i: 1024,
			j: 1024,
			ln: 128,
			lk: 32,
			aIk: 0
		}, this.vP[10] = {
			name: L(144),
			vr: aJl,
			vs: aJm,
			aIu: aJn
		}, this.vP[11] = {
			name: L(145),
			vr: aJo,
			vs: aJp,
			aIu: aJq
		}, this.vP[12] = {
			name: L(146),
			vr: aJo,
			vs: aJp,
			aIu: aJq
		}, this.vP[13] = {
			name: L(147),
			vr: aJj,
			vs: cos,
			aIu: aJk
		}, this.vP[14] = {
			name: L(148),
			vr: aJj,
			vs: cos,
			aIu: aJk
		}, this.vP[15] = {
			name: L(149),
			vr: aJl,
			vs: aJm,
			aIu: aJn
		}, this.vP[16] = {
			name: L(150),
			vr: aJl,
			vs: aJm,
			aIu: aJn
		}, this.vP[17] = {
			name: L(151),
			vr: aJj,
			vs: cos,
			aIu: aJk
		}, this.vP[18] = {
			name: L(152),
			vr: aJo,
			vs: aJp,
			aIu: aJq
		}, this.vP[19] = {
			name: L(153),
			vr: aJj,
			vs: cos,
			aIu: aJk
		}, this.vP[20] = {
			name: L(154),
			i: 1024,
			j: 1024,
			ln: 128,
			lk: 32,
			aIk: 0
		}, this.vP[21] = {
			name: L(137) + " 2",
			i: 940,
			j: 940,
			ln: 80,
			lk: 8,
			aIk: 0
		}, this.vP[bQ.aId] = {
			name: ""
		}, this.aJh = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJh[aA] = aA;
		for (this.aJh[10] = 20, this.aJh[11] = 21, this.aJi = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJi[aA] = 10 + aA
	}
}

function aIg() {
	this.aJf = function() {
		for (var gA, ek, fK, aJd = aAN, aJe = bQ.vZ, i = bQ.eo, aJc = i - 1, hO = bQ.ep - 1, g5 = 0, em = 1; em < hO; em++)
			for (fK = em * i, ek = 1; ek < aJc; ek++) aJe[gA = fK + ek << 2] === aJe[1 + gA] && aJe[gA] === aJe[2 + gA] && (g5++, aJd[2 + gA] = 4);
		an.a5e = g5
	}, this.aJg = function() {
		for (var aJd = aAN, i = bQ.eo, aJc = i - 1, hO = bQ.ep - 1, id = 5, em = 1; em < hO; em++)
			for (var fK = em * i, ek = 1; ek < aJc; ek++) {
				var eH = 2 + (fK + ek << 2);
				4 === aJd[eH] && (! function(eH, id) {
					var ed = 1,
						aJd = aAN,
						ef = ab.ef,
						a1Y = [eH];
					aJd[eH] = id;
					for (; ed;) {
						for (var a1Z = [], aA = 0; aA < ed; aA++)
							for (var eS = a1Y[aA], eg = 3; 0 <= eg; eg--) {
								var eh = eS + ef[eg];
								4 === aJd[eh] && (aJd[eh] = id, a1Z.push(eh))
							}
						ed = (a1Y = a1Z).length
					}
				}(eH, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3W() {
	(x8 = void 0 === x8 ? document.createElement("canvas") : x8).width = bQ.eo, x8.height = bQ.ep, a3a = x8.getContext("2d", {
		alpha: !0
	}), a3b = aAN = null, a3b = a3a.getImageData(0, 0, bQ.eo, bQ.ep), aAN = a3b.data, b8.pm.va(aAN)
}

function cb() {
	var f5, i, j, max, aJs, lk, aJu, aJv, aJw, aJx, aJy, aJz, aK0, aK1, aJt = 1e4;

	function aK8(aK7, ln, ed) {
		var aA;
		for (aJu[0] = aK7, aA = 1; aA < ed; aA++) aJu[aA] = aJu[aA - 1] + ln, ln = aJu[aA] >= aJt ? (aJu[aA] = aJt - 1, -ln) : aJu[aA] < 0 ? (aJu[aA] = 0, -ln) : (ln += 16384 <= aw.random() ? lk : -lk) < -aJs ? -aJs : aJs < ln ? aJs : ln
	}

	function aKA(ek, em, aKB, ed) {
		(aKB ? function(ek, em, ed) {
			var aA;
			for (aA = 0; aA < ed; aA++) f5[em * i + ek + aA] = aJu[aA]
		} : function(ek, em, ed) {
			var aA;
			for (aA = 0; aA < ed; aA++) f5[em * i + ek + aA * i] = aJu[aA]
		})(ek, em, ed)
	}

	function aKE(value, ed) {
		var aA, aIB, eH, hm = value - aJu[ed - 1];
		if (0 != hm) {
			for (aIB = 1 + bJ.dj(Math.abs(hm), ed - 1), aIB = hm < 0 ? -aIB : aIB, aJu[ed - 1] = value, eH = (eH = ed - 1 - bJ.dj(Math.abs(hm), Math.abs(aIB))) < 1 ? 1 : ed - 2 < eH ? ed - 2 : eH, aA = ed - 2; eH <= aA; aA--) aJu[aA] += hm - (ed -
				1 - aA) * aIB;
			(hm < 0 ? function(ed) {
				var aA;
				for (aA = ed - 2; 1 <= aA; aA--) aJu[aA] < 0 && (aJu[aA] = -aJu[aA] - 1)
			} : function(ed) {
				var aA;
				for (aA = ed - 2; 1 <= aA; aA--) aJu[aA] >= aJt && (aJu[aA] = 2 * aJt - aJu[aA] - 1)
			})(ed)
		}
	}

	function aKH(a1Y, a1Z, ed) {
		for (var aA = 0; aA < ed; aA++) a1Y[aA] = a1Z[aA]
	}

	function aKI(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aKJ(a42, gap, hP) {
		aJv.push(a42), aJw.push(gap), aJx.push(hP)
	}
	this.a6 = function(a2n) {
		! function(a2n) {
			var aA;
			for (i = a2n[0], j = a2n[1], aJs = a2n[2], lk = a2n[3], f5 = new Int16Array(i * j), max = j < i ? i : j, aJu = new Int16Array(max), aJv = [], aJw = [], aJx = [], aJy = new Array(i), aJz = new Array(j), aA = i - 1; 0 <= aA; aA--) aJy[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJz[aA] = !1;
			aK0 = new Int16Array(i), aK1 = new Int16Array(j)
		}(a2n),
		function(ed) {
			var aK7 = aw.random() % aJt,
				ln = aw.random() % (2 * aJs + 1) - aJs;
			aK8(aK7, ln, ed)
		}(max), aKH(aK1, aJu, j), aKA(0, 0, !0, i);
		var ek, em, a2n = f5[0],
			ed = max,
			ln = aw.random() % (2 * aJs + 1) - aJs;
		for (aK8(a2n, ln, ed), aKH(aK0, aJu, i), aKA(0, 0, !1, j), aKI(aK0), aKI(aK1), aK8(f5[i - 1], aK0[i - 1], j), aKA(i - 1, 0, !1, j), aK8(f5[i * (j - 1)], aK1[j - 1], i), aKE(f5[i * j - 1], i), aKA(0, j - 1, !0, i), aJy[i - 1] = aJy[0] = !
			0, aJz[j - 1] = aJz[0] = !0, aKJ(0, i, !0), aKJ(0, j, !1), ! function() {
				var aKL, a42;
				for (;;) {
					if (aKL = function() {
							var aA, aKL = aJv.length - 1;
							for (aA = aKL - 1; 0 <= aA; aA--) aJw[aA] > aJw[aKL] && (aKL = aA);
							return aKL
						}(), aJw[aKL] < 5) return;
					a42 = aJv[aKL] + bJ.dj(aJw[aKL], 2), (aJx[aKL] ? function(ek) {
						var ed, aKO, aA, aDs = 0,
							aKP = 0;
						for (; aKP < j - 1;) {
							for (aA = aDs + 1; aA < j; aA++)
								if (aJz[aA]) {
									aKP = aA;
									break
								} ed = aKP - aDs + 1, aK8(f5[ek + i * aDs], 0 === aDs ? aK0[ek] : aJu[aKO - 1] - aJu[aKO - 2], ed), aKE(f5[aKP * i + ek], ed), aKA(ek, aDs, !1, ed), aKO = ed, aDs = aKP
						}
						aJy[ek] = !0
					} : function(em) {
						var ed, aKO, aA, aDs = 0,
							aKP = 0;
						for (; aKP < i - 1;) {
							for (aA = aDs + 1; aA < i; aA++)
								if (aJy[aA]) {
									aKP = aA;
									break
								} ed = aKP - aDs + 1, aK8(f5[em * i + aDs], 0 === aDs ? aK1[em] : aJu[aKO - 1] - aJu[aKO - 2], ed), aKE(f5[em * i + aKP], ed), aKA(aDs, em, !0, ed), aKO = ed, aDs = aKP
						}
						aJz[em] = !0
					})(a42), aKJ(a42, aJv[aKL] + aJw[aKL] - a42, aJx[aKL]), aJw[aKL] = a42 - aJv[aKL] + 1
				}
			}(), ek = 0; ek < i; ek++)
			if (!aJy[ek])
				for (em = 0; em < j; em++) aJz[em] || ! function(ek, em) {
					var value = f5[em * i + ek - 1] + f5[(em - 1) * i + ek],
						a5p = 2;
					aJy[ek + 1] && (a5p++, value += f5[em * i + ek + 1]);
					aJz[em + 1] && (a5p++, value += f5[(em + 1) * i + ek]);
					f5[em * i + ek] = bJ.dj(value, a5p)
				}(ek, em)
	}, this.aJ6 = function() {
		return f5
	}, this.aIo = function() {
		f5 = null
	}
}

function aFK(ew, ex) {
	return 0 <= ew ? bJ.dj(ew, ex) : -bJ.dj(-ew, ex)
}

function jP(f5) {
	return f5 * f5
}

function a54(ew, ex) {
	return ex < ew ? ew : ex
}

function a9r(ew, ex) {
	return ew < ex ? ew : ex
}

function a7G(ew, f5, ex) {
	return f5 < ew ? ew : ex < f5 ? ex : f5
}

function aKR(f5, ed) {
	for (var ey = bJ.dj(f5 + 1, 2), aA = 0; aA < ed; aA++) ey = bJ.dj(ey + bJ.dj(f5, ey), 2);
	return ey
}

function aGh(f5, ed) {
	return f5 < 1 ? 0 : aKR(f5, ed)
}

function aKS(m9, mA, rz, a70, mM, mN, s0, sh) {
	return !(m9 + rz <= mM || mA + a70 <= mN || mM + s0 <= m9 || mN + sh <= mA)
}

function aKT(m9, mA, rz, a70, mM, mN, s0, sh) {
	return m9 <= mM && mA <= mN && mM + s0 <= m9 + rz && mN + sh <= mA + a70
}

function vR(f5) {
	return Math.floor(!!f5 * (1 + Math.log2(f5 + .5)))
}

function bs() {
	this.dj = function(ew, ex) {
		return Math.floor((ew + .5) / ex)
	}, this.aKU = function(ew, ex) {
		return Math.floor(ew * (ex + .5))
	}, this.sqrt = function(f5) {
		return ~~Math.sqrt(f5 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.pB = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKV = function(fK, fM, fO) {
		return Math.max(Math.min(fK, fM), fO)
	}, this.aKW = function(aKX, aKY, ek, em) {
		ek -= aKX, aKX = em - aKY, em = 0;
		return 0 == ek ? em = 0 <= aKX ? Math.PI : 0 : (em = Math.atan(aKX / ek), em += 0 < ek ? .5 * Math.PI : 1.5 * Math.PI), em
	}, this.log2 = function(f5) {
		return Math.floor(!!f5 * (1 + Math.log2(f5 + .5)))
	}, this.log10 = function(f5) {
		return Math.floor(Math.log10(f5 + .5))
	}, this.aKa = function(aKb, aKc, aKd, aKe, aKf) {
		return aKd - aKf < aKb && aKb < aKd + aKf && aKe - aKf < aKc && aKc < aKe + aKf
	}, this.wP = function(hg, hh) {
		return hg * hg + hh * hh
	}
}

function d7() {
	this.x = new aKg, this.rs = 0;
	var aKh = new Array(30);

	function aKl() {
		for (var ed = aKh.length, aA = 0; aA < ed; aA++) aKh[aA] = null
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
	}, this.t = function(dy, aKk, a2n) {
		void 0 === aKk && (aKk = this.rs), bd.dc = !0, 0 === dy && (0 === aZ.a05() ? dy = 5 : z.a0.setState(13)), this.qu(), this.rs === dy && (aKk = aKh[dy].aKk, aKh[dy] = null), this.rs = dy;
		var ka = aKh[dy];
		if (!ka || 4 === dy || 7 === dy || 8 === dy || 9 === dy || 10 === dy || 11 === dy || 13 === dy || 15 === dy || 18 === dy || 20 <= dy && dy <= 28) {
			if (0 === dy) return void aKl();
			1 === dy ? ka = new aKm : 2 === dy ? ka = new aKn : 3 === dy ? ka = new aKo : 4 === dy || 9 === dy || 10 === dy || 11 === dy || 13 === dy ? ka = a2n : 5 === dy ? ka = new aKp : 6 === dy ? ka = new aKq : 7 === dy ? ka = new aKr(s.x
					.aKs) : 8 === dy ? ka = a2n : 12 === dy ? ka = new aKt : 14 === dy ? ka = new aKu : 15 === dy ? ka = new aKr(s.x.aKv) : 16 === dy ? ka = new aKw : 17 === dy ? ka = new aKx : 18 === dy ? ka = new aKy : 19 === dy ? ka =
				new aKz : 20 === dy ? ka = new aL0 : 21 === dy ? ka = new aL1 : 22 === dy ? ka = new aL2 : 23 === dy ? ka = new aL3 : 24 === dy ? ka = new aL4 : 25 === dy ? ka = new aL5 : 26 === dy ? ka = new aL6 : 27 === dy ? ka = new aL7 :
				28 === dy ? ka = new aL8 : 29 === dy && (ka = new aL9), ka.aKk = aKk, aKh[dy] = ka
		}
		ka.show(a2n)
	}, this.a0F = function() {
		this.hK() && this.aLA(this.aDO().aKk)
	}, this.aLA = function(dy) {
		this.hK() && (aKh[dy] ? (this.qu(), bd.dc = !0, this.rs = dy, aKh[dy].show()) : this.t(dy))
	}, this.qu = function() {
		this.hK() && aKh[this.rs].qu()
	}, this.w = function() {
		this.hK() && (aKh[this.rs].qu(), aKl(), this.rs = 0, z.a0.setState(13))
	}, this.tk = function() {
		var ka;
		this.hK() && (ka = aKh[this.rs]).tk && ka.tk()
	}, this.resize = function() {
		if (!this.hK()) return !1;
		aKh[this.rs].resize()
	}, this.gq = function(ek, em) {
		var ka;
		this.hK() && (ka = aKh[this.rs]).gq && ka.gq(ek, em)
	}, this.a0R = function(ek, em) {
		var ka;
		this.hK() && (ka = aKh[this.rs]).a0R && ka.a0R(ek, em)
	}, this.a0p = function() {
		var ka;
		this.hK() && (ka = aKh[this.rs]).a0p && ka.a0p()
	}, this.a0U = function(kv, kw, deltaY) {
		var ka;
		this.hK() && (ka = aKh[this.rs]).a0U && ka.a0U(kv, kw, deltaY)
	}, this.a0z = function(code) {
		var ka;
		return !!this.hK() && ((ka = aKh[this.rs]).a0z && ka.a0z(code), !0)
	}, this.im = function() {
		var ka;
		this.hK() && (ka = aKh[this.rs]) && ka.im && ka.im()
	}, this.hK = function() {
		return 0 < this.rs
	}, this.aDO = function() {
		return aKh[this.rs]
	}, this.aCO = function(dy) {
		return aKh[dy]
	}, this.aLB = function() {
		return aKh
	}
}

function aKr(data) {
	var aLC, aLD;
	this.show = function() {
		data.aLE && bG.aM5("account", data.rq), aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(data.username, [new v("⬅️ " + L(35), function() {
		bG.clear(), s.a0F()
	}), new v(data.aLE ? "🔄 " + L(155) : L(156), function() {
		s.t(8, s.aDO().aKk, new rt(25, {
			ru: 0,
			rq: data.rq,
			rr: data.rr
		}))
	}, 0, 0, 1)]), aLD = new pW(aLC.tb, function() {
		var pY = [];
		pY.push(function() {
				var aLV = new pG,
					qR = (aLV.pJ(L(205)), new qS({
						value: data.username,
						dy: -1
					}));
				qR.e.readOnly = !0, aLV.pU(qR), aLV.pU(new r8([new v(L(174), function(e) {
					return b8.pd.a2E(qR.e), b8.pd.a2F(e), !0
				}).button])), data.aLE || aLV.pL(L(206));
				return aLV
			}()),
			function(pY) {
				var aLV, pM, aAb, aLo, aLe;
				data.aLE || ((aLV = new pG).pJ(L(207)), (pM = aLV.pL(data.aLn.length + " / 160")).style.textAlign = "center", aAb = !0, (aLo = new tt(0, 1, function(e) {
					e = e.target.value.length;
					pM.textContent = e + " / 160", 160 < e ? aAb && (aAb = !1, aLe.py(1), aLe.button.style.color = b9.mj) : aAb || (aAb = !0, aLe.py(0), aLe.button.style.color = b9.nf)
				})).e.rows = 6, aLo.e.style.fontSize = "1em", aLo.u0(data.aLn), aLV.pU(aLo), aLe = new v(L(208), function() {
					if (!aAb) return !0;
					s.t(8, s.aDO().aKk, new rt(29, {
						ru: 1,
						pK: aLo.u2().substring(0, 160)
					}))
				}, 0, 0, 1), aLV.pU(new r8([aLe.button])), 0 !== data.aLp && (aLV.pU(new r8([new v(L(1 === data.aLp ? 210 : 211), function() {
					s.t(8, s.aDO().aKk, new rt(29, {
						ru: 0,
						pK: ""
					}))
				}, 0, 0, 1).button])), aLV.pL(1 === data.aLp ? L(212, [data.aLr - 1]) : L(213, [data.aLr - 1]))), aLV.pL(L(209, [data.aLq])), pY.push(aLV))
			}(pY),
			function(pY) {
				var aLV;
				data.aLE && 0 !== data.aLp && ((aLV = new pG).pJ(L(214)), aLV.pN(data.aLn), aLV.pU(new r8([new v(L(215, 0, "Report"), function(e) {
					return ay.x.aLa(0) && (b8.pd.a2F(e), ay.aLc.aLs({
						ru: 5,
						rq: data.rq
					})), !0
				}, 0, 0, 1).button])), pY.push(aLV))
			}(pY), pY.push(function() {
				var aLV = new pG,
					aLW = (aLV.pJ(L(157)), [L(158), L(159), L(160), L(161), L(162)]),
					dx = data.aLX;
				aLV.pP(L(163) + b8.zY.a32(data.uo, .01, 2) + "<br>" + L(164) + (dx + 1) + " / " + data.un + "<br>" + L(165) + aLW[dx < 10 ? 0 : dx < 50 ? 1 : dx < 200 ? 2 : dx < 1e3 ? 3 : 4]), data.aLE || (aLV.pL(L(166)), aLV.pL(L(167)),
					aLV.pL(L(168)));
				return aLV
			}()), data.aLE && pY.push(function() {
				var aLV = new pG,
					qR = (aLV.pJ(L(169)), new qS({
						value: bh.eA.data[147].value,
						dy: -1
					}, 1, void 0, function(e) {
						bh.r5.r6(147, aLY(e.target.value))
					})),
					aLZ = (aLV.pU(qR), new v(L(14), function(e) {
						return qR.e.readOnly && ay.x.aLa(0) && (b8.pd.a2F(e), aLb(), ay.aLc.aLd({
							ru: 0,
							rq: data.rq,
							value: parseInt(bh.eA.data[147].value, 10)
						})), !0
					}, 1)),
					aLe = new v(L(170), function(e) {
						return e.textContent === L(170) ? (e.textContent = L(171), qR.e.readOnly = !0, aLZ.py(0), aLZ.button.style.color = b9.nf, bh.r5.r6(147, qR.e.value), aLY(bh.eA.data[147].value)) : aLb(), !0
					}),
					pM = (aLV.pU(new r8([aLe.button])), aLV.pL()),
					aLY = function(f5) {
						f5 = b8.fy.a2k(f5, 2, 1e6);
						var aLf = Math.max(1, 1 + Math.floor(.01 * (f5 - 100)));
						pM.textContent = L(172, [f5, bh.eA.data[105].value, aLf, data.rq, f5 - aLf])
					},
					aLb = function() {
						aLe.button.textContent = L(170), qR.e.readOnly = !1, aLZ.py(1), aLZ.button.style.color = b9.mj
					};
				return aLY(bh.eA.data[147].value), aLV.pU(new r8([aLZ.button])), aLV
			}());
		pY.push(function() {
			var aLV = new pG,
				qR = (aLV.pJ(L(173)), new qS({
					value: data.rq,
					dy: -1
				}));
			return qR.e.readOnly = !0, aLV.pU(qR), aLV.pU(new r8([new v(L(174), function(e) {
				return b8.pd.a2E(qR.e), b8.pd.a2F(e), !0
			}).button])), aLV
		}()), data.aLE || (pY.push(function() {
			var aLV = new pG,
				aLg = (aLV.pJ(L(175)), new qS(bh.eA.data[106]));
			return aLg.e.readOnly = !0, aLg.e.type = "password", aLV.pU(aLg), aLV.pU(new r8([new v(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aLg.e.type = "text") : (e.textContent = L(176), aLg.e.type = "password"), !0
			}).button, new v(L(174), function(e) {
				return b8.pd.a2E(aLg.e), b8.pd.a2F(e), !0
			}).button])), aLV.pU(new r8([new v(L(178), function() {
				s.t(8, s.aDO().aKk, new rt(15))
			}).button])), aLV.pJ(L(179), "0.8em"), aLV.pL(L(180)), aLV.pL(L(181)), aLV.pL(L(182)), aLV
		}()), pY.push(function() {
			var aLV = new pG;
			return aLV.pJ(L(183)), aLV.pU(new r8([new v(L(184), function() {
				s.t(6, s.aDO().aKk)
			}).button])), aLV.pU(new r8([new v(L(185), function() {
				bh.r5.r6(105, ""), s.t(8, s.aDO().aKk, new rt(18))
			}).button])), aLV.pU(new r8([new v(L(186) + bh.eA.data[105].value, function() {
				s.t(4, 0, new u(L(187), L(188), !0, [new v("⬅️ " + L(35), function() {
					s.t(7, s.aCO(7).aKk)
				})]))
			}, b9.nO).button])), aLV
		}()), pY.push(function() {
			function aLi(dy) {
				for (var aA = 0; aA < 2; aA++) aLh[aA].py(0 === dy ? b9.mv : 0 === aA ? b9.nO : b9.n6)
			}
			var pS, aLh, aLV = new pG;
			aLV.pJ(L(189)), aLV.pL(L(190)), bh.x.uY();
			return aLh = [new v(L(191), function() {
				var dy = Math.min(bh.eA.data[117].value, pS.pT.length - 1);
				if (!(dy < 1)) {
					pS.pT[dy].remove(), pS.pT.splice(dy, 1);
					for (var aA = dy; aA < pS.pT.length; aA++) pS.pT[aA].name = "" + aA;
					bh.x.ub(dy), dy = bh.eA.data[117].value, pS.pT[dy].textContent = pS.pT[dy].textContent.replace("⚪", "🟢"), aLi(dy)
				}
			}, b9.mv), new v(L(192), function() {
				var dy = Math.min(bh.eA.data[117].value, pS.pT.length - 1);
				dy < 1 || (dy = bh.x.uc(dy), bh.r5.r6(105, dy.rq), bh.r5.r6(106, dy.password), s.t(8, s.aDO().aKk, new rt(18)))
			}, b9.mv)], (pS = new tQ(bh.eA.data[117], aLi)).pT[0].style.marginTop = "0.5em", aLV.pR(pS), aLV.pU(new r8([aLh[1].button])), aLV.pU(new r8([aLh[0].button])), aLV
		}()));
		return pY.push(function() {
				var aLV = new pG,
					aLW = (aLV.pJ(L(196)), [L(197), L(198), L(199), L(200)]),
					dx = data.aLj;
				return aLV.pP(L(201) + (data.zL / 100).toFixed(2) + "<br>" + L(164) + (dx + 1) + " / " + data.un + "<br>" + L(165) + aLW[dx < 10 ? 0 : dx < 50 ? 1 : dx < 200 ? 2 : 3]), aLV
			}()), pY.push(function() {
				var aLV = new pG;
				return aLV.pJ(L(193)), aLV.pP(L(194) + b8.zY.a32(data.uk, .1, 1) + "<br>" + L(164) + (data.ul + 1) + " / " + data.un + "<br>" + L(195) + data.um), aLV
			}()),
			function(pY) {
				var aLV = new pG,
					aLt = data.ur,
					aLu = (aLV.pJ(L(216)), aLV.pP(L(217, [data.up.length ? "[" + data.up + "]" : "-"])), aLV.pP(L(218, [b8.zY.a32(aLt, .01, 2)])), aLV.pP(L(219, [data.ut + 1 + " / " + data.un])), data.uu),
					aLv = (aLV.pP(L(220, [b8.zY.a32(aLu, .1, 1)])), data.uw);
				aLV.pP(L(221, [aLv])), aLV.pP(L(222, [b8.zY.a32(aLu / Math.max(aLv, 1), .1, 2)])), aLt = data.us, aLV.pJ(L(223), "0.8em"), aLV.pP(L(217, [data.uq.length ? "[" + data.uq + "]" : "-"])), aLV.pP(L(218, [b8.zY.a32(aLt, .01, 2)])),
					aLu = data.uv, aLV.pP(L(220, [b8.zY.a32(aLu, .1, 1)])), aLv = data.ux, aLV.pP(L(221, [aLv])), aLV.pP(L(222, [b8.zY.a32(aLu / Math.max(aLv, 1), .1, 2)])), data.aLE || (aLV.pL(L(224)), aLV.pL(L(225)));
				pY.push(aLV)
			}(pY),
			function(pY) {
				var aLV = new pG;
				aLV.pJ(L(226)), aLV.pP(L(201) + (data.aLw / 10).toFixed(1) + "<br>" + L(165) + (data.aLx.length ? L(227, [data.aLx]) : L(228))), data.aLE ? (aLV.pU(new r8([new v(L(229), function(e) {
					return ay.x.aLa(0) && (b8.pd.a2F(e), ay.aLc.aLs({
						ru: 4,
						rq: data.rq
					})), !0
				}, 0, 0, 1).button])), aLV.pL(L(230)), aLV.pL(L(231))) : aLV.pL(L(232));
				pY.push(aLV)
			}(pY), pY.push(function() {
				var aLV = new pG;
				if (aLV.pJ(L(202)), aLV.pP(L(203) + data.aLk + "<br>" + L(164) + (data.aLl + 1) + " / " + data.un + "<br>" + L(165) + bm.e0(data.aLl)), data.aLE) {
					var qR = new qS({
							value: bh.eA.data[157].value,
							dy: -1
						}, 1, void 0, function(e) {
							bh.r5.r6(157, aLY(e.target.value))
						}),
						aLe = (qR.e.style.marginTop = "0.6em", aLV.pU(qR), new v(L(170), function(e) {
							return e.textContent === L(170) ? (e.textContent = L(171), qR.e.readOnly = !0, aLm[0].py(0), aLm[1].py(0), aLm[0].button.style.color = b9.nf, aLm[1].button.style.color = b9.nf, aLY(bh.eA.data[157]
								.value)) : aLb(), !0
						})),
						aLm = (aLV.pU(new r8([aLe.button])), [new v("−", function(e) {
							return qR.e.readOnly && ay.x.aLa(0) && (b8.pd.a2F(e), aLb(), ay.aLc.aLd({
								ru: 2,
								rq: data.rq,
								value: bJ.pB(parseInt(bh.eA.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qR.e.readOnly && ay.x.aLa(0) && (b8.pd.a2F(e), aLb(), ay.aLc.aLd({
								ru: 1,
								rq: data.rq,
								value: bJ.pB(parseInt(bh.eA.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pM = aLV.pL(),
						aLY = function(f5) {
							return f5 = b8.fy.a2k(f5, 3, 32767), pM.textContent = L(204, [f5 - 1, f5, bh.eA.data[105].value]), f5
						};
					aLV.pU(new r8([aLm[0].button, aLm[1].button]));
					for (var aA = 0; aA < 2; aA++) aLm[aA].button.style.fontSize = "1.6em";
					var aLb = function() {
						aLe.button.textContent = L(170), qR.e.readOnly = !1, aLm[0].py(1), aLm[1].py(1), aLm[0].button.style.color = b9.mj, aLm[1].button.style.color = b9.mj
					};
					aLY(bh.eA.data[157].value)
				}
				return aLV
			}()),
			function(pY) {
				var aLV, a2D;
				data.aLE && !data.aLy || (0 === z.id || data.aLE || data.aLy) && ((aLV = new pG).pJ("Patreon"), !data.aLE && data.aLz ? aLV.pU(new r8([new v(L(176), function() {
					ay.aLc.aLs({
						ru: 7,
						rq: data.rq
					}), data.aLz = 0, s.t(7)
				}).button])) : data.aLy ? (aLV.pP(L(233, [(data.aM0 / 100).toFixed(2)]) + "<br>" + L(234, [1 + data.aM1 + " / " + data.aM2]) + "<br>" + L(235, [data.aM3 ? L(236) : L(237)])), data.aLE || aLV.pU(new r8([new v(L(238),
					function() {
						ay.aLc.aLs({
							ru: 8,
							rq: data.rq
						}), data.aLy = 0, bh.r5.r6(160, 0), s.t(7)
					}).button]))) : (aLV.pP(L(239), "0.75em").style.marginBottom = "0.3em", aLV.pP("  • " + L(240), "0.75em").style.whiteSpace = "pre", aLV.pP("  • " + L(241), "0.75em").style.whiteSpace = "pre", aLV.pP("  • " + L(
						242), "0.75em").style.whiteSpace = "pre", aLV.pP(L(243), "0.75em").style.marginTop = "1.0em", aLV.pP(L(244), "0.75em").style.marginTop = "1.0em", aLV.pP("<a href='" + bI.aM4 +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a2D = "https://www.patreon.com/oauth2/authorize?state=" + data.rq +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aLV.pP(L(245), "0.75em").style.marginTop = "1.0em", aLV.pP("<a href='" + a2D +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aLE || (aLV.pU(new rI), aLV.pU(new r8([new v(L(177), function() {
						ay.aLc.aLs({
							ru: 6,
							rq: data.rq
						}), data.aLz = 1, s.t(7)
					}).button])), aLV.pP(L(246), "0.75em").style.marginTop = "0.75em")), pY.push(aLV))
			}(pY), pY
	}())
}

function aL2() {
	var aM6, aM7, aM8, pY;

	function aM9() {
		aMB(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.aIncomeType ? (b8.pm.a1c(aM8.u2(), aC.data.aIncomeData, 255), b8.pm.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(247), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), aLV.pR(new tQ({
			tU: [L(249), L(250), L(251)],
			value: aC.data.aIncomeType
		}, function(dy) {
			aMB(), 2 !== dy || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.ea)), aC.data.aIncomeType = dy, s.t(22)
		})), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV;
		1 === aC.data.aIncomeType && ((aLV = new pG).pJ("Value"), aLV.pU(new qS({
			dy: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.pB(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pY.push(aLV))
	}(pY), function(pY) {
		var aLV;
		2 === aC.data.aIncomeType && ((aLV = new pG).pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.aIncomeData, 4)), aLV.pU(aM8), pY.push(aLV))
	}(pY), pY))
}

function aL5() {
	var aM6, aM7, aM8;

	function aM9() {
		aMB(), 3 !== aC.data.botDifficultyType || b8.pm.a1Q(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		3 === aC.data.botDifficultyType && b8.pm.a1c(aM8.u2(), aC.data.botDifficultyData, aD.k3.length - 1)
	}

	function aMG(pY, dy) {
		var aLV = new pG,
			value = (aLV.pJ(dy < 0 ? L(60) : L(59) + " " + be.zF[dy % 9]), 0 <= dy && (aLV.pP(L(254) + ": " + aC.data.teamPlayerCount[dy]).style.marginBottom = "1em"), dy < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dy]);
		aLV.pR(new tQ({
			tU: aD.k3,
			value: value
		}, function(hQ) {
			dy < 0 ? aC.data.botDifficultyValue = hQ : aC.data.botDifficultyTeam[dy] = hQ
		})), pY.push(aLV)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(60), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, function() {
		var pY = [];
		if (function(pY) {
				var aLV = new pG,
					tU = (aLV.pJ(L(248)), [L(250), L(252), L(253), L(251)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tU.splice(2, 1));
				aLV.pR(new tQ({
					tU: tU,
					value: value
				}, function(dy) {
					aMB(), aC.data.botDifficultyType = dy, 0 === aC.data.gameMode && 2 === dy && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.ea)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pY.push(aLV)
			}(pY), 0 === aC.data.botDifficultyType) aMG(pY, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aMG(pY, aA);
		else 3 === aC.data.botDifficultyType && ! function(pY) {
			var aLV = new pG;
			aLV.pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.botDifficultyData, 8)), aLV.pU(aM8), pY.push(aLV)
		}(pY);
		return pY
	}())
}

function aMH(data) {
	var aLC, aMI, aMJ, aMK, aML, aMM, aMN, colors, aMO, aMP, aMQ = 0,
		aMR = 0,
		aMS = !1,
		aMT = !1,
		aMU = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMy(kv, kw) {
		! function(kv, kw) {
			return aMI < kv && kv < aMI + aMK && aMJ < kw && kw < aMJ + aML
		}(aMQ = kv, aMR = kw) ? (aMS && (bd.dc = !0), aMS = !1) : (aMS = !0, bd.dc = !0)
	}
	this.show = function() {
		aMT = bh.eA.data[127].value, aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize();
		var ey = h.k,
			tj = aLC.tg(),
			aMd = ey * tj.ti,
			ey = ey * tj.qx;
		aMM = b8.pd.sH(.06), aMN = b8.pd.sH(.04), aMI = b8.pd.sH(.06), aMJ = ey + aMM, aMK = h.i - aMI - aMN, aML = aMd + ey - aMJ - aMN
	}, this.tk = function() {
		aLC.tk(),
			function() {
				var aA, aMa, g5, ek, ew, g = data.data,
					aMh = 1,
					aMi = .125,
					aMj = aMT ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aMa = g[aA].aMa, g5 = aMa.length, aMh = Math.max(g5, aMh), ew = 0; ew < g5; ew++) aMi = Math.max(aMa[ew], aMi), aMj = Math.min(aMa[ew], aMj);
				var mA = aMJ + aML,
					wy = aML / (aMi - aMj),
					wx = 1 / (aMh - 1);
				for (tl.lineWidth = ba.xu, aA = 0; aA < g.length; aA++) {
					for (aMa = g[aA].aMa, g5 = aMa.length, ek = aMI, tl.beginPath(), tl.moveTo(ek + aMK, mA - wy * (aMa[g5 - 1] - aMj)), ew = g5 - 2; 0 <= ew; ew--) tl.lineTo(ek + wx * ew * aMK, mA - wy * (aMa[ew] - aMj));
					tl.strokeStyle = colors[aA], tl.stroke()
				}(function(aMj, aMi, mA, wy) {
					tl.font = b8.pd.rS(0, .25 * aMI), b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 2), tl.fillStyle = colors[0];
					for (var ek = .92 * aMI, aA = 0; aA < 3; aA++) {
						var f5 = aMj + aA * (aMi - aMj) / 2;
						tl.fillText((f5 / 1e3).toFixed(3), ek, mA - wy * (f5 - aMj))
					}
				})(aMj, aMi, mA, wy),
				function(aMh) {
					var em = aMJ + aML + .15 * aMN;
					tl.font = b8.pd.rS(0, Math.min(.4 * aMN, .028 * h.i)), b8.pd.textBaseline(tl, 0), b8.pd.textAlign(tl, 2), tl.fillStyle = colors[0], tl.fillText(b8.a1H.a24(aMO), aMI + aMK, em), b8.pd.textAlign(tl, 0), tl.fillText(b8.a1H.a24(
						new Date(aMP.getTime() - 6e4 * (aMh - 1) * aMU[data.aMZ])), aMI, em)
				}(aMh),
				function(aMh, aMj, aMi) {
					if (aMS && !(aMh < 2)) {
						for (var a78, dy = (aMQ - aMI) / aMK * (aMh - 1), aMm = Math.floor(dy), aMn = Math.floor(1 + dy), aMo = dy - aMm, aMp = 1e5, aMq = -1, aMr = -1, aMs = aMi - (aMi - aMj) * (aMR - aMJ) / aML, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAn, aMa = g[aA].aMa;
							aMa.length <= aMn || (aMa = aMa[aMm] + aMo * (aMa[aMn] - aMa[aMm]), (aAn = Math.abs(aMs - aMa)) < aMp && (aMp = aAn, aMq = aA, aMr = aMa))
						} - 1 !== aMq && (aMi = aMJ + aML - (aMr - aMj) / (aMi - aMj) * aML, tl.lineWidth = .5 * ba.xu, tl.strokeStyle = colors[aMq], tl.beginPath(), tl.moveTo(aMI, aMi), tl.lineTo(aMQ, aMi), tl.lineTo(aMQ, aMJ + aML), tl
						.stroke(), tl.beginPath(), tl.arc(aMQ, aMi, .1 * aMI, 0, 2 * Math.PI), tl.fillStyle = colors[aMq], tl.fill(), aMj = aMJ + aML + .15 * aMN, b8.pd.textAlign(tl, 1), a78 = aMh - 2 < dy ? (a78 = aMP.getTime() - 6e4 * aMU[
								data.aMZ], new Date(a78 + (dy - (aMh - 2)) * (aMO.getTime() - a78))) : new Date(aMP.getTime() - 6e4 * (aMh - dy - 1) * aMU[data.aMZ]), aMh = b8.a1H.a24(a78), dy = b8.pd.measureText(aMh), a78 = bJ.pB(aMQ, aMI +
								.5 * dy, aMI + aMK - .5 * dy), tl.fillStyle = b8.color.mb(70, 50, 20), tl.fillRect(a78 - .52 * dy, aMJ + aML, 1.04 * dy, .55 * aMN), tl.fillStyle = colors[0], tl.fillText(aMh, a78, aMj), tl.font = b8.pd.rS(0,
								.25 * aMI), b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 2), a78 = .92 * aMI, aMh = (aMr / 1e3).toFixed(3), dy = b8.pd.measureText(aMh), aMj = a78 - 1.04 * dy, tl.fillStyle = b8.color.mb(70, 50, 20), tl
							.fillRect(aMj, aMi - .1625 * aMI, aMI - aMj, .275 * aMI), tl.fillStyle = colors[aMq], tl.fillText(aMh, a78, aMi))
					}
				}(aMh, aMj, aMi)
			}(), tl.lineWidth = ba.xu, tl.strokeStyle = b9.mj, tl.beginPath(), tl.moveTo(aMI, aMJ), tl.lineTo(aMI, aMJ + aML), tl.lineTo(aMI + aMK, aMJ + aML), tl.stroke();
		var aA, fontSize = .5 * aMM,
			g = (tl.font = b8.pd.rS(0, fontSize), b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 0), data.data),
			ed = g.length,
			em = aMJ - .5 * aMM,
			pK = "";
		for (aA = 0; aA < ed; aA++) pK += g[aA].name + "  ";
		pK = pK.trim();
		var aMv = b8.pd.measureText(pK),
			ek = .5 * (h.i - aMv);
		for (aMv > h.i && (ek = 0, tl.font = b8.pd.rS(0, h.i / aMv * fontSize)), aA = 0; aA < ed; aA++) tl.fillStyle = colors[aA], tl.fillText(g[aA].name, ek, em), ek += b8.pd.measureText(g[aA].name + "  ")
	}, this.gq = function(kv, kw) {
		aMy(kv, kw)
	}, this.a0R = function(kv, kw) {
		aMy(kv, kw)
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	};
	var aA, di, a22, hQ, eg = data.data,
		ed = eg.length,
		max = 1;
	for (aA = 0; aA < ed; aA++) max = Math.max(max, eg[aA].aMa.length);
	for (aA = 0; aA < ed; aA++)
		for (; eg[aA].aMa.length < max;) eg[aA].aMa.unshift(0);
	di = new Date, a22 = 6e4 * di.getTimezoneOffset(), hQ = di.getTime() - a22, aMO = new Date(hQ), 6 === data.aMZ ? function(di, a22) {
		var aMc = di.getUTCFullYear(),
			di = di.getUTCMonth() + 1;
		aMP = di < 12 ? new Date(Date.UTC(aMc, di) - a22) : new Date(Date.UTC(aMc + 1, 0) - a22)
	}(di, a22) : (a22 = 6e4 * aMU[data.aMZ], aMP = data.aMZ <= 4 ? new Date(hQ + a22 - di.getTime() % a22) : new Date(hQ + a22 - (di.getTime() + 2592e5) % a22)), hQ = b8.color, colors = [b9.mj, hQ.mb(255, 0, 0), hQ.mb(0, 200, 0), hQ.mb(80, 80,
		255), hQ.mb(255, 255, 0), hQ.mb(255, 0, 255), hQ.mb(0, 255, 255), hQ.mb(255, 140, 0), hQ.mb(128, 128, 128), hQ.mb(0, 255, 140)], aLC = new tV(L(255) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aMZ] + ", " + b8.a1H.a21(aMO), [
		new v("⬅️ " + L(35), function() {
			s.x.aAh()
		}), new v(L(256), function() {
			s.t(14)
		})
	], !1)
}

function aKu() {
	var aLC, aLD, pY;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(L(257), [new v("⬅️ " + L(35), function() {
		s.aLA(13)
	})]), aLD = new pW(aLC.tb, ((pY = []).push(function() {
		var aLV = new pG,
			aLe = (aLV.pJ(L(258)), aLV.pL(L(259)), new v(L(260), function() {
				bh.r5.r6(130, 0), s.x.aN3()
			}, 0, 0, 1)),
			qR = new qS(bh.eA.data[126], 0, function() {
				aLe.button.click()
			});
		return aLV.pU(qR), qR.e.placeholder = "a,b,c", qR.e.style.marginTop = "0.5em", aLV.pU(new r8([aLe.button])), aLV
	}()), pY.push(function() {
		var aLV = new pG,
			aLe = new v(L(260), function() {
				bh.r5.r6(130, 1), s.x.aN3()
			}, 0, 0, 1),
			aN4 = new qS(bh.eA.data[129], 1, function() {
				aN4.e.focus()
			}),
			aN5 = new qS(bh.eA.data[128], 1, function() {
				aLe.button.click()
			});
		return aLV.pJ(L(261)), aLV.pU(aN5), aN5.e.style.marginBottom = "0.5em", aLV.pJ(L(262)), aLV.pU(aN4), aLV.pU(new r8([aLe.button])), aLV
	}()), pY.push(function() {
		var aLV = new pG;
		return aLV.pJ(L(263)), bh.eA.data[125].tU = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLV.pR(new tQ(bh.eA.data[125])), aLV
	}()), pY.push(function() {
		var aLV = new pG;
		return aLV.pJ(L(264)), aLV.pU(new r2(bh.eA.data[127], L(265))), aLV
	}()), pY))
}

function aKt() {
	var aLC, aN6, aMK, aN7, aN8, aN9, colors = [0, 0, 0],
		aNA = -1;

	function aND(aA) {
		var aNE = aN6.em + aA * (ba.gap + aN9);
		tl.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", tl.fillRect(aN7, aNE, colors[aA] * aN8, aN9), tl.strokeStyle = b9.mj, tl.strokeRect(aN7, aNE, aN8,
			aN9), tl.fillStyle = b9.mj, tl.font = b8.pd.rS(0, .32 * aN9), b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 0), tl.fillText(L(0 === aA ? 268 : 1 === aA ? 269 : 270) + aNB(aA), aN7 + ba.gap, aNE + .53 * aN9)
	}

	function aNB(aA, aNF) {
		return aNF = aNF || 256, bJ.pB(Math.floor(aNF * colors[aA]), 0, aNF - 1)
	}

	function a0v(kv, kw) {
		return !(kv < aN7 || kw < aN6.em || kv > aN6.ek + aN6.i || kw > aN6.em + aN6.j)
	}
	this.show = function() {
		var f5 = bh.eA.data[121].value;
		colors[0] = (f5 >> 12) / 63, colors[1] = (f5 >> 6 & 63) / 63, colors[2] = (63 & f5) / 63, aLC.show(), this.resize()
	}, this.qu = function() {
		bh.r5.r6(121, (aNB(0, 64) << 12) + (aNB(1, 64) << 6) + aNB(2, 64)), aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aN6.resize();
		var ey = h.k,
			tj = aLC.tg(),
			aNC = (aN6.em = Math.max(aN6.em, ey * tj.qx + ba.gap), ey * tj.ti - 2 * ba.gap);
		aN6.j = Math.min(aN6.j, aNC), aN6.i = 2 * aN6.j, aN6.em = ey * tj.qx + .5 * (ey * tj.ti - aN6.j), aN6.ek = .5 * (h.i - aN6.i), aMK = .25 * aN6.i, aN7 = aN6.ek + aMK + ba.gap, aN8 = aN6.i - aMK - ba.gap, aN9 = (aN6.j - 2 * ba.gap) / 3
	}, this.tk = function() {
		var dx, sG, ex;
		aLC.tk(), tl.lineWidth = ba.xu, dx = aNB(0), sG = aNB(1), ex = aNB(2), tl.fillStyle = "rgb(" + dx + "," + sG + "," + ex + ")", tl.fillRect(aN6.ek, aN6.em, aMK, aN6.j), tl.strokeStyle = b9.mj, tl.strokeRect(aN6.ek, aN6.em, aMK, aN6.j), tl
			.fillStyle = dx + sG + ex < 306 && sG < 150 ? b9.mj : b9.ma, b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 1), tl.font = b8.pd.rS(0, .1 * aN6.j), tl.rotate(-Math.PI / 2), tl.fillText(L(267), -aN6.em - .5 * aN6.j, aN6.ek + .5 * aMK),
			tl.setTransform(1, 0, 0, 1, 0, 0), aND(0), aND(1), aND(2)
	}, this.gq = function(kv, kw) {
		a0v(kv, kw) && (aNA = bJ.pB(Math.floor((kw - aN6.em) / (aN9 + .75 * ba.gap)), 0, 2), colors[aNA] = bJ.pB((kv - aN7) / aN8, 0, 1), bd.dc = !0)
	}, this.a0R = function(kv) {
		-1 !== aNA && (colors[aNA] = bJ.pB((kv - aN7) / aN8, 0, 1), bd.dc = !0)
	}, this.a0U = function(kv, kw, deltaY) {
		a0v(kv, kw) && (kv = bJ.pB(Math.floor((kw - aN6.em) / (aN9 + .75 * ba.gap)), 0, 2), colors[kv] = bJ.pB(colors[kv] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0p = function() {
		0 <= aNA && (aNA = -1, bd.dc = !0)
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(L(266), [new v("⬅️ " + L(35), function() {
		s.x.aAh()
	})], !1), aN6 = new qF([.5, .25], [.5, .5], 1)
}

function aL1() {
	var aM6, aM7, aM8, qD;

	function aM9() {
		aMB(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aLB()[19] = null, s.a0F()
	}

	function aNG() {
		aMB(), s.t(21)
	}

	function aMB() {
		1 === aC.data.gameMode ? aC.a3P.a3T() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pm.a1c(aM8.u2(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, qD = [new v("⬅️ " + L(35), aM9)], 1 === aC.data.gameMode && qD.push(new v(L(271), aNG, 1, 1)), aM6 = new tV(L(272), qD), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), 0 === aC.data.gameMode && (aLV.pR(new tQ({
			tU: [L(273), L(251)],
			value: aC.data.colorsType
		}, function(dy) {
			aMB(), aC.data.colorsType = dy, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.ea || (aC.data.colorsData = new Uint32Array(aC.ea)), s.t(21)
		})), aLV.pU(new rI));
		aLV.pU(new r2({
			value: aC.data.selectableColor
		}, L(274), function(value) {
			aC.data.selectableColor = value
		})), pY.push(aLV)
	}(qD = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pY) {
		var aLV = new pG;
		aLV.pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.colorsData, 1)), aLV.pU(aM8), pY.push(aLV)
	}(qD) : (aC.a3P.a3T(), qD.push(function() {
		var aLV = new pG;
		aLV.pJ(L(254));
		for (var aA = 0; aA < be.zF.length; aA++) {
			var hQ = (aA + 1) % be.zF.length,
				e = aLV.pP((0 == hQ ? "" : "Team ") + be.zF[hQ]);
			aA && (e.style.marginTop = "0.5em"), aLV.pU(new qS({
				dy: -1,
				value: aC.data.teamPlayerCount[hQ]
			}, 1, 0, function(e) {
				aM6.tc[1].py(0);
				var playerCount = bJ.pB(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aNI] = playerCount
			})).e.aNI = hQ
		}
		return aLV
	}())), qD))
}

function rt(id, a2n, aNJ) {
	var aLC, aNK;

	function aNP() {
		aNK.pZ.innerHTML += "<br>" + L(277)
	}

	function aNO() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.r5.r6(110, bD.rv.rw(bD.rv.rx(8))), ay.aLc.aNd()
	}
	this.aNL = !0, this.aNM = id, this.show = function() {
		aLC.show(), this.resize(), 15 === id ? (ay.x.aNN(id) ? aNO : aNP)() : 16 === id ? ay.x.aNN(id) ? ay.aAe.aNQ(2) : aNP() : 17 === id ? ay.x.aNN(id) ? ay.aAe.aNQ(3) : aNP() : 18 === id ? (ay.x.close(0, 3253), ay.x.aEC(0, id), aNP()) : 21 ===
			id ? ay.x.aNN(id) ? ay.aNR.aNS(a2n.sB, a2n.sC, a2n.sD) : aNP() : 22 === id ? ay.x.aNN(id) ? ay.aNR.aNT(a2n.sB, a2n.aNU, a2n.aNV) : aNP() : 23 === id ? ay.x.aNN(id) ? ay.aNR.aNW(a2n.aMZ, a2n.zb) : aNP() : 24 === id ? ay.x.aNN(id) ? ay
			.aNR.aNX(a2n.aMZ, a2n.sC, a2n.sD) : aNP() : 25 === id ? ay.x.aNN(id) ? ay.aLc.aLs(a2n) : aNP() : 28 === id ? ay.x.aNN(id) ? ay.aNR.aNY(a2n.sB, a2n.aNU, a2n.aNV) : aNP() : 29 === id && (ay.x.aNN(id) ? ay.aLc.aNZ(a2n) : aNP())
	}, this.aNa = function() {
		15 === id ? aNO() : 16 === id ? ay.aAe.aNQ(2) : 17 === id ? ay.aAe.aNQ(3) : 18 === id ? s.t(8, this.aKk, new rt(16)) : 21 === id ? ay.aNR.aNS(a2n.sB, a2n.sC, a2n.sD) : 22 === id ? ay.aNR.aNT(a2n.sB, a2n.aNU, a2n.aNV) : 23 === id ? ay.aNR
			.aNW(a2n.aMZ, a2n.zb) : 24 === id ? ay.aNR.aNX(a2n.aMZ, a2n.sC, a2n.sD) : 25 === id ? ay.aLc.aLs(a2n) : 28 === id ? ay.aNR.aNY(a2n.sB, a2n.aNU, a2n.aNV) : 29 === id ? ay.aLc.aNZ(a2n) : 1e3 === id && (this.aNM = id = 25, ay.aLc.aLs(
				a2n))
	}, this.aNb = function(code, bp, data) {
		!bp && code !== id || (15 === code || 16 === code ? s.t(7, this.aKk) : 17 === code ? (ay.x.close(0, 3252), bh.x.ub(0), bh.eA.data[117].tU && 0 < bh.eA.data[117].tU.length ? (bp = bh.x.uc(0), bh.r5.r6(105, bp.rq), bh.r5.r6(106, bp
			.password), s.t(8, this.aKk, new rt(16))) : (bh.r5.r6(105, ""), s.x.aAh())) : 21 === code ? s.t(10, this.aKk, new aNc(data)) : 23 === code ? s.t(13, 0, new aMH({
			data: data,
			aMZ: a2n.aMZ
		})) : 25 === code && (s.x.aKv.rq = a2n.rq, s.t(15, this.aKk)))
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aNK.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(L(275), [new v("⬅️ " + L(35), function() {
		aNJ ? s.t(29) : s.x.aAh()
	})]), aNK = new r7(aLC.tb, L(276))
}

function aKz() {
	var aM6, aM7, pY;

	function aNg() {
		var g5;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3P.a3T()), g5 = b8.pm.a1W(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g5) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aM9() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNi(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNi() {
		b7.ot.dU(), bh.r5.r6(156, b7.a3f.yM())
	}

	function aNe() {
		aC.data.isReplay = 0, aNi(), aC.a3P.a3q(), aZ.aEN(), aC.a3P.a3n(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vY : null, aC.a3S(), aC.a3R = 1
	}

	function aNw() {
		aNg();
		for (var g = [aNl(), aNm(), aNn()], aA = 3; aA < 6; aA++) aM7.pZ.removeChild(aM7.pa[aA].pI), aM7.pa[aA] = g[aA - 3], aM7.pZ.appendChild(aM7.pa[aA].pI);
		aM7.resize()
	}

	function aNl() {
		var aNx, aLV = new pG;
		return aLV.pJ(L(272)), aNx = 0 === aC.data.gameMode ? [L(273), L(251)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLV.pP(aNx), aLV.pU(new r8([new v(L(281), function() {
			s.t(21)
		}).button])), aLV
	}

	function aNm() {
		var aLV = new pG,
			g = (aLV.pJ(L(60)), [L(250) + ": " + aD.k3[aC.data.botDifficultyValue], L(252), L(253), L(251)]);
		return aLV.pP(g[aC.data.botDifficultyType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(25)
		}).button])), aLV
	}

	function aNn() {
		var aLV = new pG,
			g = (aLV.pJ("Spawning"), [L(273), L(283), L(251)]);
		return aLV.pP(g[aC.data.spawningType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(24)
		}).button])), aLV
	}
	this.show = function() {
		aM6.show(), this.resize(), aM6.tb.scrollTop = s.x.aGG[0]
	}, this.qu = function() {
		s.x.aGG[0] = aM6.tb.scrollTop, aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV("🔧 " + L(278), [new v("⬅️ " + L(35), aM9), new v(L(279), aNe)]), aNg(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vY : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIp(bQ.a3o(aC.data), 0).vY : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIp(bQ.a3o(aC.data), aC.data.mapSeed).vY)), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG,
			a1m = (aLV.pJ(L(280)), aC.data.canvas);
		a1m.style.width = "100%", aLV.pU({
			e: a1m
		}), aLV.pU(new r8([new v(L(281), function() {
			s.t(20)
		}).button])), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV = new pG;
		aLV.pJ(L(254)), aLV.pU(new qS({
			dy: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.pB(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pm.a1W(aC.data.teamPlayerCount, 0), aC.a3P.a3T(), b8.pm.a1W(aC.data.teamPlayerCount, 0) !== e) && aNw()
		})), pY.push(aLV)
	}(pY), function(pY) {
		var aLV = new pG;
		aLV.pJ(L(282)), aLV.pR(new tQ({
			tU: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dy) {
			aC.data.gameMode !== dy && (aC.data.gameMode = dy, aNw())
		})), pY.push(aLV)
	}(pY), pY.push(aNl()), pY.push(aNm()), pY.push(aNn()), function(pY) {
		var aLV = new pG,
			g = (aLV.pJ(L(284)), [L(285), L(286), L(251)]);
		aLV.pP(g[aC.data.playerNamesType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(23)
		}).button])), pY.push(aLV)
	}(pY), function(pY) {
		var aLV = new pG,
			g = (aLV.pJ(L(247)), [L(249), L(250) + ": " + aC.data.aIncomeValue, L(251)]);
		aLV.pP(g[aC.data.aIncomeType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(22)
		}).button])), pY.push(aLV)
	}(pY), function(pY) {
		var aLV = new pG,
			g = (aLV.pJ(L(287)), [L(249), L(250) + ": " + aC.data.tIncomeValue, L(251)]);
		aLV.pP(g[aC.data.tIncomeType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(26)
		}).button])), pY.push(aLV)
	}(pY), function(pY) {
		var aLV = new pG,
			g = (aLV.pJ(L(288)), [L(249), L(250) + ": " + aC.data.iIncomeValue, L(251)]);
		aLV.pP(g[aC.data.iIncomeType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(27)
		}).button])), pY.push(aLV)
	}(pY), function(pY) {
		var aLV = new pG,
			g = (aLV.pJ(L(289)), [L(249), L(250) + ": " + aC.data.sResourcesValue, L(251)]);
		aLV.pP(g[aC.data.sResourcesType]), aLV.pU(new r8([new v(L(281), function() {
			s.t(28)
		}).button])), pY.push(aLV)
	}(pY), function(pY) {
		var aLV = new pG;
		aLV.pJ(L(290)), aLV.pU(new r8([new v(L(291), function() {
			s.w(), aC.a3P.a3r(), s.x.aGG[0] = 0, s.t(19)
		}).button])), aLV.pU(new r8([new v(L(292), function() {
			bk.aG5()
		}).button])), aLV.pU(new r8([new v(L(293), function() {
			return bk.aG7(), !0
		}).button])), pY.push(aLV)
	}(pY), pY))
}

function aL7() {
	var aM6, aM7, aM8, pY;

	function aM9() {
		aMB(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.iIncomeType && b8.pm.a1c(aM8.u2(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(288), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), aLV.pR(new tQ({
			tU: [L(249), L(250), L(251)],
			value: aC.data.iIncomeType
		}, function(dy) {
			aMB(), 2 !== dy || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.ea), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dy, s.t(27)
		})), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV;
		1 === aC.data.iIncomeType && ((aLV = new pG).pJ("Value"), aLV.pU(new qS({
			dy: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.pB(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pY.push(aLV))
	}(pY), function(pY) {
		var aLV;
		2 === aC.data.iIncomeType && ((aLV = new pG).pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.iIncomeData, 4)), aLV.pU(aM8), pY.push(aLV))
	}(pY), pY))
}

function aKp() {
	var aNy, aNz, aN6, qR, aO0;
	this.aEw = new s1, aN6 = new qF([.45, .27], [.5, .5], 2 / 3), aNz = [new v("⚔️<br>" + L(294), function() {
			aO1(0)
		}, b9.nC), new v("🗡️<br>" + L(278), function() {
			aO1(1)
		}, b9.nU), new v("🔑<br>" + L(295), function() {
			aO1(2)
		}, b9.nk), new v("☰<br>" + L(296), function() {
			aO1(3)
		}, b9.mw), new v("", function() {
			s.t(12)
		}, b9.mf, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qR = new qS(bh.eA.data[122]);
	for (var aA = 0; aA < aNz.length; aA++) aNz[aA].button.style.position = "absolute";

	function aO1(dy) {
		z.a0.setState(10), aa.sK() || aa.aEn(), 0 === dy ? s.x.a3i() : 1 === dy ? (b7.aGQ.vJ(bh.eA.data[156].value, 1) || aC.a3P.a3r(), s.t(19)) : 2 === dy ? 0 !== z.id || bh.eA.data[140].value ? s.t(8, s.rs, new rt(16)) : s.x.aO2(s.rs, 16) : 3 ===
			dy && s.t(1)
	}
	qR.e.style.position = "absolute", qR.e.style.textAlign = "center", qR.e.placeholder = L(297), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEw.show(), aNz[4].py(b8.color.a1t(bh.eA.data[121].value)), this.resize(), document.body.appendChild(qR.e);
		for (var aA = 0; aA < aNz.length; aA++) document.body.appendChild(aNz[aA].button);
		1 !== z.id || z.dk < 5 || (aO0 && bd.eC > aO0 + 144e5 ? z.uM.setState(14) : aO0 = bd.eC)
	}, this.qu = function() {
		this.aEw.qu(), document.body.removeChild(qR.e);
		for (var aA = 0; aA < aNz.length; aA++) document.body.removeChild(aNz[aA].button)
	}, this.resize = function() {
		this.aEw.resize(), this.aEw.resize(), aN6.resize();
		var gap = .5 * ba.gap,
			sp = 10 / 99 * .84 * aN6.i,
			aO5 = .16 * aN6.j,
			a7f = .19 * aN6.i,
			ek = aN6.ek + a7f,
			sp = aN6.em + sp + 3 * gap,
			i = .5 * (aN6.i - gap) - a7f,
			a7f = aN6.i - 2 * a7f - aO5 - gap,
			a7f = (b8.pd.sI(qR.e, ek, sp, a7f, aO5), b8.pd.sI(aNz[4].button, ek + a7f + gap, sp, aO5, aO5), .5 * (aN6.em + aN6.j - (sp += aO5 + gap) - gap));
		b8.pd.sI(aNz[0].button, ek, sp, i, a7f), b8.pd.sI(aNz[1].button, ek + i + gap, sp, i, a7f), b8.pd.sI(aNz[2].button, ek, sp + a7f + gap, i, a7f), b8.pd.sI(aNz[3].button, ek + i + gap, sp + a7f + gap, i, a7f);
		b8.pd.sI(aNz[5].button, ek, sp + a7f * 2 + gap * 2, i * 2 + gap, a7f / 3);
		b8.pd.sI(aNz[6].button, ek, sp + a7f * 2.33 + gap * 3, i * 2 + gap, a7f / 3);
		for (var aA = 0; aA < aNz.length; aA++) aNz[aA].button.style.font = b8.pd.rS(0, b8.pd.a29(.065 * aN6.j)), b8.pd.po(aNz[aA].button, 5);
		qR.e.style.font = b8.pd.rS(0, b8.pd.a29(.08 * aN6.j)), b8.pd.po(qR.e, 5)
	}, this.tk = function() {
		if (aZ.aER(), aS.tk(), aN.tk(), bW.tk(), aa.sK()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aN6.i * 0.03);
				tl.font = b8.pd.rS(1, size);
				tl.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tl.measureText(text).width;
				tl.textAlign = "left";
				tl.textBaseline = "middle";
				tl.fillText(text, tl.canvas.width - textLength - size / 2, size);
			};
			tl.imageSmoothingEnabled = !1;
			var ey = aa.aEU("territorial.io"),
				mL = .84 * aN6.i / ey.width;
			tl.setTransform(mL, 0, 0, mL, aN6.ek + .08 * aN6.i, aN6.em), aNy = aNy || b8.a1D.a2l(ey, b8.a1D.a2r, [0, 0, 0]);
			for (var ek = -1; ek <= 1; ek += 2)
				for (var em = -1; em <= 1; em += 2) tl.drawImage(aNy, ek, em);
			tl.drawImage(ey, 0, 0), tl.imageSmoothingEnabled = !0;
			var hj = aa.aEU("logo"),
				aO7 = .6666 * mL * ey.height / hj.height,
				mM = .5 * h.i,
				mN = aN6.em + .5 * mL * ey.height - .5 * aO7 * hj.height;
			tl.setTransform(aO7, 0, 0, aO7, mM - .6 * mL * ey.width, mN), tl.drawImage(hj, 0, 0), tl.setTransform(aO7, 0, 0, aO7, mM + .6 * mL * ey.width - aO7 * hj.width, mN), tl.drawImage(hj, 0, 0), tl.setTransform(1, 0, 0, 1, 0, 0), tl
				.imageSmoothingEnabled = !0
		}
	}
}

function aKw() {
	var aLC, aO8, aO9, tW;

	function aOA(aA) {
		s.t(8, s.rs, new rt(21, {
			sB: aA,
			sC: 0,
			sD: 10
		}))
	}
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aO8.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aO9 = [new v(L(298), function() {
		aOA(1)
	}, 0, 0, 1), new v(L(299), function() {
		aOA(2)
	}, 0, 0, 1), new v(L(300), function() {
		aOA(3)
	}, 0, 0, 1), new v(L(301), function() {
		aOA(0)
	}, 0, 0, 1), new v(L(302), function() {
		aOA(9)
	}, 0, 0, 1), new v(L(303), function() {
		aOA(10)
	}, 0, 0, 1), new v(L(304), function() {
		aOA(11)
	}, 0, 0, 1)], tW = [new v("⬅️ " + L(35), function() {
		s.a0F()
	})], aLC = new tV(L(305), tW), aO8 = new qC(aO9, aLC.tb)
}

function aB5(title, pQ, aOB) {
	var aLC, aNK;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aNK.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aOB = aOB || [new v("⬅️ " + L(35), function() {
		s.a0F()
	}, b9.nO)], aLC = new tV(title, aOB), aNK = new r7(aLC.tb, pQ), b8.pd.textAlign(aLC.tb.style, 1)
}

function aNc(data) {
	var aLC, aOC, ey, ri;

	function aOD(hm) {
		var ed = data.data.length;
		if (ed) {
			for (var sC, max = min = parseInt(data.data[0][0]), aA = 1; aA < ed; aA++) var aCr = parseInt(data.data[aA][0]),
				min = Math.min(aCr, min),
				max = Math.max(aCr, max);
			sC = hm < 0 ? min + hm : max + 1, s.t(8, s.aDO().aKk, new rt(21, {
				sB: data.sB,
				sC: sC,
				sD: sC + Math.abs(hm)
			}))
		}
	}
	this.show = function() {
			aLC.show(), this.resize()
		}, this.qu = function() {
			aLC.qu()
		}, this.resize = function() {
			aLC.resize(), aOC.resize()
		}, this.a0z = function(ey) {
			2 === ey && aLC.tc[0].pv()
		}, ey = data.data.length ? 0 : 1, ey = [new v("⬅️ " + L(35), function() {
			s.a0F()
		}), new v(L(306), function() {
			aOD(-10)
		}, ey, 0, 1), new v(L(307), function() {
			aOD(10)
		}, ey, 0, 1), new v(L(256), function() {
			s.t(11, 10, new aOE({
				sB: data.sB
			}))
		})], ri = [L(308), L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(303), L(304), L(318)], aLC = new tV(ri[data.sB], ey),
		function() {
			var aA, eg = {
					rc: []
				},
				rc = eg.rc,
				aOG = data.data,
				ed = aOG.length;
			ed && 0 === aOG[0][0] && 0 <= (dy = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.sB]) && (s.x.sE[dy] = aOG[0][1]);
			var mL = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.sB],
				a2v = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.sB],
				dy = [
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
			if (eg.ri = dy[data.sB], eg.rn = [
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
				][data.sB], 0 === data.sB || 2 === data.sB || 3 === data.sB || 9 === data.sB || 10 === data.sB || 11 === data.sB)
				for (aA = 0; aA < ed; aA++) rc.push([{
					f5: aOG[aA][0] + 1 + ".",
					di: 0
				}, {
					f5: aOG[aA][1],
					di: 1,
					rq: aOG[aA][4],
					rr: aOG[aA][3]
				}, {
					f5: (mL * aOG[aA][2]).toFixed(a2v),
					di: 0
				}]);
			else if (12 === data.sB)
				for (aA = 0; aA < ed; aA++) {
					var aOJ = aOG[aA][3];
					rc.push([{
						f5: "" + aOG[aA][0],
						di: 0
					}, {
						f5: "" + aOG[aA][4],
						di: 0
					}, {
						f5: aOG[aA][5],
						di: 1,
						rq: aOG[aA][1],
						rr: 0
					}, {
						f5: aOG[aA][6],
						di: 1,
						rq: aOG[aA][2],
						rr: 0
					}, {
						f5: bm.e4(aOJ % 16, aOJ >> 4),
						di: 0
					}])
				} else if (1 === data.sB)
					for (aA = 0; aA < ed; aA++) rc.push([{
						f5: aOG[aA][0] + 1 + ".",
						di: 0
					}, {
						f5: aOG[aA][1],
						di: 0
					}, {
						f5: (mL * aOG[aA][2]).toFixed(a2v),
						di: 0
					}, {
						f5: aOG[aA][3],
						di: 1,
						rq: aOG[aA][5],
						rr: aOG[aA][4]
					}]);
				else if (4 === data.sB || 5 === data.sB || 6 === data.sB || 7 === data.sB || 8 === data.sB)
				for (aA = 0; aA < ed; aA++) {
					var aOK = aOG[aA][5];
					4 === data.sB || 8 === data.sB ? "100%" === (aOK = (aOK % 64 * 100 / (aOK >> 6)).toFixed(0) + "%") && (4 === data.sB ? aOK += " (" + L(340) + ")" : aOK += " (" + L(341) + ")") : 5 === data.sB ? 32768 <= aOK && (aOK = -(aOK -
						32768)) : aOK = (mL * aOK).toFixed(a2v), rc.push([{
						f5: "" + aOG[aA][0],
						di: 0
					}, {
						f5: "" + aOG[aA][6],
						di: 0
					}, {
						f5: aOG[aA][7],
						di: 1,
						rq: aOG[aA][1],
						rr: aOG[aA][2]
					}, {
						f5: aOG[aA][8],
						di: 1,
						rq: aOG[aA][3],
						rr: aOG[aA][4]
					}, {
						f5: "" + aOK,
						di: 0
					}])
				}
			aOC = new rb(aLC.tb, eg)
		}()
}

function aOE(a2n) {
	var aLC, aLD, pY;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(L(342), [new v("⬅️ " + L(35), function() {
		s.aLA(10)
	})]), aLD = new pW(aLC.tb, ((pY = []).push(function() {
		var aLe, aLV = new pG,
			aN4 = new qS(bh.eA.data[132], 1, function() {
				aLe.button.click()
			}),
			aN5 = new qS(bh.eA.data[131], 1, function() {
				aN4.e.focus()
			});
		aLV.pJ(L(261)), aLV.pU(aN5), aN5.e.style.marginBottom = "0.8em", aLV.pJ(L(262)), aLV.pU(aN4);
		return aLe = new v(L(260), function() {
			sC = Math.floor(aN5.e.value), sD = Math.floor(aN4.e.value);
			var sD, sC = {
				a1U: Math.min(sC, sD),
				aKL: Math.max(sC, sD)
			};
			s.t(8, s.aCO(10).aKk, new rt(21, {
				sB: a2n.sB,
				sC: sC.a1U,
				sD: sC.aKL
			}))
		}, 0, 0, 1), aLV.pU(new r8([aLe.button])), aLV
	}()), pY.push(function() {
		var aLe, aLV = new pG,
			aN4 = new qS(bh.eA.data[134], 1, function() {
				aLe.button.click()
			}),
			aN5 = new qS(bh.eA.data[133], 0, function() {
				aN4.e.focus()
			});
		return aLV.pJ(1 === a2n.sB ? L(343) : L(344)), aLV.pU(aN5), aN5.e.style.marginBottom = "0.8em", aLV.pJ(L(345)), aLV.pU(aN4), aLe = new v(L(260), function() {
			var aNU = aN5.e.value.slice(0, 20),
				aNV = Math.abs(Math.floor(aN4.e.value));
			s.t(8, s.aCO(10).aKk, new rt(22, {
				sB: a2n.sB,
				aNU: aNU,
				aNV: aNV
			}))
		}, 0, 0, 1), aLV.pU(new r8([aLe.button])), aLV
	}()), pY.push(function() {
		var aLe, aLV = new pG,
			aN4 = new qS(bh.eA.data[152], 1, function() {
				aLe.button.click()
			}),
			aN5 = new qS(bh.eA.data[151], 0, function() {
				aN4.e.focus()
			});
		return aLV.pJ(L(346)), aLV.pU(aN5), aN5.e.style.marginBottom = "0.8em", aLV.pJ(L(345)), aLV.pU(aN4), aLe = new v(L(260), function() {
			var aNU = aN5.e.value.slice(0, 5),
				aNV = Math.abs(Math.floor(aN4.e.value));
			s.t(8, s.aCO(10).aKk, new rt(28, {
				sB: a2n.sB,
				aNU: aNU,
				aNV: aNV
			}))
		}, 0, 0, 1), aLV.pU(new r8([aLe.button])), aLV
	}()), pY))
}

function aL9() {
	var aOO, sO, aOR, sN, sQ, aOP = [new Array(4), [], new Array(2), new Array(2)],
		aOQ = new Array(4),
		aOS = new Array(2),
		aOT = [L(59), L(302), L(347), L(348)];

	function aCc() {
		var a5h = aOO.sb.qR.e.value.trim().slice(0, 127);
		a5h.length < 1 || (aOO.sb.qR.e.value = "", bl.aB8.yx(a5h))
	}

	function aOW(aOY) {
		bl.x.qg[3] = 1 - bl.x.qg[3], aOX(3, 1, bl.x.qg[3]), aOY && ay.aCn.aCo(4), bl.x.qg[3] && bh.r5.r6(158, bl.x.qg[0])
	}

	function aOU(ew, ex) {
		bl.x.qg[ew] !== ex && (0 === ew && bl.x.qg[3] && aOW(0), aOX(ew, bl.x.qg[ew], 0), aOX(ew, ex, 1), bl.x.qg[ew] = ex, 0 === ew ? (ay.aCn.aCo(2, ex), bl.x.qg[2] ? (aOO.sc.lV(), aOO.sb.qd(1)) : aOO.sb.qd(0), s.aDO().aCR(), s.aDO().aCQ()) : 2 ===
			ew && (0 === ex ? (ay.aCn.aCo(0), aOO.sb.lV(), aOO.sk()) : (ay.aCn.aCo(1), aOO.sc.lV(), aOO.sl())))
	}

	function aOX(ew, ex, color) {
		aOO.se[ew].qD[ex].py(color ? b9.n8 : b9.nt)
	}

	function aOb(aBg) {
		return aBg < 7 ? aBg + 2 + " " + L(355) : 7 === aBg || 10 === aBg ? L(302) + " (Full-Sending: " + L(7 === aBg ? 356 : 357) + ")" : 8 === aBg ? "1v1" : L(358)
	}

	function aOc(f5) {
		var a5k = bJ.dj(f5, 60),
			f5 = f5 % 60;
		return (a5k < 10 ? "0" : "") + a5k + ":" + (f5 < 10 ? "0" : "") + f5
	}
	this.aCz = function() {
		return aOO.sb
	}, this.aB8 = function(rq) {
		aOU(2, 0);
		var pK = aOO.sb.qR.e.value,
			rq = "@" + rq + " ";
		pK.length && !b8.zY.a2G(pK, " ") && (rq = " " + rq), aOO.sb.qR.e.value = pK += rq, aOO.sb.qR.e.focus()
	}, this.aCP = function() {
		aOO.sc.lV()
	}, this.aCR = function() {
		var aOa = bl.x.qg[0],
			aOa = bl.x.qi[aOa];
		bQ.a6(aOa.eJ, aOa.mapSeed), sO.qD[0].button.textContent = L(280) + ": " + bQ.vO.vP[aOa.eJ].name, sO.qD[1].button.textContent = L(282, 0, "Mode") + ": " + aOb(aOa.aBg), sO.qD[2].button.textContent = L(352) + ": " + bQ.vO.vP[aOa.aDP].name,
			sO.qD[3].button.textContent = L(353, 0, "Next Mode") + ": " + aOb(aOa.aDQ), sO.qD[4].button.textContent = L(354) + ": " + aOc(aOa.aCT), sO.resize()
	}, this.aCQ = function() {
		var aOa = bl.x.qg[0],
			qh = bl.x.qi[aOa];
		aOO.si(qh.sj);
		for (var aA = 0; aA < bl.sy.sz.length; aA++) aOP[0][aA].qc.textContent = "" + bl.sy.sz[aA].length;
		var sy = bl.sy.sz[aOa],
			aOd = sy.length,
			aOe = bl.sy.t0[aOa];
		aOP[2][1].qc.textContent = "" + aOd, aOP[3][1].qc.textContent = "" + aOe, sO.qD[4].button.textContent = L(354) + ": " + aOc(qh.aCT);
		for (aA = 0; aA < 4; aA++) {
			var aOf = bl.x.qi[aA];
			aOQ[aA] ? 0 === aOf.sj && (aOQ[aA].qc.textContent = bQ.vO.vP[aOf.eJ].name) : aOQ[aA] = new qb(bQ.vO.vP[aOf.eJ].name, sN.qD[aA].button, 1, 1), b8.zY.startsWith(aOT[aA], "🏆 ") ? aOf.aBm || (aOT[aA] = aOT[aA].substring(3), sN.qD[aA]
				.button.textContent = aOT[aA], sN.qD[aA].button.appendChild(aOP[0][aA].qc), sN.qD[aA].button.appendChild(aOQ[aA].qc)) : aOf.aBm && (aOT[aA] = "🏆 " + aOT[aA], sN.qD[aA].button.textContent = aOT[aA], sN.qD[aA].button
				.appendChild(aOP[0][aA].qc), sN.qD[aA].button.appendChild(aOQ[aA].qc))
		}
		var qh = "",
			aOh = "";
		0 === aOa && (qh = bl.qn.aC0(sy, 0, aOd), aOh = bl.qn.aC0(sy, 0, aOe)), aOR[0].qc.textContent = qh, aOR[1].qc.textContent = aOh, aOS[1].qc.textContent = "MP: " + bl.x.aCH[0] + "   SP: " + bl.x.aCH[1] + "   Lobby: " + b8.pm.a1h(bl.sy.sz)
	}, this.aCV = function() {
		aOO.sb.lV()
	}, this.show = function() {
		aOO.show(), this.resize(), bl.message.show()
	}, this.qu = function() {
		aOO.qu(), bl.tK.qu(), bl.sw.qu(), bl.message.qu()
	}, this.resize = function() {
		aOO.resize(1 - bl.x.qg[2]), bl.message.resize()
	}, this.a0z = function(ey) {
		2 === ey ? bl.x.qg[3] ? aOW(1) : aOO.se[3].qD[0].pv() : ey < 2 && aOW(1)
	}, sN = new rB([new v(aOT[0], function() {
		return aOU(0, 0), 2
	}), new v(aOT[1], function() {
		return aOU(0, 1), 2
	}), new v(aOT[2], function() {
		return aOU(0, 2), 2
	}), new v(aOT[3], function() {
		return aOU(0, 3), 2
	})], b9.nt), sO = new rB([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.nu, 1);
	var aOV = new rB([new v(L(349), function() {
		return aOU(2, 0), 2
	}), new v(L(113), function() {
		return aOU(2, 1), 2
	})], b9.nt);
	sQ = new rB([new v(L(350), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.tE(), ay.x.a0H(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.tE(), ay.x.a0H(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(351), function() {
		return aOW(1), 2
	})], b9.nt), aOO = new sM(sN, sO, aOV, sQ, aCc, bl.tK.aD8);
	for (var aA = 0; aA < 4; aA++) aOP[0][aA] = new qb("0", sN.qD[aA].button);
	aOP[2][1] = new qb("0", aOV.qD[1].button), aOP[3][1] = new qb("0", sQ.qD[1].button), aOR = [new qb("", aOV.qD[1].button, 1, 1), new qb("", sQ.qD[1].button, 1, 1)], aOX(0, bl.x.qg[0], 1), aOX(2, bl.x.qg[2], 1), (aOS = [new qb(L(254), aOO.sm(), 1,
		0), new qb("", aOO.sm(), 1, 1)])[0].qc.style.fontSize = "0.4em", aOS[1].qc.style.fontSize = "0.4em"
}

function aKq() {
	var aLC, aLD, pY;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(L(359), [new v("⬅️ " + L(35), function() {
		s.t(7, s.aCO(7).aKk)
	}), new v(L(192), function() {
		bh.r5.r6(105, bE.rv.v8(aLD.pa[0].pH[0].e.value, 5)), bh.r5.r6(106, bE.rv.v8(aLD.pa[1].pH[0].e.value, 8)), s.t(8, s.aCO(7).aKk, new rt(18))
	})]), aLD = new pW(aLC.tb, ((pY = []).push(function() {
		var aLV = new pG;
		return aLV.pJ(L(173)), aLV.pU(new qS({
			value: "",
			dy: -1
		})), aLV
	}()), pY.push(function() {
		var aLV = new pG,
			aLg = (aLV.pJ(L(175)), new qS({
				value: "",
				dy: -1
			}));
		return aLg.e.type = "password", aLV.pU(aLg), aLV.pU(new r8([new v(L(176), function(e) {
			return e.textContent === L(176) ? (e.textContent = L(177), aLg.e.type = "text") : (e.textContent = L(176), aLg.e.type = "password"), !0
		}).button])), aLV
	}()), pY))
}

function aKx() {
	var aLC, aO8, aO9, tW;

	function aOA(aA) {
		s.t(8, s.rs, new rt(21, {
			sB: aA,
			sC: 0,
			sD: 10
		}))
	}
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aO8.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aO9 = [new v(L(313), function() {
		aOA(5)
	}, 0, 0, 1), new v(L(314), function() {
		aOA(6)
	}, 0, 0, 1), new v(L(315), function() {
		aOA(7)
	}, 0, 0, 1), new v(L(318), function() {
		aOA(12)
	}, 0, 0, 1)], tW = [new v("⬅️ " + L(35), function() {
		s.a0F()
	})], aLC = new tV(L(360), tW), aO8 = new qC(aO9, aLC.tb)
}

function aKg() {
	this.eA = {}, this.sE = new Array(7), this.aKv = null, this.aKs = null, this.rZ = 0, this.aGG = [0], this.y = function() {
		s.t(5, 5)
	}, this.a3i = function() {
		s.w(), aY.dU()
	}, __fx.customLobby.setJoinFunction(() => {
		s.w(), aY.dU()
	}), this.aAh = function() {
		s.t(0 === aZ.a05() ? 5 : 0)
	}, this.aN3 = function() {
		if (1 === bh.eA.data[130].value) s.t(8, s.aDO().aKk, new rt(24, {
			aMZ: bh.eA.data[125].value,
			sC: bh.eA.data[128].value,
			sD: bh.eA.data[129].value
		}));
		else {
			for (var g = (g = bh.eA.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDO().aKk, new rt(23, {
				aMZ: bh.eA.data[125].value,
				zb: g
			}))
		}
	}, this.aO2 = function(aKk, target) {
		s.t(4, aKk, new u("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOj +
			"' target='_blank'>" + bI.aOj + "</a>", !1, [new v("⬅️ " + L(35), function() {
				s.t(aKk)
			}), new v("✅ Accept", function() {
				bh.r5.r6(140, 1), 0 === target ? s.t(2, aKk) : s.t(8, aKk, new rt(target))
			})]))
	}, this.aOk = function() {
		for (var aA = 0; aA < 7; aA++) this.sE[aA] = bE.uz.v3(bF.oe(5));
		this.sE[1] = "[" + this.sE[1] + "]", 5 === s.rs && (s.aDO().aEw.r6(this.sE), s.aDO().resize())
	}
}

function aL0() {
	var aM6, aM7, aOl, pY;

	function aM9() {
		b4.tE(), s.aLB()[19] = null, s.a0F()
	}

	function aOs() {
		aOv(), aOt()
	}

	function aOv() {
		aOl.pI.lastChild && aOl.pI.removeChild(aOl.pI.lastChild)
	}

	function aOt() {
		var aOw = bQ.a3o(aC.data);
		aC.data.canvas = bQ.aIp(aOw, aC.data.mapSeed).vY, aOu()
	}

	function aOu() {
		var a1m = aC.data.canvas;
		a1m.style.width = "100%", aOl.pI.appendChild(a1m)
	}
	this.aG0 = function(a1m) {
		aC.data.canvas && aOv(), aC.data.canvas = a1m, aOu()
	}, this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(280), [new v("⬅️ " + L(35), aM9)]), 2 === aC.data.mapType && b4.dU(), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), aLV.pR(new tQ({
			tU: [L(361), L(362), L(363)],
			value: aC.data.mapType
		}, function(dy) {
			2 === (aC.data.mapType = dy) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.tE()), s.t(20)
		})), 2 <= aC.data.mapType && (aLV.pU(new rI), aLV.pU(new r2({
			value: aC.data.passableWater
		}, L(364), function(value) {
			aC.data.passableWater = value
		})), aLV.pU(new r2({
			value: aC.data.passableMountains
		}, L(365), function(value) {
			aC.data.passableMountains = value
		})));
		pY.push(aLV)
	}(pY = []), function(pY) {
		if (0 === aC.data.mapType) {
			for (var aLV = new pG, tU = (aLV.pJ(L(280)), []), aA = 0; aA < bQ.vO.aJh.length; aA++) tU.push(bQ.vO.vP[bQ.vO.aJh[aA]].name);
			aLV.pR(new tQ({
				tU: tU,
				value: aC.data.mapProceduralIndex
			}, function(dy) {
				aC.data.mapProceduralIndex = dy, aOs()
			})), pY.push(aLV)
		}
	}(pY), function(pY) {
		if (1 === aC.data.mapType) {
			for (var aLV = new pG, tU = (aLV.pJ(L(280)), []), aA = 0; aA < bQ.vO.aJi.length; aA++) tU.push(bQ.vO.vP[bQ.vO.aJi[aA]].name);
			aLV.pR(new tQ({
				tU: tU,
				value: aC.data.mapRealisticIndex
			}, function(dy) {
				aC.data.mapRealisticIndex = dy, aOs()
			})), pY.push(aLV)
		}
	}(pY), function(pY) {
		var aLV;
		2 === aC.data.mapType && ((aLV = new pG).pJ(L(280)), aLV.pU(new r8([new v(L(366), function() {
			return b4.aFt(), !0
		}).button])), pY.push(aLV))
	}(pY), function(pY) {
		(aOl = new pG).pJ(L(367)), 2 !== aC.data.mapType ? aOt() : aC.data.canvas && aOu();
		pY.push(aOl)
	}(pY), function(pY) {
		var aLV, qR, aLe;
		0 === aC.data.mapType && ((aLV = new pG).pJ("Seed"), qR = new qS({
			dy: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOs())
		}), aLe = new v(L(273), function(e) {
			var aIk = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIk) return qR.e.value = aC.data.mapSeed = aIk, aOs(), !0
		}), aLV.pU(qR), aLV.pU(new r8([aLe.button])), pY.push(aLV))
	}(pY), function(pY) {
		var aLV, qR;
		2 === aC.data.mapType && ((aLV = new pG).pJ(L(368)), qR = new qS({
			dy: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLV.pU(qR), pY.push(aLV))
	}(pY), pY))
}

function u(title, pQ, aOx, aOB) {
	var aLC, aNK;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aNK.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aOB = aOB || [new v("⬅️ " + L(35), function() {
		s.a0F()
	})], aLC = new tV(title, aOB), aNK = new r7(aLC.tb, pQ), aOx && b8.pd.textAlign(aLC.tb.style, 1)
}

function aL3() {
	var aM6, aM7, aM8, pY;

	function aM9() {
		aMB(), 2 === aC.data.playerNamesType && 1 === b8.pm.a1Q(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.playerNamesType && b8.pm.a1e(aM8.u2(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(284), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), aLV.pR(new tQ({
			tU: [L(285), L(286), L(251)],
			value: aC.data.playerNamesType
		}, function(dy) {
			aMB(), aC.data.playerNamesType = dy, s.t(23)
		})), aLV.pU(new rI), aLV.pU(new r2({
			value: aC.data.selectableName
		}, L(369), function(value) {
			aC.data.selectableName = value
		})), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV;
		2 === aC.data.playerNamesType && ((aLV = new pG).pJ("Data"), aM8 = new tt(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.ea || (aC.data.playerNamesData = new Array(aC.ea), aC.data.playerNamesData
			.fill("")), aM8.u0(b8.zY.a38(aC.data.playerNamesData, 1, '"')), aLV.pU(aM8), pY.push(aLV))
	}(pY), pY))
}

function aKo() {
	var aM6, ty;

	function aOy() {
		s.w();
		var pK = b7.aP2(ty.u2());
		(aC.yt && 0 < pK.length && pK === b7.ot.a3e || b7.aGQ.vJ(pK)) && b7.aP3()
	}
	this.show = function(aOz) {
		this.aP0(aOz), aM6.show(), this.resize()
	}, this.aP0 = function(aOz) {
		0 === aC.yt ? aOz ? ty.u0(aOz) : b7.ot.a3e.length && ty.u0(b7.ot.a3e) : (aC.gm || (b7.ot.a3e = b7.a3f.yM()), ty.u0(b7.aP1(b7.ot.a3e)))
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), ty.resize()
	}, this.a0z = function(ey) {
		2 === ey ? aM6.tc[0].pv() : aOy()
	}, aM6 = new tV(L(370), [new v("⬅️ " + L(35), function() {
		s.aLA(1)
	}), new v(L(371), function() {
		ty.u3()
	}), new v(L(372), function() {
		ty.u4()
	}), new v(L(373), function() {
		ty.clear()
	}), new v(L(374), function() {
		aOy()
	})]), ty = new tt(L(375)), aM6.tb.appendChild(ty.e)
}

function aKn() {
	var aLC, aLD, pY, aAd, aLV;

	function aP4() {
		var eC;
		aAd !== bh.eA.data[12].value ? (b5.dU(), b5.aAc(), eC = bd.eC, s.t(4, 1, new u(L(378), L(379), !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.eC < eC + 1500 || z.a0.a1()
		}, b9.n6)]))) : s.t(1)
	}
	this.show = function() {
			aAd = bh.eA.data[12].value, aLC.show(), this.resize()
		}, this.qu = function() {
			aLC.qu()
		}, this.resize = function() {
			aLC.resize(), aLD.resize()
		}, this.a0z = function(ey) {
			2 === ey && aLC.tc[0].pv()
		}, aLC = new tV(L(376), [new v("⬅️ " + L(35), aP4), new v(L(377), function() {
			s.w(), bh.r5.ug(), s.t(2)
		})]), pY = [], (aLV = new pG).pJ(L(380)), aLV.pL(L(381)), pY.push(aLV),
		function(pY) {
			var aLV = new pG,
				g = (aLV.pJ(L(402)), b5.data.aAl());
			aLV.pR(new tQ({
				tU: g,
				value: b5.data.aAp(g)
			}, function(dy) {
				return bh.r5.r6(12, g[dy].split(":")[0]), !0
			})), pY.push(aLV)
		}(pY),
		function(pY) {
			var aLV = new pG,
				aP7 = (aLV.pJ(L(400)), []);
			aLV.pU(new r8([new v(L(401), function(e) {
				bV.aP8();
				for (var aA = 0; aA < aP7.length; aA++) aP7[aA].e.value = bV.aA3[aA];
				return b8.pd.a2F(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aP9.length; aA++) {
				aLV.pL(bV.aP9[aA]);
				for (var ew = 0; ew < 2; ew++) {
					var dy = 2 * aA + ew,
						qR = new qS({
							value: bV.aA3[dy],
							dy: -1
						});
					qR.e.aPA = dy, aP7.push(qR), qR.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aPB(e.target.aPA, code)
					}), ew && (qR.e.style.marginLeft = "4%"), qR.e.style.width = "48%", aLV.pU(qR)
				}
			}
			pY.push(aLV)
		}(pY), (aLV = new pG).pJ(L(23)), aLV.pR(new tQ({
			tU: ["1", "2"],
			value: aY.aE8 - 1
		}, function(aA) {
			aY.aE8 = aA + 1
		})), pY.push(aLV), (aLV = new pG).pJ(L(382)), bh.eA.data[1].tU = [L(383), L(384), L(385), L(386)], aLV.pR(new tQ(bh.eA.data[1])), pY.push(aLV), (aLV = new pG).pJ(L(387)), bh.eA.data[9].tU = [L(384), L(388), L(389)], aLV.pR(new tQ(bh.eA.data[
			9])), pY.push(aLV), (aLV = new pG).pJ(L(390)), bh.eA.data[11].tU = [L(391), L(9), L(392)], aLV.pR(new tQ(bh.eA.data[11])), pY.push(aLV), (aLV = new pG).pJ(L(393)), aLV.pU(new r2(bh.eA.data[2])), pY.push(aLV), (aLV = new pG).pJ(L(394)),
		aLV.pU(new r2(bh.eA.data[7])), pY.push(aLV), (aLV = new pG).pJ(L(395)), aLV.pU(new r2(bh.eA.data[8])), pY.push(aLV), (aLV = new pG).pJ(L(396)), aLV.pU(new qS(bh.eA.data[5])), pY.push(aLV), (aLV = new pG).pJ(L(397)), aLV.pU(new r2(bh.eA.data[
			13], L(398))), aLV.pU(new r2(bh.eA.data[14], L(399))), pY.push(aLV), aLD = new pW(aLC.tb, pY)
}

function aL4() {
	var aM6, aM7, aM8, pY;

	function aM9() {
		aMB(), 2 !== aC.data.spawningType || b8.pm.a1Q(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.spawningType && b8.pm.a1c(aM8.u2(), aC.data.spawningData, bQ.aG2 - 1)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(403), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG,
			tU = (aLV.pJ(L(248)), [L(273), L(283), L(251)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tU.splice(1, 1), 0 < value) && (value = 1);
		aLV.pR(new tQ({
			tU: tU,
			value: value
		}, function(dy) {
			aMB(), aC.data.spawningType = dy, 0 === aC.data.gameMode && 1 === dy && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.ea)), s.t(24)
		})), aLV.pU(new rI), aLV.pU(new r2({
			value: aC.data.selectableSpawn
		}, L(404), function(value) {
			aC.data.selectableSpawn = value
		})), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV = new pG;
		aLV.pJ("Seed"), aLV.pU(new qS({
			dy: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pY.push(aLV)
	}(pY), function(pY) {
		var aLV;
		2 === aC.data.spawningType && ((aLV = new pG).pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.spawningData, 2)), aLV.pU(aM8), pY.push(aLV))
	}(pY), pY))
}

function aKm() {
	var aLC, aO8, aO9, tW;

	function aPC(id) {
		0 !== z.id || bh.eA.data[140].value ? 0 === id ? s.t(8, 1, new rt(16)) : s.t(2) : s.x.aO2(s.rs, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aLC.show(), this.resize(), this.im()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aO8.resize()
	}, this.im = function() {
		8 === aZ.a05() && (2 <= bb.aPH ? aO9[2].pw === b9.mv && aO9[2].py(0) : aO9[2].pw !== b9.mv && aO9[2].py(b9.mv), !aC.gm && aL.pE(aC.eN) ? aO9[1].pw === b9.mv && aO9[1].py(0) : aO9[1].pw !== b9.mv && aO9[1].py(b9.mv), !aC.gm && au.hN(aC
			.eN) ? aO9[0].pw === b9.mv && aO9[0].py(0) : aO9[0].pw !== b9.mv && aO9[0].py(b9.mv))
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aO9 = [new v(L(405), function() {
		aPC(0)
	}), new v(L(305), function() {
		s.t(16)
	}), new v(L(360), function() {
		s.t(17)
	}), new v(L(406), function() {
		s.x.aN3()
	}, 0, 0, 1), new v(L(370), function() {
		s.t(3, 1)
	}), new v(L(407), function() {
		s.t(18)
	}), new v(L(376), function() {
		aPC(1)
	}), new v(L(408), function() {
		var ri = ["Patreon", L(417), L(418), "YouTube Tutorial", "Discord", L(419), L(298), L(420), L(301), L(421), "Terms", "Privacy"],
			a2B = [bI.aM4, bI.aB2, bI.a00, "https://www.youtube.com/watch?v=6QBmA9N1668", bI.aB3, bI.aPI, bI.aPJ, bI.zi, bI.aPK, bI.aPL, bI.aPM, bI.aOj];
		1 === z.id ? (ri.splice(2, 1), ri.splice(0, 1), a2B.splice(2, 1), a2B.splice(0, 1)) : 2 === z.id && (ri.splice(1, 1), ri.splice(0, 1), a2B.splice(1, 1), a2B.splice(0, 1)), s.t(4, 1, new u(L(408), b8.pd.a2A(ri, a2B), !1, [new v(
			"⬅️ " + L(35),
			function() {
				s.t(1)
			})]))
	}), new v(L(409), function() {
		s.t(4, 1, new u(L(409), l.dk + "<br><a href='" + bI.aPI + "' target='_blank'>" + bI.aPI + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(35), function() {
				s.t(1)
			})]))
	}), new v(L(410), function() {
		s.t(4, 1, new u(L(410), L(422) + "<br>" + L(423), !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		}), new v(L(424), function() {
			z.a0.zu(), s.t(1)
		})]))
	}), new v(L(411), function() {
		z.a0.zv(), s.t(4, 1, new u(L(425), L(426) + " <a href='" + bI.aOj + "' target='_blank'>" + bI.aOj + "</a>", !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		})]))
	})], tW = [new v("⬅️ " + L(35), function() {
		s.x.aAh()
	})], 8 === aZ.a05() && (aO9.unshift(new v(L(414), function() {
		2 <= bb.aPH && (s.w(), bc.a12(), bd.dc = !0)
	}, 0, 1)), aO9.unshift(new v(L(415), function() {
		!aC.gm && aL.pE(aC.eN) && (b6.gz.oL(), s.w(), aL.gn) && aL.a12()
	}, 0, 1)), aO9.unshift(new v(L(416), function() {
		!aC.gm && au.hN(aC.eN) && (bT.a4A(2), b6.gz.hJ(), s.w(), aL.gn) && aL.a12()
	}, 0, 1))), 1 === z.id && 5 <= z.dk && aO9.push(new v(L(412), function() {
		z.a0.zw()
	})), aLC = new tV(L(413), tW), aO8 = new qC(aO9, aLC.tb)
}

function aL8() {
	var aM6, aM7, aM8, pY;

	function aM9() {
		aMB(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.sResourcesType && b8.pm.a1c(aM8.u2(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(289), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), aLV.pR(new tQ({
			tU: [L(249), L(250), L(251)],
			value: aC.data.sResourcesType
		}, function(dy) {
			aMB(), 2 !== dy || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.ea)), aC.data.sResourcesType = dy, s.t(28)
		})), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV;
		1 === aC.data.sResourcesType && ((aLV = new pG).pJ("Value"), aLV.pU(new qS({
			dy: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.pB(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pY.push(aLV))
	}(pY), function(pY) {
		var aLV;
		2 === aC.data.sResourcesType && ((aLV = new pG).pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.sResourcesData, 2)), aLV.pU(aM8), pY.push(aLV))
	}(pY), pY))
}

function aL6() {
	var aM6, aM7, aM8, pY;

	function aM9() {
		aMB(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aLB()[19] = null, s.a0F()
	}

	function aMB() {
		2 === aC.data.tIncomeType && b8.pm.a1c(aM8.u2(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aM6.show(), this.resize()
	}, this.qu = function() {
		aM6.qu()
	}, this.resize = function() {
		aM6.resize(), aM7.resize()
	}, this.a0z = function(ey) {
		2 === ey && aM6.tc[0].pv()
	}, aM6 = new tV(L(287), [new v("⬅️ " + L(35), aM9)]), aM7 = new pW(aM6.tb, (function(pY) {
		var aLV = new pG;
		aLV.pJ(L(248)), aLV.pR(new tQ({
			tU: [L(249), L(250), L(251)],
			value: aC.data.tIncomeType
		}, function(dy) {
			aMB(), 2 !== dy || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.ea), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dy, s.t(26)
		})), pY.push(aLV)
	}(pY = []), function(pY) {
		var aLV;
		1 === aC.data.tIncomeType && ((aLV = new pG).pJ("Value"), aLV.pU(new qS({
			dy: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.pB(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pY.push(aLV))
	}(pY), function(pY) {
		var aLV;
		2 === aC.data.tIncomeType && ((aLV = new pG).pJ("Data"), (aM8 = new tt(0, 1, 0, 1)).u0(b8.zY.a38(aC.data.tIncomeData, 4)), aLV.pU(aM8), pY.push(aLV))
	}(pY), pY))
}

function aKy() {
	var aLC, aLD, pY;
	this.show = function() {
		aLC.show(), this.resize()
	}, this.qu = function() {
		aLC.qu()
	}, this.resize = function() {
		aLC.resize(), aLD.resize()
	}, this.a0z = function(ey) {
		2 === ey && aLC.tc[0].pv()
	}, aLC = new tV(L(407), [new v("⬅️ " + L(35), function() {
		s.a0F()
	})]), aLD = new pW(aLC.tb, ((pY = []).push(function() {
		function aLb() {
			aPR.button.textContent = L(170), aPP.e.readOnly = !1, aPQ.e.readOnly = !1, aLZ.py(1), aLZ.button.style.color = b9.mj
		}
		var aLV = new pG,
			aPO = (aLV.pJ(L(427)), new qS({
				value: bh.eA.data[105].value,
				dy: -1
			})),
			aPP = (aPO.e.readOnly = !0, aLV.pU(aPO), aLV.pJ(L(330), "0.8em"), new qS(bh.eA.data[148])),
			aPP = new qS(bh.eA.data[148], 0, void 0, function(e) {
				aLY(bh.eA.data[149].value, e.target.value)
			}),
			aPQ = (aLV.pU(aPP), aLV.pJ(L(334), "0.8em"), new qS(bh.eA.data[149], 1, void 0, function(e) {
				aLY(e.target.value, bh.eA.data[148].value)
			})),
			aPR = (aLV.pU(aPQ), new v(L(170), function(e) {
				return e.textContent === L(170) ? (e.textContent = L(171), aPP.e.readOnly = !0, aPQ.e.readOnly = !0, aLZ.py(0), aLZ.button.style.color = b9.nf, bh.r5.r6(149, aPQ.e.value), aLY(bh.eA.data[149].value, bh.eA.data[
					148].value)) : aLb(), !0
			})),
			aLZ = (aLV.pU(new r8([aPR.button])), new v(L(14), function(e) {
				return aPP.e.readOnly && ay.x.aLa(0) && (b8.pd.a2F(e), aLb(), ay.aLc.aLd({
					ru: 0,
					rq: bh.eA.data[148].value,
					value: parseInt(bh.eA.data[149].value, 10)
				})), !0
			}, 1)),
			pM = aLV.pL(),
			aLY = (aLV.pL(L(428)).style.fontWeight = "bold", function(f5, pK) {
				f5 = b8.fy.a2k(f5, 2, 1e6);
				var aLf = Math.max(1, 1 + Math.floor(.01 * (f5 - 100)));
				pM.textContent = L(172, [f5, bh.eA.data[105].value, aLf, pK, f5 - aLf])
			});
		return aLV.pU(new r8([aLZ.button])), aLY(bh.eA.data[149].value, bh.eA.data[148].value), aLV
	}()), pY))
}

function br() {
	"function" != typeof Math.log2 && (Math.log2 = function(ek) {
		return Math.log(ek) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ek) {
		return Math.log(ek) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ek) {
		return 0 < ek ? 1 : ek < 0 ? -1 : 0
	})
}

function cc() {
	var a7t, aPT, aPU, aPV, aPS = !1;

	function aPW() {
		aPS = !0, a7t = -1, aPT = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aPT[aA] = !1;
		var wP = Math.floor(1 + .02 * h.min);
		aPU = new Array(4), (aPV = new Array(4))[1] = aPV[3] = aPU[0] = aPU[2] = 0, aPV[0] = aPU[3] = -wP, aPU[1] = aPV[2] = wP
	}

	function aPX() {
		if (-1 !== a7t)
			if (0 !== aC.yt && aG.mR()) {
				for (var aPY = !1, aA = 3; 0 <= aA; aA--) aPT[aA] && (aPY = !0, iD += aPU[aA], iF += aPV[aA], ae.a0R(aPU[aA], aPV[aA]), aR.a7b());
				aPY ? bd.dc = !0 : ap.mH()
			} else ap.mH()
	}
	this.a0x = function(dy) {
		0 !== aC.yt && aG.mR() && (aPS || aPW(), aPT[dy] = !0, -1 === a7t) && (a7t = setInterval(aPX, 20), aPX())
	}, this.a10 = function(dy) {
		if (0 !== aC.yt && (aPS || aPW(), aPT[dy] = !1, -1 !== a7t)) {
			for (var aPY = !1, aA = 3; 0 <= aA; aA--) aPY = aPY || aPT[aA];
			aPY || this.mH()
		}
	}, this.mH = function() {
		if (aPS && -1 !== a7t) {
			for (var aA = 3; 0 <= aA; aA--) aPT[aA] = !1;
			clearInterval(a7t), a7t = -1
		}
	}
}

function cd() {
	this.x = new aPZ, this.lQ = new aPa, this.o2 = new aPb, this.aCn = new aPc, this.aAe = new aPd, this.aLc = new aPe, this.od = new aPf, this.aNR = new aPg, this.a5N = new aPh, this.aPi = new aPj, this.aPk = new aPl, this.aPm = new aPn, this.aPo =
		new aPp, this.dU = function() {
			this.x.dU()
		}
}

function aPZ() {
	var aPq, aPs;
	this.aEB = 5, this.aPr = null;

	function aPz(aA) {
		return aPs[aA].aPS && aPq[aA].aPz()
	}

	function aQ1(a02) {
		aPs[a02].eC = bd.eC, aPs[a02].aPu = !1
	}
	this.a0B = 0, this.a0A = 0, this.dU = function() {
		this.aPr = new Array(this.aEB);
		this.aPr[0] = "territorial.io";
		var aIk = aw.aJ5(0);
		aw.a3U(0);
		for (var aA = 1; aA < this.aEB; aA++) this.aPr[aA] = aJ.yS() + ".territorial.io";
		for (aw.a3U(aIk), aPq = new Array(this.aEB), aPs = new Array(this.aEB), aA = this.aEB - 1; 0 <= aA; aA--) aPs[aA] = {
			aPS: !1,
			eC: 0,
			aPu: !1
		};
		this.aEC(0, 0)
	}, this.aPv = function(aA) {
		return aPq[aA]
	}, this.im = function() {
		for (var aA = this.aEB - 1; 0 <= aA; aA--) this.aLa(aA) && bd.eC > aPs[aA].eC + 15e3 && ay.o2.aPw(aA, aPs[aA].aPu);
		!this.aLa(0) && bd.eC > aPs[0].eC + 8e3 && (aPs[0].eC = bd.eC, this.aEC(0, 0))
	}, this.aNN = function(id) {
		return this.aEC(0, id) && this.aPx(0)
	}, this.aEC = function(a02, aKk) {
		if (aPs[a02].aPS) {
			if (aPq[a02].aPz()) return aPq[a02].aQ0(aKk), aPq[a02].aLa();
			aPq[a02].qu()
		}
		return this.aPy(a02, aKk), !1
	}, this.aPy = function(a02, aKk) {
		aPs[a02].aPS = !0, aQ1(a02), aPq[a02] = new aQ2, aPq[a02].dU(a02, aKk)
	}, this.aQ0 = function(a02, aKk) {
		aPz(a02) && aPq[a02].aQ0(aKk)
	}, this.aQ3 = function(a02, aKk) {
		ay.aAe.aQ4(a02)
	}, this.aPx = function(aA) {
		return this.aLa(aA) && aPq[aA].aPx()
	}, this.aQ5 = function(aA) {
		aPq[aA].aQ5()
	}, this.aLa = function(aA) {
		return aPs[aA].aPS && aPq[aA].aLa()
	}, this.send = function(a02, aB) {
		aQ1(a02), aPq[a02].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0i = function(a02) {
		8 === aZ.a05() && (aPs[a02].aPu = !0, ay.lQ.aQ6 = !0)
	}, this.close = function(a02, aQ7) {
		aPz(a02) && aPq[a02].close(aQ7)
	}, this.aQ8 = function(a02, aQ7) {
		q.a0G(aQ7), aPz(a02) && aPq[a02].close(aQ7)
	}, this.a0H = function(aQ7) {
		for (var aA = this.aEB - 1; 0 <= aA; aA--) this.close(aA, aQ7)
	}, this.aQ9 = function(a02, aQ7) {
		for (var aA = this.aEB - 1; 0 <= aA; aA--) aA !== a02 && this.close(aA, aQ7)
	}, this.a3g = function() {
		this.close(this.a0B, 3246)
	}, this.aQA = function(a02, e) {
		aPq[a02].qu(), q.a01(a02, e.code)
	}
}

function aPa() {
	this.aQ6 = !1, this.im = function() {
		bd.jp() % 250 != 249 || aC.gm || (ay.aAe.aQB(+(this.aQ6 && af.li[aC.eN]), ak.jt + bL.x.or), this.aQ6 = !1)
	}
}

function aPh() {
	function aQc(aQd) {
		var eg = aC.data,
			aQd = (eg.selectedPlayer = bF.oe(aQd), eg.spawningSeed = bF.oe(14), bF.oe(4)),
			aQd = (aQd < 7 ? (eg.gameMode = 1, eg.numberTeams = aQd + 2) : 9 === aQd ? (eg.gameMode = eg.isZombieMode = 1, eg.numberTeams = 2) : (eg.gameMode = 0, eg.battleRoyaleMode = 7 === aQd ? 0 : 10 === aQd ? 1 : 2), eg.isContest = bF.oe(1), bF
				.oe(6));
		return eg.mapType = bQ.aBn(aQd) ? 0 : 1, bQ.aBo(eg, aQd), eg.mapSeed = bF.oe(14), aQd
	}
	this.aQD = function(a02, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aQ8(a02, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oe(1) ? function(a02) {
			var aQH = bF.oe(6);
			0 === aQH ? function(a02) {
					if (0 === a02 && 8 !== aZ.a05()) {
						s.x.aOk();
						for (var aQU = bF.oe(12), aQV = bF.oe(6), g = new Array(aQU), aA = 0; aA < aQU; aA++) g[aA] = bF.oe(aQV);
						aS.a80(g)
					}
				}(a02) : 2 === aQH ? ay.aPi.aQJ(a02) : 3 === aQH || 4 === aQH ? av.dU() : 9 === aQH ? ay.aPk.aQK(a02) : 10 === aQH ? ay.aPm.aQL() : 11 === aQH ? ay.aPk.aQM(a02) : 12 === aQH ? ay.aPm.aQN() : 13 === aQH ? ay.aPo.aQO() :
				14 === aQH ? ay.aPo.aQP() : 15 === aQH ? ay.aPk.aQQ() : 16 === aQH ? ay.aPi.aQR(a02) : 17 === aQH ? ay.aPi.aQS(a02) : 19 === aQH && ay.aPi.aQT(a02)
		} : function(a02) {
			if (8 !== aZ.a05() && !av.aEh()) return;
			if (a02 !== ay.x.a0B) ay.x.aQ8(a02, 3244);
			else if (0 === bF.oe(1)) bd.z2.aQe(bF.aB);
			else {
				var aA, a02 = bF.oe(2);
				if (0 === a02) {
					var oG, o2 = bF.oe(9);
					0 !== af.li[o2] && 0 !== af.li[aC.eN] && (oG = bF.oe(10), aM.oF(o2, aC.eN, oG), ae.pC(o2, 1, oG))
				} else if (1 === a02) ! function() {
					var o2 = bF.oe(9);
					0 !== af.li[o2] && 0 !== af.li[aC.eN] && b3.aIU(0, [o2], !0) && aM.oW(o2, 1)
				}();
				else if (2 === a02) ! function() {
					var o2 = bF.oe(9),
						target = bF.oe(9);
					0 !== af.li[o2] && 0 !== af.li[target] && 0 !== af.li[aC.eN] && b3.aIU(1, [o2], !0) && (ae.pC(o2, 3, 96), ae.pC(target, 4, 96), aM.a5U(o2, target))
				}();
				else if (l.a8 && !l.a9) {
					var ed = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), ed = Math.min(b6.nz.oh.length, 540), aA = 0; aA < ed; aA++) bB.aQk(32, b6.nz.oh[aA]);
					ay.x.send(ay.x.a0B, bB.aB)
				}
			}
		})(a02), bd.aQG())
	}, this.aQW = function(aB) {
		if (bF.dU(aB), bF.dy = 1, 3 === bF.oe(6)) {
			bF.dy += 20;
			var eg = aC.data = new a3O,
				aB = aQc(9),
				aBp = eg.humanCount = bF.oe(9) + 1;
			eg.selectableSpawn = 1 === eg.gameMode || aBp < 100, eg.colorsData = new Uint32Array(aBp), eg.playerNamesData = new Array(aBp);
			for (var aA = 0; aA < aBp; aA++) bF.dy++, eg.colorsData[aA] = bF.oe(18), eg.playerNamesData[aA] = bE.uz.v3(bF.oe(5));
			aZ.aEN(), bQ.a6(aB, eg.mapSeed), aC.a3S()
		} else ! function() {
			bF.dy += 20;
			var eg = aC.data = new a3O,
				aQb = aQc(1);
			eg.humanCount = 2;
			eg.selectableSpawn = 1, eg.elo = new Uint16Array(2), eg.colorsData = new Uint32Array(2), eg.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dy++, eg.colorsData[aA] = bF.oe(18), eg.elo[aA] = bF.oe(14), eg.playerNamesData[aA] = bE.uz.v3(bF.oe(5));
			aZ.aEN(), bQ.a6(aQb, eg.mapSeed), aC.a3S()
		}()
	}, this.aQZ = function() {
		bF.dy = 1;
		var aQH = bF.oe(6),
			aQa = bF.oe(10);
		return ay.x.a0A === aQa ? (ay.x.a0B = aQa, !1) : (ay.x.close(ay.x.a0A, 3247), ay.x.a0B = aQa, av.aBk = bF.oe(10), av.aEV = bF.oe(3 === aQH ? 9 : 1), ay.x.aEC(aQa, 5) && ay.o2.aEc(), !0)
	}
}

function aPn() {
	this.aQL = function() {
		bh.x.uX(), bh.r5.r6(105, bD.rv.rw(bD.rv.rx(5))), bh.r5.r6(106, bD.rv.rw(bD.rv.rx(8))), bh.r5.r6(109, bF.oe(30)), bh.r5.r6(108, bh.eA.data[109].value), bh.r5.r6(111, bh.eA.data[109].value + 1), bh.r5.r6(107, 0), bh.r5.r6(110, "")
	}, this.aQN = function() {
		var data;
		bF.size < bB.aQl(29) ? ay.x.aQ8(0, 3254) : ((data = {
			rr: bF.oe(30),
			uk: bF.oe(16),
			ul: bF.oe(30),
			um: bF.oe(30),
			un: bF.oe(30),
			uo: bF.aQm(32),
			username: bE.v1.vJ(5),
			up: bE.v1.vJ(3),
			uq: bE.v1.vJ(3),
			ur: bF.aQm(32),
			us: bF.aQm(32),
			ut: bF.oe(30),
			uu: bF.aQm(32),
			uv: bF.aQm(32),
			uw: bF.aQm(32),
			ux: bF.aQm(32),
			aLk: bF.aQm(32),
			aLl: bF.aQm(30),
			aLw: bF.aQm(32),
			aLx: bE.v1.vJ(3),
			aLp: bF.aQm(2),
			aLq: bF.aQm(10),
			aLn: bE.v1.vJ(8),
			aLr: bF.aQm(5),
			aLX: bF.oe(30),
			aLj: bF.oe(30),
			zL: bF.aQm(32),
			aLy: bF.oe(1),
			aLz: bF.oe(1)
		}).aLy && (data.aM0 = bF.aQm(32), data.aM1 = bF.oe(30), data.aM2 = bF.oe(30), data.aM3 = bF.oe(1)), 8 === s.rs && (25 === s.aDO().aNM ? (data.aLE = !0, s.x.aKv = data, s.aDO().aNb(25, !1)) : (data.aLE = !1, bh.r5.r6(160, +(data
			.aLy && data.aM3)), data.rq = bh.eA.data[105].value, s.x.aKs = data, bh.r5.uj(data), s.aDO().aNb(16, !0))))
	}
}

function aPp() {
	this.aQO = function() {
		var aA;
		if (bF.size < bB.aQl(23)) ay.x.aQ8(0, 3259);
		else {
			var sB = bF.oe(6),
				ed = bF.oe(10),
				data = [];
			if (9 === sB || 10 === sB || 11 === sB) {
				for (aA = 0; aA < ed; aA++) data.push([bF.oe(30), bE.v1.vJ(5), bF.aQm(32), 0, bF.oe(30)]);
				8 === s.rs && s.aDO().aNb(21, !0, {
					sB: sB,
					data: data
				})
			} else if (12 === sB) {
				for (aA = 0; aA < ed; aA++) data.push([bF.oe(20), bF.oe(30), bF.oe(30), bF.aQm(32), bF.oe(30), bE.v1.vJ(5), bE.v1.vJ(5)]);
				8 === s.rs && s.aDO().aNb(21, !0, {
					sB: sB,
					data: data
				})
			} else {
				var hV = bF.oe(16);
				if (bF.aQn(39 + 16 * hV + ed * (0 === sB ? 111 : 1 === sB ? 101 : 2 === sB || 3 === sB ? 127 : 212))) {
					if (0 === sB)
						for (aA = 0; aA < ed; aA++) data.push([bF.oe(30), bE.uz.v3(bF.oe(5)), bF.oe(16), bF.oe(30), bF.oe(30)]);
					else if (1 === sB)
						for (aA = 0; aA < ed; aA++) data.push([bF.oe(16), bE.uz.v3(bF.oe(3)), bF.oe(16), bE.uz.v3(bF.oe(5)), bF.oe(31), bF.oe(30)]);
					else if (2 === sB || 3 === sB)
						for (aA = 0; aA < ed; aA++) data.push([bF.oe(30), bE.uz.v3(bF.oe(5)), bF.aQm(32), bF.oe(30), bF.oe(30)]);
					else
						for (aA = 0; aA < ed; aA++) data.push([bF.oe(20), bF.oe(30), bF.oe(30), bF.oe(30), bF.oe(30), bF.aQm(32), bF.oe(30), bE.uz.v3(bF.oe(5)), bE.uz.v3(bF.oe(5))]);
					8 === s.rs && s.aDO().aNb(21, !0, {
						sB: sB,
						data: data
					})
				} else ay.x.aQ8(0, 3260)
			}
		}
	}, this.aQP = function() {
		if (bF.size < bB.aQl(29)) ay.x.aQ8(0, 3265);
		else {
			var aQo = bF.oe(4),
				aQp = bF.oe(7),
				aQq = bF.oe(11);
			if (bF.aQn(29 + 16 * aQp + 16 * aQq + 11 * aQo)) {
				for (var data = [], aA = 0; aA < aQo; aA++) {
					for (var zc = bE.uz.v3(bF.oe(3)), aQr = bF.oe(8), aMa = [], ew = 0; ew < aQr; ew++) aMa.push(bF.oe(16));
					data.push({
						name: "[" + zc + "]",
						aMa: aMa
					})
				}
				8 === s.rs && s.aDO().aNb(23, !0, data)
			} else ay.x.aQ8(0, 3266)
		}
	}
}

function aPj() {
	function aQt() {
		var id = bF.oe(3);
		return 0 === id ? {
			id: id,
			rq: bF.oe(30),
			p: bl.aB8.aCt(bE.v1.vJ(7))
		} : 1 === id ? {
			id: id,
			rq: bF.oe(30),
			aBv: bF.oe(3),
			value: bF.oe(30),
			target: bF.oe(30)
		} : 2 === id ? {
			id: id,
			rq: bF.oe(30),
			aBv: bF.oe(3)
		} : 3 === id ? {
			id: id,
			rq: bF.oe(30),
			aBv: bF.oe(3),
			value: bF.oe(4),
			target: bF.oe(30)
		} : 4 === id ? {
			id: id,
			rq: bF.oe(30),
			aBv: bF.oe(3),
			target: bF.oe(30)
		} : 5 === id ? {
			id: id,
			aBv: bF.oe(6)
		} : 6 === id ? {
			id: id,
			value: bF.oe(17)
		} : null
	}
	this.aQJ = function(a02) {
		if (a02 !== ay.x.a0A) ay.x.close(a02, 3239);
		else if (6 !== aZ.a05()) ay.x.close(a02, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qh = bl.x.qi[aA],
					playerCount = (qh.sj = bF.oe(10), qh.eJ = bF.oe(6), qh.mapSeed = bF.oe(14), qh.aBg = bF.oe(4), qh.aDP = bF.oe(6), qh.aDQ = bF.oe(4), qh.aBm = bF.oe(1), qh.aCT = bF.oe(12), qh.spawningSeed = bF.oe(14), bF.oe(16));
				bl.sy.t0[aA] = bF.oe(16);
				for (var ew = 0; ew < playerCount; ew++) bl.sy.aBJ(aA, bF.oe(30), bE.v1.vJ(5), bF.oe(4), bF.oe(30), bF.oe(7), bF.oe(16), bF.oe(18), bF.oe(11), bF.oe(12))
			}
			s.t(29), bl.x.aCJ(!0)
		}
	}, this.aQR = function(a02) {
		if (a02 !== ay.x.a0A) ay.x.close(a02, 3239);
		else if (bl.a09) {
			bl.x.aCH[0] = bF.oe(20), bl.x.aCH[1] = bF.oe(20);
			for (var aQs = bF.oe(16), ew = 0; ew < aQs; ew++) {
				var id = bF.oe(3);
				0 === id ? bl.sy.aBJ(bF.oe(2), bF.oe(30), bE.v1.vJ(5), 0, 1234566, 127, 0, bF.oe(18), 0, bF.oe(12)) : 1 === id ? bl.sy.aBa(bF.oe(16), bF.oe(2)) : 2 === id ? bl.sy.aBW(bF.oe(16), bF.oe(2), bF.oe(2)) : 3 === id ? bl.sy.aBZ(bF.oe(
					16), bF.oe(2)) : 4 === id ? bl.sy.aBP(bF.oe(16), bF.oe(2), bF.oe(4), bF.oe(30), bF.oe(7), bF.oe(16), bF.oe(11)) : 5 === id && bl.sy.aBQ(bF.oe(16), bF.oe(2), bF.oe(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qh = bl.x.qi[aA];
				if (qh.sj = bF.oe(10), 0 === qh.sj) {
					if (qh.a0B = bF.oe(10), qh.aBk = bF.oe(10), bl.aB9.dd(aA)) return;
					qh.eJ = bF.oe(6), qh.mapSeed = bF.oe(14), qh.aBg = bF.oe(4), qh.aDP = bF.oe(6), qh.aDQ = bF.oe(4), qh.aBm = bF.oe(1), qh.aCT = bF.oe(12), qh.spawningSeed = bF.oe(14), qh.aDR.push(qh.aDR[0]), qh.aDR.shift()
				}
			}
			bl.x.aCL()
		} else ay.x.close(a02, 3251)
	}, this.aQS = function(a02) {
		if (a02 !== ay.x.a0A) ay.x.close(a02, 3272);
		else if (bl.a09) {
			for (var qf = bF.oe(4), qh = bl.x.qi[qf], qj = qh.qj, tD = (qh.qk = bF.oe(20), bF.oe(6)), aA = 0; aA < tD; aA++) qj.push(aQt());
			bl.x.aCU(qf)
		} else ay.x.close(a02, 3273)
	}, this.aQT = function(a02) {
		a02 !== ay.x.a0A ? ay.x.close(a02, 3276) : bl.a09 ? bl.message.aCp(aQt()) : ay.x.close(a02, 3277)
	}
}

function aPl() {
	this.aQK = function(a02) {
		var aQg, qA;
		bF.aQn(70) ? (aQg = bF.oe(3), qA = bg.aQu.im(bF.oe(30), bF.oe(30)), ay.aAe.aQv(a02, qA, aQg), 0 < aQg || (0 === a02 && 0 === bh.eA.data[105].value.length ? ay.aAe.aNQ(0) : ay.aLc.aQw(a02), 4 === ay.x.aPv(a02).aQx() ? 6 === aZ.a05() && ay
			.aCn.aED(a02) : 5 !== ay.x.aPv(a02).aQx() || 8 !== aZ.a05() && 10 !== aZ.a05() || ay.o2.aEc())) : ay.x.aQ8(a02, 3269)
	}, this.aQM = function(a02) {
		var id = bF.oe(6);
		1 === id ? (bh.r5.r6(160, bF.oe(30)), ay.x.aQ5(a02), aS.a7w || ay.aAe.aNQ(1), b5.aAc(), 8 === s.rs && s.aDO().aNa()) : 21 === id ? 8 === s.rs && s.aDO().aNb(17) : 22 === id && (bh.r5.r6(106, bh.eA.data[110].value), bh.r5.r6(110, ""),
			8 === s.rs) && s.aDO().aNb(15)
	}, this.aQQ = function() {
		var ed = bF.oe(16),
			aQy = bF.oe(16);
		if (bF.aQn(55 + 10 * ed + 16 * aQy)) {
			for (var g = [], aA = 0; aA < ed; aA++) g.push(bE.uz.v3(bF.oe(10)));
			b5.aAg(g)
		} else ay.x.aQ8(0, 3270)
	}
}

function aPb() {
	this.aPw = function(a02, aPu) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPu ? 1 : 0), ay.x.send(a02, bB.aB)
	}, this.aEc = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.a0A), bB.a7(10, av.aBk), bB.a7(9, av.aEV), bB.a7(10, l.dm), bB.a7(14, l.dg), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o3 = function(eP) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eP), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o4 = function(iC, j3) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, iC), bB.a7(10, j3), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o8 = function(iC, o6) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, iC), bB.a7(9, o6), ay.x.send(ay.x.a0B, bB.aB)
	}, this.o9 = function(iC, eP) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, iC), bB.a7(22, eP), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oC = function(m5, eP) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m5), bB.a7(22, eP), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oE = function(j3) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, j3), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oI = function(dy) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dy), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oK = function(oJ) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oJ), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oM = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oN = function(iC, eP, j3) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, iC), bB.a7(10, j3), bB.a7(22, eP), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oU = function(aQz, aR0) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aR0), bB.a7(10, aQz), ay.x.send(ay.x.a0B, bB.aB)
	}, this.oX = function(a5N) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5N), ay.x.send(ay.x.a0B, bB.aB)
	}, this.ob = function(aR1, target) {
		var aA, ed = aR1.length;
		for (bB.a6(14 + 9 * ed), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < ed; aA++) bB.a7(9, aR1[aA]);
		ay.x.send(ay.x.a0B, bB.aB)
	}
}

function aPe() {
	this.aR2 = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAe.aR3(), ay.x.send(0, bB.aB)
	}, this.aQw = function(a02) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rv.vF(bh.eA.data[105].value, 5), bE.rv.vF(bh.eA.data[106].value, 8), bB.a7(30, bh.eA.data[109].value), ay.x.send(a02, bB.aB)
	}, this.aNd = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rv.vE(bh.eA.data[110].value), ay.x.send(0, bB.aB)
	}, this.aNZ = function(a2n) {
		var ed = a2n.pK.length;
		bB.a6(21 + 16 * ed), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2n.ru), bB.a7(8, ed), bD.uz.vE(a2n.pK), ay.x.send(0, bB.aB)
	}, this.aLs = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.ru), bE.rv.vF(data.rq, 5), ay.x.send(0, bB.aB)
	}, this.aLd = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.ru), bE.rv.vF(data.rq, 5), bB.aQk(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPf() {
	this.oc = function() {
		for (var ed = aC.js, yi = bP.result.yi, ka = yi.length, zT = (bB.a6(17 + 16 * ed + 33 * ka), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, ka), bB.a7(1, +(2 === aC.yq)), bB.a7(1, aC.zA % 2), af.zT), aA = 0; aA < ed; aA++) bB.a7(16, zT[aA]);
		for (var gQ = af.gQ, aA = 0; aA < ka; aA++) {
			var gA = yi[aA];
			bB.a7(9, gA), bB.a7(24, gQ[gA])
		}
		ay.x.send(ay.x.a0B, bB.aB)
	}
}

function aPg() {
	this.aNS = function(sB, sC, sD) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, sB), bB.a7(1, +(sC < 0)), bB.a7(1, +(sD < 0)), bB.a7(30, Math.abs(sC)), bB.a7(30, Math.abs(sD)), ay.x.send(0, bB.aB)
	}, this.aNT = function(sB, aNU, aNV) {
		bB.a6(18 + 16 * aNU.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, sB), ay.aAe.aR5(aNU), bB.a7(30, aNV), ay.x.send(0, bB.aB)
	}, this.aNY = function(sB, aNU, aNV) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, sB), bE.rv.vF(aNU, 5), bB.a7(30, aNV), ay.x.send(0, bB.aB)
	}, this.aNW = function(aMZ, zb) {
		for (var ed = zb.length, hV = 0, aA = 0; aA < ed; aA++) hV += zb[aA].length;
		for (bB.a6(21 + 3 * ed + 16 * hV), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aMZ), bB.a7(4, ed), bB.a7(7, hV), aA = 0; aA < ed; aA++) bB.a7(3, zb[aA].length), bD.uz.vE(zb[aA]);
		ay.x.send(0, bB.aB)
	}, this.aNX = function(aMZ, sC, sD) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aMZ), bB.a7(1, +(sC < 0)), bB.a7(1, +(sD < 0)), bB.a7(20, Math.abs(sC)), bB.a7(20, Math.abs(sD)), ay.x.send(0, bB.aB)
	}
}

function aPc() {
	this.aED = function(a02) {
		var username = bh.eA.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, l.dm), bB.a7(2, bh.eA.data[158].value), ay.aAe.aR5(username), b8.color.a1r(bh.x.ue())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAi());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a0A = a02, ay.x.send(a02, bB.aB)
	}, this.aCo = function(aR8, a2n) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aR8), 2 === aR8 ? bC.a7(2, a2n) : 3 === aR8 ? bD.v1.yM(a2n, 7, bC) : 5 === aR8 && (bC.a7(3, a2n.id), bC.a7(3, a2n.value), bC.a7(30, a2n.rq)), ay.x.send(ay.x.a0A, bC.aR9())
	}
}

function aPd() {
	this.aQ4 = function(a02) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dg), bB.a7(4, z.id), bB.a7(7, z.dk), bB.a7(1, +l.a8), bB.a7(1, +l.a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(a02, bB.aB)
	}, this.aQv = function(a02, qA, aQg) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQg), bB.a7(30, qA[0]), bB.a7(30, qA[1]), ay.x.send(a02, bB.aB)
	}, this.aNQ = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAf = function(id, pK) {
		var ed = Math.min(pK.length, 63);
		bB.a6(19 + 16 * ed), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, ed), bD.uz.vE(pK), ay.x.send(0, bB.aB)
	}, this.aRB = function(aQa, pV) {
		bB.a6(7 + 26 * pV.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pV.length; aA++) bB.a7(16, pV[aA][0]), bB.a7(10, pV[aA][1]);
		ay.x.send(aQa, bB.aB)
	}, this.aQB = function(aRC, aRD) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aRC), bB.a7(12, aRD), ay.x.send(ay.x.a0B, bB.aB)
	}, this.aR5 = function(username) {
		bB.a7(5, username.length), bD.uz.vE(username)
	}
}

function aQ2() {
	var a02, aKk, aRE, aRF = ["wss://", "/s50/", "/s51/", "/s52/"],
		aRG = 0;

	function aQ3() {
		ay.x.aQ3(a02, aKk)
	}

	function aRL(e) {
		ay.a5N.aQD(a02, new Uint8Array(e.data))
	}

	function aRM() {}

	function aQA(e) {
		ay.x.aQA(a02, e)
	}
	this.dU = function(dy, aRH) {
		a02 = dy, aKk = aRH, dy = aRF[0] + ay.x.aPr[a02] + aRF[1 + l.dh], (aRE = new WebSocket(__fx.customLobby.isActive() && 1 === a02 ? __fx.customLobby.getSocketURL() : dy)).binaryType = "arraybuffer", aRE.onopen = aQ3, aRE.onmessage = aRL,
			aRE.onclose = aQA, aRE.onerror = aRM
	}, this.aRJ = function() {
		return aRE.readyState === aRE.CONNECTING
	}, this.aLa = function() {
		return aRE.readyState === aRE.OPEN
	}, this.aPx = function() {
		return aRG
	}, this.aQ5 = function() {
		aRG = 1
	}, this.aPz = function() {
		return this.aRJ() || this.aLa()
	}, this.aQ0 = function(aRH) {
		aKk = aRH
	}, this.aQx = function() {
		return aKk
	}, this.send = function(aB) {
		this.aLa() && aRE.send(aB)
	}, this.close = function(aQ7) {
		this.aPz() && (aRE.close(aQ7), this.qu())
	}, this.qu = function() {
		aRE.onopen = null, aRE.onmessage = null, aRE.onclose = null, aRE.onerror = null
	}
}

function dE() {
	var aRN = !1,
		a5i = 0,
		i = 0,
		rz = 0,
		gap = 0,
		canvas = null,
		xA = null,
		a1R = null;

	function aRP() {
		for (var aRV, aRT = 0, ed = 0, ey = Math.floor(i / 2), dx = Math.floor(rz / 2), aRU = 1.5 * Math.PI, aA = aC.wE; 0 <= aA; aA--) ed += a1R[aA], 0 === a1R[aA] && aRT++;
		if (aRN = !1, xA.clearRect(0, 0, i, i), xA.fillStyle = b9.mg, xA.fillRect(0, 0, i, i), xA.fillStyle = b9.mj, xA.fillRect(0, 0, i, gap), xA.fillRect(0, 0, gap, i), xA.fillRect(i - gap, 0, gap, i), xA.fillRect(0, i - gap, i, gap), 0 < ed)
			if (aRT === aC.wE) {
				for (aA = aC.wE; 0 <= aA; aA--)
					if (0 < a1R[aA]) {
						! function(aA, ey, dx) {
							xA.fillStyle = be.aRc[be.kE[aA]], xA.beginPath(), xA.arc(ey, ey, dx, 0, 2 * Math.PI), xA.fill()
						}(aA, ey, dx);
						break
					}!
				function(ey) {
					var fontSize = ey / 3;
					xA.font = b8.pd.rS(1, fontSize), xA.fillStyle = b9.mj, xA.fillText("100%", ey, ey + .1 * fontSize)
				}(ey)
			} else {
				for (aA = 0; aA <= aC.wE; aA++) 0 < a1R[aA] && (! function(aA, ey, dx, aRU, aRV) {
					xA.fillStyle = be.aRc[be.kE[aA]], xA.beginPath(), xA.arc(ey, ey, dx, aRU, aRV), xA.lineTo(ey, ey), xA.fill()
				}(aA, ey, dx, aRU, aRV = aRU + 2 * Math.PI * a1R[aA] / ed), function(ey, dx, aRU, aRV) {
					var f5 = (aRV - aRU) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dx * Math.min(f5, .37);
					fontSize < 8 || (aRU = (aRU + aRV) / 2, aRV = (__fx.settings.detailedTeamPercentage ? (100 * f5).toFixed(2) : Math.floor(100 * f5 + .5)) + "%", dx *= .525 - Math.max(.6 * (f5 - .7), 0), xA.font = b8.pd.rS(1, fontSize), xA
						.fillStyle = b9.mj, xA.fillText(aRV, ey + Math.cos(aRU) * dx, ey + Math.cos(aRU + 1.5 * Math.PI) * dx))
				}(ey, dx, aRU, aRV), 0 !== aA && aRa(ey, dx, aRU), aRU = aRV);
				aRa(ey, dx, 1.5 * Math.PI)
			}!
		function(ey, dx) {
			xA.beginPath(), xA.arc(ey, ey, dx, 0, 2 * Math.PI), xA.stroke()
		}(ey, dx)
	}

	function aRa(ey, dx, aRd) {
		xA.beginPath(), xA.moveTo(ey, ey), xA.lineTo(ey + Math.cos(aRd) * dx, ey + Math.cos(aRd + 1.5 * Math.PI) * dx), xA.stroke()
	}
	this.dU = function() {
		if (aC.hS) {
			a5i = 0, a1R = new Uint32Array(aC.wE + 1);
			for (var aA = aC.wE; 0 <= aA; aA--) a1R[aA] = 0;
			for (aA = ak.jt - 1; 0 <= aA; aA--) a1R[be.eb[ak.ju[aA]]] += 1;
			this.resize()
		} else a1R = xA = canvas = null
	}, this.a6W = function() {
		return i
	}, this.resize = function() {
		aC.hS && (i = Math.floor(z.a0.r1() && !aC.mC ? .18 * h.min : .13 * h.pf), i = (i *= 1 + (.5 + .2 * z.a0.r1()) * aC.mC) + i % 2, rz = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, xA = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), xA.lineWidth = gap, xA.strokeStyle = b9.mj, b8.pd.textAlign(xA, 1), b8.pd.textBaseline(xA, 1), aRP())
	}, this.a2j = function() {
		var di, l3 = this.l4();
		return be.kE[l3] || (l3 = function() {
			for (var l3 = -1, aA = aC.wE; 1 <= aA; aA--)(-1 === l3 || a1R[aA] > a1R[l3]) && (l3 = aA);
			return l3
		}(), di = af.gQ[l7[0]], -1 !== l3 && a1R[l3] > di) ? a1R[l3] : di
	}, this.zp = function() {
		return a5i = 31, this.im(), this.l4()
	}, this.l4 = function() {
		for (var l3 = 0, aA = aC.wE; 0 < aA; aA--) a1R[aA] > a1R[l3] && (l3 = aA);
		return l3
	}, this.l5 = function(aRR) {
		for (var g5 = 0, ju = ak.ju, eb = be.eb, ed = ak.jt, fG = bM.fG, aA = 0; aA < ed; aA++) {
			var gA = ju[aA];
			eb[gA] === aRR && (fG[g5++] = gA)
		}
		bM.f8[0] = g5
	}, this.a2K = function() {
		for (var g5 = 0, aA = aC.wE; 0 <= aA; aA--) g5 += 0 < a1R[aA];
		return g5
	}, this.im = function() {
		if (aC.hS && 32 <= ++a5i) {
			a5i = 0;
			for (var aA = aC.wE; 0 <= aA; aA--) a1R[aA] = 0;
			for (aA = ak.jt - 1; 0 <= aA; aA--) a1R[be.eb[ak.ju[aA]]] += af.gQ[ak.ju[aA]];
			aRN = !0
		}
	}, this.lV = function() {
		aC.hS && aRN && aRP()
	}, this.tk = function() {
		aC.hS && (aC.mC ? tl.drawImage(canvas, ba.gap, ba.gap) : tl.drawImage(canvas, ba.gap, a6X + 2 * ba.gap))
	}
}

function cx() {
	function aRf(key) {
		var aOz;
		return "undefined" == typeof URLSearchParams || (aOz = window.location.search, "string" != typeof(aOz = new URLSearchParams(aOz).get(key))) || aOz.length < 1 ? null : aOz
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRf("account");
				if (!value && !(value = aRf("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rs, new rt(1e3, {
					ru: 0,
					rq: value,
					rr: 0
				})), 1
			}()) {
			var value = aRf("replay");
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
				gA = zz.searchParams;
			gA.set(key, value), zz.search = gA.toString(), history.replaceState(null, "", zz.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRh, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dj(32768 * aA, 100);
		this.a3U(0)
	}, this.value = function(gA) {
		return g[gA]
	}, this.aJ5 = function() {
		return bJ.dj(aRh - 1, 2)
	}, this.a3U = function(aIk) {
		aRh = 2 * aIk % 32768 + 1
	}, this.random = function() {
		return aRh = 167 * aRh % 32768
	}, this.jA = function(ld) {
		return bJ.dj(ld * this.random(), 32768)
	}, this.jk = function(gA) {
		return 0 !== gA && this.random() < this.value(gA)
	}, this.iW = function(ew, ex) {
		return ew + this.jA(ex - ew)
	}
}

function ct() {
	this.ot = new aRi, this.a3f = new aRj, this.aGQ = new aRk, this.dU = function() {
		aC.gm || this.ot.dU()
	}, this.im = function() {
		aC.gm || (this.ot.im(), 3 !== s.rs) || bd.jp() % 15 != 5 && 2 !== aC.yt || s.aDO().aP0()
	}, this.aP3 = function() {
		0 === aC.yt && aZ.aEN(), aC.a3P.a3n(), aC.data.canvas = null, ay.x.close(ay.x.a0B, 3257), ay.x.a0B = 0, aC.data.isReplay = 1, aC.a3S()
	}, this.aP2 = function(pK) {
		var aA = pK.indexOf("=");
		return 0 <= aA ? pK.substring(aA + 1) : pK
	}, this.aP1 = function(pK) {
		return "https://territorial.io/?replay=" + pK
	}
}

function aRi() {
	this.aRm = null, this.aRn = null, this.aRo = null, this.aRp = null, this.aRq = null, this.aRr = null, this.a3e = "";
	var aRs = 0;
	this.dU = function() {
		this.aRm = [], this.aRn = [], this.aRo = [], this.aRp = [], this.aRq = [0], this.aRr = [0], aRs = 0, this.a3e = ""
	}, this.ou = function(id, fK, fM, fO) {
		aC.gm || 2 === aC.yt || (0 === this.aRq[aRs] && (this.aRr[aRs] ? (this.aRq.push(1), this.aRr.push(0), aRs++) : this.aRq[aRs] = 1), this.aRm.push(id), this.aRn.push(fK), this.aRo.push(void 0 === fM ? 0 : fM), this.aRp.push(void 0 === fO ?
			0 : fO), this.aRr[aRs]++)
	}, this.im = function() {
		0 === this.aRq[aRs] ? this.aRr[aRs]++ : (this.aRq.push(0), this.aRr.push(0), aRs++)
	}
}

function aRk() {
	var aRt = 0;

	function aRx(pK, id) {
		aRt || (id ? 1 === id ? aM.a4p = L(430) + ": " + pK : s.t(4, 3, new u(L(431), pK, 1)) : s.t(4, 3, new u("⚠️ " + L(429), pK, 1)))
	}
	this.vJ = function(pK, aRu) {
		var pV;
		return aRt = aRu, bE.rv.vB(bE.rv.v9(bE.rv.v7(pK))), aM.a4p = "", !(! function() {
			if (bF.size < 10) aRx("File Too Small");
			else {
				var aRz = bF.oe(12),
					aRD = (aRz !== l.rVersion && aRx("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aRz) + ("   Compatible at territorial.io/" + aRz), 1), bF.oe(12)),
					aS0 = bF.oe(31);
				if (aS0 !== bF.size) aRx("Size Error: " + aS0 + " " + bF.size);
				else if (function(j, aRz) {
						for (var gA = bF.aB, ed = bF.size, aRD = aRz, aA = 3; aA < ed; aA++) aRD = aRD + gA[aA] & 4095;
						return aRD === j || (aRx("Hash Error: " + aRD + " " + j + " " + ed), !1)
					}(aRD, aRz)) return 1
			}
			return
		}() || (aRu = bF, (pV = aC.data = new a3O).mapType = aRu.oe(2), pV.mapProceduralIndex = aRu.oe(8), pV.mapRealisticIndex = aRu.oe(8), pV.mapSeed = aRu.oe(14), pV.mapName = aRu.aS2(5), 2 === pV.mapType && aRu.aS3(), pV
			.passableWater = aRu.oe(1), pV.passableMountains = aRu.oe(1), pV.playerCount = aRu.oe(10), pV.humanCount = aRu.oe(10), pV.selectedPlayer = aRu.oe(9), pV.gameMode = aRu.oe(1), pV.playerMode = aRu.oe(2), pV.battleRoyaleMode =
			aRu.oe(2), pV.numberTeams = aRu.oe(4), pV.isZombieMode = aRu.oe(1), pV.isContest = aRu.oe(1), pV.isReplay = aRu.oe(1), pV.elo = aRu.aS4(2, 14, 2), pV.colorsType = aRu.oe(1), pV.colorsPersonalized = aRu.oe(1), pV.colorsData =
			aRu.aS4(10, 18, 512), pV.selectableColor = aRu.oe(1), pV.teamPlayerCount = aRu.aS4(4, 10, 9), pV.neutralBots = aRu.oe(1), pV.botDifficultyType = aRu.oe(2), pV.botDifficultyValue = aRu.oe(4), pV.botDifficultyTeam = aRu.aS4(4,
				4, 9), pV.botDifficultyData = aRu.aS4(10, 4, 512), pV.spawningType = aRu.oe(2), pV.spawningSeed = aRu.oe(14), pV.spawningData = aRu.aS4(11, 12, 1024), pV.selectableSpawn = aRu.oe(1), pV.playerNamesType = aRu.oe(2), pV
			.playerNamesData = aRu.aS5(10, 5, 512), pV.selectableName = aRu.oe(1), pV.aIncomeType = aRu.oe(2), pV.aIncomeValue = aRu.oe(8), pV.aIncomeData = aRu.aS4(10, 8, 512), pV.tIncomeType = aRu.oe(2), pV.tIncomeValue = aRu.oe(8), pV
			.tIncomeData = aRu.aS4(10, 8, 512), pV.iIncomeType = aRu.oe(2), pV.iIncomeValue = aRu.oe(8), pV.iIncomeData = aRu.aS4(10, 8, 512), pV.sResourcesType = aRu.oe(2), pV.sResourcesValue = aRu.oe(11), pV.sResourcesData = aRu.aS4(10,
				11, 512), ! function() {
				var hx = bF,
					vK = hx.oe(5),
					aS6 = hx.oe(30),
					aS7 = hx.oe(30);
				if (aS6 + aS7 > 8 * hx.size) return void aRx("Corrupted File");
				return function(ed) {
						var aSA = new Uint8Array(ed),
							aSB = new Uint16Array(ed),
							aSC = new Uint32Array(ed),
							aSD = new Uint32Array(ed);
						b7.ot.aRm = aSA, b7.ot.aRn = aSB, b7.ot.aRo = aSC, b7.ot.aRp = aSD;
						for (var aA = 0; aA < ed; aA++) {
							var id = bF.oe(4);
							aSA[aA] = id, aSB[aA] = bF.oe(9), 0 === id ? aSC[aA] = bF.oe(22) : 1 === id ? (aSC[aA] = bF.oe(10), aSD[aA] = bF.oe(10)) : 2 === id ? (aSC[aA] = bF.oe(10), aSD[aA] = bF.oe(9)) : 3 === id || 4 === id ? (aSC[
								aA] = bF.oe(10), aSD[aA] = bF.oe(22)) : 5 === id || 6 === id ? aSC[aA] = bF.oe(10) : 7 === id ? aSC[aA] = bF.oe(1) : 10 === id && (aSC[aA] = bF.oe(20), aSD[aA] = bF.oe(22))
						}
					}(aS6),
					function(ed, vK) {
						var aRq = new Uint8Array(ed),
							aRr = new Array(ed);
						aRr.fill(0), b7.ot.aRq = aRq, b7.ot.aRr = aRr;
						for (var aA = 0; aA < ed; aA++) aRq[aA] = bF.oe(1), aRr[aA] = bF.oe(vK)
					}(aS7, vK), 1
			}()) || (bF.dy < 8 * bF.size - 13 || bF.dy > 8 * bF.size ? (aRx("Out Of Bounds Error: " + bF.dy + " " + 8 * bF.size), 1) : (b7.ot.a3e = pK, 2 === aC.data.mapType && (aRx("Load base64 image...", 2), 1))))
	}, this.aGR = function(aG1, aRy) {
		var a1m = document.createElement("canvas"),
			ha = a1m.getContext("2d");
		if (a1m.width = aG1.width, a1m.height = aG1.height, ha.drawImage(aG1, 0, 0), aRt || aRy) return aC.yt ? void 0 : (aC.data.canvas = a1m, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aP3()
	}
}

function aRj() {
	this.yM = function() {
		var vK = function() {
				for (var aRr = b7.ot.aRr, ed = aRr.length, max = 0, aA = 0; aA < ed; aA++) max = Math.max(max, aRr[aA]);
				return vR(Math.max(max, 1))
			}(),
			i = (pV = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dy += 43, i.a7(2, pV.mapType), i.a7(8, pV.mapProceduralIndex), i.a7(8, pV.mapRealisticIndex), i.a7(14, pV.mapSeed), i.aSK(pV.mapName, 5), 2 === pV.mapType && i.aSL(pV.canvas),
				i.a7(1, pV.passableWater), i.a7(1, pV.passableMountains), i.a7(10, pV.playerCount), i.a7(10, pV.humanCount), i.a7(9, pV.selectedPlayer), i.a7(1, pV.gameMode), i.a7(2, pV.playerMode), i.a7(2, pV.battleRoyaleMode), i.a7(4, pV
					.numberTeams), i.a7(1, pV.isZombieMode), i.a7(1, pV.isContest), i.a7(1, pV.isReplay), i.db(pV.elo, 2, 14), i.a7(1, pV.colorsType), i.a7(1, pV.colorsPersonalized), i.db(pV.colorsData, 10, 18), i.a7(1, pV.selectableColor), i.db(
					pV.teamPlayerCount, 4, 10), i.a7(1, pV.neutralBots), i.a7(2, pV.botDifficultyType), i.a7(4, pV.botDifficultyValue), i.db(pV.botDifficultyTeam, 4, 4), i.db(pV.botDifficultyData, 10, 4), i.a7(2, pV.spawningType), i.a7(14, pV
					.spawningSeed), i.db(pV.spawningData, 11, 12), i.a7(1, pV.selectableSpawn), i.a7(2, pV.playerNamesType), i.aSM(pV.playerNamesData, 10, 5), i.a7(1, pV.selectableName), i.a7(2, pV.aIncomeType), i.a7(8, pV.aIncomeValue), i.db(pV
					.aIncomeData, 10, 8), i.a7(2, pV.tIncomeType), i.a7(8, pV.tIncomeValue), i.db(pV.tIncomeData, 10, 8), i.a7(2, pV.iIncomeType), i.a7(8, pV.iIncomeValue), i.db(pV.iIncomeData, 10, 8), i.a7(2, pV.sResourcesType), i.a7(11, pV
					.sResourcesValue), i.db(pV.sResourcesData, 10, 11), ! function(vK) {
					var i = bC,
						aRm = b7.ot.aRm,
						fK = b7.ot.aRn,
						fM = b7.ot.aRo,
						fO = b7.ot.aRp,
						ed = aRm.length;
					i.a7(5, vK), i.a7(30, ed), i.a7(30, b7.ot.aRr.length);
					for (var aA = 0; aA < ed; aA++) {
						var ey = aRm[aA];
						i.a7(4, ey), i.a7(9, fK[aA]), 0 === ey ? i.a7(22, fM[aA]) : 1 === ey ? (i.a7(10, fM[aA]), i.a7(10, fO[aA])) : 2 === ey ? (i.a7(10, fM[aA]), i.a7(9, fO[aA])) : 3 === ey || 4 === ey ? (i.a7(10, fM[aA]), i.a7(22, fO[aA])) :
							5 === ey || 6 === ey ? i.a7(10, fM[aA]) : 7 === ey ? i.a7(1, fM[aA]) : 10 === ey && (i.a7(20, fM[aA]), i.a7(22, fO[aA]))
					}
				}(vK), ! function(vK) {
					for (var i = bC, aRq = b7.ot.aRq, aRr = b7.ot.aRr, ed = aRq.length, aA = 0; aA < ed; aA++) i.a7(1, aRq[aA]), i.a7(vK, aRr[aA])
				}(vK), bC.dy),
			pV = bJ.dj(i - 1, 6) + 1,
			vK = (bB.aQl(6 * pV) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dy = 24, i.a7(31, i.g.length), i.dy = 12, i.a7(12, function() {
					for (var g = bC.g, ed = g.length, aRD = l.rVersion, aA = 3; aA < ed; aA++) aRD = aRD + g[aA] & 4095;
					return aRD
				}())
			}(), bF.dU(bC.g), bD.rv.rw(bD.rv.rx(pV)));
		return bF.tE(), bC.dU(), vK
	}
}

function cj() {
	var ey, bp = !1,
		aSO = !1,
		aSP = -1e4,
		aSQ = -1,
		aSR = 0;

	function resize(aSV) {
		ey = 0, aa.sK() && (aST(aSV) || bp) && (bp = !1, ba.resize(), bU.aAF.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.yt ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7b()) : (aZ.aEP(), aZ.aEQ()), bd.dc = !0)
	}

	function aSS(f5) {
		return f5 && 128 < f5 ? Math.floor(f5) : 128
	}

	function aST(aSV) {
		var i, j, aSX, rz, a70;
		if (!(0 < h.ra)) return rz = aSS(document.documentElement.clientWidth), a70 = aSS(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rz, j = a70, aSX = 0 !== z.id || i < j ? 700 :
			1200, aSX = Math.min(aSX / ((i + j) / 2), 1), aSX = 0 === bh.eA.data[1].value ? 2 * aSX / 3 : Math.min(aSX + (bh.eA.data[1].value - 1) * (1 - aSX) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSX, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSV && !aSO ? (aSO = !0, document.body.removeChild(a0Q)) : aSO && (aSO = !1, document.body.appendChild(a0Q)), i = Math.floor(.5 + rz * h.k), j = Math.floor(.5 + a70 * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9r(i, j), h.max = a54(i, j), h.pf = bJ.dj(i + j, 2), h.th = i / j, a0Q.width = i, a0Q.height = j, a0Q.style.width = rz + "px", a0Q.style.height = a70 + "px", aSQ = bd.eC + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pf = 0, this.th = 1, this.k = 1, this.ra = 0, this.dV = function() {
		this.i = aSS(document.documentElement.clientWidth) + 2, this.j = aSS(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		ey = 1, a0Q = document.getElementById("canvasA"), (tl = a0Q.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aST(0)
	}, this.im = function() {
		50 <= ++ey && resize(0), -1 === aSQ || bd.eC < aSQ || (aSQ = -1, 2e3 * ++aSR >= bd.eC + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hm) {
		bp = !0, resize(hm)
	}, this.a16 = function() {
		aSP + 1e3 > bd.eC || (aSP = bd.eC, resize(0))
	}
}

function dB() {
	this.aQu = new aSZ, this.zl = new aSa
}

function aSa() {
	this.zm = function() {
		for (var gA, ed = ak.jt, yh = ak.ju, zT = af.zT, a6p = this.aFk(), aA = 0; aA < ed; aA++) gA = yh[aA], b8.fy.jG(gA) || (zT[gA] = a6p);
		var oz = af.oz,
			iv = af.iv,
			iw = af.iw,
			zR = af.zR,
			ed = aC.js;
		for (aA = 0; aA < ed; aA++)(0 === zR[aA] || iw[aA] < 1 || 2 * oz[aA] > 3 * (iv[aA] + iw[aA])) && (zT[aA] = 0);
		var zj = 0;
		for (aA = 0; aA < ed; aA++) zj += 0 < zT[aA];
		return zj
	}, this.aFk = function() {
		return Math.min(65535, bd.jp())
	}
}

function aSZ() {
	function aSe(g, f5, hQ) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f5 >> (aA + hQ) % 30 & 1)) % 256
	}
	this.im = function(aSb, aSc) {
		var g = new Uint8Array(256);
		return function(g, aSb, aSc) {
				var aA, aSg = 3 + (4 + aSb) % 32768,
					aSh = 12 + aSc % 32768,
					aSi = 17 + ((aSb & aSc) + (aSb | aSc) + aSb) % 32768;
				for (aA = 0; aA < 256; aA++) aSg = 1 + aSg * aSh % aSi, g[aA] = aSg % 256
			}(g, aSb, aSc), aSe(g, aSb, 2), aSe(g, aSc, 7),
			function(g) {
				var aA, f5, dy = 0;
				for (aA = 0; aA < 3e4; aA++) f5 = g[dy], g[dy] = (f5 + aA + g[(dy + aA) % 256]) % 256, dy = (f5 + aA + dy + (f5 & dy)) % 256
			}(g),
			function(g) {
				var aA, a70 = 1,
					sh = 1;
				for (aA = 0; aA < 256; aA += 2) a70 = (1 + a70) * (g[aA] + 1) % 1073741824, sh = (1 + sh) * (g[aA + 1] + 1) % 1073741824;
				return [a70, sh]
			}(g)
	}
}

function cg() {
	var aSj, aSk, h5, aSl;
	this.dU = function() {
		var aA, ek, em, aR6, aSm, i, j, xA, hX, vb, f5, gA, et, ew, a4E;
		if (function() {
				if (h5 = !0, aSl = "rgb(" + bQ.vZ[0] + "," + bQ.vZ[1] + "," + bQ.vZ[2] + ")", bQ.aIs(bQ.eJ)) return 1;
				return h5 = !1, 0
			}()) aSk = null;
		else {
			for (aSj = bJ.dj(96, 4), aSm = 1 === bQ.eJ ? (aR6 = 0, 160) : (aR6 = 128, 32), aSl = "rgb(" + aR6 + "," + aR6 + "," + aR6 + ")", aSk = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSk[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.eo : aSj, j = aA % 2 == 0 ? aSj : bQ.ep + 2 * aSj, aSk[aA].width = i, aSk[aA].height = j, vb = (hX = (xA = aSk[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (em = aSj - 1; 0 <= em; em--)
						for (f5 = aSm + Math.floor((em + 1) * (aR6 - aSm) / (aSj + 1)), ek = i - 1; 0 <= ek; ek--) vb[gA = 4 * ((0 === aA ? aSj - em - 1 : em) * i + ek)] = f5, vb[gA + 1] = f5, vb[gA + 2] = f5, vb[gA + 3] = 255;
				else {
					for (ek = aSj - 1; 0 <= ek; ek--)
						for (f5 = aSm + Math.floor((ek + 1) * (aR6 - aSm) / (aSj + 1)), em = j - 1 - aSj; aSj <= em; em--) vb[gA = 4 * (em * i + (3 === aA ? aSj - ek - 1 : ek))] = f5, vb[gA + 1] = f5, vb[gA + 2] = f5, vb[gA + 3] = 255;
					for (ew = 1; 0 <= ew; ew--)
						for (ek = aSj - 1; 0 <= ek; ek--)
							for (em = aSj - 1; 0 <= em; em--) et = (Math.pow(ek * ek + em * em, .5) + 1) / (aSj + 1), f5 = aSm + Math.floor((1 < et ? 1 : et) * (aR6 - aSm)), vb[gA = 4 * ((0 === ew ? aSj - em - 1 : em + ew * (j - aSj)) * i + (
								1 === aA ? ek : aSj - ek - 1))] = f5, vb[gA + 1] = f5, vb[gA + 2] = f5, vb[gA + 3] = 255
				}
				xA.putImageData(hX, 0, 0)
			}
			a4E = aSm, bQ.vU.fillStyle = "rgb(" + a4E + "," + a4E + "," + a4E + ")", bQ.vU.fillRect(0, 0, bQ.eo, 1), bQ.vU.fillRect(0, bQ.ep - 1, bQ.eo, 1), bQ.vU.fillRect(0, 0, 1, bQ.ep), bQ.vU.fillRect(bQ.eo - 1, 0, 1, bQ.ep)
		}
	}, this.x4 = function() {
		var ew = h5 ? 0 : -aSj;
		aKT(ew, ew, bQ.eo - 2 * ew, bQ.ep - 2 * ew, bY.aSp, bY.aSq, bY.aSr, bY.aSs) || (tl.fillStyle = aSl, tl.fillRect(0, 0, h.i, h.j))
	}, this.tk = function() {
		h5 || (aKS(0, -aSj, bQ.eo, aSj, bY.aSp, bY.aSq, bY.aSr, bY.aSs) && tl.drawImage(aSk[0], bY.aSt, bY.aSu - aSj), aKS(bQ.eo, -aSj, aSj, bQ.ep + 2 * aSj, bY.aSp, bY.aSq, bY.aSr, bY.aSs) && tl.drawImage(aSk[1], bY.aSt + bQ.eo, bY.aSu - aSj),
			aKS(0, bQ.ep, bQ.eo, aSj, bY.aSp, bY.aSq, bY.aSr, bY.aSs) && tl.drawImage(aSk[2], bY.aSt, bY.aSu + bQ.ep), aKS(-aSj, -aSj, aSj, bQ.ep + 2 * aSj, bY.aSp, bY.aSq, bY.aSr, bY.aSs) && tl.drawImage(aSk[3], bY.aSt - aSj, bY.aSu - aSj))
	}
}

function d0() {
	this.h6 = new aSv, this.aFi = new aSw, this.x7 = new aSx, this.x = new aSy, this.iM = new aSz, this.a4E = new aT0, this.aT1 = new aT2, this.jg = new aT3, this.kU = new aT4, this.aT5 = new aT6, this.dU = function() {
		this.x7.dU(), this.x.dU(), this.iM.dU(), this.a4E.dU(), this.aT5.dU()
	}, this.tk = function() {
		this.aT5.tk(), this.x7.tk()
	}
}

function aT3() {
	this.im = function(player) {
		var oq;
		return !!aC.data.passableWater && 0 !== af.gJ[player].length && bL.x.or !== bL.x.k6 && !((oq = bL.x.oq[player]) >= Math.max(3 * am.performance.ku, aD.k6[aD.hH[player]]) || oq === bL.x.p3 || !b8.fy.ox(player, aD.k4[aD.hH[player]], 32,
			0) || !am.iZ.im(player) && !am.ib.im(player) || ! function(a2N) {
				var aT9 = bM.fE[1] + bK.hc[bM.fE[2] - 1] << 2;
				if (ab.eU(aT9)) return 1;
				return aT9 = ab.eV(aT9), a2N !== aT9 && !!eW(a2N, aT9)
			}(player)) && function(player) {
			return b8.fy.p0(player), bL.x.p6(player), !0
		}(player)
	}
}

function aSv() {
	function aTH(aA, kv, kw) {
		var aTJ, aTI;
		if (!(aA < 0)) return aTI = bL.x.m8[aA], aTJ = bK.i0(aTI), aTI = bK.i3(aTI), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5M[aA])), aA = Math.max(aA, bK.iG(b8.pd.sH(.02, 1.7))), bJ.aKa(bK.hz(kv), bK.i2(kw), aTJ, aTI, aA)
	}

	function aTB(aTA) {
		var aTM = 4 + .03 * (1 + 1.5 * z.a0.r1()) * h.pf / iE;
		return bK.i4(aTA, bM.fE[1]) < aTM
	}
	this.h7 = function(player, aTA) {
		return !!(aC.data.passableWater && bK.iH(aTA) && bL.x.or !== bL.x.k6 && bL.x.oq[player] !== bL.x.p3 && 0 !== af.gJ[player].length && bL.kU.kV(player, aTA) && aTB(aTA))
	}, this.oB = function(player, m5, aTA) {
		return !!(bK.iH(aTA) && this.p7(player, m5) && bL.kU.p8(aTA) && aTB(aTA))
	}, this.p7 = function(player, id) {
		for (var aTC, sC = player << 3, sD = sC + bL.x.oq[player], aTD = bL.x.aTD, aTE = bL.x.aTE, aA = sC; aA < sD; aA++)
			if (id === aTE[aTC = aTD[aA]]) return bM.fE[3] = aTC, !0;
		return !1
	}, this.oA = function(eP) {
		var a4F = bL.a4E.a4F;
		return !!this.p7(aC.eN, a4F) && (b6.gz.oA(a4F, eP), !0)
	}, this.a4H = function(kv, kw) {
		var player = aC.eN,
			ed = bL.x.oq[player];
		if (0 === ed) return !1;
		for (var aTD = bL.x.aTD, m8 = bL.x.m8, sC = player << 3, aTF = 80, aMq = -1, aA = sC + ed - 1; sC <= aA; aA--) {
			var aTG = aTD[aA],
				et = bK.hu(kv, kw, m8[aTG]);
			et < aTF && (aTF = et, aMq = aTG)
		}
		return !!aTH(aMq, kv, kw) && (bL.a4E.a4F = bL.x.aTE[aMq], bj.p5.a4H(), !0)
	}, this.a4O = function(kv, kw) {
		var ed = bL.x.or;
		if (ed < 1) return -1;
		for (var m8 = bL.x.m8, aTF = 80, aMq = -1, aA = 0; aA < ed; aA++) {
			var et = bK.hu(kv, kw, m8[aA]);
			et < aTF && (aTF = et, aMq = aA)
		}
		return aTH(aMq, kv, kw) ? aMq : -1
	}, this.m7 = function(player, id) {
		for (var sC = player << 3, sD = sC + bL.x.oq[player], aTE = bL.x.aTE, aTD = bL.x.aTD, aA = sC; aA < sD; aA++) {
			var aTG = aTD[aA];
			if (aTE[aTG] === id) return aTG
		}
		return -1
	}, this.aFf = function(player) {
		for (var sC = player << 3, sD = sC + bL.x.oq[player], aTD = bL.x.aTD, a5M = bL.x.a5M, hH = 0, aA = sC; aA < sD; aA++) hH += a5M[aTD[aA]];
		return hH
	}, this.mD = function(player) {
		return 0 === bL.x.oq[player] ? -1 : bL.x.aTD[player << 3]
	}
}

function aSw() {
	this.aFj = function(player) {
		for (var aTD = bL.x.aTD, sC = player << 3, aA = sC + bL.x.oq[player] - 1; sC <= aA; aA--) this.aTN(aTD[aA])
	}, this.aTN = function(aTO) {
		var x = bL.x,
			aTP = x.or - 1,
			aTQ = x.a5L[aTO],
			aTR = x.aTS[aTO],
			aTT = x.m8[aTO];
		x.or = aTP, x.a5L[aTO] = x.a5L[aTP], x.aTU[aTO] = x.aTU[aTP], x.aTV[aTO] = x.aTV[aTP], x.m8[aTO] = x.m8[aTP], x.aTW[aTO] = x.aTW[aTP], x.a5M[aTO] = x.a5M[aTP], x.aTS[aTO] = x.aTS[aTP], x.aTE[aTO] = x.aTE[aTP], x.aTX[aTO] = x.aTX[aTP], x
			.aTY[aTO] = x.aTY[aTP], x.aTD[x.a5L[aTO]] = aTO,
			function(aRd) {
				var player = aRd >> 3,
					x = bL.x,
					ed = x.oq[player] - 1,
					aTb = (player << 3) + ed;
				x.oq[player] = ed, aTb !== aRd && (x.aTD[aRd] = x.aTD[aTb], x.a5L[x.aTD[aRd]] = aRd)
			}(aTQ), bL.iM.iM[bK.iL(x.m8[aTO])][x.aTS[aTO]] = aTO, aTP = bK.iL(aTT), aTQ = aTR, aTP = bL.iM.iM[aTP], x = aTP.pop(), aTQ !== aTP.length && (aTP[aTQ] = x, bL.x.aTS[x] = aTQ)
	}
}

function aSx() {
	var aTd, xW = 8,
		aTe = new Array(2);

	function aTf(dy) {
		var hU = xW + 4,
			a1m = b8.pd.vQ(hU, hU),
			ha = b8.pd.getContext(a1m, !0),
			hX = b8.pd.getImageData(ha, hU, hU),
			vb = hX.data;
		return aTg(vb, hU + 1, dy), aTg(vb, hU + 2, dy), aTg(vb, 2 * hU + 1, dy), aTg(vb, 2 * hU - 3, dy), aTg(vb, 2 * hU - 2, dy), aTg(vb, 3 * hU - 2, dy), aTg(vb, hU * (hU - 3) + 1, dy), aTg(vb, hU * (hU - 2) + 1, dy), aTg(vb, hU * (hU - 2) + 2,
			dy), aTg(vb, hU * (hU - 2) - 2, dy), aTg(vb, hU * (hU - 1) - 3, dy), aTg(vb, hU * (hU - 1) - 2, dy), ha.putImageData(hX, 0, 0), a1m
	}

	function aTg(vb, eP, dy) {
		eP *= 4;
		vb[eP] = 255, vb[1 + eP] = 255, vb[2 + eP] = dy, vb[3 + eP] = 255
	}

	function vQ(player) {
		var a1m = b8.pd.vQ(xW, xW);
		return function(ha, player) {
			var ek, em, hy, eP, aTi, aTj, hU = xW,
				hX = b8.pd.getImageData(ha, hU, hU),
				vb = hX.data,
				ka = (hU >> 1) - .5,
				aSl = ab.a5w(player),
				aTl = b8.pm.a1K(aSl, .5);
			b8.pm.a1M(aSl, aTl, 300) || b8.pm.a1O(aSl, 100);
			for (em = 0; em < hU; em++)
				for (ek = 0; ek < hU; ek++) aTj = (hU - 1.5) * (hU - 1.5) / 4, aTi = (hy = (hy = ek - ka) * hy + (hy = em - ka) * hy) <= (hU - 4.5) * (hU - 4.5) / 4 ? aTl : aSl, vb[eP = 4 * (em * hU + ek)] = aTi[0], vb[1 + eP] = aTi[1], vb[2 +
					eP] = aTi[2], vb[3 + eP] = aTj < hy ? 0 : 255;
			ha.putImageData(hX, 0, 0)
		}(b8.pd.getContext(a1m, !0), player), a1m
	}
	this.dU = function() {
		aTd = new Array(aC.ea), aTe[0] = aTf(255), aTe[1] = aTf(0)
	}, this.tk = function() {
		var aA, player, aTm, aKb, hH, hx, aTo, aTq, aTr, m8 = bL.x.m8,
			a5L = bL.x.a5L,
			a5M = bL.x.a5M,
			aTY = bL.x.aTY,
			aTs = aTd,
			aTt = aC.eN,
			aTu = -1,
			ed = bL.x.or,
			aTv = h.i,
			aTw = h.j,
			aTx = bQ.eo << 4,
			eS = iE,
			eH = eS / xW,
			m9 = iD / eS,
			mA = iF / eS,
			hy = (aTv + iD) / eS - m9,
			i1 = (aTw + iF) / eS - mA,
			ha = tl;
		for (bL.h6.p7(aC.eN, bL.a4E.a4F) && (aTu = bM.fE[3]), ha.imageSmoothingEnabled = eS < 9, b8.pd.textAlign(ha, 1), b8.pd.textBaseline(ha, 1), aA = 0; aA < ed; aA++) player = a5L[aA] >> 3, hH = a5M[aA], aTm = .9 + .1 * Math.log10(hH), aKb =
			(hx = m8[aA]) % aTx / 16 - aTm, hx = aTw * (Math.floor(hx / aTx) / 16 - aTm - mA) / i1, aTo = -2 * (aTr = eS * aTm) * (1 + (aTq = +(player === aTt)) / 8), aTq = aTq * aTr / 4, (aTr = aTv * (aKb - m9) / hy) < aTo || hx < aTo || aTv +
			aTq < aTr || aTw + aTq < hx || (aKb = 2 * aTm * eH, aTo = aTm * eS, void 0 === (aTq = aTs[player]) && (aTs[player] = aTq = vQ(player)), player === aTt && (ha.setTransform(aKb, 0, 0, aKb, aTr - 2 * aKb, hx - 2 * aKb), ha.drawImage(aTe[
				+(aA === aTu)], 0, 0)), ha.setTransform(aKb, 0, 0, aKb, aTr, hx), ha.drawImage(aTq, 0, 0), (aTm = Math.floor(function(hH) {
				if (hH < 1e3) return .42;
				if (hH < 1e4) return .34;
				if (hH < 1e6) return .26;
				if (hH < 1e8) return .19;
				return .15
			}(hH) * aTo)) < 6) || (ha.setTransform(1, 0, 0, 1, 0, 0), ha.fillStyle = aTY[aA] ? b9.nH : b9.mj, ha.font = b8.pd.rS(1, aTm), ha.fillText(b8.zY.yB(hH), aTr + aTo, hx + aTo + .1 * aTm));
		ha.imageSmoothingEnabled = !1, ha.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aT6() {
	var a1m;
	this.dU = function() {
		a1m = a1m || bN.x.aU0(20, be.aU1[7])
	}, this.tk = function() {
		var mT = iE;
		if (!(5 <= mT)) {
			var aTv = h.i,
				aTw = h.j,
				m9 = iD / mT,
				mA = iF / mT,
				mM = (aTv + iD) / mT,
				mN = (aTw + iF) / mT,
				gB = -20 * mT,
				aU2 = .5 * gB,
				aTx = bQ.eo << 4,
				ed = bL.x.or,
				m8 = bL.x.m8,
				aU3 = a1m,
				ha = tl;
			3 < mT && (ha.globalAlpha = .5 * (5 - mT));
			for (var aA = 0; aA < ed; aA++) {
				var hx = m8[aA],
					ek = aTv * (hx % aTx / 16 - m9) / (mM - m9) + aU2,
					hx = aTw * (Math.floor(hx / aTx) / 16 - mA) / (mN - mA) + aU2;
				aTv < ek || aTw < hx || ek < gB || hx < gB || (ha.setTransform(mT, 0, 0, mT, ek, hx), ha.drawImage(aU3, 0, 0))
			}
			ha.globalAlpha = 1, ha.setTransform(mT, 0, 0, mT, 0, 0)
		}
	}
}

function aT2() {
	this.im = function() {
		for (var aTI, aT1, aTX = bL.x.aTX, m8 = bL.x.m8, aTV = bL.x.aTV, aA = bL.x.or - 1; 0 <= aA; aA--) aTI = m8[aA], 0 !== (aT1 = aTX[aA]) && aTI === aTV[aA] && (! function(aA, aU7, hP) {
			var j3, player = bL.x.a5L[aA] >> 3,
				hP = aU7 + bK.hc[hP] << 2,
				aA = bL.x.a5M[aA];
			if (bb.aU8(player), ab.eU(hP)) j3 = aC.ea;
			else {
				if ((j3 = ab.eV(hP)) === player) return hP = b8.fy.g1(player, aA), bb.g2(player, aA - hP, 12);
				if (!eW(player, j3)) return b6.jv.oP(player, j3, aA)
			}
			ac.jE(player, j3) || ac.jW(player) ? (af.g4[player].push(aU7 << 2), ac.j0(player, aA, j3), aE.j1(player, !0)) : bb.g2(player, aA, 12)
		}(aA, bK.iK(aTI), aT1 - 1), bL.aFi.aTN(aA))
	}, this.aU9 = function(player, eP, hP, m5) {
		if (0 !== hP) {
			var aTt = aC.eN;
			if (b8.fy.gp(aTt) && eW(player, aTt) && player !== aTt && 0 !== af.gJ[aTt].length) {
				var aT9 = eP + bK.hc[--hP] << 2;
				if (ab.eU(aT9) || eW(player, ab.eV(aT9))) {
					for (var er = !1, aA = 0; aA < 4; aA++)
						if (aT9 = eP + bK.hc[aA] << 2, ab.eY(aT9) && !ab.eU(aT9) && ab.eV(aT9) === aTt) {
							er = !0;
							break
						} er && (aM.a4G(719, 0), aM.zH(180, L(432, [af.zU[player]]), 719, player, b9.nG, b9.mg, -1, !0, void 0, {
						ex: 1,
						m5: m5
					}))
				}
			}
		}
	}
}

function aSy() {
	this.aUA = null, this.k6 = 512, this.p3 = 8, this.or = 0, this.aUB = 0, this.a5L = new Uint16Array(this.k6), this.aTU = new Uint32Array(this.k6), this.aTV = new Uint32Array(this.k6), this.m8 = new Uint32Array(this.k6), this.aTW = new Uint16Array(
			this.k6), this.a5M = new Uint32Array(this.k6), this.aTS = new Uint16Array(this.k6), this.aTE = new Uint16Array(this.k6), this.aTX = new Uint8Array(this.k6), this.aTY = new Uint8Array(this.k6), this.oq = new Uint8Array(aC.ea), this.aTD =
		new Uint16Array(this.p3 * aC.ea), this.dU = function() {
			this.aUB = 0, this.or = 0, this.aUA = new Uint8Array(bQ.eo + bQ.ep), this.oq.fill(0)
		}, this.p6 = function(player) {
			var ed = this.or,
				aUC = bK.iJ(bM.fE[0]),
				aUD = this.oq[player],
				aUE = (player << 3) + aUD,
				hH = (this.a5L[ed] = aUE, this.aTU[ed] = aUC, this.m8[ed] = aUC, this.aTV[ed] = bK.iJ(bM.fE[1]), this.aTW[ed] = 0, bM.fA[0]);
			hH < 60 ? (b8.fy.fz(player, 60 - hH), this.a5M[ed] = 60) : this.a5M[ed] = hH, this.aTS[ed] = bL.iM.p6(ed, bK.iL(aUC)), this.aTE[ed] = this.aUB, this.aTX[ed] = bM.fE[2], this.aTY[ed] = 0, this.aUB = this.aUB + 1 & 1023, this.aTD[aUE] = ed,
				this.oq[player] = aUD + 1, this.or++, bL.aT1.aU9(player, bM.fE[1], bM.fE[2], this.aTE[ed])
		}, this.oA = function() {
			var aTC = bM.fE[3];
			this.aTU[aTC] = this.m8[aTC], this.aTV[aTC] = bK.iJ(bM.fE[1]), this.aTW[aTC] = 0, this.aTX[aTC] = bM.fE[2], bL.aT1.aU9(this.a5L[aTC] >> 3, bM.fE[1], bM.fE[2], this.aTE[aTC])
		}, this.im = function() {
			bL.aT1.im();
			var aA, gA = aC.eN,
				di = bL.h6.aFf(gA),
				rF = (! function(rF) {
					var aA, aUJ, aUK, aUL, aUM, aUC, aUQ, aUR, eg, gB, aTU = rF.aTU,
						aTV = rF.aTV,
						m8 = rF.m8,
						a5M = rF.a5M,
						aTY = rF.aTY,
						aTW = rF.aTW,
						aTS = rF.aTS,
						rF = rF.or,
						aTx = bQ.eo << 4;
					for (aA = rF - 1; 0 <= aA; aA--) aUK = m8[aA], aUJ = aTV[aA], aUK !== aUJ && (aUC = aTU[aA], aUQ = aUJ % aTx - (aUM = aUC % aTx), aUR = ~~((aUJ + .5) / aTx) - (aUC = ~~((aUC + .5) / aTx)), eg = ~~Math.sqrt(aUQ * aUQ + aUR *
						aUR + .5), gB = 2e5 + Math.min(20 * a5M[aA], 4e5), aTY[aA] && (gB = bJ.dj(gB, 5)), 65535 <= (gB = aTW[aA] + Math.max(~~((gB + .5) / eg), 1)) ? m8[aA] = aUL = aUJ : (aTW[aA] = gB, m8[aA] = aUL = aUM + bJ.dj(gB *
						aUQ, 65536) + aTx * (aUC + bJ.dj(gB * aUR, 65536))), aTS[aA] = bL.iM.aUT(aTS[aA], aUK, aUL))
				}(this), ! function(rF) {
					if (bd.jp() % 2 == 1) {
						var aA, hQ, ka, ex, ey, aUU, xr, aUV, h2, m9, mA, aUC, aUW, hg, aUY, vj, ed = rF.or,
							m8 = rF.m8,
							a5L = rF.a5L,
							a5M = rF.a5M,
							aTY = rF.aTY,
							iM = bL.iM.iM,
							aUa = iM.length,
							aUb = bL.iM.aUb,
							aTx = bQ.eo << 4,
							aUc = aC.hS,
							aRR = be.eb,
							gB = (ed - 1) * (bJ.dj(bd.jp(), 2) % 2);
						for (aA = 0; aA < ed; aA++)
							for (hQ = Math.abs(aA - gB), aUC = m8[hQ], ka = bK.iL(aUC), h2 = a5L[hQ] >> 3, m9 = aUC % aTx, mA = ~~((aUC + .5) / aTx), aUY = a5M[hQ], ex = 0; ex < 9; ex++)
								if (!((aUU = ka + aUb[ex]) < 0 || aUa <= aUU))
									for (aUV = iM[aUU], xr = aUV.length, ey = 0; ey < xr; ey++) aUW = aUV[ey], vj = a5L[aUW] >> 3, h2 == vj || aUc && aRR[h2] === aRR[vj] && aRR[h2] || (vj = m8[aUW], (hg = m9 - vj % aTx) * hg + (hg = mA - ~~((vj +
										.5) / aTx)) * hg < 14400 && (vj = a5M[aUW], hg = vj <= aUY ? Math.max(1, bJ.dj(vj + bJ.dj(aUY - vj, 10), 10)) : Math.max(1, bJ.dj(aUY, 10)), a5M[aUW] = Math.max(vj - hg, 0), aTY[aUW] = 4))
					}
				}(this), ! function(rF) {
					if (bd.jp() % 5 == 3) {
						var aA, hH, a5M = rF.a5M,
							ed = rF.or;
						for (aA = 0; aA < ed; aA++) hH = a5M[aA], a5M[aA] = Math.max(hH - Math.max(1, hH >> 7), 0)
					}
				}(this), this),
				a5M = rF.a5M,
				aTY = rF.aTY;
			for (aA = rF.or - 1; 0 <= aA; aA--) aTY[aA] = aTY[aA] >> 1, 0 === a5M[aA] && bL.aFi.aTN(aA);
			bb.g2(gA, di - bL.h6.aFf(gA), 15)
		}
}

function aSz() {
	this.aUd = 32, this.ek = 0, this.em = 0, this.iN = 0, this.aUe = 0, this.aUf = 4, this.iM = null, this.aUb = new Int16Array(9), this.dU = function() {
		this.iN = 1 + bJ.dj(bQ.eo - 1, this.aUd), this.aUe = 1 + bJ.dj(bQ.ep - 1, this.aUd), this.iM = new Array(this.iN * this.aUe), b8.pm.a1J(this.iM);
		var ek, em, aUb = this.aUb,
			i = this.iN;
		for (ek = -1; ek <= 1; ek++)
			for (em = -1; em <= 1; em++) aUb[3 * (1 + em) + 1 + ek] = em * i + ek
	}, this.p6 = function(aUh, aA) {
		return this.iM[aA].push(aUh), this.iM[aA].length - 1
	}, this.aUT = function(aUi, aUC, aUJ) {
		var aUj, aUk, aUC = bK.iL(aUC),
			aUJ = bK.iL(aUJ);
		return aUC === aUJ ? aUi : (aUj = this.iM[aUC].pop(), this.iM[aUC].length === aUi ? this.p6(aUj, aUJ) : (aUk = this.iM[aUC][aUi], this.iM[aUC][aUi] = aUj, bL.x.aTS[aUj] = aUi, this.p6(aUk, aUJ)))
	}
}

function aT4() {
	function a0E(aUJ, aUl) {
		if (! function(aUJ, aTA) {
				var hf = bK.iK(aUJ),
					aUp = Math.abs(bK.el(aTA) - bK.el(hf)),
					hf = Math.abs(bK.en(aTA) - bK.en(hf));
				return 0 !== Math.max(aUp, hf) && (function(aUC, aUJ, aUp, aUq) {
					var aUs = bK.i0(aUC),
						aUC = bK.i3(aUC),
						aUu = bK.i0(aUJ),
						aUJ = bK.i3(aUJ),
						aUu = aUu - aUs,
						aUJ = aUJ - aUC,
						aUy = Math.abs(aUu),
						aUz = Math.abs(aUJ),
						aUu = 0 < aUu ? 1 : 3,
						aUJ = 0 < aUJ ? 2 : 0;
					aUz < aUy ? aV2(aUs, aUC, aUs + aUy, aUC + aUz, aUu, aUJ, aUp) : aV2(aUC, aUs, aUC + aUz, aUs + aUy, aUJ, aUu, aUq)
				}(aUJ, bK.iJ(aTA), aUp, hf), !0)
			}(aUJ, aUl)) return !1;
		if (0 === bM.f7[0]) return !!ab.h5(aUl << 2);
		if (! function(aTA) {
				if (ab.h5(aTA << 2)) return 1;
				return function(aTA) {
					var aA, hP, aUA = bL.x.aUA,
						aV6 = bK,
						ed = bM.f7[0],
						aV7 = 4 * aTA;
					for (aA = ed - 1; 0 <= aA; aA--) {
						hP = aUA[aA];
						var aV8 = aV7;
						if (aV7 = aV6.iP(aV7, hP + 2 & 3), ab.h5(aV7)) return bM.f7[0] = aA, bM.fE[1] = aV7 >> 2, bM.fE[2] = 1 + hP, bM.fE[4] = aV8, 1
					}
					return
				}(aTA)
			}(aUl)) return !1;
		if (bM.fE[2] && ab.ei(bM.fE[4])) return !1;
		var aA, aUl = bK.iK(aUJ),
			vb = aAN,
			aUA = bL.x.aUA,
			ed = bM.f7[0] - 1,
			aV7 = 4 * aUl,
			hd = bK.hd;
		for (aA = 0; aA < ed; aA++)
			if (aV7 += hd[aUA[aA]], 0 !== vb[aV7 + 3] || 2 !== vb[aV7 + 2]) return !!void 0;
		return !!1
	}

	function aV2(aUs, aUt, aUu, aUv, aV0, aV1, aUp) {
		for (var em, aUA = bL.x.aUA, gB = 0, aV3 = 0, j = aUv - aUt, i = aUu - aUs, aV4 = aUs % 16, aA = 1; aA <= aUp; aA++) aUA[gB++] = aV0, aUA[gB] = aV1, gB += (em = (j * (aV4 + (aA << 4)) + .5) / i >> 4) - aV3, aV3 = em;
		bM.fJ(bM.f7, gB)
	}
	this.kV = function(player, aUl) {
		var hP, hf, h1 = bK.hn(player, aUl);
		return h1 !== aUl && (hP = bK.he(h1, aUl), hf = bK.iO(h1, hP), !(!ab.h5(hf << 2) && (hP = bK.hl(h1, aUl, hP), hf = bK.iO(h1, hP), !ab.h5(hf << 2)) || (bM.fE[0] = hf, bM.fE[1] = aUl, bM.fE[2] = 0, hf !== aUl && (!a0E(bK.iJ(hf), aUl) ||
			0 !== bM.fE[2] && bK.ht(player, bM.fE[1] + bK.hc[bM.fE[2] - 1] << 2)))))
	}, this.p8 = function(aUl) {
		var aUC = bL.x.m8[bM.fE[3]];
		return bM.fE[1] = aUl, bM.fE[2] = 0, a0E(aUC, aUl)
	}
}

function aT0() {
	var xW = 32,
		xV = new Array(2);

	function vQ(ey) {
		var ek, em, eP, i1, hy, hU = xW,
			a1m = b8.pd.vQ(hU, hU),
			ha = b8.pd.getContext(a1m, !0),
			hX = b8.pd.getImageData(ha, hU, hU),
			vb = hX.data,
			ka = (hU >> 1) - .5,
			kb = Math.sqrt(ka * ka);
		for (vb.fill(255), em = 0; em < hU; em++)
			for (ek = 0; ek < hU; ek++) hy = ek - ka, i1 = em - ka, eP = 4 * (em * hU + ek), hy = 714 * (kb - Math.sqrt(hy * hy + i1 * i1)) / kb, vb[2 + eP] = ey, vb[3 + eP] = 255 < hy ? 0 : hy;
		return ha.putImageData(hX, 0, 0), a1m
	}
	this.a4F = -1, this.dU = function() {
		this.a4F = -1, xV[0] || (xV[0] = vQ(255), xV[1] = vQ(0))
	}, this.aVA = function(ha, eH, ek, em, dx, aA) {
		b8.fy.gp(aC.eN) && (ha.setTransform(eH *= 4 / 3 * .625, 0, 0, eH, ek - (dx *= 4 / 3), em - dx), ha.drawImage(xV[+(bL.x.aTE[aA] === this.a4F)], 0, 0))
	}
}

function dX() {
	this.aP9 = [L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447)];
	var aVB = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.aA3 = new Array(aVB.length), this.dU = function() {
		var g = bh.eA.data[155].value.split(";"),
			ka = g.length;
		if (function() {
				for (var ed = aVB.length, aA = 0; aA < ed; aA++) bV.aA3[aA] = aVB[aA]
			}(), !(ka > aVB.length))
			for (var aA = 0; aA < ka; aA++) g[aA].length && (this.aA3[aA] = g[aA])
	}, this.aPB = function(dy, code) {
		for (var aA3 = this.aA3, aVD = aVB, pK = (aA3[dy] = code, ""), ed = aA3.length, aVE = [], aA = 0; aA < ed; aA++) aVE.push(aA3[aA] === aVD[aA] ? "" : aA3[aA]);
		ed--;
		for (aA = 0; aA < ed; aA++) pK += aVE[aA] + ";";
		bh.r5.r6(155, pK += aVE[ed])
	}, this.aP8 = function() {
		bh.r5.r6(155, ""), this.dU()
	}, this.ey = function(code, dy) {
		return code === this.aA3[dy] || code === this.aA3[dy + 1]
	}
}

function dS() {
	var aVG = new Array(1),
		aVH = new Array(1),
		aVI = 20,
		eB = 0,
		aVJ = !1;

	function aVL() {
		aVI++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aVH[aA] = 0, aVG[aA] = document.createElement("audio"), aVG[aA].src = src, aVG[aA].setAttribute("preload", "auto"), aVG[aA].setAttribute("controls", "none"), aVG[aA].style.display = "none", aVG[aA].onpause = function() {
					aVH[aA] = 1
				}, aVG[aA].oncanplaythrough = function() {
					aVH[aA] = 0 === aVH[aA] ? 1 : aVH[aA]
				}, document.body.appendChild(aVG[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aVJ = !0
		}
	}, this.tE = function() {
		if (aVJ) {
			aVJ = !1;
			for (var aA = 0; 0 <= aA; aA--) aVG[aA].onpause = null, aVG[aA].oncanplaythrough = null, document.body.removeChild(aVG[aA]), aVG[aA] = null
		}
	}, this.play = function() {
		if (aVJ) {
			var di = performance.now();
			if (eB + 66 < di)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aVH[aA]) return eB = di, aVH[aA] = 2, void aVG[aA].play();
			0 < aVI && (aVI--, setTimeout(aVL, 66))
		}
	}
}

function cU() {
	this.a6n = function() {
		var aVO;
		return !(ak.jt < 3 || af.gQ[l7[0]] >= aC.jc >> 1) && (aC.hS ? (aVO = ad.aGl(), !(2 * ad.aGm(bf.l4()) >= aVO)) : function() {
			var aVO = ad.aGl();
			if (2 * af.ge[l7[0]] >= aVO) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aUD = aC.js, ge = af.ge, aA = 0; aA < aUD; aA++) ge[aA] = 512;
			var aUE = aC.w7,
				k5 = aD.k5,
				hH = aD.hH;
			for (aA = aUD; aA < aUE; aA++) ge[aA] = k5[hH[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var ed = aC.w7, ge = af.ge, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < ed; aA++) ge[aA] = sResourcesValue
		} : function() {
			for (var ed = aC.w7, ge = af.ge, sResourcesData = aC.data.sResourcesData, aA = 0; aA < ed; aA++) ge[aA] = sResourcesData[aA]
		})();
		bb.le[8] = af.ge[aC.eN]
	}
}

function dJ() {
	var aVT = 501,
		aVV = (this.aVU = new Uint32Array(aVT), this.a2R = new Uint32Array(aVT), this.a9i = new Uint16Array(aVT), this.aPH = 0, 1),
		aVW = 0;

	function aVZ(self) {
		self.max.fill(0)
	}

	function aVb(self, aA) {
		self.max[0] = Math.max(self.aVU[aA], self.max[0]), self.max[1] = Math.max(self.a2R[aA], self.max[1]), self.max[2] = Math.max(self.a9i[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aVX = 0, this.le = new Array(21), this.aVY = null, this.dV = function() {
		this.aVY = [L(448), L(449), L(450), L(451), L(452), L(453), L(454), L(455), L(287), L(288), L(456), L(457), L(458), L(459), "", L(460), L(461), L(462), L(247), L(463), L(464)]
	}, this.dU = function() {
		this.aPH = 0, aVV = 1, this.aVX = 0, aVW = 0, aVZ(this), this.le.fill(0)
	}, this.p1 = function(player, iC) {
		b8.fy.a2M(player) && (this.le[0] += iC + 1, this.le[1]++, this.le[12] += bM.fA[1])
	}, this.oR = function(player, o6) {
		__fx.donationsTracker.logDonation(player, o6, bM.fA[0]);
		player === aC.eN && (aM.oR(bM.fA[0], bM.fA[1], o6), this.le[12] += bM.fA[1], this.le[16] += bM.fA[0]), o6 === aC.eN && (aM.a5Z(bM.fA[0], player), this.le[10] += bM.fA[0])
	}, this.p4 = function(player) {
		b8.fy.a2M(player) && (this.le[2]++, this.le[12] += bM.fA[1])
	}, this.pF = function(player) {
		b8.fy.a2M(player) && (this.le[19]++, this.le[12] += bM.fA[1])
	}, this.aU8 = function(player) {
		b8.fy.a2M(player) && this.le[20]++
	}, this.g2 = function(player, a36, dy) {
		b8.fy.a2M(player) && (this.le[dy] += a36)
	}, this.im = function() {
		var self;
		this.aVX || 0 < aVW-- || ((self = this).aVU[self.aPH] = af.gQ[aC.eN], self.a2R[self.aPH] = af.ge[aC.eN], self.a9i[self.aPH] = ad.a9j(aC.eN), aVb(self, self.aPH), self.aPH++, self.aPH === aVT && function(self) {
			aVZ(self), aVb(self, 0), self.aPH = 1 + bJ.dj(aVT, 2);
			for (var aA = 1; aA < self.aPH; aA++) self.aVU[aA] = self.aVU[2 * aA], self.a2R[aA] = self.a2R[2 * aA], self.a9i[aA] = self.a9i[2 * aA], aVb(self, aA);
			aVV *= 2
		}(self), aVW = aVV - 1, bc.lV(), 0 === af.li[aC.eN] && (self.aVX = bd.jp()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rz = 0, this.s0 = 0, this.aVd = 0, this.aVe = 0, this.a70 = 0, this.sh = 0;
	var aVg = this.aVf = 0;
	this.aVh = 0, this.aVi = 0, this.aVj = 0, this.a6M = 0, this.dy = 0, this.a9L = null, this.hK = !1, this.aVk = -1, this.aVl = !1, this.aVm = [0, 0], this.dV = function() {
		this.a9L = [L(465), L(119, 0, "Balance"), L(118, 0, "Interest"), L(466)]
	}, this.dU = function() {
		this.hK = !1, this.aVk = -1, this.aVl = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eg = z.a0.r1() && h.i < h.j ? 1 : z.a0.r1() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eg * this.i), this.i -= z.a0.r1() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6M = Math.floor(this.j / 150), this.a6M = Math.max(this.a6M, 1.5), this.rz = Math.floor(1 + .02 * this.i),
			this.s0 = Math.floor(1 + .04 * this.i), this.a70 = this.s0, aVg = Math.floor(.75 * this.a70), this.sh = Math.floor(1 + .075 * this.i), this.aVh = Math.floor(1 + .1125 * this.i), this.aVi = Math.floor(this.i * (z.a0.r1() ? .03 :
			.029)), this.aVi = Math.max(this.aVi, 4), this.aVj = Math.floor(.035 * this.i), this.aVj = Math.max(this.aVj, 4), this.aVf = this.j - 2 * this.a70 - this.sh - this.aVh, this.hK && this.aVn()
	}, this.gq = function(kv, kw) {
		var wA, w9;
		return !!this.hK && (w9 = kv, wA = kw, kv -= bJ.dj(h.i - this.i, 2), kw -= bJ.dj(h.j - this.j, 2), kv < 0 || kw < 0 || kv >= this.i || kw >= this.j || kv >= this.i - this.aVh && kw < this.aVh ? -1 !== aL.gq(w9, wA) || bA.gq(w9, wA) ||
			this.qu() : kw < this.aVh || (kw < this.j - this.sh ? (this.aVl = !0, this.aVk = (kv - 2 * this.rz - this.aVd) / this.aVe, 3 !== this.dy && (bd.dc = !0)) : (w9 = (w9 = Math.floor(kv / (this.i / this.a9L.length))) < 0 ? 0 : w9 >=
				this.a9L.length ? this.a9L.length - 1 : w9) !== this.dy && (this.dy = w9, this.aVn(), bd.dc = !0)), !0)
	}, this.a0R = function(kv, kw) {
		return this.aVm[0] = kv, this.aVm[1] = kw, !(!this.hK || !this.aVl || (kv -= bJ.dj(h.i - this.i, 2), kw = this.aVk, this.aVk = (kv - 2 * this.rz - this.aVd) / this.aVe, (0 <= this.aVk && this.aVk <= 1 || 0 <= kw && kw <= 1) && (bd.dc = !
			0), 0))
	}, this.a0q = function() {
		this.aVl && (this.aVl = !1)
	}, this.a12 = function() {
		this.hK ? this.qu() : this.show()
	}, this.show = function() {
		bb.aPH < 2 || (this.hK = !0, this.aVn())
	}, this.qu = function() {
		this.hK = !1, this.aVk = -1, bd.dc = !0
	}, this.aVn = function() {
		this.dy < 2 ? this.aVd = aP.measureText(b8.zY.yB(bb.max[this.dy]), b8.pd.rS(0, this.aVi)) : 2 === this.dy && (this.aVd = aP.measureText(b8.zY.a2z(6, 2), b8.pd.rS(0, this.aVi))), this.aVe = this.i - 2 * this.rz - this.aVd - this.s0
	}, this.lV = function() {
		this.hK && this.aVn()
	}, this.tk = function() {
		this.hK && this.a7H()
	}, this.a7H = function() {
		var ek = bJ.dj(h.i - this.i, 2),
			em = bJ.dj(h.j - this.j, 2);
		tl.setTransform(1, 0, 0, 1, ek, em), tl.fillStyle = b9.mg, tl.fillRect(0, this.aVh, this.i, this.j - this.aVh), this.aVo(), this.aO6(), tl.strokeRect(0, 0, this.i, this.j), b8.pd.textAlign(tl, 2), tl.font = b8.pd.rS(0, this.aVi), 0 ===
			this.dy ? this.aVp(bb.aVU, ek, em) : 1 === this.dy ? this.aVp(bb.a2R, ek, em) : 2 === this.dy ? this.aVq(ek, em) : 3 === this.dy && (this.aVr(ek, em), this.aVs(ek, em)), aL.a4f(Math.floor(ek + this.i - .725 * this.aVh), Math.floor(
				em + .275 * this.aVh), Math.floor(.45 * this.aVh)), tl.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVo = function() {
		var aA, di;
		for (tl.lineWidth = this.a6M, b8.pd.textBaseline(tl, 1), b8.pd.textAlign(tl, 1), tl.strokeStyle = b9.mj, tl.font = b8.pd.rS(1, this.aVj), di = this.i / this.a9L.length, tl.fillStyle = b9.n5, tl.fillRect(this.dy * di, this.j - this.sh, di,
				this.sh), tl.fillStyle = b9.mj, tl.fillRect(0, this.j - this.sh - .5 * this.a6M, this.i, this.a6M), aA = 1; aA <= 3; aA++) tl.fillRect(aA * di, this.j - this.sh, this.a6M, this.sh);
		for (aA = this.a9L.length - 1; 0 <= aA; aA--) tl.fillText(b8.xA.a1y(this.a9L[aA], 0, .9 * di), (aA + .5) * di, this.j - .46 * this.sh)
	}, this.aO6 = function() {
		tl.fillStyle = b9.nV, tl.fillRect(0, 0, this.i, this.aVh), tl.fillStyle = b9.mj, tl.fillRect(0, this.aVh - .5 * this.a6M, this.i, this.a6M), tl.font = b8.pd.rS(1, .39 * this.aVh), tl.fillText(b8.xA.a1y(L(467), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVh))
	}, this.aVp = function(g, ek, em) {
		var ka = bb.max[this.dy],
			a1L = (tl.setTransform(1, 0, 0, 1, ek + 2 * this.rz + this.aVd, em + this.a70 + this.aVh), tl.lineWidth = 2, this.aVf / Math.sqrt(ka));
		tl.beginPath(), tl.moveTo(this.aVe, this.aVf - a1L * Math.sqrt(g[bb.aPH - 1]));
		for (var aA = bb.aPH - 2; 0 <= aA; aA--) tl.lineTo(aA * this.aVe / (bb.aPH - 1), this.aVf - a1L * Math.sqrt(g[aA]));
		tl.stroke();
		ek = this.a4f(g, a1L, .5);
		ek < .95 && tl.fillText(b8.zY.yB(ka), -this.rz, 0), .05 < Math.abs(ek - .5) && tl.fillText(b8.zY.yB(Math.floor(ka / 4)), -this.rz, Math.floor(this.aVf / 2)), .05 < ek && tl.fillText("0", -this.rz, this.aVf)
	}, this.aVq = function(ek, em) {
		tl.setTransform(1, 0, 0, 1, ek + 2 * this.rz + this.aVd, em + this.a70 + this.aVh), tl.lineWidth = 2;
		var a1L = this.aVf / Math.max(bb.max[this.dy], 1);
		tl.beginPath(), tl.moveTo(this.aVe, this.aVf - a1L * bb.a9i[bb.aPH - 1]);
		for (var aA = bb.aPH - 2; 0 <= aA; aA--) tl.lineTo(aA * this.aVe / (bb.aPH - 1), this.aVf - a1L * bb.a9i[aA]);
		tl.stroke();
		ek = this.a4f(bb.a9i, a1L, 1), em = bb.max[this.dy] / 100;
		ek < .95 && tl.fillText(b8.zY.a2z(em, 2), -this.rz, 0), .05 < Math.abs(ek - .5) && tl.fillText(b8.zY.a2z(em / 2, 2), -this.rz, Math.floor(this.aVf / 2)), .05 < ek && tl.fillText(b8.zY.a2z(0, 2), -this.rz, this.aVf)
	}, this.aVr = function(ek, em) {
		tl.setTransform(1, 0, 0, 1, ek + .34 * this.i, em + 2 * aVg + this.aVh), b8.pd.textAlign(tl, 2);
		for (var a96 = this.j - 4 * aVg - this.sh - this.aVh, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) tl.fillText(b8.xA.a1y(bb.aVY[g[aA]], 0, .31 * this.i), 0, aA * a96 / 9);
		var f5 = bb.le;
		for (tl.setTransform(1, 0, 0, 1, ek + .39 * this.i, em + 2 * aVg + this.aVh), b8.pd.textAlign(tl, 0), tl.fillText(b8.zY.a2z(100 * f5[0] / (1024 * Math.max(f5[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) tl.fillText(f5[g[aA]].toString(), 0,
			aA * a96 / 9);
		tl.fillText(b8.zY.a2z(100 * (1 - af.gQ[aC.eN] / f5[7]), 0), 0, a96)
	}, this.aVs = function(ek, em) {
		tl.setTransform(1, 0, 0, 1, ek + .79 * this.i, em + 2 * aVg + this.aVh), b8.pd.textAlign(tl, 2);
		var aA, a96 = this.j - 4 * aVg - this.sh - this.aVh;
		for (tl.fillStyle = b9.n0, aA = 2; 0 <= aA; aA--) tl.fillText(b8.xA.a1y(bb.aVY[aA + 8], 0, .31 * this.i), 0, aA * a96 / 9);
		tl.fillText(b8.xA.a1y(bb.aVY[18], 0, .31 * this.i), 0, 3 * a96 / 9), tl.fillStyle = b9.mz, tl.fillText(b8.xA.a1y(bb.aVY[11], 0, .31 * this.i), 0, 4 * a96 / 9), tl.fillStyle = b9.nI, tl.fillText(b8.xA.a1y(bb.aVY[13], 0, .31 * this.i), 0,
				5 * a96 / 9), tl.fillText(b8.xA.a1y(bb.aVY[15], 0, .31 * this.i), 0, 6 * a96 / 9), tl.fillText(b8.xA.a1y(bb.aVY[16], 0, .31 * this.i), 0, 7 * a96 / 9), tl.fillText(b8.xA.a1y(bb.aVY[12], 0, .31 * this.i), 0, 8 * a96 / 9), tl
			.fillStyle = b9.nH, tl.fillText(b8.xA.a1y(bb.aVY[17], 0, .31 * this.i), 0, a96), tl.fillStyle = b9.n0;
		var f5 = bb.le,
			aCr = f5[8] + f5[9] + f5[10] + f5[18],
			aCr = b8.zY.yB(aCr),
			aMv = tl.measureText(aCr).width,
			ek = (tl.setTransform(1, 0, 0, 1, ek + .83 * this.i + aMv, em + 2 * aVg + this.aVh), tl.fillText(b8.zY.yB(f5[8]), 0, 0), tl.fillText(b8.zY.yB(f5[9]), 0, a96 / 9), tl.fillText(b8.zY.yB(f5[10]), 0, 2 * a96 / 9), tl.fillText(b8.zY.yB(f5[
				18]), 0, 3 * a96 / 9), tl.fillStyle = b9.mz, tl.fillText(aCr, 0, 4 * a96 / 9), tl.fillStyle = b9.nI, tl.fillText(b8.zY.yB(f5[13]), 0, 5 * a96 / 9), tl.fillText(b8.zY.yB(f5[15]), 0, 6 * a96 / 9), tl.fillText(b8.zY.yB(f5[16]),
				0, 7 * a96 / 9), tl.fillText(b8.zY.yB(f5[12]), 0, 8 * a96 / 9), f5[12] + f5[13] + f5[15] + f5[16]);
		tl.fillStyle = b9.nH, tl.fillText(b8.zY.yB(ek), 0, a96), tl.fillStyle = b9.mj
	}, this.a4f = function(g, a1L, a7s) {
		var aA, e, fK;
		return this.aVk < 0 || 1 < this.aVk ? .25 : (aA = this.aVk * (bb.aPH - 1), fK = g[e = Math.floor(aA)], fK += (aA - e) * (g[e < bb.aPH - 1 ? e + 1 : e] - fK), tl.strokeStyle = b9.mm, .04 < this.aVk && this.aVu(0, this.aVf - a1L * Math.pow(
				fK, a7s), aA * this.aVe / (bb.aPH - 1), this.aVf - a1L * Math.pow(fK, a7s)), .04 < fK / bb.max[this.dy] && this.aVu(aA * this.aVe / (bb.aPH - 1), this.aVf, aA * this.aVe / (bb.aPH - 1), this.aVf - a1L * Math.pow(fK, a7s)), tl
			.fillStyle = b9.nK, tl.beginPath(), tl.arc(aA * this.aVe / (bb.aPH - 1), this.aVf - a1L * Math.pow(fK, a7s), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tl.fill(), g = this.aVk * bd.a9k, g = 0 === af.li[aC.eN] ? Math.floor(g * bb
				.aVX) : Math.floor(g * bd.jp()), tl.fillStyle = b9.mj, tl.fillText(1 === a7s ? b8.zY.a2z(fK / 100, 2) : b8.zY.yB(Math.floor(fK)), -this.rz, this.aVf - a1L * Math.pow(fK, a7s)), b8.pd.textAlign(tl, 1), tl.fillText(aV.a9Z(g),
				aA * this.aVe / (bb.aPH - 1), this.aVf + this.aVi - (z.a0.r1() ? 2 : 0) - this.a6M), b8.pd.textAlign(tl, 2), a1L * Math.pow(fK, a7s) / this.aVf)
	}, this.aVu = function(m9, mA, mM, mN) {
		tl.beginPath(), tl.moveTo(m9, mA), tl.lineTo(mM, mN), tl.stroke()
	}
}

function bt() {
	this.aVv = "https://", this.aVw = this.aVv + "territorial.io/", this.aPI = this.aVw + "changelog", this.aPM = this.aVw + "terms", this.aVx = this.aVw + "cookie_policy", this.aOj = this.aVw + "privacy", this.aPL = this.aVw + "tutorial", this.aPK =
		this.aVw + "players", this.aPJ = this.aVw + "clans", this.zi = this.aVw + "clan-results", this.aM4 = "https://patreon.com/c/territorial", this.aB2 = this.aVv + "play.google.com/store/apps/details?id=territorial.io", this.a00 = this.aVv +
		"apps.apple.com/app/id1581110913", this.aVy = this.aVv + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aB3 = this.aVv + "discord.gg/pthqvpTXmh", this.aB4 = this.aVv + "www.instagram.com/davidtschacher/", this.xl =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVz, this.x7 = new aW0, this.dU = function() {
		this.x.dU()
	}, this.im = function() {
		0 !== this.x.a5i && this.x.a5i--
	}
}

function aW0() {
	this.tk = function() {
		if (0 !== bN.x.a5i && (tl.globalAlpha = Math.min(bN.x.a5i / 580, 1), tl.drawImage(bN.x.aW3, 1 + aR.x5(), 1 + aR.x6()), tl.globalAlpha = 1, aC.gy)) {
			for (var m9 = iD / iE, mA = iF / iE, mM = (h.i + iD) / iE, mN = (h.j + iF) / iE, gB = bN.x.aW4 * iE, aW5 = bN.x.aW5, aA = aC.js - 1; 0 <= aA; aA--) ! function(aA, gB, m9, mA, mM, mN, aW5) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) gB *= 2;
				0 === af.li[aA] || 0 === af.gQ[aA] || (mM = h.i * ((af.iR[aA] + af.iS[aA] + 1) / 2 - m9) / (mM - m9) - .5 * gB, m9 = h.j * ((af.iT[aA] + af.iU[aA] + 1) / 2 - mA) / (mN - mA) - .5 * gB, mM > h.i) || m9 > h.j || mM < -gB || m9 <
					-gB || (tl.setTransform(highlight ? iE * 2 : iE, 0, 0, highlight ? iE * 2 : iE, mM, m9), tl.drawImage(aW5[aC.hS ? be.eb[aA] : 1], 0, 0))
			}(aA, gB, m9, mA, mM, mN, aW5);
			tl.setTransform(iE, 0, 0, iE, 0, 0)
		}
	}
}

function aVz() {
	this.aW4 = 28, this.a5i = 0, this.aW3 = null;
	var aW7 = this.aW5 = null;

	function aWA(hU, aWB) {
		var ek, em, eP, hy, a1m = b8.pd.vQ(hU, hU),
			ha = b8.pd.getContext(a1m, !0),
			hX = b8.pd.getImageData(ha, hU, hU),
			vb = hX.data,
			ka = (hU >> 1) - .5,
			aWC = .5 + ka;
		for (aWC *= aWC, em = 0; em < hU; em++)
			for (ek = 0; ek < hU; ek++) hy = (hy = ek - ka) * hy + (hy = em - ka) * hy, vb[eP = 4 * (em * hU + ek)] = aWB[0], vb[1 + eP] = aWB[1], vb[2 + eP] = aWB[2], vb[3 + eP] = (aWC - hy) * aWB[3] / aWC;
		return ha.putImageData(hX, 0, 0), a1m
	}

	function aVA(aA, ha, a1m, hU) {
		var highlight, ek, em;
		0 !== af.li[aA] && 0 !== af.gQ[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (hU *= 2), ek = af.iR[aA] + af.iS[aA] + 1 - hU - 2 >> 1, em = af.iT[aA] + af.iU[aA] + 1 - hU - 2 >> 1, highlight ? ha
			.drawImage(a1m[aC.hS ? 9 === aC.k9 && 5 === aD.hH[aA] ? 3 : be.eb[aA] : aA < aC.js ? 1 : 0], ek, em, hU, hU) : ha.drawImage(a1m[aC.hS ? 9 === aC.k9 && 5 === aD.hH[aA] ? 3 : be.eb[aA] : aA < aC.js ? 1 : 0], ek, em))
	}
	this.dU = function() {
		var rF;
		this.a5i = 700,
			function(rF) {
				var hU = rF.aW4;
				if (rF.aW5 = [], aW7 = [], aC.hS) {
					for (var aA = 0; aA <= aC.wE; aA++) rF.aW5.push(aWA(hU, be.aU1[be.kE[aA]])), aW7.push(aWA(hU >> 1, be.aU1[be.kE[aA]]));
					9 === aC.k9 && aW7.push(aWA(hU, be.aU1[1]))
				} else rF.aW5.push(aWA(hU, be.aU1[7])), rF.aW5.push(aWA(hU, be.aU1[4])), aW7.push(aWA(hU >> 1, be.aU1[7]))
			}(this),
			function(rF, aWD) {
				var aA, aW3 = rF.aW3,
					ha = b8.pd.getContext(aW3, !0),
					ed = aC.ea,
					hU = rF.aW4 >> 1;
				ha.imageSmoothingEnabled = !1, ha.setTransform(1, 0, 0, 1, 0, 0), aWD && ha.clearRect(0, 0, aW3.width, aW3.height);
				if (9 === aC.k9) {
					hU <<= 1;
					rF = ax.kI[5];
					for (aA = ed - rF; aA < ed; aA++) aVA(aA, ha, aW7, hU);
					ed -= rF, hU >>= 1
				}
				for (aA = aC.js; aA < ed; aA++) aVA(aA, ha, aW7, hU)
			}(this, null !== (rF = this).aW3 && rF.aW3.width === bQ.eo - 2 && rF.aW3.height === bQ.ep - 2 || (rF.aW3 = b8.pd.vQ(bQ.eo - 2, bQ.ep - 2), !1)), aC.gy || this.a3H()
	}, this.aU0 = aWA, this.a3H = function() {
		for (var ed = aC.js, hU = this.aW4, aW5 = this.aW5, ha = b8.pd.getContext(this.aW3, !0), aA = 0; aA < ed; aA++) aVA(aA, ha, aW5, hU)
	}
}

function d3() {
	function aWG() {
		8 === aC.k9 && 1 === aC.yt && bP.yW.ys()
	}

	function aWF(player) {
		aC.gy ? (aj.aFZ(player), ak.aIY(), aC.kB && aC.ov.im()) : b1.aBJ(player)
	}
	this.oL = function(player) {
		aM.z5(player, player === aC.eN ? 21 : 22), aWF(player), aWG()
	}, this.os = function(player) {
		1 === aC.yt && 0 !== af.li[player] && 2 !== af.a2I[player] && aWF(player), aC.yw--, aC.yv--, aM.z5(player, 4), b8.fy.go(2) && aV.lU(!0), aWG()
	}
}

function dD() {
	this.aRc = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a93 = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.mj, "rgb(170,170,170)"
	], this.aWH = [b9.mj, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.mj, b9.ma], this.aWI = [b9.ma, b9.mj, b9.mj, b9.mj, b9.ma, b9.ma, b9.ma, b9.ma, b9.mj];
	var aWJ = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aWK = (this.aI0 = ["rgba(" + aWJ[0] + ",", "rgba(" + aWJ[1] + ",", "rgba(" + aWJ[2] + ",", "rgba(" + aWJ[3] + ",", "rgba(" + aWJ[4] + ",", "rgba(" + aWJ[5] + ",", "rgba(" + aWJ[6] + ",", "rgba(" + aWJ[7] + ",", "rgba(" + aWJ[8] + ",",
			"rgba(" + aWJ[9] + ","
		], this.aI1 = ["rgb(" + aWJ[0] + ")", "rgb(" + aWJ[1] + ")", "rgb(" + aWJ[2] + ")", "rgb(" + aWJ[3] + ")", "rgb(" + aWJ[4] + ")", "rgb(" + aWJ[5] + ")", "rgb(" + aWJ[6] + ")", "rgb(" + aWJ[7] + ")", "rgb(" + aWJ[8] + ")", "rgb(" + aWJ[
			9] + ")"
		], this.zF = null, this.aU1 = [
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
	this.kE = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eb = new Uint8Array(aC.ea), this.a94 = new Uint8Array(aC.ea), this.wK = new Uint16Array(aC.ea), this.wL = new Uint16Array(this.kE.length + 1), this.wM = new Uint16Array(this.kE.length), this.dV =
		function() {
			this.zF = [L(468), L(469), L(470), L(471), L(472), L(473), L(474), L(475), L(476)]
		}, this.dU = function() {
			if (this.eb.fill(0), this.aWL(), aC.hS) {
				if (9 === aC.k9) {
					for (var eb = be.eb, aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) eb[aA] = 1;
					var ed = aC.ea;
					for (aA = aC.data.teamPlayerCount[7]; aA < ed; aA++) eb[aA] = 2;
					be.kE[1] = 7, be.kE[2] = 8
				} else aC.kB ? function() {
					var colorsData = aC.data.colorsData;
					if (!aC.data.selectableColor)
						for (var aA = aC.js - 1; 0 <= aA; aA--) colorsData[aA] = aw.jA(262144);
					var aWW = 0,
						et = 768,
						aR6 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aC.data.teamPlayerCount;
					for (aA = 0; aA < 9; aA++)
						if (teamPlayerCount[aA]) {
							for (var eg = 0, ex = 0; ex < 3; ex++) eg += Math.abs(aWK[aA][ex] - aR6[ex]);
							eg < et && (aWW = aA, et = eg)
						} var aWX = new Uint16Array(9);
					for (aA = 0; aA < 9; aA++) aWX[aA] = teamPlayerCount[aA];
					var kE = be.kE,
						aWY = new Uint8Array(9),
						g5 = (kE[0] = 0, 1);
					for (aA = 1; aA < 9; aA++) aWX[aA] && (aWY[aA] = g5, kE[g5++] = aA);
					var j9 = aC.js,
						eb = be.eb;
					aWX[aWW] ? (aWX[aWW]--, eb[0] = aWY[aWW]) : j9 = 0;
					var ey = 0;
					for (aA = j9; aA < aC.w7; aA++) {
						var hQ = kE[ey];
						if (aWX[hQ]) aWX[hQ]--, eb[aA] = aWY[hQ];
						else if (aA--, 9 <= ++ey) return console.log("error 325")
					}
				}() : this.im();
				! function() {
					for (var ed = aC.ea, wK = be.wK, wL = be.wL, wM = be.wM, eb = be.eb, kE = be.kE, wD = kE.length, eA = new Array(wD), aA = 0; aA < wD; aA++) eA[aA] = [];
					for (aA = 0; aA < ed; aA++) eA[kE[eb[aA]]].push(aA);
					for (aA = 1; aA <= wD; aA++) wL[aA] = wL[aA - 1] + eA[aA - 1].length;
					for (aA = 0; aA < wD; aA++)
						for (var g5 = eA[aA].length, ka = wL[aA], hQ = 0; hQ < g5; hQ++) wK[hQ + ka] = eA[aA][hQ];
					var js = aC.js;
					for (aA = 0; aA < wD; aA++)
						for (g5 = eA[aA].length, ka = wL[aA], hQ = 0; hQ < g5; hQ++)
							if (wK[hQ + ka] >= js) {
								wM[aA] = hQ;
								break
							}
				}(), ! function() {
					for (var ed = aC.ea, eb = be.eb, a94 = be.a94, kE = be.kE, aA = 0; aA < ed; aA++) a94[aA] = kE[eb[aA]];
					9 === aC.k9 && a94.fill(1, ed - ax.kI[5])
				}()
			}
		}, this.aWL = function() {
			for (var aA = this.kE.length - 1; 0 <= aA; aA--) this.kE[aA] = aA
		}, this.im = function() {
			var hi = new Uint8Array(aC.js),
				hj = new Uint8Array(aC.js),
				aWQ = new Uint16Array(8),
				aWR = new Uint16Array(this.kE.length);
			this.aWS(hi, hj, aWQ, 1), this.aFC(aWQ), this.aWT(aWR, hi, hj), this.aWU(hi, hj, aWR), this.aWV()
		}, this.aWS = function(hi, hj, aWX, aWZ) {
			for (var ex, e, aWa, ed = this.kE.length - aWZ, g = new Uint16Array(ed), colorsData = aC.data.colorsData, aA = aC.js - 1; 0 <= aA; aA--) {
				for (ex = ed; aWZ <= ex; ex--) g[ex - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aWK[ex][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aWK[ex][1]) + Math.abs(4 * (63 & colorsData[aA]) - aWK[ex][2]);
				for (aWa = 768, ex = ed - 1; 0 <= ex; ex--) g[e = (ex + aA) % ed] < aWa && (aWa = g[e], hi[aA] = e);
				for (aWX[hi[aA]] += 4, aWa = 768, ex = ed - 1; 0 <= ex; ex--) g[e = (ex + aA) % ed] < aWa && e !== hi[aA] && (aWa = g[e], hj[aA] = e);
				aWX[hj[aA]]++
			}
		}, this.aFC = function(aWX) {
			for (var ex, kc, ed = this.kE.length - 1, aA = ed; 0 <= aA; aA--) this.kE[aA] = aA;
			for (aA = ed - 1; 0 <= aA; aA--) aWX[aA]++;
			for (aA = 1; aA <= ed; aA++) {
				for (kc = 0, ex = 1; ex < ed; ex++) aWX[ex] > aWX[kc] && (kc = ex);
				aWX[kc] = 0, this.kE[aA] = kc + 1
			}
		}, this.aWT = function(aWR, hi, hj) {
			var ex, zc, ey, eg, e, mL, sG, aWb = this.kE.length - 1,
				q7 = new Uint16Array(aWb),
				aWc = [],
				aWd = 0,
				zb = [],
				aWe = [];
			loop: for (var aA = 0; aA < aC.js; aA++)
				if (null !== (zc = b8.zY.zd(af.za[aA]))) {
					for (ex = zb.length - 1; 0 <= ex; ex--)
						if (zc === zb[ex]) {
							aWe[ex].push(aA), aWd = Math.max(aWd, aWe[ex].length);
							continue loop
						} zb.push(zc), aWc.push(!1), aWe.push([aA]), aWd = Math.max(aWd, 1)
				}
			for (; 2 < aC.wE && aWd > bJ.dj(aC.js, aC.wE);) aC.wE--, aC.k9--;
			for (ex = zb.length - 1; 0 <= ex; ex--) {
				for (eg = -1, ey = zb.length - 1; 0 <= ey; ey--) !aWc[ey] && (-1 === eg || aWe[ey].length > aWe[eg].length) && (eg = ey);
				for (ey = aWb - 1; 0 <= ey; ey--) q7[ey] = 1;
				for (ey = aWe[eg].length - 1; 0 <= ey; ey--) q7[hi[aWe[eg][ey]]] += 3, q7[hj[aWe[eg][ey]]]++;
				for (aA = aWb - 1; 0 <= aA; aA--) {
					for (e = eg % aWb, ey = aWb - 1; 0 <= ey; ey--) q7[ey] > q7[e] && (e = ey);
					for (mL = -1, ey = aC.wE; 0 < ey; ey--)
						if (this.kE[ey] === e + 1) {
							mL = ey;
							break
						} if (q7[e] = 0, -1 !== mL) {
						for (sG = 0, ey = aC.wE; 0 < ey; ey--) aWR[mL] > aWR[ey] && sG++;
						if (sG !== aC.wE - 1) {
							for (ey = aWe[eg].length - 1; 0 <= ey; ey--) aWR[mL]++, this.eb[aWe[eg][ey]] = mL;
							break
						}
					}
				}
				aWc[eg] = !0
			}
		}, this.aWU = function(hi, hj, aWR) {
			for (var aA, hx, ed = this.kE.length - 1, border = bJ.dj(aC.js, aC.wE), aWf = (0 < aC.js % aC.wE && border++, new Uint8Array(1 + ed)), ex = ed; 1 <= ex; ex--) aWf[this.kE[ex]] = ex;
			for (aA = 0; aA < aC.js; aA++) hx = aWf[hi[aA] + 1], 0 === this.eb[aA] && hx <= aC.wE && aWR[hx] < border && (aWR[hx]++, this.eb[aA] = hx);
			for (aA = 0; aA < aC.js; aA++) hx = aWf[hj[aA] + 1], 0 === this.eb[aA] && hx <= aC.wE && aWR[hx] < border && (aWR[hx]++, this.eb[aA] = hx);
			for (ex = aC.wE; 1 <= ex; ex--)
				for (aA = aC.js - 1; 0 <= aA && !(aWR[ex] >= border); aA--) 0 === this.eb[aA] && (aWR[ex]++, this.eb[aA] = ex)
		}, this.aWV = function() {
			for (var aA = aC.js; aA < aC.ea; aA++) this.eb[aA] = 1 + aA % aC.wE
		}
}

function gR() {
	for (var ek, em, aA = fX - 1; 0 <= aA; aA--) ek = bJ.dj(fZ[aA], 4) % bQ.eo, em = bJ.dj(fZ[aA], 4 * bQ.eo), af.iR[fS] = Math.min(ek, af.iR[fS]), af.iT[fS] = Math.min(em, af.iT[fS]), af.iS[fS] = Math.max(ek, af.iS[fS]), af.iU[fS] = Math.max(em, af
		.iU[fS])
}

function fm() {
	var eg, gA, aA, ed = af.g4[fS].length,
		ef = ab.ef;
	loop: for (aA = ed - 1; 0 <= aA; aA--) {
		for (eg = 3; 0 <= eg; eg--)
			if (gA = af.g4[fS][aA] + ef[eg], ab.eU(gA) || ab.gC(gA) && ab.eV(gA) !== fS) {
				ab.j6(af.g4[fS][aA], fS);
				continue loop
			} af.g4[fS][aA] = af.g4[fS][ed - 1], af.g4[fS].pop(), ed--
	}
}

function fn() {
	var player = fS,
		gI = af.gI,
		gJ = af.gJ,
		f3 = af.f3,
		ed = gI[player].length,
		ef = ab.ef;
	loop: for (var aA = ed - 1; 0 <= aA; aA--) {
		for (var aWg = !1, aWh = !1, eg = 3; 0 <= eg; eg--) {
			var gA = gI[player][aA] + ef[eg];
			if (ab.aFM(gA, player)) continue loop;
			aWg = aWg || ab.h5(gA), aWh = aWh || ab.aFL(gA)
		}
		aWg ? gJ[player].push(gI[player][aA]) : aWh ? f3[player].push(gI[player][aA]) : ab.wg(gI[player][aA], player), gI[player][aA] = gI[player][ed - 1], gI[player].pop(), ed--
	}
}

function gG() {
	af.gQ[fW] -= fX
}

function gH(border) {
	for (var ed = border.length, aA = ed - 1; 0 <= aA; aA--) ab.x0(fW, border[aA]) || (border[aA] = border[ed - 1], border.pop(), ed--)
}

function gK(border) {
	for (var ed = border.length, aA = ed - 1; 0 <= aA; aA--) !ab.x0(fW, border[aA]) && ab.eY(border[aA]) && (border[aA] = border[ed - 1], border.pop(), ed--)
}

function gL(border) {
	for (var eg, gA, ed = border.length, ef = ab.ef, aA = ed - 1; 0 <= aA; aA--)
		for (eg = 3; 0 <= eg; eg--)
			if (gA = border[aA] + ef[eg], ab.aFM(gA, fW)) {
				af.gI[fW].push(border[aA]), border[aA] = border[ed - 1], border.pop(), ed--;
				break
			}
}

function gM() {
	for (var eg, gA, ef = ab.ef, aA = fX - 1; 0 <= aA; aA--)
		for (eg = 3; 0 <= eg; eg--) gA = fZ[aA] + ef[eg], ab.aFN(fW, gA) && ab.aFO(gA) && (af.gI[fW].push(gA), ab.g7(gA, fW))
}

function gN() {
	var ek, em;
	loop: for (; af.iT[fW] < af.iU[fW];) {
		for (ek = af.iS[fW]; ek >= af.iR[fW]; ek--)
			if (ab.x0(fW, 4 * (af.iT[fW] * bQ.eo + ek))) break loop;
		af.iT[fW]++
	}
	loop: for (; af.iT[fW] < af.iU[fW];) {
		for (ek = af.iS[fW]; ek >= af.iR[fW]; ek--)
			if (ab.x0(fW, 4 * (af.iU[fW] * bQ.eo + ek))) break loop;
		af.iU[fW]--
	}
	loop: for (; af.iR[fW] < af.iS[fW];) {
		for (em = af.iU[fW]; em >= af.iT[fW]; em--)
			if (ab.x0(fW, 4 * (em * bQ.eo + af.iR[fW]))) break loop;
		af.iR[fW]++
	}
	loop: for (; af.iR[fW] < af.iS[fW];) {
		for (em = af.iU[fW]; em >= af.iT[fW]; em--)
			if (ab.x0(fW, 4 * (em * bQ.eo + af.iS[fW]))) break loop;
		af.iS[fW]--
	}
}

function eW(player, j3) {
	return 0 === be.eb[player] || be.eb[player] !== be.eb[j3]
}

function hB(player, j3) {
	for (var e, aWi = ac.fi(player), aA = 0; aA < aWi; aA++)
		if (0 === ac.fj(player, aA))
			if ((e = ac.fo(player, aA)) === aC.ea) {
				if (j3 === aC.ea) return !1;
				if (h9(j3)) return !0
			} else if (b8.fy.ke(e))
		if (j3 === aC.ea) {
			if (h9(e)) return !0
		} else if (hD(j3, e)) return !0;
	return !1
}

function h9(player) {
	for (var aA, gB, ed = af.gI[player].length, ef = ab.ef, eg = 3; 0 <= eg; eg--)
		for (gB = ef[eg], aA = 0; aA < ed; aA++)
			if (ab.eU(af.gI[player][aA] + gB)) return !0;
	return !1
}

function aFV(player) {
	for (var aA, gB, ed = af.gI[player].length, ef = ab.ef, eg = 3; 0 <= eg; eg--)
		for (gB = ef[eg], aA = 0; aA < ed; aA++)
			if (ab.j5(af.gI[player][aA]) && ab.eU(af.gI[player][aA] + gB)) return !0;
	return !1
}

function hD(a2N, a2O) {
	for (var aA, di, gB, gA, aUD = af.gI[a2N].length, aUE = af.gI[a2O].length, ef = (aUE < aUD && (di = a2N, a2N = a2O, a2O = di, di = aUD, aUD = aUE, 0), ab.ef), eg = 3; 0 <= eg; eg--)
		for (gB = ef[eg], aA = 0; aA < aUD; aA++)
			if (gA = af.gI[a2N][aA] + gB, ab.gC(gA) && ab.eV(gA) === a2O) return !0;
	return !1
}

function aFW(a2N, a2O) {
	for (var aA, gB, gA, aUD = af.gI[a2N].length, ef = ab.ef, eg = 3; 0 <= eg; eg--)
		for (gB = ef[eg], aA = 0; aA < aUD; aA++)
			if (ab.j5(af.gI[a2N][aA]) && (gA = af.gI[a2N][aA] + gB, ab.gC(gA)) && ab.eV(gA) === a2O) return !0;
	return !1
}

function dP() {
	this.p5 = new aWj
}

function aWj() {
	this.h8 = function(player) {
		b8.fy.a2J(player) && aM.zH(80, L(477), 637, 0, b9.nY, b9.mg, -1, !1)
	}, this.a4H = function() {
		aM.zH(80, L(478), 637, 0, b9.nY, b9.mg, -1, !1)
	}, this.oA = function(player) {
		b8.fy.a2J(player) && aM.zH(80, L(479), 637, 0, b9.nY, b9.mg, -1, !1)
	}
}

function aWk() {
	this.aWl = 0, this.im = function() {
		aN.im(), aY.im(), h.im(), ay.x.im(), av.aEi(), bd.dc && (bd.dc = !1, aZ.tk())
	}
}

function aWm() {
	this.eC = bd.eC, this.dy = 0, this.aWl = 0, this.aEg = 0, this.aWn = null, this.aWo = 7, this.a5j = 0, this.dU = function() {
		this.aEg = 0, this.aWn = [], this.dy = 0, this.aWl = 0
	}, this.aQe = function(aB) {
		if (aC.gy) this.a9l(aB);
		else if (this.aWn.push(aB), 2 === aC.yt) {
			for (var aA = 0; aA < this.aWn.length; aA++) b6.nz.im(this.aWn[aA]);
			this.aWn = []
		}
	}, this.a9l = function(aB) {
		2 !== aC.yt && (b6.nz.im(aB), b7.im(), aV.a9l(this.aEg), this.aEg === aC.a3N ? (aC.ov.im(), this.aEg = 0, this.dy = 0, this.aWl = 0, this.eC = bd.eC) : (this.aEg++, ae.a3G(), ae.lU(!0), bZ.aAL()))
	}, this.im = function() {
		h.im(), aC.gy ? (bd.dc = aV.a9l(-1) || bd.dc, lW()) : (0 !== this.dy || bd.eC >= this.eC && (this.eC += bd.a9k * Math.floor(1 + (bd.eC - this.eC) / bd.a9k), 2 === aC.yt ? lL() : this.aWp(), this.dy++, 27 < bd.eC - this.a5j)) && this
		.aWq(), lR(), bd.dc && (bd.dc = !1, x3()), this.a5j = bd.eC
	}, this.aWq = function() {
		bd.dc = !0, lT(), this.dy = 0
	}, this.aWp = function() {
		var uS, aA;
		if (this.aWl !== 7 * this.aEg) lN(), bZ.aAL();
		else {
			uS = !1;
			loop: for (; this.aWr() && (uS = !0, lN(), 2 !== aC.yt) && 0 < this.aWn.length;)
				for (aA = this.aWo - 2; 0 <= aA; aA--)
					if (lN(), 2 === aC.yt) break loop;
			uS ? bZ.aAL() : (lL(), bZ.a3J())
		}
	}, this.aWr = function() {
		return 0 < this.aWn.length && (this.aEg++, b6.nz.im(this.aWn[0]), this.aWn.shift(), !0)
	}
}

function aWs() {
	var aWt, aWu, aWv, aEg, aWw, dy = 0,
		eC = bd.eC;

	function aWz() {
		! function() {
			if (!aC.gy) return;
			if (aC.kB) return;
			if (2 !== aC.yt)
				if (aWw % 7 != 0) aWw++;
				else if (aEg === aC.a3N) {
				if (!aX2()) return;
				aV.a9l(aEg), aC.ov.im()
			} else {
				if (!aX2()) return;
				aWw++, aEg++, ae.a3G(), ae.lU(!0)
			}
			return 1
		}() && aX2() && lN()
	}

	function aX0() {
		dy = 0, (aC.gy ? (bd.dc = aV.a9l(aEg - (aWw % 7 == 0 ? 0 : 1) + aWw % 7 / 7) || bd.dc, lW) : aL.gn || !bA.a3k ? lW : (bd.dc = !0, lT))()
	}

	function aX2() {
		var aA, ed, aX3 = b7.ot.aRm,
			fK = b7.ot.aRn,
			fM = b7.ot.aRo,
			fO = b7.ot.aRp,
			aX4 = b7.ot.aRq,
			aX5 = b7.ot.aRr;
		if (!(aWt >= aX5.length)) {
			if (aX5 = aX5[aWt], aX4[aWt]) {
				for (ed = aWu + aX5, aA = aWu; aA < ed; aA++) b6.nz.og(aX3[aA], fK[aA], fM[aA], fO[aA]);
				aWu += aX5, aWt++
			} else ++aWv >= aX5 && (aWt++, aWv = 0);
			return 1
		}
		aM.a0C("Replay file smaller than expected."), bA.a13(!1), aC.yt = 2
	}
	this.aWl = 0, this.dU = function() {
		aWw = aEg = aWv = aWu = aWt = 0
	}, this.im = function() {
		var aUa;
		h.im(), bA.a7C() < 1.7 ? 0 === dy ? bd.eC >= eC && (aUa = bd.a9k / bA.a7C(), eC += aUa * Math.floor(1 + (bd.eC - eC) / aUa), 2 === aC.yt || aL.gn || !bA.a3k ? lL() : (aWz(), bZ.aAL()), dy++) : aX0() : function() {
			var aUa;
			if (bd.eC >= eC)
				if (2 === aC.yt || aL.gn || !bA.a3k) lL(), eC = bd.eC;
				else {
					for (aUa = bd.a9k / bA.a7C(), 16 < (bd.eC - eC) / aUa && (eC = bd.eC - 16 * aUa); bd.eC >= eC && 2 !== aC.yt;) eC += aUa, aWz();
					bZ.aAL()
				} aX0()
		}(), lR(), bd.dc && (bd.dc = !1, x3())
	}, this.z3 = function() {
		b7.ot.aRr.length - aWt <= 2 || aM.a0C("Replay file larger than expected.")
	}
}

function aX6() {
	var dy = 0,
		eC = bd.eC;
	this.aWl = 0, this.im = function() {
		h.im(), aC.gy ? lW() : 0 === dy ? bd.eC >= eC && (eC += bd.a9k * Math.floor(1 + (bd.eC - eC) / bd.a9k), 2 === aC.yt || aL.gn ? lL() : (lN(), bZ.aAL()), dy++) : ((aL.gn ? lW : (bd.dc = !0, lT))(), dy = 0), lR(), bd.dc && (bd.dc = !1, x3())
	}
}

function dL() {
	this.z2 = null, this.dc = !1, this.eC = 0, this.a9k = 56;
	var aX7 = 0;

	function aX8() {
		bd.eC = aX7 = performance.now(), bd.z2.im(), window.requestAnimationFrame(aX8)
	}
	this.dU = function() {
		this.a3h(), window.requestAnimationFrame(aX8), this.eC = performance.now()
	}, this.a3Y = function() {
		aC.gm ? (this.z2 = new aWs, this.z2.dU()) : aC.kB ? this.z2 = new aX6 : (this.z2 = new aWm, this.z2.dU())
	}, this.a3h = function() {
		this.z2 = new aWk, this.dc = !0
	}, this.im = function() {
		this.z2.aWl++
	}, this.jp = function() {
		return this.z2.aWl
	}, this.aQG = function() {
		var di = performance.now();
		di < aX7 + 1e3 || (this.eC = di, this.z2.im())
	}
}

function cn() {
	var aE5 = 0,
		aX9 = !0;

	function aXA(id) {
		id = [L(480), L(481), L(482), L(483)][id];
		aM.a5Q(id)
	}
	this.im = function() {
		var di, a5l;
		bd.eC < aE5 || (aE5 = bd.eC + 5e3, aC.gm) || aC.kB || b8.fy.gp(aC.eN) || (di = new Date, a5l = di.getUTCSeconds(), aX9 ? a5l < 50 && (aX9 = !1) : a5l < 50 || (aX9 = !0, (a5l = (di.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5l || 20 ==
			a5l || 40 == a5l ? aC.k9 < 7 && aXA(0) : 10 == a5l || 30 == a5l || 50 == a5l ? 7 !== aC.k9 && 10 !== aC.k9 || aXA(1) : 5 == a5l || 25 == a5l || 45 == a5l ? 8 === aC.k9 && aXA(2) : 35 == a5l && 9 === aC.k9 && aXA(3))))
	}
}

function ch() {
	var m9, mA, mM, mN, aXB = 0,
		aXC = 0;

	function aXE() {
		return Math.pow(Math.pow(mM - m9, 2) + Math.pow(mN - mA, 2), .5)
	}

	function aXD(e) {
		m9 = h.k * e.touches[0].clientX, mA = h.k * e.touches[0].clientY, mM = h.k * e.touches[1].clientX, mN = h.k * e.touches[1].clientY
	}
	this.a0V = function(e) {
		return 1 < e.touches.length ? (aXC = bd.eC, aXB = 3, aXD(e), aK.qu(), !0) : (aXB = 0, !1)
	}, this.a0W = function(e) {
		var aJL, hv, hw;
		return 0 !== aC.yt && 1 < e.touches.length && (aXB = Math.max(aXB - 1, 0), aG.mR() && (aJL = aXE(), aXD(e), e = aXE(), hv = Math.floor((m9 + mM) / 2), hw = Math.floor((mA + mN) / 2), aR.a7c(hv, hw, Math.max(.125, e) / Math.max(.125,
			aJL)), bd.dc = !0), !0)
	}, this.a0t = function() {
		var ek, em;
		return !!(aXB && (aXB = 0, bd.eC < aXC + 500)) && (ek = (m9 + mM) / 2, em = (mA + mN) / 2, aK.a0n(ek, em), aK.click(ek, em, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dy = 0, this.aB = null, this.dU = function(aB) {
		this.dy = 0, this.aB = aB, this.size = aB.length
	}, this.tE = function() {
		this.aB = null
	}, this.oe = function(size) {
		for (var f5 = 0, aB = this.aB, mR = this.dy + size - 1, aA = this.dy; aA <= mR; aA++) f5 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mR - aA;
		return this.dy += size, this.dy > 8 * this.size && console.error("Unwrapper Overflow"), f5
	}, this.aQm = function(size) {
		var ex = size >> 1;
		return (1 << ex) * this.oe(size - ex) + this.oe(ex)
	}, this.aQn = function(aXF) {
		return this.size === bB.aQl(aXF)
	}, this.aS4 = function(vt, aXG, aXH) {
		var g5 = this.oe(vt);
		if (!g5) return null;
		for (var vt = Math.max(g5, aXH), g = new(aXG <= 8 ? Uint8Array : aXG <= 16 ? Uint16Array : Uint32Array)(vt), aA = 0; aA < g5; aA++) g[aA] = this.oe(aXG);
		aXH = g[g5 - 1];
		return aXH && g.fill(aXH, g5), g
	}, this.aS5 = function(vt, aXI, aXH) {
		var g5 = this.oe(vt);
		if (!g5) return null;
		for (var vt = Math.max(g5, aXH), g = new Array(vt), aA = 0; aA < g5; aA++) g[aA] = this.aS2(aXI);
		return g.fill(g[g5 - 1], g5), g
	}, this.aS2 = function(vt) {
		return bE.uz.v3(this.oe(vt))
	}, this.aS3 = function() {
		var pK = bD.rv.rw(bD.rv.rx(this.oe(30))),
			pK = b8.zY.a3B(pK, "_", "/");
		pK = b8.zY.a3B(pK, "-", "+");
		for (var aXJ = "";
			(pK.length + aXJ.length) % 4;) aXJ += "=";
		pK = "data:image/png;base64," + pK + aXJ;
		var aG1 = new Image;
		aG1.onload = function() {
			b7.aGQ.aGR(aG1), aG1.onload = null, aG1 = null
		}, aG1.src = pK
	}
}

function dF() {
	this.aSt = 0, this.aSu = 0, this.aSp = 0, this.aSq = 0, this.aSr = 0, this.aSs = 0, this.aAM = [0, 0, 0, 0], this.mQ = function() {
		this.aSt = aR.x5(), this.aSu = aR.x6(), this.aSp = -this.aSt, this.aSq = -this.aSu, this.aSr = h.i / iE, this.aSs = h.j / iE, this.aAM[0] = Math.floor(this.aSp), this.aAM[1] = Math.floor(this.aSq), this.aAM[2] = Math.floor(this.aAM[0] +
			this.aSr + 1), this.aAM[3] = Math.floor(this.aAM[1] + this.aSs + 1), bZ.aAJ = !0
	}
}

function ci() {
	var a6I, lv;
	this.dU = function() {
		a6I = 1, lv = 0
	}, this.im = function() {
		0 < a6I && (lv = 0 === lv ? bd.eC + 16 : lv, a6I = (a6I -= .001 * (bd.eC - lv)) < 0 ? 0 : a6I, lv = bd.eC, bd.dc = !0)
	}, this.tk = function() {
		0 < a6I && (tl.fillStyle = "rgba(0,0,0," + a6I + ")", tl.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dy = 0, this.aB = null, this.dU = function(aB) {
		this.dy = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aXF) {
		return this.dU(new Uint8Array(this.aQl(aXF))), this.aB
	}, this.tE = function() {
		this.aB = null
	}, this.a7 = function(size, a5p) {
		for (var aB = this.aB, mR = this.dy + size - 1, aA = this.dy; aA <= mR; aA++) aB[aA >> 3] |= (a5p >> mR - aA & 1) << 7 - (7 & aA);
		this.dy += size, this.dy > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQk = function(size, a5p) {
		var ex = size >> 1,
			eg = 1 << ex;
		this.a7(size - ex, bJ.dj(a5p, eg)), this.a7(ex, a5p % eg)
	}, this.aXM = function(size) {
		for (var aB = this.aB, mR = this.dy + size, aA = this.dy; aA < mR; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQl = function(aXF) {
		return aXF + 7 >> 3
	}, this.aXN = function(g, j9, mR, aXO) {
		for (var aA = j9; aA < mR; aA++) this.a7(aXO, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dy = 0
	}, this.aR9 = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aXP, value) {
		for (var g = this.g, mR = this.dy + aXP - 1, aXQ = 1 + (mR >> 3); g.length < aXQ;) g.push(0);
		for (var aA = this.dy; aA <= mR; aA++) g[aA >> 3] |= (value >> mR - aA & 1) << 7 - (7 & aA);
		this.dy += aXP
	}, this.db = function(g, vt, aXG) {
		var aXR = b8.pm.a1g(g);
		this.a7(vt, aXR);
		for (var aA = 0; aA < aXR; aA++) this.a7(aXG, g[aA])
	}, this.aSM = function(g, vt, aXI) {
		var aXR = b8.pm.a1g(g);
		this.a7(vt, aXR);
		for (var aA = 0; aA < aXR; aA++) this.aSK(g[aA], aXI)
	}, this.aSK = function(pK, vt) {
		var ed = pK.length;
		this.a7(vt, ed);
		for (var aA = 0; aA < ed; aA++) this.a7(16, pK.charCodeAt(aA))
	}, this.aSL = function(a1m) {
		var aXS = (a1m = a1m.toDataURL()).split(",");
		if (aXS.length < 2) console.log("error 266");
		else {
			a1m = b8.zY.a3B(a1m = aXS[aXS.length - 1], "/", "_"), a1m = b8.zY.a3B(a1m, "\\+", "-");
			var a1m = b8.zY.a3B(a1m, "=", ""),
				vC = bE.rv.v9(a1m),
				ed = vC.length;
			this.a7(30, ed);
			for (var aA = 0; aA < ed; aA++) this.a7(6, vC[aA])
		}
	}
}
a(), self.aiCommand746 = function(f5) {
	0 === f5 ? bo() : 1 !== f5 || !z || 1 !== z.id || z.dk < 14 || bH.f6()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};